import uploadToCloudinary from "../config/cloudinary.config.js";
import { v4 as uuid } from "uuid";
import Blog from "../models/blog.model.js";
//
const createBlogController = async (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.file;

    // chekc if all fields are filled
    if (!title || !description || !image) {
      throw new Error("Please fill in all fields");
    }
    // upload image
    const id = uuid();
    const imageURL = await uploadToCloudinary(image, id);

    // create blog
    const blog = await Blog.create({
      title,
      description,
      image: { id, imageURL },
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

const readBlogsController = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    if (blogs.length === 0) {
      return res
        .status(404)
        .json({ message: "No blogs found", success: false });
    }
    res.status(200).json({ data: blogs, success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Server Error", success: false });
  }
};
const deleteBlogController = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    throw new Error("Please fill in all fields");
  }
  try {
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      return res
        .status(404)
        .json({ message: "Blog not found", success: false });
    }
    res
      .status(200)
      .json({ message: "Blog deleted successfully", success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Server Error", success: false });
  }
};

const updateBlogController = async (req, res) => {
  try {
    const { id, title, description, imageID } = req.body;
    const image = req.file;
    if (image) {
      // upload image
      const imageURL = await uploadToCloudinary(image, imageID);
      // update blog
      const blog = await Blog.findByIdAndUpdate(
        id,
        { title, description, image: { id: imageID, imageURL: imageURL } },
        { new: true }
      );
      if (!blog) {
        throw new Error("Blog not updated");
      }
    } else {
      // update blog
      const blog = await Blog.findByIdAndUpdate(
        id,
        { title, description },
        { new: true }
      );
      if (!blog) {
        throw new Error("Blog not updated");
      }
    }

    res
      .status(200)
      .json({ message: "Blog updated successfully", success: true });
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
};

export {
  createBlogController,
  readBlogsController,
  deleteBlogController,
  updateBlogController,
};
