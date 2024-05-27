import axios from "axios";
const getDistricts = (provinceId) => {
    return axios.get(`https://api.mysupership.vn/v1/partner/areas/district?province=${provinceId}`)
        .then(response => response.data)
        .catch(error => {
            console.error("There was an error fetching the districts!", error);
            throw error;
        });
};
const getCommunes = (districtId) => {
    return axios.get(`https://api.mysupership.vn/v1/partner/areas/commune?district=${districtId}`)
        .then(response => response.data)
        .catch(error => {
            console.error("There was an error fetching the communes!", error);
            throw error;
        });
};

export {
   getDistricts, getCommunes
};