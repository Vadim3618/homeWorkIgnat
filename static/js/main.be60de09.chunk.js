(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,function(e,t,a){e.exports={message:"Message_message__1Wxq0",photo:"Message_photo__keWHp",content:"Message_content__28w5T",time:"Message_time__NFvw4",name:"Message_name__2kX0O",error:"Message_error__2NsV-",errorMessage:"Message_errorMessage__3SRx1"}},,,,,function(e,t,a){e.exports={superInput:"SuperInputText_superInput__1_JE_",errorInput:"SuperInputText_errorInput__2xuHx",input:"SuperInputText_input__dNB3e",error:"SuperInputText_error__JzIEZ"}},,function(e,t,a){e.exports={main:"Affair_main__he8Vr",name:"Affair_name__24hjw",priority:"Affair_priority__2T91O"}},function(e,t,a){e.exports={wrapper:"Greeting_wrapper__3-eRQ",error:"Greeting_error__1pP21",errorMessage:"Greeting_errorMessage__d-J-l"}},function(e,t,a){e.exports={default:"SuperButton_default__1sqTv",red:"SuperButton_red__2XQvW",button:"SuperButton_button__2CpiU"}},function(e,t,a){e.exports={blue:"HW4_blue__3nX56",column:"HW4_column__2mGah",testSpanError:"HW4_testSpanError__3sm1Z"}},function(e,t,a){},,function(e,t,a){},,function(e,t,a){e.exports={message:"App_message__3O0jb",photo:"App_photo__3mY2j",content:"App_content__2-P8-",time:"App_time__a5kHX",name:"App_name__2F_Qn"}},function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),o=(a(25),a(19)),i=a.n(o),u=a(2),s=a(5);a(17);function m(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{onClick:function(){return l(!a)}},!a&&r.a.createElement("img",{className:"imgBurger",src:"https://samurai.it-incubator.by/static/media/burgerOpen.12f6bc84.svg"}),a&&r.a.createElement("img",{className:"imgBurger",src:"https://samurai.it-incubator.by/static/media/burgerClose.ed3e982e.svg"})),r.a.createElement("div",{className:a?"navBar active":"navBar"},r.a.createElement("span",null,r.a.createElement(s.b,{className:function(e){return e.isActive?"active":"navBarItem"},to:"/PreJunior"},"PreJunior")),r.a.createElement("span",null,r.a.createElement(s.b,{className:function(e){return e.isActive?"active":"navBarItem"},to:"/Junior"},"Junior")),r.a.createElement("span",null,r.a.createElement(s.b,{className:function(e){return e.isActive?"active":"navBarItem"},to:"/JuniorPlus"},"JuniorPlus"))))}var p=function(){return r.a.createElement("div",null,"Junior")},E=function(){return r.a.createElement("div",null,"JuniorPlus")},d=a(10),v=a(4),f=a.n(v);function _(e){return r.a.createElement("div",{className:f.a.message},r.a.createElement("div",{className:f.a.photo},r.a.createElement("img",{src:e.avatar})),r.a.createElement("div",{className:f.a.content},r.a.createElement("div",{className:f.a.name},e.name),r.a.createElement("div",null,e.message),r.a.createElement("div",{className:f.a.time},e.time)))}var h=function(e){var t=e.addMessage,a=Object(n.useState)('write text and click "Enter"'),l=Object(u.a)(a,2),c=l[0],o=l[1],i=Object(n.useState)(null),s=Object(u.a)(i,2),m=s[0],p=s[1];return r.a.createElement("div",null,r.a.createElement("input",{className:m?f.a.error:"",onFocus:function(){return o("")},value:c,onChange:function(e){o(e.currentTarget.value),p(null)},onKeyPress:function(e){"Enter"===e.key&&""!==c.trim()?(t(c),o("")):p("Title is required")}}),m&&r.a.createElement("div",{className:f.a.errorMessage},m))};var g=function(){var e=Object(n.useState)([{avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Some Name",message:"some text",time:"22:00"}]),t=Object(u.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",a.map((function(e,t){return r.a.createElement(_,{key:t,avatar:e.avatar,name:e.name,message:e.message,time:e.time})})),r.a.createElement("hr",null),r.a.createElement(h,{addMessage:function(e){var t={avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Some Name",message:e,time:"22:00"};l([].concat(Object(d.a)(a),[t]))}}),r.a.createElement("hr",null))},b=a(11),N=a.n(b);var k=function(e){return r.a.createElement("div",{className:N.a.main},r.a.createElement("div",{className:N.a.name},e.affair.name),r.a.createElement("div",{className:N.a.priority},e.affair.priority),r.a.createElement("button",{onClick:function(){return t=e.affair._id,void e.deleteAffairCallback(t);var t}},"X"))};var C=function(e){var t=e.data.map((function(t){return r.a.createElement(k,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,t,r.a.createElement("button",{onClick:function(){return t="all",void e.setFilter(t);var t}},"All"),r.a.createElement("button",{onClick:function(){return t="high",void e.setFilter(t);var t}},"High"),r.a.createElement("button",{onClick:function(){return t="middle",void e.setFilter(t);var t}},"Middle"),r.a.createElement("button",{onClick:function(){return t="low",void e.setFilter(t);var t}},"Low"))},O=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var j=function(){var e=Object(n.useState)(O),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(u.a)(c,2),i=o[0],s=o[1],m=function(e,t){return"all"===t?e:"low"===t?e.filter((function(e){return"low"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):e.filter((function(e){return"middle"===e.priority}))}(a,i);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(C,{data:m,setFilter:s,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},y=a(12),w=a.n(y),S=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?w.a.error:"";return r.a.createElement("div",{className:w.a.wrapper},r.a.createElement("div",{className:w.a.errorMessage},l),r.a.createElement("input",{value:t,onChange:a,className:o,onKeyPress:function(e){"Enter"===e.key&&n()}}),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",null," ",c))},x=function(e){var t=e.users,a=e.addUserCallback,l=Object(n.useState)(""),c=Object(u.a)(l,2),o=c[0],i=c[1],s=Object(n.useState)(""),m=Object(u.a)(s,2),p=m[0],E=m[1],d=t.length;return r.a.createElement(S,{name:o,setNameCallback:function(e){i(e.currentTarget.value),E("")},addUser:function(){o?(a(o),alert("Hello ".concat(o,"!")),i(""),E("")):E("Empty string cannot be a name")},error:p,totalUsers:d})},A=a(28);var J=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(x,{users:a,addUserCallback:function(e){l([].concat(Object(d.a)(a),[{_id:Object(A.a)(),name:e}]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},T=a(7),M=a(9),P=a.n(M),B=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,i=e.spanClassName,u=Object(T.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(P.a.error," ").concat(i||""),m="".concat(P.a.input," ").concat(c?P.a.errorInput:P.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},u)),c&&r.a.createElement("span",{className:s},c))},I=a(14),F=a.n(I),W=a(13),H=a.n(W),U=function(e){var t=e.red,a=e.className,n=Object(T.a)(e,["red","className"]),l="".concat(H.a.button," ").concat(t?H.a.red:H.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:l},n))},X=a(15),G=a.n(X),q=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(T.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(G.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:G.a.spanClassName},l))};var K=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],l=t[1],c=a?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},i=Object(n.useState)(!1),s=Object(u.a)(i,2),m=s[0],p=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:F.a.column},r.a.createElement(B,{value:a,onChangeText:l,onEnter:o,error:c}),r.a.createElement(B,{className:F.a.blue}),r.a.createElement(U,null,"default"),r.a.createElement(U,{red:!0,onClick:o},"delete "),r.a.createElement(U,{disabled:!0},"disabled"),r.a.createElement(q,{checked:m,onChangeChecked:p},"some text "),r.a.createElement(q,{checked:m,onChange:function(e){return p(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Z=function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(j,null),r.a.createElement(J,null),r.a.createElement(K,null))};var Q=function(){return r.a.createElement("div",{className:"notFound"},r.a.createElement("img",{src:"https://www.singhaniainternational.com/imgs/error.jpg",alt:""}))},R=a(1),Y="/PreJunior",V="/Junior",z="/JuniorPlus";var L=function(){return r.a.createElement("div",null,r.a.createElement(R.d,null,r.a.createElement(R.b,{path:"/",element:r.a.createElement(R.a,{to:Y})}),r.a.createElement(R.b,{path:Y,element:r.a.createElement(Z,null)}),r.a.createElement(R.b,{path:V,element:r.a.createElement(p,null)}),r.a.createElement(R.b,{path:z,element:r.a.createElement(E,null)}),r.a.createElement(R.b,{path:"/*",element:r.a.createElement(Q,null)})))};var $=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(m,null),r.a.createElement(L,null)))};var D=function(){return r.a.createElement("div",{className:i.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement($,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.be60de09.chunk.js.map