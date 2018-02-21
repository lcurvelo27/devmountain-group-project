CREATE TABLE education_table (
    id SERIAL PRIMARY KEY,
    school VARCHAR(50),
    emphasis VARCHAR(100),
    start_date DATE,
    end_date DATE,
    authid VARCHAR(50) REFERENCES users(authid)
)
