CREATE TABLE experience_table (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    company VARCHAR(100),
    description VARCHAR(300),
    location VARCHAR(100),
    start_date DATE,
    end_date DATE,
    authid VARCHAR(50) REFERENCES users(authid)
)
