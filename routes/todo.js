import express from "express";
import controllers from "../controllers/todo_controllers.js";

const routes = express.Router();

routes.use(express.json());
routes.route("/").post(controllers.add);
routes.get("/todos", controllers.getAll);

export default routes;
