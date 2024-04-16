import db from "../models/index";


// list sản phẩm hiển thị trên user
let getListProducts = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let query = "SELECT distinct products.id ,products.name,TYPEOFCAKE.name as type, " +
                "products.size, products.weight, products.description, products.introduction, products.price, " +
                "products.STATUS  from products, TYPEOFCAKE where products.id_Type = TYPEOFCAKE.id and products.STATUS=0";
            let listProducts = await db.sequelize.query(query, { type: db.sequelize.QueryTypes.SELECT });
            await Promise.all(listProducts.map(async (product) => {
                let listImgs = await getImgsByProduct(product.id);
                product.imgs = listImgs;
            }));
            resolve(listProducts);
        } catch (e) {
            reject(e);
        }
    });
}
let getProductById = (id) => {
    return new Promise(async (resolve, reject) => {
            try {

                let query = "SELECT distinct products.id, products.name, TYPEOFCAKE.name as type, " +
                    "products.size, products.weight, products.description, products.introduction, products.price, " +
                    "products.STATUS FROM products, TYPEOFCAKE WHERE products.id_Type = TYPEOFCAKE.id AND products.ID = ?";
                let product = await db.sequelize.query(query, {
                    replacements: [id],
                    type: db.sequelize.QueryTypes.SELECT
                });

                resolve(product);
            } catch (e) {
                reject(e);
            }

    });
};
let getImgsByProduct= (idProduct)=>{
    return new Promise(async (resolve, reject) => {
        try {

            let query = "SELECT id, productImgs.id_product, productImgs.img, status from productImgs where   status = 0 and id_product=?";
            let listImgs = await db.sequelize.query(query, {
                replacements: [idProduct],
                type: db.sequelize.QueryTypes.SELECT
            });
            resolve(listImgs);
        } catch (e) {
            reject(e);
        }

    });
}
module.exports = {
    getListProducts:getListProducts(),
    getProductById: getProductById,
    getImgsByProduct: getImgsByProduct
}