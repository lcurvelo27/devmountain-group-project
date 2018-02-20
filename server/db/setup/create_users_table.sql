CREATE TABLE users (
    username VARCHAR(30) UNIQUE,
    authID VARCHAR(50),
    firstname VARCHAR(20),
    lastname VARCHAR(20),
    description VARCHAR(140),
    summary VARCHAR(5000)
)
