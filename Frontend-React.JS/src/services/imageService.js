import axios from "../axios";
// api /api/updateImage id img
let updateImage = (id, img) => {
  return axios.post("/api/updateImage", { id, img });
};

// api /api/deleteImage id
let deleteImage = (id) => {
  return axios.post("/api/deleteImage", { id });
};

export { updateImage, deleteImage };
