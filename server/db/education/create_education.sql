INSERT INTO education_table (school, emphasis, start_date, end_date, authid)
VALUES (${school}, ${emphasis}, ${start_date}, ${end_date}, ${authid})
RETURNING school, emphasis, start_date, end_date, id
