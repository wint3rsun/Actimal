const router = require('express').Router();
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");

module.exports = (db) => {
  
  router.post("/", async (req, res) => {
    console.log("pw",req.body);
    const { username, password } = req.body;
  
    try {
      const user = await db.query("SELECT * FROM users WHERE username = $1", [
        username
      ]);
  
      if (user.rows.length === 0) {
        return res.status(401).json("Invalid Credential");
      }
      
      const validPassword = await bcrypt.compare(
        password,
        user.rows[0].password
      );
  
      if (!validPassword) {
        return res.status(401).json("Invalid Credential");
      }
      const jwtToken = jwtGenerator(user.rows[0].user_id);
      console.log(jwtToken);
      return res.json({ jwtToken });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });
  return router;
}