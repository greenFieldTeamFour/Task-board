DROP DATABASE IF EXISTS TaskBoard;

CREATE DATABASE TaskBoard;

USE TaskBoard;

CREATE TABLE Tasks (
  id int NOT NULL AUTO_INCREMENT,
  task varchar(150) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO Tasks (id, task) VALUES (1, "Example task 1");
INSERT INTO Tasks (id, task) VALUES (2, "Example task 2");
INSERT INTO Tasks (id, task) VALUES (3, "Example task 3");
INSERT INTO Tasks (id, task) VALUES (4, "Example task 4");