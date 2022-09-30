-- Create an SQL Queries file for your capstone project.

CREATE DATABASE somactive;

CREATE TABLE users (
    user_id VARCHAR(100) PRIMARY KEY NOT NULL,
    username VARCHAR(60) NOT NULL,
    first_name VARCHAR(60) NOT NULL,
    last_name VARCHAR(60) NOT NULL,
    birthdate DATE NOT NULL,
    profile_picture TEXT NOT NULL,
    email_address VARCHAR(60) NOT NULL,
    registration_date TIMESTAMP NOT NULL,
    user_password VARCHAR(60) NOT NULL,
    sex VARCHAR(7) NOT NULL,
    activity VARCHAR(7) NOT NULL,
    diet VARCHAR(7) NOT NULL
);

-- INSERT INTO users (username, user_first_name, user_last_name, user_birthdate, user_profile_picture, user_email_address, user_registration_date, user_password, user_sex)
-- VALUES ('cjmoriones', 'Christian Junel', 'Moriones', '04-26-1997', 'test', 'christianjunelm@test.com', 'test', 'testPass', 'male');

CREATE TABLE login_sessions (
    session_id SERIAL PRIMARY KEY NOT NULL,
    session_start TIMESTAMP NOT NULL,
    session_end TIMESTAMP NOT NULL,
    user_id VARCHAR(100) NOT NULL,
        FOREIGN KEY(user_id)
            REFERENCES users(user_id)
);

CREATE TABLE details_for_macro_calculation (
    macrodetail_id SERIAL PRIMARY KEY NOT NULL,
    detail_type VARCHAR(50) NOT NULL,
    detail_value VARCHAR(40) NOT NULL,
    inserted_at TIMESTAMP NOT NULL,
    user_id VARCHAR(100) NOT NULL,
        FOREIGN KEY(user_id)
            REFERENCES users(user_id)
);

CREATE TABLE reminders_to_self (
    reminder_id SERIAL PRIMARY KEY NOT NULL,
    user_reminder_to_self VARCHAR(255) NOT NULL,
    inserted_at TIMESTAMP NOT NULL,
    user_id VARCHAR(100) NOT NULL,
        FOREIGN KEY(user_id)
            REFERENCES users(user_id)
);

CREATE TABLE bmi_overview (
    bmi_id SERIAL PRIMARY KEY NOT NULL,
    weight_in_kg DEC(6,2) NOT NULL,
    height_in_cm DEC(6,2) NOT NULL,
    inserted_at TIMESTAMP NOT NULL,
    user_id VARCHAR(100) NOT NULL,
        FOREIGN KEY(user_id)
            REFERENCES users(user_id)
);

CREATE TABLE workouts (
    workout_id SERIAL PRIMARY KEY NOT NULL,
    link VARCHAR(100) NOT NULL,
    category VARCHAR(20) NOT NULL,
    type VARCHAR(20) NOT NULL
);

CREATE TABLE profile_pictures (
    profile_id SERIAL PRIMARY KEY NOT NULL,
    image_path VARCHAR(550) NOT NULL,
    inserted_at TIMESTAMP NOT NULL,
    user_id VARCHAR(100) NOT NULL,
        FOREIGN KEY(user_id)
            REFERENCES users(user_id)
);

INSERT INTO workouts (link, category, type) 
VALUES ('https://www.youtube.com/embed/gC_L9qAHVJ8', 'Obese', 'Aerobic');

INSERT INTO workouts (link, category, type) 
VALUES ('https://www.youtube.com/embed/Co2UD3sVb0A', 'Obese', 'Aerobic');

INSERT INTO workouts (link, category, type) 
VALUES ('https://www.youtube.com/embed/H0c-4nZjIWQ', 'Obese', 'Aerobic');

INSERT INTO workouts (link, category, type) 
VALUES ('https://www.youtube.com/embed/YufejdqeMYk', 'Obese', 'Aerobic');

INSERT INTO workouts (link, category, type) 
VALUES ('https://www.youtube.com/embed/f4ploouAfWI', 'Obese', 'Anaerobic');

INSERT INTO workouts (link, category, type) 
VALUES ('https://www.youtube.com/embed/vPJKAG0mknI', 'Obese', 'Anaerobic');

INSERT INTO workouts (link, category, type) 
VALUES ('https://www.youtube.com/embed/f4ploouAfWI', 'Obese', 'Anaerobic');

INSERT INTO workouts (link, category, type) 
VALUES ('https://www.youtube.com/embed/vPJKAG0mknI', 'Obese', 'Anaerobic');

INSERT INTO workouts (link, category, type) 
VALUES ('https://www.youtube.com/embed/uSyH0dZu8TM', 'Normal Range', 'Aerobic');

INSERT INTO workouts (link, category, type) 
VALUES ('https://www.youtube.com/embed/yVUcHEOr450', 'Normal Range', 'Aerobic');

