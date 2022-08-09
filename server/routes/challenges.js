const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req, res) => {
    const command = "SELECT * FROM game_challenges";
    db.query(command).then(data => {
      res.json(data.rows);
    })
  });
  router.get('/', (req, res) => {
    const command = "SELECT * FROM game_challenges";
    db.query(command).then(data => {
      res.json(data.rows);
    })
  });

  router.get('/quests', (req, res) => {
    const command = "SELECT game_challenges.*, to_char(game_challenges.start_date, 'DD-MM-YYYY'), quests.* FROM game_challenges JOIN quests ON game_challenges.quest_id = quests.id";
    db.query(command).then(data => {
      res.json(data.rows);
    })
  });

  return router;
}