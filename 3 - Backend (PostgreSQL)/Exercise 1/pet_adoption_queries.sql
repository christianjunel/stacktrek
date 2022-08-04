-- 2. PET ADOPTION ==> The new company that hired you instructed you to make a system for pet adoption. The tables included should be for pets and customers.

-- A customer can adopt many pets but a pet can only be adopted by one customer.
-- Include also the pet's details such as name, age, breed, and type of pet (Cat, dog, etc.)

CREATE DATABASE pet_adoption;

CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY NOT NULL,
    customer_name TEXT NOT NULL
);

INSERT INTO customers (customer_name)
VALUES ('Christian');

INSERT INTO customers (customer_name)
VALUES ('Jen');

INSERT INTO customers (customer_name)
VALUES ('Charlotte');

CREATE TABLE pets (
    pet_id SERIAL PRIMARY KEY NOT NULL,
    pet_name TEXT NOT NULL,
    pet_age INT NOT NULL,
    pet_breed TEXT NOT NULL,
    pet_type TEXT NOT NULL,
    customer_id INT NOT NULL,
        FOREIGN KEY (customer_id)
            REFERENCES customers(customer_id)
);

INSERT INTO pets (pet_name, pet_age, pet_breed, pet_type, customer_id)
VALUES ('Molly', 2, 'Askal', 'Dog', 1);

INSERT INTO pets (pet_name, pet_age, pet_breed, pet_type, customer_id)
VALUES ('John', 2, 'Persian', 'Cat', 1);

INSERT INTO pets (pet_name, pet_age, pet_breed, pet_type, customer_id)
VALUES ('John', 2, 'Persian', 'Cat', 1);

INSERT INTO pets (pet_name, pet_age, pet_breed, pet_type, customer_id)
VALUES ('Amy', 4, 'Husky', 'Dog', 3);

INSERT INTO pets (pet_name, pet_age, pet_breed, pet_type, customer_id)
VALUES ('Clint', 6, 'Komodo Dragon', 'Lizard', 2);

-- This query shows a customer can have multiple pets without duplicates
SELECT DISTINCT customer_name, pets.pet_name, pets.pet_age, pets.pet_breed, pets.pet_type FROM
customers
INNER JOIN
pets
ON
customers.customer_id = pets.customer_id
WHERE customer_name = 'Christian';

-- This query shows a pet can have only 1 owner without duplicates
SELECT DISTINCT pet_name, pet_age, pet_breed, pet_type, customers.customer_name FROM
pets
INNER JOIN
customers
ON
pets.customer_id = customers.customer_id;