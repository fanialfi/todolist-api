import express from "express";
import routes from "./routes/todo.js";

const app = express();
const port = 3000;

app.use("/todo", routes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
