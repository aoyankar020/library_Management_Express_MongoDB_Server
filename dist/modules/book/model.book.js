"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Books = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const BookSchema = new mongoose_1.default.Schema({
    Title: { type: String, required: true },
    Author: { type: String, required: true },
    Genere: { type: String, required: true },
    ISBN: { type: String, required: true },
    Copies: { type: Number, required: true },
    Availability: { type: Boolean, required: true },
}, { versionKey: false });
exports.Books = mongoose_1.default.model("books", BookSchema);
