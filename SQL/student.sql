-- to create a data base
CREATE DATABASE students;

-- to use that data base
USE students;

-- to create a table 
CREATE TABLE student(
    name VARCHAR(25),
    age INT,
    gender VARCHAR(6),
    address VARCHAR(100)
);

-- to view the table
SELECT * FROM student;

-- to rename the table
RENAME TABLE student TO teacher;

-- to drop the table
DROP TABLE teacher;

-- to alter the table
ALTER TABLE teacher
ADD salary VARCHAR(50);

ALTER TABLE teacher
ADD email VARCHAR(50);

-- to rename a column
ALTER TABLE teacher
RENAME COLUMN name TO first_name;

-- to modify a column
ALTER TABLE teacher
MODIFY COLUMN first_name VARCHAR(50);

-- to move column around
ALTER TABLE teacher
MODIFY salary VARCHAR(50) AFTER last_name;

-- to drop a column
ALTER TABLE teacher
DROP COLUMN email;

-- TRUNCATE
TRUNCATE TABLE teacher;

-- to insert values
INSERT INTO teacher
VALUES (1,"rahul","kumar","50000","ECE","[EMAIL_ADDRESS]"),
(2,"geeta","sharma","60000","CSE","[EMAIL_ADDRESS]");

-- to select specific columns
SELECT first_name,last_name FROM teacher;

-- where clause
SELECT * FROM teacher
WHERE staff_id >= 1;

-- to update data
UPDATE teacher
SET salary = "55000",branch="EEE",email="[EMAIL_ADDRESS]" WHERE staff_id = 3;

-- to delete rows
DELETE FROM teacher
WHERE staff_id = 3;

-- to turn off auto-commit
SET AUTOCOMMIT = OFF;

-- to turn on auto-commit
SET AUTOCOMMIT = ON;

-- to save the data
COMMIT;

-- to undo the data
ROLLBACK;

-- to get date & time
CREATE TABLE test (
    my_date DATE,
    my_time TIME,
    my_datetime DATETIME
);
INSERT INTO test
VALUES (CURRENT_DATE(), CURRENT_TIME(), NOW());
SELECT * FROM test;

-- to set unique constraint
CREATE TABLE products(
    product_id INT,
    product_name VARCHAR(20) UNIQUE,
    product_price DECIMAL(4, 2)
);
- Or you can alter after creating the table
ALTER TABLE products
ADD CONSTRAINT UNIQUE (product_name);

- To drop unique constraint
ALTER TABLE products
DROP CONSTRAINT UNIQUE (product_name);

-- To set NOT NULL
CREATE TABLE products(
    product_id INT,
    product_name VARCHAR(20),
    product_price DECIMAL(4, 2) NOT NULL
);
- Or you can alter after creating the table
ALTER TABLE products
ADD CONSTRAINT NOT NULL (product_price);

- To drop NOT NULL constraint
ALTER TABLE products
DROP CONSTRAINT NOT NULL (product_price);