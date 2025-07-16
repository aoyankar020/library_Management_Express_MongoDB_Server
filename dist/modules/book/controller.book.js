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
exports.getBook = exports.updateBook = exports.getBooks = exports.deleteBook = exports.createBook = void 0;
const model_book_1 = require("./model.book");
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const data = yield model_book_1.Books.create(body);
        res.status(200).send({
            success: true,
            message: "Book created successfully",
            data,
        });
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.createBook = createBook;
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield model_book_1.Books.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: "Book deleted successfully",
            data: null,
        });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.deleteBook = deleteBook;
const getBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield model_book_1.Books.find();
        if (data) {
            res.status(200).send({
                success: true,
                message: "Books retrieved successfully",
                data,
            });
        }
        else {
            res.status(201).send({
                success: false,
                message: "Books retrieved Failed",
                data,
            });
        }
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: "Something Went Wrong",
            error: error,
        });
    }
});
exports.getBooks = getBooks;
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const body = req.body;
        const data = yield model_book_1.Books.findByIdAndUpdate(id, body, { new: true });
        res.status(200).send({
            success: true,
            message: "Book updated successfully",
            data,
        });
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: "Something Went Wrong",
            error: error,
        });
    }
});
exports.updateBook = updateBook;
const getBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const datas = yield model_book_1.Books.findById(id);
        if (datas) {
            res.status(200).send({
                success: true,
                message: "Book Fetched successfully",
                datas,
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
        res.status(200).send({
            success: true,
            message: "Something wend wrong",
        });
    }
});
exports.getBook = getBook;
