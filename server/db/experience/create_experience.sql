INSERT INTO experience_table (title, company, location, description, start_date, end_date, authid)
VALUES (${title}, ${company}, ${location}, ${description}, ${start_date}, ${end_date}, ${authid})
RETURNING title, company, location, description, start_date, end_date, id
