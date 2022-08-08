DROP TABLE IF EXISTS game_challenges CASCADE;
CREATE TABLE game_challenges (
  id SERIAL PRIMARY KEY NOT NULL,
  start_date VARCHAR(255) NOT NULL,
  end_date VARCHAR(255) NOT NULL,
  quest_id integer REFERENCES quest(id) ON DELETE CASCADE NOT NULL,
);