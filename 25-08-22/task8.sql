-- USE sales_db;
-- SELECT * FROM salespeople;
-- SELECT * FROM customers;
--  SELECT * FROM orders;

--1)Write a query that uses a subquery to obtain all orders for the customer named Cisneros. Assume
--you do not know his customer number (cnum).
--SELECT onum FROM orders WHERE orders.cnum=(SELECT cnum FROM customers WHERE cname='Cisneros');

--2)Write a query that produces the names and ratings of all customers who have above- average
--orders.
-- SELECT cname,rating FROM customers WHERE cnum IN(SELECT cnum FROM orders where amt > (SELECT avg(amt) FROM orders));
