"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBorrowedBookByID = exports.getBorrowedBookSummary = exports.createBorrow = void 0;
const model_borrow_1 = require("./model.borrow");
const model_book_1 = require("../book/model.book");
const createBorrow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const borrow = new model_borrow_1.Borrow(body);
        const data = yield borrow.save();
        res.status(200).send({
            success: true,
            message: "Book borrowed successfully",
            data,
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: error.message || "Book borrow failed",
        });
    }
});
exports.createBorrow = createBorrow;
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
const getBorrowedBookSummary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield model_borrow_1.Borrow.aggregate([
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
    }
    catch (error) {
        res
            .status(500)
            .json({ success: false, message: "Aggregation failed", error });
    }
});
exports.getBorrowedBookSummary = getBorrowedBookSummary;
const getBorrowedBookByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.bookId;
        const datas = yield model_book_1.Books.findById(id);
        if (datas) {
            res.status(200).send({
                success: true,
                message: "Book Fetched successfully",
                record: datas,
            });
        }
        else {
            res.status(200).send({
                success: true,
                message: "No Book Found",
            });
        }
    }
    catch (error) {
        res.status(500).send({
            success: true,
            message: "Something wend wrong",
        });
    }
});
exports.getBorrowedBookByID = getBorrowedBookByID;
