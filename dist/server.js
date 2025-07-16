"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const mongoose_1 = __importDefault(require("mongoose"));
const Config_1 = __importDefault(require("./config/Config"));
function server() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(Config_1.default.database_url, {
                dbName: Config_1.default.db_name, // ✅ your DB name
            });
            console.log("✅ MongoDB connected!");
            app_1.app.listen(Config_1.default.port, () => {
                console.log(`🚀 Server running at http://localhost:${Config_1.default.port}`);
            });
        }
        catch (err) {
            console.error("❌ MongoDB connection failed:", err);
            process.exit(1);
        }
    });
}
server().catch((err) => console.log(err));
