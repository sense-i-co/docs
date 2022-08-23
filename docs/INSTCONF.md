---
id: INSTCONF
title: Sense-i Launcher - Advanced Configuration
sidebar_label: Launcher - Advanced Configuration
slug: /INSTCONF
---

This section is for **Sense-i System Administrators** and designed to **configure specific database connections**.  

Access the **Menu** by selecting the menu icon near the top left corner of the Sense-i Launcher application.

![](../static/img/docs/LAUNCH/menuIcon.png)  

The **Menu** options screen slides into display.

:::info  
To close the Menu options screen, select the **Home** option... or click on the underlying screen.  
:::  

----

## Menu Options

![](../static/img/docs/LAUNCH/UpgradeM.png)  

The **Home** button will take you back to the initial landing screen.  

![](../static/img/docs/LAUNCH/but_home.png)  

----

The **Help** button will open the **Online Help** document in your internet browser.

![](../static/img/docs/LAUNCH/but_help.png)  

----

The **Exit** button will close the Sense-i Launcher application.

![](../static/img/docs/LAUNCH/but_exit.png)  

----

The **Tools** button will open **additional options** on the Menu.

![](../static/img/docs/LAUNCH/Upgrade1.png)  

----

## Manage Connections

![](../static/img/docs/LAUNCH/but_load.png)  

The **Load** button will open the **Load Connection** screen.  


----
![](../static/img/docs/LAUNCH/but_config.png)  

The **Configure** button will open the **Configure Connections** screen.  

![](../static/img/docs/LAUNCH/image29.png)  

:::tip Configure Connections - SQL database Adminstrators
The **Configure Connections** screen is for SQL Database Adminstrators that 
have access to the specific configuration settings.
:::  

The [ **Add** ] button activates the connection settings fields to enable and add 
a new connection.

1.	**Connection Name** - Capture the desired name (description).
	It is recommended practise to use a consistent format that includes **company name**, 
	database type **(LIVE / TEST)** and the connection method (**Remote / LAN**),  
	e.g. **Acme_LIVE (Remote Connect)**.
	
2.	**Server Name** - This field includes the server **IP**, the **SQL Server Instance** and 
	the incoming **SQL port** used.  
	The syntax is important and needs to be accurate.  
	
3.	**Database Name** - This too needs to reflect the exact name of the database.  

4.	**SQL Login Name** - This is the general login setting used by all SEMS users that access the specific database.  

5.	**SQL Password** - The password associated with the SQL Login Name.  

6.	**SA Password** - This password field is **optional** and only known and used by Database System Administrators.  

:::note
The SQL Login Name and Passwords are defined, captured and maintained by Database System Administrators using SQL Server Management software.
:::  

![](../static/img/docs/LAUNCH/image34.png)  

Click on the [ **Test** ] button to ensure the connection settings have been configured correctly.  

Once the connection setting(s) have been captured and saved using the [ **Save** ] button,  
the [ **Edit** ], [ **Delete** ] and [ **Copy** ] button options are activated for 
further amendments and to configure additional connections as necessary.  

![](../static/img/docs/LAUNCH/image35.png)  

Click on the [ **Export** ] button to create the relevant **.ini** file that can be distributed to SEMS users.  

:::note
The **Export** button will append additional connection settings to an existing **.ini** file if selected.  
:::

Access the **Menu** by selecting the menu icon near the top left corner of the Sense-i Launcher application.

![](../static/img/docs/LAUNCH/menuIcon.png)  

----
## Update Launcher

When a new version of the ElfWorks Launcher software becomes available, the system will automatically notify you of such.  

The following steps will upgrade the Sense-i Launcher software to the latest version;  

Access the **Menu** by selecting the menu icon near the top left corner of the Sense-i Launcher application.

![](../static/img/docs/LAUNCH/menuIcon.png)  


![](../static/img/docs/LAUNCH/upgrade2.png)  


1.	Ensure the **Tools** option is selected.  

2.	Select [ **Software Update** ].  

	The **Software Update** screen is displayed.

![](../static/img/docs/LAUNCH/upgrade3.png)  

3.	Click on the [ **Check for updates** ] button.

![](../static/img/docs/LAUNCH/upgrade4.png)  

4.  Click on [ **Upgrade Software** ].

![](../static/img/docs/LAUNCH/upgrade5.png)  

The **Launcher Upgrade** dialogue box is displayed.

5.	Click on the [ **Continue** ] button.  

The system will download the relevant .ZIP file, automatically extract the necessary files and install the latest version of the Launcher.

From the **Home** screen connect to the SEMS application & relevant database.

----
## Launch (specific) Application  

The **SEMS toggle button** is set to active by default.  

![](../static/img/docs/LAUNCH/upgrade8.png)  

1.	When the **SEMS toggle button** is active, clicking on the [ **Connect** ] button _(underlying **Home Page**)_ will launch the SEMS application.  

2.	Click on the [ **Factory Floor** ] toggle button to activate the **Sphere_Mini** application.  

![](../static/img/docs/LAUNCH/upgrade9.png)  

Select [ **Yes** ] to set **Factory Floor** _(**Sphere_Mini**)_ as the default application.  

Select [ **No**]  to keep **SEMS** as the default application.  

:::note  
The default application, **SEMS** or **Sphere_Mini** will now always run when selecting the **Connect** button on the **Home** screen.  
:::

----

**This is the end of the _Sense-i Launcher_ procedure.**








