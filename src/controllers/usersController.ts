import { Request, Response } from "express";
import { fileURLToPath } from "url";
import path from "path";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const serveUsersView = (req: Request, res: Response) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "assets", "views", "users.html")
  );
};

const serveNewUserView = (req: Request, res: Response) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "assets", "views", "new-user.html")
  );
};

export { serveUsersView, serveNewUserView };
