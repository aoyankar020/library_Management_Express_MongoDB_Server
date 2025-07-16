import express from "express";
import {
  createBorrow,
  getBorrowedBookByID,
  //   getBorrow,
  getBorrowedBookSummary,
} from "./controller.borrow";

export const borrowRoutes = express.Router();

borrowRoutes.post("/borrow", createBorrow); // Create New Book
borrowRoutes.get("/borrow/:bookId", getBorrowedBookByID); // Get Single Book
borrowRoutes.get("/borrow-summary", getBorrowedBookSummary); // Get Book Summary
