import db from "../models/index";



let getListProducts = () => {
    return new Promise(async (resolve, reject) => {
        try {
            // Chọn các trường dữ liệu mà bạn muốn lấy từ bảng Product
            let listProducts = await db.Product.findAll({
                attributes: ['id', 'id_type', 'name', 'size', 'weight', 'description', 'introduction', 'price', 'status']
            });
            resolve(listProducts);
        } catch (e) {
            reject(e);
        }
    });
}
// let getProductById = (id)=>{
//     return new Promise(async (resolve, reject)=>{
//         let product = await db.Product.findOne({
//             where:{id: id}
//         })
//         resolve(product)
//     })
// }
module.exports = {
    getListProducts:getListProducts(),
    // getProductById: getProductById()
}