import db from "../models";

let updateImage = (data) => {
  return new Promise(async (resolve, reject) => {
    if (!data.id || !data.img) {
      resolve("Missing required parameter");
    }

    try {
      let image = await db.Product_Img.findOne({
        where: { id: data.id },
      });

      if (image) {
        image.img = data.img;
        image.save();

        resolve("Update image successfully");
      } else {
        resolve("Image not found");
      }
    } catch (e) {
      reject(e);
    }
  });
};

let deleteImage = (data) => {
  return new Promise(async (resolve, reject) => {
    console.log(data);
    if (!data.id) {
      resolve("Missing required parameter");
    }

    try {
      let image = await db.Product_Img.findOne({
        where: { id: data.id },
      });

      if (image) {
        image.destroy();
        resolve({
          errCode: 0,
          message: "Delete image successfully",
        });
      } else {
        resolve({
          errCode: 1,
          message: "Image not found",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  updateImage: updateImage,
  deleteImage: deleteImage,
};
