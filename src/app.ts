import express, { Application, Request, Response } from "express";
import { routes } from "./modules/routes_merge/routes.merge";
import cors from "cors";
import config from "./config/Config";
export const app: Application = express();
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://library-management-redux-byaoyan.vercel.app",
    ],
  })
);
app.use(routes);
app.get("/", (req: Request, res: Response) => {
  res.send("User Home Page");
});
