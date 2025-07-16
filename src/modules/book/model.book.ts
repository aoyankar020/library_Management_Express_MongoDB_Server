import mongoose from "mongoose";
import { IBook } from "./Interface.book";

const BookSchema = new mongoose.Schema<IBook>(
  {
    Title: { type: String, required: true },
    Author: { type: String, required: true },
    Genere: { type: String, required: true },
    ISBN: { type: String, required: true },
    Copies: { type: Number, required: true },
    Availability: { type: Boolean, required: true },
  },
  { versionKey: false }
);
export const Books = mongoose.model<IBook>("books", BookSchema);
