const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here 
  router.get('/follower/:user', (req, res) => {
    const command = `SELECT * FROM users
    JOIN followers ON followers.followers = users.id
    JOIN characters ON users.character_id = characters.id
    WHERE followers.name = $1`;
    db.query(command,[req.params.user]).then(data => {
      res.json(data.rows);
    })
    .catch(error => console.log(error));
  });

  router.put("/", (req, res) => {
    
    const { username,email, password,character_id } = req.body;

    db.query(
      `
      INSERT INTO followers (username,followed, followers) VALUES ($1, $2, $3,$4)
    `,
      [username,followed_id, followers_id]
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