import express from "express";
import mainRouter from "./routes/mainRoute.js";
import newUserRouter from "./routes/newUserRoute.js";
import usersRouter from "./routes/usersRoute.js";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use(express.json());

app.use(express.static("build/modules"));

app.use(mainRouter);
app.use(newUserRouter);
app.use(usersRouter);
