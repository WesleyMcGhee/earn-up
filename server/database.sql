CREATE DATABASE earnup;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    password(255)
);

CREATE TABLE invoice (
    id SERIAL PRIMARY KEY,
    compname VARCHAR(255),
    amount INT,
    caldate date,
    userid INT
);

CREATE TABLE writeoff (
    id SERIAL PRIMARY KEY,
    item VARCHAR(255),
    amount INT,
    caldate date,
    userid INT
);

ALTER TABLE "invoice" ADD CONSTRAINT "invoice_fk0" FOREIGN KEY ("userid") REFERENCES "users"("id");
ALTER TABLE "writeoff" ADD CONSTRAINT "writeoff_fk0" FOREIGN KEY ("userid") REFERENCES "users"("id");