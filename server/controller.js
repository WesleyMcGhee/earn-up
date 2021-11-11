const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const pool = require("./db");
const jwtGenerator = require("./utils/jwtGenerator");
module.exports = {
  postSignup: async (req, res) => {
    try {
      const { username, password } = req.body;
      const userCheck = await pool.query(
        "SELECT * FROM users WHERE username = $1;",
        [username]
      );
      if (userCheck.rows.length !== 0) {
        return res
          .status(401)
          .send("User already exsit! You have to be original UwU");
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await pool.query(
        "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *;",
        [username, hashedPassword]
      );
      const token = jwtGenerator(newUser.rows[0].id);
      res.json({ token });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error! R Nar >_<");
    }
  },
  postLogin: async (req, res) => {
    try {
      const { username, password } = req.body;
      const userLog = await pool.query(
        "SELECT * FROM users WHERE username = $1;",
        [username]
      );
      if (userLog.rows.length === 0) {
        return res.status(401).send("User Does Not Exist");
      }
      const validPassword = await bcrypt.compare(
        password,
        userLog.rows[0].password
      );
      if (!validPassword) {
        return res.status(401).send("Invalid Password Attempt");
      }
      const jwtToken = jwtGenerator(userLog.rows[0].id);
      return res.json({ jwtToken });
    } catch (err) {
      console.error(err);
    }
  },
};
