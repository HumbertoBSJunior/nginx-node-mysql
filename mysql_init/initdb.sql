USE nodedb;
CREATE TABLE IF NOT EXISTS people (
  id integer NOT NULL AUTO_INCREMENT,
  name varchar(225),
  PRIMARY KEY (id)
);