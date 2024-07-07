(function(){"use strict";var e={1394:function(e,t,n){n.d(t,{j:function(){return a}});var r=n(6400),o=n(5860);const i={apiKey:"AIzaSyCUuQeoh4KXpixf77l9dVHjdzWMejWRUXs",authDomain:"ai-doctorchat.firebaseapp.com",projectId:"ai-doctorchat",storageBucket:"ai-doctorchat.appspot.com",messagingSenderId:"614473253691",appId:"1:614473253691:web:0fef2922ca4df1229e6d1e"},u=(0,r.Wp)(i),a=(0,o.xI)(u)},3309:function(e,t,n){var r=n(5130),o=n(6768);const i={id:"app"};function u(e,t,n,r,u,a){const c=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",i,[(0,o.bF)(c)])}var a={name:"App"},c=n(1241);const s=(0,c.A)(a,[["render",u]]);var f=s,d=n(1387),l=n(1394);const p=[{path:"/",redirect:"/chatbot"},{path:"/login",name:"Login",component:()=>Promise.all([n.e(400),n.e(294)]).then(n.bind(n,1294))},{path:"/chatbot",name:"ChatBot",component:()=>Promise.all([n.e(400),n.e(611)]).then(n.bind(n,7611)),meta:{requiresAuth:!0}},{path:"/account-settings",name:"AccountSettings",component:()=>Promise.all([n.e(400),n.e(416)]).then(n.bind(n,8416)),meta:{requiresAuth:!0}}],h=(0,d.aE)({history:(0,d.LA)("/"),routes:p});h.beforeEach(((e,t,n)=>{const r=e.matched.some((e=>e.meta.requiresAuth));l.j.onAuthStateChanged((t=>{r&&!t?n("/login"):"/login"===e.path&&t?n("/chatbot"):n()}))}));var m=h,v=n(782);const b=(0,v.y$)({state:{isAuthenticated:!1,user:null},mutations:{setUser(e,t){e.user=t,e.isAuthenticated=!0},clearUser(e){e.user=null,e.isAuthenticated=!1}},actions:{login({commit:e},t){e("setUser",t)},logout({commit:e}){e("clearUser")}},getters:{isAuthenticated:e=>e.isAuthenticated,user:e=>e.user}});var g=b,y=n(8950),A=n(2353),w=n(292);y.Yv.add(A.WMI,A.isI),(0,r.Ef)(f).component("font-awesome-icon",w.gc).use(m).use(g).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var u=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(f--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{294:"5ae14fc9",400:"0d4bd3f0",416:"ad35366e",611:"dda68b2e"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{294:"eb0cb44b",416:"94fd8f5f",611:"7e9e2fd4"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="doctor_bot:";n.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var d=s[f];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){a=d;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[o];var l=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,o,i){var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",n.nc&&(u.nonce=n.nc);var a=function(n){if(u.onerror=u.onload=null,"load"===n.type)o();else{var r=n&&n.type,a=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+a+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=a,u.parentNode&&u.parentNode.removeChild(u),i(c)}};return u.onerror=u.onload=a,u.href=t,r?r.parentNode.insertBefore(u,r.nextSibling):document.head.appendChild(u),u},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var u=n.miniCssF(r),a=n.p+u;if(t(u,a))return o();e(r,a,null,o,i)}))},o={524:0};n.f.miniCss=function(e,t){var n={294:1,416:1,611:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(t),a=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};n.l(u,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,u=r[0],a=r[1],c=r[2],s=0;if(u.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var f=c(n)}for(t&&t(r);s<u.length;s++)i=u[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},r=self["webpackChunkdoctor_bot"]=self["webpackChunkdoctor_bot"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(3309)}));r=n.O(r)})();
//# sourceMappingURL=app.cc2c2ed6.js.map