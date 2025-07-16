import express from "express";
import { bookRoutes } from "../book/routes.book";
import { borrowRoutes } from "../borrow/routes.borrow";

export const routes = express.Router();
routes.use("/api", bookRoutes);
routes.use("/api", borrowRoutes);
// routes.use("/api", borrowerroute);
