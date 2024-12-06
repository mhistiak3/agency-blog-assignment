/*
 * Title: Cloudinary Config
 * Description: Configure Cloudinary in AgencyBlog Project
 * Author: Istiak Ahammad
 * Date: 8/20/2024
 *
 */

/**
 *  node module
 **/
import cloudinary from "cloudinary"
import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME } from "./config.js";



/**
 *  Configure Cloudinary settings for image uploads.
 **/
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

/**
 *  Uploads on image base64 to Cloudinary
 * @params {String} image
 **/
const uploadToCloudinary = async (image, public_id) => {
  try {
    const dataImage = `data:${image.mimetype};base64,${image.buffer.toString(
      "base64"
    )}`;
    const response = await cloudinary.uploader.upload(dataImage, {
      resource_type: "auto",
      public_id,
    });

    return response.secure_url;
  } catch (error) {
    console.log("Error uploading: " + error.message);
    throw error;
  }
};

export default uploadToCloudinary;
