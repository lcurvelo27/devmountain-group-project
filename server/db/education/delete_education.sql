DELETE FROM education_table
WHERE authid = ${authid} AND id = ${id}
RETURNING school, emphasis, start_date, end_date, id
