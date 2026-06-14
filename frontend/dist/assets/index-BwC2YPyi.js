(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}})();var md={exports:{}},Jo={},fd={exports:{}},tt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _n=Symbol.for("react.element"),Pu=Symbol.for("react.portal"),Ou=Symbol.for("react.fragment"),$u=Symbol.for("react.strict_mode"),Hu=Symbol.for("react.profiler"),Uu=Symbol.for("react.provider"),Gu=Symbol.for("react.context"),Vu=Symbol.for("react.forward_ref"),Qu=Symbol.for("react.suspense"),Yu=Symbol.for("react.memo"),Ku=Symbol.for("react.lazy"),Yl=Symbol.iterator;function Xu(t){return t===null||typeof t!="object"?null:(t=Yl&&t[Yl]||t["@@iterator"],typeof t=="function"?t:null)}var vd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yd=Object.assign,hd={};function Ue(t,r,e){this.props=t,this.context=r,this.refs=hd,this.updater=e||vd}Ue.prototype.isReactComponent={};Ue.prototype.setState=function(t,r){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,r,"setState")};Ue.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xd(){}xd.prototype=Ue.prototype;function Yi(t,r,e){this.props=t,this.context=r,this.refs=hd,this.updater=e||vd}var Ki=Yi.prototype=new xd;Ki.constructor=Yi;yd(Ki,Ue.prototype);Ki.isPureReactComponent=!0;var Kl=Array.isArray,wd=Object.prototype.hasOwnProperty,Xi={current:null},kd={key:!0,ref:!0,__self:!0,__source:!0};function Sd(t,r,e){var n,o={},i=null,l=null;if(r!=null)for(n in r.ref!==void 0&&(l=r.ref),r.key!==void 0&&(i=""+r.key),r)wd.call(r,n)&&!kd.hasOwnProperty(n)&&(o[n]=r[n]);var a=arguments.length-2;if(a===1)o.children=e;else if(1<a){for(var d=Array(a),g=0;g<a;g++)d[g]=arguments[g+2];o.children=d}if(t&&t.defaultProps)for(n in a=t.defaultProps,a)o[n]===void 0&&(o[n]=a[n]);return{$$typeof:_n,type:t,key:i,ref:l,props:o,_owner:Xi.current}}function Ju(t,r){return{$$typeof:_n,type:t.type,key:r,ref:t.ref,props:t.props,_owner:t._owner}}function Ji(t){return typeof t=="object"&&t!==null&&t.$$typeof===_n}function Zu(t){var r={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(e){return r[e]})}var Xl=/\/+/g;function vs(t,r){return typeof t=="object"&&t!==null&&t.key!=null?Zu(""+t.key):r.toString(36)}function bo(t,r,e,n,o){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case _n:case Pu:l=!0}}if(l)return l=t,o=o(l),t=n===""?"."+vs(l,0):n,Kl(o)?(e="",t!=null&&(e=t.replace(Xl,"$&/")+"/"),bo(o,r,e,"",function(g){return g})):o!=null&&(Ji(o)&&(o=Ju(o,e+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Xl,"$&/")+"/")+t)),r.push(o)),1;if(l=0,n=n===""?".":n+":",Kl(t))for(var a=0;a<t.length;a++){i=t[a];var d=n+vs(i,a);l+=bo(i,r,e,d,o)}else if(d=Xu(t),typeof d=="function")for(t=d.call(t),a=0;!(i=t.next()).done;)i=i.value,d=n+vs(i,a++),l+=bo(i,r,e,d,o);else if(i==="object")throw r=String(t),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return l}function $n(t,r,e){if(t==null)return t;var n=[],o=0;return bo(t,n,"","",function(i){return r.call(e,i,o++)}),n}function qu(t){if(t._status===-1){var r=t._result;r=r(),r.then(function(e){(t._status===0||t._status===-1)&&(t._status=1,t._result=e)},function(e){(t._status===0||t._status===-1)&&(t._status=2,t._result=e)}),t._status===-1&&(t._status=0,t._result=r)}if(t._status===1)return t._result.default;throw t._result}var Nt={current:null},co={transition:null},tb={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:co,ReactCurrentOwner:Xi};function jd(){throw Error("act(...) is not supported in production builds of React.")}tt.Children={map:$n,forEach:function(t,r,e){$n(t,function(){r.apply(this,arguments)},e)},count:function(t){var r=0;return $n(t,function(){r++}),r},toArray:function(t){return $n(t,function(r){return r})||[]},only:function(t){if(!Ji(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};tt.Component=Ue;tt.Fragment=Ou;tt.Profiler=Hu;tt.PureComponent=Yi;tt.StrictMode=$u;tt.Suspense=Qu;tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tb;tt.act=jd;tt.cloneElement=function(t,r,e){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=yd({},t.props),o=t.key,i=t.ref,l=t._owner;if(r!=null){if(r.ref!==void 0&&(i=r.ref,l=Xi.current),r.key!==void 0&&(o=""+r.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(d in r)wd.call(r,d)&&!kd.hasOwnProperty(d)&&(n[d]=r[d]===void 0&&a!==void 0?a[d]:r[d])}var d=arguments.length-2;if(d===1)n.children=e;else if(1<d){a=Array(d);for(var g=0;g<d;g++)a[g]=arguments[g+2];n.children=a}return{$$typeof:_n,type:t.type,key:o,ref:i,props:n,_owner:l}};tt.createContext=function(t){return t={$$typeof:Gu,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Uu,_context:t},t.Consumer=t};tt.createElement=Sd;tt.createFactory=function(t){var r=Sd.bind(null,t);return r.type=t,r};tt.createRef=function(){return{current:null}};tt.forwardRef=function(t){return{$$typeof:Vu,render:t}};tt.isValidElement=Ji;tt.lazy=function(t){return{$$typeof:Ku,_payload:{_status:-1,_result:t},_init:qu}};tt.memo=function(t,r){return{$$typeof:Yu,type:t,compare:r===void 0?null:r}};tt.startTransition=function(t){var r=co.transition;co.transition={};try{t()}finally{co.transition=r}};tt.unstable_act=jd;tt.useCallback=function(t,r){return Nt.current.useCallback(t,r)};tt.useContext=function(t){return Nt.current.useContext(t)};tt.useDebugValue=function(){};tt.useDeferredValue=function(t){return Nt.current.useDeferredValue(t)};tt.useEffect=function(t,r){return Nt.current.useEffect(t,r)};tt.useId=function(){return Nt.current.useId()};tt.useImperativeHandle=function(t,r,e){return Nt.current.useImperativeHandle(t,r,e)};tt.useInsertionEffect=function(t,r){return Nt.current.useInsertionEffect(t,r)};tt.useLayoutEffect=function(t,r){return Nt.current.useLayoutEffect(t,r)};tt.useMemo=function(t,r){return Nt.current.useMemo(t,r)};tt.useReducer=function(t,r,e){return Nt.current.useReducer(t,r,e)};tt.useRef=function(t){return Nt.current.useRef(t)};tt.useState=function(t){return Nt.current.useState(t)};tt.useSyncExternalStore=function(t,r,e){return Nt.current.useSyncExternalStore(t,r,e)};tt.useTransition=function(){return Nt.current.useTransition()};tt.version="18.3.1";fd.exports=tt;var I=fd.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rb=I,eb=Symbol.for("react.element"),nb=Symbol.for("react.fragment"),ob=Object.prototype.hasOwnProperty,sb=rb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ib={key:!0,ref:!0,__self:!0,__source:!0};function Cd(t,r,e){var n,o={},i=null,l=null;e!==void 0&&(i=""+e),r.key!==void 0&&(i=""+r.key),r.ref!==void 0&&(l=r.ref);for(n in r)ob.call(r,n)&&!ib.hasOwnProperty(n)&&(o[n]=r[n]);if(t&&t.defaultProps)for(n in r=t.defaultProps,r)o[n]===void 0&&(o[n]=r[n]);return{$$typeof:eb,type:t,key:i,ref:l,props:o,_owner:sb.current}}Jo.Fragment=nb;Jo.jsx=Cd;Jo.jsxs=Cd;md.exports=Jo;var s=md.exports,Id={exports:{}},Xt={},Ed={exports:{}},zd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function r(p,T){var y=p.length;p.push(T);t:for(;0<y;){var F=y-1>>>1,U=p[F];if(0<o(U,T))p[F]=T,p[y]=U,y=F;else break t}}function e(p){return p.length===0?null:p[0]}function n(p){if(p.length===0)return null;var T=p[0],y=p.pop();if(y!==T){p[0]=y;t:for(var F=0,U=p.length,st=U>>>1;F<st;){var Z=2*(F+1)-1,yt=p[Z],St=Z+1,Q=p[St];if(0>o(yt,y))St<U&&0>o(Q,yt)?(p[F]=Q,p[St]=y,F=St):(p[F]=yt,p[Z]=y,F=Z);else if(St<U&&0>o(Q,y))p[F]=Q,p[St]=y,F=St;else break t}}return T}function o(p,T){var y=p.sortIndex-T.sortIndex;return y!==0?y:p.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();t.unstable_now=function(){return l.now()-a}}var d=[],g=[],m=1,v=null,f=3,S=!1,w=!1,k=!1,C=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(p){for(var T=e(g);T!==null;){if(T.callback===null)n(g);else if(T.startTime<=p)n(g),T.sortIndex=T.expirationTime,r(d,T);else break;T=e(g)}}function x(p){if(k=!1,b(p),!w)if(e(d)!==null)w=!0,W(A);else{var T=e(g);T!==null&&h(x,T.startTime-p)}}function A(p,T){w=!1,k&&(k=!1,c(R),R=-1),S=!0;var y=f;try{for(b(T),v=e(d);v!==null&&(!(v.expirationTime>T)||p&&!j());){var F=v.callback;if(typeof F=="function"){v.callback=null,f=v.priorityLevel;var U=F(v.expirationTime<=T);T=t.unstable_now(),typeof U=="function"?v.callback=U:v===e(d)&&n(d),b(T)}else n(d);v=e(d)}if(v!==null)var st=!0;else{var Z=e(g);Z!==null&&h(x,Z.startTime-T),st=!1}return st}finally{v=null,f=y,S=!1}}var _=!1,L=null,R=-1,z=5,D=-1;function j(){return!(t.unstable_now()-D<z)}function M(){if(L!==null){var p=t.unstable_now();D=p;var T=!0;try{T=L(!0,p)}finally{T?O():(_=!1,L=null)}}else _=!1}var O;if(typeof u=="function")O=function(){u(M)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ot=J.port2;J.port1.onmessage=M,O=function(){ot.postMessage(null)}}else O=function(){C(M,0)};function W(p){L=p,_||(_=!0,O())}function h(p,T){R=C(function(){p(t.unstable_now())},T)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(p){p.callback=null},t.unstable_continueExecution=function(){w||S||(w=!0,W(A))},t.unstable_forceFrameRate=function(p){0>p||125<p?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<p?Math.floor(1e3/p):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return e(d)},t.unstable_next=function(p){switch(f){case 1:case 2:case 3:var T=3;break;default:T=f}var y=f;f=T;try{return p()}finally{f=y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(p,T){switch(p){case 1:case 2:case 3:case 4:case 5:break;default:p=3}var y=f;f=p;try{return T()}finally{f=y}},t.unstable_scheduleCallback=function(p,T,y){var F=t.unstable_now();switch(typeof y=="object"&&y!==null?(y=y.delay,y=typeof y=="number"&&0<y?F+y:F):y=F,p){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=y+U,p={id:m++,callback:T,priorityLevel:p,startTime:y,expirationTime:U,sortIndex:-1},y>F?(p.sortIndex=y,r(g,p),e(d)===null&&p===e(g)&&(k?(c(R),R=-1):k=!0,h(x,y-F))):(p.sortIndex=U,r(d,p),w||S||(w=!0,W(A))),p},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(p){var T=f;return function(){var y=f;f=T;try{return p.apply(this,arguments)}finally{f=y}}}})(zd);Ed.exports=zd;var lb=Ed.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ab=I,Kt=lb;function B(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,e=1;e<arguments.length;e++)r+="&args[]="+encodeURIComponent(arguments[e]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Td=new Set,vn={};function be(t,r){Le(t,r),Le(t+"Capture",r)}function Le(t,r){for(vn[t]=r,t=0;t<r.length;t++)Td.add(r[t])}var jr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qs=Object.prototype.hasOwnProperty,db=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jl={},Zl={};function gb(t){return qs.call(Zl,t)?!0:qs.call(Jl,t)?!1:db.test(t)?Zl[t]=!0:(Jl[t]=!0,!1)}function ub(t,r,e,n){if(e!==null&&e.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return n?!1:e!==null?!e.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function bb(t,r,e,n){if(r===null||typeof r>"u"||ub(t,r,e,n))return!0;if(n)return!1;if(e!==null)switch(e.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Pt(t,r,e,n,o,i,l){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=e,this.propertyName=t,this.type=r,this.sanitizeURL=i,this.removeEmptyString=l}var At={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){At[t]=new Pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];At[r]=new Pt(r,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){At[t]=new Pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){At[t]=new Pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){At[t]=new Pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){At[t]=new Pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){At[t]=new Pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){At[t]=new Pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){At[t]=new Pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zi=/[\-:]([a-z])/g;function qi(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(Zi,qi);At[r]=new Pt(r,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(Zi,qi);At[r]=new Pt(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(Zi,qi);At[r]=new Pt(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){At[t]=new Pt(t,1,!1,t.toLowerCase(),null,!1,!1)});At.xlinkHref=new Pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){At[t]=new Pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function tl(t,r,e,n){var o=At.hasOwnProperty(r)?At[r]:null;(o!==null?o.type!==0:n||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(bb(r,e,o,n)&&(e=null),n||o===null?gb(r)&&(e===null?t.removeAttribute(r):t.setAttribute(r,""+e)):o.mustUseProperty?t[o.propertyName]=e===null?o.type===3?!1:"":e:(r=o.attributeName,n=o.attributeNamespace,e===null?t.removeAttribute(r):(o=o.type,e=o===3||o===4&&e===!0?"":""+e,n?t.setAttributeNS(n,r,e):t.setAttribute(r,e))))}var zr=ab.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hn=Symbol.for("react.element"),ve=Symbol.for("react.portal"),ye=Symbol.for("react.fragment"),rl=Symbol.for("react.strict_mode"),ti=Symbol.for("react.profiler"),Ad=Symbol.for("react.provider"),Dd=Symbol.for("react.context"),el=Symbol.for("react.forward_ref"),ri=Symbol.for("react.suspense"),ei=Symbol.for("react.suspense_list"),nl=Symbol.for("react.memo"),Dr=Symbol.for("react.lazy"),Fd=Symbol.for("react.offscreen"),ql=Symbol.iterator;function Qe(t){return t===null||typeof t!="object"?null:(t=ql&&t[ql]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,ys;function nn(t){if(ys===void 0)try{throw Error()}catch(e){var r=e.stack.trim().match(/\n( *(at )?)/);ys=r&&r[1]||""}return`
`+ys+t}var hs=!1;function xs(t,r){if(!t||hs)return"";hs=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(g){var n=g}Reflect.construct(t,[],r)}else{try{r.call()}catch(g){n=g}t.call(r.prototype)}else{try{throw Error()}catch(g){n=g}t()}}catch(g){if(g&&n&&typeof g.stack=="string"){for(var o=g.stack.split(`
`),i=n.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var d=`
`+o[l].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=l&&0<=a);break}}}finally{hs=!1,Error.prepareStackTrace=e}return(t=t?t.displayName||t.name:"")?nn(t):""}function cb(t){switch(t.tag){case 5:return nn(t.type);case 16:return nn("Lazy");case 13:return nn("Suspense");case 19:return nn("SuspenseList");case 0:case 2:case 15:return t=xs(t.type,!1),t;case 11:return t=xs(t.type.render,!1),t;case 1:return t=xs(t.type,!0),t;default:return""}}function ni(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ye:return"Fragment";case ve:return"Portal";case ti:return"Profiler";case rl:return"StrictMode";case ri:return"Suspense";case ei:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dd:return(t.displayName||"Context")+".Consumer";case Ad:return(t._context.displayName||"Context")+".Provider";case el:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case nl:return r=t.displayName||null,r!==null?r:ni(t.type)||"Memo";case Dr:r=t._payload,t=t._init;try{return ni(t(r))}catch{}}return null}function pb(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ni(r);case 8:return r===rl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bd(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function mb(t){var r=Bd(t)?"checked":"value",e=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),n=""+t[r];if(!t.hasOwnProperty(r)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var o=e.get,i=e.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return o.call(this)},set:function(l){n=""+l,i.call(this,l)}}),Object.defineProperty(t,r,{enumerable:e.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Un(t){t._valueTracker||(t._valueTracker=mb(t))}function Rd(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var e=r.getValue(),n="";return t&&(n=Bd(t)?t.checked?"true":"false":t.value),t=n,t!==e?(r.setValue(t),!0):!1}function Co(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function oi(t,r){var e=r.checked;return vt({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:e??t._wrapperState.initialChecked})}function ta(t,r){var e=r.defaultValue==null?"":r.defaultValue,n=r.checked!=null?r.checked:r.defaultChecked;e=Vr(r.value!=null?r.value:e),t._wrapperState={initialChecked:n,initialValue:e,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function _d(t,r){r=r.checked,r!=null&&tl(t,"checked",r,!1)}function si(t,r){_d(t,r);var e=Vr(r.value),n=r.type;if(e!=null)n==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+e):t.value!==""+e&&(t.value=""+e);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?ii(t,r.type,e):r.hasOwnProperty("defaultValue")&&ii(t,r.type,Vr(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function ra(t,r,e){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var n=r.type;if(!(n!=="submit"&&n!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,e||r===t.value||(t.value=r),t.defaultValue=r}e=t.name,e!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,e!==""&&(t.name=e)}function ii(t,r,e){(r!=="number"||Co(t.ownerDocument)!==t)&&(e==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+e&&(t.defaultValue=""+e))}var on=Array.isArray;function Ae(t,r,e,n){if(t=t.options,r){r={};for(var o=0;o<e.length;o++)r["$"+e[o]]=!0;for(e=0;e<t.length;e++)o=r.hasOwnProperty("$"+t[e].value),t[e].selected!==o&&(t[e].selected=o),o&&n&&(t[e].defaultSelected=!0)}else{for(e=""+Vr(e),r=null,o=0;o<t.length;o++){if(t[o].value===e){t[o].selected=!0,n&&(t[o].defaultSelected=!0);return}r!==null||t[o].disabled||(r=t[o])}r!==null&&(r.selected=!0)}}function li(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(B(91));return vt({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ea(t,r){var e=r.value;if(e==null){if(e=r.children,r=r.defaultValue,e!=null){if(r!=null)throw Error(B(92));if(on(e)){if(1<e.length)throw Error(B(93));e=e[0]}r=e}r==null&&(r=""),e=r}t._wrapperState={initialValue:Vr(e)}}function Ld(t,r){var e=Vr(r.value),n=Vr(r.defaultValue);e!=null&&(e=""+e,e!==t.value&&(t.value=e),r.defaultValue==null&&t.defaultValue!==e&&(t.defaultValue=e)),n!=null&&(t.defaultValue=""+n)}function na(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Md(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ai(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Md(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Gn,Wd=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,e,n,o){MSApp.execUnsafeLocalFunction(function(){return t(r,e,n,o)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Gn=Gn||document.createElement("div"),Gn.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Gn.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function yn(t,r){if(r){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=r;return}}t.textContent=r}var an={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fb=["Webkit","ms","Moz","O"];Object.keys(an).forEach(function(t){fb.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),an[r]=an[t]})});function Nd(t,r,e){return r==null||typeof r=="boolean"||r===""?"":e||typeof r!="number"||r===0||an.hasOwnProperty(t)&&an[t]?(""+r).trim():r+"px"}function Pd(t,r){t=t.style;for(var e in r)if(r.hasOwnProperty(e)){var n=e.indexOf("--")===0,o=Nd(e,r[e],n);e==="float"&&(e="cssFloat"),n?t.setProperty(e,o):t[e]=o}}var vb=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function di(t,r){if(r){if(vb[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(B(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(B(61))}if(r.style!=null&&typeof r.style!="object")throw Error(B(62))}}function gi(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ui=null;function ol(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bi=null,De=null,Fe=null;function oa(t){if(t=Wn(t)){if(typeof bi!="function")throw Error(B(280));var r=t.stateNode;r&&(r=es(r),bi(t.stateNode,t.type,r))}}function Od(t){De?Fe?Fe.push(t):Fe=[t]:De=t}function $d(){if(De){var t=De,r=Fe;if(Fe=De=null,oa(t),r)for(t=0;t<r.length;t++)oa(r[t])}}function Hd(t,r){return t(r)}function Ud(){}var ws=!1;function Gd(t,r,e){if(ws)return t(r,e);ws=!0;try{return Hd(t,r,e)}finally{ws=!1,(De!==null||Fe!==null)&&(Ud(),$d())}}function hn(t,r){var e=t.stateNode;if(e===null)return null;var n=es(e);if(n===null)return null;e=n[r];t:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(B(231,r,typeof e));return e}var ci=!1;if(jr)try{var Ye={};Object.defineProperty(Ye,"passive",{get:function(){ci=!0}}),window.addEventListener("test",Ye,Ye),window.removeEventListener("test",Ye,Ye)}catch{ci=!1}function yb(t,r,e,n,o,i,l,a,d){var g=Array.prototype.slice.call(arguments,3);try{r.apply(e,g)}catch(m){this.onError(m)}}var dn=!1,Io=null,Eo=!1,pi=null,hb={onError:function(t){dn=!0,Io=t}};function xb(t,r,e,n,o,i,l,a,d){dn=!1,Io=null,yb.apply(hb,arguments)}function wb(t,r,e,n,o,i,l,a,d){if(xb.apply(this,arguments),dn){if(dn){var g=Io;dn=!1,Io=null}else throw Error(B(198));Eo||(Eo=!0,pi=g)}}function ce(t){var r=t,e=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,r.flags&4098&&(e=r.return),t=r.return;while(t)}return r.tag===3?e:null}function Vd(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function sa(t){if(ce(t)!==t)throw Error(B(188))}function kb(t){var r=t.alternate;if(!r){if(r=ce(t),r===null)throw Error(B(188));return r!==t?null:t}for(var e=t,n=r;;){var o=e.return;if(o===null)break;var i=o.alternate;if(i===null){if(n=o.return,n!==null){e=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===e)return sa(o),t;if(i===n)return sa(o),r;i=i.sibling}throw Error(B(188))}if(e.return!==n.return)e=o,n=i;else{for(var l=!1,a=o.child;a;){if(a===e){l=!0,e=o,n=i;break}if(a===n){l=!0,n=o,e=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===e){l=!0,e=i,n=o;break}if(a===n){l=!0,n=i,e=o;break}a=a.sibling}if(!l)throw Error(B(189))}}if(e.alternate!==n)throw Error(B(190))}if(e.tag!==3)throw Error(B(188));return e.stateNode.current===e?t:r}function Qd(t){return t=kb(t),t!==null?Yd(t):null}function Yd(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=Yd(t);if(r!==null)return r;t=t.sibling}return null}var Kd=Kt.unstable_scheduleCallback,ia=Kt.unstable_cancelCallback,Sb=Kt.unstable_shouldYield,jb=Kt.unstable_requestPaint,xt=Kt.unstable_now,Cb=Kt.unstable_getCurrentPriorityLevel,sl=Kt.unstable_ImmediatePriority,Xd=Kt.unstable_UserBlockingPriority,zo=Kt.unstable_NormalPriority,Ib=Kt.unstable_LowPriority,Jd=Kt.unstable_IdlePriority,Zo=null,fr=null;function Eb(t){if(fr&&typeof fr.onCommitFiberRoot=="function")try{fr.onCommitFiberRoot(Zo,t,void 0,(t.current.flags&128)===128)}catch{}}var dr=Math.clz32?Math.clz32:Ab,zb=Math.log,Tb=Math.LN2;function Ab(t){return t>>>=0,t===0?32:31-(zb(t)/Tb|0)|0}var Vn=64,Qn=4194304;function sn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function To(t,r){var e=t.pendingLanes;if(e===0)return 0;var n=0,o=t.suspendedLanes,i=t.pingedLanes,l=e&268435455;if(l!==0){var a=l&~o;a!==0?n=sn(a):(i&=l,i!==0&&(n=sn(i)))}else l=e&~o,l!==0?n=sn(l):i!==0&&(n=sn(i));if(n===0)return 0;if(r!==0&&r!==n&&!(r&o)&&(o=n&-n,i=r&-r,o>=i||o===16&&(i&4194240)!==0))return r;if(n&4&&(n|=e&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=n;0<r;)e=31-dr(r),o=1<<e,n|=t[e],r&=~o;return n}function Db(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fb(t,r){for(var e=t.suspendedLanes,n=t.pingedLanes,o=t.expirationTimes,i=t.pendingLanes;0<i;){var l=31-dr(i),a=1<<l,d=o[l];d===-1?(!(a&e)||a&n)&&(o[l]=Db(a,r)):d<=r&&(t.expiredLanes|=a),i&=~a}}function mi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Zd(){var t=Vn;return Vn<<=1,!(Vn&4194240)&&(Vn=64),t}function ks(t){for(var r=[],e=0;31>e;e++)r.push(t);return r}function Ln(t,r,e){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-dr(r),t[r]=e}function Bb(t,r){var e=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<e;){var o=31-dr(e),i=1<<o;r[o]=0,n[o]=-1,t[o]=-1,e&=~i}}function il(t,r){var e=t.entangledLanes|=r;for(t=t.entanglements;e;){var n=31-dr(e),o=1<<n;o&r|t[n]&r&&(t[n]|=r),e&=~o}}var lt=0;function qd(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var tg,ll,rg,eg,ng,fi=!1,Yn=[],Wr=null,Nr=null,Pr=null,xn=new Map,wn=new Map,Rr=[],Rb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function la(t,r){switch(t){case"focusin":case"focusout":Wr=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":xn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":wn.delete(r.pointerId)}}function Ke(t,r,e,n,o,i){return t===null||t.nativeEvent!==i?(t={blockedOn:r,domEventName:e,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},r!==null&&(r=Wn(r),r!==null&&ll(r)),t):(t.eventSystemFlags|=n,r=t.targetContainers,o!==null&&r.indexOf(o)===-1&&r.push(o),t)}function _b(t,r,e,n,o){switch(r){case"focusin":return Wr=Ke(Wr,t,r,e,n,o),!0;case"dragenter":return Nr=Ke(Nr,t,r,e,n,o),!0;case"mouseover":return Pr=Ke(Pr,t,r,e,n,o),!0;case"pointerover":var i=o.pointerId;return xn.set(i,Ke(xn.get(i)||null,t,r,e,n,o)),!0;case"gotpointercapture":return i=o.pointerId,wn.set(i,Ke(wn.get(i)||null,t,r,e,n,o)),!0}return!1}function og(t){var r=te(t.target);if(r!==null){var e=ce(r);if(e!==null){if(r=e.tag,r===13){if(r=Vd(e),r!==null){t.blockedOn=r,ng(t.priority,function(){rg(e)});return}}else if(r===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function po(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var e=vi(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(e===null){e=t.nativeEvent;var n=new e.constructor(e.type,e);ui=n,e.target.dispatchEvent(n),ui=null}else return r=Wn(e),r!==null&&ll(r),t.blockedOn=e,!1;r.shift()}return!0}function aa(t,r,e){po(t)&&e.delete(r)}function Lb(){fi=!1,Wr!==null&&po(Wr)&&(Wr=null),Nr!==null&&po(Nr)&&(Nr=null),Pr!==null&&po(Pr)&&(Pr=null),xn.forEach(aa),wn.forEach(aa)}function Xe(t,r){t.blockedOn===r&&(t.blockedOn=null,fi||(fi=!0,Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority,Lb)))}function kn(t){function r(o){return Xe(o,t)}if(0<Yn.length){Xe(Yn[0],t);for(var e=1;e<Yn.length;e++){var n=Yn[e];n.blockedOn===t&&(n.blockedOn=null)}}for(Wr!==null&&Xe(Wr,t),Nr!==null&&Xe(Nr,t),Pr!==null&&Xe(Pr,t),xn.forEach(r),wn.forEach(r),e=0;e<Rr.length;e++)n=Rr[e],n.blockedOn===t&&(n.blockedOn=null);for(;0<Rr.length&&(e=Rr[0],e.blockedOn===null);)og(e),e.blockedOn===null&&Rr.shift()}var Be=zr.ReactCurrentBatchConfig,Ao=!0;function Mb(t,r,e,n){var o=lt,i=Be.transition;Be.transition=null;try{lt=1,al(t,r,e,n)}finally{lt=o,Be.transition=i}}function Wb(t,r,e,n){var o=lt,i=Be.transition;Be.transition=null;try{lt=4,al(t,r,e,n)}finally{lt=o,Be.transition=i}}function al(t,r,e,n){if(Ao){var o=vi(t,r,e,n);if(o===null)Fs(t,r,n,Do,e),la(t,n);else if(_b(o,t,r,e,n))n.stopPropagation();else if(la(t,n),r&4&&-1<Rb.indexOf(t)){for(;o!==null;){var i=Wn(o);if(i!==null&&tg(i),i=vi(t,r,e,n),i===null&&Fs(t,r,n,Do,e),i===o)break;o=i}o!==null&&n.stopPropagation()}else Fs(t,r,n,null,e)}}var Do=null;function vi(t,r,e,n){if(Do=null,t=ol(n),t=te(t),t!==null)if(r=ce(t),r===null)t=null;else if(e=r.tag,e===13){if(t=Vd(r),t!==null)return t;t=null}else if(e===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return Do=t,null}function sg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cb()){case sl:return 1;case Xd:return 4;case zo:case Ib:return 16;case Jd:return 536870912;default:return 16}default:return 16}}var Lr=null,dl=null,mo=null;function ig(){if(mo)return mo;var t,r=dl,e=r.length,n,o="value"in Lr?Lr.value:Lr.textContent,i=o.length;for(t=0;t<e&&r[t]===o[t];t++);var l=e-t;for(n=1;n<=l&&r[e-n]===o[i-n];n++);return mo=o.slice(t,1<n?1-n:void 0)}function fo(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Kn(){return!0}function da(){return!1}function Jt(t){function r(e,n,o,i,l){this._reactName=e,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(e=t[a],this[a]=e?e(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Kn:da,this.isPropagationStopped=da,this}return vt(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Kn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Kn)},persist:function(){},isPersistent:Kn}),r}var Ge={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gl=Jt(Ge),Mn=vt({},Ge,{view:0,detail:0}),Nb=Jt(Mn),Ss,js,Je,qo=vt({},Mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ul,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Je&&(Je&&t.type==="mousemove"?(Ss=t.screenX-Je.screenX,js=t.screenY-Je.screenY):js=Ss=0,Je=t),Ss)},movementY:function(t){return"movementY"in t?t.movementY:js}}),ga=Jt(qo),Pb=vt({},qo,{dataTransfer:0}),Ob=Jt(Pb),$b=vt({},Mn,{relatedTarget:0}),Cs=Jt($b),Hb=vt({},Ge,{animationName:0,elapsedTime:0,pseudoElement:0}),Ub=Jt(Hb),Gb=vt({},Ge,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Vb=Jt(Gb),Qb=vt({},Ge,{data:0}),ua=Jt(Qb),Yb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jb(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=Xb[t])?!!r[t]:!1}function ul(){return Jb}var Zb=vt({},Mn,{key:function(t){if(t.key){var r=Yb[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=fo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Kb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ul,charCode:function(t){return t.type==="keypress"?fo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qb=Jt(Zb),tc=vt({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ba=Jt(tc),rc=vt({},Mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ul}),ec=Jt(rc),nc=vt({},Ge,{propertyName:0,elapsedTime:0,pseudoElement:0}),oc=Jt(nc),sc=vt({},qo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ic=Jt(sc),lc=[9,13,27,32],bl=jr&&"CompositionEvent"in window,gn=null;jr&&"documentMode"in document&&(gn=document.documentMode);var ac=jr&&"TextEvent"in window&&!gn,lg=jr&&(!bl||gn&&8<gn&&11>=gn),ca=" ",pa=!1;function ag(t,r){switch(t){case"keyup":return lc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var he=!1;function dc(t,r){switch(t){case"compositionend":return dg(r);case"keypress":return r.which!==32?null:(pa=!0,ca);case"textInput":return t=r.data,t===ca&&pa?null:t;default:return null}}function gc(t,r){if(he)return t==="compositionend"||!bl&&ag(t,r)?(t=ig(),mo=dl=Lr=null,he=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return lg&&r.locale!=="ko"?null:r.data;default:return null}}var uc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ma(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!uc[t.type]:r==="textarea"}function gg(t,r,e,n){Od(n),r=Fo(r,"onChange"),0<r.length&&(e=new gl("onChange","change",null,e,n),t.push({event:e,listeners:r}))}var un=null,Sn=null;function bc(t){wg(t,0)}function ts(t){var r=ke(t);if(Rd(r))return t}function cc(t,r){if(t==="change")return r}var ug=!1;if(jr){var Is;if(jr){var Es="oninput"in document;if(!Es){var fa=document.createElement("div");fa.setAttribute("oninput","return;"),Es=typeof fa.oninput=="function"}Is=Es}else Is=!1;ug=Is&&(!document.documentMode||9<document.documentMode)}function va(){un&&(un.detachEvent("onpropertychange",bg),Sn=un=null)}function bg(t){if(t.propertyName==="value"&&ts(Sn)){var r=[];gg(r,Sn,t,ol(t)),Gd(bc,r)}}function pc(t,r,e){t==="focusin"?(va(),un=r,Sn=e,un.attachEvent("onpropertychange",bg)):t==="focusout"&&va()}function mc(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ts(Sn)}function fc(t,r){if(t==="click")return ts(r)}function vc(t,r){if(t==="input"||t==="change")return ts(r)}function yc(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var ur=typeof Object.is=="function"?Object.is:yc;function jn(t,r){if(ur(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var e=Object.keys(t),n=Object.keys(r);if(e.length!==n.length)return!1;for(n=0;n<e.length;n++){var o=e[n];if(!qs.call(r,o)||!ur(t[o],r[o]))return!1}return!0}function ya(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ha(t,r){var e=ya(t);t=0;for(var n;e;){if(e.nodeType===3){if(n=t+e.textContent.length,t<=r&&n>=r)return{node:e,offset:r-t};t=n}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=ya(e)}}function cg(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?cg(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function pg(){for(var t=window,r=Co();r instanceof t.HTMLIFrameElement;){try{var e=typeof r.contentWindow.location.href=="string"}catch{e=!1}if(e)t=r.contentWindow;else break;r=Co(t.document)}return r}function cl(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function hc(t){var r=pg(),e=t.focusedElem,n=t.selectionRange;if(r!==e&&e&&e.ownerDocument&&cg(e.ownerDocument.documentElement,e)){if(n!==null&&cl(e)){if(r=n.start,t=n.end,t===void 0&&(t=r),"selectionStart"in e)e.selectionStart=r,e.selectionEnd=Math.min(t,e.value.length);else if(t=(r=e.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var o=e.textContent.length,i=Math.min(n.start,o);n=n.end===void 0?i:Math.min(n.end,o),!t.extend&&i>n&&(o=n,n=i,i=o),o=ha(e,i);var l=ha(e,n);o&&l&&(t.rangeCount!==1||t.anchorNode!==o.node||t.anchorOffset!==o.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(r=r.createRange(),r.setStart(o.node,o.offset),t.removeAllRanges(),i>n?(t.addRange(r),t.extend(l.node,l.offset)):(r.setEnd(l.node,l.offset),t.addRange(r)))}}for(r=[],t=e;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<r.length;e++)t=r[e],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xc=jr&&"documentMode"in document&&11>=document.documentMode,xe=null,yi=null,bn=null,hi=!1;function xa(t,r,e){var n=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;hi||xe==null||xe!==Co(n)||(n=xe,"selectionStart"in n&&cl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),bn&&jn(bn,n)||(bn=n,n=Fo(yi,"onSelect"),0<n.length&&(r=new gl("onSelect","select",null,r,e),t.push({event:r,listeners:n}),r.target=xe)))}function Xn(t,r){var e={};return e[t.toLowerCase()]=r.toLowerCase(),e["Webkit"+t]="webkit"+r,e["Moz"+t]="moz"+r,e}var we={animationend:Xn("Animation","AnimationEnd"),animationiteration:Xn("Animation","AnimationIteration"),animationstart:Xn("Animation","AnimationStart"),transitionend:Xn("Transition","TransitionEnd")},zs={},mg={};jr&&(mg=document.createElement("div").style,"AnimationEvent"in window||(delete we.animationend.animation,delete we.animationiteration.animation,delete we.animationstart.animation),"TransitionEvent"in window||delete we.transitionend.transition);function rs(t){if(zs[t])return zs[t];if(!we[t])return t;var r=we[t],e;for(e in r)if(r.hasOwnProperty(e)&&e in mg)return zs[t]=r[e];return t}var fg=rs("animationend"),vg=rs("animationiteration"),yg=rs("animationstart"),hg=rs("transitionend"),xg=new Map,wa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kr(t,r){xg.set(t,r),be(r,[t])}for(var Ts=0;Ts<wa.length;Ts++){var As=wa[Ts],wc=As.toLowerCase(),kc=As[0].toUpperCase()+As.slice(1);Kr(wc,"on"+kc)}Kr(fg,"onAnimationEnd");Kr(vg,"onAnimationIteration");Kr(yg,"onAnimationStart");Kr("dblclick","onDoubleClick");Kr("focusin","onFocus");Kr("focusout","onBlur");Kr(hg,"onTransitionEnd");Le("onMouseEnter",["mouseout","mouseover"]);Le("onMouseLeave",["mouseout","mouseover"]);Le("onPointerEnter",["pointerout","pointerover"]);Le("onPointerLeave",["pointerout","pointerover"]);be("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));be("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));be("onBeforeInput",["compositionend","keypress","textInput","paste"]);be("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));be("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));be("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sc=new Set("cancel close invalid load scroll toggle".split(" ").concat(ln));function ka(t,r,e){var n=t.type||"unknown-event";t.currentTarget=e,wb(n,r,void 0,t),t.currentTarget=null}function wg(t,r){r=(r&4)!==0;for(var e=0;e<t.length;e++){var n=t[e],o=n.event;n=n.listeners;t:{var i=void 0;if(r)for(var l=n.length-1;0<=l;l--){var a=n[l],d=a.instance,g=a.currentTarget;if(a=a.listener,d!==i&&o.isPropagationStopped())break t;ka(o,a,g),i=d}else for(l=0;l<n.length;l++){if(a=n[l],d=a.instance,g=a.currentTarget,a=a.listener,d!==i&&o.isPropagationStopped())break t;ka(o,a,g),i=d}}}if(Eo)throw t=pi,Eo=!1,pi=null,t}function gt(t,r){var e=r[ji];e===void 0&&(e=r[ji]=new Set);var n=t+"__bubble";e.has(n)||(kg(r,t,2,!1),e.add(n))}function Ds(t,r,e){var n=0;r&&(n|=4),kg(e,t,n,r)}var Jn="_reactListening"+Math.random().toString(36).slice(2);function Cn(t){if(!t[Jn]){t[Jn]=!0,Td.forEach(function(e){e!=="selectionchange"&&(Sc.has(e)||Ds(e,!1,t),Ds(e,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[Jn]||(r[Jn]=!0,Ds("selectionchange",!1,r))}}function kg(t,r,e,n){switch(sg(r)){case 1:var o=Mb;break;case 4:o=Wb;break;default:o=al}e=o.bind(null,r,e,t),o=void 0,!ci||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(o=!0),n?o!==void 0?t.addEventListener(r,e,{capture:!0,passive:o}):t.addEventListener(r,e,!0):o!==void 0?t.addEventListener(r,e,{passive:o}):t.addEventListener(r,e,!1)}function Fs(t,r,e,n,o){var i=n;if(!(r&1)&&!(r&2)&&n!==null)t:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var a=n.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=n.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===o||d.nodeType===8&&d.parentNode===o))return;l=l.return}for(;a!==null;){if(l=te(a),l===null)return;if(d=l.tag,d===5||d===6){n=i=l;continue t}a=a.parentNode}}n=n.return}Gd(function(){var g=i,m=ol(e),v=[];t:{var f=xg.get(t);if(f!==void 0){var S=gl,w=t;switch(t){case"keypress":if(fo(e)===0)break t;case"keydown":case"keyup":S=qb;break;case"focusin":w="focus",S=Cs;break;case"focusout":w="blur",S=Cs;break;case"beforeblur":case"afterblur":S=Cs;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=ga;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Ob;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=ec;break;case fg:case vg:case yg:S=Ub;break;case hg:S=oc;break;case"scroll":S=Nb;break;case"wheel":S=ic;break;case"copy":case"cut":case"paste":S=Vb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=ba}var k=(r&4)!==0,C=!k&&t==="scroll",c=k?f!==null?f+"Capture":null:f;k=[];for(var u=g,b;u!==null;){b=u;var x=b.stateNode;if(b.tag===5&&x!==null&&(b=x,c!==null&&(x=hn(u,c),x!=null&&k.push(In(u,x,b)))),C)break;u=u.return}0<k.length&&(f=new S(f,w,null,e,m),v.push({event:f,listeners:k}))}}if(!(r&7)){t:{if(f=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",f&&e!==ui&&(w=e.relatedTarget||e.fromElement)&&(te(w)||w[Cr]))break t;if((S||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,S?(w=e.relatedTarget||e.toElement,S=g,w=w?te(w):null,w!==null&&(C=ce(w),w!==C||w.tag!==5&&w.tag!==6)&&(w=null)):(S=null,w=g),S!==w)){if(k=ga,x="onMouseLeave",c="onMouseEnter",u="mouse",(t==="pointerout"||t==="pointerover")&&(k=ba,x="onPointerLeave",c="onPointerEnter",u="pointer"),C=S==null?f:ke(S),b=w==null?f:ke(w),f=new k(x,u+"leave",S,e,m),f.target=C,f.relatedTarget=b,x=null,te(m)===g&&(k=new k(c,u+"enter",w,e,m),k.target=b,k.relatedTarget=C,x=k),C=x,S&&w)r:{for(k=S,c=w,u=0,b=k;b;b=me(b))u++;for(b=0,x=c;x;x=me(x))b++;for(;0<u-b;)k=me(k),u--;for(;0<b-u;)c=me(c),b--;for(;u--;){if(k===c||c!==null&&k===c.alternate)break r;k=me(k),c=me(c)}k=null}else k=null;S!==null&&Sa(v,f,S,k,!1),w!==null&&C!==null&&Sa(v,C,w,k,!0)}}t:{if(f=g?ke(g):window,S=f.nodeName&&f.nodeName.toLowerCase(),S==="select"||S==="input"&&f.type==="file")var A=cc;else if(ma(f))if(ug)A=vc;else{A=mc;var _=pc}else(S=f.nodeName)&&S.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(A=fc);if(A&&(A=A(t,g))){gg(v,A,e,m);break t}_&&_(t,f,g),t==="focusout"&&(_=f._wrapperState)&&_.controlled&&f.type==="number"&&ii(f,"number",f.value)}switch(_=g?ke(g):window,t){case"focusin":(ma(_)||_.contentEditable==="true")&&(xe=_,yi=g,bn=null);break;case"focusout":bn=yi=xe=null;break;case"mousedown":hi=!0;break;case"contextmenu":case"mouseup":case"dragend":hi=!1,xa(v,e,m);break;case"selectionchange":if(xc)break;case"keydown":case"keyup":xa(v,e,m)}var L;if(bl)t:{switch(t){case"compositionstart":var R="onCompositionStart";break t;case"compositionend":R="onCompositionEnd";break t;case"compositionupdate":R="onCompositionUpdate";break t}R=void 0}else he?ag(t,e)&&(R="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&(R="onCompositionStart");R&&(lg&&e.locale!=="ko"&&(he||R!=="onCompositionStart"?R==="onCompositionEnd"&&he&&(L=ig()):(Lr=m,dl="value"in Lr?Lr.value:Lr.textContent,he=!0)),_=Fo(g,R),0<_.length&&(R=new ua(R,t,null,e,m),v.push({event:R,listeners:_}),L?R.data=L:(L=dg(e),L!==null&&(R.data=L)))),(L=ac?dc(t,e):gc(t,e))&&(g=Fo(g,"onBeforeInput"),0<g.length&&(m=new ua("onBeforeInput","beforeinput",null,e,m),v.push({event:m,listeners:g}),m.data=L))}wg(v,r)})}function In(t,r,e){return{instance:t,listener:r,currentTarget:e}}function Fo(t,r){for(var e=r+"Capture",n=[];t!==null;){var o=t,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=hn(t,e),i!=null&&n.unshift(In(t,i,o)),i=hn(t,r),i!=null&&n.push(In(t,i,o))),t=t.return}return n}function me(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Sa(t,r,e,n,o){for(var i=r._reactName,l=[];e!==null&&e!==n;){var a=e,d=a.alternate,g=a.stateNode;if(d!==null&&d===n)break;a.tag===5&&g!==null&&(a=g,o?(d=hn(e,i),d!=null&&l.unshift(In(e,d,a))):o||(d=hn(e,i),d!=null&&l.push(In(e,d,a)))),e=e.return}l.length!==0&&t.push({event:r,listeners:l})}var jc=/\r\n?/g,Cc=/\u0000|\uFFFD/g;function ja(t){return(typeof t=="string"?t:""+t).replace(jc,`
`).replace(Cc,"")}function Zn(t,r,e){if(r=ja(r),ja(t)!==r&&e)throw Error(B(425))}function Bo(){}var xi=null,wi=null;function ki(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Si=typeof setTimeout=="function"?setTimeout:void 0,Ic=typeof clearTimeout=="function"?clearTimeout:void 0,Ca=typeof Promise=="function"?Promise:void 0,Ec=typeof queueMicrotask=="function"?queueMicrotask:typeof Ca<"u"?function(t){return Ca.resolve(null).then(t).catch(zc)}:Si;function zc(t){setTimeout(function(){throw t})}function Bs(t,r){var e=r,n=0;do{var o=e.nextSibling;if(t.removeChild(e),o&&o.nodeType===8)if(e=o.data,e==="/$"){if(n===0){t.removeChild(o),kn(r);return}n--}else e!=="$"&&e!=="$?"&&e!=="$!"||n++;e=o}while(e);kn(r)}function Or(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Ia(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"){if(r===0)return t;r--}else e==="/$"&&r++}t=t.previousSibling}return null}var Ve=Math.random().toString(36).slice(2),mr="__reactFiber$"+Ve,En="__reactProps$"+Ve,Cr="__reactContainer$"+Ve,ji="__reactEvents$"+Ve,Tc="__reactListeners$"+Ve,Ac="__reactHandles$"+Ve;function te(t){var r=t[mr];if(r)return r;for(var e=t.parentNode;e;){if(r=e[Cr]||e[mr]){if(e=r.alternate,r.child!==null||e!==null&&e.child!==null)for(t=Ia(t);t!==null;){if(e=t[mr])return e;t=Ia(t)}return r}t=e,e=t.parentNode}return null}function Wn(t){return t=t[mr]||t[Cr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ke(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function es(t){return t[En]||null}var Ci=[],Se=-1;function Xr(t){return{current:t}}function ut(t){0>Se||(t.current=Ci[Se],Ci[Se]=null,Se--)}function dt(t,r){Se++,Ci[Se]=t.current,t.current=r}var Qr={},Lt=Xr(Qr),Ht=Xr(!1),le=Qr;function Me(t,r){var e=t.type.contextTypes;if(!e)return Qr;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===r)return n.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in e)o[i]=r[i];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),o}function Ut(t){return t=t.childContextTypes,t!=null}function Ro(){ut(Ht),ut(Lt)}function Ea(t,r,e){if(Lt.current!==Qr)throw Error(B(168));dt(Lt,r),dt(Ht,e)}function Sg(t,r,e){var n=t.stateNode;if(r=r.childContextTypes,typeof n.getChildContext!="function")return e;n=n.getChildContext();for(var o in n)if(!(o in r))throw Error(B(108,pb(t)||"Unknown",o));return vt({},e,n)}function _o(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qr,le=Lt.current,dt(Lt,t),dt(Ht,Ht.current),!0}function za(t,r,e){var n=t.stateNode;if(!n)throw Error(B(169));e?(t=Sg(t,r,le),n.__reactInternalMemoizedMergedChildContext=t,ut(Ht),ut(Lt),dt(Lt,t)):ut(Ht),dt(Ht,e)}var xr=null,ns=!1,Rs=!1;function jg(t){xr===null?xr=[t]:xr.push(t)}function Dc(t){ns=!0,jg(t)}function Jr(){if(!Rs&&xr!==null){Rs=!0;var t=0,r=lt;try{var e=xr;for(lt=1;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}xr=null,ns=!1}catch(o){throw xr!==null&&(xr=xr.slice(t+1)),Kd(sl,Jr),o}finally{lt=r,Rs=!1}}return null}var je=[],Ce=0,Lo=null,Mo=0,Zt=[],qt=0,ae=null,wr=1,kr="";function Zr(t,r){je[Ce++]=Mo,je[Ce++]=Lo,Lo=t,Mo=r}function Cg(t,r,e){Zt[qt++]=wr,Zt[qt++]=kr,Zt[qt++]=ae,ae=t;var n=wr;t=kr;var o=32-dr(n)-1;n&=~(1<<o),e+=1;var i=32-dr(r)+o;if(30<i){var l=o-o%5;i=(n&(1<<l)-1).toString(32),n>>=l,o-=l,wr=1<<32-dr(r)+o|e<<o|n,kr=i+t}else wr=1<<i|e<<o|n,kr=t}function pl(t){t.return!==null&&(Zr(t,1),Cg(t,1,0))}function ml(t){for(;t===Lo;)Lo=je[--Ce],je[Ce]=null,Mo=je[--Ce],je[Ce]=null;for(;t===ae;)ae=Zt[--qt],Zt[qt]=null,kr=Zt[--qt],Zt[qt]=null,wr=Zt[--qt],Zt[qt]=null}var Yt=null,Qt=null,bt=!1,ar=null;function Ig(t,r){var e=tr(5,null,null,0);e.elementType="DELETED",e.stateNode=r,e.return=t,r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)}function Ta(t,r){switch(t.tag){case 5:var e=t.type;return r=r.nodeType!==1||e.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,Yt=t,Qt=Or(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,Yt=t,Qt=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(e=ae!==null?{id:wr,overflow:kr}:null,t.memoizedState={dehydrated:r,treeContext:e,retryLane:1073741824},e=tr(18,null,null,0),e.stateNode=r,e.return=t,t.child=e,Yt=t,Qt=null,!0):!1;default:return!1}}function Ii(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ei(t){if(bt){var r=Qt;if(r){var e=r;if(!Ta(t,r)){if(Ii(t))throw Error(B(418));r=Or(e.nextSibling);var n=Yt;r&&Ta(t,r)?Ig(n,e):(t.flags=t.flags&-4097|2,bt=!1,Yt=t)}}else{if(Ii(t))throw Error(B(418));t.flags=t.flags&-4097|2,bt=!1,Yt=t}}}function Aa(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Yt=t}function qn(t){if(t!==Yt)return!1;if(!bt)return Aa(t),bt=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!ki(t.type,t.memoizedProps)),r&&(r=Qt)){if(Ii(t))throw Eg(),Error(B(418));for(;r;)Ig(t,r),r=Or(r.nextSibling)}if(Aa(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));t:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var e=t.data;if(e==="/$"){if(r===0){Qt=Or(t.nextSibling);break t}r--}else e!=="$"&&e!=="$!"&&e!=="$?"||r++}t=t.nextSibling}Qt=null}}else Qt=Yt?Or(t.stateNode.nextSibling):null;return!0}function Eg(){for(var t=Qt;t;)t=Or(t.nextSibling)}function We(){Qt=Yt=null,bt=!1}function fl(t){ar===null?ar=[t]:ar.push(t)}var Fc=zr.ReactCurrentBatchConfig;function Ze(t,r,e){if(t=e.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(e._owner){if(e=e._owner,e){if(e.tag!==1)throw Error(B(309));var n=e.stateNode}if(!n)throw Error(B(147,t));var o=n,i=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===i?r.ref:(r=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},r._stringRef=i,r)}if(typeof t!="string")throw Error(B(284));if(!e._owner)throw Error(B(290,t))}return t}function to(t,r){throw t=Object.prototype.toString.call(r),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function Da(t){var r=t._init;return r(t._payload)}function zg(t){function r(c,u){if(t){var b=c.deletions;b===null?(c.deletions=[u],c.flags|=16):b.push(u)}}function e(c,u){if(!t)return null;for(;u!==null;)r(c,u),u=u.sibling;return null}function n(c,u){for(c=new Map;u!==null;)u.key!==null?c.set(u.key,u):c.set(u.index,u),u=u.sibling;return c}function o(c,u){return c=Gr(c,u),c.index=0,c.sibling=null,c}function i(c,u,b){return c.index=b,t?(b=c.alternate,b!==null?(b=b.index,b<u?(c.flags|=2,u):b):(c.flags|=2,u)):(c.flags|=1048576,u)}function l(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,u,b,x){return u===null||u.tag!==6?(u=Os(b,c.mode,x),u.return=c,u):(u=o(u,b),u.return=c,u)}function d(c,u,b,x){var A=b.type;return A===ye?m(c,u,b.props.children,x,b.key):u!==null&&(u.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Dr&&Da(A)===u.type)?(x=o(u,b.props),x.ref=Ze(c,u,b),x.return=c,x):(x=So(b.type,b.key,b.props,null,c.mode,x),x.ref=Ze(c,u,b),x.return=c,x)}function g(c,u,b,x){return u===null||u.tag!==4||u.stateNode.containerInfo!==b.containerInfo||u.stateNode.implementation!==b.implementation?(u=$s(b,c.mode,x),u.return=c,u):(u=o(u,b.children||[]),u.return=c,u)}function m(c,u,b,x,A){return u===null||u.tag!==7?(u=oe(b,c.mode,x,A),u.return=c,u):(u=o(u,b),u.return=c,u)}function v(c,u,b){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Os(""+u,c.mode,b),u.return=c,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Hn:return b=So(u.type,u.key,u.props,null,c.mode,b),b.ref=Ze(c,null,u),b.return=c,b;case ve:return u=$s(u,c.mode,b),u.return=c,u;case Dr:var x=u._init;return v(c,x(u._payload),b)}if(on(u)||Qe(u))return u=oe(u,c.mode,b,null),u.return=c,u;to(c,u)}return null}function f(c,u,b,x){var A=u!==null?u.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return A!==null?null:a(c,u,""+b,x);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Hn:return b.key===A?d(c,u,b,x):null;case ve:return b.key===A?g(c,u,b,x):null;case Dr:return A=b._init,f(c,u,A(b._payload),x)}if(on(b)||Qe(b))return A!==null?null:m(c,u,b,x,null);to(c,b)}return null}function S(c,u,b,x,A){if(typeof x=="string"&&x!==""||typeof x=="number")return c=c.get(b)||null,a(u,c,""+x,A);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Hn:return c=c.get(x.key===null?b:x.key)||null,d(u,c,x,A);case ve:return c=c.get(x.key===null?b:x.key)||null,g(u,c,x,A);case Dr:var _=x._init;return S(c,u,b,_(x._payload),A)}if(on(x)||Qe(x))return c=c.get(b)||null,m(u,c,x,A,null);to(u,x)}return null}function w(c,u,b,x){for(var A=null,_=null,L=u,R=u=0,z=null;L!==null&&R<b.length;R++){L.index>R?(z=L,L=null):z=L.sibling;var D=f(c,L,b[R],x);if(D===null){L===null&&(L=z);break}t&&L&&D.alternate===null&&r(c,L),u=i(D,u,R),_===null?A=D:_.sibling=D,_=D,L=z}if(R===b.length)return e(c,L),bt&&Zr(c,R),A;if(L===null){for(;R<b.length;R++)L=v(c,b[R],x),L!==null&&(u=i(L,u,R),_===null?A=L:_.sibling=L,_=L);return bt&&Zr(c,R),A}for(L=n(c,L);R<b.length;R++)z=S(L,c,R,b[R],x),z!==null&&(t&&z.alternate!==null&&L.delete(z.key===null?R:z.key),u=i(z,u,R),_===null?A=z:_.sibling=z,_=z);return t&&L.forEach(function(j){return r(c,j)}),bt&&Zr(c,R),A}function k(c,u,b,x){var A=Qe(b);if(typeof A!="function")throw Error(B(150));if(b=A.call(b),b==null)throw Error(B(151));for(var _=A=null,L=u,R=u=0,z=null,D=b.next();L!==null&&!D.done;R++,D=b.next()){L.index>R?(z=L,L=null):z=L.sibling;var j=f(c,L,D.value,x);if(j===null){L===null&&(L=z);break}t&&L&&j.alternate===null&&r(c,L),u=i(j,u,R),_===null?A=j:_.sibling=j,_=j,L=z}if(D.done)return e(c,L),bt&&Zr(c,R),A;if(L===null){for(;!D.done;R++,D=b.next())D=v(c,D.value,x),D!==null&&(u=i(D,u,R),_===null?A=D:_.sibling=D,_=D);return bt&&Zr(c,R),A}for(L=n(c,L);!D.done;R++,D=b.next())D=S(L,c,R,D.value,x),D!==null&&(t&&D.alternate!==null&&L.delete(D.key===null?R:D.key),u=i(D,u,R),_===null?A=D:_.sibling=D,_=D);return t&&L.forEach(function(M){return r(c,M)}),bt&&Zr(c,R),A}function C(c,u,b,x){if(typeof b=="object"&&b!==null&&b.type===ye&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Hn:t:{for(var A=b.key,_=u;_!==null;){if(_.key===A){if(A=b.type,A===ye){if(_.tag===7){e(c,_.sibling),u=o(_,b.props.children),u.return=c,c=u;break t}}else if(_.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Dr&&Da(A)===_.type){e(c,_.sibling),u=o(_,b.props),u.ref=Ze(c,_,b),u.return=c,c=u;break t}e(c,_);break}else r(c,_);_=_.sibling}b.type===ye?(u=oe(b.props.children,c.mode,x,b.key),u.return=c,c=u):(x=So(b.type,b.key,b.props,null,c.mode,x),x.ref=Ze(c,u,b),x.return=c,c=x)}return l(c);case ve:t:{for(_=b.key;u!==null;){if(u.key===_)if(u.tag===4&&u.stateNode.containerInfo===b.containerInfo&&u.stateNode.implementation===b.implementation){e(c,u.sibling),u=o(u,b.children||[]),u.return=c,c=u;break t}else{e(c,u);break}else r(c,u);u=u.sibling}u=$s(b,c.mode,x),u.return=c,c=u}return l(c);case Dr:return _=b._init,C(c,u,_(b._payload),x)}if(on(b))return w(c,u,b,x);if(Qe(b))return k(c,u,b,x);to(c,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,u!==null&&u.tag===6?(e(c,u.sibling),u=o(u,b),u.return=c,c=u):(e(c,u),u=Os(b,c.mode,x),u.return=c,c=u),l(c)):e(c,u)}return C}var Ne=zg(!0),Tg=zg(!1),Wo=Xr(null),No=null,Ie=null,vl=null;function yl(){vl=Ie=No=null}function hl(t){var r=Wo.current;ut(Wo),t._currentValue=r}function zi(t,r,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,n!==null&&(n.childLanes|=r)):n!==null&&(n.childLanes&r)!==r&&(n.childLanes|=r),t===e)break;t=t.return}}function Re(t,r){No=t,vl=Ie=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&r&&($t=!0),t.firstContext=null)}function er(t){var r=t._currentValue;if(vl!==t)if(t={context:t,memoizedValue:r,next:null},Ie===null){if(No===null)throw Error(B(308));Ie=t,No.dependencies={lanes:0,firstContext:t}}else Ie=Ie.next=t;return r}var re=null;function xl(t){re===null?re=[t]:re.push(t)}function Ag(t,r,e,n){var o=r.interleaved;return o===null?(e.next=e,xl(r)):(e.next=o.next,o.next=e),r.interleaved=e,Ir(t,n)}function Ir(t,r){t.lanes|=r;var e=t.alternate;for(e!==null&&(e.lanes|=r),e=t,t=t.return;t!==null;)t.childLanes|=r,e=t.alternate,e!==null&&(e.childLanes|=r),e=t,t=t.return;return e.tag===3?e.stateNode:null}var Fr=!1;function wl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dg(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sr(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function $r(t,r,e){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,nt&2){var o=n.pending;return o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r,Ir(t,e)}return o=n.interleaved,o===null?(r.next=r,xl(n)):(r.next=o.next,o.next=r),n.interleaved=r,Ir(t,e)}function vo(t,r,e){if(r=r.updateQueue,r!==null&&(r=r.shared,(e&4194240)!==0)){var n=r.lanes;n&=t.pendingLanes,e|=n,r.lanes=e,il(t,e)}}function Fa(t,r){var e=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,e===n)){var o=null,i=null;if(e=e.firstBaseUpdate,e!==null){do{var l={eventTime:e.eventTime,lane:e.lane,tag:e.tag,payload:e.payload,callback:e.callback,next:null};i===null?o=i=l:i=i.next=l,e=e.next}while(e!==null);i===null?o=i=r:i=i.next=r}else o=i=r;e={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=r:t.next=r,e.lastBaseUpdate=r}function Po(t,r,e,n){var o=t.updateQueue;Fr=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var d=a,g=d.next;d.next=null,l===null?i=g:l.next=g,l=d;var m=t.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==l&&(a===null?m.firstBaseUpdate=g:a.next=g,m.lastBaseUpdate=d))}if(i!==null){var v=o.baseState;l=0,m=g=d=null,a=i;do{var f=a.lane,S=a.eventTime;if((n&f)===f){m!==null&&(m=m.next={eventTime:S,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});t:{var w=t,k=a;switch(f=r,S=e,k.tag){case 1:if(w=k.payload,typeof w=="function"){v=w.call(S,v,f);break t}v=w;break t;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,f=typeof w=="function"?w.call(S,v,f):w,f==null)break t;v=vt({},v,f);break t;case 2:Fr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=o.effects,f===null?o.effects=[a]:f.push(a))}else S={eventTime:S,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(g=m=S,d=v):m=m.next=S,l|=f;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;f=a,a=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(m===null&&(d=v),o.baseState=d,o.firstBaseUpdate=g,o.lastBaseUpdate=m,r=o.shared.interleaved,r!==null){o=r;do l|=o.lane,o=o.next;while(o!==r)}else i===null&&(o.shared.lanes=0);ge|=l,t.lanes=l,t.memoizedState=v}}function Ba(t,r,e){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var n=t[r],o=n.callback;if(o!==null){if(n.callback=null,n=e,typeof o!="function")throw Error(B(191,o));o.call(n)}}}var Nn={},vr=Xr(Nn),zn=Xr(Nn),Tn=Xr(Nn);function ee(t){if(t===Nn)throw Error(B(174));return t}function kl(t,r){switch(dt(Tn,r),dt(zn,t),dt(vr,Nn),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ai(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=ai(r,t)}ut(vr),dt(vr,r)}function Pe(){ut(vr),ut(zn),ut(Tn)}function Fg(t){ee(Tn.current);var r=ee(vr.current),e=ai(r,t.type);r!==e&&(dt(zn,t),dt(vr,e))}function Sl(t){zn.current===t&&(ut(vr),ut(zn))}var pt=Xr(0);function Oo(t){for(var r=t;r!==null;){if(r.tag===13){var e=r.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||e.data==="$?"||e.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var _s=[];function jl(){for(var t=0;t<_s.length;t++)_s[t]._workInProgressVersionPrimary=null;_s.length=0}var yo=zr.ReactCurrentDispatcher,Ls=zr.ReactCurrentBatchConfig,de=0,ft=null,jt=null,It=null,$o=!1,cn=!1,An=0,Bc=0;function Ft(){throw Error(B(321))}function Cl(t,r){if(r===null)return!1;for(var e=0;e<r.length&&e<t.length;e++)if(!ur(t[e],r[e]))return!1;return!0}function Il(t,r,e,n,o,i){if(de=i,ft=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,yo.current=t===null||t.memoizedState===null?Mc:Wc,t=e(n,o),cn){i=0;do{if(cn=!1,An=0,25<=i)throw Error(B(301));i+=1,It=jt=null,r.updateQueue=null,yo.current=Nc,t=e(n,o)}while(cn)}if(yo.current=Ho,r=jt!==null&&jt.next!==null,de=0,It=jt=ft=null,$o=!1,r)throw Error(B(300));return t}function El(){var t=An!==0;return An=0,t}function pr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?ft.memoizedState=It=t:It=It.next=t,It}function nr(){if(jt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var r=It===null?ft.memoizedState:It.next;if(r!==null)It=r,jt=t;else{if(t===null)throw Error(B(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},It===null?ft.memoizedState=It=t:It=It.next=t}return It}function Dn(t,r){return typeof r=="function"?r(t):r}function Ms(t){var r=nr(),e=r.queue;if(e===null)throw Error(B(311));e.lastRenderedReducer=t;var n=jt,o=n.baseQueue,i=e.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}n.baseQueue=o=i,e.pending=null}if(o!==null){i=o.next,n=n.baseState;var a=l=null,d=null,g=i;do{var m=g.lane;if((de&m)===m)d!==null&&(d=d.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),n=g.hasEagerState?g.eagerState:t(n,g.action);else{var v={lane:m,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};d===null?(a=d=v,l=n):d=d.next=v,ft.lanes|=m,ge|=m}g=g.next}while(g!==null&&g!==i);d===null?l=n:d.next=a,ur(n,r.memoizedState)||($t=!0),r.memoizedState=n,r.baseState=l,r.baseQueue=d,e.lastRenderedState=n}if(t=e.interleaved,t!==null){o=t;do i=o.lane,ft.lanes|=i,ge|=i,o=o.next;while(o!==t)}else o===null&&(e.lanes=0);return[r.memoizedState,e.dispatch]}function Ws(t){var r=nr(),e=r.queue;if(e===null)throw Error(B(311));e.lastRenderedReducer=t;var n=e.dispatch,o=e.pending,i=r.memoizedState;if(o!==null){e.pending=null;var l=o=o.next;do i=t(i,l.action),l=l.next;while(l!==o);ur(i,r.memoizedState)||($t=!0),r.memoizedState=i,r.baseQueue===null&&(r.baseState=i),e.lastRenderedState=i}return[i,n]}function Bg(){}function Rg(t,r){var e=ft,n=nr(),o=r(),i=!ur(n.memoizedState,o);if(i&&(n.memoizedState=o,$t=!0),n=n.queue,zl(Mg.bind(null,e,n,t),[t]),n.getSnapshot!==r||i||It!==null&&It.memoizedState.tag&1){if(e.flags|=2048,Fn(9,Lg.bind(null,e,n,o,r),void 0,null),Et===null)throw Error(B(349));de&30||_g(e,r,o)}return o}function _g(t,r,e){t.flags|=16384,t={getSnapshot:r,value:e},r=ft.updateQueue,r===null?(r={lastEffect:null,stores:null},ft.updateQueue=r,r.stores=[t]):(e=r.stores,e===null?r.stores=[t]:e.push(t))}function Lg(t,r,e,n){r.value=e,r.getSnapshot=n,Wg(r)&&Ng(t)}function Mg(t,r,e){return e(function(){Wg(r)&&Ng(t)})}function Wg(t){var r=t.getSnapshot;t=t.value;try{var e=r();return!ur(t,e)}catch{return!0}}function Ng(t){var r=Ir(t,1);r!==null&&gr(r,t,1,-1)}function Ra(t){var r=pr();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Dn,lastRenderedState:t},r.queue=t,t=t.dispatch=Lc.bind(null,ft,t),[r.memoizedState,t]}function Fn(t,r,e,n){return t={tag:t,create:r,destroy:e,deps:n,next:null},r=ft.updateQueue,r===null?(r={lastEffect:null,stores:null},ft.updateQueue=r,r.lastEffect=t.next=t):(e=r.lastEffect,e===null?r.lastEffect=t.next=t:(n=e.next,e.next=t,t.next=n,r.lastEffect=t)),t}function Pg(){return nr().memoizedState}function ho(t,r,e,n){var o=pr();ft.flags|=t,o.memoizedState=Fn(1|r,e,void 0,n===void 0?null:n)}function os(t,r,e,n){var o=nr();n=n===void 0?null:n;var i=void 0;if(jt!==null){var l=jt.memoizedState;if(i=l.destroy,n!==null&&Cl(n,l.deps)){o.memoizedState=Fn(r,e,i,n);return}}ft.flags|=t,o.memoizedState=Fn(1|r,e,i,n)}function _a(t,r){return ho(8390656,8,t,r)}function zl(t,r){return os(2048,8,t,r)}function Og(t,r){return os(4,2,t,r)}function $g(t,r){return os(4,4,t,r)}function Hg(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Ug(t,r,e){return e=e!=null?e.concat([t]):null,os(4,4,Hg.bind(null,r,t),e)}function Tl(){}function Gg(t,r){var e=nr();r=r===void 0?null:r;var n=e.memoizedState;return n!==null&&r!==null&&Cl(r,n[1])?n[0]:(e.memoizedState=[t,r],t)}function Vg(t,r){var e=nr();r=r===void 0?null:r;var n=e.memoizedState;return n!==null&&r!==null&&Cl(r,n[1])?n[0]:(t=t(),e.memoizedState=[t,r],t)}function Qg(t,r,e){return de&21?(ur(e,r)||(e=Zd(),ft.lanes|=e,ge|=e,t.baseState=!0),r):(t.baseState&&(t.baseState=!1,$t=!0),t.memoizedState=e)}function Rc(t,r){var e=lt;lt=e!==0&&4>e?e:4,t(!0);var n=Ls.transition;Ls.transition={};try{t(!1),r()}finally{lt=e,Ls.transition=n}}function Yg(){return nr().memoizedState}function _c(t,r,e){var n=Ur(t);if(e={lane:n,action:e,hasEagerState:!1,eagerState:null,next:null},Kg(t))Xg(r,e);else if(e=Ag(t,r,e,n),e!==null){var o=Wt();gr(e,t,n,o),Jg(e,r,n)}}function Lc(t,r,e){var n=Ur(t),o={lane:n,action:e,hasEagerState:!1,eagerState:null,next:null};if(Kg(t))Xg(r,o);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=r.lastRenderedReducer,i!==null))try{var l=r.lastRenderedState,a=i(l,e);if(o.hasEagerState=!0,o.eagerState=a,ur(a,l)){var d=r.interleaved;d===null?(o.next=o,xl(r)):(o.next=d.next,d.next=o),r.interleaved=o;return}}catch{}finally{}e=Ag(t,r,o,n),e!==null&&(o=Wt(),gr(e,t,n,o),Jg(e,r,n))}}function Kg(t){var r=t.alternate;return t===ft||r!==null&&r===ft}function Xg(t,r){cn=$o=!0;var e=t.pending;e===null?r.next=r:(r.next=e.next,e.next=r),t.pending=r}function Jg(t,r,e){if(e&4194240){var n=r.lanes;n&=t.pendingLanes,e|=n,r.lanes=e,il(t,e)}}var Ho={readContext:er,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},Mc={readContext:er,useCallback:function(t,r){return pr().memoizedState=[t,r===void 0?null:r],t},useContext:er,useEffect:_a,useImperativeHandle:function(t,r,e){return e=e!=null?e.concat([t]):null,ho(4194308,4,Hg.bind(null,r,t),e)},useLayoutEffect:function(t,r){return ho(4194308,4,t,r)},useInsertionEffect:function(t,r){return ho(4,2,t,r)},useMemo:function(t,r){var e=pr();return r=r===void 0?null:r,t=t(),e.memoizedState=[t,r],t},useReducer:function(t,r,e){var n=pr();return r=e!==void 0?e(r):r,n.memoizedState=n.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},n.queue=t,t=t.dispatch=_c.bind(null,ft,t),[n.memoizedState,t]},useRef:function(t){var r=pr();return t={current:t},r.memoizedState=t},useState:Ra,useDebugValue:Tl,useDeferredValue:function(t){return pr().memoizedState=t},useTransition:function(){var t=Ra(!1),r=t[0];return t=Rc.bind(null,t[1]),pr().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,e){var n=ft,o=pr();if(bt){if(e===void 0)throw Error(B(407));e=e()}else{if(e=r(),Et===null)throw Error(B(349));de&30||_g(n,r,e)}o.memoizedState=e;var i={value:e,getSnapshot:r};return o.queue=i,_a(Mg.bind(null,n,i,t),[t]),n.flags|=2048,Fn(9,Lg.bind(null,n,i,e,r),void 0,null),e},useId:function(){var t=pr(),r=Et.identifierPrefix;if(bt){var e=kr,n=wr;e=(n&~(1<<32-dr(n)-1)).toString(32)+e,r=":"+r+"R"+e,e=An++,0<e&&(r+="H"+e.toString(32)),r+=":"}else e=Bc++,r=":"+r+"r"+e.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Wc={readContext:er,useCallback:Gg,useContext:er,useEffect:zl,useImperativeHandle:Ug,useInsertionEffect:Og,useLayoutEffect:$g,useMemo:Vg,useReducer:Ms,useRef:Pg,useState:function(){return Ms(Dn)},useDebugValue:Tl,useDeferredValue:function(t){var r=nr();return Qg(r,jt.memoizedState,t)},useTransition:function(){var t=Ms(Dn)[0],r=nr().memoizedState;return[t,r]},useMutableSource:Bg,useSyncExternalStore:Rg,useId:Yg,unstable_isNewReconciler:!1},Nc={readContext:er,useCallback:Gg,useContext:er,useEffect:zl,useImperativeHandle:Ug,useInsertionEffect:Og,useLayoutEffect:$g,useMemo:Vg,useReducer:Ws,useRef:Pg,useState:function(){return Ws(Dn)},useDebugValue:Tl,useDeferredValue:function(t){var r=nr();return jt===null?r.memoizedState=t:Qg(r,jt.memoizedState,t)},useTransition:function(){var t=Ws(Dn)[0],r=nr().memoizedState;return[t,r]},useMutableSource:Bg,useSyncExternalStore:Rg,useId:Yg,unstable_isNewReconciler:!1};function ir(t,r){if(t&&t.defaultProps){r=vt({},r),t=t.defaultProps;for(var e in t)r[e]===void 0&&(r[e]=t[e]);return r}return r}function Ti(t,r,e,n){r=t.memoizedState,e=e(n,r),e=e==null?r:vt({},r,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var ss={isMounted:function(t){return(t=t._reactInternals)?ce(t)===t:!1},enqueueSetState:function(t,r,e){t=t._reactInternals;var n=Wt(),o=Ur(t),i=Sr(n,o);i.payload=r,e!=null&&(i.callback=e),r=$r(t,i,o),r!==null&&(gr(r,t,o,n),vo(r,t,o))},enqueueReplaceState:function(t,r,e){t=t._reactInternals;var n=Wt(),o=Ur(t),i=Sr(n,o);i.tag=1,i.payload=r,e!=null&&(i.callback=e),r=$r(t,i,o),r!==null&&(gr(r,t,o,n),vo(r,t,o))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var e=Wt(),n=Ur(t),o=Sr(e,n);o.tag=2,r!=null&&(o.callback=r),r=$r(t,o,n),r!==null&&(gr(r,t,n,e),vo(r,t,n))}};function La(t,r,e,n,o,i,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,i,l):r.prototype&&r.prototype.isPureReactComponent?!jn(e,n)||!jn(o,i):!0}function Zg(t,r,e){var n=!1,o=Qr,i=r.contextType;return typeof i=="object"&&i!==null?i=er(i):(o=Ut(r)?le:Lt.current,n=r.contextTypes,i=(n=n!=null)?Me(t,o):Qr),r=new r(e,i),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ss,t.stateNode=r,r._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=o,t.__reactInternalMemoizedMaskedChildContext=i),r}function Ma(t,r,e,n){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(e,n),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(e,n),r.state!==t&&ss.enqueueReplaceState(r,r.state,null)}function Ai(t,r,e,n){var o=t.stateNode;o.props=e,o.state=t.memoizedState,o.refs={},wl(t);var i=r.contextType;typeof i=="object"&&i!==null?o.context=er(i):(i=Ut(r)?le:Lt.current,o.context=Me(t,i)),o.state=t.memoizedState,i=r.getDerivedStateFromProps,typeof i=="function"&&(Ti(t,r,i,e),o.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(r=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),r!==o.state&&ss.enqueueReplaceState(o,o.state,null),Po(t,e,o,n),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308)}function Oe(t,r){try{var e="",n=r;do e+=cb(n),n=n.return;while(n);var o=e}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:r,stack:o,digest:null}}function Ns(t,r,e){return{value:t,source:null,stack:e??null,digest:r??null}}function Di(t,r){try{console.error(r.value)}catch(e){setTimeout(function(){throw e})}}var Pc=typeof WeakMap=="function"?WeakMap:Map;function qg(t,r,e){e=Sr(-1,e),e.tag=3,e.payload={element:null};var n=r.value;return e.callback=function(){Go||(Go=!0,Oi=n),Di(t,r)},e}function tu(t,r,e){e=Sr(-1,e),e.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var o=r.value;e.payload=function(){return n(o)},e.callback=function(){Di(t,r)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){Di(t,r),typeof n!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var l=r.stack;this.componentDidCatch(r.value,{componentStack:l!==null?l:""})}),e}function Wa(t,r,e){var n=t.pingCache;if(n===null){n=t.pingCache=new Pc;var o=new Set;n.set(r,o)}else o=n.get(r),o===void 0&&(o=new Set,n.set(r,o));o.has(e)||(o.add(e),t=tp.bind(null,t,r,e),r.then(t,t))}function Na(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function Pa(t,r,e,n,o){return t.mode&1?(t.flags|=65536,t.lanes=o,t):(t===r?t.flags|=65536:(t.flags|=128,e.flags|=131072,e.flags&=-52805,e.tag===1&&(e.alternate===null?e.tag=17:(r=Sr(-1,1),r.tag=2,$r(e,r,1))),e.lanes|=1),t)}var Oc=zr.ReactCurrentOwner,$t=!1;function Mt(t,r,e,n){r.child=t===null?Tg(r,null,e,n):Ne(r,t.child,e,n)}function Oa(t,r,e,n,o){e=e.render;var i=r.ref;return Re(r,o),n=Il(t,r,e,n,i,o),e=El(),t!==null&&!$t?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~o,Er(t,r,o)):(bt&&e&&pl(r),r.flags|=1,Mt(t,r,n,o),r.child)}function $a(t,r,e,n,o){if(t===null){var i=e.type;return typeof i=="function"&&!Ml(i)&&i.defaultProps===void 0&&e.compare===null&&e.defaultProps===void 0?(r.tag=15,r.type=i,ru(t,r,i,n,o)):(t=So(e.type,null,n,r,r.mode,o),t.ref=r.ref,t.return=r,r.child=t)}if(i=t.child,!(t.lanes&o)){var l=i.memoizedProps;if(e=e.compare,e=e!==null?e:jn,e(l,n)&&t.ref===r.ref)return Er(t,r,o)}return r.flags|=1,t=Gr(i,n),t.ref=r.ref,t.return=r,r.child=t}function ru(t,r,e,n,o){if(t!==null){var i=t.memoizedProps;if(jn(i,n)&&t.ref===r.ref)if($t=!1,r.pendingProps=n=i,(t.lanes&o)!==0)t.flags&131072&&($t=!0);else return r.lanes=t.lanes,Er(t,r,o)}return Fi(t,r,e,n,o)}function eu(t,r,e){var n=r.pendingProps,o=n.children,i=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(ze,Vt),Vt|=e;else{if(!(e&1073741824))return t=i!==null?i.baseLanes|e:e,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,dt(ze,Vt),Vt|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:e,dt(ze,Vt),Vt|=n}else i!==null?(n=i.baseLanes|e,r.memoizedState=null):n=e,dt(ze,Vt),Vt|=n;return Mt(t,r,o,e),r.child}function nu(t,r){var e=r.ref;(t===null&&e!==null||t!==null&&t.ref!==e)&&(r.flags|=512,r.flags|=2097152)}function Fi(t,r,e,n,o){var i=Ut(e)?le:Lt.current;return i=Me(r,i),Re(r,o),e=Il(t,r,e,n,i,o),n=El(),t!==null&&!$t?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~o,Er(t,r,o)):(bt&&n&&pl(r),r.flags|=1,Mt(t,r,e,o),r.child)}function Ha(t,r,e,n,o){if(Ut(e)){var i=!0;_o(r)}else i=!1;if(Re(r,o),r.stateNode===null)xo(t,r),Zg(r,e,n),Ai(r,e,n,o),n=!0;else if(t===null){var l=r.stateNode,a=r.memoizedProps;l.props=a;var d=l.context,g=e.contextType;typeof g=="object"&&g!==null?g=er(g):(g=Ut(e)?le:Lt.current,g=Me(r,g));var m=e.getDerivedStateFromProps,v=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";v||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==n||d!==g)&&Ma(r,l,n,g),Fr=!1;var f=r.memoizedState;l.state=f,Po(r,n,l,o),d=r.memoizedState,a!==n||f!==d||Ht.current||Fr?(typeof m=="function"&&(Ti(r,e,m,n),d=r.memoizedState),(a=Fr||La(r,e,a,n,f,d,g))?(v||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(r.flags|=4194308)):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=n,r.memoizedState=d),l.props=n,l.state=d,l.context=g,n=a):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),n=!1)}else{l=r.stateNode,Dg(t,r),a=r.memoizedProps,g=r.type===r.elementType?a:ir(r.type,a),l.props=g,v=r.pendingProps,f=l.context,d=e.contextType,typeof d=="object"&&d!==null?d=er(d):(d=Ut(e)?le:Lt.current,d=Me(r,d));var S=e.getDerivedStateFromProps;(m=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==v||f!==d)&&Ma(r,l,n,d),Fr=!1,f=r.memoizedState,l.state=f,Po(r,n,l,o);var w=r.memoizedState;a!==v||f!==w||Ht.current||Fr?(typeof S=="function"&&(Ti(r,e,S,n),w=r.memoizedState),(g=Fr||La(r,e,g,n,f,w,d)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,w,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,w,d)),typeof l.componentDidUpdate=="function"&&(r.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(r.flags|=1024),r.memoizedProps=n,r.memoizedState=w),l.props=n,l.state=w,l.context=d,n=g):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(r.flags|=1024),n=!1)}return Bi(t,r,e,n,i,o)}function Bi(t,r,e,n,o,i){nu(t,r);var l=(r.flags&128)!==0;if(!n&&!l)return o&&za(r,e,!1),Er(t,r,i);n=r.stateNode,Oc.current=r;var a=l&&typeof e.getDerivedStateFromError!="function"?null:n.render();return r.flags|=1,t!==null&&l?(r.child=Ne(r,t.child,null,i),r.child=Ne(r,null,a,i)):Mt(t,r,a,i),r.memoizedState=n.state,o&&za(r,e,!0),r.child}function ou(t){var r=t.stateNode;r.pendingContext?Ea(t,r.pendingContext,r.pendingContext!==r.context):r.context&&Ea(t,r.context,!1),kl(t,r.containerInfo)}function Ua(t,r,e,n,o){return We(),fl(o),r.flags|=256,Mt(t,r,e,n),r.child}var Ri={dehydrated:null,treeContext:null,retryLane:0};function _i(t){return{baseLanes:t,cachePool:null,transitions:null}}function su(t,r,e){var n=r.pendingProps,o=pt.current,i=!1,l=(r.flags&128)!==0,a;if((a=l)||(a=t!==null&&t.memoizedState===null?!1:(o&2)!==0),a?(i=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(o|=1),dt(pt,o&1),t===null)return Ei(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(r.mode&1?t.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(l=n.children,t=n.fallback,i?(n=r.mode,i=r.child,l={mode:"hidden",children:l},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=as(l,n,0,null),t=oe(t,n,e,null),i.return=r,t.return=r,i.sibling=t,r.child=i,r.child.memoizedState=_i(e),r.memoizedState=Ri,t):Al(r,l));if(o=t.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return $c(t,r,l,n,a,o,e);if(i){i=n.fallback,l=r.mode,o=t.child,a=o.sibling;var d={mode:"hidden",children:n.children};return!(l&1)&&r.child!==o?(n=r.child,n.childLanes=0,n.pendingProps=d,r.deletions=null):(n=Gr(o,d),n.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Gr(a,i):(i=oe(i,l,e,null),i.flags|=2),i.return=r,n.return=r,n.sibling=i,r.child=n,n=i,i=r.child,l=t.child.memoizedState,l=l===null?_i(e):{baseLanes:l.baseLanes|e,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=t.childLanes&~e,r.memoizedState=Ri,n}return i=t.child,t=i.sibling,n=Gr(i,{mode:"visible",children:n.children}),!(r.mode&1)&&(n.lanes=e),n.return=r,n.sibling=null,t!==null&&(e=r.deletions,e===null?(r.deletions=[t],r.flags|=16):e.push(t)),r.child=n,r.memoizedState=null,n}function Al(t,r){return r=as({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function ro(t,r,e,n){return n!==null&&fl(n),Ne(r,t.child,null,e),t=Al(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function $c(t,r,e,n,o,i,l){if(e)return r.flags&256?(r.flags&=-257,n=Ns(Error(B(422))),ro(t,r,l,n)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(i=n.fallback,o=r.mode,n=as({mode:"visible",children:n.children},o,0,null),i=oe(i,o,l,null),i.flags|=2,n.return=r,i.return=r,n.sibling=i,r.child=n,r.mode&1&&Ne(r,t.child,null,l),r.child.memoizedState=_i(l),r.memoizedState=Ri,i);if(!(r.mode&1))return ro(t,r,l,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var a=n.dgst;return n=a,i=Error(B(419)),n=Ns(i,n,void 0),ro(t,r,l,n)}if(a=(l&t.childLanes)!==0,$t||a){if(n=Et,n!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Ir(t,o),gr(n,t,o,-1))}return Ll(),n=Ns(Error(B(421))),ro(t,r,l,n)}return o.data==="$?"?(r.flags|=128,r.child=t.child,r=rp.bind(null,t),o._reactRetry=r,null):(t=i.treeContext,Qt=Or(o.nextSibling),Yt=r,bt=!0,ar=null,t!==null&&(Zt[qt++]=wr,Zt[qt++]=kr,Zt[qt++]=ae,wr=t.id,kr=t.overflow,ae=r),r=Al(r,n.children),r.flags|=4096,r)}function Ga(t,r,e){t.lanes|=r;var n=t.alternate;n!==null&&(n.lanes|=r),zi(t.return,r,e)}function Ps(t,r,e,n,o){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:n,tail:e,tailMode:o}:(i.isBackwards=r,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=e,i.tailMode=o)}function iu(t,r,e){var n=r.pendingProps,o=n.revealOrder,i=n.tail;if(Mt(t,r,n.children,e),n=pt.current,n&2)n=n&1|2,r.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ga(t,e,r);else if(t.tag===19)Ga(t,e,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break t;for(;t.sibling===null;){if(t.return===null||t.return===r)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(dt(pt,n),!(r.mode&1))r.memoizedState=null;else switch(o){case"forwards":for(e=r.child,o=null;e!==null;)t=e.alternate,t!==null&&Oo(t)===null&&(o=e),e=e.sibling;e=o,e===null?(o=r.child,r.child=null):(o=e.sibling,e.sibling=null),Ps(r,!1,o,e,i);break;case"backwards":for(e=null,o=r.child,r.child=null;o!==null;){if(t=o.alternate,t!==null&&Oo(t)===null){r.child=o;break}t=o.sibling,o.sibling=e,e=o,o=t}Ps(r,!0,e,null,i);break;case"together":Ps(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function xo(t,r){!(r.mode&1)&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function Er(t,r,e){if(t!==null&&(r.dependencies=t.dependencies),ge|=r.lanes,!(e&r.childLanes))return null;if(t!==null&&r.child!==t.child)throw Error(B(153));if(r.child!==null){for(t=r.child,e=Gr(t,t.pendingProps),r.child=e,e.return=r;t.sibling!==null;)t=t.sibling,e=e.sibling=Gr(t,t.pendingProps),e.return=r;e.sibling=null}return r.child}function Hc(t,r,e){switch(r.tag){case 3:ou(r),We();break;case 5:Fg(r);break;case 1:Ut(r.type)&&_o(r);break;case 4:kl(r,r.stateNode.containerInfo);break;case 10:var n=r.type._context,o=r.memoizedProps.value;dt(Wo,n._currentValue),n._currentValue=o;break;case 13:if(n=r.memoizedState,n!==null)return n.dehydrated!==null?(dt(pt,pt.current&1),r.flags|=128,null):e&r.child.childLanes?su(t,r,e):(dt(pt,pt.current&1),t=Er(t,r,e),t!==null?t.sibling:null);dt(pt,pt.current&1);break;case 19:if(n=(e&r.childLanes)!==0,t.flags&128){if(n)return iu(t,r,e);r.flags|=128}if(o=r.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),dt(pt,pt.current),n)break;return null;case 22:case 23:return r.lanes=0,eu(t,r,e)}return Er(t,r,e)}var lu,Li,au,du;lu=function(t,r){for(var e=r.child;e!==null;){if(e.tag===5||e.tag===6)t.appendChild(e.stateNode);else if(e.tag!==4&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break;for(;e.sibling===null;){if(e.return===null||e.return===r)return;e=e.return}e.sibling.return=e.return,e=e.sibling}};Li=function(){};au=function(t,r,e,n){var o=t.memoizedProps;if(o!==n){t=r.stateNode,ee(vr.current);var i=null;switch(e){case"input":o=oi(t,o),n=oi(t,n),i=[];break;case"select":o=vt({},o,{value:void 0}),n=vt({},n,{value:void 0}),i=[];break;case"textarea":o=li(t,o),n=li(t,n),i=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=Bo)}di(e,n);var l;e=null;for(g in o)if(!n.hasOwnProperty(g)&&o.hasOwnProperty(g)&&o[g]!=null)if(g==="style"){var a=o[g];for(l in a)a.hasOwnProperty(l)&&(e||(e={}),e[l]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(vn.hasOwnProperty(g)?i||(i=[]):(i=i||[]).push(g,null));for(g in n){var d=n[g];if(a=o!=null?o[g]:void 0,n.hasOwnProperty(g)&&d!==a&&(d!=null||a!=null))if(g==="style")if(a){for(l in a)!a.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(e||(e={}),e[l]="");for(l in d)d.hasOwnProperty(l)&&a[l]!==d[l]&&(e||(e={}),e[l]=d[l])}else e||(i||(i=[]),i.push(g,e)),e=d;else g==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(i=i||[]).push(g,d)):g==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(g,""+d):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(vn.hasOwnProperty(g)?(d!=null&&g==="onScroll"&&gt("scroll",t),i||a===d||(i=[])):(i=i||[]).push(g,d))}e&&(i=i||[]).push("style",e);var g=i;(r.updateQueue=g)&&(r.flags|=4)}};du=function(t,r,e,n){e!==n&&(r.flags|=4)};function qe(t,r){if(!bt)switch(t.tailMode){case"hidden":r=t.tail;for(var e=null;r!==null;)r.alternate!==null&&(e=r),r=r.sibling;e===null?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Bt(t){var r=t.alternate!==null&&t.alternate.child===t.child,e=0,n=0;if(r)for(var o=t.child;o!==null;)e|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=t,o=o.sibling;else for(o=t.child;o!==null;)e|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=t,o=o.sibling;return t.subtreeFlags|=n,t.childLanes=e,r}function Uc(t,r,e){var n=r.pendingProps;switch(ml(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(r),null;case 1:return Ut(r.type)&&Ro(),Bt(r),null;case 3:return n=r.stateNode,Pe(),ut(Ht),ut(Lt),jl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(qn(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,ar!==null&&(Ui(ar),ar=null))),Li(t,r),Bt(r),null;case 5:Sl(r);var o=ee(Tn.current);if(e=r.type,t!==null&&r.stateNode!=null)au(t,r,e,n,o),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!n){if(r.stateNode===null)throw Error(B(166));return Bt(r),null}if(t=ee(vr.current),qn(r)){n=r.stateNode,e=r.type;var i=r.memoizedProps;switch(n[mr]=r,n[En]=i,t=(r.mode&1)!==0,e){case"dialog":gt("cancel",n),gt("close",n);break;case"iframe":case"object":case"embed":gt("load",n);break;case"video":case"audio":for(o=0;o<ln.length;o++)gt(ln[o],n);break;case"source":gt("error",n);break;case"img":case"image":case"link":gt("error",n),gt("load",n);break;case"details":gt("toggle",n);break;case"input":ta(n,i),gt("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},gt("invalid",n);break;case"textarea":ea(n,i),gt("invalid",n)}di(e,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?n.textContent!==a&&(i.suppressHydrationWarning!==!0&&Zn(n.textContent,a,t),o=["children",a]):typeof a=="number"&&n.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Zn(n.textContent,a,t),o=["children",""+a]):vn.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&gt("scroll",n)}switch(e){case"input":Un(n),ra(n,i,!0);break;case"textarea":Un(n),na(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=Bo)}n=o,r.updateQueue=n,n!==null&&(r.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Md(e)),t==="http://www.w3.org/1999/xhtml"?e==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=l.createElement(e,{is:n.is}):(t=l.createElement(e),e==="select"&&(l=t,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):t=l.createElementNS(t,e),t[mr]=r,t[En]=n,lu(t,r,!1,!1),r.stateNode=t;t:{switch(l=gi(e,n),e){case"dialog":gt("cancel",t),gt("close",t),o=n;break;case"iframe":case"object":case"embed":gt("load",t),o=n;break;case"video":case"audio":for(o=0;o<ln.length;o++)gt(ln[o],t);o=n;break;case"source":gt("error",t),o=n;break;case"img":case"image":case"link":gt("error",t),gt("load",t),o=n;break;case"details":gt("toggle",t),o=n;break;case"input":ta(t,n),o=oi(t,n),gt("invalid",t);break;case"option":o=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},o=vt({},n,{value:void 0}),gt("invalid",t);break;case"textarea":ea(t,n),o=li(t,n),gt("invalid",t);break;default:o=n}di(e,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var d=a[i];i==="style"?Pd(t,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Wd(t,d)):i==="children"?typeof d=="string"?(e!=="textarea"||d!=="")&&yn(t,d):typeof d=="number"&&yn(t,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(vn.hasOwnProperty(i)?d!=null&&i==="onScroll"&&gt("scroll",t):d!=null&&tl(t,i,d,l))}switch(e){case"input":Un(t),ra(t,n,!1);break;case"textarea":Un(t),na(t);break;case"option":n.value!=null&&t.setAttribute("value",""+Vr(n.value));break;case"select":t.multiple=!!n.multiple,i=n.value,i!=null?Ae(t,!!n.multiple,i,!1):n.defaultValue!=null&&Ae(t,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(t.onclick=Bo)}switch(e){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break t;case"img":n=!0;break t;default:n=!1}}n&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Bt(r),null;case 6:if(t&&r.stateNode!=null)du(t,r,t.memoizedProps,n);else{if(typeof n!="string"&&r.stateNode===null)throw Error(B(166));if(e=ee(Tn.current),ee(vr.current),qn(r)){if(n=r.stateNode,e=r.memoizedProps,n[mr]=r,(i=n.nodeValue!==e)&&(t=Yt,t!==null))switch(t.tag){case 3:Zn(n.nodeValue,e,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Zn(n.nodeValue,e,(t.mode&1)!==0)}i&&(r.flags|=4)}else n=(e.nodeType===9?e:e.ownerDocument).createTextNode(n),n[mr]=r,r.stateNode=n}return Bt(r),null;case 13:if(ut(pt),n=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(bt&&Qt!==null&&r.mode&1&&!(r.flags&128))Eg(),We(),r.flags|=98560,i=!1;else if(i=qn(r),n!==null&&n.dehydrated!==null){if(t===null){if(!i)throw Error(B(318));if(i=r.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(B(317));i[mr]=r}else We(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Bt(r),i=!1}else ar!==null&&(Ui(ar),ar=null),i=!0;if(!i)return r.flags&65536?r:null}return r.flags&128?(r.lanes=e,r):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(r.child.flags|=8192,r.mode&1&&(t===null||pt.current&1?Ct===0&&(Ct=3):Ll())),r.updateQueue!==null&&(r.flags|=4),Bt(r),null);case 4:return Pe(),Li(t,r),t===null&&Cn(r.stateNode.containerInfo),Bt(r),null;case 10:return hl(r.type._context),Bt(r),null;case 17:return Ut(r.type)&&Ro(),Bt(r),null;case 19:if(ut(pt),i=r.memoizedState,i===null)return Bt(r),null;if(n=(r.flags&128)!==0,l=i.rendering,l===null)if(n)qe(i,!1);else{if(Ct!==0||t!==null&&t.flags&128)for(t=r.child;t!==null;){if(l=Oo(t),l!==null){for(r.flags|=128,qe(i,!1),n=l.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),r.subtreeFlags=0,n=e,e=r.child;e!==null;)i=e,t=n,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,t=l.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e=e.sibling;return dt(pt,pt.current&1|2),r.child}t=t.sibling}i.tail!==null&&xt()>$e&&(r.flags|=128,n=!0,qe(i,!1),r.lanes=4194304)}else{if(!n)if(t=Oo(l),t!==null){if(r.flags|=128,n=!0,e=t.updateQueue,e!==null&&(r.updateQueue=e,r.flags|=4),qe(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!bt)return Bt(r),null}else 2*xt()-i.renderingStartTime>$e&&e!==1073741824&&(r.flags|=128,n=!0,qe(i,!1),r.lanes=4194304);i.isBackwards?(l.sibling=r.child,r.child=l):(e=i.last,e!==null?e.sibling=l:r.child=l,i.last=l)}return i.tail!==null?(r=i.tail,i.rendering=r,i.tail=r.sibling,i.renderingStartTime=xt(),r.sibling=null,e=pt.current,dt(pt,n?e&1|2:e&1),r):(Bt(r),null);case 22:case 23:return _l(),n=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(r.flags|=8192),n&&r.mode&1?Vt&1073741824&&(Bt(r),r.subtreeFlags&6&&(r.flags|=8192)):Bt(r),null;case 24:return null;case 25:return null}throw Error(B(156,r.tag))}function Gc(t,r){switch(ml(r),r.tag){case 1:return Ut(r.type)&&Ro(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Pe(),ut(Ht),ut(Lt),jl(),t=r.flags,t&65536&&!(t&128)?(r.flags=t&-65537|128,r):null;case 5:return Sl(r),null;case 13:if(ut(pt),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(B(340));We()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return ut(pt),null;case 4:return Pe(),null;case 10:return hl(r.type._context),null;case 22:case 23:return _l(),null;case 24:return null;default:return null}}var eo=!1,Rt=!1,Vc=typeof WeakSet=="function"?WeakSet:Set,P=null;function Ee(t,r){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){ht(t,r,n)}else e.current=null}function Mi(t,r,e){try{e()}catch(n){ht(t,r,n)}}var Va=!1;function Qc(t,r){if(xi=Ao,t=pg(),cl(t)){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{e=(e=t.ownerDocument)&&e.defaultView||window;var n=e.getSelection&&e.getSelection();if(n&&n.rangeCount!==0){e=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{e.nodeType,i.nodeType}catch{e=null;break t}var l=0,a=-1,d=-1,g=0,m=0,v=t,f=null;r:for(;;){for(var S;v!==e||o!==0&&v.nodeType!==3||(a=l+o),v!==i||n!==0&&v.nodeType!==3||(d=l+n),v.nodeType===3&&(l+=v.nodeValue.length),(S=v.firstChild)!==null;)f=v,v=S;for(;;){if(v===t)break r;if(f===e&&++g===o&&(a=l),f===i&&++m===n&&(d=l),(S=v.nextSibling)!==null)break;v=f,f=v.parentNode}v=S}e=a===-1||d===-1?null:{start:a,end:d}}else e=null}e=e||{start:0,end:0}}else e=null;for(wi={focusedElem:t,selectionRange:e},Ao=!1,P=r;P!==null;)if(r=P,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,P=t;else for(;P!==null;){r=P;try{var w=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,C=w.memoizedState,c=r.stateNode,u=c.getSnapshotBeforeUpdate(r.elementType===r.type?k:ir(r.type,k),C);c.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var b=r.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(x){ht(r,r.return,x)}if(t=r.sibling,t!==null){t.return=r.return,P=t;break}P=r.return}return w=Va,Va=!1,w}function pn(t,r,e){var n=r.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&t)===t){var i=o.destroy;o.destroy=void 0,i!==void 0&&Mi(r,e,i)}o=o.next}while(o!==n)}}function is(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var e=r=r.next;do{if((e.tag&t)===t){var n=e.create;e.destroy=n()}e=e.next}while(e!==r)}}function Wi(t){var r=t.ref;if(r!==null){var e=t.stateNode;switch(t.tag){case 5:t=e;break;default:t=e}typeof r=="function"?r(t):r.current=t}}function gu(t){var r=t.alternate;r!==null&&(t.alternate=null,gu(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[mr],delete r[En],delete r[ji],delete r[Tc],delete r[Ac])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function uu(t){return t.tag===5||t.tag===3||t.tag===4}function Qa(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||uu(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ni(t,r,e){var n=t.tag;if(n===5||n===6)t=t.stateNode,r?e.nodeType===8?e.parentNode.insertBefore(t,r):e.insertBefore(t,r):(e.nodeType===8?(r=e.parentNode,r.insertBefore(t,e)):(r=e,r.appendChild(t)),e=e._reactRootContainer,e!=null||r.onclick!==null||(r.onclick=Bo));else if(n!==4&&(t=t.child,t!==null))for(Ni(t,r,e),t=t.sibling;t!==null;)Ni(t,r,e),t=t.sibling}function Pi(t,r,e){var n=t.tag;if(n===5||n===6)t=t.stateNode,r?e.insertBefore(t,r):e.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(Pi(t,r,e),t=t.sibling;t!==null;)Pi(t,r,e),t=t.sibling}var zt=null,lr=!1;function Tr(t,r,e){for(e=e.child;e!==null;)bu(t,r,e),e=e.sibling}function bu(t,r,e){if(fr&&typeof fr.onCommitFiberUnmount=="function")try{fr.onCommitFiberUnmount(Zo,e)}catch{}switch(e.tag){case 5:Rt||Ee(e,r);case 6:var n=zt,o=lr;zt=null,Tr(t,r,e),zt=n,lr=o,zt!==null&&(lr?(t=zt,e=e.stateNode,t.nodeType===8?t.parentNode.removeChild(e):t.removeChild(e)):zt.removeChild(e.stateNode));break;case 18:zt!==null&&(lr?(t=zt,e=e.stateNode,t.nodeType===8?Bs(t.parentNode,e):t.nodeType===1&&Bs(t,e),kn(t)):Bs(zt,e.stateNode));break;case 4:n=zt,o=lr,zt=e.stateNode.containerInfo,lr=!0,Tr(t,r,e),zt=n,lr=o;break;case 0:case 11:case 14:case 15:if(!Rt&&(n=e.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Mi(e,r,l),o=o.next}while(o!==n)}Tr(t,r,e);break;case 1:if(!Rt&&(Ee(e,r),n=e.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=e.memoizedProps,n.state=e.memoizedState,n.componentWillUnmount()}catch(a){ht(e,r,a)}Tr(t,r,e);break;case 21:Tr(t,r,e);break;case 22:e.mode&1?(Rt=(n=Rt)||e.memoizedState!==null,Tr(t,r,e),Rt=n):Tr(t,r,e);break;default:Tr(t,r,e)}}function Ya(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var e=t.stateNode;e===null&&(e=t.stateNode=new Vc),r.forEach(function(n){var o=ep.bind(null,t,n);e.has(n)||(e.add(n),n.then(o,o))})}}function or(t,r){var e=r.deletions;if(e!==null)for(var n=0;n<e.length;n++){var o=e[n];try{var i=t,l=r,a=l;t:for(;a!==null;){switch(a.tag){case 5:zt=a.stateNode,lr=!1;break t;case 3:zt=a.stateNode.containerInfo,lr=!0;break t;case 4:zt=a.stateNode.containerInfo,lr=!0;break t}a=a.return}if(zt===null)throw Error(B(160));bu(i,l,o),zt=null,lr=!1;var d=o.alternate;d!==null&&(d.return=null),o.return=null}catch(g){ht(o,r,g)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)cu(r,t),r=r.sibling}function cu(t,r){var e=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(or(r,t),br(t),n&4){try{pn(3,t,t.return),is(3,t)}catch(k){ht(t,t.return,k)}try{pn(5,t,t.return)}catch(k){ht(t,t.return,k)}}break;case 1:or(r,t),br(t),n&512&&e!==null&&Ee(e,e.return);break;case 5:if(or(r,t),br(t),n&512&&e!==null&&Ee(e,e.return),t.flags&32){var o=t.stateNode;try{yn(o,"")}catch(k){ht(t,t.return,k)}}if(n&4&&(o=t.stateNode,o!=null)){var i=t.memoizedProps,l=e!==null?e.memoizedProps:i,a=t.type,d=t.updateQueue;if(t.updateQueue=null,d!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&_d(o,i),gi(a,l);var g=gi(a,i);for(l=0;l<d.length;l+=2){var m=d[l],v=d[l+1];m==="style"?Pd(o,v):m==="dangerouslySetInnerHTML"?Wd(o,v):m==="children"?yn(o,v):tl(o,m,v,g)}switch(a){case"input":si(o,i);break;case"textarea":Ld(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?Ae(o,!!i.multiple,S,!1):f!==!!i.multiple&&(i.defaultValue!=null?Ae(o,!!i.multiple,i.defaultValue,!0):Ae(o,!!i.multiple,i.multiple?[]:"",!1))}o[En]=i}catch(k){ht(t,t.return,k)}}break;case 6:if(or(r,t),br(t),n&4){if(t.stateNode===null)throw Error(B(162));o=t.stateNode,i=t.memoizedProps;try{o.nodeValue=i}catch(k){ht(t,t.return,k)}}break;case 3:if(or(r,t),br(t),n&4&&e!==null&&e.memoizedState.isDehydrated)try{kn(r.containerInfo)}catch(k){ht(t,t.return,k)}break;case 4:or(r,t),br(t);break;case 13:or(r,t),br(t),o=t.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Bl=xt())),n&4&&Ya(t);break;case 22:if(m=e!==null&&e.memoizedState!==null,t.mode&1?(Rt=(g=Rt)||m,or(r,t),Rt=g):or(r,t),br(t),n&8192){if(g=t.memoizedState!==null,(t.stateNode.isHidden=g)&&!m&&t.mode&1)for(P=t,m=t.child;m!==null;){for(v=P=m;P!==null;){switch(f=P,S=f.child,f.tag){case 0:case 11:case 14:case 15:pn(4,f,f.return);break;case 1:Ee(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){n=f,e=f.return;try{r=n,w.props=r.memoizedProps,w.state=r.memoizedState,w.componentWillUnmount()}catch(k){ht(n,e,k)}}break;case 5:Ee(f,f.return);break;case 22:if(f.memoizedState!==null){Xa(v);continue}}S!==null?(S.return=f,P=S):Xa(v)}m=m.sibling}t:for(m=null,v=t;;){if(v.tag===5){if(m===null){m=v;try{o=v.stateNode,g?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=v.stateNode,d=v.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=Nd("display",l))}catch(k){ht(t,t.return,k)}}}else if(v.tag===6){if(m===null)try{v.stateNode.nodeValue=g?"":v.memoizedProps}catch(k){ht(t,t.return,k)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===t)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===t)break t;for(;v.sibling===null;){if(v.return===null||v.return===t)break t;m===v&&(m=null),v=v.return}m===v&&(m=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:or(r,t),br(t),n&4&&Ya(t);break;case 21:break;default:or(r,t),br(t)}}function br(t){var r=t.flags;if(r&2){try{t:{for(var e=t.return;e!==null;){if(uu(e)){var n=e;break t}e=e.return}throw Error(B(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(yn(o,""),n.flags&=-33);var i=Qa(t);Pi(t,i,o);break;case 3:case 4:var l=n.stateNode.containerInfo,a=Qa(t);Ni(t,a,l);break;default:throw Error(B(161))}}catch(d){ht(t,t.return,d)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Yc(t,r,e){P=t,pu(t)}function pu(t,r,e){for(var n=(t.mode&1)!==0;P!==null;){var o=P,i=o.child;if(o.tag===22&&n){var l=o.memoizedState!==null||eo;if(!l){var a=o.alternate,d=a!==null&&a.memoizedState!==null||Rt;a=eo;var g=Rt;if(eo=l,(Rt=d)&&!g)for(P=o;P!==null;)l=P,d=l.child,l.tag===22&&l.memoizedState!==null?Ja(o):d!==null?(d.return=l,P=d):Ja(o);for(;i!==null;)P=i,pu(i),i=i.sibling;P=o,eo=a,Rt=g}Ka(t)}else o.subtreeFlags&8772&&i!==null?(i.return=o,P=i):Ka(t)}}function Ka(t){for(;P!==null;){var r=P;if(r.flags&8772){var e=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Rt||is(5,r);break;case 1:var n=r.stateNode;if(r.flags&4&&!Rt)if(e===null)n.componentDidMount();else{var o=r.elementType===r.type?e.memoizedProps:ir(r.type,e.memoizedProps);n.componentDidUpdate(o,e.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=r.updateQueue;i!==null&&Ba(r,i,n);break;case 3:var l=r.updateQueue;if(l!==null){if(e=null,r.child!==null)switch(r.child.tag){case 5:e=r.child.stateNode;break;case 1:e=r.child.stateNode}Ba(r,l,e)}break;case 5:var a=r.stateNode;if(e===null&&r.flags&4){e=a;var d=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&e.focus();break;case"img":d.src&&(e.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var g=r.alternate;if(g!==null){var m=g.memoizedState;if(m!==null){var v=m.dehydrated;v!==null&&kn(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Rt||r.flags&512&&Wi(r)}catch(f){ht(r,r.return,f)}}if(r===t){P=null;break}if(e=r.sibling,e!==null){e.return=r.return,P=e;break}P=r.return}}function Xa(t){for(;P!==null;){var r=P;if(r===t){P=null;break}var e=r.sibling;if(e!==null){e.return=r.return,P=e;break}P=r.return}}function Ja(t){for(;P!==null;){var r=P;try{switch(r.tag){case 0:case 11:case 15:var e=r.return;try{is(4,r)}catch(d){ht(r,e,d)}break;case 1:var n=r.stateNode;if(typeof n.componentDidMount=="function"){var o=r.return;try{n.componentDidMount()}catch(d){ht(r,o,d)}}var i=r.return;try{Wi(r)}catch(d){ht(r,i,d)}break;case 5:var l=r.return;try{Wi(r)}catch(d){ht(r,l,d)}}}catch(d){ht(r,r.return,d)}if(r===t){P=null;break}var a=r.sibling;if(a!==null){a.return=r.return,P=a;break}P=r.return}}var Kc=Math.ceil,Uo=zr.ReactCurrentDispatcher,Dl=zr.ReactCurrentOwner,rr=zr.ReactCurrentBatchConfig,nt=0,Et=null,kt=null,Tt=0,Vt=0,ze=Xr(0),Ct=0,Bn=null,ge=0,ls=0,Fl=0,mn=null,Ot=null,Bl=0,$e=1/0,yr=null,Go=!1,Oi=null,Hr=null,no=!1,Mr=null,Vo=0,fn=0,$i=null,wo=-1,ko=0;function Wt(){return nt&6?xt():wo!==-1?wo:wo=xt()}function Ur(t){return t.mode&1?nt&2&&Tt!==0?Tt&-Tt:Fc.transition!==null?(ko===0&&(ko=Zd()),ko):(t=lt,t!==0||(t=window.event,t=t===void 0?16:sg(t.type)),t):1}function gr(t,r,e,n){if(50<fn)throw fn=0,$i=null,Error(B(185));Ln(t,e,n),(!(nt&2)||t!==Et)&&(t===Et&&(!(nt&2)&&(ls|=e),Ct===4&&_r(t,Tt)),Gt(t,n),e===1&&nt===0&&!(r.mode&1)&&($e=xt()+500,ns&&Jr()))}function Gt(t,r){var e=t.callbackNode;Fb(t,r);var n=To(t,t===Et?Tt:0);if(n===0)e!==null&&ia(e),t.callbackNode=null,t.callbackPriority=0;else if(r=n&-n,t.callbackPriority!==r){if(e!=null&&ia(e),r===1)t.tag===0?Dc(Za.bind(null,t)):jg(Za.bind(null,t)),Ec(function(){!(nt&6)&&Jr()}),e=null;else{switch(qd(n)){case 1:e=sl;break;case 4:e=Xd;break;case 16:e=zo;break;case 536870912:e=Jd;break;default:e=zo}e=ku(e,mu.bind(null,t))}t.callbackPriority=r,t.callbackNode=e}}function mu(t,r){if(wo=-1,ko=0,nt&6)throw Error(B(327));var e=t.callbackNode;if(_e()&&t.callbackNode!==e)return null;var n=To(t,t===Et?Tt:0);if(n===0)return null;if(n&30||n&t.expiredLanes||r)r=Qo(t,n);else{r=n;var o=nt;nt|=2;var i=vu();(Et!==t||Tt!==r)&&(yr=null,$e=xt()+500,ne(t,r));do try{Zc();break}catch(a){fu(t,a)}while(!0);yl(),Uo.current=i,nt=o,kt!==null?r=0:(Et=null,Tt=0,r=Ct)}if(r!==0){if(r===2&&(o=mi(t),o!==0&&(n=o,r=Hi(t,o))),r===1)throw e=Bn,ne(t,0),_r(t,n),Gt(t,xt()),e;if(r===6)_r(t,n);else{if(o=t.current.alternate,!(n&30)&&!Xc(o)&&(r=Qo(t,n),r===2&&(i=mi(t),i!==0&&(n=i,r=Hi(t,i))),r===1))throw e=Bn,ne(t,0),_r(t,n),Gt(t,xt()),e;switch(t.finishedWork=o,t.finishedLanes=n,r){case 0:case 1:throw Error(B(345));case 2:qr(t,Ot,yr);break;case 3:if(_r(t,n),(n&130023424)===n&&(r=Bl+500-xt(),10<r)){if(To(t,0)!==0)break;if(o=t.suspendedLanes,(o&n)!==n){Wt(),t.pingedLanes|=t.suspendedLanes&o;break}t.timeoutHandle=Si(qr.bind(null,t,Ot,yr),r);break}qr(t,Ot,yr);break;case 4:if(_r(t,n),(n&4194240)===n)break;for(r=t.eventTimes,o=-1;0<n;){var l=31-dr(n);i=1<<l,l=r[l],l>o&&(o=l),n&=~i}if(n=o,n=xt()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Kc(n/1960))-n,10<n){t.timeoutHandle=Si(qr.bind(null,t,Ot,yr),n);break}qr(t,Ot,yr);break;case 5:qr(t,Ot,yr);break;default:throw Error(B(329))}}}return Gt(t,xt()),t.callbackNode===e?mu.bind(null,t):null}function Hi(t,r){var e=mn;return t.current.memoizedState.isDehydrated&&(ne(t,r).flags|=256),t=Qo(t,r),t!==2&&(r=Ot,Ot=e,r!==null&&Ui(r)),t}function Ui(t){Ot===null?Ot=t:Ot.push.apply(Ot,t)}function Xc(t){for(var r=t;;){if(r.flags&16384){var e=r.updateQueue;if(e!==null&&(e=e.stores,e!==null))for(var n=0;n<e.length;n++){var o=e[n],i=o.getSnapshot;o=o.value;try{if(!ur(i(),o))return!1}catch{return!1}}}if(e=r.child,r.subtreeFlags&16384&&e!==null)e.return=r,r=e;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function _r(t,r){for(r&=~Fl,r&=~ls,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var e=31-dr(r),n=1<<e;t[e]=-1,r&=~n}}function Za(t){if(nt&6)throw Error(B(327));_e();var r=To(t,0);if(!(r&1))return Gt(t,xt()),null;var e=Qo(t,r);if(t.tag!==0&&e===2){var n=mi(t);n!==0&&(r=n,e=Hi(t,n))}if(e===1)throw e=Bn,ne(t,0),_r(t,r),Gt(t,xt()),e;if(e===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,qr(t,Ot,yr),Gt(t,xt()),null}function Rl(t,r){var e=nt;nt|=1;try{return t(r)}finally{nt=e,nt===0&&($e=xt()+500,ns&&Jr())}}function ue(t){Mr!==null&&Mr.tag===0&&!(nt&6)&&_e();var r=nt;nt|=1;var e=rr.transition,n=lt;try{if(rr.transition=null,lt=1,t)return t()}finally{lt=n,rr.transition=e,nt=r,!(nt&6)&&Jr()}}function _l(){Vt=ze.current,ut(ze)}function ne(t,r){t.finishedWork=null,t.finishedLanes=0;var e=t.timeoutHandle;if(e!==-1&&(t.timeoutHandle=-1,Ic(e)),kt!==null)for(e=kt.return;e!==null;){var n=e;switch(ml(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Ro();break;case 3:Pe(),ut(Ht),ut(Lt),jl();break;case 5:Sl(n);break;case 4:Pe();break;case 13:ut(pt);break;case 19:ut(pt);break;case 10:hl(n.type._context);break;case 22:case 23:_l()}e=e.return}if(Et=t,kt=t=Gr(t.current,null),Tt=Vt=r,Ct=0,Bn=null,Fl=ls=ge=0,Ot=mn=null,re!==null){for(r=0;r<re.length;r++)if(e=re[r],n=e.interleaved,n!==null){e.interleaved=null;var o=n.next,i=e.pending;if(i!==null){var l=i.next;i.next=o,n.next=l}e.pending=n}re=null}return t}function fu(t,r){do{var e=kt;try{if(yl(),yo.current=Ho,$o){for(var n=ft.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}$o=!1}if(de=0,It=jt=ft=null,cn=!1,An=0,Dl.current=null,e===null||e.return===null){Ct=1,Bn=r,kt=null;break}t:{var i=t,l=e.return,a=e,d=r;if(r=Tt,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var g=d,m=a,v=m.tag;if(!(m.mode&1)&&(v===0||v===11||v===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var S=Na(l);if(S!==null){S.flags&=-257,Pa(S,l,a,i,r),S.mode&1&&Wa(i,g,r),r=S,d=g;var w=r.updateQueue;if(w===null){var k=new Set;k.add(d),r.updateQueue=k}else w.add(d);break t}else{if(!(r&1)){Wa(i,g,r),Ll();break t}d=Error(B(426))}}else if(bt&&a.mode&1){var C=Na(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Pa(C,l,a,i,r),fl(Oe(d,a));break t}}i=d=Oe(d,a),Ct!==4&&(Ct=2),mn===null?mn=[i]:mn.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,r&=-r,i.lanes|=r;var c=qg(i,d,r);Fa(i,c);break t;case 1:a=d;var u=i.type,b=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Hr===null||!Hr.has(b)))){i.flags|=65536,r&=-r,i.lanes|=r;var x=tu(i,a,r);Fa(i,x);break t}}i=i.return}while(i!==null)}hu(e)}catch(A){r=A,kt===e&&e!==null&&(kt=e=e.return);continue}break}while(!0)}function vu(){var t=Uo.current;return Uo.current=Ho,t===null?Ho:t}function Ll(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),Et===null||!(ge&268435455)&&!(ls&268435455)||_r(Et,Tt)}function Qo(t,r){var e=nt;nt|=2;var n=vu();(Et!==t||Tt!==r)&&(yr=null,ne(t,r));do try{Jc();break}catch(o){fu(t,o)}while(!0);if(yl(),nt=e,Uo.current=n,kt!==null)throw Error(B(261));return Et=null,Tt=0,Ct}function Jc(){for(;kt!==null;)yu(kt)}function Zc(){for(;kt!==null&&!Sb();)yu(kt)}function yu(t){var r=wu(t.alternate,t,Vt);t.memoizedProps=t.pendingProps,r===null?hu(t):kt=r,Dl.current=null}function hu(t){var r=t;do{var e=r.alternate;if(t=r.return,r.flags&32768){if(e=Gc(e,r),e!==null){e.flags&=32767,kt=e;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,kt=null;return}}else if(e=Uc(e,r,Vt),e!==null){kt=e;return}if(r=r.sibling,r!==null){kt=r;return}kt=r=t}while(r!==null);Ct===0&&(Ct=5)}function qr(t,r,e){var n=lt,o=rr.transition;try{rr.transition=null,lt=1,qc(t,r,e,n)}finally{rr.transition=o,lt=n}return null}function qc(t,r,e,n){do _e();while(Mr!==null);if(nt&6)throw Error(B(327));e=t.finishedWork;var o=t.finishedLanes;if(e===null)return null;if(t.finishedWork=null,t.finishedLanes=0,e===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var i=e.lanes|e.childLanes;if(Bb(t,i),t===Et&&(kt=Et=null,Tt=0),!(e.subtreeFlags&2064)&&!(e.flags&2064)||no||(no=!0,ku(zo,function(){return _e(),null})),i=(e.flags&15990)!==0,e.subtreeFlags&15990||i){i=rr.transition,rr.transition=null;var l=lt;lt=1;var a=nt;nt|=4,Dl.current=null,Qc(t,e),cu(e,t),hc(wi),Ao=!!xi,wi=xi=null,t.current=e,Yc(e),jb(),nt=a,lt=l,rr.transition=i}else t.current=e;if(no&&(no=!1,Mr=t,Vo=o),i=t.pendingLanes,i===0&&(Hr=null),Eb(e.stateNode),Gt(t,xt()),r!==null)for(n=t.onRecoverableError,e=0;e<r.length;e++)o=r[e],n(o.value,{componentStack:o.stack,digest:o.digest});if(Go)throw Go=!1,t=Oi,Oi=null,t;return Vo&1&&t.tag!==0&&_e(),i=t.pendingLanes,i&1?t===$i?fn++:(fn=0,$i=t):fn=0,Jr(),null}function _e(){if(Mr!==null){var t=qd(Vo),r=rr.transition,e=lt;try{if(rr.transition=null,lt=16>t?16:t,Mr===null)var n=!1;else{if(t=Mr,Mr=null,Vo=0,nt&6)throw Error(B(331));var o=nt;for(nt|=4,P=t.current;P!==null;){var i=P,l=i.child;if(P.flags&16){var a=i.deletions;if(a!==null){for(var d=0;d<a.length;d++){var g=a[d];for(P=g;P!==null;){var m=P;switch(m.tag){case 0:case 11:case 15:pn(8,m,i)}var v=m.child;if(v!==null)v.return=m,P=v;else for(;P!==null;){m=P;var f=m.sibling,S=m.return;if(gu(m),m===g){P=null;break}if(f!==null){f.return=S,P=f;break}P=S}}}var w=i.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var C=k.sibling;k.sibling=null,k=C}while(k!==null)}}P=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,P=l;else t:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:pn(9,i,i.return)}var c=i.sibling;if(c!==null){c.return=i.return,P=c;break t}P=i.return}}var u=t.current;for(P=u;P!==null;){l=P;var b=l.child;if(l.subtreeFlags&2064&&b!==null)b.return=l,P=b;else t:for(l=u;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:is(9,a)}}catch(A){ht(a,a.return,A)}if(a===l){P=null;break t}var x=a.sibling;if(x!==null){x.return=a.return,P=x;break t}P=a.return}}if(nt=o,Jr(),fr&&typeof fr.onPostCommitFiberRoot=="function")try{fr.onPostCommitFiberRoot(Zo,t)}catch{}n=!0}return n}finally{lt=e,rr.transition=r}}return!1}function qa(t,r,e){r=Oe(e,r),r=qg(t,r,1),t=$r(t,r,1),r=Wt(),t!==null&&(Ln(t,1,r),Gt(t,r))}function ht(t,r,e){if(t.tag===3)qa(t,t,e);else for(;r!==null;){if(r.tag===3){qa(r,t,e);break}else if(r.tag===1){var n=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Hr===null||!Hr.has(n))){t=Oe(e,t),t=tu(r,t,1),r=$r(r,t,1),t=Wt(),r!==null&&(Ln(r,1,t),Gt(r,t));break}}r=r.return}}function tp(t,r,e){var n=t.pingCache;n!==null&&n.delete(r),r=Wt(),t.pingedLanes|=t.suspendedLanes&e,Et===t&&(Tt&e)===e&&(Ct===4||Ct===3&&(Tt&130023424)===Tt&&500>xt()-Bl?ne(t,0):Fl|=e),Gt(t,r)}function xu(t,r){r===0&&(t.mode&1?(r=Qn,Qn<<=1,!(Qn&130023424)&&(Qn=4194304)):r=1);var e=Wt();t=Ir(t,r),t!==null&&(Ln(t,r,e),Gt(t,e))}function rp(t){var r=t.memoizedState,e=0;r!==null&&(e=r.retryLane),xu(t,e)}function ep(t,r){var e=0;switch(t.tag){case 13:var n=t.stateNode,o=t.memoizedState;o!==null&&(e=o.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(B(314))}n!==null&&n.delete(r),xu(t,e)}var wu;wu=function(t,r,e){if(t!==null)if(t.memoizedProps!==r.pendingProps||Ht.current)$t=!0;else{if(!(t.lanes&e)&&!(r.flags&128))return $t=!1,Hc(t,r,e);$t=!!(t.flags&131072)}else $t=!1,bt&&r.flags&1048576&&Cg(r,Mo,r.index);switch(r.lanes=0,r.tag){case 2:var n=r.type;xo(t,r),t=r.pendingProps;var o=Me(r,Lt.current);Re(r,e),o=Il(null,r,n,t,o,e);var i=El();return r.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ut(n)?(i=!0,_o(r)):i=!1,r.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,wl(r),o.updater=ss,r.stateNode=o,o._reactInternals=r,Ai(r,n,t,e),r=Bi(null,r,n,!0,i,e)):(r.tag=0,bt&&i&&pl(r),Mt(null,r,o,e),r=r.child),r;case 16:n=r.elementType;t:{switch(xo(t,r),t=r.pendingProps,o=n._init,n=o(n._payload),r.type=n,o=r.tag=op(n),t=ir(n,t),o){case 0:r=Fi(null,r,n,t,e);break t;case 1:r=Ha(null,r,n,t,e);break t;case 11:r=Oa(null,r,n,t,e);break t;case 14:r=$a(null,r,n,ir(n.type,t),e);break t}throw Error(B(306,n,""))}return r;case 0:return n=r.type,o=r.pendingProps,o=r.elementType===n?o:ir(n,o),Fi(t,r,n,o,e);case 1:return n=r.type,o=r.pendingProps,o=r.elementType===n?o:ir(n,o),Ha(t,r,n,o,e);case 3:t:{if(ou(r),t===null)throw Error(B(387));n=r.pendingProps,i=r.memoizedState,o=i.element,Dg(t,r),Po(r,n,null,e);var l=r.memoizedState;if(n=l.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},r.updateQueue.baseState=i,r.memoizedState=i,r.flags&256){o=Oe(Error(B(423)),r),r=Ua(t,r,n,e,o);break t}else if(n!==o){o=Oe(Error(B(424)),r),r=Ua(t,r,n,e,o);break t}else for(Qt=Or(r.stateNode.containerInfo.firstChild),Yt=r,bt=!0,ar=null,e=Tg(r,null,n,e),r.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(We(),n===o){r=Er(t,r,e);break t}Mt(t,r,n,e)}r=r.child}return r;case 5:return Fg(r),t===null&&Ei(r),n=r.type,o=r.pendingProps,i=t!==null?t.memoizedProps:null,l=o.children,ki(n,o)?l=null:i!==null&&ki(n,i)&&(r.flags|=32),nu(t,r),Mt(t,r,l,e),r.child;case 6:return t===null&&Ei(r),null;case 13:return su(t,r,e);case 4:return kl(r,r.stateNode.containerInfo),n=r.pendingProps,t===null?r.child=Ne(r,null,n,e):Mt(t,r,n,e),r.child;case 11:return n=r.type,o=r.pendingProps,o=r.elementType===n?o:ir(n,o),Oa(t,r,n,o,e);case 7:return Mt(t,r,r.pendingProps,e),r.child;case 8:return Mt(t,r,r.pendingProps.children,e),r.child;case 12:return Mt(t,r,r.pendingProps.children,e),r.child;case 10:t:{if(n=r.type._context,o=r.pendingProps,i=r.memoizedProps,l=o.value,dt(Wo,n._currentValue),n._currentValue=l,i!==null)if(ur(i.value,l)){if(i.children===o.children&&!Ht.current){r=Er(t,r,e);break t}}else for(i=r.child,i!==null&&(i.return=r);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var d=a.firstContext;d!==null;){if(d.context===n){if(i.tag===1){d=Sr(-1,e&-e),d.tag=2;var g=i.updateQueue;if(g!==null){g=g.shared;var m=g.pending;m===null?d.next=d:(d.next=m.next,m.next=d),g.pending=d}}i.lanes|=e,d=i.alternate,d!==null&&(d.lanes|=e),zi(i.return,e,r),a.lanes|=e;break}d=d.next}}else if(i.tag===10)l=i.type===r.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(B(341));l.lanes|=e,a=l.alternate,a!==null&&(a.lanes|=e),zi(l,e,r),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===r){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Mt(t,r,o.children,e),r=r.child}return r;case 9:return o=r.type,n=r.pendingProps.children,Re(r,e),o=er(o),n=n(o),r.flags|=1,Mt(t,r,n,e),r.child;case 14:return n=r.type,o=ir(n,r.pendingProps),o=ir(n.type,o),$a(t,r,n,o,e);case 15:return ru(t,r,r.type,r.pendingProps,e);case 17:return n=r.type,o=r.pendingProps,o=r.elementType===n?o:ir(n,o),xo(t,r),r.tag=1,Ut(n)?(t=!0,_o(r)):t=!1,Re(r,e),Zg(r,n,o),Ai(r,n,o,e),Bi(null,r,n,!0,t,e);case 19:return iu(t,r,e);case 22:return eu(t,r,e)}throw Error(B(156,r.tag))};function ku(t,r){return Kd(t,r)}function np(t,r,e,n){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tr(t,r,e,n){return new np(t,r,e,n)}function Ml(t){return t=t.prototype,!(!t||!t.isReactComponent)}function op(t){if(typeof t=="function")return Ml(t)?1:0;if(t!=null){if(t=t.$$typeof,t===el)return 11;if(t===nl)return 14}return 2}function Gr(t,r){var e=t.alternate;return e===null?(e=tr(t.tag,r,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=r,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&14680064,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,r=t.dependencies,e.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e}function So(t,r,e,n,o,i){var l=2;if(n=t,typeof t=="function")Ml(t)&&(l=1);else if(typeof t=="string")l=5;else t:switch(t){case ye:return oe(e.children,o,i,r);case rl:l=8,o|=8;break;case ti:return t=tr(12,e,r,o|2),t.elementType=ti,t.lanes=i,t;case ri:return t=tr(13,e,r,o),t.elementType=ri,t.lanes=i,t;case ei:return t=tr(19,e,r,o),t.elementType=ei,t.lanes=i,t;case Fd:return as(e,o,i,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ad:l=10;break t;case Dd:l=9;break t;case el:l=11;break t;case nl:l=14;break t;case Dr:l=16,n=null;break t}throw Error(B(130,t==null?t:typeof t,""))}return r=tr(l,e,r,o),r.elementType=t,r.type=n,r.lanes=i,r}function oe(t,r,e,n){return t=tr(7,t,n,r),t.lanes=e,t}function as(t,r,e,n){return t=tr(22,t,n,r),t.elementType=Fd,t.lanes=e,t.stateNode={isHidden:!1},t}function Os(t,r,e){return t=tr(6,t,null,r),t.lanes=e,t}function $s(t,r,e){return r=tr(4,t.children!==null?t.children:[],t.key,r),r.lanes=e,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function sp(t,r,e,n,o){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ks(0),this.expirationTimes=ks(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ks(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Wl(t,r,e,n,o,i,l,a,d){return t=new sp(t,r,e,a,d),r===1?(r=1,i===!0&&(r|=8)):r=0,i=tr(3,null,null,r),t.current=i,i.stateNode=t,i.memoizedState={element:n,isDehydrated:e,cache:null,transitions:null,pendingSuspenseBoundaries:null},wl(i),t}function ip(t,r,e){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ve,key:n==null?null:""+n,children:t,containerInfo:r,implementation:e}}function Su(t){if(!t)return Qr;t=t._reactInternals;t:{if(ce(t)!==t||t.tag!==1)throw Error(B(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break t;case 1:if(Ut(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break t}}r=r.return}while(r!==null);throw Error(B(171))}if(t.tag===1){var e=t.type;if(Ut(e))return Sg(t,e,r)}return r}function ju(t,r,e,n,o,i,l,a,d){return t=Wl(e,n,!0,t,o,i,l,a,d),t.context=Su(null),e=t.current,n=Wt(),o=Ur(e),i=Sr(n,o),i.callback=r??null,$r(e,i,o),t.current.lanes=o,Ln(t,o,n),Gt(t,n),t}function ds(t,r,e,n){var o=r.current,i=Wt(),l=Ur(o);return e=Su(e),r.context===null?r.context=e:r.pendingContext=e,r=Sr(i,l),r.payload={element:t},n=n===void 0?null:n,n!==null&&(r.callback=n),t=$r(o,r,l),t!==null&&(gr(t,o,l,i),vo(t,o,l)),l}function Yo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function td(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<r?e:r}}function Nl(t,r){td(t,r),(t=t.alternate)&&td(t,r)}function lp(){return null}var Cu=typeof reportError=="function"?reportError:function(t){console.error(t)};function Pl(t){this._internalRoot=t}gs.prototype.render=Pl.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(B(409));ds(t,r,null,null)};gs.prototype.unmount=Pl.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;ue(function(){ds(null,t,null,null)}),r[Cr]=null}};function gs(t){this._internalRoot=t}gs.prototype.unstable_scheduleHydration=function(t){if(t){var r=eg();t={blockedOn:null,target:t,priority:r};for(var e=0;e<Rr.length&&r!==0&&r<Rr[e].priority;e++);Rr.splice(e,0,t),e===0&&og(t)}};function Ol(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function us(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rd(){}function ap(t,r,e,n,o){if(o){if(typeof n=="function"){var i=n;n=function(){var g=Yo(l);i.call(g)}}var l=ju(r,n,t,0,null,!1,!1,"",rd);return t._reactRootContainer=l,t[Cr]=l.current,Cn(t.nodeType===8?t.parentNode:t),ue(),l}for(;o=t.lastChild;)t.removeChild(o);if(typeof n=="function"){var a=n;n=function(){var g=Yo(d);a.call(g)}}var d=Wl(t,0,!1,null,null,!1,!1,"",rd);return t._reactRootContainer=d,t[Cr]=d.current,Cn(t.nodeType===8?t.parentNode:t),ue(function(){ds(r,d,e,n)}),d}function bs(t,r,e,n,o){var i=e._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var d=Yo(l);a.call(d)}}ds(r,l,t,o)}else l=ap(e,r,t,o,n);return Yo(l)}tg=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var e=sn(r.pendingLanes);e!==0&&(il(r,e|1),Gt(r,xt()),!(nt&6)&&($e=xt()+500,Jr()))}break;case 13:ue(function(){var n=Ir(t,1);if(n!==null){var o=Wt();gr(n,t,1,o)}}),Nl(t,1)}};ll=function(t){if(t.tag===13){var r=Ir(t,134217728);if(r!==null){var e=Wt();gr(r,t,134217728,e)}Nl(t,134217728)}};rg=function(t){if(t.tag===13){var r=Ur(t),e=Ir(t,r);if(e!==null){var n=Wt();gr(e,t,r,n)}Nl(t,r)}};eg=function(){return lt};ng=function(t,r){var e=lt;try{return lt=t,r()}finally{lt=e}};bi=function(t,r,e){switch(r){case"input":if(si(t,e),r=e.name,e.type==="radio"&&r!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<e.length;r++){var n=e[r];if(n!==t&&n.form===t.form){var o=es(n);if(!o)throw Error(B(90));Rd(n),si(n,o)}}}break;case"textarea":Ld(t,e);break;case"select":r=e.value,r!=null&&Ae(t,!!e.multiple,r,!1)}};Hd=Rl;Ud=ue;var dp={usingClientEntryPoint:!1,Events:[Wn,ke,es,Od,$d,Rl]},tn={findFiberByHostInstance:te,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gp={bundleType:tn.bundleType,version:tn.version,rendererPackageName:tn.rendererPackageName,rendererConfig:tn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Qd(t),t===null?null:t.stateNode},findFiberByHostInstance:tn.findFiberByHostInstance||lp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oo.isDisabled&&oo.supportsFiber)try{Zo=oo.inject(gp),fr=oo}catch{}}Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dp;Xt.createPortal=function(t,r){var e=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ol(r))throw Error(B(200));return ip(t,r,null,e)};Xt.createRoot=function(t,r){if(!Ol(t))throw Error(B(299));var e=!1,n="",o=Cu;return r!=null&&(r.unstable_strictMode===!0&&(e=!0),r.identifierPrefix!==void 0&&(n=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),r=Wl(t,1,!1,null,null,e,!1,n,o),t[Cr]=r.current,Cn(t.nodeType===8?t.parentNode:t),new Pl(r)};Xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=Qd(r),t=t===null?null:t.stateNode,t};Xt.flushSync=function(t){return ue(t)};Xt.hydrate=function(t,r,e){if(!us(r))throw Error(B(200));return bs(null,t,r,!0,e)};Xt.hydrateRoot=function(t,r,e){if(!Ol(t))throw Error(B(405));var n=e!=null&&e.hydratedSources||null,o=!1,i="",l=Cu;if(e!=null&&(e.unstable_strictMode===!0&&(o=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(l=e.onRecoverableError)),r=ju(r,null,t,1,e??null,o,!1,i,l),t[Cr]=r.current,Cn(t),n)for(t=0;t<n.length;t++)e=n[t],o=e._getVersion,o=o(e._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[e,o]:r.mutableSourceEagerHydrationData.push(e,o);return new gs(r)};Xt.render=function(t,r,e){if(!us(r))throw Error(B(200));return bs(null,t,r,!1,e)};Xt.unmountComponentAtNode=function(t){if(!us(t))throw Error(B(40));return t._reactRootContainer?(ue(function(){bs(null,null,t,!1,function(){t._reactRootContainer=null,t[Cr]=null})}),!0):!1};Xt.unstable_batchedUpdates=Rl;Xt.unstable_renderSubtreeIntoContainer=function(t,r,e,n){if(!us(e))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return bs(t,r,e,!1,n)};Xt.version="18.3.1-next-f1338f8080-20240426";function Iu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Iu)}catch(t){console.error(t)}}Iu(),Id.exports=Xt;var up=Id.exports,Eu,ed=up;Eu=ed.createRoot,ed.hydrateRoot;/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),zu=(...t)=>t.filter((r,e,n)=>!!r&&r.trim()!==""&&n.indexOf(r)===e).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var cp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=I.forwardRef(({color:t="currentColor",size:r=24,strokeWidth:e=2,absoluteStrokeWidth:n,className:o="",children:i,iconNode:l,...a},d)=>I.createElement("svg",{ref:d,...cp,width:r,height:r,stroke:t,strokeWidth:n?Number(e)*24/Number(r):e,className:zu("lucide",o),...a},[...l.map(([g,m])=>I.createElement(g,m)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=(t,r)=>{const e=I.forwardRef(({className:n,...o},i)=>I.createElement(pp,{ref:i,iconNode:r,className:zu(`lucide-${bp(t)}`,n),...o}));return e.displayName=`${t}`,e};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=rt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=rt("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=rt("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=rt("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=rt("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=rt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=rt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=rt("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=rt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=rt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=rt("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=rt("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=rt("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=rt("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=rt("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=rt("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=rt("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=rt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=rt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=rt("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=rt("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=rt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=rt("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=rt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=rt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=rt("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=rt("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=rt("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=rt("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=rt("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=rt("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=rt("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=rt("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=rt("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=rt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=rt("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),Gl="anvil_token",Vl=()=>localStorage.getItem(Gl),Ap=t=>localStorage.setItem(Gl,t),Gi=()=>localStorage.removeItem(Gl),$=async(t,r,e)=>{const n={};e!==void 0&&(n["Content-Type"]="application/json");const o=Vl();o&&(n.Authorization=`Bearer ${o}`);const i=await fetch(`/api${r}`,{method:t,headers:n,body:e!==void 0?JSON.stringify(e):void 0});if(i.status===401)throw Gi(),window.dispatchEvent(new Event("anvil-unauthorized")),new Error("Not authenticated");if(i.status===204)return null;if(!i.ok){const l=await i.text();let a=l;try{a=JSON.parse(l).detail||l}catch{}throw new Error(a||`HTTP ${i.status}`)}return i.json()},K={register:t=>$("POST","/auth/register",t),login:t=>$("POST","/auth/login",t),me:()=>$("GET","/auth/me"),getGcalStatus:()=>$("GET","/auth/google/status"),connectGoogle:()=>{window.location.href=`/api/auth/google?token=${encodeURIComponent(Vl()||"")}`},disconnectGoogle:()=>$("DELETE","/auth/google"),getPillars:()=>$("GET","/pillars"),getFocus:()=>$("GET","/focus"),createFocus:t=>$("POST","/focus",t),deleteFocus:t=>$("DELETE",`/focus/${t}`),getTasks:()=>$("GET","/tasks"),createTask:t=>$("POST","/tasks",t),updateTask:(t,r)=>$("PUT",`/tasks/${t}`,r),deleteTask:t=>$("DELETE",`/tasks/${t}`),restoreTask:t=>$("POST",`/tasks/${t}/restore`),scheduleTask:t=>$("PUT",`/tasks/${t}/schedule`),getGoals:t=>$("GET",`/goals${t?`?pillar=${encodeURIComponent(t)}`:""}`),createGoal:t=>$("POST","/goals",t),updateGoal:(t,r)=>$("PUT",`/goals/${t}`,r),deleteGoal:t=>$("DELETE",`/goals/${t}`),restoreGoal:t=>$("POST",`/goals/${t}/restore`),getHabits:()=>$("GET","/habits"),createHabit:t=>$("POST","/habits",t),updateHabit:(t,r)=>$("PUT",`/habits/${t}`,r),deleteHabit:t=>$("DELETE",`/habits/${t}`),restoreHabit:t=>$("POST",`/habits/${t}/restore`),toggleHabitLog:(t,r)=>$("POST",`/habits/${t}/log/${r}`),setHabitLogNote:(t,r,e)=>$("PUT",`/habits/${t}/log/${r}/note`,{note:e}),setHabitLogCount:(t,r,e,n)=>$("PUT",`/habits/${t}/log/${r}/count`,{count:e,note:n}),clearHabitLog:(t,r)=>$("DELETE",`/habits/${t}/log/${r}`),getHabitsYearly:t=>$("GET",`/habits/yearly/${t}`),getJournalEntry:t=>$("GET",`/journal/${t}`),getJournalHistory:(t,r)=>$("GET",`/journal/history/${t}/${r}`),updateJournalMood:(t,r)=>$("PUT",`/journal/${t}`,{mood:r}),addJournalBullet:(t,r,e)=>$("POST",`/journal/${t}/bullets`,{section:r,text:e}),deleteJournalBullet:t=>$("DELETE",`/journal/bullets/${t}`),getSkills:()=>$("GET","/skills"),createSkill:t=>$("POST","/skills",t),deleteSkill:t=>$("DELETE",`/skills/${t}`),restoreSkill:t=>$("POST",`/skills/${t}/restore`),addSkillNote:(t,r,e)=>$("POST",`/skills/${t}/notes`,{stage:r,text:e}),deleteSkillNote:t=>$("DELETE",`/skill-notes/${t}`),toggleSkillNote:t=>$("PUT",`/skill-notes/${t}/toggle`),completeSkillStage:(t,r)=>$("POST",`/skills/${t}/complete-stage`,{stage:r}),getScriptures:()=>$("GET","/scriptures"),createScripture:t=>$("POST","/scriptures",t),deleteScripture:t=>$("DELETE",`/scriptures/${t}`),restoreScripture:t=>$("POST",`/scriptures/${t}/restore`),addChapter:(t,r)=>$("POST",`/scriptures/${t}/chapters`,r),updateChapter:(t,r)=>$("PUT",`/chapters/${t}`,r),deleteChapter:t=>$("DELETE",`/chapters/${t}`),restoreChapter:t=>$("POST",`/chapters/${t}/restore`),addInsight:(t,r)=>$("POST",`/chapters/${t}/insights`,{text:r}),deleteInsight:t=>$("DELETE",`/insights/${t}`),getTopics:()=>$("GET","/revision/topics"),createTopic:t=>$("POST","/revision/topics",t),deleteTopic:t=>$("DELETE",`/revision/topics/${t}`),restoreTopic:t=>$("POST",`/revision/topics/${t}/restore`),getDueToday:()=>$("GET","/revision/due-today"),getCalendar:(t,r)=>$("GET",`/revision/calendar/${t}/${r}`),toggleReviewDone:t=>$("PUT",`/revision/reviews/${t}/done`),getAffirmations:()=>$("GET","/affirmations"),createAffirmation:t=>$("POST","/affirmations",t),updateAffirmation:(t,r)=>$("PUT",`/affirmations/${t}`,r),deleteAffirmation:t=>$("DELETE",`/affirmations/${t}`),restoreAffirmation:t=>$("POST",`/affirmations/${t}/restore`)},Dp=7e3;function ms(t,r,e){const[n,o]=I.useState([]),i=I.useRef({}),l=I.useCallback(async(g,m="Item")=>{await t(g),e();const v=`${g}-${Date.now()}`;o(f=>[...f,{id:v,itemId:g,label:m}]),i.current[v]=setTimeout(()=>{o(f=>f.filter(S=>S.id!==v)),delete i.current[v]},Dp)},[t,e]),a=I.useCallback(async g=>{const m=n.find(v=>v.id===g);m&&(clearTimeout(i.current[g]),delete i.current[g],o(v=>v.filter(f=>f.id!==g)),await r(m.itemId),e())},[n,r,e]),d=I.useCallback(g=>{clearTimeout(i.current[g]),delete i.current[g],o(m=>m.filter(v=>v.id!==g))},[]);return{deleteItem:l,toasts:n,handleUndo:a,handleDismiss:d}}function fs({toasts:t,onUndo:r,onDismiss:e}){return s.jsx("div",{style:fe.container,children:t.map(n=>s.jsx(Fp,{toast:n,onUndo:r,onDismiss:e},n.id))})}function Fp({toast:t,onUndo:r,onDismiss:e}){const[n,o]=I.useState(100);return I.useEffect(()=>{const i=Date.now(),l=7e3,a=setInterval(()=>{const d=Date.now()-i,g=Math.max(0,100-d/l*100);o(g),g===0&&clearInterval(a)},50);return()=>clearInterval(a)},[]),s.jsxs("div",{style:fe.toast,children:[s.jsx("div",{style:{...fe.bar,width:`${n}%`}}),s.jsxs("span",{style:fe.msg,children:[t.label," deleted"]}),s.jsx("button",{style:fe.undoBtn,onClick:()=>r(t.id),children:"Undo"}),s.jsx("button",{style:fe.closeBtn,onClick:()=>e(t.id),children:"×"})]})}const fe={container:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",gap:8,zIndex:999,pointerEvents:"none"},toast:{position:"relative",display:"flex",alignItems:"center",gap:12,background:"#26241F",color:"#fff",borderRadius:10,padding:"12px 16px",fontSize:13.5,fontFamily:"'Inter', system-ui, sans-serif",boxShadow:"0 4px 20px rgba(0,0,0,0.25)",minWidth:260,overflow:"hidden",pointerEvents:"all"},bar:{position:"absolute",bottom:0,left:0,height:3,background:"#4C9A6B",transition:"width 0.05s linear",borderRadius:"0 0 0 10px"},msg:{flex:1,fontWeight:500},undoBtn:{border:"1px solid rgba(255,255,255,0.3)",background:"none",color:"#4C9A6B",fontWeight:700,fontSize:13,padding:"4px 10px",borderRadius:6,cursor:"pointer",fontFamily:"inherit"},closeBtn:{border:"none",background:"none",color:"rgba(255,255,255,0.5)",cursor:"pointer",fontSize:18,lineHeight:1,padding:"0 2px"}},io={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},od=[{id:"Q1",symbol:"™",title:"Do Now",sub:"Important · Urgent",accent:"#C2536B"},{id:"Q2",symbol:"©",title:"Schedule",sub:"Important · Not Urgent",accent:"#3A7CA5"},{id:"Q3",symbol:"®",title:"Delegate",sub:"Not Important · Urgent",accent:"#C9A227"},{id:"Q4",symbol:"•",title:"Drop",sub:"Not Important · Not Urgent",accent:"#8A8780"}];function Bp(){return new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Kolkata"})}function Rp(){const t=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"})),e=t.getMinutes()<30?30:0,n=e===0?t.getHours()+1:t.getHours();return`${String(n%24).padStart(2,"0")}:${String(e).padStart(2,"0")}`}function _p(t,r){const[e,n]=t.split(":").map(Number),o=e*60+n+r;return`${String(Math.floor(o/60)%24).padStart(2,"0")}:${String(o%60).padStart(2,"0")}`}function Lp(t){return t?new Date(t).toLocaleString("en-IN",{timeZone:"Asia/Kolkata",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0}):""}const Hs=()=>({title:"",pillar:"Financial",est:30,date:Bp(),startTime:Rp()});function Mp(){const[t,r]=I.useState([]),[e,n]=I.useState(null),[o,i]=I.useState(Hs()),[l,a]=I.useState({connected:!1,configured:!1}),d=I.useCallback(()=>K.getTasks().then(r).catch(console.error),[]);I.useEffect(()=>{d(),K.getGcalStatus().then(a).catch(()=>{})},[d]);const{deleteItem:g,toasts:m,handleUndo:v,handleDismiss:f}=ms(K.deleteTask,K.restoreTask,d),S=b=>t.filter(x=>x.quadrant===b),w=b=>S(b).reduce((x,A)=>x+A.time_estimate_min,0),k=b=>b>=60?`${Math.floor(b/60)}h${b%60?` ${b%60}m`:""}`:`${b}m`,C=b=>{var A;return`${((A=od.find(_=>_.id===b.quadrant))==null?void 0:A.symbol)??""} ${b.title}`},c=async b=>{if(!o.title.trim())return;const x=o.date&&o.startTime?`${o.date}T${o.startTime}:00`:null;await K.createTask({pillar:o.pillar,title:o.title,quadrant:b,time_estimate_min:Number(o.est)||30,start_datetime:x}),i(Hs()),n(null),d()},u=(b,x)=>g(b,x);return s.jsxs("div",{style:Y.page,children:[s.jsxs("div",{style:Y.head,children:[s.jsxs("div",{children:[s.jsx("div",{style:Y.eyebrow,children:"Anvil · Weekly Routing"}),s.jsx("h1",{style:Y.h1,children:"Weekly Routing"})]}),s.jsxs("div",{style:Y.headRight,children:[s.jsx("div",{style:Y.legend,children:Object.entries(io).map(([b,x])=>s.jsxs("span",{style:Y.legendItem,children:[s.jsx("span",{style:{...Y.dot,background:x.dot}}),b]},b))}),l.configured&&(l.connected?s.jsxs("button",{style:Y.gcalBadgeOn,title:"Disconnect Google Calendar",onClick:()=>K.disconnectGoogle().then(()=>a({...l,connected:!1})),children:[s.jsx(so,{size:13})," Google Calendar connected"]}):s.jsxs("button",{style:Y.gcalBadgeOff,onClick:()=>K.connectGoogle(),children:[s.jsx(so,{size:13})," Connect Google Calendar"]}))]})]}),s.jsx("div",{style:Y.grid,children:od.map(b=>s.jsxs("section",{style:{...Y.quad,borderTop:`3px solid ${b.accent}`},children:[s.jsxs("header",{style:Y.quadHead,children:[s.jsxs("div",{style:Y.quadTitleRow,children:[s.jsx("span",{style:{...Y.symbol,color:b.accent},children:b.symbol}),s.jsxs("div",{children:[s.jsx("div",{style:Y.quadTitle,children:b.title}),s.jsx("div",{style:Y.quadSub,children:b.sub})]})]}),s.jsx("span",{style:Y.quadTotal,children:k(w(b.id))})]}),s.jsxs("div",{style:Y.list,children:[S(b.id).map(x=>{const A=io[x.pillar]||io.Financial,_=!!x.gcal_event_id;return s.jsxs("div",{style:{...Y.card,background:A.soft},children:[s.jsx("span",{style:{...Y.cardBar,background:A.dot}}),s.jsxs("div",{style:Y.cardBody,children:[s.jsx("div",{style:Y.cardTitle,children:x.title}),x.start_datetime&&s.jsxs("div",{style:Y.eventTime,children:[s.jsx(so,{size:10}),Lp(x.start_datetime),_&&s.jsx("span",{style:Y.syncedDot,title:"Synced to Google Calendar"})]}),s.jsxs("div",{style:Y.cardMeta,children:[s.jsxs("span",{style:Y.metaPill,children:[s.jsx("span",{style:{...Y.dot,background:A.dot,width:7,height:7}}),x.pillar]}),s.jsxs("span",{style:Y.metaPill,children:[s.jsx(vp,{size:11})," ",k(x.time_estimate_min)]})]})]}),s.jsxs("div",{style:Y.cardActions,children:[_&&s.jsx("span",{title:`On calendar as "${C(x)}"`,style:Y.calDoneIcon,children:s.jsx(_t,{size:14})}),s.jsx("button",{onClick:()=>u(x.id,x.title),style:Y.delBtn,children:s.jsx(mt,{size:13})})]})]},x.id)}),e===b.id?s.jsxs("div",{style:Y.addBox,children:[s.jsx("input",{autoFocus:!0,placeholder:"Task title",value:o.title,onChange:x=>i({...o,title:x.target.value}),onKeyDown:x=>x.key==="Enter"&&c(b.id),style:Y.input}),s.jsxs("div",{style:Y.dateTimeRow,children:[s.jsxs("div",{style:Y.dateTimeGroup,children:[s.jsx("label",{style:Y.dtLabel,children:"Date"}),s.jsx("input",{type:"date",value:o.date,onChange:x=>i({...o,date:x.target.value}),style:Y.dtInput})]}),s.jsxs("div",{style:Y.dateTimeGroup,children:[s.jsx("label",{style:Y.dtLabel,children:"Start"}),s.jsx("input",{type:"time",value:o.startTime,onChange:x=>i({...o,startTime:x.target.value}),style:Y.dtInput})]}),s.jsxs("div",{style:Y.dateTimeGroup,children:[s.jsx("label",{style:Y.dtLabel,children:"End"}),s.jsx("div",{style:Y.dtEndValue,children:_p(o.startTime,Number(o.est)||30)})]})]}),s.jsxs("div",{style:Y.addRow,children:[s.jsx("select",{value:o.pillar,onChange:x=>i({...o,pillar:x.target.value}),style:Y.select,children:Object.keys(io).map(x=>s.jsx("option",{children:x},x))}),s.jsx("input",{type:"number",value:o.est,onChange:x=>i({...o,est:x.target.value}),style:{...Y.input,width:60}}),s.jsx("span",{style:Y.minLabel,children:"min"}),l.connected&&s.jsx("span",{style:Y.gcalHint,title:"Will sync to Google Calendar",children:s.jsx(so,{size:12})}),s.jsx("button",{onClick:()=>c(b.id),style:Y.saveBtn,children:s.jsx(_t,{size:14})}),s.jsx("button",{onClick:()=>{n(null),i(Hs())},style:Y.cancelBtn,children:s.jsx(mt,{size:14})})]})]}):s.jsxs("button",{onClick:()=>n(b.id),style:Y.addTrigger,children:[s.jsx(Yr,{size:13})," Add task"]})]})]},b.id))}),s.jsx(fs,{toasts:m,onUndo:v,onDismiss:f})]})}const Y={page:{fontFamily:"'Inter', system-ui, sans-serif",background:"#F7F6F3",minHeight:"100%",padding:"28px 26px",color:"#26241F",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:16,marginBottom:22},headRight:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:10},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"#9A968C",fontWeight:600,marginBottom:4},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces', Georgia, serif"},legend:{display:"flex",gap:14,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"#6B675E",fontWeight:500},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},gcalBadgeOn:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"#4C9A6B",background:"rgba(76,154,107,0.10)",border:"1px solid rgba(76,154,107,0.3)",borderRadius:20,padding:"5px 12px",cursor:"pointer"},gcalBadgeOff:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"#6B675E",background:"#fff",border:"1px solid #DCDAD3",borderRadius:20,padding:"5px 12px",cursor:"pointer"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16},quad:{background:"#fff",borderRadius:12,padding:"16px 16px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.06)"},quadHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14},quadTitleRow:{display:"flex",gap:10,alignItems:"center"},symbol:{fontSize:20,lineHeight:1},quadTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em"},quadSub:{fontSize:11,color:"#9A968C",marginTop:1,letterSpacing:"0.02em"},quadTotal:{fontSize:12,fontWeight:600,color:"#6B675E",background:"#F2F1EC",padding:"3px 9px",borderRadius:20},list:{display:"flex",flexDirection:"column",gap:8},card:{display:"flex",alignItems:"stretch",gap:10,borderRadius:9,padding:"10px 10px 10px 0",overflow:"hidden"},cardBar:{width:3,borderRadius:3,flexShrink:0},cardBody:{flex:1,minWidth:0},cardTitle:{fontSize:13.5,fontWeight:500,lineHeight:1.35,marginBottom:4},eventTime:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#3A7CA5",fontWeight:500,marginBottom:5},syncedDot:{width:6,height:6,borderRadius:"50%",background:"#4C9A6B",display:"inline-block",marginLeft:2},cardMeta:{display:"flex",gap:8,flexWrap:"wrap"},metaPill:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#6B675E",fontWeight:500},cardActions:{display:"flex",flexDirection:"column",gap:4,alignSelf:"center",flexShrink:0},calDoneIcon:{width:30,height:30,borderRadius:8,background:"#4C9A6B",color:"#fff",display:"grid",placeItems:"center"},delBtn:{width:30,height:30,borderRadius:8,border:"none",background:"none",color:"#C3BFB5",cursor:"pointer",display:"grid",placeItems:"center"},addTrigger:{display:"flex",alignItems:"center",gap:5,fontSize:12.5,color:"#9A968C",background:"none",border:"1px dashed #D9D6CE",borderRadius:8,padding:"8px 10px",cursor:"pointer",fontWeight:500,marginTop:2},addBox:{border:"1px solid #E4E2DA",borderRadius:9,padding:10,display:"flex",flexDirection:"column",gap:8},dateTimeRow:{display:"flex",gap:8,alignItems:"flex-end"},dateTimeGroup:{display:"flex",flexDirection:"column",gap:3,flex:1},dtLabel:{fontSize:10,fontWeight:600,color:"#9A968C",letterSpacing:"0.08em",textTransform:"uppercase"},dtInput:{border:"1px solid #E4E2DA",borderRadius:6,padding:"6px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},dtEndValue:{border:"1px solid #E4E2DA",borderRadius:6,padding:"6px 8px",fontSize:12.5,color:"#6B675E",background:"#F7F6F3"},addRow:{display:"flex",alignItems:"center",gap:6},input:{border:"1px solid #E4E2DA",borderRadius:6,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",flex:1,minWidth:0},select:{border:"1px solid #E4E2DA",borderRadius:6,padding:"7px 8px",fontSize:12.5,fontFamily:"inherit",flex:1},minLabel:{fontSize:11,color:"#9A968C"},gcalHint:{color:"#3A7CA5",display:"grid",placeItems:"center"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},cancelBtn:{border:"none",background:"#F2F1EC",color:"#6B675E",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"}},sr={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},rn=Object.keys(sr),Us=["Yearly","Quarterly","Monthly","Weekly"],Br=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],sd=[{label:"Q1 · Jan–Mar",startMonth:0},{label:"Q2 · Apr–Jun",startMonth:3},{label:"Q3 · Jul–Sep",startMonth:6},{label:"Q4 · Oct–Dec",startMonth:9}],se=new Date().getFullYear(),Gs=t=>Us[Math.min(Us.indexOf(t)+1,Us.length-1)],lo=t=>{if(!t||!t.start_date)return Array.from({length:12},(i,l)=>l);const r=new Date(t.start_date+"T00:00:00"),e=new Date(t.end_date+"T00:00:00"),n=r.getFullYear()<se?0:r.getMonth(),o=e.getFullYear()>se?11:e.getMonth();return Array.from({length:o-n+1},(i,l)=>n+l)},Wp=(t,r,e)=>{const n=(e-1)*7+1,o=Math.min(n+6,new Date(t,r+1,0).getDate()),i=String(r+1).padStart(2,"0");return{start_date:`${t}-${i}-${String(n).padStart(2,"0")}`,end_date:`${t}-${i}-${String(o).padStart(2,"0")}`}},id=(t,r,e=1)=>{const n=se;switch(t){case"Yearly":return{start_date:`${n}-01-01`,end_date:`${n}-12-31`};case"Quarterly":{const o=Math.floor(r/3)*3,i=o+1,l=o+3,a=new Date(n,l,0).getDate();return{start_date:`${n}-${String(i).padStart(2,"0")}-01`,end_date:`${n}-${String(l).padStart(2,"0")}-${a}`}}case"Monthly":{const o=new Date(n,r+1,0).getDate();return{start_date:`${n}-${String(r+1).padStart(2,"0")}-01`,end_date:`${n}-${String(r+1).padStart(2,"0")}-${o}`}}case"Weekly":return Wp(n,r,e);default:return{start_date:`${n}-01-01`,end_date:`${n}-12-31`}}},ld=(t,r=!1)=>{if(!t)return 0;const e=new Date(t+"T00:00:00");if(e.getFullYear()>se)return 12;if(e.getFullYear()<se)return 0;const n=new Date(se,e.getMonth()+1,0).getDate(),o=e.getDate()-(r?0:1);return e.getMonth()+o/n},ad=t=>{if(!t.start_date)return"";const r=new Date(t.start_date+"T00:00:00"),e=r.getMonth();switch(t.horizon){case"Yearly":return`${r.getFullYear()}`;case"Quarterly":return`Q${Math.floor(e/3)+1} ${r.getFullYear()}`;case"Monthly":return`${Br[e]} ${r.getFullYear()}`;case"Weekly":return`${Br[e]} W${Math.ceil(r.getDate()/7)}`;default:return""}};function Np(){const[t,r]=I.useState([]),[e,n]=I.useState("Financial"),[o,i]=I.useState(["Academic"]),[l,a]=I.useState({}),[d,g]=I.useState(null),[m,v]=I.useState(""),[f,S]=I.useState(0),[w,k]=I.useState(1),[C,c]=I.useState(null),u=I.useCallback(()=>{K.getGoals().then(r).catch(console.error)},[]);I.useEffect(()=>{u()},[u]);const{deleteItem:b,toasts:x,handleUndo:A,handleDismiss:_}=ms(K.deleteGoal,K.restoreGoal,u),L=sr[e],R=t.filter(y=>y.pillar===e),z=R.filter(y=>!y.parent_goal_id),D=y=>R.filter(F=>F.parent_goal_id===y),j=y=>a(F=>({...F,[y]:!F[y]})),M=y=>i(F=>F.includes(y)?F.filter(U=>U!==y):[...F,y]),O=(y,F=null)=>{g(y),v(""),k(1);const U=y==="ROOT"?"Yearly":Gs(F==null?void 0:F.horizon),st=y==="ROOT"?[0]:lo(F);S(U==="Quarterly"?Math.floor(st[0]/3)*3:st[0]??0)},J=async(y,F)=>{if(!m.trim())return;const U=y==="ROOT"?"Yearly":Gs(F),{start_date:st,end_date:Z}=id(U,f,w);await K.createGoal({pillar:e,title:m.trim(),horizon:U,parent_goal_id:y==="ROOT"?null:y,start_date:st,end_date:Z}),y!=="ROOT"&&a(yt=>({...yt,[y]:!0})),g(null),v(""),u()},ot=y=>{const F=y.start_date?new Date(y.start_date+"T00:00:00"):new Date,U=F.getMonth(),st=Math.min(Math.max(Math.ceil(F.getDate()/7),1),4);c({id:y.id,title:y.title,pillar:y.pillar,horizon:y.horizon,parentGoal:t.find(Z=>Z.id===y.parent_goal_id)||null,month:y.horizon==="Quarterly"?Math.floor(U/3)*3:U,week:st})},W=async()=>{if(!C||!C.title.trim())return;let y=C.month;C.horizon==="Weekly"&&(y=lo(C.parentGoal)[0]);const{start_date:F,end_date:U}=id(C.horizon,y,C.week);await K.updateGoal(C.id,{title:C.title.trim(),pillar:C.pillar,start_date:F,end_date:U}),c(null),u()},h=({parentId:y,parentGoal:F,depth:U})=>{const st=(F==null?void 0:F.horizon)??null,Z=y==="ROOT"?"Yearly":Gs(st),yt=y==="ROOT"?Array.from({length:12},(Q,Dt)=>Dt):lo(F),St=sd.filter(Q=>yt.includes(Q.startMonth));return s.jsxs("div",{style:{...V.addBox,marginLeft:U*24},children:[s.jsx("input",{autoFocus:!0,placeholder:`New ${Z.toLowerCase()} goal…`,value:m,onChange:Q=>v(Q.target.value),onKeyDown:Q=>{Q.key==="Enter"&&J(y,st),Q.key==="Escape"&&g(null)},style:V.input}),Z==="Quarterly"&&s.jsx("select",{value:f,onChange:Q=>S(Number(Q.target.value)),style:V.monthSelect,children:St.map(Q=>s.jsx("option",{value:Q.startMonth,children:Q.label},Q.startMonth))}),Z==="Monthly"&&s.jsx("select",{value:f,onChange:Q=>S(Number(Q.target.value)),style:V.monthSelect,children:yt.map(Q=>s.jsx("option",{value:Q,children:Br[Q]},Q))}),Z==="Weekly"&&s.jsxs(s.Fragment,{children:[s.jsx("span",{style:V.inheritTag,children:Br[yt[0]]}),s.jsx("select",{value:w,onChange:Q=>k(Number(Q.target.value)),style:V.monthSelect,children:[1,2,3,4].map(Q=>s.jsxs("option",{value:Q,children:["Week ",Q]},Q))})]}),s.jsx("button",{onClick:()=>J(y,st),style:V.saveBtn,children:s.jsx(_t,{size:14})}),s.jsx("button",{onClick:()=>g(null),style:V.cancelBtn,children:s.jsx(mt,{size:14})})]})},p=({goal:y,depth:F})=>{var St,Q;const U=D(y.id),st=l[y.id],Z=y.horizon!=="Weekly";if((C==null?void 0:C.id)===y.id){const Dt=lo(C.parentGoal),On=sd.filter(it=>Dt.includes(it.startMonth));return s.jsxs("div",{style:{...V.editBox,marginLeft:F*24},children:[s.jsx("input",{autoFocus:!0,value:C.title,onChange:it=>c({...C,title:it.target.value}),onKeyDown:it=>it.key==="Enter"&&W(),style:{...V.input,flex:1}}),s.jsx("select",{value:C.pillar,onChange:it=>c({...C,pillar:it.target.value}),style:V.monthSelect,children:rn.map(it=>s.jsx("option",{children:it},it))}),C.horizon==="Quarterly"&&s.jsx("select",{value:C.month,onChange:it=>c({...C,month:Number(it.target.value)}),style:V.monthSelect,children:On.map(it=>s.jsx("option",{value:it.startMonth,children:it.label},it.startMonth))}),C.horizon==="Monthly"&&s.jsx("select",{value:C.month,onChange:it=>c({...C,month:Number(it.target.value)}),style:V.monthSelect,children:Dt.map(it=>s.jsx("option",{value:it,children:Br[it]},it))}),C.horizon==="Weekly"&&s.jsxs(s.Fragment,{children:[s.jsx("span",{style:V.inheritTag,children:Br[Dt[0]]}),s.jsx("select",{value:C.week,onChange:it=>c({...C,week:Number(it.target.value)}),style:V.monthSelect,children:[1,2,3,4].map(it=>s.jsxs("option",{value:it,children:["Week ",it]},it))})]}),s.jsx("button",{onClick:W,style:V.saveBtn,children:s.jsx(_t,{size:14})}),s.jsx("button",{onClick:()=>c(null),style:V.cancelBtn,children:s.jsx(mt,{size:14})})]})}return s.jsxs("div",{children:[s.jsxs("div",{style:{...V.row,marginLeft:F*24,background:F===0?L.soft:"transparent"},children:[U.length>0?s.jsx("button",{onClick:()=>j(y.id),style:V.caret,children:st?s.jsx($l,{size:15}):s.jsx(pe,{size:15})}):s.jsx("span",{style:{...V.caret,opacity:.25},children:s.jsx(Ul,{size:12})}),s.jsx("span",{style:{...V.horizonTag,color:((St=sr[y.pillar])==null?void 0:St.dot)||L.dot,borderColor:((Q=sr[y.pillar])==null?void 0:Q.dot)||L.dot},children:y.horizon}),s.jsx("span",{style:V.title,children:y.title}),s.jsx("span",{style:V.periodTag,children:ad(y)}),s.jsx("button",{onClick:()=>ot(y),style:V.rowAdd,title:"Edit",children:s.jsx(ps,{size:12})}),Z&&s.jsx("button",{onClick:()=>{a(Dt=>({...Dt,[y.id]:!0})),O(y.id,y)},style:V.rowAdd,title:"Add sub-goal",children:s.jsx(Yr,{size:13})}),s.jsx("button",{onClick:()=>b(y.id,y.title),style:{...V.rowAdd,color:"#C3BFB5"},title:"Delete",children:s.jsx(mt,{size:13})})]}),st&&U.map(Dt=>s.jsx(p,{goal:Dt,depth:F+1},Dt.id)),st&&d===y.id&&s.jsx(h,{parentId:y.id,parentGoal:y,depth:F+1})]})},T=t.filter(y=>y.horizon==="Weekly"&&o.includes(y.pillar)).sort((y,F)=>y.pillar.localeCompare(F.pillar)||y.start_date.localeCompare(F.start_date));return s.jsxs("div",{style:V.page,children:[s.jsxs("div",{style:V.head,children:[s.jsx("div",{style:V.eyebrow,children:"Anvil · Goals"}),s.jsxs("h1",{style:V.h1,children:[e," Goals"]})]}),s.jsx("div",{style:V.pillarPicker,children:rn.map(y=>{const F=y===e;return s.jsxs("button",{onClick:()=>{n(y),g(null),c(null)},style:{...V.pillarChip,...F?{background:sr[y].dot,color:"#fff",borderColor:sr[y].dot}:{}},children:[s.jsx("span",{style:{...V.dot,background:F?"#fff":sr[y].dot}}),y]},y)})}),s.jsxs("div",{style:V.list,children:[z.map(y=>s.jsx(p,{goal:y,depth:0},y.id)),d==="ROOT"&&s.jsx(h,{parentId:"ROOT",parentGoal:null,depth:0}),d!=="ROOT"&&s.jsxs("button",{onClick:()=>O("ROOT",null),style:V.rootAdd,children:[s.jsx(Yr,{size:14})," Add top-level goal"]})]}),s.jsxs("div",{style:V.ganttWrap,children:[s.jsxs("div",{style:V.ganttTop,children:[s.jsxs("div",{style:V.ganttTitle,children:[se," · Weekly Timeline"]}),s.jsxs("div",{style:V.ganttMultiSelect,children:[(()=>{const y=rn.every(F=>o.includes(F));return s.jsx("button",{onClick:()=>i(y?[]:[...rn]),style:{...V.msChip,...y?{background:"#26241F",color:"#fff",borderColor:"#26241F"}:{}},children:"All"})})(),rn.map(y=>{const F=o.includes(y);return s.jsxs("button",{onClick:()=>M(y),style:{...V.msChip,...F?{background:sr[y].dot,color:"#fff",borderColor:sr[y].dot}:{}},children:[s.jsx("span",{style:{...V.dot,width:7,height:7,background:F?"#fff":sr[y].dot}}),y]},y)})]})]}),T.length===0?s.jsx("div",{style:V.ganttEmpty,children:"Select pillars above to see their weekly goals on the timeline."}):s.jsx("div",{style:V.ganttScroll,children:s.jsxs("div",{style:V.ganttInner,children:[s.jsxs("div",{style:V.ganttHeader,children:[s.jsx("div",{style:V.ganttLabelCol}),s.jsx("div",{style:V.ganttGrid,children:Br.map(y=>s.jsx("div",{style:V.ganttMonth,children:y},y))})]}),T.map(y=>{const F=sr[y.pillar].dot,U=ld(y.start_date,!1),st=ld(y.end_date,!0),Z=U/12*100,yt=Math.max((st-U)/12*100,1.5);return s.jsxs("div",{style:V.ganttRow,children:[s.jsxs("div",{style:{...V.ganttLabelCol,paddingLeft:8},children:[s.jsx("span",{style:{...V.ganttRowDot,background:F}}),s.jsx("span",{style:V.ganttRowLabel,children:y.title})]}),s.jsxs("div",{style:V.ganttGrid,children:[Br.map((St,Q)=>s.jsx("div",{style:V.ganttCell},Q)),s.jsx("div",{style:{...V.ganttBar,left:`${Z}%`,width:`${yt}%`,background:F},title:`${y.pillar} · ${ad(y)}`})]})]},y.id)})]})})]}),s.jsx(fs,{toasts:x,onUndo:A,onDismiss:_})]})}const V={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"#F7F6F3",minHeight:"100%",padding:"28px 26px",color:"#26241F",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"#9A968C",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},pillarPicker:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},pillarChip:{display:"flex",alignItems:"center",gap:7,border:"1px solid #E0DDD5",background:"#fff",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"#4A463E",cursor:"pointer",fontFamily:"inherit"},list:{background:"#fff",borderRadius:12,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"hidden"},row:{display:"flex",alignItems:"center",gap:9,padding:"9px 10px",borderRadius:8,flexWrap:"nowrap"},caret:{border:"none",background:"none",cursor:"pointer",color:"#6B675E",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},horizonTag:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",border:"1px solid",borderRadius:5,padding:"2px 6px",flexShrink:0},title:{fontSize:14,fontWeight:500,lineHeight:1.3,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},periodTag:{fontSize:11,fontWeight:600,color:"#6B675E",background:"#F2F1EC",padding:"3px 8px",borderRadius:12,flexShrink:0},rowAdd:{border:"none",background:"none",color:"#C3BFB5",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,flexShrink:0},rootAdd:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"#6B675E",background:"none",border:"1px dashed #D9D6CE",borderRadius:8,padding:"9px 12px",cursor:"pointer",fontWeight:600,fontFamily:"inherit",marginTop:6,width:"100%",justifyContent:"center"},addBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 0 6px 28px",flexWrap:"wrap"},editBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 10px",flexWrap:"wrap",background:"#F7F6F3",borderRadius:8,margin:"4px 0"},input:{border:"1px solid #D9D6CE",borderRadius:7,padding:"8px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",flex:1,minWidth:120},monthSelect:{border:"1px solid #D9D6CE",borderRadius:7,padding:"8px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},inheritTag:{fontSize:11.5,fontWeight:600,color:"#6B675E",background:"#F2F1EC",padding:"6px 9px",borderRadius:7,flexShrink:0},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},cancelBtn:{border:"none",background:"#F2F1EC",color:"#6B675E",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},ganttWrap:{background:"#fff",borderRadius:12,padding:"16px 14px",marginTop:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},ganttTop:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10,marginBottom:14},ganttTitle:{fontSize:13,fontWeight:700,color:"#4A463E",fontFamily:"'Fraunces',Georgia,serif"},ganttMultiSelect:{display:"flex",gap:6,flexWrap:"wrap"},msChip:{display:"flex",alignItems:"center",gap:5,border:"1px solid #E0DDD5",background:"#fff",padding:"5px 10px",borderRadius:16,fontSize:11.5,fontWeight:600,color:"#4A463E",cursor:"pointer",fontFamily:"inherit"},ganttEmpty:{fontSize:13,color:"#9A968C",padding:"24px 12px",textAlign:"center"},ganttScroll:{overflowX:"auto"},ganttInner:{minWidth:500},ganttHeader:{display:"flex",marginBottom:6},ganttLabelCol:{width:160,flexShrink:0,display:"flex",alignItems:"center",gap:7,minWidth:0},ganttGrid:{position:"relative",flex:1,display:"grid",gridTemplateColumns:"repeat(12,1fr)"},ganttMonth:{fontSize:10,fontWeight:600,color:"#9A968C",textAlign:"center",textTransform:"uppercase",letterSpacing:"0.04em"},ganttRow:{display:"flex",alignItems:"center",height:30},ganttRowDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},ganttRowLabel:{fontSize:12,fontWeight:500,color:"#3A372F",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},ganttCell:{borderLeft:"1px solid #F0EEE8",height:30},ganttBar:{position:"absolute",top:7,height:16,borderRadius:5,boxShadow:"0 1px 2px rgba(0,0,0,0.12)"}},He={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.12)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.12)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.12)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.12)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.12)"}},Lu=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Pp=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Mu=t=>t.toISOString().slice(0,10),Op=()=>Mu(new Date),$p=(t=0)=>{const r=new Date,e=r.getDay(),n=e===0?-6:1-e,o=new Date(r);return o.setDate(r.getDate()+n+t*7),Array.from({length:7},(i,l)=>{const a=new Date(o);return a.setDate(o.getDate()+l),Mu(a)})},Hp=(t=0)=>{const r=new Date,e=new Date(r.getFullYear(),r.getMonth()+t,1),n=e.getFullYear(),o=e.getMonth(),i=new Date(n,o+1,0).getDate(),l=e.getDay(),a=l===0?6:l-1,d=Array.from({length:i},(m,v)=>`${n}-${String(o+1).padStart(2,"0")}-${String(v+1).padStart(2,"0")}`),g=e.toLocaleDateString("en-US",{month:"long",year:"numeric"});return{dates:d,startOffset:a,label:g,year:n,month:o}},dd=t=>new Date(t+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"}),Te=Op(),Up=new Date().getFullYear();function Gp(){var ot,W;const[t,r]=I.useState([]),[e,n]=I.useState("ALL"),[o,i]=I.useState(!1),[l,a]=I.useState(!1),[d,g]=I.useState(!1),[m,v]=I.useState(null),[f,S]=I.useState(null),[w,k]=I.useState({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week"}),C=I.useCallback(()=>K.getHabits().then(r).catch(console.error),[]);I.useEffect(()=>{C()},[C]),I.useEffect(()=>{const h=()=>{const p=window.innerWidth<720;i(p),p||a(!1)};return h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]);const{deleteItem:c,toasts:u,handleUndo:b,handleDismiss:x}=ms(K.deleteHabit,K.restoreHabit,C),A=h=>{n(h),o&&a(!1)},_=(h,p)=>{(h.type==="minimum"||h.type==="maximum")&&h.period==="day"?S({habit:h,date:p}):L(h.id,p)},L=async(h,p)=>{await K.toggleHabitLog(h,p),C()},R=async(h,p,T,y)=>{await K.setHabitLogCount(h,p,T,y),S(null),C()},z=async(h,p)=>{await K.clearHabitLog(h,p),S(null),C()},D=async()=>{if(!w.name.trim())return;const h={name:w.name.trim(),pillar:w.pillar,target_per_week:Number(w.target_per_week)||7,type:w.type,target_count:w.type!=="regular"?Number(w.target_count)||1:null,period:w.type!=="regular"?w.period:null};await K.createHabit(h),k({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week"}),g(!1),C()},j=async(h,p)=>{e===h&&n("ALL"),c(h,p)},M=t.find(h=>h.id===e),O=h=>new Set(h.logs||[]),J={...E.sidebar,...o?E.sidebarOverlay:{},...o&&!l?E.sidebarHidden:{}};return s.jsxs("div",{style:E.shell,children:[o&&l&&s.jsx("div",{style:E.backdrop,onClick:()=>a(!1)}),s.jsxs("aside",{style:J,children:[s.jsxs("div",{style:E.sideTop,children:[s.jsx("div",{style:E.brand,children:"Anvil · Habits"}),o&&s.jsx("button",{onClick:()=>a(!1),style:E.closeBtn,children:s.jsx(mt,{size:18})})]}),s.jsxs("button",{onClick:()=>A("ALL"),style:{...E.sideItem,...e==="ALL"?E.sideItemOn:{}},children:[s.jsx(Fu,{size:15}),s.jsx("span",{style:E.sideLabel,children:"All Habits"}),s.jsx("span",{style:E.sideCount,children:t.length})]}),s.jsx("div",{style:E.sideDivider}),t.map(h=>{var y;const p=e===h.id,T=((y=He[h.pillar])==null?void 0:y.dot)||"#9A968C";return s.jsxs("button",{onClick:()=>A(h.id),style:{...E.sideItem,...p?E.sideItemOn:{}},children:[s.jsx("span",{style:{...E.sideDot,background:T}}),s.jsx("span",{style:E.sideLabel,children:h.name}),s.jsxs("span",{style:E.sideStreak,children:[s.jsx(cs,{size:11})," ",h.streak]})]},h.id)}),d?s.jsx(Vp,{habit:w,onChange:k,onSave:D,onCancel:()=>g(!1)}):s.jsxs("button",{onClick:()=>g(!0),style:E.sideNewBtn,children:[s.jsx(Yr,{size:13})," New habit"]})]}),s.jsxs("main",{style:E.main,children:[o&&s.jsxs("button",{onClick:()=>a(!0),style:E.hamburger,children:[s.jsx(Hl,{size:18}),s.jsx("span",{style:E.hamburgerLabel,children:e==="ALL"?"All Habits":M==null?void 0:M.name})]}),e==="ALL"?s.jsx(Kp,{habits:t,dayAction:_,logSet:O,onDelete:j,onEdit:h=>v(h)}):s.jsx(Xp,{habit:M,dayAction:_,logSet:O,onDelete:()=>j(M.id,M.name),onEdit:()=>v(M),setNote:(h,p)=>K.setHabitLogNote(M.id,h,p).then(C)}),e==="ALL"&&s.jsx(Zp,{year:Up})]}),m&&s.jsx(Qp,{habit:m,onSave:async h=>{await K.updateHabit(m.id,h),v(null),C()},onClose:()=>v(null)}),f&&s.jsx(Yp,{habit:f.habit,date:f.date,initialCount:((ot=f.habit.log_counts)==null?void 0:ot[f.date])??0,initialNote:((W=f.habit.log_notes)==null?void 0:W[f.date])??"",onSave:(h,p)=>R(f.habit.id,f.date,h,p),onClear:()=>z(f.habit.id,f.date),onClose:()=>S(null)}),s.jsx(fs,{toasts:u,onUndo:b,onDismiss:x})]})}function Vp({habit:t,onChange:r,onSave:e,onCancel:n}){const o=t.type!=="regular";return s.jsxs("div",{style:E.addBox,children:[s.jsx("input",{autoFocus:!0,placeholder:"Habit name",value:t.name,onChange:i=>r(l=>({...l,name:i.target.value})),onKeyDown:i=>i.key==="Enter"&&e(),style:E.sideInput}),s.jsx("select",{value:t.pillar,onChange:i=>r(l=>({...l,pillar:i.target.value})),style:E.sideInput,children:Object.keys(He).map(i=>s.jsx("option",{children:i},i))}),s.jsxs("select",{value:t.type,onChange:i=>r(l=>({...l,type:i.target.value})),style:E.sideInput,children:[s.jsx("option",{value:"regular",children:"Regular (yes/no)"}),s.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),s.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),o&&s.jsxs("div",{style:{display:"flex",gap:6},children:[s.jsx("input",{type:"number",min:1,placeholder:"N",value:t.target_count||"",onChange:i=>r(l=>({...l,target_count:i.target.value})),style:{...E.sideInput,width:60}}),s.jsx("select",{value:t.period,onChange:i=>r(l=>({...l,period:i.target.value})),style:E.sideInput,children:["day","week","month","year"].map(i=>s.jsx("option",{children:i},i))})]}),s.jsxs("div",{style:{display:"flex",gap:6},children:[s.jsx("button",{onClick:e,style:E.sideAddBtn,children:s.jsx(_t,{size:13})}),s.jsx("button",{onClick:n,style:E.sideCancelBtn,children:s.jsx(mt,{size:13})})]})]})}function Qp({habit:t,onSave:r,onClose:e}){const[n,o]=I.useState(t.name),[i,l]=I.useState(t.type||"regular"),[a,d]=I.useState(t.target_count||""),[g,m]=I.useState(t.period||"week"),[v,f]=I.useState(t.reminder_time||""),S=()=>r({name:n.trim(),type:i,target_count:i!=="regular"?Number(a):null,period:i!=="regular"?g:null,reminder_time:v||null});return s.jsx("div",{style:E.modalOverlay,onClick:e,children:s.jsxs("div",{style:E.modal,onClick:w=>w.stopPropagation(),children:[s.jsxs("div",{style:E.modalHead,children:["Edit Habit",s.jsx("button",{onClick:e,style:E.closeBtn,children:s.jsx(mt,{size:16})})]}),s.jsx("label",{style:E.modalLabel,children:"Name"}),s.jsx("input",{value:n,onChange:w=>o(w.target.value),style:E.sideInput}),s.jsx("label",{style:E.modalLabel,children:"Type"}),s.jsxs("select",{value:i,onChange:w=>l(w.target.value),style:E.sideInput,children:[s.jsx("option",{value:"regular",children:"Regular (yes/no)"}),s.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),s.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),i!=="regular"&&s.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[s.jsx("input",{type:"number",min:1,value:a,onChange:w=>d(w.target.value),style:{...E.sideInput,width:70}}),s.jsx("select",{value:g,onChange:w=>m(w.target.value),style:E.sideInput,children:["day","week","month","year"].map(w=>s.jsx("option",{children:w},w))})]}),s.jsx("label",{style:E.modalLabel,children:"Reminder time"}),s.jsx("input",{type:"time",value:v,onChange:w=>f(w.target.value),style:E.sideInput}),s.jsx("button",{onClick:S,style:{...E.sideAddBtn,width:"100%",marginTop:10,height:36},children:"Save"})]})})}function Yp({habit:t,date:r,initialCount:e,initialNote:n,onSave:o,onClear:i,onClose:l}){const[a,d]=I.useState(e??0),[g,m]=I.useState(n??""),v=t.target_count,f=t.type==="minimum"?a>=v:a>0&&a<=v,S=t.type==="maximum"&&a>v,w=f?"#4C9A6B":S?"#C2536B":"#C2773B",k=f?"✓ Goal met":S?"Over the limit":"Not met yet";return s.jsx("div",{style:E.modalOverlay,onClick:l,children:s.jsxs("div",{style:E.modal,onClick:C=>C.stopPropagation(),children:[s.jsxs("div",{style:E.modalHead,children:[t.name,s.jsx("button",{onClick:l,style:E.closeBtn,children:s.jsx(mt,{size:16})})]}),s.jsxs("div",{style:{fontSize:12,color:"#9A968C",marginBottom:2},children:[r," · ",t.type==="minimum"?`at least ${v}`:`no more than ${v}`," / ",t.period]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:20,margin:"14px 0 6px"},children:[s.jsx("button",{onClick:()=>d(C=>Math.max(0,C-1)),style:E.counterBtn,children:"−"}),s.jsx("span",{style:{fontSize:38,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:52,textAlign:"center",color:w},children:a}),s.jsx("button",{onClick:()=>d(C=>C+1),style:E.counterBtn,children:"+"})]}),s.jsx("div",{style:{textAlign:"center",fontSize:12.5,fontWeight:700,color:w,marginBottom:12},children:k}),s.jsx("textarea",{value:g,onChange:C=>m(C.target.value),placeholder:"Add a comment (optional)…",style:{...E.sideInput,minHeight:56,resize:"vertical"}}),s.jsxs("div",{style:{display:"flex",gap:8,marginTop:10},children:[s.jsxs("button",{onClick:()=>o(a,g),style:{...E.sideAddBtn,flex:1,justifyContent:"center",height:38},children:[s.jsx(_t,{size:14})," Set"]}),s.jsxs("button",{onClick:i,style:{...E.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[s.jsx(mt,{size:14})," Delete"]})]})]})})}function Kp({habits:t,dayAction:r,logSet:e,onDelete:n,onEdit:o}){const[i,l]=I.useState(0),a=$p(i),d=`${dd(a[0])} – ${dd(a[6])}${i===0?" · This week":""}`;return s.jsxs("div",{children:[s.jsxs("div",{style:E.mainHead,children:[s.jsx("div",{style:E.eyebrow,children:"Weekly view"}),s.jsx("h1",{style:E.h1,children:"All Habits"})]}),s.jsxs("div",{style:E.navBar,children:[s.jsx("button",{onClick:()=>l(g=>g-1),style:E.navBtn,children:s.jsx(Pn,{size:16})}),s.jsx("span",{style:E.navLabel,children:d}),s.jsx("button",{onClick:()=>l(g=>Math.min(0,g+1)),disabled:i>=0,style:{...E.navBtn,...i>=0?E.navBtnDisabled:{}},children:s.jsx(pe,{size:16})})]}),s.jsxs("div",{style:E.weekCard,children:[s.jsxs("div",{style:E.weekHeadRow,children:[s.jsx("div",{style:E.weekNameCol}),Lu.map((g,m)=>s.jsxs("div",{style:E.weekDayHead,children:[s.jsx("span",{style:E.weekDayName,children:g}),s.jsx("span",{style:{...E.weekDayNum,...a[m]===Te?E.weekDayToday:{}},children:new Date(a[m]+"T00:00").getDate()})]},g)),s.jsx("div",{style:E.weekStreakCol,children:"Streak"})]}),t.map(g=>{var _,L;const m=((_=He[g.pillar])==null?void 0:_.dot)||"#9A968C",v=((L=He[g.pillar])==null?void 0:L.soft)||"rgba(0,0,0,0.05)",f=e(g),S=g.type==="minimum"&&["week","month","year"].includes(g.period),w=g.target_count||0,k=g.logs||[],C=R=>k.filter(z=>z.slice(0,7)===R).length,c=R=>k.filter(z=>z.slice(0,4)===R).length,u=a.filter(R=>f.has(R)).length,b=R=>S?g.period==="week"?u>=w:g.period==="month"?C(R.slice(0,7))>=w:g.period==="year"?c(R.slice(0,4))>=w:!1:!1,x=S&&a.some(b),A=g.period==="week"?u:g.period==="month"?C(a[0].slice(0,7)):g.period==="year"?c(a[0].slice(0,4)):0;return s.jsxs("div",{style:E.weekRow,children:[s.jsxs("div",{style:{...E.weekNameCol,flexDirection:"column",alignItems:"flex-start",gap:2},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[s.jsx("span",{style:{...E.sideDot,background:m}}),s.jsx("span",{style:E.weekHabitName,children:g.name})]}),s.jsxs("div",{style:{display:"flex",gap:4,paddingLeft:15},children:[s.jsx("button",{onClick:()=>o(g),style:E.tinyBtn,title:"Edit",children:s.jsx(ps,{size:10})}),s.jsx("button",{onClick:()=>n(g.id,g.name),style:E.tinyBtn,title:"Delete",children:s.jsx(mt,{size:10})})]}),g.type!=="regular"&&s.jsx("span",{style:E.typeBadge,children:g.type==="minimum"?`≥${g.target_count}/${g.period}`:`≤${g.target_count}/${g.period}`})]}),a.map((R,z)=>{var y,F;const D=f.has(R),j=R>Te,M=(g.type==="minimum"||g.type==="maximum")&&g.period==="day",O=(y=g.log_counts)==null?void 0:y[R],J=O!=null,ot=!!((F=g.log_notes)!=null&&F[R]),W=b(R),h=z>0&&b(a[z-1]),p=z<a.length-1&&b(a[z+1]),T=D||W;return s.jsxs("div",{style:{...E.weekCell,position:"relative"},children:[W&&s.jsx("span",{style:{...E.chainLine,background:m,left:h?0:"50%",right:p?0:"50%"}}),s.jsx("button",{disabled:j,onClick:()=>r(g,R),style:{...E.tick,position:"relative",zIndex:1,...T?{background:m,borderColor:m,color:"#fff"}:{},...M&&J&&!D?{borderColor:m,color:m}:{},...j&&!T?E.tickFuture:{}},children:M?J?s.jsx("span",{style:{fontSize:12,fontWeight:700},children:O}):null:D&&s.jsx(_t,{size:14,color:"#fff",strokeWidth:3})}),ot&&s.jsx("span",{style:E.cellNoteBubble})]},R)}),s.jsx("div",{style:E.weekStreakCol,children:x?s.jsxs("span",{style:{...E.streakPill,background:v,color:m},children:[s.jsx(Bu,{size:12})," ",A,"/",w]}):s.jsxs("span",{style:{...E.streakPill,background:v,color:m},children:[s.jsx(cs,{size:12})," ",g.streak]})})]},g.id)}),t.length===0&&s.jsx("div",{style:{fontSize:13,color:"#9A968C",padding:"24px 12px",textAlign:"center"},children:"No habits yet — add one from the sidebar."})]})]})}function Xp({habit:t,dayAction:r,logSet:e,onDelete:n,onEdit:o,setNote:i}){var ot,W;const[l,a]=I.useState(null),[d,g]=I.useState(""),[m,v]=I.useState(null),[f,S]=I.useState(0),w=I.useRef(null);if(!t)return null;const k=((ot=He[t.pillar])==null?void 0:ot.dot)||"#9A968C",C=((W=He[t.pillar])==null?void 0:W.soft)||"rgba(0,0,0,0.05)",c=e(t),{dates:u,startOffset:b,label:x,year:A}=Hp(f),_=u.filter(h=>h<=Te&&c.has(h)).length,L=u.filter(h=>h<=Te).length,R=L>0?Math.round(_/L*100):0,z=t.type==="minimum"&&(t.period==="month"||t.period==="year"),D=t.period==="year"?(t.logs||[]).filter(h=>h.startsWith(`${A}-`)).length:u.filter(h=>c.has(h)).length,j=z&&D>=(t.target_count||0),M=h=>{w.current=setTimeout(()=>a(h),500)},O=()=>clearTimeout(w.current),J=h=>{var p;v(h),g(((p=t.log_notes)==null?void 0:p[h])||""),a(null)};return s.jsxs("div",{children:[s.jsxs("div",{style:E.mainHead,children:[s.jsxs("div",{children:[s.jsxs("div",{style:E.eyebrow,children:[s.jsx("span",{style:{...E.sideDot,background:k,marginRight:6}}),t.pillar," · Monthly view"]}),s.jsx("h1",{style:E.h1,children:t.name})]}),s.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[s.jsxs("button",{onClick:o,style:E.actionBtn,children:[s.jsx(ps,{size:14})," Edit"]}),s.jsxs("button",{onClick:n,style:{...E.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[s.jsx(mt,{size:14})," Delete"]}),t.reminder_time&&s.jsxs("button",{style:E.actionBtn,children:[s.jsx(Tu,{size:14})," ",t.reminder_time]})]})]}),s.jsxs("div",{style:E.statStrip,children:[s.jsx(en,{label:"Current streak",value:`${t.streak} days`,c:k,soft:C,flame:!0}),s.jsx(en,{label:"Done this month",value:`${_}/${L}`,c:k,soft:C}),s.jsx(en,{label:"Completion",value:`${R}%`,c:k,soft:C}),t.type==="regular"?s.jsx(en,{label:"Weekly target",value:`${t.target_per_week}×`,c:k,soft:C}):s.jsx(en,{label:t.type==="minimum"?"Min target":"Max allowed",value:`${t.target_count}/${t.period}`,c:k,soft:C})]}),s.jsxs("div",{style:E.navBar,children:[s.jsx("button",{onClick:()=>S(h=>h-1),style:E.navBtn,children:s.jsx(Pn,{size:16})}),s.jsxs("span",{style:E.navLabel,children:[x,f===0?" · This month":""]}),s.jsx("button",{onClick:()=>S(h=>Math.min(0,h+1)),disabled:f>=0,style:{...E.navBtn,...f>=0?E.navBtnDisabled:{}},children:s.jsx(pe,{size:16})})]}),z&&s.jsxs("div",{style:{...E.chainBanner,background:j?C:"#F7F6F3",color:j?k:"#9A968C"},children:[s.jsx(Bu,{size:15}),j?`${t.period==="year"?"Yearly":"Monthly"} chain complete — ${D}/${t.target_count} connected`:`${D}/${t.target_count} this ${t.period} · ${(t.target_count||0)-D} more to connect the chain`]}),s.jsxs("div",{style:E.monthCard,children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[s.jsx("div",{style:E.monthTitle,children:x}),s.jsx("span",{style:{fontSize:11,color:"#9A968C"},children:"Long-press a day for options"})]}),s.jsx("div",{style:E.monthDow,children:Lu.map(h=>s.jsx("div",{style:E.monthDowCell,children:h},h))}),s.jsxs("div",{style:E.monthGrid,children:[Array.from({length:b}).map((h,p)=>s.jsx("div",{},`pad${p}`)),u.map((h,p)=>{var On,it;const T=p+1,y=c.has(h),F=h>Te,U=h===Te,st=!!((On=t.log_notes)!=null&&On[h]),Z=(t.type==="minimum"||t.type==="maximum")&&t.period==="day",yt=(it=t.log_counts)==null?void 0:it[h],St=yt!=null,Q=y||j,Dt=(b+p)%7;return s.jsxs("div",{style:{position:"relative"},children:[j&&s.jsx("span",{style:{...E.chainLine,background:k,...Dt===0?{left:"50%"}:{left:-6},...Dt===6?{right:"50%"}:{right:-6}}}),s.jsx("button",{disabled:F,onClick:()=>r(t,h),onMouseDown:()=>!Z&&M(h),onMouseUp:O,onTouchStart:()=>!Z&&M(h),onTouchEnd:O,style:{...E.monthDay,position:"relative",zIndex:1,...Q?{background:k,borderColor:k,color:"#fff"}:{},...Z&&St&&!y?{borderColor:k,color:k}:{},...F&&!Q?E.monthDayFuture:{},...U&&!Q?{borderColor:k,borderWidth:2}:{},width:"100%"},children:T}),Z&&St&&s.jsx("span",{style:{...E.countBadge,background:y?"#4C9A6B":k},children:yt}),st&&s.jsx("span",{style:E.noteIndicator}),l===h&&s.jsx(Jp,{onEdit:o,onDelete:n,onAddNote:()=>J(h),onRemind:o,onClose:()=>a(null)})]},h)})]})]}),m&&s.jsxs("div",{style:E.noteBox,children:[s.jsxs("div",{style:{fontWeight:600,fontSize:13,marginBottom:6},children:["Note for ",m]}),s.jsx("textarea",{value:d,onChange:h=>g(h.target.value),placeholder:"Add a note for this day…",style:{...E.sideInput,minHeight:60,resize:"vertical"}}),s.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[s.jsxs("button",{onClick:()=>{i(m,d),v(null)},style:E.sideAddBtn,children:[s.jsx(_t,{size:13})," Save"]}),s.jsx("button",{onClick:()=>v(null),style:E.sideCancelBtn,children:s.jsx(mt,{size:13})})]})]})]})}function Jp({onEdit:t,onDelete:r,onAddNote:e,onRemind:n,onClose:o}){return s.jsxs("div",{style:E.longPressMenu,children:[s.jsxs("button",{style:E.menuItem,onClick:()=>{t(),o()},children:[s.jsx(ps,{size:13})," Edit"]}),s.jsxs("button",{style:E.menuItem,onClick:()=>{e(),o()},children:[s.jsx(Du,{size:13})," Add note"]}),s.jsxs("button",{style:E.menuItem,onClick:()=>{n(),o()},children:[s.jsx(Tu,{size:13})," Remind"]}),s.jsxs("button",{style:{...E.menuItem,color:"#C2536B"},onClick:()=>{r(),o()},children:[s.jsx(mt,{size:13})," Delete"]})]})}function Zp({year:t}){const[r,e]=I.useState([]);if(I.useEffect(()=>{K.getHabitsYearly(t).then(e).catch(console.error)},[t]),!r.length)return null;const n=Array.from({length:12},(i,l)=>{const a=r.reduce((g,m)=>{var v;return g+(((v=m.monthly[l+1])==null?void 0:v.done)||0)},0),d=r.reduce((g,m)=>{var v;return g+Math.floor((((v=m.monthly[l+1])==null?void 0:v.days)||30)/7*7)},0);return d>0?Math.round(a/d*100):0}),o=Math.max(...n,1);return s.jsxs("div",{style:{...E.monthCard,marginTop:18},children:[s.jsxs("div",{style:E.monthTitle,children:[t," Completion"]}),s.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:6,height:80,marginTop:12},children:n.map((i,l)=>s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[s.jsx("div",{style:{width:"100%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",height:`${i/o*60}px`,minHeight:2,opacity:i>0?1:.15},title:`${i}%`}),s.jsx("span",{style:{fontSize:9,color:"#9A968C",fontWeight:600},children:Pp[l]})]},l))})]})}function en({label:t,value:r,c:e,soft:n,flame:o}){return s.jsxs("div",{style:{...E.stat,background:n},children:[s.jsx("div",{style:E.statLabel,children:t}),s.jsxs("div",{style:{...E.statValue,color:e},children:[o&&s.jsx(cs,{size:15})," ",r]})]})}const E={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"#F7F6F3",minHeight:"100vh",color:"#26241F",position:"relative",overflow:"hidden"},sidebar:{width:230,flexShrink:0,background:"#fff",borderRight:"1px solid #ECEAE3",padding:"20px 12px",display:"flex",flexDirection:"column",gap:3,overflowY:"auto"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.18)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)",boxShadow:"none"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.38)",zIndex:20},sideTop:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 4px"},closeBtn:{border:"none",background:"none",color:"#6B675E",cursor:"pointer",padding:4,display:"grid",placeItems:"center",marginBottom:8},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"#9A968C",fontWeight:700,padding:"0 6px 14px"},sideItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"9px 10px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:500,color:"#4A463E",textAlign:"left"},sideItemOn:{background:"#F2F1EC",fontWeight:600},sideLabel:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},sideCount:{fontSize:11,fontWeight:700,color:"#9A968C",background:"#F2F1EC",borderRadius:10,padding:"1px 7px"},sideStreak:{display:"flex",alignItems:"center",gap:3,fontSize:11,fontWeight:600,color:"#C2773B"},sideDot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},sideDivider:{height:1,background:"#ECEAE3",margin:"8px 6px"},addBox:{padding:"10px 6px",display:"flex",flexDirection:"column",gap:6},sideInput:{border:"1px solid #E4E2DA",borderRadius:7,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},sideAddBtn:{border:"none",background:"#4C9A6B",color:"#fff",height:30,padding:"0 12px",borderRadius:7,cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontSize:13,fontFamily:"inherit"},sideCancelBtn:{border:"1px solid #E4E2DA",background:"#fff",color:"#6B675E",width:30,height:30,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},sideNewBtn:{display:"flex",alignItems:"center",gap:6,width:"100%",border:"1px dashed #D9D6CE",background:"none",borderRadius:8,padding:"8px 10px",fontSize:12.5,color:"#9A968C",fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginTop:6,justifyContent:"center"},main:{flex:1,padding:"26px",overflowX:"hidden",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid #E0DDD5",background:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"#4A463E",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:200},mainHead:{marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"#9A968C",fontWeight:600,marginBottom:5,display:"flex",alignItems:"center"},h1:{fontSize:27,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},actionBtn:{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:500,color:"#6B675E",border:"1px solid #E0DDD5",background:"#fff",padding:"5px 10px",borderRadius:7,cursor:"pointer",fontFamily:"inherit"},weekCard:{background:"#fff",borderRadius:12,padding:"8px 14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"auto"},weekHeadRow:{display:"flex",alignItems:"flex-end",padding:"10px 0",borderBottom:"1px solid #ECEAE3",minWidth:480},weekNameCol:{width:160,flexShrink:0,display:"flex",alignItems:"center",gap:8},weekDayHead:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2},weekDayName:{fontSize:10,fontWeight:600,color:"#9A968C",textTransform:"uppercase"},weekDayNum:{fontSize:12,fontWeight:600,color:"#6B675E",width:22,height:22,display:"grid",placeItems:"center",borderRadius:"50%"},weekDayToday:{background:"#26241F",color:"#fff"},weekStreakCol:{width:64,flexShrink:0,textAlign:"center",fontSize:10,fontWeight:600,color:"#9A968C",textTransform:"uppercase"},weekRow:{display:"flex",alignItems:"center",padding:"9px 0",borderBottom:"1px solid #F4F2EC",minWidth:480},weekHabitName:{fontSize:13,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},weekCell:{flex:1,display:"grid",placeItems:"center"},typeBadge:{fontSize:10,color:"#9A968C",background:"#F2F1EC",padding:"1px 6px",borderRadius:8,fontWeight:600},tick:{width:26,height:26,borderRadius:7,border:"2px solid #E0DDD5",background:"#fff",cursor:"pointer",display:"grid",placeItems:"center",padding:0},tickFuture:{opacity:.4,cursor:"not-allowed",borderStyle:"dashed"},streakPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,fontWeight:700,padding:"3px 9px",borderRadius:12},tinyBtn:{border:"none",background:"none",color:"#C3BFB5",cursor:"pointer",padding:"2px 3px",display:"grid",placeItems:"center",borderRadius:4},statStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:10,marginBottom:18},stat:{borderRadius:10,padding:"13px 14px"},statLabel:{fontSize:11,fontWeight:600,color:"#6B675E",marginBottom:5},statValue:{fontSize:19,fontWeight:700,display:"flex",alignItems:"center",gap:5,fontFamily:"'Fraunces',Georgia,serif"},monthCard:{background:"#fff",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},monthTitle:{fontSize:14,fontWeight:700,marginBottom:12,fontFamily:"'Fraunces',Georgia,serif"},monthDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:8},monthDowCell:{fontSize:10,fontWeight:600,color:"#9A968C",textAlign:"center",textTransform:"uppercase"},monthGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6},monthDay:{aspectRatio:"1",border:"1.5px solid #ECEAE3",background:"#fff",borderRadius:8,fontSize:12.5,fontWeight:600,color:"#6B675E",cursor:"pointer",fontFamily:"inherit",display:"grid",placeItems:"center"},monthDayFuture:{opacity:.4,cursor:"not-allowed",background:"#FAFAF8"},noteIndicator:{position:"absolute",top:3,right:3,width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},cellNoteBubble:{position:"absolute",top:2,right:"calc(50% - 16px)",width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},countBadge:{position:"absolute",bottom:2,right:2,minWidth:13,height:13,padding:"0 2px",borderRadius:7,color:"#fff",fontSize:9,fontWeight:700,display:"grid",placeItems:"center",lineHeight:1},counterBtn:{width:44,height:44,borderRadius:"50%",border:"1.5px solid #E0DDD5",background:"#fff",color:"#26241F",fontSize:24,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1},chainLine:{position:"absolute",top:"calc(50% - 3px)",left:0,right:0,height:6,zIndex:0,opacity:.9},chainBanner:{display:"flex",alignItems:"center",gap:8,borderRadius:10,padding:"10px 14px",marginBottom:14,fontSize:12.5,fontWeight:700,fontFamily:"'Inter',system-ui,sans-serif"},navBar:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:16},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid #E0DDD5",background:"#fff",color:"#4A463E",cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},navLabel:{fontSize:13,fontWeight:700,color:"#26241F",minWidth:180,textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},noteBox:{background:"#fff",borderRadius:10,padding:14,marginTop:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},longPressMenu:{position:"absolute",top:"100%",left:0,zIndex:50,background:"#fff",border:"1px solid #E0DDD5",borderRadius:10,boxShadow:"0 4px 16px rgba(0,0,0,0.12)",padding:"4px 0",minWidth:140},menuItem:{display:"flex",alignItems:"center",gap:8,width:"100%",border:"none",background:"none",padding:"8px 14px",fontSize:13,color:"#26241F",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:100,display:"grid",placeItems:"center"},modal:{background:"#fff",borderRadius:14,padding:24,width:320,maxWidth:"90vw",display:"flex",flexDirection:"column",gap:8},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:700,fontSize:16,fontFamily:"'Fraunces',Georgia,serif",marginBottom:6},modalLabel:{fontSize:11,fontWeight:600,color:"#9A968C",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4}},Vi=[{id:1,label:"Rough",emoji:"😣",color:"#C2536B"},{id:2,label:"Low",emoji:"🙁",color:"#C2773B"},{id:3,label:"Okay",emoji:"😐",color:"#C9A227"},{id:4,label:"Good",emoji:"🙂",color:"#4C9A6B"},{id:5,label:"Great",emoji:"😄",color:"#3A7CA5"}],qp=t=>Vi.find(r=>r.id===t),Vs=[{id:"wins",label:"Wins",hint:"What went well today?",icon:Rn,color:"#C9A227"},{id:"grateful",label:"Grateful for",hint:"1–3 things",icon:hp,color:"#C2536B"},{id:"mattered",label:"What mattered",hint:"The point of today",icon:Ul,color:"#3A7CA5"},{id:"letgo",label:"Letting go of",hint:"Offload what's draining",icon:zp,color:"#8268B0"},{id:"tomorrow",label:"Tomorrow's one thing",hint:"A single priority",icon:jp,color:"#4C9A6B"}],tm=()=>new Date().toISOString().slice(0,10),Qs=t=>new Date(t+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"});function rm(){const t=tm(),[r,e]=[new Date().getFullYear(),new Date().getMonth()+1],[n,o]=I.useState(null),i=n||t,l=i===t,[a,d]=I.useState(null),[g,m]=I.useState({}),[v,f]=I.useState(Object.fromEntries(Vs.map(z=>[z.id,""]))),S=I.useCallback(async z=>{const D=await K.getJournalEntry(z);d(D)},[]);I.useCallback(async()=>{const z=await K.getJournalHistory(r,e);m(z)},[r,e]);const w=I.useCallback(async()=>{const[z,D]=await Promise.all([K.getJournalEntry(i),K.getJournalHistory(r,e)]);d(z),m(D)},[i,r,e]);I.useEffect(()=>{w()},[w]);const k=async z=>{await K.updateJournalMood(i,z),w()},C=async z=>{const D=v[z].trim();D&&(await K.addJournalBullet(i,z,D),f(j=>({...j,[z]:""})),S(i))},c=async z=>{await K.deleteJournalBullet(z),S(i)},u=z=>{o(z===t?null:z),f(Object.fromEntries(Vs.map(D=>[D.id,""])))};if(!a)return s.jsx("div",{style:{padding:28,color:"#9A968C"},children:"Loading…"});const b=a.mood!==null,x=(()=>{let z=0;const D=new Date(t);if(g[t]||l&&b)z=1,D.setDate(D.getDate()-1);else return 0;for(;;){const M=D.toISOString().slice(0,10);if(g[M])z++,D.setDate(D.getDate()-1);else break}return z})(),A=Object.values(a.bullets||{}).reduce((z,D)=>z+D.length,0),_=new Date(r,e,0).getDate(),L=new Date(r,e-1,1).getDay(),R=L===0?6:L-1;return s.jsxs("div",{style:q.page,children:[s.jsxs("div",{style:q.head,children:[s.jsxs("div",{children:[s.jsx("div",{style:q.eyebrow,children:"Anvil · Journal"}),!l&&s.jsxs("button",{style:q.backBtn,onClick:()=>o(null),children:[s.jsx(Pn,{size:14})," Back to Today"]}),s.jsx("h1",{style:q.h1,children:l?"Today":Qs(i)}),l&&s.jsx("div",{style:q.date,children:Qs(t)})]}),s.jsxs("div",{style:q.streakBox,children:[s.jsx(cs,{size:16,color:"#C2773B"}),s.jsx("span",{style:q.streakNum,children:x}),s.jsx("span",{style:q.streakLabel,children:"day streak"})]})]}),s.jsxs("div",{style:q.card,children:[s.jsxs("div",{style:q.cardTitle,children:["How ",l?"are":"were"," you?"]}),s.jsx("div",{style:q.moodRow,children:Vi.map(z=>{const D=a.mood===z.id;return s.jsxs("button",{onClick:()=>k(z.id),style:{...q.moodBtn,...D?{background:z.color,borderColor:z.color,transform:"translateY(-2px)"}:{}},children:[s.jsx("span",{style:q.moodEmoji,children:z.emoji}),s.jsx("span",{style:{...q.moodLabel,color:D?"#fff":"#6B675E"},children:z.label})]},z.id)})})]}),Vs.map(z=>{var M;const D=z.icon,j=((M=a.bullets)==null?void 0:M[z.id])||[];return s.jsxs("div",{style:q.card,children:[s.jsxs("div",{style:q.sectionHead,children:[s.jsx("span",{style:{...q.sectionIcon,background:`${z.color}1A`,color:z.color},children:s.jsx(D,{size:15})}),s.jsxs("div",{children:[s.jsx("div",{style:q.cardTitle,children:z.label}),s.jsx("div",{style:q.sectionHint,children:z.hint})]})]}),s.jsx("ul",{style:q.bulletList,children:j.map(O=>s.jsxs("li",{style:q.bullet,children:[s.jsx("span",{style:{...q.bulletDot,background:z.color}}),s.jsx("span",{style:q.bulletText,children:O.text}),s.jsx("button",{onClick:()=>c(O.id),style:q.bulletDel,children:s.jsx(mt,{size:13})})]},O.id))}),s.jsxs("div",{style:q.addRow,children:[s.jsx("input",{placeholder:"Add a point…",value:v[z.id],onChange:O=>f(J=>({...J,[z.id]:O.target.value})),onKeyDown:O=>O.key==="Enter"&&C(z.id),style:q.input}),s.jsx("button",{onClick:()=>C(z.id),style:{...q.addBtn,background:z.color},children:s.jsx(Yr,{size:16})})]})]},z.id)}),s.jsxs("div",{style:q.card,children:[s.jsxs("div",{style:q.cardTitle,children:[new Date(r,e-1).toLocaleDateString("en-US",{month:"long",year:"numeric"})," · Mood history",s.jsx("span",{style:{fontSize:11,color:"#9A968C",fontWeight:400,marginLeft:8},children:"tap a day to view"})]}),s.jsx("div",{style:q.calDow,children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(z=>s.jsx("div",{style:q.calDowCell,children:z},z))}),s.jsxs("div",{style:q.calGrid,children:[Array.from({length:R}).map((z,D)=>s.jsx("div",{},`p${D}`)),Array.from({length:_},(z,D)=>D+1).map(z=>{const D=`${r}-${String(e).padStart(2,"0")}-${String(z).padStart(2,"0")}`,j=D===t&&a.mood?a.mood:g[D],M=j?qp(j):null,O=D>t,J=D===i;return s.jsx("button",{onClick:()=>!O&&u(D),disabled:O,style:{...q.calDay,background:M?M.color:O?"#FAFAF8":"#fff",borderColor:J?"#26241F":"#ECEAE3",borderWidth:J?2:1,color:M?"#fff":"#B5B1A7",opacity:O?.5:1,cursor:O?"not-allowed":"pointer",outline:J?"2px solid #26241F":"none",outlineOffset:1},title:M?M.label:D,children:M?M.emoji:z},z)})]}),s.jsx("div",{style:q.legend,children:Vi.map(z=>s.jsxs("span",{style:q.legendItem,children:[s.jsx("span",{style:{...q.legendDot,background:z.color}})," ",z.label]},z.id))})]}),s.jsx("div",{style:q.footer,children:l?b?`Mood set · ${A} point${A===1?"":"s"} written today`:"Tap a mood to log today and keep your streak":`Viewing ${Qs(i)}`})]})}const q={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"#F7F6F3",minHeight:"100%",padding:"28px 24px",color:"#26241F",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"#9A968C",fontWeight:600,marginBottom:4},backBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",background:"none",color:"#3A7CA5",fontSize:12.5,fontWeight:600,cursor:"pointer",padding:"0 0 6px",fontFamily:"inherit"},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},date:{fontSize:13,color:"#9A968C",marginTop:4},streakBox:{display:"flex",alignItems:"center",gap:6,background:"#fff",border:"1px solid #ECEAE3",borderRadius:10,padding:"8px 14px"},streakNum:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"#C2773B"},streakLabel:{fontSize:11,color:"#9A968C",fontWeight:500},card:{background:"#fff",borderRadius:12,padding:"18px 20px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},cardTitle:{fontSize:14,fontWeight:700,marginBottom:12,color:"#26241F"},moodRow:{display:"flex",gap:8,flexWrap:"wrap"},moodBtn:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,border:"2px solid #ECEAE3",background:"#fff",borderRadius:10,padding:"10px 12px",cursor:"pointer",flex:"1 1 60px",transition:"transform 0.1s"},moodEmoji:{fontSize:22},moodLabel:{fontSize:11,fontWeight:600},sectionHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:10},sectionIcon:{width:32,height:32,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},sectionHint:{fontSize:11.5,color:"#9A968C",marginTop:1},bulletList:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6,marginBottom:10},bullet:{display:"flex",alignItems:"center",gap:8,fontSize:13.5,lineHeight:1.4},bulletDot:{width:6,height:6,borderRadius:"50%",flexShrink:0},bulletText:{flex:1},bulletDel:{border:"none",background:"none",color:"#C3BFB5",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},addRow:{display:"flex",gap:8},input:{flex:1,border:"1px solid #E4E2DA",borderRadius:8,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",outline:"none"},addBtn:{width:36,height:36,border:"none",borderRadius:8,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"#9A968C",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:12},calDay:{aspectRatio:"1",border:"1px solid #ECEAE3",borderRadius:7,fontSize:13,display:"grid",placeItems:"center",fontWeight:500,fontFamily:"inherit"},legend:{display:"flex",gap:10,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"#6B675E"},legendDot:{width:8,height:8,borderRadius:"50%",display:"inline-block"},footer:{fontSize:12.5,color:"#9A968C",textAlign:"center",marginTop:8,fontStyle:"italic"}},cr=[{id:"D",label:"Data",color:"#3A7CA5",soft:"rgba(58,124,165,0.10)",prompt:"What did you read/watch? Log the raw source and a quick note.",hint:"e.g. 'Atomic Habits ch.1 — habits are systems not goals'"},{id:"I",label:"Information",color:"#8268B0",soft:"rgba(130,104,176,0.10)",prompt:"What did you actually understand from it? In your own words.",hint:"e.g. 'Small 1% improvements compound into massive change over time'"},{id:"K",label:"Knowledge",color:"#C9A227",soft:"rgba(201,162,39,0.10)",prompt:"How will this specifically improve your life? Connect it to your goals.",hint:"e.g. 'I will improve my morning workout habit by 1% each week'"},{id:"W",label:"Wisdom",color:"#4C9A6B",soft:"rgba(76,154,107,0.10)",prompt:"How have you implemented it? What changed?",hint:"e.g. 'I've not missed a workout in 3 weeks using the 1% rule'"}],gd=t=>cr.findIndex(r=>r.id===t),Qi=[{id:"book",label:"Book",icon:Au},{id:"video",label:"Video",icon:Tp},{id:"article",label:"Article",icon:Du}],ud=t=>Qi.find(r=>r.id===t)||Qi[0],Ys={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"};function em(){var D;const[t,r]=I.useState([]),[e,n]=I.useState(null),[o,i]=I.useState("ALL"),[l,a]=I.useState(!1),[d,g]=I.useState(null),[m,v]=I.useState({title:"",type:"book",pillar:"Academic",note:""}),[f,S]=I.useState({}),w=I.useCallback(async()=>{try{const j=await K.getSkills();r(j);const M={};j.forEach(O=>{M[O.id]=Object.fromEntries(cr.map(J=>[J.id,""]))}),S(O=>{const J={...M};return j.forEach(ot=>{O[ot.id]&&(J[ot.id]={...M[ot.id],...O[ot.id]})}),J})}catch(j){console.error(j)}},[]);I.useEffect(()=>{w()},[w]);const k=t.find(j=>j.id===e),C=k?gd(k.stage):-1,c=async(j,M)=>{var J;const O=(((J=f[j])==null?void 0:J[M])??"").trim();O&&(await K.addSkillNote(j,M,O),S(ot=>({...ot,[j]:{...ot[j],[M]:""}})),w())},u=async j=>{await K.deleteSkillNote(j),w()},b=async j=>{await K.toggleSkillNote(j),w()},x=async(j,M)=>{t.find(J=>J.id===j)&&(M==="W"&&g(j),await K.completeSkillStage(j,M),w())},A=async()=>{if(!m.title.trim())return;const j=await K.createSkill({pillar:m.pillar,title:m.title.trim(),source_type:m.type,note_d:m.note.trim()});a(!1),v({title:"",type:"book",pillar:"Academic",note:""}),n(j.id),w()},_=async j=>{await K.deleteSkill(j),e===j&&n(null),w()},L=o==="ALL"?t:t.filter(j=>j.stage===o),R=t.filter(j=>j.stage==="W").length,z=!!k;return s.jsxs("div",{style:N.page,children:[d&&s.jsx("div",{style:N.celebOverlay,children:s.jsxs("div",{style:N.celebBox,children:[s.jsx("div",{style:N.celebEmoji,children:"🏆"}),s.jsx("div",{style:N.celebTitle,children:"Wisdom unlocked!"}),s.jsx("div",{style:N.celebSub,children:"You've implemented this knowledge — that's rare and real."}),s.jsx("button",{onClick:()=>g(null),style:N.celebBtn,children:"Continue"})]})}),s.jsxs("div",{style:N.head,children:[s.jsxs("div",{children:[s.jsx("div",{style:N.eyebrow,children:"Anvil · Skills"}),s.jsx("h1",{style:N.h1,children:"DIKW Skills"}),s.jsx("div",{style:N.subhead,children:"Data → Information → Knowledge → Wisdom"})]}),s.jsxs("div",{style:N.headRight,children:[s.jsxs("div",{style:N.wisdomBadge,children:[s.jsx(Rn,{size:14,color:"#C9A227"})," ",R," Wisdom",R!==1?"s":""]}),s.jsxs("button",{onClick:()=>{a(!0),n(null)},style:N.addSkillBtn,children:[s.jsx(Yr,{size:15})," Add skill"]})]})]}),s.jsx("div",{style:N.filterBar,children:["ALL",...cr.map(j=>j.id)].map(j=>{const M=cr.find(J=>J.id===j),O=o===j;return s.jsx("button",{onClick:()=>i(j),style:{...N.filterBtn,...O?{background:M?M.color:"#26241F",color:"#fff",borderColor:"transparent"}:{}},children:M?`${j} · ${M.label}`:"All"},j)})}),s.jsxs("div",{style:{...N.layout,gridTemplateColumns:z?"1fr 1fr":"1fr"},children:[s.jsxs("div",{style:N.cardList,children:[l&&s.jsxs("div",{style:{...N.skillCard,border:"2px dashed #3A7CA5"},children:[s.jsx("div",{style:N.cardTitle,children:"New skill"}),s.jsx("input",{placeholder:"Title (book / video / article name)",value:m.title,onChange:j=>v(M=>({...M,title:j.target.value})),onKeyDown:j=>j.key==="Enter"&&A(),style:N.input,autoFocus:!0}),s.jsxs("div",{style:N.addRow,children:[s.jsx("select",{value:m.type,onChange:j=>v(M=>({...M,type:j.target.value})),style:N.select,children:Qi.map(j=>s.jsx("option",{value:j.id,children:j.label},j.id))}),s.jsx("select",{value:m.pillar,onChange:j=>v(M=>({...M,pillar:j.target.value})),style:N.select,children:Object.keys(Ys).map(j=>s.jsx("option",{children:j},j))})]}),s.jsx("input",{placeholder:"First note (what did you read/watch?)",value:m.note,onChange:j=>v(M=>({...M,note:j.target.value})),style:N.input}),s.jsxs("div",{style:N.addRow,children:[s.jsxs("button",{onClick:A,style:N.saveBtn,children:[s.jsx(_t,{size:14})," Save"]}),s.jsxs("button",{onClick:()=>a(!1),style:N.cancelBtn,children:[s.jsx(mt,{size:14})," Cancel"]})]})]}),L.map(j=>{const M=gd(j.stage),O=cr[M],J=ud(j.type),ot=j.stage==="W",W=e===j.id;return s.jsxs("div",{onClick:()=>n(W?null:j.id),style:{...N.skillCard,...W?{borderColor:O.color,borderWidth:2}:{},...ot?{background:"rgba(76,154,107,0.05)"}:{}},children:[s.jsxs("div",{style:N.skillCardTop,children:[s.jsxs("div",{style:N.skillMeta,children:[s.jsx("span",{style:{color:Ys[j.pillar]},children:s.jsx(J.icon,{size:13})}),s.jsx("span",{style:{...N.pillarDot,background:Ys[j.pillar]}}),s.jsxs("span",{style:N.srcLabel,children:[J.label," · ",j.pillar]})]}),s.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[ot&&s.jsx(_u,{size:14,color:"#4C9A6B"}),s.jsx("button",{onClick:h=>{h.stopPropagation(),_(j.id)},style:N.ghostBtn,children:s.jsx(mt,{size:13})})]})]}),s.jsx("div",{style:N.skillTitle,children:j.title}),s.jsxs("div",{style:N.track,children:[cr.map((h,p)=>{var U;const T=p<M,y=p===M,F=(U=j.completed_stages)==null?void 0:U[h.id];return s.jsxs("div",{style:N.trackItem,children:[s.jsxs("div",{style:{...N.trackDot,background:T||F||y?h.color:"#E4E2DA",boxShadow:y?`0 0 0 3px ${h.color}33`:"none"},children:[(T||y&&F)&&s.jsx(_t,{size:9,color:"#fff",strokeWidth:3}),y&&!F&&s.jsx("span",{style:N.trackCurrent,children:h.id}),!T&&!y&&s.jsx(nd,{size:8,color:"#B5B1A7"})]}),p<cr.length-1&&s.jsx("div",{style:{...N.trackLine,background:T?cr[p+1].color:"#E4E2DA"}})]},h.id)}),s.jsx("span",{style:{...N.stageTag,background:O.soft,color:O.color},children:O.label})]})]},j.id)}),L.length===0&&!l&&s.jsx("div",{style:N.empty,children:"No skills at this stage yet."})]}),k&&s.jsxs("div",{style:N.detail,children:[s.jsxs("div",{style:N.detailHead,children:[s.jsxs("div",{children:[s.jsxs("div",{style:N.eyebrow,children:[ud(k.type).label," · ",k.pillar]}),s.jsx("div",{style:N.detailTitle,children:k.title})]}),s.jsx("button",{onClick:()=>n(null),style:N.closeBtn,children:s.jsx(mt,{size:16})})]}),cr.map((j,M)=>{var T,y,F;const O=M<=C,J=M===C,ot=M<C||((T=k.completed_stages)==null?void 0:T[j.id]),W=M>C,h=((y=k.notes)==null?void 0:y[j.id])||[],p=((F=f[k.id])==null?void 0:F[j.id])??"";return s.jsxs("div",{style:{...N.stageBlock,...O?{borderColor:j.color}:{},opacity:W?.45:1},children:[s.jsxs("div",{style:N.stageBlockHead,children:[s.jsx("div",{style:{...N.stageLetter,background:O?j.color:"#E4E2DA",color:O?"#fff":"#9A968C"},children:ot&&!J?s.jsx(_t,{size:12,color:"#fff",strokeWidth:3}):W?s.jsx(nd,{size:11,color:"#9A968C"}):j.id}),s.jsxs("div",{style:{flex:1},children:[s.jsx("div",{style:{...N.stageName,color:O?j.color:"#9A968C"},children:j.label}),O&&s.jsx("div",{style:N.stagePrompt,children:j.prompt})]}),ot&&!J&&s.jsx("span",{style:{...N.doneBadge,color:j.color,background:j.soft},children:"Done"})]}),O&&(()=>{var yt,St;const U=j.id==="W",st=h.length>0&&h.every(Q=>Q.done),Z=U?st:h.length>0;return s.jsxs(s.Fragment,{children:[h.length>0&&s.jsx("ul",{style:N.noteList,children:h.map(Q=>s.jsxs("li",{style:N.noteItem,children:[U?s.jsx("button",{onClick:()=>b(Q.id),style:{...N.checkBox,...Q.done?{background:j.color,borderColor:j.color}:{}},children:Q.done&&s.jsx(_t,{size:11,color:"#fff",strokeWidth:3})}):s.jsx("span",{style:{...N.noteDot,background:j.color}}),s.jsx("span",{style:{...N.noteText,...U&&Q.done?{textDecoration:"line-through",color:"#9A968C"}:{}},children:Q.text}),s.jsx("button",{onClick:()=>u(Q.id),style:N.ghostBtn,children:s.jsx(mt,{size:12})})]},Q.id))}),h.length===0&&s.jsx("div",{style:N.noNotes,children:U?"Add the steps to implement this — check each off as you do it.":`No notes yet — ${j.hint}`}),s.jsxs("div",{style:N.noteAddRow,children:[s.jsx("input",{placeholder:U?"Add a step to implement…":`Add a ${j.label} note…`,value:p,onChange:Q=>S(Dt=>({...Dt,[k.id]:{...Dt[k.id],[j.id]:Q.target.value}})),onKeyDown:Q=>Q.key==="Enter"&&c(k.id,j.id),style:N.noteInput}),s.jsx("button",{onClick:()=>c(k.id,j.id),style:{...N.noteAddBtn,background:j.color},children:s.jsx(Yr,{size:14})})]}),J&&!((yt=k.completed_stages)!=null&&yt[j.id])&&s.jsxs(s.Fragment,{children:[U&&h.length>0&&!st&&s.jsxs("div",{style:N.checklistHint,children:[h.filter(Q=>Q.done).length,"/",h.length," done — check all steps to complete Wisdom"]}),s.jsxs("button",{onClick:()=>x(k.id,j.id),disabled:!Z,style:{...N.advanceBtn,background:Z?j.color:"#C3BFB5",marginTop:10,cursor:Z?"pointer":"not-allowed"},children:[s.jsx(_t,{size:14}),U?"Mark Wisdom complete":`Complete ${j.label} → ${(St=cr[M+1])==null?void 0:St.label}`]})]})]})})()]},j.id)}),k.stage==="W"&&((D=k.completed_stages)==null?void 0:D.W)&&s.jsxs("div",{style:N.wisdomDone,children:[s.jsx(Rn,{size:16,color:"#4C9A6B"})," Wisdom achieved — implemented in your life"]})]})]})]})}const N={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"#F7F6F3",minHeight:"100%",padding:"26px 22px",color:"#26241F",boxSizing:"border-box",position:"relative"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"#9A968C",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"#9A968C",marginTop:3},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},wisdomBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addSkillBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#26241F",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},filterBar:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16},filterBtn:{border:"1px solid #E0DDD5",background:"#fff",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:600,color:"#4A463E",cursor:"pointer",fontFamily:"inherit"},layout:{display:"grid",gap:12},cardList:{display:"flex",flexDirection:"column",gap:10},skillCard:{background:"#fff",borderRadius:12,padding:"14px",border:"1.5px solid #ECEAE3",cursor:"pointer",boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},skillCardTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},skillMeta:{display:"flex",alignItems:"center",gap:6},pillarDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},srcLabel:{fontSize:11,fontWeight:600,color:"#9A968C"},skillTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",marginBottom:12},cardTitle:{fontSize:13,fontWeight:700,marginBottom:10},track:{display:"flex",alignItems:"center"},trackItem:{display:"flex",alignItems:"center"},trackDot:{width:22,height:22,borderRadius:"50%",display:"grid",placeItems:"center",flexShrink:0},trackCurrent:{fontSize:9,fontWeight:800,color:"#fff"},trackLine:{width:24,height:3,borderRadius:2},stageTag:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,marginLeft:10},detail:{background:"#fff",borderRadius:14,padding:"18px 16px",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",border:"1.5px solid #ECEAE3",alignSelf:"start"},detailHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16},detailTitle:{fontSize:18,fontWeight:700,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"#F2F1EC",color:"#6B675E",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},stageBlock:{border:"1.5px solid #ECEAE3",borderRadius:10,padding:"12px 13px",marginBottom:10},stageBlockHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:8},stageLetter:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",fontSize:13,fontWeight:800,flexShrink:0},stageName:{fontSize:13,fontWeight:700},stagePrompt:{fontSize:11.5,color:"#6B675E",marginTop:2,lineHeight:1.4},doneBadge:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10,marginLeft:"auto",flexShrink:0},noteList:{margin:"0 0 8px 0",padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6},noteItem:{display:"flex",alignItems:"flex-start",gap:8,fontSize:13,lineHeight:1.4},noteDot:{width:6,height:6,borderRadius:"50%",flexShrink:0,marginTop:5},checkBox:{width:18,height:18,borderRadius:5,border:"2px solid #D9D6CE",background:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginTop:1,padding:0},checklistHint:{fontSize:11.5,color:"#9A968C",fontWeight:600,marginTop:10,textAlign:"center"},noteText:{flex:1,color:"#26241F"},noNotes:{fontSize:12,color:"#B5B1A7",fontStyle:"italic",marginBottom:8},noteAddRow:{display:"flex",gap:6},noteInput:{flex:1,border:"1px solid #E4E2DA",borderRadius:7,padding:"7px 10px",fontSize:13,fontFamily:"inherit",outline:"none"},noteAddBtn:{width:32,height:32,border:"none",borderRadius:7,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},advanceBtn:{display:"flex",alignItems:"center",gap:8,border:"none",color:"#fff",padding:"10px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},wisdomDone:{display:"flex",alignItems:"center",gap:8,justifyContent:"center",fontSize:13.5,fontWeight:700,color:"#4C9A6B",padding:12,background:"rgba(76,154,107,0.08)",borderRadius:10,marginTop:4},ghostBtn:{border:"none",background:"none",color:"#C3BFB5",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},input:{border:"1px solid #E4E2DA",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box",marginBottom:8},select:{border:"1px solid #E4E2DA",borderRadius:8,padding:"8px 10px",fontSize:12.5,fontFamily:"inherit",flex:1},addRow:{display:"flex",gap:8,marginBottom:8},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid #E4E2DA",background:"#fff",color:"#6B675E",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{fontSize:13,color:"#9A968C",padding:"32px 12px",textAlign:"center"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.55)",zIndex:50,display:"grid",placeItems:"center"},celebBox:{background:"#fff",borderRadius:20,padding:"40px 32px",textAlign:"center",maxWidth:320,boxShadow:"0 8px 40px rgba(0,0,0,0.18)"},celebEmoji:{fontSize:52,marginBottom:12},celebTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:8},celebSub:{fontSize:13.5,color:"#6B675E",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:"#4C9A6B",color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},ao=[{id:"aarti",title:"Aarti",html:`<h1>॥ गणपतीची आरती ॥</h1><br/>
सुखकर्ता दुःखहर्ता वार्ता विघ्नाची।<br/>
नुरवी पुरवी प्रेम कृपा जयाची।<br/>
सर्वांगी सुंदर उटि शेंदुराची।<br/>
कंठीं झळके माळ मुक्ताफळांची।<br/>
जयदेव जयदेव जय मंगलमूर्ती।<br/>
दर्शनमात्रे मनः कामना पुरती ॥ ध्रु. ।।<br/><br/>

रत्नखचित फरा तुज गौरीकुमरा।<br/>
चंदनाची उटी कुंकुमकेशरा।<br/>
हिरेजडित मुगुट शोभतो बरा।<br/>
रुणझुणती नुपुरें चरणी घागरिया ॥ जय. ॥ २ ॥<br/><br/>

लंबोदर पीतांबर फणिवरबंधना।<br/>
सरळ सोंड वक्रतुंड त्रिनयना।<br/>
दास रामाचा वाट पाहे सदना।<br/>
संकटी पावावें, निर्वाणीं रक्षावें सुरवरवंदना।<br/>
जयदेव जयदेव जय मंगलमूर्ती।<br/>
दर्शन. ॥ ३ ॥<br/><br/>

<h1>॥ शेंदुर लाल चढ़ायो ॥</h1><br/>
शेंदुर लाल चढ़ायो अच्छा गजमुख को<br/>
दोंदिल लाल बिराजे सुत गौरिहर को<br/>
हाथ लिए गुडलद्दु सांई सुरवर को<br/>
महिमा कहे न जाय लागत हूं पद को<br/>
जय देव जय देव<br/><br/>

जय जय श्री गणराज विद्या सुखदाता<br/>
धन्य तुम्हारो दर्शन मेरा मन रमता<br/>
जय देव जय देव<br/><br/>

भावभगत से कोई शरणागत आवे<br/>
संतति संपत्ति सबहि भरपूर पावे<br/>
ऐसे तुम महाराज मोको अति भावे<br/>
गोसावीनन्दन निशिदिन गुण गावे<br/>
जय देव जय देव<br/><br/>

जय जय श्री गणराज विद्या सुखदाता<br/>
धन्य तुम्हारो दर्शन मेरा मन रमता<br/>
जय देव जय देव<br/><br/>

<h1>॥ श्री देवीची आरती ॥</h1><br/>
दुर्गे दुर्घट भारी तुजविण संसारीं।<br/>
अनाथनाथे अंबे करुणा विस्तारीं।<br/>
वारीं वारीं जन्म-मरणातें वारीं।<br/>
हारीं पडलों आतां संकट निवारीं ॥ १ ॥<br/>
जयदेवी जयदेवी जय महिषासुरमर्दिनी।<br/>
सुरवर-ईश्वरवरदे तारकसंजिवनी || ध्रु. ।।<br/><br/>

त्रिभुवनभुवनीं पाहतां तुजऐशी नाहीं।<br/>
चारी श्रमले परंतु न बोलवे कांहीं।<br/>
साही विवाद करितां पडिलें प्रवाही।<br/>
ते तूं भक्तालागी पावसि लवलाही || जय. ॥ २ ॥<br/><br/>

प्रसन्नवदने प्रसन्न होसी निजदासां।<br/>
क्लेशांपासुनि सोडविं तोडीं भवपाशां।<br/>
अंबे तुजवांचून कोण पुरवील आशा।<br/>
नरहरी तल्लिन झाला पदपंकजलेशा ॥ ३॥<br/>
जय देवी जय देवी जय महिषासुरमर्दिनी।<br/>
सुरवर-ईश्वरवरदे तारक० ॥<br/><br/>

<h1>॥ श्री शंकराची आरती ॥</h1><br/>
लवथवती विक्राळा ब्रह्मांडीं माळा।<br/>
वीषें कंठी काळा त्रिनेत्रीं ज्वाळा।<br/>
लावण्यसुंदर मस्तकीं बाळा।<br/>
तेथुनियां जळ निर्मळ वाहे झुळझुळां ॥ १ ॥<br/>
जय देव जय देव जय श्रीशंकरा।<br/>
आरती ओंवाळू तुज कर्पूरगौरा ॥ ध्रु.॥<br/><br/>

कर्पुरगौरा भोळा नयनीं विशाळा।<br/>
अर्धांगीं पार्वती सुमनांच्या माळा।<br/>
विभुतीचें उधळण शितिकंठ नीळा।<br/>
ऐसा शंकर शोभे उमावेल्हाळा। जय देव० ॥ २ ॥<br/><br/>

देवीं दैत्यीं सागरमंथन पैं केलें।<br/>
त्यामाजीं अवचित हलाहल जें उठिलें।<br/>
तें त्वां असुरपणें प्राशन केलें।<br/>
'नीलकंठ' नाम प्रसिद्ध झालें || जय० || ३ ||<br/><br/>

व्याघ्रांबर फणिवरधर सुंदर मदनारी।<br/>
पंचानन मनमोहन मुनिजनसुखकारी।<br/>
शतकोटीचें बीज वाचे उच्चारी।<br/>
रघुकुलतिलक रामदासाअंतरी ॥ जय देव० ॥ ४ ॥<br/><br/>

<h1>॥ कर्पूरगौरं करुणावतारं ॥</h1><br/>
कर्पूरगौरं करुणावतारं | संसारसारं भुजगेन्द्र हारं |<br/>
सदा बसन्तं हृदयारबिन्दे भबं भवानीसहितं नमामि ।।<br/>
मन्दारमालं कुलितलिकाय| कपालमाला क्षितशेखर्य |<br/>
दिव्यंबरय च दिगम्बराय | नमः शिवायै च नमः शिवाय |<br/><br/>

<h1>॥ घालीन लोटांगण ॥</h1><br/>
घालीन लोटांगण, वंदीन चरण।<br/>
डोळ्यांनी पाहीन रुप तुझें।<br/>
प्रेमें आलिंगन, आनंदे पूजिन।<br/>
भावें ओवाळीन म्हणे नामा<br/><br/>

त्वमेव माता च पिता त्वमेव।<br/>
त्वमेव बंधुक्ष्च सखा त्वमेव।<br/>
त्वमेव विध्या द्रविणं त्वमेव।<br/>
त्वमेव सर्वं मम देवदेव<br/><br/>

कायेन वाचा मनसेंद्रीयेव्रा, बुद्धयात्मना वा प्रकृतिस्वभावात।<br/>
करोमि यध्य्त सकलं परस्मे, नारायणायेति समर्पयामि ||<br/><br/>

अच्युतं केशवं रामनारायणं कृष्णदामोदरं वासुदेवं हरिम।<br/>
श्रीधरं माधवं गोपिकावल्लभं, जानकीनायकं रामचंद्र भजे ||<br/><br/>

हरे राम हर राम, राम राम हरे हरे।<br/>
हरे कृष्ण हरे कृष्ण, कृष्ण कृष्ण हरे हरे ||<br/>`},{id:"ganesh_sahastranaam",title:"Ganesh Sahastranaam",html:`<h1>॥ गणेश सहस्रनाम ॥</h1><br/>
    
    <div style="margin-bottom:20px">
        <strong>१</strong><br/>
        <strong>ॐ गणेश्वराय नमः।</strong><br/>
        जो सृष्टि के स्वामी हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>२</strong><br/>
        <strong>ॐ गणक्रीडाय नमः।</strong><br/>
        जो गणों के साथ क्रीडा करने वाले हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>३</strong><br/>
        <strong>ॐ गणनाथाय नमः।</strong><br/>
        जो गणों के नाथ अथवा स्वामी हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>४</strong><br/>
        <strong>ॐ गणाधिपाय नमः।</strong><br/>
        जो आदित्य आदि गणदेवताओं के अधिपति हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>५</strong><br/>
        <strong>ॐ एकदंष्ट्राय नमः।</strong><br/>
        जो एक दाँत वाले हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>६</strong><br/>
        <strong>ॐ वक्रतुण्डाय नमः।</strong><br/>
        जो मुड़ी हुयी सूँड वाले हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>७</strong><br/>
        <strong>ॐ गजवक्त्राय नमः।</strong><br/>
        जो हाथी के समान मुख वाले हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>८</strong><br/>
        <strong>ॐ महोदराय नमः।</strong><br/>
        जो विशाल उदर वाले हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>९</strong><br/>
        <strong>ॐ लम्बोदराय नमः।</strong><br/>
        जो लम्बे उदर वाले हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>१०</strong><br/>
        <strong>ॐ धूम्रवर्णाय नमः।</strong><br/>
        जिनकी देह धुएँ के रंग की है<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>११</strong><br/>
        <strong>ॐ विकटाय नमः।</strong><br/>
        जो विशाल देह वाले हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>१२</strong><br/>
        <strong>ॐ विघ्ननाशकाय नमः।</strong><br/>
        जो विघ्नों का नाश करने वाले हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>१३</strong><br/>
        <strong>ॐ सुमुखाय नमः।</strong><br/>
        जो सदैव प्रसन्नचित्त रहने वाले हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>१४</strong><br/>
        <strong>ॐ दुर्मुखाय नमः।</strong><br/>
        जो चञ्चल मुख वाले हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>१५</strong><br/>
        <strong>ॐ बुद्धाय नमः।</strong><br/>
        जो ज्ञानवान एवं चतुर हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>१६</strong><br/>
        <strong>ॐ विघ्नराजाय नमः।</strong><br/>
        जो समस्त विघ्नों के स्वामी हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>१७</strong><br/>
        <strong>ॐ गजाननाय नमः।</strong><br/>
        जिनका शीश हाथी का है<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>१८</strong><br/>
        <strong>ॐ भीमाय नमः।</strong><br/>
        जो विशाल एवं कठोर हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>१९</strong><br/>
        <strong>ॐ प्रमोदाय नमः।</strong><br/>
        जो आनन्ददायक साधन प्रदान करने वाले हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>२०</strong><br/>
        <strong>ॐ आमोदाय नमः।</strong><br/>
        जो सदैव उत्साहित रहने वाले हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>२१</strong><br/>
        <strong>ॐ सुरानन्दाय नमः।</strong><br/>
        जो शिवगणों को प्रसन्नता प्रदान करने वाले हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>२२</strong><br/>
        <strong>ॐ मदोत्कटाय नमः।</strong><br/>
        जो निष्कपट एवं मेधावी हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>२३</strong><br/>
        <strong>ॐ हेरम्बाय नमः।</strong><br/>
        जो दुर्बलों की रक्षा करने वाले हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>२४</strong><br/>
        <strong>ॐ शम्बराय नमः।</strong><br/>
        जो जल के रूप में निवास करने वाले हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>२५</strong><br/>
        <strong>ॐ शम्भवे नमः।</strong><br/>
        जो आनन्द प्रदान करने वाले हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>२६</strong><br/>
        <strong>ॐ लम्बकर्णाय नमः।</strong><br/>
        जो बड़े कानों वाले हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>२७</strong><br/>
        <strong>ॐ महाबलाय नमः।</strong><br/>
        जो अत्यन्त सुदृढ़ एवं साहसी हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>२८</strong><br/>
        <strong>ॐ नन्दनाय नमः।</strong><br/>
        जो युवा हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>२९</strong><br/>
        <strong>ॐ अलम्पटाय नमः।</strong><br/>
        जो सुन्दर वस्त्र धारण करने वाले हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>३०</strong><br/>
        <strong>ॐ अभीरवे नमः।</strong><br/>
        जो निर्भीक हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>३१</strong><br/>
        <strong>ॐ मेघनादाय नमः।</strong><br/>
        जो मेघों के समान गर्जना करने वाले हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>३२</strong><br/>
        <strong>ॐ गणञ्जयाय नमः।</strong><br/>
        जो दुष्टों पर विजय पाने वाले हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>३३</strong><br/>
        <strong>ॐ विनायकाय नमः।</strong><br/>
        जो सर्वोच्च एवं सर्वश्रेष्ठ हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>३४</strong><br/>
        <strong>ॐ विरूपाक्षाय नमः।</strong><br/>
        जो सूर्य, चन्द्र तथा अग्नि को नेत्रों के रूप में धारण करने वाले हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>३५</strong><br/>
        <strong>ॐ धीरशूराय नमः।</strong><br/>
        जो अत्यन्त शूरवीर हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>३६</strong><br/>
        <strong>ॐ वरप्रदाय नमः।</strong><br/>
        जो वर प्रदान करने वाले हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>३७</strong><br/>
        <strong>ॐ महागणपतये नमः।</strong><br/>
        जो सर्वशक्तिमान हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>३८</strong><br/>
        <strong>ॐ बुद्धिप्रियाय नमः।</strong><br/>
        जो ज्ञान के प्रशंसक हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>३९</strong><br/>
        <strong>ॐ क्षिप्रप्रसादनाय नमः।</strong><br/>
        जो शीघ्र वर प्रदान करने वाले हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>४०</strong><br/>
        <strong>ॐ रुद्रप्रियाय नमः।</strong><br/>
        जो रुद्र मन्त्र के प्रशंसक हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>४१</strong><br/>
        <strong>ॐ गणाध्यक्षाय नमः।</strong><br/>
        जो छत्तीस सिद्धान्तों की रक्षा करने वाले हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>४२</strong><br/>
        <strong>ॐ उमापुत्राय नमः।</strong><br/>
        जो देवी उमा के पुत्र हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>४३</strong><br/>
        <strong>ॐ अघनाशनाय नमः।</strong><br/>
        जो पापों का नाश करने वाले हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>४४</strong><br/>
        <strong>ॐ कुमारगुरवे नमः।</strong><br/>
        जो भगवान कार्तिकेय के गुरु हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>४५</strong><br/>
        <strong>ॐ ईशानपुत्राय नमः।</strong><br/>
        जो भगवान शिव के पुत्र हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>४६</strong><br/>
        <strong>ॐ मूषकवाहनाय नमः।</strong><br/>
        जो मूषक को अपने वाहन के रूप में रखने वाले हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>४७</strong><br/>
        <strong>ॐ सिद्धिप्रियाय नमः।</strong><br/>
        जो सिद्धि प्रदान करने वाले हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>४८</strong><br/>
        <strong>ॐ सिद्धिपतये नमः।</strong><br/>
        जो समस्त सिद्धियों के स्वामी हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>४९</strong><br/>
        <strong>ॐ सिद्धये नमः।</strong><br/>
        जो स्वयं सिद्धि स्वरूप हैं<br/><br/>
    </div>
    
    <div style="margin-bottom:20px">
        <strong>५०</strong><br/>
        <strong>ॐ सिद्धिविनायकाय नमः।</strong><br/>
        जो सफलता प्रदान करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५१</strong><br/>
        <strong>ॐ अविघ्नाय नमः।</strong><br/>
        जो अज्ञान को नष्ट करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५२</strong><br/>
        <strong>ॐ तुम्बुरवे नमः।</strong><br/>
        जो तुम्बुरु नामक वाद्ययन्त्र से प्रसन्न होने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५३</strong><br/>
        <strong>ॐ सिंहवाहनाय नमः।</strong><br/>
        जो सिंह के वाहन पर आरूढ़ रहने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५४</strong><br/>
        <strong>ॐ मोहिनीप्रियाय नमः।</strong><br/>
        जो मोहिनी के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५५</strong><br/>
        <strong>ॐ कटङ्कटाय नमः।</strong><br/>
        जो अज्ञान का नाश करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५६</strong><br/>
        <strong>ॐ राजपुत्राय नमः।</strong><br/>
        जो राजा वरेण्य के पुत्र हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५७</strong><br/>
        <strong>ॐ शालकाय नमः।</strong><br/>
        जो शान्त एवं संयमित रहने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५८</strong><br/>
        <strong>ॐ सम्मिताय नमः।</strong><br/>
        जो आकार प्रकार में समान एवं अनुरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५९</strong><br/>
        <strong>ॐ अमिताय नमः।</strong><br/>
        जो असीमित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६०</strong><br/>
        <strong>ॐ कूष्माण्डसामसम्भूतये नमः।</strong><br/>
        जो वेदों को अपनी सम्पत्ति मानने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६१</strong><br/>
        <strong>ॐ दुर्जयाय नमः।</strong><br/>
        जो अपराजेय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६२</strong><br/>
        <strong>ॐ धूर्जयाय नमः।</strong><br/>
        जो दुर्जनों को जीतने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६३</strong><br/>
        <strong>ॐ जयाय नमः।</strong><br/>
        जो विजयी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६४</strong><br/>
        <strong>ॐ भूपतये नमः।</strong><br/>
        जो देवों के देव हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६५</strong><br/>
        <strong>ॐ भुवनपतये नमः।</strong><br/>
        जो संसार के स्वामी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६६</strong><br/>
        <strong>ॐ भूतानां पतये नमः।</strong><br/>
        जो पञ्च तत्वों के अधिपति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६७</strong><br/>
        <strong>ॐ अव्ययाय नमः।</strong><br/>
        जो अमर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६८</strong><br/>
        <strong>ॐ विश्वकर्त्रे नमः।</strong><br/>
        जो सृष्टि के निर्माता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६९</strong><br/>
        <strong>ॐ विश्वमुखाय नमः।</strong><br/>
        जो मुख के रूप में सृष्टि धारण किये हुये हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७०</strong><br/>
        <strong>ॐ विश्वरूपाय नमः।</strong><br/>
        जो सम्पूर्ण सृष्टि के रूप में हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७१</strong><br/>
        <strong>ॐ निधये नमः।</strong><br/>
        जो नौ निधियाँ प्रदान करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७२</strong><br/>
        <strong>ॐ घृणये नमः।</strong><br/>
        जो सूर्य के रूप में प्रतिष्ठित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७३</strong><br/>
        <strong>ॐ कवये नमः।</strong><br/>
        जो कवि हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७४</strong><br/>
        <strong>ॐ कवीनामृषभाय नमः।</strong><br/>
        जो कवियों में सर्वश्रेष्ठ कवि हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७५</strong><br/>
        <strong>ॐ ब्रह्मण्याय नमः।</strong><br/>
        जो ब्रह्मा के रक्षक हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७६</strong><br/>
        <strong>ॐ ब्रह्मणस्पतये नमः।</strong><br/>
        जो वाणी के स्वामी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७७</strong><br/>
        <strong>ॐ ज्येष्ठराजाय नमः।</strong><br/>
        जो सामवेद के अनुसार सबसे बड़े हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७८</strong><br/>
        <strong>ॐ निधिपतये नमः।</strong><br/>
        जो निधियों के अभिरक्षक हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७९</strong><br/>
        <strong>ॐ निधिप्रियपतिप्रियाय नमः।</strong><br/>
        कुबेर भी जिनकी पूजा करते हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८०</strong><br/>
        <strong>ॐ हिरण्मयपुरान्तःस्थाय नमः।</strong><br/>
        जो गहरे विचारों में मग्न रहने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८१</strong><br/>
        <strong>ॐ सूर्यमण्डलमध्यगाय नमः।</strong><br/>
        जो सूर्यमण्डल में निवास करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८२</strong><br/>
        <strong>ॐ कराहतिविध्वस्तसिन्धुसलिलाय नमः।</strong><br/>
        जो अपनी सूँड से समुद्र सूखा देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८३</strong><br/>
        <strong>ॐ पूषदन्तभिदे नमः।</strong><br/>
        जो पूषा का दाँत खण्डित करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८४</strong><br/>
        <strong>ॐ उमाङ्ककेलिकुतुकिने नमः।</strong><br/>
        जो माता उमा की गोद में हर्षित होने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८५</strong><br/>
        <strong>ॐ मुक्तिदाय नमः।</strong><br/>
        जो मुक्ति प्रदान करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८६</strong><br/>
        <strong>ॐ कुलपालनाय नमः।</strong><br/>
        जो कुल का पालन/रक्षा करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८७</strong><br/>
        <strong>ॐ किरीटिने नमः।</strong><br/>
        जो सुन्दर मुकुट धारण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८८</strong><br/>
        <strong>ॐ कुण्डलिने नमः।</strong><br/>
        जो कुण्डल धारण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८९</strong><br/>
        <strong>ॐ हारिणे नमः।</strong><br/>
        जो मोतियों का हार धारण किये हुये हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९०</strong><br/>
        <strong>ॐ वनमालिने नमः।</strong><br/>
        जो सुन्दर पुष्पों के हार से सुशोभित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९१</strong><br/>
        <strong>ॐ मनोमयाय नमः।</strong><br/>
        जो अपने मन की करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९२</strong><br/>
        <strong>ॐ वैमुख्यहतदैत्यश्रिये नमः।</strong><br/>
        जो अश्रद्धावान का वैभव हरने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९३</strong><br/>
        <strong>ॐ पादाहतिजितक्षितये नमः।</strong><br/>
        जो अपने चरणों से पृथ्वी का अहङ्कार नष्ट करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९४</strong><br/>
        <strong>ॐ सद्योजातस्वर्णमुञ्जमेखलिने नमः।</strong><br/>
        जो कमर में कुशा घास की मेखला धारण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९५</strong><br/>
        <strong>ॐ दुर्निमित्तहृते नमः।</strong><br/>
        जो अशुभ शकुनों का नाश करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९६</strong><br/>
        <strong>ॐ दुःस्वप्नहृते नमः।</strong><br/>
        जो दुःस्वप्न का नाश करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९७</strong><br/>
        <strong>ॐ प्रसहनाय नमः।</strong><br/>
        जो दोषों को सहन करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९८</strong><br/>
        <strong>ॐ गुणिने नमः।</strong><br/>
        जो समस्त गुणों के स्वामी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९९</strong><br/>
        <strong>ॐ नादप्रतिष्ठिताय नमः।</strong><br/>
        जो सङ्गीत में विद्यमान रहने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१००</strong><br/>
        <strong>ॐ सुरूपाय नमः।</strong><br/>
        जो सुन्दर रूप वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१०१</strong><br/>
        <strong>ॐ सर्वनेत्राधिवासाय नमः।</strong><br/>
        जो सभी के नेत्रों में विद्यमान रहने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१०२</strong><br/>
        <strong>ॐ वीरासनाश्रयाय नमः।</strong><br/>
        जो सुदृढ़ता से डटे रहने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१०३</strong><br/>
        <strong>ॐ पीताम्बराय नमः।</strong><br/>
        जो पीत वस्त्र धारण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१०४</strong><br/>
        <strong>ॐ खण्डरदाय नमः।</strong><br/>
        जिनका एक दाँत खण्डित है<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१०५</strong><br/>
        <strong>ॐ खण्डेन्दुकृतशेखराय नमः।</strong><br/>
        जिनके घुँघराले बालों में अर्धचन्द्र सुशोभित है<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१०६</strong><br/>
        <strong>ॐ चित्राङ्कश्यामदशनाय नमः।</strong><br/>
        जो विचित्र रंग-बिरंगे दाँत वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१०७</strong><br/>
        <strong>ॐ भालचन्द्राय नमः।</strong><br/>
        जिनके मस्तक पर चन्द्रमा सुशोभित है<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१०८</strong><br/>
        <strong>ॐ चतुर्भुजाय नमः।</strong><br/>
        जो चार भुजाधारी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१०९</strong><br/>
        <strong>ॐ योगाधिपाय नमः।</strong><br/>
        जो योग के अधिष्ठाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>११०</strong><br/>
        <strong>ॐ तारकस्थाय नमः।</strong><br/>
        जो तारकमन्त्र में निवास करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१११</strong><br/>
        <strong>ॐ पुरुषाय नमः।</strong><br/>
        जो पुरुष हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>११२</strong><br/>
        <strong>ॐ गजकर्णकाय नमः।</strong><br/>
        जो हाथी के कान वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>११३</strong><br/>
        <strong>ॐ गणाधिराजाय नमः।</strong><br/>
        जो गणों के राजा हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>११४</strong><br/>
        <strong>ॐ विजयस्थिराय नमः।</strong><br/>
        जो सदैव विजय हेतु आतुर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>११५</strong><br/>
        <strong>ॐ गजपतिर्ध्वजिने नमः।</strong><br/>
        जो हाथी के प्रतीक वाला ध्वज लिये हुए हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>११६</strong><br/>
        <strong>ॐ देवदेवाय नमः।</strong><br/>
        जो देवताओं के भी देवता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>११७</strong><br/>
        <strong>ॐ स्मरप्राणदीपकाय नमः।</strong><br/>
        जो मन्मथ को पुनर्जीवित करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>११८</strong><br/>
        <strong>ॐ वायुकीलकाय नमः।</strong><br/>
        जो जीवन शक्ति के रक्षक हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>११९</strong><br/>
        <strong>ॐ विपश्चिद्वरदाय नमः।</strong><br/>
        जो राजा विपश्चित् को वरदान देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१२०</strong><br/>
        <strong>ॐ नादोन्नादभिन्नबलाहकाय नमः।</strong><br/>
        जो सूँड से मेघों की दिशा बदल देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१२१</strong><br/>
        <strong>ॐ वराहरदनाय नमः।</strong><br/>
        जो वाराह के दाँत से अधिक सुन्दर दाँत वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१२२</strong><br/>
        <strong>ॐ मृत्युञ्जयाय नमः।</strong><br/>
        जो मृत्यु पर विजय पाने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१२३</strong><br/>
        <strong>ॐ व्याघ्राजिनाम्बराय नमः।</strong><br/>
        जो बाघम्बर धारण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१२४</strong><br/>
        <strong>ॐ इच्छाशक्तिधराय नमः।</strong><br/>
        जो आत्म नियन्त्रण में रहने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१२५</strong><br/>
        <strong>ॐ देवत्रात्रे नमः।</strong><br/>
        जो देवों की रक्षा करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१२६</strong><br/>
        <strong>ॐ दैत्यविमर्दनाय नमः।</strong><br/>
        जो दैत्यों का संहार करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१२७</strong><br/>
        <strong>ॐ शम्भुवक्त्रोद्भवाय नमः।</strong><br/>
        जो शिव के मुख से व्यक्त होने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१२८</strong><br/>
        <strong>ॐ शम्भुकोपघ्ने नमः।</strong><br/>
        जो शिव जी का क्रोध शान्त करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१२९</strong><br/>
        <strong>ॐ शम्भुहास्यभुवे नमः।</strong><br/>
        जो शिव जी की महिमा का गुणगान करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१३०</strong><br/>
        <strong>ॐ शम्भुतेजसे नमः।</strong><br/>
        जो शिव के समान तेज वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१३१</strong><br/>
        <strong>ॐ शिवाशोकहारिणे नमः।</strong><br/>
        जो माता पार्वती (शिवा) के शोक को हरने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१३२</strong><br/>
        <strong>ॐ गौरीसुखावहाय नमः।</strong><br/>
        जो माता गौरी को प्रसन्न रखने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१३३</strong><br/>
        <strong>ॐ उमाङ्गमलजाय नमः।</strong><br/>
        जो देवी उमा की गोद में खेलने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१३४</strong><br/>
        <strong>ॐ गौरीतेजोभुवे नमः।</strong><br/>
        जो माता पार्वती के तेज से उत्पन्न हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१३५</strong><br/>
        <strong>ॐ स्वर्धुनीभवाय नमः।</strong><br/>
        जो गङ्गा के उद्भव का कारण हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१३६</strong><br/>
        <strong>ॐ यज्ञकायाय नमः।</strong><br/>
        जो स्वयं यज्ञ स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१३७</strong><br/>
        <strong>ॐ महानादाय नमः।</strong><br/>
        जो अत्यन्त तेज ध्वनि उत्पन्न करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१३८</strong><br/>
        <strong>ॐ गिरिवर्ष्मणे नमः।</strong><br/>
        जो पर्वतों के समान देह वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१३९</strong><br/>
        <strong>ॐ शुभाननाय नमः।</strong><br/>
        जो मंगलमयी मुखाकृति वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१४०</strong><br/>
        <strong>ॐ सर्वात्मने नमः।</strong><br/>
        जो समस्त सृष्टि में विद्यमान रहने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१४१</strong><br/>
        <strong>ॐ सर्वदेवात्मने नमः।</strong><br/>
        जो समस्त देवों में उपस्थित रहने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१४२</strong><br/>
        <strong>ॐ ब्रह्ममूर्ध्ने नमः।</strong><br/>
        जो ब्रह्मा के मुख वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१४३</strong><br/>
        <strong>ॐ ककुप्श्रुतये नमः।</strong><br/>
        जो दिशाओं को कान के रूप में धारण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१४४</strong><br/>
        <strong>ॐ ब्रह्माण्डकुम्भाय नमः।</strong><br/>
        जो सृष्टि को अपने मस्तिष्क के भाग में रखने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१४५</strong><br/>
        <strong>ॐ चिद्व्योमभालाय नमः।</strong><br/>
        जो अन्तरिक्ष के समान मस्तक वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१४६</strong><br/>
        <strong>ॐ सत्यशिरोरुहाय नमः।</strong><br/>
        जो सत्य को केश के रूप में धारण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१४७</strong><br/>
        <strong>ॐ जगज्जन्मलयोन्मेषनिमेषाय नमः।</strong><br/>
        जो क्षणभर में सृष्टि का सृजन एवं संहार करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१४८</strong><br/>
        <strong>ॐ अग्न्यर्कसोमदृशे नमः।</strong><br/>
        जो सूर्य, चन्द्र एवं अग्नि को नेत्रों के रूप में धारण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१४९</strong><br/>
        <strong>ॐ गिरीन्द्रैकरदाय नमः।</strong><br/>
        जो मेरु पर्वत को अपने दाँत के रूप में धारण किये हुये हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१५०</strong><br/>
        <strong>ॐ धर्माधर्मोष्ठाय नमः।</strong><br/>
        धर्म और अधर्म जिनके दोनों ओष्ठ हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१५१</strong><br/>
        <strong>ॐ अदृश्यरूपगुह्याय नमः।</strong><br/>
        जो अदृश्य एवं गुप्त रूप धारण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१५२</strong><br/>
        <strong>ॐ सिद्धिगुल्फाय नमः।</strong><br/>
        जो सिद्धि को टखने के रूप में धारण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१५३</strong><br/>
        <strong>ॐ बुद्धिपादाय नमः।</strong><br/>
        जो बुद्धि को चरणों के रूप में धारण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१५४</strong><br/>
        <strong>ॐ गजानताय नमः।</strong><br/>
        जो विशाल आकार वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१५५</strong><br/>
        <strong>ॐ वरशक्तिहस्ताय नमः।</strong><br/>
        जो श्रेष्ठ शक्ति को हाथों में धारण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१५६</strong><br/>
        <strong>ॐ सम्पादानाय नमः।</strong><br/>
        जो संकल्पों को पूर्ण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१५७</strong><br/>
        <strong>ॐ कूर्मरूपाय नमः।</strong><br/>
        जो कछुए के समान आकार वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१५८</strong><br/>
        <strong>ॐ हेरम्बाय नमः।</strong><br/>
        जो हेरम्ब नामक गण के नेता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१५९</strong><br/>
        <strong>ॐ लम्बोदराय नमः।</strong><br/>
        जो लम्बे उदर वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१६०</strong><br/>
        <strong>ॐ एकदन्ताय नमः।</strong><br/>
        जो एकदन्त वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१६१</strong><br/>
        <strong>ॐ विनायकाय नमः।</strong><br/>
        जो विघ्नों के नाशक हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१६२</strong><br/>
        <strong>ॐ ऐकवक्त्राय नमः।</strong><br/>
        जो एक मुख वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१६३</strong><br/>
        <strong>ॐ सुमुखाय नमः।</strong><br/>
        जो सुन्दर मुख वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१६४</strong><br/>
        <strong>ॐ अप्रतिमाय नमः।</strong><br/>
        जो अतुलनीय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१६५</strong><br/>
        <strong>ॐ श्रीकान्ताय नमः।</strong><br/>
        जो लक्ष्मी जी के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१६६</strong><br/>
        <strong>ॐ सुखासनाय नमः।</strong><br/>
        जो सुखपूर्वक आसन पर विराजमान रहने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१६७</strong><br/>
        <strong>ॐ यशस्विने नमः।</strong><br/>
        जो यशस्वी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१६८</strong><br/>
        <strong>ॐ विघ्नकर्त्रे नमः।</strong><br/>
        जो दुष्टों के लिये विघ्न निर्माता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१६९</strong><br/>
        <strong>ॐ विघ्नहर्त्रे नमः।</strong><br/>
        जो भक्तों के विघ्नों को दूर करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१७०</strong><br/>
        <strong>ॐ विघ्नभर्त्रे नमः।</strong><br/>
        जो सभी विघ्नों के स्वामी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१७१</strong><br/>
        <strong>ॐ मन्त्रप्रभवे नमः।</strong><br/>
        जो मन्त्र से उत्पन्न होने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१७२</strong><br/>
        <strong>ॐ शरीरकुम्भसम्भवाय नमः।</strong><br/>
        जो पृथ्वी रूपी कुम्भ से शरीर रूप में प्रकट होने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१७३</strong><br/>
        <strong>ॐ शुभदाय नमः।</strong><br/>
        जो शुभ प्रदान करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१७४</strong><br/>
        <strong>ॐ शुभेप्सिताय नमः।</strong><br/>
        जो शुभ की कामना करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१७५</strong><br/>
        <strong>ॐ शुभकराय नमः।</strong><br/>
        जो कल्याण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१७६</strong><br/>
        <strong>ॐ शुभगुणाय नमः।</strong><br/>
        जो श्रेष्ठ गुणों वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१७७</strong><br/>
        <strong>ॐ शुभप्रदाय नमः।</strong><br/>
        जो कल्याण देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१७८</strong><br/>
        <strong>ॐ शुभप्रहाय नमः।</strong><br/>
        जो शुभ को पैदा करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१७९</strong><br/>
        <strong>ॐ शुभाङ्गाय नमः।</strong><br/>
        जो सुन्दर अंग वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१८०</strong><br/>
        <strong>ॐ शुभपावनाय नमः।</strong><br/>
        जो शुभता को पवित्र बनाने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१८१</strong><br/>
        <strong>ॐ सुरारिगणसंहर्त्रे नमः।</strong><br/>
        जो दैत्यों की सेनाओं का संहार करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१८२</strong><br/>
        <strong>ॐ कामार्थादिप्रदायकाय नमः।</strong><br/>
        जो काम, अर्थ आदि प्रदान करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१८३</strong><br/>
        <strong>ॐ कामदाय नमः।</strong><br/>
        जो कामनाओं को पूर्ण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१८४</strong><br/>
        <strong>ॐ कामकलाय नमः।</strong><br/>
        जो कामकला रूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१८५</strong><br/>
        <strong>ॐ कामपालाय नमः।</strong><br/>
        जो इच्छाओं की रक्षा करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१८६</strong><br/>
        <strong>ॐ कामरूपाय नमः।</strong><br/>
        जो कामना के रूप में प्रकट होने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१८७</strong><br/>
        <strong>ॐ कामकोटिकराय नमः।</strong><br/>
        जो करोड़ों कामनाओं को पूर्ण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१८८</strong><br/>
        <strong>ॐ रतिप्रियतमाय नमः।</strong><br/>
        जो रति के अत्यन्त प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१८९</strong><br/>
        <strong>ॐ रमणीयगुणाकराय नमः।</strong><br/>
        जो मनोहारी गुणों के आगार हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१९०</strong><br/>
        <strong>ॐ अर्थकामनिवरणाय नमः।</strong><br/>
        जो अर्थ की कामना को पूर्ण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१९१</strong><br/>
        <strong>ॐ गौरीगर्वोन्नतिच्छिदे नमः।</strong><br/>
        जो गौरी के गर्व भंग करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१९२</strong><br/>
        <strong>ॐ सारसदेहसंस्थाय नमः।</strong><br/>
        जो सारस पक्षी के समान देह वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१९३</strong><br/>
        <strong>ॐ परम्परागताय नमः।</strong><br/>
        जो परम्परा से आने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१९४</strong><br/>
        <strong>ॐ आधारशिलाय नमः।</strong><br/>
        जो सभी का आधार हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१९५</strong><br/>
        <strong>ॐ अधारशक्तये नमः।</strong><br/>
        जो आधारभूत शक्ति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१९६</strong><br/>
        <strong>ॐ अनवरताय नमः।</strong><br/>
        जो निरन्तर गतिशील रहने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१९७</strong><br/>
        <strong>ॐ मत्तेभरूपधारिणे नमः।</strong><br/>
        जो मस्त हाथी का रूप धारण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१९८</strong><br/>
        <strong>ॐ सिद्धिप्रदाय नमः।</strong><br/>
        जो सिद्धि प्रदान करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१९९</strong><br/>
        <strong>ॐ सुराधिनायकाय नमः।</strong><br/>
        जो देवताओं के स्वामी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२००</strong><br/>
        <strong>ॐ सुराचार्याय नमः।</strong><br/>
        जो देवताओं के आचार्य हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२०१</strong><br/>
        <strong>ॐ सुराधिकारधारिणे नमः।</strong><br/>
        जो देवताओं के अधिकार धारण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२०२</strong><br/>
        <strong>ॐ कुभकर्णारुद्रवासाय नमः।</strong><br/>
        जो कुभकर्ण की श्वास को रोकने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२०३</strong><br/>
        <strong>ॐ कनकग्रीवाय नमः।</strong><br/>
        जो स्वर्ण के समान गर्दन वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२०४</strong><br/>
        <strong>ॐ कनकप्रभावे नमः।</strong><br/>
        जो स्वर्ण के समान कान्तिवान हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२०५</strong><br/>
        <strong>ॐ काञ्चनगिरये नमः।</strong><br/>
        जो सुवर्ण पर्वत के समान हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२०६</strong><br/>
        <strong>ॐ काञ्चनप्रभाय नमः।</strong><br/>
        जो स्वर्ण के समान प्रकाश वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२०७</strong><br/>
        <strong>ॐ कालकूटविनाशनाय नमः।</strong><br/>
        जो कालकूट विष का नाश करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२०८</strong><br/>
        <strong>ॐ काललोकव्यवस्थापकाय नमः।</strong><br/>
        जो कालरूप में व्यवस्था स्थापित करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२०९</strong><br/>
        <strong>ॐ कालान्तकाय नमः।</strong><br/>
        जो काल का भी अन्त करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२१०</strong><br/>
        <strong>ॐ काञ्चनगिरिसंकाशाय नमः।</strong><br/>
        जो स्वर्ण पर्वत के समान प्रकाशवान हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२११</strong><br/>
        <strong>ॐ सर्वसिद्धिदाताराय नमः।</strong><br/>
        जो सभी सिद्धियों को देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२१२</strong><br/>
        <strong>ॐ नित्यानन्दकराय नमः।</strong><br/>
        जो नित्य आनन्द देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२१३</strong><br/>
        <strong>ॐ पारं ब्रह्मोपमाकृतिकाय नमः।</strong><br/>
        जो परब्रह्म के समान आकार वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२१४</strong><br/>
        <strong>ॐ वेत्रदण्डधराय नमः।</strong><br/>
        जो बेंत की छड़ी धारण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२१५</strong><br/>
        <strong>ॐ रक्तग्रीवाय नमः।</strong><br/>
        जो लाल गर्दन वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२१६</strong><br/>
        <strong>ॐ श्रीमते नमः।</strong><br/>
        जो सम्पत्ति के स्वामी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२१७</strong><br/>
        <strong>ॐ श्रीवल्लभाय नमः।</strong><br/>
        जो लक्ष्मी के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२१८</strong><br/>
        <strong>ॐ श्रीवासाय नमः।</strong><br/>
        जिनका वास श्री के पास है<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२१९</strong><br/>
        <strong>ॐ श्रीदाय नमः।</strong><br/>
        जो श्री प्रदान करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२२०</strong><br/>
        <strong>ॐ श्रीधराय नमः।</strong><br/>
        जो श्री को धारण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२२१</strong><br/>
        <strong>ॐ श्रीकराय नमः।</strong><br/>
        जो श्री प्रदान करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२२२</strong><br/>
        <strong>ॐ श्रीयुक्ताय नमः।</strong><br/>
        जो श्री से युक्त हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२२३</strong><br/>
        <strong>ॐ श्रीमूर्तये नमः।</strong><br/>
        जो श्री की मूर्ति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२२४</strong><br/>
        <strong>ॐ श्रीपतये नमः।</strong><br/>
        जो श्री के स्वामी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२२५</strong><br/>
        <strong>ॐ श्रीप्रदाय नमः।</strong><br/>
        जो श्री देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२२६</strong><br/>
        <strong>ॐ सर्वेन्द्रियगुणाधीशाय नमः।</strong><br/>
        जो समस्त इन्द्रियों के गुणों के अधीश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२२७</strong><br/>
        <strong>ॐ सर्वोपद्रवहारिणे नमः।</strong><br/>
        जो सभी उपद्रवों को दूर करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२२८</strong><br/>
        <strong>ॐ प्रमत्तदर्प दलनाय नमः।</strong><br/>
        जो अहंकारियों के अहंकार का नाश करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२२९</strong><br/>
        <strong>ॐ प्रमत्तदर्पपीडकाय नमः।</strong><br/>
        जो घमण्डियों को पीड़ा देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२३०</strong><br/>
        <strong>ॐ प्रलयान्तकराय नमः।</strong><br/>
        जो प्रलय के भी अन्त करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२३१</strong><br/>
        <strong>ॐ वागीशाय नमः।</strong><br/>
        जो वाणी के स्वामी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२३२</strong><br/>
        <strong>ॐ महागणपतये नमः।</strong><br/>
        जो महान गणपति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२३३</strong><br/>
        <strong>ॐ गजकर्णकाय नमः।</strong><br/>
        जो हाथी के कान वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२३४</strong><br/>
        <strong>ॐ गजकर्णभुवे नमः।</strong><br/>
        जो गजकर्ण से उत्पन्न होने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२३५</strong><br/>
        <strong>ॐ गजगामिने नमः।</strong><br/>
        जो हाथी की तरह गमन करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२३६</strong><br/>
        <strong>ॐ गजानताय नमः।</strong><br/>
        जो हाथी की तरह विशाल आकार वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२३७</strong><br/>
        <strong>ॐ गजेशाय नमः।</strong><br/>
        जो हाथियों के स्वामी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२३८</strong><br/>
        <strong>ॐ गजकर्णधराय नमः।</strong><br/>
        जो हाथी के कान धारण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२३९</strong><br/>
        <strong>ॐ गजेन्द्राय नमः।</strong><br/>
        जो गजराज हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२४०</strong><br/>
        <strong>ॐ गजप्रधानाय नमः।</strong><br/>
        जो हाथियों में प्रधान हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२४१</strong><br/>
        <strong>ॐ गजरक्षाय नमः।</strong><br/>
        जो हाथियों की रक्षा करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२४२</strong><br/>
        <strong>ॐ गजबालकाय नमः।</strong><br/>
        जो बालक हाथी के समान हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२४३</strong><br/>
        <strong>ॐ गजमेधभुवे नमः।</strong><br/>
        जो गजमेध यज्ञ से प्रकट होने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२४४</strong><br/>
        <strong>ॐ गजारिद्युम्नधारिणे नमः।</strong><br/>
        जो गजों के शत्रुओं का तेज धारण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२४५</strong><br/>
        <strong>ॐ गजराजगार्भपूजिताय नमः।</strong><br/>
        जो गजराज के गर्भ में पूजे जाने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२४६</strong><br/>
        <strong>ॐ भूतादिपतये नमः।</strong><br/>
        जो भूतों आदि के स्वामी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२४७</strong><br/>
        <strong>ॐ भूतप्रेतपिशाचादिप्रमथगणसंस्थिताय नमः।</strong><br/>
        जो भूत, प्रेत, पिशाच आदि प्रमथगणों के साथ रहने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२४८</strong><br/>
        <strong>ॐ पारदेशिकसिद्धिकराय नमः।</strong><br/>
        जो विदेशी सिद्धि प्रदान करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२४९</strong><br/>
        <strong>ॐ पञ्चमुखाय नमः।</strong><br/>
        जो पाँच मुख वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२५०</strong><br/>
        <strong>ॐ पञ्चहस्ताय नमः।</strong><br/>
        जो पाँच हाथ वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२५१</strong><br/>
        <strong>ॐ पञ्चाक्षाय नमः।</strong><br/>
        जो पाँच अक्षर वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२५२</strong><br/>
        <strong>ॐ पञ्चभूतस्वरूपाय नमः।</strong><br/>
        जो पञ्चभूत स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२५३</strong><br/>
        <strong>ॐ पञ्चप्राणाय नमः।</strong><br/>
        जो पञ्चप्राण स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२५४</strong><br/>
        <strong>ॐ पञ्चकोशाय नमः।</strong><br/>
        जो पञ्चकोश रूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२५५</strong><br/>
        <strong>ॐ पञ्चतत्वस्वरूपाय नमः।</strong><br/>
        जो पञ्चतत्व स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२५६</strong><br/>
        <strong>ॐ पञ्चवक्त्राय नमः।</strong><br/>
        जो पाँच मुख वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२५७</strong><br/>
        <strong>ॐ पञ्चविधगुणाधीशाय नमः।</strong><br/>
        जो पाँच प्रकार के गुणों के स्वामी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२५८</strong><br/>
        <strong>ॐ सर्वात्मकाय नमः।</strong><br/>
        जो सभी में आत्मा रूप में विद्यमान हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२५९</strong><br/>
        <strong>ॐ सर्वविज्ञानसम्पन्नाय नमः।</strong><br/>
        जो सभी विज्ञानों से सम्पन्न हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२६०</strong><br/>
        <strong>ॐ सर्वज्ञाय नमः।</strong><br/>
        जो सब कुछ जानने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२६१</strong><br/>
        <strong>ॐ सर्वतोमुखाय नमः।</strong><br/>
        जो सभी ओर मुख वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२६२</strong><br/>
        <strong>ॐ सर्वानन्दमयाय नमः।</strong><br/>
        जो सभी में आनन्द रूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२६३</strong><br/>
        <strong>ॐ सर्वसाक्षिणे नमः।</strong><br/>
        जो सभी के साक्षी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२६४</strong><br/>
        <strong>ॐ सर्वमङ्गलकारकाय नमः।</strong><br/>
        जो सभी मंगल के कारक हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२६५</strong><br/>
        <strong>ॐ सर्वविष्यविहारिणे नमः।</strong><br/>
        जो सभी विषयों में विहार करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२६६</strong><br/>
        <strong>ॐ सर्वदुःखप्रशमनाय नमः।</strong><br/>
        जो सभी दुःखों को शान्त करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२६७</strong><br/>
        <strong>ॐ सर्वाशुभविघ्ने नमः।</strong><br/>
        जो सभी अशुभ विघ्नों को दूर करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२६८</strong><br/>
        <strong>ॐ सर्वकारणकारणाय नमः।</strong><br/>
        जो सभी कारणों के कारण हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२६९</strong><br/>
        <strong>ॐ सर्वकारकाय नमः।</strong><br/>
        जो सभी के कर्ता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२७०</strong><br/>
        <strong>ॐ सर्वकामदाय नमः।</strong><br/>
        जो सभी कामनाओं को पूर्ण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२७१</strong><br/>
        <strong>ॐ सर्वलोकगुरवे नमः।</strong><br/>
        जो सभी लोकों के गुरु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२७२</strong><br/>
        <strong>ॐ सर्वलोकाधिपाय नमः।</strong><br/>
        जो सभी लोकों के अधिपति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२७३</strong><br/>
        <strong>ॐ सर्वलोकप्रियाय नमः।</strong><br/>
        जो सभी लोकों के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२७४</strong><br/>
        <strong>ॐ सर्वलोकसुखावहाय नमः।</strong><br/>
        जो सभी लोकों में सुख लाने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२७५</strong><br/>
        <strong>ॐ सर्वदेवाधिदेवाय नमः।</strong><br/>
        जो सभी देवों के भी देव हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२७६</strong><br/>
        <strong>ॐ सर्वेश्वरेश्वराय नमः।</strong><br/>
        जो सभी ईश्वरों के ईश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२७७</strong><br/>
        <strong>ॐ सर्वमयाय नमः।</strong><br/>
        जो सभी में व्याप्त हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२७८</strong><br/>
        <strong>ॐ सर्वान्तर्यामिने नमः।</strong><br/>
        जो सभी के अन्तर्यामी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२७९</strong><br/>
        <strong>ॐ सर्वभूतचैतन्यभूताय नमः।</strong><br/>
        जो सभी भूतों में चैतन्य रूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२८०</strong><br/>
        <strong>ॐ सर्ववेदान्तसिद्धान्ताय नमः।</strong><br/>
        जो सभी वेदान्त के सिद्धान्त हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२८१</strong><br/>
        <strong>ॐ सर्वयोगेश्वराय नमः।</strong><br/>
        जो सभी योगियों के ईश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२८२</strong><br/>
        <strong>ॐ सर्वयज्ञफलप्रदाय नमः।</strong><br/>
        जो सभी यज्ञों का फल देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२८३</strong><br/>
        <strong>ॐ सर्वरसाय नमः।</strong><br/>
        जो सभी रसों के स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२८४</strong><br/>
        <strong>ॐ सर्वगन्धविशेषज्ञाय नमः।</strong><br/>
        जो सभी गन्धों के विशेषज्ञ हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२८५</strong><br/>
        <strong>ॐ सर्वशब्दमयाय नमः।</strong><br/>
        जो सभी शब्दों के रूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२८६</strong><br/>
        <strong>ॐ सर्वस्पर्शस्वरूपाय नमः।</strong><br/>
        जो सभी स्पर्शों के स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२८७</strong><br/>
        <strong>ॐ सर्वरूपधराय नमः।</strong><br/>
        जो सभी रूप धारण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२८८</strong><br/>
        <strong>ॐ अखण्डैकरसाय नमः।</strong><br/>
        जो अखण्ड एकरस हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२८९</strong><br/>
        <strong>ॐ चिदानन्दाय नमः।</strong><br/>
        जो चित् और आनन्द स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२९०</strong><br/>
        <strong>ॐ ब्रह्मानन्दाय नमः।</strong><br/>
        जो ब्रह्मानन्द स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२९१</strong><br/>
        <strong>ॐ परमानन्दाय नमः।</strong><br/>
        जो परमानन्द स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२९२</strong><br/>
        <strong>ॐ परापरानन्दाय नमः।</strong><br/>
        जो परापर आनन्द स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२९३</strong><br/>
        <strong>ॐ सच्चिदानन्दविग्रहाय नमः।</strong><br/>
        जो सच्चिदानन्द विग्रह हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२९४</strong><br/>
        <strong>ॐ ज्ञानानन्दमयाय नमः।</strong><br/>
        जो ज्ञान और आनन्द से भरपूर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२९५</strong><br/>
        <strong>ॐ योगानन्दाय नमः।</strong><br/>
        जो योग के आनन्द स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२९६</strong><br/>
        <strong>ॐ युगादये नमः।</strong><br/>
        जो युगों के आदि में हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२९७</strong><br/>
        <strong>ॐ युगावर्ताय नमः।</strong><br/>
        जो युगों का पुनराविर्भाव करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२९८</strong><br/>
        <strong>ॐ युगान्ताय नमः।</strong><br/>
        जो युगों के अन्त में हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>२९९</strong><br/>
        <strong>ॐ युगमूर्ध्ने नमः।</strong><br/>
        जो युगों के मुख्य हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३००</strong><br/>
        <strong>ॐ युगधर्मप्रवर्तकाय नमः।</strong><br/>
        जो युगधर्म का प्रवर्तन करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३०१</strong><br/>
        <strong>ॐ योगसम्राजे नमः।</strong><br/>
        जो योग के सम्राट हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३०२</strong><br/>
        <strong>ॐ योगसिद्धिदाताराय नमः।</strong><br/>
        जो योग सिद्धि प्रदान करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३०३</strong><br/>
        <strong>ॐ अष्टसिद्धिदाताराय नमः।</strong><br/>
        जो अष्टसिद्धि प्रदान करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३०४</strong><br/>
        <strong>ॐ नवनिधिदाताराय नमः।</strong><br/>
        जो नवनिधि प्रदान करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३०५</strong><br/>
        <strong>ॐ राजमुकुटमण्डिताय नमः।</strong><br/>
        जो राजमुकुट से सुशोभित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३०६</strong><br/>
        <strong>ॐ राजराजेश्वराय नमः।</strong><br/>
        जो राजाओं के राजा और ईश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३०७</strong><br/>
        <strong>ॐ राज्ञापालकाय नमः।</strong><br/>
        जो राज्य की रक्षा करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३०८</strong><br/>
        <strong>ॐ राष्ट्रवर्धनाय नमः।</strong><br/>
        जो राष्ट्र की वृद्धि करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३०९</strong><br/>
        <strong>ॐ रत्नगर्भाय नमः।</strong><br/>
        जो रत्नों के गर्भ में निवास करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३१०</strong><br/>
        <strong>ॐ रत्नपूर्णाय नमः।</strong><br/>
        जो रत्नों से भरपूर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३११</strong><br/>
        <strong>ॐ रत्नमयाय नमः।</strong><br/>
        जो रत्नमय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३१२</strong><br/>
        <strong>ॐ रत्नाभूषणाय नमः।</strong><br/>
        जो रत्नों के आभूषण धारण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३१३</strong><br/>
        <strong>ॐ रत्नदन्ताय नमः।</strong><br/>
        जो रत्न के समान दाँत वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३१४</strong><br/>
        <strong>ॐ चिन्तामणये नमः।</strong><br/>
        जो चिन्तामणि हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३१५</strong><br/>
        <strong>ॐ चिन्तामणिप्रदाय नमः।</strong><br/>
        जो चिन्तामणि प्रदान करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३१६</strong><br/>
        <strong>ॐ चिन्तामणिसद्गुणाय नमः।</strong><br/>
        जो चिन्तामणि के समान सद्गुण वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३१७</strong><br/>
        <strong>ॐ चिन्तामणिकलाधराय नमः।</strong><br/>
        जो चिन्तामणि की कला धारण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३१८</strong><br/>
        <strong>ॐ वज्रदेहाय नमः।</strong><br/>
        जो वज्र के समान देह वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३१९</strong><br/>
        <strong>ॐ वज्रकायाय नमः।</strong><br/>
        जो वज्र के समान शरीर वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३२०</strong><br/>
        <strong>ॐ वज्राङ्गाय नमः।</strong><br/>
        जो वज्र के समान अंग वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३२१</strong><br/>
        <strong>ॐ वज्रमयाय नमः।</strong><br/>
        जो वज्रमय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३२२</strong><br/>
        <strong>ॐ व्रजधर्मरक्षकाय नमः।</strong><br/>
        जो व्रज के धर्म की रक्षा करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३२३</strong><br/>
        <strong>ॐ वरगुणाय नमः।</strong><br/>
        जो श्रेष्ठ गुण वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३२४</strong><br/>
        <strong>ॐ वरेण्याय नमः।</strong><br/>
        जो वरणीय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३२५</strong><br/>
        <strong>ॐ वरप्रदाय नमः।</strong><br/>
        जो वरदान देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३२६</strong><br/>
        <strong>ॐ वरिष्ठाय नमः।</strong><br/>
        जो सबसे श्रेष्ठ हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३२७</strong><br/>
        <strong>ॐ वराङ्गाय नमः।</strong><br/>
        जो सुन्दर अंग वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३२८</strong><br/>
        <strong>ॐ वरेन्द्राय नमः।</strong><br/>
        जो श्रेष्ठ इन्द्र हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३२९</strong><br/>
        <strong>ॐ वरधीशाय नमः।</strong><br/>
        जो वरदान के ईश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३३०</strong><br/>
        <strong>ॐ विशेषाय नमः।</strong><br/>
        जो विशेष गुण वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३३१</strong><br/>
        <strong>ॐ विशेषज्ञाय नमः।</strong><br/>
        जो विशेषज्ञ हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३३२</strong><br/>
        <strong>ॐ विश्वनाथाय नमः।</strong><br/>
        जो विश्व के नाथ हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३३३</strong><br/>
        <strong>ॐ विश्वपूज्याय नमः।</strong><br/>
        जो विश्व में पूज्य हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३३४</strong><br/>
        <strong>ॐ विश्वप्रियाय नमः।</strong><br/>
        जो विश्व के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३३५</strong><br/>
        <strong>ॐ विश्वनेत्राय नमः।</strong><br/>
        जो विश्व के नेता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३३६</strong><br/>
        <strong>ॐ विश्वोद्धारकाय नमः।</strong><br/>
        जो विश्व का उद्धार करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३३७</strong><br/>
        <strong>ॐ विश्वग्रासाय नमः।</strong><br/>
        जो विश्व को ग्रसने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३३८</strong><br/>
        <strong>ॐ विश्वदक्षाय नमः।</strong><br/>
        जो विश्व में कुशल हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३३९</strong><br/>
        <strong>ॐ विश्वकर्मणे नमः।</strong><br/>
        जो विश्व के कर्मकर्ता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३४०</strong><br/>
        <strong>ॐ विश्वयोनये नमः।</strong><br/>
        जो विश्व की योनि हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३४१</strong><br/>
        <strong>ॐ विश्वसाक्षिणे नमः।</strong><br/>
        जो विश्व के साक्षी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३४२</strong><br/>
        <strong>ॐ विश्वात्मने नमः।</strong><br/>
        जो विश्व की आत्मा हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३४३</strong><br/>
        <strong>ॐ विश्वेश्वराय नमः।</strong><br/>
        जो विश्व के ईश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३४४</strong><br/>
        <strong>ॐ विघ्नराजाय नमः।</strong><br/>
        जो विघ्नों के राजा हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३४५</strong><br/>
        <strong>ॐ विनायकराजाय नमः।</strong><br/>
        जो विनायकों के राजा हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३४६</strong><br/>
        <strong>ॐ गणपति राजाय नमः।</strong><br/>
        जो गणपतियों के राजा हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३४७</strong><br/>
        <strong>ॐ गणराजाय नमः।</strong><br/>
        जो गणों के राजा हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३४८</strong><br/>
        <strong>ॐ गणराजाधिराजाय नमः।</strong><br/>
        जो गणराजों के भी राजा हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३४९</strong><br/>
        <strong>ॐ गणनायकाय नमः।</strong><br/>
        जो गणों के नायक हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३५०</strong><br/>
        <strong>ॐ गणाध्यक्षाय नमः।</strong><br/>
        जो गणों के अध्यक्ष हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३५१</strong><br/>
        <strong>ॐ गणेशानपायिने नमः।</strong><br/>
        जो गणेश रूप में सदैव रहने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३५२</strong><br/>
        <strong>ॐ गणस्वामिने नमः।</strong><br/>
        जो गणों के स्वामी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३५३</strong><br/>
        <strong>ॐ गणादिदेवाय नमः।</strong><br/>
        जो गणों के आदि देव हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३५४</strong><br/>
        <strong>ॐ गणाग्रण्ये नमः।</strong><br/>
        जो गणों में अग्रणी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३५५</strong><br/>
        <strong>ॐ गणोत्तमाय नमः।</strong><br/>
        जो गणों में उत्तम हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३५६</strong><br/>
        <strong>ॐ गणप्रवीणाय नमः।</strong><br/>
        जो गणों में प्रवीण हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३५७</strong><br/>
        <strong>ॐ ईशानपुत्राय नमः।</strong><br/>
        जो ईशान के पुत्र हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३५८</strong><br/>
        <strong>ॐ ईशानप्रियाय नमः।</strong><br/>
        जो ईशान के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३५९</strong><br/>
        <strong>ॐ दयालुवे नमः।</strong><br/>
        जो दयालु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३६०</strong><br/>
        <strong>ॐ दयासागराय नमः।</strong><br/>
        जो दया के सागर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३६१</strong><br/>
        <strong>ॐ दयासिन्धवे नमः।</strong><br/>
        जो दया के समुद्र हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३६२</strong><br/>
        <strong>ॐ दयानिधये नमः।</strong><br/>
        जो दया के खजाने हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३६३</strong><br/>
        <strong>ॐ दयाकराय नमः।</strong><br/>
        जो दया करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३६४</strong><br/>
        <strong>ॐ दयाद्राय नमः।</strong><br/>
        जो दया से द्रवित होने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३६५</strong><br/>
        <strong>ॐ दयाभावाय नमः।</strong><br/>
        जिनमें दयाभाव है<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३६६</strong><br/>
        <strong>ॐ अद्वैताय नमः।</strong><br/>
        जो अद्वैत स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३६७</strong><br/>
        <strong>ॐ द्वैतवर्जिताय नमः।</strong><br/>
        जो द्वैत से रहित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३६८</strong><br/>
        <strong>ॐ द्वन्द्वातीताय नमः।</strong><br/>
        जो द्वन्द्व से अतीत हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३६९</strong><br/>
        <strong>ॐ द्वन्द्वराहित्याय नमः।</strong><br/>
        जो द्वन्द्व से रहित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३७०</strong><br/>
        <strong>ॐ नित्यानन्दस्वरूपाय नमः।</strong><br/>
        जो नित्यानन्द स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३७१</strong><br/>
        <strong>ॐ परमसुखकराय नमः।</strong><br/>
        जो परम सुख देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३७२</strong><br/>
        <strong>ॐ परमपावनाय नमः।</strong><br/>
        जो परम पावन हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३७३</strong><br/>
        <strong>ॐ परमकल्याणाय नमः।</strong><br/>
        जो परम कल्याणकारी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३७४</strong><br/>
        <strong>ॐ परमक्षेमकराय नमः।</strong><br/>
        जो परम क्षेम देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३७५</strong><br/>
        <strong>ॐ परमैश्वर्यदायकाय नमः।</strong><br/>
        जो परम ऐश्वर्य देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३७६</strong><br/>
        <strong>ॐ परमारामास्पदाय नमः।</strong><br/>
        जो परम विश्राम के स्थान हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३७७</strong><br/>
        <strong>ॐ परमोदाराय नमः।</strong><br/>
        जो परम उदार हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३७८</strong><br/>
        <strong>ॐ परमोत्कर्षदायकाय नमः।</strong><br/>
        जो परम उत्कर्ष देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३७९</strong><br/>
        <strong>ॐ परमौषधाय नमः।</strong><br/>
        जो परम औषधि हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३८०</strong><br/>
        <strong>ॐ पराद्वैतस्वरूपाय नमः।</strong><br/>
        जो पराद्वैत स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३८१</strong><br/>
        <strong>ॐ निराकाराय नमः।</strong><br/>
        जो निराकार हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३८२</strong><br/>
        <strong>ॐ निरामयाय नमः।</strong><br/>
        जो रोग रहित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३८३</strong><br/>
        <strong>ॐ निरुपमाय नमः।</strong><br/>
        जो तुलना रहित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३८४</strong><br/>
        <strong>ॐ निरुपद्रवाय नमः।</strong><br/>
        जो उपद्रव रहित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३८५</strong><br/>
        <strong>ॐ निराश्रयाय नमः।</strong><br/>
        जो आश्रय की आवश्यकता नहीं रखते<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३८६</strong><br/>
        <strong>ॐ निराहाराय नमः।</strong><br/>
        जो आहार की आवश्यकता नहीं रखते<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३८७</strong><br/>
        <strong>ॐ निराधाराय नमः।</strong><br/>
        जो आधार की आवश्यकता नहीं रखते<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३८८</strong><br/>
        <strong>ॐ निरालम्बाय नमः।</strong><br/>
        जो अलम्बन रहित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३८९</strong><br/>
        <strong>ॐ निरन्तराय नमः।</strong><br/>
        जो निरन्तर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३९०</strong><br/>
        <strong>ॐ निरामिषाय नमः।</strong><br/>
        जो मांसाहार रहित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३९१</strong><br/>
        <strong>ॐ निर्गुणाय नमः।</strong><br/>
        जो गुणातीत हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३९२</strong><br/>
        <strong>ॐ निर्विकल्पाय नमः।</strong><br/>
        जो विकल्प रहित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३९३</strong><br/>
        <strong>ॐ निर्विकाराय नमः।</strong><br/>
        जो विकार रहित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३९४</strong><br/>
        <strong>ॐ निर्विशेषाय नमः।</strong><br/>
        जो विशेषता रहित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३९५</strong><br/>
        <strong>ॐ निर्लेपाय नमः।</strong><br/>
        जो लेप रहित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३९६</strong><br/>
        <strong>ॐ निर्दोषाय नमः।</strong><br/>
        जो दोष रहित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३९७</strong><br/>
        <strong>ॐ निर्भयाय नमः।</strong><br/>
        जो भय रहित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३९८</strong><br/>
        <strong>ॐ निष्कामाय नमः।</strong><br/>
        जो काम रहित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>३९९</strong><br/>
        <strong>ॐ निष्कलङ्काय नमः।</strong><br/>
        जो कलंक रहित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४००</strong><br/>
        <strong>ॐ निष्पाप्माय नमः।</strong><br/>
        जो पाप रहित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४०१</strong><br/>
        <strong>ॐ निष्कलाय नमः।</strong><br/>
        जो कला रहित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४०२</strong><br/>
        <strong>ॐ निष्क्रियाय नमः।</strong><br/>
        जो क्रिया रहित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४०३</strong><br/>
        <strong>ॐ निष्कपटाय नमः।</strong><br/>
        जो कपट रहित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४०४</strong><br/>
        <strong>ॐ निष्ठुराय नमः।</strong><br/>
        जो क्रूरता रहित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४०५</strong><br/>
        <strong>ॐ शान्ताय नमः।</strong><br/>
        जो शान्त स्वभाव वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४०६</strong><br/>
        <strong>ॐ शान्तिदाय नमः।</strong><br/>
        जो शान्ति प्रदान करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४०७</strong><br/>
        <strong>ॐ शान्तिकराय नमः।</strong><br/>
        जो शान्ति करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४०८</strong><br/>
        <strong>ॐ शान्तिप्रदाय नमः।</strong><br/>
        जो शान्ति देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४०९</strong><br/>
        <strong>ॐ शान्तिनिलयाय नमः।</strong><br/>
        जो शान्ति के निवास हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४१०</strong><br/>
        <strong>ॐ सान्त्वनाय नमः।</strong><br/>
        जो सान्त्वना देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४११</strong><br/>
        <strong>ॐ शमकराय नमः।</strong><br/>
        जो शम प्रदान करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४१२</strong><br/>
        <strong>ॐ दमकराय नमः।</strong><br/>
        जो दम प्रदान करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४१३</strong><br/>
        <strong>ॐ क्षमाकराय नमः।</strong><br/>
        जो क्षमा प्रदान करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४१४</strong><br/>
        <strong>ॐ सुशान्ताय नमः।</strong><br/>
        जो अत्यन्त शान्त हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४१५</strong><br/>
        <strong>ॐ शमदमयुक्ताय नमः।</strong><br/>
        जो शम और दम से युक्त हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४१६</strong><br/>
        <strong>ॐ अहिंसकाय नमः।</strong><br/>
        जो अहिंसक हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४१७</strong><br/>
        <strong>ॐ महिंसकारकाय नमः।</strong><br/>
        जो महान अहिंसा के कारक हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४१८</strong><br/>
        <strong>ॐ कमनीयानन्दाय नमः।</strong><br/>
        जो मनोहर आनन्द वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४१९</strong><br/>
        <strong>ॐ मनोहराय नमः।</strong><br/>
        जो मन को हरने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४२०</strong><br/>
        <strong>ॐ मनोज्ञाय नमः।</strong><br/>
        जो मन को प्रिय लगने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४२१</strong><br/>
        <strong>ॐ मनस्विने नमः।</strong><br/>
        जो महान मन वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४२२</strong><br/>
        <strong>ॐ मनोरमाय नमः।</strong><br/>
        जो मनोरम हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४२३</strong><br/>
        <strong>ॐ मनोवाञ्छितदायकाय नमः।</strong><br/>
        जो मन की वांछित चीजें देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४२४</strong><br/>
        <strong>ॐ चित्तहारिणे नमः।</strong><br/>
        जो चित्त को हरने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४२५</strong><br/>
        <strong>ॐ चित्तप्रसादकाय नमः।</strong><br/>
        जो चित्त को प्रसन्न करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४२६</strong><br/>
        <strong>ॐ चित्तैकाग्र्यदायकाय नमः।</strong><br/>
        जो चित्त की एकाग्रता देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४२७</strong><br/>
        <strong>ॐ चित्तानन्दकराय नमः।</strong><br/>
        जो चित्त में आनन्द करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४२८</strong><br/>
        <strong>ॐ हृद्यानन्दप्रदाय नमः।</strong><br/>
        जो हृदय में आनन्द देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४२९</strong><br/>
        <strong>ॐ हृदयस्थायिने नमः।</strong><br/>
        जो हृदय में स्थित रहने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४३०</strong><br/>
        <strong>ॐ हृदयप्रियाय नमः।</strong><br/>
        जो हृदय के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४३१</strong><br/>
        <strong>ॐ हृदयेशाय नमः।</strong><br/>
        जो हृदय के ईश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४३२</strong><br/>
        <strong>ॐ हृदयगुह्यगोचराय नमः।</strong><br/>
        जो हृदय की गुप्त गुफा में निवास करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४३३</strong><br/>
        <strong>ॐ सर्वहृदयवासिने नमः।</strong><br/>
        जो सभी के हृदय में निवास करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४३४</strong><br/>
        <strong>ॐ सर्वान्तःकरणप्रभवे नमः।</strong><br/>
        जो सभी के अन्तःकरण में प्रकट होने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४३५</strong><br/>
        <strong>ॐ सर्वान्तर्यामिने नमः।</strong><br/>
        जो सभी के अन्तर्यामी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४३६</strong><br/>
        <strong>ॐ अन्तर्यामिगुरवे नमः।</strong><br/>
        जो अन्तर्यामी गुरु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४३७</strong><br/>
        <strong>ॐ अन्तर्यामिप्रियाय नमः।</strong><br/>
        जो अन्तर्यामी के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४३८</strong><br/>
        <strong>ॐ अन्तर्यामिरूपाय नमः।</strong><br/>
        जो अन्तर्यामी रूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४३९</strong><br/>
        <strong>ॐ बहिरन्तर्विनिर्मुक्ताय नमः।</strong><br/>
        जो बाहर और अन्दर से मुक्त हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४४०</strong><br/>
        <strong>ॐ बहिरन्तरसाक्षिणे नमः।</strong><br/>
        जो बाहर और अन्दर के साक्षी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४४१</strong><br/>
        <strong>ॐ बहिर्मुखविमोहनाय नमः।</strong><br/>
        जो बहिर्मुख को मोहित करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४४२</strong><br/>
        <strong>ॐ अन्तर्मुखसुखप्रदाय नमः।</strong><br/>
        जो अन्तर्मुख को सुख देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४४३</strong><br/>
        <strong>ॐ बाह्यदृष्टिविनाशकाय नमः।</strong><br/>
        जो बाह्य दृष्टि का विनाश करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४४४</strong><br/>
        <strong>ॐ आन्तरिकदृष्टिप्रदाय नमः।</strong><br/>
        जो आन्तरिक दृष्टि देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४४५</strong><br/>
        <strong>ॐ पञ्चकोशविवर्जिताय नमः।</strong><br/>
        जो पञ्चकोश से मुक्त हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४४६</strong><br/>
        <strong>ॐ पञ्चकोशान्तरालस्थाय नमः।</strong><br/>
        जो पञ्चकोश के मध्य में स्थित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४४७</strong><br/>
        <strong>ॐ पञ्चकोशमयाय नमः।</strong><br/>
        जो पञ्चकोशमय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४४८</strong><br/>
        <strong>ॐ पञ्चकोशाधिष्ठानाय नमः।</strong><br/>
        जो पञ्चकोश के अधिष्ठान हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४४९</strong><br/>
        <strong>ॐ पञ्चकोशसाक्षिणे नमः।</strong><br/>
        जो पञ्चकोश के साक्षी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४५०</strong><br/>
        <strong>ॐ पञ्चकोशातीताय नमः।</strong><br/>
        जो पञ्चकोश से अतीत हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४५१</strong><br/>
        <strong>ॐ त्रिगुणातीताय नमः।</strong><br/>
        जो त्रिगुण से अतीत हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४५२</strong><br/>
        <strong>ॐ त्रिगुणात्मकाय नमः।</strong><br/>
        जो त्रिगुणात्मक हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४५३</strong><br/>
        <strong>ॐ त्रिगुणाश्रयाय नमः।</strong><br/>
        जो त्रिगुण के आश्रय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४५४</strong><br/>
        <strong>ॐ त्रिगुणसाक्षिणे नमः।</strong><br/>
        जो त्रिगुण के साक्षी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४५५</strong><br/>
        <strong>ॐ त्रिमूर्तिस्वरूपाय नमः।</strong><br/>
        जो त्रिमूर्ति स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४५६</strong><br/>
        <strong>ॐ त्रिदेवस्वरूपिणे नमः।</strong><br/>
        जो त्रिदेव स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४५७</strong><br/>
        <strong>ॐ त्रिकालदर्शिने नमः।</strong><br/>
        जो त्रिकाल को देखने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४५८</strong><br/>
        <strong>ॐ त्रिकालज्ञाय नमः।</strong><br/>
        जो त्रिकाल के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४५९</strong><br/>
        <strong>ॐ त्रिकालगोचराय नमः।</strong><br/>
        जो त्रिकाल में गोचर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४६०</strong><br/>
        <strong>ॐ त्रिलोकेशाय नमः।</strong><br/>
        जो त्रिलोक के ईश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४६१</strong><br/>
        <strong>ॐ त्रिलोकनाथाय नमः।</strong><br/>
        जो त्रिलोक के नाथ हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४६२</strong><br/>
        <strong>ॐ त्रिलोकपूज्याय नमः।</strong><br/>
        जो त्रिलोक में पूज्य हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४६३</strong><br/>
        <strong>ॐ त्रिलोकमान्याय नमः।</strong><br/>
        जो त्रिलोक में मान्य हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४६४</strong><br/>
        <strong>ॐ त्रिलोकप्रियाय नमः।</strong><br/>
        जो त्रिलोक के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४६५</strong><br/>
        <strong>ॐ त्रिलोकवन्द्याय नमः।</strong><br/>
        जो त्रिलोक में वन्दनीय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४६६</strong><br/>
        <strong>ॐ त्रिलोकगुरवे नमः।</strong><br/>
        जो त्रिलोक के गुरु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४६७</strong><br/>
        <strong>ॐ त्रिलोकदीपकाय नमः।</strong><br/>
        जो त्रिलोक को प्रकाशित करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४६८</strong><br/>
        <strong>ॐ त्रिवेदवेदाङ्गविदे नमः।</strong><br/>
        जो त्रिवेद और वेदांग के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४६९</strong><br/>
        <strong>ॐ त्रिषष्ठिकलामयाय नमः।</strong><br/>
        जो त्रिषष्ठि कलाओं से युक्त हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४७०</strong><br/>
        <strong>ॐ षड्गुणैश्वर्यसम्पन्नाय नमः।</strong><br/>
        जो षड्गुण ऐश्वर्य से सम्पन्न हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४७१</strong><br/>
        <strong>ॐ षडाकारवर्जिताय नमः।</strong><br/>
        जो षडाकार से रहित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४७२</strong><br/>
        <strong>ॐ षड्विकारशून्याय नमः।</strong><br/>
        जो षड्विकार से शून्य हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४७३</strong><br/>
        <strong>ॐ षड्गुणातीताय नमः।</strong><br/>
        जो षड्गुण से अतीत हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४७४</strong><br/>
        <strong>ॐ षड्दर्शनप्रवर्तकाय नमः।</strong><br/>
        जो षड्दर्शन के प्रवर्तक हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४७५</strong><br/>
        <strong>ॐ षड्दर्शनसमन्वयिने नमः।</strong><br/>
        जो षड्दर्शन का समन्वय करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४७६</strong><br/>
        <strong>ॐ षड्दर्शनसिद्धान्तवित् नमः।</strong><br/>
        जो षड्दर्शन के सिद्धान्त के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४७७</strong><br/>
        <strong>ॐ एकादशिन्द्रियाधीशाय नमः।</strong><br/>
        जो ग्यारह इन्द्रियों के अधीश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४७८</strong><br/>
        <strong>ॐ पञ्चेन्द्रियगुणेशाय नमः।</strong><br/>
        जो पञ्चेन्द्रिय के गुणों के ईश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४७९</strong><br/>
        <strong>ॐ पञ्चेन्द्रियमनोवाकृतात्मने नमः।</strong><br/>
        जो पञ्चेन्द्रिय, मन और वाक् रूप आत्मा हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४८०</strong><br/>
        <strong>ॐ सर्वेन्द्रियगुणाधीशाय नमः।</strong><br/>
        जो सभी इन्द्रियों के गुणों के अधीश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४८१</strong><br/>
        <strong>ॐ सर्वेन्द्रियमनोऽधीशाय नमः।</strong><br/>
        जो सभी इन्द्रियों और मन के अधीश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४८२</strong><br/>
        <strong>ॐ सर्वेन्द्रियमयाय नमः।</strong><br/>
        जो सभी इन्द्रियों के स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४८३</strong><br/>
        <strong>ॐ चतुर्वेदमयाय नमः।</strong><br/>
        जो चारों वेदों के स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४८४</strong><br/>
        <strong>ॐ चतुर्वेदप्रभवाय नमः।</strong><br/>
        जो चारों वेदों के प्रभु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४८५</strong><br/>
        <strong>ॐ चतुर्वेदकलाधराय नमः।</strong><br/>
        जो चारों वेदों की कला धारण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४८६</strong><br/>
        <strong>ॐ चतुर्वेदान्तसारविदे नमः।</strong><br/>
        जो चारों वेदान्त के सार के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४८७</strong><br/>
        <strong>ॐ चतुर्वेदफलप्रदाय नमः।</strong><br/>
        जो चारों वेदों का फल देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४८८</strong><br/>
        <strong>ॐ चतुष्पदाय नमः।</strong><br/>
        जो चार पैर वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४८९</strong><br/>
        <strong>ॐ चतुर्भुजाय नमः।</strong><br/>
        जो चार भुजा वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४९०</strong><br/>
        <strong>ॐ चतुर्वर्गप्रदायकाय नमः।</strong><br/>
        जो चतुर्वर्ग प्रदान करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४९१</strong><br/>
        <strong>ॐ चतुर्वर्गफलप्रदाय नमः।</strong><br/>
        जो चतुर्वर्ग का फल देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४९२</strong><br/>
        <strong>ॐ चतुर्मुखप्रियाय नमः।</strong><br/>
        जो चतुर्मुख ब्रह्मा के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४९३</strong><br/>
        <strong>ॐ चतुर्युगसाक्षिणे नमः।</strong><br/>
        जो चतुर्युग के साक्षी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४९४</strong><br/>
        <strong>ॐ चतुर्युगप्रवर्तकाय नमः।</strong><br/>
        जो चतुर्युग के प्रवर्तक हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४९५</strong><br/>
        <strong>ॐ चतुर्धर्मप्रतिष्ठापकाय नमः।</strong><br/>
        जो चतुर्धर्म की प्रतिष्ठा करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४९६</strong><br/>
        <strong>ॐ चतुराश्रमधर्मप्रवर्तकाय नमः।</strong><br/>
        जो चतुराश्रम धर्म के प्रवर्तक हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४९७</strong><br/>
        <strong>ॐ चतुराश्रमफलप्रदाय नमः।</strong><br/>
        जो चतुराश्रम का फल देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४९८</strong><br/>
        <strong>ॐ चतुर्युगधर्मस्थापकाय नमः।</strong><br/>
        जो चतुर्युग के धर्म की स्थापना करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>४९९</strong><br/>
        <strong>ॐ चतुर्वर्णधर्मकर्ताराय नमः।</strong><br/>
        जो चतुर्वर्ण के धर्म के कर्ता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५००</strong><br/>
        <strong>ॐ पञ्चमुखाय नमः।</strong><br/>
        जो पाँच मुख वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५०१</strong><br/>
        <strong>ॐ पञ्चप्राणाधिष्ठाताराय नमः।</strong><br/>
        जो पञ्चप्राण के अधिष्ठाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५०२</strong><br/>
        <strong>ॐ पञ्चमहाभूतस्वरूपाय नमः।</strong><br/>
        जो पञ्चमहाभूत स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५०३</strong><br/>
        <strong>ॐ पञ्चमहाभूतमयाय नमः।</strong><br/>
        जो पञ्चमहाभूतमय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५०४</strong><br/>
        <strong>ॐ पञ्चतन्मात्राधीशाय नमः।</strong><br/>
        जो पञ्चतन्मात्रा के अधीश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५०५</strong><br/>
        <strong>ॐ पञ्चब्रह्मस्वरूपाय नमः।</strong><br/>
        जो पञ्चब्रह्म स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५०६</strong><br/>
        <strong>ॐ पञ्चकृत्यपराय नमः।</strong><br/>
        जो पञ्चकृत्य में तत्पर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५०७</strong><br/>
        <strong>ॐ पञ्चकृत्यकराय नमः।</strong><br/>
        जो पञ्चकृत्य करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५०८</strong><br/>
        <strong>ॐ पञ्चकृत्यसाक्षिणे नमः।</strong><br/>
        जो पञ्चकृत्य के साक्षी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५०९</strong><br/>
        <strong>ॐ पञ्चामृतप्रियाय नमः।</strong><br/>
        जो पञ्चामृत के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५१०</strong><br/>
        <strong>ॐ पञ्चामृतस्नाताय नमः।</strong><br/>
        जो पञ्चामृत से स्नान करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५११</strong><br/>
        <strong>ॐ पञ्चगव्यप्रियाय नमः।</strong><br/>
        जो पञ्चगव्य के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५१२</strong><br/>
        <strong>ॐ पञ्चगव्यस्नाताय नमः।</strong><br/>
        जो पञ्चगव्य से स्नान करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५१३</strong><br/>
        <strong>ॐ पञ्चरत्नमयाय नमः।</strong><br/>
        जो पञ्चरत्न से निर्मित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५१४</strong><br/>
        <strong>ॐ पञ्चरत्नप्रियाय नमः।</strong><br/>
        जो पञ्चरत्न के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५१५</strong><br/>
        <strong>ॐ पञ्चरत्नविभूषिताय नमः।</strong><br/>
        जो पञ्चरत्न से विभूषित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५१६</strong><br/>
        <strong>ॐ पञ्चरत्नसुशोभिताय नमः।</strong><br/>
        जो पञ्चरत्न से सुशोभित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५१७</strong><br/>
        <strong>ॐ पञ्चधातुमयाय नमः।</strong><br/>
        जो पञ्चधातु से निर्मित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५१८</strong><br/>
        <strong>ॐ पञ्चवर्णमयाय नमः।</strong><br/>
        जो पञ्चवर्ण स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५१९</strong><br/>
        <strong>ॐ पञ्चाक्षरमयाय नमः।</strong><br/>
        जो पञ्चाक्षर स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५२०</strong><br/>
        <strong>ॐ पञ्चाक्षरप्रियाय नमः।</strong><br/>
        जो पञ्चाक्षर के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५२१</strong><br/>
        <strong>ॐ पञ्चमहायज्ञप्रियाय नमः।</strong><br/>
        जो पञ्चमहायज्ञ के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५२२</strong><br/>
        <strong>ॐ पञ्चमहायज्ञफलप्रदाय नमः।</strong><br/>
        जो पञ्चमहायज्ञ का फल देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५२३</strong><br/>
        <strong>ॐ पञ्चमहायज्ञाधिष्ठाताराय नमः।</strong><br/>
        जो पञ्चमहायज्ञ के अधिष्ठाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५२४</strong><br/>
        <strong>ॐ पञ्चमहापापनाशकाय नमः।</strong><br/>
        जो पञ्चमहापाप का नाश करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५२५</strong><br/>
        <strong>ॐ पञ्चमहापापहराय नमः।</strong><br/>
        जो पञ्चमहापाप को हरने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५२६</strong><br/>
        <strong>ॐ पञ्चमहापुण्यकराय नमः।</strong><br/>
        जो पञ्चमहापुण्य करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५२७</strong><br/>
        <strong>ॐ पञ्चमहापुण्यप्रदाय नमः।</strong><br/>
        जो पञ्चमहापुण्य देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५२८</strong><br/>
        <strong>ॐ दशावतारमयाय नमः।</strong><br/>
        जो दशावतार स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५२९</strong><br/>
        <strong>ॐ दशावतारप्रभवाय नमः।</strong><br/>
        जो दशावतार के प्रभु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५३०</strong><br/>
        <strong>ॐ दशावतारसंस्थापकाय नमः।</strong><br/>
        जो दशावतार की संस्थापना करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५३१</strong><br/>
        <strong>ॐ दशप्राणाधिष्ठाताराय नमः।</strong><br/>
        जो दशप्राण के अधिष्ठाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५३२</strong><br/>
        <strong>ॐ दशदिशाधिष्ठाताराय नमः।</strong><br/>
        जो दशदिशा के अधिष्ठाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५३३</strong><br/>
        <strong>ॐ दशदिक्पालराजाय नमः।</strong><br/>
        जो दशदिक्पाल के राजा हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५३४</strong><br/>
        <strong>ॐ दशदिक्पालगुरवे नमः।</strong><br/>
        जो दशदिक्पाल के गुरु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५३५</strong><br/>
        <strong>ॐ दशदिक्पालपूज्याय नमः।</strong><br/>
        जो दशदिक्पाल के पूज्य हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५३६</strong><br/>
        <strong>ॐ दशविधानन्दाय नमः।</strong><br/>
        जो दशविध आनन्द स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५३७</strong><br/>
        <strong>ॐ दशविधसुखप्रदाय नमः।</strong><br/>
        जो दशविध सुख देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५३८</strong><br/>
        <strong>ॐ दशविधैश्वर्यदायकाय नमः।</strong><br/>
        जो दशविध ऐश्वर्य देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५३९</strong><br/>
        <strong>ॐ द्वादशज्योतिर्लिङ्गमयाय नमः।</strong><br/>
        जो द्वादशज्योतिर्लिङ्ग स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५४०</strong><br/>
        <strong>ॐ द्वादशादित्यसम्भवाय नमः।</strong><br/>
        जो द्वादशादित्य से उत्पन्न होने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५४१</strong><br/>
        <strong>ॐ द्वादशादित्यतेजोमयाय नमः।</strong><br/>
        जो द्वादशादित्य के तेज से युक्त हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५४२</strong><br/>
        <strong>ॐ द्वादशमासाधिष्ठाताराय नमः।</strong><br/>
        जो द्वादश मास के अधिष्ठाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५४३</strong><br/>
        <strong>ॐ द्वादशराशिचक्रस्थाय नमः।</strong><br/>
        जो द्वादशराशि चक्र में स्थित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५४४</strong><br/>
        <strong>ॐ द्वादशराशिप्रभवाय नमः।</strong><br/>
        जो द्वादशराशि के प्रभु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५४५</strong><br/>
        <strong>ॐ षोडशकलायुक्ताय नमः।</strong><br/>
        जो षोडशकला से युक्त हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५४६</strong><br/>
        <strong>ॐ षोडशकलामयाय नमः।</strong><br/>
        जो षोडशकला स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५४७</strong><br/>
        <strong>ॐ षोडशकलापूर्णाय नमः।</strong><br/>
        जो षोडशकला से पूर्ण हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५४८</strong><br/>
        <strong>ॐ षोडशकलाधिष्ठाताराय नमः।</strong><br/>
        जो षोडशकला के अधिष्ठाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५४९</strong><br/>
        <strong>ॐ षोडशविधपूजार्चिताय नमः।</strong><br/>
        जो षोडशविध पूजा से अर्चित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५५०</strong><br/>
        <strong>ॐ षोडशविधपूजाप्रियाय नमः।</strong><br/>
        जो षोडशविध पूजा के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५५१</strong><br/>
        <strong>ॐ अष्टादशपुराणमयाय नमः।</strong><br/>
        जो अष्टादशपुराण स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५५२</strong><br/>
        <strong>ॐ अष्टादशपुराणप्रभवाय नमः।</strong><br/>
        जो अष्टादशपुराण के प्रभु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५५३</strong><br/>
        <strong>ॐ अष्टादशविद्यामयाय नमः।</strong><br/>
        जो अष्टादशविद्या स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५५४</strong><br/>
        <strong>ॐ अष्टादशविद्याप्रदाय नमः।</strong><br/>
        जो अष्टादशविद्या देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५५५</strong><br/>
        <strong>ॐ अष्टादशजन्मरहिताय नमः।</strong><br/>
        जो अष्टादशजन्म से रहित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५५६</strong><br/>
        <strong>ॐ अष्टादशगुणाधीशाय नमः।</strong><br/>
        जो अष्टादशगुण के अधीश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५५७</strong><br/>
        <strong>ॐ अष्टादशपीठमयाय नमः।</strong><br/>
        जो अष्टादशपीठ स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५५८</strong><br/>
        <strong>ॐ अष्टादशपीठाधिष्ठाताराय नमः।</strong><br/>
        जो अष्टादशपीठ के अधिष्ठाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५५९</strong><br/>
        <strong>ॐ एकविंशतिनामधेयाय नमः।</strong><br/>
        जो एकविंशति नामों से प्रसिद्ध हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५६०</strong><br/>
        <strong>ॐ एकविंशतिनामप्रियाय नमः।</strong><br/>
        जो एकविंशति नामों के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५६१</strong><br/>
        <strong>ॐ द्वाविंशतिनामप्रियाय नमः।</strong><br/>
        जो द्वाविंशति नामों के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५६२</strong><br/>
        <strong>ॐ अष्टोत्तरशतनामधेयाय नमः।</strong><br/>
        जो अष्टोत्तरशत नामों से प्रसिद्ध हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५६३</strong><br/>
        <strong>ॐ अष्टोत्तरशतनामप्रियाय नमः।</strong><br/>
        जो अष्टोत्तरशत नामों के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५६४</strong><br/>
        <strong>ॐ सहस्रनामधेयाय नमः।</strong><br/>
        जो सहस्र नामों से प्रसिद्ध हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५६५</strong><br/>
        <strong>ॐ सहस्रनामप्रियाय नमः।</strong><br/>
        जो सहस्र नामों के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५६६</strong><br/>
        <strong>ॐ सहस्रनामफलप्रदाय नमः।</strong><br/>
        जो सहस्र नामों का फल देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५६७</strong><br/>
        <strong>ॐ सहस्रनामसुखदायकाय नमः।</strong><br/>
        जो सहस्र नामों से सुख देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५६८</strong><br/>
        <strong>ॐ एकाक्षरमयाय नमः।</strong><br/>
        जो एकाक्षर स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५६९</strong><br/>
        <strong>ॐ एकाक्षरप्रियाय नमः।</strong><br/>
        जो एकाक्षर के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५७०</strong><br/>
        <strong>ॐ गकारमयाय नमः।</strong><br/>
        जो गकार स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५७१</strong><br/>
        <strong>ॐ गकारप्रियाय नमः।</strong><br/>
        जो गकार के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५७२</strong><br/>
        <strong>ॐ गकारमूर्तये नमः।</strong><br/>
        जो गकार मूर्ति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५७३</strong><br/>
        <strong>ॐ गकाराधीशाय नमः।</strong><br/>
        जो गकार के अधीश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५७४</strong><br/>
        <strong>ॐ गणाक्षरप्रभवाय नमः।</strong><br/>
        जो गणाक्षर के प्रभु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५७५</strong><br/>
        <strong>ॐ गणाक्षरसुखप्रदाय नमः।</strong><br/>
        जो गणाक्षर से सुख देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५७६</strong><br/>
        <strong>ॐ ॐकारमयाय नमः।</strong><br/>
        जो ॐकार स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५७७</strong><br/>
        <strong>ॐ ॐकारप्रियाय नमः।</strong><br/>
        जो ॐकार के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५७८</strong><br/>
        <strong>ॐ ॐकारमूर्तये नमः।</strong><br/>
        जो ॐकार मूर्ति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५७९</strong><br/>
        <strong>ॐ ॐकाराधीशाय नमः।</strong><br/>
        जो ॐकार के अधीश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५८०</strong><br/>
        <strong>ॐ प्रणवमयाय नमः।</strong><br/>
        जो प्रणव स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५८१</strong><br/>
        <strong>ॐ प्रणवप्रियाय नमः।</strong><br/>
        जो प्रणव के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५८२</strong><br/>
        <strong>ॐ प्रणवमूर्तये नमः।</strong><br/>
        जो प्रणव मूर्ति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५८३</strong><br/>
        <strong>ॐ प्रणवाधीशाय नमः।</strong><br/>
        जो प्रणव के अधीश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५८४</strong><br/>
        <strong>ॐ एकमात्राय नमः।</strong><br/>
        जो एकमात्रा स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५८५</strong><br/>
        <strong>ॐ द्विमात्राय नमः।</strong><br/>
        जो द्विमात्रा स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५८६</strong><br/>
        <strong>ॐ त्रिमात्राय नमः।</strong><br/>
        जो त्रिमात्रा स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५८७</strong><br/>
        <strong>ॐ अर्धमात्राय नमः।</strong><br/>
        जो अर्धमात्रा स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५८८</strong><br/>
        <strong>ॐ अमात्राय नमः।</strong><br/>
        जो अमात्रा स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५८९</strong><br/>
        <strong>ॐ मात्रातीताय नमः।</strong><br/>
        जो मात्रा से अतीत हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५९०</strong><br/>
        <strong>ॐ शब्दमयाय नमः।</strong><br/>
        जो शब्द स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५९१</strong><br/>
        <strong>ॐ शब्दप्रियाय नमः।</strong><br/>
        जो शब्द के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५९२</strong><br/>
        <strong>ॐ शब्दकर्त्रे नमः।</strong><br/>
        जो शब्द के कर्ता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५९३</strong><br/>
        <strong>ॐ शब्दकल्पतरवे नमः।</strong><br/>
        जो शब्द कल्पतरु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५९४</strong><br/>
        <strong>ॐ शब्दब्रह्मस्वरूपाय नमः।</strong><br/>
        जो शब्दब्रह्म स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५९५</strong><br/>
        <strong>ॐ शब्दब्रह्माधिदेवताय नमः।</strong><br/>
        जो शब्दब्रह्म के अधिदेवता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५९६</strong><br/>
        <strong>ॐ वाक्प्रभवाय नमः।</strong><br/>
        जो वाक् के प्रभु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५९७</strong><br/>
        <strong>ॐ वाग्देवताय नमः।</strong><br/>
        जो वाक् देवता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५९८</strong><br/>
        <strong>ॐ वाग्विलासप्रियाय नमः।</strong><br/>
        जो वाक् विलास के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>५९९</strong><br/>
        <strong>ॐ वाग्मिने नमः।</strong><br/>
        जो वाग्मी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६००</strong><br/>
        <strong>ॐ वाचस्पतये नमः।</strong><br/>
        जो वाचस्पति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६०१</strong><br/>
        <strong>ॐ महावाक्यार्थाय नमः।</strong><br/>
        जो महावाक्य के अर्थ हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६०२</strong><br/>
        <strong>ॐ महावाक्यतत्त्वज्ञाय नमः।</strong><br/>
        जो महावाक्य के तत्त्व के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६०३</strong><br/>
        <strong>ॐ अक्षराय नमः।</strong><br/>
        जो अक्षर स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६०४</strong><br/>
        <strong>ॐ अक्षरप्रियाय नमः।</strong><br/>
        जो अक्षर के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६०५</strong><br/>
        <strong>ॐ अक्षरमूर्तये नमः।</strong><br/>
        जो अक्षर मूर्ति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६०६</strong><br/>
        <strong>ॐ अक्षरप्रभवाय नमः।</strong><br/>
        जो अक्षर के प्रभु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६०७</strong><br/>
        <strong>ॐ अक्षरातीताय नमः।</strong><br/>
        जो अक्षर से अतीत हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६०८</strong><br/>
        <strong>ॐ अक्षरब्रह्मविदे नमः।</strong><br/>
        जो अक्षरब्रह्म के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६०९</strong><br/>
        <strong>ॐ ध्वन्यात्मकाय नमः।</strong><br/>
        जो ध्वन्यात्मक हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६१०</strong><br/>
        <strong>ॐ ध्वन्यात्मकप्रियाय नमः।</strong><br/>
        जो ध्वन्यात्मक के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६११</strong><br/>
        <strong>ॐ नादमयाय नमः।</strong><br/>
        जो नाद स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६१२</strong><br/>
        <strong>ॐ नादप्रियाय नमः।</strong><br/>
        जो नाद के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६१३</strong><br/>
        <strong>ॐ नादब्रह्मस्वरूपाय नमः।</strong><br/>
        जो नादब्रह्म स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६१४</strong><br/>
        <strong>ॐ नादात्मकाय नमः।</strong><br/>
        जो नादात्मक हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६१५</strong><br/>
        <strong>ॐ नादान्तरात्मने नमः।</strong><br/>
        जो नाद के अन्तरात्मा हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६१६</strong><br/>
        <strong>ॐ सङ्गीतप्रियाय नमः।</strong><br/>
        जो संगीत के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६१७</strong><br/>
        <strong>ॐ सङ्गीतमयाय नमः।</strong><br/>
        जो संगीत स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६१८</strong><br/>
        <strong>ॐ गीतप्रियाय नमः।</strong><br/>
        जो गीत के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६१९</strong><br/>
        <strong>ॐ गीतमयाय नमः।</strong><br/>
        जो गीत स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६२०</strong><br/>
        <strong>ॐ नृत्यप्रियाय नमः।</strong><br/>
        जो नृत्य के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६२१</strong><br/>
        <strong>ॐ नृत्यमयाय नमः।</strong><br/>
        जो नृत्य स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६२२</strong><br/>
        <strong>ॐ नर्तकप्रियाय नमः।</strong><br/>
        जो नर्तक के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६२३</strong><br/>
        <strong>ॐ नर्तकाय नमः।</strong><br/>
        जो नर्तक हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६२४</strong><br/>
        <strong>ॐ नटराजाय नमः।</strong><br/>
        जो नटराज हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६२५</strong><br/>
        <strong>ॐ नटेश्वराय नमः।</strong><br/>
        जो नटेश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६२६</strong><br/>
        <strong>ॐ ताण्डवप्रियाय नमः।</strong><br/>
        जो ताण्डव के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६२७</strong><br/>
        <strong>ॐ ताण्डवनर्तकाय नमः।</strong><br/>
        जो ताण्डव नर्तक हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६२८</strong><br/>
        <strong>ॐ आनन्दनर्तनप्रियाय नमः।</strong><br/>
        जो आनन्द नर्तन के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६२९</strong><br/>
        <strong>ॐ कलाधराय नमः।</strong><br/>
        जो कलाओं को धारण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६३०</strong><br/>
        <strong>ॐ कलामयाय नमः।</strong><br/>
        जो कला स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६३१</strong><br/>
        <strong>ॐ कलाप्रियाय नमः।</strong><br/>
        जो कला के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६३२</strong><br/>
        <strong>ॐ कलानिधये नमः।</strong><br/>
        जो कला के खजाने हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६३३</strong><br/>
        <strong>ॐ कलाकेलिरसप्रियाय नमः।</strong><br/>
        जो कला केलि रस के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६३४</strong><br/>
        <strong>ॐ कलाविनोदप्रियाय नमः।</strong><br/>
        जो कला विनोद के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६३५</strong><br/>
        <strong>ॐ सुकलाय नमः।</strong><br/>
        जो सुन्दर कला वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६३६</strong><br/>
        <strong>ॐ निष्कलाय नमः।</strong><br/>
        जो कला रहित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६३७</strong><br/>
        <strong>ॐ चतुःषष्टिकलामयाय नमः।</strong><br/>
        जो चतुःषष्टि कला स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६३८</strong><br/>
        <strong>ॐ चतुःषष्टिकलाधराय नमः।</strong><br/>
        जो चतुःषष्टि कला धारण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६३९</strong><br/>
        <strong>ॐ चतुःषष्टिकलाप्रदाय नमः।</strong><br/>
        जो चतुःषष्टि कला देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६४०</strong><br/>
        <strong>ॐ चतुःषष्टिकलाधीशाय नमः।</strong><br/>
        जो चतुःषष्टि कला के अधीश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६४१</strong><br/>
        <strong>ॐ ललितकलाप्रियाय नमः।</strong><br/>
        जो ललित कला के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६४२</strong><br/>
        <strong>ॐ ललितकलामयाय नमः।</strong><br/>
        जो ललित कला स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६४३</strong><br/>
        <strong>ॐ कला कलाप्रदाय नमः।</strong><br/>
        जो कला कला देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६४४</strong><br/>
        <strong>ॐ कलाकार प्रियाय नमः।</strong><br/>
        जो कलाकार के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६४५</strong><br/>
        <strong>ॐ कलावान्ताय नमः।</strong><br/>
        जो कलावान हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६४६</strong><br/>
        <strong>ॐ कलाविदे नमः।</strong><br/>
        जो कला के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६४७</strong><br/>
        <strong>ॐ कलाकारकाय नमः।</strong><br/>
        जो कलाकार हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६४८</strong><br/>
        <strong>ॐ कलाकल्पतरवे नमः।</strong><br/>
        जो कला कल्पतरु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६४९</strong><br/>
        <strong>ॐ कलाकल्पद्रुमाय नमः।</strong><br/>
        जो कला कल्पद्रुम हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६५०</strong><br/>
        <strong>ॐ कलाकेन्द्राय नमः।</strong><br/>
        जो कला के केन्द्र हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६५१</strong><br/>
        <strong>ॐ ऋषिप्रियाय नमः।</strong><br/>
        जो ऋषियों के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६५२</strong><br/>
        <strong>ॐ मुनिप्रियाय नमः।</strong><br/>
        जो मुनियों के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६५३</strong><br/>
        <strong>ॐ साधुप्रियाय नमः।</strong><br/>
        जो साधुओं के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६५४</strong><br/>
        <strong>ॐ भक्तप्रियाय नमः।</strong><br/>
        जो भक्तों के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६५५</strong><br/>
        <strong>ॐ भक्तवत्सलाय नमः।</strong><br/>
        जो भक्तवत्सल हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६५६</strong><br/>
        <strong>ॐ भक्तकल्पतरवे नमः।</strong><br/>
        जो भक्तों के कल्पतरु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६५७</strong><br/>
        <strong>ॐ भक्तानुरागाय नमः।</strong><br/>
        जो भक्तों के अनुराग हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६५८</strong><br/>
        <strong>ॐ भक्तिप्रियाय नमः।</strong><br/>
        जो भक्ति के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६५९</strong><br/>
        <strong>ॐ भक्तिमयाय नमः।</strong><br/>
        जो भक्ति स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६६०</strong><br/>
        <strong>ॐ भक्तिकराय नमः।</strong><br/>
        जो भक्ति करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६६१</strong><br/>
        <strong>ॐ भक्तिदाताराय नमः।</strong><br/>
        जो भक्ति देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६६२</strong><br/>
        <strong>ॐ भक्तिभावनाय नमः।</strong><br/>
        जो भक्ति भावना के स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६६३</strong><br/>
        <strong>ॐ भावप्रियाय नमः।</strong><br/>
        जो भाव के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६६४</strong><br/>
        <strong>ॐ भावमयाय नमः।</strong><br/>
        जो भाव स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६६५</strong><br/>
        <strong>ॐ भावुकाय नमः।</strong><br/>
        जो भावुक हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६६६</strong><br/>
        <strong>ॐ भावग्राह्याय नमः।</strong><br/>
        जो भाव से ग्रहण किये जाने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६६७</strong><br/>
        <strong>ॐ भावगम्याय नमः।</strong><br/>
        जो भाव से पहुँचे जाने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६६८</strong><br/>
        <strong>ॐ भावलभ्याय नमः।</strong><br/>
        जो भाव से प्राप्त होने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६६९</strong><br/>
        <strong>ॐ सुभावाय नमः।</strong><br/>
        जो सुन्दर भाव वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६७०</strong><br/>
        <strong>ॐ सद्भावप्रियाय नमः।</strong><br/>
        जो सद्भाव के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६७१</strong><br/>
        <strong>ॐ भावबन्धनमोचकाय नमः।</strong><br/>
        जो भाव बन्धन से मुक्त करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६७२</strong><br/>
        <strong>ॐ भावसिन्धवे नमः।</strong><br/>
        जो भाव के समुद्र हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६७३</strong><br/>
        <strong>ॐ भावातीताय नमः।</strong><br/>
        जो भाव से अतीत हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६७४</strong><br/>
        <strong>ॐ अभावस्वरूपाय नमः।</strong><br/>
        जो अभाव स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६७५</strong><br/>
        <strong>ॐ स्वभावाय नमः।</strong><br/>
        जो स्वभाव हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६७६</strong><br/>
        <strong>ॐ स्वभावप्रियाय नमः।</strong><br/>
        जो स्वभाव के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६७७</strong><br/>
        <strong>ॐ विभावस्वरूपाय नमः।</strong><br/>
        जो विभाव स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६७८</strong><br/>
        <strong>ॐ अनुभावमयाय नमः।</strong><br/>
        जो अनुभाव स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६७९</strong><br/>
        <strong>ॐ संस्कारविनाशकाय नमः।</strong><br/>
        जो संस्कारों का विनाश करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६८०</strong><br/>
        <strong>ॐ संस्कारक्षयकराय नमः।</strong><br/>
        जो संस्कारों का क्षय करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६८१</strong><br/>
        <strong>ॐ वासनाक्षयकराय नमः।</strong><br/>
        जो वासनाओं का क्षय करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६८२</strong><br/>
        <strong>ॐ वासनाविनाशकाय नमः।</strong><br/>
        जो वासनाओं का विनाश करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६८३</strong><br/>
        <strong>ॐ कामवासनाहन्त्रे नमः।</strong><br/>
        जो काम वासना का हनन करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६८४</strong><br/>
        <strong>ॐ क्रोधवासनाहन्त्रे नमः।</strong><br/>
        जो क्रोध वासना का हनन करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६८५</strong><br/>
        <strong>ॐ लोभवासनाहन्त्रे नमः।</strong><br/>
        जो लोभ वासना का हनन करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६८६</strong><br/>
        <strong>ॐ मोहवासनाहन्त्रे नमः।</strong><br/>
        जो मोह वासना का हनन करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६८७</strong><br/>
        <strong>ॐ मदवासनाहन्त्रे नमः।</strong><br/>
        जो मद वासना का हनन करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६८८</strong><br/>
        <strong>ॐ मत्सरवासनाहन्त्रे नमः।</strong><br/>
        जो मत्सर वासना का हनन करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६८९</strong><br/>
        <strong>ॐ आसक्तिविनाशकाय नमः।</strong><br/>
        जो आसक्ति का विनाश करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६९०</strong><br/>
        <strong>ॐ अहङ्कारविनाशकाय नमः।</strong><br/>
        जो अहंकार का विनाश करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६९१</strong><br/>
        <strong>ॐ ममत्वविनाशकाय नमः।</strong><br/>
        जो ममत्व का विनाश करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६९२</strong><br/>
        <strong>ॐ स्वार्थत्यागकराय नमः।</strong><br/>
        जो स्वार्थ त्याग कराने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६९३</strong><br/>
        <strong>ॐ संन्यासप्रदाय नमः।</strong><br/>
        जो संन्यास देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६९४</strong><br/>
        <strong>ॐ परमवैराग्यदायकाय नमः।</strong><br/>
        जो परम वैराग्य देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६९५</strong><br/>
        <strong>ॐ मुक्तिप्रदाय नमः।</strong><br/>
        जो मुक्ति देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६९६</strong><br/>
        <strong>ॐ मोक्षप्रदाय नमः।</strong><br/>
        जो मोक्ष देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६९७</strong><br/>
        <strong>ॐ मुक्तिदाताराय नमः।</strong><br/>
        जो मुक्ति देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६९८</strong><br/>
        <strong>ॐ जीवन्मुक्तिप्रदाय नमः।</strong><br/>
        जो जीवन्मुक्ति देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>६९९</strong><br/>
        <strong>ॐ कैवल्यप्रदाय नमः।</strong><br/>
        जो कैवल्य देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७००</strong><br/>
        <strong>ॐ सायुज्यमुक्तिप्रदाय नमः।</strong><br/>
        जो सायुज्य मुक्ति देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७०१</strong><br/>
        <strong>ॐ सामीप्यमुक्तिप्रदाय नमः।</strong><br/>
        जो सामीप्य मुक्ति देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७०२</strong><br/>
        <strong>ॐ सारूप्यमुक्तिप्रदाय नमः।</strong><br/>
        जो सारूप्य मुक्ति देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७०३</strong><br/>
        <strong>ॐ सालोक्यमुक्तिप्रदाय नमः।</strong><br/>
        जो सालोक्य मुक्ति देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७०४</strong><br/>
        <strong>ॐ सर्वमुक्तिप्रदायकाय नमः।</strong><br/>
        जो सभी प्रकार की मुक्ति देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७०५</strong><br/>
        <strong>ॐ मुक्तात्मने नमः।</strong><br/>
        जो मुक्त आत्मा हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७०६</strong><br/>
        <strong>ॐ मुक्तसंगाय नमः।</strong><br/>
        जो संग रहित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७०७</strong><br/>
        <strong>ॐ बन्धमुक्ताय नमः।</strong><br/>
        जो बन्धन मुक्त हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७०८</strong><br/>
        <strong>ॐ बन्धमोचकाय नमः।</strong><br/>
        जो बन्धन से मुक्त करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७०९</strong><br/>
        <strong>ॐ संसारबन्धच्छेदकाय नमः।</strong><br/>
        जो संसार बन्धन को काटने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७१०</strong><br/>
        <strong>ॐ कर्मबन्धविमोचकाय नमः।</strong><br/>
        जो कर्म बन्धन से मुक्त करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७११</strong><br/>
        <strong>ॐ मायाबन्धविनाशकाय नमः।</strong><br/>
        जो माया बन्धन का विनाश करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७१२</strong><br/>
        <strong>ॐ जन्मबन्धविमोचकाय नमः।</strong><br/>
        जो जन्म बन्धन से मुक्त करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७१३</strong><br/>
        <strong>ॐ देहबन्धविमोचकाय नमः।</strong><br/>
        जो देह बन्धन से मुक्त करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७१४</strong><br/>
        <strong>ॐ ज्ञानप्रदाय नमः।</strong><br/>
        जो ज्ञान देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७१५</strong><br/>
        <strong>ॐ ज्ञानमयाय नमः।</strong><br/>
        जो ज्ञान स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७१६</strong><br/>
        <strong>ॐ ज्ञानदाताराय नमः।</strong><br/>
        जो ज्ञान देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७१७</strong><br/>
        <strong>ॐ ज्ञानगम्याय नमः।</strong><br/>
        जो ज्ञान से पहुँचे जाने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७१८</strong><br/>
        <strong>ॐ ज्ञानस्वरूपाय नमः।</strong><br/>
        जो ज्ञान स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७१९</strong><br/>
        <strong>ॐ ज्ञानाश्रयाय नमः।</strong><br/>
        जो ज्ञान के आश्रय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७२०</strong><br/>
        <strong>ॐ ज्ञानाकाराय नमः।</strong><br/>
        जो ज्ञान के आकार हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७२१</strong><br/>
        <strong>ॐ ज्ञानाधीशाय नमः।</strong><br/>
        जो ज्ञान के अधीश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७२२</strong><br/>
        <strong>ॐ ज्ञानसागराय नमः।</strong><br/>
        जो ज्ञान के सागर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७२३</strong><br/>
        <strong>ॐ ज्ञानसिन्धवे नमः।</strong><br/>
        जो ज्ञान के समुद्र हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७२४</strong><br/>
        <strong>ॐ गुरुरूपाय नमः।</strong><br/>
        जो गुरु रूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७२५</strong><br/>
        <strong>ॐ गुरुप्रियाय नमः।</strong><br/>
        जो गुरु के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७२६</strong><br/>
        <strong>ॐ गुरुदेवाय नमः।</strong><br/>
        जो गुरुदेव हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७२७</strong><br/>
        <strong>ॐ गुरुवर्याय नमः।</strong><br/>
        जो श्रेष्ठ गुरु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७२८</strong><br/>
        <strong>ॐ गुरुमूर्तये नमः।</strong><br/>
        जो गुरु मूर्ति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७२९</strong><br/>
        <strong>ॐ गुरुशिष्यप्रियाय नमः।</strong><br/>
        जो गुरु के शिष्यों के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७३०</strong><br/>
        <strong>ॐ सद्गुरवे नमः।</strong><br/>
        जो सद्गुरु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७३१</strong><br/>
        <strong>ॐ सद्गुरुप्रियाय नमः।</strong><br/>
        जो सद्गुरु के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७३२</strong><br/>
        <strong>ॐ शिष्यवत्सलाय नमः।</strong><br/>
        जो शिष्यवत्सल हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७३३</strong><br/>
        <strong>ॐ शिष्यप्रियाय नमः।</strong><br/>
        जो शिष्यों के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७३४</strong><br/>
        <strong>ॐ सुशिष्याय नमः।</strong><br/>
        जो सुशिष्य हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७३५</strong><br/>
        <strong>ॐ शिष्याभिमत फलप्रदाय नमः।</strong><br/>
        जो शिष्यों की अभिलषित फल देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७३६</strong><br/>
        <strong>ॐ आदिगुरवे नमः।</strong><br/>
        जो आदि गुरु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७३७</strong><br/>
        <strong>ॐ जगद्गुरवे नमः।</strong><br/>
        जो जगद्गुरु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७३८</strong><br/>
        <strong>ॐ लोकगुरवे नमः।</strong><br/>
        जो लोकगुरु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७३९</strong><br/>
        <strong>ॐ ब्रह्मविद्यागुरवे नमः।</strong><br/>
        जो ब्रह्मविद्या के गुरु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७४०</strong><br/>
        <strong>ॐ चतुर्वेदगुरवे नमः।</strong><br/>
        जो चतुर्वेद के गुरु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७४१</strong><br/>
        <strong>ॐ योगविद्यागुरवे नमः।</strong><br/>
        जो योगविद्या के गुरु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७४२</strong><br/>
        <strong>ॐ मन्त्रविद्यागुरवे नमः।</strong><br/>
        जो मन्त्रविद्या के गुरु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७४३</strong><br/>
        <strong>ॐ तन्त्रविद्यागुरवे नमः।</strong><br/>
        जो तन्त्रविद्या के गुरु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७४४</strong><br/>
        <strong>ॐ सर्वविद्यागुरवे नमः।</strong><br/>
        जो सभी विद्याओं के गुरु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७४५</strong><br/>
        <strong>ॐ सर्वविद्याधिष्ठाताराय नमः।</strong><br/>
        जो सभी विद्याओं के अधिष्ठाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७४६</strong><br/>
        <strong>ॐ सर्वविद्याप्रदाय नमः।</strong><br/>
        जो सभी विद्याएं देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७४७</strong><br/>
        <strong>ॐ सर्वविद्यामयाय नमः।</strong><br/>
        जो सभी विद्याओं के स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७४८</strong><br/>
        <strong>ॐ विद्याविनोदाय नमः।</strong><br/>
        जो विद्या में विनोद करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७४९</strong><br/>
        <strong>ॐ विद्यानिधये नमः।</strong><br/>
        जो विद्या के खजाने हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७५०</strong><br/>
        <strong>ॐ विद्यासागराय नमः।</strong><br/>
        जो विद्या के सागर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७५१</strong><br/>
        <strong>ॐ विद्यासिन्धवे नमः।</strong><br/>
        जो विद्या के समुद्र हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७५२</strong><br/>
        <strong>ॐ विद्याकल्पतरवे नमः।</strong><br/>
        जो विद्या कल्पतरु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७५३</strong><br/>
        <strong>ॐ परविद्याप्रदाय नमः।</strong><br/>
        जो परविद्या देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७५४</strong><br/>
        <strong>ॐ अपरविद्याप्रदाय नमः।</strong><br/>
        जो अपरविद्या देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७५५</strong><br/>
        <strong>ॐ निगुणाय नमः।</strong><br/>
        जो निर्गुण हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७५६</strong><br/>
        <strong>ॐ सगुणाय नमः।</strong><br/>
        जो सगुण हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७५७</strong><br/>
        <strong>ॐ गुणातीताय नमः।</strong><br/>
        जो गुणों से अतीत हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७५८</strong><br/>
        <strong>ॐ गुणसाक्षिणे नमः।</strong><br/>
        जो गुणों के साक्षी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७५९</strong><br/>
        <strong>ॐ त्रिगुणमयाय नमः।</strong><br/>
        जो त्रिगुणमय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७६०</strong><br/>
        <strong>ॐ त्रिगुणेश्वराय नमः।</strong><br/>
        जो त्रिगुण के ईश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७६१</strong><br/>
        <strong>ॐ सत्त्वगुणप्रधानाय नमः।</strong><br/>
        जो सत्त्वगुण प्रधान हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७६२</strong><br/>
        <strong>ॐ रजोगुणविवर्जिताय नमः।</strong><br/>
        जो रजोगुण से रहित हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७६३</strong><br/>
        <strong>ॐ तमोगुणविनाशकाय नमः।</strong><br/>
        जो तमोगुण का विनाश करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७६४</strong><br/>
        <strong>ॐ सदसत्कारणाय नमः।</strong><br/>
        जो सत् और असत् के कारण हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७६५</strong><br/>
        <strong>ॐ सदसद्विलक्षणाय नमः।</strong><br/>
        जो सत् और असत् से विलक्षण हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७६६</strong><br/>
        <strong>ॐ सत्स्वरूपाय नमः।</strong><br/>
        जो सत् स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७६७</strong><br/>
        <strong>ॐ सत्यस्वरूपाय नमः।</strong><br/>
        जो सत्य स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७६८</strong><br/>
        <strong>ॐ सत्यप्रियाय नमः।</strong><br/>
        जो सत्य के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७६९</strong><br/>
        <strong>ॐ सत्यवादिने नमः।</strong><br/>
        जो सत्यवादी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७७०</strong><br/>
        <strong>ॐ सत्यसङ्कल्पाय नमः।</strong><br/>
        जो सत्यसङ्कल्प हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७७१</strong><br/>
        <strong>ॐ सत्याश्रयाय नमः।</strong><br/>
        जो सत्य के आश्रय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७७२</strong><br/>
        <strong>ॐ सत्यधर्मप्रवर्तकाय नमः।</strong><br/>
        जो सत्यधर्म के प्रवर्तक हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७७३</strong><br/>
        <strong>ॐ धर्मस्वरूपाय नमः।</strong><br/>
        जो धर्म स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७७४</strong><br/>
        <strong>ॐ धर्मप्रियाय नमः।</strong><br/>
        जो धर्म के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७७५</strong><br/>
        <strong>ॐ धर्मकर्त्रे नमः।</strong><br/>
        जो धर्म के कर्ता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७७६</strong><br/>
        <strong>ॐ धर्मात्मने नमः।</strong><br/>
        जो धर्मात्मा हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७७७</strong><br/>
        <strong>ॐ धर्माधिकारिणे नमः।</strong><br/>
        जो धर्म के अधिकारी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७७८</strong><br/>
        <strong>ॐ धर्मप्रवर्तकाय नमः।</strong><br/>
        जो धर्म के प्रवर्तक हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७७९</strong><br/>
        <strong>ॐ धर्मपालकाय नमः।</strong><br/>
        जो धर्म की रक्षा करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७८०</strong><br/>
        <strong>ॐ धर्माधीशाय नमः।</strong><br/>
        जो धर्म के अधीश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७८१</strong><br/>
        <strong>ॐ धर्मसंस्थापकाय नमः।</strong><br/>
        जो धर्म की संस्थापना करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७८२</strong><br/>
        <strong>ॐ धर्मरक्षकाय नमः।</strong><br/>
        जो धर्म की रक्षा करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७८३</strong><br/>
        <strong>ॐ वर्णाश्रमधर्मकर्त्रे नमः।</strong><br/>
        जो वर्णाश्रम धर्म के कर्ता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७८४</strong><br/>
        <strong>ॐ युगधर्मप्रवर्तकाय नमः।</strong><br/>
        जो युगधर्म के प्रवर्तक हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७८५</strong><br/>
        <strong>ॐ लोकधर्मप्रणेत्रे नमः।</strong><br/>
        जो लोकधर्म के प्रणेता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७८६</strong><br/>
        <strong>ॐ वैदिकधर्मप्रवर्तकाय नमः।</strong><br/>
        जो वैदिक धर्म के प्रवर्तक हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७८७</strong><br/>
        <strong>ॐ सनातनधर्मकर्त्रे नमः।</strong><br/>
        जो सनातन धर्म के कर्ता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७८८</strong><br/>
        <strong>ॐ आर्यधर्मप्रवर्तकाय नमः।</strong><br/>
        जो आर्य धर्म के प्रवर्तक हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७८९</strong><br/>
        <strong>ॐ मानवधर्मप्रणेत्रे नमः।</strong><br/>
        जो मानव धर्म के प्रणेता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७९०</strong><br/>
        <strong>ॐ विश्वधर्मप्रकाशकाय नमः।</strong><br/>
        जो विश्वधर्म के प्रकाशक हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७९१</strong><br/>
        <strong>ॐ अधर्मनाशकाय नमः।</strong><br/>
        जो अधर्म का नाश करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७९२</strong><br/>
        <strong>ॐ अधर्मविनाशकाय नमः।</strong><br/>
        जो अधर्म का विनाश करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७९३</strong><br/>
        <strong>ॐ पापनाशकाय नमः।</strong><br/>
        जो पाप का नाश करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७९४</strong><br/>
        <strong>ॐ पुण्यप्रदाय नमः।</strong><br/>
        जो पुण्य देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७९५</strong><br/>
        <strong>ॐ पुण्यात्मने नमः।</strong><br/>
        जो पुण्यात्मा हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७९६</strong><br/>
        <strong>ॐ पुण्यस्वरूपाय नमः।</strong><br/>
        जो पुण्य स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७९७</strong><br/>
        <strong>ॐ पुण्यकर्मकराय नमः।</strong><br/>
        जो पुण्यकर्म कराने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७९८</strong><br/>
        <strong>ॐ पुण्यभाग्यप्रदाय नमः।</strong><br/>
        जो पुण्य भाग्य देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>७९९</strong><br/>
        <strong>ॐ पुण्यफलप्रदाय नमः।</strong><br/>
        जो पुण्य फल देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८००</strong><br/>
        <strong>ॐ कल्याणप्रदाय नमः।</strong><br/>
        जो कल्याण देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८०१</strong><br/>
        <strong>ॐ कल्याणस्वरूपाय नमः।</strong><br/>
        जो कल्याण स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८०२</strong><br/>
        <strong>ॐ कल्याणकराय नमः।</strong><br/>
        जो कल्याण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८०३</strong><br/>
        <strong>ॐ मङ्गलप्रदाय नमः।</strong><br/>
        जो मंगल देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८०४</strong><br/>
        <strong>ॐ मङ्गलमूर्तये नमः।</strong><br/>
        जो मंगल मूर्ति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८०५</strong><br/>
        <strong>ॐ मङ्गलकारकाय नमः।</strong><br/>
        जो मंगल के कारक हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८०६</strong><br/>
        <strong>ॐ मङ्गलाकराय नमः।</strong><br/>
        जो मंगलकारी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८०७</strong><br/>
        <strong>ॐ शुभप्रदाय नमः।</strong><br/>
        जो शुभ देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८०८</strong><br/>
        <strong>ॐ शुभस्वरूपाय नमः।</strong><br/>
        जो शुभ स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८०९</strong><br/>
        <strong>ॐ शुभकराय नमः।</strong><br/>
        जो शुभ करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८१०</strong><br/>
        <strong>ॐ शुभमूर्तये नमः।</strong><br/>
        जो शुभ मूर्ति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८११</strong><br/>
        <strong>ॐ शुभाशुभफलप्रदाय नमः।</strong><br/>
        जो शुभ और अशुभ फल देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८१२</strong><br/>
        <strong>ॐ लक्ष्मीप्रदाय नमः।</strong><br/>
        जो लक्ष्मी देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८१३</strong><br/>
        <strong>ॐ धनप्रदाय नमः।</strong><br/>
        जो धन देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८१४</strong><br/>
        <strong>ॐ धनाधिपतये नमः।</strong><br/>
        जो धन के अधिपति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८१५</strong><br/>
        <strong>ॐ धनेश्वराय नमः।</strong><br/>
        जो धन के ईश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८१६</strong><br/>
        <strong>ॐ वैभवप्रदाय नमः।</strong><br/>
        जो वैभव देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८१७</strong><br/>
        <strong>ॐ ऐश्वर्यप्रदाय नमः।</strong><br/>
        जो ऐश्वर्य देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८१८</strong><br/>
        <strong>ॐ समृद्धिप्रदाय नमः।</strong><br/>
        जो समृद्धि देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८१९</strong><br/>
        <strong>ॐ विभूतिप्रदाय नमः।</strong><br/>
        जो विभूति देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८२०</strong><br/>
        <strong>ॐ संपत्प्रदाय नमः।</strong><br/>
        जो संपत्ति देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८२१</strong><br/>
        <strong>ॐ सम्पदे नमः।</strong><br/>
        जो संपदा हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८२२</strong><br/>
        <strong>ॐ सफलताप्रदाय नमः।</strong><br/>
        जो सफलता देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८२३</strong><br/>
        <strong>ॐ सिद्धिप्रदाय नमः।</strong><br/>
        जो सिद्धि देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८२४</strong><br/>
        <strong>ॐ सिद्धेश्वराय नमः।</strong><br/>
        जो सिद्धों के ईश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८२५</strong><br/>
        <strong>ॐ अष्टसिद्धिप्रदाय नमः।</strong><br/>
        जो अष्ट सिद्धि देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८२६</strong><br/>
        <strong>ॐ नवनिधिप्रदाय नमः।</strong><br/>
        जो नवनिधि देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८२७</strong><br/>
        <strong>ॐ निधिपतये नमः।</strong><br/>
        जो निधि के पति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८२८</strong><br/>
        <strong>ॐ निधानप्रदाय नमः।</strong><br/>
        जो निधान देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८२९</strong><br/>
        <strong>ॐ कोशाधिपतये नमः।</strong><br/>
        जो कोश के अधिपति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८३०</strong><br/>
        <strong>ॐ खजाने नमः।</strong><br/>
        जो खजाना हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८३१</strong><br/>
        <strong>ॐ रत्नप्रदाय नमः।</strong><br/>
        जो रत्न देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८३२</strong><br/>
        <strong>ॐ रत्नेश्वराय नमः।</strong><br/>
        जो रत्नों के ईश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८३३</strong><br/>
        <strong>ॐ रत्नाकराय नमः।</strong><br/>
        जो रत्नों की खान हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८३४</strong><br/>
        <strong>ॐ रत्नसम्भवाय नमः।</strong><br/>
        जो रत्नों से उत्पन्न हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८३५</strong><br/>
        <strong>ॐ मणिप्रदाय नमः।</strong><br/>
        जो मणि देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८३६</strong><br/>
        <strong>ॐ मुक्ताप्रदाय नमः।</strong><br/>
        जो मुक्ता (मोती) देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८३७</strong><br/>
        <strong>ॐ स्वर्णप्रदाय नमः।</strong><br/>
        जो स्वर्ण देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८३८</strong><br/>
        <strong>ॐ रजतप्रदाय नमः।</strong><br/>
        जो रजत (चांदी) देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८३९</strong><br/>
        <strong>ॐ हीरकप्रदाय नमः।</strong><br/>
        जो हीरा देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८४०</strong><br/>
        <strong>ॐ पन्नप्रदाय नमः।</strong><br/>
        जो पन्ना देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८४१</strong><br/>
        <strong>ॐ माणिक्यप्रदाय नमः।</strong><br/>
        जो माणिक्य देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८४२</strong><br/>
        <strong>ॐ नीलमणिप्रदाय नमः।</strong><br/>
        जो नीलमणि देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८४३</strong><br/>
        <strong>ॐ मरकतप्रदाय नमः।</strong><br/>
        जो मरकत देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८४४</strong><br/>
        <strong>ॐ वैदूर्यप्रदाय नमः।</strong><br/>
        जो वैदूर्य देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८४५</strong><br/>
        <strong>ॐ गोमेदप्रदाय नमः।</strong><br/>
        जो गोमेद देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८४६</strong><br/>
        <strong>ॐ नवरत्नप्रदाय नमः।</strong><br/>
        जो नवरत्न देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८४७</strong><br/>
        <strong>ॐ सर्वरत्नप्रदाय नमः।</strong><br/>
        जो सभी रत्न देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८४८</strong><br/>
        <strong>ॐ अनन्तकोटिब्रह्माण्डनायकाय नमः।</strong><br/>
        जो अनन्त कोटि ब्रह्माण्डों के नायक हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८४९</strong><br/>
        <strong>ॐ सर्वलोकाधिपतये नमः।</strong><br/>
        जो सभी लोकों के अधिपति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८५०</strong><br/>
        <strong>ॐ त्रिलोकेश्वराय नमः।</strong><br/>
        जो तीनों लोकों के ईश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८५१</strong><br/>
        <strong>ॐ त्रिलोकनाथाय नमः।</strong><br/>
        जो तीनों लोकों के नाथ हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८५२</strong><br/>
        <strong>ॐ त्रिलोकपतये नमः।</strong><br/>
        जो तीनों लोकों के पति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८५३</strong><br/>
        <strong>ॐ त्रिलोकराजाय नमः।</strong><br/>
        जो तीनों लोकों के राजा हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८५४</strong><br/>
        <strong>ॐ भूलोकाधिपतये नमः।</strong><br/>
        जो भूलोक के अधिपति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८५५</strong><br/>
        <strong>ॐ भुवर्लोकाधिपतये नमः।</strong><br/>
        जो भुवर्लोक के अधिपति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८५६</strong><br/>
        <strong>ॐ स्वर्लोकाधिपतये नमः।</strong><br/>
        जो स्वर्लोक के अधिपति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८५७</strong><br/>
        <strong>ॐ महर्लोकाधिपतये नमः।</strong><br/>
        जो महर्लोक के अधिपति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८५८</strong><br/>
        <strong>ॐ जनलोकाधिपतये नमः।</strong><br/>
        जो जनलोक के अधिपति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८५९</strong><br/>
        <strong>ॐ तपोलोकाधिपतये नमः।</strong><br/>
        जो तपोलोक के अधिपति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८६०</strong><br/>
        <strong>ॐ सत्यलोकाधिपतये नमः।</strong><br/>
        जो सत्यलोक के अधिपति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८६१</strong><br/>
        <strong>ॐ सप्तलोकेश्वराय नमः।</strong><br/>
        जो सप्तलोक के ईश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८६२</strong><br/>
        <strong>ॐ चतुर्दशभुवनेश्वराय नमः।</strong><br/>
        जो चौदह भुवनों के ईश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८६३</strong><br/>
        <strong>ॐ ब्रह्माण्डनायकाय नमः।</strong><br/>
        जो ब्रह्माण्ड के नायक हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८६४</strong><br/>
        <strong>ॐ ब्रह्माण्डपतये नमः।</strong><br/>
        जो ब्रह्माण्ड के पति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८६५</strong><br/>
        <strong>ॐ विश्वनाथाय नमः।</strong><br/>
        जो विश्व के नाथ हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८६६</strong><br/>
        <strong>ॐ विश्वेश्वराय नमः।</strong><br/>
        जो विश्व के ईश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८६७</strong><br/>
        <strong>ॐ विश्वाधिपतये नमः।</strong><br/>
        जो विश्व के अधिपति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८६८</strong><br/>
        <strong>ॐ जगन्नाथाय नमः।</strong><br/>
        जो जगत के नाथ हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८६९</strong><br/>
        <strong>ॐ जगदीश्वराय नमः।</strong><br/>
        जो जगत के ईश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८७०</strong><br/>
        <strong>ॐ जगत्पतये नमः।</strong><br/>
        जो जगत के पति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८७१</strong><br/>
        <strong>ॐ जगद्गुरवे नमः।</strong><br/>
        जो जगद्गुरु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८७२</strong><br/>
        <strong>ॐ लोकगुरवे नमः।</strong><br/>
        जो लोकगुरु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८७३</strong><br/>
        <strong>ॐ विश्वगुरवे नमः।</strong><br/>
        जो विश्वगुरु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८७४</strong><br/>
        <strong>ॐ ब्रह्मगुरवे नमः।</strong><br/>
        जो ब्रह्मगुरु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८७५</strong><br/>
        <strong>ॐ देवगुरवे नमः।</strong><br/>
        जो देवगुरु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८७६</strong><br/>
        <strong>ॐ आदिगुरवे नमः।</strong><br/>
        जो आदिगुरु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८७७</strong><br/>
        <strong>ॐ परमगुरवे नमः।</strong><br/>
        जो परमगुरु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८७८</strong><br/>
        <strong>ॐ सद्गुरवे नमः।</strong><br/>
        जो सद्गुरु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८७९</strong><br/>
        <strong>ॐ कुलगुरवे नमः।</strong><br/>
        जो कुलगुरु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८८०</strong><br/>
        <strong>ॐ शिष्यवत्सलाय नमः।</strong><br/>
        जो शिष्यों पर स्नेह करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८८१</strong><br/>
        <strong>ॐ गुरुभक्तप्रियाय नमः।</strong><br/>
        जो गुरुभक्तों के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८८२</strong><br/>
        <strong>ॐ गुरुसेवाप्रियाय नमः।</strong><br/>
        जो गुरुसेवा के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८८३</strong><br/>
        <strong>ॐ गुरुदक्षिणाप्रियाय नमः।</strong><br/>
        जो गुरुदक्षिणा के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८८४</strong><br/>
        <strong>ॐ गुरुमहिमाप्रकाशकाय नमः।</strong><br/>
        जो गुरु की महिमा प्रकाशित करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८८५</strong><br/>
        <strong>ॐ शास्त्रज्ञाय नमः।</strong><br/>
        जो शास्त्रों के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८८६</strong><br/>
        <strong>ॐ वेदवेद्याय नमः।</strong><br/>
        जो वेदों के जानने योग्य हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८८७</strong><br/>
        <strong>ॐ वेदवेत्त्रे नमः।</strong><br/>
        जो वेदों के जानकार हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८८८</strong><br/>
        <strong>ॐ वेदान्तवेद्याय नमः।</strong><br/>
        जो वेदान्त के जानने योग्य हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८८९</strong><br/>
        <strong>ॐ वेदान्तज्ञाय नमः।</strong><br/>
        जो वेदान्त के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८९०</strong><br/>
        <strong>ॐ वेदान्तार्थप्रकाशकाय नमः।</strong><br/>
        जो वेदान्त के अर्थ प्रकाशित करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८९१</strong><br/>
        <strong>ॐ उपनिषद्गुह्यवेत्त्रे नमः।</strong><br/>
        जो उपनिषदों के गुह्य रहस्य जानने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८९२</strong><br/>
        <strong>ॐ पुराणज्ञाय नमः।</strong><br/>
        जो पुराणों के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८९३</strong><br/>
        <strong>ॐ इतिहासज्ञाय नमः।</strong><br/>
        जो इतिहास के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८९४</strong><br/>
        <strong>ॐ स्मृतिशास्त्रज्ञाय नमः।</strong><br/>
        जो स्मृति शास्त्रों के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८९५</strong><br/>
        <strong>ॐ आगमशास्त्रज्ञाय नमः।</strong><br/>
        जो आगम शास्त्रों के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८९६</strong><br/>
        <strong>ॐ तन्त्रशास्त्रज्ञाय नमः।</strong><br/>
        जो तन्त्र शास्त्रों के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८९७</strong><br/>
        <strong>ॐ मन्त्रशास्त्रज्ञाय नमः।</strong><br/>
        जो मन्त्र शास्त्रों के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८९८</strong><br/>
        <strong>ॐ यन्त्रशास्त्रज्ञाय नमः।</strong><br/>
        जो यन्त्र शास्त्रों के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>८९९</strong><br/>
        <strong>ॐ सर्वशास्त्रविशारदाय नमः।</strong><br/>
        जो सभी शास्त्रों में पारंगत हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९००</strong><br/>
        <strong>ॐ सर्वविद्याविशारदाय नमः।</strong><br/>
        जो सभी विद्याओं में पारंगत हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९०१</strong><br/>
        <strong>ॐ सर्वकलाविशारदाय नमः।</strong><br/>
        जो सभी कलाओं में पारंगत हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९०२</strong><br/>
        <strong>ॐ चतुःषष्टिकलाधराय नमः।</strong><br/>
        जो चौंसठ कलाओं के धारक हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९०३</strong><br/>
        <strong>ॐ कलाधिपतये नमः।</strong><br/>
        जो कलाओं के अधिपति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९०४</strong><br/>
        <strong>ॐ ललितकलाप्रवर्तकाय नमः।</strong><br/>
        जो ललित कलाओं के प्रवर्तक हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९०५</strong><br/>
        <strong>ॐ संगीतप्रियाय नमः।</strong><br/>
        जो संगीत के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९०६</strong><br/>
        <strong>ॐ नृत्यप्रियाय नमः।</strong><br/>
        जो नृत्य के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९०७</strong><br/>
        <strong>ॐ नाट्यप्रियाय नमः।</strong><br/>
        जो नाटक के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९०८</strong><br/>
        <strong>ॐ चित्रकलाप्रियाय नमः।</strong><br/>
        जो चित्रकला के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९०९</strong><br/>
        <strong>ॐ शिल्पकलाप्रियाय नमः।</strong><br/>
        जो शिल्पकला के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९१०</strong><br/>
        <strong>ॐ काव्यप्रियाय नमः।</strong><br/>
        जो काव्य के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९११</strong><br/>
        <strong>ॐ छन्दःशास्त्रज्ञाय नमः।</strong><br/>
        जो छन्दःशास्त्र के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९१२</strong><br/>
        <strong>ॐ व्याकरणशास्त्रज्ञाय नमः।</strong><br/>
        जो व्याकरण शास्त्र के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९१३</strong><br/>
        <strong>ॐ ज्योतिषशास्त्रज्ञाय नमः।</strong><br/>
        जो ज्योतिष शास्त्र के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९१४</strong><br/>
        <strong>ॐ आयुर्वेदशास्त्रज्ञाय नमः।</strong><br/>
        जो आयुर्वेद शास्त्र के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९१५</strong><br/>
        <strong>ॐ धनुर्वेदज्ञाय नमः।</strong><br/>
        जो धनुर्वेद के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९१६</strong><br/>
        <strong>ॐ गान्धर्ववेदज्ञाय नमः।</strong><br/>
        जो गान्धर्ववेद के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९१७</strong><br/>
        <strong>ॐ स्थापत्यवेदज्ञाय नमः।</strong><br/>
        जो स्थापत्यवेद के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९१८</strong><br/>
        <strong>ॐ अर्थशास्त्रज्ञाय नमः।</strong><br/>
        जो अर्थशास्त्र के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९१९</strong><br/>
        <strong>ॐ नीतिशास्त्रज्ञाय नमः।</strong><br/>
        जो नीतिशास्त्र के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९२०</strong><br/>
        <strong>ॐ राजनीतिज्ञाय नमः।</strong><br/>
        जो राजनीति के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९२१</strong><br/>
        <strong>ॐ युद्धकौशलज्ञाय नमः।</strong><br/>
        जो युद्ध कौशल के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९२२</strong><br/>
        <strong>ॐ गणितशास्त्रज्ञाय नमः।</strong><br/>
        जो गणित शास्त्र के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९२३</strong><br/>
        <strong>ॐ खगोलशास्त्रज्ञाय नमः।</strong><br/>
        जो खगोल शास्त्र के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९२४</strong><br/>
        <strong>ॐ भूगोलशास्त्रज्ञाय नमः।</strong><br/>
        जो भूगोल शास्त्र के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९२५</strong><br/>
        <strong>ॐ रसायनशास्त्रज्ञाय नमः।</strong><br/>
        जो रसायन शास्त्र के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९२६</strong><br/>
        <strong>ॐ यातुविद्याज्ञाय नमः।</strong><br/>
        जो यातु विद्या के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९२७</strong><br/>
        <strong>ॐ गुप्तविद्याज्ञाय नमः।</strong><br/>
        जो गुप्त विद्या के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९२८</strong><br/>
        <strong>ॐ रहस्यविद्याज्ञाय नमः।</strong><br/>
        जो रहस्य विद्या के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९२९</strong><br/>
        <strong>ॐ दिव्यविद्याज्ञाय नमः।</strong><br/>
        जो दिव्य विद्या के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९३०</strong><br/>
        <strong>ॐ अलौकिकविद्याज्ञाय नमः।</strong><br/>
        जो अलौकिक विद्या के ज्ञाता हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९३१</strong><br/>
        <strong>ॐ सिद्धविद्याधराय नमः।</strong><br/>
        जो सिद्ध विद्याओं के धारक हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९३२</strong><br/>
        <strong>ॐ योगविद्याधराय नमः।</strong><br/>
        जो योग विद्या के धारक हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९३३</strong><br/>
        <strong>ॐ महायोगिने नमः।</strong><br/>
        जो महायोगी हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९३४</strong><br/>
        <strong>ॐ योगेश्वराय नमः।</strong><br/>
        जो योग के ईश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९३५</strong><br/>
        <strong>ॐ योगप्रवर्तकाय नमः।</strong><br/>
        जो योग के प्रवर्तक हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९३६</strong><br/>
        <strong>ॐ समाधिपतये नमः।</strong><br/>
        जो समाधि के पति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९३७</strong><br/>
        <strong>ॐ ध्यानपरायणाय नमः।</strong><br/>
        जो ध्यान में लीन रहने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९३८</strong><br/>
        <strong>ॐ तपस्वी राजाय नमः।</strong><br/>
        जो तपस्वियों के राजा हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९३९</strong><br/>
        <strong>ॐ तपोधनाय नमः।</strong><br/>
        जो तप के धन हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९४०</strong><br/>
        <strong>ॐ तपोमूर्तये नमः।</strong><br/>
        जो तप की मूर्ति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९४१</strong><br/>
        <strong>ॐ तपोनिष्ठाय नमः।</strong><br/>
        जो तप में निष्ठावान हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९४२</strong><br/>
        <strong>ॐ तपोरक्षकाय नमः।</strong><br/>
        जो तप की रक्षा करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९४३</strong><br/>
        <strong>ॐ तपःसिद्धिप्रदाय नमः।</strong><br/>
        जो तप की सिद्धि देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९४४</strong><br/>
        <strong>ॐ सर्वसिद्धिप्रदाय नमः।</strong><br/>
        जो सभी सिद्धियां देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९४५</strong><br/>
        <strong>ॐ इष्टसिद्धिप्रदाय नमः।</strong><br/>
        जो इष्ट सिद्धि देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९४६</strong><br/>
        <strong>ॐ तत्क्षणसिद्धिप्रदाय नमः।</strong><br/>
        जो तत्क्षण सिद्धि देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९४७</strong><br/>
        <strong>ॐ सर्वकामसिद्धिप्रदाय नमः।</strong><br/>
        जो सभी कामनाओं की सिद्धि देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९४८</strong><br/>
        <strong>ॐ अशेषार्थप्रदाय नमः।</strong><br/>
        जो संपूर्ण अर्थ देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९४९</strong><br/>
        <strong>ॐ सर्वेष्टार्थप्रदाय नमः।</strong><br/>
        जो सभी इष्ट अर्थ देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९५०</strong><br/>
        <strong>ॐ पूर्णकामाय नमः।</strong><br/>
        जो पूर्ण कामना वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९५१</strong><br/>
        <strong>ॐ सर्वाभीष्टप्रदाय नमः।</strong><br/>
        जो सभी अभीष्ट देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९५२</strong><br/>
        <strong>ॐ वरदायकाय नमः।</strong><br/>
        जो वरदान देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९५३</strong><br/>
        <strong>ॐ वरप्रदाय नमः।</strong><br/>
        जो वर देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९५४</strong><br/>
        <strong>ॐ वरेश्वराय नमः।</strong><br/>
        जो वरदानों के ईश्वर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९५५</strong><br/>
        <strong>ॐ परमवरदाय नमः।</strong><br/>
        जो परम वरदान देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९५६</strong><br/>
        <strong>ॐ सुलभवरदाय नमः।</strong><br/>
        जो सुलभ वरदान देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९५७</strong><br/>
        <strong>ॐ दुर्लभवरदाय नमः।</strong><br/>
        जो दुर्लभ वरदान देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९५८</strong><br/>
        <strong>ॐ यत्किञ्चित्प्रार्थितप्रदाय नमः।</strong><br/>
        जो जो कुछ भी प्रार्थना की जाए वह देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९५९</strong><br/>
        <strong>ॐ अनुकम्पालु सागराय नमः।</strong><br/>
        जो दया के सागर हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९६०</strong><br/>
        <strong>ॐ दयासिन्धवे नमः।</strong><br/>
        जो दया के सिन्धु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९६१</strong><br/>
        <strong>ॐ कृपालवे नमः।</strong><br/>
        जो कृपालु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९६२</strong><br/>
        <strong>ॐ करुणामयाय नमः।</strong><br/>
        जो करुणामय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९६३</strong><br/>
        <strong>ॐ करुणाकराय नमः।</strong><br/>
        जो करुणा की खान हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९६४</strong><br/>
        <strong>ॐ करुणास्वरूपाय नमः।</strong><br/>
        जो करुणा स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९६५</strong><br/>
        <strong>ॐ करुणावतारत्वाय नमः।</strong><br/>
        जो करुणा के अवतार हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९६६</strong><br/>
        <strong>ॐ प्रेमस्वरूपाय नमः।</strong><br/>
        जो प्रेम स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९६७</strong><br/>
        <strong>ॐ प्रेमप्रदाय नमः।</strong><br/>
        जो प्रेम देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९६८</strong><br/>
        <strong>ॐ प्रेमवशाय नमः।</strong><br/>
        जो प्रेम के वश में हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९६९</strong><br/>
        <strong>ॐ भक्तवत्सलाय नमः।</strong><br/>
        जो भक्तों पर स्नेह करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९७०</strong><br/>
        <strong>ॐ भक्तप्रियाय नमः।</strong><br/>
        जो भक्तों के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९७१</strong><br/>
        <strong>ॐ भक्तानुकूलाय नमः।</strong><br/>
        जो भक्तों के अनुकूल हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९७२</strong><br/>
        <strong>ॐ भक्तपरायणाय नमः।</strong><br/>
        जो भक्तों में परायण हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९७३</strong><br/>
        <strong>ॐ भक्तकल्पतरवे नमः।</strong><br/>
        जो भक्तों के कल्पतरु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९७४</strong><br/>
        <strong>ॐ भक्तकामधेनवे नमः।</strong><br/>
        जो भक्तों की कामधेनु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९७५</strong><br/>
        <strong>ॐ भक्तचिन्तामणये नमः।</strong><br/>
        जो भक्तों की चिन्तामणि हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९७६</strong><br/>
        <strong>ॐ भक्तमनोरथपूरकाय नमः।</strong><br/>
        जो भक्तों की मनोरथ पूरी करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९७७</strong><br/>
        <strong>ॐ भक्तार्तिहराय नमः।</strong><br/>
        जो भक्तों की आर्ति हरने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९७८</strong><br/>
        <strong>ॐ भक्तदुःखहराय नमः।</strong><br/>
        जो भक्तों के दुःख हरने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९७९</strong><br/>
        <strong>ॐ भक्तपीड़ाहराय नमः।</strong><br/>
        जो भक्तों की पीड़ा हरने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९८०</strong><br/>
        <strong>ॐ भक्तरक्षकाय नमः।</strong><br/>
        जो भक्तों की रक्षा करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९८१</strong><br/>
        <strong>ॐ भक्तत्राणकराय नमः।</strong><br/>
        जो भक्तों का त्राण करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९८२</strong><br/>
        <strong>ॐ भक्तापद्विनिवारकाय नमः।</strong><br/>
        जो भक्तों की आपत्ति निवारने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९८३</strong><br/>
        <strong>ॐ भक्तविपन्निवारकाय नमः।</strong><br/>
        जो भक्तों की विपत्ति निवारने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९८४</strong><br/>
        <strong>ॐ भक्तसंकटमोचकाय नमः।</strong><br/>
        जो भक्तों के संकट मोचने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९८५</strong><br/>
        <strong>ॐ भक्तभयभञ्जकाय नमः।</strong><br/>
        जो भक्तों के भय भंजन करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९८६</strong><br/>
        <strong>ॐ सर्वभयहराय नमः।</strong><br/>
        जो सभी भयों को हरने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९८७</strong><br/>
        <strong>ॐ अभयप्रदाय नमः।</strong><br/>
        जो अभय देने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९८८</strong><br/>
        <strong>ॐ अभयस्वरूपाय नमः।</strong><br/>
        जो अभय स्वरूप हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९८९</strong><br/>
        <strong>ॐ भयनाशकाय नमः।</strong><br/>
        जो भय का नाश करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९९०</strong><br/>
        <strong>ॐ निर्भयाय नमः।</strong><br/>
        जो निर्भय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९९१</strong><br/>
        <strong>ॐ शरणागतरक्षकाय नमः।</strong><br/>
        जो शरणागतों की रक्षा करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९९२</strong><br/>
        <strong>ॐ शरणागतवत्सलाय नमः।</strong><br/>
        जो शरणागतों पर स्नेह करने वाले हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९९३</strong><br/>
        <strong>ॐ आपद्बान्धवाय नमः।</strong><br/>
        जो आपत्ति के मित्र हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९९४</strong><br/>
        <strong>ॐ आर्तत्राणपरायणाय नमः।</strong><br/>
        जो आर्तों के त्राण में परायण हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९९५</strong><br/>
        <strong>ॐ दीनदयालवे नमः।</strong><br/>
        जो दीनों पर दयालु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९९६</strong><br/>
        <strong>ॐ दीनबन्धवे नमः।</strong><br/>
        जो दीनों के बन्धु हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९९७</strong><br/>
        <strong>ॐ दीननाथाय नमः।</strong><br/>
        जो दीनों के नाथ हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९९८</strong><br/>
        <strong>ॐ अकिञ्चनगतये नमः।</strong><br/>
        जो अकिञ्चनों की गति हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>९९९</strong><br/>
        <strong>ॐ सर्वजनप्रियाय नमः।</strong><br/>
        जो सभी लोगों के प्रिय हैं<br/><br/>
    </div>

    <div style="margin-bottom:20px">
        <strong>१०००</strong><br/>
        <strong>ॐ गणेशाय नमः।</strong><br/>
        जो गणेश हैं<br/><br/>
    </div>

    <div style="text-align:center;margin-top:40px;padding:20px;background-color:#f0f8ff;border:2px solid #4169e1;border-radius:10px">
        <h2 style="color:#4169e1;margin-bottom:15px">|| पूर्ण गणेश सहस्रनाम समाप्त ||</h2>
        <p style="font-size:18px;font-weight:bold;color:#2e8b57;margin:10px 0">
            श्री गणेश जी के संपूर्ण १००० नाम पूर्ण हो गए हैं।
        </p>
        <p style="font-size:16px;color:#8b4513;margin:15px 0">
            यह पवित्र सहस्रनाम भगवान गणेश की कृपा से संकलित किया गया है।<br/>
            इसके पाठ से सभी विघ्न दूर होते हैं और मनोवांछित फल प्राप्त होता है।
        </p>
        <p style="font-size:14px;font-style:italic;color:#696969;margin-top:20px">
            ॐ गं गणपतये नमः। श्री गणेशाय नमः।<br/>
            सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः।
        </p>
    </div>`},{id:"atharvashirsha",title:"Ganpati Atharvashirsh",html:`<h1>गणपति अथर्वशीर्ष</h1><br/>
ॐ नमस्ते गणपतये।<br/>
 त्वमेव प्रत्यक्षं तत्वमसि

त्वमेव केवलं कर्ताऽसि<br/>

त्वमेव केवलं धर्ताऽसि<br/>

त्वमेव केवलं हर्ताऽसि<br/>

त्वमेव सर्वं खल्विदं ब्रह्मासि<br/>

त्व साक्षादात्माऽसि नित्यम्।।1।।<br/>

ऋतं वच्मि। सत्यं वच्मि।।2।।<br/><br/>

अव त्व मां। अव वक्तारं।<br/>

अव श्रोतारं। अव दातारं।<br/>

अव धातारं। अवानूचानमव शिष्यं।<br/>

अव पश्चातात। अव पुरस्तात।<br/>

अवोत्तरात्तात। अव दक्षिणात्तात्।<br/>

अवचोर्ध्वात्तात्।। अवाधरात्तात्।।<br/>

सर्वतो मां पाहि-पाहि समंतात्।।3।।<br/><br/>

त्वं वाङ्‍मयस्त्वं चिन्मय:।<br/>

त्वमानंदमसयस्त्वं ब्रह्ममय:।<br/>

त्वं सच्चिदानंदाद्वितीयोऽसि।<br/>

त्वं प्रत्यक्षं ब्रह्मासि।<br/>

त्वं ज्ञानमयो विज्ञानमयोऽसि।।4।।<br/>

सर्वं जगदिदं त्वत्तो जायते।<br/>

सर्वं जगदिदं त्वत्तस्तिष्ठति।<br/>

सर्वं जगदिदं त्वयि लयमेष्यति।<br/>

सर्वं जगदिदं त्वयि प्रत्येति।<br/>

त्वं भूमिरापोऽनलोऽनिलो नभ:।<br/>

त्वं चत्वारिवाक्पदानि।।5।।<br/>

त्वं गुणत्रयातीत: त्वमवस्थात्रयातीत:।<br/>

त्वं देहत्रयातीत:। त्वं कालत्रयातीत:।<br/>

त्वं मूलाधारस्थितोऽसि नित्यं।<br/>

त्वं शक्तित्रयात्मक:।<br/>

त्वां योगिनो ध्यायंति नित्यं।<br/><br/>

त्वं ब्रह्मा त्वं विष्णुस्त्वं<br/>

रूद्रस्त्वं इंद्रस्त्वं अग्निस्त्वं<br/>

वायुस्त्वं सूर्यस्त्वं चंद्रमास्त्वं<br/>

ब्रह्मभूर्भुव:स्वरोम्।।6।।<br/><br/>

गणादि पूर्वमुच्चार्य वर्णादिं तदनंतरं।<br/>

अनुस्वार: परतर:। अर्धेन्दुलसितं।<br/>

तारेण ऋद्धं। एतत्तव मनुस्वरूपं।<br/>

गकार: पूर्वरूपं। अकारो मध्यमरूपं।<br/>

अनुस्वारश्चान्त्यरूपं। बिन्दुरूत्तररूपं।<br/>

नाद: संधानं। सं हितासंधि:<br/><br/>

सैषा गणेश विद्या। गणकऋषि:<br/>

निचृद्गायत्रीच्छंद:। गणपतिर्देवता।<br/><br/>

ॐ गं गणपतये नम:।।7।।<br/>

एकदंताय विद्‍महे।<br/>

वक्रतुण्डाय धीमहि।<br/>

तन्नो दंती प्रचोदयात।।8।।<br/><br/>

एकदंतं चतुर्हस्तं पाशमंकुशधारिणम्।<br/>

रदं च वरदं हस्तैर्विभ्राणं मूषकध्वजम्।<br/>

रक्तं लंबोदरं शूर्पकर्णकं रक्तवाससम्।<br/>

रक्तगंधाऽनुलिप्तांगं रक्तपुष्पै: सुपुजितम्।।<br/>

भक्तानुकंपिनं देवं जगत्कारणमच्युतम्।<br/>

आविर्भूतं च सृष्टयादौ प्रकृ‍ते पुरुषात्परम्।<br/>

एवं ध्यायति यो नित्यं स योगी योगिनां वर:।।9।।<br/>

नमो व्रातपतये। नमो गणपतये।<br/><br/>

नम: प्रमथपतये।<br/>

नमस्तेऽस्तु लंबोदरायैकदंताय।<br/>

विघ्ननाशिने शिवसुताय।<br/>

श्रीवरदमूर्तये नमो नम:।।10।।<br/>`},{id:"ramraksha",title:"Ramraksha",youtube:"skCZ4OsKmNo",html:`<h1> ॥ रामरक्षा स्तोत्र ॥ </h1>
   <h2>विनियोग:</h2>
    अस्य श्रीरामरक्षास्त्रोतमन्त्रस्य बुधकौशिक ऋषिः ।
श्री सीतारामचंद्रो देवता ।
अनुष्टुप छंदः। सीता शक्तिः ।<br/>
श्रीमान हनुमान कीलकम ।
श्री सीतारामचंद्रप्रीत्यर्थे रामरक्षास्त्रोतजपे विनियोगः । <br/>
<h2>अथ ध्यानम्‌:</h2>
ध्यायेदाजानुबाहुं धृतशरधनुषं बद्धपदमासनस्थं,
पीतं वासो वसानं नवकमल दल स्पर्धिनेत्रम् प्रसन्नम । <br/>
वामांकारूढ़ सीता मुखकमलमिलल्लोचनम्नी,
रदाभम् नानालंकारदीप्तं दधतमुरुजटामण्डलम् रामचंद्रम॥ <br/>

<h2>इति ध्यानम्:</h2>
चरितं रघुनाथस्य शतकोटि प्रविस्तरम् ।
एकैकमक्षरं पुंसां महापातकनाशनम् ॥1॥ <br/>

ध्यात्वा नीलोत्पलश्यामं रामं राजीवलोचनम् ।
जानकीलक्ष्मणोपेतं जटामुकुटमण्डितं ॥2॥ <br/>

सासितूणधनुर्बाणपाणिं नक्तंचरान्तकम् ।
स्वलीलया जगत्त्रातुमाविर्भूतमजं विभुम् ॥3॥<br/>

रामरक्षां पठेत प्राज्ञः पापघ्नीं सर्वकामदाम् ।
शिरो मे राघवः पातु भालं दशरथात्मजः ॥4॥ <br/>

कौसल्येयो दृशो पातु विश्वामित्रप्रियः श्रुति ।
घ्राणं पातु मखत्राता मुखं सौमित्रिवत्सलः ॥5॥<br/>

जिह्वां विद्यानिधिः पातु कण्ठं भरतवन्दितः ।
स्कन्धौ दिव्यायुधः पातु भुजौ भग्नेशकार्मुकः ॥6॥ ॥<br/>

करौ सीतापतिः पातु हृदयं जामदग्न्यजित ।
मध्यं पातु खरध्वंसी नाभिं जाम्बवदाश्रयः ॥7॥<br/>

सुग्रीवेशः कटी पातु सक्थिनी हनुमत्प्रभुः ।
उरु रघूत्तमः पातु रक्षःकुलविनाशकृताः ॥8॥<br/>

जानुनी सेतुकृत पातु जंघे दशमुखांतकः ।
पादौ विभीषणश्रीदः पातु रामअखिलं वपुः ॥9॥<br/>

एतां रामबलोपेतां रक्षां यः सुकृति पठेत ।
स चिरायुः सुखी पुत्री विजयी विनयी भवेत् ॥10॥<br/>

पातालभूतल व्योम चारिणश्छद्मचारिणः ।
न द्रष्टुमपि शक्तास्ते रक्षितं रामनामभिः ॥11॥<br/>

रामेति रामभद्रेति रामचंद्रेति वा स्मरन ।
नरौ न लिप्यते पापैर्भुक्तिं मुक्तिं च विन्दति ॥12॥<br/>

जगज्जैत्रैकमन्त्रेण रामनाम्नाभिरक्षितम् ।
यः कण्ठे धारयेत्तस्य करस्थाः सर्वसिद्धयः ॥13॥<br/>

वज्रपञ्जरनामेदं यो रामकवचं स्मरेत ।
अव्याहताज्ञाः सर्वत्र लभते जयमंगलम् ॥14॥<br/>

आदिष्टवान् यथा स्वप्ने रामरक्षामिमां हरः ।
तथा लिखितवान् प्रातः प्रबुद्धो बुधकौशिकः ॥15॥<br/>

आरामः कल्पवृक्षाणां विरामः सकलापदाम् ।
अभिरामस्त्रिलोकानां रामः श्रीमान स नः प्रभुः ॥16॥<br/>

तरुणौ रूपसम्पन्नौ सुकुमारौ महाबलौ ।
पुण्डरीकविशालाक्षौ चीरकृष्णाजिनाम्बरौ ॥17॥<br/>

फलमूलाशिनौ दान्तौ तापसौ ब्रह्मचारिणौ ।
पुत्रौ दशरथस्यैतौ भ्रातरौ रामलक्ष्मणौ ॥18॥<br/>

शरण्यौ सर्वसत्वानां श्रेष्ठौ सर्वधनुष्मताम् ।
रक्षःकुलनिहन्तारौ त्रायेतां नो रघूत्तमौ ॥19॥<br/>

आत्तसज्जधनुषाविषुस्पृशा वक्ष याशुगनिषङ्गसङ्गिनौ ।
रक्षणाय मम रामलक्ष्मणावग्रतः पथि सदैव गच्छताम ॥20॥<br/>

सन्नद्धः कवची खड्गी चापबाणधरो युवा ।
गच्छन् मनोरथान नश्च रामः पातु सलक्ष्मणः ॥21॥<br/>

रामो दाशरथी शूरो लक्ष्मणानुचरो बली ।
काकुत्स्थः पुरुषः पूर्णः कौसल्येयो रघूत्तमः ॥22॥<br/>

वेदान्तवेद्यो यज्ञेशः पुराणपुरुषोत्तमः ।
जानकीवल्लभः श्रीमानप्रमेयपराक्रमः ॥23॥<br/>

इत्येतानि जपन नित्यं मद्भक्तः श्रद्धयान्वितः ।
अश्वमेधाधिकं पुण्यं सम्प्राप्नोति न संशयः ॥24॥<br/>

रामं दुर्वादलश्यामं पद्माक्षं पीतवाससम ।
स्तुवन्ति नामभिर्दिव्यैर्न ते संसारिणो नरः ॥25॥॥<br/>

रामं लक्ष्मणपूर्वजं रघुवरं सीतापतिं सुन्दरं,
काकुत्स्थं करुणार्णवं गुणनिधिं विप्रप्रियं धार्मिकम । ॥<br/>
राजेन्द्रं सत्यसंधं दशरथतनयं श्यामलं शांतमूर्तिं,
वन्दे लोकाभिरामं रघुकुलतिलकं राघवं रावणारिम ॥26॥॥<br/>

रामाय रामभद्राय रामचंद्राय वेधसे ।
रघुनाथाय नाथाय सीतायाः पतये नमः ॥27॥॥<br/>

श्रीराम राम रघुनन्दनराम राम,
श्रीराम राम भरताग्रज राम राम । ॥<br/>
श्रीराम राम रणकर्कश राम राम,
श्रीराम राम शरणं भव राम राम ॥28॥॥<br/>

श्रीराम चन्द्रचरणौ मनसा स्मरामि,
श्रीराम चंद्रचरणौ वचसा गृणामि ।
श्रीराम चन्द्रचरणौ शिरसा नमामि,
श्रीराम चन्द्रचरणौ शरणं प्रपद्ये ॥29॥॥<br/>

माता रामो मत्पिता रामचंन्द्र: ।
स्वामी रामो मत्सखा रामचंद्र: ।
सर्वस्वं मे रामचन्द्रो दयालु ।
नान्यं जाने नैव जाने न जाने ॥॥<br/>

दक्षिणे लक्ष्मणो यस्य वामे च जनकात्मज ।
पुरतो मारुतिर्यस्य तं वन्दे रघुनन्दनम् ॥31॥॥<br/>

लोकाभिरामं रणरंगधीरं राजीवनेत्रं रघुवंशनाथं ।
कारुण्यरूपं करुणाकरं तं श्रीरामचन्द्रं शरणं प्रपद्ये ॥32॥॥<br/>

मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम ।
वातात्मजं वानरयूथमुख्यं श्रीराम दूतं शरणं प्रपद्ये ॥33॥॥<br/>

कूजन्तं रामरामेति मधुरं मधुराक्षरम ।
आरुह्य कविताशाखां वन्दे वाल्मीकिकोकिलम ॥34॥॥<br/>

आपदामपहर्तारं दातारं सर्वसम्पदाम् ।
लोकाभिरामं श्रीरामं भूयो भूयो नमाम्यहम् ॥35॥॥<br/>

भर्जनं भवबीजानामर्जनं सुखसम्पदाम् ।
तर्जनं यमदूतानां रामरामेति गर्जनम् ॥36॥॥<br/>

रामो राजमणिः सदा विजयते,
रामं रमेशं भजे रामेणाभिहता,
निशाचरचमू रामाय तस्मै नमः ।॥<br/>
रामान्नास्ति परायणं परतरं,
रामस्य दासोस्म्यहं रामे चित्तलयः,
सदा भवतु मे भो राम मामुद्धराः ॥37॥॥<br/>

राम रामेति रामेति रमे रामे मनोरमे ।
सहस्त्रनाम तत्तुल्यं रामनाम वरानने ॥38॥॥<br/>
<br/>
इति श्रीबुधकौशिकविरचितं श्रीरामरक्षास्तोत्रं संपूर्णम् ॥<br/>
इस प्रकार बुधकौशिकद्वारा रचित श्रीराम रक्षा स्तोत्र सम्पूर्ण होता है।<br/>
<h2>॥ श्री सीतारामचंद्रार्पणमस्तु ॥</h2><br/>`},{id:"hanuman_chalisa",title:"Hanuman Chalisa",youtube:"AETFvQonfV8",html:`<h1>॥ श्री हनुमान चालीसा ॥</h1> 
        <h2>॥ दोहा ॥</h2>
        
        श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि ।<br/>
        बरनउँ रघुबर बिमल जसु जो दायकु फल चारि ॥<br/>
        
        बुद्धिहीन तनु जानिके, सुमिरौं पवन कुमार ।<br/>
        बल बुधि विद्या देहु मोहि, हरहु कलेश विकार ॥<br/>
        
        <h2>॥ चौपाई ॥</h2>
        
        जय हनुमान ज्ञान गुन सागर ।<br/>
        जय कपीस तिहुँ लोक उजागर ॥<br/>
        <br/>
        राम दूत अतुलित बल धामा ।<br/>
        अंजनि पुत्र पवनसुत नामा ॥<br/>
        <br/>
        महाबीर बिक्रम बजरंगी । <br/>
        कुमति निवार सुमति के संगी ॥<br/>
        <br/>
        कंचन बरन बिराज सुबेसा ।<br/>
        कानन कुंडल कुँचित केसा ॥<br/>
        <br/>
        हाथ बज्र अरु ध्वजा बिराजे ।<br/>
        काँधे मूँज जनेऊ साजे ॥<br/>
        <br/>
        शंकर सुवन केसरी नंदन ।<br/>
        तेज प्रताप महा जगवंदन ॥<br/>
        <br/>
        विद्यावान गुनी अति चातुर ।<br/>
        राम काज करिबे को आतुर ॥<br/>
        <br/>
        प्रभु चरित्र सुनिबे को रसिया ।<br/>
        राम लखन सीता मनबसिया ॥<br/>
        <br/>
        सूक्ष्म रूप धरि सियहि दिखावा ।<br/>
        विकट रूप धरि लंक जरावा ॥<br/>
        <br/>
        भीम रूप धरि असुर सँहारे ।<br/>
        रामचंद्र के काज सवाँरे ॥<br/>
        <br/>
        लाय सजीवन लखन जियाए ।<br/>
        श्री रघुबीर हरषि उर लाए ॥<br/>
        <br/>
        रघुपति कीन्ही बहुत बड़ाई ।<br/>
        तुम मम प्रिय भरत-हि सम भाई ॥<br/>
        <br/>
        सहस बदन तुम्हरो जस गावै ।<br/>
        अस कहि श्रीपति कंठ लगावै ॥<br/>
        <br/>
        सनकादिक ब्रह्मादि मुनीसा ।<br/>
        नारद सारद सहित अहीसा ॥<br/>
        <br/>
        जम कुबेर दिगपाल जहाँ ते ।<br/>
        कवि कोविद कहि सके कहाँ ते ॥<br/>
        <br/>
        तुम उपकार सुग्रीवहि कीन्हा ।<br/>
        राम मिलाय राज पद दीन्हा ॥<br/>
        <br/>
        तुम्हरो मंत्र बिभीषण माना ।<br/>
        लंकेश्वर भये सब जग जाना ॥<br/>
        <br/>
        जुग सहस्त्र जोजन पर भानू ।<br/>
        लिल्यो ताहि मधुर फ़ल जानू ॥<br/>
        <br/>
        प्रभु मुद्रिका मेलि मुख माही ।<br/>
        जलधि लाँघि गए अचरज नाही ॥<br/>
        <br/>
        दुर्गम काज जगत के जेते ।<br/>
        सुगम अनुग्रह तुम्हरे तेते ॥<br/>
        <br/>
        राम दुआरे तुम रखवारे ।<br/>
        होत ना आज्ञा बिनु पैसारे ॥<br/>
        <br/>
        सब सुख लहैं तुम्हारी सरना ।<br/>
        तुम रक्षक काहु को डरना ॥<br/>
        <br/>
        आपन तेज सम्हारो आपै ।<br/>
        तीनों लोक हाँक तै कापै ॥<br/>
        <br/>
        भूत पिशाच निकट नहि आवै ।<br/>
        महावीर जब नाम सुनावै ॥<br/>
        <br/>
        नासै रोग हरे सब पीरा ।<br/>
        जपत निरंतर हनुमत बीरा ॥<br/>
        <br/>
        संकट तै हनुमान छुडावै ।<br/>
        मन क्रम वचन ध्यान जो लावै ॥<br/>
        <br/>
        सब पर राम तपस्वी राजा ।<br/>
        तिनके काज सकल तुम साजा ॥<br/>
        <br/>
        और मनोरथ जो कोई लावै ।<br/>
        सोई अमित जीवन फल पावै ॥<br/>
        <br/>
        चारों जुग परताप तुम्हारा ।<br/>
        है परसिद्ध जगत उजियारा ॥<br/>
        <br/>
        साधु संत के तुम रखवारे ।<br/>
        असुर निकंदन राम दुलारे ॥<br/>
        <br/>
        अष्ट सिद्धि नौ निधि के दाता ।<br/>
        अस बर दीन जानकी माता ॥<br/>
        <br/>
        राम रसायन तुम्हरे पासा ।<br/>
        सदा रहो रघुपति के दासा ॥<br/>
        <br/>
        तुम्हरे भजन राम को पावै ।<br/>
        जनम जनम के दुख बिसरावै ॥<br/>
        <br/>
        अंतकाल रघुवरपुर जाई ।<br/>
        जहाँ जन्म हरिभक्त कहाई ॥<br/>
        <br/>
        और देवता चित्त ना धरई ।<br/>
        हनुमत सेई सर्व सुख करई ॥<br/>
        <br/>
        संकट कटै मिटै सब पीरा ।<br/>
        जो सुमिरै हनुमत बलबीरा ॥<br/>
        <br/>
        जै जै जै हनुमान गुसाईँ ।<br/>
        कृपा करहु गुरु देव की नाई ॥<br/>
        <br/>
        जो सत बार पाठ कर कोई ।<br/>
        छूटहि बंदि महा सुख होई ॥<br/>
        <br/>
        जो यह पढ़े हनुमान चालीसा ।<br/>
        होय सिद्ध साखी गौरीसा ॥<br/>
        <br/>
        तुलसीदास सदा हरि चेरा ।<br/>
        कीजै नाथ हृदय मह डेरा ॥<br/>
        <h3>॥ दोहा ॥</h3>
        पवन तनय संकट हरन, मंगल मूरति रूप ।<br/>
        राम लखन सीता सहित, हृदय बसहु सुर भूप ॥<br/>`},{id:"ram_stuti",title:"Shree Ram Stuti",youtube:"EiBdfBciDA0",html:`<h1>॥ श्री राम स्तुति ॥</h1>
        <h2>॥दोहा॥</h2><br/>
        श्री रामचन्द्र कृपालु भजुमन
        हरण भवभय दारुणं ।<br/>
        नव कंज लोचन कंज मुख
        कर कंज पद कंजारुणं ॥१॥<br/>
        <br/>
        कन्दर्प अगणित अमित छवि
        नव नील नीरद सुन्दरं ।<br/>
        पटपीत मानहुँ तडित रुचि शुचि
        नोमि जनक सुतावरं ॥२॥<br/>
        <br/>
        भजु दीनबन्धु दिनेश दानव
        दैत्य वंश निकन्दनं ।<br/>
        रघुनन्द आनन्द कन्द कोशल
        चन्द दशरथ नन्दनं ॥३॥<br/>
        <br/>
        शिर मुकुट कुंडल तिलक
        चारु उदारु अङ्ग विभूषणं ।<br/>
        आजानु भुज शर चाप धर
        संग्राम जित खरदूषणं ॥४॥<br/>
        <br/>
        इति वदति तुलसीदास शंकर
        शेष मुनि मन रंजनं ।<br/>
        मम् हृदय कंज निवास कुरु
        कामादि खलदल गंजनं ॥५॥<br/>
        <br/>
        मन जाहि राच्यो मिलहि सो
        वर सहज सुन्दर सांवरो ।<br/>
        करुणा निधान सुजान शील
        स्नेह जानत रावरो ॥६॥<br/>
        <br/>
        एहि भांति गौरी असीस सुन सिय
        सहित हिय हरषित अली।<br/>
        तुलसी भवानिहि पूजी पुनि-पुनि
        मुदित मन मन्दिर चली ॥७॥<br/>
        <br/>
        <h2>॥ सोरठा ॥</h2><br/>
        जानी गौरी अनुकूल सिय
        हिय हरषु न जाइ कहि ।<br/>
        मंजुल मंगल मूल वाम
        अङ्ग फरकन लगे।<br/>
        <br/>`},{id:"hanuman_aarti",title:"Hanuman Aarti",youtube:"gbYXo2Xqlmk",html:`<h1>॥ हनुमान आरती ॥</h1>
        आरती कीजै हनुमान लला की ।<br/>
        दुष्ट दलन रघुनाथ कला की ॥ <br/>
        <br/>
        जाके बल से गिरवर काँपे ।<br/>
        रोग-दोष जाके निकट न झाँके ॥<br/>
        अंजनि पुत्र महा बलदाई ।<br/>
        संतन के प्रभु सदा सहाई ॥<br/>
        <br/>
        दे वीरा रघुनाथ पठाए ।<br/>
        लंका जारि सिया सुधि लाये ॥<br/>
        लंका सो कोट समुद्र सी खाई ।<br/>
        जात पवनसुत बार न लाई ॥<br/>
        <br/>
        लंका जारि असुर संहारे ।<br/>
        सियाराम जी के काज सँवारे ॥<br/>
        लक्ष्मण मुर्छित पड़े सकारे ।<br/>
        लाये संजिवन प्राण उबारे ॥<br/>
        <br/>
        पैठि पताल तोरि जमकारे ।<br/>
        अहिरावण की भुजा उखारे ॥<br/>
        बाईं भुजा असुर दल मारे ।<br/>
        दाहिने भुजा संतजन तारे ॥<br/>
        <br/>
        सुर-नर-मुनि जन आरती उतरें ।<br/>
        जय जय जय हनुमान उचारें ॥<br/>
        कंचन थार कपूर लौ छाई ।<br/>
        आरती करत अंजना माई ॥<br/>
        <br/>
        जो हनुमानजी की आरती गावे ।<br/>
        बसहिं बैकुंठ परम पद पावे ॥<br/>
        लंक विध्वंस किये रघुराई ।<br/>
        तुलसीदास स्वामी कीर्ति गाई ॥<br/>
        <br/>
        आरती कीजै हनुमान लला की ।<br/>
        दुष्ट दलन रघुनाथ कला की ॥<br/>
        <br/>
        <b>॥ इति संपूर्णंम् ॥</b><br/>`},{id:"dss",title:"Durga Saptashati",carousel:16,imageBase:"/spiritual/saptashati/saptashati_adhyay_"},{id:"mahishasur_mardini",title:"Aigiri Nandini",html:`<h1>महिषासुरमर्दिनी स्तोत्रम्</h1><br/>
    अयि गिरिनन्दिनि नन्दितमेदिनि विश्वविनोदिनि नन्दिनुते<br/>
गिरिवरविन्ध्यशिरोऽधिनिवासिनि विष्णुविलासिनि जिष्णुनुते ।<br/>
भगवति हे शितिकण्ठकुटुम्बिनि भूरिकुटुम्बिनि भूरिकृते<br/>
जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ १ ॥<br/><br/>
सुरवरवर्षिणि दुर्धरधर्षिणि दुर्मुखमर्षिणि हर्षरते <br/>
त्रिभुवनपोषिणि शङ्करतोषिणि किल्बिषमोषिणि घोषरते <br/>
दनुजनिरोषिणि दितिसुतरोषिणि दुर्मदशोषिणि सिन्धुसुते<br/>
जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ २ ॥<br/><br/>

अयि जगदम्ब मदम्ब कदम्ब वनप्रियवासिनि हासरते<br/>
शिखरि शिरोमणि तुङ्गहिमलय शृङ्गनिजालय मध्यगते ।<br/>
मधुमधुरे मधुकैटभगञ्जिनि कैटभभञ्जिनि रासरते<br/>
जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ ३ ॥<br/><br/>

अयि शतखण्ड विखण्डितरुण्ड वितुण्डितशुण्द गजाधिपते<br/>
रिपुगजगण्ड विदारणचण्ड पराक्रमशुण्ड मृगाधिपते ।<br/>
निजभुजदण्ड निपातितखण्ड विपातितमुण्ड भटाधिपते<br/>
जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ ४ ॥<br/><br/>

अयि रणदुर्मद शत्रुवधोदित दुर्धरनिर्जर शक्तिभृते<br/>
चतुरविचार धुरीणमहाशिव दूतकृत प्रमथाधिपते ।<br/>
दुरितदुरीह दुराशयदुर्मति दानवदुत कृतान्तमते<br/>
जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ ५ ॥<br/><br/>

अयि शरणागत वैरिवधुवर वीरवराभय दायकरे<br/>
त्रिभुवनमस्तक शुलविरोधि शिरोऽधिकृतामल शुलकरे ।<br/>
दुमिदुमितामर धुन्दुभिनादमहोमुखरीकृत दिङ्मकरे<br/>
जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ ६ ॥<br/><br/>

अयि निजहुङ्कृति मात्रनिराकृत धूम्रविलोचन धूम्रशते<br/>
समरविशोषित शोणितबीज समुद्भवशोणित बीजलते ।<br/>
शिवशिवशुम्भ निशुम्भमहाहव तर्पितभूत पिशाचरते<br/>
जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ ७ ॥<br/><br/>

धनुरनुषङ्ग रणक्षणसङ्ग परिस्फुरदङ्ग नटत्कटके<br/>
कनकपिशङ्ग पृषत्कनिषङ्ग रसद्भटशृङ्ग हताबटुके ।<br/>
कृतचतुरङ्ग बलक्षितिरङ्ग घटद्बहुरङ्ग रटद्बटुके<br/>
जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ ८ ॥<br/><br/>

सुरललना ततथेयि तथेयि कृताभिनयोदर नृत्यरते<br/>
कृत कुकुथः कुकुथो गडदादिकताल कुतूहल गानरते ।<br/>
धुधुकुट धुक्कुट धिंधिमित ध्वनि धीर मृदंग निनादरते<br/>
जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ ९ ॥<br/><br/>

जय जय जप्य जयेजयशब्द परस्तुति तत्परविश्वनुते<br/>
झणझणझिञ्झिमि झिङ्कृत नूपुरशिञ्जितमोहित भूतपते ।<br/>
नटित नटार्ध नटी नट नायक नाटितनाट्य सुगानरते<br/>
जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ १० ॥<br/><br/>

अयि सुमनःसुमनःसुमनः सुमनःसुमनोहरकान्तियुते<br/>
श्रितरजनी रजनीरजनी रजनीरजनी करवक्त्रवृते ।<br/>
सुनयनविभ्रमर भ्रमरभ्रमर भ्रमरभ्रमराधिपते<br/>
जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ ११ ॥<br/><br/>

सहितमहाहव मल्लमतल्लिक मल्लितरल्लक मल्लरते<br/>
विरचितवल्लिक पल्लिकमल्लिक झिल्लिकभिल्लिक वर्गवृते ।<br/>
शितकृतफुल्ल समुल्लसितारुण तल्लजपल्लव सल्ललिते<br/>
जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ १२ ॥<br/><br/>

अविरलगण्ड गलन्मदमेदुर मत्तमतङ्ग जराजपते<br/>
त्रिभुवनभुषण भूतकलानिधि रूपपयोनिधि राजसुते ।<br/>
अयि सुदतीजन लालसमानस मोहन मन्मथराजसुते<br/>
जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ १३ ॥<br/>

कमलदलामल कोमलकान्ति कलाकलितामल भाललते<br/>
सकलविलास कलानिलयक्रम केलिचलत्कल हंसकुले ।<br/>
अलिकुलसङ्कुल कुवलयमण्डल मौलिमिलद्बकुलालिकुले<br/>
जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ १४ ॥<br/><br/>

करमुरलीरव वीजितकूजित लज्जितकोकिल मञ्जुमते<br/>
मिलितपुलिन्द मनोहरगुञ्जित रञ्जितशैल निकुञ्जगते ।<br/>
निजगणभूत महाशबरीगण सद्गुणसम्भृत केलितले<br/>
जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ १५ ॥<br/><br/>

कटितटपीत दुकूलविचित्र मयुखतिरस्कृत चन्द्ररुचे<br/>
प्रणतसुरासुर मौलिमणिस्फुर दंशुलसन्नख चन्द्ररुचे<br/>
जितकनकाचल मौलिमदोर्जित निर्भरकुञ्जर कुम्भकुचे<br/>
जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ १६ ॥<br/><br/>

विजितसहस्रकरैक सहस्रकरैक सहस्रकरैकनुते<br/>
कृतसुरतारक सङ्गरतारक सङ्गरतारक सूनुसुते ।<br/>
सुरथसमाधि समानसमाधि समाधिसमाधि सुजातरते ।<br/>
जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ १७ ॥<br/><br/>

पदकमलं करुणानिलये वरिवस्यति योऽनुदिनं सुशिवे<br/>
अयि कमले कमलानिलये कमलानिलयः स कथं न भवेत् ।<br/>
तव पदमेव परम्पदमित्यनुशीलयतो मम किं न शिवे<br/>
जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ १८ ॥<br/><br/>

कनकलसत्कलसिन्धुजलैरनुषिञ्चति तेगुणरङ्गभुवम्<br/>
भजति स किं न शचीकुचकुम्भतटीपरिरम्भसुखानुभवम् ।<br/>
तव चरणं शरणं करवाणि नतामरवाणि निवासि शिवम्<br/>
जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ १९ ॥<br/><br/>

तव विमलेन्दुकुलं वदनेन्दुमलं सकलं ननु कूलयते<br/>
किमु पुरुहूतपुरीन्दु मुखी सुमुखीभिरसौ विमुखीक्रियते ।<br/>
मम तु मतं शिवनामधने भवती कृपया किमुत क्रियते<br/>
जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ २० ॥<br/><br/>

अयि मयि दीन दयालुतया कृपयैव त्वया भवितव्यमुमे<br/>
अयि जगतो जननी कृपयासि यथासि तथानुमितासिरते ।<br/>
यदुचितमत्र भवत्युररीकुरुतादुरुतापमपाकुरुते<br/>
जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥ २१ ॥<br/><br/>

<h2>स्तुतिमिमां स्तिमितः सुसमाधिनां नियमतो यमतोनुदिनं पठेत्।<br/>
परमया रमया स निषेव्यते पिरजनोरिजनोपि तं भजेत् ।।</h2>`},{id:"siddhakunjika",title:"Siddha Kunjika Stotram",html:`<h1> ॥ सिद्ध कुंजिका स्तोत्रम् ॥</h1>

ॐ अस्य श्रीकुंजिकास्तोत्रमंत्रस्य सदाशिव ऋषिः, अनुष्टुप् छंदः,<br/>
श्रीत्रिगुणात्मिका देवता, ॐ ऐं बीजं, ॐ ह्रीं शक्तिः, ॐ क्लीं कीलकम्,<br/>
मम सर्वाभीष्टसिद्ध्यर्थे जपे विनियोगः ।<br/>

<h2>शिव उवाच ।</h2>
शृणु देवि प्रवक्ष्यामि कुंजिकास्तोत्रमुत्तमम् ।<br/>
येन मंत्रप्रभावेण चंडीजापः शुभो भवेत् ॥ 1 ॥<br/>

न कवचं नार्गलास्तोत्रं कीलकं न रहस्यकम् ।<br/>
न सूक्तं नापि ध्यानं च न न्यासो न च वार्चनम् ॥ 2 ॥<br/>

कुंजिकापाठमात्रेण दुर्गापाठफलं लभेत् ।<br/>
अति गुह्यतरं देवि देवानामपि दुर्लभम् ॥ 3 ॥<br/>

गोपनीयं प्रयत्नेन स्वयोनिरिव पार्वति ।<br/>
मारणं मोहनं वश्यं स्तंभनोच्चाटनादिकम् ।<br/>
पाठमात्रेण संसिद्ध्येत् कुंजिकास्तोत्रमुत्तमम् ॥ 4 ॥<br/>

<h2>अथ मंत्रः ।</h2>
ॐ ऐं ह्रीं क्लीं चामुंडायै विच्चे ।<br/>
ॐ ग्लौं हुं क्लीं जूं सः ज्वालय ज्वालय ज्वल ज्वल प्रज्वल प्रज्वल<br/>
ऐं ह्रीं क्लीं चामुंडायै विच्चे ज्वल हं सं लं क्षं फट् स्वाहा ॥ 5 ॥<br/>
इति मंत्रः ।<br/>

नमस्ते रुद्ररूपिण्यै नमस्ते मधुमर्दिनि ।<br/>
नमः कैटभहारिण्यै नमस्ते महिषार्दिनि ॥ 6 ॥<br/>

नमस्ते शुंभहंत्र्यै च निशुंभासुरघातिनि ।<br/>
जाग्रतं हि महादेवि जपं सिद्धं कुरुष्व मे ॥ 7 ॥<br/>

ऐंकारी सृष्टिरूपायै ह्रींकारी प्रतिपालिका ।<br/>
क्लींकारी कामरूपिण्यै बीजरूपे नमोऽस्तु ते ॥ 8 ॥<br/>

चामुंडा चंडघाती च यैकारी वरदायिनी ।<br/>
विच्चे चाभयदा नित्यं नमस्ते मंत्ररूपिणि ॥ 9 ॥<br/>

धां धीं धूं धूर्जटेः पत्नी वां वीं वूं वागधीश्वरी ।<br/>
क्रां क्रीं क्रूं कालिका देवि शां शीं शूं मे शुभं कुरु ॥ 10 ॥<br/>

हुं हुं हुंकाररूपिण्यै जं जं जं जंभनादिनी ।<br/>
भ्रां भ्रीं भ्रूं भैरवी भद्रे भवान्यै ते नमो नमः ॥ 11 ॥<br/>

अं कं चं टं तं पं यं शं वीं दुं ऐं वीं हं क्षम् ।<br/>
धिजाग्रं धिजाग्रं त्रोटय त्रोटय दीप्तं कुरु कुरु स्वाहा ॥ 12 ॥<br/>

पां पीं पूं पार्वती पूर्णा खां खीं खूं खेचरी तथा ।<br/>
सां सीं सूं सप्तशती देव्या मंत्रसिद्धिं कुरुष्व मे ॥ 13 ॥<br/>

<h3>कुंजिकायै नमो नमः । </h3>

इदं तु कुंजिकास्तोत्रं मंत्रजागर्तिहेतवे ।
अभक्ते नैव दातव्यं गोपितं रक्ष पार्वति ॥ 14 ॥ <br/>

यस्तु कुंजिकया देवि हीनां सप्तशतीं पठेत् ।
न तस्य जायते सिद्धिररण्ये रोदनं यथा ॥ 15 ॥ <br/>

<h3>इति श्रीरुद्रयामले गौरीतंत्रे शिवपार्वतीसंवादे कुंजिकास्तोत्रं संपूर्णम् ।</h3><br/>`},{id:"jai_ambe_gauri",title:"Jai Ambe Gauri",html:`<h1>जय अम्बे गौरी</h1>
      <div style="font-size:18px;line-height:2;margin:30px 0">
        जय अम्बे गौरी, मैया जय श्यामा गौरी।<br/>
        तुमको निशदिन ध्यावत, हरि ब्रह्मा शिवरी॥<br/>
        ॐ जय अम्बे गौरी॥<br/><br/>
        मांग सिंदूर विराजत, टीको मृगमद को।<br/>
        उज्जवल से दोउ नैना, चंद्रवदन नीको॥<br/>
        ॐ जय अम्बे गौरी॥<br/><br/>
        कनक समान कलेवर, रक्ताम्बर राजै।<br/>
        रक्तपुष्प गल माला, कंठन पर साजै॥<br/>
        ॐ जय अम्बे गौरी॥<br/><br/>
        केहरि वाहन राजत, खड्ग खप्पर धारी।<br/>
        सुर-नर-मुनि-जन सेवत, तिनके दुखहारी॥<br/>
        ॐ जय अम्बे गौरी॥<br/><br/>
        कानन कुण्डल शोभित, नासाग्रे मोती।<br/>
        कोटिक चंद्र दिवाकर, सम राजत ज्योती॥<br/>
        ॐ जय अम्बे गौरी॥<br/><br/>
        शुम्भ-निशुम्भ बिदारे, महिषासुर घाती।<br/>
        धूम्र विलोचन नैना, निशदिन मदमाती॥<br/>
        ॐ जय अम्बे गौरी॥<br/><br/>
        चण्ड-मुण्ड संहारे, शोणित बीज हरे।<br/>
        मधु-कैटभ दोउ मारे, सुर भयहीन करे॥<br/>
        ॐ जय अम्बे गौरी॥<br/><br/>
        ब्रह्माणी, रूद्राणी, तुम कमला रानी।<br/>
        आगम-निगम-बखानी, तुम शिव पटरानी॥<br/>
        ॐ जय अम्बे गौरी॥
      </div>`}];function nm(){const[t,r]=I.useState(()=>window.innerWidth<720);return I.useEffect(()=>{const e=()=>r(window.innerWidth<720);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),t}function om({base:t,count:r}){const[e,n]=I.useState(0);return s.jsxs("div",{style:{maxWidth:560,margin:"0 auto"},children:[s.jsx("div",{style:ct.carouselFrame,children:s.jsx("img",{src:`${t}${e+1}.jpg`,alt:`Adhyay ${e+1}`,style:ct.carouselImg})}),s.jsxs("div",{style:ct.carouselNav,children:[s.jsxs("button",{onClick:()=>n(o=>(o-1+r)%r),style:ct.carouselBtn,children:[s.jsx(Pn,{size:16})," Prev"]}),s.jsxs("span",{style:ct.carouselCount,children:["Adhyay ",e+1," / ",r]}),s.jsxs("button",{onClick:()=>n(o=>(o+1)%r),style:ct.carouselBtn,children:["Next ",s.jsx(pe,{size:16})]})]})]})}function sm(){const t=nm(),[r,e]=I.useState(!1),[n,o]=I.useState(ao[0].id),i=ao.find(d=>d.id===n)||ao[0],l=d=>{o(d),t&&e(!1)},a={...ct.sidebar,...t?ct.sidebarOverlay:{},...t&&!r?ct.sidebarHidden:{}};return s.jsxs("div",{style:ct.shell,children:[s.jsx("style",{children:im}),t&&r&&s.jsx("div",{style:ct.backdrop,onClick:()=>e(!1)}),s.jsxs("aside",{style:a,children:[s.jsxs("div",{style:ct.sideHead,children:[s.jsx("div",{style:ct.brand,children:"Anvil · Spiritual"}),t&&s.jsx("button",{onClick:()=>e(!1),style:ct.iconBtn,children:s.jsx(mt,{size:17})})]}),s.jsx("div",{style:ct.sideScroll,children:ao.map(d=>{const g=d.id===n;return s.jsx("button",{onClick:()=>l(d.id),style:{...ct.sideItem,...g?ct.sideItemOn:{}},children:d.title},d.id)})})]}),s.jsxs("main",{style:ct.main,children:[t&&s.jsxs("button",{onClick:()=>e(!0),style:ct.hamburger,children:[s.jsx(Hl,{size:17}),s.jsx("span",{style:ct.hamburgerLabel,children:i.title})]}),s.jsxs("div",{style:ct.contentWrap,children:[i.youtube&&s.jsx("div",{style:ct.videoFrame,children:s.jsx("iframe",{src:`https://www.youtube.com/embed/${i.youtube}`,title:i.title,style:ct.video,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},i.youtube)}),i.carousel?s.jsx(om,{base:i.imageBase,count:i.carousel}):s.jsx("div",{className:"spiritual-content",dangerouslySetInnerHTML:{__html:i.html}})]})]})]})}const im=`
.spiritual-content { font-family: 'Inter', system-ui, sans-serif; color: #26241F; line-height: 1.9; font-size: 16px; text-align: center; }
.spiritual-content h1 { font-family: 'Fraunces', Georgia, serif; font-size: 24px; color: #8268B0; margin: 8px 0 18px; letter-spacing: -0.01em; }
.spiritual-content h2 { font-family: 'Fraunces', Georgia, serif; font-size: 18px; color: #7A5EA8; margin: 20px 0 8px; }
.spiritual-content h3 { font-size: 15px; color: #9A968C; text-transform: uppercase; letter-spacing: 0.06em; margin: 18px 0 6px; }
.spiritual-content b { color: #8268B0; }
.spiritual-content div { text-align: center; }
`,ct={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"#F7F6F3",minHeight:"100vh",color:"#26241F",position:"relative",overflow:"hidden"},sidebar:{width:240,flexShrink:0,background:"#fff",borderRight:"1px solid #ECEAE3",display:"flex",flexDirection:"column"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.15)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.35)",zIndex:20},sideHead:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 14px 12px"},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"#9A968C",fontWeight:700},sideScroll:{flex:1,overflowY:"auto",padding:"0 8px 16px"},sideItem:{display:"block",width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"#4A463E",textAlign:"left",marginBottom:2},sideItemOn:{background:"rgba(130,104,176,0.12)",color:"#8268B0",fontWeight:700},main:{flex:1,padding:"26px 22px",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid #E0DDD5",background:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"#4A463E",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:220},contentWrap:{background:"#fff",borderRadius:14,padding:"26px 28px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",maxWidth:760,margin:"0 auto"},videoFrame:{position:"relative",width:"100%",maxWidth:600,margin:"0 auto 22px",aspectRatio:"16 / 9",borderRadius:12,overflow:"hidden",background:"#000"},video:{position:"absolute",inset:0,width:"100%",height:"100%",border:"none"},carouselFrame:{background:"#FAFAF8",borderRadius:12,padding:8,border:"1px solid #ECEAE3"},carouselImg:{width:"100%",borderRadius:8,display:"block"},carouselNav:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:14},carouselBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid #E0DDD5",background:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"#4A463E",cursor:"pointer",fontFamily:"inherit"},carouselCount:{fontSize:13,fontWeight:700,color:"#8268B0",fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"none",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,color:"#6B675E"}},Ar={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},lm=Object.keys(Ar),am=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],dm=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],gm=()=>new Date().toISOString().slice(0,10),um=(t,r)=>`${dm[r-1]} ${t}`,bm=(t,r)=>{const e=new Date(t,r,0).getDate();return Array.from({length:e},(n,o)=>`${t}-${String(r).padStart(2,"0")}-${String(o+1).padStart(2,"0")}`)},cm=(t,r)=>{const e=new Date(t,r-1,1).getDay();return e===0?6:e-1};function pm(){const t=gm(),[r,e]=I.useState(new Date().getFullYear()),[n,o]=I.useState(new Date().getMonth()+1),[i,l]=I.useState([]),[a,d]=I.useState([]),[g,m]=I.useState({}),[v,f]=I.useState(null),[S,w]=I.useState(!1),[k,C]=I.useState(!1),[c,u]=I.useState({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:t}),b=I.useCallback(async()=>{const[p,T,y]=await Promise.all([K.getTopics(),K.getDueToday(),K.getCalendar(r,n)]);l(p),d(T),m(y)},[r,n]);I.useEffect(()=>{b()},[b]);const x=async p=>{await K.toggleReviewDone(p),b()},A=async()=>{const p=c.intervals.split(",").map(T=>parseInt(T.trim(),10)).filter(T=>!isNaN(T));!c.topic.trim()||p.length===0||(await K.createTopic({pillar:c.pillar,topic:c.topic.trim(),intervals:p,learned_date:c.learned_date||t}),u({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:t}),C(!1),b())},{deleteItem:_,toasts:L,handleUndo:R,handleDismiss:z}=ms(K.deleteTopic,K.restoreTopic,b),D=(p,T)=>_(p,T),j=()=>{n===1?(e(p=>p-1),o(12)):o(p=>p-1),f(null)},M=()=>{n===12?(e(p=>p+1),o(1)):o(p=>p+1),f(null)},O=i.filter(p=>!p.cemented),J=i.filter(p=>p.cemented),ot=bm(r,n),W=cm(r,n),h=v?i.flatMap(p=>p.reviews.filter(T=>T.due_date===v).map(T=>({...T,topic:p.topic,pillar:p.pillar,total:p.reviews.length}))):[];return s.jsxs("div",{style:G.page,children:[s.jsxs("div",{style:G.head,children:[s.jsxs("div",{children:[s.jsx("div",{style:G.eyebrow,children:"Anvil · Revision"}),s.jsx("h1",{style:G.h1,children:"Spaced Repetition"})]}),s.jsxs("button",{onClick:()=>C(!0),style:G.addBtn,children:[s.jsx(Yr,{size:15})," Add topic"]})]}),k&&s.jsxs("div",{style:G.addBox,children:[s.jsx("input",{autoFocus:!0,placeholder:"What did you learn?",value:c.topic,onChange:p=>u(T=>({...T,topic:p.target.value})),onKeyDown:p=>p.key==="Enter"&&A(),style:G.input}),s.jsxs("div",{style:G.addRow,children:[s.jsx("select",{value:c.pillar,onChange:p=>u(T=>({...T,pillar:p.target.value})),style:G.select,children:lm.map(p=>s.jsx("option",{children:p},p))}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[s.jsx("label",{style:{fontSize:10,fontWeight:600,color:"#9A968C",textTransform:"uppercase"},children:"Learned on"}),s.jsx("input",{type:"date",value:c.learned_date,onChange:p=>u(T=>({...T,learned_date:p.target.value})),style:{...G.select,fontSize:13}})]}),s.jsx("div",{style:{flex:1,minWidth:0},children:s.jsx("input",{value:c.intervals,onChange:p=>u(T=>({...T,intervals:p.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:G.input})})]}),s.jsxs("div",{style:G.addRow,children:[s.jsxs("button",{onClick:A,style:G.saveBtn,children:[s.jsx(_t,{size:14})," Save"]}),s.jsxs("button",{onClick:()=>C(!1),style:G.cancelBtn,children:[s.jsx(mt,{size:14})," Cancel"]})]})]}),a.length>0&&s.jsxs("div",{style:G.section,children:[s.jsxs("div",{style:G.sectionTitle,children:[s.jsx(Ru,{size:15,color:"#C2536B"}),"Due Today",s.jsx("span",{style:G.badge,children:a.length})]}),a.map(p=>{var y,F;const T=((y=Ar[p.pillar])==null?void 0:y.dot)||"#9A968C";return s.jsxs("div",{style:{...G.reviewCard,borderLeft:`3px solid ${T}`,...p.is_missed?{opacity:.85}:{}},children:[s.jsx("button",{onClick:()=>x(p.review_id),style:{...G.checkbox,...p.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:p.done&&s.jsx(_t,{size:12,color:"#fff",strokeWidth:3})}),s.jsxs("div",{style:{flex:1,minWidth:0},children:[s.jsx("div",{style:G.reviewTopic,children:p.topic}),s.jsxs("div",{style:G.reviewMeta,children:[s.jsxs("span",{style:{...G.stageTag,background:((F=Ar[p.pillar])==null?void 0:F.soft)||"rgba(0,0,0,0.05)",color:T},children:["Review ",p.stage,"/",p.total_stages]}),p.is_missed&&s.jsxs("span",{style:G.missedTag,children:["missed · ",p.due_date]})]})]})]},p.review_id)})]}),s.jsxs("div",{style:G.section,children:[s.jsxs("div",{style:G.sectionTitle,children:["Active Topics ",s.jsx("span",{style:G.badge,children:O.length})]}),O.length===0&&s.jsx("div",{style:G.empty,children:"No active topics. Add something you learned today."}),O.map(p=>{var U,st;const T=((U=Ar[p.pillar])==null?void 0:U.dot)||"#9A968C",y=((st=Ar[p.pillar])==null?void 0:st.soft)||"rgba(0,0,0,0.05)",F=p.reviews.filter(Z=>Z.done).length;return s.jsxs("div",{style:G.topicCard,children:[s.jsxs("div",{style:G.topicHead,children:[s.jsx("span",{style:{...G.dot,background:T}}),s.jsx("span",{style:G.topicName,children:p.topic}),s.jsx("span",{style:G.topicPillar,children:p.pillar}),s.jsxs("span",{style:G.topicProgress,children:[F,"/",p.reviews.length," done"]}),s.jsx("button",{onClick:()=>D(p.id,p.topic),style:G.ghostBtn,children:s.jsx(mt,{size:13})})]}),s.jsxs("div",{style:G.reviewDots,children:[p.reviews.map(Z=>{Z.due_date<t;const yt=Z.due_date===t;return s.jsx("button",{onClick:()=>x(Z.id),title:`Review ${Z.stage} · ${Z.due_date}${Z.done?" · Done":""}`,style:{...G.reviewDot,background:Z.done?T:yt?y:"#F2F1EC",border:`2px solid ${Z.done||yt?T:"#E4E2DA"}`,color:Z.done?"#fff":T},children:Z.stage},Z.id)}),s.jsxs("span",{style:G.learnedDate,children:["Learned ",p.learned_date]})]})]},p.id)})]}),J.length>0&&s.jsxs("div",{style:G.section,children:[s.jsxs("button",{onClick:()=>w(p=>!p),style:G.cementedToggle,children:[S?s.jsx($l,{size:15}):s.jsx(pe,{size:15}),s.jsx(Rn,{size:14,color:"#C9A227"}),"Cemented",s.jsx("span",{style:{...G.badge,background:"rgba(201,162,39,0.12)",color:"#8A6E1A"},children:J.length})]}),S&&J.map(p=>{var y;const T=((y=Ar[p.pillar])==null?void 0:y.dot)||"#9A968C";return s.jsx("div",{style:{...G.topicCard,opacity:.75},children:s.jsxs("div",{style:G.topicHead,children:[s.jsx("span",{style:{...G.dot,background:T}}),s.jsx("span",{style:G.topicName,children:p.topic}),s.jsx("span",{style:G.topicPillar,children:p.pillar}),s.jsx(Rn,{size:13,color:"#C9A227",style:{marginLeft:"auto"}})]})},p.id)})]}),s.jsxs("div",{style:G.calCard,children:[s.jsxs("div",{style:G.calHead,children:[s.jsx("button",{onClick:j,style:G.calNav,children:"‹"}),s.jsxs("div",{style:G.calTitle,children:[um(r,n)," · Review Calendar"]}),s.jsx("button",{onClick:M,style:G.calNav,children:"›"})]}),s.jsx("div",{style:G.calDow,children:am.map(p=>s.jsx("div",{style:G.calDowCell,children:p},p))}),s.jsxs("div",{style:G.calGrid,children:[Array.from({length:W}).map((p,T)=>s.jsx("div",{},`p${T}`)),ot.map((p,T)=>{const y=g[p]||0,F=p===t,U=p===v,st=p<t;return s.jsxs("button",{onClick:()=>f(U?null:p),style:{...G.calDay,background:U?"#26241F":F?"#F2F1EC":"#fff",color:U?"#fff":F?"#26241F":st?"#6B675E":"#C3BFB5",borderColor:F||U?"#26241F":"#ECEAE3",fontWeight:F||U?700:500},children:[T+1,y>0&&s.jsx("span",{style:{...G.calBadge,background:U?"#fff":"#C2536B",color:U?"#26241F":"#fff"},children:y})]},p)})]}),v&&s.jsxs("div",{style:G.dayDetail,children:[s.jsxs("div",{style:G.dayDetailTitle,children:["Reviews for ",v]}),h.length===0?s.jsx("div",{style:G.empty,children:"No reviews scheduled for this day."}):h.map(p=>{var y,F;const T=((y=Ar[p.pillar])==null?void 0:y.dot)||"#9A968C";return s.jsxs("div",{style:{...G.reviewCard,borderLeft:`3px solid ${T}`},children:[s.jsx("button",{onClick:()=>x(p.id),style:{...G.checkbox,...p.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:p.done&&s.jsx(_t,{size:12,color:"#fff",strokeWidth:3})}),s.jsxs("div",{children:[s.jsx("div",{style:G.reviewTopic,children:p.topic}),s.jsxs("span",{style:{...G.stageTag,background:((F=Ar[p.pillar])==null?void 0:F.soft)||"rgba(0,0,0,0.05)",color:T},children:["Review ",p.stage,"/",p.total]})]})]},p.id)})]})]}),s.jsx(fs,{toasts:L,onUndo:R,onDismiss:z})]})}const G={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"#F7F6F3",minHeight:"100%",padding:"26px 22px",color:"#26241F",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"#9A968C",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#26241F",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},addBox:{background:"#fff",borderRadius:12,padding:16,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},addRow:{display:"flex",gap:8,alignItems:"center"},input:{flex:1,border:"1px solid #E4E2DA",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",minWidth:0},select:{border:"1px solid #E4E2DA",borderRadius:8,padding:"9px 10px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid #E4E2DA",background:"#fff",color:"#6B675E",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},section:{marginBottom:20},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"#4A463E",marginBottom:10},badge:{fontSize:11,fontWeight:700,background:"#F2F1EC",color:"#6B675E",borderRadius:10,padding:"1px 7px"},reviewCard:{display:"flex",alignItems:"center",gap:12,background:"#fff",borderRadius:10,padding:"12px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},checkbox:{width:22,height:22,borderRadius:6,border:"2px solid #E0DDD5",background:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,padding:0},reviewTopic:{fontSize:13.5,fontWeight:600,marginBottom:4},reviewMeta:{display:"flex",alignItems:"center",gap:8},stageTag:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10},missedTag:{fontSize:11,color:"#C2536B",fontWeight:600},topicCard:{background:"#fff",borderRadius:12,padding:"13px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},topicHead:{display:"flex",alignItems:"center",gap:8,marginBottom:10},dot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},topicName:{fontSize:14,fontWeight:600,flex:1},topicPillar:{fontSize:11,color:"#9A968C",fontWeight:500},topicProgress:{fontSize:11,fontWeight:700,color:"#6B675E",background:"#F2F1EC",padding:"2px 7px",borderRadius:10},ghostBtn:{border:"none",background:"none",color:"#C3BFB5",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},reviewDots:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},reviewDot:{width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",fontSize:11,fontWeight:700,padding:0},learnedDate:{fontSize:11,color:"#9A968C",marginLeft:"auto"},cementedToggle:{display:"flex",alignItems:"center",gap:8,border:"none",background:"none",cursor:"pointer",fontSize:13,fontWeight:700,color:"#4A463E",padding:"4px 0",fontFamily:"inherit",marginBottom:8},empty:{fontSize:13,color:"#9A968C",padding:"16px 0",textAlign:"center"},calCard:{background:"#fff",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{border:"none",background:"none",fontSize:20,cursor:"pointer",color:"#6B675E",padding:"0 6px",lineHeight:1},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"#9A968C",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4},calDay:{aspectRatio:"1",border:"1.5px solid #ECEAE3",background:"#fff",borderRadius:8,fontSize:12,cursor:"pointer",fontFamily:"inherit",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:1,position:"relative",padding:2},calBadge:{fontSize:9,fontWeight:800,borderRadius:6,padding:"0 4px",lineHeight:"14px",minWidth:14,textAlign:"center"},dayDetail:{marginTop:16,paddingTop:16,borderTop:"1px solid #ECEAE3"},dayDetailTitle:{fontSize:13,fontWeight:700,color:"#4A463E",marginBottom:10}},go=[{id:1,title:"Regular Habits",cards:[{id:1,text:"1. I always do everything I need to do, when I need to do it. "},{id:2,text:"2. I never argue or let my emotions work against me. "},{id:3,text:"3. I have a good memory. I easily and automatically remember any name or anything that is important to me. "},{id:4,text:"4. I eat only what I should. "},{id:5,text:"5. I am a good listener. I hear everything that is said. I am attentive, interested, and aware of everything that is going on around me. "},{id:6,text:"6. I have the courage to state my opinions. I take responsibility for myself and everything I say and do."},{id:7,text:"7. I never spend more than I earn. I am financially responsible, both for my present and for my future."},{id:8,text:"8. I set goals and I follow them. I set my sights, take the appropriate action, and achieve my goals."},{id:9,text:"9. I spend time with my family and my loved ones. I enjoy sharing their lives with mine and my life with theirs."}]},{id:2,title:"Motivational",cards:[{id:1,text:"1. I can do anything I believe I can do. I’ve got it and every day I get more of it. I have talent, skills, and ability"},{id:2,text:"2. I set goals and I reach them. I know what I want out of life. I go after it and I get it. "},{id:3,text:"3. People like me, and I feel good about myself. I have a sense of pride in whoa am and I believe in myself. Nothing seems to stop me. I have a lot of determination. "},{id:4,text:"4. I turn problems into advantages. I find possibilities in things that other people never give a chance."},{id:5,text:"5. I have a lot of energy––I am very alive. I enjoy life and I can tell it and so can others"},{id:6,text:"6. I keep myself up, looking ahead, and liking it. I know that I can accomplish anything I choose, and I refuse to let anything negative hold me back or stand in my way. I am not afraid of anything or anyone. I have strength, power, conviction, and confidence. "},{id:7,text:"7. I like challenges and I meet them head on, face to face––today especially. I am on top of the world and I’m going for it. "},{id:8,text:"8. I have a clear picture in my mind of what I want. I can see it in front of me. "},{id:9,text:"9. I know what I want and I know how to get it. I know that it’s all up to me and I know I can do it. Roadblocks don’t bother me. They just mean that I am alive and running, and I’m not going to stand still for anything. "},{id:10,text:"10. I trust myself I’ve got what it takes––plenty of it––and I know how to use it. "},{id:11,text:"11. Today, more than ever. Today I am unstoppable. I’ve got myself together and I’m getting more together every day. And today––look out world, here I come. "},{id:12,text:"12. Limitations? I don’t even recognize them as limitations. There is no challenge I can’t conquer; there is no wall I can’t climb over. "},{id:13,text:"13. There is no problem I can’t defeat or turn around and make it work for me. I stand tall. I am honest and sincere. I like to deal with people and they like me. "},{id:14,text:"14. I think well; I think clearly. I am organized; I am in control of myself, and everything about me. I call my shots and no one has to call them for me. I never blame anyone else for the circumstances of my life. "},{id:15,text:"15. I accept my failings and move past them as easily as I accept the rewards for my victories. I never demand perfection of myself, but I expect the very best of what I have to give––and that’s what I get. I never give myself excuses. "},{id:16,text:"16. I get things done on time and in the right way. Today I have the inner strength to do more than ever. I am an exceptional human being. "},{id:17,text:"17. My goals and my incredible belief in myself turn my goals into reality. I have the power to live my dreams."},{id:18,text:"18.  I believe in them like I believe in myself. And that belief is so strong that there is nothing that diminishes my undefeatable spirit. "}]},{id:3,title:"Organized planning",cards:[{id:1,text:"1. I am organized and in control of my life. I am in control of myself, my thoughts, my time, my actions, and my future. "},{id:2,text:"2. I know what to do and when to do it, and I do everything I need to do, when I need to do it. "},{id:3,text:"3. I program my mind to make the maximum use of my time. I am in control of my time and how to use it. I like being organized, efficient, and on top of things."},{id:4,text:"4. Controlling my time keeps me that way. "},{id:5,text:"5. I never waste time––I always “plan” time. And because I plan my time, I always have time to do the things I choose to do. "},{id:6,text:"6. Each day I become more organized and in control of all areas of my life––at home, at work, in my mind and in my thoughts, in everything that I do. "},{id:7,text:"7. I am very well organized. Each night I make a list of things I need to do the next day. I set my priorities and I follow them. "},{id:8,text:"8. I am always on time. I am always right where I need to be, exactly when I need to be there. "},{id:9,text:"9. Being on time is easy for me and the more I control my time and the more organized I become, the easier it is. "},{id:10,text:"10. I am in control of my feelings, my emotions, my attitudes, and my needs. I control them; they do not control me. "},{id:11,text:"11. I have the winning vote in the outcome of my own actions. And I choose to live my life by choice, not chance. Therefore, I take the time to take control."},{id:12,text:"12. I have an organized and orderly mind. Because I think in an organized way, I conduct my life in an organized manner. "},{id:13,text:"13. I think in the most positive and productive way at all times and in all things. The way I think is the way I live––and I think “right.” "},{id:14,text:"14. I am the director of my destiny. I know where I am going and I know why I am going there. My earthly life is in my hands and in my control. "},{id:15,text:"15. I control my goals and the achievement of my goals. I organize my goals by writing each of them down, along with the steps I need to reach them. One of the reasons for my success is that my goals are clearly defined and organized."},{id:16,text:"16. I am in complete control of what I think and how I think. Therefore, I choose to think only those thoughts which help me and which are of genuine benefit to me."}]},{id:4,title:"Solving Problems",cards:[{id:1,text:"1. I’m good at solving problems. I like challenges and I meet them head on. "},{id:2,text:"2. Problems are my teachers. They help me to learn and grow. Without them, I would be going nowhere. With them, I am moving forward in the direction of my own goals. "},{id:3,text:"3. There is no problem which I cannot conquer. I am strong in mind, body, and spirit. My will, my strength, and my determination are always greater than any problem I face."},{id:4,text:"4. When I meet a new problem, I do not see the problem as my enemy. I know that finding the solution to the problem will move me forward in my own personal growth."},{id:5,text:"5. Because I know that problems are a key ingredient in my spiritual and mental education and preparation, I recognize that all problems are important to me. "},{id:6,text:"6. I do not fear problems, I solve them. I do not ignore problems, I confront them. I do not avoid problems, I conquer them. "},{id:7,text:"7. I know that every problem holds within itself the keys to its own solution. Therefore, the better I understand the problem, the clearer I am able to see its solution. "},{id:8,text:"8. Having problems is not a problem for me. I am confident, self-assured, positive, and determined. I always know that I am going to overcome any problem I encounter––and I always do. "},{id:9,text:"9. I am good at breaking large obstacles down into smaller pieces that are easier to handle. And I never make any problem appear to be larger than it actually is. "},{id:10,text:"10. I never worry. I turn “worry time” into positive, constructive, “solution time.” I keep my mind alert and open to all solutions—and solutions come quickly and easily to me. "},{id:11,text:"11. I have learned to recognize that many problems carry with them benefits and potential opportunities which would not have presented themselves had the problem not occurred in the first place. "},{id:12,text:"12. I do not seek to live a life which is free from all problems. Instead, I choose to live a life of finding solutions and enjoying the benefits which those solutions create."},{id:13,text:"13. Challenge, conquer, solution, and win are words which I live by daily. Challenges are opportunities. Conquering them is the inevitable outcome. "},{id:14,text:"14. “Solutions” are the stepping stones to my success, and “Winning” is my way of life."}]},{id:5,title:"Self Esteem",cards:[{id:1,text:"1. I really am very special. I like who I am and I feel good about myself. "},{id:2,text:"2. Although I always work to improve myself and I get better every day, I like who I am today. And tomorrow, when I’m even better, I’ll like myself then, too. "},{id:3,text:"3. It’s true that there really is no one else like me in the entire world. There never was another me before, and there will never be another me again. "},{id:4,text:"4. I am unique––from the top of my head to the bottom of my feet. In some ways I may look and act and sound like some others––but I am not them. I am me."},{id:5,text:"5. I wanted to be somebody––and now I know I am I would rather be me than anyone else in the world. "},{id:6,text:"6. I like how I feel and I like how I think and I like how I do things. I approve of me and I approve of who I am."},{id:7,text:"7. I have many beautiful qualities about me. I have talents and skills and abilities. I even have talents that I don’t even know about yet. And I am discovering new talents inside myself all the time. "},{id:8,text:"8. I am positive. I am confident. I radiate good things. If you look closely, you can even see a glow around me."},{id:9,text:"9. I am full of life. I like life and I’m glad to be alive. I am a very special person, living at a very special time. "},{id:10,text:"10. I am intelligent. My mind is quick and alert and clever and fun. I think good thoughts, and my mind makes things work right for me. "},{id:11,text:"11. I have a lot of energy and enthusiasm and vitality. I am exciting and I really enjoy being me. "},{id:12,text:"12. I like to be around other people and other people like to be around me. People like to hear what I have to say and know what I have to think. "},{id:13,text:"13. I smile a lot. I am happy on the inside and I am happy on the outside. "},{id:14,text:"14. I am interested in many things. I appreciate all the blessings I have, and the things that I learn, and all the things I will learn today and tomorrow and forever––just as long as I am. "},{id:15,text:"15. I am warm, sincere, honest, and genuine. I am all of these things and more. And all of these things are me. I like who I am, and I’m glad to be me."}]},{id:6,title:"Self-Responsibility",cards:[{id:1,text:"1. I take full responsibility for everything about me––even the thoughts that I think. I am in control of the vast resources of my own mind."},{id:2,text:"2. I alone am responsible for what I do and what I tell myself about me. No one can share this responsibility with me. "},{id:3,text:"3. I also allow others to accept their responsibilities far themselves and I do not try to accept their responsibilities for them. "},{id:4,text:"4. I enjoy being responsible. It puts me in charge of being me––and that’s a challenge I enjoy. "},{id:5,text:"5. I allow no one else, at any time, to assume control or responsibility over my life or over anything that I do. My responsibility to others is an extension of my own responsibility to myself. "},{id:6,text:"6. I choose to leave nothing about me up to chance. When it comes to me––and anything in my life––I choose to CHOOSE. "},{id:7,text:"7. My choices are mine alone to make for myself. I do not, at any time, allow anyone else to make my choices for me. And I accept full responsibility for every choice and decision I make. "},{id:8,text:"8. I always meet all of the obligations which I accept. And I accept no obligations which I will not meet. "},{id:9,text:"9. I am trustworthy. I can be counted on. I have accepted winning responsibility for myself––and I always live up to the responsibilities I accept. "},{id:10,text:"10. There is no they on whom I lay the blame, or with whom I share my own personal responsibilities. I have learned the great secret of mastering my own destiny. I have learned that “they” is “me.” "},{id:11,text:"11. I have no need to make excuses and no one needs to carry my responsibility for me. I gladly carry my own weight––and I carry it well. "},{id:12,text:"12. Each day I acknowledge and accept the responsibility––not only for my own actions––but also for my emotions, my thoughts, and my attitude. "},{id:13,text:"13. I accept the responsibility for living my life in a way which creates my strengths, my happiness, my positive, healthy beliefs, and for my past, my present, and my future."}]},{id:7,title:"Freedom from worry",cards:[{id:1,text:"1. I never worry. Instead of worrying, I find solutions and I act on them. "},{id:2,text:"2. My mind is constantly in tune with the positive. It is bright, cheerful, enthusiastic, and full of good, positive thoughts and ideas. "},{id:3,text:"3. I am able to relax easily and comfortably in my body and in my mind. I am calm, confident, and self-assured. "},{id:4,text:"4. My mind is orderly and well-organized. I consciously choose what I think and I always choose those thoughts which are the most positive and beneficial for me. "},{id:5,text:"5. All of my thoughts create healthiness within me. My mind dwells only on those thoughts which create more harmony, balance, and well-being within me and in the world around me. "},{id:6,text:"6. I automatically, and always, think in a decisive and determined way. "},{id:7,text:"7. I am full of resolution and the absolute assurance of the best possible outcome in everything that I do. "},{id:8,text:"8. I choose to look at the world around me in the bright, healthy light of optimism and self-assurance. "},{id:9,text:"9. I do only those things which are best for me. I create the best within myself, I attract the best in others, and I find the best in the world around me. "},{id:10,text:"10. I willingly, and without fail, take care of the duties and obligations which I have accepted for myself."},{id:11,text:"11. I commit only to those responsibilities which I know I can fulfill. "},{id:12,text:"12. I focus the attention of my mind only on those things that I can do something about. If I cannot affect it or direct it––I accept it. "},{id:13,text:"13. I keep my mind too busy thinking good, healthy, positive, constructive, and productive thoughts to ever have any time for worry. "},{id:14,text:"14. I control the thoughts I choose. No thought, at any time, can dwell in my mind without my approval or permission. I never worry."}]},{id:8,title:"Eating Habits",cards:[{id:1,text:"1. I am in control of myself in every way––at all times and in all situations. "},{id:2,text:"2. Each time I sit down to eat I reaffirm my determination to achieve my goal. By eating right, and never giving in, I am reaching the weight I want. "},{id:3,text:"3. Whether eating in or eating out, I really enjoy eating less. "},{id:4,text:"4. I never feel the need to finish the food in front of me. I eat only what I should––and never one bite more. "},{id:5,text:"5. One way to weight-loss that’s easy and works, is less food on my plate, and less on my fork. "},{id:6,text:'6. By ordering less when I eat out, and by serving myself smaller portions at home, I keep myself aware of the importance of staying with my goal––each and every day. “Less on my plate means less on my waist."'},{id:7,text:"7. When I sit down to eat, at no time do I allow anyone else to influence, tempt, or discourage me in any negative way."},{id:8,text:"8. What I eat, and the goals I reach, are up to me. And I give no one the right to hinder or control my success."},{id:9,text:"9. Although others may benefit from my success, I. am achieving my weight-loss goals for my own personal reasons––for myself, my life, my future, and my own personal well-being."},{id:10,text:"10. I am never, at any time, tempted to take one bite more than I should. I am strong, I am capable of reaching my goal, and I am doing it."},{id:11,text:"11. Being in situations which put a lot of food in front of me is not a problem to me now. I simply say “No” to the food and “Yes” to my success."},{id:12,text:"12. I enjoy sitting down to eat. Each time I do I conquer my past, and I create a trimmer, happier, more self-confident future in front of me. "},{id:13,text:"13. When I sit down to eat, I do not need someone else to remind me of my goal, or to keep me from eating something I should not. I take full responsibility for myself, and no one else has to do it for me. "},{id:14,text:"14. Controlling my weight, and my appetite, is easy for me now. I enjoy smaller portions, smaller bites, and a slower, healthier, more relaxed way of eating. "},{id:15,text:"15. I have set my goal and I am staying with it. I have turned mealtime into “achievement time.”"}]}],bd=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#3A7CA5","#4C9A6B"],Ks=t=>bd[t%bd.length],mm=t=>t+"1A",Wu="anvil_affirmation_favs",fm=()=>{try{return new Set(JSON.parse(localStorage.getItem(Wu)||"[]"))}catch{return new Set}};function vm(){const[t,r]=I.useState(0),[e,n]=I.useState(0),[o,i]=I.useState(fm);I.useEffect(()=>{localStorage.setItem(Wu,JSON.stringify([...o]))},[o]);const l=(C,c)=>`${C}#${c.id}`,a=t==="FAV"?go.flatMap((C,c)=>C.cards.filter(u=>o.has(l(C.title,u))).map(u=>({...u,color:Ks(c),title:C.title}))):go[t].cards.map(C=>({...C,color:Ks(t),title:go[t].title})),d=a.length,g=Math.min(e,Math.max(0,d-1)),m=a[g],v=C=>{r(C),n(0)},f=I.useCallback(()=>n(C=>Math.max(0,C-1)),[]),S=I.useCallback(()=>n(C=>Math.min(d-1,C+1)),[d]);I.useEffect(()=>{const C=c=>{c.key==="ArrowLeft"&&f(),c.key==="ArrowRight"&&S()};return window.addEventListener("keydown",C),()=>window.removeEventListener("keydown",C)},[f,S]);const w=C=>i(c=>{const u=new Set(c);return u.has(C)?u.delete(C):u.add(C),u}),k=m?m.color:"#8268B0";return s.jsxs("div",{style:at.page,children:[s.jsxs("div",{style:at.head,children:[s.jsx("div",{style:at.eyebrow,children:"Anvil · Affirmations"}),s.jsx("h1",{style:at.h1,children:"Affirmations"}),s.jsx("div",{style:at.subhead,children:"One at a time — read it, mean it."})]}),s.jsxs("div",{style:at.filterBar,children:[go.map((C,c)=>{const u=t===c,b=Ks(c);return s.jsxs("button",{onClick:()=>v(c),style:{...at.chip,...u?{background:b,color:"#fff",borderColor:b}:{}},children:[s.jsx("span",{style:{...at.catDot,background:u?"#fff":b}})," ",C.title," ",s.jsx("span",{style:at.chipCount,children:C.cards.length})]},C.title)}),s.jsxs("button",{onClick:()=>v("FAV"),style:{...at.chip,...t==="FAV"?{background:"#C9A227",color:"#fff",borderColor:"#C9A227"}:{}},children:[s.jsx(jo,{size:12,fill:t==="FAV"?"#fff":"none"})," Favorites ",s.jsx("span",{style:at.chipCount,children:o.size})]})]}),d===0?s.jsxs("div",{style:at.empty,children:[s.jsx(jo,{size:22,color:"#C3BFB5"}),s.jsx("div",{children:"No favorites yet — tap the star on a card to save it here."})]}):s.jsxs("div",{style:at.viewer,children:[s.jsxs("div",{style:{...at.card,borderTop:`4px solid ${k}`},children:[s.jsx("div",{style:{...at.cardCat,color:k,background:mm(k)},children:m.title}),s.jsx("button",{onClick:()=>w(l(m.title,m)),style:{...at.favBtn,color:o.has(l(m.title,m))?"#C9A227":"#C3BFB5"},title:"Favorite",children:s.jsx(jo,{size:20,fill:o.has(l(m.title,m))?"#C9A227":"none"})}),s.jsx(kp,{size:30,color:k,style:{opacity:.25}}),s.jsx("p",{style:at.cardText,children:m.text.trim()})]}),s.jsxs("div",{style:at.navRow,children:[s.jsxs("button",{onClick:f,disabled:g===0,style:{...at.navBtn,...g===0?at.navBtnDisabled:{}},children:[s.jsx(Pn,{size:18})," Back"]}),s.jsxs("span",{style:{...at.counter,color:k},children:[g+1," ",s.jsxs("span",{style:at.counterTotal,children:["/ ",d]})]}),s.jsxs("button",{onClick:S,disabled:g===d-1,style:{...at.navBtn,...g===d-1?at.navBtnDisabled:{}},children:["Next ",s.jsx(pe,{size:18})]})]}),s.jsx("div",{style:at.dots,children:a.map((C,c)=>s.jsx("button",{onClick:()=>n(c),style:{...at.dot,...c===g?{background:k,transform:"scale(1.5)"}:{}},title:`${c+1}`},c))})]})]})}const at={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"#F7F6F3",minHeight:"100%",padding:"28px 24px",color:"#26241F",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"#9A968C",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"#9A968C",marginTop:4},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:22},chip:{display:"flex",alignItems:"center",gap:6,border:"1px solid #E0DDD5",background:"#fff",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:600,color:"#4A463E",cursor:"pointer",fontFamily:"inherit"},chipCount:{fontSize:11,fontWeight:700,opacity:.7},catDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},empty:{display:"flex",flexDirection:"column",alignItems:"center",gap:10,fontSize:13.5,color:"#9A968C",padding:"56px 12px",textAlign:"center",background:"#fff",borderRadius:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},viewer:{display:"flex",flexDirection:"column",alignItems:"center"},card:{position:"relative",background:"#fff",borderRadius:16,padding:"40px 32px 44px",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",width:"100%",minHeight:240,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",boxSizing:"border-box"},cardCat:{position:"absolute",top:16,left:16,fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:12,textTransform:"uppercase",letterSpacing:"0.04em"},favBtn:{position:"absolute",top:14,right:14,border:"none",background:"none",cursor:"pointer",padding:4,display:"grid",placeItems:"center"},cardText:{fontSize:21,lineHeight:1.55,margin:"14px 0 0",fontWeight:500,color:"#26241F",fontFamily:"'Fraunces',Georgia,serif",maxWidth:560},navRow:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",maxWidth:420,marginTop:22},navBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid #E0DDD5",background:"#fff",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:600,color:"#4A463E",cursor:"pointer",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},counter:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},counterTotal:{fontSize:13,fontWeight:600,color:"#9A968C"},dots:{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center",marginTop:20,maxWidth:480},dot:{width:7,height:7,borderRadius:"50%",border:"none",background:"#D9D6CE",cursor:"pointer",padding:0,transition:"transform 0.12s"}},ie={financial:{label:"Financial",leaf:"#C9A227",shape:"round"},academic:{label:"Academic",leaf:"#3A7CA5",shape:"pine"},relationship:{label:"Relationship",leaf:"#C2536B",shape:"round"},spiritual:{label:"Spiritual",leaf:"#8268B0",shape:"tall"},health:{label:"Health",leaf:"#4C9A6B",shape:"round"}},Ko="health";function Ql({species:t=Ko,progress:r=1,withered:e=!1,size:n=200}){const o=Math.max(0,Math.min(1,r)),i=ie[t]||ie[Ko],l=e?"#8A7B63":"#7A5A3C",a=e?"#A99C84":i.leaf,d=e?"#8F8268":a,g=14+o*46,m=112-g,v=o>.14,f=v?8+o*30:0;return s.jsxs("svg",{viewBox:"0 0 120 120",width:n,height:n,style:{display:"block"},children:[s.jsx("ellipse",{cx:"60",cy:"114",rx:20+o*14,ry:"5",fill:"rgba(38,36,31,0.08)"}),!v&&s.jsxs("g",{transform:`translate(60 ${112-o*40})`,children:[s.jsx("path",{d:"M0 8 C0 8 0 -2 0 -6",stroke:"#4C9A6B",strokeWidth:"2.5",fill:"none"}),s.jsx("ellipse",{cx:"-5",cy:"-4",rx:"6",ry:"3.5",fill:"#4C9A6B",transform:"rotate(-30 -5 -4)"}),s.jsx("ellipse",{cx:"5",cy:"-4",rx:"6",ry:"3.5",fill:"#5BB07E",transform:"rotate(30 5 -4)"})]}),v&&s.jsxs(s.Fragment,{children:[s.jsx("rect",{x:60-(2+o*2.5),y:m,width:(2+o*2.5)*2,height:g,rx:"2",fill:l}),i.shape==="pine"?s.jsxs(s.Fragment,{children:[s.jsx("polygon",{points:`60,${m-f*2.2} ${60-f},${m+4} ${60+f},${m+4}`,fill:a}),s.jsx("polygon",{points:`60,${m-f*3} ${60-f*.8},${m-f*.7} ${60+f*.8},${m-f*.7}`,fill:d})]}):i.shape==="tall"?s.jsxs(s.Fragment,{children:[s.jsx("ellipse",{cx:"60",cy:m-f*.3,rx:f*.78,ry:f*1.55,fill:a}),s.jsx("ellipse",{cx:"60",cy:m-f*.9,rx:f*.5,ry:f*1,fill:d,opacity:"0.9"})]}):s.jsxs(s.Fragment,{children:[s.jsx("circle",{cx:"60",cy:m,r:f,fill:a}),s.jsx("circle",{cx:60-f*.7,cy:m+f*.3,r:f*.78,fill:a}),s.jsx("circle",{cx:60+f*.7,cy:m+f*.3,r:f*.78,fill:d}),s.jsx("circle",{cx:"60",cy:m-f*.5,r:f*.8,fill:d,opacity:"0.92"})]})]})]})}function ym({species:t}){return s.jsx(Ql,{species:t,progress:1,size:56})}const hm=[{id:"day",label:"Day"},{id:"week",label:"Week"},{id:"month",label:"Month"},{id:"year",label:"Year"}],hr=t=>t>=60?`${Math.floor(t/60)}h ${t%60}m`:`${t}m`,xm=t=>{const r=t<12?"am":"pm",e=t%12===0?12:t%12;return`${String(e).padStart(2,"0")} ${r}`};function wm(t){const r=t<=60?10:t<=120?20:t<=300?60:120,e=Math.max(60,Math.ceil((t||1)/r)*r),n=[];for(let o=0;o<=e;o+=r)n.push(o);return{max:e,ticks:n}}const Nu=t=>{const r=new Date(t);return r.setHours(0,0,0,0),r},km=t=>{const r=Nu(t),e=(r.getDay()+6)%7;return r.setDate(r.getDate()-e),r},Sm=t=>new Date(t.getFullYear(),t.getMonth(),1),jm=t=>new Date(t.getFullYear(),0,1);function Cm(t,r){if(t==="day"){const o=Nu(r);return{start:o,end:new Date(+o+864e5),prev:new Date(+o-864e5),prev2:new Date(+o-2*864e5)}}if(t==="week"){const o=km(r);return{start:o,end:new Date(+o+7*864e5),prev:new Date(+o-7*864e5),prev2:new Date(+o-14*864e5)}}if(t==="month"){const o=Sm(r),i=r.getFullYear(),l=r.getMonth();return{start:o,end:new Date(i,l+1,1),prev:new Date(i,l-1,1),prev2:new Date(i,l-2,1)}}const e=r.getFullYear();return{start:jm(r),end:new Date(e+1,0,1),prev:new Date(e-1,0,1),prev2:new Date(e-2,0,1)}}function Im({sessions:t=[],onBack:r}){const[e,n]=I.useState("week"),o=new Date,{start:i,end:l,prev:a,prev2:d}=Cm(e,o),g=W=>new Date(W.started_at||W.created_at),m=t.filter(W=>W.completed),v=(W,h,p)=>{const T=g(W);return T>=h&&T<p},f=(W,h)=>m.filter(p=>v(p,W,h)).reduce((p,T)=>p+(T.actual_min||0),0),S=m.filter(W=>v(W,i,l)),w=S.reduce((W,h)=>W+(h.actual_min||0),0),k=f(a,i),C=f(d,a),c=S.length,u=Array(24).fill(0);S.forEach(W=>{u[g(W).getHours()]+=W.actual_min||0});const b=Math.max(...u,0),x=wm(b),A={};S.forEach(W=>{const h=ie[W.tree]?W.tree:Ko;A[h]=(A[h]||0)+(W.actual_min||0)});const _=Object.entries(A).map(([W,h])=>({name:ie[W].label,min:h,color:ie[W].leaf})).sort((W,h)=>h.min-W.min),L=k>0?Math.round((w-k)/k*100):w>0?100:0,R=L>0?Ep:L<0?Ip:wp,z=L>0?"#4C9A6B":L<0?"#C2536B":"#9A968C",D={day:"yesterday",week:"last week",month:"last month",year:"last year"}[e],j={day:"2 days ago",week:"2 weeks ago",month:"2 months ago",year:"2 years ago"}[e],M=54,O=22,J=2*Math.PI*M;let ot=0;return s.jsxs("div",{style:H.page,children:[s.jsxs("div",{style:H.topbar,children:[s.jsxs("button",{onClick:r,style:H.back,children:[s.jsx(mp,{size:18})," Grove"]}),s.jsx("h1",{style:H.h1,children:"Insights"}),s.jsx("div",{style:{width:76}})]}),s.jsx("div",{style:H.rangeBar,children:hm.map(W=>s.jsx("button",{onClick:()=>n(W.id),style:{...H.rangeBtn,...e===W.id?H.rangeOn:{}},children:W.label},W.id))}),s.jsxs("div",{style:H.headline,children:[s.jsxs("div",{style:H.bigStat,children:[s.jsx("div",{style:H.bigVal,children:hr(w)}),s.jsxs("div",{style:H.bigLbl,children:["Focused this ",e]})]}),s.jsxs("div",{style:H.bigStat,children:[s.jsx("div",{style:H.bigVal,children:c}),s.jsx("div",{style:H.bigLbl,children:"Trees"})]})]}),s.jsxs("div",{style:H.card,children:[s.jsxs("div",{style:H.cardHead,children:[s.jsxs("div",{style:H.cardTitle,children:["Your forest this ",e]}),s.jsx("div",{style:H.cardHint,children:"Each tree is a completed session — bigger means longer focus"})]}),s.jsx(Tm,{sessions:S}),s.jsxs("div",{style:H.forestNumber,children:[c," ",c===1?"tree":"trees"," · ",hr(w)," focused"]})]}),s.jsx(Xs,{title:"Focus distribution",hint:"Minutes focused at each time of day",children:b===0?s.jsx(cd,{}):s.jsx(zm,{hours:u,axis:x})}),s.jsx(Xs,{title:"Pillar distribution",hint:"How your focus splits across the five trees",children:_.length===0?s.jsx(cd,{}):s.jsxs("div",{style:H.donutWrap,children:[s.jsxs("svg",{viewBox:"0 0 140 140",width:"150",height:"150",style:{flexShrink:0},children:[_.map(W=>{const h=W.min/(w||1)*J,p=s.jsx("circle",{cx:"70",cy:"70",r:M,fill:"none",stroke:W.color,strokeWidth:O,strokeDasharray:`${h} ${J-h}`,strokeDashoffset:-ot,transform:"rotate(-90 70 70)"},W.name);return ot+=h,p}),s.jsx("text",{x:"70",y:"66",textAnchor:"middle",style:H.donutCenterTop,children:hr(w)}),s.jsx("text",{x:"70",y:"82",textAnchor:"middle",style:H.donutCenterSub,children:"total"})]}),s.jsx("div",{style:H.legend,children:_.map(W=>s.jsxs("div",{style:H.legendRow,children:[s.jsx("span",{style:{...H.legendDot,background:W.color}}),s.jsx("span",{style:H.legendName,children:W.name}),s.jsxs("span",{style:H.legendVal,children:[hr(W.min)," · ",Math.round(W.min/(w||1)*100),"%"]})]},W.name))})]})}),s.jsxs(Xs,{title:"Focus trend",hint:`This ${e} vs the previous two`,children:[s.jsxs("div",{style:H.trend3,children:[s.jsxs("div",{style:H.trendCol,children:[s.jsx("div",{style:H.trendVal,children:hr(w)}),s.jsxs("div",{style:H.trendLbl,children:["This ",e]})]}),s.jsxs("div",{style:H.trendCol,children:[s.jsx("div",{style:{...H.trendVal,color:"#6B675E"},children:hr(k)}),s.jsx("div",{style:H.trendLbl,children:D})]}),s.jsxs("div",{style:H.trendCol,children:[s.jsx("div",{style:{...H.trendVal,color:"#9A968C"},children:hr(C)}),s.jsx("div",{style:H.trendLbl,children:j})]})]}),s.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:s.jsxs("div",{style:{...H.trendBadge,color:z,background:z+"1A"},children:[s.jsx(R,{size:15})," ",L>0?"+":"",L,"% vs ",D]})}),s.jsx(Am,{items:[{label:`This ${e}`,value:w,color:"#4C9A6B"},{label:D,value:k,color:"#C3BFB5"},{label:j,value:C,color:"#DAD6CC"}]})]})]})}const Em=t=>t===0?"12a":t<12?`${t}a`:t===12?"12p":`${t-12}p`;function zm({hours:t,axis:r}){return s.jsxs("div",{children:[s.jsxs("div",{style:H.vcPlot,children:[r.ticks.map(e=>s.jsxs("div",{style:{...H.vcGridRow,bottom:`${e/r.max*100}%`},children:[s.jsx("span",{style:H.vcYLabel,children:e}),s.jsx("div",{style:H.vcGridLine})]},e)),s.jsx("div",{style:H.vcBars,children:t.map((e,n)=>s.jsx("div",{style:H.vcCell,title:`${xm(n)} · ${e} min`,children:s.jsx("div",{style:{...H.vcBar,height:e>0?`max(3px, ${e/r.max*100}%)`:0}})},n))})]}),s.jsx("div",{style:H.vcXAxis,children:t.map((e,n)=>s.jsx("div",{style:H.vcXCell,children:n%3===0?Em(n):""},n))}),s.jsx("div",{style:H.vcYTitle,children:"minutes focused, by hour of day"})]})}function Tm({sessions:t}){if(!t.length)return s.jsx("div",{style:H.sceneEmpty,children:"No trees yet this period. 🌱"});const e=t.slice(0,80),n=t.length-e.length,o=i=>Math.round(Math.max(40,Math.min(88,40+(i||0)*.6)));return s.jsxs("div",{children:[s.jsx("div",{style:H.scene,children:e.map(i=>s.jsx("div",{style:H.sceneTree,title:`${i.label||"Focus"} · ${hr(i.actual_min||i.duration_min)}`,children:s.jsx(Ql,{species:i.tree,progress:1,size:o(i.actual_min||i.duration_min)})},i.id))}),n>0&&s.jsxs("div",{style:H.overflow,children:["+",n," more trees"]})]})}function Xs({title:t,hint:r,children:e}){return s.jsxs("div",{style:H.card,children:[s.jsxs("div",{style:H.cardHead,children:[s.jsx("div",{style:H.cardTitle,children:t}),r&&s.jsx("div",{style:H.cardHint,children:r})]}),e]})}function cd(){return s.jsx("div",{style:H.empty,children:"No focus sessions in this period yet. 🌱"})}function Am({items:t}){const r=Math.max(1,...t.map(e=>e.value));return s.jsx("div",{style:H.tbWrap,children:t.map(e=>s.jsxs("div",{style:H.tbRow,children:[s.jsx("div",{style:H.tbLbl,children:e.label}),s.jsx("div",{style:H.tbTrack,children:s.jsx("div",{style:{...H.tbBar,width:`${e.value/r*100}%`,background:e.color}})}),s.jsx("div",{style:H.tbVal,children:hr(e.value)})]},e.label))})}const H={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"#F7F6F3",minHeight:"100%",padding:"20px 16px 40px",color:"#26241F",boxSizing:"border-box",maxWidth:720,margin:"0 auto"},topbar:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},back:{display:"flex",alignItems:"center",gap:5,border:"1px solid #E0DDD5",background:"#fff",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,color:"#4A463E",cursor:"pointer",fontFamily:"inherit"},h1:{fontSize:20,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},rangeBar:{display:"flex",gap:6,background:"#fff",padding:5,borderRadius:12,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},rangeBtn:{flex:1,border:"none",background:"none",padding:"9px 0",borderRadius:8,fontSize:13.5,fontWeight:600,color:"#6B675E",cursor:"pointer",fontFamily:"inherit"},rangeOn:{background:"#26241F",color:"#fff"},headline:{display:"flex",gap:12,marginBottom:16},bigStat:{flex:1,background:"#fff",borderRadius:14,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},bigVal:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em"},bigLbl:{fontSize:12,color:"#9A968C",marginTop:3,fontWeight:500},card:{background:"#fff",borderRadius:16,padding:"18px 18px 20px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},cardHead:{marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardHint:{fontSize:12,color:"#9A968C",marginTop:2},empty:{fontSize:13,color:"#9A968C",textAlign:"center",padding:"24px 0"},scene:{display:"flex",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"center",gap:"0 2px",padding:"14px 8px 6px",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,minHeight:110,border:"1px solid #ECEAE3"},sceneTree:{lineHeight:0},sceneEmpty:{fontSize:13,color:"#9A968C",textAlign:"center",padding:"34px 0",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,border:"1px solid #ECEAE3"},overflow:{fontSize:11.5,color:"#9A968C",textAlign:"center",marginTop:6,fontWeight:600},forestNumber:{textAlign:"center",marginTop:12,fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"#26241F"},vcPlot:{position:"relative",height:180,paddingLeft:30},vcGridRow:{position:"absolute",left:0,right:0,display:"flex",alignItems:"center",height:0},vcYLabel:{width:26,marginRight:4,textAlign:"right",fontSize:9,color:"#9A968C",fontWeight:600,flexShrink:0},vcGridLine:{flex:1,height:1,background:"#EEEBE4"},vcBars:{position:"absolute",left:30,right:0,top:0,bottom:0,display:"flex",alignItems:"flex-end",gap:1},vcCell:{flex:1,height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"center"},vcBar:{width:"72%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",transition:"height 0.3s"},vcXAxis:{display:"flex",marginLeft:30,marginTop:4},vcXCell:{flex:1,textAlign:"center",fontSize:8.5,color:"#9A968C",fontWeight:600,overflow:"hidden"},vcYTitle:{textAlign:"center",fontSize:9.5,color:"#9A968C",marginTop:6,letterSpacing:"0.06em",textTransform:"uppercase",fontWeight:600},donutWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap",justifyContent:"center"},donutCenterTop:{fontSize:16,fontWeight:800,fill:"#26241F",fontFamily:"'Fraunces',Georgia,serif"},donutCenterSub:{fontSize:9,fill:"#9A968C",textTransform:"uppercase",letterSpacing:"0.08em"},legend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:11,height:11,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:13,fontWeight:600,color:"#26241F",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},legendVal:{fontSize:12,color:"#9A968C",fontWeight:600,flexShrink:0},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"#9A968C",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"#6B675E",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:56,fontSize:11,color:"#6B675E",fontWeight:700,flexShrink:0,textAlign:"right"}},Dm=[15,30,45,60,90],Js="anvil_grove_active",pd=t=>`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`,Xo=t=>t>=60?`${Math.floor(t/60)}h ${t%60}m`:`${t}m`;function Fm(){const[t,r]=I.useState("timer"),[e,n]=I.useState("idle"),[o,i]=I.useState(30),[l,a]=I.useState(!1),[d,g]=I.useState(""),[m,v]=I.useState(Ko),[f,S]=I.useState(30*60),[w,k]=I.useState({sessions:[],stats:null}),C=I.useRef(null),c=I.useRef(null),u=I.useRef(!1),b=I.useCallback(async()=>{try{k(await K.getFocus())}catch{}},[]),x=I.useCallback(async(h,p)=>{if(!u.current){u.current=!0,localStorage.removeItem(Js);try{await K.createFocus({label:d.trim()||null,tree:m,duration_min:o,actual_min:p,completed:h,started_at:c.current,ended_at:new Date().toISOString()})}catch{}b()}},[d,m,o,b]),A=I.useCallback(()=>{if(e!=="running")return;const h=c.current?Math.round((Date.now()-new Date(c.current).getTime())/6e4):0;n("failed"),x(!1,Math.max(0,Math.min(o,h)))},[e,o,x]),_=I.useCallback(()=>{n("done"),S(0),x(!0,o)},[o,x]);I.useEffect(()=>{b();const h=JSON.parse(localStorage.getItem(Js)||"null");if(h&&h.endTime){const p=Math.round((h.endTime-Date.now())/1e3);i(h.duration),g(h.label||""),v(h.tree||"oak"),C.current=h.endTime,c.current=h.startedAt,p>0?(S(p),n("running")):(n("done"),u.current=!1,x(!0,h.duration))}},[]),I.useEffect(()=>{if(e!=="running")return;const h=()=>{const T=Math.round((C.current-Date.now())/1e3);if(T<=0){_();return}S(T)};h();const p=setInterval(h,250);return()=>clearInterval(p)},[e,_]),I.useEffect(()=>{if(e!=="running")return;const h=()=>{document.hidden&&A()};return document.addEventListener("visibilitychange",h),()=>document.removeEventListener("visibilitychange",h)},[e,A]);const L=()=>{u.current=!1,c.current=new Date().toISOString(),C.current=Date.now()+o*60*1e3,localStorage.setItem(Js,JSON.stringify({endTime:C.current,duration:o,label:d,tree:m,startedAt:c.current})),S(o*60),n("running")},R=()=>{n("idle"),S(o*60)},z=h=>{a(!1),i(h),S(h*60)},D=h=>{if(a(!0),h===""){i(0),S(0);return}const p=Math.max(1,Math.min(600,parseInt(h,10)||0));i(p),S(p*60)},j=o*60,M=e==="running"?1-f/j:e==="done"?1:0,O=130,J=2*Math.PI*O,ot=J*(1-(e==="running"?M:e==="done"?1:0)),W=w.stats;return t==="stats"?s.jsx(Im,{sessions:w.sessions,onBack:()=>r("timer")}):s.jsxs("div",{style:X.page,children:[s.jsxs("div",{style:X.head,children:[s.jsx("div",{style:X.eyebrow,children:"Anvil · Grove"}),s.jsx("h1",{style:X.h1,children:"Grove"}),s.jsx("div",{style:X.subhead,children:"Plant a tree, stay focused, grow your grove."}),s.jsxs("button",{onClick:()=>r("stats"),style:X.insightsBtn,disabled:e==="running",children:[s.jsx(fp,{size:15})," Insights"]})]}),W&&s.jsxs("div",{style:X.statRow,children:[s.jsx(uo,{label:"Today",value:Xo(W.today_minutes)}),s.jsx(uo,{label:"Trees",value:W.trees}),s.jsx(uo,{label:"Streak",value:`${W.streak}d`}),s.jsx(uo,{label:"Success",value:`${W.success_rate}%`})]}),s.jsxs("div",{style:X.stage,children:[s.jsxs("div",{style:X.ringWrap,children:[s.jsxs("svg",{width:"300",height:"300",viewBox:"0 0 300 300",style:{position:"absolute",inset:0},children:[s.jsx("circle",{cx:"150",cy:"150",r:O,fill:"none",stroke:"#ECEAE3",strokeWidth:"10"}),s.jsx("circle",{cx:"150",cy:"150",r:O,fill:"none",stroke:e==="failed"?"#C2536B":"#4C9A6B",strokeWidth:"10",strokeLinecap:"round",strokeDasharray:J,strokeDashoffset:ot,transform:"rotate(-90 150 150)",style:{transition:"stroke-dashoffset 0.4s linear"}})]}),s.jsx("div",{style:X.ringInner,children:s.jsx(Ql,{species:m,progress:e==="idle"?0:M,withered:e==="failed",size:170})})]}),e==="idle"&&s.jsxs(s.Fragment,{children:[s.jsx("div",{style:X.timeBig,children:pd(o*60)}),s.jsxs("div",{style:X.controls,children:[s.jsxs("div",{style:X.chips,children:[Dm.map(h=>s.jsxs("button",{onClick:()=>z(h),style:{...X.chip,...!l&&o===h?X.chipOn:{}},children:[h,"m"]},h)),s.jsx("button",{onClick:()=>a(!0),style:{...X.chip,...l?X.chipOn:{}},children:"Custom"})]}),l&&s.jsxs("div",{style:X.customRow,children:[s.jsx("input",{type:"number",min:"1",max:"600",inputMode:"numeric",autoFocus:!0,value:o||"",onChange:h=>D(h.target.value),placeholder:"e.g. 50",style:X.customInput}),s.jsx("span",{style:X.customUnit,children:"minutes"})]}),s.jsx("input",{value:d,onChange:h=>g(h.target.value),placeholder:"What are you focusing on? (optional)",style:X.input,maxLength:60}),s.jsx("div",{style:X.treePick,children:Object.entries(ie).map(([h,p])=>s.jsxs("button",{onClick:()=>v(h),title:p.label,style:{...X.treeBtn,...m===h?{borderColor:p.leaf,background:p.leaf+"1A"}:{}},children:[s.jsx("span",{style:{...X.treeDot,background:p.leaf}}),p.label]},h))}),s.jsx("button",{onClick:L,disabled:o<1,style:{...X.plantBtn,...o<1?{opacity:.5,cursor:"not-allowed"}:{}},children:"Plant tree"})]})]}),e==="running"&&s.jsxs(s.Fragment,{children:[s.jsx("div",{style:X.timeBig,children:pd(f)}),s.jsx("div",{style:X.focusLabel,children:d.trim()||"Focusing…"}),s.jsx("div",{style:X.warn,children:"⚠ Leaving this app will kill your tree."}),s.jsx("button",{onClick:A,style:X.giveUp,children:"Give up"})]}),e==="done"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{style:X.resultTitle,children:["🌳 You grew a ",ie[m].label," tree!"]}),s.jsxs("div",{style:X.resultSub,children:[Xo(o)," of focus added to your grove."]}),s.jsx("button",{onClick:R,style:X.plantBtn,children:"Plant another"})]}),e==="failed"&&s.jsxs(s.Fragment,{children:[s.jsx("div",{style:{...X.resultTitle,color:"#C2536B"},children:"Your tree withered."}),s.jsx("div",{style:X.resultSub,children:"You left before the timer finished. Try again?"}),s.jsx("button",{onClick:R,style:X.plantBtn,children:"Try again"})]})]}),s.jsx(Bm,{sessions:w.sessions,onDelete:async h=>{await K.deleteFocus(h),b()}})]})}function uo({label:t,value:r}){return s.jsxs("div",{style:X.stat,children:[s.jsx("div",{style:X.statValue,children:r}),s.jsx("div",{style:X.statLabel,children:t})]})}function Bm({sessions:t,onDelete:r}){const e=t.filter(l=>l.completed);if(e.length===0)return s.jsx("div",{style:X.forestEmpty,children:"Your grove is empty. Plant your first tree above. 🌱"});const n={};for(const l of e){const a=(l.started_at||l.created_at||"").slice(0,10);(n[a]||(n[a]=[])).push(l)}const o=Object.keys(n).sort().reverse(),i=l=>{const a=new Date().toISOString().slice(0,10);return l===a?"Today":new Date(l+"T00:00").toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})};return s.jsxs("div",{style:X.forest,children:[s.jsxs("div",{style:X.forestHead,children:["Your Grove · ",e.length," trees"]}),o.map(l=>s.jsxs("div",{style:X.daySection,children:[s.jsxs("div",{style:X.dayLabel,children:[i(l)," · ",n[l].length]}),s.jsx("div",{style:X.treeGrid,children:n[l].map(a=>s.jsxs("div",{style:X.treeCard,title:`${a.label||"Focus"} · ${Xo(a.actual_min)}`,onDoubleClick:()=>r(a.id),children:[s.jsx(ym,{species:a.tree}),s.jsx("div",{style:X.treeCardMin,children:Xo(a.actual_min||a.duration_min)}),a.label&&s.jsx("div",{style:X.treeCardLabel,children:a.label})]},a.id))})]},l)),s.jsx("div",{style:X.forestHint,children:"Double-tap a tree to remove it."})]})}const X={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"#F7F6F3",minHeight:"100%",padding:"28px 24px",color:"#26241F",boxSizing:"border-box",maxWidth:820,margin:"0 auto"},head:{marginBottom:16,textAlign:"center"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"#9A968C",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"#9A968C",marginTop:4},insightsBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid #E0DDD5",background:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"#4A463E",cursor:"pointer",fontFamily:"inherit",marginTop:12},statRow:{display:"flex",gap:10,justifyContent:"center",marginBottom:18,flexWrap:"wrap"},stat:{background:"#fff",borderRadius:12,padding:"10px 18px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",minWidth:78},statValue:{fontSize:19,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"#26241F"},statLabel:{fontSize:11,color:"#9A968C",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},stage:{background:"#fff",borderRadius:18,padding:"28px 24px 32px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",display:"flex",flexDirection:"column",alignItems:"center",marginBottom:26},ringWrap:{position:"relative",width:300,height:300,display:"grid",placeItems:"center"},ringInner:{position:"relative",zIndex:1,display:"grid",placeItems:"center"},timeBig:{fontSize:40,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:6},focusLabel:{fontSize:14,color:"#6B675E",marginTop:2,fontWeight:500},warn:{fontSize:12,color:"#C2773B",marginTop:12,fontWeight:600},controls:{width:"100%",maxWidth:380,display:"flex",flexDirection:"column",gap:14,marginTop:8},chips:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},chip:{border:"1px solid #E0DDD5",background:"#fff",padding:"8px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,color:"#4A463E",cursor:"pointer",fontFamily:"inherit"},chipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},customRow:{display:"flex",alignItems:"center",justifyContent:"center",gap:8},customInput:{border:"1px solid #E0DDD5",borderRadius:10,padding:"10px 12px",fontSize:15,fontWeight:700,fontFamily:"inherit",outline:"none",color:"#26241F",textAlign:"center",width:100},customUnit:{fontSize:13,color:"#9A968C",fontWeight:600},input:{border:"1px solid #E0DDD5",borderRadius:10,padding:"11px 13px",fontSize:14,fontFamily:"inherit",outline:"none",color:"#26241F",textAlign:"center"},treePick:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},treeBtn:{display:"flex",alignItems:"center",gap:6,border:"1.5px solid #E0DDD5",background:"#fff",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"#4A463E",cursor:"pointer",fontFamily:"inherit"},treeDot:{width:10,height:10,borderRadius:"50%"},plantBtn:{border:"none",background:"#26241F",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},giveUp:{border:"1px solid #E0DDD5",background:"#fff",color:"#C2536B",padding:"11px 26px",borderRadius:11,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:18},resultTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginTop:14,textAlign:"center"},resultSub:{fontSize:13.5,color:"#9A968C",marginTop:6,marginBottom:18,textAlign:"center"},forest:{background:"#fff",borderRadius:16,padding:"20px 22px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},forestHead:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},forestEmpty:{background:"#fff",borderRadius:16,padding:"40px 20px",textAlign:"center",color:"#9A968C",fontSize:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},daySection:{marginBottom:16},dayLabel:{fontSize:12,fontWeight:700,color:"#9A968C",textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:8},treeGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(80px,1fr))",gap:8},treeCard:{display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 4px",borderRadius:10,cursor:"pointer",background:"#FAFAF8"},treeCardMin:{fontSize:12,fontWeight:700,color:"#4C9A6B",marginTop:-4},treeCardLabel:{fontSize:10.5,color:"#9A968C",marginTop:2,textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:76},forestHint:{fontSize:11,color:"#C3BFB5",textAlign:"center",marginTop:6}};function Rm({onAuthed:t}){const[r,e]=I.useState("login"),[n,o]=I.useState(""),[i,l]=I.useState(""),[a,d]=I.useState(""),[g,m]=I.useState(""),[v,f]=I.useState(!1),S=r==="register",w=async k=>{if(k.preventDefault(),m(""),!i.trim()||!a){m("Email and password are required.");return}if(S&&a.length<6){m("Password must be at least 6 characters.");return}f(!0);try{const C=S?await K.register({name:n,email:i,password:a}):await K.login({email:i,password:a});Ap(C.token),t(C.user)}catch(C){m(C.message||"Something went wrong.")}finally{f(!1)}};return s.jsx("div",{style:wt.page,children:s.jsxs("form",{style:wt.card,onSubmit:w,children:[s.jsxs("div",{style:wt.brand,children:[s.jsx("div",{style:wt.logo,children:"B"}),s.jsx("span",{style:wt.brandName,children:"Anvil"})]}),s.jsx("h1",{style:wt.title,children:S?"Create your account":"Welcome back"}),s.jsx("p",{style:wt.sub,children:S?"Start forging your days.":"Sign in to continue."}),S&&s.jsxs("label",{style:wt.field,children:[s.jsx("span",{style:wt.label,children:"Name"}),s.jsx("input",{value:n,onChange:k=>o(k.target.value),placeholder:"Your name",style:wt.input,autoFocus:!0})]}),s.jsxs("label",{style:wt.field,children:[s.jsx("span",{style:wt.label,children:"Email"}),s.jsx("input",{type:"email",value:i,onChange:k=>l(k.target.value),placeholder:"you@example.com",style:wt.input,autoFocus:!S})]}),s.jsxs("label",{style:wt.field,children:[s.jsx("span",{style:wt.label,children:"Password"}),s.jsx("input",{type:"password",value:a,onChange:k=>d(k.target.value),placeholder:"••••••••",style:wt.input})]}),g&&s.jsx("div",{style:wt.error,children:g}),s.jsx("button",{type:"submit",disabled:v,style:{...wt.submit,...v?{opacity:.6}:{}},children:v?"Please wait…":S?"Create account":"Sign in"}),s.jsxs("div",{style:wt.switch,children:[S?"Already have an account?":"New here?"," ",s.jsx("button",{type:"button",onClick:()=>{e(S?"login":"register"),m("")},style:wt.link,children:S?"Sign in":"Create one"})]})]})})}const wt={page:{minHeight:"100vh",display:"grid",placeItems:"center",background:"#F7F6F3",fontFamily:"'Inter',system-ui,sans-serif",padding:20},card:{width:"100%",maxWidth:380,background:"#fff",borderRadius:16,padding:"32px 28px",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",display:"flex",flexDirection:"column"},brand:{display:"flex",alignItems:"center",gap:9,marginBottom:20},logo:{width:32,height:32,borderRadius:8,background:"#26241F",color:"#fff",display:"grid",placeItems:"center",fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},brandName:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",color:"#26241F"},title:{fontSize:22,fontWeight:700,margin:"0 0 4px",fontFamily:"'Fraunces',Georgia,serif",color:"#26241F"},sub:{fontSize:13.5,color:"#9A968C",margin:"0 0 22px"},field:{display:"flex",flexDirection:"column",gap:5,marginBottom:14},label:{fontSize:12,fontWeight:600,color:"#6B675E"},input:{border:"1px solid #E0DDD5",borderRadius:9,padding:"11px 12px",fontSize:14,fontFamily:"inherit",outline:"none",color:"#26241F"},error:{background:"rgba(194,83,107,0.10)",color:"#C2536B",fontSize:13,padding:"9px 12px",borderRadius:8,marginBottom:14,fontWeight:500},submit:{border:"none",background:"#26241F",color:"#fff",padding:"12px",borderRadius:10,fontSize:14.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},switch:{fontSize:13,color:"#6B675E",textAlign:"center",marginTop:18},link:{border:"none",background:"none",color:"#3A7CA5",fontWeight:700,cursor:"pointer",fontFamily:"inherit",fontSize:13,padding:0}},Zs={habits:{label:"Habits",icon:Sp,component:Gp},quadrant:{label:"Quadrant",icon:Fu,component:Mp},goals:{label:"Goals",icon:Ul,component:Np},grove:{label:"Grove",icon:Cp,component:Fm},journal:{label:"Journal",icon:Au,component:rm},revision:{label:"Revision",icon:Ru,component:pm},affirmations:{label:"Affirmations",icon:_u,component:vm},skills:{label:"Skills",icon:yp,component:em},spiritual:{label:"Spiritual",icon:jo,component:sm}},_m=[{type:"item",id:"habits"},{type:"item",id:"quadrant"},{type:"item",id:"goals"},{type:"item",id:"grove"},{type:"item",id:"journal"},{type:"item",id:"revision"},{type:"item",id:"affirmations"},{type:"item",id:"skills"},{type:"item",id:"spiritual"}];function Lm(){const[t,r]=I.useState(()=>window.innerWidth<720);return I.useEffect(()=>{const e=()=>r(window.innerWidth<720);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),t}function Mm(){const[t,r]=I.useState("habits"),[e,n]=I.useState(!1),[o,i]=I.useState({spiritual:!0}),[l,a]=I.useState(null),[d,g]=I.useState(!1),m=Lm();I.useEffect(()=>{let u=!1;const b=()=>{Gi(),a(null)};return window.addEventListener("anvil-unauthorized",b),Vl()?K.me().then(x=>{u||a(x)}).catch(()=>{}).finally(()=>{u||g(!0)}):g(!0),()=>{u=!0,window.removeEventListener("anvil-unauthorized",b)}},[]);function v(u){r(u),n(!1)}const f=u=>i(b=>({...b,[u]:!b[u]})),S=()=>{Gi(),a(null)};if(!d)return s.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:"'Inter',system-ui,sans-serif",color:"#9A968C"},children:"Loading…"});if(!l)return s.jsx(Rm,{onAuthed:a});const w=Zs[t],k=w.component,C=()=>s.jsx("div",{style:et.navItems,children:_m.map(u=>{if(u.type==="group"){const _=o[u.id],L=u.icon,R=u.children.includes(t);return s.jsxs("div",{children:[s.jsxs("button",{onClick:()=>f(u.id),style:{...et.navItem,...R&&!_?et.navItemOn:{}},children:[s.jsx(L,{size:18}),s.jsx("span",{style:et.navLabel,children:u.label}),_?s.jsx($l,{size:15}):s.jsx(pe,{size:15})]}),_&&u.children.map(z=>{const D=Zs[z],j=D.icon,M=t===z;return s.jsxs("button",{onClick:()=>v(z),title:D.label,style:{...et.navItem,...et.navChild,...M?et.navItemOn:{}},children:[s.jsx(j,{size:16}),s.jsx("span",{style:et.navLabel,children:D.label})]},z)})]},u.id)}const b=Zs[u.id],x=b.icon,A=t===u.id;return s.jsxs("button",{onClick:()=>v(u.id),title:b.label,style:{...et.navItem,...A?et.navItemOn:{}},children:[s.jsx(x,{size:18}),s.jsx("span",{style:et.navLabel,children:b.label})]},u.id)})}),c=()=>s.jsxs("div",{style:et.userFooter,children:[s.jsxs("div",{style:et.userInfo,children:[s.jsx("div",{style:et.userAvatar,children:(l.name||l.email||"?").charAt(0).toUpperCase()}),s.jsxs("div",{style:{minWidth:0},children:[s.jsx("div",{style:et.userName,children:l.name||"You"}),s.jsx("div",{style:et.userEmail,children:l.email})]})]}),s.jsx("button",{onClick:S,style:et.logoutBtn,title:"Sign out",children:s.jsx(xp,{size:16})})]});return s.jsxs("div",{style:et.shell,children:[!m&&s.jsxs("nav",{style:et.nav,children:[s.jsxs("div",{style:et.brand,children:[s.jsx("div",{style:et.brandLogo,children:"B"}),s.jsx("span",{style:et.brandName,children:"Anvil"})]}),s.jsx(C,{}),s.jsx(c,{})]}),m&&e&&s.jsx("div",{style:et.overlay,onClick:()=>n(!1),children:s.jsxs("nav",{style:et.drawer,onClick:u=>u.stopPropagation(),children:[s.jsxs("div",{style:et.drawerHeader,children:[s.jsxs("div",{style:et.brand,children:[s.jsx("div",{style:et.brandLogo,children:"B"}),s.jsx("span",{style:et.brandName,children:"Anvil"})]}),s.jsx("button",{style:et.closeBtn,onClick:()=>n(!1),children:s.jsx(mt,{size:20})})]}),s.jsx(C,{}),s.jsx(c,{})]})}),s.jsxs("div",{style:et.content,children:[m&&s.jsxs("div",{style:et.topBar,children:[s.jsx("button",{style:et.menuBtn,onClick:()=>n(!0),children:s.jsx(Hl,{size:22})}),s.jsx("span",{style:et.topBarTitle,children:w.label}),s.jsx("div",{style:{width:38}})]}),s.jsx("main",{style:et.main,children:s.jsx(k,{})})]})]})}const et={shell:{display:"flex",height:"100vh",overflow:"hidden",fontFamily:"'Inter', system-ui, sans-serif",background:"#F7F6F3"},nav:{width:200,flexShrink:0,background:"#fff",borderRight:"1px solid #ECEAE3",display:"flex",flexDirection:"column",padding:"20px 10px",gap:2},brand:{display:"flex",alignItems:"center",gap:9,padding:"6px 10px 20px",borderBottom:"1px solid #ECEAE3",marginBottom:8},brandLogo:{width:30,height:30,borderRadius:8,background:"#26241F",color:"#fff",display:"grid",placeItems:"center",fontSize:14,fontWeight:800,fontFamily:"'Fraunces', Georgia, serif",flexShrink:0},brandName:{fontSize:16,fontWeight:700,letterSpacing:"-0.01em",color:"#26241F",fontFamily:"'Fraunces', Georgia, serif"},navItems:{display:"flex",flexDirection:"column",gap:2},navItem:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"#6B675E",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},navItemOn:{background:"#F2F1EC",color:"#26241F",fontWeight:700},navChild:{paddingLeft:30,fontSize:13},userFooter:{marginTop:"auto",paddingTop:12,borderTop:"1px solid #ECEAE3",display:"flex",alignItems:"center",gap:8},userInfo:{display:"flex",alignItems:"center",gap:8,flex:1,minWidth:0},userAvatar:{width:30,height:30,borderRadius:"50%",background:"#8268B0",color:"#fff",display:"grid",placeItems:"center",fontSize:13,fontWeight:700,flexShrink:0},userName:{fontSize:13,fontWeight:600,color:"#26241F",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},userEmail:{fontSize:11,color:"#9A968C",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logoutBtn:{border:"1px solid #E0DDD5",background:"#fff",color:"#6B675E",cursor:"pointer",padding:7,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},navLabel:{flex:1},content:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},main:{flex:1,overflowY:"auto",overflowX:"hidden"},topBar:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"#fff",borderBottom:"1px solid #ECEAE3",flexShrink:0},topBarTitle:{fontSize:16,fontWeight:700,color:"#26241F",fontFamily:"'Fraunces', Georgia, serif"},menuBtn:{border:"none",background:"none",cursor:"pointer",color:"#26241F",padding:8,borderRadius:8,display:"grid",placeItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:100,display:"flex"},drawer:{width:220,background:"#fff",height:"100%",display:"flex",flexDirection:"column",padding:"16px 10px",gap:2,boxShadow:"4px 0 24px rgba(0,0,0,0.12)"},drawerHeader:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:4},closeBtn:{border:"none",background:"none",cursor:"pointer",color:"#6B675E",padding:6,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0}};Eu(document.getElementById("root")).render(s.jsx(I.StrictMode,{children:s.jsx(Mm,{})}));
