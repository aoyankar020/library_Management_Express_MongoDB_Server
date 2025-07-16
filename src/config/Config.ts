import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  db_name: process.env.DB_NAME || "library",
  port: process.env.PORT || 3000,
  database_url: process.env.DB_URL as string,
  // ui_domain: process.env.UI_DOMAIN,
};
