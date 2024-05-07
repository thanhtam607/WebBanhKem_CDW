import db from "../models";

let getAllCategories = async (req, res) => {
  return new Promise(async (resolve, reject) => {
    try {
      let categories = await db.Category.findAll();

      if (!categories || categories.length === 0) {
        resolve({
          errCode: 1,
          message: "Không có danh mục nào",
        });
      }
      resolve({
        errCode: 0,
        data: categories,
      });
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};

module.exports = {
  getAllCategories: getAllCategories,
};
