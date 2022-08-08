const router = require('express').Router();


module.exports = (db) => {
  // sends all unlocked pets
  router.get('/', (req, res) => {
    const queryString = `
    SELECT *
    FROM player_unlocked_animals
    `;

    db.query(queryString)
    .then((results) => {
      res.json(results.rows);
    })
    .catch((err) => {
      res.status(500).json({error: err.message});
    })

  });

  // sends all unlocked pets by user_id
  router.get('/:user_id', (req, res) => {
    const queryString = `
    SELECT *
    FROM player_unlocked_animals
    WHERE user_id = $1
    `
    db.query(queryString, [req.params.user_id])
    .then((results) => {
      res.json(results.rows);
    })
    .catch((err) => {
      res.status(500).json({error: err.message});
    })
  });

  // creates new unlocked pet relation
  router.post('/new', (req, res) => {
    const queryString = `
    INSERT INTO player_unlocked_animals (user_id, animal_id)
    VALUES ($1, $2)
    RETURNING *
    `;

    db.query(queryString, [req.body.user_id, req.body.animal_id])
    .then((results) => {
      res.json(results.rows);
    })
    .catch((err) => {
      res.status(500).json({error: err.message});
    });
  });

  return router;
}