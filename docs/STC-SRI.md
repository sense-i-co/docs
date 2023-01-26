---
id: STC-SRI
title: Stock Reorder Information
sidebar_label: Stock Reorder Information
slug: /STC-SRI
---

Stock Reorder Information is used to help manage stock. The data can be set for each stock item for each department.

## List of Settings

### 1. Replenish Policy

Can take on values of
- By Order
Replenish quantity is the ordered quantity.     
_**Items with this setting:** Non-standard sales goods. IE Sofa with specific materials and finishes.
 Raw materials not commonly used or specific to an order._

- By Stock
 Replenish quantity is based on consolidated stock needs and target values.   
_**Items with this setting:** Standard common finished goods
 Raw materials bought in bulk and commonly used.
 *Consider too: materials with a long lead time._

### 2. Average Daily Demand

Before we can set a realistic target quantity, we should have a good idea of the amount of stock we generally use on a daily basis.
You can set this manually, or better yet, let the 
system [set this based on the recent historical projected demand](../docs/STC-SAV.md).

### 3. Stock Target Quantity

The target Quantity is used to alert the operator when to reorder more stock. 
It is also used to highlight those stock items which have been over supplied. Over supply of expensive items can cause cash flow problems in other areas of the business.

In order to ensure we always have enough stock we should always _ **reorder before the stock runs out** _. 
Once a **target** has been set, we can be alerted when the stock reaches this critical level and then, timeously, place an order.

The stock we have at the time of the reorder must last until this order arrives. The order usually takes **Lead** days to reach us. Each day we expect to use the **average daily demand**.

We could also build in protection against a late receipt of stock. This is the **buffer days**

>
>**Target (by Lead Days)= Average Daily Demand\* (Lead Days + Buffer Days)**
>

A step up from this would be to order less frequently, reducing admin and piecemeal orders. A longer time between ordering means a larger order.

>
>**Target (by Order Frequency) = Average Daily Demand\*(Order Frequency Days + Buffer Days)**
>

:::note
If the Lead days exceeds the Order Frequency Days we revert to the lead days.
:::

The target can be set manually or generated. If generated we need to ensure that Average Daily Demand, Reorder frequency, and (optionally) the buffer days need to be set **prior** to, or in conjunction with, generation.

### 4. Reorder frequency days

This is the number of PREFERRED WORK days between orders. IE. If you would generally like to order every second week the value would be set to 10 work days.

:::tip
You can order whenever you need, but this value is used in setting the target quantity ensuring that, 
under average stock usage conditions, you have enough stock to last the number of work days set.
:::

### 5. Check Stock Day

To help manage a large collection of stock you can use this tag to filter the records. The available values are the days of the week


