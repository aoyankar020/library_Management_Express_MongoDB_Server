"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const routes_merge_1 = require("./modules/routes_merge/routes.merge");
const cors_1 = __importDefault(require("cors"));
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)({
    origin: [
        "http://localhost:5173",
        "https://library-management-redux-byaoyan.vercel.app",
    ],
}));
exports.app.use(routes_merge_1.routes);
exports.app.get("/", (req, res) => {
    res.send("User Home Page");
});
