# Write your MySQL query statement below
(select Users.name, sum(Transactions.amount) as balance from Users Users join Transactions Transactions on Transactions.account=Users.account
group by Transactions.account 
having balance>10000);