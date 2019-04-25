DROP DATABASE IF EXISTS TaskBoard;

CREATE DATABASE TaskBoard;

USE TaskBoard;

CREATE TABLE Tasks (
  id int NOT NULL AUTO_INCREMENT,
  task varchar(150) NOT NULL,
  progress int NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO Tasks (id, task, progress) VALUES (1, "Exercise for 1 hour", 0);
INSERT INTO Tasks (id, task, progress) VALUES (2, "Drink one glass of water before and after sleeping", 5);
INSERT INTO Tasks (id, task, progress) VALUES (3, "Study Python at least 30 minutes", 10);

CREATE TABLE Habits (
  id int NOT NULL AUTO_INCREMENT,
  habit varchar(150) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO Habits (id, habit) VALUES (1, "Making the bed every day");
INSERT INTO Habits (id, habit) VALUES (2, "Silence phone at 10 pm");