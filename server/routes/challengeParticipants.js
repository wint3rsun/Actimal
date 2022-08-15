const router = require('express').Router();

module.exports = (db) => {
  // sends all challenge participants for game_id
  router.get('/:game_id', (req, res) => {
    const queryString = `
    SELECT game_challenge_participants.*, users.*
    FROM game_challenge_participants
    JOIN users 
    ON game_challenge_participants.users_id = users.id
    WHERE game_challenges_id = $1
    ORDER BY game_challenge_participants.progress DESC
    `;

    db.query(queryString, [req.params.game_id])
    .then((results) => {
      res.json(results.rows);
    })
    .catch((err) => {
      res.status(500).json({error: err.message});
    });
  });

  router.get('/', (req, res) => {
    const queryString = `
      SELECT *
      FROM game_challenge_participants
      WHERE users_id = $1
    `;

    const queryParams = [req.query.user];

    db.query(queryString, queryParams)
    .then((results) => {
      const myChallenges = {};
      results.rows.forEach(element => {
        myChallenges[element.game_challenges_id] = element;
      });
      res.json(myChallenges);
    })
    .catch((err) => {
      res.status(500).json({error: err.message});
    });
  });

  // create game challenge participant
  router.put('/new', (req, res) => {
    const {game_challenge_id, user_id} = req.body.game
    const queryString = `
    INSERT INTO game_challenge_participants (game_challenges_id ,users_id)
    VALUES ($1, $2)
    RETURNING *
    `;
    console.log(req.body.game_challenge_id);
    console.log(req.body.user_id);

    db.query(queryString, [game_challenge_id, user_id])
    .then((results) => {
      res.json(results.rows);
    })
    .catch((err) => {
      res.status(500).json({error: err.message});
    });
  });

    // create game challenge participant
    router.put('/update_data', (req, res) => {
      const {updata_progress, user_id, id} = req.body.progress
      const queryString = `
      UPDATE game_challenge_participants
      SET progress = $1
      FROM game_challenges
      WHERE game_challenge_participants.game_challenges_id = game_challenges.id AND game_challenge_participants.users_id = $2 
      AND challenges_type = $3 AND game_challenges.end_date >= CURRENT_DATE AND game_challenge_participants.id = $4;
      `
      console.log(updata_progress);
      console.log(user_id);
  
      db.query(queryString, [updata_progress, user_id,'steps',id])
      .then((results) => {
        const message = ("update progress successfuly") ;
        res.redirect(303,`/participants/?user=${user_id}`);
      })
      .catch((err) => {
        res.status(500).json({error: err.message});
      });
      
    });

  return router;
}