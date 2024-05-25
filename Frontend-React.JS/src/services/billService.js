import axios from "../axios";
// gett all cart by id user

const createBill = (data) => {
    return axios.post(`/api/createBill`,data);
};

export {
    createBill,
};
