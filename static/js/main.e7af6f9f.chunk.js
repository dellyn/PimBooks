(this["webpackJsonppim-books"]=this["webpackJsonppim-books"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n(1),r=n.n(s),a=n(6),i=n.n(a),o=(n(12),n(2)),u=n(3),l=n.n(u),j=n(4),b="https://www.googleapis.com/books/v1/volumes?q=",O="AIzaSyCk0s2_fiQKK0hX5PB6pYk8srDqOO6-3Ds",f=function(){var t=Object(j.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:if((n=t.sent).ok){t.next=5;break}throw new Error("Could not fetch ".concat(e," +, re\u0441eived ").concat(n.status));case 5:return t.next=7,n.json();case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(j.a)(l.a.mark((function t(e,n){var c,s,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c="&startIndex=0&maxResults=".concat(n,"&"),s=A(b,e,c,O),t.next=4,f(s);case 4:return r=t.sent,t.abrupt("return",r.items.map(x));case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),m=function(){var t=Object(j.a)(l.a.mark((function t(e){var n,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=A(b,e,"&startIndex=0&maxResults=8&",O),t.next=3,f(n);case 3:return c=t.sent,t.abrupt("return",c.items.map(p));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),A=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce((function(t,e){return t+e}))},p=function(t){var e=t.volumeInfo;return{title:e.title,infoLink:e&&e.infoLink||"/"}},x=function(t){var e=t.volumeInfo,n=e.imageLinks;return{title:e.title,infoLink:e&&e.infoLink||"/",imageLinks:n&&n.thumbnail||"data:image/png;base64,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"}},v=(n(14),function(t){return Object(c.jsx)("div",{className:"preloader",children:Object(c.jsx)("div",{className:"loadingio-spinner-eclipse-jj1coo66vk",children:Object(c.jsx)("div",{className:"ldio-27z186wqjt5",children:Object(c.jsx)("div",{})})})})}),d=(n(15),function(){var t=Object(s.useState)(10),e=Object(o.a)(t,1)[0],n=Object(s.useState)(!1),r=Object(o.a)(n,2),a=r[0],i=r[1],u=Object(s.useState)([]),l=Object(o.a)(u,2),j=l[0],b=l[1],O=Object(s.useState)(""),f=Object(o.a)(O,2),A=f[0],p=f[1],x=Object(s.useState)(),d=Object(o.a)(x,2),g=d[0],M=d[1],w=Object(s.useState)(!1),S=Object(o.a)(w,2),N=S[0],k=S[1],G=Object(s.useState)(!1),y=Object(o.a)(G,2),Z=y[0],P=y[1],D=Object(s.useState)(e),F=Object(o.a)(D,2),L=F[0],X=F[1],U=Object(s.useState)([]),V=Object(o.a)(U,2),C=V[0],T=V[1],E=Object(s.useState)(!1),I=Object(o.a)(E,2),Y=I[0],K=I[1],q=Object(s.useState)(""),Q=Object(o.a)(q,2),R=Q[0],W=Q[1],H=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:L,c=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s=A.trim();console.log(A,A.length),console.log(s,s.length),t(s,n).then((function(t){i(!1),e(t),k(!1),K(!1),P(c)})).catch((function(){i(!1),k(!0),P(!0),K(!1),T([])}))};Object(s.useEffect)((function(){if(k(!1),A){var t=setTimeout((function(){H(m,T)}),500);return M(t),function(){clearTimeout(t)}}T([])}),[A]),Object(s.useEffect)((function(){W(A)}),[j]);var z=function(){if(L>=10&&L<=30){var t=L+e;X(t),K(!0),H(h,b,t)}},B=function(t,e){if(t.length>e){var n=0,c="";return t.split(" ").forEach((function(t){if((n+=t.length)<=e)return c+=" "+t})),c+".."}return t},J=j.map((function(t,e){var n=t.imageLinks,s=B(t.title,20),r=t.infoLink;return Object(c.jsx)("li",{className:"result-book",children:Object(c.jsxs)("a",{href:r,children:[Object(c.jsx)("img",{src:n,title:t.title,alt:s}),Object(c.jsx)("p",{children:s})]})},e)})),_=C.map((function(t,e){var n=B(t.title,40),s=t.infoLink;return Object(c.jsx)("li",{children:Object(c.jsxs)("a",{href:s,className:"search-live-list-item",children:[Object(c.jsx)("img",{src:"https://www.flaticon.com/svg/static/icons/svg/482/482631.svg",alt:"search"}),n]})},e)})),$=A&&N&&A!==R,tt=Z&&0!==C.length||A&&N,et=function(){var t=j.length;return!Y&&t<40&&!a&&t===L?Object(c.jsx)("button",{onClick:z,className:"more-books-btn",children:"Show more books"}):Y?Object(c.jsx)(v,{}):null},nt=function(){return Object(c.jsxs)("li",{className:"search-live-list-item results-not-found",children:[Object(c.jsx)("img",{src:"https://www.flaticon.com/svg/static/icons/svg/482/482631.svg",alt:"search"}),'No books were found for "',Object(c.jsx)("b",{children:A}),'"']})};return Object(c.jsxs)("div",{className:tt?"search-live search":"search",children:[Object(c.jsxs)("form",{action:"#",onSubmit:function(t){t.preventDefault(),A&&A!==R&&!N&&(H(h,b,L,!1),i(!0),T([]),clearTimeout(g))},children:[Object(c.jsxs)("div",{className:"search-labels",children:[Object(c.jsx)("input",{className:"search-labels-input",type:"text",onChange:function(t){var e=t.target.value;p(e)},value:A,placeholder:"Search",autoFocus:!0}),Object(c.jsx)("input",{className:"search-labels-button",type:"submit",value:"Search"})]}),Object(c.jsxs)("ul",{className:"search-live-list",children:[Z&&_,$&&Object(c.jsx)(nt,{})]}),Object(c.jsx)("p",{className:"search-status",children:0!==j.length?"Query result: '".concat(R,"'"):N&&0!==j.length&&"Nothing to found"})]}),Object(c.jsx)("ul",{className:"result",children:a?Object(c.jsx)(v,{}):J}),Object(c.jsx)("div",{className:"more-books",children:Object(c.jsx)(et,{})})]})}),g=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("h1",{className:"logo",children:["Pim",Object(c.jsx)("span",{children:"Book"})]}),Object(c.jsx)(d,{})]})})};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e7af6f9f.chunk.js.map