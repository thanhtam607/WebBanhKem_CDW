import billService from "../service/billService";

let getAllBillsByIdUser = async (req, res) => {
  let data = req.query;
  if (!data.id_user) {
    return res.status(200).json({
      errCode: 1,
      message: "Missing required parameter",
    });
  }

  let bills = await billService.getAllBillsByIdUser(data.id_user);
  return res.status(200).json({
    errCode: 0,
    data: bills,
  });
};

let getBillById = async (req, res) => {
  let data = req.query;
  if (!data.id) {
    return res.status(200).json({
      errCode: 1,
      message: "Missing required parameter",
    });
  }

  let bill = await billService.getBillById(data.id);
  return res.status(200).json({
    errCode: 0,
    data: bill,
  });
};

let updateStatusBill = async (req, res) => {
  let data = req.body;
  if (!data.id || !data.status) {
    return res.status(200).json({
      errCode: 1,
      message: "Missing required parameter",
    });
  }
  let message = await billService.updateStatusBill(data);
  return res.status(200).json({
    errCode: 0,
    message: message,
  });
};
let createBill = async (req, res) => {
  let data = await billService.createBill(req.body);

  return res.status(200).json({
    errCode: data.errCode,
    message: data.message,
  });
};

let getAllBills = async (req, res) => {
  let data = req.query;
  let bills = await billService.getAllBills(data);
  return res.status(200).json({
    errCode: 0,
    data: bills,
  });
};
let create_payment_vnpayurl =  async (req, res) => {
  var ipAddr = req.headers['x-forwarded-for'] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress;
  var amount = req.body.amount;
  var orderInfo = req.body.orderInfo;
  let data = await billService.create_payment_vnpayurl(ipAddr, amount, orderInfo)
  return res.status(200).json({
    errCode: 0,
    vnurl: data,
  });
}
let  getBillStatisticsForCurrentMonth = async (req, res) => {
  let bills = await billService.getBillStatisticsForCurrentMonth();
  return res.status(200).json({
    errCode: 0,
    data: bills,
  });
};
let  getTotalBillForCurrentMonth= async (req, res) => {
  let bills = await billService.getTotalBillForCurrentMonth(req.query.month);
  return res.status(200).json({
    errCode: 0,
    data: bills,
  });
};
let sumProBillTotal=async (req, res) => {
  let bills = await billService.sumProBillTotal(req.query.month);
  return res.status(200).json({
    errCode: 0,
    data: bills,
  });
}
let getSalesPercentageForCat = async (req, res) => {
  let data = await billService.getSalesPercentageForCat();
  return res.status(200).json({
    errCode: 0,
    data: data,
  });
}

module.exports = {
  getAllBillsByIdUser: getAllBillsByIdUser,
  getBillById: getBillById,
  updateStatusBill: updateStatusBill,
  createBill: createBill,
  getAllBills: getAllBills,
  create_payment_vnpayurl: create_payment_vnpayurl,
  getBillStatisticsForCurrentMonth:  getBillStatisticsForCurrentMonth,
  getTotalBillForCurrentMonth: getTotalBillForCurrentMonth,
  sumProBillTotal: sumProBillTotal,
  getSalesPercentageForCat: getSalesPercentageForCat
};
