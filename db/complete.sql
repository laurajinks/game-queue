ALTER TABLE game
SET queue = false
WHERE id = $1;