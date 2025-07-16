import express from "express";
import {
  createBook,
  deleteBook,
  getBook,
  getBooks,
  updateBook,
} from "./controller.book";
export const bookRoutes = express.Router();

bookRoutes.post("/create-book", createBook); // Create New Book
bookRoutes.delete("/books/:id", deleteBook); // Delete Book
bookRoutes.get("/books", getBooks); // Get All Books
bookRoutes.patch("/edit-book/:id", updateBook); // Update Book
bookRoutes.get("/books/:id", getBook); // Get Single Book
