import express from "express";
import usersRouter from "./routes/usersRoute.js";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use(express.json());

app.use(express.static("assets/styles"));
app.use(express.static("build/modules"));

app.use(usersRouter);
