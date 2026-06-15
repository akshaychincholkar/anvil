(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}})();var Sd={exports:{}},ts={},jd={exports:{}},et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mn=Symbol.for("react.element"),Qu=Symbol.for("react.portal"),Ku=Symbol.for("react.fragment"),Xu=Symbol.for("react.strict_mode"),Ju=Symbol.for("react.profiler"),Zu=Symbol.for("react.provider"),qu=Symbol.for("react.context"),tc=Symbol.for("react.forward_ref"),rc=Symbol.for("react.suspense"),ec=Symbol.for("react.memo"),nc=Symbol.for("react.lazy"),ql=Symbol.iterator;function oc(t){return t===null||typeof t!="object"?null:(t=ql&&t[ql]||t["@@iterator"],typeof t=="function"?t:null)}var Cd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Id=Object.assign,Ed={};function Ve(t,r,e){this.props=t,this.context=r,this.refs=Ed,this.updater=e||Cd}Ve.prototype.isReactComponent={};Ve.prototype.setState=function(t,r){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,r,"setState")};Ve.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zd(){}zd.prototype=Ve.prototype;function qi(t,r,e){this.props=t,this.context=r,this.refs=Ed,this.updater=e||Cd}var tl=qi.prototype=new zd;tl.constructor=qi;Id(tl,Ve.prototype);tl.isPureReactComponent=!0;var ta=Array.isArray,Td=Object.prototype.hasOwnProperty,rl={current:null},Ad={key:!0,ref:!0,__self:!0,__source:!0};function Dd(t,r,e){var n,o={},i=null,l=null;if(r!=null)for(n in r.ref!==void 0&&(l=r.ref),r.key!==void 0&&(i=""+r.key),r)Td.call(r,n)&&!Ad.hasOwnProperty(n)&&(o[n]=r[n]);var a=arguments.length-2;if(a===1)o.children=e;else if(1<a){for(var d=Array(a),g=0;g<a;g++)d[g]=arguments[g+2];o.children=d}if(t&&t.defaultProps)for(n in a=t.defaultProps,a)o[n]===void 0&&(o[n]=a[n]);return{$$typeof:Mn,type:t,key:i,ref:l,props:o,_owner:rl.current}}function sc(t,r){return{$$typeof:Mn,type:t.type,key:r,ref:t.ref,props:t.props,_owner:t._owner}}function el(t){return typeof t=="object"&&t!==null&&t.$$typeof===Mn}function ic(t){var r={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(e){return r[e]})}var ra=/\/+/g;function hs(t,r){return typeof t=="object"&&t!==null&&t.key!=null?ic(""+t.key):r.toString(36)}function fo(t,r,e,n,o){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case Mn:case Qu:l=!0}}if(l)return l=t,o=o(l),t=n===""?"."+hs(l,0):n,ta(o)?(e="",t!=null&&(e=t.replace(ra,"$&/")+"/"),fo(o,r,e,"",function(g){return g})):o!=null&&(el(o)&&(o=sc(o,e+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ra,"$&/")+"/")+t)),r.push(o)),1;if(l=0,n=n===""?".":n+":",ta(t))for(var a=0;a<t.length;a++){i=t[a];var d=n+hs(i,a);l+=fo(i,r,e,d,o)}else if(d=oc(t),typeof d=="function")for(t=d.call(t),a=0;!(i=t.next()).done;)i=i.value,d=n+hs(i,a++),l+=fo(i,r,e,d,o);else if(i==="object")throw r=String(t),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return l}function Vn(t,r,e){if(t==null)return t;var n=[],o=0;return fo(t,n,"","",function(i){return r.call(e,i,o++)}),n}function lc(t){if(t._status===-1){var r=t._result;r=r(),r.then(function(e){(t._status===0||t._status===-1)&&(t._status=1,t._result=e)},function(e){(t._status===0||t._status===-1)&&(t._status=2,t._result=e)}),t._status===-1&&(t._status=0,t._result=r)}if(t._status===1)return t._result.default;throw t._result}var Pt={current:null},vo={transition:null},ac={ReactCurrentDispatcher:Pt,ReactCurrentBatchConfig:vo,ReactCurrentOwner:rl};function Fd(){throw Error("act(...) is not supported in production builds of React.")}et.Children={map:Vn,forEach:function(t,r,e){Vn(t,function(){r.apply(this,arguments)},e)},count:function(t){var r=0;return Vn(t,function(){r++}),r},toArray:function(t){return Vn(t,function(r){return r})||[]},only:function(t){if(!el(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};et.Component=Ve;et.Fragment=Ku;et.Profiler=Ju;et.PureComponent=qi;et.StrictMode=Xu;et.Suspense=rc;et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ac;et.act=Fd;et.cloneElement=function(t,r,e){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=Id({},t.props),o=t.key,i=t.ref,l=t._owner;if(r!=null){if(r.ref!==void 0&&(i=r.ref,l=rl.current),r.key!==void 0&&(o=""+r.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(d in r)Td.call(r,d)&&!Ad.hasOwnProperty(d)&&(n[d]=r[d]===void 0&&a!==void 0?a[d]:r[d])}var d=arguments.length-2;if(d===1)n.children=e;else if(1<d){a=Array(d);for(var g=0;g<d;g++)a[g]=arguments[g+2];n.children=a}return{$$typeof:Mn,type:t.type,key:o,ref:i,props:n,_owner:l}};et.createContext=function(t){return t={$$typeof:qu,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Zu,_context:t},t.Consumer=t};et.createElement=Dd;et.createFactory=function(t){var r=Dd.bind(null,t);return r.type=t,r};et.createRef=function(){return{current:null}};et.forwardRef=function(t){return{$$typeof:tc,render:t}};et.isValidElement=el;et.lazy=function(t){return{$$typeof:nc,_payload:{_status:-1,_result:t},_init:lc}};et.memo=function(t,r){return{$$typeof:ec,type:t,compare:r===void 0?null:r}};et.startTransition=function(t){var r=vo.transition;vo.transition={};try{t()}finally{vo.transition=r}};et.unstable_act=Fd;et.useCallback=function(t,r){return Pt.current.useCallback(t,r)};et.useContext=function(t){return Pt.current.useContext(t)};et.useDebugValue=function(){};et.useDeferredValue=function(t){return Pt.current.useDeferredValue(t)};et.useEffect=function(t,r){return Pt.current.useEffect(t,r)};et.useId=function(){return Pt.current.useId()};et.useImperativeHandle=function(t,r,e){return Pt.current.useImperativeHandle(t,r,e)};et.useInsertionEffect=function(t,r){return Pt.current.useInsertionEffect(t,r)};et.useLayoutEffect=function(t,r){return Pt.current.useLayoutEffect(t,r)};et.useMemo=function(t,r){return Pt.current.useMemo(t,r)};et.useReducer=function(t,r,e){return Pt.current.useReducer(t,r,e)};et.useRef=function(t){return Pt.current.useRef(t)};et.useState=function(t){return Pt.current.useState(t)};et.useSyncExternalStore=function(t,r,e){return Pt.current.useSyncExternalStore(t,r,e)};et.useTransition=function(){return Pt.current.useTransition()};et.version="18.3.1";jd.exports=et;var k=jd.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dc=k,gc=Symbol.for("react.element"),uc=Symbol.for("react.fragment"),cc=Object.prototype.hasOwnProperty,bc=dc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pc={key:!0,ref:!0,__self:!0,__source:!0};function Bd(t,r,e){var n,o={},i=null,l=null;e!==void 0&&(i=""+e),r.key!==void 0&&(i=""+r.key),r.ref!==void 0&&(l=r.ref);for(n in r)cc.call(r,n)&&!pc.hasOwnProperty(n)&&(o[n]=r[n]);if(t&&t.defaultProps)for(n in r=t.defaultProps,r)o[n]===void 0&&(o[n]=r[n]);return{$$typeof:gc,type:t,key:i,ref:l,props:o,_owner:bc.current}}ts.Fragment=uc;ts.jsx=Bd;ts.jsxs=Bd;Sd.exports=ts;var s=Sd.exports,Rd={exports:{}},Jt={},_d={exports:{}},Ld={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function r(f,D){var h=f.length;f.push(D);t:for(;0<h;){var S=h-1>>>1,M=f[S];if(0<o(M,D))f[S]=D,f[h]=M,h=S;else break t}}function e(f){return f.length===0?null:f[0]}function n(f){if(f.length===0)return null;var D=f[0],h=f.pop();if(h!==D){f[0]=h;t:for(var S=0,M=f.length,W=M>>>1;S<W;){var U=2*(S+1)-1,at=f[U],gt=U+1,X=f[gt];if(0>o(at,h))gt<M&&0>o(X,at)?(f[S]=X,f[gt]=h,S=gt):(f[S]=at,f[U]=h,S=U);else if(gt<M&&0>o(X,h))f[S]=X,f[gt]=h,S=gt;else break t}}return D}function o(f,D){var h=f.sortIndex-D.sortIndex;return h!==0?h:f.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();t.unstable_now=function(){return l.now()-a}}var d=[],g=[],m=1,v=null,p=3,j=!1,w=!1,x=!1,I=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function u(f){for(var D=e(g);D!==null;){if(D.callback===null)n(g);else if(D.startTime<=f)n(g),D.sortIndex=D.expirationTime,r(d,D);else break;D=e(g)}}function y(f){if(x=!1,u(f),!w)if(e(d)!==null)w=!0,H(T);else{var D=e(g);D!==null&&L(y,D.startTime-f)}}function T(f,D){w=!1,x&&(x=!1,b(B),B=-1),j=!0;var h=p;try{for(u(D),v=e(d);v!==null&&(!(v.expirationTime>D)||f&&!C());){var S=v.callback;if(typeof S=="function"){v.callback=null,p=v.priorityLevel;var M=S(v.expirationTime<=D);D=t.unstable_now(),typeof M=="function"?v.callback=M:v===e(d)&&n(d),u(D)}else n(d);v=e(d)}if(v!==null)var W=!0;else{var U=e(g);U!==null&&L(y,U.startTime-D),W=!1}return W}finally{v=null,p=h,j=!1}}var z=!1,F=null,B=-1,A=5,R=-1;function C(){return!(t.unstable_now()-R<A)}function N(){if(F!==null){var f=t.unstable_now();R=f;var D=!0;try{D=F(!0,f)}finally{D?V():(z=!1,F=null)}}else z=!1}var V;if(typeof c=="function")V=function(){c(N)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,it=tt.port2;tt.port1.onmessage=N,V=function(){it.postMessage(null)}}else V=function(){I(N,0)};function H(f){F=f,z||(z=!0,V())}function L(f,D){B=I(function(){f(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(f){f.callback=null},t.unstable_continueExecution=function(){w||j||(w=!0,H(T))},t.unstable_forceFrameRate=function(f){0>f||125<f?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<f?Math.floor(1e3/f):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return e(d)},t.unstable_next=function(f){switch(p){case 1:case 2:case 3:var D=3;break;default:D=p}var h=p;p=D;try{return f()}finally{p=h}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(f,D){switch(f){case 1:case 2:case 3:case 4:case 5:break;default:f=3}var h=p;p=f;try{return D()}finally{p=h}},t.unstable_scheduleCallback=function(f,D,h){var S=t.unstable_now();switch(typeof h=="object"&&h!==null?(h=h.delay,h=typeof h=="number"&&0<h?S+h:S):h=S,f){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=h+M,f={id:m++,callback:D,priorityLevel:f,startTime:h,expirationTime:M,sortIndex:-1},h>S?(f.sortIndex=h,r(g,f),e(d)===null&&f===e(g)&&(x?(b(B),B=-1):x=!0,L(y,h-S))):(f.sortIndex=M,r(d,f),w||j||(w=!0,H(T))),f},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(f){var D=p;return function(){var h=p;p=D;try{return f.apply(this,arguments)}finally{p=h}}}})(Ld);_d.exports=Ld;var mc=_d.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fc=k,Xt=mc;function _(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,e=1;e<arguments.length;e++)r+="&args[]="+encodeURIComponent(arguments[e]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wd=new Set,hn={};function me(t,r){Ne(t,r),Ne(t+"Capture",r)}function Ne(t,r){for(hn[t]=r,t=0;t<r.length;t++)Wd.add(r[t])}var Er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oi=Object.prototype.hasOwnProperty,vc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ea={},na={};function yc(t){return oi.call(na,t)?!0:oi.call(ea,t)?!1:vc.test(t)?na[t]=!0:(ea[t]=!0,!1)}function hc(t,r,e,n){if(e!==null&&e.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return n?!1:e!==null?!e.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function xc(t,r,e,n){if(r===null||typeof r>"u"||hc(t,r,e,n))return!0;if(n)return!1;if(e!==null)switch(e.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Ot(t,r,e,n,o,i,l){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=e,this.propertyName=t,this.type=r,this.sanitizeURL=i,this.removeEmptyString=l}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new Ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];Ft[r]=new Ot(r,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new Ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new Ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new Ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new Ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new Ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new Ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new Ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var nl=/[\-:]([a-z])/g;function ol(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(nl,ol);Ft[r]=new Ot(r,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(nl,ol);Ft[r]=new Ot(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(nl,ol);Ft[r]=new Ot(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new Ot(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new Ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new Ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function sl(t,r,e,n){var o=Ft.hasOwnProperty(r)?Ft[r]:null;(o!==null?o.type!==0:n||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(xc(r,e,o,n)&&(e=null),n||o===null?yc(r)&&(e===null?t.removeAttribute(r):t.setAttribute(r,""+e)):o.mustUseProperty?t[o.propertyName]=e===null?o.type===3?!1:"":e:(r=o.attributeName,n=o.attributeNamespace,e===null?t.removeAttribute(r):(o=o.type,e=o===3||o===4&&e===!0?"":""+e,n?t.setAttributeNS(n,r,e):t.setAttribute(r,e))))}var Dr=fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yn=Symbol.for("react.element"),xe=Symbol.for("react.portal"),we=Symbol.for("react.fragment"),il=Symbol.for("react.strict_mode"),si=Symbol.for("react.profiler"),Md=Symbol.for("react.provider"),Nd=Symbol.for("react.context"),ll=Symbol.for("react.forward_ref"),ii=Symbol.for("react.suspense"),li=Symbol.for("react.suspense_list"),al=Symbol.for("react.memo"),Rr=Symbol.for("react.lazy"),Pd=Symbol.for("react.offscreen"),oa=Symbol.iterator;function Ke(t){return t===null||typeof t!="object"?null:(t=oa&&t[oa]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Object.assign,xs;function sn(t){if(xs===void 0)try{throw Error()}catch(e){var r=e.stack.trim().match(/\n( *(at )?)/);xs=r&&r[1]||""}return`
`+xs+t}var ws=!1;function ks(t,r){if(!t||ws)return"";ws=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(g){var n=g}Reflect.construct(t,[],r)}else{try{r.call()}catch(g){n=g}t.call(r.prototype)}else{try{throw Error()}catch(g){n=g}t()}}catch(g){if(g&&n&&typeof g.stack=="string"){for(var o=g.stack.split(`
`),i=n.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var d=`
`+o[l].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=l&&0<=a);break}}}finally{ws=!1,Error.prepareStackTrace=e}return(t=t?t.displayName||t.name:"")?sn(t):""}function wc(t){switch(t.tag){case 5:return sn(t.type);case 16:return sn("Lazy");case 13:return sn("Suspense");case 19:return sn("SuspenseList");case 0:case 2:case 15:return t=ks(t.type,!1),t;case 11:return t=ks(t.type.render,!1),t;case 1:return t=ks(t.type,!0),t;default:return""}}function ai(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case we:return"Fragment";case xe:return"Portal";case si:return"Profiler";case il:return"StrictMode";case ii:return"Suspense";case li:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Nd:return(t.displayName||"Context")+".Consumer";case Md:return(t._context.displayName||"Context")+".Provider";case ll:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case al:return r=t.displayName||null,r!==null?r:ai(t.type)||"Memo";case Rr:r=t._payload,t=t._init;try{return ai(t(r))}catch{}}return null}function kc(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ai(r);case 8:return r===il?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Od(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Sc(t){var r=Od(t)?"checked":"value",e=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),n=""+t[r];if(!t.hasOwnProperty(r)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var o=e.get,i=e.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return o.call(this)},set:function(l){n=""+l,i.call(this,l)}}),Object.defineProperty(t,r,{enumerable:e.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Qn(t){t._valueTracker||(t._valueTracker=Sc(t))}function $d(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var e=r.getValue(),n="";return t&&(n=Od(t)?t.checked?"true":"false":t.value),t=n,t!==e?(r.setValue(t),!0):!1}function To(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function di(t,r){var e=r.checked;return xt({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:e??t._wrapperState.initialChecked})}function sa(t,r){var e=r.defaultValue==null?"":r.defaultValue,n=r.checked!=null?r.checked:r.defaultChecked;e=Kr(r.value!=null?r.value:e),t._wrapperState={initialChecked:n,initialValue:e,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Hd(t,r){r=r.checked,r!=null&&sl(t,"checked",r,!1)}function gi(t,r){Hd(t,r);var e=Kr(r.value),n=r.type;if(e!=null)n==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+e):t.value!==""+e&&(t.value=""+e);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?ui(t,r.type,e):r.hasOwnProperty("defaultValue")&&ui(t,r.type,Kr(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function ia(t,r,e){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var n=r.type;if(!(n!=="submit"&&n!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,e||r===t.value||(t.value=r),t.defaultValue=r}e=t.name,e!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,e!==""&&(t.name=e)}function ui(t,r,e){(r!=="number"||To(t.ownerDocument)!==t)&&(e==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+e&&(t.defaultValue=""+e))}var ln=Array.isArray;function Be(t,r,e,n){if(t=t.options,r){r={};for(var o=0;o<e.length;o++)r["$"+e[o]]=!0;for(e=0;e<t.length;e++)o=r.hasOwnProperty("$"+t[e].value),t[e].selected!==o&&(t[e].selected=o),o&&n&&(t[e].defaultSelected=!0)}else{for(e=""+Kr(e),r=null,o=0;o<t.length;o++){if(t[o].value===e){t[o].selected=!0,n&&(t[o].defaultSelected=!0);return}r!==null||t[o].disabled||(r=t[o])}r!==null&&(r.selected=!0)}}function ci(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(_(91));return xt({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function la(t,r){var e=r.value;if(e==null){if(e=r.children,r=r.defaultValue,e!=null){if(r!=null)throw Error(_(92));if(ln(e)){if(1<e.length)throw Error(_(93));e=e[0]}r=e}r==null&&(r=""),e=r}t._wrapperState={initialValue:Kr(e)}}function Ud(t,r){var e=Kr(r.value),n=Kr(r.defaultValue);e!=null&&(e=""+e,e!==t.value&&(t.value=e),r.defaultValue==null&&t.defaultValue!==e&&(t.defaultValue=e)),n!=null&&(t.defaultValue=""+n)}function aa(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Gd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bi(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Gd(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Kn,Vd=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,e,n,o){MSApp.execUnsafeLocalFunction(function(){return t(r,e,n,o)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Kn=Kn||document.createElement("div"),Kn.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Kn.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function xn(t,r){if(r){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=r;return}}t.textContent=r}var gn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jc=["Webkit","ms","Moz","O"];Object.keys(gn).forEach(function(t){jc.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),gn[r]=gn[t]})});function Yd(t,r,e){return r==null||typeof r=="boolean"||r===""?"":e||typeof r!="number"||r===0||gn.hasOwnProperty(t)&&gn[t]?(""+r).trim():r+"px"}function Qd(t,r){t=t.style;for(var e in r)if(r.hasOwnProperty(e)){var n=e.indexOf("--")===0,o=Yd(e,r[e],n);e==="float"&&(e="cssFloat"),n?t.setProperty(e,o):t[e]=o}}var Cc=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pi(t,r){if(r){if(Cc[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(_(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(_(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(_(61))}if(r.style!=null&&typeof r.style!="object")throw Error(_(62))}}function mi(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fi=null;function dl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vi=null,Re=null,_e=null;function da(t){if(t=On(t)){if(typeof vi!="function")throw Error(_(280));var r=t.stateNode;r&&(r=ss(r),vi(t.stateNode,t.type,r))}}function Kd(t){Re?_e?_e.push(t):_e=[t]:Re=t}function Xd(){if(Re){var t=Re,r=_e;if(_e=Re=null,da(t),r)for(t=0;t<r.length;t++)da(r[t])}}function Jd(t,r){return t(r)}function Zd(){}var Ss=!1;function qd(t,r,e){if(Ss)return t(r,e);Ss=!0;try{return Jd(t,r,e)}finally{Ss=!1,(Re!==null||_e!==null)&&(Zd(),Xd())}}function wn(t,r){var e=t.stateNode;if(e===null)return null;var n=ss(e);if(n===null)return null;e=n[r];t:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(_(231,r,typeof e));return e}var yi=!1;if(Er)try{var Xe={};Object.defineProperty(Xe,"passive",{get:function(){yi=!0}}),window.addEventListener("test",Xe,Xe),window.removeEventListener("test",Xe,Xe)}catch{yi=!1}function Ic(t,r,e,n,o,i,l,a,d){var g=Array.prototype.slice.call(arguments,3);try{r.apply(e,g)}catch(m){this.onError(m)}}var un=!1,Ao=null,Do=!1,hi=null,Ec={onError:function(t){un=!0,Ao=t}};function zc(t,r,e,n,o,i,l,a,d){un=!1,Ao=null,Ic.apply(Ec,arguments)}function Tc(t,r,e,n,o,i,l,a,d){if(zc.apply(this,arguments),un){if(un){var g=Ao;un=!1,Ao=null}else throw Error(_(198));Do||(Do=!0,hi=g)}}function fe(t){var r=t,e=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,r.flags&4098&&(e=r.return),t=r.return;while(t)}return r.tag===3?e:null}function tg(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function ga(t){if(fe(t)!==t)throw Error(_(188))}function Ac(t){var r=t.alternate;if(!r){if(r=fe(t),r===null)throw Error(_(188));return r!==t?null:t}for(var e=t,n=r;;){var o=e.return;if(o===null)break;var i=o.alternate;if(i===null){if(n=o.return,n!==null){e=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===e)return ga(o),t;if(i===n)return ga(o),r;i=i.sibling}throw Error(_(188))}if(e.return!==n.return)e=o,n=i;else{for(var l=!1,a=o.child;a;){if(a===e){l=!0,e=o,n=i;break}if(a===n){l=!0,n=o,e=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===e){l=!0,e=i,n=o;break}if(a===n){l=!0,n=i,e=o;break}a=a.sibling}if(!l)throw Error(_(189))}}if(e.alternate!==n)throw Error(_(190))}if(e.tag!==3)throw Error(_(188));return e.stateNode.current===e?t:r}function rg(t){return t=Ac(t),t!==null?eg(t):null}function eg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=eg(t);if(r!==null)return r;t=t.sibling}return null}var ng=Xt.unstable_scheduleCallback,ua=Xt.unstable_cancelCallback,Dc=Xt.unstable_shouldYield,Fc=Xt.unstable_requestPaint,kt=Xt.unstable_now,Bc=Xt.unstable_getCurrentPriorityLevel,gl=Xt.unstable_ImmediatePriority,og=Xt.unstable_UserBlockingPriority,Fo=Xt.unstable_NormalPriority,Rc=Xt.unstable_LowPriority,sg=Xt.unstable_IdlePriority,rs=null,hr=null;function _c(t){if(hr&&typeof hr.onCommitFiberRoot=="function")try{hr.onCommitFiberRoot(rs,t,void 0,(t.current.flags&128)===128)}catch{}}var ur=Math.clz32?Math.clz32:Mc,Lc=Math.log,Wc=Math.LN2;function Mc(t){return t>>>=0,t===0?32:31-(Lc(t)/Wc|0)|0}var Xn=64,Jn=4194304;function an(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bo(t,r){var e=t.pendingLanes;if(e===0)return 0;var n=0,o=t.suspendedLanes,i=t.pingedLanes,l=e&268435455;if(l!==0){var a=l&~o;a!==0?n=an(a):(i&=l,i!==0&&(n=an(i)))}else l=e&~o,l!==0?n=an(l):i!==0&&(n=an(i));if(n===0)return 0;if(r!==0&&r!==n&&!(r&o)&&(o=n&-n,i=r&-r,o>=i||o===16&&(i&4194240)!==0))return r;if(n&4&&(n|=e&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=n;0<r;)e=31-ur(r),o=1<<e,n|=t[e],r&=~o;return n}function Nc(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pc(t,r){for(var e=t.suspendedLanes,n=t.pingedLanes,o=t.expirationTimes,i=t.pendingLanes;0<i;){var l=31-ur(i),a=1<<l,d=o[l];d===-1?(!(a&e)||a&n)&&(o[l]=Nc(a,r)):d<=r&&(t.expiredLanes|=a),i&=~a}}function xi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ig(){var t=Xn;return Xn<<=1,!(Xn&4194240)&&(Xn=64),t}function js(t){for(var r=[],e=0;31>e;e++)r.push(t);return r}function Nn(t,r,e){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-ur(r),t[r]=e}function Oc(t,r){var e=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<e;){var o=31-ur(e),i=1<<o;r[o]=0,n[o]=-1,t[o]=-1,e&=~i}}function ul(t,r){var e=t.entangledLanes|=r;for(t=t.entanglements;e;){var n=31-ur(e),o=1<<n;o&r|t[n]&r&&(t[n]|=r),e&=~o}}var dt=0;function lg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ag,cl,dg,gg,ug,wi=!1,Zn=[],Or=null,$r=null,Hr=null,kn=new Map,Sn=new Map,Wr=[],$c="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ca(t,r){switch(t){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":$r=null;break;case"mouseover":case"mouseout":Hr=null;break;case"pointerover":case"pointerout":kn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sn.delete(r.pointerId)}}function Je(t,r,e,n,o,i){return t===null||t.nativeEvent!==i?(t={blockedOn:r,domEventName:e,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},r!==null&&(r=On(r),r!==null&&cl(r)),t):(t.eventSystemFlags|=n,r=t.targetContainers,o!==null&&r.indexOf(o)===-1&&r.push(o),t)}function Hc(t,r,e,n,o){switch(r){case"focusin":return Or=Je(Or,t,r,e,n,o),!0;case"dragenter":return $r=Je($r,t,r,e,n,o),!0;case"mouseover":return Hr=Je(Hr,t,r,e,n,o),!0;case"pointerover":var i=o.pointerId;return kn.set(i,Je(kn.get(i)||null,t,r,e,n,o)),!0;case"gotpointercapture":return i=o.pointerId,Sn.set(i,Je(Sn.get(i)||null,t,r,e,n,o)),!0}return!1}function cg(t){var r=ne(t.target);if(r!==null){var e=fe(r);if(e!==null){if(r=e.tag,r===13){if(r=tg(e),r!==null){t.blockedOn=r,ug(t.priority,function(){dg(e)});return}}else if(r===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yo(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var e=ki(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(e===null){e=t.nativeEvent;var n=new e.constructor(e.type,e);fi=n,e.target.dispatchEvent(n),fi=null}else return r=On(e),r!==null&&cl(r),t.blockedOn=e,!1;r.shift()}return!0}function ba(t,r,e){yo(t)&&e.delete(r)}function Uc(){wi=!1,Or!==null&&yo(Or)&&(Or=null),$r!==null&&yo($r)&&($r=null),Hr!==null&&yo(Hr)&&(Hr=null),kn.forEach(ba),Sn.forEach(ba)}function Ze(t,r){t.blockedOn===r&&(t.blockedOn=null,wi||(wi=!0,Xt.unstable_scheduleCallback(Xt.unstable_NormalPriority,Uc)))}function jn(t){function r(o){return Ze(o,t)}if(0<Zn.length){Ze(Zn[0],t);for(var e=1;e<Zn.length;e++){var n=Zn[e];n.blockedOn===t&&(n.blockedOn=null)}}for(Or!==null&&Ze(Or,t),$r!==null&&Ze($r,t),Hr!==null&&Ze(Hr,t),kn.forEach(r),Sn.forEach(r),e=0;e<Wr.length;e++)n=Wr[e],n.blockedOn===t&&(n.blockedOn=null);for(;0<Wr.length&&(e=Wr[0],e.blockedOn===null);)cg(e),e.blockedOn===null&&Wr.shift()}var Le=Dr.ReactCurrentBatchConfig,Ro=!0;function Gc(t,r,e,n){var o=dt,i=Le.transition;Le.transition=null;try{dt=1,bl(t,r,e,n)}finally{dt=o,Le.transition=i}}function Vc(t,r,e,n){var o=dt,i=Le.transition;Le.transition=null;try{dt=4,bl(t,r,e,n)}finally{dt=o,Le.transition=i}}function bl(t,r,e,n){if(Ro){var o=ki(t,r,e,n);if(o===null)Rs(t,r,n,_o,e),ca(t,n);else if(Hc(o,t,r,e,n))n.stopPropagation();else if(ca(t,n),r&4&&-1<$c.indexOf(t)){for(;o!==null;){var i=On(o);if(i!==null&&ag(i),i=ki(t,r,e,n),i===null&&Rs(t,r,n,_o,e),i===o)break;o=i}o!==null&&n.stopPropagation()}else Rs(t,r,n,null,e)}}var _o=null;function ki(t,r,e,n){if(_o=null,t=dl(n),t=ne(t),t!==null)if(r=fe(t),r===null)t=null;else if(e=r.tag,e===13){if(t=tg(r),t!==null)return t;t=null}else if(e===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return _o=t,null}function bg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bc()){case gl:return 1;case og:return 4;case Fo:case Rc:return 16;case sg:return 536870912;default:return 16}default:return 16}}var Nr=null,pl=null,ho=null;function pg(){if(ho)return ho;var t,r=pl,e=r.length,n,o="value"in Nr?Nr.value:Nr.textContent,i=o.length;for(t=0;t<e&&r[t]===o[t];t++);var l=e-t;for(n=1;n<=l&&r[e-n]===o[i-n];n++);return ho=o.slice(t,1<n?1-n:void 0)}function xo(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function qn(){return!0}function pa(){return!1}function Zt(t){function r(e,n,o,i,l){this._reactName=e,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(e=t[a],this[a]=e?e(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?qn:pa,this.isPropagationStopped=pa,this}return xt(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=qn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=qn)},persist:function(){},isPersistent:qn}),r}var Ye={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=Zt(Ye),Pn=xt({},Ye,{view:0,detail:0}),Yc=Zt(Pn),Cs,Is,qe,es=xt({},Pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qe&&(qe&&t.type==="mousemove"?(Cs=t.screenX-qe.screenX,Is=t.screenY-qe.screenY):Is=Cs=0,qe=t),Cs)},movementY:function(t){return"movementY"in t?t.movementY:Is}}),ma=Zt(es),Qc=xt({},es,{dataTransfer:0}),Kc=Zt(Qc),Xc=xt({},Pn,{relatedTarget:0}),Es=Zt(Xc),Jc=xt({},Ye,{animationName:0,elapsedTime:0,pseudoElement:0}),Zc=Zt(Jc),qc=xt({},Ye,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tb=Zt(qc),rb=xt({},Ye,{data:0}),fa=Zt(rb),eb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ob={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sb(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=ob[t])?!!r[t]:!1}function fl(){return sb}var ib=xt({},Pn,{key:function(t){if(t.key){var r=eb[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=xo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fl,charCode:function(t){return t.type==="keypress"?xo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lb=Zt(ib),ab=xt({},es,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),va=Zt(ab),db=xt({},Pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fl}),gb=Zt(db),ub=xt({},Ye,{propertyName:0,elapsedTime:0,pseudoElement:0}),cb=Zt(ub),bb=xt({},es,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pb=Zt(bb),mb=[9,13,27,32],vl=Er&&"CompositionEvent"in window,cn=null;Er&&"documentMode"in document&&(cn=document.documentMode);var fb=Er&&"TextEvent"in window&&!cn,mg=Er&&(!vl||cn&&8<cn&&11>=cn),ya=" ",ha=!1;function fg(t,r){switch(t){case"keyup":return mb.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ke=!1;function vb(t,r){switch(t){case"compositionend":return vg(r);case"keypress":return r.which!==32?null:(ha=!0,ya);case"textInput":return t=r.data,t===ya&&ha?null:t;default:return null}}function yb(t,r){if(ke)return t==="compositionend"||!vl&&fg(t,r)?(t=pg(),ho=pl=Nr=null,ke=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return mg&&r.locale!=="ko"?null:r.data;default:return null}}var hb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xa(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!hb[t.type]:r==="textarea"}function yg(t,r,e,n){Kd(n),r=Lo(r,"onChange"),0<r.length&&(e=new ml("onChange","change",null,e,n),t.push({event:e,listeners:r}))}var bn=null,Cn=null;function xb(t){Tg(t,0)}function ns(t){var r=Ce(t);if($d(r))return t}function wb(t,r){if(t==="change")return r}var hg=!1;if(Er){var zs;if(Er){var Ts="oninput"in document;if(!Ts){var wa=document.createElement("div");wa.setAttribute("oninput","return;"),Ts=typeof wa.oninput=="function"}zs=Ts}else zs=!1;hg=zs&&(!document.documentMode||9<document.documentMode)}function ka(){bn&&(bn.detachEvent("onpropertychange",xg),Cn=bn=null)}function xg(t){if(t.propertyName==="value"&&ns(Cn)){var r=[];yg(r,Cn,t,dl(t)),qd(xb,r)}}function kb(t,r,e){t==="focusin"?(ka(),bn=r,Cn=e,bn.attachEvent("onpropertychange",xg)):t==="focusout"&&ka()}function Sb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ns(Cn)}function jb(t,r){if(t==="click")return ns(r)}function Cb(t,r){if(t==="input"||t==="change")return ns(r)}function Ib(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var br=typeof Object.is=="function"?Object.is:Ib;function In(t,r){if(br(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var e=Object.keys(t),n=Object.keys(r);if(e.length!==n.length)return!1;for(n=0;n<e.length;n++){var o=e[n];if(!oi.call(r,o)||!br(t[o],r[o]))return!1}return!0}function Sa(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ja(t,r){var e=Sa(t);t=0;for(var n;e;){if(e.nodeType===3){if(n=t+e.textContent.length,t<=r&&n>=r)return{node:e,offset:r-t};t=n}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=Sa(e)}}function wg(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?wg(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function kg(){for(var t=window,r=To();r instanceof t.HTMLIFrameElement;){try{var e=typeof r.contentWindow.location.href=="string"}catch{e=!1}if(e)t=r.contentWindow;else break;r=To(t.document)}return r}function yl(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function Eb(t){var r=kg(),e=t.focusedElem,n=t.selectionRange;if(r!==e&&e&&e.ownerDocument&&wg(e.ownerDocument.documentElement,e)){if(n!==null&&yl(e)){if(r=n.start,t=n.end,t===void 0&&(t=r),"selectionStart"in e)e.selectionStart=r,e.selectionEnd=Math.min(t,e.value.length);else if(t=(r=e.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var o=e.textContent.length,i=Math.min(n.start,o);n=n.end===void 0?i:Math.min(n.end,o),!t.extend&&i>n&&(o=n,n=i,i=o),o=ja(e,i);var l=ja(e,n);o&&l&&(t.rangeCount!==1||t.anchorNode!==o.node||t.anchorOffset!==o.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(r=r.createRange(),r.setStart(o.node,o.offset),t.removeAllRanges(),i>n?(t.addRange(r),t.extend(l.node,l.offset)):(r.setEnd(l.node,l.offset),t.addRange(r)))}}for(r=[],t=e;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<r.length;e++)t=r[e],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zb=Er&&"documentMode"in document&&11>=document.documentMode,Se=null,Si=null,pn=null,ji=!1;function Ca(t,r,e){var n=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;ji||Se==null||Se!==To(n)||(n=Se,"selectionStart"in n&&yl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),pn&&In(pn,n)||(pn=n,n=Lo(Si,"onSelect"),0<n.length&&(r=new ml("onSelect","select",null,r,e),t.push({event:r,listeners:n}),r.target=Se)))}function to(t,r){var e={};return e[t.toLowerCase()]=r.toLowerCase(),e["Webkit"+t]="webkit"+r,e["Moz"+t]="moz"+r,e}var je={animationend:to("Animation","AnimationEnd"),animationiteration:to("Animation","AnimationIteration"),animationstart:to("Animation","AnimationStart"),transitionend:to("Transition","TransitionEnd")},As={},Sg={};Er&&(Sg=document.createElement("div").style,"AnimationEvent"in window||(delete je.animationend.animation,delete je.animationiteration.animation,delete je.animationstart.animation),"TransitionEvent"in window||delete je.transitionend.transition);function os(t){if(As[t])return As[t];if(!je[t])return t;var r=je[t],e;for(e in r)if(r.hasOwnProperty(e)&&e in Sg)return As[t]=r[e];return t}var jg=os("animationend"),Cg=os("animationiteration"),Ig=os("animationstart"),Eg=os("transitionend"),zg=new Map,Ia="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zr(t,r){zg.set(t,r),me(r,[t])}for(var Ds=0;Ds<Ia.length;Ds++){var Fs=Ia[Ds],Tb=Fs.toLowerCase(),Ab=Fs[0].toUpperCase()+Fs.slice(1);Zr(Tb,"on"+Ab)}Zr(jg,"onAnimationEnd");Zr(Cg,"onAnimationIteration");Zr(Ig,"onAnimationStart");Zr("dblclick","onDoubleClick");Zr("focusin","onFocus");Zr("focusout","onBlur");Zr(Eg,"onTransitionEnd");Ne("onMouseEnter",["mouseout","mouseover"]);Ne("onMouseLeave",["mouseout","mouseover"]);Ne("onPointerEnter",["pointerout","pointerover"]);Ne("onPointerLeave",["pointerout","pointerover"]);me("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));me("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));me("onBeforeInput",["compositionend","keypress","textInput","paste"]);me("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));me("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));me("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Db=new Set("cancel close invalid load scroll toggle".split(" ").concat(dn));function Ea(t,r,e){var n=t.type||"unknown-event";t.currentTarget=e,Tc(n,r,void 0,t),t.currentTarget=null}function Tg(t,r){r=(r&4)!==0;for(var e=0;e<t.length;e++){var n=t[e],o=n.event;n=n.listeners;t:{var i=void 0;if(r)for(var l=n.length-1;0<=l;l--){var a=n[l],d=a.instance,g=a.currentTarget;if(a=a.listener,d!==i&&o.isPropagationStopped())break t;Ea(o,a,g),i=d}else for(l=0;l<n.length;l++){if(a=n[l],d=a.instance,g=a.currentTarget,a=a.listener,d!==i&&o.isPropagationStopped())break t;Ea(o,a,g),i=d}}}if(Do)throw t=hi,Do=!1,hi=null,t}function bt(t,r){var e=r[Ti];e===void 0&&(e=r[Ti]=new Set);var n=t+"__bubble";e.has(n)||(Ag(r,t,2,!1),e.add(n))}function Bs(t,r,e){var n=0;r&&(n|=4),Ag(e,t,n,r)}var ro="_reactListening"+Math.random().toString(36).slice(2);function En(t){if(!t[ro]){t[ro]=!0,Wd.forEach(function(e){e!=="selectionchange"&&(Db.has(e)||Bs(e,!1,t),Bs(e,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[ro]||(r[ro]=!0,Bs("selectionchange",!1,r))}}function Ag(t,r,e,n){switch(bg(r)){case 1:var o=Gc;break;case 4:o=Vc;break;default:o=bl}e=o.bind(null,r,e,t),o=void 0,!yi||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(o=!0),n?o!==void 0?t.addEventListener(r,e,{capture:!0,passive:o}):t.addEventListener(r,e,!0):o!==void 0?t.addEventListener(r,e,{passive:o}):t.addEventListener(r,e,!1)}function Rs(t,r,e,n,o){var i=n;if(!(r&1)&&!(r&2)&&n!==null)t:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var a=n.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=n.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===o||d.nodeType===8&&d.parentNode===o))return;l=l.return}for(;a!==null;){if(l=ne(a),l===null)return;if(d=l.tag,d===5||d===6){n=i=l;continue t}a=a.parentNode}}n=n.return}qd(function(){var g=i,m=dl(e),v=[];t:{var p=zg.get(t);if(p!==void 0){var j=ml,w=t;switch(t){case"keypress":if(xo(e)===0)break t;case"keydown":case"keyup":j=lb;break;case"focusin":w="focus",j=Es;break;case"focusout":w="blur",j=Es;break;case"beforeblur":case"afterblur":j=Es;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=ma;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Kc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=gb;break;case jg:case Cg:case Ig:j=Zc;break;case Eg:j=cb;break;case"scroll":j=Yc;break;case"wheel":j=pb;break;case"copy":case"cut":case"paste":j=tb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=va}var x=(r&4)!==0,I=!x&&t==="scroll",b=x?p!==null?p+"Capture":null:p;x=[];for(var c=g,u;c!==null;){u=c;var y=u.stateNode;if(u.tag===5&&y!==null&&(u=y,b!==null&&(y=wn(c,b),y!=null&&x.push(zn(c,y,u)))),I)break;c=c.return}0<x.length&&(p=new j(p,w,null,e,m),v.push({event:p,listeners:x}))}}if(!(r&7)){t:{if(p=t==="mouseover"||t==="pointerover",j=t==="mouseout"||t==="pointerout",p&&e!==fi&&(w=e.relatedTarget||e.fromElement)&&(ne(w)||w[zr]))break t;if((j||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,j?(w=e.relatedTarget||e.toElement,j=g,w=w?ne(w):null,w!==null&&(I=fe(w),w!==I||w.tag!==5&&w.tag!==6)&&(w=null)):(j=null,w=g),j!==w)){if(x=ma,y="onMouseLeave",b="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(x=va,y="onPointerLeave",b="onPointerEnter",c="pointer"),I=j==null?p:Ce(j),u=w==null?p:Ce(w),p=new x(y,c+"leave",j,e,m),p.target=I,p.relatedTarget=u,y=null,ne(m)===g&&(x=new x(b,c+"enter",w,e,m),x.target=u,x.relatedTarget=I,y=x),I=y,j&&w)r:{for(x=j,b=w,c=0,u=x;u;u=ye(u))c++;for(u=0,y=b;y;y=ye(y))u++;for(;0<c-u;)x=ye(x),c--;for(;0<u-c;)b=ye(b),u--;for(;c--;){if(x===b||b!==null&&x===b.alternate)break r;x=ye(x),b=ye(b)}x=null}else x=null;j!==null&&za(v,p,j,x,!1),w!==null&&I!==null&&za(v,I,w,x,!0)}}t:{if(p=g?Ce(g):window,j=p.nodeName&&p.nodeName.toLowerCase(),j==="select"||j==="input"&&p.type==="file")var T=wb;else if(xa(p))if(hg)T=Cb;else{T=Sb;var z=kb}else(j=p.nodeName)&&j.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(T=jb);if(T&&(T=T(t,g))){yg(v,T,e,m);break t}z&&z(t,p,g),t==="focusout"&&(z=p._wrapperState)&&z.controlled&&p.type==="number"&&ui(p,"number",p.value)}switch(z=g?Ce(g):window,t){case"focusin":(xa(z)||z.contentEditable==="true")&&(Se=z,Si=g,pn=null);break;case"focusout":pn=Si=Se=null;break;case"mousedown":ji=!0;break;case"contextmenu":case"mouseup":case"dragend":ji=!1,Ca(v,e,m);break;case"selectionchange":if(zb)break;case"keydown":case"keyup":Ca(v,e,m)}var F;if(vl)t:{switch(t){case"compositionstart":var B="onCompositionStart";break t;case"compositionend":B="onCompositionEnd";break t;case"compositionupdate":B="onCompositionUpdate";break t}B=void 0}else ke?fg(t,e)&&(B="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&(B="onCompositionStart");B&&(mg&&e.locale!=="ko"&&(ke||B!=="onCompositionStart"?B==="onCompositionEnd"&&ke&&(F=pg()):(Nr=m,pl="value"in Nr?Nr.value:Nr.textContent,ke=!0)),z=Lo(g,B),0<z.length&&(B=new fa(B,t,null,e,m),v.push({event:B,listeners:z}),F?B.data=F:(F=vg(e),F!==null&&(B.data=F)))),(F=fb?vb(t,e):yb(t,e))&&(g=Lo(g,"onBeforeInput"),0<g.length&&(m=new fa("onBeforeInput","beforeinput",null,e,m),v.push({event:m,listeners:g}),m.data=F))}Tg(v,r)})}function zn(t,r,e){return{instance:t,listener:r,currentTarget:e}}function Lo(t,r){for(var e=r+"Capture",n=[];t!==null;){var o=t,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=wn(t,e),i!=null&&n.unshift(zn(t,i,o)),i=wn(t,r),i!=null&&n.push(zn(t,i,o))),t=t.return}return n}function ye(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function za(t,r,e,n,o){for(var i=r._reactName,l=[];e!==null&&e!==n;){var a=e,d=a.alternate,g=a.stateNode;if(d!==null&&d===n)break;a.tag===5&&g!==null&&(a=g,o?(d=wn(e,i),d!=null&&l.unshift(zn(e,d,a))):o||(d=wn(e,i),d!=null&&l.push(zn(e,d,a)))),e=e.return}l.length!==0&&t.push({event:r,listeners:l})}var Fb=/\r\n?/g,Bb=/\u0000|\uFFFD/g;function Ta(t){return(typeof t=="string"?t:""+t).replace(Fb,`
`).replace(Bb,"")}function eo(t,r,e){if(r=Ta(r),Ta(t)!==r&&e)throw Error(_(425))}function Wo(){}var Ci=null,Ii=null;function Ei(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var zi=typeof setTimeout=="function"?setTimeout:void 0,Rb=typeof clearTimeout=="function"?clearTimeout:void 0,Aa=typeof Promise=="function"?Promise:void 0,_b=typeof queueMicrotask=="function"?queueMicrotask:typeof Aa<"u"?function(t){return Aa.resolve(null).then(t).catch(Lb)}:zi;function Lb(t){setTimeout(function(){throw t})}function _s(t,r){var e=r,n=0;do{var o=e.nextSibling;if(t.removeChild(e),o&&o.nodeType===8)if(e=o.data,e==="/$"){if(n===0){t.removeChild(o),jn(r);return}n--}else e!=="$"&&e!=="$?"&&e!=="$!"||n++;e=o}while(e);jn(r)}function Ur(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Da(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"){if(r===0)return t;r--}else e==="/$"&&r++}t=t.previousSibling}return null}var Qe=Math.random().toString(36).slice(2),yr="__reactFiber$"+Qe,Tn="__reactProps$"+Qe,zr="__reactContainer$"+Qe,Ti="__reactEvents$"+Qe,Wb="__reactListeners$"+Qe,Mb="__reactHandles$"+Qe;function ne(t){var r=t[yr];if(r)return r;for(var e=t.parentNode;e;){if(r=e[zr]||e[yr]){if(e=r.alternate,r.child!==null||e!==null&&e.child!==null)for(t=Da(t);t!==null;){if(e=t[yr])return e;t=Da(t)}return r}t=e,e=t.parentNode}return null}function On(t){return t=t[yr]||t[zr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ce(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(_(33))}function ss(t){return t[Tn]||null}var Ai=[],Ie=-1;function qr(t){return{current:t}}function pt(t){0>Ie||(t.current=Ai[Ie],Ai[Ie]=null,Ie--)}function ct(t,r){Ie++,Ai[Ie]=t.current,t.current=r}var Xr={},Wt=qr(Xr),Ut=qr(!1),de=Xr;function Pe(t,r){var e=t.type.contextTypes;if(!e)return Xr;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===r)return n.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in e)o[i]=r[i];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),o}function Gt(t){return t=t.childContextTypes,t!=null}function Mo(){pt(Ut),pt(Wt)}function Fa(t,r,e){if(Wt.current!==Xr)throw Error(_(168));ct(Wt,r),ct(Ut,e)}function Dg(t,r,e){var n=t.stateNode;if(r=r.childContextTypes,typeof n.getChildContext!="function")return e;n=n.getChildContext();for(var o in n)if(!(o in r))throw Error(_(108,kc(t)||"Unknown",o));return xt({},e,n)}function No(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xr,de=Wt.current,ct(Wt,t),ct(Ut,Ut.current),!0}function Ba(t,r,e){var n=t.stateNode;if(!n)throw Error(_(169));e?(t=Dg(t,r,de),n.__reactInternalMemoizedMergedChildContext=t,pt(Ut),pt(Wt),ct(Wt,t)):pt(Ut),ct(Ut,e)}var Sr=null,is=!1,Ls=!1;function Fg(t){Sr===null?Sr=[t]:Sr.push(t)}function Nb(t){is=!0,Fg(t)}function te(){if(!Ls&&Sr!==null){Ls=!0;var t=0,r=dt;try{var e=Sr;for(dt=1;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}Sr=null,is=!1}catch(o){throw Sr!==null&&(Sr=Sr.slice(t+1)),ng(gl,te),o}finally{dt=r,Ls=!1}}return null}var Ee=[],ze=0,Po=null,Oo=0,qt=[],tr=0,ge=null,jr=1,Cr="";function re(t,r){Ee[ze++]=Oo,Ee[ze++]=Po,Po=t,Oo=r}function Bg(t,r,e){qt[tr++]=jr,qt[tr++]=Cr,qt[tr++]=ge,ge=t;var n=jr;t=Cr;var o=32-ur(n)-1;n&=~(1<<o),e+=1;var i=32-ur(r)+o;if(30<i){var l=o-o%5;i=(n&(1<<l)-1).toString(32),n>>=l,o-=l,jr=1<<32-ur(r)+o|e<<o|n,Cr=i+t}else jr=1<<i|e<<o|n,Cr=t}function hl(t){t.return!==null&&(re(t,1),Bg(t,1,0))}function xl(t){for(;t===Po;)Po=Ee[--ze],Ee[ze]=null,Oo=Ee[--ze],Ee[ze]=null;for(;t===ge;)ge=qt[--tr],qt[tr]=null,Cr=qt[--tr],qt[tr]=null,jr=qt[--tr],qt[tr]=null}var Kt=null,Qt=null,mt=!1,gr=null;function Rg(t,r){var e=rr(5,null,null,0);e.elementType="DELETED",e.stateNode=r,e.return=t,r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)}function Ra(t,r){switch(t.tag){case 5:var e=t.type;return r=r.nodeType!==1||e.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,Kt=t,Qt=Ur(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,Kt=t,Qt=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(e=ge!==null?{id:jr,overflow:Cr}:null,t.memoizedState={dehydrated:r,treeContext:e,retryLane:1073741824},e=rr(18,null,null,0),e.stateNode=r,e.return=t,t.child=e,Kt=t,Qt=null,!0):!1;default:return!1}}function Di(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fi(t){if(mt){var r=Qt;if(r){var e=r;if(!Ra(t,r)){if(Di(t))throw Error(_(418));r=Ur(e.nextSibling);var n=Kt;r&&Ra(t,r)?Rg(n,e):(t.flags=t.flags&-4097|2,mt=!1,Kt=t)}}else{if(Di(t))throw Error(_(418));t.flags=t.flags&-4097|2,mt=!1,Kt=t}}}function _a(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Kt=t}function no(t){if(t!==Kt)return!1;if(!mt)return _a(t),mt=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Ei(t.type,t.memoizedProps)),r&&(r=Qt)){if(Di(t))throw _g(),Error(_(418));for(;r;)Rg(t,r),r=Ur(r.nextSibling)}if(_a(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(_(317));t:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var e=t.data;if(e==="/$"){if(r===0){Qt=Ur(t.nextSibling);break t}r--}else e!=="$"&&e!=="$!"&&e!=="$?"||r++}t=t.nextSibling}Qt=null}}else Qt=Kt?Ur(t.stateNode.nextSibling):null;return!0}function _g(){for(var t=Qt;t;)t=Ur(t.nextSibling)}function Oe(){Qt=Kt=null,mt=!1}function wl(t){gr===null?gr=[t]:gr.push(t)}var Pb=Dr.ReactCurrentBatchConfig;function tn(t,r,e){if(t=e.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(e._owner){if(e=e._owner,e){if(e.tag!==1)throw Error(_(309));var n=e.stateNode}if(!n)throw Error(_(147,t));var o=n,i=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===i?r.ref:(r=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},r._stringRef=i,r)}if(typeof t!="string")throw Error(_(284));if(!e._owner)throw Error(_(290,t))}return t}function oo(t,r){throw t=Object.prototype.toString.call(r),Error(_(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function La(t){var r=t._init;return r(t._payload)}function Lg(t){function r(b,c){if(t){var u=b.deletions;u===null?(b.deletions=[c],b.flags|=16):u.push(c)}}function e(b,c){if(!t)return null;for(;c!==null;)r(b,c),c=c.sibling;return null}function n(b,c){for(b=new Map;c!==null;)c.key!==null?b.set(c.key,c):b.set(c.index,c),c=c.sibling;return b}function o(b,c){return b=Qr(b,c),b.index=0,b.sibling=null,b}function i(b,c,u){return b.index=u,t?(u=b.alternate,u!==null?(u=u.index,u<c?(b.flags|=2,c):u):(b.flags|=2,c)):(b.flags|=1048576,c)}function l(b){return t&&b.alternate===null&&(b.flags|=2),b}function a(b,c,u,y){return c===null||c.tag!==6?(c=Hs(u,b.mode,y),c.return=b,c):(c=o(c,u),c.return=b,c)}function d(b,c,u,y){var T=u.type;return T===we?m(b,c,u.props.children,y,u.key):c!==null&&(c.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Rr&&La(T)===c.type)?(y=o(c,u.props),y.ref=tn(b,c,u),y.return=b,y):(y=Eo(u.type,u.key,u.props,null,b.mode,y),y.ref=tn(b,c,u),y.return=b,y)}function g(b,c,u,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==u.containerInfo||c.stateNode.implementation!==u.implementation?(c=Us(u,b.mode,y),c.return=b,c):(c=o(c,u.children||[]),c.return=b,c)}function m(b,c,u,y,T){return c===null||c.tag!==7?(c=le(u,b.mode,y,T),c.return=b,c):(c=o(c,u),c.return=b,c)}function v(b,c,u){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Hs(""+c,b.mode,u),c.return=b,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Yn:return u=Eo(c.type,c.key,c.props,null,b.mode,u),u.ref=tn(b,null,c),u.return=b,u;case xe:return c=Us(c,b.mode,u),c.return=b,c;case Rr:var y=c._init;return v(b,y(c._payload),u)}if(ln(c)||Ke(c))return c=le(c,b.mode,u,null),c.return=b,c;oo(b,c)}return null}function p(b,c,u,y){var T=c!==null?c.key:null;if(typeof u=="string"&&u!==""||typeof u=="number")return T!==null?null:a(b,c,""+u,y);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Yn:return u.key===T?d(b,c,u,y):null;case xe:return u.key===T?g(b,c,u,y):null;case Rr:return T=u._init,p(b,c,T(u._payload),y)}if(ln(u)||Ke(u))return T!==null?null:m(b,c,u,y,null);oo(b,u)}return null}function j(b,c,u,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return b=b.get(u)||null,a(c,b,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Yn:return b=b.get(y.key===null?u:y.key)||null,d(c,b,y,T);case xe:return b=b.get(y.key===null?u:y.key)||null,g(c,b,y,T);case Rr:var z=y._init;return j(b,c,u,z(y._payload),T)}if(ln(y)||Ke(y))return b=b.get(u)||null,m(c,b,y,T,null);oo(c,y)}return null}function w(b,c,u,y){for(var T=null,z=null,F=c,B=c=0,A=null;F!==null&&B<u.length;B++){F.index>B?(A=F,F=null):A=F.sibling;var R=p(b,F,u[B],y);if(R===null){F===null&&(F=A);break}t&&F&&R.alternate===null&&r(b,F),c=i(R,c,B),z===null?T=R:z.sibling=R,z=R,F=A}if(B===u.length)return e(b,F),mt&&re(b,B),T;if(F===null){for(;B<u.length;B++)F=v(b,u[B],y),F!==null&&(c=i(F,c,B),z===null?T=F:z.sibling=F,z=F);return mt&&re(b,B),T}for(F=n(b,F);B<u.length;B++)A=j(F,b,B,u[B],y),A!==null&&(t&&A.alternate!==null&&F.delete(A.key===null?B:A.key),c=i(A,c,B),z===null?T=A:z.sibling=A,z=A);return t&&F.forEach(function(C){return r(b,C)}),mt&&re(b,B),T}function x(b,c,u,y){var T=Ke(u);if(typeof T!="function")throw Error(_(150));if(u=T.call(u),u==null)throw Error(_(151));for(var z=T=null,F=c,B=c=0,A=null,R=u.next();F!==null&&!R.done;B++,R=u.next()){F.index>B?(A=F,F=null):A=F.sibling;var C=p(b,F,R.value,y);if(C===null){F===null&&(F=A);break}t&&F&&C.alternate===null&&r(b,F),c=i(C,c,B),z===null?T=C:z.sibling=C,z=C,F=A}if(R.done)return e(b,F),mt&&re(b,B),T;if(F===null){for(;!R.done;B++,R=u.next())R=v(b,R.value,y),R!==null&&(c=i(R,c,B),z===null?T=R:z.sibling=R,z=R);return mt&&re(b,B),T}for(F=n(b,F);!R.done;B++,R=u.next())R=j(F,b,B,R.value,y),R!==null&&(t&&R.alternate!==null&&F.delete(R.key===null?B:R.key),c=i(R,c,B),z===null?T=R:z.sibling=R,z=R);return t&&F.forEach(function(N){return r(b,N)}),mt&&re(b,B),T}function I(b,c,u,y){if(typeof u=="object"&&u!==null&&u.type===we&&u.key===null&&(u=u.props.children),typeof u=="object"&&u!==null){switch(u.$$typeof){case Yn:t:{for(var T=u.key,z=c;z!==null;){if(z.key===T){if(T=u.type,T===we){if(z.tag===7){e(b,z.sibling),c=o(z,u.props.children),c.return=b,b=c;break t}}else if(z.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Rr&&La(T)===z.type){e(b,z.sibling),c=o(z,u.props),c.ref=tn(b,z,u),c.return=b,b=c;break t}e(b,z);break}else r(b,z);z=z.sibling}u.type===we?(c=le(u.props.children,b.mode,y,u.key),c.return=b,b=c):(y=Eo(u.type,u.key,u.props,null,b.mode,y),y.ref=tn(b,c,u),y.return=b,b=y)}return l(b);case xe:t:{for(z=u.key;c!==null;){if(c.key===z)if(c.tag===4&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){e(b,c.sibling),c=o(c,u.children||[]),c.return=b,b=c;break t}else{e(b,c);break}else r(b,c);c=c.sibling}c=Us(u,b.mode,y),c.return=b,b=c}return l(b);case Rr:return z=u._init,I(b,c,z(u._payload),y)}if(ln(u))return w(b,c,u,y);if(Ke(u))return x(b,c,u,y);oo(b,u)}return typeof u=="string"&&u!==""||typeof u=="number"?(u=""+u,c!==null&&c.tag===6?(e(b,c.sibling),c=o(c,u),c.return=b,b=c):(e(b,c),c=Hs(u,b.mode,y),c.return=b,b=c),l(b)):e(b,c)}return I}var $e=Lg(!0),Wg=Lg(!1),$o=qr(null),Ho=null,Te=null,kl=null;function Sl(){kl=Te=Ho=null}function jl(t){var r=$o.current;pt($o),t._currentValue=r}function Bi(t,r,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,n!==null&&(n.childLanes|=r)):n!==null&&(n.childLanes&r)!==r&&(n.childLanes|=r),t===e)break;t=t.return}}function We(t,r){Ho=t,kl=Te=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&r&&(Ht=!0),t.firstContext=null)}function or(t){var r=t._currentValue;if(kl!==t)if(t={context:t,memoizedValue:r,next:null},Te===null){if(Ho===null)throw Error(_(308));Te=t,Ho.dependencies={lanes:0,firstContext:t}}else Te=Te.next=t;return r}var oe=null;function Cl(t){oe===null?oe=[t]:oe.push(t)}function Mg(t,r,e,n){var o=r.interleaved;return o===null?(e.next=e,Cl(r)):(e.next=o.next,o.next=e),r.interleaved=e,Tr(t,n)}function Tr(t,r){t.lanes|=r;var e=t.alternate;for(e!==null&&(e.lanes|=r),e=t,t=t.return;t!==null;)t.childLanes|=r,e=t.alternate,e!==null&&(e.childLanes|=r),e=t,t=t.return;return e.tag===3?e.stateNode:null}var _r=!1;function Il(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ng(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ir(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function Gr(t,r,e){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,st&2){var o=n.pending;return o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r,Tr(t,e)}return o=n.interleaved,o===null?(r.next=r,Cl(n)):(r.next=o.next,o.next=r),n.interleaved=r,Tr(t,e)}function wo(t,r,e){if(r=r.updateQueue,r!==null&&(r=r.shared,(e&4194240)!==0)){var n=r.lanes;n&=t.pendingLanes,e|=n,r.lanes=e,ul(t,e)}}function Wa(t,r){var e=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,e===n)){var o=null,i=null;if(e=e.firstBaseUpdate,e!==null){do{var l={eventTime:e.eventTime,lane:e.lane,tag:e.tag,payload:e.payload,callback:e.callback,next:null};i===null?o=i=l:i=i.next=l,e=e.next}while(e!==null);i===null?o=i=r:i=i.next=r}else o=i=r;e={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=r:t.next=r,e.lastBaseUpdate=r}function Uo(t,r,e,n){var o=t.updateQueue;_r=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var d=a,g=d.next;d.next=null,l===null?i=g:l.next=g,l=d;var m=t.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==l&&(a===null?m.firstBaseUpdate=g:a.next=g,m.lastBaseUpdate=d))}if(i!==null){var v=o.baseState;l=0,m=g=d=null,a=i;do{var p=a.lane,j=a.eventTime;if((n&p)===p){m!==null&&(m=m.next={eventTime:j,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});t:{var w=t,x=a;switch(p=r,j=e,x.tag){case 1:if(w=x.payload,typeof w=="function"){v=w.call(j,v,p);break t}v=w;break t;case 3:w.flags=w.flags&-65537|128;case 0:if(w=x.payload,p=typeof w=="function"?w.call(j,v,p):w,p==null)break t;v=xt({},v,p);break t;case 2:_r=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=o.effects,p===null?o.effects=[a]:p.push(a))}else j={eventTime:j,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(g=m=j,d=v):m=m.next=j,l|=p;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;p=a,a=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(m===null&&(d=v),o.baseState=d,o.firstBaseUpdate=g,o.lastBaseUpdate=m,r=o.shared.interleaved,r!==null){o=r;do l|=o.lane,o=o.next;while(o!==r)}else i===null&&(o.shared.lanes=0);ce|=l,t.lanes=l,t.memoizedState=v}}function Ma(t,r,e){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var n=t[r],o=n.callback;if(o!==null){if(n.callback=null,n=e,typeof o!="function")throw Error(_(191,o));o.call(n)}}}var $n={},xr=qr($n),An=qr($n),Dn=qr($n);function se(t){if(t===$n)throw Error(_(174));return t}function El(t,r){switch(ct(Dn,r),ct(An,t),ct(xr,$n),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:bi(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=bi(r,t)}pt(xr),ct(xr,r)}function He(){pt(xr),pt(An),pt(Dn)}function Pg(t){se(Dn.current);var r=se(xr.current),e=bi(r,t.type);r!==e&&(ct(An,t),ct(xr,e))}function zl(t){An.current===t&&(pt(xr),pt(An))}var yt=qr(0);function Go(t){for(var r=t;r!==null;){if(r.tag===13){var e=r.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||e.data==="$?"||e.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ws=[];function Tl(){for(var t=0;t<Ws.length;t++)Ws[t]._workInProgressVersionPrimary=null;Ws.length=0}var ko=Dr.ReactCurrentDispatcher,Ms=Dr.ReactCurrentBatchConfig,ue=0,ht=null,Ct=null,Et=null,Vo=!1,mn=!1,Fn=0,Ob=0;function Rt(){throw Error(_(321))}function Al(t,r){if(r===null)return!1;for(var e=0;e<r.length&&e<t.length;e++)if(!br(t[e],r[e]))return!1;return!0}function Dl(t,r,e,n,o,i){if(ue=i,ht=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ko.current=t===null||t.memoizedState===null?Gb:Vb,t=e(n,o),mn){i=0;do{if(mn=!1,Fn=0,25<=i)throw Error(_(301));i+=1,Et=Ct=null,r.updateQueue=null,ko.current=Yb,t=e(n,o)}while(mn)}if(ko.current=Yo,r=Ct!==null&&Ct.next!==null,ue=0,Et=Ct=ht=null,Vo=!1,r)throw Error(_(300));return t}function Fl(){var t=Fn!==0;return Fn=0,t}function vr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?ht.memoizedState=Et=t:Et=Et.next=t,Et}function sr(){if(Ct===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var r=Et===null?ht.memoizedState:Et.next;if(r!==null)Et=r,Ct=t;else{if(t===null)throw Error(_(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Et===null?ht.memoizedState=Et=t:Et=Et.next=t}return Et}function Bn(t,r){return typeof r=="function"?r(t):r}function Ns(t){var r=sr(),e=r.queue;if(e===null)throw Error(_(311));e.lastRenderedReducer=t;var n=Ct,o=n.baseQueue,i=e.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}n.baseQueue=o=i,e.pending=null}if(o!==null){i=o.next,n=n.baseState;var a=l=null,d=null,g=i;do{var m=g.lane;if((ue&m)===m)d!==null&&(d=d.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),n=g.hasEagerState?g.eagerState:t(n,g.action);else{var v={lane:m,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};d===null?(a=d=v,l=n):d=d.next=v,ht.lanes|=m,ce|=m}g=g.next}while(g!==null&&g!==i);d===null?l=n:d.next=a,br(n,r.memoizedState)||(Ht=!0),r.memoizedState=n,r.baseState=l,r.baseQueue=d,e.lastRenderedState=n}if(t=e.interleaved,t!==null){o=t;do i=o.lane,ht.lanes|=i,ce|=i,o=o.next;while(o!==t)}else o===null&&(e.lanes=0);return[r.memoizedState,e.dispatch]}function Ps(t){var r=sr(),e=r.queue;if(e===null)throw Error(_(311));e.lastRenderedReducer=t;var n=e.dispatch,o=e.pending,i=r.memoizedState;if(o!==null){e.pending=null;var l=o=o.next;do i=t(i,l.action),l=l.next;while(l!==o);br(i,r.memoizedState)||(Ht=!0),r.memoizedState=i,r.baseQueue===null&&(r.baseState=i),e.lastRenderedState=i}return[i,n]}function Og(){}function $g(t,r){var e=ht,n=sr(),o=r(),i=!br(n.memoizedState,o);if(i&&(n.memoizedState=o,Ht=!0),n=n.queue,Bl(Gg.bind(null,e,n,t),[t]),n.getSnapshot!==r||i||Et!==null&&Et.memoizedState.tag&1){if(e.flags|=2048,Rn(9,Ug.bind(null,e,n,o,r),void 0,null),zt===null)throw Error(_(349));ue&30||Hg(e,r,o)}return o}function Hg(t,r,e){t.flags|=16384,t={getSnapshot:r,value:e},r=ht.updateQueue,r===null?(r={lastEffect:null,stores:null},ht.updateQueue=r,r.stores=[t]):(e=r.stores,e===null?r.stores=[t]:e.push(t))}function Ug(t,r,e,n){r.value=e,r.getSnapshot=n,Vg(r)&&Yg(t)}function Gg(t,r,e){return e(function(){Vg(r)&&Yg(t)})}function Vg(t){var r=t.getSnapshot;t=t.value;try{var e=r();return!br(t,e)}catch{return!0}}function Yg(t){var r=Tr(t,1);r!==null&&cr(r,t,1,-1)}function Na(t){var r=vr();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bn,lastRenderedState:t},r.queue=t,t=t.dispatch=Ub.bind(null,ht,t),[r.memoizedState,t]}function Rn(t,r,e,n){return t={tag:t,create:r,destroy:e,deps:n,next:null},r=ht.updateQueue,r===null?(r={lastEffect:null,stores:null},ht.updateQueue=r,r.lastEffect=t.next=t):(e=r.lastEffect,e===null?r.lastEffect=t.next=t:(n=e.next,e.next=t,t.next=n,r.lastEffect=t)),t}function Qg(){return sr().memoizedState}function So(t,r,e,n){var o=vr();ht.flags|=t,o.memoizedState=Rn(1|r,e,void 0,n===void 0?null:n)}function ls(t,r,e,n){var o=sr();n=n===void 0?null:n;var i=void 0;if(Ct!==null){var l=Ct.memoizedState;if(i=l.destroy,n!==null&&Al(n,l.deps)){o.memoizedState=Rn(r,e,i,n);return}}ht.flags|=t,o.memoizedState=Rn(1|r,e,i,n)}function Pa(t,r){return So(8390656,8,t,r)}function Bl(t,r){return ls(2048,8,t,r)}function Kg(t,r){return ls(4,2,t,r)}function Xg(t,r){return ls(4,4,t,r)}function Jg(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Zg(t,r,e){return e=e!=null?e.concat([t]):null,ls(4,4,Jg.bind(null,r,t),e)}function Rl(){}function qg(t,r){var e=sr();r=r===void 0?null:r;var n=e.memoizedState;return n!==null&&r!==null&&Al(r,n[1])?n[0]:(e.memoizedState=[t,r],t)}function tu(t,r){var e=sr();r=r===void 0?null:r;var n=e.memoizedState;return n!==null&&r!==null&&Al(r,n[1])?n[0]:(t=t(),e.memoizedState=[t,r],t)}function ru(t,r,e){return ue&21?(br(e,r)||(e=ig(),ht.lanes|=e,ce|=e,t.baseState=!0),r):(t.baseState&&(t.baseState=!1,Ht=!0),t.memoizedState=e)}function $b(t,r){var e=dt;dt=e!==0&&4>e?e:4,t(!0);var n=Ms.transition;Ms.transition={};try{t(!1),r()}finally{dt=e,Ms.transition=n}}function eu(){return sr().memoizedState}function Hb(t,r,e){var n=Yr(t);if(e={lane:n,action:e,hasEagerState:!1,eagerState:null,next:null},nu(t))ou(r,e);else if(e=Mg(t,r,e,n),e!==null){var o=Nt();cr(e,t,n,o),su(e,r,n)}}function Ub(t,r,e){var n=Yr(t),o={lane:n,action:e,hasEagerState:!1,eagerState:null,next:null};if(nu(t))ou(r,o);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=r.lastRenderedReducer,i!==null))try{var l=r.lastRenderedState,a=i(l,e);if(o.hasEagerState=!0,o.eagerState=a,br(a,l)){var d=r.interleaved;d===null?(o.next=o,Cl(r)):(o.next=d.next,d.next=o),r.interleaved=o;return}}catch{}finally{}e=Mg(t,r,o,n),e!==null&&(o=Nt(),cr(e,t,n,o),su(e,r,n))}}function nu(t){var r=t.alternate;return t===ht||r!==null&&r===ht}function ou(t,r){mn=Vo=!0;var e=t.pending;e===null?r.next=r:(r.next=e.next,e.next=r),t.pending=r}function su(t,r,e){if(e&4194240){var n=r.lanes;n&=t.pendingLanes,e|=n,r.lanes=e,ul(t,e)}}var Yo={readContext:or,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useInsertionEffect:Rt,useLayoutEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useMutableSource:Rt,useSyncExternalStore:Rt,useId:Rt,unstable_isNewReconciler:!1},Gb={readContext:or,useCallback:function(t,r){return vr().memoizedState=[t,r===void 0?null:r],t},useContext:or,useEffect:Pa,useImperativeHandle:function(t,r,e){return e=e!=null?e.concat([t]):null,So(4194308,4,Jg.bind(null,r,t),e)},useLayoutEffect:function(t,r){return So(4194308,4,t,r)},useInsertionEffect:function(t,r){return So(4,2,t,r)},useMemo:function(t,r){var e=vr();return r=r===void 0?null:r,t=t(),e.memoizedState=[t,r],t},useReducer:function(t,r,e){var n=vr();return r=e!==void 0?e(r):r,n.memoizedState=n.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},n.queue=t,t=t.dispatch=Hb.bind(null,ht,t),[n.memoizedState,t]},useRef:function(t){var r=vr();return t={current:t},r.memoizedState=t},useState:Na,useDebugValue:Rl,useDeferredValue:function(t){return vr().memoizedState=t},useTransition:function(){var t=Na(!1),r=t[0];return t=$b.bind(null,t[1]),vr().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,e){var n=ht,o=vr();if(mt){if(e===void 0)throw Error(_(407));e=e()}else{if(e=r(),zt===null)throw Error(_(349));ue&30||Hg(n,r,e)}o.memoizedState=e;var i={value:e,getSnapshot:r};return o.queue=i,Pa(Gg.bind(null,n,i,t),[t]),n.flags|=2048,Rn(9,Ug.bind(null,n,i,e,r),void 0,null),e},useId:function(){var t=vr(),r=zt.identifierPrefix;if(mt){var e=Cr,n=jr;e=(n&~(1<<32-ur(n)-1)).toString(32)+e,r=":"+r+"R"+e,e=Fn++,0<e&&(r+="H"+e.toString(32)),r+=":"}else e=Ob++,r=":"+r+"r"+e.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Vb={readContext:or,useCallback:qg,useContext:or,useEffect:Bl,useImperativeHandle:Zg,useInsertionEffect:Kg,useLayoutEffect:Xg,useMemo:tu,useReducer:Ns,useRef:Qg,useState:function(){return Ns(Bn)},useDebugValue:Rl,useDeferredValue:function(t){var r=sr();return ru(r,Ct.memoizedState,t)},useTransition:function(){var t=Ns(Bn)[0],r=sr().memoizedState;return[t,r]},useMutableSource:Og,useSyncExternalStore:$g,useId:eu,unstable_isNewReconciler:!1},Yb={readContext:or,useCallback:qg,useContext:or,useEffect:Bl,useImperativeHandle:Zg,useInsertionEffect:Kg,useLayoutEffect:Xg,useMemo:tu,useReducer:Ps,useRef:Qg,useState:function(){return Ps(Bn)},useDebugValue:Rl,useDeferredValue:function(t){var r=sr();return Ct===null?r.memoizedState=t:ru(r,Ct.memoizedState,t)},useTransition:function(){var t=Ps(Bn)[0],r=sr().memoizedState;return[t,r]},useMutableSource:Og,useSyncExternalStore:$g,useId:eu,unstable_isNewReconciler:!1};function ar(t,r){if(t&&t.defaultProps){r=xt({},r),t=t.defaultProps;for(var e in t)r[e]===void 0&&(r[e]=t[e]);return r}return r}function Ri(t,r,e,n){r=t.memoizedState,e=e(n,r),e=e==null?r:xt({},r,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var as={isMounted:function(t){return(t=t._reactInternals)?fe(t)===t:!1},enqueueSetState:function(t,r,e){t=t._reactInternals;var n=Nt(),o=Yr(t),i=Ir(n,o);i.payload=r,e!=null&&(i.callback=e),r=Gr(t,i,o),r!==null&&(cr(r,t,o,n),wo(r,t,o))},enqueueReplaceState:function(t,r,e){t=t._reactInternals;var n=Nt(),o=Yr(t),i=Ir(n,o);i.tag=1,i.payload=r,e!=null&&(i.callback=e),r=Gr(t,i,o),r!==null&&(cr(r,t,o,n),wo(r,t,o))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var e=Nt(),n=Yr(t),o=Ir(e,n);o.tag=2,r!=null&&(o.callback=r),r=Gr(t,o,n),r!==null&&(cr(r,t,n,e),wo(r,t,n))}};function Oa(t,r,e,n,o,i,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,i,l):r.prototype&&r.prototype.isPureReactComponent?!In(e,n)||!In(o,i):!0}function iu(t,r,e){var n=!1,o=Xr,i=r.contextType;return typeof i=="object"&&i!==null?i=or(i):(o=Gt(r)?de:Wt.current,n=r.contextTypes,i=(n=n!=null)?Pe(t,o):Xr),r=new r(e,i),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=as,t.stateNode=r,r._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=o,t.__reactInternalMemoizedMaskedChildContext=i),r}function $a(t,r,e,n){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(e,n),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(e,n),r.state!==t&&as.enqueueReplaceState(r,r.state,null)}function _i(t,r,e,n){var o=t.stateNode;o.props=e,o.state=t.memoizedState,o.refs={},Il(t);var i=r.contextType;typeof i=="object"&&i!==null?o.context=or(i):(i=Gt(r)?de:Wt.current,o.context=Pe(t,i)),o.state=t.memoizedState,i=r.getDerivedStateFromProps,typeof i=="function"&&(Ri(t,r,i,e),o.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(r=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),r!==o.state&&as.enqueueReplaceState(o,o.state,null),Uo(t,e,o,n),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308)}function Ue(t,r){try{var e="",n=r;do e+=wc(n),n=n.return;while(n);var o=e}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:r,stack:o,digest:null}}function Os(t,r,e){return{value:t,source:null,stack:e??null,digest:r??null}}function Li(t,r){try{console.error(r.value)}catch(e){setTimeout(function(){throw e})}}var Qb=typeof WeakMap=="function"?WeakMap:Map;function lu(t,r,e){e=Ir(-1,e),e.tag=3,e.payload={element:null};var n=r.value;return e.callback=function(){Ko||(Ko=!0,Vi=n),Li(t,r)},e}function au(t,r,e){e=Ir(-1,e),e.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var o=r.value;e.payload=function(){return n(o)},e.callback=function(){Li(t,r)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){Li(t,r),typeof n!="function"&&(Vr===null?Vr=new Set([this]):Vr.add(this));var l=r.stack;this.componentDidCatch(r.value,{componentStack:l!==null?l:""})}),e}function Ha(t,r,e){var n=t.pingCache;if(n===null){n=t.pingCache=new Qb;var o=new Set;n.set(r,o)}else o=n.get(r),o===void 0&&(o=new Set,n.set(r,o));o.has(e)||(o.add(e),t=ap.bind(null,t,r,e),r.then(t,t))}function Ua(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function Ga(t,r,e,n,o){return t.mode&1?(t.flags|=65536,t.lanes=o,t):(t===r?t.flags|=65536:(t.flags|=128,e.flags|=131072,e.flags&=-52805,e.tag===1&&(e.alternate===null?e.tag=17:(r=Ir(-1,1),r.tag=2,Gr(e,r,1))),e.lanes|=1),t)}var Kb=Dr.ReactCurrentOwner,Ht=!1;function Mt(t,r,e,n){r.child=t===null?Wg(r,null,e,n):$e(r,t.child,e,n)}function Va(t,r,e,n,o){e=e.render;var i=r.ref;return We(r,o),n=Dl(t,r,e,n,i,o),e=Fl(),t!==null&&!Ht?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~o,Ar(t,r,o)):(mt&&e&&hl(r),r.flags|=1,Mt(t,r,n,o),r.child)}function Ya(t,r,e,n,o){if(t===null){var i=e.type;return typeof i=="function"&&!$l(i)&&i.defaultProps===void 0&&e.compare===null&&e.defaultProps===void 0?(r.tag=15,r.type=i,du(t,r,i,n,o)):(t=Eo(e.type,null,n,r,r.mode,o),t.ref=r.ref,t.return=r,r.child=t)}if(i=t.child,!(t.lanes&o)){var l=i.memoizedProps;if(e=e.compare,e=e!==null?e:In,e(l,n)&&t.ref===r.ref)return Ar(t,r,o)}return r.flags|=1,t=Qr(i,n),t.ref=r.ref,t.return=r,r.child=t}function du(t,r,e,n,o){if(t!==null){var i=t.memoizedProps;if(In(i,n)&&t.ref===r.ref)if(Ht=!1,r.pendingProps=n=i,(t.lanes&o)!==0)t.flags&131072&&(Ht=!0);else return r.lanes=t.lanes,Ar(t,r,o)}return Wi(t,r,e,n,o)}function gu(t,r,e){var n=r.pendingProps,o=n.children,i=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(De,Yt),Yt|=e;else{if(!(e&1073741824))return t=i!==null?i.baseLanes|e:e,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,ct(De,Yt),Yt|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:e,ct(De,Yt),Yt|=n}else i!==null?(n=i.baseLanes|e,r.memoizedState=null):n=e,ct(De,Yt),Yt|=n;return Mt(t,r,o,e),r.child}function uu(t,r){var e=r.ref;(t===null&&e!==null||t!==null&&t.ref!==e)&&(r.flags|=512,r.flags|=2097152)}function Wi(t,r,e,n,o){var i=Gt(e)?de:Wt.current;return i=Pe(r,i),We(r,o),e=Dl(t,r,e,n,i,o),n=Fl(),t!==null&&!Ht?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~o,Ar(t,r,o)):(mt&&n&&hl(r),r.flags|=1,Mt(t,r,e,o),r.child)}function Qa(t,r,e,n,o){if(Gt(e)){var i=!0;No(r)}else i=!1;if(We(r,o),r.stateNode===null)jo(t,r),iu(r,e,n),_i(r,e,n,o),n=!0;else if(t===null){var l=r.stateNode,a=r.memoizedProps;l.props=a;var d=l.context,g=e.contextType;typeof g=="object"&&g!==null?g=or(g):(g=Gt(e)?de:Wt.current,g=Pe(r,g));var m=e.getDerivedStateFromProps,v=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";v||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==n||d!==g)&&$a(r,l,n,g),_r=!1;var p=r.memoizedState;l.state=p,Uo(r,n,l,o),d=r.memoizedState,a!==n||p!==d||Ut.current||_r?(typeof m=="function"&&(Ri(r,e,m,n),d=r.memoizedState),(a=_r||Oa(r,e,a,n,p,d,g))?(v||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(r.flags|=4194308)):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=n,r.memoizedState=d),l.props=n,l.state=d,l.context=g,n=a):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),n=!1)}else{l=r.stateNode,Ng(t,r),a=r.memoizedProps,g=r.type===r.elementType?a:ar(r.type,a),l.props=g,v=r.pendingProps,p=l.context,d=e.contextType,typeof d=="object"&&d!==null?d=or(d):(d=Gt(e)?de:Wt.current,d=Pe(r,d));var j=e.getDerivedStateFromProps;(m=typeof j=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==v||p!==d)&&$a(r,l,n,d),_r=!1,p=r.memoizedState,l.state=p,Uo(r,n,l,o);var w=r.memoizedState;a!==v||p!==w||Ut.current||_r?(typeof j=="function"&&(Ri(r,e,j,n),w=r.memoizedState),(g=_r||Oa(r,e,g,n,p,w,d)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,w,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,w,d)),typeof l.componentDidUpdate=="function"&&(r.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(r.flags|=1024),r.memoizedProps=n,r.memoizedState=w),l.props=n,l.state=w,l.context=d,n=g):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(r.flags|=1024),n=!1)}return Mi(t,r,e,n,i,o)}function Mi(t,r,e,n,o,i){uu(t,r);var l=(r.flags&128)!==0;if(!n&&!l)return o&&Ba(r,e,!1),Ar(t,r,i);n=r.stateNode,Kb.current=r;var a=l&&typeof e.getDerivedStateFromError!="function"?null:n.render();return r.flags|=1,t!==null&&l?(r.child=$e(r,t.child,null,i),r.child=$e(r,null,a,i)):Mt(t,r,a,i),r.memoizedState=n.state,o&&Ba(r,e,!0),r.child}function cu(t){var r=t.stateNode;r.pendingContext?Fa(t,r.pendingContext,r.pendingContext!==r.context):r.context&&Fa(t,r.context,!1),El(t,r.containerInfo)}function Ka(t,r,e,n,o){return Oe(),wl(o),r.flags|=256,Mt(t,r,e,n),r.child}var Ni={dehydrated:null,treeContext:null,retryLane:0};function Pi(t){return{baseLanes:t,cachePool:null,transitions:null}}function bu(t,r,e){var n=r.pendingProps,o=yt.current,i=!1,l=(r.flags&128)!==0,a;if((a=l)||(a=t!==null&&t.memoizedState===null?!1:(o&2)!==0),a?(i=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(o|=1),ct(yt,o&1),t===null)return Fi(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(r.mode&1?t.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(l=n.children,t=n.fallback,i?(n=r.mode,i=r.child,l={mode:"hidden",children:l},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=us(l,n,0,null),t=le(t,n,e,null),i.return=r,t.return=r,i.sibling=t,r.child=i,r.child.memoizedState=Pi(e),r.memoizedState=Ni,t):_l(r,l));if(o=t.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Xb(t,r,l,n,a,o,e);if(i){i=n.fallback,l=r.mode,o=t.child,a=o.sibling;var d={mode:"hidden",children:n.children};return!(l&1)&&r.child!==o?(n=r.child,n.childLanes=0,n.pendingProps=d,r.deletions=null):(n=Qr(o,d),n.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Qr(a,i):(i=le(i,l,e,null),i.flags|=2),i.return=r,n.return=r,n.sibling=i,r.child=n,n=i,i=r.child,l=t.child.memoizedState,l=l===null?Pi(e):{baseLanes:l.baseLanes|e,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=t.childLanes&~e,r.memoizedState=Ni,n}return i=t.child,t=i.sibling,n=Qr(i,{mode:"visible",children:n.children}),!(r.mode&1)&&(n.lanes=e),n.return=r,n.sibling=null,t!==null&&(e=r.deletions,e===null?(r.deletions=[t],r.flags|=16):e.push(t)),r.child=n,r.memoizedState=null,n}function _l(t,r){return r=us({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function so(t,r,e,n){return n!==null&&wl(n),$e(r,t.child,null,e),t=_l(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Xb(t,r,e,n,o,i,l){if(e)return r.flags&256?(r.flags&=-257,n=Os(Error(_(422))),so(t,r,l,n)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(i=n.fallback,o=r.mode,n=us({mode:"visible",children:n.children},o,0,null),i=le(i,o,l,null),i.flags|=2,n.return=r,i.return=r,n.sibling=i,r.child=n,r.mode&1&&$e(r,t.child,null,l),r.child.memoizedState=Pi(l),r.memoizedState=Ni,i);if(!(r.mode&1))return so(t,r,l,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var a=n.dgst;return n=a,i=Error(_(419)),n=Os(i,n,void 0),so(t,r,l,n)}if(a=(l&t.childLanes)!==0,Ht||a){if(n=zt,n!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Tr(t,o),cr(n,t,o,-1))}return Ol(),n=Os(Error(_(421))),so(t,r,l,n)}return o.data==="$?"?(r.flags|=128,r.child=t.child,r=dp.bind(null,t),o._reactRetry=r,null):(t=i.treeContext,Qt=Ur(o.nextSibling),Kt=r,mt=!0,gr=null,t!==null&&(qt[tr++]=jr,qt[tr++]=Cr,qt[tr++]=ge,jr=t.id,Cr=t.overflow,ge=r),r=_l(r,n.children),r.flags|=4096,r)}function Xa(t,r,e){t.lanes|=r;var n=t.alternate;n!==null&&(n.lanes|=r),Bi(t.return,r,e)}function $s(t,r,e,n,o){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:n,tail:e,tailMode:o}:(i.isBackwards=r,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=e,i.tailMode=o)}function pu(t,r,e){var n=r.pendingProps,o=n.revealOrder,i=n.tail;if(Mt(t,r,n.children,e),n=yt.current,n&2)n=n&1|2,r.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xa(t,e,r);else if(t.tag===19)Xa(t,e,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break t;for(;t.sibling===null;){if(t.return===null||t.return===r)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(ct(yt,n),!(r.mode&1))r.memoizedState=null;else switch(o){case"forwards":for(e=r.child,o=null;e!==null;)t=e.alternate,t!==null&&Go(t)===null&&(o=e),e=e.sibling;e=o,e===null?(o=r.child,r.child=null):(o=e.sibling,e.sibling=null),$s(r,!1,o,e,i);break;case"backwards":for(e=null,o=r.child,r.child=null;o!==null;){if(t=o.alternate,t!==null&&Go(t)===null){r.child=o;break}t=o.sibling,o.sibling=e,e=o,o=t}$s(r,!0,e,null,i);break;case"together":$s(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function jo(t,r){!(r.mode&1)&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function Ar(t,r,e){if(t!==null&&(r.dependencies=t.dependencies),ce|=r.lanes,!(e&r.childLanes))return null;if(t!==null&&r.child!==t.child)throw Error(_(153));if(r.child!==null){for(t=r.child,e=Qr(t,t.pendingProps),r.child=e,e.return=r;t.sibling!==null;)t=t.sibling,e=e.sibling=Qr(t,t.pendingProps),e.return=r;e.sibling=null}return r.child}function Jb(t,r,e){switch(r.tag){case 3:cu(r),Oe();break;case 5:Pg(r);break;case 1:Gt(r.type)&&No(r);break;case 4:El(r,r.stateNode.containerInfo);break;case 10:var n=r.type._context,o=r.memoizedProps.value;ct($o,n._currentValue),n._currentValue=o;break;case 13:if(n=r.memoizedState,n!==null)return n.dehydrated!==null?(ct(yt,yt.current&1),r.flags|=128,null):e&r.child.childLanes?bu(t,r,e):(ct(yt,yt.current&1),t=Ar(t,r,e),t!==null?t.sibling:null);ct(yt,yt.current&1);break;case 19:if(n=(e&r.childLanes)!==0,t.flags&128){if(n)return pu(t,r,e);r.flags|=128}if(o=r.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ct(yt,yt.current),n)break;return null;case 22:case 23:return r.lanes=0,gu(t,r,e)}return Ar(t,r,e)}var mu,Oi,fu,vu;mu=function(t,r){for(var e=r.child;e!==null;){if(e.tag===5||e.tag===6)t.appendChild(e.stateNode);else if(e.tag!==4&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break;for(;e.sibling===null;){if(e.return===null||e.return===r)return;e=e.return}e.sibling.return=e.return,e=e.sibling}};Oi=function(){};fu=function(t,r,e,n){var o=t.memoizedProps;if(o!==n){t=r.stateNode,se(xr.current);var i=null;switch(e){case"input":o=di(t,o),n=di(t,n),i=[];break;case"select":o=xt({},o,{value:void 0}),n=xt({},n,{value:void 0}),i=[];break;case"textarea":o=ci(t,o),n=ci(t,n),i=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=Wo)}pi(e,n);var l;e=null;for(g in o)if(!n.hasOwnProperty(g)&&o.hasOwnProperty(g)&&o[g]!=null)if(g==="style"){var a=o[g];for(l in a)a.hasOwnProperty(l)&&(e||(e={}),e[l]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(hn.hasOwnProperty(g)?i||(i=[]):(i=i||[]).push(g,null));for(g in n){var d=n[g];if(a=o!=null?o[g]:void 0,n.hasOwnProperty(g)&&d!==a&&(d!=null||a!=null))if(g==="style")if(a){for(l in a)!a.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(e||(e={}),e[l]="");for(l in d)d.hasOwnProperty(l)&&a[l]!==d[l]&&(e||(e={}),e[l]=d[l])}else e||(i||(i=[]),i.push(g,e)),e=d;else g==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(i=i||[]).push(g,d)):g==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(g,""+d):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(hn.hasOwnProperty(g)?(d!=null&&g==="onScroll"&&bt("scroll",t),i||a===d||(i=[])):(i=i||[]).push(g,d))}e&&(i=i||[]).push("style",e);var g=i;(r.updateQueue=g)&&(r.flags|=4)}};vu=function(t,r,e,n){e!==n&&(r.flags|=4)};function rn(t,r){if(!mt)switch(t.tailMode){case"hidden":r=t.tail;for(var e=null;r!==null;)r.alternate!==null&&(e=r),r=r.sibling;e===null?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function _t(t){var r=t.alternate!==null&&t.alternate.child===t.child,e=0,n=0;if(r)for(var o=t.child;o!==null;)e|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=t,o=o.sibling;else for(o=t.child;o!==null;)e|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=t,o=o.sibling;return t.subtreeFlags|=n,t.childLanes=e,r}function Zb(t,r,e){var n=r.pendingProps;switch(xl(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(r),null;case 1:return Gt(r.type)&&Mo(),_t(r),null;case 3:return n=r.stateNode,He(),pt(Ut),pt(Wt),Tl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(no(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,gr!==null&&(Ki(gr),gr=null))),Oi(t,r),_t(r),null;case 5:zl(r);var o=se(Dn.current);if(e=r.type,t!==null&&r.stateNode!=null)fu(t,r,e,n,o),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!n){if(r.stateNode===null)throw Error(_(166));return _t(r),null}if(t=se(xr.current),no(r)){n=r.stateNode,e=r.type;var i=r.memoizedProps;switch(n[yr]=r,n[Tn]=i,t=(r.mode&1)!==0,e){case"dialog":bt("cancel",n),bt("close",n);break;case"iframe":case"object":case"embed":bt("load",n);break;case"video":case"audio":for(o=0;o<dn.length;o++)bt(dn[o],n);break;case"source":bt("error",n);break;case"img":case"image":case"link":bt("error",n),bt("load",n);break;case"details":bt("toggle",n);break;case"input":sa(n,i),bt("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},bt("invalid",n);break;case"textarea":la(n,i),bt("invalid",n)}pi(e,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?n.textContent!==a&&(i.suppressHydrationWarning!==!0&&eo(n.textContent,a,t),o=["children",a]):typeof a=="number"&&n.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&eo(n.textContent,a,t),o=["children",""+a]):hn.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&bt("scroll",n)}switch(e){case"input":Qn(n),ia(n,i,!0);break;case"textarea":Qn(n),aa(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=Wo)}n=o,r.updateQueue=n,n!==null&&(r.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Gd(e)),t==="http://www.w3.org/1999/xhtml"?e==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=l.createElement(e,{is:n.is}):(t=l.createElement(e),e==="select"&&(l=t,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):t=l.createElementNS(t,e),t[yr]=r,t[Tn]=n,mu(t,r,!1,!1),r.stateNode=t;t:{switch(l=mi(e,n),e){case"dialog":bt("cancel",t),bt("close",t),o=n;break;case"iframe":case"object":case"embed":bt("load",t),o=n;break;case"video":case"audio":for(o=0;o<dn.length;o++)bt(dn[o],t);o=n;break;case"source":bt("error",t),o=n;break;case"img":case"image":case"link":bt("error",t),bt("load",t),o=n;break;case"details":bt("toggle",t),o=n;break;case"input":sa(t,n),o=di(t,n),bt("invalid",t);break;case"option":o=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},o=xt({},n,{value:void 0}),bt("invalid",t);break;case"textarea":la(t,n),o=ci(t,n),bt("invalid",t);break;default:o=n}pi(e,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var d=a[i];i==="style"?Qd(t,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Vd(t,d)):i==="children"?typeof d=="string"?(e!=="textarea"||d!=="")&&xn(t,d):typeof d=="number"&&xn(t,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(hn.hasOwnProperty(i)?d!=null&&i==="onScroll"&&bt("scroll",t):d!=null&&sl(t,i,d,l))}switch(e){case"input":Qn(t),ia(t,n,!1);break;case"textarea":Qn(t),aa(t);break;case"option":n.value!=null&&t.setAttribute("value",""+Kr(n.value));break;case"select":t.multiple=!!n.multiple,i=n.value,i!=null?Be(t,!!n.multiple,i,!1):n.defaultValue!=null&&Be(t,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(t.onclick=Wo)}switch(e){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break t;case"img":n=!0;break t;default:n=!1}}n&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return _t(r),null;case 6:if(t&&r.stateNode!=null)vu(t,r,t.memoizedProps,n);else{if(typeof n!="string"&&r.stateNode===null)throw Error(_(166));if(e=se(Dn.current),se(xr.current),no(r)){if(n=r.stateNode,e=r.memoizedProps,n[yr]=r,(i=n.nodeValue!==e)&&(t=Kt,t!==null))switch(t.tag){case 3:eo(n.nodeValue,e,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&eo(n.nodeValue,e,(t.mode&1)!==0)}i&&(r.flags|=4)}else n=(e.nodeType===9?e:e.ownerDocument).createTextNode(n),n[yr]=r,r.stateNode=n}return _t(r),null;case 13:if(pt(yt),n=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(mt&&Qt!==null&&r.mode&1&&!(r.flags&128))_g(),Oe(),r.flags|=98560,i=!1;else if(i=no(r),n!==null&&n.dehydrated!==null){if(t===null){if(!i)throw Error(_(318));if(i=r.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[yr]=r}else Oe(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;_t(r),i=!1}else gr!==null&&(Ki(gr),gr=null),i=!0;if(!i)return r.flags&65536?r:null}return r.flags&128?(r.lanes=e,r):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(r.child.flags|=8192,r.mode&1&&(t===null||yt.current&1?It===0&&(It=3):Ol())),r.updateQueue!==null&&(r.flags|=4),_t(r),null);case 4:return He(),Oi(t,r),t===null&&En(r.stateNode.containerInfo),_t(r),null;case 10:return jl(r.type._context),_t(r),null;case 17:return Gt(r.type)&&Mo(),_t(r),null;case 19:if(pt(yt),i=r.memoizedState,i===null)return _t(r),null;if(n=(r.flags&128)!==0,l=i.rendering,l===null)if(n)rn(i,!1);else{if(It!==0||t!==null&&t.flags&128)for(t=r.child;t!==null;){if(l=Go(t),l!==null){for(r.flags|=128,rn(i,!1),n=l.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),r.subtreeFlags=0,n=e,e=r.child;e!==null;)i=e,t=n,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,t=l.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e=e.sibling;return ct(yt,yt.current&1|2),r.child}t=t.sibling}i.tail!==null&&kt()>Ge&&(r.flags|=128,n=!0,rn(i,!1),r.lanes=4194304)}else{if(!n)if(t=Go(l),t!==null){if(r.flags|=128,n=!0,e=t.updateQueue,e!==null&&(r.updateQueue=e,r.flags|=4),rn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!mt)return _t(r),null}else 2*kt()-i.renderingStartTime>Ge&&e!==1073741824&&(r.flags|=128,n=!0,rn(i,!1),r.lanes=4194304);i.isBackwards?(l.sibling=r.child,r.child=l):(e=i.last,e!==null?e.sibling=l:r.child=l,i.last=l)}return i.tail!==null?(r=i.tail,i.rendering=r,i.tail=r.sibling,i.renderingStartTime=kt(),r.sibling=null,e=yt.current,ct(yt,n?e&1|2:e&1),r):(_t(r),null);case 22:case 23:return Pl(),n=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(r.flags|=8192),n&&r.mode&1?Yt&1073741824&&(_t(r),r.subtreeFlags&6&&(r.flags|=8192)):_t(r),null;case 24:return null;case 25:return null}throw Error(_(156,r.tag))}function qb(t,r){switch(xl(r),r.tag){case 1:return Gt(r.type)&&Mo(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return He(),pt(Ut),pt(Wt),Tl(),t=r.flags,t&65536&&!(t&128)?(r.flags=t&-65537|128,r):null;case 5:return zl(r),null;case 13:if(pt(yt),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(_(340));Oe()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return pt(yt),null;case 4:return He(),null;case 10:return jl(r.type._context),null;case 22:case 23:return Pl(),null;case 24:return null;default:return null}}var io=!1,Lt=!1,tp=typeof WeakSet=="function"?WeakSet:Set,$=null;function Ae(t,r){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){wt(t,r,n)}else e.current=null}function $i(t,r,e){try{e()}catch(n){wt(t,r,n)}}var Ja=!1;function rp(t,r){if(Ci=Ro,t=kg(),yl(t)){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{e=(e=t.ownerDocument)&&e.defaultView||window;var n=e.getSelection&&e.getSelection();if(n&&n.rangeCount!==0){e=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{e.nodeType,i.nodeType}catch{e=null;break t}var l=0,a=-1,d=-1,g=0,m=0,v=t,p=null;r:for(;;){for(var j;v!==e||o!==0&&v.nodeType!==3||(a=l+o),v!==i||n!==0&&v.nodeType!==3||(d=l+n),v.nodeType===3&&(l+=v.nodeValue.length),(j=v.firstChild)!==null;)p=v,v=j;for(;;){if(v===t)break r;if(p===e&&++g===o&&(a=l),p===i&&++m===n&&(d=l),(j=v.nextSibling)!==null)break;v=p,p=v.parentNode}v=j}e=a===-1||d===-1?null:{start:a,end:d}}else e=null}e=e||{start:0,end:0}}else e=null;for(Ii={focusedElem:t,selectionRange:e},Ro=!1,$=r;$!==null;)if(r=$,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,$=t;else for(;$!==null;){r=$;try{var w=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var x=w.memoizedProps,I=w.memoizedState,b=r.stateNode,c=b.getSnapshotBeforeUpdate(r.elementType===r.type?x:ar(r.type,x),I);b.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var u=r.stateNode.containerInfo;u.nodeType===1?u.textContent="":u.nodeType===9&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(y){wt(r,r.return,y)}if(t=r.sibling,t!==null){t.return=r.return,$=t;break}$=r.return}return w=Ja,Ja=!1,w}function fn(t,r,e){var n=r.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&t)===t){var i=o.destroy;o.destroy=void 0,i!==void 0&&$i(r,e,i)}o=o.next}while(o!==n)}}function ds(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var e=r=r.next;do{if((e.tag&t)===t){var n=e.create;e.destroy=n()}e=e.next}while(e!==r)}}function Hi(t){var r=t.ref;if(r!==null){var e=t.stateNode;switch(t.tag){case 5:t=e;break;default:t=e}typeof r=="function"?r(t):r.current=t}}function yu(t){var r=t.alternate;r!==null&&(t.alternate=null,yu(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[yr],delete r[Tn],delete r[Ti],delete r[Wb],delete r[Mb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hu(t){return t.tag===5||t.tag===3||t.tag===4}function Za(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||hu(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ui(t,r,e){var n=t.tag;if(n===5||n===6)t=t.stateNode,r?e.nodeType===8?e.parentNode.insertBefore(t,r):e.insertBefore(t,r):(e.nodeType===8?(r=e.parentNode,r.insertBefore(t,e)):(r=e,r.appendChild(t)),e=e._reactRootContainer,e!=null||r.onclick!==null||(r.onclick=Wo));else if(n!==4&&(t=t.child,t!==null))for(Ui(t,r,e),t=t.sibling;t!==null;)Ui(t,r,e),t=t.sibling}function Gi(t,r,e){var n=t.tag;if(n===5||n===6)t=t.stateNode,r?e.insertBefore(t,r):e.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(Gi(t,r,e),t=t.sibling;t!==null;)Gi(t,r,e),t=t.sibling}var Tt=null,dr=!1;function Fr(t,r,e){for(e=e.child;e!==null;)xu(t,r,e),e=e.sibling}function xu(t,r,e){if(hr&&typeof hr.onCommitFiberUnmount=="function")try{hr.onCommitFiberUnmount(rs,e)}catch{}switch(e.tag){case 5:Lt||Ae(e,r);case 6:var n=Tt,o=dr;Tt=null,Fr(t,r,e),Tt=n,dr=o,Tt!==null&&(dr?(t=Tt,e=e.stateNode,t.nodeType===8?t.parentNode.removeChild(e):t.removeChild(e)):Tt.removeChild(e.stateNode));break;case 18:Tt!==null&&(dr?(t=Tt,e=e.stateNode,t.nodeType===8?_s(t.parentNode,e):t.nodeType===1&&_s(t,e),jn(t)):_s(Tt,e.stateNode));break;case 4:n=Tt,o=dr,Tt=e.stateNode.containerInfo,dr=!0,Fr(t,r,e),Tt=n,dr=o;break;case 0:case 11:case 14:case 15:if(!Lt&&(n=e.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&$i(e,r,l),o=o.next}while(o!==n)}Fr(t,r,e);break;case 1:if(!Lt&&(Ae(e,r),n=e.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=e.memoizedProps,n.state=e.memoizedState,n.componentWillUnmount()}catch(a){wt(e,r,a)}Fr(t,r,e);break;case 21:Fr(t,r,e);break;case 22:e.mode&1?(Lt=(n=Lt)||e.memoizedState!==null,Fr(t,r,e),Lt=n):Fr(t,r,e);break;default:Fr(t,r,e)}}function qa(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var e=t.stateNode;e===null&&(e=t.stateNode=new tp),r.forEach(function(n){var o=gp.bind(null,t,n);e.has(n)||(e.add(n),n.then(o,o))})}}function ir(t,r){var e=r.deletions;if(e!==null)for(var n=0;n<e.length;n++){var o=e[n];try{var i=t,l=r,a=l;t:for(;a!==null;){switch(a.tag){case 5:Tt=a.stateNode,dr=!1;break t;case 3:Tt=a.stateNode.containerInfo,dr=!0;break t;case 4:Tt=a.stateNode.containerInfo,dr=!0;break t}a=a.return}if(Tt===null)throw Error(_(160));xu(i,l,o),Tt=null,dr=!1;var d=o.alternate;d!==null&&(d.return=null),o.return=null}catch(g){wt(o,r,g)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)wu(r,t),r=r.sibling}function wu(t,r){var e=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ir(r,t),pr(t),n&4){try{fn(3,t,t.return),ds(3,t)}catch(x){wt(t,t.return,x)}try{fn(5,t,t.return)}catch(x){wt(t,t.return,x)}}break;case 1:ir(r,t),pr(t),n&512&&e!==null&&Ae(e,e.return);break;case 5:if(ir(r,t),pr(t),n&512&&e!==null&&Ae(e,e.return),t.flags&32){var o=t.stateNode;try{xn(o,"")}catch(x){wt(t,t.return,x)}}if(n&4&&(o=t.stateNode,o!=null)){var i=t.memoizedProps,l=e!==null?e.memoizedProps:i,a=t.type,d=t.updateQueue;if(t.updateQueue=null,d!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Hd(o,i),mi(a,l);var g=mi(a,i);for(l=0;l<d.length;l+=2){var m=d[l],v=d[l+1];m==="style"?Qd(o,v):m==="dangerouslySetInnerHTML"?Vd(o,v):m==="children"?xn(o,v):sl(o,m,v,g)}switch(a){case"input":gi(o,i);break;case"textarea":Ud(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var j=i.value;j!=null?Be(o,!!i.multiple,j,!1):p!==!!i.multiple&&(i.defaultValue!=null?Be(o,!!i.multiple,i.defaultValue,!0):Be(o,!!i.multiple,i.multiple?[]:"",!1))}o[Tn]=i}catch(x){wt(t,t.return,x)}}break;case 6:if(ir(r,t),pr(t),n&4){if(t.stateNode===null)throw Error(_(162));o=t.stateNode,i=t.memoizedProps;try{o.nodeValue=i}catch(x){wt(t,t.return,x)}}break;case 3:if(ir(r,t),pr(t),n&4&&e!==null&&e.memoizedState.isDehydrated)try{jn(r.containerInfo)}catch(x){wt(t,t.return,x)}break;case 4:ir(r,t),pr(t);break;case 13:ir(r,t),pr(t),o=t.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ml=kt())),n&4&&qa(t);break;case 22:if(m=e!==null&&e.memoizedState!==null,t.mode&1?(Lt=(g=Lt)||m,ir(r,t),Lt=g):ir(r,t),pr(t),n&8192){if(g=t.memoizedState!==null,(t.stateNode.isHidden=g)&&!m&&t.mode&1)for($=t,m=t.child;m!==null;){for(v=$=m;$!==null;){switch(p=$,j=p.child,p.tag){case 0:case 11:case 14:case 15:fn(4,p,p.return);break;case 1:Ae(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){n=p,e=p.return;try{r=n,w.props=r.memoizedProps,w.state=r.memoizedState,w.componentWillUnmount()}catch(x){wt(n,e,x)}}break;case 5:Ae(p,p.return);break;case 22:if(p.memoizedState!==null){rd(v);continue}}j!==null?(j.return=p,$=j):rd(v)}m=m.sibling}t:for(m=null,v=t;;){if(v.tag===5){if(m===null){m=v;try{o=v.stateNode,g?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=v.stateNode,d=v.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=Yd("display",l))}catch(x){wt(t,t.return,x)}}}else if(v.tag===6){if(m===null)try{v.stateNode.nodeValue=g?"":v.memoizedProps}catch(x){wt(t,t.return,x)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===t)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===t)break t;for(;v.sibling===null;){if(v.return===null||v.return===t)break t;m===v&&(m=null),v=v.return}m===v&&(m=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:ir(r,t),pr(t),n&4&&qa(t);break;case 21:break;default:ir(r,t),pr(t)}}function pr(t){var r=t.flags;if(r&2){try{t:{for(var e=t.return;e!==null;){if(hu(e)){var n=e;break t}e=e.return}throw Error(_(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(xn(o,""),n.flags&=-33);var i=Za(t);Gi(t,i,o);break;case 3:case 4:var l=n.stateNode.containerInfo,a=Za(t);Ui(t,a,l);break;default:throw Error(_(161))}}catch(d){wt(t,t.return,d)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function ep(t,r,e){$=t,ku(t)}function ku(t,r,e){for(var n=(t.mode&1)!==0;$!==null;){var o=$,i=o.child;if(o.tag===22&&n){var l=o.memoizedState!==null||io;if(!l){var a=o.alternate,d=a!==null&&a.memoizedState!==null||Lt;a=io;var g=Lt;if(io=l,(Lt=d)&&!g)for($=o;$!==null;)l=$,d=l.child,l.tag===22&&l.memoizedState!==null?ed(o):d!==null?(d.return=l,$=d):ed(o);for(;i!==null;)$=i,ku(i),i=i.sibling;$=o,io=a,Lt=g}td(t)}else o.subtreeFlags&8772&&i!==null?(i.return=o,$=i):td(t)}}function td(t){for(;$!==null;){var r=$;if(r.flags&8772){var e=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Lt||ds(5,r);break;case 1:var n=r.stateNode;if(r.flags&4&&!Lt)if(e===null)n.componentDidMount();else{var o=r.elementType===r.type?e.memoizedProps:ar(r.type,e.memoizedProps);n.componentDidUpdate(o,e.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=r.updateQueue;i!==null&&Ma(r,i,n);break;case 3:var l=r.updateQueue;if(l!==null){if(e=null,r.child!==null)switch(r.child.tag){case 5:e=r.child.stateNode;break;case 1:e=r.child.stateNode}Ma(r,l,e)}break;case 5:var a=r.stateNode;if(e===null&&r.flags&4){e=a;var d=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&e.focus();break;case"img":d.src&&(e.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var g=r.alternate;if(g!==null){var m=g.memoizedState;if(m!==null){var v=m.dehydrated;v!==null&&jn(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Lt||r.flags&512&&Hi(r)}catch(p){wt(r,r.return,p)}}if(r===t){$=null;break}if(e=r.sibling,e!==null){e.return=r.return,$=e;break}$=r.return}}function rd(t){for(;$!==null;){var r=$;if(r===t){$=null;break}var e=r.sibling;if(e!==null){e.return=r.return,$=e;break}$=r.return}}function ed(t){for(;$!==null;){var r=$;try{switch(r.tag){case 0:case 11:case 15:var e=r.return;try{ds(4,r)}catch(d){wt(r,e,d)}break;case 1:var n=r.stateNode;if(typeof n.componentDidMount=="function"){var o=r.return;try{n.componentDidMount()}catch(d){wt(r,o,d)}}var i=r.return;try{Hi(r)}catch(d){wt(r,i,d)}break;case 5:var l=r.return;try{Hi(r)}catch(d){wt(r,l,d)}}}catch(d){wt(r,r.return,d)}if(r===t){$=null;break}var a=r.sibling;if(a!==null){a.return=r.return,$=a;break}$=r.return}}var np=Math.ceil,Qo=Dr.ReactCurrentDispatcher,Ll=Dr.ReactCurrentOwner,nr=Dr.ReactCurrentBatchConfig,st=0,zt=null,jt=null,Dt=0,Yt=0,De=qr(0),It=0,_n=null,ce=0,gs=0,Wl=0,vn=null,$t=null,Ml=0,Ge=1/0,wr=null,Ko=!1,Vi=null,Vr=null,lo=!1,Pr=null,Xo=0,yn=0,Yi=null,Co=-1,Io=0;function Nt(){return st&6?kt():Co!==-1?Co:Co=kt()}function Yr(t){return t.mode&1?st&2&&Dt!==0?Dt&-Dt:Pb.transition!==null?(Io===0&&(Io=ig()),Io):(t=dt,t!==0||(t=window.event,t=t===void 0?16:bg(t.type)),t):1}function cr(t,r,e,n){if(50<yn)throw yn=0,Yi=null,Error(_(185));Nn(t,e,n),(!(st&2)||t!==zt)&&(t===zt&&(!(st&2)&&(gs|=e),It===4&&Mr(t,Dt)),Vt(t,n),e===1&&st===0&&!(r.mode&1)&&(Ge=kt()+500,is&&te()))}function Vt(t,r){var e=t.callbackNode;Pc(t,r);var n=Bo(t,t===zt?Dt:0);if(n===0)e!==null&&ua(e),t.callbackNode=null,t.callbackPriority=0;else if(r=n&-n,t.callbackPriority!==r){if(e!=null&&ua(e),r===1)t.tag===0?Nb(nd.bind(null,t)):Fg(nd.bind(null,t)),_b(function(){!(st&6)&&te()}),e=null;else{switch(lg(n)){case 1:e=gl;break;case 4:e=og;break;case 16:e=Fo;break;case 536870912:e=sg;break;default:e=Fo}e=Au(e,Su.bind(null,t))}t.callbackPriority=r,t.callbackNode=e}}function Su(t,r){if(Co=-1,Io=0,st&6)throw Error(_(327));var e=t.callbackNode;if(Me()&&t.callbackNode!==e)return null;var n=Bo(t,t===zt?Dt:0);if(n===0)return null;if(n&30||n&t.expiredLanes||r)r=Jo(t,n);else{r=n;var o=st;st|=2;var i=Cu();(zt!==t||Dt!==r)&&(wr=null,Ge=kt()+500,ie(t,r));do try{ip();break}catch(a){ju(t,a)}while(!0);Sl(),Qo.current=i,st=o,jt!==null?r=0:(zt=null,Dt=0,r=It)}if(r!==0){if(r===2&&(o=xi(t),o!==0&&(n=o,r=Qi(t,o))),r===1)throw e=_n,ie(t,0),Mr(t,n),Vt(t,kt()),e;if(r===6)Mr(t,n);else{if(o=t.current.alternate,!(n&30)&&!op(o)&&(r=Jo(t,n),r===2&&(i=xi(t),i!==0&&(n=i,r=Qi(t,i))),r===1))throw e=_n,ie(t,0),Mr(t,n),Vt(t,kt()),e;switch(t.finishedWork=o,t.finishedLanes=n,r){case 0:case 1:throw Error(_(345));case 2:ee(t,$t,wr);break;case 3:if(Mr(t,n),(n&130023424)===n&&(r=Ml+500-kt(),10<r)){if(Bo(t,0)!==0)break;if(o=t.suspendedLanes,(o&n)!==n){Nt(),t.pingedLanes|=t.suspendedLanes&o;break}t.timeoutHandle=zi(ee.bind(null,t,$t,wr),r);break}ee(t,$t,wr);break;case 4:if(Mr(t,n),(n&4194240)===n)break;for(r=t.eventTimes,o=-1;0<n;){var l=31-ur(n);i=1<<l,l=r[l],l>o&&(o=l),n&=~i}if(n=o,n=kt()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*np(n/1960))-n,10<n){t.timeoutHandle=zi(ee.bind(null,t,$t,wr),n);break}ee(t,$t,wr);break;case 5:ee(t,$t,wr);break;default:throw Error(_(329))}}}return Vt(t,kt()),t.callbackNode===e?Su.bind(null,t):null}function Qi(t,r){var e=vn;return t.current.memoizedState.isDehydrated&&(ie(t,r).flags|=256),t=Jo(t,r),t!==2&&(r=$t,$t=e,r!==null&&Ki(r)),t}function Ki(t){$t===null?$t=t:$t.push.apply($t,t)}function op(t){for(var r=t;;){if(r.flags&16384){var e=r.updateQueue;if(e!==null&&(e=e.stores,e!==null))for(var n=0;n<e.length;n++){var o=e[n],i=o.getSnapshot;o=o.value;try{if(!br(i(),o))return!1}catch{return!1}}}if(e=r.child,r.subtreeFlags&16384&&e!==null)e.return=r,r=e;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Mr(t,r){for(r&=~Wl,r&=~gs,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var e=31-ur(r),n=1<<e;t[e]=-1,r&=~n}}function nd(t){if(st&6)throw Error(_(327));Me();var r=Bo(t,0);if(!(r&1))return Vt(t,kt()),null;var e=Jo(t,r);if(t.tag!==0&&e===2){var n=xi(t);n!==0&&(r=n,e=Qi(t,n))}if(e===1)throw e=_n,ie(t,0),Mr(t,r),Vt(t,kt()),e;if(e===6)throw Error(_(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,ee(t,$t,wr),Vt(t,kt()),null}function Nl(t,r){var e=st;st|=1;try{return t(r)}finally{st=e,st===0&&(Ge=kt()+500,is&&te())}}function be(t){Pr!==null&&Pr.tag===0&&!(st&6)&&Me();var r=st;st|=1;var e=nr.transition,n=dt;try{if(nr.transition=null,dt=1,t)return t()}finally{dt=n,nr.transition=e,st=r,!(st&6)&&te()}}function Pl(){Yt=De.current,pt(De)}function ie(t,r){t.finishedWork=null,t.finishedLanes=0;var e=t.timeoutHandle;if(e!==-1&&(t.timeoutHandle=-1,Rb(e)),jt!==null)for(e=jt.return;e!==null;){var n=e;switch(xl(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Mo();break;case 3:He(),pt(Ut),pt(Wt),Tl();break;case 5:zl(n);break;case 4:He();break;case 13:pt(yt);break;case 19:pt(yt);break;case 10:jl(n.type._context);break;case 22:case 23:Pl()}e=e.return}if(zt=t,jt=t=Qr(t.current,null),Dt=Yt=r,It=0,_n=null,Wl=gs=ce=0,$t=vn=null,oe!==null){for(r=0;r<oe.length;r++)if(e=oe[r],n=e.interleaved,n!==null){e.interleaved=null;var o=n.next,i=e.pending;if(i!==null){var l=i.next;i.next=o,n.next=l}e.pending=n}oe=null}return t}function ju(t,r){do{var e=jt;try{if(Sl(),ko.current=Yo,Vo){for(var n=ht.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}Vo=!1}if(ue=0,Et=Ct=ht=null,mn=!1,Fn=0,Ll.current=null,e===null||e.return===null){It=1,_n=r,jt=null;break}t:{var i=t,l=e.return,a=e,d=r;if(r=Dt,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var g=d,m=a,v=m.tag;if(!(m.mode&1)&&(v===0||v===11||v===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var j=Ua(l);if(j!==null){j.flags&=-257,Ga(j,l,a,i,r),j.mode&1&&Ha(i,g,r),r=j,d=g;var w=r.updateQueue;if(w===null){var x=new Set;x.add(d),r.updateQueue=x}else w.add(d);break t}else{if(!(r&1)){Ha(i,g,r),Ol();break t}d=Error(_(426))}}else if(mt&&a.mode&1){var I=Ua(l);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Ga(I,l,a,i,r),wl(Ue(d,a));break t}}i=d=Ue(d,a),It!==4&&(It=2),vn===null?vn=[i]:vn.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,r&=-r,i.lanes|=r;var b=lu(i,d,r);Wa(i,b);break t;case 1:a=d;var c=i.type,u=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Vr===null||!Vr.has(u)))){i.flags|=65536,r&=-r,i.lanes|=r;var y=au(i,a,r);Wa(i,y);break t}}i=i.return}while(i!==null)}Eu(e)}catch(T){r=T,jt===e&&e!==null&&(jt=e=e.return);continue}break}while(!0)}function Cu(){var t=Qo.current;return Qo.current=Yo,t===null?Yo:t}function Ol(){(It===0||It===3||It===2)&&(It=4),zt===null||!(ce&268435455)&&!(gs&268435455)||Mr(zt,Dt)}function Jo(t,r){var e=st;st|=2;var n=Cu();(zt!==t||Dt!==r)&&(wr=null,ie(t,r));do try{sp();break}catch(o){ju(t,o)}while(!0);if(Sl(),st=e,Qo.current=n,jt!==null)throw Error(_(261));return zt=null,Dt=0,It}function sp(){for(;jt!==null;)Iu(jt)}function ip(){for(;jt!==null&&!Dc();)Iu(jt)}function Iu(t){var r=Tu(t.alternate,t,Yt);t.memoizedProps=t.pendingProps,r===null?Eu(t):jt=r,Ll.current=null}function Eu(t){var r=t;do{var e=r.alternate;if(t=r.return,r.flags&32768){if(e=qb(e,r),e!==null){e.flags&=32767,jt=e;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{It=6,jt=null;return}}else if(e=Zb(e,r,Yt),e!==null){jt=e;return}if(r=r.sibling,r!==null){jt=r;return}jt=r=t}while(r!==null);It===0&&(It=5)}function ee(t,r,e){var n=dt,o=nr.transition;try{nr.transition=null,dt=1,lp(t,r,e,n)}finally{nr.transition=o,dt=n}return null}function lp(t,r,e,n){do Me();while(Pr!==null);if(st&6)throw Error(_(327));e=t.finishedWork;var o=t.finishedLanes;if(e===null)return null;if(t.finishedWork=null,t.finishedLanes=0,e===t.current)throw Error(_(177));t.callbackNode=null,t.callbackPriority=0;var i=e.lanes|e.childLanes;if(Oc(t,i),t===zt&&(jt=zt=null,Dt=0),!(e.subtreeFlags&2064)&&!(e.flags&2064)||lo||(lo=!0,Au(Fo,function(){return Me(),null})),i=(e.flags&15990)!==0,e.subtreeFlags&15990||i){i=nr.transition,nr.transition=null;var l=dt;dt=1;var a=st;st|=4,Ll.current=null,rp(t,e),wu(e,t),Eb(Ii),Ro=!!Ci,Ii=Ci=null,t.current=e,ep(e),Fc(),st=a,dt=l,nr.transition=i}else t.current=e;if(lo&&(lo=!1,Pr=t,Xo=o),i=t.pendingLanes,i===0&&(Vr=null),_c(e.stateNode),Vt(t,kt()),r!==null)for(n=t.onRecoverableError,e=0;e<r.length;e++)o=r[e],n(o.value,{componentStack:o.stack,digest:o.digest});if(Ko)throw Ko=!1,t=Vi,Vi=null,t;return Xo&1&&t.tag!==0&&Me(),i=t.pendingLanes,i&1?t===Yi?yn++:(yn=0,Yi=t):yn=0,te(),null}function Me(){if(Pr!==null){var t=lg(Xo),r=nr.transition,e=dt;try{if(nr.transition=null,dt=16>t?16:t,Pr===null)var n=!1;else{if(t=Pr,Pr=null,Xo=0,st&6)throw Error(_(331));var o=st;for(st|=4,$=t.current;$!==null;){var i=$,l=i.child;if($.flags&16){var a=i.deletions;if(a!==null){for(var d=0;d<a.length;d++){var g=a[d];for($=g;$!==null;){var m=$;switch(m.tag){case 0:case 11:case 15:fn(8,m,i)}var v=m.child;if(v!==null)v.return=m,$=v;else for(;$!==null;){m=$;var p=m.sibling,j=m.return;if(yu(m),m===g){$=null;break}if(p!==null){p.return=j,$=p;break}$=j}}}var w=i.alternate;if(w!==null){var x=w.child;if(x!==null){w.child=null;do{var I=x.sibling;x.sibling=null,x=I}while(x!==null)}}$=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,$=l;else t:for(;$!==null;){if(i=$,i.flags&2048)switch(i.tag){case 0:case 11:case 15:fn(9,i,i.return)}var b=i.sibling;if(b!==null){b.return=i.return,$=b;break t}$=i.return}}var c=t.current;for($=c;$!==null;){l=$;var u=l.child;if(l.subtreeFlags&2064&&u!==null)u.return=l,$=u;else t:for(l=c;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ds(9,a)}}catch(T){wt(a,a.return,T)}if(a===l){$=null;break t}var y=a.sibling;if(y!==null){y.return=a.return,$=y;break t}$=a.return}}if(st=o,te(),hr&&typeof hr.onPostCommitFiberRoot=="function")try{hr.onPostCommitFiberRoot(rs,t)}catch{}n=!0}return n}finally{dt=e,nr.transition=r}}return!1}function od(t,r,e){r=Ue(e,r),r=lu(t,r,1),t=Gr(t,r,1),r=Nt(),t!==null&&(Nn(t,1,r),Vt(t,r))}function wt(t,r,e){if(t.tag===3)od(t,t,e);else for(;r!==null;){if(r.tag===3){od(r,t,e);break}else if(r.tag===1){var n=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Vr===null||!Vr.has(n))){t=Ue(e,t),t=au(r,t,1),r=Gr(r,t,1),t=Nt(),r!==null&&(Nn(r,1,t),Vt(r,t));break}}r=r.return}}function ap(t,r,e){var n=t.pingCache;n!==null&&n.delete(r),r=Nt(),t.pingedLanes|=t.suspendedLanes&e,zt===t&&(Dt&e)===e&&(It===4||It===3&&(Dt&130023424)===Dt&&500>kt()-Ml?ie(t,0):Wl|=e),Vt(t,r)}function zu(t,r){r===0&&(t.mode&1?(r=Jn,Jn<<=1,!(Jn&130023424)&&(Jn=4194304)):r=1);var e=Nt();t=Tr(t,r),t!==null&&(Nn(t,r,e),Vt(t,e))}function dp(t){var r=t.memoizedState,e=0;r!==null&&(e=r.retryLane),zu(t,e)}function gp(t,r){var e=0;switch(t.tag){case 13:var n=t.stateNode,o=t.memoizedState;o!==null&&(e=o.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(_(314))}n!==null&&n.delete(r),zu(t,e)}var Tu;Tu=function(t,r,e){if(t!==null)if(t.memoizedProps!==r.pendingProps||Ut.current)Ht=!0;else{if(!(t.lanes&e)&&!(r.flags&128))return Ht=!1,Jb(t,r,e);Ht=!!(t.flags&131072)}else Ht=!1,mt&&r.flags&1048576&&Bg(r,Oo,r.index);switch(r.lanes=0,r.tag){case 2:var n=r.type;jo(t,r),t=r.pendingProps;var o=Pe(r,Wt.current);We(r,e),o=Dl(null,r,n,t,o,e);var i=Fl();return r.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Gt(n)?(i=!0,No(r)):i=!1,r.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Il(r),o.updater=as,r.stateNode=o,o._reactInternals=r,_i(r,n,t,e),r=Mi(null,r,n,!0,i,e)):(r.tag=0,mt&&i&&hl(r),Mt(null,r,o,e),r=r.child),r;case 16:n=r.elementType;t:{switch(jo(t,r),t=r.pendingProps,o=n._init,n=o(n._payload),r.type=n,o=r.tag=cp(n),t=ar(n,t),o){case 0:r=Wi(null,r,n,t,e);break t;case 1:r=Qa(null,r,n,t,e);break t;case 11:r=Va(null,r,n,t,e);break t;case 14:r=Ya(null,r,n,ar(n.type,t),e);break t}throw Error(_(306,n,""))}return r;case 0:return n=r.type,o=r.pendingProps,o=r.elementType===n?o:ar(n,o),Wi(t,r,n,o,e);case 1:return n=r.type,o=r.pendingProps,o=r.elementType===n?o:ar(n,o),Qa(t,r,n,o,e);case 3:t:{if(cu(r),t===null)throw Error(_(387));n=r.pendingProps,i=r.memoizedState,o=i.element,Ng(t,r),Uo(r,n,null,e);var l=r.memoizedState;if(n=l.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},r.updateQueue.baseState=i,r.memoizedState=i,r.flags&256){o=Ue(Error(_(423)),r),r=Ka(t,r,n,e,o);break t}else if(n!==o){o=Ue(Error(_(424)),r),r=Ka(t,r,n,e,o);break t}else for(Qt=Ur(r.stateNode.containerInfo.firstChild),Kt=r,mt=!0,gr=null,e=Wg(r,null,n,e),r.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(Oe(),n===o){r=Ar(t,r,e);break t}Mt(t,r,n,e)}r=r.child}return r;case 5:return Pg(r),t===null&&Fi(r),n=r.type,o=r.pendingProps,i=t!==null?t.memoizedProps:null,l=o.children,Ei(n,o)?l=null:i!==null&&Ei(n,i)&&(r.flags|=32),uu(t,r),Mt(t,r,l,e),r.child;case 6:return t===null&&Fi(r),null;case 13:return bu(t,r,e);case 4:return El(r,r.stateNode.containerInfo),n=r.pendingProps,t===null?r.child=$e(r,null,n,e):Mt(t,r,n,e),r.child;case 11:return n=r.type,o=r.pendingProps,o=r.elementType===n?o:ar(n,o),Va(t,r,n,o,e);case 7:return Mt(t,r,r.pendingProps,e),r.child;case 8:return Mt(t,r,r.pendingProps.children,e),r.child;case 12:return Mt(t,r,r.pendingProps.children,e),r.child;case 10:t:{if(n=r.type._context,o=r.pendingProps,i=r.memoizedProps,l=o.value,ct($o,n._currentValue),n._currentValue=l,i!==null)if(br(i.value,l)){if(i.children===o.children&&!Ut.current){r=Ar(t,r,e);break t}}else for(i=r.child,i!==null&&(i.return=r);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var d=a.firstContext;d!==null;){if(d.context===n){if(i.tag===1){d=Ir(-1,e&-e),d.tag=2;var g=i.updateQueue;if(g!==null){g=g.shared;var m=g.pending;m===null?d.next=d:(d.next=m.next,m.next=d),g.pending=d}}i.lanes|=e,d=i.alternate,d!==null&&(d.lanes|=e),Bi(i.return,e,r),a.lanes|=e;break}d=d.next}}else if(i.tag===10)l=i.type===r.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(_(341));l.lanes|=e,a=l.alternate,a!==null&&(a.lanes|=e),Bi(l,e,r),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===r){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Mt(t,r,o.children,e),r=r.child}return r;case 9:return o=r.type,n=r.pendingProps.children,We(r,e),o=or(o),n=n(o),r.flags|=1,Mt(t,r,n,e),r.child;case 14:return n=r.type,o=ar(n,r.pendingProps),o=ar(n.type,o),Ya(t,r,n,o,e);case 15:return du(t,r,r.type,r.pendingProps,e);case 17:return n=r.type,o=r.pendingProps,o=r.elementType===n?o:ar(n,o),jo(t,r),r.tag=1,Gt(n)?(t=!0,No(r)):t=!1,We(r,e),iu(r,n,o),_i(r,n,o,e),Mi(null,r,n,!0,t,e);case 19:return pu(t,r,e);case 22:return gu(t,r,e)}throw Error(_(156,r.tag))};function Au(t,r){return ng(t,r)}function up(t,r,e,n){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rr(t,r,e,n){return new up(t,r,e,n)}function $l(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cp(t){if(typeof t=="function")return $l(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ll)return 11;if(t===al)return 14}return 2}function Qr(t,r){var e=t.alternate;return e===null?(e=rr(t.tag,r,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=r,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&14680064,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,r=t.dependencies,e.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e}function Eo(t,r,e,n,o,i){var l=2;if(n=t,typeof t=="function")$l(t)&&(l=1);else if(typeof t=="string")l=5;else t:switch(t){case we:return le(e.children,o,i,r);case il:l=8,o|=8;break;case si:return t=rr(12,e,r,o|2),t.elementType=si,t.lanes=i,t;case ii:return t=rr(13,e,r,o),t.elementType=ii,t.lanes=i,t;case li:return t=rr(19,e,r,o),t.elementType=li,t.lanes=i,t;case Pd:return us(e,o,i,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Md:l=10;break t;case Nd:l=9;break t;case ll:l=11;break t;case al:l=14;break t;case Rr:l=16,n=null;break t}throw Error(_(130,t==null?t:typeof t,""))}return r=rr(l,e,r,o),r.elementType=t,r.type=n,r.lanes=i,r}function le(t,r,e,n){return t=rr(7,t,n,r),t.lanes=e,t}function us(t,r,e,n){return t=rr(22,t,n,r),t.elementType=Pd,t.lanes=e,t.stateNode={isHidden:!1},t}function Hs(t,r,e){return t=rr(6,t,null,r),t.lanes=e,t}function Us(t,r,e){return r=rr(4,t.children!==null?t.children:[],t.key,r),r.lanes=e,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function bp(t,r,e,n,o){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=js(0),this.expirationTimes=js(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=js(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Hl(t,r,e,n,o,i,l,a,d){return t=new bp(t,r,e,a,d),r===1?(r=1,i===!0&&(r|=8)):r=0,i=rr(3,null,null,r),t.current=i,i.stateNode=t,i.memoizedState={element:n,isDehydrated:e,cache:null,transitions:null,pendingSuspenseBoundaries:null},Il(i),t}function pp(t,r,e){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xe,key:n==null?null:""+n,children:t,containerInfo:r,implementation:e}}function Du(t){if(!t)return Xr;t=t._reactInternals;t:{if(fe(t)!==t||t.tag!==1)throw Error(_(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break t;case 1:if(Gt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break t}}r=r.return}while(r!==null);throw Error(_(171))}if(t.tag===1){var e=t.type;if(Gt(e))return Dg(t,e,r)}return r}function Fu(t,r,e,n,o,i,l,a,d){return t=Hl(e,n,!0,t,o,i,l,a,d),t.context=Du(null),e=t.current,n=Nt(),o=Yr(e),i=Ir(n,o),i.callback=r??null,Gr(e,i,o),t.current.lanes=o,Nn(t,o,n),Vt(t,n),t}function cs(t,r,e,n){var o=r.current,i=Nt(),l=Yr(o);return e=Du(e),r.context===null?r.context=e:r.pendingContext=e,r=Ir(i,l),r.payload={element:t},n=n===void 0?null:n,n!==null&&(r.callback=n),t=Gr(o,r,l),t!==null&&(cr(t,o,l,i),wo(t,o,l)),l}function Zo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function sd(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<r?e:r}}function Ul(t,r){sd(t,r),(t=t.alternate)&&sd(t,r)}function mp(){return null}var Bu=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gl(t){this._internalRoot=t}bs.prototype.render=Gl.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(_(409));cs(t,r,null,null)};bs.prototype.unmount=Gl.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;be(function(){cs(null,t,null,null)}),r[zr]=null}};function bs(t){this._internalRoot=t}bs.prototype.unstable_scheduleHydration=function(t){if(t){var r=gg();t={blockedOn:null,target:t,priority:r};for(var e=0;e<Wr.length&&r!==0&&r<Wr[e].priority;e++);Wr.splice(e,0,t),e===0&&cg(t)}};function Vl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ps(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function id(){}function fp(t,r,e,n,o){if(o){if(typeof n=="function"){var i=n;n=function(){var g=Zo(l);i.call(g)}}var l=Fu(r,n,t,0,null,!1,!1,"",id);return t._reactRootContainer=l,t[zr]=l.current,En(t.nodeType===8?t.parentNode:t),be(),l}for(;o=t.lastChild;)t.removeChild(o);if(typeof n=="function"){var a=n;n=function(){var g=Zo(d);a.call(g)}}var d=Hl(t,0,!1,null,null,!1,!1,"",id);return t._reactRootContainer=d,t[zr]=d.current,En(t.nodeType===8?t.parentNode:t),be(function(){cs(r,d,e,n)}),d}function ms(t,r,e,n,o){var i=e._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var d=Zo(l);a.call(d)}}cs(r,l,t,o)}else l=fp(e,r,t,o,n);return Zo(l)}ag=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var e=an(r.pendingLanes);e!==0&&(ul(r,e|1),Vt(r,kt()),!(st&6)&&(Ge=kt()+500,te()))}break;case 13:be(function(){var n=Tr(t,1);if(n!==null){var o=Nt();cr(n,t,1,o)}}),Ul(t,1)}};cl=function(t){if(t.tag===13){var r=Tr(t,134217728);if(r!==null){var e=Nt();cr(r,t,134217728,e)}Ul(t,134217728)}};dg=function(t){if(t.tag===13){var r=Yr(t),e=Tr(t,r);if(e!==null){var n=Nt();cr(e,t,r,n)}Ul(t,r)}};gg=function(){return dt};ug=function(t,r){var e=dt;try{return dt=t,r()}finally{dt=e}};vi=function(t,r,e){switch(r){case"input":if(gi(t,e),r=e.name,e.type==="radio"&&r!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<e.length;r++){var n=e[r];if(n!==t&&n.form===t.form){var o=ss(n);if(!o)throw Error(_(90));$d(n),gi(n,o)}}}break;case"textarea":Ud(t,e);break;case"select":r=e.value,r!=null&&Be(t,!!e.multiple,r,!1)}};Jd=Nl;Zd=be;var vp={usingClientEntryPoint:!1,Events:[On,Ce,ss,Kd,Xd,Nl]},en={findFiberByHostInstance:ne,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yp={bundleType:en.bundleType,version:en.version,rendererPackageName:en.rendererPackageName,rendererConfig:en.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=rg(t),t===null?null:t.stateNode},findFiberByHostInstance:en.findFiberByHostInstance||mp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ao.isDisabled&&ao.supportsFiber)try{rs=ao.inject(yp),hr=ao}catch{}}Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vp;Jt.createPortal=function(t,r){var e=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vl(r))throw Error(_(200));return pp(t,r,null,e)};Jt.createRoot=function(t,r){if(!Vl(t))throw Error(_(299));var e=!1,n="",o=Bu;return r!=null&&(r.unstable_strictMode===!0&&(e=!0),r.identifierPrefix!==void 0&&(n=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),r=Hl(t,1,!1,null,null,e,!1,n,o),t[zr]=r.current,En(t.nodeType===8?t.parentNode:t),new Gl(r)};Jt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(_(188)):(t=Object.keys(t).join(","),Error(_(268,t)));return t=rg(r),t=t===null?null:t.stateNode,t};Jt.flushSync=function(t){return be(t)};Jt.hydrate=function(t,r,e){if(!ps(r))throw Error(_(200));return ms(null,t,r,!0,e)};Jt.hydrateRoot=function(t,r,e){if(!Vl(t))throw Error(_(405));var n=e!=null&&e.hydratedSources||null,o=!1,i="",l=Bu;if(e!=null&&(e.unstable_strictMode===!0&&(o=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(l=e.onRecoverableError)),r=Fu(r,null,t,1,e??null,o,!1,i,l),t[zr]=r.current,En(t),n)for(t=0;t<n.length;t++)e=n[t],o=e._getVersion,o=o(e._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[e,o]:r.mutableSourceEagerHydrationData.push(e,o);return new bs(r)};Jt.render=function(t,r,e){if(!ps(r))throw Error(_(200));return ms(null,t,r,!1,e)};Jt.unmountComponentAtNode=function(t){if(!ps(t))throw Error(_(40));return t._reactRootContainer?(be(function(){ms(null,null,t,!1,function(){t._reactRootContainer=null,t[zr]=null})}),!0):!1};Jt.unstable_batchedUpdates=Nl;Jt.unstable_renderSubtreeIntoContainer=function(t,r,e,n){if(!ps(e))throw Error(_(200));if(t==null||t._reactInternals===void 0)throw Error(_(38));return ms(t,r,e,!1,n)};Jt.version="18.3.1-next-f1338f8080-20240426";function Ru(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ru)}catch(t){console.error(t)}}Ru(),Rd.exports=Jt;var hp=Rd.exports,_u,ld=hp;_u=ld.createRoot,ld.hydrateRoot;/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Lu=(...t)=>t.filter((r,e,n)=>!!r&&r.trim()!==""&&n.indexOf(r)===e).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=k.forwardRef(({color:t="currentColor",size:r=24,strokeWidth:e=2,absoluteStrokeWidth:n,className:o="",children:i,iconNode:l,...a},d)=>k.createElement("svg",{ref:d,...wp,width:r,height:r,stroke:t,strokeWidth:n?Number(e)*24/Number(r):e,className:Lu("lucide",o),...a},[...l.map(([g,m])=>k.createElement(g,m)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=(t,r)=>{const e=k.forwardRef(({className:n,...o},i)=>k.createElement(kp,{ref:i,iconNode:r,className:Lu(`lucide-${xp(t)}`,n),...o}));return e.displayName=`${t}`,e};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=nt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=nt("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=nt("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=nt("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=nt("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=nt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=nt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=nt("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=nt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=nt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=nt("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=nt("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=nt("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=nt("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=nt("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=nt("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=nt("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=nt("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=nt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=nt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=nt("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=nt("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=nt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=nt("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=nt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=nt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=nt("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=nt("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=nt("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=nt("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=nt("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=nt("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=nt("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=nt("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=nt("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=nt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=nt("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),Xl="anvil_token",Jl=()=>localStorage.getItem(Xl),Np=t=>localStorage.setItem(Xl,t),Xi=()=>localStorage.removeItem(Xl),P=async(t,r,e)=>{const n={};e!==void 0&&(n["Content-Type"]="application/json");const o=Jl();o&&(n.Authorization=`Bearer ${o}`);const i=await fetch(`/api${r}`,{method:t,headers:n,body:e!==void 0?JSON.stringify(e):void 0});if(i.status===401)throw Xi(),window.dispatchEvent(new Event("anvil-unauthorized")),new Error("Not authenticated");if(i.status===204)return null;if(!i.ok){const l=await i.text();let a=l;try{a=JSON.parse(l).detail||l}catch{}throw new Error(a||`HTTP ${i.status}`)}return i.json()},J={register:t=>P("POST","/auth/register",t),login:t=>P("POST","/auth/login",t),me:()=>P("GET","/auth/me"),getGcalStatus:()=>P("GET","/auth/google/status"),connectGoogle:()=>{window.location.href=`/api/auth/google?token=${encodeURIComponent(Jl()||"")}`},disconnectGoogle:()=>P("DELETE","/auth/google"),getPillars:()=>P("GET","/pillars"),getFocus:()=>P("GET","/focus"),createFocus:t=>P("POST","/focus",t),deleteFocus:t=>P("DELETE",`/focus/${t}`),getSetting:t=>P("GET",`/settings/${t}`),setSetting:(t,r)=>P("PUT",`/settings/${t}`,{value:r}),getTasks:()=>P("GET","/tasks"),createTask:t=>P("POST","/tasks",t),updateTask:(t,r)=>P("PUT",`/tasks/${t}`,r),deleteTask:t=>P("DELETE",`/tasks/${t}`),restoreTask:t=>P("POST",`/tasks/${t}/restore`),scheduleTask:t=>P("PUT",`/tasks/${t}/schedule`),getGoals:t=>P("GET",`/goals${t?`?pillar=${encodeURIComponent(t)}`:""}`),createGoal:t=>P("POST","/goals",t),updateGoal:(t,r)=>P("PUT",`/goals/${t}`,r),deleteGoal:t=>P("DELETE",`/goals/${t}`),restoreGoal:t=>P("POST",`/goals/${t}/restore`),getHabits:()=>P("GET","/habits"),createHabit:t=>P("POST","/habits",t),updateHabit:(t,r)=>P("PUT",`/habits/${t}`,r),deleteHabit:t=>P("DELETE",`/habits/${t}`),restoreHabit:t=>P("POST",`/habits/${t}/restore`),toggleHabitLog:(t,r)=>P("POST",`/habits/${t}/log/${r}`),setHabitLogNote:(t,r,e)=>P("PUT",`/habits/${t}/log/${r}/note`,{note:e}),setHabitLogCount:(t,r,e,n)=>P("PUT",`/habits/${t}/log/${r}/count`,{count:e,note:n}),clearHabitLog:(t,r)=>P("DELETE",`/habits/${t}/log/${r}`),getHabitsYearly:t=>P("GET",`/habits/yearly/${t}`),getJournalEntry:t=>P("GET",`/journal/${t}`),getJournalHistory:(t,r)=>P("GET",`/journal/history/${t}/${r}`),updateJournalMood:(t,r)=>P("PUT",`/journal/${t}`,{mood:r}),addJournalBullet:(t,r,e)=>P("POST",`/journal/${t}/bullets`,{section:r,text:e}),deleteJournalBullet:t=>P("DELETE",`/journal/bullets/${t}`),getSkills:()=>P("GET","/skills"),createSkill:t=>P("POST","/skills",t),deleteSkill:t=>P("DELETE",`/skills/${t}`),restoreSkill:t=>P("POST",`/skills/${t}/restore`),addSkillNote:(t,r,e)=>P("POST",`/skills/${t}/notes`,{stage:r,text:e}),deleteSkillNote:t=>P("DELETE",`/skill-notes/${t}`),toggleSkillNote:t=>P("PUT",`/skill-notes/${t}/toggle`),completeSkillStage:(t,r)=>P("POST",`/skills/${t}/complete-stage`,{stage:r}),getScriptures:()=>P("GET","/scriptures"),createScripture:t=>P("POST","/scriptures",t),deleteScripture:t=>P("DELETE",`/scriptures/${t}`),restoreScripture:t=>P("POST",`/scriptures/${t}/restore`),addChapter:(t,r)=>P("POST",`/scriptures/${t}/chapters`,r),updateChapter:(t,r)=>P("PUT",`/chapters/${t}`,r),deleteChapter:t=>P("DELETE",`/chapters/${t}`),restoreChapter:t=>P("POST",`/chapters/${t}/restore`),addInsight:(t,r)=>P("POST",`/chapters/${t}/insights`,{text:r}),deleteInsight:t=>P("DELETE",`/insights/${t}`),getTopics:()=>P("GET","/revision/topics"),createTopic:t=>P("POST","/revision/topics",t),deleteTopic:t=>P("DELETE",`/revision/topics/${t}`),restoreTopic:t=>P("POST",`/revision/topics/${t}/restore`),getDueToday:()=>P("GET","/revision/due-today"),getCalendar:(t,r)=>P("GET",`/revision/calendar/${t}/${r}`),toggleReviewDone:t=>P("PUT",`/revision/reviews/${t}/done`),getAffirmations:()=>P("GET","/affirmations"),createAffirmation:t=>P("POST","/affirmations",t),updateAffirmation:(t,r)=>P("PUT",`/affirmations/${t}`,r),deleteAffirmation:t=>P("DELETE",`/affirmations/${t}`),restoreAffirmation:t=>P("POST",`/affirmations/${t}/restore`)},Pp=7e3;function vs(t,r,e){const[n,o]=k.useState([]),i=k.useRef({}),l=k.useCallback(async(g,m="Item")=>{await t(g),e();const v=`${g}-${Date.now()}`;o(p=>[...p,{id:v,itemId:g,label:m}]),i.current[v]=setTimeout(()=>{o(p=>p.filter(j=>j.id!==v)),delete i.current[v]},Pp)},[t,e]),a=k.useCallback(async g=>{const m=n.find(v=>v.id===g);m&&(clearTimeout(i.current[g]),delete i.current[g],o(v=>v.filter(p=>p.id!==g)),await r(m.itemId),e())},[n,r,e]),d=k.useCallback(g=>{clearTimeout(i.current[g]),delete i.current[g],o(m=>m.filter(v=>v.id!==g))},[]);return{deleteItem:l,toasts:n,handleUndo:a,handleDismiss:d}}function ys({toasts:t,onUndo:r,onDismiss:e}){return s.jsx("div",{style:he.container,children:t.map(n=>s.jsx(Op,{toast:n,onUndo:r,onDismiss:e},n.id))})}function Op({toast:t,onUndo:r,onDismiss:e}){const[n,o]=k.useState(100);return k.useEffect(()=>{const i=Date.now(),l=7e3,a=setInterval(()=>{const d=Date.now()-i,g=Math.max(0,100-d/l*100);o(g),g===0&&clearInterval(a)},50);return()=>clearInterval(a)},[]),s.jsxs("div",{style:he.toast,children:[s.jsx("div",{style:{...he.bar,width:`${n}%`}}),s.jsxs("span",{style:he.msg,children:[t.label," deleted"]}),s.jsx("button",{style:he.undoBtn,onClick:()=>r(t.id),children:"Undo"}),s.jsx("button",{style:he.closeBtn,onClick:()=>e(t.id),children:"×"})]})}const he={container:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",gap:8,zIndex:999,pointerEvents:"none"},toast:{position:"relative",display:"flex",alignItems:"center",gap:12,background:"#26241F",color:"#fff",borderRadius:10,padding:"12px 16px",fontSize:13.5,fontFamily:"'Inter', system-ui, sans-serif",boxShadow:"0 4px 20px rgba(0,0,0,0.25)",minWidth:260,overflow:"hidden",pointerEvents:"all"},bar:{position:"absolute",bottom:0,left:0,height:3,background:"#4C9A6B",transition:"width 0.05s linear",borderRadius:"0 0 0 10px"},msg:{flex:1,fontWeight:500},undoBtn:{border:"1px solid rgba(255,255,255,0.3)",background:"none",color:"#4C9A6B",fontWeight:700,fontSize:13,padding:"4px 10px",borderRadius:6,cursor:"pointer",fontFamily:"inherit"},closeBtn:{border:"none",background:"none",color:"rgba(255,255,255,0.5)",cursor:"pointer",fontSize:18,lineHeight:1,padding:"0 2px"}},uo={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},dd=[{id:"Q1",symbol:"™",title:"Do Now",sub:"Important · Urgent",accent:"#C2536B"},{id:"Q2",symbol:"©",title:"Schedule",sub:"Important · Not Urgent",accent:"#3A7CA5"},{id:"Q3",symbol:"®",title:"Delegate",sub:"Not Important · Urgent",accent:"#C9A227"},{id:"Q4",symbol:"•",title:"Drop",sub:"Not Important · Not Urgent",accent:"#8A8780"}];function $p(){return new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Kolkata"})}function Hp(){const t=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"})),e=t.getMinutes()<30?30:0,n=e===0?t.getHours()+1:t.getHours();return`${String(n%24).padStart(2,"0")}:${String(e).padStart(2,"0")}`}function Up(t,r){const[e,n]=t.split(":").map(Number),o=e*60+n+r;return`${String(Math.floor(o/60)%24).padStart(2,"0")}:${String(o%60).padStart(2,"0")}`}function Gp(t){return t?new Date(t).toLocaleString("en-IN",{timeZone:"Asia/Kolkata",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0}):""}const Gs=()=>({title:"",pillar:"Financial",est:30,date:$p(),startTime:Hp()});function Vp(){const[t,r]=k.useState([]),[e,n]=k.useState(null),[o,i]=k.useState(Gs()),[l,a]=k.useState({connected:!1,configured:!1}),d=k.useCallback(()=>J.getTasks().then(r).catch(console.error),[]);k.useEffect(()=>{d(),J.getGcalStatus().then(a).catch(()=>{})},[d]);const{deleteItem:g,toasts:m,handleUndo:v,handleDismiss:p}=vs(J.deleteTask,J.restoreTask,d),j=u=>t.filter(y=>y.quadrant===u),w=u=>j(u).reduce((y,T)=>y+T.time_estimate_min,0),x=u=>u>=60?`${Math.floor(u/60)}h${u%60?` ${u%60}m`:""}`:`${u}m`,I=u=>{var T;return`${((T=dd.find(z=>z.id===u.quadrant))==null?void 0:T.symbol)??""} ${u.title}`},b=async u=>{if(!o.title.trim())return;const y=o.date&&o.startTime?`${o.date}T${o.startTime}:00`:null;await J.createTask({pillar:o.pillar,title:o.title,quadrant:u,time_estimate_min:Number(o.est)||30,start_datetime:y}),i(Gs()),n(null),d()},c=(u,y)=>g(u,y);return s.jsxs("div",{style:Z.page,children:[s.jsxs("div",{style:Z.head,children:[s.jsxs("div",{children:[s.jsx("div",{style:Z.eyebrow,children:"Anvil · Weekly Routing"}),s.jsx("h1",{style:Z.h1,children:"Weekly Routing"})]}),s.jsxs("div",{style:Z.headRight,children:[s.jsx("div",{style:Z.legend,children:Object.entries(uo).map(([u,y])=>s.jsxs("span",{style:Z.legendItem,children:[s.jsx("span",{style:{...Z.dot,background:y.dot}}),u]},u))}),l.configured&&(l.connected?s.jsxs("button",{style:Z.gcalBadgeOn,title:"Disconnect Google Calendar",onClick:()=>J.disconnectGoogle().then(()=>a({...l,connected:!1})),children:[s.jsx(go,{size:13})," Google Calendar connected"]}):s.jsxs("button",{style:Z.gcalBadgeOff,onClick:()=>J.connectGoogle(),children:[s.jsx(go,{size:13})," Connect Google Calendar"]}))]})]}),s.jsx("div",{style:Z.grid,children:dd.map(u=>s.jsxs("section",{style:{...Z.quad,borderTop:`3px solid ${u.accent}`},children:[s.jsxs("header",{style:Z.quadHead,children:[s.jsxs("div",{style:Z.quadTitleRow,children:[s.jsx("span",{style:{...Z.symbol,color:u.accent},children:u.symbol}),s.jsxs("div",{children:[s.jsx("div",{style:Z.quadTitle,children:u.title}),s.jsx("div",{style:Z.quadSub,children:u.sub})]})]}),s.jsx("span",{style:Z.quadTotal,children:x(w(u.id))})]}),s.jsxs("div",{style:Z.list,children:[j(u.id).map(y=>{const T=uo[y.pillar]||uo.Financial,z=!!y.gcal_event_id;return s.jsxs("div",{style:{...Z.card,background:T.soft},children:[s.jsx("span",{style:{...Z.cardBar,background:T.dot}}),s.jsxs("div",{style:Z.cardBody,children:[s.jsx("div",{style:Z.cardTitle,children:y.title}),y.start_datetime&&s.jsxs("div",{style:Z.eventTime,children:[s.jsx(go,{size:10}),Gp(y.start_datetime),z&&s.jsx("span",{style:Z.syncedDot,title:"Synced to Google Calendar"})]}),s.jsxs("div",{style:Z.cardMeta,children:[s.jsxs("span",{style:Z.metaPill,children:[s.jsx("span",{style:{...Z.dot,background:T.dot,width:7,height:7}}),y.pillar]}),s.jsxs("span",{style:Z.metaPill,children:[s.jsx(Cp,{size:11})," ",x(y.time_estimate_min)]})]})]}),s.jsxs("div",{style:Z.cardActions,children:[z&&s.jsx("span",{title:`On calendar as "${I(y)}"`,style:Z.calDoneIcon,children:s.jsx(At,{size:14})}),s.jsx("button",{onClick:()=>c(y.id,y.title),style:Z.delBtn,children:s.jsx(ft,{size:13})})]})]},y.id)}),e===u.id?s.jsxs("div",{style:Z.addBox,children:[s.jsx("input",{autoFocus:!0,placeholder:"Task title",value:o.title,onChange:y=>i({...o,title:y.target.value}),onKeyDown:y=>y.key==="Enter"&&b(u.id),style:Z.input}),s.jsxs("div",{style:Z.dateTimeRow,children:[s.jsxs("div",{style:Z.dateTimeGroup,children:[s.jsx("label",{style:Z.dtLabel,children:"Date"}),s.jsx("input",{type:"date",value:o.date,onChange:y=>i({...o,date:y.target.value}),style:Z.dtInput})]}),s.jsxs("div",{style:Z.dateTimeGroup,children:[s.jsx("label",{style:Z.dtLabel,children:"Start"}),s.jsx("input",{type:"time",value:o.startTime,onChange:y=>i({...o,startTime:y.target.value}),style:Z.dtInput})]}),s.jsxs("div",{style:Z.dateTimeGroup,children:[s.jsx("label",{style:Z.dtLabel,children:"End"}),s.jsx("div",{style:Z.dtEndValue,children:Up(o.startTime,Number(o.est)||30)})]})]}),s.jsxs("div",{style:Z.addRow,children:[s.jsx("select",{value:o.pillar,onChange:y=>i({...o,pillar:y.target.value}),style:Z.select,children:Object.keys(uo).map(y=>s.jsx("option",{children:y},y))}),s.jsx("input",{type:"number",value:o.est,onChange:y=>i({...o,est:y.target.value}),style:{...Z.input,width:60}}),s.jsx("span",{style:Z.minLabel,children:"min"}),l.connected&&s.jsx("span",{style:Z.gcalHint,title:"Will sync to Google Calendar",children:s.jsx(go,{size:12})}),s.jsx("button",{onClick:()=>b(u.id),style:Z.saveBtn,children:s.jsx(At,{size:14})}),s.jsx("button",{onClick:()=>{n(null),i(Gs())},style:Z.cancelBtn,children:s.jsx(ft,{size:14})})]})]}):s.jsxs("button",{onClick:()=>n(u.id),style:Z.addTrigger,children:[s.jsx(Jr,{size:13})," Add task"]})]})]},u.id))}),s.jsx(ys,{toasts:m,onUndo:v,onDismiss:p})]})}const Z={page:{fontFamily:"'Inter', system-ui, sans-serif",background:"#F7F6F3",minHeight:"100%",padding:"28px 26px",color:"#26241F",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:16,marginBottom:22},headRight:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:10},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"#9A968C",fontWeight:600,marginBottom:4},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces', Georgia, serif"},legend:{display:"flex",gap:14,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"#6B675E",fontWeight:500},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},gcalBadgeOn:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"#4C9A6B",background:"rgba(76,154,107,0.10)",border:"1px solid rgba(76,154,107,0.3)",borderRadius:20,padding:"5px 12px",cursor:"pointer"},gcalBadgeOff:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"#6B675E",background:"#fff",border:"1px solid #DCDAD3",borderRadius:20,padding:"5px 12px",cursor:"pointer"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16},quad:{background:"#fff",borderRadius:12,padding:"16px 16px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.06)"},quadHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14},quadTitleRow:{display:"flex",gap:10,alignItems:"center"},symbol:{fontSize:20,lineHeight:1},quadTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em"},quadSub:{fontSize:11,color:"#9A968C",marginTop:1,letterSpacing:"0.02em"},quadTotal:{fontSize:12,fontWeight:600,color:"#6B675E",background:"#F2F1EC",padding:"3px 9px",borderRadius:20},list:{display:"flex",flexDirection:"column",gap:8},card:{display:"flex",alignItems:"stretch",gap:10,borderRadius:9,padding:"10px 10px 10px 0",overflow:"hidden"},cardBar:{width:3,borderRadius:3,flexShrink:0},cardBody:{flex:1,minWidth:0},cardTitle:{fontSize:13.5,fontWeight:500,lineHeight:1.35,marginBottom:4},eventTime:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#3A7CA5",fontWeight:500,marginBottom:5},syncedDot:{width:6,height:6,borderRadius:"50%",background:"#4C9A6B",display:"inline-block",marginLeft:2},cardMeta:{display:"flex",gap:8,flexWrap:"wrap"},metaPill:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#6B675E",fontWeight:500},cardActions:{display:"flex",flexDirection:"column",gap:4,alignSelf:"center",flexShrink:0},calDoneIcon:{width:30,height:30,borderRadius:8,background:"#4C9A6B",color:"#fff",display:"grid",placeItems:"center"},delBtn:{width:30,height:30,borderRadius:8,border:"none",background:"none",color:"#C3BFB5",cursor:"pointer",display:"grid",placeItems:"center"},addTrigger:{display:"flex",alignItems:"center",gap:5,fontSize:12.5,color:"#9A968C",background:"none",border:"1px dashed #D9D6CE",borderRadius:8,padding:"8px 10px",cursor:"pointer",fontWeight:500,marginTop:2},addBox:{border:"1px solid #E4E2DA",borderRadius:9,padding:10,display:"flex",flexDirection:"column",gap:8},dateTimeRow:{display:"flex",gap:8,alignItems:"flex-end"},dateTimeGroup:{display:"flex",flexDirection:"column",gap:3,flex:1},dtLabel:{fontSize:10,fontWeight:600,color:"#9A968C",letterSpacing:"0.08em",textTransform:"uppercase"},dtInput:{border:"1px solid #E4E2DA",borderRadius:6,padding:"6px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},dtEndValue:{border:"1px solid #E4E2DA",borderRadius:6,padding:"6px 8px",fontSize:12.5,color:"#6B675E",background:"#F7F6F3"},addRow:{display:"flex",alignItems:"center",gap:6},input:{border:"1px solid #E4E2DA",borderRadius:6,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",flex:1,minWidth:0},select:{border:"1px solid #E4E2DA",borderRadius:6,padding:"7px 8px",fontSize:12.5,fontFamily:"inherit",flex:1},minLabel:{fontSize:11,color:"#9A968C"},gcalHint:{color:"#3A7CA5",display:"grid",placeItems:"center"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},cancelBtn:{border:"none",background:"#F2F1EC",color:"#6B675E",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"}},lr={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},nn=Object.keys(lr),Vs=["Yearly","Quarterly","Monthly","Weekly"],Lr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],gd=[{label:"Q1 · Jan–Mar",startMonth:0},{label:"Q2 · Apr–Jun",startMonth:3},{label:"Q3 · Jul–Sep",startMonth:6},{label:"Q4 · Oct–Dec",startMonth:9}],ae=new Date().getFullYear(),Ys=t=>Vs[Math.min(Vs.indexOf(t)+1,Vs.length-1)],co=t=>{if(!t||!t.start_date)return Array.from({length:12},(i,l)=>l);const r=new Date(t.start_date+"T00:00:00"),e=new Date(t.end_date+"T00:00:00"),n=r.getFullYear()<ae?0:r.getMonth(),o=e.getFullYear()>ae?11:e.getMonth();return Array.from({length:o-n+1},(i,l)=>n+l)},Yp=(t,r,e)=>{const n=(e-1)*7+1,o=Math.min(n+6,new Date(t,r+1,0).getDate()),i=String(r+1).padStart(2,"0");return{start_date:`${t}-${i}-${String(n).padStart(2,"0")}`,end_date:`${t}-${i}-${String(o).padStart(2,"0")}`}},ud=(t,r,e=1)=>{const n=ae;switch(t){case"Yearly":return{start_date:`${n}-01-01`,end_date:`${n}-12-31`};case"Quarterly":{const o=Math.floor(r/3)*3,i=o+1,l=o+3,a=new Date(n,l,0).getDate();return{start_date:`${n}-${String(i).padStart(2,"0")}-01`,end_date:`${n}-${String(l).padStart(2,"0")}-${a}`}}case"Monthly":{const o=new Date(n,r+1,0).getDate();return{start_date:`${n}-${String(r+1).padStart(2,"0")}-01`,end_date:`${n}-${String(r+1).padStart(2,"0")}-${o}`}}case"Weekly":return Yp(n,r,e);default:return{start_date:`${n}-01-01`,end_date:`${n}-12-31`}}},cd=(t,r=!1)=>{if(!t)return 0;const e=new Date(t+"T00:00:00");if(e.getFullYear()>ae)return 12;if(e.getFullYear()<ae)return 0;const n=new Date(ae,e.getMonth()+1,0).getDate(),o=e.getDate()-(r?0:1);return e.getMonth()+o/n},bd=t=>{if(!t.start_date)return"";const r=new Date(t.start_date+"T00:00:00"),e=r.getMonth();switch(t.horizon){case"Yearly":return`${r.getFullYear()}`;case"Quarterly":return`Q${Math.floor(e/3)+1} ${r.getFullYear()}`;case"Monthly":return`${Lr[e]} ${r.getFullYear()}`;case"Weekly":return`${Lr[e]} W${Math.ceil(r.getDate()/7)}`;default:return""}};function Qp(){const[t,r]=k.useState([]),[e,n]=k.useState("Financial"),[o,i]=k.useState(["Academic"]),[l,a]=k.useState({}),[d,g]=k.useState(null),[m,v]=k.useState(""),[p,j]=k.useState(0),[w,x]=k.useState(1),[I,b]=k.useState(null),c=k.useCallback(()=>{J.getGoals().then(r).catch(console.error)},[]);k.useEffect(()=>{c()},[c]);const{deleteItem:u,toasts:y,handleUndo:T,handleDismiss:z}=vs(J.deleteGoal,J.restoreGoal,c),F=lr[e],B=t.filter(h=>h.pillar===e),A=B.filter(h=>!h.parent_goal_id),R=h=>B.filter(S=>S.parent_goal_id===h),C=h=>a(S=>({...S,[h]:!S[h]})),N=h=>i(S=>S.includes(h)?S.filter(M=>M!==h):[...S,h]),V=(h,S=null)=>{g(h),v(""),x(1);const M=h==="ROOT"?"Yearly":Ys(S==null?void 0:S.horizon),W=h==="ROOT"?[0]:co(S);j(M==="Quarterly"?Math.floor(W[0]/3)*3:W[0]??0)},tt=async(h,S)=>{if(!m.trim())return;const M=h==="ROOT"?"Yearly":Ys(S),{start_date:W,end_date:U}=ud(M,p,w);await J.createGoal({pillar:e,title:m.trim(),horizon:M,parent_goal_id:h==="ROOT"?null:h,start_date:W,end_date:U}),h!=="ROOT"&&a(at=>({...at,[h]:!0})),g(null),v(""),c()},it=h=>{const S=h.start_date?new Date(h.start_date+"T00:00:00"):new Date,M=S.getMonth(),W=Math.min(Math.max(Math.ceil(S.getDate()/7),1),4);b({id:h.id,title:h.title,pillar:h.pillar,horizon:h.horizon,parentGoal:t.find(U=>U.id===h.parent_goal_id)||null,month:h.horizon==="Quarterly"?Math.floor(M/3)*3:M,week:W})},H=async()=>{if(!I||!I.title.trim())return;let h=I.month;I.horizon==="Weekly"&&(h=co(I.parentGoal)[0]);const{start_date:S,end_date:M}=ud(I.horizon,h,I.week);await J.updateGoal(I.id,{title:I.title.trim(),pillar:I.pillar,start_date:S,end_date:M}),b(null),c()},L=({parentId:h,parentGoal:S,depth:M})=>{const W=(S==null?void 0:S.horizon)??null,U=h==="ROOT"?"Yearly":Ys(W),at=h==="ROOT"?Array.from({length:12},(X,Bt)=>Bt):co(S),gt=gd.filter(X=>at.includes(X.startMonth));return s.jsxs("div",{style:{...Q.addBox,marginLeft:M*24},children:[s.jsx("input",{autoFocus:!0,placeholder:`New ${U.toLowerCase()} goal…`,value:m,onChange:X=>v(X.target.value),onKeyDown:X=>{X.key==="Enter"&&tt(h,W),X.key==="Escape"&&g(null)},style:Q.input}),U==="Quarterly"&&s.jsx("select",{value:p,onChange:X=>j(Number(X.target.value)),style:Q.monthSelect,children:gt.map(X=>s.jsx("option",{value:X.startMonth,children:X.label},X.startMonth))}),U==="Monthly"&&s.jsx("select",{value:p,onChange:X=>j(Number(X.target.value)),style:Q.monthSelect,children:at.map(X=>s.jsx("option",{value:X,children:Lr[X]},X))}),U==="Weekly"&&s.jsxs(s.Fragment,{children:[s.jsx("span",{style:Q.inheritTag,children:Lr[at[0]]}),s.jsx("select",{value:w,onChange:X=>x(Number(X.target.value)),style:Q.monthSelect,children:[1,2,3,4].map(X=>s.jsxs("option",{value:X,children:["Week ",X]},X))})]}),s.jsx("button",{onClick:()=>tt(h,W),style:Q.saveBtn,children:s.jsx(At,{size:14})}),s.jsx("button",{onClick:()=>g(null),style:Q.cancelBtn,children:s.jsx(ft,{size:14})})]})},f=({goal:h,depth:S})=>{var gt,X;const M=R(h.id),W=l[h.id],U=h.horizon!=="Weekly";if((I==null?void 0:I.id)===h.id){const Bt=co(I.parentGoal),Gn=gd.filter(lt=>Bt.includes(lt.startMonth));return s.jsxs("div",{style:{...Q.editBox,marginLeft:S*24},children:[s.jsx("input",{autoFocus:!0,value:I.title,onChange:lt=>b({...I,title:lt.target.value}),onKeyDown:lt=>lt.key==="Enter"&&H(),style:{...Q.input,flex:1}}),s.jsx("select",{value:I.pillar,onChange:lt=>b({...I,pillar:lt.target.value}),style:Q.monthSelect,children:nn.map(lt=>s.jsx("option",{children:lt},lt))}),I.horizon==="Quarterly"&&s.jsx("select",{value:I.month,onChange:lt=>b({...I,month:Number(lt.target.value)}),style:Q.monthSelect,children:Gn.map(lt=>s.jsx("option",{value:lt.startMonth,children:lt.label},lt.startMonth))}),I.horizon==="Monthly"&&s.jsx("select",{value:I.month,onChange:lt=>b({...I,month:Number(lt.target.value)}),style:Q.monthSelect,children:Bt.map(lt=>s.jsx("option",{value:lt,children:Lr[lt]},lt))}),I.horizon==="Weekly"&&s.jsxs(s.Fragment,{children:[s.jsx("span",{style:Q.inheritTag,children:Lr[Bt[0]]}),s.jsx("select",{value:I.week,onChange:lt=>b({...I,week:Number(lt.target.value)}),style:Q.monthSelect,children:[1,2,3,4].map(lt=>s.jsxs("option",{value:lt,children:["Week ",lt]},lt))})]}),s.jsx("button",{onClick:H,style:Q.saveBtn,children:s.jsx(At,{size:14})}),s.jsx("button",{onClick:()=>b(null),style:Q.cancelBtn,children:s.jsx(ft,{size:14})})]})}return s.jsxs("div",{children:[s.jsxs("div",{style:{...Q.row,marginLeft:S*24,background:S===0?F.soft:"transparent"},children:[M.length>0?s.jsx("button",{onClick:()=>C(h.id),style:Q.caret,children:W?s.jsx(Yl,{size:15}):s.jsx(ve,{size:15})}):s.jsx("span",{style:{...Q.caret,opacity:.25},children:s.jsx(Kl,{size:12})}),s.jsx("span",{style:{...Q.horizonTag,color:((gt=lr[h.pillar])==null?void 0:gt.dot)||F.dot,borderColor:((X=lr[h.pillar])==null?void 0:X.dot)||F.dot},children:h.horizon}),s.jsx("span",{style:Q.title,children:h.title}),s.jsx("span",{style:Q.periodTag,children:bd(h)}),s.jsx("button",{onClick:()=>it(h),style:Q.rowAdd,title:"Edit",children:s.jsx(Un,{size:12})}),U&&s.jsx("button",{onClick:()=>{a(Bt=>({...Bt,[h.id]:!0})),V(h.id,h)},style:Q.rowAdd,title:"Add sub-goal",children:s.jsx(Jr,{size:13})}),s.jsx("button",{onClick:()=>u(h.id,h.title),style:{...Q.rowAdd,color:"#C3BFB5"},title:"Delete",children:s.jsx(ft,{size:13})})]}),W&&M.map(Bt=>s.jsx(f,{goal:Bt,depth:S+1},Bt.id)),W&&d===h.id&&s.jsx(L,{parentId:h.id,parentGoal:h,depth:S+1})]})},D=t.filter(h=>h.horizon==="Weekly"&&o.includes(h.pillar)).sort((h,S)=>h.pillar.localeCompare(S.pillar)||h.start_date.localeCompare(S.start_date));return s.jsxs("div",{style:Q.page,children:[s.jsxs("div",{style:Q.head,children:[s.jsx("div",{style:Q.eyebrow,children:"Anvil · Goals"}),s.jsxs("h1",{style:Q.h1,children:[e," Goals"]})]}),s.jsx("div",{style:Q.pillarPicker,children:nn.map(h=>{const S=h===e;return s.jsxs("button",{onClick:()=>{n(h),g(null),b(null)},style:{...Q.pillarChip,...S?{background:lr[h].dot,color:"#fff",borderColor:lr[h].dot}:{}},children:[s.jsx("span",{style:{...Q.dot,background:S?"#fff":lr[h].dot}}),h]},h)})}),s.jsxs("div",{style:Q.list,children:[A.map(h=>s.jsx(f,{goal:h,depth:0},h.id)),d==="ROOT"&&s.jsx(L,{parentId:"ROOT",parentGoal:null,depth:0}),d!=="ROOT"&&s.jsxs("button",{onClick:()=>V("ROOT",null),style:Q.rootAdd,children:[s.jsx(Jr,{size:14})," Add top-level goal"]})]}),s.jsxs("div",{style:Q.ganttWrap,children:[s.jsxs("div",{style:Q.ganttTop,children:[s.jsxs("div",{style:Q.ganttTitle,children:[ae," · Weekly Timeline"]}),s.jsxs("div",{style:Q.ganttMultiSelect,children:[(()=>{const h=nn.every(S=>o.includes(S));return s.jsx("button",{onClick:()=>i(h?[]:[...nn]),style:{...Q.msChip,...h?{background:"#26241F",color:"#fff",borderColor:"#26241F"}:{}},children:"All"})})(),nn.map(h=>{const S=o.includes(h);return s.jsxs("button",{onClick:()=>N(h),style:{...Q.msChip,...S?{background:lr[h].dot,color:"#fff",borderColor:lr[h].dot}:{}},children:[s.jsx("span",{style:{...Q.dot,width:7,height:7,background:S?"#fff":lr[h].dot}}),h]},h)})]})]}),D.length===0?s.jsx("div",{style:Q.ganttEmpty,children:"Select pillars above to see their weekly goals on the timeline."}):s.jsx("div",{style:Q.ganttScroll,children:s.jsxs("div",{style:Q.ganttInner,children:[s.jsxs("div",{style:Q.ganttHeader,children:[s.jsx("div",{style:Q.ganttLabelCol}),s.jsx("div",{style:Q.ganttGrid,children:Lr.map(h=>s.jsx("div",{style:Q.ganttMonth,children:h},h))})]}),D.map(h=>{const S=lr[h.pillar].dot,M=cd(h.start_date,!1),W=cd(h.end_date,!0),U=M/12*100,at=Math.max((W-M)/12*100,1.5);return s.jsxs("div",{style:Q.ganttRow,children:[s.jsxs("div",{style:{...Q.ganttLabelCol,paddingLeft:8},children:[s.jsx("span",{style:{...Q.ganttRowDot,background:S}}),s.jsx("span",{style:Q.ganttRowLabel,children:h.title})]}),s.jsxs("div",{style:Q.ganttGrid,children:[Lr.map((gt,X)=>s.jsx("div",{style:Q.ganttCell},X)),s.jsx("div",{style:{...Q.ganttBar,left:`${U}%`,width:`${at}%`,background:S},title:`${h.pillar} · ${bd(h)}`})]})]},h.id)})]})})]}),s.jsx(ys,{toasts:y,onUndo:T,onDismiss:z})]})}const Q={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"#F7F6F3",minHeight:"100%",padding:"28px 26px",color:"#26241F",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"#9A968C",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},pillarPicker:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},pillarChip:{display:"flex",alignItems:"center",gap:7,border:"1px solid #E0DDD5",background:"#fff",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"#4A463E",cursor:"pointer",fontFamily:"inherit"},list:{background:"#fff",borderRadius:12,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"hidden"},row:{display:"flex",alignItems:"center",gap:9,padding:"9px 10px",borderRadius:8,flexWrap:"nowrap"},caret:{border:"none",background:"none",cursor:"pointer",color:"#6B675E",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},horizonTag:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",border:"1px solid",borderRadius:5,padding:"2px 6px",flexShrink:0},title:{fontSize:14,fontWeight:500,lineHeight:1.3,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},periodTag:{fontSize:11,fontWeight:600,color:"#6B675E",background:"#F2F1EC",padding:"3px 8px",borderRadius:12,flexShrink:0},rowAdd:{border:"none",background:"none",color:"#C3BFB5",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,flexShrink:0},rootAdd:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"#6B675E",background:"none",border:"1px dashed #D9D6CE",borderRadius:8,padding:"9px 12px",cursor:"pointer",fontWeight:600,fontFamily:"inherit",marginTop:6,width:"100%",justifyContent:"center"},addBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 0 6px 28px",flexWrap:"wrap"},editBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 10px",flexWrap:"wrap",background:"#F7F6F3",borderRadius:8,margin:"4px 0"},input:{border:"1px solid #D9D6CE",borderRadius:7,padding:"8px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",flex:1,minWidth:120},monthSelect:{border:"1px solid #D9D6CE",borderRadius:7,padding:"8px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},inheritTag:{fontSize:11.5,fontWeight:600,color:"#6B675E",background:"#F2F1EC",padding:"6px 9px",borderRadius:7,flexShrink:0},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},cancelBtn:{border:"none",background:"#F2F1EC",color:"#6B675E",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},ganttWrap:{background:"#fff",borderRadius:12,padding:"16px 14px",marginTop:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},ganttTop:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10,marginBottom:14},ganttTitle:{fontSize:13,fontWeight:700,color:"#4A463E",fontFamily:"'Fraunces',Georgia,serif"},ganttMultiSelect:{display:"flex",gap:6,flexWrap:"wrap"},msChip:{display:"flex",alignItems:"center",gap:5,border:"1px solid #E0DDD5",background:"#fff",padding:"5px 10px",borderRadius:16,fontSize:11.5,fontWeight:600,color:"#4A463E",cursor:"pointer",fontFamily:"inherit"},ganttEmpty:{fontSize:13,color:"#9A968C",padding:"24px 12px",textAlign:"center"},ganttScroll:{overflowX:"auto"},ganttInner:{minWidth:500},ganttHeader:{display:"flex",marginBottom:6},ganttLabelCol:{width:160,flexShrink:0,display:"flex",alignItems:"center",gap:7,minWidth:0},ganttGrid:{position:"relative",flex:1,display:"grid",gridTemplateColumns:"repeat(12,1fr)"},ganttMonth:{fontSize:10,fontWeight:600,color:"#9A968C",textAlign:"center",textTransform:"uppercase",letterSpacing:"0.04em"},ganttRow:{display:"flex",alignItems:"center",height:30},ganttRowDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},ganttRowLabel:{fontSize:12,fontWeight:500,color:"#3A372F",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},ganttCell:{borderLeft:"1px solid #F0EEE8",height:30},ganttBar:{position:"absolute",top:7,height:16,borderRadius:5,boxShadow:"0 1px 2px rgba(0,0,0,0.12)"}},pe={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.12)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.12)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.12)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.12)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.12)"}},Uu=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Kp=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Gu=t=>t.toISOString().slice(0,10),Xp=()=>Gu(new Date),Jp=(t=0)=>{const r=new Date,e=r.getDay(),n=e===0?-6:1-e,o=new Date(r);return o.setDate(r.getDate()+n+t*7),Array.from({length:7},(i,l)=>{const a=new Date(o);return a.setDate(o.getDate()+l),Gu(a)})},Zp=(t=0)=>{const r=new Date,e=new Date(r.getFullYear(),r.getMonth()+t,1),n=e.getFullYear(),o=e.getMonth(),i=new Date(n,o+1,0).getDate(),l=e.getDay(),a=l===0?6:l-1,d=Array.from({length:i},(m,v)=>`${n}-${String(o+1).padStart(2,"0")}-${String(v+1).padStart(2,"0")}`),g=e.toLocaleDateString("en-US",{month:"long",year:"numeric"});return{dates:d,startOffset:a,label:g,year:n,month:o}},pd=t=>new Date(t+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"}),Fe=Xp(),qp=new Date().getFullYear();function tm(){var S,M;const[t,r]=k.useState([]),[e,n]=k.useState("ALL"),[o,i]=k.useState(!1),[l,a]=k.useState(!1),[d,g]=k.useState(!1),[m,v]=k.useState(null),[p,j]=k.useState(null),[w,x]=k.useState({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week"}),[I,b]=k.useState(!1),[c,u]=k.useState([]),y=k.useCallback(()=>J.getHabits().then(r).catch(console.error),[]);k.useEffect(()=>{y()},[y]),k.useEffect(()=>{J.getSetting("habit_order").then(W=>{Array.isArray(W)&&u(W)}).catch(()=>{})},[]);const T=k.useMemo(()=>c.length?[...t].sort((W,U)=>{const at=c.indexOf(W.id),gt=c.indexOf(U.id);return at===-1&&gt===-1?0:at===-1?1:gt===-1?-1:at-gt}):t,[t,c]),z=async W=>{u(W),await J.setSetting("habit_order",W),b(!1)};k.useEffect(()=>{const W=()=>{const U=window.innerWidth<720;i(U),U||a(!1)};return W(),window.addEventListener("resize",W),()=>window.removeEventListener("resize",W)},[]);const{deleteItem:F,toasts:B,handleUndo:A,handleDismiss:R}=vs(J.deleteHabit,J.restoreHabit,y),C=W=>{n(W),o&&a(!1)},N=(W,U)=>{(W.type==="minimum"||W.type==="maximum")&&W.period==="day"?j({habit:W,date:U}):V(W.id,U)},V=async(W,U)=>{await J.toggleHabitLog(W,U),y()},tt=async(W,U,at,gt)=>{await J.setHabitLogCount(W,U,at,gt),j(null),y()},it=async(W,U)=>{await J.clearHabitLog(W,U),j(null),y()},H=async()=>{if(!w.name.trim())return;const W={name:w.name.trim(),pillar:w.pillar,target_per_week:Number(w.target_per_week)||7,type:w.type,target_count:w.type!=="regular"?Number(w.target_count)||1:null,period:w.type!=="regular"?w.period:null};await J.createHabit(W),x({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week"}),g(!1),y()},L=async(W,U)=>{e===W&&n("ALL"),F(W,U)},f=t.find(W=>W.id===e),D=W=>new Set(W.logs||[]),h={...E.sidebar,...o?E.sidebarOverlay:{},...o&&!l?E.sidebarHidden:{}};return s.jsxs("div",{style:E.shell,children:[o&&l&&s.jsx("div",{style:E.backdrop,onClick:()=>a(!1)}),s.jsxs("aside",{style:h,children:[s.jsxs("div",{style:E.sideTop,children:[s.jsx("div",{style:E.brand,children:"Anvil · Habits"}),o&&s.jsx("button",{onClick:()=>a(!1),style:E.closeBtn,children:s.jsx(ft,{size:18})})]}),s.jsxs("div",{style:{...E.sideItem,...e==="ALL"?E.sideItemOn:{},cursor:"default",padding:"2px 6px 2px 10px"},children:[s.jsxs("button",{onClick:()=>C("ALL"),style:{display:"flex",alignItems:"center",gap:9,flex:1,border:"none",background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:e==="ALL"?600:500,color:"#4A463E",padding:"7px 0"},children:[s.jsx(Pu,{size:15}),s.jsx("span",{style:E.sideLabel,children:"All Habits"}),s.jsx("span",{style:E.sideCount,children:t.length})]}),s.jsx("button",{onClick:W=>{W.stopPropagation(),b(!0)},style:E.tinyBtn,title:"Reorder habits",children:s.jsx(Un,{size:12})})]}),s.jsx("div",{style:E.sideDivider}),T.map(W=>{var gt;const U=e===W.id,at=((gt=pe[W.pillar])==null?void 0:gt.dot)||"#9A968C";return s.jsxs("button",{onClick:()=>C(W.id),style:{...E.sideItem,...U?E.sideItemOn:{}},children:[s.jsx("span",{style:{...E.sideDot,background:at}}),s.jsx("span",{style:E.sideLabel,children:W.name}),s.jsxs("span",{style:E.sideStreak,children:[s.jsx(fs,{size:11})," ",W.streak]})]},W.id)}),d?s.jsx(rm,{habit:w,onChange:x,onSave:H,onCancel:()=>g(!1)}):s.jsxs("button",{onClick:()=>g(!0),style:E.sideNewBtn,children:[s.jsx(Jr,{size:13})," New habit"]})]}),s.jsxs("main",{style:E.main,children:[o&&s.jsxs("button",{onClick:()=>a(!0),style:E.hamburger,children:[s.jsx(Ql,{size:18}),s.jsx("span",{style:E.hamburgerLabel,children:e==="ALL"?"All Habits":f==null?void 0:f.name})]}),e==="ALL"?s.jsx(om,{habits:T,dayAction:N,logSet:D,onDelete:L,onEdit:W=>v(W)}):s.jsx(sm,{habit:f,dayAction:N,logSet:D,onDelete:()=>L(f.id,f.name),onEdit:()=>v(f),setNote:(W,U)=>J.setHabitLogNote(f.id,W,U).then(y)}),e==="ALL"&&s.jsx(am,{year:qp})]}),I&&s.jsx(lm,{habits:T,onSave:z,onClose:()=>b(!1)}),m&&s.jsx(em,{habit:m,onSave:async W=>{await J.updateHabit(m.id,W),v(null),y()},onClose:()=>v(null)}),p&&s.jsx(nm,{habit:p.habit,date:p.date,initialCount:((S=p.habit.log_counts)==null?void 0:S[p.date])??0,initialNote:((M=p.habit.log_notes)==null?void 0:M[p.date])??"",onSave:(W,U)=>tt(p.habit.id,p.date,W,U),onClear:()=>it(p.habit.id,p.date),onClose:()=>j(null)}),s.jsx(ys,{toasts:B,onUndo:A,onDismiss:R})]})}function rm({habit:t,onChange:r,onSave:e,onCancel:n}){const o=t.type!=="regular";return s.jsxs("div",{style:E.addBox,children:[s.jsx("input",{autoFocus:!0,placeholder:"Habit name",value:t.name,onChange:i=>r(l=>({...l,name:i.target.value})),onKeyDown:i=>i.key==="Enter"&&e(),style:E.sideInput}),s.jsx("select",{value:t.pillar,onChange:i=>r(l=>({...l,pillar:i.target.value})),style:E.sideInput,children:Object.keys(pe).map(i=>s.jsx("option",{children:i},i))}),s.jsxs("select",{value:t.type,onChange:i=>r(l=>({...l,type:i.target.value})),style:E.sideInput,children:[s.jsx("option",{value:"regular",children:"Regular (yes/no)"}),s.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),s.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),o&&s.jsxs("div",{style:{display:"flex",gap:6},children:[s.jsx("input",{type:"number",min:1,placeholder:"N",value:t.target_count||"",onChange:i=>r(l=>({...l,target_count:i.target.value})),style:{...E.sideInput,width:60}}),s.jsx("select",{value:t.period,onChange:i=>r(l=>({...l,period:i.target.value})),style:E.sideInput,children:["day","week","month","year"].map(i=>s.jsx("option",{children:i},i))})]}),s.jsxs("div",{style:{display:"flex",gap:6},children:[s.jsx("button",{onClick:e,style:E.sideAddBtn,children:s.jsx(At,{size:13})}),s.jsx("button",{onClick:n,style:E.sideCancelBtn,children:s.jsx(ft,{size:13})})]})]})}function em({habit:t,onSave:r,onClose:e}){const[n,o]=k.useState(t.name),[i,l]=k.useState(t.type||"regular"),[a,d]=k.useState(t.target_count||""),[g,m]=k.useState(t.period||"week"),[v,p]=k.useState(t.reminder_time||""),j=()=>r({name:n.trim(),type:i,target_count:i!=="regular"?Number(a):null,period:i!=="regular"?g:null,reminder_time:v||null});return s.jsx("div",{style:E.modalOverlay,onClick:e,children:s.jsxs("div",{style:E.modal,onClick:w=>w.stopPropagation(),children:[s.jsxs("div",{style:E.modalHead,children:["Edit Habit",s.jsx("button",{onClick:e,style:E.closeBtn,children:s.jsx(ft,{size:16})})]}),s.jsx("label",{style:E.modalLabel,children:"Name"}),s.jsx("input",{value:n,onChange:w=>o(w.target.value),style:E.sideInput}),s.jsx("label",{style:E.modalLabel,children:"Type"}),s.jsxs("select",{value:i,onChange:w=>l(w.target.value),style:E.sideInput,children:[s.jsx("option",{value:"regular",children:"Regular (yes/no)"}),s.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),s.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),i!=="regular"&&s.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[s.jsx("input",{type:"number",min:1,value:a,onChange:w=>d(w.target.value),style:{...E.sideInput,width:70}}),s.jsx("select",{value:g,onChange:w=>m(w.target.value),style:E.sideInput,children:["day","week","month","year"].map(w=>s.jsx("option",{children:w},w))})]}),s.jsx("label",{style:E.modalLabel,children:"Reminder time"}),s.jsx("input",{type:"time",value:v,onChange:w=>p(w.target.value),style:E.sideInput}),s.jsx("button",{onClick:j,style:{...E.sideAddBtn,width:"100%",marginTop:10,height:36},children:"Save"})]})})}function nm({habit:t,date:r,initialCount:e,initialNote:n,onSave:o,onClear:i,onClose:l}){const[a,d]=k.useState(e??0),[g,m]=k.useState(n??""),v=t.target_count,p=t.type==="minimum"?a>=v:a>0&&a<=v,j=t.type==="maximum"&&a>v,w=p?"#4C9A6B":j?"#C2536B":"#C2773B",x=p?"✓ Goal met":j?"Over the limit":"Not met yet";return s.jsx("div",{style:E.modalOverlay,onClick:l,children:s.jsxs("div",{style:E.modal,onClick:I=>I.stopPropagation(),children:[s.jsxs("div",{style:E.modalHead,children:[t.name,s.jsx("button",{onClick:l,style:E.closeBtn,children:s.jsx(ft,{size:16})})]}),s.jsxs("div",{style:{fontSize:12,color:"#9A968C",marginBottom:2},children:[r," · ",t.type==="minimum"?`at least ${v}`:`no more than ${v}`," / ",t.period]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:20,margin:"14px 0 6px"},children:[s.jsx("button",{onClick:()=>d(I=>Math.max(0,I-1)),style:E.counterBtn,children:"−"}),s.jsx("span",{style:{fontSize:38,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:52,textAlign:"center",color:w},children:a}),s.jsx("button",{onClick:()=>d(I=>I+1),style:E.counterBtn,children:"+"})]}),s.jsx("div",{style:{textAlign:"center",fontSize:12.5,fontWeight:700,color:w,marginBottom:12},children:x}),s.jsx("textarea",{value:g,onChange:I=>m(I.target.value),placeholder:"Add a comment (optional)…",style:{...E.sideInput,minHeight:56,resize:"vertical"}}),s.jsxs("div",{style:{display:"flex",gap:8,marginTop:10},children:[s.jsxs("button",{onClick:()=>o(a,g),style:{...E.sideAddBtn,flex:1,justifyContent:"center",height:38},children:[s.jsx(At,{size:14})," Set"]}),s.jsxs("button",{onClick:i,style:{...E.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[s.jsx(ft,{size:14})," Delete"]})]})]})})}function om({habits:t,dayAction:r,logSet:e,onDelete:n,onEdit:o}){const[i,l]=k.useState(0),a=Jp(i),d=`${pd(a[0])} – ${pd(a[6])}${i===0?" · This week":""}`;return s.jsxs("div",{children:[s.jsxs("div",{style:E.mainHead,children:[s.jsx("div",{style:E.eyebrow,children:"Weekly view"}),s.jsx("h1",{style:E.h1,children:"All Habits"})]}),s.jsxs("div",{style:E.navBar,children:[s.jsx("button",{onClick:()=>l(g=>g-1),style:E.navBtn,children:s.jsx(Hn,{size:16})}),s.jsx("span",{style:E.navLabel,children:d}),s.jsx("button",{onClick:()=>l(g=>Math.min(0,g+1)),disabled:i>=0,style:{...E.navBtn,...i>=0?E.navBtnDisabled:{}},children:s.jsx(ve,{size:16})})]}),s.jsxs("div",{style:E.weekCard,children:[s.jsxs("div",{style:E.weekHeadRow,children:[s.jsx("div",{style:E.weekNameCol}),Uu.map((g,m)=>s.jsxs("div",{style:E.weekDayHead,children:[s.jsx("span",{style:E.weekDayName,children:g}),s.jsx("span",{style:{...E.weekDayNum,...a[m]===Fe?E.weekDayToday:{}},children:new Date(a[m]+"T00:00").getDate()})]},g)),s.jsx("div",{style:E.weekStreakCol,children:"Streak"})]}),t.map(g=>{var z,F;const m=((z=pe[g.pillar])==null?void 0:z.dot)||"#9A968C",v=((F=pe[g.pillar])==null?void 0:F.soft)||"rgba(0,0,0,0.05)",p=e(g),j=g.type==="minimum"&&["week","month","year"].includes(g.period),w=g.target_count||0,x=g.logs||[],I=B=>x.filter(A=>A.slice(0,7)===B).length,b=B=>x.filter(A=>A.slice(0,4)===B).length,c=a.filter(B=>p.has(B)).length,u=B=>j?g.period==="week"?c>=w:g.period==="month"?I(B.slice(0,7))>=w:g.period==="year"?b(B.slice(0,4))>=w:!1:!1,y=j&&a.some(u),T=g.period==="week"?c:g.period==="month"?I(a[0].slice(0,7)):g.period==="year"?b(a[0].slice(0,4)):0;return s.jsxs("div",{style:E.weekRow,children:[s.jsxs("div",{style:{...E.weekNameCol,flexDirection:"column",alignItems:"flex-start",gap:2},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[s.jsx("span",{style:{...E.sideDot,background:m}}),s.jsx("span",{style:E.weekHabitName,children:g.name})]}),s.jsxs("div",{style:{display:"flex",gap:4,paddingLeft:15},children:[s.jsx("button",{onClick:()=>o(g),style:E.tinyBtn,title:"Edit",children:s.jsx(Un,{size:10})}),s.jsx("button",{onClick:()=>n(g.id,g.name),style:E.tinyBtn,title:"Delete",children:s.jsx(ft,{size:10})})]}),g.type!=="regular"&&s.jsx("span",{style:E.typeBadge,children:g.type==="minimum"?`≥${g.target_count}/${g.period}`:`≤${g.target_count}/${g.period}`})]}),a.map((B,A)=>{var h,S;const R=p.has(B),C=B>Fe,N=(g.type==="minimum"||g.type==="maximum")&&g.period==="day",V=(h=g.log_counts)==null?void 0:h[B],tt=V!=null,it=!!((S=g.log_notes)!=null&&S[B]),H=u(B),L=A>0&&u(a[A-1]),f=A<a.length-1&&u(a[A+1]),D=R||H;return s.jsxs("div",{style:{...E.weekCell,position:"relative"},children:[H&&s.jsx("span",{style:{...E.chainLine,background:m,left:L?0:"50%",right:f?0:"50%"}}),s.jsx("button",{disabled:C,onClick:()=>r(g,B),style:{...E.tick,position:"relative",zIndex:1,...D?{background:m,borderColor:m,color:"#fff"}:{},...N&&tt&&!R?{borderColor:m,color:m}:{},...C&&!D?E.tickFuture:{}},children:N?tt?s.jsx("span",{style:{fontSize:12,fontWeight:700},children:V}):null:R&&s.jsx(At,{size:14,color:"#fff",strokeWidth:3})}),it&&s.jsx("span",{style:E.cellNoteBubble})]},B)}),s.jsx("div",{style:E.weekStreakCol,children:y?s.jsxs("span",{style:{...E.streakPill,background:v,color:m},children:[s.jsx(Ou,{size:12})," ",T,"/",w]}):s.jsxs("span",{style:{...E.streakPill,background:v,color:m},children:[s.jsx(fs,{size:12})," ",g.streak]})})]},g.id)}),t.length===0&&s.jsx("div",{style:{fontSize:13,color:"#9A968C",padding:"24px 12px",textAlign:"center"},children:"No habits yet — add one from the sidebar."})]})]})}function sm({habit:t,dayAction:r,logSet:e,onDelete:n,onEdit:o,setNote:i}){var it,H;const[l,a]=k.useState(null),[d,g]=k.useState(""),[m,v]=k.useState(null),[p,j]=k.useState(0),w=k.useRef(null);if(!t)return null;const x=((it=pe[t.pillar])==null?void 0:it.dot)||"#9A968C",I=((H=pe[t.pillar])==null?void 0:H.soft)||"rgba(0,0,0,0.05)",b=e(t),{dates:c,startOffset:u,label:y,year:T}=Zp(p),z=c.filter(L=>L<=Fe&&b.has(L)).length,F=c.filter(L=>L<=Fe).length,B=F>0?Math.round(z/F*100):0,A=t.type==="minimum"&&(t.period==="month"||t.period==="year"),R=t.period==="year"?(t.logs||[]).filter(L=>L.startsWith(`${T}-`)).length:c.filter(L=>b.has(L)).length,C=A&&R>=(t.target_count||0),N=L=>{w.current=setTimeout(()=>a(L),500)},V=()=>clearTimeout(w.current),tt=L=>{var f;v(L),g(((f=t.log_notes)==null?void 0:f[L])||""),a(null)};return s.jsxs("div",{children:[s.jsxs("div",{style:E.mainHead,children:[s.jsxs("div",{children:[s.jsxs("div",{style:E.eyebrow,children:[s.jsx("span",{style:{...E.sideDot,background:x,marginRight:6}}),t.pillar," · Monthly view"]}),s.jsx("h1",{style:E.h1,children:t.name})]}),s.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[s.jsxs("button",{onClick:o,style:E.actionBtn,children:[s.jsx(Un,{size:14})," Edit"]}),s.jsxs("button",{onClick:n,style:{...E.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[s.jsx(ft,{size:14})," Delete"]}),t.reminder_time&&s.jsxs("button",{style:E.actionBtn,children:[s.jsx(Wu,{size:14})," ",t.reminder_time]})]})]}),s.jsxs("div",{style:E.statStrip,children:[s.jsx(on,{label:"Current streak",value:`${t.streak} days`,c:x,soft:I,flame:!0}),s.jsx(on,{label:"Done this month",value:`${z}/${F}`,c:x,soft:I}),s.jsx(on,{label:"Completion",value:`${B}%`,c:x,soft:I}),t.type==="regular"?s.jsx(on,{label:"Weekly target",value:`${t.target_per_week}×`,c:x,soft:I}):s.jsx(on,{label:t.type==="minimum"?"Min target":"Max allowed",value:`${t.target_count}/${t.period}`,c:x,soft:I})]}),s.jsxs("div",{style:E.navBar,children:[s.jsx("button",{onClick:()=>j(L=>L-1),style:E.navBtn,children:s.jsx(Hn,{size:16})}),s.jsxs("span",{style:E.navLabel,children:[y,p===0?" · This month":""]}),s.jsx("button",{onClick:()=>j(L=>Math.min(0,L+1)),disabled:p>=0,style:{...E.navBtn,...p>=0?E.navBtnDisabled:{}},children:s.jsx(ve,{size:16})})]}),A&&s.jsxs("div",{style:{...E.chainBanner,background:C?I:"#F7F6F3",color:C?x:"#9A968C"},children:[s.jsx(Ou,{size:15}),C?`${t.period==="year"?"Yearly":"Monthly"} chain complete — ${R}/${t.target_count} connected`:`${R}/${t.target_count} this ${t.period} · ${(t.target_count||0)-R} more to connect the chain`]}),s.jsxs("div",{style:E.monthCard,children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[s.jsx("div",{style:E.monthTitle,children:y}),s.jsx("span",{style:{fontSize:11,color:"#9A968C"},children:"Long-press a day for options"})]}),s.jsx("div",{style:E.monthDow,children:Uu.map(L=>s.jsx("div",{style:E.monthDowCell,children:L},L))}),s.jsxs("div",{style:E.monthGrid,children:[Array.from({length:u}).map((L,f)=>s.jsx("div",{},`pad${f}`)),c.map((L,f)=>{var Gn,lt;const D=f+1,h=b.has(L),S=L>Fe,M=L===Fe,W=!!((Gn=t.log_notes)!=null&&Gn[L]),U=(t.type==="minimum"||t.type==="maximum")&&t.period==="day",at=(lt=t.log_counts)==null?void 0:lt[L],gt=at!=null,X=h||C,Bt=(u+f)%7;return s.jsxs("div",{style:{position:"relative"},children:[C&&s.jsx("span",{style:{...E.chainLine,background:x,...Bt===0?{left:"50%"}:{left:-6},...Bt===6?{right:"50%"}:{right:-6}}}),s.jsx("button",{disabled:S,onClick:()=>r(t,L),onMouseDown:()=>!U&&N(L),onMouseUp:V,onTouchStart:()=>!U&&N(L),onTouchEnd:V,style:{...E.monthDay,position:"relative",zIndex:1,...X?{background:x,borderColor:x,color:"#fff"}:{},...U&&gt&&!h?{borderColor:x,color:x}:{},...S&&!X?E.monthDayFuture:{},...M&&!X?{borderColor:x,borderWidth:2}:{},width:"100%"},children:D}),U&&gt&&s.jsx("span",{style:{...E.countBadge,background:h?"#4C9A6B":x},children:at}),W&&s.jsx("span",{style:E.noteIndicator}),l===L&&s.jsx(im,{onEdit:o,onDelete:n,onAddNote:()=>tt(L),onRemind:o,onClose:()=>a(null)})]},L)})]})]}),m&&s.jsxs("div",{style:E.noteBox,children:[s.jsxs("div",{style:{fontWeight:600,fontSize:13,marginBottom:6},children:["Note for ",m]}),s.jsx("textarea",{value:d,onChange:L=>g(L.target.value),placeholder:"Add a note for this day…",style:{...E.sideInput,minHeight:60,resize:"vertical"}}),s.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[s.jsxs("button",{onClick:()=>{i(m,d),v(null)},style:E.sideAddBtn,children:[s.jsx(At,{size:13})," Save"]}),s.jsx("button",{onClick:()=>v(null),style:E.sideCancelBtn,children:s.jsx(ft,{size:13})})]})]})]})}function im({onEdit:t,onDelete:r,onAddNote:e,onRemind:n,onClose:o}){return s.jsxs("div",{style:E.longPressMenu,children:[s.jsxs("button",{style:E.menuItem,onClick:()=>{t(),o()},children:[s.jsx(Un,{size:13})," Edit"]}),s.jsxs("button",{style:E.menuItem,onClick:()=>{e(),o()},children:[s.jsx(Nu,{size:13})," Add note"]}),s.jsxs("button",{style:E.menuItem,onClick:()=>{n(),o()},children:[s.jsx(Wu,{size:13})," Remind"]}),s.jsxs("button",{style:{...E.menuItem,color:"#C2536B"},onClick:()=>{r(),o()},children:[s.jsx(ft,{size:13})," Delete"]})]})}function lm({habits:t,onSave:r,onClose:e}){const[n,o]=k.useState([...t]),i=(l,a)=>{const d=[...n],g=l+a;g<0||g>=d.length||([d[l],d[g]]=[d[g],d[l]],o(d))};return s.jsx("div",{style:E.modalOverlay,onClick:e,children:s.jsxs("div",{style:{...E.modal,maxHeight:"80vh",overflowY:"auto"},onClick:l=>l.stopPropagation(),children:[s.jsxs("div",{style:E.modalHead,children:["Reorder Habits",s.jsx("button",{onClick:e,style:E.closeBtn,children:s.jsx(ft,{size:16})})]}),s.jsx("p",{style:{fontSize:12,color:"#9A968C",margin:"0 0 10px"},children:"Use arrows to set the display order."}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:n.map((l,a)=>{var g;const d=((g=pe[l.pillar])==null?void 0:g.dot)||"#9A968C";return s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"9px 10px",background:"#F7F6F3",borderRadius:9,border:"1px solid #ECEAE3"},children:[s.jsx("span",{style:{...E.sideDot,background:d}}),s.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500},children:l.name}),s.jsx("button",{onClick:()=>i(a,-1),disabled:a===0,style:{...E.navBtn,width:28,height:28,opacity:a===0?.3:1,fontSize:14},children:"↑"}),s.jsx("button",{onClick:()=>i(a,1),disabled:a===n.length-1,style:{...E.navBtn,width:28,height:28,opacity:a===n.length-1?.3:1,fontSize:14},children:"↓"})]},l.id)})}),s.jsxs("button",{onClick:()=>r(n.map(l=>l.id)),style:{...E.sideAddBtn,width:"100%",marginTop:14,height:38,justifyContent:"center"},children:[s.jsx(At,{size:14})," Save Order"]})]})})}function am({year:t}){const[r,e]=k.useState([]);if(k.useEffect(()=>{J.getHabitsYearly(t).then(e).catch(console.error)},[t]),!r.length)return null;const n=Array.from({length:12},(i,l)=>{const a=r.reduce((g,m)=>{var v;return g+(((v=m.monthly[l+1])==null?void 0:v.done)||0)},0),d=r.reduce((g,m)=>{var v;return g+Math.floor((((v=m.monthly[l+1])==null?void 0:v.days)||30)/7*7)},0);return d>0?Math.round(a/d*100):0}),o=Math.max(...n,1);return s.jsxs("div",{style:{...E.monthCard,marginTop:18},children:[s.jsxs("div",{style:E.monthTitle,children:[t," Completion"]}),s.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:6,height:80,marginTop:12},children:n.map((i,l)=>s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[s.jsx("div",{style:{width:"100%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",height:`${i/o*60}px`,minHeight:2,opacity:i>0?1:.15},title:`${i}%`}),s.jsx("span",{style:{fontSize:9,color:"#9A968C",fontWeight:600},children:Kp[l]})]},l))})]})}function on({label:t,value:r,c:e,soft:n,flame:o}){return s.jsxs("div",{style:{...E.stat,background:n},children:[s.jsx("div",{style:E.statLabel,children:t}),s.jsxs("div",{style:{...E.statValue,color:e},children:[o&&s.jsx(fs,{size:15})," ",r]})]})}const E={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"#F7F6F3",minHeight:"100vh",color:"#26241F",position:"relative",overflow:"hidden"},sidebar:{width:230,flexShrink:0,background:"#fff",borderRight:"1px solid #ECEAE3",padding:"20px 12px",display:"flex",flexDirection:"column",gap:3,overflowY:"auto"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.18)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)",boxShadow:"none"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.38)",zIndex:20},sideTop:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 4px"},closeBtn:{border:"none",background:"none",color:"#6B675E",cursor:"pointer",padding:4,display:"grid",placeItems:"center",marginBottom:8},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"#9A968C",fontWeight:700,padding:"0 6px 14px"},sideItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"9px 10px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:500,color:"#4A463E",textAlign:"left"},sideItemOn:{background:"#F2F1EC",fontWeight:600},sideLabel:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},sideCount:{fontSize:11,fontWeight:700,color:"#9A968C",background:"#F2F1EC",borderRadius:10,padding:"1px 7px"},sideStreak:{display:"flex",alignItems:"center",gap:3,fontSize:11,fontWeight:600,color:"#C2773B"},sideDot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},sideDivider:{height:1,background:"#ECEAE3",margin:"8px 6px"},addBox:{padding:"10px 6px",display:"flex",flexDirection:"column",gap:6},sideInput:{border:"1px solid #E4E2DA",borderRadius:7,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},sideAddBtn:{border:"none",background:"#4C9A6B",color:"#fff",height:30,padding:"0 12px",borderRadius:7,cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontSize:13,fontFamily:"inherit"},sideCancelBtn:{border:"1px solid #E4E2DA",background:"#fff",color:"#6B675E",width:30,height:30,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},sideNewBtn:{display:"flex",alignItems:"center",gap:6,width:"100%",border:"1px dashed #D9D6CE",background:"none",borderRadius:8,padding:"8px 10px",fontSize:12.5,color:"#9A968C",fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginTop:6,justifyContent:"center"},main:{flex:1,padding:"26px",overflowX:"hidden",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid #E0DDD5",background:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"#4A463E",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:200},mainHead:{marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"#9A968C",fontWeight:600,marginBottom:5,display:"flex",alignItems:"center"},h1:{fontSize:27,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},actionBtn:{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:500,color:"#6B675E",border:"1px solid #E0DDD5",background:"#fff",padding:"5px 10px",borderRadius:7,cursor:"pointer",fontFamily:"inherit"},weekCard:{background:"#fff",borderRadius:12,padding:"8px 14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"auto"},weekHeadRow:{display:"flex",alignItems:"flex-end",padding:"10px 0",borderBottom:"1px solid #ECEAE3",minWidth:480},weekNameCol:{width:160,flexShrink:0,display:"flex",alignItems:"center",gap:8},weekDayHead:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2},weekDayName:{fontSize:10,fontWeight:600,color:"#9A968C",textTransform:"uppercase"},weekDayNum:{fontSize:12,fontWeight:600,color:"#6B675E",width:22,height:22,display:"grid",placeItems:"center",borderRadius:"50%"},weekDayToday:{background:"#26241F",color:"#fff"},weekStreakCol:{width:64,flexShrink:0,textAlign:"center",fontSize:10,fontWeight:600,color:"#9A968C",textTransform:"uppercase"},weekRow:{display:"flex",alignItems:"center",padding:"9px 0",borderBottom:"1px solid #F4F2EC",minWidth:480},weekHabitName:{fontSize:13,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},weekCell:{flex:1,display:"grid",placeItems:"center"},typeBadge:{fontSize:10,color:"#9A968C",background:"#F2F1EC",padding:"1px 6px",borderRadius:8,fontWeight:600},tick:{width:26,height:26,borderRadius:7,border:"2px solid #E0DDD5",background:"#fff",cursor:"pointer",display:"grid",placeItems:"center",padding:0},tickFuture:{opacity:.4,cursor:"not-allowed",borderStyle:"dashed"},streakPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,fontWeight:700,padding:"3px 9px",borderRadius:12},tinyBtn:{border:"none",background:"none",color:"#C3BFB5",cursor:"pointer",padding:"2px 3px",display:"grid",placeItems:"center",borderRadius:4},statStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:10,marginBottom:18},stat:{borderRadius:10,padding:"13px 14px"},statLabel:{fontSize:11,fontWeight:600,color:"#6B675E",marginBottom:5},statValue:{fontSize:19,fontWeight:700,display:"flex",alignItems:"center",gap:5,fontFamily:"'Fraunces',Georgia,serif"},monthCard:{background:"#fff",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},monthTitle:{fontSize:14,fontWeight:700,marginBottom:12,fontFamily:"'Fraunces',Georgia,serif"},monthDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:8},monthDowCell:{fontSize:10,fontWeight:600,color:"#9A968C",textAlign:"center",textTransform:"uppercase"},monthGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6},monthDay:{aspectRatio:"1",border:"1.5px solid #ECEAE3",background:"#fff",borderRadius:8,fontSize:12.5,fontWeight:600,color:"#6B675E",cursor:"pointer",fontFamily:"inherit",display:"grid",placeItems:"center"},monthDayFuture:{opacity:.4,cursor:"not-allowed",background:"#FAFAF8"},noteIndicator:{position:"absolute",top:3,right:3,width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},cellNoteBubble:{position:"absolute",top:2,right:"calc(50% - 16px)",width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},countBadge:{position:"absolute",bottom:2,right:2,minWidth:13,height:13,padding:"0 2px",borderRadius:7,color:"#fff",fontSize:9,fontWeight:700,display:"grid",placeItems:"center",lineHeight:1},counterBtn:{width:44,height:44,borderRadius:"50%",border:"1.5px solid #E0DDD5",background:"#fff",color:"#26241F",fontSize:24,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1},chainLine:{position:"absolute",top:"calc(50% - 3px)",left:0,right:0,height:6,zIndex:0,opacity:.9},chainBanner:{display:"flex",alignItems:"center",gap:8,borderRadius:10,padding:"10px 14px",marginBottom:14,fontSize:12.5,fontWeight:700,fontFamily:"'Inter',system-ui,sans-serif"},navBar:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:16},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid #E0DDD5",background:"#fff",color:"#4A463E",cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},navLabel:{fontSize:13,fontWeight:700,color:"#26241F",minWidth:180,textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},noteBox:{background:"#fff",borderRadius:10,padding:14,marginTop:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},longPressMenu:{position:"absolute",top:"100%",left:0,zIndex:50,background:"#fff",border:"1px solid #E0DDD5",borderRadius:10,boxShadow:"0 4px 16px rgba(0,0,0,0.12)",padding:"4px 0",minWidth:140},menuItem:{display:"flex",alignItems:"center",gap:8,width:"100%",border:"none",background:"none",padding:"8px 14px",fontSize:13,color:"#26241F",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:100,display:"grid",placeItems:"center"},modal:{background:"#fff",borderRadius:14,padding:24,width:320,maxWidth:"90vw",display:"flex",flexDirection:"column",gap:8},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:700,fontSize:16,fontFamily:"'Fraunces',Georgia,serif",marginBottom:6},modalLabel:{fontSize:11,fontWeight:600,color:"#9A968C",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4}},Ji=[{id:1,label:"Rough",emoji:"😣",color:"#C2536B"},{id:2,label:"Low",emoji:"🙁",color:"#C2773B"},{id:3,label:"Okay",emoji:"😐",color:"#C9A227"},{id:4,label:"Good",emoji:"🙂",color:"#4C9A6B"},{id:5,label:"Great",emoji:"😄",color:"#3A7CA5"}],dm=t=>Ji.find(r=>r.id===t),Qs=[{id:"wins",label:"Wins",hint:"What went well today?",icon:Ln,color:"#C9A227"},{id:"grateful",label:"Grateful for",hint:"1–3 things",icon:Ep,color:"#C2536B"},{id:"mattered",label:"What mattered",hint:"The point of today",icon:Kl,color:"#3A7CA5"},{id:"letgo",label:"Letting go of",hint:"Offload what's draining",icon:Wp,color:"#8268B0"},{id:"tomorrow",label:"Tomorrow's one thing",hint:"A single priority",icon:Bp,color:"#4C9A6B"}],gm=()=>new Date().toISOString().slice(0,10),Ks=t=>new Date(t+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"});function um(){const t=gm(),[r,e]=[new Date().getFullYear(),new Date().getMonth()+1],[n,o]=k.useState(null),i=n||t,l=i===t,[a,d]=k.useState(null),[g,m]=k.useState({}),[v,p]=k.useState(Object.fromEntries(Qs.map(A=>[A.id,""]))),j=k.useCallback(async A=>{const R=await J.getJournalEntry(A);d(R)},[]);k.useCallback(async()=>{const A=await J.getJournalHistory(r,e);m(A)},[r,e]);const w=k.useCallback(async()=>{const[A,R]=await Promise.all([J.getJournalEntry(i),J.getJournalHistory(r,e)]);d(A),m(R)},[i,r,e]);k.useEffect(()=>{w()},[w]);const x=async A=>{await J.updateJournalMood(i,A),w()},I=async A=>{const R=v[A].trim();R&&(await J.addJournalBullet(i,A,R),p(C=>({...C,[A]:""})),j(i))},b=async A=>{await J.deleteJournalBullet(A),j(i)},c=A=>{o(A===t?null:A),p(Object.fromEntries(Qs.map(R=>[R.id,""])))};if(!a)return s.jsx("div",{style:{padding:28,color:"#9A968C"},children:"Loading…"});const u=a.mood!==null,y=(()=>{let A=0;const R=new Date(t);if(g[t]||l&&u)A=1,R.setDate(R.getDate()-1);else return 0;for(;;){const N=R.toISOString().slice(0,10);if(g[N])A++,R.setDate(R.getDate()-1);else break}return A})(),T=Object.values(a.bullets||{}).reduce((A,R)=>A+R.length,0),z=new Date(r,e,0).getDate(),F=new Date(r,e-1,1).getDay(),B=F===0?6:F-1;return s.jsxs("div",{style:rt.page,children:[s.jsxs("div",{style:rt.head,children:[s.jsxs("div",{children:[s.jsx("div",{style:rt.eyebrow,children:"Anvil · Journal"}),!l&&s.jsxs("button",{style:rt.backBtn,onClick:()=>o(null),children:[s.jsx(Hn,{size:14})," Back to Today"]}),s.jsx("h1",{style:rt.h1,children:l?"Today":Ks(i)}),l&&s.jsx("div",{style:rt.date,children:Ks(t)})]}),s.jsxs("div",{style:rt.streakBox,children:[s.jsx(fs,{size:16,color:"#C2773B"}),s.jsx("span",{style:rt.streakNum,children:y}),s.jsx("span",{style:rt.streakLabel,children:"day streak"})]})]}),s.jsxs("div",{style:rt.card,children:[s.jsxs("div",{style:rt.cardTitle,children:["How ",l?"are":"were"," you?"]}),s.jsx("div",{style:rt.moodRow,children:Ji.map(A=>{const R=a.mood===A.id;return s.jsxs("button",{onClick:()=>x(A.id),style:{...rt.moodBtn,...R?{background:A.color,borderColor:A.color,transform:"translateY(-2px)"}:{}},children:[s.jsx("span",{style:rt.moodEmoji,children:A.emoji}),s.jsx("span",{style:{...rt.moodLabel,color:R?"#fff":"#6B675E"},children:A.label})]},A.id)})})]}),Qs.map(A=>{var N;const R=A.icon,C=((N=a.bullets)==null?void 0:N[A.id])||[];return s.jsxs("div",{style:rt.card,children:[s.jsxs("div",{style:rt.sectionHead,children:[s.jsx("span",{style:{...rt.sectionIcon,background:`${A.color}1A`,color:A.color},children:s.jsx(R,{size:15})}),s.jsxs("div",{children:[s.jsx("div",{style:rt.cardTitle,children:A.label}),s.jsx("div",{style:rt.sectionHint,children:A.hint})]})]}),s.jsx("ul",{style:rt.bulletList,children:C.map(V=>s.jsxs("li",{style:rt.bullet,children:[s.jsx("span",{style:{...rt.bulletDot,background:A.color}}),s.jsx("span",{style:rt.bulletText,children:V.text}),s.jsx("button",{onClick:()=>b(V.id),style:rt.bulletDel,children:s.jsx(ft,{size:13})})]},V.id))}),s.jsxs("div",{style:rt.addRow,children:[s.jsx("input",{placeholder:"Add a point…",value:v[A.id],onChange:V=>p(tt=>({...tt,[A.id]:V.target.value})),onKeyDown:V=>V.key==="Enter"&&I(A.id),style:rt.input}),s.jsx("button",{onClick:()=>I(A.id),style:{...rt.addBtn,background:A.color},children:s.jsx(Jr,{size:16})})]})]},A.id)}),s.jsxs("div",{style:rt.card,children:[s.jsxs("div",{style:rt.cardTitle,children:[new Date(r,e-1).toLocaleDateString("en-US",{month:"long",year:"numeric"})," · Mood history",s.jsx("span",{style:{fontSize:11,color:"#9A968C",fontWeight:400,marginLeft:8},children:"tap a day to view"})]}),s.jsx("div",{style:rt.calDow,children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(A=>s.jsx("div",{style:rt.calDowCell,children:A},A))}),s.jsxs("div",{style:rt.calGrid,children:[Array.from({length:B}).map((A,R)=>s.jsx("div",{},`p${R}`)),Array.from({length:z},(A,R)=>R+1).map(A=>{const R=`${r}-${String(e).padStart(2,"0")}-${String(A).padStart(2,"0")}`,C=R===t&&a.mood?a.mood:g[R],N=C?dm(C):null,V=R>t,tt=R===i;return s.jsx("button",{onClick:()=>!V&&c(R),disabled:V,style:{...rt.calDay,background:N?N.color:V?"#FAFAF8":"#fff",borderColor:tt?"#26241F":"#ECEAE3",borderWidth:tt?2:1,color:N?"#fff":"#B5B1A7",opacity:V?.5:1,cursor:V?"not-allowed":"pointer",outline:tt?"2px solid #26241F":"none",outlineOffset:1},title:N?N.label:R,children:N?N.emoji:A},A)})]}),s.jsx("div",{style:rt.legend,children:Ji.map(A=>s.jsxs("span",{style:rt.legendItem,children:[s.jsx("span",{style:{...rt.legendDot,background:A.color}})," ",A.label]},A.id))})]}),s.jsx("div",{style:rt.footer,children:l?u?`Mood set · ${T} point${T===1?"":"s"} written today`:"Tap a mood to log today and keep your streak":`Viewing ${Ks(i)}`})]})}const rt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"#F7F6F3",minHeight:"100%",padding:"28px 24px",color:"#26241F",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"#9A968C",fontWeight:600,marginBottom:4},backBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",background:"none",color:"#3A7CA5",fontSize:12.5,fontWeight:600,cursor:"pointer",padding:"0 0 6px",fontFamily:"inherit"},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},date:{fontSize:13,color:"#9A968C",marginTop:4},streakBox:{display:"flex",alignItems:"center",gap:6,background:"#fff",border:"1px solid #ECEAE3",borderRadius:10,padding:"8px 14px"},streakNum:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"#C2773B"},streakLabel:{fontSize:11,color:"#9A968C",fontWeight:500},card:{background:"#fff",borderRadius:12,padding:"18px 20px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},cardTitle:{fontSize:14,fontWeight:700,marginBottom:12,color:"#26241F"},moodRow:{display:"flex",gap:8,flexWrap:"wrap"},moodBtn:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,border:"2px solid #ECEAE3",background:"#fff",borderRadius:10,padding:"10px 12px",cursor:"pointer",flex:"1 1 60px",transition:"transform 0.1s"},moodEmoji:{fontSize:22},moodLabel:{fontSize:11,fontWeight:600},sectionHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:10},sectionIcon:{width:32,height:32,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},sectionHint:{fontSize:11.5,color:"#9A968C",marginTop:1},bulletList:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6,marginBottom:10},bullet:{display:"flex",alignItems:"center",gap:8,fontSize:13.5,lineHeight:1.4},bulletDot:{width:6,height:6,borderRadius:"50%",flexShrink:0},bulletText:{flex:1},bulletDel:{border:"none",background:"none",color:"#C3BFB5",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},addRow:{display:"flex",gap:8},input:{flex:1,border:"1px solid #E4E2DA",borderRadius:8,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",outline:"none"},addBtn:{width:36,height:36,border:"none",borderRadius:8,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"#9A968C",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:12},calDay:{aspectRatio:"1",border:"1px solid #ECEAE3",borderRadius:7,fontSize:13,display:"grid",placeItems:"center",fontWeight:500,fontFamily:"inherit"},legend:{display:"flex",gap:10,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"#6B675E"},legendDot:{width:8,height:8,borderRadius:"50%",display:"inline-block"},footer:{fontSize:12.5,color:"#9A968C",textAlign:"center",marginTop:8,fontStyle:"italic"}},fr=[{id:"D",label:"Data",color:"#3A7CA5",soft:"rgba(58,124,165,0.10)",prompt:"What did you read/watch? Log the raw source and a quick note.",hint:"e.g. 'Atomic Habits ch.1 — habits are systems not goals'"},{id:"I",label:"Information",color:"#8268B0",soft:"rgba(130,104,176,0.10)",prompt:"What did you actually understand from it? In your own words.",hint:"e.g. 'Small 1% improvements compound into massive change over time'"},{id:"K",label:"Knowledge",color:"#C9A227",soft:"rgba(201,162,39,0.10)",prompt:"How will this specifically improve your life? Connect it to your goals.",hint:"e.g. 'I will improve my morning workout habit by 1% each week'"},{id:"W",label:"Wisdom",color:"#4C9A6B",soft:"rgba(76,154,107,0.10)",prompt:"How have you implemented it? What changed?",hint:"e.g. 'I've not missed a workout in 3 weeks using the 1% rule'"}],md=t=>fr.findIndex(r=>r.id===t),Zi=[{id:"book",label:"Book",icon:Mu},{id:"video",label:"Video",icon:Mp},{id:"article",label:"Article",icon:Nu}],fd=t=>Zi.find(r=>r.id===t)||Zi[0],Xs={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"};function cm(){var R;const[t,r]=k.useState([]),[e,n]=k.useState(null),[o,i]=k.useState("ALL"),[l,a]=k.useState(!1),[d,g]=k.useState(null),[m,v]=k.useState({title:"",type:"book",pillar:"Academic",note:""}),[p,j]=k.useState({}),w=k.useCallback(async()=>{try{const C=await J.getSkills();r(C);const N={};C.forEach(V=>{N[V.id]=Object.fromEntries(fr.map(tt=>[tt.id,""]))}),j(V=>{const tt={...N};return C.forEach(it=>{V[it.id]&&(tt[it.id]={...N[it.id],...V[it.id]})}),tt})}catch(C){console.error(C)}},[]);k.useEffect(()=>{w()},[w]);const x=t.find(C=>C.id===e),I=x?md(x.stage):-1,b=async(C,N)=>{var tt;const V=(((tt=p[C])==null?void 0:tt[N])??"").trim();V&&(await J.addSkillNote(C,N,V),j(it=>({...it,[C]:{...it[C],[N]:""}})),w())},c=async C=>{await J.deleteSkillNote(C),w()},u=async C=>{await J.toggleSkillNote(C),w()},y=async(C,N)=>{t.find(tt=>tt.id===C)&&(N==="W"&&g(C),await J.completeSkillStage(C,N),w())},T=async()=>{if(!m.title.trim())return;const C=await J.createSkill({pillar:m.pillar,title:m.title.trim(),source_type:m.type,note_d:m.note.trim()});a(!1),v({title:"",type:"book",pillar:"Academic",note:""}),n(C.id),w()},z=async C=>{await J.deleteSkill(C),e===C&&n(null),w()},F=o==="ALL"?t:t.filter(C=>C.stage===o),B=t.filter(C=>C.stage==="W").length,A=!!x;return s.jsxs("div",{style:O.page,children:[d&&s.jsx("div",{style:O.celebOverlay,children:s.jsxs("div",{style:O.celebBox,children:[s.jsx("div",{style:O.celebEmoji,children:"🏆"}),s.jsx("div",{style:O.celebTitle,children:"Wisdom unlocked!"}),s.jsx("div",{style:O.celebSub,children:"You've implemented this knowledge — that's rare and real."}),s.jsx("button",{onClick:()=>g(null),style:O.celebBtn,children:"Continue"})]})}),s.jsxs("div",{style:O.head,children:[s.jsxs("div",{children:[s.jsx("div",{style:O.eyebrow,children:"Anvil · Skills"}),s.jsx("h1",{style:O.h1,children:"DIKW Skills"}),s.jsx("div",{style:O.subhead,children:"Data → Information → Knowledge → Wisdom"})]}),s.jsxs("div",{style:O.headRight,children:[s.jsxs("div",{style:O.wisdomBadge,children:[s.jsx(Ln,{size:14,color:"#C9A227"})," ",B," Wisdom",B!==1?"s":""]}),s.jsxs("button",{onClick:()=>{a(!0),n(null)},style:O.addSkillBtn,children:[s.jsx(Jr,{size:15})," Add skill"]})]})]}),s.jsx("div",{style:O.filterBar,children:["ALL",...fr.map(C=>C.id)].map(C=>{const N=fr.find(tt=>tt.id===C),V=o===C;return s.jsx("button",{onClick:()=>i(C),style:{...O.filterBtn,...V?{background:N?N.color:"#26241F",color:"#fff",borderColor:"transparent"}:{}},children:N?`${C} · ${N.label}`:"All"},C)})}),s.jsxs("div",{style:{...O.layout,gridTemplateColumns:A?"1fr 1fr":"1fr"},children:[s.jsxs("div",{style:O.cardList,children:[l&&s.jsxs("div",{style:{...O.skillCard,border:"2px dashed #3A7CA5"},children:[s.jsx("div",{style:O.cardTitle,children:"New skill"}),s.jsx("input",{placeholder:"Title (book / video / article name)",value:m.title,onChange:C=>v(N=>({...N,title:C.target.value})),onKeyDown:C=>C.key==="Enter"&&T(),style:O.input,autoFocus:!0}),s.jsxs("div",{style:O.addRow,children:[s.jsx("select",{value:m.type,onChange:C=>v(N=>({...N,type:C.target.value})),style:O.select,children:Zi.map(C=>s.jsx("option",{value:C.id,children:C.label},C.id))}),s.jsx("select",{value:m.pillar,onChange:C=>v(N=>({...N,pillar:C.target.value})),style:O.select,children:Object.keys(Xs).map(C=>s.jsx("option",{children:C},C))})]}),s.jsx("input",{placeholder:"First note (what did you read/watch?)",value:m.note,onChange:C=>v(N=>({...N,note:C.target.value})),style:O.input}),s.jsxs("div",{style:O.addRow,children:[s.jsxs("button",{onClick:T,style:O.saveBtn,children:[s.jsx(At,{size:14})," Save"]}),s.jsxs("button",{onClick:()=>a(!1),style:O.cancelBtn,children:[s.jsx(ft,{size:14})," Cancel"]})]})]}),F.map(C=>{const N=md(C.stage),V=fr[N],tt=fd(C.type),it=C.stage==="W",H=e===C.id;return s.jsxs("div",{onClick:()=>n(H?null:C.id),style:{...O.skillCard,...H?{borderColor:V.color,borderWidth:2}:{},...it?{background:"rgba(76,154,107,0.05)"}:{}},children:[s.jsxs("div",{style:O.skillCardTop,children:[s.jsxs("div",{style:O.skillMeta,children:[s.jsx("span",{style:{color:Xs[C.pillar]},children:s.jsx(tt.icon,{size:13})}),s.jsx("span",{style:{...O.pillarDot,background:Xs[C.pillar]}}),s.jsxs("span",{style:O.srcLabel,children:[tt.label," · ",C.pillar]})]}),s.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[it&&s.jsx(Hu,{size:14,color:"#4C9A6B"}),s.jsx("button",{onClick:L=>{L.stopPropagation(),z(C.id)},style:O.ghostBtn,children:s.jsx(ft,{size:13})})]})]}),s.jsx("div",{style:O.skillTitle,children:C.title}),s.jsxs("div",{style:O.track,children:[fr.map((L,f)=>{var M;const D=f<N,h=f===N,S=(M=C.completed_stages)==null?void 0:M[L.id];return s.jsxs("div",{style:O.trackItem,children:[s.jsxs("div",{style:{...O.trackDot,background:D||S||h?L.color:"#E4E2DA",boxShadow:h?`0 0 0 3px ${L.color}33`:"none"},children:[(D||h&&S)&&s.jsx(At,{size:9,color:"#fff",strokeWidth:3}),h&&!S&&s.jsx("span",{style:O.trackCurrent,children:L.id}),!D&&!h&&s.jsx(ad,{size:8,color:"#B5B1A7"})]}),f<fr.length-1&&s.jsx("div",{style:{...O.trackLine,background:D?fr[f+1].color:"#E4E2DA"}})]},L.id)}),s.jsx("span",{style:{...O.stageTag,background:V.soft,color:V.color},children:V.label})]})]},C.id)}),F.length===0&&!l&&s.jsx("div",{style:O.empty,children:"No skills at this stage yet."})]}),x&&s.jsxs("div",{style:O.detail,children:[s.jsxs("div",{style:O.detailHead,children:[s.jsxs("div",{children:[s.jsxs("div",{style:O.eyebrow,children:[fd(x.type).label," · ",x.pillar]}),s.jsx("div",{style:O.detailTitle,children:x.title})]}),s.jsx("button",{onClick:()=>n(null),style:O.closeBtn,children:s.jsx(ft,{size:16})})]}),fr.map((C,N)=>{var D,h,S;const V=N<=I,tt=N===I,it=N<I||((D=x.completed_stages)==null?void 0:D[C.id]),H=N>I,L=((h=x.notes)==null?void 0:h[C.id])||[],f=((S=p[x.id])==null?void 0:S[C.id])??"";return s.jsxs("div",{style:{...O.stageBlock,...V?{borderColor:C.color}:{},opacity:H?.45:1},children:[s.jsxs("div",{style:O.stageBlockHead,children:[s.jsx("div",{style:{...O.stageLetter,background:V?C.color:"#E4E2DA",color:V?"#fff":"#9A968C"},children:it&&!tt?s.jsx(At,{size:12,color:"#fff",strokeWidth:3}):H?s.jsx(ad,{size:11,color:"#9A968C"}):C.id}),s.jsxs("div",{style:{flex:1},children:[s.jsx("div",{style:{...O.stageName,color:V?C.color:"#9A968C"},children:C.label}),V&&s.jsx("div",{style:O.stagePrompt,children:C.prompt})]}),it&&!tt&&s.jsx("span",{style:{...O.doneBadge,color:C.color,background:C.soft},children:"Done"})]}),V&&(()=>{var at,gt;const M=C.id==="W",W=L.length>0&&L.every(X=>X.done),U=M?W:L.length>0;return s.jsxs(s.Fragment,{children:[L.length>0&&s.jsx("ul",{style:O.noteList,children:L.map(X=>s.jsxs("li",{style:O.noteItem,children:[M?s.jsx("button",{onClick:()=>u(X.id),style:{...O.checkBox,...X.done?{background:C.color,borderColor:C.color}:{}},children:X.done&&s.jsx(At,{size:11,color:"#fff",strokeWidth:3})}):s.jsx("span",{style:{...O.noteDot,background:C.color}}),s.jsx("span",{style:{...O.noteText,...M&&X.done?{textDecoration:"line-through",color:"#9A968C"}:{}},children:X.text}),s.jsx("button",{onClick:()=>c(X.id),style:O.ghostBtn,children:s.jsx(ft,{size:12})})]},X.id))}),L.length===0&&s.jsx("div",{style:O.noNotes,children:M?"Add the steps to implement this — check each off as you do it.":`No notes yet — ${C.hint}`}),s.jsxs("div",{style:O.noteAddRow,children:[s.jsx("input",{placeholder:M?"Add a step to implement…":`Add a ${C.label} note…`,value:f,onChange:X=>j(Bt=>({...Bt,[x.id]:{...Bt[x.id],[C.id]:X.target.value}})),onKeyDown:X=>X.key==="Enter"&&b(x.id,C.id),style:O.noteInput}),s.jsx("button",{onClick:()=>b(x.id,C.id),style:{...O.noteAddBtn,background:C.color},children:s.jsx(Jr,{size:14})})]}),tt&&!((at=x.completed_stages)!=null&&at[C.id])&&s.jsxs(s.Fragment,{children:[M&&L.length>0&&!W&&s.jsxs("div",{style:O.checklistHint,children:[L.filter(X=>X.done).length,"/",L.length," done — check all steps to complete Wisdom"]}),s.jsxs("button",{onClick:()=>y(x.id,C.id),disabled:!U,style:{...O.advanceBtn,background:U?C.color:"#C3BFB5",marginTop:10,cursor:U?"pointer":"not-allowed"},children:[s.jsx(At,{size:14}),M?"Mark Wisdom complete":`Complete ${C.label} → ${(gt=fr[N+1])==null?void 0:gt.label}`]})]})]})})()]},C.id)}),x.stage==="W"&&((R=x.completed_stages)==null?void 0:R.W)&&s.jsxs("div",{style:O.wisdomDone,children:[s.jsx(Ln,{size:16,color:"#4C9A6B"})," Wisdom achieved — implemented in your life"]})]})]})]})}const O={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"#F7F6F3",minHeight:"100%",padding:"26px 22px",color:"#26241F",boxSizing:"border-box",position:"relative"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"#9A968C",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"#9A968C",marginTop:3},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},wisdomBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addSkillBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#26241F",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},filterBar:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16},filterBtn:{border:"1px solid #E0DDD5",background:"#fff",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:600,color:"#4A463E",cursor:"pointer",fontFamily:"inherit"},layout:{display:"grid",gap:12},cardList:{display:"flex",flexDirection:"column",gap:10},skillCard:{background:"#fff",borderRadius:12,padding:"14px",border:"1.5px solid #ECEAE3",cursor:"pointer",boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},skillCardTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},skillMeta:{display:"flex",alignItems:"center",gap:6},pillarDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},srcLabel:{fontSize:11,fontWeight:600,color:"#9A968C"},skillTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",marginBottom:12},cardTitle:{fontSize:13,fontWeight:700,marginBottom:10},track:{display:"flex",alignItems:"center"},trackItem:{display:"flex",alignItems:"center"},trackDot:{width:22,height:22,borderRadius:"50%",display:"grid",placeItems:"center",flexShrink:0},trackCurrent:{fontSize:9,fontWeight:800,color:"#fff"},trackLine:{width:24,height:3,borderRadius:2},stageTag:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,marginLeft:10},detail:{background:"#fff",borderRadius:14,padding:"18px 16px",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",border:"1.5px solid #ECEAE3",alignSelf:"start"},detailHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16},detailTitle:{fontSize:18,fontWeight:700,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"#F2F1EC",color:"#6B675E",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},stageBlock:{border:"1.5px solid #ECEAE3",borderRadius:10,padding:"12px 13px",marginBottom:10},stageBlockHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:8},stageLetter:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",fontSize:13,fontWeight:800,flexShrink:0},stageName:{fontSize:13,fontWeight:700},stagePrompt:{fontSize:11.5,color:"#6B675E",marginTop:2,lineHeight:1.4},doneBadge:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10,marginLeft:"auto",flexShrink:0},noteList:{margin:"0 0 8px 0",padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6},noteItem:{display:"flex",alignItems:"flex-start",gap:8,fontSize:13,lineHeight:1.4},noteDot:{width:6,height:6,borderRadius:"50%",flexShrink:0,marginTop:5},checkBox:{width:18,height:18,borderRadius:5,border:"2px solid #D9D6CE",background:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginTop:1,padding:0},checklistHint:{fontSize:11.5,color:"#9A968C",fontWeight:600,marginTop:10,textAlign:"center"},noteText:{flex:1,color:"#26241F"},noNotes:{fontSize:12,color:"#B5B1A7",fontStyle:"italic",marginBottom:8},noteAddRow:{display:"flex",gap:6},noteInput:{flex:1,border:"1px solid #E4E2DA",borderRadius:7,padding:"7px 10px",fontSize:13,fontFamily:"inherit",outline:"none"},noteAddBtn:{width:32,height:32,border:"none",borderRadius:7,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},advanceBtn:{display:"flex",alignItems:"center",gap:8,border:"none",color:"#fff",padding:"10px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},wisdomDone:{display:"flex",alignItems:"center",gap:8,justifyContent:"center",fontSize:13.5,fontWeight:700,color:"#4C9A6B",padding:12,background:"rgba(76,154,107,0.08)",borderRadius:10,marginTop:4},ghostBtn:{border:"none",background:"none",color:"#C3BFB5",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},input:{border:"1px solid #E4E2DA",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box",marginBottom:8},select:{border:"1px solid #E4E2DA",borderRadius:8,padding:"8px 10px",fontSize:12.5,fontFamily:"inherit",flex:1},addRow:{display:"flex",gap:8,marginBottom:8},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid #E4E2DA",background:"#fff",color:"#6B675E",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{fontSize:13,color:"#9A968C",padding:"32px 12px",textAlign:"center"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.55)",zIndex:50,display:"grid",placeItems:"center"},celebBox:{background:"#fff",borderRadius:20,padding:"40px 32px",textAlign:"center",maxWidth:320,boxShadow:"0 8px 40px rgba(0,0,0,0.18)"},celebEmoji:{fontSize:52,marginBottom:12},celebTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:8},celebSub:{fontSize:13.5,color:"#6B675E",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:"#4C9A6B",color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Js=[{id:"aarti",title:"Aarti",html:`<h1>॥ गणपतीची आरती ॥</h1><br/>
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
        <b>॥ इति संपूर्णंम् ॥</b><br/>`},{id:"dss",title:"Durga Saptashati",carousel:19,imageBase:"/spiritual/saptashati/saptashati_adhyay_"},{id:"mahishasur_mardini",title:"Aigiri Nandini",html:`<h1>महिषासुरमर्दिनी स्तोत्रम्</h1><br/>
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
      </div>`}];function bm(){const[t,r]=k.useState(()=>window.innerWidth<720);return k.useEffect(()=>{const e=()=>r(window.innerWidth<720);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),t}function pm({base:t,count:r}){const[e,n]=k.useState(0);return s.jsxs("div",{style:{maxWidth:560,margin:"0 auto"},children:[s.jsx("div",{style:vt.carouselFrame,children:s.jsx("img",{src:`${t}${e+1}.jpg`,alt:`Adhyay ${e+1}`,style:vt.carouselImg})}),s.jsxs("div",{style:vt.carouselNav,children:[s.jsxs("button",{onClick:()=>n(o=>(o-1+r)%r),style:vt.carouselBtn,children:[s.jsx(Hn,{size:16})," Prev"]}),s.jsxs("span",{style:vt.carouselCount,children:["Adhyay ",e+1," / ",r]}),s.jsxs("button",{onClick:()=>n(o=>(o+1)%r),style:vt.carouselBtn,children:["Next ",s.jsx(ve,{size:16})]})]})]})}function mm(){const t=bm(),[r,e]=k.useState(!1),[n,o]=k.useState("dss"),i=Js.find(d=>d.id===n)||Js[0],l=d=>{o(d),t&&e(!1)},a={...vt.sidebar,...t?vt.sidebarOverlay:{},...t&&!r?vt.sidebarHidden:{}};return s.jsxs("div",{style:vt.shell,children:[s.jsx("style",{children:fm}),t&&r&&s.jsx("div",{style:vt.backdrop,onClick:()=>e(!1)}),s.jsxs("aside",{style:a,children:[s.jsxs("div",{style:vt.sideHead,children:[s.jsx("div",{style:vt.brand,children:"Anvil · Spiritual"}),t&&s.jsx("button",{onClick:()=>e(!1),style:vt.iconBtn,children:s.jsx(ft,{size:17})})]}),s.jsx("div",{style:vt.sideScroll,children:Js.map(d=>{const g=d.id===n;return s.jsx("button",{onClick:()=>l(d.id),style:{...vt.sideItem,...g?vt.sideItemOn:{}},children:d.title},d.id)})})]}),s.jsxs("main",{style:vt.main,children:[t&&s.jsxs("button",{onClick:()=>e(!0),style:vt.hamburger,children:[s.jsx(Ql,{size:17}),s.jsx("span",{style:vt.hamburgerLabel,children:i.title})]}),s.jsxs("div",{style:vt.contentWrap,children:[i.youtube&&s.jsx("div",{style:vt.videoFrame,children:s.jsx("iframe",{src:`https://www.youtube.com/embed/${i.youtube}`,title:i.title,style:vt.video,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},i.youtube)}),i.carousel?s.jsx(pm,{base:i.imageBase,count:i.carousel}):s.jsx("div",{className:"spiritual-content",dangerouslySetInnerHTML:{__html:i.html}})]})]})]})}const fm=`
.spiritual-content { font-family: 'Inter', system-ui, sans-serif; color: #26241F; line-height: 1.9; font-size: 16px; text-align: center; }
.spiritual-content h1 { font-family: 'Fraunces', Georgia, serif; font-size: 24px; color: #8268B0; margin: 8px 0 18px; letter-spacing: -0.01em; }
.spiritual-content h2 { font-family: 'Fraunces', Georgia, serif; font-size: 18px; color: #7A5EA8; margin: 20px 0 8px; }
.spiritual-content h3 { font-size: 15px; color: #9A968C; text-transform: uppercase; letter-spacing: 0.06em; margin: 18px 0 6px; }
.spiritual-content b { color: #8268B0; }
.spiritual-content div { text-align: center; }
`,vt={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"#F7F6F3",minHeight:"100vh",color:"#26241F",position:"relative",overflow:"hidden"},sidebar:{width:240,flexShrink:0,background:"#fff",borderRight:"1px solid #ECEAE3",display:"flex",flexDirection:"column"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.15)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.35)",zIndex:20},sideHead:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 14px 12px"},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"#9A968C",fontWeight:700},sideScroll:{flex:1,overflowY:"auto",padding:"0 8px 16px"},sideItem:{display:"block",width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"#4A463E",textAlign:"left",marginBottom:2},sideItemOn:{background:"rgba(130,104,176,0.12)",color:"#8268B0",fontWeight:700},main:{flex:1,padding:"26px 22px",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid #E0DDD5",background:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"#4A463E",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:220},contentWrap:{background:"#fff",borderRadius:14,padding:"26px 28px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",maxWidth:760,margin:"0 auto"},videoFrame:{position:"relative",width:"100%",maxWidth:600,margin:"0 auto 22px",aspectRatio:"16 / 9",borderRadius:12,overflow:"hidden",background:"#000"},video:{position:"absolute",inset:0,width:"100%",height:"100%",border:"none"},carouselFrame:{background:"#FAFAF8",borderRadius:12,padding:8,border:"1px solid #ECEAE3"},carouselImg:{width:"100%",borderRadius:8,display:"block"},carouselNav:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:14},carouselBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid #E0DDD5",background:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"#4A463E",cursor:"pointer",fontFamily:"inherit"},carouselCount:{fontSize:13,fontWeight:700,color:"#8268B0",fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"none",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,color:"#6B675E"}},Br={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},vm=Object.keys(Br),ym=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],hm=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],xm=()=>new Date().toISOString().slice(0,10),wm=(t,r)=>`${hm[r-1]} ${t}`,km=(t,r)=>{const e=new Date(t,r,0).getDate();return Array.from({length:e},(n,o)=>`${t}-${String(r).padStart(2,"0")}-${String(o+1).padStart(2,"0")}`)},Sm=(t,r)=>{const e=new Date(t,r-1,1).getDay();return e===0?6:e-1};function jm(){const t=xm(),[r,e]=k.useState(new Date().getFullYear()),[n,o]=k.useState(new Date().getMonth()+1),[i,l]=k.useState([]),[a,d]=k.useState([]),[g,m]=k.useState({}),[v,p]=k.useState(null),[j,w]=k.useState(!1),[x,I]=k.useState(!1),[b,c]=k.useState({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:t}),u=k.useCallback(async()=>{const[f,D,h]=await Promise.all([J.getTopics(),J.getDueToday(),J.getCalendar(r,n)]);l(f),d(D),m(h)},[r,n]);k.useEffect(()=>{u()},[u]);const y=async f=>{await J.toggleReviewDone(f),u()},T=async()=>{const f=b.intervals.split(",").map(D=>parseInt(D.trim(),10)).filter(D=>!isNaN(D));!b.topic.trim()||f.length===0||(await J.createTopic({pillar:b.pillar,topic:b.topic.trim(),intervals:f,learned_date:b.learned_date||t}),c({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:t}),I(!1),u())},{deleteItem:z,toasts:F,handleUndo:B,handleDismiss:A}=vs(J.deleteTopic,J.restoreTopic,u),R=(f,D)=>z(f,D),C=()=>{n===1?(e(f=>f-1),o(12)):o(f=>f-1),p(null)},N=()=>{n===12?(e(f=>f+1),o(1)):o(f=>f+1),p(null)},V=i.filter(f=>!f.cemented),tt=i.filter(f=>f.cemented),it=km(r,n),H=Sm(r,n),L=v?i.flatMap(f=>f.reviews.filter(D=>D.due_date===v).map(D=>({...D,topic:f.topic,pillar:f.pillar,total:f.reviews.length}))):[];return s.jsxs("div",{style:Y.page,children:[s.jsxs("div",{style:Y.head,children:[s.jsxs("div",{children:[s.jsx("div",{style:Y.eyebrow,children:"Anvil · Revision"}),s.jsx("h1",{style:Y.h1,children:"Spaced Repetition"})]}),s.jsxs("button",{onClick:()=>I(!0),style:Y.addBtn,children:[s.jsx(Jr,{size:15})," Add topic"]})]}),x&&s.jsxs("div",{style:Y.addBox,children:[s.jsx("input",{autoFocus:!0,placeholder:"What did you learn?",value:b.topic,onChange:f=>c(D=>({...D,topic:f.target.value})),onKeyDown:f=>f.key==="Enter"&&T(),style:Y.input}),s.jsxs("div",{style:Y.addRow,children:[s.jsx("select",{value:b.pillar,onChange:f=>c(D=>({...D,pillar:f.target.value})),style:Y.select,children:vm.map(f=>s.jsx("option",{children:f},f))}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[s.jsx("label",{style:{fontSize:10,fontWeight:600,color:"#9A968C",textTransform:"uppercase"},children:"Learned on"}),s.jsx("input",{type:"date",value:b.learned_date,onChange:f=>c(D=>({...D,learned_date:f.target.value})),style:{...Y.select,fontSize:13}})]}),s.jsx("div",{style:{flex:1,minWidth:0},children:s.jsx("input",{value:b.intervals,onChange:f=>c(D=>({...D,intervals:f.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:Y.input})})]}),s.jsxs("div",{style:Y.addRow,children:[s.jsxs("button",{onClick:T,style:Y.saveBtn,children:[s.jsx(At,{size:14})," Save"]}),s.jsxs("button",{onClick:()=>I(!1),style:Y.cancelBtn,children:[s.jsx(ft,{size:14})," Cancel"]})]})]}),a.length>0&&s.jsxs("div",{style:Y.section,children:[s.jsxs("div",{style:Y.sectionTitle,children:[s.jsx($u,{size:15,color:"#C2536B"}),"Due Today",s.jsx("span",{style:Y.badge,children:a.length})]}),a.map(f=>{var h,S;const D=((h=Br[f.pillar])==null?void 0:h.dot)||"#9A968C";return s.jsxs("div",{style:{...Y.reviewCard,borderLeft:`3px solid ${D}`,...f.is_missed?{opacity:.85}:{}},children:[s.jsx("button",{onClick:()=>y(f.review_id),style:{...Y.checkbox,...f.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:f.done&&s.jsx(At,{size:12,color:"#fff",strokeWidth:3})}),s.jsxs("div",{style:{flex:1,minWidth:0},children:[s.jsx("div",{style:Y.reviewTopic,children:f.topic}),s.jsxs("div",{style:Y.reviewMeta,children:[s.jsxs("span",{style:{...Y.stageTag,background:((S=Br[f.pillar])==null?void 0:S.soft)||"rgba(0,0,0,0.05)",color:D},children:["Review ",f.stage,"/",f.total_stages]}),f.is_missed&&s.jsxs("span",{style:Y.missedTag,children:["missed · ",f.due_date]})]})]})]},f.review_id)})]}),s.jsxs("div",{style:Y.section,children:[s.jsxs("div",{style:Y.sectionTitle,children:["Active Topics ",s.jsx("span",{style:Y.badge,children:V.length})]}),V.length===0&&s.jsx("div",{style:Y.empty,children:"No active topics. Add something you learned today."}),V.map(f=>{var M,W;const D=((M=Br[f.pillar])==null?void 0:M.dot)||"#9A968C",h=((W=Br[f.pillar])==null?void 0:W.soft)||"rgba(0,0,0,0.05)",S=f.reviews.filter(U=>U.done).length;return s.jsxs("div",{style:Y.topicCard,children:[s.jsxs("div",{style:Y.topicHead,children:[s.jsx("span",{style:{...Y.dot,background:D}}),s.jsx("span",{style:Y.topicName,children:f.topic}),s.jsx("span",{style:Y.topicPillar,children:f.pillar}),s.jsxs("span",{style:Y.topicProgress,children:[S,"/",f.reviews.length," done"]}),s.jsx("button",{onClick:()=>R(f.id,f.topic),style:Y.ghostBtn,children:s.jsx(ft,{size:13})})]}),s.jsxs("div",{style:Y.reviewDots,children:[f.reviews.map(U=>{U.due_date<t;const at=U.due_date===t;return s.jsx("button",{onClick:()=>y(U.id),title:`Review ${U.stage} · ${U.due_date}${U.done?" · Done":""}`,style:{...Y.reviewDot,background:U.done?D:at?h:"#F2F1EC",border:`2px solid ${U.done||at?D:"#E4E2DA"}`,color:U.done?"#fff":D},children:U.stage},U.id)}),s.jsxs("span",{style:Y.learnedDate,children:["Learned ",f.learned_date]})]})]},f.id)})]}),tt.length>0&&s.jsxs("div",{style:Y.section,children:[s.jsxs("button",{onClick:()=>w(f=>!f),style:Y.cementedToggle,children:[j?s.jsx(Yl,{size:15}):s.jsx(ve,{size:15}),s.jsx(Ln,{size:14,color:"#C9A227"}),"Cemented",s.jsx("span",{style:{...Y.badge,background:"rgba(201,162,39,0.12)",color:"#8A6E1A"},children:tt.length})]}),j&&tt.map(f=>{var h;const D=((h=Br[f.pillar])==null?void 0:h.dot)||"#9A968C";return s.jsx("div",{style:{...Y.topicCard,opacity:.75},children:s.jsxs("div",{style:Y.topicHead,children:[s.jsx("span",{style:{...Y.dot,background:D}}),s.jsx("span",{style:Y.topicName,children:f.topic}),s.jsx("span",{style:Y.topicPillar,children:f.pillar}),s.jsx(Ln,{size:13,color:"#C9A227",style:{marginLeft:"auto"}})]})},f.id)})]}),s.jsxs("div",{style:Y.calCard,children:[s.jsxs("div",{style:Y.calHead,children:[s.jsx("button",{onClick:C,style:Y.calNav,children:"‹"}),s.jsxs("div",{style:Y.calTitle,children:[wm(r,n)," · Review Calendar"]}),s.jsx("button",{onClick:N,style:Y.calNav,children:"›"})]}),s.jsx("div",{style:Y.calDow,children:ym.map(f=>s.jsx("div",{style:Y.calDowCell,children:f},f))}),s.jsxs("div",{style:Y.calGrid,children:[Array.from({length:H}).map((f,D)=>s.jsx("div",{},`p${D}`)),it.map((f,D)=>{const h=g[f]||0,S=f===t,M=f===v,W=f<t;return s.jsxs("button",{onClick:()=>p(M?null:f),style:{...Y.calDay,background:M?"#26241F":S?"#F2F1EC":"#fff",color:M?"#fff":S?"#26241F":W?"#6B675E":"#C3BFB5",borderColor:S||M?"#26241F":"#ECEAE3",fontWeight:S||M?700:500},children:[D+1,h>0&&s.jsx("span",{style:{...Y.calBadge,background:M?"#fff":"#C2536B",color:M?"#26241F":"#fff"},children:h})]},f)})]}),v&&s.jsxs("div",{style:Y.dayDetail,children:[s.jsxs("div",{style:Y.dayDetailTitle,children:["Reviews for ",v]}),L.length===0?s.jsx("div",{style:Y.empty,children:"No reviews scheduled for this day."}):L.map(f=>{var h,S;const D=((h=Br[f.pillar])==null?void 0:h.dot)||"#9A968C";return s.jsxs("div",{style:{...Y.reviewCard,borderLeft:`3px solid ${D}`},children:[s.jsx("button",{onClick:()=>y(f.id),style:{...Y.checkbox,...f.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:f.done&&s.jsx(At,{size:12,color:"#fff",strokeWidth:3})}),s.jsxs("div",{children:[s.jsx("div",{style:Y.reviewTopic,children:f.topic}),s.jsxs("span",{style:{...Y.stageTag,background:((S=Br[f.pillar])==null?void 0:S.soft)||"rgba(0,0,0,0.05)",color:D},children:["Review ",f.stage,"/",f.total]})]})]},f.id)})]})]}),s.jsx(ys,{toasts:F,onUndo:B,onDismiss:A})]})}const Y={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"#F7F6F3",minHeight:"100%",padding:"26px 22px",color:"#26241F",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"#9A968C",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#26241F",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},addBox:{background:"#fff",borderRadius:12,padding:16,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},addRow:{display:"flex",gap:8,alignItems:"center"},input:{flex:1,border:"1px solid #E4E2DA",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",minWidth:0},select:{border:"1px solid #E4E2DA",borderRadius:8,padding:"9px 10px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid #E4E2DA",background:"#fff",color:"#6B675E",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},section:{marginBottom:20},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"#4A463E",marginBottom:10},badge:{fontSize:11,fontWeight:700,background:"#F2F1EC",color:"#6B675E",borderRadius:10,padding:"1px 7px"},reviewCard:{display:"flex",alignItems:"center",gap:12,background:"#fff",borderRadius:10,padding:"12px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},checkbox:{width:22,height:22,borderRadius:6,border:"2px solid #E0DDD5",background:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,padding:0},reviewTopic:{fontSize:13.5,fontWeight:600,marginBottom:4},reviewMeta:{display:"flex",alignItems:"center",gap:8},stageTag:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10},missedTag:{fontSize:11,color:"#C2536B",fontWeight:600},topicCard:{background:"#fff",borderRadius:12,padding:"13px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},topicHead:{display:"flex",alignItems:"center",gap:8,marginBottom:10},dot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},topicName:{fontSize:14,fontWeight:600,flex:1},topicPillar:{fontSize:11,color:"#9A968C",fontWeight:500},topicProgress:{fontSize:11,fontWeight:700,color:"#6B675E",background:"#F2F1EC",padding:"2px 7px",borderRadius:10},ghostBtn:{border:"none",background:"none",color:"#C3BFB5",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},reviewDots:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},reviewDot:{width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",fontSize:11,fontWeight:700,padding:0},learnedDate:{fontSize:11,color:"#9A968C",marginLeft:"auto"},cementedToggle:{display:"flex",alignItems:"center",gap:8,border:"none",background:"none",cursor:"pointer",fontSize:13,fontWeight:700,color:"#4A463E",padding:"4px 0",fontFamily:"inherit",marginBottom:8},empty:{fontSize:13,color:"#9A968C",padding:"16px 0",textAlign:"center"},calCard:{background:"#fff",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{border:"none",background:"none",fontSize:20,cursor:"pointer",color:"#6B675E",padding:"0 6px",lineHeight:1},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"#9A968C",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4},calDay:{aspectRatio:"1",border:"1.5px solid #ECEAE3",background:"#fff",borderRadius:8,fontSize:12,cursor:"pointer",fontFamily:"inherit",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:1,position:"relative",padding:2},calBadge:{fontSize:9,fontWeight:800,borderRadius:6,padding:"0 4px",lineHeight:"14px",minWidth:14,textAlign:"center"},dayDetail:{marginTop:16,paddingTop:16,borderTop:"1px solid #ECEAE3"},dayDetailTitle:{fontSize:13,fontWeight:700,color:"#4A463E",marginBottom:10}},bo=[{id:1,title:"Regular Habits",cards:[{id:1,text:"1. I always do everything I need to do, when I need to do it. "},{id:2,text:"2. I never argue or let my emotions work against me. "},{id:3,text:"3. I have a good memory. I easily and automatically remember any name or anything that is important to me. "},{id:4,text:"4. I eat only what I should. "},{id:5,text:"5. I am a good listener. I hear everything that is said. I am attentive, interested, and aware of everything that is going on around me. "},{id:6,text:"6. I have the courage to state my opinions. I take responsibility for myself and everything I say and do."},{id:7,text:"7. I never spend more than I earn. I am financially responsible, both for my present and for my future."},{id:8,text:"8. I set goals and I follow them. I set my sights, take the appropriate action, and achieve my goals."},{id:9,text:"9. I spend time with my family and my loved ones. I enjoy sharing their lives with mine and my life with theirs."}]},{id:2,title:"Motivational",cards:[{id:1,text:"1. I can do anything I believe I can do. I’ve got it and every day I get more of it. I have talent, skills, and ability"},{id:2,text:"2. I set goals and I reach them. I know what I want out of life. I go after it and I get it. "},{id:3,text:"3. People like me, and I feel good about myself. I have a sense of pride in whoa am and I believe in myself. Nothing seems to stop me. I have a lot of determination. "},{id:4,text:"4. I turn problems into advantages. I find possibilities in things that other people never give a chance."},{id:5,text:"5. I have a lot of energy––I am very alive. I enjoy life and I can tell it and so can others"},{id:6,text:"6. I keep myself up, looking ahead, and liking it. I know that I can accomplish anything I choose, and I refuse to let anything negative hold me back or stand in my way. I am not afraid of anything or anyone. I have strength, power, conviction, and confidence. "},{id:7,text:"7. I like challenges and I meet them head on, face to face––today especially. I am on top of the world and I’m going for it. "},{id:8,text:"8. I have a clear picture in my mind of what I want. I can see it in front of me. "},{id:9,text:"9. I know what I want and I know how to get it. I know that it’s all up to me and I know I can do it. Roadblocks don’t bother me. They just mean that I am alive and running, and I’m not going to stand still for anything. "},{id:10,text:"10. I trust myself I’ve got what it takes––plenty of it––and I know how to use it. "},{id:11,text:"11. Today, more than ever. Today I am unstoppable. I’ve got myself together and I’m getting more together every day. And today––look out world, here I come. "},{id:12,text:"12. Limitations? I don’t even recognize them as limitations. There is no challenge I can’t conquer; there is no wall I can’t climb over. "},{id:13,text:"13. There is no problem I can’t defeat or turn around and make it work for me. I stand tall. I am honest and sincere. I like to deal with people and they like me. "},{id:14,text:"14. I think well; I think clearly. I am organized; I am in control of myself, and everything about me. I call my shots and no one has to call them for me. I never blame anyone else for the circumstances of my life. "},{id:15,text:"15. I accept my failings and move past them as easily as I accept the rewards for my victories. I never demand perfection of myself, but I expect the very best of what I have to give––and that’s what I get. I never give myself excuses. "},{id:16,text:"16. I get things done on time and in the right way. Today I have the inner strength to do more than ever. I am an exceptional human being. "},{id:17,text:"17. My goals and my incredible belief in myself turn my goals into reality. I have the power to live my dreams."},{id:18,text:"18.  I believe in them like I believe in myself. And that belief is so strong that there is nothing that diminishes my undefeatable spirit. "}]},{id:3,title:"Organized planning",cards:[{id:1,text:"1. I am organized and in control of my life. I am in control of myself, my thoughts, my time, my actions, and my future. "},{id:2,text:"2. I know what to do and when to do it, and I do everything I need to do, when I need to do it. "},{id:3,text:"3. I program my mind to make the maximum use of my time. I am in control of my time and how to use it. I like being organized, efficient, and on top of things."},{id:4,text:"4. Controlling my time keeps me that way. "},{id:5,text:"5. I never waste time––I always “plan” time. And because I plan my time, I always have time to do the things I choose to do. "},{id:6,text:"6. Each day I become more organized and in control of all areas of my life––at home, at work, in my mind and in my thoughts, in everything that I do. "},{id:7,text:"7. I am very well organized. Each night I make a list of things I need to do the next day. I set my priorities and I follow them. "},{id:8,text:"8. I am always on time. I am always right where I need to be, exactly when I need to be there. "},{id:9,text:"9. Being on time is easy for me and the more I control my time and the more organized I become, the easier it is. "},{id:10,text:"10. I am in control of my feelings, my emotions, my attitudes, and my needs. I control them; they do not control me. "},{id:11,text:"11. I have the winning vote in the outcome of my own actions. And I choose to live my life by choice, not chance. Therefore, I take the time to take control."},{id:12,text:"12. I have an organized and orderly mind. Because I think in an organized way, I conduct my life in an organized manner. "},{id:13,text:"13. I think in the most positive and productive way at all times and in all things. The way I think is the way I live––and I think “right.” "},{id:14,text:"14. I am the director of my destiny. I know where I am going and I know why I am going there. My earthly life is in my hands and in my control. "},{id:15,text:"15. I control my goals and the achievement of my goals. I organize my goals by writing each of them down, along with the steps I need to reach them. One of the reasons for my success is that my goals are clearly defined and organized."},{id:16,text:"16. I am in complete control of what I think and how I think. Therefore, I choose to think only those thoughts which help me and which are of genuine benefit to me."}]},{id:4,title:"Solving Problems",cards:[{id:1,text:"1. I’m good at solving problems. I like challenges and I meet them head on. "},{id:2,text:"2. Problems are my teachers. They help me to learn and grow. Without them, I would be going nowhere. With them, I am moving forward in the direction of my own goals. "},{id:3,text:"3. There is no problem which I cannot conquer. I am strong in mind, body, and spirit. My will, my strength, and my determination are always greater than any problem I face."},{id:4,text:"4. When I meet a new problem, I do not see the problem as my enemy. I know that finding the solution to the problem will move me forward in my own personal growth."},{id:5,text:"5. Because I know that problems are a key ingredient in my spiritual and mental education and preparation, I recognize that all problems are important to me. "},{id:6,text:"6. I do not fear problems, I solve them. I do not ignore problems, I confront them. I do not avoid problems, I conquer them. "},{id:7,text:"7. I know that every problem holds within itself the keys to its own solution. Therefore, the better I understand the problem, the clearer I am able to see its solution. "},{id:8,text:"8. Having problems is not a problem for me. I am confident, self-assured, positive, and determined. I always know that I am going to overcome any problem I encounter––and I always do. "},{id:9,text:"9. I am good at breaking large obstacles down into smaller pieces that are easier to handle. And I never make any problem appear to be larger than it actually is. "},{id:10,text:"10. I never worry. I turn “worry time” into positive, constructive, “solution time.” I keep my mind alert and open to all solutions—and solutions come quickly and easily to me. "},{id:11,text:"11. I have learned to recognize that many problems carry with them benefits and potential opportunities which would not have presented themselves had the problem not occurred in the first place. "},{id:12,text:"12. I do not seek to live a life which is free from all problems. Instead, I choose to live a life of finding solutions and enjoying the benefits which those solutions create."},{id:13,text:"13. Challenge, conquer, solution, and win are words which I live by daily. Challenges are opportunities. Conquering them is the inevitable outcome. "},{id:14,text:"14. “Solutions” are the stepping stones to my success, and “Winning” is my way of life."}]},{id:5,title:"Self Esteem",cards:[{id:1,text:"1. I really am very special. I like who I am and I feel good about myself. "},{id:2,text:"2. Although I always work to improve myself and I get better every day, I like who I am today. And tomorrow, when I’m even better, I’ll like myself then, too. "},{id:3,text:"3. It’s true that there really is no one else like me in the entire world. There never was another me before, and there will never be another me again. "},{id:4,text:"4. I am unique––from the top of my head to the bottom of my feet. In some ways I may look and act and sound like some others––but I am not them. I am me."},{id:5,text:"5. I wanted to be somebody––and now I know I am I would rather be me than anyone else in the world. "},{id:6,text:"6. I like how I feel and I like how I think and I like how I do things. I approve of me and I approve of who I am."},{id:7,text:"7. I have many beautiful qualities about me. I have talents and skills and abilities. I even have talents that I don’t even know about yet. And I am discovering new talents inside myself all the time. "},{id:8,text:"8. I am positive. I am confident. I radiate good things. If you look closely, you can even see a glow around me."},{id:9,text:"9. I am full of life. I like life and I’m glad to be alive. I am a very special person, living at a very special time. "},{id:10,text:"10. I am intelligent. My mind is quick and alert and clever and fun. I think good thoughts, and my mind makes things work right for me. "},{id:11,text:"11. I have a lot of energy and enthusiasm and vitality. I am exciting and I really enjoy being me. "},{id:12,text:"12. I like to be around other people and other people like to be around me. People like to hear what I have to say and know what I have to think. "},{id:13,text:"13. I smile a lot. I am happy on the inside and I am happy on the outside. "},{id:14,text:"14. I am interested in many things. I appreciate all the blessings I have, and the things that I learn, and all the things I will learn today and tomorrow and forever––just as long as I am. "},{id:15,text:"15. I am warm, sincere, honest, and genuine. I am all of these things and more. And all of these things are me. I like who I am, and I’m glad to be me."}]},{id:6,title:"Self-Responsibility",cards:[{id:1,text:"1. I take full responsibility for everything about me––even the thoughts that I think. I am in control of the vast resources of my own mind."},{id:2,text:"2. I alone am responsible for what I do and what I tell myself about me. No one can share this responsibility with me. "},{id:3,text:"3. I also allow others to accept their responsibilities far themselves and I do not try to accept their responsibilities for them. "},{id:4,text:"4. I enjoy being responsible. It puts me in charge of being me––and that’s a challenge I enjoy. "},{id:5,text:"5. I allow no one else, at any time, to assume control or responsibility over my life or over anything that I do. My responsibility to others is an extension of my own responsibility to myself. "},{id:6,text:"6. I choose to leave nothing about me up to chance. When it comes to me––and anything in my life––I choose to CHOOSE. "},{id:7,text:"7. My choices are mine alone to make for myself. I do not, at any time, allow anyone else to make my choices for me. And I accept full responsibility for every choice and decision I make. "},{id:8,text:"8. I always meet all of the obligations which I accept. And I accept no obligations which I will not meet. "},{id:9,text:"9. I am trustworthy. I can be counted on. I have accepted winning responsibility for myself––and I always live up to the responsibilities I accept. "},{id:10,text:"10. There is no they on whom I lay the blame, or with whom I share my own personal responsibilities. I have learned the great secret of mastering my own destiny. I have learned that “they” is “me.” "},{id:11,text:"11. I have no need to make excuses and no one needs to carry my responsibility for me. I gladly carry my own weight––and I carry it well. "},{id:12,text:"12. Each day I acknowledge and accept the responsibility––not only for my own actions––but also for my emotions, my thoughts, and my attitude. "},{id:13,text:"13. I accept the responsibility for living my life in a way which creates my strengths, my happiness, my positive, healthy beliefs, and for my past, my present, and my future."}]},{id:7,title:"Freedom from worry",cards:[{id:1,text:"1. I never worry. Instead of worrying, I find solutions and I act on them. "},{id:2,text:"2. My mind is constantly in tune with the positive. It is bright, cheerful, enthusiastic, and full of good, positive thoughts and ideas. "},{id:3,text:"3. I am able to relax easily and comfortably in my body and in my mind. I am calm, confident, and self-assured. "},{id:4,text:"4. My mind is orderly and well-organized. I consciously choose what I think and I always choose those thoughts which are the most positive and beneficial for me. "},{id:5,text:"5. All of my thoughts create healthiness within me. My mind dwells only on those thoughts which create more harmony, balance, and well-being within me and in the world around me. "},{id:6,text:"6. I automatically, and always, think in a decisive and determined way. "},{id:7,text:"7. I am full of resolution and the absolute assurance of the best possible outcome in everything that I do. "},{id:8,text:"8. I choose to look at the world around me in the bright, healthy light of optimism and self-assurance. "},{id:9,text:"9. I do only those things which are best for me. I create the best within myself, I attract the best in others, and I find the best in the world around me. "},{id:10,text:"10. I willingly, and without fail, take care of the duties and obligations which I have accepted for myself."},{id:11,text:"11. I commit only to those responsibilities which I know I can fulfill. "},{id:12,text:"12. I focus the attention of my mind only on those things that I can do something about. If I cannot affect it or direct it––I accept it. "},{id:13,text:"13. I keep my mind too busy thinking good, healthy, positive, constructive, and productive thoughts to ever have any time for worry. "},{id:14,text:"14. I control the thoughts I choose. No thought, at any time, can dwell in my mind without my approval or permission. I never worry."}]},{id:8,title:"Eating Habits",cards:[{id:1,text:"1. I am in control of myself in every way––at all times and in all situations. "},{id:2,text:"2. Each time I sit down to eat I reaffirm my determination to achieve my goal. By eating right, and never giving in, I am reaching the weight I want. "},{id:3,text:"3. Whether eating in or eating out, I really enjoy eating less. "},{id:4,text:"4. I never feel the need to finish the food in front of me. I eat only what I should––and never one bite more. "},{id:5,text:"5. One way to weight-loss that’s easy and works, is less food on my plate, and less on my fork. "},{id:6,text:'6. By ordering less when I eat out, and by serving myself smaller portions at home, I keep myself aware of the importance of staying with my goal––each and every day. “Less on my plate means less on my waist."'},{id:7,text:"7. When I sit down to eat, at no time do I allow anyone else to influence, tempt, or discourage me in any negative way."},{id:8,text:"8. What I eat, and the goals I reach, are up to me. And I give no one the right to hinder or control my success."},{id:9,text:"9. Although others may benefit from my success, I. am achieving my weight-loss goals for my own personal reasons––for myself, my life, my future, and my own personal well-being."},{id:10,text:"10. I am never, at any time, tempted to take one bite more than I should. I am strong, I am capable of reaching my goal, and I am doing it."},{id:11,text:"11. Being in situations which put a lot of food in front of me is not a problem to me now. I simply say “No” to the food and “Yes” to my success."},{id:12,text:"12. I enjoy sitting down to eat. Each time I do I conquer my past, and I create a trimmer, happier, more self-confident future in front of me. "},{id:13,text:"13. When I sit down to eat, I do not need someone else to remind me of my goal, or to keep me from eating something I should not. I take full responsibility for myself, and no one else has to do it for me. "},{id:14,text:"14. Controlling my weight, and my appetite, is easy for me now. I enjoy smaller portions, smaller bites, and a slower, healthier, more relaxed way of eating. "},{id:15,text:"15. I have set my goal and I am staying with it. I have turned mealtime into “achievement time.”"}]}],vd=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#3A7CA5","#4C9A6B"],Zs=t=>vd[t%vd.length],Cm=t=>t+"1A",Vu="anvil_affirmation_favs",Im=()=>{try{return new Set(JSON.parse(localStorage.getItem(Vu)||"[]"))}catch{return new Set}};function Em(){const[t,r]=k.useState(0),[e,n]=k.useState(0),[o,i]=k.useState(Im);k.useEffect(()=>{localStorage.setItem(Vu,JSON.stringify([...o]))},[o]);const l=(I,b)=>`${I}#${b.id}`,a=t==="FAV"?bo.flatMap((I,b)=>I.cards.filter(c=>o.has(l(I.title,c))).map(c=>({...c,color:Zs(b),title:I.title}))):bo[t].cards.map(I=>({...I,color:Zs(t),title:bo[t].title})),d=a.length,g=Math.min(e,Math.max(0,d-1)),m=a[g],v=I=>{r(I),n(0)},p=k.useCallback(()=>n(I=>Math.max(0,I-1)),[]),j=k.useCallback(()=>n(I=>Math.min(d-1,I+1)),[d]);k.useEffect(()=>{const I=b=>{b.key==="ArrowLeft"&&p(),b.key==="ArrowRight"&&j()};return window.addEventListener("keydown",I),()=>window.removeEventListener("keydown",I)},[p,j]);const w=I=>i(b=>{const c=new Set(b);return c.has(I)?c.delete(I):c.add(I),c}),x=m?m.color:"#8268B0";return s.jsxs("div",{style:ut.page,children:[s.jsxs("div",{style:ut.head,children:[s.jsx("div",{style:ut.eyebrow,children:"Anvil · Affirmations"}),s.jsx("h1",{style:ut.h1,children:"Affirmations"}),s.jsx("div",{style:ut.subhead,children:"One at a time — read it, mean it."})]}),s.jsxs("div",{style:ut.filterBar,children:[bo.map((I,b)=>{const c=t===b,u=Zs(b);return s.jsxs("button",{onClick:()=>v(b),style:{...ut.chip,...c?{background:u,color:"#fff",borderColor:u}:{}},children:[s.jsx("span",{style:{...ut.catDot,background:c?"#fff":u}})," ",I.title," ",s.jsx("span",{style:ut.chipCount,children:I.cards.length})]},I.title)}),s.jsxs("button",{onClick:()=>v("FAV"),style:{...ut.chip,...t==="FAV"?{background:"#C9A227",color:"#fff",borderColor:"#C9A227"}:{}},children:[s.jsx(zo,{size:12,fill:t==="FAV"?"#fff":"none"})," Favorites ",s.jsx("span",{style:ut.chipCount,children:o.size})]})]}),d===0?s.jsxs("div",{style:ut.empty,children:[s.jsx(zo,{size:22,color:"#C3BFB5"}),s.jsx("div",{children:"No favorites yet — tap the star on a card to save it here."})]}):s.jsxs("div",{style:ut.viewer,children:[s.jsxs("div",{style:{...ut.card,borderTop:`4px solid ${x}`},children:[s.jsx("div",{style:{...ut.cardCat,color:x,background:Cm(x)},children:m.title}),s.jsx("button",{onClick:()=>w(l(m.title,m)),style:{...ut.favBtn,color:o.has(l(m.title,m))?"#C9A227":"#C3BFB5"},title:"Favorite",children:s.jsx(zo,{size:20,fill:o.has(l(m.title,m))?"#C9A227":"none"})}),s.jsx(Dp,{size:30,color:x,style:{opacity:.25}}),s.jsx("p",{style:ut.cardText,children:m.text.trim()})]}),s.jsxs("div",{style:ut.navRow,children:[s.jsxs("button",{onClick:p,disabled:g===0,style:{...ut.navBtn,...g===0?ut.navBtnDisabled:{}},children:[s.jsx(Hn,{size:18})," Back"]}),s.jsxs("span",{style:{...ut.counter,color:x},children:[g+1," ",s.jsxs("span",{style:ut.counterTotal,children:["/ ",d]})]}),s.jsxs("button",{onClick:j,disabled:g===d-1,style:{...ut.navBtn,...g===d-1?ut.navBtnDisabled:{}},children:["Next ",s.jsx(ve,{size:18})]})]}),s.jsx("div",{style:ut.dots,children:a.map((I,b)=>s.jsx("button",{onClick:()=>n(b),style:{...ut.dot,...b===g?{background:x,transform:"scale(1.5)"}:{}},title:`${b+1}`},b))})]})]})}const ut={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"#F7F6F3",minHeight:"100%",padding:"28px 24px",color:"#26241F",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"#9A968C",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"#9A968C",marginTop:4},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:22},chip:{display:"flex",alignItems:"center",gap:6,border:"1px solid #E0DDD5",background:"#fff",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:600,color:"#4A463E",cursor:"pointer",fontFamily:"inherit"},chipCount:{fontSize:11,fontWeight:700,opacity:.7},catDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},empty:{display:"flex",flexDirection:"column",alignItems:"center",gap:10,fontSize:13.5,color:"#9A968C",padding:"56px 12px",textAlign:"center",background:"#fff",borderRadius:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},viewer:{display:"flex",flexDirection:"column",alignItems:"center"},card:{position:"relative",background:"#fff",borderRadius:16,padding:"40px 32px 44px",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",width:"100%",minHeight:240,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",boxSizing:"border-box"},cardCat:{position:"absolute",top:16,left:16,fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:12,textTransform:"uppercase",letterSpacing:"0.04em"},favBtn:{position:"absolute",top:14,right:14,border:"none",background:"none",cursor:"pointer",padding:4,display:"grid",placeItems:"center"},cardText:{fontSize:21,lineHeight:1.55,margin:"14px 0 0",fontWeight:500,color:"#26241F",fontFamily:"'Fraunces',Georgia,serif",maxWidth:560},navRow:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",maxWidth:420,marginTop:22},navBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid #E0DDD5",background:"#fff",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:600,color:"#4A463E",cursor:"pointer",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},counter:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},counterTotal:{fontSize:13,fontWeight:600,color:"#9A968C"},dots:{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center",marginTop:20,maxWidth:480},dot:{width:7,height:7,borderRadius:"50%",border:"none",background:"#D9D6CE",cursor:"pointer",padding:0,transition:"transform 0.12s"}},er={financial:{label:"Financial",leaf:"#C9A227",shape:"round"},academic:{label:"Academic",leaf:"#3A7CA5",shape:"pine"},relationship:{label:"Relationship",leaf:"#C2536B",shape:"round"},spiritual:{label:"Spiritual",leaf:"#8268B0",shape:"tall"},health:{label:"Health",leaf:"#4C9A6B",shape:"round"}},Wn="health";function Zl({species:t=Wn,progress:r=1,withered:e=!1,size:n=200}){const o=Math.max(0,Math.min(1,r)),i=er[t]||er[Wn],l=e?"#8A7B63":"#7A5A3C",a=e?"#A99C84":i.leaf,d=e?"#8F8268":a,g=14+o*46,m=112-g,v=o>.14,p=v?8+o*30:0;return s.jsxs("svg",{viewBox:"0 0 120 120",width:n,height:n,style:{display:"block"},children:[s.jsx("ellipse",{cx:"60",cy:"114",rx:20+o*14,ry:"5",fill:"rgba(38,36,31,0.08)"}),!v&&s.jsxs("g",{transform:`translate(60 ${112-o*40})`,children:[s.jsx("path",{d:"M0 8 C0 8 0 -2 0 -6",stroke:"#4C9A6B",strokeWidth:"2.5",fill:"none"}),s.jsx("ellipse",{cx:"-5",cy:"-4",rx:"6",ry:"3.5",fill:"#4C9A6B",transform:"rotate(-30 -5 -4)"}),s.jsx("ellipse",{cx:"5",cy:"-4",rx:"6",ry:"3.5",fill:"#5BB07E",transform:"rotate(30 5 -4)"})]}),v&&s.jsxs(s.Fragment,{children:[s.jsx("rect",{x:60-(2+o*2.5),y:m,width:(2+o*2.5)*2,height:g,rx:"2",fill:l}),i.shape==="pine"?s.jsxs(s.Fragment,{children:[s.jsx("polygon",{points:`60,${m-p*2.2} ${60-p},${m+4} ${60+p},${m+4}`,fill:a}),s.jsx("polygon",{points:`60,${m-p*3} ${60-p*.8},${m-p*.7} ${60+p*.8},${m-p*.7}`,fill:d})]}):i.shape==="tall"?s.jsxs(s.Fragment,{children:[s.jsx("ellipse",{cx:"60",cy:m-p*.3,rx:p*.78,ry:p*1.55,fill:a}),s.jsx("ellipse",{cx:"60",cy:m-p*.9,rx:p*.5,ry:p*1,fill:d,opacity:"0.9"})]}):s.jsxs(s.Fragment,{children:[s.jsx("circle",{cx:"60",cy:m,r:p,fill:a}),s.jsx("circle",{cx:60-p*.7,cy:m+p*.3,r:p*.78,fill:a}),s.jsx("circle",{cx:60+p*.7,cy:m+p*.3,r:p*.78,fill:d}),s.jsx("circle",{cx:"60",cy:m-p*.5,r:p*.8,fill:d,opacity:"0.92"})]})]})]})}function zm({species:t}){return s.jsx(Zl,{species:t,progress:1,size:56})}const Tm=[{id:"day",label:"Day"},{id:"week",label:"Week"},{id:"month",label:"Month"},{id:"year",label:"Year"}],kr=t=>t>=60?`${Math.floor(t/60)}h ${t%60}m`:`${t}m`,Am=t=>{const r=t<12?"am":"pm",e=t%12===0?12:t%12;return`${String(e).padStart(2,"0")} ${r}`};function Dm(t){const r=t<=60?10:t<=120?20:t<=300?60:120,e=Math.max(60,Math.ceil((t||1)/r)*r),n=[];for(let o=0;o<=e;o+=r)n.push(o);return{max:e,ticks:n}}const Yu=t=>{const r=new Date(t);return r.setHours(0,0,0,0),r},Fm=t=>{const r=Yu(t),e=(r.getDay()+6)%7;return r.setDate(r.getDate()-e),r},Bm=t=>new Date(t.getFullYear(),t.getMonth(),1),Rm=t=>new Date(t.getFullYear(),0,1);function _m(t,r){if(t==="day"){const o=Yu(r);return{start:o,end:new Date(+o+864e5),prev:new Date(+o-864e5),prev2:new Date(+o-2*864e5)}}if(t==="week"){const o=Fm(r);return{start:o,end:new Date(+o+7*864e5),prev:new Date(+o-7*864e5),prev2:new Date(+o-14*864e5)}}if(t==="month"){const o=Bm(r),i=r.getFullYear(),l=r.getMonth();return{start:o,end:new Date(i,l+1,1),prev:new Date(i,l-1,1),prev2:new Date(i,l-2,1)}}const e=r.getFullYear();return{start:Rm(r),end:new Date(e+1,0,1),prev:new Date(e-1,0,1),prev2:new Date(e-2,0,1)}}function Lm({sessions:t=[],onBack:r}){const[e,n]=k.useState("day"),o=new Date,{start:i,end:l,prev:a,prev2:d}=_m(e,o),g=H=>new Date(H.started_at||H.created_at),m=t.filter(H=>H.completed),v=(H,L,f)=>{const D=g(H);return D>=L&&D<f},p=(H,L)=>m.filter(f=>v(f,H,L)).reduce((f,D)=>f+(D.actual_min||0),0),j=m.filter(H=>v(H,i,l)),w=j.reduce((H,L)=>H+(L.actual_min||0),0),x=p(a,i),I=p(d,a),b=j.length,c=Array(24).fill(0);j.forEach(H=>{c[g(H).getHours()]+=H.actual_min||0});const u=Math.max(...c,0),y=Dm(u),T={};j.forEach(H=>{const L=er[H.tree]?H.tree:Wn;T[L]=(T[L]||0)+(H.actual_min||0)});const z=Object.entries(T).map(([H,L])=>({name:er[H].label,min:L,color:er[H].leaf})).sort((H,L)=>L.min-H.min),F=x>0?Math.round((w-x)/x*100):w>0?100:0,B=F>0?Lp:F<0?_p:Ap,A=F>0?"#4C9A6B":F<0?"#C2536B":"#9A968C",R={day:"yesterday",week:"last week",month:"last month",year:"last year"}[e],C={day:"2 days ago",week:"2 weeks ago",month:"2 months ago",year:"2 years ago"}[e],N=54,V=22,tt=2*Math.PI*N;let it=0;return s.jsxs("div",{style:G.page,children:[s.jsxs("div",{style:G.topbar,children:[s.jsxs("button",{onClick:r,style:G.back,children:[s.jsx(Sp,{size:18})," Grove"]}),s.jsx("h1",{style:G.h1,children:"Insights"}),s.jsx("div",{style:{width:76}})]}),s.jsx("div",{style:G.rangeBar,children:Tm.map(H=>s.jsx("button",{onClick:()=>n(H.id),style:{...G.rangeBtn,...e===H.id?G.rangeOn:{}},children:H.label},H.id))}),s.jsxs("div",{style:G.headline,children:[s.jsxs("div",{style:G.bigStat,children:[s.jsx("div",{style:G.bigVal,children:kr(w)}),s.jsxs("div",{style:G.bigLbl,children:["Focused this ",e]})]}),s.jsxs("div",{style:G.bigStat,children:[s.jsx("div",{style:G.bigVal,children:b}),s.jsx("div",{style:G.bigLbl,children:"Trees"})]})]}),s.jsxs("div",{style:G.card,children:[s.jsxs("div",{style:G.cardHead,children:[s.jsxs("div",{style:G.cardTitle,children:["Your forest this ",e]}),s.jsx("div",{style:G.cardHint,children:"Each tree is a completed session — bigger means longer focus"})]}),s.jsx(Nm,{sessions:j}),s.jsxs("div",{style:G.forestNumber,children:[b," ",b===1?"tree":"trees"," · ",kr(w)," focused"]})]}),s.jsx(qs,{title:"Focus distribution",hint:"Minutes focused at each time of day",children:u===0?s.jsx(yd,{}):s.jsx(Mm,{hours:c,axis:y})}),s.jsx(qs,{title:"Pillar distribution",hint:"How your focus splits across the five trees",children:z.length===0?s.jsx(yd,{}):s.jsxs("div",{style:G.donutWrap,children:[s.jsxs("svg",{viewBox:"0 0 140 140",width:"150",height:"150",style:{flexShrink:0},children:[z.map(H=>{const L=H.min/(w||1)*tt,f=s.jsx("circle",{cx:"70",cy:"70",r:N,fill:"none",stroke:H.color,strokeWidth:V,strokeDasharray:`${L} ${tt-L}`,strokeDashoffset:-it,transform:"rotate(-90 70 70)"},H.name);return it+=L,f}),s.jsx("text",{x:"70",y:"66",textAnchor:"middle",style:G.donutCenterTop,children:kr(w)}),s.jsx("text",{x:"70",y:"82",textAnchor:"middle",style:G.donutCenterSub,children:"total"})]}),s.jsx("div",{style:G.legend,children:z.map(H=>s.jsxs("div",{style:G.legendRow,children:[s.jsx("span",{style:{...G.legendDot,background:H.color}}),s.jsx("span",{style:G.legendName,children:H.name}),s.jsxs("span",{style:G.legendVal,children:[kr(H.min)," · ",Math.round(H.min/(w||1)*100),"%"]})]},H.name))})]})}),s.jsxs(qs,{title:"Focus trend",hint:`This ${e} vs the previous two`,children:[s.jsxs("div",{style:G.trend3,children:[s.jsxs("div",{style:G.trendCol,children:[s.jsx("div",{style:G.trendVal,children:kr(w)}),s.jsxs("div",{style:G.trendLbl,children:["This ",e]})]}),s.jsxs("div",{style:G.trendCol,children:[s.jsx("div",{style:{...G.trendVal,color:"#6B675E"},children:kr(x)}),s.jsx("div",{style:G.trendLbl,children:R})]}),s.jsxs("div",{style:G.trendCol,children:[s.jsx("div",{style:{...G.trendVal,color:"#9A968C"},children:kr(I)}),s.jsx("div",{style:G.trendLbl,children:C})]})]}),s.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:s.jsxs("div",{style:{...G.trendBadge,color:A,background:A+"1A"},children:[s.jsx(B,{size:15})," ",F>0?"+":"",F,"% vs ",R]})}),s.jsx(Pm,{items:[{label:`This ${e}`,value:w,color:"#4C9A6B"},{label:R,value:x,color:"#C3BFB5"},{label:C,value:I,color:"#DAD6CC"}]})]})]})}const Wm=t=>t===0?"12a":t<12?`${t}a`:t===12?"12p":`${t-12}p`;function Mm({hours:t,axis:r}){return s.jsxs("div",{children:[s.jsxs("div",{style:G.vcPlot,children:[r.ticks.map(e=>s.jsxs("div",{style:{...G.vcGridRow,bottom:`${e/r.max*100}%`},children:[s.jsx("span",{style:G.vcYLabel,children:e}),s.jsx("div",{style:G.vcGridLine})]},e)),s.jsx("div",{style:G.vcBars,children:t.map((e,n)=>s.jsx("div",{style:G.vcCell,title:`${Am(n)} · ${e} min`,children:s.jsx("div",{style:{...G.vcBar,height:e>0?`max(3px, ${e/r.max*100}%)`:0}})},n))})]}),s.jsx("div",{style:G.vcXAxis,children:t.map((e,n)=>s.jsx("div",{style:G.vcXCell,children:n%3===0?Wm(n):""},n))}),s.jsx("div",{style:G.vcYTitle,children:"minutes focused, by hour of day"})]})}function Nm({sessions:t}){if(!t.length)return s.jsx("div",{style:G.sceneEmpty,children:"No trees yet this period. 🌱"});const e=t.slice(0,80),n=t.length-e.length,o=i=>Math.round(Math.max(40,Math.min(88,40+(i||0)*.6)));return s.jsxs("div",{children:[s.jsx("div",{style:G.scene,children:e.map(i=>s.jsx("div",{style:G.sceneTree,title:`${i.label||"Focus"} · ${kr(i.actual_min||i.duration_min)}`,children:s.jsx(Zl,{species:i.tree,progress:1,size:o(i.actual_min||i.duration_min)})},i.id))}),n>0&&s.jsxs("div",{style:G.overflow,children:["+",n," more trees"]})]})}function qs({title:t,hint:r,children:e}){return s.jsxs("div",{style:G.card,children:[s.jsxs("div",{style:G.cardHead,children:[s.jsx("div",{style:G.cardTitle,children:t}),r&&s.jsx("div",{style:G.cardHint,children:r})]}),e]})}function yd(){return s.jsx("div",{style:G.empty,children:"No focus sessions in this period yet. 🌱"})}function Pm({items:t}){const r=Math.max(1,...t.map(e=>e.value));return s.jsx("div",{style:G.tbWrap,children:t.map(e=>s.jsxs("div",{style:G.tbRow,children:[s.jsx("div",{style:G.tbLbl,children:e.label}),s.jsx("div",{style:G.tbTrack,children:s.jsx("div",{style:{...G.tbBar,width:`${e.value/r*100}%`,background:e.color}})}),s.jsx("div",{style:G.tbVal,children:kr(e.value)})]},e.label))})}const G={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"#F7F6F3",minHeight:"100%",padding:"20px 16px 40px",color:"#26241F",boxSizing:"border-box",maxWidth:720,margin:"0 auto"},topbar:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},back:{display:"flex",alignItems:"center",gap:5,border:"1px solid #E0DDD5",background:"#fff",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,color:"#4A463E",cursor:"pointer",fontFamily:"inherit"},h1:{fontSize:20,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},rangeBar:{display:"flex",gap:6,background:"#fff",padding:5,borderRadius:12,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},rangeBtn:{flex:1,border:"none",background:"none",padding:"9px 0",borderRadius:8,fontSize:13.5,fontWeight:600,color:"#6B675E",cursor:"pointer",fontFamily:"inherit"},rangeOn:{background:"#26241F",color:"#fff"},headline:{display:"flex",gap:12,marginBottom:16},bigStat:{flex:1,background:"#fff",borderRadius:14,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},bigVal:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em"},bigLbl:{fontSize:12,color:"#9A968C",marginTop:3,fontWeight:500},card:{background:"#fff",borderRadius:16,padding:"18px 18px 20px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},cardHead:{marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardHint:{fontSize:12,color:"#9A968C",marginTop:2},empty:{fontSize:13,color:"#9A968C",textAlign:"center",padding:"24px 0"},scene:{display:"flex",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"center",gap:"0 2px",padding:"14px 8px 6px",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,minHeight:110,border:"1px solid #ECEAE3"},sceneTree:{lineHeight:0},sceneEmpty:{fontSize:13,color:"#9A968C",textAlign:"center",padding:"34px 0",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,border:"1px solid #ECEAE3"},overflow:{fontSize:11.5,color:"#9A968C",textAlign:"center",marginTop:6,fontWeight:600},forestNumber:{textAlign:"center",marginTop:12,fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"#26241F"},vcPlot:{position:"relative",height:180,paddingLeft:30},vcGridRow:{position:"absolute",left:0,right:0,display:"flex",alignItems:"center",height:0},vcYLabel:{width:26,marginRight:4,textAlign:"right",fontSize:9,color:"#9A968C",fontWeight:600,flexShrink:0},vcGridLine:{flex:1,height:1,background:"#EEEBE4"},vcBars:{position:"absolute",left:30,right:0,top:0,bottom:0,display:"flex",alignItems:"flex-end",gap:1},vcCell:{flex:1,height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"center"},vcBar:{width:"72%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",transition:"height 0.3s"},vcXAxis:{display:"flex",marginLeft:30,marginTop:4},vcXCell:{flex:1,textAlign:"center",fontSize:8.5,color:"#9A968C",fontWeight:600,overflow:"hidden"},vcYTitle:{textAlign:"center",fontSize:9.5,color:"#9A968C",marginTop:6,letterSpacing:"0.06em",textTransform:"uppercase",fontWeight:600},donutWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap",justifyContent:"center"},donutCenterTop:{fontSize:16,fontWeight:800,fill:"#26241F",fontFamily:"'Fraunces',Georgia,serif"},donutCenterSub:{fontSize:9,fill:"#9A968C",textTransform:"uppercase",letterSpacing:"0.08em"},legend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:11,height:11,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:13,fontWeight:600,color:"#26241F",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},legendVal:{fontSize:12,color:"#9A968C",fontWeight:600,flexShrink:0},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"#9A968C",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"#6B675E",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:56,fontSize:11,color:"#6B675E",fontWeight:700,flexShrink:0,textAlign:"right"}},Om=[15,30,45,60,90],ti="anvil_grove_active",hd=t=>`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`,qo=t=>t>=60?`${Math.floor(t/60)}h ${t%60}m`:`${t}m`;function $m(){const[t,r]=k.useState("timer"),[e,n]=k.useState("idle"),[o,i]=k.useState(15),[l,a]=k.useState(!1),[d,g]=k.useState(""),[m,v]=k.useState(Wn),[p,j]=k.useState(()=>localStorage.getItem("anvil_grove_deepfocus")!=="0"),[w,x]=k.useState(15*60),[I,b]=k.useState({sessions:[],stats:null}),c=k.useRef(null),u=k.useRef(null),y=k.useRef(!1),T=k.useCallback(async()=>{try{b(await J.getFocus())}catch{}},[]),z=k.useCallback(async(S,M)=>{if(!y.current){y.current=!0,localStorage.removeItem(ti);try{await J.createFocus({label:d.trim()||null,tree:m,duration_min:o,actual_min:M,completed:S,started_at:u.current,ended_at:new Date().toISOString()})}catch{}T()}},[d,m,o,T]),F=k.useCallback(()=>{if(e!=="running")return;const S=u.current?Math.round((Date.now()-new Date(u.current).getTime())/6e4):0;n("failed"),z(!1,Math.max(0,Math.min(o,S)))},[e,o,z]),B=k.useCallback(()=>{n("done"),x(0),z(!0,o)},[o,z]);k.useEffect(()=>{T();const S=JSON.parse(localStorage.getItem(ti)||"null");if(S&&S.endTime){const M=Math.round((S.endTime-Date.now())/1e3);i(S.duration),g(S.label||""),v(S.tree||"oak"),c.current=S.endTime,u.current=S.startedAt,M>0?(x(M),n("running")):(n("done"),y.current=!1,z(!0,S.duration))}},[]),k.useEffect(()=>{if(e!=="running")return;const S=()=>{const W=Math.round((c.current-Date.now())/1e3);if(W<=0){B();return}x(W)};S();const M=setInterval(S,250);return()=>clearInterval(M)},[e,B]),k.useEffect(()=>{if(e!=="running"||!p)return;const S=()=>{document.hidden&&F()};return document.addEventListener("visibilitychange",S),()=>document.removeEventListener("visibilitychange",S)},[e,p,F]);const A=()=>j(S=>{const M=!S;return localStorage.setItem("anvil_grove_deepfocus",M?"1":"0"),M}),R=()=>{y.current=!1,u.current=new Date().toISOString(),c.current=Date.now()+o*60*1e3,localStorage.setItem(ti,JSON.stringify({endTime:c.current,duration:o,label:d,tree:m,startedAt:u.current})),x(o*60),n("running")},C=()=>{n("idle"),x(o*60)},N=S=>{a(!1),i(S),x(S*60)},V=()=>{l||(a(!0),i(5),x(5*60))},tt=S=>{if(a(!0),S===""){i(0),x(0);return}const M=Math.max(1,Math.min(600,parseInt(S,10)||0));i(M),x(M*60)},it=o*60,H=e==="running"?1-w/it:e==="done"?1:0,L=130,f=2*Math.PI*L,D=f*(1-(e==="running"?H:e==="done"?1:0)),h=I.stats;return t==="stats"?s.jsx(Lm,{sessions:I.sessions,onBack:()=>r("timer")}):s.jsxs("div",{style:K.page,children:[s.jsxs("div",{style:K.head,children:[s.jsx("div",{style:K.eyebrow,children:"Anvil · Grove"}),s.jsx("h1",{style:K.h1,children:"Grove"}),s.jsx("div",{style:K.subhead,children:"Plant a tree, stay focused, grow your grove."}),s.jsxs("button",{onClick:()=>r("stats"),style:K.insightsBtn,disabled:e==="running",children:[s.jsx(jp,{size:15})," Insights"]})]}),h&&s.jsxs("div",{style:K.statRow,children:[s.jsx(po,{label:"Today",value:qo(h.today_minutes)}),s.jsx(po,{label:"Trees",value:h.trees}),s.jsx(po,{label:"Streak",value:`${h.streak}d`}),s.jsx(po,{label:"Success",value:`${h.success_rate}%`})]}),s.jsxs("div",{style:K.stage,children:[s.jsxs("div",{style:K.ringWrap,children:[s.jsxs("svg",{width:"300",height:"300",viewBox:"0 0 300 300",style:{position:"absolute",inset:0},children:[s.jsx("circle",{cx:"150",cy:"150",r:L,fill:"none",stroke:"#ECEAE3",strokeWidth:"10"}),s.jsx("circle",{cx:"150",cy:"150",r:L,fill:"none",stroke:e==="failed"?"#C2536B":"#4C9A6B",strokeWidth:"10",strokeLinecap:"round",strokeDasharray:f,strokeDashoffset:D,transform:"rotate(-90 150 150)",style:{transition:"stroke-dashoffset 0.4s linear"}})]}),s.jsx("div",{style:K.ringInner,children:s.jsx(Zl,{species:m,progress:e==="idle"?0:H,withered:e==="failed",size:170})})]}),e==="idle"&&s.jsxs(s.Fragment,{children:[s.jsx("div",{style:K.timeBig,children:hd(o*60)}),s.jsxs("div",{style:K.controls,children:[s.jsxs("div",{style:K.chips,children:[Om.map(S=>s.jsxs("button",{onClick:()=>N(S),style:{...K.chip,...!l&&o===S?K.chipOn:{}},children:[S,"m"]},S)),s.jsx("button",{onClick:V,style:{...K.chip,...l?K.chipOn:{}},children:"Custom"})]}),l&&s.jsxs("div",{style:K.customRow,children:[s.jsx("input",{type:"number",min:"1",max:"600",inputMode:"numeric",autoFocus:!0,value:o||"",onChange:S=>tt(S.target.value),placeholder:"e.g. 50",style:K.customInput}),s.jsx("span",{style:K.customUnit,children:"minutes"})]}),s.jsx("input",{value:d,onChange:S=>g(S.target.value),placeholder:"What are you focusing on? (optional)",style:K.input,maxLength:60}),s.jsx("div",{style:K.treePick,children:Object.entries(er).map(([S,M])=>s.jsxs("button",{onClick:()=>v(S),title:M.label,style:{...K.treeBtn,...m===S?{borderColor:M.leaf,background:M.leaf+"1A"}:{}},children:[s.jsx("span",{style:{...K.treeDot,background:M.leaf}}),M.label]},S))}),s.jsxs("button",{onClick:A,style:K.toggleRow,children:[s.jsxs("div",{style:{textAlign:"left"},children:[s.jsx("div",{style:K.toggleTitle,children:"Deep Focus"}),s.jsx("div",{style:K.toggleHint,children:p?"Leaving the app kills the tree":"Tree survives until you give up"})]}),s.jsx("div",{style:{...K.switch,...p?K.switchOn:{}},children:s.jsx("div",{style:{...K.knob,...p?K.knobOn:{}}})})]}),s.jsx("button",{onClick:R,disabled:o<1,style:{...K.plantBtn,...o<1?{opacity:.5,cursor:"not-allowed"}:{}},children:"Plant tree"})]})]}),e==="running"&&s.jsxs(s.Fragment,{children:[s.jsx("div",{style:K.timeBig,children:hd(w)}),s.jsx("div",{style:K.focusLabel,children:d.trim()||"Focusing…"}),s.jsx("div",{style:p?K.warn:K.warnSoft,children:p?"⚠ Deep Focus on — leaving this app will kill your tree.":"🌿 Relaxed mode — only Give up ends this session."}),s.jsx("button",{onClick:F,style:K.giveUp,children:"Give up"})]}),e==="done"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{style:K.resultTitle,children:["🌳 You grew a ",er[m].label," tree!"]}),s.jsxs("div",{style:K.resultSub,children:[qo(o)," of focus added to your grove."]}),s.jsx("button",{onClick:C,style:K.plantBtn,children:"Plant another"})]}),e==="failed"&&s.jsxs(s.Fragment,{children:[s.jsx("div",{style:{...K.resultTitle,color:"#C2536B"},children:"Your tree withered."}),s.jsx("div",{style:K.resultSub,children:"You left before the timer finished. Try again?"}),s.jsx("button",{onClick:C,style:K.plantBtn,children:"Try again"})]})]}),s.jsx(Hm,{sessions:I.sessions,onDelete:async S=>{await J.deleteFocus(S),T()}})]})}function po({label:t,value:r}){return s.jsxs("div",{style:K.stat,children:[s.jsx("div",{style:K.statValue,children:r}),s.jsx("div",{style:K.statLabel,children:t})]})}function Hm({sessions:t,onDelete:r}){const e=t.filter(l=>l.completed);if(e.length===0)return s.jsx("div",{style:K.forestEmpty,children:"Your grove is empty. Plant your first tree above. 🌱"});const n={};for(const l of e){const a=(l.started_at||l.created_at||"").slice(0,10);(n[a]||(n[a]=[])).push(l)}const o=Object.keys(n).sort().reverse(),i=l=>{const a=new Date().toISOString().slice(0,10);return l===a?"Today":new Date(l+"T00:00").toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})};return s.jsxs("div",{style:K.forest,children:[s.jsxs("div",{style:K.forestHead,children:["Your Grove · ",e.length," trees"]}),o.map(l=>s.jsxs("div",{style:K.daySection,children:[s.jsxs("div",{style:K.dayLabel,children:[i(l)," · ",n[l].length]}),s.jsx("div",{style:K.treeGrid,children:n[l].map(a=>s.jsxs("div",{style:K.treeCard,title:`${a.label||"Focus"} · ${qo(a.actual_min)}`,onDoubleClick:()=>r(a.id),children:[s.jsx(zm,{species:a.tree}),s.jsx("div",{style:K.treeCardMin,children:qo(a.actual_min||a.duration_min)}),a.label&&s.jsx("div",{style:K.treeCardLabel,children:a.label})]},a.id))})]},l)),s.jsx("div",{style:K.forestHint,children:"Double-tap a tree to remove it."})]})}const K={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"#F7F6F3",minHeight:"100%",padding:"28px 24px",color:"#26241F",boxSizing:"border-box",maxWidth:820,margin:"0 auto"},head:{marginBottom:16,textAlign:"center"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"#9A968C",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"#9A968C",marginTop:4},insightsBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid #E0DDD5",background:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"#4A463E",cursor:"pointer",fontFamily:"inherit",marginTop:12},statRow:{display:"flex",gap:10,justifyContent:"center",marginBottom:18,flexWrap:"wrap"},stat:{background:"#fff",borderRadius:12,padding:"10px 18px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",minWidth:78},statValue:{fontSize:19,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"#26241F"},statLabel:{fontSize:11,color:"#9A968C",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},stage:{background:"#fff",borderRadius:18,padding:"28px 24px 32px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",display:"flex",flexDirection:"column",alignItems:"center",marginBottom:26},ringWrap:{position:"relative",width:300,height:300,display:"grid",placeItems:"center"},ringInner:{position:"relative",zIndex:1,display:"grid",placeItems:"center"},timeBig:{fontSize:40,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:6},focusLabel:{fontSize:14,color:"#6B675E",marginTop:2,fontWeight:500},warn:{fontSize:12,color:"#C2773B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},warnSoft:{fontSize:12,color:"#4C9A6B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},toggleRow:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,border:"1px solid #E0DDD5",background:"#fff",borderRadius:12,padding:"10px 14px",cursor:"pointer",fontFamily:"inherit",width:"100%"},toggleTitle:{fontSize:14,fontWeight:700,color:"#26241F"},toggleHint:{fontSize:11.5,color:"#9A968C",marginTop:1},switch:{width:42,height:24,borderRadius:12,background:"#D9D6CE",flexShrink:0,padding:2,transition:"background 0.18s",boxSizing:"border-box"},switchOn:{background:"#4C9A6B"},knob:{width:20,height:20,borderRadius:"50%",background:"#fff",boxShadow:"0 1px 2px rgba(0,0,0,0.2)",transform:"translateX(0)",transition:"transform 0.18s"},knobOn:{transform:"translateX(18px)"},controls:{width:"100%",maxWidth:380,display:"flex",flexDirection:"column",gap:14,marginTop:8},chips:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},chip:{border:"1px solid #E0DDD5",background:"#fff",padding:"8px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,color:"#4A463E",cursor:"pointer",fontFamily:"inherit"},chipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},customRow:{display:"flex",alignItems:"center",justifyContent:"center",gap:8},customInput:{border:"1px solid #E0DDD5",borderRadius:10,padding:"10px 12px",fontSize:15,fontWeight:700,fontFamily:"inherit",outline:"none",color:"#26241F",textAlign:"center",width:100},customUnit:{fontSize:13,color:"#9A968C",fontWeight:600},input:{border:"1px solid #E0DDD5",borderRadius:10,padding:"11px 13px",fontSize:14,fontFamily:"inherit",outline:"none",color:"#26241F",textAlign:"center"},treePick:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},treeBtn:{display:"flex",alignItems:"center",gap:6,border:"1.5px solid #E0DDD5",background:"#fff",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"#4A463E",cursor:"pointer",fontFamily:"inherit"},treeDot:{width:10,height:10,borderRadius:"50%"},plantBtn:{border:"none",background:"#26241F",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},giveUp:{border:"1px solid #E0DDD5",background:"#fff",color:"#C2536B",padding:"11px 26px",borderRadius:11,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:18},resultTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginTop:14,textAlign:"center"},resultSub:{fontSize:13.5,color:"#9A968C",marginTop:6,marginBottom:18,textAlign:"center"},forest:{background:"#fff",borderRadius:16,padding:"20px 22px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},forestHead:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},forestEmpty:{background:"#fff",borderRadius:16,padding:"40px 20px",textAlign:"center",color:"#9A968C",fontSize:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},daySection:{marginBottom:16},dayLabel:{fontSize:12,fontWeight:700,color:"#9A968C",textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:8},treeGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(80px,1fr))",gap:8},treeCard:{display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 4px",borderRadius:10,cursor:"pointer",background:"#FAFAF8"},treeCardMin:{fontSize:12,fontWeight:700,color:"#4C9A6B",marginTop:-4},treeCardLabel:{fontSize:10.5,color:"#9A968C",marginTop:2,textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:76},forestHint:{fontSize:11,color:"#C3BFB5",textAlign:"center",marginTop:6}},xd="grove_rates",ri=Object.keys(er),mr=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,wd=t=>{const r=new Date(t);r.setHours(0,0,0,0);const e=(r.getDay()+6)%7;return r.setDate(r.getDate()-e),r},mo=t=>"₹"+Math.round(t).toLocaleString("en-IN"),kd=t=>{const r=Math.floor(t/60),e=t%60;return r&&e?`${r}h ${e}m`:r?`${r}h`:`${e}m`},Um=[{id:"week",label:"This week"},{id:"month",label:"This month"},{id:"last7",label:"Last 7 days"},{id:"year",label:"This year"}];function ei(t){const r=new Date;if(t==="week")return[mr(wd(r)),mr(r)];if(t==="month")return[mr(new Date(r.getFullYear(),r.getMonth(),1)),mr(r)];if(t==="last7"){const e=new Date(r);return e.setDate(e.getDate()-6),[mr(e),mr(r)]}return t==="year"?[mr(new Date(r.getFullYear(),0,1)),mr(r)]:[mr(wd(r)),mr(r)]}function Gm(){const[t,r]=k.useState({}),[e,n]=k.useState([]),[o,i]=k.useState("week"),[l,a]=k.useState(()=>ei("week")[0]),[d,g]=k.useState(()=>ei("week")[1]),[m,v]=k.useState(!1);k.useEffect(()=>{(async()=>{try{const[u,y]=await Promise.all([J.getFocus(),J.getSetting(xd)]);n(u.sessions||[]),r(y.value||{})}catch{}v(!0)})()},[]);const p=u=>{i(u);const[y,T]=ei(u);a(y),g(T)},j=(u,y)=>{i(""),u==="from"?a(y):g(y)},w=(u,y)=>{const T=Math.max(0,parseFloat(y)||0),z={...t,[u]:T};r(z),J.setSetting(xd,z).catch(()=>{})},x=k.useMemo(()=>{const u=l,y=d,T={};return ri.forEach(z=>T[z]=0),e.filter(z=>z.completed).forEach(z=>{const F=(z.started_at||z.created_at||"").slice(0,10);if(F<u||F>y)return;const B=er[z.tree]?z.tree:Wn;T[B]+=z.actual_min||0}),ri.map(z=>{const F=T[z],B=t[z]||0;return{pillar:z,minutes:F,rate:B,cost:F/60*B,...er[z]}}).sort((z,F)=>F.cost-z.cost||F.minutes-z.minutes)},[e,t,l,d]),I=x.reduce((u,y)=>u+y.cost,0),b=x.reduce((u,y)=>u+y.minutes,0),c=Math.max(1,...x.map(u=>u.cost));return s.jsxs("div",{style:q.page,children:[s.jsxs("div",{style:q.head,children:[s.jsx("div",{style:q.eyebrow,children:"Anvil · Worth"}),s.jsx("h1",{style:q.h1,children:"Worth"}),s.jsx("div",{style:q.subhead,children:"What your focused time is worth, by pillar."})]}),s.jsxs("div",{style:q.hero,children:[s.jsx("div",{style:q.heroVal,children:mo(I)}),s.jsxs("div",{style:q.heroSub,children:[kd(b)," focused · ",l," → ",d]})]}),s.jsxs("div",{style:q.card,children:[s.jsx("div",{style:q.cardTitle,children:"Period"}),s.jsx("div",{style:q.presetRow,children:Um.map(u=>s.jsx("button",{onClick:()=>p(u.id),style:{...q.preset,...o===u.id?q.presetOn:{}},children:u.label},u.id))}),s.jsxs("div",{style:q.dateRow,children:[s.jsxs("label",{style:q.dateField,children:[s.jsx("span",{style:q.dateLbl,children:"From"}),s.jsx("input",{type:"date",value:l,max:d,onChange:u=>j("from",u.target.value),style:q.dateInput})]}),s.jsx("span",{style:q.dateArrow,children:"→"}),s.jsxs("label",{style:q.dateField,children:[s.jsx("span",{style:q.dateLbl,children:"To"}),s.jsx("input",{type:"date",value:d,min:l,onChange:u=>j("to",u.target.value),style:q.dateInput})]})]})]}),s.jsxs("div",{style:q.card,children:[s.jsx("div",{style:q.cardTitle,children:"Breakdown"}),m?b===0?s.jsx("div",{style:q.muted,children:"No focus sessions in this period."}):s.jsxs("div",{style:q.rows,children:[x.map(u=>s.jsxs("div",{style:q.row,children:[s.jsxs("div",{style:q.rowTop,children:[s.jsx("span",{style:{...q.dot,background:u.leaf}}),s.jsx("span",{style:q.rowName,children:u.label}),s.jsx("span",{style:q.rowCost,children:mo(u.cost)})]}),s.jsx("div",{style:q.rowBarTrack,children:s.jsx("div",{style:{...q.rowBar,width:`${u.cost/c*100}%`,background:u.leaf}})}),s.jsxs("div",{style:q.rowMeta,children:[kd(u.minutes)," × ",mo(u.rate),"/hr"]})]},u.pillar)),s.jsxs("div",{style:q.totalRow,children:[s.jsx("span",{children:"Total"}),s.jsx("span",{style:q.totalVal,children:mo(I)})]})]}):s.jsx("div",{style:q.muted,children:"Loading…"})]}),s.jsxs("div",{style:q.card,children:[s.jsx("div",{style:q.cardTitle,children:"Hourly rates"}),s.jsx("div",{style:q.cardHint,children:"Set how much an hour of focus is worth for each pillar."}),s.jsx("div",{style:q.rateGrid,children:ri.map(u=>s.jsxs("div",{style:q.rateRow,children:[s.jsx("span",{style:{...q.dot,background:er[u].leaf}}),s.jsx("span",{style:q.rateName,children:er[u].label}),s.jsxs("div",{style:q.rateInputWrap,children:[s.jsx("span",{style:q.rupeeSign,children:"₹"}),s.jsx("input",{type:"number",min:"0",inputMode:"numeric",placeholder:"0",value:t[u]??"",onChange:y=>w(u,y.target.value),style:q.rateInput}),s.jsx("span",{style:q.perHr,children:"/hr"})]})]},u))})]})]})}const q={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"#F7F6F3",minHeight:"100%",padding:"28px 20px 40px",color:"#26241F",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"#9A968C",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"#9A968C",marginTop:4},hero:{background:"linear-gradient(135deg,#26241F,#3A352C)",borderRadius:16,padding:"22px 24px",color:"#fff",marginBottom:16,textAlign:"center"},heroVal:{fontSize:38,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em"},heroSub:{fontSize:12.5,color:"#C9C4B8",marginTop:4},card:{background:"#fff",borderRadius:16,padding:"18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},cardHint:{fontSize:12,color:"#9A968C",marginTop:-8,marginBottom:12},muted:{fontSize:13,color:"#9A968C",textAlign:"center",padding:"16px 0"},presetRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},preset:{border:"1px solid #E0DDD5",background:"#fff",padding:"7px 13px",borderRadius:18,fontSize:12.5,fontWeight:600,color:"#4A463E",cursor:"pointer",fontFamily:"inherit"},presetOn:{background:"#26241F",color:"#fff",borderColor:"#26241F"},dateRow:{display:"flex",alignItems:"flex-end",gap:10},dateField:{display:"flex",flexDirection:"column",gap:4,flex:1},dateLbl:{fontSize:11,color:"#6B675E",fontWeight:600},dateInput:{border:"1px solid #E0DDD5",borderRadius:9,padding:"9px 10px",fontSize:13.5,fontFamily:"inherit",color:"#26241F",outline:"none",width:"100%",boxSizing:"border-box"},dateArrow:{color:"#9A968C",paddingBottom:9},rows:{display:"flex",flexDirection:"column",gap:14},row:{},rowTop:{display:"flex",alignItems:"center",gap:8,marginBottom:6},dot:{width:11,height:11,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:14,fontWeight:600},rowCost:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},rowBarTrack:{height:8,background:"#F2F0EA",borderRadius:4,overflow:"hidden"},rowBar:{height:"100%",borderRadius:4,transition:"width 0.3s"},rowMeta:{fontSize:11.5,color:"#9A968C",marginTop:5,fontWeight:500},totalRow:{display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid #ECEAE3",paddingTop:12,marginTop:2,fontSize:14,fontWeight:700},totalVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},rateGrid:{display:"flex",flexDirection:"column",gap:10},rateRow:{display:"flex",alignItems:"center",gap:8},rateName:{flex:1,fontSize:14,fontWeight:600},rateInputWrap:{display:"flex",alignItems:"center",gap:3,border:"1px solid #E0DDD5",borderRadius:9,padding:"4px 10px",background:"#FAFAF8"},rupeeSign:{fontSize:14,color:"#6B675E",fontWeight:600},rateInput:{border:"none",background:"none",outline:"none",width:64,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"#26241F",textAlign:"right"},perHr:{fontSize:12,color:"#9A968C",fontWeight:600}};function Vm({onAuthed:t}){const[r,e]=k.useState("login"),[n,o]=k.useState(""),[i,l]=k.useState(""),[a,d]=k.useState(""),[g,m]=k.useState(""),[v,p]=k.useState(!1),j=r==="register",w=async x=>{if(x.preventDefault(),m(""),!i.trim()||!a){m("Email and password are required.");return}if(j&&a.length<6){m("Password must be at least 6 characters.");return}p(!0);try{const I=j?await J.register({name:n,email:i,password:a}):await J.login({email:i,password:a});Np(I.token),t(I.user)}catch(I){m(I.message||"Something went wrong.")}finally{p(!1)}};return s.jsx("div",{style:St.page,children:s.jsxs("form",{style:St.card,onSubmit:w,children:[s.jsxs("div",{style:St.brand,children:[s.jsx("div",{style:St.logo,children:"B"}),s.jsx("span",{style:St.brandName,children:"Anvil"})]}),s.jsx("h1",{style:St.title,children:j?"Create your account":"Welcome back"}),s.jsx("p",{style:St.sub,children:j?"Start forging your days.":"Sign in to continue."}),j&&s.jsxs("label",{style:St.field,children:[s.jsx("span",{style:St.label,children:"Name"}),s.jsx("input",{value:n,onChange:x=>o(x.target.value),placeholder:"Your name",style:St.input,autoFocus:!0})]}),s.jsxs("label",{style:St.field,children:[s.jsx("span",{style:St.label,children:"Email"}),s.jsx("input",{type:"email",value:i,onChange:x=>l(x.target.value),placeholder:"you@example.com",style:St.input,autoFocus:!j})]}),s.jsxs("label",{style:St.field,children:[s.jsx("span",{style:St.label,children:"Password"}),s.jsx("input",{type:"password",value:a,onChange:x=>d(x.target.value),placeholder:"••••••••",style:St.input})]}),g&&s.jsx("div",{style:St.error,children:g}),s.jsx("button",{type:"submit",disabled:v,style:{...St.submit,...v?{opacity:.6}:{}},children:v?"Please wait…":j?"Create account":"Sign in"}),s.jsxs("div",{style:St.switch,children:[j?"Already have an account?":"New here?"," ",s.jsx("button",{type:"button",onClick:()=>{e(j?"login":"register"),m("")},style:St.link,children:j?"Sign in":"Create one"})]})]})})}const St={page:{minHeight:"100vh",display:"grid",placeItems:"center",background:"#F7F6F3",fontFamily:"'Inter',system-ui,sans-serif",padding:20},card:{width:"100%",maxWidth:380,background:"#fff",borderRadius:16,padding:"32px 28px",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",display:"flex",flexDirection:"column"},brand:{display:"flex",alignItems:"center",gap:9,marginBottom:20},logo:{width:32,height:32,borderRadius:8,background:"#26241F",color:"#fff",display:"grid",placeItems:"center",fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},brandName:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",color:"#26241F"},title:{fontSize:22,fontWeight:700,margin:"0 0 4px",fontFamily:"'Fraunces',Georgia,serif",color:"#26241F"},sub:{fontSize:13.5,color:"#9A968C",margin:"0 0 22px"},field:{display:"flex",flexDirection:"column",gap:5,marginBottom:14},label:{fontSize:12,fontWeight:600,color:"#6B675E"},input:{border:"1px solid #E0DDD5",borderRadius:9,padding:"11px 12px",fontSize:14,fontFamily:"inherit",outline:"none",color:"#26241F"},error:{background:"rgba(194,83,107,0.10)",color:"#C2536B",fontSize:13,padding:"9px 12px",borderRadius:8,marginBottom:14,fontWeight:500},submit:{border:"none",background:"#26241F",color:"#fff",padding:"12px",borderRadius:10,fontSize:14.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},switch:{fontSize:13,color:"#6B675E",textAlign:"center",marginTop:18},link:{border:"none",background:"none",color:"#3A7CA5",fontWeight:700,cursor:"pointer",fontFamily:"inherit",fontSize:13,padding:0}},ni={habits:{label:"Habits",icon:Fp,component:tm},quadrant:{label:"Quadrant",icon:Pu,component:Vp},goals:{label:"Goals",icon:Kl,component:Qp},grove:{label:"Grove",icon:Rp,component:$m},worth:{label:"Worth",icon:zp,component:Gm},journal:{label:"Journal",icon:Mu,component:um},revision:{label:"Revision",icon:$u,component:jm},affirmations:{label:"Affirmations",icon:Hu,component:Em},skills:{label:"Skills",icon:Ip,component:cm},spiritual:{label:"Spiritual",icon:zo,component:mm}},Ym=[{type:"item",id:"habits"},{type:"item",id:"quadrant"},{type:"item",id:"goals"},{type:"item",id:"grove"},{type:"item",id:"journal"},{type:"item",id:"revision"},{type:"item",id:"affirmations"},{type:"item",id:"skills"},{type:"item",id:"spiritual"},{type:"item",id:"worth"}];function Qm(){const[t,r]=k.useState(()=>window.innerWidth<720);return k.useEffect(()=>{const e=()=>r(window.innerWidth<720);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),t}function Km(){const[t,r]=k.useState("habits"),[e,n]=k.useState(!1),[o,i]=k.useState({spiritual:!0}),[l,a]=k.useState(null),[d,g]=k.useState(!1),m=Qm();k.useEffect(()=>{let c=!1;const u=()=>{Xi(),a(null)};return window.addEventListener("anvil-unauthorized",u),Jl()?J.me().then(y=>{c||a(y)}).catch(()=>{}).finally(()=>{c||g(!0)}):g(!0),()=>{c=!0,window.removeEventListener("anvil-unauthorized",u)}},[]);function v(c){r(c),n(!1)}const p=c=>i(u=>({...u,[c]:!u[c]})),j=()=>{Xi(),a(null)};if(!d)return s.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:"'Inter',system-ui,sans-serif",color:"#9A968C"},children:"Loading…"});if(!l)return s.jsx(Vm,{onAuthed:a});const w=ni[t],x=w.component,I=()=>s.jsx("div",{style:ot.navItems,children:Ym.map(c=>{if(c.type==="group"){const z=o[c.id],F=c.icon,B=c.children.includes(t);return s.jsxs("div",{children:[s.jsxs("button",{onClick:()=>p(c.id),style:{...ot.navItem,...B&&!z?ot.navItemOn:{}},children:[s.jsx(F,{size:18}),s.jsx("span",{style:ot.navLabel,children:c.label}),z?s.jsx(Yl,{size:15}):s.jsx(ve,{size:15})]}),z&&c.children.map(A=>{const R=ni[A],C=R.icon,N=t===A;return s.jsxs("button",{onClick:()=>v(A),title:R.label,style:{...ot.navItem,...ot.navChild,...N?ot.navItemOn:{}},children:[s.jsx(C,{size:16}),s.jsx("span",{style:ot.navLabel,children:R.label})]},A)})]},c.id)}const u=ni[c.id],y=u.icon,T=t===c.id;return s.jsxs("button",{onClick:()=>v(c.id),title:u.label,style:{...ot.navItem,...T?ot.navItemOn:{}},children:[s.jsx(y,{size:18}),s.jsx("span",{style:ot.navLabel,children:u.label})]},c.id)})}),b=()=>s.jsxs("div",{style:ot.userFooter,children:[s.jsxs("div",{style:ot.userInfo,children:[s.jsx("div",{style:ot.userAvatar,children:(l.name||l.email||"?").charAt(0).toUpperCase()}),s.jsxs("div",{style:{minWidth:0},children:[s.jsx("div",{style:ot.userName,children:l.name||"You"}),s.jsx("div",{style:ot.userEmail,children:l.email})]})]}),s.jsx("button",{onClick:j,style:ot.logoutBtn,title:"Sign out",children:s.jsx(Tp,{size:16})})]});return s.jsxs("div",{style:ot.shell,children:[!m&&s.jsxs("nav",{style:ot.nav,children:[s.jsxs("div",{style:ot.brand,children:[s.jsx("div",{style:ot.brandLogo,children:"B"}),s.jsx("span",{style:ot.brandName,children:"Anvil"})]}),s.jsx(I,{}),s.jsx(b,{})]}),m&&e&&s.jsx("div",{style:ot.overlay,onClick:()=>n(!1),children:s.jsxs("nav",{style:ot.drawer,onClick:c=>c.stopPropagation(),children:[s.jsxs("div",{style:ot.drawerHeader,children:[s.jsxs("div",{style:ot.brand,children:[s.jsx("div",{style:ot.brandLogo,children:"B"}),s.jsx("span",{style:ot.brandName,children:"Anvil"})]}),s.jsx("button",{style:ot.closeBtn,onClick:()=>n(!1),children:s.jsx(ft,{size:20})})]}),s.jsx(I,{}),s.jsx(b,{})]})}),s.jsxs("div",{style:ot.content,children:[m&&s.jsxs("div",{style:ot.topBar,children:[s.jsx("button",{style:ot.menuBtn,onClick:()=>n(!0),children:s.jsx(Ql,{size:22})}),s.jsx("span",{style:ot.topBarTitle,children:w.label}),s.jsx("div",{style:{width:38}})]}),s.jsx("main",{style:ot.main,children:s.jsx(x,{})})]})]})}const ot={shell:{display:"flex",height:"100vh",overflow:"hidden",fontFamily:"'Inter', system-ui, sans-serif",background:"#F7F6F3"},nav:{width:200,flexShrink:0,background:"#fff",borderRight:"1px solid #ECEAE3",display:"flex",flexDirection:"column",padding:"20px 10px",gap:2},brand:{display:"flex",alignItems:"center",gap:9,padding:"6px 10px 20px",borderBottom:"1px solid #ECEAE3",marginBottom:8},brandLogo:{width:30,height:30,borderRadius:8,background:"#26241F",color:"#fff",display:"grid",placeItems:"center",fontSize:14,fontWeight:800,fontFamily:"'Fraunces', Georgia, serif",flexShrink:0},brandName:{fontSize:16,fontWeight:700,letterSpacing:"-0.01em",color:"#26241F",fontFamily:"'Fraunces', Georgia, serif"},navItems:{display:"flex",flexDirection:"column",gap:2},navItem:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"#6B675E",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},navItemOn:{background:"#F2F1EC",color:"#26241F",fontWeight:700},navChild:{paddingLeft:30,fontSize:13},userFooter:{marginTop:"auto",paddingTop:12,borderTop:"1px solid #ECEAE3",display:"flex",alignItems:"center",gap:8},userInfo:{display:"flex",alignItems:"center",gap:8,flex:1,minWidth:0},userAvatar:{width:30,height:30,borderRadius:"50%",background:"#8268B0",color:"#fff",display:"grid",placeItems:"center",fontSize:13,fontWeight:700,flexShrink:0},userName:{fontSize:13,fontWeight:600,color:"#26241F",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},userEmail:{fontSize:11,color:"#9A968C",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logoutBtn:{border:"1px solid #E0DDD5",background:"#fff",color:"#6B675E",cursor:"pointer",padding:7,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},navLabel:{flex:1},content:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},main:{flex:1,overflowY:"auto",overflowX:"hidden"},topBar:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"#fff",borderBottom:"1px solid #ECEAE3",flexShrink:0},topBarTitle:{fontSize:16,fontWeight:700,color:"#26241F",fontFamily:"'Fraunces', Georgia, serif"},menuBtn:{border:"none",background:"none",cursor:"pointer",color:"#26241F",padding:8,borderRadius:8,display:"grid",placeItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:100,display:"flex"},drawer:{width:220,background:"#fff",height:"100%",display:"flex",flexDirection:"column",padding:"16px 10px",gap:2,boxShadow:"4px 0 24px rgba(0,0,0,0.12)"},drawerHeader:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:4},closeBtn:{border:"none",background:"none",cursor:"pointer",color:"#6B675E",padding:6,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0}};_u(document.getElementById("root")).render(s.jsx(k.StrictMode,{children:s.jsx(Km,{})}));
