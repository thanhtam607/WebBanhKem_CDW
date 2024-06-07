import imageService from "../Service/imageService";

let updateImage = async (req, res) => {
  let data = req.body;
  let response = await imageService.updateImage(data);
  return res.status(200).json(response);
};

let deleteImage = async (req, res) => {
  let data = req.body;
  console.log(req.body);
  let response = await imageService.deleteImage(data);
  return res.status(200).json({
    errCode: response.errCode,
    message: response.message,
  });
};

module.exports = {
  updateImage: updateImage,
  deleteImage: deleteImage,
};
