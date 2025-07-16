"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const controller_book_1 = require("./controller.book");
exports.bookRoutes = express_1.default.Router();
exports.bookRoutes.post("/create-book", controller_book_1.createBook); // Create New Book
exports.bookRoutes.delete("/books/:id", controller_book_1.deleteBook); // Delete Book
exports.bookRoutes.get("/books", controller_book_1.getBooks); // Get All Books
exports.bookRoutes.patch("/edit-book/:id", controller_book_1.updateBook); // Update Book
exports.bookRoutes.get("/books/:id", controller_book_1.getBook); // Get Single Book
