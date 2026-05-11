### DATABSE ###
- A collection of tables.

## To create DB #
CREATE DATABASE college(database name);

## To use DB ##
USE college(database name);

## To alter DB #
ALTER DATABASE college READ ONLY = 1;
in read only mode we cannot make changes in database.
-- to disable read only
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
-- to view tha table
SELECT * FROM students;

## TO Rename The Table ##
RENAME TABLE students TO teachers;

## To drop or delete table ##
DROP TABLE teachers;

## To alter the table ##
ALTER TABLE teachers
ADD salary VARCHAR(50);

## To rename a column ##
ALTER TABLE teachers
RENAME COLUMN reg_no TO staff_id;
- to modify a datatype of column
ALTER TABLE teachers
MODIFY COLUMN staff_id VARCHAR(100);