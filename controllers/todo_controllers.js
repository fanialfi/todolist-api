import pgConnection from "../model/pg.js";

const controllers = {
  add: async (req, res) => {
    const { nama, keterangan } = req.body;

    if (nama && keterangan) {
      const query = "INSERT INTO todo (nama, keterangan) VALUES($1, $2)";
      const result = await pgConnection(query, [nama, keterangan]);

      res
        .status(200)
        .set({
          "Content-Type": "application/json",
          Accept: "application/json",
        })
        .json(result);
    } else {
      res
        .status(400)
        .set({
          "Content-Type": "application/json",
          Accept: "application/json",
        })
        .json({
          message:
            "permintaan gagal terpenuhi karena kesalahan syntax atau request message",
          time: +new Date(),
        });
    }
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
  get: async (req, res) => {
    // dapatkan todo dengan id berdasarkan id dari database
    const id = req.params.id;
    const query = "SELECT * FROM todo WHERE id = $1";
    const result = await pgConnection(query, [id]);

    if (result.rows.length >= 1) {
      res
        .status(200)
        .set({
          "Content-Type": "application/json",
          Accept: "application/json",
        })
        .json({ message: "suksess get todo", result: result.rows });
    } else {
      // jika todo dengan id params tidak tersedia di database
      res
        .status(404)
        .set({
          "Content-Type": "application/json",
          Accept: "application/json",
        })
        .json({
          message: `todo dengan id ${id} tidak ada`,
          result: "todo not found",
        });
    }
  },
  delete: async (req, res) => {
    // delete todo berdasarkan id
    const id = req.params.id;
    const query = "DELETE FROM todo WHERE id = $1";
    const result = await pgConnection(query, [id]);
    res.json(result);
  },
  update: async (req, res) => {
    const id = req.params.id;
    const { nama, keterangan } = req.body;
    if (nama && keterangan) {
      const query =
        "UPDATE todo SET nama = $1, keterangan = $2, date = $3 WHERE id = $4";
      const result = await pgConnection(query, [
        nama,
        keterangan,
        +new Date(),
        id,
      ]);
      res.send(result);
    }
  },
};

export default controllers;
