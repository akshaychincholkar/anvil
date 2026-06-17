(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();var xc={exports:{}},ri={},kc={exports:{}},kt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fo=Symbol.for("react.element"),dp=Symbol.for("react.portal"),gp=Symbol.for("react.fragment"),cp=Symbol.for("react.strict_mode"),up=Symbol.for("react.profiler"),bp=Symbol.for("react.provider"),pp=Symbol.for("react.context"),mp=Symbol.for("react.forward_ref"),fp=Symbol.for("react.suspense"),hp=Symbol.for("react.memo"),vp=Symbol.for("react.lazy"),Ed=Symbol.iterator;function yp(t){return t===null||typeof t!="object"?null:(t=Ed&&t[Ed]||t["@@iterator"],typeof t=="function"?t:null)}var wc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jc=Object.assign,Sc={};function Bn(t,e,r){this.props=t,this.context=e,this.refs=Sc,this.updater=r||wc}Bn.prototype.isReactComponent={};Bn.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Bn.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Cc(){}Cc.prototype=Bn.prototype;function ma(t,e,r){this.props=t,this.context=e,this.refs=Sc,this.updater=r||wc}var fa=ma.prototype=new Cc;fa.constructor=ma;jc(fa,Bn.prototype);fa.isPureReactComponent=!0;var Bd=Array.isArray,Ic=Object.prototype.hasOwnProperty,ha={current:null},zc={key:!0,ref:!0,__self:!0,__source:!0};function Tc(t,e,r){var o,s={},i=null,l=null;if(e!=null)for(o in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(i=""+e.key),e)Ic.call(e,o)&&!zc.hasOwnProperty(o)&&(s[o]=e[o]);var a=arguments.length-2;if(a===1)s.children=r;else if(1<a){for(var d=Array(a),g=0;g<a;g++)d[g]=arguments[g+2];s.children=d}if(t&&t.defaultProps)for(o in a=t.defaultProps,a)s[o]===void 0&&(s[o]=a[o]);return{$$typeof:Fo,type:t,key:i,ref:l,props:s,_owner:ha.current}}function xp(t,e){return{$$typeof:Fo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function va(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fo}function kp(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var Dd=/\/+/g;function ki(t,e){return typeof t=="object"&&t!==null&&t.key!=null?kp(""+t.key):e.toString(36)}function fs(t,e,r,o,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case Fo:case dp:l=!0}}if(l)return l=t,s=s(l),t=o===""?"."+ki(l,0):o,Bd(s)?(r="",t!=null&&(r=t.replace(Dd,"$&/")+"/"),fs(s,e,r,"",function(g){return g})):s!=null&&(va(s)&&(s=xp(s,r+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(Dd,"$&/")+"/")+t)),e.push(s)),1;if(l=0,o=o===""?".":o+":",Bd(t))for(var a=0;a<t.length;a++){i=t[a];var d=o+ki(i,a);l+=fs(i,e,r,d,s)}else if(d=yp(t),typeof d=="function")for(t=d.call(t),a=0;!(i=t.next()).done;)i=i.value,d=o+ki(i,a++),l+=fs(i,e,r,d,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function $o(t,e,r){if(t==null)return t;var o=[],s=0;return fs(t,o,"","",function(i){return e.call(r,i,s++)}),o}function wp(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var se={current:null},hs={transition:null},jp={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:hs,ReactCurrentOwner:ha};function Ec(){throw Error("act(...) is not supported in production builds of React.")}kt.Children={map:$o,forEach:function(t,e,r){$o(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return $o(t,function(){e++}),e},toArray:function(t){return $o(t,function(e){return e})||[]},only:function(t){if(!va(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};kt.Component=Bn;kt.Fragment=gp;kt.Profiler=up;kt.PureComponent=ma;kt.StrictMode=cp;kt.Suspense=fp;kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jp;kt.act=Ec;kt.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=jc({},t.props),s=t.key,i=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,l=ha.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(d in e)Ic.call(e,d)&&!zc.hasOwnProperty(d)&&(o[d]=e[d]===void 0&&a!==void 0?a[d]:e[d])}var d=arguments.length-2;if(d===1)o.children=r;else if(1<d){a=Array(d);for(var g=0;g<d;g++)a[g]=arguments[g+2];o.children=a}return{$$typeof:Fo,type:t.type,key:s,ref:i,props:o,_owner:l}};kt.createContext=function(t){return t={$$typeof:pp,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bp,_context:t},t.Consumer=t};kt.createElement=Tc;kt.createFactory=function(t){var e=Tc.bind(null,t);return e.type=t,e};kt.createRef=function(){return{current:null}};kt.forwardRef=function(t){return{$$typeof:mp,render:t}};kt.isValidElement=va;kt.lazy=function(t){return{$$typeof:vp,_payload:{_status:-1,_result:t},_init:wp}};kt.memo=function(t,e){return{$$typeof:hp,type:t,compare:e===void 0?null:e}};kt.startTransition=function(t){var e=hs.transition;hs.transition={};try{t()}finally{hs.transition=e}};kt.unstable_act=Ec;kt.useCallback=function(t,e){return se.current.useCallback(t,e)};kt.useContext=function(t){return se.current.useContext(t)};kt.useDebugValue=function(){};kt.useDeferredValue=function(t){return se.current.useDeferredValue(t)};kt.useEffect=function(t,e){return se.current.useEffect(t,e)};kt.useId=function(){return se.current.useId()};kt.useImperativeHandle=function(t,e,r){return se.current.useImperativeHandle(t,e,r)};kt.useInsertionEffect=function(t,e){return se.current.useInsertionEffect(t,e)};kt.useLayoutEffect=function(t,e){return se.current.useLayoutEffect(t,e)};kt.useMemo=function(t,e){return se.current.useMemo(t,e)};kt.useReducer=function(t,e,r){return se.current.useReducer(t,e,r)};kt.useRef=function(t){return se.current.useRef(t)};kt.useState=function(t){return se.current.useState(t)};kt.useSyncExternalStore=function(t,e,r){return se.current.useSyncExternalStore(t,e,r)};kt.useTransition=function(){return se.current.useTransition()};kt.version="18.3.1";kc.exports=kt;var p=kc.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp=p,Cp=Symbol.for("react.element"),Ip=Symbol.for("react.fragment"),zp=Object.prototype.hasOwnProperty,Tp=Sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ep={key:!0,ref:!0,__self:!0,__source:!0};function Bc(t,e,r){var o,s={},i=null,l=null;r!==void 0&&(i=""+r),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(l=e.ref);for(o in e)zp.call(e,o)&&!Ep.hasOwnProperty(o)&&(s[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps,e)s[o]===void 0&&(s[o]=e[o]);return{$$typeof:Cp,type:t,key:i,ref:l,props:s,_owner:Tp.current}}ri.Fragment=Ip;ri.jsx=Bc;ri.jsxs=Bc;xc.exports=ri;var n=xc.exports,Dc={exports:{}},ye={},Rc={exports:{}},Fc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,F){var O=R.length;R.push(F);t:for(;0<O;){var w=O-1>>>1,V=R[w];if(0<s(V,F))R[w]=F,R[O]=V,O=w;else break t}}function r(R){return R.length===0?null:R[0]}function o(R){if(R.length===0)return null;var F=R[0],O=R.pop();if(O!==F){R[0]=O;t:for(var w=0,V=R.length,h=V>>>1;w<h;){var P=2*(w+1)-1,at=R[P],dt=P+1,wt=R[dt];if(0>s(at,O))dt<V&&0>s(wt,at)?(R[w]=wt,R[dt]=O,w=dt):(R[w]=at,R[P]=O,w=P);else if(dt<V&&0>s(wt,O))R[w]=wt,R[dt]=O,w=dt;else break t}}return F}function s(R,F){var O=R.sortIndex-F.sortIndex;return O!==0?O:R.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();t.unstable_now=function(){return l.now()-a}}var d=[],g=[],m=1,v=null,f=3,j=!1,k=!1,S=!1,T=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function u(R){for(var F=r(g);F!==null;){if(F.callback===null)o(g);else if(F.startTime<=R)o(g),F.sortIndex=F.expirationTime,e(d,F);else break;F=r(g)}}function x(R){if(S=!1,u(R),!k)if(r(d)!==null)k=!0,q(y);else{var F=r(g);F!==null&&B(x,F.startTime-R)}}function y(R,F){k=!1,S&&(S=!1,b(D),D=-1),j=!0;var O=f;try{for(u(F),v=r(d);v!==null&&(!(v.expirationTime>F)||R&&!et());){var w=v.callback;if(typeof w=="function"){v.callback=null,f=v.priorityLevel;var V=w(v.expirationTime<=F);F=t.unstable_now(),typeof V=="function"?v.callback=V:v===r(d)&&o(d),u(F)}else o(d);v=r(d)}if(v!==null)var h=!0;else{var P=r(g);P!==null&&B(x,P.startTime-F),h=!1}return h}finally{v=null,f=O,j=!1}}var A=!1,_=null,D=-1,E=5,M=-1;function et(){return!(t.unstable_now()-M<E)}function L(){if(_!==null){var R=t.unstable_now();M=R;var F=!0;try{F=_(!0,R)}finally{F?C():(A=!1,_=null)}}else A=!1}var C;if(typeof c=="function")C=function(){c(L)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,ut=U.port2;U.port1.onmessage=L,C=function(){ut.postMessage(null)}}else C=function(){T(L,0)};function q(R){_=R,A||(A=!0,C())}function B(R,F){D=T(function(){R(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){k||j||(k=!0,q(y))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(d)},t.unstable_next=function(R){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var O=f;f=F;try{return R()}finally{f=O}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,F){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var O=f;f=R;try{return F()}finally{f=O}},t.unstable_scheduleCallback=function(R,F,O){var w=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?w+O:w):O=w,R){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=O+V,R={id:m++,callback:F,priorityLevel:R,startTime:O,expirationTime:V,sortIndex:-1},O>w?(R.sortIndex=O,e(g,R),r(d)===null&&R===r(g)&&(S?(b(D),D=-1):S=!0,B(x,O-w))):(R.sortIndex=V,e(d,R),k||j||(k=!0,q(y))),R},t.unstable_shouldYield=et,t.unstable_wrapCallback=function(R){var F=f;return function(){var O=f;f=F;try{return R.apply(this,arguments)}finally{f=O}}}})(Fc);Rc.exports=Fc;var Bp=Rc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp=p,he=Bp;function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ac=new Set,po={};function Qr(t,e){jn(t,e),jn(t+"Capture",e)}function jn(t,e){for(po[t]=e,t=0;t<e.length;t++)Ac.add(e[t])}var er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),al=Object.prototype.hasOwnProperty,Rp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rd={},Fd={};function Fp(t){return al.call(Fd,t)?!0:al.call(Rd,t)?!1:Rp.test(t)?Fd[t]=!0:(Rd[t]=!0,!1)}function Ap(t,e,r,o){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Wp(t,e,r,o){if(e===null||typeof e>"u"||Ap(t,e,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ie(t,e,r,o,s,i,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=l}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new ie(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new ie(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new ie(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new ie(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new ie(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new ie(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new ie(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new ie(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new ie(t,5,!1,t.toLowerCase(),null,!1,!1)});var ya=/[\-:]([a-z])/g;function xa(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ya,xa);Xt[e]=new ie(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ya,xa);Xt[e]=new ie(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ya,xa);Xt[e]=new ie(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new ie(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new ie(t,1,!1,t.toLowerCase(),null,!0,!0)});function ka(t,e,r,o){var s=Xt.hasOwnProperty(e)?Xt[e]:null;(s!==null?s.type!==0:o||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Wp(e,r,s,o)&&(r=null),o||s===null?Fp(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):s.mustUseProperty?t[s.propertyName]=r===null?s.type===3?!1:"":r:(e=s.attributeName,o=s.attributeNamespace,r===null?t.removeAttribute(e):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,o?t.setAttributeNS(o,e,r):t.setAttribute(e,r))))}var sr=Dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ho=Symbol.for("react.element"),nn=Symbol.for("react.portal"),on=Symbol.for("react.fragment"),wa=Symbol.for("react.strict_mode"),dl=Symbol.for("react.profiler"),Wc=Symbol.for("react.provider"),Mc=Symbol.for("react.context"),ja=Symbol.for("react.forward_ref"),gl=Symbol.for("react.suspense"),cl=Symbol.for("react.suspense_list"),Sa=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),_c=Symbol.for("react.offscreen"),Ad=Symbol.iterator;function Pn(t){return t===null||typeof t!="object"?null:(t=Ad&&t[Ad]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,wi;function Qn(t){if(wi===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);wi=e&&e[1]||""}return`
`+wi+t}var ji=!1;function Si(t,e){if(!t||ji)return"";ji=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(g){var o=g}Reflect.construct(t,[],e)}else{try{e.call()}catch(g){o=g}t.call(e.prototype)}else{try{throw Error()}catch(g){o=g}t()}}catch(g){if(g&&o&&typeof g.stack=="string"){for(var s=g.stack.split(`
`),i=o.stack.split(`
`),l=s.length-1,a=i.length-1;1<=l&&0<=a&&s[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(s[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||s[l]!==i[a]){var d=`
`+s[l].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=l&&0<=a);break}}}finally{ji=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?Qn(t):""}function Mp(t){switch(t.tag){case 5:return Qn(t.type);case 16:return Qn("Lazy");case 13:return Qn("Suspense");case 19:return Qn("SuspenseList");case 0:case 2:case 15:return t=Si(t.type,!1),t;case 11:return t=Si(t.type.render,!1),t;case 1:return t=Si(t.type,!0),t;default:return""}}function ul(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case on:return"Fragment";case nn:return"Portal";case dl:return"Profiler";case wa:return"StrictMode";case gl:return"Suspense";case cl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Mc:return(t.displayName||"Context")+".Consumer";case Wc:return(t._context.displayName||"Context")+".Provider";case ja:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sa:return e=t.displayName||null,e!==null?e:ul(t.type)||"Memo";case ar:e=t._payload,t=t._init;try{return ul(t(e))}catch{}}return null}function _p(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ul(e);case 8:return e===wa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Lc(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Lp(t){var e=Lc(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),o=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,i=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(l){o=""+l,i.call(this,l)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Go(t){t._valueTracker||(t._valueTracker=Lp(t))}function Pc(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),o="";return t&&(o=Lc(t)?t.checked?"true":"false":t.value),t=o,t!==r?(e.setValue(t),!0):!1}function Es(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bl(t,e){var r=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Wd(t,e){var r=e.defaultValue==null?"":e.defaultValue,o=e.checked!=null?e.checked:e.defaultChecked;r=wr(e.value!=null?e.value:r),t._wrapperState={initialChecked:o,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Nc(t,e){e=e.checked,e!=null&&ka(t,"checked",e,!1)}function pl(t,e){Nc(t,e);var r=wr(e.value),o=e.type;if(r!=null)o==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(o==="submit"||o==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ml(t,e.type,r):e.hasOwnProperty("defaultValue")&&ml(t,e.type,wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Md(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var o=e.type;if(!(o!=="submit"&&o!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function ml(t,e,r){(e!=="number"||Es(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var Kn=Array.isArray;function hn(t,e,r,o){if(t=t.options,e){e={};for(var s=0;s<r.length;s++)e["$"+r[s]]=!0;for(r=0;r<t.length;r++)s=e.hasOwnProperty("$"+t[r].value),t[r].selected!==s&&(t[r].selected=s),s&&o&&(t[r].defaultSelected=!0)}else{for(r=""+wr(r),e=null,s=0;s<t.length;s++){if(t[s].value===r){t[s].selected=!0,o&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function fl(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _d(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(H(92));if(Kn(r)){if(1<r.length)throw Error(H(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:wr(r)}}function Oc(t,e){var r=wr(e.value),o=wr(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),o!=null&&(t.defaultValue=""+o)}function Ld(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function $c(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hl(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?$c(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Uo,Hc=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,o,s){MSApp.execUnsafeLocalFunction(function(){return t(e,r,o,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Uo=Uo||document.createElement("div"),Uo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Uo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function mo(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pp=["Webkit","ms","Moz","O"];Object.keys(ro).forEach(function(t){Pp.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ro[e]=ro[t]})});function Gc(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||ro.hasOwnProperty(t)&&ro[t]?(""+e).trim():e+"px"}function Uc(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var o=r.indexOf("--")===0,s=Gc(r,e[r],o);r==="float"&&(r="cssFloat"),o?t.setProperty(r,s):t[r]=s}}var Np=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vl(t,e){if(e){if(Np[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function yl(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xl=null;function Ca(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kl=null,vn=null,yn=null;function Pd(t){if(t=Mo(t)){if(typeof kl!="function")throw Error(H(280));var e=t.stateNode;e&&(e=li(e),kl(t.stateNode,t.type,e))}}function Vc(t){vn?yn?yn.push(t):yn=[t]:vn=t}function Yc(){if(vn){var t=vn,e=yn;if(yn=vn=null,Pd(t),e)for(t=0;t<e.length;t++)Pd(e[t])}}function Qc(t,e){return t(e)}function Kc(){}var Ci=!1;function Xc(t,e,r){if(Ci)return t(e,r);Ci=!0;try{return Qc(t,e,r)}finally{Ci=!1,(vn!==null||yn!==null)&&(Kc(),Yc())}}function fo(t,e){var r=t.stateNode;if(r===null)return null;var o=li(r);if(o===null)return null;r=o[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(H(231,e,typeof r));return r}var wl=!1;if(er)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){wl=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{wl=!1}function Op(t,e,r,o,s,i,l,a,d){var g=Array.prototype.slice.call(arguments,3);try{e.apply(r,g)}catch(m){this.onError(m)}}var no=!1,Bs=null,Ds=!1,jl=null,$p={onError:function(t){no=!0,Bs=t}};function Hp(t,e,r,o,s,i,l,a,d){no=!1,Bs=null,Op.apply($p,arguments)}function Gp(t,e,r,o,s,i,l,a,d){if(Hp.apply(this,arguments),no){if(no){var g=Bs;no=!1,Bs=null}else throw Error(H(198));Ds||(Ds=!0,jl=g)}}function Kr(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function Jc(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Nd(t){if(Kr(t)!==t)throw Error(H(188))}function Up(t){var e=t.alternate;if(!e){if(e=Kr(t),e===null)throw Error(H(188));return e!==t?null:t}for(var r=t,o=e;;){var s=r.return;if(s===null)break;var i=s.alternate;if(i===null){if(o=s.return,o!==null){r=o;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===r)return Nd(s),t;if(i===o)return Nd(s),e;i=i.sibling}throw Error(H(188))}if(r.return!==o.return)r=s,o=i;else{for(var l=!1,a=s.child;a;){if(a===r){l=!0,r=s,o=i;break}if(a===o){l=!0,o=s,r=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===r){l=!0,r=i,o=s;break}if(a===o){l=!0,o=i,r=s;break}a=a.sibling}if(!l)throw Error(H(189))}}if(r.alternate!==o)throw Error(H(190))}if(r.tag!==3)throw Error(H(188));return r.stateNode.current===r?t:e}function Zc(t){return t=Up(t),t!==null?qc(t):null}function qc(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=qc(t);if(e!==null)return e;t=t.sibling}return null}var tu=he.unstable_scheduleCallback,Od=he.unstable_cancelCallback,Vp=he.unstable_shouldYield,Yp=he.unstable_requestPaint,Pt=he.unstable_now,Qp=he.unstable_getCurrentPriorityLevel,Ia=he.unstable_ImmediatePriority,eu=he.unstable_UserBlockingPriority,Rs=he.unstable_NormalPriority,Kp=he.unstable_LowPriority,ru=he.unstable_IdlePriority,ni=null,Ue=null;function Xp(t){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(ni,t,void 0,(t.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:qp,Jp=Math.log,Zp=Math.LN2;function qp(t){return t>>>=0,t===0?32:31-(Jp(t)/Zp|0)|0}var Vo=64,Yo=4194304;function Xn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fs(t,e){var r=t.pendingLanes;if(r===0)return 0;var o=0,s=t.suspendedLanes,i=t.pingedLanes,l=r&268435455;if(l!==0){var a=l&~s;a!==0?o=Xn(a):(i&=l,i!==0&&(o=Xn(i)))}else l=r&~s,l!==0?o=Xn(l):i!==0&&(o=Xn(i));if(o===0)return 0;if(e!==0&&e!==o&&!(e&s)&&(s=o&-o,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(o&4&&(o|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=o;0<e;)r=31-Ae(e),s=1<<r,o|=t[r],e&=~s;return o}function tm(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function em(t,e){for(var r=t.suspendedLanes,o=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var l=31-Ae(i),a=1<<l,d=s[l];d===-1?(!(a&r)||a&o)&&(s[l]=tm(a,e)):d<=e&&(t.expiredLanes|=a),i&=~a}}function Sl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function nu(){var t=Vo;return Vo<<=1,!(Vo&4194240)&&(Vo=64),t}function Ii(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function Ao(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ae(e),t[e]=r}function rm(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var o=t.eventTimes;for(t=t.expirationTimes;0<r;){var s=31-Ae(r),i=1<<s;e[s]=0,o[s]=-1,t[s]=-1,r&=~i}}function za(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var o=31-Ae(r),s=1<<o;s&e|t[o]&e&&(t[o]|=e),r&=~s}}var zt=0;function ou(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var su,Ta,iu,lu,au,Cl=!1,Qo=[],pr=null,mr=null,fr=null,ho=new Map,vo=new Map,gr=[],nm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $d(t,e){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":ho.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":vo.delete(e.pointerId)}}function On(t,e,r,o,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:r,eventSystemFlags:o,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Mo(e),e!==null&&Ta(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function om(t,e,r,o,s){switch(e){case"focusin":return pr=On(pr,t,e,r,o,s),!0;case"dragenter":return mr=On(mr,t,e,r,o,s),!0;case"mouseover":return fr=On(fr,t,e,r,o,s),!0;case"pointerover":var i=s.pointerId;return ho.set(i,On(ho.get(i)||null,t,e,r,o,s)),!0;case"gotpointercapture":return i=s.pointerId,vo.set(i,On(vo.get(i)||null,t,e,r,o,s)),!0}return!1}function du(t){var e=Wr(t.target);if(e!==null){var r=Kr(e);if(r!==null){if(e=r.tag,e===13){if(e=Jc(r),e!==null){t.blockedOn=e,au(t.priority,function(){iu(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=Il(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);xl=o,r.target.dispatchEvent(o),xl=null}else return e=Mo(r),e!==null&&Ta(e),t.blockedOn=r,!1;e.shift()}return!0}function Hd(t,e,r){vs(t)&&r.delete(e)}function sm(){Cl=!1,pr!==null&&vs(pr)&&(pr=null),mr!==null&&vs(mr)&&(mr=null),fr!==null&&vs(fr)&&(fr=null),ho.forEach(Hd),vo.forEach(Hd)}function $n(t,e){t.blockedOn===e&&(t.blockedOn=null,Cl||(Cl=!0,he.unstable_scheduleCallback(he.unstable_NormalPriority,sm)))}function yo(t){function e(s){return $n(s,t)}if(0<Qo.length){$n(Qo[0],t);for(var r=1;r<Qo.length;r++){var o=Qo[r];o.blockedOn===t&&(o.blockedOn=null)}}for(pr!==null&&$n(pr,t),mr!==null&&$n(mr,t),fr!==null&&$n(fr,t),ho.forEach(e),vo.forEach(e),r=0;r<gr.length;r++)o=gr[r],o.blockedOn===t&&(o.blockedOn=null);for(;0<gr.length&&(r=gr[0],r.blockedOn===null);)du(r),r.blockedOn===null&&gr.shift()}var xn=sr.ReactCurrentBatchConfig,As=!0;function im(t,e,r,o){var s=zt,i=xn.transition;xn.transition=null;try{zt=1,Ea(t,e,r,o)}finally{zt=s,xn.transition=i}}function lm(t,e,r,o){var s=zt,i=xn.transition;xn.transition=null;try{zt=4,Ea(t,e,r,o)}finally{zt=s,xn.transition=i}}function Ea(t,e,r,o){if(As){var s=Il(t,e,r,o);if(s===null)Mi(t,e,o,Ws,r),$d(t,o);else if(om(s,t,e,r,o))o.stopPropagation();else if($d(t,o),e&4&&-1<nm.indexOf(t)){for(;s!==null;){var i=Mo(s);if(i!==null&&su(i),i=Il(t,e,r,o),i===null&&Mi(t,e,o,Ws,r),i===s)break;s=i}s!==null&&o.stopPropagation()}else Mi(t,e,o,null,r)}}var Ws=null;function Il(t,e,r,o){if(Ws=null,t=Ca(o),t=Wr(t),t!==null)if(e=Kr(t),e===null)t=null;else if(r=e.tag,r===13){if(t=Jc(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ws=t,null}function gu(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qp()){case Ia:return 1;case eu:return 4;case Rs:case Kp:return 16;case ru:return 536870912;default:return 16}default:return 16}}var ur=null,Ba=null,ys=null;function cu(){if(ys)return ys;var t,e=Ba,r=e.length,o,s="value"in ur?ur.value:ur.textContent,i=s.length;for(t=0;t<r&&e[t]===s[t];t++);var l=r-t;for(o=1;o<=l&&e[r-o]===s[i-o];o++);return ys=s.slice(t,1<o?1-o:void 0)}function xs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ko(){return!0}function Gd(){return!1}function xe(t){function e(r,o,s,i,l){this._reactName=r,this._targetInst=s,this.type=o,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(r=t[a],this[a]=r?r(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ko:Gd,this.isPropagationStopped=Gd,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),e}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Da=xe(Dn),Wo=_t({},Dn,{view:0,detail:0}),am=xe(Wo),zi,Ti,Hn,oi=_t({},Wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ra,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hn&&(Hn&&t.type==="mousemove"?(zi=t.screenX-Hn.screenX,Ti=t.screenY-Hn.screenY):Ti=zi=0,Hn=t),zi)},movementY:function(t){return"movementY"in t?t.movementY:Ti}}),Ud=xe(oi),dm=_t({},oi,{dataTransfer:0}),gm=xe(dm),cm=_t({},Wo,{relatedTarget:0}),Ei=xe(cm),um=_t({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0}),bm=xe(um),pm=_t({},Dn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mm=xe(pm),fm=_t({},Dn,{data:0}),Vd=xe(fm),hm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ym={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ym[t])?!!e[t]:!1}function Ra(){return xm}var km=_t({},Wo,{key:function(t){if(t.key){var e=hm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ra,charCode:function(t){return t.type==="keypress"?xs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wm=xe(km),jm=_t({},oi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yd=xe(jm),Sm=_t({},Wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ra}),Cm=xe(Sm),Im=_t({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),zm=xe(Im),Tm=_t({},oi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Em=xe(Tm),Bm=[9,13,27,32],Fa=er&&"CompositionEvent"in window,oo=null;er&&"documentMode"in document&&(oo=document.documentMode);var Dm=er&&"TextEvent"in window&&!oo,uu=er&&(!Fa||oo&&8<oo&&11>=oo),Qd=" ",Kd=!1;function bu(t,e){switch(t){case"keyup":return Bm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pu(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var sn=!1;function Rm(t,e){switch(t){case"compositionend":return pu(e);case"keypress":return e.which!==32?null:(Kd=!0,Qd);case"textInput":return t=e.data,t===Qd&&Kd?null:t;default:return null}}function Fm(t,e){if(sn)return t==="compositionend"||!Fa&&bu(t,e)?(t=cu(),ys=Ba=ur=null,sn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return uu&&e.locale!=="ko"?null:e.data;default:return null}}var Am={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Am[t.type]:e==="textarea"}function mu(t,e,r,o){Vc(o),e=Ms(e,"onChange"),0<e.length&&(r=new Da("onChange","change",null,r,o),t.push({event:r,listeners:e}))}var so=null,xo=null;function Wm(t){Iu(t,0)}function si(t){var e=dn(t);if(Pc(e))return t}function Mm(t,e){if(t==="change")return e}var fu=!1;if(er){var Bi;if(er){var Di="oninput"in document;if(!Di){var Jd=document.createElement("div");Jd.setAttribute("oninput","return;"),Di=typeof Jd.oninput=="function"}Bi=Di}else Bi=!1;fu=Bi&&(!document.documentMode||9<document.documentMode)}function Zd(){so&&(so.detachEvent("onpropertychange",hu),xo=so=null)}function hu(t){if(t.propertyName==="value"&&si(xo)){var e=[];mu(e,xo,t,Ca(t)),Xc(Wm,e)}}function _m(t,e,r){t==="focusin"?(Zd(),so=e,xo=r,so.attachEvent("onpropertychange",hu)):t==="focusout"&&Zd()}function Lm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return si(xo)}function Pm(t,e){if(t==="click")return si(e)}function Nm(t,e){if(t==="input"||t==="change")return si(e)}function Om(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Me=typeof Object.is=="function"?Object.is:Om;function ko(t,e){if(Me(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),o=Object.keys(e);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var s=r[o];if(!al.call(e,s)||!Me(t[s],e[s]))return!1}return!0}function qd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tg(t,e){var r=qd(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=e&&o>=e)return{node:r,offset:e-t};t=o}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=qd(r)}}function vu(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?vu(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function yu(){for(var t=window,e=Es();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=Es(t.document)}return e}function Aa(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function $m(t){var e=yu(),r=t.focusedElem,o=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&vu(r.ownerDocument.documentElement,r)){if(o!==null&&Aa(r)){if(e=o.start,t=o.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=r.textContent.length,i=Math.min(o.start,s);o=o.end===void 0?i:Math.min(o.end,s),!t.extend&&i>o&&(s=o,o=i,i=s),s=tg(r,i);var l=tg(r,o);s&&l&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>o?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Hm=er&&"documentMode"in document&&11>=document.documentMode,ln=null,zl=null,io=null,Tl=!1;function eg(t,e,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Tl||ln==null||ln!==Es(o)||(o=ln,"selectionStart"in o&&Aa(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),io&&ko(io,o)||(io=o,o=Ms(zl,"onSelect"),0<o.length&&(e=new Da("onSelect","select",null,e,r),t.push({event:e,listeners:o}),e.target=ln)))}function Xo(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var an={animationend:Xo("Animation","AnimationEnd"),animationiteration:Xo("Animation","AnimationIteration"),animationstart:Xo("Animation","AnimationStart"),transitionend:Xo("Transition","TransitionEnd")},Ri={},xu={};er&&(xu=document.createElement("div").style,"AnimationEvent"in window||(delete an.animationend.animation,delete an.animationiteration.animation,delete an.animationstart.animation),"TransitionEvent"in window||delete an.transitionend.transition);function ii(t){if(Ri[t])return Ri[t];if(!an[t])return t;var e=an[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in xu)return Ri[t]=e[r];return t}var ku=ii("animationend"),wu=ii("animationiteration"),ju=ii("animationstart"),Su=ii("transitionend"),Cu=new Map,rg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(t,e){Cu.set(t,e),Qr(e,[t])}for(var Fi=0;Fi<rg.length;Fi++){var Ai=rg[Fi],Gm=Ai.toLowerCase(),Um=Ai[0].toUpperCase()+Ai.slice(1);Sr(Gm,"on"+Um)}Sr(ku,"onAnimationEnd");Sr(wu,"onAnimationIteration");Sr(ju,"onAnimationStart");Sr("dblclick","onDoubleClick");Sr("focusin","onFocus");Sr("focusout","onBlur");Sr(Su,"onTransitionEnd");jn("onMouseEnter",["mouseout","mouseover"]);jn("onMouseLeave",["mouseout","mouseover"]);jn("onPointerEnter",["pointerout","pointerover"]);jn("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jn));function ng(t,e,r){var o=t.type||"unknown-event";t.currentTarget=r,Gp(o,e,void 0,t),t.currentTarget=null}function Iu(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],s=o.event;o=o.listeners;t:{var i=void 0;if(e)for(var l=o.length-1;0<=l;l--){var a=o[l],d=a.instance,g=a.currentTarget;if(a=a.listener,d!==i&&s.isPropagationStopped())break t;ng(s,a,g),i=d}else for(l=0;l<o.length;l++){if(a=o[l],d=a.instance,g=a.currentTarget,a=a.listener,d!==i&&s.isPropagationStopped())break t;ng(s,a,g),i=d}}}if(Ds)throw t=jl,Ds=!1,jl=null,t}function Rt(t,e){var r=e[Fl];r===void 0&&(r=e[Fl]=new Set);var o=t+"__bubble";r.has(o)||(zu(e,t,2,!1),r.add(o))}function Wi(t,e,r){var o=0;e&&(o|=4),zu(r,t,o,e)}var Jo="_reactListening"+Math.random().toString(36).slice(2);function wo(t){if(!t[Jo]){t[Jo]=!0,Ac.forEach(function(r){r!=="selectionchange"&&(Vm.has(r)||Wi(r,!1,t),Wi(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Jo]||(e[Jo]=!0,Wi("selectionchange",!1,e))}}function zu(t,e,r,o){switch(gu(e)){case 1:var s=im;break;case 4:s=lm;break;default:s=Ea}r=s.bind(null,e,r,t),s=void 0,!wl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),o?s!==void 0?t.addEventListener(e,r,{capture:!0,passive:s}):t.addEventListener(e,r,!0):s!==void 0?t.addEventListener(e,r,{passive:s}):t.addEventListener(e,r,!1)}function Mi(t,e,r,o,s){var i=o;if(!(e&1)&&!(e&2)&&o!==null)t:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var a=o.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(l===4)for(l=o.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===s||d.nodeType===8&&d.parentNode===s))return;l=l.return}for(;a!==null;){if(l=Wr(a),l===null)return;if(d=l.tag,d===5||d===6){o=i=l;continue t}a=a.parentNode}}o=o.return}Xc(function(){var g=i,m=Ca(r),v=[];t:{var f=Cu.get(t);if(f!==void 0){var j=Da,k=t;switch(t){case"keypress":if(xs(r)===0)break t;case"keydown":case"keyup":j=wm;break;case"focusin":k="focus",j=Ei;break;case"focusout":k="blur",j=Ei;break;case"beforeblur":case"afterblur":j=Ei;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=gm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Cm;break;case ku:case wu:case ju:j=bm;break;case Su:j=zm;break;case"scroll":j=am;break;case"wheel":j=Em;break;case"copy":case"cut":case"paste":j=mm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Yd}var S=(e&4)!==0,T=!S&&t==="scroll",b=S?f!==null?f+"Capture":null:f;S=[];for(var c=g,u;c!==null;){u=c;var x=u.stateNode;if(u.tag===5&&x!==null&&(u=x,b!==null&&(x=fo(c,b),x!=null&&S.push(jo(c,x,u)))),T)break;c=c.return}0<S.length&&(f=new j(f,k,null,r,m),v.push({event:f,listeners:S}))}}if(!(e&7)){t:{if(f=t==="mouseover"||t==="pointerover",j=t==="mouseout"||t==="pointerout",f&&r!==xl&&(k=r.relatedTarget||r.fromElement)&&(Wr(k)||k[rr]))break t;if((j||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,j?(k=r.relatedTarget||r.toElement,j=g,k=k?Wr(k):null,k!==null&&(T=Kr(k),k!==T||k.tag!==5&&k.tag!==6)&&(k=null)):(j=null,k=g),j!==k)){if(S=Ud,x="onMouseLeave",b="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(S=Yd,x="onPointerLeave",b="onPointerEnter",c="pointer"),T=j==null?f:dn(j),u=k==null?f:dn(k),f=new S(x,c+"leave",j,r,m),f.target=T,f.relatedTarget=u,x=null,Wr(m)===g&&(S=new S(b,c+"enter",k,r,m),S.target=u,S.relatedTarget=T,x=S),T=x,j&&k)e:{for(S=j,b=k,c=0,u=S;u;u=tn(u))c++;for(u=0,x=b;x;x=tn(x))u++;for(;0<c-u;)S=tn(S),c--;for(;0<u-c;)b=tn(b),u--;for(;c--;){if(S===b||b!==null&&S===b.alternate)break e;S=tn(S),b=tn(b)}S=null}else S=null;j!==null&&og(v,f,j,S,!1),k!==null&&T!==null&&og(v,T,k,S,!0)}}t:{if(f=g?dn(g):window,j=f.nodeName&&f.nodeName.toLowerCase(),j==="select"||j==="input"&&f.type==="file")var y=Mm;else if(Xd(f))if(fu)y=Nm;else{y=Lm;var A=_m}else(j=f.nodeName)&&j.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(y=Pm);if(y&&(y=y(t,g))){mu(v,y,r,m);break t}A&&A(t,f,g),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&ml(f,"number",f.value)}switch(A=g?dn(g):window,t){case"focusin":(Xd(A)||A.contentEditable==="true")&&(ln=A,zl=g,io=null);break;case"focusout":io=zl=ln=null;break;case"mousedown":Tl=!0;break;case"contextmenu":case"mouseup":case"dragend":Tl=!1,eg(v,r,m);break;case"selectionchange":if(Hm)break;case"keydown":case"keyup":eg(v,r,m)}var _;if(Fa)t:{switch(t){case"compositionstart":var D="onCompositionStart";break t;case"compositionend":D="onCompositionEnd";break t;case"compositionupdate":D="onCompositionUpdate";break t}D=void 0}else sn?bu(t,r)&&(D="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(D="onCompositionStart");D&&(uu&&r.locale!=="ko"&&(sn||D!=="onCompositionStart"?D==="onCompositionEnd"&&sn&&(_=cu()):(ur=m,Ba="value"in ur?ur.value:ur.textContent,sn=!0)),A=Ms(g,D),0<A.length&&(D=new Vd(D,t,null,r,m),v.push({event:D,listeners:A}),_?D.data=_:(_=pu(r),_!==null&&(D.data=_)))),(_=Dm?Rm(t,r):Fm(t,r))&&(g=Ms(g,"onBeforeInput"),0<g.length&&(m=new Vd("onBeforeInput","beforeinput",null,r,m),v.push({event:m,listeners:g}),m.data=_))}Iu(v,e)})}function jo(t,e,r){return{instance:t,listener:e,currentTarget:r}}function Ms(t,e){for(var r=e+"Capture",o=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=fo(t,r),i!=null&&o.unshift(jo(t,i,s)),i=fo(t,e),i!=null&&o.push(jo(t,i,s))),t=t.return}return o}function tn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function og(t,e,r,o,s){for(var i=e._reactName,l=[];r!==null&&r!==o;){var a=r,d=a.alternate,g=a.stateNode;if(d!==null&&d===o)break;a.tag===5&&g!==null&&(a=g,s?(d=fo(r,i),d!=null&&l.unshift(jo(r,d,a))):s||(d=fo(r,i),d!=null&&l.push(jo(r,d,a)))),r=r.return}l.length!==0&&t.push({event:e,listeners:l})}var Ym=/\r\n?/g,Qm=/\u0000|\uFFFD/g;function sg(t){return(typeof t=="string"?t:""+t).replace(Ym,`
`).replace(Qm,"")}function Zo(t,e,r){if(e=sg(e),sg(t)!==e&&r)throw Error(H(425))}function _s(){}var El=null,Bl=null;function Dl(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rl=typeof setTimeout=="function"?setTimeout:void 0,Km=typeof clearTimeout=="function"?clearTimeout:void 0,ig=typeof Promise=="function"?Promise:void 0,Xm=typeof queueMicrotask=="function"?queueMicrotask:typeof ig<"u"?function(t){return ig.resolve(null).then(t).catch(Jm)}:Rl;function Jm(t){setTimeout(function(){throw t})}function _i(t,e){var r=e,o=0;do{var s=r.nextSibling;if(t.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(o===0){t.removeChild(s),yo(e);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=s}while(r);yo(e)}function hr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function lg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var Rn=Math.random().toString(36).slice(2),Ge="__reactFiber$"+Rn,So="__reactProps$"+Rn,rr="__reactContainer$"+Rn,Fl="__reactEvents$"+Rn,Zm="__reactListeners$"+Rn,qm="__reactHandles$"+Rn;function Wr(t){var e=t[Ge];if(e)return e;for(var r=t.parentNode;r;){if(e=r[rr]||r[Ge]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=lg(t);t!==null;){if(r=t[Ge])return r;t=lg(t)}return e}t=r,r=t.parentNode}return null}function Mo(t){return t=t[Ge]||t[rr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function dn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function li(t){return t[So]||null}var Al=[],gn=-1;function Cr(t){return{current:t}}function Ft(t){0>gn||(t.current=Al[gn],Al[gn]=null,gn--)}function Bt(t,e){gn++,Al[gn]=t.current,t.current=e}var jr={},ee=Cr(jr),ce=Cr(!1),Or=jr;function Sn(t,e){var r=t.type.contextTypes;if(!r)return jr;var o=t.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===e)return o.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in r)s[i]=e[i];return o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function ue(t){return t=t.childContextTypes,t!=null}function Ls(){Ft(ce),Ft(ee)}function ag(t,e,r){if(ee.current!==jr)throw Error(H(168));Bt(ee,e),Bt(ce,r)}function Tu(t,e,r){var o=t.stateNode;if(e=e.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var s in o)if(!(s in e))throw Error(H(108,_p(t)||"Unknown",s));return _t({},r,o)}function Ps(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||jr,Or=ee.current,Bt(ee,t),Bt(ce,ce.current),!0}function dg(t,e,r){var o=t.stateNode;if(!o)throw Error(H(169));r?(t=Tu(t,e,Or),o.__reactInternalMemoizedMergedChildContext=t,Ft(ce),Ft(ee),Bt(ee,t)):Ft(ce),Bt(ce,r)}var Je=null,ai=!1,Li=!1;function Eu(t){Je===null?Je=[t]:Je.push(t)}function tf(t){ai=!0,Eu(t)}function Ir(){if(!Li&&Je!==null){Li=!0;var t=0,e=zt;try{var r=Je;for(zt=1;t<r.length;t++){var o=r[t];do o=o(!0);while(o!==null)}Je=null,ai=!1}catch(s){throw Je!==null&&(Je=Je.slice(t+1)),tu(Ia,Ir),s}finally{zt=e,Li=!1}}return null}var cn=[],un=0,Ns=null,Os=0,je=[],Se=0,$r=null,Ze=1,qe="";function Br(t,e){cn[un++]=Os,cn[un++]=Ns,Ns=t,Os=e}function Bu(t,e,r){je[Se++]=Ze,je[Se++]=qe,je[Se++]=$r,$r=t;var o=Ze;t=qe;var s=32-Ae(o)-1;o&=~(1<<s),r+=1;var i=32-Ae(e)+s;if(30<i){var l=s-s%5;i=(o&(1<<l)-1).toString(32),o>>=l,s-=l,Ze=1<<32-Ae(e)+s|r<<s|o,qe=i+t}else Ze=1<<i|r<<s|o,qe=t}function Wa(t){t.return!==null&&(Br(t,1),Bu(t,1,0))}function Ma(t){for(;t===Ns;)Ns=cn[--un],cn[un]=null,Os=cn[--un],cn[un]=null;for(;t===$r;)$r=je[--Se],je[Se]=null,qe=je[--Se],je[Se]=null,Ze=je[--Se],je[Se]=null}var fe=null,me=null,At=!1,Fe=null;function Du(t,e){var r=Ce(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function gg(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,fe=t,me=hr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,fe=t,me=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=$r!==null?{id:Ze,overflow:qe}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=Ce(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,fe=t,me=null,!0):!1;default:return!1}}function Wl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ml(t){if(At){var e=me;if(e){var r=e;if(!gg(t,e)){if(Wl(t))throw Error(H(418));e=hr(r.nextSibling);var o=fe;e&&gg(t,e)?Du(o,r):(t.flags=t.flags&-4097|2,At=!1,fe=t)}}else{if(Wl(t))throw Error(H(418));t.flags=t.flags&-4097|2,At=!1,fe=t}}}function cg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;fe=t}function qo(t){if(t!==fe)return!1;if(!At)return cg(t),At=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Dl(t.type,t.memoizedProps)),e&&(e=me)){if(Wl(t))throw Ru(),Error(H(418));for(;e;)Du(t,e),e=hr(e.nextSibling)}if(cg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){me=hr(t.nextSibling);break t}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}me=null}}else me=fe?hr(t.stateNode.nextSibling):null;return!0}function Ru(){for(var t=me;t;)t=hr(t.nextSibling)}function Cn(){me=fe=null,At=!1}function _a(t){Fe===null?Fe=[t]:Fe.push(t)}var ef=sr.ReactCurrentBatchConfig;function Gn(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(H(309));var o=r.stateNode}if(!o)throw Error(H(147,t));var s=o,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(l){var a=s.refs;l===null?delete a[i]:a[i]=l},e._stringRef=i,e)}if(typeof t!="string")throw Error(H(284));if(!r._owner)throw Error(H(290,t))}return t}function ts(t,e){throw t=Object.prototype.toString.call(e),Error(H(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ug(t){var e=t._init;return e(t._payload)}function Fu(t){function e(b,c){if(t){var u=b.deletions;u===null?(b.deletions=[c],b.flags|=16):u.push(c)}}function r(b,c){if(!t)return null;for(;c!==null;)e(b,c),c=c.sibling;return null}function o(b,c){for(b=new Map;c!==null;)c.key!==null?b.set(c.key,c):b.set(c.index,c),c=c.sibling;return b}function s(b,c){return b=kr(b,c),b.index=0,b.sibling=null,b}function i(b,c,u){return b.index=u,t?(u=b.alternate,u!==null?(u=u.index,u<c?(b.flags|=2,c):u):(b.flags|=2,c)):(b.flags|=1048576,c)}function l(b){return t&&b.alternate===null&&(b.flags|=2),b}function a(b,c,u,x){return c===null||c.tag!==6?(c=Ui(u,b.mode,x),c.return=b,c):(c=s(c,u),c.return=b,c)}function d(b,c,u,x){var y=u.type;return y===on?m(b,c,u.props.children,x,u.key):c!==null&&(c.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===ar&&ug(y)===c.type)?(x=s(c,u.props),x.ref=Gn(b,c,u),x.return=b,x):(x=zs(u.type,u.key,u.props,null,b.mode,x),x.ref=Gn(b,c,u),x.return=b,x)}function g(b,c,u,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==u.containerInfo||c.stateNode.implementation!==u.implementation?(c=Vi(u,b.mode,x),c.return=b,c):(c=s(c,u.children||[]),c.return=b,c)}function m(b,c,u,x,y){return c===null||c.tag!==7?(c=Nr(u,b.mode,x,y),c.return=b,c):(c=s(c,u),c.return=b,c)}function v(b,c,u){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ui(""+c,b.mode,u),c.return=b,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Ho:return u=zs(c.type,c.key,c.props,null,b.mode,u),u.ref=Gn(b,null,c),u.return=b,u;case nn:return c=Vi(c,b.mode,u),c.return=b,c;case ar:var x=c._init;return v(b,x(c._payload),u)}if(Kn(c)||Pn(c))return c=Nr(c,b.mode,u,null),c.return=b,c;ts(b,c)}return null}function f(b,c,u,x){var y=c!==null?c.key:null;if(typeof u=="string"&&u!==""||typeof u=="number")return y!==null?null:a(b,c,""+u,x);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Ho:return u.key===y?d(b,c,u,x):null;case nn:return u.key===y?g(b,c,u,x):null;case ar:return y=u._init,f(b,c,y(u._payload),x)}if(Kn(u)||Pn(u))return y!==null?null:m(b,c,u,x,null);ts(b,u)}return null}function j(b,c,u,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return b=b.get(u)||null,a(c,b,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ho:return b=b.get(x.key===null?u:x.key)||null,d(c,b,x,y);case nn:return b=b.get(x.key===null?u:x.key)||null,g(c,b,x,y);case ar:var A=x._init;return j(b,c,u,A(x._payload),y)}if(Kn(x)||Pn(x))return b=b.get(u)||null,m(c,b,x,y,null);ts(c,x)}return null}function k(b,c,u,x){for(var y=null,A=null,_=c,D=c=0,E=null;_!==null&&D<u.length;D++){_.index>D?(E=_,_=null):E=_.sibling;var M=f(b,_,u[D],x);if(M===null){_===null&&(_=E);break}t&&_&&M.alternate===null&&e(b,_),c=i(M,c,D),A===null?y=M:A.sibling=M,A=M,_=E}if(D===u.length)return r(b,_),At&&Br(b,D),y;if(_===null){for(;D<u.length;D++)_=v(b,u[D],x),_!==null&&(c=i(_,c,D),A===null?y=_:A.sibling=_,A=_);return At&&Br(b,D),y}for(_=o(b,_);D<u.length;D++)E=j(_,b,D,u[D],x),E!==null&&(t&&E.alternate!==null&&_.delete(E.key===null?D:E.key),c=i(E,c,D),A===null?y=E:A.sibling=E,A=E);return t&&_.forEach(function(et){return e(b,et)}),At&&Br(b,D),y}function S(b,c,u,x){var y=Pn(u);if(typeof y!="function")throw Error(H(150));if(u=y.call(u),u==null)throw Error(H(151));for(var A=y=null,_=c,D=c=0,E=null,M=u.next();_!==null&&!M.done;D++,M=u.next()){_.index>D?(E=_,_=null):E=_.sibling;var et=f(b,_,M.value,x);if(et===null){_===null&&(_=E);break}t&&_&&et.alternate===null&&e(b,_),c=i(et,c,D),A===null?y=et:A.sibling=et,A=et,_=E}if(M.done)return r(b,_),At&&Br(b,D),y;if(_===null){for(;!M.done;D++,M=u.next())M=v(b,M.value,x),M!==null&&(c=i(M,c,D),A===null?y=M:A.sibling=M,A=M);return At&&Br(b,D),y}for(_=o(b,_);!M.done;D++,M=u.next())M=j(_,b,D,M.value,x),M!==null&&(t&&M.alternate!==null&&_.delete(M.key===null?D:M.key),c=i(M,c,D),A===null?y=M:A.sibling=M,A=M);return t&&_.forEach(function(L){return e(b,L)}),At&&Br(b,D),y}function T(b,c,u,x){if(typeof u=="object"&&u!==null&&u.type===on&&u.key===null&&(u=u.props.children),typeof u=="object"&&u!==null){switch(u.$$typeof){case Ho:t:{for(var y=u.key,A=c;A!==null;){if(A.key===y){if(y=u.type,y===on){if(A.tag===7){r(b,A.sibling),c=s(A,u.props.children),c.return=b,b=c;break t}}else if(A.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===ar&&ug(y)===A.type){r(b,A.sibling),c=s(A,u.props),c.ref=Gn(b,A,u),c.return=b,b=c;break t}r(b,A);break}else e(b,A);A=A.sibling}u.type===on?(c=Nr(u.props.children,b.mode,x,u.key),c.return=b,b=c):(x=zs(u.type,u.key,u.props,null,b.mode,x),x.ref=Gn(b,c,u),x.return=b,b=x)}return l(b);case nn:t:{for(A=u.key;c!==null;){if(c.key===A)if(c.tag===4&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){r(b,c.sibling),c=s(c,u.children||[]),c.return=b,b=c;break t}else{r(b,c);break}else e(b,c);c=c.sibling}c=Vi(u,b.mode,x),c.return=b,b=c}return l(b);case ar:return A=u._init,T(b,c,A(u._payload),x)}if(Kn(u))return k(b,c,u,x);if(Pn(u))return S(b,c,u,x);ts(b,u)}return typeof u=="string"&&u!==""||typeof u=="number"?(u=""+u,c!==null&&c.tag===6?(r(b,c.sibling),c=s(c,u),c.return=b,b=c):(r(b,c),c=Ui(u,b.mode,x),c.return=b,b=c),l(b)):r(b,c)}return T}var In=Fu(!0),Au=Fu(!1),$s=Cr(null),Hs=null,bn=null,La=null;function Pa(){La=bn=Hs=null}function Na(t){var e=$s.current;Ft($s),t._currentValue=e}function _l(t,e,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===r)break;t=t.return}}function kn(t,e){Hs=t,La=bn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ge=!0),t.firstContext=null)}function Te(t){var e=t._currentValue;if(La!==t)if(t={context:t,memoizedValue:e,next:null},bn===null){if(Hs===null)throw Error(H(308));bn=t,Hs.dependencies={lanes:0,firstContext:t}}else bn=bn.next=t;return e}var Mr=null;function Oa(t){Mr===null?Mr=[t]:Mr.push(t)}function Wu(t,e,r,o){var s=e.interleaved;return s===null?(r.next=r,Oa(e)):(r.next=s.next,s.next=r),e.interleaved=r,nr(t,o)}function nr(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var dr=!1;function $a(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function tr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vr(t,e,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,St&2){var s=o.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),o.pending=e,nr(t,r)}return s=o.interleaved,s===null?(e.next=e,Oa(o)):(e.next=s.next,s.next=e),o.interleaved=e,nr(t,r)}function ks(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var o=e.lanes;o&=t.pendingLanes,r|=o,e.lanes=r,za(t,r)}}function bg(t,e){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var s=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?s=i=l:i=i.next=l,r=r.next}while(r!==null);i===null?s=i=e:i=i.next=e}else s=i=e;r={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:o.shared,effects:o.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function Gs(t,e,r,o){var s=t.updateQueue;dr=!1;var i=s.firstBaseUpdate,l=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var d=a,g=d.next;d.next=null,l===null?i=g:l.next=g,l=d;var m=t.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==l&&(a===null?m.firstBaseUpdate=g:a.next=g,m.lastBaseUpdate=d))}if(i!==null){var v=s.baseState;l=0,m=g=d=null,a=i;do{var f=a.lane,j=a.eventTime;if((o&f)===f){m!==null&&(m=m.next={eventTime:j,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});t:{var k=t,S=a;switch(f=e,j=r,S.tag){case 1:if(k=S.payload,typeof k=="function"){v=k.call(j,v,f);break t}v=k;break t;case 3:k.flags=k.flags&-65537|128;case 0:if(k=S.payload,f=typeof k=="function"?k.call(j,v,f):k,f==null)break t;v=_t({},v,f);break t;case 2:dr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=s.effects,f===null?s.effects=[a]:f.push(a))}else j={eventTime:j,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(g=m=j,d=v):m=m.next=j,l|=f;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;f=a,a=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(m===null&&(d=v),s.baseState=d,s.firstBaseUpdate=g,s.lastBaseUpdate=m,e=s.shared.interleaved,e!==null){s=e;do l|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Gr|=l,t.lanes=l,t.memoizedState=v}}function pg(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var o=t[e],s=o.callback;if(s!==null){if(o.callback=null,o=r,typeof s!="function")throw Error(H(191,s));s.call(o)}}}var _o={},Ve=Cr(_o),Co=Cr(_o),Io=Cr(_o);function _r(t){if(t===_o)throw Error(H(174));return t}function Ha(t,e){switch(Bt(Io,e),Bt(Co,t),Bt(Ve,_o),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hl(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hl(e,t)}Ft(Ve),Bt(Ve,e)}function zn(){Ft(Ve),Ft(Co),Ft(Io)}function _u(t){_r(Io.current);var e=_r(Ve.current),r=hl(e,t.type);e!==r&&(Bt(Co,t),Bt(Ve,r))}function Ga(t){Co.current===t&&(Ft(Ve),Ft(Co))}var Wt=Cr(0);function Us(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Pi=[];function Ua(){for(var t=0;t<Pi.length;t++)Pi[t]._workInProgressVersionPrimary=null;Pi.length=0}var ws=sr.ReactCurrentDispatcher,Ni=sr.ReactCurrentBatchConfig,Hr=0,Mt=null,$t=null,Gt=null,Vs=!1,lo=!1,zo=0,rf=0;function Zt(){throw Error(H(321))}function Va(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!Me(t[r],e[r]))return!1;return!0}function Ya(t,e,r,o,s,i){if(Hr=i,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ws.current=t===null||t.memoizedState===null?lf:af,t=r(o,s),lo){i=0;do{if(lo=!1,zo=0,25<=i)throw Error(H(301));i+=1,Gt=$t=null,e.updateQueue=null,ws.current=df,t=r(o,s)}while(lo)}if(ws.current=Ys,e=$t!==null&&$t.next!==null,Hr=0,Gt=$t=Mt=null,Vs=!1,e)throw Error(H(300));return t}function Qa(){var t=zo!==0;return zo=0,t}function Oe(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?Mt.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function Ee(){if($t===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var e=Gt===null?Mt.memoizedState:Gt.next;if(e!==null)Gt=e,$t=t;else{if(t===null)throw Error(H(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},Gt===null?Mt.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function To(t,e){return typeof e=="function"?e(t):e}function Oi(t){var e=Ee(),r=e.queue;if(r===null)throw Error(H(311));r.lastRenderedReducer=t;var o=$t,s=o.baseQueue,i=r.pending;if(i!==null){if(s!==null){var l=s.next;s.next=i.next,i.next=l}o.baseQueue=s=i,r.pending=null}if(s!==null){i=s.next,o=o.baseState;var a=l=null,d=null,g=i;do{var m=g.lane;if((Hr&m)===m)d!==null&&(d=d.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),o=g.hasEagerState?g.eagerState:t(o,g.action);else{var v={lane:m,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};d===null?(a=d=v,l=o):d=d.next=v,Mt.lanes|=m,Gr|=m}g=g.next}while(g!==null&&g!==i);d===null?l=o:d.next=a,Me(o,e.memoizedState)||(ge=!0),e.memoizedState=o,e.baseState=l,e.baseQueue=d,r.lastRenderedState=o}if(t=r.interleaved,t!==null){s=t;do i=s.lane,Mt.lanes|=i,Gr|=i,s=s.next;while(s!==t)}else s===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function $i(t){var e=Ee(),r=e.queue;if(r===null)throw Error(H(311));r.lastRenderedReducer=t;var o=r.dispatch,s=r.pending,i=e.memoizedState;if(s!==null){r.pending=null;var l=s=s.next;do i=t(i,l.action),l=l.next;while(l!==s);Me(i,e.memoizedState)||(ge=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),r.lastRenderedState=i}return[i,o]}function Lu(){}function Pu(t,e){var r=Mt,o=Ee(),s=e(),i=!Me(o.memoizedState,s);if(i&&(o.memoizedState=s,ge=!0),o=o.queue,Ka($u.bind(null,r,o,t),[t]),o.getSnapshot!==e||i||Gt!==null&&Gt.memoizedState.tag&1){if(r.flags|=2048,Eo(9,Ou.bind(null,r,o,s,e),void 0,null),Ut===null)throw Error(H(349));Hr&30||Nu(r,e,s)}return s}function Nu(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function Ou(t,e,r,o){e.value=r,e.getSnapshot=o,Hu(e)&&Gu(t)}function $u(t,e,r){return r(function(){Hu(e)&&Gu(t)})}function Hu(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!Me(t,r)}catch{return!0}}function Gu(t){var e=nr(t,1);e!==null&&We(e,t,1,-1)}function mg(t){var e=Oe();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:t},e.queue=t,t=t.dispatch=sf.bind(null,Mt,t),[e.memoizedState,t]}function Eo(t,e,r,o){return t={tag:t,create:e,destroy:r,deps:o,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,e.lastEffect=t)),t}function Uu(){return Ee().memoizedState}function js(t,e,r,o){var s=Oe();Mt.flags|=t,s.memoizedState=Eo(1|e,r,void 0,o===void 0?null:o)}function di(t,e,r,o){var s=Ee();o=o===void 0?null:o;var i=void 0;if($t!==null){var l=$t.memoizedState;if(i=l.destroy,o!==null&&Va(o,l.deps)){s.memoizedState=Eo(e,r,i,o);return}}Mt.flags|=t,s.memoizedState=Eo(1|e,r,i,o)}function fg(t,e){return js(8390656,8,t,e)}function Ka(t,e){return di(2048,8,t,e)}function Vu(t,e){return di(4,2,t,e)}function Yu(t,e){return di(4,4,t,e)}function Qu(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ku(t,e,r){return r=r!=null?r.concat([t]):null,di(4,4,Qu.bind(null,e,t),r)}function Xa(){}function Xu(t,e){var r=Ee();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&Va(e,o[1])?o[0]:(r.memoizedState=[t,e],t)}function Ju(t,e){var r=Ee();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&Va(e,o[1])?o[0]:(t=t(),r.memoizedState=[t,e],t)}function Zu(t,e,r){return Hr&21?(Me(r,e)||(r=nu(),Mt.lanes|=r,Gr|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ge=!0),t.memoizedState=r)}function nf(t,e){var r=zt;zt=r!==0&&4>r?r:4,t(!0);var o=Ni.transition;Ni.transition={};try{t(!1),e()}finally{zt=r,Ni.transition=o}}function qu(){return Ee().memoizedState}function of(t,e,r){var o=xr(t);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},tb(t))eb(e,r);else if(r=Wu(t,e,r,o),r!==null){var s=ne();We(r,t,o,s),rb(r,e,o)}}function sf(t,e,r){var o=xr(t),s={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(tb(t))eb(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var l=e.lastRenderedState,a=i(l,r);if(s.hasEagerState=!0,s.eagerState=a,Me(a,l)){var d=e.interleaved;d===null?(s.next=s,Oa(e)):(s.next=d.next,d.next=s),e.interleaved=s;return}}catch{}finally{}r=Wu(t,e,s,o),r!==null&&(s=ne(),We(r,t,o,s),rb(r,e,o))}}function tb(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function eb(t,e){lo=Vs=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function rb(t,e,r){if(r&4194240){var o=e.lanes;o&=t.pendingLanes,r|=o,e.lanes=r,za(t,r)}}var Ys={readContext:Te,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useInsertionEffect:Zt,useLayoutEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useMutableSource:Zt,useSyncExternalStore:Zt,useId:Zt,unstable_isNewReconciler:!1},lf={readContext:Te,useCallback:function(t,e){return Oe().memoizedState=[t,e===void 0?null:e],t},useContext:Te,useEffect:fg,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,js(4194308,4,Qu.bind(null,e,t),r)},useLayoutEffect:function(t,e){return js(4194308,4,t,e)},useInsertionEffect:function(t,e){return js(4,2,t,e)},useMemo:function(t,e){var r=Oe();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var o=Oe();return e=r!==void 0?r(e):e,o.memoizedState=o.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},o.queue=t,t=t.dispatch=of.bind(null,Mt,t),[o.memoizedState,t]},useRef:function(t){var e=Oe();return t={current:t},e.memoizedState=t},useState:mg,useDebugValue:Xa,useDeferredValue:function(t){return Oe().memoizedState=t},useTransition:function(){var t=mg(!1),e=t[0];return t=nf.bind(null,t[1]),Oe().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var o=Mt,s=Oe();if(At){if(r===void 0)throw Error(H(407));r=r()}else{if(r=e(),Ut===null)throw Error(H(349));Hr&30||Nu(o,e,r)}s.memoizedState=r;var i={value:r,getSnapshot:e};return s.queue=i,fg($u.bind(null,o,i,t),[t]),o.flags|=2048,Eo(9,Ou.bind(null,o,i,r,e),void 0,null),r},useId:function(){var t=Oe(),e=Ut.identifierPrefix;if(At){var r=qe,o=Ze;r=(o&~(1<<32-Ae(o)-1)).toString(32)+r,e=":"+e+"R"+r,r=zo++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=rf++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},af={readContext:Te,useCallback:Xu,useContext:Te,useEffect:Ka,useImperativeHandle:Ku,useInsertionEffect:Vu,useLayoutEffect:Yu,useMemo:Ju,useReducer:Oi,useRef:Uu,useState:function(){return Oi(To)},useDebugValue:Xa,useDeferredValue:function(t){var e=Ee();return Zu(e,$t.memoizedState,t)},useTransition:function(){var t=Oi(To)[0],e=Ee().memoizedState;return[t,e]},useMutableSource:Lu,useSyncExternalStore:Pu,useId:qu,unstable_isNewReconciler:!1},df={readContext:Te,useCallback:Xu,useContext:Te,useEffect:Ka,useImperativeHandle:Ku,useInsertionEffect:Vu,useLayoutEffect:Yu,useMemo:Ju,useReducer:$i,useRef:Uu,useState:function(){return $i(To)},useDebugValue:Xa,useDeferredValue:function(t){var e=Ee();return $t===null?e.memoizedState=t:Zu(e,$t.memoizedState,t)},useTransition:function(){var t=$i(To)[0],e=Ee().memoizedState;return[t,e]},useMutableSource:Lu,useSyncExternalStore:Pu,useId:qu,unstable_isNewReconciler:!1};function De(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function Ll(t,e,r,o){e=t.memoizedState,r=r(o,e),r=r==null?e:_t({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var gi={isMounted:function(t){return(t=t._reactInternals)?Kr(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var o=ne(),s=xr(t),i=tr(o,s);i.payload=e,r!=null&&(i.callback=r),e=vr(t,i,s),e!==null&&(We(e,t,s,o),ks(e,t,s))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var o=ne(),s=xr(t),i=tr(o,s);i.tag=1,i.payload=e,r!=null&&(i.callback=r),e=vr(t,i,s),e!==null&&(We(e,t,s,o),ks(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=ne(),o=xr(t),s=tr(r,o);s.tag=2,e!=null&&(s.callback=e),e=vr(t,s,o),e!==null&&(We(e,t,o,r),ks(e,t,o))}};function hg(t,e,r,o,s,i,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,i,l):e.prototype&&e.prototype.isPureReactComponent?!ko(r,o)||!ko(s,i):!0}function nb(t,e,r){var o=!1,s=jr,i=e.contextType;return typeof i=="object"&&i!==null?i=Te(i):(s=ue(e)?Or:ee.current,o=e.contextTypes,i=(o=o!=null)?Sn(t,s):jr),e=new e(r,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gi,t.stateNode=e,e._reactInternals=t,o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function vg(t,e,r,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,o),e.state!==t&&gi.enqueueReplaceState(e,e.state,null)}function Pl(t,e,r,o){var s=t.stateNode;s.props=r,s.state=t.memoizedState,s.refs={},$a(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Te(i):(i=ue(e)?Or:ee.current,s.context=Sn(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Ll(t,e,i,r),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&gi.enqueueReplaceState(s,s.state,null),Gs(t,r,s,o),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Tn(t,e){try{var r="",o=e;do r+=Mp(o),o=o.return;while(o);var s=r}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Hi(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function Nl(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var gf=typeof WeakMap=="function"?WeakMap:Map;function ob(t,e,r){r=tr(-1,r),r.tag=3,r.payload={element:null};var o=e.value;return r.callback=function(){Ks||(Ks=!0,Xl=o),Nl(t,e)},r}function sb(t,e,r){r=tr(-1,r),r.tag=3;var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var s=e.value;r.payload=function(){return o(s)},r.callback=function(){Nl(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Nl(t,e),typeof o!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),r}function yg(t,e,r){var o=t.pingCache;if(o===null){o=t.pingCache=new gf;var s=new Set;o.set(e,s)}else s=o.get(e),s===void 0&&(s=new Set,o.set(e,s));s.has(r)||(s.add(r),t=Sf.bind(null,t,e,r),e.then(t,t))}function xg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function kg(t,e,r,o,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=tr(-1,1),e.tag=2,vr(r,e,1))),r.lanes|=1),t)}var cf=sr.ReactCurrentOwner,ge=!1;function re(t,e,r,o){e.child=t===null?Au(e,null,r,o):In(e,t.child,r,o)}function wg(t,e,r,o,s){r=r.render;var i=e.ref;return kn(e,s),o=Ya(t,e,r,o,i,s),r=Qa(),t!==null&&!ge?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,or(t,e,s)):(At&&r&&Wa(e),e.flags|=1,re(t,e,o,s),e.child)}function jg(t,e,r,o,s){if(t===null){var i=r.type;return typeof i=="function"&&!od(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=i,ib(t,e,i,o,s)):(t=zs(r.type,null,o,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var l=i.memoizedProps;if(r=r.compare,r=r!==null?r:ko,r(l,o)&&t.ref===e.ref)return or(t,e,s)}return e.flags|=1,t=kr(i,o),t.ref=e.ref,t.return=e,e.child=t}function ib(t,e,r,o,s){if(t!==null){var i=t.memoizedProps;if(ko(i,o)&&t.ref===e.ref)if(ge=!1,e.pendingProps=o=i,(t.lanes&s)!==0)t.flags&131072&&(ge=!0);else return e.lanes=t.lanes,or(t,e,s)}return Ol(t,e,r,o,s)}function lb(t,e,r){var o=e.pendingProps,s=o.children,i=t!==null?t.memoizedState:null;if(o.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(mn,pe),pe|=r;else{if(!(r&1073741824))return t=i!==null?i.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Bt(mn,pe),pe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:r,Bt(mn,pe),pe|=o}else i!==null?(o=i.baseLanes|r,e.memoizedState=null):o=r,Bt(mn,pe),pe|=o;return re(t,e,s,r),e.child}function ab(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function Ol(t,e,r,o,s){var i=ue(r)?Or:ee.current;return i=Sn(e,i),kn(e,s),r=Ya(t,e,r,o,i,s),o=Qa(),t!==null&&!ge?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,or(t,e,s)):(At&&o&&Wa(e),e.flags|=1,re(t,e,r,s),e.child)}function Sg(t,e,r,o,s){if(ue(r)){var i=!0;Ps(e)}else i=!1;if(kn(e,s),e.stateNode===null)Ss(t,e),nb(e,r,o),Pl(e,r,o,s),o=!0;else if(t===null){var l=e.stateNode,a=e.memoizedProps;l.props=a;var d=l.context,g=r.contextType;typeof g=="object"&&g!==null?g=Te(g):(g=ue(r)?Or:ee.current,g=Sn(e,g));var m=r.getDerivedStateFromProps,v=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";v||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==o||d!==g)&&vg(e,l,o,g),dr=!1;var f=e.memoizedState;l.state=f,Gs(e,o,l,s),d=e.memoizedState,a!==o||f!==d||ce.current||dr?(typeof m=="function"&&(Ll(e,r,m,o),d=e.memoizedState),(a=dr||hg(e,r,a,o,f,d,g))?(v||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=d),l.props=o,l.state=d,l.context=g,o=a):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{l=e.stateNode,Mu(t,e),a=e.memoizedProps,g=e.type===e.elementType?a:De(e.type,a),l.props=g,v=e.pendingProps,f=l.context,d=r.contextType,typeof d=="object"&&d!==null?d=Te(d):(d=ue(r)?Or:ee.current,d=Sn(e,d));var j=r.getDerivedStateFromProps;(m=typeof j=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==v||f!==d)&&vg(e,l,o,d),dr=!1,f=e.memoizedState,l.state=f,Gs(e,o,l,s);var k=e.memoizedState;a!==v||f!==k||ce.current||dr?(typeof j=="function"&&(Ll(e,r,j,o),k=e.memoizedState),(g=dr||hg(e,r,g,o,f,k,d)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,k,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,k,d)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=k),l.props=o,l.state=k,l.context=d,o=g):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),o=!1)}return $l(t,e,r,o,i,s)}function $l(t,e,r,o,s,i){ab(t,e);var l=(e.flags&128)!==0;if(!o&&!l)return s&&dg(e,r,!1),or(t,e,i);o=e.stateNode,cf.current=e;var a=l&&typeof r.getDerivedStateFromError!="function"?null:o.render();return e.flags|=1,t!==null&&l?(e.child=In(e,t.child,null,i),e.child=In(e,null,a,i)):re(t,e,a,i),e.memoizedState=o.state,s&&dg(e,r,!0),e.child}function db(t){var e=t.stateNode;e.pendingContext?ag(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ag(t,e.context,!1),Ha(t,e.containerInfo)}function Cg(t,e,r,o,s){return Cn(),_a(s),e.flags|=256,re(t,e,r,o),e.child}var Hl={dehydrated:null,treeContext:null,retryLane:0};function Gl(t){return{baseLanes:t,cachePool:null,transitions:null}}function gb(t,e,r){var o=e.pendingProps,s=Wt.current,i=!1,l=(e.flags&128)!==0,a;if((a=l)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Bt(Wt,s&1),t===null)return Ml(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=o.children,t=o.fallback,i?(o=e.mode,i=e.child,l={mode:"hidden",children:l},!(o&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=bi(l,o,0,null),t=Nr(t,o,r,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Gl(r),e.memoizedState=Hl,t):Ja(e,l));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return uf(t,e,l,o,a,s,r);if(i){i=o.fallback,l=e.mode,s=t.child,a=s.sibling;var d={mode:"hidden",children:o.children};return!(l&1)&&e.child!==s?(o=e.child,o.childLanes=0,o.pendingProps=d,e.deletions=null):(o=kr(s,d),o.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=kr(a,i):(i=Nr(i,l,r,null),i.flags|=2),i.return=e,o.return=e,o.sibling=i,e.child=o,o=i,i=e.child,l=t.child.memoizedState,l=l===null?Gl(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=t.childLanes&~r,e.memoizedState=Hl,o}return i=t.child,t=i.sibling,o=kr(i,{mode:"visible",children:o.children}),!(e.mode&1)&&(o.lanes=r),o.return=e,o.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=o,e.memoizedState=null,o}function Ja(t,e){return e=bi({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function es(t,e,r,o){return o!==null&&_a(o),In(e,t.child,null,r),t=Ja(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function uf(t,e,r,o,s,i,l){if(r)return e.flags&256?(e.flags&=-257,o=Hi(Error(H(422))),es(t,e,l,o)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=o.fallback,s=e.mode,o=bi({mode:"visible",children:o.children},s,0,null),i=Nr(i,s,l,null),i.flags|=2,o.return=e,i.return=e,o.sibling=i,e.child=o,e.mode&1&&In(e,t.child,null,l),e.child.memoizedState=Gl(l),e.memoizedState=Hl,i);if(!(e.mode&1))return es(t,e,l,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var a=o.dgst;return o=a,i=Error(H(419)),o=Hi(i,o,void 0),es(t,e,l,o)}if(a=(l&t.childLanes)!==0,ge||a){if(o=Ut,o!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(o.suspendedLanes|l)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,nr(t,s),We(o,t,s,-1))}return nd(),o=Hi(Error(H(421))),es(t,e,l,o)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=Cf.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,me=hr(s.nextSibling),fe=e,At=!0,Fe=null,t!==null&&(je[Se++]=Ze,je[Se++]=qe,je[Se++]=$r,Ze=t.id,qe=t.overflow,$r=e),e=Ja(e,o.children),e.flags|=4096,e)}function Ig(t,e,r){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),_l(t.return,e,r)}function Gi(t,e,r,o,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=r,i.tailMode=s)}function cb(t,e,r){var o=e.pendingProps,s=o.revealOrder,i=o.tail;if(re(t,e,o.children,r),o=Wt.current,o&2)o=o&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ig(t,r,e);else if(t.tag===19)Ig(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}if(Bt(Wt,o),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(r=e.child,s=null;r!==null;)t=r.alternate,t!==null&&Us(t)===null&&(s=r),r=r.sibling;r=s,r===null?(s=e.child,e.child=null):(s=r.sibling,r.sibling=null),Gi(e,!1,s,r,i);break;case"backwards":for(r=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Us(t)===null){e.child=s;break}t=s.sibling,s.sibling=r,r=s,s=t}Gi(e,!0,r,null,i);break;case"together":Gi(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ss(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function or(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),Gr|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,r=kr(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=kr(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function bf(t,e,r){switch(e.tag){case 3:db(e),Cn();break;case 5:_u(e);break;case 1:ue(e.type)&&Ps(e);break;case 4:Ha(e,e.stateNode.containerInfo);break;case 10:var o=e.type._context,s=e.memoizedProps.value;Bt($s,o._currentValue),o._currentValue=s;break;case 13:if(o=e.memoizedState,o!==null)return o.dehydrated!==null?(Bt(Wt,Wt.current&1),e.flags|=128,null):r&e.child.childLanes?gb(t,e,r):(Bt(Wt,Wt.current&1),t=or(t,e,r),t!==null?t.sibling:null);Bt(Wt,Wt.current&1);break;case 19:if(o=(r&e.childLanes)!==0,t.flags&128){if(o)return cb(t,e,r);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Bt(Wt,Wt.current),o)break;return null;case 22:case 23:return e.lanes=0,lb(t,e,r)}return or(t,e,r)}var ub,Ul,bb,pb;ub=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Ul=function(){};bb=function(t,e,r,o){var s=t.memoizedProps;if(s!==o){t=e.stateNode,_r(Ve.current);var i=null;switch(r){case"input":s=bl(t,s),o=bl(t,o),i=[];break;case"select":s=_t({},s,{value:void 0}),o=_t({},o,{value:void 0}),i=[];break;case"textarea":s=fl(t,s),o=fl(t,o),i=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(t.onclick=_s)}vl(r,o);var l;r=null;for(g in s)if(!o.hasOwnProperty(g)&&s.hasOwnProperty(g)&&s[g]!=null)if(g==="style"){var a=s[g];for(l in a)a.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(po.hasOwnProperty(g)?i||(i=[]):(i=i||[]).push(g,null));for(g in o){var d=o[g];if(a=s!=null?s[g]:void 0,o.hasOwnProperty(g)&&d!==a&&(d!=null||a!=null))if(g==="style")if(a){for(l in a)!a.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in d)d.hasOwnProperty(l)&&a[l]!==d[l]&&(r||(r={}),r[l]=d[l])}else r||(i||(i=[]),i.push(g,r)),r=d;else g==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(i=i||[]).push(g,d)):g==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(g,""+d):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(po.hasOwnProperty(g)?(d!=null&&g==="onScroll"&&Rt("scroll",t),i||a===d||(i=[])):(i=i||[]).push(g,d))}r&&(i=i||[]).push("style",r);var g=i;(e.updateQueue=g)&&(e.flags|=4)}};pb=function(t,e,r,o){r!==o&&(e.flags|=4)};function Un(t,e){if(!At)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(e)for(var s=t.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=o,t.childLanes=r,e}function pf(t,e,r){var o=e.pendingProps;switch(Ma(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return ue(e.type)&&Ls(),qt(e),null;case 3:return o=e.stateNode,zn(),Ft(ce),Ft(ee),Ua(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(qo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fe!==null&&(ql(Fe),Fe=null))),Ul(t,e),qt(e),null;case 5:Ga(e);var s=_r(Io.current);if(r=e.type,t!==null&&e.stateNode!=null)bb(t,e,r,o,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!o){if(e.stateNode===null)throw Error(H(166));return qt(e),null}if(t=_r(Ve.current),qo(e)){o=e.stateNode,r=e.type;var i=e.memoizedProps;switch(o[Ge]=e,o[So]=i,t=(e.mode&1)!==0,r){case"dialog":Rt("cancel",o),Rt("close",o);break;case"iframe":case"object":case"embed":Rt("load",o);break;case"video":case"audio":for(s=0;s<Jn.length;s++)Rt(Jn[s],o);break;case"source":Rt("error",o);break;case"img":case"image":case"link":Rt("error",o),Rt("load",o);break;case"details":Rt("toggle",o);break;case"input":Wd(o,i),Rt("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},Rt("invalid",o);break;case"textarea":_d(o,i),Rt("invalid",o)}vl(r,i),s=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?o.textContent!==a&&(i.suppressHydrationWarning!==!0&&Zo(o.textContent,a,t),s=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Zo(o.textContent,a,t),s=["children",""+a]):po.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Rt("scroll",o)}switch(r){case"input":Go(o),Md(o,i,!0);break;case"textarea":Go(o),Ld(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=_s)}o=s,e.updateQueue=o,o!==null&&(e.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$c(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof o.is=="string"?t=l.createElement(r,{is:o.is}):(t=l.createElement(r),r==="select"&&(l=t,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):t=l.createElementNS(t,r),t[Ge]=e,t[So]=o,ub(t,e,!1,!1),e.stateNode=t;t:{switch(l=yl(r,o),r){case"dialog":Rt("cancel",t),Rt("close",t),s=o;break;case"iframe":case"object":case"embed":Rt("load",t),s=o;break;case"video":case"audio":for(s=0;s<Jn.length;s++)Rt(Jn[s],t);s=o;break;case"source":Rt("error",t),s=o;break;case"img":case"image":case"link":Rt("error",t),Rt("load",t),s=o;break;case"details":Rt("toggle",t),s=o;break;case"input":Wd(t,o),s=bl(t,o),Rt("invalid",t);break;case"option":s=o;break;case"select":t._wrapperState={wasMultiple:!!o.multiple},s=_t({},o,{value:void 0}),Rt("invalid",t);break;case"textarea":_d(t,o),s=fl(t,o),Rt("invalid",t);break;default:s=o}vl(r,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var d=a[i];i==="style"?Uc(t,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Hc(t,d)):i==="children"?typeof d=="string"?(r!=="textarea"||d!=="")&&mo(t,d):typeof d=="number"&&mo(t,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(po.hasOwnProperty(i)?d!=null&&i==="onScroll"&&Rt("scroll",t):d!=null&&ka(t,i,d,l))}switch(r){case"input":Go(t),Md(t,o,!1);break;case"textarea":Go(t),Ld(t);break;case"option":o.value!=null&&t.setAttribute("value",""+wr(o.value));break;case"select":t.multiple=!!o.multiple,i=o.value,i!=null?hn(t,!!o.multiple,i,!1):o.defaultValue!=null&&hn(t,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=_s)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}}o&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)pb(t,e,t.memoizedProps,o);else{if(typeof o!="string"&&e.stateNode===null)throw Error(H(166));if(r=_r(Io.current),_r(Ve.current),qo(e)){if(o=e.stateNode,r=e.memoizedProps,o[Ge]=e,(i=o.nodeValue!==r)&&(t=fe,t!==null))switch(t.tag){case 3:Zo(o.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Zo(o.nodeValue,r,(t.mode&1)!==0)}i&&(e.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[Ge]=e,e.stateNode=o}return qt(e),null;case 13:if(Ft(Wt),o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(At&&me!==null&&e.mode&1&&!(e.flags&128))Ru(),Cn(),e.flags|=98560,i=!1;else if(i=qo(e),o!==null&&o.dehydrated!==null){if(t===null){if(!i)throw Error(H(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(H(317));i[Ge]=e}else Cn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),i=!1}else Fe!==null&&(ql(Fe),Fe=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(o=o!==null,o!==(t!==null&&t.memoizedState!==null)&&o&&(e.child.flags|=8192,e.mode&1&&(t===null||Wt.current&1?Ht===0&&(Ht=3):nd())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return zn(),Ul(t,e),t===null&&wo(e.stateNode.containerInfo),qt(e),null;case 10:return Na(e.type._context),qt(e),null;case 17:return ue(e.type)&&Ls(),qt(e),null;case 19:if(Ft(Wt),i=e.memoizedState,i===null)return qt(e),null;if(o=(e.flags&128)!==0,l=i.rendering,l===null)if(o)Un(i,!1);else{if(Ht!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=Us(t),l!==null){for(e.flags|=128,Un(i,!1),o=l.updateQueue,o!==null&&(e.updateQueue=o,e.flags|=4),e.subtreeFlags=0,o=r,r=e.child;r!==null;)i=r,t=o,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,t=l.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return Bt(Wt,Wt.current&1|2),e.child}t=t.sibling}i.tail!==null&&Pt()>En&&(e.flags|=128,o=!0,Un(i,!1),e.lanes=4194304)}else{if(!o)if(t=Us(l),t!==null){if(e.flags|=128,o=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),Un(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!At)return qt(e),null}else 2*Pt()-i.renderingStartTime>En&&r!==1073741824&&(e.flags|=128,o=!0,Un(i,!1),e.lanes=4194304);i.isBackwards?(l.sibling=e.child,e.child=l):(r=i.last,r!==null?r.sibling=l:e.child=l,i.last=l)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Pt(),e.sibling=null,r=Wt.current,Bt(Wt,o?r&1|2:r&1),e):(qt(e),null);case 22:case 23:return rd(),o=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==o&&(e.flags|=8192),o&&e.mode&1?pe&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(H(156,e.tag))}function mf(t,e){switch(Ma(e),e.tag){case 1:return ue(e.type)&&Ls(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zn(),Ft(ce),Ft(ee),Ua(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ga(e),null;case 13:if(Ft(Wt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(H(340));Cn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ft(Wt),null;case 4:return zn(),null;case 10:return Na(e.type._context),null;case 22:case 23:return rd(),null;case 24:return null;default:return null}}var rs=!1,te=!1,ff=typeof WeakSet=="function"?WeakSet:Set,nt=null;function pn(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){Lt(t,e,o)}else r.current=null}function Vl(t,e,r){try{r()}catch(o){Lt(t,e,o)}}var zg=!1;function hf(t,e){if(El=As,t=yu(),Aa(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var s=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break t}var l=0,a=-1,d=-1,g=0,m=0,v=t,f=null;e:for(;;){for(var j;v!==r||s!==0&&v.nodeType!==3||(a=l+s),v!==i||o!==0&&v.nodeType!==3||(d=l+o),v.nodeType===3&&(l+=v.nodeValue.length),(j=v.firstChild)!==null;)f=v,v=j;for(;;){if(v===t)break e;if(f===r&&++g===s&&(a=l),f===i&&++m===o&&(d=l),(j=v.nextSibling)!==null)break;v=f,f=v.parentNode}v=j}r=a===-1||d===-1?null:{start:a,end:d}}else r=null}r=r||{start:0,end:0}}else r=null;for(Bl={focusedElem:t,selectionRange:r},As=!1,nt=e;nt!==null;)if(e=nt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,nt=t;else for(;nt!==null;){e=nt;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var S=k.memoizedProps,T=k.memoizedState,b=e.stateNode,c=b.getSnapshotBeforeUpdate(e.elementType===e.type?S:De(e.type,S),T);b.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var u=e.stateNode.containerInfo;u.nodeType===1?u.textContent="":u.nodeType===9&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(x){Lt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,nt=t;break}nt=e.return}return k=zg,zg=!1,k}function ao(t,e,r){var o=e.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Vl(e,r,i)}s=s.next}while(s!==o)}}function ci(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var o=r.create;r.destroy=o()}r=r.next}while(r!==e)}}function Yl(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function mb(t){var e=t.alternate;e!==null&&(t.alternate=null,mb(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ge],delete e[So],delete e[Fl],delete e[Zm],delete e[qm])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function fb(t){return t.tag===5||t.tag===3||t.tag===4}function Tg(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||fb(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ql(t,e,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=_s));else if(o!==4&&(t=t.child,t!==null))for(Ql(t,e,r),t=t.sibling;t!==null;)Ql(t,e,r),t=t.sibling}function Kl(t,e,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(o!==4&&(t=t.child,t!==null))for(Kl(t,e,r),t=t.sibling;t!==null;)Kl(t,e,r),t=t.sibling}var Qt=null,Re=!1;function lr(t,e,r){for(r=r.child;r!==null;)hb(t,e,r),r=r.sibling}function hb(t,e,r){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(ni,r)}catch{}switch(r.tag){case 5:te||pn(r,e);case 6:var o=Qt,s=Re;Qt=null,lr(t,e,r),Qt=o,Re=s,Qt!==null&&(Re?(t=Qt,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Qt.removeChild(r.stateNode));break;case 18:Qt!==null&&(Re?(t=Qt,r=r.stateNode,t.nodeType===8?_i(t.parentNode,r):t.nodeType===1&&_i(t,r),yo(t)):_i(Qt,r.stateNode));break;case 4:o=Qt,s=Re,Qt=r.stateNode.containerInfo,Re=!0,lr(t,e,r),Qt=o,Re=s;break;case 0:case 11:case 14:case 15:if(!te&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var i=s,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Vl(r,e,l),s=s.next}while(s!==o)}lr(t,e,r);break;case 1:if(!te&&(pn(r,e),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(a){Lt(r,e,a)}lr(t,e,r);break;case 21:lr(t,e,r);break;case 22:r.mode&1?(te=(o=te)||r.memoizedState!==null,lr(t,e,r),te=o):lr(t,e,r);break;default:lr(t,e,r)}}function Eg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new ff),e.forEach(function(o){var s=If.bind(null,t,o);r.has(o)||(r.add(o),o.then(s,s))})}}function Be(t,e){var r=e.deletions;if(r!==null)for(var o=0;o<r.length;o++){var s=r[o];try{var i=t,l=e,a=l;t:for(;a!==null;){switch(a.tag){case 5:Qt=a.stateNode,Re=!1;break t;case 3:Qt=a.stateNode.containerInfo,Re=!0;break t;case 4:Qt=a.stateNode.containerInfo,Re=!0;break t}a=a.return}if(Qt===null)throw Error(H(160));hb(i,l,s),Qt=null,Re=!1;var d=s.alternate;d!==null&&(d.return=null),s.return=null}catch(g){Lt(s,e,g)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)vb(e,t),e=e.sibling}function vb(t,e){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Be(e,t),_e(t),o&4){try{ao(3,t,t.return),ci(3,t)}catch(S){Lt(t,t.return,S)}try{ao(5,t,t.return)}catch(S){Lt(t,t.return,S)}}break;case 1:Be(e,t),_e(t),o&512&&r!==null&&pn(r,r.return);break;case 5:if(Be(e,t),_e(t),o&512&&r!==null&&pn(r,r.return),t.flags&32){var s=t.stateNode;try{mo(s,"")}catch(S){Lt(t,t.return,S)}}if(o&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,l=r!==null?r.memoizedProps:i,a=t.type,d=t.updateQueue;if(t.updateQueue=null,d!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Nc(s,i),yl(a,l);var g=yl(a,i);for(l=0;l<d.length;l+=2){var m=d[l],v=d[l+1];m==="style"?Uc(s,v):m==="dangerouslySetInnerHTML"?Hc(s,v):m==="children"?mo(s,v):ka(s,m,v,g)}switch(a){case"input":pl(s,i);break;case"textarea":Oc(s,i);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var j=i.value;j!=null?hn(s,!!i.multiple,j,!1):f!==!!i.multiple&&(i.defaultValue!=null?hn(s,!!i.multiple,i.defaultValue,!0):hn(s,!!i.multiple,i.multiple?[]:"",!1))}s[So]=i}catch(S){Lt(t,t.return,S)}}break;case 6:if(Be(e,t),_e(t),o&4){if(t.stateNode===null)throw Error(H(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(S){Lt(t,t.return,S)}}break;case 3:if(Be(e,t),_e(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{yo(e.containerInfo)}catch(S){Lt(t,t.return,S)}break;case 4:Be(e,t),_e(t);break;case 13:Be(e,t),_e(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(td=Pt())),o&4&&Eg(t);break;case 22:if(m=r!==null&&r.memoizedState!==null,t.mode&1?(te=(g=te)||m,Be(e,t),te=g):Be(e,t),_e(t),o&8192){if(g=t.memoizedState!==null,(t.stateNode.isHidden=g)&&!m&&t.mode&1)for(nt=t,m=t.child;m!==null;){for(v=nt=m;nt!==null;){switch(f=nt,j=f.child,f.tag){case 0:case 11:case 14:case 15:ao(4,f,f.return);break;case 1:pn(f,f.return);var k=f.stateNode;if(typeof k.componentWillUnmount=="function"){o=f,r=f.return;try{e=o,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(S){Lt(o,r,S)}}break;case 5:pn(f,f.return);break;case 22:if(f.memoizedState!==null){Dg(v);continue}}j!==null?(j.return=f,nt=j):Dg(v)}m=m.sibling}t:for(m=null,v=t;;){if(v.tag===5){if(m===null){m=v;try{s=v.stateNode,g?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=v.stateNode,d=v.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=Gc("display",l))}catch(S){Lt(t,t.return,S)}}}else if(v.tag===6){if(m===null)try{v.stateNode.nodeValue=g?"":v.memoizedProps}catch(S){Lt(t,t.return,S)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===t)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===t)break t;for(;v.sibling===null;){if(v.return===null||v.return===t)break t;m===v&&(m=null),v=v.return}m===v&&(m=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Be(e,t),_e(t),o&4&&Eg(t);break;case 21:break;default:Be(e,t),_e(t)}}function _e(t){var e=t.flags;if(e&2){try{t:{for(var r=t.return;r!==null;){if(fb(r)){var o=r;break t}r=r.return}throw Error(H(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&(mo(s,""),o.flags&=-33);var i=Tg(t);Kl(t,i,s);break;case 3:case 4:var l=o.stateNode.containerInfo,a=Tg(t);Ql(t,a,l);break;default:throw Error(H(161))}}catch(d){Lt(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vf(t,e,r){nt=t,yb(t)}function yb(t,e,r){for(var o=(t.mode&1)!==0;nt!==null;){var s=nt,i=s.child;if(s.tag===22&&o){var l=s.memoizedState!==null||rs;if(!l){var a=s.alternate,d=a!==null&&a.memoizedState!==null||te;a=rs;var g=te;if(rs=l,(te=d)&&!g)for(nt=s;nt!==null;)l=nt,d=l.child,l.tag===22&&l.memoizedState!==null?Rg(s):d!==null?(d.return=l,nt=d):Rg(s);for(;i!==null;)nt=i,yb(i),i=i.sibling;nt=s,rs=a,te=g}Bg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,nt=i):Bg(t)}}function Bg(t){for(;nt!==null;){var e=nt;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:te||ci(5,e);break;case 1:var o=e.stateNode;if(e.flags&4&&!te)if(r===null)o.componentDidMount();else{var s=e.elementType===e.type?r.memoizedProps:De(e.type,r.memoizedProps);o.componentDidUpdate(s,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&pg(e,i,o);break;case 3:var l=e.updateQueue;if(l!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}pg(e,l,r)}break;case 5:var a=e.stateNode;if(r===null&&e.flags&4){r=a;var d=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&r.focus();break;case"img":d.src&&(r.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var g=e.alternate;if(g!==null){var m=g.memoizedState;if(m!==null){var v=m.dehydrated;v!==null&&yo(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}te||e.flags&512&&Yl(e)}catch(f){Lt(e,e.return,f)}}if(e===t){nt=null;break}if(r=e.sibling,r!==null){r.return=e.return,nt=r;break}nt=e.return}}function Dg(t){for(;nt!==null;){var e=nt;if(e===t){nt=null;break}var r=e.sibling;if(r!==null){r.return=e.return,nt=r;break}nt=e.return}}function Rg(t){for(;nt!==null;){var e=nt;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{ci(4,e)}catch(d){Lt(e,r,d)}break;case 1:var o=e.stateNode;if(typeof o.componentDidMount=="function"){var s=e.return;try{o.componentDidMount()}catch(d){Lt(e,s,d)}}var i=e.return;try{Yl(e)}catch(d){Lt(e,i,d)}break;case 5:var l=e.return;try{Yl(e)}catch(d){Lt(e,l,d)}}}catch(d){Lt(e,e.return,d)}if(e===t){nt=null;break}var a=e.sibling;if(a!==null){a.return=e.return,nt=a;break}nt=e.return}}var yf=Math.ceil,Qs=sr.ReactCurrentDispatcher,Za=sr.ReactCurrentOwner,ze=sr.ReactCurrentBatchConfig,St=0,Ut=null,Ot=null,Kt=0,pe=0,mn=Cr(0),Ht=0,Bo=null,Gr=0,ui=0,qa=0,go=null,de=null,td=0,En=1/0,Ke=null,Ks=!1,Xl=null,yr=null,ns=!1,br=null,Xs=0,co=0,Jl=null,Cs=-1,Is=0;function ne(){return St&6?Pt():Cs!==-1?Cs:Cs=Pt()}function xr(t){return t.mode&1?St&2&&Kt!==0?Kt&-Kt:ef.transition!==null?(Is===0&&(Is=nu()),Is):(t=zt,t!==0||(t=window.event,t=t===void 0?16:gu(t.type)),t):1}function We(t,e,r,o){if(50<co)throw co=0,Jl=null,Error(H(185));Ao(t,r,o),(!(St&2)||t!==Ut)&&(t===Ut&&(!(St&2)&&(ui|=r),Ht===4&&cr(t,Kt)),be(t,o),r===1&&St===0&&!(e.mode&1)&&(En=Pt()+500,ai&&Ir()))}function be(t,e){var r=t.callbackNode;em(t,e);var o=Fs(t,t===Ut?Kt:0);if(o===0)r!==null&&Od(r),t.callbackNode=null,t.callbackPriority=0;else if(e=o&-o,t.callbackPriority!==e){if(r!=null&&Od(r),e===1)t.tag===0?tf(Fg.bind(null,t)):Eu(Fg.bind(null,t)),Xm(function(){!(St&6)&&Ir()}),r=null;else{switch(ou(o)){case 1:r=Ia;break;case 4:r=eu;break;case 16:r=Rs;break;case 536870912:r=ru;break;default:r=Rs}r=zb(r,xb.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function xb(t,e){if(Cs=-1,Is=0,St&6)throw Error(H(327));var r=t.callbackNode;if(wn()&&t.callbackNode!==r)return null;var o=Fs(t,t===Ut?Kt:0);if(o===0)return null;if(o&30||o&t.expiredLanes||e)e=Js(t,o);else{e=o;var s=St;St|=2;var i=wb();(Ut!==t||Kt!==e)&&(Ke=null,En=Pt()+500,Pr(t,e));do try{wf();break}catch(a){kb(t,a)}while(!0);Pa(),Qs.current=i,St=s,Ot!==null?e=0:(Ut=null,Kt=0,e=Ht)}if(e!==0){if(e===2&&(s=Sl(t),s!==0&&(o=s,e=Zl(t,s))),e===1)throw r=Bo,Pr(t,0),cr(t,o),be(t,Pt()),r;if(e===6)cr(t,o);else{if(s=t.current.alternate,!(o&30)&&!xf(s)&&(e=Js(t,o),e===2&&(i=Sl(t),i!==0&&(o=i,e=Zl(t,i))),e===1))throw r=Bo,Pr(t,0),cr(t,o),be(t,Pt()),r;switch(t.finishedWork=s,t.finishedLanes=o,e){case 0:case 1:throw Error(H(345));case 2:Dr(t,de,Ke);break;case 3:if(cr(t,o),(o&130023424)===o&&(e=td+500-Pt(),10<e)){if(Fs(t,0)!==0)break;if(s=t.suspendedLanes,(s&o)!==o){ne(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Rl(Dr.bind(null,t,de,Ke),e);break}Dr(t,de,Ke);break;case 4:if(cr(t,o),(o&4194240)===o)break;for(e=t.eventTimes,s=-1;0<o;){var l=31-Ae(o);i=1<<l,l=e[l],l>s&&(s=l),o&=~i}if(o=s,o=Pt()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*yf(o/1960))-o,10<o){t.timeoutHandle=Rl(Dr.bind(null,t,de,Ke),o);break}Dr(t,de,Ke);break;case 5:Dr(t,de,Ke);break;default:throw Error(H(329))}}}return be(t,Pt()),t.callbackNode===r?xb.bind(null,t):null}function Zl(t,e){var r=go;return t.current.memoizedState.isDehydrated&&(Pr(t,e).flags|=256),t=Js(t,e),t!==2&&(e=de,de=r,e!==null&&ql(e)),t}function ql(t){de===null?de=t:de.push.apply(de,t)}function xf(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var s=r[o],i=s.getSnapshot;s=s.value;try{if(!Me(i(),s))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cr(t,e){for(e&=~qa,e&=~ui,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-Ae(e),o=1<<r;t[r]=-1,e&=~o}}function Fg(t){if(St&6)throw Error(H(327));wn();var e=Fs(t,0);if(!(e&1))return be(t,Pt()),null;var r=Js(t,e);if(t.tag!==0&&r===2){var o=Sl(t);o!==0&&(e=o,r=Zl(t,o))}if(r===1)throw r=Bo,Pr(t,0),cr(t,e),be(t,Pt()),r;if(r===6)throw Error(H(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dr(t,de,Ke),be(t,Pt()),null}function ed(t,e){var r=St;St|=1;try{return t(e)}finally{St=r,St===0&&(En=Pt()+500,ai&&Ir())}}function Ur(t){br!==null&&br.tag===0&&!(St&6)&&wn();var e=St;St|=1;var r=ze.transition,o=zt;try{if(ze.transition=null,zt=1,t)return t()}finally{zt=o,ze.transition=r,St=e,!(St&6)&&Ir()}}function rd(){pe=mn.current,Ft(mn)}function Pr(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,Km(r)),Ot!==null)for(r=Ot.return;r!==null;){var o=r;switch(Ma(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Ls();break;case 3:zn(),Ft(ce),Ft(ee),Ua();break;case 5:Ga(o);break;case 4:zn();break;case 13:Ft(Wt);break;case 19:Ft(Wt);break;case 10:Na(o.type._context);break;case 22:case 23:rd()}r=r.return}if(Ut=t,Ot=t=kr(t.current,null),Kt=pe=e,Ht=0,Bo=null,qa=ui=Gr=0,de=go=null,Mr!==null){for(e=0;e<Mr.length;e++)if(r=Mr[e],o=r.interleaved,o!==null){r.interleaved=null;var s=o.next,i=r.pending;if(i!==null){var l=i.next;i.next=s,o.next=l}r.pending=o}Mr=null}return t}function kb(t,e){do{var r=Ot;try{if(Pa(),ws.current=Ys,Vs){for(var o=Mt.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}Vs=!1}if(Hr=0,Gt=$t=Mt=null,lo=!1,zo=0,Za.current=null,r===null||r.return===null){Ht=1,Bo=e,Ot=null;break}t:{var i=t,l=r.return,a=r,d=e;if(e=Kt,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var g=d,m=a,v=m.tag;if(!(m.mode&1)&&(v===0||v===11||v===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var j=xg(l);if(j!==null){j.flags&=-257,kg(j,l,a,i,e),j.mode&1&&yg(i,g,e),e=j,d=g;var k=e.updateQueue;if(k===null){var S=new Set;S.add(d),e.updateQueue=S}else k.add(d);break t}else{if(!(e&1)){yg(i,g,e),nd();break t}d=Error(H(426))}}else if(At&&a.mode&1){var T=xg(l);if(T!==null){!(T.flags&65536)&&(T.flags|=256),kg(T,l,a,i,e),_a(Tn(d,a));break t}}i=d=Tn(d,a),Ht!==4&&(Ht=2),go===null?go=[i]:go.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var b=ob(i,d,e);bg(i,b);break t;case 1:a=d;var c=i.type,u=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(yr===null||!yr.has(u)))){i.flags|=65536,e&=-e,i.lanes|=e;var x=sb(i,a,e);bg(i,x);break t}}i=i.return}while(i!==null)}Sb(r)}catch(y){e=y,Ot===r&&r!==null&&(Ot=r=r.return);continue}break}while(!0)}function wb(){var t=Qs.current;return Qs.current=Ys,t===null?Ys:t}function nd(){(Ht===0||Ht===3||Ht===2)&&(Ht=4),Ut===null||!(Gr&268435455)&&!(ui&268435455)||cr(Ut,Kt)}function Js(t,e){var r=St;St|=2;var o=wb();(Ut!==t||Kt!==e)&&(Ke=null,Pr(t,e));do try{kf();break}catch(s){kb(t,s)}while(!0);if(Pa(),St=r,Qs.current=o,Ot!==null)throw Error(H(261));return Ut=null,Kt=0,Ht}function kf(){for(;Ot!==null;)jb(Ot)}function wf(){for(;Ot!==null&&!Vp();)jb(Ot)}function jb(t){var e=Ib(t.alternate,t,pe);t.memoizedProps=t.pendingProps,e===null?Sb(t):Ot=e,Za.current=null}function Sb(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=mf(r,e),r!==null){r.flags&=32767,Ot=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ht=6,Ot=null;return}}else if(r=pf(r,e,pe),r!==null){Ot=r;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=t}while(e!==null);Ht===0&&(Ht=5)}function Dr(t,e,r){var o=zt,s=ze.transition;try{ze.transition=null,zt=1,jf(t,e,r,o)}finally{ze.transition=s,zt=o}return null}function jf(t,e,r,o){do wn();while(br!==null);if(St&6)throw Error(H(327));r=t.finishedWork;var s=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(H(177));t.callbackNode=null,t.callbackPriority=0;var i=r.lanes|r.childLanes;if(rm(t,i),t===Ut&&(Ot=Ut=null,Kt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ns||(ns=!0,zb(Rs,function(){return wn(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=ze.transition,ze.transition=null;var l=zt;zt=1;var a=St;St|=4,Za.current=null,hf(t,r),vb(r,t),$m(Bl),As=!!El,Bl=El=null,t.current=r,vf(r),Yp(),St=a,zt=l,ze.transition=i}else t.current=r;if(ns&&(ns=!1,br=t,Xs=s),i=t.pendingLanes,i===0&&(yr=null),Xp(r.stateNode),be(t,Pt()),e!==null)for(o=t.onRecoverableError,r=0;r<e.length;r++)s=e[r],o(s.value,{componentStack:s.stack,digest:s.digest});if(Ks)throw Ks=!1,t=Xl,Xl=null,t;return Xs&1&&t.tag!==0&&wn(),i=t.pendingLanes,i&1?t===Jl?co++:(co=0,Jl=t):co=0,Ir(),null}function wn(){if(br!==null){var t=ou(Xs),e=ze.transition,r=zt;try{if(ze.transition=null,zt=16>t?16:t,br===null)var o=!1;else{if(t=br,br=null,Xs=0,St&6)throw Error(H(331));var s=St;for(St|=4,nt=t.current;nt!==null;){var i=nt,l=i.child;if(nt.flags&16){var a=i.deletions;if(a!==null){for(var d=0;d<a.length;d++){var g=a[d];for(nt=g;nt!==null;){var m=nt;switch(m.tag){case 0:case 11:case 15:ao(8,m,i)}var v=m.child;if(v!==null)v.return=m,nt=v;else for(;nt!==null;){m=nt;var f=m.sibling,j=m.return;if(mb(m),m===g){nt=null;break}if(f!==null){f.return=j,nt=f;break}nt=j}}}var k=i.alternate;if(k!==null){var S=k.child;if(S!==null){k.child=null;do{var T=S.sibling;S.sibling=null,S=T}while(S!==null)}}nt=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,nt=l;else t:for(;nt!==null;){if(i=nt,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ao(9,i,i.return)}var b=i.sibling;if(b!==null){b.return=i.return,nt=b;break t}nt=i.return}}var c=t.current;for(nt=c;nt!==null;){l=nt;var u=l.child;if(l.subtreeFlags&2064&&u!==null)u.return=l,nt=u;else t:for(l=c;nt!==null;){if(a=nt,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ci(9,a)}}catch(y){Lt(a,a.return,y)}if(a===l){nt=null;break t}var x=a.sibling;if(x!==null){x.return=a.return,nt=x;break t}nt=a.return}}if(St=s,Ir(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(ni,t)}catch{}o=!0}return o}finally{zt=r,ze.transition=e}}return!1}function Ag(t,e,r){e=Tn(r,e),e=ob(t,e,1),t=vr(t,e,1),e=ne(),t!==null&&(Ao(t,1,e),be(t,e))}function Lt(t,e,r){if(t.tag===3)Ag(t,t,r);else for(;e!==null;){if(e.tag===3){Ag(e,t,r);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(yr===null||!yr.has(o))){t=Tn(r,t),t=sb(e,t,1),e=vr(e,t,1),t=ne(),e!==null&&(Ao(e,1,t),be(e,t));break}}e=e.return}}function Sf(t,e,r){var o=t.pingCache;o!==null&&o.delete(e),e=ne(),t.pingedLanes|=t.suspendedLanes&r,Ut===t&&(Kt&r)===r&&(Ht===4||Ht===3&&(Kt&130023424)===Kt&&500>Pt()-td?Pr(t,0):qa|=r),be(t,e)}function Cb(t,e){e===0&&(t.mode&1?(e=Yo,Yo<<=1,!(Yo&130023424)&&(Yo=4194304)):e=1);var r=ne();t=nr(t,e),t!==null&&(Ao(t,e,r),be(t,r))}function Cf(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),Cb(t,r)}function If(t,e){var r=0;switch(t.tag){case 13:var o=t.stateNode,s=t.memoizedState;s!==null&&(r=s.retryLane);break;case 19:o=t.stateNode;break;default:throw Error(H(314))}o!==null&&o.delete(e),Cb(t,r)}var Ib;Ib=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||ce.current)ge=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return ge=!1,bf(t,e,r);ge=!!(t.flags&131072)}else ge=!1,At&&e.flags&1048576&&Bu(e,Os,e.index);switch(e.lanes=0,e.tag){case 2:var o=e.type;Ss(t,e),t=e.pendingProps;var s=Sn(e,ee.current);kn(e,r),s=Ya(null,e,o,t,s,r);var i=Qa();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ue(o)?(i=!0,Ps(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,$a(e),s.updater=gi,e.stateNode=s,s._reactInternals=e,Pl(e,o,t,r),e=$l(null,e,o,!0,i,r)):(e.tag=0,At&&i&&Wa(e),re(null,e,s,r),e=e.child),e;case 16:o=e.elementType;t:{switch(Ss(t,e),t=e.pendingProps,s=o._init,o=s(o._payload),e.type=o,s=e.tag=Tf(o),t=De(o,t),s){case 0:e=Ol(null,e,o,t,r);break t;case 1:e=Sg(null,e,o,t,r);break t;case 11:e=wg(null,e,o,t,r);break t;case 14:e=jg(null,e,o,De(o.type,t),r);break t}throw Error(H(306,o,""))}return e;case 0:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:De(o,s),Ol(t,e,o,s,r);case 1:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:De(o,s),Sg(t,e,o,s,r);case 3:t:{if(db(e),t===null)throw Error(H(387));o=e.pendingProps,i=e.memoizedState,s=i.element,Mu(t,e),Gs(e,o,null,r);var l=e.memoizedState;if(o=l.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Tn(Error(H(423)),e),e=Cg(t,e,o,r,s);break t}else if(o!==s){s=Tn(Error(H(424)),e),e=Cg(t,e,o,r,s);break t}else for(me=hr(e.stateNode.containerInfo.firstChild),fe=e,At=!0,Fe=null,r=Au(e,null,o,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Cn(),o===s){e=or(t,e,r);break t}re(t,e,o,r)}e=e.child}return e;case 5:return _u(e),t===null&&Ml(e),o=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,l=s.children,Dl(o,s)?l=null:i!==null&&Dl(o,i)&&(e.flags|=32),ab(t,e),re(t,e,l,r),e.child;case 6:return t===null&&Ml(e),null;case 13:return gb(t,e,r);case 4:return Ha(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=In(e,null,o,r):re(t,e,o,r),e.child;case 11:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:De(o,s),wg(t,e,o,s,r);case 7:return re(t,e,e.pendingProps,r),e.child;case 8:return re(t,e,e.pendingProps.children,r),e.child;case 12:return re(t,e,e.pendingProps.children,r),e.child;case 10:t:{if(o=e.type._context,s=e.pendingProps,i=e.memoizedProps,l=s.value,Bt($s,o._currentValue),o._currentValue=l,i!==null)if(Me(i.value,l)){if(i.children===s.children&&!ce.current){e=or(t,e,r);break t}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var d=a.firstContext;d!==null;){if(d.context===o){if(i.tag===1){d=tr(-1,r&-r),d.tag=2;var g=i.updateQueue;if(g!==null){g=g.shared;var m=g.pending;m===null?d.next=d:(d.next=m.next,m.next=d),g.pending=d}}i.lanes|=r,d=i.alternate,d!==null&&(d.lanes|=r),_l(i.return,r,e),a.lanes|=r;break}d=d.next}}else if(i.tag===10)l=i.type===e.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(H(341));l.lanes|=r,a=l.alternate,a!==null&&(a.lanes|=r),_l(l,r,e),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===e){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}re(t,e,s.children,r),e=e.child}return e;case 9:return s=e.type,o=e.pendingProps.children,kn(e,r),s=Te(s),o=o(s),e.flags|=1,re(t,e,o,r),e.child;case 14:return o=e.type,s=De(o,e.pendingProps),s=De(o.type,s),jg(t,e,o,s,r);case 15:return ib(t,e,e.type,e.pendingProps,r);case 17:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:De(o,s),Ss(t,e),e.tag=1,ue(o)?(t=!0,Ps(e)):t=!1,kn(e,r),nb(e,o,s),Pl(e,o,s,r),$l(null,e,o,!0,t,r);case 19:return cb(t,e,r);case 22:return lb(t,e,r)}throw Error(H(156,e.tag))};function zb(t,e){return tu(t,e)}function zf(t,e,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(t,e,r,o){return new zf(t,e,r,o)}function od(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Tf(t){if(typeof t=="function")return od(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ja)return 11;if(t===Sa)return 14}return 2}function kr(t,e){var r=t.alternate;return r===null?(r=Ce(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function zs(t,e,r,o,s,i){var l=2;if(o=t,typeof t=="function")od(t)&&(l=1);else if(typeof t=="string")l=5;else t:switch(t){case on:return Nr(r.children,s,i,e);case wa:l=8,s|=8;break;case dl:return t=Ce(12,r,e,s|2),t.elementType=dl,t.lanes=i,t;case gl:return t=Ce(13,r,e,s),t.elementType=gl,t.lanes=i,t;case cl:return t=Ce(19,r,e,s),t.elementType=cl,t.lanes=i,t;case _c:return bi(r,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Wc:l=10;break t;case Mc:l=9;break t;case ja:l=11;break t;case Sa:l=14;break t;case ar:l=16,o=null;break t}throw Error(H(130,t==null?t:typeof t,""))}return e=Ce(l,r,e,s),e.elementType=t,e.type=o,e.lanes=i,e}function Nr(t,e,r,o){return t=Ce(7,t,o,e),t.lanes=r,t}function bi(t,e,r,o){return t=Ce(22,t,o,e),t.elementType=_c,t.lanes=r,t.stateNode={isHidden:!1},t}function Ui(t,e,r){return t=Ce(6,t,null,e),t.lanes=r,t}function Vi(t,e,r){return e=Ce(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ef(t,e,r,o,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ii(0),this.expirationTimes=Ii(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ii(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function sd(t,e,r,o,s,i,l,a,d){return t=new Ef(t,e,r,a,d),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Ce(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},$a(i),t}function Bf(t,e,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nn,key:o==null?null:""+o,children:t,containerInfo:e,implementation:r}}function Tb(t){if(!t)return jr;t=t._reactInternals;t:{if(Kr(t)!==t||t.tag!==1)throw Error(H(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break t;case 1:if(ue(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break t}}e=e.return}while(e!==null);throw Error(H(171))}if(t.tag===1){var r=t.type;if(ue(r))return Tu(t,r,e)}return e}function Eb(t,e,r,o,s,i,l,a,d){return t=sd(r,o,!0,t,s,i,l,a,d),t.context=Tb(null),r=t.current,o=ne(),s=xr(r),i=tr(o,s),i.callback=e??null,vr(r,i,s),t.current.lanes=s,Ao(t,s,o),be(t,o),t}function pi(t,e,r,o){var s=e.current,i=ne(),l=xr(s);return r=Tb(r),e.context===null?e.context=r:e.pendingContext=r,e=tr(i,l),e.payload={element:t},o=o===void 0?null:o,o!==null&&(e.callback=o),t=vr(s,e,l),t!==null&&(We(t,s,l,i),ks(t,s,l)),l}function Zs(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function id(t,e){Wg(t,e),(t=t.alternate)&&Wg(t,e)}function Df(){return null}var Bb=typeof reportError=="function"?reportError:function(t){console.error(t)};function ld(t){this._internalRoot=t}mi.prototype.render=ld.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(H(409));pi(t,e,null,null)};mi.prototype.unmount=ld.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ur(function(){pi(null,t,null,null)}),e[rr]=null}};function mi(t){this._internalRoot=t}mi.prototype.unstable_scheduleHydration=function(t){if(t){var e=lu();t={blockedOn:null,target:t,priority:e};for(var r=0;r<gr.length&&e!==0&&e<gr[r].priority;r++);gr.splice(r,0,t),r===0&&du(t)}};function ad(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fi(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mg(){}function Rf(t,e,r,o,s){if(s){if(typeof o=="function"){var i=o;o=function(){var g=Zs(l);i.call(g)}}var l=Eb(e,o,t,0,null,!1,!1,"",Mg);return t._reactRootContainer=l,t[rr]=l.current,wo(t.nodeType===8?t.parentNode:t),Ur(),l}for(;s=t.lastChild;)t.removeChild(s);if(typeof o=="function"){var a=o;o=function(){var g=Zs(d);a.call(g)}}var d=sd(t,0,!1,null,null,!1,!1,"",Mg);return t._reactRootContainer=d,t[rr]=d.current,wo(t.nodeType===8?t.parentNode:t),Ur(function(){pi(e,d,r,o)}),d}function hi(t,e,r,o,s){var i=r._reactRootContainer;if(i){var l=i;if(typeof s=="function"){var a=s;s=function(){var d=Zs(l);a.call(d)}}pi(e,l,t,s)}else l=Rf(r,e,t,s,o);return Zs(l)}su=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Xn(e.pendingLanes);r!==0&&(za(e,r|1),be(e,Pt()),!(St&6)&&(En=Pt()+500,Ir()))}break;case 13:Ur(function(){var o=nr(t,1);if(o!==null){var s=ne();We(o,t,1,s)}}),id(t,1)}};Ta=function(t){if(t.tag===13){var e=nr(t,134217728);if(e!==null){var r=ne();We(e,t,134217728,r)}id(t,134217728)}};iu=function(t){if(t.tag===13){var e=xr(t),r=nr(t,e);if(r!==null){var o=ne();We(r,t,e,o)}id(t,e)}};lu=function(){return zt};au=function(t,e){var r=zt;try{return zt=t,e()}finally{zt=r}};kl=function(t,e,r){switch(e){case"input":if(pl(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var o=r[e];if(o!==t&&o.form===t.form){var s=li(o);if(!s)throw Error(H(90));Pc(o),pl(o,s)}}}break;case"textarea":Oc(t,r);break;case"select":e=r.value,e!=null&&hn(t,!!r.multiple,e,!1)}};Qc=ed;Kc=Ur;var Ff={usingClientEntryPoint:!1,Events:[Mo,dn,li,Vc,Yc,ed]},Vn={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Af={bundleType:Vn.bundleType,version:Vn.version,rendererPackageName:Vn.rendererPackageName,rendererConfig:Vn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zc(t),t===null?null:t.stateNode},findFiberByHostInstance:Vn.findFiberByHostInstance||Df,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var os=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!os.isDisabled&&os.supportsFiber)try{ni=os.inject(Af),Ue=os}catch{}}ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ff;ye.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ad(e))throw Error(H(200));return Bf(t,e,null,r)};ye.createRoot=function(t,e){if(!ad(t))throw Error(H(299));var r=!1,o="",s=Bb;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=sd(t,1,!1,null,null,r,!1,o,s),t[rr]=e.current,wo(t.nodeType===8?t.parentNode:t),new ld(e)};ye.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):(t=Object.keys(t).join(","),Error(H(268,t)));return t=Zc(e),t=t===null?null:t.stateNode,t};ye.flushSync=function(t){return Ur(t)};ye.hydrate=function(t,e,r){if(!fi(e))throw Error(H(200));return hi(null,t,e,!0,r)};ye.hydrateRoot=function(t,e,r){if(!ad(t))throw Error(H(405));var o=r!=null&&r.hydratedSources||null,s=!1,i="",l=Bb;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),e=Eb(e,null,t,1,r??null,s,!1,i,l),t[rr]=e.current,wo(t),o)for(t=0;t<o.length;t++)r=o[t],s=r._getVersion,s=s(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,s]:e.mutableSourceEagerHydrationData.push(r,s);return new mi(e)};ye.render=function(t,e,r){if(!fi(e))throw Error(H(200));return hi(null,t,e,!1,r)};ye.unmountComponentAtNode=function(t){if(!fi(t))throw Error(H(40));return t._reactRootContainer?(Ur(function(){hi(null,null,t,!1,function(){t._reactRootContainer=null,t[rr]=null})}),!0):!1};ye.unstable_batchedUpdates=ed;ye.unstable_renderSubtreeIntoContainer=function(t,e,r,o){if(!fi(r))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return hi(t,e,r,!1,o)};ye.version="18.3.1-next-f1338f8080-20240426";function Db(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Db)}catch(t){console.error(t)}}Db(),Dc.exports=ye;var Wf=Dc.exports,Rb,_g=Wf;Rb=_g.createRoot,_g.hydrateRoot;/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Fb=(...t)=>t.filter((e,r,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===r).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _f={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=p.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:s="",children:i,iconNode:l,...a},d)=>p.createElement("svg",{ref:d,..._f,width:e,height:e,stroke:t,strokeWidth:o?Number(r)*24/Number(e):r,className:Fb("lucide",s),...a},[...l.map(([g,m])=>p.createElement(g,m)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=(t,e)=>{const r=p.forwardRef(({className:o,...s},i)=>p.createElement(Lf,{ref:i,iconNode:e,className:Fb(`lucide-${Mf(t)}`,o),...s}));return r.displayName=`${t}`,r};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=rt("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=rt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=rt("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=rt("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=rt("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=rt("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=rt("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=rt("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=rt("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=rt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=rt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=rt("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=rt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=rt("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=rt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=rt("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=rt("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=rt("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=rt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=rt("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=rt("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=rt("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=rt("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=rt("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=rt("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=rt("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=rt("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=rt("Images",[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=rt("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=rt("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=rt("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=rt("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=rt("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=rt("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=rt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=rt("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=rt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=rt("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=rt("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=rt("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=rt("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=rt("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=rt("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=rt("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=rt("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=rt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=rt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=rt("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=rt("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=rt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=rt("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=rt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=rt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=rt("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=rt("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=rt("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=rt("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=rt("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=rt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=rt("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=rt("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=rt("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=rt("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=rt("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=rt("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=rt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=rt("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),bd="anvil_token",pd=()=>localStorage.getItem(bd),fh=t=>localStorage.setItem(bd,t),sa=()=>localStorage.removeItem(bd),G=async(t,e,r)=>{const o={};r!==void 0&&(o["Content-Type"]="application/json");const s=pd();s&&(o.Authorization=`Bearer ${s}`);const i=await fetch(`/api${e}`,{method:t,headers:o,body:r!==void 0?JSON.stringify(r):void 0});if(i.status===401)throw sa(),window.dispatchEvent(new Event("anvil-unauthorized")),new Error("Not authenticated");if(i.status===204)return null;if(!i.ok){const l=await i.text();let a=l;try{a=JSON.parse(l).detail||l}catch{}throw new Error(a||`HTTP ${i.status}`)}return i.json()},$={register:t=>G("POST","/auth/register",t),login:t=>G("POST","/auth/login",t),me:()=>G("GET","/auth/me"),getGcalStatus:()=>G("GET","/auth/google/status"),connectGoogle:()=>{window.location.href=`/api/auth/google?token=${encodeURIComponent(pd()||"")}`},disconnectGoogle:()=>G("DELETE","/auth/google"),getPillars:()=>G("GET","/pillars"),getFocus:()=>G("GET","/focus"),createFocus:t=>G("POST","/focus",t),deleteFocus:t=>G("DELETE",`/focus/${t}`),getDecks:()=>G("GET","/spiritual/decks"),createDeck:t=>G("POST","/spiritual/decks",t),deleteDeck:t=>G("DELETE",`/spiritual/decks/${t}`),getGoldenGoals:()=>G("GET","/golden/goals"),getGoldenGoal:t=>G("GET",`/golden/goals/${t}`),createGolden:t=>G("POST","/golden/goals",t),updateGolden:(t,e)=>G("PUT",`/golden/goals/${t}`,e),achieveGolden:t=>G("POST",`/golden/goals/${t}/achieve`),unachieveGolden:t=>G("POST",`/golden/goals/${t}/unachieve`),upsertGoldenEntry:(t,e)=>G("PUT",`/golden/goals/${t}/entry`,e),deleteGolden:t=>G("DELETE",`/golden/goals/${t}`),restoreGolden:t=>G("POST",`/golden/goals/${t}/restore`),getKickstart:()=>G("GET","/kickstart/videos"),createKickstart:t=>G("POST","/kickstart/videos",t),updateKickstart:(t,e)=>G("PUT",`/kickstart/videos/${t}`,e),deleteKickstart:t=>G("DELETE",`/kickstart/videos/${t}`),restoreKickstart:t=>G("POST",`/kickstart/videos/${t}/restore`),getTxns:()=>G("GET","/finance/txns"),createTxn:t=>G("POST","/finance/txns",t),updateTxn:(t,e)=>G("PUT",`/finance/txns/${t}`,e),deleteTxn:t=>G("DELETE",`/finance/txns/${t}`),restoreTxn:t=>G("POST",`/finance/txns/${t}/restore`),getSetting:t=>G("GET",`/settings/${t}`),setSetting:(t,e)=>G("PUT",`/settings/${t}`,{value:e}),getTasks:()=>G("GET","/tasks"),createTask:t=>G("POST","/tasks",t),updateTask:(t,e)=>G("PUT",`/tasks/${t}`,e),deleteTask:t=>G("DELETE",`/tasks/${t}`),restoreTask:t=>G("POST",`/tasks/${t}/restore`),scheduleTask:t=>G("PUT",`/tasks/${t}/schedule`),getGoals:t=>G("GET",`/goals${t?`?pillar=${encodeURIComponent(t)}`:""}`),createGoal:t=>G("POST","/goals",t),updateGoal:(t,e)=>G("PUT",`/goals/${t}`,e),deleteGoal:t=>G("DELETE",`/goals/${t}`),restoreGoal:t=>G("POST",`/goals/${t}/restore`),getHabits:()=>G("GET","/habits"),createHabit:t=>G("POST","/habits",t),updateHabit:(t,e)=>G("PUT",`/habits/${t}`,e),deleteHabit:t=>G("DELETE",`/habits/${t}`),restoreHabit:t=>G("POST",`/habits/${t}/restore`),toggleHabitLog:(t,e)=>G("POST",`/habits/${t}/log/${e}`),setHabitLogNote:(t,e,r)=>G("PUT",`/habits/${t}/log/${e}/note`,{note:r}),setHabitLogCount:(t,e,r,o)=>G("PUT",`/habits/${t}/log/${e}/count`,{count:r,note:o}),clearHabitLog:(t,e)=>G("DELETE",`/habits/${t}/log/${e}`),getHabitsYearly:t=>G("GET",`/habits/yearly/${t}`),getJournalEntry:t=>G("GET",`/journal/${t}`),getJournalHistory:(t,e)=>G("GET",`/journal/history/${t}/${e}`),updateJournalMood:(t,e)=>G("PUT",`/journal/${t}`,{mood:e}),addJournalBullet:(t,e,r)=>G("POST",`/journal/${t}/bullets`,{section:e,text:r}),deleteJournalBullet:t=>G("DELETE",`/journal/bullets/${t}`),getSkills:()=>G("GET","/skills"),createSkill:t=>G("POST","/skills",t),updateSkill:(t,e)=>G("PUT",`/skills/${t}`,e),deleteSkill:t=>G("DELETE",`/skills/${t}`),restoreSkill:t=>G("POST",`/skills/${t}/restore`),addSkillNote:(t,e,r)=>G("POST",`/skills/${t}/notes`,{stage:e,text:r}),deleteSkillNote:t=>G("DELETE",`/skill-notes/${t}`),updateSkillNote:(t,e)=>G("PUT",`/skill-notes/${t}`,{text:e}),toggleSkillNote:t=>G("PUT",`/skill-notes/${t}/toggle`),completeSkillStage:(t,e)=>G("POST",`/skills/${t}/complete-stage`,{stage:e}),getScriptures:()=>G("GET","/scriptures"),createScripture:t=>G("POST","/scriptures",t),deleteScripture:t=>G("DELETE",`/scriptures/${t}`),restoreScripture:t=>G("POST",`/scriptures/${t}/restore`),addChapter:(t,e)=>G("POST",`/scriptures/${t}/chapters`,e),updateChapter:(t,e)=>G("PUT",`/chapters/${t}`,e),deleteChapter:t=>G("DELETE",`/chapters/${t}`),restoreChapter:t=>G("POST",`/chapters/${t}/restore`),addInsight:(t,e)=>G("POST",`/chapters/${t}/insights`,{text:e}),deleteInsight:t=>G("DELETE",`/insights/${t}`),getTopics:()=>G("GET","/revision/topics"),createTopic:t=>G("POST","/revision/topics",t),updateTopic:(t,e)=>G("PUT",`/revision/topics/${t}`,e),deleteTopic:t=>G("DELETE",`/revision/topics/${t}`),restoreTopic:t=>G("POST",`/revision/topics/${t}/restore`),getDueToday:()=>G("GET","/revision/due-today"),getCalendar:(t,e)=>G("GET",`/revision/calendar/${t}/${e}`),toggleReviewDone:t=>G("PUT",`/revision/reviews/${t}/done`),getAffirmations:()=>G("GET","/affirmations"),createAffirmation:t=>G("POST","/affirmations",t),updateAffirmation:(t,e)=>G("PUT",`/affirmations/${t}`,e),deleteAffirmation:t=>G("DELETE",`/affirmations/${t}`),restoreAffirmation:t=>G("POST",`/affirmations/${t}/restore`)},hh=7e3;function Wn(t,e,r){const[o,s]=p.useState([]),i=p.useRef({}),l=p.useCallback(async(g,m="Item")=>{await t(g),r();const v=`${g}-${Date.now()}`;s(f=>[...f,{id:v,itemId:g,label:m}]),i.current[v]=setTimeout(()=>{s(f=>f.filter(j=>j.id!==v)),delete i.current[v]},hh)},[t,r]),a=p.useCallback(async g=>{const m=o.find(v=>v.id===g);m&&(clearTimeout(i.current[g]),delete i.current[g],s(v=>v.filter(f=>f.id!==g)),await e(m.itemId),r())},[o,e,r]),d=p.useCallback(g=>{clearTimeout(i.current[g]),delete i.current[g],s(m=>m.filter(v=>v.id!==g))},[]);return{deleteItem:l,toasts:o,handleUndo:a,handleDismiss:d}}function Mn({toasts:t,onUndo:e,onDismiss:r}){return n.jsx("div",{style:rn.container,children:t.map(o=>n.jsx(vh,{toast:o,onUndo:e,onDismiss:r},o.id))})}function vh({toast:t,onUndo:e,onDismiss:r}){const[o,s]=p.useState(100);return p.useEffect(()=>{const i=Date.now(),l=7e3,a=setInterval(()=>{const d=Date.now()-i,g=Math.max(0,100-d/l*100);s(g),g===0&&clearInterval(a)},50);return()=>clearInterval(a)},[]),n.jsxs("div",{style:rn.toast,children:[n.jsx("div",{style:{...rn.bar,width:`${o}%`}}),n.jsxs("span",{style:rn.msg,children:[t.label," deleted"]}),n.jsx("button",{style:rn.undoBtn,onClick:()=>e(t.id),children:"Undo"}),n.jsx("button",{style:rn.closeBtn,onClick:()=>r(t.id),children:"×"})]})}const rn={container:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",gap:8,zIndex:999,pointerEvents:"none"},toast:{position:"relative",display:"flex",alignItems:"center",gap:12,background:"var(--accent-strong)",color:"#fff",borderRadius:10,padding:"12px 16px",fontSize:13.5,fontFamily:"'Inter', system-ui, sans-serif",boxShadow:"0 4px 20px rgba(0,0,0,0.25)",minWidth:260,overflow:"hidden",pointerEvents:"all"},bar:{position:"absolute",bottom:0,left:0,height:3,background:"#4C9A6B",transition:"width 0.05s linear",borderRadius:"0 0 0 10px"},msg:{flex:1,fontWeight:500},undoBtn:{border:"1px solid rgba(255,255,255,0.3)",background:"none",color:"#4C9A6B",fontWeight:700,fontSize:13,padding:"4px 10px",borderRadius:6,cursor:"pointer",fontFamily:"inherit"},closeBtn:{border:"none",background:"none",color:"rgba(255,255,255,0.5)",cursor:"pointer",fontSize:18,lineHeight:1,padding:"0 2px"}},is={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},Pg=[{id:"Q1",symbol:"™",title:"Do Now",sub:"Important · Urgent",accent:"#C2536B"},{id:"Q2",symbol:"©",title:"Schedule",sub:"Important · Not Urgent",accent:"#3A7CA5"},{id:"Q3",symbol:"®",title:"Delegate",sub:"Not Important · Urgent",accent:"#C9A227"},{id:"Q4",symbol:"•",title:"Drop",sub:"Not Important · Not Urgent",accent:"#8A8780"}];function yh(){return new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Kolkata"})}function xh(){const t=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"})),r=t.getMinutes()<30?30:0,o=r===0?t.getHours()+1:t.getHours();return`${String(o%24).padStart(2,"0")}:${String(r).padStart(2,"0")}`}function kh(t,e){const[r,o]=t.split(":").map(Number),s=r*60+o+e;return`${String(Math.floor(s/60)%24).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`}function wh(t){return t?new Date(t).toLocaleString("en-IN",{timeZone:"Asia/Kolkata",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0}):""}const Yi=()=>({title:"",pillar:"Financial",est:30,date:yh(),startTime:xh()});function jh(){const[t,e]=p.useState([]),[r,o]=p.useState(null),[s,i]=p.useState(Yi()),[l,a]=p.useState({connected:!1,configured:!1}),d=p.useCallback(()=>$.getTasks().then(e).catch(console.error),[]);p.useEffect(()=>{d(),$.getGcalStatus().then(a).catch(()=>{})},[d]);const{deleteItem:g,toasts:m,handleUndo:v,handleDismiss:f}=Wn($.deleteTask,$.restoreTask,d),j=u=>t.filter(x=>x.quadrant===u),k=u=>j(u).reduce((x,y)=>x+y.time_estimate_min,0),S=u=>u>=60?`${Math.floor(u/60)}h${u%60?` ${u%60}m`:""}`:`${u}m`,T=u=>{var y;return`${((y=Pg.find(A=>A.id===u.quadrant))==null?void 0:y.symbol)??""} ${u.title}`},b=async u=>{if(!s.title.trim())return;const x=s.date&&s.startTime?`${s.date}T${s.startTime}:00`:null;await $.createTask({pillar:s.pillar,title:s.title,quadrant:u,time_estimate_min:Number(s.est)||30,start_datetime:x}),i(Yi()),o(null),d()},c=(u,x)=>g(u,x);return n.jsxs("div",{style:lt.page,children:[n.jsxs("div",{style:lt.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:lt.eyebrow,children:"Anvil · Weekly Routing"}),n.jsx("h1",{style:lt.h1,children:"Weekly Routing"})]}),n.jsxs("div",{style:lt.headRight,children:[n.jsx("div",{style:lt.legend,children:Object.entries(is).map(([u,x])=>n.jsxs("span",{style:lt.legendItem,children:[n.jsx("span",{style:{...lt.dot,background:x.dot}}),u]},u))}),l.configured&&(l.connected?n.jsxs("button",{style:lt.gcalBadgeOn,title:"Disconnect Google Calendar",onClick:()=>$.disconnectGoogle().then(()=>a({...l,connected:!1})),children:[n.jsx(ss,{size:13})," Google Calendar connected"]}):n.jsxs("button",{style:lt.gcalBadgeOff,onClick:()=>$.connectGoogle(),children:[n.jsx(ss,{size:13})," Connect Google Calendar"]}))]})]}),n.jsx("div",{style:lt.grid,children:Pg.map(u=>n.jsxs("section",{style:{...lt.quad,borderTop:`3px solid ${u.accent}`},children:[n.jsxs("header",{style:lt.quadHead,children:[n.jsxs("div",{style:lt.quadTitleRow,children:[n.jsx("span",{style:{...lt.symbol,color:u.accent},children:u.symbol}),n.jsxs("div",{children:[n.jsx("div",{style:lt.quadTitle,children:u.title}),n.jsx("div",{style:lt.quadSub,children:u.sub})]})]}),n.jsx("span",{style:lt.quadTotal,children:S(k(u.id))})]}),n.jsxs("div",{style:lt.list,children:[j(u.id).map(x=>{const y=is[x.pillar]||is.Financial,A=!!x.gcal_event_id;return n.jsxs("div",{style:{...lt.card,background:y.soft},children:[n.jsx("span",{style:{...lt.cardBar,background:y.dot}}),n.jsxs("div",{style:lt.cardBody,children:[n.jsx("div",{style:lt.cardTitle,children:x.title}),x.start_datetime&&n.jsxs("div",{style:lt.eventTime,children:[n.jsx(ss,{size:10}),wh(x.start_datetime),A&&n.jsx("span",{style:lt.syncedDot,title:"Synced to Google Calendar"})]}),n.jsxs("div",{style:lt.cardMeta,children:[n.jsxs("span",{style:lt.metaPill,children:[n.jsx("span",{style:{...lt.dot,background:y.dot,width:7,height:7}}),x.pillar]}),n.jsxs("span",{style:lt.metaPill,children:[n.jsx($f,{size:11})," ",S(x.time_estimate_min)]})]})]}),n.jsxs("div",{style:lt.cardActions,children:[A&&n.jsx("span",{title:`On calendar as "${T(x)}"`,style:lt.calDoneIcon,children:n.jsx(jt,{size:14})}),n.jsx("button",{onClick:()=>c(x.id,x.title),style:lt.delBtn,children:n.jsx(xt,{size:13})})]})]},x.id)}),r===u.id?n.jsxs("div",{style:lt.addBox,children:[n.jsx("input",{autoFocus:!0,placeholder:"Task title",value:s.title,onChange:x=>i({...s,title:x.target.value}),onKeyDown:x=>x.key==="Enter"&&b(u.id),style:lt.input}),n.jsxs("div",{style:lt.dateTimeRow,children:[n.jsxs("div",{style:lt.dateTimeGroup,children:[n.jsx("label",{style:lt.dtLabel,children:"Date"}),n.jsx("input",{type:"date",value:s.date,onChange:x=>i({...s,date:x.target.value}),style:lt.dtInput})]}),n.jsxs("div",{style:lt.dateTimeGroup,children:[n.jsx("label",{style:lt.dtLabel,children:"Start"}),n.jsx("input",{type:"time",value:s.startTime,onChange:x=>i({...s,startTime:x.target.value}),style:lt.dtInput})]}),n.jsxs("div",{style:lt.dateTimeGroup,children:[n.jsx("label",{style:lt.dtLabel,children:"End"}),n.jsx("div",{style:lt.dtEndValue,children:kh(s.startTime,Number(s.est)||30)})]})]}),n.jsxs("div",{style:lt.addRow,children:[n.jsx("select",{value:s.pillar,onChange:x=>i({...s,pillar:x.target.value}),style:lt.select,children:Object.keys(is).map(x=>n.jsx("option",{children:x},x))}),n.jsx("input",{type:"number",value:s.est,onChange:x=>i({...s,est:x.target.value}),style:{...lt.input,width:60}}),n.jsx("span",{style:lt.minLabel,children:"min"}),l.connected&&n.jsx("span",{style:lt.gcalHint,title:"Will sync to Google Calendar",children:n.jsx(ss,{size:12})}),n.jsx("button",{onClick:()=>b(u.id),style:lt.saveBtn,children:n.jsx(jt,{size:14})}),n.jsx("button",{onClick:()=>{o(null),i(Yi())},style:lt.cancelBtn,children:n.jsx(xt,{size:14})})]})]}):n.jsxs("button",{onClick:()=>o(u.id),style:lt.addTrigger,children:[n.jsx(oe,{size:13})," Add task"]})]})]},u.id))}),n.jsx(Mn,{toasts:m,onUndo:v,onDismiss:f})]})}const lt={page:{fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:16,marginBottom:22},headRight:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:10},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces', Georgia, serif"},legend:{display:"flex",gap:14,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--text-2)",fontWeight:500},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},gcalBadgeOn:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"#4C9A6B",background:"rgba(76,154,107,0.10)",border:"1px solid rgba(76,154,107,0.3)",borderRadius:20,padding:"5px 12px",cursor:"pointer"},gcalBadgeOff:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"var(--text-2)",background:"var(--surface)",border:"1px solid #DCDAD3",borderRadius:20,padding:"5px 12px",cursor:"pointer"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16},quad:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.06)"},quadHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14},quadTitleRow:{display:"flex",gap:10,alignItems:"center"},symbol:{fontSize:20,lineHeight:1},quadTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em"},quadSub:{fontSize:11,color:"var(--text-3)",marginTop:1,letterSpacing:"0.02em"},quadTotal:{fontSize:12,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"3px 9px",borderRadius:20},list:{display:"flex",flexDirection:"column",gap:8},card:{display:"flex",alignItems:"stretch",gap:10,borderRadius:9,padding:"10px 10px 10px 0",overflow:"hidden"},cardBar:{width:3,borderRadius:3,flexShrink:0},cardBody:{flex:1,minWidth:0},cardTitle:{fontSize:13.5,fontWeight:500,lineHeight:1.35,marginBottom:4},eventTime:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#3A7CA5",fontWeight:500,marginBottom:5},syncedDot:{width:6,height:6,borderRadius:"50%",background:"#4C9A6B",display:"inline-block",marginLeft:2},cardMeta:{display:"flex",gap:8,flexWrap:"wrap"},metaPill:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"var(--text-2)",fontWeight:500},cardActions:{display:"flex",flexDirection:"column",gap:4,alignSelf:"center",flexShrink:0},calDoneIcon:{width:30,height:30,borderRadius:8,background:"#4C9A6B",color:"#fff",display:"grid",placeItems:"center"},delBtn:{width:30,height:30,borderRadius:8,border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center"},addTrigger:{display:"flex",alignItems:"center",gap:5,fontSize:12.5,color:"var(--text-3)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"8px 10px",cursor:"pointer",fontWeight:500,marginTop:2},addBox:{border:"1px solid var(--border)",borderRadius:9,padding:10,display:"flex",flexDirection:"column",gap:8},dateTimeRow:{display:"flex",gap:8,alignItems:"flex-end"},dateTimeGroup:{display:"flex",flexDirection:"column",gap:3,flex:1},dtLabel:{fontSize:10,fontWeight:600,color:"var(--text-3)",letterSpacing:"0.08em",textTransform:"uppercase"},dtInput:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},dtEndValue:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,color:"var(--text-2)",background:"var(--bg)"},addRow:{display:"flex",alignItems:"center",gap:6},input:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",flex:1,minWidth:0},select:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 8px",fontSize:12.5,fontFamily:"inherit",flex:1},minLabel:{fontSize:11,color:"var(--text-3)"},gcalHint:{color:"#3A7CA5",display:"grid",placeItems:"center"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"}},Pe={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},Ng=Object.keys(Pe),Qi=["Yearly","Quarterly","Monthly","Weekly"],Rr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Og=[{label:"Q1 · Jan–Mar",startMonth:0},{label:"Q2 · Apr–Jun",startMonth:3},{label:"Q3 · Jul–Sep",startMonth:6},{label:"Q4 · Oct–Dec",startMonth:9}],ia=new Date().getFullYear(),$g=Array.from({length:8},(t,e)=>ia-1+e);function Sh(t=720){const[e,r]=p.useState(()=>window.innerWidth<t);return p.useEffect(()=>{const o=()=>r(window.innerWidth<t);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[t]),e}const Zn=864e5,Yt=30,uo=190,en=t=>new Date(t+"T00:00:00"),Hg=t=>t.toLocaleDateString("en-US",{month:"short",day:"numeric"}),Ch=[{key:"yearly",label:"Yearly",horizons:["Yearly"]},{key:"quarterly",label:"Quarterly",horizons:["Quarterly"]},{key:"mw",label:"Monthly & Weekly",horizons:["Monthly","Weekly"]}],Ih={Yearly:"Yr",Quarterly:"Q",Monthly:"Mo",Weekly:"Wk"},zh={Yearly:"Y",Quarterly:"Q",Monthly:"M",Weekly:"W"},Gg={Yearly:0,Quarterly:1,Monthly:2,Weekly:3},Ki=t=>Qi[Math.min(Qi.indexOf(t)+1,Qi.length-1)],ls=t=>{if(!t||!t.start_date)return Array.from({length:12},(l,a)=>a);const e=new Date(t.start_date+"T00:00:00"),r=new Date(t.end_date+"T00:00:00"),o=e.getFullYear(),s=e.getMonth(),i=r.getFullYear()>o?11:r.getMonth();return Array.from({length:i-s+1},(l,a)=>s+a)},as=t=>new Date(t+"T00:00:00").getFullYear(),Yb=(t,e,r)=>{const o=(r-1)*7+1,s=Math.min(o+6,new Date(t,e+1,0).getDate()),i=String(e+1).padStart(2,"0");return{start_date:`${t}-${i}-${String(o).padStart(2,"0")}`,end_date:`${t}-${i}-${String(s).padStart(2,"0")}`}},fn=(t,e,r,o=1)=>{const s=e;switch(t){case"Yearly":return{start_date:`${s}-01-01`,end_date:`${s}-12-31`};case"Quarterly":{const i=Math.floor(r/3)*3,l=i+1,a=i+3,d=new Date(s,a,0).getDate();return{start_date:`${s}-${String(l).padStart(2,"0")}-01`,end_date:`${s}-${String(a).padStart(2,"0")}-${d}`}}case"Monthly":{const i=new Date(s,r+1,0).getDate();return{start_date:`${s}-${String(r+1).padStart(2,"0")}-01`,end_date:`${s}-${String(r+1).padStart(2,"0")}-${i}`}}case"Weekly":return Yb(s,r,o);default:return{start_date:`${s}-01-01`,end_date:`${s}-12-31`}}},Ug=(t,e)=>{const r=new Date(t+"T00:00:00");return r.setDate(r.getDate()+e),`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`},la=(t,e)=>Math.round((new Date(e+"T00:00:00")-new Date(t+"T00:00:00"))/Zn)+1,Th=(t,e)=>new Date(t,e+1,0).getDate(),aa=t=>{const e=new Date(t.start_date+"T00:00:00");if(t.horizon==="Monthly")return Th(e.getFullYear(),e.getMonth());if(t.horizon==="Weekly"){const r=Math.min(Math.max(Math.ceil(e.getDate()/7),1),4),o=Yb(e.getFullYear(),e.getMonth(),r);return la(o.start_date,o.end_date)}return la(t.start_date,t.end_date)},Vg=t=>Math.round(aa(t)*1.5),Eh=t=>t.horizon==="Monthly"||t.horizon==="Weekly",Bh=(t,e)=>{const r=e.getFullYear(),o=e.getMonth();return t==="Quarterly"?fn("Quarterly",r,o):t==="Monthly"?fn("Monthly",r,o):t==="Weekly"?fn("Weekly",r,o,Math.min(Math.max(Math.ceil(e.getDate()/7),1),4)):fn("Yearly",r,0)},Dh=t=>{if(!t.start_date)return"";const e=new Date(t.start_date+"T00:00:00"),r=e.getMonth();switch(t.horizon){case"Yearly":return`${e.getFullYear()}`;case"Quarterly":return`Q${Math.floor(r/3)+1} ${e.getFullYear()}`;case"Monthly":return`${Rr[r]} ${e.getFullYear()}`;case"Weekly":return`${Rr[r]} W${Math.ceil(e.getDate()/7)}`;default:return""}};function Rh(){const[t,e]=p.useState([]),[r,o]=p.useState("All"),[s,i]=p.useState({}),[l,a]=p.useState({}),[d,g]=p.useState(null),[m,v]=p.useState(""),[f,j]=p.useState(0),[k,S]=p.useState(1),[T,b]=p.useState(ia),[c,u]=p.useState(null),x=Sh(),[y,A]=p.useState(!x),[_,D]=p.useState(null),E=p.useRef(null);p.useEffect(()=>{E.current=_},[_]);const[M,et]=p.useState(null),L=p.useRef(null);p.useEffect(()=>{L.current=M},[M]);const C=p.useRef(null),[U,ut]=p.useState(null),q=p.useRef(null),[B,R]=p.useState(null),[F,O]=p.useState(null),w=(z,N)=>{if(B===N){R(null);return}const ct=z.currentTarget.getBoundingClientRect(),mt=ct.bottom+220<window.innerHeight;O({right:Math.max(8,window.innerWidth-ct.right),...mt?{top:ct.bottom+4}:{bottom:window.innerHeight-ct.top+4}}),R(N)},V=z=>{clearTimeout(q.current),q.current=setTimeout(()=>ut(z),350)},h=()=>{clearTimeout(q.current),ut(null)},P=p.useCallback(()=>{$.getGoals().then(e).catch(console.error)},[]);p.useEffect(()=>{P()},[P]);const{deleteItem:at,toasts:dt,handleUndo:wt,handleDismiss:Dt}=Wn($.deleteGoal,$.restoreGoal,P),ft=p.useCallback(async()=>{const z=E.current;if(D(null),!z)return;const N=Math.round(z.dx/Yt);if(!N)return;const ct=Bh(z.g.horizon,en(Ug(z.g.start_date,N)));ct.start_date!==z.g.start_date&&(await $.updateGoal(z.g.id,{pillar:z.g.pillar,start_date:ct.start_date,end_date:ct.end_date}),P())},[P]),Tt=!!_;p.useEffect(()=>{if(!Tt)return;const z=ct=>D(mt=>mt&&{...mt,dx:ct.clientX-mt.startX}),N=()=>ft();return window.addEventListener("pointermove",z),window.addEventListener("pointerup",N),()=>{window.removeEventListener("pointermove",z),window.removeEventListener("pointerup",N)}},[Tt,ft]);const Y=p.useCallback(async()=>{const z=L.current;if(et(null),!z)return;const N=z.g,ct=aa(N),mt=Vg(N),Vt=Math.max(ct,Math.min(mt,la(N.start_date,N.end_date)+Math.round(z.dx/Yt))),ke=Ug(N.start_date,Vt-1);ke!==N.end_date&&(await $.updateGoal(N.id,{end_date:ke}),P())},[P]),pt=!!M;p.useEffect(()=>{if(!pt)return;const z=ct=>et(mt=>mt&&{...mt,dx:ct.clientX-mt.startX}),N=()=>Y();return window.addEventListener("pointermove",z),window.addEventListener("pointerup",N),()=>{window.removeEventListener("pointermove",z),window.removeEventListener("pointerup",N)}},[pt,Y]);const gt=r==="All",Ct=Pe[r]||{dot:"var(--text-3)"},le=gt?t:t.filter(z=>z.pillar===r),_n=le.filter(z=>!z.parent_goal_id),Po=z=>le.filter(N=>N.parent_goal_id===z),np=z=>a(N=>({...N,[z]:!N[z]})),op=z=>z.horizon==="Monthly"||z.horizon==="Weekly",zr=z=>s[z.id]!==void 0?s[z.id]:op(z),vd=z=>i(N=>({...N,[z.id]:!zr(z)})),yi=(z,N=null)=>{g(z),v(""),S(1),b(N?as(N.start_date):ia);const ct=z==="ROOT"?"Yearly":Ki(N==null?void 0:N.horizon),mt=z==="ROOT"?[0]:ls(N);j(ct==="Quarterly"?Math.floor(mt[0]/3)*3:mt[0]??0)},yd=async(z,N)=>{if(!m.trim())return;const ct=(N==null?void 0:N.horizon)??null,mt=z==="ROOT"?"Yearly":Ki(ct),Vt=z==="ROOT"?r:(N==null?void 0:N.pillar)||r,ke=mt==="Yearly"?Number(T):N?as(N.start_date):Number(T),{start_date:ht,end_date:we}=fn(mt,ke,f,k);await $.createGoal({pillar:Vt,title:m.trim(),horizon:mt,parent_goal_id:z==="ROOT"?null:z,start_date:ht,end_date:we}),z!=="ROOT"&&a(ir=>({...ir,[z]:!0})),g(null),v(""),P()},xd=z=>{const N=z.start_date?new Date(z.start_date+"T00:00:00"):new Date,ct=N.getMonth(),mt=Math.min(Math.max(Math.ceil(N.getDate()/7),1),4);u({id:z.id,title:z.title,pillar:z.pillar,horizon:z.horizon,parentGoal:t.find(Vt=>Vt.id===z.parent_goal_id)||null,year:as(z.start_date),month:z.horizon==="Quarterly"?Math.floor(ct/3)*3:ct,week:mt})},kd=async()=>{if(!c||!c.title.trim())return;let z=c.month;c.horizon==="Weekly"&&(z=ls(c.parentGoal)[0]);const N=c.horizon==="Yearly"?Number(c.year):c.parentGoal?as(c.parentGoal.start_date):Number(c.year),{start_date:ct,end_date:mt}=fn(c.horizon,N,z,c.week);await $.updateGoal(c.id,{title:c.title.trim(),pillar:c.pillar,start_date:ct,end_date:mt}),u(null),P()},wd=({parentId:z,parentGoal:N,depth:ct})=>{const mt=z==="ROOT"?"Yearly":Ki((N==null?void 0:N.horizon)??null),Vt=z==="ROOT"?Array.from({length:12},(ht,we)=>we):ls(N),ke=Og.filter(ht=>Vt.includes(ht.startMonth));return n.jsxs("div",{style:{...Q.addBox,marginLeft:ct*24},children:[n.jsx("input",{autoFocus:!0,placeholder:`New ${mt.toLowerCase()} goal…`,value:m,onChange:ht=>v(ht.target.value),onKeyDown:ht=>{ht.key==="Enter"&&yd(z,N),ht.key==="Escape"&&g(null)},style:Q.input}),mt==="Yearly"&&n.jsx("select",{value:T,onChange:ht=>b(Number(ht.target.value)),style:Q.monthSelect,children:$g.map(ht=>n.jsx("option",{value:ht,children:ht},ht))}),mt==="Quarterly"&&n.jsx("select",{value:f,onChange:ht=>j(Number(ht.target.value)),style:Q.monthSelect,children:ke.map(ht=>n.jsx("option",{value:ht.startMonth,children:ht.label},ht.startMonth))}),mt==="Monthly"&&n.jsx("select",{value:f,onChange:ht=>j(Number(ht.target.value)),style:Q.monthSelect,children:Vt.map(ht=>n.jsx("option",{value:ht,children:Rr[ht]},ht))}),mt==="Weekly"&&n.jsxs(n.Fragment,{children:[n.jsx("span",{style:Q.inheritTag,children:Rr[Vt[0]]}),n.jsx("select",{value:k,onChange:ht=>S(Number(ht.target.value)),style:Q.monthSelect,children:[1,2,3,4].map(ht=>n.jsxs("option",{value:ht,children:["Week ",ht]},ht))})]}),n.jsx("button",{onClick:()=>yd(z,N),style:Q.saveBtn,children:n.jsx(jt,{size:14})}),n.jsx("button",{onClick:()=>g(null),style:Q.cancelBtn,children:n.jsx(xt,{size:14})})]})},jd=({goal:z,depth:N})=>{var ht,we,ir,Zr;const ct=Po(z.id),mt=l[z.id],Vt=z.horizon!=="Weekly";if((c==null?void 0:c.id)===z.id){const Jt=ls(c.parentGoal),Tr=Og.filter(yt=>Jt.includes(yt.startMonth));return n.jsxs("div",{style:{...Q.editBox,marginLeft:N*24},children:[n.jsx("input",{autoFocus:!0,value:c.title,onChange:yt=>u({...c,title:yt.target.value}),onKeyDown:yt=>yt.key==="Enter"&&kd(),style:{...Q.input,flex:1}}),n.jsx("select",{value:c.pillar,onChange:yt=>u({...c,pillar:yt.target.value}),style:Q.monthSelect,children:Ng.map(yt=>n.jsx("option",{children:yt},yt))}),c.horizon==="Yearly"&&n.jsx("select",{value:c.year,onChange:yt=>u({...c,year:Number(yt.target.value)}),style:Q.monthSelect,children:$g.map(yt=>n.jsx("option",{value:yt,children:yt},yt))}),c.horizon==="Quarterly"&&n.jsx("select",{value:c.month,onChange:yt=>u({...c,month:Number(yt.target.value)}),style:Q.monthSelect,children:Tr.map(yt=>n.jsx("option",{value:yt.startMonth,children:yt.label},yt.startMonth))}),c.horizon==="Monthly"&&n.jsx("select",{value:c.month,onChange:yt=>u({...c,month:Number(yt.target.value)}),style:Q.monthSelect,children:Jt.map(yt=>n.jsx("option",{value:yt,children:Rr[yt]},yt))}),c.horizon==="Weekly"&&n.jsxs(n.Fragment,{children:[n.jsx("span",{style:Q.inheritTag,children:Rr[Jt[0]]}),n.jsx("select",{value:c.week,onChange:yt=>u({...c,week:Number(yt.target.value)}),style:Q.monthSelect,children:[1,2,3,4].map(yt=>n.jsxs("option",{value:yt,children:["Week ",yt]},yt))})]}),n.jsx("button",{onClick:kd,style:Q.saveBtn,children:n.jsx(jt,{size:14})}),n.jsx("button",{onClick:()=>u(null),style:Q.cancelBtn,children:n.jsx(xt,{size:14})})]})}return n.jsxs("div",{children:[n.jsxs("div",{style:{...Q.row,marginLeft:N*24,background:N===0&&((ht=Pe[z.pillar])==null?void 0:ht.soft)||"transparent"},children:[ct.length>0?n.jsx("button",{onClick:()=>np(z.id),style:Q.caret,children:mt?n.jsx(vi,{size:15}):n.jsx(Xr,{size:15})}):n.jsx("span",{style:{...Q.caret,opacity:.25},children:n.jsx(ud,{size:12})}),n.jsx("span",{style:{...Q.horizonTag,color:((we=Pe[z.pillar])==null?void 0:we.dot)||Ct.dot,borderColor:((ir=Pe[z.pillar])==null?void 0:ir.dot)||Ct.dot},title:z.horizon,children:x?zh[z.horizon]:z.horizon}),n.jsx("span",{style:{...Q.title,...U===z.id?Q.titleFull:{}},title:z.title,onPointerDown:()=>V(z.id),onPointerUp:h,onPointerLeave:h,onPointerCancel:h,children:z.title}),!x&&n.jsx("span",{style:Q.periodTag,children:Dh(z)}),x?n.jsxs("div",{style:{position:"relative",flexShrink:0},children:[n.jsx("button",{onClick:Jt=>w(Jt,z.id),style:Q.rowAdd,title:"Options",children:n.jsx(Gb,{size:15})}),B===z.id&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:Q.menuBackdrop,onClick:()=>R(null)}),n.jsxs("div",{style:{...Q.goalMenu,...F},children:[n.jsxs("button",{style:Q.menuItem,onClick:()=>{vd(z),R(null)},children:[zr(z)?n.jsx(ra,{size:14}):n.jsx(na,{size:14})," ",zr(z)?"Hide from timeline":"Show on timeline"]}),n.jsxs("button",{style:Q.menuItem,onClick:()=>{xd(z),R(null)},children:[n.jsx(ve,{size:14})," Edit"]}),Vt&&n.jsxs("button",{style:Q.menuItem,onClick:()=>{a(Jt=>({...Jt,[z.id]:!0})),yi(z.id,z),R(null)},children:[n.jsx(oe,{size:14})," Add sub-goal"]}),n.jsxs("button",{style:{...Q.menuItem,color:"#C2536B"},onClick:()=>{at(z.id,z.title),R(null)},children:[n.jsx(xt,{size:14})," Delete"]})]})]})]}):n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>vd(z),style:{...Q.rowAdd,color:zr(z)?((Zr=Pe[z.pillar])==null?void 0:Zr.dot)||Ct.dot:"var(--text-3)"},title:zr(z)?"Showing on timeline — click to hide":"Hidden from timeline — click to show",children:zr(z)?n.jsx(na,{size:13}):n.jsx(ra,{size:13})}),n.jsx("button",{onClick:()=>xd(z),style:Q.rowAdd,title:"Edit",children:n.jsx(ve,{size:12})}),Vt&&n.jsx("button",{onClick:()=>{a(Jt=>({...Jt,[z.id]:!0})),yi(z.id,z)},style:Q.rowAdd,title:"Add sub-goal",children:n.jsx(oe,{size:13})}),n.jsx("button",{onClick:()=>at(z.id,z.title),style:{...Q.rowAdd,color:"var(--text-3)"},title:"Delete",children:n.jsx(xt,{size:13})})]})]}),mt&&ct.map(Jt=>n.jsx(jd,{goal:Jt,depth:N+1},Jt.id)),mt&&d===z.id&&n.jsx(wd,{parentId:z.id,parentGoal:z,depth:N+1})]})},Ln=t.filter(z=>zr(z)&&z.start_date&&z.end_date),sp=Ch.map(z=>({...z,items:Ln.filter(N=>z.horizons.includes(N.horizon)).sort((N,ct)=>N.pillar.localeCompare(ct.pillar)||N.start_date.localeCompare(ct.start_date)||Gg[N.horizon]-Gg[ct.horizon]||N.end_date.localeCompare(ct.end_date))})).filter(z=>z.items.length>0),ae=(()=>{if(!Ln.length)return null;let z=Ln[0].start_date,N=Ln[0].end_date;return Ln.forEach(ct=>{ct.start_date<z&&(z=ct.start_date),ct.end_date>N&&(N=ct.end_date)}),{start:en(z),end:en(N)}})(),xi=(()=>{if(!ae)return[];const z=[];for(let N=ae.start.getTime();N<=ae.end.getTime();N+=Zn)z.push(new Date(N));return z})(),No=xi.length,ip=(()=>{const z=[];return xi.forEach(N=>{const ct=`${N.getFullYear()}-${N.getMonth()}`,mt=z[z.length-1];mt&&mt.key===ct?mt.days++:z.push({key:ct,label:`${Rr[N.getMonth()]} '${String(N.getFullYear()).slice(2)}`,days:1})}),z})(),Sd=new Date;Sd.setHours(0,0,0,0);const Jr=ae?Math.round((Sd-ae.start)/Zn):-1,Oo=Jr>=0&&Jr<No,lp=z=>Math.round((en(z.end_date)-en(z.start_date))/Zn)+1,Cd=(y?uo:0)+Jr*Yt,ap=ae?`${ae.start.getTime()}-${ae.end.getTime()}`:"";return p.useEffect(()=>{if(!Oo)return;const z=C.current;z&&(z.scrollLeft=Math.max(0,Cd-z.clientWidth/2+Yt/2))},[ap,Jr,y,Oo]),n.jsxs("div",{style:Q.page,children:[n.jsxs("div",{style:Q.head,children:[n.jsx("div",{style:Q.eyebrow,children:"Anvil · Goals"}),n.jsx("h1",{style:Q.h1,children:gt?"All Goals":`${r} Goals`})]}),n.jsxs("div",{style:Q.pillarPicker,children:[n.jsx("button",{onClick:()=>{o("All"),g(null),u(null)},style:{...Q.pillarChip,...gt?{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:"All Goals"}),Ng.map(z=>{const N=z===r;return n.jsxs("button",{onClick:()=>{o(z),g(null),u(null)},style:{...Q.pillarChip,...N?{background:Pe[z].dot,color:"#fff",borderColor:Pe[z].dot}:{}},children:[n.jsx("span",{style:{...Q.dot,background:N?"#fff":Pe[z].dot}}),z]},z)})]}),n.jsxs("div",{style:Q.list,children:[_n.map(z=>n.jsx(jd,{goal:z,depth:0},z.id)),_n.length===0&&n.jsxs("div",{style:Q.ganttEmpty,children:["No goals yet",gt?"":` for ${r}`,"."]}),!gt&&d==="ROOT"&&n.jsx(wd,{parentId:"ROOT",parentGoal:null,depth:0}),!gt&&d!=="ROOT"&&n.jsxs("button",{onClick:()=>yi("ROOT",null),style:Q.rootAdd,children:[n.jsx(oe,{size:14})," Add top-level goal"]}),gt&&n.jsx("div",{style:Q.allHint,children:"Pick a pillar above to add new goals."})]}),n.jsxs("div",{style:Q.ganttWrap,children:[n.jsxs("div",{style:Q.ganttTop,children:[n.jsxs("div",{style:Q.ganttTitle,children:["Daily Timeline",ae?` · ${Hg(ae.start)} – ${Hg(ae.end)}`:""]}),n.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[n.jsx("span",{style:Q.ganttHint,children:"Drag a bar to reschedule"}),n.jsxs("button",{onClick:()=>A(z=>!z),style:Q.labelToggle,children:[y?n.jsx(rh,{size:14}):n.jsx(nh,{size:14}),y?"Hide names":"Show names"]})]})]}),ae?n.jsx("div",{style:Q.ganttScroll,ref:C,children:n.jsxs("div",{style:{minWidth:(y?uo:0)+No*Yt,position:"relative"},children:[Oo&&n.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:Cd,width:Yt,background:"color-mix(in srgb, var(--accent) 14%, transparent)",pointerEvents:"none",zIndex:3}}),n.jsxs("div",{style:Q.gBandRow,children:[y&&n.jsx("div",{style:{...Q.gLabelHead,zIndex:4},children:"Goal"}),n.jsx("div",{style:{display:"flex"},children:ip.map((z,N)=>n.jsx("div",{style:{...Q.gMonthCell,width:z.days*Yt},children:z.label},N))})]}),n.jsxs("div",{style:Q.gBandRow,children:[y&&n.jsx("div",{style:{...Q.gLabelHead,zIndex:4,fontSize:10,color:"var(--text-3)",fontWeight:600},children:"days →"}),n.jsx("div",{style:{display:"flex"},children:xi.map((z,N)=>{const ct=z.getDay()===0||z.getDay()===6,mt=N===Jr;return n.jsx("div",{style:{...Q.gDayCell,...ct?Q.gWeekend:{},...mt?Q.gTodayCell:{}},children:z.getDate()},N)})})]}),sp.map(z=>n.jsxs("div",{children:[n.jsxs("div",{style:Q.gGroupRow,children:[y?n.jsxs("div",{style:Q.gGroupLabel,children:[z.label,n.jsx("span",{style:Q.gGroupCount,children:z.items.length})]}):n.jsxs("div",{style:Q.gGroupChip,children:[z.label," · ",z.items.length]}),n.jsx("div",{style:{width:No*Yt,flexShrink:0}})]}),z.items.map(N=>{var Td;const ct=((Td=Pe[N.pillar])==null?void 0:Td.dot)||"#9A968C",mt=Math.round((en(N.start_date)-ae.start)/Zn),Vt=lp(N),ke=(_==null?void 0:_.id)===N.id,ht=ke?_.dx:0,we=Eh(N),ir=(M==null?void 0:M.id)===N.id,Zr=we?aa(N):Vt,Jt=we?Vg(N):Vt,Tr=ir?Math.max(Zr,Math.min(Jt,Vt+Math.round(M.dx/Yt))):Vt,yt=Tr*Yt-4,Id=yt>=54,zd=`${N.title} · ${N.start_date} → ${N.end_date} · ${Tr} day${Tr>1?"s":""}${we?` (max ${Jt})`:""}`;return n.jsxs("div",{style:Q.gRow,children:[y&&n.jsxs("div",{style:{...Q.gLabel,paddingLeft:12},children:[n.jsx("span",{style:{...Q.ganttRowDot,background:ct}}),n.jsx("span",{style:{...Q.gHzTag,color:ct,borderColor:ct},children:Ih[N.horizon]}),n.jsx("span",{style:Q.gLabelText,title:N.title,children:N.title}),n.jsxs("span",{style:Q.gDurChip,children:[Tr,"d"]})]}),n.jsxs("div",{style:{...Q.gTrack,width:No*Yt},children:[Oo&&n.jsx("div",{style:{...Q.gTodayLine,left:Jr*Yt}}),n.jsxs("div",{onPointerDown:qr=>{qr.preventDefault(),D({id:N.id,startX:qr.clientX,dx:0,g:N})},style:{...Q.gBar,left:mt*Yt+2,width:yt,background:ct,cursor:ke?"grabbing":"grab",transform:ht?`translateX(${ht}px)`:"none",zIndex:ke||ir?6:1,boxShadow:ke||ir?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:zd,children:[we&&Tr>Zr&&n.jsx("div",{style:{position:"absolute",left:Zr*Yt,top:0,bottom:0,right:0,background:"#C2536B",borderRadius:"0 5px 5px 0"}}),n.jsx(Vf,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff",position:"relative",zIndex:1}}),Id&&n.jsx("span",{style:{...Q.gBarLabel,position:"relative",zIndex:1},children:N.title}),we&&n.jsx("div",{onPointerDown:qr=>{qr.preventDefault(),qr.stopPropagation(),et({id:N.id,startX:qr.clientX,dx:0,g:N})},style:Q.resizeHandle,title:`Drag to extend up to ${Jt} days`,children:n.jsx("div",{style:Q.resizeGrip})})]}),!Id&&n.jsx("span",{style:{...Q.gBarOutside,left:mt*Yt+yt+8+ht},title:zd,children:N.title})]})]},N.id)})]},z.key))]})}):n.jsx("div",{style:Q.ganttEmpty,children:"No goals on the timeline. Click the eye icon on a goal to show it here."}),ae&&n.jsxs("div",{style:Q.gLegend,children:[n.jsxs("span",{style:Q.gLegendItem,children:[n.jsx("span",{style:{...Q.gLegendBar}})," bar length = number of days"]}),n.jsxs("span",{style:Q.gLegendItem,children:[n.jsx("span",{style:Q.gLegendToday})," today"]})]})]}),n.jsx(Mn,{toasts:dt,onUndo:wt,onDismiss:Dt})]})}const Q={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},pillarPicker:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},pillarChip:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},list:{background:"var(--surface)",borderRadius:12,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"hidden"},row:{display:"flex",alignItems:"center",gap:9,padding:"9px 10px",borderRadius:8,flexWrap:"nowrap"},caret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},horizonTag:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",border:"1px solid",borderRadius:5,padding:"2px 6px",flexShrink:0},title:{fontSize:14,fontWeight:500,lineHeight:1.3,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",userSelect:"none",WebkitUserSelect:"none",cursor:"default"},titleFull:{whiteSpace:"normal",overflow:"visible",textOverflow:"clip",wordBreak:"break-word"},periodTag:{fontSize:11,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"3px 8px",borderRadius:12,flexShrink:0},rowAdd:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,flexShrink:0},menuBackdrop:{position:"fixed",inset:0,zIndex:40},goalMenu:{position:"fixed",zIndex:41,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 6px 24px rgba(0,0,0,0.18)",padding:4,minWidth:180,display:"flex",flexDirection:"column"},menuItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:7,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text)",textAlign:"left"},rootAdd:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"var(--text-2)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"9px 12px",cursor:"pointer",fontWeight:600,fontFamily:"inherit",marginTop:6,width:"100%",justifyContent:"center"},addBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 0 6px 28px",flexWrap:"wrap"},editBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 10px",flexWrap:"wrap",background:"var(--bg)",borderRadius:8,margin:"4px 0"},input:{border:"1px solid var(--border)",borderRadius:7,padding:"8px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",flex:1,minWidth:120},monthSelect:{border:"1px solid var(--border)",borderRadius:7,padding:"8px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},inheritTag:{fontSize:11.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"6px 9px",borderRadius:7,flexShrink:0},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},ganttWrap:{background:"var(--surface)",borderRadius:12,padding:"16px 14px",marginTop:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},ganttTop:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10,marginBottom:14},ganttTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",fontFamily:"'Fraunces',Georgia,serif"},ganttHint:{fontSize:11.5,color:"var(--text-3)",fontWeight:500},labelToggle:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 10px",borderRadius:8,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},gGroupChip:{position:"sticky",left:0,zIndex:3,background:"var(--surface-2)",padding:"5px 10px",fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",whiteSpace:"nowrap",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center"},allHint:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",padding:"10px 12px"},ganttEmpty:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},ganttScroll:{overflowX:"auto"},ganttRowDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},gBandRow:{display:"flex",alignItems:"stretch",borderBottom:"1px solid var(--border)"},gLabelHead:{width:uo,flexShrink:0,position:"sticky",left:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",padding:"6px 10px",fontSize:12,fontWeight:700,color:"var(--text-2)"},gMonthCell:{flexShrink:0,borderLeft:"1px solid var(--border)",fontSize:10.5,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gDayCell:{width:Yt,flexShrink:0,textAlign:"center",fontSize:10,color:"var(--text-3)",padding:"4px 0",borderLeft:"1px solid var(--border)",fontWeight:600},gWeekend:{background:"var(--surface-2)"},gTodayCell:{background:"var(--hover)",color:"var(--accent)",fontWeight:800},gGroupRow:{display:"flex",alignItems:"stretch",background:"var(--surface-2)",borderBottom:"1px solid var(--border)",borderTop:"1px solid var(--border)"},gGroupLabel:{width:uo,flexShrink:0,position:"sticky",left:0,background:"var(--surface-2)",zIndex:3,padding:"6px 12px",fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",gap:7},gGroupCount:{fontSize:10,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},gHzTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.04em",border:"1px solid",borderRadius:4,padding:"1px 4px",flexShrink:0},gRow:{display:"flex",alignItems:"stretch",minHeight:36,borderBottom:"1px solid var(--border)"},gLabel:{width:uo,flexShrink:0,display:"flex",alignItems:"center",gap:7,position:"sticky",left:0,background:"var(--surface)",zIndex:2,borderRight:"1px solid var(--border)",paddingRight:8,overflow:"hidden"},gLabelText:{flex:1,minWidth:0,fontSize:12,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},gDurChip:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",borderRadius:10,padding:"1px 6px",flexShrink:0,marginRight:6},gTrack:{position:"relative",flexShrink:0,minHeight:36,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent ${Yt}px)`},gBar:{position:"absolute",top:9,height:18,borderRadius:5,display:"flex",alignItems:"center",padding:"0 7px",boxShadow:"0 1px 2px rgba(0,0,0,0.15)",overflow:"hidden",zIndex:1},gBarLabel:{fontSize:11,fontWeight:600,color:"#fff",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},gBarOutside:{position:"absolute",top:9,height:18,display:"flex",alignItems:"center",fontSize:11,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",pointerEvents:"none",zIndex:1},resizeHandle:{position:"absolute",right:0,top:0,bottom:0,width:12,cursor:"ew-resize",display:"grid",placeItems:"center",touchAction:"none",zIndex:2},resizeGrip:{width:2,height:11,background:"rgba(255,255,255,0.9)",borderRadius:1,boxShadow:"3px 0 0 rgba(255,255,255,0.6)"},gTodayLine:{position:"absolute",top:0,bottom:0,width:2,background:"#C2536B",zIndex:0,opacity:.6},gLegend:{display:"flex",gap:16,marginTop:12,fontSize:11,color:"var(--text-3)",flexWrap:"wrap"},gLegendItem:{display:"flex",alignItems:"center",gap:6,fontWeight:600},gLegendBar:{width:18,height:8,borderRadius:3,background:"var(--accent)",display:"inline-block"},gLegendToday:{width:2,height:12,background:"#C2536B",display:"inline-block"}},Yr={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.12)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.12)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.12)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.12)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.12)"}},Qb=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Fh=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],md=t=>t.toISOString().slice(0,10),Ah=()=>md(new Date),Wh=(t=0)=>{const e=new Date,r=e.getDay(),o=r===0?-6:1-r,s=new Date(e);return s.setDate(e.getDate()+o+t*7),Array.from({length:7},(i,l)=>{const a=new Date(s);return a.setDate(s.getDate()+l),md(a)})},Mh=(t=0)=>{const e=new Date,r=new Date(e.getFullYear(),e.getMonth()+t,1),o=r.getFullYear(),s=r.getMonth(),i=new Date(o,s+1,0).getDate(),l=r.getDay(),a=l===0?6:l-1,d=Array.from({length:i},(m,v)=>`${o}-${String(s+1).padStart(2,"0")}-${String(v+1).padStart(2,"0")}`),g=r.toLocaleDateString("en-US",{month:"long",year:"numeric"});return{dates:d,startOffset:a,label:g,year:o,month:s}},Yg=t=>new Date(t+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"}),Fr=Ah(),_h=new Date().getFullYear();function Lh(){var w,V;const[t,e]=p.useState([]),[r,o]=p.useState("ALL"),[s,i]=p.useState(!1),[l,a]=p.useState(!1),[d,g]=p.useState(!1),[m,v]=p.useState(null),[f,j]=p.useState(null),[k,S]=p.useState({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week"}),[T,b]=p.useState(!1),[c,u]=p.useState([]),x=p.useCallback(()=>$.getHabits().then(e).catch(console.error),[]);p.useEffect(()=>{x()},[x]),p.useEffect(()=>{$.getSetting("habit_order").then(h=>{Array.isArray(h==null?void 0:h.value)&&u(h.value)}).catch(()=>{})},[]);const y=p.useMemo(()=>c.length?[...t].sort((h,P)=>{const at=c.indexOf(h.id),dt=c.indexOf(P.id);return at===-1&&dt===-1?0:at===-1?1:dt===-1?-1:at-dt}):t,[t,c]),A=async h=>{u(h),await $.setSetting("habit_order",h),b(!1)};p.useEffect(()=>{const h=()=>{const P=window.innerWidth<720;i(P),P||a(!1)};return h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]);const{deleteItem:_,toasts:D,handleUndo:E,handleDismiss:M}=Wn($.deleteHabit,$.restoreHabit,x),et=h=>{o(h),s&&a(!1)},L=(h,P)=>{(h.type==="minimum"||h.type==="maximum")&&h.period==="day"?j({habit:h,date:P}):C(h.id,P)},C=async(h,P)=>{await $.toggleHabitLog(h,P),x()},U=async(h,P,at,dt)=>{await $.setHabitLogCount(h,P,at,dt),j(null),x()},ut=async(h,P)=>{await $.clearHabitLog(h,P),j(null),x()},q=async()=>{if(!k.name.trim())return;const h={name:k.name.trim(),pillar:k.pillar,target_per_week:Number(k.target_per_week)||7,type:k.type,target_count:k.type!=="regular"?Number(k.target_count)||1:null,period:k.type!=="regular"?k.period:null};await $.createHabit(h),S({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week"}),g(!1),x()},B=async(h,P)=>{r===h&&o("ALL"),_(h,P)},R=t.find(h=>h.id===r),F=h=>new Set(h.logs||[]),O={...W.sidebar,...s?W.sidebarOverlay:{},...s&&!l?W.sidebarHidden:{}};return n.jsxs("div",{style:W.shell,children:[s&&l&&n.jsx("div",{style:W.backdrop,onClick:()=>a(!1)}),n.jsxs("aside",{style:O,children:[n.jsxs("div",{style:W.sideTop,children:[n.jsx("div",{style:W.brand,children:"Anvil · Habits"}),s&&n.jsx("button",{onClick:()=>a(!1),style:W.closeBtn,children:n.jsx(xt,{size:18})})]}),n.jsxs("div",{style:{...W.sideItem,...r==="ALL"?W.sideItemOn:{},cursor:"default",padding:"2px 6px 2px 10px"},children:[n.jsxs("button",{onClick:()=>et("ALL"),style:{display:"flex",alignItems:"center",gap:9,flex:1,border:"none",background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:r==="ALL"?600:500,color:"var(--text-2)",padding:"7px 0"},children:[n.jsx(Pb,{size:15}),n.jsx("span",{style:W.sideLabel,children:"All Habits"}),n.jsx("span",{style:W.sideCount,children:t.length})]}),n.jsx("button",{onClick:h=>{h.stopPropagation(),b(!0)},style:W.tinyBtn,title:"Reorder habits",children:n.jsx(ve,{size:12})})]}),n.jsx("div",{style:W.sideDivider}),y.map(h=>{var dt;const P=r===h.id,at=((dt=Yr[h.pillar])==null?void 0:dt.dot)||"#9A968C";return n.jsxs("button",{onClick:()=>et(h.id),style:{...W.sideItem,...P?W.sideItemOn:{}},children:[n.jsx("span",{style:{...W.sideDot,background:at}}),n.jsx("span",{style:W.sideLabel,children:h.name}),n.jsxs("span",{style:W.sideStreak,children:[n.jsx(An,{size:11})," ",h.streak]})]},h.id)}),d?n.jsx(Ph,{habit:k,onChange:S,onSave:q,onCancel:()=>g(!1)}):n.jsxs("button",{onClick:()=>g(!0),style:W.sideNewBtn,children:[n.jsx(oe,{size:13})," New habit"]})]}),n.jsxs("main",{style:W.main,children:[s&&n.jsxs("button",{onClick:()=>a(!0),style:W.hamburger,children:[n.jsx(cd,{size:18}),n.jsx("span",{style:W.hamburgerLabel,children:r==="ALL"?"All Habits":R==null?void 0:R.name})]}),r==="ALL"?n.jsx($h,{habits:y,dayAction:L,logSet:F,onDelete:B,onEdit:h=>v(h)}):n.jsx(Hh,{habit:R,dayAction:L,logSet:F,onDelete:()=>B(R.id,R.name),onEdit:()=>v(R),setNote:(h,P)=>$.setHabitLogNote(R.id,h,P).then(x)}),r==="ALL"&&n.jsx(Vh,{year:_h})]}),T&&n.jsx(Uh,{habits:y,onSave:A,onClose:()=>b(!1)}),m&&n.jsx(Nh,{habit:m,onSave:async h=>{await $.updateHabit(m.id,h),v(null),x()},onClose:()=>v(null)}),f&&n.jsx(Oh,{habit:f.habit,date:f.date,initialCount:((w=f.habit.log_counts)==null?void 0:w[f.date])??0,initialNote:((V=f.habit.log_notes)==null?void 0:V[f.date])??"",onSave:(h,P)=>U(f.habit.id,f.date,h,P),onClear:()=>ut(f.habit.id,f.date),onClose:()=>j(null)}),n.jsx(Mn,{toasts:D,onUndo:E,onDismiss:M})]})}function Ph({habit:t,onChange:e,onSave:r,onCancel:o}){const s=t.type!=="regular";return n.jsxs("div",{style:W.addBox,children:[n.jsx("input",{autoFocus:!0,placeholder:"Habit name",value:t.name,onChange:i=>e(l=>({...l,name:i.target.value})),onKeyDown:i=>i.key==="Enter"&&r(),style:W.sideInput}),n.jsx("select",{value:t.pillar,onChange:i=>e(l=>({...l,pillar:i.target.value})),style:W.sideInput,children:Object.keys(Yr).map(i=>n.jsx("option",{children:i},i))}),n.jsxs("select",{value:t.type,onChange:i=>e(l=>({...l,type:i.target.value})),style:W.sideInput,children:[n.jsx("option",{value:"regular",children:"Regular (yes/no)"}),n.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),n.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),s&&n.jsxs("div",{style:{display:"flex",gap:6},children:[n.jsx("input",{type:"number",min:1,placeholder:"N",value:t.target_count||"",onChange:i=>e(l=>({...l,target_count:i.target.value})),style:{...W.sideInput,width:60}}),n.jsx("select",{value:t.period,onChange:i=>e(l=>({...l,period:i.target.value})),style:W.sideInput,children:["day","week","month","year"].map(i=>n.jsx("option",{children:i},i))})]}),n.jsxs("div",{style:{display:"flex",gap:6},children:[n.jsx("button",{onClick:r,style:W.sideAddBtn,children:n.jsx(jt,{size:13})}),n.jsx("button",{onClick:o,style:W.sideCancelBtn,children:n.jsx(xt,{size:13})})]})]})}function Nh({habit:t,onSave:e,onClose:r}){const[o,s]=p.useState(t.name),[i,l]=p.useState(t.type||"regular"),[a,d]=p.useState(t.target_count||""),[g,m]=p.useState(t.period||"week"),[v,f]=p.useState(t.reminder_time||""),j=()=>e({name:o.trim(),type:i,target_count:i!=="regular"?Number(a):null,period:i!=="regular"?g:null,reminder_time:v||null});return n.jsx("div",{style:W.modalOverlay,onClick:r,children:n.jsxs("div",{style:W.modal,onClick:k=>k.stopPropagation(),children:[n.jsxs("div",{style:W.modalHead,children:["Edit Habit",n.jsx("button",{onClick:r,style:W.closeBtn,children:n.jsx(xt,{size:16})})]}),n.jsx("label",{style:W.modalLabel,children:"Name"}),n.jsx("input",{value:o,onChange:k=>s(k.target.value),style:W.sideInput}),n.jsx("label",{style:W.modalLabel,children:"Type"}),n.jsxs("select",{value:i,onChange:k=>l(k.target.value),style:W.sideInput,children:[n.jsx("option",{value:"regular",children:"Regular (yes/no)"}),n.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),n.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),i!=="regular"&&n.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[n.jsx("input",{type:"number",min:1,value:a,onChange:k=>d(k.target.value),style:{...W.sideInput,width:70}}),n.jsx("select",{value:g,onChange:k=>m(k.target.value),style:W.sideInput,children:["day","week","month","year"].map(k=>n.jsx("option",{children:k},k))})]}),n.jsx("label",{style:W.modalLabel,children:"Reminder time"}),n.jsx("input",{type:"time",value:v,onChange:k=>f(k.target.value),style:W.sideInput}),n.jsx("button",{onClick:j,style:{...W.sideAddBtn,width:"100%",marginTop:10,height:36},children:"Save"})]})})}function Oh({habit:t,date:e,initialCount:r,initialNote:o,onSave:s,onClear:i,onClose:l}){const[a,d]=p.useState(r??0),[g,m]=p.useState(o??""),v=t.target_count,f=t.type==="minimum"?a>=v:a>0&&a<=v,j=t.type==="maximum"&&a>v,k=f?"#4C9A6B":j?"#C2536B":"#C2773B",S=f?"✓ Goal met":j?"Over the limit":"Not met yet";return n.jsx("div",{style:W.modalOverlay,onClick:l,children:n.jsxs("div",{style:W.modal,onClick:T=>T.stopPropagation(),children:[n.jsxs("div",{style:W.modalHead,children:[t.name,n.jsx("button",{onClick:l,style:W.closeBtn,children:n.jsx(xt,{size:16})})]}),n.jsxs("div",{style:{fontSize:12,color:"var(--text-3)",marginBottom:2},children:[e," · ",t.type==="minimum"?`at least ${v}`:`no more than ${v}`," / ",t.period]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:20,margin:"14px 0 6px"},children:[n.jsx("button",{onClick:()=>d(T=>Math.max(0,T-1)),style:W.counterBtn,children:"−"}),n.jsx("span",{style:{fontSize:38,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:52,textAlign:"center",color:k},children:a}),n.jsx("button",{onClick:()=>d(T=>T+1),style:W.counterBtn,children:"+"})]}),n.jsx("div",{style:{textAlign:"center",fontSize:12.5,fontWeight:700,color:k,marginBottom:12},children:S}),n.jsx("textarea",{value:g,onChange:T=>m(T.target.value),placeholder:"Add a comment (optional)…",style:{...W.sideInput,minHeight:56,resize:"vertical"}}),n.jsxs("div",{style:{display:"flex",gap:8,marginTop:10},children:[n.jsxs("button",{onClick:i,style:{...W.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[n.jsx(xt,{size:14})," Delete"]}),n.jsxs("button",{onClick:()=>s(a,g),style:{...W.sideAddBtn,flex:1,justifyContent:"center",height:38},children:[n.jsx(jt,{size:14})," Set"]})]})]})})}function $h({habits:t,dayAction:e,logSet:r,onDelete:o,onEdit:s}){const[i,l]=p.useState(0),a=Wh(i),d=`${Yg(a[0])} – ${Yg(a[6])}${i===0?" · This week":""}`;return n.jsxs("div",{children:[n.jsxs("div",{style:W.mainHead,children:[n.jsx("div",{style:W.eyebrow,children:"Weekly view"}),n.jsx("h1",{style:W.h1,children:"All Habits"})]}),n.jsxs("div",{style:W.navBar,children:[n.jsx("button",{onClick:()=>l(g=>g-1),style:W.navBtn,children:n.jsx(Fn,{size:16})}),n.jsx("span",{style:W.navLabel,children:d}),n.jsx("button",{onClick:()=>l(g=>Math.min(0,g+1)),disabled:i>=0,style:{...W.navBtn,...i>=0?W.navBtnDisabled:{}},children:n.jsx(Xr,{size:16})})]}),n.jsxs("div",{style:W.weekCard,children:[n.jsxs("div",{style:W.weekHeadRow,children:[n.jsx("div",{style:W.weekNameCol}),Qb.map((g,m)=>n.jsxs("div",{style:W.weekDayHead,children:[n.jsx("span",{style:W.weekDayName,children:g}),n.jsx("span",{style:{...W.weekDayNum,...a[m]===Fr?W.weekDayToday:{}},children:new Date(a[m]+"T00:00").getDate()})]},g)),n.jsx("div",{style:W.weekStreakCol,children:"Streak"})]}),t.map(g=>{var A,_;const m=((A=Yr[g.pillar])==null?void 0:A.dot)||"#9A968C",v=((_=Yr[g.pillar])==null?void 0:_.soft)||"rgba(0,0,0,0.05)",f=r(g),j=g.type==="minimum"&&["week","month","year"].includes(g.period),k=g.target_count||0,S=g.logs||[],T=D=>S.filter(E=>E.slice(0,7)===D).length,b=D=>S.filter(E=>E.slice(0,4)===D).length,c=a.filter(D=>f.has(D)).length,u=D=>j?g.period==="week"?c>=k:g.period==="month"?T(D.slice(0,7))>=k:g.period==="year"?b(D.slice(0,4))>=k:!1:!1,x=j&&a.some(u),y=g.period==="week"?c:g.period==="month"?T(a[0].slice(0,7)):g.period==="year"?b(a[0].slice(0,4)):0;return n.jsxs("div",{style:W.weekRow,children:[n.jsxs("div",{style:{...W.weekNameCol,flexDirection:"column",alignItems:"flex-start",gap:2},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx("span",{style:{...W.sideDot,background:m}}),n.jsx("span",{style:W.weekHabitName,children:g.name})]}),g.type!=="regular"&&n.jsx("span",{style:W.typeBadge,children:g.type==="minimum"?`≥${g.target_count}/${g.period}`:`≤${g.target_count}/${g.period}`})]}),a.map((D,E)=>{var O,w;const M=f.has(D),et=D>Fr,L=(g.type==="minimum"||g.type==="maximum")&&g.period==="day",C=(O=g.log_counts)==null?void 0:O[D],U=C!=null,ut=!!((w=g.log_notes)!=null&&w[D]),q=u(D),B=E>0&&u(a[E-1]),R=E<a.length-1&&u(a[E+1]),F=M||q;return n.jsxs("div",{style:{...W.weekCell,position:"relative"},children:[q&&n.jsx("span",{style:{...W.chainLine,background:m,left:B?0:"50%",right:R?0:"50%"}}),n.jsx("button",{disabled:et,onClick:()=>e(g,D),style:{...W.tick,position:"relative",zIndex:1,...F?{background:m,borderColor:m,color:"#fff"}:{},...L&&U&&!M?{borderColor:m,color:m}:{},...et&&!F?W.tickFuture:{}},children:L?U?n.jsx("span",{style:{fontSize:12,fontWeight:700},children:C}):null:M&&n.jsx(jt,{size:14,color:"#fff",strokeWidth:3})}),ut&&n.jsx("span",{style:W.cellNoteBubble})]},D)}),n.jsx("div",{style:W.weekStreakCol,children:x?n.jsxs("span",{style:{...W.streakPill,background:v,color:m},children:[n.jsx(oa,{size:12})," ",y,"/",k]}):n.jsxs("span",{style:{...W.streakPill,background:v,color:m},children:[n.jsx(An,{size:12})," ",g.streak]})})]},g.id)}),t.length===0&&n.jsx("div",{style:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},children:"No habits yet — add one from the sidebar."})]})]})}function Hh({habit:t,dayAction:e,logSet:r,onDelete:o,onEdit:s,setNote:i}){var w,V;const[l,a]=p.useState(null),[d,g]=p.useState(""),[m,v]=p.useState(null),[f,j]=p.useState(0),k=p.useRef(null);if(!t)return null;const S=((w=Yr[t.pillar])==null?void 0:w.dot)||"#9A968C",T=((V=Yr[t.pillar])==null?void 0:V.soft)||"rgba(0,0,0,0.05)",b=r(t),{dates:c,startOffset:u,label:x,year:y}=Mh(f),A=c.filter(h=>h<=Fr&&b.has(h)).length,_=c.filter(h=>h<=Fr).length,D=_>0?Math.round(A/_*100):0,E=t.type==="minimum"&&(t.period==="month"||t.period==="year"),M=t.period==="year"?(t.logs||[]).filter(h=>h.startsWith(`${y}-`)).length:c.filter(h=>b.has(h)).length,et=E&&M>=(t.target_count||0),L=t.type==="minimum"&&t.period==="week",C=t.target_count||0,U=h=>{const P=new Date(h+"T00:00"),at=P.getDay(),dt=new Date(P);dt.setDate(P.getDate()+(at===0?-6:1-at));let wt=0;for(let Dt=0;Dt<7;Dt++){const ft=new Date(dt);ft.setDate(dt.getDate()+Dt),b.has(md(ft))&&wt++}return wt},ut=h=>E?et:L?U(h)>=C:!1,q=L?U(Fr):0,B=L&&q>=C,R=h=>{k.current=setTimeout(()=>a(h),500)},F=()=>clearTimeout(k.current),O=h=>{var P;v(h),g(((P=t.log_notes)==null?void 0:P[h])||""),a(null)};return n.jsxs("div",{children:[n.jsxs("div",{style:W.mainHead,children:[n.jsxs("div",{children:[n.jsxs("div",{style:W.eyebrow,children:[n.jsx("span",{style:{...W.sideDot,background:S,marginRight:6}}),t.pillar," · Monthly view"]}),n.jsx("h1",{style:W.h1,children:t.name})]}),n.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[n.jsxs("button",{onClick:s,style:W.actionBtn,children:[n.jsx(ve,{size:14})," Edit"]}),n.jsxs("button",{onClick:o,style:{...W.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[n.jsx(xt,{size:14})," Delete"]}),t.reminder_time&&n.jsxs("button",{style:W.actionBtn,children:[n.jsx(Wb,{size:14})," ",t.reminder_time]})]})]}),n.jsxs("div",{style:W.statStrip,children:[n.jsx(Yn,{label:"Current streak",value:`${t.streak} days`,c:S,soft:T,flame:!0}),n.jsx(Yn,{label:"Done this month",value:`${A}/${_}`,c:S,soft:T}),n.jsx(Yn,{label:"Completion",value:`${D}%`,c:S,soft:T}),t.type==="regular"?n.jsx(Yn,{label:"Weekly target",value:`${t.target_per_week}×`,c:S,soft:T}):n.jsx(Yn,{label:t.type==="minimum"?"Min target":"Max allowed",value:`${t.target_count}/${t.period}`,c:S,soft:T})]}),n.jsxs("div",{style:W.navBar,children:[n.jsx("button",{onClick:()=>j(h=>h-1),style:W.navBtn,children:n.jsx(Fn,{size:16})}),n.jsxs("span",{style:W.navLabel,children:[x,f===0?" · This month":""]}),n.jsx("button",{onClick:()=>j(h=>Math.min(0,h+1)),disabled:f>=0,style:{...W.navBtn,...f>=0?W.navBtnDisabled:{}},children:n.jsx(Xr,{size:16})})]}),E&&n.jsxs("div",{style:{...W.chainBanner,background:et?T:"var(--bg)",color:et?S:"var(--text-3)"},children:[n.jsx(oa,{size:15}),et?`${t.period==="year"?"Yearly":"Monthly"} chain complete — ${M}/${t.target_count} connected`:`${M}/${t.target_count} this ${t.period} · ${(t.target_count||0)-M} more to connect the chain`]}),L&&f===0&&n.jsxs("div",{style:{...W.chainBanner,background:B?T:"var(--bg)",color:B?S:"var(--text-3)"},children:[n.jsx(oa,{size:15}),B?`This week's chain complete — ${q}/${C} connected`:`${q}/${C} this week · ${Math.max(0,C-q)} more to connect the chain`]}),n.jsxs("div",{style:W.monthCard,children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[n.jsx("div",{style:W.monthTitle,children:x}),n.jsx("span",{style:{fontSize:11,color:"var(--text-3)"},children:"Long-press a day for options"})]}),n.jsx("div",{style:W.monthDow,children:Qb.map(h=>n.jsx("div",{style:W.monthDowCell,children:h},h))}),n.jsxs("div",{style:W.monthGrid,children:[Array.from({length:u}).map((h,P)=>n.jsx("div",{},`pad${P}`)),c.map((h,P)=>{var _n,Po;const at=P+1,dt=b.has(h),wt=h>Fr,Dt=h===Fr,ft=!!((_n=t.log_notes)!=null&&_n[h]),Tt=(t.type==="minimum"||t.type==="maximum")&&t.period==="day",Y=(Po=t.log_counts)==null?void 0:Po[h],pt=Y!=null,gt=ut(h),Ct=dt||gt,le=(u+P)%7;return n.jsxs("div",{style:{position:"relative"},children:[gt&&n.jsx("span",{style:{...W.chainLine,background:S,...le===0?{left:"50%"}:{left:-6},...le===6?{right:"50%"}:{right:-6}}}),n.jsx("button",{disabled:wt,onClick:()=>e(t,h),onMouseDown:()=>!Tt&&R(h),onMouseUp:F,onTouchStart:()=>!Tt&&R(h),onTouchEnd:F,style:{...W.monthDay,position:"relative",zIndex:1,...Ct?{background:S,borderColor:S,color:"#fff"}:{},...Tt&&pt&&!dt?{borderColor:S,color:S}:{},...wt&&!Ct?W.monthDayFuture:{},...Dt&&!Ct?{borderColor:S,borderWidth:2}:{},width:"100%"},children:at}),Tt&&pt&&n.jsx("span",{style:{...W.countBadge,background:dt?"#4C9A6B":S},children:Y}),ft&&n.jsx("span",{style:W.noteIndicator}),l===h&&n.jsx(Gh,{onEdit:s,onDelete:o,onAddNote:()=>O(h),onRemind:s,onClose:()=>a(null)})]},h)})]})]}),m&&n.jsxs("div",{style:W.noteBox,children:[n.jsxs("div",{style:{fontWeight:600,fontSize:13,marginBottom:6},children:["Note for ",m]}),n.jsx("textarea",{value:d,onChange:h=>g(h.target.value),placeholder:"Add a note for this day…",style:{...W.sideInput,minHeight:60,resize:"vertical"}}),n.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[n.jsxs("button",{onClick:()=>{i(m,d),v(null)},style:W.sideAddBtn,children:[n.jsx(jt,{size:13})," Save"]}),n.jsx("button",{onClick:()=>v(null),style:W.sideCancelBtn,children:n.jsx(xt,{size:13})})]})]})]})}function Gh({onEdit:t,onDelete:e,onAddNote:r,onRemind:o,onClose:s}){return n.jsxs("div",{style:W.longPressMenu,children:[n.jsxs("button",{style:W.menuItem,onClick:()=>{t(),s()},children:[n.jsx(ve,{size:13})," Edit"]}),n.jsxs("button",{style:W.menuItem,onClick:()=>{r(),s()},children:[n.jsx(dd,{size:13})," Add note"]}),n.jsxs("button",{style:W.menuItem,onClick:()=>{o(),s()},children:[n.jsx(Wb,{size:13})," Remind"]}),n.jsxs("button",{style:{...W.menuItem,color:"#C2536B"},onClick:()=>{e(),s()},children:[n.jsx(xt,{size:13})," Delete"]})]})}function Uh({habits:t,onSave:e,onClose:r}){const[o,s]=p.useState([...t]),i=(l,a)=>{const d=[...o],g=l+a;g<0||g>=d.length||([d[l],d[g]]=[d[g],d[l]],s(d))};return n.jsx("div",{style:W.modalOverlay,onClick:r,children:n.jsxs("div",{style:{...W.modal,maxHeight:"80vh",overflowY:"auto"},onClick:l=>l.stopPropagation(),children:[n.jsxs("div",{style:W.modalHead,children:["Reorder Habits",n.jsx("button",{onClick:r,style:W.closeBtn,children:n.jsx(xt,{size:16})})]}),n.jsx("p",{style:{fontSize:12,color:"var(--text-3)",margin:"0 0 10px"},children:"Use arrows to set the display order."}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:o.map((l,a)=>{var g;const d=((g=Yr[l.pillar])==null?void 0:g.dot)||"#9A968C";return n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"9px 10px",background:"var(--bg)",borderRadius:9,border:"1px solid var(--border)"},children:[n.jsx("span",{style:{...W.sideDot,background:d}}),n.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500},children:l.name}),n.jsx("button",{onClick:()=>i(a,-1),disabled:a===0,style:{...W.navBtn,width:28,height:28,opacity:a===0?.3:1,fontSize:14},children:"↑"}),n.jsx("button",{onClick:()=>i(a,1),disabled:a===o.length-1,style:{...W.navBtn,width:28,height:28,opacity:a===o.length-1?.3:1,fontSize:14},children:"↓"})]},l.id)})}),n.jsxs("button",{onClick:()=>e(o.map(l=>l.id)),style:{...W.sideAddBtn,width:"100%",marginTop:14,height:38,justifyContent:"center"},children:[n.jsx(jt,{size:14})," Save Order"]})]})})}function Vh({year:t}){const[e,r]=p.useState([]);if(p.useEffect(()=>{$.getHabitsYearly(t).then(r).catch(console.error)},[t]),!e.length)return null;const o=Array.from({length:12},(i,l)=>{const a=e.reduce((g,m)=>{var v;return g+(((v=m.monthly[l+1])==null?void 0:v.done)||0)},0),d=e.reduce((g,m)=>{var v;return g+Math.floor((((v=m.monthly[l+1])==null?void 0:v.days)||30)/7*7)},0);return d>0?Math.round(a/d*100):0}),s=Math.max(...o,1);return n.jsxs("div",{style:{...W.monthCard,marginTop:18},children:[n.jsxs("div",{style:W.monthTitle,children:[t," Completion"]}),n.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:6,height:80,marginTop:12},children:o.map((i,l)=>n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[n.jsx("div",{style:{width:"100%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",height:`${i/s*60}px`,minHeight:2,opacity:i>0?1:.15},title:`${i}%`}),n.jsx("span",{style:{fontSize:9,color:"var(--text-3)",fontWeight:600},children:Fh[l]})]},l))})]})}function Yn({label:t,value:e,c:r,soft:o,flame:s}){return n.jsxs("div",{style:{...W.stat,background:o},children:[n.jsx("div",{style:W.statLabel,children:t}),n.jsxs("div",{style:{...W.statValue,color:r},children:[s&&n.jsx(An,{size:15})," ",e]})]})}const W={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:230,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",padding:"20px 12px",display:"flex",flexDirection:"column",gap:3,overflowY:"auto"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.18)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)",boxShadow:"none"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.38)",zIndex:20},sideTop:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 4px"},closeBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",marginBottom:8},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700,padding:"0 6px 14px"},sideItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"9px 10px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:500,color:"var(--text-2)",textAlign:"left"},sideItemOn:{background:"var(--hover)",fontWeight:600},sideLabel:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},sideCount:{fontSize:11,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:10,padding:"1px 7px"},sideStreak:{display:"flex",alignItems:"center",gap:3,fontSize:11,fontWeight:600,color:"#C2773B"},sideDot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},sideDivider:{height:1,background:"var(--border)",margin:"8px 6px"},addBox:{padding:"10px 6px",display:"flex",flexDirection:"column",gap:6},sideInput:{border:"1px solid var(--border)",borderRadius:7,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},sideAddBtn:{border:"none",background:"#4C9A6B",color:"#fff",height:30,padding:"0 12px",borderRadius:7,cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontSize:13,fontFamily:"inherit"},sideCancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:30,height:30,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},sideNewBtn:{display:"flex",alignItems:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",borderRadius:8,padding:"8px 10px",fontSize:12.5,color:"var(--text-3)",fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginTop:6,justifyContent:"center"},main:{flex:1,padding:"26px",overflowX:"hidden",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:200},mainHead:{marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:5,display:"flex",alignItems:"center"},h1:{fontSize:27,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},actionBtn:{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:500,color:"var(--text-2)",border:"1px solid var(--border)",background:"var(--surface)",padding:"5px 10px",borderRadius:7,cursor:"pointer",fontFamily:"inherit"},weekCard:{background:"var(--surface)",borderRadius:12,padding:"8px 14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"auto"},weekHeadRow:{display:"flex",alignItems:"flex-end",padding:"10px 0",borderBottom:"1px solid var(--border)",minWidth:480},weekNameCol:{width:160,flexShrink:0,display:"flex",alignItems:"center",gap:8},weekDayHead:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2},weekDayName:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekDayNum:{fontSize:12,fontWeight:600,color:"var(--text-2)",width:22,height:22,display:"grid",placeItems:"center",borderRadius:"50%"},weekDayToday:{background:"var(--accent-strong)",color:"#fff"},weekStreakCol:{width:64,flexShrink:0,textAlign:"center",fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekRow:{display:"flex",alignItems:"center",padding:"9px 0",borderBottom:"1px solid #F4F2EC",minWidth:480},weekHabitName:{fontSize:13,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},weekCell:{flex:1,display:"grid",placeItems:"center"},typeBadge:{fontSize:10,color:"var(--text-3)",background:"var(--hover)",padding:"1px 6px",borderRadius:8,fontWeight:600},tick:{width:26,height:26,borderRadius:7,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",padding:0},tickFuture:{opacity:.4,cursor:"not-allowed",borderStyle:"dashed"},streakPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,fontWeight:700,padding:"3px 9px",borderRadius:12},tinyBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:"2px 3px",display:"grid",placeItems:"center",borderRadius:4},statStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:10,marginBottom:18},stat:{borderRadius:10,padding:"13px 14px"},statLabel:{fontSize:11,fontWeight:600,color:"var(--text-2)",marginBottom:5},statValue:{fontSize:19,fontWeight:700,display:"flex",alignItems:"center",gap:5,fontFamily:"'Fraunces',Georgia,serif"},monthCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},monthTitle:{fontSize:14,fontWeight:700,marginBottom:12,fontFamily:"'Fraunces',Georgia,serif"},monthDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:8},monthDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},monthGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6},monthDay:{aspectRatio:"1",border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",display:"grid",placeItems:"center"},monthDayFuture:{opacity:.4,cursor:"not-allowed",background:"var(--surface-2)"},noteIndicator:{position:"absolute",top:3,right:3,width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},cellNoteBubble:{position:"absolute",top:2,right:"calc(50% - 16px)",width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},countBadge:{position:"absolute",bottom:2,right:2,minWidth:13,height:13,padding:"0 2px",borderRadius:7,color:"#fff",fontSize:9,fontWeight:700,display:"grid",placeItems:"center",lineHeight:1},counterBtn:{width:44,height:44,borderRadius:"50%",border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:24,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1},chainLine:{position:"absolute",top:"calc(50% - 3px)",left:0,right:0,height:6,zIndex:0,opacity:.9},chainBanner:{display:"flex",alignItems:"center",gap:8,borderRadius:10,padding:"10px 14px",marginBottom:14,fontSize:12.5,fontWeight:700,fontFamily:"'Inter',system-ui,sans-serif"},navBar:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:16},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},navLabel:{fontSize:13,fontWeight:700,color:"var(--text)",minWidth:180,textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},noteBox:{background:"var(--surface)",borderRadius:10,padding:14,marginTop:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},longPressMenu:{position:"absolute",top:"100%",left:0,zIndex:50,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 4px 16px rgba(0,0,0,0.12)",padding:"4px 0",minWidth:140},menuItem:{display:"flex",alignItems:"center",gap:8,width:"100%",border:"none",background:"none",padding:"8px 14px",fontSize:13,color:"var(--text)",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:100,display:"grid",placeItems:"center"},modal:{background:"var(--surface)",borderRadius:14,padding:24,width:320,maxWidth:"90vw",display:"flex",flexDirection:"column",gap:8},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:700,fontSize:16,fontFamily:"'Fraunces',Georgia,serif",marginBottom:6},modalLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4}},da=[{id:1,label:"Rough",emoji:"😣",color:"#C2536B"},{id:2,label:"Low",emoji:"🙁",color:"#C2773B"},{id:3,label:"Okay",emoji:"😐",color:"#C9A227"},{id:4,label:"Good",emoji:"🙂",color:"#4C9A6B"},{id:5,label:"Great",emoji:"😄",color:"#3A7CA5"}],Yh=t=>da.find(e=>e.id===t),Xi=[{id:"wins",label:"Wins",hint:"What went well today?",icon:Vr,color:"#C9A227"},{id:"grateful",label:"Grateful for",hint:"1–3 things",icon:Qf,color:"#C2536B"},{id:"mattered",label:"What mattered",hint:"The point of today",icon:ud,color:"#3A7CA5"},{id:"letgo",label:"Letting go of",hint:"Offload what's draining",icon:ph,color:"#8268B0"},{id:"tomorrow",label:"Tomorrow's one thing",hint:"A single priority",icon:dh,color:"#4C9A6B"}],Qh=()=>new Date().toISOString().slice(0,10),Ji=t=>new Date(t+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"});function Kh(){const t=Qh(),[e,r]=[new Date().getFullYear(),new Date().getMonth()+1],[o,s]=p.useState(null),i=o||t,l=i===t,[a,d]=p.useState(null),[g,m]=p.useState({}),[v,f]=p.useState(Object.fromEntries(Xi.map(E=>[E.id,""]))),j=p.useCallback(async E=>{const M=await $.getJournalEntry(E);d(M)},[]);p.useCallback(async()=>{const E=await $.getJournalHistory(e,r);m(E)},[e,r]);const k=p.useCallback(async()=>{const[E,M]=await Promise.all([$.getJournalEntry(i),$.getJournalHistory(e,r)]);d(E),m(M)},[i,e,r]);p.useEffect(()=>{k()},[k]);const S=async E=>{l&&(await $.updateJournalMood(i,E),k())},T=async E=>{if(!l)return;const M=v[E].trim();M&&(await $.addJournalBullet(i,E,M),f(et=>({...et,[E]:""})),j(i))},b=async E=>{await $.deleteJournalBullet(E),j(i)},c=E=>{s(E===t?null:E),f(Object.fromEntries(Xi.map(M=>[M.id,""])))};if(!a)return n.jsx("div",{style:{padding:28,color:"var(--text-3)"},children:"Loading…"});const u=a.mood!==null,x=(()=>{let E=0;const M=new Date(t);if(g[t]||l&&u)E=1,M.setDate(M.getDate()-1);else return 0;for(;;){const L=M.toISOString().slice(0,10);if(g[L])E++,M.setDate(M.getDate()-1);else break}return E})(),y=Object.values(a.bullets||{}).reduce((E,M)=>E+M.length,0),A=new Date(e,r,0).getDate(),_=new Date(e,r-1,1).getDay(),D=_===0?6:_-1;return n.jsxs("div",{style:vt.page,children:[n.jsxs("div",{style:vt.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:vt.eyebrow,children:"Anvil · Journal"}),!l&&n.jsxs("button",{style:vt.backBtn,onClick:()=>s(null),children:[n.jsx(Fn,{size:14})," Back to Today"]}),n.jsx("h1",{style:vt.h1,children:l?"Today":Ji(i)}),l&&n.jsx("div",{style:vt.date,children:Ji(t)})]}),n.jsxs("div",{style:vt.streakBox,children:[n.jsx(An,{size:16,color:"#C2773B"}),n.jsx("span",{style:vt.streakNum,children:x}),n.jsx("span",{style:vt.streakLabel,children:"day streak"})]})]}),n.jsxs("div",{style:vt.card,children:[n.jsxs("div",{style:vt.cardTitle,children:["How ",l?"are":"were"," you?"]}),n.jsx("div",{style:vt.moodRow,children:da.map(E=>{const M=a.mood===E.id;return n.jsxs("button",{onClick:()=>S(E.id),disabled:!l,style:{...vt.moodBtn,cursor:l?"pointer":"default",...M?{background:E.color,borderColor:E.color,transform:"translateY(-2px)"}:{},...!l&&!M?{opacity:.55}:{}},children:[n.jsx("span",{style:vt.moodEmoji,children:E.emoji}),n.jsx("span",{style:{...vt.moodLabel,color:M?"#fff":"#6B675E"},children:E.label})]},E.id)})})]}),Xi.map(E=>{var L;const M=E.icon,et=((L=a.bullets)==null?void 0:L[E.id])||[];return n.jsxs("div",{style:vt.card,children:[n.jsxs("div",{style:vt.sectionHead,children:[n.jsx("span",{style:{...vt.sectionIcon,background:`${E.color}1A`,color:E.color},children:n.jsx(M,{size:15})}),n.jsxs("div",{children:[n.jsx("div",{style:vt.cardTitle,children:E.label}),n.jsx("div",{style:vt.sectionHint,children:E.hint})]})]}),n.jsxs("ul",{style:vt.bulletList,children:[et.map(C=>n.jsxs("li",{style:vt.bullet,children:[n.jsx("span",{style:{...vt.bulletDot,background:E.color}}),n.jsx("span",{style:vt.bulletText,children:C.text}),l&&n.jsx("button",{onClick:()=>b(C.id),style:vt.bulletDel,children:n.jsx(xt,{size:13})})]},C.id)),!l&&et.length===0&&n.jsx("li",{style:vt.sectionHint,children:"Nothing written."})]}),l&&n.jsxs("div",{style:vt.addRow,children:[n.jsx("input",{placeholder:"Add a point…",value:v[E.id],onChange:C=>f(U=>({...U,[E.id]:C.target.value})),onKeyDown:C=>C.key==="Enter"&&T(E.id),style:vt.input}),n.jsx("button",{onClick:()=>T(E.id),style:{...vt.addBtn,background:E.color},children:n.jsx(oe,{size:16})})]})]},E.id)}),n.jsxs("div",{style:vt.card,children:[n.jsxs("div",{style:vt.cardTitle,children:[new Date(e,r-1).toLocaleDateString("en-US",{month:"long",year:"numeric"})," · Mood history",n.jsx("span",{style:{fontSize:11,color:"var(--text-3)",fontWeight:400,marginLeft:8},children:"tap a day to view"})]}),n.jsx("div",{style:vt.calDow,children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(E=>n.jsx("div",{style:vt.calDowCell,children:E},E))}),n.jsxs("div",{style:vt.calGrid,children:[Array.from({length:D}).map((E,M)=>n.jsx("div",{},`p${M}`)),Array.from({length:A},(E,M)=>M+1).map(E=>{const M=`${e}-${String(r).padStart(2,"0")}-${String(E).padStart(2,"0")}`,et=M===t&&a.mood?a.mood:g[M],L=et?Yh(et):null,C=M>t,U=M===i;return n.jsx("button",{onClick:()=>!C&&c(M),disabled:C,style:{...vt.calDay,background:L?L.color:C?"var(--surface-2)":"var(--surface)",borderColor:U?"var(--accent-strong)":"var(--border)",borderWidth:U?2:1,color:L?"#fff":"var(--text-3)",opacity:C?.5:1,cursor:C?"not-allowed":"pointer",outline:U?"2px solid var(--accent-strong)":"none",outlineOffset:1},title:L?L.label:M,children:L?L.emoji:E},E)})]}),n.jsx("div",{style:vt.legend,children:da.map(E=>n.jsxs("span",{style:vt.legendItem,children:[n.jsx("span",{style:{...vt.legendDot,background:E.color}})," ",E.label]},E.id))})]}),n.jsx("div",{style:vt.footer,children:l?u?`Mood set · ${y} point${y===1?"":"s"} written today`:"Tap a mood to log today and keep your streak":`Viewing ${Ji(i)} · past entries are read-only`})]})}const vt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},backBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",background:"none",color:"#3A7CA5",fontSize:12.5,fontWeight:600,cursor:"pointer",padding:"0 0 6px",fontFamily:"inherit"},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},date:{fontSize:13,color:"var(--text-3)",marginTop:4},streakBox:{display:"flex",alignItems:"center",gap:6,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"8px 14px"},streakNum:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"#C2773B"},streakLabel:{fontSize:11,color:"var(--text-3)",fontWeight:500},card:{background:"var(--surface)",borderRadius:12,padding:"18px 20px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},cardTitle:{fontSize:14,fontWeight:700,marginBottom:12,color:"var(--text)"},moodRow:{display:"flex",gap:8,flexWrap:"wrap"},moodBtn:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,border:"2px solid var(--border)",background:"var(--surface)",borderRadius:10,padding:"10px 12px",cursor:"pointer",flex:"1 1 60px",transition:"transform 0.1s"},moodEmoji:{fontSize:22},moodLabel:{fontSize:11,fontWeight:600},sectionHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:10},sectionIcon:{width:32,height:32,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},sectionHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},bulletList:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6,marginBottom:10},bullet:{display:"flex",alignItems:"center",gap:8,fontSize:13.5,lineHeight:1.4},bulletDot:{width:6,height:6,borderRadius:"50%",flexShrink:0},bulletText:{flex:1},bulletDel:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},addRow:{display:"flex",gap:8},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",outline:"none"},addBtn:{width:36,height:36,border:"none",borderRadius:8,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:12},calDay:{aspectRatio:"1",border:"1px solid var(--border)",borderRadius:7,fontSize:13,display:"grid",placeItems:"center",fontWeight:500,fontFamily:"inherit"},legend:{display:"flex",gap:10,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)"},legendDot:{width:8,height:8,borderRadius:"50%",display:"inline-block"},footer:{fontSize:12.5,color:"var(--text-3)",textAlign:"center",marginTop:8,fontStyle:"italic"}},Ne=[{id:"D",label:"Data",color:"#3A7CA5",soft:"rgba(58,124,165,0.10)",prompt:"What did you read/watch? Log the raw source and a quick note.",hint:"e.g. 'Atomic Habits ch.1 — habits are systems not goals'"},{id:"I",label:"Information",color:"#8268B0",soft:"rgba(130,104,176,0.10)",prompt:"What did you actually understand from it? In your own words.",hint:"e.g. 'Small 1% improvements compound into massive change over time'"},{id:"K",label:"Knowledge",color:"#C9A227",soft:"rgba(201,162,39,0.10)",prompt:"How will this specifically improve your life? Connect it to your goals.",hint:"e.g. 'I will improve my morning workout habit by 1% each week'"},{id:"W",label:"Wisdom",color:"#4C9A6B",soft:"rgba(76,154,107,0.10)",prompt:"How have you implemented it? What changed?",hint:"e.g. 'I've not missed a workout in 3 weeks using the 1% rule'"}],Qg=t=>Ne.findIndex(e=>e.id===t),ga=[{id:"book",label:"Book",icon:Mb},{id:"video",label:"Video",icon:mh},{id:"article",label:"Article",icon:dd}],Kg=t=>ga.find(e=>e.id===t)||ga[0],Zi={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"};function Xh(){var q;const[t,e]=p.useState([]),[r,o]=p.useState(null),[s,i]=p.useState("ALL"),[l,a]=p.useState(!1),[d,g]=p.useState(null),[m,v]=p.useState({title:"",type:"book",pillar:"Academic",note:""}),[f,j]=p.useState({}),[k,S]=p.useState(null),[T,b]=p.useState(null),c=p.useCallback(async()=>{try{const B=await $.getSkills();e(B);const R={};B.forEach(F=>{R[F.id]=Object.fromEntries(Ne.map(O=>[O.id,""]))}),j(F=>{const O={...R};return B.forEach(w=>{F[w.id]&&(O[w.id]={...R[w.id],...F[w.id]})}),O})}catch(B){console.error(B)}},[]);p.useEffect(()=>{c()},[c]);const u=t.find(B=>B.id===r),x=u?Qg(u.stage):-1,y=async(B,R)=>{var O;const F=(((O=f[B])==null?void 0:O[R])??"").trim();F&&(await $.addSkillNote(B,R,F),j(w=>({...w,[B]:{...w[B],[R]:""}})),c())},A=async B=>{await $.deleteSkillNote(B),c()},_=async()=>{!u||!(T!=null&&T.trim())||(await $.updateSkill(u.id,{title:T.trim()}),b(null),c())},D=async()=>{!k||!k.text.trim()||(await $.updateSkillNote(k.id,k.text.trim()),S(null),c())},E=async B=>{await $.toggleSkillNote(B),c()},M=async(B,R)=>{t.find(O=>O.id===B)&&(R==="W"&&g(B),await $.completeSkillStage(B,R),c())},et=async()=>{if(!m.title.trim())return;const B=await $.createSkill({pillar:m.pillar,title:m.title.trim(),source_type:m.type,note_d:m.note.trim()});a(!1),v({title:"",type:"book",pillar:"Academic",note:""}),o(B.id),c()},L=async B=>{await $.deleteSkill(B),r===B&&o(null),c()},C=s==="ALL"?t:t.filter(B=>B.stage===s),U=t.filter(B=>B.stage==="W").length,ut=!!u;return n.jsxs("div",{style:Z.page,children:[d&&n.jsx("div",{style:Z.celebOverlay,children:n.jsxs("div",{style:Z.celebBox,children:[n.jsx("div",{style:Z.celebEmoji,children:"🏆"}),n.jsx("div",{style:Z.celebTitle,children:"Wisdom unlocked!"}),n.jsx("div",{style:Z.celebSub,children:"You've implemented this knowledge — that's rare and real."}),n.jsx("button",{onClick:()=>g(null),style:Z.celebBtn,children:"Continue"})]})}),n.jsxs("div",{style:Z.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:Z.eyebrow,children:"Anvil · Skills"}),n.jsx("h1",{style:Z.h1,children:"DIKW Skills"}),n.jsx("div",{style:Z.subhead,children:"Data → Information → Knowledge → Wisdom"})]}),n.jsxs("div",{style:Z.headRight,children:[n.jsxs("div",{style:Z.wisdomBadge,children:[n.jsx(Vr,{size:14,color:"#C9A227"})," ",U," Wisdom",U!==1?"s":""]}),n.jsxs("button",{onClick:()=>{a(!0),o(null)},style:Z.addSkillBtn,children:[n.jsx(oe,{size:15})," Add skill"]})]})]}),n.jsx("div",{style:Z.filterBar,children:["ALL",...Ne.map(B=>B.id)].map(B=>{const R=Ne.find(O=>O.id===B),F=s===B;return n.jsx("button",{onClick:()=>i(B),style:{...Z.filterBtn,...F?{background:R?R.color:"var(--accent-strong)",color:"#fff",borderColor:"transparent"}:{}},children:R?`${B} · ${R.label}`:"All"},B)})}),n.jsxs("div",{style:{...Z.layout,gridTemplateColumns:ut?"1fr 1fr":"1fr"},children:[n.jsxs("div",{style:Z.cardList,children:[l&&n.jsxs("div",{style:{...Z.skillCard,border:"2px dashed #3A7CA5"},children:[n.jsx("div",{style:Z.cardTitle,children:"New skill"}),n.jsx("input",{placeholder:"Title (book / video / article name)",value:m.title,onChange:B=>v(R=>({...R,title:B.target.value})),onKeyDown:B=>B.key==="Enter"&&et(),style:Z.input,autoFocus:!0}),n.jsxs("div",{style:Z.addRow,children:[n.jsx("select",{value:m.type,onChange:B=>v(R=>({...R,type:B.target.value})),style:Z.select,children:ga.map(B=>n.jsx("option",{value:B.id,children:B.label},B.id))}),n.jsx("select",{value:m.pillar,onChange:B=>v(R=>({...R,pillar:B.target.value})),style:Z.select,children:Object.keys(Zi).map(B=>n.jsx("option",{children:B},B))})]}),n.jsx("input",{placeholder:"First note (what did you read/watch?)",value:m.note,onChange:B=>v(R=>({...R,note:B.target.value})),style:Z.input}),n.jsxs("div",{style:Z.addRow,children:[n.jsxs("button",{onClick:et,style:Z.saveBtn,children:[n.jsx(jt,{size:14})," Save"]}),n.jsxs("button",{onClick:()=>a(!1),style:Z.cancelBtn,children:[n.jsx(xt,{size:14})," Cancel"]})]})]}),C.map(B=>{const R=Qg(B.stage),F=Ne[R],O=Kg(B.type),w=B.stage==="W",V=r===B.id;return n.jsxs("div",{onClick:()=>o(V?null:B.id),style:{...Z.skillCard,...V?{borderColor:F.color,borderWidth:2}:{},...w?{background:"rgba(76,154,107,0.05)"}:{}},children:[n.jsxs("div",{style:Z.skillCardTop,children:[n.jsxs("div",{style:Z.skillMeta,children:[n.jsx("span",{style:{color:Zi[B.pillar]},children:n.jsx(O.icon,{size:13})}),n.jsx("span",{style:{...Z.pillarDot,background:Zi[B.pillar]}}),n.jsxs("span",{style:Z.srcLabel,children:[O.label," · ",B.pillar]})]}),n.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[w&&n.jsx(Lo,{size:14,color:"#4C9A6B"}),n.jsx("button",{onClick:h=>{h.stopPropagation(),L(B.id)},style:Z.ghostBtn,children:n.jsx(xt,{size:13})})]})]}),n.jsx("div",{style:Z.skillTitle,children:B.title}),n.jsxs("div",{style:Z.track,children:[Ne.map((h,P)=>{var Dt;const at=P<R,dt=P===R,wt=(Dt=B.completed_stages)==null?void 0:Dt[h.id];return n.jsxs("div",{style:Z.trackItem,children:[n.jsxs("div",{style:{...Z.trackDot,background:at||wt||dt?h.color:"var(--border)",boxShadow:dt?`0 0 0 3px ${h.color}33`:"none"},children:[(at||dt&&wt)&&n.jsx(jt,{size:9,color:"#fff",strokeWidth:3}),dt&&!wt&&n.jsx("span",{style:Z.trackCurrent,children:h.id}),!at&&!dt&&n.jsx(Lg,{size:8,color:"#B5B1A7"})]}),P<Ne.length-1&&n.jsx("div",{style:{...Z.trackLine,background:at?Ne[P+1].color:"var(--border)"}})]},h.id)}),n.jsx("span",{style:{...Z.stageTag,background:F.soft,color:F.color},children:F.label})]})]},B.id)}),C.length===0&&!l&&n.jsx("div",{style:Z.empty,children:"No skills at this stage yet."})]}),u&&n.jsxs("div",{style:Z.detail,children:[n.jsxs("div",{style:Z.detailHead,children:[n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsxs("div",{style:Z.eyebrow,children:[Kg(u.type).label," · ",u.pillar]}),T!==null?n.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginTop:4},children:[n.jsx("input",{autoFocus:!0,value:T,onChange:B=>b(B.target.value),onKeyDown:B=>{B.key==="Enter"&&_(),B.key==="Escape"&&b(null)},style:{...Z.input,fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:0,flex:1}}),n.jsx("button",{onClick:_,style:{...Z.noteAddBtn,background:"#4C9A6B",width:30,height:30},children:n.jsx(jt,{size:13})}),n.jsx("button",{onClick:()=>b(null),style:{...Z.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:30,height:30},children:n.jsx(xt,{size:13})})]}):n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx("div",{style:Z.detailTitle,children:u.title}),n.jsx("button",{onClick:()=>b(u.title),style:Z.ghostBtn,title:"Edit name",children:n.jsx(ve,{size:13})})]})]}),n.jsx("button",{onClick:()=>{o(null),b(null)},style:Z.closeBtn,children:n.jsx(xt,{size:16})})]}),Ne.map((B,R)=>{var at,dt,wt;const F=R<=x,O=R===x,w=R<x||((at=u.completed_stages)==null?void 0:at[B.id]),V=R>x,h=((dt=u.notes)==null?void 0:dt[B.id])||[],P=((wt=f[u.id])==null?void 0:wt[B.id])??"";return n.jsxs("div",{style:{...Z.stageBlock,...F?{borderColor:B.color}:{},opacity:V?.45:1},children:[n.jsxs("div",{style:Z.stageBlockHead,children:[n.jsx("div",{style:{...Z.stageLetter,background:F?B.color:"var(--border)",color:F?"#fff":"#9A968C"},children:w&&!O?n.jsx(jt,{size:12,color:"#fff",strokeWidth:3}):V?n.jsx(Lg,{size:11,color:"#9A968C"}):B.id}),n.jsxs("div",{style:{flex:1},children:[n.jsx("div",{style:{...Z.stageName,color:F?B.color:"#9A968C"},children:B.label}),F&&n.jsx("div",{style:Z.stagePrompt,children:B.prompt})]}),w&&!O&&n.jsx("span",{style:{...Z.doneBadge,color:B.color,background:B.soft},children:"Done"})]}),F&&(()=>{var Y,pt;const Dt=B.id==="W",ft=h.length>0&&h.every(gt=>gt.done),Tt=Dt?ft:h.length>0;return n.jsxs(n.Fragment,{children:[h.length>0&&n.jsx("ul",{style:Z.noteList,children:h.map(gt=>n.jsxs("li",{style:Z.noteItem,children:[Dt?n.jsx("button",{onClick:()=>E(gt.id),style:{...Z.checkBox,...gt.done?{background:B.color,borderColor:B.color}:{}},children:gt.done&&n.jsx(jt,{size:11,color:"#fff",strokeWidth:3})}):n.jsx("span",{style:{...Z.noteDot,background:B.color}}),(k==null?void 0:k.id)===gt.id?n.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[n.jsx("input",{autoFocus:!0,value:k.text,onChange:Ct=>S(le=>({...le,text:Ct.target.value})),onKeyDown:Ct=>{Ct.key==="Enter"&&D(),Ct.key==="Escape"&&S(null)},style:{...Z.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),n.jsx("button",{onClick:D,style:{...Z.noteAddBtn,background:B.color,width:28,height:28},children:n.jsx(jt,{size:12})}),n.jsx("button",{onClick:()=>S(null),style:{...Z.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:n.jsx(xt,{size:12})})]}):n.jsx("span",{style:{...Z.noteText,...Dt&&gt.done?{textDecoration:"line-through",color:"var(--text-3)"}:{}},children:gt.text}),(k==null?void 0:k.id)!==gt.id&&n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>S({id:gt.id,text:gt.text}),style:Z.ghostBtn,children:n.jsx(ve,{size:12})}),n.jsx("button",{onClick:()=>A(gt.id),style:Z.ghostBtn,children:n.jsx(xt,{size:12})})]})]},gt.id))}),h.length===0&&n.jsx("div",{style:Z.noNotes,children:Dt?"Add the steps to implement this — check each off as you do it.":`No notes yet — ${B.hint}`}),n.jsxs("div",{style:Z.noteAddRow,children:[n.jsx("input",{placeholder:Dt?"Add a step to implement…":`Add a ${B.label} note…`,value:P,onChange:gt=>j(Ct=>({...Ct,[u.id]:{...Ct[u.id],[B.id]:gt.target.value}})),onKeyDown:gt=>gt.key==="Enter"&&y(u.id,B.id),style:Z.noteInput}),n.jsx("button",{onClick:()=>y(u.id,B.id),style:{...Z.noteAddBtn,background:B.color},children:n.jsx(oe,{size:14})})]}),O&&!((Y=u.completed_stages)!=null&&Y[B.id])&&n.jsxs(n.Fragment,{children:[Dt&&h.length>0&&!ft&&n.jsxs("div",{style:Z.checklistHint,children:[h.filter(gt=>gt.done).length,"/",h.length," done — check all steps to complete Wisdom"]}),n.jsxs("button",{onClick:()=>M(u.id,B.id),disabled:!Tt,style:{...Z.advanceBtn,background:Tt?B.color:"#C3BFB5",marginTop:10,cursor:Tt?"pointer":"not-allowed"},children:[n.jsx(jt,{size:14}),Dt?"Mark Wisdom complete":`Complete ${B.label} → ${(pt=Ne[R+1])==null?void 0:pt.label}`]})]})]})})()]},B.id)}),u.stage==="W"&&((q=u.completed_stages)==null?void 0:q.W)&&n.jsxs("div",{style:Z.wisdomDone,children:[n.jsx(Vr,{size:16,color:"#4C9A6B"})," Wisdom achieved — implemented in your life"]})]})]})]})}const Z={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box",position:"relative"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},wisdomBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addSkillBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},filterBar:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16},filterBtn:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},layout:{display:"grid",gap:12},cardList:{display:"flex",flexDirection:"column",gap:10},skillCard:{background:"var(--surface)",borderRadius:12,padding:"14px",border:"1.5px solid var(--border)",cursor:"pointer",boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},skillCardTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},skillMeta:{display:"flex",alignItems:"center",gap:6},pillarDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},srcLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)"},skillTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",marginBottom:12},cardTitle:{fontSize:13,fontWeight:700,marginBottom:10},track:{display:"flex",alignItems:"center"},trackItem:{display:"flex",alignItems:"center"},trackDot:{width:22,height:22,borderRadius:"50%",display:"grid",placeItems:"center",flexShrink:0},trackCurrent:{fontSize:9,fontWeight:800,color:"#fff"},trackLine:{width:24,height:3,borderRadius:2},stageTag:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,marginLeft:10},detail:{background:"var(--surface)",borderRadius:14,padding:"18px 16px",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",border:"1.5px solid var(--border)",alignSelf:"start"},detailHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16},detailTitle:{fontSize:18,fontWeight:700,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},stageBlock:{border:"1.5px solid var(--border)",borderRadius:10,padding:"12px 13px",marginBottom:10},stageBlockHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:8},stageLetter:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",fontSize:13,fontWeight:800,flexShrink:0},stageName:{fontSize:13,fontWeight:700},stagePrompt:{fontSize:11.5,color:"var(--text-2)",marginTop:2,lineHeight:1.4},doneBadge:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10,marginLeft:"auto",flexShrink:0},noteList:{margin:"0 0 8px 0",padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6},noteItem:{display:"flex",alignItems:"flex-start",gap:8,fontSize:13,lineHeight:1.4},noteDot:{width:6,height:6,borderRadius:"50%",flexShrink:0,marginTop:5},checkBox:{width:18,height:18,borderRadius:5,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginTop:1,padding:0},checklistHint:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,marginTop:10,textAlign:"center"},noteText:{flex:1,color:"var(--text)"},noNotes:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",marginBottom:8},noteAddRow:{display:"flex",gap:6},noteInput:{flex:1,border:"1px solid var(--border)",borderRadius:7,padding:"7px 10px",fontSize:13,fontFamily:"inherit",outline:"none"},noteAddBtn:{width:32,height:32,border:"none",borderRadius:7,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},advanceBtn:{display:"flex",alignItems:"center",gap:8,border:"none",color:"#fff",padding:"10px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},wisdomDone:{display:"flex",alignItems:"center",gap:8,justifyContent:"center",fontSize:13.5,fontWeight:700,color:"#4C9A6B",padding:12,background:"rgba(76,154,107,0.08)",borderRadius:10,marginTop:4},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box",marginBottom:8},select:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:12.5,fontFamily:"inherit",flex:1},addRow:{display:"flex",gap:8,marginBottom:8},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{fontSize:13,color:"var(--text-3)",padding:"32px 12px",textAlign:"center"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.55)",zIndex:50,display:"grid",placeItems:"center"},celebBox:{background:"var(--surface)",borderRadius:20,padding:"40px 32px",textAlign:"center",maxWidth:320,boxShadow:"0 8px 40px rgba(0,0,0,0.18)"},celebEmoji:{fontSize:52,marginBottom:12},celebTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:8},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:"#4C9A6B",color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},ds=[{id:"aarti",title:"Aarti",html:`<h1>॥ गणपतीची आरती ॥</h1><br/>
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
      </div>`}];function Jh(){const[t,e]=p.useState(()=>window.innerWidth<720);return p.useEffect(()=>{const r=()=>e(window.innerWidth<720);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),t}const Zh=t=>new Promise((e,r)=>{const o=new FileReader;o.onload=()=>{const s=new Image;s.onload=()=>{let{width:l,height:a}=s;l>a&&l>1400?(a=a*1400/l,l=1400):a>1400&&(l=l*1400/a,a=1400);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(s,0,0,l,a),e(d.toDataURL("image/jpeg",.85))},s.onerror=r,s.src=o.result},o.onerror=r,o.readAsDataURL(t)});function Xg({base:t,count:e,images:r}){const o=r&&r.length?r:null,s=o?o.length:e,[i,l]=p.useState(0);if(!s)return null;const a=i%s,d=o?o[a]:`${t}${a+1}.jpg`;return n.jsxs("div",{style:{maxWidth:560,margin:"0 auto"},children:[n.jsx("div",{style:st.carouselFrame,children:n.jsx("img",{src:d,alt:`Page ${a+1}`,style:st.carouselImg})}),n.jsxs("div",{style:st.carouselNav,children:[n.jsxs("button",{onClick:()=>l(g=>(g-1+s)%s),style:st.carouselBtn,children:[n.jsx(Fn,{size:16})," Prev"]}),n.jsxs("span",{style:st.carouselCount,children:[o?"":"Adhyay ",a+1," / ",s]}),n.jsxs("button",{onClick:()=>l(g=>(g+1)%s),style:st.carouselBtn,children:["Next ",n.jsx(Xr,{size:16})]})]})]})}function qh(){const t=Jh(),[e,r]=p.useState(!1),[o,s]=p.useState([]),[i,l]=p.useState("dss"),[a,d]=p.useState(!1),[g,m]=p.useState({title:"",type:"text",content:"",images:[]}),[v,f]=p.useState([]),[j,k]=p.useState(null),[S,T]=p.useState(!1),b=p.useRef(!1),c=p.useCallback(async()=>{try{const[F,O,w]=await Promise.all([$.getDecks(),$.getSetting("spiritual_order"),$.getSetting("spiritual_default")]);if(s(F),Array.isArray(O==null?void 0:O.value)&&f(O.value),w!=null&&w.value&&k(w.value),!b.current){b.current=!0;const V=new Set([...ds.map(h=>h.id),...F.map(h=>`deck-${h.id}`)]);w!=null&&w.value&&V.has(w.value)&&l(w.value)}}catch{}},[]);p.useEffect(()=>{c()},[c]);const u=[...ds.map(F=>({id:F.id,title:F.title})),...o.map(F=>({id:`deck-${F.id}`,title:F.title}))],x=(()=>{if(!v.length)return u;const F=new Map(u.map(w=>[w.id,w])),O=[];return v.forEach(w=>{F.has(w)&&(O.push(F.get(w)),F.delete(w))}),F.forEach(w=>O.push(w)),O})(),y=(F,O)=>{const w=x.map(h=>h.id),V=F+O;V<0||V>=w.length||([w[F],w[V]]=[w[V],w[F]],f(w),$.setSetting("spiritual_order",w).catch(()=>{}))},A=F=>{k(F),$.setSetting("spiritual_default",F).catch(()=>{})},_=i.startsWith("deck-")?Number(i.slice(5)):null,D=_!=null?o.find(F=>F.id===_):null,E=D?null:ds.find(F=>F.id===i)||(_==null?ds[0]:null),M=a?"New deck":D?D.title:(E==null?void 0:E.title)||"",et=F=>{l(F),d(!1),t&&r(!1)},L=()=>{d(!0),m({title:"",type:"text",content:"",images:[]}),t&&r(!1)},C=async F=>{const O=Array.from(F.target.files||[]),w=[];for(const V of O)try{w.push(await Zh(V))}catch{}m(V=>({...V,images:[...V.images,...w]})),F.target.value=""},U=F=>m(O=>({...O,images:O.images.filter((w,V)=>V!==F)})),ut=g.title.trim()&&(g.type==="text"?g.content.trim():g.images.length>0),q=async()=>{if(!ut)return;const F=await $.createDeck({title:g.title.trim(),type:g.type,content:g.type==="text"?g.content:"",images:g.type==="images"?g.images:[]});d(!1),await c(),l(`deck-${F.id}`)},B=async F=>{await $.deleteDeck(F),i===`deck-${F}`&&l("dss"),c()},R={...st.sidebar,...t?st.sidebarOverlay:{},...t&&!e?st.sidebarHidden:{}};return n.jsxs("div",{style:st.shell,children:[n.jsx("style",{children:tv}),t&&e&&n.jsx("div",{style:st.backdrop,onClick:()=>r(!1)}),n.jsxs("aside",{style:R,children:[n.jsxs("div",{style:st.sideHead,children:[n.jsx("div",{style:st.brand,children:"Anvil · Spiritual"}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:2},children:[n.jsx("button",{onClick:()=>T(F=>!F),style:st.iconBtn,title:"Rearrange & set default",children:S?n.jsx(jt,{size:16}):n.jsx(ve,{size:15})}),t&&n.jsx("button",{onClick:()=>r(!1),style:st.iconBtn,children:n.jsx(xt,{size:17})})]})]}),S&&n.jsxs("div",{style:st.editHint,children:["Arrows reorder · ",n.jsx(qs,{size:11,style:{verticalAlign:"-1px"}})," sets what opens by default"]}),n.jsxs("div",{style:st.sideScroll,children:[x.map((F,O)=>{const w=F.id===i&&!a,V=j===F.id;return n.jsxs("div",{style:st.sideRow,children:[n.jsxs("button",{onClick:()=>et(F.id),style:{...st.sideItem,flex:1,...w?st.sideItemOn:{}},children:[F.title,V&&n.jsx("span",{style:st.defStar,title:"Opens by default",children:" ★"})]}),S&&n.jsxs("div",{style:st.editControls,children:[n.jsx("button",{onClick:()=>A(F.id),title:"Set as default",style:{...st.miniBtn,...V?{color:"#8268B0"}:{}},children:n.jsx(qs,{size:13})}),n.jsx("button",{onClick:()=>y(O,-1),disabled:O===0,style:{...st.miniBtn,opacity:O===0?.3:1},children:n.jsx(_b,{size:13})}),n.jsx("button",{onClick:()=>y(O,1),disabled:O===x.length-1,style:{...st.miniBtn,opacity:O===x.length-1?.3:1},children:n.jsx(vi,{size:13})})]})]},F.id)}),n.jsxs("button",{onClick:L,style:{...st.newDeckBtn,...a?st.sideItemOn:{}},children:[n.jsx(oe,{size:14})," New deck"]})]})]}),n.jsxs("main",{style:st.main,children:[t&&n.jsxs("button",{onClick:()=>r(!0),style:st.hamburger,children:[n.jsx(cd,{size:17}),n.jsx("span",{style:st.hamburgerLabel,children:M})]}),a?n.jsxs("div",{style:st.contentWrap,children:[n.jsx("div",{style:st.formTitle,children:"Create a deck"}),n.jsx("input",{placeholder:"Deck title (e.g. Vishnu Sahasranamam)",value:g.title,onChange:F=>m({...g,title:F.target.value}),style:st.input}),n.jsxs("div",{style:st.typeRow,children:[n.jsxs("button",{onClick:()=>m({...g,type:"text"}),style:{...st.typeBtn,...g.type==="text"?st.typeOn:{}},children:[n.jsx(dd,{size:15})," Text"]}),n.jsxs("button",{onClick:()=>m({...g,type:"images"}),style:{...st.typeBtn,...g.type==="images"?st.typeOn:{}},children:[n.jsx(Kf,{size:15})," Images"]})]}),g.type==="text"?n.jsx("textarea",{placeholder:"Paste or write the text (verses, chant, reflection)…",value:g.content,onChange:F=>m({...g,content:F.target.value}),style:st.textarea}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:st.imgGrid,children:[g.images.map((F,O)=>n.jsxs("div",{style:st.imgThumbWrap,children:[n.jsx("img",{src:F,alt:"",style:st.imgThumb}),n.jsx("button",{onClick:()=>U(O),style:st.imgDel,children:n.jsx(xt,{size:12})})]},O)),n.jsxs("label",{style:st.imgAdd,children:[n.jsx(gd,{size:20}),n.jsx("span",{style:{fontSize:11},children:"Add images"}),n.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:C,style:{display:"none"}})]})]}),n.jsx("div",{style:st.hint,children:"Images show as a swipeable carousel, in the order added."})]}),n.jsxs("div",{style:st.formActions,children:[n.jsxs("button",{onClick:()=>d(!1),style:st.cancelBtn,children:[n.jsx(xt,{size:14})," Cancel"]}),n.jsxs("button",{onClick:q,disabled:!ut,style:{...st.saveBtn,...ut?{}:st.saveDisabled},children:[n.jsx(jt,{size:15})," Create deck"]})]})]}):D?n.jsxs("div",{style:st.contentWrap,children:[n.jsxs("div",{style:st.deckHead,children:[n.jsx("h2",{style:st.deckTitle,children:D.title}),n.jsx("button",{onClick:()=>B(D.id),style:st.deckDel,title:"Delete deck",children:n.jsx(ch,{size:15})})]}),D.type==="images"?n.jsx(Xg,{images:D.images}):n.jsx("div",{style:st.deckText,children:D.content})]}):n.jsxs("div",{style:st.contentWrap,children:[(E==null?void 0:E.youtube)&&n.jsx("div",{style:st.videoFrame,children:n.jsx("iframe",{src:`https://www.youtube.com/embed/${E.youtube}`,title:E.title,style:st.video,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},E.youtube)}),E!=null&&E.carousel?n.jsx(Xg,{base:E.imageBase,count:E.carousel}):n.jsx("div",{className:"spiritual-content",dangerouslySetInnerHTML:{__html:(E==null?void 0:E.html)||""}})]})]})]})}const tv=`
.spiritual-content { font-family: 'Inter', system-ui, sans-serif; color: var(--text); line-height: 1.9; font-size: 16px; text-align: center; }
.spiritual-content h1 { font-family: 'Fraunces', Georgia, serif; font-size: 24px; color: #8268B0; margin: 8px 0 18px; letter-spacing: -0.01em; }
.spiritual-content h2 { font-family: 'Fraunces', Georgia, serif; font-size: 18px; color: #7A5EA8; margin: 20px 0 8px; }
.spiritual-content h3 { font-size: 15px; color: var(--text-3); text-transform: uppercase; letter-spacing: 0.06em; margin: 18px 0 6px; }
.spiritual-content b { color: #8268B0; }
.spiritual-content div { text-align: center; }
`,st={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:240,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.15)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.35)",zIndex:20},sideHead:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 14px 12px"},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700},sideScroll:{flex:1,overflowY:"auto",padding:"0 8px 16px"},sideItem:{display:"block",width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text-2)",textAlign:"left",marginBottom:2},sideItemOn:{background:"rgba(130,104,176,0.12)",color:"#8268B0",fontWeight:700},sideRow:{display:"flex",alignItems:"center",gap:2},editControls:{display:"flex",alignItems:"center",gap:1,flexShrink:0},miniBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:5},defStar:{color:"#C9A227",fontWeight:700},editHint:{fontSize:10.5,color:"var(--text-3)",padding:"0 14px 8px",lineHeight:1.4},newDeckBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",padding:"9px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,color:"var(--text-2)",marginTop:6},main:{flex:1,padding:"26px 22px",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:220},contentWrap:{background:"var(--surface)",borderRadius:14,padding:"26px 28px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",maxWidth:760,margin:"0 auto"},videoFrame:{position:"relative",width:"100%",maxWidth:600,margin:"0 auto 22px",aspectRatio:"16 / 9",borderRadius:12,overflow:"hidden",background:"#000"},video:{position:"absolute",inset:0,width:"100%",height:"100%",border:"none"},carouselFrame:{background:"var(--surface-2)",borderRadius:12,padding:8,border:"1px solid var(--border)"},carouselImg:{width:"100%",borderRadius:8,display:"block"},carouselNav:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:14},carouselBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},carouselCount:{fontSize:13,fontWeight:700,color:"#8268B0",fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"none",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,color:"var(--text-2)"},deckHead:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,marginBottom:16,borderBottom:"1px solid var(--border)",paddingBottom:12},deckTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",margin:0,color:"#8268B0"},deckDel:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",cursor:"pointer",display:"grid",placeItems:"center",padding:7,borderRadius:8,flexShrink:0},deckText:{fontSize:16,lineHeight:1.9,whiteSpace:"pre-wrap",color:"var(--text)",textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},formTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},typeRow:{display:"flex",gap:8,marginTop:12},typeBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},typeOn:{background:"#8268B0",color:"#fff",borderColor:"#8268B0"},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:200,resize:"vertical",lineHeight:1.7,marginTop:12},imgGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(90px, 1fr))",gap:8,marginTop:12},imgThumbWrap:{position:"relative",aspectRatio:"1",borderRadius:8,overflow:"hidden",border:"1px solid var(--border)"},imgThumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},imgDel:{position:"absolute",top:3,right:3,border:"none",background:"rgba(0,0,0,0.6)",color:"#fff",borderRadius:"50%",width:18,height:18,cursor:"pointer",display:"grid",placeItems:"center",padding:0},imgAdd:{aspectRatio:"1",border:"1px dashed var(--border)",borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4,cursor:"pointer",color:"var(--text-3)"},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:8},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"#8268B0",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"}},Ye={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},Jg=Object.keys(Ye),ev=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],rv=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],nv=()=>new Date().toISOString().slice(0,10),ov=(t,e)=>`${rv[e-1]} ${t}`,sv=(t,e)=>{const r=new Date(t,e,0).getDate();return Array.from({length:r},(o,s)=>`${t}-${String(e).padStart(2,"0")}-${String(s+1).padStart(2,"0")}`)},iv=(t,e)=>{const r=new Date(t,e-1,1).getDay();return r===0?6:r-1};function lv(){const t=nv(),[e,r]=p.useState(new Date().getFullYear()),[o,s]=p.useState(new Date().getMonth()+1),[i,l]=p.useState([]),[a,d]=p.useState([]),[g,m]=p.useState({}),[v,f]=p.useState(null),[j,k]=p.useState(!1),[S,T]=p.useState(!1),[b,c]=p.useState({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:t}),[u,x]=p.useState(null),y=p.useCallback(async()=>{const[h,P,at]=await Promise.all([$.getTopics(),$.getDueToday(),$.getCalendar(e,o)]);l(h),d(P),m(at)},[e,o]);p.useEffect(()=>{y()},[y]);const A=async h=>{await $.toggleReviewDone(h),y()},_=async()=>{const h=b.intervals.split(",").map(P=>parseInt(P.trim(),10)).filter(P=>!isNaN(P));!b.topic.trim()||h.length===0||(await $.createTopic({pillar:b.pillar,topic:b.topic.trim(),intervals:h,learned_date:b.learned_date||t}),c({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:t}),T(!1),y())},{deleteItem:D,toasts:E,handleUndo:M,handleDismiss:et}=Wn($.deleteTopic,$.restoreTopic,y),L=(h,P)=>D(h,P),C=h=>x({id:h.id,topic:h.topic,pillar:h.pillar,intervals:(h.intervals||[]).join(", "),learned_date:h.learned_date}),U=async()=>{if(!u)return;const h=u.intervals.split(",").map(P=>parseInt(P.trim(),10)).filter(P=>!isNaN(P)&&P>=0);!u.topic.trim()||h.length===0||(await $.updateTopic(u.id,{topic:u.topic.trim(),pillar:u.pillar,learned_date:u.learned_date,intervals:h}),x(null),y())},ut=()=>{o===1?(r(h=>h-1),s(12)):s(h=>h-1),f(null)},q=()=>{o===12?(r(h=>h+1),s(1)):s(h=>h+1),f(null)},B=i.filter(h=>!h.cemented),R=i.filter(h=>h.cemented),F=sv(e,o),O=iv(e,o),w=p.useMemo(()=>{const h={};return i.forEach(P=>P.reviews.forEach(at=>{at.done||(h[at.due_date]=h[at.due_date]||[]).push({topic:P.topic,pillar:P.pillar,stage:at.stage})})),h},[i]),V=v?i.flatMap(h=>h.reviews.filter(P=>P.due_date===v).map(P=>({...P,topic:h.topic,pillar:h.pillar,total:h.reviews.length}))):[];return n.jsxs("div",{style:J.page,children:[n.jsxs("div",{style:J.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:J.eyebrow,children:"Anvil · Revision"}),n.jsx("h1",{style:J.h1,children:"Spaced Repetition"})]}),n.jsxs("button",{onClick:()=>T(!0),style:J.addBtn,children:[n.jsx(oe,{size:15})," Add topic"]})]}),S&&n.jsxs("div",{style:J.addBox,children:[n.jsx("input",{autoFocus:!0,placeholder:"What did you learn?",value:b.topic,onChange:h=>c(P=>({...P,topic:h.target.value})),onKeyDown:h=>h.key==="Enter"&&_(),style:J.input}),n.jsxs("div",{style:J.addRow,children:[n.jsx("select",{value:b.pillar,onChange:h=>c(P=>({...P,pillar:h.target.value})),style:J.select,children:Jg.map(h=>n.jsx("option",{children:h},h))}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[n.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),n.jsx("input",{type:"date",value:b.learned_date,onChange:h=>c(P=>({...P,learned_date:h.target.value})),style:{...J.select,fontSize:13}})]}),n.jsx("div",{style:{flex:1,minWidth:0},children:n.jsx("input",{value:b.intervals,onChange:h=>c(P=>({...P,intervals:h.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:J.input})})]}),n.jsxs("div",{style:J.addRow,children:[n.jsxs("button",{onClick:_,style:J.saveBtn,children:[n.jsx(jt,{size:14})," Save"]}),n.jsxs("button",{onClick:()=>T(!1),style:J.cancelBtn,children:[n.jsx(xt,{size:14})," Cancel"]})]})]}),a.length>0&&n.jsxs("div",{style:J.section,children:[n.jsxs("div",{style:J.sectionTitle,children:[n.jsx(Hb,{size:15,color:"#C2536B"}),"Due Today",n.jsx("span",{style:J.badge,children:a.length})]}),a.map(h=>{var at,dt;const P=((at=Ye[h.pillar])==null?void 0:at.dot)||"#9A968C";return n.jsxs("div",{style:{...J.reviewCard,borderLeft:`3px solid ${P}`,...h.is_missed?{opacity:.85}:{}},children:[n.jsx("button",{onClick:()=>A(h.review_id),style:{...J.checkbox,...h.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:h.done&&n.jsx(jt,{size:12,color:"#fff",strokeWidth:3})}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:J.reviewTopic,children:h.topic}),n.jsxs("div",{style:J.reviewMeta,children:[n.jsxs("span",{style:{...J.stageTag,background:((dt=Ye[h.pillar])==null?void 0:dt.soft)||"rgba(0,0,0,0.05)",color:P},children:["Review ",h.stage,"/",h.total_stages]}),h.is_missed&&n.jsxs("span",{style:J.missedTag,children:["missed · ",h.due_date]})]})]})]},h.review_id)})]}),n.jsxs("div",{style:J.section,children:[n.jsxs("div",{style:J.sectionTitle,children:["Active Topics ",n.jsx("span",{style:J.badge,children:B.length})]}),B.length===0&&n.jsx("div",{style:J.empty,children:"No active topics. Add something you learned today."}),B.map(h=>{var wt,Dt;const P=((wt=Ye[h.pillar])==null?void 0:wt.dot)||"#9A968C",at=((Dt=Ye[h.pillar])==null?void 0:Dt.soft)||"rgba(0,0,0,0.05)",dt=h.reviews.filter(ft=>ft.done).length;return(u==null?void 0:u.id)===h.id?n.jsxs("div",{style:J.addBox,children:[n.jsx("input",{autoFocus:!0,value:u.topic,onChange:ft=>x(Tt=>({...Tt,topic:ft.target.value})),onKeyDown:ft=>ft.key==="Enter"&&U(),placeholder:"Topic",style:J.input}),n.jsxs("div",{style:J.addRow,children:[n.jsx("select",{value:u.pillar,onChange:ft=>x(Tt=>({...Tt,pillar:ft.target.value})),style:J.select,children:Jg.map(ft=>n.jsx("option",{children:ft},ft))}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[n.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),n.jsx("input",{type:"date",value:u.learned_date,onChange:ft=>x(Tt=>({...Tt,learned_date:ft.target.value})),style:{...J.select,fontSize:13}})]}),n.jsx("div",{style:{flex:1,minWidth:0},children:n.jsx("input",{value:u.intervals,onChange:ft=>x(Tt=>({...Tt,intervals:ft.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:J.input})})]}),n.jsx("div",{style:J.editHint,children:"Changing the date or intervals reschedules the reviews (completed steps are kept where they still apply)."}),n.jsxs("div",{style:J.addRow,children:[n.jsxs("button",{onClick:U,style:J.saveBtn,children:[n.jsx(jt,{size:14})," Save plan"]}),n.jsxs("button",{onClick:()=>x(null),style:J.cancelBtn,children:[n.jsx(xt,{size:14})," Cancel"]})]})]},h.id):n.jsxs("div",{style:J.topicCard,children:[n.jsxs("div",{style:J.topicHead,children:[n.jsx("span",{style:{...J.dot,background:P}}),n.jsx("span",{style:J.topicName,children:h.topic}),n.jsx("span",{style:J.topicPillar,children:h.pillar}),n.jsxs("span",{style:J.topicProgress,children:[dt,"/",h.reviews.length," done"]}),n.jsx("button",{onClick:()=>C(h),style:J.ghostBtn,title:"Edit plan",children:n.jsx(ve,{size:12})}),n.jsx("button",{onClick:()=>L(h.id,h.topic),style:J.ghostBtn,title:"Delete",children:n.jsx(xt,{size:13})})]}),n.jsxs("div",{style:J.reviewDots,children:[h.reviews.map(ft=>{ft.due_date<t;const Tt=ft.due_date===t;return n.jsx("button",{onClick:()=>A(ft.id),title:`Review ${ft.stage} · ${ft.due_date}${ft.done?" · Done":""}`,style:{...J.reviewDot,background:ft.done?P:Tt?at:"var(--hover)",border:`2px solid ${ft.done||Tt?P:"var(--border)"}`,color:ft.done?"#fff":P},children:ft.stage},ft.id)}),n.jsxs("span",{style:J.learnedDate,children:["Learned ",h.learned_date]})]})]},h.id)})]}),R.length>0&&n.jsxs("div",{style:J.section,children:[n.jsxs("button",{onClick:()=>k(h=>!h),style:J.cementedToggle,children:[j?n.jsx(vi,{size:15}):n.jsx(Xr,{size:15}),n.jsx(Vr,{size:14,color:"#C9A227"}),"Cemented",n.jsx("span",{style:{...J.badge,background:"rgba(201,162,39,0.12)",color:"#8A6E1A"},children:R.length})]}),j&&R.map(h=>{var at;const P=((at=Ye[h.pillar])==null?void 0:at.dot)||"#9A968C";return n.jsx("div",{style:{...J.topicCard,opacity:.75},children:n.jsxs("div",{style:J.topicHead,children:[n.jsx("span",{style:{...J.dot,background:P}}),n.jsx("span",{style:J.topicName,children:h.topic}),n.jsx("span",{style:J.topicPillar,children:h.pillar}),n.jsx(Vr,{size:13,color:"#C9A227",style:{marginLeft:"auto"}})]})},h.id)})]}),n.jsxs("div",{style:J.calCard,children:[n.jsxs("div",{style:J.calHead,children:[n.jsx("button",{onClick:ut,style:J.calNav,children:"‹"}),n.jsxs("div",{style:J.calTitle,children:[ov(e,o)," · Review Calendar"]}),n.jsx("button",{onClick:q,style:J.calNav,children:"›"})]}),n.jsx("div",{style:J.calDow,children:ev.map(h=>n.jsx("div",{style:J.calDowCell,children:h},h))}),n.jsxs("div",{style:J.calGrid,children:[Array.from({length:O}).map((h,P)=>n.jsx("div",{},`p${P}`)),F.map((h,P)=>{const at=w[h]||[],dt=h===t,wt=h===v,Dt=h<t,ft=wt?"#fff":dt?"var(--text)":Dt?"var(--text-2)":"var(--text-3)";return n.jsxs("button",{onClick:()=>f(wt?null:h),style:{...J.calDay,background:wt?"var(--accent-strong)":dt?"var(--hover)":"var(--surface)",borderColor:dt||wt?"var(--accent-strong)":"var(--border)"},children:[n.jsx("span",{style:{...J.calDayNum,color:ft,fontWeight:dt||wt?700:600},children:P+1}),at.slice(0,2).map((Tt,Y)=>{var pt;return n.jsxs("span",{title:Tt.topic,style:{...J.calItem,color:wt?"#fff":((pt=Ye[Tt.pillar])==null?void 0:pt.dot)||"var(--text-2)"},children:[Y+1,". ",Tt.topic]},Y)}),at.length>2&&n.jsxs("span",{style:{...J.calMore,color:wt?"#fff":"var(--text-3)"},children:["+",at.length-2," more"]})]},h)})]}),v&&n.jsxs("div",{style:J.dayDetail,children:[n.jsxs("div",{style:J.dayDetailTitle,children:["Reviews for ",v]}),V.length===0?n.jsx("div",{style:J.empty,children:"No reviews scheduled for this day."}):V.map((h,P)=>{var dt,wt;const at=((dt=Ye[h.pillar])==null?void 0:dt.dot)||"#9A968C";return n.jsxs("div",{style:{...J.reviewCard,borderLeft:`3px solid ${at}`},children:[n.jsx("button",{onClick:()=>A(h.id),style:{...J.checkbox,...h.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:h.done&&n.jsx(jt,{size:12,color:"#fff",strokeWidth:3})}),n.jsxs("div",{children:[n.jsxs("div",{style:J.reviewTopic,children:[P+1,". ",h.topic]}),n.jsxs("span",{style:{...J.stageTag,background:((wt=Ye[h.pillar])==null?void 0:wt.soft)||"rgba(0,0,0,0.05)",color:at},children:["Review ",h.stage,"/",h.total]})]})]},h.id)})]})]}),n.jsx(Mn,{toasts:E,onUndo:M,onDismiss:et})]})}const J={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},addBox:{background:"var(--surface)",borderRadius:12,padding:16,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},addRow:{display:"flex",gap:8,alignItems:"center"},editHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",minWidth:0},select:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 10px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},section:{marginBottom:20},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},reviewCard:{display:"flex",alignItems:"center",gap:12,background:"var(--surface)",borderRadius:10,padding:"12px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},checkbox:{width:22,height:22,borderRadius:6,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,padding:0},reviewTopic:{fontSize:13.5,fontWeight:600,marginBottom:4},reviewMeta:{display:"flex",alignItems:"center",gap:8},stageTag:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10},missedTag:{fontSize:11,color:"#C2536B",fontWeight:600},topicCard:{background:"var(--surface)",borderRadius:12,padding:"13px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},topicHead:{display:"flex",alignItems:"center",gap:8,marginBottom:10},dot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},topicName:{fontSize:14,fontWeight:600,flex:1},topicPillar:{fontSize:11,color:"var(--text-3)",fontWeight:500},topicProgress:{fontSize:11,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:10},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},reviewDots:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},reviewDot:{width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",fontSize:11,fontWeight:700,padding:0},learnedDate:{fontSize:11,color:"var(--text-3)",marginLeft:"auto"},cementedToggle:{display:"flex",alignItems:"center",gap:8,border:"none",background:"none",cursor:"pointer",fontSize:13,fontWeight:700,color:"var(--text-2)",padding:"4px 0",fontFamily:"inherit",marginBottom:8},empty:{fontSize:13,color:"var(--text-3)",padding:"16px 0",textAlign:"center"},calCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{border:"none",background:"none",fontSize:20,cursor:"pointer",color:"var(--text-2)",padding:"0 6px",lineHeight:1},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4},calDay:{minHeight:62,border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,cursor:"pointer",fontFamily:"inherit",display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"flex-start",gap:1,position:"relative",padding:"3px 4px",overflow:"hidden",textAlign:"left"},calDayNum:{fontSize:11,lineHeight:1.1,marginBottom:1},calItem:{fontSize:8.5,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",lineHeight:1.3,textAlign:"left"},calMore:{fontSize:8,fontWeight:700,opacity:.85,lineHeight:1.2},dayDetail:{marginTop:16,paddingTop:16,borderTop:"1px solid var(--border)"},dayDetailTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10}},gs=[{id:1,title:"Regular Habits",cards:[{id:1,text:"1. I always do everything I need to do, when I need to do it. "},{id:2,text:"2. I never argue or let my emotions work against me. "},{id:3,text:"3. I have a good memory. I easily and automatically remember any name or anything that is important to me. "},{id:4,text:"4. I eat only what I should. "},{id:5,text:"5. I am a good listener. I hear everything that is said. I am attentive, interested, and aware of everything that is going on around me. "},{id:6,text:"6. I have the courage to state my opinions. I take responsibility for myself and everything I say and do."},{id:7,text:"7. I never spend more than I earn. I am financially responsible, both for my present and for my future."},{id:8,text:"8. I set goals and I follow them. I set my sights, take the appropriate action, and achieve my goals."},{id:9,text:"9. I spend time with my family and my loved ones. I enjoy sharing their lives with mine and my life with theirs."}]},{id:2,title:"Motivational",cards:[{id:1,text:"1. I can do anything I believe I can do. I’ve got it and every day I get more of it. I have talent, skills, and ability"},{id:2,text:"2. I set goals and I reach them. I know what I want out of life. I go after it and I get it. "},{id:3,text:"3. People like me, and I feel good about myself. I have a sense of pride in whoa am and I believe in myself. Nothing seems to stop me. I have a lot of determination. "},{id:4,text:"4. I turn problems into advantages. I find possibilities in things that other people never give a chance."},{id:5,text:"5. I have a lot of energy––I am very alive. I enjoy life and I can tell it and so can others"},{id:6,text:"6. I keep myself up, looking ahead, and liking it. I know that I can accomplish anything I choose, and I refuse to let anything negative hold me back or stand in my way. I am not afraid of anything or anyone. I have strength, power, conviction, and confidence. "},{id:7,text:"7. I like challenges and I meet them head on, face to face––today especially. I am on top of the world and I’m going for it. "},{id:8,text:"8. I have a clear picture in my mind of what I want. I can see it in front of me. "},{id:9,text:"9. I know what I want and I know how to get it. I know that it’s all up to me and I know I can do it. Roadblocks don’t bother me. They just mean that I am alive and running, and I’m not going to stand still for anything. "},{id:10,text:"10. I trust myself I’ve got what it takes––plenty of it––and I know how to use it. "},{id:11,text:"11. Today, more than ever. Today I am unstoppable. I’ve got myself together and I’m getting more together every day. And today––look out world, here I come. "},{id:12,text:"12. Limitations? I don’t even recognize them as limitations. There is no challenge I can’t conquer; there is no wall I can’t climb over. "},{id:13,text:"13. There is no problem I can’t defeat or turn around and make it work for me. I stand tall. I am honest and sincere. I like to deal with people and they like me. "},{id:14,text:"14. I think well; I think clearly. I am organized; I am in control of myself, and everything about me. I call my shots and no one has to call them for me. I never blame anyone else for the circumstances of my life. "},{id:15,text:"15. I accept my failings and move past them as easily as I accept the rewards for my victories. I never demand perfection of myself, but I expect the very best of what I have to give––and that’s what I get. I never give myself excuses. "},{id:16,text:"16. I get things done on time and in the right way. Today I have the inner strength to do more than ever. I am an exceptional human being. "},{id:17,text:"17. My goals and my incredible belief in myself turn my goals into reality. I have the power to live my dreams."},{id:18,text:"18.  I believe in them like I believe in myself. And that belief is so strong that there is nothing that diminishes my undefeatable spirit. "}]},{id:3,title:"Organized planning",cards:[{id:1,text:"1. I am organized and in control of my life. I am in control of myself, my thoughts, my time, my actions, and my future. "},{id:2,text:"2. I know what to do and when to do it, and I do everything I need to do, when I need to do it. "},{id:3,text:"3. I program my mind to make the maximum use of my time. I am in control of my time and how to use it. I like being organized, efficient, and on top of things."},{id:4,text:"4. Controlling my time keeps me that way. "},{id:5,text:"5. I never waste time––I always “plan” time. And because I plan my time, I always have time to do the things I choose to do. "},{id:6,text:"6. Each day I become more organized and in control of all areas of my life––at home, at work, in my mind and in my thoughts, in everything that I do. "},{id:7,text:"7. I am very well organized. Each night I make a list of things I need to do the next day. I set my priorities and I follow them. "},{id:8,text:"8. I am always on time. I am always right where I need to be, exactly when I need to be there. "},{id:9,text:"9. Being on time is easy for me and the more I control my time and the more organized I become, the easier it is. "},{id:10,text:"10. I am in control of my feelings, my emotions, my attitudes, and my needs. I control them; they do not control me. "},{id:11,text:"11. I have the winning vote in the outcome of my own actions. And I choose to live my life by choice, not chance. Therefore, I take the time to take control."},{id:12,text:"12. I have an organized and orderly mind. Because I think in an organized way, I conduct my life in an organized manner. "},{id:13,text:"13. I think in the most positive and productive way at all times and in all things. The way I think is the way I live––and I think “right.” "},{id:14,text:"14. I am the director of my destiny. I know where I am going and I know why I am going there. My earthly life is in my hands and in my control. "},{id:15,text:"15. I control my goals and the achievement of my goals. I organize my goals by writing each of them down, along with the steps I need to reach them. One of the reasons for my success is that my goals are clearly defined and organized."},{id:16,text:"16. I am in complete control of what I think and how I think. Therefore, I choose to think only those thoughts which help me and which are of genuine benefit to me."}]},{id:4,title:"Solving Problems",cards:[{id:1,text:"1. I’m good at solving problems. I like challenges and I meet them head on. "},{id:2,text:"2. Problems are my teachers. They help me to learn and grow. Without them, I would be going nowhere. With them, I am moving forward in the direction of my own goals. "},{id:3,text:"3. There is no problem which I cannot conquer. I am strong in mind, body, and spirit. My will, my strength, and my determination are always greater than any problem I face."},{id:4,text:"4. When I meet a new problem, I do not see the problem as my enemy. I know that finding the solution to the problem will move me forward in my own personal growth."},{id:5,text:"5. Because I know that problems are a key ingredient in my spiritual and mental education and preparation, I recognize that all problems are important to me. "},{id:6,text:"6. I do not fear problems, I solve them. I do not ignore problems, I confront them. I do not avoid problems, I conquer them. "},{id:7,text:"7. I know that every problem holds within itself the keys to its own solution. Therefore, the better I understand the problem, the clearer I am able to see its solution. "},{id:8,text:"8. Having problems is not a problem for me. I am confident, self-assured, positive, and determined. I always know that I am going to overcome any problem I encounter––and I always do. "},{id:9,text:"9. I am good at breaking large obstacles down into smaller pieces that are easier to handle. And I never make any problem appear to be larger than it actually is. "},{id:10,text:"10. I never worry. I turn “worry time” into positive, constructive, “solution time.” I keep my mind alert and open to all solutions—and solutions come quickly and easily to me. "},{id:11,text:"11. I have learned to recognize that many problems carry with them benefits and potential opportunities which would not have presented themselves had the problem not occurred in the first place. "},{id:12,text:"12. I do not seek to live a life which is free from all problems. Instead, I choose to live a life of finding solutions and enjoying the benefits which those solutions create."},{id:13,text:"13. Challenge, conquer, solution, and win are words which I live by daily. Challenges are opportunities. Conquering them is the inevitable outcome. "},{id:14,text:"14. “Solutions” are the stepping stones to my success, and “Winning” is my way of life."}]},{id:5,title:"Self Esteem",cards:[{id:1,text:"1. I really am very special. I like who I am and I feel good about myself. "},{id:2,text:"2. Although I always work to improve myself and I get better every day, I like who I am today. And tomorrow, when I’m even better, I’ll like myself then, too. "},{id:3,text:"3. It’s true that there really is no one else like me in the entire world. There never was another me before, and there will never be another me again. "},{id:4,text:"4. I am unique––from the top of my head to the bottom of my feet. In some ways I may look and act and sound like some others––but I am not them. I am me."},{id:5,text:"5. I wanted to be somebody––and now I know I am I would rather be me than anyone else in the world. "},{id:6,text:"6. I like how I feel and I like how I think and I like how I do things. I approve of me and I approve of who I am."},{id:7,text:"7. I have many beautiful qualities about me. I have talents and skills and abilities. I even have talents that I don’t even know about yet. And I am discovering new talents inside myself all the time. "},{id:8,text:"8. I am positive. I am confident. I radiate good things. If you look closely, you can even see a glow around me."},{id:9,text:"9. I am full of life. I like life and I’m glad to be alive. I am a very special person, living at a very special time. "},{id:10,text:"10. I am intelligent. My mind is quick and alert and clever and fun. I think good thoughts, and my mind makes things work right for me. "},{id:11,text:"11. I have a lot of energy and enthusiasm and vitality. I am exciting and I really enjoy being me. "},{id:12,text:"12. I like to be around other people and other people like to be around me. People like to hear what I have to say and know what I have to think. "},{id:13,text:"13. I smile a lot. I am happy on the inside and I am happy on the outside. "},{id:14,text:"14. I am interested in many things. I appreciate all the blessings I have, and the things that I learn, and all the things I will learn today and tomorrow and forever––just as long as I am. "},{id:15,text:"15. I am warm, sincere, honest, and genuine. I am all of these things and more. And all of these things are me. I like who I am, and I’m glad to be me."}]},{id:6,title:"Self-Responsibility",cards:[{id:1,text:"1. I take full responsibility for everything about me––even the thoughts that I think. I am in control of the vast resources of my own mind."},{id:2,text:"2. I alone am responsible for what I do and what I tell myself about me. No one can share this responsibility with me. "},{id:3,text:"3. I also allow others to accept their responsibilities far themselves and I do not try to accept their responsibilities for them. "},{id:4,text:"4. I enjoy being responsible. It puts me in charge of being me––and that’s a challenge I enjoy. "},{id:5,text:"5. I allow no one else, at any time, to assume control or responsibility over my life or over anything that I do. My responsibility to others is an extension of my own responsibility to myself. "},{id:6,text:"6. I choose to leave nothing about me up to chance. When it comes to me––and anything in my life––I choose to CHOOSE. "},{id:7,text:"7. My choices are mine alone to make for myself. I do not, at any time, allow anyone else to make my choices for me. And I accept full responsibility for every choice and decision I make. "},{id:8,text:"8. I always meet all of the obligations which I accept. And I accept no obligations which I will not meet. "},{id:9,text:"9. I am trustworthy. I can be counted on. I have accepted winning responsibility for myself––and I always live up to the responsibilities I accept. "},{id:10,text:"10. There is no they on whom I lay the blame, or with whom I share my own personal responsibilities. I have learned the great secret of mastering my own destiny. I have learned that “they” is “me.” "},{id:11,text:"11. I have no need to make excuses and no one needs to carry my responsibility for me. I gladly carry my own weight––and I carry it well. "},{id:12,text:"12. Each day I acknowledge and accept the responsibility––not only for my own actions––but also for my emotions, my thoughts, and my attitude. "},{id:13,text:"13. I accept the responsibility for living my life in a way which creates my strengths, my happiness, my positive, healthy beliefs, and for my past, my present, and my future."}]},{id:7,title:"Freedom from worry",cards:[{id:1,text:"1. I never worry. Instead of worrying, I find solutions and I act on them. "},{id:2,text:"2. My mind is constantly in tune with the positive. It is bright, cheerful, enthusiastic, and full of good, positive thoughts and ideas. "},{id:3,text:"3. I am able to relax easily and comfortably in my body and in my mind. I am calm, confident, and self-assured. "},{id:4,text:"4. My mind is orderly and well-organized. I consciously choose what I think and I always choose those thoughts which are the most positive and beneficial for me. "},{id:5,text:"5. All of my thoughts create healthiness within me. My mind dwells only on those thoughts which create more harmony, balance, and well-being within me and in the world around me. "},{id:6,text:"6. I automatically, and always, think in a decisive and determined way. "},{id:7,text:"7. I am full of resolution and the absolute assurance of the best possible outcome in everything that I do. "},{id:8,text:"8. I choose to look at the world around me in the bright, healthy light of optimism and self-assurance. "},{id:9,text:"9. I do only those things which are best for me. I create the best within myself, I attract the best in others, and I find the best in the world around me. "},{id:10,text:"10. I willingly, and without fail, take care of the duties and obligations which I have accepted for myself."},{id:11,text:"11. I commit only to those responsibilities which I know I can fulfill. "},{id:12,text:"12. I focus the attention of my mind only on those things that I can do something about. If I cannot affect it or direct it––I accept it. "},{id:13,text:"13. I keep my mind too busy thinking good, healthy, positive, constructive, and productive thoughts to ever have any time for worry. "},{id:14,text:"14. I control the thoughts I choose. No thought, at any time, can dwell in my mind without my approval or permission. I never worry."}]},{id:8,title:"Eating Habits",cards:[{id:1,text:"1. I am in control of myself in every way––at all times and in all situations. "},{id:2,text:"2. Each time I sit down to eat I reaffirm my determination to achieve my goal. By eating right, and never giving in, I am reaching the weight I want. "},{id:3,text:"3. Whether eating in or eating out, I really enjoy eating less. "},{id:4,text:"4. I never feel the need to finish the food in front of me. I eat only what I should––and never one bite more. "},{id:5,text:"5. One way to weight-loss that’s easy and works, is less food on my plate, and less on my fork. "},{id:6,text:'6. By ordering less when I eat out, and by serving myself smaller portions at home, I keep myself aware of the importance of staying with my goal––each and every day. “Less on my plate means less on my waist."'},{id:7,text:"7. When I sit down to eat, at no time do I allow anyone else to influence, tempt, or discourage me in any negative way."},{id:8,text:"8. What I eat, and the goals I reach, are up to me. And I give no one the right to hinder or control my success."},{id:9,text:"9. Although others may benefit from my success, I. am achieving my weight-loss goals for my own personal reasons––for myself, my life, my future, and my own personal well-being."},{id:10,text:"10. I am never, at any time, tempted to take one bite more than I should. I am strong, I am capable of reaching my goal, and I am doing it."},{id:11,text:"11. Being in situations which put a lot of food in front of me is not a problem to me now. I simply say “No” to the food and “Yes” to my success."},{id:12,text:"12. I enjoy sitting down to eat. Each time I do I conquer my past, and I create a trimmer, happier, more self-confident future in front of me. "},{id:13,text:"13. When I sit down to eat, I do not need someone else to remind me of my goal, or to keep me from eating something I should not. I take full responsibility for myself, and no one else has to do it for me. "},{id:14,text:"14. Controlling my weight, and my appetite, is easy for me now. I enjoy smaller portions, smaller bites, and a slower, healthier, more relaxed way of eating. "},{id:15,text:"15. I have set my goal and I am staying with it. I have turned mealtime into “achievement time.”"}]}],Zg=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#3A7CA5","#4C9A6B"],qi=t=>Zg[t%Zg.length],av=t=>t+"1A",Kb="anvil_affirmation_favs",dv=()=>{try{return new Set(JSON.parse(localStorage.getItem(Kb)||"[]"))}catch{return new Set}};function gv(){const[t,e]=p.useState(0),[r,o]=p.useState(0),[s,i]=p.useState(dv);p.useEffect(()=>{localStorage.setItem(Kb,JSON.stringify([...s]))},[s]);const l=(T,b)=>`${T}#${b.id}`,a=t==="FAV"?gs.flatMap((T,b)=>T.cards.filter(c=>s.has(l(T.title,c))).map(c=>({...c,color:qi(b),title:T.title}))):gs[t].cards.map(T=>({...T,color:qi(t),title:gs[t].title})),d=a.length,g=Math.min(r,Math.max(0,d-1)),m=a[g],v=T=>{e(T),o(0)},f=p.useCallback(()=>o(T=>Math.max(0,T-1)),[]),j=p.useCallback(()=>o(T=>Math.min(d-1,T+1)),[d]);p.useEffect(()=>{const T=b=>{b.key==="ArrowLeft"&&f(),b.key==="ArrowRight"&&j()};return window.addEventListener("keydown",T),()=>window.removeEventListener("keydown",T)},[f,j]);const k=T=>i(b=>{const c=new Set(b);return c.has(T)?c.delete(T):c.add(T),c}),S=m?m.color:"#8268B0";return n.jsxs("div",{style:Et.page,children:[n.jsxs("div",{style:Et.head,children:[n.jsx("div",{style:Et.eyebrow,children:"Anvil · Affirmations"}),n.jsx("h1",{style:Et.h1,children:"Affirmations"}),n.jsx("div",{style:Et.subhead,children:"One at a time — read it, mean it."})]}),n.jsxs("div",{style:Et.filterBar,children:[gs.map((T,b)=>{const c=t===b,u=qi(b);return n.jsxs("button",{onClick:()=>v(b),style:{...Et.chip,...c?{background:u,color:"#fff",borderColor:u}:{}},children:[n.jsx("span",{style:{...Et.catDot,background:c?"#fff":u}})," ",T.title," ",n.jsx("span",{style:Et.chipCount,children:T.cards.length})]},T.title)}),n.jsxs("button",{onClick:()=>v("FAV"),style:{...Et.chip,...t==="FAV"?{background:"#C9A227",color:"#fff",borderColor:"#C9A227"}:{}},children:[n.jsx(Ts,{size:12,fill:t==="FAV"?"#fff":"none"})," Favorites ",n.jsx("span",{style:Et.chipCount,children:s.size})]})]}),d===0?n.jsxs("div",{style:Et.empty,children:[n.jsx(Ts,{size:22,color:"#C3BFB5"}),n.jsx("div",{children:"No favorites yet — tap the star on a card to save it here."})]}):n.jsxs("div",{style:Et.viewer,children:[n.jsxs("div",{style:{...Et.card,borderTop:`4px solid ${S}`},children:[n.jsx("div",{style:{...Et.cardCat,color:S,background:av(S)},children:m.title}),n.jsx("button",{onClick:()=>k(l(m.title,m)),style:{...Et.favBtn,color:s.has(l(m.title,m))?"#C9A227":"#C3BFB5"},title:"Favorite",children:n.jsx(Ts,{size:20,fill:s.has(l(m.title,m))?"#C9A227":"none"})}),n.jsx($b,{size:30,color:S,style:{opacity:.25}}),n.jsx("p",{style:Et.cardText,children:m.text.trim()})]}),n.jsxs("div",{style:Et.navRow,children:[n.jsxs("button",{onClick:f,disabled:g===0,style:{...Et.navBtn,...g===0?Et.navBtnDisabled:{}},children:[n.jsx(Fn,{size:18})," Back"]}),n.jsxs("span",{style:{...Et.counter,color:S},children:[g+1," ",n.jsxs("span",{style:Et.counterTotal,children:["/ ",d]})]}),n.jsxs("button",{onClick:j,disabled:g===d-1,style:{...Et.navBtn,...g===d-1?Et.navBtnDisabled:{}},children:["Next ",n.jsx(Xr,{size:18})]})]}),n.jsx("div",{style:Et.dots,children:a.map((T,b)=>n.jsx("button",{onClick:()=>o(b),style:{...Et.dot,...b===g?{background:S,transform:"scale(1.5)"}:{}},title:`${b+1}`},b))})]})]})}const Et={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:22},chip:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipCount:{fontSize:11,fontWeight:700,opacity:.7},catDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},empty:{display:"flex",flexDirection:"column",alignItems:"center",gap:10,fontSize:13.5,color:"var(--text-3)",padding:"56px 12px",textAlign:"center",background:"var(--surface)",borderRadius:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},viewer:{display:"flex",flexDirection:"column",alignItems:"center"},card:{position:"relative",background:"var(--surface)",borderRadius:16,padding:"40px 32px 44px",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",width:"100%",minHeight:240,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",boxSizing:"border-box"},cardCat:{position:"absolute",top:16,left:16,fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:12,textTransform:"uppercase",letterSpacing:"0.04em"},favBtn:{position:"absolute",top:14,right:14,border:"none",background:"none",cursor:"pointer",padding:4,display:"grid",placeItems:"center"},cardText:{fontSize:21,lineHeight:1.55,margin:"14px 0 0",fontWeight:500,color:"var(--text)",fontFamily:"'Fraunces',Georgia,serif",maxWidth:560},navRow:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",maxWidth:420,marginTop:22},navBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},counter:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},counterTotal:{fontSize:13,fontWeight:600,color:"var(--text-3)"},dots:{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center",marginTop:20,maxWidth:480},dot:{width:7,height:7,borderRadius:"50%",border:"none",background:"var(--border)",cursor:"pointer",padding:0,transition:"transform 0.12s"}},Ie={financial:{label:"Financial",leaf:"#C9A227",shape:"round"},academic:{label:"Academic",leaf:"#3A7CA5",shape:"pine"},relationship:{label:"Relationship",leaf:"#C2536B",shape:"round"},spiritual:{label:"Spiritual",leaf:"#8268B0",shape:"tall"},health:{label:"Health",leaf:"#4C9A6B",shape:"round"}},Do="health";function fd({species:t=Do,progress:e=1,withered:r=!1,size:o=200}){const s=Math.max(0,Math.min(1,e)),i=Ie[t]||Ie[Do],l=r?"#8A7B63":"#7A5A3C",a=r?"#A99C84":i.leaf,d=r?"#8F8268":a,g=14+s*46,m=112-g,v=s>.14,f=v?8+s*30:0;return n.jsxs("svg",{viewBox:"0 0 120 120",width:o,height:o,style:{display:"block"},children:[n.jsx("ellipse",{cx:"60",cy:"114",rx:20+s*14,ry:"5",fill:"rgba(38,36,31,0.08)"}),!v&&n.jsxs("g",{transform:`translate(60 ${112-s*40})`,children:[n.jsx("path",{d:"M0 8 C0 8 0 -2 0 -6",stroke:"#4C9A6B",strokeWidth:"2.5",fill:"none"}),n.jsx("ellipse",{cx:"-5",cy:"-4",rx:"6",ry:"3.5",fill:"#4C9A6B",transform:"rotate(-30 -5 -4)"}),n.jsx("ellipse",{cx:"5",cy:"-4",rx:"6",ry:"3.5",fill:"#5BB07E",transform:"rotate(30 5 -4)"})]}),v&&n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:60-(2+s*2.5),y:m,width:(2+s*2.5)*2,height:g,rx:"2",fill:l}),i.shape==="pine"?n.jsxs(n.Fragment,{children:[n.jsx("polygon",{points:`60,${m-f*2.2} ${60-f},${m+4} ${60+f},${m+4}`,fill:a}),n.jsx("polygon",{points:`60,${m-f*3} ${60-f*.8},${m-f*.7} ${60+f*.8},${m-f*.7}`,fill:d})]}):i.shape==="tall"?n.jsxs(n.Fragment,{children:[n.jsx("ellipse",{cx:"60",cy:m-f*.3,rx:f*.78,ry:f*1.55,fill:a}),n.jsx("ellipse",{cx:"60",cy:m-f*.9,rx:f*.5,ry:f*1,fill:d,opacity:"0.9"})]}):n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"60",cy:m,r:f,fill:a}),n.jsx("circle",{cx:60-f*.7,cy:m+f*.3,r:f*.78,fill:a}),n.jsx("circle",{cx:60+f*.7,cy:m+f*.3,r:f*.78,fill:d}),n.jsx("circle",{cx:"60",cy:m-f*.5,r:f*.8,fill:d,opacity:"0.92"})]})]})]})}function cv({species:t}){return n.jsx(fd,{species:t,progress:1,size:56})}const uv=[{id:"day",label:"Day"},{id:"week",label:"Week"},{id:"month",label:"Month"},{id:"year",label:"Year"}],Xe=t=>t>=60?`${Math.floor(t/60)}h ${t%60}m`:`${t}m`,bv=t=>{const e=t<12?"am":"pm",r=t%12===0?12:t%12;return`${String(r).padStart(2,"0")} ${e}`};function pv(t){const e=t<=60?10:t<=120?20:t<=300?60:120,r=Math.max(60,Math.ceil((t||1)/e)*e),o=[];for(let s=0;s<=r;s+=e)o.push(s);return{max:r,ticks:o}}const Xb=t=>{const e=new Date(t);return e.setHours(0,0,0,0),e},mv=t=>{const e=Xb(t),r=(e.getDay()+6)%7;return e.setDate(e.getDate()-r),e},fv=t=>new Date(t.getFullYear(),t.getMonth(),1),hv=t=>new Date(t.getFullYear(),0,1);function vv(t,e){if(t==="day"){const s=Xb(e);return{start:s,end:new Date(+s+864e5),prev:new Date(+s-864e5),prev2:new Date(+s-2*864e5)}}if(t==="week"){const s=mv(e);return{start:s,end:new Date(+s+7*864e5),prev:new Date(+s-7*864e5),prev2:new Date(+s-14*864e5)}}if(t==="month"){const s=fv(e),i=e.getFullYear(),l=e.getMonth();return{start:s,end:new Date(i,l+1,1),prev:new Date(i,l-1,1),prev2:new Date(i,l-2,1)}}const r=e.getFullYear();return{start:hv(e),end:new Date(r+1,0,1),prev:new Date(r-1,0,1),prev2:new Date(r-2,0,1)}}function yv({sessions:t=[],onBack:e}){const[r,o]=p.useState("day"),s=new Date,{start:i,end:l,prev:a,prev2:d}=vv(r,s),g=q=>new Date(q.started_at||q.created_at),m=t.filter(q=>q.completed),v=(q,B,R)=>{const F=g(q);return F>=B&&F<R},f=(q,B)=>m.filter(R=>v(R,q,B)).reduce((R,F)=>R+(F.actual_min||0),0),j=m.filter(q=>v(q,i,l)),k=j.reduce((q,B)=>q+(B.actual_min||0),0),S=f(a,i),T=f(d,a),b=j.length,c=Array(24).fill(0);j.forEach(q=>{c[g(q).getHours()]+=q.actual_min||0});const u=Math.max(...c,0),x=pv(u),y={};j.forEach(q=>{const B=Ie[q.tree]?q.tree:Do;y[B]=(y[B]||0)+(q.actual_min||0)});const A=Object.entries(y).map(([q,B])=>({name:Ie[q].label,min:B,color:Ie[q].leaf})).sort((q,B)=>B.min-q.min),_=S>0?Math.round((k-S)/S*100):k>0?100:0,D=_>0?Vb:_<0?Ub:qf,E=_>0?"#4C9A6B":_<0?"#C2536B":"#9A968C",M={day:"yesterday",week:"last week",month:"last month",year:"last year"}[r],et={day:"2 days ago",week:"2 weeks ago",month:"2 months ago",year:"2 years ago"}[r],L=54,C=22,U=2*Math.PI*L;let ut=0;return n.jsxs("div",{style:ot.page,children:[n.jsxs("div",{style:ot.topbar,children:[n.jsxs("button",{onClick:e,style:ot.back,children:[n.jsx(Ab,{size:18})," Grove"]}),n.jsx("h1",{style:ot.h1,children:"Insights"}),n.jsx("div",{style:{width:76}})]}),n.jsx("div",{style:ot.rangeBar,children:uv.map(q=>n.jsx("button",{onClick:()=>o(q.id),style:{...ot.rangeBtn,...r===q.id?ot.rangeOn:{}},children:q.label},q.id))}),n.jsxs("div",{style:ot.headline,children:[n.jsxs("div",{style:ot.bigStat,children:[n.jsx("div",{style:ot.bigVal,children:Xe(k)}),n.jsxs("div",{style:ot.bigLbl,children:["Focused this ",r]})]}),n.jsxs("div",{style:ot.bigStat,children:[n.jsx("div",{style:ot.bigVal,children:b}),n.jsx("div",{style:ot.bigLbl,children:"Trees"})]})]}),n.jsxs("div",{style:ot.card,children:[n.jsxs("div",{style:ot.cardHead,children:[n.jsxs("div",{style:ot.cardTitle,children:["Your forest this ",r]}),n.jsx("div",{style:ot.cardHint,children:"Each tree is a completed session — bigger means longer focus"})]}),n.jsx(wv,{sessions:j}),n.jsxs("div",{style:ot.forestNumber,children:[b," ",b===1?"tree":"trees"," · ",Xe(k)," focused"]})]}),n.jsx(tl,{title:"Focus distribution",hint:"Minutes focused at each time of day",children:u===0?n.jsx(qg,{}):n.jsx(kv,{hours:c,axis:x})}),n.jsx(tl,{title:"Pillar distribution",hint:"How your focus splits across the five trees",children:A.length===0?n.jsx(qg,{}):n.jsxs("div",{style:ot.donutWrap,children:[n.jsxs("svg",{viewBox:"0 0 140 140",width:"150",height:"150",style:{flexShrink:0},children:[A.map(q=>{const B=q.min/(k||1)*U,R=n.jsx("circle",{cx:"70",cy:"70",r:L,fill:"none",stroke:q.color,strokeWidth:C,strokeDasharray:`${B} ${U-B}`,strokeDashoffset:-ut,transform:"rotate(-90 70 70)"},q.name);return ut+=B,R}),n.jsx("text",{x:"70",y:"66",textAnchor:"middle",style:ot.donutCenterTop,children:Xe(k)}),n.jsx("text",{x:"70",y:"82",textAnchor:"middle",style:ot.donutCenterSub,children:"total"})]}),n.jsx("div",{style:ot.legend,children:A.map(q=>n.jsxs("div",{style:ot.legendRow,children:[n.jsx("span",{style:{...ot.legendDot,background:q.color}}),n.jsx("span",{style:ot.legendName,children:q.name}),n.jsxs("span",{style:ot.legendVal,children:[Xe(q.min)," · ",Math.round(q.min/(k||1)*100),"%"]})]},q.name))})]})}),n.jsxs(tl,{title:"Focus trend",hint:`This ${r} vs the previous two`,children:[n.jsxs("div",{style:ot.trend3,children:[n.jsxs("div",{style:ot.trendCol,children:[n.jsx("div",{style:ot.trendVal,children:Xe(k)}),n.jsxs("div",{style:ot.trendLbl,children:["This ",r]})]}),n.jsxs("div",{style:ot.trendCol,children:[n.jsx("div",{style:{...ot.trendVal,color:"var(--text-2)"},children:Xe(S)}),n.jsx("div",{style:ot.trendLbl,children:M})]}),n.jsxs("div",{style:ot.trendCol,children:[n.jsx("div",{style:{...ot.trendVal,color:"var(--text-3)"},children:Xe(T)}),n.jsx("div",{style:ot.trendLbl,children:et})]})]}),n.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:n.jsxs("div",{style:{...ot.trendBadge,color:E,background:E+"1A"},children:[n.jsx(D,{size:15})," ",_>0?"+":"",_,"% vs ",M]})}),n.jsx(jv,{items:[{label:`This ${r}`,value:k,color:"#4C9A6B"},{label:M,value:S,color:"var(--text-3)"},{label:et,value:T,color:"var(--text-3)"}]})]})]})}const xv=t=>t===0?"12a":t<12?`${t}a`:t===12?"12p":`${t-12}p`;function kv({hours:t,axis:e}){return n.jsxs("div",{children:[n.jsxs("div",{style:ot.vcPlot,children:[e.ticks.map(r=>n.jsxs("div",{style:{...ot.vcGridRow,bottom:`${r/e.max*100}%`},children:[n.jsx("span",{style:ot.vcYLabel,children:r}),n.jsx("div",{style:ot.vcGridLine})]},r)),n.jsx("div",{style:ot.vcBars,children:t.map((r,o)=>n.jsx("div",{style:ot.vcCell,title:`${bv(o)} · ${r} min`,children:n.jsx("div",{style:{...ot.vcBar,height:r>0?`max(3px, ${r/e.max*100}%)`:0}})},o))})]}),n.jsx("div",{style:ot.vcXAxis,children:t.map((r,o)=>n.jsx("div",{style:ot.vcXCell,children:o%3===0?xv(o):""},o))}),n.jsx("div",{style:ot.vcYTitle,children:"minutes focused, by hour of day"})]})}function wv({sessions:t}){if(!t.length)return n.jsx("div",{style:ot.sceneEmpty,children:"No trees yet this period. 🌱"});const r=t.slice(0,80),o=t.length-r.length,s=i=>Math.round(Math.max(40,Math.min(88,40+(i||0)*.6)));return n.jsxs("div",{children:[n.jsx("div",{style:ot.scene,children:r.map(i=>n.jsx("div",{style:ot.sceneTree,title:`${i.label||"Focus"} · ${Xe(i.actual_min||i.duration_min)}`,children:n.jsx(fd,{species:i.tree,progress:1,size:s(i.actual_min||i.duration_min)})},i.id))}),o>0&&n.jsxs("div",{style:ot.overflow,children:["+",o," more trees"]})]})}function tl({title:t,hint:e,children:r}){return n.jsxs("div",{style:ot.card,children:[n.jsxs("div",{style:ot.cardHead,children:[n.jsx("div",{style:ot.cardTitle,children:t}),e&&n.jsx("div",{style:ot.cardHint,children:e})]}),r]})}function qg(){return n.jsx("div",{style:ot.empty,children:"No focus sessions in this period yet. 🌱"})}function jv({items:t}){const e=Math.max(1,...t.map(r=>r.value));return n.jsx("div",{style:ot.tbWrap,children:t.map(r=>n.jsxs("div",{style:ot.tbRow,children:[n.jsx("div",{style:ot.tbLbl,children:r.label}),n.jsx("div",{style:ot.tbTrack,children:n.jsx("div",{style:{...ot.tbBar,width:`${r.value/e*100}%`,background:r.color}})}),n.jsx("div",{style:ot.tbVal,children:Xe(r.value)})]},r.label))})}const ot={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"20px 16px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:720,margin:"0 auto"},topbar:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},back:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},h1:{fontSize:20,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},rangeBar:{display:"flex",gap:6,background:"var(--surface)",padding:5,borderRadius:12,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},rangeBtn:{flex:1,border:"none",background:"none",padding:"9px 0",borderRadius:8,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},rangeOn:{background:"var(--accent-strong)",color:"#fff"},headline:{display:"flex",gap:12,marginBottom:16},bigStat:{flex:1,background:"var(--surface)",borderRadius:14,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},bigVal:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em"},bigLbl:{fontSize:12,color:"var(--text-3)",marginTop:3,fontWeight:500},card:{background:"var(--surface)",borderRadius:16,padding:"18px 18px 20px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},cardHead:{marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardHint:{fontSize:12,color:"var(--text-3)",marginTop:2},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"24px 0"},scene:{display:"flex",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"center",gap:"0 2px",padding:"14px 8px 6px",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,minHeight:110,border:"1px solid var(--border)"},sceneTree:{lineHeight:0},sceneEmpty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"34px 0",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,border:"1px solid var(--border)"},overflow:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",marginTop:6,fontWeight:600},forestNumber:{textAlign:"center",marginTop:12,fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},vcPlot:{position:"relative",height:180,paddingLeft:30},vcGridRow:{position:"absolute",left:0,right:0,display:"flex",alignItems:"center",height:0},vcYLabel:{width:26,marginRight:4,textAlign:"right",fontSize:9,color:"var(--text-3)",fontWeight:600,flexShrink:0},vcGridLine:{flex:1,height:1,background:"#EEEBE4"},vcBars:{position:"absolute",left:30,right:0,top:0,bottom:0,display:"flex",alignItems:"flex-end",gap:1},vcCell:{flex:1,height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"center"},vcBar:{width:"72%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",transition:"height 0.3s"},vcXAxis:{display:"flex",marginLeft:30,marginTop:4},vcXCell:{flex:1,textAlign:"center",fontSize:8.5,color:"var(--text-3)",fontWeight:600,overflow:"hidden"},vcYTitle:{textAlign:"center",fontSize:9.5,color:"var(--text-3)",marginTop:6,letterSpacing:"0.06em",textTransform:"uppercase",fontWeight:600},donutWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap",justifyContent:"center"},donutCenterTop:{fontSize:16,fontWeight:800,fill:"var(--text)",fontFamily:"'Fraunces',Georgia,serif"},donutCenterSub:{fontSize:9,fill:"#9A968C",textTransform:"uppercase",letterSpacing:"0.08em"},legend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:11,height:11,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},legendVal:{fontSize:12,color:"var(--text-3)",fontWeight:600,flexShrink:0},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:56,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},Sv=[15,30,45,60,90],el="anvil_grove_active",tc=t=>`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`,ti=t=>t>=60?`${Math.floor(t/60)}h ${t%60}m`:`${t}m`;function Cv(){const[t,e]=p.useState("timer"),[r,o]=p.useState("idle"),[s,i]=p.useState(15),[l,a]=p.useState(!1),[d,g]=p.useState(""),[m,v]=p.useState(Do),[f,j]=p.useState(()=>localStorage.getItem("anvil_grove_deepfocus")!=="0"),[k,S]=p.useState(15*60),[T,b]=p.useState({sessions:[],stats:null}),c=p.useRef(null),u=p.useRef(null),x=p.useRef(!1),y=p.useCallback(async()=>{try{b(await $.getFocus())}catch{}},[]),A=p.useCallback(async(w,V)=>{if(!x.current){x.current=!0,localStorage.removeItem(el);try{await $.createFocus({label:d.trim()||null,tree:m,duration_min:s,actual_min:V,completed:w,started_at:u.current,ended_at:new Date().toISOString()})}catch{}y()}},[d,m,s,y]),_=p.useCallback(()=>{if(r!=="running")return;const w=u.current?Math.round((Date.now()-new Date(u.current).getTime())/6e4):0;o("failed"),A(!1,Math.max(0,Math.min(s,w)))},[r,s,A]),D=p.useCallback(()=>{o("done"),S(0),A(!0,s)},[s,A]);p.useEffect(()=>{y();const w=JSON.parse(localStorage.getItem(el)||"null");if(w&&w.endTime){const V=Math.round((w.endTime-Date.now())/1e3);i(w.duration),g(w.label||""),v(w.tree||"oak"),c.current=w.endTime,u.current=w.startedAt,V>0?(S(V),o("running")):(o("done"),x.current=!1,A(!0,w.duration))}},[]),p.useEffect(()=>{if(r!=="running")return;const w=()=>{const h=Math.round((c.current-Date.now())/1e3);if(h<=0){D();return}S(h)};w();const V=setInterval(w,250);return()=>clearInterval(V)},[r,D]),p.useEffect(()=>{if(r!=="running"||!f)return;const w=()=>{document.hidden&&_()};return document.addEventListener("visibilitychange",w),()=>document.removeEventListener("visibilitychange",w)},[r,f,_]),p.useEffect(()=>{const w=()=>{!document.hidden&&r!=="running"&&y()};window.addEventListener("focus",w),document.addEventListener("visibilitychange",w);const V=setInterval(w,6e4);return()=>{window.removeEventListener("focus",w),document.removeEventListener("visibilitychange",w),clearInterval(V)}},[y,r]);const E=()=>j(w=>{const V=!w;return localStorage.setItem("anvil_grove_deepfocus",V?"1":"0"),V}),M=()=>{x.current=!1,u.current=new Date().toISOString(),c.current=Date.now()+s*60*1e3,localStorage.setItem(el,JSON.stringify({endTime:c.current,duration:s,label:d,tree:m,startedAt:u.current})),S(s*60),o("running")},et=()=>{o("idle"),S(s*60)},L=w=>{a(!1),i(w),S(w*60)},C=()=>{l||(a(!0),i(5),S(5*60))},U=w=>{if(a(!0),w===""){i(0),S(0);return}const V=Math.max(1,Math.min(600,parseInt(w,10)||0));i(V),S(V*60)},ut=s*60,q=r==="running"?1-k/ut:r==="done"?1:0,B=130,R=2*Math.PI*B,F=R*(1-(r==="running"?q:r==="done"?1:0)),O=T.stats;return t==="stats"?n.jsx(yv,{sessions:T.sessions,onBack:()=>e("timer")}):n.jsxs("div",{style:it.page,children:[n.jsxs("div",{style:it.head,children:[n.jsx("div",{style:it.eyebrow,children:"Anvil · Grove"}),n.jsx("h1",{style:it.h1,children:"Grove"}),n.jsx("div",{style:it.subhead,children:"Plant a tree, stay focused, grow your grove."}),n.jsxs("button",{onClick:()=>e("stats"),style:it.insightsBtn,disabled:r==="running",children:[n.jsx(Nf,{size:15})," Insights"]})]}),O&&n.jsxs("div",{style:it.statRow,children:[n.jsx(cs,{label:"Today",value:ti(O.today_minutes)}),n.jsx(cs,{label:"Trees",value:O.trees}),n.jsx(cs,{label:"Streak",value:`${O.streak}d`}),n.jsx(cs,{label:"Success",value:`${O.success_rate}%`})]}),n.jsxs("div",{style:it.stage,children:[n.jsxs("div",{style:it.ringWrap,children:[n.jsxs("svg",{width:"300",height:"300",viewBox:"0 0 300 300",style:{position:"absolute",inset:0},children:[n.jsx("circle",{cx:"150",cy:"150",r:B,fill:"none",stroke:"var(--border)",strokeWidth:"10"}),n.jsx("circle",{cx:"150",cy:"150",r:B,fill:"none",stroke:r==="failed"?"#C2536B":"#4C9A6B",strokeWidth:"10",strokeLinecap:"round",strokeDasharray:R,strokeDashoffset:F,transform:"rotate(-90 150 150)",style:{transition:"stroke-dashoffset 0.4s linear"}})]}),n.jsx("div",{style:it.ringInner,children:n.jsx(fd,{species:m,progress:r==="idle"?0:q,withered:r==="failed",size:170})})]}),r==="idle"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:it.timeBig,children:tc(s*60)}),n.jsxs("div",{style:it.controls,children:[n.jsxs("div",{style:it.chips,children:[Sv.map(w=>n.jsxs("button",{onClick:()=>L(w),style:{...it.chip,...!l&&s===w?it.chipOn:{}},children:[w,"m"]},w)),n.jsx("button",{onClick:C,style:{...it.chip,...l?it.chipOn:{}},children:"Custom"})]}),l&&n.jsxs("div",{style:it.customRow,children:[n.jsx("input",{type:"number",min:"1",max:"600",inputMode:"numeric",autoFocus:!0,value:s||"",onChange:w=>U(w.target.value),placeholder:"e.g. 50",style:it.customInput}),n.jsx("span",{style:it.customUnit,children:"minutes"})]}),n.jsx("input",{value:d,onChange:w=>g(w.target.value),placeholder:"What are you focusing on? (optional)",style:it.input,maxLength:60}),n.jsx("div",{style:it.treePick,children:Object.entries(Ie).map(([w,V])=>n.jsxs("button",{onClick:()=>v(w),title:V.label,style:{...it.treeBtn,...m===w?{borderColor:V.leaf,background:V.leaf+"1A"}:{}},children:[n.jsx("span",{style:{...it.treeDot,background:V.leaf}}),V.label]},w))}),n.jsxs("button",{onClick:E,style:it.toggleRow,children:[n.jsxs("div",{style:{textAlign:"left"},children:[n.jsx("div",{style:it.toggleTitle,children:"Deep Focus"}),n.jsx("div",{style:it.toggleHint,children:f?"Leaving the app kills the tree":"Tree survives until you give up"})]}),n.jsx("div",{style:{...it.switch,...f?it.switchOn:{}},children:n.jsx("div",{style:{...it.knob,...f?it.knobOn:{}}})})]}),n.jsx("button",{onClick:M,disabled:s<1,style:{...it.plantBtn,...s<1?{opacity:.5,cursor:"not-allowed"}:{}},children:"Plant tree"})]})]}),r==="running"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:it.timeBig,children:tc(k)}),n.jsx("div",{style:it.focusLabel,children:d.trim()||"Focusing…"}),n.jsx("div",{style:f?it.warn:it.warnSoft,children:f?"⚠ Deep Focus on — leaving this app will kill your tree.":"🌿 Relaxed mode — only Give up ends this session."}),n.jsx("button",{onClick:_,style:it.giveUp,children:"Give up"})]}),r==="done"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:it.resultTitle,children:["🌳 You grew a ",Ie[m].label," tree!"]}),n.jsxs("div",{style:it.resultSub,children:[ti(s)," of focus added to your grove."]}),n.jsx("button",{onClick:et,style:it.plantBtn,children:"Plant another"})]}),r==="failed"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{...it.resultTitle,color:"#C2536B"},children:"Your tree withered."}),n.jsx("div",{style:it.resultSub,children:"You left before the timer finished. Try again?"}),n.jsx("button",{onClick:et,style:it.plantBtn,children:"Try again"})]})]}),n.jsx(Iv,{sessions:T.sessions,onDelete:async w=>{await $.deleteFocus(w),y()}})]})}function cs({label:t,value:e}){return n.jsxs("div",{style:it.stat,children:[n.jsx("div",{style:it.statValue,children:e}),n.jsx("div",{style:it.statLabel,children:t})]})}function Iv({sessions:t,onDelete:e}){const r=t.filter(l=>l.completed);if(r.length===0)return n.jsx("div",{style:it.forestEmpty,children:"Your grove is empty. Plant your first tree above. 🌱"});const o={};for(const l of r){const a=(l.started_at||l.created_at||"").slice(0,10);(o[a]||(o[a]=[])).push(l)}const s=Object.keys(o).sort().reverse(),i=l=>{const a=new Date().toISOString().slice(0,10);return l===a?"Today":new Date(l+"T00:00").toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})};return n.jsxs("div",{style:it.forest,children:[n.jsxs("div",{style:it.forestHead,children:["Your Grove · ",r.length," trees"]}),s.map(l=>n.jsxs("div",{style:it.daySection,children:[n.jsxs("div",{style:it.dayLabel,children:[i(l)," · ",o[l].length]}),n.jsx("div",{style:it.treeGrid,children:o[l].map(a=>n.jsxs("div",{style:it.treeCard,title:`${a.label||"Focus"} · ${ti(a.actual_min)}`,onDoubleClick:()=>e(a.id),children:[n.jsx(cv,{species:a.tree}),n.jsx("div",{style:it.treeCardMin,children:ti(a.actual_min||a.duration_min)}),a.label&&n.jsx("div",{style:it.treeCardLabel,children:a.label})]},a.id))})]},l)),n.jsx("div",{style:it.forestHint,children:"Double-tap a tree to remove it."})]})}const it={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:820,margin:"0 auto"},head:{marginBottom:16,textAlign:"center"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},insightsBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginTop:12},statRow:{display:"flex",gap:10,justifyContent:"center",marginBottom:18,flexWrap:"wrap"},stat:{background:"var(--surface)",borderRadius:12,padding:"10px 18px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",minWidth:78},statValue:{fontSize:19,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},statLabel:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},stage:{background:"var(--surface)",borderRadius:18,padding:"28px 24px 32px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",display:"flex",flexDirection:"column",alignItems:"center",marginBottom:26},ringWrap:{position:"relative",width:300,height:300,display:"grid",placeItems:"center"},ringInner:{position:"relative",zIndex:1,display:"grid",placeItems:"center"},timeBig:{fontSize:40,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:6},focusLabel:{fontSize:14,color:"var(--text-2)",marginTop:2,fontWeight:500},warn:{fontSize:12,color:"#C2773B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},warnSoft:{fontSize:12,color:"#4C9A6B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},toggleRow:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:12,padding:"10px 14px",cursor:"pointer",fontFamily:"inherit",width:"100%"},toggleTitle:{fontSize:14,fontWeight:700,color:"var(--text)"},toggleHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},switch:{width:42,height:24,borderRadius:12,background:"var(--border)",flexShrink:0,padding:2,transition:"background 0.18s",boxSizing:"border-box"},switchOn:{background:"#4C9A6B"},knob:{width:20,height:20,borderRadius:"50%",background:"var(--surface)",boxShadow:"0 1px 2px rgba(0,0,0,0.2)",transform:"translateX(0)",transition:"transform 0.18s"},knobOn:{transform:"translateX(18px)"},controls:{width:"100%",maxWidth:380,display:"flex",flexDirection:"column",gap:14,marginTop:8},chips:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},chip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},customRow:{display:"flex",alignItems:"center",justifyContent:"center",gap:8},customInput:{border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:15,fontWeight:700,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center",width:100},customUnit:{fontSize:13,color:"var(--text-3)",fontWeight:600},input:{border:"1px solid var(--border)",borderRadius:10,padding:"11px 13px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center"},treePick:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},treeBtn:{display:"flex",alignItems:"center",gap:6,border:"1.5px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},treeDot:{width:10,height:10,borderRadius:"50%"},plantBtn:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},giveUp:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",padding:"11px 26px",borderRadius:11,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:18},resultTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginTop:14,textAlign:"center"},resultSub:{fontSize:13.5,color:"var(--text-3)",marginTop:6,marginBottom:18,textAlign:"center"},forest:{background:"var(--surface)",borderRadius:16,padding:"20px 22px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},forestHead:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},forestEmpty:{background:"var(--surface)",borderRadius:16,padding:"40px 20px",textAlign:"center",color:"var(--text-3)",fontSize:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},daySection:{marginBottom:16},dayLabel:{fontSize:12,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:8},treeGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(80px,1fr))",gap:8},treeCard:{display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 4px",borderRadius:10,cursor:"pointer",background:"var(--surface-2)"},treeCardMin:{fontSize:12,fontWeight:700,color:"#4C9A6B",marginTop:-4},treeCardLabel:{fontSize:10.5,color:"var(--text-3)",marginTop:2,textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:76},forestHint:{fontSize:11,color:"var(--text-3)",textAlign:"center",marginTop:6}},ca=[{code:"INR",symbol:"₹",locale:"en-IN",label:"Indian Rupee"},{code:"USD",symbol:"$",locale:"en-US",label:"US Dollar"},{code:"EUR",symbol:"€",locale:"de-DE",label:"Euro"},{code:"GBP",symbol:"£",locale:"en-GB",label:"British Pound"},{code:"JPY",symbol:"¥",locale:"ja-JP",label:"Japanese Yen"},{code:"AED",symbol:"د.إ",locale:"en-AE",label:"UAE Dirham"},{code:"AUD",symbol:"A$",locale:"en-AU",label:"Australian Dollar"},{code:"CAD",symbol:"C$",locale:"en-CA",label:"Canadian Dollar"},{code:"SGD",symbol:"S$",locale:"en-SG",label:"Singapore Dollar"}],ec="INR",Jb="anvil_currency",hd=t=>ca.find(e=>e.code===t)||ca[0];function Ro(){try{return localStorage.getItem(Jb)||ec}catch{return ec}}function rc(t){try{localStorage.setItem(Jb,t)}catch{}return window.dispatchEvent(new CustomEvent("anvil-currency",{detail:t})),t}function ei(t,e){const r=hd(e||Ro()),o=Math.round(Number(t)||0);return r.symbol+o.toLocaleString(r.locale)}function zv(t,e){const r=hd(e||Ro()),o=Math.round(Number(t)||0),s=Math.abs(o);return r.code==="INR"?s>=1e7?r.symbol+(o/1e7).toFixed(s>=1e8?0:1)+"Cr":s>=1e5?r.symbol+(o/1e5).toFixed(s>=1e6?0:1)+"L":s>=1e3?r.symbol+(o/1e3).toFixed(s>=1e4?0:1)+"K":r.symbol+o:s>=1e9?r.symbol+(o/1e9).toFixed(1)+"B":s>=1e6?r.symbol+(o/1e6).toFixed(1)+"M":s>=1e3?r.symbol+(o/1e3).toFixed(1)+"K":r.symbol+o}function Zb(){const[t,e]=p.useState(Ro());return p.useEffect(()=>{const r=o=>e(o.detail||Ro());return window.addEventListener("anvil-currency",r),()=>window.removeEventListener("anvil-currency",r)},[]),hd(t)}const nc="grove_rates",rl=Object.keys(Ie),Le=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,oc=t=>{const e=new Date(t);e.setHours(0,0,0,0);const r=(e.getDay()+6)%7;return e.setDate(e.getDate()-r),e},sc=t=>{const e=Math.floor(t/60),r=t%60;return e&&r?`${e}h ${r}m`:e?`${e}h`:`${r}m`},Tv=[{id:"week",label:"This week"},{id:"month",label:"This month"},{id:"last7",label:"Last 7 days"},{id:"year",label:"This year"}];function nl(t){const e=new Date;if(t==="week")return[Le(oc(e)),Le(e)];if(t==="month")return[Le(new Date(e.getFullYear(),e.getMonth(),1)),Le(e)];if(t==="last7"){const r=new Date(e);return r.setDate(r.getDate()-6),[Le(r),Le(e)]}return t==="year"?[Le(new Date(e.getFullYear(),0,1)),Le(e)]:[Le(oc(e)),Le(e)]}function Ev(){const t=Zb(),e=y=>ei(y,t.code),[r,o]=p.useState({}),[s,i]=p.useState([]),[l,a]=p.useState("week"),[d,g]=p.useState(()=>nl("week")[0]),[m,v]=p.useState(()=>nl("week")[1]),[f,j]=p.useState(!1);p.useEffect(()=>{(async()=>{try{const[y,A]=await Promise.all([$.getFocus(),$.getSetting(nc)]);i(y.sessions||[]),o(A.value||{})}catch{}j(!0)})()},[]);const k=y=>{a(y);const[A,_]=nl(y);g(A),v(_)},S=(y,A)=>{a(""),y==="from"?g(A):v(A)},T=(y,A)=>{const _=Math.max(0,parseFloat(A)||0),D={...r,[y]:_};o(D),$.setSetting(nc,D).catch(()=>{})},b=p.useMemo(()=>{const y=d,A=m,_={};return rl.forEach(D=>_[D]=0),s.filter(D=>D.completed).forEach(D=>{const E=(D.started_at||D.created_at||"").slice(0,10);if(E<y||E>A)return;const M=Ie[D.tree]?D.tree:Do;_[M]+=D.actual_min||0}),rl.map(D=>{const E=_[D],M=r[D]||0;return{pillar:D,minutes:E,rate:M,cost:E/60*M,...Ie[D]}}).sort((D,E)=>E.cost-D.cost||E.minutes-D.minutes)},[s,r,d,m]),c=b.reduce((y,A)=>y+A.cost,0),u=b.reduce((y,A)=>y+A.minutes,0),x=Math.max(1,...b.map(y=>y.cost));return n.jsxs("div",{style:bt.page,children:[n.jsxs("div",{style:bt.head,children:[n.jsx("div",{style:bt.eyebrow,children:"Anvil · Worth"}),n.jsx("h1",{style:bt.h1,children:"Worth"}),n.jsx("div",{style:bt.subhead,children:"What your focused time is worth, by pillar."})]}),n.jsxs("div",{style:bt.hero,children:[n.jsx("div",{style:bt.heroVal,children:e(c)}),n.jsxs("div",{style:bt.heroSub,children:[sc(u)," focused · ",d," → ",m]})]}),n.jsxs("div",{style:bt.card,children:[n.jsx("div",{style:bt.cardTitle,children:"Period"}),n.jsx("div",{style:bt.presetRow,children:Tv.map(y=>n.jsx("button",{onClick:()=>k(y.id),style:{...bt.preset,...l===y.id?bt.presetOn:{}},children:y.label},y.id))}),n.jsxs("div",{style:bt.dateRow,children:[n.jsxs("label",{style:bt.dateField,children:[n.jsx("span",{style:bt.dateLbl,children:"From"}),n.jsx("input",{type:"date",value:d,max:m,onChange:y=>S("from",y.target.value),style:bt.dateInput})]}),n.jsx("span",{style:bt.dateArrow,children:"→"}),n.jsxs("label",{style:bt.dateField,children:[n.jsx("span",{style:bt.dateLbl,children:"To"}),n.jsx("input",{type:"date",value:m,min:d,onChange:y=>S("to",y.target.value),style:bt.dateInput})]})]})]}),n.jsxs("div",{style:bt.card,children:[n.jsx("div",{style:bt.cardTitle,children:"Breakdown"}),f?u===0?n.jsx("div",{style:bt.muted,children:"No focus sessions in this period."}):n.jsxs("div",{style:bt.rows,children:[b.map(y=>n.jsxs("div",{style:bt.row,children:[n.jsxs("div",{style:bt.rowTop,children:[n.jsx("span",{style:{...bt.dot,background:y.leaf}}),n.jsx("span",{style:bt.rowName,children:y.label}),n.jsx("span",{style:bt.rowCost,children:e(y.cost)})]}),n.jsx("div",{style:bt.rowBarTrack,children:n.jsx("div",{style:{...bt.rowBar,width:`${y.cost/x*100}%`,background:y.leaf}})}),n.jsxs("div",{style:bt.rowMeta,children:[sc(y.minutes)," × ",e(y.rate),"/hr"]})]},y.pillar)),n.jsxs("div",{style:bt.totalRow,children:[n.jsx("span",{children:"Total"}),n.jsx("span",{style:bt.totalVal,children:e(c)})]})]}):n.jsx("div",{style:bt.muted,children:"Loading…"})]}),n.jsxs("div",{style:bt.card,children:[n.jsx("div",{style:bt.cardTitle,children:"Hourly rates"}),n.jsx("div",{style:bt.cardHint,children:"Set how much an hour of focus is worth for each pillar."}),n.jsx("div",{style:bt.rateGrid,children:rl.map(y=>n.jsxs("div",{style:bt.rateRow,children:[n.jsx("span",{style:{...bt.dot,background:Ie[y].leaf}}),n.jsx("span",{style:bt.rateName,children:Ie[y].label}),n.jsxs("div",{style:bt.rateInputWrap,children:[n.jsx("span",{style:bt.rupeeSign,children:t.symbol}),n.jsx("input",{type:"number",min:"0",inputMode:"numeric",placeholder:"0",value:r[y]??"",onChange:A=>T(y,A.target.value),style:bt.rateInput}),n.jsx("span",{style:bt.perHr,children:"/hr"})]})]},y))})]})]})}const bt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},hero:{background:"linear-gradient(135deg,var(--accent-strong),var(--accent-2))",borderRadius:16,padding:"22px 24px",color:"#fff",marginBottom:16,textAlign:"center"},heroVal:{fontSize:38,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em"},heroSub:{fontSize:12.5,color:"var(--text-3)",marginTop:4},card:{background:"var(--surface)",borderRadius:16,padding:"18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},cardHint:{fontSize:12,color:"var(--text-3)",marginTop:-8,marginBottom:12},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},presetRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},preset:{border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:18,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},presetOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},dateRow:{display:"flex",alignItems:"flex-end",gap:10},dateField:{display:"flex",flexDirection:"column",gap:4,flex:1},dateLbl:{fontSize:11,color:"var(--text-2)",fontWeight:600},dateInput:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",outline:"none",width:"100%",boxSizing:"border-box"},dateArrow:{color:"var(--text-3)",paddingBottom:9},rows:{display:"flex",flexDirection:"column",gap:14},row:{},rowTop:{display:"flex",alignItems:"center",gap:8,marginBottom:6},dot:{width:11,height:11,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:14,fontWeight:600},rowCost:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},rowBarTrack:{height:8,background:"#F2F0EA",borderRadius:4,overflow:"hidden"},rowBar:{height:"100%",borderRadius:4,transition:"width 0.3s"},rowMeta:{fontSize:11.5,color:"var(--text-3)",marginTop:5,fontWeight:500},totalRow:{display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid var(--border)",paddingTop:12,marginTop:2,fontSize:14,fontWeight:700},totalVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},rateGrid:{display:"flex",flexDirection:"column",gap:10},rateRow:{display:"flex",alignItems:"center",gap:8},rateName:{flex:1,fontSize:14,fontWeight:600},rateInputWrap:{display:"flex",alignItems:"center",gap:3,border:"1px solid var(--border)",borderRadius:9,padding:"4px 10px",background:"var(--surface-2)"},rupeeSign:{fontSize:14,color:"var(--text-2)",fontWeight:600},rateInput:{border:"none",background:"none",outline:"none",width:64,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},perHr:{fontSize:12,color:"var(--text-3)",fontWeight:600}};function Bv({onAuthed:t}){const[e,r]=p.useState("login"),[o,s]=p.useState(""),[i,l]=p.useState(""),[a,d]=p.useState(""),[g,m]=p.useState(""),[v,f]=p.useState(!1),j=e==="register",k=async S=>{if(S.preventDefault(),m(""),!i.trim()||!a){m("Email and password are required.");return}if(j&&a.length<6){m("Password must be at least 6 characters.");return}f(!0);try{const T=j?await $.register({name:o,email:i,password:a}):await $.login({email:i,password:a});fh(T.token),t(T.user)}catch(T){m(T.message||"Something went wrong.")}finally{f(!1)}};return n.jsx("div",{style:Nt.page,children:n.jsxs("form",{style:Nt.card,onSubmit:k,children:[n.jsxs("div",{style:Nt.brand,children:[n.jsx("div",{style:Nt.logo,children:"B"}),n.jsx("span",{style:Nt.brandName,children:"Anvil"})]}),n.jsx("h1",{style:Nt.title,children:j?"Create your account":"Welcome back"}),n.jsx("p",{style:Nt.sub,children:j?"Start forging your days.":"Sign in to continue."}),j&&n.jsxs("label",{style:Nt.field,children:[n.jsx("span",{style:Nt.label,children:"Name"}),n.jsx("input",{value:o,onChange:S=>s(S.target.value),placeholder:"Your name",style:Nt.input,autoFocus:!0})]}),n.jsxs("label",{style:Nt.field,children:[n.jsx("span",{style:Nt.label,children:"Email"}),n.jsx("input",{type:"email",value:i,onChange:S=>l(S.target.value),placeholder:"you@example.com",style:Nt.input,autoFocus:!j})]}),n.jsxs("label",{style:Nt.field,children:[n.jsx("span",{style:Nt.label,children:"Password"}),n.jsx("input",{type:"password",value:a,onChange:S=>d(S.target.value),placeholder:"••••••••",style:Nt.input})]}),g&&n.jsx("div",{style:Nt.error,children:g}),n.jsx("button",{type:"submit",disabled:v,style:{...Nt.submit,...v?{opacity:.6}:{}},children:v?"Please wait…":j?"Create account":"Sign in"}),n.jsxs("div",{style:Nt.switch,children:[j?"Already have an account?":"New here?"," ",n.jsx("button",{type:"button",onClick:()=>{r(j?"login":"register"),m("")},style:Nt.link,children:j?"Sign in":"Create one"})]})]})})}const Nt={page:{minHeight:"100vh",display:"grid",placeItems:"center",background:"var(--bg)",fontFamily:"'Inter',system-ui,sans-serif",padding:20},card:{width:"100%",maxWidth:380,background:"var(--surface)",borderRadius:16,padding:"32px 28px",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",display:"flex",flexDirection:"column"},brand:{display:"flex",alignItems:"center",gap:9,marginBottom:20},logo:{width:32,height:32,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},brandName:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},title:{fontSize:22,fontWeight:700,margin:"0 0 4px",fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},sub:{fontSize:13.5,color:"var(--text-3)",margin:"0 0 22px"},field:{display:"flex",flexDirection:"column",gap:5,marginBottom:14},label:{fontSize:12,fontWeight:600,color:"var(--text-2)"},input:{border:"1px solid var(--border)",borderRadius:9,padding:"11px 12px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)"},error:{background:"rgba(194,83,107,0.10)",color:"#C2536B",fontSize:13,padding:"9px 12px",borderRadius:8,marginBottom:14,fontWeight:500},submit:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"12px",borderRadius:10,fontSize:14.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},switch:{fontSize:13,color:"var(--text-2)",textAlign:"center",marginTop:18},link:{border:"none",background:"none",color:"#3A7CA5",fontWeight:700,cursor:"pointer",fontFamily:"inherit",fontSize:13,padding:0}},ic=["Salary","Stocks","Business","Interest","Rent","Gift","Other"],lc=["Bills","EMI","Rent","Food","Shopping","Transport","Health","Entertainment","Education","Other"],Dv={Salary:"#4C9A6B",Stocks:"#3A7CA5",Business:"#C9A227",Interest:"#8268B0",Gift:"#C2773B",Bills:"#C2536B",EMI:"#A23E57",Food:"#E08E45",Shopping:"#8268B0",Transport:"#3A7CA5",Health:"#4C9A6B",Entertainment:"#C9A227",Education:"#5B7C99",Rent:"#5B8C5A",Other:"#9A968C"},qb=t=>Dv[t]||"#9A968C",$e="#3E9E6B",He="#D1556E",qn=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,bo=qn(new Date),Rv=[{id:"month",label:"This month"},{id:"last",label:"Last month"},{id:"year",label:"This year"},{id:"all",label:"All time"}];function Fv(t){const e=new Date;return t==="month"?[qn(new Date(e.getFullYear(),e.getMonth(),1)),bo]:t==="last"?[qn(new Date(e.getFullYear(),e.getMonth()-1,1)),qn(new Date(e.getFullYear(),e.getMonth(),0))]:t==="year"?[qn(new Date(e.getFullYear(),0,1)),bo]:["0000-01-01","9999-12-31"]}function Av(){const t=Zb(),[e,r]=p.useState("overview"),[o,s]=p.useState([]),[i,l]=p.useState(!1),a=p.useCallback(()=>$.getTxns().then(g=>{s(g),l(!0)}).catch(()=>l(!0)),[]);p.useEffect(()=>{a()},[a]);const d=g=>ei(g,t.code);return n.jsxs("div",{style:I.page,children:[n.jsxs("div",{style:I.head,children:[n.jsx("div",{style:I.eyebrow,children:"Anvil · Vault"}),n.jsx("h1",{style:I.h1,children:"Vault"}),n.jsx("div",{style:I.subhead,children:"Your money — what comes in, what goes out, and where it's headed."})]}),n.jsx("div",{style:I.tabs,children:[["overview","Overview",Of],["money","Money",bh],["calc","Calculators",Pf]].map(([g,m,v])=>n.jsxs("button",{onClick:()=>r(g),style:{...I.tab,...e===g?I.tabOn:{}},children:[n.jsx(v,{size:15})," ",m]},g))}),e==="overview"&&n.jsx(Wv,{txns:o,loaded:i,money:d,cur:t}),e==="money"&&n.jsx(_v,{txns:o,reload:a,money:d}),e==="calc"&&n.jsx(Lv,{money:d,cur:t})]})}function Wv({txns:t,loaded:e,money:r,cur:o}){const[s,i]=p.useState("month"),[l,a]=Fv(s),d=p.useMemo(()=>t.filter(S=>S.date>=l&&S.date<=a),[t,l,a]),g=d.filter(S=>S.kind==="income"),m=d.filter(S=>S.kind==="expense"),v=g.reduce((S,T)=>S+T.amount,0),f=m.reduce((S,T)=>S+T.amount,0),j=v-f,k=S=>{const T={};return S.forEach(b=>{T[b.category]=(T[b.category]||0)+b.amount}),Object.entries(T).map(([b,c])=>({category:b,amount:c})).sort((b,c)=>c.amount-b.amount)};return n.jsxs(n.Fragment,{children:[n.jsx("div",{style:I.presetRow,children:Rv.map(S=>n.jsx("button",{onClick:()=>i(S.id),style:{...I.preset,...s===S.id?I.presetOn:{}},children:S.label},S.id))}),n.jsxs("div",{style:I.sumGrid,children:[n.jsx(ol,{icon:n.jsx(ta,{size:16}),label:"Income",value:r(v),color:$e}),n.jsx(ol,{icon:n.jsx(ea,{size:16}),label:"Expenses",value:r(f),color:He}),n.jsx(ol,{icon:j>=0?n.jsx(Vb,{size:16}):n.jsx(Ub,{size:16}),label:"Net savings",value:r(j),color:j>=0?$e:He})]}),e?d.length===0?n.jsx("div",{style:I.card,children:n.jsxs("div",{style:I.muted,children:["No transactions in this period. Add some under the ",n.jsx("b",{children:"Money"})," tab."]})}):n.jsxs(n.Fragment,{children:[n.jsx(Mv,{totalIn:v,totalOut:f}),n.jsxs("div",{style:I.twoCol,children:[n.jsx(ac,{title:"Incoming",subtitle:"Where your money comes from",total:v,data:k(g),accent:$e,cur:o}),n.jsx(ac,{title:"Outgoing",subtitle:"Where your money goes",total:f,data:k(m),accent:He,cur:o})]})]}):n.jsx("div",{style:I.muted,children:"Loading…"})]})}function ol({icon:t,label:e,value:r,color:o}){return n.jsxs("div",{style:I.sumCard,children:[n.jsx("div",{style:{...I.sumIcon,color:o,background:o+"1A"},children:t}),n.jsx("div",{style:I.sumLabel,children:e}),n.jsx("div",{style:{...I.sumVal,color:o},children:r})]})}function ac({title:t,subtitle:e,total:r,data:o,accent:s,cur:i}){let l=0;const a=o.map(g=>{const m=r>0?l/r*100:0;l+=g.amount;const v=r>0?l/r*100:0;return{...g,start:m,end:v,color:qb(g.category),pct:r>0?g.amount/r*100:0}}),d=a.length?`conic-gradient(${a.map(g=>`${g.color} ${g.start}% ${g.end}%`).join(", ")})`:"var(--surface-2)";return n.jsxs("div",{style:I.card,children:[n.jsxs("div",{style:I.cardTitleRow,children:[n.jsxs("div",{children:[n.jsx("div",{style:{...I.cardTitle,color:s},children:t}),n.jsx("div",{style:I.cardSub,children:e})]}),n.jsx("div",{style:{...I.cardTotal,color:s},children:ei(r,i.code)})]}),o.length===0?n.jsx("div",{style:I.muted,children:"Nothing logged."}):n.jsxs("div",{style:I.pieWrap,children:[n.jsxs("div",{style:I.pieChart,children:[n.jsx("div",{style:{...I.pieDisc,background:d}}),n.jsxs("div",{style:I.pieHole,children:[n.jsx("span",{style:I.pieHoleVal,children:zv(r,i.code)}),n.jsx("span",{style:I.pieHoleLbl,children:"total"})]})]}),n.jsx("div",{style:I.pieLegend,children:a.map(g=>n.jsxs("div",{style:I.legendRow,children:[n.jsx("span",{style:{...I.dot,background:g.color}}),n.jsx("span",{style:I.legendName,children:g.category}),n.jsxs("span",{style:I.legendPct,children:[Math.round(g.pct),"%"]}),n.jsx("span",{style:I.legendAmt,children:ei(g.amount,i.code)})]},g.category))})]})]})}function Mv({totalIn:t,totalOut:e}){const r=t-e,o=t>0?r/t:0,s=t===0?0:Math.max(0,Math.min(100,Math.round(50+o*100)));let i,l,a;t===0?(i="No income logged",l="#9A968C",a="Add your income to see your financial health."):o>=.3?(i="Excellent",l="#3E9E6B",a="You're saving 30%+ of income — keep investing the surplus."):o>=.2?(i="Healthy",l="#4C9A6B",a="Solid savings rate. Consider automating a SIP with the surplus."):o>=.1?(i="Okay",l="#C9A227",a="Decent, but aim for 20%+. Trim your biggest expense category."):o>=0?(i="Tight",l="#C2773B",a="You're saving very little. Review recurring bills and EMIs."):(i="Overspending",l="#D1556E",a="You're spending more than you earn. Cut back to avoid debt.");const d=t>0?Math.min(100,Math.round(e/t*100)):0;return n.jsxs("div",{style:I.card,children:[n.jsxs("div",{style:I.cardTitleRow,children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx(Yf,{size:18,color:l}),n.jsxs("div",{children:[n.jsx("div",{style:I.cardTitle,children:"Financial health"}),n.jsx("div",{style:I.cardSub,children:"Based on your savings rate this period"})]})]}),n.jsxs("div",{style:{textAlign:"right"},children:[n.jsx("div",{style:{...I.healthScore,color:l},children:t===0?"—":s}),n.jsx("div",{style:{...I.healthStatus,color:l},children:i})]})]}),n.jsx("div",{style:I.gaugeTrack,children:n.jsx("div",{style:{...I.gaugeFill,width:`${t===0?0:s}%`,background:l}})}),n.jsxs("div",{style:I.healthStats,children:[n.jsxs("div",{style:I.healthStat,children:[n.jsxs("span",{style:I.healthStatV,children:[t>0?Math.round(o*100):0,"%"]}),n.jsx("span",{style:I.healthStatL,children:"Savings rate"})]}),n.jsxs("div",{style:I.healthStat,children:[n.jsxs("span",{style:I.healthStatV,children:[d,"%"]}),n.jsx("span",{style:I.healthStatL,children:"of income spent"})]})]}),n.jsx("div",{style:{...I.tip,borderColor:l+"55",background:l+"12",color:l},children:a})]})}function _v({txns:t,reload:e,money:r}){const[o,s]=p.useState("expense"),[i,l]=p.useState(""),[a,d]=p.useState("Bills"),[g,m]=p.useState(bo),[v,f]=p.useState(""),[j,k]=p.useState(null),{deleteItem:S,toasts:T,handleUndo:b,handleDismiss:c}=Wn($.deleteTxn,$.restoreTxn,e),u=o==="income"?ic:lc,x=L=>{s(L),d(L==="income"?"Salary":"Bills")},y=async()=>{const L=parseFloat(i);!L||L<=0||(await $.createTxn({kind:o,category:a,amount:L,note:v.trim(),date:g}),l(""),f(""),e())},A=L=>k({id:L.id,kind:L.kind,amount:String(L.amount),category:L.category,date:L.date,note:L.note||""}),_=(j==null?void 0:j.kind)==="income"?ic:lc,D=L=>k(C=>({...C,kind:L,category:_.includes(C.category)?C.category:L==="income"?"Salary":"Bills"})),E=async()=>{const L=parseFloat(j.amount);!L||L<=0||(await $.updateTxn(j.id,{kind:j.kind,category:j.category,amount:L,note:j.note.trim(),date:j.date}),k(null),e())},M=p.useMemo(()=>{const L={};return t.forEach(C=>{(L[C.date]=L[C.date]||[]).push(C)}),Object.entries(L).sort((C,U)=>U[0].localeCompare(C[0]))},[t]),et=L=>new Date(L+"T00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:I.card,children:[n.jsx("div",{style:I.cardTitle,children:"Add transaction"}),n.jsxs("div",{style:I.kindToggle,children:[n.jsxs("button",{onClick:()=>x("expense"),style:{...I.kindBtn,...o==="expense"?{background:He,color:"#fff",borderColor:He}:{}},children:[n.jsx(ea,{size:15})," Expense"]}),n.jsxs("button",{onClick:()=>x("income"),style:{...I.kindBtn,...o==="income"?{background:$e,color:"#fff",borderColor:$e}:{}},children:[n.jsx(ta,{size:15})," Income"]})]}),n.jsxs("div",{style:I.formGrid,children:[n.jsx("input",{type:"number",inputMode:"decimal",placeholder:"Amount",value:i,onChange:L=>l(L.target.value),onKeyDown:L=>L.key==="Enter"&&y(),style:I.input,autoFocus:!0}),n.jsx("select",{value:a,onChange:L=>d(L.target.value),style:I.input,children:u.map(L=>n.jsx("option",{children:L},L))}),n.jsx("input",{type:"date",value:g,max:bo,onChange:L=>m(L.target.value),style:I.input})]}),n.jsx("input",{placeholder:"Note (optional)",value:v,onChange:L=>f(L.target.value),onKeyDown:L=>L.key==="Enter"&&y(),style:{...I.input,marginTop:8}}),n.jsxs("button",{onClick:y,style:{...I.addBtn,background:o==="income"?$e:He},children:[n.jsx(oe,{size:15})," Add ",o]})]}),n.jsxs("div",{style:I.card,children:[n.jsx("div",{style:I.cardTitle,children:"History"}),M.length===0?n.jsx("div",{style:I.muted,children:"No transactions yet."}):n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:M.map(([L,C])=>n.jsxs("div",{children:[n.jsx("div",{style:I.dateHead,children:et(L)}),C.map(U=>(j==null?void 0:j.id)===U.id?n.jsxs("div",{style:I.editTxn,children:[n.jsxs("div",{style:I.kindToggle,children:[n.jsxs("button",{onClick:()=>D("expense"),style:{...I.kindBtn,...j.kind==="expense"?{background:He,color:"#fff",borderColor:He}:{}},children:[n.jsx(ea,{size:14})," Expense"]}),n.jsxs("button",{onClick:()=>D("income"),style:{...I.kindBtn,...j.kind==="income"?{background:$e,color:"#fff",borderColor:$e}:{}},children:[n.jsx(ta,{size:14})," Income"]})]}),n.jsxs("div",{style:I.formGrid,children:[n.jsx("input",{type:"number",inputMode:"decimal",value:j.amount,onChange:ut=>k({...j,amount:ut.target.value}),style:I.input}),n.jsx("select",{value:j.category,onChange:ut=>k({...j,category:ut.target.value}),style:I.input,children:_.map(ut=>n.jsx("option",{children:ut},ut))}),n.jsx("input",{type:"date",value:j.date,max:bo,onChange:ut=>k({...j,date:ut.target.value}),style:I.input})]}),n.jsx("input",{placeholder:"Note (optional)",value:j.note,onChange:ut=>k({...j,note:ut.target.value}),onKeyDown:ut=>ut.key==="Enter"&&E(),style:{...I.input,marginTop:8}}),n.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[n.jsxs("button",{onClick:()=>k(null),style:I.editCancel,children:[n.jsx(xt,{size:14})," Cancel"]}),n.jsxs("button",{onClick:E,style:{...I.addBtn,marginTop:0,flex:1,background:j.kind==="income"?$e:He},children:[n.jsx(jt,{size:15})," Save"]})]})]},U.id):n.jsxs("div",{style:I.txnRow,children:[n.jsx("span",{style:{...I.txnDot,background:qb(U.category)}}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:I.txnCat,children:U.category}),U.note&&n.jsx("div",{style:I.txnNote,children:U.note})]}),n.jsxs("span",{style:{...I.txnAmt,color:U.kind==="income"?$e:He},children:[U.kind==="income"?"+":"−",r(U.amount)]}),n.jsx("button",{onClick:()=>A(U),style:I.delBtn,children:n.jsx(ve,{size:13})}),n.jsx("button",{onClick:()=>S(U.id,U.category),style:I.delBtn,children:n.jsx(xt,{size:14})})]},U.id))]},L))})]}),n.jsx(Mn,{toasts:T,onUndo:b,onDismiss:c})]})}function Lv({money:t,cur:e}){return n.jsxs(n.Fragment,{children:[n.jsx(Pv,{money:t,cur:e}),n.jsx(Ov,{money:t,cur:e})]})}function Lr({label:t,value:e,set:r,min:o,max:s,step:i,suffix:l}){return n.jsxs("div",{style:I.field,children:[n.jsxs("div",{style:I.fieldTop,children:[n.jsx("span",{style:I.fieldLabel,children:t}),n.jsxs("div",{style:I.fieldInputWrap,children:[n.jsx("input",{type:"number",value:e,onChange:a=>r(a.target.value),style:I.fieldInput}),l&&n.jsx("span",{style:I.fieldSuffix,children:l})]})]}),n.jsx("input",{type:"range",min:o,max:s,step:i,value:e,onChange:a=>r(a.target.value),style:I.range})]})}function Pv({money:t,cur:e}){const[r,o]=p.useState(3e4),[s,i]=p.useState(12),[l,a]=p.useState(15),{invested:d,futureValue:g,gains:m,yearly:v}=p.useMemo(()=>{const j=Math.max(0,parseFloat(r)||0),k=Math.max(0,parseFloat(s)||0),S=Math.max(0,Math.min(60,parseInt(l)||0)),T=k/12/100,b=y=>y<=0?0:T===0?j*y:j*((Math.pow(1+T,y)-1)/T)*(1+T),c=[];for(let y=1;y<=S;y++)c.push({year:y,invested:j*12*y,value:b(y*12)});const u=b(S*12),x=j*12*S;return{invested:x,futureValue:u,gains:u-x,yearly:c}},[r,s,l]),f=Math.max(1,...v.map(j=>j.value));return n.jsxs("div",{style:I.card,children:[n.jsx("div",{style:I.cardTitleRow,children:n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx(oh,{size:18,color:"#3A7CA5"}),n.jsxs("div",{children:[n.jsx("div",{style:I.cardTitle,children:"SIP projection"}),n.jsx("div",{style:I.cardSub,children:"Mutual fund / SIP future value"})]})]})}),n.jsx(Lr,{label:"Monthly investment",value:r,set:o,min:500,max:5e5,step:500,suffix:e.symbol}),n.jsx(Lr,{label:"Expected return (p.a.)",value:s,set:i,min:1,max:30,step:.5,suffix:"%"}),n.jsx(Lr,{label:"Time period",value:l,set:a,min:1,max:40,step:1,suffix:"yrs"}),n.jsxs("div",{style:I.resultHero,children:[n.jsx("div",{style:I.resultLabel,children:"Projected wealth"}),n.jsx("div",{style:{...I.resultVal,color:"#3A7CA5"},children:t(g)})]}),n.jsxs("div",{style:I.splitRow,children:[n.jsxs("div",{style:I.splitItem,children:[n.jsx("span",{style:I.splitV,children:t(d)}),n.jsx("span",{style:I.splitL,children:"Invested"})]}),n.jsxs("div",{style:I.splitItem,children:[n.jsx("span",{style:{...I.splitV,color:"#3E9E6B"},children:t(m)}),n.jsx("span",{style:I.splitL,children:"Est. returns"})]})]}),v.length>0&&n.jsxs("div",{style:I.chartWrap,children:[n.jsx("div",{style:I.chartBars,children:v.map(j=>n.jsx("div",{style:I.chartCol,title:`Year ${j.year}: ${t(j.value)}`,children:n.jsx("div",{style:{...I.chartStack,height:`${j.value/f*100}%`},children:n.jsx("div",{style:{...I.chartGain,height:`${(1-j.invested/j.value)*100}%`}})})},j.year))}),n.jsxs("div",{style:I.chartAxis,children:[n.jsx("span",{children:"Yr 1"}),n.jsxs("span",{style:{marginLeft:"auto"},children:["Yr ",v.length]})]}),n.jsxs("div",{style:I.legend,children:[n.jsxs("span",{style:I.legendItem,children:[n.jsx("span",{style:{...I.legendDot,background:"#9DBFD6"}})," Invested"]}),n.jsxs("span",{style:I.legendItem,children:[n.jsx("span",{style:{...I.legendDot,background:"#3E9E6B"}})," Returns"]})]})]})]})}function dc(t,e,r,o=0,s=0){let i=Math.max(0,t-s),l=0,a=0,d=s;const g=1200;for(;i>.01&&a<g;){const m=i*e;let v=r+o,f=v-m;if(f<=0)return{months:1/0,totalInterest:1/0,totalPaid:1/0};f>i&&(f=i,v=i+m),i-=f,l+=m,d+=v,a++}return{months:a,totalInterest:l,totalPaid:d}}const gc=t=>{if(!isFinite(t))return"—";const e=Math.floor(t/12),r=t%12;return(e?`${e}y `:"")+`${r}m`},Nv=t=>{if(!isFinite(t))return"—";const e=new Date;return e.setMonth(e.getMonth()+t),e.toLocaleDateString("en-US",{month:"short",year:"numeric"})};function Ov({money:t,cur:e}){const[r,o]=p.useState(2e6),[s,i]=p.useState(9),[l,a]=p.useState(20),[d,g]=p.useState(5e5),[m,v]=p.useState("once"),[f,j]=p.useState("tenure"),k=p.useMemo(()=>{const u=Math.max(0,parseFloat(r)||0),x=Math.max(0,parseFloat(s)||0)/12/100,y=Math.max(1,Math.round((parseFloat(l)||0)*12)),A=x===0?u/y:u*x*Math.pow(1+x,y)/(Math.pow(1+x,y)-1);return{P:u,i:x,n:y,emi:A,totalPay:A*y,totalInterest:A*y-u}},[r,s,l]),S=m==="monthly"?"tenure":f,T=p.useMemo(()=>{const{P:u,i:x,n:y,emi:A,totalInterest:_}=k,D=Math.max(0,parseFloat(d)||0);if(D<=0)return null;let E=A,M=y,et=_,L=k.totalPay;if(m==="once"&&S==="emi"){const C=Math.max(0,u-D);E=x===0?C/y:C*x*Math.pow(1+x,y)/(Math.pow(1+x,y)-1),M=y,et=E*y-C,L=D+E*y}else if(m==="once"){const C=dc(u,x,A,0,D);M=C.months,et=C.totalInterest,L=C.totalPaid}else{const C=dc(u,x,A,D,0);M=C.months,et=C.totalInterest,L=C.totalPaid}return{newEMI:E,newMonths:M,newInterest:et,totalPaid:L,interestSaved:Math.max(0,_-et),monthsSaved:Math.max(0,y-(isFinite(M)?M:y))}},[k,d,m,S]),b=k.totalPay>0?k.P/k.totalPay*100:0,c=m==="once"?Math.max(1e5,Math.round(k.P)):Math.max(5e4,Math.round(k.emi*3));return n.jsxs("div",{style:I.card,children:[n.jsx("div",{style:I.cardTitleRow,children:n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx(Lb,{size:18,color:"#C2536B"}),n.jsxs("div",{children:[n.jsx("div",{style:I.cardTitle,children:"EMI calculator"}),n.jsx("div",{style:I.cardSub,children:"Loan / mortgage monthly payment"})]})]})}),n.jsx(Lr,{label:"Loan amount",value:r,set:o,min:5e4,max:5e7,step:5e4,suffix:e.symbol}),n.jsx(Lr,{label:"Interest rate (p.a.)",value:s,set:i,min:1,max:24,step:.1,suffix:"%"}),n.jsx(Lr,{label:"Tenure",value:l,set:a,min:1,max:30,step:1,suffix:"yrs"}),n.jsxs("div",{style:I.resultHero,children:[n.jsx("div",{style:I.resultLabel,children:"Monthly EMI"}),n.jsx("div",{style:{...I.resultVal,color:"#C2536B"},children:t(k.emi)})]}),n.jsxs("div",{style:I.emiSplitTrack,children:[n.jsx("div",{style:{width:`${b}%`,background:"#5B7C99",height:"100%"}}),n.jsx("div",{style:{width:`${100-b}%`,background:"#C2536B",height:"100%"}})]}),n.jsxs("div",{style:I.splitRow,children:[n.jsxs("div",{style:I.splitItem,children:[n.jsx("span",{style:{...I.splitV,color:"#5B7C99"},children:t(k.P)}),n.jsx("span",{style:I.splitL,children:"Principal"})]}),n.jsxs("div",{style:I.splitItem,children:[n.jsx("span",{style:{...I.splitV,color:"#C2536B"},children:t(k.totalInterest)}),n.jsx("span",{style:I.splitL,children:"Total interest"})]}),n.jsxs("div",{style:I.splitItem,children:[n.jsx("span",{style:I.splitV,children:t(k.totalPay)}),n.jsx("span",{style:I.splitL,children:"Total payable"})]})]}),n.jsx("div",{style:I.subDivider}),n.jsx("div",{style:I.subTitle,children:"Prepayment planner"}),n.jsx("div",{style:I.cardSub,children:"See what an extra payment does to your loan."}),n.jsx("div",{style:{marginTop:14},children:n.jsx(Lr,{label:"Prepayment amount",value:d,set:g,min:0,max:c,step:m==="once"?25e3:1e3,suffix:e.symbol})}),n.jsxs("div",{style:I.segGroup,children:[n.jsx("span",{style:I.segLbl,children:"Type"}),n.jsxs("div",{style:I.segRow,children:[n.jsx(us,{label:"One-time",on:m==="once",onClick:()=>v("once")}),n.jsx(us,{label:"Every month",on:m==="monthly",onClick:()=>v("monthly")})]})]}),n.jsxs("div",{style:I.segGroup,children:[n.jsx("span",{style:I.segLbl,children:"Strategy"}),n.jsxs("div",{style:I.segRow,children:[n.jsx(us,{label:"Reduce tenure",on:S==="tenure",onClick:()=>j("tenure")}),n.jsx(us,{label:"Reduce EMI",on:S==="emi",disabled:m==="monthly",onClick:()=>j("emi")})]})]}),m==="monthly"&&n.jsx("div",{style:I.note,children:"An extra monthly payment always shortens the tenure. Switch to a one-time prepayment to reduce your EMI instead."}),T?n.jsxs("div",{style:I.cmpCard,children:[n.jsxs("div",{style:I.cmpRow,children:[n.jsx("span",{style:I.cmpLbl,children:"New EMI"}),n.jsxs("span",{style:I.cmpVal,children:[t(T.newEMI),T.newEMI<k.emi-1&&n.jsxs("span",{style:I.cmpWas,children:[" was ",t(k.emi)]})]})]}),n.jsxs("div",{style:I.cmpRow,children:[n.jsx("span",{style:I.cmpLbl,children:"New tenure"}),n.jsxs("span",{style:I.cmpVal,children:[gc(T.newMonths)," ",n.jsxs("span",{style:I.cmpWas,children:["· paid off ",Nv(T.newMonths)]})]})]}),n.jsxs("div",{style:I.cmpRow,children:[n.jsx("span",{style:I.cmpLbl,children:"Total interest"}),n.jsx("span",{style:I.cmpVal,children:t(T.newInterest)})]}),n.jsxs("div",{style:I.cmpRow,children:[n.jsx("span",{style:I.cmpLbl,children:"Total payable"}),n.jsx("span",{style:I.cmpVal,children:t(T.totalPaid)})]}),n.jsxs("div",{style:I.saveRow,children:["You save ",t(T.interestSaved)," in interest",T.monthsSaved>0?` · ${gc(T.monthsSaved)} sooner`:""]})]}):n.jsx("div",{style:I.muted,children:"Enter a prepayment amount to see the impact."})]})}function us({label:t,on:e,onClick:r,disabled:o}){return n.jsx("button",{onClick:o?void 0:r,disabled:o,style:{...I.seg,...e?I.segOn:{},...o?I.segDisabled:{}},children:t})}const I={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},tabs:{display:"flex",gap:7,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},presetRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},preset:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},presetOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},sumGrid:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:16},sumCard:{background:"var(--surface)",borderRadius:14,padding:"14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},sumIcon:{width:30,height:30,borderRadius:9,display:"grid",placeItems:"center",marginBottom:8},sumLabel:{fontSize:11.5,color:"var(--text-3)",fontWeight:600},sumVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2,letterSpacing:"-0.01em",wordBreak:"break-word"},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},cardTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},twoCol:{display:"grid",gridTemplateColumns:"1fr",gap:0},dot:{width:10,height:10,borderRadius:3,flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:160,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},healthScore:{fontSize:32,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1},healthStatus:{fontSize:12.5,fontWeight:700,marginTop:2},gaugeTrack:{height:10,background:"var(--surface-2)",borderRadius:6,overflow:"hidden",marginBottom:14},gaugeFill:{height:"100%",borderRadius:6,transition:"width 0.4s"},healthStats:{display:"flex",gap:24,marginBottom:12},healthStat:{display:"flex",flexDirection:"column"},healthStatV:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},healthStatL:{fontSize:11,color:"var(--text-3)",fontWeight:600},tip:{fontSize:12.5,lineHeight:1.5,padding:"10px 12px",borderRadius:10,border:"1px solid",fontWeight:500},kindToggle:{display:"flex",gap:8,marginBottom:12},kindBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},formGrid:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},input:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},addBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},dateHead:{fontSize:11,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8},txnRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},txnDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},txnCat:{fontSize:13.5,fontWeight:600},txnNote:{fontSize:11.5,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},txnAmt:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},editTxn:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:12,margin:"6px 0"},editCancel:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},field:{marginBottom:16},fieldTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},fieldLabel:{fontSize:13,fontWeight:600,color:"var(--text-2)"},fieldInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:8,padding:"5px 10px",background:"var(--surface-2)"},fieldInput:{border:"none",background:"none",outline:"none",width:90,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},fieldSuffix:{fontSize:12,color:"var(--text-3)",fontWeight:600},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},resultHero:{textAlign:"center",padding:"14px 0 6px"},resultLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},resultVal:{fontSize:34,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,wordBreak:"break-word"},splitRow:{display:"flex",gap:10,marginTop:10},splitItem:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",background:"var(--surface-2)",borderRadius:10,padding:"10px 6px"},splitV:{fontSize:14.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",wordBreak:"break-word"},splitL:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:2},chartWrap:{marginTop:18},chartBars:{display:"flex",alignItems:"flex-end",gap:3,height:90},chartCol:{flex:1,height:"100%",display:"flex",alignItems:"flex-end"},chartStack:{width:"100%",background:"#9DBFD6",borderRadius:"3px 3px 0 0",minHeight:2,position:"relative",display:"flex",flexDirection:"column",justifyContent:"flex-start"},chartGain:{width:"100%",background:"#3E9E6B",borderRadius:"3px 3px 0 0"},chartAxis:{display:"flex",fontSize:10,color:"var(--text-3)",fontWeight:600,marginTop:6},legend:{display:"flex",gap:16,justifyContent:"center",marginTop:10},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)",fontWeight:600},legendDot:{width:10,height:10,borderRadius:3},emiSplitTrack:{display:"flex",height:12,borderRadius:6,overflow:"hidden",marginTop:16,border:"1px solid var(--border)"},subDivider:{height:1,background:"var(--border)",margin:"20px 0 14px"},subTitle:{fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},segGroup:{marginBottom:12},segLbl:{fontSize:12,fontWeight:600,color:"var(--text-3)",display:"block",marginBottom:6},segRow:{display:"flex",gap:8},seg:{flex:1,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},segOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},segDisabled:{opacity:.4,cursor:"not-allowed"},note:{fontSize:12,lineHeight:1.5,color:"var(--text-3)",background:"var(--surface-2)",borderRadius:9,padding:"9px 11px",marginBottom:12},cmpCard:{background:"var(--surface-2)",borderRadius:12,padding:"12px 14px",marginTop:4},cmpRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"6px 0",borderBottom:"1px solid var(--border)",gap:10},cmpLbl:{fontSize:12.5,color:"var(--text-2)",fontWeight:600},cmpVal:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",textAlign:"right"},cmpWas:{fontSize:11,color:"var(--text-3)",fontWeight:500,fontFamily:"'Inter',system-ui,sans-serif"},saveRow:{marginTop:12,background:"rgba(62,158,107,0.12)",color:"#3E9E6B",borderRadius:9,padding:"10px 12px",fontSize:13,fontWeight:700,textAlign:"center"}},ua=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],sl={Monday:"Mon",Tuesday:"Tue",Wednesday:"Wed",Thursday:"Thu",Friday:"Fri",Saturday:"Sat",Sunday:"Sun"},to=()=>ua[(new Date().getDay()+6)%7],Qe={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},cc=Object.keys(Qe),il=21,uc="kickstart_tags",ll=t=>{if(!t)return"";const e=t.trim();if(/^[A-Za-z0-9_-]{11}$/.test(e))return e;const r=e.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return r?r[1]:""},bc=t=>{if(!t||!String(t).trim())return null;const e=String(t).split(":").map(r=>parseInt(r.trim(),10));return e.some(r=>isNaN(r)||r<0)?null:e.reduce((r,o)=>r*60+o,0)},bs=t=>{if(t==null)return"";const e=Math.max(0,t|0);return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`},$v=t=>`https://www.youtube.com/embed/${t.youtube_id}?start=${t.start_sec||0}`+(t.end_sec?`&end=${t.end_sec}`:"")+"&autoplay=1&rel=0",Hv=()=>({id:null,url:"",title:"",start:"",end:"",days:[to()],pillars:[],customs:[]});function Gv(){const[t,e]=p.useState([]),[r,o]=p.useState([]),[s,i]=p.useState(!1),[l,a]=p.useState({type:"day",value:to()}),[d,g]=p.useState(null),[m,v]=p.useState(null),[f,j]=p.useState(""),k=p.useCallback(async()=>{try{const[C,U]=await Promise.all([$.getKickstart(),$.getSetting(uc)]);e(C),o(Array.isArray(U==null?void 0:U.value)?U.value:[])}catch{}i(!0)},[]);p.useEffect(()=>{k()},[k]);const{deleteItem:S,toasts:T,handleUndo:b,handleDismiss:c}=Wn($.deleteKickstart,$.restoreKickstart,k),u=C=>{o(C),$.setSetting(uc,C).catch(()=>{})},x=()=>{const C=f.trim();!C||r.length>=il||r.includes(C)||(u([...r,C]),g(U=>U&&!U.customs.includes(C)?{...U,customs:[...U.customs,C]}:U),j(""))},y=C=>u(r.filter(U=>U!==C)),A=(C,U)=>g(ut=>({...ut,[C]:ut[C].includes(U)?ut[C].filter(q=>q!==U):[...ut[C],U]})),_=C=>g({id:C.id,url:`https://youtu.be/${C.youtube_id}`,title:C.title,start:bs(C.start_sec),end:C.end_sec?bs(C.end_sec):"",days:[...C.days],pillars:[...C.pillars],customs:[...C.customs]}),D=async()=>{const C=ll(d.url);if(!C||d.days.length===0||!d.title.trim())return;const U={youtube_id:C,title:d.title.trim(),start_sec:bc(d.start)||0,end_sec:bc(d.end),days:d.days,pillars:d.pillars,customs:d.customs};d.id?await $.updateKickstart(d.id,U):await $.createKickstart(U),g(null),k()},E=p.useMemo(()=>t.filter(C=>l.type==="all"?!0:l.type==="day"?C.days.includes(l.value):l.type==="pillar"?C.pillars.includes(l.value):l.type==="custom"?C.customs.includes(l.value):!0),[t,l]),M=(C,U)=>l.type===C&&l.value===U,et=d?[!ll(d.url)&&"a valid YouTube link",!d.title.trim()&&"a title",d.days.length===0&&"at least one day"].filter(Boolean):[],L=!!d&&et.length===0;return n.jsxs("div",{style:K.page,children:[n.jsxs("div",{style:K.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:K.eyebrow,children:"Anvil · Kickstart"}),n.jsx("h1",{style:K.h1,children:"Kickstart"}),n.jsxs("div",{style:K.subhead,children:["Your motivation hub — the right push for ",to(),"."]})]}),!d&&n.jsxs("button",{onClick:()=>g(Hv()),style:K.addBtn,children:[n.jsx(oe,{size:15})," Add video"]})]}),d&&n.jsxs("div",{style:K.card,children:[n.jsx("div",{style:K.cardTitle,children:d.id?"Edit video":"Add video"}),n.jsx("input",{placeholder:"YouTube link (or video ID)",value:d.url,onChange:C=>g({...d,url:C.target.value}),style:K.input,autoFocus:!0}),d.url&&!ll(d.url)&&n.jsx("div",{style:K.warn,children:"Couldn't find a YouTube video ID in that link."}),n.jsx("input",{placeholder:"Title (required)",value:d.title,onChange:C=>g({...d,title:C.target.value}),style:{...K.input,marginTop:8}}),n.jsxs("div",{style:K.trimRow,children:[n.jsx(lh,{size:15,color:"var(--text-3)"}),n.jsxs("label",{style:K.trimField,children:[n.jsx("span",{style:K.trimLbl,children:"Start"}),n.jsx("input",{placeholder:"0:30",value:d.start,onChange:C=>g({...d,start:C.target.value}),style:K.trimInput})]}),n.jsx("span",{style:K.trimArrow,children:"→"}),n.jsxs("label",{style:K.trimField,children:[n.jsx("span",{style:K.trimLbl,children:"End"}),n.jsx("input",{placeholder:"end (optional)",value:d.end,onChange:C=>g({...d,end:C.target.value}),style:K.trimInput})]})]}),n.jsx("div",{style:K.hint,children:"Only this trimmed part plays. Use m:ss (e.g. 1:30). Leave End blank to play to the end."}),n.jsxs("div",{style:K.tagBlock,children:[n.jsxs("div",{style:K.tagLabel,children:["Days ",n.jsx("span",{style:K.req,children:"required"})]}),n.jsx("div",{style:K.chipRow,children:ua.map(C=>n.jsx("button",{onClick:()=>A("days",C),style:{...K.chip,...d.days.includes(C)?K.chipOnDark:{}},children:sl[C]},C))})]}),n.jsxs("div",{style:K.tagBlock,children:[n.jsxs("div",{style:K.tagLabel,children:["Pillars ",n.jsx("span",{style:K.opt,children:"optional"})]}),n.jsx("div",{style:K.chipRow,children:cc.map(C=>{const U=d.pillars.includes(C);return n.jsxs("button",{onClick:()=>A("pillars",C),style:{...K.chip,...U?{background:Qe[C],color:"#fff",borderColor:Qe[C]}:{}},children:[n.jsx("span",{style:{...K.dot,background:U?"#fff":Qe[C]}}),C]},C)})})]}),n.jsxs("div",{style:K.tagBlock,children:[n.jsxs("div",{style:K.tagLabel,children:["Custom tags ",n.jsxs("span",{style:K.opt,children:["optional · ",r.length,"/",il]})]}),n.jsxs("div",{style:K.chipRow,children:[r.map(C=>n.jsxs("span",{style:{...K.chip,...d.customs.includes(C)?K.chipOnAccent:{},paddingRight:4},children:[n.jsx("button",{onClick:()=>A("customs",C),style:K.chipInner,children:C}),n.jsx("button",{onClick:()=>y(C),style:K.chipX,title:"Delete tag",children:n.jsx(xt,{size:11})})]},C)),r.length===0&&n.jsx("span",{style:K.muted,children:"No custom tags yet."})]}),r.length<il&&n.jsxs("div",{style:K.newTagRow,children:[n.jsx("input",{placeholder:"New custom tag…",value:f,onChange:C=>j(C.target.value),onKeyDown:C=>C.key==="Enter"&&x(),style:{...K.input,padding:"7px 10px"}}),n.jsx("button",{onClick:x,style:K.smallBtn,children:n.jsx(oe,{size:14})})]})]}),!L&&n.jsxs("div",{style:K.warn,children:["Add ",et.join(", ")," to save."]}),n.jsxs("div",{style:K.formActions,children:[n.jsxs("button",{onClick:()=>g(null),style:K.cancelBtn,children:[n.jsx(xt,{size:14})," Cancel"]}),n.jsxs("button",{onClick:D,disabled:!L,style:{...K.saveBtn,...L?{}:K.saveDisabled},children:[n.jsx(jt,{size:15})," ",d.id?"Save":"Add video"]})]})]}),n.jsxs("div",{style:K.filterCard,children:[n.jsx("button",{onClick:()=>a({type:"all"}),style:{...K.fChip,...l.type==="all"?K.fChipOnDark:{}},children:"All"}),n.jsx("span",{style:K.fDivider}),ua.map(C=>n.jsxs("button",{onClick:()=>a({type:"day",value:C}),style:{...K.fChip,...M("day",C)?K.fChipOnDark:{},...C===to()?K.fToday:{}},children:[sl[C],C===to()?" ·":""]},C)),n.jsx("span",{style:K.fDivider}),cc.map(C=>n.jsxs("button",{onClick:()=>a({type:"pillar",value:C}),style:{...K.fChip,...M("pillar",C)?{background:Qe[C],color:"#fff",borderColor:Qe[C]}:{}},children:[n.jsx("span",{style:{...K.dot,background:M("pillar",C)?"#fff":Qe[C]}}),C]},C)),r.length>0&&n.jsx("span",{style:K.fDivider}),r.map(C=>n.jsxs("button",{onClick:()=>a({type:"custom",value:C}),style:{...K.fChip,...M("custom",C)?K.fChipOnAccent:{}},children:[n.jsx(gh,{size:11})," ",C]},C))]}),s?E.length===0?n.jsx("div",{style:K.empty,children:t.length===0?"No videos yet — add your first motivation clip.":"No videos for this tag."}):n.jsx("div",{style:K.grid,children:E.map(C=>n.jsxs("div",{style:K.videoCard,children:[n.jsx("div",{style:K.thumbWrap,children:m===C.id?n.jsx("iframe",{src:$v(C),title:C.title||C.youtube_id,style:K.iframe,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):n.jsxs("button",{onClick:()=>v(C.id),style:K.thumbBtn,children:[n.jsx("img",{src:`https://img.youtube.com/vi/${C.youtube_id}/hqdefault.jpg`,alt:"",style:K.thumb}),n.jsx("span",{style:K.playOverlay,children:n.jsx(sh,{size:22,color:"#fff",fill:"#fff"})}),n.jsxs("span",{style:K.trimBadge,children:[bs(C.start_sec),C.end_sec?` – ${bs(C.end_sec)}`:"+"]})]})}),n.jsxs("div",{style:K.videoBody,children:[n.jsx("div",{style:K.videoTitle,children:C.title||"Untitled clip"}),n.jsxs("div",{style:K.tagWrap,children:[C.days.map(U=>n.jsx("span",{style:K.dayTag,children:sl[U]},U)),C.pillars.map(U=>n.jsx("span",{style:{...K.pillTag,color:Qe[U]||"var(--text-2)",borderColor:Qe[U]||"var(--border)"},children:U},U)),C.customs.map(U=>n.jsx("span",{style:K.customTag,children:U},U))]}),n.jsxs("div",{style:K.cardActions,children:[n.jsx("button",{onClick:()=>_(C),style:K.iconBtn,title:"Edit",children:n.jsx(ve,{size:13})}),n.jsx("button",{onClick:()=>S(C.id,C.title||"video"),style:K.iconBtn,title:"Delete",children:n.jsx(xt,{size:14})})]})]})]},C.id))}):n.jsx("div",{style:K.muted,children:"Loading…"}),n.jsx(Mn,{toasts:T,onUndo:b,onDismiss:c})]})}const K={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:1e3,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},warn:{fontSize:11.5,color:"#C2773B",marginTop:5,fontWeight:600},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:6,lineHeight:1.4},trimRow:{display:"flex",alignItems:"flex-end",gap:10,marginTop:10},trimField:{display:"flex",flexDirection:"column",gap:4,flex:1},trimLbl:{fontSize:11,color:"var(--text-2)",fontWeight:600},trimInput:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},trimArrow:{color:"var(--text-3)",paddingBottom:9},tagBlock:{marginTop:14},tagLabel:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},req:{fontSize:10,fontWeight:700,color:"#C2536B",textTransform:"uppercase",marginLeft:6},opt:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",marginLeft:6},chipRow:{display:"flex",gap:6,flexWrap:"wrap"},chip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},chipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},chipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},chipInner:{border:"none",background:"none",color:"inherit",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,padding:0},chipX:{border:"none",background:"rgba(0,0,0,0.12)",color:"inherit",cursor:"pointer",display:"grid",placeItems:"center",borderRadius:"50%",width:16,height:16,padding:0},newTagRow:{display:"flex",gap:6,marginTop:8,maxWidth:280},smallBtn:{border:"none",background:"var(--accent)",color:"#fff",width:34,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},dot:{width:8,height:8,borderRadius:"50%",flexShrink:0,display:"inline-block"},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"var(--accent)",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},filterCard:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:12,marginBottom:18},fChip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},fChipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},fChipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},fToday:{borderColor:"var(--accent)",borderWidth:2},fDivider:{width:1,alignSelf:"stretch",background:"var(--border)",margin:"0 2px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:14},videoCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 9",background:"#000"},thumbBtn:{border:"none",padding:0,margin:0,cursor:"pointer",width:"100%",height:"100%",position:"relative",display:"block",background:"#000"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center",background:"rgba(0,0,0,0.28)"},trimBadge:{position:"absolute",bottom:8,right:8,background:"rgba(0,0,0,0.75)",color:"#fff",fontSize:11,fontWeight:700,padding:"2px 7px",borderRadius:6,fontFamily:"'Fraunces',Georgia,serif"},iframe:{width:"100%",height:"100%",border:"none",display:"block"},videoBody:{padding:"12px 13px",display:"flex",flexDirection:"column",gap:8},videoTitle:{fontSize:14,fontWeight:700},tagWrap:{display:"flex",gap:5,flexWrap:"wrap"},dayTag:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:8},pillTag:{fontSize:10,fontWeight:700,border:"1px solid",borderRadius:8,padding:"2px 7px"},customTag:{fontSize:10,fontWeight:700,color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"2px 7px",borderRadius:8},cardActions:{display:"flex",gap:4,justifyContent:"flex-end"},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},pc=()=>new Date().toISOString().slice(0,10),mc=(t,e)=>{const r=new Date(t+"T00:00:00");return r.setDate(r.getDate()+e),r.toISOString().slice(0,10)},fc=t=>new Date(t+"T00:00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"}),Uv=t=>{if(!t)return"";const e=t.trim();if(/^[A-Za-z0-9_-]{11}$/.test(e))return e;const r=e.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return r?r[1]:""},Vv=t=>new Promise((e,r)=>{const o=new FileReader;o.onload=()=>{const s=new Image;s.onload=()=>{let{width:l,height:a}=s;l>a&&l>900?(a=a*900/l,l=900):a>900&&(l=l*900/a,a=900);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(s,0,0,l,a),e(d.toDataURL("image/jpeg",.82))},s.onerror=r,s.src=o.result},o.onerror=r,o.readAsDataURL(t)});function Yv(){const[t,e]=p.useState([]),[r,o]=p.useState(!1),[s,i]=p.useState(null),[l,a]=p.useState(!1),[d,g]=p.useState({title:"",image:""}),[m,v]=p.useState(""),[f,j]=p.useState(!0),[k,S]=p.useState(null),T=p.useCallback(async()=>{try{e(await $.getGoldenGoals())}catch{}o(!0)},[]);p.useEffect(()=>{T()},[T]),p.useEffect(()=>{$.getSetting("golden_music").then(y=>v(Uv((y==null?void 0:y.value)||""))).catch(()=>{})},[]);const b=async()=>{if(!d.title.trim())return;const y=await $.createGolden({title:d.title.trim(),image:d.image});g({title:"",image:""}),a(!1),await T(),i(y.id)},c=async(y,A)=>{var D;const _=(D=y.target.files)==null?void 0:D[0];if(_)try{A(await Vv(_))}catch{}},u=t.filter(y=>!y.achieved),x=t.filter(y=>y.achieved);return s?n.jsxs("div",{style:X.page,children:[n.jsx(Xv,{musicId:m,on:f}),n.jsx(Qv,{goalId:s,onBack:()=>i(null),onReload:T,onCelebrate:(y,A)=>S({title:y,days:A}),pickImage:c,musicId:m,musicOn:f,setMusicOn:j}),k&&n.jsx(Kv,{data:k,onClose:()=>S(null)})]}):n.jsxs("div",{style:X.page,children:[n.jsxs("div",{style:X.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:X.eyebrow,children:"Anvil · Golden Book"}),n.jsx("h1",{style:X.h1,children:"Golden Book"}),n.jsx("div",{style:X.subhead,children:"Write your dreams into being — a little every day."})]}),!l&&n.jsxs("button",{onClick:()=>a(!0),style:X.addBtn,children:[n.jsx(oe,{size:15})," New dream"]})]}),l&&n.jsxs("div",{style:X.card,children:[n.jsx("div",{style:X.cardTitle,children:"Manifest a new dream"}),n.jsx("textarea",{autoFocus:!0,placeholder:"Write your dream as if it's already true…",value:d.title,onChange:y=>g({...d,title:y.target.value}),style:X.textarea}),n.jsxs("label",{style:X.photoPick,children:[d.image?n.jsx("img",{src:d.image,alt:"",style:X.photoPreview}):n.jsxs("span",{style:X.photoEmpty,children:[n.jsx(gd,{size:18})," Add a photo"]}),n.jsx("input",{type:"file",accept:"image/*",onChange:y=>c(y,A=>g({...d,image:A})),style:{display:"none"}})]}),n.jsxs("div",{style:X.formActions,children:[n.jsxs("button",{onClick:()=>{a(!1),g({title:"",image:""})},style:X.cancelBtn,children:[n.jsx(xt,{size:14})," Cancel"]}),n.jsxs("button",{onClick:b,disabled:!d.title.trim(),style:{...X.saveBtn,...d.title.trim()?{}:X.saveDisabled},children:[n.jsx(jt,{size:15})," Create"]})]})]}),r?n.jsxs(n.Fragment,{children:[u.length===0&&x.length===0&&!l&&n.jsx("div",{style:X.empty,children:"No dreams yet. Add your first one and revisit it daily."}),u.length>0&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:X.sectionTitle,children:[n.jsx(Lo,{size:15,color:"#C9A227"})," Manifesting ",n.jsx("span",{style:X.badge,children:u.length})]}),n.jsx("div",{style:X.grid,children:u.map(y=>n.jsx(hc,{g:y,onOpen:()=>i(y.id)},y.id))})]}),x.length>0&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{...X.sectionTitle,marginTop:22},children:[n.jsx(Vr,{size:15,color:"#4C9A6B"})," Manifested ",n.jsx("span",{style:X.badge,children:x.length})]}),n.jsx("div",{style:X.grid,children:x.map(y=>n.jsx(hc,{g:y,onOpen:()=>i(y.id),achieved:!0},y.id))})]})]}):n.jsx("div",{style:X.muted,children:"Loading…"})]})}function hc({g:t,onOpen:e,achieved:r}){return n.jsxs("button",{onClick:e,style:{...X.goalCard,...r?{opacity:.96}:{}},children:[n.jsxs("div",{style:X.thumbWrap,children:[t.image?n.jsx("img",{src:t.image,alt:"",style:X.thumb}):n.jsx("div",{style:X.thumbEmpty,children:n.jsx(Lo,{size:26,color:"var(--text-3)"})}),r&&n.jsx("span",{style:X.stamp,children:"✦ Manifested"})]}),n.jsxs("div",{style:X.goalBody,children:[n.jsx("div",{style:X.goalTitle,children:t.title}),n.jsxs("div",{style:X.goalMeta,children:[r?n.jsxs("span",{style:{...X.metaPill,color:"#4C9A6B",background:"rgba(76,154,107,0.12)"},children:[n.jsx(Vr,{size:12})," ",t.days_to_manifest!=null?`in ${t.days_to_manifest} day${t.days_to_manifest===1?"":"s"}`:"done"]}):n.jsxs("span",{style:{...X.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[n.jsx(An,{size:12})," ",t.streak," day streak"]}),n.jsxs("span",{style:X.metaDim,children:[t.total_days," entr",t.total_days===1?"y":"ies"]})]})]})]})}function Qv({goalId:t,onBack:e,onReload:r,onCelebrate:o,pickImage:s,musicId:i,musicOn:l,setMusicOn:a}){const[d,g]=p.useState(null),[m,v]=p.useState({}),[f,j]=p.useState(pc()),[k,S]=p.useState(""),[T,b]=p.useState(null),c=pc(),u=p.useCallback(async()=>{const L=await $.getGoldenGoal(t);g(L);const C={};L.entries.forEach(U=>{C[U.date]=U.text}),v(C),S(C[c]||"")},[t,c]);if(p.useEffect(()=>{u()},[u]),!d)return n.jsx("div",{style:X.muted,children:"Loading…"});const x=f===c,y=f>d.created_date,A=f<c,_=async()=>{await $.upsertGoldenEntry(t,{date:c,text:k}),await u(),r()},D=async()=>{const L=await $.achieveGolden(t);o(d.title,L.days_to_manifest),await u(),r()},E=async()=>{await $.unachieveGolden(t),await u(),r()},M=async()=>{T.trim()&&(await $.updateGolden(t,{title:T.trim()}),b(null),await u(),r())},et=L=>$.updateGolden(t,{image:L}).then(()=>{u(),r()});return n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:e,style:X.backBtn,children:[n.jsx(Ab,{size:16})," All dreams"]}),n.jsxs("div",{style:X.detailHero,children:[n.jsxs("label",{style:X.heroPhoto,children:[d.image?n.jsx("img",{src:d.image,alt:"",style:X.heroImg}):n.jsxs("span",{style:X.photoEmpty,children:[n.jsx(gd,{size:20})," Add a photo"]}),n.jsxs("span",{style:X.photoEdit,children:[n.jsx(ve,{size:12})," Edit photo"]}),n.jsx("input",{type:"file",accept:"image/*",onChange:L=>s(L,et),style:{display:"none"}})]}),n.jsxs("div",{style:X.heroInfo,children:[d.achieved&&n.jsxs("span",{style:X.heroStamp,children:["✦ Manifested",d.days_to_manifest!=null?` in ${d.days_to_manifest} day${d.days_to_manifest===1?"":"s"}`:""]}),T!==null?n.jsxs("div",{style:{display:"flex",gap:6,width:"100%"},children:[n.jsx("textarea",{autoFocus:!0,value:T,onChange:L=>b(L.target.value),style:{...X.textarea,minHeight:60}}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[n.jsx("button",{onClick:M,style:X.iconSave,children:n.jsx(jt,{size:14})}),n.jsx("button",{onClick:()=>b(null),style:X.iconCancel,children:n.jsx(xt,{size:14})})]})]}):n.jsxs("div",{style:X.heroTitleRow,children:[n.jsx("div",{style:X.heroTitle,children:d.title}),n.jsx("button",{onClick:()=>b(d.title),style:X.ghostBtn,title:"Edit",children:n.jsx(ve,{size:13})})]}),n.jsxs("div",{style:X.heroStats,children:[n.jsxs("span",{style:{...X.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[n.jsx(An,{size:13})," ",d.streak," day streak"]}),n.jsxs("span",{style:X.metaDim,children:[d.total_days," entr",d.total_days===1?"y":"ies"]}),n.jsxs("span",{style:X.metaDim,children:["since ",fc(d.created_date)]})]})]})]}),n.jsxs("div",{style:X.writeCard,children:[n.jsx("div",{style:X.tuneRow,children:i?n.jsxs("button",{onClick:()=>a(L=>!L),style:{...X.tuneBtn,...l?X.tuneOn:{}},children:[l?n.jsx(th,{size:14}):n.jsx(Ob,{size:14})," Soft tunes"]}):n.jsx("span",{style:X.tuneHint,children:"Add a track in Settings → Music"})}),n.jsxs("div",{style:X.writeNav,children:[n.jsx("button",{onClick:()=>j(L=>mc(L,-1)),disabled:!y,style:{...X.navBtn,...y?{}:X.navDisabled},children:n.jsx(Fn,{size:16})}),n.jsx("div",{style:X.writeDate,children:x?"Today":fc(f)}),n.jsx("button",{onClick:()=>j(L=>mc(L,1)),disabled:!A,style:{...X.navBtn,...A?{}:X.navDisabled},children:n.jsx(Xr,{size:16})})]}),x&&!d.achieved?n.jsxs(n.Fragment,{children:[n.jsx("textarea",{value:k,onChange:L=>S(L.target.value),placeholder:"Write it again today, as if it's already yours…",style:X.writeArea}),n.jsxs("button",{onClick:_,style:X.writeSave,children:[n.jsx(jt,{size:15})," Save today's entry"]})]}):n.jsx("div",{style:X.readEntry,children:m[f]?n.jsxs(n.Fragment,{children:[n.jsx($b,{size:16,color:"var(--text-3)"}),n.jsx("p",{style:X.readText,children:m[f]})]}):n.jsx("div",{style:X.muted,children:"Nothing written on this day."})})]}),d.achieved?n.jsx("button",{onClick:E,style:X.unmanifestBtn,children:"Undo manifested"}):n.jsxs("button",{onClick:D,style:X.manifestBtn,children:[n.jsx(Lo,{size:16})," Mark as manifested"]})]})}function Kv({data:t,onClose:e}){return n.jsx("div",{style:X.celebOverlay,onClick:e,children:n.jsxs("div",{style:X.celebBox,onClick:r=>r.stopPropagation(),children:[n.jsx("div",{style:X.celebEmoji,children:"✨🌟✨"}),n.jsx("div",{style:X.celebTitle,children:"It's happening!"}),n.jsxs("div",{style:X.celebDream,children:['"',t.title,'"']}),n.jsxs("div",{style:X.celebSub,children:[t.days!=null?`Manifested in ${t.days} day${t.days===1?"":"s"}.`:"Manifested."," The universe delivered. 🙏"]}),n.jsx("button",{onClick:e,style:X.celebBtn,children:"Wonderful"})]})})}function Xv({musicId:t,on:e}){return!t||!e?null:n.jsx("iframe",{title:"golden-music",src:`https://www.youtube.com/embed/${t}?autoplay=1&loop=1&playlist=${t}&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}})}const Er="#C9A227",X={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:860,margin:"0 auto",position:"relative"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:Er,color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"11px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:70,resize:"vertical",lineHeight:1.5},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:Er,color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:12},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:14},goalCard:{textAlign:"left",border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,overflow:"hidden",cursor:"pointer",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",padding:0,fontFamily:"inherit",display:"flex",flexDirection:"column"},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 10",background:"var(--surface-2)"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},thumbEmpty:{width:"100%",height:"100%",display:"grid",placeItems:"center"},stamp:{position:"absolute",top:8,right:8,transform:"rotate(6deg)",background:"rgba(76,154,107,0.95)",color:"#fff",fontSize:11,fontWeight:800,letterSpacing:"0.04em",padding:"3px 9px",borderRadius:6,border:"1.5px solid #fff",textTransform:"uppercase"},goalBody:{padding:"11px 13px",display:"flex",flexDirection:"column",gap:8},goalTitle:{fontSize:14,fontWeight:600,lineHeight:1.35,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},goalMeta:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},metaPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:700,padding:"2px 8px",borderRadius:10},metaDim:{fontSize:11,color:"var(--text-3)",fontWeight:500},backBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginBottom:16},detailHero:{display:"flex",flexDirection:"column",gap:14,marginBottom:16},heroPhoto:{position:"relative",width:"100%",borderRadius:14,overflow:"hidden",border:"1px solid var(--border)",cursor:"pointer",background:"var(--surface-2)",display:"flex",alignItems:"center",justifyContent:"center",minHeight:120},heroImg:{width:"100%",maxHeight:"62vh",objectFit:"contain",display:"block"},photoEdit:{position:"absolute",bottom:8,right:8,display:"flex",alignItems:"center",gap:5,background:"rgba(0,0,0,0.6)",color:"#fff",fontSize:11,fontWeight:600,padding:"4px 8px",borderRadius:7},heroInfo:{display:"flex",flexDirection:"column",gap:10,alignItems:"center",textAlign:"center"},heroStamp:{alignSelf:"center",background:"rgba(76,154,107,0.14)",color:"#4C9A6B",fontSize:12,fontWeight:800,padding:"4px 10px",borderRadius:8,letterSpacing:"0.03em"},heroTitleRow:{display:"flex",alignItems:"flex-start",gap:8,justifyContent:"center"},heroTitle:{fontSize:23,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.35},heroStats:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",justifyContent:"center"},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",flexShrink:0},iconSave:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},iconCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},writeCard:{background:"var(--surface)",borderRadius:14,padding:16,border:"1px solid var(--border)",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},tuneRow:{display:"flex",justifyContent:"flex-end",marginBottom:10},tuneBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tuneOn:{background:Er,color:"#fff",borderColor:Er},tuneHint:{fontSize:11,color:"var(--text-3)",fontWeight:500},writeNav:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,marginBottom:12},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center"},navDisabled:{opacity:.35,cursor:"not-allowed"},writeDate:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:150,textAlign:"center"},writeArea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:120,resize:"vertical",lineHeight:1.6},writeSave:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",background:Er,color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},readEntry:{display:"flex",gap:8,padding:"6px 2px"},readText:{fontSize:15,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.6,margin:0,whiteSpace:"pre-wrap"},manifestBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,width:"100%",border:"none",background:"linear-gradient(135deg,#C9A227,#E0BD45)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:800,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 2px 10px rgba(201,162,39,0.35)"},unmanifestBtn:{display:"block",margin:"0 auto",border:"none",background:"none",color:"var(--text-3)",fontSize:12,fontWeight:600,cursor:"pointer",textDecoration:"underline",fontFamily:"inherit"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.6)",zIndex:200,display:"grid",placeItems:"center",padding:16},celebBox:{background:"var(--surface)",color:"var(--text)",borderRadius:20,padding:"36px 30px",textAlign:"center",maxWidth:360,boxShadow:"0 12px 48px rgba(0,0,0,0.3)"},celebEmoji:{fontSize:40,marginBottom:10},celebTitle:{fontSize:24,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginBottom:10,color:Er},celebDream:{fontSize:15,fontStyle:"italic",fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.5,marginBottom:10},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:Er,color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},ba=[{id:"sandstone",name:"Sandstone",description:"Warm editorial light — the original Anvil look.",dark:!1,swatch:["#F7F6F3","#4C9A6B","#26241F"],vars:{"--bg":"#F7F6F3","--surface":"#FFFFFF","--surface-2":"#FAFAF8","--hover":"#F2F1EC","--border":"#ECEAE3","--text":"#26241F","--text-2":"#6B675E","--text-3":"#9A968C","--accent":"#4C9A6B","--accent-strong":"#26241F","--accent-2":"#3A352C"}},{id:"midnight",name:"Midnight",description:"Deep low-glare dark mode for night owls and focus.",dark:!0,swatch:["#161513","#6FB58C","#ECEAE3"],vars:{"--bg":"#161513","--surface":"#211F1C","--surface-2":"#1B1A17","--hover":"#2B2924","--border":"#34312B","--text":"#ECEAE3","--text-2":"#B6B1A6","--text-3":"#8A857A","--accent":"#6FB58C","--accent-strong":"#2E6F4B","--accent-2":"#245C3E"}},{id:"blossom",name:"Blossom",description:"Soft rose & blush — gentle, warm, and feminine.",dark:!1,swatch:["#FFF5F8","#E0608E","#B23A6B"],vars:{"--bg":"#FFF5F8","--surface":"#FFFFFF","--surface-2":"#FFF0F4","--hover":"#FDE7EE","--border":"#F6D9E2","--text":"#3D2230","--text-2":"#7A5466","--text-3":"#B08799","--accent":"#E0608E","--accent-strong":"#B23A6B","--accent-2":"#9C2F5C"}},{id:"tide",name:"Tide",description:"Calm professional blues — clean and focused.",dark:!1,swatch:["#F1F6FA","#2E86C1","#1C4E73"],vars:{"--bg":"#F1F6FA","--surface":"#FFFFFF","--surface-2":"#ECF3F9","--hover":"#E2EEF6","--border":"#D5E3EE","--text":"#13283A","--text-2":"#4A6275","--text-3":"#8AA0B0","--accent":"#2E86C1","--accent-strong":"#1C4E73","--accent-2":"#163E5C"}},{id:"velocity",name:"Velocity",description:"High-energy sport — crisp slate with electric orange.",dark:!1,swatch:["#F4F5F7","#F4511E","#1F2A37"],vars:{"--bg":"#F4F5F7","--surface":"#FFFFFF","--surface-2":"#EEF0F3","--hover":"#E7EAEE","--border":"#DCE0E6","--text":"#18202B","--text-2":"#515B68","--text-3":"#8B95A1","--accent":"#F4511E","--accent-strong":"#1F2A37","--accent-2":"#16202B"}},{id:"evergreen",name:"Evergreen",description:"Earthy forest greens — grounded and natural.",dark:!1,swatch:["#F2F6F1","#3E8E52","#2A4A30"],vars:{"--bg":"#F2F6F1","--surface":"#FFFFFF","--surface-2":"#ECF2EA","--hover":"#E4EEE2","--border":"#D7E4D3","--text":"#1E2B20","--text-2":"#4F6151","--text-3":"#8AA08C","--accent":"#3E8E52","--accent-strong":"#2A4A30","--accent-2":"#213B26"}},{id:"amethyst",name:"Amethyst",description:"Premium purple & plum — elegant and refined.",dark:!1,swatch:["#F6F4FB","#7A4FE0","#3A2D5C"],vars:{"--bg":"#F6F4FB","--surface":"#FFFFFF","--surface-2":"#F1EDF9","--hover":"#EAE3F6","--border":"#DFD6F0","--text":"#241B36","--text-2":"#5A4E72","--text-3":"#9588AE","--accent":"#7A4FE0","--accent-strong":"#3A2D5C","--accent-2":"#2E2349"}}],vc="sandstone",tp="anvil_theme",Jv=t=>ba.find(e=>e.id===t)||ba[0];function ep(){try{return localStorage.getItem(tp)||vc}catch{return vc}}function eo(t,e=!0){const r=Jv(t),o=document.documentElement;Object.entries(r.vars).forEach(([i,l])=>o.style.setProperty(i,l)),o.style.colorScheme=r.dark?"dark":"light",o.setAttribute("data-theme",r.id);const s=document.querySelector('meta[name="theme-color"]');if(s&&s.setAttribute("content",r.vars["--surface"]),e)try{localStorage.setItem(tp,r.id)}catch{}return r.id}function Zv(t=560){const[e,r]=p.useState(()=>window.innerWidth<=t);return p.useEffect(()=>{const o=()=>r(window.innerWidth<=t);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[t]),e}function qv({screens:t,order:e,hidden:r,themeId:o,currency:s,ticker:i,defaultScreen:l,onSetDefault:a,onSaveSidebar:d,onPreviewTheme:g,onCommitTheme:m,onSelectCurrency:v,onSaveTicker:f,onClose:j}){const[k,S]=p.useState("sidebar"),[T,b]=p.useState(()=>e.map(Y=>({id:Y,hidden:r.includes(Y)}))),[c,u]=p.useState(o),[x,y]=p.useState(""),[A,_]=p.useState(!1),D=Zv(),[E,M]=p.useState(!!(i!=null&&i.enabled)),[et,L]=p.useState(()=>{const Y=Array.isArray(i==null?void 0:i.statements)?i.statements.slice(0,5):[];return Y.length?Y:[""]}),[C,U]=p.useState((i==null?void 0:i.speed)??60),[ut,q]=p.useState((i==null?void 0:i.delay)??3),[B,R]=p.useState(!1),F=(Y,pt)=>L(gt=>gt.map((Ct,le)=>le===Y?pt:Ct)),O=()=>L(Y=>Y.length<5?[...Y,""]:Y),w=Y=>L(pt=>pt.length>1?pt.filter((gt,Ct)=>Ct!==Y):pt),V=()=>{const Y=et.map(pt=>pt.trim()).filter(Boolean).slice(0,5);f({enabled:E,statements:Y,speed:Number(C),delay:Number(ut)}),R(!0),setTimeout(()=>R(!1),1500)};p.useEffect(()=>{$.getSetting("golden_music").then(Y=>y((Y==null?void 0:Y.value)||"")).catch(()=>{})},[]);const h=()=>{$.setSetting("golden_music",x.trim()).then(()=>{_(!0),setTimeout(()=>_(!1),1500)}).catch(()=>{})},P=Y=>{u(Y),g(Y)},at=T.filter(Y=>!Y.hidden).length,dt=(Y,pt)=>{const gt=Y+pt;if(gt<0||gt>=T.length)return;const Ct=[...T];[Ct[Y],Ct[gt]]=[Ct[gt],Ct[Y]],b(Ct)},wt=Y=>{const pt=T[Y];if(!pt.hidden&&at<=1)return;const gt=[...T];gt[Y]={...pt,hidden:!pt.hidden},b(gt)},Dt=()=>{d(T.map(Y=>Y.id),T.filter(Y=>Y.hidden).map(Y=>Y.id))},ft=D?{...tt.overlay,padding:0}:tt.overlay,Tt=D?{...tt.modal,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"100%",borderRadius:0,border:"none"}:tt.modal;return n.jsx("div",{style:ft,onClick:j,children:n.jsxs("div",{style:Tt,onClick:Y=>Y.stopPropagation(),children:[n.jsxs("div",{style:tt.head,children:[n.jsx("div",{style:tt.title,children:"Settings"}),n.jsx("button",{onClick:j,style:tt.closeBtn,children:n.jsx(xt,{size:18})})]}),n.jsxs("div",{style:tt.tabs,children:[n.jsxs("button",{onClick:()=>S("sidebar"),style:{...tt.tab,...k==="sidebar"?tt.tabOn:{}},children:[n.jsx(Jf,{size:15})," Configure sidebar"]}),n.jsxs("button",{onClick:()=>S("themes"),style:{...tt.tab,...k==="themes"?tt.tabOn:{}},children:[n.jsx(eh,{size:15})," Themes"]}),n.jsxs("button",{onClick:()=>S("currency"),style:{...tt.tab,...k==="currency"?tt.tabOn:{}},children:[n.jsx(Hf,{size:15})," Currency"]}),n.jsxs("button",{onClick:()=>S("music"),style:{...tt.tab,...k==="music"?tt.tabOn:{}},children:[n.jsx(Ob,{size:15})," Music"]}),n.jsxs("button",{onClick:()=>S("reminders"),style:{...tt.tab,...k==="reminders"?tt.tabOn:{}},children:[n.jsx(Nb,{size:15})," Reminders"]})]}),n.jsx("div",{style:tt.body,children:k==="sidebar"?n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:tt.hint,children:["Reorder with the arrows, hide ones you don't use, and tap ",n.jsx(qs,{size:11,style:{verticalAlign:"-1px"}})," to set the screen that opens on launch."]}),n.jsx("div",{style:tt.list,children:T.map((Y,pt)=>{const gt=t[Y.id],Ct=gt.icon,le=l===Y.id;return n.jsxs("div",{style:{...tt.row,opacity:Y.hidden?.5:1,...le?{borderColor:"var(--accent)"}:{}},children:[n.jsx("span",{style:tt.rowNum,children:pt+1}),n.jsx(Ct,{size:16}),n.jsxs("span",{style:tt.rowLabel,children:[gt.label,le&&n.jsx("span",{style:tt.defaultTag,children:"default"})]}),n.jsx("button",{onClick:()=>a(Y.id),title:le?"Opens on launch":"Set as default",style:{...tt.iconBtn,...le?{color:"var(--accent)"}:{}},children:n.jsx(qs,{size:15})}),n.jsx("button",{onClick:()=>wt(pt),title:Y.hidden?"Show":"Hide",style:{...tt.iconBtn,...Y.hidden?{}:{color:"var(--accent)"}},children:Y.hidden?n.jsx(ra,{size:15}):n.jsx(na,{size:15})}),n.jsx("button",{onClick:()=>dt(pt,-1),disabled:pt===0,style:{...tt.iconBtn,opacity:pt===0?.3:1},children:n.jsx(_b,{size:15})}),n.jsx("button",{onClick:()=>dt(pt,1),disabled:pt===T.length-1,style:{...tt.iconBtn,opacity:pt===T.length-1?.3:1},children:n.jsx(vi,{size:15})})]},Y.id)})}),n.jsxs("button",{onClick:Dt,style:tt.saveBtn,children:[n.jsx(jt,{size:15})," Save sidebar"]})]}):k==="currency"?n.jsxs(n.Fragment,{children:[n.jsx("p",{style:tt.hint,children:"Choose the currency used across Vault and Worth. Applies instantly."}),n.jsx("div",{style:tt.list,children:ca.map(Y=>{const pt=Y.code===s;return n.jsxs("button",{onClick:()=>v(Y.code),style:{...tt.row,cursor:"pointer",textAlign:"left",width:"100%",...pt?{borderColor:"var(--accent)"}:{}},children:[n.jsx("span",{style:tt.curSymbol,children:Y.symbol}),n.jsxs("span",{style:tt.rowLabel,children:[Y.label," ",n.jsx("span",{style:tt.curCode,children:Y.code})]}),pt&&n.jsx("span",{style:tt.themeCheck,children:n.jsx(jt,{size:13})})]},Y.code)})})]}):k==="music"?n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:tt.hint,children:["Paste a YouTube link to play softly while you write in the ",n.jsx("b",{children:"Golden Book"}),". It plays only on that screen (audio only)."]}),n.jsx("input",{value:x,onChange:Y=>y(Y.target.value),placeholder:"https://youtube.com/watch?v=…",style:tt.musicInput}),n.jsxs("button",{onClick:h,style:tt.saveBtn,children:[n.jsx(jt,{size:15})," ",A?"Saved":"Save music"]})]}):k==="reminders"?n.jsxs(n.Fragment,{children:[n.jsx("p",{style:tt.hint,children:"Up to 5 reminders scroll across the top of every screen — a gentle nudge toward your goals."}),n.jsxs("button",{onClick:()=>M(Y=>!Y),style:{...tt.row,cursor:"pointer",width:"100%",justifyContent:"space-between",...E?{borderColor:"var(--accent)"}:{}},children:[n.jsx("span",{style:tt.rowLabel,children:"Show reminder banner"}),n.jsx("span",{style:{...tt.switch,...E?tt.switchOn:{}},children:E?"On":"Off"})]}),n.jsxs("div",{style:{marginTop:14},children:[n.jsxs("div",{style:tt.fieldLbl,children:["Reminders (",et.filter(Y=>Y.trim()).length,"/5)"]}),et.map((Y,pt)=>n.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[n.jsx("input",{value:Y,onChange:gt=>F(pt,gt.target.value),maxLength:120,placeholder:`Reminder ${pt+1}`,style:{...tt.musicInput,marginBottom:0}}),n.jsx("button",{onClick:()=>w(pt),style:tt.iconBtn,title:"Remove",children:n.jsx(xt,{size:15})})]},pt)),et.length<5&&n.jsxs("button",{onClick:O,style:tt.addRowBtn,children:[n.jsx(oe,{size:14})," Add reminder"]})]}),n.jsxs("div",{style:{marginTop:16},children:[n.jsxs("div",{style:tt.sliderHead,children:[n.jsx("span",{style:tt.fieldLbl,children:"Scroll speed"}),n.jsxs("span",{style:tt.sliderVal,children:[C," px/s"]})]}),n.jsx("input",{type:"range",min:20,max:200,step:5,value:C,onChange:Y=>U(Y.target.value),style:tt.range})]}),n.jsxs("div",{style:{marginTop:12},children:[n.jsxs("div",{style:tt.sliderHead,children:[n.jsx("span",{style:tt.fieldLbl,children:"Delay between reminders"}),n.jsxs("span",{style:tt.sliderVal,children:[ut,"s"]})]}),n.jsx("input",{type:"range",min:0,max:15,step:1,value:ut,onChange:Y=>q(Y.target.value),style:tt.range})]}),n.jsxs("button",{onClick:V,style:{...tt.saveBtn,marginTop:16},children:[n.jsx(jt,{size:15})," ",B?"Saved":"Save reminders"]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:tt.hint,children:["Tap a theme to preview it live, then hit ",n.jsx("b",{children:"Apply theme"})," to keep it."]}),n.jsx("div",{style:tt.themeGrid,children:ba.map(Y=>{const pt=Y.id===c;return n.jsxs("button",{onClick:()=>P(Y.id),style:{...tt.themeCard,...pt?tt.themeCardOn:{}},children:[n.jsxs("div",{style:tt.swatchRow,children:[Y.swatch.map((gt,Ct)=>n.jsx("span",{style:{...tt.swatch,background:gt}},Ct)),pt&&n.jsx("span",{style:tt.themeCheck,children:n.jsx(jt,{size:13})})]}),n.jsxs("div",{style:tt.themeName,children:[Y.name,Y.dark?n.jsx("span",{style:tt.darkTag,children:"Dark"}):null]}),n.jsx("div",{style:tt.themeDesc,children:Y.description})]},Y.id)})}),n.jsxs("button",{onClick:()=>m(c),disabled:c===o,style:{...tt.saveBtn,...c===o?tt.saveBtnDisabled:{}},children:[n.jsx(jt,{size:15})," ",c===o?"Theme applied":"Apply theme"]})]})})]})})}const tt={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,width:460,maxWidth:"100%",maxHeight:"88vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",overflow:"hidden"},head:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 18px",borderBottom:"1px solid var(--border)",flexShrink:0},title:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},tabs:{display:"flex",flexWrap:"wrap",gap:6,padding:"12px 18px 0",flexShrink:0},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"transparent"},body:{padding:"16px 18px 20px",overflowY:"auto",overflowX:"hidden",flex:1,minHeight:0},hint:{fontSize:12.5,color:"var(--text-3)",lineHeight:1.5,margin:"0 0 14px"},list:{display:"flex",flexDirection:"column",gap:6},row:{display:"flex",alignItems:"center",gap:10,padding:"9px 11px",background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:9},rowNum:{fontSize:11,fontWeight:700,color:"var(--text-3)",width:16,textAlign:"center"},rowLabel:{flex:1,fontSize:13.5,fontWeight:500,display:"flex",alignItems:"center",gap:7},defaultTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"1px 6px",borderRadius:6},curSymbol:{width:22,textAlign:"center",fontSize:15,fontWeight:700,color:"var(--text)"},curCode:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginLeft:4},iconBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},saveBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",marginTop:16,border:"none",background:"var(--accent)",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer"},saveBtnDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"default"},musicInput:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:12},switch:{fontSize:12,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:20,padding:"3px 12px",minWidth:44,textAlign:"center"},switchOn:{background:"var(--accent)",color:"#fff"},fieldLbl:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},addRowBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},sliderHead:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},sliderVal:{fontSize:12,fontWeight:700,color:"var(--accent)"},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},themeGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},themeCard:{textAlign:"left",border:"2px solid var(--border)",background:"var(--surface-2)",borderRadius:12,padding:12,cursor:"pointer",display:"flex",flexDirection:"column",gap:6,outline:"none",WebkitTapHighlightColor:"transparent",transition:"border-color .15s ease, box-shadow .15s ease"},themeCardOn:{borderColor:"var(--accent)",boxShadow:"0 0 0 3px color-mix(in srgb, var(--accent) 25%, transparent)"},swatchRow:{display:"flex",alignItems:"center",gap:5,position:"relative"},swatch:{width:22,height:22,borderRadius:"50%",border:"1px solid rgba(0,0,0,0.08)"},themeCheck:{marginLeft:"auto",width:20,height:20,borderRadius:"50%",background:"var(--accent)",color:"#fff",display:"grid",placeItems:"center"},themeName:{fontSize:14,fontWeight:700,display:"flex",alignItems:"center",gap:6},darkTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",background:"var(--hover)",color:"var(--text-2)",padding:"1px 6px",borderRadius:6},themeDesc:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4}};function ty({statements:t,speed:e=60,delay:r=3}){const o=p.useMemo(()=>(t||[]).map(d=>(d||"").trim()).filter(Boolean).slice(0,5),[t]),[s,i]=p.useState(0),l=p.useRef(null),a=p.useRef(null);return p.useEffect(()=>{i(0)},[o]),p.useEffect(()=>{if(!o.length)return;const d=l.current,g=a.current;if(!d||!g)return;const m=d.offsetWidth,v=g.offsetWidth,f=Math.max(10,Number(e)||60),j=Math.max(2500,(m+v)/f*1e3),k=g.animate([{transform:`translateX(${m}px)`},{transform:`translateX(${-v}px)`}],{duration:j,easing:"linear",fill:"both"});let S;const T=()=>{S=setTimeout(()=>i(b=>(b+1)%o.length),Math.max(0,Number(r)||0)*1e3)};return k.addEventListener("finish",T),()=>{k.cancel(),k.removeEventListener("finish",T),clearTimeout(S)}},[s,o,e,r]),o.length?n.jsxs("div",{style:ps.bar,"aria-label":"Reminders",children:[n.jsx("div",{style:ps.icon,children:n.jsx(Nb,{size:15})}),n.jsx("div",{ref:l,style:ps.viewport,children:n.jsx("div",{ref:a,style:ps.text,children:o[s%o.length]},s)})]}):null}const ps={bar:{display:"flex",alignItems:"center",height:36,flexShrink:0,overflow:"hidden",borderBottom:"1px solid var(--border)",background:"color-mix(in srgb, var(--accent) 12%, var(--surface))"},icon:{display:"grid",placeItems:"center",width:42,height:"100%",flexShrink:0,color:"#fff",background:"var(--accent)"},viewport:{position:"relative",flex:1,height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},text:{whiteSpace:"nowrap",fontSize:13.5,fontWeight:700,color:"var(--text)",letterSpacing:"0.01em",willChange:"transform",paddingLeft:4}};eo(ep(),!1);const pa="anvil_default_screen",yc=()=>{try{return localStorage.getItem(pa)}catch{return null}},Ar={kickstart:{label:"Kickstart",icon:ih,component:Gv},golden:{label:"Golden Book",icon:Gf,component:Yv},habits:{label:"Habits",icon:ah,component:Lh},quadrant:{label:"Quadrant",icon:Pb,component:jh},goals:{label:"Goals",icon:ud,component:Rh},grove:{label:"Grove",icon:uh,component:Cv},worth:{label:"Worth",icon:Xf,component:Ev},vault:{label:"Vault",icon:Lb,component:Av},journal:{label:"Journal",icon:Mb,component:Kh},revision:{label:"Revision",icon:Hb,component:lv},affirmations:{label:"Affirmations",icon:Lo,component:gv},skills:{label:"Skills",icon:Uf,component:Xh},spiritual:{label:"Spiritual",icon:Ts,component:qh}},rp=["kickstart","golden","habits","quadrant","goals","grove","journal","revision","affirmations","skills","spiritual","worth","vault"];function ms(t){const e=rp.filter(s=>Ar[s]),o=[...(Array.isArray(t)?t:[]).filter(s=>Ar[s])];return e.forEach(s=>{o.includes(s)||o.push(s)}),o}function ey(){const[t,e]=p.useState(()=>window.innerWidth<720);return p.useEffect(()=>{const r=()=>e(window.innerWidth<720);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),t}function ry(){const[t,e]=p.useState(()=>{const w=yc();return w&&Ar[w]?w:"habits"}),[r,o]=p.useState(()=>yc()||"habits"),[s,i]=p.useState(!1),[l,a]=p.useState(null),[d,g]=p.useState(!1),[m,v]=p.useState(!1),[f,j]=p.useState(ep()),[k,S]=p.useState(Ro()),[T,b]=p.useState({enabled:!1,statements:[],speed:60,delay:3}),[c,u]=p.useState(()=>ms(rp)),[x,y]=p.useState([]),A=ey();p.useEffect(()=>{let w=!1;const V=()=>{sa(),a(null)};return window.addEventListener("anvil-unauthorized",V),pd()?$.me().then(h=>{w||a(h)}).catch(()=>{}).finally(()=>{w||g(!0)}):g(!0),()=>{w=!0,window.removeEventListener("anvil-unauthorized",V)}},[]),p.useEffect(()=>{l&&($.getSetting("theme").then(w=>{w!=null&&w.value&&j(eo(w.value))}).catch(()=>{}),$.getSetting("currency").then(w=>{w!=null&&w.value&&S(rc(w.value))}).catch(()=>{}),$.getSetting("ticker").then(w=>{w!=null&&w.value&&b(V=>({...V,...w.value}))}).catch(()=>{}),$.getSetting("default_screen").then(w=>{if(w!=null&&w.value&&Ar[w.value]){o(w.value);try{localStorage.setItem(pa,w.value)}catch{}}}).catch(()=>{}),$.getSetting("sidebar_order").then(w=>{Array.isArray(w==null?void 0:w.value)&&u(ms(w.value))}).catch(()=>{}),$.getSetting("sidebar_hidden").then(w=>{Array.isArray(w==null?void 0:w.value)&&y(w.value)}).catch(()=>{}))},[l]);function _(w){e(w),i(!1)}const D=()=>{sa(),a(null)},E=w=>{eo(w,!1)},M=w=>{j(eo(w)),$.setSetting("theme",w).catch(()=>{}),v(!1)},et=()=>{eo(f,!1),v(!1)},L=w=>{S(rc(w)),$.setSetting("currency",w).catch(()=>{})},C=w=>{b(w),$.setSetting("ticker",w).catch(()=>{})},U=w=>{o(w);try{localStorage.setItem(pa,w)}catch{}$.setSetting("default_screen",w).catch(()=>{})},ut=(w,V)=>{if(u(ms(w)),y(V),v(!1),$.setSetting("sidebar_order",w).catch(()=>{}),$.setSetting("sidebar_hidden",V).catch(()=>{}),V.includes(t)){const h=ms(w).find(P=>!V.includes(P));h&&e(h)}},q=c.filter(w=>!x.includes(w));if(!d)return n.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:"'Inter',system-ui,sans-serif",color:"var(--text-3)"},children:"Loading…"});if(!l)return n.jsx(Bv,{onAuthed:a});const B=Ar[t],R=B.component,F=()=>n.jsx("div",{style:It.navItems,children:q.map(w=>{const V=Ar[w];if(!V)return null;const h=V.icon,P=t===w;return n.jsxs("button",{onClick:()=>_(w),title:V.label,style:{...It.navItem,...P?It.navItemOn:{}},children:[n.jsx(h,{size:18}),n.jsx("span",{style:It.navLabel,children:V.label})]},w)})}),O=()=>n.jsxs("div",{style:It.footerWrap,children:[n.jsxs("button",{onClick:()=>v(!0),style:It.settingsBtn,title:"Settings",children:[n.jsx(Gb,{size:17}),n.jsx("span",{children:"Settings"})]}),n.jsxs("div",{style:It.userFooter,children:[n.jsxs("div",{style:It.userInfo,children:[n.jsx("div",{style:It.userAvatar,children:(l.name||l.email||"?").charAt(0).toUpperCase()}),n.jsxs("div",{style:{minWidth:0},children:[n.jsx("div",{style:It.userName,children:l.name||"You"}),n.jsx("div",{style:It.userEmail,children:l.email})]})]}),n.jsx("button",{onClick:D,style:It.logoutBtn,title:"Sign out",children:n.jsx(Zf,{size:16})})]})]});return n.jsxs("div",{style:It.shell,children:[!A&&n.jsxs("nav",{style:It.nav,children:[n.jsxs("div",{style:It.brand,children:[n.jsx("div",{style:It.brandLogo,children:"B"}),n.jsx("span",{style:It.brandName,children:"Anvil"})]}),n.jsx(F,{}),n.jsx(O,{})]}),A&&s&&n.jsx("div",{style:It.overlay,onClick:()=>i(!1),children:n.jsxs("nav",{style:It.drawer,onClick:w=>w.stopPropagation(),children:[n.jsxs("div",{style:It.drawerHeader,children:[n.jsxs("div",{style:It.brand,children:[n.jsx("div",{style:It.brandLogo,children:"B"}),n.jsx("span",{style:It.brandName,children:"Anvil"})]}),n.jsx("button",{style:It.closeBtn,onClick:()=>i(!1),children:n.jsx(xt,{size:20})})]}),n.jsx(F,{}),n.jsx(O,{})]})}),n.jsxs("div",{style:It.content,children:[A&&n.jsxs("div",{style:It.topBar,children:[n.jsx("button",{style:It.menuBtn,onClick:()=>i(!0),children:n.jsx(cd,{size:22})}),n.jsx("span",{style:It.topBarTitle,children:B.label}),n.jsx("div",{style:{width:38}})]}),T.enabled&&n.jsx(ty,{statements:T.statements,speed:T.speed,delay:T.delay}),n.jsx("main",{style:It.main,children:n.jsx(R,{})})]}),m&&n.jsx(qv,{screens:Ar,order:c,hidden:x,themeId:f,currency:k,ticker:T,defaultScreen:r,onSetDefault:U,onSaveSidebar:ut,onPreviewTheme:E,onCommitTheme:M,onSelectCurrency:L,onSaveTicker:C,onClose:et})]})}const It={shell:{display:"flex",height:"100vh",overflow:"hidden",fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)"},nav:{width:200,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column",padding:"20px 10px",gap:2},brand:{display:"flex",alignItems:"center",gap:9,padding:"6px 10px 20px",borderBottom:"1px solid var(--border)",marginBottom:8},brandLogo:{width:30,height:30,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:14,fontWeight:800,fontFamily:"'Fraunces', Georgia, serif",flexShrink:0},brandName:{fontSize:16,fontWeight:700,letterSpacing:"-0.01em",color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},navItems:{display:"flex",flexDirection:"column",gap:2},navItem:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},navItemOn:{background:"var(--hover)",color:"var(--text)",fontWeight:700},footerWrap:{marginTop:"auto",paddingTop:8},settingsBtn:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},userFooter:{marginTop:4,paddingTop:12,borderTop:"1px solid var(--border)",display:"flex",alignItems:"center",gap:8},userInfo:{display:"flex",alignItems:"center",gap:8,flex:1,minWidth:0},userAvatar:{width:30,height:30,borderRadius:"50%",background:"#8268B0",color:"#fff",display:"grid",placeItems:"center",fontSize:13,fontWeight:700,flexShrink:0},userName:{fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},userEmail:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logoutBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",padding:7,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},navLabel:{flex:1},content:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},main:{flex:1,overflowY:"auto",overflowX:"hidden"},topBar:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"var(--surface)",borderBottom:"1px solid var(--border)",flexShrink:0},topBarTitle:{fontSize:16,fontWeight:700,color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},menuBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text)",padding:8,borderRadius:8,display:"grid",placeItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:100,display:"flex"},drawer:{width:220,background:"var(--surface)",height:"100%",display:"flex",flexDirection:"column",padding:"16px 10px",gap:2,boxShadow:"4px 0 24px rgba(0,0,0,0.12)"},drawerHeader:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:4},closeBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",padding:6,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0}};Rb(document.getElementById("root")).render(n.jsx(p.StrictMode,{children:n.jsx(ry,{})}));
