import axios from "../axios";
// gett all cart by id user

const createBill = (data) => {
    return axios.post(`/api/createBill`,data);
};
const getDistricts = (provinceId) => {
    const url = `https://api.mysupership.vn/v1/partner/areas/district?province=${provinceId}`;

    return fetch(url)
        .then(async response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            var data = await response.json()
            // console.log(data)
            return data;
        })

};
const getCommunes = (districtId) => {
    return fetch(`https://api.mysupership.vn/v1/partner/areas/commune?district=${districtId}`)
        .then(async response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            var data = await response.json()
            // console.log(data)
            return data;
        })
};
let getBillByUser=(id_user)=>{
    return axios.get(`/api/getAllBillsByIdUser?id_user=${id_user}`)
}
let updateStatusBill = (id, status)=>{
    return axios.post("/api/updateStatusBill", {id: id, status: status})
}
const create_payment_vnpay = async (amount, orderInfo) => {

    try {
        const response = await axios.post("/api/create_payment_url", {amount: amount, orderInfo: orderInfo});
        // Sau khi nhận được phản hồi từ server, chuyển hướng người dùng tới URL mới
        console.log(response)
        window.location.href = response.vnurl; // Chuyển hướng người dùng
    } catch (error) {
        console.error("Error creating Vnpay payment:", error);
        // Xử lý lỗi nếu cần
    }
}
let getAllBill=()=> {
    return axios.get(`/api/getAllBills`)
}
let getBillById = (id) => {
    return axios.get(`/api/getBillById?id=${id}`);
};



export {
    createBill,
    getDistricts,
    getCommunes,
    getBillByUser,
    updateStatusBill,
    create_payment_vnpay,
    getAllBill,
    getBillById,
};
