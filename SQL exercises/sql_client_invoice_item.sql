DROP TABLE Invoice;
DROP TABLE Client CASCADE;
DROP TABLE Item CASCADE;


CREATE TABLE Client(
    ID SERIAL PRIMARY KEY NOT NULL,
    Name VARCHAR NOT NULL
);


CREATE TABLE Item(
    ID SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR NOT NULL,
    price real NOT NULL
);

CREATE TABLE Invoice(
    ID INT NOT NULL,
    Date DATE NOT NULL,
    Client_ID INT NOT NULL REFERENCES Client(ID),
    Item_ID INT NOT NULL REFERENCES Item(ID),
    Qty INT NOT NULL,
    Location VARCHAR(2) NOT NULL
);

-- Fill Client Table
insert into client(Name)  values ('Ana' );
insert into client(Name)  values ('Ros ');
insert into client(Name)  values ('Lemi ');
insert into client(Name)  values ('Eric ');
insert into client(Name)  values ('Anish');
insert into client(Name)  values ('Ray');
insert into client(Name)  values ('Zach');
insert into client(Name)  values ('Ryker');

--Fill Item Table
INSERT INTO item (Name, Price) VALUES ('Pencil', 25);
INSERT INTO item (Name, Price) VALUES ('Blackboards', 100);
INSERT INTO item (Name, Price) VALUES ('Books', 35);
INSERT INTO item (Name, Price) VALUES ('Vase', 15);
INSERT INTO item (Name, Price) VALUES ('Markers', 12);
INSERT INTO item (Name, Price) VALUES ('Notebooks', 25);


--Fill Invoice table

INSERT INTO invoice (ID, Client_ID , Item_ID, Date, Location, Qty) VALUES (1, 1, 1,  DATE '2018-11-15', 'AB', 12);
INSERT INTO invoice (ID, Client_ID , Item_ID, Date, Location, Qty) VALUES (1, 1, 5,  DATE '2018-11-15', 'AB', 10);
INSERT INTO invoice (ID, Client_ID , Item_ID, Date, Location, Qty) VALUES (1, 1, 1,  DATE '2018-11-15', 'AB', 6);
INSERT INTO invoice (ID, Client_ID , Item_ID, Date, Location, Qty) VALUES (2, 1, 6,  DATE '2018-11-18', 'BC', 3);
INSERT INTO invoice (ID, Client_ID , Item_ID, Date, Location, Qty) VALUES (3, 2, 2,  DATE '2018-11-19', 'BC', 10);
INSERT INTO invoice (ID, Client_ID , Item_ID, Date, Location, Qty) VALUES (4, 4, 6,  DATE '2018-11-18', 'BC', 3);
INSERT INTO invoice (ID, Client_ID , Item_ID, Date, Location, Qty) VALUES (5, 5, 2,  DATE '2018-11-19', 'BC', 10);
INSERT INTO invoice (ID, Client_ID , Item_ID, Date, Location, Qty) VALUES (6, 6, 4,  DATE '2018-11-20', 'AB', 20);
INSERT INTO invoice (ID, Client_ID , Item_ID, Date, Location, Qty) VALUES (7, 7, 4,  DATE '2018-11-21', 'BC', 35);


--Queries... copy and paste in psql
-- Total per Client
SELECT
  cli.name,
  sum(inv.Qty * ite.price * 1.05 ) total
FROM
  Client cli,
  Item ite,
  Invoice inv
WHERE
  cli.ID = inv.Client_ID and
  ite.ID = inv.Item_ID
GROUP BY
  cli.Name
ORDER BY
  total DESC;

-- Total per Location
SELECT
  inv.location,
  sum(inv.Qty * ite.price * 1.05 ) total
FROM
  Item ite,
  Invoice inv
WHERE
  ite.ID = inv.Item_ID
GROUP BY
  inv.Location
ORDER BY
  total DESC;

-- Total by Date
SELECT
  inv.date,
  sum(inv.Qty * ite.price * 1.05 ) total
FROM
  Item ite,
  Invoice inv
WHERE
  ite.ID = inv.Item_ID
GROUP BY
  inv.Date
ORDER BY
  total ASC;

--Quantity by Item
SELECT
  ite.name,
  sum(inv.qty) total
FROM
  Item ite,
  Invoice inv
WHERE
  ite.ID = inv.Item_ID
GROUP BY
  ite.name
ORDER BY
  name;

-- All items per client
SELECT
  cli.name,
  sum(inv.qty) total,
  ite.name
FROM
  Client cli,
  Item ite,
  Invoice inv
WHERE
  cli.ID = inv.Client_ID and
  ite.ID = inv.Item_ID
GROUP BY
  cli.Name,
  ite.Name
ORDER BY
  cli.name ASC;
