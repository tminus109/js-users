import { Router } from "express";
import { sayHello } from "../controllers/mainController.js";

const mainRouter = Router();

mainRouter.get("/", sayHello);

export default mainRouter;
