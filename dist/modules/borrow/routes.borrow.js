"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowRoutes = void 0;
const express_1 = __importDefault(require("express"));
const controller_borrow_1 = require("./controller.borrow");
exports.borrowRoutes = express_1.default.Router();
exports.borrowRoutes.post("/borrow", controller_borrow_1.createBorrow); // Create New Book
exports.borrowRoutes.get("/borrow/:bookId", controller_borrow_1.getBorrowedBookByID); // Get Single Book
exports.borrowRoutes.get("/borrow-summary", controller_borrow_1.getBorrowedBookSummary); // Get Book Summary
