const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req, res) => {
    const command = "SELECT * FROM users";
    db.query(command).then(data => {
      res.json(data.rows);
    })
  });

  router.put("/", (req, res) => {
    
    const { username,email, password,experience_points,level,character_id } = req.body;

    db.query(
      `
      INSERT INTO users (username,email, password,experience_points,level,character_id) VALUES ($1, $2, $3,$4,$5,$6)
    `,
      [username,email, password,experience_points,level,character_id]
    )
      .then(() => {
        setTimeout(() => {
          res.status(204).json({});
        }, 1000);
      })
      .catch(error => console.log(error));
  });

  return router;
}