import { app } from "./app";

import mongoose from "mongoose";
import config from "./config/Config";

async function server() {
  try {
    await mongoose.connect(config.database_url, {
      dbName: config.db_name, // ✅ your DB name
    });
    console.log("✅ MongoDB connected!");

    app.listen(config.port, () => {
      console.log(`🚀 Server running at http://localhost:${config.port}`);
    });
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    process.exit(1);
  }
}

server().catch((err) => console.log(err));
