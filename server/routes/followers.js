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
    
    const { username,user_id } = req.body;
    console.log(username,user_id);

    db.query(
      `
      INSERT INTO followers (name,followers) VALUES ($1, $2)
    `,
      [username,user_id]
    )
      .then(() => {
        res.json(username);
      })
      .catch(error => console.log(error));
  });

  return router;
}