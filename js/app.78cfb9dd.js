(function(e){function t(t){for(var n,o,u=t[0],l=t[1],s=t[2],c=0,d=[];c<u.length;c++)o=u[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={app:0},a={app:0},i=[];function u(e){return l.p+"js/"+({"details~home":"details~home",details:"details",home:"home"}[e]||e)+"."+{"details~home":"6b2dc34d",details:"3b19a3e7",home:"2cda2d55"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r={"details~home":1,details:1,home:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({"details~home":"details~home",details:"details",home:"home"}[e]||e)+"."+{"details~home":"06384ddb",details:"86fcd3f7",home:"46fbd31e"}[e]+".css",a=l.p+n,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],c=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===n||c===a))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],c=s.getAttribute("data-href");if(c===n||c===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],f.parentNode.removeChild(f),r(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=i);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=u(e);var d=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,r[1](d)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/uplexis/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("4de4"),r("ac1f"),r("1276");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("router-view")},a=[],i={name:"App",data:function(){return{}}},u=i,l=r("2877"),s=Object(l["a"])(u,o,a,!1,null,null,null),c=s.exports,d=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f"));n["a"].use(d["a"]);var f=[{path:"/",name:"Home",component:function(){return Promise.all([r.e("details~home"),r.e("home")]).then(r.bind(null,"d504"))}},{path:"/detalhes/:id",name:"Details",component:function(){return Promise.all([r.e("details~home"),r.e("details")]).then(r.bind(null,"9f52"))}}],p=new d["a"]({mode:"history",base:"/uplexis/",routes:f}),h=p,m=r("f309");n["a"].use(m["a"]);var v=new m["a"]({theme:{themes:{light:{primary:"#f07c01"}}}});n["a"].config.productionTip=!1,n["a"].filter("formatCurrency",(function(e){return e?e.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}):""})),n["a"].filter("getValue",(function(e){return e?e.split("R$")[1]:""})),new n["a"]({router:h,vuetify:v,render:function(e){return e(c)}}).$mount("#app")}});
//# sourceMappingURL=app.78cfb9dd.js.map