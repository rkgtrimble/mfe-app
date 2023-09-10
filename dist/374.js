"use strict";(self.webpackChunkproduct_list=self.webpackChunkproduct_list||[]).push([[374],{391:(e,t,n)=>{function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,c=[],l=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:()=>o})},374:(e,t,n)=>{n.r(t),n.d(t,{default:()=>T});var r=n(416),o=n.n(r),a=n(845),i=n(439),c=n(379),l=n.n(c),u=n(795),s=n.n(u),p=n(569),d=n.n(p),f=n(565),m=n.n(f),h=n(216),g=n.n(h),v=n(589),x=n.n(v),y=n(552),b={};b.styleTagTransform=x(),b.setAttributes=m(),b.insert=d().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=g(),l()(y.Z,b),y.Z&&y.Z.locals&&y.Z.locals;var w=n(391),E=n(451),k=n.n(E),C=function(e){var t=function(e){console.log("document.cookie::",document.cookie);var t=(0,r.useState)(""),n=(0,w.Z)(t,2),i=n[0],c=n[1],l=(0,r.useState)([]),u=(0,w.Z)(l,2),s=u[0],p=u[1],d=(0,a.useLocation)();console.log("location::",d),(0,r.useEffect)((function(){k().get("https://randomuser.me/api/?results=3").then((function(e){p(e.data.results)})).catch((function(e){console.error("Error fetching random users:",e)}))}),[]);var f=e.text,m=e.defaultCount,h=(0,r.useState)(m?parseInt(m):0),g=(0,w.Z)(h,2),v=g[0],x=g[1],y=function(e){"increment"===e?x((function(e){return e+1})):"decrement"===e&&0!==v&&x((function(e){return e-1}))};return o().createElement(o().Fragment,null,o().createElement("button",{onClick:function(){localStorage.getItem("testToken")&&c(localStorage.getItem("testToken"))},style:{border:"1px solid black",backgroundColor:"tomato",padding:"5px 7px",margin:"5px",fontSize:"small",cursor:"pointer",width:"200px"}},i||"Click to get the testToken from localStorage"),o().createElement("div",{className:"App container"},o().createElement("div",{className:"counter-title"},f),o().createElement("div",{className:"counter-title-icon"},o().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"23",viewBox:"0 0 23 23",fill:"none"},o().createElement("path",{d:"M11.5117 21.322C17.0346 21.322 21.5117 16.7727 21.5117 11.161C21.5117 5.54923 17.0346 1 11.5117 1C5.98887 1 1.51172 5.54923 1.51172 11.161C1.51172 16.7727 5.98887 21.322 11.5117 21.322Z",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),o().createElement("path",{d:"M11.5117 15.2245V11.1602",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),o().createElement("path",{d:"M11.5117 7.0957H11.5217",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}))),o().createElement("div",{className:"counter"},o().createElement("div",null,o().createElement("button",{id:"decrement",onClick:function(){return y("decrement")}},o().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"24",viewBox:"0 0 25 24",fill:"none"},o().createElement("path",{d:"M19.5117 13H5.51172V11H19.5117V13Z",fill:"#464B52"})))),o().createElement("div",null,o().createElement("input",{type:"text",id:"count",value:v})),o().createElement("div",null,o().createElement("button",{id:"increment",onClick:function(){return y("increment")}},o().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"24",viewBox:"0 0 25 24",fill:"none"},o().createElement("path",{d:"M19.5117 13H13.5117V19H11.5117V13H5.51172V11H11.5117V5H13.5117V11H19.5117V13Z",fill:"#464B52"})))))),o().createElement("div",{style:{marginTop:"10px"}},o().createElement("h1",null,"Random Users"),o().createElement("ul",null,s.map((function(e){return o().createElement("li",{key:e.login.uuid},o().createElement("img",{src:e.picture.thumbnail}),o().createElement(a.Link,{to:"/pricing"},"".concat(e.name.first," ").concat(e.name.last)))})))))}(e);return t?o().createElement(o().Fragment,null,t):null};const S=C;function T(e){var t=e.baseName,n=e.pricingText,r=e.pricingQuantity;return o().createElement(a.BrowserRouter,{basename:t},o().createElement(a.Routes,null,o().createElement(a.Route,{path:"/pricing",element:o().createElement(S,{text:n,defaultCount:r})}),o().createElement(a.Route,{path:"/",element:o().createElement(S,{text:n,defaultCount:r})})))}C.propTypes={onClick:i.func,text:i.string,defaultCount:i.string,className:i.string,mouse:i.bool}},552:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,".App {\n  font-family: Benton Sans;\n  text-align: center;\n  margin: 80px auto;\n  width: 140px;\n}\n.container {\n  display: flex;\n  /* gap: 20px; */\n  justify-content: center;\n  align-items: center;\n}\n.counter-title {\n  color: #363545;\n}\n.counter-title-icon {\n  width: 20px;\n  height: 20.322px;\n  flex-shrink: 0;\n  padding-left: 9px;\n  padding-right: 60px;\n}\n.counter {\n  /* width: 150px; */\n  display: flex;\n  justify-content: space-evenly;\n  border: 1px solid #e0e1e9;\n  border-radius: 2px;\n  padding: 12px 20px;\n  border-bottom: 1px solid #6a6e79;\n}\n#count {\n  border: 1px solid #ffffff;\n  text-align: center;\n  width: 74px;\n  color: #252a2e;\n  text-align: center;\n  /* font-family: Benton Sans; */\n  font-size: 18px;\n  /* font-style: normal; */\n  font-weight: 400;\n  line-height: 21px;\n  letter-spacing: 0.021px;\n}\n#decrement {\n  background-color: white;\n  border: none;\n  color: #464b52;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n}\n#increment {\n  background-color: white;\n  border: none;\n  color: #464b52;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n}\ninput:focus {\n  outline: none;\n}\n",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var u=0;u<e.length;u++){var s=[].concat(e[u]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var l=e[c],u=r.base?l[0]+r.base:l[0],s=a[u]||0,p="".concat(u," ").concat(s);a[u]=s+1;var d=n(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var l=r(e,o),u=0;u<a.length;u++){var s=n(a[u]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}}]);