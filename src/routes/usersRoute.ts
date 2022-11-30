import express from "express";
import { serveUsersView } from "../controllers/usersController.js";

const usersRouter = express.Router();

usersRouter.get("/users", serveUsersView);

export default usersRouter;
