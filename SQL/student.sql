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
-- Or you can alter after creating the table
ALTER TABLE products
ADD CONSTRAINT UNIQUE (product_name);

-- To drop unique constraint
ALTER TABLE products
DROP CONSTRAINT UNIQUE (product_name);

-- To set NOT NULL
CREATE TABLE products(
    product_id INT,
    product_name VARCHAR(20),
    product_price DECIMAL(4, 2) NOT NULL
);
-- Or you can alter after creating the table
ALTER TABLE products
ADD CONSTRAINT NOT NULL (product_price);

-- To drop NOT NULL constraint
ALTER TABLE products
DROP CONSTRAINT NOT NULL (product_price);

-- To use check
CREATE TABLE employees (
    employee_id INT,
    employee_name VARCHAR(30),
    hire_date DATE,
    salary DECIMAL(6, 2),
    CONSTRAINT chk_salary CHECK (salary >= 10000.00)
);
-- Or to add existing table
ALTER TABLE employees
ADD CONSTRAINT chk_salary CHECK (salary >= 10000.00);

-- To drop check constraint
ALTER TABLE employees
DROP CONSTRAINT chk_salary;

-- To use default
CREATE TABLE orders(
    order_id INT,
    order_name VARCHAR(20),
    order_date DATETIME DEFAULT NOW()
);
-- or to apply on existing table
ALTER TABLE orders
ALTER order_date SET DEFAULT NOW();

-- To drop default
ALTER TABLE orders
ALTER order_date DROP DEFAULT;

-- To create primary key
CREATE TABLE students(
    reg_no INT PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20)
);
-- or to apply existing table
ALTER TABLE students
ADD PRIMARY KEY (reg_no);

-- To drop primary key
ALTER TABLE students
DROP PRIMARY KEY;

-- using auto increment
CREATE TABLE students(
    reg_no INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20)
);

-- using foreign key
CREATE TABLE courses(
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(20),
    reg_no INT,
    FOREIGN KEY (reg_no) REFERENCES students(reg_no)
);

-- or to create after creating the table
ALTER TABLE courses
ADD CONSTRAINT fk_reg_no
FOREIGN KEY (reg_no) REFERENCES students(reg_no);

-- Using Joins
-- inner join
SELECT *
FROM courses
INNER JOIN students
ON courses.reg_no = students.reg_no;

-- left join
SELECT *
FROM courses
LEFT JOIN students
ON courses.reg_no = students.reg_no;

-- right join
SELECT *
FROM courses
RIGHT JOIN students
ON courses.reg_no = students.reg_no;

-- functions
SELECT COUNT(reg_no) AS "No.of students"
FROM students;

SELECT MAX(salary) AS "Highest salary"
FROM teacher;

SELECT MIN(salary) AS "Lowest salary"
FROM teacher;

SELECT AVG(salary) AS "Average salary"
FROM teacher;

SELECT SUM(salary) AS "Total salary"
FROM teacher;

SELECT CONCAT(first_name," ", last_name) AS full_name
FROM students;

SELECT LENGTH(first_name) AS length_of_first_name
FROM students;

-- using limit
SELECT * FROM teacher
LIMIT 2;

-- logical operators
SELECT * FROM teacher
WHERE salary > 50000 AND branch = "CSE";

SELECT * FROM teacher
WHERE salary > 50000 OR branch = "CSE";

SELECT * FROM teacher
WHERE NOT salary > 50000 AND NOT branch = "ECE";

SELECT * FROM teacher
WHERE salary BETWEEN 50000 AND 60000;

SELECT * FROM teacher
WHERE branch IN ("ECE","CSE");

SELECT * FROM teacher
WHERE branch NOT IN ("ECE","CSE");

SELECT * FROM teacher
WHERE branch LIKE "E%";

-- wild card
SELECT * FROM teacher
WHERE first_name LIKE "R%";

SELECT * FROM teacher
WHERE last_name LIKE "%s";

SELECT * FROM teacher
WHERE last_name LIKE "_s";

SELECT * FROM teacher
WHERE first_name LIKE "[A-Z]%";

SELECT * FROM teacher
WHERE first_name LIKE "[^A-Z]%";