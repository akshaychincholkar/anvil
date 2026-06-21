(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();var zc={exports:{}},ci={},Tc={exports:{}},Ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oo=Symbol.for("react.element"),yp=Symbol.for("react.portal"),vp=Symbol.for("react.fragment"),xp=Symbol.for("react.strict_mode"),kp=Symbol.for("react.profiler"),wp=Symbol.for("react.provider"),jp=Symbol.for("react.context"),Sp=Symbol.for("react.forward_ref"),Cp=Symbol.for("react.suspense"),Ip=Symbol.for("react.memo"),zp=Symbol.for("react.lazy"),Wd=Symbol.iterator;function Tp(t){return t===null||typeof t!="object"?null:(t=Wd&&t[Wd]||t["@@iterator"],typeof t=="function"?t:null)}var Ec={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bc=Object.assign,Dc={};function Un(t,e,r){this.props=t,this.context=e,this.refs=Dc,this.updater=r||Ec}Un.prototype.isReactComponent={};Un.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Un.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Rc(){}Rc.prototype=Un.prototype;function Ta(t,e,r){this.props=t,this.context=e,this.refs=Dc,this.updater=r||Ec}var Ea=Ta.prototype=new Rc;Ea.constructor=Ta;Bc(Ea,Un.prototype);Ea.isPureReactComponent=!0;var _d=Array.isArray,Fc=Object.prototype.hasOwnProperty,Ba={current:null},Ac={key:!0,ref:!0,__self:!0,__source:!0};function Mc(t,e,r){var o,s={},i=null,l=null;if(e!=null)for(o in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(i=""+e.key),e)Fc.call(e,o)&&!Ac.hasOwnProperty(o)&&(s[o]=e[o]);var a=arguments.length-2;if(a===1)s.children=r;else if(1<a){for(var d=Array(a),g=0;g<a;g++)d[g]=arguments[g+2];s.children=d}if(t&&t.defaultProps)for(o in a=t.defaultProps,a)s[o]===void 0&&(s[o]=a[o]);return{$$typeof:Oo,type:t,key:i,ref:l,props:s,_owner:Ba.current}}function Ep(t,e){return{$$typeof:Oo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Da(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oo}function Bp(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var Ld=/\/+/g;function Ri(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Bp(""+t.key):e.toString(36)}function Cs(t,e,r,o,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case Oo:case yp:l=!0}}if(l)return l=t,s=s(l),t=o===""?"."+Ri(l,0):o,_d(s)?(r="",t!=null&&(r=t.replace(Ld,"$&/")+"/"),Cs(s,e,r,"",function(g){return g})):s!=null&&(Da(s)&&(s=Ep(s,r+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(Ld,"$&/")+"/")+t)),e.push(s)),1;if(l=0,o=o===""?".":o+":",_d(t))for(var a=0;a<t.length;a++){i=t[a];var d=o+Ri(i,a);l+=Cs(i,e,r,d,s)}else if(d=Tp(t),typeof d=="function")for(t=d.call(t),a=0;!(i=t.next()).done;)i=i.value,d=o+Ri(i,a++),l+=Cs(i,e,r,d,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function Xo(t,e,r){if(t==null)return t;var o=[],s=0;return Cs(t,o,"","",function(i){return e.call(r,i,s++)}),o}function Dp(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ge={current:null},Is={transition:null},Rp={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:Is,ReactCurrentOwner:Ba};function Wc(){throw Error("act(...) is not supported in production builds of React.")}Ct.Children={map:Xo,forEach:function(t,e,r){Xo(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return Xo(t,function(){e++}),e},toArray:function(t){return Xo(t,function(e){return e})||[]},only:function(t){if(!Da(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ct.Component=Un;Ct.Fragment=vp;Ct.Profiler=kp;Ct.PureComponent=Ta;Ct.StrictMode=xp;Ct.Suspense=Cp;Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rp;Ct.act=Wc;Ct.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=Bc({},t.props),s=t.key,i=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,l=Ba.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(d in e)Fc.call(e,d)&&!Ac.hasOwnProperty(d)&&(o[d]=e[d]===void 0&&a!==void 0?a[d]:e[d])}var d=arguments.length-2;if(d===1)o.children=r;else if(1<d){a=Array(d);for(var g=0;g<d;g++)a[g]=arguments[g+2];o.children=a}return{$$typeof:Oo,type:t.type,key:s,ref:i,props:o,_owner:l}};Ct.createContext=function(t){return t={$$typeof:jp,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:wp,_context:t},t.Consumer=t};Ct.createElement=Mc;Ct.createFactory=function(t){var e=Mc.bind(null,t);return e.type=t,e};Ct.createRef=function(){return{current:null}};Ct.forwardRef=function(t){return{$$typeof:Sp,render:t}};Ct.isValidElement=Da;Ct.lazy=function(t){return{$$typeof:zp,_payload:{_status:-1,_result:t},_init:Dp}};Ct.memo=function(t,e){return{$$typeof:Ip,type:t,compare:e===void 0?null:e}};Ct.startTransition=function(t){var e=Is.transition;Is.transition={};try{t()}finally{Is.transition=e}};Ct.unstable_act=Wc;Ct.useCallback=function(t,e){return ge.current.useCallback(t,e)};Ct.useContext=function(t){return ge.current.useContext(t)};Ct.useDebugValue=function(){};Ct.useDeferredValue=function(t){return ge.current.useDeferredValue(t)};Ct.useEffect=function(t,e){return ge.current.useEffect(t,e)};Ct.useId=function(){return ge.current.useId()};Ct.useImperativeHandle=function(t,e,r){return ge.current.useImperativeHandle(t,e,r)};Ct.useInsertionEffect=function(t,e){return ge.current.useInsertionEffect(t,e)};Ct.useLayoutEffect=function(t,e){return ge.current.useLayoutEffect(t,e)};Ct.useMemo=function(t,e){return ge.current.useMemo(t,e)};Ct.useReducer=function(t,e,r){return ge.current.useReducer(t,e,r)};Ct.useRef=function(t){return ge.current.useRef(t)};Ct.useState=function(t){return ge.current.useState(t)};Ct.useSyncExternalStore=function(t,e,r){return ge.current.useSyncExternalStore(t,e,r)};Ct.useTransition=function(){return ge.current.useTransition()};Ct.version="18.3.1";Tc.exports=Ct;var b=Tc.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp=b,Ap=Symbol.for("react.element"),Mp=Symbol.for("react.fragment"),Wp=Object.prototype.hasOwnProperty,_p=Fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lp={key:!0,ref:!0,__self:!0,__source:!0};function _c(t,e,r){var o,s={},i=null,l=null;r!==void 0&&(i=""+r),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(l=e.ref);for(o in e)Wp.call(e,o)&&!Lp.hasOwnProperty(o)&&(s[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps,e)s[o]===void 0&&(s[o]=e[o]);return{$$typeof:Ap,type:t,key:i,ref:l,props:s,_owner:_p.current}}ci.Fragment=Mp;ci.jsx=_c;ci.jsxs=_c;zc.exports=ci;var n=zc.exports,Lc={exports:{}},Se={},Pc={exports:{}},$c={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,A){var V=F.length;F.push(A);t:for(;0<V;){var W=V-1>>>1,R=F[W];if(0<s(R,A))F[W]=A,F[V]=R,V=W;else break t}}function r(F){return F.length===0?null:F[0]}function o(F){if(F.length===0)return null;var A=F[0],V=F.pop();if(V!==A){F[0]=V;t:for(var W=0,R=F.length,m=R>>>1;W<m;){var N=2*(W+1)-1,ot=F[N],et=N+1,ft=F[et];if(0>s(ot,V))et<R&&0>s(ft,ot)?(F[W]=ft,F[et]=V,W=et):(F[W]=ot,F[N]=V,W=N);else if(et<R&&0>s(ft,V))F[W]=ft,F[et]=V,W=et;else break t}}return A}function s(F,A){var V=F.sortIndex-A.sortIndex;return V!==0?V:F.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();t.unstable_now=function(){return l.now()-a}}var d=[],g=[],h=1,y=null,f=3,w=!1,k=!1,j=!1,I=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function u(F){for(var A=r(g);A!==null;){if(A.callback===null)o(g);else if(A.startTime<=F)o(g),A.sortIndex=A.expirationTime,e(d,A);else break;A=r(g)}}function v(F){if(j=!1,u(F),!k)if(r(d)!==null)k=!0,J(S);else{var A=r(g);A!==null&&D(v,A.startTime-F)}}function S(F,A){k=!1,j&&(j=!1,p(H),H=-1),w=!0;var V=f;try{for(u(A),y=r(d);y!==null&&(!(y.expirationTime>A)||F&&!C());){var W=y.callback;if(typeof W=="function"){y.callback=null,f=y.priorityLevel;var R=W(y.expirationTime<=A);A=t.unstable_now(),typeof R=="function"?y.callback=R:y===r(d)&&o(d),u(A)}else o(d);y=r(d)}if(y!==null)var m=!0;else{var N=r(g);N!==null&&D(v,N.startTime-A),m=!1}return m}finally{y=null,f=V,w=!1}}var z=!1,L=null,H=-1,M=5,$=-1;function C(){return!(t.unstable_now()-$<M)}function B(){if(L!==null){var F=t.unstable_now();$=F;var A=!0;try{A=L(!0,F)}finally{A?x():(z=!1,L=null)}}else z=!1}var x;if(typeof c=="function")x=function(){c(B)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,at=G.port2;G.port1.onmessage=B,x=function(){at.postMessage(null)}}else x=function(){I(B,0)};function J(F){L=F,z||(z=!0,x())}function D(F,A){H=I(function(){F(t.unstable_now())},A)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){k||w||(k=!0,J(S))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(d)},t.unstable_next=function(F){switch(f){case 1:case 2:case 3:var A=3;break;default:A=f}var V=f;f=A;try{return F()}finally{f=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,A){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var V=f;f=F;try{return A()}finally{f=V}},t.unstable_scheduleCallback=function(F,A,V){var W=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?W+V:W):V=W,F){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=V+R,F={id:h++,callback:A,priorityLevel:F,startTime:V,expirationTime:R,sortIndex:-1},V>W?(F.sortIndex=V,e(g,F),r(d)===null&&F===r(g)&&(j?(p(H),H=-1):j=!0,D(v,V-W))):(F.sortIndex=R,e(d,F),k||w||(k=!0,J(S))),F},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(F){var A=f;return function(){var V=f;f=A;try{return F.apply(this,arguments)}finally{f=V}}}})($c);Pc.exports=$c;var Pp=Pc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p=b,je=Pp;function K(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nc=new Set,Co={};function rn(t,e){Wn(t,e),Wn(t+"Capture",e)}function Wn(t,e){for(Co[t]=e,t=0;t<e.length;t++)Nc.add(e[t])}var gr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kl=Object.prototype.hasOwnProperty,Np=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pd={},$d={};function Op(t){return kl.call($d,t)?!0:kl.call(Pd,t)?!1:Np.test(t)?$d[t]=!0:(Pd[t]=!0,!1)}function Hp(t,e,r,o){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Gp(t,e,r,o){if(e===null||typeof e>"u"||Hp(t,e,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ce(t,e,r,o,s,i,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=l}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ee[t]=new ce(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ee[e]=new ce(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ee[t]=new ce(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ee[t]=new ce(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ee[t]=new ce(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ee[t]=new ce(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ee[t]=new ce(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ee[t]=new ce(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ee[t]=new ce(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ra=/[\-:]([a-z])/g;function Fa(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ra,Fa);ee[e]=new ce(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ra,Fa);ee[e]=new ce(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ra,Fa);ee[e]=new ce(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ee[t]=new ce(t,1,!1,t.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ee[t]=new ce(t,1,!1,t.toLowerCase(),null,!0,!0)});function Aa(t,e,r,o){var s=ee.hasOwnProperty(e)?ee[e]:null;(s!==null?s.type!==0:o||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Gp(e,r,s,o)&&(r=null),o||s===null?Op(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):s.mustUseProperty?t[s.propertyName]=r===null?s.type===3?!1:"":r:(e=s.attributeName,o=s.attributeNamespace,r===null?t.removeAttribute(e):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,o?t.setAttributeNS(o,e,r):t.setAttribute(e,r))))}var pr=$p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jo=Symbol.for("react.element"),hn=Symbol.for("react.portal"),yn=Symbol.for("react.fragment"),Ma=Symbol.for("react.strict_mode"),wl=Symbol.for("react.profiler"),Oc=Symbol.for("react.provider"),Hc=Symbol.for("react.context"),Wa=Symbol.for("react.forward_ref"),jl=Symbol.for("react.suspense"),Sl=Symbol.for("react.suspense_list"),_a=Symbol.for("react.memo"),hr=Symbol.for("react.lazy"),Gc=Symbol.for("react.offscreen"),Nd=Symbol.iterator;function Jn(t){return t===null||typeof t!="object"?null:(t=Nd&&t[Nd]||t["@@iterator"],typeof t=="function"?t:null)}var Nt=Object.assign,Fi;function so(t){if(Fi===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);Fi=e&&e[1]||""}return`
`+Fi+t}var Ai=!1;function Mi(t,e){if(!t||Ai)return"";Ai=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(g){var o=g}Reflect.construct(t,[],e)}else{try{e.call()}catch(g){o=g}t.call(e.prototype)}else{try{throw Error()}catch(g){o=g}t()}}catch(g){if(g&&o&&typeof g.stack=="string"){for(var s=g.stack.split(`
`),i=o.stack.split(`
`),l=s.length-1,a=i.length-1;1<=l&&0<=a&&s[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(s[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||s[l]!==i[a]){var d=`
`+s[l].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=l&&0<=a);break}}}finally{Ai=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?so(t):""}function Up(t){switch(t.tag){case 5:return so(t.type);case 16:return so("Lazy");case 13:return so("Suspense");case 19:return so("SuspenseList");case 0:case 2:case 15:return t=Mi(t.type,!1),t;case 11:return t=Mi(t.type.render,!1),t;case 1:return t=Mi(t.type,!0),t;default:return""}}function Cl(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case yn:return"Fragment";case hn:return"Portal";case wl:return"Profiler";case Ma:return"StrictMode";case jl:return"Suspense";case Sl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Hc:return(t.displayName||"Context")+".Consumer";case Oc:return(t._context.displayName||"Context")+".Provider";case Wa:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _a:return e=t.displayName||null,e!==null?e:Cl(t.type)||"Memo";case hr:e=t._payload,t=t._init;try{return Cl(t(e))}catch{}}return null}function Vp(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cl(e);case 8:return e===Ma?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Uc(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Yp(t){var e=Uc(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),o=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,i=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(l){o=""+l,i.call(this,l)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qo(t){t._valueTracker||(t._valueTracker=Yp(t))}function Vc(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),o="";return t&&(o=Uc(t)?t.checked?"true":"false":t.value),t=o,t!==r?(e.setValue(t),!0):!1}function Ls(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Il(t,e){var r=e.checked;return Nt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Od(t,e){var r=e.defaultValue==null?"":e.defaultValue,o=e.checked!=null?e.checked:e.defaultChecked;r=Rr(e.value!=null?e.value:r),t._wrapperState={initialChecked:o,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Yc(t,e){e=e.checked,e!=null&&Aa(t,"checked",e,!1)}function zl(t,e){Yc(t,e);var r=Rr(e.value),o=e.type;if(r!=null)o==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(o==="submit"||o==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Tl(t,e.type,r):e.hasOwnProperty("defaultValue")&&Tl(t,e.type,Rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hd(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var o=e.type;if(!(o!=="submit"&&o!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function Tl(t,e,r){(e!=="number"||Ls(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var io=Array.isArray;function Bn(t,e,r,o){if(t=t.options,e){e={};for(var s=0;s<r.length;s++)e["$"+r[s]]=!0;for(r=0;r<t.length;r++)s=e.hasOwnProperty("$"+t[r].value),t[r].selected!==s&&(t[r].selected=s),s&&o&&(t[r].defaultSelected=!0)}else{for(r=""+Rr(r),e=null,s=0;s<t.length;s++){if(t[s].value===r){t[s].selected=!0,o&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function El(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(K(91));return Nt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gd(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(K(92));if(io(r)){if(1<r.length)throw Error(K(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:Rr(r)}}function Qc(t,e){var r=Rr(e.value),o=Rr(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),o!=null&&(t.defaultValue=""+o)}function Ud(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Kc(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bl(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Kc(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Zo,Xc=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,o,s){MSApp.execUnsafeLocalFunction(function(){return t(e,r,o,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Zo=Zo||document.createElement("div"),Zo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Zo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Io(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qp=["Webkit","ms","Moz","O"];Object.keys(po).forEach(function(t){Qp.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),po[e]=po[t]})});function Jc(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||po.hasOwnProperty(t)&&po[t]?(""+e).trim():e+"px"}function qc(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var o=r.indexOf("--")===0,s=Jc(r,e[r],o);r==="float"&&(r="cssFloat"),o?t.setProperty(r,s):t[r]=s}}var Kp=Nt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dl(t,e){if(e){if(Kp[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(K(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(K(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(K(61))}if(e.style!=null&&typeof e.style!="object")throw Error(K(62))}}function Rl(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fl=null;function La(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Al=null,Dn=null,Rn=null;function Vd(t){if(t=Uo(t)){if(typeof Al!="function")throw Error(K(280));var e=t.stateNode;e&&(e=fi(e),Al(t.stateNode,t.type,e))}}function Zc(t){Dn?Rn?Rn.push(t):Rn=[t]:Dn=t}function tu(){if(Dn){var t=Dn,e=Rn;if(Rn=Dn=null,Vd(t),e)for(t=0;t<e.length;t++)Vd(e[t])}}function eu(t,e){return t(e)}function ru(){}var Wi=!1;function nu(t,e,r){if(Wi)return t(e,r);Wi=!0;try{return eu(t,e,r)}finally{Wi=!1,(Dn!==null||Rn!==null)&&(ru(),tu())}}function zo(t,e){var r=t.stateNode;if(r===null)return null;var o=fi(r);if(o===null)return null;r=o[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(K(231,e,typeof r));return r}var Ml=!1;if(gr)try{var qn={};Object.defineProperty(qn,"passive",{get:function(){Ml=!0}}),window.addEventListener("test",qn,qn),window.removeEventListener("test",qn,qn)}catch{Ml=!1}function Xp(t,e,r,o,s,i,l,a,d){var g=Array.prototype.slice.call(arguments,3);try{e.apply(r,g)}catch(h){this.onError(h)}}var mo=!1,Ps=null,$s=!1,Wl=null,Jp={onError:function(t){mo=!0,Ps=t}};function qp(t,e,r,o,s,i,l,a,d){mo=!1,Ps=null,Xp.apply(Jp,arguments)}function Zp(t,e,r,o,s,i,l,a,d){if(qp.apply(this,arguments),mo){if(mo){var g=Ps;mo=!1,Ps=null}else throw Error(K(198));$s||($s=!0,Wl=g)}}function nn(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function ou(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Yd(t){if(nn(t)!==t)throw Error(K(188))}function tm(t){var e=t.alternate;if(!e){if(e=nn(t),e===null)throw Error(K(188));return e!==t?null:t}for(var r=t,o=e;;){var s=r.return;if(s===null)break;var i=s.alternate;if(i===null){if(o=s.return,o!==null){r=o;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===r)return Yd(s),t;if(i===o)return Yd(s),e;i=i.sibling}throw Error(K(188))}if(r.return!==o.return)r=s,o=i;else{for(var l=!1,a=s.child;a;){if(a===r){l=!0,r=s,o=i;break}if(a===o){l=!0,o=s,r=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===r){l=!0,r=i,o=s;break}if(a===o){l=!0,o=i,r=s;break}a=a.sibling}if(!l)throw Error(K(189))}}if(r.alternate!==o)throw Error(K(190))}if(r.tag!==3)throw Error(K(188));return r.stateNode.current===r?t:e}function su(t){return t=tm(t),t!==null?iu(t):null}function iu(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=iu(t);if(e!==null)return e;t=t.sibling}return null}var lu=je.unstable_scheduleCallback,Qd=je.unstable_cancelCallback,em=je.unstable_shouldYield,rm=je.unstable_requestPaint,Ht=je.unstable_now,nm=je.unstable_getCurrentPriorityLevel,Pa=je.unstable_ImmediatePriority,au=je.unstable_UserBlockingPriority,Ns=je.unstable_NormalPriority,om=je.unstable_LowPriority,du=je.unstable_IdlePriority,ui=null,qe=null;function sm(t){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(ui,t,void 0,(t.current.flags&128)===128)}catch{}}var Pe=Math.clz32?Math.clz32:am,im=Math.log,lm=Math.LN2;function am(t){return t>>>=0,t===0?32:31-(im(t)/lm|0)|0}var ts=64,es=4194304;function lo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Os(t,e){var r=t.pendingLanes;if(r===0)return 0;var o=0,s=t.suspendedLanes,i=t.pingedLanes,l=r&268435455;if(l!==0){var a=l&~s;a!==0?o=lo(a):(i&=l,i!==0&&(o=lo(i)))}else l=r&~s,l!==0?o=lo(l):i!==0&&(o=lo(i));if(o===0)return 0;if(e!==0&&e!==o&&!(e&s)&&(s=o&-o,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(o&4&&(o|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=o;0<e;)r=31-Pe(e),s=1<<r,o|=t[r],e&=~s;return o}function dm(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gm(t,e){for(var r=t.suspendedLanes,o=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var l=31-Pe(i),a=1<<l,d=s[l];d===-1?(!(a&r)||a&o)&&(s[l]=dm(a,e)):d<=e&&(t.expiredLanes|=a),i&=~a}}function _l(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gu(){var t=ts;return ts<<=1,!(ts&4194240)&&(ts=64),t}function _i(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function Ho(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Pe(e),t[e]=r}function cm(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var o=t.eventTimes;for(t=t.expirationTimes;0<r;){var s=31-Pe(r),i=1<<s;e[s]=0,o[s]=-1,t[s]=-1,r&=~i}}function $a(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var o=31-Pe(r),s=1<<o;s&e|t[o]&e&&(t[o]|=e),r&=~s}}var Rt=0;function cu(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var uu,Na,bu,pu,mu,Ll=!1,rs=[],Sr=null,Cr=null,Ir=null,To=new Map,Eo=new Map,vr=[],um="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kd(t,e){switch(t){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":To.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(e.pointerId)}}function Zn(t,e,r,o,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:r,eventSystemFlags:o,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Uo(e),e!==null&&Na(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function bm(t,e,r,o,s){switch(e){case"focusin":return Sr=Zn(Sr,t,e,r,o,s),!0;case"dragenter":return Cr=Zn(Cr,t,e,r,o,s),!0;case"mouseover":return Ir=Zn(Ir,t,e,r,o,s),!0;case"pointerover":var i=s.pointerId;return To.set(i,Zn(To.get(i)||null,t,e,r,o,s)),!0;case"gotpointercapture":return i=s.pointerId,Eo.set(i,Zn(Eo.get(i)||null,t,e,r,o,s)),!0}return!1}function fu(t){var e=Hr(t.target);if(e!==null){var r=nn(e);if(r!==null){if(e=r.tag,e===13){if(e=ou(r),e!==null){t.blockedOn=e,mu(t.priority,function(){bu(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=Pl(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);Fl=o,r.target.dispatchEvent(o),Fl=null}else return e=Uo(r),e!==null&&Na(e),t.blockedOn=r,!1;e.shift()}return!0}function Xd(t,e,r){zs(t)&&r.delete(e)}function pm(){Ll=!1,Sr!==null&&zs(Sr)&&(Sr=null),Cr!==null&&zs(Cr)&&(Cr=null),Ir!==null&&zs(Ir)&&(Ir=null),To.forEach(Xd),Eo.forEach(Xd)}function to(t,e){t.blockedOn===e&&(t.blockedOn=null,Ll||(Ll=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,pm)))}function Bo(t){function e(s){return to(s,t)}if(0<rs.length){to(rs[0],t);for(var r=1;r<rs.length;r++){var o=rs[r];o.blockedOn===t&&(o.blockedOn=null)}}for(Sr!==null&&to(Sr,t),Cr!==null&&to(Cr,t),Ir!==null&&to(Ir,t),To.forEach(e),Eo.forEach(e),r=0;r<vr.length;r++)o=vr[r],o.blockedOn===t&&(o.blockedOn=null);for(;0<vr.length&&(r=vr[0],r.blockedOn===null);)fu(r),r.blockedOn===null&&vr.shift()}var Fn=pr.ReactCurrentBatchConfig,Hs=!0;function mm(t,e,r,o){var s=Rt,i=Fn.transition;Fn.transition=null;try{Rt=1,Oa(t,e,r,o)}finally{Rt=s,Fn.transition=i}}function fm(t,e,r,o){var s=Rt,i=Fn.transition;Fn.transition=null;try{Rt=4,Oa(t,e,r,o)}finally{Rt=s,Fn.transition=i}}function Oa(t,e,r,o){if(Hs){var s=Pl(t,e,r,o);if(s===null)Yi(t,e,o,Gs,r),Kd(t,o);else if(bm(s,t,e,r,o))o.stopPropagation();else if(Kd(t,o),e&4&&-1<um.indexOf(t)){for(;s!==null;){var i=Uo(s);if(i!==null&&uu(i),i=Pl(t,e,r,o),i===null&&Yi(t,e,o,Gs,r),i===s)break;s=i}s!==null&&o.stopPropagation()}else Yi(t,e,o,null,r)}}var Gs=null;function Pl(t,e,r,o){if(Gs=null,t=La(o),t=Hr(t),t!==null)if(e=nn(t),e===null)t=null;else if(r=e.tag,r===13){if(t=ou(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Gs=t,null}function hu(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nm()){case Pa:return 1;case au:return 4;case Ns:case om:return 16;case du:return 536870912;default:return 16}default:return 16}}var wr=null,Ha=null,Ts=null;function yu(){if(Ts)return Ts;var t,e=Ha,r=e.length,o,s="value"in wr?wr.value:wr.textContent,i=s.length;for(t=0;t<r&&e[t]===s[t];t++);var l=r-t;for(o=1;o<=l&&e[r-o]===s[i-o];o++);return Ts=s.slice(t,1<o?1-o:void 0)}function Es(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ns(){return!0}function Jd(){return!1}function Ce(t){function e(r,o,s,i,l){this._reactName=r,this._targetInst=s,this.type=o,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(r=t[a],this[a]=r?r(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ns:Jd,this.isPropagationStopped=Jd,this}return Nt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ns)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ns)},persist:function(){},isPersistent:ns}),e}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ga=Ce(Vn),Go=Nt({},Vn,{view:0,detail:0}),hm=Ce(Go),Li,Pi,eo,bi=Nt({},Go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ua,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==eo&&(eo&&t.type==="mousemove"?(Li=t.screenX-eo.screenX,Pi=t.screenY-eo.screenY):Pi=Li=0,eo=t),Li)},movementY:function(t){return"movementY"in t?t.movementY:Pi}}),qd=Ce(bi),ym=Nt({},bi,{dataTransfer:0}),vm=Ce(ym),xm=Nt({},Go,{relatedTarget:0}),$i=Ce(xm),km=Nt({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),wm=Ce(km),jm=Nt({},Vn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Sm=Ce(jm),Cm=Nt({},Vn,{data:0}),Zd=Ce(Cm),Im={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Em(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Tm[t])?!!e[t]:!1}function Ua(){return Em}var Bm=Nt({},Go,{key:function(t){if(t.key){var e=Im[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Es(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ua,charCode:function(t){return t.type==="keypress"?Es(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Es(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Dm=Ce(Bm),Rm=Nt({},bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tg=Ce(Rm),Fm=Nt({},Go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ua}),Am=Ce(Fm),Mm=Nt({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wm=Ce(Mm),_m=Nt({},bi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Lm=Ce(_m),Pm=[9,13,27,32],Va=gr&&"CompositionEvent"in window,fo=null;gr&&"documentMode"in document&&(fo=document.documentMode);var $m=gr&&"TextEvent"in window&&!fo,vu=gr&&(!Va||fo&&8<fo&&11>=fo),eg=" ",rg=!1;function xu(t,e){switch(t){case"keyup":return Pm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ku(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vn=!1;function Nm(t,e){switch(t){case"compositionend":return ku(e);case"keypress":return e.which!==32?null:(rg=!0,eg);case"textInput":return t=e.data,t===eg&&rg?null:t;default:return null}}function Om(t,e){if(vn)return t==="compositionend"||!Va&&xu(t,e)?(t=yu(),Ts=Ha=wr=null,vn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vu&&e.locale!=="ko"?null:e.data;default:return null}}var Hm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ng(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Hm[t.type]:e==="textarea"}function wu(t,e,r,o){Zc(o),e=Us(e,"onChange"),0<e.length&&(r=new Ga("onChange","change",null,r,o),t.push({event:r,listeners:e}))}var ho=null,Do=null;function Gm(t){Fu(t,0)}function pi(t){var e=wn(t);if(Vc(e))return t}function Um(t,e){if(t==="change")return e}var ju=!1;if(gr){var Ni;if(gr){var Oi="oninput"in document;if(!Oi){var og=document.createElement("div");og.setAttribute("oninput","return;"),Oi=typeof og.oninput=="function"}Ni=Oi}else Ni=!1;ju=Ni&&(!document.documentMode||9<document.documentMode)}function sg(){ho&&(ho.detachEvent("onpropertychange",Su),Do=ho=null)}function Su(t){if(t.propertyName==="value"&&pi(Do)){var e=[];wu(e,Do,t,La(t)),nu(Gm,e)}}function Vm(t,e,r){t==="focusin"?(sg(),ho=e,Do=r,ho.attachEvent("onpropertychange",Su)):t==="focusout"&&sg()}function Ym(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pi(Do)}function Qm(t,e){if(t==="click")return pi(e)}function Km(t,e){if(t==="input"||t==="change")return pi(e)}function Xm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ne=typeof Object.is=="function"?Object.is:Xm;function Ro(t,e){if(Ne(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),o=Object.keys(e);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var s=r[o];if(!kl.call(e,s)||!Ne(t[s],e[s]))return!1}return!0}function ig(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lg(t,e){var r=ig(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=e&&o>=e)return{node:r,offset:e-t};t=o}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=ig(r)}}function Cu(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cu(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Iu(){for(var t=window,e=Ls();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=Ls(t.document)}return e}function Ya(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Jm(t){var e=Iu(),r=t.focusedElem,o=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&Cu(r.ownerDocument.documentElement,r)){if(o!==null&&Ya(r)){if(e=o.start,t=o.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=r.textContent.length,i=Math.min(o.start,s);o=o.end===void 0?i:Math.min(o.end,s),!t.extend&&i>o&&(s=o,o=i,i=s),s=lg(r,i);var l=lg(r,o);s&&l&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>o?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qm=gr&&"documentMode"in document&&11>=document.documentMode,xn=null,$l=null,yo=null,Nl=!1;function ag(t,e,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Nl||xn==null||xn!==Ls(o)||(o=xn,"selectionStart"in o&&Ya(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),yo&&Ro(yo,o)||(yo=o,o=Us($l,"onSelect"),0<o.length&&(e=new Ga("onSelect","select",null,e,r),t.push({event:e,listeners:o}),e.target=xn)))}function os(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var kn={animationend:os("Animation","AnimationEnd"),animationiteration:os("Animation","AnimationIteration"),animationstart:os("Animation","AnimationStart"),transitionend:os("Transition","TransitionEnd")},Hi={},zu={};gr&&(zu=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);function mi(t){if(Hi[t])return Hi[t];if(!kn[t])return t;var e=kn[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in zu)return Hi[t]=e[r];return t}var Tu=mi("animationend"),Eu=mi("animationiteration"),Bu=mi("animationstart"),Du=mi("transitionend"),Ru=new Map,dg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){Ru.set(t,e),rn(e,[t])}for(var Gi=0;Gi<dg.length;Gi++){var Ui=dg[Gi],Zm=Ui.toLowerCase(),tf=Ui[0].toUpperCase()+Ui.slice(1);Ar(Zm,"on"+tf)}Ar(Tu,"onAnimationEnd");Ar(Eu,"onAnimationIteration");Ar(Bu,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(Du,"onTransitionEnd");Wn("onMouseEnter",["mouseout","mouseover"]);Wn("onMouseLeave",["mouseout","mouseover"]);Wn("onPointerEnter",["pointerout","pointerover"]);Wn("onPointerLeave",["pointerout","pointerover"]);rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ef=new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));function gg(t,e,r){var o=t.type||"unknown-event";t.currentTarget=r,Zp(o,e,void 0,t),t.currentTarget=null}function Fu(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],s=o.event;o=o.listeners;t:{var i=void 0;if(e)for(var l=o.length-1;0<=l;l--){var a=o[l],d=a.instance,g=a.currentTarget;if(a=a.listener,d!==i&&s.isPropagationStopped())break t;gg(s,a,g),i=d}else for(l=0;l<o.length;l++){if(a=o[l],d=a.instance,g=a.currentTarget,a=a.listener,d!==i&&s.isPropagationStopped())break t;gg(s,a,g),i=d}}}if($s)throw t=Wl,$s=!1,Wl=null,t}function Wt(t,e){var r=e[Vl];r===void 0&&(r=e[Vl]=new Set);var o=t+"__bubble";r.has(o)||(Au(e,t,2,!1),r.add(o))}function Vi(t,e,r){var o=0;e&&(o|=4),Au(r,t,o,e)}var ss="_reactListening"+Math.random().toString(36).slice(2);function Fo(t){if(!t[ss]){t[ss]=!0,Nc.forEach(function(r){r!=="selectionchange"&&(ef.has(r)||Vi(r,!1,t),Vi(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ss]||(e[ss]=!0,Vi("selectionchange",!1,e))}}function Au(t,e,r,o){switch(hu(e)){case 1:var s=mm;break;case 4:s=fm;break;default:s=Oa}r=s.bind(null,e,r,t),s=void 0,!Ml||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),o?s!==void 0?t.addEventListener(e,r,{capture:!0,passive:s}):t.addEventListener(e,r,!0):s!==void 0?t.addEventListener(e,r,{passive:s}):t.addEventListener(e,r,!1)}function Yi(t,e,r,o,s){var i=o;if(!(e&1)&&!(e&2)&&o!==null)t:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var a=o.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(l===4)for(l=o.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===s||d.nodeType===8&&d.parentNode===s))return;l=l.return}for(;a!==null;){if(l=Hr(a),l===null)return;if(d=l.tag,d===5||d===6){o=i=l;continue t}a=a.parentNode}}o=o.return}nu(function(){var g=i,h=La(r),y=[];t:{var f=Ru.get(t);if(f!==void 0){var w=Ga,k=t;switch(t){case"keypress":if(Es(r)===0)break t;case"keydown":case"keyup":w=Dm;break;case"focusin":k="focus",w=$i;break;case"focusout":k="blur",w=$i;break;case"beforeblur":case"afterblur":w=$i;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=vm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Am;break;case Tu:case Eu:case Bu:w=wm;break;case Du:w=Wm;break;case"scroll":w=hm;break;case"wheel":w=Lm;break;case"copy":case"cut":case"paste":w=Sm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=tg}var j=(e&4)!==0,I=!j&&t==="scroll",p=j?f!==null?f+"Capture":null:f;j=[];for(var c=g,u;c!==null;){u=c;var v=u.stateNode;if(u.tag===5&&v!==null&&(u=v,p!==null&&(v=zo(c,p),v!=null&&j.push(Ao(c,v,u)))),I)break;c=c.return}0<j.length&&(f=new w(f,k,null,r,h),y.push({event:f,listeners:j}))}}if(!(e&7)){t:{if(f=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",f&&r!==Fl&&(k=r.relatedTarget||r.fromElement)&&(Hr(k)||k[cr]))break t;if((w||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,w?(k=r.relatedTarget||r.toElement,w=g,k=k?Hr(k):null,k!==null&&(I=nn(k),k!==I||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=g),w!==k)){if(j=qd,v="onMouseLeave",p="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(j=tg,v="onPointerLeave",p="onPointerEnter",c="pointer"),I=w==null?f:wn(w),u=k==null?f:wn(k),f=new j(v,c+"leave",w,r,h),f.target=I,f.relatedTarget=u,v=null,Hr(h)===g&&(j=new j(p,c+"enter",k,r,h),j.target=u,j.relatedTarget=I,v=j),I=v,w&&k)e:{for(j=w,p=k,c=0,u=j;u;u=un(u))c++;for(u=0,v=p;v;v=un(v))u++;for(;0<c-u;)j=un(j),c--;for(;0<u-c;)p=un(p),u--;for(;c--;){if(j===p||p!==null&&j===p.alternate)break e;j=un(j),p=un(p)}j=null}else j=null;w!==null&&cg(y,f,w,j,!1),k!==null&&I!==null&&cg(y,I,k,j,!0)}}t:{if(f=g?wn(g):window,w=f.nodeName&&f.nodeName.toLowerCase(),w==="select"||w==="input"&&f.type==="file")var S=Um;else if(ng(f))if(ju)S=Km;else{S=Ym;var z=Vm}else(w=f.nodeName)&&w.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=Qm);if(S&&(S=S(t,g))){wu(y,S,r,h);break t}z&&z(t,f,g),t==="focusout"&&(z=f._wrapperState)&&z.controlled&&f.type==="number"&&Tl(f,"number",f.value)}switch(z=g?wn(g):window,t){case"focusin":(ng(z)||z.contentEditable==="true")&&(xn=z,$l=g,yo=null);break;case"focusout":yo=$l=xn=null;break;case"mousedown":Nl=!0;break;case"contextmenu":case"mouseup":case"dragend":Nl=!1,ag(y,r,h);break;case"selectionchange":if(qm)break;case"keydown":case"keyup":ag(y,r,h)}var L;if(Va)t:{switch(t){case"compositionstart":var H="onCompositionStart";break t;case"compositionend":H="onCompositionEnd";break t;case"compositionupdate":H="onCompositionUpdate";break t}H=void 0}else vn?xu(t,r)&&(H="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(H="onCompositionStart");H&&(vu&&r.locale!=="ko"&&(vn||H!=="onCompositionStart"?H==="onCompositionEnd"&&vn&&(L=yu()):(wr=h,Ha="value"in wr?wr.value:wr.textContent,vn=!0)),z=Us(g,H),0<z.length&&(H=new Zd(H,t,null,r,h),y.push({event:H,listeners:z}),L?H.data=L:(L=ku(r),L!==null&&(H.data=L)))),(L=$m?Nm(t,r):Om(t,r))&&(g=Us(g,"onBeforeInput"),0<g.length&&(h=new Zd("onBeforeInput","beforeinput",null,r,h),y.push({event:h,listeners:g}),h.data=L))}Fu(y,e)})}function Ao(t,e,r){return{instance:t,listener:e,currentTarget:r}}function Us(t,e){for(var r=e+"Capture",o=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=zo(t,r),i!=null&&o.unshift(Ao(t,i,s)),i=zo(t,e),i!=null&&o.push(Ao(t,i,s))),t=t.return}return o}function un(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cg(t,e,r,o,s){for(var i=e._reactName,l=[];r!==null&&r!==o;){var a=r,d=a.alternate,g=a.stateNode;if(d!==null&&d===o)break;a.tag===5&&g!==null&&(a=g,s?(d=zo(r,i),d!=null&&l.unshift(Ao(r,d,a))):s||(d=zo(r,i),d!=null&&l.push(Ao(r,d,a)))),r=r.return}l.length!==0&&t.push({event:e,listeners:l})}var rf=/\r\n?/g,nf=/\u0000|\uFFFD/g;function ug(t){return(typeof t=="string"?t:""+t).replace(rf,`
`).replace(nf,"")}function is(t,e,r){if(e=ug(e),ug(t)!==e&&r)throw Error(K(425))}function Vs(){}var Ol=null,Hl=null;function Gl(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ul=typeof setTimeout=="function"?setTimeout:void 0,of=typeof clearTimeout=="function"?clearTimeout:void 0,bg=typeof Promise=="function"?Promise:void 0,sf=typeof queueMicrotask=="function"?queueMicrotask:typeof bg<"u"?function(t){return bg.resolve(null).then(t).catch(lf)}:Ul;function lf(t){setTimeout(function(){throw t})}function Qi(t,e){var r=e,o=0;do{var s=r.nextSibling;if(t.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(o===0){t.removeChild(s),Bo(e);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=s}while(r);Bo(e)}function zr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function pg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var Yn=Math.random().toString(36).slice(2),Je="__reactFiber$"+Yn,Mo="__reactProps$"+Yn,cr="__reactContainer$"+Yn,Vl="__reactEvents$"+Yn,af="__reactListeners$"+Yn,df="__reactHandles$"+Yn;function Hr(t){var e=t[Je];if(e)return e;for(var r=t.parentNode;r;){if(e=r[cr]||r[Je]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=pg(t);t!==null;){if(r=t[Je])return r;t=pg(t)}return e}t=r,r=t.parentNode}return null}function Uo(t){return t=t[Je]||t[cr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function wn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(K(33))}function fi(t){return t[Mo]||null}var Yl=[],jn=-1;function Mr(t){return{current:t}}function _t(t){0>jn||(t.current=Yl[jn],Yl[jn]=null,jn--)}function Mt(t,e){jn++,Yl[jn]=t.current,t.current=e}var Fr={},le=Mr(Fr),me=Mr(!1),Kr=Fr;function _n(t,e){var r=t.type.contextTypes;if(!r)return Fr;var o=t.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===e)return o.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in r)s[i]=e[i];return o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function fe(t){return t=t.childContextTypes,t!=null}function Ys(){_t(me),_t(le)}function mg(t,e,r){if(le.current!==Fr)throw Error(K(168));Mt(le,e),Mt(me,r)}function Mu(t,e,r){var o=t.stateNode;if(e=e.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var s in o)if(!(s in e))throw Error(K(108,Vp(t)||"Unknown",s));return Nt({},r,o)}function Qs(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Fr,Kr=le.current,Mt(le,t),Mt(me,me.current),!0}function fg(t,e,r){var o=t.stateNode;if(!o)throw Error(K(169));r?(t=Mu(t,e,Kr),o.__reactInternalMemoizedMergedChildContext=t,_t(me),_t(le),Mt(le,t)):_t(me),Mt(me,r)}var ir=null,hi=!1,Ki=!1;function Wu(t){ir===null?ir=[t]:ir.push(t)}function gf(t){hi=!0,Wu(t)}function Wr(){if(!Ki&&ir!==null){Ki=!0;var t=0,e=Rt;try{var r=ir;for(Rt=1;t<r.length;t++){var o=r[t];do o=o(!0);while(o!==null)}ir=null,hi=!1}catch(s){throw ir!==null&&(ir=ir.slice(t+1)),lu(Pa,Wr),s}finally{Rt=e,Ki=!1}}return null}var Sn=[],Cn=0,Ks=null,Xs=0,Ee=[],Be=0,Xr=null,lr=1,ar="";function Pr(t,e){Sn[Cn++]=Xs,Sn[Cn++]=Ks,Ks=t,Xs=e}function _u(t,e,r){Ee[Be++]=lr,Ee[Be++]=ar,Ee[Be++]=Xr,Xr=t;var o=lr;t=ar;var s=32-Pe(o)-1;o&=~(1<<s),r+=1;var i=32-Pe(e)+s;if(30<i){var l=s-s%5;i=(o&(1<<l)-1).toString(32),o>>=l,s-=l,lr=1<<32-Pe(e)+s|r<<s|o,ar=i+t}else lr=1<<i|r<<s|o,ar=t}function Qa(t){t.return!==null&&(Pr(t,1),_u(t,1,0))}function Ka(t){for(;t===Ks;)Ks=Sn[--Cn],Sn[Cn]=null,Xs=Sn[--Cn],Sn[Cn]=null;for(;t===Xr;)Xr=Ee[--Be],Ee[Be]=null,ar=Ee[--Be],Ee[Be]=null,lr=Ee[--Be],Ee[Be]=null}var we=null,ke=null,Lt=!1,Le=null;function Lu(t,e){var r=De(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function hg(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,we=t,ke=zr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,we=t,ke=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=Xr!==null?{id:lr,overflow:ar}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=De(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,we=t,ke=null,!0):!1;default:return!1}}function Ql(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Kl(t){if(Lt){var e=ke;if(e){var r=e;if(!hg(t,e)){if(Ql(t))throw Error(K(418));e=zr(r.nextSibling);var o=we;e&&hg(t,e)?Lu(o,r):(t.flags=t.flags&-4097|2,Lt=!1,we=t)}}else{if(Ql(t))throw Error(K(418));t.flags=t.flags&-4097|2,Lt=!1,we=t}}}function yg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;we=t}function ls(t){if(t!==we)return!1;if(!Lt)return yg(t),Lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Gl(t.type,t.memoizedProps)),e&&(e=ke)){if(Ql(t))throw Pu(),Error(K(418));for(;e;)Lu(t,e),e=zr(e.nextSibling)}if(yg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(K(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){ke=zr(t.nextSibling);break t}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}ke=null}}else ke=we?zr(t.stateNode.nextSibling):null;return!0}function Pu(){for(var t=ke;t;)t=zr(t.nextSibling)}function Ln(){ke=we=null,Lt=!1}function Xa(t){Le===null?Le=[t]:Le.push(t)}var cf=pr.ReactCurrentBatchConfig;function ro(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(K(309));var o=r.stateNode}if(!o)throw Error(K(147,t));var s=o,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(l){var a=s.refs;l===null?delete a[i]:a[i]=l},e._stringRef=i,e)}if(typeof t!="string")throw Error(K(284));if(!r._owner)throw Error(K(290,t))}return t}function as(t,e){throw t=Object.prototype.toString.call(e),Error(K(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vg(t){var e=t._init;return e(t._payload)}function $u(t){function e(p,c){if(t){var u=p.deletions;u===null?(p.deletions=[c],p.flags|=16):u.push(c)}}function r(p,c){if(!t)return null;for(;c!==null;)e(p,c),c=c.sibling;return null}function o(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function s(p,c){return p=Dr(p,c),p.index=0,p.sibling=null,p}function i(p,c,u){return p.index=u,t?(u=p.alternate,u!==null?(u=u.index,u<c?(p.flags|=2,c):u):(p.flags|=2,c)):(p.flags|=1048576,c)}function l(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,c,u,v){return c===null||c.tag!==6?(c=rl(u,p.mode,v),c.return=p,c):(c=s(c,u),c.return=p,c)}function d(p,c,u,v){var S=u.type;return S===yn?h(p,c,u.props.children,v,u.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===hr&&vg(S)===c.type)?(v=s(c,u.props),v.ref=ro(p,c,u),v.return=p,v):(v=Ws(u.type,u.key,u.props,null,p.mode,v),v.ref=ro(p,c,u),v.return=p,v)}function g(p,c,u,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==u.containerInfo||c.stateNode.implementation!==u.implementation?(c=nl(u,p.mode,v),c.return=p,c):(c=s(c,u.children||[]),c.return=p,c)}function h(p,c,u,v,S){return c===null||c.tag!==7?(c=Qr(u,p.mode,v,S),c.return=p,c):(c=s(c,u),c.return=p,c)}function y(p,c,u){if(typeof c=="string"&&c!==""||typeof c=="number")return c=rl(""+c,p.mode,u),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Jo:return u=Ws(c.type,c.key,c.props,null,p.mode,u),u.ref=ro(p,null,c),u.return=p,u;case hn:return c=nl(c,p.mode,u),c.return=p,c;case hr:var v=c._init;return y(p,v(c._payload),u)}if(io(c)||Jn(c))return c=Qr(c,p.mode,u,null),c.return=p,c;as(p,c)}return null}function f(p,c,u,v){var S=c!==null?c.key:null;if(typeof u=="string"&&u!==""||typeof u=="number")return S!==null?null:a(p,c,""+u,v);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Jo:return u.key===S?d(p,c,u,v):null;case hn:return u.key===S?g(p,c,u,v):null;case hr:return S=u._init,f(p,c,S(u._payload),v)}if(io(u)||Jn(u))return S!==null?null:h(p,c,u,v,null);as(p,u)}return null}function w(p,c,u,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(u)||null,a(c,p,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Jo:return p=p.get(v.key===null?u:v.key)||null,d(c,p,v,S);case hn:return p=p.get(v.key===null?u:v.key)||null,g(c,p,v,S);case hr:var z=v._init;return w(p,c,u,z(v._payload),S)}if(io(v)||Jn(v))return p=p.get(u)||null,h(c,p,v,S,null);as(c,v)}return null}function k(p,c,u,v){for(var S=null,z=null,L=c,H=c=0,M=null;L!==null&&H<u.length;H++){L.index>H?(M=L,L=null):M=L.sibling;var $=f(p,L,u[H],v);if($===null){L===null&&(L=M);break}t&&L&&$.alternate===null&&e(p,L),c=i($,c,H),z===null?S=$:z.sibling=$,z=$,L=M}if(H===u.length)return r(p,L),Lt&&Pr(p,H),S;if(L===null){for(;H<u.length;H++)L=y(p,u[H],v),L!==null&&(c=i(L,c,H),z===null?S=L:z.sibling=L,z=L);return Lt&&Pr(p,H),S}for(L=o(p,L);H<u.length;H++)M=w(L,p,H,u[H],v),M!==null&&(t&&M.alternate!==null&&L.delete(M.key===null?H:M.key),c=i(M,c,H),z===null?S=M:z.sibling=M,z=M);return t&&L.forEach(function(C){return e(p,C)}),Lt&&Pr(p,H),S}function j(p,c,u,v){var S=Jn(u);if(typeof S!="function")throw Error(K(150));if(u=S.call(u),u==null)throw Error(K(151));for(var z=S=null,L=c,H=c=0,M=null,$=u.next();L!==null&&!$.done;H++,$=u.next()){L.index>H?(M=L,L=null):M=L.sibling;var C=f(p,L,$.value,v);if(C===null){L===null&&(L=M);break}t&&L&&C.alternate===null&&e(p,L),c=i(C,c,H),z===null?S=C:z.sibling=C,z=C,L=M}if($.done)return r(p,L),Lt&&Pr(p,H),S;if(L===null){for(;!$.done;H++,$=u.next())$=y(p,$.value,v),$!==null&&(c=i($,c,H),z===null?S=$:z.sibling=$,z=$);return Lt&&Pr(p,H),S}for(L=o(p,L);!$.done;H++,$=u.next())$=w(L,p,H,$.value,v),$!==null&&(t&&$.alternate!==null&&L.delete($.key===null?H:$.key),c=i($,c,H),z===null?S=$:z.sibling=$,z=$);return t&&L.forEach(function(B){return e(p,B)}),Lt&&Pr(p,H),S}function I(p,c,u,v){if(typeof u=="object"&&u!==null&&u.type===yn&&u.key===null&&(u=u.props.children),typeof u=="object"&&u!==null){switch(u.$$typeof){case Jo:t:{for(var S=u.key,z=c;z!==null;){if(z.key===S){if(S=u.type,S===yn){if(z.tag===7){r(p,z.sibling),c=s(z,u.props.children),c.return=p,p=c;break t}}else if(z.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===hr&&vg(S)===z.type){r(p,z.sibling),c=s(z,u.props),c.ref=ro(p,z,u),c.return=p,p=c;break t}r(p,z);break}else e(p,z);z=z.sibling}u.type===yn?(c=Qr(u.props.children,p.mode,v,u.key),c.return=p,p=c):(v=Ws(u.type,u.key,u.props,null,p.mode,v),v.ref=ro(p,c,u),v.return=p,p=v)}return l(p);case hn:t:{for(z=u.key;c!==null;){if(c.key===z)if(c.tag===4&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){r(p,c.sibling),c=s(c,u.children||[]),c.return=p,p=c;break t}else{r(p,c);break}else e(p,c);c=c.sibling}c=nl(u,p.mode,v),c.return=p,p=c}return l(p);case hr:return z=u._init,I(p,c,z(u._payload),v)}if(io(u))return k(p,c,u,v);if(Jn(u))return j(p,c,u,v);as(p,u)}return typeof u=="string"&&u!==""||typeof u=="number"?(u=""+u,c!==null&&c.tag===6?(r(p,c.sibling),c=s(c,u),c.return=p,p=c):(r(p,c),c=rl(u,p.mode,v),c.return=p,p=c),l(p)):r(p,c)}return I}var Pn=$u(!0),Nu=$u(!1),Js=Mr(null),qs=null,In=null,Ja=null;function qa(){Ja=In=qs=null}function Za(t){var e=Js.current;_t(Js),t._currentValue=e}function Xl(t,e,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===r)break;t=t.return}}function An(t,e){qs=t,Ja=In=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pe=!0),t.firstContext=null)}function Fe(t){var e=t._currentValue;if(Ja!==t)if(t={context:t,memoizedValue:e,next:null},In===null){if(qs===null)throw Error(K(308));In=t,qs.dependencies={lanes:0,firstContext:t}}else In=In.next=t;return e}var Gr=null;function td(t){Gr===null?Gr=[t]:Gr.push(t)}function Ou(t,e,r,o){var s=e.interleaved;return s===null?(r.next=r,td(e)):(r.next=s.next,s.next=r),e.interleaved=r,ur(t,o)}function ur(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var yr=!1;function ed(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function dr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Tr(t,e,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,Bt&2){var s=o.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),o.pending=e,ur(t,r)}return s=o.interleaved,s===null?(e.next=e,td(o)):(e.next=s.next,s.next=e),o.interleaved=e,ur(t,r)}function Bs(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var o=e.lanes;o&=t.pendingLanes,r|=o,e.lanes=r,$a(t,r)}}function xg(t,e){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var s=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?s=i=l:i=i.next=l,r=r.next}while(r!==null);i===null?s=i=e:i=i.next=e}else s=i=e;r={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:o.shared,effects:o.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function Zs(t,e,r,o){var s=t.updateQueue;yr=!1;var i=s.firstBaseUpdate,l=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var d=a,g=d.next;d.next=null,l===null?i=g:l.next=g,l=d;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=g:a.next=g,h.lastBaseUpdate=d))}if(i!==null){var y=s.baseState;l=0,h=g=d=null,a=i;do{var f=a.lane,w=a.eventTime;if((o&f)===f){h!==null&&(h=h.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});t:{var k=t,j=a;switch(f=e,w=r,j.tag){case 1:if(k=j.payload,typeof k=="function"){y=k.call(w,y,f);break t}y=k;break t;case 3:k.flags=k.flags&-65537|128;case 0:if(k=j.payload,f=typeof k=="function"?k.call(w,y,f):k,f==null)break t;y=Nt({},y,f);break t;case 2:yr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=s.effects,f===null?s.effects=[a]:f.push(a))}else w={eventTime:w,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(g=h=w,d=y):h=h.next=w,l|=f;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;f=a,a=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(h===null&&(d=y),s.baseState=d,s.firstBaseUpdate=g,s.lastBaseUpdate=h,e=s.shared.interleaved,e!==null){s=e;do l|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);qr|=l,t.lanes=l,t.memoizedState=y}}function kg(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var o=t[e],s=o.callback;if(s!==null){if(o.callback=null,o=r,typeof s!="function")throw Error(K(191,s));s.call(o)}}}var Vo={},Ze=Mr(Vo),Wo=Mr(Vo),_o=Mr(Vo);function Ur(t){if(t===Vo)throw Error(K(174));return t}function rd(t,e){switch(Mt(_o,e),Mt(Wo,t),Mt(Ze,Vo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bl(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bl(e,t)}_t(Ze),Mt(Ze,e)}function $n(){_t(Ze),_t(Wo),_t(_o)}function Gu(t){Ur(_o.current);var e=Ur(Ze.current),r=Bl(e,t.type);e!==r&&(Mt(Wo,t),Mt(Ze,r))}function nd(t){Wo.current===t&&(_t(Ze),_t(Wo))}var Pt=Mr(0);function ti(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xi=[];function od(){for(var t=0;t<Xi.length;t++)Xi[t]._workInProgressVersionPrimary=null;Xi.length=0}var Ds=pr.ReactCurrentDispatcher,Ji=pr.ReactCurrentBatchConfig,Jr=0,$t=null,Vt=null,Kt=null,ei=!1,vo=!1,Lo=0,uf=0;function ne(){throw Error(K(321))}function sd(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!Ne(t[r],e[r]))return!1;return!0}function id(t,e,r,o,s,i){if(Jr=i,$t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ds.current=t===null||t.memoizedState===null?ff:hf,t=r(o,s),vo){i=0;do{if(vo=!1,Lo=0,25<=i)throw Error(K(301));i+=1,Kt=Vt=null,e.updateQueue=null,Ds.current=yf,t=r(o,s)}while(vo)}if(Ds.current=ri,e=Vt!==null&&Vt.next!==null,Jr=0,Kt=Vt=$t=null,ei=!1,e)throw Error(K(300));return t}function ld(){var t=Lo!==0;return Lo=0,t}function Qe(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kt===null?$t.memoizedState=Kt=t:Kt=Kt.next=t,Kt}function Ae(){if(Vt===null){var t=$t.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var e=Kt===null?$t.memoizedState:Kt.next;if(e!==null)Kt=e,Vt=t;else{if(t===null)throw Error(K(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},Kt===null?$t.memoizedState=Kt=t:Kt=Kt.next=t}return Kt}function Po(t,e){return typeof e=="function"?e(t):e}function qi(t){var e=Ae(),r=e.queue;if(r===null)throw Error(K(311));r.lastRenderedReducer=t;var o=Vt,s=o.baseQueue,i=r.pending;if(i!==null){if(s!==null){var l=s.next;s.next=i.next,i.next=l}o.baseQueue=s=i,r.pending=null}if(s!==null){i=s.next,o=o.baseState;var a=l=null,d=null,g=i;do{var h=g.lane;if((Jr&h)===h)d!==null&&(d=d.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),o=g.hasEagerState?g.eagerState:t(o,g.action);else{var y={lane:h,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};d===null?(a=d=y,l=o):d=d.next=y,$t.lanes|=h,qr|=h}g=g.next}while(g!==null&&g!==i);d===null?l=o:d.next=a,Ne(o,e.memoizedState)||(pe=!0),e.memoizedState=o,e.baseState=l,e.baseQueue=d,r.lastRenderedState=o}if(t=r.interleaved,t!==null){s=t;do i=s.lane,$t.lanes|=i,qr|=i,s=s.next;while(s!==t)}else s===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Zi(t){var e=Ae(),r=e.queue;if(r===null)throw Error(K(311));r.lastRenderedReducer=t;var o=r.dispatch,s=r.pending,i=e.memoizedState;if(s!==null){r.pending=null;var l=s=s.next;do i=t(i,l.action),l=l.next;while(l!==s);Ne(i,e.memoizedState)||(pe=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),r.lastRenderedState=i}return[i,o]}function Uu(){}function Vu(t,e){var r=$t,o=Ae(),s=e(),i=!Ne(o.memoizedState,s);if(i&&(o.memoizedState=s,pe=!0),o=o.queue,ad(Ku.bind(null,r,o,t),[t]),o.getSnapshot!==e||i||Kt!==null&&Kt.memoizedState.tag&1){if(r.flags|=2048,$o(9,Qu.bind(null,r,o,s,e),void 0,null),Xt===null)throw Error(K(349));Jr&30||Yu(r,e,s)}return s}function Yu(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=$t.updateQueue,e===null?(e={lastEffect:null,stores:null},$t.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function Qu(t,e,r,o){e.value=r,e.getSnapshot=o,Xu(e)&&Ju(t)}function Ku(t,e,r){return r(function(){Xu(e)&&Ju(t)})}function Xu(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!Ne(t,r)}catch{return!0}}function Ju(t){var e=ur(t,1);e!==null&&$e(e,t,1,-1)}function wg(t){var e=Qe();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:t},e.queue=t,t=t.dispatch=mf.bind(null,$t,t),[e.memoizedState,t]}function $o(t,e,r,o){return t={tag:t,create:e,destroy:r,deps:o,next:null},e=$t.updateQueue,e===null?(e={lastEffect:null,stores:null},$t.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,e.lastEffect=t)),t}function qu(){return Ae().memoizedState}function Rs(t,e,r,o){var s=Qe();$t.flags|=t,s.memoizedState=$o(1|e,r,void 0,o===void 0?null:o)}function yi(t,e,r,o){var s=Ae();o=o===void 0?null:o;var i=void 0;if(Vt!==null){var l=Vt.memoizedState;if(i=l.destroy,o!==null&&sd(o,l.deps)){s.memoizedState=$o(e,r,i,o);return}}$t.flags|=t,s.memoizedState=$o(1|e,r,i,o)}function jg(t,e){return Rs(8390656,8,t,e)}function ad(t,e){return yi(2048,8,t,e)}function Zu(t,e){return yi(4,2,t,e)}function tb(t,e){return yi(4,4,t,e)}function eb(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function rb(t,e,r){return r=r!=null?r.concat([t]):null,yi(4,4,eb.bind(null,e,t),r)}function dd(){}function nb(t,e){var r=Ae();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&sd(e,o[1])?o[0]:(r.memoizedState=[t,e],t)}function ob(t,e){var r=Ae();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&sd(e,o[1])?o[0]:(t=t(),r.memoizedState=[t,e],t)}function sb(t,e,r){return Jr&21?(Ne(r,e)||(r=gu(),$t.lanes|=r,qr|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pe=!0),t.memoizedState=r)}function bf(t,e){var r=Rt;Rt=r!==0&&4>r?r:4,t(!0);var o=Ji.transition;Ji.transition={};try{t(!1),e()}finally{Rt=r,Ji.transition=o}}function ib(){return Ae().memoizedState}function pf(t,e,r){var o=Br(t);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},lb(t))ab(e,r);else if(r=Ou(t,e,r,o),r!==null){var s=de();$e(r,t,o,s),db(r,e,o)}}function mf(t,e,r){var o=Br(t),s={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(lb(t))ab(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var l=e.lastRenderedState,a=i(l,r);if(s.hasEagerState=!0,s.eagerState=a,Ne(a,l)){var d=e.interleaved;d===null?(s.next=s,td(e)):(s.next=d.next,d.next=s),e.interleaved=s;return}}catch{}finally{}r=Ou(t,e,s,o),r!==null&&(s=de(),$e(r,t,o,s),db(r,e,o))}}function lb(t){var e=t.alternate;return t===$t||e!==null&&e===$t}function ab(t,e){vo=ei=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function db(t,e,r){if(r&4194240){var o=e.lanes;o&=t.pendingLanes,r|=o,e.lanes=r,$a(t,r)}}var ri={readContext:Fe,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},ff={readContext:Fe,useCallback:function(t,e){return Qe().memoizedState=[t,e===void 0?null:e],t},useContext:Fe,useEffect:jg,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,Rs(4194308,4,eb.bind(null,e,t),r)},useLayoutEffect:function(t,e){return Rs(4194308,4,t,e)},useInsertionEffect:function(t,e){return Rs(4,2,t,e)},useMemo:function(t,e){var r=Qe();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var o=Qe();return e=r!==void 0?r(e):e,o.memoizedState=o.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},o.queue=t,t=t.dispatch=pf.bind(null,$t,t),[o.memoizedState,t]},useRef:function(t){var e=Qe();return t={current:t},e.memoizedState=t},useState:wg,useDebugValue:dd,useDeferredValue:function(t){return Qe().memoizedState=t},useTransition:function(){var t=wg(!1),e=t[0];return t=bf.bind(null,t[1]),Qe().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var o=$t,s=Qe();if(Lt){if(r===void 0)throw Error(K(407));r=r()}else{if(r=e(),Xt===null)throw Error(K(349));Jr&30||Yu(o,e,r)}s.memoizedState=r;var i={value:r,getSnapshot:e};return s.queue=i,jg(Ku.bind(null,o,i,t),[t]),o.flags|=2048,$o(9,Qu.bind(null,o,i,r,e),void 0,null),r},useId:function(){var t=Qe(),e=Xt.identifierPrefix;if(Lt){var r=ar,o=lr;r=(o&~(1<<32-Pe(o)-1)).toString(32)+r,e=":"+e+"R"+r,r=Lo++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=uf++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},hf={readContext:Fe,useCallback:nb,useContext:Fe,useEffect:ad,useImperativeHandle:rb,useInsertionEffect:Zu,useLayoutEffect:tb,useMemo:ob,useReducer:qi,useRef:qu,useState:function(){return qi(Po)},useDebugValue:dd,useDeferredValue:function(t){var e=Ae();return sb(e,Vt.memoizedState,t)},useTransition:function(){var t=qi(Po)[0],e=Ae().memoizedState;return[t,e]},useMutableSource:Uu,useSyncExternalStore:Vu,useId:ib,unstable_isNewReconciler:!1},yf={readContext:Fe,useCallback:nb,useContext:Fe,useEffect:ad,useImperativeHandle:rb,useInsertionEffect:Zu,useLayoutEffect:tb,useMemo:ob,useReducer:Zi,useRef:qu,useState:function(){return Zi(Po)},useDebugValue:dd,useDeferredValue:function(t){var e=Ae();return Vt===null?e.memoizedState=t:sb(e,Vt.memoizedState,t)},useTransition:function(){var t=Zi(Po)[0],e=Ae().memoizedState;return[t,e]},useMutableSource:Uu,useSyncExternalStore:Vu,useId:ib,unstable_isNewReconciler:!1};function We(t,e){if(t&&t.defaultProps){e=Nt({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function Jl(t,e,r,o){e=t.memoizedState,r=r(o,e),r=r==null?e:Nt({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var vi={isMounted:function(t){return(t=t._reactInternals)?nn(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var o=de(),s=Br(t),i=dr(o,s);i.payload=e,r!=null&&(i.callback=r),e=Tr(t,i,s),e!==null&&($e(e,t,s,o),Bs(e,t,s))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var o=de(),s=Br(t),i=dr(o,s);i.tag=1,i.payload=e,r!=null&&(i.callback=r),e=Tr(t,i,s),e!==null&&($e(e,t,s,o),Bs(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=de(),o=Br(t),s=dr(r,o);s.tag=2,e!=null&&(s.callback=e),e=Tr(t,s,o),e!==null&&($e(e,t,o,r),Bs(e,t,o))}};function Sg(t,e,r,o,s,i,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,i,l):e.prototype&&e.prototype.isPureReactComponent?!Ro(r,o)||!Ro(s,i):!0}function gb(t,e,r){var o=!1,s=Fr,i=e.contextType;return typeof i=="object"&&i!==null?i=Fe(i):(s=fe(e)?Kr:le.current,o=e.contextTypes,i=(o=o!=null)?_n(t,s):Fr),e=new e(r,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vi,t.stateNode=e,e._reactInternals=t,o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Cg(t,e,r,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,o),e.state!==t&&vi.enqueueReplaceState(e,e.state,null)}function ql(t,e,r,o){var s=t.stateNode;s.props=r,s.state=t.memoizedState,s.refs={},ed(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Fe(i):(i=fe(e)?Kr:le.current,s.context=_n(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Jl(t,e,i,r),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&vi.enqueueReplaceState(s,s.state,null),Zs(t,r,s,o),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Nn(t,e){try{var r="",o=e;do r+=Up(o),o=o.return;while(o);var s=r}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function tl(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function Zl(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var vf=typeof WeakMap=="function"?WeakMap:Map;function cb(t,e,r){r=dr(-1,r),r.tag=3,r.payload={element:null};var o=e.value;return r.callback=function(){oi||(oi=!0,da=o),Zl(t,e)},r}function ub(t,e,r){r=dr(-1,r),r.tag=3;var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var s=e.value;r.payload=function(){return o(s)},r.callback=function(){Zl(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Zl(t,e),typeof o!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),r}function Ig(t,e,r){var o=t.pingCache;if(o===null){o=t.pingCache=new vf;var s=new Set;o.set(e,s)}else s=o.get(e),s===void 0&&(s=new Set,o.set(e,s));s.has(r)||(s.add(r),t=Ff.bind(null,t,e,r),e.then(t,t))}function zg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Tg(t,e,r,o,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=dr(-1,1),e.tag=2,Tr(r,e,1))),r.lanes|=1),t)}var xf=pr.ReactCurrentOwner,pe=!1;function ae(t,e,r,o){e.child=t===null?Nu(e,null,r,o):Pn(e,t.child,r,o)}function Eg(t,e,r,o,s){r=r.render;var i=e.ref;return An(e,s),o=id(t,e,r,o,i,s),r=ld(),t!==null&&!pe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,br(t,e,s)):(Lt&&r&&Qa(e),e.flags|=1,ae(t,e,o,s),e.child)}function Bg(t,e,r,o,s){if(t===null){var i=r.type;return typeof i=="function"&&!hd(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=i,bb(t,e,i,o,s)):(t=Ws(r.type,null,o,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var l=i.memoizedProps;if(r=r.compare,r=r!==null?r:Ro,r(l,o)&&t.ref===e.ref)return br(t,e,s)}return e.flags|=1,t=Dr(i,o),t.ref=e.ref,t.return=e,e.child=t}function bb(t,e,r,o,s){if(t!==null){var i=t.memoizedProps;if(Ro(i,o)&&t.ref===e.ref)if(pe=!1,e.pendingProps=o=i,(t.lanes&s)!==0)t.flags&131072&&(pe=!0);else return e.lanes=t.lanes,br(t,e,s)}return ta(t,e,r,o,s)}function pb(t,e,r){var o=e.pendingProps,s=o.children,i=t!==null?t.memoizedState:null;if(o.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Mt(Tn,ve),ve|=r;else{if(!(r&1073741824))return t=i!==null?i.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Mt(Tn,ve),ve|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:r,Mt(Tn,ve),ve|=o}else i!==null?(o=i.baseLanes|r,e.memoizedState=null):o=r,Mt(Tn,ve),ve|=o;return ae(t,e,s,r),e.child}function mb(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function ta(t,e,r,o,s){var i=fe(r)?Kr:le.current;return i=_n(e,i),An(e,s),r=id(t,e,r,o,i,s),o=ld(),t!==null&&!pe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,br(t,e,s)):(Lt&&o&&Qa(e),e.flags|=1,ae(t,e,r,s),e.child)}function Dg(t,e,r,o,s){if(fe(r)){var i=!0;Qs(e)}else i=!1;if(An(e,s),e.stateNode===null)Fs(t,e),gb(e,r,o),ql(e,r,o,s),o=!0;else if(t===null){var l=e.stateNode,a=e.memoizedProps;l.props=a;var d=l.context,g=r.contextType;typeof g=="object"&&g!==null?g=Fe(g):(g=fe(r)?Kr:le.current,g=_n(e,g));var h=r.getDerivedStateFromProps,y=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";y||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==o||d!==g)&&Cg(e,l,o,g),yr=!1;var f=e.memoizedState;l.state=f,Zs(e,o,l,s),d=e.memoizedState,a!==o||f!==d||me.current||yr?(typeof h=="function"&&(Jl(e,r,h,o),d=e.memoizedState),(a=yr||Sg(e,r,a,o,f,d,g))?(y||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=d),l.props=o,l.state=d,l.context=g,o=a):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{l=e.stateNode,Hu(t,e),a=e.memoizedProps,g=e.type===e.elementType?a:We(e.type,a),l.props=g,y=e.pendingProps,f=l.context,d=r.contextType,typeof d=="object"&&d!==null?d=Fe(d):(d=fe(r)?Kr:le.current,d=_n(e,d));var w=r.getDerivedStateFromProps;(h=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==y||f!==d)&&Cg(e,l,o,d),yr=!1,f=e.memoizedState,l.state=f,Zs(e,o,l,s);var k=e.memoizedState;a!==y||f!==k||me.current||yr?(typeof w=="function"&&(Jl(e,r,w,o),k=e.memoizedState),(g=yr||Sg(e,r,g,o,f,k,d)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,k,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,k,d)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=k),l.props=o,l.state=k,l.context=d,o=g):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),o=!1)}return ea(t,e,r,o,i,s)}function ea(t,e,r,o,s,i){mb(t,e);var l=(e.flags&128)!==0;if(!o&&!l)return s&&fg(e,r,!1),br(t,e,i);o=e.stateNode,xf.current=e;var a=l&&typeof r.getDerivedStateFromError!="function"?null:o.render();return e.flags|=1,t!==null&&l?(e.child=Pn(e,t.child,null,i),e.child=Pn(e,null,a,i)):ae(t,e,a,i),e.memoizedState=o.state,s&&fg(e,r,!0),e.child}function fb(t){var e=t.stateNode;e.pendingContext?mg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mg(t,e.context,!1),rd(t,e.containerInfo)}function Rg(t,e,r,o,s){return Ln(),Xa(s),e.flags|=256,ae(t,e,r,o),e.child}var ra={dehydrated:null,treeContext:null,retryLane:0};function na(t){return{baseLanes:t,cachePool:null,transitions:null}}function hb(t,e,r){var o=e.pendingProps,s=Pt.current,i=!1,l=(e.flags&128)!==0,a;if((a=l)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Mt(Pt,s&1),t===null)return Kl(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=o.children,t=o.fallback,i?(o=e.mode,i=e.child,l={mode:"hidden",children:l},!(o&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=wi(l,o,0,null),t=Qr(t,o,r,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=na(r),e.memoizedState=ra,t):gd(e,l));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return kf(t,e,l,o,a,s,r);if(i){i=o.fallback,l=e.mode,s=t.child,a=s.sibling;var d={mode:"hidden",children:o.children};return!(l&1)&&e.child!==s?(o=e.child,o.childLanes=0,o.pendingProps=d,e.deletions=null):(o=Dr(s,d),o.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=Dr(a,i):(i=Qr(i,l,r,null),i.flags|=2),i.return=e,o.return=e,o.sibling=i,e.child=o,o=i,i=e.child,l=t.child.memoizedState,l=l===null?na(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=t.childLanes&~r,e.memoizedState=ra,o}return i=t.child,t=i.sibling,o=Dr(i,{mode:"visible",children:o.children}),!(e.mode&1)&&(o.lanes=r),o.return=e,o.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=o,e.memoizedState=null,o}function gd(t,e){return e=wi({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ds(t,e,r,o){return o!==null&&Xa(o),Pn(e,t.child,null,r),t=gd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function kf(t,e,r,o,s,i,l){if(r)return e.flags&256?(e.flags&=-257,o=tl(Error(K(422))),ds(t,e,l,o)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=o.fallback,s=e.mode,o=wi({mode:"visible",children:o.children},s,0,null),i=Qr(i,s,l,null),i.flags|=2,o.return=e,i.return=e,o.sibling=i,e.child=o,e.mode&1&&Pn(e,t.child,null,l),e.child.memoizedState=na(l),e.memoizedState=ra,i);if(!(e.mode&1))return ds(t,e,l,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var a=o.dgst;return o=a,i=Error(K(419)),o=tl(i,o,void 0),ds(t,e,l,o)}if(a=(l&t.childLanes)!==0,pe||a){if(o=Xt,o!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(o.suspendedLanes|l)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,ur(t,s),$e(o,t,s,-1))}return fd(),o=tl(Error(K(421))),ds(t,e,l,o)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=Af.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,ke=zr(s.nextSibling),we=e,Lt=!0,Le=null,t!==null&&(Ee[Be++]=lr,Ee[Be++]=ar,Ee[Be++]=Xr,lr=t.id,ar=t.overflow,Xr=e),e=gd(e,o.children),e.flags|=4096,e)}function Fg(t,e,r){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),Xl(t.return,e,r)}function el(t,e,r,o,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=r,i.tailMode=s)}function yb(t,e,r){var o=e.pendingProps,s=o.revealOrder,i=o.tail;if(ae(t,e,o.children,r),o=Pt.current,o&2)o=o&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fg(t,r,e);else if(t.tag===19)Fg(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}if(Mt(Pt,o),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(r=e.child,s=null;r!==null;)t=r.alternate,t!==null&&ti(t)===null&&(s=r),r=r.sibling;r=s,r===null?(s=e.child,e.child=null):(s=r.sibling,r.sibling=null),el(e,!1,s,r,i);break;case"backwards":for(r=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&ti(t)===null){e.child=s;break}t=s.sibling,s.sibling=r,r=s,s=t}el(e,!0,r,null,i);break;case"together":el(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fs(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function br(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),qr|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(K(153));if(e.child!==null){for(t=e.child,r=Dr(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=Dr(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function wf(t,e,r){switch(e.tag){case 3:fb(e),Ln();break;case 5:Gu(e);break;case 1:fe(e.type)&&Qs(e);break;case 4:rd(e,e.stateNode.containerInfo);break;case 10:var o=e.type._context,s=e.memoizedProps.value;Mt(Js,o._currentValue),o._currentValue=s;break;case 13:if(o=e.memoizedState,o!==null)return o.dehydrated!==null?(Mt(Pt,Pt.current&1),e.flags|=128,null):r&e.child.childLanes?hb(t,e,r):(Mt(Pt,Pt.current&1),t=br(t,e,r),t!==null?t.sibling:null);Mt(Pt,Pt.current&1);break;case 19:if(o=(r&e.childLanes)!==0,t.flags&128){if(o)return yb(t,e,r);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Mt(Pt,Pt.current),o)break;return null;case 22:case 23:return e.lanes=0,pb(t,e,r)}return br(t,e,r)}var vb,oa,xb,kb;vb=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};oa=function(){};xb=function(t,e,r,o){var s=t.memoizedProps;if(s!==o){t=e.stateNode,Ur(Ze.current);var i=null;switch(r){case"input":s=Il(t,s),o=Il(t,o),i=[];break;case"select":s=Nt({},s,{value:void 0}),o=Nt({},o,{value:void 0}),i=[];break;case"textarea":s=El(t,s),o=El(t,o),i=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(t.onclick=Vs)}Dl(r,o);var l;r=null;for(g in s)if(!o.hasOwnProperty(g)&&s.hasOwnProperty(g)&&s[g]!=null)if(g==="style"){var a=s[g];for(l in a)a.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(Co.hasOwnProperty(g)?i||(i=[]):(i=i||[]).push(g,null));for(g in o){var d=o[g];if(a=s!=null?s[g]:void 0,o.hasOwnProperty(g)&&d!==a&&(d!=null||a!=null))if(g==="style")if(a){for(l in a)!a.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in d)d.hasOwnProperty(l)&&a[l]!==d[l]&&(r||(r={}),r[l]=d[l])}else r||(i||(i=[]),i.push(g,r)),r=d;else g==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(i=i||[]).push(g,d)):g==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(g,""+d):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(Co.hasOwnProperty(g)?(d!=null&&g==="onScroll"&&Wt("scroll",t),i||a===d||(i=[])):(i=i||[]).push(g,d))}r&&(i=i||[]).push("style",r);var g=i;(e.updateQueue=g)&&(e.flags|=4)}};kb=function(t,e,r,o){r!==o&&(e.flags|=4)};function no(t,e){if(!Lt)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function oe(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(e)for(var s=t.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=o,t.childLanes=r,e}function jf(t,e,r){var o=e.pendingProps;switch(Ka(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(e),null;case 1:return fe(e.type)&&Ys(),oe(e),null;case 3:return o=e.stateNode,$n(),_t(me),_t(le),od(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(ls(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Le!==null&&(ua(Le),Le=null))),oa(t,e),oe(e),null;case 5:nd(e);var s=Ur(_o.current);if(r=e.type,t!==null&&e.stateNode!=null)xb(t,e,r,o,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!o){if(e.stateNode===null)throw Error(K(166));return oe(e),null}if(t=Ur(Ze.current),ls(e)){o=e.stateNode,r=e.type;var i=e.memoizedProps;switch(o[Je]=e,o[Mo]=i,t=(e.mode&1)!==0,r){case"dialog":Wt("cancel",o),Wt("close",o);break;case"iframe":case"object":case"embed":Wt("load",o);break;case"video":case"audio":for(s=0;s<ao.length;s++)Wt(ao[s],o);break;case"source":Wt("error",o);break;case"img":case"image":case"link":Wt("error",o),Wt("load",o);break;case"details":Wt("toggle",o);break;case"input":Od(o,i),Wt("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},Wt("invalid",o);break;case"textarea":Gd(o,i),Wt("invalid",o)}Dl(r,i),s=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?o.textContent!==a&&(i.suppressHydrationWarning!==!0&&is(o.textContent,a,t),s=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&is(o.textContent,a,t),s=["children",""+a]):Co.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Wt("scroll",o)}switch(r){case"input":qo(o),Hd(o,i,!0);break;case"textarea":qo(o),Ud(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=Vs)}o=s,e.updateQueue=o,o!==null&&(e.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Kc(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof o.is=="string"?t=l.createElement(r,{is:o.is}):(t=l.createElement(r),r==="select"&&(l=t,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):t=l.createElementNS(t,r),t[Je]=e,t[Mo]=o,vb(t,e,!1,!1),e.stateNode=t;t:{switch(l=Rl(r,o),r){case"dialog":Wt("cancel",t),Wt("close",t),s=o;break;case"iframe":case"object":case"embed":Wt("load",t),s=o;break;case"video":case"audio":for(s=0;s<ao.length;s++)Wt(ao[s],t);s=o;break;case"source":Wt("error",t),s=o;break;case"img":case"image":case"link":Wt("error",t),Wt("load",t),s=o;break;case"details":Wt("toggle",t),s=o;break;case"input":Od(t,o),s=Il(t,o),Wt("invalid",t);break;case"option":s=o;break;case"select":t._wrapperState={wasMultiple:!!o.multiple},s=Nt({},o,{value:void 0}),Wt("invalid",t);break;case"textarea":Gd(t,o),s=El(t,o),Wt("invalid",t);break;default:s=o}Dl(r,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var d=a[i];i==="style"?qc(t,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Xc(t,d)):i==="children"?typeof d=="string"?(r!=="textarea"||d!=="")&&Io(t,d):typeof d=="number"&&Io(t,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Co.hasOwnProperty(i)?d!=null&&i==="onScroll"&&Wt("scroll",t):d!=null&&Aa(t,i,d,l))}switch(r){case"input":qo(t),Hd(t,o,!1);break;case"textarea":qo(t),Ud(t);break;case"option":o.value!=null&&t.setAttribute("value",""+Rr(o.value));break;case"select":t.multiple=!!o.multiple,i=o.value,i!=null?Bn(t,!!o.multiple,i,!1):o.defaultValue!=null&&Bn(t,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Vs)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}}o&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return oe(e),null;case 6:if(t&&e.stateNode!=null)kb(t,e,t.memoizedProps,o);else{if(typeof o!="string"&&e.stateNode===null)throw Error(K(166));if(r=Ur(_o.current),Ur(Ze.current),ls(e)){if(o=e.stateNode,r=e.memoizedProps,o[Je]=e,(i=o.nodeValue!==r)&&(t=we,t!==null))switch(t.tag){case 3:is(o.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&is(o.nodeValue,r,(t.mode&1)!==0)}i&&(e.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[Je]=e,e.stateNode=o}return oe(e),null;case 13:if(_t(Pt),o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Lt&&ke!==null&&e.mode&1&&!(e.flags&128))Pu(),Ln(),e.flags|=98560,i=!1;else if(i=ls(e),o!==null&&o.dehydrated!==null){if(t===null){if(!i)throw Error(K(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(K(317));i[Je]=e}else Ln(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;oe(e),i=!1}else Le!==null&&(ua(Le),Le=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(o=o!==null,o!==(t!==null&&t.memoizedState!==null)&&o&&(e.child.flags|=8192,e.mode&1&&(t===null||Pt.current&1?Yt===0&&(Yt=3):fd())),e.updateQueue!==null&&(e.flags|=4),oe(e),null);case 4:return $n(),oa(t,e),t===null&&Fo(e.stateNode.containerInfo),oe(e),null;case 10:return Za(e.type._context),oe(e),null;case 17:return fe(e.type)&&Ys(),oe(e),null;case 19:if(_t(Pt),i=e.memoizedState,i===null)return oe(e),null;if(o=(e.flags&128)!==0,l=i.rendering,l===null)if(o)no(i,!1);else{if(Yt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=ti(t),l!==null){for(e.flags|=128,no(i,!1),o=l.updateQueue,o!==null&&(e.updateQueue=o,e.flags|=4),e.subtreeFlags=0,o=r,r=e.child;r!==null;)i=r,t=o,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,t=l.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return Mt(Pt,Pt.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ht()>On&&(e.flags|=128,o=!0,no(i,!1),e.lanes=4194304)}else{if(!o)if(t=ti(l),t!==null){if(e.flags|=128,o=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),no(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Lt)return oe(e),null}else 2*Ht()-i.renderingStartTime>On&&r!==1073741824&&(e.flags|=128,o=!0,no(i,!1),e.lanes=4194304);i.isBackwards?(l.sibling=e.child,e.child=l):(r=i.last,r!==null?r.sibling=l:e.child=l,i.last=l)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ht(),e.sibling=null,r=Pt.current,Mt(Pt,o?r&1|2:r&1),e):(oe(e),null);case 22:case 23:return md(),o=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==o&&(e.flags|=8192),o&&e.mode&1?ve&1073741824&&(oe(e),e.subtreeFlags&6&&(e.flags|=8192)):oe(e),null;case 24:return null;case 25:return null}throw Error(K(156,e.tag))}function Sf(t,e){switch(Ka(e),e.tag){case 1:return fe(e.type)&&Ys(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $n(),_t(me),_t(le),od(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return nd(e),null;case 13:if(_t(Pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(K(340));Ln()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _t(Pt),null;case 4:return $n(),null;case 10:return Za(e.type._context),null;case 22:case 23:return md(),null;case 24:return null;default:return null}}var gs=!1,se=!1,Cf=typeof WeakSet=="function"?WeakSet:Set,lt=null;function zn(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){Ot(t,e,o)}else r.current=null}function sa(t,e,r){try{r()}catch(o){Ot(t,e,o)}}var Ag=!1;function If(t,e){if(Ol=Hs,t=Iu(),Ya(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var s=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break t}var l=0,a=-1,d=-1,g=0,h=0,y=t,f=null;e:for(;;){for(var w;y!==r||s!==0&&y.nodeType!==3||(a=l+s),y!==i||o!==0&&y.nodeType!==3||(d=l+o),y.nodeType===3&&(l+=y.nodeValue.length),(w=y.firstChild)!==null;)f=y,y=w;for(;;){if(y===t)break e;if(f===r&&++g===s&&(a=l),f===i&&++h===o&&(d=l),(w=y.nextSibling)!==null)break;y=f,f=y.parentNode}y=w}r=a===-1||d===-1?null:{start:a,end:d}}else r=null}r=r||{start:0,end:0}}else r=null;for(Hl={focusedElem:t,selectionRange:r},Hs=!1,lt=e;lt!==null;)if(e=lt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,lt=t;else for(;lt!==null;){e=lt;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var j=k.memoizedProps,I=k.memoizedState,p=e.stateNode,c=p.getSnapshotBeforeUpdate(e.elementType===e.type?j:We(e.type,j),I);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var u=e.stateNode.containerInfo;u.nodeType===1?u.textContent="":u.nodeType===9&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(K(163))}}catch(v){Ot(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,lt=t;break}lt=e.return}return k=Ag,Ag=!1,k}function xo(t,e,r){var o=e.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&sa(e,r,i)}s=s.next}while(s!==o)}}function xi(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var o=r.create;r.destroy=o()}r=r.next}while(r!==e)}}function ia(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function wb(t){var e=t.alternate;e!==null&&(t.alternate=null,wb(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Je],delete e[Mo],delete e[Vl],delete e[af],delete e[df])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jb(t){return t.tag===5||t.tag===3||t.tag===4}function Mg(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||jb(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function la(t,e,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=Vs));else if(o!==4&&(t=t.child,t!==null))for(la(t,e,r),t=t.sibling;t!==null;)la(t,e,r),t=t.sibling}function aa(t,e,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(o!==4&&(t=t.child,t!==null))for(aa(t,e,r),t=t.sibling;t!==null;)aa(t,e,r),t=t.sibling}var Zt=null,_e=!1;function fr(t,e,r){for(r=r.child;r!==null;)Sb(t,e,r),r=r.sibling}function Sb(t,e,r){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(ui,r)}catch{}switch(r.tag){case 5:se||zn(r,e);case 6:var o=Zt,s=_e;Zt=null,fr(t,e,r),Zt=o,_e=s,Zt!==null&&(_e?(t=Zt,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Zt.removeChild(r.stateNode));break;case 18:Zt!==null&&(_e?(t=Zt,r=r.stateNode,t.nodeType===8?Qi(t.parentNode,r):t.nodeType===1&&Qi(t,r),Bo(t)):Qi(Zt,r.stateNode));break;case 4:o=Zt,s=_e,Zt=r.stateNode.containerInfo,_e=!0,fr(t,e,r),Zt=o,_e=s;break;case 0:case 11:case 14:case 15:if(!se&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var i=s,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&sa(r,e,l),s=s.next}while(s!==o)}fr(t,e,r);break;case 1:if(!se&&(zn(r,e),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(a){Ot(r,e,a)}fr(t,e,r);break;case 21:fr(t,e,r);break;case 22:r.mode&1?(se=(o=se)||r.memoizedState!==null,fr(t,e,r),se=o):fr(t,e,r);break;default:fr(t,e,r)}}function Wg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new Cf),e.forEach(function(o){var s=Mf.bind(null,t,o);r.has(o)||(r.add(o),o.then(s,s))})}}function Me(t,e){var r=e.deletions;if(r!==null)for(var o=0;o<r.length;o++){var s=r[o];try{var i=t,l=e,a=l;t:for(;a!==null;){switch(a.tag){case 5:Zt=a.stateNode,_e=!1;break t;case 3:Zt=a.stateNode.containerInfo,_e=!0;break t;case 4:Zt=a.stateNode.containerInfo,_e=!0;break t}a=a.return}if(Zt===null)throw Error(K(160));Sb(i,l,s),Zt=null,_e=!1;var d=s.alternate;d!==null&&(d.return=null),s.return=null}catch(g){Ot(s,e,g)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Cb(e,t),e=e.sibling}function Cb(t,e){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Me(e,t),Ge(t),o&4){try{xo(3,t,t.return),xi(3,t)}catch(j){Ot(t,t.return,j)}try{xo(5,t,t.return)}catch(j){Ot(t,t.return,j)}}break;case 1:Me(e,t),Ge(t),o&512&&r!==null&&zn(r,r.return);break;case 5:if(Me(e,t),Ge(t),o&512&&r!==null&&zn(r,r.return),t.flags&32){var s=t.stateNode;try{Io(s,"")}catch(j){Ot(t,t.return,j)}}if(o&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,l=r!==null?r.memoizedProps:i,a=t.type,d=t.updateQueue;if(t.updateQueue=null,d!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Yc(s,i),Rl(a,l);var g=Rl(a,i);for(l=0;l<d.length;l+=2){var h=d[l],y=d[l+1];h==="style"?qc(s,y):h==="dangerouslySetInnerHTML"?Xc(s,y):h==="children"?Io(s,y):Aa(s,h,y,g)}switch(a){case"input":zl(s,i);break;case"textarea":Qc(s,i);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Bn(s,!!i.multiple,w,!1):f!==!!i.multiple&&(i.defaultValue!=null?Bn(s,!!i.multiple,i.defaultValue,!0):Bn(s,!!i.multiple,i.multiple?[]:"",!1))}s[Mo]=i}catch(j){Ot(t,t.return,j)}}break;case 6:if(Me(e,t),Ge(t),o&4){if(t.stateNode===null)throw Error(K(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(j){Ot(t,t.return,j)}}break;case 3:if(Me(e,t),Ge(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Bo(e.containerInfo)}catch(j){Ot(t,t.return,j)}break;case 4:Me(e,t),Ge(t);break;case 13:Me(e,t),Ge(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(bd=Ht())),o&4&&Wg(t);break;case 22:if(h=r!==null&&r.memoizedState!==null,t.mode&1?(se=(g=se)||h,Me(e,t),se=g):Me(e,t),Ge(t),o&8192){if(g=t.memoizedState!==null,(t.stateNode.isHidden=g)&&!h&&t.mode&1)for(lt=t,h=t.child;h!==null;){for(y=lt=h;lt!==null;){switch(f=lt,w=f.child,f.tag){case 0:case 11:case 14:case 15:xo(4,f,f.return);break;case 1:zn(f,f.return);var k=f.stateNode;if(typeof k.componentWillUnmount=="function"){o=f,r=f.return;try{e=o,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(j){Ot(o,r,j)}}break;case 5:zn(f,f.return);break;case 22:if(f.memoizedState!==null){Lg(y);continue}}w!==null?(w.return=f,lt=w):Lg(y)}h=h.sibling}t:for(h=null,y=t;;){if(y.tag===5){if(h===null){h=y;try{s=y.stateNode,g?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=y.stateNode,d=y.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=Jc("display",l))}catch(j){Ot(t,t.return,j)}}}else if(y.tag===6){if(h===null)try{y.stateNode.nodeValue=g?"":y.memoizedProps}catch(j){Ot(t,t.return,j)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===t)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break t;for(;y.sibling===null;){if(y.return===null||y.return===t)break t;h===y&&(h=null),y=y.return}h===y&&(h=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Me(e,t),Ge(t),o&4&&Wg(t);break;case 21:break;default:Me(e,t),Ge(t)}}function Ge(t){var e=t.flags;if(e&2){try{t:{for(var r=t.return;r!==null;){if(jb(r)){var o=r;break t}r=r.return}throw Error(K(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&(Io(s,""),o.flags&=-33);var i=Mg(t);aa(t,i,s);break;case 3:case 4:var l=o.stateNode.containerInfo,a=Mg(t);la(t,a,l);break;default:throw Error(K(161))}}catch(d){Ot(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function zf(t,e,r){lt=t,Ib(t)}function Ib(t,e,r){for(var o=(t.mode&1)!==0;lt!==null;){var s=lt,i=s.child;if(s.tag===22&&o){var l=s.memoizedState!==null||gs;if(!l){var a=s.alternate,d=a!==null&&a.memoizedState!==null||se;a=gs;var g=se;if(gs=l,(se=d)&&!g)for(lt=s;lt!==null;)l=lt,d=l.child,l.tag===22&&l.memoizedState!==null?Pg(s):d!==null?(d.return=l,lt=d):Pg(s);for(;i!==null;)lt=i,Ib(i),i=i.sibling;lt=s,gs=a,se=g}_g(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,lt=i):_g(t)}}function _g(t){for(;lt!==null;){var e=lt;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:se||xi(5,e);break;case 1:var o=e.stateNode;if(e.flags&4&&!se)if(r===null)o.componentDidMount();else{var s=e.elementType===e.type?r.memoizedProps:We(e.type,r.memoizedProps);o.componentDidUpdate(s,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&kg(e,i,o);break;case 3:var l=e.updateQueue;if(l!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}kg(e,l,r)}break;case 5:var a=e.stateNode;if(r===null&&e.flags&4){r=a;var d=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&r.focus();break;case"img":d.src&&(r.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var g=e.alternate;if(g!==null){var h=g.memoizedState;if(h!==null){var y=h.dehydrated;y!==null&&Bo(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(K(163))}se||e.flags&512&&ia(e)}catch(f){Ot(e,e.return,f)}}if(e===t){lt=null;break}if(r=e.sibling,r!==null){r.return=e.return,lt=r;break}lt=e.return}}function Lg(t){for(;lt!==null;){var e=lt;if(e===t){lt=null;break}var r=e.sibling;if(r!==null){r.return=e.return,lt=r;break}lt=e.return}}function Pg(t){for(;lt!==null;){var e=lt;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{xi(4,e)}catch(d){Ot(e,r,d)}break;case 1:var o=e.stateNode;if(typeof o.componentDidMount=="function"){var s=e.return;try{o.componentDidMount()}catch(d){Ot(e,s,d)}}var i=e.return;try{ia(e)}catch(d){Ot(e,i,d)}break;case 5:var l=e.return;try{ia(e)}catch(d){Ot(e,l,d)}}}catch(d){Ot(e,e.return,d)}if(e===t){lt=null;break}var a=e.sibling;if(a!==null){a.return=e.return,lt=a;break}lt=e.return}}var Tf=Math.ceil,ni=pr.ReactCurrentDispatcher,cd=pr.ReactCurrentOwner,Re=pr.ReactCurrentBatchConfig,Bt=0,Xt=null,Ut=null,te=0,ve=0,Tn=Mr(0),Yt=0,No=null,qr=0,ki=0,ud=0,ko=null,be=null,bd=0,On=1/0,or=null,oi=!1,da=null,Er=null,cs=!1,jr=null,si=0,wo=0,ga=null,As=-1,Ms=0;function de(){return Bt&6?Ht():As!==-1?As:As=Ht()}function Br(t){return t.mode&1?Bt&2&&te!==0?te&-te:cf.transition!==null?(Ms===0&&(Ms=gu()),Ms):(t=Rt,t!==0||(t=window.event,t=t===void 0?16:hu(t.type)),t):1}function $e(t,e,r,o){if(50<wo)throw wo=0,ga=null,Error(K(185));Ho(t,r,o),(!(Bt&2)||t!==Xt)&&(t===Xt&&(!(Bt&2)&&(ki|=r),Yt===4&&xr(t,te)),he(t,o),r===1&&Bt===0&&!(e.mode&1)&&(On=Ht()+500,hi&&Wr()))}function he(t,e){var r=t.callbackNode;gm(t,e);var o=Os(t,t===Xt?te:0);if(o===0)r!==null&&Qd(r),t.callbackNode=null,t.callbackPriority=0;else if(e=o&-o,t.callbackPriority!==e){if(r!=null&&Qd(r),e===1)t.tag===0?gf($g.bind(null,t)):Wu($g.bind(null,t)),sf(function(){!(Bt&6)&&Wr()}),r=null;else{switch(cu(o)){case 1:r=Pa;break;case 4:r=au;break;case 16:r=Ns;break;case 536870912:r=du;break;default:r=Ns}r=Ab(r,zb.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function zb(t,e){if(As=-1,Ms=0,Bt&6)throw Error(K(327));var r=t.callbackNode;if(Mn()&&t.callbackNode!==r)return null;var o=Os(t,t===Xt?te:0);if(o===0)return null;if(o&30||o&t.expiredLanes||e)e=ii(t,o);else{e=o;var s=Bt;Bt|=2;var i=Eb();(Xt!==t||te!==e)&&(or=null,On=Ht()+500,Yr(t,e));do try{Df();break}catch(a){Tb(t,a)}while(!0);qa(),ni.current=i,Bt=s,Ut!==null?e=0:(Xt=null,te=0,e=Yt)}if(e!==0){if(e===2&&(s=_l(t),s!==0&&(o=s,e=ca(t,s))),e===1)throw r=No,Yr(t,0),xr(t,o),he(t,Ht()),r;if(e===6)xr(t,o);else{if(s=t.current.alternate,!(o&30)&&!Ef(s)&&(e=ii(t,o),e===2&&(i=_l(t),i!==0&&(o=i,e=ca(t,i))),e===1))throw r=No,Yr(t,0),xr(t,o),he(t,Ht()),r;switch(t.finishedWork=s,t.finishedLanes=o,e){case 0:case 1:throw Error(K(345));case 2:$r(t,be,or);break;case 3:if(xr(t,o),(o&130023424)===o&&(e=bd+500-Ht(),10<e)){if(Os(t,0)!==0)break;if(s=t.suspendedLanes,(s&o)!==o){de(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Ul($r.bind(null,t,be,or),e);break}$r(t,be,or);break;case 4:if(xr(t,o),(o&4194240)===o)break;for(e=t.eventTimes,s=-1;0<o;){var l=31-Pe(o);i=1<<l,l=e[l],l>s&&(s=l),o&=~i}if(o=s,o=Ht()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Tf(o/1960))-o,10<o){t.timeoutHandle=Ul($r.bind(null,t,be,or),o);break}$r(t,be,or);break;case 5:$r(t,be,or);break;default:throw Error(K(329))}}}return he(t,Ht()),t.callbackNode===r?zb.bind(null,t):null}function ca(t,e){var r=ko;return t.current.memoizedState.isDehydrated&&(Yr(t,e).flags|=256),t=ii(t,e),t!==2&&(e=be,be=r,e!==null&&ua(e)),t}function ua(t){be===null?be=t:be.push.apply(be,t)}function Ef(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var s=r[o],i=s.getSnapshot;s=s.value;try{if(!Ne(i(),s))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xr(t,e){for(e&=~ud,e&=~ki,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-Pe(e),o=1<<r;t[r]=-1,e&=~o}}function $g(t){if(Bt&6)throw Error(K(327));Mn();var e=Os(t,0);if(!(e&1))return he(t,Ht()),null;var r=ii(t,e);if(t.tag!==0&&r===2){var o=_l(t);o!==0&&(e=o,r=ca(t,o))}if(r===1)throw r=No,Yr(t,0),xr(t,e),he(t,Ht()),r;if(r===6)throw Error(K(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,$r(t,be,or),he(t,Ht()),null}function pd(t,e){var r=Bt;Bt|=1;try{return t(e)}finally{Bt=r,Bt===0&&(On=Ht()+500,hi&&Wr())}}function Zr(t){jr!==null&&jr.tag===0&&!(Bt&6)&&Mn();var e=Bt;Bt|=1;var r=Re.transition,o=Rt;try{if(Re.transition=null,Rt=1,t)return t()}finally{Rt=o,Re.transition=r,Bt=e,!(Bt&6)&&Wr()}}function md(){ve=Tn.current,_t(Tn)}function Yr(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,of(r)),Ut!==null)for(r=Ut.return;r!==null;){var o=r;switch(Ka(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Ys();break;case 3:$n(),_t(me),_t(le),od();break;case 5:nd(o);break;case 4:$n();break;case 13:_t(Pt);break;case 19:_t(Pt);break;case 10:Za(o.type._context);break;case 22:case 23:md()}r=r.return}if(Xt=t,Ut=t=Dr(t.current,null),te=ve=e,Yt=0,No=null,ud=ki=qr=0,be=ko=null,Gr!==null){for(e=0;e<Gr.length;e++)if(r=Gr[e],o=r.interleaved,o!==null){r.interleaved=null;var s=o.next,i=r.pending;if(i!==null){var l=i.next;i.next=s,o.next=l}r.pending=o}Gr=null}return t}function Tb(t,e){do{var r=Ut;try{if(qa(),Ds.current=ri,ei){for(var o=$t.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}ei=!1}if(Jr=0,Kt=Vt=$t=null,vo=!1,Lo=0,cd.current=null,r===null||r.return===null){Yt=1,No=e,Ut=null;break}t:{var i=t,l=r.return,a=r,d=e;if(e=te,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var g=d,h=a,y=h.tag;if(!(h.mode&1)&&(y===0||y===11||y===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=zg(l);if(w!==null){w.flags&=-257,Tg(w,l,a,i,e),w.mode&1&&Ig(i,g,e),e=w,d=g;var k=e.updateQueue;if(k===null){var j=new Set;j.add(d),e.updateQueue=j}else k.add(d);break t}else{if(!(e&1)){Ig(i,g,e),fd();break t}d=Error(K(426))}}else if(Lt&&a.mode&1){var I=zg(l);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Tg(I,l,a,i,e),Xa(Nn(d,a));break t}}i=d=Nn(d,a),Yt!==4&&(Yt=2),ko===null?ko=[i]:ko.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var p=cb(i,d,e);xg(i,p);break t;case 1:a=d;var c=i.type,u=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Er===null||!Er.has(u)))){i.flags|=65536,e&=-e,i.lanes|=e;var v=ub(i,a,e);xg(i,v);break t}}i=i.return}while(i!==null)}Db(r)}catch(S){e=S,Ut===r&&r!==null&&(Ut=r=r.return);continue}break}while(!0)}function Eb(){var t=ni.current;return ni.current=ri,t===null?ri:t}function fd(){(Yt===0||Yt===3||Yt===2)&&(Yt=4),Xt===null||!(qr&268435455)&&!(ki&268435455)||xr(Xt,te)}function ii(t,e){var r=Bt;Bt|=2;var o=Eb();(Xt!==t||te!==e)&&(or=null,Yr(t,e));do try{Bf();break}catch(s){Tb(t,s)}while(!0);if(qa(),Bt=r,ni.current=o,Ut!==null)throw Error(K(261));return Xt=null,te=0,Yt}function Bf(){for(;Ut!==null;)Bb(Ut)}function Df(){for(;Ut!==null&&!em();)Bb(Ut)}function Bb(t){var e=Fb(t.alternate,t,ve);t.memoizedProps=t.pendingProps,e===null?Db(t):Ut=e,cd.current=null}function Db(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=Sf(r,e),r!==null){r.flags&=32767,Ut=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Yt=6,Ut=null;return}}else if(r=jf(r,e,ve),r!==null){Ut=r;return}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=t}while(e!==null);Yt===0&&(Yt=5)}function $r(t,e,r){var o=Rt,s=Re.transition;try{Re.transition=null,Rt=1,Rf(t,e,r,o)}finally{Re.transition=s,Rt=o}return null}function Rf(t,e,r,o){do Mn();while(jr!==null);if(Bt&6)throw Error(K(327));r=t.finishedWork;var s=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(K(177));t.callbackNode=null,t.callbackPriority=0;var i=r.lanes|r.childLanes;if(cm(t,i),t===Xt&&(Ut=Xt=null,te=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||cs||(cs=!0,Ab(Ns,function(){return Mn(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=Re.transition,Re.transition=null;var l=Rt;Rt=1;var a=Bt;Bt|=4,cd.current=null,If(t,r),Cb(r,t),Jm(Hl),Hs=!!Ol,Hl=Ol=null,t.current=r,zf(r),rm(),Bt=a,Rt=l,Re.transition=i}else t.current=r;if(cs&&(cs=!1,jr=t,si=s),i=t.pendingLanes,i===0&&(Er=null),sm(r.stateNode),he(t,Ht()),e!==null)for(o=t.onRecoverableError,r=0;r<e.length;r++)s=e[r],o(s.value,{componentStack:s.stack,digest:s.digest});if(oi)throw oi=!1,t=da,da=null,t;return si&1&&t.tag!==0&&Mn(),i=t.pendingLanes,i&1?t===ga?wo++:(wo=0,ga=t):wo=0,Wr(),null}function Mn(){if(jr!==null){var t=cu(si),e=Re.transition,r=Rt;try{if(Re.transition=null,Rt=16>t?16:t,jr===null)var o=!1;else{if(t=jr,jr=null,si=0,Bt&6)throw Error(K(331));var s=Bt;for(Bt|=4,lt=t.current;lt!==null;){var i=lt,l=i.child;if(lt.flags&16){var a=i.deletions;if(a!==null){for(var d=0;d<a.length;d++){var g=a[d];for(lt=g;lt!==null;){var h=lt;switch(h.tag){case 0:case 11:case 15:xo(8,h,i)}var y=h.child;if(y!==null)y.return=h,lt=y;else for(;lt!==null;){h=lt;var f=h.sibling,w=h.return;if(wb(h),h===g){lt=null;break}if(f!==null){f.return=w,lt=f;break}lt=w}}}var k=i.alternate;if(k!==null){var j=k.child;if(j!==null){k.child=null;do{var I=j.sibling;j.sibling=null,j=I}while(j!==null)}}lt=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,lt=l;else t:for(;lt!==null;){if(i=lt,i.flags&2048)switch(i.tag){case 0:case 11:case 15:xo(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,lt=p;break t}lt=i.return}}var c=t.current;for(lt=c;lt!==null;){l=lt;var u=l.child;if(l.subtreeFlags&2064&&u!==null)u.return=l,lt=u;else t:for(l=c;lt!==null;){if(a=lt,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xi(9,a)}}catch(S){Ot(a,a.return,S)}if(a===l){lt=null;break t}var v=a.sibling;if(v!==null){v.return=a.return,lt=v;break t}lt=a.return}}if(Bt=s,Wr(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(ui,t)}catch{}o=!0}return o}finally{Rt=r,Re.transition=e}}return!1}function Ng(t,e,r){e=Nn(r,e),e=cb(t,e,1),t=Tr(t,e,1),e=de(),t!==null&&(Ho(t,1,e),he(t,e))}function Ot(t,e,r){if(t.tag===3)Ng(t,t,r);else for(;e!==null;){if(e.tag===3){Ng(e,t,r);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Er===null||!Er.has(o))){t=Nn(r,t),t=ub(e,t,1),e=Tr(e,t,1),t=de(),e!==null&&(Ho(e,1,t),he(e,t));break}}e=e.return}}function Ff(t,e,r){var o=t.pingCache;o!==null&&o.delete(e),e=de(),t.pingedLanes|=t.suspendedLanes&r,Xt===t&&(te&r)===r&&(Yt===4||Yt===3&&(te&130023424)===te&&500>Ht()-bd?Yr(t,0):ud|=r),he(t,e)}function Rb(t,e){e===0&&(t.mode&1?(e=es,es<<=1,!(es&130023424)&&(es=4194304)):e=1);var r=de();t=ur(t,e),t!==null&&(Ho(t,e,r),he(t,r))}function Af(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),Rb(t,r)}function Mf(t,e){var r=0;switch(t.tag){case 13:var o=t.stateNode,s=t.memoizedState;s!==null&&(r=s.retryLane);break;case 19:o=t.stateNode;break;default:throw Error(K(314))}o!==null&&o.delete(e),Rb(t,r)}var Fb;Fb=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||me.current)pe=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return pe=!1,wf(t,e,r);pe=!!(t.flags&131072)}else pe=!1,Lt&&e.flags&1048576&&_u(e,Xs,e.index);switch(e.lanes=0,e.tag){case 2:var o=e.type;Fs(t,e),t=e.pendingProps;var s=_n(e,le.current);An(e,r),s=id(null,e,o,t,s,r);var i=ld();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fe(o)?(i=!0,Qs(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,ed(e),s.updater=vi,e.stateNode=s,s._reactInternals=e,ql(e,o,t,r),e=ea(null,e,o,!0,i,r)):(e.tag=0,Lt&&i&&Qa(e),ae(null,e,s,r),e=e.child),e;case 16:o=e.elementType;t:{switch(Fs(t,e),t=e.pendingProps,s=o._init,o=s(o._payload),e.type=o,s=e.tag=_f(o),t=We(o,t),s){case 0:e=ta(null,e,o,t,r);break t;case 1:e=Dg(null,e,o,t,r);break t;case 11:e=Eg(null,e,o,t,r);break t;case 14:e=Bg(null,e,o,We(o.type,t),r);break t}throw Error(K(306,o,""))}return e;case 0:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:We(o,s),ta(t,e,o,s,r);case 1:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:We(o,s),Dg(t,e,o,s,r);case 3:t:{if(fb(e),t===null)throw Error(K(387));o=e.pendingProps,i=e.memoizedState,s=i.element,Hu(t,e),Zs(e,o,null,r);var l=e.memoizedState;if(o=l.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Nn(Error(K(423)),e),e=Rg(t,e,o,r,s);break t}else if(o!==s){s=Nn(Error(K(424)),e),e=Rg(t,e,o,r,s);break t}else for(ke=zr(e.stateNode.containerInfo.firstChild),we=e,Lt=!0,Le=null,r=Nu(e,null,o,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Ln(),o===s){e=br(t,e,r);break t}ae(t,e,o,r)}e=e.child}return e;case 5:return Gu(e),t===null&&Kl(e),o=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,l=s.children,Gl(o,s)?l=null:i!==null&&Gl(o,i)&&(e.flags|=32),mb(t,e),ae(t,e,l,r),e.child;case 6:return t===null&&Kl(e),null;case 13:return hb(t,e,r);case 4:return rd(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=Pn(e,null,o,r):ae(t,e,o,r),e.child;case 11:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:We(o,s),Eg(t,e,o,s,r);case 7:return ae(t,e,e.pendingProps,r),e.child;case 8:return ae(t,e,e.pendingProps.children,r),e.child;case 12:return ae(t,e,e.pendingProps.children,r),e.child;case 10:t:{if(o=e.type._context,s=e.pendingProps,i=e.memoizedProps,l=s.value,Mt(Js,o._currentValue),o._currentValue=l,i!==null)if(Ne(i.value,l)){if(i.children===s.children&&!me.current){e=br(t,e,r);break t}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var d=a.firstContext;d!==null;){if(d.context===o){if(i.tag===1){d=dr(-1,r&-r),d.tag=2;var g=i.updateQueue;if(g!==null){g=g.shared;var h=g.pending;h===null?d.next=d:(d.next=h.next,h.next=d),g.pending=d}}i.lanes|=r,d=i.alternate,d!==null&&(d.lanes|=r),Xl(i.return,r,e),a.lanes|=r;break}d=d.next}}else if(i.tag===10)l=i.type===e.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(K(341));l.lanes|=r,a=l.alternate,a!==null&&(a.lanes|=r),Xl(l,r,e),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===e){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ae(t,e,s.children,r),e=e.child}return e;case 9:return s=e.type,o=e.pendingProps.children,An(e,r),s=Fe(s),o=o(s),e.flags|=1,ae(t,e,o,r),e.child;case 14:return o=e.type,s=We(o,e.pendingProps),s=We(o.type,s),Bg(t,e,o,s,r);case 15:return bb(t,e,e.type,e.pendingProps,r);case 17:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:We(o,s),Fs(t,e),e.tag=1,fe(o)?(t=!0,Qs(e)):t=!1,An(e,r),gb(e,o,s),ql(e,o,s,r),ea(null,e,o,!0,t,r);case 19:return yb(t,e,r);case 22:return pb(t,e,r)}throw Error(K(156,e.tag))};function Ab(t,e){return lu(t,e)}function Wf(t,e,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(t,e,r,o){return new Wf(t,e,r,o)}function hd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _f(t){if(typeof t=="function")return hd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wa)return 11;if(t===_a)return 14}return 2}function Dr(t,e){var r=t.alternate;return r===null?(r=De(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function Ws(t,e,r,o,s,i){var l=2;if(o=t,typeof t=="function")hd(t)&&(l=1);else if(typeof t=="string")l=5;else t:switch(t){case yn:return Qr(r.children,s,i,e);case Ma:l=8,s|=8;break;case wl:return t=De(12,r,e,s|2),t.elementType=wl,t.lanes=i,t;case jl:return t=De(13,r,e,s),t.elementType=jl,t.lanes=i,t;case Sl:return t=De(19,r,e,s),t.elementType=Sl,t.lanes=i,t;case Gc:return wi(r,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Oc:l=10;break t;case Hc:l=9;break t;case Wa:l=11;break t;case _a:l=14;break t;case hr:l=16,o=null;break t}throw Error(K(130,t==null?t:typeof t,""))}return e=De(l,r,e,s),e.elementType=t,e.type=o,e.lanes=i,e}function Qr(t,e,r,o){return t=De(7,t,o,e),t.lanes=r,t}function wi(t,e,r,o){return t=De(22,t,o,e),t.elementType=Gc,t.lanes=r,t.stateNode={isHidden:!1},t}function rl(t,e,r){return t=De(6,t,null,e),t.lanes=r,t}function nl(t,e,r){return e=De(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Lf(t,e,r,o,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_i(0),this.expirationTimes=_i(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_i(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function yd(t,e,r,o,s,i,l,a,d){return t=new Lf(t,e,r,a,d),e===1?(e=1,i===!0&&(e|=8)):e=0,i=De(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ed(i),t}function Pf(t,e,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hn,key:o==null?null:""+o,children:t,containerInfo:e,implementation:r}}function Mb(t){if(!t)return Fr;t=t._reactInternals;t:{if(nn(t)!==t||t.tag!==1)throw Error(K(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break t;case 1:if(fe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break t}}e=e.return}while(e!==null);throw Error(K(171))}if(t.tag===1){var r=t.type;if(fe(r))return Mu(t,r,e)}return e}function Wb(t,e,r,o,s,i,l,a,d){return t=yd(r,o,!0,t,s,i,l,a,d),t.context=Mb(null),r=t.current,o=de(),s=Br(r),i=dr(o,s),i.callback=e??null,Tr(r,i,s),t.current.lanes=s,Ho(t,s,o),he(t,o),t}function ji(t,e,r,o){var s=e.current,i=de(),l=Br(s);return r=Mb(r),e.context===null?e.context=r:e.pendingContext=r,e=dr(i,l),e.payload={element:t},o=o===void 0?null:o,o!==null&&(e.callback=o),t=Tr(s,e,l),t!==null&&($e(t,s,l,i),Bs(t,s,l)),l}function li(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Og(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function vd(t,e){Og(t,e),(t=t.alternate)&&Og(t,e)}function $f(){return null}var _b=typeof reportError=="function"?reportError:function(t){console.error(t)};function xd(t){this._internalRoot=t}Si.prototype.render=xd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(K(409));ji(t,e,null,null)};Si.prototype.unmount=xd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zr(function(){ji(null,t,null,null)}),e[cr]=null}};function Si(t){this._internalRoot=t}Si.prototype.unstable_scheduleHydration=function(t){if(t){var e=pu();t={blockedOn:null,target:t,priority:e};for(var r=0;r<vr.length&&e!==0&&e<vr[r].priority;r++);vr.splice(r,0,t),r===0&&fu(t)}};function kd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ci(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hg(){}function Nf(t,e,r,o,s){if(s){if(typeof o=="function"){var i=o;o=function(){var g=li(l);i.call(g)}}var l=Wb(e,o,t,0,null,!1,!1,"",Hg);return t._reactRootContainer=l,t[cr]=l.current,Fo(t.nodeType===8?t.parentNode:t),Zr(),l}for(;s=t.lastChild;)t.removeChild(s);if(typeof o=="function"){var a=o;o=function(){var g=li(d);a.call(g)}}var d=yd(t,0,!1,null,null,!1,!1,"",Hg);return t._reactRootContainer=d,t[cr]=d.current,Fo(t.nodeType===8?t.parentNode:t),Zr(function(){ji(e,d,r,o)}),d}function Ii(t,e,r,o,s){var i=r._reactRootContainer;if(i){var l=i;if(typeof s=="function"){var a=s;s=function(){var d=li(l);a.call(d)}}ji(e,l,t,s)}else l=Nf(r,e,t,s,o);return li(l)}uu=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=lo(e.pendingLanes);r!==0&&($a(e,r|1),he(e,Ht()),!(Bt&6)&&(On=Ht()+500,Wr()))}break;case 13:Zr(function(){var o=ur(t,1);if(o!==null){var s=de();$e(o,t,1,s)}}),vd(t,1)}};Na=function(t){if(t.tag===13){var e=ur(t,134217728);if(e!==null){var r=de();$e(e,t,134217728,r)}vd(t,134217728)}};bu=function(t){if(t.tag===13){var e=Br(t),r=ur(t,e);if(r!==null){var o=de();$e(r,t,e,o)}vd(t,e)}};pu=function(){return Rt};mu=function(t,e){var r=Rt;try{return Rt=t,e()}finally{Rt=r}};Al=function(t,e,r){switch(e){case"input":if(zl(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var o=r[e];if(o!==t&&o.form===t.form){var s=fi(o);if(!s)throw Error(K(90));Vc(o),zl(o,s)}}}break;case"textarea":Qc(t,r);break;case"select":e=r.value,e!=null&&Bn(t,!!r.multiple,e,!1)}};eu=pd;ru=Zr;var Of={usingClientEntryPoint:!1,Events:[Uo,wn,fi,Zc,tu,pd]},oo={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hf={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=su(t),t===null?null:t.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||$f,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var us=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!us.isDisabled&&us.supportsFiber)try{ui=us.inject(Hf),qe=us}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Of;Se.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kd(e))throw Error(K(200));return Pf(t,e,null,r)};Se.createRoot=function(t,e){if(!kd(t))throw Error(K(299));var r=!1,o="",s=_b;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=yd(t,1,!1,null,null,r,!1,o,s),t[cr]=e.current,Fo(t.nodeType===8?t.parentNode:t),new xd(e)};Se.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(K(188)):(t=Object.keys(t).join(","),Error(K(268,t)));return t=su(e),t=t===null?null:t.stateNode,t};Se.flushSync=function(t){return Zr(t)};Se.hydrate=function(t,e,r){if(!Ci(e))throw Error(K(200));return Ii(null,t,e,!0,r)};Se.hydrateRoot=function(t,e,r){if(!kd(t))throw Error(K(405));var o=r!=null&&r.hydratedSources||null,s=!1,i="",l=_b;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),e=Wb(e,null,t,1,r??null,s,!1,i,l),t[cr]=e.current,Fo(t),o)for(t=0;t<o.length;t++)r=o[t],s=r._getVersion,s=s(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,s]:e.mutableSourceEagerHydrationData.push(r,s);return new Si(e)};Se.render=function(t,e,r){if(!Ci(e))throw Error(K(200));return Ii(null,t,e,!1,r)};Se.unmountComponentAtNode=function(t){if(!Ci(t))throw Error(K(40));return t._reactRootContainer?(Zr(function(){Ii(null,null,t,!1,function(){t._reactRootContainer=null,t[cr]=null})}),!0):!1};Se.unstable_batchedUpdates=pd;Se.unstable_renderSubtreeIntoContainer=function(t,e,r,o){if(!Ci(r))throw Error(K(200));if(t==null||t._reactInternals===void 0)throw Error(K(38));return Ii(t,e,r,!1,o)};Se.version="18.3.1-next-f1338f8080-20240426";function Lb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lb)}catch(t){console.error(t)}}Lb(),Lc.exports=Se;var Gf=Lc.exports,Pb,Gg=Gf;Pb=Gg.createRoot,Gg.hydrateRoot;/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$b=(...t)=>t.filter((e,r,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===r).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Vf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=b.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:s="",children:i,iconNode:l,...a},d)=>b.createElement("svg",{ref:d,...Vf,width:e,height:e,stroke:t,strokeWidth:o?Number(r)*24/Number(e):r,className:$b("lucide",s),...a},[...l.map(([g,h])=>b.createElement(g,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=(t,e)=>{const r=b.forwardRef(({className:o,...s},i)=>b.createElement(Yf,{ref:i,iconNode:e,className:$b(`lucide-${Uf(t)}`,o),...s}));return r.displayName=`${t}`,r};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=it("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=it("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=it("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=it("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=it("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=it("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=it("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=it("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=it("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=it("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=it("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=it("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=it("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=it("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=it("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=it("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=it("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=it("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=it("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=it("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=it("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=it("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=it("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=it("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=it("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=it("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=it("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=it("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=it("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=it("Images",[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=it("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=it("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=it("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=it("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=it("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=it("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=it("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=it("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=it("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=it("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=it("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=it("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=it("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=it("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=it("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=it("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=it("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=it("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=it("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=it("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=it("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=it("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=it("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=it("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=it("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=it("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=it("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=it("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=it("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=it("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=it("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=it("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=it("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=it("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=it("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=it("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=it("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=it("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=it("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=it("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),Cd="anvil_token",Id=()=>localStorage.getItem(Cd),Ih=t=>localStorage.setItem(Cd,t),ha=()=>localStorage.removeItem(Cd),Y=async(t,e,r)=>{const o={};r!==void 0&&(o["Content-Type"]="application/json");const s=Id();s&&(o.Authorization=`Bearer ${s}`);const i=await fetch(`/api${e}`,{method:t,headers:o,body:r!==void 0?JSON.stringify(r):void 0});if(i.status===401)throw ha(),window.dispatchEvent(new Event("anvil-unauthorized")),new Error("Not authenticated");if(i.status===204)return null;if(!i.ok){const l=await i.text();let a=l;try{a=JSON.parse(l).detail||l}catch{}throw new Error(a||`HTTP ${i.status}`)}return i.json()},O={register:t=>Y("POST","/auth/register",t),login:t=>Y("POST","/auth/login",t),me:()=>Y("GET","/auth/me"),getGcalStatus:()=>Y("GET","/auth/google/status"),connectGoogle:()=>{window.location.href=`/api/auth/google?token=${encodeURIComponent(Id()||"")}`},disconnectGoogle:()=>Y("DELETE","/auth/google"),getPillars:()=>Y("GET","/pillars"),getFocus:()=>Y("GET","/focus"),createFocus:t=>Y("POST","/focus",t),deleteFocus:t=>Y("DELETE",`/focus/${t}`),addScreenTime:(t,e)=>Y("POST","/screentime",{screen:t,seconds:e}),getScreenTime:()=>Y("GET","/screentime"),getPayouts:()=>Y("GET","/rewards/payouts"),createPayout:t=>Y("POST","/rewards/payouts",t),deletePayout:t=>Y("DELETE",`/rewards/payouts/${t}`),getRewardRates:()=>Y("GET","/rewards/rates"),setRewardRate:t=>Y("POST","/rewards/rates",t),getMedia:()=>Y("GET","/media"),createMedia:t=>Y("POST","/media",t),updateMedia:(t,e)=>Y("PUT",`/media/${t}`,e),deleteMedia:t=>Y("DELETE",`/media/${t}`),restoreMedia:t=>Y("POST",`/media/${t}/restore`),getDecks:()=>Y("GET","/spiritual/decks"),createDeck:t=>Y("POST","/spiritual/decks",t),deleteDeck:t=>Y("DELETE",`/spiritual/decks/${t}`),getGoldenGoals:()=>Y("GET","/golden/goals"),getGoldenGoal:t=>Y("GET",`/golden/goals/${t}`),createGolden:t=>Y("POST","/golden/goals",t),updateGolden:(t,e)=>Y("PUT",`/golden/goals/${t}`,e),achieveGolden:t=>Y("POST",`/golden/goals/${t}/achieve`),unachieveGolden:t=>Y("POST",`/golden/goals/${t}/unachieve`),upsertGoldenEntry:(t,e)=>Y("PUT",`/golden/goals/${t}/entry`,e),deleteGolden:t=>Y("DELETE",`/golden/goals/${t}`),restoreGolden:t=>Y("POST",`/golden/goals/${t}/restore`),getKickstart:()=>Y("GET","/kickstart/videos"),createKickstart:t=>Y("POST","/kickstart/videos",t),updateKickstart:(t,e)=>Y("PUT",`/kickstart/videos/${t}`,e),deleteKickstart:t=>Y("DELETE",`/kickstart/videos/${t}`),restoreKickstart:t=>Y("POST",`/kickstart/videos/${t}/restore`),getTxns:()=>Y("GET","/finance/txns"),createTxn:t=>Y("POST","/finance/txns",t),updateTxn:(t,e)=>Y("PUT",`/finance/txns/${t}`,e),deleteTxn:t=>Y("DELETE",`/finance/txns/${t}`),restoreTxn:t=>Y("POST",`/finance/txns/${t}/restore`),getSetting:t=>Y("GET",`/settings/${t}`),setSetting:(t,e)=>Y("PUT",`/settings/${t}`,{value:e}),getTasks:()=>Y("GET","/tasks"),createTask:t=>Y("POST","/tasks",t),updateTask:(t,e)=>Y("PUT",`/tasks/${t}`,e),deleteTask:t=>Y("DELETE",`/tasks/${t}`),restoreTask:t=>Y("POST",`/tasks/${t}/restore`),scheduleTask:t=>Y("PUT",`/tasks/${t}/schedule`),getGoals:t=>Y("GET",`/goals${t?`?pillar=${encodeURIComponent(t)}`:""}`),createGoal:t=>Y("POST","/goals",t),updateGoal:(t,e)=>Y("PUT",`/goals/${t}`,e),deleteGoal:t=>Y("DELETE",`/goals/${t}`),restoreGoal:t=>Y("POST",`/goals/${t}/restore`),getHabits:()=>Y("GET","/habits"),createHabit:t=>Y("POST","/habits",t),updateHabit:(t,e)=>Y("PUT",`/habits/${t}`,e),deleteHabit:t=>Y("DELETE",`/habits/${t}`),restoreHabit:t=>Y("POST",`/habits/${t}/restore`),toggleHabitLog:(t,e)=>Y("POST",`/habits/${t}/log/${e}`),setHabitLogNote:(t,e,r)=>Y("PUT",`/habits/${t}/log/${e}/note`,{note:r}),setHabitLogCount:(t,e,r,o)=>Y("PUT",`/habits/${t}/log/${e}/count`,{count:r,note:o}),clearHabitLog:(t,e)=>Y("DELETE",`/habits/${t}/log/${e}`),getHabitsYearly:t=>Y("GET",`/habits/yearly/${t}`),getJournalEntry:t=>Y("GET",`/journal/${t}`),getJournalHistory:(t,e)=>Y("GET",`/journal/history/${t}/${e}`),updateJournalMood:(t,e)=>Y("PUT",`/journal/${t}`,{mood:e}),addJournalBullet:(t,e,r)=>Y("POST",`/journal/${t}/bullets`,{section:e,text:r}),deleteJournalBullet:t=>Y("DELETE",`/journal/bullets/${t}`),getSkills:()=>Y("GET","/skills"),createSkill:t=>Y("POST","/skills",t),updateSkill:(t,e)=>Y("PUT",`/skills/${t}`,e),deleteSkill:t=>Y("DELETE",`/skills/${t}`),restoreSkill:t=>Y("POST",`/skills/${t}/restore`),addSkillNote:(t,e,r)=>Y("POST",`/skills/${t}/notes`,{stage:e,text:r}),deleteSkillNote:t=>Y("DELETE",`/skill-notes/${t}`),updateSkillNote:(t,e)=>Y("PUT",`/skill-notes/${t}`,{text:e}),toggleSkillNote:t=>Y("PUT",`/skill-notes/${t}/toggle`),completeSkillStage:(t,e)=>Y("POST",`/skills/${t}/complete-stage`,{stage:e}),getScriptures:()=>Y("GET","/scriptures"),createScripture:t=>Y("POST","/scriptures",t),deleteScripture:t=>Y("DELETE",`/scriptures/${t}`),restoreScripture:t=>Y("POST",`/scriptures/${t}/restore`),addChapter:(t,e)=>Y("POST",`/scriptures/${t}/chapters`,e),updateChapter:(t,e)=>Y("PUT",`/chapters/${t}`,e),deleteChapter:t=>Y("DELETE",`/chapters/${t}`),restoreChapter:t=>Y("POST",`/chapters/${t}/restore`),addInsight:(t,e)=>Y("POST",`/chapters/${t}/insights`,{text:e}),deleteInsight:t=>Y("DELETE",`/insights/${t}`),getTopics:()=>Y("GET","/revision/topics"),createTopic:t=>Y("POST","/revision/topics",t),updateTopic:(t,e)=>Y("PUT",`/revision/topics/${t}`,e),deleteTopic:t=>Y("DELETE",`/revision/topics/${t}`),restoreTopic:t=>Y("POST",`/revision/topics/${t}/restore`),getDueToday:()=>Y("GET","/revision/due-today"),getCalendar:(t,e)=>Y("GET",`/revision/calendar/${t}/${e}`),toggleReviewDone:t=>Y("PUT",`/revision/reviews/${t}/done`),getAffirmations:()=>Y("GET","/affirmations"),createAffirmation:t=>Y("POST","/affirmations",t),updateAffirmation:(t,e)=>Y("PUT",`/affirmations/${t}`,e),deleteAffirmation:t=>Y("DELETE",`/affirmations/${t}`),restoreAffirmation:t=>Y("POST",`/affirmations/${t}/restore`)},zh=7e3;function sn(t,e,r){const[o,s]=b.useState([]),i=b.useRef({}),l=b.useCallback(async(g,h="Item")=>{await t(g),r();const y=`${g}-${Date.now()}`;s(f=>[...f,{id:y,itemId:g,label:h}]),i.current[y]=setTimeout(()=>{s(f=>f.filter(w=>w.id!==y)),delete i.current[y]},zh)},[t,r]),a=b.useCallback(async g=>{const h=o.find(y=>y.id===g);h&&(clearTimeout(i.current[g]),delete i.current[g],s(y=>y.filter(f=>f.id!==g)),await e(h.itemId),r())},[o,e,r]),d=b.useCallback(g=>{clearTimeout(i.current[g]),delete i.current[g],s(h=>h.filter(y=>y.id!==g))},[]);return{deleteItem:l,toasts:o,handleUndo:a,handleDismiss:d}}function ln({toasts:t,onUndo:e,onDismiss:r}){return n.jsx("div",{style:fn.container,children:t.map(o=>n.jsx(Th,{toast:o,onUndo:e,onDismiss:r},o.id))})}function Th({toast:t,onUndo:e,onDismiss:r}){const[o,s]=b.useState(100);return b.useEffect(()=>{const i=Date.now(),l=7e3,a=setInterval(()=>{const d=Date.now()-i,g=Math.max(0,100-d/l*100);s(g),g===0&&clearInterval(a)},50);return()=>clearInterval(a)},[]),n.jsxs("div",{style:fn.toast,children:[n.jsx("div",{style:{...fn.bar,width:`${o}%`}}),n.jsxs("span",{style:fn.msg,children:[t.label," deleted"]}),n.jsx("button",{style:fn.undoBtn,onClick:()=>e(t.id),children:"Undo"}),n.jsx("button",{style:fn.closeBtn,onClick:()=>r(t.id),children:"×"})]})}const fn={container:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",gap:8,zIndex:999,pointerEvents:"none"},toast:{position:"relative",display:"flex",alignItems:"center",gap:12,background:"var(--accent-strong)",color:"#fff",borderRadius:10,padding:"12px 16px",fontSize:13.5,fontFamily:"'Inter', system-ui, sans-serif",boxShadow:"0 4px 20px rgba(0,0,0,0.25)",minWidth:260,overflow:"hidden",pointerEvents:"all"},bar:{position:"absolute",bottom:0,left:0,height:3,background:"#4C9A6B",transition:"width 0.05s linear",borderRadius:"0 0 0 10px"},msg:{flex:1,fontWeight:500},undoBtn:{border:"1px solid rgba(255,255,255,0.3)",background:"none",color:"#4C9A6B",fontWeight:700,fontSize:13,padding:"4px 10px",borderRadius:6,cursor:"pointer",fontFamily:"inherit"},closeBtn:{border:"none",background:"none",color:"rgba(255,255,255,0.5)",cursor:"pointer",fontSize:18,lineHeight:1,padding:"0 2px"}},ps={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},Vg=[{id:"Q1",symbol:"™",title:"Do Now",sub:"Important · Urgent",accent:"#C2536B"},{id:"Q2",symbol:"©",title:"Schedule",sub:"Important · Not Urgent",accent:"#3A7CA5"},{id:"Q3",symbol:"®",title:"Delegate",sub:"Not Important · Urgent",accent:"#C9A227"},{id:"Q4",symbol:"•",title:"Drop",sub:"Not Important · Not Urgent",accent:"#8A8780"}];function Eh(){return new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Kolkata"})}function Bh(){const t=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"})),r=t.getMinutes()<30?30:0,o=r===0?t.getHours()+1:t.getHours();return`${String(o%24).padStart(2,"0")}:${String(r).padStart(2,"0")}`}function Dh(t,e){const[r,o]=t.split(":").map(Number),s=r*60+o+e;return`${String(Math.floor(s/60)%24).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`}function Rh(t){return t?new Date(t).toLocaleString("en-IN",{timeZone:"Asia/Kolkata",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0}):""}const ol=()=>({title:"",pillar:"Financial",est:30,date:Eh(),startTime:Bh()});function Fh(){const[t,e]=b.useState([]),[r,o]=b.useState(null),[s,i]=b.useState(ol()),[l,a]=b.useState({connected:!1,configured:!1}),d=b.useCallback(()=>O.getTasks().then(e).catch(console.error),[]);b.useEffect(()=>{d(),O.getGcalStatus().then(a).catch(()=>{})},[d]);const{deleteItem:g,toasts:h,handleUndo:y,handleDismiss:f}=sn(O.deleteTask,O.restoreTask,d),w=u=>t.filter(v=>v.quadrant===u),k=u=>w(u).reduce((v,S)=>v+S.time_estimate_min,0),j=u=>u>=60?`${Math.floor(u/60)}h${u%60?` ${u%60}m`:""}`:`${u}m`,I=u=>{var S;return`${((S=Vg.find(z=>z.id===u.quadrant))==null?void 0:S.symbol)??""} ${u.title}`},p=async u=>{if(!s.title.trim())return;const v=s.date&&s.startTime?`${s.date}T${s.startTime}:00`:null;await O.createTask({pillar:s.pillar,title:s.title,quadrant:u,time_estimate_min:Number(s.est)||30,start_datetime:v}),i(ol()),o(null),d()},c=(u,v)=>g(u,v);return n.jsxs("div",{style:pt.page,children:[n.jsxs("div",{style:pt.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:pt.eyebrow,children:"Anvil · Weekly Routing"}),n.jsx("h1",{style:pt.h1,children:"Weekly Routing"})]}),n.jsxs("div",{style:pt.headRight,children:[n.jsx("div",{style:pt.legend,children:Object.entries(ps).map(([u,v])=>n.jsxs("span",{style:pt.legendItem,children:[n.jsx("span",{style:{...pt.dot,background:v.dot}}),u]},u))}),l.configured&&(l.connected?n.jsxs("button",{style:pt.gcalBadgeOn,title:"Disconnect Google Calendar",onClick:()=>O.disconnectGoogle().then(()=>a({...l,connected:!1})),children:[n.jsx(bs,{size:13})," Google Calendar connected"]}):n.jsxs("button",{style:pt.gcalBadgeOff,onClick:()=>O.connectGoogle(),children:[n.jsx(bs,{size:13})," Connect Google Calendar"]}))]})]}),n.jsx("div",{style:pt.grid,children:Vg.map(u=>n.jsxs("section",{style:{...pt.quad,borderTop:`3px solid ${u.accent}`},children:[n.jsxs("header",{style:pt.quadHead,children:[n.jsxs("div",{style:pt.quadTitleRow,children:[n.jsx("span",{style:{...pt.symbol,color:u.accent},children:u.symbol}),n.jsxs("div",{children:[n.jsx("div",{style:pt.quadTitle,children:u.title}),n.jsx("div",{style:pt.quadSub,children:u.sub})]})]}),n.jsx("span",{style:pt.quadTotal,children:j(k(u.id))})]}),n.jsxs("div",{style:pt.list,children:[w(u.id).map(v=>{const S=ps[v.pillar]||ps.Financial,z=!!v.gcal_event_id;return n.jsxs("div",{style:{...pt.card,background:S.soft},children:[n.jsx("span",{style:{...pt.cardBar,background:S.dot}}),n.jsxs("div",{style:pt.cardBody,children:[n.jsx("div",{style:pt.cardTitle,children:v.title}),v.start_datetime&&n.jsxs("div",{style:pt.eventTime,children:[n.jsx(bs,{size:10}),Rh(v.start_datetime),z&&n.jsx("span",{style:pt.syncedDot,title:"Synced to Google Calendar"})]}),n.jsxs("div",{style:pt.cardMeta,children:[n.jsxs("span",{style:pt.metaPill,children:[n.jsx("span",{style:{...pt.dot,background:S.dot,width:7,height:7}}),v.pillar]}),n.jsxs("span",{style:pt.metaPill,children:[n.jsx(qf,{size:11})," ",j(v.time_estimate_min)]})]})]}),n.jsxs("div",{style:pt.cardActions,children:[z&&n.jsx("span",{title:`On calendar as "${I(v)}"`,style:pt.calDoneIcon,children:n.jsx(zt,{size:14})}),n.jsx("button",{onClick:()=>c(v.id,v.title),style:pt.delBtn,children:n.jsx(kt,{size:13})})]})]},v.id)}),r===u.id?n.jsxs("div",{style:pt.addBox,children:[n.jsx("input",{autoFocus:!0,placeholder:"Task title",value:s.title,onChange:v=>i({...s,title:v.target.value}),onKeyDown:v=>v.key==="Enter"&&p(u.id),style:pt.input}),n.jsxs("div",{style:pt.dateTimeRow,children:[n.jsxs("div",{style:pt.dateTimeGroup,children:[n.jsx("label",{style:pt.dtLabel,children:"Date"}),n.jsx("input",{type:"date",value:s.date,onChange:v=>i({...s,date:v.target.value}),style:pt.dtInput})]}),n.jsxs("div",{style:pt.dateTimeGroup,children:[n.jsx("label",{style:pt.dtLabel,children:"Start"}),n.jsx("input",{type:"time",value:s.startTime,onChange:v=>i({...s,startTime:v.target.value}),style:pt.dtInput})]}),n.jsxs("div",{style:pt.dateTimeGroup,children:[n.jsx("label",{style:pt.dtLabel,children:"End"}),n.jsx("div",{style:pt.dtEndValue,children:Dh(s.startTime,Number(s.est)||30)})]})]}),n.jsxs("div",{style:pt.addRow,children:[n.jsx("select",{value:s.pillar,onChange:v=>i({...s,pillar:v.target.value}),style:pt.select,children:Object.keys(ps).map(v=>n.jsx("option",{children:v},v))}),n.jsx("input",{type:"number",value:s.est,onChange:v=>i({...s,est:v.target.value}),style:{...pt.input,width:60}}),n.jsx("span",{style:pt.minLabel,children:"min"}),l.connected&&n.jsx("span",{style:pt.gcalHint,title:"Will sync to Google Calendar",children:n.jsx(bs,{size:12})}),n.jsx("button",{onClick:()=>p(u.id),style:pt.saveBtn,children:n.jsx(zt,{size:14})}),n.jsx("button",{onClick:()=>{o(null),i(ol())},style:pt.cancelBtn,children:n.jsx(kt,{size:14})})]})]}):n.jsxs("button",{onClick:()=>o(u.id),style:pt.addTrigger,children:[n.jsx(ie,{size:13})," Add task"]})]})]},u.id))}),n.jsx(ln,{toasts:h,onUndo:y,onDismiss:f})]})}const pt={page:{fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:16,marginBottom:22},headRight:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:10},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces', Georgia, serif"},legend:{display:"flex",gap:14,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--text-2)",fontWeight:500},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},gcalBadgeOn:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"#4C9A6B",background:"rgba(76,154,107,0.10)",border:"1px solid rgba(76,154,107,0.3)",borderRadius:20,padding:"5px 12px",cursor:"pointer"},gcalBadgeOff:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"var(--text-2)",background:"var(--surface)",border:"1px solid #DCDAD3",borderRadius:20,padding:"5px 12px",cursor:"pointer"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16},quad:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.06)"},quadHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14},quadTitleRow:{display:"flex",gap:10,alignItems:"center"},symbol:{fontSize:20,lineHeight:1},quadTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em"},quadSub:{fontSize:11,color:"var(--text-3)",marginTop:1,letterSpacing:"0.02em"},quadTotal:{fontSize:12,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"3px 9px",borderRadius:20},list:{display:"flex",flexDirection:"column",gap:8},card:{display:"flex",alignItems:"stretch",gap:10,borderRadius:9,padding:"10px 10px 10px 0",overflow:"hidden"},cardBar:{width:3,borderRadius:3,flexShrink:0},cardBody:{flex:1,minWidth:0},cardTitle:{fontSize:13.5,fontWeight:500,lineHeight:1.35,marginBottom:4},eventTime:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#3A7CA5",fontWeight:500,marginBottom:5},syncedDot:{width:6,height:6,borderRadius:"50%",background:"#4C9A6B",display:"inline-block",marginLeft:2},cardMeta:{display:"flex",gap:8,flexWrap:"wrap"},metaPill:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"var(--text-2)",fontWeight:500},cardActions:{display:"flex",flexDirection:"column",gap:4,alignSelf:"center",flexShrink:0},calDoneIcon:{width:30,height:30,borderRadius:8,background:"#4C9A6B",color:"#fff",display:"grid",placeItems:"center"},delBtn:{width:30,height:30,borderRadius:8,border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center"},addTrigger:{display:"flex",alignItems:"center",gap:5,fontSize:12.5,color:"var(--text-3)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"8px 10px",cursor:"pointer",fontWeight:500,marginTop:2},addBox:{border:"1px solid var(--border)",borderRadius:9,padding:10,display:"flex",flexDirection:"column",gap:8},dateTimeRow:{display:"flex",gap:8,alignItems:"flex-end"},dateTimeGroup:{display:"flex",flexDirection:"column",gap:3,flex:1},dtLabel:{fontSize:10,fontWeight:600,color:"var(--text-3)",letterSpacing:"0.08em",textTransform:"uppercase"},dtInput:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},dtEndValue:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,color:"var(--text-2)",background:"var(--bg)"},addRow:{display:"flex",alignItems:"center",gap:6},input:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",flex:1,minWidth:0},select:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 8px",fontSize:12.5,fontFamily:"inherit",flex:1},minLabel:{fontSize:11,color:"var(--text-3)"},gcalHint:{color:"#3A7CA5",display:"grid",placeItems:"center"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"}},Ve={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},Yg=Object.keys(Ve),sl=["Yearly","Quarterly","Monthly","Weekly"],Nr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Qg=[{label:"Q1 · Jan–Mar",startMonth:0},{label:"Q2 · Apr–Jun",startMonth:3},{label:"Q3 · Jul–Sep",startMonth:6},{label:"Q4 · Oct–Dec",startMonth:9}],ya=new Date().getFullYear(),Kg=Array.from({length:8},(t,e)=>ya-1+e);function Ah(t=720){const[e,r]=b.useState(()=>window.innerWidth<t);return b.useEffect(()=>{const o=()=>r(window.innerWidth<t);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[t]),e}const go=864e5,qt=30,jo=190,bn=t=>new Date(t+"T00:00:00"),Xg=t=>t.toLocaleDateString("en-US",{month:"short",day:"numeric"}),Mh=[{key:"yearly",label:"Yearly",horizons:["Yearly"]},{key:"quarterly",label:"Quarterly",horizons:["Quarterly"]},{key:"mw",label:"Monthly & Weekly",horizons:["Monthly","Weekly"]}],Wh={Yearly:"Yr",Quarterly:"Q",Monthly:"Mo",Weekly:"Wk"},_h={Yearly:"Y",Quarterly:"Q",Monthly:"M",Weekly:"W"},Jg={Yearly:0,Quarterly:1,Monthly:2,Weekly:3},il=t=>sl[Math.min(sl.indexOf(t)+1,sl.length-1)],ms=t=>{if(!t||!t.start_date)return Array.from({length:12},(l,a)=>a);const e=new Date(t.start_date+"T00:00:00"),r=new Date(t.end_date+"T00:00:00"),o=e.getFullYear(),s=e.getMonth(),i=r.getFullYear()>o?11:r.getMonth();return Array.from({length:i-s+1},(l,a)=>s+a)},fs=t=>new Date(t+"T00:00:00").getFullYear(),rp=(t,e,r)=>{const o=(r-1)*7+1,s=Math.min(o+6,new Date(t,e+1,0).getDate()),i=String(e+1).padStart(2,"0");return{start_date:`${t}-${i}-${String(o).padStart(2,"0")}`,end_date:`${t}-${i}-${String(s).padStart(2,"0")}`}},En=(t,e,r,o=1)=>{const s=e;switch(t){case"Yearly":return{start_date:`${s}-01-01`,end_date:`${s}-12-31`};case"Quarterly":{const i=Math.floor(r/3)*3,l=i+1,a=i+3,d=new Date(s,a,0).getDate();return{start_date:`${s}-${String(l).padStart(2,"0")}-01`,end_date:`${s}-${String(a).padStart(2,"0")}-${d}`}}case"Monthly":{const i=new Date(s,r+1,0).getDate();return{start_date:`${s}-${String(r+1).padStart(2,"0")}-01`,end_date:`${s}-${String(r+1).padStart(2,"0")}-${i}`}}case"Weekly":return rp(s,r,o);default:return{start_date:`${s}-01-01`,end_date:`${s}-12-31`}}},qg=(t,e)=>{const r=new Date(t+"T00:00:00");return r.setDate(r.getDate()+e),`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`},va=(t,e)=>Math.round((new Date(e+"T00:00:00")-new Date(t+"T00:00:00"))/go)+1,Lh=(t,e)=>new Date(t,e+1,0).getDate(),xa=t=>{const e=new Date(t.start_date+"T00:00:00");if(t.horizon==="Monthly")return Lh(e.getFullYear(),e.getMonth());if(t.horizon==="Weekly"){const r=Math.min(Math.max(Math.ceil(e.getDate()/7),1),4),o=rp(e.getFullYear(),e.getMonth(),r);return va(o.start_date,o.end_date)}return va(t.start_date,t.end_date)},Zg=t=>Math.round(xa(t)*1.5),Ph=t=>t.horizon==="Monthly"||t.horizon==="Weekly",$h=(t,e)=>{const r=e.getFullYear(),o=e.getMonth();return t==="Quarterly"?En("Quarterly",r,o):t==="Monthly"?En("Monthly",r,o):t==="Weekly"?En("Weekly",r,o,Math.min(Math.max(Math.ceil(e.getDate()/7),1),4)):En("Yearly",r,0)},Nh=t=>{if(!t.start_date)return"";const e=new Date(t.start_date+"T00:00:00"),r=e.getMonth();switch(t.horizon){case"Yearly":return`${e.getFullYear()}`;case"Quarterly":return`Q${Math.floor(r/3)+1} ${e.getFullYear()}`;case"Monthly":return`${Nr[r]} ${e.getFullYear()}`;case"Weekly":return`${Nr[r]} W${Math.ceil(e.getDate()/7)}`;default:return""}};function Oh(){const[t,e]=b.useState([]),[r,o]=b.useState("All"),[s,i]=b.useState({}),[l,a]=b.useState({}),[d,g]=b.useState(null),[h,y]=b.useState(""),[f,w]=b.useState(0),[k,j]=b.useState(1),[I,p]=b.useState(ya),[c,u]=b.useState(null),v=Ah(),[S,z]=b.useState(!v),[L,H]=b.useState(null),M=b.useRef(null);b.useEffect(()=>{M.current=L},[L]);const[$,C]=b.useState(null),B=b.useRef(null);b.useEffect(()=>{B.current=$},[$]);const x=b.useRef(null),[G,at]=b.useState(null),J=b.useRef(null),[D,F]=b.useState(null),[A,V]=b.useState(null),W=(E,U)=>{if(D===U){F(null);return}const yt=E.currentTarget.getBoundingClientRect(),vt=yt.bottom+220<window.innerHeight;V({right:Math.max(8,window.innerWidth-yt.right),...vt?{top:yt.bottom+4}:{bottom:window.innerHeight-yt.top+4}}),F(U)},R=E=>{clearTimeout(J.current),J.current=setTimeout(()=>at(E),350)},m=()=>{clearTimeout(J.current),at(null)},N=b.useCallback(()=>{O.getGoals().then(e).catch(console.error)},[]);b.useEffect(()=>{N()},[N]);const{deleteItem:ot,toasts:et,handleUndo:ft,handleDismiss:It}=sn(O.deleteGoal,O.restoreGoal,N),ht=b.useCallback(async()=>{const E=M.current;if(H(null),!E)return;const U=Math.round(E.dx/qt);if(!U)return;const yt=$h(E.g.horizon,bn(qg(E.g.start_date,U)));yt.start_date!==E.g.start_date&&(await O.updateGoal(E.g.id,{pillar:E.g.pillar,start_date:yt.start_date,end_date:yt.end_date}),N())},[N]),jt=!!L;b.useEffect(()=>{if(!jt)return;const E=yt=>H(vt=>vt&&{...vt,dx:yt.clientX-vt.startX}),U=()=>ht();return window.addEventListener("pointermove",E),window.addEventListener("pointerup",U),()=>{window.removeEventListener("pointermove",E),window.removeEventListener("pointerup",U)}},[jt,ht]);const Q=b.useCallback(async()=>{const E=B.current;if(C(null),!E)return;const U=E.g,yt=xa(U),vt=Zg(U),Jt=Math.max(yt,Math.min(vt,va(U.start_date,U.end_date)+Math.round(E.dx/qt))),ze=qg(U.start_date,Jt-1);ze!==U.end_date&&(await O.updateGoal(U.id,{end_date:ze}),N())},[N]),mt=!!$;b.useEffect(()=>{if(!mt)return;const E=yt=>C(vt=>vt&&{...vt,dx:yt.clientX-vt.startX}),U=()=>Q();return window.addEventListener("pointermove",E),window.addEventListener("pointerup",U),()=>{window.removeEventListener("pointermove",E),window.removeEventListener("pointerup",U)}},[mt,Q]);const bt=r==="All",Tt=Ve[r]||{dot:"var(--text-3)"},Qt=bt?t:t.filter(E=>E.pillar===r),tr=Qt.filter(E=>!E.parent_goal_id),Oe=E=>Qt.filter(U=>U.parent_goal_id===E),an=E=>a(U=>({...U,[E]:!U[E]})),P=E=>E.horizon==="Monthly"||E.horizon==="Weekly",gt=E=>s[E.id]!==void 0?s[E.id]:P(E),Ft=E=>i(U=>({...U,[E.id]:!gt(E)})),Ie=(E,U=null)=>{g(E),y(""),j(1),p(U?fs(U.start_date):ya);const yt=E==="ROOT"?"Yearly":il(U==null?void 0:U.horizon),vt=E==="ROOT"?[0]:ms(U);w(yt==="Quarterly"?Math.floor(vt[0]/3)*3:vt[0]??0)},He=async(E,U)=>{if(!h.trim())return;const yt=(U==null?void 0:U.horizon)??null,vt=E==="ROOT"?"Yearly":il(yt),Jt=E==="ROOT"?r:(U==null?void 0:U.pillar)||r,ze=vt==="Yearly"?Number(I):U?fs(U.start_date):Number(I),{start_date:xt,end_date:Te}=En(vt,ze,f,k);await O.createGoal({pillar:Jt,title:h.trim(),horizon:vt,parent_goal_id:E==="ROOT"?null:E,start_date:xt,end_date:Te}),E!=="ROOT"&&a(mr=>({...mr,[E]:!0})),g(null),y(""),N()},er=E=>{const U=E.start_date?new Date(E.start_date+"T00:00:00"):new Date,yt=U.getMonth(),vt=Math.min(Math.max(Math.ceil(U.getDate()/7),1),4);u({id:E.id,title:E.title,pillar:E.pillar,horizon:E.horizon,parentGoal:t.find(Jt=>Jt.id===E.parent_goal_id)||null,year:fs(E.start_date),month:E.horizon==="Quarterly"?Math.floor(yt/3)*3:yt,week:vt})},Td=async()=>{if(!c||!c.title.trim())return;let E=c.month;c.horizon==="Weekly"&&(E=ms(c.parentGoal)[0]);const U=c.horizon==="Yearly"?Number(c.year):c.parentGoal?fs(c.parentGoal.start_date):Number(c.year),{start_date:yt,end_date:vt}=En(c.horizon,U,E,c.week);await O.updateGoal(c.id,{title:c.title.trim(),pillar:c.pillar,start_date:yt,end_date:vt}),u(null),N()},Ed=({parentId:E,parentGoal:U,depth:yt})=>{const vt=E==="ROOT"?"Yearly":il((U==null?void 0:U.horizon)??null),Jt=E==="ROOT"?Array.from({length:12},(xt,Te)=>Te):ms(U),ze=Qg.filter(xt=>Jt.includes(xt.startMonth));return n.jsxs("div",{style:{...q.addBox,marginLeft:yt*24},children:[n.jsx("input",{autoFocus:!0,placeholder:`New ${vt.toLowerCase()} goal…`,value:h,onChange:xt=>y(xt.target.value),onKeyDown:xt=>{xt.key==="Enter"&&He(E,U),xt.key==="Escape"&&g(null)},style:q.input}),vt==="Yearly"&&n.jsx("select",{value:I,onChange:xt=>p(Number(xt.target.value)),style:q.monthSelect,children:Kg.map(xt=>n.jsx("option",{value:xt,children:xt},xt))}),vt==="Quarterly"&&n.jsx("select",{value:f,onChange:xt=>w(Number(xt.target.value)),style:q.monthSelect,children:ze.map(xt=>n.jsx("option",{value:xt.startMonth,children:xt.label},xt.startMonth))}),vt==="Monthly"&&n.jsx("select",{value:f,onChange:xt=>w(Number(xt.target.value)),style:q.monthSelect,children:Jt.map(xt=>n.jsx("option",{value:xt,children:Nr[xt]},xt))}),vt==="Weekly"&&n.jsxs(n.Fragment,{children:[n.jsx("span",{style:q.inheritTag,children:Nr[Jt[0]]}),n.jsx("select",{value:k,onChange:xt=>j(Number(xt.target.value)),style:q.monthSelect,children:[1,2,3,4].map(xt=>n.jsxs("option",{value:xt,children:["Week ",xt]},xt))})]}),n.jsx("button",{onClick:()=>He(E,U),style:q.saveBtn,children:n.jsx(zt,{size:14})}),n.jsx("button",{onClick:()=>g(null),style:q.cancelBtn,children:n.jsx(kt,{size:14})})]})},Bd=({goal:E,depth:U})=>{var xt,Te,mr,gn;const yt=Oe(E.id),vt=l[E.id],Jt=E.horizon!=="Weekly";if((c==null?void 0:c.id)===E.id){const re=ms(c.parentGoal),_r=Qg.filter(St=>re.includes(St.startMonth));return n.jsxs("div",{style:{...q.editBox,marginLeft:U*24},children:[n.jsx("input",{autoFocus:!0,value:c.title,onChange:St=>u({...c,title:St.target.value}),onKeyDown:St=>St.key==="Enter"&&Td(),style:{...q.input,flex:1}}),n.jsx("select",{value:c.pillar,onChange:St=>u({...c,pillar:St.target.value}),style:q.monthSelect,children:Yg.map(St=>n.jsx("option",{children:St},St))}),c.horizon==="Yearly"&&n.jsx("select",{value:c.year,onChange:St=>u({...c,year:Number(St.target.value)}),style:q.monthSelect,children:Kg.map(St=>n.jsx("option",{value:St,children:St},St))}),c.horizon==="Quarterly"&&n.jsx("select",{value:c.month,onChange:St=>u({...c,month:Number(St.target.value)}),style:q.monthSelect,children:_r.map(St=>n.jsx("option",{value:St.startMonth,children:St.label},St.startMonth))}),c.horizon==="Monthly"&&n.jsx("select",{value:c.month,onChange:St=>u({...c,month:Number(St.target.value)}),style:q.monthSelect,children:re.map(St=>n.jsx("option",{value:St,children:Nr[St]},St))}),c.horizon==="Weekly"&&n.jsxs(n.Fragment,{children:[n.jsx("span",{style:q.inheritTag,children:Nr[re[0]]}),n.jsx("select",{value:c.week,onChange:St=>u({...c,week:Number(St.target.value)}),style:q.monthSelect,children:[1,2,3,4].map(St=>n.jsxs("option",{value:St,children:["Week ",St]},St))})]}),n.jsx("button",{onClick:Td,style:q.saveBtn,children:n.jsx(zt,{size:14})}),n.jsx("button",{onClick:()=>u(null),style:q.cancelBtn,children:n.jsx(kt,{size:14})})]})}return n.jsxs("div",{children:[n.jsxs("div",{style:{...q.row,marginLeft:U*24,background:U===0&&((xt=Ve[E.pillar])==null?void 0:xt.soft)||"transparent"},children:[yt.length>0?n.jsx("button",{onClick:()=>an(E.id),style:q.caret,children:vt?n.jsx(zi,{size:15}):n.jsx(on,{size:15})}):n.jsx("span",{style:{...q.caret,opacity:.25},children:n.jsx(Sd,{size:12})}),n.jsx("span",{style:{...q.horizonTag,color:((Te=Ve[E.pillar])==null?void 0:Te.dot)||Tt.dot,borderColor:((mr=Ve[E.pillar])==null?void 0:mr.dot)||Tt.dot},title:E.horizon,children:v?_h[E.horizon]:E.horizon}),n.jsx("span",{style:{...q.title,...G===E.id?q.titleFull:{}},title:E.title,onPointerDown:()=>R(E.id),onPointerUp:m,onPointerLeave:m,onPointerCancel:m,children:E.title}),!v&&n.jsx("span",{style:q.periodTag,children:Nh(E)}),v?n.jsxs("div",{style:{position:"relative",flexShrink:0},children:[n.jsx("button",{onClick:re=>W(re,E.id),style:q.rowAdd,title:"Options",children:n.jsx(Zb,{size:15})}),D===E.id&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:q.menuBackdrop,onClick:()=>F(null)}),n.jsxs("div",{style:{...q.goalMenu,...A},children:[n.jsxs("button",{style:q.menuItem,onClick:()=>{Ft(E),F(null)},children:[gt(E)?n.jsx(ma,{size:14}):n.jsx(ai,{size:14})," ",gt(E)?"Hide from timeline":"Show on timeline"]}),n.jsxs("button",{style:q.menuItem,onClick:()=>{er(E),F(null)},children:[n.jsx(ye,{size:14})," Edit"]}),Jt&&n.jsxs("button",{style:q.menuItem,onClick:()=>{a(re=>({...re,[E.id]:!0})),Ie(E.id,E),F(null)},children:[n.jsx(ie,{size:14})," Add sub-goal"]}),n.jsxs("button",{style:{...q.menuItem,color:"#C2536B"},onClick:()=>{ot(E.id,E.title),F(null)},children:[n.jsx(kt,{size:14})," Delete"]})]})]})]}):n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>Ft(E),style:{...q.rowAdd,color:gt(E)?((gn=Ve[E.pillar])==null?void 0:gn.dot)||Tt.dot:"var(--text-3)"},title:gt(E)?"Showing on timeline — click to hide":"Hidden from timeline — click to show",children:gt(E)?n.jsx(ai,{size:13}):n.jsx(ma,{size:13})}),n.jsx("button",{onClick:()=>er(E),style:q.rowAdd,title:"Edit",children:n.jsx(ye,{size:12})}),Jt&&n.jsx("button",{onClick:()=>{a(re=>({...re,[E.id]:!0})),Ie(E.id,E)},style:q.rowAdd,title:"Add sub-goal",children:n.jsx(ie,{size:13})}),n.jsx("button",{onClick:()=>ot(E.id,E.title),style:{...q.rowAdd,color:"var(--text-3)"},title:"Delete",children:n.jsx(kt,{size:13})})]})]}),vt&&yt.map(re=>n.jsx(Bd,{goal:re,depth:U+1},re.id)),vt&&d===E.id&&n.jsx(Ed,{parentId:E.id,parentGoal:E,depth:U+1})]})},Xn=t.filter(E=>gt(E)&&E.start_date&&E.end_date),pp=Mh.map(E=>({...E,items:Xn.filter(U=>E.horizons.includes(U.horizon)).sort((U,yt)=>U.pillar.localeCompare(yt.pillar)||U.start_date.localeCompare(yt.start_date)||Jg[U.horizon]-Jg[yt.horizon]||U.end_date.localeCompare(yt.end_date))})).filter(E=>E.items.length>0),ue=(()=>{if(!Xn.length)return null;let E=Xn[0].start_date,U=Xn[0].end_date;return Xn.forEach(yt=>{yt.start_date<E&&(E=yt.start_date),yt.end_date>U&&(U=yt.end_date)}),{start:bn(E),end:bn(U)}})(),Di=(()=>{if(!ue)return[];const E=[];for(let U=ue.start.getTime();U<=ue.end.getTime();U+=go)E.push(new Date(U));return E})(),Qo=Di.length,mp=(()=>{const E=[];return Di.forEach(U=>{const yt=`${U.getFullYear()}-${U.getMonth()}`,vt=E[E.length-1];vt&&vt.key===yt?vt.days++:E.push({key:yt,label:`${Nr[U.getMonth()]} '${String(U.getFullYear()).slice(2)}`,days:1})}),E})(),Dd=new Date;Dd.setHours(0,0,0,0);const dn=ue?Math.round((Dd-ue.start)/go):-1,Ko=dn>=0&&dn<Qo,fp=E=>Math.round((bn(E.end_date)-bn(E.start_date))/go)+1,Rd=(S?jo:0)+dn*qt,hp=ue?`${ue.start.getTime()}-${ue.end.getTime()}`:"";return b.useEffect(()=>{if(!Ko)return;const E=x.current;E&&(E.scrollLeft=Math.max(0,Rd-E.clientWidth/2+qt/2))},[hp,dn,S,Ko]),n.jsxs("div",{style:q.page,children:[n.jsxs("div",{style:q.head,children:[n.jsx("div",{style:q.eyebrow,children:"Anvil · Goals"}),n.jsx("h1",{style:q.h1,children:bt?"All Goals":`${r} Goals`})]}),n.jsxs("div",{style:q.pillarPicker,children:[n.jsx("button",{onClick:()=>{o("All"),g(null),u(null)},style:{...q.pillarChip,...bt?{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:"All Goals"}),Yg.map(E=>{const U=E===r;return n.jsxs("button",{onClick:()=>{o(E),g(null),u(null)},style:{...q.pillarChip,...U?{background:Ve[E].dot,color:"#fff",borderColor:Ve[E].dot}:{}},children:[n.jsx("span",{style:{...q.dot,background:U?"#fff":Ve[E].dot}}),E]},E)})]}),n.jsxs("div",{style:q.list,children:[tr.map(E=>n.jsx(Bd,{goal:E,depth:0},E.id)),tr.length===0&&n.jsxs("div",{style:q.ganttEmpty,children:["No goals yet",bt?"":` for ${r}`,"."]}),!bt&&d==="ROOT"&&n.jsx(Ed,{parentId:"ROOT",parentGoal:null,depth:0}),!bt&&d!=="ROOT"&&n.jsxs("button",{onClick:()=>Ie("ROOT",null),style:q.rootAdd,children:[n.jsx(ie,{size:14})," Add top-level goal"]}),bt&&n.jsx("div",{style:q.allHint,children:"Pick a pillar above to add new goals."})]}),n.jsxs("div",{style:q.ganttWrap,children:[n.jsxs("div",{style:q.ganttTop,children:[n.jsxs("div",{style:q.ganttTitle,children:["Daily Timeline",ue?` · ${Xg(ue.start)} – ${Xg(ue.end)}`:""]}),n.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[n.jsx("span",{style:q.ganttHint,children:"Drag a bar to reschedule"}),n.jsxs("button",{onClick:()=>z(E=>!E),style:q.labelToggle,children:[S?n.jsx(uh,{size:14}):n.jsx(bh,{size:14}),S?"Hide names":"Show names"]})]})]}),ue?n.jsx("div",{style:q.ganttScroll,ref:x,children:n.jsxs("div",{style:{minWidth:(S?jo:0)+Qo*qt,position:"relative"},children:[Ko&&n.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:Rd,width:qt,background:"color-mix(in srgb, var(--accent) 14%, transparent)",pointerEvents:"none",zIndex:3}}),n.jsxs("div",{style:q.gBandRow,children:[S&&n.jsx("div",{style:{...q.gLabelHead,zIndex:4},children:"Goal"}),n.jsx("div",{style:{display:"flex"},children:mp.map((E,U)=>n.jsx("div",{style:{...q.gMonthCell,width:E.days*qt},children:E.label},U))})]}),n.jsxs("div",{style:q.gBandRow,children:[S&&n.jsx("div",{style:{...q.gLabelHead,zIndex:4,fontSize:10,color:"var(--text-3)",fontWeight:600},children:"days →"}),n.jsx("div",{style:{display:"flex"},children:Di.map((E,U)=>{const yt=E.getDay()===0||E.getDay()===6,vt=U===dn;return n.jsx("div",{style:{...q.gDayCell,...yt?q.gWeekend:{},...vt?q.gTodayCell:{}},children:E.getDate()},U)})})]}),pp.map(E=>n.jsxs("div",{children:[n.jsxs("div",{style:q.gGroupRow,children:[S?n.jsxs("div",{style:q.gGroupLabel,children:[E.label,n.jsx("span",{style:q.gGroupCount,children:E.items.length})]}):n.jsxs("div",{style:q.gGroupChip,children:[E.label," · ",E.items.length]}),n.jsx("div",{style:{width:Qo*qt,flexShrink:0}})]}),E.items.map(U=>{var Md;const yt=((Md=Ve[U.pillar])==null?void 0:Md.dot)||"#9A968C",vt=Math.round((bn(U.start_date)-ue.start)/go),Jt=fp(U),ze=(L==null?void 0:L.id)===U.id,xt=ze?L.dx:0,Te=Ph(U),mr=($==null?void 0:$.id)===U.id,gn=Te?xa(U):Jt,re=Te?Zg(U):Jt,_r=mr?Math.max(gn,Math.min(re,Jt+Math.round($.dx/qt))):Jt,St=_r*qt-4,Fd=St>=54,Ad=`${U.title} · ${U.start_date} → ${U.end_date} · ${_r} day${_r>1?"s":""}${Te?` (max ${re})`:""}`;return n.jsxs("div",{style:q.gRow,children:[S&&n.jsxs("div",{style:{...q.gLabel,paddingLeft:12},children:[n.jsx("span",{style:{...q.ganttRowDot,background:yt}}),n.jsx("span",{style:{...q.gHzTag,color:yt,borderColor:yt},children:Wh[U.horizon]}),n.jsx("span",{style:q.gLabelText,title:U.title,children:U.title}),n.jsxs("span",{style:q.gDurChip,children:[_r,"d"]})]}),n.jsxs("div",{style:{...q.gTrack,width:Qo*qt},children:[Ko&&n.jsx("div",{style:{...q.gTodayLine,left:dn*qt}}),n.jsxs("div",{onPointerDown:cn=>{cn.preventDefault(),H({id:U.id,startX:cn.clientX,dx:0,g:U})},style:{...q.gBar,left:vt*qt+2,width:St,background:yt,cursor:ze?"grabbing":"grab",transform:xt?`translateX(${xt}px)`:"none",zIndex:ze||mr?6:1,boxShadow:ze||mr?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:Ad,children:[Te&&_r>gn&&n.jsx("div",{style:{position:"absolute",left:gn*qt,top:0,bottom:0,right:0,background:"#C2536B",borderRadius:"0 5px 5px 0"}}),n.jsx(rh,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff",position:"relative",zIndex:1}}),Fd&&n.jsx("span",{style:{...q.gBarLabel,position:"relative",zIndex:1},children:U.title}),Te&&n.jsx("div",{onPointerDown:cn=>{cn.preventDefault(),cn.stopPropagation(),C({id:U.id,startX:cn.clientX,dx:0,g:U})},style:q.resizeHandle,title:`Drag to extend up to ${re} days`,children:n.jsx("div",{style:q.resizeGrip})})]}),!Fd&&n.jsx("span",{style:{...q.gBarOutside,left:vt*qt+St+8+xt},title:Ad,children:U.title})]})]},U.id)})]},E.key))]})}):n.jsx("div",{style:q.ganttEmpty,children:"No goals on the timeline. Click the eye icon on a goal to show it here."}),ue&&n.jsxs("div",{style:q.gLegend,children:[n.jsxs("span",{style:q.gLegendItem,children:[n.jsx("span",{style:{...q.gLegendBar}})," bar length = number of days"]}),n.jsxs("span",{style:q.gLegendItem,children:[n.jsx("span",{style:q.gLegendToday})," today"]})]})]}),n.jsx(ln,{toasts:et,onUndo:ft,onDismiss:It})]})}const q={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},pillarPicker:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},pillarChip:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},list:{background:"var(--surface)",borderRadius:12,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"hidden"},row:{display:"flex",alignItems:"center",gap:9,padding:"9px 10px",borderRadius:8,flexWrap:"nowrap"},caret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},horizonTag:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",border:"1px solid",borderRadius:5,padding:"2px 6px",flexShrink:0},title:{fontSize:14,fontWeight:500,lineHeight:1.3,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",userSelect:"none",WebkitUserSelect:"none",cursor:"default"},titleFull:{whiteSpace:"normal",overflow:"visible",textOverflow:"clip",wordBreak:"break-word"},periodTag:{fontSize:11,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"3px 8px",borderRadius:12,flexShrink:0},rowAdd:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,flexShrink:0},menuBackdrop:{position:"fixed",inset:0,zIndex:40},goalMenu:{position:"fixed",zIndex:41,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 6px 24px rgba(0,0,0,0.18)",padding:4,minWidth:180,display:"flex",flexDirection:"column"},menuItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:7,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text)",textAlign:"left"},rootAdd:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"var(--text-2)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"9px 12px",cursor:"pointer",fontWeight:600,fontFamily:"inherit",marginTop:6,width:"100%",justifyContent:"center"},addBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 0 6px 28px",flexWrap:"wrap"},editBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 10px",flexWrap:"wrap",background:"var(--bg)",borderRadius:8,margin:"4px 0"},input:{border:"1px solid var(--border)",borderRadius:7,padding:"8px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",flex:1,minWidth:120},monthSelect:{border:"1px solid var(--border)",borderRadius:7,padding:"8px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},inheritTag:{fontSize:11.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"6px 9px",borderRadius:7,flexShrink:0},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},ganttWrap:{background:"var(--surface)",borderRadius:12,padding:"16px 14px",marginTop:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},ganttTop:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10,marginBottom:14},ganttTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",fontFamily:"'Fraunces',Georgia,serif"},ganttHint:{fontSize:11.5,color:"var(--text-3)",fontWeight:500},labelToggle:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 10px",borderRadius:8,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},gGroupChip:{position:"sticky",left:0,zIndex:3,background:"var(--surface-2)",padding:"5px 10px",fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",whiteSpace:"nowrap",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center"},allHint:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",padding:"10px 12px"},ganttEmpty:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},ganttScroll:{overflowX:"auto"},ganttRowDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},gBandRow:{display:"flex",alignItems:"stretch",borderBottom:"1px solid var(--border)"},gLabelHead:{width:jo,flexShrink:0,position:"sticky",left:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",padding:"6px 10px",fontSize:12,fontWeight:700,color:"var(--text-2)"},gMonthCell:{flexShrink:0,borderLeft:"1px solid var(--border)",fontSize:10.5,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gDayCell:{width:qt,flexShrink:0,textAlign:"center",fontSize:10,color:"var(--text-3)",padding:"4px 0",borderLeft:"1px solid var(--border)",fontWeight:600},gWeekend:{background:"var(--surface-2)"},gTodayCell:{background:"var(--hover)",color:"var(--accent)",fontWeight:800},gGroupRow:{display:"flex",alignItems:"stretch",background:"var(--surface-2)",borderBottom:"1px solid var(--border)",borderTop:"1px solid var(--border)"},gGroupLabel:{width:jo,flexShrink:0,position:"sticky",left:0,background:"var(--surface-2)",zIndex:3,padding:"6px 12px",fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",gap:7},gGroupCount:{fontSize:10,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},gHzTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.04em",border:"1px solid",borderRadius:4,padding:"1px 4px",flexShrink:0},gRow:{display:"flex",alignItems:"stretch",minHeight:36,borderBottom:"1px solid var(--border)"},gLabel:{width:jo,flexShrink:0,display:"flex",alignItems:"center",gap:7,position:"sticky",left:0,background:"var(--surface)",zIndex:2,borderRight:"1px solid var(--border)",paddingRight:8,overflow:"hidden"},gLabelText:{flex:1,minWidth:0,fontSize:12,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},gDurChip:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",borderRadius:10,padding:"1px 6px",flexShrink:0,marginRight:6},gTrack:{position:"relative",flexShrink:0,minHeight:36,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent ${qt}px)`},gBar:{position:"absolute",top:9,height:18,borderRadius:5,display:"flex",alignItems:"center",padding:"0 7px",boxShadow:"0 1px 2px rgba(0,0,0,0.15)",overflow:"hidden",zIndex:1},gBarLabel:{fontSize:11,fontWeight:600,color:"#fff",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},gBarOutside:{position:"absolute",top:9,height:18,display:"flex",alignItems:"center",fontSize:11,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",pointerEvents:"none",zIndex:1},resizeHandle:{position:"absolute",right:0,top:0,bottom:0,width:12,cursor:"ew-resize",display:"grid",placeItems:"center",touchAction:"none",zIndex:2},resizeGrip:{width:2,height:11,background:"rgba(255,255,255,0.9)",borderRadius:1,boxShadow:"3px 0 0 rgba(255,255,255,0.6)"},gTodayLine:{position:"absolute",top:0,bottom:0,width:2,background:"#C2536B",zIndex:0,opacity:.6},gLegend:{display:"flex",gap:16,marginTop:12,fontSize:11,color:"var(--text-3)",flexWrap:"wrap"},gLegendItem:{display:"flex",alignItems:"center",gap:6,fontWeight:600},gLegendBar:{width:18,height:8,borderRadius:3,background:"var(--accent)",display:"inline-block"},gLegendToday:{width:2,height:12,background:"#C2536B",display:"inline-block"}},en={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.12)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.12)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.12)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.12)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.12)"}},np=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Hh=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ei=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,Gh=()=>Ei(new Date),Uh=(t=0)=>{const e=new Date,r=e.getDay(),o=r===0?-6:1-r,s=new Date(e);return s.setDate(e.getDate()+o+t*7),Array.from({length:7},(i,l)=>{const a=new Date(s);return a.setDate(s.getDate()+l),Ei(a)})},Vh=(t=0)=>{const e=new Date,r=new Date(e.getFullYear(),e.getMonth()+t,1),o=r.getFullYear(),s=r.getMonth(),i=new Date(o,s+1,0).getDate(),l=r.getDay(),a=l===0?6:l-1,d=Array.from({length:i},(h,y)=>`${o}-${String(s+1).padStart(2,"0")}-${String(y+1).padStart(2,"0")}`),g=r.toLocaleDateString("en-US",{month:"long",year:"numeric"});return{dates:d,startOffset:a,label:g,year:o,month:s}},tc=t=>new Date(t+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"}),kr=Gh(),Yh=new Date().getFullYear();function Qh(){var W,R;const[t,e]=b.useState([]),[r,o]=b.useState("ALL"),[s,i]=b.useState(!1),[l,a]=b.useState(!1),[d,g]=b.useState(!1),[h,y]=b.useState(null),[f,w]=b.useState(null),[k,j]=b.useState({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week"}),[I,p]=b.useState(!1),[c,u]=b.useState([]),v=b.useCallback(()=>O.getHabits().then(e).catch(console.error),[]);b.useEffect(()=>{v()},[v]),b.useEffect(()=>{O.getSetting("habit_order").then(m=>{Array.isArray(m==null?void 0:m.value)&&u(m.value)}).catch(()=>{})},[]);const S=b.useMemo(()=>c.length?[...t].sort((m,N)=>{const ot=c.indexOf(m.id),et=c.indexOf(N.id);return ot===-1&&et===-1?0:ot===-1?1:et===-1?-1:ot-et}):t,[t,c]),z=async m=>{u(m),await O.setSetting("habit_order",m),p(!1)};b.useEffect(()=>{const m=()=>{const N=window.innerWidth<720;i(N),N||a(!1)};return m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[]);const{deleteItem:L,toasts:H,handleUndo:M,handleDismiss:$}=sn(O.deleteHabit,O.restoreHabit,v),C=m=>{o(m),s&&a(!1)},B=(m,N)=>{(m.type==="minimum"||m.type==="maximum")&&m.period==="day"?w({habit:m,date:N}):x(m.id,N)},x=async(m,N)=>{await O.toggleHabitLog(m,N),v()},G=async(m,N,ot,et)=>{await O.setHabitLogCount(m,N,ot,et),w(null),v()},at=async(m,N)=>{await O.clearHabitLog(m,N),w(null),v()},J=async()=>{if(!k.name.trim())return;const m={name:k.name.trim(),pillar:k.pillar,target_per_week:Number(k.target_per_week)||7,type:k.type,target_count:k.type!=="regular"?Number(k.target_count)||1:null,period:k.type!=="regular"?k.period:null};await O.createHabit(m),j({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week"}),g(!1),v()},D=async(m,N)=>{r===m&&o("ALL"),L(m,N)},F=t.find(m=>m.id===r),A=m=>new Set(m.logs||[]),V={..._.sidebar,...s?_.sidebarOverlay:{},...s&&!l?_.sidebarHidden:{}};return n.jsxs("div",{style:_.shell,children:[s&&l&&n.jsx("div",{style:_.backdrop,onClick:()=>a(!1)}),n.jsxs("aside",{style:V,children:[n.jsxs("div",{style:_.sideTop,children:[n.jsx("div",{style:_.brand,children:"Anvil · Habits"}),s&&n.jsx("button",{onClick:()=>a(!1),style:_.closeBtn,children:n.jsx(kt,{size:18})})]}),n.jsxs("div",{style:{..._.sideItem,...r==="ALL"?_.sideItemOn:{},cursor:"default",padding:"2px 6px 2px 10px"},children:[n.jsxs("button",{onClick:()=>C("ALL"),style:{display:"flex",alignItems:"center",gap:9,flex:1,border:"none",background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:r==="ALL"?600:500,color:"var(--text-2)",padding:"7px 0"},children:[n.jsx(Vb,{size:15}),n.jsx("span",{style:_.sideLabel,children:"All Habits"}),n.jsx("span",{style:_.sideCount,children:t.length})]}),n.jsx("button",{onClick:m=>{m.stopPropagation(),p(!0)},style:_.tinyBtn,title:"Reorder habits",children:n.jsx(ye,{size:12})})]}),n.jsx("div",{style:_.sideDivider}),S.map(m=>{var et;const N=r===m.id,ot=((et=en[m.pillar])==null?void 0:et.dot)||"#9A968C";return n.jsxs("button",{onClick:()=>C(m.id),style:{..._.sideItem,...N?_.sideItemOn:{}},children:[n.jsx("span",{style:{..._.sideDot,background:ot}}),n.jsx("span",{style:_.sideLabel,children:m.name}),n.jsxs("span",{style:_.sideStreak,children:[n.jsx(Kn,{size:11})," ",m.streak]})]},m.id)}),d?n.jsx(Kh,{habit:k,onChange:j,onSave:J,onCancel:()=>g(!1)}):n.jsxs("button",{onClick:()=>g(!0),style:_.sideNewBtn,children:[n.jsx(ie,{size:13})," New habit"]})]}),n.jsxs("main",{style:_.main,children:[s&&n.jsxs("button",{onClick:()=>a(!0),style:_.hamburger,children:[n.jsx(jd,{size:18}),n.jsx("span",{style:_.hamburgerLabel,children:r==="ALL"?"All Habits":F==null?void 0:F.name})]}),r==="ALL"?n.jsx(qh,{habits:S,dayAction:B,logSet:A,onDelete:D,onEdit:m=>y(m)}):n.jsx(Zh,{habit:F,dayAction:B,logSet:A,onDelete:()=>D(F.id,F.name),onEdit:()=>y(F),setNote:(m,N)=>O.setHabitLogNote(F.id,m,N).then(v)}),r==="ALL"&&n.jsx(ry,{year:Yh})]}),I&&n.jsx(ey,{habits:S,onSave:z,onClose:()=>p(!1)}),h&&n.jsx(Xh,{habit:h,onSave:async m=>{await O.updateHabit(h.id,m),y(null),v()},onClose:()=>y(null)}),f&&n.jsx(Jh,{habit:f.habit,date:f.date,initialCount:((W=f.habit.log_counts)==null?void 0:W[f.date])??0,initialNote:((R=f.habit.log_notes)==null?void 0:R[f.date])??"",onSave:(m,N)=>G(f.habit.id,f.date,m,N),onClear:()=>at(f.habit.id,f.date),onClose:()=>w(null)}),n.jsx(ln,{toasts:H,onUndo:M,onDismiss:$})]})}function Kh({habit:t,onChange:e,onSave:r,onCancel:o}){const s=t.type!=="regular";return n.jsxs("div",{style:_.addBox,children:[n.jsx("input",{autoFocus:!0,placeholder:"Habit name",value:t.name,onChange:i=>e(l=>({...l,name:i.target.value})),onKeyDown:i=>i.key==="Enter"&&r(),style:_.sideInput}),n.jsx("select",{value:t.pillar,onChange:i=>e(l=>({...l,pillar:i.target.value})),style:_.sideInput,children:Object.keys(en).map(i=>n.jsx("option",{children:i},i))}),n.jsxs("select",{value:t.type,onChange:i=>e(l=>({...l,type:i.target.value})),style:_.sideInput,children:[n.jsx("option",{value:"regular",children:"Regular (yes/no)"}),n.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),n.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),s&&n.jsxs("div",{style:{display:"flex",gap:6},children:[n.jsx("input",{type:"number",min:1,placeholder:"N",value:t.target_count||"",onChange:i=>e(l=>({...l,target_count:i.target.value})),style:{..._.sideInput,width:60}}),n.jsx("select",{value:t.period,onChange:i=>e(l=>({...l,period:i.target.value})),style:_.sideInput,children:["day","week","month","year"].map(i=>n.jsx("option",{children:i},i))})]}),n.jsxs("div",{style:{display:"flex",gap:6},children:[n.jsx("button",{onClick:r,style:_.sideAddBtn,children:n.jsx(zt,{size:13})}),n.jsx("button",{onClick:o,style:_.sideCancelBtn,children:n.jsx(kt,{size:13})})]})]})}function Xh({habit:t,onSave:e,onClose:r}){const[o,s]=b.useState(t.name),[i,l]=b.useState(t.type||"regular"),[a,d]=b.useState(t.target_count||""),[g,h]=b.useState(t.period||"week"),[y,f]=b.useState(t.reminder_time||""),w=()=>e({name:o.trim(),type:i,target_count:i!=="regular"?Number(a):null,period:i!=="regular"?g:null,reminder_time:y||null});return n.jsx("div",{style:_.modalOverlay,onClick:r,children:n.jsxs("div",{style:_.modal,onClick:k=>k.stopPropagation(),children:[n.jsxs("div",{style:_.modalHead,children:["Edit Habit",n.jsx("button",{onClick:r,style:_.closeBtn,children:n.jsx(kt,{size:16})})]}),n.jsx("label",{style:_.modalLabel,children:"Name"}),n.jsx("input",{value:o,onChange:k=>s(k.target.value),style:_.sideInput}),n.jsx("label",{style:_.modalLabel,children:"Type"}),n.jsxs("select",{value:i,onChange:k=>l(k.target.value),style:_.sideInput,children:[n.jsx("option",{value:"regular",children:"Regular (yes/no)"}),n.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),n.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),i!=="regular"&&n.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[n.jsx("input",{type:"number",min:1,value:a,onChange:k=>d(k.target.value),style:{..._.sideInput,width:70}}),n.jsx("select",{value:g,onChange:k=>h(k.target.value),style:_.sideInput,children:["day","week","month","year"].map(k=>n.jsx("option",{children:k},k))})]}),n.jsx("label",{style:_.modalLabel,children:"Reminder time"}),n.jsx("input",{type:"time",value:y,onChange:k=>f(k.target.value),style:_.sideInput}),n.jsx("button",{onClick:w,style:{..._.sideAddBtn,width:"100%",marginTop:10,height:36},children:"Save"})]})})}function Jh({habit:t,date:e,initialCount:r,initialNote:o,onSave:s,onClear:i,onClose:l}){const[a,d]=b.useState(r??0),[g,h]=b.useState(o??""),y=t.target_count,f=t.type==="minimum"?a>=y:a>0&&a<=y,w=t.type==="maximum"&&a>y,k=f?"#4C9A6B":w?"#C2536B":"#C2773B",j=f?"✓ Goal met":w?"Over the limit":"Not met yet";return n.jsx("div",{style:_.modalOverlay,onClick:l,children:n.jsxs("div",{style:_.modal,onClick:I=>I.stopPropagation(),children:[n.jsxs("div",{style:_.modalHead,children:[t.name,n.jsx("button",{onClick:l,style:_.closeBtn,children:n.jsx(kt,{size:16})})]}),n.jsxs("div",{style:{fontSize:12,color:"var(--text-3)",marginBottom:2},children:[e," · ",t.type==="minimum"?`at least ${y}`:`no more than ${y}`," / ",t.period]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:20,margin:"14px 0 6px"},children:[n.jsx("button",{onClick:()=>d(I=>Math.max(0,I-1)),style:_.counterBtn,children:"−"}),n.jsx("span",{style:{fontSize:38,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:52,textAlign:"center",color:k},children:a}),n.jsx("button",{onClick:()=>d(I=>I+1),style:_.counterBtn,children:"+"})]}),n.jsx("div",{style:{textAlign:"center",fontSize:12.5,fontWeight:700,color:k,marginBottom:12},children:j}),n.jsx("textarea",{value:g,onChange:I=>h(I.target.value),placeholder:"Add a comment (optional)…",style:{..._.sideInput,minHeight:56,resize:"vertical"}}),n.jsxs("div",{style:{display:"flex",gap:8,marginTop:10},children:[n.jsxs("button",{onClick:i,style:{..._.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[n.jsx(kt,{size:14})," Delete"]}),n.jsxs("button",{onClick:()=>s(a,g),style:{..._.sideAddBtn,flex:1,justifyContent:"center",height:38},children:[n.jsx(zt,{size:14})," Set"]})]})]})})}function ll({pct:t,label:e,sub:r,color:o}){const i=2*Math.PI*26,l=i*(1-Math.max(0,Math.min(100,t))/100);return n.jsxs("div",{style:_.ringStat,children:[n.jsxs("div",{style:_.ringBox,children:[n.jsxs("svg",{width:"70",height:"70",viewBox:"0 0 70 70",children:[n.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:"var(--border)",strokeWidth:"7"}),n.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:o,strokeWidth:"7",strokeLinecap:"round",strokeDasharray:i,strokeDashoffset:l,transform:"rotate(-90 35 35)",style:{transition:"stroke-dashoffset 0.5s ease"}})]}),n.jsxs("div",{style:{..._.ringPct,color:o},children:[t,"%"]})]}),n.jsxs("div",{children:[n.jsx("div",{style:_.ringLabel,children:e}),n.jsx("div",{style:_.ringSub,children:r})]})]})}function qh({habits:t,dayAction:e,logSet:r,onDelete:o,onEdit:s}){const[i,l]=b.useState(0),a=Uh(i),d=`${tc(a[0])} – ${tc(a[6])}${i===0?" · This week":""}`,g=C=>{const B=new Date(C+"T00:00:00"),x=B.getDay(),G=new Date(B);return G.setDate(B.getDate()+(x===0?-6:1-x)),Array.from({length:7},(at,J)=>{const D=new Date(G);return D.setDate(G.getDate()+J),Ei(D)})},h=C=>C.logs||[],y=(C,B)=>C.type==="minimum"&&C.period==="week"&&B.filter(x=>r(C).has(x)).length>=(C.target_count||0),f=(C,B)=>C.type==="minimum"&&C.period==="month"&&h(C).filter(x=>x.slice(0,7)===B).length>=(C.target_count||0),w=(C,B)=>C.type==="minimum"&&C.period==="year"&&h(C).filter(x=>x.slice(0,4)===B).length>=(C.target_count||0),k=(C,B)=>{var x;if((C.type==="minimum"||C.type==="maximum")&&C.period==="day"){const G=(x=C.log_counts)==null?void 0:x[B];return G==null?!1:C.type==="minimum"?G>=(C.target_count||0):G>0&&G<=(C.target_count||0)}return r(C).has(B)},j=(C,B)=>C.type!=="minimum"?!1:C.period==="week"?y(C,g(B)):C.period==="month"?f(C,B.slice(0,7)):C.period==="year"?w(C,B.slice(0,4)):!1,I=(C,B)=>k(C,B)||j(C,B),p=t.filter(C=>I(C,kr)).length,c=t.length?Math.round(p/t.length*100):0,u=C=>{if(C.type==="minimum"&&C.period==="month"&&(f(C,a[0].slice(0,7))||f(C,a[6].slice(0,7)))||C.type==="minimum"&&C.period==="year"&&(w(C,a[0].slice(0,4))||w(C,a[6].slice(0,4)))||C.type==="minimum"&&C.period==="week"&&y(C,a))return 1;if((C.type==="minimum"||C.type==="maximum")&&C.period==="day")return Math.min(1,a.filter(at=>k(C,at)).length/7);const B=r(C),x=a.filter(at=>B.has(at)).length,G=C.type==="minimum"&&C.period==="week"?C.target_count||1:C.target_per_week||7;return G>0?Math.min(1,x/G):0},v=t.length?Math.round(t.reduce((C,B)=>C+u(B),0)/t.length*100):0,S=new Date,z=`${S.getFullYear()}-${String(S.getMonth()+1).padStart(2,"0")}`,L=new Date(S.getFullYear(),S.getMonth()+1,0).getDate(),H=L/7,M=C=>{if(C.type==="minimum"&&C.period==="month"&&f(C,z)||C.type==="minimum"&&C.period==="year"&&w(C,z.slice(0,4)))return 1;if((C.type==="minimum"||C.type==="maximum")&&C.period==="day"){let G=0;for(let at=1;at<=L;at++)k(C,`${z}-${String(at).padStart(2,"0")}`)&&G++;return Math.min(1,G/L)}const B=h(C).filter(G=>G.slice(0,7)===z).length;let x;return C.type==="minimum"&&C.period==="week"?x=(C.target_count||1)*H:C.type==="minimum"&&C.period==="month"?x=C.target_count||1:C.type==="minimum"&&C.period==="year"?x=(C.target_count||1)/12:x=(C.target_per_week||7)*H,x>0?Math.min(1,B/x):0},$=t.length?Math.round(t.reduce((C,B)=>C+M(B),0)/t.length*100):0;return n.jsxs("div",{children:[n.jsxs("div",{style:_.mainHead,children:[n.jsx("div",{style:_.eyebrow,children:"Weekly view"}),n.jsx("h1",{style:_.h1,children:"All Habits"})]}),n.jsxs("div",{style:_.navBar,children:[n.jsx("button",{onClick:()=>l(C=>C-1),style:_.navBtn,children:n.jsx(Qn,{size:16})}),n.jsx("span",{style:_.navLabel,children:d}),n.jsx("button",{onClick:()=>l(C=>Math.min(0,C+1)),disabled:i>=0,style:{..._.navBtn,...i>=0?_.navBtnDisabled:{}},children:n.jsx(on,{size:16})})]}),n.jsxs("div",{style:_.weekCard,children:[n.jsxs("div",{style:_.weekHeadRow,children:[n.jsx("div",{style:_.weekNameCol}),np.map((C,B)=>n.jsxs("div",{style:_.weekDayHead,children:[n.jsx("span",{style:_.weekDayName,children:C}),n.jsx("span",{style:{..._.weekDayNum,...a[B]===kr?_.weekDayToday:{}},children:new Date(a[B]+"T00:00").getDate()})]},C)),n.jsx("div",{style:_.weekStreakCol,children:"Streak"})]}),t.map(C=>{var N,ot;const B=((N=en[C.pillar])==null?void 0:N.dot)||"#9A968C",x=((ot=en[C.pillar])==null?void 0:ot.soft)||"rgba(0,0,0,0.05)",G=r(C),at=C.type==="minimum"&&["week","month","year"].includes(C.period),J=C.target_count||0,D=C.logs||[],F=et=>D.filter(ft=>ft.slice(0,7)===et).length,A=et=>D.filter(ft=>ft.slice(0,4)===et).length,V=a.filter(et=>G.has(et)).length,W=et=>at?C.period==="week"?V>=J:C.period==="month"?F(et.slice(0,7))>=J:C.period==="year"?A(et.slice(0,4))>=J:!1:!1,R=at&&a.some(W),m=C.period==="week"?V:C.period==="month"?F(a[0].slice(0,7)):C.period==="year"?A(a[0].slice(0,4)):0;return n.jsxs("div",{style:_.weekRow,children:[n.jsxs("div",{style:{..._.weekNameCol,flexDirection:"column",alignItems:"flex-start",gap:2},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx("span",{style:{..._.sideDot,background:B}}),n.jsx("span",{style:_.weekHabitName,children:C.name})]}),C.type!=="regular"&&n.jsx("span",{style:_.typeBadge,children:C.type==="minimum"?`≥${C.target_count}/${C.period}`:`≤${C.target_count}/${C.period}`})]}),a.map((et,ft)=>{var an,P;const It=G.has(et),ht=et>kr,jt=(C.type==="minimum"||C.type==="maximum")&&C.period==="day",Q=(an=C.log_counts)==null?void 0:an[et],mt=Q!=null,bt=!!((P=C.log_notes)!=null&&P[et]),Tt=W(et),Qt=ft>0&&W(a[ft-1]),tr=ft<a.length-1&&W(a[ft+1]),Oe=It||Tt;return n.jsxs("div",{style:{..._.weekCell,position:"relative"},children:[Tt&&n.jsx("span",{style:{..._.chainLine,background:B,left:Qt?0:"50%",right:tr?0:"50%"}}),n.jsx("button",{disabled:ht,onClick:()=>e(C,et),style:{..._.tick,position:"relative",zIndex:1,...Oe?{background:B,borderColor:B,color:"#fff"}:{},...jt&&mt&&!It?{borderColor:B,color:B}:{},...ht&&!Oe?_.tickFuture:{}},children:jt?mt?n.jsx("span",{style:{fontSize:12,fontWeight:700},children:Q}):null:It&&n.jsx(zt,{size:14,color:"#fff",strokeWidth:3})}),bt&&n.jsx("span",{style:_.cellNoteBubble})]},et)}),n.jsx("div",{style:_.weekStreakCol,children:R?n.jsxs("span",{style:{..._.streakPill,background:x,color:B},children:[n.jsx(fa,{size:12})," ",m,"/",J]}):n.jsxs("span",{style:{..._.streakPill,background:x,color:B},children:[n.jsx(Kn,{size:12})," ",C.streak]})})]},C.id)}),t.length===0&&n.jsx("div",{style:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},children:"No habits yet — add one from the sidebar."})]}),t.length>0&&n.jsxs("div",{style:{..._.progressCard,marginTop:18,marginBottom:0},children:[n.jsx(ll,{pct:c,label:"Today",sub:`${p}/${t.length} done`,color:"#4C9A6B"}),n.jsx("div",{style:_.progressDivider}),n.jsx(ll,{pct:v,label:"This week",sub:"of weekly targets",color:"#3A7CA5"}),n.jsx("div",{style:_.progressDivider}),n.jsx(ll,{pct:$,label:"This month",sub:"of monthly targets",color:"#8268B0"})]})]})}function Zh({habit:t,dayAction:e,logSet:r,onDelete:o,onEdit:s,setNote:i}){var W,R;const[l,a]=b.useState(null),[d,g]=b.useState(""),[h,y]=b.useState(null),[f,w]=b.useState(0),k=b.useRef(null);if(!t)return null;const j=((W=en[t.pillar])==null?void 0:W.dot)||"#9A968C",I=((R=en[t.pillar])==null?void 0:R.soft)||"rgba(0,0,0,0.05)",p=r(t),{dates:c,startOffset:u,label:v,year:S}=Vh(f),z=c.filter(m=>m<=kr&&p.has(m)).length,L=c.filter(m=>m<=kr).length,H=L>0?Math.round(z/L*100):0,M=t.type==="minimum"&&(t.period==="month"||t.period==="year"),$=t.period==="year"?(t.logs||[]).filter(m=>m.startsWith(`${S}-`)).length:c.filter(m=>p.has(m)).length,C=M&&$>=(t.target_count||0),B=t.type==="minimum"&&t.period==="week",x=t.target_count||0,G=m=>{const N=new Date(m+"T00:00"),ot=N.getDay(),et=new Date(N);et.setDate(N.getDate()+(ot===0?-6:1-ot));let ft=0;for(let It=0;It<7;It++){const ht=new Date(et);ht.setDate(et.getDate()+It),p.has(Ei(ht))&&ft++}return ft},at=m=>M?C:B?G(m)>=x:!1,J=B?G(kr):0,D=B&&J>=x,F=m=>{k.current=setTimeout(()=>a(m),500)},A=()=>clearTimeout(k.current),V=m=>{var N;y(m),g(((N=t.log_notes)==null?void 0:N[m])||""),a(null)};return n.jsxs("div",{children:[n.jsxs("div",{style:_.mainHead,children:[n.jsxs("div",{children:[n.jsxs("div",{style:_.eyebrow,children:[n.jsx("span",{style:{..._.sideDot,background:j,marginRight:6}}),t.pillar," · Monthly view"]}),n.jsx("h1",{style:_.h1,children:t.name})]}),n.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[n.jsxs("button",{onClick:s,style:_.actionBtn,children:[n.jsx(ye,{size:14})," Edit"]}),n.jsxs("button",{onClick:o,style:{..._.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[n.jsx(kt,{size:14})," Delete"]}),t.reminder_time&&n.jsxs("button",{style:_.actionBtn,children:[n.jsx(Ob,{size:14})," ",t.reminder_time]})]})]}),n.jsxs("div",{style:_.statStrip,children:[n.jsx(pn,{label:"Current streak",value:`${t.streak} days`,c:j,soft:I,flame:!0}),n.jsx(pn,{label:"Best streak",value:`${t.max_streak??t.streak} days`,c:j,soft:I,flame:!0}),n.jsx(pn,{label:"Done this month",value:`${z}/${L}`,c:j,soft:I}),n.jsx(pn,{label:"Completion",value:`${H}%`,c:j,soft:I}),t.type==="regular"?n.jsx(pn,{label:"Weekly target",value:`${t.target_per_week}×`,c:j,soft:I}):n.jsx(pn,{label:t.type==="minimum"?"Min target":"Max allowed",value:`${t.target_count}/${t.period}`,c:j,soft:I})]}),n.jsxs("div",{style:_.navBar,children:[n.jsx("button",{onClick:()=>w(m=>m-1),style:_.navBtn,children:n.jsx(Qn,{size:16})}),n.jsxs("span",{style:_.navLabel,children:[v,f===0?" · This month":""]}),n.jsx("button",{onClick:()=>w(m=>Math.min(0,m+1)),disabled:f>=0,style:{..._.navBtn,...f>=0?_.navBtnDisabled:{}},children:n.jsx(on,{size:16})})]}),M&&n.jsxs("div",{style:{..._.chainBanner,background:C?I:"var(--bg)",color:C?j:"var(--text-3)"},children:[n.jsx(fa,{size:15}),C?`${t.period==="year"?"Yearly":"Monthly"} chain complete — ${$}/${t.target_count} connected`:`${$}/${t.target_count} this ${t.period} · ${(t.target_count||0)-$} more to connect the chain`]}),B&&f===0&&n.jsxs("div",{style:{..._.chainBanner,background:D?I:"var(--bg)",color:D?j:"var(--text-3)"},children:[n.jsx(fa,{size:15}),D?`This week's chain complete — ${J}/${x} connected`:`${J}/${x} this week · ${Math.max(0,x-J)} more to connect the chain`]}),n.jsxs("div",{style:_.monthCard,children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[n.jsx("div",{style:_.monthTitle,children:v}),n.jsx("span",{style:{fontSize:11,color:"var(--text-3)"},children:"Long-press a day for options"})]}),n.jsx("div",{style:_.monthDow,children:np.map(m=>n.jsx("div",{style:_.monthDowCell,children:m},m))}),n.jsxs("div",{style:_.monthGrid,children:[Array.from({length:u}).map((m,N)=>n.jsx("div",{},`pad${N}`)),c.map((m,N)=>{var tr,Oe;const ot=N+1,et=p.has(m),ft=m>kr,It=m===kr,ht=!!((tr=t.log_notes)!=null&&tr[m]),jt=(t.type==="minimum"||t.type==="maximum")&&t.period==="day",Q=(Oe=t.log_counts)==null?void 0:Oe[m],mt=Q!=null,bt=at(m),Tt=bt&&!et,Qt=(u+N)%7;return n.jsxs("div",{style:{position:"relative"},children:[bt&&n.jsx("span",{style:{..._.chainLine,background:j,...Qt===0?{left:"50%"}:{left:-6},...Qt===6?{right:"50%"}:{right:-6}}}),n.jsx("button",{disabled:ft,onClick:()=>e(t,m),onMouseDown:()=>!jt&&F(m),onMouseUp:A,onTouchStart:()=>!jt&&F(m),onTouchEnd:A,style:{..._.monthDay,position:"relative",zIndex:1,...et?{background:j,borderColor:j,color:"#fff"}:{},...Tt?{background:I,borderColor:j,color:j}:{},...jt&&mt&&!et?{borderColor:j,color:j}:{},...ft&&!et?_.monthDayFuture:{},...It&&!et?{borderColor:j,borderWidth:2}:{},width:"100%"},children:ot}),jt&&mt&&n.jsx("span",{style:{..._.countBadge,background:et?"#4C9A6B":j},children:Q}),ht&&n.jsx("span",{style:_.noteIndicator}),l===m&&n.jsx(ty,{onEdit:s,onDelete:o,onAddNote:()=>V(m),onRemind:s,onClose:()=>a(null)})]},m)})]})]}),h&&n.jsxs("div",{style:_.noteBox,children:[n.jsxs("div",{style:{fontWeight:600,fontSize:13,marginBottom:6},children:["Note for ",h]}),n.jsx("textarea",{value:d,onChange:m=>g(m.target.value),placeholder:"Add a note for this day…",style:{..._.sideInput,minHeight:60,resize:"vertical"}}),n.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[n.jsxs("button",{onClick:()=>{i(h,d),y(null)},style:_.sideAddBtn,children:[n.jsx(zt,{size:13})," Save"]}),n.jsx("button",{onClick:()=>y(null),style:_.sideCancelBtn,children:n.jsx(kt,{size:13})})]})]})]})}function ty({onEdit:t,onDelete:e,onAddNote:r,onRemind:o,onClose:s}){return n.jsxs("div",{style:_.longPressMenu,children:[n.jsxs("button",{style:_.menuItem,onClick:()=>{t(),s()},children:[n.jsx(ye,{size:13})," Edit"]}),n.jsxs("button",{style:_.menuItem,onClick:()=>{r(),s()},children:[n.jsx(wd,{size:13})," Add note"]}),n.jsxs("button",{style:_.menuItem,onClick:()=>{o(),s()},children:[n.jsx(Ob,{size:13})," Remind"]}),n.jsxs("button",{style:{..._.menuItem,color:"#C2536B"},onClick:()=>{e(),s()},children:[n.jsx(kt,{size:13})," Delete"]})]})}function ey({habits:t,onSave:e,onClose:r}){const[o,s]=b.useState([...t]),i=(l,a)=>{const d=[...o],g=l+a;g<0||g>=d.length||([d[l],d[g]]=[d[g],d[l]],s(d))};return n.jsx("div",{style:_.modalOverlay,onClick:r,children:n.jsxs("div",{style:{..._.modal,maxHeight:"80vh",overflowY:"auto"},onClick:l=>l.stopPropagation(),children:[n.jsxs("div",{style:_.modalHead,children:["Reorder Habits",n.jsx("button",{onClick:r,style:_.closeBtn,children:n.jsx(kt,{size:16})})]}),n.jsx("p",{style:{fontSize:12,color:"var(--text-3)",margin:"0 0 10px"},children:"Use arrows to set the display order."}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:o.map((l,a)=>{var g;const d=((g=en[l.pillar])==null?void 0:g.dot)||"#9A968C";return n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"9px 10px",background:"var(--bg)",borderRadius:9,border:"1px solid var(--border)"},children:[n.jsx("span",{style:{..._.sideDot,background:d}}),n.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500},children:l.name}),n.jsx("button",{onClick:()=>i(a,-1),disabled:a===0,style:{..._.navBtn,width:28,height:28,opacity:a===0?.3:1,fontSize:14},children:"↑"}),n.jsx("button",{onClick:()=>i(a,1),disabled:a===o.length-1,style:{..._.navBtn,width:28,height:28,opacity:a===o.length-1?.3:1,fontSize:14},children:"↓"})]},l.id)})}),n.jsxs("button",{onClick:()=>e(o.map(l=>l.id)),style:{..._.sideAddBtn,width:"100%",marginTop:14,height:38,justifyContent:"center"},children:[n.jsx(zt,{size:14})," Save Order"]})]})})}function ry({year:t}){const[e,r]=b.useState([]);if(b.useEffect(()=>{O.getHabitsYearly(t).then(r).catch(console.error)},[t]),!e.length)return null;const o=Array.from({length:12},(i,l)=>{const a=e.reduce((g,h)=>{var y;return g+(((y=h.monthly[l+1])==null?void 0:y.done)||0)},0),d=e.reduce((g,h)=>{var y;return g+Math.floor((((y=h.monthly[l+1])==null?void 0:y.days)||30)/7*7)},0);return d>0?Math.round(a/d*100):0}),s=Math.max(...o,1);return n.jsxs("div",{style:{..._.monthCard,marginTop:18},children:[n.jsxs("div",{style:_.monthTitle,children:[t," Completion"]}),n.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:6,height:80,marginTop:12},children:o.map((i,l)=>n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[n.jsx("div",{style:{width:"100%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",height:`${i/s*60}px`,minHeight:2,opacity:i>0?1:.15},title:`${i}%`}),n.jsx("span",{style:{fontSize:9,color:"var(--text-3)",fontWeight:600},children:Hh[l]})]},l))})]})}function pn({label:t,value:e,c:r,soft:o,flame:s}){return n.jsxs("div",{style:{..._.stat,background:o},children:[n.jsx("div",{style:_.statLabel,children:t}),n.jsxs("div",{style:{..._.statValue,color:r},children:[s&&n.jsx(Kn,{size:15})," ",e]})]})}const _={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:230,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",padding:"20px 12px",display:"flex",flexDirection:"column",gap:3,overflowY:"auto"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.18)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)",boxShadow:"none"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.38)",zIndex:20},sideTop:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 4px"},closeBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",marginBottom:8},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700,padding:"0 6px 14px"},sideItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"9px 10px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:500,color:"var(--text-2)",textAlign:"left"},sideItemOn:{background:"var(--hover)",fontWeight:600},sideLabel:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},sideCount:{fontSize:11,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:10,padding:"1px 7px"},sideStreak:{display:"flex",alignItems:"center",gap:3,fontSize:11,fontWeight:600,color:"#C2773B"},sideDot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},sideDivider:{height:1,background:"var(--border)",margin:"8px 6px"},addBox:{padding:"10px 6px",display:"flex",flexDirection:"column",gap:6},sideInput:{border:"1px solid var(--border)",borderRadius:7,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},sideAddBtn:{border:"none",background:"#4C9A6B",color:"#fff",height:30,padding:"0 12px",borderRadius:7,cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontSize:13,fontFamily:"inherit"},sideCancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:30,height:30,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},sideNewBtn:{display:"flex",alignItems:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",borderRadius:8,padding:"8px 10px",fontSize:12.5,color:"var(--text-3)",fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginTop:6,justifyContent:"center"},main:{flex:1,padding:"26px",overflowX:"hidden",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:200},mainHead:{marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:5,display:"flex",alignItems:"center"},h1:{fontSize:27,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},actionBtn:{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:500,color:"var(--text-2)",border:"1px solid var(--border)",background:"var(--surface)",padding:"5px 10px",borderRadius:7,cursor:"pointer",fontFamily:"inherit"},progressCard:{background:"var(--surface)",borderRadius:12,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14,display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"},progressDivider:{width:1,alignSelf:"stretch",background:"var(--border)",minHeight:48},ringStat:{display:"flex",alignItems:"center",gap:12,flex:"1 1 160px"},ringBox:{position:"relative",width:70,height:70,display:"grid",placeItems:"center",flexShrink:0},ringPct:{position:"absolute",inset:0,display:"grid",placeItems:"center",fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},ringLabel:{fontSize:14,fontWeight:700,color:"var(--text)"},ringSub:{fontSize:11.5,color:"var(--text-3)",fontWeight:500,marginTop:2},weekCard:{background:"var(--surface)",borderRadius:12,padding:"8px 14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"auto"},weekHeadRow:{display:"flex",alignItems:"flex-end",padding:"10px 0",borderBottom:"1px solid var(--border)",minWidth:480},weekNameCol:{width:160,flexShrink:0,display:"flex",alignItems:"center",gap:8},weekDayHead:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2},weekDayName:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekDayNum:{fontSize:12,fontWeight:600,color:"var(--text-2)",width:22,height:22,display:"grid",placeItems:"center",borderRadius:"50%"},weekDayToday:{background:"var(--accent-strong)",color:"#fff"},weekStreakCol:{width:64,flexShrink:0,textAlign:"center",fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekRow:{display:"flex",alignItems:"center",padding:"9px 0",borderBottom:"1px solid #F4F2EC",minWidth:480},weekHabitName:{fontSize:13,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},weekCell:{flex:1,display:"grid",placeItems:"center"},typeBadge:{fontSize:10,color:"var(--text-3)",background:"var(--hover)",padding:"1px 6px",borderRadius:8,fontWeight:600},tick:{width:26,height:26,borderRadius:7,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",padding:0},tickFuture:{opacity:.4,cursor:"not-allowed",borderStyle:"dashed"},streakPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,fontWeight:700,padding:"3px 9px",borderRadius:12},tinyBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:"2px 3px",display:"grid",placeItems:"center",borderRadius:4},statStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:10,marginBottom:18},stat:{borderRadius:10,padding:"13px 14px"},statLabel:{fontSize:11,fontWeight:600,color:"var(--text-2)",marginBottom:5},statValue:{fontSize:19,fontWeight:700,display:"flex",alignItems:"center",gap:5,fontFamily:"'Fraunces',Georgia,serif"},monthCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},monthTitle:{fontSize:14,fontWeight:700,marginBottom:12,fontFamily:"'Fraunces',Georgia,serif"},monthDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:8},monthDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},monthGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6},monthDay:{aspectRatio:"1",border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",display:"grid",placeItems:"center"},monthDayFuture:{opacity:.4,cursor:"not-allowed",background:"var(--surface-2)"},noteIndicator:{position:"absolute",top:3,right:3,width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},cellNoteBubble:{position:"absolute",top:2,right:"calc(50% - 16px)",width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},countBadge:{position:"absolute",bottom:2,right:2,minWidth:13,height:13,padding:"0 2px",borderRadius:7,color:"#fff",fontSize:9,fontWeight:700,display:"grid",placeItems:"center",lineHeight:1},counterBtn:{width:44,height:44,borderRadius:"50%",border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:24,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1},chainLine:{position:"absolute",top:"calc(50% - 3px)",left:0,right:0,height:6,zIndex:0,opacity:.9},chainBanner:{display:"flex",alignItems:"center",gap:8,borderRadius:10,padding:"10px 14px",marginBottom:14,fontSize:12.5,fontWeight:700,fontFamily:"'Inter',system-ui,sans-serif"},navBar:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:16},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},navLabel:{fontSize:13,fontWeight:700,color:"var(--text)",minWidth:180,textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},noteBox:{background:"var(--surface)",borderRadius:10,padding:14,marginTop:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},longPressMenu:{position:"absolute",top:"100%",left:0,zIndex:50,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 4px 16px rgba(0,0,0,0.12)",padding:"4px 0",minWidth:140},menuItem:{display:"flex",alignItems:"center",gap:8,width:"100%",border:"none",background:"none",padding:"8px 14px",fontSize:13,color:"var(--text)",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:100,display:"grid",placeItems:"center"},modal:{background:"var(--surface)",borderRadius:14,padding:24,width:320,maxWidth:"90vw",display:"flex",flexDirection:"column",gap:8},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:700,fontSize:16,fontFamily:"'Fraunces',Georgia,serif",marginBottom:6},modalLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4}},ka=[{id:1,label:"Rough",emoji:"😣",color:"#C2536B"},{id:2,label:"Low",emoji:"🙁",color:"#C2773B"},{id:3,label:"Okay",emoji:"😐",color:"#C9A227"},{id:4,label:"Good",emoji:"🙂",color:"#4C9A6B"},{id:5,label:"Great",emoji:"😄",color:"#3A7CA5"}],ny=t=>ka.find(e=>e.id===t),al=[{id:"wins",label:"Wins",hint:"What went well today?",icon:tn,color:"#C9A227"},{id:"grateful",label:"Grateful for",hint:"1–3 things",icon:sh,color:"#C2536B"},{id:"mattered",label:"What mattered",hint:"The point of today",icon:Sd,color:"#3A7CA5"},{id:"letgo",label:"Letting go of",hint:"Offload what's draining",icon:Sh,color:"#8268B0"},{id:"tomorrow",label:"Tomorrow's one thing",hint:"A single priority",icon:vh,color:"#4C9A6B"}],op=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,oy=()=>op(new Date),dl=t=>new Date(t+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"});function sy(){const t=oy(),[e,r]=[new Date().getFullYear(),new Date().getMonth()+1],[o,s]=b.useState(null),i=o||t,l=i===t,[a,d]=b.useState(null),[g,h]=b.useState({}),[y,f]=b.useState(Object.fromEntries(al.map(M=>[M.id,""]))),w=b.useCallback(async M=>{const $=await O.getJournalEntry(M);d($)},[]);b.useCallback(async()=>{const M=await O.getJournalHistory(e,r);h(M)},[e,r]);const k=b.useCallback(async()=>{const[M,$]=await Promise.all([O.getJournalEntry(i),O.getJournalHistory(e,r)]);d(M),h($)},[i,e,r]);b.useEffect(()=>{k()},[k]);const j=async M=>{l&&(await O.updateJournalMood(i,M),k())},I=async M=>{if(!l)return;const $=y[M].trim();$&&(await O.addJournalBullet(i,M,$),f(C=>({...C,[M]:""})),w(i))},p=async M=>{await O.deleteJournalBullet(M),w(i)},c=M=>{s(M===t?null:M),f(Object.fromEntries(al.map($=>[$.id,""])))};if(!a)return n.jsx("div",{style:{padding:28,color:"var(--text-3)"},children:"Loading…"});const u=a.mood!==null,v=(()=>{let M=0;const $=new Date(t);if(g[t]||l&&u)M=1,$.setDate($.getDate()-1);else return 0;for(;;){const B=op($);if(g[B])M++,$.setDate($.getDate()-1);else break}return M})(),S=Object.values(a.bullets||{}).reduce((M,$)=>M+$.length,0),z=new Date(e,r,0).getDate(),L=new Date(e,r-1,1).getDay(),H=L===0?6:L-1;return n.jsxs("div",{style:wt.page,children:[n.jsxs("div",{style:wt.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:wt.eyebrow,children:"Anvil · Journal"}),!l&&n.jsxs("button",{style:wt.backBtn,onClick:()=>s(null),children:[n.jsx(Qn,{size:14})," Back to Today"]}),n.jsx("h1",{style:wt.h1,children:l?"Today":dl(i)}),l&&n.jsx("div",{style:wt.date,children:dl(t)})]}),n.jsxs("div",{style:wt.streakBox,children:[n.jsx(Kn,{size:16,color:"#C2773B"}),n.jsx("span",{style:wt.streakNum,children:v}),n.jsx("span",{style:wt.streakLabel,children:"day streak"})]})]}),n.jsxs("div",{style:wt.card,children:[n.jsxs("div",{style:wt.cardTitle,children:["How ",l?"are":"were"," you?"]}),n.jsx("div",{style:wt.moodRow,children:ka.map(M=>{const $=a.mood===M.id;return n.jsxs("button",{onClick:()=>j(M.id),disabled:!l,style:{...wt.moodBtn,cursor:l?"pointer":"default",...$?{background:M.color,borderColor:M.color,transform:"translateY(-2px)"}:{},...!l&&!$?{opacity:.55}:{}},children:[n.jsx("span",{style:wt.moodEmoji,children:M.emoji}),n.jsx("span",{style:{...wt.moodLabel,color:$?"#fff":"#6B675E"},children:M.label})]},M.id)})})]}),al.map(M=>{var B;const $=M.icon,C=((B=a.bullets)==null?void 0:B[M.id])||[];return n.jsxs("div",{style:wt.card,children:[n.jsxs("div",{style:wt.sectionHead,children:[n.jsx("span",{style:{...wt.sectionIcon,background:`${M.color}1A`,color:M.color},children:n.jsx($,{size:15})}),n.jsxs("div",{children:[n.jsx("div",{style:wt.cardTitle,children:M.label}),n.jsx("div",{style:wt.sectionHint,children:M.hint})]})]}),n.jsxs("ul",{style:wt.bulletList,children:[C.map(x=>n.jsxs("li",{style:wt.bullet,children:[n.jsx("span",{style:{...wt.bulletDot,background:M.color}}),n.jsx("span",{style:wt.bulletText,children:x.text}),l&&n.jsx("button",{onClick:()=>p(x.id),style:wt.bulletDel,children:n.jsx(kt,{size:13})})]},x.id)),!l&&C.length===0&&n.jsx("li",{style:wt.sectionHint,children:"Nothing written."})]}),l&&n.jsxs("div",{style:wt.addRow,children:[n.jsx("input",{placeholder:"Add a point…",value:y[M.id],onChange:x=>f(G=>({...G,[M.id]:x.target.value})),onKeyDown:x=>x.key==="Enter"&&I(M.id),style:wt.input}),n.jsx("button",{onClick:()=>I(M.id),style:{...wt.addBtn,background:M.color},children:n.jsx(ie,{size:16})})]})]},M.id)}),n.jsxs("div",{style:wt.card,children:[n.jsxs("div",{style:wt.cardTitle,children:[new Date(e,r-1).toLocaleDateString("en-US",{month:"long",year:"numeric"})," · Mood history",n.jsx("span",{style:{fontSize:11,color:"var(--text-3)",fontWeight:400,marginLeft:8},children:"tap a day to view"})]}),n.jsx("div",{style:wt.calDow,children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(M=>n.jsx("div",{style:wt.calDowCell,children:M},M))}),n.jsxs("div",{style:wt.calGrid,children:[Array.from({length:H}).map((M,$)=>n.jsx("div",{},`p${$}`)),Array.from({length:z},(M,$)=>$+1).map(M=>{const $=`${e}-${String(r).padStart(2,"0")}-${String(M).padStart(2,"0")}`,C=$===t&&a.mood?a.mood:g[$],B=C?ny(C):null,x=$>t,G=$===i;return n.jsx("button",{onClick:()=>!x&&c($),disabled:x,style:{...wt.calDay,background:B?B.color:x?"var(--surface-2)":"var(--surface)",borderColor:G?"var(--accent-strong)":"var(--border)",borderWidth:G?2:1,color:B?"#fff":"var(--text-3)",opacity:x?.5:1,cursor:x?"not-allowed":"pointer",outline:G?"2px solid var(--accent-strong)":"none",outlineOffset:1},title:B?B.label:$,children:B?B.emoji:M},M)})]}),n.jsx("div",{style:wt.legend,children:ka.map(M=>n.jsxs("span",{style:wt.legendItem,children:[n.jsx("span",{style:{...wt.legendDot,background:M.color}})," ",M.label]},M.id))})]}),n.jsx("div",{style:wt.footer,children:l?u?`Mood set · ${S} point${S===1?"":"s"} written today`:"Tap a mood to log today and keep your streak":`Viewing ${dl(i)} · past entries are read-only`})]})}const wt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},backBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",background:"none",color:"#3A7CA5",fontSize:12.5,fontWeight:600,cursor:"pointer",padding:"0 0 6px",fontFamily:"inherit"},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},date:{fontSize:13,color:"var(--text-3)",marginTop:4},streakBox:{display:"flex",alignItems:"center",gap:6,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"8px 14px"},streakNum:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"#C2773B"},streakLabel:{fontSize:11,color:"var(--text-3)",fontWeight:500},card:{background:"var(--surface)",borderRadius:12,padding:"18px 20px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},cardTitle:{fontSize:14,fontWeight:700,marginBottom:12,color:"var(--text)"},moodRow:{display:"flex",gap:8,flexWrap:"wrap"},moodBtn:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,border:"2px solid var(--border)",background:"var(--surface)",borderRadius:10,padding:"10px 12px",cursor:"pointer",flex:"1 1 60px",transition:"transform 0.1s"},moodEmoji:{fontSize:22},moodLabel:{fontSize:11,fontWeight:600},sectionHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:10},sectionIcon:{width:32,height:32,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},sectionHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},bulletList:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6,marginBottom:10},bullet:{display:"flex",alignItems:"center",gap:8,fontSize:13.5,lineHeight:1.4},bulletDot:{width:6,height:6,borderRadius:"50%",flexShrink:0},bulletText:{flex:1},bulletDel:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},addRow:{display:"flex",gap:8},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",outline:"none"},addBtn:{width:36,height:36,border:"none",borderRadius:8,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:12},calDay:{aspectRatio:"1",border:"1px solid var(--border)",borderRadius:7,fontSize:13,display:"grid",placeItems:"center",fontWeight:500,fontFamily:"inherit"},legend:{display:"flex",gap:10,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)"},legendDot:{width:8,height:8,borderRadius:"50%",display:"inline-block"},footer:{fontSize:12.5,color:"var(--text-3)",textAlign:"center",marginTop:8,fontStyle:"italic"}},Ye=[{id:"D",label:"Data",color:"#3A7CA5",soft:"rgba(58,124,165,0.10)",prompt:"What did you read/watch? Log the raw source and a quick note.",hint:"e.g. 'Atomic Habits ch.1 — habits are systems not goals'"},{id:"I",label:"Information",color:"#8268B0",soft:"rgba(130,104,176,0.10)",prompt:"What did you actually understand from it? In your own words.",hint:"e.g. 'Small 1% improvements compound into massive change over time'"},{id:"K",label:"Knowledge",color:"#C9A227",soft:"rgba(201,162,39,0.10)",prompt:"How will this specifically improve your life? Connect it to your goals.",hint:"e.g. 'I will improve my morning workout habit by 1% each week'"},{id:"W",label:"Wisdom",color:"#4C9A6B",soft:"rgba(76,154,107,0.10)",prompt:"How have you implemented it? What changed?",hint:"e.g. 'I've not missed a workout in 3 weeks using the 1% rule'"}],ec=t=>Ye.findIndex(e=>e.id===t),wa=[{id:"book",label:"Book",icon:Hb},{id:"video",label:"Video",icon:Ch},{id:"article",label:"Article",icon:wd}],rc=t=>wa.find(e=>e.id===t)||wa[0],gl={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"};function iy(){var J;const[t,e]=b.useState([]),[r,o]=b.useState(null),[s,i]=b.useState("ALL"),[l,a]=b.useState(!1),[d,g]=b.useState(null),[h,y]=b.useState({title:"",type:"book",pillar:"Academic",note:""}),[f,w]=b.useState({}),[k,j]=b.useState(null),[I,p]=b.useState(null),c=b.useCallback(async()=>{try{const D=await O.getSkills();e(D);const F={};D.forEach(A=>{F[A.id]=Object.fromEntries(Ye.map(V=>[V.id,""]))}),w(A=>{const V={...F};return D.forEach(W=>{A[W.id]&&(V[W.id]={...F[W.id],...A[W.id]})}),V})}catch(D){console.error(D)}},[]);b.useEffect(()=>{c()},[c]);const u=t.find(D=>D.id===r),v=u?ec(u.stage):-1,S=async(D,F)=>{var V;const A=(((V=f[D])==null?void 0:V[F])??"").trim();A&&(await O.addSkillNote(D,F,A),w(W=>({...W,[D]:{...W[D],[F]:""}})),c())},z=async D=>{await O.deleteSkillNote(D),c()},L=async()=>{!u||!(I!=null&&I.trim())||(await O.updateSkill(u.id,{title:I.trim()}),p(null),c())},H=async()=>{!k||!k.text.trim()||(await O.updateSkillNote(k.id,k.text.trim()),j(null),c())},M=async D=>{await O.toggleSkillNote(D),c()},$=async(D,F)=>{t.find(V=>V.id===D)&&(F==="W"&&g(D),await O.completeSkillStage(D,F),c())},C=async()=>{if(!h.title.trim())return;const D=await O.createSkill({pillar:h.pillar,title:h.title.trim(),source_type:h.type,note_d:h.note.trim()});a(!1),y({title:"",type:"book",pillar:"Academic",note:""}),o(D.id),c()},B=async D=>{await O.deleteSkill(D),r===D&&o(null),c()},x=s==="ALL"?t:t.filter(D=>D.stage===s),G=t.filter(D=>D.stage==="W").length,at=!!u;return n.jsxs("div",{style:nt.page,children:[d&&n.jsx("div",{style:nt.celebOverlay,children:n.jsxs("div",{style:nt.celebBox,children:[n.jsx("div",{style:nt.celebEmoji,children:"🏆"}),n.jsx("div",{style:nt.celebTitle,children:"Wisdom unlocked!"}),n.jsx("div",{style:nt.celebSub,children:"You've implemented this knowledge — that's rare and real."}),n.jsx("button",{onClick:()=>g(null),style:nt.celebBtn,children:"Continue"})]})}),n.jsxs("div",{style:nt.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:nt.eyebrow,children:"Anvil · Skills"}),n.jsx("h1",{style:nt.h1,children:"DIKW Skills"}),n.jsx("div",{style:nt.subhead,children:"Data → Information → Knowledge → Wisdom"})]}),n.jsxs("div",{style:nt.headRight,children:[n.jsxs("div",{style:nt.wisdomBadge,children:[n.jsx(tn,{size:14,color:"#C9A227"})," ",G," Wisdom",G!==1?"s":""]}),n.jsxs("button",{onClick:()=>{a(!0),o(null)},style:nt.addSkillBtn,children:[n.jsx(ie,{size:15})," Add skill"]})]})]}),n.jsx("div",{style:nt.filterBar,children:["ALL",...Ye.map(D=>D.id)].map(D=>{const F=Ye.find(V=>V.id===D),A=s===D;return n.jsx("button",{onClick:()=>i(D),style:{...nt.filterBtn,...A?{background:F?F.color:"var(--accent-strong)",color:"#fff",borderColor:"transparent"}:{}},children:F?`${D} · ${F.label}`:"All"},D)})}),n.jsxs("div",{style:{...nt.layout,gridTemplateColumns:at?"1fr 1fr":"1fr"},children:[n.jsxs("div",{style:nt.cardList,children:[l&&n.jsxs("div",{style:{...nt.skillCard,border:"2px dashed #3A7CA5"},children:[n.jsx("div",{style:nt.cardTitle,children:"New skill"}),n.jsx("input",{placeholder:"Title (book / video / article name)",value:h.title,onChange:D=>y(F=>({...F,title:D.target.value})),onKeyDown:D=>D.key==="Enter"&&C(),style:nt.input,autoFocus:!0}),n.jsxs("div",{style:nt.addRow,children:[n.jsx("select",{value:h.type,onChange:D=>y(F=>({...F,type:D.target.value})),style:nt.select,children:wa.map(D=>n.jsx("option",{value:D.id,children:D.label},D.id))}),n.jsx("select",{value:h.pillar,onChange:D=>y(F=>({...F,pillar:D.target.value})),style:nt.select,children:Object.keys(gl).map(D=>n.jsx("option",{children:D},D))})]}),n.jsx("input",{placeholder:"First note (what did you read/watch?)",value:h.note,onChange:D=>y(F=>({...F,note:D.target.value})),style:nt.input}),n.jsxs("div",{style:nt.addRow,children:[n.jsxs("button",{onClick:C,style:nt.saveBtn,children:[n.jsx(zt,{size:14})," Save"]}),n.jsxs("button",{onClick:()=>a(!1),style:nt.cancelBtn,children:[n.jsx(kt,{size:14})," Cancel"]})]})]}),x.map(D=>{const F=ec(D.stage),A=Ye[F],V=rc(D.type),W=D.stage==="W",R=r===D.id;return n.jsxs("div",{onClick:()=>o(R?null:D.id),style:{...nt.skillCard,...R?{borderColor:A.color,borderWidth:2}:{},...W?{background:"rgba(76,154,107,0.05)"}:{}},children:[n.jsxs("div",{style:nt.skillCardTop,children:[n.jsxs("div",{style:nt.skillMeta,children:[n.jsx("span",{style:{color:gl[D.pillar]},children:n.jsx(V.icon,{size:13})}),n.jsx("span",{style:{...nt.pillarDot,background:gl[D.pillar]}}),n.jsxs("span",{style:nt.srcLabel,children:[V.label," · ",D.pillar]})]}),n.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[W&&n.jsx(Yo,{size:14,color:"#4C9A6B"}),n.jsx("button",{onClick:m=>{m.stopPropagation(),B(D.id)},style:nt.ghostBtn,children:n.jsx(kt,{size:13})})]})]}),n.jsx("div",{style:nt.skillTitle,children:D.title}),n.jsxs("div",{style:nt.track,children:[Ye.map((m,N)=>{var It;const ot=N<F,et=N===F,ft=(It=D.completed_stages)==null?void 0:It[m.id];return n.jsxs("div",{style:nt.trackItem,children:[n.jsxs("div",{style:{...nt.trackDot,background:ot||ft||et?m.color:"var(--border)",boxShadow:et?`0 0 0 3px ${m.color}33`:"none"},children:[(ot||et&&ft)&&n.jsx(zt,{size:9,color:"#fff",strokeWidth:3}),et&&!ft&&n.jsx("span",{style:nt.trackCurrent,children:m.id}),!ot&&!et&&n.jsx(Ug,{size:8,color:"#B5B1A7"})]}),N<Ye.length-1&&n.jsx("div",{style:{...nt.trackLine,background:ot?Ye[N+1].color:"var(--border)"}})]},m.id)}),n.jsx("span",{style:{...nt.stageTag,background:A.soft,color:A.color},children:A.label})]})]},D.id)}),x.length===0&&!l&&n.jsx("div",{style:nt.empty,children:"No skills at this stage yet."})]}),u&&n.jsxs("div",{style:nt.detail,children:[n.jsxs("div",{style:nt.detailHead,children:[n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsxs("div",{style:nt.eyebrow,children:[rc(u.type).label," · ",u.pillar]}),I!==null?n.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginTop:4},children:[n.jsx("input",{autoFocus:!0,value:I,onChange:D=>p(D.target.value),onKeyDown:D=>{D.key==="Enter"&&L(),D.key==="Escape"&&p(null)},style:{...nt.input,fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:0,flex:1}}),n.jsx("button",{onClick:L,style:{...nt.noteAddBtn,background:"#4C9A6B",width:30,height:30},children:n.jsx(zt,{size:13})}),n.jsx("button",{onClick:()=>p(null),style:{...nt.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:30,height:30},children:n.jsx(kt,{size:13})})]}):n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx("div",{style:nt.detailTitle,children:u.title}),n.jsx("button",{onClick:()=>p(u.title),style:nt.ghostBtn,title:"Edit name",children:n.jsx(ye,{size:13})})]})]}),n.jsx("button",{onClick:()=>{o(null),p(null)},style:nt.closeBtn,children:n.jsx(kt,{size:16})})]}),Ye.map((D,F)=>{var ot,et,ft;const A=F<=v,V=F===v,W=F<v||((ot=u.completed_stages)==null?void 0:ot[D.id]),R=F>v,m=((et=u.notes)==null?void 0:et[D.id])||[],N=((ft=f[u.id])==null?void 0:ft[D.id])??"";return n.jsxs("div",{style:{...nt.stageBlock,...A?{borderColor:D.color}:{},opacity:R?.45:1},children:[n.jsxs("div",{style:nt.stageBlockHead,children:[n.jsx("div",{style:{...nt.stageLetter,background:A?D.color:"var(--border)",color:A?"#fff":"#9A968C"},children:W&&!V?n.jsx(zt,{size:12,color:"#fff",strokeWidth:3}):R?n.jsx(Ug,{size:11,color:"#9A968C"}):D.id}),n.jsxs("div",{style:{flex:1},children:[n.jsx("div",{style:{...nt.stageName,color:A?D.color:"#9A968C"},children:D.label}),A&&n.jsx("div",{style:nt.stagePrompt,children:D.prompt})]}),W&&!V&&n.jsx("span",{style:{...nt.doneBadge,color:D.color,background:D.soft},children:"Done"})]}),A&&(()=>{var Q,mt;const It=D.id==="W",ht=m.length>0&&m.every(bt=>bt.done),jt=It?ht:m.length>0;return n.jsxs(n.Fragment,{children:[m.length>0&&n.jsx("ul",{style:nt.noteList,children:m.map(bt=>n.jsxs("li",{style:nt.noteItem,children:[It?n.jsx("button",{onClick:()=>M(bt.id),style:{...nt.checkBox,...bt.done?{background:D.color,borderColor:D.color}:{}},children:bt.done&&n.jsx(zt,{size:11,color:"#fff",strokeWidth:3})}):n.jsx("span",{style:{...nt.noteDot,background:D.color}}),(k==null?void 0:k.id)===bt.id?n.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[n.jsx("input",{autoFocus:!0,value:k.text,onChange:Tt=>j(Qt=>({...Qt,text:Tt.target.value})),onKeyDown:Tt=>{Tt.key==="Enter"&&H(),Tt.key==="Escape"&&j(null)},style:{...nt.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),n.jsx("button",{onClick:H,style:{...nt.noteAddBtn,background:D.color,width:28,height:28},children:n.jsx(zt,{size:12})}),n.jsx("button",{onClick:()=>j(null),style:{...nt.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:n.jsx(kt,{size:12})})]}):n.jsx("span",{style:{...nt.noteText,...It&&bt.done?{textDecoration:"line-through",color:"var(--text-3)"}:{}},children:bt.text}),(k==null?void 0:k.id)!==bt.id&&n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>j({id:bt.id,text:bt.text}),style:nt.ghostBtn,children:n.jsx(ye,{size:12})}),n.jsx("button",{onClick:()=>z(bt.id),style:nt.ghostBtn,children:n.jsx(kt,{size:12})})]})]},bt.id))}),m.length===0&&n.jsx("div",{style:nt.noNotes,children:It?"Add the steps to implement this — check each off as you do it.":`No notes yet — ${D.hint}`}),n.jsxs("div",{style:nt.noteAddRow,children:[n.jsx("input",{placeholder:It?"Add a step to implement…":`Add a ${D.label} note…`,value:N,onChange:bt=>w(Tt=>({...Tt,[u.id]:{...Tt[u.id],[D.id]:bt.target.value}})),onKeyDown:bt=>bt.key==="Enter"&&S(u.id,D.id),style:nt.noteInput}),n.jsx("button",{onClick:()=>S(u.id,D.id),style:{...nt.noteAddBtn,background:D.color},children:n.jsx(ie,{size:14})})]}),V&&!((Q=u.completed_stages)!=null&&Q[D.id])&&n.jsxs(n.Fragment,{children:[It&&m.length>0&&!ht&&n.jsxs("div",{style:nt.checklistHint,children:[m.filter(bt=>bt.done).length,"/",m.length," done — check all steps to complete Wisdom"]}),n.jsxs("button",{onClick:()=>$(u.id,D.id),disabled:!jt,style:{...nt.advanceBtn,background:jt?D.color:"#C3BFB5",marginTop:10,cursor:jt?"pointer":"not-allowed"},children:[n.jsx(zt,{size:14}),It?"Mark Wisdom complete":`Complete ${D.label} → ${(mt=Ye[F+1])==null?void 0:mt.label}`]})]})]})})()]},D.id)}),u.stage==="W"&&((J=u.completed_stages)==null?void 0:J.W)&&n.jsxs("div",{style:nt.wisdomDone,children:[n.jsx(tn,{size:16,color:"#4C9A6B"})," Wisdom achieved — implemented in your life"]})]})]})]})}const nt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box",position:"relative"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},wisdomBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addSkillBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},filterBar:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16},filterBtn:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},layout:{display:"grid",gap:12},cardList:{display:"flex",flexDirection:"column",gap:10},skillCard:{background:"var(--surface)",borderRadius:12,padding:"14px",border:"1.5px solid var(--border)",cursor:"pointer",boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},skillCardTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},skillMeta:{display:"flex",alignItems:"center",gap:6},pillarDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},srcLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)"},skillTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",marginBottom:12},cardTitle:{fontSize:13,fontWeight:700,marginBottom:10},track:{display:"flex",alignItems:"center"},trackItem:{display:"flex",alignItems:"center"},trackDot:{width:22,height:22,borderRadius:"50%",display:"grid",placeItems:"center",flexShrink:0},trackCurrent:{fontSize:9,fontWeight:800,color:"#fff"},trackLine:{width:24,height:3,borderRadius:2},stageTag:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,marginLeft:10},detail:{background:"var(--surface)",borderRadius:14,padding:"18px 16px",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",border:"1.5px solid var(--border)",alignSelf:"start"},detailHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16},detailTitle:{fontSize:18,fontWeight:700,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},stageBlock:{border:"1.5px solid var(--border)",borderRadius:10,padding:"12px 13px",marginBottom:10},stageBlockHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:8},stageLetter:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",fontSize:13,fontWeight:800,flexShrink:0},stageName:{fontSize:13,fontWeight:700},stagePrompt:{fontSize:11.5,color:"var(--text-2)",marginTop:2,lineHeight:1.4},doneBadge:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10,marginLeft:"auto",flexShrink:0},noteList:{margin:"0 0 8px 0",padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6},noteItem:{display:"flex",alignItems:"flex-start",gap:8,fontSize:13,lineHeight:1.4},noteDot:{width:6,height:6,borderRadius:"50%",flexShrink:0,marginTop:5},checkBox:{width:18,height:18,borderRadius:5,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginTop:1,padding:0},checklistHint:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,marginTop:10,textAlign:"center"},noteText:{flex:1,color:"var(--text)"},noNotes:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",marginBottom:8},noteAddRow:{display:"flex",gap:6},noteInput:{flex:1,border:"1px solid var(--border)",borderRadius:7,padding:"7px 10px",fontSize:13,fontFamily:"inherit",outline:"none"},noteAddBtn:{width:32,height:32,border:"none",borderRadius:7,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},advanceBtn:{display:"flex",alignItems:"center",gap:8,border:"none",color:"#fff",padding:"10px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},wisdomDone:{display:"flex",alignItems:"center",gap:8,justifyContent:"center",fontSize:13.5,fontWeight:700,color:"#4C9A6B",padding:12,background:"rgba(76,154,107,0.08)",borderRadius:10,marginTop:4},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box",marginBottom:8},select:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:12.5,fontFamily:"inherit",flex:1},addRow:{display:"flex",gap:8,marginBottom:8},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{fontSize:13,color:"var(--text-3)",padding:"32px 12px",textAlign:"center"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.55)",zIndex:50,display:"grid",placeItems:"center"},celebBox:{background:"var(--surface)",borderRadius:20,padding:"40px 32px",textAlign:"center",maxWidth:320,boxShadow:"0 8px 40px rgba(0,0,0,0.18)"},celebEmoji:{fontSize:52,marginBottom:12},celebTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:8},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:"#4C9A6B",color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},hs=[{id:"aarti",title:"Aarti",html:`<h1>॥ गणपतीची आरती ॥</h1><br/>
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
      </div>`}];function ly(){const[t,e]=b.useState(()=>window.innerWidth<720);return b.useEffect(()=>{const r=()=>e(window.innerWidth<720);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),t}const ay=t=>new Promise((e,r)=>{const o=new FileReader;o.onload=()=>{const s=new Image;s.onload=()=>{let{width:l,height:a}=s;l>a&&l>1400?(a=a*1400/l,l=1400):a>1400&&(l=l*1400/a,a=1400);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(s,0,0,l,a),e(d.toDataURL("image/jpeg",.85))},s.onerror=r,s.src=o.result},o.onerror=r,o.readAsDataURL(t)});function nc({base:t,count:e,images:r}){const o=r&&r.length?r:null,s=o?o.length:e,[i,l]=b.useState(0);if(!s)return null;const a=i%s,d=o?o[a]:`${t}${a+1}.jpg`;return n.jsxs("div",{style:{maxWidth:560,margin:"0 auto"},children:[n.jsx("div",{style:ct.carouselFrame,children:n.jsx("img",{src:d,alt:`Page ${a+1}`,style:ct.carouselImg})}),n.jsxs("div",{style:ct.carouselNav,children:[n.jsxs("button",{onClick:()=>l(g=>(g-1+s)%s),style:ct.carouselBtn,children:[n.jsx(Qn,{size:16})," Prev"]}),n.jsxs("span",{style:ct.carouselCount,children:[o?"":"Adhyay ",a+1," / ",s]}),n.jsxs("button",{onClick:()=>l(g=>(g+1)%s),style:ct.carouselBtn,children:["Next ",n.jsx(on,{size:16})]})]})]})}function dy(){const t=ly(),[e,r]=b.useState(!1),[o,s]=b.useState([]),[i,l]=b.useState("dss"),[a,d]=b.useState(!1),[g,h]=b.useState({title:"",type:"text",content:"",images:[]}),[y,f]=b.useState([]),[w,k]=b.useState(null),[j,I]=b.useState(!1),p=b.useRef(!1),c=b.useCallback(async()=>{try{const[A,V,W]=await Promise.all([O.getDecks(),O.getSetting("spiritual_order"),O.getSetting("spiritual_default")]);if(s(A),Array.isArray(V==null?void 0:V.value)&&f(V.value),W!=null&&W.value&&k(W.value),!p.current){p.current=!0;const R=new Set([...hs.map(m=>m.id),...A.map(m=>`deck-${m.id}`)]);W!=null&&W.value&&R.has(W.value)&&l(W.value)}}catch{}},[]);b.useEffect(()=>{c()},[c]);const u=[...hs.map(A=>({id:A.id,title:A.title})),...o.map(A=>({id:`deck-${A.id}`,title:A.title}))],v=(()=>{if(!y.length)return u;const A=new Map(u.map(W=>[W.id,W])),V=[];return y.forEach(W=>{A.has(W)&&(V.push(A.get(W)),A.delete(W))}),A.forEach(W=>V.push(W)),V})(),S=(A,V)=>{const W=v.map(m=>m.id),R=A+V;R<0||R>=W.length||([W[A],W[R]]=[W[R],W[A]],f(W),O.setSetting("spiritual_order",W).catch(()=>{}))},z=A=>{k(A),O.setSetting("spiritual_default",A).catch(()=>{})},L=i.startsWith("deck-")?Number(i.slice(5)):null,H=L!=null?o.find(A=>A.id===L):null,M=H?null:hs.find(A=>A.id===i)||(L==null?hs[0]:null),$=a?"New deck":H?H.title:(M==null?void 0:M.title)||"",C=A=>{l(A),d(!1),t&&r(!1)},B=()=>{d(!0),h({title:"",type:"text",content:"",images:[]}),t&&r(!1)},x=async A=>{const V=Array.from(A.target.files||[]),W=[];for(const R of V)try{W.push(await ay(R))}catch{}h(R=>({...R,images:[...R.images,...W]})),A.target.value=""},G=A=>h(V=>({...V,images:V.images.filter((W,R)=>R!==A)})),at=g.title.trim()&&(g.type==="text"?g.content.trim():g.images.length>0),J=async()=>{if(!at)return;const A=await O.createDeck({title:g.title.trim(),type:g.type,content:g.type==="text"?g.content:"",images:g.type==="images"?g.images:[]});d(!1),await c(),l(`deck-${A.id}`)},D=async A=>{await O.deleteDeck(A),i===`deck-${A}`&&l("dss"),c()},F={...ct.sidebar,...t?ct.sidebarOverlay:{},...t&&!e?ct.sidebarHidden:{}};return n.jsxs("div",{style:ct.shell,children:[n.jsx("style",{children:gy}),t&&e&&n.jsx("div",{style:ct.backdrop,onClick:()=>r(!1)}),n.jsxs("aside",{style:F,children:[n.jsxs("div",{style:ct.sideHead,children:[n.jsx("div",{style:ct.brand,children:"Anvil · Spiritual"}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:2},children:[n.jsx("button",{onClick:()=>I(A=>!A),style:ct.iconBtn,title:"Rearrange & set default",children:j?n.jsx(zt,{size:16}):n.jsx(ye,{size:15})}),t&&n.jsx("button",{onClick:()=>r(!1),style:ct.iconBtn,children:n.jsx(kt,{size:17})})]})]}),j&&n.jsxs("div",{style:ct.editHint,children:["Arrows reorder · ",n.jsx(di,{size:11,style:{verticalAlign:"-1px"}})," sets what opens by default"]}),n.jsxs("div",{style:ct.sideScroll,children:[v.map((A,V)=>{const W=A.id===i&&!a,R=w===A.id;return n.jsxs("div",{style:ct.sideRow,children:[n.jsxs("button",{onClick:()=>C(A.id),style:{...ct.sideItem,flex:1,...W?ct.sideItemOn:{}},children:[A.title,R&&n.jsx("span",{style:ct.defStar,title:"Opens by default",children:" ★"})]}),j&&n.jsxs("div",{style:ct.editControls,children:[n.jsx("button",{onClick:()=>z(A.id),title:"Set as default",style:{...ct.miniBtn,...R?{color:"#8268B0"}:{}},children:n.jsx(di,{size:13})}),n.jsx("button",{onClick:()=>S(V,-1),disabled:V===0,style:{...ct.miniBtn,opacity:V===0?.3:1},children:n.jsx(Gb,{size:13})}),n.jsx("button",{onClick:()=>S(V,1),disabled:V===v.length-1,style:{...ct.miniBtn,opacity:V===v.length-1?.3:1},children:n.jsx(zi,{size:13})})]})]},A.id)}),n.jsxs("button",{onClick:B,style:{...ct.newDeckBtn,...a?ct.sideItemOn:{}},children:[n.jsx(ie,{size:14})," New deck"]})]})]}),n.jsxs("main",{style:ct.main,children:[t&&n.jsxs("button",{onClick:()=>r(!0),style:ct.hamburger,children:[n.jsx(jd,{size:17}),n.jsx("span",{style:ct.hamburgerLabel,children:$})]}),a?n.jsxs("div",{style:ct.contentWrap,children:[n.jsx("div",{style:ct.formTitle,children:"Create a deck"}),n.jsx("input",{placeholder:"Deck title (e.g. Vishnu Sahasranamam)",value:g.title,onChange:A=>h({...g,title:A.target.value}),style:ct.input}),n.jsxs("div",{style:ct.typeRow,children:[n.jsxs("button",{onClick:()=>h({...g,type:"text"}),style:{...ct.typeBtn,...g.type==="text"?ct.typeOn:{}},children:[n.jsx(wd,{size:15})," Text"]}),n.jsxs("button",{onClick:()=>h({...g,type:"images"}),style:{...ct.typeBtn,...g.type==="images"?ct.typeOn:{}},children:[n.jsx(ih,{size:15})," Images"]})]}),g.type==="text"?n.jsx("textarea",{placeholder:"Paste or write the text (verses, chant, reflection)…",value:g.content,onChange:A=>h({...g,content:A.target.value}),style:ct.textarea}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:ct.imgGrid,children:[g.images.map((A,V)=>n.jsxs("div",{style:ct.imgThumbWrap,children:[n.jsx("img",{src:A,alt:"",style:ct.imgThumb}),n.jsx("button",{onClick:()=>G(V),style:ct.imgDel,children:n.jsx(kt,{size:12})})]},V)),n.jsxs("label",{style:ct.imgAdd,children:[n.jsx(Ti,{size:20}),n.jsx("span",{style:{fontSize:11},children:"Add images"}),n.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:x,style:{display:"none"}})]})]}),n.jsx("div",{style:ct.hint,children:"Images show as a swipeable carousel, in the order added."})]}),n.jsxs("div",{style:ct.formActions,children:[n.jsxs("button",{onClick:()=>d(!1),style:ct.cancelBtn,children:[n.jsx(kt,{size:14})," Cancel"]}),n.jsxs("button",{onClick:J,disabled:!at,style:{...ct.saveBtn,...at?{}:ct.saveDisabled},children:[n.jsx(zt,{size:15})," Create deck"]})]})]}):H?n.jsxs("div",{style:ct.contentWrap,children:[n.jsxs("div",{style:ct.deckHead,children:[n.jsx("h2",{style:ct.deckTitle,children:H.title}),n.jsx("button",{onClick:()=>D(H.id),style:ct.deckDel,title:"Delete deck",children:n.jsx(kh,{size:15})})]}),H.type==="images"?n.jsx(nc,{images:H.images}):n.jsx("div",{style:ct.deckText,children:H.content})]}):n.jsxs("div",{style:ct.contentWrap,children:[(M==null?void 0:M.youtube)&&n.jsx("div",{style:ct.videoFrame,children:n.jsx("iframe",{src:`https://www.youtube.com/embed/${M.youtube}`,title:M.title,style:ct.video,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},M.youtube)}),M!=null&&M.carousel?n.jsx(nc,{base:M.imageBase,count:M.carousel}):n.jsx("div",{className:"spiritual-content",dangerouslySetInnerHTML:{__html:(M==null?void 0:M.html)||""}})]})]})]})}const gy=`
.spiritual-content { font-family: 'Inter', system-ui, sans-serif; color: var(--text); line-height: 1.9; font-size: 16px; text-align: center; }
.spiritual-content h1 { font-family: 'Fraunces', Georgia, serif; font-size: 24px; color: #8268B0; margin: 8px 0 18px; letter-spacing: -0.01em; }
.spiritual-content h2 { font-family: 'Fraunces', Georgia, serif; font-size: 18px; color: #7A5EA8; margin: 20px 0 8px; }
.spiritual-content h3 { font-size: 15px; color: var(--text-3); text-transform: uppercase; letter-spacing: 0.06em; margin: 18px 0 6px; }
.spiritual-content b { color: #8268B0; }
.spiritual-content div { text-align: center; }
`,ct={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:240,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.15)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.35)",zIndex:20},sideHead:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 14px 12px"},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700},sideScroll:{flex:1,overflowY:"auto",padding:"0 8px 16px"},sideItem:{display:"block",width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text-2)",textAlign:"left",marginBottom:2},sideItemOn:{background:"rgba(130,104,176,0.12)",color:"#8268B0",fontWeight:700},sideRow:{display:"flex",alignItems:"center",gap:2},editControls:{display:"flex",alignItems:"center",gap:1,flexShrink:0},miniBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:5},defStar:{color:"#C9A227",fontWeight:700},editHint:{fontSize:10.5,color:"var(--text-3)",padding:"0 14px 8px",lineHeight:1.4},newDeckBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",padding:"9px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,color:"var(--text-2)",marginTop:6},main:{flex:1,padding:"26px 22px",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:220},contentWrap:{background:"var(--surface)",borderRadius:14,padding:"26px 28px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",maxWidth:760,margin:"0 auto"},videoFrame:{position:"relative",width:"100%",maxWidth:600,margin:"0 auto 22px",aspectRatio:"16 / 9",borderRadius:12,overflow:"hidden",background:"#000"},video:{position:"absolute",inset:0,width:"100%",height:"100%",border:"none"},carouselFrame:{background:"var(--surface-2)",borderRadius:12,padding:8,border:"1px solid var(--border)"},carouselImg:{width:"100%",borderRadius:8,display:"block"},carouselNav:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:14},carouselBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},carouselCount:{fontSize:13,fontWeight:700,color:"#8268B0",fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"none",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,color:"var(--text-2)"},deckHead:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,marginBottom:16,borderBottom:"1px solid var(--border)",paddingBottom:12},deckTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",margin:0,color:"#8268B0"},deckDel:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",cursor:"pointer",display:"grid",placeItems:"center",padding:7,borderRadius:8,flexShrink:0},deckText:{fontSize:16,lineHeight:1.9,whiteSpace:"pre-wrap",color:"var(--text)",textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},formTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},typeRow:{display:"flex",gap:8,marginTop:12},typeBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},typeOn:{background:"#8268B0",color:"#fff",borderColor:"#8268B0"},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:200,resize:"vertical",lineHeight:1.7,marginTop:12},imgGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(90px, 1fr))",gap:8,marginTop:12},imgThumbWrap:{position:"relative",aspectRatio:"1",borderRadius:8,overflow:"hidden",border:"1px solid var(--border)"},imgThumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},imgDel:{position:"absolute",top:3,right:3,border:"none",background:"rgba(0,0,0,0.6)",color:"#fff",borderRadius:"50%",width:18,height:18,cursor:"pointer",display:"grid",placeItems:"center",padding:0},imgAdd:{aspectRatio:"1",border:"1px dashed var(--border)",borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4,cursor:"pointer",color:"var(--text-3)"},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:8},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"#8268B0",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"}},rr={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},oc=Object.keys(rr),cy=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],uy=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],by=()=>{const t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`},py=(t,e)=>`${uy[e-1]} ${t}`,my=(t,e)=>{const r=new Date(t,e,0).getDate();return Array.from({length:r},(o,s)=>`${t}-${String(e).padStart(2,"0")}-${String(s+1).padStart(2,"0")}`)},fy=(t,e)=>{const r=new Date(t,e-1,1).getDay();return r===0?6:r-1};function hy(){const t=by(),[e,r]=b.useState(new Date().getFullYear()),[o,s]=b.useState(new Date().getMonth()+1),[i,l]=b.useState([]),[a,d]=b.useState([]),[g,h]=b.useState({}),[y,f]=b.useState(null),[w,k]=b.useState(!1),[j,I]=b.useState(!1),[p,c]=b.useState({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:t}),[u,v]=b.useState(null),S=b.useCallback(async()=>{const[m,N,ot]=await Promise.all([O.getTopics(),O.getDueToday(),O.getCalendar(e,o)]);l(m),d(N),h(ot)},[e,o]);b.useEffect(()=>{S()},[S]);const z=async m=>{await O.toggleReviewDone(m),S()},L=async()=>{const m=p.intervals.split(",").map(N=>parseInt(N.trim(),10)).filter(N=>!isNaN(N));!p.topic.trim()||m.length===0||(await O.createTopic({pillar:p.pillar,topic:p.topic.trim(),intervals:m,learned_date:p.learned_date||t}),c({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:t}),I(!1),S())},{deleteItem:H,toasts:M,handleUndo:$,handleDismiss:C}=sn(O.deleteTopic,O.restoreTopic,S),B=(m,N)=>H(m,N),x=m=>v({id:m.id,topic:m.topic,pillar:m.pillar,intervals:(m.intervals||[]).join(", "),learned_date:m.learned_date}),G=async()=>{if(!u)return;const m=u.intervals.split(",").map(N=>parseInt(N.trim(),10)).filter(N=>!isNaN(N)&&N>=0);!u.topic.trim()||m.length===0||(await O.updateTopic(u.id,{topic:u.topic.trim(),pillar:u.pillar,learned_date:u.learned_date,intervals:m}),v(null),S())},at=()=>{o===1?(r(m=>m-1),s(12)):s(m=>m-1),f(null)},J=()=>{o===12?(r(m=>m+1),s(1)):s(m=>m+1),f(null)},D=i.filter(m=>!m.cemented),F=i.filter(m=>m.cemented),A=my(e,o),V=fy(e,o),W=b.useMemo(()=>{const m={};return i.forEach(N=>N.reviews.forEach(ot=>{ot.done||(m[ot.due_date]=m[ot.due_date]||[]).push({topic:N.topic,pillar:N.pillar,stage:ot.stage})})),m},[i]),R=y?i.flatMap(m=>m.reviews.filter(N=>N.due_date===y).map(N=>({...N,topic:m.topic,pillar:m.pillar,total:m.reviews.length}))):[];return n.jsxs("div",{style:rt.page,children:[n.jsxs("div",{style:rt.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:rt.eyebrow,children:"Anvil · Revision"}),n.jsx("h1",{style:rt.h1,children:"Spaced Repetition"})]}),n.jsxs("button",{onClick:()=>I(!0),style:rt.addBtn,children:[n.jsx(ie,{size:15})," Add topic"]})]}),j&&n.jsxs("div",{style:rt.addBox,children:[n.jsx("input",{autoFocus:!0,placeholder:"What did you learn?",value:p.topic,onChange:m=>c(N=>({...N,topic:m.target.value})),onKeyDown:m=>m.key==="Enter"&&L(),style:rt.input}),n.jsxs("div",{style:rt.addRow,children:[n.jsx("select",{value:p.pillar,onChange:m=>c(N=>({...N,pillar:m.target.value})),style:rt.select,children:oc.map(m=>n.jsx("option",{children:m},m))}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[n.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),n.jsx("input",{type:"date",value:p.learned_date,onChange:m=>c(N=>({...N,learned_date:m.target.value})),style:{...rt.select,fontSize:13}})]}),n.jsx("div",{style:{flex:1,minWidth:0},children:n.jsx("input",{value:p.intervals,onChange:m=>c(N=>({...N,intervals:m.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:rt.input})})]}),n.jsxs("div",{style:rt.addRow,children:[n.jsxs("button",{onClick:L,style:rt.saveBtn,children:[n.jsx(zt,{size:14})," Save"]}),n.jsxs("button",{onClick:()=>I(!1),style:rt.cancelBtn,children:[n.jsx(kt,{size:14})," Cancel"]})]})]}),a.length>0&&n.jsxs("div",{style:rt.section,children:[n.jsxs("div",{style:rt.sectionTitle,children:[n.jsx(qb,{size:15,color:"#C2536B"}),"Due Today",n.jsx("span",{style:rt.badge,children:a.length})]}),a.map(m=>{var ot,et;const N=((ot=rr[m.pillar])==null?void 0:ot.dot)||"#9A968C";return n.jsxs("div",{style:{...rt.reviewCard,borderLeft:`3px solid ${N}`,...m.is_missed?{opacity:.85}:{}},children:[n.jsx("button",{onClick:()=>z(m.review_id),style:{...rt.checkbox,...m.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:m.done&&n.jsx(zt,{size:12,color:"#fff",strokeWidth:3})}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:rt.reviewTopic,children:m.topic}),n.jsxs("div",{style:rt.reviewMeta,children:[n.jsxs("span",{style:{...rt.stageTag,background:((et=rr[m.pillar])==null?void 0:et.soft)||"rgba(0,0,0,0.05)",color:N},children:["Review ",m.stage,"/",m.total_stages]}),m.is_missed&&n.jsxs("span",{style:rt.missedTag,children:["missed · ",m.due_date]})]})]})]},m.review_id)})]}),n.jsxs("div",{style:rt.section,children:[n.jsxs("div",{style:rt.sectionTitle,children:["Active Topics ",n.jsx("span",{style:rt.badge,children:D.length})]}),D.length===0&&n.jsx("div",{style:rt.empty,children:"No active topics. Add something you learned today."}),D.map(m=>{var ft,It;const N=((ft=rr[m.pillar])==null?void 0:ft.dot)||"#9A968C",ot=((It=rr[m.pillar])==null?void 0:It.soft)||"rgba(0,0,0,0.05)",et=m.reviews.filter(ht=>ht.done).length;return(u==null?void 0:u.id)===m.id?n.jsxs("div",{style:rt.addBox,children:[n.jsx("input",{autoFocus:!0,value:u.topic,onChange:ht=>v(jt=>({...jt,topic:ht.target.value})),onKeyDown:ht=>ht.key==="Enter"&&G(),placeholder:"Topic",style:rt.input}),n.jsxs("div",{style:rt.addRow,children:[n.jsx("select",{value:u.pillar,onChange:ht=>v(jt=>({...jt,pillar:ht.target.value})),style:rt.select,children:oc.map(ht=>n.jsx("option",{children:ht},ht))}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[n.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),n.jsx("input",{type:"date",value:u.learned_date,onChange:ht=>v(jt=>({...jt,learned_date:ht.target.value})),style:{...rt.select,fontSize:13}})]}),n.jsx("div",{style:{flex:1,minWidth:0},children:n.jsx("input",{value:u.intervals,onChange:ht=>v(jt=>({...jt,intervals:ht.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:rt.input})})]}),n.jsx("div",{style:rt.editHint,children:"Changing the date or intervals reschedules the reviews (completed steps are kept where they still apply)."}),n.jsxs("div",{style:rt.addRow,children:[n.jsxs("button",{onClick:G,style:rt.saveBtn,children:[n.jsx(zt,{size:14})," Save plan"]}),n.jsxs("button",{onClick:()=>v(null),style:rt.cancelBtn,children:[n.jsx(kt,{size:14})," Cancel"]})]})]},m.id):n.jsxs("div",{style:rt.topicCard,children:[n.jsxs("div",{style:rt.topicHead,children:[n.jsx("span",{style:{...rt.dot,background:N}}),n.jsx("span",{style:rt.topicName,children:m.topic}),n.jsx("span",{style:rt.topicPillar,children:m.pillar}),n.jsxs("span",{style:rt.topicProgress,children:[et,"/",m.reviews.length," done"]}),n.jsx("button",{onClick:()=>x(m),style:rt.ghostBtn,title:"Edit plan",children:n.jsx(ye,{size:12})}),n.jsx("button",{onClick:()=>B(m.id,m.topic),style:rt.ghostBtn,title:"Delete",children:n.jsx(kt,{size:13})})]}),n.jsxs("div",{style:rt.reviewDots,children:[m.reviews.map(ht=>{ht.due_date<t;const jt=ht.due_date===t;return n.jsx("button",{onClick:()=>z(ht.id),title:`Review ${ht.stage} · ${ht.due_date}${ht.done?" · Done":""}`,style:{...rt.reviewDot,background:ht.done?N:jt?ot:"var(--hover)",border:`2px solid ${ht.done||jt?N:"var(--border)"}`,color:ht.done?"#fff":N},children:ht.stage},ht.id)}),n.jsxs("span",{style:rt.learnedDate,children:["Learned ",m.learned_date]})]})]},m.id)})]}),F.length>0&&n.jsxs("div",{style:rt.section,children:[n.jsxs("button",{onClick:()=>k(m=>!m),style:rt.cementedToggle,children:[w?n.jsx(zi,{size:15}):n.jsx(on,{size:15}),n.jsx(tn,{size:14,color:"#C9A227"}),"Cemented",n.jsx("span",{style:{...rt.badge,background:"rgba(201,162,39,0.12)",color:"#8A6E1A"},children:F.length})]}),w&&F.map(m=>{var ot;const N=((ot=rr[m.pillar])==null?void 0:ot.dot)||"#9A968C";return n.jsx("div",{style:{...rt.topicCard,opacity:.75},children:n.jsxs("div",{style:rt.topicHead,children:[n.jsx("span",{style:{...rt.dot,background:N}}),n.jsx("span",{style:rt.topicName,children:m.topic}),n.jsx("span",{style:rt.topicPillar,children:m.pillar}),n.jsx(tn,{size:13,color:"#C9A227",style:{marginLeft:"auto"}})]})},m.id)})]}),n.jsxs("div",{style:rt.calCard,children:[n.jsxs("div",{style:rt.calHead,children:[n.jsx("button",{onClick:at,style:rt.calNav,children:"‹"}),n.jsxs("div",{style:rt.calTitle,children:[py(e,o)," · Review Calendar"]}),n.jsx("button",{onClick:J,style:rt.calNav,children:"›"})]}),n.jsx("div",{style:rt.calDow,children:cy.map(m=>n.jsx("div",{style:rt.calDowCell,children:m},m))}),n.jsxs("div",{style:rt.calGrid,children:[Array.from({length:V}).map((m,N)=>n.jsx("div",{},`p${N}`)),A.map((m,N)=>{const ot=W[m]||[],et=m===t,ft=m===y,It=m<t,ht=ft?"#fff":et?"var(--text)":It?"var(--text-2)":"var(--text-3)";return n.jsxs("button",{onClick:()=>f(ft?null:m),style:{...rt.calDay,background:ft?"var(--accent-strong)":et?"var(--hover)":"var(--surface)",borderColor:et||ft?"var(--accent-strong)":"var(--border)"},children:[n.jsx("span",{style:{...rt.calDayNum,color:ht,fontWeight:et||ft?700:600},children:N+1}),ot.slice(0,2).map((jt,Q)=>{var mt;return n.jsxs("span",{title:jt.topic,style:{...rt.calItem,color:ft?"#fff":((mt=rr[jt.pillar])==null?void 0:mt.dot)||"var(--text-2)"},children:[Q+1,". ",jt.topic]},Q)}),ot.length>2&&n.jsxs("span",{style:{...rt.calMore,color:ft?"#fff":"var(--text-3)"},children:["+",ot.length-2," more"]})]},m)})]}),y&&n.jsxs("div",{style:rt.dayDetail,children:[n.jsxs("div",{style:rt.dayDetailTitle,children:["Reviews for ",y]}),R.length===0?n.jsx("div",{style:rt.empty,children:"No reviews scheduled for this day."}):R.map((m,N)=>{var et,ft;const ot=((et=rr[m.pillar])==null?void 0:et.dot)||"#9A968C";return n.jsxs("div",{style:{...rt.reviewCard,borderLeft:`3px solid ${ot}`},children:[n.jsx("button",{onClick:()=>z(m.id),style:{...rt.checkbox,...m.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:m.done&&n.jsx(zt,{size:12,color:"#fff",strokeWidth:3})}),n.jsxs("div",{children:[n.jsxs("div",{style:rt.reviewTopic,children:[N+1,". ",m.topic]}),n.jsxs("span",{style:{...rt.stageTag,background:((ft=rr[m.pillar])==null?void 0:ft.soft)||"rgba(0,0,0,0.05)",color:ot},children:["Review ",m.stage,"/",m.total]})]})]},m.id)})]})]}),n.jsx(ln,{toasts:M,onUndo:$,onDismiss:C})]})}const rt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},addBox:{background:"var(--surface)",borderRadius:12,padding:16,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},addRow:{display:"flex",gap:8,alignItems:"center"},editHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",minWidth:0},select:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 10px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},section:{marginBottom:20},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},reviewCard:{display:"flex",alignItems:"center",gap:12,background:"var(--surface)",borderRadius:10,padding:"12px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},checkbox:{width:22,height:22,borderRadius:6,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,padding:0},reviewTopic:{fontSize:13.5,fontWeight:600,marginBottom:4},reviewMeta:{display:"flex",alignItems:"center",gap:8},stageTag:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10},missedTag:{fontSize:11,color:"#C2536B",fontWeight:600},topicCard:{background:"var(--surface)",borderRadius:12,padding:"13px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},topicHead:{display:"flex",alignItems:"center",gap:8,marginBottom:10},dot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},topicName:{fontSize:14,fontWeight:600,flex:1},topicPillar:{fontSize:11,color:"var(--text-3)",fontWeight:500},topicProgress:{fontSize:11,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:10},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},reviewDots:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},reviewDot:{width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",fontSize:11,fontWeight:700,padding:0},learnedDate:{fontSize:11,color:"var(--text-3)",marginLeft:"auto"},cementedToggle:{display:"flex",alignItems:"center",gap:8,border:"none",background:"none",cursor:"pointer",fontSize:13,fontWeight:700,color:"var(--text-2)",padding:"4px 0",fontFamily:"inherit",marginBottom:8},empty:{fontSize:13,color:"var(--text-3)",padding:"16px 0",textAlign:"center"},calCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{border:"none",background:"none",fontSize:20,cursor:"pointer",color:"var(--text-2)",padding:"0 6px",lineHeight:1},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4},calDay:{minHeight:62,border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,cursor:"pointer",fontFamily:"inherit",display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"flex-start",gap:1,position:"relative",padding:"3px 4px",overflow:"hidden",textAlign:"left"},calDayNum:{fontSize:11,lineHeight:1.1,marginBottom:1},calItem:{fontSize:8.5,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",lineHeight:1.3,textAlign:"left"},calMore:{fontSize:8,fontWeight:700,opacity:.85,lineHeight:1.2},dayDetail:{marginTop:16,paddingTop:16,borderTop:"1px solid var(--border)"},dayDetailTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10}},ys=[{id:1,title:"Regular Habits",cards:[{id:1,text:"1. I always do everything I need to do, when I need to do it. "},{id:2,text:"2. I never argue or let my emotions work against me. "},{id:3,text:"3. I have a good memory. I easily and automatically remember any name or anything that is important to me. "},{id:4,text:"4. I eat only what I should. "},{id:5,text:"5. I am a good listener. I hear everything that is said. I am attentive, interested, and aware of everything that is going on around me. "},{id:6,text:"6. I have the courage to state my opinions. I take responsibility for myself and everything I say and do."},{id:7,text:"7. I never spend more than I earn. I am financially responsible, both for my present and for my future."},{id:8,text:"8. I set goals and I follow them. I set my sights, take the appropriate action, and achieve my goals."},{id:9,text:"9. I spend time with my family and my loved ones. I enjoy sharing their lives with mine and my life with theirs."}]},{id:2,title:"Motivational",cards:[{id:1,text:"1. I can do anything I believe I can do. I’ve got it and every day I get more of it. I have talent, skills, and ability"},{id:2,text:"2. I set goals and I reach them. I know what I want out of life. I go after it and I get it. "},{id:3,text:"3. People like me, and I feel good about myself. I have a sense of pride in whoa am and I believe in myself. Nothing seems to stop me. I have a lot of determination. "},{id:4,text:"4. I turn problems into advantages. I find possibilities in things that other people never give a chance."},{id:5,text:"5. I have a lot of energy––I am very alive. I enjoy life and I can tell it and so can others"},{id:6,text:"6. I keep myself up, looking ahead, and liking it. I know that I can accomplish anything I choose, and I refuse to let anything negative hold me back or stand in my way. I am not afraid of anything or anyone. I have strength, power, conviction, and confidence. "},{id:7,text:"7. I like challenges and I meet them head on, face to face––today especially. I am on top of the world and I’m going for it. "},{id:8,text:"8. I have a clear picture in my mind of what I want. I can see it in front of me. "},{id:9,text:"9. I know what I want and I know how to get it. I know that it’s all up to me and I know I can do it. Roadblocks don’t bother me. They just mean that I am alive and running, and I’m not going to stand still for anything. "},{id:10,text:"10. I trust myself I’ve got what it takes––plenty of it––and I know how to use it. "},{id:11,text:"11. Today, more than ever. Today I am unstoppable. I’ve got myself together and I’m getting more together every day. And today––look out world, here I come. "},{id:12,text:"12. Limitations? I don’t even recognize them as limitations. There is no challenge I can’t conquer; there is no wall I can’t climb over. "},{id:13,text:"13. There is no problem I can’t defeat or turn around and make it work for me. I stand tall. I am honest and sincere. I like to deal with people and they like me. "},{id:14,text:"14. I think well; I think clearly. I am organized; I am in control of myself, and everything about me. I call my shots and no one has to call them for me. I never blame anyone else for the circumstances of my life. "},{id:15,text:"15. I accept my failings and move past them as easily as I accept the rewards for my victories. I never demand perfection of myself, but I expect the very best of what I have to give––and that’s what I get. I never give myself excuses. "},{id:16,text:"16. I get things done on time and in the right way. Today I have the inner strength to do more than ever. I am an exceptional human being. "},{id:17,text:"17. My goals and my incredible belief in myself turn my goals into reality. I have the power to live my dreams."},{id:18,text:"18.  I believe in them like I believe in myself. And that belief is so strong that there is nothing that diminishes my undefeatable spirit. "}]},{id:3,title:"Organized planning",cards:[{id:1,text:"1. I am organized and in control of my life. I am in control of myself, my thoughts, my time, my actions, and my future. "},{id:2,text:"2. I know what to do and when to do it, and I do everything I need to do, when I need to do it. "},{id:3,text:"3. I program my mind to make the maximum use of my time. I am in control of my time and how to use it. I like being organized, efficient, and on top of things."},{id:4,text:"4. Controlling my time keeps me that way. "},{id:5,text:"5. I never waste time––I always “plan” time. And because I plan my time, I always have time to do the things I choose to do. "},{id:6,text:"6. Each day I become more organized and in control of all areas of my life––at home, at work, in my mind and in my thoughts, in everything that I do. "},{id:7,text:"7. I am very well organized. Each night I make a list of things I need to do the next day. I set my priorities and I follow them. "},{id:8,text:"8. I am always on time. I am always right where I need to be, exactly when I need to be there. "},{id:9,text:"9. Being on time is easy for me and the more I control my time and the more organized I become, the easier it is. "},{id:10,text:"10. I am in control of my feelings, my emotions, my attitudes, and my needs. I control them; they do not control me. "},{id:11,text:"11. I have the winning vote in the outcome of my own actions. And I choose to live my life by choice, not chance. Therefore, I take the time to take control."},{id:12,text:"12. I have an organized and orderly mind. Because I think in an organized way, I conduct my life in an organized manner. "},{id:13,text:"13. I think in the most positive and productive way at all times and in all things. The way I think is the way I live––and I think “right.” "},{id:14,text:"14. I am the director of my destiny. I know where I am going and I know why I am going there. My earthly life is in my hands and in my control. "},{id:15,text:"15. I control my goals and the achievement of my goals. I organize my goals by writing each of them down, along with the steps I need to reach them. One of the reasons for my success is that my goals are clearly defined and organized."},{id:16,text:"16. I am in complete control of what I think and how I think. Therefore, I choose to think only those thoughts which help me and which are of genuine benefit to me."}]},{id:4,title:"Solving Problems",cards:[{id:1,text:"1. I’m good at solving problems. I like challenges and I meet them head on. "},{id:2,text:"2. Problems are my teachers. They help me to learn and grow. Without them, I would be going nowhere. With them, I am moving forward in the direction of my own goals. "},{id:3,text:"3. There is no problem which I cannot conquer. I am strong in mind, body, and spirit. My will, my strength, and my determination are always greater than any problem I face."},{id:4,text:"4. When I meet a new problem, I do not see the problem as my enemy. I know that finding the solution to the problem will move me forward in my own personal growth."},{id:5,text:"5. Because I know that problems are a key ingredient in my spiritual and mental education and preparation, I recognize that all problems are important to me. "},{id:6,text:"6. I do not fear problems, I solve them. I do not ignore problems, I confront them. I do not avoid problems, I conquer them. "},{id:7,text:"7. I know that every problem holds within itself the keys to its own solution. Therefore, the better I understand the problem, the clearer I am able to see its solution. "},{id:8,text:"8. Having problems is not a problem for me. I am confident, self-assured, positive, and determined. I always know that I am going to overcome any problem I encounter––and I always do. "},{id:9,text:"9. I am good at breaking large obstacles down into smaller pieces that are easier to handle. And I never make any problem appear to be larger than it actually is. "},{id:10,text:"10. I never worry. I turn “worry time” into positive, constructive, “solution time.” I keep my mind alert and open to all solutions—and solutions come quickly and easily to me. "},{id:11,text:"11. I have learned to recognize that many problems carry with them benefits and potential opportunities which would not have presented themselves had the problem not occurred in the first place. "},{id:12,text:"12. I do not seek to live a life which is free from all problems. Instead, I choose to live a life of finding solutions and enjoying the benefits which those solutions create."},{id:13,text:"13. Challenge, conquer, solution, and win are words which I live by daily. Challenges are opportunities. Conquering them is the inevitable outcome. "},{id:14,text:"14. “Solutions” are the stepping stones to my success, and “Winning” is my way of life."}]},{id:5,title:"Self Esteem",cards:[{id:1,text:"1. I really am very special. I like who I am and I feel good about myself. "},{id:2,text:"2. Although I always work to improve myself and I get better every day, I like who I am today. And tomorrow, when I’m even better, I’ll like myself then, too. "},{id:3,text:"3. It’s true that there really is no one else like me in the entire world. There never was another me before, and there will never be another me again. "},{id:4,text:"4. I am unique––from the top of my head to the bottom of my feet. In some ways I may look and act and sound like some others––but I am not them. I am me."},{id:5,text:"5. I wanted to be somebody––and now I know I am I would rather be me than anyone else in the world. "},{id:6,text:"6. I like how I feel and I like how I think and I like how I do things. I approve of me and I approve of who I am."},{id:7,text:"7. I have many beautiful qualities about me. I have talents and skills and abilities. I even have talents that I don’t even know about yet. And I am discovering new talents inside myself all the time. "},{id:8,text:"8. I am positive. I am confident. I radiate good things. If you look closely, you can even see a glow around me."},{id:9,text:"9. I am full of life. I like life and I’m glad to be alive. I am a very special person, living at a very special time. "},{id:10,text:"10. I am intelligent. My mind is quick and alert and clever and fun. I think good thoughts, and my mind makes things work right for me. "},{id:11,text:"11. I have a lot of energy and enthusiasm and vitality. I am exciting and I really enjoy being me. "},{id:12,text:"12. I like to be around other people and other people like to be around me. People like to hear what I have to say and know what I have to think. "},{id:13,text:"13. I smile a lot. I am happy on the inside and I am happy on the outside. "},{id:14,text:"14. I am interested in many things. I appreciate all the blessings I have, and the things that I learn, and all the things I will learn today and tomorrow and forever––just as long as I am. "},{id:15,text:"15. I am warm, sincere, honest, and genuine. I am all of these things and more. And all of these things are me. I like who I am, and I’m glad to be me."}]},{id:6,title:"Self-Responsibility",cards:[{id:1,text:"1. I take full responsibility for everything about me––even the thoughts that I think. I am in control of the vast resources of my own mind."},{id:2,text:"2. I alone am responsible for what I do and what I tell myself about me. No one can share this responsibility with me. "},{id:3,text:"3. I also allow others to accept their responsibilities far themselves and I do not try to accept their responsibilities for them. "},{id:4,text:"4. I enjoy being responsible. It puts me in charge of being me––and that’s a challenge I enjoy. "},{id:5,text:"5. I allow no one else, at any time, to assume control or responsibility over my life or over anything that I do. My responsibility to others is an extension of my own responsibility to myself. "},{id:6,text:"6. I choose to leave nothing about me up to chance. When it comes to me––and anything in my life––I choose to CHOOSE. "},{id:7,text:"7. My choices are mine alone to make for myself. I do not, at any time, allow anyone else to make my choices for me. And I accept full responsibility for every choice and decision I make. "},{id:8,text:"8. I always meet all of the obligations which I accept. And I accept no obligations which I will not meet. "},{id:9,text:"9. I am trustworthy. I can be counted on. I have accepted winning responsibility for myself––and I always live up to the responsibilities I accept. "},{id:10,text:"10. There is no they on whom I lay the blame, or with whom I share my own personal responsibilities. I have learned the great secret of mastering my own destiny. I have learned that “they” is “me.” "},{id:11,text:"11. I have no need to make excuses and no one needs to carry my responsibility for me. I gladly carry my own weight––and I carry it well. "},{id:12,text:"12. Each day I acknowledge and accept the responsibility––not only for my own actions––but also for my emotions, my thoughts, and my attitude. "},{id:13,text:"13. I accept the responsibility for living my life in a way which creates my strengths, my happiness, my positive, healthy beliefs, and for my past, my present, and my future."}]},{id:7,title:"Freedom from worry",cards:[{id:1,text:"1. I never worry. Instead of worrying, I find solutions and I act on them. "},{id:2,text:"2. My mind is constantly in tune with the positive. It is bright, cheerful, enthusiastic, and full of good, positive thoughts and ideas. "},{id:3,text:"3. I am able to relax easily and comfortably in my body and in my mind. I am calm, confident, and self-assured. "},{id:4,text:"4. My mind is orderly and well-organized. I consciously choose what I think and I always choose those thoughts which are the most positive and beneficial for me. "},{id:5,text:"5. All of my thoughts create healthiness within me. My mind dwells only on those thoughts which create more harmony, balance, and well-being within me and in the world around me. "},{id:6,text:"6. I automatically, and always, think in a decisive and determined way. "},{id:7,text:"7. I am full of resolution and the absolute assurance of the best possible outcome in everything that I do. "},{id:8,text:"8. I choose to look at the world around me in the bright, healthy light of optimism and self-assurance. "},{id:9,text:"9. I do only those things which are best for me. I create the best within myself, I attract the best in others, and I find the best in the world around me. "},{id:10,text:"10. I willingly, and without fail, take care of the duties and obligations which I have accepted for myself."},{id:11,text:"11. I commit only to those responsibilities which I know I can fulfill. "},{id:12,text:"12. I focus the attention of my mind only on those things that I can do something about. If I cannot affect it or direct it––I accept it. "},{id:13,text:"13. I keep my mind too busy thinking good, healthy, positive, constructive, and productive thoughts to ever have any time for worry. "},{id:14,text:"14. I control the thoughts I choose. No thought, at any time, can dwell in my mind without my approval or permission. I never worry."}]},{id:8,title:"Eating Habits",cards:[{id:1,text:"1. I am in control of myself in every way––at all times and in all situations. "},{id:2,text:"2. Each time I sit down to eat I reaffirm my determination to achieve my goal. By eating right, and never giving in, I am reaching the weight I want. "},{id:3,text:"3. Whether eating in or eating out, I really enjoy eating less. "},{id:4,text:"4. I never feel the need to finish the food in front of me. I eat only what I should––and never one bite more. "},{id:5,text:"5. One way to weight-loss that’s easy and works, is less food on my plate, and less on my fork. "},{id:6,text:'6. By ordering less when I eat out, and by serving myself smaller portions at home, I keep myself aware of the importance of staying with my goal––each and every day. “Less on my plate means less on my waist."'},{id:7,text:"7. When I sit down to eat, at no time do I allow anyone else to influence, tempt, or discourage me in any negative way."},{id:8,text:"8. What I eat, and the goals I reach, are up to me. And I give no one the right to hinder or control my success."},{id:9,text:"9. Although others may benefit from my success, I. am achieving my weight-loss goals for my own personal reasons––for myself, my life, my future, and my own personal well-being."},{id:10,text:"10. I am never, at any time, tempted to take one bite more than I should. I am strong, I am capable of reaching my goal, and I am doing it."},{id:11,text:"11. Being in situations which put a lot of food in front of me is not a problem to me now. I simply say “No” to the food and “Yes” to my success."},{id:12,text:"12. I enjoy sitting down to eat. Each time I do I conquer my past, and I create a trimmer, happier, more self-confident future in front of me. "},{id:13,text:"13. When I sit down to eat, I do not need someone else to remind me of my goal, or to keep me from eating something I should not. I take full responsibility for myself, and no one else has to do it for me. "},{id:14,text:"14. Controlling my weight, and my appetite, is easy for me now. I enjoy smaller portions, smaller bites, and a slower, healthier, more relaxed way of eating. "},{id:15,text:"15. I have set my goal and I am staying with it. I have turned mealtime into “achievement time.”"}]}],sc=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#3A7CA5","#4C9A6B"],cl=t=>sc[t%sc.length],yy=t=>t+"1A",sp="anvil_affirmation_favs",vy=()=>{try{return new Set(JSON.parse(localStorage.getItem(sp)||"[]"))}catch{return new Set}};function xy(){const[t,e]=b.useState(0),[r,o]=b.useState(0),[s,i]=b.useState(vy);b.useEffect(()=>{localStorage.setItem(sp,JSON.stringify([...s]))},[s]);const l=(I,p)=>`${I}#${p.id}`,a=t==="FAV"?ys.flatMap((I,p)=>I.cards.filter(c=>s.has(l(I.title,c))).map(c=>({...c,color:cl(p),title:I.title}))):ys[t].cards.map(I=>({...I,color:cl(t),title:ys[t].title})),d=a.length,g=Math.min(r,Math.max(0,d-1)),h=a[g],y=I=>{e(I),o(0)},f=b.useCallback(()=>o(I=>Math.max(0,I-1)),[]),w=b.useCallback(()=>o(I=>Math.min(d-1,I+1)),[d]);b.useEffect(()=>{const I=p=>{p.key==="ArrowLeft"&&f(),p.key==="ArrowRight"&&w()};return window.addEventListener("keydown",I),()=>window.removeEventListener("keydown",I)},[f,w]);const k=I=>i(p=>{const c=new Set(p);return c.has(I)?c.delete(I):c.add(I),c}),j=h?h.color:"#8268B0";return n.jsxs("div",{style:At.page,children:[n.jsxs("div",{style:At.head,children:[n.jsx("div",{style:At.eyebrow,children:"Anvil · Affirmations"}),n.jsx("h1",{style:At.h1,children:"Affirmations"}),n.jsx("div",{style:At.subhead,children:"One at a time — read it, mean it."})]}),n.jsxs("div",{style:At.filterBar,children:[ys.map((I,p)=>{const c=t===p,u=cl(p);return n.jsxs("button",{onClick:()=>y(p),style:{...At.chip,...c?{background:u,color:"#fff",borderColor:u}:{}},children:[n.jsx("span",{style:{...At.catDot,background:c?"#fff":u}})," ",I.title," ",n.jsx("span",{style:At.chipCount,children:I.cards.length})]},I.title)}),n.jsxs("button",{onClick:()=>y("FAV"),style:{...At.chip,...t==="FAV"?{background:"#C9A227",color:"#fff",borderColor:"#C9A227"}:{}},children:[n.jsx(_s,{size:12,fill:t==="FAV"?"#fff":"none"})," Favorites ",n.jsx("span",{style:At.chipCount,children:s.size})]})]}),d===0?n.jsxs("div",{style:At.empty,children:[n.jsx(_s,{size:22,color:"#C3BFB5"}),n.jsx("div",{children:"No favorites yet — tap the star on a card to save it here."})]}):n.jsxs("div",{style:At.viewer,children:[n.jsxs("div",{style:{...At.card,borderTop:`4px solid ${j}`},children:[n.jsx("div",{style:{...At.cardCat,color:j,background:yy(j)},children:h.title}),n.jsx("button",{onClick:()=>k(l(h.title,h)),style:{...At.favBtn,color:s.has(l(h.title,h))?"#C9A227":"#C3BFB5"},title:"Favorite",children:n.jsx(_s,{size:20,fill:s.has(l(h.title,h))?"#C9A227":"none"})}),n.jsx(Jb,{size:30,color:j,style:{opacity:.25}}),n.jsx("p",{style:At.cardText,children:h.text.trim()})]}),n.jsxs("div",{style:At.navRow,children:[n.jsxs("button",{onClick:f,disabled:g===0,style:{...At.navBtn,...g===0?At.navBtnDisabled:{}},children:[n.jsx(Qn,{size:18})," Back"]}),n.jsxs("span",{style:{...At.counter,color:j},children:[g+1," ",n.jsxs("span",{style:At.counterTotal,children:["/ ",d]})]}),n.jsxs("button",{onClick:w,disabled:g===d-1,style:{...At.navBtn,...g===d-1?At.navBtnDisabled:{}},children:["Next ",n.jsx(on,{size:18})]})]}),n.jsx("div",{style:At.dots,children:a.map((I,p)=>n.jsx("button",{onClick:()=>o(p),style:{...At.dot,...p===g?{background:j,transform:"scale(1.5)"}:{}},title:`${p+1}`},p))})]})]})}const At={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:22},chip:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipCount:{fontSize:11,fontWeight:700,opacity:.7},catDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},empty:{display:"flex",flexDirection:"column",alignItems:"center",gap:10,fontSize:13.5,color:"var(--text-3)",padding:"56px 12px",textAlign:"center",background:"var(--surface)",borderRadius:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},viewer:{display:"flex",flexDirection:"column",alignItems:"center"},card:{position:"relative",background:"var(--surface)",borderRadius:16,padding:"40px 32px 44px",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",width:"100%",minHeight:240,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",boxSizing:"border-box"},cardCat:{position:"absolute",top:16,left:16,fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:12,textTransform:"uppercase",letterSpacing:"0.04em"},favBtn:{position:"absolute",top:14,right:14,border:"none",background:"none",cursor:"pointer",padding:4,display:"grid",placeItems:"center"},cardText:{fontSize:21,lineHeight:1.55,margin:"14px 0 0",fontWeight:500,color:"var(--text)",fontFamily:"'Fraunces',Georgia,serif",maxWidth:560},navRow:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",maxWidth:420,marginTop:22},navBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},counter:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},counterTotal:{fontSize:13,fontWeight:600,color:"var(--text-3)"},dots:{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center",marginTop:20,maxWidth:480},dot:{width:7,height:7,borderRadius:"50%",border:"none",background:"var(--border)",cursor:"pointer",padding:0,transition:"transform 0.12s"}},xe={financial:{label:"Financial",leaf:"#C9A227",shape:"round"},academic:{label:"Academic",leaf:"#3A7CA5",shape:"pine"},relationship:{label:"Relationship",leaf:"#C2536B",shape:"round"},spiritual:{label:"Spiritual",leaf:"#8268B0",shape:"tall"},health:{label:"Health",leaf:"#4C9A6B",shape:"round"}},Hn="health";function zd({species:t=Hn,progress:e=1,withered:r=!1,size:o=200}){const s=Math.max(0,Math.min(1,e)),i=xe[t]||xe[Hn],l=r?"#8A7B63":"#7A5A3C",a=r?"#A99C84":i.leaf,d=r?"#8F8268":a,g=14+s*46,h=112-g,y=s>.14,f=y?8+s*30:0;return n.jsxs("svg",{viewBox:"0 0 120 120",width:o,height:o,style:{display:"block"},children:[n.jsx("ellipse",{cx:"60",cy:"114",rx:20+s*14,ry:"5",fill:"rgba(38,36,31,0.08)"}),!y&&n.jsxs("g",{transform:`translate(60 ${112-s*40})`,children:[n.jsx("path",{d:"M0 8 C0 8 0 -2 0 -6",stroke:"#4C9A6B",strokeWidth:"2.5",fill:"none"}),n.jsx("ellipse",{cx:"-5",cy:"-4",rx:"6",ry:"3.5",fill:"#4C9A6B",transform:"rotate(-30 -5 -4)"}),n.jsx("ellipse",{cx:"5",cy:"-4",rx:"6",ry:"3.5",fill:"#5BB07E",transform:"rotate(30 5 -4)"})]}),y&&n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:60-(2+s*2.5),y:h,width:(2+s*2.5)*2,height:g,rx:"2",fill:l}),i.shape==="pine"?n.jsxs(n.Fragment,{children:[n.jsx("polygon",{points:`60,${h-f*2.2} ${60-f},${h+4} ${60+f},${h+4}`,fill:a}),n.jsx("polygon",{points:`60,${h-f*3} ${60-f*.8},${h-f*.7} ${60+f*.8},${h-f*.7}`,fill:d})]}):i.shape==="tall"?n.jsxs(n.Fragment,{children:[n.jsx("ellipse",{cx:"60",cy:h-f*.3,rx:f*.78,ry:f*1.55,fill:a}),n.jsx("ellipse",{cx:"60",cy:h-f*.9,rx:f*.5,ry:f*1,fill:d,opacity:"0.9"})]}):n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"60",cy:h,r:f,fill:a}),n.jsx("circle",{cx:60-f*.7,cy:h+f*.3,r:f*.78,fill:a}),n.jsx("circle",{cx:60+f*.7,cy:h+f*.3,r:f*.78,fill:d}),n.jsx("circle",{cx:"60",cy:h-f*.5,r:f*.8,fill:d,opacity:"0.92"})]})]})]})}function ky({species:t}){return n.jsx(zd,{species:t,progress:1,size:56})}const wy=[{id:"day",label:"Day"},{id:"week",label:"Week"},{id:"month",label:"Month"},{id:"year",label:"Year"}],sr=t=>t>=60?`${Math.floor(t/60)}h ${t%60}m`:`${t}m`,jy=t=>{const e=t<12?"am":"pm",r=t%12===0?12:t%12;return`${String(r).padStart(2,"0")} ${e}`};function Sy(t){const e=t<=60?10:t<=120?20:t<=300?60:120,r=Math.max(60,Math.ceil((t||1)/e)*e),o=[];for(let s=0;s<=r;s+=e)o.push(s);return{max:r,ticks:o}}const ip=t=>{const e=new Date(t);return e.setHours(0,0,0,0),e},Cy=t=>{const e=ip(t),r=(e.getDay()+6)%7;return e.setDate(e.getDate()-r),e},Iy=t=>new Date(t.getFullYear(),t.getMonth(),1),zy=t=>new Date(t.getFullYear(),0,1);function Ty(t,e){if(t==="day"){const s=ip(e);return{start:s,end:new Date(+s+864e5),prev:new Date(+s-864e5),prev2:new Date(+s-2*864e5)}}if(t==="week"){const s=Cy(e);return{start:s,end:new Date(+s+7*864e5),prev:new Date(+s-7*864e5),prev2:new Date(+s-14*864e5)}}if(t==="month"){const s=Iy(e),i=e.getFullYear(),l=e.getMonth();return{start:s,end:new Date(i,l+1,1),prev:new Date(i,l-1,1),prev2:new Date(i,l-2,1)}}const r=e.getFullYear();return{start:zy(e),end:new Date(r+1,0,1),prev:new Date(r-1,0,1),prev2:new Date(r-2,0,1)}}function Ey({sessions:t=[],onBack:e}){const[r,o]=b.useState("day"),s=new Date,{start:i,end:l,prev:a,prev2:d}=Ty(r,s),g=J=>new Date(J.started_at||J.created_at),h=t.filter(J=>J.completed),y=(J,D,F)=>{const A=g(J);return A>=D&&A<F},f=(J,D)=>h.filter(F=>y(F,J,D)).reduce((F,A)=>F+(A.actual_min||0),0),w=h.filter(J=>y(J,i,l)),k=w.reduce((J,D)=>J+(D.actual_min||0),0),j=f(a,i),I=f(d,a),p=w.length,c=Array(24).fill(0);w.forEach(J=>{c[g(J).getHours()]+=J.actual_min||0});const u=Math.max(...c,0),v=Sy(u),S={};w.forEach(J=>{const D=xe[J.tree]?J.tree:Hn;S[D]=(S[D]||0)+(J.actual_min||0)});const z=Object.entries(S).map(([J,D])=>({name:xe[J].label,min:D,color:xe[J].leaf})).sort((J,D)=>D.min-J.min),L=j>0?Math.round((k-j)/j*100):k>0?100:0,H=L>0?ep:L<0?tp:gh,M=L>0?"#4C9A6B":L<0?"#C2536B":"#9A968C",$={day:"yesterday",week:"last week",month:"last month",year:"last year"}[r],C={day:"2 days ago",week:"2 weeks ago",month:"2 months ago",year:"2 years ago"}[r],B=54,x=22,G=2*Math.PI*B;let at=0;return n.jsxs("div",{style:dt.page,children:[n.jsxs("div",{style:dt.topbar,children:[n.jsxs("button",{onClick:e,style:dt.back,children:[n.jsx(Nb,{size:18})," Grove"]}),n.jsx("h1",{style:dt.h1,children:"Insights"}),n.jsx("div",{style:{width:76}})]}),n.jsx("div",{style:dt.rangeBar,children:wy.map(J=>n.jsx("button",{onClick:()=>o(J.id),style:{...dt.rangeBtn,...r===J.id?dt.rangeOn:{}},children:J.label},J.id))}),n.jsxs("div",{style:dt.headline,children:[n.jsxs("div",{style:dt.bigStat,children:[n.jsx("div",{style:dt.bigVal,children:sr(k)}),n.jsxs("div",{style:dt.bigLbl,children:["Focused this ",r]})]}),n.jsxs("div",{style:dt.bigStat,children:[n.jsx("div",{style:dt.bigVal,children:p}),n.jsx("div",{style:dt.bigLbl,children:"Trees"})]})]}),n.jsxs("div",{style:dt.card,children:[n.jsxs("div",{style:dt.cardHead,children:[n.jsxs("div",{style:dt.cardTitle,children:["Your forest this ",r]}),n.jsx("div",{style:dt.cardHint,children:"Each tree is a completed session — bigger means longer focus"})]}),n.jsx(Ry,{sessions:w}),n.jsxs("div",{style:dt.forestNumber,children:[p," ",p===1?"tree":"trees"," · ",sr(k)," focused"]})]}),n.jsx(ul,{title:"Focus distribution",hint:"Minutes focused at each time of day",children:u===0?n.jsx(ic,{}):n.jsx(Dy,{hours:c,axis:v})}),n.jsx(ul,{title:"Pillar distribution",hint:"How your focus splits across the five trees",children:z.length===0?n.jsx(ic,{}):n.jsxs("div",{style:dt.donutWrap,children:[n.jsxs("svg",{viewBox:"0 0 140 140",width:"150",height:"150",style:{flexShrink:0},children:[z.map(J=>{const D=J.min/(k||1)*G,F=n.jsx("circle",{cx:"70",cy:"70",r:B,fill:"none",stroke:J.color,strokeWidth:x,strokeDasharray:`${D} ${G-D}`,strokeDashoffset:-at,transform:"rotate(-90 70 70)"},J.name);return at+=D,F}),n.jsx("text",{x:"70",y:"66",textAnchor:"middle",style:dt.donutCenterTop,children:sr(k)}),n.jsx("text",{x:"70",y:"82",textAnchor:"middle",style:dt.donutCenterSub,children:"total"})]}),n.jsx("div",{style:dt.legend,children:z.map(J=>n.jsxs("div",{style:dt.legendRow,children:[n.jsx("span",{style:{...dt.legendDot,background:J.color}}),n.jsx("span",{style:dt.legendName,children:J.name}),n.jsxs("span",{style:dt.legendVal,children:[sr(J.min)," · ",Math.round(J.min/(k||1)*100),"%"]})]},J.name))})]})}),n.jsxs(ul,{title:"Focus trend",hint:`This ${r} vs the previous two`,children:[n.jsxs("div",{style:dt.trend3,children:[n.jsxs("div",{style:dt.trendCol,children:[n.jsx("div",{style:dt.trendVal,children:sr(k)}),n.jsxs("div",{style:dt.trendLbl,children:["This ",r]})]}),n.jsxs("div",{style:dt.trendCol,children:[n.jsx("div",{style:{...dt.trendVal,color:"var(--text-2)"},children:sr(j)}),n.jsx("div",{style:dt.trendLbl,children:$})]}),n.jsxs("div",{style:dt.trendCol,children:[n.jsx("div",{style:{...dt.trendVal,color:"var(--text-3)"},children:sr(I)}),n.jsx("div",{style:dt.trendLbl,children:C})]})]}),n.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:n.jsxs("div",{style:{...dt.trendBadge,color:M,background:M+"1A"},children:[n.jsx(H,{size:15})," ",L>0?"+":"",L,"% vs ",$]})}),n.jsx(Fy,{items:[{label:`This ${r}`,value:k,color:"#4C9A6B"},{label:$,value:j,color:"var(--text-3)"},{label:C,value:I,color:"var(--text-3)"}]})]})]})}const By=t=>t===0?"12a":t<12?`${t}a`:t===12?"12p":`${t-12}p`;function Dy({hours:t,axis:e}){return n.jsxs("div",{children:[n.jsxs("div",{style:dt.vcPlot,children:[e.ticks.map(r=>n.jsxs("div",{style:{...dt.vcGridRow,bottom:`${r/e.max*100}%`},children:[n.jsx("span",{style:dt.vcYLabel,children:r}),n.jsx("div",{style:dt.vcGridLine})]},r)),n.jsx("div",{style:dt.vcBars,children:t.map((r,o)=>n.jsx("div",{style:dt.vcCell,title:`${jy(o)} · ${r} min`,children:n.jsx("div",{style:{...dt.vcBar,height:r>0?`max(3px, ${r/e.max*100}%)`:0}})},o))})]}),n.jsx("div",{style:dt.vcXAxis,children:t.map((r,o)=>n.jsx("div",{style:dt.vcXCell,children:o%3===0?By(o):""},o))}),n.jsx("div",{style:dt.vcYTitle,children:"minutes focused, by hour of day"})]})}function Ry({sessions:t}){if(!t.length)return n.jsx("div",{style:dt.sceneEmpty,children:"No trees yet this period. 🌱"});const r=t.slice(0,80),o=t.length-r.length,s=i=>Math.round(Math.max(40,Math.min(88,40+(i||0)*.6)));return n.jsxs("div",{children:[n.jsx("div",{style:dt.scene,children:r.map(i=>n.jsx("div",{style:dt.sceneTree,title:`${i.label||"Focus"} · ${sr(i.actual_min||i.duration_min)}`,children:n.jsx(zd,{species:i.tree,progress:1,size:s(i.actual_min||i.duration_min)})},i.id))}),o>0&&n.jsxs("div",{style:dt.overflow,children:["+",o," more trees"]})]})}function ul({title:t,hint:e,children:r}){return n.jsxs("div",{style:dt.card,children:[n.jsxs("div",{style:dt.cardHead,children:[n.jsx("div",{style:dt.cardTitle,children:t}),e&&n.jsx("div",{style:dt.cardHint,children:e})]}),r]})}function ic(){return n.jsx("div",{style:dt.empty,children:"No focus sessions in this period yet. 🌱"})}function Fy({items:t}){const e=Math.max(1,...t.map(r=>r.value));return n.jsx("div",{style:dt.tbWrap,children:t.map(r=>n.jsxs("div",{style:dt.tbRow,children:[n.jsx("div",{style:dt.tbLbl,children:r.label}),n.jsx("div",{style:dt.tbTrack,children:n.jsx("div",{style:{...dt.tbBar,width:`${r.value/e*100}%`,background:r.color}})}),n.jsx("div",{style:dt.tbVal,children:sr(r.value)})]},r.label))})}const dt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"20px 16px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:720,margin:"0 auto"},topbar:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},back:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},h1:{fontSize:20,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},rangeBar:{display:"flex",gap:6,background:"var(--surface)",padding:5,borderRadius:12,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},rangeBtn:{flex:1,border:"none",background:"none",padding:"9px 0",borderRadius:8,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},rangeOn:{background:"var(--accent-strong)",color:"#fff"},headline:{display:"flex",gap:12,marginBottom:16},bigStat:{flex:1,background:"var(--surface)",borderRadius:14,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},bigVal:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em"},bigLbl:{fontSize:12,color:"var(--text-3)",marginTop:3,fontWeight:500},card:{background:"var(--surface)",borderRadius:16,padding:"18px 18px 20px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},cardHead:{marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardHint:{fontSize:12,color:"var(--text-3)",marginTop:2},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"24px 0"},scene:{display:"flex",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"center",gap:"0 2px",padding:"14px 8px 6px",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,minHeight:110,border:"1px solid var(--border)"},sceneTree:{lineHeight:0},sceneEmpty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"34px 0",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,border:"1px solid var(--border)"},overflow:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",marginTop:6,fontWeight:600},forestNumber:{textAlign:"center",marginTop:12,fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},vcPlot:{position:"relative",height:180,paddingLeft:30},vcGridRow:{position:"absolute",left:0,right:0,display:"flex",alignItems:"center",height:0},vcYLabel:{width:26,marginRight:4,textAlign:"right",fontSize:9,color:"var(--text-3)",fontWeight:600,flexShrink:0},vcGridLine:{flex:1,height:1,background:"#EEEBE4"},vcBars:{position:"absolute",left:30,right:0,top:0,bottom:0,display:"flex",alignItems:"flex-end",gap:1},vcCell:{flex:1,height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"center"},vcBar:{width:"72%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",transition:"height 0.3s"},vcXAxis:{display:"flex",marginLeft:30,marginTop:4},vcXCell:{flex:1,textAlign:"center",fontSize:8.5,color:"var(--text-3)",fontWeight:600,overflow:"hidden"},vcYTitle:{textAlign:"center",fontSize:9.5,color:"var(--text-3)",marginTop:6,letterSpacing:"0.06em",textTransform:"uppercase",fontWeight:600},donutWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap",justifyContent:"center"},donutCenterTop:{fontSize:16,fontWeight:800,fill:"var(--text)",fontFamily:"'Fraunces',Georgia,serif"},donutCenterSub:{fontSize:9,fill:"#9A968C",textTransform:"uppercase",letterSpacing:"0.08em"},legend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:11,height:11,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},legendVal:{fontSize:12,color:"var(--text-3)",fontWeight:600,flexShrink:0},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:56,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},Ay=[15,30,45,60,90],bl="anvil_grove_active",lc=t=>`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`,gi=t=>t>=60?`${Math.floor(t/60)}h ${t%60}m`:`${t}m`;function My(){const[t,e]=b.useState("timer"),[r,o]=b.useState("idle"),[s,i]=b.useState(15),[l,a]=b.useState(!1),[d,g]=b.useState(""),[h,y]=b.useState(Hn),[f,w]=b.useState(()=>localStorage.getItem("anvil_grove_deepfocus")!=="0"),[k,j]=b.useState(15*60),[I,p]=b.useState({sessions:[],stats:null}),c=b.useRef(null),u=b.useRef(null),v=b.useRef(!1),S=b.useCallback(async()=>{try{p(await O.getFocus())}catch{}},[]),z=b.useCallback(async(W,R)=>{if(!v.current){v.current=!0,localStorage.removeItem(bl);try{await O.createFocus({label:d.trim()||null,tree:h,duration_min:s,actual_min:R,completed:W,started_at:u.current,ended_at:new Date().toISOString()})}catch{}S()}},[d,h,s,S]),L=b.useCallback(()=>{if(r!=="running")return;const W=u.current?Math.round((Date.now()-new Date(u.current).getTime())/6e4):0;o("failed"),z(!1,Math.max(0,Math.min(s,W)))},[r,s,z]),H=b.useCallback(()=>{o("done"),j(0),z(!0,s)},[s,z]);b.useEffect(()=>{S();const W=JSON.parse(localStorage.getItem(bl)||"null");if(W&&W.endTime){const R=Math.round((W.endTime-Date.now())/1e3);i(W.duration),g(W.label||""),y(W.tree||"oak"),c.current=W.endTime,u.current=W.startedAt,R>0?(j(R),o("running")):(o("done"),v.current=!1,z(!0,W.duration))}},[]),b.useEffect(()=>{if(r!=="running")return;const W=()=>{const m=Math.round((c.current-Date.now())/1e3);if(m<=0){H();return}j(m)};W();const R=setInterval(W,250);return()=>clearInterval(R)},[r,H]),b.useEffect(()=>{if(r!=="running"||!f)return;const W=()=>{document.hidden&&L()};return document.addEventListener("visibilitychange",W),()=>document.removeEventListener("visibilitychange",W)},[r,f,L]),b.useEffect(()=>{const W=()=>{!document.hidden&&r!=="running"&&S()};window.addEventListener("focus",W),document.addEventListener("visibilitychange",W);const R=setInterval(W,6e4);return()=>{window.removeEventListener("focus",W),document.removeEventListener("visibilitychange",W),clearInterval(R)}},[S,r]);const M=()=>w(W=>{const R=!W;return localStorage.setItem("anvil_grove_deepfocus",R?"1":"0"),R}),$=()=>{v.current=!1,u.current=new Date().toISOString(),c.current=Date.now()+s*60*1e3,localStorage.setItem(bl,JSON.stringify({endTime:c.current,duration:s,label:d,tree:h,startedAt:u.current})),j(s*60),o("running")},C=()=>{o("idle"),j(s*60)},B=W=>{a(!1),i(W),j(W*60)},x=()=>{l||(a(!0),i(5),j(5*60))},G=W=>{if(a(!0),W===""){i(0),j(0);return}const R=Math.max(1,Math.min(600,parseInt(W,10)||0));i(R),j(R*60)},at=s*60,J=r==="running"?1-k/at:r==="done"?1:0,D=130,F=2*Math.PI*D,A=F*(1-(r==="running"?J:r==="done"?1:0)),V=I.stats;return t==="stats"?n.jsx(Ey,{sessions:I.sessions,onBack:()=>e("timer")}):n.jsxs("div",{style:ut.page,children:[n.jsxs("div",{style:ut.head,children:[n.jsx("div",{style:ut.eyebrow,children:"Anvil · Grove"}),n.jsx("h1",{style:ut.h1,children:"Grove"}),n.jsx("div",{style:ut.subhead,children:"Plant a tree, stay focused, grow your grove."}),n.jsxs("button",{onClick:()=>e("stats"),style:ut.insightsBtn,disabled:r==="running",children:[n.jsx(Xf,{size:15})," Insights"]})]}),V&&n.jsxs("div",{style:ut.statRow,children:[n.jsx(vs,{label:"Today",value:gi(V.today_minutes)}),n.jsx(vs,{label:"Trees",value:V.trees}),n.jsx(vs,{label:"Streak",value:`${V.streak}d`}),n.jsx(vs,{label:"Success",value:`${V.success_rate}%`})]}),n.jsxs("div",{style:ut.stage,children:[n.jsxs("div",{style:ut.ringWrap,children:[n.jsxs("svg",{width:"300",height:"300",viewBox:"0 0 300 300",style:{position:"absolute",inset:0},children:[n.jsx("circle",{cx:"150",cy:"150",r:D,fill:"none",stroke:"var(--border)",strokeWidth:"10"}),n.jsx("circle",{cx:"150",cy:"150",r:D,fill:"none",stroke:r==="failed"?"#C2536B":"#4C9A6B",strokeWidth:"10",strokeLinecap:"round",strokeDasharray:F,strokeDashoffset:A,transform:"rotate(-90 150 150)",style:{transition:"stroke-dashoffset 0.4s linear"}})]}),n.jsx("div",{style:ut.ringInner,children:n.jsx(zd,{species:h,progress:r==="idle"?0:J,withered:r==="failed",size:170})})]}),r==="idle"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:ut.timeBig,children:lc(s*60)}),n.jsxs("div",{style:ut.controls,children:[n.jsxs("div",{style:ut.chips,children:[Ay.map(W=>n.jsxs("button",{onClick:()=>B(W),style:{...ut.chip,...!l&&s===W?ut.chipOn:{}},children:[W,"m"]},W)),n.jsx("button",{onClick:x,style:{...ut.chip,...l?ut.chipOn:{}},children:"Custom"})]}),l&&n.jsxs("div",{style:ut.customRow,children:[n.jsx("input",{type:"number",min:"1",max:"600",inputMode:"numeric",autoFocus:!0,value:s||"",onChange:W=>G(W.target.value),placeholder:"e.g. 50",style:ut.customInput}),n.jsx("span",{style:ut.customUnit,children:"minutes"})]}),n.jsx("input",{value:d,onChange:W=>g(W.target.value),placeholder:"What are you focusing on? (optional)",style:ut.input,maxLength:60}),n.jsx("div",{style:ut.treePick,children:Object.entries(xe).map(([W,R])=>n.jsxs("button",{onClick:()=>y(W),title:R.label,style:{...ut.treeBtn,...h===W?{borderColor:R.leaf,background:R.leaf+"1A"}:{}},children:[n.jsx("span",{style:{...ut.treeDot,background:R.leaf}}),R.label]},W))}),n.jsxs("button",{onClick:M,style:ut.toggleRow,children:[n.jsxs("div",{style:{textAlign:"left"},children:[n.jsx("div",{style:ut.toggleTitle,children:"Deep Focus"}),n.jsx("div",{style:ut.toggleHint,children:f?"Leaving the app kills the tree":"Tree survives until you give up"})]}),n.jsx("div",{style:{...ut.switch,...f?ut.switchOn:{}},children:n.jsx("div",{style:{...ut.knob,...f?ut.knobOn:{}}})})]}),n.jsx("button",{onClick:$,disabled:s<1,style:{...ut.plantBtn,...s<1?{opacity:.5,cursor:"not-allowed"}:{}},children:"Plant tree"})]})]}),r==="running"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:ut.timeBig,children:lc(k)}),n.jsx("div",{style:ut.focusLabel,children:d.trim()||"Focusing…"}),n.jsx("div",{style:f?ut.warn:ut.warnSoft,children:f?"⚠ Deep Focus on — leaving this app will kill your tree.":"🌿 Relaxed mode — only Give up ends this session."}),n.jsx("button",{onClick:L,style:ut.giveUp,children:"Give up"})]}),r==="done"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:ut.resultTitle,children:["🌳 You grew a ",xe[h].label," tree!"]}),n.jsxs("div",{style:ut.resultSub,children:[gi(s)," of focus added to your grove."]}),n.jsx("button",{onClick:C,style:ut.plantBtn,children:"Plant another"})]}),r==="failed"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{...ut.resultTitle,color:"#C2536B"},children:"Your tree withered."}),n.jsx("div",{style:ut.resultSub,children:"You left before the timer finished. Try again?"}),n.jsx("button",{onClick:C,style:ut.plantBtn,children:"Try again"})]})]}),n.jsx(Wy,{sessions:I.sessions,onDelete:async W=>{await O.deleteFocus(W),S()}})]})}function vs({label:t,value:e}){return n.jsxs("div",{style:ut.stat,children:[n.jsx("div",{style:ut.statValue,children:e}),n.jsx("div",{style:ut.statLabel,children:t})]})}function Wy({sessions:t,onDelete:e}){const r=t.filter(l=>l.completed);if(r.length===0)return n.jsx("div",{style:ut.forestEmpty,children:"Your grove is empty. Plant your first tree above. 🌱"});const o={};for(const l of r){const a=(l.started_at||l.created_at||"").slice(0,10);(o[a]||(o[a]=[])).push(l)}const s=Object.keys(o).sort().reverse(),i=l=>{const a=new Date().toISOString().slice(0,10);return l===a?"Today":new Date(l+"T00:00").toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})};return n.jsxs("div",{style:ut.forest,children:[n.jsxs("div",{style:ut.forestHead,children:["Your Grove · ",r.length," trees"]}),s.map(l=>n.jsxs("div",{style:ut.daySection,children:[n.jsxs("div",{style:ut.dayLabel,children:[i(l)," · ",o[l].length]}),n.jsx("div",{style:ut.treeGrid,children:o[l].map(a=>n.jsxs("div",{style:ut.treeCard,title:`${a.label||"Focus"} · ${gi(a.actual_min)}`,onDoubleClick:()=>e(a.id),children:[n.jsx(ky,{species:a.tree}),n.jsx("div",{style:ut.treeCardMin,children:gi(a.actual_min||a.duration_min)}),a.label&&n.jsx("div",{style:ut.treeCardLabel,children:a.label})]},a.id))})]},l)),n.jsx("div",{style:ut.forestHint,children:"Double-tap a tree to remove it."})]})}const ut={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:820,margin:"0 auto"},head:{marginBottom:16,textAlign:"center"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},insightsBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginTop:12},statRow:{display:"flex",gap:10,justifyContent:"center",marginBottom:18,flexWrap:"wrap"},stat:{background:"var(--surface)",borderRadius:12,padding:"10px 18px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",minWidth:78},statValue:{fontSize:19,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},statLabel:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},stage:{background:"var(--surface)",borderRadius:18,padding:"28px 24px 32px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",display:"flex",flexDirection:"column",alignItems:"center",marginBottom:26},ringWrap:{position:"relative",width:300,height:300,display:"grid",placeItems:"center"},ringInner:{position:"relative",zIndex:1,display:"grid",placeItems:"center"},timeBig:{fontSize:40,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:6},focusLabel:{fontSize:14,color:"var(--text-2)",marginTop:2,fontWeight:500},warn:{fontSize:12,color:"#C2773B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},warnSoft:{fontSize:12,color:"#4C9A6B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},toggleRow:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:12,padding:"10px 14px",cursor:"pointer",fontFamily:"inherit",width:"100%"},toggleTitle:{fontSize:14,fontWeight:700,color:"var(--text)"},toggleHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},switch:{width:42,height:24,borderRadius:12,background:"var(--border)",flexShrink:0,padding:2,transition:"background 0.18s",boxSizing:"border-box"},switchOn:{background:"#4C9A6B"},knob:{width:20,height:20,borderRadius:"50%",background:"var(--surface)",boxShadow:"0 1px 2px rgba(0,0,0,0.2)",transform:"translateX(0)",transition:"transform 0.18s"},knobOn:{transform:"translateX(18px)"},controls:{width:"100%",maxWidth:380,display:"flex",flexDirection:"column",gap:14,marginTop:8},chips:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},chip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},customRow:{display:"flex",alignItems:"center",justifyContent:"center",gap:8},customInput:{border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:15,fontWeight:700,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center",width:100},customUnit:{fontSize:13,color:"var(--text-3)",fontWeight:600},input:{border:"1px solid var(--border)",borderRadius:10,padding:"11px 13px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center"},treePick:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},treeBtn:{display:"flex",alignItems:"center",gap:6,border:"1.5px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},treeDot:{width:10,height:10,borderRadius:"50%"},plantBtn:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},giveUp:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",padding:"11px 26px",borderRadius:11,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:18},resultTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginTop:14,textAlign:"center"},resultSub:{fontSize:13.5,color:"var(--text-3)",marginTop:6,marginBottom:18,textAlign:"center"},forest:{background:"var(--surface)",borderRadius:16,padding:"20px 22px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},forestHead:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},forestEmpty:{background:"var(--surface)",borderRadius:16,padding:"40px 20px",textAlign:"center",color:"var(--text-3)",fontSize:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},daySection:{marginBottom:16},dayLabel:{fontSize:12,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:8},treeGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(80px,1fr))",gap:8},treeCard:{display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 4px",borderRadius:10,cursor:"pointer",background:"var(--surface-2)"},treeCardMin:{fontSize:12,fontWeight:700,color:"#4C9A6B",marginTop:-4},treeCardLabel:{fontSize:10.5,color:"var(--text-3)",marginTop:2,textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:76},forestHint:{fontSize:11,color:"var(--text-3)",textAlign:"center",marginTop:6}},ja=[{code:"INR",symbol:"₹",locale:"en-IN",label:"Indian Rupee"},{code:"USD",symbol:"$",locale:"en-US",label:"US Dollar"},{code:"EUR",symbol:"€",locale:"de-DE",label:"Euro"},{code:"GBP",symbol:"£",locale:"en-GB",label:"British Pound"},{code:"JPY",symbol:"¥",locale:"ja-JP",label:"Japanese Yen"},{code:"AED",symbol:"د.إ",locale:"en-AE",label:"UAE Dirham"},{code:"AUD",symbol:"A$",locale:"en-AU",label:"Australian Dollar"},{code:"CAD",symbol:"C$",locale:"en-CA",label:"Canadian Dollar"},{code:"SGD",symbol:"S$",locale:"en-SG",label:"Singapore Dollar"}],ac="INR",lp="anvil_currency",Bi=t=>ja.find(e=>e.code===t)||ja[0];function Gn(){try{return localStorage.getItem(lp)||ac}catch{return ac}}function dc(t){try{localStorage.setItem(lp,t)}catch{}return window.dispatchEvent(new CustomEvent("anvil-currency",{detail:t})),t}function Sa(t,e){const r=Bi(e||Gn()),o=Math.round(Number(t)||0);return r.symbol+o.toLocaleString(r.locale)}function _y(t,e){const r=Bi(e||Gn()),o=Number(t)||0;return r.symbol+o.toLocaleString(r.locale,{minimumFractionDigits:2,maximumFractionDigits:2})}function Ly(t,e){const r=Bi(e||Gn()),o=Math.round(Number(t)||0),s=Math.abs(o);return r.code==="INR"?s>=1e7?r.symbol+(o/1e7).toFixed(s>=1e8?0:1)+"Cr":s>=1e5?r.symbol+(o/1e5).toFixed(s>=1e6?0:1)+"L":s>=1e3?r.symbol+(o/1e3).toFixed(s>=1e4?0:1)+"K":r.symbol+o:s>=1e9?r.symbol+(o/1e9).toFixed(1)+"B":s>=1e6?r.symbol+(o/1e6).toFixed(1)+"M":s>=1e3?r.symbol+(o/1e3).toFixed(1)+"K":r.symbol+o}function ap(){const[t,e]=b.useState(Gn());return b.useEffect(()=>{const r=o=>e(o.detail||Gn());return window.addEventListener("anvil-currency",r),()=>window.removeEventListener("anvil-currency",r)},[]),Bi(t)}const Py="grove_rates",$y="reward_rates",xs=Object.keys(xe),gc=[{id:"kickstart",label:"Kickstart"},{id:"golden",label:"Golden Book"},{id:"habits",label:"Habits"},{id:"quadrant",label:"Quadrant"},{id:"goals",label:"Goals"},{id:"grove",label:"Grove"},{id:"journal",label:"Journal"},{id:"revision",label:"Revision"},{id:"affirmations",label:"Affirmations"},{id:"skills",label:"Skills"},{id:"spiritual",label:"Spiritual"},{id:"mindscape",label:"Mindscape"},{id:"vault",label:"Vault"}],ks="#C9A227",pl="#3A7CA5",Ny=t=>{const e=Math.floor(t/60),r=Math.round(t%60);return e&&r?`${e}h ${r}m`:e?`${e}h`:`${r}m`},Oy=t=>{let e=Math.round((t||0)*60);const r=Math.floor(e/3600);e%=3600;const o=Math.floor(e/60);return e%=60,[r?`${r}h`:null,r||o?`${o}m`:null,`${e}s`].filter(Boolean).join(" ")},Hy=()=>{const t=new Date,e=r=>String(r).padStart(2,"0");return`${t.getFullYear()}-${e(t.getMonth()+1)}-${e(t.getDate())}T${e(t.getHours())}:${e(t.getMinutes())}`},Gy=t=>{if(!t)return"";const e=new Date(t.includes("T")?t:t+"T00:00:00");return isNaN(e)?t:e.toLocaleDateString("en-US",t.includes("T")?{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}:{month:"short",day:"numeric",year:"numeric"})},Ue=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,cc=t=>{const e=new Date(t);return e.setHours(0,0,0,0),e.setDate(e.getDate()-(e.getDay()+6)%7),e},ml=[{id:"all",label:"All time"},{id:"tweek",label:"This week"},{id:"tmonth",label:"This month"},{id:"pweek",label:"Last week"},{id:"pmonth",label:"Last month"},{id:"tyear",label:"This year"}];function Uy(t){const e=new Date;if(t==="tweek"){const r=cc(e),o=new Date(r);return o.setDate(r.getDate()+6),[Ue(r),Ue(o)]}if(t==="pweek"){const r=cc(e);r.setDate(r.getDate()-7);const o=new Date(r);return o.setDate(r.getDate()+6),[Ue(r),Ue(o)]}return t==="tmonth"?[Ue(new Date(e.getFullYear(),e.getMonth(),1)),Ue(new Date(e.getFullYear(),e.getMonth()+1,0))]:t==="pmonth"?[Ue(new Date(e.getFullYear(),e.getMonth()-1,1)),Ue(new Date(e.getFullYear(),e.getMonth(),0))]:t==="tyear"?[Ue(new Date(e.getFullYear(),0,1)),Ue(new Date(e.getFullYear(),11,31))]:["0000-01-01","9999-12-31"]}function Vy(){const t=ap(),e=P=>_y(P,t.code),[r,o]=b.useState([]),[s,i]=b.useState([]),[l,a]=b.useState([]),[d,g]=b.useState([]),[h,y]=b.useState({}),[f,w]=b.useState({}),[k,j]=b.useState(!1),[I,p]=b.useState({}),[c,u]=b.useState({}),[v,S]=b.useState(!1),[z,L]=b.useState(!1),[H,M]=b.useState(!1),[$,C]=b.useState(""),[B,x]=b.useState("all"),G=()=>O.getPayouts().then(g).catch(()=>{}),at=()=>O.getRewardRates().then(a).catch(()=>{});b.useEffect(()=>{(async()=>{try{const[P,gt,Ft,Ie,He,er]=await Promise.all([O.getFocus(),O.getScreenTime(),O.getRewardRates(),O.getPayouts(),O.getSetting(Py),O.getSetting($y)]);o(P.sessions||[]),i(Array.isArray(gt)?gt:[]),a(Ft||[]),g(Ie||[]),y((He==null?void 0:He.value)||{}),w((er==null?void 0:er.value)||{})}catch{}j(!0)})()},[]);const J={};l.forEach(P=>{var gt;(J[gt=`${P.kind}:${P.rkey}`]||(J[gt]=[])).push({eff:P.eff_date,rate:P.rate})}),Object.values(J).forEach(P=>P.sort((gt,Ft)=>gt.eff.localeCompare(Ft.eff)));const D=(P,gt,Ft)=>{const Ie=J[`${P}:${gt}`];if(Ie){let He=null;for(const er of Ie)if(er.eff<=Ft)He=er.rate;else break;if(He!==null)return He}return(P==="focus"?h[gt]:f[gt])||0},F=(P,gt)=>{const Ft=J[`${P}:${gt}`];return Ft&&Ft.length?Ft[Ft.length-1].rate:(P==="focus"?h[gt]:f[gt])??""},[A,V]=Uy(B);let W=0,R=0;r.filter(P=>P.completed).forEach(P=>{const gt=(P.started_at||P.created_at||"").slice(0,10),Ft=xe[P.tree]?P.tree:Hn;W+=(P.actual_min||0)/60*D("focus",Ft,gt)}),s.forEach(P=>{P.screen!=="worth"&&(R+=P.seconds/60*D("usage",P.screen,P.date))});const m=W+R,N=d.reduce((P,gt)=>P+gt.amount,0),ot=Math.max(0,m-N),et={};xs.forEach(P=>et[P]={minutes:0,earned:0}),r.filter(P=>P.completed).forEach(P=>{const gt=(P.started_at||P.created_at||"").slice(0,10);if(gt<A||gt>V)return;const Ft=xe[P.tree]?P.tree:Hn,Ie=P.actual_min||0;et[Ft].minutes+=Ie,et[Ft].earned+=Ie/60*D("focus",Ft,gt)});const ft=xs.reduce((P,gt)=>P+et[gt].earned,0),It={};s.forEach(P=>{var Ft;if(P.screen==="worth"||P.date<A||P.date>V)return;const gt=It[Ft=P.screen]||(It[Ft]={seconds:0,earned:0});gt.seconds+=P.seconds,gt.earned+=P.seconds/60*D("usage",P.screen,P.date)});const ht=Object.values(It).reduce((P,gt)=>P+gt.earned,0),jt=ft+ht,Q=jt>0?ft/jt*100:0,mt=jt>0?ht/jt*100:0,bt=xs.map(P=>({p:P,...et[P],...xe[P]})).filter(P=>P.minutes>0).sort((P,gt)=>gt.earned-P.earned),Tt=gc.map(P=>({...P,...It[P.id]||{seconds:0,earned:0}})).filter(P=>P.seconds>0).sort((P,gt)=>gt.earned-P.earned),Qt=(P,gt)=>{O.setRewardRate({kind:"focus",rkey:P,rate:Math.max(0,parseFloat(gt)||0)}).then(at).catch(()=>{})},tr=(P,gt)=>{O.setRewardRate({kind:"usage",rkey:P,rate:Math.max(0,parseFloat(gt)||0)}).then(at).catch(()=>{})},Oe=async P=>{const gt=Math.min(parseFloat(P)||0,ot);gt<=0||(await O.createPayout({amount:gt,note:"",date:Hy()}),M(!1),C(""),G())},an=async P=>{await O.deletePayout(P),G()};return n.jsxs("div",{style:X.page,children:[n.jsxs("div",{style:X.head,children:[n.jsx("div",{style:X.eyebrow,children:"Anvil · Rewards"}),n.jsx("h1",{style:X.h1,children:"Rewards"}),n.jsx("div",{style:X.subhead,children:"Your earned rewards from focus and app usage."})]}),n.jsxs("div",{style:X.hero,children:[n.jsx("div",{style:X.heroLabel,children:"Final reward · pending"}),n.jsx("div",{style:X.heroVal,children:e(ot)}),n.jsxs("div",{style:X.heroSub,children:["Earned ",e(m)," · Taken ",e(N)]}),H?n.jsxs("div",{style:X.partialRow,children:[n.jsxs("div",{style:X.partialInputWrap,children:[n.jsx("span",{style:X.partialSign,children:t.symbol}),n.jsx("input",{type:"number",min:"0",step:"0.01",autoFocus:!0,placeholder:ot.toFixed(2),value:$,onChange:P=>C(P.target.value),style:X.partialInput})]}),n.jsx("button",{onClick:()=>Oe($),style:X.heroBtnSolid,children:"Confirm"}),n.jsx("button",{onClick:()=>{M(!1),C("")},style:X.heroBtnGhost,children:"Cancel"})]}):n.jsxs("div",{style:X.heroBtns,children:[n.jsx("button",{onClick:()=>M(!0),disabled:ot<=0,style:{...X.heroBtnGhost,...ot<=0?X.btnDisabled:{}},children:"Take partial"}),n.jsx("button",{onClick:()=>Oe(ot),disabled:ot<=0,style:{...X.heroBtnSolid,...ot<=0?X.btnDisabled:{}},children:"Take all pending"})]})]}),n.jsxs("div",{style:X.statRow,children:[n.jsxs("div",{style:X.statCard,children:[n.jsx("div",{style:X.statVal,children:e(N)}),n.jsx("div",{style:X.statLbl,children:"Total taken"})]}),n.jsxs("div",{style:X.statCard,children:[n.jsx("div",{style:{...X.statVal,color:ks},children:e(ot)}),n.jsx("div",{style:X.statLbl,children:"Total pending"})]})]}),n.jsx("div",{style:X.periodRow,children:ml.map(P=>n.jsx("button",{onClick:()=>x(P.id),style:{...X.periodChip,...B===P.id?X.periodChipOn:{}},children:P.label},P.id))}),jt>0?n.jsxs("div",{style:X.card,children:[n.jsxs("div",{style:X.cardTitleRow,children:[n.jsx("span",{style:X.cardTitle,children:"Reward split"}),n.jsxs("span",{style:X.periodTotal,children:[e(jt)," · ",ml.find(P=>P.id===B).label]})]}),n.jsxs("div",{style:X.splitTrack,children:[n.jsx("div",{style:{width:`${Q}%`,background:ks,height:"100%"}}),n.jsx("div",{style:{width:`${mt}%`,background:pl,height:"100%"}})]}),n.jsxs("div",{style:X.legendRow,children:[n.jsxs("span",{style:X.legendItem,children:[n.jsx("span",{style:{...X.legendDot,background:ks}})," Focus ",Math.round(Q),"% · ",e(ft)]}),n.jsxs("span",{style:X.legendItem,children:[n.jsx("span",{style:{...X.legendDot,background:pl}})," Usage ",Math.round(mt),"% · ",e(ht)]})]})]}):n.jsxs("div",{style:{...X.card,...X.muted},children:["No rewards earned in ",ml.find(P=>P.id===B).label.toLowerCase(),"."]}),n.jsxs("div",{style:X.card,children:[n.jsxs("button",{onClick:()=>S(P=>!P),style:X.collapseBtn,children:[n.jsxs("span",{style:{...X.cardTitle,color:ks},children:["Focus Rewards · ",e(ft)]}),n.jsx("span",{style:X.collapseHint,children:v?"Hide rates":"Set rates"})]}),v&&n.jsx("div",{style:{...X.rateGrid,marginTop:12},children:xs.map(P=>n.jsxs("div",{style:X.rateRow,children:[n.jsx("span",{style:{...X.dot,background:xe[P].leaf}}),n.jsx("span",{style:X.rateName,children:xe[P].label}),n.jsxs("div",{style:X.rateInputWrap,children:[n.jsx("span",{style:X.unitSign,children:t.symbol}),n.jsx("input",{type:"number",min:"0",step:"0.5",inputMode:"decimal",placeholder:"0",value:I[P]!==void 0?I[P]:F("focus",P),onChange:gt=>p(Ft=>({...Ft,[P]:gt.target.value})),onBlur:gt=>Qt(P,gt.target.value),style:X.rateInput}),n.jsx("span",{style:X.unit,children:"/hr"})]})]},P))}),bt.length>0?n.jsx("div",{style:{...X.rows,marginTop:14},children:bt.map(P=>n.jsxs("div",{style:X.row,children:[n.jsx("span",{style:{...X.dot,background:P.leaf}}),n.jsx("span",{style:X.rowName,children:P.label}),n.jsx("span",{style:X.rowMeta,children:Ny(Math.round(P.minutes))}),n.jsx("span",{style:X.rowAmt,children:e(P.earned)})]},P.p))}):n.jsx("div",{style:X.muted,children:"No focus sessions yet."})]}),n.jsxs("div",{style:X.card,children:[n.jsxs("button",{onClick:()=>L(P=>!P),style:X.collapseBtn,children:[n.jsxs("span",{style:{...X.cardTitle,color:pl},children:["Usage Rewards · ",e(ht)]}),n.jsx("span",{style:X.collapseHint,children:z?"Hide rates":"Set rates"})]}),z&&n.jsx("div",{style:{...X.rateGrid,marginTop:12},children:gc.map(P=>n.jsxs("div",{style:X.rateRow,children:[n.jsx("span",{style:X.rateName,children:P.label}),n.jsxs("div",{style:X.rateInputWrap,children:[n.jsx("span",{style:X.unitSign,children:t.symbol}),n.jsx("input",{type:"number",min:"0",step:"0.1",inputMode:"decimal",placeholder:"0",value:c[P.id]!==void 0?c[P.id]:F("usage",P.id),onChange:gt=>u(Ft=>({...Ft,[P.id]:gt.target.value})),onBlur:gt=>tr(P.id,gt.target.value),style:X.rateInput}),n.jsx("span",{style:X.unit,children:"/min"})]})]},P.id))}),Tt.length>0?n.jsx("div",{style:{...X.rows,marginTop:14},children:Tt.map(P=>n.jsxs("div",{style:X.row,children:[n.jsx("span",{style:X.rowName,children:P.label}),n.jsx("span",{style:X.rowMeta,children:Oy(P.seconds/60)}),n.jsx("span",{style:X.rowAmt,children:e(P.earned)})]},P.id))}):n.jsx("div",{style:X.muted,children:k?"No usage tracked yet.":"Loading…"})]}),d.length>0&&n.jsxs("div",{style:X.card,children:[n.jsx("div",{style:X.cardTitle,children:"Rewards taken"}),n.jsxs("div",{style:X.rows,children:[d.map(P=>n.jsxs("div",{style:X.row,children:[n.jsx("span",{style:X.rowMeta,children:Gy(P.date)}),n.jsx("span",{style:{...X.rowName,textAlign:"right"}}),n.jsx("span",{style:X.rowAmt,children:e(P.amount)}),n.jsx("button",{onClick:()=>an(P.id),style:X.del,children:"×"})]},P.id)),n.jsxs("div",{style:X.totalRow,children:[n.jsx("span",{children:"Total taken"}),n.jsx("span",{style:X.totalVal,children:e(N)})]})]})]}),n.jsx("div",{style:X.note,children:"Set rates only affect time from today onward — past time keeps the rate it was earned at."})]})}const X={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},hero:{background:"linear-gradient(135deg,var(--accent-strong),var(--accent-2))",borderRadius:16,padding:"22px 24px",color:"#fff",marginBottom:14,textAlign:"center"},heroLabel:{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",opacity:.85},heroVal:{fontSize:44,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,lineHeight:1.05},heroSub:{fontSize:12.5,opacity:.9,marginTop:6},heroBtns:{display:"flex",gap:10,marginTop:16,justifyContent:"center"},heroBtnSolid:{border:"none",background:"#fff",color:"var(--accent-strong)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},heroBtnGhost:{border:"1px solid rgba(255,255,255,0.6)",background:"transparent",color:"#fff",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},btnDisabled:{opacity:.45,cursor:"not-allowed"},partialRow:{display:"flex",gap:8,marginTop:16,justifyContent:"center",alignItems:"center",flexWrap:"wrap"},partialInputWrap:{display:"flex",alignItems:"center",gap:4,background:"#fff",borderRadius:10,padding:"6px 12px"},partialSign:{fontSize:15,color:"var(--accent-strong)",fontWeight:700},partialInput:{border:"none",background:"none",outline:"none",width:90,fontSize:16,fontWeight:700,fontFamily:"inherit",color:"#26241F"},statRow:{display:"flex",gap:10,marginBottom:14},statCard:{flex:1,background:"var(--surface)",borderRadius:12,padding:"12px 14px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},statVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},card:{background:"var(--surface)",borderRadius:16,padding:"18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:10,flexWrap:"wrap"},periodTotal:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text-2)"},periodRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},periodChip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},periodChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},collapseBtn:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"inherit"},collapseHint:{fontSize:12,fontWeight:700,color:"var(--accent)"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"12px 0"},splitTrack:{display:"flex",height:16,borderRadius:8,overflow:"hidden",marginTop:12,marginBottom:12,border:"1px solid var(--border)"},legendRow:{display:"flex",gap:16,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:600,color:"var(--text-2)"},legendDot:{width:10,height:10,borderRadius:3},rows:{display:"flex",flexDirection:"column",gap:2},row:{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:"1px solid var(--border)"},dot:{width:10,height:10,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:13.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},rowMeta:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,flexShrink:0},rowAmt:{fontSize:13.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",flexShrink:0,minWidth:64,textAlign:"right"},del:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",fontSize:16,lineHeight:1,padding:"0 2px",flexShrink:0},totalRow:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:10,marginTop:4,fontSize:14,fontWeight:700},totalVal:{fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},rateGrid:{display:"flex",flexDirection:"column",gap:10},rateRow:{display:"flex",alignItems:"center",gap:8},rateName:{flex:1,fontSize:14,fontWeight:600},rateInputWrap:{display:"flex",alignItems:"center",gap:3,border:"1px solid var(--border)",borderRadius:9,padding:"4px 10px",background:"var(--surface-2)"},unitSign:{fontSize:14,color:"var(--text-2)",fontWeight:600},rateInput:{border:"none",background:"none",outline:"none",width:64,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},unit:{fontSize:12,color:"var(--text-3)",fontWeight:600},note:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",fontStyle:"italic",marginTop:4}};function Yy({onAuthed:t}){const[e,r]=b.useState("login"),[o,s]=b.useState(""),[i,l]=b.useState(""),[a,d]=b.useState(""),[g,h]=b.useState(""),[y,f]=b.useState(!1),w=e==="register",k=async j=>{if(j.preventDefault(),h(""),!i.trim()||!a){h("Email and password are required.");return}if(w&&a.length<6){h("Password must be at least 6 characters.");return}f(!0);try{const I=w?await O.register({name:o,email:i,password:a}):await O.login({email:i,password:a});Ih(I.token),t(I.user)}catch(I){h(I.message||"Something went wrong.")}finally{f(!1)}};return n.jsx("div",{style:Gt.page,children:n.jsxs("form",{style:Gt.card,onSubmit:k,children:[n.jsxs("div",{style:Gt.brand,children:[n.jsx("div",{style:Gt.logo,children:"B"}),n.jsx("span",{style:Gt.brandName,children:"Anvil"})]}),n.jsx("h1",{style:Gt.title,children:w?"Create your account":"Welcome back"}),n.jsx("p",{style:Gt.sub,children:w?"Start forging your days.":"Sign in to continue."}),w&&n.jsxs("label",{style:Gt.field,children:[n.jsx("span",{style:Gt.label,children:"Name"}),n.jsx("input",{value:o,onChange:j=>s(j.target.value),placeholder:"Your name",style:Gt.input,autoFocus:!0})]}),n.jsxs("label",{style:Gt.field,children:[n.jsx("span",{style:Gt.label,children:"Email"}),n.jsx("input",{type:"email",value:i,onChange:j=>l(j.target.value),placeholder:"you@example.com",style:Gt.input,autoFocus:!w})]}),n.jsxs("label",{style:Gt.field,children:[n.jsx("span",{style:Gt.label,children:"Password"}),n.jsx("input",{type:"password",value:a,onChange:j=>d(j.target.value),placeholder:"••••••••",style:Gt.input})]}),g&&n.jsx("div",{style:Gt.error,children:g}),n.jsx("button",{type:"submit",disabled:y,style:{...Gt.submit,...y?{opacity:.6}:{}},children:y?"Please wait…":w?"Create account":"Sign in"}),n.jsxs("div",{style:Gt.switch,children:[w?"Already have an account?":"New here?"," ",n.jsx("button",{type:"button",onClick:()=>{r(w?"login":"register"),h("")},style:Gt.link,children:w?"Sign in":"Create one"})]})]})})}const Gt={page:{minHeight:"100vh",display:"grid",placeItems:"center",background:"var(--bg)",fontFamily:"'Inter',system-ui,sans-serif",padding:20},card:{width:"100%",maxWidth:380,background:"var(--surface)",borderRadius:16,padding:"32px 28px",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",display:"flex",flexDirection:"column"},brand:{display:"flex",alignItems:"center",gap:9,marginBottom:20},logo:{width:32,height:32,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},brandName:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},title:{fontSize:22,fontWeight:700,margin:"0 0 4px",fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},sub:{fontSize:13.5,color:"var(--text-3)",margin:"0 0 22px"},field:{display:"flex",flexDirection:"column",gap:5,marginBottom:14},label:{fontSize:12,fontWeight:600,color:"var(--text-2)"},input:{border:"1px solid var(--border)",borderRadius:9,padding:"11px 12px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)"},error:{background:"rgba(194,83,107,0.10)",color:"#C2536B",fontSize:13,padding:"9px 12px",borderRadius:8,marginBottom:14,fontWeight:500},submit:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"12px",borderRadius:10,fontSize:14.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},switch:{fontSize:13,color:"var(--text-2)",textAlign:"center",marginTop:18},link:{border:"none",background:"none",color:"#3A7CA5",fontWeight:700,cursor:"pointer",fontFamily:"inherit",fontSize:13,padding:0}},uc=["Salary","Stocks","Business","Interest","Rent","Gift","Other"],bc=["Bills","EMI","Rent","Food","Shopping","Transport","Health","Entertainment","Education","Other"],Qy={Salary:"#4C9A6B",Stocks:"#3A7CA5",Business:"#C9A227",Interest:"#8268B0",Gift:"#C2773B",Bills:"#C2536B",EMI:"#A23E57",Food:"#E08E45",Shopping:"#8268B0",Transport:"#3A7CA5",Health:"#4C9A6B",Entertainment:"#C9A227",Education:"#5B7C99",Rent:"#5B8C5A",Other:"#9A968C"},dp=t=>Qy[t]||"#9A968C",Ke="#3E9E6B",Xe="#D1556E",co=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,So=co(new Date),Ky=[{id:"month",label:"This month"},{id:"last",label:"Last month"},{id:"year",label:"This year"},{id:"all",label:"All time"}];function Xy(t){const e=new Date;return t==="month"?[co(new Date(e.getFullYear(),e.getMonth(),1)),So]:t==="last"?[co(new Date(e.getFullYear(),e.getMonth()-1,1)),co(new Date(e.getFullYear(),e.getMonth(),0))]:t==="year"?[co(new Date(e.getFullYear(),0,1)),So]:["0000-01-01","9999-12-31"]}function Jy(){const t=ap(),[e,r]=b.useState("overview"),[o,s]=b.useState([]),[i,l]=b.useState(!1),a=b.useCallback(()=>O.getTxns().then(g=>{s(g),l(!0)}).catch(()=>l(!0)),[]);b.useEffect(()=>{a()},[a]);const d=g=>Sa(g,t.code);return n.jsxs("div",{style:T.page,children:[n.jsxs("div",{style:T.head,children:[n.jsx("div",{style:T.eyebrow,children:"Anvil · Vault"}),n.jsx("h1",{style:T.h1,children:"Vault"}),n.jsx("div",{style:T.subhead,children:"Your money — what comes in, what goes out, and where it's headed."})]}),n.jsx("div",{style:T.tabs,children:[["overview","Overview",Jf],["money","Money",jh],["calc","Calculators",Kf]].map(([g,h,y])=>n.jsxs("button",{onClick:()=>r(g),style:{...T.tab,...e===g?T.tabOn:{}},children:[n.jsx(y,{size:15})," ",h]},g))}),e==="overview"&&n.jsx(qy,{txns:o,loaded:i,money:d,cur:t}),e==="money"&&n.jsx(t0,{txns:o,reload:a,money:d}),e==="calc"&&n.jsx(e0,{money:d,cur:t})]})}function qy({txns:t,loaded:e,money:r,cur:o}){const[s,i]=b.useState("month"),[l,a]=Xy(s),d=b.useMemo(()=>t.filter(j=>j.date>=l&&j.date<=a),[t,l,a]),g=d.filter(j=>j.kind==="income"),h=d.filter(j=>j.kind==="expense"),y=g.reduce((j,I)=>j+I.amount,0),f=h.reduce((j,I)=>j+I.amount,0),w=y-f,k=j=>{const I={};return j.forEach(p=>{I[p.category]=(I[p.category]||0)+p.amount}),Object.entries(I).map(([p,c])=>({category:p,amount:c})).sort((p,c)=>c.amount-p.amount)};return n.jsxs(n.Fragment,{children:[n.jsx("div",{style:T.presetRow,children:Ky.map(j=>n.jsx("button",{onClick:()=>i(j.id),style:{...T.preset,...s===j.id?T.presetOn:{}},children:j.label},j.id))}),n.jsxs("div",{style:T.sumGrid,children:[n.jsx(fl,{icon:n.jsx(ba,{size:16}),label:"Income",value:r(y),color:Ke}),n.jsx(fl,{icon:n.jsx(pa,{size:16}),label:"Expenses",value:r(f),color:Xe}),n.jsx(fl,{icon:w>=0?n.jsx(ep,{size:16}):n.jsx(tp,{size:16}),label:"Net savings",value:r(w),color:w>=0?Ke:Xe})]}),e?d.length===0?n.jsx("div",{style:T.card,children:n.jsxs("div",{style:T.muted,children:["No transactions in this period. Add some under the ",n.jsx("b",{children:"Money"})," tab."]})}):n.jsxs(n.Fragment,{children:[n.jsx(Zy,{totalIn:y,totalOut:f}),n.jsxs("div",{style:T.twoCol,children:[n.jsx(pc,{title:"Incoming",subtitle:"Where your money comes from",total:y,data:k(g),accent:Ke,cur:o}),n.jsx(pc,{title:"Outgoing",subtitle:"Where your money goes",total:f,data:k(h),accent:Xe,cur:o})]})]}):n.jsx("div",{style:T.muted,children:"Loading…"})]})}function fl({icon:t,label:e,value:r,color:o}){return n.jsxs("div",{style:T.sumCard,children:[n.jsx("div",{style:{...T.sumIcon,color:o,background:o+"1A"},children:t}),n.jsx("div",{style:T.sumLabel,children:e}),n.jsx("div",{style:{...T.sumVal,color:o},children:r})]})}function pc({title:t,subtitle:e,total:r,data:o,accent:s,cur:i}){let l=0;const a=o.map(g=>{const h=r>0?l/r*100:0;l+=g.amount;const y=r>0?l/r*100:0;return{...g,start:h,end:y,color:dp(g.category),pct:r>0?g.amount/r*100:0}}),d=a.length?`conic-gradient(${a.map(g=>`${g.color} ${g.start}% ${g.end}%`).join(", ")})`:"var(--surface-2)";return n.jsxs("div",{style:T.card,children:[n.jsxs("div",{style:T.cardTitleRow,children:[n.jsxs("div",{children:[n.jsx("div",{style:{...T.cardTitle,color:s},children:t}),n.jsx("div",{style:T.cardSub,children:e})]}),n.jsx("div",{style:{...T.cardTotal,color:s},children:Sa(r,i.code)})]}),o.length===0?n.jsx("div",{style:T.muted,children:"Nothing logged."}):n.jsxs("div",{style:T.pieWrap,children:[n.jsxs("div",{style:T.pieChart,children:[n.jsx("div",{style:{...T.pieDisc,background:d}}),n.jsxs("div",{style:T.pieHole,children:[n.jsx("span",{style:T.pieHoleVal,children:Ly(r,i.code)}),n.jsx("span",{style:T.pieHoleLbl,children:"total"})]})]}),n.jsx("div",{style:T.pieLegend,children:a.map(g=>n.jsxs("div",{style:T.legendRow,children:[n.jsx("span",{style:{...T.dot,background:g.color}}),n.jsx("span",{style:T.legendName,children:g.category}),n.jsxs("span",{style:T.legendPct,children:[Math.round(g.pct),"%"]}),n.jsx("span",{style:T.legendAmt,children:Sa(g.amount,i.code)})]},g.category))})]})]})}function Zy({totalIn:t,totalOut:e}){const r=t-e,o=t>0?r/t:0,s=t===0?0:Math.max(0,Math.min(100,Math.round(50+o*100)));let i,l,a;t===0?(i="No income logged",l="#9A968C",a="Add your income to see your financial health."):o>=.3?(i="Excellent",l="#3E9E6B",a="You're saving 30%+ of income — keep investing the surplus."):o>=.2?(i="Healthy",l="#4C9A6B",a="Solid savings rate. Consider automating a SIP with the surplus."):o>=.1?(i="Okay",l="#C9A227",a="Decent, but aim for 20%+. Trim your biggest expense category."):o>=0?(i="Tight",l="#C2773B",a="You're saving very little. Review recurring bills and EMIs."):(i="Overspending",l="#D1556E",a="You're spending more than you earn. Cut back to avoid debt.");const d=t>0?Math.min(100,Math.round(e/t*100)):0;return n.jsxs("div",{style:T.card,children:[n.jsxs("div",{style:T.cardTitleRow,children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx(oh,{size:18,color:l}),n.jsxs("div",{children:[n.jsx("div",{style:T.cardTitle,children:"Financial health"}),n.jsx("div",{style:T.cardSub,children:"Based on your savings rate this period"})]})]}),n.jsxs("div",{style:{textAlign:"right"},children:[n.jsx("div",{style:{...T.healthScore,color:l},children:t===0?"—":s}),n.jsx("div",{style:{...T.healthStatus,color:l},children:i})]})]}),n.jsx("div",{style:T.gaugeTrack,children:n.jsx("div",{style:{...T.gaugeFill,width:`${t===0?0:s}%`,background:l}})}),n.jsxs("div",{style:T.healthStats,children:[n.jsxs("div",{style:T.healthStat,children:[n.jsxs("span",{style:T.healthStatV,children:[t>0?Math.round(o*100):0,"%"]}),n.jsx("span",{style:T.healthStatL,children:"Savings rate"})]}),n.jsxs("div",{style:T.healthStat,children:[n.jsxs("span",{style:T.healthStatV,children:[d,"%"]}),n.jsx("span",{style:T.healthStatL,children:"of income spent"})]})]}),n.jsx("div",{style:{...T.tip,borderColor:l+"55",background:l+"12",color:l},children:a})]})}function t0({txns:t,reload:e,money:r}){const[o,s]=b.useState("expense"),[i,l]=b.useState(""),[a,d]=b.useState("Bills"),[g,h]=b.useState(So),[y,f]=b.useState(""),[w,k]=b.useState(null),{deleteItem:j,toasts:I,handleUndo:p,handleDismiss:c}=sn(O.deleteTxn,O.restoreTxn,e),u=o==="income"?uc:bc,v=B=>{s(B),d(B==="income"?"Salary":"Bills")},S=async()=>{const B=parseFloat(i);!B||B<=0||(await O.createTxn({kind:o,category:a,amount:B,note:y.trim(),date:g}),l(""),f(""),e())},z=B=>k({id:B.id,kind:B.kind,amount:String(B.amount),category:B.category,date:B.date,note:B.note||""}),L=(w==null?void 0:w.kind)==="income"?uc:bc,H=B=>k(x=>({...x,kind:B,category:L.includes(x.category)?x.category:B==="income"?"Salary":"Bills"})),M=async()=>{const B=parseFloat(w.amount);!B||B<=0||(await O.updateTxn(w.id,{kind:w.kind,category:w.category,amount:B,note:w.note.trim(),date:w.date}),k(null),e())},$=b.useMemo(()=>{const B={};return t.forEach(x=>{(B[x.date]=B[x.date]||[]).push(x)}),Object.entries(B).sort((x,G)=>G[0].localeCompare(x[0]))},[t]),C=B=>new Date(B+"T00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:T.card,children:[n.jsx("div",{style:T.cardTitle,children:"Add transaction"}),n.jsxs("div",{style:T.kindToggle,children:[n.jsxs("button",{onClick:()=>v("expense"),style:{...T.kindBtn,...o==="expense"?{background:Xe,color:"#fff",borderColor:Xe}:{}},children:[n.jsx(pa,{size:15})," Expense"]}),n.jsxs("button",{onClick:()=>v("income"),style:{...T.kindBtn,...o==="income"?{background:Ke,color:"#fff",borderColor:Ke}:{}},children:[n.jsx(ba,{size:15})," Income"]})]}),n.jsxs("div",{style:T.formGrid,children:[n.jsx("input",{type:"number",inputMode:"decimal",placeholder:"Amount",value:i,onChange:B=>l(B.target.value),onKeyDown:B=>B.key==="Enter"&&S(),style:T.input,autoFocus:!0}),n.jsx("select",{value:a,onChange:B=>d(B.target.value),style:T.input,children:u.map(B=>n.jsx("option",{children:B},B))}),n.jsx("input",{type:"date",value:g,max:So,onChange:B=>h(B.target.value),style:T.input})]}),n.jsx("input",{placeholder:"Note (optional)",value:y,onChange:B=>f(B.target.value),onKeyDown:B=>B.key==="Enter"&&S(),style:{...T.input,marginTop:8}}),n.jsxs("button",{onClick:S,style:{...T.addBtn,background:o==="income"?Ke:Xe},children:[n.jsx(ie,{size:15})," Add ",o]})]}),n.jsxs("div",{style:T.card,children:[n.jsx("div",{style:T.cardTitle,children:"History"}),$.length===0?n.jsx("div",{style:T.muted,children:"No transactions yet."}):n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:$.map(([B,x])=>n.jsxs("div",{children:[n.jsx("div",{style:T.dateHead,children:C(B)}),x.map(G=>(w==null?void 0:w.id)===G.id?n.jsxs("div",{style:T.editTxn,children:[n.jsxs("div",{style:T.kindToggle,children:[n.jsxs("button",{onClick:()=>H("expense"),style:{...T.kindBtn,...w.kind==="expense"?{background:Xe,color:"#fff",borderColor:Xe}:{}},children:[n.jsx(pa,{size:14})," Expense"]}),n.jsxs("button",{onClick:()=>H("income"),style:{...T.kindBtn,...w.kind==="income"?{background:Ke,color:"#fff",borderColor:Ke}:{}},children:[n.jsx(ba,{size:14})," Income"]})]}),n.jsxs("div",{style:T.formGrid,children:[n.jsx("input",{type:"number",inputMode:"decimal",value:w.amount,onChange:at=>k({...w,amount:at.target.value}),style:T.input}),n.jsx("select",{value:w.category,onChange:at=>k({...w,category:at.target.value}),style:T.input,children:L.map(at=>n.jsx("option",{children:at},at))}),n.jsx("input",{type:"date",value:w.date,max:So,onChange:at=>k({...w,date:at.target.value}),style:T.input})]}),n.jsx("input",{placeholder:"Note (optional)",value:w.note,onChange:at=>k({...w,note:at.target.value}),onKeyDown:at=>at.key==="Enter"&&M(),style:{...T.input,marginTop:8}}),n.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[n.jsxs("button",{onClick:()=>k(null),style:T.editCancel,children:[n.jsx(kt,{size:14})," Cancel"]}),n.jsxs("button",{onClick:M,style:{...T.addBtn,marginTop:0,flex:1,background:w.kind==="income"?Ke:Xe},children:[n.jsx(zt,{size:15})," Save"]})]})]},G.id):n.jsxs("div",{style:T.txnRow,children:[n.jsx("span",{style:{...T.txnDot,background:dp(G.category)}}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:T.txnCat,children:G.category}),G.note&&n.jsx("div",{style:T.txnNote,children:G.note})]}),n.jsxs("span",{style:{...T.txnAmt,color:G.kind==="income"?Ke:Xe},children:[G.kind==="income"?"+":"−",r(G.amount)]}),n.jsx("button",{onClick:()=>z(G),style:T.delBtn,children:n.jsx(ye,{size:13})}),n.jsx("button",{onClick:()=>j(G.id,G.category),style:T.delBtn,children:n.jsx(kt,{size:14})})]},G.id))]},B))})]}),n.jsx(ln,{toasts:I,onUndo:p,onDismiss:c})]})}function e0({money:t,cur:e}){return n.jsxs(n.Fragment,{children:[n.jsx(r0,{money:t,cur:e}),n.jsx(o0,{money:t,cur:e})]})}function Vr({label:t,value:e,set:r,min:o,max:s,step:i,suffix:l}){return n.jsxs("div",{style:T.field,children:[n.jsxs("div",{style:T.fieldTop,children:[n.jsx("span",{style:T.fieldLabel,children:t}),n.jsxs("div",{style:T.fieldInputWrap,children:[n.jsx("input",{type:"number",value:e,onChange:a=>r(a.target.value),style:T.fieldInput}),l&&n.jsx("span",{style:T.fieldSuffix,children:l})]})]}),n.jsx("input",{type:"range",min:o,max:s,step:i,value:e,onChange:a=>r(a.target.value),style:T.range})]})}function r0({money:t,cur:e}){const[r,o]=b.useState(3e4),[s,i]=b.useState(12),[l,a]=b.useState(15),{invested:d,futureValue:g,gains:h,yearly:y}=b.useMemo(()=>{const w=Math.max(0,parseFloat(r)||0),k=Math.max(0,parseFloat(s)||0),j=Math.max(0,Math.min(60,parseInt(l)||0)),I=k/12/100,p=S=>S<=0?0:I===0?w*S:w*((Math.pow(1+I,S)-1)/I)*(1+I),c=[];for(let S=1;S<=j;S++)c.push({year:S,invested:w*12*S,value:p(S*12)});const u=p(j*12),v=w*12*j;return{invested:v,futureValue:u,gains:u-v,yearly:c}},[r,s,l]),f=Math.max(1,...y.map(w=>w.value));return n.jsxs("div",{style:T.card,children:[n.jsx("div",{style:T.cardTitleRow,children:n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx(mh,{size:18,color:"#3A7CA5"}),n.jsxs("div",{children:[n.jsx("div",{style:T.cardTitle,children:"SIP projection"}),n.jsx("div",{style:T.cardSub,children:"Mutual fund / SIP future value"})]})]})}),n.jsx(Vr,{label:"Monthly investment",value:r,set:o,min:500,max:5e5,step:500,suffix:e.symbol}),n.jsx(Vr,{label:"Expected return (p.a.)",value:s,set:i,min:1,max:30,step:.5,suffix:"%"}),n.jsx(Vr,{label:"Time period",value:l,set:a,min:1,max:40,step:1,suffix:"yrs"}),n.jsxs("div",{style:T.resultHero,children:[n.jsx("div",{style:T.resultLabel,children:"Projected wealth"}),n.jsx("div",{style:{...T.resultVal,color:"#3A7CA5"},children:t(g)})]}),n.jsxs("div",{style:T.splitRow,children:[n.jsxs("div",{style:T.splitItem,children:[n.jsx("span",{style:T.splitV,children:t(d)}),n.jsx("span",{style:T.splitL,children:"Invested"})]}),n.jsxs("div",{style:T.splitItem,children:[n.jsx("span",{style:{...T.splitV,color:"#3E9E6B"},children:t(h)}),n.jsx("span",{style:T.splitL,children:"Est. returns"})]})]}),y.length>0&&n.jsxs("div",{style:T.chartWrap,children:[n.jsx("div",{style:T.chartBars,children:y.map(w=>n.jsx("div",{style:T.chartCol,title:`Year ${w.year}: ${t(w.value)}`,children:n.jsx("div",{style:{...T.chartStack,height:`${w.value/f*100}%`},children:n.jsx("div",{style:{...T.chartGain,height:`${(1-w.invested/w.value)*100}%`}})})},w.year))}),n.jsxs("div",{style:T.chartAxis,children:[n.jsx("span",{children:"Yr 1"}),n.jsxs("span",{style:{marginLeft:"auto"},children:["Yr ",y.length]})]}),n.jsxs("div",{style:T.legend,children:[n.jsxs("span",{style:T.legendItem,children:[n.jsx("span",{style:{...T.legendDot,background:"#9DBFD6"}})," Invested"]}),n.jsxs("span",{style:T.legendItem,children:[n.jsx("span",{style:{...T.legendDot,background:"#3E9E6B"}})," Returns"]})]})]})]})}function mc(t,e,r,o=0,s=0){let i=Math.max(0,t-s),l=0,a=0,d=s;const g=1200;for(;i>.01&&a<g;){const h=i*e;let y=r+o,f=y-h;if(f<=0)return{months:1/0,totalInterest:1/0,totalPaid:1/0};f>i&&(f=i,y=i+h),i-=f,l+=h,d+=y,a++}return{months:a,totalInterest:l,totalPaid:d}}const fc=t=>{if(!isFinite(t))return"—";const e=Math.floor(t/12),r=t%12;return(e?`${e}y `:"")+`${r}m`},n0=t=>{if(!isFinite(t))return"—";const e=new Date;return e.setMonth(e.getMonth()+t),e.toLocaleDateString("en-US",{month:"short",year:"numeric"})};function o0({money:t,cur:e}){const[r,o]=b.useState(2e6),[s,i]=b.useState(9),[l,a]=b.useState(20),[d,g]=b.useState(5e5),[h,y]=b.useState("once"),[f,w]=b.useState("tenure"),k=b.useMemo(()=>{const u=Math.max(0,parseFloat(r)||0),v=Math.max(0,parseFloat(s)||0)/12/100,S=Math.max(1,Math.round((parseFloat(l)||0)*12)),z=v===0?u/S:u*v*Math.pow(1+v,S)/(Math.pow(1+v,S)-1);return{P:u,i:v,n:S,emi:z,totalPay:z*S,totalInterest:z*S-u}},[r,s,l]),j=h==="monthly"?"tenure":f,I=b.useMemo(()=>{const{P:u,i:v,n:S,emi:z,totalInterest:L}=k,H=Math.max(0,parseFloat(d)||0);if(H<=0)return null;let M=z,$=S,C=L,B=k.totalPay;if(h==="once"&&j==="emi"){const x=Math.max(0,u-H);M=v===0?x/S:x*v*Math.pow(1+v,S)/(Math.pow(1+v,S)-1),$=S,C=M*S-x,B=H+M*S}else if(h==="once"){const x=mc(u,v,z,0,H);$=x.months,C=x.totalInterest,B=x.totalPaid}else{const x=mc(u,v,z,H,0);$=x.months,C=x.totalInterest,B=x.totalPaid}return{newEMI:M,newMonths:$,newInterest:C,totalPaid:B,interestSaved:Math.max(0,L-C),monthsSaved:Math.max(0,S-(isFinite($)?$:S))}},[k,d,h,j]),p=k.totalPay>0?k.P/k.totalPay*100:0,c=h==="once"?Math.max(1e5,Math.round(k.P)):Math.max(5e4,Math.round(k.emi*3));return n.jsxs("div",{style:T.card,children:[n.jsx("div",{style:T.cardTitleRow,children:n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx(Ub,{size:18,color:"#C2536B"}),n.jsxs("div",{children:[n.jsx("div",{style:T.cardTitle,children:"EMI calculator"}),n.jsx("div",{style:T.cardSub,children:"Loan / mortgage monthly payment"})]})]})}),n.jsx(Vr,{label:"Loan amount",value:r,set:o,min:5e4,max:5e7,step:5e4,suffix:e.symbol}),n.jsx(Vr,{label:"Interest rate (p.a.)",value:s,set:i,min:1,max:24,step:.1,suffix:"%"}),n.jsx(Vr,{label:"Tenure",value:l,set:a,min:1,max:30,step:1,suffix:"yrs"}),n.jsxs("div",{style:T.resultHero,children:[n.jsx("div",{style:T.resultLabel,children:"Monthly EMI"}),n.jsx("div",{style:{...T.resultVal,color:"#C2536B"},children:t(k.emi)})]}),n.jsxs("div",{style:T.emiSplitTrack,children:[n.jsx("div",{style:{width:`${p}%`,background:"#5B7C99",height:"100%"}}),n.jsx("div",{style:{width:`${100-p}%`,background:"#C2536B",height:"100%"}})]}),n.jsxs("div",{style:T.splitRow,children:[n.jsxs("div",{style:T.splitItem,children:[n.jsx("span",{style:{...T.splitV,color:"#5B7C99"},children:t(k.P)}),n.jsx("span",{style:T.splitL,children:"Principal"})]}),n.jsxs("div",{style:T.splitItem,children:[n.jsx("span",{style:{...T.splitV,color:"#C2536B"},children:t(k.totalInterest)}),n.jsx("span",{style:T.splitL,children:"Total interest"})]}),n.jsxs("div",{style:T.splitItem,children:[n.jsx("span",{style:T.splitV,children:t(k.totalPay)}),n.jsx("span",{style:T.splitL,children:"Total payable"})]})]}),n.jsx("div",{style:T.subDivider}),n.jsx("div",{style:T.subTitle,children:"Prepayment planner"}),n.jsx("div",{style:T.cardSub,children:"See what an extra payment does to your loan."}),n.jsx("div",{style:{marginTop:14},children:n.jsx(Vr,{label:"Prepayment amount",value:d,set:g,min:0,max:c,step:h==="once"?25e3:1e3,suffix:e.symbol})}),n.jsxs("div",{style:T.segGroup,children:[n.jsx("span",{style:T.segLbl,children:"Type"}),n.jsxs("div",{style:T.segRow,children:[n.jsx(ws,{label:"One-time",on:h==="once",onClick:()=>y("once")}),n.jsx(ws,{label:"Every month",on:h==="monthly",onClick:()=>y("monthly")})]})]}),n.jsxs("div",{style:T.segGroup,children:[n.jsx("span",{style:T.segLbl,children:"Strategy"}),n.jsxs("div",{style:T.segRow,children:[n.jsx(ws,{label:"Reduce tenure",on:j==="tenure",onClick:()=>w("tenure")}),n.jsx(ws,{label:"Reduce EMI",on:j==="emi",disabled:h==="monthly",onClick:()=>w("emi")})]})]}),h==="monthly"&&n.jsx("div",{style:T.note,children:"An extra monthly payment always shortens the tenure. Switch to a one-time prepayment to reduce your EMI instead."}),I?n.jsxs("div",{style:T.cmpCard,children:[n.jsxs("div",{style:T.cmpRow,children:[n.jsx("span",{style:T.cmpLbl,children:"New EMI"}),n.jsxs("span",{style:T.cmpVal,children:[t(I.newEMI),I.newEMI<k.emi-1&&n.jsxs("span",{style:T.cmpWas,children:[" was ",t(k.emi)]})]})]}),n.jsxs("div",{style:T.cmpRow,children:[n.jsx("span",{style:T.cmpLbl,children:"New tenure"}),n.jsxs("span",{style:T.cmpVal,children:[fc(I.newMonths)," ",n.jsxs("span",{style:T.cmpWas,children:["· paid off ",n0(I.newMonths)]})]})]}),n.jsxs("div",{style:T.cmpRow,children:[n.jsx("span",{style:T.cmpLbl,children:"Total interest"}),n.jsx("span",{style:T.cmpVal,children:t(I.newInterest)})]}),n.jsxs("div",{style:T.cmpRow,children:[n.jsx("span",{style:T.cmpLbl,children:"Total payable"}),n.jsx("span",{style:T.cmpVal,children:t(I.totalPaid)})]}),n.jsxs("div",{style:T.saveRow,children:["You save ",t(I.interestSaved)," in interest",I.monthsSaved>0?` · ${fc(I.monthsSaved)} sooner`:""]})]}):n.jsx("div",{style:T.muted,children:"Enter a prepayment amount to see the impact."})]})}function ws({label:t,on:e,onClick:r,disabled:o}){return n.jsx("button",{onClick:o?void 0:r,disabled:o,style:{...T.seg,...e?T.segOn:{},...o?T.segDisabled:{}},children:t})}const T={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},tabs:{display:"flex",gap:7,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},presetRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},preset:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},presetOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},sumGrid:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:16},sumCard:{background:"var(--surface)",borderRadius:14,padding:"14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},sumIcon:{width:30,height:30,borderRadius:9,display:"grid",placeItems:"center",marginBottom:8},sumLabel:{fontSize:11.5,color:"var(--text-3)",fontWeight:600},sumVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2,letterSpacing:"-0.01em",wordBreak:"break-word"},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},cardTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},twoCol:{display:"grid",gridTemplateColumns:"1fr",gap:0},dot:{width:10,height:10,borderRadius:3,flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:160,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},healthScore:{fontSize:32,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1},healthStatus:{fontSize:12.5,fontWeight:700,marginTop:2},gaugeTrack:{height:10,background:"var(--surface-2)",borderRadius:6,overflow:"hidden",marginBottom:14},gaugeFill:{height:"100%",borderRadius:6,transition:"width 0.4s"},healthStats:{display:"flex",gap:24,marginBottom:12},healthStat:{display:"flex",flexDirection:"column"},healthStatV:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},healthStatL:{fontSize:11,color:"var(--text-3)",fontWeight:600},tip:{fontSize:12.5,lineHeight:1.5,padding:"10px 12px",borderRadius:10,border:"1px solid",fontWeight:500},kindToggle:{display:"flex",gap:8,marginBottom:12},kindBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},formGrid:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},input:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},addBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},dateHead:{fontSize:11,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8},txnRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},txnDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},txnCat:{fontSize:13.5,fontWeight:600},txnNote:{fontSize:11.5,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},txnAmt:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},editTxn:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:12,margin:"6px 0"},editCancel:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},field:{marginBottom:16},fieldTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},fieldLabel:{fontSize:13,fontWeight:600,color:"var(--text-2)"},fieldInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:8,padding:"5px 10px",background:"var(--surface-2)"},fieldInput:{border:"none",background:"none",outline:"none",width:90,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},fieldSuffix:{fontSize:12,color:"var(--text-3)",fontWeight:600},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},resultHero:{textAlign:"center",padding:"14px 0 6px"},resultLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},resultVal:{fontSize:34,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,wordBreak:"break-word"},splitRow:{display:"flex",gap:10,marginTop:10},splitItem:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",background:"var(--surface-2)",borderRadius:10,padding:"10px 6px"},splitV:{fontSize:14.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",wordBreak:"break-word"},splitL:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:2},chartWrap:{marginTop:18},chartBars:{display:"flex",alignItems:"flex-end",gap:3,height:90},chartCol:{flex:1,height:"100%",display:"flex",alignItems:"flex-end"},chartStack:{width:"100%",background:"#9DBFD6",borderRadius:"3px 3px 0 0",minHeight:2,position:"relative",display:"flex",flexDirection:"column",justifyContent:"flex-start"},chartGain:{width:"100%",background:"#3E9E6B",borderRadius:"3px 3px 0 0"},chartAxis:{display:"flex",fontSize:10,color:"var(--text-3)",fontWeight:600,marginTop:6},legend:{display:"flex",gap:16,justifyContent:"center",marginTop:10},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)",fontWeight:600},legendDot:{width:10,height:10,borderRadius:3},emiSplitTrack:{display:"flex",height:12,borderRadius:6,overflow:"hidden",marginTop:16,border:"1px solid var(--border)"},subDivider:{height:1,background:"var(--border)",margin:"20px 0 14px"},subTitle:{fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},segGroup:{marginBottom:12},segLbl:{fontSize:12,fontWeight:600,color:"var(--text-3)",display:"block",marginBottom:6},segRow:{display:"flex",gap:8},seg:{flex:1,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},segOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},segDisabled:{opacity:.4,cursor:"not-allowed"},note:{fontSize:12,lineHeight:1.5,color:"var(--text-3)",background:"var(--surface-2)",borderRadius:9,padding:"9px 11px",marginBottom:12},cmpCard:{background:"var(--surface-2)",borderRadius:12,padding:"12px 14px",marginTop:4},cmpRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"6px 0",borderBottom:"1px solid var(--border)",gap:10},cmpLbl:{fontSize:12.5,color:"var(--text-2)",fontWeight:600},cmpVal:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",textAlign:"right"},cmpWas:{fontSize:11,color:"var(--text-3)",fontWeight:500,fontFamily:"'Inter',system-ui,sans-serif"},saveRow:{marginTop:12,background:"rgba(62,158,107,0.12)",color:"#3E9E6B",borderRadius:9,padding:"10px 12px",fontSize:13,fontWeight:700,textAlign:"center"}},Ca=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],hl={Monday:"Mon",Tuesday:"Tue",Wednesday:"Wed",Thursday:"Thu",Friday:"Fri",Saturday:"Sat",Sunday:"Sun"},uo=()=>Ca[(new Date().getDay()+6)%7],nr={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},hc=Object.keys(nr),yl=21,yc="kickstart_tags",vl=t=>{if(!t)return"";const e=t.trim();if(/^[A-Za-z0-9_-]{11}$/.test(e))return e;const r=e.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return r?r[1]:""},vc=t=>{if(!t||!String(t).trim())return null;const e=String(t).split(":").map(r=>parseInt(r.trim(),10));return e.some(r=>isNaN(r)||r<0)?null:e.reduce((r,o)=>r*60+o,0)},js=t=>{if(t==null)return"";const e=Math.max(0,t|0);return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`},s0=t=>`https://www.youtube.com/embed/${t.youtube_id}?start=${t.start_sec||0}`+(t.end_sec?`&end=${t.end_sec}`:"")+"&autoplay=1&rel=0",i0=()=>({id:null,url:"",title:"",start:"",end:"",days:[uo()],pillars:[],customs:[]});function l0(){const[t,e]=b.useState([]),[r,o]=b.useState([]),[s,i]=b.useState(!1),[l,a]=b.useState({type:"day",value:uo()}),[d,g]=b.useState(null),[h,y]=b.useState(null),[f,w]=b.useState(""),k=b.useCallback(async()=>{try{const[x,G]=await Promise.all([O.getKickstart(),O.getSetting(yc)]);e(x),o(Array.isArray(G==null?void 0:G.value)?G.value:[])}catch{}i(!0)},[]);b.useEffect(()=>{k()},[k]);const{deleteItem:j,toasts:I,handleUndo:p,handleDismiss:c}=sn(O.deleteKickstart,O.restoreKickstart,k);b.useEffect(()=>{if(!h)return;const x=t.find(F=>F.id===h);if(!x)return;const G=x.end_sec?Math.max(1,x.end_sec-(x.start_sec||0)):1/0;let at=0;const J=10,D=setInterval(()=>{if(document.hidden)return;const F=G-at;if(F<=0){clearInterval(D);return}const A=Math.min(J,F);at+=A,O.addScreenTime("kickstart",Math.round(A)).catch(()=>{})},J*1e3);return()=>clearInterval(D)},[h,t]);const u=x=>{o(x),O.setSetting(yc,x).catch(()=>{})},v=()=>{const x=f.trim();!x||r.length>=yl||r.includes(x)||(u([...r,x]),g(G=>G&&!G.customs.includes(x)?{...G,customs:[...G.customs,x]}:G),w(""))},S=x=>u(r.filter(G=>G!==x)),z=(x,G)=>g(at=>({...at,[x]:at[x].includes(G)?at[x].filter(J=>J!==G):[...at[x],G]})),L=x=>g({id:x.id,url:`https://youtu.be/${x.youtube_id}`,title:x.title,start:js(x.start_sec),end:x.end_sec?js(x.end_sec):"",days:[...x.days],pillars:[...x.pillars],customs:[...x.customs]}),H=async()=>{const x=vl(d.url);if(!x||d.days.length===0||!d.title.trim())return;const G={youtube_id:x,title:d.title.trim(),start_sec:vc(d.start)||0,end_sec:vc(d.end),days:d.days,pillars:d.pillars,customs:d.customs};d.id?await O.updateKickstart(d.id,G):await O.createKickstart(G),g(null),k()},M=b.useMemo(()=>t.filter(x=>l.type==="all"?!0:l.type==="day"?x.days.includes(l.value):l.type==="pillar"?x.pillars.includes(l.value):l.type==="custom"?x.customs.includes(l.value):!0),[t,l]),$=(x,G)=>l.type===x&&l.value===G,C=d?[!vl(d.url)&&"a valid YouTube link",!d.title.trim()&&"a title",d.days.length===0&&"at least one day"].filter(Boolean):[],B=!!d&&C.length===0;return n.jsxs("div",{style:Z.page,children:[n.jsxs("div",{style:Z.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:Z.eyebrow,children:"Anvil · Kickstart"}),n.jsx("h1",{style:Z.h1,children:"Kickstart"}),n.jsxs("div",{style:Z.subhead,children:["Your motivation hub — the right push for ",uo(),"."]})]}),!d&&n.jsxs("button",{onClick:()=>g(i0()),style:Z.addBtn,children:[n.jsx(ie,{size:15})," Add video"]})]}),d&&n.jsxs("div",{style:Z.card,children:[n.jsx("div",{style:Z.cardTitle,children:d.id?"Edit video":"Add video"}),n.jsx("input",{placeholder:"YouTube link (or video ID)",value:d.url,onChange:x=>g({...d,url:x.target.value}),style:Z.input,autoFocus:!0}),d.url&&!vl(d.url)&&n.jsx("div",{style:Z.warn,children:"Couldn't find a YouTube video ID in that link."}),n.jsx("input",{placeholder:"Title (required)",value:d.title,onChange:x=>g({...d,title:x.target.value}),style:{...Z.input,marginTop:8}}),n.jsxs("div",{style:Z.trimRow,children:[n.jsx(hh,{size:15,color:"var(--text-3)"}),n.jsxs("label",{style:Z.trimField,children:[n.jsx("span",{style:Z.trimLbl,children:"Start"}),n.jsx("input",{placeholder:"0:30",value:d.start,onChange:x=>g({...d,start:x.target.value}),style:Z.trimInput})]}),n.jsx("span",{style:Z.trimArrow,children:"→"}),n.jsxs("label",{style:Z.trimField,children:[n.jsx("span",{style:Z.trimLbl,children:"End"}),n.jsx("input",{placeholder:"end (optional)",value:d.end,onChange:x=>g({...d,end:x.target.value}),style:Z.trimInput})]})]}),n.jsx("div",{style:Z.hint,children:"Only this trimmed part plays. Use m:ss (e.g. 1:30). Leave End blank to play to the end."}),n.jsxs("div",{style:Z.tagBlock,children:[n.jsxs("div",{style:Z.tagLabel,children:["Days ",n.jsx("span",{style:Z.req,children:"required"})]}),n.jsx("div",{style:Z.chipRow,children:Ca.map(x=>n.jsx("button",{onClick:()=>z("days",x),style:{...Z.chip,...d.days.includes(x)?Z.chipOnDark:{}},children:hl[x]},x))})]}),n.jsxs("div",{style:Z.tagBlock,children:[n.jsxs("div",{style:Z.tagLabel,children:["Pillars ",n.jsx("span",{style:Z.opt,children:"optional"})]}),n.jsx("div",{style:Z.chipRow,children:hc.map(x=>{const G=d.pillars.includes(x);return n.jsxs("button",{onClick:()=>z("pillars",x),style:{...Z.chip,...G?{background:nr[x],color:"#fff",borderColor:nr[x]}:{}},children:[n.jsx("span",{style:{...Z.dot,background:G?"#fff":nr[x]}}),x]},x)})})]}),n.jsxs("div",{style:Z.tagBlock,children:[n.jsxs("div",{style:Z.tagLabel,children:["Custom tags ",n.jsxs("span",{style:Z.opt,children:["optional · ",r.length,"/",yl]})]}),n.jsxs("div",{style:Z.chipRow,children:[r.map(x=>n.jsxs("span",{style:{...Z.chip,...d.customs.includes(x)?Z.chipOnAccent:{},paddingRight:4},children:[n.jsx("button",{onClick:()=>z("customs",x),style:Z.chipInner,children:x}),n.jsx("button",{onClick:()=>S(x),style:Z.chipX,title:"Delete tag",children:n.jsx(kt,{size:11})})]},x)),r.length===0&&n.jsx("span",{style:Z.muted,children:"No custom tags yet."})]}),r.length<yl&&n.jsxs("div",{style:Z.newTagRow,children:[n.jsx("input",{placeholder:"New custom tag…",value:f,onChange:x=>w(x.target.value),onKeyDown:x=>x.key==="Enter"&&v(),style:{...Z.input,padding:"7px 10px"}}),n.jsx("button",{onClick:v,style:Z.smallBtn,children:n.jsx(ie,{size:14})})]})]}),!B&&n.jsxs("div",{style:Z.warn,children:["Add ",C.join(", ")," to save."]}),n.jsxs("div",{style:Z.formActions,children:[n.jsxs("button",{onClick:()=>g(null),style:Z.cancelBtn,children:[n.jsx(kt,{size:14})," Cancel"]}),n.jsxs("button",{onClick:H,disabled:!B,style:{...Z.saveBtn,...B?{}:Z.saveDisabled},children:[n.jsx(zt,{size:15})," ",d.id?"Save":"Add video"]})]})]}),n.jsxs("div",{style:Z.filterCard,children:[n.jsx("button",{onClick:()=>a({type:"all"}),style:{...Z.fChip,...l.type==="all"?Z.fChipOnDark:{}},children:"All"}),n.jsx("span",{style:Z.fDivider}),Ca.map(x=>n.jsxs("button",{onClick:()=>a({type:"day",value:x}),style:{...Z.fChip,...$("day",x)?Z.fChipOnDark:{},...x===uo()?Z.fToday:{}},children:[hl[x],x===uo()?" ·":""]},x)),n.jsx("span",{style:Z.fDivider}),hc.map(x=>n.jsxs("button",{onClick:()=>a({type:"pillar",value:x}),style:{...Z.fChip,...$("pillar",x)?{background:nr[x],color:"#fff",borderColor:nr[x]}:{}},children:[n.jsx("span",{style:{...Z.dot,background:$("pillar",x)?"#fff":nr[x]}}),x]},x)),r.length>0&&n.jsx("span",{style:Z.fDivider}),r.map(x=>n.jsxs("button",{onClick:()=>a({type:"custom",value:x}),style:{...Z.fChip,...$("custom",x)?Z.fChipOnAccent:{}},children:[n.jsx(xh,{size:11})," ",x]},x))]}),s?M.length===0?n.jsx("div",{style:Z.empty,children:t.length===0?"No videos yet — add your first motivation clip.":"No videos for this tag."}):n.jsx("div",{style:Z.grid,children:M.map(x=>n.jsxs("div",{style:Z.videoCard,children:[n.jsx("div",{style:Z.thumbWrap,children:h===x.id?n.jsx("iframe",{src:s0(x),title:x.title||x.youtube_id,style:Z.iframe,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):n.jsxs("button",{onClick:()=>y(x.id),style:Z.thumbBtn,children:[n.jsx("img",{src:`https://img.youtube.com/vi/${x.youtube_id}/hqdefault.jpg`,alt:"",style:Z.thumb}),n.jsx("span",{style:Z.playOverlay,children:n.jsx(Xb,{size:22,color:"#fff",fill:"#fff"})}),n.jsxs("span",{style:Z.trimBadge,children:[js(x.start_sec),x.end_sec?` – ${js(x.end_sec)}`:"+"]})]})}),n.jsxs("div",{style:Z.videoBody,children:[n.jsx("div",{style:Z.videoTitle,children:x.title||"Untitled clip"}),n.jsxs("div",{style:Z.tagWrap,children:[x.days.map(G=>n.jsx("span",{style:Z.dayTag,children:hl[G]},G)),x.pillars.map(G=>n.jsx("span",{style:{...Z.pillTag,color:nr[G]||"var(--text-2)",borderColor:nr[G]||"var(--border)"},children:G},G)),x.customs.map(G=>n.jsx("span",{style:Z.customTag,children:G},G))]}),n.jsxs("div",{style:Z.cardActions,children:[n.jsx("button",{onClick:()=>L(x),style:Z.iconBtn,title:"Edit",children:n.jsx(ye,{size:13})}),n.jsx("button",{onClick:()=>j(x.id,x.title||"video"),style:Z.iconBtn,title:"Delete",children:n.jsx(kt,{size:14})})]})]})]},x.id))}):n.jsx("div",{style:Z.muted,children:"Loading…"}),n.jsx(ln,{toasts:I,onUndo:p,onDismiss:c})]})}const Z={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:1e3,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},warn:{fontSize:11.5,color:"#C2773B",marginTop:5,fontWeight:600},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:6,lineHeight:1.4},trimRow:{display:"flex",alignItems:"flex-end",gap:10,marginTop:10},trimField:{display:"flex",flexDirection:"column",gap:4,flex:1},trimLbl:{fontSize:11,color:"var(--text-2)",fontWeight:600},trimInput:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},trimArrow:{color:"var(--text-3)",paddingBottom:9},tagBlock:{marginTop:14},tagLabel:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},req:{fontSize:10,fontWeight:700,color:"#C2536B",textTransform:"uppercase",marginLeft:6},opt:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",marginLeft:6},chipRow:{display:"flex",gap:6,flexWrap:"wrap"},chip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},chipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},chipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},chipInner:{border:"none",background:"none",color:"inherit",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,padding:0},chipX:{border:"none",background:"rgba(0,0,0,0.12)",color:"inherit",cursor:"pointer",display:"grid",placeItems:"center",borderRadius:"50%",width:16,height:16,padding:0},newTagRow:{display:"flex",gap:6,marginTop:8,maxWidth:280},smallBtn:{border:"none",background:"var(--accent)",color:"#fff",width:34,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},dot:{width:8,height:8,borderRadius:"50%",flexShrink:0,display:"inline-block"},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"var(--accent)",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},filterCard:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:12,marginBottom:18},fChip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},fChipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},fChipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},fToday:{borderColor:"var(--accent)",borderWidth:2},fDivider:{width:1,alignSelf:"stretch",background:"var(--border)",margin:"0 2px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:14},videoCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 9",background:"#000"},thumbBtn:{border:"none",padding:0,margin:0,cursor:"pointer",width:"100%",height:"100%",position:"relative",display:"block",background:"#000"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center",background:"rgba(0,0,0,0.28)"},trimBadge:{position:"absolute",bottom:8,right:8,background:"rgba(0,0,0,0.75)",color:"#fff",fontSize:11,fontWeight:700,padding:"2px 7px",borderRadius:6,fontFamily:"'Fraunces',Georgia,serif"},iframe:{width:"100%",height:"100%",border:"none",display:"block"},videoBody:{padding:"12px 13px",display:"flex",flexDirection:"column",gap:8},videoTitle:{fontSize:14,fontWeight:700},tagWrap:{display:"flex",gap:5,flexWrap:"wrap"},dayTag:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:8},pillTag:{fontSize:10,fontWeight:700,border:"1px solid",borderRadius:8,padding:"2px 7px"},customTag:{fontSize:10,fontWeight:700,color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"2px 7px",borderRadius:8},cardActions:{display:"flex",gap:4,justifyContent:"flex-end"},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},gp=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,xc=()=>gp(new Date),kc=(t,e)=>{const r=new Date(t+"T00:00:00");return r.setDate(r.getDate()+e),gp(r)},wc=t=>new Date(t+"T00:00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"}),a0=t=>{if(!t)return"";const e=t.trim();if(/^[A-Za-z0-9_-]{11}$/.test(e))return e;const r=e.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return r?r[1]:""},d0=t=>new Promise((e,r)=>{const o=new FileReader;o.onload=()=>{const s=new Image;s.onload=()=>{let{width:l,height:a}=s;l>a&&l>900?(a=a*900/l,l=900):a>900&&(l=l*900/a,a=900);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(s,0,0,l,a),e(d.toDataURL("image/jpeg",.82))},s.onerror=r,s.src=o.result},o.onerror=r,o.readAsDataURL(t)});function g0(){const[t,e]=b.useState([]),[r,o]=b.useState(!1),[s,i]=b.useState(null),[l,a]=b.useState(!1),[d,g]=b.useState({title:"",image:""}),[h,y]=b.useState(""),[f,w]=b.useState(!0),[k,j]=b.useState(null),I=b.useCallback(async()=>{try{e(await O.getGoldenGoals())}catch{}o(!0)},[]);b.useEffect(()=>{I()},[I]),b.useEffect(()=>{O.getSetting("golden_music").then(S=>y(a0((S==null?void 0:S.value)||""))).catch(()=>{})},[]);const p=async()=>{if(!d.title.trim())return;const S=await O.createGolden({title:d.title.trim(),image:d.image});g({title:"",image:""}),a(!1),await I(),i(S.id)},c=async(S,z)=>{var H;const L=(H=S.target.files)==null?void 0:H[0];if(L)try{z(await d0(L))}catch{}},u=t.filter(S=>!S.achieved),v=t.filter(S=>S.achieved);return s?n.jsxs("div",{style:tt.page,children:[n.jsx(b0,{musicId:h,on:f}),n.jsx(c0,{goalId:s,onBack:()=>i(null),onReload:I,onCelebrate:(S,z)=>j({title:S,days:z}),pickImage:c,musicId:h,musicOn:f,setMusicOn:w}),k&&n.jsx(u0,{data:k,onClose:()=>j(null)})]}):n.jsxs("div",{style:tt.page,children:[n.jsxs("div",{style:tt.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:tt.eyebrow,children:"Anvil · Golden Book"}),n.jsx("h1",{style:tt.h1,children:"Golden Book"}),n.jsx("div",{style:tt.subhead,children:"Write your dreams into being — a little every day."})]}),!l&&n.jsxs("button",{onClick:()=>a(!0),style:tt.addBtn,children:[n.jsx(ie,{size:15})," New dream"]})]}),l&&n.jsxs("div",{style:tt.card,children:[n.jsx("div",{style:tt.cardTitle,children:"Manifest a new dream"}),n.jsx("textarea",{autoFocus:!0,placeholder:"Write your dream as if it's already true…",value:d.title,onChange:S=>g({...d,title:S.target.value}),style:tt.textarea}),n.jsxs("label",{style:tt.photoPick,children:[d.image?n.jsx("img",{src:d.image,alt:"",style:tt.photoPreview}):n.jsxs("span",{style:tt.photoEmpty,children:[n.jsx(Ti,{size:18})," Add a photo"]}),n.jsx("input",{type:"file",accept:"image/*",onChange:S=>c(S,z=>g({...d,image:z})),style:{display:"none"}})]}),n.jsxs("div",{style:tt.formActions,children:[n.jsxs("button",{onClick:()=>{a(!1),g({title:"",image:""})},style:tt.cancelBtn,children:[n.jsx(kt,{size:14})," Cancel"]}),n.jsxs("button",{onClick:p,disabled:!d.title.trim(),style:{...tt.saveBtn,...d.title.trim()?{}:tt.saveDisabled},children:[n.jsx(zt,{size:15})," Create"]})]})]}),r?n.jsxs(n.Fragment,{children:[u.length===0&&v.length===0&&!l&&n.jsx("div",{style:tt.empty,children:"No dreams yet. Add your first one and revisit it daily."}),u.length>0&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:tt.sectionTitle,children:[n.jsx(Yo,{size:15,color:"#C9A227"})," Manifesting ",n.jsx("span",{style:tt.badge,children:u.length})]}),n.jsx("div",{style:tt.grid,children:u.map(S=>n.jsx(jc,{g:S,onOpen:()=>i(S.id)},S.id))})]}),v.length>0&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{...tt.sectionTitle,marginTop:22},children:[n.jsx(tn,{size:15,color:"#4C9A6B"})," Manifested ",n.jsx("span",{style:tt.badge,children:v.length})]}),n.jsx("div",{style:tt.grid,children:v.map(S=>n.jsx(jc,{g:S,onOpen:()=>i(S.id),achieved:!0},S.id))})]})]}):n.jsx("div",{style:tt.muted,children:"Loading…"})]})}function jc({g:t,onOpen:e,achieved:r}){return n.jsxs("button",{onClick:e,style:{...tt.goalCard,...r?{opacity:.96}:{}},children:[n.jsxs("div",{style:tt.thumbWrap,children:[t.image?n.jsx("img",{src:t.image,alt:"",style:tt.thumb}):n.jsx("div",{style:tt.thumbEmpty,children:n.jsx(Yo,{size:26,color:"var(--text-3)"})}),r&&n.jsx("span",{style:tt.stamp,children:"✦ Manifested"})]}),n.jsxs("div",{style:tt.goalBody,children:[n.jsx("div",{style:tt.goalTitle,children:t.title}),n.jsxs("div",{style:tt.goalMeta,children:[r?n.jsxs("span",{style:{...tt.metaPill,color:"#4C9A6B",background:"rgba(76,154,107,0.12)"},children:[n.jsx(tn,{size:12})," ",t.days_to_manifest!=null?`in ${t.days_to_manifest} day${t.days_to_manifest===1?"":"s"}`:"done"]}):n.jsxs("span",{style:{...tt.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[n.jsx(Kn,{size:12})," ",t.streak," day streak"]}),n.jsxs("span",{style:tt.metaDim,children:[t.total_days," entr",t.total_days===1?"y":"ies"]})]})]})]})}function c0({goalId:t,onBack:e,onReload:r,onCelebrate:o,pickImage:s,musicId:i,musicOn:l,setMusicOn:a}){const[d,g]=b.useState(null),[h,y]=b.useState({}),[f,w]=b.useState(xc()),[k,j]=b.useState(""),[I,p]=b.useState(null),c=xc(),u=b.useCallback(async()=>{const B=await O.getGoldenGoal(t);g(B);const x={};B.entries.forEach(G=>{x[G.date]=G.text}),y(x),j(x[c]||"")},[t,c]);if(b.useEffect(()=>{u()},[u]),!d)return n.jsx("div",{style:tt.muted,children:"Loading…"});const v=f===c,S=f>d.created_date,z=f<c,L=async()=>{await O.upsertGoldenEntry(t,{date:c,text:k}),await u(),r()},H=async()=>{const B=await O.achieveGolden(t);o(d.title,B.days_to_manifest),await u(),r()},M=async()=>{await O.unachieveGolden(t),await u(),r()},$=async()=>{I.trim()&&(await O.updateGolden(t,{title:I.trim()}),p(null),await u(),r())},C=B=>O.updateGolden(t,{image:B}).then(()=>{u(),r()});return n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:e,style:tt.backBtn,children:[n.jsx(Nb,{size:16})," All dreams"]}),n.jsxs("div",{style:tt.detailHero,children:[n.jsxs("label",{style:tt.heroPhoto,children:[d.image?n.jsx("img",{src:d.image,alt:"",style:tt.heroImg}):n.jsxs("span",{style:tt.photoEmpty,children:[n.jsx(Ti,{size:20})," Add a photo"]}),n.jsxs("span",{style:tt.photoEdit,children:[n.jsx(ye,{size:12})," Edit photo"]}),n.jsx("input",{type:"file",accept:"image/*",onChange:B=>s(B,C),style:{display:"none"}})]}),n.jsxs("div",{style:tt.heroInfo,children:[d.achieved&&n.jsxs("span",{style:tt.heroStamp,children:["✦ Manifested",d.days_to_manifest!=null?` in ${d.days_to_manifest} day${d.days_to_manifest===1?"":"s"}`:""]}),I!==null?n.jsxs("div",{style:{display:"flex",gap:6,width:"100%"},children:[n.jsx("textarea",{autoFocus:!0,value:I,onChange:B=>p(B.target.value),style:{...tt.textarea,minHeight:60}}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[n.jsx("button",{onClick:$,style:tt.iconSave,children:n.jsx(zt,{size:14})}),n.jsx("button",{onClick:()=>p(null),style:tt.iconCancel,children:n.jsx(kt,{size:14})})]})]}):n.jsxs("div",{style:tt.heroTitleRow,children:[n.jsx("div",{style:tt.heroTitle,children:d.title}),n.jsx("button",{onClick:()=>p(d.title),style:tt.ghostBtn,title:"Edit",children:n.jsx(ye,{size:13})})]}),n.jsxs("div",{style:tt.heroStats,children:[n.jsxs("span",{style:{...tt.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[n.jsx(Kn,{size:13})," ",d.streak," day streak"]}),n.jsxs("span",{style:tt.metaDim,children:[d.total_days," entr",d.total_days===1?"y":"ies"]}),n.jsxs("span",{style:tt.metaDim,children:["since ",wc(d.created_date)]})]})]})]}),n.jsxs("div",{style:tt.writeCard,children:[n.jsx("div",{style:tt.tuneRow,children:i?n.jsxs("button",{onClick:()=>a(B=>!B),style:{...tt.tuneBtn,...l?tt.tuneOn:{}},children:[l?n.jsx(Qb,{size:14}):n.jsx(Kb,{size:14})," Soft tunes"]}):n.jsx("span",{style:tt.tuneHint,children:"Add a track in Settings → Music"})}),n.jsxs("div",{style:tt.writeNav,children:[n.jsx("button",{onClick:()=>w(B=>kc(B,-1)),disabled:!S,style:{...tt.navBtn,...S?{}:tt.navDisabled},children:n.jsx(Qn,{size:16})}),n.jsx("div",{style:tt.writeDate,children:v?"Today":wc(f)}),n.jsx("button",{onClick:()=>w(B=>kc(B,1)),disabled:!z,style:{...tt.navBtn,...z?{}:tt.navDisabled},children:n.jsx(on,{size:16})})]}),v&&!d.achieved?n.jsxs(n.Fragment,{children:[n.jsx("textarea",{value:k,onChange:B=>j(B.target.value),placeholder:"Write it again today, as if it's already yours…",style:tt.writeArea}),n.jsxs("button",{onClick:L,style:tt.writeSave,children:[n.jsx(zt,{size:15})," Save today's entry"]})]}):n.jsx("div",{style:tt.readEntry,children:h[f]?n.jsxs(n.Fragment,{children:[n.jsx(Jb,{size:16,color:"var(--text-3)"}),n.jsx("p",{style:tt.readText,children:h[f]})]}):n.jsx("div",{style:tt.muted,children:"Nothing written on this day."})})]}),d.achieved?n.jsx("button",{onClick:M,style:tt.unmanifestBtn,children:"Undo manifested"}):n.jsxs("button",{onClick:H,style:tt.manifestBtn,children:[n.jsx(Yo,{size:16})," Mark as manifested"]})]})}function u0({data:t,onClose:e}){return n.jsx("div",{style:tt.celebOverlay,onClick:e,children:n.jsxs("div",{style:tt.celebBox,onClick:r=>r.stopPropagation(),children:[n.jsx("div",{style:tt.celebEmoji,children:"✨🌟✨"}),n.jsx("div",{style:tt.celebTitle,children:"It's happening!"}),n.jsxs("div",{style:tt.celebDream,children:['"',t.title,'"']}),n.jsxs("div",{style:tt.celebSub,children:[t.days!=null?`Manifested in ${t.days} day${t.days===1?"":"s"}.`:"Manifested."," The universe delivered. 🙏"]}),n.jsx("button",{onClick:e,style:tt.celebBtn,children:"Wonderful"})]})})}function b0({musicId:t,on:e}){return!t||!e?null:n.jsx("iframe",{title:"golden-music",src:`https://www.youtube.com/embed/${t}?autoplay=1&loop=1&playlist=${t}&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}})}const Lr="#C9A227",tt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:860,margin:"0 auto",position:"relative"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:Lr,color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"11px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:70,resize:"vertical",lineHeight:1.5},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:Lr,color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:12},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:14},goalCard:{textAlign:"left",border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,overflow:"hidden",cursor:"pointer",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",padding:0,fontFamily:"inherit",display:"flex",flexDirection:"column"},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 10",background:"var(--surface-2)"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},thumbEmpty:{width:"100%",height:"100%",display:"grid",placeItems:"center"},stamp:{position:"absolute",top:8,right:8,transform:"rotate(6deg)",background:"rgba(76,154,107,0.95)",color:"#fff",fontSize:11,fontWeight:800,letterSpacing:"0.04em",padding:"3px 9px",borderRadius:6,border:"1.5px solid #fff",textTransform:"uppercase"},goalBody:{padding:"11px 13px",display:"flex",flexDirection:"column",gap:8},goalTitle:{fontSize:14,fontWeight:600,lineHeight:1.35,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},goalMeta:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},metaPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:700,padding:"2px 8px",borderRadius:10},metaDim:{fontSize:11,color:"var(--text-3)",fontWeight:500},backBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginBottom:16},detailHero:{display:"flex",flexDirection:"column",gap:14,marginBottom:16},heroPhoto:{position:"relative",width:"100%",borderRadius:14,overflow:"hidden",border:"1px solid var(--border)",cursor:"pointer",background:"var(--surface-2)",display:"flex",alignItems:"center",justifyContent:"center",minHeight:120},heroImg:{width:"100%",maxHeight:"62vh",objectFit:"contain",display:"block"},photoEdit:{position:"absolute",bottom:8,right:8,display:"flex",alignItems:"center",gap:5,background:"rgba(0,0,0,0.6)",color:"#fff",fontSize:11,fontWeight:600,padding:"4px 8px",borderRadius:7},heroInfo:{display:"flex",flexDirection:"column",gap:10,alignItems:"center",textAlign:"center"},heroStamp:{alignSelf:"center",background:"rgba(76,154,107,0.14)",color:"#4C9A6B",fontSize:12,fontWeight:800,padding:"4px 10px",borderRadius:8,letterSpacing:"0.03em"},heroTitleRow:{display:"flex",alignItems:"flex-start",gap:8,justifyContent:"center"},heroTitle:{fontSize:23,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.35},heroStats:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",justifyContent:"center"},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",flexShrink:0},iconSave:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},iconCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},writeCard:{background:"var(--surface)",borderRadius:14,padding:16,border:"1px solid var(--border)",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},tuneRow:{display:"flex",justifyContent:"flex-end",marginBottom:10},tuneBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tuneOn:{background:Lr,color:"#fff",borderColor:Lr},tuneHint:{fontSize:11,color:"var(--text-3)",fontWeight:500},writeNav:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,marginBottom:12},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center"},navDisabled:{opacity:.35,cursor:"not-allowed"},writeDate:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:150,textAlign:"center"},writeArea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:120,resize:"vertical",lineHeight:1.6},writeSave:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",background:Lr,color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},readEntry:{display:"flex",gap:8,padding:"6px 2px"},readText:{fontSize:15,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.6,margin:0,whiteSpace:"pre-wrap"},manifestBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,width:"100%",border:"none",background:"linear-gradient(135deg,#C9A227,#E0BD45)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:800,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 2px 10px rgba(201,162,39,0.35)"},unmanifestBtn:{display:"block",margin:"0 auto",border:"none",background:"none",color:"var(--text-3)",fontSize:12,fontWeight:600,cursor:"pointer",textDecoration:"underline",fontFamily:"inherit"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.6)",zIndex:200,display:"grid",placeItems:"center",padding:16},celebBox:{background:"var(--surface)",color:"var(--text)",borderRadius:20,padding:"36px 30px",textAlign:"center",maxWidth:360,boxShadow:"0 12px 48px rgba(0,0,0,0.3)"},celebEmoji:{fontSize:40,marginBottom:10},celebTitle:{fontSize:24,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginBottom:10,color:Lr},celebDream:{fontSize:15,fontStyle:"italic",fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.5,marginBottom:10},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:Lr,color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},xl=[{id:"meditation",label:"Meditation Hub",icon:Qf,color:"#8268B0"},{id:"visualization",label:"Visualization",icon:ai,color:"#3A7CA5"}],Sc=t=>{if(!t)return"";const e=t.trim();if(/^[A-Za-z0-9_-]{11}$/.test(e))return e;const r=e.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return r?r[1]:""},p0=t=>new Promise((e,r)=>{const o=new FileReader;o.onload=()=>{const s=new Image;s.onload=()=>{let{width:l,height:a}=s;l>a&&l>1e3?(a=a*1e3/l,l=1e3):a>1e3&&(l=l*1e3/a,a=1e3);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(s,0,0,l,a),e(d.toDataURL("image/jpeg",.82))},s.onerror=r,s.src=o.result},o.onerror=r,o.readAsDataURL(t)}),m0=t=>({id:null,kind:t,title:"",url:"",image:""});function f0(){const[t,e]=b.useState("meditation"),[r,o]=b.useState([]),[s,i]=b.useState(!1),[l,a]=b.useState(null),[d,g]=b.useState(null),h=b.useCallback(async()=>{try{o(await O.getMedia())}catch{}i(!0)},[]);b.useEffect(()=>{h()},[h]);const{deleteItem:y,toasts:f,handleUndo:w,handleDismiss:k}=sn(O.deleteMedia,O.restoreMedia,h);b.useEffect(()=>{if(!d)return;const z=10,L=setInterval(()=>{document.hidden||O.addScreenTime("mindscape",z).catch(()=>{})},z*1e3);return()=>clearInterval(L)},[d]);const j=xl.find(z=>z.id===t),I=r.filter(z=>z.kind===t),p=z=>a({id:z.id,kind:z.kind,title:z.title,url:`https://youtu.be/${z.youtube_id}`,image:z.image}),c=async z=>{var H;const L=(H=z.target.files)==null?void 0:H[0];if(L){try{const M=await p0(L);a($=>({...$,image:M}))}catch{}z.target.value=""}},u=l?[!l.title.trim()&&"a title",!l.image&&"an image",!Sc(l.url)&&"a valid YouTube link"].filter(Boolean):[],v=!!l&&u.length===0,S=async()=>{if(!v)return;const z={kind:l.kind,title:l.title.trim(),image:l.image,youtube_id:Sc(l.url)};l.id?await O.updateMedia(l.id,z):await O.createMedia(z),a(null),h()};return n.jsxs("div",{style:Et.page,children:[d&&n.jsx("iframe",{title:"mindscape-audio",src:`https://www.youtube.com/embed/${d.youtube_id}?autoplay=1&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}}),n.jsxs("div",{style:Et.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:Et.eyebrow,children:"Anvil · Mindscape"}),n.jsx("h1",{style:Et.h1,children:"Mindscape"}),n.jsx("div",{style:Et.subhead,children:"Close your eyes and listen — guided meditation and visualization."})]}),!l&&n.jsxs("button",{onClick:()=>a(m0(t)),style:{...Et.addBtn,background:j.color},children:[n.jsx(ie,{size:15})," Add"]})]}),n.jsx("div",{style:Et.tabs,children:xl.map(z=>{const L=z.icon,H=t===z.id;return n.jsxs("button",{onClick:()=>{e(z.id),a(null)},style:{...Et.tab,...H?{background:z.color,color:"#fff",borderColor:z.color}:{}},children:[n.jsx(L,{size:15})," ",z.label]},z.id)})}),l&&n.jsxs("div",{style:Et.card,children:[n.jsx("div",{style:Et.cardTitle,children:l.id?"Edit":`New ${xl.find(z=>z.id===l.kind).label}`}),n.jsx("input",{placeholder:"YouTube link (plays as audio only)",value:l.url,onChange:z=>a({...l,url:z.target.value}),style:Et.input,autoFocus:!0}),n.jsx("input",{placeholder:"Title (required)",value:l.title,onChange:z=>a({...l,title:z.target.value}),style:{...Et.input,marginTop:8}}),n.jsxs("label",{style:Et.photoPick,children:[l.image?n.jsx("img",{src:l.image,alt:"",style:Et.photoPreview}):n.jsxs("span",{style:Et.photoEmpty,children:[n.jsx(Ti,{size:18})," Add cover image (required)"]}),n.jsx("input",{type:"file",accept:"image/*",onChange:c,style:{display:"none"}})]}),!v&&n.jsxs("div",{style:Et.warn,children:["Add ",u.join(", ")," to save."]}),n.jsxs("div",{style:Et.formActions,children:[n.jsxs("button",{onClick:()=>a(null),style:Et.cancelBtn,children:[n.jsx(kt,{size:14})," Cancel"]}),n.jsxs("button",{onClick:S,disabled:!v,style:{...Et.saveBtn,background:v?j.color:"var(--border)",color:v?"#fff":"var(--text-3)",cursor:v?"pointer":"not-allowed"},children:[n.jsx(zt,{size:15})," ",l.id?"Save":"Add"]})]})]}),s?I.length===0?n.jsxs("div",{style:Et.empty,children:["Nothing here yet — add a ",j.label.toLowerCase()," track."]}):n.jsx("div",{style:Et.grid,children:I.map(z=>{const L=(d==null?void 0:d.id)===z.id;return n.jsxs("div",{style:Et.mediaCard,children:[n.jsxs("button",{onClick:()=>g(L?null:z),style:Et.coverBtn,title:L?"Pause":"Play",children:[n.jsx("img",{src:z.image,alt:"",style:Et.cover}),n.jsx("span",{style:{...Et.playOverlay,background:L?"rgba(0,0,0,0.45)":"rgba(0,0,0,0.28)"},children:n.jsx("span",{style:{...Et.playCircle,background:j.color},children:L?n.jsx(ph,{size:20,color:"#fff",fill:"#fff"}):n.jsx(Xb,{size:20,color:"#fff",fill:"#fff"})})}),L&&n.jsxs("span",{style:Et.nowPlaying,children:[n.jsx(Qb,{size:11})," Playing"]})]}),n.jsxs("div",{style:Et.mediaBody,children:[n.jsx("div",{style:Et.mediaTitle,children:z.title}),n.jsxs("div",{style:Et.cardActions,children:[n.jsx("button",{onClick:()=>p(z),style:Et.iconBtn,title:"Edit",children:n.jsx(ye,{size:13})}),n.jsx("button",{onClick:()=>{(d==null?void 0:d.id)===z.id&&g(null),y(z.id,z.title)},style:Et.iconBtn,title:"Delete",children:n.jsx(kt,{size:14})})]})]})]},z.id)})}):n.jsx("div",{style:Et.muted,children:"Loading…"}),n.jsx(ln,{toasts:f,onUndo:w,onDismiss:k})]})}const Et={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:900,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},tabs:{display:"flex",gap:8,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:200,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},warn:{fontSize:12,color:"#C2773B",marginTop:8,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,fontFamily:"inherit"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:16},mediaCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},coverBtn:{position:"relative",border:"none",padding:0,cursor:"pointer",display:"block",width:"100%",aspectRatio:"1",background:"var(--surface-2)"},cover:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center"},playCircle:{width:46,height:46,borderRadius:"50%",display:"grid",placeItems:"center",boxShadow:"0 2px 10px rgba(0,0,0,0.3)"},nowPlaying:{position:"absolute",bottom:8,left:8,display:"flex",alignItems:"center",gap:4,background:"rgba(0,0,0,0.65)",color:"#fff",fontSize:11,fontWeight:700,padding:"3px 8px",borderRadius:7},mediaBody:{padding:"12px 14px",display:"flex",alignItems:"flex-start",gap:8},mediaTitle:{flex:1,fontSize:14.5,fontWeight:600,lineHeight:1.4,minWidth:0,wordBreak:"break-word"},cardActions:{display:"flex",gap:2,flexShrink:0,marginTop:1},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},Ia=[{id:"sandstone",name:"Sandstone",description:"Warm editorial light — the original Anvil look.",dark:!1,swatch:["#F7F6F3","#4C9A6B","#26241F"],vars:{"--bg":"#F7F6F3","--surface":"#FFFFFF","--surface-2":"#FAFAF8","--hover":"#F2F1EC","--border":"#ECEAE3","--text":"#26241F","--text-2":"#6B675E","--text-3":"#9A968C","--accent":"#4C9A6B","--accent-strong":"#26241F","--accent-2":"#3A352C"}},{id:"midnight",name:"Midnight",description:"Deep low-glare dark mode for night owls and focus.",dark:!0,swatch:["#161513","#6FB58C","#ECEAE3"],vars:{"--bg":"#161513","--surface":"#211F1C","--surface-2":"#1B1A17","--hover":"#2B2924","--border":"#34312B","--text":"#ECEAE3","--text-2":"#B6B1A6","--text-3":"#8A857A","--accent":"#6FB58C","--accent-strong":"#2E6F4B","--accent-2":"#245C3E"}},{id:"blossom",name:"Blossom",description:"Soft rose & blush — gentle, warm, and feminine.",dark:!1,swatch:["#FFF5F8","#E0608E","#B23A6B"],vars:{"--bg":"#FFF5F8","--surface":"#FFFFFF","--surface-2":"#FFF0F4","--hover":"#FDE7EE","--border":"#F6D9E2","--text":"#3D2230","--text-2":"#7A5466","--text-3":"#B08799","--accent":"#E0608E","--accent-strong":"#B23A6B","--accent-2":"#9C2F5C"}},{id:"tide",name:"Tide",description:"Calm professional blues — clean and focused.",dark:!1,swatch:["#F1F6FA","#2E86C1","#1C4E73"],vars:{"--bg":"#F1F6FA","--surface":"#FFFFFF","--surface-2":"#ECF3F9","--hover":"#E2EEF6","--border":"#D5E3EE","--text":"#13283A","--text-2":"#4A6275","--text-3":"#8AA0B0","--accent":"#2E86C1","--accent-strong":"#1C4E73","--accent-2":"#163E5C"}},{id:"velocity",name:"Velocity",description:"High-energy sport — crisp slate with electric orange.",dark:!1,swatch:["#F4F5F7","#F4511E","#1F2A37"],vars:{"--bg":"#F4F5F7","--surface":"#FFFFFF","--surface-2":"#EEF0F3","--hover":"#E7EAEE","--border":"#DCE0E6","--text":"#18202B","--text-2":"#515B68","--text-3":"#8B95A1","--accent":"#F4511E","--accent-strong":"#1F2A37","--accent-2":"#16202B"}},{id:"evergreen",name:"Evergreen",description:"Earthy forest greens — grounded and natural.",dark:!1,swatch:["#F2F6F1","#3E8E52","#2A4A30"],vars:{"--bg":"#F2F6F1","--surface":"#FFFFFF","--surface-2":"#ECF2EA","--hover":"#E4EEE2","--border":"#D7E4D3","--text":"#1E2B20","--text-2":"#4F6151","--text-3":"#8AA08C","--accent":"#3E8E52","--accent-strong":"#2A4A30","--accent-2":"#213B26"}},{id:"amethyst",name:"Amethyst",description:"Premium purple & plum — elegant and refined.",dark:!1,swatch:["#F6F4FB","#7A4FE0","#3A2D5C"],vars:{"--bg":"#F6F4FB","--surface":"#FFFFFF","--surface-2":"#F1EDF9","--hover":"#EAE3F6","--border":"#DFD6F0","--text":"#241B36","--text-2":"#5A4E72","--text-3":"#9588AE","--accent":"#7A4FE0","--accent-strong":"#3A2D5C","--accent-2":"#2E2349"}}],Cc="sandstone",cp="anvil_theme",h0=t=>Ia.find(e=>e.id===t)||Ia[0];function up(){try{return localStorage.getItem(cp)||Cc}catch{return Cc}}function bo(t,e=!0){const r=h0(t),o=document.documentElement;Object.entries(r.vars).forEach(([i,l])=>o.style.setProperty(i,l)),o.style.colorScheme=r.dark?"dark":"light",o.setAttribute("data-theme",r.id);const s=document.querySelector('meta[name="theme-color"]');if(s&&s.setAttribute("content",r.vars["--surface"]),e)try{localStorage.setItem(cp,r.id)}catch{}return r.id}function y0(t=560){const[e,r]=b.useState(()=>window.innerWidth<=t);return b.useEffect(()=>{const o=()=>r(window.innerWidth<=t);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[t]),e}function v0({screens:t,order:e,hidden:r,themeId:o,currency:s,ticker:i,defaultScreen:l,onSetDefault:a,onSaveSidebar:d,onPreviewTheme:g,onCommitTheme:h,onSelectCurrency:y,onSaveTicker:f,onClose:w}){const[k,j]=b.useState("sidebar"),[I,p]=b.useState(()=>e.map(Q=>({id:Q,hidden:r.includes(Q)}))),[c,u]=b.useState(o),[v,S]=b.useState(""),[z,L]=b.useState(!1),H=y0(),[M,$]=b.useState(!!(i!=null&&i.enabled)),[C,B]=b.useState(()=>{const Q=Array.isArray(i==null?void 0:i.statements)?i.statements.slice(0,5):[];return Q.length?Q:[""]}),[x,G]=b.useState((i==null?void 0:i.speed)??60),[at,J]=b.useState((i==null?void 0:i.delay)??3),[D,F]=b.useState(!1),A=(Q,mt)=>B(bt=>bt.map((Tt,Qt)=>Qt===Q?mt:Tt)),V=()=>B(Q=>Q.length<5?[...Q,""]:Q),W=Q=>B(mt=>mt.length>1?mt.filter((bt,Tt)=>Tt!==Q):mt),R=()=>{const Q=C.map(mt=>mt.trim()).filter(Boolean).slice(0,5);f({enabled:M,statements:Q,speed:Number(x),delay:Number(at)}),F(!0),setTimeout(()=>F(!1),1500)};b.useEffect(()=>{O.getSetting("golden_music").then(Q=>S((Q==null?void 0:Q.value)||"")).catch(()=>{})},[]);const m=()=>{O.setSetting("golden_music",v.trim()).then(()=>{L(!0),setTimeout(()=>L(!1),1500)}).catch(()=>{})},N=Q=>{u(Q),g(Q)},ot=I.filter(Q=>!Q.hidden).length,et=(Q,mt)=>{const bt=Q+mt;if(bt<0||bt>=I.length)return;const Tt=[...I];[Tt[Q],Tt[bt]]=[Tt[bt],Tt[Q]],p(Tt)},ft=Q=>{const mt=I[Q];if(!mt.hidden&&ot<=1)return;const bt=[...I];bt[Q]={...mt,hidden:!mt.hidden},p(bt)},It=()=>{d(I.map(Q=>Q.id),I.filter(Q=>Q.hidden).map(Q=>Q.id))},ht=H?{...st.overlay,padding:0}:st.overlay,jt=H?{...st.modal,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"100%",borderRadius:0,border:"none"}:st.modal;return n.jsx("div",{style:ht,onClick:w,children:n.jsxs("div",{style:jt,onClick:Q=>Q.stopPropagation(),children:[n.jsxs("div",{style:st.head,children:[n.jsx("div",{style:st.title,children:"Settings"}),n.jsx("button",{onClick:w,style:st.closeBtn,children:n.jsx(kt,{size:18})})]}),n.jsxs("div",{style:st.tabs,children:[n.jsxs("button",{onClick:()=>j("sidebar"),style:{...st.tab,...k==="sidebar"?st.tabOn:{}},children:[n.jsx(ah,{size:15})," Configure sidebar"]}),n.jsxs("button",{onClick:()=>j("themes"),style:{...st.tab,...k==="themes"?st.tabOn:{}},children:[n.jsx(ch,{size:15})," Themes"]}),n.jsxs("button",{onClick:()=>j("currency"),style:{...st.tab,...k==="currency"?st.tabOn:{}},children:[n.jsx(Zf,{size:15})," Currency"]}),n.jsxs("button",{onClick:()=>j("music"),style:{...st.tab,...k==="music"?st.tabOn:{}},children:[n.jsx(Kb,{size:15})," Music"]}),n.jsxs("button",{onClick:()=>j("reminders"),style:{...st.tab,...k==="reminders"?st.tabOn:{}},children:[n.jsx(Yb,{size:15})," Reminders"]})]}),n.jsx("div",{style:st.body,children:k==="sidebar"?n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:st.hint,children:["Reorder with the arrows, hide ones you don't use, and tap ",n.jsx(di,{size:11,style:{verticalAlign:"-1px"}})," to set the screen that opens on launch."]}),n.jsx("div",{style:st.list,children:I.map((Q,mt)=>{const bt=t[Q.id],Tt=bt.icon,Qt=l===Q.id;return n.jsxs("div",{style:{...st.row,opacity:Q.hidden?.5:1,...Qt?{borderColor:"var(--accent)"}:{}},children:[n.jsx("span",{style:st.rowNum,children:mt+1}),n.jsx(Tt,{size:16}),n.jsxs("span",{style:st.rowLabel,children:[bt.label,Qt&&n.jsx("span",{style:st.defaultTag,children:"default"})]}),n.jsx("button",{onClick:()=>a(Q.id),title:Qt?"Opens on launch":"Set as default",style:{...st.iconBtn,...Qt?{color:"var(--accent)"}:{}},children:n.jsx(di,{size:15})}),n.jsx("button",{onClick:()=>ft(mt),title:Q.hidden?"Show":"Hide",style:{...st.iconBtn,...Q.hidden?{}:{color:"var(--accent)"}},children:Q.hidden?n.jsx(ma,{size:15}):n.jsx(ai,{size:15})}),n.jsx("button",{onClick:()=>et(mt,-1),disabled:mt===0,style:{...st.iconBtn,opacity:mt===0?.3:1},children:n.jsx(Gb,{size:15})}),n.jsx("button",{onClick:()=>et(mt,1),disabled:mt===I.length-1,style:{...st.iconBtn,opacity:mt===I.length-1?.3:1},children:n.jsx(zi,{size:15})})]},Q.id)})}),n.jsxs("button",{onClick:It,style:st.saveBtn,children:[n.jsx(zt,{size:15})," Save sidebar"]})]}):k==="currency"?n.jsxs(n.Fragment,{children:[n.jsx("p",{style:st.hint,children:"Choose the currency used across Vault and Worth. Applies instantly."}),n.jsx("div",{style:st.list,children:ja.map(Q=>{const mt=Q.code===s;return n.jsxs("button",{onClick:()=>y(Q.code),style:{...st.row,cursor:"pointer",textAlign:"left",width:"100%",...mt?{borderColor:"var(--accent)"}:{}},children:[n.jsx("span",{style:st.curSymbol,children:Q.symbol}),n.jsxs("span",{style:st.rowLabel,children:[Q.label," ",n.jsx("span",{style:st.curCode,children:Q.code})]}),mt&&n.jsx("span",{style:st.themeCheck,children:n.jsx(zt,{size:13})})]},Q.code)})})]}):k==="music"?n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:st.hint,children:["Paste a YouTube link to play softly while you write in the ",n.jsx("b",{children:"Golden Book"}),". It plays only on that screen (audio only)."]}),n.jsx("input",{value:v,onChange:Q=>S(Q.target.value),placeholder:"https://youtube.com/watch?v=…",style:st.musicInput}),n.jsxs("button",{onClick:m,style:st.saveBtn,children:[n.jsx(zt,{size:15})," ",z?"Saved":"Save music"]})]}):k==="reminders"?n.jsxs(n.Fragment,{children:[n.jsx("p",{style:st.hint,children:"Up to 5 reminders scroll across the top of every screen — a gentle nudge toward your goals."}),n.jsxs("button",{onClick:()=>$(Q=>!Q),style:{...st.row,cursor:"pointer",width:"100%",justifyContent:"space-between",...M?{borderColor:"var(--accent)"}:{}},children:[n.jsx("span",{style:st.rowLabel,children:"Show reminder banner"}),n.jsx("span",{style:{...st.switch,...M?st.switchOn:{}},children:M?"On":"Off"})]}),n.jsxs("div",{style:{marginTop:14},children:[n.jsxs("div",{style:st.fieldLbl,children:["Reminders (",C.filter(Q=>Q.trim()).length,"/5)"]}),C.map((Q,mt)=>n.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[n.jsx("input",{value:Q,onChange:bt=>A(mt,bt.target.value),maxLength:120,placeholder:`Reminder ${mt+1}`,style:{...st.musicInput,marginBottom:0}}),n.jsx("button",{onClick:()=>W(mt),style:st.iconBtn,title:"Remove",children:n.jsx(kt,{size:15})})]},mt)),C.length<5&&n.jsxs("button",{onClick:V,style:st.addRowBtn,children:[n.jsx(ie,{size:14})," Add reminder"]})]}),n.jsxs("div",{style:{marginTop:16},children:[n.jsxs("div",{style:st.sliderHead,children:[n.jsx("span",{style:st.fieldLbl,children:"Scroll speed"}),n.jsxs("span",{style:st.sliderVal,children:[x," px/s"]})]}),n.jsx("input",{type:"range",min:20,max:200,step:5,value:x,onChange:Q=>G(Q.target.value),style:st.range})]}),n.jsxs("div",{style:{marginTop:12},children:[n.jsxs("div",{style:st.sliderHead,children:[n.jsx("span",{style:st.fieldLbl,children:"Delay between reminders"}),n.jsxs("span",{style:st.sliderVal,children:[at,"s"]})]}),n.jsx("input",{type:"range",min:0,max:15,step:1,value:at,onChange:Q=>J(Q.target.value),style:st.range})]}),n.jsxs("button",{onClick:R,style:{...st.saveBtn,marginTop:16},children:[n.jsx(zt,{size:15})," ",D?"Saved":"Save reminders"]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:st.hint,children:["Tap a theme to preview it live, then hit ",n.jsx("b",{children:"Apply theme"})," to keep it."]}),n.jsx("div",{style:st.themeGrid,children:Ia.map(Q=>{const mt=Q.id===c;return n.jsxs("button",{onClick:()=>N(Q.id),style:{...st.themeCard,...mt?st.themeCardOn:{}},children:[n.jsxs("div",{style:st.swatchRow,children:[Q.swatch.map((bt,Tt)=>n.jsx("span",{style:{...st.swatch,background:bt}},Tt)),mt&&n.jsx("span",{style:st.themeCheck,children:n.jsx(zt,{size:13})})]}),n.jsxs("div",{style:st.themeName,children:[Q.name,Q.dark?n.jsx("span",{style:st.darkTag,children:"Dark"}):null]}),n.jsx("div",{style:st.themeDesc,children:Q.description})]},Q.id)})}),n.jsxs("button",{onClick:()=>h(c),disabled:c===o,style:{...st.saveBtn,...c===o?st.saveBtnDisabled:{}},children:[n.jsx(zt,{size:15})," ",c===o?"Theme applied":"Apply theme"]})]})})]})})}const st={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,width:460,maxWidth:"100%",maxHeight:"88vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",overflow:"hidden"},head:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 18px",borderBottom:"1px solid var(--border)",flexShrink:0},title:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},tabs:{display:"flex",flexWrap:"wrap",gap:6,padding:"12px 18px 0",flexShrink:0},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"transparent"},body:{padding:"16px 18px 20px",overflowY:"auto",overflowX:"hidden",flex:1,minHeight:0},hint:{fontSize:12.5,color:"var(--text-3)",lineHeight:1.5,margin:"0 0 14px"},list:{display:"flex",flexDirection:"column",gap:6},row:{display:"flex",alignItems:"center",gap:10,padding:"9px 11px",background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:9},rowNum:{fontSize:11,fontWeight:700,color:"var(--text-3)",width:16,textAlign:"center"},rowLabel:{flex:1,fontSize:13.5,fontWeight:500,display:"flex",alignItems:"center",gap:7},defaultTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"1px 6px",borderRadius:6},curSymbol:{width:22,textAlign:"center",fontSize:15,fontWeight:700,color:"var(--text)"},curCode:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginLeft:4},iconBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},saveBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",marginTop:16,border:"none",background:"var(--accent)",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer"},saveBtnDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"default"},musicInput:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:12},switch:{fontSize:12,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:20,padding:"3px 12px",minWidth:44,textAlign:"center"},switchOn:{background:"var(--accent)",color:"#fff"},fieldLbl:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},addRowBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},sliderHead:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},sliderVal:{fontSize:12,fontWeight:700,color:"var(--accent)"},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},themeGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},themeCard:{textAlign:"left",border:"2px solid var(--border)",background:"var(--surface-2)",borderRadius:12,padding:12,cursor:"pointer",display:"flex",flexDirection:"column",gap:6,outline:"none",WebkitTapHighlightColor:"transparent",transition:"border-color .15s ease, box-shadow .15s ease"},themeCardOn:{borderColor:"var(--accent)",boxShadow:"0 0 0 3px color-mix(in srgb, var(--accent) 25%, transparent)"},swatchRow:{display:"flex",alignItems:"center",gap:5,position:"relative"},swatch:{width:22,height:22,borderRadius:"50%",border:"1px solid rgba(0,0,0,0.08)"},themeCheck:{marginLeft:"auto",width:20,height:20,borderRadius:"50%",background:"var(--accent)",color:"#fff",display:"grid",placeItems:"center"},themeName:{fontSize:14,fontWeight:700,display:"flex",alignItems:"center",gap:6},darkTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",background:"var(--hover)",color:"var(--text-2)",padding:"1px 6px",borderRadius:6},themeDesc:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4}},x0=`
@keyframes anvilTickFloat { 0%,100% { transform: translateY(-1.5px); } 50% { transform: translateY(1.5px); } }
@keyframes anvilTickPulse { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.16); opacity: 0.85; } }
@keyframes anvilTickGlow  { 0%,100% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--accent) 45%, transparent); } 50% { box-shadow: 0 0 0 5px color-mix(in srgb, var(--accent) 0%, transparent); } }
@keyframes anvilTickShimmer { 0% { transform: translateX(-120%); } 100% { transform: translateX(320%); } }
.anvil-tick-float { animation: anvilTickFloat 3.6s ease-in-out infinite; }
.anvil-tick-pulse { animation: anvilTickPulse 2.2s ease-in-out infinite; }
.anvil-tick-glow  { animation: anvilTickGlow 2.2s ease-in-out infinite; }
.anvil-tick-shimmer { animation: anvilTickShimmer 4.2s linear infinite; }
@media (prefers-reduced-motion: reduce) {
  .anvil-tick-float, .anvil-tick-pulse, .anvil-tick-glow, .anvil-tick-shimmer { animation: none !important; }
}
`;function k0({statements:t,speed:e=60,delay:r=3}){const o=b.useMemo(()=>(t||[]).map(d=>(d||"").trim()).filter(Boolean).slice(0,5),[t]),[s,i]=b.useState(0),l=b.useRef(null),a=b.useRef(null);return b.useEffect(()=>{i(0)},[o]),b.useEffect(()=>{if(!o.length)return;const d=l.current,g=a.current;if(!d||!g)return;const h=d.offsetWidth,y=g.offsetWidth,f=Math.max(10,Number(e)||60),w=Math.max(2500,(h+y)/f*1e3),k=g.animate([{transform:`translateX(${h}px)`},{transform:`translateX(${-y}px)`}],{duration:w,easing:"linear",fill:"both"});let j;const I=()=>{j=setTimeout(()=>i(p=>(p+1)%o.length),Math.max(0,Number(r)||0)*1e3)};return k.addEventListener("finish",I),()=>{k.cancel(),k.removeEventListener("finish",I),clearTimeout(j)}},[s,o,e,r]),o.length?n.jsxs("div",{style:mn.bar,"aria-label":"Reminders",children:[n.jsx("style",{children:x0}),n.jsx("div",{className:"anvil-tick-glow",style:mn.icon,children:n.jsx("span",{className:"anvil-tick-pulse",style:{display:"grid",placeItems:"center"},children:n.jsx(Yb,{size:15})})}),n.jsxs("div",{ref:l,style:mn.viewport,children:[n.jsx("span",{className:"anvil-tick-shimmer",style:mn.shimmer}),n.jsx("div",{className:"anvil-tick-float",style:mn.floatWrap,children:n.jsx("div",{ref:a,style:mn.text,children:o[s%o.length]},s)})]})]}):null}const mn={bar:{display:"flex",alignItems:"center",height:36,flexShrink:0,overflow:"hidden",borderBottom:"1px solid var(--border)",background:"color-mix(in srgb, var(--accent) 12%, var(--surface))"},icon:{display:"grid",placeItems:"center",width:42,height:"100%",flexShrink:0,color:"#fff",background:"var(--accent)",zIndex:2},viewport:{position:"relative",flex:1,height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},shimmer:{position:"absolute",top:0,bottom:0,left:0,width:"22%",background:"linear-gradient(100deg, transparent, color-mix(in srgb, var(--accent) 22%, transparent), transparent)",pointerEvents:"none",zIndex:1},floatWrap:{display:"inline-flex",alignItems:"center",willChange:"transform"},text:{whiteSpace:"nowrap",fontSize:13.5,fontWeight:700,color:"var(--text)",letterSpacing:"0.01em",willChange:"transform",paddingLeft:4}};bo(up(),!1);const za="anvil_default_screen",Ic=()=>{try{return localStorage.getItem(za)}catch{return null}},Or={kickstart:{label:"Kickstart",icon:fh,component:l0},golden:{label:"Golden Book",icon:th,component:g0},habits:{label:"Habits",icon:yh,component:Qh},quadrant:{label:"Quadrant",icon:Vb,component:Fh},goals:{label:"Goals",icon:Sd,component:Oh},grove:{label:"Grove",icon:wh,component:My},worth:{label:"Rewards",icon:lh,component:Vy},vault:{label:"Vault",icon:Ub,component:Jy},journal:{label:"Journal",icon:Hb,component:sy},revision:{label:"Revision",icon:qb,component:hy},affirmations:{label:"Affirmations",icon:Yo,component:xy},skills:{label:"Skills",icon:eh,component:iy},spiritual:{label:"Spiritual",icon:_s,component:dy},mindscape:{label:"Mindscape",icon:nh,component:f0}},bp=["kickstart","golden","habits","quadrant","goals","grove","journal","revision","affirmations","skills","spiritual","mindscape","worth","vault"];function Ss(t){const e=bp.filter(s=>Or[s]),o=[...(Array.isArray(t)?t:[]).filter(s=>Or[s])];return e.forEach(s=>{o.includes(s)||o.push(s)}),o}function w0(){const[t,e]=b.useState(()=>window.innerWidth<720);return b.useEffect(()=>{const r=()=>e(window.innerWidth<720);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),t}function j0(){const[t,e]=b.useState(()=>{const R=Ic();return R&&Or[R]?R:"habits"}),[r,o]=b.useState(()=>Ic()||"habits"),[s,i]=b.useState(!1),[l,a]=b.useState(null),[d,g]=b.useState(!1),[h,y]=b.useState(!1),[f,w]=b.useState(up()),[k,j]=b.useState(Gn()),[I,p]=b.useState({enabled:!1,statements:[],speed:60,delay:3}),[c,u]=b.useState(()=>Ss(bp)),[v,S]=b.useState([]),z=w0(),L=b.useRef(t);b.useEffect(()=>{L.current=t},[t]),b.useEffect(()=>{if(!l)return;const R=10,m=new Set(["kickstart","mindscape"]),N=setInterval(()=>{const ot=L.current;!document.hidden&&ot&&!m.has(ot)&&O.addScreenTime(ot,R).catch(()=>{})},R*1e3);return()=>clearInterval(N)},[l]),b.useEffect(()=>{let R=!1;const m=()=>{ha(),a(null)};return window.addEventListener("anvil-unauthorized",m),Id()?O.me().then(N=>{R||a(N)}).catch(()=>{}).finally(()=>{R||g(!0)}):g(!0),()=>{R=!0,window.removeEventListener("anvil-unauthorized",m)}},[]),b.useEffect(()=>{l&&(O.getSetting("theme").then(R=>{R!=null&&R.value&&w(bo(R.value))}).catch(()=>{}),O.getSetting("currency").then(R=>{R!=null&&R.value&&j(dc(R.value))}).catch(()=>{}),O.getSetting("ticker").then(R=>{R!=null&&R.value&&p(m=>({...m,...R.value}))}).catch(()=>{}),O.getSetting("default_screen").then(R=>{if(R!=null&&R.value&&Or[R.value]){o(R.value);try{localStorage.setItem(za,R.value)}catch{}}}).catch(()=>{}),O.getSetting("sidebar_order").then(R=>{Array.isArray(R==null?void 0:R.value)&&u(Ss(R.value))}).catch(()=>{}),O.getSetting("sidebar_hidden").then(R=>{Array.isArray(R==null?void 0:R.value)&&S(R.value)}).catch(()=>{}))},[l]);function H(R){e(R),i(!1)}const M=()=>{ha(),a(null)},$=R=>{bo(R,!1)},C=R=>{w(bo(R)),O.setSetting("theme",R).catch(()=>{}),y(!1)},B=()=>{bo(f,!1),y(!1)},x=R=>{j(dc(R)),O.setSetting("currency",R).catch(()=>{})},G=R=>{p(R),O.setSetting("ticker",R).catch(()=>{})},at=R=>{o(R);try{localStorage.setItem(za,R)}catch{}O.setSetting("default_screen",R).catch(()=>{})},J=(R,m)=>{if(u(Ss(R)),S(m),y(!1),O.setSetting("sidebar_order",R).catch(()=>{}),O.setSetting("sidebar_hidden",m).catch(()=>{}),m.includes(t)){const N=Ss(R).find(ot=>!m.includes(ot));N&&e(N)}},D=c.filter(R=>!v.includes(R));if(!d)return n.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:"'Inter',system-ui,sans-serif",color:"var(--text-3)"},children:"Loading…"});if(!l)return n.jsx(Yy,{onAuthed:a});const F=Or[t],A=F.component,V=()=>n.jsx("div",{style:Dt.navItems,children:D.map(R=>{const m=Or[R];if(!m)return null;const N=m.icon,ot=t===R;return n.jsxs("button",{onClick:()=>H(R),title:m.label,style:{...Dt.navItem,...ot?Dt.navItemOn:{}},children:[n.jsx(N,{size:18}),n.jsx("span",{style:Dt.navLabel,children:m.label})]},R)})}),W=()=>n.jsxs("div",{style:Dt.footerWrap,children:[n.jsxs("button",{onClick:()=>y(!0),style:Dt.settingsBtn,title:"Settings",children:[n.jsx(Zb,{size:17}),n.jsx("span",{children:"Settings"})]}),n.jsxs("div",{style:Dt.userFooter,children:[n.jsxs("div",{style:Dt.userInfo,children:[n.jsx("div",{style:Dt.userAvatar,children:(l.name||l.email||"?").charAt(0).toUpperCase()}),n.jsxs("div",{style:{minWidth:0},children:[n.jsx("div",{style:Dt.userName,children:l.name||"You"}),n.jsx("div",{style:Dt.userEmail,children:l.email})]})]}),n.jsx("button",{onClick:M,style:Dt.logoutBtn,title:"Sign out",children:n.jsx(dh,{size:16})})]})]});return n.jsxs("div",{style:Dt.shell,children:[!z&&n.jsxs("nav",{style:Dt.nav,children:[n.jsxs("div",{style:Dt.brand,children:[n.jsx("div",{style:Dt.brandLogo,children:"B"}),n.jsx("span",{style:Dt.brandName,children:"Anvil"})]}),n.jsx(V,{}),n.jsx(W,{})]}),z&&s&&n.jsx("div",{style:Dt.overlay,onClick:()=>i(!1),children:n.jsxs("nav",{style:Dt.drawer,onClick:R=>R.stopPropagation(),children:[n.jsxs("div",{style:Dt.drawerHeader,children:[n.jsxs("div",{style:Dt.brand,children:[n.jsx("div",{style:Dt.brandLogo,children:"B"}),n.jsx("span",{style:Dt.brandName,children:"Anvil"})]}),n.jsx("button",{style:Dt.closeBtn,onClick:()=>i(!1),children:n.jsx(kt,{size:20})})]}),n.jsx(V,{}),n.jsx(W,{})]})}),n.jsxs("div",{style:Dt.content,children:[z&&n.jsxs("div",{style:Dt.topBar,children:[n.jsx("button",{style:Dt.menuBtn,onClick:()=>i(!0),children:n.jsx(jd,{size:22})}),n.jsx("span",{style:Dt.topBarTitle,children:F.label}),n.jsx("div",{style:{width:38}})]}),I.enabled&&n.jsx(k0,{statements:I.statements,speed:I.speed,delay:I.delay}),n.jsx("main",{style:Dt.main,children:n.jsx(A,{})})]}),h&&n.jsx(v0,{screens:Or,order:c,hidden:v,themeId:f,currency:k,ticker:I,defaultScreen:r,onSetDefault:at,onSaveSidebar:J,onPreviewTheme:$,onCommitTheme:C,onSelectCurrency:x,onSaveTicker:G,onClose:B})]})}const Dt={shell:{display:"flex",height:"100vh",overflow:"hidden",fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)"},nav:{width:200,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column",padding:"20px 10px",gap:2,overflowY:"auto",overflowX:"hidden"},brand:{display:"flex",alignItems:"center",gap:9,padding:"6px 10px 20px",borderBottom:"1px solid var(--border)",marginBottom:8},brandLogo:{width:30,height:30,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:14,fontWeight:800,fontFamily:"'Fraunces', Georgia, serif",flexShrink:0},brandName:{fontSize:16,fontWeight:700,letterSpacing:"-0.01em",color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},navItems:{display:"flex",flexDirection:"column",gap:2},navItem:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},navItemOn:{background:"var(--hover)",color:"var(--text)",fontWeight:700},footerWrap:{marginTop:"auto",paddingTop:8},settingsBtn:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},userFooter:{marginTop:4,paddingTop:12,borderTop:"1px solid var(--border)",display:"flex",alignItems:"center",gap:8},userInfo:{display:"flex",alignItems:"center",gap:8,flex:1,minWidth:0},userAvatar:{width:30,height:30,borderRadius:"50%",background:"#8268B0",color:"#fff",display:"grid",placeItems:"center",fontSize:13,fontWeight:700,flexShrink:0},userName:{fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},userEmail:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logoutBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",padding:7,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},navLabel:{flex:1},content:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},main:{flex:1,overflowY:"auto",overflowX:"hidden"},topBar:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"var(--surface)",borderBottom:"1px solid var(--border)",flexShrink:0},topBarTitle:{fontSize:16,fontWeight:700,color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},menuBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text)",padding:8,borderRadius:8,display:"grid",placeItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:100,display:"flex"},drawer:{width:220,background:"var(--surface)",height:"100%",display:"flex",flexDirection:"column",padding:"16px 10px",gap:2,boxShadow:"4px 0 24px rgba(0,0,0,0.12)"},drawerHeader:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:4},closeBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",padding:6,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0}};Pb(document.getElementById("root")).render(n.jsx(b.StrictMode,{children:n.jsx(j0,{})}));
