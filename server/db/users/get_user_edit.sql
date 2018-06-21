SELECT
  U.username,
  U.firstname,
  U.lastname,
  U.description,
  U.imgurl,
  U.theme,

  COALESCE(
    json_agg(S) FILTER (
      WHERE
        S.authid IS NOT NULL
    ),
    '[]'
  ) AS skills,
  COALESCE(
    json_agg(E) FILTER (
      WHERE
        E.authid IS NOT NULL
    ),
    '[]'
  ) AS education,
  COALESCE(
    json_agg(X) FILTER (
      WHERE
        X.authid IS NOT NULL
    ),
    '[]'
  ) AS experience
FROM
  users U
  LEFT JOIN skills_table S ON U.authid = S.authid
  LEFT JOIN education_table E ON U.authid = E.authid
  LEFT JOIN experience_table X ON U.authid = X.authid
WHERE U.authid = ${authid}

GROUP BY
  U.username,
  U.firstname,
  U.lastname,
  U.description,
  U.imgurl,
  U.theme
