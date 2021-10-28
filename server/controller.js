const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const pool = require("./db");

module.exports = {
  postSignup: async (req, res) => {
    try {
      const { username, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await pool.query(
        "INSERT INTO users (username, password) VALUES ($1, $2);",
        [username, hashedPassword]
      );
      res.json(newUser.rows[0]);
    } catch (err) {
      console.error(err);
    }
  },
  postLogin: async (req, res) => {
    try {
      const { username, password } = req.body;
      const salt = bcrypt.genSaltSync(10);
      const passhash = bcrypt.hashSync(password, salt);
      const userLog = await pool.query(
        "SELECT id, username, password FROM users WHERE username = $1;",
        [username]
      );
      let actUser = userLog.rows[0];
      if (actUser.username === username) {
        let matched = bcrypt.compare(passhash, actUser.password);
        if (matched) {
          const accessToken = jwt.sign(username, process.env.TOKEN);
          return res.status(200).send({ id: actUser.id, token: accessToken });
        }
      } else {
        return res.status(200).send({ id: -1 });
      }
    } catch (err) {
      console.error(err);
    }
  },
};
