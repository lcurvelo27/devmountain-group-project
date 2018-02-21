UPDATE skills_table
SET lvl = ${lvl}, skill = ${skill}
WHERE id = ${id} AND authid = ${authid}
RETURNING skill, lvl, id
