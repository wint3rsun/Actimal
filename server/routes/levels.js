const router = require('express').Router();

//helper functions
function findLevel (levels, exp) {
  const newLevel = levels.filter(level => exp >= level.min && exp <= level.max);
    return newLevel[0].id;
}

module.exports = (db) => {
  // returns all levels
  router.get('/', (req, res) => {
    const queryString = `
    SELECT * FROM levels`;

    db.query(queryString)
    .then(data => {
      res.json(data.rows);
    })
    .catch(err => {
      res.status(500).json({err:err.message});
    });
  });

  //updates level and experience of user with user_id
  router.put('/:user_id', (req, res) => {
    const queryString = `
    SELECT * FROM levels`;

    db.query(queryString)
    .then(data => {
      const queryString2 = `
        UPDATE users
        SET experience_points = $1, level = $2
        WHERE id = $3
      `;
      const level = findLevel(data.rows, req.body.exp);

      db.query(queryString2, [req.body.exp,level,req.params.user_id])
      .then(data => {
        res.json(data);
      })
      .catch(err=>res.status(500).json({err:err.message}));
    })
    .catch(err => {
      res.status(500).json({err:err.message});
    });
  });

  return router;
}