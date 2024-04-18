import productServicer from "../services/productServicer";

let getProductDetailById = async (req, res) => {
  const id = req.query.id;
  if (!id) {
    return res.status(500).json({
      errCode: 1,
      message: "Thiếu thông số id",
    });
  }
  const data = await productServicer.getProductById(id);
  return res.status(200).json({
    errCode: data.errCode,
    message: data.message,
    data: data.product ? data.product : {},
  });
};

module.exports = {
  getProductDetailById: getProductDetailById,
};
