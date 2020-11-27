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
        {"Product / Service Costing": ["XXX-000"]},
        {"Sales Quote & Order Entry": ["SQO-001", "SAF-1202", "SAF-441", "SAF-502", "SAF-154", "SAF-1204"]},
        {"Internal Order Management": ["XXX-000"]},
        {"Production Control": ["XXX-000"]},		
        {"Material Cost Control": ["XXX-000"]},
        {"Labour Cost Control": ["XXX-000"]},
        {"Product Quality Management": ["XXX-000"]},
        {"Inventory Management": ["XXX-000"]},
        {"Retail Management": ["XXX-000"]},		
        {"Delivery Management": ["XXX-000"]},
        {"Site Item Management": ["XXX-000"]},
        {"Sales Delivery": ["XXX-000"]},		
      ],
      "Financial Management": [
        {"Accounts Payable": ["SAF-720", "SAF-1203", "SAF-4001", "SAF-4050", "SAF-4053", "SAF-149", "SAF-4030", "SAF-4054", "SAF-4056", "SAF-4057", "SAF-4058"]},
        {"Accounts Receivable": ["SAF-4041"]},
        {"Employee Payroll": ["XXX-000"]},		
        {"Cashbook Management": ["XXX-000"]},
        {"Cash Flow Management": ["XXX-000"]},
        {"Fixed Asset Management": ["XXX-000"]},
        {"Lease & Loan Management": ["XXX-000"]},
        {"Share Capital Management": ["XXX-000"]},		
        {"General Ledger & Financial": ["XXX-000"]},		
      ],
      "Performance Management": [
        {"Budget Planning": ["XXX-000"]},
        {"Performance Reporting": ["XXX-000"]},
        {"Incentive Management": ["XXX-000"]},		
      ],
    }],
    "Reference Detail": ["SCL-000", "SAF-1218"],	
  },
};
