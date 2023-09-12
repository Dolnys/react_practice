(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{11:function(e,a,t){},13:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t(3),n=t.n(s),r=(t(9),t(10),t(4)),i=(t(11),[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}]),l=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],d=t(0),o=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((function(e){var a=l.find((function(a){return a.id===e.categoryId})),t=i.find((function(e){return e.id===a.ownerId}));return{id:e.id,name:e.name,category:a.title,user:t.name}})),j=function(){var e=Object(c.useState)(null),a=Object(r.a)(e,2),t=a[0],s=a[1],n=o.filter((function(e){return!t||e.user===t.name}));return Object(d.jsx)("div",{className:"section",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"title",children:"Product Categories"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsxs)("nav",{className:"panel",children:[Object(d.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(d.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(d.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",onClick:function(){return s(null)},className:null===s?"is-active":"",children:"All"}),i.map((function(e){return Object(d.jsx)("a",{"data-cy":"FilterUser",href:"#/",onClick:function(){return s(e)},className:t===e?"is-active":"",children:e.name},e.id)}))]}),Object(d.jsx)("div",{className:"panel-block",children:Object(d.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(d.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:"qwe"}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),Object(d.jsx)("span",{className:"icon is-right",children:Object(d.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete"})})]})}),Object(d.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(d.jsx)("a",{href:"#/","data-cy":"AllCategories",className:"button is-success mr-6 is-outlined",children:"All"}),Object(d.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 is-info",href:"#/",children:"Category 1"}),Object(d.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1",href:"#/",children:"Category 2"}),Object(d.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 is-info",href:"#/",children:"Category 3"}),Object(d.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1",href:"#/",children:"Category 4"})]}),Object(d.jsx)("div",{className:"panel-block",children:Object(d.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",children:"Reset all filters"})})]})}),Object(d.jsxs)("div",{className:"box table-container",children:[Object(d.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"}),Object(d.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:Object(d.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(d.jsx)("a",{href:"#/",children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(d.jsx)("th",{children:Object(d.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(d.jsx)("a",{href:"#/",children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(d.jsx)("th",{children:Object(d.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(d.jsx)("a",{href:"#/",children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(d.jsx)("th",{children:Object(d.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(d.jsx)("a",{href:"#/",children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(d.jsx)("tbody",{children:n.map((function(e){return Object(d.jsxs)("tr",{"data-cy":"Product",children:[Object(d.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:e.id}),Object(d.jsx)("td",{"data-cy":"ProductName",children:e.name}),Object(d.jsxs)("td",{"data-cy":"ProductCategory",children:[l.find((function(a){return a.title===e.category})).icon," ","- ",e.category]}),Object(d.jsx)("td",{"data-cy":"ProductUser",className:"m"===i.find((function(a){return a.name===e.user})).sex?"has-text-link":"has-text-danger",children:e.user})]},e.id)}))})]})]})]})})};n.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.377e30bc.chunk.js.map