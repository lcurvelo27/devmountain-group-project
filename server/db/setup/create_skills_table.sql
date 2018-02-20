CREATE TABLE skills (
    id SERIAL PRIMARY KEY,
    skill VARCHAR(30),
    lvl INTEGER,
    username VARCHAR(30) REFERENCES users(username)
)
