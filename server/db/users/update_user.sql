UPDATE user
SET username = ${username}, firstname = ${firstname}, lastname = ${lastname}, description = ${description}, imgurl = ${imgurl}
WHERE authid = ${authid}
RETURNING username, firstname, lastname, description, imgurl
