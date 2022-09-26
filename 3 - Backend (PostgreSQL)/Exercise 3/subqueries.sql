-- I've created this table on the pet adoption database since the database doesn't matter for this exercise.


CREATE TABLE salaries (
    salary_id SERIAL PRIMARY KEY NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    salary INT NOT NULL
);

INSERT INTO salaries (first_name, last_name, salary)
VALUES ('Tj', 'Olson', 50000);

INSERT INTO salaries (first_name, last_name, salary)
VALUES ('Steven', 'Markle', 30000);

INSERT INTO salaries (first_name, last_name, salary)
VALUES ('Jake', 'The Dog', 3002);

INSERT INTO salaries (first_name, last_name, salary)
VALUES ('Jake', 'The Dog', 3002);

INSERT INTO salaries (first_name, last_name, salary)
VALUES ('Fin', 'The Human', 300002);

INSERT INTO salaries (first_name, last_name, salary)
VALUES ('Alexander', 'The Great', 320);

INSERT INTO salaries (first_name, last_name, salary)
VALUES ('Son', 'Goku', 30000);

INSERT INTO salaries (first_name, last_name, salary)
VALUES ('Tj', 'Olsones', 4550000);

INSERT INTO salaries (first_name, last_name, salary)
VALUES ('Steven', 'Markleses',  530000);

INSERT INTO salaries (first_name, last_name, salary)
VALUES ('Jake', 'The Dog 4', 300222);

INSERT INTO salaries (first_name, last_name, salary)
VALUES ('Jake', 'The Dog 3', 3002);

SELECT * FROM salaries  
WHERE salary < (
    SELECT MAX (salary) FROM salaries
    WHERE first_name = 'Jake');

--

-- SELECT first_name, last_name, birthdate, email_address, registration_date, sex, username, bmi_overview.weight_in_kg, bmi_overview.height_in_cm, profile_pictures.image_path FROM 
--     bmi_overview
--     INNER JOIN
--     users
--     ON 
--     users.user_id = bmi_overview.user_id
--     INNER JOIN
--     profile_pictures
--     ON
--     users.user_id = profile_pictures.user_id
--     WHERE bmi_overview.inserted_at = (
--         SELECT bmi_overview.inserted_at FROM bmi_overview
--         WHERE bmi_overview.inserted_at = (SELECT MAX(bmi_overview.inserted_at) FROM bmi_overview)
--         AND profile_pictures.inserted_at = (SELECT MAX(profile_pictures.inserted_at) FROM profile_pictures)
--         AND users.user_id = req.user.user_id
--     );

SELECT first_name, last_name, birthdate, email_address, registration_date, sex, username, bmi_overview.weight_in_kg, bmi_overview.height_in_cm, profile_pictures.image_path, user_reminder_to_self FROM 
bmi_overview
INNER JOIN
users
ON 
users.user_id = bmi_overview.user_id
INNER JOIN
profile_pictures
ON
users.user_id = profile_pictures.user_id
INNER JOIN
reminders_to_self
ON
users.user_id = reminders_to_self.user_id
WHERE bmi_overview.inserted_at = (SELECT MAX (bmi_overview.inserted_at)
FROM bmi_overview
WHERE bmi_overview.user_id = '1b9e7496-7004-42ab-a99c-4ac5102bc26a')
AND
reminders_to_self.inserted_at = (SELECT MAX (reminders_to_self.inserted_at) 
FROM reminders_to_self
WHERE reminders_to_self.user_id = '1b9e7496-7004-42ab-a99c-4ac5102bc26a')
AND
profile_pictures.inserted_at = (SELECT MAX (profile_pictures.inserted_at) 
FROM profile_pictures
WHERE profile_pictures.user_id = '1b9e7496-7004-42ab-a99c-4ac5102bc26a')
AND 
users.user_id = '1b9e7496-7004-42ab-a99c-4ac5102bc26a';
        
