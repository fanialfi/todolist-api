import express from "express";
import controllers from "../controllers/todo_controllers.js";

const routes = express.Router();

routes.use(express.json());
routes.route("/").post(controllers.add);
routes.route("/:id").delete(controllers.delete);
routes.get("/todos", controllers.getAll);
routes.get("/todos/:id", controllers.get);

export default routes;
