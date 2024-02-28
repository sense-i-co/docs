---
id: CNFE-002
title: Configure Outgoing Email Settings
sidebar_label: Outgoing Email Settings
slug: /CNFE002
---
## Introduction  

This **step-by-step guide** will show you **how to Define and Configure** the **Outgoing Email Settings** for your **Company** and **Employees** within the **SEMS** application.  

The task of setting up **Company Email Settings** is typically done by the SEMS System Administrator in your Organisation.  

Outgoing Email Setup in the SEMS application is important for the following reasons:  
-  Company Profile / Outgoing Email configuration is required for the SEMS Application to automatically issue One-Time-Pins (OTP) _("Forgot Password" & related Login / System accessibility issues)_.  

-  Enables Employee Representatives to send Reports and Transaction documents directly to a Customer or Supplier from within the SEMS application.  

## Company Profile  

1.  Navigate to the **Company Profile** screen in the SEMS system.  

:::important  
Refer to the document titled **["Company Profile & Settings"](https://sense-i.co/docs/CMP001)**.  
:::	

### Email settings - Outgoing  

1.  Click the **Email Settings** TAB to access the sheet with **Outgoing Mail** settings fields.  

![](../static/img/docs/CNF-001/image04.png)  

The primary and alternate email addresses will be displayed in the **Email** fields, as captured previously - Refer to the document titled **["Capture Email Addresses (Part 1)"](https://sense-i.co/docs/CNFE001)**.  

:::important  
Email configuration details will be required for the next steps in the process, and can be obtained from your **Email Service Provider**.  
:::  

:::warning Gmail Mail Server Hosting  
If your Company and/or Employees use Google as the Mail Service Hosting Provider, refer to the document titled **["Gmail Mail Server Hosting"](https://sense-i.co/docs/GMAIL2STEP)**.  
:::  

2.  Click on the **Mail Host** field (under the _Outgoing Mail_ section), and enter the Email Host information.  

3.  Click on the **Mail Port** field and enter the email port number.  

4.  Click the drop-down arrow in the **Connection Type** field, and then select the relevant Connection Protocol option from the list.  

![](../static/img/docs/CNF-001/image26.png)  

5.  Click on the **Password** field to enter the associated password for the email account.  

6.  Repeat the steps above to enter the details in the fields under the **Outgoing Alternative Mail** section.  

7.  Once you have entered the necessary and available information, you should click the **Save** button on the form Action Bar.  

8.  The **Test Email** button now becomes accessible.  

### Test Email  

1. To test that the outgoing email settings have been correctly captured, click the **Test Mail** icon on the form Action Bar.  

2.  The program will display the Email window.  

![](../static/img/docs/CNF-001/image07.png)  

3.  Click the drop-down arrow in the **Email From** field.  Then select the _Primary_ outgoing email address option.  

4. Type in the email address you would like to send to in the **To** field.  

5. You can add additional email addresses as required in either the **To** or _Copy_ **(CC)** fields.  

6. The program will automatically populate the **Subject** line with _"Test Email"_.  Alter this if needed.

7. You can add any text for the email you are sending in the **Comment** field.  

8. And you can add any addition attachments to the email by clicking the ![](../static/img/docs/button/but-attach.png) button at the top of the form.  

9. When you have completed your email, click the ![](../static/img/docs/button/but-send2.png) button at the top of the form.  

![](../static/img/docs/CNF-001/image08.png)  

The **Information** dialog will display **"email was sent successfully!"**.  

10. Click **[ Ok ]** to continue.

11. Repeat the above steps to test the _Alternate Outgoing Email_ address.  

![](../static/img/docs/CNF-001/image09.png)  

12. To close the Email screen, click the **X** icon button at the top-right of the screen.  

The system will close this screen and return you to the Company Profile screen.  

13.  Once you have entered the necessary information, you should click on the **Save** button on the form Action Bar to save this information to the database.  

14.  To Activate the Company Profile, select the **Name & Details** TAB, then click on the **Activate** button.  

___

## Employee Profile  

<!-- The Setup and Configuration of Employee Outgoing Emails in the SEMS application is of significant importance, especially for those Employees that are **Company Representatives** and those Employees  in the Accounts / Finance departments.  

The information captured in this process will be enable Employess to email Transactional documents and Reports, including **Customer documents** such as Sales Quotes, Sales Orders and Sales Invoices, as well as those documents pertaining to **Suppliers** such as Purchase Orders & Supplier Claim Forms from within the SEMS application.   -->

:::important  
Employee **Primary Email** and **Alternate Email** addresses are captured in the **Name & Details** TAB sheet, under the **Contact** section - Refer to the document titled **["Capture Email Addresses (Part 1)"](https://sense-i.co/docs/CNFE001)**.  
:::	 

### SEMS Logon User Code  

:::important  
This procedure is relevant where the Employee will be sending emails using the SEMS system.  

Typically this would include **Company Representatives** and employees in the **Finance / Accounts departments** that will use the **Outgoing Email** function to send Reports and/or Transaction documents to Customers / Suppliers.  

The SEMS System Administrator must first add the Employee to the **Login User** list.  

Refer to the document titled **[Add SEMS Users](https://sense-i.co/docs/CNF003)**.  
:::  

1.  Click the **Employment** TAB.  

![](../static/img/docs/CNF-001/image14.png)  

The Employment worksheet is displayed.  

2.  Click on the three-dot button in the **SEMS Logon User Code** field.  

The **Select Logon User** screen is displayed.  

![](../static/img/docs/CNF-001/image15.png)  

3.  Click on the relevant record row, and then click the **Select** button on the list Action Bar.  

The system will return to the Employee Profile screen.  

:::note  
The **Outgoing Mail** and **Outgoing Alternative Mail** sections now become available and accessible.  

![](../static/img/docs/CNF-001/image16.png)  
:::  

### Employee Email settings - Outgoing  

The primary and alternate email addresses will be displayed in the **Email** fields, as captured previously in the **Name & Details** TAB.  

![](../static/img/docs/CNF-001/image18.png)  

:::important  
Email configuration details will be required for the next steps in the process, and can be obtained from your **Email Service Provider**.  
:::  

1.  Click on the **Mail Host** field (under the _Outgoing Mail_ section), and enter the email host information.  

![](../static/img/docs/CNF-001/image17.png)  

2.  Click on the **Mail Port** field and enter the email port number.  

3.  Click the drop-down arrow in the **Connection Type** field, and then select the relevant Connection Protocol option from the list.  

![](../static/img/docs/CNF-001/image05.png)  

4.  Repeat the steps above to enter the details in the fields under the **Outgoing Alternative Mail** section.  

![](../static/img/docs/CNF-001/image19.png)  

5.  Once you have entered the necessary information, you should click on the **Save** button on the form Action Bar to save this information to the database.  

6.  To Activate the Employee Profile, select the **Name & Details** TAB, then click on the **Activate** button.  
___

## SEMS Log in & Email Password  

Once the Email settings have been captured, the next step would be for the **Employee / SEMS User** to Log in to the SEMS application.  

Then the **Employee / SEMS User** will be able to set his/her Email password and **test** the outgoing Email function.   

### Employee SEMS Log in  

:::important  
Refer to the document titled **[Log in & Maintain Password](https://sense-i.co/docs/SUI001)**.  
:::  

1.  Log in to the SEMS application with **SEMS Logon User Code** as received from the SEMS System Administrator.  

:::warning Gmail Mail Server Hosting  
If Google / Gmail is used as the Mail Service Hosting Provider, refer to the document titled **["Gmail Mail Server Hosting"](https://sense-i.co/docs/GMAIL2STEP)**.  
:::  

### Enter Email Password  

1.  Click the **Tools** button on the Main Navigation bar.  

2.  Then click **Email Settings** in the drop-down menu.  

![](../static/img/docs/CNF-001/image20.png)  

The **Email Settings** screen is displayed, with the **Email** address, **Mail Host**, **Mail Port** and **Connection Type** fields populated with the information as previously entered by the SEMS System Administrator. 

![](../static/img/docs/CNF-001/image21.png)  

3.  Click on the **Password** field under the Outgoing Mail section.  

4.  Enter the Password for the Email Account as received from your Email Service Provider.  

5.  Repeat the steps above to enter the password under the **Outgoing Alternative Mail** section.  

6.  Click the **Save** button on the Action Bar.  

7.  The **Test Mail** button now becomes accessible.  

### Test Outgoing Email  

1. To test that the outgoing email settings have been correctly captured, click the **Test Mail** icon on the Action Bar.  

2.  The program will display the Email window.  

![](../static/img/docs/CNF-001/image07.png)  

3.  Click the drop-down arrow in the **Email From** field.  Then select the _Primary_ outgoing email address option.  

![](../static/img/docs/CNF-001/image22.png)  

4. Type in the email address you would like to send to in the **To** field.  

5. You can add additional email addresses as required in either the **To** or _Copy_ **(CC)** fields.  

6. The program will automatically populate the **Subject** line with _"Test Email"_.  Alter this if needed.

7. You can add any text for the email you are sending in the **Comment** field.  

8. And you can add any addition attachments to the email by clicking the ![](../static/img/docs/button/but-attach.png) button at the top of the form.  

9. When you have completed your email, click the ![](../static/img/docs/button/but-send2.png) button at the top of the form.  

![](../static/img/docs/CNF-001/image08.png)  

The **Information** dialog will display **"email was sent successfully!"**.  

10. Click **[ Ok ]** to continue.

11. Repeat the above steps to test the _Alternate Outgoing Email_ address.  

![](../static/img/docs/CNF-001/image23.png)  

12. To close the Email screen, click the **X** icon button at the top-right of the screen.  

The system will close this screen and return you to the Email Settings screen.  

13. Click the **Close** button on the Action Bar.  

___
**This is the end of this procedure.**
