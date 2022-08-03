-- 1. CLASSROOM ==> Create a basic database for a classroom system. The tables should include the student table, the teacher table, and a classroom table.

-- Teachers can have many classes but a class can only have one teacher.
-- The students can have many classes as well.

CREATE DATABASE classroom_system; -- Create the classroom_system database

CREATE TABLE students ( -- Create a table 'students' with the student_id field that's in auto-increment
    student_id SERIAL PRIMARY KEY NOT NULL,
    student_name TEXT NOT NULL
);

INSERT INTO students (student_name) -- Inserting the value "Christian" into the students table
VALUES ('Christian');   

INSERT INTO students (student_name) 
VALUES ('Jen');   

INSERT INTO students (student_name) 
VALUES ('Charlotte'); 

INSERT INTO students (student_name) 
VALUES ('Bellamy'); 

CREATE TABLE teachers ( -- Create a table 'teachers' with the teacher_id field that's in auto-increment
    teacher_id SERIAL PRIMARY KEY NOT NULL,
    teacher_name TEXT NOT NULL
);

INSERT INTO teachers (teacher_name) -- Inserting the value "Casquejo" into the teachers table
VALUES ('Casquejo');

INSERT INTO teachers (teacher_name) 
VALUES ('Beltran');

INSERT INTO teachers (teacher_name) 
VALUES ('Jean');

INSERT INTO teachers (teacher_name) 
VALUES ('Sean');

CREATE TABLE classrooms ( -- Create a table 'classrooms' with 2 Foreign Keys to be used as references.
    classroom_id SERIAL PRIMARY KEY NOT NULL,
    classroom_name TEXT NOT NULL,
    student_id INT NOT NULL,
        FOREIGN KEY (student_id)
            REFERENCES students(student_id),
    teacher_id INT NOT NULL,
        FOREIGN KEY (teacher_id)
            REFERENCES teachers(teacher_id)
);

INSERT INTO classrooms (classroom_name, student_id, teacher_id) -- Inserting the values into the classroom table
VALUES ('4A12', 1, 1);

INSERT INTO classrooms (classroom_name, student_id, teacher_id)
VALUES ('4A13', 1, 2);

INSERT INTO classrooms (classroom_name, student_id, teacher_id)
VALUES ('4A14', 1, 3);

INSERT INTO classrooms (classroom_name, student_id, teacher_id)
VALUES ('4A15', 2, 2);

INSERT INTO classrooms (classroom_name, student_id, teacher_id)
VALUES ('4A16', 3, 4);

INSERT INTO classrooms (classroom_name, student_id, teacher_id)
VALUES ('4A17', 4, 1);

INSERT INTO classrooms (classroom_name, student_id, teacher_id)
VALUES ('4A12', 3, 3);

INSERT INTO classrooms (classroom_name, student_id, teacher_id)
VALUES ('4A12', 1, 3);

-- This query shows a class with only one teacher
SELECT DISTINCT classroom_name, teachers.teacher_name FROM
classrooms
INNER JOIN
teachers
ON 
classrooms.teacher_id = teachers.teacher_id
WHERE teachers.teacher_name = 'Jean';


-- This query shows a teacher can have multiple classes without duplicates
SELECT teacher_name, classrooms.classroom_name FROM 
teachers
INNER JOIN
classrooms
ON 
teachers.teacher_id = classrooms.teacher_id
WHERE teacher_name = 'Casquejo';

-- This query shows a student can have multiple classes without duplicates
SELECT DISTINCT student_name, classrooms.classroom_name FROM
students
INNER JOIN
classrooms
ON
students.student_id = classrooms.student_id
WHERE student_name = 'Christian';