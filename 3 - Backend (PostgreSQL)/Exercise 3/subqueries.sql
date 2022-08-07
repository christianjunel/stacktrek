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
    WHERE first_name = 'Jake'
    );
