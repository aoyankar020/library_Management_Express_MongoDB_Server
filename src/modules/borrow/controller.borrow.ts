import { Request, Response } from "express";
import { Borrow } from "./model.borrow";
import { Books } from "../book/model.book";

export const createBorrow = async (req: Request, res: Response) => {
  try {
    const body = req.body;

    const borrow = new Borrow(body);
    const data = await borrow.save();
    res.status(200).send({
      success: true,
      message: "Book borrowed successfully",
      data,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: (error as Error).message || "Book borrow failed",
    });
  }
};
// export const getBorrow = async (req: Request, res: Response) => {
//   try {
//     const data = await Borrow.find().populate("book");

//     const summary = await Borrow.aggregate([
//       {
//         $group: {
//           _id: "$bookId",
//           totalQuantity: { $sum: "$quantity" },
//         },
//       },
//       {
//         $lookup: {
//           from: "books", // name of the collection
//           localField: "_id",
//           foreignField: "_id",
//           as: "bookDetails",
//         },
//       },
//       { $unwind: "$bookDetails" },
//       {
//         $project: {
//           _id: 0,
//           bookId: "$_id",
//           title: "$bookDetails.title",
//           author: "$bookDetails.author",
//           totalQuantity: 1,
//         },
//       },
//     ]);

//     console.log("Get Borrow");
//     if (data) {
//       res.status(200).send({
//         success: true,
//         message: "Borrow Information Retrived Successfully",
//         record: data,
//       });
//     } else {
//       res.status(201).send({
//         success: false,
//         message: "Borrow Information Retrived Failed",
//         data,
//       });
//     }
//   } catch (error) {
//     res.status(500).send({
//       success: false,
//       message: "Something Went Wrong",
//       error: error,
//     });
//   }
// };

export const getBorrowedBookSummary = async (req: Request, res: Response) => {
  try {
    const result = await Borrow.aggregate([
      {
        $group: {
          _id: "$book",
          totalQuantity: { $sum: "$quantity" },
        },
      },
      {
        $lookup: {
          from: "books",
          localField: "_id",
          foreignField: "_id",
          as: "bookDetails",
        },
      },
      { $unwind: "$bookDetails" },
      {
        $project: {
          _id: 0,
          bookId: "$_id",
          title: "$bookDetails.Title",
          author: "$bookDetails.Author",
          genre: "$bookDetails.Genere",
          isbn: "$bookDetails.ISBN",

          totalQuantity: 1,
        },
      },
    ]);
    res.status(200).send({
      success: true,
      message: "Borrow Information Retrived Successfully",
      record: result,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Aggregation failed", error });
  }
};

export const getBorrowedBookByID = async (req: Request, res: Response) => {
  try {
    const id = req.params.bookId;
    const datas = await Books.findById(id);
    if (datas) {
      res.status(200).send({
        success: true,
        message: "Book Fetched successfully",
        record: datas,
      });
    } else {
      res.status(200).send({
        success: true,
        message: "No Book Found",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: true,
      message: "Something wend wrong",
    });
  }
};
