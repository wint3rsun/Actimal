const router = require('express').Router();

module.exports = (db) => {
  // sends all challenge participants for game_id
  router.get('/:game_id', (req, res) => {
    const queryString = `
    SELECT *
    FROM game_challenge_participants
    WHERE game_challenges_id = $1
    `;

    db.query(queryString, [req.params.game_id])
    .then((results) => {
      res.json(results.rows);
    })
    .catch((err) => {
      res.status(500).json({error: err.message});
    });
  });

  // create game challenge participant
  router.put('/new', (req, res) => {
    const queryString = `
    INSERT INTO game_challenge_participants (game_challenges_id ,users_id)
    VALUES ($1, $2)
    RETURNING *
    `;

    db.query(queryString, [req.body.game_challenge_id, req.body.user_id])
    .then((results) => {
      res.json(results.rows);
    })
    .catch((err) => {
      res.status(500).json({error: err.message});
    });
  });

  return router;
}