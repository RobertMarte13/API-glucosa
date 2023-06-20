CREATE DATABASE IF NOT EXISTS dateregister;

USE dateregister;

CREATE TABLE glucosa (
    id INT(255) NOT NULL AUTO_INCREMENT,
    fecha VARCHAR(10) DEFAULT NULL,
    nivelazucar1 INT(3) DEFAULT NULL,
    medicamento1 VARCHAR(24) DEFAULT NULL,
    nivelazucar2 INT(3) DEFAULT NULL,
    medicamento2 VARCHAR(24) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE glucosa;

INSERT INTO glucosa (fecha, nivelazucar1, medicamento1, nivelazucar2, medicamento2) 
VALUES 
    ("20/06/23", 120, "glidara", 100, "glidara"),
    ("21/06/23", 125, "glidara", 110, "glidara");
