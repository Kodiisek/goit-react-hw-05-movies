"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[115],{115:function(e,n,t){t.r(n);var r=t(861),c=t(439),o=t(757),i=t.n(o),u=t(791),s=t(87),a=t(184);n.default=function(){var e=(0,u.useState)(""),n=(0,c.Z)(e,2),t=n[0],o=n[1],h=(0,u.useState)([]),v=(0,c.Z)(h,2),f=v[0],l=v[1],p=function(){var e=(0,r.Z)(i().mark((function e(){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/search/movie?api_key=4055b791708338774332fbeb5d716522&query=".concat(encodeURIComponent(t)));case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,l(r.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Error searching for movies:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Search Movies"}),(0,a.jsx)("input",{type:"text",value:t,onChange:function(e){return o(e.target.value)}}),(0,a.jsx)("button",{onClick:p,children:"Search"}),(0,a.jsx)("ul",{children:f.map((function(e){return(0,a.jsx)("li",{children:(0,a.jsx)(s.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}},861:function(e,n,t){function r(e,n,t,r,c,o,i){try{var u=e[o](i),s=u.value}catch(a){return void t(a)}u.done?n(s):Promise.resolve(s).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,o){var i=e.apply(n,t);function u(e){r(i,c,o,u,s,"next",e)}function s(e){r(i,c,o,u,s,"throw",e)}u(void 0)}))}}t.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=115.f8a1dfab.chunk.js.map