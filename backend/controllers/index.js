const pool = require("../database");

const getVitimas = async (req, res) => {
  try {
    const { page = 1, limit = 10, filtro = "" } = req.query;
    const offset = (page - 1) * limit;

    const query = {
      text: `
        SELECT *
        FROM vitimasuf
        WHERE uf ILIKE $1
        LIMIT $2
        OFFSET $3
      `,
      values: [`%${filtro}%`, limit, offset],
    };

    const { rows } = await pool.query(query);
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json();
  }
};

const getOcorrencias = async (req, res) => {
  try {
    const { page = 1, limit = 10, filtro = "" } = req.query;
    const offset = (page - 1) * limit;

    const query = {
      text: `
        SELECT *
        FROM ocorrenciasuf
        WHERE uf ILIKE $1
        LIMIT $2
        OFFSET $3
      `,
      values: [`%${filtro}%`, limit, offset],
    };

    const { rows } = await pool.query(query);
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json();
  }
};

module.exports = { getVitimas, getOcorrencias };
