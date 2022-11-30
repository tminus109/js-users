import express from "express";
import { sayHello } from "../controllers/mainController.js";

const mainRouter = express.Router();

mainRouter.get("/", sayHello);

export default mainRouter;
