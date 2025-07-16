import mongoose, { Schema, Types } from "mongoose";
import { IBorrow } from "./interface.borrow";
import { Books } from "../book/model.book";

const BorrowSchema = new Schema<IBorrow>(
  {
    quantity: { type: Number, required: true },
    book: { type: Schema.Types.ObjectId, required: true, ref: "books" },
    dueDate: { type: Date, required: true },
  },
  {
    // timestamps: true, // Adds createdAt & updatedAt
    versionKey: false,
  }
);

BorrowSchema.pre("save", async function (next) {
  const borrow = this as IBorrow;
  const borrowQuantity = borrow.quantity;

  const book = await Books.findById(borrow.book);

  if (!book) {
    return next(new Error("Book not found."));
  }

  if (borrow.quantity > book.Copies) {
    return next(
      new Error(`Cannot borrow more than ${book.Copies} copies available.`)
    );
  } else {
    const bookStock: number = typeof book.Copies === "number" ? book.Copies : 0;
    const quantityToBorrow: number =
      typeof borrowQuantity === "number" ? borrowQuantity : 0;
    book.Copies = bookStock - quantityToBorrow;
    await book.save();
  }

  return next();
});

export const Borrow = mongoose.model<IBorrow>("borrow", BorrowSchema);
