(this["webpackJsonpsimple-react"]=this["webpackJsonpsimple-react"]||[]).push([[0],{12:function(t,e,s){},13:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var n=s(1),c=s.n(n),a=s(6),i=s.n(a),o=(s(12),s(2)),r=(s(13),s(7)),u=s(0);function l(t){var e=0;if(0===t.length)return e;for(var s=0;s<t.length;s++){e=(e<<5)-e+t.charCodeAt(s),e&=e}return e}var j=function(t){return Object(u.jsx)("form",{children:Object(u.jsxs)("div",{className:"input__box",children:[Object(u.jsx)("input",{value:t.inputName,onChange:function(e){t.setInputName(e.target.value)},type:"text",placeholder:"Name",className:"todo-input"}),Object(u.jsx)("input",{value:t.inputEmail,onChange:function(e){t.setInputEmail(e.target.value)},type:"text",placeholder:"Email",className:"todo-input"}),Object(u.jsx)("input",{value:t.inputDescription,onChange:function(e){t.setInputDescription(e.target.value)},type:"text",placeholder:"Description",className:"todo-input"}),Object(u.jsx)("input",{value:t.inputTags,onChange:function(e){t.setInputTags(e.target.value)},type:"text",placeholder:"Tags",className:"todo-input"}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault(),t.setPosts([].concat(Object(r.a)(t.posts),[{show:!0,id:l(t.inputDescription),name:t.inputName,email:t.inputEmail,des:t.inputDescription,tags:t.inputTags}])),t.setInputName(""),t.setInputEmail(""),t.setInputDescription(""),t.setInputTags("")},className:"todo-button",type:"submit",children:Object(u.jsx)("i",{className:"fas fa-plus-square"})})]})})},p=function(t){return Object(u.jsxs)("div",{className:"todo",children:[Object(u.jsx)("li",{className:"todo-item",children:Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Name:"}),"  ",t.name]})}),Object(u.jsx)("li",{className:"todo-item",children:Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Email:"})," ",t.email]})}),Object(u.jsx)("li",{className:"todo-item",children:Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Des:"})," ",t.des]})}),Object(u.jsx)("li",{className:"todo-item",children:Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Tags:"})," ",t.tags]})})]})},d=function(t){return Object(u.jsx)("div",{className:"todo-container",children:Object(u.jsx)("ul",{className:"todo-list",children:t.posts.map((function(t){return Object(u.jsx)(p,{name:t.name,email:t.email,des:t.des,tags:t.tags},t.id)}))})})};var b=function(){var t=Object(n.useState)(""),e=Object(o.a)(t,2),s=e[0],c=e[1],a=Object(n.useState)(""),i=Object(o.a)(a,2),r=i[0],l=i[1],p=Object(n.useState)(""),b=Object(o.a)(p,2),m=b[0],O=b[1],h=Object(n.useState)(""),x=Object(o.a)(h,2),g=x[0],f=x[1],N=Object(n.useState)([]),v=Object(o.a)(N,2),I=v[0],D=v[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{children:Object(u.jsx)("h1",{children:"Tinder...for projects"})}),Object(u.jsx)(j,{inputName:s,inputEmail:r,inputDescription:m,inputTags:g,setInputName:c,setInputEmail:l,setInputDescription:O,setInputTags:f,setPosts:D,posts:I}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(d,{posts:I})]})},m=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,16)).then((function(e){var s=e.getCLS,n=e.getFID,c=e.getFCP,a=e.getLCP,i=e.getTTFB;s(t),n(t),c(t),a(t),i(t)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.10210280.chunk.js.map