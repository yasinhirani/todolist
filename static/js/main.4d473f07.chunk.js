(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{17:function(t,e,c){},27:function(t,e,c){},29:function(t,e,c){"use strict";c.r(e);var n=c(0),i=c(5),s=c.n(i),a=(c(17),c(8)),o=c(9),l=c(10),r=c.n(l),j=c(1),u=function(t){return Object(j.jsxs)("div",{className:"list-style",children:[Object(j.jsx)("span",{onClick:t.onclick.bind(undefined,t.list),children:Object(j.jsx)(r.a,{className:"btn-delete"})}),Object(j.jsxs)("li",{children:[" ",t.list," "]})]})};c(27);var b=function(){var t=localStorage.getItem("itemList")?JSON.parse(localStorage.getItem("itemList")):[],e=Object(n.useState)(""),c=Object(o.a)(e,2),i=c[0],s=c[1],l=Object(n.useState)(t),r=Object(o.a)(l,2),b=r[0],d=r[1],m=function(t){t.preventDefault(),d((function(t){return[].concat(Object(a.a)(t),[i])})),s("")};Object(n.useEffect)((function(){localStorage.setItem("itemList",JSON.stringify(b))}),[m]);var O=function(t){var e=Object(a.a)(b),c=e.indexOf(t);e.splice(c,1),d(e),localStorage.setItem("itemList",JSON.stringify(e))};return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("div",{className:"center-div",children:[Object(j.jsx)("h1",{children:"ToDo List"}),Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{type:"text",value:i,onChange:function(t){s(t.target.value)},placeholder:"Add item",autoComplete:"off",name:"todo-item"}),Object(j.jsx)("button",{type:"submit",className:"btn-submit",onClick:m,children:"+"})]}),Object(j.jsx)("ol",{children:b.map((function(t,e){return Object(j.jsx)(u,{item:e,list:t,onclick:O},e)}))})]})})};s.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.4d473f07.chunk.js.map