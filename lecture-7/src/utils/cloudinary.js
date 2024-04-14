import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const deleteOnCloudinary = async (public_id) => {
  console.log("public ", public_id);
  try {
    await cloudinary.api
      .delete_resources([public_id])
      .then((result) => console.log(result));
  } catch (error) {
    console.log(error);
    return null;
  }
};

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file has been uploaded successfull
    //console.log("file is uploaded on cloudinary ", response.url);
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    console.log("error", error);
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
    return null;
  }
};

const extractPublicIdFromUrl = async (imageUrl) => {
  const cloudinaryUrlRegex = /([^\/]+\.jpg)\/?$/;

  const match = imageUrl.match(cloudinaryUrlRegex);
  console.log("match", match);
  let parts = match[0].split(".");
  let x = parts[0];

  if (match && match.length > 1) {
    // return match[1]; // The public ID is captured in the first capturing group
    return x;
  } else {
    return null; // No public ID found
  }
};

export { uploadOnCloudinary, extractPublicIdFromUrl, deleteOnCloudinary };
