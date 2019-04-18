DROP DATABASE IF EXISTS taskBoard;

CREATE DATABASE taskBoard;

USE taskBoard;

CREATE TABLE task (
  id int NOT NULL AUTO_INCREMENT,
  task varchar(150) NOT NULL,
  PRIMARY KEY (ID)
);


INSERT INTO task (id, task) VALUES (1, "wake up");
INSERT INTO task (id, task) VALUES (2, "get high");
INSERT INTO task (id, task) VALUES (3, "spit fire");
INSERT INTO task (id, task) VALUES (4, "get fly");
INSERT INTO task (id, task) VALUES (5, "roll up");
INSERT INTO task (id, task) VALUES (6, "ten times");
INSERT INTO task (id, task) VALUES (7, "get out");
INSERT INTO task (id, task) VALUES (8, "it's show time");
