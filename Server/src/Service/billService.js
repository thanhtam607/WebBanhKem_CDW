import db from "../models/index";

let getAllBillsByIdUser = (id_user) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id_user) {
        resolve("Missing required parameter");
      }

      let bills = await db.Bill.findAll({
        where: { id_user: id_user },
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

module.exports = {
  getAllBillsByIdUser: getAllBillsByIdUser,
  getBillById: getBillById,
};
