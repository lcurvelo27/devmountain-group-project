insert into users (authid, username, firstname, lastname, description, imgurl)
values  ('ghi789', 'testuser', 'Test', 'User', 'Testing Specialist', 'https://miquon.org/wp-content/uploads/2016/02/GenericUser.png'),
        ('def456', 'janedoe', 'Jane', 'Doe', 'HTML/CSS Master', 'https://miquon.org/wp-content/uploads/2016/02/GenericUser.png'),
        ('abc123', 'jonnyappleseed', 'Johnny', 'Appleseed', 'Aspiring Web Developer', 'https://miquon.org/wp-content/uploads/2016/02/GenericUser.png');
insert into skills_table (authid, skill, lvl)
values  ('abc123', 'HTML', 6),
        ('abc123', 'CSS', 5),
        ('abc123', 'JavaScript', 9),
        ('def456', 'HTML', 10),
        ('def456', 'CSS', 10),
        ('def456', 'JavaScript', 7),
        ('ghi789', 'Quality Assurance', 10),
        ('ghi789', 'Unit Testing', 10),
        ('ghi789', 'Integration Testing', 10);
insert into education_table (authid, school, emphasis, start_date, end_date)
values  ('abc123', 'DevMountain', 'Full Stack Web Development', '2017-08-01', '2017-12-15'),
        ('abc123', 'University of Utah', 'Computer Science', '2012-08-01', '2016-05-15'),
        ('def456', 'DevMountain', 'Full Stack Web Development', '2017-08-01', '2017-12-15'),
        ('def456', 'Utah Valley University', 'Graphic Design', '2012-08-01', '2016-05-15'),
        ('ghi789', 'DevMountain', 'Quality Assurance', '2017-08-01', '2017-12-15');