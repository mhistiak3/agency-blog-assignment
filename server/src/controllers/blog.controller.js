import uploadToCloudinary from "../config/cloudinary.config.js";
import { v4 as uuid } from "uuid";
import Blog from "../models/blog.model.js";
//
const createBlogController = async (req, res) => {
  try {
    const { title, description, image } = req.body;
    // chekc if all fields are filled
    if (!title || !description || !image) {
      throw new Error("Please fill in all fields");
    }
    // upload image
    const imageURL = await uploadToCloudinary(image, uuid());

    // create blog
    const blog = await Blog.create({
      title,
      description,
      image: imageURL,
    });
    if (!blog) {
      throw new Error("Blog not created");
    }
    res
      .status(200)
      .json({ message: "Blog created successfully", success: true });
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
};

export { createBlogController };