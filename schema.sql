DROP DATABASE IF EXISTS TaskBoard;

CREATE DATABASE TaskBoard;

USE TaskBoard;

CREATE TABLE Tasks (
  id int NOT NULL AUTO_INCREMENT,
  task varchar(150) NOT NULL,
  progress int NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO Tasks (id, task, progress) VALUES (1, "Example habit 1", 0);
INSERT INTO Tasks (id, task, progress) VALUES (2, "Example habit 2", 5);
INSERT INTO Tasks (id, task, progress) VALUES (3, "Example habit 3", 10);