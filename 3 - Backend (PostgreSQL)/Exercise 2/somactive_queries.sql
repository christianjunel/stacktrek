-- Create an SQL Queries file for your capstone project.

CREATE DATABASE somactive;

CREATE TABLE users (
    user_id VARCHAR(100) PRIMARY KEY NOT NULL,
    username VARCHAR(60) NOT NULL,
    first_name VARCHAR(60) NOT NULL,
    last_name VARCHAR(60) NOT NULL,
    birthdate DATE NOT NULL,
    profile_picture VARCHAR(255) NOT NULL,
    email_address VARCHAR(60) NOT NULL,
    registration_date TIMESTAMP NOT NULL,
    user_password VARCHAR(60) NOT NULL,
    sex VARCHAR(7) NOT NULL
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
    workout_name VARCHAR(255) NOT NULL,
    link VARCHAR(100) NOT NULL,
    duration TIME NOT NULL,
    category VARCHAR(20) NOT NULL,
    bmi_id INT NOT NULL,
        FOREIGN KEY(bmi_id)
            REFERENCES bmi_overview(bmi_id)
);