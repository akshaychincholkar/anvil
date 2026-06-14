(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();var nd={exports:{}},Uo={},od={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dn=Symbol.for("react.element"),Eu=Symbol.for("react.portal"),zu=Symbol.for("react.fragment"),Tu=Symbol.for("react.strict_mode"),Au=Symbol.for("react.profiler"),Du=Symbol.for("react.provider"),Bu=Symbol.for("react.context"),Fu=Symbol.for("react.forward_ref"),_u=Symbol.for("react.suspense"),Ru=Symbol.for("react.memo"),Lu=Symbol.for("react.lazy"),Ml=Symbol.iterator;function Nu(t){return t===null||typeof t!="object"?null:(t=Ml&&t[Ml]||t["@@iterator"],typeof t=="function"?t:null)}var sd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},id=Object.assign,ld={};function We(t,r,e){this.props=t,this.context=r,this.refs=ld,this.updater=e||sd}We.prototype.isReactComponent={};We.prototype.setState=function(t,r){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,r,"setState")};We.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ad(){}ad.prototype=We.prototype;function Pi(t,r,e){this.props=t,this.context=r,this.refs=ld,this.updater=e||sd}var Wi=Pi.prototype=new ad;Wi.constructor=Pi;id(Wi,We.prototype);Wi.isPureReactComponent=!0;var Pl=Array.isArray,dd=Object.prototype.hasOwnProperty,Oi={current:null},gd={key:!0,ref:!0,__self:!0,__source:!0};function ud(t,r,e){var n,o={},s=null,l=null;if(r!=null)for(n in r.ref!==void 0&&(l=r.ref),r.key!==void 0&&(s=""+r.key),r)dd.call(r,n)&&!gd.hasOwnProperty(n)&&(o[n]=r[n]);var a=arguments.length-2;if(a===1)o.children=e;else if(1<a){for(var d=Array(a),g=0;g<a;g++)d[g]=arguments[g+2];o.children=d}if(t&&t.defaultProps)for(n in a=t.defaultProps,a)o[n]===void 0&&(o[n]=a[n]);return{$$typeof:Dn,type:t,key:s,ref:l,props:o,_owner:Oi.current}}function Mu(t,r){return{$$typeof:Dn,type:t.type,key:r,ref:t.ref,props:t.props,_owner:t._owner}}function $i(t){return typeof t=="object"&&t!==null&&t.$$typeof===Dn}function Pu(t){var r={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(e){return r[e]})}var Wl=/\/+/g;function gs(t,r){return typeof t=="object"&&t!==null&&t.key!=null?Pu(""+t.key):r.toString(36)}function io(t,r,e,n,o){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case Dn:case Eu:l=!0}}if(l)return l=t,o=o(l),t=n===""?"."+gs(l,0):n,Pl(o)?(e="",t!=null&&(e=t.replace(Wl,"$&/")+"/"),io(o,r,e,"",function(g){return g})):o!=null&&($i(o)&&(o=Mu(o,e+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Wl,"$&/")+"/")+t)),r.push(o)),1;if(l=0,n=n===""?".":n+":",Pl(t))for(var a=0;a<t.length;a++){s=t[a];var d=n+gs(s,a);l+=io(s,r,e,d,o)}else if(d=Nu(t),typeof d=="function")for(t=d.call(t),a=0;!(s=t.next()).done;)s=s.value,d=n+gs(s,a++),l+=io(s,r,e,d,o);else if(s==="object")throw r=String(t),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return l}function Mn(t,r,e){if(t==null)return t;var n=[],o=0;return io(t,n,"","",function(s){return r.call(e,s,o++)}),n}function Wu(t){if(t._status===-1){var r=t._result;r=r(),r.then(function(e){(t._status===0||t._status===-1)&&(t._status=1,t._result=e)},function(e){(t._status===0||t._status===-1)&&(t._status=2,t._result=e)}),t._status===-1&&(t._status=0,t._result=r)}if(t._status===1)return t._result.default;throw t._result}var Nt={current:null},lo={transition:null},Ou={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:lo,ReactCurrentOwner:Oi};function bd(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:Mn,forEach:function(t,r,e){Mn(t,function(){r.apply(this,arguments)},e)},count:function(t){var r=0;return Mn(t,function(){r++}),r},toArray:function(t){return Mn(t,function(r){return r})||[]},only:function(t){if(!$i(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};J.Component=We;J.Fragment=zu;J.Profiler=Au;J.PureComponent=Pi;J.StrictMode=Tu;J.Suspense=_u;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ou;J.act=bd;J.cloneElement=function(t,r,e){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=id({},t.props),o=t.key,s=t.ref,l=t._owner;if(r!=null){if(r.ref!==void 0&&(s=r.ref,l=Oi.current),r.key!==void 0&&(o=""+r.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(d in r)dd.call(r,d)&&!gd.hasOwnProperty(d)&&(n[d]=r[d]===void 0&&a!==void 0?a[d]:r[d])}var d=arguments.length-2;if(d===1)n.children=e;else if(1<d){a=Array(d);for(var g=0;g<d;g++)a[g]=arguments[g+2];n.children=a}return{$$typeof:Dn,type:t.type,key:o,ref:s,props:n,_owner:l}};J.createContext=function(t){return t={$$typeof:Bu,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Du,_context:t},t.Consumer=t};J.createElement=ud;J.createFactory=function(t){var r=ud.bind(null,t);return r.type=t,r};J.createRef=function(){return{current:null}};J.forwardRef=function(t){return{$$typeof:Fu,render:t}};J.isValidElement=$i;J.lazy=function(t){return{$$typeof:Lu,_payload:{_status:-1,_result:t},_init:Wu}};J.memo=function(t,r){return{$$typeof:Ru,type:t,compare:r===void 0?null:r}};J.startTransition=function(t){var r=lo.transition;lo.transition={};try{t()}finally{lo.transition=r}};J.unstable_act=bd;J.useCallback=function(t,r){return Nt.current.useCallback(t,r)};J.useContext=function(t){return Nt.current.useContext(t)};J.useDebugValue=function(){};J.useDeferredValue=function(t){return Nt.current.useDeferredValue(t)};J.useEffect=function(t,r){return Nt.current.useEffect(t,r)};J.useId=function(){return Nt.current.useId()};J.useImperativeHandle=function(t,r,e){return Nt.current.useImperativeHandle(t,r,e)};J.useInsertionEffect=function(t,r){return Nt.current.useInsertionEffect(t,r)};J.useLayoutEffect=function(t,r){return Nt.current.useLayoutEffect(t,r)};J.useMemo=function(t,r){return Nt.current.useMemo(t,r)};J.useReducer=function(t,r,e){return Nt.current.useReducer(t,r,e)};J.useRef=function(t){return Nt.current.useRef(t)};J.useState=function(t){return Nt.current.useState(t)};J.useSyncExternalStore=function(t,r,e){return Nt.current.useSyncExternalStore(t,r,e)};J.useTransition=function(){return Nt.current.useTransition()};J.version="18.3.1";od.exports=J;var I=od.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $u=I,Hu=Symbol.for("react.element"),Uu=Symbol.for("react.fragment"),Vu=Object.prototype.hasOwnProperty,Gu=$u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Qu={key:!0,ref:!0,__self:!0,__source:!0};function cd(t,r,e){var n,o={},s=null,l=null;e!==void 0&&(s=""+e),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(l=r.ref);for(n in r)Vu.call(r,n)&&!Qu.hasOwnProperty(n)&&(o[n]=r[n]);if(t&&t.defaultProps)for(n in r=t.defaultProps,r)o[n]===void 0&&(o[n]=r[n]);return{$$typeof:Hu,type:t,key:s,ref:l,props:o,_owner:Gu.current}}Uo.Fragment=Uu;Uo.jsx=cd;Uo.jsxs=cd;nd.exports=Uo;var i=nd.exports,md={exports:{}},Yt={},pd={exports:{}},fd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function r(m,T){var y=m.length;m.push(T);t:for(;0<y;){var D=y-1>>>1,W=m[D];if(0<o(W,T))m[D]=T,m[y]=W,y=D;else break t}}function e(m){return m.length===0?null:m[0]}function n(m){if(m.length===0)return null;var T=m[0],y=m.pop();if(y!==T){m[0]=y;t:for(var D=0,W=m.length,tt=W>>>1;D<tt;){var Y=2*(D+1)-1,ft=m[Y],wt=Y+1,V=m[wt];if(0>o(ft,y))wt<W&&0>o(V,ft)?(m[D]=V,m[wt]=y,D=wt):(m[D]=ft,m[Y]=y,D=Y);else if(wt<W&&0>o(V,y))m[D]=V,m[wt]=y,D=wt;else break t}}return T}function o(m,T){var y=m.sortIndex-T.sortIndex;return y!==0?y:m.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var l=Date,a=l.now();t.unstable_now=function(){return l.now()-a}}var d=[],g=[],p=1,f=null,v=3,j=!1,w=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(m){for(var T=e(g);T!==null;){if(T.callback===null)n(g);else if(T.startTime<=m)n(g),T.sortIndex=T.expirationTime,r(d,T);else break;T=e(g)}}function h(m){if(x=!1,b(m),!w)if(e(d)!==null)w=!0,gt(A);else{var T=e(g);T!==null&&E(h,T.startTime-m)}}function A(m,T){w=!1,x&&(x=!1,c(_),_=-1),j=!0;var y=v;try{for(b(T),f=e(d);f!==null&&(!(f.expirationTime>T)||m&&!k());){var D=f.callback;if(typeof D=="function"){f.callback=null,v=f.priorityLevel;var W=D(f.expirationTime<=T);T=t.unstable_now(),typeof W=="function"?f.callback=W:f===e(d)&&n(d),b(T)}else n(d);f=e(d)}if(f!==null)var tt=!0;else{var Y=e(g);Y!==null&&E(h,Y.startTime-T),tt=!1}return tt}finally{f=null,v=y,j=!1}}var R=!1,L=null,_=-1,z=5,F=-1;function k(){return!(t.unstable_now()-F<z)}function N(){if(L!==null){var m=t.unstable_now();F=m;var T=!0;try{T=L(!0,m)}finally{T?H():(R=!1,L=null)}}else R=!1}var H;if(typeof u=="function")H=function(){u(N)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,ot=K.port2;K.port1.onmessage=N,H=function(){ot.postMessage(null)}}else H=function(){S(N,0)};function gt(m){L=m,R||(R=!0,H())}function E(m,T){_=S(function(){m(t.unstable_now())},T)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(m){m.callback=null},t.unstable_continueExecution=function(){w||j||(w=!0,gt(A))},t.unstable_forceFrameRate=function(m){0>m||125<m?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<m?Math.floor(1e3/m):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return e(d)},t.unstable_next=function(m){switch(v){case 1:case 2:case 3:var T=3;break;default:T=v}var y=v;v=T;try{return m()}finally{v=y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(m,T){switch(m){case 1:case 2:case 3:case 4:case 5:break;default:m=3}var y=v;v=m;try{return T()}finally{v=y}},t.unstable_scheduleCallback=function(m,T,y){var D=t.unstable_now();switch(typeof y=="object"&&y!==null?(y=y.delay,y=typeof y=="number"&&0<y?D+y:D):y=D,m){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=y+W,m={id:p++,callback:T,priorityLevel:m,startTime:y,expirationTime:W,sortIndex:-1},y>D?(m.sortIndex=y,r(g,m),e(d)===null&&m===e(g)&&(x?(c(_),_=-1):x=!0,E(h,y-D))):(m.sortIndex=W,r(d,m),w||j||(w=!0,gt(A))),m},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(m){var T=v;return function(){var y=v;v=T;try{return m.apply(this,arguments)}finally{v=y}}}})(fd);pd.exports=fd;var Yu=pd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ku=I,Qt=Yu;function B(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,e=1;e<arguments.length;e++)r+="&args[]="+encodeURIComponent(arguments[e]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vd=new Set,cn={};function ae(t,r){Be(t,r),Be(t+"Capture",r)}function Be(t,r){for(cn[t]=r,t=0;t<r.length;t++)vd.add(r[t])}var wr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Us=Object.prototype.hasOwnProperty,Xu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ol={},$l={};function Ju(t){return Us.call($l,t)?!0:Us.call(Ol,t)?!1:Xu.test(t)?$l[t]=!0:(Ol[t]=!0,!1)}function Zu(t,r,e,n){if(e!==null&&e.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return n?!1:e!==null?!e.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qu(t,r,e,n){if(r===null||typeof r>"u"||Zu(t,r,e,n))return!0;if(n)return!1;if(e!==null)switch(e.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Mt(t,r,e,n,o,s,l){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=e,this.propertyName=t,this.type=r,this.sanitizeURL=s,this.removeEmptyString=l}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){zt[t]=new Mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];zt[r]=new Mt(r,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){zt[t]=new Mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){zt[t]=new Mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){zt[t]=new Mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){zt[t]=new Mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){zt[t]=new Mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){zt[t]=new Mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){zt[t]=new Mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hi=/[\-:]([a-z])/g;function Ui(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(Hi,Ui);zt[r]=new Mt(r,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(Hi,Ui);zt[r]=new Mt(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(Hi,Ui);zt[r]=new Mt(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){zt[t]=new Mt(t,1,!1,t.toLowerCase(),null,!1,!1)});zt.xlinkHref=new Mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){zt[t]=new Mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vi(t,r,e,n){var o=zt.hasOwnProperty(r)?zt[r]:null;(o!==null?o.type!==0:n||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(qu(r,e,o,n)&&(e=null),n||o===null?Ju(r)&&(e===null?t.removeAttribute(r):t.setAttribute(r,""+e)):o.mustUseProperty?t[o.propertyName]=e===null?o.type===3?!1:"":e:(r=o.attributeName,n=o.attributeNamespace,e===null?t.removeAttribute(r):(o=o.type,e=o===3||o===4&&e===!0?"":""+e,n?t.setAttributeNS(n,r,e):t.setAttribute(r,e))))}var Cr=Ku.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pn=Symbol.for("react.element"),ce=Symbol.for("react.portal"),me=Symbol.for("react.fragment"),Gi=Symbol.for("react.strict_mode"),Vs=Symbol.for("react.profiler"),yd=Symbol.for("react.provider"),hd=Symbol.for("react.context"),Qi=Symbol.for("react.forward_ref"),Gs=Symbol.for("react.suspense"),Qs=Symbol.for("react.suspense_list"),Yi=Symbol.for("react.memo"),zr=Symbol.for("react.lazy"),xd=Symbol.for("react.offscreen"),Hl=Symbol.iterator;function He(t){return t===null||typeof t!="object"?null:(t=Hl&&t[Hl]||t["@@iterator"],typeof t=="function"?t:null)}var pt=Object.assign,us;function qe(t){if(us===void 0)try{throw Error()}catch(e){var r=e.stack.trim().match(/\n( *(at )?)/);us=r&&r[1]||""}return`
`+us+t}var bs=!1;function cs(t,r){if(!t||bs)return"";bs=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(g){var n=g}Reflect.construct(t,[],r)}else{try{r.call()}catch(g){n=g}t.call(r.prototype)}else{try{throw Error()}catch(g){n=g}t()}}catch(g){if(g&&n&&typeof g.stack=="string"){for(var o=g.stack.split(`
`),s=n.stack.split(`
`),l=o.length-1,a=s.length-1;1<=l&&0<=a&&o[l]!==s[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==s[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==s[a]){var d=`
`+o[l].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=l&&0<=a);break}}}finally{bs=!1,Error.prepareStackTrace=e}return(t=t?t.displayName||t.name:"")?qe(t):""}function tb(t){switch(t.tag){case 5:return qe(t.type);case 16:return qe("Lazy");case 13:return qe("Suspense");case 19:return qe("SuspenseList");case 0:case 2:case 15:return t=cs(t.type,!1),t;case 11:return t=cs(t.type.render,!1),t;case 1:return t=cs(t.type,!0),t;default:return""}}function Ys(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case me:return"Fragment";case ce:return"Portal";case Vs:return"Profiler";case Gi:return"StrictMode";case Gs:return"Suspense";case Qs:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case hd:return(t.displayName||"Context")+".Consumer";case yd:return(t._context.displayName||"Context")+".Provider";case Qi:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yi:return r=t.displayName||null,r!==null?r:Ys(t.type)||"Memo";case zr:r=t._payload,t=t._init;try{return Ys(t(r))}catch{}}return null}function rb(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ys(r);case 8:return r===Gi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wd(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function eb(t){var r=wd(t)?"checked":"value",e=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),n=""+t[r];if(!t.hasOwnProperty(r)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var o=e.get,s=e.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return o.call(this)},set:function(l){n=""+l,s.call(this,l)}}),Object.defineProperty(t,r,{enumerable:e.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Wn(t){t._valueTracker||(t._valueTracker=eb(t))}function kd(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var e=r.getValue(),n="";return t&&(n=wd(t)?t.checked?"true":"false":t.value),t=n,t!==e?(r.setValue(t),!0):!1}function xo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ks(t,r){var e=r.checked;return pt({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:e??t._wrapperState.initialChecked})}function Ul(t,r){var e=r.defaultValue==null?"":r.defaultValue,n=r.checked!=null?r.checked:r.defaultChecked;e=Hr(r.value!=null?r.value:e),t._wrapperState={initialChecked:n,initialValue:e,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Sd(t,r){r=r.checked,r!=null&&Vi(t,"checked",r,!1)}function Xs(t,r){Sd(t,r);var e=Hr(r.value),n=r.type;if(e!=null)n==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+e):t.value!==""+e&&(t.value=""+e);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Js(t,r.type,e):r.hasOwnProperty("defaultValue")&&Js(t,r.type,Hr(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function Vl(t,r,e){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var n=r.type;if(!(n!=="submit"&&n!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,e||r===t.value||(t.value=r),t.defaultValue=r}e=t.name,e!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,e!==""&&(t.name=e)}function Js(t,r,e){(r!=="number"||xo(t.ownerDocument)!==t)&&(e==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+e&&(t.defaultValue=""+e))}var tn=Array.isArray;function Ie(t,r,e,n){if(t=t.options,r){r={};for(var o=0;o<e.length;o++)r["$"+e[o]]=!0;for(e=0;e<t.length;e++)o=r.hasOwnProperty("$"+t[e].value),t[e].selected!==o&&(t[e].selected=o),o&&n&&(t[e].defaultSelected=!0)}else{for(e=""+Hr(e),r=null,o=0;o<t.length;o++){if(t[o].value===e){t[o].selected=!0,n&&(t[o].defaultSelected=!0);return}r!==null||t[o].disabled||(r=t[o])}r!==null&&(r.selected=!0)}}function Zs(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(B(91));return pt({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gl(t,r){var e=r.value;if(e==null){if(e=r.children,r=r.defaultValue,e!=null){if(r!=null)throw Error(B(92));if(tn(e)){if(1<e.length)throw Error(B(93));e=e[0]}r=e}r==null&&(r=""),e=r}t._wrapperState={initialValue:Hr(e)}}function jd(t,r){var e=Hr(r.value),n=Hr(r.defaultValue);e!=null&&(e=""+e,e!==t.value&&(t.value=e),r.defaultValue==null&&t.defaultValue!==e&&(t.defaultValue=e)),n!=null&&(t.defaultValue=""+n)}function Ql(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Cd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qs(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Cd(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var On,Id=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,e,n,o){MSApp.execUnsafeLocalFunction(function(){return t(r,e,n,o)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(On=On||document.createElement("div"),On.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=On.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function mn(t,r){if(r){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=r;return}}t.textContent=r}var nn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nb=["Webkit","ms","Moz","O"];Object.keys(nn).forEach(function(t){nb.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),nn[r]=nn[t]})});function Ed(t,r,e){return r==null||typeof r=="boolean"||r===""?"":e||typeof r!="number"||r===0||nn.hasOwnProperty(t)&&nn[t]?(""+r).trim():r+"px"}function zd(t,r){t=t.style;for(var e in r)if(r.hasOwnProperty(e)){var n=e.indexOf("--")===0,o=Ed(e,r[e],n);e==="float"&&(e="cssFloat"),n?t.setProperty(e,o):t[e]=o}}var ob=pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ti(t,r){if(r){if(ob[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(B(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(B(61))}if(r.style!=null&&typeof r.style!="object")throw Error(B(62))}}function ri(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ei=null;function Ki(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ni=null,Ee=null,ze=null;function Yl(t){if(t=_n(t)){if(typeof ni!="function")throw Error(B(280));var r=t.stateNode;r&&(r=Ko(r),ni(t.stateNode,t.type,r))}}function Td(t){Ee?ze?ze.push(t):ze=[t]:Ee=t}function Ad(){if(Ee){var t=Ee,r=ze;if(ze=Ee=null,Yl(t),r)for(t=0;t<r.length;t++)Yl(r[t])}}function Dd(t,r){return t(r)}function Bd(){}var ms=!1;function Fd(t,r,e){if(ms)return t(r,e);ms=!0;try{return Dd(t,r,e)}finally{ms=!1,(Ee!==null||ze!==null)&&(Bd(),Ad())}}function pn(t,r){var e=t.stateNode;if(e===null)return null;var n=Ko(e);if(n===null)return null;e=n[r];t:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(B(231,r,typeof e));return e}var oi=!1;if(wr)try{var Ue={};Object.defineProperty(Ue,"passive",{get:function(){oi=!0}}),window.addEventListener("test",Ue,Ue),window.removeEventListener("test",Ue,Ue)}catch{oi=!1}function sb(t,r,e,n,o,s,l,a,d){var g=Array.prototype.slice.call(arguments,3);try{r.apply(e,g)}catch(p){this.onError(p)}}var on=!1,wo=null,ko=!1,si=null,ib={onError:function(t){on=!0,wo=t}};function lb(t,r,e,n,o,s,l,a,d){on=!1,wo=null,sb.apply(ib,arguments)}function ab(t,r,e,n,o,s,l,a,d){if(lb.apply(this,arguments),on){if(on){var g=wo;on=!1,wo=null}else throw Error(B(198));ko||(ko=!0,si=g)}}function de(t){var r=t,e=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,r.flags&4098&&(e=r.return),t=r.return;while(t)}return r.tag===3?e:null}function _d(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Kl(t){if(de(t)!==t)throw Error(B(188))}function db(t){var r=t.alternate;if(!r){if(r=de(t),r===null)throw Error(B(188));return r!==t?null:t}for(var e=t,n=r;;){var o=e.return;if(o===null)break;var s=o.alternate;if(s===null){if(n=o.return,n!==null){e=n;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===e)return Kl(o),t;if(s===n)return Kl(o),r;s=s.sibling}throw Error(B(188))}if(e.return!==n.return)e=o,n=s;else{for(var l=!1,a=o.child;a;){if(a===e){l=!0,e=o,n=s;break}if(a===n){l=!0,n=o,e=s;break}a=a.sibling}if(!l){for(a=s.child;a;){if(a===e){l=!0,e=s,n=o;break}if(a===n){l=!0,n=s,e=o;break}a=a.sibling}if(!l)throw Error(B(189))}}if(e.alternate!==n)throw Error(B(190))}if(e.tag!==3)throw Error(B(188));return e.stateNode.current===e?t:r}function Rd(t){return t=db(t),t!==null?Ld(t):null}function Ld(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=Ld(t);if(r!==null)return r;t=t.sibling}return null}var Nd=Qt.unstable_scheduleCallback,Xl=Qt.unstable_cancelCallback,gb=Qt.unstable_shouldYield,ub=Qt.unstable_requestPaint,yt=Qt.unstable_now,bb=Qt.unstable_getCurrentPriorityLevel,Xi=Qt.unstable_ImmediatePriority,Md=Qt.unstable_UserBlockingPriority,So=Qt.unstable_NormalPriority,cb=Qt.unstable_LowPriority,Pd=Qt.unstable_IdlePriority,Vo=null,mr=null;function mb(t){if(mr&&typeof mr.onCommitFiberRoot=="function")try{mr.onCommitFiberRoot(Vo,t,void 0,(t.current.flags&128)===128)}catch{}}var lr=Math.clz32?Math.clz32:vb,pb=Math.log,fb=Math.LN2;function vb(t){return t>>>=0,t===0?32:31-(pb(t)/fb|0)|0}var $n=64,Hn=4194304;function rn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function jo(t,r){var e=t.pendingLanes;if(e===0)return 0;var n=0,o=t.suspendedLanes,s=t.pingedLanes,l=e&268435455;if(l!==0){var a=l&~o;a!==0?n=rn(a):(s&=l,s!==0&&(n=rn(s)))}else l=e&~o,l!==0?n=rn(l):s!==0&&(n=rn(s));if(n===0)return 0;if(r!==0&&r!==n&&!(r&o)&&(o=n&-n,s=r&-r,o>=s||o===16&&(s&4194240)!==0))return r;if(n&4&&(n|=e&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=n;0<r;)e=31-lr(r),o=1<<e,n|=t[e],r&=~o;return n}function yb(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hb(t,r){for(var e=t.suspendedLanes,n=t.pingedLanes,o=t.expirationTimes,s=t.pendingLanes;0<s;){var l=31-lr(s),a=1<<l,d=o[l];d===-1?(!(a&e)||a&n)&&(o[l]=yb(a,r)):d<=r&&(t.expiredLanes|=a),s&=~a}}function ii(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Wd(){var t=$n;return $n<<=1,!($n&4194240)&&($n=64),t}function ps(t){for(var r=[],e=0;31>e;e++)r.push(t);return r}function Bn(t,r,e){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-lr(r),t[r]=e}function xb(t,r){var e=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<e;){var o=31-lr(e),s=1<<o;r[o]=0,n[o]=-1,t[o]=-1,e&=~s}}function Ji(t,r){var e=t.entangledLanes|=r;for(t=t.entanglements;e;){var n=31-lr(e),o=1<<n;o&r|t[n]&r&&(t[n]|=r),e&=~o}}var nt=0;function Od(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $d,Zi,Hd,Ud,Vd,li=!1,Un=[],Rr=null,Lr=null,Nr=null,fn=new Map,vn=new Map,Dr=[],wb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jl(t,r){switch(t){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Nr=null;break;case"pointerover":case"pointerout":fn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":vn.delete(r.pointerId)}}function Ve(t,r,e,n,o,s){return t===null||t.nativeEvent!==s?(t={blockedOn:r,domEventName:e,eventSystemFlags:n,nativeEvent:s,targetContainers:[o]},r!==null&&(r=_n(r),r!==null&&Zi(r)),t):(t.eventSystemFlags|=n,r=t.targetContainers,o!==null&&r.indexOf(o)===-1&&r.push(o),t)}function kb(t,r,e,n,o){switch(r){case"focusin":return Rr=Ve(Rr,t,r,e,n,o),!0;case"dragenter":return Lr=Ve(Lr,t,r,e,n,o),!0;case"mouseover":return Nr=Ve(Nr,t,r,e,n,o),!0;case"pointerover":var s=o.pointerId;return fn.set(s,Ve(fn.get(s)||null,t,r,e,n,o)),!0;case"gotpointercapture":return s=o.pointerId,vn.set(s,Ve(vn.get(s)||null,t,r,e,n,o)),!0}return!1}function Gd(t){var r=Jr(t.target);if(r!==null){var e=de(r);if(e!==null){if(r=e.tag,r===13){if(r=_d(e),r!==null){t.blockedOn=r,Vd(t.priority,function(){Hd(e)});return}}else if(r===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ao(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var e=ai(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(e===null){e=t.nativeEvent;var n=new e.constructor(e.type,e);ei=n,e.target.dispatchEvent(n),ei=null}else return r=_n(e),r!==null&&Zi(r),t.blockedOn=e,!1;r.shift()}return!0}function Zl(t,r,e){ao(t)&&e.delete(r)}function Sb(){li=!1,Rr!==null&&ao(Rr)&&(Rr=null),Lr!==null&&ao(Lr)&&(Lr=null),Nr!==null&&ao(Nr)&&(Nr=null),fn.forEach(Zl),vn.forEach(Zl)}function Ge(t,r){t.blockedOn===r&&(t.blockedOn=null,li||(li=!0,Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority,Sb)))}function yn(t){function r(o){return Ge(o,t)}if(0<Un.length){Ge(Un[0],t);for(var e=1;e<Un.length;e++){var n=Un[e];n.blockedOn===t&&(n.blockedOn=null)}}for(Rr!==null&&Ge(Rr,t),Lr!==null&&Ge(Lr,t),Nr!==null&&Ge(Nr,t),fn.forEach(r),vn.forEach(r),e=0;e<Dr.length;e++)n=Dr[e],n.blockedOn===t&&(n.blockedOn=null);for(;0<Dr.length&&(e=Dr[0],e.blockedOn===null);)Gd(e),e.blockedOn===null&&Dr.shift()}var Te=Cr.ReactCurrentBatchConfig,Co=!0;function jb(t,r,e,n){var o=nt,s=Te.transition;Te.transition=null;try{nt=1,qi(t,r,e,n)}finally{nt=o,Te.transition=s}}function Cb(t,r,e,n){var o=nt,s=Te.transition;Te.transition=null;try{nt=4,qi(t,r,e,n)}finally{nt=o,Te.transition=s}}function qi(t,r,e,n){if(Co){var o=ai(t,r,e,n);if(o===null)Cs(t,r,n,Io,e),Jl(t,n);else if(kb(o,t,r,e,n))n.stopPropagation();else if(Jl(t,n),r&4&&-1<wb.indexOf(t)){for(;o!==null;){var s=_n(o);if(s!==null&&$d(s),s=ai(t,r,e,n),s===null&&Cs(t,r,n,Io,e),s===o)break;o=s}o!==null&&n.stopPropagation()}else Cs(t,r,n,null,e)}}var Io=null;function ai(t,r,e,n){if(Io=null,t=Ki(n),t=Jr(t),t!==null)if(r=de(t),r===null)t=null;else if(e=r.tag,e===13){if(t=_d(r),t!==null)return t;t=null}else if(e===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return Io=t,null}function Qd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bb()){case Xi:return 1;case Md:return 4;case So:case cb:return 16;case Pd:return 536870912;default:return 16}default:return 16}}var Fr=null,tl=null,go=null;function Yd(){if(go)return go;var t,r=tl,e=r.length,n,o="value"in Fr?Fr.value:Fr.textContent,s=o.length;for(t=0;t<e&&r[t]===o[t];t++);var l=e-t;for(n=1;n<=l&&r[e-n]===o[s-n];n++);return go=o.slice(t,1<n?1-n:void 0)}function uo(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Vn(){return!0}function ql(){return!1}function Kt(t){function r(e,n,o,s,l){this._reactName=e,this._targetInst=o,this.type=n,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(e=t[a],this[a]=e?e(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Vn:ql,this.isPropagationStopped=ql,this}return pt(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Vn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Vn)},persist:function(){},isPersistent:Vn}),r}var Oe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=Kt(Oe),Fn=pt({},Oe,{view:0,detail:0}),Ib=Kt(Fn),fs,vs,Qe,Go=pt({},Fn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:el,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qe&&(Qe&&t.type==="mousemove"?(fs=t.screenX-Qe.screenX,vs=t.screenY-Qe.screenY):vs=fs=0,Qe=t),fs)},movementY:function(t){return"movementY"in t?t.movementY:vs}}),ta=Kt(Go),Eb=pt({},Go,{dataTransfer:0}),zb=Kt(Eb),Tb=pt({},Fn,{relatedTarget:0}),ys=Kt(Tb),Ab=pt({},Oe,{animationName:0,elapsedTime:0,pseudoElement:0}),Db=Kt(Ab),Bb=pt({},Oe,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Fb=Kt(Bb),_b=pt({},Oe,{data:0}),ra=Kt(_b),Rb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mb(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=Nb[t])?!!r[t]:!1}function el(){return Mb}var Pb=pt({},Fn,{key:function(t){if(t.key){var r=Rb[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=uo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Lb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:el,charCode:function(t){return t.type==="keypress"?uo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?uo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Wb=Kt(Pb),Ob=pt({},Go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ea=Kt(Ob),$b=pt({},Fn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:el}),Hb=Kt($b),Ub=pt({},Oe,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vb=Kt(Ub),Gb=pt({},Go,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Qb=Kt(Gb),Yb=[9,13,27,32],nl=wr&&"CompositionEvent"in window,sn=null;wr&&"documentMode"in document&&(sn=document.documentMode);var Kb=wr&&"TextEvent"in window&&!sn,Kd=wr&&(!nl||sn&&8<sn&&11>=sn),na=" ",oa=!1;function Xd(t,r){switch(t){case"keyup":return Yb.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var pe=!1;function Xb(t,r){switch(t){case"compositionend":return Jd(r);case"keypress":return r.which!==32?null:(oa=!0,na);case"textInput":return t=r.data,t===na&&oa?null:t;default:return null}}function Jb(t,r){if(pe)return t==="compositionend"||!nl&&Xd(t,r)?(t=Yd(),go=tl=Fr=null,pe=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Kd&&r.locale!=="ko"?null:r.data;default:return null}}var Zb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sa(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!Zb[t.type]:r==="textarea"}function Zd(t,r,e,n){Td(n),r=Eo(r,"onChange"),0<r.length&&(e=new rl("onChange","change",null,e,n),t.push({event:e,listeners:r}))}var ln=null,hn=null;function qb(t){dg(t,0)}function Qo(t){var r=ye(t);if(kd(r))return t}function tc(t,r){if(t==="change")return r}var qd=!1;if(wr){var hs;if(wr){var xs="oninput"in document;if(!xs){var ia=document.createElement("div");ia.setAttribute("oninput","return;"),xs=typeof ia.oninput=="function"}hs=xs}else hs=!1;qd=hs&&(!document.documentMode||9<document.documentMode)}function la(){ln&&(ln.detachEvent("onpropertychange",tg),hn=ln=null)}function tg(t){if(t.propertyName==="value"&&Qo(hn)){var r=[];Zd(r,hn,t,Ki(t)),Fd(qb,r)}}function rc(t,r,e){t==="focusin"?(la(),ln=r,hn=e,ln.attachEvent("onpropertychange",tg)):t==="focusout"&&la()}function ec(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qo(hn)}function nc(t,r){if(t==="click")return Qo(r)}function oc(t,r){if(t==="input"||t==="change")return Qo(r)}function sc(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var dr=typeof Object.is=="function"?Object.is:sc;function xn(t,r){if(dr(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var e=Object.keys(t),n=Object.keys(r);if(e.length!==n.length)return!1;for(n=0;n<e.length;n++){var o=e[n];if(!Us.call(r,o)||!dr(t[o],r[o]))return!1}return!0}function aa(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function da(t,r){var e=aa(t);t=0;for(var n;e;){if(e.nodeType===3){if(n=t+e.textContent.length,t<=r&&n>=r)return{node:e,offset:r-t};t=n}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=aa(e)}}function rg(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?rg(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function eg(){for(var t=window,r=xo();r instanceof t.HTMLIFrameElement;){try{var e=typeof r.contentWindow.location.href=="string"}catch{e=!1}if(e)t=r.contentWindow;else break;r=xo(t.document)}return r}function ol(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function ic(t){var r=eg(),e=t.focusedElem,n=t.selectionRange;if(r!==e&&e&&e.ownerDocument&&rg(e.ownerDocument.documentElement,e)){if(n!==null&&ol(e)){if(r=n.start,t=n.end,t===void 0&&(t=r),"selectionStart"in e)e.selectionStart=r,e.selectionEnd=Math.min(t,e.value.length);else if(t=(r=e.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var o=e.textContent.length,s=Math.min(n.start,o);n=n.end===void 0?s:Math.min(n.end,o),!t.extend&&s>n&&(o=n,n=s,s=o),o=da(e,s);var l=da(e,n);o&&l&&(t.rangeCount!==1||t.anchorNode!==o.node||t.anchorOffset!==o.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(r=r.createRange(),r.setStart(o.node,o.offset),t.removeAllRanges(),s>n?(t.addRange(r),t.extend(l.node,l.offset)):(r.setEnd(l.node,l.offset),t.addRange(r)))}}for(r=[],t=e;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<r.length;e++)t=r[e],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var lc=wr&&"documentMode"in document&&11>=document.documentMode,fe=null,di=null,an=null,gi=!1;function ga(t,r,e){var n=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;gi||fe==null||fe!==xo(n)||(n=fe,"selectionStart"in n&&ol(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),an&&xn(an,n)||(an=n,n=Eo(di,"onSelect"),0<n.length&&(r=new rl("onSelect","select",null,r,e),t.push({event:r,listeners:n}),r.target=fe)))}function Gn(t,r){var e={};return e[t.toLowerCase()]=r.toLowerCase(),e["Webkit"+t]="webkit"+r,e["Moz"+t]="moz"+r,e}var ve={animationend:Gn("Animation","AnimationEnd"),animationiteration:Gn("Animation","AnimationIteration"),animationstart:Gn("Animation","AnimationStart"),transitionend:Gn("Transition","TransitionEnd")},ws={},ng={};wr&&(ng=document.createElement("div").style,"AnimationEvent"in window||(delete ve.animationend.animation,delete ve.animationiteration.animation,delete ve.animationstart.animation),"TransitionEvent"in window||delete ve.transitionend.transition);function Yo(t){if(ws[t])return ws[t];if(!ve[t])return t;var r=ve[t],e;for(e in r)if(r.hasOwnProperty(e)&&e in ng)return ws[t]=r[e];return t}var og=Yo("animationend"),sg=Yo("animationiteration"),ig=Yo("animationstart"),lg=Yo("transitionend"),ag=new Map,ua="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(t,r){ag.set(t,r),ae(r,[t])}for(var ks=0;ks<ua.length;ks++){var Ss=ua[ks],ac=Ss.toLowerCase(),dc=Ss[0].toUpperCase()+Ss.slice(1);Gr(ac,"on"+dc)}Gr(og,"onAnimationEnd");Gr(sg,"onAnimationIteration");Gr(ig,"onAnimationStart");Gr("dblclick","onDoubleClick");Gr("focusin","onFocus");Gr("focusout","onBlur");Gr(lg,"onTransitionEnd");Be("onMouseEnter",["mouseout","mouseover"]);Be("onMouseLeave",["mouseout","mouseover"]);Be("onPointerEnter",["pointerout","pointerover"]);Be("onPointerLeave",["pointerout","pointerover"]);ae("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ae("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ae("onBeforeInput",["compositionend","keypress","textInput","paste"]);ae("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ae("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ae("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var en="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gc=new Set("cancel close invalid load scroll toggle".split(" ").concat(en));function ba(t,r,e){var n=t.type||"unknown-event";t.currentTarget=e,ab(n,r,void 0,t),t.currentTarget=null}function dg(t,r){r=(r&4)!==0;for(var e=0;e<t.length;e++){var n=t[e],o=n.event;n=n.listeners;t:{var s=void 0;if(r)for(var l=n.length-1;0<=l;l--){var a=n[l],d=a.instance,g=a.currentTarget;if(a=a.listener,d!==s&&o.isPropagationStopped())break t;ba(o,a,g),s=d}else for(l=0;l<n.length;l++){if(a=n[l],d=a.instance,g=a.currentTarget,a=a.listener,d!==s&&o.isPropagationStopped())break t;ba(o,a,g),s=d}}}if(ko)throw t=si,ko=!1,si=null,t}function lt(t,r){var e=r[pi];e===void 0&&(e=r[pi]=new Set);var n=t+"__bubble";e.has(n)||(gg(r,t,2,!1),e.add(n))}function js(t,r,e){var n=0;r&&(n|=4),gg(e,t,n,r)}var Qn="_reactListening"+Math.random().toString(36).slice(2);function wn(t){if(!t[Qn]){t[Qn]=!0,vd.forEach(function(e){e!=="selectionchange"&&(gc.has(e)||js(e,!1,t),js(e,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[Qn]||(r[Qn]=!0,js("selectionchange",!1,r))}}function gg(t,r,e,n){switch(Qd(r)){case 1:var o=jb;break;case 4:o=Cb;break;default:o=qi}e=o.bind(null,r,e,t),o=void 0,!oi||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(o=!0),n?o!==void 0?t.addEventListener(r,e,{capture:!0,passive:o}):t.addEventListener(r,e,!0):o!==void 0?t.addEventListener(r,e,{passive:o}):t.addEventListener(r,e,!1)}function Cs(t,r,e,n,o){var s=n;if(!(r&1)&&!(r&2)&&n!==null)t:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var a=n.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=n.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===o||d.nodeType===8&&d.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Jr(a),l===null)return;if(d=l.tag,d===5||d===6){n=s=l;continue t}a=a.parentNode}}n=n.return}Fd(function(){var g=s,p=Ki(e),f=[];t:{var v=ag.get(t);if(v!==void 0){var j=rl,w=t;switch(t){case"keypress":if(uo(e)===0)break t;case"keydown":case"keyup":j=Wb;break;case"focusin":w="focus",j=ys;break;case"focusout":w="blur",j=ys;break;case"beforeblur":case"afterblur":j=ys;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=ta;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=zb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Hb;break;case og:case sg:case ig:j=Db;break;case lg:j=Vb;break;case"scroll":j=Ib;break;case"wheel":j=Qb;break;case"copy":case"cut":case"paste":j=Fb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=ea}var x=(r&4)!==0,S=!x&&t==="scroll",c=x?v!==null?v+"Capture":null:v;x=[];for(var u=g,b;u!==null;){b=u;var h=b.stateNode;if(b.tag===5&&h!==null&&(b=h,c!==null&&(h=pn(u,c),h!=null&&x.push(kn(u,h,b)))),S)break;u=u.return}0<x.length&&(v=new j(v,w,null,e,p),f.push({event:v,listeners:x}))}}if(!(r&7)){t:{if(v=t==="mouseover"||t==="pointerover",j=t==="mouseout"||t==="pointerout",v&&e!==ei&&(w=e.relatedTarget||e.fromElement)&&(Jr(w)||w[kr]))break t;if((j||v)&&(v=p.window===p?p:(v=p.ownerDocument)?v.defaultView||v.parentWindow:window,j?(w=e.relatedTarget||e.toElement,j=g,w=w?Jr(w):null,w!==null&&(S=de(w),w!==S||w.tag!==5&&w.tag!==6)&&(w=null)):(j=null,w=g),j!==w)){if(x=ta,h="onMouseLeave",c="onMouseEnter",u="mouse",(t==="pointerout"||t==="pointerover")&&(x=ea,h="onPointerLeave",c="onPointerEnter",u="pointer"),S=j==null?v:ye(j),b=w==null?v:ye(w),v=new x(h,u+"leave",j,e,p),v.target=S,v.relatedTarget=b,h=null,Jr(p)===g&&(x=new x(c,u+"enter",w,e,p),x.target=b,x.relatedTarget=S,h=x),S=h,j&&w)r:{for(x=j,c=w,u=0,b=x;b;b=ue(b))u++;for(b=0,h=c;h;h=ue(h))b++;for(;0<u-b;)x=ue(x),u--;for(;0<b-u;)c=ue(c),b--;for(;u--;){if(x===c||c!==null&&x===c.alternate)break r;x=ue(x),c=ue(c)}x=null}else x=null;j!==null&&ca(f,v,j,x,!1),w!==null&&S!==null&&ca(f,S,w,x,!0)}}t:{if(v=g?ye(g):window,j=v.nodeName&&v.nodeName.toLowerCase(),j==="select"||j==="input"&&v.type==="file")var A=tc;else if(sa(v))if(qd)A=oc;else{A=ec;var R=rc}else(j=v.nodeName)&&j.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(A=nc);if(A&&(A=A(t,g))){Zd(f,A,e,p);break t}R&&R(t,v,g),t==="focusout"&&(R=v._wrapperState)&&R.controlled&&v.type==="number"&&Js(v,"number",v.value)}switch(R=g?ye(g):window,t){case"focusin":(sa(R)||R.contentEditable==="true")&&(fe=R,di=g,an=null);break;case"focusout":an=di=fe=null;break;case"mousedown":gi=!0;break;case"contextmenu":case"mouseup":case"dragend":gi=!1,ga(f,e,p);break;case"selectionchange":if(lc)break;case"keydown":case"keyup":ga(f,e,p)}var L;if(nl)t:{switch(t){case"compositionstart":var _="onCompositionStart";break t;case"compositionend":_="onCompositionEnd";break t;case"compositionupdate":_="onCompositionUpdate";break t}_=void 0}else pe?Xd(t,e)&&(_="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&(_="onCompositionStart");_&&(Kd&&e.locale!=="ko"&&(pe||_!=="onCompositionStart"?_==="onCompositionEnd"&&pe&&(L=Yd()):(Fr=p,tl="value"in Fr?Fr.value:Fr.textContent,pe=!0)),R=Eo(g,_),0<R.length&&(_=new ra(_,t,null,e,p),f.push({event:_,listeners:R}),L?_.data=L:(L=Jd(e),L!==null&&(_.data=L)))),(L=Kb?Xb(t,e):Jb(t,e))&&(g=Eo(g,"onBeforeInput"),0<g.length&&(p=new ra("onBeforeInput","beforeinput",null,e,p),f.push({event:p,listeners:g}),p.data=L))}dg(f,r)})}function kn(t,r,e){return{instance:t,listener:r,currentTarget:e}}function Eo(t,r){for(var e=r+"Capture",n=[];t!==null;){var o=t,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=pn(t,e),s!=null&&n.unshift(kn(t,s,o)),s=pn(t,r),s!=null&&n.push(kn(t,s,o))),t=t.return}return n}function ue(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ca(t,r,e,n,o){for(var s=r._reactName,l=[];e!==null&&e!==n;){var a=e,d=a.alternate,g=a.stateNode;if(d!==null&&d===n)break;a.tag===5&&g!==null&&(a=g,o?(d=pn(e,s),d!=null&&l.unshift(kn(e,d,a))):o||(d=pn(e,s),d!=null&&l.push(kn(e,d,a)))),e=e.return}l.length!==0&&t.push({event:r,listeners:l})}var uc=/\r\n?/g,bc=/\u0000|\uFFFD/g;function ma(t){return(typeof t=="string"?t:""+t).replace(uc,`
`).replace(bc,"")}function Yn(t,r,e){if(r=ma(r),ma(t)!==r&&e)throw Error(B(425))}function zo(){}var ui=null,bi=null;function ci(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var mi=typeof setTimeout=="function"?setTimeout:void 0,cc=typeof clearTimeout=="function"?clearTimeout:void 0,pa=typeof Promise=="function"?Promise:void 0,mc=typeof queueMicrotask=="function"?queueMicrotask:typeof pa<"u"?function(t){return pa.resolve(null).then(t).catch(pc)}:mi;function pc(t){setTimeout(function(){throw t})}function Is(t,r){var e=r,n=0;do{var o=e.nextSibling;if(t.removeChild(e),o&&o.nodeType===8)if(e=o.data,e==="/$"){if(n===0){t.removeChild(o),yn(r);return}n--}else e!=="$"&&e!=="$?"&&e!=="$!"||n++;e=o}while(e);yn(r)}function Mr(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function fa(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"){if(r===0)return t;r--}else e==="/$"&&r++}t=t.previousSibling}return null}var $e=Math.random().toString(36).slice(2),cr="__reactFiber$"+$e,Sn="__reactProps$"+$e,kr="__reactContainer$"+$e,pi="__reactEvents$"+$e,fc="__reactListeners$"+$e,vc="__reactHandles$"+$e;function Jr(t){var r=t[cr];if(r)return r;for(var e=t.parentNode;e;){if(r=e[kr]||e[cr]){if(e=r.alternate,r.child!==null||e!==null&&e.child!==null)for(t=fa(t);t!==null;){if(e=t[cr])return e;t=fa(t)}return r}t=e,e=t.parentNode}return null}function _n(t){return t=t[cr]||t[kr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ye(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function Ko(t){return t[Sn]||null}var fi=[],he=-1;function Qr(t){return{current:t}}function at(t){0>he||(t.current=fi[he],fi[he]=null,he--)}function it(t,r){he++,fi[he]=t.current,t.current=r}var Ur={},_t=Qr(Ur),Ot=Qr(!1),ne=Ur;function Fe(t,r){var e=t.type.contextTypes;if(!e)return Ur;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===r)return n.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in e)o[s]=r[s];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),o}function $t(t){return t=t.childContextTypes,t!=null}function To(){at(Ot),at(_t)}function va(t,r,e){if(_t.current!==Ur)throw Error(B(168));it(_t,r),it(Ot,e)}function ug(t,r,e){var n=t.stateNode;if(r=r.childContextTypes,typeof n.getChildContext!="function")return e;n=n.getChildContext();for(var o in n)if(!(o in r))throw Error(B(108,rb(t)||"Unknown",o));return pt({},e,n)}function Ao(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ur,ne=_t.current,it(_t,t),it(Ot,Ot.current),!0}function ya(t,r,e){var n=t.stateNode;if(!n)throw Error(B(169));e?(t=ug(t,r,ne),n.__reactInternalMemoizedMergedChildContext=t,at(Ot),at(_t),it(_t,t)):at(Ot),it(Ot,e)}var vr=null,Xo=!1,Es=!1;function bg(t){vr===null?vr=[t]:vr.push(t)}function yc(t){Xo=!0,bg(t)}function Yr(){if(!Es&&vr!==null){Es=!0;var t=0,r=nt;try{var e=vr;for(nt=1;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}vr=null,Xo=!1}catch(o){throw vr!==null&&(vr=vr.slice(t+1)),Nd(Xi,Yr),o}finally{nt=r,Es=!1}}return null}var xe=[],we=0,Do=null,Bo=0,Xt=[],Jt=0,oe=null,yr=1,hr="";function Kr(t,r){xe[we++]=Bo,xe[we++]=Do,Do=t,Bo=r}function cg(t,r,e){Xt[Jt++]=yr,Xt[Jt++]=hr,Xt[Jt++]=oe,oe=t;var n=yr;t=hr;var o=32-lr(n)-1;n&=~(1<<o),e+=1;var s=32-lr(r)+o;if(30<s){var l=o-o%5;s=(n&(1<<l)-1).toString(32),n>>=l,o-=l,yr=1<<32-lr(r)+o|e<<o|n,hr=s+t}else yr=1<<s|e<<o|n,hr=t}function sl(t){t.return!==null&&(Kr(t,1),cg(t,1,0))}function il(t){for(;t===Do;)Do=xe[--we],xe[we]=null,Bo=xe[--we],xe[we]=null;for(;t===oe;)oe=Xt[--Jt],Xt[Jt]=null,hr=Xt[--Jt],Xt[Jt]=null,yr=Xt[--Jt],Xt[Jt]=null}var Gt=null,Vt=null,dt=!1,ir=null;function mg(t,r){var e=Zt(5,null,null,0);e.elementType="DELETED",e.stateNode=r,e.return=t,r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)}function ha(t,r){switch(t.tag){case 5:var e=t.type;return r=r.nodeType!==1||e.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,Gt=t,Vt=Mr(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,Gt=t,Vt=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(e=oe!==null?{id:yr,overflow:hr}:null,t.memoizedState={dehydrated:r,treeContext:e,retryLane:1073741824},e=Zt(18,null,null,0),e.stateNode=r,e.return=t,t.child=e,Gt=t,Vt=null,!0):!1;default:return!1}}function vi(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yi(t){if(dt){var r=Vt;if(r){var e=r;if(!ha(t,r)){if(vi(t))throw Error(B(418));r=Mr(e.nextSibling);var n=Gt;r&&ha(t,r)?mg(n,e):(t.flags=t.flags&-4097|2,dt=!1,Gt=t)}}else{if(vi(t))throw Error(B(418));t.flags=t.flags&-4097|2,dt=!1,Gt=t}}}function xa(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Gt=t}function Kn(t){if(t!==Gt)return!1;if(!dt)return xa(t),dt=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!ci(t.type,t.memoizedProps)),r&&(r=Vt)){if(vi(t))throw pg(),Error(B(418));for(;r;)mg(t,r),r=Mr(r.nextSibling)}if(xa(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));t:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var e=t.data;if(e==="/$"){if(r===0){Vt=Mr(t.nextSibling);break t}r--}else e!=="$"&&e!=="$!"&&e!=="$?"||r++}t=t.nextSibling}Vt=null}}else Vt=Gt?Mr(t.stateNode.nextSibling):null;return!0}function pg(){for(var t=Vt;t;)t=Mr(t.nextSibling)}function _e(){Vt=Gt=null,dt=!1}function ll(t){ir===null?ir=[t]:ir.push(t)}var hc=Cr.ReactCurrentBatchConfig;function Ye(t,r,e){if(t=e.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(e._owner){if(e=e._owner,e){if(e.tag!==1)throw Error(B(309));var n=e.stateNode}if(!n)throw Error(B(147,t));var o=n,s=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===s?r.ref:(r=function(l){var a=o.refs;l===null?delete a[s]:a[s]=l},r._stringRef=s,r)}if(typeof t!="string")throw Error(B(284));if(!e._owner)throw Error(B(290,t))}return t}function Xn(t,r){throw t=Object.prototype.toString.call(r),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function wa(t){var r=t._init;return r(t._payload)}function fg(t){function r(c,u){if(t){var b=c.deletions;b===null?(c.deletions=[u],c.flags|=16):b.push(u)}}function e(c,u){if(!t)return null;for(;u!==null;)r(c,u),u=u.sibling;return null}function n(c,u){for(c=new Map;u!==null;)u.key!==null?c.set(u.key,u):c.set(u.index,u),u=u.sibling;return c}function o(c,u){return c=$r(c,u),c.index=0,c.sibling=null,c}function s(c,u,b){return c.index=b,t?(b=c.alternate,b!==null?(b=b.index,b<u?(c.flags|=2,u):b):(c.flags|=2,u)):(c.flags|=1048576,u)}function l(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,u,b,h){return u===null||u.tag!==6?(u=_s(b,c.mode,h),u.return=c,u):(u=o(u,b),u.return=c,u)}function d(c,u,b,h){var A=b.type;return A===me?p(c,u,b.props.children,h,b.key):u!==null&&(u.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===zr&&wa(A)===u.type)?(h=o(u,b.props),h.ref=Ye(c,u,b),h.return=c,h):(h=yo(b.type,b.key,b.props,null,c.mode,h),h.ref=Ye(c,u,b),h.return=c,h)}function g(c,u,b,h){return u===null||u.tag!==4||u.stateNode.containerInfo!==b.containerInfo||u.stateNode.implementation!==b.implementation?(u=Rs(b,c.mode,h),u.return=c,u):(u=o(u,b.children||[]),u.return=c,u)}function p(c,u,b,h,A){return u===null||u.tag!==7?(u=re(b,c.mode,h,A),u.return=c,u):(u=o(u,b),u.return=c,u)}function f(c,u,b){if(typeof u=="string"&&u!==""||typeof u=="number")return u=_s(""+u,c.mode,b),u.return=c,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Pn:return b=yo(u.type,u.key,u.props,null,c.mode,b),b.ref=Ye(c,null,u),b.return=c,b;case ce:return u=Rs(u,c.mode,b),u.return=c,u;case zr:var h=u._init;return f(c,h(u._payload),b)}if(tn(u)||He(u))return u=re(u,c.mode,b,null),u.return=c,u;Xn(c,u)}return null}function v(c,u,b,h){var A=u!==null?u.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return A!==null?null:a(c,u,""+b,h);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Pn:return b.key===A?d(c,u,b,h):null;case ce:return b.key===A?g(c,u,b,h):null;case zr:return A=b._init,v(c,u,A(b._payload),h)}if(tn(b)||He(b))return A!==null?null:p(c,u,b,h,null);Xn(c,b)}return null}function j(c,u,b,h,A){if(typeof h=="string"&&h!==""||typeof h=="number")return c=c.get(b)||null,a(u,c,""+h,A);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Pn:return c=c.get(h.key===null?b:h.key)||null,d(u,c,h,A);case ce:return c=c.get(h.key===null?b:h.key)||null,g(u,c,h,A);case zr:var R=h._init;return j(c,u,b,R(h._payload),A)}if(tn(h)||He(h))return c=c.get(b)||null,p(u,c,h,A,null);Xn(u,h)}return null}function w(c,u,b,h){for(var A=null,R=null,L=u,_=u=0,z=null;L!==null&&_<b.length;_++){L.index>_?(z=L,L=null):z=L.sibling;var F=v(c,L,b[_],h);if(F===null){L===null&&(L=z);break}t&&L&&F.alternate===null&&r(c,L),u=s(F,u,_),R===null?A=F:R.sibling=F,R=F,L=z}if(_===b.length)return e(c,L),dt&&Kr(c,_),A;if(L===null){for(;_<b.length;_++)L=f(c,b[_],h),L!==null&&(u=s(L,u,_),R===null?A=L:R.sibling=L,R=L);return dt&&Kr(c,_),A}for(L=n(c,L);_<b.length;_++)z=j(L,c,_,b[_],h),z!==null&&(t&&z.alternate!==null&&L.delete(z.key===null?_:z.key),u=s(z,u,_),R===null?A=z:R.sibling=z,R=z);return t&&L.forEach(function(k){return r(c,k)}),dt&&Kr(c,_),A}function x(c,u,b,h){var A=He(b);if(typeof A!="function")throw Error(B(150));if(b=A.call(b),b==null)throw Error(B(151));for(var R=A=null,L=u,_=u=0,z=null,F=b.next();L!==null&&!F.done;_++,F=b.next()){L.index>_?(z=L,L=null):z=L.sibling;var k=v(c,L,F.value,h);if(k===null){L===null&&(L=z);break}t&&L&&k.alternate===null&&r(c,L),u=s(k,u,_),R===null?A=k:R.sibling=k,R=k,L=z}if(F.done)return e(c,L),dt&&Kr(c,_),A;if(L===null){for(;!F.done;_++,F=b.next())F=f(c,F.value,h),F!==null&&(u=s(F,u,_),R===null?A=F:R.sibling=F,R=F);return dt&&Kr(c,_),A}for(L=n(c,L);!F.done;_++,F=b.next())F=j(L,c,_,F.value,h),F!==null&&(t&&F.alternate!==null&&L.delete(F.key===null?_:F.key),u=s(F,u,_),R===null?A=F:R.sibling=F,R=F);return t&&L.forEach(function(N){return r(c,N)}),dt&&Kr(c,_),A}function S(c,u,b,h){if(typeof b=="object"&&b!==null&&b.type===me&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Pn:t:{for(var A=b.key,R=u;R!==null;){if(R.key===A){if(A=b.type,A===me){if(R.tag===7){e(c,R.sibling),u=o(R,b.props.children),u.return=c,c=u;break t}}else if(R.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===zr&&wa(A)===R.type){e(c,R.sibling),u=o(R,b.props),u.ref=Ye(c,R,b),u.return=c,c=u;break t}e(c,R);break}else r(c,R);R=R.sibling}b.type===me?(u=re(b.props.children,c.mode,h,b.key),u.return=c,c=u):(h=yo(b.type,b.key,b.props,null,c.mode,h),h.ref=Ye(c,u,b),h.return=c,c=h)}return l(c);case ce:t:{for(R=b.key;u!==null;){if(u.key===R)if(u.tag===4&&u.stateNode.containerInfo===b.containerInfo&&u.stateNode.implementation===b.implementation){e(c,u.sibling),u=o(u,b.children||[]),u.return=c,c=u;break t}else{e(c,u);break}else r(c,u);u=u.sibling}u=Rs(b,c.mode,h),u.return=c,c=u}return l(c);case zr:return R=b._init,S(c,u,R(b._payload),h)}if(tn(b))return w(c,u,b,h);if(He(b))return x(c,u,b,h);Xn(c,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,u!==null&&u.tag===6?(e(c,u.sibling),u=o(u,b),u.return=c,c=u):(e(c,u),u=_s(b,c.mode,h),u.return=c,c=u),l(c)):e(c,u)}return S}var Re=fg(!0),vg=fg(!1),Fo=Qr(null),_o=null,ke=null,al=null;function dl(){al=ke=_o=null}function gl(t){var r=Fo.current;at(Fo),t._currentValue=r}function hi(t,r,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,n!==null&&(n.childLanes|=r)):n!==null&&(n.childLanes&r)!==r&&(n.childLanes|=r),t===e)break;t=t.return}}function Ae(t,r){_o=t,al=ke=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&r&&(Wt=!0),t.firstContext=null)}function tr(t){var r=t._currentValue;if(al!==t)if(t={context:t,memoizedValue:r,next:null},ke===null){if(_o===null)throw Error(B(308));ke=t,_o.dependencies={lanes:0,firstContext:t}}else ke=ke.next=t;return r}var Zr=null;function ul(t){Zr===null?Zr=[t]:Zr.push(t)}function yg(t,r,e,n){var o=r.interleaved;return o===null?(e.next=e,ul(r)):(e.next=o.next,o.next=e),r.interleaved=e,Sr(t,n)}function Sr(t,r){t.lanes|=r;var e=t.alternate;for(e!==null&&(e.lanes|=r),e=t,t=t.return;t!==null;)t.childLanes|=r,e=t.alternate,e!==null&&(e.childLanes|=r),e=t,t=t.return;return e.tag===3?e.stateNode:null}var Tr=!1;function bl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hg(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xr(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function Pr(t,r,e){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,q&2){var o=n.pending;return o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r,Sr(t,e)}return o=n.interleaved,o===null?(r.next=r,ul(n)):(r.next=o.next,o.next=r),n.interleaved=r,Sr(t,e)}function bo(t,r,e){if(r=r.updateQueue,r!==null&&(r=r.shared,(e&4194240)!==0)){var n=r.lanes;n&=t.pendingLanes,e|=n,r.lanes=e,Ji(t,e)}}function ka(t,r){var e=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,e===n)){var o=null,s=null;if(e=e.firstBaseUpdate,e!==null){do{var l={eventTime:e.eventTime,lane:e.lane,tag:e.tag,payload:e.payload,callback:e.callback,next:null};s===null?o=s=l:s=s.next=l,e=e.next}while(e!==null);s===null?o=s=r:s=s.next=r}else o=s=r;e={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:n.shared,effects:n.effects},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=r:t.next=r,e.lastBaseUpdate=r}function Ro(t,r,e,n){var o=t.updateQueue;Tr=!1;var s=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var d=a,g=d.next;d.next=null,l===null?s=g:l.next=g,l=d;var p=t.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=g:a.next=g,p.lastBaseUpdate=d))}if(s!==null){var f=o.baseState;l=0,p=g=d=null,a=s;do{var v=a.lane,j=a.eventTime;if((n&v)===v){p!==null&&(p=p.next={eventTime:j,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});t:{var w=t,x=a;switch(v=r,j=e,x.tag){case 1:if(w=x.payload,typeof w=="function"){f=w.call(j,f,v);break t}f=w;break t;case 3:w.flags=w.flags&-65537|128;case 0:if(w=x.payload,v=typeof w=="function"?w.call(j,f,v):w,v==null)break t;f=pt({},f,v);break t;case 2:Tr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,v=o.effects,v===null?o.effects=[a]:v.push(a))}else j={eventTime:j,lane:v,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(g=p=j,d=f):p=p.next=j,l|=v;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;v=a,a=v.next,v.next=null,o.lastBaseUpdate=v,o.shared.pending=null}}while(!0);if(p===null&&(d=f),o.baseState=d,o.firstBaseUpdate=g,o.lastBaseUpdate=p,r=o.shared.interleaved,r!==null){o=r;do l|=o.lane,o=o.next;while(o!==r)}else s===null&&(o.shared.lanes=0);ie|=l,t.lanes=l,t.memoizedState=f}}function Sa(t,r,e){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var n=t[r],o=n.callback;if(o!==null){if(n.callback=null,n=e,typeof o!="function")throw Error(B(191,o));o.call(n)}}}var Rn={},pr=Qr(Rn),jn=Qr(Rn),Cn=Qr(Rn);function qr(t){if(t===Rn)throw Error(B(174));return t}function cl(t,r){switch(it(Cn,r),it(jn,t),it(pr,Rn),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:qs(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=qs(r,t)}at(pr),it(pr,r)}function Le(){at(pr),at(jn),at(Cn)}function xg(t){qr(Cn.current);var r=qr(pr.current),e=qs(r,t.type);r!==e&&(it(jn,t),it(pr,e))}function ml(t){jn.current===t&&(at(pr),at(jn))}var bt=Qr(0);function Lo(t){for(var r=t;r!==null;){if(r.tag===13){var e=r.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||e.data==="$?"||e.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var zs=[];function pl(){for(var t=0;t<zs.length;t++)zs[t]._workInProgressVersionPrimary=null;zs.length=0}var co=Cr.ReactCurrentDispatcher,Ts=Cr.ReactCurrentBatchConfig,se=0,mt=null,kt=null,jt=null,No=!1,dn=!1,In=0,xc=0;function At(){throw Error(B(321))}function fl(t,r){if(r===null)return!1;for(var e=0;e<r.length&&e<t.length;e++)if(!dr(t[e],r[e]))return!1;return!0}function vl(t,r,e,n,o,s){if(se=s,mt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,co.current=t===null||t.memoizedState===null?jc:Cc,t=e(n,o),dn){s=0;do{if(dn=!1,In=0,25<=s)throw Error(B(301));s+=1,jt=kt=null,r.updateQueue=null,co.current=Ic,t=e(n,o)}while(dn)}if(co.current=Mo,r=kt!==null&&kt.next!==null,se=0,jt=kt=mt=null,No=!1,r)throw Error(B(300));return t}function yl(){var t=In!==0;return In=0,t}function br(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?mt.memoizedState=jt=t:jt=jt.next=t,jt}function rr(){if(kt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var r=jt===null?mt.memoizedState:jt.next;if(r!==null)jt=r,kt=t;else{if(t===null)throw Error(B(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},jt===null?mt.memoizedState=jt=t:jt=jt.next=t}return jt}function En(t,r){return typeof r=="function"?r(t):r}function As(t){var r=rr(),e=r.queue;if(e===null)throw Error(B(311));e.lastRenderedReducer=t;var n=kt,o=n.baseQueue,s=e.pending;if(s!==null){if(o!==null){var l=o.next;o.next=s.next,s.next=l}n.baseQueue=o=s,e.pending=null}if(o!==null){s=o.next,n=n.baseState;var a=l=null,d=null,g=s;do{var p=g.lane;if((se&p)===p)d!==null&&(d=d.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),n=g.hasEagerState?g.eagerState:t(n,g.action);else{var f={lane:p,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};d===null?(a=d=f,l=n):d=d.next=f,mt.lanes|=p,ie|=p}g=g.next}while(g!==null&&g!==s);d===null?l=n:d.next=a,dr(n,r.memoizedState)||(Wt=!0),r.memoizedState=n,r.baseState=l,r.baseQueue=d,e.lastRenderedState=n}if(t=e.interleaved,t!==null){o=t;do s=o.lane,mt.lanes|=s,ie|=s,o=o.next;while(o!==t)}else o===null&&(e.lanes=0);return[r.memoizedState,e.dispatch]}function Ds(t){var r=rr(),e=r.queue;if(e===null)throw Error(B(311));e.lastRenderedReducer=t;var n=e.dispatch,o=e.pending,s=r.memoizedState;if(o!==null){e.pending=null;var l=o=o.next;do s=t(s,l.action),l=l.next;while(l!==o);dr(s,r.memoizedState)||(Wt=!0),r.memoizedState=s,r.baseQueue===null&&(r.baseState=s),e.lastRenderedState=s}return[s,n]}function wg(){}function kg(t,r){var e=mt,n=rr(),o=r(),s=!dr(n.memoizedState,o);if(s&&(n.memoizedState=o,Wt=!0),n=n.queue,hl(Cg.bind(null,e,n,t),[t]),n.getSnapshot!==r||s||jt!==null&&jt.memoizedState.tag&1){if(e.flags|=2048,zn(9,jg.bind(null,e,n,o,r),void 0,null),Ct===null)throw Error(B(349));se&30||Sg(e,r,o)}return o}function Sg(t,r,e){t.flags|=16384,t={getSnapshot:r,value:e},r=mt.updateQueue,r===null?(r={lastEffect:null,stores:null},mt.updateQueue=r,r.stores=[t]):(e=r.stores,e===null?r.stores=[t]:e.push(t))}function jg(t,r,e,n){r.value=e,r.getSnapshot=n,Ig(r)&&Eg(t)}function Cg(t,r,e){return e(function(){Ig(r)&&Eg(t)})}function Ig(t){var r=t.getSnapshot;t=t.value;try{var e=r();return!dr(t,e)}catch{return!0}}function Eg(t){var r=Sr(t,1);r!==null&&ar(r,t,1,-1)}function ja(t){var r=br();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:t},r.queue=t,t=t.dispatch=Sc.bind(null,mt,t),[r.memoizedState,t]}function zn(t,r,e,n){return t={tag:t,create:r,destroy:e,deps:n,next:null},r=mt.updateQueue,r===null?(r={lastEffect:null,stores:null},mt.updateQueue=r,r.lastEffect=t.next=t):(e=r.lastEffect,e===null?r.lastEffect=t.next=t:(n=e.next,e.next=t,t.next=n,r.lastEffect=t)),t}function zg(){return rr().memoizedState}function mo(t,r,e,n){var o=br();mt.flags|=t,o.memoizedState=zn(1|r,e,void 0,n===void 0?null:n)}function Jo(t,r,e,n){var o=rr();n=n===void 0?null:n;var s=void 0;if(kt!==null){var l=kt.memoizedState;if(s=l.destroy,n!==null&&fl(n,l.deps)){o.memoizedState=zn(r,e,s,n);return}}mt.flags|=t,o.memoizedState=zn(1|r,e,s,n)}function Ca(t,r){return mo(8390656,8,t,r)}function hl(t,r){return Jo(2048,8,t,r)}function Tg(t,r){return Jo(4,2,t,r)}function Ag(t,r){return Jo(4,4,t,r)}function Dg(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Bg(t,r,e){return e=e!=null?e.concat([t]):null,Jo(4,4,Dg.bind(null,r,t),e)}function xl(){}function Fg(t,r){var e=rr();r=r===void 0?null:r;var n=e.memoizedState;return n!==null&&r!==null&&fl(r,n[1])?n[0]:(e.memoizedState=[t,r],t)}function _g(t,r){var e=rr();r=r===void 0?null:r;var n=e.memoizedState;return n!==null&&r!==null&&fl(r,n[1])?n[0]:(t=t(),e.memoizedState=[t,r],t)}function Rg(t,r,e){return se&21?(dr(e,r)||(e=Wd(),mt.lanes|=e,ie|=e,t.baseState=!0),r):(t.baseState&&(t.baseState=!1,Wt=!0),t.memoizedState=e)}function wc(t,r){var e=nt;nt=e!==0&&4>e?e:4,t(!0);var n=Ts.transition;Ts.transition={};try{t(!1),r()}finally{nt=e,Ts.transition=n}}function Lg(){return rr().memoizedState}function kc(t,r,e){var n=Or(t);if(e={lane:n,action:e,hasEagerState:!1,eagerState:null,next:null},Ng(t))Mg(r,e);else if(e=yg(t,r,e,n),e!==null){var o=Lt();ar(e,t,n,o),Pg(e,r,n)}}function Sc(t,r,e){var n=Or(t),o={lane:n,action:e,hasEagerState:!1,eagerState:null,next:null};if(Ng(t))Mg(r,o);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=r.lastRenderedReducer,s!==null))try{var l=r.lastRenderedState,a=s(l,e);if(o.hasEagerState=!0,o.eagerState=a,dr(a,l)){var d=r.interleaved;d===null?(o.next=o,ul(r)):(o.next=d.next,d.next=o),r.interleaved=o;return}}catch{}finally{}e=yg(t,r,o,n),e!==null&&(o=Lt(),ar(e,t,n,o),Pg(e,r,n))}}function Ng(t){var r=t.alternate;return t===mt||r!==null&&r===mt}function Mg(t,r){dn=No=!0;var e=t.pending;e===null?r.next=r:(r.next=e.next,e.next=r),t.pending=r}function Pg(t,r,e){if(e&4194240){var n=r.lanes;n&=t.pendingLanes,e|=n,r.lanes=e,Ji(t,e)}}var Mo={readContext:tr,useCallback:At,useContext:At,useEffect:At,useImperativeHandle:At,useInsertionEffect:At,useLayoutEffect:At,useMemo:At,useReducer:At,useRef:At,useState:At,useDebugValue:At,useDeferredValue:At,useTransition:At,useMutableSource:At,useSyncExternalStore:At,useId:At,unstable_isNewReconciler:!1},jc={readContext:tr,useCallback:function(t,r){return br().memoizedState=[t,r===void 0?null:r],t},useContext:tr,useEffect:Ca,useImperativeHandle:function(t,r,e){return e=e!=null?e.concat([t]):null,mo(4194308,4,Dg.bind(null,r,t),e)},useLayoutEffect:function(t,r){return mo(4194308,4,t,r)},useInsertionEffect:function(t,r){return mo(4,2,t,r)},useMemo:function(t,r){var e=br();return r=r===void 0?null:r,t=t(),e.memoizedState=[t,r],t},useReducer:function(t,r,e){var n=br();return r=e!==void 0?e(r):r,n.memoizedState=n.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},n.queue=t,t=t.dispatch=kc.bind(null,mt,t),[n.memoizedState,t]},useRef:function(t){var r=br();return t={current:t},r.memoizedState=t},useState:ja,useDebugValue:xl,useDeferredValue:function(t){return br().memoizedState=t},useTransition:function(){var t=ja(!1),r=t[0];return t=wc.bind(null,t[1]),br().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,e){var n=mt,o=br();if(dt){if(e===void 0)throw Error(B(407));e=e()}else{if(e=r(),Ct===null)throw Error(B(349));se&30||Sg(n,r,e)}o.memoizedState=e;var s={value:e,getSnapshot:r};return o.queue=s,Ca(Cg.bind(null,n,s,t),[t]),n.flags|=2048,zn(9,jg.bind(null,n,s,e,r),void 0,null),e},useId:function(){var t=br(),r=Ct.identifierPrefix;if(dt){var e=hr,n=yr;e=(n&~(1<<32-lr(n)-1)).toString(32)+e,r=":"+r+"R"+e,e=In++,0<e&&(r+="H"+e.toString(32)),r+=":"}else e=xc++,r=":"+r+"r"+e.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Cc={readContext:tr,useCallback:Fg,useContext:tr,useEffect:hl,useImperativeHandle:Bg,useInsertionEffect:Tg,useLayoutEffect:Ag,useMemo:_g,useReducer:As,useRef:zg,useState:function(){return As(En)},useDebugValue:xl,useDeferredValue:function(t){var r=rr();return Rg(r,kt.memoizedState,t)},useTransition:function(){var t=As(En)[0],r=rr().memoizedState;return[t,r]},useMutableSource:wg,useSyncExternalStore:kg,useId:Lg,unstable_isNewReconciler:!1},Ic={readContext:tr,useCallback:Fg,useContext:tr,useEffect:hl,useImperativeHandle:Bg,useInsertionEffect:Tg,useLayoutEffect:Ag,useMemo:_g,useReducer:Ds,useRef:zg,useState:function(){return Ds(En)},useDebugValue:xl,useDeferredValue:function(t){var r=rr();return kt===null?r.memoizedState=t:Rg(r,kt.memoizedState,t)},useTransition:function(){var t=Ds(En)[0],r=rr().memoizedState;return[t,r]},useMutableSource:wg,useSyncExternalStore:kg,useId:Lg,unstable_isNewReconciler:!1};function or(t,r){if(t&&t.defaultProps){r=pt({},r),t=t.defaultProps;for(var e in t)r[e]===void 0&&(r[e]=t[e]);return r}return r}function xi(t,r,e,n){r=t.memoizedState,e=e(n,r),e=e==null?r:pt({},r,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var Zo={isMounted:function(t){return(t=t._reactInternals)?de(t)===t:!1},enqueueSetState:function(t,r,e){t=t._reactInternals;var n=Lt(),o=Or(t),s=xr(n,o);s.payload=r,e!=null&&(s.callback=e),r=Pr(t,s,o),r!==null&&(ar(r,t,o,n),bo(r,t,o))},enqueueReplaceState:function(t,r,e){t=t._reactInternals;var n=Lt(),o=Or(t),s=xr(n,o);s.tag=1,s.payload=r,e!=null&&(s.callback=e),r=Pr(t,s,o),r!==null&&(ar(r,t,o,n),bo(r,t,o))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var e=Lt(),n=Or(t),o=xr(e,n);o.tag=2,r!=null&&(o.callback=r),r=Pr(t,o,n),r!==null&&(ar(r,t,n,e),bo(r,t,n))}};function Ia(t,r,e,n,o,s,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,s,l):r.prototype&&r.prototype.isPureReactComponent?!xn(e,n)||!xn(o,s):!0}function Wg(t,r,e){var n=!1,o=Ur,s=r.contextType;return typeof s=="object"&&s!==null?s=tr(s):(o=$t(r)?ne:_t.current,n=r.contextTypes,s=(n=n!=null)?Fe(t,o):Ur),r=new r(e,s),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Zo,t.stateNode=r,r._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=o,t.__reactInternalMemoizedMaskedChildContext=s),r}function Ea(t,r,e,n){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(e,n),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(e,n),r.state!==t&&Zo.enqueueReplaceState(r,r.state,null)}function wi(t,r,e,n){var o=t.stateNode;o.props=e,o.state=t.memoizedState,o.refs={},bl(t);var s=r.contextType;typeof s=="object"&&s!==null?o.context=tr(s):(s=$t(r)?ne:_t.current,o.context=Fe(t,s)),o.state=t.memoizedState,s=r.getDerivedStateFromProps,typeof s=="function"&&(xi(t,r,s,e),o.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(r=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),r!==o.state&&Zo.enqueueReplaceState(o,o.state,null),Ro(t,e,o,n),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308)}function Ne(t,r){try{var e="",n=r;do e+=tb(n),n=n.return;while(n);var o=e}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:r,stack:o,digest:null}}function Bs(t,r,e){return{value:t,source:null,stack:e??null,digest:r??null}}function ki(t,r){try{console.error(r.value)}catch(e){setTimeout(function(){throw e})}}var Ec=typeof WeakMap=="function"?WeakMap:Map;function Og(t,r,e){e=xr(-1,e),e.tag=3,e.payload={element:null};var n=r.value;return e.callback=function(){Wo||(Wo=!0,Bi=n),ki(t,r)},e}function $g(t,r,e){e=xr(-1,e),e.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var o=r.value;e.payload=function(){return n(o)},e.callback=function(){ki(t,r)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){ki(t,r),typeof n!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var l=r.stack;this.componentDidCatch(r.value,{componentStack:l!==null?l:""})}),e}function za(t,r,e){var n=t.pingCache;if(n===null){n=t.pingCache=new Ec;var o=new Set;n.set(r,o)}else o=n.get(r),o===void 0&&(o=new Set,n.set(r,o));o.has(e)||(o.add(e),t=Oc.bind(null,t,r,e),r.then(t,t))}function Ta(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function Aa(t,r,e,n,o){return t.mode&1?(t.flags|=65536,t.lanes=o,t):(t===r?t.flags|=65536:(t.flags|=128,e.flags|=131072,e.flags&=-52805,e.tag===1&&(e.alternate===null?e.tag=17:(r=xr(-1,1),r.tag=2,Pr(e,r,1))),e.lanes|=1),t)}var zc=Cr.ReactCurrentOwner,Wt=!1;function Rt(t,r,e,n){r.child=t===null?vg(r,null,e,n):Re(r,t.child,e,n)}function Da(t,r,e,n,o){e=e.render;var s=r.ref;return Ae(r,o),n=vl(t,r,e,n,s,o),e=yl(),t!==null&&!Wt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~o,jr(t,r,o)):(dt&&e&&sl(r),r.flags|=1,Rt(t,r,n,o),r.child)}function Ba(t,r,e,n,o){if(t===null){var s=e.type;return typeof s=="function"&&!zl(s)&&s.defaultProps===void 0&&e.compare===null&&e.defaultProps===void 0?(r.tag=15,r.type=s,Hg(t,r,s,n,o)):(t=yo(e.type,null,n,r,r.mode,o),t.ref=r.ref,t.return=r,r.child=t)}if(s=t.child,!(t.lanes&o)){var l=s.memoizedProps;if(e=e.compare,e=e!==null?e:xn,e(l,n)&&t.ref===r.ref)return jr(t,r,o)}return r.flags|=1,t=$r(s,n),t.ref=r.ref,t.return=r,r.child=t}function Hg(t,r,e,n,o){if(t!==null){var s=t.memoizedProps;if(xn(s,n)&&t.ref===r.ref)if(Wt=!1,r.pendingProps=n=s,(t.lanes&o)!==0)t.flags&131072&&(Wt=!0);else return r.lanes=t.lanes,jr(t,r,o)}return Si(t,r,e,n,o)}function Ug(t,r,e){var n=r.pendingProps,o=n.children,s=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(je,Ut),Ut|=e;else{if(!(e&1073741824))return t=s!==null?s.baseLanes|e:e,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,it(je,Ut),Ut|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:e,it(je,Ut),Ut|=n}else s!==null?(n=s.baseLanes|e,r.memoizedState=null):n=e,it(je,Ut),Ut|=n;return Rt(t,r,o,e),r.child}function Vg(t,r){var e=r.ref;(t===null&&e!==null||t!==null&&t.ref!==e)&&(r.flags|=512,r.flags|=2097152)}function Si(t,r,e,n,o){var s=$t(e)?ne:_t.current;return s=Fe(r,s),Ae(r,o),e=vl(t,r,e,n,s,o),n=yl(),t!==null&&!Wt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~o,jr(t,r,o)):(dt&&n&&sl(r),r.flags|=1,Rt(t,r,e,o),r.child)}function Fa(t,r,e,n,o){if($t(e)){var s=!0;Ao(r)}else s=!1;if(Ae(r,o),r.stateNode===null)po(t,r),Wg(r,e,n),wi(r,e,n,o),n=!0;else if(t===null){var l=r.stateNode,a=r.memoizedProps;l.props=a;var d=l.context,g=e.contextType;typeof g=="object"&&g!==null?g=tr(g):(g=$t(e)?ne:_t.current,g=Fe(r,g));var p=e.getDerivedStateFromProps,f=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==n||d!==g)&&Ea(r,l,n,g),Tr=!1;var v=r.memoizedState;l.state=v,Ro(r,n,l,o),d=r.memoizedState,a!==n||v!==d||Ot.current||Tr?(typeof p=="function"&&(xi(r,e,p,n),d=r.memoizedState),(a=Tr||Ia(r,e,a,n,v,d,g))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(r.flags|=4194308)):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=n,r.memoizedState=d),l.props=n,l.state=d,l.context=g,n=a):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),n=!1)}else{l=r.stateNode,hg(t,r),a=r.memoizedProps,g=r.type===r.elementType?a:or(r.type,a),l.props=g,f=r.pendingProps,v=l.context,d=e.contextType,typeof d=="object"&&d!==null?d=tr(d):(d=$t(e)?ne:_t.current,d=Fe(r,d));var j=e.getDerivedStateFromProps;(p=typeof j=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||v!==d)&&Ea(r,l,n,d),Tr=!1,v=r.memoizedState,l.state=v,Ro(r,n,l,o);var w=r.memoizedState;a!==f||v!==w||Ot.current||Tr?(typeof j=="function"&&(xi(r,e,j,n),w=r.memoizedState),(g=Tr||Ia(r,e,g,n,v,w,d)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,w,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,w,d)),typeof l.componentDidUpdate=="function"&&(r.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&v===t.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&v===t.memoizedState||(r.flags|=1024),r.memoizedProps=n,r.memoizedState=w),l.props=n,l.state=w,l.context=d,n=g):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&v===t.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&v===t.memoizedState||(r.flags|=1024),n=!1)}return ji(t,r,e,n,s,o)}function ji(t,r,e,n,o,s){Vg(t,r);var l=(r.flags&128)!==0;if(!n&&!l)return o&&ya(r,e,!1),jr(t,r,s);n=r.stateNode,zc.current=r;var a=l&&typeof e.getDerivedStateFromError!="function"?null:n.render();return r.flags|=1,t!==null&&l?(r.child=Re(r,t.child,null,s),r.child=Re(r,null,a,s)):Rt(t,r,a,s),r.memoizedState=n.state,o&&ya(r,e,!0),r.child}function Gg(t){var r=t.stateNode;r.pendingContext?va(t,r.pendingContext,r.pendingContext!==r.context):r.context&&va(t,r.context,!1),cl(t,r.containerInfo)}function _a(t,r,e,n,o){return _e(),ll(o),r.flags|=256,Rt(t,r,e,n),r.child}var Ci={dehydrated:null,treeContext:null,retryLane:0};function Ii(t){return{baseLanes:t,cachePool:null,transitions:null}}function Qg(t,r,e){var n=r.pendingProps,o=bt.current,s=!1,l=(r.flags&128)!==0,a;if((a=l)||(a=t!==null&&t.memoizedState===null?!1:(o&2)!==0),a?(s=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(o|=1),it(bt,o&1),t===null)return yi(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(r.mode&1?t.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(l=n.children,t=n.fallback,s?(n=r.mode,s=r.child,l={mode:"hidden",children:l},!(n&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=rs(l,n,0,null),t=re(t,n,e,null),s.return=r,t.return=r,s.sibling=t,r.child=s,r.child.memoizedState=Ii(e),r.memoizedState=Ci,t):wl(r,l));if(o=t.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Tc(t,r,l,n,a,o,e);if(s){s=n.fallback,l=r.mode,o=t.child,a=o.sibling;var d={mode:"hidden",children:n.children};return!(l&1)&&r.child!==o?(n=r.child,n.childLanes=0,n.pendingProps=d,r.deletions=null):(n=$r(o,d),n.subtreeFlags=o.subtreeFlags&14680064),a!==null?s=$r(a,s):(s=re(s,l,e,null),s.flags|=2),s.return=r,n.return=r,n.sibling=s,r.child=n,n=s,s=r.child,l=t.child.memoizedState,l=l===null?Ii(e):{baseLanes:l.baseLanes|e,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=t.childLanes&~e,r.memoizedState=Ci,n}return s=t.child,t=s.sibling,n=$r(s,{mode:"visible",children:n.children}),!(r.mode&1)&&(n.lanes=e),n.return=r,n.sibling=null,t!==null&&(e=r.deletions,e===null?(r.deletions=[t],r.flags|=16):e.push(t)),r.child=n,r.memoizedState=null,n}function wl(t,r){return r=rs({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Jn(t,r,e,n){return n!==null&&ll(n),Re(r,t.child,null,e),t=wl(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Tc(t,r,e,n,o,s,l){if(e)return r.flags&256?(r.flags&=-257,n=Bs(Error(B(422))),Jn(t,r,l,n)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(s=n.fallback,o=r.mode,n=rs({mode:"visible",children:n.children},o,0,null),s=re(s,o,l,null),s.flags|=2,n.return=r,s.return=r,n.sibling=s,r.child=n,r.mode&1&&Re(r,t.child,null,l),r.child.memoizedState=Ii(l),r.memoizedState=Ci,s);if(!(r.mode&1))return Jn(t,r,l,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var a=n.dgst;return n=a,s=Error(B(419)),n=Bs(s,n,void 0),Jn(t,r,l,n)}if(a=(l&t.childLanes)!==0,Wt||a){if(n=Ct,n!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|l)?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,Sr(t,o),ar(n,t,o,-1))}return El(),n=Bs(Error(B(421))),Jn(t,r,l,n)}return o.data==="$?"?(r.flags|=128,r.child=t.child,r=$c.bind(null,t),o._reactRetry=r,null):(t=s.treeContext,Vt=Mr(o.nextSibling),Gt=r,dt=!0,ir=null,t!==null&&(Xt[Jt++]=yr,Xt[Jt++]=hr,Xt[Jt++]=oe,yr=t.id,hr=t.overflow,oe=r),r=wl(r,n.children),r.flags|=4096,r)}function Ra(t,r,e){t.lanes|=r;var n=t.alternate;n!==null&&(n.lanes|=r),hi(t.return,r,e)}function Fs(t,r,e,n,o){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:n,tail:e,tailMode:o}:(s.isBackwards=r,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=e,s.tailMode=o)}function Yg(t,r,e){var n=r.pendingProps,o=n.revealOrder,s=n.tail;if(Rt(t,r,n.children,e),n=bt.current,n&2)n=n&1|2,r.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ra(t,e,r);else if(t.tag===19)Ra(t,e,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break t;for(;t.sibling===null;){if(t.return===null||t.return===r)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(it(bt,n),!(r.mode&1))r.memoizedState=null;else switch(o){case"forwards":for(e=r.child,o=null;e!==null;)t=e.alternate,t!==null&&Lo(t)===null&&(o=e),e=e.sibling;e=o,e===null?(o=r.child,r.child=null):(o=e.sibling,e.sibling=null),Fs(r,!1,o,e,s);break;case"backwards":for(e=null,o=r.child,r.child=null;o!==null;){if(t=o.alternate,t!==null&&Lo(t)===null){r.child=o;break}t=o.sibling,o.sibling=e,e=o,o=t}Fs(r,!0,e,null,s);break;case"together":Fs(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function po(t,r){!(r.mode&1)&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function jr(t,r,e){if(t!==null&&(r.dependencies=t.dependencies),ie|=r.lanes,!(e&r.childLanes))return null;if(t!==null&&r.child!==t.child)throw Error(B(153));if(r.child!==null){for(t=r.child,e=$r(t,t.pendingProps),r.child=e,e.return=r;t.sibling!==null;)t=t.sibling,e=e.sibling=$r(t,t.pendingProps),e.return=r;e.sibling=null}return r.child}function Ac(t,r,e){switch(r.tag){case 3:Gg(r),_e();break;case 5:xg(r);break;case 1:$t(r.type)&&Ao(r);break;case 4:cl(r,r.stateNode.containerInfo);break;case 10:var n=r.type._context,o=r.memoizedProps.value;it(Fo,n._currentValue),n._currentValue=o;break;case 13:if(n=r.memoizedState,n!==null)return n.dehydrated!==null?(it(bt,bt.current&1),r.flags|=128,null):e&r.child.childLanes?Qg(t,r,e):(it(bt,bt.current&1),t=jr(t,r,e),t!==null?t.sibling:null);it(bt,bt.current&1);break;case 19:if(n=(e&r.childLanes)!==0,t.flags&128){if(n)return Yg(t,r,e);r.flags|=128}if(o=r.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),it(bt,bt.current),n)break;return null;case 22:case 23:return r.lanes=0,Ug(t,r,e)}return jr(t,r,e)}var Kg,Ei,Xg,Jg;Kg=function(t,r){for(var e=r.child;e!==null;){if(e.tag===5||e.tag===6)t.appendChild(e.stateNode);else if(e.tag!==4&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break;for(;e.sibling===null;){if(e.return===null||e.return===r)return;e=e.return}e.sibling.return=e.return,e=e.sibling}};Ei=function(){};Xg=function(t,r,e,n){var o=t.memoizedProps;if(o!==n){t=r.stateNode,qr(pr.current);var s=null;switch(e){case"input":o=Ks(t,o),n=Ks(t,n),s=[];break;case"select":o=pt({},o,{value:void 0}),n=pt({},n,{value:void 0}),s=[];break;case"textarea":o=Zs(t,o),n=Zs(t,n),s=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=zo)}ti(e,n);var l;e=null;for(g in o)if(!n.hasOwnProperty(g)&&o.hasOwnProperty(g)&&o[g]!=null)if(g==="style"){var a=o[g];for(l in a)a.hasOwnProperty(l)&&(e||(e={}),e[l]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(cn.hasOwnProperty(g)?s||(s=[]):(s=s||[]).push(g,null));for(g in n){var d=n[g];if(a=o!=null?o[g]:void 0,n.hasOwnProperty(g)&&d!==a&&(d!=null||a!=null))if(g==="style")if(a){for(l in a)!a.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(e||(e={}),e[l]="");for(l in d)d.hasOwnProperty(l)&&a[l]!==d[l]&&(e||(e={}),e[l]=d[l])}else e||(s||(s=[]),s.push(g,e)),e=d;else g==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(s=s||[]).push(g,d)):g==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(g,""+d):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(cn.hasOwnProperty(g)?(d!=null&&g==="onScroll"&&lt("scroll",t),s||a===d||(s=[])):(s=s||[]).push(g,d))}e&&(s=s||[]).push("style",e);var g=s;(r.updateQueue=g)&&(r.flags|=4)}};Jg=function(t,r,e,n){e!==n&&(r.flags|=4)};function Ke(t,r){if(!dt)switch(t.tailMode){case"hidden":r=t.tail;for(var e=null;r!==null;)r.alternate!==null&&(e=r),r=r.sibling;e===null?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Dt(t){var r=t.alternate!==null&&t.alternate.child===t.child,e=0,n=0;if(r)for(var o=t.child;o!==null;)e|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=t,o=o.sibling;else for(o=t.child;o!==null;)e|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=t,o=o.sibling;return t.subtreeFlags|=n,t.childLanes=e,r}function Dc(t,r,e){var n=r.pendingProps;switch(il(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(r),null;case 1:return $t(r.type)&&To(),Dt(r),null;case 3:return n=r.stateNode,Le(),at(Ot),at(_t),pl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Kn(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,ir!==null&&(Ri(ir),ir=null))),Ei(t,r),Dt(r),null;case 5:ml(r);var o=qr(Cn.current);if(e=r.type,t!==null&&r.stateNode!=null)Xg(t,r,e,n,o),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!n){if(r.stateNode===null)throw Error(B(166));return Dt(r),null}if(t=qr(pr.current),Kn(r)){n=r.stateNode,e=r.type;var s=r.memoizedProps;switch(n[cr]=r,n[Sn]=s,t=(r.mode&1)!==0,e){case"dialog":lt("cancel",n),lt("close",n);break;case"iframe":case"object":case"embed":lt("load",n);break;case"video":case"audio":for(o=0;o<en.length;o++)lt(en[o],n);break;case"source":lt("error",n);break;case"img":case"image":case"link":lt("error",n),lt("load",n);break;case"details":lt("toggle",n);break;case"input":Ul(n,s),lt("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},lt("invalid",n);break;case"textarea":Gl(n,s),lt("invalid",n)}ti(e,s),o=null;for(var l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="children"?typeof a=="string"?n.textContent!==a&&(s.suppressHydrationWarning!==!0&&Yn(n.textContent,a,t),o=["children",a]):typeof a=="number"&&n.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Yn(n.textContent,a,t),o=["children",""+a]):cn.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&lt("scroll",n)}switch(e){case"input":Wn(n),Vl(n,s,!0);break;case"textarea":Wn(n),Ql(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=zo)}n=o,r.updateQueue=n,n!==null&&(r.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Cd(e)),t==="http://www.w3.org/1999/xhtml"?e==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=l.createElement(e,{is:n.is}):(t=l.createElement(e),e==="select"&&(l=t,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):t=l.createElementNS(t,e),t[cr]=r,t[Sn]=n,Kg(t,r,!1,!1),r.stateNode=t;t:{switch(l=ri(e,n),e){case"dialog":lt("cancel",t),lt("close",t),o=n;break;case"iframe":case"object":case"embed":lt("load",t),o=n;break;case"video":case"audio":for(o=0;o<en.length;o++)lt(en[o],t);o=n;break;case"source":lt("error",t),o=n;break;case"img":case"image":case"link":lt("error",t),lt("load",t),o=n;break;case"details":lt("toggle",t),o=n;break;case"input":Ul(t,n),o=Ks(t,n),lt("invalid",t);break;case"option":o=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},o=pt({},n,{value:void 0}),lt("invalid",t);break;case"textarea":Gl(t,n),o=Zs(t,n),lt("invalid",t);break;default:o=n}ti(e,o),a=o;for(s in a)if(a.hasOwnProperty(s)){var d=a[s];s==="style"?zd(t,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Id(t,d)):s==="children"?typeof d=="string"?(e!=="textarea"||d!=="")&&mn(t,d):typeof d=="number"&&mn(t,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(cn.hasOwnProperty(s)?d!=null&&s==="onScroll"&&lt("scroll",t):d!=null&&Vi(t,s,d,l))}switch(e){case"input":Wn(t),Vl(t,n,!1);break;case"textarea":Wn(t),Ql(t);break;case"option":n.value!=null&&t.setAttribute("value",""+Hr(n.value));break;case"select":t.multiple=!!n.multiple,s=n.value,s!=null?Ie(t,!!n.multiple,s,!1):n.defaultValue!=null&&Ie(t,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(t.onclick=zo)}switch(e){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break t;case"img":n=!0;break t;default:n=!1}}n&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Dt(r),null;case 6:if(t&&r.stateNode!=null)Jg(t,r,t.memoizedProps,n);else{if(typeof n!="string"&&r.stateNode===null)throw Error(B(166));if(e=qr(Cn.current),qr(pr.current),Kn(r)){if(n=r.stateNode,e=r.memoizedProps,n[cr]=r,(s=n.nodeValue!==e)&&(t=Gt,t!==null))switch(t.tag){case 3:Yn(n.nodeValue,e,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Yn(n.nodeValue,e,(t.mode&1)!==0)}s&&(r.flags|=4)}else n=(e.nodeType===9?e:e.ownerDocument).createTextNode(n),n[cr]=r,r.stateNode=n}return Dt(r),null;case 13:if(at(bt),n=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&Vt!==null&&r.mode&1&&!(r.flags&128))pg(),_e(),r.flags|=98560,s=!1;else if(s=Kn(r),n!==null&&n.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=r.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[cr]=r}else _e(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Dt(r),s=!1}else ir!==null&&(Ri(ir),ir=null),s=!0;if(!s)return r.flags&65536?r:null}return r.flags&128?(r.lanes=e,r):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(r.child.flags|=8192,r.mode&1&&(t===null||bt.current&1?St===0&&(St=3):El())),r.updateQueue!==null&&(r.flags|=4),Dt(r),null);case 4:return Le(),Ei(t,r),t===null&&wn(r.stateNode.containerInfo),Dt(r),null;case 10:return gl(r.type._context),Dt(r),null;case 17:return $t(r.type)&&To(),Dt(r),null;case 19:if(at(bt),s=r.memoizedState,s===null)return Dt(r),null;if(n=(r.flags&128)!==0,l=s.rendering,l===null)if(n)Ke(s,!1);else{if(St!==0||t!==null&&t.flags&128)for(t=r.child;t!==null;){if(l=Lo(t),l!==null){for(r.flags|=128,Ke(s,!1),n=l.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),r.subtreeFlags=0,n=e,e=r.child;e!==null;)s=e,t=n,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,t=l.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e=e.sibling;return it(bt,bt.current&1|2),r.child}t=t.sibling}s.tail!==null&&yt()>Me&&(r.flags|=128,n=!0,Ke(s,!1),r.lanes=4194304)}else{if(!n)if(t=Lo(l),t!==null){if(r.flags|=128,n=!0,e=t.updateQueue,e!==null&&(r.updateQueue=e,r.flags|=4),Ke(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!dt)return Dt(r),null}else 2*yt()-s.renderingStartTime>Me&&e!==1073741824&&(r.flags|=128,n=!0,Ke(s,!1),r.lanes=4194304);s.isBackwards?(l.sibling=r.child,r.child=l):(e=s.last,e!==null?e.sibling=l:r.child=l,s.last=l)}return s.tail!==null?(r=s.tail,s.rendering=r,s.tail=r.sibling,s.renderingStartTime=yt(),r.sibling=null,e=bt.current,it(bt,n?e&1|2:e&1),r):(Dt(r),null);case 22:case 23:return Il(),n=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(r.flags|=8192),n&&r.mode&1?Ut&1073741824&&(Dt(r),r.subtreeFlags&6&&(r.flags|=8192)):Dt(r),null;case 24:return null;case 25:return null}throw Error(B(156,r.tag))}function Bc(t,r){switch(il(r),r.tag){case 1:return $t(r.type)&&To(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Le(),at(Ot),at(_t),pl(),t=r.flags,t&65536&&!(t&128)?(r.flags=t&-65537|128,r):null;case 5:return ml(r),null;case 13:if(at(bt),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(B(340));_e()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return at(bt),null;case 4:return Le(),null;case 10:return gl(r.type._context),null;case 22:case 23:return Il(),null;case 24:return null;default:return null}}var Zn=!1,Bt=!1,Fc=typeof WeakSet=="function"?WeakSet:Set,P=null;function Se(t,r){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){vt(t,r,n)}else e.current=null}function zi(t,r,e){try{e()}catch(n){vt(t,r,n)}}var La=!1;function _c(t,r){if(ui=Co,t=eg(),ol(t)){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{e=(e=t.ownerDocument)&&e.defaultView||window;var n=e.getSelection&&e.getSelection();if(n&&n.rangeCount!==0){e=n.anchorNode;var o=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{e.nodeType,s.nodeType}catch{e=null;break t}var l=0,a=-1,d=-1,g=0,p=0,f=t,v=null;r:for(;;){for(var j;f!==e||o!==0&&f.nodeType!==3||(a=l+o),f!==s||n!==0&&f.nodeType!==3||(d=l+n),f.nodeType===3&&(l+=f.nodeValue.length),(j=f.firstChild)!==null;)v=f,f=j;for(;;){if(f===t)break r;if(v===e&&++g===o&&(a=l),v===s&&++p===n&&(d=l),(j=f.nextSibling)!==null)break;f=v,v=f.parentNode}f=j}e=a===-1||d===-1?null:{start:a,end:d}}else e=null}e=e||{start:0,end:0}}else e=null;for(bi={focusedElem:t,selectionRange:e},Co=!1,P=r;P!==null;)if(r=P,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,P=t;else for(;P!==null;){r=P;try{var w=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var x=w.memoizedProps,S=w.memoizedState,c=r.stateNode,u=c.getSnapshotBeforeUpdate(r.elementType===r.type?x:or(r.type,x),S);c.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var b=r.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(h){vt(r,r.return,h)}if(t=r.sibling,t!==null){t.return=r.return,P=t;break}P=r.return}return w=La,La=!1,w}function gn(t,r,e){var n=r.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&t)===t){var s=o.destroy;o.destroy=void 0,s!==void 0&&zi(r,e,s)}o=o.next}while(o!==n)}}function qo(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var e=r=r.next;do{if((e.tag&t)===t){var n=e.create;e.destroy=n()}e=e.next}while(e!==r)}}function Ti(t){var r=t.ref;if(r!==null){var e=t.stateNode;switch(t.tag){case 5:t=e;break;default:t=e}typeof r=="function"?r(t):r.current=t}}function Zg(t){var r=t.alternate;r!==null&&(t.alternate=null,Zg(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[cr],delete r[Sn],delete r[pi],delete r[fc],delete r[vc])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function qg(t){return t.tag===5||t.tag===3||t.tag===4}function Na(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||qg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ai(t,r,e){var n=t.tag;if(n===5||n===6)t=t.stateNode,r?e.nodeType===8?e.parentNode.insertBefore(t,r):e.insertBefore(t,r):(e.nodeType===8?(r=e.parentNode,r.insertBefore(t,e)):(r=e,r.appendChild(t)),e=e._reactRootContainer,e!=null||r.onclick!==null||(r.onclick=zo));else if(n!==4&&(t=t.child,t!==null))for(Ai(t,r,e),t=t.sibling;t!==null;)Ai(t,r,e),t=t.sibling}function Di(t,r,e){var n=t.tag;if(n===5||n===6)t=t.stateNode,r?e.insertBefore(t,r):e.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(Di(t,r,e),t=t.sibling;t!==null;)Di(t,r,e),t=t.sibling}var It=null,sr=!1;function Ir(t,r,e){for(e=e.child;e!==null;)tu(t,r,e),e=e.sibling}function tu(t,r,e){if(mr&&typeof mr.onCommitFiberUnmount=="function")try{mr.onCommitFiberUnmount(Vo,e)}catch{}switch(e.tag){case 5:Bt||Se(e,r);case 6:var n=It,o=sr;It=null,Ir(t,r,e),It=n,sr=o,It!==null&&(sr?(t=It,e=e.stateNode,t.nodeType===8?t.parentNode.removeChild(e):t.removeChild(e)):It.removeChild(e.stateNode));break;case 18:It!==null&&(sr?(t=It,e=e.stateNode,t.nodeType===8?Is(t.parentNode,e):t.nodeType===1&&Is(t,e),yn(t)):Is(It,e.stateNode));break;case 4:n=It,o=sr,It=e.stateNode.containerInfo,sr=!0,Ir(t,r,e),It=n,sr=o;break;case 0:case 11:case 14:case 15:if(!Bt&&(n=e.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var s=o,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&zi(e,r,l),o=o.next}while(o!==n)}Ir(t,r,e);break;case 1:if(!Bt&&(Se(e,r),n=e.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=e.memoizedProps,n.state=e.memoizedState,n.componentWillUnmount()}catch(a){vt(e,r,a)}Ir(t,r,e);break;case 21:Ir(t,r,e);break;case 22:e.mode&1?(Bt=(n=Bt)||e.memoizedState!==null,Ir(t,r,e),Bt=n):Ir(t,r,e);break;default:Ir(t,r,e)}}function Ma(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var e=t.stateNode;e===null&&(e=t.stateNode=new Fc),r.forEach(function(n){var o=Hc.bind(null,t,n);e.has(n)||(e.add(n),n.then(o,o))})}}function er(t,r){var e=r.deletions;if(e!==null)for(var n=0;n<e.length;n++){var o=e[n];try{var s=t,l=r,a=l;t:for(;a!==null;){switch(a.tag){case 5:It=a.stateNode,sr=!1;break t;case 3:It=a.stateNode.containerInfo,sr=!0;break t;case 4:It=a.stateNode.containerInfo,sr=!0;break t}a=a.return}if(It===null)throw Error(B(160));tu(s,l,o),It=null,sr=!1;var d=o.alternate;d!==null&&(d.return=null),o.return=null}catch(g){vt(o,r,g)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)ru(r,t),r=r.sibling}function ru(t,r){var e=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(er(r,t),gr(t),n&4){try{gn(3,t,t.return),qo(3,t)}catch(x){vt(t,t.return,x)}try{gn(5,t,t.return)}catch(x){vt(t,t.return,x)}}break;case 1:er(r,t),gr(t),n&512&&e!==null&&Se(e,e.return);break;case 5:if(er(r,t),gr(t),n&512&&e!==null&&Se(e,e.return),t.flags&32){var o=t.stateNode;try{mn(o,"")}catch(x){vt(t,t.return,x)}}if(n&4&&(o=t.stateNode,o!=null)){var s=t.memoizedProps,l=e!==null?e.memoizedProps:s,a=t.type,d=t.updateQueue;if(t.updateQueue=null,d!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Sd(o,s),ri(a,l);var g=ri(a,s);for(l=0;l<d.length;l+=2){var p=d[l],f=d[l+1];p==="style"?zd(o,f):p==="dangerouslySetInnerHTML"?Id(o,f):p==="children"?mn(o,f):Vi(o,p,f,g)}switch(a){case"input":Xs(o,s);break;case"textarea":jd(o,s);break;case"select":var v=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var j=s.value;j!=null?Ie(o,!!s.multiple,j,!1):v!==!!s.multiple&&(s.defaultValue!=null?Ie(o,!!s.multiple,s.defaultValue,!0):Ie(o,!!s.multiple,s.multiple?[]:"",!1))}o[Sn]=s}catch(x){vt(t,t.return,x)}}break;case 6:if(er(r,t),gr(t),n&4){if(t.stateNode===null)throw Error(B(162));o=t.stateNode,s=t.memoizedProps;try{o.nodeValue=s}catch(x){vt(t,t.return,x)}}break;case 3:if(er(r,t),gr(t),n&4&&e!==null&&e.memoizedState.isDehydrated)try{yn(r.containerInfo)}catch(x){vt(t,t.return,x)}break;case 4:er(r,t),gr(t);break;case 13:er(r,t),gr(t),o=t.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(jl=yt())),n&4&&Ma(t);break;case 22:if(p=e!==null&&e.memoizedState!==null,t.mode&1?(Bt=(g=Bt)||p,er(r,t),Bt=g):er(r,t),gr(t),n&8192){if(g=t.memoizedState!==null,(t.stateNode.isHidden=g)&&!p&&t.mode&1)for(P=t,p=t.child;p!==null;){for(f=P=p;P!==null;){switch(v=P,j=v.child,v.tag){case 0:case 11:case 14:case 15:gn(4,v,v.return);break;case 1:Se(v,v.return);var w=v.stateNode;if(typeof w.componentWillUnmount=="function"){n=v,e=v.return;try{r=n,w.props=r.memoizedProps,w.state=r.memoizedState,w.componentWillUnmount()}catch(x){vt(n,e,x)}}break;case 5:Se(v,v.return);break;case 22:if(v.memoizedState!==null){Wa(f);continue}}j!==null?(j.return=v,P=j):Wa(f)}p=p.sibling}t:for(p=null,f=t;;){if(f.tag===5){if(p===null){p=f;try{o=f.stateNode,g?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,d=f.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=Ed("display",l))}catch(x){vt(t,t.return,x)}}}else if(f.tag===6){if(p===null)try{f.stateNode.nodeValue=g?"":f.memoizedProps}catch(x){vt(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break t;for(;f.sibling===null;){if(f.return===null||f.return===t)break t;p===f&&(p=null),f=f.return}p===f&&(p=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:er(r,t),gr(t),n&4&&Ma(t);break;case 21:break;default:er(r,t),gr(t)}}function gr(t){var r=t.flags;if(r&2){try{t:{for(var e=t.return;e!==null;){if(qg(e)){var n=e;break t}e=e.return}throw Error(B(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(mn(o,""),n.flags&=-33);var s=Na(t);Di(t,s,o);break;case 3:case 4:var l=n.stateNode.containerInfo,a=Na(t);Ai(t,a,l);break;default:throw Error(B(161))}}catch(d){vt(t,t.return,d)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Rc(t,r,e){P=t,eu(t)}function eu(t,r,e){for(var n=(t.mode&1)!==0;P!==null;){var o=P,s=o.child;if(o.tag===22&&n){var l=o.memoizedState!==null||Zn;if(!l){var a=o.alternate,d=a!==null&&a.memoizedState!==null||Bt;a=Zn;var g=Bt;if(Zn=l,(Bt=d)&&!g)for(P=o;P!==null;)l=P,d=l.child,l.tag===22&&l.memoizedState!==null?Oa(o):d!==null?(d.return=l,P=d):Oa(o);for(;s!==null;)P=s,eu(s),s=s.sibling;P=o,Zn=a,Bt=g}Pa(t)}else o.subtreeFlags&8772&&s!==null?(s.return=o,P=s):Pa(t)}}function Pa(t){for(;P!==null;){var r=P;if(r.flags&8772){var e=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Bt||qo(5,r);break;case 1:var n=r.stateNode;if(r.flags&4&&!Bt)if(e===null)n.componentDidMount();else{var o=r.elementType===r.type?e.memoizedProps:or(r.type,e.memoizedProps);n.componentDidUpdate(o,e.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=r.updateQueue;s!==null&&Sa(r,s,n);break;case 3:var l=r.updateQueue;if(l!==null){if(e=null,r.child!==null)switch(r.child.tag){case 5:e=r.child.stateNode;break;case 1:e=r.child.stateNode}Sa(r,l,e)}break;case 5:var a=r.stateNode;if(e===null&&r.flags&4){e=a;var d=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&e.focus();break;case"img":d.src&&(e.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var g=r.alternate;if(g!==null){var p=g.memoizedState;if(p!==null){var f=p.dehydrated;f!==null&&yn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Bt||r.flags&512&&Ti(r)}catch(v){vt(r,r.return,v)}}if(r===t){P=null;break}if(e=r.sibling,e!==null){e.return=r.return,P=e;break}P=r.return}}function Wa(t){for(;P!==null;){var r=P;if(r===t){P=null;break}var e=r.sibling;if(e!==null){e.return=r.return,P=e;break}P=r.return}}function Oa(t){for(;P!==null;){var r=P;try{switch(r.tag){case 0:case 11:case 15:var e=r.return;try{qo(4,r)}catch(d){vt(r,e,d)}break;case 1:var n=r.stateNode;if(typeof n.componentDidMount=="function"){var o=r.return;try{n.componentDidMount()}catch(d){vt(r,o,d)}}var s=r.return;try{Ti(r)}catch(d){vt(r,s,d)}break;case 5:var l=r.return;try{Ti(r)}catch(d){vt(r,l,d)}}}catch(d){vt(r,r.return,d)}if(r===t){P=null;break}var a=r.sibling;if(a!==null){a.return=r.return,P=a;break}P=r.return}}var Lc=Math.ceil,Po=Cr.ReactCurrentDispatcher,kl=Cr.ReactCurrentOwner,qt=Cr.ReactCurrentBatchConfig,q=0,Ct=null,xt=null,Et=0,Ut=0,je=Qr(0),St=0,Tn=null,ie=0,ts=0,Sl=0,un=null,Pt=null,jl=0,Me=1/0,fr=null,Wo=!1,Bi=null,Wr=null,qn=!1,_r=null,Oo=0,bn=0,Fi=null,fo=-1,vo=0;function Lt(){return q&6?yt():fo!==-1?fo:fo=yt()}function Or(t){return t.mode&1?q&2&&Et!==0?Et&-Et:hc.transition!==null?(vo===0&&(vo=Wd()),vo):(t=nt,t!==0||(t=window.event,t=t===void 0?16:Qd(t.type)),t):1}function ar(t,r,e,n){if(50<bn)throw bn=0,Fi=null,Error(B(185));Bn(t,e,n),(!(q&2)||t!==Ct)&&(t===Ct&&(!(q&2)&&(ts|=e),St===4&&Br(t,Et)),Ht(t,n),e===1&&q===0&&!(r.mode&1)&&(Me=yt()+500,Xo&&Yr()))}function Ht(t,r){var e=t.callbackNode;hb(t,r);var n=jo(t,t===Ct?Et:0);if(n===0)e!==null&&Xl(e),t.callbackNode=null,t.callbackPriority=0;else if(r=n&-n,t.callbackPriority!==r){if(e!=null&&Xl(e),r===1)t.tag===0?yc($a.bind(null,t)):bg($a.bind(null,t)),mc(function(){!(q&6)&&Yr()}),e=null;else{switch(Od(n)){case 1:e=Xi;break;case 4:e=Md;break;case 16:e=So;break;case 536870912:e=Pd;break;default:e=So}e=gu(e,nu.bind(null,t))}t.callbackPriority=r,t.callbackNode=e}}function nu(t,r){if(fo=-1,vo=0,q&6)throw Error(B(327));var e=t.callbackNode;if(De()&&t.callbackNode!==e)return null;var n=jo(t,t===Ct?Et:0);if(n===0)return null;if(n&30||n&t.expiredLanes||r)r=$o(t,n);else{r=n;var o=q;q|=2;var s=su();(Ct!==t||Et!==r)&&(fr=null,Me=yt()+500,te(t,r));do try{Pc();break}catch(a){ou(t,a)}while(!0);dl(),Po.current=s,q=o,xt!==null?r=0:(Ct=null,Et=0,r=St)}if(r!==0){if(r===2&&(o=ii(t),o!==0&&(n=o,r=_i(t,o))),r===1)throw e=Tn,te(t,0),Br(t,n),Ht(t,yt()),e;if(r===6)Br(t,n);else{if(o=t.current.alternate,!(n&30)&&!Nc(o)&&(r=$o(t,n),r===2&&(s=ii(t),s!==0&&(n=s,r=_i(t,s))),r===1))throw e=Tn,te(t,0),Br(t,n),Ht(t,yt()),e;switch(t.finishedWork=o,t.finishedLanes=n,r){case 0:case 1:throw Error(B(345));case 2:Xr(t,Pt,fr);break;case 3:if(Br(t,n),(n&130023424)===n&&(r=jl+500-yt(),10<r)){if(jo(t,0)!==0)break;if(o=t.suspendedLanes,(o&n)!==n){Lt(),t.pingedLanes|=t.suspendedLanes&o;break}t.timeoutHandle=mi(Xr.bind(null,t,Pt,fr),r);break}Xr(t,Pt,fr);break;case 4:if(Br(t,n),(n&4194240)===n)break;for(r=t.eventTimes,o=-1;0<n;){var l=31-lr(n);s=1<<l,l=r[l],l>o&&(o=l),n&=~s}if(n=o,n=yt()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Lc(n/1960))-n,10<n){t.timeoutHandle=mi(Xr.bind(null,t,Pt,fr),n);break}Xr(t,Pt,fr);break;case 5:Xr(t,Pt,fr);break;default:throw Error(B(329))}}}return Ht(t,yt()),t.callbackNode===e?nu.bind(null,t):null}function _i(t,r){var e=un;return t.current.memoizedState.isDehydrated&&(te(t,r).flags|=256),t=$o(t,r),t!==2&&(r=Pt,Pt=e,r!==null&&Ri(r)),t}function Ri(t){Pt===null?Pt=t:Pt.push.apply(Pt,t)}function Nc(t){for(var r=t;;){if(r.flags&16384){var e=r.updateQueue;if(e!==null&&(e=e.stores,e!==null))for(var n=0;n<e.length;n++){var o=e[n],s=o.getSnapshot;o=o.value;try{if(!dr(s(),o))return!1}catch{return!1}}}if(e=r.child,r.subtreeFlags&16384&&e!==null)e.return=r,r=e;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Br(t,r){for(r&=~Sl,r&=~ts,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var e=31-lr(r),n=1<<e;t[e]=-1,r&=~n}}function $a(t){if(q&6)throw Error(B(327));De();var r=jo(t,0);if(!(r&1))return Ht(t,yt()),null;var e=$o(t,r);if(t.tag!==0&&e===2){var n=ii(t);n!==0&&(r=n,e=_i(t,n))}if(e===1)throw e=Tn,te(t,0),Br(t,r),Ht(t,yt()),e;if(e===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,Xr(t,Pt,fr),Ht(t,yt()),null}function Cl(t,r){var e=q;q|=1;try{return t(r)}finally{q=e,q===0&&(Me=yt()+500,Xo&&Yr())}}function le(t){_r!==null&&_r.tag===0&&!(q&6)&&De();var r=q;q|=1;var e=qt.transition,n=nt;try{if(qt.transition=null,nt=1,t)return t()}finally{nt=n,qt.transition=e,q=r,!(q&6)&&Yr()}}function Il(){Ut=je.current,at(je)}function te(t,r){t.finishedWork=null,t.finishedLanes=0;var e=t.timeoutHandle;if(e!==-1&&(t.timeoutHandle=-1,cc(e)),xt!==null)for(e=xt.return;e!==null;){var n=e;switch(il(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&To();break;case 3:Le(),at(Ot),at(_t),pl();break;case 5:ml(n);break;case 4:Le();break;case 13:at(bt);break;case 19:at(bt);break;case 10:gl(n.type._context);break;case 22:case 23:Il()}e=e.return}if(Ct=t,xt=t=$r(t.current,null),Et=Ut=r,St=0,Tn=null,Sl=ts=ie=0,Pt=un=null,Zr!==null){for(r=0;r<Zr.length;r++)if(e=Zr[r],n=e.interleaved,n!==null){e.interleaved=null;var o=n.next,s=e.pending;if(s!==null){var l=s.next;s.next=o,n.next=l}e.pending=n}Zr=null}return t}function ou(t,r){do{var e=xt;try{if(dl(),co.current=Mo,No){for(var n=mt.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}No=!1}if(se=0,jt=kt=mt=null,dn=!1,In=0,kl.current=null,e===null||e.return===null){St=1,Tn=r,xt=null;break}t:{var s=t,l=e.return,a=e,d=r;if(r=Et,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var g=d,p=a,f=p.tag;if(!(p.mode&1)&&(f===0||f===11||f===15)){var v=p.alternate;v?(p.updateQueue=v.updateQueue,p.memoizedState=v.memoizedState,p.lanes=v.lanes):(p.updateQueue=null,p.memoizedState=null)}var j=Ta(l);if(j!==null){j.flags&=-257,Aa(j,l,a,s,r),j.mode&1&&za(s,g,r),r=j,d=g;var w=r.updateQueue;if(w===null){var x=new Set;x.add(d),r.updateQueue=x}else w.add(d);break t}else{if(!(r&1)){za(s,g,r),El();break t}d=Error(B(426))}}else if(dt&&a.mode&1){var S=Ta(l);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Aa(S,l,a,s,r),ll(Ne(d,a));break t}}s=d=Ne(d,a),St!==4&&(St=2),un===null?un=[s]:un.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,r&=-r,s.lanes|=r;var c=Og(s,d,r);ka(s,c);break t;case 1:a=d;var u=s.type,b=s.stateNode;if(!(s.flags&128)&&(typeof u.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Wr===null||!Wr.has(b)))){s.flags|=65536,r&=-r,s.lanes|=r;var h=$g(s,a,r);ka(s,h);break t}}s=s.return}while(s!==null)}lu(e)}catch(A){r=A,xt===e&&e!==null&&(xt=e=e.return);continue}break}while(!0)}function su(){var t=Po.current;return Po.current=Mo,t===null?Mo:t}function El(){(St===0||St===3||St===2)&&(St=4),Ct===null||!(ie&268435455)&&!(ts&268435455)||Br(Ct,Et)}function $o(t,r){var e=q;q|=2;var n=su();(Ct!==t||Et!==r)&&(fr=null,te(t,r));do try{Mc();break}catch(o){ou(t,o)}while(!0);if(dl(),q=e,Po.current=n,xt!==null)throw Error(B(261));return Ct=null,Et=0,St}function Mc(){for(;xt!==null;)iu(xt)}function Pc(){for(;xt!==null&&!gb();)iu(xt)}function iu(t){var r=du(t.alternate,t,Ut);t.memoizedProps=t.pendingProps,r===null?lu(t):xt=r,kl.current=null}function lu(t){var r=t;do{var e=r.alternate;if(t=r.return,r.flags&32768){if(e=Bc(e,r),e!==null){e.flags&=32767,xt=e;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{St=6,xt=null;return}}else if(e=Dc(e,r,Ut),e!==null){xt=e;return}if(r=r.sibling,r!==null){xt=r;return}xt=r=t}while(r!==null);St===0&&(St=5)}function Xr(t,r,e){var n=nt,o=qt.transition;try{qt.transition=null,nt=1,Wc(t,r,e,n)}finally{qt.transition=o,nt=n}return null}function Wc(t,r,e,n){do De();while(_r!==null);if(q&6)throw Error(B(327));e=t.finishedWork;var o=t.finishedLanes;if(e===null)return null;if(t.finishedWork=null,t.finishedLanes=0,e===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=e.lanes|e.childLanes;if(xb(t,s),t===Ct&&(xt=Ct=null,Et=0),!(e.subtreeFlags&2064)&&!(e.flags&2064)||qn||(qn=!0,gu(So,function(){return De(),null})),s=(e.flags&15990)!==0,e.subtreeFlags&15990||s){s=qt.transition,qt.transition=null;var l=nt;nt=1;var a=q;q|=4,kl.current=null,_c(t,e),ru(e,t),ic(bi),Co=!!ui,bi=ui=null,t.current=e,Rc(e),ub(),q=a,nt=l,qt.transition=s}else t.current=e;if(qn&&(qn=!1,_r=t,Oo=o),s=t.pendingLanes,s===0&&(Wr=null),mb(e.stateNode),Ht(t,yt()),r!==null)for(n=t.onRecoverableError,e=0;e<r.length;e++)o=r[e],n(o.value,{componentStack:o.stack,digest:o.digest});if(Wo)throw Wo=!1,t=Bi,Bi=null,t;return Oo&1&&t.tag!==0&&De(),s=t.pendingLanes,s&1?t===Fi?bn++:(bn=0,Fi=t):bn=0,Yr(),null}function De(){if(_r!==null){var t=Od(Oo),r=qt.transition,e=nt;try{if(qt.transition=null,nt=16>t?16:t,_r===null)var n=!1;else{if(t=_r,_r=null,Oo=0,q&6)throw Error(B(331));var o=q;for(q|=4,P=t.current;P!==null;){var s=P,l=s.child;if(P.flags&16){var a=s.deletions;if(a!==null){for(var d=0;d<a.length;d++){var g=a[d];for(P=g;P!==null;){var p=P;switch(p.tag){case 0:case 11:case 15:gn(8,p,s)}var f=p.child;if(f!==null)f.return=p,P=f;else for(;P!==null;){p=P;var v=p.sibling,j=p.return;if(Zg(p),p===g){P=null;break}if(v!==null){v.return=j,P=v;break}P=j}}}var w=s.alternate;if(w!==null){var x=w.child;if(x!==null){w.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}P=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,P=l;else t:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:gn(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,P=c;break t}P=s.return}}var u=t.current;for(P=u;P!==null;){l=P;var b=l.child;if(l.subtreeFlags&2064&&b!==null)b.return=l,P=b;else t:for(l=u;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:qo(9,a)}}catch(A){vt(a,a.return,A)}if(a===l){P=null;break t}var h=a.sibling;if(h!==null){h.return=a.return,P=h;break t}P=a.return}}if(q=o,Yr(),mr&&typeof mr.onPostCommitFiberRoot=="function")try{mr.onPostCommitFiberRoot(Vo,t)}catch{}n=!0}return n}finally{nt=e,qt.transition=r}}return!1}function Ha(t,r,e){r=Ne(e,r),r=Og(t,r,1),t=Pr(t,r,1),r=Lt(),t!==null&&(Bn(t,1,r),Ht(t,r))}function vt(t,r,e){if(t.tag===3)Ha(t,t,e);else for(;r!==null;){if(r.tag===3){Ha(r,t,e);break}else if(r.tag===1){var n=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Wr===null||!Wr.has(n))){t=Ne(e,t),t=$g(r,t,1),r=Pr(r,t,1),t=Lt(),r!==null&&(Bn(r,1,t),Ht(r,t));break}}r=r.return}}function Oc(t,r,e){var n=t.pingCache;n!==null&&n.delete(r),r=Lt(),t.pingedLanes|=t.suspendedLanes&e,Ct===t&&(Et&e)===e&&(St===4||St===3&&(Et&130023424)===Et&&500>yt()-jl?te(t,0):Sl|=e),Ht(t,r)}function au(t,r){r===0&&(t.mode&1?(r=Hn,Hn<<=1,!(Hn&130023424)&&(Hn=4194304)):r=1);var e=Lt();t=Sr(t,r),t!==null&&(Bn(t,r,e),Ht(t,e))}function $c(t){var r=t.memoizedState,e=0;r!==null&&(e=r.retryLane),au(t,e)}function Hc(t,r){var e=0;switch(t.tag){case 13:var n=t.stateNode,o=t.memoizedState;o!==null&&(e=o.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(B(314))}n!==null&&n.delete(r),au(t,e)}var du;du=function(t,r,e){if(t!==null)if(t.memoizedProps!==r.pendingProps||Ot.current)Wt=!0;else{if(!(t.lanes&e)&&!(r.flags&128))return Wt=!1,Ac(t,r,e);Wt=!!(t.flags&131072)}else Wt=!1,dt&&r.flags&1048576&&cg(r,Bo,r.index);switch(r.lanes=0,r.tag){case 2:var n=r.type;po(t,r),t=r.pendingProps;var o=Fe(r,_t.current);Ae(r,e),o=vl(null,r,n,t,o,e);var s=yl();return r.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,$t(n)?(s=!0,Ao(r)):s=!1,r.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,bl(r),o.updater=Zo,r.stateNode=o,o._reactInternals=r,wi(r,n,t,e),r=ji(null,r,n,!0,s,e)):(r.tag=0,dt&&s&&sl(r),Rt(null,r,o,e),r=r.child),r;case 16:n=r.elementType;t:{switch(po(t,r),t=r.pendingProps,o=n._init,n=o(n._payload),r.type=n,o=r.tag=Vc(n),t=or(n,t),o){case 0:r=Si(null,r,n,t,e);break t;case 1:r=Fa(null,r,n,t,e);break t;case 11:r=Da(null,r,n,t,e);break t;case 14:r=Ba(null,r,n,or(n.type,t),e);break t}throw Error(B(306,n,""))}return r;case 0:return n=r.type,o=r.pendingProps,o=r.elementType===n?o:or(n,o),Si(t,r,n,o,e);case 1:return n=r.type,o=r.pendingProps,o=r.elementType===n?o:or(n,o),Fa(t,r,n,o,e);case 3:t:{if(Gg(r),t===null)throw Error(B(387));n=r.pendingProps,s=r.memoizedState,o=s.element,hg(t,r),Ro(r,n,null,e);var l=r.memoizedState;if(n=l.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},r.updateQueue.baseState=s,r.memoizedState=s,r.flags&256){o=Ne(Error(B(423)),r),r=_a(t,r,n,e,o);break t}else if(n!==o){o=Ne(Error(B(424)),r),r=_a(t,r,n,e,o);break t}else for(Vt=Mr(r.stateNode.containerInfo.firstChild),Gt=r,dt=!0,ir=null,e=vg(r,null,n,e),r.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(_e(),n===o){r=jr(t,r,e);break t}Rt(t,r,n,e)}r=r.child}return r;case 5:return xg(r),t===null&&yi(r),n=r.type,o=r.pendingProps,s=t!==null?t.memoizedProps:null,l=o.children,ci(n,o)?l=null:s!==null&&ci(n,s)&&(r.flags|=32),Vg(t,r),Rt(t,r,l,e),r.child;case 6:return t===null&&yi(r),null;case 13:return Qg(t,r,e);case 4:return cl(r,r.stateNode.containerInfo),n=r.pendingProps,t===null?r.child=Re(r,null,n,e):Rt(t,r,n,e),r.child;case 11:return n=r.type,o=r.pendingProps,o=r.elementType===n?o:or(n,o),Da(t,r,n,o,e);case 7:return Rt(t,r,r.pendingProps,e),r.child;case 8:return Rt(t,r,r.pendingProps.children,e),r.child;case 12:return Rt(t,r,r.pendingProps.children,e),r.child;case 10:t:{if(n=r.type._context,o=r.pendingProps,s=r.memoizedProps,l=o.value,it(Fo,n._currentValue),n._currentValue=l,s!==null)if(dr(s.value,l)){if(s.children===o.children&&!Ot.current){r=jr(t,r,e);break t}}else for(s=r.child,s!==null&&(s.return=r);s!==null;){var a=s.dependencies;if(a!==null){l=s.child;for(var d=a.firstContext;d!==null;){if(d.context===n){if(s.tag===1){d=xr(-1,e&-e),d.tag=2;var g=s.updateQueue;if(g!==null){g=g.shared;var p=g.pending;p===null?d.next=d:(d.next=p.next,p.next=d),g.pending=d}}s.lanes|=e,d=s.alternate,d!==null&&(d.lanes|=e),hi(s.return,e,r),a.lanes|=e;break}d=d.next}}else if(s.tag===10)l=s.type===r.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(B(341));l.lanes|=e,a=l.alternate,a!==null&&(a.lanes|=e),hi(l,e,r),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===r){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}Rt(t,r,o.children,e),r=r.child}return r;case 9:return o=r.type,n=r.pendingProps.children,Ae(r,e),o=tr(o),n=n(o),r.flags|=1,Rt(t,r,n,e),r.child;case 14:return n=r.type,o=or(n,r.pendingProps),o=or(n.type,o),Ba(t,r,n,o,e);case 15:return Hg(t,r,r.type,r.pendingProps,e);case 17:return n=r.type,o=r.pendingProps,o=r.elementType===n?o:or(n,o),po(t,r),r.tag=1,$t(n)?(t=!0,Ao(r)):t=!1,Ae(r,e),Wg(r,n,o),wi(r,n,o,e),ji(null,r,n,!0,t,e);case 19:return Yg(t,r,e);case 22:return Ug(t,r,e)}throw Error(B(156,r.tag))};function gu(t,r){return Nd(t,r)}function Uc(t,r,e,n){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(t,r,e,n){return new Uc(t,r,e,n)}function zl(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vc(t){if(typeof t=="function")return zl(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qi)return 11;if(t===Yi)return 14}return 2}function $r(t,r){var e=t.alternate;return e===null?(e=Zt(t.tag,r,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=r,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&14680064,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,r=t.dependencies,e.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e}function yo(t,r,e,n,o,s){var l=2;if(n=t,typeof t=="function")zl(t)&&(l=1);else if(typeof t=="string")l=5;else t:switch(t){case me:return re(e.children,o,s,r);case Gi:l=8,o|=8;break;case Vs:return t=Zt(12,e,r,o|2),t.elementType=Vs,t.lanes=s,t;case Gs:return t=Zt(13,e,r,o),t.elementType=Gs,t.lanes=s,t;case Qs:return t=Zt(19,e,r,o),t.elementType=Qs,t.lanes=s,t;case xd:return rs(e,o,s,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case yd:l=10;break t;case hd:l=9;break t;case Qi:l=11;break t;case Yi:l=14;break t;case zr:l=16,n=null;break t}throw Error(B(130,t==null?t:typeof t,""))}return r=Zt(l,e,r,o),r.elementType=t,r.type=n,r.lanes=s,r}function re(t,r,e,n){return t=Zt(7,t,n,r),t.lanes=e,t}function rs(t,r,e,n){return t=Zt(22,t,n,r),t.elementType=xd,t.lanes=e,t.stateNode={isHidden:!1},t}function _s(t,r,e){return t=Zt(6,t,null,r),t.lanes=e,t}function Rs(t,r,e){return r=Zt(4,t.children!==null?t.children:[],t.key,r),r.lanes=e,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function Gc(t,r,e,n,o){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ps(0),this.expirationTimes=ps(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ps(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Tl(t,r,e,n,o,s,l,a,d){return t=new Gc(t,r,e,a,d),r===1?(r=1,s===!0&&(r|=8)):r=0,s=Zt(3,null,null,r),t.current=s,s.stateNode=t,s.memoizedState={element:n,isDehydrated:e,cache:null,transitions:null,pendingSuspenseBoundaries:null},bl(s),t}function Qc(t,r,e){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ce,key:n==null?null:""+n,children:t,containerInfo:r,implementation:e}}function uu(t){if(!t)return Ur;t=t._reactInternals;t:{if(de(t)!==t||t.tag!==1)throw Error(B(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break t;case 1:if($t(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break t}}r=r.return}while(r!==null);throw Error(B(171))}if(t.tag===1){var e=t.type;if($t(e))return ug(t,e,r)}return r}function bu(t,r,e,n,o,s,l,a,d){return t=Tl(e,n,!0,t,o,s,l,a,d),t.context=uu(null),e=t.current,n=Lt(),o=Or(e),s=xr(n,o),s.callback=r??null,Pr(e,s,o),t.current.lanes=o,Bn(t,o,n),Ht(t,n),t}function es(t,r,e,n){var o=r.current,s=Lt(),l=Or(o);return e=uu(e),r.context===null?r.context=e:r.pendingContext=e,r=xr(s,l),r.payload={element:t},n=n===void 0?null:n,n!==null&&(r.callback=n),t=Pr(o,r,l),t!==null&&(ar(t,o,l,s),bo(t,o,l)),l}function Ho(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ua(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<r?e:r}}function Al(t,r){Ua(t,r),(t=t.alternate)&&Ua(t,r)}function Yc(){return null}var cu=typeof reportError=="function"?reportError:function(t){console.error(t)};function Dl(t){this._internalRoot=t}ns.prototype.render=Dl.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(B(409));es(t,r,null,null)};ns.prototype.unmount=Dl.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;le(function(){es(null,t,null,null)}),r[kr]=null}};function ns(t){this._internalRoot=t}ns.prototype.unstable_scheduleHydration=function(t){if(t){var r=Ud();t={blockedOn:null,target:t,priority:r};for(var e=0;e<Dr.length&&r!==0&&r<Dr[e].priority;e++);Dr.splice(e,0,t),e===0&&Gd(t)}};function Bl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function os(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Va(){}function Kc(t,r,e,n,o){if(o){if(typeof n=="function"){var s=n;n=function(){var g=Ho(l);s.call(g)}}var l=bu(r,n,t,0,null,!1,!1,"",Va);return t._reactRootContainer=l,t[kr]=l.current,wn(t.nodeType===8?t.parentNode:t),le(),l}for(;o=t.lastChild;)t.removeChild(o);if(typeof n=="function"){var a=n;n=function(){var g=Ho(d);a.call(g)}}var d=Tl(t,0,!1,null,null,!1,!1,"",Va);return t._reactRootContainer=d,t[kr]=d.current,wn(t.nodeType===8?t.parentNode:t),le(function(){es(r,d,e,n)}),d}function ss(t,r,e,n,o){var s=e._reactRootContainer;if(s){var l=s;if(typeof o=="function"){var a=o;o=function(){var d=Ho(l);a.call(d)}}es(r,l,t,o)}else l=Kc(e,r,t,o,n);return Ho(l)}$d=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var e=rn(r.pendingLanes);e!==0&&(Ji(r,e|1),Ht(r,yt()),!(q&6)&&(Me=yt()+500,Yr()))}break;case 13:le(function(){var n=Sr(t,1);if(n!==null){var o=Lt();ar(n,t,1,o)}}),Al(t,1)}};Zi=function(t){if(t.tag===13){var r=Sr(t,134217728);if(r!==null){var e=Lt();ar(r,t,134217728,e)}Al(t,134217728)}};Hd=function(t){if(t.tag===13){var r=Or(t),e=Sr(t,r);if(e!==null){var n=Lt();ar(e,t,r,n)}Al(t,r)}};Ud=function(){return nt};Vd=function(t,r){var e=nt;try{return nt=t,r()}finally{nt=e}};ni=function(t,r,e){switch(r){case"input":if(Xs(t,e),r=e.name,e.type==="radio"&&r!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<e.length;r++){var n=e[r];if(n!==t&&n.form===t.form){var o=Ko(n);if(!o)throw Error(B(90));kd(n),Xs(n,o)}}}break;case"textarea":jd(t,e);break;case"select":r=e.value,r!=null&&Ie(t,!!e.multiple,r,!1)}};Dd=Cl;Bd=le;var Xc={usingClientEntryPoint:!1,Events:[_n,ye,Ko,Td,Ad,Cl]},Xe={findFiberByHostInstance:Jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jc={bundleType:Xe.bundleType,version:Xe.version,rendererPackageName:Xe.rendererPackageName,rendererConfig:Xe.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rd(t),t===null?null:t.stateNode},findFiberByHostInstance:Xe.findFiberByHostInstance||Yc,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var to=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!to.isDisabled&&to.supportsFiber)try{Vo=to.inject(Jc),mr=to}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xc;Yt.createPortal=function(t,r){var e=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bl(r))throw Error(B(200));return Qc(t,r,null,e)};Yt.createRoot=function(t,r){if(!Bl(t))throw Error(B(299));var e=!1,n="",o=cu;return r!=null&&(r.unstable_strictMode===!0&&(e=!0),r.identifierPrefix!==void 0&&(n=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),r=Tl(t,1,!1,null,null,e,!1,n,o),t[kr]=r.current,wn(t.nodeType===8?t.parentNode:t),new Dl(r)};Yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=Rd(r),t=t===null?null:t.stateNode,t};Yt.flushSync=function(t){return le(t)};Yt.hydrate=function(t,r,e){if(!os(r))throw Error(B(200));return ss(null,t,r,!0,e)};Yt.hydrateRoot=function(t,r,e){if(!Bl(t))throw Error(B(405));var n=e!=null&&e.hydratedSources||null,o=!1,s="",l=cu;if(e!=null&&(e.unstable_strictMode===!0&&(o=!0),e.identifierPrefix!==void 0&&(s=e.identifierPrefix),e.onRecoverableError!==void 0&&(l=e.onRecoverableError)),r=bu(r,null,t,1,e??null,o,!1,s,l),t[kr]=r.current,wn(t),n)for(t=0;t<n.length;t++)e=n[t],o=e._getVersion,o=o(e._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[e,o]:r.mutableSourceEagerHydrationData.push(e,o);return new ns(r)};Yt.render=function(t,r,e){if(!os(r))throw Error(B(200));return ss(null,t,r,!1,e)};Yt.unmountComponentAtNode=function(t){if(!os(t))throw Error(B(40));return t._reactRootContainer?(le(function(){ss(null,null,t,!1,function(){t._reactRootContainer=null,t[kr]=null})}),!0):!1};Yt.unstable_batchedUpdates=Cl;Yt.unstable_renderSubtreeIntoContainer=function(t,r,e,n){if(!os(e))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return ss(t,r,e,!1,n)};Yt.version="18.3.1-next-f1338f8080-20240426";function mu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mu)}catch(t){console.error(t)}}mu(),md.exports=Yt;var Zc=md.exports,pu,Ga=Zc;pu=Ga.createRoot,Ga.hydrateRoot;/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),fu=(...t)=>t.filter((r,e,n)=>!!r&&r.trim()!==""&&n.indexOf(r)===e).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var tm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=I.forwardRef(({color:t="currentColor",size:r=24,strokeWidth:e=2,absoluteStrokeWidth:n,className:o="",children:s,iconNode:l,...a},d)=>I.createElement("svg",{ref:d,...tm,width:r,height:r,stroke:t,strokeWidth:n?Number(e)*24/Number(r):e,className:fu("lucide",o),...a},[...l.map(([g,p])=>I.createElement(g,p)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=(t,r)=>{const e=I.forwardRef(({className:n,...o},s)=>I.createElement(rm,{ref:s,iconNode:r,className:fu(`lucide-${qc(t)}`,n),...o}));return e.displayName=`${t}`,e};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=et("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=et("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=et("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=et("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=et("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=et("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=et("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=et("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=et("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=et("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=et("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=et("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=et("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=et("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=et("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=et("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=et("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=et("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=et("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=et("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=et("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=et("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=et("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=et("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=et("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=et("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=et("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=et("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=et("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=et("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),Ll="anvil_token",Nl=()=>localStorage.getItem(Ll),um=t=>localStorage.setItem(Ll,t),Li=()=>localStorage.removeItem(Ll),O=async(t,r,e)=>{const n={};e!==void 0&&(n["Content-Type"]="application/json");const o=Nl();o&&(n.Authorization=`Bearer ${o}`);const s=await fetch(`/api${r}`,{method:t,headers:n,body:e!==void 0?JSON.stringify(e):void 0});if(s.status===401)throw Li(),window.dispatchEvent(new Event("anvil-unauthorized")),new Error("Not authenticated");if(s.status===204)return null;if(!s.ok){const l=await s.text();let a=l;try{a=JSON.parse(l).detail||l}catch{}throw new Error(a||`HTTP ${s.status}`)}return s.json()},Q={register:t=>O("POST","/auth/register",t),login:t=>O("POST","/auth/login",t),me:()=>O("GET","/auth/me"),getGcalStatus:()=>O("GET","/auth/google/status"),connectGoogle:()=>{window.location.href=`/api/auth/google?token=${encodeURIComponent(Nl()||"")}`},disconnectGoogle:()=>O("DELETE","/auth/google"),getPillars:()=>O("GET","/pillars"),getTasks:()=>O("GET","/tasks"),createTask:t=>O("POST","/tasks",t),updateTask:(t,r)=>O("PUT",`/tasks/${t}`,r),deleteTask:t=>O("DELETE",`/tasks/${t}`),restoreTask:t=>O("POST",`/tasks/${t}/restore`),scheduleTask:t=>O("PUT",`/tasks/${t}/schedule`),getGoals:t=>O("GET",`/goals${t?`?pillar=${encodeURIComponent(t)}`:""}`),createGoal:t=>O("POST","/goals",t),updateGoal:(t,r)=>O("PUT",`/goals/${t}`,r),deleteGoal:t=>O("DELETE",`/goals/${t}`),restoreGoal:t=>O("POST",`/goals/${t}/restore`),getHabits:()=>O("GET","/habits"),createHabit:t=>O("POST","/habits",t),updateHabit:(t,r)=>O("PUT",`/habits/${t}`,r),deleteHabit:t=>O("DELETE",`/habits/${t}`),restoreHabit:t=>O("POST",`/habits/${t}/restore`),toggleHabitLog:(t,r)=>O("POST",`/habits/${t}/log/${r}`),setHabitLogNote:(t,r,e)=>O("PUT",`/habits/${t}/log/${r}/note`,{note:e}),setHabitLogCount:(t,r,e,n)=>O("PUT",`/habits/${t}/log/${r}/count`,{count:e,note:n}),clearHabitLog:(t,r)=>O("DELETE",`/habits/${t}/log/${r}`),getHabitsYearly:t=>O("GET",`/habits/yearly/${t}`),getJournalEntry:t=>O("GET",`/journal/${t}`),getJournalHistory:(t,r)=>O("GET",`/journal/history/${t}/${r}`),updateJournalMood:(t,r)=>O("PUT",`/journal/${t}`,{mood:r}),addJournalBullet:(t,r,e)=>O("POST",`/journal/${t}/bullets`,{section:r,text:e}),deleteJournalBullet:t=>O("DELETE",`/journal/bullets/${t}`),getSkills:()=>O("GET","/skills"),createSkill:t=>O("POST","/skills",t),deleteSkill:t=>O("DELETE",`/skills/${t}`),restoreSkill:t=>O("POST",`/skills/${t}/restore`),addSkillNote:(t,r,e)=>O("POST",`/skills/${t}/notes`,{stage:r,text:e}),deleteSkillNote:t=>O("DELETE",`/skill-notes/${t}`),toggleSkillNote:t=>O("PUT",`/skill-notes/${t}/toggle`),completeSkillStage:(t,r)=>O("POST",`/skills/${t}/complete-stage`,{stage:r}),getScriptures:()=>O("GET","/scriptures"),createScripture:t=>O("POST","/scriptures",t),deleteScripture:t=>O("DELETE",`/scriptures/${t}`),restoreScripture:t=>O("POST",`/scriptures/${t}/restore`),addChapter:(t,r)=>O("POST",`/scriptures/${t}/chapters`,r),updateChapter:(t,r)=>O("PUT",`/chapters/${t}`,r),deleteChapter:t=>O("DELETE",`/chapters/${t}`),restoreChapter:t=>O("POST",`/chapters/${t}/restore`),addInsight:(t,r)=>O("POST",`/chapters/${t}/insights`,{text:r}),deleteInsight:t=>O("DELETE",`/insights/${t}`),getTopics:()=>O("GET","/revision/topics"),createTopic:t=>O("POST","/revision/topics",t),deleteTopic:t=>O("DELETE",`/revision/topics/${t}`),restoreTopic:t=>O("POST",`/revision/topics/${t}/restore`),getDueToday:()=>O("GET","/revision/due-today"),getCalendar:(t,r)=>O("GET",`/revision/calendar/${t}/${r}`),toggleReviewDone:t=>O("PUT",`/revision/reviews/${t}/done`),getAffirmations:()=>O("GET","/affirmations"),createAffirmation:t=>O("POST","/affirmations",t),updateAffirmation:(t,r)=>O("PUT",`/affirmations/${t}`,r),deleteAffirmation:t=>O("DELETE",`/affirmations/${t}`),restoreAffirmation:t=>O("POST",`/affirmations/${t}/restore`)},bm=7e3;function as(t,r,e){const[n,o]=I.useState([]),s=I.useRef({}),l=I.useCallback(async(g,p="Item")=>{await t(g),e();const f=`${g}-${Date.now()}`;o(v=>[...v,{id:f,itemId:g,label:p}]),s.current[f]=setTimeout(()=>{o(v=>v.filter(j=>j.id!==f)),delete s.current[f]},bm)},[t,e]),a=I.useCallback(async g=>{const p=n.find(f=>f.id===g);p&&(clearTimeout(s.current[g]),delete s.current[g],o(f=>f.filter(v=>v.id!==g)),await r(p.itemId),e())},[n,r,e]),d=I.useCallback(g=>{clearTimeout(s.current[g]),delete s.current[g],o(p=>p.filter(f=>f.id!==g))},[]);return{deleteItem:l,toasts:n,handleUndo:a,handleDismiss:d}}function ds({toasts:t,onUndo:r,onDismiss:e}){return i.jsx("div",{style:be.container,children:t.map(n=>i.jsx(cm,{toast:n,onUndo:r,onDismiss:e},n.id))})}function cm({toast:t,onUndo:r,onDismiss:e}){const[n,o]=I.useState(100);return I.useEffect(()=>{const s=Date.now(),l=7e3,a=setInterval(()=>{const d=Date.now()-s,g=Math.max(0,100-d/l*100);o(g),g===0&&clearInterval(a)},50);return()=>clearInterval(a)},[]),i.jsxs("div",{style:be.toast,children:[i.jsx("div",{style:{...be.bar,width:`${n}%`}}),i.jsxs("span",{style:be.msg,children:[t.label," deleted"]}),i.jsx("button",{style:be.undoBtn,onClick:()=>r(t.id),children:"Undo"}),i.jsx("button",{style:be.closeBtn,onClick:()=>e(t.id),children:"×"})]})}const be={container:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",gap:8,zIndex:999,pointerEvents:"none"},toast:{position:"relative",display:"flex",alignItems:"center",gap:12,background:"#26241F",color:"#fff",borderRadius:10,padding:"12px 16px",fontSize:13.5,fontFamily:"'Inter', system-ui, sans-serif",boxShadow:"0 4px 20px rgba(0,0,0,0.25)",minWidth:260,overflow:"hidden",pointerEvents:"all"},bar:{position:"absolute",bottom:0,left:0,height:3,background:"#4C9A6B",transition:"width 0.05s linear",borderRadius:"0 0 0 10px"},msg:{flex:1,fontWeight:500},undoBtn:{border:"1px solid rgba(255,255,255,0.3)",background:"none",color:"#4C9A6B",fontWeight:700,fontSize:13,padding:"4px 10px",borderRadius:6,cursor:"pointer",fontFamily:"inherit"},closeBtn:{border:"none",background:"none",color:"rgba(255,255,255,0.5)",cursor:"pointer",fontSize:18,lineHeight:1,padding:"0 2px"}},eo={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},Ya=[{id:"Q1",symbol:"™",title:"Do Now",sub:"Important · Urgent",accent:"#C2536B"},{id:"Q2",symbol:"©",title:"Schedule",sub:"Important · Not Urgent",accent:"#3A7CA5"},{id:"Q3",symbol:"®",title:"Delegate",sub:"Not Important · Urgent",accent:"#C9A227"},{id:"Q4",symbol:"•",title:"Drop",sub:"Not Important · Not Urgent",accent:"#8A8780"}];function mm(){return new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Kolkata"})}function pm(){const t=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"})),e=t.getMinutes()<30?30:0,n=e===0?t.getHours()+1:t.getHours();return`${String(n%24).padStart(2,"0")}:${String(e).padStart(2,"0")}`}function fm(t,r){const[e,n]=t.split(":").map(Number),o=e*60+n+r;return`${String(Math.floor(o/60)%24).padStart(2,"0")}:${String(o%60).padStart(2,"0")}`}function vm(t){return t?new Date(t).toLocaleString("en-IN",{timeZone:"Asia/Kolkata",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0}):""}const Ls=()=>({title:"",pillar:"Financial",est:30,date:mm(),startTime:pm()});function ym(){const[t,r]=I.useState([]),[e,n]=I.useState(null),[o,s]=I.useState(Ls()),[l,a]=I.useState({connected:!1,configured:!1}),d=I.useCallback(()=>Q.getTasks().then(r).catch(console.error),[]);I.useEffect(()=>{d(),Q.getGcalStatus().then(a).catch(()=>{})},[d]);const{deleteItem:g,toasts:p,handleUndo:f,handleDismiss:v}=as(Q.deleteTask,Q.restoreTask,d),j=b=>t.filter(h=>h.quadrant===b),w=b=>j(b).reduce((h,A)=>h+A.time_estimate_min,0),x=b=>b>=60?`${Math.floor(b/60)}h${b%60?` ${b%60}m`:""}`:`${b}m`,S=b=>{var A;return`${((A=Ya.find(R=>R.id===b.quadrant))==null?void 0:A.symbol)??""} ${b.title}`},c=async b=>{if(!o.title.trim())return;const h=o.date&&o.startTime?`${o.date}T${o.startTime}:00`:null;await Q.createTask({pillar:o.pillar,title:o.title,quadrant:b,time_estimate_min:Number(o.est)||30,start_datetime:h}),s(Ls()),n(null),d()},u=(b,h)=>g(b,h);return i.jsxs("div",{style:G.page,children:[i.jsxs("div",{style:G.head,children:[i.jsxs("div",{children:[i.jsx("div",{style:G.eyebrow,children:"Anvil · Weekly Routing"}),i.jsx("h1",{style:G.h1,children:"Weekly Routing"})]}),i.jsxs("div",{style:G.headRight,children:[i.jsx("div",{style:G.legend,children:Object.entries(eo).map(([b,h])=>i.jsxs("span",{style:G.legendItem,children:[i.jsx("span",{style:{...G.dot,background:h.dot}}),b]},b))}),l.configured&&(l.connected?i.jsxs("button",{style:G.gcalBadgeOn,title:"Disconnect Google Calendar",onClick:()=>Q.disconnectGoogle().then(()=>a({...l,connected:!1})),children:[i.jsx(ro,{size:13})," Google Calendar connected"]}):i.jsxs("button",{style:G.gcalBadgeOff,onClick:()=>Q.connectGoogle(),children:[i.jsx(ro,{size:13})," Connect Google Calendar"]}))]})]}),i.jsx("div",{style:G.grid,children:Ya.map(b=>i.jsxs("section",{style:{...G.quad,borderTop:`3px solid ${b.accent}`},children:[i.jsxs("header",{style:G.quadHead,children:[i.jsxs("div",{style:G.quadTitleRow,children:[i.jsx("span",{style:{...G.symbol,color:b.accent},children:b.symbol}),i.jsxs("div",{children:[i.jsx("div",{style:G.quadTitle,children:b.title}),i.jsx("div",{style:G.quadSub,children:b.sub})]})]}),i.jsx("span",{style:G.quadTotal,children:x(w(b.id))})]}),i.jsxs("div",{style:G.list,children:[j(b.id).map(h=>{const A=eo[h.pillar]||eo.Financial,R=!!h.gcal_event_id;return i.jsxs("div",{style:{...G.card,background:A.soft},children:[i.jsx("span",{style:{...G.cardBar,background:A.dot}}),i.jsxs("div",{style:G.cardBody,children:[i.jsx("div",{style:G.cardTitle,children:h.title}),h.start_datetime&&i.jsxs("div",{style:G.eventTime,children:[i.jsx(ro,{size:10}),vm(h.start_datetime),R&&i.jsx("span",{style:G.syncedDot,title:"Synced to Google Calendar"})]}),i.jsxs("div",{style:G.cardMeta,children:[i.jsxs("span",{style:G.metaPill,children:[i.jsx("span",{style:{...G.dot,background:A.dot,width:7,height:7}}),h.pillar]}),i.jsxs("span",{style:G.metaPill,children:[i.jsx(em,{size:11})," ",x(h.time_estimate_min)]})]})]}),i.jsxs("div",{style:G.cardActions,children:[R&&i.jsx("span",{title:`On calendar as "${S(h)}"`,style:G.calDoneIcon,children:i.jsx(Ft,{size:14})}),i.jsx("button",{onClick:()=>u(h.id,h.title),style:G.delBtn,children:i.jsx(ct,{size:13})})]})]},h.id)}),e===b.id?i.jsxs("div",{style:G.addBox,children:[i.jsx("input",{autoFocus:!0,placeholder:"Task title",value:o.title,onChange:h=>s({...o,title:h.target.value}),onKeyDown:h=>h.key==="Enter"&&c(b.id),style:G.input}),i.jsxs("div",{style:G.dateTimeRow,children:[i.jsxs("div",{style:G.dateTimeGroup,children:[i.jsx("label",{style:G.dtLabel,children:"Date"}),i.jsx("input",{type:"date",value:o.date,onChange:h=>s({...o,date:h.target.value}),style:G.dtInput})]}),i.jsxs("div",{style:G.dateTimeGroup,children:[i.jsx("label",{style:G.dtLabel,children:"Start"}),i.jsx("input",{type:"time",value:o.startTime,onChange:h=>s({...o,startTime:h.target.value}),style:G.dtInput})]}),i.jsxs("div",{style:G.dateTimeGroup,children:[i.jsx("label",{style:G.dtLabel,children:"End"}),i.jsx("div",{style:G.dtEndValue,children:fm(o.startTime,Number(o.est)||30)})]})]}),i.jsxs("div",{style:G.addRow,children:[i.jsx("select",{value:o.pillar,onChange:h=>s({...o,pillar:h.target.value}),style:G.select,children:Object.keys(eo).map(h=>i.jsx("option",{children:h},h))}),i.jsx("input",{type:"number",value:o.est,onChange:h=>s({...o,est:h.target.value}),style:{...G.input,width:60}}),i.jsx("span",{style:G.minLabel,children:"min"}),l.connected&&i.jsx("span",{style:G.gcalHint,title:"Will sync to Google Calendar",children:i.jsx(ro,{size:12})}),i.jsx("button",{onClick:()=>c(b.id),style:G.saveBtn,children:i.jsx(Ft,{size:14})}),i.jsx("button",{onClick:()=>{n(null),s(Ls())},style:G.cancelBtn,children:i.jsx(ct,{size:14})})]})]}):i.jsxs("button",{onClick:()=>n(b.id),style:G.addTrigger,children:[i.jsx(Vr,{size:13})," Add task"]})]})]},b.id))}),i.jsx(ds,{toasts:p,onUndo:f,onDismiss:v})]})}const G={page:{fontFamily:"'Inter', system-ui, sans-serif",background:"#F7F6F3",minHeight:"100%",padding:"28px 26px",color:"#26241F",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:16,marginBottom:22},headRight:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:10},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"#9A968C",fontWeight:600,marginBottom:4},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces', Georgia, serif"},legend:{display:"flex",gap:14,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"#6B675E",fontWeight:500},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},gcalBadgeOn:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"#4C9A6B",background:"rgba(76,154,107,0.10)",border:"1px solid rgba(76,154,107,0.3)",borderRadius:20,padding:"5px 12px",cursor:"pointer"},gcalBadgeOff:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"#6B675E",background:"#fff",border:"1px solid #DCDAD3",borderRadius:20,padding:"5px 12px",cursor:"pointer"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16},quad:{background:"#fff",borderRadius:12,padding:"16px 16px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.06)"},quadHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14},quadTitleRow:{display:"flex",gap:10,alignItems:"center"},symbol:{fontSize:20,lineHeight:1},quadTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em"},quadSub:{fontSize:11,color:"#9A968C",marginTop:1,letterSpacing:"0.02em"},quadTotal:{fontSize:12,fontWeight:600,color:"#6B675E",background:"#F2F1EC",padding:"3px 9px",borderRadius:20},list:{display:"flex",flexDirection:"column",gap:8},card:{display:"flex",alignItems:"stretch",gap:10,borderRadius:9,padding:"10px 10px 10px 0",overflow:"hidden"},cardBar:{width:3,borderRadius:3,flexShrink:0},cardBody:{flex:1,minWidth:0},cardTitle:{fontSize:13.5,fontWeight:500,lineHeight:1.35,marginBottom:4},eventTime:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#3A7CA5",fontWeight:500,marginBottom:5},syncedDot:{width:6,height:6,borderRadius:"50%",background:"#4C9A6B",display:"inline-block",marginLeft:2},cardMeta:{display:"flex",gap:8,flexWrap:"wrap"},metaPill:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#6B675E",fontWeight:500},cardActions:{display:"flex",flexDirection:"column",gap:4,alignSelf:"center",flexShrink:0},calDoneIcon:{width:30,height:30,borderRadius:8,background:"#4C9A6B",color:"#fff",display:"grid",placeItems:"center"},delBtn:{width:30,height:30,borderRadius:8,border:"none",background:"none",color:"#C3BFB5",cursor:"pointer",display:"grid",placeItems:"center"},addTrigger:{display:"flex",alignItems:"center",gap:5,fontSize:12.5,color:"#9A968C",background:"none",border:"1px dashed #D9D6CE",borderRadius:8,padding:"8px 10px",cursor:"pointer",fontWeight:500,marginTop:2},addBox:{border:"1px solid #E4E2DA",borderRadius:9,padding:10,display:"flex",flexDirection:"column",gap:8},dateTimeRow:{display:"flex",gap:8,alignItems:"flex-end"},dateTimeGroup:{display:"flex",flexDirection:"column",gap:3,flex:1},dtLabel:{fontSize:10,fontWeight:600,color:"#9A968C",letterSpacing:"0.08em",textTransform:"uppercase"},dtInput:{border:"1px solid #E4E2DA",borderRadius:6,padding:"6px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},dtEndValue:{border:"1px solid #E4E2DA",borderRadius:6,padding:"6px 8px",fontSize:12.5,color:"#6B675E",background:"#F7F6F3"},addRow:{display:"flex",alignItems:"center",gap:6},input:{border:"1px solid #E4E2DA",borderRadius:6,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",flex:1,minWidth:0},select:{border:"1px solid #E4E2DA",borderRadius:6,padding:"7px 8px",fontSize:12.5,fontFamily:"inherit",flex:1},minLabel:{fontSize:11,color:"#9A968C"},gcalHint:{color:"#3A7CA5",display:"grid",placeItems:"center"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},cancelBtn:{border:"none",background:"#F2F1EC",color:"#6B675E",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"}},nr={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},Je=Object.keys(nr),Ns=["Yearly","Quarterly","Monthly","Weekly"],Ar=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ka=[{label:"Q1 · Jan–Mar",startMonth:0},{label:"Q2 · Apr–Jun",startMonth:3},{label:"Q3 · Jul–Sep",startMonth:6},{label:"Q4 · Oct–Dec",startMonth:9}],ee=new Date().getFullYear(),Ms=t=>Ns[Math.min(Ns.indexOf(t)+1,Ns.length-1)],no=t=>{if(!t||!t.start_date)return Array.from({length:12},(s,l)=>l);const r=new Date(t.start_date+"T00:00:00"),e=new Date(t.end_date+"T00:00:00"),n=r.getFullYear()<ee?0:r.getMonth(),o=e.getFullYear()>ee?11:e.getMonth();return Array.from({length:o-n+1},(s,l)=>n+l)},hm=(t,r,e)=>{const n=(e-1)*7+1,o=Math.min(n+6,new Date(t,r+1,0).getDate()),s=String(r+1).padStart(2,"0");return{start_date:`${t}-${s}-${String(n).padStart(2,"0")}`,end_date:`${t}-${s}-${String(o).padStart(2,"0")}`}},Xa=(t,r,e=1)=>{const n=ee;switch(t){case"Yearly":return{start_date:`${n}-01-01`,end_date:`${n}-12-31`};case"Quarterly":{const o=Math.floor(r/3)*3,s=o+1,l=o+3,a=new Date(n,l,0).getDate();return{start_date:`${n}-${String(s).padStart(2,"0")}-01`,end_date:`${n}-${String(l).padStart(2,"0")}-${a}`}}case"Monthly":{const o=new Date(n,r+1,0).getDate();return{start_date:`${n}-${String(r+1).padStart(2,"0")}-01`,end_date:`${n}-${String(r+1).padStart(2,"0")}-${o}`}}case"Weekly":return hm(n,r,e);default:return{start_date:`${n}-01-01`,end_date:`${n}-12-31`}}},Ja=(t,r=!1)=>{if(!t)return 0;const e=new Date(t+"T00:00:00");if(e.getFullYear()>ee)return 12;if(e.getFullYear()<ee)return 0;const n=new Date(ee,e.getMonth()+1,0).getDate(),o=e.getDate()-(r?0:1);return e.getMonth()+o/n},Za=t=>{if(!t.start_date)return"";const r=new Date(t.start_date+"T00:00:00"),e=r.getMonth();switch(t.horizon){case"Yearly":return`${r.getFullYear()}`;case"Quarterly":return`Q${Math.floor(e/3)+1} ${r.getFullYear()}`;case"Monthly":return`${Ar[e]} ${r.getFullYear()}`;case"Weekly":return`${Ar[e]} W${Math.ceil(r.getDate()/7)}`;default:return""}};function xm(){const[t,r]=I.useState([]),[e,n]=I.useState("Financial"),[o,s]=I.useState(["Academic"]),[l,a]=I.useState({}),[d,g]=I.useState(null),[p,f]=I.useState(""),[v,j]=I.useState(0),[w,x]=I.useState(1),[S,c]=I.useState(null),u=I.useCallback(()=>{Q.getGoals().then(r).catch(console.error)},[]);I.useEffect(()=>{u()},[u]);const{deleteItem:b,toasts:h,handleUndo:A,handleDismiss:R}=as(Q.deleteGoal,Q.restoreGoal,u),L=nr[e],_=t.filter(y=>y.pillar===e),z=_.filter(y=>!y.parent_goal_id),F=y=>_.filter(D=>D.parent_goal_id===y),k=y=>a(D=>({...D,[y]:!D[y]})),N=y=>s(D=>D.includes(y)?D.filter(W=>W!==y):[...D,y]),H=(y,D=null)=>{g(y),f(""),x(1);const W=y==="ROOT"?"Yearly":Ms(D==null?void 0:D.horizon),tt=y==="ROOT"?[0]:no(D);j(W==="Quarterly"?Math.floor(tt[0]/3)*3:tt[0]??0)},K=async(y,D)=>{if(!p.trim())return;const W=y==="ROOT"?"Yearly":Ms(D),{start_date:tt,end_date:Y}=Xa(W,v,w);await Q.createGoal({pillar:e,title:p.trim(),horizon:W,parent_goal_id:y==="ROOT"?null:y,start_date:tt,end_date:Y}),y!=="ROOT"&&a(ft=>({...ft,[y]:!0})),g(null),f(""),u()},ot=y=>{const D=y.start_date?new Date(y.start_date+"T00:00:00"):new Date,W=D.getMonth(),tt=Math.min(Math.max(Math.ceil(D.getDate()/7),1),4);c({id:y.id,title:y.title,pillar:y.pillar,horizon:y.horizon,parentGoal:t.find(Y=>Y.id===y.parent_goal_id)||null,month:y.horizon==="Quarterly"?Math.floor(W/3)*3:W,week:tt})},gt=async()=>{if(!S||!S.title.trim())return;let y=S.month;S.horizon==="Weekly"&&(y=no(S.parentGoal)[0]);const{start_date:D,end_date:W}=Xa(S.horizon,y,S.week);await Q.updateGoal(S.id,{title:S.title.trim(),pillar:S.pillar,start_date:D,end_date:W}),c(null),u()},E=({parentId:y,parentGoal:D,depth:W})=>{const tt=(D==null?void 0:D.horizon)??null,Y=y==="ROOT"?"Yearly":Ms(tt),ft=y==="ROOT"?Array.from({length:12},(V,Tt)=>Tt):no(D),wt=Ka.filter(V=>ft.includes(V.startMonth));return i.jsxs("div",{style:{...U.addBox,marginLeft:W*24},children:[i.jsx("input",{autoFocus:!0,placeholder:`New ${Y.toLowerCase()} goal…`,value:p,onChange:V=>f(V.target.value),onKeyDown:V=>{V.key==="Enter"&&K(y,tt),V.key==="Escape"&&g(null)},style:U.input}),Y==="Quarterly"&&i.jsx("select",{value:v,onChange:V=>j(Number(V.target.value)),style:U.monthSelect,children:wt.map(V=>i.jsx("option",{value:V.startMonth,children:V.label},V.startMonth))}),Y==="Monthly"&&i.jsx("select",{value:v,onChange:V=>j(Number(V.target.value)),style:U.monthSelect,children:ft.map(V=>i.jsx("option",{value:V,children:Ar[V]},V))}),Y==="Weekly"&&i.jsxs(i.Fragment,{children:[i.jsx("span",{style:U.inheritTag,children:Ar[ft[0]]}),i.jsx("select",{value:w,onChange:V=>x(Number(V.target.value)),style:U.monthSelect,children:[1,2,3,4].map(V=>i.jsxs("option",{value:V,children:["Week ",V]},V))})]}),i.jsx("button",{onClick:()=>K(y,tt),style:U.saveBtn,children:i.jsx(Ft,{size:14})}),i.jsx("button",{onClick:()=>g(null),style:U.cancelBtn,children:i.jsx(ct,{size:14})})]})},m=({goal:y,depth:D})=>{var wt,V;const W=F(y.id),tt=l[y.id],Y=y.horizon!=="Weekly";if((S==null?void 0:S.id)===y.id){const Tt=no(S.parentGoal),Nn=Ka.filter(rt=>Tt.includes(rt.startMonth));return i.jsxs("div",{style:{...U.editBox,marginLeft:D*24},children:[i.jsx("input",{autoFocus:!0,value:S.title,onChange:rt=>c({...S,title:rt.target.value}),onKeyDown:rt=>rt.key==="Enter"&&gt(),style:{...U.input,flex:1}}),i.jsx("select",{value:S.pillar,onChange:rt=>c({...S,pillar:rt.target.value}),style:U.monthSelect,children:Je.map(rt=>i.jsx("option",{children:rt},rt))}),S.horizon==="Quarterly"&&i.jsx("select",{value:S.month,onChange:rt=>c({...S,month:Number(rt.target.value)}),style:U.monthSelect,children:Nn.map(rt=>i.jsx("option",{value:rt.startMonth,children:rt.label},rt.startMonth))}),S.horizon==="Monthly"&&i.jsx("select",{value:S.month,onChange:rt=>c({...S,month:Number(rt.target.value)}),style:U.monthSelect,children:Tt.map(rt=>i.jsx("option",{value:rt,children:Ar[rt]},rt))}),S.horizon==="Weekly"&&i.jsxs(i.Fragment,{children:[i.jsx("span",{style:U.inheritTag,children:Ar[Tt[0]]}),i.jsx("select",{value:S.week,onChange:rt=>c({...S,week:Number(rt.target.value)}),style:U.monthSelect,children:[1,2,3,4].map(rt=>i.jsxs("option",{value:rt,children:["Week ",rt]},rt))})]}),i.jsx("button",{onClick:gt,style:U.saveBtn,children:i.jsx(Ft,{size:14})}),i.jsx("button",{onClick:()=>c(null),style:U.cancelBtn,children:i.jsx(ct,{size:14})})]})}return i.jsxs("div",{children:[i.jsxs("div",{style:{...U.row,marginLeft:D*24,background:D===0?L.soft:"transparent"},children:[W.length>0?i.jsx("button",{onClick:()=>k(y.id),style:U.caret,children:tt?i.jsx(Fl,{size:15}):i.jsx(ge,{size:15})}):i.jsx("span",{style:{...U.caret,opacity:.25},children:i.jsx(Rl,{size:12})}),i.jsx("span",{style:{...U.horizonTag,color:((wt=nr[y.pillar])==null?void 0:wt.dot)||L.dot,borderColor:((V=nr[y.pillar])==null?void 0:V.dot)||L.dot},children:y.horizon}),i.jsx("span",{style:U.title,children:y.title}),i.jsx("span",{style:U.periodTag,children:Za(y)}),i.jsx("button",{onClick:()=>ot(y),style:U.rowAdd,title:"Edit",children:i.jsx(ls,{size:12})}),Y&&i.jsx("button",{onClick:()=>{a(Tt=>({...Tt,[y.id]:!0})),H(y.id,y)},style:U.rowAdd,title:"Add sub-goal",children:i.jsx(Vr,{size:13})}),i.jsx("button",{onClick:()=>b(y.id,y.title),style:{...U.rowAdd,color:"#C3BFB5"},title:"Delete",children:i.jsx(ct,{size:13})})]}),tt&&W.map(Tt=>i.jsx(m,{goal:Tt,depth:D+1},Tt.id)),tt&&d===y.id&&i.jsx(E,{parentId:y.id,parentGoal:y,depth:D+1})]})},T=t.filter(y=>y.horizon==="Weekly"&&o.includes(y.pillar)).sort((y,D)=>y.pillar.localeCompare(D.pillar)||y.start_date.localeCompare(D.start_date));return i.jsxs("div",{style:U.page,children:[i.jsxs("div",{style:U.head,children:[i.jsx("div",{style:U.eyebrow,children:"Anvil · Goals"}),i.jsxs("h1",{style:U.h1,children:[e," Goals"]})]}),i.jsx("div",{style:U.pillarPicker,children:Je.map(y=>{const D=y===e;return i.jsxs("button",{onClick:()=>{n(y),g(null),c(null)},style:{...U.pillarChip,...D?{background:nr[y].dot,color:"#fff",borderColor:nr[y].dot}:{}},children:[i.jsx("span",{style:{...U.dot,background:D?"#fff":nr[y].dot}}),y]},y)})}),i.jsxs("div",{style:U.list,children:[z.map(y=>i.jsx(m,{goal:y,depth:0},y.id)),d==="ROOT"&&i.jsx(E,{parentId:"ROOT",parentGoal:null,depth:0}),d!=="ROOT"&&i.jsxs("button",{onClick:()=>H("ROOT",null),style:U.rootAdd,children:[i.jsx(Vr,{size:14})," Add top-level goal"]})]}),i.jsxs("div",{style:U.ganttWrap,children:[i.jsxs("div",{style:U.ganttTop,children:[i.jsxs("div",{style:U.ganttTitle,children:[ee," · Weekly Timeline"]}),i.jsxs("div",{style:U.ganttMultiSelect,children:[(()=>{const y=Je.every(D=>o.includes(D));return i.jsx("button",{onClick:()=>s(y?[]:[...Je]),style:{...U.msChip,...y?{background:"#26241F",color:"#fff",borderColor:"#26241F"}:{}},children:"All"})})(),Je.map(y=>{const D=o.includes(y);return i.jsxs("button",{onClick:()=>N(y),style:{...U.msChip,...D?{background:nr[y].dot,color:"#fff",borderColor:nr[y].dot}:{}},children:[i.jsx("span",{style:{...U.dot,width:7,height:7,background:D?"#fff":nr[y].dot}}),y]},y)})]})]}),T.length===0?i.jsx("div",{style:U.ganttEmpty,children:"Select pillars above to see their weekly goals on the timeline."}):i.jsx("div",{style:U.ganttScroll,children:i.jsxs("div",{style:U.ganttInner,children:[i.jsxs("div",{style:U.ganttHeader,children:[i.jsx("div",{style:U.ganttLabelCol}),i.jsx("div",{style:U.ganttGrid,children:Ar.map(y=>i.jsx("div",{style:U.ganttMonth,children:y},y))})]}),T.map(y=>{const D=nr[y.pillar].dot,W=Ja(y.start_date,!1),tt=Ja(y.end_date,!0),Y=W/12*100,ft=Math.max((tt-W)/12*100,1.5);return i.jsxs("div",{style:U.ganttRow,children:[i.jsxs("div",{style:{...U.ganttLabelCol,paddingLeft:8},children:[i.jsx("span",{style:{...U.ganttRowDot,background:D}}),i.jsx("span",{style:U.ganttRowLabel,children:y.title})]}),i.jsxs("div",{style:U.ganttGrid,children:[Ar.map((wt,V)=>i.jsx("div",{style:U.ganttCell},V)),i.jsx("div",{style:{...U.ganttBar,left:`${Y}%`,width:`${ft}%`,background:D},title:`${y.pillar} · ${Za(y)}`})]})]},y.id)})]})})]}),i.jsx(ds,{toasts:h,onUndo:A,onDismiss:R})]})}const U={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"#F7F6F3",minHeight:"100%",padding:"28px 26px",color:"#26241F",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"#9A968C",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},pillarPicker:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},pillarChip:{display:"flex",alignItems:"center",gap:7,border:"1px solid #E0DDD5",background:"#fff",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"#4A463E",cursor:"pointer",fontFamily:"inherit"},list:{background:"#fff",borderRadius:12,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"hidden"},row:{display:"flex",alignItems:"center",gap:9,padding:"9px 10px",borderRadius:8,flexWrap:"nowrap"},caret:{border:"none",background:"none",cursor:"pointer",color:"#6B675E",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},horizonTag:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",border:"1px solid",borderRadius:5,padding:"2px 6px",flexShrink:0},title:{fontSize:14,fontWeight:500,lineHeight:1.3,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},periodTag:{fontSize:11,fontWeight:600,color:"#6B675E",background:"#F2F1EC",padding:"3px 8px",borderRadius:12,flexShrink:0},rowAdd:{border:"none",background:"none",color:"#C3BFB5",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,flexShrink:0},rootAdd:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"#6B675E",background:"none",border:"1px dashed #D9D6CE",borderRadius:8,padding:"9px 12px",cursor:"pointer",fontWeight:600,fontFamily:"inherit",marginTop:6,width:"100%",justifyContent:"center"},addBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 0 6px 28px",flexWrap:"wrap"},editBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 10px",flexWrap:"wrap",background:"#F7F6F3",borderRadius:8,margin:"4px 0"},input:{border:"1px solid #D9D6CE",borderRadius:7,padding:"8px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",flex:1,minWidth:120},monthSelect:{border:"1px solid #D9D6CE",borderRadius:7,padding:"8px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},inheritTag:{fontSize:11.5,fontWeight:600,color:"#6B675E",background:"#F2F1EC",padding:"6px 9px",borderRadius:7,flexShrink:0},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},cancelBtn:{border:"none",background:"#F2F1EC",color:"#6B675E",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},ganttWrap:{background:"#fff",borderRadius:12,padding:"16px 14px",marginTop:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},ganttTop:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10,marginBottom:14},ganttTitle:{fontSize:13,fontWeight:700,color:"#4A463E",fontFamily:"'Fraunces',Georgia,serif"},ganttMultiSelect:{display:"flex",gap:6,flexWrap:"wrap"},msChip:{display:"flex",alignItems:"center",gap:5,border:"1px solid #E0DDD5",background:"#fff",padding:"5px 10px",borderRadius:16,fontSize:11.5,fontWeight:600,color:"#4A463E",cursor:"pointer",fontFamily:"inherit"},ganttEmpty:{fontSize:13,color:"#9A968C",padding:"24px 12px",textAlign:"center"},ganttScroll:{overflowX:"auto"},ganttInner:{minWidth:500},ganttHeader:{display:"flex",marginBottom:6},ganttLabelCol:{width:160,flexShrink:0,display:"flex",alignItems:"center",gap:7,minWidth:0},ganttGrid:{position:"relative",flex:1,display:"grid",gridTemplateColumns:"repeat(12,1fr)"},ganttMonth:{fontSize:10,fontWeight:600,color:"#9A968C",textAlign:"center",textTransform:"uppercase",letterSpacing:"0.04em"},ganttRow:{display:"flex",alignItems:"center",height:30},ganttRowDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},ganttRowLabel:{fontSize:12,fontWeight:500,color:"#3A372F",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},ganttCell:{borderLeft:"1px solid #F0EEE8",height:30},ganttBar:{position:"absolute",top:7,height:16,borderRadius:5,boxShadow:"0 1px 2px rgba(0,0,0,0.12)"}},Pe={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.12)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.12)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.12)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.12)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.12)"}},ju=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],wm=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Cu=t=>t.toISOString().slice(0,10),km=()=>Cu(new Date),Sm=(t=0)=>{const r=new Date,e=r.getDay(),n=e===0?-6:1-e,o=new Date(r);return o.setDate(r.getDate()+n+t*7),Array.from({length:7},(s,l)=>{const a=new Date(o);return a.setDate(o.getDate()+l),Cu(a)})},jm=(t=0)=>{const r=new Date,e=new Date(r.getFullYear(),r.getMonth()+t,1),n=e.getFullYear(),o=e.getMonth(),s=new Date(n,o+1,0).getDate(),l=e.getDay(),a=l===0?6:l-1,d=Array.from({length:s},(p,f)=>`${n}-${String(o+1).padStart(2,"0")}-${String(f+1).padStart(2,"0")}`),g=e.toLocaleDateString("en-US",{month:"long",year:"numeric"});return{dates:d,startOffset:a,label:g,year:n,month:o}},qa=t=>new Date(t+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"}),Ce=km(),Cm=new Date().getFullYear();function Im(){var ot,gt;const[t,r]=I.useState([]),[e,n]=I.useState("ALL"),[o,s]=I.useState(!1),[l,a]=I.useState(!1),[d,g]=I.useState(!1),[p,f]=I.useState(null),[v,j]=I.useState(null),[w,x]=I.useState({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week"}),S=I.useCallback(()=>Q.getHabits().then(r).catch(console.error),[]);I.useEffect(()=>{S()},[S]),I.useEffect(()=>{const E=()=>{const m=window.innerWidth<720;s(m),m||a(!1)};return E(),window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)},[]);const{deleteItem:c,toasts:u,handleUndo:b,handleDismiss:h}=as(Q.deleteHabit,Q.restoreHabit,S),A=E=>{n(E),o&&a(!1)},R=(E,m)=>{(E.type==="minimum"||E.type==="maximum")&&E.period==="day"?j({habit:E,date:m}):L(E.id,m)},L=async(E,m)=>{await Q.toggleHabitLog(E,m),S()},_=async(E,m,T,y)=>{await Q.setHabitLogCount(E,m,T,y),j(null),S()},z=async(E,m)=>{await Q.clearHabitLog(E,m),j(null),S()},F=async()=>{if(!w.name.trim())return;const E={name:w.name.trim(),pillar:w.pillar,target_per_week:Number(w.target_per_week)||7,type:w.type,target_count:w.type!=="regular"?Number(w.target_count)||1:null,period:w.type!=="regular"?w.period:null};await Q.createHabit(E),x({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week"}),g(!1),S()},k=async(E,m)=>{e===E&&n("ALL"),c(E,m)},N=t.find(E=>E.id===e),H=E=>new Set(E.logs||[]),K={...C.sidebar,...o?C.sidebarOverlay:{},...o&&!l?C.sidebarHidden:{}};return i.jsxs("div",{style:C.shell,children:[o&&l&&i.jsx("div",{style:C.backdrop,onClick:()=>a(!1)}),i.jsxs("aside",{style:K,children:[i.jsxs("div",{style:C.sideTop,children:[i.jsx("div",{style:C.brand,children:"Anvil · Habits"}),o&&i.jsx("button",{onClick:()=>a(!1),style:C.closeBtn,children:i.jsx(ct,{size:18})})]}),i.jsxs("button",{onClick:()=>A("ALL"),style:{...C.sideItem,...e==="ALL"?C.sideItemOn:{}},children:[i.jsx(xu,{size:15}),i.jsx("span",{style:C.sideLabel,children:"All Habits"}),i.jsx("span",{style:C.sideCount,children:t.length})]}),i.jsx("div",{style:C.sideDivider}),t.map(E=>{var y;const m=e===E.id,T=((y=Pe[E.pillar])==null?void 0:y.dot)||"#9A968C";return i.jsxs("button",{onClick:()=>A(E.id),style:{...C.sideItem,...m?C.sideItemOn:{}},children:[i.jsx("span",{style:{...C.sideDot,background:T}}),i.jsx("span",{style:C.sideLabel,children:E.name}),i.jsxs("span",{style:C.sideStreak,children:[i.jsx(is,{size:11})," ",E.streak]})]},E.id)}),d?i.jsx(Em,{habit:w,onChange:x,onSave:F,onCancel:()=>g(!1)}):i.jsxs("button",{onClick:()=>g(!0),style:C.sideNewBtn,children:[i.jsx(Vr,{size:13})," New habit"]})]}),i.jsxs("main",{style:C.main,children:[o&&i.jsxs("button",{onClick:()=>a(!0),style:C.hamburger,children:[i.jsx(_l,{size:18}),i.jsx("span",{style:C.hamburgerLabel,children:e==="ALL"?"All Habits":N==null?void 0:N.name})]}),e==="ALL"?i.jsx(Am,{habits:t,dayAction:R,logSet:H,onDelete:k,onEdit:E=>f(E)}):i.jsx(Dm,{habit:N,dayAction:R,logSet:H,onDelete:()=>k(N.id,N.name),onEdit:()=>f(N),setNote:(E,m)=>Q.setHabitLogNote(N.id,E,m).then(S)}),e==="ALL"&&i.jsx(Fm,{year:Cm})]}),p&&i.jsx(zm,{habit:p,onSave:async E=>{await Q.updateHabit(p.id,E),f(null),S()},onClose:()=>f(null)}),v&&i.jsx(Tm,{habit:v.habit,date:v.date,initialCount:((ot=v.habit.log_counts)==null?void 0:ot[v.date])??0,initialNote:((gt=v.habit.log_notes)==null?void 0:gt[v.date])??"",onSave:(E,m)=>_(v.habit.id,v.date,E,m),onClear:()=>z(v.habit.id,v.date),onClose:()=>j(null)}),i.jsx(ds,{toasts:u,onUndo:b,onDismiss:h})]})}function Em({habit:t,onChange:r,onSave:e,onCancel:n}){const o=t.type!=="regular";return i.jsxs("div",{style:C.addBox,children:[i.jsx("input",{autoFocus:!0,placeholder:"Habit name",value:t.name,onChange:s=>r(l=>({...l,name:s.target.value})),onKeyDown:s=>s.key==="Enter"&&e(),style:C.sideInput}),i.jsx("select",{value:t.pillar,onChange:s=>r(l=>({...l,pillar:s.target.value})),style:C.sideInput,children:Object.keys(Pe).map(s=>i.jsx("option",{children:s},s))}),i.jsxs("select",{value:t.type,onChange:s=>r(l=>({...l,type:s.target.value})),style:C.sideInput,children:[i.jsx("option",{value:"regular",children:"Regular (yes/no)"}),i.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),i.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),o&&i.jsxs("div",{style:{display:"flex",gap:6},children:[i.jsx("input",{type:"number",min:1,placeholder:"N",value:t.target_count||"",onChange:s=>r(l=>({...l,target_count:s.target.value})),style:{...C.sideInput,width:60}}),i.jsx("select",{value:t.period,onChange:s=>r(l=>({...l,period:s.target.value})),style:C.sideInput,children:["day","week","month","year"].map(s=>i.jsx("option",{children:s},s))})]}),i.jsxs("div",{style:{display:"flex",gap:6},children:[i.jsx("button",{onClick:e,style:C.sideAddBtn,children:i.jsx(Ft,{size:13})}),i.jsx("button",{onClick:n,style:C.sideCancelBtn,children:i.jsx(ct,{size:13})})]})]})}function zm({habit:t,onSave:r,onClose:e}){const[n,o]=I.useState(t.name),[s,l]=I.useState(t.type||"regular"),[a,d]=I.useState(t.target_count||""),[g,p]=I.useState(t.period||"week"),[f,v]=I.useState(t.reminder_time||""),j=()=>r({name:n.trim(),type:s,target_count:s!=="regular"?Number(a):null,period:s!=="regular"?g:null,reminder_time:f||null});return i.jsx("div",{style:C.modalOverlay,onClick:e,children:i.jsxs("div",{style:C.modal,onClick:w=>w.stopPropagation(),children:[i.jsxs("div",{style:C.modalHead,children:["Edit Habit",i.jsx("button",{onClick:e,style:C.closeBtn,children:i.jsx(ct,{size:16})})]}),i.jsx("label",{style:C.modalLabel,children:"Name"}),i.jsx("input",{value:n,onChange:w=>o(w.target.value),style:C.sideInput}),i.jsx("label",{style:C.modalLabel,children:"Type"}),i.jsxs("select",{value:s,onChange:w=>l(w.target.value),style:C.sideInput,children:[i.jsx("option",{value:"regular",children:"Regular (yes/no)"}),i.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),i.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),s!=="regular"&&i.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[i.jsx("input",{type:"number",min:1,value:a,onChange:w=>d(w.target.value),style:{...C.sideInput,width:70}}),i.jsx("select",{value:g,onChange:w=>p(w.target.value),style:C.sideInput,children:["day","week","month","year"].map(w=>i.jsx("option",{children:w},w))})]}),i.jsx("label",{style:C.modalLabel,children:"Reminder time"}),i.jsx("input",{type:"time",value:f,onChange:w=>v(w.target.value),style:C.sideInput}),i.jsx("button",{onClick:j,style:{...C.sideAddBtn,width:"100%",marginTop:10,height:36},children:"Save"})]})})}function Tm({habit:t,date:r,initialCount:e,initialNote:n,onSave:o,onClear:s,onClose:l}){const[a,d]=I.useState(e??0),[g,p]=I.useState(n??""),f=t.target_count,v=t.type==="minimum"?a>=f:a>0&&a<=f,j=t.type==="maximum"&&a>f,w=v?"#4C9A6B":j?"#C2536B":"#C2773B",x=v?"✓ Goal met":j?"Over the limit":"Not met yet";return i.jsx("div",{style:C.modalOverlay,onClick:l,children:i.jsxs("div",{style:C.modal,onClick:S=>S.stopPropagation(),children:[i.jsxs("div",{style:C.modalHead,children:[t.name,i.jsx("button",{onClick:l,style:C.closeBtn,children:i.jsx(ct,{size:16})})]}),i.jsxs("div",{style:{fontSize:12,color:"#9A968C",marginBottom:2},children:[r," · ",t.type==="minimum"?`at least ${f}`:`no more than ${f}`," / ",t.period]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:20,margin:"14px 0 6px"},children:[i.jsx("button",{onClick:()=>d(S=>Math.max(0,S-1)),style:C.counterBtn,children:"−"}),i.jsx("span",{style:{fontSize:38,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:52,textAlign:"center",color:w},children:a}),i.jsx("button",{onClick:()=>d(S=>S+1),style:C.counterBtn,children:"+"})]}),i.jsx("div",{style:{textAlign:"center",fontSize:12.5,fontWeight:700,color:w,marginBottom:12},children:x}),i.jsx("textarea",{value:g,onChange:S=>p(S.target.value),placeholder:"Add a comment (optional)…",style:{...C.sideInput,minHeight:56,resize:"vertical"}}),i.jsxs("div",{style:{display:"flex",gap:8,marginTop:10},children:[i.jsxs("button",{onClick:()=>o(a,g),style:{...C.sideAddBtn,flex:1,justifyContent:"center",height:38},children:[i.jsx(Ft,{size:14})," Set"]}),i.jsxs("button",{onClick:s,style:{...C.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[i.jsx(ct,{size:14})," Delete"]})]})]})})}function Am({habits:t,dayAction:r,logSet:e,onDelete:n,onEdit:o}){const[s,l]=I.useState(0),a=Sm(s),d=`${qa(a[0])} – ${qa(a[6])}${s===0?" · This week":""}`;return i.jsxs("div",{children:[i.jsxs("div",{style:C.mainHead,children:[i.jsx("div",{style:C.eyebrow,children:"Weekly view"}),i.jsx("h1",{style:C.h1,children:"All Habits"})]}),i.jsxs("div",{style:C.navBar,children:[i.jsx("button",{onClick:()=>l(g=>g-1),style:C.navBtn,children:i.jsx(Ln,{size:16})}),i.jsx("span",{style:C.navLabel,children:d}),i.jsx("button",{onClick:()=>l(g=>Math.min(0,g+1)),disabled:s>=0,style:{...C.navBtn,...s>=0?C.navBtnDisabled:{}},children:i.jsx(ge,{size:16})})]}),i.jsxs("div",{style:C.weekCard,children:[i.jsxs("div",{style:C.weekHeadRow,children:[i.jsx("div",{style:C.weekNameCol}),ju.map((g,p)=>i.jsxs("div",{style:C.weekDayHead,children:[i.jsx("span",{style:C.weekDayName,children:g}),i.jsx("span",{style:{...C.weekDayNum,...a[p]===Ce?C.weekDayToday:{}},children:new Date(a[p]+"T00:00").getDate()})]},g)),i.jsx("div",{style:C.weekStreakCol,children:"Streak"})]}),t.map(g=>{var R,L;const p=((R=Pe[g.pillar])==null?void 0:R.dot)||"#9A968C",f=((L=Pe[g.pillar])==null?void 0:L.soft)||"rgba(0,0,0,0.05)",v=e(g),j=g.type==="minimum"&&["week","month","year"].includes(g.period),w=g.target_count||0,x=g.logs||[],S=_=>x.filter(z=>z.slice(0,7)===_).length,c=_=>x.filter(z=>z.slice(0,4)===_).length,u=a.filter(_=>v.has(_)).length,b=_=>j?g.period==="week"?u>=w:g.period==="month"?S(_.slice(0,7))>=w:g.period==="year"?c(_.slice(0,4))>=w:!1:!1,h=j&&a.some(b),A=g.period==="week"?u:g.period==="month"?S(a[0].slice(0,7)):g.period==="year"?c(a[0].slice(0,4)):0;return i.jsxs("div",{style:C.weekRow,children:[i.jsxs("div",{style:{...C.weekNameCol,flexDirection:"column",alignItems:"flex-start",gap:2},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[i.jsx("span",{style:{...C.sideDot,background:p}}),i.jsx("span",{style:C.weekHabitName,children:g.name})]}),i.jsxs("div",{style:{display:"flex",gap:4,paddingLeft:15},children:[i.jsx("button",{onClick:()=>o(g),style:C.tinyBtn,title:"Edit",children:i.jsx(ls,{size:10})}),i.jsx("button",{onClick:()=>n(g.id,g.name),style:C.tinyBtn,title:"Delete",children:i.jsx(ct,{size:10})})]}),g.type!=="regular"&&i.jsx("span",{style:C.typeBadge,children:g.type==="minimum"?`≥${g.target_count}/${g.period}`:`≤${g.target_count}/${g.period}`})]}),a.map((_,z)=>{var y,D;const F=v.has(_),k=_>Ce,N=(g.type==="minimum"||g.type==="maximum")&&g.period==="day",H=(y=g.log_counts)==null?void 0:y[_],K=H!=null,ot=!!((D=g.log_notes)!=null&&D[_]),gt=b(_),E=z>0&&b(a[z-1]),m=z<a.length-1&&b(a[z+1]),T=F||gt;return i.jsxs("div",{style:{...C.weekCell,position:"relative"},children:[gt&&i.jsx("span",{style:{...C.chainLine,background:p,left:E?0:"50%",right:m?0:"50%"}}),i.jsx("button",{disabled:k,onClick:()=>r(g,_),style:{...C.tick,position:"relative",zIndex:1,...T?{background:p,borderColor:p,color:"#fff"}:{},...N&&K&&!F?{borderColor:p,color:p}:{},...k&&!T?C.tickFuture:{}},children:N?K?i.jsx("span",{style:{fontSize:12,fontWeight:700},children:H}):null:F&&i.jsx(Ft,{size:14,color:"#fff",strokeWidth:3})}),ot&&i.jsx("span",{style:C.cellNoteBubble})]},_)}),i.jsx("div",{style:C.weekStreakCol,children:h?i.jsxs("span",{style:{...C.streakPill,background:f,color:p},children:[i.jsx(wu,{size:12})," ",A,"/",w]}):i.jsxs("span",{style:{...C.streakPill,background:f,color:p},children:[i.jsx(is,{size:12})," ",g.streak]})})]},g.id)}),t.length===0&&i.jsx("div",{style:{fontSize:13,color:"#9A968C",padding:"24px 12px",textAlign:"center"},children:"No habits yet — add one from the sidebar."})]})]})}function Dm({habit:t,dayAction:r,logSet:e,onDelete:n,onEdit:o,setNote:s}){var ot,gt;const[l,a]=I.useState(null),[d,g]=I.useState(""),[p,f]=I.useState(null),[v,j]=I.useState(0),w=I.useRef(null);if(!t)return null;const x=((ot=Pe[t.pillar])==null?void 0:ot.dot)||"#9A968C",S=((gt=Pe[t.pillar])==null?void 0:gt.soft)||"rgba(0,0,0,0.05)",c=e(t),{dates:u,startOffset:b,label:h,year:A}=jm(v),R=u.filter(E=>E<=Ce&&c.has(E)).length,L=u.filter(E=>E<=Ce).length,_=L>0?Math.round(R/L*100):0,z=t.type==="minimum"&&(t.period==="month"||t.period==="year"),F=t.period==="year"?(t.logs||[]).filter(E=>E.startsWith(`${A}-`)).length:u.filter(E=>c.has(E)).length,k=z&&F>=(t.target_count||0),N=E=>{w.current=setTimeout(()=>a(E),500)},H=()=>clearTimeout(w.current),K=E=>{var m;f(E),g(((m=t.log_notes)==null?void 0:m[E])||""),a(null)};return i.jsxs("div",{children:[i.jsxs("div",{style:C.mainHead,children:[i.jsxs("div",{children:[i.jsxs("div",{style:C.eyebrow,children:[i.jsx("span",{style:{...C.sideDot,background:x,marginRight:6}}),t.pillar," · Monthly view"]}),i.jsx("h1",{style:C.h1,children:t.name})]}),i.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[i.jsxs("button",{onClick:o,style:C.actionBtn,children:[i.jsx(ls,{size:14})," Edit"]}),i.jsxs("button",{onClick:n,style:{...C.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[i.jsx(ct,{size:14})," Delete"]}),t.reminder_time&&i.jsxs("button",{style:C.actionBtn,children:[i.jsx(vu,{size:14})," ",t.reminder_time]})]})]}),i.jsxs("div",{style:C.statStrip,children:[i.jsx(Ze,{label:"Current streak",value:`${t.streak} days`,c:x,soft:S,flame:!0}),i.jsx(Ze,{label:"Done this month",value:`${R}/${L}`,c:x,soft:S}),i.jsx(Ze,{label:"Completion",value:`${_}%`,c:x,soft:S}),t.type==="regular"?i.jsx(Ze,{label:"Weekly target",value:`${t.target_per_week}×`,c:x,soft:S}):i.jsx(Ze,{label:t.type==="minimum"?"Min target":"Max allowed",value:`${t.target_count}/${t.period}`,c:x,soft:S})]}),i.jsxs("div",{style:C.navBar,children:[i.jsx("button",{onClick:()=>j(E=>E-1),style:C.navBtn,children:i.jsx(Ln,{size:16})}),i.jsxs("span",{style:C.navLabel,children:[h,v===0?" · This month":""]}),i.jsx("button",{onClick:()=>j(E=>Math.min(0,E+1)),disabled:v>=0,style:{...C.navBtn,...v>=0?C.navBtnDisabled:{}},children:i.jsx(ge,{size:16})})]}),z&&i.jsxs("div",{style:{...C.chainBanner,background:k?S:"#F7F6F3",color:k?x:"#9A968C"},children:[i.jsx(wu,{size:15}),k?`${t.period==="year"?"Yearly":"Monthly"} chain complete — ${F}/${t.target_count} connected`:`${F}/${t.target_count} this ${t.period} · ${(t.target_count||0)-F} more to connect the chain`]}),i.jsxs("div",{style:C.monthCard,children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[i.jsx("div",{style:C.monthTitle,children:h}),i.jsx("span",{style:{fontSize:11,color:"#9A968C"},children:"Long-press a day for options"})]}),i.jsx("div",{style:C.monthDow,children:ju.map(E=>i.jsx("div",{style:C.monthDowCell,children:E},E))}),i.jsxs("div",{style:C.monthGrid,children:[Array.from({length:b}).map((E,m)=>i.jsx("div",{},`pad${m}`)),u.map((E,m)=>{var Nn,rt;const T=m+1,y=c.has(E),D=E>Ce,W=E===Ce,tt=!!((Nn=t.log_notes)!=null&&Nn[E]),Y=(t.type==="minimum"||t.type==="maximum")&&t.period==="day",ft=(rt=t.log_counts)==null?void 0:rt[E],wt=ft!=null,V=y||k,Tt=(b+m)%7;return i.jsxs("div",{style:{position:"relative"},children:[k&&i.jsx("span",{style:{...C.chainLine,background:x,...Tt===0?{left:"50%"}:{left:-6},...Tt===6?{right:"50%"}:{right:-6}}}),i.jsx("button",{disabled:D,onClick:()=>r(t,E),onMouseDown:()=>!Y&&N(E),onMouseUp:H,onTouchStart:()=>!Y&&N(E),onTouchEnd:H,style:{...C.monthDay,position:"relative",zIndex:1,...V?{background:x,borderColor:x,color:"#fff"}:{},...Y&&wt&&!y?{borderColor:x,color:x}:{},...D&&!V?C.monthDayFuture:{},...W&&!V?{borderColor:x,borderWidth:2}:{},width:"100%"},children:T}),Y&&wt&&i.jsx("span",{style:{...C.countBadge,background:y?"#4C9A6B":x},children:ft}),tt&&i.jsx("span",{style:C.noteIndicator}),l===E&&i.jsx(Bm,{onEdit:o,onDelete:n,onAddNote:()=>K(E),onRemind:o,onClose:()=>a(null)})]},E)})]})]}),p&&i.jsxs("div",{style:C.noteBox,children:[i.jsxs("div",{style:{fontWeight:600,fontSize:13,marginBottom:6},children:["Note for ",p]}),i.jsx("textarea",{value:d,onChange:E=>g(E.target.value),placeholder:"Add a note for this day…",style:{...C.sideInput,minHeight:60,resize:"vertical"}}),i.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[i.jsxs("button",{onClick:()=>{s(p,d),f(null)},style:C.sideAddBtn,children:[i.jsx(Ft,{size:13})," Save"]}),i.jsx("button",{onClick:()=>f(null),style:C.sideCancelBtn,children:i.jsx(ct,{size:13})})]})]})]})}function Bm({onEdit:t,onDelete:r,onAddNote:e,onRemind:n,onClose:o}){return i.jsxs("div",{style:C.longPressMenu,children:[i.jsxs("button",{style:C.menuItem,onClick:()=>{t(),o()},children:[i.jsx(ls,{size:13})," Edit"]}),i.jsxs("button",{style:C.menuItem,onClick:()=>{e(),o()},children:[i.jsx(hu,{size:13})," Add note"]}),i.jsxs("button",{style:C.menuItem,onClick:()=>{n(),o()},children:[i.jsx(vu,{size:13})," Remind"]}),i.jsxs("button",{style:{...C.menuItem,color:"#C2536B"},onClick:()=>{r(),o()},children:[i.jsx(ct,{size:13})," Delete"]})]})}function Fm({year:t}){const[r,e]=I.useState([]);if(I.useEffect(()=>{Q.getHabitsYearly(t).then(e).catch(console.error)},[t]),!r.length)return null;const n=Array.from({length:12},(s,l)=>{const a=r.reduce((g,p)=>{var f;return g+(((f=p.monthly[l+1])==null?void 0:f.done)||0)},0),d=r.reduce((g,p)=>{var f;return g+Math.floor((((f=p.monthly[l+1])==null?void 0:f.days)||30)/7*7)},0);return d>0?Math.round(a/d*100):0}),o=Math.max(...n,1);return i.jsxs("div",{style:{...C.monthCard,marginTop:18},children:[i.jsxs("div",{style:C.monthTitle,children:[t," Completion"]}),i.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:6,height:80,marginTop:12},children:n.map((s,l)=>i.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[i.jsx("div",{style:{width:"100%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",height:`${s/o*60}px`,minHeight:2,opacity:s>0?1:.15},title:`${s}%`}),i.jsx("span",{style:{fontSize:9,color:"#9A968C",fontWeight:600},children:wm[l]})]},l))})]})}function Ze({label:t,value:r,c:e,soft:n,flame:o}){return i.jsxs("div",{style:{...C.stat,background:n},children:[i.jsx("div",{style:C.statLabel,children:t}),i.jsxs("div",{style:{...C.statValue,color:e},children:[o&&i.jsx(is,{size:15})," ",r]})]})}const C={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"#F7F6F3",minHeight:"100vh",color:"#26241F",position:"relative",overflow:"hidden"},sidebar:{width:230,flexShrink:0,background:"#fff",borderRight:"1px solid #ECEAE3",padding:"20px 12px",display:"flex",flexDirection:"column",gap:3,overflowY:"auto"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.18)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)",boxShadow:"none"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.38)",zIndex:20},sideTop:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 4px"},closeBtn:{border:"none",background:"none",color:"#6B675E",cursor:"pointer",padding:4,display:"grid",placeItems:"center",marginBottom:8},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"#9A968C",fontWeight:700,padding:"0 6px 14px"},sideItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"9px 10px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:500,color:"#4A463E",textAlign:"left"},sideItemOn:{background:"#F2F1EC",fontWeight:600},sideLabel:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},sideCount:{fontSize:11,fontWeight:700,color:"#9A968C",background:"#F2F1EC",borderRadius:10,padding:"1px 7px"},sideStreak:{display:"flex",alignItems:"center",gap:3,fontSize:11,fontWeight:600,color:"#C2773B"},sideDot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},sideDivider:{height:1,background:"#ECEAE3",margin:"8px 6px"},addBox:{padding:"10px 6px",display:"flex",flexDirection:"column",gap:6},sideInput:{border:"1px solid #E4E2DA",borderRadius:7,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},sideAddBtn:{border:"none",background:"#4C9A6B",color:"#fff",height:30,padding:"0 12px",borderRadius:7,cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontSize:13,fontFamily:"inherit"},sideCancelBtn:{border:"1px solid #E4E2DA",background:"#fff",color:"#6B675E",width:30,height:30,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},sideNewBtn:{display:"flex",alignItems:"center",gap:6,width:"100%",border:"1px dashed #D9D6CE",background:"none",borderRadius:8,padding:"8px 10px",fontSize:12.5,color:"#9A968C",fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginTop:6,justifyContent:"center"},main:{flex:1,padding:"26px",overflowX:"hidden",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid #E0DDD5",background:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"#4A463E",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:200},mainHead:{marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"#9A968C",fontWeight:600,marginBottom:5,display:"flex",alignItems:"center"},h1:{fontSize:27,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},actionBtn:{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:500,color:"#6B675E",border:"1px solid #E0DDD5",background:"#fff",padding:"5px 10px",borderRadius:7,cursor:"pointer",fontFamily:"inherit"},weekCard:{background:"#fff",borderRadius:12,padding:"8px 14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"auto"},weekHeadRow:{display:"flex",alignItems:"flex-end",padding:"10px 0",borderBottom:"1px solid #ECEAE3",minWidth:480},weekNameCol:{width:160,flexShrink:0,display:"flex",alignItems:"center",gap:8},weekDayHead:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2},weekDayName:{fontSize:10,fontWeight:600,color:"#9A968C",textTransform:"uppercase"},weekDayNum:{fontSize:12,fontWeight:600,color:"#6B675E",width:22,height:22,display:"grid",placeItems:"center",borderRadius:"50%"},weekDayToday:{background:"#26241F",color:"#fff"},weekStreakCol:{width:64,flexShrink:0,textAlign:"center",fontSize:10,fontWeight:600,color:"#9A968C",textTransform:"uppercase"},weekRow:{display:"flex",alignItems:"center",padding:"9px 0",borderBottom:"1px solid #F4F2EC",minWidth:480},weekHabitName:{fontSize:13,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},weekCell:{flex:1,display:"grid",placeItems:"center"},typeBadge:{fontSize:10,color:"#9A968C",background:"#F2F1EC",padding:"1px 6px",borderRadius:8,fontWeight:600},tick:{width:26,height:26,borderRadius:7,border:"2px solid #E0DDD5",background:"#fff",cursor:"pointer",display:"grid",placeItems:"center",padding:0},tickFuture:{opacity:.4,cursor:"not-allowed",borderStyle:"dashed"},streakPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,fontWeight:700,padding:"3px 9px",borderRadius:12},tinyBtn:{border:"none",background:"none",color:"#C3BFB5",cursor:"pointer",padding:"2px 3px",display:"grid",placeItems:"center",borderRadius:4},statStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:10,marginBottom:18},stat:{borderRadius:10,padding:"13px 14px"},statLabel:{fontSize:11,fontWeight:600,color:"#6B675E",marginBottom:5},statValue:{fontSize:19,fontWeight:700,display:"flex",alignItems:"center",gap:5,fontFamily:"'Fraunces',Georgia,serif"},monthCard:{background:"#fff",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},monthTitle:{fontSize:14,fontWeight:700,marginBottom:12,fontFamily:"'Fraunces',Georgia,serif"},monthDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:8},monthDowCell:{fontSize:10,fontWeight:600,color:"#9A968C",textAlign:"center",textTransform:"uppercase"},monthGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6},monthDay:{aspectRatio:"1",border:"1.5px solid #ECEAE3",background:"#fff",borderRadius:8,fontSize:12.5,fontWeight:600,color:"#6B675E",cursor:"pointer",fontFamily:"inherit",display:"grid",placeItems:"center"},monthDayFuture:{opacity:.4,cursor:"not-allowed",background:"#FAFAF8"},noteIndicator:{position:"absolute",top:3,right:3,width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},cellNoteBubble:{position:"absolute",top:2,right:"calc(50% - 16px)",width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},countBadge:{position:"absolute",bottom:2,right:2,minWidth:13,height:13,padding:"0 2px",borderRadius:7,color:"#fff",fontSize:9,fontWeight:700,display:"grid",placeItems:"center",lineHeight:1},counterBtn:{width:44,height:44,borderRadius:"50%",border:"1.5px solid #E0DDD5",background:"#fff",color:"#26241F",fontSize:24,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1},chainLine:{position:"absolute",top:"calc(50% - 3px)",left:0,right:0,height:6,zIndex:0,opacity:.9},chainBanner:{display:"flex",alignItems:"center",gap:8,borderRadius:10,padding:"10px 14px",marginBottom:14,fontSize:12.5,fontWeight:700,fontFamily:"'Inter',system-ui,sans-serif"},navBar:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:16},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid #E0DDD5",background:"#fff",color:"#4A463E",cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},navLabel:{fontSize:13,fontWeight:700,color:"#26241F",minWidth:180,textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},noteBox:{background:"#fff",borderRadius:10,padding:14,marginTop:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},longPressMenu:{position:"absolute",top:"100%",left:0,zIndex:50,background:"#fff",border:"1px solid #E0DDD5",borderRadius:10,boxShadow:"0 4px 16px rgba(0,0,0,0.12)",padding:"4px 0",minWidth:140},menuItem:{display:"flex",alignItems:"center",gap:8,width:"100%",border:"none",background:"none",padding:"8px 14px",fontSize:13,color:"#26241F",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:100,display:"grid",placeItems:"center"},modal:{background:"#fff",borderRadius:14,padding:24,width:320,maxWidth:"90vw",display:"flex",flexDirection:"column",gap:8},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:700,fontSize:16,fontFamily:"'Fraunces',Georgia,serif",marginBottom:6},modalLabel:{fontSize:11,fontWeight:600,color:"#9A968C",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4}},Ni=[{id:1,label:"Rough",emoji:"😣",color:"#C2536B"},{id:2,label:"Low",emoji:"🙁",color:"#C2773B"},{id:3,label:"Okay",emoji:"😐",color:"#C9A227"},{id:4,label:"Good",emoji:"🙂",color:"#4C9A6B"},{id:5,label:"Great",emoji:"😄",color:"#3A7CA5"}],_m=t=>Ni.find(r=>r.id===t),Ps=[{id:"wins",label:"Wins",hint:"What went well today?",icon:An,color:"#C9A227"},{id:"grateful",label:"Grateful for",hint:"1–3 things",icon:om,color:"#C2536B"},{id:"mattered",label:"What mattered",hint:"The point of today",icon:Rl,color:"#3A7CA5"},{id:"letgo",label:"Letting go of",hint:"Offload what's draining",icon:dm,color:"#8268B0"},{id:"tomorrow",label:"Tomorrow's one thing",hint:"A single priority",icon:am,color:"#4C9A6B"}],Rm=()=>new Date().toISOString().slice(0,10),Ws=t=>new Date(t+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"});function Lm(){const t=Rm(),[r,e]=[new Date().getFullYear(),new Date().getMonth()+1],[n,o]=I.useState(null),s=n||t,l=s===t,[a,d]=I.useState(null),[g,p]=I.useState({}),[f,v]=I.useState(Object.fromEntries(Ps.map(z=>[z.id,""]))),j=I.useCallback(async z=>{const F=await Q.getJournalEntry(z);d(F)},[]);I.useCallback(async()=>{const z=await Q.getJournalHistory(r,e);p(z)},[r,e]);const w=I.useCallback(async()=>{const[z,F]=await Promise.all([Q.getJournalEntry(s),Q.getJournalHistory(r,e)]);d(z),p(F)},[s,r,e]);I.useEffect(()=>{w()},[w]);const x=async z=>{await Q.updateJournalMood(s,z),w()},S=async z=>{const F=f[z].trim();F&&(await Q.addJournalBullet(s,z,F),v(k=>({...k,[z]:""})),j(s))},c=async z=>{await Q.deleteJournalBullet(z),j(s)},u=z=>{o(z===t?null:z),v(Object.fromEntries(Ps.map(F=>[F.id,""])))};if(!a)return i.jsx("div",{style:{padding:28,color:"#9A968C"},children:"Loading…"});const b=a.mood!==null,h=(()=>{let z=0;const F=new Date(t);if(g[t]||l&&b)z=1,F.setDate(F.getDate()-1);else return 0;for(;;){const N=F.toISOString().slice(0,10);if(g[N])z++,F.setDate(F.getDate()-1);else break}return z})(),A=Object.values(a.bullets||{}).reduce((z,F)=>z+F.length,0),R=new Date(r,e,0).getDate(),L=new Date(r,e-1,1).getDay(),_=L===0?6:L-1;return i.jsxs("div",{style:X.page,children:[i.jsxs("div",{style:X.head,children:[i.jsxs("div",{children:[i.jsx("div",{style:X.eyebrow,children:"Anvil · Journal"}),!l&&i.jsxs("button",{style:X.backBtn,onClick:()=>o(null),children:[i.jsx(Ln,{size:14})," Back to Today"]}),i.jsx("h1",{style:X.h1,children:l?"Today":Ws(s)}),l&&i.jsx("div",{style:X.date,children:Ws(t)})]}),i.jsxs("div",{style:X.streakBox,children:[i.jsx(is,{size:16,color:"#C2773B"}),i.jsx("span",{style:X.streakNum,children:h}),i.jsx("span",{style:X.streakLabel,children:"day streak"})]})]}),i.jsxs("div",{style:X.card,children:[i.jsxs("div",{style:X.cardTitle,children:["How ",l?"are":"were"," you?"]}),i.jsx("div",{style:X.moodRow,children:Ni.map(z=>{const F=a.mood===z.id;return i.jsxs("button",{onClick:()=>x(z.id),style:{...X.moodBtn,...F?{background:z.color,borderColor:z.color,transform:"translateY(-2px)"}:{}},children:[i.jsx("span",{style:X.moodEmoji,children:z.emoji}),i.jsx("span",{style:{...X.moodLabel,color:F?"#fff":"#6B675E"},children:z.label})]},z.id)})})]}),Ps.map(z=>{var N;const F=z.icon,k=((N=a.bullets)==null?void 0:N[z.id])||[];return i.jsxs("div",{style:X.card,children:[i.jsxs("div",{style:X.sectionHead,children:[i.jsx("span",{style:{...X.sectionIcon,background:`${z.color}1A`,color:z.color},children:i.jsx(F,{size:15})}),i.jsxs("div",{children:[i.jsx("div",{style:X.cardTitle,children:z.label}),i.jsx("div",{style:X.sectionHint,children:z.hint})]})]}),i.jsx("ul",{style:X.bulletList,children:k.map(H=>i.jsxs("li",{style:X.bullet,children:[i.jsx("span",{style:{...X.bulletDot,background:z.color}}),i.jsx("span",{style:X.bulletText,children:H.text}),i.jsx("button",{onClick:()=>c(H.id),style:X.bulletDel,children:i.jsx(ct,{size:13})})]},H.id))}),i.jsxs("div",{style:X.addRow,children:[i.jsx("input",{placeholder:"Add a point…",value:f[z.id],onChange:H=>v(K=>({...K,[z.id]:H.target.value})),onKeyDown:H=>H.key==="Enter"&&S(z.id),style:X.input}),i.jsx("button",{onClick:()=>S(z.id),style:{...X.addBtn,background:z.color},children:i.jsx(Vr,{size:16})})]})]},z.id)}),i.jsxs("div",{style:X.card,children:[i.jsxs("div",{style:X.cardTitle,children:[new Date(r,e-1).toLocaleDateString("en-US",{month:"long",year:"numeric"})," · Mood history",i.jsx("span",{style:{fontSize:11,color:"#9A968C",fontWeight:400,marginLeft:8},children:"tap a day to view"})]}),i.jsx("div",{style:X.calDow,children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(z=>i.jsx("div",{style:X.calDowCell,children:z},z))}),i.jsxs("div",{style:X.calGrid,children:[Array.from({length:_}).map((z,F)=>i.jsx("div",{},`p${F}`)),Array.from({length:R},(z,F)=>F+1).map(z=>{const F=`${r}-${String(e).padStart(2,"0")}-${String(z).padStart(2,"0")}`,k=F===t&&a.mood?a.mood:g[F],N=k?_m(k):null,H=F>t,K=F===s;return i.jsx("button",{onClick:()=>!H&&u(F),disabled:H,style:{...X.calDay,background:N?N.color:H?"#FAFAF8":"#fff",borderColor:K?"#26241F":"#ECEAE3",borderWidth:K?2:1,color:N?"#fff":"#B5B1A7",opacity:H?.5:1,cursor:H?"not-allowed":"pointer",outline:K?"2px solid #26241F":"none",outlineOffset:1},title:N?N.label:F,children:N?N.emoji:z},z)})]}),i.jsx("div",{style:X.legend,children:Ni.map(z=>i.jsxs("span",{style:X.legendItem,children:[i.jsx("span",{style:{...X.legendDot,background:z.color}})," ",z.label]},z.id))})]}),i.jsx("div",{style:X.footer,children:l?b?`Mood set · ${A} point${A===1?"":"s"} written today`:"Tap a mood to log today and keep your streak":`Viewing ${Ws(s)}`})]})}const X={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"#F7F6F3",minHeight:"100%",padding:"28px 24px",color:"#26241F",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"#9A968C",fontWeight:600,marginBottom:4},backBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",background:"none",color:"#3A7CA5",fontSize:12.5,fontWeight:600,cursor:"pointer",padding:"0 0 6px",fontFamily:"inherit"},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},date:{fontSize:13,color:"#9A968C",marginTop:4},streakBox:{display:"flex",alignItems:"center",gap:6,background:"#fff",border:"1px solid #ECEAE3",borderRadius:10,padding:"8px 14px"},streakNum:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"#C2773B"},streakLabel:{fontSize:11,color:"#9A968C",fontWeight:500},card:{background:"#fff",borderRadius:12,padding:"18px 20px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},cardTitle:{fontSize:14,fontWeight:700,marginBottom:12,color:"#26241F"},moodRow:{display:"flex",gap:8,flexWrap:"wrap"},moodBtn:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,border:"2px solid #ECEAE3",background:"#fff",borderRadius:10,padding:"10px 12px",cursor:"pointer",flex:"1 1 60px",transition:"transform 0.1s"},moodEmoji:{fontSize:22},moodLabel:{fontSize:11,fontWeight:600},sectionHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:10},sectionIcon:{width:32,height:32,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},sectionHint:{fontSize:11.5,color:"#9A968C",marginTop:1},bulletList:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6,marginBottom:10},bullet:{display:"flex",alignItems:"center",gap:8,fontSize:13.5,lineHeight:1.4},bulletDot:{width:6,height:6,borderRadius:"50%",flexShrink:0},bulletText:{flex:1},bulletDel:{border:"none",background:"none",color:"#C3BFB5",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},addRow:{display:"flex",gap:8},input:{flex:1,border:"1px solid #E4E2DA",borderRadius:8,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",outline:"none"},addBtn:{width:36,height:36,border:"none",borderRadius:8,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"#9A968C",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:12},calDay:{aspectRatio:"1",border:"1px solid #ECEAE3",borderRadius:7,fontSize:13,display:"grid",placeItems:"center",fontWeight:500,fontFamily:"inherit"},legend:{display:"flex",gap:10,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"#6B675E"},legendDot:{width:8,height:8,borderRadius:"50%",display:"inline-block"},footer:{fontSize:12.5,color:"#9A968C",textAlign:"center",marginTop:8,fontStyle:"italic"}},ur=[{id:"D",label:"Data",color:"#3A7CA5",soft:"rgba(58,124,165,0.10)",prompt:"What did you read/watch? Log the raw source and a quick note.",hint:"e.g. 'Atomic Habits ch.1 — habits are systems not goals'"},{id:"I",label:"Information",color:"#8268B0",soft:"rgba(130,104,176,0.10)",prompt:"What did you actually understand from it? In your own words.",hint:"e.g. 'Small 1% improvements compound into massive change over time'"},{id:"K",label:"Knowledge",color:"#C9A227",soft:"rgba(201,162,39,0.10)",prompt:"How will this specifically improve your life? Connect it to your goals.",hint:"e.g. 'I will improve my morning workout habit by 1% each week'"},{id:"W",label:"Wisdom",color:"#4C9A6B",soft:"rgba(76,154,107,0.10)",prompt:"How have you implemented it? What changed?",hint:"e.g. 'I've not missed a workout in 3 weeks using the 1% rule'"}],td=t=>ur.findIndex(r=>r.id===t),Mi=[{id:"book",label:"Book",icon:yu},{id:"video",label:"Video",icon:gm},{id:"article",label:"Article",icon:hu}],rd=t=>Mi.find(r=>r.id===t)||Mi[0],Os={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"};function Nm(){var F;const[t,r]=I.useState([]),[e,n]=I.useState(null),[o,s]=I.useState("ALL"),[l,a]=I.useState(!1),[d,g]=I.useState(null),[p,f]=I.useState({title:"",type:"book",pillar:"Academic",note:""}),[v,j]=I.useState({}),w=I.useCallback(async()=>{try{const k=await Q.getSkills();r(k);const N={};k.forEach(H=>{N[H.id]=Object.fromEntries(ur.map(K=>[K.id,""]))}),j(H=>{const K={...N};return k.forEach(ot=>{H[ot.id]&&(K[ot.id]={...N[ot.id],...H[ot.id]})}),K})}catch(k){console.error(k)}},[]);I.useEffect(()=>{w()},[w]);const x=t.find(k=>k.id===e),S=x?td(x.stage):-1,c=async(k,N)=>{var K;const H=(((K=v[k])==null?void 0:K[N])??"").trim();H&&(await Q.addSkillNote(k,N,H),j(ot=>({...ot,[k]:{...ot[k],[N]:""}})),w())},u=async k=>{await Q.deleteSkillNote(k),w()},b=async k=>{await Q.toggleSkillNote(k),w()},h=async(k,N)=>{t.find(K=>K.id===k)&&(N==="W"&&g(k),await Q.completeSkillStage(k,N),w())},A=async()=>{if(!p.title.trim())return;const k=await Q.createSkill({pillar:p.pillar,title:p.title.trim(),source_type:p.type,note_d:p.note.trim()});a(!1),f({title:"",type:"book",pillar:"Academic",note:""}),n(k.id),w()},R=async k=>{await Q.deleteSkill(k),e===k&&n(null),w()},L=o==="ALL"?t:t.filter(k=>k.stage===o),_=t.filter(k=>k.stage==="W").length,z=!!x;return i.jsxs("div",{style:M.page,children:[d&&i.jsx("div",{style:M.celebOverlay,children:i.jsxs("div",{style:M.celebBox,children:[i.jsx("div",{style:M.celebEmoji,children:"🏆"}),i.jsx("div",{style:M.celebTitle,children:"Wisdom unlocked!"}),i.jsx("div",{style:M.celebSub,children:"You've implemented this knowledge — that's rare and real."}),i.jsx("button",{onClick:()=>g(null),style:M.celebBtn,children:"Continue"})]})}),i.jsxs("div",{style:M.head,children:[i.jsxs("div",{children:[i.jsx("div",{style:M.eyebrow,children:"Anvil · Skills"}),i.jsx("h1",{style:M.h1,children:"DIKW Skills"}),i.jsx("div",{style:M.subhead,children:"Data → Information → Knowledge → Wisdom"})]}),i.jsxs("div",{style:M.headRight,children:[i.jsxs("div",{style:M.wisdomBadge,children:[i.jsx(An,{size:14,color:"#C9A227"})," ",_," Wisdom",_!==1?"s":""]}),i.jsxs("button",{onClick:()=>{a(!0),n(null)},style:M.addSkillBtn,children:[i.jsx(Vr,{size:15})," Add skill"]})]})]}),i.jsx("div",{style:M.filterBar,children:["ALL",...ur.map(k=>k.id)].map(k=>{const N=ur.find(K=>K.id===k),H=o===k;return i.jsx("button",{onClick:()=>s(k),style:{...M.filterBtn,...H?{background:N?N.color:"#26241F",color:"#fff",borderColor:"transparent"}:{}},children:N?`${k} · ${N.label}`:"All"},k)})}),i.jsxs("div",{style:{...M.layout,gridTemplateColumns:z?"1fr 1fr":"1fr"},children:[i.jsxs("div",{style:M.cardList,children:[l&&i.jsxs("div",{style:{...M.skillCard,border:"2px dashed #3A7CA5"},children:[i.jsx("div",{style:M.cardTitle,children:"New skill"}),i.jsx("input",{placeholder:"Title (book / video / article name)",value:p.title,onChange:k=>f(N=>({...N,title:k.target.value})),onKeyDown:k=>k.key==="Enter"&&A(),style:M.input,autoFocus:!0}),i.jsxs("div",{style:M.addRow,children:[i.jsx("select",{value:p.type,onChange:k=>f(N=>({...N,type:k.target.value})),style:M.select,children:Mi.map(k=>i.jsx("option",{value:k.id,children:k.label},k.id))}),i.jsx("select",{value:p.pillar,onChange:k=>f(N=>({...N,pillar:k.target.value})),style:M.select,children:Object.keys(Os).map(k=>i.jsx("option",{children:k},k))})]}),i.jsx("input",{placeholder:"First note (what did you read/watch?)",value:p.note,onChange:k=>f(N=>({...N,note:k.target.value})),style:M.input}),i.jsxs("div",{style:M.addRow,children:[i.jsxs("button",{onClick:A,style:M.saveBtn,children:[i.jsx(Ft,{size:14})," Save"]}),i.jsxs("button",{onClick:()=>a(!1),style:M.cancelBtn,children:[i.jsx(ct,{size:14})," Cancel"]})]})]}),L.map(k=>{const N=td(k.stage),H=ur[N],K=rd(k.type),ot=k.stage==="W",gt=e===k.id;return i.jsxs("div",{onClick:()=>n(gt?null:k.id),style:{...M.skillCard,...gt?{borderColor:H.color,borderWidth:2}:{},...ot?{background:"rgba(76,154,107,0.05)"}:{}},children:[i.jsxs("div",{style:M.skillCardTop,children:[i.jsxs("div",{style:M.skillMeta,children:[i.jsx("span",{style:{color:Os[k.pillar]},children:i.jsx(K.icon,{size:13})}),i.jsx("span",{style:{...M.pillarDot,background:Os[k.pillar]}}),i.jsxs("span",{style:M.srcLabel,children:[K.label," · ",k.pillar]})]}),i.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[ot&&i.jsx(Su,{size:14,color:"#4C9A6B"}),i.jsx("button",{onClick:E=>{E.stopPropagation(),R(k.id)},style:M.ghostBtn,children:i.jsx(ct,{size:13})})]})]}),i.jsx("div",{style:M.skillTitle,children:k.title}),i.jsxs("div",{style:M.track,children:[ur.map((E,m)=>{var W;const T=m<N,y=m===N,D=(W=k.completed_stages)==null?void 0:W[E.id];return i.jsxs("div",{style:M.trackItem,children:[i.jsxs("div",{style:{...M.trackDot,background:T||D||y?E.color:"#E4E2DA",boxShadow:y?`0 0 0 3px ${E.color}33`:"none"},children:[(T||y&&D)&&i.jsx(Ft,{size:9,color:"#fff",strokeWidth:3}),y&&!D&&i.jsx("span",{style:M.trackCurrent,children:E.id}),!T&&!y&&i.jsx(Qa,{size:8,color:"#B5B1A7"})]}),m<ur.length-1&&i.jsx("div",{style:{...M.trackLine,background:T?ur[m+1].color:"#E4E2DA"}})]},E.id)}),i.jsx("span",{style:{...M.stageTag,background:H.soft,color:H.color},children:H.label})]})]},k.id)}),L.length===0&&!l&&i.jsx("div",{style:M.empty,children:"No skills at this stage yet."})]}),x&&i.jsxs("div",{style:M.detail,children:[i.jsxs("div",{style:M.detailHead,children:[i.jsxs("div",{children:[i.jsxs("div",{style:M.eyebrow,children:[rd(x.type).label," · ",x.pillar]}),i.jsx("div",{style:M.detailTitle,children:x.title})]}),i.jsx("button",{onClick:()=>n(null),style:M.closeBtn,children:i.jsx(ct,{size:16})})]}),ur.map((k,N)=>{var T,y,D;const H=N<=S,K=N===S,ot=N<S||((T=x.completed_stages)==null?void 0:T[k.id]),gt=N>S,E=((y=x.notes)==null?void 0:y[k.id])||[],m=((D=v[x.id])==null?void 0:D[k.id])??"";return i.jsxs("div",{style:{...M.stageBlock,...H?{borderColor:k.color}:{},opacity:gt?.45:1},children:[i.jsxs("div",{style:M.stageBlockHead,children:[i.jsx("div",{style:{...M.stageLetter,background:H?k.color:"#E4E2DA",color:H?"#fff":"#9A968C"},children:ot&&!K?i.jsx(Ft,{size:12,color:"#fff",strokeWidth:3}):gt?i.jsx(Qa,{size:11,color:"#9A968C"}):k.id}),i.jsxs("div",{style:{flex:1},children:[i.jsx("div",{style:{...M.stageName,color:H?k.color:"#9A968C"},children:k.label}),H&&i.jsx("div",{style:M.stagePrompt,children:k.prompt})]}),ot&&!K&&i.jsx("span",{style:{...M.doneBadge,color:k.color,background:k.soft},children:"Done"})]}),H&&(()=>{var ft,wt;const W=k.id==="W",tt=E.length>0&&E.every(V=>V.done),Y=W?tt:E.length>0;return i.jsxs(i.Fragment,{children:[E.length>0&&i.jsx("ul",{style:M.noteList,children:E.map(V=>i.jsxs("li",{style:M.noteItem,children:[W?i.jsx("button",{onClick:()=>b(V.id),style:{...M.checkBox,...V.done?{background:k.color,borderColor:k.color}:{}},children:V.done&&i.jsx(Ft,{size:11,color:"#fff",strokeWidth:3})}):i.jsx("span",{style:{...M.noteDot,background:k.color}}),i.jsx("span",{style:{...M.noteText,...W&&V.done?{textDecoration:"line-through",color:"#9A968C"}:{}},children:V.text}),i.jsx("button",{onClick:()=>u(V.id),style:M.ghostBtn,children:i.jsx(ct,{size:12})})]},V.id))}),E.length===0&&i.jsx("div",{style:M.noNotes,children:W?"Add the steps to implement this — check each off as you do it.":`No notes yet — ${k.hint}`}),i.jsxs("div",{style:M.noteAddRow,children:[i.jsx("input",{placeholder:W?"Add a step to implement…":`Add a ${k.label} note…`,value:m,onChange:V=>j(Tt=>({...Tt,[x.id]:{...Tt[x.id],[k.id]:V.target.value}})),onKeyDown:V=>V.key==="Enter"&&c(x.id,k.id),style:M.noteInput}),i.jsx("button",{onClick:()=>c(x.id,k.id),style:{...M.noteAddBtn,background:k.color},children:i.jsx(Vr,{size:14})})]}),K&&!((ft=x.completed_stages)!=null&&ft[k.id])&&i.jsxs(i.Fragment,{children:[W&&E.length>0&&!tt&&i.jsxs("div",{style:M.checklistHint,children:[E.filter(V=>V.done).length,"/",E.length," done — check all steps to complete Wisdom"]}),i.jsxs("button",{onClick:()=>h(x.id,k.id),disabled:!Y,style:{...M.advanceBtn,background:Y?k.color:"#C3BFB5",marginTop:10,cursor:Y?"pointer":"not-allowed"},children:[i.jsx(Ft,{size:14}),W?"Mark Wisdom complete":`Complete ${k.label} → ${(wt=ur[N+1])==null?void 0:wt.label}`]})]})]})})()]},k.id)}),x.stage==="W"&&((F=x.completed_stages)==null?void 0:F.W)&&i.jsxs("div",{style:M.wisdomDone,children:[i.jsx(An,{size:16,color:"#4C9A6B"})," Wisdom achieved — implemented in your life"]})]})]})]})}const M={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"#F7F6F3",minHeight:"100%",padding:"26px 22px",color:"#26241F",boxSizing:"border-box",position:"relative"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"#9A968C",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"#9A968C",marginTop:3},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},wisdomBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addSkillBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#26241F",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},filterBar:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16},filterBtn:{border:"1px solid #E0DDD5",background:"#fff",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:600,color:"#4A463E",cursor:"pointer",fontFamily:"inherit"},layout:{display:"grid",gap:12},cardList:{display:"flex",flexDirection:"column",gap:10},skillCard:{background:"#fff",borderRadius:12,padding:"14px",border:"1.5px solid #ECEAE3",cursor:"pointer",boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},skillCardTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},skillMeta:{display:"flex",alignItems:"center",gap:6},pillarDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},srcLabel:{fontSize:11,fontWeight:600,color:"#9A968C"},skillTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",marginBottom:12},cardTitle:{fontSize:13,fontWeight:700,marginBottom:10},track:{display:"flex",alignItems:"center"},trackItem:{display:"flex",alignItems:"center"},trackDot:{width:22,height:22,borderRadius:"50%",display:"grid",placeItems:"center",flexShrink:0},trackCurrent:{fontSize:9,fontWeight:800,color:"#fff"},trackLine:{width:24,height:3,borderRadius:2},stageTag:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,marginLeft:10},detail:{background:"#fff",borderRadius:14,padding:"18px 16px",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",border:"1.5px solid #ECEAE3",alignSelf:"start"},detailHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16},detailTitle:{fontSize:18,fontWeight:700,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"#F2F1EC",color:"#6B675E",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},stageBlock:{border:"1.5px solid #ECEAE3",borderRadius:10,padding:"12px 13px",marginBottom:10},stageBlockHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:8},stageLetter:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",fontSize:13,fontWeight:800,flexShrink:0},stageName:{fontSize:13,fontWeight:700},stagePrompt:{fontSize:11.5,color:"#6B675E",marginTop:2,lineHeight:1.4},doneBadge:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10,marginLeft:"auto",flexShrink:0},noteList:{margin:"0 0 8px 0",padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6},noteItem:{display:"flex",alignItems:"flex-start",gap:8,fontSize:13,lineHeight:1.4},noteDot:{width:6,height:6,borderRadius:"50%",flexShrink:0,marginTop:5},checkBox:{width:18,height:18,borderRadius:5,border:"2px solid #D9D6CE",background:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginTop:1,padding:0},checklistHint:{fontSize:11.5,color:"#9A968C",fontWeight:600,marginTop:10,textAlign:"center"},noteText:{flex:1,color:"#26241F"},noNotes:{fontSize:12,color:"#B5B1A7",fontStyle:"italic",marginBottom:8},noteAddRow:{display:"flex",gap:6},noteInput:{flex:1,border:"1px solid #E4E2DA",borderRadius:7,padding:"7px 10px",fontSize:13,fontFamily:"inherit",outline:"none"},noteAddBtn:{width:32,height:32,border:"none",borderRadius:7,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},advanceBtn:{display:"flex",alignItems:"center",gap:8,border:"none",color:"#fff",padding:"10px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},wisdomDone:{display:"flex",alignItems:"center",gap:8,justifyContent:"center",fontSize:13.5,fontWeight:700,color:"#4C9A6B",padding:12,background:"rgba(76,154,107,0.08)",borderRadius:10,marginTop:4},ghostBtn:{border:"none",background:"none",color:"#C3BFB5",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},input:{border:"1px solid #E4E2DA",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box",marginBottom:8},select:{border:"1px solid #E4E2DA",borderRadius:8,padding:"8px 10px",fontSize:12.5,fontFamily:"inherit",flex:1},addRow:{display:"flex",gap:8,marginBottom:8},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid #E4E2DA",background:"#fff",color:"#6B675E",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{fontSize:13,color:"#9A968C",padding:"32px 12px",textAlign:"center"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.55)",zIndex:50,display:"grid",placeItems:"center"},celebBox:{background:"#fff",borderRadius:20,padding:"40px 32px",textAlign:"center",maxWidth:320,boxShadow:"0 8px 40px rgba(0,0,0,0.18)"},celebEmoji:{fontSize:52,marginBottom:12},celebTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:8},celebSub:{fontSize:13.5,color:"#6B675E",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:"#4C9A6B",color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},oo=[{id:"aarti",title:"Aarti",html:`<h1>॥ गणपतीची आरती ॥</h1><br/>
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
      </div>`}];function Mm(){const[t,r]=I.useState(()=>window.innerWidth<720);return I.useEffect(()=>{const e=()=>r(window.innerWidth<720);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),t}function Pm({base:t,count:r}){const[e,n]=I.useState(0);return i.jsxs("div",{style:{maxWidth:560,margin:"0 auto"},children:[i.jsx("div",{style:ut.carouselFrame,children:i.jsx("img",{src:`${t}${e+1}.jpg`,alt:`Adhyay ${e+1}`,style:ut.carouselImg})}),i.jsxs("div",{style:ut.carouselNav,children:[i.jsxs("button",{onClick:()=>n(o=>(o-1+r)%r),style:ut.carouselBtn,children:[i.jsx(Ln,{size:16})," Prev"]}),i.jsxs("span",{style:ut.carouselCount,children:["Adhyay ",e+1," / ",r]}),i.jsxs("button",{onClick:()=>n(o=>(o+1)%r),style:ut.carouselBtn,children:["Next ",i.jsx(ge,{size:16})]})]})]})}function Wm(){const t=Mm(),[r,e]=I.useState(!1),[n,o]=I.useState(oo[0].id),s=oo.find(d=>d.id===n)||oo[0],l=d=>{o(d),t&&e(!1)},a={...ut.sidebar,...t?ut.sidebarOverlay:{},...t&&!r?ut.sidebarHidden:{}};return i.jsxs("div",{style:ut.shell,children:[i.jsx("style",{children:Om}),t&&r&&i.jsx("div",{style:ut.backdrop,onClick:()=>e(!1)}),i.jsxs("aside",{style:a,children:[i.jsxs("div",{style:ut.sideHead,children:[i.jsx("div",{style:ut.brand,children:"Anvil · Spiritual"}),t&&i.jsx("button",{onClick:()=>e(!1),style:ut.iconBtn,children:i.jsx(ct,{size:17})})]}),i.jsx("div",{style:ut.sideScroll,children:oo.map(d=>{const g=d.id===n;return i.jsx("button",{onClick:()=>l(d.id),style:{...ut.sideItem,...g?ut.sideItemOn:{}},children:d.title},d.id)})})]}),i.jsxs("main",{style:ut.main,children:[t&&i.jsxs("button",{onClick:()=>e(!0),style:ut.hamburger,children:[i.jsx(_l,{size:17}),i.jsx("span",{style:ut.hamburgerLabel,children:s.title})]}),i.jsxs("div",{style:ut.contentWrap,children:[s.youtube&&i.jsx("div",{style:ut.videoFrame,children:i.jsx("iframe",{src:`https://www.youtube.com/embed/${s.youtube}`,title:s.title,style:ut.video,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},s.youtube)}),s.carousel?i.jsx(Pm,{base:s.imageBase,count:s.carousel}):i.jsx("div",{className:"spiritual-content",dangerouslySetInnerHTML:{__html:s.html}})]})]})]})}const Om=`
.spiritual-content { font-family: 'Inter', system-ui, sans-serif; color: #26241F; line-height: 1.9; font-size: 16px; text-align: center; }
.spiritual-content h1 { font-family: 'Fraunces', Georgia, serif; font-size: 24px; color: #8268B0; margin: 8px 0 18px; letter-spacing: -0.01em; }
.spiritual-content h2 { font-family: 'Fraunces', Georgia, serif; font-size: 18px; color: #7A5EA8; margin: 20px 0 8px; }
.spiritual-content h3 { font-size: 15px; color: #9A968C; text-transform: uppercase; letter-spacing: 0.06em; margin: 18px 0 6px; }
.spiritual-content b { color: #8268B0; }
.spiritual-content div { text-align: center; }
`,ut={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"#F7F6F3",minHeight:"100vh",color:"#26241F",position:"relative",overflow:"hidden"},sidebar:{width:240,flexShrink:0,background:"#fff",borderRight:"1px solid #ECEAE3",display:"flex",flexDirection:"column"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.15)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.35)",zIndex:20},sideHead:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 14px 12px"},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"#9A968C",fontWeight:700},sideScroll:{flex:1,overflowY:"auto",padding:"0 8px 16px"},sideItem:{display:"block",width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"#4A463E",textAlign:"left",marginBottom:2},sideItemOn:{background:"rgba(130,104,176,0.12)",color:"#8268B0",fontWeight:700},main:{flex:1,padding:"26px 22px",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid #E0DDD5",background:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"#4A463E",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:220},contentWrap:{background:"#fff",borderRadius:14,padding:"26px 28px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",maxWidth:760,margin:"0 auto"},videoFrame:{position:"relative",width:"100%",maxWidth:600,margin:"0 auto 22px",aspectRatio:"16 / 9",borderRadius:12,overflow:"hidden",background:"#000"},video:{position:"absolute",inset:0,width:"100%",height:"100%",border:"none"},carouselFrame:{background:"#FAFAF8",borderRadius:12,padding:8,border:"1px solid #ECEAE3"},carouselImg:{width:"100%",borderRadius:8,display:"block"},carouselNav:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:14},carouselBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid #E0DDD5",background:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"#4A463E",cursor:"pointer",fontFamily:"inherit"},carouselCount:{fontSize:13,fontWeight:700,color:"#8268B0",fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"none",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,color:"#6B675E"}},Er={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},$m=Object.keys(Er),Hm=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Um=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Vm=()=>new Date().toISOString().slice(0,10),Gm=(t,r)=>`${Um[r-1]} ${t}`,Qm=(t,r)=>{const e=new Date(t,r,0).getDate();return Array.from({length:e},(n,o)=>`${t}-${String(r).padStart(2,"0")}-${String(o+1).padStart(2,"0")}`)},Ym=(t,r)=>{const e=new Date(t,r-1,1).getDay();return e===0?6:e-1};function Km(){const t=Vm(),[r,e]=I.useState(new Date().getFullYear()),[n,o]=I.useState(new Date().getMonth()+1),[s,l]=I.useState([]),[a,d]=I.useState([]),[g,p]=I.useState({}),[f,v]=I.useState(null),[j,w]=I.useState(!1),[x,S]=I.useState(!1),[c,u]=I.useState({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:t}),b=I.useCallback(async()=>{const[m,T,y]=await Promise.all([Q.getTopics(),Q.getDueToday(),Q.getCalendar(r,n)]);l(m),d(T),p(y)},[r,n]);I.useEffect(()=>{b()},[b]);const h=async m=>{await Q.toggleReviewDone(m),b()},A=async()=>{const m=c.intervals.split(",").map(T=>parseInt(T.trim(),10)).filter(T=>!isNaN(T));!c.topic.trim()||m.length===0||(await Q.createTopic({pillar:c.pillar,topic:c.topic.trim(),intervals:m,learned_date:c.learned_date||t}),u({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:t}),S(!1),b())},{deleteItem:R,toasts:L,handleUndo:_,handleDismiss:z}=as(Q.deleteTopic,Q.restoreTopic,b),F=(m,T)=>R(m,T),k=()=>{n===1?(e(m=>m-1),o(12)):o(m=>m-1),v(null)},N=()=>{n===12?(e(m=>m+1),o(1)):o(m=>m+1),v(null)},H=s.filter(m=>!m.cemented),K=s.filter(m=>m.cemented),ot=Qm(r,n),gt=Ym(r,n),E=f?s.flatMap(m=>m.reviews.filter(T=>T.due_date===f).map(T=>({...T,topic:m.topic,pillar:m.pillar,total:m.reviews.length}))):[];return i.jsxs("div",{style:$.page,children:[i.jsxs("div",{style:$.head,children:[i.jsxs("div",{children:[i.jsx("div",{style:$.eyebrow,children:"Anvil · Revision"}),i.jsx("h1",{style:$.h1,children:"Spaced Repetition"})]}),i.jsxs("button",{onClick:()=>S(!0),style:$.addBtn,children:[i.jsx(Vr,{size:15})," Add topic"]})]}),x&&i.jsxs("div",{style:$.addBox,children:[i.jsx("input",{autoFocus:!0,placeholder:"What did you learn?",value:c.topic,onChange:m=>u(T=>({...T,topic:m.target.value})),onKeyDown:m=>m.key==="Enter"&&A(),style:$.input}),i.jsxs("div",{style:$.addRow,children:[i.jsx("select",{value:c.pillar,onChange:m=>u(T=>({...T,pillar:m.target.value})),style:$.select,children:$m.map(m=>i.jsx("option",{children:m},m))}),i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[i.jsx("label",{style:{fontSize:10,fontWeight:600,color:"#9A968C",textTransform:"uppercase"},children:"Learned on"}),i.jsx("input",{type:"date",value:c.learned_date,onChange:m=>u(T=>({...T,learned_date:m.target.value})),style:{...$.select,fontSize:13}})]}),i.jsx("div",{style:{flex:1,minWidth:0},children:i.jsx("input",{value:c.intervals,onChange:m=>u(T=>({...T,intervals:m.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:$.input})})]}),i.jsxs("div",{style:$.addRow,children:[i.jsxs("button",{onClick:A,style:$.saveBtn,children:[i.jsx(Ft,{size:14})," Save"]}),i.jsxs("button",{onClick:()=>S(!1),style:$.cancelBtn,children:[i.jsx(ct,{size:14})," Cancel"]})]})]}),a.length>0&&i.jsxs("div",{style:$.section,children:[i.jsxs("div",{style:$.sectionTitle,children:[i.jsx(ku,{size:15,color:"#C2536B"}),"Due Today",i.jsx("span",{style:$.badge,children:a.length})]}),a.map(m=>{var y,D;const T=((y=Er[m.pillar])==null?void 0:y.dot)||"#9A968C";return i.jsxs("div",{style:{...$.reviewCard,borderLeft:`3px solid ${T}`,...m.is_missed?{opacity:.85}:{}},children:[i.jsx("button",{onClick:()=>h(m.review_id),style:{...$.checkbox,...m.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:m.done&&i.jsx(Ft,{size:12,color:"#fff",strokeWidth:3})}),i.jsxs("div",{style:{flex:1,minWidth:0},children:[i.jsx("div",{style:$.reviewTopic,children:m.topic}),i.jsxs("div",{style:$.reviewMeta,children:[i.jsxs("span",{style:{...$.stageTag,background:((D=Er[m.pillar])==null?void 0:D.soft)||"rgba(0,0,0,0.05)",color:T},children:["Review ",m.stage,"/",m.total_stages]}),m.is_missed&&i.jsxs("span",{style:$.missedTag,children:["missed · ",m.due_date]})]})]})]},m.review_id)})]}),i.jsxs("div",{style:$.section,children:[i.jsxs("div",{style:$.sectionTitle,children:["Active Topics ",i.jsx("span",{style:$.badge,children:H.length})]}),H.length===0&&i.jsx("div",{style:$.empty,children:"No active topics. Add something you learned today."}),H.map(m=>{var W,tt;const T=((W=Er[m.pillar])==null?void 0:W.dot)||"#9A968C",y=((tt=Er[m.pillar])==null?void 0:tt.soft)||"rgba(0,0,0,0.05)",D=m.reviews.filter(Y=>Y.done).length;return i.jsxs("div",{style:$.topicCard,children:[i.jsxs("div",{style:$.topicHead,children:[i.jsx("span",{style:{...$.dot,background:T}}),i.jsx("span",{style:$.topicName,children:m.topic}),i.jsx("span",{style:$.topicPillar,children:m.pillar}),i.jsxs("span",{style:$.topicProgress,children:[D,"/",m.reviews.length," done"]}),i.jsx("button",{onClick:()=>F(m.id,m.topic),style:$.ghostBtn,children:i.jsx(ct,{size:13})})]}),i.jsxs("div",{style:$.reviewDots,children:[m.reviews.map(Y=>{Y.due_date<t;const ft=Y.due_date===t;return i.jsx("button",{onClick:()=>h(Y.id),title:`Review ${Y.stage} · ${Y.due_date}${Y.done?" · Done":""}`,style:{...$.reviewDot,background:Y.done?T:ft?y:"#F2F1EC",border:`2px solid ${Y.done||ft?T:"#E4E2DA"}`,color:Y.done?"#fff":T},children:Y.stage},Y.id)}),i.jsxs("span",{style:$.learnedDate,children:["Learned ",m.learned_date]})]})]},m.id)})]}),K.length>0&&i.jsxs("div",{style:$.section,children:[i.jsxs("button",{onClick:()=>w(m=>!m),style:$.cementedToggle,children:[j?i.jsx(Fl,{size:15}):i.jsx(ge,{size:15}),i.jsx(An,{size:14,color:"#C9A227"}),"Cemented",i.jsx("span",{style:{...$.badge,background:"rgba(201,162,39,0.12)",color:"#8A6E1A"},children:K.length})]}),j&&K.map(m=>{var y;const T=((y=Er[m.pillar])==null?void 0:y.dot)||"#9A968C";return i.jsx("div",{style:{...$.topicCard,opacity:.75},children:i.jsxs("div",{style:$.topicHead,children:[i.jsx("span",{style:{...$.dot,background:T}}),i.jsx("span",{style:$.topicName,children:m.topic}),i.jsx("span",{style:$.topicPillar,children:m.pillar}),i.jsx(An,{size:13,color:"#C9A227",style:{marginLeft:"auto"}})]})},m.id)})]}),i.jsxs("div",{style:$.calCard,children:[i.jsxs("div",{style:$.calHead,children:[i.jsx("button",{onClick:k,style:$.calNav,children:"‹"}),i.jsxs("div",{style:$.calTitle,children:[Gm(r,n)," · Review Calendar"]}),i.jsx("button",{onClick:N,style:$.calNav,children:"›"})]}),i.jsx("div",{style:$.calDow,children:Hm.map(m=>i.jsx("div",{style:$.calDowCell,children:m},m))}),i.jsxs("div",{style:$.calGrid,children:[Array.from({length:gt}).map((m,T)=>i.jsx("div",{},`p${T}`)),ot.map((m,T)=>{const y=g[m]||0,D=m===t,W=m===f,tt=m<t;return i.jsxs("button",{onClick:()=>v(W?null:m),style:{...$.calDay,background:W?"#26241F":D?"#F2F1EC":"#fff",color:W?"#fff":D?"#26241F":tt?"#6B675E":"#C3BFB5",borderColor:D||W?"#26241F":"#ECEAE3",fontWeight:D||W?700:500},children:[T+1,y>0&&i.jsx("span",{style:{...$.calBadge,background:W?"#fff":"#C2536B",color:W?"#26241F":"#fff"},children:y})]},m)})]}),f&&i.jsxs("div",{style:$.dayDetail,children:[i.jsxs("div",{style:$.dayDetailTitle,children:["Reviews for ",f]}),E.length===0?i.jsx("div",{style:$.empty,children:"No reviews scheduled for this day."}):E.map(m=>{var y,D;const T=((y=Er[m.pillar])==null?void 0:y.dot)||"#9A968C";return i.jsxs("div",{style:{...$.reviewCard,borderLeft:`3px solid ${T}`},children:[i.jsx("button",{onClick:()=>h(m.id),style:{...$.checkbox,...m.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:m.done&&i.jsx(Ft,{size:12,color:"#fff",strokeWidth:3})}),i.jsxs("div",{children:[i.jsx("div",{style:$.reviewTopic,children:m.topic}),i.jsxs("span",{style:{...$.stageTag,background:((D=Er[m.pillar])==null?void 0:D.soft)||"rgba(0,0,0,0.05)",color:T},children:["Review ",m.stage,"/",m.total]})]})]},m.id)})]})]}),i.jsx(ds,{toasts:L,onUndo:_,onDismiss:z})]})}const $={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"#F7F6F3",minHeight:"100%",padding:"26px 22px",color:"#26241F",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"#9A968C",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#26241F",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},addBox:{background:"#fff",borderRadius:12,padding:16,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},addRow:{display:"flex",gap:8,alignItems:"center"},input:{flex:1,border:"1px solid #E4E2DA",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",minWidth:0},select:{border:"1px solid #E4E2DA",borderRadius:8,padding:"9px 10px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid #E4E2DA",background:"#fff",color:"#6B675E",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},section:{marginBottom:20},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"#4A463E",marginBottom:10},badge:{fontSize:11,fontWeight:700,background:"#F2F1EC",color:"#6B675E",borderRadius:10,padding:"1px 7px"},reviewCard:{display:"flex",alignItems:"center",gap:12,background:"#fff",borderRadius:10,padding:"12px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},checkbox:{width:22,height:22,borderRadius:6,border:"2px solid #E0DDD5",background:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,padding:0},reviewTopic:{fontSize:13.5,fontWeight:600,marginBottom:4},reviewMeta:{display:"flex",alignItems:"center",gap:8},stageTag:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10},missedTag:{fontSize:11,color:"#C2536B",fontWeight:600},topicCard:{background:"#fff",borderRadius:12,padding:"13px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},topicHead:{display:"flex",alignItems:"center",gap:8,marginBottom:10},dot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},topicName:{fontSize:14,fontWeight:600,flex:1},topicPillar:{fontSize:11,color:"#9A968C",fontWeight:500},topicProgress:{fontSize:11,fontWeight:700,color:"#6B675E",background:"#F2F1EC",padding:"2px 7px",borderRadius:10},ghostBtn:{border:"none",background:"none",color:"#C3BFB5",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},reviewDots:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},reviewDot:{width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",fontSize:11,fontWeight:700,padding:0},learnedDate:{fontSize:11,color:"#9A968C",marginLeft:"auto"},cementedToggle:{display:"flex",alignItems:"center",gap:8,border:"none",background:"none",cursor:"pointer",fontSize:13,fontWeight:700,color:"#4A463E",padding:"4px 0",fontFamily:"inherit",marginBottom:8},empty:{fontSize:13,color:"#9A968C",padding:"16px 0",textAlign:"center"},calCard:{background:"#fff",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{border:"none",background:"none",fontSize:20,cursor:"pointer",color:"#6B675E",padding:"0 6px",lineHeight:1},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"#9A968C",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4},calDay:{aspectRatio:"1",border:"1.5px solid #ECEAE3",background:"#fff",borderRadius:8,fontSize:12,cursor:"pointer",fontFamily:"inherit",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:1,position:"relative",padding:2},calBadge:{fontSize:9,fontWeight:800,borderRadius:6,padding:"0 4px",lineHeight:"14px",minWidth:14,textAlign:"center"},dayDetail:{marginTop:16,paddingTop:16,borderTop:"1px solid #ECEAE3"},dayDetailTitle:{fontSize:13,fontWeight:700,color:"#4A463E",marginBottom:10}},so=[{id:1,title:"Regular Habits",cards:[{id:1,text:"1. I always do everything I need to do, when I need to do it. "},{id:2,text:"2. I never argue or let my emotions work against me. "},{id:3,text:"3. I have a good memory. I easily and automatically remember any name or anything that is important to me. "},{id:4,text:"4. I eat only what I should. "},{id:5,text:"5. I am a good listener. I hear everything that is said. I am attentive, interested, and aware of everything that is going on around me. "},{id:6,text:"6. I have the courage to state my opinions. I take responsibility for myself and everything I say and do."},{id:7,text:"7. I never spend more than I earn. I am financially responsible, both for my present and for my future."},{id:8,text:"8. I set goals and I follow them. I set my sights, take the appropriate action, and achieve my goals."},{id:9,text:"9. I spend time with my family and my loved ones. I enjoy sharing their lives with mine and my life with theirs."}]},{id:2,title:"Motivational",cards:[{id:1,text:"1. I can do anything I believe I can do. I’ve got it and every day I get more of it. I have talent, skills, and ability"},{id:2,text:"2. I set goals and I reach them. I know what I want out of life. I go after it and I get it. "},{id:3,text:"3. People like me, and I feel good about myself. I have a sense of pride in whoa am and I believe in myself. Nothing seems to stop me. I have a lot of determination. "},{id:4,text:"4. I turn problems into advantages. I find possibilities in things that other people never give a chance."},{id:5,text:"5. I have a lot of energy––I am very alive. I enjoy life and I can tell it and so can others"},{id:6,text:"6. I keep myself up, looking ahead, and liking it. I know that I can accomplish anything I choose, and I refuse to let anything negative hold me back or stand in my way. I am not afraid of anything or anyone. I have strength, power, conviction, and confidence. "},{id:7,text:"7. I like challenges and I meet them head on, face to face––today especially. I am on top of the world and I’m going for it. "},{id:8,text:"8. I have a clear picture in my mind of what I want. I can see it in front of me. "},{id:9,text:"9. I know what I want and I know how to get it. I know that it’s all up to me and I know I can do it. Roadblocks don’t bother me. They just mean that I am alive and running, and I’m not going to stand still for anything. "},{id:10,text:"10. I trust myself I’ve got what it takes––plenty of it––and I know how to use it. "},{id:11,text:"11. Today, more than ever. Today I am unstoppable. I’ve got myself together and I’m getting more together every day. And today––look out world, here I come. "},{id:12,text:"12. Limitations? I don’t even recognize them as limitations. There is no challenge I can’t conquer; there is no wall I can’t climb over. "},{id:13,text:"13. There is no problem I can’t defeat or turn around and make it work for me. I stand tall. I am honest and sincere. I like to deal with people and they like me. "},{id:14,text:"14. I think well; I think clearly. I am organized; I am in control of myself, and everything about me. I call my shots and no one has to call them for me. I never blame anyone else for the circumstances of my life. "},{id:15,text:"15. I accept my failings and move past them as easily as I accept the rewards for my victories. I never demand perfection of myself, but I expect the very best of what I have to give––and that’s what I get. I never give myself excuses. "},{id:16,text:"16. I get things done on time and in the right way. Today I have the inner strength to do more than ever. I am an exceptional human being. "},{id:17,text:"17. My goals and my incredible belief in myself turn my goals into reality. I have the power to live my dreams."},{id:18,text:"18.  I believe in them like I believe in myself. And that belief is so strong that there is nothing that diminishes my undefeatable spirit. "}]},{id:3,title:"Organized planning",cards:[{id:1,text:"1. I am organized and in control of my life. I am in control of myself, my thoughts, my time, my actions, and my future. "},{id:2,text:"2. I know what to do and when to do it, and I do everything I need to do, when I need to do it. "},{id:3,text:"3. I program my mind to make the maximum use of my time. I am in control of my time and how to use it. I like being organized, efficient, and on top of things."},{id:4,text:"4. Controlling my time keeps me that way. "},{id:5,text:"5. I never waste time––I always “plan” time. And because I plan my time, I always have time to do the things I choose to do. "},{id:6,text:"6. Each day I become more organized and in control of all areas of my life––at home, at work, in my mind and in my thoughts, in everything that I do. "},{id:7,text:"7. I am very well organized. Each night I make a list of things I need to do the next day. I set my priorities and I follow them. "},{id:8,text:"8. I am always on time. I am always right where I need to be, exactly when I need to be there. "},{id:9,text:"9. Being on time is easy for me and the more I control my time and the more organized I become, the easier it is. "},{id:10,text:"10. I am in control of my feelings, my emotions, my attitudes, and my needs. I control them; they do not control me. "},{id:11,text:"11. I have the winning vote in the outcome of my own actions. And I choose to live my life by choice, not chance. Therefore, I take the time to take control."},{id:12,text:"12. I have an organized and orderly mind. Because I think in an organized way, I conduct my life in an organized manner. "},{id:13,text:"13. I think in the most positive and productive way at all times and in all things. The way I think is the way I live––and I think “right.” "},{id:14,text:"14. I am the director of my destiny. I know where I am going and I know why I am going there. My earthly life is in my hands and in my control. "},{id:15,text:"15. I control my goals and the achievement of my goals. I organize my goals by writing each of them down, along with the steps I need to reach them. One of the reasons for my success is that my goals are clearly defined and organized."},{id:16,text:"16. I am in complete control of what I think and how I think. Therefore, I choose to think only those thoughts which help me and which are of genuine benefit to me."}]},{id:4,title:"Solving Problems",cards:[{id:1,text:"1. I’m good at solving problems. I like challenges and I meet them head on. "},{id:2,text:"2. Problems are my teachers. They help me to learn and grow. Without them, I would be going nowhere. With them, I am moving forward in the direction of my own goals. "},{id:3,text:"3. There is no problem which I cannot conquer. I am strong in mind, body, and spirit. My will, my strength, and my determination are always greater than any problem I face."},{id:4,text:"4. When I meet a new problem, I do not see the problem as my enemy. I know that finding the solution to the problem will move me forward in my own personal growth."},{id:5,text:"5. Because I know that problems are a key ingredient in my spiritual and mental education and preparation, I recognize that all problems are important to me. "},{id:6,text:"6. I do not fear problems, I solve them. I do not ignore problems, I confront them. I do not avoid problems, I conquer them. "},{id:7,text:"7. I know that every problem holds within itself the keys to its own solution. Therefore, the better I understand the problem, the clearer I am able to see its solution. "},{id:8,text:"8. Having problems is not a problem for me. I am confident, self-assured, positive, and determined. I always know that I am going to overcome any problem I encounter––and I always do. "},{id:9,text:"9. I am good at breaking large obstacles down into smaller pieces that are easier to handle. And I never make any problem appear to be larger than it actually is. "},{id:10,text:"10. I never worry. I turn “worry time” into positive, constructive, “solution time.” I keep my mind alert and open to all solutions—and solutions come quickly and easily to me. "},{id:11,text:"11. I have learned to recognize that many problems carry with them benefits and potential opportunities which would not have presented themselves had the problem not occurred in the first place. "},{id:12,text:"12. I do not seek to live a life which is free from all problems. Instead, I choose to live a life of finding solutions and enjoying the benefits which those solutions create."},{id:13,text:"13. Challenge, conquer, solution, and win are words which I live by daily. Challenges are opportunities. Conquering them is the inevitable outcome. "},{id:14,text:"14. “Solutions” are the stepping stones to my success, and “Winning” is my way of life."}]},{id:5,title:"Self Esteem",cards:[{id:1,text:"1. I really am very special. I like who I am and I feel good about myself. "},{id:2,text:"2. Although I always work to improve myself and I get better every day, I like who I am today. And tomorrow, when I’m even better, I’ll like myself then, too. "},{id:3,text:"3. It’s true that there really is no one else like me in the entire world. There never was another me before, and there will never be another me again. "},{id:4,text:"4. I am unique––from the top of my head to the bottom of my feet. In some ways I may look and act and sound like some others––but I am not them. I am me."},{id:5,text:"5. I wanted to be somebody––and now I know I am I would rather be me than anyone else in the world. "},{id:6,text:"6. I like how I feel and I like how I think and I like how I do things. I approve of me and I approve of who I am."},{id:7,text:"7. I have many beautiful qualities about me. I have talents and skills and abilities. I even have talents that I don’t even know about yet. And I am discovering new talents inside myself all the time. "},{id:8,text:"8. I am positive. I am confident. I radiate good things. If you look closely, you can even see a glow around me."},{id:9,text:"9. I am full of life. I like life and I’m glad to be alive. I am a very special person, living at a very special time. "},{id:10,text:"10. I am intelligent. My mind is quick and alert and clever and fun. I think good thoughts, and my mind makes things work right for me. "},{id:11,text:"11. I have a lot of energy and enthusiasm and vitality. I am exciting and I really enjoy being me. "},{id:12,text:"12. I like to be around other people and other people like to be around me. People like to hear what I have to say and know what I have to think. "},{id:13,text:"13. I smile a lot. I am happy on the inside and I am happy on the outside. "},{id:14,text:"14. I am interested in many things. I appreciate all the blessings I have, and the things that I learn, and all the things I will learn today and tomorrow and forever––just as long as I am. "},{id:15,text:"15. I am warm, sincere, honest, and genuine. I am all of these things and more. And all of these things are me. I like who I am, and I’m glad to be me."}]},{id:6,title:"Self-Responsibility",cards:[{id:1,text:"1. I take full responsibility for everything about me––even the thoughts that I think. I am in control of the vast resources of my own mind."},{id:2,text:"2. I alone am responsible for what I do and what I tell myself about me. No one can share this responsibility with me. "},{id:3,text:"3. I also allow others to accept their responsibilities far themselves and I do not try to accept their responsibilities for them. "},{id:4,text:"4. I enjoy being responsible. It puts me in charge of being me––and that’s a challenge I enjoy. "},{id:5,text:"5. I allow no one else, at any time, to assume control or responsibility over my life or over anything that I do. My responsibility to others is an extension of my own responsibility to myself. "},{id:6,text:"6. I choose to leave nothing about me up to chance. When it comes to me––and anything in my life––I choose to CHOOSE. "},{id:7,text:"7. My choices are mine alone to make for myself. I do not, at any time, allow anyone else to make my choices for me. And I accept full responsibility for every choice and decision I make. "},{id:8,text:"8. I always meet all of the obligations which I accept. And I accept no obligations which I will not meet. "},{id:9,text:"9. I am trustworthy. I can be counted on. I have accepted winning responsibility for myself––and I always live up to the responsibilities I accept. "},{id:10,text:"10. There is no they on whom I lay the blame, or with whom I share my own personal responsibilities. I have learned the great secret of mastering my own destiny. I have learned that “they” is “me.” "},{id:11,text:"11. I have no need to make excuses and no one needs to carry my responsibility for me. I gladly carry my own weight––and I carry it well. "},{id:12,text:"12. Each day I acknowledge and accept the responsibility––not only for my own actions––but also for my emotions, my thoughts, and my attitude. "},{id:13,text:"13. I accept the responsibility for living my life in a way which creates my strengths, my happiness, my positive, healthy beliefs, and for my past, my present, and my future."}]},{id:7,title:"Freedom from worry",cards:[{id:1,text:"1. I never worry. Instead of worrying, I find solutions and I act on them. "},{id:2,text:"2. My mind is constantly in tune with the positive. It is bright, cheerful, enthusiastic, and full of good, positive thoughts and ideas. "},{id:3,text:"3. I am able to relax easily and comfortably in my body and in my mind. I am calm, confident, and self-assured. "},{id:4,text:"4. My mind is orderly and well-organized. I consciously choose what I think and I always choose those thoughts which are the most positive and beneficial for me. "},{id:5,text:"5. All of my thoughts create healthiness within me. My mind dwells only on those thoughts which create more harmony, balance, and well-being within me and in the world around me. "},{id:6,text:"6. I automatically, and always, think in a decisive and determined way. "},{id:7,text:"7. I am full of resolution and the absolute assurance of the best possible outcome in everything that I do. "},{id:8,text:"8. I choose to look at the world around me in the bright, healthy light of optimism and self-assurance. "},{id:9,text:"9. I do only those things which are best for me. I create the best within myself, I attract the best in others, and I find the best in the world around me. "},{id:10,text:"10. I willingly, and without fail, take care of the duties and obligations which I have accepted for myself."},{id:11,text:"11. I commit only to those responsibilities which I know I can fulfill. "},{id:12,text:"12. I focus the attention of my mind only on those things that I can do something about. If I cannot affect it or direct it––I accept it. "},{id:13,text:"13. I keep my mind too busy thinking good, healthy, positive, constructive, and productive thoughts to ever have any time for worry. "},{id:14,text:"14. I control the thoughts I choose. No thought, at any time, can dwell in my mind without my approval or permission. I never worry."}]},{id:8,title:"Eating Habits",cards:[{id:1,text:"1. I am in control of myself in every way––at all times and in all situations. "},{id:2,text:"2. Each time I sit down to eat I reaffirm my determination to achieve my goal. By eating right, and never giving in, I am reaching the weight I want. "},{id:3,text:"3. Whether eating in or eating out, I really enjoy eating less. "},{id:4,text:"4. I never feel the need to finish the food in front of me. I eat only what I should––and never one bite more. "},{id:5,text:"5. One way to weight-loss that’s easy and works, is less food on my plate, and less on my fork. "},{id:6,text:'6. By ordering less when I eat out, and by serving myself smaller portions at home, I keep myself aware of the importance of staying with my goal––each and every day. “Less on my plate means less on my waist."'},{id:7,text:"7. When I sit down to eat, at no time do I allow anyone else to influence, tempt, or discourage me in any negative way."},{id:8,text:"8. What I eat, and the goals I reach, are up to me. And I give no one the right to hinder or control my success."},{id:9,text:"9. Although others may benefit from my success, I. am achieving my weight-loss goals for my own personal reasons––for myself, my life, my future, and my own personal well-being."},{id:10,text:"10. I am never, at any time, tempted to take one bite more than I should. I am strong, I am capable of reaching my goal, and I am doing it."},{id:11,text:"11. Being in situations which put a lot of food in front of me is not a problem to me now. I simply say “No” to the food and “Yes” to my success."},{id:12,text:"12. I enjoy sitting down to eat. Each time I do I conquer my past, and I create a trimmer, happier, more self-confident future in front of me. "},{id:13,text:"13. When I sit down to eat, I do not need someone else to remind me of my goal, or to keep me from eating something I should not. I take full responsibility for myself, and no one else has to do it for me. "},{id:14,text:"14. Controlling my weight, and my appetite, is easy for me now. I enjoy smaller portions, smaller bites, and a slower, healthier, more relaxed way of eating. "},{id:15,text:"15. I have set my goal and I am staying with it. I have turned mealtime into “achievement time.”"}]}],ed=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#3A7CA5","#4C9A6B"],$s=t=>ed[t%ed.length],Xm=t=>t+"1A",Iu="anvil_affirmation_favs",Jm=()=>{try{return new Set(JSON.parse(localStorage.getItem(Iu)||"[]"))}catch{return new Set}};function Zm(){const[t,r]=I.useState(0),[e,n]=I.useState(0),[o,s]=I.useState(Jm);I.useEffect(()=>{localStorage.setItem(Iu,JSON.stringify([...o]))},[o]);const l=(S,c)=>`${S}#${c.id}`,a=t==="FAV"?so.flatMap((S,c)=>S.cards.filter(u=>o.has(l(S.title,u))).map(u=>({...u,color:$s(c),title:S.title}))):so[t].cards.map(S=>({...S,color:$s(t),title:so[t].title})),d=a.length,g=Math.min(e,Math.max(0,d-1)),p=a[g],f=S=>{r(S),n(0)},v=I.useCallback(()=>n(S=>Math.max(0,S-1)),[]),j=I.useCallback(()=>n(S=>Math.min(d-1,S+1)),[d]);I.useEffect(()=>{const S=c=>{c.key==="ArrowLeft"&&v(),c.key==="ArrowRight"&&j()};return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[v,j]);const w=S=>s(c=>{const u=new Set(c);return u.has(S)?u.delete(S):u.add(S),u}),x=p?p.color:"#8268B0";return i.jsxs("div",{style:st.page,children:[i.jsxs("div",{style:st.head,children:[i.jsx("div",{style:st.eyebrow,children:"Anvil · Affirmations"}),i.jsx("h1",{style:st.h1,children:"Affirmations"}),i.jsx("div",{style:st.subhead,children:"One at a time — read it, mean it."})]}),i.jsxs("div",{style:st.filterBar,children:[so.map((S,c)=>{const u=t===c,b=$s(c);return i.jsxs("button",{onClick:()=>f(c),style:{...st.chip,...u?{background:b,color:"#fff",borderColor:b}:{}},children:[i.jsx("span",{style:{...st.catDot,background:u?"#fff":b}})," ",S.title," ",i.jsx("span",{style:st.chipCount,children:S.cards.length})]},S.title)}),i.jsxs("button",{onClick:()=>f("FAV"),style:{...st.chip,...t==="FAV"?{background:"#C9A227",color:"#fff",borderColor:"#C9A227"}:{}},children:[i.jsx(ho,{size:12,fill:t==="FAV"?"#fff":"none"})," Favorites ",i.jsx("span",{style:st.chipCount,children:o.size})]})]}),d===0?i.jsxs("div",{style:st.empty,children:[i.jsx(ho,{size:22,color:"#C3BFB5"}),i.jsx("div",{children:"No favorites yet — tap the star on a card to save it here."})]}):i.jsxs("div",{style:st.viewer,children:[i.jsxs("div",{style:{...st.card,borderTop:`4px solid ${x}`},children:[i.jsx("div",{style:{...st.cardCat,color:x,background:Xm(x)},children:p.title}),i.jsx("button",{onClick:()=>w(l(p.title,p)),style:{...st.favBtn,color:o.has(l(p.title,p))?"#C9A227":"#C3BFB5"},title:"Favorite",children:i.jsx(ho,{size:20,fill:o.has(l(p.title,p))?"#C9A227":"none"})}),i.jsx(im,{size:30,color:x,style:{opacity:.25}}),i.jsx("p",{style:st.cardText,children:p.text.trim()})]}),i.jsxs("div",{style:st.navRow,children:[i.jsxs("button",{onClick:v,disabled:g===0,style:{...st.navBtn,...g===0?st.navBtnDisabled:{}},children:[i.jsx(Ln,{size:18})," Back"]}),i.jsxs("span",{style:{...st.counter,color:x},children:[g+1," ",i.jsxs("span",{style:st.counterTotal,children:["/ ",d]})]}),i.jsxs("button",{onClick:j,disabled:g===d-1,style:{...st.navBtn,...g===d-1?st.navBtnDisabled:{}},children:["Next ",i.jsx(ge,{size:18})]})]}),i.jsx("div",{style:st.dots,children:a.map((S,c)=>i.jsx("button",{onClick:()=>n(c),style:{...st.dot,...c===g?{background:x,transform:"scale(1.5)"}:{}},title:`${c+1}`},c))})]})]})}const st={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"#F7F6F3",minHeight:"100%",padding:"28px 24px",color:"#26241F",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"#9A968C",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"#9A968C",marginTop:4},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:22},chip:{display:"flex",alignItems:"center",gap:6,border:"1px solid #E0DDD5",background:"#fff",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:600,color:"#4A463E",cursor:"pointer",fontFamily:"inherit"},chipCount:{fontSize:11,fontWeight:700,opacity:.7},catDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},empty:{display:"flex",flexDirection:"column",alignItems:"center",gap:10,fontSize:13.5,color:"#9A968C",padding:"56px 12px",textAlign:"center",background:"#fff",borderRadius:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},viewer:{display:"flex",flexDirection:"column",alignItems:"center"},card:{position:"relative",background:"#fff",borderRadius:16,padding:"40px 32px 44px",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",width:"100%",minHeight:240,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",boxSizing:"border-box"},cardCat:{position:"absolute",top:16,left:16,fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:12,textTransform:"uppercase",letterSpacing:"0.04em"},favBtn:{position:"absolute",top:14,right:14,border:"none",background:"none",cursor:"pointer",padding:4,display:"grid",placeItems:"center"},cardText:{fontSize:21,lineHeight:1.55,margin:"14px 0 0",fontWeight:500,color:"#26241F",fontFamily:"'Fraunces',Georgia,serif",maxWidth:560},navRow:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",maxWidth:420,marginTop:22},navBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid #E0DDD5",background:"#fff",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:600,color:"#4A463E",cursor:"pointer",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},counter:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},counterTotal:{fontSize:13,fontWeight:600,color:"#9A968C"},dots:{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center",marginTop:20,maxWidth:480},dot:{width:7,height:7,borderRadius:"50%",border:"none",background:"#D9D6CE",cursor:"pointer",padding:0,transition:"transform 0.12s"}};function qm({onAuthed:t}){const[r,e]=I.useState("login"),[n,o]=I.useState(""),[s,l]=I.useState(""),[a,d]=I.useState(""),[g,p]=I.useState(""),[f,v]=I.useState(!1),j=r==="register",w=async x=>{if(x.preventDefault(),p(""),!s.trim()||!a){p("Email and password are required.");return}if(j&&a.length<6){p("Password must be at least 6 characters.");return}v(!0);try{const S=j?await Q.register({name:n,email:s,password:a}):await Q.login({email:s,password:a});um(S.token),t(S.user)}catch(S){p(S.message||"Something went wrong.")}finally{v(!1)}};return i.jsx("div",{style:ht.page,children:i.jsxs("form",{style:ht.card,onSubmit:w,children:[i.jsxs("div",{style:ht.brand,children:[i.jsx("div",{style:ht.logo,children:"B"}),i.jsx("span",{style:ht.brandName,children:"Anvil"})]}),i.jsx("h1",{style:ht.title,children:j?"Create your account":"Welcome back"}),i.jsx("p",{style:ht.sub,children:j?"Start forging your days.":"Sign in to continue."}),j&&i.jsxs("label",{style:ht.field,children:[i.jsx("span",{style:ht.label,children:"Name"}),i.jsx("input",{value:n,onChange:x=>o(x.target.value),placeholder:"Your name",style:ht.input,autoFocus:!0})]}),i.jsxs("label",{style:ht.field,children:[i.jsx("span",{style:ht.label,children:"Email"}),i.jsx("input",{type:"email",value:s,onChange:x=>l(x.target.value),placeholder:"you@example.com",style:ht.input,autoFocus:!j})]}),i.jsxs("label",{style:ht.field,children:[i.jsx("span",{style:ht.label,children:"Password"}),i.jsx("input",{type:"password",value:a,onChange:x=>d(x.target.value),placeholder:"••••••••",style:ht.input})]}),g&&i.jsx("div",{style:ht.error,children:g}),i.jsx("button",{type:"submit",disabled:f,style:{...ht.submit,...f?{opacity:.6}:{}},children:f?"Please wait…":j?"Create account":"Sign in"}),i.jsxs("div",{style:ht.switch,children:[j?"Already have an account?":"New here?"," ",i.jsx("button",{type:"button",onClick:()=>{e(j?"login":"register"),p("")},style:ht.link,children:j?"Sign in":"Create one"})]})]})})}const ht={page:{minHeight:"100vh",display:"grid",placeItems:"center",background:"#F7F6F3",fontFamily:"'Inter',system-ui,sans-serif",padding:20},card:{width:"100%",maxWidth:380,background:"#fff",borderRadius:16,padding:"32px 28px",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",display:"flex",flexDirection:"column"},brand:{display:"flex",alignItems:"center",gap:9,marginBottom:20},logo:{width:32,height:32,borderRadius:8,background:"#26241F",color:"#fff",display:"grid",placeItems:"center",fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},brandName:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",color:"#26241F"},title:{fontSize:22,fontWeight:700,margin:"0 0 4px",fontFamily:"'Fraunces',Georgia,serif",color:"#26241F"},sub:{fontSize:13.5,color:"#9A968C",margin:"0 0 22px"},field:{display:"flex",flexDirection:"column",gap:5,marginBottom:14},label:{fontSize:12,fontWeight:600,color:"#6B675E"},input:{border:"1px solid #E0DDD5",borderRadius:9,padding:"11px 12px",fontSize:14,fontFamily:"inherit",outline:"none",color:"#26241F"},error:{background:"rgba(194,83,107,0.10)",color:"#C2536B",fontSize:13,padding:"9px 12px",borderRadius:8,marginBottom:14,fontWeight:500},submit:{border:"none",background:"#26241F",color:"#fff",padding:"12px",borderRadius:10,fontSize:14.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},switch:{fontSize:13,color:"#6B675E",textAlign:"center",marginTop:18},link:{border:"none",background:"none",color:"#3A7CA5",fontWeight:700,cursor:"pointer",fontFamily:"inherit",fontSize:13,padding:0}},Hs={habits:{label:"Habits",icon:lm,component:Im},quadrant:{label:"Quadrant",icon:xu,component:ym},goals:{label:"Goals",icon:Rl,component:xm},journal:{label:"Journal",icon:yu,component:Lm},revision:{label:"Revision",icon:ku,component:Km},affirmations:{label:"Affirmations",icon:Su,component:Zm},skills:{label:"Skills",icon:nm,component:Nm},spiritual:{label:"Spiritual",icon:ho,component:Wm}},tp=[{type:"item",id:"habits"},{type:"item",id:"quadrant"},{type:"item",id:"goals"},{type:"item",id:"journal"},{type:"item",id:"revision"},{type:"item",id:"affirmations"},{type:"item",id:"skills"},{type:"item",id:"spiritual"}];function rp(){const[t,r]=I.useState(()=>window.innerWidth<720);return I.useEffect(()=>{const e=()=>r(window.innerWidth<720);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),t}function ep(){const[t,r]=I.useState("habits"),[e,n]=I.useState(!1),[o,s]=I.useState({spiritual:!0}),[l,a]=I.useState(null),[d,g]=I.useState(!1),p=rp();I.useEffect(()=>{let u=!1;const b=()=>{Li(),a(null)};return window.addEventListener("anvil-unauthorized",b),Nl()?Q.me().then(h=>{u||a(h)}).catch(()=>{}).finally(()=>{u||g(!0)}):g(!0),()=>{u=!0,window.removeEventListener("anvil-unauthorized",b)}},[]);function f(u){r(u),n(!1)}const v=u=>s(b=>({...b,[u]:!b[u]})),j=()=>{Li(),a(null)};if(!d)return i.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:"'Inter',system-ui,sans-serif",color:"#9A968C"},children:"Loading…"});if(!l)return i.jsx(qm,{onAuthed:a});const w=Hs[t],x=w.component,S=()=>i.jsx("div",{style:Z.navItems,children:tp.map(u=>{if(u.type==="group"){const R=o[u.id],L=u.icon,_=u.children.includes(t);return i.jsxs("div",{children:[i.jsxs("button",{onClick:()=>v(u.id),style:{...Z.navItem,..._&&!R?Z.navItemOn:{}},children:[i.jsx(L,{size:18}),i.jsx("span",{style:Z.navLabel,children:u.label}),R?i.jsx(Fl,{size:15}):i.jsx(ge,{size:15})]}),R&&u.children.map(z=>{const F=Hs[z],k=F.icon,N=t===z;return i.jsxs("button",{onClick:()=>f(z),title:F.label,style:{...Z.navItem,...Z.navChild,...N?Z.navItemOn:{}},children:[i.jsx(k,{size:16}),i.jsx("span",{style:Z.navLabel,children:F.label})]},z)})]},u.id)}const b=Hs[u.id],h=b.icon,A=t===u.id;return i.jsxs("button",{onClick:()=>f(u.id),title:b.label,style:{...Z.navItem,...A?Z.navItemOn:{}},children:[i.jsx(h,{size:18}),i.jsx("span",{style:Z.navLabel,children:b.label})]},u.id)})}),c=()=>i.jsxs("div",{style:Z.userFooter,children:[i.jsxs("div",{style:Z.userInfo,children:[i.jsx("div",{style:Z.userAvatar,children:(l.name||l.email||"?").charAt(0).toUpperCase()}),i.jsxs("div",{style:{minWidth:0},children:[i.jsx("div",{style:Z.userName,children:l.name||"You"}),i.jsx("div",{style:Z.userEmail,children:l.email})]})]}),i.jsx("button",{onClick:j,style:Z.logoutBtn,title:"Sign out",children:i.jsx(sm,{size:16})})]});return i.jsxs("div",{style:Z.shell,children:[!p&&i.jsxs("nav",{style:Z.nav,children:[i.jsxs("div",{style:Z.brand,children:[i.jsx("div",{style:Z.brandLogo,children:"B"}),i.jsx("span",{style:Z.brandName,children:"Anvil"})]}),i.jsx(S,{}),i.jsx(c,{})]}),p&&e&&i.jsx("div",{style:Z.overlay,onClick:()=>n(!1),children:i.jsxs("nav",{style:Z.drawer,onClick:u=>u.stopPropagation(),children:[i.jsxs("div",{style:Z.drawerHeader,children:[i.jsxs("div",{style:Z.brand,children:[i.jsx("div",{style:Z.brandLogo,children:"B"}),i.jsx("span",{style:Z.brandName,children:"Anvil"})]}),i.jsx("button",{style:Z.closeBtn,onClick:()=>n(!1),children:i.jsx(ct,{size:20})})]}),i.jsx(S,{}),i.jsx(c,{})]})}),i.jsxs("div",{style:Z.content,children:[p&&i.jsxs("div",{style:Z.topBar,children:[i.jsx("button",{style:Z.menuBtn,onClick:()=>n(!0),children:i.jsx(_l,{size:22})}),i.jsx("span",{style:Z.topBarTitle,children:w.label}),i.jsx("div",{style:{width:38}})]}),i.jsx("main",{style:Z.main,children:i.jsx(x,{})})]})]})}const Z={shell:{display:"flex",height:"100vh",overflow:"hidden",fontFamily:"'Inter', system-ui, sans-serif",background:"#F7F6F3"},nav:{width:200,flexShrink:0,background:"#fff",borderRight:"1px solid #ECEAE3",display:"flex",flexDirection:"column",padding:"20px 10px",gap:2},brand:{display:"flex",alignItems:"center",gap:9,padding:"6px 10px 20px",borderBottom:"1px solid #ECEAE3",marginBottom:8},brandLogo:{width:30,height:30,borderRadius:8,background:"#26241F",color:"#fff",display:"grid",placeItems:"center",fontSize:14,fontWeight:800,fontFamily:"'Fraunces', Georgia, serif",flexShrink:0},brandName:{fontSize:16,fontWeight:700,letterSpacing:"-0.01em",color:"#26241F",fontFamily:"'Fraunces', Georgia, serif"},navItems:{display:"flex",flexDirection:"column",gap:2},navItem:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"#6B675E",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},navItemOn:{background:"#F2F1EC",color:"#26241F",fontWeight:700},navChild:{paddingLeft:30,fontSize:13},userFooter:{marginTop:"auto",paddingTop:12,borderTop:"1px solid #ECEAE3",display:"flex",alignItems:"center",gap:8},userInfo:{display:"flex",alignItems:"center",gap:8,flex:1,minWidth:0},userAvatar:{width:30,height:30,borderRadius:"50%",background:"#8268B0",color:"#fff",display:"grid",placeItems:"center",fontSize:13,fontWeight:700,flexShrink:0},userName:{fontSize:13,fontWeight:600,color:"#26241F",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},userEmail:{fontSize:11,color:"#9A968C",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logoutBtn:{border:"1px solid #E0DDD5",background:"#fff",color:"#6B675E",cursor:"pointer",padding:7,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},navLabel:{flex:1},content:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},main:{flex:1,overflowY:"auto",overflowX:"hidden"},topBar:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"#fff",borderBottom:"1px solid #ECEAE3",flexShrink:0},topBarTitle:{fontSize:16,fontWeight:700,color:"#26241F",fontFamily:"'Fraunces', Georgia, serif"},menuBtn:{border:"none",background:"none",cursor:"pointer",color:"#26241F",padding:8,borderRadius:8,display:"grid",placeItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:100,display:"flex"},drawer:{width:220,background:"#fff",height:"100%",display:"flex",flexDirection:"column",padding:"16px 10px",gap:2,boxShadow:"4px 0 24px rgba(0,0,0,0.12)"},drawerHeader:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:4},closeBtn:{border:"none",background:"none",cursor:"pointer",color:"#6B675E",padding:6,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0}};pu(document.getElementById("root")).render(i.jsx(I.StrictMode,{children:i.jsx(ep,{})}));
