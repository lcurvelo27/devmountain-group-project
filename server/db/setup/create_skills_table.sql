CREATE TABLE skills_table (
    id SERIAL PRIMARY KEY,
    skill VARCHAR(30),
    lvl INTEGER,
    authid VARCHAR(50) REFERENCES users(authid)
)
