(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{229:function(e,t,c){},230:function(e,t,c){},231:function(e,t,c){},232:function(e,t,c){},233:function(e,t,c){},234:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(31),s=c.n(a),i=c(34),o=c(127),j=c(242),l=c(245),u=c(41),d=c(13),p=c(239),b=c(1),h=p.a.Step,O=function(e){return Object(b.jsxs)(p.a,{current:e.step,responsive:!0,children:[Object(b.jsx)(h,{status:"finish",title:"signin",description:"User must have signed in already"}),Object(b.jsx)(h,{status:e.step1?e.step1:"wait",title:"shipping",description:"User enters the shipping info"}),Object(b.jsx)(h,{status:e.step2?e.step2:"wait",title:"payment",description:"User makes payment. The white region signifies the choosen"}),Object(b.jsx)(h,{status:e.step3?e.step3:"wait",title:"Order",description:"User makes his order"}),Object(b.jsx)(h,{status:e.step4?e.step4:"wait",title:"Order detail",description:"Order detail"})]})},m=c(238),f=c(240),x=c(243),g=c(15),v=c(20),y=c(17),N=c.n(y),w=c(28),I=function(){var e=Object(g.c)((function(e){return e.user.userInfo})),t=Object(g.c)((function(e){return e.cart.cartItems})),c=Object(v.f)(),r=Object(g.b)(),a=Object(n.useState)({username:"",address:"",country:"",city:"",postal:""}),s=Object(i.a)(a,2),j=s[0],l=s[1],p=function(e){var t=e.target.name,c=e.target.value;l(Object(d.a)(Object(d.a)({},j),{},Object(u.a)({},t,c)))};return Object(b.jsx)(b.Fragment,{children:e[0]&&t.length>0?Object(b.jsxs)("div",{children:[Object(b.jsx)(O,{step:1,step1:"process"}),Object(b.jsxs)(m.a,{labelCol:{span:6},wrapperCol:{span:14},children:[Object(b.jsx)(m.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your FullName!"}],children:Object(b.jsx)(f.a,{prefix:Object(b.jsx)(x.a,{}),name:"username",value:j.username,onChange:p})}),Object(b.jsx)(m.a.Item,{name:"address",label:"Address",rules:[{required:!0,message:"Enter your Address"}],children:Object(b.jsx)(f.a,{name:"address",value:j.address,onChange:p})}),Object(b.jsx)(m.a.Item,{name:"city",label:"City",rules:[{required:!0,message:"Enter your city location"}],children:Object(b.jsx)(f.a,{name:"city",value:j.city,onChange:p})}),Object(b.jsx)(m.a.Item,{name:"country",label:"Country",rules:[{required:!0,message:"Enter your Country"}],children:Object(b.jsx)(f.a,{name:"country",value:j.country,onChange:p})}),Object(b.jsx)(m.a.Item,{name:"postal",label:"Postal",rules:[{required:!0,message:"Enter your Postal code"}],children:Object(b.jsx)(f.a,{min:0,size:"small",value:j.postal,name:"postal",onChange:p})}),Object(b.jsx)(m.a.Item,{name:"button",wrapperCol:{offset:12,span:12},children:Object(b.jsx)(o.a,{type:"primary",onClick:function(){var e;j&&(r((e=j,function(){var t=Object(w.a)(N.a.mark((function t(c,n){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c({type:"shipping",payload:e}),localStorage.setItem("shippingInfo",JSON.stringify(n().shipping.shippingInfo));case 2:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}())),l({username:"",city:"",address:"",postal:"",country:""}),c.push("/payment"))},children:"Continue"})})]})]}):c.push("/sign-in")})},k=c(27),C=function(e){var t=e.rating,c=e.numReviews;return Object(b.jsxs)("div",{className:"rating",children:[Object(b.jsx)("span",{children:Object(b.jsx)("i",{className:t>=1?"fa fa-star":t>=.5?"fa fa-star-half-o":"fa fa-star-o"})}),Object(b.jsx)("span",{children:Object(b.jsx)("i",{className:t>=2?"fa fa-star":t>=1.5?"fa fa-star-half-o":"fa fa-star-o"})}),Object(b.jsx)("span",{children:Object(b.jsx)("i",{className:t>=3?"fa fa-star":t>=2.5?"fa fa-star-half-o":"fa fa-star-o"})}),Object(b.jsx)("span",{children:Object(b.jsx)("i",{className:t>=4?"fa fa-star":t>=3.5?"fa fa-star-half-o":"fa fa-star-o"})}),Object(b.jsx)("span",{children:Object(b.jsx)("i",{className:t>=5?"fa fa-star":t>=4.5?"fa fa-star-half-o":"fa fa-star-o"})}),Object(b.jsx)("span",{children:"".concat(c," Reviews")})]})},S=function(e){var t=e.price,c=e.image,n=e.numReviews,r=e.rating,a=e._id;return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("a",{href:"/products/".concat(a),children:Object(b.jsx)("img",{src:c,className:"card-image",alt:"mens pant"})}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("div",{className:"name",children:Object(b.jsx)("a",{href:"/products/".concat(a),children:Object(b.jsx)("h2",{children:"Mens pant"})})}),Object(b.jsx)(C,{rating:r,numReviews:n}),Object(b.jsx)("div",{className:"price",children:t})]})]},a)},_="get_products",E="product_view_success",q="product_view_loading",R="remove_from_cart",A=c(52),J=function(){var e=Object(g.b)();Object(n.useEffect)((function(){e(function(){var e=Object(w.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A({method:"GET",url:"https://ekenecom.herokuapp.com/api/products"}).then((function(e){var c=e.data;t({type:_,payload:c.data})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(g.c)((function(e){return e.products})).products;return Object(b.jsx)("div",{className:"row center",children:t.map((function(e){return Object(b.jsx)(S,Object(d.a)({},e),e._id)}))})},P=c(45),T=c(52),U=function(e){return function(){var t=Object(w.a)(N.a.mark((function t(c){var n,r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c({type:q}),t.prev=1,t.next=4,T.get("https://ekenecom.herokuapp.com/api/products/".concat(e));case 4:n=t.sent,r=n.data,c({type:E,payload:r.data}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},F=c(237),z=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("span",{children:[Object(b.jsx)(F.a,{}),"Loading"]})})},B=function(){var e=Object(v.g)().id,t=Object(v.f)(),c=Object(g.b)(),r=Object(n.useState)(1),a=Object(i.a)(r,2),s=a[0],o=a[1];Object(n.useEffect)((function(){c(U(e))}),[c,e]);var j=Object(g.c)((function(e){return e.product_view})),l=j.single_product,u=j.loading,d=l[0];return Object(b.jsx)("div",{children:u?Object(b.jsx)(z,{}):Object(b.jsxs)("div",{className:"row top",children:[Object(b.jsx)(k.b,{to:"/",children:Object(b.jsxs)("span",{children:[Object(b.jsx)("i",{class:"fa fa-arrow-left","aria-hidden":"true"})," Back to Home"]})}),Object(b.jsx)("div",{className:"col-2",children:Object(b.jsx)("img",{className:"large",src:d.image,alt:d.name})}),Object(b.jsx)("div",{className:"col-1",children:Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:["Name: ",d.name]}),Object(b.jsx)("li",{children:Object(b.jsx)(C,{rating:d.rating,numReviews:d.numReviews})}),Object(b.jsxs)("li",{children:["Description: ",d.description]}),Object(b.jsxs)("li",{children:["Price: ",d.price]})]})}),Object(b.jsx)("div",{className:"col-1",children:Object(b.jsx)("div",{className:"card card-body",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{children:"Price"}),Object(b.jsx)("div",{children:d.price})]})}),Object(b.jsx)("li",{children:Object(b.jsx)("div",{children:Object(b.jsx)(C,{rating:d.rating,numReviews:d.numReviews})})}),Object(b.jsx)("li",{children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{children:"Stock"}),Object(b.jsx)("div",{children:Object(b.jsxs)("span",{className:d.inStockCount>=5?"primary":d.inStockCount<5&&d.inStockCount>0?"primary low":"danger",children:["InStock(",d.inStockCount,")"]})})]})}),d.inStockCount>0&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("li",{children:[Object(b.jsx)("div",{children:"Qty:"}),Object(b.jsx)("div",{children:Object(b.jsx)("select",{value:s,onChange:function(e){return o(e.target.value)},children:Object(P.a)(Array(d.inStockCount).keys()).map((function(e){return Object(b.jsx)("option",{value:e+1,children:e+1},e+1)}))})})]})}),Object(b.jsx)("li",{className:"row center",children:Object(b.jsx)("button",{type:"button",className:"btn",onClick:function(c){t.push("/cart/".concat(e,"?qty=").concat(s))},children:"Add to cart"})})]})]})})})]})})},G=c(52),M=function(e,t){return function(){var c=Object(w.a)(N.a.mark((function c(n,r){var a,s,i;return N.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,G.get("https://ekenecom.herokuapp.com/products/".concat(e));case 3:a=c.sent,s=a.data,i=s.data[0],n({type:"addToCart",payload:{name:i.name,price:i.price,image:i.image,product:i._id,qty:t}}),localStorage.setItem("cartItems",JSON.stringify(r().cart.cartItems)),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(0),console.log(c.t0.message);case 13:case"end":return c.stop()}}),c,null,[[0,10]])})));return function(e,t){return c.apply(this,arguments)}}()},D=function(e){return Object(b.jsx)("div",{className:"error",children:e.children})},L=(c(229),c(230),function(e){return function(){var t=Object(w.a)(N.a.mark((function t(c,n){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c({type:R,payload:e}),localStorage.setItem("cartItems",JSON.stringify(n().cart.cartItems));case 2:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}()}),V=function(){var e=Object(g.b)(),t=Object(v.g)().id,c=Object(v.f)(),r=c.location.search.split("=")[1],a=Object(g.c)((function(e){return e.cart})).cartItems;return Object(n.useEffect)((function(){e(M(t,r))}),[e,t,r]),Object(b.jsxs)("div",{className:"main_block",children:[Object(b.jsx)("div",{className:"col-1",children:0===a.length?Object(b.jsxs)(D,{children:["Cart Empty ",Object(b.jsx)(k.b,{to:"/",children:"Go shopping"})]}):Object(b.jsx)("ul",{children:a.map((function(t){return Object(b.jsxs)("main",{className:"main",children:[Object(b.jsx)("div",{className:"cartitems contain",children:Object(b.jsx)("img",{src:t.image,alt:t.name,className:"cartitems contain image"})}),Object(b.jsx)("div",{className:"cartitems contain name",children:Object(b.jsx)(k.b,{to:"/products/".concat(t.product),children:t.name})}),Object(b.jsx)("div",{className:"cartitems contain",children:Object(b.jsx)("select",{value:t.qty,onChange:function(c){return e(M(t.product,Number(c.target.value)))},children:Object(P.a)(Array(Number(t.qty)).keys()).map((function(e){return Object(b.jsx)("option",{value:e+1,children:e+1},e+1)}))})}),Object(b.jsx)("div",{className:"cartitems contain price",children:t.price}),Object(b.jsx)("div",{className:"cartitems contain",children:Object(b.jsx)("button",{type:"button",className:"cartitems contain button",onClick:function(){return e(L(t.product))},children:"remove"})})]},t.product)}))})}),Object(b.jsxs)("div",{className:"col-2 cartscreen",children:[Object(b.jsxs)("div",{children:["Number of quantities:",a.reduce((function(e,t){return e+Number(t.qty)}),0),"($total price:"," ",a.reduce((function(e,t){return e+Number(t.qty*t.price)}),0),")"]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"button",className:"col-2_button",disabled:!(a.length>0),onClick:function(){return c.push("/sign-in?redirect=shipping")},children:"Proceed to checkout"})})]})]})},X=c(52),$=(c(231),function(){var e=Object(g.b)(),t=(Object(g.c)((function(e){return e.user.userInfo})),Object(n.useState)({email:"",password:""})),c=Object(i.a)(t,2),a=c[0],s=c[1],o=function(e){var t=e.target.name,c=e.target.value;s(Object(d.a)(Object(d.a)({},a),{},Object(u.a)({},t,c)))},j=Object(v.f)();return Object(b.jsx)(r.a.Fragment,{children:Object(b.jsx)("div",{className:"form_block",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{type:"text",name:"email",value:a.email,placeholder:"Enter your email",onChange:o}),Object(b.jsx)("input",{type:"password",name:"password",value:a.password,placeholder:"Enter your password",onChange:o}),Object(b.jsx)("button",{type:"button",onClick:function(){var t;a?(e((t=a,function(){var e=Object(w.a)(N.a.mark((function e(c,n){var r,a,s,i;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.email,a=t.password,e.next=3,X.post("https://ekenecom.herokuapp.com/api/users/signin",{email:r,password:a}).catch((function(e){return c({type:"error",payload:e.message})}));case 3:s=e.sent;try{i=s.data,c({type:"signIn",payload:i}),localStorage.setItem("userInfo",JSON.stringify(n().user.userInfo))}catch(o){c({type:"error",payload:o.message})}case 5:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}())),s({email:"",password:""}),"shipping"==j.location.search.split("=")[1]&&j.push("/shipping")):alert("Enter your email or password")},children:"Signin"}),Object(b.jsxs)("p",{children:["Create an account? ",Object(b.jsx)(k.b,{to:"/Register",children:"Register"})]})]})})})}),H=c(52),Q=function(){var e=Object(n.useState)({firstname:"",lastname:"",email:"",password:""}),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(g.b)(),o=function(e){var t=e.target.name,n=e.target.value;a(Object(d.a)(Object(d.a)({},c),{},Object(u.a)({},t,n)))};return Object(b.jsx)(r.a.Fragment,{children:Object(b.jsx)("div",{className:"form_block",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{type:"text",name:"firstname",placeholder:"Firstname",value:c.firstname,onChange:o}),Object(b.jsx)("input",{type:"text",name:"lastname",placeholder:"Lastname",value:c.lastname,onChange:o}),Object(b.jsx)("input",{type:"text",name:"email",placeholder:"a@gmail.com",value:c.email,onChange:o}),Object(b.jsx)("input",{type:"password",name:"password",placeholder:"Password",value:c.password,onChange:o}),Object(b.jsx)("button",{type:"button",onClick:function(e){var t;s((t=c,function(){var e=Object(w.a)(N.a.mark((function e(c){var n,r,a,s,i,o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.firstname,r=t.lastname,a=t.email,s=t.password,i=n+" "+r,o=H.post("https://ekenecom.herokuapp.com/api/users/register",{username:i,email:a,password:s}).catch((function(e){return c({type:"error",payload:e.message})})),c({type:"register",payload:o});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),a({firstname:"",lastname:"",email:"",password:""})},children:"Register"})]})})})},K=c(241),W=c(67),Y=function(){var e=Object(g.c)((function(e){return e.shipping.shippingInfo})),t=Object(v.f)(),c=Object(n.useState)("paypal"),r=Object(i.a)(c,2),a=r[0],s=r[1],o=Object(n.useState)(!1),j=Object(i.a)(o,2),l=j[0],d=j[1],p=function(e){s(e.target.value),localStorage.setItem("payment",JSON.stringify(a)),d(!0),setTimeout((function(){t.push("/make_order")}),9e3)},h=Object(b.jsx)(W.a,{spin:!0,style:{fontSize:24}});return Object(b.jsx)(b.Fragment,{children:e.username?Object(b.jsxs)("div",{children:[Object(b.jsx)(O,Object(u.a)({status:"process",step1:"finish",step2:"process"},"status","finish")),Object(b.jsxs)("div",{style:{position:"relative"},children:[l?Object(b.jsx)(F.a,{indicator:h}):"",Object(b.jsxs)(K.a.Group,{defaultValue:"s",buttonStyle:"solid",style:{margin:"10% 30%"},children:[Object(b.jsx)(K.a.Button,{value:"stripe",onChange:p,children:"Stripe"}),Object(b.jsx)(K.a.Button,{value:"paypal",onChange:p,children:"Paypal"})]})]})]}):t.push("/shipping")})},Z=(c(232),c(244)),ee=(c(52),function(){var e=Object(g.c)((function(e){return e.cart})).cartItems,t=Object(g.b)(),c=Object(v.f)(),n=Object(g.c)((function(e){return e.shipping})).shippingInfo,r=n.address+" "+n.city.charAt(0).toUpperCase()+n.city.slice(1)+","+n.country.charAt(0).toUpperCase()+n.country.slice(1)+","+n.postal,a=localStorage.getItem("payment"),s=e.reduce((function(e,t){return e+Number(t.qty*t.price)}),0);Number(.1*s*5);return Object(b.jsxs)("div",{children:[Object(b.jsx)(O,{step:4,step3:"process",step1:"finish",step2:"finish"}),Object(b.jsxs)("div",{className:"Order_Container",children:[Object(b.jsxs)("div",{className:"i1",children:[Object(b.jsx)("h3",{children:"Shipping"}),Object(b.jsxs)("h5",{children:["Name: ",n.username]}),Object(b.jsxs)("h5",{children:["Address:",r]})]}),Object(b.jsxs)("div",{className:"i3",children:[Object(b.jsx)("h3",{children:"Order Summary"}),Object(b.jsxs)("h5",{children:["Order price:",e.reduce((function(e,t){return e+Number(t.qty+t.price)}),0)]}),Object(b.jsx)("h5",{children:"Order Gst: 10%"}),Object(b.jsx)("h5",{children:"Tax: $5"}),Object(b.jsxs)("h5",{children:["Total price:",Number(.1*s*5)]}),Object(b.jsx)(o.a,{type:"primary",onClick:function(){t(function(){var e=Object(w.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"request"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),c.push("/order_detail")},icon:Object(b.jsx)(Z.a,{}),children:"Make Order"})]}),Object(b.jsxs)("div",{className:"i2",children:[Object(b.jsx)("h3",{children:"Payment"}),Object(b.jsxs)("h5",{children:["Method:",a]})]}),Object(b.jsxs)("div",{className:"i4",children:[Object(b.jsx)("h3",{children:"Order Item"}),Object(b.jsx)("div",{children:Object(b.jsx)("ul",{children:e.map((function(e){return Object(b.jsxs)("main",{className:"main",children:[Object(b.jsx)("div",{className:"cartitems contain",children:Object(b.jsx)("img",{src:e.image,alt:e.name,className:"cartitems contain image"})}),Object(b.jsx)("div",{className:"cartitems contain name",children:Object(b.jsx)(k.b,{to:"/products/".concat(e.product),children:e.name})}),Object(b.jsx)("div",{className:"cartitems contain",children:Object(b.jsx)("select",{value:e.qty,onChange:function(c){return t(M(e.product,Number(c.target.value)))},children:Object(P.a)(Array(Number(e.qty)).keys()).map((function(e){return Object(b.jsx)("option",{value:e+1,children:e+1},e+1)}))})}),Object(b.jsx)("div",{className:"cartitems contain price",children:e.price}),Object(b.jsx)("div",{className:"cartitems contain",children:Object(b.jsx)("button",{type:"button",className:"cartitems contain button",onClick:function(){return t(L(e.product))},children:"remove"})})]},e.product)}))})})]})]})]})}),te=function(){Object(v.f)();var e=Object(g.c)((function(e){return e.cart})).cartItems,t=Object(g.c)((function(e){return e.user})).userInfo,c=Object(g.b)(),r=Object(n.useState)(!1),a=Object(i.a)(r,2),s=a[0],u=a[1];return Object(b.jsx)(k.a,{children:Object(b.jsxs)("div",{className:"grid-container",children:[Object(b.jsxs)("header",{className:"row",children:[Object(b.jsx)("div",{children:Object(b.jsx)(k.b,{to:"/",className:"brand",children:"Chizzy"})}),Object(b.jsxs)("div",{children:[Object(b.jsxs)(k.b,{to:"/cart",children:["cart",e.length>0&&Object(b.jsx)("span",{className:"badge",children:e.length})]}),t.length>0?Object(b.jsx)(o.a,{shape:"circle",style:{backgroundColor:"orange",color:"white"},onClick:function(){u(!0)},children:t[0].username.split(" ")[0].charAt(0).concat(t[0].username.split(" ")[1].charAt(0))}):Object(b.jsx)(k.b,{to:"/sign-in",children:"sign-in"})]})]}),Object(b.jsxs)(j.a,{title:"Settings",placement:"left",visible:s,onClose:function(){u(!1)},headerStyle:{backgroundColor:"#203040"},bodyStyle:{backgroundColor:"white"},closeIcon:Object(b.jsx)(l.a,{}),children:[t.length>0?Object(b.jsx)(k.b,{to:"#",children:t[0].username}):Object(b.jsx)("p",{}),Object(b.jsx)("p",{}),Object(b.jsx)(k.b,{to:"/",onClick:function(){c(function(){var e=Object(w.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("userInfo"),localStorage.removeItem("cartItems");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),window.location.reload(!0)},children:Object(b.jsx)("i",{className:"fa fa-sign-out","aria-hidden":"true",children:"Signout"})})]},"left"),Object(b.jsx)("main",{children:Object(b.jsxs)(v.c,{children:[Object(b.jsx)(v.a,{path:"/",exact:!0,children:Object(b.jsx)(J,{})}),Object(b.jsx)(v.a,{path:"/products/:id",children:Object(b.jsx)(B,{})}),Object(b.jsx)(v.a,{path:"/cart/:id?",children:Object(b.jsx)(V,{})}),Object(b.jsx)(v.a,{path:"/sign-in",children:Object(b.jsx)($,{})}),Object(b.jsx)(v.a,{path:"/Register",children:Object(b.jsx)(Q,{})}),Object(b.jsx)(v.a,{path:"/shipping",children:Object(b.jsx)(I,{})}),Object(b.jsx)(v.a,{path:"/payment",children:Object(b.jsx)(Y,{})}),Object(b.jsx)(v.a,{path:"/make_order",children:Object(b.jsx)(ee,{})})]})}),Object(b.jsx)("footer",{className:"row center",children:Object(b.jsx)("p",{children:"@All right reserved"})})]})})},ce=(c(233),c(68)),ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(d.a)(Object(d.a)({},e),{},{products:t.payload});default:return e}},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{single_product:{},loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case E:return Object(d.a)(Object(d.a)({},e),{},{single_product:t.payload,loading:!1});default:return e}},ae=c(125),se=Object(ce.b)({products:ne,product_view:re,cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"addToCart":var c=t.payload,n=e.cartItems.find((function(e){return e.product===c.product}));return n?Object(d.a)(Object(d.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===n.product?c:e}))}):Object(d.a)(Object(d.a)({},e),{},{cartItems:[].concat(Object(P.a)(e.cartItems),[c])});case R:var r=t.payload,a=e.cartItems.filter((function(e){return e.product!==r}));return localStorage.removeItem("cartItems"),Object(d.a)(Object(d.a)({},e),{},{cartItems:a});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{userInfo:[],error:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"signIn":var c=t.payload.user;return Object(d.a)(Object(d.a)({},e),{},{userInfo:c});case"error":return Object(d.a)(Object(d.a)({},e),{},{error:t.payload});default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"register":return Object(d.a)(Object(d.a)({},e),{},{user:t.payload});default:return e}},shipping:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{shippingInfo:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"shipping":return Object(d.a)(Object(d.a)({},e),{},{shippingInfo:t.payload});default:return e}}}),ie=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ce.c,oe={cart:{cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]},user:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):[]},shipping:{shippingInfo:localStorage.getItem("shipping")?JSON.parse(localStorage.getItem("shipping")):[]}},je=Object(ce.d)(se,oe,ie(Object(ce.a)(ae.a))),le=function(){return Object(b.jsx)(g.a,{store:je,children:Object(b.jsx)(te,{})})};s.a.render(Object(b.jsx)(le,{}),document.getElementById("root"))}},[[234,1,2]]]);
//# sourceMappingURL=main.820dfe29.chunk.js.map