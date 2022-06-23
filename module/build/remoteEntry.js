var ExampleModule;(()=>{"use strict";var e,r,t,n,a,o,i,l,u,d,f,s,p,c,h={16:(e,r,t)=>{var n={"./ExampleModule":()=>Promise.all([t.e(407),t.e(647)]).then((()=>()=>t(647)))},a=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var n="default",a=t.S[n];if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>a,init:()=>o})}},v={};function m(e){var r=v[e];if(void 0!==r)return r.exports;var t=v[e]={exports:{}};return h[e](t,t.exports,m),t.exports}m.m=h,m.c=v,m.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return m.d(r,{a:r}),r},m.d=(e,r)=>{for(var t in r)m.o(r,t)&&!m.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},m.f={},m.e=e=>Promise.all(Object.keys(m.f).reduce(((r,t)=>(m.f[t](e,r),r)),[])),m.u=e=>e+"."+{152:"1496827d34e12b927c7c",378:"58c4d901d8c4baa21984",407:"0d321ac0a5042d1e424c",542:"01475fdeffd3924d79c7",647:"8f52ade9a6477a86706d",744:"3fc96ae7b68882c9a57d"}[e]+".js",m.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="example-module:",m.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var f=u[d];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+a){i=f;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,m.nc&&i.setAttribute("nonce",m.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var s=(r,n)=>{i.onerror=i.onload=null,clearTimeout(p);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),l&&document.head.appendChild(i)}},m.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{m.S={};var e={},r={};m.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];m.o(m.S,t)||(m.S[t]={});var o=m.S[t],i="example-module",l=(e,r,t,n)=>{var a=o[e]=o[e]||{},l=a[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(a[r]={get:t,from:i,eager:!!n})},u=[];return"default"===t&&(l("react-dom","16.13.0",(()=>Promise.all([m.e(542),m.e(152)]).then((()=>()=>m(542))))),l("react","16.13.0",(()=>m.e(378).then((()=>()=>m(378)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),m.p="https://cdn.statically.io/gh/scott-gmr/webpack-dev-server-issue/main/module/build/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(l=e[o]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var i=[];for(o=1;o<e.length;o++){var l=e[o];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():a(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,l=1,u=!0;;l++,i++){var d,f,s=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(f=(typeof(d=r[i]))[0]))return!u||("u"==s?l>n&&!a:""==s!=a);if("u"==f){if(!u||"u"!=s)return!1}else if(u)if(s==f)if(l<=n){if(d!=e[l])return!1}else{if(a?d>e[l]:d<e[l])return!1;d!=e[l]&&(u=!1)}else if("s"!=s&&"n"!=s){if(a||l<=n)return!1;u=!1,l--}else{if(l<=n||f<s!=a)return!1;u=!1}else"s"!=s&&"n"!=s&&(u=!1,l--)}}var p=[],c=p.pop.bind(p);for(i=1;i<e.length;i++){var h=e[i];p.push(1==h?c()|c():2==h?c()&c():h?o(h,r):!c())}return!!c()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},l=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+a(n)+")",u=(e,r,t,n)=>{var a=i(e,t);return o(n,a)||"undefined"!=typeof console&&console.warn&&console.warn(l(e,t,a,n)),d(e[t][a])},d=e=>(e.loaded=1,e.get()),f=(e=>function(r,t,n,a){var o=m.I(r);return o&&o.then?o.then(e.bind(e,r,m.S[r],t,n,a)):e(0,m.S[r],t,n,a)})(((e,r,t,n,a)=>r&&m.o(r,t)?u(r,0,t,n):a())),s={},p={152:()=>f("default","react",[1,16,0,0],(()=>m.e(744).then((()=>()=>m(378))))),407:()=>f("default","react",[4,16,13,0],(()=>m.e(378).then((()=>()=>m(378)))))},c={152:[152],407:[407]},m.f.consumes=(e,r)=>{m.o(c,e)&&c[e].forEach((e=>{if(m.o(s,e))return r.push(s[e]);var t=r=>{s[e]=0,m.m[e]=t=>{delete m.c[e],t.exports=r()}},n=r=>{delete s[e],m.m[e]=t=>{throw delete m.c[e],r}};try{var a=p[e]();a.then?r.push(s[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))},(()=>{var e={560:0};m.f.j=(r,t)=>{var n=m.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(152|407)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=m.p+m.u(r),i=new Error;m.l(o,(t=>{if(m.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,a,[o,i,l]=t,u=0;if(o.some((r=>0!==e[r]))){for(n in i)m.o(i,n)&&(m.m[n]=i[n]);l&&l(m)}for(r&&r(t);u<o.length;u++)a=o[u],m.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunkexample_module=self.webpackChunkexample_module||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var b=m(16);ExampleModule=b})();