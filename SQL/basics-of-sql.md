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
VALUES (1,"rahul","kumar","50000","ECE","[EMAIL_ADDRESS]")
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
