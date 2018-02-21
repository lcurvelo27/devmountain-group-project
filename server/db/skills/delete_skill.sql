DELETE FROM skills_table
WHERE authid = ${authid} AND id = ${id}
RETURNING skill, lvl, id
