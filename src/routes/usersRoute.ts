import { Router } from "express";

import { serveUsersView } from "../controllers/usersController.js";

const usersRouter = Router();

usersRouter.get("/users", serveUsersView);

export default usersRouter;
