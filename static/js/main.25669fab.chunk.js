(this.webpackJsonpswag_adder=this.webpackJsonpswag_adder||[]).push([[0],{13:function(e,t,n){e.exports=n(22)},18:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),c=n.n(o),l=(n(18),n(1)),s="https://tranquil-meadow-63605.herokuapp.com/",i=n(2),u=function(e){var t=Object(i.d)(),n=Object(a.useState)(""),o=Object(l.a)(n,2),c=o[0],u=o[1],E=Object(a.useState)(!1),m=Object(l.a)(E,2),d=m[0],O=m[1],f=function(e){e.preventDefault(),O(!0),fetch(s+"reset-password/"+c).then((function(e){return e.json()})).then((function(e){"SUCCESS"===e.status?t.success("SUCCESSFULLY RESETED PASSWORD FOR ASSOCIATE!"):"NO_MATCH"===e.reason?t.error("ASSOCIATE LOGIN IS NOT ON RECORD"):t.error("SERVER ERROR: PLEASE TRY AGAIN LATER OR CONTACT IT")})).catch((function(e){console.log(e),t.error("CONNECTION ISSUE, PLEASE CHECK YOUR INTERNET CONNECTION")})).finally((function(){return O(!1)}))};return r.a.createElement("div",{className:"display"},d?r.a.createElement("div",{className:"loader"}):r.a.createElement("div",null,r.a.createElement("h2",null,"Password Reset"),r.a.createElement("form",{onSubmit:f,style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("input",{onChange:function(e){return u(e.target.value)},placeholder:"Enter AA's login"}),r.a.createElement("button",{onClick:f},"Submit"))))},E=n(4),m=n.n(E),d=n(10),O=n(6),f=function(e){var t=Object(i.d)(),n=Object(a.useState)(""),o=Object(l.a)(n,2),c=o[0],u=o[1],E=Object(a.useState)(0),m=Object(l.a)(E,2),d=m[0],O=m[1],f=Object(a.useState)(""),S=Object(l.a)(f,2),C=S[0],N=S[1],g=Object(a.useState)(!1),h=Object(l.a)(g,2),b=h[0],T=h[1],R=Object(a.createRef)();Object(a.useEffect)((function(){b||R.current.value||(R.current.placeholder=d)}));var A=function(n){if(n.preventDefault(),c&&C&&d){var a=(new Date).toLocaleDateString();T(!0),fetch(s+"add-balance/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_data:c,swag_amt:d,reason:C,manager_user_name:e.manager_user_name,date:a})}).then((function(e){return e.json()})).then((function(e){"SUCCESS"===e.status?t.success("SUCCESSFULLY ADDED ".concat(d," SWAG TO ").concat(e.user.user_name)):"NO_MATCH"===e.reason?t.error("ERROR: ".concat(c," IS NOT FOUND IN RECORDS")):t.error("ERROR: SERVER ERROR PLEASE TRY AGAIN LATER")})).catch((function(e){console.log(e),t.error("CONNECTION ERROR, PLEASE CHECK YOUR INTERNET CONNECTION")})).finally((function(){T(!1),u("")}))}else t.error("YOU MUST FILL OUT ALL FIELDS BEFORE SUBMITTING")};return r.a.createElement("div",null,r.a.createElement("div",null," ",b?r.a.createElement("div",{className:"loader"}):r.a.createElement("div",null,r.a.createElement("h2",null,"Individual Swag Addition"),r.a.createElement("form",{onSubmit:A},r.a.createElement("label",null,"$"),r.a.createElement("input",{id:"amount",ref:R,onChange:function(e){return O(e.target.value)}}),r.a.createElement("input",{placeholder:"Enter reason of distribution",onChange:function(e){return N(e.target.value)}}),r.a.createElement("input",{placeholder:"Scan Badge or enter Login",onChange:function(e){return u(e.target.value)}}),r.a.createElement("button",{onClick:A},"Submit")))))},S=function(e){var t=Object(a.useState)(!0),n=Object(l.a)(t,2),o=n[0],c=n[1],u=Object(a.useState)(""),E=Object(l.a)(u,2),S=E[0],C=E[1],N=Object(a.useState)([]),g=Object(l.a)(N,2),h=g[0],b=g[1],T=Object(a.useState)([]),R=Object(l.a)(T,2),A=R[0],p=R[1],I=Object(i.d)(),y=function(){var t=Object(O.a)(m.a.mark((function t(n,a,r){var o,c,l,i;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=new Date,c=o.toLocaleDateString(),l={user_data:n,swag_amt:a,reason:r,manager_user_name:e.manager_user_name,date:c},t.next=5,fetch(s+"add-balance/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});case 5:return i=t.sent,t.next=8,i.json();case 8:"SUCCESS"===t.sent.status?b((function(e){return[].concat(Object(d.a)(e),[l])})):p((function(e){return[].concat(Object(d.a)(e),[l])}));case 10:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"display"},r.a.createElement(f,{manager_user_name:e.manager_user_name}),r.a.createElement("h2",{style:{paddingTop:"30px"}},"Mass Swag Distribution"),r.a.createElement("label",null,"Select .csv file to upload"),r.a.createElement("input",{onChange:function(e){return C(e.target.files[0])},type:"file",accept:".csv"}),r.a.createElement("button",{onClick:function(){c(!1),b([]),p([]);var e=new FileReader;e.readAsText(S),e.onloadend=function(){var t;(t=e.result).length<23||"associate,swag,reason\r\n"!==t.slice(0,23)?I.error("INVALID DATA FORMAT"):function(e){for(var t=23,n=function(){var n="";if('"'===e[t]){for(++t;'"'!==e[t]&&t<e.length;)n+=e[t],++t;return t+=2,n}for(;t<e.length&&","!==e[t]&&"\n"!==e[t];)"\r"!==e[t]&&(n+=e[t]),++t;return++t,n},a="",r="",o="";t<e.length;)a=n(),r=n(),o=n(),y(a,r,o)}(e.result)}}},"Submit"),r.a.createElement("div",{style:{display:o?"none":"block"}},r.a.createElement("h3",null,"SUCCESS"),r.a.createElement("div",{style:{backgroundColor:"white",maxHeight:"100px",overflowY:"scroll"}},h.map((function(e){return r.a.createElement("p",{style:{margin:"10px",borderBottom:"solid black 1px"}},"ID: ",e.user_data,"     $",e.swag_amt,"     REASON: ",e.reason)}))),r.a.createElement("h3",null,"FAILED"),r.a.createElement("div",{style:{backgroundColor:"white",maxHeight:"100px",overflowY:"scroll"}},A.map((function(e){return r.a.createElement("p",{style:{margin:"10px",borderBottom:"solid black 1px"}},"ID: ",e.user_data,"     $",e.swag_amt,"     REASON: ",e.reason)})))))},C=(n(7),function(e){var t=Object(i.d)(),n=e.item,o=Object(a.useState)(!1),c=Object(l.a)(o,2),u=c[0],E=c[1],m=Object(a.useState)(!1),d=Object(l.a)(m,2),O=d[0],f=d[1],S=Object(a.useState)(""),C=Object(l.a)(S,2),N=C[0],g=C[1],h=function(){E(!0),fetch(s+"temp-delivery/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cart_id:n.cart_id})}).then((function(e){return e.json()})).then((function(e){"SUCCESS"===e.status?t.success("SUCCESSFULLY MARKED ORDER AS DELIVERED"):t.error("ERROR, PLEASE TRY AGAIN LATER OR WRITE DOWN ORDER PULLED")})).catch((function(e){console.log(e),t.error("CONNECTION ERROR. PLEASE CHECK YOUR CONNECTION!")})).finally((function(){E(!1),e.getStore()}))},b=function(){E(!0),fetch(s+"fulfill-order/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cart_id:n.cart_id})}).then((function(e){return e.json()})).then((function(e){"SUCCESS"===e.status?t.success("SUCCESSFULLY FULFILLED ORDER"):t.error("ERROR IN FULFILLING ORDER, PLEASE TRY AGAIN LATER")})).catch((function(e){console.log(e),t.error("CONNECTION ERROR. PLEASE CHECK YOUR CONNECTION!")})).finally((function(){E(!1),e.getStore()}))},T=function(){E(!0),fetch(s+"cancel-order/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cart_id:n.cart_id})}).then((function(e){return e.json()})).then((function(e){"SUCCESS"===e.status?t.success("SUCESSFULLY CANCELLED ORDER"):t.error("SOMETHING WENT WRONG, PLEASE TRY AGAIN LATER")})).catch((function(e){console.log(e),t.error("CANNOT CONNECT TO SERVER, PLEASE TRY AGAIN LATER")})).finally((function(){E(!1),e.getStore()}))},R=function(){switch(N){case"FULFILL":return r.a.createElement("div",null,r.a.createElement("button",{className:"cancel-button",onClick:function(){return f(!1)}},"Go Back"),r.a.createElement("button",{className:"confirm-button",onClick:b},"Confirm Fulfillment"));case"CANCEL":return r.a.createElement("div",null,r.a.createElement("button",{className:"cancel-button",onClick:function(){return f(!1)}},"Go Back"),r.a.createElement("button",{className:"cancel-button",onClick:T},"Confirm Cancellation"));case"DELIVER":return r.a.createElement("div",null,r.a.createElement("button",{className:"cancel-button",onClick:function(){return f(!1)}},"Go Back"),r.a.createElement("button",{className:"confirm-button",onClick:h},"Confirm order Delivery"));default:return r.a.createElement("div",null)}};return r.a.createElement("div",{id:"list-item",style:function(){switch(n.status){case"RECEIVED":return{backgroundColor:"#00b7ff"};case"FULFILLED":return{backgroundColor:"#6ac482"};case"BACKORDERED":return{backgroundColor:"#c9cc00"};default:return{backgroundColor:"#00b7ff"}}}()},r.a.createElement("div",{style:{display:u?"inline":"none"},className:"loader big-load"}),r.a.createElement("p",{style:{fontWeight:"bold"}},n.user_name),r.a.createElement("p",null,"Name: ",n.user_first_name,", Manager: ",n.user_manager," "),r.a.createElement("p",null,n.swag_name," quantity: ",n.quantity),"RECEIVED"===n.status||"BACKORDERED"===n.status?r.a.createElement("div",null,O?r.a.createElement("div",null,R()):r.a.createElement("div",null,r.a.createElement("button",{className:"cancel-button",onClick:function(){g("CANCEL"),f(!0)}},"Cancel Order"))):r.a.createElement("div",null,O?r.a.createElement("div",null,R()):r.a.createElement("div",null,r.a.createElement("button",{className:"cancel-button",onClick:function(){g("CANCEL"),f(!0)}},"Cancel Order"),r.a.createElement("button",{onClick:function(){g("DELIVER"),f(!0)}},"Deliver Order"))))}),N=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),o=n[0],c=n[1];return r.a.createElement("div",{id:"list"},r.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}},r.a.createElement("h2",null,e.title),r.a.createElement("input",{placeholder:"Search for login",onChange:function(e){c(e.target.value)}}),r.a.createElement("button",{style:{marginTop:"0px"},onClick:e.getStore},"Refresh")),r.a.createElement("div",{id:"inner-list"},e.listOfOrders.filter((function(e){return e.user_name.includes(o)})).map((function(t){return r.a.createElement(C,{key:t.cart_id,getStore:e.getStore,item:t})}))))},g=function(e){var t=Object(i.d)(),n=Object(a.useState)(!1),o=Object(l.a)(n,2),c=o[0],u=o[1],E=Object(a.useState)(""),m=Object(l.a)(E,2),d=m[0],O=m[1],f=function(n){n.preventDefault(),d?(u(!0),fetch(s+"delivery-by-badge/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:d})}).then((function(e){return e.json()})).then((function(e){"SUCCESS"===e.status?t.success("SUCESSFULLY MARKED ".concat(e.count," ORDERS FOR DELIVERY!")):"NOT_FOUND"===e.reason?t.error("ASSSOCIATE DOES NOT HAVE ANY FULFILLED ORDERS!"):t.error("SERVER ERROR, PLEASE TRY AGAIN LATER OR CONTACT IT")})).catch((function(e){console.log(e),t.error("CONNECTION ISSUE, PLEASE CHECK YOUR INTERNET CONNECTION!")})).finally((function(){O(""),u(!1),e.getStore()}))):t.error("YOU MUST SCAN ASSOCIATE BADGE BEFORE CLICKING SUBMIT")};return r.a.createElement("div",{className:"display"},r.a.createElement("h2",null,"Delivery by Badge Scan"),r.a.createElement("div",null,c?r.a.createElement("div",{className:"loader"}):r.a.createElement("form",{onSubmit:f},r.a.createElement("input",{placeholder:"Scan Associate Badge",onChange:function(e){return O(e.target.value)}}),r.a.createElement("button",{onClick:f},"Submit"))))},h=function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)([]),u=Object(l.a)(i,2),E=u[0],m=u[1],d=function(){c(!0),fetch(s+"get-fulfilled-orders/").then((function(e){return e.json()})).then((function(e){"SUCCESS"===e.status?m(e.order):alert.error("FAILED TO GET LIST OF ORDERS")})).catch((function(e){console.log(e),alert.error("FAILED TO CONNECT TO SERVER, PLEASE CHECK YOU CONNECTION!")})).finally((function(){return c(!1)}))};return Object(a.useEffect)((function(){c(!0),fetch(s+"get-fulfilled-orders/").then((function(e){return e.json()})).then((function(e){"SUCCESS"===e.status?m(e.order):alert.error("FAILED TO GET LIST OF ORDERS")})).catch((function(e){console.log(e),alert.error("FAILED TO CONNECT TO SERVER, PLEASE CHECK YOU CONNECTION!")})).finally((function(){return c(!1)}))}),[]),r.a.createElement("div",null,o?r.a.createElement("div",{className:"loader"}):r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{id:"instructions",className:"display"},r.a.createElement("h3",null,"ORDER DELIVERY/CANCELLATION INSTRUCTIONS"),r.a.createElement("p",{style:{color:"gray"}},"To cancel an order, you can click the 'Cancel Order' Button corresponding to the order you are cancelling ",r.a.createElement("br",null),r.a.createElement("br",null),"**NOTE: please use the following features to mark the order 'DELIVERED' when you hand out an item",r.a.createElement("br",null),"To deliver an order, you can click the 'Deliver Order' Button corresponding to the order you are delivering. ",r.a.createElement("br",null)," ",r.a.createElement("br",null),"Alternatively, you can scroll down to the bottom of the page and use the Deliver By Badge Scan feature: ",r.a.createElement("br",null),"Click on the input field and scan the associate's badge, and all fulfilled order of the associate will be marked 'DELIVERED.'")),r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",alignContents:"center"}},r.a.createElement(N,{getStore:d,title:"Fulfilled orders",listOfOrders:E.filter((function(e){return"FULFILLED"===e.status}))}),r.a.createElement(N,{getStore:d,title:"Back Orders",listOfOrders:E.filter((function(e){return"BACKORDERED"===e.status}))})),r.a.createElement(g,{getStore:d})))},b=function(e){var t=Object(i.d)(),n=Object(a.useState)(""),o=Object(l.a)(n,2),c=o[0],u=o[1],E=function(e){e.preventDefault(),c?window.open(s+"associate-status/"+c):t.error("YOU MUST ENTER ASSOCIATE LOGIN BEFORE CLICKING SUBMIT!")};return r.a.createElement("div",{className:"display"},r.a.createElement("h2",null,"Check Associate's Swag"),r.a.createElement("form",{onSubmit:E,style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("input",{placeholder:"Scan Badge or enter Login",onChange:function(e){return u(e.target.value)}}),r.a.createElement("button",{onClick:E},"Submit")))},T=function(e){var t=e.setRoute,n=Object(i.d)(),o=Object(a.useState)(""),c=Object(l.a)(o,2),u=c[0],E=c[1],d=function(){var a=Object(O.a)(m.a.mark((function a(r){var o,c;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.preventDefault(),e.manager_user_name&&u){a.next=5;break}n.error("PLEASE INPUT BOTH ID AND PASSWORD TO LOGIN"),a.next=21;break;case 5:return t("LOADING"),a.prev=6,a.next=9,fetch(s+"manager-login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_name:e.manager_user_name.toLowerCase(),password:u})});case 9:return o=a.sent,a.next=12,o.json();case 12:"SUCCESS"===(c=a.sent).status?t("MAIN_SCREEN"):"NOT_FOUND"===c.reason?(t("INITIATE"),n.error("NO MATCHING COMBINATION FOUND")):"NOT_ACTIVATED"===c.reason?(t("INITIATE"),n.error("YOUR ACCOUNT IS NOT YET ACTIVATED BY THE SWAG STORE MANAGER")):(t("INITIATE"),n.error("SERVER ERROR")),a.next=21;break;case 16:a.prev=16,a.t0=a.catch(6),console.log(a.t0),t("INITIATE"),n.error("NETWORK ERROR PLEASE CHECK YOUR CONNECTION");case 21:case"end":return a.stop()}}),a,null,[[6,16]])})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:"display"},r.a.createElement("h3",null,"Manager Login"),r.a.createElement("form",{style:{color:"gray"},onSubmit:d},r.a.createElement("label",null,"ID"),r.a.createElement("input",{onChange:function(t){return e.setManager(t.target.value)}}),r.a.createElement("label",null,"Password"),r.a.createElement("input",{onChange:function(e){return E(e.target.value)},type:"password"}),r.a.createElement("button",{onClick:d},"Login")))},R=function(e){var t=Object(i.d)(),n=Object(a.useState)(!1),o=Object(l.a)(n,2),c=o[0],u=o[1],E=Object(a.useState)(""),d=Object(l.a)(E,2),f=d[0],S=d[1],C=Object(a.useState)(""),N=Object(l.a)(C,2),g=N[0],h=N[1],b=Object(a.useState)(""),T=Object(l.a)(b,2),R=T[0],A=T[1],p=function(){var e=Object(O.a)(m.a.mark((function e(n){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),u(!0),g===R){e.next=6;break}t.error("PASSWORD CONFIRMATION DOES NOT MATCH PLEASE CHECK"),e.next=26;break;case 6:if(f&&g&&R){e.next=10;break}t.error("YOU MUST FILL ALL FIELDS TO REGISTER"),e.next=26;break;case 10:return e.prev=10,e.next=13,fetch(s+"manager-registration/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_name:f.toLowerCase(),password:g})});case 13:return a=e.sent,e.next=16,a.json();case 16:"SUCCESS"===(r=e.sent).status?t.success("YOUR REQUEST HAS BEEN SUBMITTED, THE SWAG STORE MANAGER WILL CONFIRM THAT YOU ARE A MANAGER AND ACTIVATE YOUR ACCOUNT WITHIN 24HR"):"NOT_ACTIVATED"===r.reason?t.error("YOUR ACCOUNT IS NOT YET ACTIVATED BY THE SWAG STORE MANAGER"):"DUPLICATE"===r.reason?t.error("THIS LOGIN HAS BEEN REGISTERED AS A MANAGER ALREADY"):t.error("SERVER ERROR"),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(10),t.error("NETWORK ERROR PLEASE CHECK YOUR CONNECTION");case 23:S(""),h(""),A("");case 26:u(!1);case 27:case"end":return e.stop()}}),e,null,[[10,20]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,function(){switch(c){case!0:return r.a.createElement("div",{className:"loader"});default:return r.a.createElement("div",{className:"display"},r.a.createElement("h3",null,"Manager Registration"),r.a.createElement("p",{style:{color:"gray"}},"Welcome to our new security login! Please register with your Amazon Login!",r.a.createElement("br",null),"After you have successfully registered with your Amazon Login, the SWAG store manager will confirm ",r.a.createElement("br",null),"your information through Amazon Phonetool and activate your account within 24 hours. ",r.a.createElement("br",null),"This tool is available to Managers/Process Assistants/Shift Assistants (L3+)",r.a.createElement("br",null),"Thank you for your support!"),r.a.createElement("form",{style:{color:"gray"},onSubmit:p},r.a.createElement("label",null,"ID"),r.a.createElement("input",{onChange:function(e){return S(e.target.value)}}),r.a.createElement("label",null,"Password"),r.a.createElement("input",{onChange:function(e){return h(e.target.value)},type:"password"}),r.a.createElement("label",null,"Confirm Password"),r.a.createElement("input",{onChange:function(e){return A(e.target.value)},type:"password"}),r.a.createElement("button",{onClick:p},"Register")))}}())};var A=function(){var e=Object(a.useState)("INITIATE"),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),s=Object(l.a)(c,2),i=s[0],E=s[1];return r.a.createElement("div",{className:"App"},function(){switch(n){case"LOADING":return r.a.createElement("div",{className:"center-screen"},r.a.createElement("div",{className:"loader"}));case"INITIATE":return r.a.createElement("div",{className:"center-screen"},r.a.createElement("div",{className:"display",style:{maxWidth:"700px"}},r.a.createElement("h3",null,"ATTENTION"),r.a.createElement("p",{style:{color:"#696969"}},"Please use the Manual Delivery or Badge Scan Delivery Function to mark an order as 'DELIVERED' when handing out items to associates!"),r.a.createElement("p",{style:{color:"#696969"}},"This also adds a timestamp on the delivery for future reference!"),r.a.createElement("p",{style:{color:"#696969"}},"We are having problems with associates claiming they did not receive their orders!"),r.a.createElement("p",{style:{fontWeight:"bold"}},"Thank you for your support!")),r.a.createElement(T,{setRoute:o,manager_user_name:i,setManager:E}),r.a.createElement(R,{setRoute:o}));default:return r.a.createElement("div",{className:"center-screen"},r.a.createElement("h3",{style:{color:"white",textAlign:"center",padding:"0.5em",margin:"0.5em",borderRadius:"10px",backgroundColor:"#d15d4b"}},"Notice: We are migrating away from the old SWAG store to the new SWAG store. Please do NOT make changes to the old store. Any changes to the old store will NOT reflect on the new store! Please use this tool to deposit SWAG BUCKS to Associates' accounts"),r.a.createElement("h3",{style:{color:"white",textAlign:"center",padding:"0.5em",margin:"0.5em",borderRadius:"10px",backgroundColor:"#d15d4b"}},"If you would like to get something from the store, feel free to add Swag $$ to yourself and order it!"),r.a.createElement("div",{className:"display"},r.a.createElement("h3",null,"ACCOUNT MANAGER'S INSTRUCTIONS"),r.a.createElement("p",{style:{color:"gray"}},"To add swag $$ to an Associate, input the amount you would like to give, enter the justification and scan the Associate's Badge or Enter the Login",r.a.createElement("br",null),"Please refer to this guide for using the Mass Swag Distribution function:"),r.a.createElement("a",{href:"https://docs.google.com/document/d/18vQ-bbHLMPLGw07nFzrkLHNg6FYx3NfBAbYWgLa60WU/edit?usp=sharing"},"https://docs.google.com/document/d/18vQ-bbHLMPLGw07nFzrkLHNg6FYx3NfBAbYWgLa60WU/edit?usp=sharing"),r.a.createElement("p",{style:{color:"gray"}},"To reset an Associate's Password, confirm and enter the login and click Submit",r.a.createElement("br",null),"To check how much SWAG $$ an Associate has, scan Badge or enter the Login and click Submit")),r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}},r.a.createElement(S,{manager_user_name:i}),r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement(b,null))),r.a.createElement(h,null))}}())};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p=n(12),I={position:i.b.BOTTOM_CENTER,timeout:5e3,offset:"30px",transition:i.c.SCALE};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,Object.assign({template:p.a},I),r.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){}},[[13,1,2]]]);
//# sourceMappingURL=main.25669fab.chunk.js.map