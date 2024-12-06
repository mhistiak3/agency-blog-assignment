import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import hpp from "hpp";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { APP_PORT, CLIENT_URL, MONGO_URL } from "./src/config/config.js";
import router from "./src/routes/api.routes.js";

const app = express();
mongoose
  .connect(MONGO_URL, {
    dbName: "AgencyBlog",
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cookieParser());
app.use(
  cors({
    origin: [
      "https://agency-blog-assignment.vercel.app",
      "http://localhost:5173",
      CLIENT_URL,
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(helmet({}));
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);
app.set("etag", false);

// routes
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Server is running",
  });
});
app.use("/api/v1", router);

// Global Error Handler
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    status: "error",
    message: err.message,
  });
});

const PORT = APP_PORT || 6000;
app.listen(PORT, function () {
  console.log(`Server start on: http://localhost:${PORT}`);
});
