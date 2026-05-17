### DATABSE ###
- A collection of tables.

## To create DB #
CREATE DATABASE college(database name);

## To use DB ##
USE college(database name);

## To alter DB #
ALTER DATABASE college READ ONLY = 1;
in read only mode we cannot make changes in database.
to disable read only
ALTER DATABASE college READ ONLY = 0;

## To delete or drop DB ##
DROP college(database name);

### TABLE ###
- It consists of ROWS & COLUMNS.

## To create table ##
CREATE TABLE students (
    reg_no VARCHAR(20),
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    branch VARCHAR(50)
);
- to view tha table
SELECT * FROM students;

## TO Rename The Table ##
RENAME TABLE students TO teachers;

## To drop or delete table ##
DROP TABLE teachers;

## To alter the table ##
ALTER TABLE teachers
ADD salary VARCHAR(50);

ALTER TABLE teachers
ADD email VARCHAR(50);

## To rename a column ##
ALTER TABLE teachers
RENAME COLUMN reg_no TO staff_id;
- to modify a datatype of column
ALTER TABLE teachers
MODIFY COLUMN staff_id INT;
- to move colum around
ALTER TABLE teachers
MODIFY salary VARCHAR(50) AFTER last_name;(use FIRST to make it move to first column)

## To drop a column ##
ALTER TABLE teachers
DROP COLUMN email;

## TRUNCATE ##
- it is used to delete all the data present in the table but it will not delete the table.
TRUNCATE TABLE teachers;

## To insert rows ##
INSERT INTO teachers
VALUES (1,"rahul","kumar","50000","ECE","[EMAIL_ADDRESS]"),
(2,"geeta","sharma","60000","CSE","[EMAIL_ADDRESS]");
- to insert values only in certain columns
INSERT INTO teachers(staff_id,first_name,last_name)
VALUES (3,"virat","kohli");

## To select specific columns ##
SELECT first_name,last_name FROM teachers;
- where clause
SELECT * FROM teachers
WHERE staff_id >= 1;

## To update data in tables ##
UPDATE teachers
SET salary = "55000",branch="EEE",email="[EMAIL_ADDRESS]" WHERE staff_id = 3;

## To DELETE rows ##
DELETE FROM teachers
WHERE staff_id = 3;

## To turn off auto-commit ##
SET AUTOCOMMIT = OFF;

## To turn on auto-commit ##
SET AUTOCOMMIT = ON;

## To save the data ##
COMMIT;

## To undo the data ##
ROLLBACK;

## To get date & time ##
- example:
CREATE TABLE test (
    my_date DATE,
    my_time TIME,
    my_datetime DATETIME
);
INSERT INTO test
VALUES (CURRENT_DATE(), CURRENT_TIME(), NOW());
SELECT * FROM test;

## To set unique constraint ##
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

## To set NOT NULL ##
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

## Check constraint ##
- can be used to limit the values
CREATE TABLE employees (
    employee_id INT,
    employee_name VARCHAR(30),
    hire_date DATE,
    salary DECIMAL(6, 2),
    CONSTRAINT chk_salary CHECK (salary >= 10000.00)
);

## To use default ##
CREATE TABLE orders(
    order_id INT,
    order_name VARCHAR(20),
    order_date DATETIME DEFAULT NOW()
);
- or to apply existing table
ALTER TABLE orders
ALTER order_date SET DEFAULT NOW();

## TO drop default ##
ALTER TABLE orders
ALTER order_date DROP DEFAULT;

## PRIMARY KEY ##
- it uniquely identifies each row in the table
- no null values are allowed
- only one primary key is allowed per table
CREATE TABLE students(
    reg_no INT PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20)
);
- or to apply existing table
ALTER TABLE students
ADD PRIMARY KEY (reg_no);

## To drop primary key ##
ALTER TABLE students
DROP PRIMARY KEY;

## AUTO INCREMENT ##
- used to auto increment the values in the column that has primary key.
CREATE TABLE students(
    reg_no INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20)
);

## FOREIGN KEY ##
- it is used to refer to the primary key of the other table
- it is used to create relationship between tables
- only one foreign key is allowed per table
CREATE TABLE courses(
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(20),
    reg_no INT,
    FOREIGN KEY (reg_no) REFERENCES students(reg_no)
);

- or to create after creating the table
ALTER TABLE courses
ADD CONSTRAINT fk_reg_no
FOREIGN KEY (reg_no) REFERENCES students(reg_no);

## JOINS ##
- joins are used to combine data from two or more tables.
- there are 4 types of joins:
    - INNER JOIN
    - LEFT JOIN
    - RIGHT JOIN
    - FULL OUTER JOIN

## INNER JOIN ##
- it is used to select all the rows that have matching values in both tables.

## LEFT JOIN ##
- it is used to select all the rows from the left table and the matching values from the right table.

## RIGHT JOIN ##
- it is used to select all the rows from the right table and the matching values from the left table.

## SELF JOIN ##
- it is used to join a table with itself.

## Functions ##
- used to perform operations on data
- examples:
    - COUNT()
    - MAX()
    - MIN()
    - AVG()
    - SUM()
    - CONCAT()
    - LENGTH()

## LIMIT ##
- used to limit the number of rows returned by the query.

## Logical operators ##
- AND
- OR
- NOT
- BETWEEN
- IN
- LIKE
- REGEXP

## Wildcard characters ##
- % : represents zero or more characters
- _ : represents a single character
- [] : represents a range of characters
- [^] : represents a range of characters
- [!] : represents a range of characters
- used to substitute one or more characters in a string.