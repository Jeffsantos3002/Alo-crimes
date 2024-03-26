const pool = require("../database");

const get = async (req, res) => {
  try {
    // const { rows } = await pool.query("SELECT * FROM alo_crimes");
    // res.status(200).json(rows);
    res.json("obrigado");
  } catch (err) {
    console.error(err);
    res.status(500).json();
  }
};

module.exports = { get };
