import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import hpp from "hpp";
import cors from "cors";
import mongoose from "mongoose";
import { APP_PORT, MONGO_URL } from "./src/config/config.js";



const app = express();


mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });


app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);
app.set("etag", false);


// routes
// app.use("/api/v1", router);


// Error Handler
// app.use(ErrorHandler);

const PORT = APP_PORT || 6000;
app.listen(PORT, function () {
  console.log(`Server start on: http://localhost:${PORT}`);
});
