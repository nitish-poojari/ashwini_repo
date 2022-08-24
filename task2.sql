--CREATE DATABASE product_db;
--use product_db;

-- CREATE TABLE categories(
--     id integer primary key,
--     title varchar(30),
--     description varchar(40)
-- );

-- CREATE TABLE products(
--     id integer primary key,
--     title varchar(30),
--     price int,
--     description varchar(40),
--     category int,
--     company varchar(30),
--     FOREIGN KEY(category)REFERENCES categories(id)
--  );

-- CREATE TABLE orders(
--     id integer primary key,
--     total int,
--     date DATE
--  );

-- CREATE TABLE order_details(
--     id integer primary key,
--     orderid int,
--     productid int,
--     quantity int,
--     price int,
--     totalprice int,
--     discount int
--     FOREIGN KEY(orderid)REFERENCES orders(id),
--     FOREIGN KEY(productid)REFERENCES products(id)

--  );

--insert into categories VALUES('1','abc','abcdef');
--insert into products VALUES('1','xyz','20','qwertr','1','emtec');
--insert into orders VALUES('1','3','2022-08-22');
--insert into order_details VALUES('1','1','1','3','40','30','10');

-- select * from categories;
-- select * from products;
-- select * from orders;
-- select * from order_details;