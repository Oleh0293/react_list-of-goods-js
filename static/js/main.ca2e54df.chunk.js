(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(7),c=n.n(s),r=n(6),i=n(8),o=(n(13),n(14),n(4)),a=n.n(o),u=n(1),l=n(0),b="length",d="name",j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];var h=function(){var t=Object(u.useState)(""),e=Object(r.a)(t,2),n=e[0],s=e[1],c=Object(u.useState)(!1),o=Object(r.a)(c,2),h=o[0],g=o[1],p=function(t,e){var n=e.sortField,s=e.isReversed,c=Object(i.a)(t);return n&&c.sort((function(t,e){switch(n){case d:return t.localeCompare(e);case b:return t.length-e.length;default:return 0}})),s?c.reverse():c}(j,{sortField:n,isReversed:h});return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:a()("button is-info",{"is-light":n!==d}),onClick:function(){return s(d)},children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",className:a()("button is-success",{"is-light":n!==b}),onClick:function(){return s(b)},children:"Sort by length"}),Object(l.jsx)("button",{type:"button",className:a()("button is-warning",{"is-light":!h}),onClick:function(){return g(!h)},children:"Reverse"}),(h||n)&&Object(l.jsx)("button",{type:"button",onClick:function(){return s(""),void g(!1)},className:"button is-danger",children:"Reset"})]}),Object(l.jsx)("ul",{children:p.map((function(t){return Object(l.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};c.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ca2e54df.chunk.js.map