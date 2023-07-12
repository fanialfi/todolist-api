import pgConnection from "../model/pg.js";

const controllers = {
  add: async (req, res) => {
    const { nama, keterangan } = req.body;
    const query = "INSERT INTO todo (nama, keterangan) VALUES($1, $2)";
    const result = await pgConnection(query, [nama, keterangan]);

    res
      .status(200)
      .set({
        "Content-Type": "application/json",
        Accept: "application/json",
      })
      .json(result);
  },
  getAll: async (req, res) => {
    const query = "SELECT * FROM todo";
    const result = await pgConnection(query);
    res
      .status(200)
      .set({
        "Content-Type": "application/json",
        Accept: "application/json",
      })

      .json({ message: "suksess get all todo", result: result.rows });
  },
};

export default controllers;
