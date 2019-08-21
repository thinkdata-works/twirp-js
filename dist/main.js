module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){function n(t,e,n,o){var u=r(t,o);return u["Content-Type"]=e,u.Accept=e,u["Twirp-Version"]=n,u}function r(t,e){var n=void 0!==e?e:{};return t=void 0!==t?t:{},Object.keys(t).reduce(function(e,n){return e[n]=t[n],e},n)}var o=function(t){return JSON.stringify(t.toObject())},u=function(t){return t.json()};function i(t){var e=new Error(t.msg);return e.meta=void 0===t.meta?{}:t.meta,e.code=t.code,e.status=t.status,e}function c(t,e){var n=new t;return Object.keys(e).forEach(function(t){var r="set"+t[0].toUpperCase()+t.slice(1);r in n&&n[r](e[t])}),n}t.exports={clientFactory:function(t,e,a){return function(s,f,d,l,p){var h=s.replace(/\/$/,"")+"/twirp/"+f+"/",w=l?o:e,y=n(p,l?"application/json":"application/protobuf",d),m=function(e,n,o,c){var s=r(c,y),f=l?u:a(o),d={method:"POST",body:w(n),redirect:"manual",headers:s,credentials:"include"};return t(h+e,d).then(function(t){return 200!==t.status?function(t){return t.json().then(function(t){if(!t.code||!t.msg)throw e(t);throw i(t)},function(){throw e({})});function e(e){return i({code:"internal",msg:"Error from intermediary with HTTP status code "+t.status+" "+t.statusText,meta:e,status:t.status})}}(t):f(t)})};return m.buildMessage=c,m}},makeHeaders:n,extendHeaders:r}},function(t,e,n){const r=n(0);"fetch"in window!=!1&&"function"==typeof fetch||console.warn("TWIRP RPC Client requires `window.fetch` and this browser doesn't support it\nPlease install a polyfill such as `whatwg-fetch` (https://github.com/github/fetch)");t.exports=r.clientFactory(window.fetch,function(t){return t.serializeBinary()},function(t){return function(e){return e.arrayBuffer().then(function(e){return t.deserializeBinary(new Uint8Array(e)).toObject()})}})}]);