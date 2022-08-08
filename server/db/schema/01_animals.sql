DROP TABLE IF EXISTS animals CASCADE;

CREATE TABLE animals (
  id SERIAL PRIMARY KEY NOT NULL,
  description TEXT NOT NULL,
  avatar_url VARCHAR(255) NOT NULL
  required_level INTEGER NOT NULL
)