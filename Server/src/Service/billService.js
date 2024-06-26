import db from "../models/index";
import {QueryTypes} from "sequelize";

let getAllBillsByIdUser = (id_user) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id_user) {
        resolve("Missing required parameter");
      }

      let bills = await db.Bill.findAll({
        where: { id_user: id_user },
        include: [
          {
            model: db.Bill_Detail,
            as: "billDetailData",
            attributes: ["amount", "price", "notes"],
            include: [
              {
                model: db.Product,
                as: "ProductData",
                attributes: [
                  "id",
                  "name",
                  "size",
                  "weight",
                  "description",
                  "introduction",
                  "price",
                  "status",
                ],
                include: [
                  {
                    model: db.Product_Img,
                    as: "Images",
                    attributes: ["img"],
                    required: true,
                  },
                ],
              },
            ],
          },
        ],
        order: [["createdAt", "DESC"]],
      });

      resolve(bills);
    } catch (e) {
      reject(e);
    }
  });
};

let getBillById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve("Missing required parameter");
      }

      let bill = await db.Bill.findOne({
        where: { id: id },
        include: [
          {
            model: db.Bill_Detail,
            as: "billDetailData",
            attributes: ["amount", "price"],
            include: [
              {
                model: db.Product,
                as: "ProductData",
                attributes: [
                  "id",
                  "name",
                  "size",
                  "weight",
                  "description",
                  "introduction",
                  "price",
                  "status",
                ],
                include: [
                  {
                    model: db.Product_Img,
                    as: "Images",
                    attributes: ["img"],
                    required: true,
                  },
                ],
              },
            ],
          },
        ],
      });

      resolve(bill);
    } catch (e) {
      reject(e);
    }
  });
};

