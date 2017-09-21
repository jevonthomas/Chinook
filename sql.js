// Task 6 Provide a query that shows the invoices associated with each sales agent. The resultant table should include the Sales Agent's full name.

// SELECT Employee.firstName, Employee.lastName, Invoice.InvoiceId 
// FROM Employee JOIN Customer ON Customer.SupportRepId = Employee.EmployeeId 
// JOIN Invoice ON Invoice.CustomerId = Customer.CustomerId 
// WHERE Employee.EmployeeId = Customer.SupportRepId

// 7. Provide a query that shows the Invoice Total, Customer name, Country and Sale Agent name for all invoices and customers.

// SELECT Invoice.Total as "Invoice Total", Customer.FirstName as "Customer First Name", Customer.LastName as "Customer Last Name", Customer.Country, Employee.FirstName as "Employee First Name", Employee.LastName as "Employee Last Name" 
// FROM Invoice
// JOIN Customer ON Customer.CustomerId = Invoice.CustomerId
// JOIN Employee ON Employee.EmployeeId = Customer.SupportRepId
// ORDER by Employee.LastName

// 8. How many Invoices were there in 2009 and 2011? What are the respective total sales for each of those years?

// SELECT SUM(Total) AS Total, Count(InvoiceDate) as "No. of Invoices", InvoiceDate AS Year FROM Invoice 
// WHERE Invoice.InvoiceDate LIKE "2011%" OR Invoice.InvoiceDate LIKE "2009%"
// GROUP BY Invoice.InvoiceDate LIKE "2009%", Invoice.InvoiceDate LIKE "2011%"

// 9. Looking at the InvoiceLine table, provide a query that COUNTs the number of line items for Invoice ID 37.

// SELECT COUNT(InvoiceId) as Count, InvoiceId FROM InvoiceLine WHERE InvoiceLine.InvoiceId = 37