INSERT INTO workouts (link, category, type) 
VALUES ('https://www.youtube.com/embed/M0uO8X3_tEA', 'Normal Range', 'Aerobic');

INSERT INTO workouts (link, category, type) 
VALUES ('https://www.youtube.com/embed/SDhyfxf81nU', 'Normal Range', 'Aerobic');

INSERT INTO workouts (link, category, type) 
VALUES ('https://www.youtube.com/embed/HtZHw8eU7jA', 'Normal Range', 'Anaerobic');

INSERT INTO workouts (link, category, type) 
VALUES ('https://www.youtube.com/embed/g_tea8ZNk5A', 'Normal Range', 'Anaerobic');

INSERT INTO workouts (link, category, type) 
VALUES ('https://www.youtube.com/embed/Bu4_3Gtis_M', 'Normal Range', 'Anaerobic');

INSERT INTO workouts (link, category, type) 
VALUES ('https://www.youtube.com/embed/j3M-gKfOWeE', 'Normal Range', 'Anaerobic');

INSERT INTO workouts (link, category, type) 
VALUES ('https://www.youtube.com/embed/zlyqr9bNs1E', 'Underweight', 'Aerobic');

INSERT INTO workouts (link, category, type) 
VALUES ('https://www.youtube.com/embed/W7mN-i0J7M0', 'Underweight', 'Aerobic');

INSERT INTO workouts (link, category, type) 
VALUES ('https://www.youtube.com/embed/JyhSv1Oqfcc', 'Underweight', 'Aerobic');

INSERT INTO workouts (link, category, type) 
VALUES ('https://www.youtube.com/embed/FDpM-CGMXcw', 'Underweight', 'Aerobic');

INSERT INTO workouts (link, category, type) 
VALUES ('https://www.youtube.com/embed/JNi9VFsm6kg', 'Underweight', 'Anaerobic');

INSERT INTO workouts (link, category, type) 
VALUES ('https://www.youtube.com/embed/mUns8O4YL5M', 'Underweight', 'Anaerobic');

INSERT INTO workouts (link, category, type) 
VALUES ('https://www.youtube.com/embed/62pbuevDbr4', 'Underweight', 'Anaerobic');

INSERT INTO workouts (link, category, type) 
VALUES ('https://www.youtube.com/embed/LhhWNixj5zE', 'Underweight', 'Anaerobic');

UPDATE users
SET activity = "1.9"
WHERE user_id = 'c116b0a7-a193-40ed-ae6b-2c79a843a751';

UPDATE USERS SET activity = 1.375 WHERE USER_ID = 'c116b0a7-a193-40ed-ae6b-2c79a843a751';

CREATE TABLE meals (
    meal_id SERIAL PRIMARY KEY NOT NULL,
    link VARCHAR(100) NOT NULL,
    category VARCHAR(20) NOT NULL
);

INSERT INTO meals (link, category) 
VALUES ('https://www.youtube.com/embed/0KFKLTkvZNI', '1');

INSERT INTO meals (link, category) 
VALUES ('https://www.youtube.com/embed/jlBDeT7pfYU', '1');

INSERT INTO meals (link, category) 
VALUES ('https://www.youtube.com/embed/XIcyWvLPezg', '1');

INSERT INTO meals (link, category) 
VALUES ('https://www.youtube.com/embed/RR404CmK7mA', '1');

INSERT INTO meals (link, category) 
VALUES ('https://www.youtube.com/embed/bxLSBTJLtLU', '2');

INSERT INTO meals (link, category) 
VALUES ('https://www.youtube.com/embed/17GrPDnYt6E', '2');

INSERT INTO meals (link, category) 
VALUES ('https://www.youtube.com/embed/vmdITEguAnE', '2');

INSERT INTO meals (link, category) 
VALUES ('https://www.youtube.com/embed/KUVF5Yqhnlo', '2');

INSERT INTO meals (link, category) 
VALUES ('https://www.youtube.com/embed/t2oYjj8ikis', '3');

INSERT INTO meals (link, category) 
VALUES ('https://www.youtube.com/embed/Bhn1QBnuWzo', '3');

INSERT INTO meals (link, category) 
VALUES ('https://www.youtube.com/embed/CXojy8K9Buo', '3');

INSERT INTO meals (link, category) 
VALUES ('https://www.youtube.com/embed/2iYLMM1u5Y8', '3');

INSERT INTO meals (link, category) 
VALUES ('https://www.youtube.com/embed/Rg-dsFE_o3o', '4');

INSERT INTO meals (link, category) 
VALUES ('https://www.youtube.com/embed/DDAromHaKf4', '4');

INSERT INTO meals (link, category) 
VALUES ('https://www.youtube.com/embed/rhM-BckSBp4', '4');

INSERT INTO meals (link, category) 
VALUES ('https://www.youtube.com/embed/ishwT92D8Ec', '4');