import { Router } from "express";
import {
  serveNewUserView,
  serveUsersView,
} from "../controllers/usersController.js";

const usersRouter = Router();

usersRouter.get("/users", serveUsersView);
usersRouter.get("/users/new", serveNewUserView);

export default usersRouter;
