SELECT users.username, users.firstname, users.lastname, users.description, users.imgurl, users.theme, skills_json.skills, education_json.education, experience_json.experience
FROM users
  INNER JOIN (
      SELECT authid,
              json_agg((SELECT x FROM(SELECT id, skill, lvl) x)) as skills
          FROM skills_table
          GROUP BY authid
  ) skills_json ON users.authid = skills_json.authid
    INNER JOIN (
        SELECT authid,
            json_agg((SELECT x FROM (SELECT id, school, emphasis, start_date, end_date) x)) AS education
        FROM   education_table
        GROUP BY authid
    ) education_json ON users.authid = education_json.authid
      INNER JOIN (
        SELECT authid,
            json_agg((SELECT x FROM (SELECT id, title, company, description, location, start_date, end_date) x)) AS experience
        FROM experience_table
        GROUP BY authid
      ) experience_json ON users.authid = experience_json.authid
WHERE users.username = ${username}
