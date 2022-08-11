const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req, res) => {
    const command = "SELECT * FROM characters";
    db.query(command).then(data => {
      const characters = {};
      data.rows.forEach(element => {
        characters[element.id] = element;
      });
      res.json(characters);
    })
  });

  return router;
}