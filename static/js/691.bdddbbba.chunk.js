"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[691],{9709:function(n,r,e){e.d(r,{Hg:function(){return o},Jh:function(){return i},_r:function(){return f},qF:function(){return p},s_:function(){return s}});var t=e(5861),u=e(4687),a=e.n(u),c=e(1243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"2161664d4314fc48afed48c009adafff"}}),o=function(){var n=(0,t.Z)(a().mark((function n(){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("trending/movie/day");case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(a().mark((function n(r){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("movie/".concat(r));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),i=function(){var n=(0,t.Z)(a().mark((function n(r){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("movie/".concat(r,"/credits"));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.cast);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(a().mark((function n(r){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("movie/".concat(r,"/reviews"));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(a().mark((function n(r){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("search/movie",{params:{query:r}});case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},1454:function(n,r,e){e.d(r,{Z:function(){return s}});e(2791);var t,u=e(8402),a=e(168),c=e(1109).Z.div(t||(t=(0,a.Z)(["\n  display: flex;\n  justify-content: start;\n"]))),o=e(184),s=function(){return(0,o.jsxs)(c,{children:[" ",(0,o.jsx)(u.Nx,{width:"100",color:"#370574"})]})}},4672:function(n,r,e){e.d(r,{O:function(){return d}});var t,u,a=e(7689),c=e(168),o=e(7691),s=e(1087),i=o.ZP.li(t||(t=(0,c.Z)(["\n  list-style-type:none; \n"]))),f=(0,o.ZP)(s.rU)(u||(u=(0,c.Z)(["\n  text-decoration: none;\n  font-size: 20px;\n  color: #020202;\n  &:hover {\n    color: #276f03;\n  }\n"]))),p=e(184),d=function(n){var r=n.movies,e=(0,a.TH)();return(0,p.jsx)("ul",{children:r.map((function(n){var r=n.id,t=n.title;return(0,p.jsx)(i,{children:(0,p.jsx)(f,{state:{from:e},to:"/movies/".concat(r),children:t})},r)}))})}},4691:function(n,r,e){e.r(r),e.d(r,{default:function(){return Z}});var t,u,a=e(5861),c=e(9439),o=e(4687),s=e.n(o),i=e(1454),f=e(4672),p=e(9709),d=e(2791),l=e(1087),v=e(168),h=e(7691),x=h.ZP.input(t||(t=(0,v.Z)(["\n    width: 300px;\n    height: 40px;\n    border-radius:2px;\n    \n"]))),m=h.ZP.button(u||(u=(0,v.Z)(["\n    border: none;\n    border-radius:2px;\n    width:100px;\n    height:43px;\n    font-size:14px;\n    cursor: pointer;\n    color: black;\n    background-color: #28d03e;\n     &:hover\n    {\n   \n        background-color: #2fe247;\n        box-shadow: 0 0 0 1px #76f752, 0 0 10px #333;\n    }\n"]))),b=e(184),Z=function(){var n=(0,l.lr)(),r=(0,c.Z)(n,2),e=r[0],t=r[1],u=(0,d.useState)([]),o=(0,c.Z)(u,2),v=o[0],h=o[1],Z=(0,d.useState)(!1),w=(0,c.Z)(Z,2),y=w[0],g=w[1],k=e.get("query");(0,d.useEffect)((function(){if(k){var n=function(){var n=(0,a.Z)(s().mark((function n(){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,g(!0),n.next=4,(0,p.qF)(k);case 4:if(0!==(r=n.sent).length){n.next=7;break}return n.abrupt("return","\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0444\u0456\u043b\u044c\u043c\u0430");case 7:h(r),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:return n.prev=13,g(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}else h([])}),[k]);return(0,b.jsxs)("div",{children:[(0,b.jsx)("h2",{children:"Find movie by name"}),(0,b.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),""===n.target.elements.query)return t({}),void h([]);var r=n.target.elements.query.value;t({query:r.trim()}),n.target.reset()},children:[(0,b.jsx)(x,{type:"text",name:"query"}),(0,b.jsx)(m,{children:"Search"})]}),y&&(0,b.jsx)(i.Z,{}),v.length>0&&(0,b.jsx)(f.O,{movies:v})]})}}}]);
//# sourceMappingURL=691.bdddbbba.chunk.js.map