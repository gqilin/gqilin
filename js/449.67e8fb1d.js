(self["webpackChunkxml_reader"]=self["webpackChunkxml_reader"]||[]).push([[449],{808:function(e,t,n){"use strict";n.r(t);var r=n(8081),o=n.n(r),i=n(3645),s=n.n(i),a=s()(o());a.push([e.id,".index-box[data-v-b7fb2040]{width:100%}",""]),t["default"]=a},6230:function(e){e.exports="object"==typeof self?self.FormData:window.FormData},5449:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return nn}});var r=n(6252),o={class:"index-box"};function i(e,t,n,i,s,a){var c=(0,r.up)("xml-epub-read");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r.Wm)(c,{fileId:e.bookInfo.goodsFileId,bookPath:e.bookInfo.bookPath,location:e.bookInfo.location,notesList:e.notesList,bookmarkList:e.bookmarkList,lineationList:e.lineationList,sourceList:e.sourceList,luminance:e.bookInfo.luminance,isNote:e.bookInfo.isNote,limitSize:e.bookInfo.limitSize,innerHeight:e.bookInfo.innerHeight,innerWidth:e.bookInfo.innerWidth,integralBox:e.integralBox,integral:e.integral,width:e.width,systemType:e.bookInfo.systemType,onConfirmDeleteNotes:e.deleteNotes,onConfirmAddNotes:e.confirmAddNotes,onAddBookmark:e.addBookmark,onDeleteBookmark:e.deleteBookmark,onConfirmAmendNotes:e.confirmAmendNotes,onAddUnderline:e.addUnderline},null,8,["fileId","bookPath","location","notesList","bookmarkList","lineationList","sourceList","luminance","isNote","limitSize","innerHeight","innerWidth","integralBox","integral","width","systemType","onConfirmDeleteNotes","onConfirmAddNotes","onAddBookmark","onDeleteBookmark","onConfirmAmendNotes","onAddUnderline"])])}var s=n(655),a=n(2262),c=n(2201),u=n(781);function l(e,t){return function(){return e.apply(t,arguments)}}const{toString:f}=Object.prototype,{getPrototypeOf:d}=Object,h=(e=>t=>{const n=f.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),p=e=>(e=e.toLowerCase(),t=>h(t)===e),m=e=>t=>typeof t===e,{isArray:g}=Array,b=m("undefined");function y(e){return null!==e&&!b(e)&&null!==e.constructor&&!b(e.constructor)&&v(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const w=p("ArrayBuffer");function E(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&w(e.buffer),t}const O=m("string"),v=m("function"),S=m("number"),R=e=>null!==e&&"object"===typeof e,A=e=>!0===e||!1===e,T=e=>{if("object"!==h(e))return!1;const t=d(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},k=p("Date"),N=p("File"),x=p("Blob"),j=p("FileList"),I=e=>R(e)&&v(e.pipe),C=e=>{const t="[object FormData]";return e&&("function"===typeof FormData&&e instanceof FormData||f.call(e)===t||v(e.toString)&&e.toString()===t)},P=p("URLSearchParams"),L=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function B(e,t,{allOwnKeys:n=!1}={}){if(null===e||"undefined"===typeof e)return;let r,o;if("object"!==typeof e&&(e=[e]),g(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let s;for(r=0;r<i;r++)s=o[r],t.call(null,e[s],s,e)}}function _(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;while(o-- >0)if(r=n[o],t===r.toLowerCase())return r;return null}const F="undefined"===typeof self?"undefined"===typeof global?void 0:global:self,U=e=>!b(e)&&e!==F;function D(){const{caseless:e}=U(this)&&this||{},t={},n=(n,r)=>{const o=e&&_(t,r)||r;T(t[o])&&T(n)?t[o]=D(t[o],n):T(n)?t[o]=D({},n):g(n)?t[o]=n.slice():t[o]=n};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&B(arguments[r],n);return t}const z=(e,t,n,{allOwnKeys:r}={})=>(B(t,((t,r)=>{n&&v(t)?e[r]=l(t,n):e[r]=t}),{allOwnKeys:r}),e),M=e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),q=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},W=(e,t,n,r)=>{let o,i,s;const a={};if(t=t||{},null==e)return t;do{o=Object.getOwnPropertyNames(e),i=o.length;while(i-- >0)s=o[i],r&&!r(s,e,t)||a[s]||(t[s]=e[s],a[s]=!0);e=!1!==n&&d(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},J=(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},H=e=>{if(!e)return null;if(g(e))return e;let t=e.length;if(!S(t))return null;const n=new Array(t);while(t-- >0)n[t]=e[t];return n},K=(e=>t=>e&&t instanceof e)("undefined"!==typeof Uint8Array&&d(Uint8Array)),V=(e,t)=>{const n=e&&e[Symbol.iterator],r=n.call(e);let o;while((o=r.next())&&!o.done){const n=o.value;t.call(e,n[0],n[1])}},$=(e,t)=>{let n;const r=[];while(null!==(n=e.exec(t)))r.push(n);return r},G=p("HTMLFormElement"),X=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),Z=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Q=p("RegExp"),Y=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};B(n,((n,o)=>{!1!==t(n,o,e)&&(r[o]=n)})),Object.defineProperties(e,r)},ee=e=>{Y(e,((t,n)=>{if(v(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];v(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},te=(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return g(e)?r(e):r(String(e).split(t)),n},ne=()=>{},re=(e,t)=>(e=+e,Number.isFinite(e)?e:t),oe=e=>{const t=new Array(10),n=(e,r)=>{if(R(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=g(e)?[]:{};return B(e,((e,t)=>{const i=n(e,r+1);!b(i)&&(o[t]=i)})),t[r]=void 0,o}}return e};return n(e,0)};var ie={isArray:g,isArrayBuffer:w,isBuffer:y,isFormData:C,isArrayBufferView:E,isString:O,isNumber:S,isBoolean:A,isObject:R,isPlainObject:T,isUndefined:b,isDate:k,isFile:N,isBlob:x,isRegExp:Q,isFunction:v,isStream:I,isURLSearchParams:P,isTypedArray:K,isFileList:j,forEach:B,merge:D,extend:z,trim:L,stripBOM:M,inherits:q,toFlatObject:W,kindOf:h,kindOfTest:p,endsWith:J,toArray:H,forEachEntry:V,matchAll:$,isHTMLForm:G,hasOwnProperty:Z,hasOwnProp:Z,reduceDescriptors:Y,freezeMethods:ee,toObjectSet:te,toCamelCase:X,noop:ne,toFiniteNumber:re,findKey:_,global:F,isContextDefined:U,toJSONObject:oe};function se(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}ie.inherits(se,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ie.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ae=se.prototype,ce={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{ce[e]={value:e}})),Object.defineProperties(se,ce),Object.defineProperty(ae,"isAxiosError",{value:!0}),se.from=(e,t,n,r,o,i)=>{const s=Object.create(ae);return ie.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),se.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};var ue=se,le=n(6230),fe=le;function de(e){return ie.isPlainObject(e)||ie.isArray(e)}function he(e){return ie.endsWith(e,"[]")?e.slice(0,-2):e}function pe(e,t,n){return e?e.concat(t).map((function(e,t){return e=he(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}function me(e){return ie.isArray(e)&&!e.some(de)}const ge=ie.toFlatObject(ie,{},null,(function(e){return/^is[A-Z]/.test(e)}));function be(e){return e&&ie.isFunction(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator]}function ye(e,t,n){if(!ie.isObject(e))throw new TypeError("target must be an object");t=t||new(fe||FormData),n=ie.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!ie.isUndefined(t[e])}));const r=n.metaTokens,o=n.visitor||l,i=n.dots,s=n.indexes,a=n.Blob||"undefined"!==typeof Blob&&Blob,c=a&&be(t);if(!ie.isFunction(o))throw new TypeError("visitor must be a function");function u(e){if(null===e)return"";if(ie.isDate(e))return e.toISOString();if(!c&&ie.isBlob(e))throw new ue("Blob is not supported. Use a Buffer instead.");return ie.isArrayBuffer(e)||ie.isTypedArray(e)?c&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"===typeof e)if(ie.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(ie.isArray(e)&&me(e)||ie.isFileList(e)||ie.endsWith(n,"[]")&&(a=ie.toArray(e)))return n=he(n),a.forEach((function(e,r){!ie.isUndefined(e)&&null!==e&&t.append(!0===s?pe([n],r,i):null===s?n:n+"[]",u(e))})),!1;return!!de(e)||(t.append(pe(o,n,i),u(e)),!1)}const f=[],d=Object.assign(ge,{defaultVisitor:l,convertValue:u,isVisitable:de});function h(e,n){if(!ie.isUndefined(e)){if(-1!==f.indexOf(e))throw Error("Circular reference detected in "+n.join("."));f.push(e),ie.forEach(e,(function(e,r){const i=!(ie.isUndefined(e)||null===e)&&o.call(t,e,ie.isString(r)?r.trim():r,n,d);!0===i&&h(e,n?n.concat(r):[r])})),f.pop()}}if(!ie.isObject(e))throw new TypeError("data must be an object");return h(e),t}var we=ye;function Ee(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Oe(e,t){this._pairs=[],e&&we(e,this,t)}const ve=Oe.prototype;ve.append=function(e,t){this._pairs.push([e,t])},ve.toString=function(e){const t=e?function(t){return e.call(this,t,Ee)}:Ee;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var Se=Oe;function Re(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ae(e,t,n){if(!t)return e;const r=n&&n.encode||Re,o=n&&n.serialize;let i;if(i=o?o(t,n):ie.isURLSearchParams(t)?t.toString():new Se(t,n).toString(r),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}class Te{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){ie.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}var ke=Te,Ne={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},xe="undefined"!==typeof URLSearchParams?URLSearchParams:Se,je=FormData;const Ie=(()=>{let e;return("undefined"===typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!==typeof window&&"undefined"!==typeof document)})(),Ce=(()=>"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts)();var Pe={isBrowser:!0,classes:{URLSearchParams:xe,FormData:je,Blob:Blob},isStandardBrowserEnv:Ie,isStandardBrowserWebWorkerEnv:Ce,protocols:["http","https","file","blob","url","data"]};function Le(e,t){return we(e,new Pe.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Pe.isNode&&ie.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}function Be(e){return ie.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}function _e(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function Fe(e){function t(e,n,r,o){let i=e[o++];const s=Number.isFinite(+i),a=o>=e.length;if(i=!i&&ie.isArray(r)?r.length:i,a)return ie.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!s;r[i]&&ie.isObject(r[i])||(r[i]=[]);const c=t(e,n,r[i],o);return c&&ie.isArray(r[i])&&(r[i]=_e(r[i])),!s}if(ie.isFormData(e)&&ie.isFunction(e.entries)){const n={};return ie.forEachEntry(e,((e,r)=>{t(Be(e),r,n,0)})),n}return null}var Ue=Fe;const De={"Content-Type":void 0};function ze(e,t,n){if(ie.isString(e))try{return(t||JSON.parse)(e),ie.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}const Me={transitional:Ne,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=ie.isObject(e);o&&ie.isHTMLForm(e)&&(e=new FormData(e));const i=ie.isFormData(e);if(i)return r&&r?JSON.stringify(Ue(e)):e;if(ie.isArrayBuffer(e)||ie.isBuffer(e)||ie.isStream(e)||ie.isFile(e)||ie.isBlob(e))return e;if(ie.isArrayBufferView(e))return e.buffer;if(ie.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Le(e,this.formSerializer).toString();if((s=ie.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return we(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),ze(e)):e}],transformResponse:[function(e){const t=this.transitional||Me.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&ie.isString(e)&&(n&&!this.responseType||r)){const n=t&&t.silentJSONParsing,i=!n&&r;try{return JSON.parse(e)}catch(o){if(i){if("SyntaxError"===o.name)throw ue.from(o,ue.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Pe.classes.FormData,Blob:Pe.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};ie.forEach(["delete","get","head"],(function(e){Me.headers[e]={}})),ie.forEach(["post","put","patch"],(function(e){Me.headers[e]=ie.merge(De)}));var qe=Me;const We=ie.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Je=e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&We[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t};const He=Symbol("internals");function Ke(e){return e&&String(e).trim().toLowerCase()}function Ve(e){return!1===e||null==e?e:ie.isArray(e)?e.map(Ve):String(e)}function $e(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;while(r=n.exec(e))t[r[1]]=r[2];return t}function Ge(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function Xe(e,t,n,r){return ie.isFunction(r)?r.call(this,t,n):ie.isString(t)?ie.isString(r)?-1!==t.indexOf(r):ie.isRegExp(r)?r.test(t):void 0:void 0}function Ze(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}function Qe(e,t){const n=ie.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}class Ye{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=Ke(t);if(!o)throw new Error("header name must be a non-empty string");const i=ie.findKey(r,o);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=Ve(e))}const i=(e,t)=>ie.forEach(e,((e,n)=>o(e,n,t)));return ie.isPlainObject(e)||e instanceof this.constructor?i(e,t):ie.isString(e)&&(e=e.trim())&&!Ge(e)?i(Je(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=Ke(e),e){const n=ie.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return $e(e);if(ie.isFunction(t))return t.call(this,e,n);if(ie.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Ke(e),e){const n=ie.findKey(this,e);return!(!n||t&&!Xe(this,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=Ke(e),e){const o=ie.findKey(n,e);!o||t&&!Xe(n,n[o],o,t)||(delete n[o],r=!0)}}return ie.isArray(e)?e.forEach(o):o(e),r}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(e){const t=this,n={};return ie.forEach(this,((r,o)=>{const i=ie.findKey(n,o);if(i)return t[i]=Ve(r),void delete t[o];const s=e?Ze(o):String(o).trim();s!==o&&delete t[o],t[s]=Ve(r),n[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return ie.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&ie.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=this[He]=this[He]={accessors:{}},n=t.accessors,r=this.prototype;function o(e){const t=Ke(e);n[t]||(Qe(r,e),n[t]=!0)}return ie.isArray(e)?e.forEach(o):o(e),this}}Ye.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),ie.freezeMethods(Ye.prototype),ie.freezeMethods(Ye);var et=Ye;function tt(e,t){const n=this||qe,r=t||n,o=et.from(r.headers);let i=r.data;return ie.forEach(e,(function(e){i=e.call(n,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function nt(e){return!(!e||!e.__CANCEL__)}function rt(e,t,n){ue.call(this,null==e?"canceled":e,ue.ERR_CANCELED,t,n),this.name="CanceledError"}ie.inherits(rt,ue,{__CANCEL__:!0});var ot=rt,it=null;function st(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new ue("Request failed with status code "+n.status,[ue.ERR_BAD_REQUEST,ue.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var at=Pe.isStandardBrowserEnv?function(){return{write:function(e,t,n,r,o,i){const s=[];s.push(e+"="+encodeURIComponent(t)),ie.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),ie.isString(r)&&s.push("path="+r),ie.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function ct(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ut(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function lt(e,t){return e&&!ct(t)?ut(e,t):t}var ft=Pe.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=ie.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return function(){return!0}}();function dt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function ht(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,i=0,s=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[s];o||(o=c),n[i]=a,r[i]=c;let l=s,f=0;while(l!==i)f+=n[l++],l%=e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}var pt=ht;function mt(e,t){let n=0;const r=pt(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-n,c=r(a),u=i<=s;n=i;const l={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&u?(s-i)/c:void 0,event:o};l[t?"download":"upload"]=!0,e(l)}}const gt="undefined"!==typeof XMLHttpRequest;var bt=gt&&function(e){return new Promise((function(t,n){let r=e.data;const o=et.from(e.headers).normalize(),i=e.responseType;let s;function a(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}ie.isFormData(r)&&(Pe.isStandardBrowserEnv||Pe.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const u=lt(e.baseURL,e.url);function l(){if(!c)return;const r=et.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),o=i&&"text"!==i&&"json"!==i?c.response:c.responseText,s={data:o,status:c.status,statusText:c.statusText,headers:r,config:e,request:c};st((function(e){t(e),a()}),(function(e){n(e),a()}),s),c=null}if(c.open(e.method.toUpperCase(),Ae(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new ue("Request aborted",ue.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new ue("Network Error",ue.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||Ne;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new ue(t,r.clarifyTimeoutError?ue.ETIMEDOUT:ue.ECONNABORTED,e,c)),c=null},Pe.isStandardBrowserEnv){const t=(e.withCredentials||ft(u))&&e.xsrfCookieName&&at.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in c&&ie.forEach(o.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),ie.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&"json"!==i&&(c.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&c.addEventListener("progress",mt(e.onDownloadProgress,!0)),"function"===typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",mt(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{c&&(n(!t||t.type?new ot(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const f=dt(u);f&&-1===Pe.protocols.indexOf(f)?n(new ue("Unsupported protocol "+f+":",ue.ERR_BAD_REQUEST,e)):c.send(r||null)}))};const yt={http:it,xhr:bt};ie.forEach(yt,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));var wt={getAdapter:e=>{e=ie.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t;o++)if(n=e[o],r=ie.isString(n)?yt[n.toLowerCase()]:n)break;if(!r){if(!1===r)throw new ue(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(ie.hasOwnProp(yt,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!ie.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:yt};function Et(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ot(null,e)}function Ot(e){Et(e),e.headers=et.from(e.headers),e.data=tt.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);const t=wt.getAdapter(e.adapter||qe.adapter);return t(e).then((function(t){return Et(e),t.data=tt.call(e,e.transformResponse,t),t.headers=et.from(t.headers),t}),(function(t){return nt(t)||(Et(e),t&&t.response&&(t.response.data=tt.call(e,e.transformResponse,t.response),t.response.headers=et.from(t.response.headers))),Promise.reject(t)}))}const vt=e=>e instanceof et?e.toJSON():e;function St(e,t){t=t||{};const n={};function r(e,t,n){return ie.isPlainObject(e)&&ie.isPlainObject(t)?ie.merge.call({caseless:n},e,t):ie.isPlainObject(t)?ie.merge({},t):ie.isArray(t)?t.slice():t}function o(e,t,n){return ie.isUndefined(t)?ie.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function i(e,t){if(!ie.isUndefined(t))return r(void 0,t)}function s(e,t){return ie.isUndefined(t)?ie.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,i){return i in t?r(n,o):i in e?r(void 0,n):void 0}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>o(vt(e),vt(t),!0)};return ie.forEach(Object.keys(e).concat(Object.keys(t)),(function(r){const i=c[r]||o,s=i(e[r],t[r],r);ie.isUndefined(s)&&i!==a||(n[r]=s)})),n}const Rt="1.2.1",At={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{At[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Tt={};function kt(e,t,n){if("object"!==typeof e)throw new ue("options must be an object",ue.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;while(o-- >0){const i=r[o],s=t[i];if(s){const t=e[i],n=void 0===t||s(t,i,e);if(!0!==n)throw new ue("option "+i+" must be "+n,ue.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new ue("Unknown option "+i,ue.ERR_BAD_OPTION)}}At.transitional=function(e,t,n){function r(e,t){return"[Axios v"+Rt+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,i)=>{if(!1===e)throw new ue(r(o," has been removed"+(t?" in "+t:"")),ue.ERR_DEPRECATED);return t&&!Tt[o]&&(Tt[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};var Nt={assertOptions:kt,validators:At};const xt=Nt.validators;class jt{constructor(e){this.defaults=e,this.interceptors={request:new ke,response:new ke}}request(e,t){"string"===typeof e?(t=t||{},t.url=e):t=e||{},t=St(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;let i;void 0!==n&&Nt.assertOptions(n,{silentJSONParsing:xt.transitional(xt.boolean),forcedJSONParsing:xt.transitional(xt.boolean),clarifyTimeoutError:xt.transitional(xt.boolean)},!1),void 0!==r&&Nt.assertOptions(r,{encode:xt.function,serialize:xt.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),i=o&&ie.merge(o.common,o[t.method]),i&&ie.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=et.concat(i,o);const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,f=0;if(!a){const e=[Ot.bind(this),void 0];e.unshift.apply(e,s),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);while(f<l)u=u.then(e[f++],e[f++]);return u}l=s.length;let d=t;f=0;while(f<l){const e=s[f++],t=s[f++];try{d=e(d)}catch(h){t.call(this,h);break}}try{u=Ot.call(this,d)}catch(h){return Promise.reject(h)}f=0,l=c.length;while(f<l)u=u.then(c[f++],c[f++]);return u}getUri(e){e=St(this.defaults,e);const t=lt(e.baseURL,e.url);return Ae(t,e.params,e.paramsSerializer)}}ie.forEach(["delete","get","head","options"],(function(e){jt.prototype[e]=function(t,n){return this.request(St(n||{},{method:e,url:t,data:(n||{}).data}))}})),ie.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(St(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}jt.prototype[e]=t(),jt.prototype[e+"Form"]=t(!0)}));var It=jt;class Ct{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;while(t-- >0)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new ot(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;const t=new Ct((function(t){e=t}));return{token:t,cancel:e}}}var Pt=Ct;function Lt(e){return function(t){return e.apply(null,t)}}function Bt(e){return ie.isObject(e)&&!0===e.isAxiosError}function _t(e){const t=new It(e),n=l(It.prototype.request,t);return ie.extend(n,It.prototype,t,{allOwnKeys:!0}),ie.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return _t(St(e,t))},n}const Ft=_t(qe);Ft.Axios=It,Ft.CanceledError=ot,Ft.CancelToken=Pt,Ft.isCancel=nt,Ft.VERSION=Rt,Ft.toFormData=we,Ft.AxiosError=ue,Ft.Cancel=Ft.CanceledError,Ft.all=function(e){return Promise.all(e)},Ft.spread=Lt,Ft.isAxiosError=Bt,Ft.mergeConfig=St,Ft.AxiosHeaders=et,Ft.formToJSON=e=>Ue(ie.isHTMLForm(e)?new FormData(e):e),Ft.default=Ft;var Ut,Dt=Ft;(function(e){e[e["TIMEOUT"]=2e4]="TIMEOUT",e[e["OVERDUE"]=600]="OVERDUE",e[e["FAIL"]=999]="FAIL",e[e["SUCCESS"]=200]="SUCCESS"})(Ut||(Ut={}));var zt={timeout:Ut.TIMEOUT,withCredentials:!0},Mt=function(){function e(e){var t=this;Object.defineProperty(this,"service",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.service=Dt.create(e),this.service.interceptors.request.use((function(e){var t=localStorage.getItem("Gk-Read-Token")||"";return(0,s.pi)((0,s.pi)({},e),{headers:{platform:"custom",Authorization:"Bearer "+t}})}),(function(e){Promise.reject(e)})),this.service.interceptors.response.use((function(e){var t=e.data;e.config;if(200===t.code)return t}),(function(e){var n=e.response;n&&t.handleCode(n.status),window.navigator.onLine||(0,u.F)("网络连接失败")}))}return Object.defineProperty(e.prototype,"handleCode",{enumerable:!1,configurable:!0,writable:!0,value:function(e){switch(e){case 401:break;default:break}}}),Object.defineProperty(e.prototype,"get",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){return this.service.get(e,{params:t})}}),Object.defineProperty(e.prototype,"post",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){return this.service.post(e,t)}}),Object.defineProperty(e.prototype,"put",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){return this.service.put(e,t)}}),Object.defineProperty(e.prototype,"delete",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){return this.service.delete(e,{params:t})}}),e}(),qt=new Mt(zt),Wt=function(e,t){return qt.get(t+"/ouchn-customapi/device/goods/selGoodsById",e)},Jt=function(e){return qt.get(e+"/ouchn-customapi/device/read/selectTimeParameter")},Ht=function(e,t){return qt.post(t+"/ouchn-customapi/device/read/updateOcDownloadReading",e)},Kt=function(e,t){return qt.post(t+"/ouchn-customapi/device/read/updateOcReadSchedule",e)},Vt=function(e,t){return qt.get(t+"/ouchn-customapi/device/api/note/getNoteInfo",e)},$t=function(e,t){return qt.post(t+"/ouchn-customapi/device/api/note/addNote",e)},Gt=function(e,t){return qt.post(t+"/ouchn-customapi/device/api/note/updateNote",e)},Xt=function(e,t){return qt.post(t+"/ouchn-customapi/device/api/note/deleteNote?noteId="+e.noteId)},Zt=function(e,t){return qt.get(t+"/ouchn-customapi/Integral/insertIntegralsg",e)},Qt=function(e,t){return qt.get(t+"/ouchn-customapi/Integral/InsertIntegrals",e)},Yt=(0,r.aZ)({name:"Index",setup:function(){var e=(0,a.qj)({notesList:[],bookmarkList:[],lineationList:[],sourceList:[],TimeParameter:10,integralBox:!1,integral:15,width:22}),t=(0,c.tv)().currentRoute.value.query;t.token&&localStorage.setItem("Gk-Read-Token",t.token);var n=t.baseURL,o={bookPath:t.bookPath||"https://ouchn-prod-public.oss-cn-beijing.aliyuncs.com/goods_file/beea6394-0553-4b53-8738-6ad2847f187f.epub",location:t.location||"0",fileType:t.fileType||"epub",goodsFileId:t.goodsFileId||"",goodsId:t.goodsId||"",relevanceId:t.relevanceId||"",resource:t.resource||"",resourceType:t.resourceType||"",teachInstId:t.teachInstId||"",limitSize:Number(t.limitSize)||100,innerHeight:Number(t.innerHeight)||500,innerWidth:Number(t.innerWidth)||375,luminance:t.luminance||"luminance",isNote:t.isNote||"yes",systemType:t.systemType||""};function i(){Wt({goodsId:o.goodsId},n).then((function(t){e.sourceList=t.data.sourceList||[]}))}function l(){Ht({fileType:o.fileType,goodsFileId:o.goodsFileId,goodsId:o.goodsId,relevanceId:o.relevanceId,resource:o.resource,resourceType:o.resourceType,teachInstId:o.teachInstId},n)}function f(){Kt({fileId:o.goodsFileId,readingLocation:localStorage.getItem("location_"+o.goodsFileId)||""},n)}function d(t,r){Vt({filesId:o.goodsFileId,type:t},n).then((function(n){r&&(0,u.F)(r),"note"==t?e.notesList=n.data||[]:"bookmark"==t?e.bookmarkList=n.data||[]:"lineation"==t&&(e.lineationList=n.data||[])}))}function h(e){b(e,"note")}function p(e){b(e,"bookmark")}function m(e){E(e,"bookmark")}function g(e){b(e,"lineation")}function b(e,t){var r={goodsId:o.goodsId,goodsFileId:o.goodsFileId,originalText:e.originalText,textRange:e.textRange,href:e.href,noteContent:e.noteContent,type:t};$t(r,n).then((function(e){d(t,"添加成功")}))}function y(e){Gt(e,n).then((function(e){(0,u.F)("修改成功")}))}function w(e,t){E(e,t)}function E(e,t){Xt({noteId:e.noteId},n).then((function(e){d(t,"删除成功")}))}function O(){Zt({id:6},n).then((function(t){"继续加"==t.msg&&(e.integral=(0,a.IU)(t.data).quantity,e.integralBox=!0,v())}))}function v(){var t=setInterval((function(){e.width+=1,e.width>=80&&Qt({id:6},n).then((function(n){e.integralBox=!1,e.width=22,clearInterval(t),1==n.data?((0,u.F)("添加积分成功"),O()):(0,u.F)("今天已经领完了，明天再试试吧！")}))}),15500)}return(0,r.bv)((function(){o.goodsId&&(O(),i(),d("note",""),d("bookmark",""),d("lineation",""),Jt(n).then((function(t){e.TimeParameter=t.data||1,setInterval((function(){l(),f()}),6e4*e.TimeParameter)})))})),(0,s.pi)((0,s.pi)({data:e,bookInfo:o},(0,a.BK)(e)),{getNoteInfo:d,confirmAddNotes:h,confirmAmendNotes:y,deleteNotes:w,addBookmark:p,deleteBookmark:m,addUnderline:g})}}),en=(n(1267),n(3744));const tn=(0,en.Z)(Yt,[["render",i],["__scopeId","data-v-b7fb2040"]]);var nn=tn},1267:function(e,t,n){var r=n(808);r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);var o=n(4402).Z;o("a71e1fbc",r,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=449.67e8fb1d.js.map