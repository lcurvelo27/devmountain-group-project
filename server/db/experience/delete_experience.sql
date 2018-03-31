DELETE FROM experience_table
WHERE authid = ${authid} AND id = ${id}
RETURNING title, company, location, description, start_date, end_date, id
