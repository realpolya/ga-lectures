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
