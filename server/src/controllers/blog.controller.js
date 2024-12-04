//
const createBlogController = async (req, res) => {
  try {
    const { title, description, image } = req.body;
    // chekc if all fields are filled
    if (!title || !description || !image) {
      throw new Error("Please fill in all fields");
    }
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
};
