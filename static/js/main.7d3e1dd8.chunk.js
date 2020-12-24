(this["webpackJsonpshopify-frontend-challenge-2021"]=this["webpackJsonpshopify-frontend-challenge-2021"]||[]).push([[0],{28:function(n,e,t){"use strict";t.r(e);var r=t(0),c=t(1),i=t.n(c),a=t(14),o=t.n(a),u=t(4),s=t(2),b=t(3);function j(){var n=Object(s.a)(["\n  body {\n    margin: 0;\n    padding: 0;\n    background-color: #eaeaea;\n    font-family: Open-Sans, Helvetica, Sans-Serif;\n  }\n"]);return j=function(){return n},n}var l=Object(b.a)(j()),f=t(9),d=t(6);function m(){var n=Object(s.a)(["\n  padding: 0.4em 0.75em;\n"]);return m=function(){return n},n}function v(){var n=Object(s.a)(["\n  padding: 1.5em;\n  background-color: white;\n  border: 1px solid #d6d6d6;\n  border-radius: 3px;\n"]);return v=function(){return n},n}var O=b.b.div(v()),h=b.b.button(m());function g(){var n=Object(s.a)(["\n  margin-right: 0.75em;\n"]);return g=function(){return n},n}var x=b.b.div(g()),p=function(n){var e=n.movie;return Object(r.jsxs)(x,{children:[e.Title," (",e.Year,")"]})};function y(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n"]);return y=function(){return n},n}function w(){var n=Object(s.a)(["\n  margin: 0.75em;\n"]);return w=function(){return n},n}function k(){var n=Object(s.a)(["\n  padding-left: 2em;\n"]);return k=function(){return n},n}var N=b.b.ul(k()),S=b.b.li(w()),D=b.b.div(y()),C=function(n){var e=n.movies,t=n.MovieButton;return Object(r.jsx)(N,{children:e.map((function(n){return Object(r.jsx)(S,{children:Object(r.jsxs)(D,{children:[Object(r.jsx)(p,{movie:n}),Object(r.jsx)(t,{movie:n})]})},n.imdbID)}))})},I=t(12),P=t.n(I),R=t(18),T="https://www.omdbapi.com/?apikey=fbc21677&type=movie",M=function(){var n=Object(R.a)(P.a.mark((function n(e){var t,r,c,i=arguments;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:1,n.next=3,fetch("".concat(T,"&s=").concat(e,"&page=").concat(t));case 3:return r=n.sent,n.next=6,r.json();case 6:if(c=n.sent,!B(c)){n.next=11;break}return n.abrupt("return",{movies:E(c.Search),total:c.totalResults,error:null});case 11:throw new Error(c.Error);case 12:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),B=function(n){return"true"===n.Response.toLowerCase()},E=function(n){return Object.values(n.reduce((function(n,e){return n[e.imdbID]||(n[e.imdbID]=e),n}),{}))},L={search:M},F=t(19);function z(){var n=Object(s.a)(["\n",";\n"]);return z=function(){return n},n}function J(){var n=Object(s.a)(["\n  width: 2.5em;\n"]);return J=function(){return n},n}function _(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin-bottom: 1.5em;\n  & > div {\n    margin-top: 0.25em;\n  }\n"]);return _=function(){return n},n}var A=b.b.div(_()),G=b.b.button(J()),H=Object(b.b)(G)(z(),(function(n){return n.selected&&"\n    color: white;\n    background-color: #343a40;\n  "})),Y=function(n){var e=n.pageNum,t=n.pageLength,c=n.totalResults,i=10*e-9,a=10*(e-1)+t;return Object(r.jsx)("div",{children:Object(r.jsx)("span",{children:"Showing ".concat(i," to ").concat(a," of ").concat(c," titles")})})},q=function(n){var e=n.pageNum,t=n.totalResults,c=n.selectPage,i=Math.ceil(t/10),a=1===e,o=e===i;return Object(r.jsxs)("div",{children:[Object(r.jsx)(G,{onClick:function(){return c(1)},disabled:a,children:"<"}),Object(r.jsx)(K,{pageNum:e,lastPageNum:i,selectPage:c}),Object(r.jsx)(G,{onClick:function(){return c(i)},disabled:o,children:">"})]})},K=function(n){var e=n.pageNum,t=n.lastPageNum,c=n.selectPage,i=e>2?e-2:1,a=(e+2>t?t:e+2)-i+1,o=Object(F.a)(Array(a).keys());return Object(r.jsx)(r.Fragment,{children:o.map((function(n){var t=n+i;return Object(r.jsx)(H,{onClick:function(){return c(t)},selected:e===t,children:t},n)}))})},Q=function(n){var e=n.pageNum,t=n.pageLength,c=n.totalResults,i=n.selectPage;return Object(r.jsxs)(A,{children:[Object(r.jsx)(Y,{pageNum:e,pageLength:t,totalResults:c}),Object(r.jsx)(q,{pageNum:e,totalResults:c,selectPage:i})]})};function U(){var n=Object(s.a)(["\n  margin: 0 0 5px 0;\n"]);return U=function(){return n},n}function V(){var n=Object(s.a)(["\n  margin-right: 1em;\n"]);return V=function(){return n},n}var W=Object(b.b)(O)(V()),X=b.b.h3(U()),Z=function(n){var e=n.debouncedSearchText,t=n.nominations,i=n.setNominations,a=Object(c.useState)(-1),o=Object(u.a)(a,2),s=o[0],b=o[1],j=Object(c.useState)({movies:[],total:0,error:null}),l=Object(u.a)(j,2),m=l[0],v=l[1],O=Object(c.useCallback)((function(n,e){L.search(n,e).then((function(n){b(e),v(n)})).catch((function(n){b(-1),v({movies:[],total:0,error:n.message})}))}),[b,v]);Object(c.useEffect)((function(){O(e,1)}),[e]);var g=function(n){var e=!!t[n],r=5===Object.keys(t).length;return e||r};return Object(r.jsxs)(W,{children:[Object(r.jsx)(X,{children:0===e.length?"Search for a movie!":'Results for "'.concat(e,'"')}),m.error||-1===s?null:Object(r.jsx)(Q,{pageNum:s,pageLength:m.movies.length,totalResults:m.total,selectPage:function(n){O(e,n)}}),Object(r.jsx)(C,{movies:m.movies,MovieButton:function(n){var e=n.movie;return Object(r.jsx)(h,{onClick:function(){return function(n){var e=Object(d.a)(Object(d.a)({},t),{},Object(f.a)({},n.imdbID,n));i(e)}(e)},disabled:g(e.imdbID),children:"Nominate"})}}),m.error&&"Incorrect IMDb ID."!==m.error?Object(r.jsxs)("p",{children:[m.error," Please try another search!"]}):null]})},$=t.p+"static/media/magnifying-glass.4ee2370c.svg";function nn(){var n=Object(s.a)(["\n  flex: 1;\n  height: 2em;\n  font-size: 1em;\n  border: none;\n  &:focus {\n    outline: none;\n  }\n"]);return nn=function(){return n},n}function en(){var n=Object(s.a)(["\n  margin: 0.75em;\n  width: 17.5px;\n  height: 17.5px;\n  opacity: 0.5;\n"]);return en=function(){return n},n}function tn(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  border: 1.5px solid #bbbbbb;\n  border-radius: 3px;\n  &:focus-within {\n    box-shadow: 0 0 2px;\n    border-color: #00cc99;\n  }\n"]);return tn=function(){return n},n}function rn(){var n=Object(s.a)(["\n  margin: 0 0 5px 0;\n"]);return rn=function(){return n},n}function cn(){var n=Object(s.a)(["\n  margin-bottom: 2em;\n"]);return cn=function(){return n},n}var an=Object(b.b)(O)(cn()),on=b.b.h4(rn()),un=b.b.div(tn()),sn=b.b.img(en()),bn=b.b.input(nn()),jn=i.a.memo((function(n){var e=n.setDebouncedSearchText,t=Object(c.useState)(""),i=Object(u.a)(t,2),a=i[0],o=i[1];return Object(c.useEffect)((function(){var n=setTimeout((function(){e(a)}),500);return function(){clearTimeout(n)}}),[a]),Object(r.jsxs)(an,{children:[Object(r.jsx)(on,{children:"Movie Title"}),Object(r.jsxs)(un,{children:[Object(r.jsx)(sn,{src:$,alt:"Magnifying Glass"}),Object(r.jsx)(bn,{type:"text",value:a,onChange:function(n){return o(n.target.value)}})]})]})}));jn.displayName="SearchBar";var ln=jn;function fn(){var n=Object(s.a)(["\n  margin: 0 0 5px 0;\n"]);return fn=function(){return n},n}function dn(){var n=Object(s.a)(["\n  margin-left: 1em;\n"]);return dn=function(){return n},n}var mn=Object(b.b)(O)(dn()),vn=b.b.h3(fn()),On=i.a.memo((function(n){var e=n.nominations,t=n.setNominations,c=Object.values(e);return Object(r.jsxs)(mn,{children:[Object(r.jsx)(vn,{children:"Nominations"}),Object(r.jsx)(C,{movies:c,MovieButton:function(n){var c=n.movie;return Object(r.jsx)(h,{onClick:function(){return function(n){var r=Object(d.a)({},e);delete r[n],t(r)}(c.imdbID)},children:"Remove"})}})]})}));On.displayName="Nominations";var hn=On;function gn(){var n=Object(s.a)(["\n  color: white;\n  text-decoration: none;\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return gn=function(){return n},n}function xn(){var n=Object(s.a)(["\n  margin: 0.8em;\n  color: white;\n  text-align: right;\n  font-size: 0.9em;\n"]);return xn=function(){return n},n}function pn(){var n=Object(s.a)(["\n  color: #00cc99;\n  text-align: center;\n"]);return pn=function(){return n},n}function yn(){var n=Object(s.a)(["\n  margin: 1em; \n  font-size: 1.5em;\n"]);return yn=function(){return n},n}function wn(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 3.5em;\n  background-color: #343a40;\n  position: fixed;\n  top: 0;\n  & > div {\n    flex: 1;\n  }\n"]);return wn=function(){return n},n}var kn=b.b.div(wn()),Nn=b.b.div(yn()),Sn=b.b.div(pn()),Dn=b.b.div(xn()),Cn=b.b.a(gn()),In=i.a.memo((function(n){var e=n.text;return Object(r.jsxs)(kn,{children:[Object(r.jsx)(Nn,{children:Object(r.jsx)(Cn,{href:"/the-shoppies-2021/",children:"The Shoppies \ud83c\udfc6"})}),Object(r.jsx)(Sn,{children:Object(r.jsx)("h3",{children:e})}),Object(r.jsxs)(Dn,{children:[Object(r.jsx)(Cn,{href:"https://en.wikipedia.org/wiki/Daniel_(Elton_John_song)",children:"Daniel Ryu"})," 2020"]})]})}));In.displayName="Banner";var Pn=In;function Rn(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  & > div {\n    flex: 1;\n  }\n"]);return Rn=function(){return n},n}function Tn(){var n=Object(s.a)(["\n  padding: 5em 7.5em 0 7.5em;\n"]);return Tn=function(){return n},n}var Mn=b.b.div(Tn()),Bn=b.b.div(Rn());var En=function(){var n=Object(c.useState)({}),e=Object(u.a)(n,2),t=e[0],i=e[1],a=Object(c.useState)(""),o=Object(u.a)(a,2),s=o[0],b=o[1],j=Object(c.useState)(""),f=Object(u.a)(j,2),d=f[0],m=f[1];return Object(c.useEffect)((function(){var n=5===Object.keys(t).length;b(n?"Max number of nominations selected!":"")}),[t]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l,{}),Object(r.jsx)(Pn,{text:s}),Object(r.jsxs)(Mn,{children:[Object(r.jsx)(ln,{setDebouncedSearchText:m}),Object(r.jsxs)(Bn,{children:[Object(r.jsx)(Z,{debouncedSearchText:d,nominations:t,setNominations:i}),Object(r.jsx)(hn,{nominations:t,setNominations:i})]})]})]})},Ln=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,29)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;t(n),r(n),c(n),i(n),a(n)}))};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(En,{})}),document.getElementById("root")),Ln()}},[[28,1,2]]]);
//# sourceMappingURL=main.7d3e1dd8.chunk.js.map