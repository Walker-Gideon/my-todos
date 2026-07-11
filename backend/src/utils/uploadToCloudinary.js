import cloudinary from "../config/cloudinary.js";

export const uploadToCloudinary = (flieBuffer) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "profile-image" },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      },
    );

    uploadStream.end(flieBuffer);
  });
};
