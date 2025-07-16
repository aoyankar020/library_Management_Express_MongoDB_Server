"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const routes_book_1 = require("../book/routes.book");
const routes_borrow_1 = require("../borrow/routes.borrow");
exports.routes = express_1.default.Router();
exports.routes.use("/api", routes_book_1.bookRoutes);
exports.routes.use("/api", routes_borrow_1.borrowRoutes);
// routes.use("/api", borrowerroute);
