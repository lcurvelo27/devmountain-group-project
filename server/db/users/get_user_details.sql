SELECT users.*, skills_json.skills, education_json.education
FROM users
INNER JOIN (
    SELECT username,
            json_agg((SELECT x FROM(SELECT skill, lvl) x)) as skills
        FROM skills_table
        GROUP BY username
) skills_json
ON users.username = skills_json.username
    INNER JOIN (
        SELECT username,
            json_agg((SELECT x FROM (SELECT school, emphasis, start_date, end_date) x)) AS education
        FROM   education_table
        GROUP BY username
    ) education_json
    ON users.username = education_json.username
WHERE users.username = ${username}
