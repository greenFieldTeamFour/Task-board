DROP DATABASE IF EXISTS TaskBoard;

CREATE DATABASE TaskBoard;

USE TaskBoard;

CREATE TABLE Tasks (
  id int NOT NULL AUTO_INCREMENT,
  task varchar(150) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO Tasks (id, task) VALUES (1, "Example habit 1");
INSERT INTO Tasks (id, task) VALUES (2, "Example habit 2");
INSERT INTO Tasks (id, task) VALUES (3, "Example habit 3");