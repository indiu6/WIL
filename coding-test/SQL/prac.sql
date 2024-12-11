-- 1. Customers 테이블
-- CustomerID	CustomerName
-- 1	Alice
-- 2	Bob
-- 3	Charlie

-- 2. Orders 테이블
-- OrderID	CustomerID	OrderDate	Amount
-- 101	1	2024-01-01	500
-- 102	1	2024-01-10	300
-- 103	2	2024-01-05	200
-- 104	3	2024-01-15	400
-- 105	1	2024-01-20	100


SELECT CustomerName, COUNT(Orders.OrderID) AS OrderCount,
    SUM(Orders.Amount) AS TotalAmount
FROM Customers
LEFT JOIN Orders
ON Customers.CustomerID = Orders.CustomerID
GROUP BY Customers.CustomerName;