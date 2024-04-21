import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRoute from "./routes/UserRoute.js";
import AuthRoute from "./routes/AuthRoute.js";

const app = express();
app.use(express.json());
dotenv.config();

mongoose
  .connect(process.env.MONGO_DB_URI_KEY)
  .then(() => {
    console.log("Database has been connected successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, console.log("Server running on 3000"));

// Api routes
app.use("/api/user", UserRoute);
app.use("/api/auth", AuthRoute);

// Middlewares
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
