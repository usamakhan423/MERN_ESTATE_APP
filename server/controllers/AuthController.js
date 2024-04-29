import User from "../models/User_Model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';


// Sign Up Controller Logic
export const SignUp = async (req, res, next) => {
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
    next(error);
  }
};

// Sign In controller Logic
export const SignIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
      const userExist = await User.findOne({ email });
      if(!userExist) return next(errorHandler(404, 'Email not exist.!!'))
      const validPassword = bcryptjs.compareSync(password, userExist.password);
    if(!validPassword) return next(errorHandler(401, 'Invalid password'));
    const token = jwt.sign({id: userExist._id}, process.env.SECRET_KEY);
    const { password: pass, ...rest} = userExist._doc;
    res.cookie('access_token', token, {httpOnly: true})
    .status(200)
    .json({rest})
  } catch (error) {
    next(error)
  }
}


