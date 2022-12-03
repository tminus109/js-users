import { Router } from "express";
import {
  serveEditUserView,
  serveNewUserView,
  serveUsersView,
} from "../controllers/usersController.js";

const usersRouter = Router();

usersRouter.get("/users", serveUsersView);
usersRouter.get("/users/new", serveNewUserView);
usersRouter.get("/users/:id/edit", serveEditUserView);

export default usersRouter;
