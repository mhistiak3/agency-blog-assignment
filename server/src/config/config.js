import dotenv from "dotenv";

dotenv.config();
export const { APP_PORT, MONGO_URL, CLIENT_URL } = process.env;
