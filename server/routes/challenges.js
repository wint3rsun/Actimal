const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req, res) => {
    const command = "SELECT id, challenges_type ,to_char(start_date, 'DD-MM-YYYY') AS start_date, to_char(end_date, 'DD-MM-YYYY') AS end_date, quest_id FROM game_challenges ORDER BY start_date";
    db.query(command).then(data => {
      res.json(data.rows);
    })
  });

  // router.get('/', (req, res) => {
  //   const command = "SELECT * FROM game_challenges";
  //   db.query(command).then(data => {
  //     res.json(data.rows);
  //   })
  // });

  // router.get('/quests', (req, res) => {
  //   const command = "SELECT game_challenges.*, to_char(game_challenges.start_date, 'DD-MM-YYYY'), quests.* FROM game_challenges JOIN quests ON game_challenges.quest_id = quests.id";
  //   db.query(command).then(data => {
  //     res.json(data.rows);
  //   })
  // });
  router.get('/quests', (req, res) => {
    const command = "SELECT * FROM quests";
    db.query(command).then(data => {
      var quests = {};
    data.rows.forEach(element => {
      quests[`${element.id}`]= element;
    });
      res.json(quests);
    })
  });

  return router;
}