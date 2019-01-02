UPDATE game
SET queue = true
WHERE id = $1;