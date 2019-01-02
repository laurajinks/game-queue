UPDATE game
SET queue = false
WHERE id = $1;