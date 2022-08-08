DROP TABLE IF EXISTS game_challenge_participants CASCADE;
CREATE TABLE game_challenge_participants (
  id SERIAL PRIMARY KEY NOT NULL,
  progress numeric NOT NULL DEFAULT 0.00,
  game_challenges_id integer REFERENCES game_challenges(id) ON DELETE CASCADE NOT NULL,
  users_id integer REFERENCES users(id) ON DELETE CASCADE NOT NULL
);