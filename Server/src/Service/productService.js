import db from "../models/index";

// list sản phẩm hiển thị trên user
let getListProducts = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const listProducts = await db.Product.findAll({
        where: {
          STATUS: 0,
        },
        attributes: [
          "id",
          "name",
          "introduction",
          "description",
          "size",
          "weight",
          "price",
        ],
        include: [
          {
            model: db.Category,
            as: "category",
            attributes: ["id", "name"],
            required: true,
          },
          {
            model: db.Product_Img,
            as: "Images",
            attributes: ["img"],
            required: true,
          },
        ],
      });

      resolve(listProducts);
    } catch (e) {
      reject(e);
    }
  });
};
let getProductById = (id) => {
    return new Promise(async (resolve, reject) => {
            try {
                const product = await db.Product.findOne({
                    where: { id: id },
                    attributes: ['id', 'name', 'size', 'weight', 'description', 'introduction', 'price', 'status'],
                    include: [ {
                        model: db.Category,
                        as: 'category',
                        attributes: ['name'],
                        required: true
                    },{
                        model: db.Product_Img,
                        as: 'Images',
                        attributes: ['img'],
                        required: true
                    }]
                });
                    resolve(product);

            } catch (e) {
                reject(e);
            }
    });
};
let getProductsByCategory = (category) => {
    return new Promise(async (resolve, reject) => {
        try {
            const listProducts = await db.Product.findAll({
                where: {
                    STATUS: 0,
                },
                attributes: ['id', 'name', 'introduction', 'description', 'size', 'weight', 'price'],
                include: [
                    {
                        model: db.Category,
                        as: 'category',
                        attributes: ['name'],
                        where: {
                            name: category
                        },
                        required: true
                    },{
                        model: db.Product_Img,
                        as: 'Images',
                        attributes: ['img'],
                        required: true
                    }
                ]
            });
            resolve(listProducts);
        } catch (e) {
            reject(e);
        }
    });
}
let getHotProducts = async () => {
    // try {
    //     const hotProducts = await db.Product.findAll({
    //         attributes: ['id', 'name', 'introduction', 'description', 'size', 'weight', 'price'],
    //         where: { STATUS: 0 },
    //         include: [
    //             {
    //                 model: db.Category,
    //                 as: 'category',
    //                 attributes: ['name'],
    //                 required: true
    //             }, {
    //                 model: db.Product_Img,
    //                 as: 'Images',
    //                 attributes: ['img'],
    //                 required: true
    //             },
    //             {
    //                 model: db.Bill_Detail,
    //                 as: 'BillDetailData',
    //                 attributes: [
    //                     [db.fn('SUM', db.col('amount')), 'total'] // Chỉ định alias là 'total' cho kết quả
    //                 ]
    //             }
    //         ],
    //         group: ['id'],
    //         order: [[db.literal('total'), 'DESC']]
    //     });
    //     return hotProducts;
    // } catch (error) {
    //     throw new Error('Lỗi khi lấy sản phẩm hot:', error);
    // }
};

module.exports = {
    getListProducts: getListProducts,
    getProductById: getProductById,
    getProductsByCategory: getProductsByCategory,

}