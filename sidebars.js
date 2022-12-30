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
	"Install your System": ["DOWNLOAD", 
							"LAUNCH",
							"INSTCONF"], 
	"Working with Sense-i Software": ["SUI-001", 
							"SUI-002", 
							"USS-004", 
							{
								"SEMS List Information": ["LST-001",
									"LST-002",
									"LST-003",						
									"LST-004",					
									"LST-005"]
							},
							"USS-005"],
	"System Setup & Configuration": ["CNF-002"],	
	"Business Processes": [{
		"Sales Quote & Order Process": ["SQO-001",
				{
					"Sales Quote & Order Entry": ["SAF-1202",
						"SAF-441",
						"SAF-502",						
						"SAF-154",						
						"SAF-156",						
						"SAF-158",
						"DIM-001"]
				},
			],		
		"Operations Management": ["OPMO-001",
				{
					"Internal Order Management": ["IOM-000",
						"INO-001",
						"INO-002",
						"SAF-163",
						"SAF-161"]
				},
				{
					"Replenishment Module": ["REP-001",
						"REP-002",
						"REP-003",						
						"MRP-001"]
				},
				{
					"Production Planning & Scheduling": ["PPS-000",
					"SAF-770",
					"SAF-771",						
					"SAF-774",						
					"SMS-001"]
				},
				{
					"Purchases Transaction Stream": ["SAF-720",
						"SAF-1203",
						"SAF-442",
						"SAF-148",
						"MPO-004",
						"SAF-149",
						"MAT-002",
						"MAT-006",
						"REP-003"]
				},
				{
					"Material Planning & Purchasing": ["MPP-000"]
				},
				{
					"Material Issuing Control": ["MAT-003",
						"MAT-004",
						"MAT-005",
						"MAT-006",
						"MAT-007"]
				},
				{
					"Labour Cost Control": ["LCC-000"]
				},
				{
					"Labour Cost - Time & Attendance": ["TAA-001",
						"TAA-003",
						"TAA-004",
						"TAA-005",
						"TAA-006",
						"TAA-007",
						"TAA-009",
						"TAA-010"]
				},
				{
					"Task Management Module": ["TM-01",
						"TM-04",
						"TM-05",
						"TM-06"]
				},
				{
					"Process Order Complete": ["PMD-001",
						"FGC-002"]
				},
				{
					"Sales Delivery Process": ["SAF-156",						
						"SAF-156",
						"DIM-001"]
				},
			],
			"Financial Management": ["FMO-001",
				{
					"Accounts Payable": ["FMAP-001",
						"SAF-720",
						"SAF-1203",
						"SAF-149",
						"SAF-152",
						"SAF-153",
						"SAF-4050",
						"SAF-4053",
						"SAF-4051",
						"SAF-4030",
						"SAF-4014",
						"SAF-4054",
						"SAF-4056",
						"SAF-4057",
						"SAF-4058"]
				},
				{
					"Accounts Receivable": ["FMAR-001",
						"SAF-710",
						"SAF-1202",
						"SAF-4040",
						"SAF-4043",
						"SAF-4041CL",
						"SAF-4010",
						"SAF-4041CS"]
				},
				{
					"Cashbook Management": ["SAF-4001",
						"SAF-4061",
						"SAF-4015",
						"SAF-4005"]
				},
				{
					"General Ledger & Financial Reporting": ["FMGL-001",
						"SAF-1900",
						"SAF-1911A",
						"SAF-1911",
						"SAF-1912",
						"SAF-4065",
						"SAF-1916A",
						"SAF-1916",
						"SAF-1916B",
						"SAF-1916C",
						"SAF-4068",
						"SAF-4067",
						"FNS-9999",
						"SAF-1912A"]
				},
			],
	}],
    "Additional Features & Modules": ["SAF-1218",
						"CRT-001",
	{
		"Rating & Review System": ["RRS-000",
			"RRS-001",
			"RRS-002"]
	},
],
	},
};
