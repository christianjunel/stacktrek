-- Create an SQL Queries file for your capstone project.

CREATE DATABASE somactive;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY NOT NULL,
    username TEXT NOT NULL,
    user_first_name TEXT NOT NULL,
    user_last_name TEXT NOT NULL,
    user_birthdate DATE NOT NULL,
    user_profile_picture BYTEA NOT NULL,
    user_email_address TEXT NOT NULL,
    user_registration_date TIMESTAMP NOT NULL,
    user_password TEXT NOT NULL,
    user_sex VARCHAR(7) NOT NULL
);

-- INSERT INTO users (username, user_first_name, user_last_name, user_birthdate, user_profile_picture, user_email_address, user_registration_date, user_password, user_sex)
-- VALUES ('cjmoriones', 'Christian Junel', 'Moriones', '04-26-1997', 'test', 'christianjunelm@test.com', 'test', 'testPass', 'male');

CREATE TABLE login_sessions (
    session_id SERIAL PRIMARY KEY NOT NULL,
    session_start TIMESTAMP NOT NULL,
    session_end TIMESTAMP NOT NULL,
    user_id INT NOT NULL,
        FOREIGN KEY(user_id)
            REFERENCES users(user_id)
);

CREATE TABLE details_for_macro_calculation (
    macrodetail_id SERIAL PRIMARY KEY NOT NULL,
    detail_type VARCHAR(50) NOT NULL,
    detail_value VARCHAR(40) NOT NULL,
    inserted_at TIMESTAMP NOT NULL,
    user_id INT NOT NULL,
        FOREIGN KEY(user_id)
            REFERENCES users(user_id)
);

CREATE TABLE reminders_to_self (
    reminder_id SERIAL PRIMARY KEY NOT NULL,
    user_reminder_to_self TEXT NOT NULL,
    inserted_at TIMESTAMP NOT NULL,
    user_id INT NOT NULL,
        FOREIGN KEY(user_id)
            REFERENCES users(user_id)
);

CREATE TABLE bmi_overview (
    bmi_id SERIAL PRIMARY KEY NOT NULL,
    weight_in_kg DEC(6,2) NOT NULL,
    height_in_cm DEC(6,2) NOT NULL,
    bmi_score DEC(4,1) NOT NULL,
    bmi_classification VARCHAR(15) NOT NULL,
    bmi_description TEXT NOT NULL,
    inserted_at TIMESTAMP NOT NULL,
    user_id INT NOT NULL,
        FOREIGN KEY(user_id)
            REFERENCES users(user_id)
);

CREATE TABLE workouts (
    workout_id SERIAL PRIMARY KEY NOT NULL,
    workout_name TEXT NOT NULL,
    workout_link TEXT NOT NULL,
    workout_duration TIME NOT NULL,
    workout_category VARCHAR(20) NOT NULL,
    bmi_id INT NOT NULL,
        FOREIGN KEY(bmi_id)
            REFERENCES bmi_overview(bmi_id)
);