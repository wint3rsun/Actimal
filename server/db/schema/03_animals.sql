DROP TABLE IF EXISTS animals CASCADE;

CREATE TABLE animals (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  avatar_url TEXT NOT NULL,
  required_level INTEGER NOT NULL
);