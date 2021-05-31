(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(t,e,c){t.exports={item:"CartItem_item__19V8n",details:"CartItem_details__2Ou01",quantity:"CartItem_quantity__1vz0a",price:"CartItem_price__2-Ky5",itemprice:"CartItem_itemprice__379Qv",actions:"CartItem_actions__3EE96"}},,,,function(t,e,c){t.exports={item:"ProductItem_item__2LdSV",price:"ProductItem_price__MVTJB",actions:"ProductItem_actions__1jek9"}},function(t,e,c){t.exports={notification:"Notification_notification__oig2s",error:"Notification_error__1F54d",success:"Notification_success__2yxU7"}},,,function(t,e,c){t.exports={button:"CartButton_button__usVLM",badge:"CartButton_badge__1QGZN"}},,function(t,e,c){t.exports={card:"Card_card__UxRhL"}},function(t,e,c){t.exports={cart:"Cart_cart__2qsB2"}},function(t,e,c){t.exports={header:"MainHeader_header__6xR6E"}},function(t,e,c){t.exports={products:"Products_products__3vjTF"}},,,,,,,,,,,function(t,e,c){},,,function(t,e,c){"use strict";c.r(e);var n=c(7),r=c.n(n),i=c(2),a=c(5),s=Object(a.b)({name:"cart",initialState:{items:[],totalQuantity:0,changed:!1},reducers:{replaceCart:function(t,e){t.totalQuantity=e.payload.totalQuantity,t.items=e.payload.items},addItemToCart:function(t,e){var c=e.payload,n=t.items.find((function(t){return t.itemId===c.id}));t.totalQuantity++,t.changed=!0,n?(n.quantity++,n.totalPrice=n.totalPrice+c.price):t.items.push({itemId:c.id,price:c.price,quantity:1,totalPrice:c.price,name:c.title})},removeItemToCart:function(t,e){var c=e.payload,n=t.items.find((function(t){return t.itemId===c}));t.totalQuantity--,t.changed=!0,1===n.quantity?t.items=t.items.filter((function(t){return t.itemId!==c})):(n.quantity--,n.totalPrice=n.totalPrice-n.price)}}}),o=s.actions,u=s,d=Object(a.b)({name:"ui",initialState:{cartIsVisible:!1,notification:null},reducers:{toggle:function(t){t.cartIsVisible=!t.cartIsVisible},showNotification:function(t,e){t.notification={status:e.payload.status,title:e.payload.title,message:e.payload.message}}}}),l=d.actions,j=d,b=Object(a.a)({reducer:{ui:j.reducer,cart:u.reducer}}),f=(c(28),c(1)),p=c(14),h=c.n(p),m=c(0),x=function(t){return Object(m.jsx)("section",{className:"".concat(h.a.card," ").concat(t.className?t.className:""),children:t.children})},O=c(15),_=c.n(O),v=c(4),y=c.n(v),g=function(t){var e=Object(i.b)(),c=t.item,n=c.itemId,r=c.name,a=c.quantity,s=c.totalPrice,u=c.price;return Object(m.jsxs)("li",{className:y.a.item,children:[Object(m.jsxs)("header",{children:[Object(m.jsx)("h3",{children:r}),Object(m.jsxs)("div",{className:y.a.price,children:["$",s.toFixed(2)," ",Object(m.jsxs)("span",{className:y.a.itemprice,children:["($",u.toFixed(2),"/item)"]})]})]}),Object(m.jsxs)("div",{className:y.a.details,children:[Object(m.jsxs)("div",{className:y.a.quantity,children:["x ",Object(m.jsx)("span",{children:a})]}),Object(m.jsxs)("div",{className:y.a.actions,children:[Object(m.jsx)("button",{onClick:function(){e(o.removeItemToCart(n))},children:"-"}),Object(m.jsx)("button",{onClick:function(){e(o.addItemToCart({id:n,title:r,price:u}))},children:"+"})]})]})]})},N=function(t){var e=Object(i.c)((function(t){return t.cart.items}));return Object(m.jsxs)(x,{className:_.a.cart,children:[Object(m.jsx)("h2",{children:"Your Shopping Cart"}),Object(m.jsx)("ul",{children:e.map((function(t){return Object(m.jsx)(g,{item:t},t.id)}))})]})},I=c(12),C=c.n(I),k=function(t){var e=Object(i.b)(),c=Object(i.c)((function(t){return t.cart.totalQuantity}));return Object(m.jsxs)("button",{className:C.a.button,onClick:function(){e(l.toggle())},children:[Object(m.jsx)("span",{children:"My Cart"}),Object(m.jsx)("span",{className:C.a.badge,children:c})]})},w=c(16),T=c.n(w),Q=function(t){return Object(m.jsxs)("header",{className:T.a.header,children:[Object(m.jsx)("h1",{children:"ReduxCart"}),Object(m.jsx)("nav",{children:Object(m.jsx)("ul",{children:Object(m.jsx)("li",{children:Object(m.jsx)(k,{})})})})]})},S=function(t){return Object(m.jsxs)(f.Fragment,{children:[Object(m.jsx)(Q,{}),Object(m.jsx)("main",{children:t.children})]})},P=c(8),E=c.n(P),q=function(t){var e=Object(i.b)(),c=t.id,n=t.title,r=t.price,a=t.description;return Object(m.jsx)("li",{className:E.a.item,children:Object(m.jsxs)(x,{children:[Object(m.jsxs)("header",{children:[Object(m.jsx)("h3",{children:n}),Object(m.jsxs)("div",{className:E.a.price,children:["$",r.toFixed(2)]})]}),Object(m.jsx)("p",{children:a}),Object(m.jsx)("div",{className:E.a.actions,children:Object(m.jsx)("button",{onClick:function(){e(o.addItemToCart({id:c,title:n,price:r}))},children:"Add to Cart"})})]})})},B=c(17),F=c.n(B),V=[{id:"p1",price:6,title:"My First Book",description:"The first book I ever wrote"},{id:"p2",price:5,title:"My Second Book",description:"The second book I ever wrote"},{id:"p3",price:4,title:"My Third Book",description:"The Third book I ever wrote"}],M=function(t){return Object(m.jsxs)("section",{className:F.a.products,children:[Object(m.jsx)("h2",{children:"Buy your favorite products"}),Object(m.jsx)("ul",{children:V.map((function(t){return Object(m.jsx)(q,{id:t.id,title:t.title,price:t.price,description:t.description},t.id)}))})]})},J=c(9),L=c.n(J),R=function(t){var e="";"error"===t.status&&(e=L.a.error),"success"===t.status&&(e=L.a.success);var c="".concat(L.a.notification," ").concat(e);return Object(m.jsxs)("section",{className:c,children:[Object(m.jsx)("h2",{children:t.title}),Object(m.jsx)("p",{children:t.message})]})},U=c(3),$=c.n(U),z=c(6),A=!0;var G=function(){var t=Object(i.b)(),e=Object(i.c)((function(t){return t.ui.cartIsVisible})),c=Object(i.c)((function(t){return t.cart})),n=Object(i.c)((function(t){return t.ui.notification}));return Object(f.useEffect)((function(){t(function(){var t=Object(z.a)($.a.mark((function t(e){var c,n;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=function(){var t=Object(z.a)($.a.mark((function t(){var e,c;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://redux-cart-19690-default-rtdb.firebaseio.com/cart.json");case 2:if((e=t.sent).ok){t.next=5;break}throw new Error("Could not fetch cart data!");case 5:return t.next=7,e.json();case 7:return c=t.sent,t.abrupt("return",c);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.prev=1,t.next=4,c();case 4:n=t.sent,console.log(n),e(o.replaceCart({items:n.items||[],totalQuantity:n.totalQuantity})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(l.showNotification({status:"error",title:"Error",message:"fetching cart data failed!"}));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}())}),[t]),Object(f.useEffect)((function(){A?A=!1:c.changed&&t(function(t){return function(){var e=Object(z.a)($.a.mark((function e(c){var n;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(l.showNotification({status:"pending",title:"Sending....",message:"Sending cart data!"})),n=function(){var e=Object(z.a)($.a.mark((function e(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://redux-cart-19690-default-rtdb.firebaseio.com/cart.json",{method:"PUT",body:JSON.stringify({items:t.items,totalQuantity:t.totalQuantity})});case 2:if(e.sent.ok){e.next=5;break}throw new Error("Sending cart data is failed.");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=2,e.next=5,n();case 5:c(l.showNotification({status:"success",title:"Success",message:"Sent cart data successfully!"})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),c(l.showNotification({status:"error",title:"Error",message:"Sending cart data failed!"}));case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}()}(c))}),[c,t]),Object(m.jsxs)(f.Fragment,{children:[n&&Object(m.jsx)(R,{staus:n.status,title:n.title,message:n.message}),Object(m.jsxs)(S,{children:[e&&Object(m.jsx)(N,{}),Object(m.jsx)(M,{})]})]})};r.a.render(Object(m.jsx)(i.a,{store:b,children:Object(m.jsx)(G,{})}),document.getElementById("root"))}],[[31,1,2]]]);
//# sourceMappingURL=main.9c590ae4.chunk.js.map