---
id: USEGATEWAY
title: Using the Sense-i Gateway Application
sidebar_label: Using Sense-i Gateway
slug: /USEGATEWAY
---

## Introduction  

The **Sense-i Gateway** allows you access to the various **Sense-i applications** and **connect to the relevant database(s)**.

This **step-by-step guide** will show you how to use the **Sense-i Gateway** application.  

:::note  
The buttons & links displayed on the images in this guide are **NOT ACTIVE** and soley used for **reference purposes**.  
:::  

If you are continuing with the process directly from the previous document, the program will display the Sense-i Gateway **Home** screen.  

![](../static/img/docs/GATEWAY/image11.png)  

Alternatively, if you are not continuing directly from the previous step, you will need to open the Sense-i Launcher by clicking on the Sense-i Launcher shortcut icon on your desktop;  

![](../static/img/docs/GATEWAY/image12.png)  

## How to Set Up the Connection  

:::note  
There will be no **SEMS connections** available when using the **Sense-i Gateway** for the first time.  
:::  

![](../static/img/docs/GATEWAY/image36.png)  

If your company subscribes to the **Sense-i Enterprise Management System _(SEMS)_** software applications, you will receive a **SEMS Connection email** containing the **connection string information**, with the relevant _**SEMSconnect.Json**_ file attached.  

1.	Select the option of **Job Tracker** in the Service dropdown menu.  

![](../static/img/docs/GATEWAY/image38.png)  

2. Click on the **Connect** option.

![](../static/img/docs/GATEWAY/image39.png)  

A _Confirmation_ dialogue box is displayed.  

![](../static/img/docs/GATEWAY/image40.png)  

3.	Click on the **Yes** option.  

![](../static/img/docs/GATEWAY/image41.png)  

The **Load Connection** screen is displayed, with the following _radio-button_ options available:  
-	Open config file (Json)
-	Copy and Paste  

### Load Connection - Open config file (Json)  

:::important  
When using this option, it is important to know the location of the **SEMSconnect.Json** file.  

From your **SEMS Connection email**, save the attached **SEMSconnect.Json** file to the **C:\SEMSGATEWAY\Connection\\** sub-directory on your computer,  

Alternatively, obtain the Local Area Network location of the SEMSconnect.Json file from your SEMS Administrator.  
:::  

![](../static/img/docs/GATEWAY/image14.png)  

1.	Click on the **Open Config file (.Json)** radio-button.  

2.	Then click the [ **Load** ] button.  

The MS Windows **File Explorer** is displayed.

![](../static/img/docs/GATEWAY/image15.png)  

2.  **Locate** and [ **Open** ] the relevant **.Json** file.  

----

A pop-up box confirming database and connection type will appear.  

![](../static/img/docs/GATEWAY/image16.png)

3.  Select [ **Yes** ] to load the desired connection(s).  

:::note  
Usually the company would have **two** databases:  
- The **TEST Database** _(DB)_ which is used for training, practice and testing purposes.  
- The **LIVE DB** where the actual daily work is done.  

The Database Servers can be connected to in two ways:  
- Local Area Network **(LAN) connection** - this when the Database Server is on same LAN, e.g. Office network.  
- **Remote connection** - this when the database server is accessed remotely, e.g. via the internet.  

Therefore, there could be 4 connection options available:  
- **Remote** connection to the **LIVE database**  
- **Remote** connection to the **TEST database**  
- **Local connection** to the **LIVE** database - same **LAN** as that of the Database Server  
- **Local connection** to the **TEST** database using the local network to connect to the Database Server.  
:::  

Once the relevant connection(s) have been loaded, an **Information** dialogue box is displayed.  

![](../static/img/docs/GATEWAY/image17.png)  

4.  Click the [ **Ok** ] button.  

----

The **Load Connection** screen is now active again.  

![](../static/img/docs/GATEWAY/image18.png)  

5.  Click on the [ **Home** ] button to return to the main screen.  

:::important  
If you used the above method to Load Connection(s), you can skip to the 
**[Home Page - Ready to Connect](https://sense-i.co/docs/LAUNCH#home-page---ready-to-connect)** section of this document.  
:::  

----  
### Load Connection - Copy and Paste

![](../static/img/docs/GATEWAY/image19.png)  

Selecting this option will enable you to copy the relevant settings from:  
- an e-mail message, 
- an exsisting .Json file or 
- an appropriate text file.  

:::note  
These connection settings can be obtained from your SEMS System Administrator.  
:::  

1.	To set up a connection, **SELECT the connection string information** from:  
-   your **SEMS Connection email**, or  
-   an exsisting **SEMSconnect.Json file**, or  
-   an appropriate **text file**.    

![](../static/img/docs/GATEWAY/image20.png)  

2.	Then **right-click** the mouse button and choose the **Copy** option.  

----

Return to the **Sense-i Gateway** application and click the [ **Paste** ] button. .  

![](../static/img/docs/GATEWAY/image21.png)  

The **connection settings** now appear in the text box field.

![](../static/img/docs/GATEWAY/image22.png)  

3.  Click the [ **Load** ] button.  

----

A pop-up box confirming database and connection type will appear.  

![](../static/img/docs/GATEWAY/image23.png)

5.  Select [ **Yes** ] to load the desired connection(s).  

----

Once the relevant connection(s) have been loaded an **Information** dialogue box is displayed.  

![](../static/img/docs/GATEWAY/image24.png)  

6.  Click the [ **Ok** ] button.  

----

The **Load Connection** screen is now active again.  

![](../static/img/docs/GATEWAY/image25.png)  

6.  Click on the [ **Home** ] button to return to the main screen.  

----

## Home Page - Ready to Connect  

Once the connections have been loaded, Sense-i Gateway is ready to connect to the **chosen database**.  

![](../static/img/docs/GATEWAY/image26.png)  

1. Click on the [ **Connect** ] button.  

The application will now download and launch the Sense-i Enterprise Management System (**SEMS**) using the relevant connection options.

:::note  
**Sense-i Gateway** will automatically download the latest version of the **SEMS application**.  

This download process will only occur again when the **SEMS application** and **Database** is upgraded.
:::  

----








