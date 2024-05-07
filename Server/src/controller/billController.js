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

module.exports = {
  getAllBillsByIdUser: getAllBillsByIdUser,
  getBillById: getBillById,
};
