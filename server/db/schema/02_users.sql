DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  experience_points integer NOT NULL DEFAULT 0,
  level integer NOT NULL DEFAULT 0,
  character_id integer REFERENCES characters(id) ON DELETE CASCADE NOT NULL
);