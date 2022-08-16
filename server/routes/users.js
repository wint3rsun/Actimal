const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req, res) => {
    const command = "SELECT * FROM users";
    db.query(command).then(data => {
      res.json(data.rows);
    })
  });

  router.get('/:user_id', (req, res) => {
    const command = `
    SELECT * FROM users
    WHERE id = $1
    `;

    db.query(command, [req.params.user_id]).then(data => {
      const info = {
        level: data.rows[0].level,
        experience_points: data.rows[0].experience_points
      }
      res.json(info);
    })
  });

  router.put("/", (req, res) => {
    
    const { username,email, password,character_id } = req.body;

    db.query(
      `
      INSERT INTO users (username,email, passwordcharacter_id) VALUES ($1, $2, $3,$4)
    `,
      [username,email, password,character_id]
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