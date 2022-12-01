import { Router } from "express";
import { serveNewUserView } from "../controllers/newUserController.js";

const newUserRouter = Router();

newUserRouter.get("/new", serveNewUserView);

export default newUserRouter;
