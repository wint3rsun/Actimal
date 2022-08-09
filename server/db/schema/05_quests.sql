DROP TABLE IF EXISTS quests CASCADE;

CREATE TABLE quests (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  img_url VARCHAR(255) NOT NULL,
  goal INTEGER NOT NULL,
  goal_units VARCHAR(255) NOT NULL,
  required_level INTEGER NOT NULL,
  base_experience INTEGER NOT NULL,
  first_place_exp_bonus INTEGER NOT NULL,
  second_place_exp_bonus INTEGER NOT NULL,
  third_place_exp_bonus INTEGER NOT NULL
);