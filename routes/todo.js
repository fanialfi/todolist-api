import express from "express";
import controllers from "../controllers/todo_controllers.js";

const routes = express.Router();

routes.use(express.json());
routes.post("/", controllers.add);
routes.get("/todos", controllers.getAll);
// routes.get("/todos/:id", controllers.get);

routes.route("/todos/:id")
  .get(controllers.get)
  .delete(controllers.delete)
  .put(controllers.update);
export default routes;
