ALTER TABLE game
SET queue = true
WHERE id = $1;