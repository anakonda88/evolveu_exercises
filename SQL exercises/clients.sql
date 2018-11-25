create table clients(
	client_id integer NOT NULL PRIMARY KEY unique,
	name text,
	email text,
	city text,
  birth_year integer);

insert into clients (client_id, name, email, city, birth_year) values(1,'Carri Cordon','carri@cordon.com','Calgary',1980);
insert into clients (client_id, name, email, city, birth_year) values(2,'Caren Alsop','caren@mail.com','Balzac',1990);
insert into clients (client_id, name, email, city, birth_year) values(3,'Sierra Sandoval','sierra.sandolal@outlook.com','Airdrie',1980);
insert into clients (client_id, name, email, city, birth_year) values(4,'Delcie Montalvan','delcie.montalvan@gmail.com','Langdon',1990);
insert into clients (client_id, name, email, city, birth_year) values(5,'Geri Gallant','geri.g@yahoo.com','Okotoks',1991);
insert into clients (client_id, name, email, city, birth_year) values(6,'Lavera Platter','lp@my.com','Okotoks',1992);
insert into clients (client_id, name, email, city, birth_year) values(7,'Soila Cozad','soila.cozad@hotmail.com','Okotoks',1980);
insert into clients (client_id, name, email, city, birth_year) values(8,'Valeri Miranda','valeri@mymail.com','Okotoks',1990);
insert into clients (client_id, name, email, city, birth_year) values(9,'Samira Harlin','samira123@gmail.com','Calgary',1980);
insert into clients (client_id, name, email, city, birth_year) values(10,'Leone Elwell','leone234@gmail.com','Calgary',1990);
insert into clients (client_id, name, email, city, birth_year) values(11,'Marylee Shoener','m.shoener@mail.com','Calgary',1991);
insert into clients (client_id, name, email, city, birth_year) values(12,'Annalisa Jansen','aj@jansen.com','Calgary',1992);
insert into clients (client_id, name, email, city, birth_year) values(13,'Dorathy Koprowski','d.kopowski@what.ca','Balzac',1980);
insert into clients (client_id, name, email, city, birth_year) values(14,'Denese Askew','da345@yourmail.ca','Airdrie',1990);
insert into clients (client_id, name, email, city, birth_year) values(15,'Larraine Primrose','lprimrose@email.ca','Langdon',1980);
insert into clients (client_id, name, email, city, birth_year) values(16,'Cassie Close','cassie@gmail.ca','Balzac',1990);
insert into clients (client_id, name, email, city, birth_year) values(17,'Sherrie Iraheta','sherrie@mail.com','Airdrie',1991);
insert into clients (client_id, name, email, city, birth_year) values(18,'Alicia Baskin','alicia@where.ca','Langdon',1992);
insert into clients (client_id, name, email, city, birth_year) values(19,'Jeramy Beeler','jerramy@here.ca','Balzac',1981);
insert into clients (client_id, name, email, city, birth_year) values(20,'Clarissa Petterson','cp@petterson.com','Airdrie',1991);

--  Who was born after 1980?
SELECT * FROM clients
WHERE birth_year>1980;

--  Who was born between 1970 and 1990?
SELECT * FROM clients
WHERE birth_year BETWEEN 1970 AND 1990;

--  Who is from Balzac?
SELECT * FROM clients
WHERE CITY='Balzac';

--  Who is from Balzac born after 1990?
SELECT * FROM clients
WHERE birth_year>1980 AND CITY='Balzac';

--JOINS
create table credits (
	id integer NOT NULL PRIMARY KEY unique,
	client_id integer,
	month	text,
  credits integer);

insert into credits (id, client_id, month, credits) values(1,1,'2018-07',50);
insert into credits (id, client_id, month, credits) values(2,1,'2018-08',30);
insert into credits (id, client_id, month, credits) values(3,1,'2018-09',20);
insert into credits (id, client_id, month, credits) values(4,2,'2018-07',22);
insert into credits (id, client_id, month, credits) values(5,2,'2018-08',33);
insert into credits (id, client_id, month, credits) values(6,2,'2018-09',55);
insert into credits (id, client_id, month, credits) values(7,3,'2018-07',15);
insert into credits (id, client_id, month, credits) values(8,3,'2018-08',98);
insert into credits (id, client_id, month, credits) values(9,3,'2018-09',32);
insert into credits (id, client_id, month, credits) values(10,4,'2018-07',50);
insert into credits (id, client_id, month, credits) values(11,4,'2018-08',34);
insert into credits (id, client_id, month, credits) values(12,4,'2018-09',44);
insert into credits (id, client_id, month, credits) values(13,5,'2018-07',73);
insert into credits (id, client_id, month, credits) values(14,5,'2018-08',21);
insert into credits (id, client_id, month, credits) values(15,5,'2018-09',43);
insert into credits (id, client_id, month, credits) values(16,6,'2018-07',29);
insert into credits (id, client_id, month, credits) values(17,6,'2018-08',28);
insert into credits (id, client_id, month, credits) values(18,6,'2018-09',26);
insert into credits (id, client_id, month, credits) values(19,7,'2018-07',12);
insert into credits (id, client_id, month, credits) values(20,7,'2018-08',44);
insert into credits (id, client_id, month, credits) values(21,7,'2018-09',65);
insert into credits (id, client_id, month, credits) values(22,8,'2018-07',33);
insert into credits (id, client_id, month, credits) values(23,8,'2018-08',22);
insert into credits (id, client_id, month, credits) values(24,8,'2018-09',21);
insert into credits (id, client_id, month, credits) values(25,118,'2018-07',33);
insert into credits (id, client_id, month, credits) values(26,118,'2018-08',22);
insert into credits (id, client_id, month, credits) values(27,118,'2018-09',21);

--  Show all the credits for client 1
SELECT
  client_id,
  credits
FROM
  credits
WHERE
  client_id=1;

--  Show the name
SELECT
  Name
FROM
  clients
WHERE
  client_id=1;

-- Show all the clients that do not have credits
SELECT
  client_id,
  credits
FROM
  credits
WHERE
  credits IS NULL;
