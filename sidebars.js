/*
  This represents the tree structure of the sidebar for the documentation
  section of the website.
  Note that branches only display on the website if they have child documents 
  (i.e. leaf nodes). While we finish populating the full tree with actual 
  documents, I have created a template document (doc ID: XXX-000) to be used 
  as a placeholder for branches awaiting child documents.
*/
module.exports = {
  docs: {
    "Introduction to Sense-i": ["INT-001"],
    "Level of Work": [{
      "Executive Management": ["XXX-000"],
      "Admin Management": ["XXX-000"],	
      "Team Leader": ["XXX-000"],	  
	"Operator Level": ["XXX-000"]},  		
      ],
    "Business Processes": [{
      "Operations Management": [
        {"Product / Service Costing Process": ["XXX-000"]},
        {"Sales Quote & Order Entry": ["SQO-101", "CUP-004", "PRC-008", "SOE-002", "SOE-006", "EMP-001"]},
        {"Internal Order Management Process": ["XXX-000"]},
        {"Production Control": ["XXX-000"]},		
        {"Material Cost Control": ["XXX-000"]},
        {"Labour Cost Control": ["XXX-000"]},
        {"Product Quality Management Process": ["XXX-000"]},
        {"Inventory Management Process": ["XXX-000"]},
        {"Retail Management Process": ["XXX-000"]},		
        {"Delivery Management Process": ["XXX-000"]},
        {"Site Item Management Process": ["XXX-000"]},
        {"Sales Delivery Process": ["XXX-000"]},		
      ],
      "Financial Management": [
        {"Accounts Payable Process": ["MAS-002", "MAS-003", "ACP-004", "ACP-007"]},
        {"Accounts Receivable Process": ["XXX-000"]},
        {"Employee Payroll Process": ["XXX-000"]},		
        {"Cashbook Management Process": ["XXX-000"]},
        {"Cash Flow Management Process": ["XXX-000"]},
        {"Fixed Asset Management Process": ["XXX-000"]},
        {"Lease and Loan Management Process": ["XXX-000"]},
        {"Share Capital Management Process": ["XXX-000"]},		
        {"General Ledger & Financial Reporting Process": ["XXX-000"]},		
      ],
      "Performance Management": [
        {"Budget Planning": ["XXX-000"]},
        {"Performance Reporting": ["XXX-000"]},
        {"Incentive Management": ["XXX-000"]},		
      ],
    }],
    "Reference Detail": ["SCL-000", "CRM-007"],	
  },
};
