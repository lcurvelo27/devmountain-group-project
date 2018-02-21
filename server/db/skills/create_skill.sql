INSERT INTO skills_table (skill, lvl, authid)
VALUES (${skill}, ${lvl}, ${authid})
RETURNING skill, lvl, id
