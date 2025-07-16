import { Types } from "mongoose";

export interface IBorrow {
  quantity: number;
  book: Types.ObjectId;
  dueDate: Date;
}
