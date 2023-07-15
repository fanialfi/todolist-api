import express from "express";
import routes from "./routes/todo.js";

const app = express();
const port = 3000;

app.use("/todo", routes);
app.get("/",(req,res)=>{
  res.status(200).set({
    "Content-Type":"application/json",
    "Accept":"application/json"
  }).json({message:"gunakan endpoint /todo/todos untuk mendapatkan semua todo yang telah dibuat",time:+new Date()})
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
