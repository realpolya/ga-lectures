-- Postgres SQL lesson
-- relational databases
CREATE DATABASE music;
DROP DATABASE music;

\l -- see all databases
\c music -- connect to a database
\dt -- list of relations
\h -- see all of sql commands
\? -- all of postgres commands
\H -- switch output format to html

CREATE TABLE bands (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    genre VARCHAR
);

DROP TABLE bands;

INSERT INTO bands (name, genre)
VALUES
('The Beatles', 'Pop'),
('Coldplay', 'Pop'),
('Jackson 5', 'Rock'),
('ACDC', 'Rock');

SELECT * FROM bands;
SELECT genre FROM bands;
SELECT * FROM bands WHERE genre = 'Rock';
SELECT * FROM bands ORDER BY name ASC;
SELECT * FROM bands ORDER BY name DESC;

-- update one column
UPDATE bands SET year = '1960' WHERE name = 'The Beatles';

ALTER TABLE bands ADD year INT; -- add a column
ALTER TABLE superbands RENAME TO bands; -- rename table

SELECT COUNT(*) FROM bands WHERE genre = 'Pop';

CREATE TABLE musicians (
    id SERIAL PRIMARY KEY,
    band_id INT REFERENCES bands(id),
    name VARCHAR NOT NULL,
    age INTEGER NOT NULL,
    sings BOOLEAN,
    dances BOOLEAN
);

-- Insert musicians for The Beatles
INSERT INTO musicians (band_id, name, age, sings, dances) 
VALUES 
(1, 'John Lennon', 40, null, FALSE),
(1, 'Paul McCartney', 39, TRUE, FALSE),
(1, 'George Harrison', 38, TRUE, null),
(1, 'Ringo Starr', 41, FALSE, TRUE);

-- Insert musicians for Coldplay
INSERT INTO musicians (band_id, name, age, sings, dances) 
VALUES 
(2, 'Chris Martin', 47, TRUE, null),
(2, 'Guy Berryman', 47, TRUE, FALSE),
(2, 'Phil Harvey', 48, null, FALSE),
(2, 'Jonny Buckland', 46, TRUE, TRUE),
(2, 'Will Champion', 46, TRUE, TRUE);

-- Insert musicians for Jackson 5
INSERT INTO musicians (band_id, name, age, sings, dances) 
VALUES 
(3, 'Jackie Jackson', 73, TRUE, TRUE),
(3, 'Tito Jackson', 71, null, FALSE),
(3, 'Jermaine Jackson', 69, TRUE, FALSE),
(3, 'Marlon Jackson', 67, null, TRUE),
(3, 'Michael Jackson', 50, null, TRUE);

SELECT * FROM musicians WHERE sings = TRUE;
SELECT * FROM musicians WHERE age BETWEEN 39 AND 45;
-- LIKE cares about case, ILIKE does not
SELECT * FROM musicians WHERE name ILIKE '%mich%'; 

-- =: Equal to
-- <> or !=: Not equal to
-- >: Greater than
-- <: Less than
-- >=: Greater than or equal to
-- <=: Less than or equal to
-- BETWEEN: Between an inclusive range
-- LIKE: Search for a pattern
-- IN: Matches any of a list of values
-- IS NULL: Checks for NULL values
-- AND: Combines multiple conditions
-- OR: Returns rows that meet either condition
-- NOT: Negates a condition

-- Joining
SELECT * FROM musicians 
JOIN bands ON musicians.band_id = bands.id;

SELECT bands.name AS band, musicians.name AS musicians
FROM bands
JOIN musicians ON bands.id = musicians.band_id;

-- types of JOIN
INNER JOIN -- default (only the overlap)
LEFT JOIN -- all rows from left table
RIGHT JOIN -- all rows from right table
FULL JOIN -- match in at least one of the tables

-- UNION
-- create a new table

-- DELETE
DELETE FROM bands WHERE name = 'ACDC';
DELETE FROM bands; -- deletes everything te

