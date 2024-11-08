-- running a file from psql
-- \i ice-cream.sql
DROP TABLE IF EXISTS ice_creams;
CREATE TABLE ice_creams (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(144), 
    pints INT, 
    has_nuts BOOLEAN DEFAULT false
);

INSERT INTO ice_creams (name, pints, has_nuts) 
VALUES
('Plain', 554, false),
('Blueberry', 821, false ),
('Strawberry', 932, false),
('Peanut Butter', 22, true),
('Vanilla', 404, false),
('Chocolate', 203, false);

SELECT * FROM ice_creams;

DROP TABLE IF EXISTS plants;
CREATE TABLE plants (
    id SERIAL PRIMARY KEY, 
    city VARCHAR(144), 
    pints_made INT, 
    passed BOOLEAN, 
    ice_cream_id INT
);

INSERT INTO plants (city, pints_made, passed, ice_cream_id) 
VALUES
('Stamford', 100, true, 1),
('Greenwich', 20, false, 2),
('Hartford', 200, true, 3),
('Waterbury', null, null, null),
('Darien', null, null, null),
('New London', 100, true, 2),
('Bridgeport', 150, true, 2),
('Milford', null, false, null),
('Norwalk', 40, true, 3),
('Hamden', null, true, null),
('New Britain', null, false, null),
('Trumbull', null, null, null),
('Danbury', 300, true, 3),
('New Canaan', null, true, null),
('Fairfield', 400, false, 4),
('Stratford', 250, true, 1);

SELECT * FROM plants;

-- JOIN below
SELECT * FROM ice_creams
JOIN plants ON ice_creams.id = plants.ice_cream_id;

SELECT * FROM ice_creams
LEFT JOIN plants ON ice_creams.id = plants.ice_cream_id;

SELECT * FROM ice_creams
LEFT OUTER JOIN plants ON ice_creams.id = plants.ice_cream_id
WHERE plants.ice_cream_id IS null;

SELECT * FROM ice_creams
RIGHT JOIN plants ON ice_creams.id = plants.ice_cream_id;

SELECT * FROM ice_creams
FULL JOIN plants ON ice_creams.id = plants.ice_cream_id;

SELECT * FROM ice_creams
FULL OUTER JOIN plants ON ice_creams.id = plants.ice_cream_id;

-- Update
ALTER TABLE ice_creams ADD COLUMN description TEXT;

-- update Plain to The Stamford
UPDATE ice_creams SET name = 'The Stamford', description = 'Plain' WHERE name = 'Plain';

-- update Blueberry to The Bridgeport
UPDATE ice_creams SET name = 'The Bridgeport', description = 'Blueberry' WHERE name = 'Blueberry';

-- update Strawberry to The Danbury
UPDATE ice_creams SET name = 'The Danbury', description = 'Strawberry ' WHERE name = 'Strawberry';

-- update Peanut butter to The Fairfield
UPDATE ice_creams SET name = 'The Fairfield', description = 'Peanut Butter' WHERE name = 'Peanut Butter';

-- update Vanilla to The Signature Connecticut
UPDATE ice_creams SET name = 'The Signature Connecticut', description = 'Vanilla' WHERE name = 'Vanilla';

-- Average
SELECT AVG(pints) FROM plants
JOIN ice_creams ON plants.ice_cream_id = ice_creams.id
WHERE name = 'The Danbury';

SELECT city FROM plants
JOIN ice_creams ON plants.ice_cream_id = ice_creams.id
WHERE description LIKE '%berr%';

SELECT city FROM plants WHERE passed = false;

-- Ingredients
CREATE TABLE ingredients(
    id SERIAL PRIMARY KEY, 
    ingredient VARCHAR(64), 
    unit VARCHAR(64), 
    price_per MONEY
);

INSERT INTO ingredients (ingredient, unit, price_per) VALUES
('cream', 'l' , 10),
('sugar' , 'kg', 2),
('milk', 'l', 1),
('blueberry', 'kg', 90),
('strawberry', 'kg', 50),
('peanut butter', 'kg' , 20),
('vanilla', 'kg', 400),
('chocolate', 'l', 170);


SELECT * FROM ingredients;

-- Join tables (many to many)
CREATE TABLE ice_creams_ingredients (
    ice_cream_id INT, 
    ingredient_id INT, 
    per_pint DECIMAL
);

INSERT INTO ice_creams_ingredients (ice_cream_id, ingredient_id) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(1, 2),
(2, 2),
(3, 2),
(4, 2),
(5, 2),
(6, 2),
(1, 3),
(2, 3),
(3, 3),
(4, 3),
(5, 3),
(6, 3),
(2, 4),
(3, 5),
(4, 6),
(5, 7),
(6, 8);

SELECT name AS flavor, ingredient, description, ingredients.id AS ingredient_id, ice_creams.id AS ice_cream_id
FROM ice_creams_ingredients
INNER JOIN ice_creams ON ice_creams.id = ice_creams_ingredients.ice_cream_id
INNER JOIN ingredients ON ingredients.id = ice_creams_ingredients.ingredient_id
ORDER BY name, ingredient;