"use strict";(self.webpackChunksense_i_co=self.webpackChunksense_i_co||[]).push([[8201],{68481:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var s=t(74848),r=t(28453);const i={id:"REP-STOCK",title:"Replenish from Stock",sidebar_label:"Replenish from Stock",slug:"/300"},o=void 0,d={id:"REP-STOCK",title:"Replenish from Stock",description:"If you choose to replenish from stock, you must ensure your stock quantities are accurate.",source:"@site/docs/REP-STOCK.md",sourceDirName:".",slug:"/300",permalink:"/docs/300",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1674572513e3,frontMatter:{id:"REP-STOCK",title:"Replenish from Stock",sidebar_label:"Replenish from Stock",slug:"/300"},sidebar:"docs",previous:{title:"Replenish Process Orders",permalink:"/docs/312"},next:{title:"Process Overview",permalink:"/docs/PPS000"}},l={},h=[{value:"Search Parameters of interest",id:"search-parameters-of-interest",level:2},{value:"Need columns",id:"need-columns",level:2},{value:"Need by the End Date",id:"need-by-the-end-date",level:3},{value:"Need by Calculated Date.",id:"need-by-calculated-date",level:3},{value:"Bring the Provisional Stock forward",id:"bring-the-provisional-stock-forward",level:2}];function a(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["If you choose to replenish from stock, you must ",(0,s.jsx)(n.strong,{children:"ensure your stock quantities"})," are accurate."]})}),"\n",(0,s.jsx)(n.p,{children:"The mechanism of stock replenishment works the same as any replenishment. IE. You need to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Set the quantity to be replenished."}),"\n",(0,s.jsx)(n.li,{children:"Confirm/change the supplier."}),"\n",(0,s.jsx)(n.li,{children:"Generate the order."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The difference lies in the fact that there is ",(0,s.jsx)(n.code,{children:"no underlying order"})," to work with. This means you must"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Search for the stock items of interest \u2013 as opposed to letting the underlying orders produce the list."}),"\n",(0,s.jsx)(n.li,{children:"Populate the replenish quantity either manually or copying the system calculated Need"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"From the main menu, navigate to Operation > Replenish Stock."}),"\n",(0,s.jsx)(n.p,{children:"From the Replenish screen choose the Resource group to Replenish."}),"\n",(0,s.jsx)(n.h2,{id:"search-parameters-of-interest",children:"Search Parameters of interest"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["(A) Search parameter ",(0,s.jsx)(n.strong,{children:"Plan Day Count"})," returns the number of dates to show in the calendar and determines the values in the Stock Planning Band as they are calculated up to the end date. (IE Current Date + Plan Day Count)"]}),"\n",(0,s.jsxs)(n.li,{children:["(B) The ",(0,s.jsx)(n.strong,{children:"Need from Value"})," can be used to refine the search to only show records whose need equals or exceeds a certain value."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The grid returns the expected stock values for a range of dates. The values correspond to\r\nthe ",(0,s.jsx)(n.a,{href:"/docs/STC-CON",children:(0,s.jsx)(n.strong,{children:"Consolidated with Provisional Supply Stock View"})}),", as can be seen by those numbers underlined in blue."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(87118).A+"",width:"2520",height:"1028"})}),"\n",(0,s.jsx)(n.h2,{id:"need-columns",children:"Need columns"}),"\n",(0,s.jsx)(n.p,{children:"The grid shows 2 need columns."}),"\n",(0,s.jsx)(n.h3,{id:"need-by-the-end-date",children:"Need by the End Date"}),"\n",(0,s.jsxs)(n.p,{children:["By the ",(0,s.jsx)(n.strong,{children:"end of the period"})," we need a certain amount of stock to be ordered to achieve the Target Level. This is the Need by the End Date (C),"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Need by End Date = Target - Value at end Date"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"                = 500 - 521   \r\n                = -21 \n"})}),"\n",(0,s.jsx)(n.p,{children:"As this is a negative value, another order is not yet required."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"The selected row above shows blank (zero) for the need by date."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"need-by-calculated-date",children:"Need by Calculated Date."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"first date where the stock dips below target"})," is the ",(0,s.jsx)(n.em,{children:"Need by Date"}),".(D)"]}),"\n",(0,s.jsx)(n.p,{children:"The screen above shows that the stock level is already below target for TODAY. It is 242 and the Target is 500. The need by date is set to today."}),"\n",(0,s.jsx)(n.p,{children:"The Need Quantity is calculated based on the lowest quantity(E) in the period."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Need by End date= Target \u2013 Lowest value"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"                = 500 - (-164)\r\n                = 664\n"})}),"\n",(0,s.jsx)(n.h2,{id:"bring-the-provisional-stock-forward",children:"Bring the Provisional Stock forward"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(14949).A+"",width:"2520",height:"1028"})}),"\n",(0,s.jsx)(n.p,{children:"The selected row show that the stock dips below zero during the period but is at an acceptable level by the end of the period. If the provisional order is brought forward we may be able to prevent negative stock."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"(F) The required action states that the Provisional Supply needs to be brought forward. We can see that there is sufficient stock at the end of the period but there will be a stock shortage during the period. Stock level drops below negative."}),"\n",(0,s.jsx)(n.li,{children:"(G) The provisional supply pushes the stock value to an acceptable level."}),"\n"]})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Select the Provisional supply cell and Click Open."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The list of source documents is listed."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(62684).A+"",width:"2140",height:"482"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Drill through to the purchase order."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(60083).A+"",width:"1802",height:"954"})}),"\n",(0,s.jsx)(n.p,{children:"The purchase order opens and highlights the Item we are querying. (Change the quantity of the order if needed.)"}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"To bring the due date forward, change the due date."}),"\n",(0,s.jsx)(n.li,{children:"Save the record."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Close down the drill through screens."}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"Click the Search button to refresh."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The refreshed data shows that the stock no longer dips below zero."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(28170).A+"",width:"2520",height:"1010"})})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},87118:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/reps1-1a352bdad66a556cbdb27ffb655d053a.png"},14949:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/reps2-df0e1ea630e5f14de178a30fbfb6b363.png"},62684:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/reps3-e1dc3fc20812575df786169d95e86246.png"},60083:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/reps4-9c587ada431ed16cdf81b34a180dd4fa.png"},28170:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/reps5-93b18614f79c1fb63ad1a3219f932d33.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var s=t(96540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);