import { Request, Response } from "express";
import { Books } from "./model.book";

export const createBook = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const data = await Books.create(body);
    res.status(200).send({
      success: true,
      message: "Book created successfully",
      data,
    });
  } catch (error: any) {
    res.status(400).send(error);
  }
};
export const deleteBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    await Books.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Book deleted successfully",
      data: null,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getBooks = async (req: Request, res: Response) => {
  try {
    const data = await Books.find();
    if (data) {
      res.status(200).send({
        success: true,
        message: "Books retrieved successfully",
        data,
      });
    } else {
      res.status(201).send({
        success: false,
        message: "Books retrieved Failed",
        data,
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something Went Wrong",
      error: error,
    });
  }
};
export const updateBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await Books.findByIdAndUpdate(id, body, { new: true });
    res.status(200).send({
      success: true,
      message: "Book updated successfully",
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something Went Wrong",
      error: error,
    });
  }
};

export const getBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const datas = await Books.findById(id);
    if (datas) {
      res.status(200).send({
        success: true,
        message: "Book Fetched successfully",
        datas,
      });
    } else {
      res.status(200).send({
        success: true,
        message: "No Book Found",
      });
    }
  } catch (error) {
    res.status(200).send({
      success: true,
      message: "Something wend wrong",
    });
  }
};