let updateStatusBill = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data) {
        resolve("Missing required parameter");
      }

      let bill = await db.Bill.update(
        {
          status: data.status,
        },
        {
          where: { id: data.id },
        }
      );

      resolve("Update status bill successfully");
    } catch (e) {
      reject(e);
    }
  });
};
let createBill = (data) => {
  return new Promise(async (resolve, reject) => {
    if (data) {
      try {
        const bill = await db.Bill.create({
          id_user: data.id_user,
          fullname: data.fullname,
          phone_number: data.phone_number,
          notes: data.notes,
          pro_bill: data.pro_bill,
          fee_bill: data.fee_bill,
          payment: data.payment,
          status: 1,
          address: data.address,
        });
        let id = bill.id;
        console.log(
          "billDetail is an array and has length:",
          data.billDetail.length
        );
        data.billDetail.map(async (item) => {
          await createBillDetail(item, id);
        });
        resolve("Update successfully");
      } catch (e) {
        reject(e);
      }
    }
  });
};
let createBillDetail = (data, id_bill) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (data && id_bill) {
        await db.Bill_Detail.create({
          id_product: data.id_product,
          id_bill: id_bill,
          amount: data.amount,
          notes: data.notes,
          price: data.price,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getAllBills = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let bills = await db.Bill.findAll({
        include: [
          {
            model: db.Bill_Detail,
            as: "billDetailData",
            attributes: ["amount", "price"],
            include: [
              {
                model: db.Product,
                as: "ProductData",
                attributes: [
                  "id",
                  "name",
                  "size",
                  "weight",
                  "description",
                  "introduction",
                  "price",
                  "status",
                ],
                include: [
                  {
                    model: db.Product_Img,
                    as: "Images",
                    attributes: ["img"],
                    required: true,
                  },
                ],
              },
            ],
          },
        ],
        order: [["createdAt", "DESC"]],
      });

      resolve(bills);
    } catch (e) {
      reject(e);
    }
  });
};
let create_payment_vnpayurl =  (ipAddr ,amount, orderInfo) =>{
  var tmnCode = 'TC59NATY';
  var secretKey = 'QUKDKKNOATQJURXAADEBNAZDBMVVOSPF';
  var vnpUrl = 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html';
  var returnUrl = 'http://localhost:3000/vnpayreturn';
  var date = new Date()
  var createDate = formatDateToYYYYMMDDHHMMSS(date);
  var orderId = formatTimeToHHMMSS(date);
  var expirationDate = new Date(date.getTime() + 15 * 60 * 1000);
  var expireDate = formatDateToYYYYMMDDHHMMSS(expirationDate);
  var currCode = 'VND';
  var vnp_Params = {};
  vnp_Params['vnp_Version'] = '2.1.0';
  vnp_Params['vnp_Command'] = 'pay';
  vnp_Params['vnp_TmnCode'] = tmnCode;
  vnp_Params['vnp_Locale'] = 'vn';
  vnp_Params['vnp_CurrCode'] = currCode;
  vnp_Params['vnp_TxnRef'] = orderId;
  vnp_Params['vnp_OrderInfo'] = orderInfo;
  vnp_Params['vnp_OrderType'] = 100000;
  vnp_Params['vnp_Amount'] = amount * 100;
  vnp_Params['vnp_ReturnUrl'] = returnUrl;
  vnp_Params['vnp_IpAddr'] = ipAddr;
  vnp_Params['vnp_CreateDate'] = createDate;
  vnp_Params['vnp_ExpireDate'] = expireDate;
  vnp_Params = sortObject(vnp_Params);
  var querystring = require('qs');
  var signData = querystring.stringify(vnp_Params, { encode: false });
  var crypto = require("crypto");
  var hmac = crypto.createHmac("sha512", secretKey);
  var signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");
  vnp_Params['vnp_SecureHash'] = signed;
  vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false });
  return vnpUrl;
}
function sortObject(obj) {
  let sorted = {};
  let str = [];
  let key;
  for (key in obj){
    if (obj.hasOwnProperty(key)) {
      str.push(encodeURIComponent(key));
    }
  }
  str.sort();
  for (key = 0; key < str.length; key++) {
    sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
  }
  return sorted;
}
function formatTimeToHHMMSS(now) {


  // Adjust to GMT+7
  let timezoneOffset = 7 * 60; // Offset in minutes for GMT+7
  now.setMinutes(now.getMinutes() + now.getTimezoneOffset() + timezoneOffset);

  // Get the components of the time
  let hours = String(now.getHours()).padStart(2, '0');
  let minutes = String(now.getMinutes()).padStart(2, '0');
  let seconds = String(now.getSeconds()).padStart(2, '0');

  // Combine them into the desired format
  return `${hours}${minutes}${seconds}`;
}

function formatDateToYYYYMMDDHHMMSS( now) {


  // Adjust to GMT+7
  let timezoneOffset = 7 * 60; // Offset in minutes for GMT+7
  now.setMinutes(now.getMinutes() + now.getTimezoneOffset() + timezoneOffset);

  // Get the components of the date and time
  let year = now.getFullYear();
  let month = String(now.getMonth() + 1).padStart(2, '0');
  let day = String(now.getDate()).padStart(2, '0');
  let hours = String(now.getHours()).padStart(2, '0');
  let minutes = String(now.getMinutes()).padStart(2, '0');
  let seconds = String(now.getSeconds()).padStart(2, '0');

  // Combine them into the desired format
  return `${year}${month}${day}${hours}${minutes}${seconds}`;
}




let getBillStatisticsForCurrentMonth = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1;
      const today = currentDate.getDate();

      // Tạo số ngày trong tháng hiện tại


      // Khởi tạo mảng kết quả
      let billStatistics = Array.from({ length: today+1 }, (_, index) => {
        return index < today ? 0 : undefined;
      });

      const bills = await db.Bill.findAll({
        attributes: [
          [db.sequelize.fn('DAY', db.sequelize.col('createdAt')), 'day'],
          [db.sequelize.fn('COUNT', db.sequelize.col('id')), 'bill_count']
        ],
        where: [
          db.sequelize.where(
              db.sequelize.fn('YEAR', db.sequelize.col('createdAt')),
              currentYear
          ),
          db.sequelize.where(
              db.sequelize.fn('MONTH', db.sequelize.col('createdAt')),
              currentMonth
          ),   { status: { [db.Sequelize.Op.ne]: 2 } }
        ],
        group: [db.sequelize.fn('DAY', db.sequelize.col('createdAt'))],
        order: [[db.sequelize.fn('DAY', db.sequelize.col('createdAt')), 'ASC']]
      });

      // Đặt số lượng đơn hàng cho mỗi ngày có đơn hàng
      bills.forEach(bill => {
        const day = bill.get('day');
        const count = bill.get('bill_count');
        if (day <= today) {
          billStatistics[day - 1] = parseInt(count, 10);
        }
      });

      resolve(billStatistics);
    } catch (e) {
      reject(e);
    }
  });
};

