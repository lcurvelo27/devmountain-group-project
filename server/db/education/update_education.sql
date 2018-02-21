UPDATE education_table
SET school = ${school}, emphasis = ${emphasis}, start_date = ${start_date}, end_date = ${end_date}
WHERE id = ${id} AND authid = ${authid}
RETURNING school, emphasis, start_date, end_date, id
