import express from "express";
import mainRouter from "./routes/mainRoute.js";
import usersRouter from "./routes/usersRoute.js";

import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// const usersRouter = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = 3000;

app.get("/users", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "assets", "views", "users.html"));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use(express.json());

app.use(express.static("build/modules"));

app.use("/", mainRouter);
// app.use("/users", usersRouter);
