UPDATE users
SET theme = ${theme}
WHERE authid = ${authid}
RETURNING username, firstname, lastname, description, theme, imgurl
