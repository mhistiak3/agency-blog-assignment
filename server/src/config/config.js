import dotenv from "dotenv";

dotenv.config();
export const {
  APP_PORT,
  MONGO_URL,
  CLIENT_URL,
  ADMIN_USERNAME,
  ADMIN_PASSWORD,
  JWT_SECRET,
} = process.env;
