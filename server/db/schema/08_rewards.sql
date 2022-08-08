DROP TABLE IF EXISTS rewards CASCADE;

CREATE TABLE rewards (
  id SERIAL PRIMARY KEY NOT NULL,
  base_experience INTEGER NOT NULL,
  first_place_bonus INTEGER NOT NULL,
  second_place_bonus INTEGER NOT NULL,
  third_place_bonus INTEGER NOT NULL
)