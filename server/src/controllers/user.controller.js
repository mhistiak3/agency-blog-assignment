const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new Error("Please fill in all fields");
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

export { loginController };
