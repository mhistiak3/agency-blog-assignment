import uploadToCloudinary from "../config/cloudinary.config.js";
import { v4 as uuid } from "uuid";
import Member from "../models/member.model.js";
//
const createMemberController = async (req, res) => {
  try {
    const { name, role, socialLinks } = req.body;
    const image = req.file;


    // chekc if all fields are filled
    if (!name || !role || !image || !socialLinks) {
      throw new Error("Please fill in all fields");
    }
    const socialMedia = JSON.parse(socialLinks);

    // upload image
    const id = uuid();
    const imageURL = await uploadToCloudinary(image, id);

    // create blog
    const member = await Member.create({
      name,
      role,
      socialMedia,
      image: { id, imageURL },
    });
    if (!member) {
      throw new Error("Member not created");
    }
    res
      .status(200)
      .json({ message: "Member created successfully", success: true });
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
};

const readMembersController = async (req, res) => {
  try {
    const member = await Member.find({});

    res.status(200).json({ data: member, success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Server Error", success: false });
  }
};
const deleteMemberController = async (req, res) => {
  const { id } = req.body;
  try {
    const member = await Member.findByIdAndDelete(id);
    if (!member) {
      return res
        .status(404)
        .json({ message: "Member not found", success: false });
    }
    res
      .status(200)
      .json({ message: "Member deleted successfully", success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Server Error", success: false });
  }
};

const updateMemberController = async (req, res) => {
  try {
    const { id, name, role, imageID, socialLinks } = req.body;
    const image = req.file;

    const socialMedia = JSON.parse(socialLinks);
   
    
    if (image) {
      // upload image
      const imageURL = await uploadToCloudinary(image, imageID);
      // update blog
      const blog = await Member.findByIdAndUpdate(
        id,
        { name, role, socialMedia, image: { id: imageID, url: imageURL } },
        { new: true }
      );
      if (!blog) {
        throw new Error("Member not updated");
      }
    } else {
      // update blog
      const blog = await Member.findByIdAndUpdate(
        id,
        { name, role, socialMedia },
        { new: true }
      );
      if (!blog) {
        throw new Error("Member not updated");
      }
    }

    res
      .status(200)
      .json({ message: "Member updated successfully", success: true });
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
};

export {
  createMemberController,
  readMembersController,
  deleteMemberController,
  updateMemberController,
};
