INSERT INTO users (users_username, users_password, users_id)
VALUES ($1, $2, $3)
RETURNING *