let getTotalBillForCurrentMonth = (month) => {
  return new Promise(async (resolve, reject) => {
    try {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();


      const totalBills = await db.Bill.count({
        where: {
          [db.Sequelize.Op.and]: [
            db.sequelize.where(
                db.sequelize.fn('YEAR', db.sequelize.col('createdAt')),
                currentYear
            ),
            db.sequelize.where(
                db.sequelize.fn('MONTH', db.sequelize.col('createdAt')),
               month
            ),
            { status: { [db.Sequelize.Op.ne]:2 } }
          ]
        }
      });

      resolve(totalBills);
    } catch (e) {
      reject(e);
    }
  });
};
let sumProBillTotal = (month) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Get the current month and year
      const now = new Date();
      // JavaScript months are 0-11
      const currentYear = now.getFullYear();

      // Query to get all bills with the current month and year and status different from 2
      const bills = await db.Bill.findAll({
        where: {
          [db.Sequelize.Op.and]: [
            db.sequelize.where(
                db.sequelize.fn('YEAR', db.sequelize.col('createdAt')),
                currentYear
            ),
            db.sequelize.where(
                db.sequelize.fn('MONTH', db.sequelize.col('createdAt')),
                month
            ),
            { status: { [db.Sequelize.Op.ne]:2 } }
          ]
        }
      });

      // Calculate the total pro_bill
      const totalProBill = bills.reduce((sum, bill) => sum + bill.pro_bill, 0);

      resolve(totalProBill);
    } catch (error) {
      console.error('Error calculating total pro_bill:', error);
      reject(error);
    }
  });
};

let getSalesPercentageForCat = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const totalSold = await db.Bill_Detail.sum('amount', {
        include: [
          {
            model: db.Product,
            as: 'ProductData',
            attributes: [], // không cần lấy thuộc tính của Product, chỉ cần để join
          },
          {
            model: db.Bill,
            as: 'BillData',
            attributes: [],
            where: {
              status: {
                [db.Sequelize.Op.ne]: 2 // status không bằng 2
              }
            }
          }
        ]
      });
      const results = await db.Bill_Detail.findAll({
        attributes: [
          [db.Sequelize.literal(`ProductData.id_type`), 'id_type'],
          [
            db.Sequelize.literal(`ROUND(SUM(amount) * 100.0 / ${totalSold}, 2)`),
            'percentage_sold'
          ]
        ],
        include: [
          {
            model: db.Product,
            as: 'ProductData',
            attributes: [], // không cần lấy thuộc tính của Product, chỉ cần để join
          },
          {
            model: db.Bill,
            as: 'BillData',
            where: {
              status: {
                [db.Sequelize.Op.ne]: 2 // status không bằng 2
              }
            }
          }
        ],
        group: ['ProductData.id_type'],
        order: [[db.Sequelize.literal('percentage_sold'), 'DESC']]
      });

      // Chuẩn bị dữ liệu trả về
      const formattedResults = results.map(row => ({
        id_type: row.dataValues.id_type,
        percentage_sold: row.dataValues.percentage_sold
      }));
      resolve(formattedResults); // Trả về kết quả
    } catch (error) {
      reject(error); // Xử lý lỗi
    }
  });
};

module.exports = {
  getAllBillsByIdUser,
  getBillById,
  updateStatusBill,
  createBill,
  getAllBills,
  create_payment_vnpayurl,
  getBillStatisticsForCurrentMonth,
  getTotalBillForCurrentMonth,
  sumProBillTotal,
  getSalesPercentageForCat,

};