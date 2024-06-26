---
id: ADDPM-001
title: Add Process Model from Catalogue
sidebar_label: Add Process Model
slug: /ADDPM001
---
## Procedure Guideline  
___

### Navigate to Customer Catalogue  

1. Click the **Customer** option on the Main Navigation menu.  

2. Then click **Customer Catalogue** in the drop-down menu.  
	
![](../static/img/docs/PM-001/image01.png)  

3. The system will open a screen titled **"Maintain Customer Catalogue".**  
This screen lists all of the Products that have been captured in the system.  

_For more detailed information on using this function, view the procedure titled **[Product Catalogue (Product Costing Process)](https://sense-i.co/docs/PCPCAT)**_ 

### Product Search  

1. To search for the Product for which you want to create a Process Model, **enter information** to search for the specific product in the **Search Criteria Panel**.  

2. Click the **Search** button on the form Action Bar.  
	
![](../static/img/docs/PM-001/image02.png)  

3. The system will display a list of all Products that match the Search Criteria you have entered.  

4. Click on the row that displays the name of the Product for which you wish to create a Process Model.  

### Create Process Model  

1. Click the **Process Model** button on the Action Bar.  	

![](../static/img/docs/PM-001/image03.png)  

2. If no Process Model has been previously defined for the selected Product, the system will display a screen titled **Process Model - No Record**.  

![](../static/img/docs/PM-001/image04.png)  

:::note  
The Process Model screen consists of a form header, with the **Outputs** side-TAB, and set of **8 tabbed worksheets**.  

All data fields (and TABs) on this form are greyed out, and will only become accessible once a new process Model is created.  
:::  

3. Click the **Add** button on the Action bar to create a new Process Model.  
The data fields **Model Type** and **Process Model Name** now become accessible.

![](../static/img/docs/PM-001/image06.png)  

4. Click the drop-down arrow in the field under **Model Type** to select the desired option.  

5. You need to define the **Model Type** for the Process Model by selecting one of the options:
    -   Template
    -   Stand alone Instance  
    -   Blueprint  


6. Enter the Process Model Name in the data field under **Process Model Name**.    

:::important Model Type Options Described  
**Template Model**:  
A template process model serves as a standardized framework for a category or group of similar products. It captures common elements and workflows shared among multiple items, allowing for efficient replication and adaptation.  

**Stand alone Instance**:  
A stand-alone process model is tailored specifically to a single product or item within the inventory. It provides detailed instructions and workflows for the manufacturing process of that particular item.  

**Blueprint Model:**  
A blueprint process model provides a high-level overview of the manufacturing process, focusing on the general steps and components required for production. It outlines the essential elements and resources needed to manufacture a wide range of products.  
:::  

### Profile Information  

1. The **Profile** TAB worksheet displays general information about a Process Model, such as the **Department** that is responsible for running the Process and its Name in the **Item Type Name** field.  

![](../static/img/docs/PM-001/image07.png)  

Whenever you enter the Process Model module from the Product Catalogue, the system will automatically display the **Department** managing the process, **Item Type Name**,  assign the **Default Duration UOM _(Unit Of Measure)_**, and display the product **Item Name**.  

2. If you need to enter a description or notes, you can type these in directly in the **Description** and **Notes** fields.  

3. Once you have completed the **Profile** section, click the **Save** button on the Action bar.  

![](../static/img/docs/PM-001/image08.png)  

:::note  
Once saved, a sequential **Process Model No** is generated, the Product **Item Code**, **Model Status**, **Output Status** and Product **Dimensions** are displayed,  

![](../static/img/docs/PM-001/image09.png)  
:::  

4.  Click the **Outputs** side-TAB to reveal the Product **Item Code** & **Item Name**.

![](../static/img/docs/PM-001/image10.png)  

The other TABs will be accessible, enabling you to define specific information needed to calculate the **Cost of the Product** and to plan **Labour and Materials requirements** once Orders are received from Customers.  

![](../static/img/docs/PM-001/image11.png)  

:::  

5.  You will then need to enter information about the **Materials Required** on the **Inputs** screen, the Tasks that need to be performed when running the Process on the **Tasks** screen, and the Parts which make up the Product in the **Part List** screen.  

Please refer to the other documents in the Product Costing Process section for information on how to enter this information.  

-   **[Process Model Inputs](https://sense-i.co/docs/PMINPT001)**  
-   **[Process Model Tasks](https://sense-i.co/docs/PMTSK001)**  
-   **[Parts List](https://sense-i.co/docs/PRTLST001)** 

**This is the end of this procedure.**
