import User from "../models/User_Model.js";
import bcryptjs from "bcryptjs";

export const SignUp = async (req, res) => {
  // Getting data from the user
  const { username, email, password } = req.body;

  // Hashed the password using bcryptjs
  const hashedPassword = bcryptjs.hashSync(password, 10);

  // Create a new user
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    // Save the user in the database
    await newUser.save();

    // Send response
    res.status(201).json({
      status: 201,
      message: "User created Successfuly...!",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
