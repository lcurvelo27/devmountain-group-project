UPDATE users
SET theme = ${theme}
WHERE authid = ${authid} AND username = ${username}
RETURNING username, firstname, lastname, description, theme, imgurl
