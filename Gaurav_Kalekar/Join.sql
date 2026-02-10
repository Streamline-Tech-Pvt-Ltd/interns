#Top 10 purchase by customer
#particular
SELECT 
    c.customerNumber,
    c.customerName,
    p.amount
FROM customers c
JOIN payments p
    ON c.customerNumber = p.customerNumber
ORDER BY 
    p.amount DESC
LIMIT 10;

#Total 
SELECT 
    c.customerNumber,
    c.customerName,
    SUM(p.amount) AS total_purchase
FROM customers c
JOIN payments p
    ON c.customerNumber = p.customerNumber
GROUP BY 
    c.customerNumber,
    c.customerName
ORDER BY 
    total_purchase DESC
LIMIT 10;

#Customers with Their Orders
SELECT 
    c.customerNumber,
    c.customerName,
    o.orderNumber,
    o.orderDate,
    o.status
FROM customers c
JOIN orders o
ON c.customerNumber = o.customerNumber;

#Customers with Payments
SELECT 
    c.customerNumber,
    c.customerName,
    p.paymentDate,
    p.amount
FROM customers c
JOIN payments p
ON c.customerNumber = p.customerNumber;

#Orders with Customer Name
SELECT 
    o.orderNumber,
    c.customerName,
    o.orderDate,
    o.status
FROM orders o
JOIN customers c
ON o.customerNumber = c.customerNumber;

#Orders with Order Details (Products Ordered)
SELECT 
    o.orderNumber,
    od.productCode,
    od.quantityOrdered,
    od.priceEach
FROM orders o
JOIN orderdetails od
ON o.orderNumber = od.orderNumber;

#Full Order Information
SELECT 
    c.customerName,
    o.orderNumber,
    p.productName,
    od.quantityOrdered,
    od.priceEach
FROM customers c
JOIN orders o
    ON c.customerNumber = o.customerNumber
JOIN orderdetails od
    ON o.orderNumber = od.orderNumber
JOIN products p
    ON od.productCode = p.productCode;

#Top 10 Customers by Sales
SELECT 
    c.customerName,
    SUM(od.quantityOrdered * od.priceEach) AS total_sales
FROM customers c
JOIN orders o
    ON c.customerNumber = o.customerNumber
JOIN orderdetails od
    ON o.orderNumber = od.orderNumber
GROUP BY c.customerName
ORDER BY total_sales DESC
LIMIT 10;

