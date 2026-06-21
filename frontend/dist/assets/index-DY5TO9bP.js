(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();var Lc={exports:{}},mi={},Pc={exports:{}},Ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vo=Symbol.for("react.element"),Dp=Symbol.for("react.portal"),Rp=Symbol.for("react.fragment"),Fp=Symbol.for("react.strict_mode"),Ap=Symbol.for("react.profiler"),Mp=Symbol.for("react.provider"),Wp=Symbol.for("react.context"),_p=Symbol.for("react.forward_ref"),Lp=Symbol.for("react.suspense"),Pp=Symbol.for("react.memo"),$p=Symbol.for("react.lazy"),Vd=Symbol.iterator;function Np(t){return t===null||typeof t!="object"?null:(t=Vd&&t[Vd]||t["@@iterator"],typeof t=="function"?t:null)}var $c={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nc=Object.assign,Oc={};function Yn(t,e,r){this.props=t,this.context=e,this.refs=Oc,this.updater=r||$c}Yn.prototype.isReactComponent={};Yn.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Yn.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Hc(){}Hc.prototype=Yn.prototype;function Fa(t,e,r){this.props=t,this.context=e,this.refs=Oc,this.updater=r||$c}var Aa=Fa.prototype=new Hc;Aa.constructor=Fa;Nc(Aa,Yn.prototype);Aa.isPureReactComponent=!0;var Yd=Array.isArray,Gc=Object.prototype.hasOwnProperty,Ma={current:null},Uc={key:!0,ref:!0,__self:!0,__source:!0};function Vc(t,e,r){var o,s={},i=null,l=null;if(e!=null)for(o in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(i=""+e.key),e)Gc.call(e,o)&&!Uc.hasOwnProperty(o)&&(s[o]=e[o]);var a=arguments.length-2;if(a===1)s.children=r;else if(1<a){for(var d=Array(a),g=0;g<a;g++)d[g]=arguments[g+2];s.children=d}if(t&&t.defaultProps)for(o in a=t.defaultProps,a)s[o]===void 0&&(s[o]=a[o]);return{$$typeof:Vo,type:t,key:i,ref:l,props:s,_owner:Ma.current}}function Op(t,e){return{$$typeof:Vo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wa(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vo}function Hp(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var Qd=/\/+/g;function _i(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Hp(""+t.key):e.toString(36)}function Es(t,e,r,o,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case Vo:case Dp:l=!0}}if(l)return l=t,s=s(l),t=o===""?"."+_i(l,0):o,Yd(s)?(r="",t!=null&&(r=t.replace(Qd,"$&/")+"/"),Es(s,e,r,"",function(g){return g})):s!=null&&(Wa(s)&&(s=Op(s,r+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(Qd,"$&/")+"/")+t)),e.push(s)),1;if(l=0,o=o===""?".":o+":",Yd(t))for(var a=0;a<t.length;a++){i=t[a];var d=o+_i(i,a);l+=Es(i,e,r,d,s)}else if(d=Np(t),typeof d=="function")for(t=d.call(t),a=0;!(i=t.next()).done;)i=i.value,d=o+_i(i,a++),l+=Es(i,e,r,d,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function ts(t,e,r){if(t==null)return t;var o=[],s=0;return Es(t,o,"","",function(i){return e.call(r,i,s++)}),o}function Gp(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pe={current:null},Bs={transition:null},Up={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Bs,ReactCurrentOwner:Ma};function Yc(){throw Error("act(...) is not supported in production builds of React.")}Ct.Children={map:ts,forEach:function(t,e,r){ts(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return ts(t,function(){e++}),e},toArray:function(t){return ts(t,function(e){return e})||[]},only:function(t){if(!Wa(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ct.Component=Yn;Ct.Fragment=Rp;Ct.Profiler=Ap;Ct.PureComponent=Fa;Ct.StrictMode=Fp;Ct.Suspense=Lp;Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Up;Ct.act=Yc;Ct.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=Nc({},t.props),s=t.key,i=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,l=Ma.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(d in e)Gc.call(e,d)&&!Uc.hasOwnProperty(d)&&(o[d]=e[d]===void 0&&a!==void 0?a[d]:e[d])}var d=arguments.length-2;if(d===1)o.children=r;else if(1<d){a=Array(d);for(var g=0;g<d;g++)a[g]=arguments[g+2];o.children=a}return{$$typeof:Vo,type:t.type,key:s,ref:i,props:o,_owner:l}};Ct.createContext=function(t){return t={$$typeof:Wp,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Mp,_context:t},t.Consumer=t};Ct.createElement=Vc;Ct.createFactory=function(t){var e=Vc.bind(null,t);return e.type=t,e};Ct.createRef=function(){return{current:null}};Ct.forwardRef=function(t){return{$$typeof:_p,render:t}};Ct.isValidElement=Wa;Ct.lazy=function(t){return{$$typeof:$p,_payload:{_status:-1,_result:t},_init:Gp}};Ct.memo=function(t,e){return{$$typeof:Pp,type:t,compare:e===void 0?null:e}};Ct.startTransition=function(t){var e=Bs.transition;Bs.transition={};try{t()}finally{Bs.transition=e}};Ct.unstable_act=Yc;Ct.useCallback=function(t,e){return pe.current.useCallback(t,e)};Ct.useContext=function(t){return pe.current.useContext(t)};Ct.useDebugValue=function(){};Ct.useDeferredValue=function(t){return pe.current.useDeferredValue(t)};Ct.useEffect=function(t,e){return pe.current.useEffect(t,e)};Ct.useId=function(){return pe.current.useId()};Ct.useImperativeHandle=function(t,e,r){return pe.current.useImperativeHandle(t,e,r)};Ct.useInsertionEffect=function(t,e){return pe.current.useInsertionEffect(t,e)};Ct.useLayoutEffect=function(t,e){return pe.current.useLayoutEffect(t,e)};Ct.useMemo=function(t,e){return pe.current.useMemo(t,e)};Ct.useReducer=function(t,e,r){return pe.current.useReducer(t,e,r)};Ct.useRef=function(t){return pe.current.useRef(t)};Ct.useState=function(t){return pe.current.useState(t)};Ct.useSyncExternalStore=function(t,e,r){return pe.current.useSyncExternalStore(t,e,r)};Ct.useTransition=function(){return pe.current.useTransition()};Ct.version="18.3.1";Pc.exports=Ct;var b=Pc.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp=b,Yp=Symbol.for("react.element"),Qp=Symbol.for("react.fragment"),Kp=Object.prototype.hasOwnProperty,Xp=Vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jp={key:!0,ref:!0,__self:!0,__source:!0};function Qc(t,e,r){var o,s={},i=null,l=null;r!==void 0&&(i=""+r),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(l=e.ref);for(o in e)Kp.call(e,o)&&!Jp.hasOwnProperty(o)&&(s[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps,e)s[o]===void 0&&(s[o]=e[o]);return{$$typeof:Yp,type:t,key:i,ref:l,props:s,_owner:Xp.current}}mi.Fragment=Qp;mi.jsx=Qc;mi.jsxs=Qc;Lc.exports=mi;var n=Lc.exports,Kc={exports:{}},ze={},Xc={exports:{}},Jc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,M){var V=A.length;A.push(M);t:for(;0<V;){var W=V-1>>>1,F=A[W];if(0<s(F,M))A[W]=M,A[V]=F,V=W;else break t}}function r(A){return A.length===0?null:A[0]}function o(A){if(A.length===0)return null;var M=A[0],V=A.pop();if(V!==M){A[0]=V;t:for(var W=0,F=A.length,m=F>>>1;W<m;){var H=2*(W+1)-1,ot=A[H],q=H+1,ht=A[q];if(0>s(ot,V))q<F&&0>s(ht,ot)?(A[W]=ht,A[q]=V,W=q):(A[W]=ot,A[H]=V,W=H);else if(q<F&&0>s(ht,V))A[W]=ht,A[q]=V,W=q;else break t}}return M}function s(A,M){var V=A.sortIndex-M.sortIndex;return V!==0?V:A.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();t.unstable_now=function(){return l.now()-a}}var d=[],g=[],h=1,y=null,f=3,w=!1,k=!1,j=!1,z=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function u(A){for(var M=r(g);M!==null;){if(M.callback===null)o(g);else if(M.startTime<=A)o(g),M.sortIndex=M.expirationTime,e(d,M);else break;M=r(g)}}function v(A){if(j=!1,u(A),!k)if(r(d)!==null)k=!0,Z(S);else{var M=r(g);M!==null&&D(v,M.startTime-A)}}function S(A,M){k=!1,j&&(j=!1,p(U),U=-1),w=!0;var V=f;try{for(u(M),y=r(d);y!==null&&(!(y.expirationTime>M)||A&&!C());){var W=y.callback;if(typeof W=="function"){y.callback=null,f=y.priorityLevel;var F=W(y.expirationTime<=M);M=t.unstable_now(),typeof F=="function"?y.callback=F:y===r(d)&&o(d),u(M)}else o(d);y=r(d)}if(y!==null)var m=!0;else{var H=r(g);H!==null&&D(v,H.startTime-M),m=!1}return m}finally{y=null,f=V,w=!1}}var T=!1,$=null,U=-1,R=5,N=-1;function C(){return!(t.unstable_now()-N<R)}function E(){if($!==null){var A=t.unstable_now();N=A;var M=!0;try{M=$(!0,A)}finally{M?x():(T=!1,$=null)}}else T=!1}var x;if(typeof c=="function")x=function(){c(E)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,dt=G.port2;G.port1.onmessage=E,x=function(){dt.postMessage(null)}}else x=function(){z(E,0)};function Z(A){$=A,T||(T=!0,x())}function D(A,M){U=z(function(){A(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){k||w||(k=!0,Z(S))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(d)},t.unstable_next=function(A){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var V=f;f=M;try{return A()}finally{f=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,M){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var V=f;f=A;try{return M()}finally{f=V}},t.unstable_scheduleCallback=function(A,M,V){var W=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?W+V:W):V=W,A){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=V+F,A={id:h++,callback:M,priorityLevel:A,startTime:V,expirationTime:F,sortIndex:-1},V>W?(A.sortIndex=V,e(g,A),r(d)===null&&A===r(g)&&(j?(p(U),U=-1):j=!0,D(v,V-W))):(A.sortIndex=F,e(d,A),k||w||(k=!0,Z(S))),A},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(A){var M=f;return function(){var V=f;f=M;try{return A.apply(this,arguments)}finally{f=V}}}})(Jc);Xc.exports=Jc;var Zp=Xc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp=b,Ie=Zp;function X(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zc=new Set,Eo={};function sn(t,e){Ln(t,e),Ln(t+"Capture",e)}function Ln(t,e){for(Eo[t]=e,t=0;t<e.length;t++)Zc.add(e[t])}var br=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Il=Object.prototype.hasOwnProperty,tm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kd={},Xd={};function em(t){return Il.call(Xd,t)?!0:Il.call(Kd,t)?!1:tm.test(t)?Xd[t]=!0:(Kd[t]=!0,!1)}function rm(t,e,r,o){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function nm(t,e,r,o){if(e===null||typeof e>"u"||rm(t,e,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function me(t,e,r,o,s,i,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=l}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){oe[t]=new me(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];oe[e]=new me(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){oe[t]=new me(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){oe[t]=new me(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){oe[t]=new me(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){oe[t]=new me(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){oe[t]=new me(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){oe[t]=new me(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){oe[t]=new me(t,5,!1,t.toLowerCase(),null,!1,!1)});var _a=/[\-:]([a-z])/g;function La(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_a,La);oe[e]=new me(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_a,La);oe[e]=new me(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_a,La);oe[e]=new me(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){oe[t]=new me(t,1,!1,t.toLowerCase(),null,!1,!1)});oe.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){oe[t]=new me(t,1,!1,t.toLowerCase(),null,!0,!0)});function Pa(t,e,r,o){var s=oe.hasOwnProperty(e)?oe[e]:null;(s!==null?s.type!==0:o||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(nm(e,r,s,o)&&(r=null),o||s===null?em(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):s.mustUseProperty?t[s.propertyName]=r===null?s.type===3?!1:"":r:(e=s.attributeName,o=s.attributeNamespace,r===null?t.removeAttribute(e):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,o?t.setAttributeNS(o,e,r):t.setAttribute(e,r))))}var hr=qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,es=Symbol.for("react.element"),vn=Symbol.for("react.portal"),xn=Symbol.for("react.fragment"),$a=Symbol.for("react.strict_mode"),zl=Symbol.for("react.profiler"),qc=Symbol.for("react.provider"),tu=Symbol.for("react.context"),Na=Symbol.for("react.forward_ref"),Tl=Symbol.for("react.suspense"),El=Symbol.for("react.suspense_list"),Oa=Symbol.for("react.memo"),vr=Symbol.for("react.lazy"),eu=Symbol.for("react.offscreen"),Jd=Symbol.iterator;function eo(t){return t===null||typeof t!="object"?null:(t=Jd&&t[Jd]||t["@@iterator"],typeof t=="function"?t:null)}var Ht=Object.assign,Li;function go(t){if(Li===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);Li=e&&e[1]||""}return`
`+Li+t}var Pi=!1;function $i(t,e){if(!t||Pi)return"";Pi=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(g){var o=g}Reflect.construct(t,[],e)}else{try{e.call()}catch(g){o=g}t.call(e.prototype)}else{try{throw Error()}catch(g){o=g}t()}}catch(g){if(g&&o&&typeof g.stack=="string"){for(var s=g.stack.split(`
`),i=o.stack.split(`
`),l=s.length-1,a=i.length-1;1<=l&&0<=a&&s[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(s[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||s[l]!==i[a]){var d=`
`+s[l].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=l&&0<=a);break}}}finally{Pi=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?go(t):""}function om(t){switch(t.tag){case 5:return go(t.type);case 16:return go("Lazy");case 13:return go("Suspense");case 19:return go("SuspenseList");case 0:case 2:case 15:return t=$i(t.type,!1),t;case 11:return t=$i(t.type.render,!1),t;case 1:return t=$i(t.type,!0),t;default:return""}}function Bl(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xn:return"Fragment";case vn:return"Portal";case zl:return"Profiler";case $a:return"StrictMode";case Tl:return"Suspense";case El:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tu:return(t.displayName||"Context")+".Consumer";case qc:return(t._context.displayName||"Context")+".Provider";case Na:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Oa:return e=t.displayName||null,e!==null?e:Bl(t.type)||"Memo";case vr:e=t._payload,t=t._init;try{return Bl(t(e))}catch{}}return null}function sm(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bl(e);case 8:return e===$a?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ru(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function im(t){var e=ru(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),o=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,i=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(l){o=""+l,i.call(this,l)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function rs(t){t._valueTracker||(t._valueTracker=im(t))}function nu(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),o="";return t&&(o=ru(t)?t.checked?"true":"false":t.value),t=o,t!==r?(e.setValue(t),!0):!1}function Os(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Dl(t,e){var r=e.checked;return Ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Zd(t,e){var r=e.defaultValue==null?"":e.defaultValue,o=e.checked!=null?e.checked:e.defaultChecked;r=Mr(e.value!=null?e.value:r),t._wrapperState={initialChecked:o,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ou(t,e){e=e.checked,e!=null&&Pa(t,"checked",e,!1)}function Rl(t,e){ou(t,e);var r=Mr(e.value),o=e.type;if(r!=null)o==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(o==="submit"||o==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Fl(t,e.type,r):e.hasOwnProperty("defaultValue")&&Fl(t,e.type,Mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function qd(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var o=e.type;if(!(o!=="submit"&&o!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function Fl(t,e,r){(e!=="number"||Os(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var co=Array.isArray;function Dn(t,e,r,o){if(t=t.options,e){e={};for(var s=0;s<r.length;s++)e["$"+r[s]]=!0;for(r=0;r<t.length;r++)s=e.hasOwnProperty("$"+t[r].value),t[r].selected!==s&&(t[r].selected=s),s&&o&&(t[r].defaultSelected=!0)}else{for(r=""+Mr(r),e=null,s=0;s<t.length;s++){if(t[s].value===r){t[s].selected=!0,o&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Al(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(X(91));return Ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function tg(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(X(92));if(co(r)){if(1<r.length)throw Error(X(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:Mr(r)}}function su(t,e){var r=Mr(e.value),o=Mr(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),o!=null&&(t.defaultValue=""+o)}function eg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function iu(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ml(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?iu(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ns,lu=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,o,s){MSApp.execUnsafeLocalFunction(function(){return t(e,r,o,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ns=ns||document.createElement("div"),ns.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ns.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Bo(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lm=["Webkit","ms","Moz","O"];Object.keys(yo).forEach(function(t){lm.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),yo[e]=yo[t]})});function au(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||yo.hasOwnProperty(t)&&yo[t]?(""+e).trim():e+"px"}function du(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var o=r.indexOf("--")===0,s=au(r,e[r],o);r==="float"&&(r="cssFloat"),o?t.setProperty(r,s):t[r]=s}}var am=Ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wl(t,e){if(e){if(am[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(X(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(X(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(X(61))}if(e.style!=null&&typeof e.style!="object")throw Error(X(62))}}function _l(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ll=null;function Ha(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pl=null,Rn=null,Fn=null;function rg(t){if(t=Ko(t)){if(typeof Pl!="function")throw Error(X(280));var e=t.stateNode;e&&(e=xi(e),Pl(t.stateNode,t.type,e))}}function gu(t){Rn?Fn?Fn.push(t):Fn=[t]:Rn=t}function cu(){if(Rn){var t=Rn,e=Fn;if(Fn=Rn=null,rg(t),e)for(t=0;t<e.length;t++)rg(e[t])}}function uu(t,e){return t(e)}function bu(){}var Ni=!1;function pu(t,e,r){if(Ni)return t(e,r);Ni=!0;try{return uu(t,e,r)}finally{Ni=!1,(Rn!==null||Fn!==null)&&(bu(),cu())}}function Do(t,e){var r=t.stateNode;if(r===null)return null;var o=xi(r);if(o===null)return null;r=o[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(X(231,e,typeof r));return r}var $l=!1;if(br)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){$l=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{$l=!1}function dm(t,e,r,o,s,i,l,a,d){var g=Array.prototype.slice.call(arguments,3);try{e.apply(r,g)}catch(h){this.onError(h)}}var vo=!1,Hs=null,Gs=!1,Nl=null,gm={onError:function(t){vo=!0,Hs=t}};function cm(t,e,r,o,s,i,l,a,d){vo=!1,Hs=null,dm.apply(gm,arguments)}function um(t,e,r,o,s,i,l,a,d){if(cm.apply(this,arguments),vo){if(vo){var g=Hs;vo=!1,Hs=null}else throw Error(X(198));Gs||(Gs=!0,Nl=g)}}function ln(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function mu(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ng(t){if(ln(t)!==t)throw Error(X(188))}function bm(t){var e=t.alternate;if(!e){if(e=ln(t),e===null)throw Error(X(188));return e!==t?null:t}for(var r=t,o=e;;){var s=r.return;if(s===null)break;var i=s.alternate;if(i===null){if(o=s.return,o!==null){r=o;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===r)return ng(s),t;if(i===o)return ng(s),e;i=i.sibling}throw Error(X(188))}if(r.return!==o.return)r=s,o=i;else{for(var l=!1,a=s.child;a;){if(a===r){l=!0,r=s,o=i;break}if(a===o){l=!0,o=s,r=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===r){l=!0,r=i,o=s;break}if(a===o){l=!0,o=i,r=s;break}a=a.sibling}if(!l)throw Error(X(189))}}if(r.alternate!==o)throw Error(X(190))}if(r.tag!==3)throw Error(X(188));return r.stateNode.current===r?t:e}function fu(t){return t=bm(t),t!==null?hu(t):null}function hu(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=hu(t);if(e!==null)return e;t=t.sibling}return null}var yu=Ie.unstable_scheduleCallback,og=Ie.unstable_cancelCallback,pm=Ie.unstable_shouldYield,mm=Ie.unstable_requestPaint,Yt=Ie.unstable_now,fm=Ie.unstable_getCurrentPriorityLevel,Ga=Ie.unstable_ImmediatePriority,vu=Ie.unstable_UserBlockingPriority,Us=Ie.unstable_NormalPriority,hm=Ie.unstable_LowPriority,xu=Ie.unstable_IdlePriority,fi=null,er=null;function ym(t){if(er&&typeof er.onCommitFiberRoot=="function")try{er.onCommitFiberRoot(fi,t,void 0,(t.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:km,vm=Math.log,xm=Math.LN2;function km(t){return t>>>=0,t===0?32:31-(vm(t)/xm|0)|0}var os=64,ss=4194304;function uo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vs(t,e){var r=t.pendingLanes;if(r===0)return 0;var o=0,s=t.suspendedLanes,i=t.pingedLanes,l=r&268435455;if(l!==0){var a=l&~s;a!==0?o=uo(a):(i&=l,i!==0&&(o=uo(i)))}else l=r&~s,l!==0?o=uo(l):i!==0&&(o=uo(i));if(o===0)return 0;if(e!==0&&e!==o&&!(e&s)&&(s=o&-o,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(o&4&&(o|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=o;0<e;)r=31-He(e),s=1<<r,o|=t[r],e&=~s;return o}function wm(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jm(t,e){for(var r=t.suspendedLanes,o=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var l=31-He(i),a=1<<l,d=s[l];d===-1?(!(a&r)||a&o)&&(s[l]=wm(a,e)):d<=e&&(t.expiredLanes|=a),i&=~a}}function Ol(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ku(){var t=os;return os<<=1,!(os&4194240)&&(os=64),t}function Oi(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function Yo(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-He(e),t[e]=r}function Sm(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var o=t.eventTimes;for(t=t.expirationTimes;0<r;){var s=31-He(r),i=1<<s;e[s]=0,o[s]=-1,t[s]=-1,r&=~i}}function Ua(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var o=31-He(r),s=1<<o;s&e|t[o]&e&&(t[o]|=e),r&=~s}}var Rt=0;function wu(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ju,Va,Su,Cu,Iu,Hl=!1,is=[],zr=null,Tr=null,Er=null,Ro=new Map,Fo=new Map,wr=[],Cm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sg(t,e){switch(t){case"focusin":case"focusout":zr=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":Ro.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(e.pointerId)}}function no(t,e,r,o,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:r,eventSystemFlags:o,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Ko(e),e!==null&&Va(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function Im(t,e,r,o,s){switch(e){case"focusin":return zr=no(zr,t,e,r,o,s),!0;case"dragenter":return Tr=no(Tr,t,e,r,o,s),!0;case"mouseover":return Er=no(Er,t,e,r,o,s),!0;case"pointerover":var i=s.pointerId;return Ro.set(i,no(Ro.get(i)||null,t,e,r,o,s)),!0;case"gotpointercapture":return i=s.pointerId,Fo.set(i,no(Fo.get(i)||null,t,e,r,o,s)),!0}return!1}function zu(t){var e=Vr(t.target);if(e!==null){var r=ln(e);if(r!==null){if(e=r.tag,e===13){if(e=mu(r),e!==null){t.blockedOn=e,Iu(t.priority,function(){Su(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ds(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=Gl(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);Ll=o,r.target.dispatchEvent(o),Ll=null}else return e=Ko(r),e!==null&&Va(e),t.blockedOn=r,!1;e.shift()}return!0}function ig(t,e,r){Ds(t)&&r.delete(e)}function zm(){Hl=!1,zr!==null&&Ds(zr)&&(zr=null),Tr!==null&&Ds(Tr)&&(Tr=null),Er!==null&&Ds(Er)&&(Er=null),Ro.forEach(ig),Fo.forEach(ig)}function oo(t,e){t.blockedOn===e&&(t.blockedOn=null,Hl||(Hl=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,zm)))}function Ao(t){function e(s){return oo(s,t)}if(0<is.length){oo(is[0],t);for(var r=1;r<is.length;r++){var o=is[r];o.blockedOn===t&&(o.blockedOn=null)}}for(zr!==null&&oo(zr,t),Tr!==null&&oo(Tr,t),Er!==null&&oo(Er,t),Ro.forEach(e),Fo.forEach(e),r=0;r<wr.length;r++)o=wr[r],o.blockedOn===t&&(o.blockedOn=null);for(;0<wr.length&&(r=wr[0],r.blockedOn===null);)zu(r),r.blockedOn===null&&wr.shift()}var An=hr.ReactCurrentBatchConfig,Ys=!0;function Tm(t,e,r,o){var s=Rt,i=An.transition;An.transition=null;try{Rt=1,Ya(t,e,r,o)}finally{Rt=s,An.transition=i}}function Em(t,e,r,o){var s=Rt,i=An.transition;An.transition=null;try{Rt=4,Ya(t,e,r,o)}finally{Rt=s,An.transition=i}}function Ya(t,e,r,o){if(Ys){var s=Gl(t,e,r,o);if(s===null)Zi(t,e,o,Qs,r),sg(t,o);else if(Im(s,t,e,r,o))o.stopPropagation();else if(sg(t,o),e&4&&-1<Cm.indexOf(t)){for(;s!==null;){var i=Ko(s);if(i!==null&&ju(i),i=Gl(t,e,r,o),i===null&&Zi(t,e,o,Qs,r),i===s)break;s=i}s!==null&&o.stopPropagation()}else Zi(t,e,o,null,r)}}var Qs=null;function Gl(t,e,r,o){if(Qs=null,t=Ha(o),t=Vr(t),t!==null)if(e=ln(t),e===null)t=null;else if(r=e.tag,r===13){if(t=mu(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Qs=t,null}function Tu(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fm()){case Ga:return 1;case vu:return 4;case Us:case hm:return 16;case xu:return 536870912;default:return 16}default:return 16}}var Cr=null,Qa=null,Rs=null;function Eu(){if(Rs)return Rs;var t,e=Qa,r=e.length,o,s="value"in Cr?Cr.value:Cr.textContent,i=s.length;for(t=0;t<r&&e[t]===s[t];t++);var l=r-t;for(o=1;o<=l&&e[r-o]===s[i-o];o++);return Rs=s.slice(t,1<o?1-o:void 0)}function Fs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ls(){return!0}function lg(){return!1}function Te(t){function e(r,o,s,i,l){this._reactName=r,this._targetInst=s,this.type=o,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(r=t[a],this[a]=r?r(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ls:lg,this.isPropagationStopped=lg,this}return Ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ls)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ls)},persist:function(){},isPersistent:ls}),e}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ka=Te(Qn),Qo=Ht({},Qn,{view:0,detail:0}),Bm=Te(Qo),Hi,Gi,so,hi=Ht({},Qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xa,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==so&&(so&&t.type==="mousemove"?(Hi=t.screenX-so.screenX,Gi=t.screenY-so.screenY):Gi=Hi=0,so=t),Hi)},movementY:function(t){return"movementY"in t?t.movementY:Gi}}),ag=Te(hi),Dm=Ht({},hi,{dataTransfer:0}),Rm=Te(Dm),Fm=Ht({},Qo,{relatedTarget:0}),Ui=Te(Fm),Am=Ht({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Mm=Te(Am),Wm=Ht({},Qn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_m=Te(Wm),Lm=Ht({},Qn,{data:0}),dg=Te(Lm),Pm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$m={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Om(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Nm[t])?!!e[t]:!1}function Xa(){return Om}var Hm=Ht({},Qo,{key:function(t){if(t.key){var e=Pm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$m[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xa,charCode:function(t){return t.type==="keypress"?Fs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gm=Te(Hm),Um=Ht({},hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gg=Te(Um),Vm=Ht({},Qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xa}),Ym=Te(Vm),Qm=Ht({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Km=Te(Qm),Xm=Ht({},hi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Jm=Te(Xm),Zm=[9,13,27,32],Ja=br&&"CompositionEvent"in window,xo=null;br&&"documentMode"in document&&(xo=document.documentMode);var qm=br&&"TextEvent"in window&&!xo,Bu=br&&(!Ja||xo&&8<xo&&11>=xo),cg=" ",ug=!1;function Du(t,e){switch(t){case"keyup":return Zm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ru(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var kn=!1;function tf(t,e){switch(t){case"compositionend":return Ru(e);case"keypress":return e.which!==32?null:(ug=!0,cg);case"textInput":return t=e.data,t===cg&&ug?null:t;default:return null}}function ef(t,e){if(kn)return t==="compositionend"||!Ja&&Du(t,e)?(t=Eu(),Rs=Qa=Cr=null,kn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bu&&e.locale!=="ko"?null:e.data;default:return null}}var rf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!rf[t.type]:e==="textarea"}function Fu(t,e,r,o){gu(o),e=Ks(e,"onChange"),0<e.length&&(r=new Ka("onChange","change",null,r,o),t.push({event:r,listeners:e}))}var ko=null,Mo=null;function nf(t){Gu(t,0)}function yi(t){var e=Sn(t);if(nu(e))return t}function of(t,e){if(t==="change")return e}var Au=!1;if(br){var Vi;if(br){var Yi="oninput"in document;if(!Yi){var pg=document.createElement("div");pg.setAttribute("oninput","return;"),Yi=typeof pg.oninput=="function"}Vi=Yi}else Vi=!1;Au=Vi&&(!document.documentMode||9<document.documentMode)}function mg(){ko&&(ko.detachEvent("onpropertychange",Mu),Mo=ko=null)}function Mu(t){if(t.propertyName==="value"&&yi(Mo)){var e=[];Fu(e,Mo,t,Ha(t)),pu(nf,e)}}function sf(t,e,r){t==="focusin"?(mg(),ko=e,Mo=r,ko.attachEvent("onpropertychange",Mu)):t==="focusout"&&mg()}function lf(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yi(Mo)}function af(t,e){if(t==="click")return yi(e)}function df(t,e){if(t==="input"||t==="change")return yi(e)}function gf(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ue=typeof Object.is=="function"?Object.is:gf;function Wo(t,e){if(Ue(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),o=Object.keys(e);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var s=r[o];if(!Il.call(e,s)||!Ue(t[s],e[s]))return!1}return!0}function fg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hg(t,e){var r=fg(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=e&&o>=e)return{node:r,offset:e-t};t=o}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=fg(r)}}function Wu(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Wu(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _u(){for(var t=window,e=Os();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=Os(t.document)}return e}function Za(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function cf(t){var e=_u(),r=t.focusedElem,o=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&Wu(r.ownerDocument.documentElement,r)){if(o!==null&&Za(r)){if(e=o.start,t=o.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=r.textContent.length,i=Math.min(o.start,s);o=o.end===void 0?i:Math.min(o.end,s),!t.extend&&i>o&&(s=o,o=i,i=s),s=hg(r,i);var l=hg(r,o);s&&l&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>o?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var uf=br&&"documentMode"in document&&11>=document.documentMode,wn=null,Ul=null,wo=null,Vl=!1;function yg(t,e,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Vl||wn==null||wn!==Os(o)||(o=wn,"selectionStart"in o&&Za(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),wo&&Wo(wo,o)||(wo=o,o=Ks(Ul,"onSelect"),0<o.length&&(e=new Ka("onSelect","select",null,e,r),t.push({event:e,listeners:o}),e.target=wn)))}function as(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var jn={animationend:as("Animation","AnimationEnd"),animationiteration:as("Animation","AnimationIteration"),animationstart:as("Animation","AnimationStart"),transitionend:as("Transition","TransitionEnd")},Qi={},Lu={};br&&(Lu=document.createElement("div").style,"AnimationEvent"in window||(delete jn.animationend.animation,delete jn.animationiteration.animation,delete jn.animationstart.animation),"TransitionEvent"in window||delete jn.transitionend.transition);function vi(t){if(Qi[t])return Qi[t];if(!jn[t])return t;var e=jn[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in Lu)return Qi[t]=e[r];return t}var Pu=vi("animationend"),$u=vi("animationiteration"),Nu=vi("animationstart"),Ou=vi("transitionend"),Hu=new Map,vg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(t,e){Hu.set(t,e),sn(e,[t])}for(var Ki=0;Ki<vg.length;Ki++){var Xi=vg[Ki],bf=Xi.toLowerCase(),pf=Xi[0].toUpperCase()+Xi.slice(1);_r(bf,"on"+pf)}_r(Pu,"onAnimationEnd");_r($u,"onAnimationIteration");_r(Nu,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(Ou,"onTransitionEnd");Ln("onMouseEnter",["mouseout","mouseover"]);Ln("onMouseLeave",["mouseout","mouseover"]);Ln("onPointerEnter",["pointerout","pointerover"]);Ln("onPointerLeave",["pointerout","pointerover"]);sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));sn("onBeforeInput",["compositionend","keypress","textInput","paste"]);sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));function xg(t,e,r){var o=t.type||"unknown-event";t.currentTarget=r,um(o,e,void 0,t),t.currentTarget=null}function Gu(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],s=o.event;o=o.listeners;t:{var i=void 0;if(e)for(var l=o.length-1;0<=l;l--){var a=o[l],d=a.instance,g=a.currentTarget;if(a=a.listener,d!==i&&s.isPropagationStopped())break t;xg(s,a,g),i=d}else for(l=0;l<o.length;l++){if(a=o[l],d=a.instance,g=a.currentTarget,a=a.listener,d!==i&&s.isPropagationStopped())break t;xg(s,a,g),i=d}}}if(Gs)throw t=Nl,Gs=!1,Nl=null,t}function Wt(t,e){var r=e[Jl];r===void 0&&(r=e[Jl]=new Set);var o=t+"__bubble";r.has(o)||(Uu(e,t,2,!1),r.add(o))}function Ji(t,e,r){var o=0;e&&(o|=4),Uu(r,t,o,e)}var ds="_reactListening"+Math.random().toString(36).slice(2);function _o(t){if(!t[ds]){t[ds]=!0,Zc.forEach(function(r){r!=="selectionchange"&&(mf.has(r)||Ji(r,!1,t),Ji(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ds]||(e[ds]=!0,Ji("selectionchange",!1,e))}}function Uu(t,e,r,o){switch(Tu(e)){case 1:var s=Tm;break;case 4:s=Em;break;default:s=Ya}r=s.bind(null,e,r,t),s=void 0,!$l||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),o?s!==void 0?t.addEventListener(e,r,{capture:!0,passive:s}):t.addEventListener(e,r,!0):s!==void 0?t.addEventListener(e,r,{passive:s}):t.addEventListener(e,r,!1)}function Zi(t,e,r,o,s){var i=o;if(!(e&1)&&!(e&2)&&o!==null)t:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var a=o.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(l===4)for(l=o.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===s||d.nodeType===8&&d.parentNode===s))return;l=l.return}for(;a!==null;){if(l=Vr(a),l===null)return;if(d=l.tag,d===5||d===6){o=i=l;continue t}a=a.parentNode}}o=o.return}pu(function(){var g=i,h=Ha(r),y=[];t:{var f=Hu.get(t);if(f!==void 0){var w=Ka,k=t;switch(t){case"keypress":if(Fs(r)===0)break t;case"keydown":case"keyup":w=Gm;break;case"focusin":k="focus",w=Ui;break;case"focusout":k="blur",w=Ui;break;case"beforeblur":case"afterblur":w=Ui;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ag;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Rm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Ym;break;case Pu:case $u:case Nu:w=Mm;break;case Ou:w=Km;break;case"scroll":w=Bm;break;case"wheel":w=Jm;break;case"copy":case"cut":case"paste":w=_m;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=gg}var j=(e&4)!==0,z=!j&&t==="scroll",p=j?f!==null?f+"Capture":null:f;j=[];for(var c=g,u;c!==null;){u=c;var v=u.stateNode;if(u.tag===5&&v!==null&&(u=v,p!==null&&(v=Do(c,p),v!=null&&j.push(Lo(c,v,u)))),z)break;c=c.return}0<j.length&&(f=new w(f,k,null,r,h),y.push({event:f,listeners:j}))}}if(!(e&7)){t:{if(f=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",f&&r!==Ll&&(k=r.relatedTarget||r.fromElement)&&(Vr(k)||k[pr]))break t;if((w||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,w?(k=r.relatedTarget||r.toElement,w=g,k=k?Vr(k):null,k!==null&&(z=ln(k),k!==z||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=g),w!==k)){if(j=ag,v="onMouseLeave",p="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(j=gg,v="onPointerLeave",p="onPointerEnter",c="pointer"),z=w==null?f:Sn(w),u=k==null?f:Sn(k),f=new j(v,c+"leave",w,r,h),f.target=z,f.relatedTarget=u,v=null,Vr(h)===g&&(j=new j(p,c+"enter",k,r,h),j.target=u,j.relatedTarget=z,v=j),z=v,w&&k)e:{for(j=w,p=k,c=0,u=j;u;u=pn(u))c++;for(u=0,v=p;v;v=pn(v))u++;for(;0<c-u;)j=pn(j),c--;for(;0<u-c;)p=pn(p),u--;for(;c--;){if(j===p||p!==null&&j===p.alternate)break e;j=pn(j),p=pn(p)}j=null}else j=null;w!==null&&kg(y,f,w,j,!1),k!==null&&z!==null&&kg(y,z,k,j,!0)}}t:{if(f=g?Sn(g):window,w=f.nodeName&&f.nodeName.toLowerCase(),w==="select"||w==="input"&&f.type==="file")var S=of;else if(bg(f))if(Au)S=df;else{S=lf;var T=sf}else(w=f.nodeName)&&w.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=af);if(S&&(S=S(t,g))){Fu(y,S,r,h);break t}T&&T(t,f,g),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Fl(f,"number",f.value)}switch(T=g?Sn(g):window,t){case"focusin":(bg(T)||T.contentEditable==="true")&&(wn=T,Ul=g,wo=null);break;case"focusout":wo=Ul=wn=null;break;case"mousedown":Vl=!0;break;case"contextmenu":case"mouseup":case"dragend":Vl=!1,yg(y,r,h);break;case"selectionchange":if(uf)break;case"keydown":case"keyup":yg(y,r,h)}var $;if(Ja)t:{switch(t){case"compositionstart":var U="onCompositionStart";break t;case"compositionend":U="onCompositionEnd";break t;case"compositionupdate":U="onCompositionUpdate";break t}U=void 0}else kn?Du(t,r)&&(U="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(U="onCompositionStart");U&&(Bu&&r.locale!=="ko"&&(kn||U!=="onCompositionStart"?U==="onCompositionEnd"&&kn&&($=Eu()):(Cr=h,Qa="value"in Cr?Cr.value:Cr.textContent,kn=!0)),T=Ks(g,U),0<T.length&&(U=new dg(U,t,null,r,h),y.push({event:U,listeners:T}),$?U.data=$:($=Ru(r),$!==null&&(U.data=$)))),($=qm?tf(t,r):ef(t,r))&&(g=Ks(g,"onBeforeInput"),0<g.length&&(h=new dg("onBeforeInput","beforeinput",null,r,h),y.push({event:h,listeners:g}),h.data=$))}Gu(y,e)})}function Lo(t,e,r){return{instance:t,listener:e,currentTarget:r}}function Ks(t,e){for(var r=e+"Capture",o=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Do(t,r),i!=null&&o.unshift(Lo(t,i,s)),i=Do(t,e),i!=null&&o.push(Lo(t,i,s))),t=t.return}return o}function pn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kg(t,e,r,o,s){for(var i=e._reactName,l=[];r!==null&&r!==o;){var a=r,d=a.alternate,g=a.stateNode;if(d!==null&&d===o)break;a.tag===5&&g!==null&&(a=g,s?(d=Do(r,i),d!=null&&l.unshift(Lo(r,d,a))):s||(d=Do(r,i),d!=null&&l.push(Lo(r,d,a)))),r=r.return}l.length!==0&&t.push({event:e,listeners:l})}var ff=/\r\n?/g,hf=/\u0000|\uFFFD/g;function wg(t){return(typeof t=="string"?t:""+t).replace(ff,`
`).replace(hf,"")}function gs(t,e,r){if(e=wg(e),wg(t)!==e&&r)throw Error(X(425))}function Xs(){}var Yl=null,Ql=null;function Kl(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xl=typeof setTimeout=="function"?setTimeout:void 0,yf=typeof clearTimeout=="function"?clearTimeout:void 0,jg=typeof Promise=="function"?Promise:void 0,vf=typeof queueMicrotask=="function"?queueMicrotask:typeof jg<"u"?function(t){return jg.resolve(null).then(t).catch(xf)}:Xl;function xf(t){setTimeout(function(){throw t})}function qi(t,e){var r=e,o=0;do{var s=r.nextSibling;if(t.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(o===0){t.removeChild(s),Ao(e);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=s}while(r);Ao(e)}function Br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Sg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var Kn=Math.random().toString(36).slice(2),tr="__reactFiber$"+Kn,Po="__reactProps$"+Kn,pr="__reactContainer$"+Kn,Jl="__reactEvents$"+Kn,kf="__reactListeners$"+Kn,wf="__reactHandles$"+Kn;function Vr(t){var e=t[tr];if(e)return e;for(var r=t.parentNode;r;){if(e=r[pr]||r[tr]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=Sg(t);t!==null;){if(r=t[tr])return r;t=Sg(t)}return e}t=r,r=t.parentNode}return null}function Ko(t){return t=t[tr]||t[pr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Sn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(X(33))}function xi(t){return t[Po]||null}var Zl=[],Cn=-1;function Lr(t){return{current:t}}function _t(t){0>Cn||(t.current=Zl[Cn],Zl[Cn]=null,Cn--)}function At(t,e){Cn++,Zl[Cn]=t.current,t.current=e}var Wr={},ce=Lr(Wr),ye=Lr(!1),Zr=Wr;function Pn(t,e){var r=t.type.contextTypes;if(!r)return Wr;var o=t.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===e)return o.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in r)s[i]=e[i];return o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function ve(t){return t=t.childContextTypes,t!=null}function Js(){_t(ye),_t(ce)}function Cg(t,e,r){if(ce.current!==Wr)throw Error(X(168));At(ce,e),At(ye,r)}function Vu(t,e,r){var o=t.stateNode;if(e=e.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var s in o)if(!(s in e))throw Error(X(108,sm(t)||"Unknown",s));return Ht({},r,o)}function Zs(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Wr,Zr=ce.current,At(ce,t),At(ye,ye.current),!0}function Ig(t,e,r){var o=t.stateNode;if(!o)throw Error(X(169));r?(t=Vu(t,e,Zr),o.__reactInternalMemoizedMergedChildContext=t,_t(ye),_t(ce),At(ce,t)):_t(ye),At(ye,r)}var dr=null,ki=!1,tl=!1;function Yu(t){dr===null?dr=[t]:dr.push(t)}function jf(t){ki=!0,Yu(t)}function Pr(){if(!tl&&dr!==null){tl=!0;var t=0,e=Rt;try{var r=dr;for(Rt=1;t<r.length;t++){var o=r[t];do o=o(!0);while(o!==null)}dr=null,ki=!1}catch(s){throw dr!==null&&(dr=dr.slice(t+1)),yu(Ga,Pr),s}finally{Rt=e,tl=!1}}return null}var In=[],zn=0,qs=null,ti=0,Be=[],De=0,qr=null,gr=1,cr="";function Hr(t,e){In[zn++]=ti,In[zn++]=qs,qs=t,ti=e}function Qu(t,e,r){Be[De++]=gr,Be[De++]=cr,Be[De++]=qr,qr=t;var o=gr;t=cr;var s=32-He(o)-1;o&=~(1<<s),r+=1;var i=32-He(e)+s;if(30<i){var l=s-s%5;i=(o&(1<<l)-1).toString(32),o>>=l,s-=l,gr=1<<32-He(e)+s|r<<s|o,cr=i+t}else gr=1<<i|r<<s|o,cr=t}function qa(t){t.return!==null&&(Hr(t,1),Qu(t,1,0))}function td(t){for(;t===qs;)qs=In[--zn],In[zn]=null,ti=In[--zn],In[zn]=null;for(;t===qr;)qr=Be[--De],Be[De]=null,cr=Be[--De],Be[De]=null,gr=Be[--De],Be[De]=null}var Ce=null,Se=null,Pt=!1,Oe=null;function Ku(t,e){var r=Re(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function zg(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ce=t,Se=Br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ce=t,Se=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=qr!==null?{id:gr,overflow:cr}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=Re(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,Ce=t,Se=null,!0):!1;default:return!1}}function ql(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ta(t){if(Pt){var e=Se;if(e){var r=e;if(!zg(t,e)){if(ql(t))throw Error(X(418));e=Br(r.nextSibling);var o=Ce;e&&zg(t,e)?Ku(o,r):(t.flags=t.flags&-4097|2,Pt=!1,Ce=t)}}else{if(ql(t))throw Error(X(418));t.flags=t.flags&-4097|2,Pt=!1,Ce=t}}}function Tg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ce=t}function cs(t){if(t!==Ce)return!1;if(!Pt)return Tg(t),Pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Kl(t.type,t.memoizedProps)),e&&(e=Se)){if(ql(t))throw Xu(),Error(X(418));for(;e;)Ku(t,e),e=Br(e.nextSibling)}if(Tg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(X(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){Se=Br(t.nextSibling);break t}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}Se=null}}else Se=Ce?Br(t.stateNode.nextSibling):null;return!0}function Xu(){for(var t=Se;t;)t=Br(t.nextSibling)}function $n(){Se=Ce=null,Pt=!1}function ed(t){Oe===null?Oe=[t]:Oe.push(t)}var Sf=hr.ReactCurrentBatchConfig;function io(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(X(309));var o=r.stateNode}if(!o)throw Error(X(147,t));var s=o,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(l){var a=s.refs;l===null?delete a[i]:a[i]=l},e._stringRef=i,e)}if(typeof t!="string")throw Error(X(284));if(!r._owner)throw Error(X(290,t))}return t}function us(t,e){throw t=Object.prototype.toString.call(e),Error(X(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Eg(t){var e=t._init;return e(t._payload)}function Ju(t){function e(p,c){if(t){var u=p.deletions;u===null?(p.deletions=[c],p.flags|=16):u.push(c)}}function r(p,c){if(!t)return null;for(;c!==null;)e(p,c),c=c.sibling;return null}function o(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function s(p,c){return p=Ar(p,c),p.index=0,p.sibling=null,p}function i(p,c,u){return p.index=u,t?(u=p.alternate,u!==null?(u=u.index,u<c?(p.flags|=2,c):u):(p.flags|=2,c)):(p.flags|=1048576,c)}function l(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,c,u,v){return c===null||c.tag!==6?(c=ll(u,p.mode,v),c.return=p,c):(c=s(c,u),c.return=p,c)}function d(p,c,u,v){var S=u.type;return S===xn?h(p,c,u.props.children,v,u.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===vr&&Eg(S)===c.type)?(v=s(c,u.props),v.ref=io(p,c,u),v.return=p,v):(v=$s(u.type,u.key,u.props,null,p.mode,v),v.ref=io(p,c,u),v.return=p,v)}function g(p,c,u,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==u.containerInfo||c.stateNode.implementation!==u.implementation?(c=al(u,p.mode,v),c.return=p,c):(c=s(c,u.children||[]),c.return=p,c)}function h(p,c,u,v,S){return c===null||c.tag!==7?(c=Jr(u,p.mode,v,S),c.return=p,c):(c=s(c,u),c.return=p,c)}function y(p,c,u){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ll(""+c,p.mode,u),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case es:return u=$s(c.type,c.key,c.props,null,p.mode,u),u.ref=io(p,null,c),u.return=p,u;case vn:return c=al(c,p.mode,u),c.return=p,c;case vr:var v=c._init;return y(p,v(c._payload),u)}if(co(c)||eo(c))return c=Jr(c,p.mode,u,null),c.return=p,c;us(p,c)}return null}function f(p,c,u,v){var S=c!==null?c.key:null;if(typeof u=="string"&&u!==""||typeof u=="number")return S!==null?null:a(p,c,""+u,v);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case es:return u.key===S?d(p,c,u,v):null;case vn:return u.key===S?g(p,c,u,v):null;case vr:return S=u._init,f(p,c,S(u._payload),v)}if(co(u)||eo(u))return S!==null?null:h(p,c,u,v,null);us(p,u)}return null}function w(p,c,u,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(u)||null,a(c,p,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case es:return p=p.get(v.key===null?u:v.key)||null,d(c,p,v,S);case vn:return p=p.get(v.key===null?u:v.key)||null,g(c,p,v,S);case vr:var T=v._init;return w(p,c,u,T(v._payload),S)}if(co(v)||eo(v))return p=p.get(u)||null,h(c,p,v,S,null);us(c,v)}return null}function k(p,c,u,v){for(var S=null,T=null,$=c,U=c=0,R=null;$!==null&&U<u.length;U++){$.index>U?(R=$,$=null):R=$.sibling;var N=f(p,$,u[U],v);if(N===null){$===null&&($=R);break}t&&$&&N.alternate===null&&e(p,$),c=i(N,c,U),T===null?S=N:T.sibling=N,T=N,$=R}if(U===u.length)return r(p,$),Pt&&Hr(p,U),S;if($===null){for(;U<u.length;U++)$=y(p,u[U],v),$!==null&&(c=i($,c,U),T===null?S=$:T.sibling=$,T=$);return Pt&&Hr(p,U),S}for($=o(p,$);U<u.length;U++)R=w($,p,U,u[U],v),R!==null&&(t&&R.alternate!==null&&$.delete(R.key===null?U:R.key),c=i(R,c,U),T===null?S=R:T.sibling=R,T=R);return t&&$.forEach(function(C){return e(p,C)}),Pt&&Hr(p,U),S}function j(p,c,u,v){var S=eo(u);if(typeof S!="function")throw Error(X(150));if(u=S.call(u),u==null)throw Error(X(151));for(var T=S=null,$=c,U=c=0,R=null,N=u.next();$!==null&&!N.done;U++,N=u.next()){$.index>U?(R=$,$=null):R=$.sibling;var C=f(p,$,N.value,v);if(C===null){$===null&&($=R);break}t&&$&&C.alternate===null&&e(p,$),c=i(C,c,U),T===null?S=C:T.sibling=C,T=C,$=R}if(N.done)return r(p,$),Pt&&Hr(p,U),S;if($===null){for(;!N.done;U++,N=u.next())N=y(p,N.value,v),N!==null&&(c=i(N,c,U),T===null?S=N:T.sibling=N,T=N);return Pt&&Hr(p,U),S}for($=o(p,$);!N.done;U++,N=u.next())N=w($,p,U,N.value,v),N!==null&&(t&&N.alternate!==null&&$.delete(N.key===null?U:N.key),c=i(N,c,U),T===null?S=N:T.sibling=N,T=N);return t&&$.forEach(function(E){return e(p,E)}),Pt&&Hr(p,U),S}function z(p,c,u,v){if(typeof u=="object"&&u!==null&&u.type===xn&&u.key===null&&(u=u.props.children),typeof u=="object"&&u!==null){switch(u.$$typeof){case es:t:{for(var S=u.key,T=c;T!==null;){if(T.key===S){if(S=u.type,S===xn){if(T.tag===7){r(p,T.sibling),c=s(T,u.props.children),c.return=p,p=c;break t}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===vr&&Eg(S)===T.type){r(p,T.sibling),c=s(T,u.props),c.ref=io(p,T,u),c.return=p,p=c;break t}r(p,T);break}else e(p,T);T=T.sibling}u.type===xn?(c=Jr(u.props.children,p.mode,v,u.key),c.return=p,p=c):(v=$s(u.type,u.key,u.props,null,p.mode,v),v.ref=io(p,c,u),v.return=p,p=v)}return l(p);case vn:t:{for(T=u.key;c!==null;){if(c.key===T)if(c.tag===4&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){r(p,c.sibling),c=s(c,u.children||[]),c.return=p,p=c;break t}else{r(p,c);break}else e(p,c);c=c.sibling}c=al(u,p.mode,v),c.return=p,p=c}return l(p);case vr:return T=u._init,z(p,c,T(u._payload),v)}if(co(u))return k(p,c,u,v);if(eo(u))return j(p,c,u,v);us(p,u)}return typeof u=="string"&&u!==""||typeof u=="number"?(u=""+u,c!==null&&c.tag===6?(r(p,c.sibling),c=s(c,u),c.return=p,p=c):(r(p,c),c=ll(u,p.mode,v),c.return=p,p=c),l(p)):r(p,c)}return z}var Nn=Ju(!0),Zu=Ju(!1),ei=Lr(null),ri=null,Tn=null,rd=null;function nd(){rd=Tn=ri=null}function od(t){var e=ei.current;_t(ei),t._currentValue=e}function ea(t,e,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===r)break;t=t.return}}function Mn(t,e){ri=t,rd=Tn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(he=!0),t.firstContext=null)}function Ae(t){var e=t._currentValue;if(rd!==t)if(t={context:t,memoizedValue:e,next:null},Tn===null){if(ri===null)throw Error(X(308));Tn=t,ri.dependencies={lanes:0,firstContext:t}}else Tn=Tn.next=t;return e}var Yr=null;function sd(t){Yr===null?Yr=[t]:Yr.push(t)}function qu(t,e,r,o){var s=e.interleaved;return s===null?(r.next=r,sd(e)):(r.next=s.next,s.next=r),e.interleaved=r,mr(t,o)}function mr(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var xr=!1;function id(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tb(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ur(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Dr(t,e,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,Et&2){var s=o.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),o.pending=e,mr(t,r)}return s=o.interleaved,s===null?(e.next=e,sd(o)):(e.next=s.next,s.next=e),o.interleaved=e,mr(t,r)}function As(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var o=e.lanes;o&=t.pendingLanes,r|=o,e.lanes=r,Ua(t,r)}}function Bg(t,e){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var s=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?s=i=l:i=i.next=l,r=r.next}while(r!==null);i===null?s=i=e:i=i.next=e}else s=i=e;r={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:o.shared,effects:o.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function ni(t,e,r,o){var s=t.updateQueue;xr=!1;var i=s.firstBaseUpdate,l=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var d=a,g=d.next;d.next=null,l===null?i=g:l.next=g,l=d;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=g:a.next=g,h.lastBaseUpdate=d))}if(i!==null){var y=s.baseState;l=0,h=g=d=null,a=i;do{var f=a.lane,w=a.eventTime;if((o&f)===f){h!==null&&(h=h.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});t:{var k=t,j=a;switch(f=e,w=r,j.tag){case 1:if(k=j.payload,typeof k=="function"){y=k.call(w,y,f);break t}y=k;break t;case 3:k.flags=k.flags&-65537|128;case 0:if(k=j.payload,f=typeof k=="function"?k.call(w,y,f):k,f==null)break t;y=Ht({},y,f);break t;case 2:xr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=s.effects,f===null?s.effects=[a]:f.push(a))}else w={eventTime:w,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(g=h=w,d=y):h=h.next=w,l|=f;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;f=a,a=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(h===null&&(d=y),s.baseState=d,s.firstBaseUpdate=g,s.lastBaseUpdate=h,e=s.shared.interleaved,e!==null){s=e;do l|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);en|=l,t.lanes=l,t.memoizedState=y}}function Dg(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var o=t[e],s=o.callback;if(s!==null){if(o.callback=null,o=r,typeof s!="function")throw Error(X(191,s));s.call(o)}}}var Xo={},rr=Lr(Xo),$o=Lr(Xo),No=Lr(Xo);function Qr(t){if(t===Xo)throw Error(X(174));return t}function ld(t,e){switch(At(No,e),At($o,t),At(rr,Xo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ml(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ml(e,t)}_t(rr),At(rr,e)}function On(){_t(rr),_t($o),_t(No)}function eb(t){Qr(No.current);var e=Qr(rr.current),r=Ml(e,t.type);e!==r&&(At($o,t),At(rr,r))}function ad(t){$o.current===t&&(_t(rr),_t($o))}var Nt=Lr(0);function oi(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var el=[];function dd(){for(var t=0;t<el.length;t++)el[t]._workInProgressVersionPrimary=null;el.length=0}var Ms=hr.ReactCurrentDispatcher,rl=hr.ReactCurrentBatchConfig,tn=0,Ot=null,Xt=null,qt=null,si=!1,jo=!1,Oo=0,Cf=0;function le(){throw Error(X(321))}function gd(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!Ue(t[r],e[r]))return!1;return!0}function cd(t,e,r,o,s,i){if(tn=i,Ot=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ms.current=t===null||t.memoizedState===null?Ef:Bf,t=r(o,s),jo){i=0;do{if(jo=!1,Oo=0,25<=i)throw Error(X(301));i+=1,qt=Xt=null,e.updateQueue=null,Ms.current=Df,t=r(o,s)}while(jo)}if(Ms.current=ii,e=Xt!==null&&Xt.next!==null,tn=0,qt=Xt=Ot=null,si=!1,e)throw Error(X(300));return t}function ud(){var t=Oo!==0;return Oo=0,t}function Je(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?Ot.memoizedState=qt=t:qt=qt.next=t,qt}function Me(){if(Xt===null){var t=Ot.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var e=qt===null?Ot.memoizedState:qt.next;if(e!==null)qt=e,Xt=t;else{if(t===null)throw Error(X(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},qt===null?Ot.memoizedState=qt=t:qt=qt.next=t}return qt}function Ho(t,e){return typeof e=="function"?e(t):e}function nl(t){var e=Me(),r=e.queue;if(r===null)throw Error(X(311));r.lastRenderedReducer=t;var o=Xt,s=o.baseQueue,i=r.pending;if(i!==null){if(s!==null){var l=s.next;s.next=i.next,i.next=l}o.baseQueue=s=i,r.pending=null}if(s!==null){i=s.next,o=o.baseState;var a=l=null,d=null,g=i;do{var h=g.lane;if((tn&h)===h)d!==null&&(d=d.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),o=g.hasEagerState?g.eagerState:t(o,g.action);else{var y={lane:h,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};d===null?(a=d=y,l=o):d=d.next=y,Ot.lanes|=h,en|=h}g=g.next}while(g!==null&&g!==i);d===null?l=o:d.next=a,Ue(o,e.memoizedState)||(he=!0),e.memoizedState=o,e.baseState=l,e.baseQueue=d,r.lastRenderedState=o}if(t=r.interleaved,t!==null){s=t;do i=s.lane,Ot.lanes|=i,en|=i,s=s.next;while(s!==t)}else s===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function ol(t){var e=Me(),r=e.queue;if(r===null)throw Error(X(311));r.lastRenderedReducer=t;var o=r.dispatch,s=r.pending,i=e.memoizedState;if(s!==null){r.pending=null;var l=s=s.next;do i=t(i,l.action),l=l.next;while(l!==s);Ue(i,e.memoizedState)||(he=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),r.lastRenderedState=i}return[i,o]}function rb(){}function nb(t,e){var r=Ot,o=Me(),s=e(),i=!Ue(o.memoizedState,s);if(i&&(o.memoizedState=s,he=!0),o=o.queue,bd(ib.bind(null,r,o,t),[t]),o.getSnapshot!==e||i||qt!==null&&qt.memoizedState.tag&1){if(r.flags|=2048,Go(9,sb.bind(null,r,o,s,e),void 0,null),te===null)throw Error(X(349));tn&30||ob(r,e,s)}return s}function ob(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=Ot.updateQueue,e===null?(e={lastEffect:null,stores:null},Ot.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function sb(t,e,r,o){e.value=r,e.getSnapshot=o,lb(e)&&ab(t)}function ib(t,e,r){return r(function(){lb(e)&&ab(t)})}function lb(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!Ue(t,r)}catch{return!0}}function ab(t){var e=mr(t,1);e!==null&&Ge(e,t,1,-1)}function Rg(t){var e=Je();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:t},e.queue=t,t=t.dispatch=Tf.bind(null,Ot,t),[e.memoizedState,t]}function Go(t,e,r,o){return t={tag:t,create:e,destroy:r,deps:o,next:null},e=Ot.updateQueue,e===null?(e={lastEffect:null,stores:null},Ot.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,e.lastEffect=t)),t}function db(){return Me().memoizedState}function Ws(t,e,r,o){var s=Je();Ot.flags|=t,s.memoizedState=Go(1|e,r,void 0,o===void 0?null:o)}function wi(t,e,r,o){var s=Me();o=o===void 0?null:o;var i=void 0;if(Xt!==null){var l=Xt.memoizedState;if(i=l.destroy,o!==null&&gd(o,l.deps)){s.memoizedState=Go(e,r,i,o);return}}Ot.flags|=t,s.memoizedState=Go(1|e,r,i,o)}function Fg(t,e){return Ws(8390656,8,t,e)}function bd(t,e){return wi(2048,8,t,e)}function gb(t,e){return wi(4,2,t,e)}function cb(t,e){return wi(4,4,t,e)}function ub(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function bb(t,e,r){return r=r!=null?r.concat([t]):null,wi(4,4,ub.bind(null,e,t),r)}function pd(){}function pb(t,e){var r=Me();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&gd(e,o[1])?o[0]:(r.memoizedState=[t,e],t)}function mb(t,e){var r=Me();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&gd(e,o[1])?o[0]:(t=t(),r.memoizedState=[t,e],t)}function fb(t,e,r){return tn&21?(Ue(r,e)||(r=ku(),Ot.lanes|=r,en|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,he=!0),t.memoizedState=r)}function If(t,e){var r=Rt;Rt=r!==0&&4>r?r:4,t(!0);var o=rl.transition;rl.transition={};try{t(!1),e()}finally{Rt=r,rl.transition=o}}function hb(){return Me().memoizedState}function zf(t,e,r){var o=Fr(t);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},yb(t))vb(e,r);else if(r=qu(t,e,r,o),r!==null){var s=be();Ge(r,t,o,s),xb(r,e,o)}}function Tf(t,e,r){var o=Fr(t),s={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(yb(t))vb(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var l=e.lastRenderedState,a=i(l,r);if(s.hasEagerState=!0,s.eagerState=a,Ue(a,l)){var d=e.interleaved;d===null?(s.next=s,sd(e)):(s.next=d.next,d.next=s),e.interleaved=s;return}}catch{}finally{}r=qu(t,e,s,o),r!==null&&(s=be(),Ge(r,t,o,s),xb(r,e,o))}}function yb(t){var e=t.alternate;return t===Ot||e!==null&&e===Ot}function vb(t,e){jo=si=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function xb(t,e,r){if(r&4194240){var o=e.lanes;o&=t.pendingLanes,r|=o,e.lanes=r,Ua(t,r)}}var ii={readContext:Ae,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},Ef={readContext:Ae,useCallback:function(t,e){return Je().memoizedState=[t,e===void 0?null:e],t},useContext:Ae,useEffect:Fg,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,Ws(4194308,4,ub.bind(null,e,t),r)},useLayoutEffect:function(t,e){return Ws(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ws(4,2,t,e)},useMemo:function(t,e){var r=Je();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var o=Je();return e=r!==void 0?r(e):e,o.memoizedState=o.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},o.queue=t,t=t.dispatch=zf.bind(null,Ot,t),[o.memoizedState,t]},useRef:function(t){var e=Je();return t={current:t},e.memoizedState=t},useState:Rg,useDebugValue:pd,useDeferredValue:function(t){return Je().memoizedState=t},useTransition:function(){var t=Rg(!1),e=t[0];return t=If.bind(null,t[1]),Je().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var o=Ot,s=Je();if(Pt){if(r===void 0)throw Error(X(407));r=r()}else{if(r=e(),te===null)throw Error(X(349));tn&30||ob(o,e,r)}s.memoizedState=r;var i={value:r,getSnapshot:e};return s.queue=i,Fg(ib.bind(null,o,i,t),[t]),o.flags|=2048,Go(9,sb.bind(null,o,i,r,e),void 0,null),r},useId:function(){var t=Je(),e=te.identifierPrefix;if(Pt){var r=cr,o=gr;r=(o&~(1<<32-He(o)-1)).toString(32)+r,e=":"+e+"R"+r,r=Oo++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=Cf++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Bf={readContext:Ae,useCallback:pb,useContext:Ae,useEffect:bd,useImperativeHandle:bb,useInsertionEffect:gb,useLayoutEffect:cb,useMemo:mb,useReducer:nl,useRef:db,useState:function(){return nl(Ho)},useDebugValue:pd,useDeferredValue:function(t){var e=Me();return fb(e,Xt.memoizedState,t)},useTransition:function(){var t=nl(Ho)[0],e=Me().memoizedState;return[t,e]},useMutableSource:rb,useSyncExternalStore:nb,useId:hb,unstable_isNewReconciler:!1},Df={readContext:Ae,useCallback:pb,useContext:Ae,useEffect:bd,useImperativeHandle:bb,useInsertionEffect:gb,useLayoutEffect:cb,useMemo:mb,useReducer:ol,useRef:db,useState:function(){return ol(Ho)},useDebugValue:pd,useDeferredValue:function(t){var e=Me();return Xt===null?e.memoizedState=t:fb(e,Xt.memoizedState,t)},useTransition:function(){var t=ol(Ho)[0],e=Me().memoizedState;return[t,e]},useMutableSource:rb,useSyncExternalStore:nb,useId:hb,unstable_isNewReconciler:!1};function $e(t,e){if(t&&t.defaultProps){e=Ht({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function ra(t,e,r,o){e=t.memoizedState,r=r(o,e),r=r==null?e:Ht({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var ji={isMounted:function(t){return(t=t._reactInternals)?ln(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var o=be(),s=Fr(t),i=ur(o,s);i.payload=e,r!=null&&(i.callback=r),e=Dr(t,i,s),e!==null&&(Ge(e,t,s,o),As(e,t,s))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var o=be(),s=Fr(t),i=ur(o,s);i.tag=1,i.payload=e,r!=null&&(i.callback=r),e=Dr(t,i,s),e!==null&&(Ge(e,t,s,o),As(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=be(),o=Fr(t),s=ur(r,o);s.tag=2,e!=null&&(s.callback=e),e=Dr(t,s,o),e!==null&&(Ge(e,t,o,r),As(e,t,o))}};function Ag(t,e,r,o,s,i,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,i,l):e.prototype&&e.prototype.isPureReactComponent?!Wo(r,o)||!Wo(s,i):!0}function kb(t,e,r){var o=!1,s=Wr,i=e.contextType;return typeof i=="object"&&i!==null?i=Ae(i):(s=ve(e)?Zr:ce.current,o=e.contextTypes,i=(o=o!=null)?Pn(t,s):Wr),e=new e(r,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ji,t.stateNode=e,e._reactInternals=t,o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Mg(t,e,r,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,o),e.state!==t&&ji.enqueueReplaceState(e,e.state,null)}function na(t,e,r,o){var s=t.stateNode;s.props=r,s.state=t.memoizedState,s.refs={},id(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Ae(i):(i=ve(e)?Zr:ce.current,s.context=Pn(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(ra(t,e,i,r),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&ji.enqueueReplaceState(s,s.state,null),ni(t,r,s,o),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Hn(t,e){try{var r="",o=e;do r+=om(o),o=o.return;while(o);var s=r}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function sl(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function oa(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var Rf=typeof WeakMap=="function"?WeakMap:Map;function wb(t,e,r){r=ur(-1,r),r.tag=3,r.payload={element:null};var o=e.value;return r.callback=function(){ai||(ai=!0,pa=o),oa(t,e)},r}function jb(t,e,r){r=ur(-1,r),r.tag=3;var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var s=e.value;r.payload=function(){return o(s)},r.callback=function(){oa(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){oa(t,e),typeof o!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),r}function Wg(t,e,r){var o=t.pingCache;if(o===null){o=t.pingCache=new Rf;var s=new Set;o.set(e,s)}else s=o.get(e),s===void 0&&(s=new Set,o.set(e,s));s.has(r)||(s.add(r),t=Vf.bind(null,t,e,r),e.then(t,t))}function _g(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Lg(t,e,r,o,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=ur(-1,1),e.tag=2,Dr(r,e,1))),r.lanes|=1),t)}var Ff=hr.ReactCurrentOwner,he=!1;function ue(t,e,r,o){e.child=t===null?Zu(e,null,r,o):Nn(e,t.child,r,o)}function Pg(t,e,r,o,s){r=r.render;var i=e.ref;return Mn(e,s),o=cd(t,e,r,o,i,s),r=ud(),t!==null&&!he?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,fr(t,e,s)):(Pt&&r&&qa(e),e.flags|=1,ue(t,e,o,s),e.child)}function $g(t,e,r,o,s){if(t===null){var i=r.type;return typeof i=="function"&&!wd(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=i,Sb(t,e,i,o,s)):(t=$s(r.type,null,o,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var l=i.memoizedProps;if(r=r.compare,r=r!==null?r:Wo,r(l,o)&&t.ref===e.ref)return fr(t,e,s)}return e.flags|=1,t=Ar(i,o),t.ref=e.ref,t.return=e,e.child=t}function Sb(t,e,r,o,s){if(t!==null){var i=t.memoizedProps;if(Wo(i,o)&&t.ref===e.ref)if(he=!1,e.pendingProps=o=i,(t.lanes&s)!==0)t.flags&131072&&(he=!0);else return e.lanes=t.lanes,fr(t,e,s)}return sa(t,e,r,o,s)}function Cb(t,e,r){var o=e.pendingProps,s=o.children,i=t!==null?t.memoizedState:null;if(o.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},At(Bn,we),we|=r;else{if(!(r&1073741824))return t=i!==null?i.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,At(Bn,we),we|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:r,At(Bn,we),we|=o}else i!==null?(o=i.baseLanes|r,e.memoizedState=null):o=r,At(Bn,we),we|=o;return ue(t,e,s,r),e.child}function Ib(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function sa(t,e,r,o,s){var i=ve(r)?Zr:ce.current;return i=Pn(e,i),Mn(e,s),r=cd(t,e,r,o,i,s),o=ud(),t!==null&&!he?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,fr(t,e,s)):(Pt&&o&&qa(e),e.flags|=1,ue(t,e,r,s),e.child)}function Ng(t,e,r,o,s){if(ve(r)){var i=!0;Zs(e)}else i=!1;if(Mn(e,s),e.stateNode===null)_s(t,e),kb(e,r,o),na(e,r,o,s),o=!0;else if(t===null){var l=e.stateNode,a=e.memoizedProps;l.props=a;var d=l.context,g=r.contextType;typeof g=="object"&&g!==null?g=Ae(g):(g=ve(r)?Zr:ce.current,g=Pn(e,g));var h=r.getDerivedStateFromProps,y=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";y||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==o||d!==g)&&Mg(e,l,o,g),xr=!1;var f=e.memoizedState;l.state=f,ni(e,o,l,s),d=e.memoizedState,a!==o||f!==d||ye.current||xr?(typeof h=="function"&&(ra(e,r,h,o),d=e.memoizedState),(a=xr||Ag(e,r,a,o,f,d,g))?(y||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=d),l.props=o,l.state=d,l.context=g,o=a):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{l=e.stateNode,tb(t,e),a=e.memoizedProps,g=e.type===e.elementType?a:$e(e.type,a),l.props=g,y=e.pendingProps,f=l.context,d=r.contextType,typeof d=="object"&&d!==null?d=Ae(d):(d=ve(r)?Zr:ce.current,d=Pn(e,d));var w=r.getDerivedStateFromProps;(h=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==y||f!==d)&&Mg(e,l,o,d),xr=!1,f=e.memoizedState,l.state=f,ni(e,o,l,s);var k=e.memoizedState;a!==y||f!==k||ye.current||xr?(typeof w=="function"&&(ra(e,r,w,o),k=e.memoizedState),(g=xr||Ag(e,r,g,o,f,k,d)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,k,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,k,d)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=k),l.props=o,l.state=k,l.context=d,o=g):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),o=!1)}return ia(t,e,r,o,i,s)}function ia(t,e,r,o,s,i){Ib(t,e);var l=(e.flags&128)!==0;if(!o&&!l)return s&&Ig(e,r,!1),fr(t,e,i);o=e.stateNode,Ff.current=e;var a=l&&typeof r.getDerivedStateFromError!="function"?null:o.render();return e.flags|=1,t!==null&&l?(e.child=Nn(e,t.child,null,i),e.child=Nn(e,null,a,i)):ue(t,e,a,i),e.memoizedState=o.state,s&&Ig(e,r,!0),e.child}function zb(t){var e=t.stateNode;e.pendingContext?Cg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Cg(t,e.context,!1),ld(t,e.containerInfo)}function Og(t,e,r,o,s){return $n(),ed(s),e.flags|=256,ue(t,e,r,o),e.child}var la={dehydrated:null,treeContext:null,retryLane:0};function aa(t){return{baseLanes:t,cachePool:null,transitions:null}}function Tb(t,e,r){var o=e.pendingProps,s=Nt.current,i=!1,l=(e.flags&128)!==0,a;if((a=l)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),At(Nt,s&1),t===null)return ta(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=o.children,t=o.fallback,i?(o=e.mode,i=e.child,l={mode:"hidden",children:l},!(o&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ii(l,o,0,null),t=Jr(t,o,r,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=aa(r),e.memoizedState=la,t):md(e,l));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return Af(t,e,l,o,a,s,r);if(i){i=o.fallback,l=e.mode,s=t.child,a=s.sibling;var d={mode:"hidden",children:o.children};return!(l&1)&&e.child!==s?(o=e.child,o.childLanes=0,o.pendingProps=d,e.deletions=null):(o=Ar(s,d),o.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=Ar(a,i):(i=Jr(i,l,r,null),i.flags|=2),i.return=e,o.return=e,o.sibling=i,e.child=o,o=i,i=e.child,l=t.child.memoizedState,l=l===null?aa(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=t.childLanes&~r,e.memoizedState=la,o}return i=t.child,t=i.sibling,o=Ar(i,{mode:"visible",children:o.children}),!(e.mode&1)&&(o.lanes=r),o.return=e,o.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=o,e.memoizedState=null,o}function md(t,e){return e=Ii({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function bs(t,e,r,o){return o!==null&&ed(o),Nn(e,t.child,null,r),t=md(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Af(t,e,r,o,s,i,l){if(r)return e.flags&256?(e.flags&=-257,o=sl(Error(X(422))),bs(t,e,l,o)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=o.fallback,s=e.mode,o=Ii({mode:"visible",children:o.children},s,0,null),i=Jr(i,s,l,null),i.flags|=2,o.return=e,i.return=e,o.sibling=i,e.child=o,e.mode&1&&Nn(e,t.child,null,l),e.child.memoizedState=aa(l),e.memoizedState=la,i);if(!(e.mode&1))return bs(t,e,l,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var a=o.dgst;return o=a,i=Error(X(419)),o=sl(i,o,void 0),bs(t,e,l,o)}if(a=(l&t.childLanes)!==0,he||a){if(o=te,o!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(o.suspendedLanes|l)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,mr(t,s),Ge(o,t,s,-1))}return kd(),o=sl(Error(X(421))),bs(t,e,l,o)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=Yf.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Se=Br(s.nextSibling),Ce=e,Pt=!0,Oe=null,t!==null&&(Be[De++]=gr,Be[De++]=cr,Be[De++]=qr,gr=t.id,cr=t.overflow,qr=e),e=md(e,o.children),e.flags|=4096,e)}function Hg(t,e,r){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),ea(t.return,e,r)}function il(t,e,r,o,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=r,i.tailMode=s)}function Eb(t,e,r){var o=e.pendingProps,s=o.revealOrder,i=o.tail;if(ue(t,e,o.children,r),o=Nt.current,o&2)o=o&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hg(t,r,e);else if(t.tag===19)Hg(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}if(At(Nt,o),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(r=e.child,s=null;r!==null;)t=r.alternate,t!==null&&oi(t)===null&&(s=r),r=r.sibling;r=s,r===null?(s=e.child,e.child=null):(s=r.sibling,r.sibling=null),il(e,!1,s,r,i);break;case"backwards":for(r=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&oi(t)===null){e.child=s;break}t=s.sibling,s.sibling=r,r=s,s=t}il(e,!0,r,null,i);break;case"together":il(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _s(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fr(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),en|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(X(153));if(e.child!==null){for(t=e.child,r=Ar(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=Ar(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function Mf(t,e,r){switch(e.tag){case 3:zb(e),$n();break;case 5:eb(e);break;case 1:ve(e.type)&&Zs(e);break;case 4:ld(e,e.stateNode.containerInfo);break;case 10:var o=e.type._context,s=e.memoizedProps.value;At(ei,o._currentValue),o._currentValue=s;break;case 13:if(o=e.memoizedState,o!==null)return o.dehydrated!==null?(At(Nt,Nt.current&1),e.flags|=128,null):r&e.child.childLanes?Tb(t,e,r):(At(Nt,Nt.current&1),t=fr(t,e,r),t!==null?t.sibling:null);At(Nt,Nt.current&1);break;case 19:if(o=(r&e.childLanes)!==0,t.flags&128){if(o)return Eb(t,e,r);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),At(Nt,Nt.current),o)break;return null;case 22:case 23:return e.lanes=0,Cb(t,e,r)}return fr(t,e,r)}var Bb,da,Db,Rb;Bb=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};da=function(){};Db=function(t,e,r,o){var s=t.memoizedProps;if(s!==o){t=e.stateNode,Qr(rr.current);var i=null;switch(r){case"input":s=Dl(t,s),o=Dl(t,o),i=[];break;case"select":s=Ht({},s,{value:void 0}),o=Ht({},o,{value:void 0}),i=[];break;case"textarea":s=Al(t,s),o=Al(t,o),i=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(t.onclick=Xs)}Wl(r,o);var l;r=null;for(g in s)if(!o.hasOwnProperty(g)&&s.hasOwnProperty(g)&&s[g]!=null)if(g==="style"){var a=s[g];for(l in a)a.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(Eo.hasOwnProperty(g)?i||(i=[]):(i=i||[]).push(g,null));for(g in o){var d=o[g];if(a=s!=null?s[g]:void 0,o.hasOwnProperty(g)&&d!==a&&(d!=null||a!=null))if(g==="style")if(a){for(l in a)!a.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in d)d.hasOwnProperty(l)&&a[l]!==d[l]&&(r||(r={}),r[l]=d[l])}else r||(i||(i=[]),i.push(g,r)),r=d;else g==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(i=i||[]).push(g,d)):g==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(g,""+d):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(Eo.hasOwnProperty(g)?(d!=null&&g==="onScroll"&&Wt("scroll",t),i||a===d||(i=[])):(i=i||[]).push(g,d))}r&&(i=i||[]).push("style",r);var g=i;(e.updateQueue=g)&&(e.flags|=4)}};Rb=function(t,e,r,o){r!==o&&(e.flags|=4)};function lo(t,e){if(!Pt)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function ae(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(e)for(var s=t.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=o,t.childLanes=r,e}function Wf(t,e,r){var o=e.pendingProps;switch(td(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(e),null;case 1:return ve(e.type)&&Js(),ae(e),null;case 3:return o=e.stateNode,On(),_t(ye),_t(ce),dd(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(cs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Oe!==null&&(ha(Oe),Oe=null))),da(t,e),ae(e),null;case 5:ad(e);var s=Qr(No.current);if(r=e.type,t!==null&&e.stateNode!=null)Db(t,e,r,o,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!o){if(e.stateNode===null)throw Error(X(166));return ae(e),null}if(t=Qr(rr.current),cs(e)){o=e.stateNode,r=e.type;var i=e.memoizedProps;switch(o[tr]=e,o[Po]=i,t=(e.mode&1)!==0,r){case"dialog":Wt("cancel",o),Wt("close",o);break;case"iframe":case"object":case"embed":Wt("load",o);break;case"video":case"audio":for(s=0;s<bo.length;s++)Wt(bo[s],o);break;case"source":Wt("error",o);break;case"img":case"image":case"link":Wt("error",o),Wt("load",o);break;case"details":Wt("toggle",o);break;case"input":Zd(o,i),Wt("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},Wt("invalid",o);break;case"textarea":tg(o,i),Wt("invalid",o)}Wl(r,i),s=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?o.textContent!==a&&(i.suppressHydrationWarning!==!0&&gs(o.textContent,a,t),s=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&gs(o.textContent,a,t),s=["children",""+a]):Eo.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Wt("scroll",o)}switch(r){case"input":rs(o),qd(o,i,!0);break;case"textarea":rs(o),eg(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=Xs)}o=s,e.updateQueue=o,o!==null&&(e.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=iu(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof o.is=="string"?t=l.createElement(r,{is:o.is}):(t=l.createElement(r),r==="select"&&(l=t,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):t=l.createElementNS(t,r),t[tr]=e,t[Po]=o,Bb(t,e,!1,!1),e.stateNode=t;t:{switch(l=_l(r,o),r){case"dialog":Wt("cancel",t),Wt("close",t),s=o;break;case"iframe":case"object":case"embed":Wt("load",t),s=o;break;case"video":case"audio":for(s=0;s<bo.length;s++)Wt(bo[s],t);s=o;break;case"source":Wt("error",t),s=o;break;case"img":case"image":case"link":Wt("error",t),Wt("load",t),s=o;break;case"details":Wt("toggle",t),s=o;break;case"input":Zd(t,o),s=Dl(t,o),Wt("invalid",t);break;case"option":s=o;break;case"select":t._wrapperState={wasMultiple:!!o.multiple},s=Ht({},o,{value:void 0}),Wt("invalid",t);break;case"textarea":tg(t,o),s=Al(t,o),Wt("invalid",t);break;default:s=o}Wl(r,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var d=a[i];i==="style"?du(t,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&lu(t,d)):i==="children"?typeof d=="string"?(r!=="textarea"||d!=="")&&Bo(t,d):typeof d=="number"&&Bo(t,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Eo.hasOwnProperty(i)?d!=null&&i==="onScroll"&&Wt("scroll",t):d!=null&&Pa(t,i,d,l))}switch(r){case"input":rs(t),qd(t,o,!1);break;case"textarea":rs(t),eg(t);break;case"option":o.value!=null&&t.setAttribute("value",""+Mr(o.value));break;case"select":t.multiple=!!o.multiple,i=o.value,i!=null?Dn(t,!!o.multiple,i,!1):o.defaultValue!=null&&Dn(t,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Xs)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}}o&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ae(e),null;case 6:if(t&&e.stateNode!=null)Rb(t,e,t.memoizedProps,o);else{if(typeof o!="string"&&e.stateNode===null)throw Error(X(166));if(r=Qr(No.current),Qr(rr.current),cs(e)){if(o=e.stateNode,r=e.memoizedProps,o[tr]=e,(i=o.nodeValue!==r)&&(t=Ce,t!==null))switch(t.tag){case 3:gs(o.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&gs(o.nodeValue,r,(t.mode&1)!==0)}i&&(e.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[tr]=e,e.stateNode=o}return ae(e),null;case 13:if(_t(Nt),o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Pt&&Se!==null&&e.mode&1&&!(e.flags&128))Xu(),$n(),e.flags|=98560,i=!1;else if(i=cs(e),o!==null&&o.dehydrated!==null){if(t===null){if(!i)throw Error(X(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(X(317));i[tr]=e}else $n(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ae(e),i=!1}else Oe!==null&&(ha(Oe),Oe=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(o=o!==null,o!==(t!==null&&t.memoizedState!==null)&&o&&(e.child.flags|=8192,e.mode&1&&(t===null||Nt.current&1?Jt===0&&(Jt=3):kd())),e.updateQueue!==null&&(e.flags|=4),ae(e),null);case 4:return On(),da(t,e),t===null&&_o(e.stateNode.containerInfo),ae(e),null;case 10:return od(e.type._context),ae(e),null;case 17:return ve(e.type)&&Js(),ae(e),null;case 19:if(_t(Nt),i=e.memoizedState,i===null)return ae(e),null;if(o=(e.flags&128)!==0,l=i.rendering,l===null)if(o)lo(i,!1);else{if(Jt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=oi(t),l!==null){for(e.flags|=128,lo(i,!1),o=l.updateQueue,o!==null&&(e.updateQueue=o,e.flags|=4),e.subtreeFlags=0,o=r,r=e.child;r!==null;)i=r,t=o,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,t=l.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return At(Nt,Nt.current&1|2),e.child}t=t.sibling}i.tail!==null&&Yt()>Gn&&(e.flags|=128,o=!0,lo(i,!1),e.lanes=4194304)}else{if(!o)if(t=oi(l),t!==null){if(e.flags|=128,o=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),lo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Pt)return ae(e),null}else 2*Yt()-i.renderingStartTime>Gn&&r!==1073741824&&(e.flags|=128,o=!0,lo(i,!1),e.lanes=4194304);i.isBackwards?(l.sibling=e.child,e.child=l):(r=i.last,r!==null?r.sibling=l:e.child=l,i.last=l)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Yt(),e.sibling=null,r=Nt.current,At(Nt,o?r&1|2:r&1),e):(ae(e),null);case 22:case 23:return xd(),o=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==o&&(e.flags|=8192),o&&e.mode&1?we&1073741824&&(ae(e),e.subtreeFlags&6&&(e.flags|=8192)):ae(e),null;case 24:return null;case 25:return null}throw Error(X(156,e.tag))}function _f(t,e){switch(td(e),e.tag){case 1:return ve(e.type)&&Js(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return On(),_t(ye),_t(ce),dd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ad(e),null;case 13:if(_t(Nt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(X(340));$n()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _t(Nt),null;case 4:return On(),null;case 10:return od(e.type._context),null;case 22:case 23:return xd(),null;case 24:return null;default:return null}}var ps=!1,de=!1,Lf=typeof WeakSet=="function"?WeakSet:Set,lt=null;function En(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){Vt(t,e,o)}else r.current=null}function ga(t,e,r){try{r()}catch(o){Vt(t,e,o)}}var Gg=!1;function Pf(t,e){if(Yl=Ys,t=_u(),Za(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var s=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break t}var l=0,a=-1,d=-1,g=0,h=0,y=t,f=null;e:for(;;){for(var w;y!==r||s!==0&&y.nodeType!==3||(a=l+s),y!==i||o!==0&&y.nodeType!==3||(d=l+o),y.nodeType===3&&(l+=y.nodeValue.length),(w=y.firstChild)!==null;)f=y,y=w;for(;;){if(y===t)break e;if(f===r&&++g===s&&(a=l),f===i&&++h===o&&(d=l),(w=y.nextSibling)!==null)break;y=f,f=y.parentNode}y=w}r=a===-1||d===-1?null:{start:a,end:d}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ql={focusedElem:t,selectionRange:r},Ys=!1,lt=e;lt!==null;)if(e=lt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,lt=t;else for(;lt!==null;){e=lt;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var j=k.memoizedProps,z=k.memoizedState,p=e.stateNode,c=p.getSnapshotBeforeUpdate(e.elementType===e.type?j:$e(e.type,j),z);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var u=e.stateNode.containerInfo;u.nodeType===1?u.textContent="":u.nodeType===9&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(X(163))}}catch(v){Vt(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,lt=t;break}lt=e.return}return k=Gg,Gg=!1,k}function So(t,e,r){var o=e.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&ga(e,r,i)}s=s.next}while(s!==o)}}function Si(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var o=r.create;r.destroy=o()}r=r.next}while(r!==e)}}function ca(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function Fb(t){var e=t.alternate;e!==null&&(t.alternate=null,Fb(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[tr],delete e[Po],delete e[Jl],delete e[kf],delete e[wf])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ab(t){return t.tag===5||t.tag===3||t.tag===4}function Ug(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Ab(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ua(t,e,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=Xs));else if(o!==4&&(t=t.child,t!==null))for(ua(t,e,r),t=t.sibling;t!==null;)ua(t,e,r),t=t.sibling}function ba(t,e,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(o!==4&&(t=t.child,t!==null))for(ba(t,e,r),t=t.sibling;t!==null;)ba(t,e,r),t=t.sibling}var re=null,Ne=!1;function yr(t,e,r){for(r=r.child;r!==null;)Mb(t,e,r),r=r.sibling}function Mb(t,e,r){if(er&&typeof er.onCommitFiberUnmount=="function")try{er.onCommitFiberUnmount(fi,r)}catch{}switch(r.tag){case 5:de||En(r,e);case 6:var o=re,s=Ne;re=null,yr(t,e,r),re=o,Ne=s,re!==null&&(Ne?(t=re,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):re.removeChild(r.stateNode));break;case 18:re!==null&&(Ne?(t=re,r=r.stateNode,t.nodeType===8?qi(t.parentNode,r):t.nodeType===1&&qi(t,r),Ao(t)):qi(re,r.stateNode));break;case 4:o=re,s=Ne,re=r.stateNode.containerInfo,Ne=!0,yr(t,e,r),re=o,Ne=s;break;case 0:case 11:case 14:case 15:if(!de&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var i=s,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&ga(r,e,l),s=s.next}while(s!==o)}yr(t,e,r);break;case 1:if(!de&&(En(r,e),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(a){Vt(r,e,a)}yr(t,e,r);break;case 21:yr(t,e,r);break;case 22:r.mode&1?(de=(o=de)||r.memoizedState!==null,yr(t,e,r),de=o):yr(t,e,r);break;default:yr(t,e,r)}}function Vg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new Lf),e.forEach(function(o){var s=Qf.bind(null,t,o);r.has(o)||(r.add(o),o.then(s,s))})}}function Pe(t,e){var r=e.deletions;if(r!==null)for(var o=0;o<r.length;o++){var s=r[o];try{var i=t,l=e,a=l;t:for(;a!==null;){switch(a.tag){case 5:re=a.stateNode,Ne=!1;break t;case 3:re=a.stateNode.containerInfo,Ne=!0;break t;case 4:re=a.stateNode.containerInfo,Ne=!0;break t}a=a.return}if(re===null)throw Error(X(160));Mb(i,l,s),re=null,Ne=!1;var d=s.alternate;d!==null&&(d.return=null),s.return=null}catch(g){Vt(s,e,g)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Wb(e,t),e=e.sibling}function Wb(t,e){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pe(e,t),Qe(t),o&4){try{So(3,t,t.return),Si(3,t)}catch(j){Vt(t,t.return,j)}try{So(5,t,t.return)}catch(j){Vt(t,t.return,j)}}break;case 1:Pe(e,t),Qe(t),o&512&&r!==null&&En(r,r.return);break;case 5:if(Pe(e,t),Qe(t),o&512&&r!==null&&En(r,r.return),t.flags&32){var s=t.stateNode;try{Bo(s,"")}catch(j){Vt(t,t.return,j)}}if(o&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,l=r!==null?r.memoizedProps:i,a=t.type,d=t.updateQueue;if(t.updateQueue=null,d!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&ou(s,i),_l(a,l);var g=_l(a,i);for(l=0;l<d.length;l+=2){var h=d[l],y=d[l+1];h==="style"?du(s,y):h==="dangerouslySetInnerHTML"?lu(s,y):h==="children"?Bo(s,y):Pa(s,h,y,g)}switch(a){case"input":Rl(s,i);break;case"textarea":su(s,i);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Dn(s,!!i.multiple,w,!1):f!==!!i.multiple&&(i.defaultValue!=null?Dn(s,!!i.multiple,i.defaultValue,!0):Dn(s,!!i.multiple,i.multiple?[]:"",!1))}s[Po]=i}catch(j){Vt(t,t.return,j)}}break;case 6:if(Pe(e,t),Qe(t),o&4){if(t.stateNode===null)throw Error(X(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(j){Vt(t,t.return,j)}}break;case 3:if(Pe(e,t),Qe(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Ao(e.containerInfo)}catch(j){Vt(t,t.return,j)}break;case 4:Pe(e,t),Qe(t);break;case 13:Pe(e,t),Qe(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(yd=Yt())),o&4&&Vg(t);break;case 22:if(h=r!==null&&r.memoizedState!==null,t.mode&1?(de=(g=de)||h,Pe(e,t),de=g):Pe(e,t),Qe(t),o&8192){if(g=t.memoizedState!==null,(t.stateNode.isHidden=g)&&!h&&t.mode&1)for(lt=t,h=t.child;h!==null;){for(y=lt=h;lt!==null;){switch(f=lt,w=f.child,f.tag){case 0:case 11:case 14:case 15:So(4,f,f.return);break;case 1:En(f,f.return);var k=f.stateNode;if(typeof k.componentWillUnmount=="function"){o=f,r=f.return;try{e=o,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(j){Vt(o,r,j)}}break;case 5:En(f,f.return);break;case 22:if(f.memoizedState!==null){Qg(y);continue}}w!==null?(w.return=f,lt=w):Qg(y)}h=h.sibling}t:for(h=null,y=t;;){if(y.tag===5){if(h===null){h=y;try{s=y.stateNode,g?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=y.stateNode,d=y.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=au("display",l))}catch(j){Vt(t,t.return,j)}}}else if(y.tag===6){if(h===null)try{y.stateNode.nodeValue=g?"":y.memoizedProps}catch(j){Vt(t,t.return,j)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===t)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break t;for(;y.sibling===null;){if(y.return===null||y.return===t)break t;h===y&&(h=null),y=y.return}h===y&&(h=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Pe(e,t),Qe(t),o&4&&Vg(t);break;case 21:break;default:Pe(e,t),Qe(t)}}function Qe(t){var e=t.flags;if(e&2){try{t:{for(var r=t.return;r!==null;){if(Ab(r)){var o=r;break t}r=r.return}throw Error(X(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&(Bo(s,""),o.flags&=-33);var i=Ug(t);ba(t,i,s);break;case 3:case 4:var l=o.stateNode.containerInfo,a=Ug(t);ua(t,a,l);break;default:throw Error(X(161))}}catch(d){Vt(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $f(t,e,r){lt=t,_b(t)}function _b(t,e,r){for(var o=(t.mode&1)!==0;lt!==null;){var s=lt,i=s.child;if(s.tag===22&&o){var l=s.memoizedState!==null||ps;if(!l){var a=s.alternate,d=a!==null&&a.memoizedState!==null||de;a=ps;var g=de;if(ps=l,(de=d)&&!g)for(lt=s;lt!==null;)l=lt,d=l.child,l.tag===22&&l.memoizedState!==null?Kg(s):d!==null?(d.return=l,lt=d):Kg(s);for(;i!==null;)lt=i,_b(i),i=i.sibling;lt=s,ps=a,de=g}Yg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,lt=i):Yg(t)}}function Yg(t){for(;lt!==null;){var e=lt;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:de||Si(5,e);break;case 1:var o=e.stateNode;if(e.flags&4&&!de)if(r===null)o.componentDidMount();else{var s=e.elementType===e.type?r.memoizedProps:$e(e.type,r.memoizedProps);o.componentDidUpdate(s,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Dg(e,i,o);break;case 3:var l=e.updateQueue;if(l!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}Dg(e,l,r)}break;case 5:var a=e.stateNode;if(r===null&&e.flags&4){r=a;var d=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&r.focus();break;case"img":d.src&&(r.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var g=e.alternate;if(g!==null){var h=g.memoizedState;if(h!==null){var y=h.dehydrated;y!==null&&Ao(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(X(163))}de||e.flags&512&&ca(e)}catch(f){Vt(e,e.return,f)}}if(e===t){lt=null;break}if(r=e.sibling,r!==null){r.return=e.return,lt=r;break}lt=e.return}}function Qg(t){for(;lt!==null;){var e=lt;if(e===t){lt=null;break}var r=e.sibling;if(r!==null){r.return=e.return,lt=r;break}lt=e.return}}function Kg(t){for(;lt!==null;){var e=lt;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{Si(4,e)}catch(d){Vt(e,r,d)}break;case 1:var o=e.stateNode;if(typeof o.componentDidMount=="function"){var s=e.return;try{o.componentDidMount()}catch(d){Vt(e,s,d)}}var i=e.return;try{ca(e)}catch(d){Vt(e,i,d)}break;case 5:var l=e.return;try{ca(e)}catch(d){Vt(e,l,d)}}}catch(d){Vt(e,e.return,d)}if(e===t){lt=null;break}var a=e.sibling;if(a!==null){a.return=e.return,lt=a;break}lt=e.return}}var Nf=Math.ceil,li=hr.ReactCurrentDispatcher,fd=hr.ReactCurrentOwner,Fe=hr.ReactCurrentBatchConfig,Et=0,te=null,Kt=null,ne=0,we=0,Bn=Lr(0),Jt=0,Uo=null,en=0,Ci=0,hd=0,Co=null,fe=null,yd=0,Gn=1/0,lr=null,ai=!1,pa=null,Rr=null,ms=!1,Ir=null,di=0,Io=0,ma=null,Ls=-1,Ps=0;function be(){return Et&6?Yt():Ls!==-1?Ls:Ls=Yt()}function Fr(t){return t.mode&1?Et&2&&ne!==0?ne&-ne:Sf.transition!==null?(Ps===0&&(Ps=ku()),Ps):(t=Rt,t!==0||(t=window.event,t=t===void 0?16:Tu(t.type)),t):1}function Ge(t,e,r,o){if(50<Io)throw Io=0,ma=null,Error(X(185));Yo(t,r,o),(!(Et&2)||t!==te)&&(t===te&&(!(Et&2)&&(Ci|=r),Jt===4&&jr(t,ne)),xe(t,o),r===1&&Et===0&&!(e.mode&1)&&(Gn=Yt()+500,ki&&Pr()))}function xe(t,e){var r=t.callbackNode;jm(t,e);var o=Vs(t,t===te?ne:0);if(o===0)r!==null&&og(r),t.callbackNode=null,t.callbackPriority=0;else if(e=o&-o,t.callbackPriority!==e){if(r!=null&&og(r),e===1)t.tag===0?jf(Xg.bind(null,t)):Yu(Xg.bind(null,t)),vf(function(){!(Et&6)&&Pr()}),r=null;else{switch(wu(o)){case 1:r=Ga;break;case 4:r=vu;break;case 16:r=Us;break;case 536870912:r=xu;break;default:r=Us}r=Ub(r,Lb.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function Lb(t,e){if(Ls=-1,Ps=0,Et&6)throw Error(X(327));var r=t.callbackNode;if(Wn()&&t.callbackNode!==r)return null;var o=Vs(t,t===te?ne:0);if(o===0)return null;if(o&30||o&t.expiredLanes||e)e=gi(t,o);else{e=o;var s=Et;Et|=2;var i=$b();(te!==t||ne!==e)&&(lr=null,Gn=Yt()+500,Xr(t,e));do try{Gf();break}catch(a){Pb(t,a)}while(!0);nd(),li.current=i,Et=s,Kt!==null?e=0:(te=null,ne=0,e=Jt)}if(e!==0){if(e===2&&(s=Ol(t),s!==0&&(o=s,e=fa(t,s))),e===1)throw r=Uo,Xr(t,0),jr(t,o),xe(t,Yt()),r;if(e===6)jr(t,o);else{if(s=t.current.alternate,!(o&30)&&!Of(s)&&(e=gi(t,o),e===2&&(i=Ol(t),i!==0&&(o=i,e=fa(t,i))),e===1))throw r=Uo,Xr(t,0),jr(t,o),xe(t,Yt()),r;switch(t.finishedWork=s,t.finishedLanes=o,e){case 0:case 1:throw Error(X(345));case 2:Gr(t,fe,lr);break;case 3:if(jr(t,o),(o&130023424)===o&&(e=yd+500-Yt(),10<e)){if(Vs(t,0)!==0)break;if(s=t.suspendedLanes,(s&o)!==o){be(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Xl(Gr.bind(null,t,fe,lr),e);break}Gr(t,fe,lr);break;case 4:if(jr(t,o),(o&4194240)===o)break;for(e=t.eventTimes,s=-1;0<o;){var l=31-He(o);i=1<<l,l=e[l],l>s&&(s=l),o&=~i}if(o=s,o=Yt()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Nf(o/1960))-o,10<o){t.timeoutHandle=Xl(Gr.bind(null,t,fe,lr),o);break}Gr(t,fe,lr);break;case 5:Gr(t,fe,lr);break;default:throw Error(X(329))}}}return xe(t,Yt()),t.callbackNode===r?Lb.bind(null,t):null}function fa(t,e){var r=Co;return t.current.memoizedState.isDehydrated&&(Xr(t,e).flags|=256),t=gi(t,e),t!==2&&(e=fe,fe=r,e!==null&&ha(e)),t}function ha(t){fe===null?fe=t:fe.push.apply(fe,t)}function Of(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var s=r[o],i=s.getSnapshot;s=s.value;try{if(!Ue(i(),s))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function jr(t,e){for(e&=~hd,e&=~Ci,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-He(e),o=1<<r;t[r]=-1,e&=~o}}function Xg(t){if(Et&6)throw Error(X(327));Wn();var e=Vs(t,0);if(!(e&1))return xe(t,Yt()),null;var r=gi(t,e);if(t.tag!==0&&r===2){var o=Ol(t);o!==0&&(e=o,r=fa(t,o))}if(r===1)throw r=Uo,Xr(t,0),jr(t,e),xe(t,Yt()),r;if(r===6)throw Error(X(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gr(t,fe,lr),xe(t,Yt()),null}function vd(t,e){var r=Et;Et|=1;try{return t(e)}finally{Et=r,Et===0&&(Gn=Yt()+500,ki&&Pr())}}function rn(t){Ir!==null&&Ir.tag===0&&!(Et&6)&&Wn();var e=Et;Et|=1;var r=Fe.transition,o=Rt;try{if(Fe.transition=null,Rt=1,t)return t()}finally{Rt=o,Fe.transition=r,Et=e,!(Et&6)&&Pr()}}function xd(){we=Bn.current,_t(Bn)}function Xr(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,yf(r)),Kt!==null)for(r=Kt.return;r!==null;){var o=r;switch(td(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Js();break;case 3:On(),_t(ye),_t(ce),dd();break;case 5:ad(o);break;case 4:On();break;case 13:_t(Nt);break;case 19:_t(Nt);break;case 10:od(o.type._context);break;case 22:case 23:xd()}r=r.return}if(te=t,Kt=t=Ar(t.current,null),ne=we=e,Jt=0,Uo=null,hd=Ci=en=0,fe=Co=null,Yr!==null){for(e=0;e<Yr.length;e++)if(r=Yr[e],o=r.interleaved,o!==null){r.interleaved=null;var s=o.next,i=r.pending;if(i!==null){var l=i.next;i.next=s,o.next=l}r.pending=o}Yr=null}return t}function Pb(t,e){do{var r=Kt;try{if(nd(),Ms.current=ii,si){for(var o=Ot.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}si=!1}if(tn=0,qt=Xt=Ot=null,jo=!1,Oo=0,fd.current=null,r===null||r.return===null){Jt=1,Uo=e,Kt=null;break}t:{var i=t,l=r.return,a=r,d=e;if(e=ne,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var g=d,h=a,y=h.tag;if(!(h.mode&1)&&(y===0||y===11||y===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=_g(l);if(w!==null){w.flags&=-257,Lg(w,l,a,i,e),w.mode&1&&Wg(i,g,e),e=w,d=g;var k=e.updateQueue;if(k===null){var j=new Set;j.add(d),e.updateQueue=j}else k.add(d);break t}else{if(!(e&1)){Wg(i,g,e),kd();break t}d=Error(X(426))}}else if(Pt&&a.mode&1){var z=_g(l);if(z!==null){!(z.flags&65536)&&(z.flags|=256),Lg(z,l,a,i,e),ed(Hn(d,a));break t}}i=d=Hn(d,a),Jt!==4&&(Jt=2),Co===null?Co=[i]:Co.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var p=wb(i,d,e);Bg(i,p);break t;case 1:a=d;var c=i.type,u=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Rr===null||!Rr.has(u)))){i.flags|=65536,e&=-e,i.lanes|=e;var v=jb(i,a,e);Bg(i,v);break t}}i=i.return}while(i!==null)}Ob(r)}catch(S){e=S,Kt===r&&r!==null&&(Kt=r=r.return);continue}break}while(!0)}function $b(){var t=li.current;return li.current=ii,t===null?ii:t}function kd(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),te===null||!(en&268435455)&&!(Ci&268435455)||jr(te,ne)}function gi(t,e){var r=Et;Et|=2;var o=$b();(te!==t||ne!==e)&&(lr=null,Xr(t,e));do try{Hf();break}catch(s){Pb(t,s)}while(!0);if(nd(),Et=r,li.current=o,Kt!==null)throw Error(X(261));return te=null,ne=0,Jt}function Hf(){for(;Kt!==null;)Nb(Kt)}function Gf(){for(;Kt!==null&&!pm();)Nb(Kt)}function Nb(t){var e=Gb(t.alternate,t,we);t.memoizedProps=t.pendingProps,e===null?Ob(t):Kt=e,fd.current=null}function Ob(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=_f(r,e),r!==null){r.flags&=32767,Kt=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Jt=6,Kt=null;return}}else if(r=Wf(r,e,we),r!==null){Kt=r;return}if(e=e.sibling,e!==null){Kt=e;return}Kt=e=t}while(e!==null);Jt===0&&(Jt=5)}function Gr(t,e,r){var o=Rt,s=Fe.transition;try{Fe.transition=null,Rt=1,Uf(t,e,r,o)}finally{Fe.transition=s,Rt=o}return null}function Uf(t,e,r,o){do Wn();while(Ir!==null);if(Et&6)throw Error(X(327));r=t.finishedWork;var s=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(X(177));t.callbackNode=null,t.callbackPriority=0;var i=r.lanes|r.childLanes;if(Sm(t,i),t===te&&(Kt=te=null,ne=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ms||(ms=!0,Ub(Us,function(){return Wn(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=Fe.transition,Fe.transition=null;var l=Rt;Rt=1;var a=Et;Et|=4,fd.current=null,Pf(t,r),Wb(r,t),cf(Ql),Ys=!!Yl,Ql=Yl=null,t.current=r,$f(r),mm(),Et=a,Rt=l,Fe.transition=i}else t.current=r;if(ms&&(ms=!1,Ir=t,di=s),i=t.pendingLanes,i===0&&(Rr=null),ym(r.stateNode),xe(t,Yt()),e!==null)for(o=t.onRecoverableError,r=0;r<e.length;r++)s=e[r],o(s.value,{componentStack:s.stack,digest:s.digest});if(ai)throw ai=!1,t=pa,pa=null,t;return di&1&&t.tag!==0&&Wn(),i=t.pendingLanes,i&1?t===ma?Io++:(Io=0,ma=t):Io=0,Pr(),null}function Wn(){if(Ir!==null){var t=wu(di),e=Fe.transition,r=Rt;try{if(Fe.transition=null,Rt=16>t?16:t,Ir===null)var o=!1;else{if(t=Ir,Ir=null,di=0,Et&6)throw Error(X(331));var s=Et;for(Et|=4,lt=t.current;lt!==null;){var i=lt,l=i.child;if(lt.flags&16){var a=i.deletions;if(a!==null){for(var d=0;d<a.length;d++){var g=a[d];for(lt=g;lt!==null;){var h=lt;switch(h.tag){case 0:case 11:case 15:So(8,h,i)}var y=h.child;if(y!==null)y.return=h,lt=y;else for(;lt!==null;){h=lt;var f=h.sibling,w=h.return;if(Fb(h),h===g){lt=null;break}if(f!==null){f.return=w,lt=f;break}lt=w}}}var k=i.alternate;if(k!==null){var j=k.child;if(j!==null){k.child=null;do{var z=j.sibling;j.sibling=null,j=z}while(j!==null)}}lt=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,lt=l;else t:for(;lt!==null;){if(i=lt,i.flags&2048)switch(i.tag){case 0:case 11:case 15:So(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,lt=p;break t}lt=i.return}}var c=t.current;for(lt=c;lt!==null;){l=lt;var u=l.child;if(l.subtreeFlags&2064&&u!==null)u.return=l,lt=u;else t:for(l=c;lt!==null;){if(a=lt,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Si(9,a)}}catch(S){Vt(a,a.return,S)}if(a===l){lt=null;break t}var v=a.sibling;if(v!==null){v.return=a.return,lt=v;break t}lt=a.return}}if(Et=s,Pr(),er&&typeof er.onPostCommitFiberRoot=="function")try{er.onPostCommitFiberRoot(fi,t)}catch{}o=!0}return o}finally{Rt=r,Fe.transition=e}}return!1}function Jg(t,e,r){e=Hn(r,e),e=wb(t,e,1),t=Dr(t,e,1),e=be(),t!==null&&(Yo(t,1,e),xe(t,e))}function Vt(t,e,r){if(t.tag===3)Jg(t,t,r);else for(;e!==null;){if(e.tag===3){Jg(e,t,r);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Rr===null||!Rr.has(o))){t=Hn(r,t),t=jb(e,t,1),e=Dr(e,t,1),t=be(),e!==null&&(Yo(e,1,t),xe(e,t));break}}e=e.return}}function Vf(t,e,r){var o=t.pingCache;o!==null&&o.delete(e),e=be(),t.pingedLanes|=t.suspendedLanes&r,te===t&&(ne&r)===r&&(Jt===4||Jt===3&&(ne&130023424)===ne&&500>Yt()-yd?Xr(t,0):hd|=r),xe(t,e)}function Hb(t,e){e===0&&(t.mode&1?(e=ss,ss<<=1,!(ss&130023424)&&(ss=4194304)):e=1);var r=be();t=mr(t,e),t!==null&&(Yo(t,e,r),xe(t,r))}function Yf(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),Hb(t,r)}function Qf(t,e){var r=0;switch(t.tag){case 13:var o=t.stateNode,s=t.memoizedState;s!==null&&(r=s.retryLane);break;case 19:o=t.stateNode;break;default:throw Error(X(314))}o!==null&&o.delete(e),Hb(t,r)}var Gb;Gb=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||ye.current)he=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return he=!1,Mf(t,e,r);he=!!(t.flags&131072)}else he=!1,Pt&&e.flags&1048576&&Qu(e,ti,e.index);switch(e.lanes=0,e.tag){case 2:var o=e.type;_s(t,e),t=e.pendingProps;var s=Pn(e,ce.current);Mn(e,r),s=cd(null,e,o,t,s,r);var i=ud();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ve(o)?(i=!0,Zs(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,id(e),s.updater=ji,e.stateNode=s,s._reactInternals=e,na(e,o,t,r),e=ia(null,e,o,!0,i,r)):(e.tag=0,Pt&&i&&qa(e),ue(null,e,s,r),e=e.child),e;case 16:o=e.elementType;t:{switch(_s(t,e),t=e.pendingProps,s=o._init,o=s(o._payload),e.type=o,s=e.tag=Xf(o),t=$e(o,t),s){case 0:e=sa(null,e,o,t,r);break t;case 1:e=Ng(null,e,o,t,r);break t;case 11:e=Pg(null,e,o,t,r);break t;case 14:e=$g(null,e,o,$e(o.type,t),r);break t}throw Error(X(306,o,""))}return e;case 0:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:$e(o,s),sa(t,e,o,s,r);case 1:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:$e(o,s),Ng(t,e,o,s,r);case 3:t:{if(zb(e),t===null)throw Error(X(387));o=e.pendingProps,i=e.memoizedState,s=i.element,tb(t,e),ni(e,o,null,r);var l=e.memoizedState;if(o=l.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Hn(Error(X(423)),e),e=Og(t,e,o,r,s);break t}else if(o!==s){s=Hn(Error(X(424)),e),e=Og(t,e,o,r,s);break t}else for(Se=Br(e.stateNode.containerInfo.firstChild),Ce=e,Pt=!0,Oe=null,r=Zu(e,null,o,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if($n(),o===s){e=fr(t,e,r);break t}ue(t,e,o,r)}e=e.child}return e;case 5:return eb(e),t===null&&ta(e),o=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,l=s.children,Kl(o,s)?l=null:i!==null&&Kl(o,i)&&(e.flags|=32),Ib(t,e),ue(t,e,l,r),e.child;case 6:return t===null&&ta(e),null;case 13:return Tb(t,e,r);case 4:return ld(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=Nn(e,null,o,r):ue(t,e,o,r),e.child;case 11:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:$e(o,s),Pg(t,e,o,s,r);case 7:return ue(t,e,e.pendingProps,r),e.child;case 8:return ue(t,e,e.pendingProps.children,r),e.child;case 12:return ue(t,e,e.pendingProps.children,r),e.child;case 10:t:{if(o=e.type._context,s=e.pendingProps,i=e.memoizedProps,l=s.value,At(ei,o._currentValue),o._currentValue=l,i!==null)if(Ue(i.value,l)){if(i.children===s.children&&!ye.current){e=fr(t,e,r);break t}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var d=a.firstContext;d!==null;){if(d.context===o){if(i.tag===1){d=ur(-1,r&-r),d.tag=2;var g=i.updateQueue;if(g!==null){g=g.shared;var h=g.pending;h===null?d.next=d:(d.next=h.next,h.next=d),g.pending=d}}i.lanes|=r,d=i.alternate,d!==null&&(d.lanes|=r),ea(i.return,r,e),a.lanes|=r;break}d=d.next}}else if(i.tag===10)l=i.type===e.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(X(341));l.lanes|=r,a=l.alternate,a!==null&&(a.lanes|=r),ea(l,r,e),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===e){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ue(t,e,s.children,r),e=e.child}return e;case 9:return s=e.type,o=e.pendingProps.children,Mn(e,r),s=Ae(s),o=o(s),e.flags|=1,ue(t,e,o,r),e.child;case 14:return o=e.type,s=$e(o,e.pendingProps),s=$e(o.type,s),$g(t,e,o,s,r);case 15:return Sb(t,e,e.type,e.pendingProps,r);case 17:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:$e(o,s),_s(t,e),e.tag=1,ve(o)?(t=!0,Zs(e)):t=!1,Mn(e,r),kb(e,o,s),na(e,o,s,r),ia(null,e,o,!0,t,r);case 19:return Eb(t,e,r);case 22:return Cb(t,e,r)}throw Error(X(156,e.tag))};function Ub(t,e){return yu(t,e)}function Kf(t,e,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(t,e,r,o){return new Kf(t,e,r,o)}function wd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xf(t){if(typeof t=="function")return wd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Na)return 11;if(t===Oa)return 14}return 2}function Ar(t,e){var r=t.alternate;return r===null?(r=Re(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function $s(t,e,r,o,s,i){var l=2;if(o=t,typeof t=="function")wd(t)&&(l=1);else if(typeof t=="string")l=5;else t:switch(t){case xn:return Jr(r.children,s,i,e);case $a:l=8,s|=8;break;case zl:return t=Re(12,r,e,s|2),t.elementType=zl,t.lanes=i,t;case Tl:return t=Re(13,r,e,s),t.elementType=Tl,t.lanes=i,t;case El:return t=Re(19,r,e,s),t.elementType=El,t.lanes=i,t;case eu:return Ii(r,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qc:l=10;break t;case tu:l=9;break t;case Na:l=11;break t;case Oa:l=14;break t;case vr:l=16,o=null;break t}throw Error(X(130,t==null?t:typeof t,""))}return e=Re(l,r,e,s),e.elementType=t,e.type=o,e.lanes=i,e}function Jr(t,e,r,o){return t=Re(7,t,o,e),t.lanes=r,t}function Ii(t,e,r,o){return t=Re(22,t,o,e),t.elementType=eu,t.lanes=r,t.stateNode={isHidden:!1},t}function ll(t,e,r){return t=Re(6,t,null,e),t.lanes=r,t}function al(t,e,r){return e=Re(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Jf(t,e,r,o,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oi(0),this.expirationTimes=Oi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oi(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function jd(t,e,r,o,s,i,l,a,d){return t=new Jf(t,e,r,a,d),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Re(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},id(i),t}function Zf(t,e,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vn,key:o==null?null:""+o,children:t,containerInfo:e,implementation:r}}function Vb(t){if(!t)return Wr;t=t._reactInternals;t:{if(ln(t)!==t||t.tag!==1)throw Error(X(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break t;case 1:if(ve(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break t}}e=e.return}while(e!==null);throw Error(X(171))}if(t.tag===1){var r=t.type;if(ve(r))return Vu(t,r,e)}return e}function Yb(t,e,r,o,s,i,l,a,d){return t=jd(r,o,!0,t,s,i,l,a,d),t.context=Vb(null),r=t.current,o=be(),s=Fr(r),i=ur(o,s),i.callback=e??null,Dr(r,i,s),t.current.lanes=s,Yo(t,s,o),xe(t,o),t}function zi(t,e,r,o){var s=e.current,i=be(),l=Fr(s);return r=Vb(r),e.context===null?e.context=r:e.pendingContext=r,e=ur(i,l),e.payload={element:t},o=o===void 0?null:o,o!==null&&(e.callback=o),t=Dr(s,e,l),t!==null&&(Ge(t,s,l,i),As(t,s,l)),l}function ci(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Zg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function Sd(t,e){Zg(t,e),(t=t.alternate)&&Zg(t,e)}function qf(){return null}var Qb=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cd(t){this._internalRoot=t}Ti.prototype.render=Cd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(X(409));zi(t,e,null,null)};Ti.prototype.unmount=Cd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;rn(function(){zi(null,t,null,null)}),e[pr]=null}};function Ti(t){this._internalRoot=t}Ti.prototype.unstable_scheduleHydration=function(t){if(t){var e=Cu();t={blockedOn:null,target:t,priority:e};for(var r=0;r<wr.length&&e!==0&&e<wr[r].priority;r++);wr.splice(r,0,t),r===0&&zu(t)}};function Id(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ei(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qg(){}function th(t,e,r,o,s){if(s){if(typeof o=="function"){var i=o;o=function(){var g=ci(l);i.call(g)}}var l=Yb(e,o,t,0,null,!1,!1,"",qg);return t._reactRootContainer=l,t[pr]=l.current,_o(t.nodeType===8?t.parentNode:t),rn(),l}for(;s=t.lastChild;)t.removeChild(s);if(typeof o=="function"){var a=o;o=function(){var g=ci(d);a.call(g)}}var d=jd(t,0,!1,null,null,!1,!1,"",qg);return t._reactRootContainer=d,t[pr]=d.current,_o(t.nodeType===8?t.parentNode:t),rn(function(){zi(e,d,r,o)}),d}function Bi(t,e,r,o,s){var i=r._reactRootContainer;if(i){var l=i;if(typeof s=="function"){var a=s;s=function(){var d=ci(l);a.call(d)}}zi(e,l,t,s)}else l=th(r,e,t,s,o);return ci(l)}ju=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=uo(e.pendingLanes);r!==0&&(Ua(e,r|1),xe(e,Yt()),!(Et&6)&&(Gn=Yt()+500,Pr()))}break;case 13:rn(function(){var o=mr(t,1);if(o!==null){var s=be();Ge(o,t,1,s)}}),Sd(t,1)}};Va=function(t){if(t.tag===13){var e=mr(t,134217728);if(e!==null){var r=be();Ge(e,t,134217728,r)}Sd(t,134217728)}};Su=function(t){if(t.tag===13){var e=Fr(t),r=mr(t,e);if(r!==null){var o=be();Ge(r,t,e,o)}Sd(t,e)}};Cu=function(){return Rt};Iu=function(t,e){var r=Rt;try{return Rt=t,e()}finally{Rt=r}};Pl=function(t,e,r){switch(e){case"input":if(Rl(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var o=r[e];if(o!==t&&o.form===t.form){var s=xi(o);if(!s)throw Error(X(90));nu(o),Rl(o,s)}}}break;case"textarea":su(t,r);break;case"select":e=r.value,e!=null&&Dn(t,!!r.multiple,e,!1)}};uu=vd;bu=rn;var eh={usingClientEntryPoint:!1,Events:[Ko,Sn,xi,gu,cu,vd]},ao={findFiberByHostInstance:Vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rh={bundleType:ao.bundleType,version:ao.version,rendererPackageName:ao.rendererPackageName,rendererConfig:ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=fu(t),t===null?null:t.stateNode},findFiberByHostInstance:ao.findFiberByHostInstance||qf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fs.isDisabled&&fs.supportsFiber)try{fi=fs.inject(rh),er=fs}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eh;ze.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Id(e))throw Error(X(200));return Zf(t,e,null,r)};ze.createRoot=function(t,e){if(!Id(t))throw Error(X(299));var r=!1,o="",s=Qb;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=jd(t,1,!1,null,null,r,!1,o,s),t[pr]=e.current,_o(t.nodeType===8?t.parentNode:t),new Cd(e)};ze.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(X(188)):(t=Object.keys(t).join(","),Error(X(268,t)));return t=fu(e),t=t===null?null:t.stateNode,t};ze.flushSync=function(t){return rn(t)};ze.hydrate=function(t,e,r){if(!Ei(e))throw Error(X(200));return Bi(null,t,e,!0,r)};ze.hydrateRoot=function(t,e,r){if(!Id(t))throw Error(X(405));var o=r!=null&&r.hydratedSources||null,s=!1,i="",l=Qb;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),e=Yb(e,null,t,1,r??null,s,!1,i,l),t[pr]=e.current,_o(t),o)for(t=0;t<o.length;t++)r=o[t],s=r._getVersion,s=s(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,s]:e.mutableSourceEagerHydrationData.push(r,s);return new Ti(e)};ze.render=function(t,e,r){if(!Ei(e))throw Error(X(200));return Bi(null,t,e,!1,r)};ze.unmountComponentAtNode=function(t){if(!Ei(t))throw Error(X(40));return t._reactRootContainer?(rn(function(){Bi(null,null,t,!1,function(){t._reactRootContainer=null,t[pr]=null})}),!0):!1};ze.unstable_batchedUpdates=vd;ze.unstable_renderSubtreeIntoContainer=function(t,e,r,o){if(!Ei(r))throw Error(X(200));if(t==null||t._reactInternals===void 0)throw Error(X(38));return Bi(t,e,r,!1,o)};ze.version="18.3.1-next-f1338f8080-20240426";function Kb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kb)}catch(t){console.error(t)}}Kb(),Kc.exports=ze;var nh=Kc.exports,Xb,tc=nh;Xb=tc.createRoot,tc.hydrateRoot;/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Jb=(...t)=>t.filter((e,r,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===r).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=b.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:s="",children:i,iconNode:l,...a},d)=>b.createElement("svg",{ref:d,...sh,width:e,height:e,stroke:t,strokeWidth:o?Number(r)*24/Number(e):r,className:Jb("lucide",s),...a},[...l.map(([g,h])=>b.createElement(g,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=(t,e)=>{const r=b.forwardRef(({className:o,...s},i)=>b.createElement(ih,{ref:i,iconNode:e,className:Jb(`lucide-${oh(t)}`,o),...s}));return r.displayName=`${t}`,r};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=it("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=it("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=it("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=it("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=it("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=it("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=it("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=it("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=it("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=it("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=it("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=it("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=it("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=it("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=it("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=it("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=it("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=it("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=it("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=it("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=it("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=it("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=it("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=it("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=it("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=it("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=it("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=it("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=it("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=it("Images",[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=it("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=it("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=it("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=it("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=it("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=it("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=it("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=it("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=it("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=it("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=it("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=it("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=it("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=it("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=it("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=it("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=it("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=it("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=it("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=it("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=it("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=it("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=it("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=it("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=it("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=it("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=it("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=it("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=it("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=it("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=it("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=it("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=it("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=it("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=it("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=it("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=it("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=it("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=it("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=it("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),Bd="anvil_token",Dd=()=>localStorage.getItem(Bd),Lh=t=>localStorage.setItem(Bd,t),wa=()=>localStorage.removeItem(Bd),Q=async(t,e,r)=>{const o={};r!==void 0&&(o["Content-Type"]="application/json");const s=Dd();s&&(o.Authorization=`Bearer ${s}`);const i=await fetch(`/api${e}`,{method:t,headers:o,body:r!==void 0?JSON.stringify(r):void 0});if(i.status===401)throw wa(),window.dispatchEvent(new Event("anvil-unauthorized")),new Error("Not authenticated");if(i.status===204)return null;if(!i.ok){const l=await i.text();let a=l;try{a=JSON.parse(l).detail||l}catch{}throw new Error(a||`HTTP ${i.status}`)}return i.json()},O={register:t=>Q("POST","/auth/register",t),login:t=>Q("POST","/auth/login",t),me:()=>Q("GET","/auth/me"),getGcalStatus:()=>Q("GET","/auth/google/status"),connectGoogle:()=>{window.location.href=`/api/auth/google?token=${encodeURIComponent(Dd()||"")}`},disconnectGoogle:()=>Q("DELETE","/auth/google"),getPillars:()=>Q("GET","/pillars"),getFocus:()=>Q("GET","/focus"),createFocus:t=>Q("POST","/focus",t),deleteFocus:t=>Q("DELETE",`/focus/${t}`),addScreenTime:(t,e)=>Q("POST","/screentime",{screen:t,seconds:e}),getScreenTime:()=>Q("GET","/screentime"),getPayouts:()=>Q("GET","/rewards/payouts"),createPayout:t=>Q("POST","/rewards/payouts",t),deletePayout:t=>Q("DELETE",`/rewards/payouts/${t}`),getRewardRates:()=>Q("GET","/rewards/rates"),setRewardRate:t=>Q("POST","/rewards/rates",t),getMedia:()=>Q("GET","/media"),createMedia:t=>Q("POST","/media",t),updateMedia:(t,e)=>Q("PUT",`/media/${t}`,e),deleteMedia:t=>Q("DELETE",`/media/${t}`),restoreMedia:t=>Q("POST",`/media/${t}/restore`),getDecks:()=>Q("GET","/spiritual/decks"),createDeck:t=>Q("POST","/spiritual/decks",t),deleteDeck:t=>Q("DELETE",`/spiritual/decks/${t}`),getGoldenGoals:()=>Q("GET","/golden/goals"),getGoldenGoal:t=>Q("GET",`/golden/goals/${t}`),createGolden:t=>Q("POST","/golden/goals",t),updateGolden:(t,e)=>Q("PUT",`/golden/goals/${t}`,e),achieveGolden:t=>Q("POST",`/golden/goals/${t}/achieve`),unachieveGolden:t=>Q("POST",`/golden/goals/${t}/unachieve`),upsertGoldenEntry:(t,e)=>Q("PUT",`/golden/goals/${t}/entry`,e),deleteGolden:t=>Q("DELETE",`/golden/goals/${t}`),restoreGolden:t=>Q("POST",`/golden/goals/${t}/restore`),getKickstart:()=>Q("GET","/kickstart/videos"),createKickstart:t=>Q("POST","/kickstart/videos",t),updateKickstart:(t,e)=>Q("PUT",`/kickstart/videos/${t}`,e),deleteKickstart:t=>Q("DELETE",`/kickstart/videos/${t}`),restoreKickstart:t=>Q("POST",`/kickstart/videos/${t}/restore`),getTxns:()=>Q("GET","/finance/txns"),createTxn:t=>Q("POST","/finance/txns",t),updateTxn:(t,e)=>Q("PUT",`/finance/txns/${t}`,e),deleteTxn:t=>Q("DELETE",`/finance/txns/${t}`),restoreTxn:t=>Q("POST",`/finance/txns/${t}/restore`),getSetting:t=>Q("GET",`/settings/${t}`),setSetting:(t,e)=>Q("PUT",`/settings/${t}`,{value:e}),getTasks:()=>Q("GET","/tasks"),createTask:t=>Q("POST","/tasks",t),updateTask:(t,e)=>Q("PUT",`/tasks/${t}`,e),deleteTask:t=>Q("DELETE",`/tasks/${t}`),restoreTask:t=>Q("POST",`/tasks/${t}/restore`),scheduleTask:t=>Q("PUT",`/tasks/${t}/schedule`),getGoals:t=>Q("GET",`/goals${t?`?pillar=${encodeURIComponent(t)}`:""}`),createGoal:t=>Q("POST","/goals",t),updateGoal:(t,e)=>Q("PUT",`/goals/${t}`,e),deleteGoal:t=>Q("DELETE",`/goals/${t}`),restoreGoal:t=>Q("POST",`/goals/${t}/restore`),getHabits:()=>Q("GET","/habits"),createHabit:t=>Q("POST","/habits",t),updateHabit:(t,e)=>Q("PUT",`/habits/${t}`,e),deleteHabit:t=>Q("DELETE",`/habits/${t}`),restoreHabit:t=>Q("POST",`/habits/${t}/restore`),toggleHabitLog:(t,e)=>Q("POST",`/habits/${t}/log/${e}`),setHabitLogNote:(t,e,r)=>Q("PUT",`/habits/${t}/log/${e}/note`,{note:r}),setHabitLogCount:(t,e,r,o)=>Q("PUT",`/habits/${t}/log/${e}/count`,{count:r,note:o}),clearHabitLog:(t,e)=>Q("DELETE",`/habits/${t}/log/${e}`),getHabitsYearly:t=>Q("GET",`/habits/yearly/${t}`),getJournalEntry:t=>Q("GET",`/journal/${t}`),getJournalHistory:(t,e)=>Q("GET",`/journal/history/${t}/${e}`),updateJournalMood:(t,e)=>Q("PUT",`/journal/${t}`,{mood:e}),addJournalBullet:(t,e,r)=>Q("POST",`/journal/${t}/bullets`,{section:e,text:r}),deleteJournalBullet:t=>Q("DELETE",`/journal/bullets/${t}`),getSkills:()=>Q("GET","/skills"),createSkill:t=>Q("POST","/skills",t),updateSkill:(t,e)=>Q("PUT",`/skills/${t}`,e),deleteSkill:t=>Q("DELETE",`/skills/${t}`),restoreSkill:t=>Q("POST",`/skills/${t}/restore`),addSkillNote:(t,e,r)=>Q("POST",`/skills/${t}/notes`,{stage:e,text:r}),deleteSkillNote:t=>Q("DELETE",`/skill-notes/${t}`),updateSkillNote:(t,e)=>Q("PUT",`/skill-notes/${t}`,{text:e}),toggleSkillNote:t=>Q("PUT",`/skill-notes/${t}/toggle`),completeSkillStage:(t,e)=>Q("POST",`/skills/${t}/complete-stage`,{stage:e}),getScriptures:()=>Q("GET","/scriptures"),createScripture:t=>Q("POST","/scriptures",t),deleteScripture:t=>Q("DELETE",`/scriptures/${t}`),restoreScripture:t=>Q("POST",`/scriptures/${t}/restore`),addChapter:(t,e)=>Q("POST",`/scriptures/${t}/chapters`,e),updateChapter:(t,e)=>Q("PUT",`/chapters/${t}`,e),deleteChapter:t=>Q("DELETE",`/chapters/${t}`),restoreChapter:t=>Q("POST",`/chapters/${t}/restore`),addInsight:(t,e)=>Q("POST",`/chapters/${t}/insights`,{text:e}),deleteInsight:t=>Q("DELETE",`/insights/${t}`),getTopics:()=>Q("GET","/revision/topics"),createTopic:t=>Q("POST","/revision/topics",t),updateTopic:(t,e)=>Q("PUT",`/revision/topics/${t}`,e),deleteTopic:t=>Q("DELETE",`/revision/topics/${t}`),restoreTopic:t=>Q("POST",`/revision/topics/${t}/restore`),getDueToday:()=>Q("GET","/revision/due-today"),getCalendar:(t,e)=>Q("GET",`/revision/calendar/${t}/${e}`),toggleReviewDone:t=>Q("PUT",`/revision/reviews/${t}/done`),getAffirmations:()=>Q("GET","/affirmations"),createAffirmation:t=>Q("POST","/affirmations",t),updateAffirmation:(t,e)=>Q("PUT",`/affirmations/${t}`,e),deleteAffirmation:t=>Q("DELETE",`/affirmations/${t}`),restoreAffirmation:t=>Q("POST",`/affirmations/${t}/restore`)},Ph=7e3;function dn(t,e,r){const[o,s]=b.useState([]),i=b.useRef({}),l=b.useCallback(async(g,h="Item")=>{await t(g),r();const y=`${g}-${Date.now()}`;s(f=>[...f,{id:y,itemId:g,label:h}]),i.current[y]=setTimeout(()=>{s(f=>f.filter(w=>w.id!==y)),delete i.current[y]},Ph)},[t,r]),a=b.useCallback(async g=>{const h=o.find(y=>y.id===g);h&&(clearTimeout(i.current[g]),delete i.current[g],s(y=>y.filter(f=>f.id!==g)),await e(h.itemId),r())},[o,e,r]),d=b.useCallback(g=>{clearTimeout(i.current[g]),delete i.current[g],s(h=>h.filter(y=>y.id!==g))},[]);return{deleteItem:l,toasts:o,handleUndo:a,handleDismiss:d}}function gn({toasts:t,onUndo:e,onDismiss:r}){return n.jsx("div",{style:yn.container,children:t.map(o=>n.jsx($h,{toast:o,onUndo:e,onDismiss:r},o.id))})}function $h({toast:t,onUndo:e,onDismiss:r}){const[o,s]=b.useState(100);return b.useEffect(()=>{const i=Date.now(),l=7e3,a=setInterval(()=>{const d=Date.now()-i,g=Math.max(0,100-d/l*100);s(g),g===0&&clearInterval(a)},50);return()=>clearInterval(a)},[]),n.jsxs("div",{style:yn.toast,children:[n.jsx("div",{style:{...yn.bar,width:`${o}%`}}),n.jsxs("span",{style:yn.msg,children:[t.label," deleted"]}),n.jsx("button",{style:yn.undoBtn,onClick:()=>e(t.id),children:"Undo"}),n.jsx("button",{style:yn.closeBtn,onClick:()=>r(t.id),children:"×"})]})}const yn={container:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",gap:8,zIndex:999,pointerEvents:"none"},toast:{position:"relative",display:"flex",alignItems:"center",gap:12,background:"var(--accent-strong)",color:"#fff",borderRadius:10,padding:"12px 16px",fontSize:13.5,fontFamily:"'Inter', system-ui, sans-serif",boxShadow:"0 4px 20px rgba(0,0,0,0.25)",minWidth:260,overflow:"hidden",pointerEvents:"all"},bar:{position:"absolute",bottom:0,left:0,height:3,background:"#4C9A6B",transition:"width 0.05s linear",borderRadius:"0 0 0 10px"},msg:{flex:1,fontWeight:500},undoBtn:{border:"1px solid rgba(255,255,255,0.3)",background:"none",color:"#4C9A6B",fontWeight:700,fontSize:13,padding:"4px 10px",borderRadius:6,cursor:"pointer",fontFamily:"inherit"},closeBtn:{border:"none",background:"none",color:"rgba(255,255,255,0.5)",cursor:"pointer",fontSize:18,lineHeight:1,padding:"0 2px"}},ys={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},nc=[{id:"Q1",symbol:"™",title:"Do Now",sub:"Important · Urgent",accent:"#C2536B"},{id:"Q2",symbol:"©",title:"Schedule",sub:"Important · Not Urgent",accent:"#3A7CA5"},{id:"Q3",symbol:"®",title:"Delegate",sub:"Not Important · Urgent",accent:"#C9A227"},{id:"Q4",symbol:"•",title:"Drop",sub:"Not Important · Not Urgent",accent:"#8A8780"}];function Nh(){return new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Kolkata"})}function Oh(){const t=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"})),r=t.getMinutes()<30?30:0,o=r===0?t.getHours()+1:t.getHours();return`${String(o%24).padStart(2,"0")}:${String(r).padStart(2,"0")}`}function Hh(t,e){const[r,o]=t.split(":").map(Number),s=r*60+o+e;return`${String(Math.floor(s/60)%24).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`}function Gh(t){return t?new Date(t).toLocaleString("en-IN",{timeZone:"Asia/Kolkata",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0}):""}const dl=()=>({title:"",pillar:"Financial",est:30,date:Nh(),startTime:Oh()});function Uh(){const[t,e]=b.useState([]),[r,o]=b.useState(null),[s,i]=b.useState(dl()),[l,a]=b.useState({connected:!1,configured:!1}),d=b.useCallback(()=>O.getTasks().then(e).catch(console.error),[]);b.useEffect(()=>{d(),O.getGcalStatus().then(a).catch(()=>{})},[d]);const{deleteItem:g,toasts:h,handleUndo:y,handleDismiss:f}=dn(O.deleteTask,O.restoreTask,d),w=u=>t.filter(v=>v.quadrant===u),k=u=>w(u).reduce((v,S)=>v+S.time_estimate_min,0),j=u=>u>=60?`${Math.floor(u/60)}h${u%60?` ${u%60}m`:""}`:`${u}m`,z=u=>{var S;return`${((S=nc.find(T=>T.id===u.quadrant))==null?void 0:S.symbol)??""} ${u.title}`},p=async u=>{if(!s.title.trim())return;const v=s.date&&s.startTime?`${s.date}T${s.startTime}:00`:null;await O.createTask({pillar:s.pillar,title:s.title,quadrant:u,time_estimate_min:Number(s.est)||30,start_datetime:v}),i(dl()),o(null),d()},c=(u,v)=>g(u,v);return n.jsxs("div",{style:pt.page,children:[n.jsxs("div",{style:pt.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:pt.eyebrow,children:"Anvil · Weekly Routing"}),n.jsx("h1",{style:pt.h1,children:"Weekly Routing"})]}),n.jsxs("div",{style:pt.headRight,children:[n.jsx("div",{style:pt.legend,children:Object.entries(ys).map(([u,v])=>n.jsxs("span",{style:pt.legendItem,children:[n.jsx("span",{style:{...pt.dot,background:v.dot}}),u]},u))}),l.configured&&(l.connected?n.jsxs("button",{style:pt.gcalBadgeOn,title:"Disconnect Google Calendar",onClick:()=>O.disconnectGoogle().then(()=>a({...l,connected:!1})),children:[n.jsx(hs,{size:13})," Google Calendar connected"]}):n.jsxs("button",{style:pt.gcalBadgeOff,onClick:()=>O.connectGoogle(),children:[n.jsx(hs,{size:13})," Connect Google Calendar"]}))]})]}),n.jsx("div",{style:pt.grid,children:nc.map(u=>n.jsxs("section",{style:{...pt.quad,borderTop:`3px solid ${u.accent}`},children:[n.jsxs("header",{style:pt.quadHead,children:[n.jsxs("div",{style:pt.quadTitleRow,children:[n.jsx("span",{style:{...pt.symbol,color:u.accent},children:u.symbol}),n.jsxs("div",{children:[n.jsx("div",{style:pt.quadTitle,children:u.title}),n.jsx("div",{style:pt.quadSub,children:u.sub})]})]}),n.jsx("span",{style:pt.quadTotal,children:j(k(u.id))})]}),n.jsxs("div",{style:pt.list,children:[w(u.id).map(v=>{const S=ys[v.pillar]||ys.Financial,T=!!v.gcal_event_id;return n.jsxs("div",{style:{...pt.card,background:S.soft},children:[n.jsx("span",{style:{...pt.cardBar,background:S.dot}}),n.jsxs("div",{style:pt.cardBody,children:[n.jsx("div",{style:pt.cardTitle,children:v.title}),v.start_datetime&&n.jsxs("div",{style:pt.eventTime,children:[n.jsx(hs,{size:10}),Gh(v.start_datetime),T&&n.jsx("span",{style:pt.syncedDot,title:"Synced to Google Calendar"})]}),n.jsxs("div",{style:pt.cardMeta,children:[n.jsxs("span",{style:pt.metaPill,children:[n.jsx("span",{style:{...pt.dot,background:S.dot,width:7,height:7}}),v.pillar]}),n.jsxs("span",{style:pt.metaPill,children:[n.jsx(ch,{size:11})," ",j(v.time_estimate_min)]})]})]}),n.jsxs("div",{style:pt.cardActions,children:[T&&n.jsx("span",{title:`On calendar as "${z(v)}"`,style:pt.calDoneIcon,children:n.jsx(zt,{size:14})}),n.jsx("button",{onClick:()=>c(v.id,v.title),style:pt.delBtn,children:n.jsx(kt,{size:13})})]})]},v.id)}),r===u.id?n.jsxs("div",{style:pt.addBox,children:[n.jsx("input",{autoFocus:!0,placeholder:"Task title",value:s.title,onChange:v=>i({...s,title:v.target.value}),onKeyDown:v=>v.key==="Enter"&&p(u.id),style:pt.input}),n.jsxs("div",{style:pt.dateTimeRow,children:[n.jsxs("div",{style:pt.dateTimeGroup,children:[n.jsx("label",{style:pt.dtLabel,children:"Date"}),n.jsx("input",{type:"date",value:s.date,onChange:v=>i({...s,date:v.target.value}),style:pt.dtInput})]}),n.jsxs("div",{style:pt.dateTimeGroup,children:[n.jsx("label",{style:pt.dtLabel,children:"Start"}),n.jsx("input",{type:"time",value:s.startTime,onChange:v=>i({...s,startTime:v.target.value}),style:pt.dtInput})]}),n.jsxs("div",{style:pt.dateTimeGroup,children:[n.jsx("label",{style:pt.dtLabel,children:"End"}),n.jsx("div",{style:pt.dtEndValue,children:Hh(s.startTime,Number(s.est)||30)})]})]}),n.jsxs("div",{style:pt.addRow,children:[n.jsx("select",{value:s.pillar,onChange:v=>i({...s,pillar:v.target.value}),style:pt.select,children:Object.keys(ys).map(v=>n.jsx("option",{children:v},v))}),n.jsx("input",{type:"number",value:s.est,onChange:v=>i({...s,est:v.target.value}),style:{...pt.input,width:60}}),n.jsx("span",{style:pt.minLabel,children:"min"}),l.connected&&n.jsx("span",{style:pt.gcalHint,title:"Will sync to Google Calendar",children:n.jsx(hs,{size:12})}),n.jsx("button",{onClick:()=>p(u.id),style:pt.saveBtn,children:n.jsx(zt,{size:14})}),n.jsx("button",{onClick:()=>{o(null),i(dl())},style:pt.cancelBtn,children:n.jsx(kt,{size:14})})]})]}):n.jsxs("button",{onClick:()=>o(u.id),style:pt.addTrigger,children:[n.jsx(ge,{size:13})," Add task"]})]})]},u.id))}),n.jsx(gn,{toasts:h,onUndo:y,onDismiss:f})]})}const pt={page:{fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:16,marginBottom:22},headRight:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:10},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces', Georgia, serif"},legend:{display:"flex",gap:14,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--text-2)",fontWeight:500},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},gcalBadgeOn:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"#4C9A6B",background:"rgba(76,154,107,0.10)",border:"1px solid rgba(76,154,107,0.3)",borderRadius:20,padding:"5px 12px",cursor:"pointer"},gcalBadgeOff:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"var(--text-2)",background:"var(--surface)",border:"1px solid #DCDAD3",borderRadius:20,padding:"5px 12px",cursor:"pointer"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16},quad:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.06)"},quadHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14},quadTitleRow:{display:"flex",gap:10,alignItems:"center"},symbol:{fontSize:20,lineHeight:1},quadTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em"},quadSub:{fontSize:11,color:"var(--text-3)",marginTop:1,letterSpacing:"0.02em"},quadTotal:{fontSize:12,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"3px 9px",borderRadius:20},list:{display:"flex",flexDirection:"column",gap:8},card:{display:"flex",alignItems:"stretch",gap:10,borderRadius:9,padding:"10px 10px 10px 0",overflow:"hidden"},cardBar:{width:3,borderRadius:3,flexShrink:0},cardBody:{flex:1,minWidth:0},cardTitle:{fontSize:13.5,fontWeight:500,lineHeight:1.35,marginBottom:4},eventTime:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#3A7CA5",fontWeight:500,marginBottom:5},syncedDot:{width:6,height:6,borderRadius:"50%",background:"#4C9A6B",display:"inline-block",marginLeft:2},cardMeta:{display:"flex",gap:8,flexWrap:"wrap"},metaPill:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"var(--text-2)",fontWeight:500},cardActions:{display:"flex",flexDirection:"column",gap:4,alignSelf:"center",flexShrink:0},calDoneIcon:{width:30,height:30,borderRadius:8,background:"#4C9A6B",color:"#fff",display:"grid",placeItems:"center"},delBtn:{width:30,height:30,borderRadius:8,border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center"},addTrigger:{display:"flex",alignItems:"center",gap:5,fontSize:12.5,color:"var(--text-3)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"8px 10px",cursor:"pointer",fontWeight:500,marginTop:2},addBox:{border:"1px solid var(--border)",borderRadius:9,padding:10,display:"flex",flexDirection:"column",gap:8},dateTimeRow:{display:"flex",gap:8,alignItems:"flex-end"},dateTimeGroup:{display:"flex",flexDirection:"column",gap:3,flex:1},dtLabel:{fontSize:10,fontWeight:600,color:"var(--text-3)",letterSpacing:"0.08em",textTransform:"uppercase"},dtInput:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},dtEndValue:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,color:"var(--text-2)",background:"var(--bg)"},addRow:{display:"flex",alignItems:"center",gap:6},input:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",flex:1,minWidth:0},select:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 8px",fontSize:12.5,fontFamily:"inherit",flex:1},minLabel:{fontSize:11,color:"var(--text-3)"},gcalHint:{color:"#3A7CA5",display:"grid",placeItems:"center"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"}},Ee={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},oc=Object.keys(Ee),gl=["Yearly","Quarterly","Monthly","Weekly"],kr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],sc=[{label:"Q1 · Jan–Mar",startMonth:0},{label:"Q2 · Apr–Jun",startMonth:3},{label:"Q3 · Jul–Sep",startMonth:6},{label:"Q4 · Oct–Dec",startMonth:9}],ja=new Date().getFullYear(),ic=Array.from({length:8},(t,e)=>ja-1+e);function Vh(t=720){const[e,r]=b.useState(()=>window.innerWidth<t);return b.useEffect(()=>{const o=()=>r(window.innerWidth<t);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[t]),e}const po=864e5,Zt=30,zo=190,mn=t=>new Date(t+"T00:00:00"),lc=t=>t.toLocaleDateString("en-US",{month:"short",day:"numeric"}),Yh=[{key:"yearly",label:"Yearly",horizons:["Yearly"]},{key:"quarterly",label:"Quarterly",horizons:["Quarterly"]},{key:"mw",label:"Monthly & Weekly",horizons:["Monthly","Weekly"]}],ac={Yearly:"Yr",Quarterly:"Q",Monthly:"Mo",Weekly:"Wk"},Qh={Yearly:"Y",Quarterly:"Q",Monthly:"M",Weekly:"W"},dc={Yearly:0,Quarterly:1,Monthly:2,Weekly:3},cl=t=>gl[Math.min(gl.indexOf(t)+1,gl.length-1)],vs=t=>{if(!t||!t.start_date)return Array.from({length:12},(l,a)=>a);const e=new Date(t.start_date+"T00:00:00"),r=new Date(t.end_date+"T00:00:00"),o=e.getFullYear(),s=e.getMonth(),i=r.getFullYear()>o?11:r.getMonth();return Array.from({length:i-s+1},(l,a)=>s+a)},xs=t=>new Date(t+"T00:00:00").getFullYear(),bp=(t,e,r)=>{const o=(r-1)*7+1,s=Math.min(o+6,new Date(t,e+1,0).getDate()),i=String(e+1).padStart(2,"0");return{start_date:`${t}-${i}-${String(o).padStart(2,"0")}`,end_date:`${t}-${i}-${String(s).padStart(2,"0")}`}},_n=(t,e,r,o=1)=>{const s=e;switch(t){case"Yearly":return{start_date:`${s}-01-01`,end_date:`${s}-12-31`};case"Quarterly":{const i=Math.floor(r/3)*3,l=i+1,a=i+3,d=new Date(s,a,0).getDate();return{start_date:`${s}-${String(l).padStart(2,"0")}-01`,end_date:`${s}-${String(a).padStart(2,"0")}-${d}`}}case"Monthly":{const i=new Date(s,r+1,0).getDate();return{start_date:`${s}-${String(r+1).padStart(2,"0")}-01`,end_date:`${s}-${String(r+1).padStart(2,"0")}-${i}`}}case"Weekly":return bp(s,r,o);default:return{start_date:`${s}-01-01`,end_date:`${s}-12-31`}}},pp=(t,e)=>{const r=new Date(t+"T00:00:00");return r.setDate(r.getDate()+e),`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`},Sa=(t,e)=>Math.round((new Date(e+"T00:00:00")-new Date(t+"T00:00:00"))/po)+1,Kh=(t,e)=>new Date(t,e+1,0).getDate(),Ca=t=>{const e=new Date(t.start_date+"T00:00:00");if(t.horizon==="Monthly")return Kh(e.getFullYear(),e.getMonth());if(t.horizon==="Weekly"){const r=Math.min(Math.max(Math.ceil(e.getDate()/7),1),4),o=bp(e.getFullYear(),e.getMonth(),r);return Sa(o.start_date,o.end_date)}return Sa(t.start_date,t.end_date)},gc=t=>Math.round(Ca(t)*1.5),Xh=t=>t.horizon==="Monthly"||t.horizon==="Weekly",Jh=(t,e)=>{const r=e.getFullYear(),o=e.getMonth();return _n("Weekly",r,o,Math.min(Math.max(Math.ceil(e.getDate()/7),1),4))},Zh=(t,e)=>{const r=new Date(t.start_date+"T00:00:00");if(t.horizon==="Yearly")return _n("Yearly",r.getFullYear()+e,0);if(t.horizon==="Quarterly"){const o=r.getFullYear()*12+Math.floor(r.getMonth()/3)*3+e*3;return _n("Quarterly",Math.floor(o/12),(o%12+12)%12)}if(t.horizon==="Monthly"){const o=r.getFullYear()*12+r.getMonth()+e;return _n("Monthly",Math.floor(o/12),(o%12+12)%12)}return Jh("Weekly",new Date(pp(t.start_date,e*7)+"T00:00:00"))},qh=t=>{if(!t.start_date)return"";const e=new Date(t.start_date+"T00:00:00"),r=e.getMonth();switch(t.horizon){case"Yearly":return`${e.getFullYear()}`;case"Quarterly":return`Q${Math.floor(r/3)+1} ${e.getFullYear()}`;case"Monthly":return`${kr[r]} ${e.getFullYear()}`;case"Weekly":return`${kr[r]} W${Math.ceil(e.getDate()/7)}`;default:return""}};function ty(){const[t,e]=b.useState([]),[r,o]=b.useState("All"),[s,i]=b.useState({}),[l,a]=b.useState({}),[d,g]=b.useState(null),[h,y]=b.useState(""),[f,w]=b.useState(0),[k,j]=b.useState(1),[z,p]=b.useState(ja),[c,u]=b.useState(null),v=Vh(),[S,T]=b.useState(!v),[$,U]=b.useState("day"),[R,N]=b.useState(null),C=b.useRef(null);b.useEffect(()=>{C.current=R},[R]);const[E,x]=b.useState(null),G=b.useRef(null);b.useEffect(()=>{G.current=E},[E]);const dt=b.useRef(null),[Z,D]=b.useState(null),A=b.useRef(null),[M,V]=b.useState(null),[W,F]=b.useState(null),m=(I,_)=>{if(M===_){V(null);return}const at=I.currentTarget.getBoundingClientRect(),bt=at.bottom+220<window.innerHeight;F({right:Math.max(8,window.innerWidth-at.right),...bt?{top:at.bottom+4}:{bottom:window.innerHeight-at.top+4}}),V(_)},H=I=>{clearTimeout(A.current),A.current=setTimeout(()=>D(I),350)},ot=()=>{clearTimeout(A.current),D(null)},q=b.useCallback(()=>{O.getGoals().then(e).catch(console.error)},[]);b.useEffect(()=>{q()},[q]);const{deleteItem:ht,toasts:It,handleUndo:yt,handleDismiss:jt}=dn(O.deleteGoal,O.restoreGoal,q),K=b.useCallback(async()=>{const I=C.current;if(N(null),!I)return;const _=Math.round(I.dx/(I.stepPx||Zt*3));if(!_)return;const at=Zh(I.g,_);at.start_date!==I.g.start_date&&(await O.updateGoal(I.g.id,{pillar:I.g.pillar,start_date:at.start_date,end_date:at.end_date}),q())},[q]),mt=!!R;b.useEffect(()=>{if(!mt)return;const I=at=>N(bt=>bt&&{...bt,dx:at.clientX-bt.startX}),_=()=>K();return window.addEventListener("pointermove",I),window.addEventListener("pointerup",_),()=>{window.removeEventListener("pointermove",I),window.removeEventListener("pointerup",_)}},[mt,K]);const vt=b.useCallback(async()=>{const I=G.current;if(x(null),!I)return;const _=I.g,at=Ca(_),bt=gc(_),Lt=Math.max(at,Math.min(bt,Sa(_.start_date,_.end_date)+Math.round(I.dx/Zt))),se=pp(_.start_date,Lt-1);se!==_.end_date&&(await O.updateGoal(_.id,{end_date:se}),q())},[q]),Bt=!!E;b.useEffect(()=>{if(!Bt)return;const I=at=>x(bt=>bt&&{...bt,dx:at.clientX-bt.startX}),_=()=>vt();return window.addEventListener("pointermove",I),window.addEventListener("pointerup",_),()=>{window.removeEventListener("pointermove",I),window.removeEventListener("pointerup",_)}},[Bt,vt]);const $t=r==="All",We=Ee[r]||{dot:"var(--text-3)"},_e=$t?t:t.filter(I=>I.pillar===r),$r=_e.filter(I=>!I.parent_goal_id),P=I=>_e.filter(_=>_.parent_goal_id===I),ft=I=>a(_=>({..._,[I]:!_[I]})),Mt=I=>I.horizon==="Monthly"||I.horizon==="Weekly",ee=I=>s[I.id]!==void 0?s[I.id]:Mt(I),Ve=I=>i(_=>({..._,[I.id]:!ee(I)})),Ye=(I,_=null)=>{g(I),y(""),j(1),p(_?xs(_.start_date):ja);const at=I==="ROOT"?"Yearly":cl(_==null?void 0:_.horizon),bt=I==="ROOT"?[0]:vs(_);w(at==="Quarterly"?Math.floor(bt[0]/3)*3:bt[0]??0)},Fd=async(I,_)=>{if(!h.trim())return;const at=(_==null?void 0:_.horizon)??null,bt=I==="ROOT"?"Yearly":cl(at),Lt=I==="ROOT"?r:(_==null?void 0:_.pillar)||r,se=bt==="Yearly"?Number(z):_?xs(_.start_date):Number(z),{start_date:xt,end_date:ie}=_n(bt,se,f,k);await O.createGoal({pillar:Lt,title:h.trim(),horizon:bt,parent_goal_id:I==="ROOT"?null:I,start_date:xt,end_date:ie}),I!=="ROOT"&&a(Le=>({...Le,[I]:!0})),g(null),y(""),q()},Ad=I=>{const _=I.start_date?new Date(I.start_date+"T00:00:00"):new Date,at=_.getMonth(),bt=Math.min(Math.max(Math.ceil(_.getDate()/7),1),4);u({id:I.id,title:I.title,pillar:I.pillar,horizon:I.horizon,parentGoal:t.find(Lt=>Lt.id===I.parent_goal_id)||null,year:xs(I.start_date),month:I.horizon==="Quarterly"?Math.floor(at/3)*3:at,week:bt})},Md=async()=>{if(!c||!c.title.trim())return;let I=c.month;c.horizon==="Weekly"&&(I=vs(c.parentGoal)[0]);const _=c.horizon==="Yearly"?Number(c.year):c.parentGoal?xs(c.parentGoal.start_date):Number(c.year),{start_date:at,end_date:bt}=_n(c.horizon,_,I,c.week);await O.updateGoal(c.id,{title:c.title.trim(),pillar:c.pillar,start_date:at,end_date:bt}),u(null),q()},Wd=({parentId:I,parentGoal:_,depth:at})=>{const bt=I==="ROOT"?"Yearly":cl((_==null?void 0:_.horizon)??null),Lt=I==="ROOT"?Array.from({length:12},(xt,ie)=>ie):vs(_),se=sc.filter(xt=>Lt.includes(xt.startMonth));return n.jsxs("div",{style:{...Y.addBox,marginLeft:at*24},children:[n.jsx("input",{autoFocus:!0,placeholder:`New ${bt.toLowerCase()} goal…`,value:h,onChange:xt=>y(xt.target.value),onKeyDown:xt=>{xt.key==="Enter"&&Fd(I,_),xt.key==="Escape"&&g(null)},style:Y.input}),bt==="Yearly"&&n.jsx("select",{value:z,onChange:xt=>p(Number(xt.target.value)),style:Y.monthSelect,children:ic.map(xt=>n.jsx("option",{value:xt,children:xt},xt))}),bt==="Quarterly"&&n.jsx("select",{value:f,onChange:xt=>w(Number(xt.target.value)),style:Y.monthSelect,children:se.map(xt=>n.jsx("option",{value:xt.startMonth,children:xt.label},xt.startMonth))}),bt==="Monthly"&&n.jsx("select",{value:f,onChange:xt=>w(Number(xt.target.value)),style:Y.monthSelect,children:Lt.map(xt=>n.jsx("option",{value:xt,children:kr[xt]},xt))}),bt==="Weekly"&&n.jsxs(n.Fragment,{children:[n.jsx("span",{style:Y.inheritTag,children:kr[Lt[0]]}),n.jsx("select",{value:k,onChange:xt=>j(Number(xt.target.value)),style:Y.monthSelect,children:[1,2,3,4].map(xt=>n.jsxs("option",{value:xt,children:["Week ",xt]},xt))})]}),n.jsx("button",{onClick:()=>Fd(I,_),style:Y.saveBtn,children:n.jsx(zt,{size:14})}),n.jsx("button",{onClick:()=>g(null),style:Y.cancelBtn,children:n.jsx(kt,{size:14})})]})},_d=({goal:I,depth:_})=>{var xt,ie,Le,nr,or;const at=P(I.id),bt=l[I.id],Lt=I.horizon!=="Weekly";if((c==null?void 0:c.id)===I.id){const Ut=vs(c.parentGoal),Nr=sc.filter(St=>Ut.includes(St.startMonth));return n.jsxs("div",{style:{...Y.editBox,marginLeft:_*24},children:[n.jsx("input",{autoFocus:!0,value:c.title,onChange:St=>u({...c,title:St.target.value}),onKeyDown:St=>St.key==="Enter"&&Md(),style:{...Y.input,flex:1}}),n.jsx("select",{value:c.pillar,onChange:St=>u({...c,pillar:St.target.value}),style:Y.monthSelect,children:oc.map(St=>n.jsx("option",{children:St},St))}),c.horizon==="Yearly"&&n.jsx("select",{value:c.year,onChange:St=>u({...c,year:Number(St.target.value)}),style:Y.monthSelect,children:ic.map(St=>n.jsx("option",{value:St,children:St},St))}),c.horizon==="Quarterly"&&n.jsx("select",{value:c.month,onChange:St=>u({...c,month:Number(St.target.value)}),style:Y.monthSelect,children:Nr.map(St=>n.jsx("option",{value:St.startMonth,children:St.label},St.startMonth))}),c.horizon==="Monthly"&&n.jsx("select",{value:c.month,onChange:St=>u({...c,month:Number(St.target.value)}),style:Y.monthSelect,children:Ut.map(St=>n.jsx("option",{value:St,children:kr[St]},St))}),c.horizon==="Weekly"&&n.jsxs(n.Fragment,{children:[n.jsx("span",{style:Y.inheritTag,children:kr[Ut[0]]}),n.jsx("select",{value:c.week,onChange:St=>u({...c,week:Number(St.target.value)}),style:Y.monthSelect,children:[1,2,3,4].map(St=>n.jsxs("option",{value:St,children:["Week ",St]},St))})]}),n.jsx("button",{onClick:Md,style:Y.saveBtn,children:n.jsx(zt,{size:14})}),n.jsx("button",{onClick:()=>u(null),style:Y.cancelBtn,children:n.jsx(kt,{size:14})})]})}return n.jsxs("div",{children:[n.jsxs("div",{style:{...Y.row,marginLeft:_*24,background:_===0&&((xt=Ee[I.pillar])==null?void 0:xt.soft)||"transparent"},children:[at.length>0?n.jsx("button",{onClick:()=>ft(I.id),style:Y.caret,children:bt?n.jsx(Di,{size:15}):n.jsx(an,{size:15})}):n.jsx("span",{style:{...Y.caret,opacity:.25},children:n.jsx(Ed,{size:12})}),n.jsx("span",{style:{...Y.horizonTag,color:((ie=Ee[I.pillar])==null?void 0:ie.dot)||We.dot,borderColor:((Le=Ee[I.pillar])==null?void 0:Le.dot)||We.dot},title:I.horizon,children:v?Qh[I.horizon]:I.horizon}),n.jsxs("div",{style:Y.nameCol,children:[n.jsx("span",{style:{...Y.title,...Z===I.id?Y.titleFull:{}},title:I.title,onPointerDown:()=>H(I.id),onPointerUp:ot,onPointerLeave:ot,onPointerCancel:ot,children:I.title}),n.jsx("span",{style:Y.whenSub,children:qh(I)})]}),v?n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{position:"relative",flexShrink:0},children:[n.jsx("button",{onClick:Ut=>m(Ut,I.id),style:Y.rowAdd,title:"Options",children:n.jsx(gp,{size:15})}),M===I.id&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:Y.menuBackdrop,onClick:()=>V(null)}),n.jsxs("div",{style:{...Y.goalMenu,...W},children:[n.jsxs("button",{style:Y.menuItem,onClick:()=>{Ad(I),V(null)},children:[n.jsx(ke,{size:14})," Edit"]}),Lt&&n.jsxs("button",{style:Y.menuItem,onClick:()=>{a(Ut=>({...Ut,[I.id]:!0})),Ye(I.id,I),V(null)},children:[n.jsx(ge,{size:14})," Add sub-goal"]}),n.jsxs("button",{style:{...Y.menuItem,color:"#C2536B"},onClick:()=>{ht(I.id,I.title),V(null)},children:[n.jsx(kt,{size:14})," Delete"]})]})]})]}),n.jsx("button",{onClick:()=>Ve(I),style:{...Y.rowAdd,color:ee(I)?((nr=Ee[I.pillar])==null?void 0:nr.dot)||We.dot:"var(--text-3)"},title:ee(I)?"Showing on timeline":"Hidden from timeline",children:ee(I)?n.jsx(ui,{size:14}):n.jsx(xa,{size:14})})]}):n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>Ve(I),style:{...Y.rowAdd,color:ee(I)?((or=Ee[I.pillar])==null?void 0:or.dot)||We.dot:"var(--text-3)"},title:ee(I)?"Showing on timeline — click to hide":"Hidden from timeline — click to show",children:ee(I)?n.jsx(ui,{size:13}):n.jsx(xa,{size:13})}),n.jsx("button",{onClick:()=>Ad(I),style:Y.rowAdd,title:"Edit",children:n.jsx(ke,{size:12})}),Lt&&n.jsx("button",{onClick:()=>{a(Ut=>({...Ut,[I.id]:!0})),Ye(I.id,I)},style:Y.rowAdd,title:"Add sub-goal",children:n.jsx(ge,{size:13})}),n.jsx("button",{onClick:()=>ht(I.id,I.title),style:{...Y.rowAdd,color:"var(--text-3)"},title:"Delete",children:n.jsx(kt,{size:13})})]})]}),bt&&at.map(Ut=>n.jsx(_d,{goal:Ut,depth:_+1},Ut.id)),bt&&d===I.id&&n.jsx(Wd,{parentId:I.id,parentGoal:I,depth:_+1})]})},Zn=t.filter(I=>ee(I)&&I.start_date&&I.end_date),Ld=Yh.map(I=>({...I,items:Zn.filter(_=>I.horizons.includes(_.horizon)).sort((_,at)=>_.pillar.localeCompare(at.pillar)||_.start_date.localeCompare(at.start_date)||dc[_.horizon]-dc[at.horizon]||_.end_date.localeCompare(at.end_date))})).filter(I=>I.items.length>0),Gt=(()=>{if(!Zn.length)return null;let I=Zn[0].start_date,_=Zn[0].end_date;return Zn.forEach(at=>{at.start_date<I&&(I=at.start_date),at.end_date>_&&(_=at.end_date)}),{start:mn(I),end:mn(_)}})(),Mi=(()=>{if(!Gt)return[];const I=[];for(let _=Gt.start.getTime();_<=Gt.end.getTime();_+=po)I.push(new Date(_));return I})(),Zo=Mi.length,Ip=(()=>{const I=[];return Mi.forEach(_=>{const at=`${_.getFullYear()}-${_.getMonth()}`,bt=I[I.length-1];bt&&bt.key===at?bt.days++:I.push({key:at,label:`${kr[_.getMonth()]} '${String(_.getFullYear()).slice(2)}`,days:1})}),I})(),qn=new Date;qn.setHours(0,0,0,0);const cn=Gt?Math.round((qn-Gt.start)/po):-1,to=cn>=0&&cn<Zo,Pd=I=>Math.round((mn(I.end_date)-mn(I.start_date))/po)+1,un=$==="month",$d=Gt?Gt.start.getFullYear():0,Nd=Gt?Gt.start.getMonth():0,Od=(()=>{if(!Gt)return[];const I=[];let _=$d,at=Nd;const bt=Gt.end.getFullYear(),Lt=Gt.end.getMonth();for(;_<bt||_===bt&&at<=Lt;)I.push({y:_,m:at}),at++,at>11&&(at=0,_++);return I})(),qo=Od.length||1,zp=(I,_)=>{const at=mn(I),bt=(at.getFullYear()-$d)*12+at.getMonth()-Nd,Lt=new Date(at.getFullYear(),at.getMonth()+1,0).getDate();return bt+(at.getDate()-(_?0:1))/Lt},Wi=(I,_)=>zp(I,_)/qo*100,Tp=`${qn.getFullYear()}-${String(qn.getMonth()+1).padStart(2,"0")}-${String(qn.getDate()).padStart(2,"0")}`,Ep=Gt?Wi(Tp,!1):0,Hd=(S?zo:0)+cn*Zt,Bp=Gt?`${Gt.start.getTime()}-${Gt.end.getTime()}`:"";return b.useEffect(()=>{if(un||!to)return;const I=dt.current;I&&(I.scrollLeft=Math.max(0,Hd-I.clientWidth/2+Zt/2))},[Bp,cn,S,to,un]),n.jsxs("div",{style:Y.page,children:[n.jsxs("div",{style:Y.head,children:[n.jsx("div",{style:Y.eyebrow,children:"Anvil · Goals"}),n.jsx("h1",{style:Y.h1,children:$t?"All Goals":`${r} Goals`})]}),n.jsxs("div",{style:Y.pillarPicker,children:[n.jsx("button",{onClick:()=>{o("All"),g(null),u(null)},style:{...Y.pillarChip,...$t?{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:"All Goals"}),oc.map(I=>{const _=I===r;return n.jsxs("button",{onClick:()=>{o(I),g(null),u(null)},style:{...Y.pillarChip,..._?{background:Ee[I].dot,color:"#fff",borderColor:Ee[I].dot}:{}},children:[n.jsx("span",{style:{...Y.dot,background:_?"#fff":Ee[I].dot}}),I]},I)})]}),n.jsxs("div",{style:Y.list,children:[$r.map(I=>n.jsx(_d,{goal:I,depth:0},I.id)),$r.length===0&&n.jsxs("div",{style:Y.ganttEmpty,children:["No goals yet",$t?"":` for ${r}`,"."]}),!$t&&d==="ROOT"&&n.jsx(Wd,{parentId:"ROOT",parentGoal:null,depth:0}),!$t&&d!=="ROOT"&&n.jsxs("button",{onClick:()=>Ye("ROOT",null),style:Y.rootAdd,children:[n.jsx(ge,{size:14})," Add top-level goal"]}),$t&&n.jsx("div",{style:Y.allHint,children:"Pick a pillar above to add new goals."})]}),n.jsxs("div",{style:Y.ganttWrap,children:[n.jsxs("div",{style:Y.ganttTop,children:[n.jsxs("div",{style:Y.ganttTitle,children:[un?"Monthly":"Daily"," Timeline",Gt?` · ${lc(Gt.start)} – ${lc(Gt.end)}`:""]}),n.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[n.jsxs("div",{style:Y.zoomToggle,children:[n.jsx("button",{onClick:()=>U("day"),style:{...Y.zoomBtn,...un?{}:Y.zoomBtnOn},children:"Day"}),n.jsx("button",{onClick:()=>U("month"),style:{...Y.zoomBtn,...un?Y.zoomBtnOn:{}},children:"Month"})]}),n.jsxs("button",{onClick:()=>T(I=>!I),style:Y.labelToggle,children:[S?n.jsx(Sh,{size:14}):n.jsx(Ch,{size:14}),S?"Hide names":"Show names"]})]})]}),Gt?un?n.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[n.jsxs("div",{style:Y.gBandRow,children:[S&&n.jsx("div",{style:{...Y.gLabelHead,zIndex:4},children:"Goal"}),n.jsx("div",{style:{flex:1,display:"grid",gridTemplateColumns:`repeat(${qo}, 1fr)`,minWidth:0},children:Od.map((I,_)=>n.jsxs("div",{style:Y.gMonthFluid,children:[kr[I.m],I.m===0||_===0?` '${String(I.y).slice(2)}`:""]},_))})]}),Ld.map(I=>n.jsxs("div",{children:[n.jsxs("div",{style:Y.gGroupRow,children:[S?n.jsxs("div",{style:Y.gGroupLabel,children:[I.label,n.jsx("span",{style:Y.gGroupCount,children:I.items.length})]}):n.jsxs("div",{style:Y.gGroupChip,children:[I.label," · ",I.items.length]}),n.jsx("div",{style:{flex:1}})]}),I.items.map(_=>{var or;const at=((or=Ee[_.pillar])==null?void 0:or.dot)||"#9A968C",bt=(R==null?void 0:R.id)===_.id,Lt=bt?R.dx:0,se=Wi(_.start_date,!1),xt=Math.max(2,Wi(_.end_date,!0)-se),ie=Pd(_),Le=xt>=14,nr=`${_.title} · ${_.start_date} → ${_.end_date} · ${ie} day${ie>1?"s":""}`;return n.jsxs("div",{style:Y.gRow,children:[S&&n.jsxs("div",{style:{...Y.gLabel,paddingLeft:12},children:[n.jsx("span",{style:{...Y.ganttRowDot,background:at}}),n.jsx("span",{style:{...Y.gHzTag,color:at,borderColor:at},children:ac[_.horizon]}),n.jsx("span",{style:Y.gLabelText,title:_.title,children:_.title}),n.jsxs("span",{style:Y.gDurChip,children:[ie,"d"]})]}),n.jsxs("div",{style:{position:"relative",flex:1,minHeight:36,minWidth:0,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent calc(100% / ${qo}))`},children:[to&&n.jsx("div",{style:{...Y.gTodayLine,left:`${Ep}%`}}),n.jsxs("div",{onPointerDown:Ut=>{Ut.preventDefault();const Nr=Ut.currentTarget.parentNode.offsetWidth;N({id:_.id,startX:Ut.clientX,dx:0,g:_,stepPx:Math.max(8,Nr/qo/2)})},style:{...Y.gBar,left:`${se}%`,width:`${xt}%`,background:at,cursor:bt?"grabbing":"grab",transform:Lt?`translateX(${Lt}px)`:"none",zIndex:bt?6:1,boxShadow:bt?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:nr,children:[n.jsx(ec,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff"}}),Le&&n.jsx("span",{style:Y.gBarLabel,children:_.title})]}),!Le&&n.jsx("span",{style:{...Y.gBarOutside,left:`calc(${se+xt}% + 6px)`},title:nr,children:_.title})]})]},_.id)})]},I.key))]}):n.jsx("div",{style:Y.ganttScroll,ref:dt,children:n.jsxs("div",{style:{minWidth:(S?zo:0)+Zo*Zt,position:"relative"},children:[to&&n.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:Hd,width:Zt,background:"color-mix(in srgb, var(--accent) 14%, transparent)",pointerEvents:"none",zIndex:3}}),n.jsxs("div",{style:Y.gBandRow,children:[S&&n.jsx("div",{style:{...Y.gLabelHead,zIndex:4},children:"Goal"}),n.jsx("div",{style:{display:"flex"},children:Ip.map((I,_)=>n.jsx("div",{style:{...Y.gMonthCell,width:I.days*Zt},children:I.label},_))})]}),n.jsxs("div",{style:Y.gBandRow,children:[S&&n.jsx("div",{style:{...Y.gLabelHead,zIndex:4,fontSize:10,color:"var(--text-3)",fontWeight:600},children:"days →"}),n.jsx("div",{style:{display:"flex"},children:Mi.map((I,_)=>{const at=I.getDay()===0||I.getDay()===6,bt=_===cn;return n.jsx("div",{style:{...Y.gDayCell,...at?Y.gWeekend:{},...bt?Y.gTodayCell:{}},children:I.getDate()},_)})})]}),Ld.map(I=>n.jsxs("div",{children:[n.jsxs("div",{style:Y.gGroupRow,children:[S?n.jsxs("div",{style:Y.gGroupLabel,children:[I.label,n.jsx("span",{style:Y.gGroupCount,children:I.items.length})]}):n.jsxs("div",{style:Y.gGroupChip,children:[I.label," · ",I.items.length]}),n.jsx("div",{style:{width:Zo*Zt,flexShrink:0}})]}),I.items.map(_=>{var Ud;const at=((Ud=Ee[_.pillar])==null?void 0:Ud.dot)||"#9A968C",bt=Math.round((mn(_.start_date)-Gt.start)/po),Lt=Pd(_),se=(R==null?void 0:R.id)===_.id,xt=se?R.dx:0,ie=Xh(_),Le=(E==null?void 0:E.id)===_.id,nr=ie?Ca(_):Lt,or=ie?gc(_):Lt,Ut=Le?Math.max(nr,Math.min(or,Lt+Math.round(E.dx/Zt))):Lt,Nr=Ut*Zt-4,St=Nr>=54,Gd=`${_.title} · ${_.start_date} → ${_.end_date} · ${Ut} day${Ut>1?"s":""}${ie?` (max ${or})`:""}`;return n.jsxs("div",{style:Y.gRow,children:[S&&n.jsxs("div",{style:{...Y.gLabel,paddingLeft:12},children:[n.jsx("span",{style:{...Y.ganttRowDot,background:at}}),n.jsx("span",{style:{...Y.gHzTag,color:at,borderColor:at},children:ac[_.horizon]}),n.jsx("span",{style:Y.gLabelText,title:_.title,children:_.title}),n.jsxs("span",{style:Y.gDurChip,children:[Ut,"d"]})]}),n.jsxs("div",{style:{...Y.gTrack,width:Zo*Zt},children:[to&&n.jsx("div",{style:{...Y.gTodayLine,left:cn*Zt}}),n.jsxs("div",{onPointerDown:bn=>{bn.preventDefault(),N({id:_.id,startX:bn.clientX,dx:0,g:_,stepPx:Zt*3})},style:{...Y.gBar,left:bt*Zt+2,width:Nr,background:at,cursor:se?"grabbing":"grab",transform:xt?`translateX(${xt}px)`:"none",zIndex:se||Le?6:1,boxShadow:se||Le?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:Gd,children:[ie&&Ut>nr&&n.jsx("div",{style:{position:"absolute",left:nr*Zt,top:0,bottom:0,right:0,background:"#C2536B",borderRadius:"0 5px 5px 0"}}),n.jsx(ec,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff",position:"relative",zIndex:1}}),St&&n.jsx("span",{style:{...Y.gBarLabel,position:"relative",zIndex:1},children:_.title}),ie&&n.jsx("div",{onPointerDown:bn=>{bn.preventDefault(),bn.stopPropagation(),x({id:_.id,startX:bn.clientX,dx:0,g:_})},style:Y.resizeHandle,title:`Drag to extend up to ${or} days`,children:n.jsx("div",{style:Y.resizeGrip})})]}),!St&&n.jsx("span",{style:{...Y.gBarOutside,left:bt*Zt+Nr+8+xt},title:Gd,children:_.title})]})]},_.id)})]},I.key))]})}):n.jsx("div",{style:Y.ganttEmpty,children:"No goals on the timeline. Click the eye icon on a goal to show it here."}),Gt&&n.jsxs("div",{style:Y.gLegend,children:[n.jsxs("span",{style:Y.gLegendItem,children:[n.jsx("span",{style:{...Y.gLegendBar}})," bar length = number of days"]}),n.jsxs("span",{style:Y.gLegendItem,children:[n.jsx("span",{style:Y.gLegendToday})," today"]})]})]}),n.jsx(gn,{toasts:It,onUndo:yt,onDismiss:jt})]})}const Y={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},pillarPicker:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},pillarChip:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},list:{background:"var(--surface)",borderRadius:12,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"hidden"},row:{display:"flex",alignItems:"center",gap:9,padding:"9px 10px",borderRadius:8,flexWrap:"nowrap"},caret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},horizonTag:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",border:"1px solid",borderRadius:5,padding:"2px 6px",flexShrink:0},nameCol:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:1},title:{fontSize:14,fontWeight:500,lineHeight:1.3,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",userSelect:"none",WebkitUserSelect:"none",cursor:"default"},titleFull:{whiteSpace:"normal",overflow:"visible",textOverflow:"clip",wordBreak:"break-word"},whenSub:{fontSize:11,fontStyle:"italic",color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},rowAdd:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,flexShrink:0},menuBackdrop:{position:"fixed",inset:0,zIndex:40},goalMenu:{position:"fixed",zIndex:41,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 6px 24px rgba(0,0,0,0.18)",padding:4,minWidth:180,display:"flex",flexDirection:"column"},menuItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:7,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text)",textAlign:"left"},rootAdd:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"var(--text-2)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"9px 12px",cursor:"pointer",fontWeight:600,fontFamily:"inherit",marginTop:6,width:"100%",justifyContent:"center"},addBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 0 6px 28px",flexWrap:"wrap"},editBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 10px",flexWrap:"wrap",background:"var(--bg)",borderRadius:8,margin:"4px 0"},input:{border:"1px solid var(--border)",borderRadius:7,padding:"8px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",flex:1,minWidth:120},monthSelect:{border:"1px solid var(--border)",borderRadius:7,padding:"8px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},inheritTag:{fontSize:11.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"6px 9px",borderRadius:7,flexShrink:0},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},ganttWrap:{background:"var(--surface)",borderRadius:12,padding:"16px 14px",marginTop:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},ganttTop:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10,marginBottom:14},ganttTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",fontFamily:"'Fraunces',Georgia,serif"},labelToggle:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 10px",borderRadius:8,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},zoomToggle:{display:"inline-flex",border:"1px solid var(--border)",borderRadius:8,overflow:"hidden"},zoomBtn:{border:"none",background:"var(--surface)",color:"var(--text-2)",padding:"5px 12px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},zoomBtnOn:{background:"var(--accent-strong)",color:"#fff"},gMonthFluid:{borderLeft:"1px solid var(--border)",fontSize:10,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gGroupChip:{position:"sticky",left:0,zIndex:3,background:"var(--surface-2)",padding:"5px 10px",fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",whiteSpace:"nowrap",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center"},allHint:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",padding:"10px 12px"},ganttEmpty:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},ganttScroll:{overflowX:"auto"},ganttRowDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},gBandRow:{display:"flex",alignItems:"stretch",borderBottom:"1px solid var(--border)"},gLabelHead:{width:zo,flexShrink:0,position:"sticky",left:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",padding:"6px 10px",fontSize:12,fontWeight:700,color:"var(--text-2)"},gMonthCell:{flexShrink:0,borderLeft:"1px solid var(--border)",fontSize:10.5,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gDayCell:{width:Zt,flexShrink:0,textAlign:"center",fontSize:10,color:"var(--text-3)",padding:"4px 0",borderLeft:"1px solid var(--border)",fontWeight:600},gWeekend:{background:"var(--surface-2)"},gTodayCell:{background:"var(--hover)",color:"var(--accent)",fontWeight:800},gGroupRow:{display:"flex",alignItems:"stretch",background:"var(--surface-2)",borderBottom:"1px solid var(--border)",borderTop:"1px solid var(--border)"},gGroupLabel:{width:zo,flexShrink:0,position:"sticky",left:0,background:"var(--surface-2)",zIndex:3,padding:"6px 12px",fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",gap:7},gGroupCount:{fontSize:10,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},gHzTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.04em",border:"1px solid",borderRadius:4,padding:"1px 4px",flexShrink:0},gRow:{display:"flex",alignItems:"stretch",minHeight:36,borderBottom:"1px solid var(--border)"},gLabel:{width:zo,flexShrink:0,display:"flex",alignItems:"center",gap:7,position:"sticky",left:0,background:"var(--surface)",zIndex:2,borderRight:"1px solid var(--border)",paddingRight:8,overflow:"hidden"},gLabelText:{flex:1,minWidth:0,fontSize:12,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},gDurChip:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",borderRadius:10,padding:"1px 6px",flexShrink:0,marginRight:6},gTrack:{position:"relative",flexShrink:0,minHeight:36,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent ${Zt}px)`},gBar:{position:"absolute",top:9,height:18,borderRadius:5,display:"flex",alignItems:"center",padding:"0 7px",boxShadow:"0 1px 2px rgba(0,0,0,0.15)",overflow:"hidden",zIndex:1},gBarLabel:{fontSize:11,fontWeight:600,color:"#fff",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},gBarOutside:{position:"absolute",top:9,height:18,display:"flex",alignItems:"center",fontSize:11,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",pointerEvents:"none",zIndex:1},resizeHandle:{position:"absolute",right:0,top:0,bottom:0,width:12,cursor:"ew-resize",display:"grid",placeItems:"center",touchAction:"none",zIndex:2},resizeGrip:{width:2,height:11,background:"rgba(255,255,255,0.9)",borderRadius:1,boxShadow:"3px 0 0 rgba(255,255,255,0.6)"},gTodayLine:{position:"absolute",top:0,bottom:0,width:2,background:"#C2536B",zIndex:0,opacity:.6},gLegend:{display:"flex",gap:16,marginTop:12,fontSize:11,color:"var(--text-3)",flexWrap:"wrap"},gLegendItem:{display:"flex",alignItems:"center",gap:6,fontWeight:600},gLegendBar:{width:18,height:8,borderRadius:3,background:"var(--accent)",display:"inline-block"},gLegendToday:{width:2,height:12,background:"#C2536B",display:"inline-block"}},on={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.12)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.12)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.12)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.12)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.12)"}},mp=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ey=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Fi=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,ry=()=>Fi(new Date),ny=(t=0)=>{const e=new Date,r=e.getDay(),o=r===0?-6:1-r,s=new Date(e);return s.setDate(e.getDate()+o+t*7),Array.from({length:7},(i,l)=>{const a=new Date(s);return a.setDate(s.getDate()+l),Fi(a)})},oy=(t=0)=>{const e=new Date,r=new Date(e.getFullYear(),e.getMonth()+t,1),o=r.getFullYear(),s=r.getMonth(),i=new Date(o,s+1,0).getDate(),l=r.getDay(),a=l===0?6:l-1,d=Array.from({length:i},(h,y)=>`${o}-${String(s+1).padStart(2,"0")}-${String(y+1).padStart(2,"0")}`),g=r.toLocaleDateString("en-US",{month:"long",year:"numeric"});return{dates:d,startOffset:a,label:g,year:o,month:s}},cc=t=>new Date(t+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"}),Sr=ry(),sy=new Date().getFullYear();function iy(){var W,F;const[t,e]=b.useState([]),[r,o]=b.useState("ALL"),[s,i]=b.useState(!1),[l,a]=b.useState(!1),[d,g]=b.useState(!1),[h,y]=b.useState(null),[f,w]=b.useState(null),[k,j]=b.useState({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week"}),[z,p]=b.useState(!1),[c,u]=b.useState([]),v=b.useCallback(()=>O.getHabits().then(e).catch(console.error),[]);b.useEffect(()=>{v()},[v]),b.useEffect(()=>{O.getSetting("habit_order").then(m=>{Array.isArray(m==null?void 0:m.value)&&u(m.value)}).catch(()=>{})},[]);const S=b.useMemo(()=>c.length?[...t].sort((m,H)=>{const ot=c.indexOf(m.id),q=c.indexOf(H.id);return ot===-1&&q===-1?0:ot===-1?1:q===-1?-1:ot-q}):t,[t,c]),T=async m=>{u(m),await O.setSetting("habit_order",m),p(!1)};b.useEffect(()=>{const m=()=>{const H=window.innerWidth<720;i(H),H||a(!1)};return m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[]);const{deleteItem:$,toasts:U,handleUndo:R,handleDismiss:N}=dn(O.deleteHabit,O.restoreHabit,v),C=m=>{o(m),s&&a(!1)},E=(m,H)=>{(m.type==="minimum"||m.type==="maximum")&&m.period==="day"?w({habit:m,date:H}):x(m.id,H)},x=async(m,H)=>{await O.toggleHabitLog(m,H),v()},G=async(m,H,ot,q)=>{await O.setHabitLogCount(m,H,ot,q),w(null),v()},dt=async(m,H)=>{await O.clearHabitLog(m,H),w(null),v()},Z=async()=>{if(!k.name.trim())return;const m={name:k.name.trim(),pillar:k.pillar,target_per_week:Number(k.target_per_week)||7,type:k.type,target_count:k.type!=="regular"?Number(k.target_count)||1:null,period:k.type!=="regular"?k.period:null};await O.createHabit(m),j({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week"}),g(!1),v()},D=async(m,H)=>{r===m&&o("ALL"),$(m,H)},A=t.find(m=>m.id===r),M=m=>new Set(m.logs||[]),V={...L.sidebar,...s?L.sidebarOverlay:{},...s&&!l?L.sidebarHidden:{}};return n.jsxs("div",{style:L.shell,children:[s&&l&&n.jsx("div",{style:L.backdrop,onClick:()=>a(!1)}),n.jsxs("aside",{style:V,children:[n.jsxs("div",{style:L.sideTop,children:[n.jsx("div",{style:L.brand,children:"Anvil · Habits"}),s&&n.jsx("button",{onClick:()=>a(!1),style:L.closeBtn,children:n.jsx(kt,{size:18})})]}),n.jsxs("div",{style:{...L.sideItem,...r==="ALL"?L.sideItemOn:{},cursor:"default",padding:"2px 6px 2px 10px"},children:[n.jsxs("button",{onClick:()=>C("ALL"),style:{display:"flex",alignItems:"center",gap:9,flex:1,border:"none",background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:r==="ALL"?600:500,color:"var(--text-2)",padding:"7px 0"},children:[n.jsx(np,{size:15}),n.jsx("span",{style:L.sideLabel,children:"All Habits"}),n.jsx("span",{style:L.sideCount,children:t.length})]}),n.jsx("button",{onClick:m=>{m.stopPropagation(),p(!0)},style:L.tinyBtn,title:"Reorder habits",children:n.jsx(ke,{size:12})})]}),n.jsx("div",{style:L.sideDivider}),S.map(m=>{var q;const H=r===m.id,ot=((q=on[m.pillar])==null?void 0:q.dot)||"#9A968C";return n.jsxs("button",{onClick:()=>C(m.id),style:{...L.sideItem,...H?L.sideItemOn:{}},children:[n.jsx("span",{style:{...L.sideDot,background:ot}}),n.jsx("span",{style:L.sideLabel,children:m.name}),n.jsxs("span",{style:L.sideStreak,children:[n.jsx(Jn,{size:11})," ",m.streak]})]},m.id)}),d?n.jsx(ly,{habit:k,onChange:j,onSave:Z,onCancel:()=>g(!1)}):n.jsxs("button",{onClick:()=>g(!0),style:L.sideNewBtn,children:[n.jsx(ge,{size:13})," New habit"]})]}),n.jsxs("main",{style:L.main,children:[s&&n.jsxs("button",{onClick:()=>a(!0),style:L.hamburger,children:[n.jsx(Td,{size:18}),n.jsx("span",{style:L.hamburgerLabel,children:r==="ALL"?"All Habits":A==null?void 0:A.name})]}),r==="ALL"?n.jsx(gy,{habits:S,dayAction:E,logSet:M,onDelete:D,onEdit:m=>y(m)}):n.jsx(cy,{habit:A,dayAction:E,logSet:M,onDelete:()=>D(A.id,A.name),onEdit:()=>y(A),setNote:(m,H)=>O.setHabitLogNote(A.id,m,H).then(v)}),r==="ALL"&&n.jsx(py,{year:sy})]}),z&&n.jsx(by,{habits:S,onSave:T,onClose:()=>p(!1)}),h&&n.jsx(ay,{habit:h,onSave:async m=>{await O.updateHabit(h.id,m),y(null),v()},onClose:()=>y(null)}),f&&n.jsx(dy,{habit:f.habit,date:f.date,initialCount:((W=f.habit.log_counts)==null?void 0:W[f.date])??0,initialNote:((F=f.habit.log_notes)==null?void 0:F[f.date])??"",onSave:(m,H)=>G(f.habit.id,f.date,m,H),onClear:()=>dt(f.habit.id,f.date),onClose:()=>w(null)}),n.jsx(gn,{toasts:U,onUndo:R,onDismiss:N})]})}function ly({habit:t,onChange:e,onSave:r,onCancel:o}){const s=t.type!=="regular";return n.jsxs("div",{style:L.addBox,children:[n.jsx("input",{autoFocus:!0,placeholder:"Habit name",value:t.name,onChange:i=>e(l=>({...l,name:i.target.value})),onKeyDown:i=>i.key==="Enter"&&r(),style:L.sideInput}),n.jsx("select",{value:t.pillar,onChange:i=>e(l=>({...l,pillar:i.target.value})),style:L.sideInput,children:Object.keys(on).map(i=>n.jsx("option",{children:i},i))}),n.jsxs("select",{value:t.type,onChange:i=>e(l=>({...l,type:i.target.value})),style:L.sideInput,children:[n.jsx("option",{value:"regular",children:"Regular (yes/no)"}),n.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),n.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),s&&n.jsxs("div",{style:{display:"flex",gap:6},children:[n.jsx("input",{type:"number",min:1,placeholder:"N",value:t.target_count||"",onChange:i=>e(l=>({...l,target_count:i.target.value})),style:{...L.sideInput,width:60}}),n.jsx("select",{value:t.period,onChange:i=>e(l=>({...l,period:i.target.value})),style:L.sideInput,children:["day","week","month","year"].map(i=>n.jsx("option",{children:i},i))})]}),n.jsxs("div",{style:{display:"flex",gap:6},children:[n.jsx("button",{onClick:r,style:L.sideAddBtn,children:n.jsx(zt,{size:13})}),n.jsx("button",{onClick:o,style:L.sideCancelBtn,children:n.jsx(kt,{size:13})})]})]})}function ay({habit:t,onSave:e,onClose:r}){const[o,s]=b.useState(t.name),[i,l]=b.useState(t.type||"regular"),[a,d]=b.useState(t.target_count||""),[g,h]=b.useState(t.period||"week"),[y,f]=b.useState(t.reminder_time||""),w=()=>e({name:o.trim(),type:i,target_count:i!=="regular"?Number(a):null,period:i!=="regular"?g:null,reminder_time:y||null});return n.jsx("div",{style:L.modalOverlay,onClick:r,children:n.jsxs("div",{style:L.modal,onClick:k=>k.stopPropagation(),children:[n.jsxs("div",{style:L.modalHead,children:["Edit Habit",n.jsx("button",{onClick:r,style:L.closeBtn,children:n.jsx(kt,{size:16})})]}),n.jsx("label",{style:L.modalLabel,children:"Name"}),n.jsx("input",{value:o,onChange:k=>s(k.target.value),style:L.sideInput}),n.jsx("label",{style:L.modalLabel,children:"Type"}),n.jsxs("select",{value:i,onChange:k=>l(k.target.value),style:L.sideInput,children:[n.jsx("option",{value:"regular",children:"Regular (yes/no)"}),n.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),n.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),i!=="regular"&&n.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[n.jsx("input",{type:"number",min:1,value:a,onChange:k=>d(k.target.value),style:{...L.sideInput,width:70}}),n.jsx("select",{value:g,onChange:k=>h(k.target.value),style:L.sideInput,children:["day","week","month","year"].map(k=>n.jsx("option",{children:k},k))})]}),n.jsx("label",{style:L.modalLabel,children:"Reminder time"}),n.jsx("input",{type:"time",value:y,onChange:k=>f(k.target.value),style:L.sideInput}),n.jsx("button",{onClick:w,style:{...L.sideAddBtn,width:"100%",marginTop:10,height:36},children:"Save"})]})})}function dy({habit:t,date:e,initialCount:r,initialNote:o,onSave:s,onClear:i,onClose:l}){const[a,d]=b.useState(r??0),[g,h]=b.useState(o??""),y=t.target_count,f=t.type==="minimum"?a>=y:a>0&&a<=y,w=t.type==="maximum"&&a>y,k=f?"#4C9A6B":w?"#C2536B":"#C2773B",j=f?"✓ Goal met":w?"Over the limit":"Not met yet";return n.jsx("div",{style:L.modalOverlay,onClick:l,children:n.jsxs("div",{style:L.modal,onClick:z=>z.stopPropagation(),children:[n.jsxs("div",{style:L.modalHead,children:[t.name,n.jsx("button",{onClick:l,style:L.closeBtn,children:n.jsx(kt,{size:16})})]}),n.jsxs("div",{style:{fontSize:12,color:"var(--text-3)",marginBottom:2},children:[e," · ",t.type==="minimum"?`at least ${y}`:`no more than ${y}`," / ",t.period]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:20,margin:"14px 0 6px"},children:[n.jsx("button",{onClick:()=>d(z=>Math.max(0,z-1)),style:L.counterBtn,children:"−"}),n.jsx("span",{style:{fontSize:38,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:52,textAlign:"center",color:k},children:a}),n.jsx("button",{onClick:()=>d(z=>z+1),style:L.counterBtn,children:"+"})]}),n.jsx("div",{style:{textAlign:"center",fontSize:12.5,fontWeight:700,color:k,marginBottom:12},children:j}),n.jsx("textarea",{value:g,onChange:z=>h(z.target.value),placeholder:"Add a comment (optional)…",style:{...L.sideInput,minHeight:56,resize:"vertical"}}),n.jsxs("div",{style:{display:"flex",gap:8,marginTop:10},children:[n.jsxs("button",{onClick:i,style:{...L.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[n.jsx(kt,{size:14})," Delete"]}),n.jsxs("button",{onClick:()=>s(a,g),style:{...L.sideAddBtn,flex:1,justifyContent:"center",height:38},children:[n.jsx(zt,{size:14})," Set"]})]})]})})}function ul({pct:t,label:e,sub:r,color:o}){const i=2*Math.PI*26,l=i*(1-Math.max(0,Math.min(100,t))/100);return n.jsxs("div",{style:L.ringStat,children:[n.jsxs("div",{style:L.ringBox,children:[n.jsxs("svg",{width:"70",height:"70",viewBox:"0 0 70 70",children:[n.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:"var(--border)",strokeWidth:"7"}),n.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:o,strokeWidth:"7",strokeLinecap:"round",strokeDasharray:i,strokeDashoffset:l,transform:"rotate(-90 35 35)",style:{transition:"stroke-dashoffset 0.5s ease"}})]}),n.jsxs("div",{style:{...L.ringPct,color:o},children:[t,"%"]})]}),n.jsxs("div",{children:[n.jsx("div",{style:L.ringLabel,children:e}),n.jsx("div",{style:L.ringSub,children:r})]})]})}function gy({habits:t,dayAction:e,logSet:r,onDelete:o,onEdit:s}){const[i,l]=b.useState(0),a=ny(i),d=`${cc(a[0])} – ${cc(a[6])}${i===0?" · This week":""}`,g=C=>{const E=new Date(C+"T00:00:00"),x=E.getDay(),G=new Date(E);return G.setDate(E.getDate()+(x===0?-6:1-x)),Array.from({length:7},(dt,Z)=>{const D=new Date(G);return D.setDate(G.getDate()+Z),Fi(D)})},h=C=>C.logs||[],y=(C,E)=>C.type==="minimum"&&C.period==="week"&&E.filter(x=>r(C).has(x)).length>=(C.target_count||0),f=(C,E)=>C.type==="minimum"&&C.period==="month"&&h(C).filter(x=>x.slice(0,7)===E).length>=(C.target_count||0),w=(C,E)=>C.type==="minimum"&&C.period==="year"&&h(C).filter(x=>x.slice(0,4)===E).length>=(C.target_count||0),k=(C,E)=>{var x;if((C.type==="minimum"||C.type==="maximum")&&C.period==="day"){const G=(x=C.log_counts)==null?void 0:x[E];return G==null?!1:C.type==="minimum"?G>=(C.target_count||0):G>0&&G<=(C.target_count||0)}return r(C).has(E)},j=(C,E)=>C.type!=="minimum"?!1:C.period==="week"?y(C,g(E)):C.period==="month"?f(C,E.slice(0,7)):C.period==="year"?w(C,E.slice(0,4)):!1,z=(C,E)=>k(C,E)||j(C,E),p=t.filter(C=>z(C,Sr)).length,c=t.length?Math.round(p/t.length*100):0,u=C=>{if(C.type==="minimum"&&C.period==="month"&&(f(C,a[0].slice(0,7))||f(C,a[6].slice(0,7)))||C.type==="minimum"&&C.period==="year"&&(w(C,a[0].slice(0,4))||w(C,a[6].slice(0,4)))||C.type==="minimum"&&C.period==="week"&&y(C,a))return 1;if((C.type==="minimum"||C.type==="maximum")&&C.period==="day")return Math.min(1,a.filter(dt=>k(C,dt)).length/7);const E=r(C),x=a.filter(dt=>E.has(dt)).length,G=C.type==="minimum"&&C.period==="week"?C.target_count||1:C.target_per_week||7;return G>0?Math.min(1,x/G):0},v=t.length?Math.round(t.reduce((C,E)=>C+u(E),0)/t.length*100):0,S=new Date,T=`${S.getFullYear()}-${String(S.getMonth()+1).padStart(2,"0")}`,$=new Date(S.getFullYear(),S.getMonth()+1,0).getDate(),U=$/7,R=C=>{if(C.type==="minimum"&&C.period==="month"&&f(C,T)||C.type==="minimum"&&C.period==="year"&&w(C,T.slice(0,4)))return 1;if((C.type==="minimum"||C.type==="maximum")&&C.period==="day"){let G=0;for(let dt=1;dt<=$;dt++)k(C,`${T}-${String(dt).padStart(2,"0")}`)&&G++;return Math.min(1,G/$)}const E=h(C).filter(G=>G.slice(0,7)===T).length;let x;return C.type==="minimum"&&C.period==="week"?x=(C.target_count||1)*U:C.type==="minimum"&&C.period==="month"?x=C.target_count||1:C.type==="minimum"&&C.period==="year"?x=(C.target_count||1)/12:x=(C.target_per_week||7)*U,x>0?Math.min(1,E/x):0},N=t.length?Math.round(t.reduce((C,E)=>C+R(E),0)/t.length*100):0;return n.jsxs("div",{children:[n.jsxs("div",{style:L.mainHead,children:[n.jsx("div",{style:L.eyebrow,children:"Weekly view"}),n.jsx("h1",{style:L.h1,children:"All Habits"})]}),n.jsxs("div",{style:L.navBar,children:[n.jsx("button",{onClick:()=>l(C=>C-1),style:L.navBtn,children:n.jsx(Xn,{size:16})}),n.jsx("span",{style:L.navLabel,children:d}),n.jsx("button",{onClick:()=>l(C=>Math.min(0,C+1)),disabled:i>=0,style:{...L.navBtn,...i>=0?L.navBtnDisabled:{}},children:n.jsx(an,{size:16})})]}),n.jsxs("div",{style:L.weekCard,children:[n.jsxs("div",{style:L.weekHeadRow,children:[n.jsx("div",{style:L.weekNameCol}),mp.map((C,E)=>n.jsxs("div",{style:L.weekDayHead,children:[n.jsx("span",{style:L.weekDayName,children:C}),n.jsx("span",{style:{...L.weekDayNum,...a[E]===Sr?L.weekDayToday:{}},children:new Date(a[E]+"T00:00").getDate()})]},C)),n.jsx("div",{style:L.weekStreakCol,children:"Streak"})]}),t.map(C=>{var H,ot;const E=((H=on[C.pillar])==null?void 0:H.dot)||"#9A968C",x=((ot=on[C.pillar])==null?void 0:ot.soft)||"rgba(0,0,0,0.05)",G=r(C),dt=C.type==="minimum"&&["week","month","year"].includes(C.period),Z=C.target_count||0,D=C.logs||[],A=q=>D.filter(ht=>ht.slice(0,7)===q).length,M=q=>D.filter(ht=>ht.slice(0,4)===q).length,V=a.filter(q=>G.has(q)).length,W=q=>dt?C.period==="week"?V>=Z:C.period==="month"?A(q.slice(0,7))>=Z:C.period==="year"?M(q.slice(0,4))>=Z:!1:!1,F=dt&&a.some(W),m=C.period==="week"?V:C.period==="month"?A(a[0].slice(0,7)):C.period==="year"?M(a[0].slice(0,4)):0;return n.jsxs("div",{style:L.weekRow,children:[n.jsxs("div",{style:{...L.weekNameCol,flexDirection:"column",alignItems:"flex-start",gap:2},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx("span",{style:{...L.sideDot,background:E}}),n.jsx("span",{style:L.weekHabitName,children:C.name})]}),C.type!=="regular"&&n.jsx("span",{style:L.typeBadge,children:C.type==="minimum"?`≥${C.target_count}/${C.period}`:`≤${C.target_count}/${C.period}`})]}),a.map((q,ht)=>{var $r,P;const It=G.has(q),yt=q>Sr,jt=(C.type==="minimum"||C.type==="maximum")&&C.period==="day",K=($r=C.log_counts)==null?void 0:$r[q],mt=K!=null,vt=!!((P=C.log_notes)!=null&&P[q]),Bt=W(q),$t=ht>0&&W(a[ht-1]),We=ht<a.length-1&&W(a[ht+1]),_e=It||Bt;return n.jsxs("div",{style:{...L.weekCell,position:"relative"},children:[Bt&&n.jsx("span",{style:{...L.chainLine,background:E,left:$t?0:"50%",right:We?0:"50%"}}),n.jsx("button",{disabled:yt,onClick:()=>e(C,q),style:{...L.tick,position:"relative",zIndex:1,..._e?{background:E,borderColor:E,color:"#fff"}:{},...jt&&mt&&!It?{borderColor:E,color:E}:{},...yt&&!_e?L.tickFuture:{}},children:jt?mt?n.jsx("span",{style:{fontSize:12,fontWeight:700},children:K}):null:It&&n.jsx(zt,{size:14,color:"#fff",strokeWidth:3})}),vt&&n.jsx("span",{style:L.cellNoteBubble})]},q)}),n.jsx("div",{style:L.weekStreakCol,children:F?n.jsxs("span",{style:{...L.streakPill,background:x,color:E},children:[n.jsx(ka,{size:12})," ",m,"/",Z]}):n.jsxs("span",{style:{...L.streakPill,background:x,color:E},children:[n.jsx(Jn,{size:12})," ",C.streak]})})]},C.id)}),t.length===0&&n.jsx("div",{style:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},children:"No habits yet — add one from the sidebar."})]}),t.length>0&&n.jsxs("div",{style:{...L.progressCard,marginTop:18,marginBottom:0},children:[n.jsx(ul,{pct:c,label:"Today",sub:`${p}/${t.length} done`,color:"#4C9A6B"}),n.jsx("div",{style:L.progressDivider}),n.jsx(ul,{pct:v,label:"This week",sub:"of weekly targets",color:"#3A7CA5"}),n.jsx("div",{style:L.progressDivider}),n.jsx(ul,{pct:N,label:"This month",sub:"of monthly targets",color:"#8268B0"})]})]})}function cy({habit:t,dayAction:e,logSet:r,onDelete:o,onEdit:s,setNote:i}){var W,F;const[l,a]=b.useState(null),[d,g]=b.useState(""),[h,y]=b.useState(null),[f,w]=b.useState(0),k=b.useRef(null);if(!t)return null;const j=((W=on[t.pillar])==null?void 0:W.dot)||"#9A968C",z=((F=on[t.pillar])==null?void 0:F.soft)||"rgba(0,0,0,0.05)",p=r(t),{dates:c,startOffset:u,label:v,year:S}=oy(f),T=c.filter(m=>m<=Sr&&p.has(m)).length,$=c.filter(m=>m<=Sr).length,U=$>0?Math.round(T/$*100):0,R=t.type==="minimum"&&(t.period==="month"||t.period==="year"),N=t.period==="year"?(t.logs||[]).filter(m=>m.startsWith(`${S}-`)).length:c.filter(m=>p.has(m)).length,C=R&&N>=(t.target_count||0),E=t.type==="minimum"&&t.period==="week",x=t.target_count||0,G=m=>{const H=new Date(m+"T00:00"),ot=H.getDay(),q=new Date(H);q.setDate(H.getDate()+(ot===0?-6:1-ot));let ht=0;for(let It=0;It<7;It++){const yt=new Date(q);yt.setDate(q.getDate()+It),p.has(Fi(yt))&&ht++}return ht},dt=m=>R?C:E?G(m)>=x:!1,Z=E?G(Sr):0,D=E&&Z>=x,A=m=>{k.current=setTimeout(()=>a(m),500)},M=()=>clearTimeout(k.current),V=m=>{var H;y(m),g(((H=t.log_notes)==null?void 0:H[m])||""),a(null)};return n.jsxs("div",{children:[n.jsxs("div",{style:L.mainHead,children:[n.jsxs("div",{children:[n.jsxs("div",{style:L.eyebrow,children:[n.jsx("span",{style:{...L.sideDot,background:j,marginRight:6}}),t.pillar," · Monthly view"]}),n.jsx("h1",{style:L.h1,children:t.name})]}),n.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[n.jsxs("button",{onClick:s,style:L.actionBtn,children:[n.jsx(ke,{size:14})," Edit"]}),n.jsxs("button",{onClick:o,style:{...L.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[n.jsx(kt,{size:14})," Delete"]}),t.reminder_time&&n.jsxs("button",{style:L.actionBtn,children:[n.jsx(qb,{size:14})," ",t.reminder_time]})]})]}),n.jsxs("div",{style:L.statStrip,children:[n.jsx(fn,{label:"Current streak",value:`${t.streak} days`,c:j,soft:z,flame:!0}),n.jsx(fn,{label:"Best streak",value:`${t.max_streak??t.streak} days`,c:j,soft:z,flame:!0}),n.jsx(fn,{label:"Done this month",value:`${T}/${$}`,c:j,soft:z}),n.jsx(fn,{label:"Completion",value:`${U}%`,c:j,soft:z}),t.type==="regular"?n.jsx(fn,{label:"Weekly target",value:`${t.target_per_week}×`,c:j,soft:z}):n.jsx(fn,{label:t.type==="minimum"?"Min target":"Max allowed",value:`${t.target_count}/${t.period}`,c:j,soft:z})]}),n.jsxs("div",{style:L.navBar,children:[n.jsx("button",{onClick:()=>w(m=>m-1),style:L.navBtn,children:n.jsx(Xn,{size:16})}),n.jsxs("span",{style:L.navLabel,children:[v,f===0?" · This month":""]}),n.jsx("button",{onClick:()=>w(m=>Math.min(0,m+1)),disabled:f>=0,style:{...L.navBtn,...f>=0?L.navBtnDisabled:{}},children:n.jsx(an,{size:16})})]}),R&&n.jsxs("div",{style:{...L.chainBanner,background:C?z:"var(--bg)",color:C?j:"var(--text-3)"},children:[n.jsx(ka,{size:15}),C?`${t.period==="year"?"Yearly":"Monthly"} chain complete — ${N}/${t.target_count} connected`:`${N}/${t.target_count} this ${t.period} · ${(t.target_count||0)-N} more to connect the chain`]}),E&&f===0&&n.jsxs("div",{style:{...L.chainBanner,background:D?z:"var(--bg)",color:D?j:"var(--text-3)"},children:[n.jsx(ka,{size:15}),D?`This week's chain complete — ${Z}/${x} connected`:`${Z}/${x} this week · ${Math.max(0,x-Z)} more to connect the chain`]}),n.jsxs("div",{style:L.monthCard,children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[n.jsx("div",{style:L.monthTitle,children:v}),n.jsx("span",{style:{fontSize:11,color:"var(--text-3)"},children:"Long-press a day for options"})]}),n.jsx("div",{style:L.monthDow,children:mp.map(m=>n.jsx("div",{style:L.monthDowCell,children:m},m))}),n.jsxs("div",{style:L.monthGrid,children:[Array.from({length:u}).map((m,H)=>n.jsx("div",{},`pad${H}`)),c.map((m,H)=>{var We,_e;const ot=H+1,q=p.has(m),ht=m>Sr,It=m===Sr,yt=!!((We=t.log_notes)!=null&&We[m]),jt=(t.type==="minimum"||t.type==="maximum")&&t.period==="day",K=(_e=t.log_counts)==null?void 0:_e[m],mt=K!=null,vt=dt(m),Bt=vt&&!q,$t=(u+H)%7;return n.jsxs("div",{style:{position:"relative"},children:[vt&&n.jsx("span",{style:{...L.chainLine,background:j,...$t===0?{left:"50%"}:{left:-6},...$t===6?{right:"50%"}:{right:-6}}}),n.jsx("button",{disabled:ht,onClick:()=>e(t,m),onMouseDown:()=>!jt&&A(m),onMouseUp:M,onTouchStart:()=>!jt&&A(m),onTouchEnd:M,style:{...L.monthDay,position:"relative",zIndex:1,...q?{background:j,borderColor:j,color:"#fff"}:{},...Bt?{background:z,borderColor:j,color:j}:{},...jt&&mt&&!q?{borderColor:j,color:j}:{},...ht&&!q?L.monthDayFuture:{},...It&&!q?{borderColor:j,borderWidth:2}:{},width:"100%"},children:ot}),jt&&mt&&n.jsx("span",{style:{...L.countBadge,background:q?"#4C9A6B":j},children:K}),yt&&n.jsx("span",{style:L.noteIndicator}),l===m&&n.jsx(uy,{onEdit:s,onDelete:o,onAddNote:()=>V(m),onRemind:s,onClose:()=>a(null)})]},m)})]})]}),h&&n.jsxs("div",{style:L.noteBox,children:[n.jsxs("div",{style:{fontWeight:600,fontSize:13,marginBottom:6},children:["Note for ",h]}),n.jsx("textarea",{value:d,onChange:m=>g(m.target.value),placeholder:"Add a note for this day…",style:{...L.sideInput,minHeight:60,resize:"vertical"}}),n.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[n.jsxs("button",{onClick:()=>{i(h,d),y(null)},style:L.sideAddBtn,children:[n.jsx(zt,{size:13})," Save"]}),n.jsx("button",{onClick:()=>y(null),style:L.sideCancelBtn,children:n.jsx(kt,{size:13})})]})]})]})}function uy({onEdit:t,onDelete:e,onAddNote:r,onRemind:o,onClose:s}){return n.jsxs("div",{style:L.longPressMenu,children:[n.jsxs("button",{style:L.menuItem,onClick:()=>{t(),s()},children:[n.jsx(ke,{size:13})," Edit"]}),n.jsxs("button",{style:L.menuItem,onClick:()=>{r(),s()},children:[n.jsx(zd,{size:13})," Add note"]}),n.jsxs("button",{style:L.menuItem,onClick:()=>{o(),s()},children:[n.jsx(qb,{size:13})," Remind"]}),n.jsxs("button",{style:{...L.menuItem,color:"#C2536B"},onClick:()=>{e(),s()},children:[n.jsx(kt,{size:13})," Delete"]})]})}function by({habits:t,onSave:e,onClose:r}){const[o,s]=b.useState([...t]),i=(l,a)=>{const d=[...o],g=l+a;g<0||g>=d.length||([d[l],d[g]]=[d[g],d[l]],s(d))};return n.jsx("div",{style:L.modalOverlay,onClick:r,children:n.jsxs("div",{style:{...L.modal,maxHeight:"80vh",overflowY:"auto"},onClick:l=>l.stopPropagation(),children:[n.jsxs("div",{style:L.modalHead,children:["Reorder Habits",n.jsx("button",{onClick:r,style:L.closeBtn,children:n.jsx(kt,{size:16})})]}),n.jsx("p",{style:{fontSize:12,color:"var(--text-3)",margin:"0 0 10px"},children:"Use arrows to set the display order."}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:o.map((l,a)=>{var g;const d=((g=on[l.pillar])==null?void 0:g.dot)||"#9A968C";return n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"9px 10px",background:"var(--bg)",borderRadius:9,border:"1px solid var(--border)"},children:[n.jsx("span",{style:{...L.sideDot,background:d}}),n.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500},children:l.name}),n.jsx("button",{onClick:()=>i(a,-1),disabled:a===0,style:{...L.navBtn,width:28,height:28,opacity:a===0?.3:1,fontSize:14},children:"↑"}),n.jsx("button",{onClick:()=>i(a,1),disabled:a===o.length-1,style:{...L.navBtn,width:28,height:28,opacity:a===o.length-1?.3:1,fontSize:14},children:"↓"})]},l.id)})}),n.jsxs("button",{onClick:()=>e(o.map(l=>l.id)),style:{...L.sideAddBtn,width:"100%",marginTop:14,height:38,justifyContent:"center"},children:[n.jsx(zt,{size:14})," Save Order"]})]})})}function py({year:t}){const[e,r]=b.useState([]);if(b.useEffect(()=>{O.getHabitsYearly(t).then(r).catch(console.error)},[t]),!e.length)return null;const o=Array.from({length:12},(i,l)=>{const a=e.reduce((g,h)=>{var y;return g+(((y=h.monthly[l+1])==null?void 0:y.done)||0)},0),d=e.reduce((g,h)=>{var y;return g+Math.floor((((y=h.monthly[l+1])==null?void 0:y.days)||30)/7*7)},0);return d>0?Math.round(a/d*100):0}),s=Math.max(...o,1);return n.jsxs("div",{style:{...L.monthCard,marginTop:18},children:[n.jsxs("div",{style:L.monthTitle,children:[t," Completion"]}),n.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:6,height:80,marginTop:12},children:o.map((i,l)=>n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[n.jsx("div",{style:{width:"100%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",height:`${i/s*60}px`,minHeight:2,opacity:i>0?1:.15},title:`${i}%`}),n.jsx("span",{style:{fontSize:9,color:"var(--text-3)",fontWeight:600},children:ey[l]})]},l))})]})}function fn({label:t,value:e,c:r,soft:o,flame:s}){return n.jsxs("div",{style:{...L.stat,background:o},children:[n.jsx("div",{style:L.statLabel,children:t}),n.jsxs("div",{style:{...L.statValue,color:r},children:[s&&n.jsx(Jn,{size:15})," ",e]})]})}const L={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:230,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",padding:"20px 12px",display:"flex",flexDirection:"column",gap:3,overflowY:"auto"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.18)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)",boxShadow:"none"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.38)",zIndex:20},sideTop:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 4px"},closeBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",marginBottom:8},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700,padding:"0 6px 14px"},sideItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"9px 10px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:500,color:"var(--text-2)",textAlign:"left"},sideItemOn:{background:"var(--hover)",fontWeight:600},sideLabel:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},sideCount:{fontSize:11,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:10,padding:"1px 7px"},sideStreak:{display:"flex",alignItems:"center",gap:3,fontSize:11,fontWeight:600,color:"#C2773B"},sideDot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},sideDivider:{height:1,background:"var(--border)",margin:"8px 6px"},addBox:{padding:"10px 6px",display:"flex",flexDirection:"column",gap:6},sideInput:{border:"1px solid var(--border)",borderRadius:7,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},sideAddBtn:{border:"none",background:"#4C9A6B",color:"#fff",height:30,padding:"0 12px",borderRadius:7,cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontSize:13,fontFamily:"inherit"},sideCancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:30,height:30,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},sideNewBtn:{display:"flex",alignItems:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",borderRadius:8,padding:"8px 10px",fontSize:12.5,color:"var(--text-3)",fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginTop:6,justifyContent:"center"},main:{flex:1,padding:"26px",overflowX:"hidden",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:200},mainHead:{marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:5,display:"flex",alignItems:"center"},h1:{fontSize:27,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},actionBtn:{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:500,color:"var(--text-2)",border:"1px solid var(--border)",background:"var(--surface)",padding:"5px 10px",borderRadius:7,cursor:"pointer",fontFamily:"inherit"},progressCard:{background:"var(--surface)",borderRadius:12,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14,display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"},progressDivider:{width:1,alignSelf:"stretch",background:"var(--border)",minHeight:48},ringStat:{display:"flex",alignItems:"center",gap:12,flex:"1 1 160px"},ringBox:{position:"relative",width:70,height:70,display:"grid",placeItems:"center",flexShrink:0},ringPct:{position:"absolute",inset:0,display:"grid",placeItems:"center",fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},ringLabel:{fontSize:14,fontWeight:700,color:"var(--text)"},ringSub:{fontSize:11.5,color:"var(--text-3)",fontWeight:500,marginTop:2},weekCard:{background:"var(--surface)",borderRadius:12,padding:"8px 14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"auto"},weekHeadRow:{display:"flex",alignItems:"flex-end",padding:"10px 0",borderBottom:"1px solid var(--border)",minWidth:480},weekNameCol:{width:160,flexShrink:0,display:"flex",alignItems:"center",gap:8},weekDayHead:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2},weekDayName:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekDayNum:{fontSize:12,fontWeight:600,color:"var(--text-2)",width:22,height:22,display:"grid",placeItems:"center",borderRadius:"50%"},weekDayToday:{background:"var(--accent-strong)",color:"#fff"},weekStreakCol:{width:64,flexShrink:0,textAlign:"center",fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekRow:{display:"flex",alignItems:"center",padding:"9px 0",borderBottom:"1px solid #F4F2EC",minWidth:480},weekHabitName:{fontSize:13,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},weekCell:{flex:1,display:"grid",placeItems:"center"},typeBadge:{fontSize:10,color:"var(--text-3)",background:"var(--hover)",padding:"1px 6px",borderRadius:8,fontWeight:600},tick:{width:26,height:26,borderRadius:7,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",padding:0},tickFuture:{opacity:.4,cursor:"not-allowed",borderStyle:"dashed"},streakPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,fontWeight:700,padding:"3px 9px",borderRadius:12},tinyBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:"2px 3px",display:"grid",placeItems:"center",borderRadius:4},statStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:10,marginBottom:18},stat:{borderRadius:10,padding:"13px 14px"},statLabel:{fontSize:11,fontWeight:600,color:"var(--text-2)",marginBottom:5},statValue:{fontSize:19,fontWeight:700,display:"flex",alignItems:"center",gap:5,fontFamily:"'Fraunces',Georgia,serif"},monthCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},monthTitle:{fontSize:14,fontWeight:700,marginBottom:12,fontFamily:"'Fraunces',Georgia,serif"},monthDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:8},monthDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},monthGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6},monthDay:{aspectRatio:"1",border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",display:"grid",placeItems:"center"},monthDayFuture:{opacity:.4,cursor:"not-allowed",background:"var(--surface-2)"},noteIndicator:{position:"absolute",top:3,right:3,width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},cellNoteBubble:{position:"absolute",top:2,right:"calc(50% - 16px)",width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},countBadge:{position:"absolute",bottom:2,right:2,minWidth:13,height:13,padding:"0 2px",borderRadius:7,color:"#fff",fontSize:9,fontWeight:700,display:"grid",placeItems:"center",lineHeight:1},counterBtn:{width:44,height:44,borderRadius:"50%",border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:24,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1},chainLine:{position:"absolute",top:"calc(50% - 3px)",left:0,right:0,height:6,zIndex:0,opacity:.9},chainBanner:{display:"flex",alignItems:"center",gap:8,borderRadius:10,padding:"10px 14px",marginBottom:14,fontSize:12.5,fontWeight:700,fontFamily:"'Inter',system-ui,sans-serif"},navBar:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:16},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},navLabel:{fontSize:13,fontWeight:700,color:"var(--text)",minWidth:180,textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},noteBox:{background:"var(--surface)",borderRadius:10,padding:14,marginTop:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},longPressMenu:{position:"absolute",top:"100%",left:0,zIndex:50,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 4px 16px rgba(0,0,0,0.12)",padding:"4px 0",minWidth:140},menuItem:{display:"flex",alignItems:"center",gap:8,width:"100%",border:"none",background:"none",padding:"8px 14px",fontSize:13,color:"var(--text)",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:100,display:"grid",placeItems:"center"},modal:{background:"var(--surface)",borderRadius:14,padding:24,width:320,maxWidth:"90vw",display:"flex",flexDirection:"column",gap:8},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:700,fontSize:16,fontFamily:"'Fraunces',Georgia,serif",marginBottom:6},modalLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4}},Ia=[{id:1,label:"Rough",emoji:"😣",color:"#C2536B"},{id:2,label:"Low",emoji:"🙁",color:"#C2773B"},{id:3,label:"Okay",emoji:"😐",color:"#C9A227"},{id:4,label:"Good",emoji:"🙂",color:"#4C9A6B"},{id:5,label:"Great",emoji:"😄",color:"#3A7CA5"}],my=t=>Ia.find(e=>e.id===t),bl=[{id:"wins",label:"Wins",hint:"What went well today?",icon:nn,color:"#C9A227"},{id:"grateful",label:"Grateful for",hint:"1–3 things",icon:hh,color:"#C2536B"},{id:"mattered",label:"What mattered",hint:"The point of today",icon:Ed,color:"#3A7CA5"},{id:"letgo",label:"Letting go of",hint:"Offload what's draining",icon:Wh,color:"#8268B0"},{id:"tomorrow",label:"Tomorrow's one thing",hint:"A single priority",icon:Dh,color:"#4C9A6B"}],fp=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,fy=()=>fp(new Date),pl=t=>new Date(t+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"});function hy(){const t=fy(),[e,r]=[new Date().getFullYear(),new Date().getMonth()+1],[o,s]=b.useState(null),i=o||t,l=i===t,[a,d]=b.useState(null),[g,h]=b.useState({}),[y,f]=b.useState(Object.fromEntries(bl.map(R=>[R.id,""]))),w=b.useCallback(async R=>{const N=await O.getJournalEntry(R);d(N)},[]);b.useCallback(async()=>{const R=await O.getJournalHistory(e,r);h(R)},[e,r]);const k=b.useCallback(async()=>{const[R,N]=await Promise.all([O.getJournalEntry(i),O.getJournalHistory(e,r)]);d(R),h(N)},[i,e,r]);b.useEffect(()=>{k()},[k]);const j=async R=>{l&&(await O.updateJournalMood(i,R),k())},z=async R=>{if(!l)return;const N=y[R].trim();N&&(await O.addJournalBullet(i,R,N),f(C=>({...C,[R]:""})),w(i))},p=async R=>{await O.deleteJournalBullet(R),w(i)},c=R=>{s(R===t?null:R),f(Object.fromEntries(bl.map(N=>[N.id,""])))};if(!a)return n.jsx("div",{style:{padding:28,color:"var(--text-3)"},children:"Loading…"});const u=a.mood!==null,v=(()=>{let R=0;const N=new Date(t);if(g[t]||l&&u)R=1,N.setDate(N.getDate()-1);else return 0;for(;;){const E=fp(N);if(g[E])R++,N.setDate(N.getDate()-1);else break}return R})(),S=Object.values(a.bullets||{}).reduce((R,N)=>R+N.length,0),T=new Date(e,r,0).getDate(),$=new Date(e,r-1,1).getDay(),U=$===0?6:$-1;return n.jsxs("div",{style:wt.page,children:[n.jsxs("div",{style:wt.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:wt.eyebrow,children:"Anvil · Journal"}),!l&&n.jsxs("button",{style:wt.backBtn,onClick:()=>s(null),children:[n.jsx(Xn,{size:14})," Back to Today"]}),n.jsx("h1",{style:wt.h1,children:l?"Today":pl(i)}),l&&n.jsx("div",{style:wt.date,children:pl(t)})]}),n.jsxs("div",{style:wt.streakBox,children:[n.jsx(Jn,{size:16,color:"#C2773B"}),n.jsx("span",{style:wt.streakNum,children:v}),n.jsx("span",{style:wt.streakLabel,children:"day streak"})]})]}),n.jsxs("div",{style:wt.card,children:[n.jsxs("div",{style:wt.cardTitle,children:["How ",l?"are":"were"," you?"]}),n.jsx("div",{style:wt.moodRow,children:Ia.map(R=>{const N=a.mood===R.id;return n.jsxs("button",{onClick:()=>j(R.id),disabled:!l,style:{...wt.moodBtn,cursor:l?"pointer":"default",...N?{background:R.color,borderColor:R.color,transform:"translateY(-2px)"}:{},...!l&&!N?{opacity:.55}:{}},children:[n.jsx("span",{style:wt.moodEmoji,children:R.emoji}),n.jsx("span",{style:{...wt.moodLabel,color:N?"#fff":"#6B675E"},children:R.label})]},R.id)})})]}),bl.map(R=>{var E;const N=R.icon,C=((E=a.bullets)==null?void 0:E[R.id])||[];return n.jsxs("div",{style:wt.card,children:[n.jsxs("div",{style:wt.sectionHead,children:[n.jsx("span",{style:{...wt.sectionIcon,background:`${R.color}1A`,color:R.color},children:n.jsx(N,{size:15})}),n.jsxs("div",{children:[n.jsx("div",{style:wt.cardTitle,children:R.label}),n.jsx("div",{style:wt.sectionHint,children:R.hint})]})]}),n.jsxs("ul",{style:wt.bulletList,children:[C.map(x=>n.jsxs("li",{style:wt.bullet,children:[n.jsx("span",{style:{...wt.bulletDot,background:R.color}}),n.jsx("span",{style:wt.bulletText,children:x.text}),l&&n.jsx("button",{onClick:()=>p(x.id),style:wt.bulletDel,children:n.jsx(kt,{size:13})})]},x.id)),!l&&C.length===0&&n.jsx("li",{style:wt.sectionHint,children:"Nothing written."})]}),l&&n.jsxs("div",{style:wt.addRow,children:[n.jsx("input",{placeholder:"Add a point…",value:y[R.id],onChange:x=>f(G=>({...G,[R.id]:x.target.value})),onKeyDown:x=>x.key==="Enter"&&z(R.id),style:wt.input}),n.jsx("button",{onClick:()=>z(R.id),style:{...wt.addBtn,background:R.color},children:n.jsx(ge,{size:16})})]})]},R.id)}),n.jsxs("div",{style:wt.card,children:[n.jsxs("div",{style:wt.cardTitle,children:[new Date(e,r-1).toLocaleDateString("en-US",{month:"long",year:"numeric"})," · Mood history",n.jsx("span",{style:{fontSize:11,color:"var(--text-3)",fontWeight:400,marginLeft:8},children:"tap a day to view"})]}),n.jsx("div",{style:wt.calDow,children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(R=>n.jsx("div",{style:wt.calDowCell,children:R},R))}),n.jsxs("div",{style:wt.calGrid,children:[Array.from({length:U}).map((R,N)=>n.jsx("div",{},`p${N}`)),Array.from({length:T},(R,N)=>N+1).map(R=>{const N=`${e}-${String(r).padStart(2,"0")}-${String(R).padStart(2,"0")}`,C=N===t&&a.mood?a.mood:g[N],E=C?my(C):null,x=N>t,G=N===i;return n.jsx("button",{onClick:()=>!x&&c(N),disabled:x,style:{...wt.calDay,background:E?E.color:x?"var(--surface-2)":"var(--surface)",borderColor:G?"var(--accent-strong)":"var(--border)",borderWidth:G?2:1,color:E?"#fff":"var(--text-3)",opacity:x?.5:1,cursor:x?"not-allowed":"pointer",outline:G?"2px solid var(--accent-strong)":"none",outlineOffset:1},title:E?E.label:N,children:E?E.emoji:R},R)})]}),n.jsx("div",{style:wt.legend,children:Ia.map(R=>n.jsxs("span",{style:wt.legendItem,children:[n.jsx("span",{style:{...wt.legendDot,background:R.color}})," ",R.label]},R.id))})]}),n.jsx("div",{style:wt.footer,children:l?u?`Mood set · ${S} point${S===1?"":"s"} written today`:"Tap a mood to log today and keep your streak":`Viewing ${pl(i)} · past entries are read-only`})]})}const wt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},backBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",background:"none",color:"#3A7CA5",fontSize:12.5,fontWeight:600,cursor:"pointer",padding:"0 0 6px",fontFamily:"inherit"},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},date:{fontSize:13,color:"var(--text-3)",marginTop:4},streakBox:{display:"flex",alignItems:"center",gap:6,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"8px 14px"},streakNum:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"#C2773B"},streakLabel:{fontSize:11,color:"var(--text-3)",fontWeight:500},card:{background:"var(--surface)",borderRadius:12,padding:"18px 20px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},cardTitle:{fontSize:14,fontWeight:700,marginBottom:12,color:"var(--text)"},moodRow:{display:"flex",gap:8,flexWrap:"wrap"},moodBtn:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,border:"2px solid var(--border)",background:"var(--surface)",borderRadius:10,padding:"10px 12px",cursor:"pointer",flex:"1 1 60px",transition:"transform 0.1s"},moodEmoji:{fontSize:22},moodLabel:{fontSize:11,fontWeight:600},sectionHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:10},sectionIcon:{width:32,height:32,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},sectionHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},bulletList:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6,marginBottom:10},bullet:{display:"flex",alignItems:"center",gap:8,fontSize:13.5,lineHeight:1.4},bulletDot:{width:6,height:6,borderRadius:"50%",flexShrink:0},bulletText:{flex:1},bulletDel:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},addRow:{display:"flex",gap:8},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",outline:"none"},addBtn:{width:36,height:36,border:"none",borderRadius:8,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:12},calDay:{aspectRatio:"1",border:"1px solid var(--border)",borderRadius:7,fontSize:13,display:"grid",placeItems:"center",fontWeight:500,fontFamily:"inherit"},legend:{display:"flex",gap:10,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)"},legendDot:{width:8,height:8,borderRadius:"50%",display:"inline-block"},footer:{fontSize:12.5,color:"var(--text-3)",textAlign:"center",marginTop:8,fontStyle:"italic"}},Xe=[{id:"D",label:"Data",color:"#3A7CA5",soft:"rgba(58,124,165,0.10)",prompt:"What did you read/watch? Log the raw source and a quick note.",hint:"e.g. 'Atomic Habits ch.1 — habits are systems not goals'"},{id:"I",label:"Information",color:"#8268B0",soft:"rgba(130,104,176,0.10)",prompt:"What did you actually understand from it? In your own words.",hint:"e.g. 'Small 1% improvements compound into massive change over time'"},{id:"K",label:"Knowledge",color:"#C9A227",soft:"rgba(201,162,39,0.10)",prompt:"How will this specifically improve your life? Connect it to your goals.",hint:"e.g. 'I will improve my morning workout habit by 1% each week'"},{id:"W",label:"Wisdom",color:"#4C9A6B",soft:"rgba(76,154,107,0.10)",prompt:"How have you implemented it? What changed?",hint:"e.g. 'I've not missed a workout in 3 weeks using the 1% rule'"}],uc=t=>Xe.findIndex(e=>e.id===t),za=[{id:"book",label:"Book",icon:tp},{id:"video",label:"Video",icon:_h},{id:"article",label:"Article",icon:zd}],bc=t=>za.find(e=>e.id===t)||za[0],ml={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"};function yy(){var Z;const[t,e]=b.useState([]),[r,o]=b.useState(null),[s,i]=b.useState("ALL"),[l,a]=b.useState(!1),[d,g]=b.useState(null),[h,y]=b.useState({title:"",type:"book",pillar:"Academic",note:""}),[f,w]=b.useState({}),[k,j]=b.useState(null),[z,p]=b.useState(null),c=b.useCallback(async()=>{try{const D=await O.getSkills();e(D);const A={};D.forEach(M=>{A[M.id]=Object.fromEntries(Xe.map(V=>[V.id,""]))}),w(M=>{const V={...A};return D.forEach(W=>{M[W.id]&&(V[W.id]={...A[W.id],...M[W.id]})}),V})}catch(D){console.error(D)}},[]);b.useEffect(()=>{c()},[c]);const u=t.find(D=>D.id===r),v=u?uc(u.stage):-1,S=async(D,A)=>{var V;const M=(((V=f[D])==null?void 0:V[A])??"").trim();M&&(await O.addSkillNote(D,A,M),w(W=>({...W,[D]:{...W[D],[A]:""}})),c())},T=async D=>{await O.deleteSkillNote(D),c()},$=async()=>{!u||!(z!=null&&z.trim())||(await O.updateSkill(u.id,{title:z.trim()}),p(null),c())},U=async()=>{!k||!k.text.trim()||(await O.updateSkillNote(k.id,k.text.trim()),j(null),c())},R=async D=>{await O.toggleSkillNote(D),c()},N=async(D,A)=>{t.find(V=>V.id===D)&&(A==="W"&&g(D),await O.completeSkillStage(D,A),c())},C=async()=>{if(!h.title.trim())return;const D=await O.createSkill({pillar:h.pillar,title:h.title.trim(),source_type:h.type,note_d:h.note.trim()});a(!1),y({title:"",type:"book",pillar:"Academic",note:""}),o(D.id),c()},E=async D=>{await O.deleteSkill(D),r===D&&o(null),c()},x=s==="ALL"?t:t.filter(D=>D.stage===s),G=t.filter(D=>D.stage==="W").length,dt=!!u;return n.jsxs("div",{style:nt.page,children:[d&&n.jsx("div",{style:nt.celebOverlay,children:n.jsxs("div",{style:nt.celebBox,children:[n.jsx("div",{style:nt.celebEmoji,children:"🏆"}),n.jsx("div",{style:nt.celebTitle,children:"Wisdom unlocked!"}),n.jsx("div",{style:nt.celebSub,children:"You've implemented this knowledge — that's rare and real."}),n.jsx("button",{onClick:()=>g(null),style:nt.celebBtn,children:"Continue"})]})}),n.jsxs("div",{style:nt.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:nt.eyebrow,children:"Anvil · Skills"}),n.jsx("h1",{style:nt.h1,children:"DIKW Skills"}),n.jsx("div",{style:nt.subhead,children:"Data → Information → Knowledge → Wisdom"})]}),n.jsxs("div",{style:nt.headRight,children:[n.jsxs("div",{style:nt.wisdomBadge,children:[n.jsx(nn,{size:14,color:"#C9A227"})," ",G," Wisdom",G!==1?"s":""]}),n.jsxs("button",{onClick:()=>{a(!0),o(null)},style:nt.addSkillBtn,children:[n.jsx(ge,{size:15})," Add skill"]})]})]}),n.jsx("div",{style:nt.filterBar,children:["ALL",...Xe.map(D=>D.id)].map(D=>{const A=Xe.find(V=>V.id===D),M=s===D;return n.jsx("button",{onClick:()=>i(D),style:{...nt.filterBtn,...M?{background:A?A.color:"var(--accent-strong)",color:"#fff",borderColor:"transparent"}:{}},children:A?`${D} · ${A.label}`:"All"},D)})}),n.jsxs("div",{style:{...nt.layout,gridTemplateColumns:dt?"1fr 1fr":"1fr"},children:[n.jsxs("div",{style:nt.cardList,children:[l&&n.jsxs("div",{style:{...nt.skillCard,border:"2px dashed #3A7CA5"},children:[n.jsx("div",{style:nt.cardTitle,children:"New skill"}),n.jsx("input",{placeholder:"Title (book / video / article name)",value:h.title,onChange:D=>y(A=>({...A,title:D.target.value})),onKeyDown:D=>D.key==="Enter"&&C(),style:nt.input,autoFocus:!0}),n.jsxs("div",{style:nt.addRow,children:[n.jsx("select",{value:h.type,onChange:D=>y(A=>({...A,type:D.target.value})),style:nt.select,children:za.map(D=>n.jsx("option",{value:D.id,children:D.label},D.id))}),n.jsx("select",{value:h.pillar,onChange:D=>y(A=>({...A,pillar:D.target.value})),style:nt.select,children:Object.keys(ml).map(D=>n.jsx("option",{children:D},D))})]}),n.jsx("input",{placeholder:"First note (what did you read/watch?)",value:h.note,onChange:D=>y(A=>({...A,note:D.target.value})),style:nt.input}),n.jsxs("div",{style:nt.addRow,children:[n.jsxs("button",{onClick:C,style:nt.saveBtn,children:[n.jsx(zt,{size:14})," Save"]}),n.jsxs("button",{onClick:()=>a(!1),style:nt.cancelBtn,children:[n.jsx(kt,{size:14})," Cancel"]})]})]}),x.map(D=>{const A=uc(D.stage),M=Xe[A],V=bc(D.type),W=D.stage==="W",F=r===D.id;return n.jsxs("div",{onClick:()=>o(F?null:D.id),style:{...nt.skillCard,...F?{borderColor:M.color,borderWidth:2}:{},...W?{background:"rgba(76,154,107,0.05)"}:{}},children:[n.jsxs("div",{style:nt.skillCardTop,children:[n.jsxs("div",{style:nt.skillMeta,children:[n.jsx("span",{style:{color:ml[D.pillar]},children:n.jsx(V.icon,{size:13})}),n.jsx("span",{style:{...nt.pillarDot,background:ml[D.pillar]}}),n.jsxs("span",{style:nt.srcLabel,children:[V.label," · ",D.pillar]})]}),n.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[W&&n.jsx(Jo,{size:14,color:"#4C9A6B"}),n.jsx("button",{onClick:m=>{m.stopPropagation(),E(D.id)},style:nt.ghostBtn,children:n.jsx(kt,{size:13})})]})]}),n.jsx("div",{style:nt.skillTitle,children:D.title}),n.jsxs("div",{style:nt.track,children:[Xe.map((m,H)=>{var It;const ot=H<A,q=H===A,ht=(It=D.completed_stages)==null?void 0:It[m.id];return n.jsxs("div",{style:nt.trackItem,children:[n.jsxs("div",{style:{...nt.trackDot,background:ot||ht||q?m.color:"var(--border)",boxShadow:q?`0 0 0 3px ${m.color}33`:"none"},children:[(ot||q&&ht)&&n.jsx(zt,{size:9,color:"#fff",strokeWidth:3}),q&&!ht&&n.jsx("span",{style:nt.trackCurrent,children:m.id}),!ot&&!q&&n.jsx(rc,{size:8,color:"#B5B1A7"})]}),H<Xe.length-1&&n.jsx("div",{style:{...nt.trackLine,background:ot?Xe[H+1].color:"var(--border)"}})]},m.id)}),n.jsx("span",{style:{...nt.stageTag,background:M.soft,color:M.color},children:M.label})]})]},D.id)}),x.length===0&&!l&&n.jsx("div",{style:nt.empty,children:"No skills at this stage yet."})]}),u&&n.jsxs("div",{style:nt.detail,children:[n.jsxs("div",{style:nt.detailHead,children:[n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsxs("div",{style:nt.eyebrow,children:[bc(u.type).label," · ",u.pillar]}),z!==null?n.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginTop:4},children:[n.jsx("input",{autoFocus:!0,value:z,onChange:D=>p(D.target.value),onKeyDown:D=>{D.key==="Enter"&&$(),D.key==="Escape"&&p(null)},style:{...nt.input,fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:0,flex:1}}),n.jsx("button",{onClick:$,style:{...nt.noteAddBtn,background:"#4C9A6B",width:30,height:30},children:n.jsx(zt,{size:13})}),n.jsx("button",{onClick:()=>p(null),style:{...nt.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:30,height:30},children:n.jsx(kt,{size:13})})]}):n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx("div",{style:nt.detailTitle,children:u.title}),n.jsx("button",{onClick:()=>p(u.title),style:nt.ghostBtn,title:"Edit name",children:n.jsx(ke,{size:13})})]})]}),n.jsx("button",{onClick:()=>{o(null),p(null)},style:nt.closeBtn,children:n.jsx(kt,{size:16})})]}),Xe.map((D,A)=>{var ot,q,ht;const M=A<=v,V=A===v,W=A<v||((ot=u.completed_stages)==null?void 0:ot[D.id]),F=A>v,m=((q=u.notes)==null?void 0:q[D.id])||[],H=((ht=f[u.id])==null?void 0:ht[D.id])??"";return n.jsxs("div",{style:{...nt.stageBlock,...M?{borderColor:D.color}:{},opacity:F?.45:1},children:[n.jsxs("div",{style:nt.stageBlockHead,children:[n.jsx("div",{style:{...nt.stageLetter,background:M?D.color:"var(--border)",color:M?"#fff":"#9A968C"},children:W&&!V?n.jsx(zt,{size:12,color:"#fff",strokeWidth:3}):F?n.jsx(rc,{size:11,color:"#9A968C"}):D.id}),n.jsxs("div",{style:{flex:1},children:[n.jsx("div",{style:{...nt.stageName,color:M?D.color:"#9A968C"},children:D.label}),M&&n.jsx("div",{style:nt.stagePrompt,children:D.prompt})]}),W&&!V&&n.jsx("span",{style:{...nt.doneBadge,color:D.color,background:D.soft},children:"Done"})]}),M&&(()=>{var K,mt;const It=D.id==="W",yt=m.length>0&&m.every(vt=>vt.done),jt=It?yt:m.length>0;return n.jsxs(n.Fragment,{children:[m.length>0&&n.jsx("ul",{style:nt.noteList,children:m.map(vt=>n.jsxs("li",{style:nt.noteItem,children:[It?n.jsx("button",{onClick:()=>R(vt.id),style:{...nt.checkBox,...vt.done?{background:D.color,borderColor:D.color}:{}},children:vt.done&&n.jsx(zt,{size:11,color:"#fff",strokeWidth:3})}):n.jsx("span",{style:{...nt.noteDot,background:D.color}}),(k==null?void 0:k.id)===vt.id?n.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[n.jsx("input",{autoFocus:!0,value:k.text,onChange:Bt=>j($t=>({...$t,text:Bt.target.value})),onKeyDown:Bt=>{Bt.key==="Enter"&&U(),Bt.key==="Escape"&&j(null)},style:{...nt.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),n.jsx("button",{onClick:U,style:{...nt.noteAddBtn,background:D.color,width:28,height:28},children:n.jsx(zt,{size:12})}),n.jsx("button",{onClick:()=>j(null),style:{...nt.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:n.jsx(kt,{size:12})})]}):n.jsx("span",{style:{...nt.noteText,...It&&vt.done?{textDecoration:"line-through",color:"var(--text-3)"}:{}},children:vt.text}),(k==null?void 0:k.id)!==vt.id&&n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>j({id:vt.id,text:vt.text}),style:nt.ghostBtn,children:n.jsx(ke,{size:12})}),n.jsx("button",{onClick:()=>T(vt.id),style:nt.ghostBtn,children:n.jsx(kt,{size:12})})]})]},vt.id))}),m.length===0&&n.jsx("div",{style:nt.noNotes,children:It?"Add the steps to implement this — check each off as you do it.":`No notes yet — ${D.hint}`}),n.jsxs("div",{style:nt.noteAddRow,children:[n.jsx("input",{placeholder:It?"Add a step to implement…":`Add a ${D.label} note…`,value:H,onChange:vt=>w(Bt=>({...Bt,[u.id]:{...Bt[u.id],[D.id]:vt.target.value}})),onKeyDown:vt=>vt.key==="Enter"&&S(u.id,D.id),style:nt.noteInput}),n.jsx("button",{onClick:()=>S(u.id,D.id),style:{...nt.noteAddBtn,background:D.color},children:n.jsx(ge,{size:14})})]}),V&&!((K=u.completed_stages)!=null&&K[D.id])&&n.jsxs(n.Fragment,{children:[It&&m.length>0&&!yt&&n.jsxs("div",{style:nt.checklistHint,children:[m.filter(vt=>vt.done).length,"/",m.length," done — check all steps to complete Wisdom"]}),n.jsxs("button",{onClick:()=>N(u.id,D.id),disabled:!jt,style:{...nt.advanceBtn,background:jt?D.color:"#C3BFB5",marginTop:10,cursor:jt?"pointer":"not-allowed"},children:[n.jsx(zt,{size:14}),It?"Mark Wisdom complete":`Complete ${D.label} → ${(mt=Xe[A+1])==null?void 0:mt.label}`]})]})]})})()]},D.id)}),u.stage==="W"&&((Z=u.completed_stages)==null?void 0:Z.W)&&n.jsxs("div",{style:nt.wisdomDone,children:[n.jsx(nn,{size:16,color:"#4C9A6B"})," Wisdom achieved — implemented in your life"]})]})]})]})}const nt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box",position:"relative"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},wisdomBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addSkillBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},filterBar:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16},filterBtn:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},layout:{display:"grid",gap:12},cardList:{display:"flex",flexDirection:"column",gap:10},skillCard:{background:"var(--surface)",borderRadius:12,padding:"14px",border:"1.5px solid var(--border)",cursor:"pointer",boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},skillCardTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},skillMeta:{display:"flex",alignItems:"center",gap:6},pillarDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},srcLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)"},skillTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",marginBottom:12},cardTitle:{fontSize:13,fontWeight:700,marginBottom:10},track:{display:"flex",alignItems:"center"},trackItem:{display:"flex",alignItems:"center"},trackDot:{width:22,height:22,borderRadius:"50%",display:"grid",placeItems:"center",flexShrink:0},trackCurrent:{fontSize:9,fontWeight:800,color:"#fff"},trackLine:{width:24,height:3,borderRadius:2},stageTag:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,marginLeft:10},detail:{background:"var(--surface)",borderRadius:14,padding:"18px 16px",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",border:"1.5px solid var(--border)",alignSelf:"start"},detailHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16},detailTitle:{fontSize:18,fontWeight:700,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},stageBlock:{border:"1.5px solid var(--border)",borderRadius:10,padding:"12px 13px",marginBottom:10},stageBlockHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:8},stageLetter:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",fontSize:13,fontWeight:800,flexShrink:0},stageName:{fontSize:13,fontWeight:700},stagePrompt:{fontSize:11.5,color:"var(--text-2)",marginTop:2,lineHeight:1.4},doneBadge:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10,marginLeft:"auto",flexShrink:0},noteList:{margin:"0 0 8px 0",padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6},noteItem:{display:"flex",alignItems:"flex-start",gap:8,fontSize:13,lineHeight:1.4},noteDot:{width:6,height:6,borderRadius:"50%",flexShrink:0,marginTop:5},checkBox:{width:18,height:18,borderRadius:5,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginTop:1,padding:0},checklistHint:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,marginTop:10,textAlign:"center"},noteText:{flex:1,color:"var(--text)"},noNotes:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",marginBottom:8},noteAddRow:{display:"flex",gap:6},noteInput:{flex:1,border:"1px solid var(--border)",borderRadius:7,padding:"7px 10px",fontSize:13,fontFamily:"inherit",outline:"none"},noteAddBtn:{width:32,height:32,border:"none",borderRadius:7,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},advanceBtn:{display:"flex",alignItems:"center",gap:8,border:"none",color:"#fff",padding:"10px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},wisdomDone:{display:"flex",alignItems:"center",gap:8,justifyContent:"center",fontSize:13.5,fontWeight:700,color:"#4C9A6B",padding:12,background:"rgba(76,154,107,0.08)",borderRadius:10,marginTop:4},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box",marginBottom:8},select:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:12.5,fontFamily:"inherit",flex:1},addRow:{display:"flex",gap:8,marginBottom:8},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{fontSize:13,color:"var(--text-3)",padding:"32px 12px",textAlign:"center"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.55)",zIndex:50,display:"grid",placeItems:"center"},celebBox:{background:"var(--surface)",borderRadius:20,padding:"40px 32px",textAlign:"center",maxWidth:320,boxShadow:"0 8px 40px rgba(0,0,0,0.18)"},celebEmoji:{fontSize:52,marginBottom:12},celebTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:8},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:"#4C9A6B",color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},ks=[{id:"aarti",title:"Aarti",html:`<h1>॥ गणपतीची आरती ॥</h1><br/>
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
      </div>`}];function vy(){const[t,e]=b.useState(()=>window.innerWidth<720);return b.useEffect(()=>{const r=()=>e(window.innerWidth<720);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),t}const xy=t=>new Promise((e,r)=>{const o=new FileReader;o.onload=()=>{const s=new Image;s.onload=()=>{let{width:l,height:a}=s;l>a&&l>1400?(a=a*1400/l,l=1400):a>1400&&(l=l*1400/a,a=1400);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(s,0,0,l,a),e(d.toDataURL("image/jpeg",.85))},s.onerror=r,s.src=o.result},o.onerror=r,o.readAsDataURL(t)});function pc({base:t,count:e,images:r}){const o=r&&r.length?r:null,s=o?o.length:e,[i,l]=b.useState(0);if(!s)return null;const a=i%s,d=o?o[a]:`${t}${a+1}.jpg`;return n.jsxs("div",{style:{maxWidth:560,margin:"0 auto"},children:[n.jsx("div",{style:ct.carouselFrame,children:n.jsx("img",{src:d,alt:`Page ${a+1}`,style:ct.carouselImg})}),n.jsxs("div",{style:ct.carouselNav,children:[n.jsxs("button",{onClick:()=>l(g=>(g-1+s)%s),style:ct.carouselBtn,children:[n.jsx(Xn,{size:16})," Prev"]}),n.jsxs("span",{style:ct.carouselCount,children:[o?"":"Adhyay ",a+1," / ",s]}),n.jsxs("button",{onClick:()=>l(g=>(g+1)%s),style:ct.carouselBtn,children:["Next ",n.jsx(an,{size:16})]})]})]})}function ky(){const t=vy(),[e,r]=b.useState(!1),[o,s]=b.useState([]),[i,l]=b.useState("dss"),[a,d]=b.useState(!1),[g,h]=b.useState({title:"",type:"text",content:"",images:[]}),[y,f]=b.useState([]),[w,k]=b.useState(null),[j,z]=b.useState(!1),p=b.useRef(!1),c=b.useCallback(async()=>{try{const[M,V,W]=await Promise.all([O.getDecks(),O.getSetting("spiritual_order"),O.getSetting("spiritual_default")]);if(s(M),Array.isArray(V==null?void 0:V.value)&&f(V.value),W!=null&&W.value&&k(W.value),!p.current){p.current=!0;const F=new Set([...ks.map(m=>m.id),...M.map(m=>`deck-${m.id}`)]);W!=null&&W.value&&F.has(W.value)&&l(W.value)}}catch{}},[]);b.useEffect(()=>{c()},[c]);const u=[...ks.map(M=>({id:M.id,title:M.title})),...o.map(M=>({id:`deck-${M.id}`,title:M.title}))],v=(()=>{if(!y.length)return u;const M=new Map(u.map(W=>[W.id,W])),V=[];return y.forEach(W=>{M.has(W)&&(V.push(M.get(W)),M.delete(W))}),M.forEach(W=>V.push(W)),V})(),S=(M,V)=>{const W=v.map(m=>m.id),F=M+V;F<0||F>=W.length||([W[M],W[F]]=[W[F],W[M]],f(W),O.setSetting("spiritual_order",W).catch(()=>{}))},T=M=>{k(M),O.setSetting("spiritual_default",M).catch(()=>{})},$=i.startsWith("deck-")?Number(i.slice(5)):null,U=$!=null?o.find(M=>M.id===$):null,R=U?null:ks.find(M=>M.id===i)||($==null?ks[0]:null),N=a?"New deck":U?U.title:(R==null?void 0:R.title)||"",C=M=>{l(M),d(!1),t&&r(!1)},E=()=>{d(!0),h({title:"",type:"text",content:"",images:[]}),t&&r(!1)},x=async M=>{const V=Array.from(M.target.files||[]),W=[];for(const F of V)try{W.push(await xy(F))}catch{}h(F=>({...F,images:[...F.images,...W]})),M.target.value=""},G=M=>h(V=>({...V,images:V.images.filter((W,F)=>F!==M)})),dt=g.title.trim()&&(g.type==="text"?g.content.trim():g.images.length>0),Z=async()=>{if(!dt)return;const M=await O.createDeck({title:g.title.trim(),type:g.type,content:g.type==="text"?g.content:"",images:g.type==="images"?g.images:[]});d(!1),await c(),l(`deck-${M.id}`)},D=async M=>{await O.deleteDeck(M),i===`deck-${M}`&&l("dss"),c()},A={...ct.sidebar,...t?ct.sidebarOverlay:{},...t&&!e?ct.sidebarHidden:{}};return n.jsxs("div",{style:ct.shell,children:[n.jsx("style",{children:wy}),t&&e&&n.jsx("div",{style:ct.backdrop,onClick:()=>r(!1)}),n.jsxs("aside",{style:A,children:[n.jsxs("div",{style:ct.sideHead,children:[n.jsx("div",{style:ct.brand,children:"Anvil · Spiritual"}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:2},children:[n.jsx("button",{onClick:()=>z(M=>!M),style:ct.iconBtn,title:"Rearrange & set default",children:j?n.jsx(zt,{size:16}):n.jsx(ke,{size:15})}),t&&n.jsx("button",{onClick:()=>r(!1),style:ct.iconBtn,children:n.jsx(kt,{size:17})})]})]}),j&&n.jsxs("div",{style:ct.editHint,children:["Arrows reorder · ",n.jsx(bi,{size:11,style:{verticalAlign:"-1px"}})," sets what opens by default"]}),n.jsxs("div",{style:ct.sideScroll,children:[v.map((M,V)=>{const W=M.id===i&&!a,F=w===M.id;return n.jsxs("div",{style:ct.sideRow,children:[n.jsxs("button",{onClick:()=>C(M.id),style:{...ct.sideItem,flex:1,...W?ct.sideItemOn:{}},children:[M.title,F&&n.jsx("span",{style:ct.defStar,title:"Opens by default",children:" ★"})]}),j&&n.jsxs("div",{style:ct.editControls,children:[n.jsx("button",{onClick:()=>T(M.id),title:"Set as default",style:{...ct.miniBtn,...F?{color:"#8268B0"}:{}},children:n.jsx(bi,{size:13})}),n.jsx("button",{onClick:()=>S(V,-1),disabled:V===0,style:{...ct.miniBtn,opacity:V===0?.3:1},children:n.jsx(ep,{size:13})}),n.jsx("button",{onClick:()=>S(V,1),disabled:V===v.length-1,style:{...ct.miniBtn,opacity:V===v.length-1?.3:1},children:n.jsx(Di,{size:13})})]})]},M.id)}),n.jsxs("button",{onClick:E,style:{...ct.newDeckBtn,...a?ct.sideItemOn:{}},children:[n.jsx(ge,{size:14})," New deck"]})]})]}),n.jsxs("main",{style:ct.main,children:[t&&n.jsxs("button",{onClick:()=>r(!0),style:ct.hamburger,children:[n.jsx(Td,{size:17}),n.jsx("span",{style:ct.hamburgerLabel,children:N})]}),a?n.jsxs("div",{style:ct.contentWrap,children:[n.jsx("div",{style:ct.formTitle,children:"Create a deck"}),n.jsx("input",{placeholder:"Deck title (e.g. Vishnu Sahasranamam)",value:g.title,onChange:M=>h({...g,title:M.target.value}),style:ct.input}),n.jsxs("div",{style:ct.typeRow,children:[n.jsxs("button",{onClick:()=>h({...g,type:"text"}),style:{...ct.typeBtn,...g.type==="text"?ct.typeOn:{}},children:[n.jsx(zd,{size:15})," Text"]}),n.jsxs("button",{onClick:()=>h({...g,type:"images"}),style:{...ct.typeBtn,...g.type==="images"?ct.typeOn:{}},children:[n.jsx(yh,{size:15})," Images"]})]}),g.type==="text"?n.jsx("textarea",{placeholder:"Paste or write the text (verses, chant, reflection)…",value:g.content,onChange:M=>h({...g,content:M.target.value}),style:ct.textarea}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:ct.imgGrid,children:[g.images.map((M,V)=>n.jsxs("div",{style:ct.imgThumbWrap,children:[n.jsx("img",{src:M,alt:"",style:ct.imgThumb}),n.jsx("button",{onClick:()=>G(V),style:ct.imgDel,children:n.jsx(kt,{size:12})})]},V)),n.jsxs("label",{style:ct.imgAdd,children:[n.jsx(Ri,{size:20}),n.jsx("span",{style:{fontSize:11},children:"Add images"}),n.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:x,style:{display:"none"}})]})]}),n.jsx("div",{style:ct.hint,children:"Images show as a swipeable carousel, in the order added."})]}),n.jsxs("div",{style:ct.formActions,children:[n.jsxs("button",{onClick:()=>d(!1),style:ct.cancelBtn,children:[n.jsx(kt,{size:14})," Cancel"]}),n.jsxs("button",{onClick:Z,disabled:!dt,style:{...ct.saveBtn,...dt?{}:ct.saveDisabled},children:[n.jsx(zt,{size:15})," Create deck"]})]})]}):U?n.jsxs("div",{style:ct.contentWrap,children:[n.jsxs("div",{style:ct.deckHead,children:[n.jsx("h2",{style:ct.deckTitle,children:U.title}),n.jsx("button",{onClick:()=>D(U.id),style:ct.deckDel,title:"Delete deck",children:n.jsx(Fh,{size:15})})]}),U.type==="images"?n.jsx(pc,{images:U.images}):n.jsx("div",{style:ct.deckText,children:U.content})]}):n.jsxs("div",{style:ct.contentWrap,children:[(R==null?void 0:R.youtube)&&n.jsx("div",{style:ct.videoFrame,children:n.jsx("iframe",{src:`https://www.youtube.com/embed/${R.youtube}`,title:R.title,style:ct.video,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},R.youtube)}),R!=null&&R.carousel?n.jsx(pc,{base:R.imageBase,count:R.carousel}):n.jsx("div",{className:"spiritual-content",dangerouslySetInnerHTML:{__html:(R==null?void 0:R.html)||""}})]})]})]})}const wy=`
.spiritual-content { font-family: 'Inter', system-ui, sans-serif; color: var(--text); line-height: 1.9; font-size: 16px; text-align: center; }
.spiritual-content h1 { font-family: 'Fraunces', Georgia, serif; font-size: 24px; color: #8268B0; margin: 8px 0 18px; letter-spacing: -0.01em; }
.spiritual-content h2 { font-family: 'Fraunces', Georgia, serif; font-size: 18px; color: #7A5EA8; margin: 20px 0 8px; }
.spiritual-content h3 { font-size: 15px; color: var(--text-3); text-transform: uppercase; letter-spacing: 0.06em; margin: 18px 0 6px; }
.spiritual-content b { color: #8268B0; }
.spiritual-content div { text-align: center; }
`,ct={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:240,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.15)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.35)",zIndex:20},sideHead:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 14px 12px"},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700},sideScroll:{flex:1,overflowY:"auto",padding:"0 8px 16px"},sideItem:{display:"block",width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text-2)",textAlign:"left",marginBottom:2},sideItemOn:{background:"rgba(130,104,176,0.12)",color:"#8268B0",fontWeight:700},sideRow:{display:"flex",alignItems:"center",gap:2},editControls:{display:"flex",alignItems:"center",gap:1,flexShrink:0},miniBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:5},defStar:{color:"#C9A227",fontWeight:700},editHint:{fontSize:10.5,color:"var(--text-3)",padding:"0 14px 8px",lineHeight:1.4},newDeckBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",padding:"9px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,color:"var(--text-2)",marginTop:6},main:{flex:1,padding:"26px 22px",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:220},contentWrap:{background:"var(--surface)",borderRadius:14,padding:"26px 28px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",maxWidth:760,margin:"0 auto"},videoFrame:{position:"relative",width:"100%",maxWidth:600,margin:"0 auto 22px",aspectRatio:"16 / 9",borderRadius:12,overflow:"hidden",background:"#000"},video:{position:"absolute",inset:0,width:"100%",height:"100%",border:"none"},carouselFrame:{background:"var(--surface-2)",borderRadius:12,padding:8,border:"1px solid var(--border)"},carouselImg:{width:"100%",borderRadius:8,display:"block"},carouselNav:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:14},carouselBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},carouselCount:{fontSize:13,fontWeight:700,color:"#8268B0",fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"none",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,color:"var(--text-2)"},deckHead:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,marginBottom:16,borderBottom:"1px solid var(--border)",paddingBottom:12},deckTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",margin:0,color:"#8268B0"},deckDel:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",cursor:"pointer",display:"grid",placeItems:"center",padding:7,borderRadius:8,flexShrink:0},deckText:{fontSize:16,lineHeight:1.9,whiteSpace:"pre-wrap",color:"var(--text)",textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},formTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},typeRow:{display:"flex",gap:8,marginTop:12},typeBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},typeOn:{background:"#8268B0",color:"#fff",borderColor:"#8268B0"},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:200,resize:"vertical",lineHeight:1.7,marginTop:12},imgGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(90px, 1fr))",gap:8,marginTop:12},imgThumbWrap:{position:"relative",aspectRatio:"1",borderRadius:8,overflow:"hidden",border:"1px solid var(--border)"},imgThumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},imgDel:{position:"absolute",top:3,right:3,border:"none",background:"rgba(0,0,0,0.6)",color:"#fff",borderRadius:"50%",width:18,height:18,cursor:"pointer",display:"grid",placeItems:"center",padding:0},imgAdd:{aspectRatio:"1",border:"1px dashed var(--border)",borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4,cursor:"pointer",color:"var(--text-3)"},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:8},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"#8268B0",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"}},sr={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},mc=Object.keys(sr),jy=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Sy=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Cy=()=>{const t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`},Iy=(t,e)=>`${Sy[e-1]} ${t}`,zy=(t,e)=>{const r=new Date(t,e,0).getDate();return Array.from({length:r},(o,s)=>`${t}-${String(e).padStart(2,"0")}-${String(s+1).padStart(2,"0")}`)},Ty=(t,e)=>{const r=new Date(t,e-1,1).getDay();return r===0?6:r-1};function Ey(){const t=Cy(),[e,r]=b.useState(new Date().getFullYear()),[o,s]=b.useState(new Date().getMonth()+1),[i,l]=b.useState([]),[a,d]=b.useState([]),[g,h]=b.useState({}),[y,f]=b.useState(null),[w,k]=b.useState(!1),[j,z]=b.useState(!1),[p,c]=b.useState({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:t}),[u,v]=b.useState(null),S=b.useCallback(async()=>{const[m,H,ot]=await Promise.all([O.getTopics(),O.getDueToday(),O.getCalendar(e,o)]);l(m),d(H),h(ot)},[e,o]);b.useEffect(()=>{S()},[S]);const T=async m=>{await O.toggleReviewDone(m),S()},$=async()=>{const m=p.intervals.split(",").map(H=>parseInt(H.trim(),10)).filter(H=>!isNaN(H));!p.topic.trim()||m.length===0||(await O.createTopic({pillar:p.pillar,topic:p.topic.trim(),intervals:m,learned_date:p.learned_date||t}),c({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:t}),z(!1),S())},{deleteItem:U,toasts:R,handleUndo:N,handleDismiss:C}=dn(O.deleteTopic,O.restoreTopic,S),E=(m,H)=>U(m,H),x=m=>v({id:m.id,topic:m.topic,pillar:m.pillar,intervals:(m.intervals||[]).join(", "),learned_date:m.learned_date}),G=async()=>{if(!u)return;const m=u.intervals.split(",").map(H=>parseInt(H.trim(),10)).filter(H=>!isNaN(H)&&H>=0);!u.topic.trim()||m.length===0||(await O.updateTopic(u.id,{topic:u.topic.trim(),pillar:u.pillar,learned_date:u.learned_date,intervals:m}),v(null),S())},dt=()=>{o===1?(r(m=>m-1),s(12)):s(m=>m-1),f(null)},Z=()=>{o===12?(r(m=>m+1),s(1)):s(m=>m+1),f(null)},D=i.filter(m=>!m.cemented),A=i.filter(m=>m.cemented),M=zy(e,o),V=Ty(e,o),W=b.useMemo(()=>{const m={};return i.forEach(H=>H.reviews.forEach(ot=>{ot.done||(m[ot.due_date]=m[ot.due_date]||[]).push({topic:H.topic,pillar:H.pillar,stage:ot.stage})})),m},[i]),F=y?i.flatMap(m=>m.reviews.filter(H=>H.due_date===y).map(H=>({...H,topic:m.topic,pillar:m.pillar,total:m.reviews.length}))):[];return n.jsxs("div",{style:rt.page,children:[n.jsxs("div",{style:rt.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:rt.eyebrow,children:"Anvil · Revision"}),n.jsx("h1",{style:rt.h1,children:"Spaced Repetition"})]}),n.jsxs("button",{onClick:()=>z(!0),style:rt.addBtn,children:[n.jsx(ge,{size:15})," Add topic"]})]}),j&&n.jsxs("div",{style:rt.addBox,children:[n.jsx("input",{autoFocus:!0,placeholder:"What did you learn?",value:p.topic,onChange:m=>c(H=>({...H,topic:m.target.value})),onKeyDown:m=>m.key==="Enter"&&$(),style:rt.input}),n.jsxs("div",{style:rt.addRow,children:[n.jsx("select",{value:p.pillar,onChange:m=>c(H=>({...H,pillar:m.target.value})),style:rt.select,children:mc.map(m=>n.jsx("option",{children:m},m))}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[n.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),n.jsx("input",{type:"date",value:p.learned_date,onChange:m=>c(H=>({...H,learned_date:m.target.value})),style:{...rt.select,fontSize:13}})]}),n.jsx("div",{style:{flex:1,minWidth:0},children:n.jsx("input",{value:p.intervals,onChange:m=>c(H=>({...H,intervals:m.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:rt.input})})]}),n.jsxs("div",{style:rt.addRow,children:[n.jsxs("button",{onClick:$,style:rt.saveBtn,children:[n.jsx(zt,{size:14})," Save"]}),n.jsxs("button",{onClick:()=>z(!1),style:rt.cancelBtn,children:[n.jsx(kt,{size:14})," Cancel"]})]})]}),a.length>0&&n.jsxs("div",{style:rt.section,children:[n.jsxs("div",{style:rt.sectionTitle,children:[n.jsx(dp,{size:15,color:"#C2536B"}),"Due Today",n.jsx("span",{style:rt.badge,children:a.length})]}),a.map(m=>{var ot,q;const H=((ot=sr[m.pillar])==null?void 0:ot.dot)||"#9A968C";return n.jsxs("div",{style:{...rt.reviewCard,borderLeft:`3px solid ${H}`,...m.is_missed?{opacity:.85}:{}},children:[n.jsx("button",{onClick:()=>T(m.review_id),style:{...rt.checkbox,...m.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:m.done&&n.jsx(zt,{size:12,color:"#fff",strokeWidth:3})}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:rt.reviewTopic,children:m.topic}),n.jsxs("div",{style:rt.reviewMeta,children:[n.jsxs("span",{style:{...rt.stageTag,background:((q=sr[m.pillar])==null?void 0:q.soft)||"rgba(0,0,0,0.05)",color:H},children:["Review ",m.stage,"/",m.total_stages]}),m.is_missed&&n.jsxs("span",{style:rt.missedTag,children:["missed · ",m.due_date]})]})]})]},m.review_id)})]}),n.jsxs("div",{style:rt.section,children:[n.jsxs("div",{style:rt.sectionTitle,children:["Active Topics ",n.jsx("span",{style:rt.badge,children:D.length})]}),D.length===0&&n.jsx("div",{style:rt.empty,children:"No active topics. Add something you learned today."}),D.map(m=>{var ht,It;const H=((ht=sr[m.pillar])==null?void 0:ht.dot)||"#9A968C",ot=((It=sr[m.pillar])==null?void 0:It.soft)||"rgba(0,0,0,0.05)",q=m.reviews.filter(yt=>yt.done).length;return(u==null?void 0:u.id)===m.id?n.jsxs("div",{style:rt.addBox,children:[n.jsx("input",{autoFocus:!0,value:u.topic,onChange:yt=>v(jt=>({...jt,topic:yt.target.value})),onKeyDown:yt=>yt.key==="Enter"&&G(),placeholder:"Topic",style:rt.input}),n.jsxs("div",{style:rt.addRow,children:[n.jsx("select",{value:u.pillar,onChange:yt=>v(jt=>({...jt,pillar:yt.target.value})),style:rt.select,children:mc.map(yt=>n.jsx("option",{children:yt},yt))}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[n.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),n.jsx("input",{type:"date",value:u.learned_date,onChange:yt=>v(jt=>({...jt,learned_date:yt.target.value})),style:{...rt.select,fontSize:13}})]}),n.jsx("div",{style:{flex:1,minWidth:0},children:n.jsx("input",{value:u.intervals,onChange:yt=>v(jt=>({...jt,intervals:yt.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:rt.input})})]}),n.jsx("div",{style:rt.editHint,children:"Changing the date or intervals reschedules the reviews (completed steps are kept where they still apply)."}),n.jsxs("div",{style:rt.addRow,children:[n.jsxs("button",{onClick:G,style:rt.saveBtn,children:[n.jsx(zt,{size:14})," Save plan"]}),n.jsxs("button",{onClick:()=>v(null),style:rt.cancelBtn,children:[n.jsx(kt,{size:14})," Cancel"]})]})]},m.id):n.jsxs("div",{style:rt.topicCard,children:[n.jsxs("div",{style:rt.topicHead,children:[n.jsx("span",{style:{...rt.dot,background:H}}),n.jsx("span",{style:rt.topicName,children:m.topic}),n.jsx("span",{style:rt.topicPillar,children:m.pillar}),n.jsxs("span",{style:rt.topicProgress,children:[q,"/",m.reviews.length," done"]}),n.jsx("button",{onClick:()=>x(m),style:rt.ghostBtn,title:"Edit plan",children:n.jsx(ke,{size:12})}),n.jsx("button",{onClick:()=>E(m.id,m.topic),style:rt.ghostBtn,title:"Delete",children:n.jsx(kt,{size:13})})]}),n.jsxs("div",{style:rt.reviewDots,children:[m.reviews.map(yt=>{yt.due_date<t;const jt=yt.due_date===t;return n.jsx("button",{onClick:()=>T(yt.id),title:`Review ${yt.stage} · ${yt.due_date}${yt.done?" · Done":""}`,style:{...rt.reviewDot,background:yt.done?H:jt?ot:"var(--hover)",border:`2px solid ${yt.done||jt?H:"var(--border)"}`,color:yt.done?"#fff":H},children:yt.stage},yt.id)}),n.jsxs("span",{style:rt.learnedDate,children:["Learned ",m.learned_date]})]})]},m.id)})]}),A.length>0&&n.jsxs("div",{style:rt.section,children:[n.jsxs("button",{onClick:()=>k(m=>!m),style:rt.cementedToggle,children:[w?n.jsx(Di,{size:15}):n.jsx(an,{size:15}),n.jsx(nn,{size:14,color:"#C9A227"}),"Cemented",n.jsx("span",{style:{...rt.badge,background:"rgba(201,162,39,0.12)",color:"#8A6E1A"},children:A.length})]}),w&&A.map(m=>{var ot;const H=((ot=sr[m.pillar])==null?void 0:ot.dot)||"#9A968C";return n.jsx("div",{style:{...rt.topicCard,opacity:.75},children:n.jsxs("div",{style:rt.topicHead,children:[n.jsx("span",{style:{...rt.dot,background:H}}),n.jsx("span",{style:rt.topicName,children:m.topic}),n.jsx("span",{style:rt.topicPillar,children:m.pillar}),n.jsx(nn,{size:13,color:"#C9A227",style:{marginLeft:"auto"}})]})},m.id)})]}),n.jsxs("div",{style:rt.calCard,children:[n.jsxs("div",{style:rt.calHead,children:[n.jsx("button",{onClick:dt,style:rt.calNav,children:"‹"}),n.jsxs("div",{style:rt.calTitle,children:[Iy(e,o)," · Review Calendar"]}),n.jsx("button",{onClick:Z,style:rt.calNav,children:"›"})]}),n.jsx("div",{style:rt.calDow,children:jy.map(m=>n.jsx("div",{style:rt.calDowCell,children:m},m))}),n.jsxs("div",{style:rt.calGrid,children:[Array.from({length:V}).map((m,H)=>n.jsx("div",{},`p${H}`)),M.map((m,H)=>{const ot=W[m]||[],q=m===t,ht=m===y,It=m<t,yt=ht?"#fff":q?"var(--text)":It?"var(--text-2)":"var(--text-3)";return n.jsxs("button",{onClick:()=>f(ht?null:m),style:{...rt.calDay,background:ht?"var(--accent-strong)":q?"var(--hover)":"var(--surface)",borderColor:q||ht?"var(--accent-strong)":"var(--border)"},children:[n.jsx("span",{style:{...rt.calDayNum,color:yt,fontWeight:q||ht?700:600},children:H+1}),ot.slice(0,2).map((jt,K)=>{var mt;return n.jsxs("span",{title:jt.topic,style:{...rt.calItem,color:ht?"#fff":((mt=sr[jt.pillar])==null?void 0:mt.dot)||"var(--text-2)"},children:[K+1,". ",jt.topic]},K)}),ot.length>2&&n.jsxs("span",{style:{...rt.calMore,color:ht?"#fff":"var(--text-3)"},children:["+",ot.length-2," more"]})]},m)})]}),y&&n.jsxs("div",{style:rt.dayDetail,children:[n.jsxs("div",{style:rt.dayDetailTitle,children:["Reviews for ",y]}),F.length===0?n.jsx("div",{style:rt.empty,children:"No reviews scheduled for this day."}):F.map((m,H)=>{var q,ht;const ot=((q=sr[m.pillar])==null?void 0:q.dot)||"#9A968C";return n.jsxs("div",{style:{...rt.reviewCard,borderLeft:`3px solid ${ot}`},children:[n.jsx("button",{onClick:()=>T(m.id),style:{...rt.checkbox,...m.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:m.done&&n.jsx(zt,{size:12,color:"#fff",strokeWidth:3})}),n.jsxs("div",{children:[n.jsxs("div",{style:rt.reviewTopic,children:[H+1,". ",m.topic]}),n.jsxs("span",{style:{...rt.stageTag,background:((ht=sr[m.pillar])==null?void 0:ht.soft)||"rgba(0,0,0,0.05)",color:ot},children:["Review ",m.stage,"/",m.total]})]})]},m.id)})]})]}),n.jsx(gn,{toasts:R,onUndo:N,onDismiss:C})]})}const rt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},addBox:{background:"var(--surface)",borderRadius:12,padding:16,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},addRow:{display:"flex",gap:8,alignItems:"center"},editHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",minWidth:0},select:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 10px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},section:{marginBottom:20},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},reviewCard:{display:"flex",alignItems:"center",gap:12,background:"var(--surface)",borderRadius:10,padding:"12px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},checkbox:{width:22,height:22,borderRadius:6,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,padding:0},reviewTopic:{fontSize:13.5,fontWeight:600,marginBottom:4},reviewMeta:{display:"flex",alignItems:"center",gap:8},stageTag:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10},missedTag:{fontSize:11,color:"#C2536B",fontWeight:600},topicCard:{background:"var(--surface)",borderRadius:12,padding:"13px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},topicHead:{display:"flex",alignItems:"center",gap:8,marginBottom:10},dot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},topicName:{fontSize:14,fontWeight:600,flex:1},topicPillar:{fontSize:11,color:"var(--text-3)",fontWeight:500},topicProgress:{fontSize:11,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:10},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},reviewDots:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},reviewDot:{width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",fontSize:11,fontWeight:700,padding:0},learnedDate:{fontSize:11,color:"var(--text-3)",marginLeft:"auto"},cementedToggle:{display:"flex",alignItems:"center",gap:8,border:"none",background:"none",cursor:"pointer",fontSize:13,fontWeight:700,color:"var(--text-2)",padding:"4px 0",fontFamily:"inherit",marginBottom:8},empty:{fontSize:13,color:"var(--text-3)",padding:"16px 0",textAlign:"center"},calCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{border:"none",background:"none",fontSize:20,cursor:"pointer",color:"var(--text-2)",padding:"0 6px",lineHeight:1},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4},calDay:{minHeight:62,border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,cursor:"pointer",fontFamily:"inherit",display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"flex-start",gap:1,position:"relative",padding:"3px 4px",overflow:"hidden",textAlign:"left"},calDayNum:{fontSize:11,lineHeight:1.1,marginBottom:1},calItem:{fontSize:8.5,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",lineHeight:1.3,textAlign:"left"},calMore:{fontSize:8,fontWeight:700,opacity:.85,lineHeight:1.2},dayDetail:{marginTop:16,paddingTop:16,borderTop:"1px solid var(--border)"},dayDetailTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10}},ws=[{id:1,title:"Regular Habits",cards:[{id:1,text:"1. I always do everything I need to do, when I need to do it. "},{id:2,text:"2. I never argue or let my emotions work against me. "},{id:3,text:"3. I have a good memory. I easily and automatically remember any name or anything that is important to me. "},{id:4,text:"4. I eat only what I should. "},{id:5,text:"5. I am a good listener. I hear everything that is said. I am attentive, interested, and aware of everything that is going on around me. "},{id:6,text:"6. I have the courage to state my opinions. I take responsibility for myself and everything I say and do."},{id:7,text:"7. I never spend more than I earn. I am financially responsible, both for my present and for my future."},{id:8,text:"8. I set goals and I follow them. I set my sights, take the appropriate action, and achieve my goals."},{id:9,text:"9. I spend time with my family and my loved ones. I enjoy sharing their lives with mine and my life with theirs."}]},{id:2,title:"Motivational",cards:[{id:1,text:"1. I can do anything I believe I can do. I’ve got it and every day I get more of it. I have talent, skills, and ability"},{id:2,text:"2. I set goals and I reach them. I know what I want out of life. I go after it and I get it. "},{id:3,text:"3. People like me, and I feel good about myself. I have a sense of pride in whoa am and I believe in myself. Nothing seems to stop me. I have a lot of determination. "},{id:4,text:"4. I turn problems into advantages. I find possibilities in things that other people never give a chance."},{id:5,text:"5. I have a lot of energy––I am very alive. I enjoy life and I can tell it and so can others"},{id:6,text:"6. I keep myself up, looking ahead, and liking it. I know that I can accomplish anything I choose, and I refuse to let anything negative hold me back or stand in my way. I am not afraid of anything or anyone. I have strength, power, conviction, and confidence. "},{id:7,text:"7. I like challenges and I meet them head on, face to face––today especially. I am on top of the world and I’m going for it. "},{id:8,text:"8. I have a clear picture in my mind of what I want. I can see it in front of me. "},{id:9,text:"9. I know what I want and I know how to get it. I know that it’s all up to me and I know I can do it. Roadblocks don’t bother me. They just mean that I am alive and running, and I’m not going to stand still for anything. "},{id:10,text:"10. I trust myself I’ve got what it takes––plenty of it––and I know how to use it. "},{id:11,text:"11. Today, more than ever. Today I am unstoppable. I’ve got myself together and I’m getting more together every day. And today––look out world, here I come. "},{id:12,text:"12. Limitations? I don’t even recognize them as limitations. There is no challenge I can’t conquer; there is no wall I can’t climb over. "},{id:13,text:"13. There is no problem I can’t defeat or turn around and make it work for me. I stand tall. I am honest and sincere. I like to deal with people and they like me. "},{id:14,text:"14. I think well; I think clearly. I am organized; I am in control of myself, and everything about me. I call my shots and no one has to call them for me. I never blame anyone else for the circumstances of my life. "},{id:15,text:"15. I accept my failings and move past them as easily as I accept the rewards for my victories. I never demand perfection of myself, but I expect the very best of what I have to give––and that’s what I get. I never give myself excuses. "},{id:16,text:"16. I get things done on time and in the right way. Today I have the inner strength to do more than ever. I am an exceptional human being. "},{id:17,text:"17. My goals and my incredible belief in myself turn my goals into reality. I have the power to live my dreams."},{id:18,text:"18.  I believe in them like I believe in myself. And that belief is so strong that there is nothing that diminishes my undefeatable spirit. "}]},{id:3,title:"Organized planning",cards:[{id:1,text:"1. I am organized and in control of my life. I am in control of myself, my thoughts, my time, my actions, and my future. "},{id:2,text:"2. I know what to do and when to do it, and I do everything I need to do, when I need to do it. "},{id:3,text:"3. I program my mind to make the maximum use of my time. I am in control of my time and how to use it. I like being organized, efficient, and on top of things."},{id:4,text:"4. Controlling my time keeps me that way. "},{id:5,text:"5. I never waste time––I always “plan” time. And because I plan my time, I always have time to do the things I choose to do. "},{id:6,text:"6. Each day I become more organized and in control of all areas of my life––at home, at work, in my mind and in my thoughts, in everything that I do. "},{id:7,text:"7. I am very well organized. Each night I make a list of things I need to do the next day. I set my priorities and I follow them. "},{id:8,text:"8. I am always on time. I am always right where I need to be, exactly when I need to be there. "},{id:9,text:"9. Being on time is easy for me and the more I control my time and the more organized I become, the easier it is. "},{id:10,text:"10. I am in control of my feelings, my emotions, my attitudes, and my needs. I control them; they do not control me. "},{id:11,text:"11. I have the winning vote in the outcome of my own actions. And I choose to live my life by choice, not chance. Therefore, I take the time to take control."},{id:12,text:"12. I have an organized and orderly mind. Because I think in an organized way, I conduct my life in an organized manner. "},{id:13,text:"13. I think in the most positive and productive way at all times and in all things. The way I think is the way I live––and I think “right.” "},{id:14,text:"14. I am the director of my destiny. I know where I am going and I know why I am going there. My earthly life is in my hands and in my control. "},{id:15,text:"15. I control my goals and the achievement of my goals. I organize my goals by writing each of them down, along with the steps I need to reach them. One of the reasons for my success is that my goals are clearly defined and organized."},{id:16,text:"16. I am in complete control of what I think and how I think. Therefore, I choose to think only those thoughts which help me and which are of genuine benefit to me."}]},{id:4,title:"Solving Problems",cards:[{id:1,text:"1. I’m good at solving problems. I like challenges and I meet them head on. "},{id:2,text:"2. Problems are my teachers. They help me to learn and grow. Without them, I would be going nowhere. With them, I am moving forward in the direction of my own goals. "},{id:3,text:"3. There is no problem which I cannot conquer. I am strong in mind, body, and spirit. My will, my strength, and my determination are always greater than any problem I face."},{id:4,text:"4. When I meet a new problem, I do not see the problem as my enemy. I know that finding the solution to the problem will move me forward in my own personal growth."},{id:5,text:"5. Because I know that problems are a key ingredient in my spiritual and mental education and preparation, I recognize that all problems are important to me. "},{id:6,text:"6. I do not fear problems, I solve them. I do not ignore problems, I confront them. I do not avoid problems, I conquer them. "},{id:7,text:"7. I know that every problem holds within itself the keys to its own solution. Therefore, the better I understand the problem, the clearer I am able to see its solution. "},{id:8,text:"8. Having problems is not a problem for me. I am confident, self-assured, positive, and determined. I always know that I am going to overcome any problem I encounter––and I always do. "},{id:9,text:"9. I am good at breaking large obstacles down into smaller pieces that are easier to handle. And I never make any problem appear to be larger than it actually is. "},{id:10,text:"10. I never worry. I turn “worry time” into positive, constructive, “solution time.” I keep my mind alert and open to all solutions—and solutions come quickly and easily to me. "},{id:11,text:"11. I have learned to recognize that many problems carry with them benefits and potential opportunities which would not have presented themselves had the problem not occurred in the first place. "},{id:12,text:"12. I do not seek to live a life which is free from all problems. Instead, I choose to live a life of finding solutions and enjoying the benefits which those solutions create."},{id:13,text:"13. Challenge, conquer, solution, and win are words which I live by daily. Challenges are opportunities. Conquering them is the inevitable outcome. "},{id:14,text:"14. “Solutions” are the stepping stones to my success, and “Winning” is my way of life."}]},{id:5,title:"Self Esteem",cards:[{id:1,text:"1. I really am very special. I like who I am and I feel good about myself. "},{id:2,text:"2. Although I always work to improve myself and I get better every day, I like who I am today. And tomorrow, when I’m even better, I’ll like myself then, too. "},{id:3,text:"3. It’s true that there really is no one else like me in the entire world. There never was another me before, and there will never be another me again. "},{id:4,text:"4. I am unique––from the top of my head to the bottom of my feet. In some ways I may look and act and sound like some others––but I am not them. I am me."},{id:5,text:"5. I wanted to be somebody––and now I know I am I would rather be me than anyone else in the world. "},{id:6,text:"6. I like how I feel and I like how I think and I like how I do things. I approve of me and I approve of who I am."},{id:7,text:"7. I have many beautiful qualities about me. I have talents and skills and abilities. I even have talents that I don’t even know about yet. And I am discovering new talents inside myself all the time. "},{id:8,text:"8. I am positive. I am confident. I radiate good things. If you look closely, you can even see a glow around me."},{id:9,text:"9. I am full of life. I like life and I’m glad to be alive. I am a very special person, living at a very special time. "},{id:10,text:"10. I am intelligent. My mind is quick and alert and clever and fun. I think good thoughts, and my mind makes things work right for me. "},{id:11,text:"11. I have a lot of energy and enthusiasm and vitality. I am exciting and I really enjoy being me. "},{id:12,text:"12. I like to be around other people and other people like to be around me. People like to hear what I have to say and know what I have to think. "},{id:13,text:"13. I smile a lot. I am happy on the inside and I am happy on the outside. "},{id:14,text:"14. I am interested in many things. I appreciate all the blessings I have, and the things that I learn, and all the things I will learn today and tomorrow and forever––just as long as I am. "},{id:15,text:"15. I am warm, sincere, honest, and genuine. I am all of these things and more. And all of these things are me. I like who I am, and I’m glad to be me."}]},{id:6,title:"Self-Responsibility",cards:[{id:1,text:"1. I take full responsibility for everything about me––even the thoughts that I think. I am in control of the vast resources of my own mind."},{id:2,text:"2. I alone am responsible for what I do and what I tell myself about me. No one can share this responsibility with me. "},{id:3,text:"3. I also allow others to accept their responsibilities far themselves and I do not try to accept their responsibilities for them. "},{id:4,text:"4. I enjoy being responsible. It puts me in charge of being me––and that’s a challenge I enjoy. "},{id:5,text:"5. I allow no one else, at any time, to assume control or responsibility over my life or over anything that I do. My responsibility to others is an extension of my own responsibility to myself. "},{id:6,text:"6. I choose to leave nothing about me up to chance. When it comes to me––and anything in my life––I choose to CHOOSE. "},{id:7,text:"7. My choices are mine alone to make for myself. I do not, at any time, allow anyone else to make my choices for me. And I accept full responsibility for every choice and decision I make. "},{id:8,text:"8. I always meet all of the obligations which I accept. And I accept no obligations which I will not meet. "},{id:9,text:"9. I am trustworthy. I can be counted on. I have accepted winning responsibility for myself––and I always live up to the responsibilities I accept. "},{id:10,text:"10. There is no they on whom I lay the blame, or with whom I share my own personal responsibilities. I have learned the great secret of mastering my own destiny. I have learned that “they” is “me.” "},{id:11,text:"11. I have no need to make excuses and no one needs to carry my responsibility for me. I gladly carry my own weight––and I carry it well. "},{id:12,text:"12. Each day I acknowledge and accept the responsibility––not only for my own actions––but also for my emotions, my thoughts, and my attitude. "},{id:13,text:"13. I accept the responsibility for living my life in a way which creates my strengths, my happiness, my positive, healthy beliefs, and for my past, my present, and my future."}]},{id:7,title:"Freedom from worry",cards:[{id:1,text:"1. I never worry. Instead of worrying, I find solutions and I act on them. "},{id:2,text:"2. My mind is constantly in tune with the positive. It is bright, cheerful, enthusiastic, and full of good, positive thoughts and ideas. "},{id:3,text:"3. I am able to relax easily and comfortably in my body and in my mind. I am calm, confident, and self-assured. "},{id:4,text:"4. My mind is orderly and well-organized. I consciously choose what I think and I always choose those thoughts which are the most positive and beneficial for me. "},{id:5,text:"5. All of my thoughts create healthiness within me. My mind dwells only on those thoughts which create more harmony, balance, and well-being within me and in the world around me. "},{id:6,text:"6. I automatically, and always, think in a decisive and determined way. "},{id:7,text:"7. I am full of resolution and the absolute assurance of the best possible outcome in everything that I do. "},{id:8,text:"8. I choose to look at the world around me in the bright, healthy light of optimism and self-assurance. "},{id:9,text:"9. I do only those things which are best for me. I create the best within myself, I attract the best in others, and I find the best in the world around me. "},{id:10,text:"10. I willingly, and without fail, take care of the duties and obligations which I have accepted for myself."},{id:11,text:"11. I commit only to those responsibilities which I know I can fulfill. "},{id:12,text:"12. I focus the attention of my mind only on those things that I can do something about. If I cannot affect it or direct it––I accept it. "},{id:13,text:"13. I keep my mind too busy thinking good, healthy, positive, constructive, and productive thoughts to ever have any time for worry. "},{id:14,text:"14. I control the thoughts I choose. No thought, at any time, can dwell in my mind without my approval or permission. I never worry."}]},{id:8,title:"Eating Habits",cards:[{id:1,text:"1. I am in control of myself in every way––at all times and in all situations. "},{id:2,text:"2. Each time I sit down to eat I reaffirm my determination to achieve my goal. By eating right, and never giving in, I am reaching the weight I want. "},{id:3,text:"3. Whether eating in or eating out, I really enjoy eating less. "},{id:4,text:"4. I never feel the need to finish the food in front of me. I eat only what I should––and never one bite more. "},{id:5,text:"5. One way to weight-loss that’s easy and works, is less food on my plate, and less on my fork. "},{id:6,text:'6. By ordering less when I eat out, and by serving myself smaller portions at home, I keep myself aware of the importance of staying with my goal––each and every day. “Less on my plate means less on my waist."'},{id:7,text:"7. When I sit down to eat, at no time do I allow anyone else to influence, tempt, or discourage me in any negative way."},{id:8,text:"8. What I eat, and the goals I reach, are up to me. And I give no one the right to hinder or control my success."},{id:9,text:"9. Although others may benefit from my success, I. am achieving my weight-loss goals for my own personal reasons––for myself, my life, my future, and my own personal well-being."},{id:10,text:"10. I am never, at any time, tempted to take one bite more than I should. I am strong, I am capable of reaching my goal, and I am doing it."},{id:11,text:"11. Being in situations which put a lot of food in front of me is not a problem to me now. I simply say “No” to the food and “Yes” to my success."},{id:12,text:"12. I enjoy sitting down to eat. Each time I do I conquer my past, and I create a trimmer, happier, more self-confident future in front of me. "},{id:13,text:"13. When I sit down to eat, I do not need someone else to remind me of my goal, or to keep me from eating something I should not. I take full responsibility for myself, and no one else has to do it for me. "},{id:14,text:"14. Controlling my weight, and my appetite, is easy for me now. I enjoy smaller portions, smaller bites, and a slower, healthier, more relaxed way of eating. "},{id:15,text:"15. I have set my goal and I am staying with it. I have turned mealtime into “achievement time.”"}]}],fc=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#3A7CA5","#4C9A6B"],fl=t=>fc[t%fc.length],By=t=>t+"1A",hp="anvil_affirmation_favs",Dy=()=>{try{return new Set(JSON.parse(localStorage.getItem(hp)||"[]"))}catch{return new Set}};function Ry(){const[t,e]=b.useState(0),[r,o]=b.useState(0),[s,i]=b.useState(Dy);b.useEffect(()=>{localStorage.setItem(hp,JSON.stringify([...s]))},[s]);const l=(z,p)=>`${z}#${p.id}`,a=t==="FAV"?ws.flatMap((z,p)=>z.cards.filter(c=>s.has(l(z.title,c))).map(c=>({...c,color:fl(p),title:z.title}))):ws[t].cards.map(z=>({...z,color:fl(t),title:ws[t].title})),d=a.length,g=Math.min(r,Math.max(0,d-1)),h=a[g],y=z=>{e(z),o(0)},f=b.useCallback(()=>o(z=>Math.max(0,z-1)),[]),w=b.useCallback(()=>o(z=>Math.min(d-1,z+1)),[d]);b.useEffect(()=>{const z=p=>{p.key==="ArrowLeft"&&f(),p.key==="ArrowRight"&&w()};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[f,w]);const k=z=>i(p=>{const c=new Set(p);return c.has(z)?c.delete(z):c.add(z),c}),j=h?h.color:"#8268B0";return n.jsxs("div",{style:Ft.page,children:[n.jsxs("div",{style:Ft.head,children:[n.jsx("div",{style:Ft.eyebrow,children:"Anvil · Affirmations"}),n.jsx("h1",{style:Ft.h1,children:"Affirmations"}),n.jsx("div",{style:Ft.subhead,children:"One at a time — read it, mean it."})]}),n.jsxs("div",{style:Ft.filterBar,children:[ws.map((z,p)=>{const c=t===p,u=fl(p);return n.jsxs("button",{onClick:()=>y(p),style:{...Ft.chip,...c?{background:u,color:"#fff",borderColor:u}:{}},children:[n.jsx("span",{style:{...Ft.catDot,background:c?"#fff":u}})," ",z.title," ",n.jsx("span",{style:Ft.chipCount,children:z.cards.length})]},z.title)}),n.jsxs("button",{onClick:()=>y("FAV"),style:{...Ft.chip,...t==="FAV"?{background:"#C9A227",color:"#fff",borderColor:"#C9A227"}:{}},children:[n.jsx(Ns,{size:12,fill:t==="FAV"?"#fff":"none"})," Favorites ",n.jsx("span",{style:Ft.chipCount,children:s.size})]})]}),d===0?n.jsxs("div",{style:Ft.empty,children:[n.jsx(Ns,{size:22,color:"#C3BFB5"}),n.jsx("div",{children:"No favorites yet — tap the star on a card to save it here."})]}):n.jsxs("div",{style:Ft.viewer,children:[n.jsxs("div",{style:{...Ft.card,borderTop:`4px solid ${j}`},children:[n.jsx("div",{style:{...Ft.cardCat,color:j,background:By(j)},children:h.title}),n.jsx("button",{onClick:()=>k(l(h.title,h)),style:{...Ft.favBtn,color:s.has(l(h.title,h))?"#C9A227":"#C3BFB5"},title:"Favorite",children:n.jsx(Ns,{size:20,fill:s.has(l(h.title,h))?"#C9A227":"none"})}),n.jsx(ap,{size:30,color:j,style:{opacity:.25}}),n.jsx("p",{style:Ft.cardText,children:h.text.trim()})]}),n.jsxs("div",{style:Ft.navRow,children:[n.jsxs("button",{onClick:f,disabled:g===0,style:{...Ft.navBtn,...g===0?Ft.navBtnDisabled:{}},children:[n.jsx(Xn,{size:18})," Back"]}),n.jsxs("span",{style:{...Ft.counter,color:j},children:[g+1," ",n.jsxs("span",{style:Ft.counterTotal,children:["/ ",d]})]}),n.jsxs("button",{onClick:w,disabled:g===d-1,style:{...Ft.navBtn,...g===d-1?Ft.navBtnDisabled:{}},children:["Next ",n.jsx(an,{size:18})]})]}),n.jsx("div",{style:Ft.dots,children:a.map((z,p)=>n.jsx("button",{onClick:()=>o(p),style:{...Ft.dot,...p===g?{background:j,transform:"scale(1.5)"}:{}},title:`${p+1}`},p))})]})]})}const Ft={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:22},chip:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipCount:{fontSize:11,fontWeight:700,opacity:.7},catDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},empty:{display:"flex",flexDirection:"column",alignItems:"center",gap:10,fontSize:13.5,color:"var(--text-3)",padding:"56px 12px",textAlign:"center",background:"var(--surface)",borderRadius:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},viewer:{display:"flex",flexDirection:"column",alignItems:"center"},card:{position:"relative",background:"var(--surface)",borderRadius:16,padding:"40px 32px 44px",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",width:"100%",minHeight:240,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",boxSizing:"border-box"},cardCat:{position:"absolute",top:16,left:16,fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:12,textTransform:"uppercase",letterSpacing:"0.04em"},favBtn:{position:"absolute",top:14,right:14,border:"none",background:"none",cursor:"pointer",padding:4,display:"grid",placeItems:"center"},cardText:{fontSize:21,lineHeight:1.55,margin:"14px 0 0",fontWeight:500,color:"var(--text)",fontFamily:"'Fraunces',Georgia,serif",maxWidth:560},navRow:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",maxWidth:420,marginTop:22},navBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},counter:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},counterTotal:{fontSize:13,fontWeight:600,color:"var(--text-3)"},dots:{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center",marginTop:20,maxWidth:480},dot:{width:7,height:7,borderRadius:"50%",border:"none",background:"var(--border)",cursor:"pointer",padding:0,transition:"transform 0.12s"}},je={financial:{label:"Financial",leaf:"#C9A227",shape:"round"},academic:{label:"Academic",leaf:"#3A7CA5",shape:"pine"},relationship:{label:"Relationship",leaf:"#C2536B",shape:"round"},spiritual:{label:"Spiritual",leaf:"#8268B0",shape:"tall"},health:{label:"Health",leaf:"#4C9A6B",shape:"round"}},Un="health";function Rd({species:t=Un,progress:e=1,withered:r=!1,size:o=200}){const s=Math.max(0,Math.min(1,e)),i=je[t]||je[Un],l=r?"#8A7B63":"#7A5A3C",a=r?"#A99C84":i.leaf,d=r?"#8F8268":a,g=14+s*46,h=112-g,y=s>.14,f=y?8+s*30:0;return n.jsxs("svg",{viewBox:"0 0 120 120",width:o,height:o,style:{display:"block"},children:[n.jsx("ellipse",{cx:"60",cy:"114",rx:20+s*14,ry:"5",fill:"rgba(38,36,31,0.08)"}),!y&&n.jsxs("g",{transform:`translate(60 ${112-s*40})`,children:[n.jsx("path",{d:"M0 8 C0 8 0 -2 0 -6",stroke:"#4C9A6B",strokeWidth:"2.5",fill:"none"}),n.jsx("ellipse",{cx:"-5",cy:"-4",rx:"6",ry:"3.5",fill:"#4C9A6B",transform:"rotate(-30 -5 -4)"}),n.jsx("ellipse",{cx:"5",cy:"-4",rx:"6",ry:"3.5",fill:"#5BB07E",transform:"rotate(30 5 -4)"})]}),y&&n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:60-(2+s*2.5),y:h,width:(2+s*2.5)*2,height:g,rx:"2",fill:l}),i.shape==="pine"?n.jsxs(n.Fragment,{children:[n.jsx("polygon",{points:`60,${h-f*2.2} ${60-f},${h+4} ${60+f},${h+4}`,fill:a}),n.jsx("polygon",{points:`60,${h-f*3} ${60-f*.8},${h-f*.7} ${60+f*.8},${h-f*.7}`,fill:d})]}):i.shape==="tall"?n.jsxs(n.Fragment,{children:[n.jsx("ellipse",{cx:"60",cy:h-f*.3,rx:f*.78,ry:f*1.55,fill:a}),n.jsx("ellipse",{cx:"60",cy:h-f*.9,rx:f*.5,ry:f*1,fill:d,opacity:"0.9"})]}):n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"60",cy:h,r:f,fill:a}),n.jsx("circle",{cx:60-f*.7,cy:h+f*.3,r:f*.78,fill:a}),n.jsx("circle",{cx:60+f*.7,cy:h+f*.3,r:f*.78,fill:d}),n.jsx("circle",{cx:"60",cy:h-f*.5,r:f*.8,fill:d,opacity:"0.92"})]})]})]})}function Fy({species:t}){return n.jsx(Rd,{species:t,progress:1,size:56})}const Ay=[{id:"day",label:"Day"},{id:"week",label:"Week"},{id:"month",label:"Month"},{id:"year",label:"Year"}],ar=t=>t>=60?`${Math.floor(t/60)}h ${t%60}m`:`${t}m`,My=t=>{const e=t<12?"am":"pm",r=t%12===0?12:t%12;return`${String(r).padStart(2,"0")} ${e}`};function Wy(t){const e=t<=60?10:t<=120?20:t<=300?60:120,r=Math.max(60,Math.ceil((t||1)/e)*e),o=[];for(let s=0;s<=r;s+=e)o.push(s);return{max:r,ticks:o}}const yp=t=>{const e=new Date(t);return e.setHours(0,0,0,0),e},_y=t=>{const e=yp(t),r=(e.getDay()+6)%7;return e.setDate(e.getDate()-r),e},Ly=t=>new Date(t.getFullYear(),t.getMonth(),1),Py=t=>new Date(t.getFullYear(),0,1);function $y(t,e){if(t==="day"){const s=yp(e);return{start:s,end:new Date(+s+864e5),prev:new Date(+s-864e5),prev2:new Date(+s-2*864e5)}}if(t==="week"){const s=_y(e);return{start:s,end:new Date(+s+7*864e5),prev:new Date(+s-7*864e5),prev2:new Date(+s-14*864e5)}}if(t==="month"){const s=Ly(e),i=e.getFullYear(),l=e.getMonth();return{start:s,end:new Date(i,l+1,1),prev:new Date(i,l-1,1),prev2:new Date(i,l-2,1)}}const r=e.getFullYear();return{start:Py(e),end:new Date(r+1,0,1),prev:new Date(r-1,0,1),prev2:new Date(r-2,0,1)}}function Ny({sessions:t=[],onBack:e}){const[r,o]=b.useState("day"),s=new Date,{start:i,end:l,prev:a,prev2:d}=$y(r,s),g=Z=>new Date(Z.started_at||Z.created_at),h=t.filter(Z=>Z.completed),y=(Z,D,A)=>{const M=g(Z);return M>=D&&M<A},f=(Z,D)=>h.filter(A=>y(A,Z,D)).reduce((A,M)=>A+(M.actual_min||0),0),w=h.filter(Z=>y(Z,i,l)),k=w.reduce((Z,D)=>Z+(D.actual_min||0),0),j=f(a,i),z=f(d,a),p=w.length,c=Array(24).fill(0);w.forEach(Z=>{c[g(Z).getHours()]+=Z.actual_min||0});const u=Math.max(...c,0),v=Wy(u),S={};w.forEach(Z=>{const D=je[Z.tree]?Z.tree:Un;S[D]=(S[D]||0)+(Z.actual_min||0)});const T=Object.entries(S).map(([Z,D])=>({name:je[Z].label,min:D,color:je[Z].leaf})).sort((Z,D)=>D.min-Z.min),$=j>0?Math.round((k-j)/j*100):k>0?100:0,U=$>0?up:$<0?cp:wh,R=$>0?"#4C9A6B":$<0?"#C2536B":"#9A968C",N={day:"yesterday",week:"last week",month:"last month",year:"last year"}[r],C={day:"2 days ago",week:"2 weeks ago",month:"2 months ago",year:"2 years ago"}[r],E=54,x=22,G=2*Math.PI*E;let dt=0;return n.jsxs("div",{style:gt.page,children:[n.jsxs("div",{style:gt.topbar,children:[n.jsxs("button",{onClick:e,style:gt.back,children:[n.jsx(Zb,{size:18})," Grove"]}),n.jsx("h1",{style:gt.h1,children:"Insights"}),n.jsx("div",{style:{width:76}})]}),n.jsx("div",{style:gt.rangeBar,children:Ay.map(Z=>n.jsx("button",{onClick:()=>o(Z.id),style:{...gt.rangeBtn,...r===Z.id?gt.rangeOn:{}},children:Z.label},Z.id))}),n.jsxs("div",{style:gt.headline,children:[n.jsxs("div",{style:gt.bigStat,children:[n.jsx("div",{style:gt.bigVal,children:ar(k)}),n.jsxs("div",{style:gt.bigLbl,children:["Focused this ",r]})]}),n.jsxs("div",{style:gt.bigStat,children:[n.jsx("div",{style:gt.bigVal,children:p}),n.jsx("div",{style:gt.bigLbl,children:"Trees"})]})]}),n.jsxs("div",{style:gt.card,children:[n.jsxs("div",{style:gt.cardHead,children:[n.jsxs("div",{style:gt.cardTitle,children:["Your forest this ",r]}),n.jsx("div",{style:gt.cardHint,children:"Each tree is a completed session — bigger means longer focus"})]}),n.jsx(Gy,{sessions:w}),n.jsxs("div",{style:gt.forestNumber,children:[p," ",p===1?"tree":"trees"," · ",ar(k)," focused"]})]}),n.jsx(hl,{title:"Focus distribution",hint:"Minutes focused at each time of day",children:u===0?n.jsx(hc,{}):n.jsx(Hy,{hours:c,axis:v})}),n.jsx(hl,{title:"Pillar distribution",hint:"How your focus splits across the five trees",children:T.length===0?n.jsx(hc,{}):n.jsxs("div",{style:gt.donutWrap,children:[n.jsxs("svg",{viewBox:"0 0 140 140",width:"150",height:"150",style:{flexShrink:0},children:[T.map(Z=>{const D=Z.min/(k||1)*G,A=n.jsx("circle",{cx:"70",cy:"70",r:E,fill:"none",stroke:Z.color,strokeWidth:x,strokeDasharray:`${D} ${G-D}`,strokeDashoffset:-dt,transform:"rotate(-90 70 70)"},Z.name);return dt+=D,A}),n.jsx("text",{x:"70",y:"66",textAnchor:"middle",style:gt.donutCenterTop,children:ar(k)}),n.jsx("text",{x:"70",y:"82",textAnchor:"middle",style:gt.donutCenterSub,children:"total"})]}),n.jsx("div",{style:gt.legend,children:T.map(Z=>n.jsxs("div",{style:gt.legendRow,children:[n.jsx("span",{style:{...gt.legendDot,background:Z.color}}),n.jsx("span",{style:gt.legendName,children:Z.name}),n.jsxs("span",{style:gt.legendVal,children:[ar(Z.min)," · ",Math.round(Z.min/(k||1)*100),"%"]})]},Z.name))})]})}),n.jsxs(hl,{title:"Focus trend",hint:`This ${r} vs the previous two`,children:[n.jsxs("div",{style:gt.trend3,children:[n.jsxs("div",{style:gt.trendCol,children:[n.jsx("div",{style:gt.trendVal,children:ar(k)}),n.jsxs("div",{style:gt.trendLbl,children:["This ",r]})]}),n.jsxs("div",{style:gt.trendCol,children:[n.jsx("div",{style:{...gt.trendVal,color:"var(--text-2)"},children:ar(j)}),n.jsx("div",{style:gt.trendLbl,children:N})]}),n.jsxs("div",{style:gt.trendCol,children:[n.jsx("div",{style:{...gt.trendVal,color:"var(--text-3)"},children:ar(z)}),n.jsx("div",{style:gt.trendLbl,children:C})]})]}),n.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:n.jsxs("div",{style:{...gt.trendBadge,color:R,background:R+"1A"},children:[n.jsx(U,{size:15})," ",$>0?"+":"",$,"% vs ",N]})}),n.jsx(Uy,{items:[{label:`This ${r}`,value:k,color:"#4C9A6B"},{label:N,value:j,color:"var(--text-3)"},{label:C,value:z,color:"var(--text-3)"}]})]})]})}const Oy=t=>t===0?"12a":t<12?`${t}a`:t===12?"12p":`${t-12}p`;function Hy({hours:t,axis:e}){return n.jsxs("div",{children:[n.jsxs("div",{style:gt.vcPlot,children:[e.ticks.map(r=>n.jsxs("div",{style:{...gt.vcGridRow,bottom:`${r/e.max*100}%`},children:[n.jsx("span",{style:gt.vcYLabel,children:r}),n.jsx("div",{style:gt.vcGridLine})]},r)),n.jsx("div",{style:gt.vcBars,children:t.map((r,o)=>n.jsx("div",{style:gt.vcCell,title:`${My(o)} · ${r} min`,children:n.jsx("div",{style:{...gt.vcBar,height:r>0?`max(3px, ${r/e.max*100}%)`:0}})},o))})]}),n.jsx("div",{style:gt.vcXAxis,children:t.map((r,o)=>n.jsx("div",{style:gt.vcXCell,children:o%3===0?Oy(o):""},o))}),n.jsx("div",{style:gt.vcYTitle,children:"minutes focused, by hour of day"})]})}function Gy({sessions:t}){if(!t.length)return n.jsx("div",{style:gt.sceneEmpty,children:"No trees yet this period. 🌱"});const r=t.slice(0,80),o=t.length-r.length,s=i=>Math.round(Math.max(40,Math.min(88,40+(i||0)*.6)));return n.jsxs("div",{children:[n.jsx("div",{style:gt.scene,children:r.map(i=>n.jsx("div",{style:gt.sceneTree,title:`${i.label||"Focus"} · ${ar(i.actual_min||i.duration_min)}`,children:n.jsx(Rd,{species:i.tree,progress:1,size:s(i.actual_min||i.duration_min)})},i.id))}),o>0&&n.jsxs("div",{style:gt.overflow,children:["+",o," more trees"]})]})}function hl({title:t,hint:e,children:r}){return n.jsxs("div",{style:gt.card,children:[n.jsxs("div",{style:gt.cardHead,children:[n.jsx("div",{style:gt.cardTitle,children:t}),e&&n.jsx("div",{style:gt.cardHint,children:e})]}),r]})}function hc(){return n.jsx("div",{style:gt.empty,children:"No focus sessions in this period yet. 🌱"})}function Uy({items:t}){const e=Math.max(1,...t.map(r=>r.value));return n.jsx("div",{style:gt.tbWrap,children:t.map(r=>n.jsxs("div",{style:gt.tbRow,children:[n.jsx("div",{style:gt.tbLbl,children:r.label}),n.jsx("div",{style:gt.tbTrack,children:n.jsx("div",{style:{...gt.tbBar,width:`${r.value/e*100}%`,background:r.color}})}),n.jsx("div",{style:gt.tbVal,children:ar(r.value)})]},r.label))})}const gt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"20px 16px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:720,margin:"0 auto"},topbar:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},back:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},h1:{fontSize:20,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},rangeBar:{display:"flex",gap:6,background:"var(--surface)",padding:5,borderRadius:12,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},rangeBtn:{flex:1,border:"none",background:"none",padding:"9px 0",borderRadius:8,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},rangeOn:{background:"var(--accent-strong)",color:"#fff"},headline:{display:"flex",gap:12,marginBottom:16},bigStat:{flex:1,background:"var(--surface)",borderRadius:14,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},bigVal:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em"},bigLbl:{fontSize:12,color:"var(--text-3)",marginTop:3,fontWeight:500},card:{background:"var(--surface)",borderRadius:16,padding:"18px 18px 20px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},cardHead:{marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardHint:{fontSize:12,color:"var(--text-3)",marginTop:2},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"24px 0"},scene:{display:"flex",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"center",gap:"0 2px",padding:"14px 8px 6px",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,minHeight:110,border:"1px solid var(--border)"},sceneTree:{lineHeight:0},sceneEmpty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"34px 0",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,border:"1px solid var(--border)"},overflow:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",marginTop:6,fontWeight:600},forestNumber:{textAlign:"center",marginTop:12,fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},vcPlot:{position:"relative",height:180,paddingLeft:30},vcGridRow:{position:"absolute",left:0,right:0,display:"flex",alignItems:"center",height:0},vcYLabel:{width:26,marginRight:4,textAlign:"right",fontSize:9,color:"var(--text-3)",fontWeight:600,flexShrink:0},vcGridLine:{flex:1,height:1,background:"#EEEBE4"},vcBars:{position:"absolute",left:30,right:0,top:0,bottom:0,display:"flex",alignItems:"flex-end",gap:1},vcCell:{flex:1,height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"center"},vcBar:{width:"72%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",transition:"height 0.3s"},vcXAxis:{display:"flex",marginLeft:30,marginTop:4},vcXCell:{flex:1,textAlign:"center",fontSize:8.5,color:"var(--text-3)",fontWeight:600,overflow:"hidden"},vcYTitle:{textAlign:"center",fontSize:9.5,color:"var(--text-3)",marginTop:6,letterSpacing:"0.06em",textTransform:"uppercase",fontWeight:600},donutWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap",justifyContent:"center"},donutCenterTop:{fontSize:16,fontWeight:800,fill:"var(--text)",fontFamily:"'Fraunces',Georgia,serif"},donutCenterSub:{fontSize:9,fill:"#9A968C",textTransform:"uppercase",letterSpacing:"0.08em"},legend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:11,height:11,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},legendVal:{fontSize:12,color:"var(--text-3)",fontWeight:600,flexShrink:0},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:56,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},Vy=[15,30,45,60,90],yl="anvil_grove_active",yc=t=>`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`,pi=t=>t>=60?`${Math.floor(t/60)}h ${t%60}m`:`${t}m`;function Yy(){const[t,e]=b.useState("timer"),[r,o]=b.useState("idle"),[s,i]=b.useState(15),[l,a]=b.useState(!1),[d,g]=b.useState(""),[h,y]=b.useState(Un),[f,w]=b.useState(()=>localStorage.getItem("anvil_grove_deepfocus")!=="0"),[k,j]=b.useState(15*60),[z,p]=b.useState({sessions:[],stats:null}),c=b.useRef(null),u=b.useRef(null),v=b.useRef(!1),S=b.useCallback(async()=>{try{p(await O.getFocus())}catch{}},[]),T=b.useCallback(async(W,F)=>{if(!v.current){v.current=!0,localStorage.removeItem(yl);try{await O.createFocus({label:d.trim()||null,tree:h,duration_min:s,actual_min:F,completed:W,started_at:u.current,ended_at:new Date().toISOString()})}catch{}S()}},[d,h,s,S]),$=b.useCallback(()=>{if(r!=="running")return;const W=u.current?Math.round((Date.now()-new Date(u.current).getTime())/6e4):0;o("failed"),T(!1,Math.max(0,Math.min(s,W)))},[r,s,T]),U=b.useCallback(()=>{o("done"),j(0),T(!0,s)},[s,T]);b.useEffect(()=>{S();const W=JSON.parse(localStorage.getItem(yl)||"null");if(W&&W.endTime){const F=Math.round((W.endTime-Date.now())/1e3);i(W.duration),g(W.label||""),y(W.tree||"oak"),c.current=W.endTime,u.current=W.startedAt,F>0?(j(F),o("running")):(o("done"),v.current=!1,T(!0,W.duration))}},[]),b.useEffect(()=>{if(r!=="running")return;const W=()=>{const m=Math.round((c.current-Date.now())/1e3);if(m<=0){U();return}j(m)};W();const F=setInterval(W,250);return()=>clearInterval(F)},[r,U]),b.useEffect(()=>{if(r!=="running"||!f)return;const W=()=>{document.hidden&&$()};return document.addEventListener("visibilitychange",W),()=>document.removeEventListener("visibilitychange",W)},[r,f,$]),b.useEffect(()=>{const W=()=>{!document.hidden&&r!=="running"&&S()};window.addEventListener("focus",W),document.addEventListener("visibilitychange",W);const F=setInterval(W,6e4);return()=>{window.removeEventListener("focus",W),document.removeEventListener("visibilitychange",W),clearInterval(F)}},[S,r]);const R=()=>w(W=>{const F=!W;return localStorage.setItem("anvil_grove_deepfocus",F?"1":"0"),F}),N=()=>{v.current=!1,u.current=new Date().toISOString(),c.current=Date.now()+s*60*1e3,localStorage.setItem(yl,JSON.stringify({endTime:c.current,duration:s,label:d,tree:h,startedAt:u.current})),j(s*60),o("running")},C=()=>{o("idle"),j(s*60)},E=W=>{a(!1),i(W),j(W*60)},x=()=>{l||(a(!0),i(5),j(5*60))},G=W=>{if(a(!0),W===""){i(0),j(0);return}const F=Math.max(1,Math.min(600,parseInt(W,10)||0));i(F),j(F*60)},dt=s*60,Z=r==="running"?1-k/dt:r==="done"?1:0,D=130,A=2*Math.PI*D,M=A*(1-(r==="running"?Z:r==="done"?1:0)),V=z.stats;return t==="stats"?n.jsx(Ny,{sessions:z.sessions,onBack:()=>e("timer")}):n.jsxs("div",{style:ut.page,children:[n.jsxs("div",{style:ut.head,children:[n.jsx("div",{style:ut.eyebrow,children:"Anvil · Grove"}),n.jsx("h1",{style:ut.h1,children:"Grove"}),n.jsx("div",{style:ut.subhead,children:"Plant a tree, stay focused, grow your grove."}),n.jsxs("button",{onClick:()=>e("stats"),style:ut.insightsBtn,disabled:r==="running",children:[n.jsx(dh,{size:15})," Insights"]})]}),V&&n.jsxs("div",{style:ut.statRow,children:[n.jsx(js,{label:"Today",value:pi(V.today_minutes)}),n.jsx(js,{label:"Trees",value:V.trees}),n.jsx(js,{label:"Streak",value:`${V.streak}d`}),n.jsx(js,{label:"Success",value:`${V.success_rate}%`})]}),n.jsxs("div",{style:ut.stage,children:[n.jsxs("div",{style:ut.ringWrap,children:[n.jsxs("svg",{width:"300",height:"300",viewBox:"0 0 300 300",style:{position:"absolute",inset:0},children:[n.jsx("circle",{cx:"150",cy:"150",r:D,fill:"none",stroke:"var(--border)",strokeWidth:"10"}),n.jsx("circle",{cx:"150",cy:"150",r:D,fill:"none",stroke:r==="failed"?"#C2536B":"#4C9A6B",strokeWidth:"10",strokeLinecap:"round",strokeDasharray:A,strokeDashoffset:M,transform:"rotate(-90 150 150)",style:{transition:"stroke-dashoffset 0.4s linear"}})]}),n.jsx("div",{style:ut.ringInner,children:n.jsx(Rd,{species:h,progress:r==="idle"?0:Z,withered:r==="failed",size:170})})]}),r==="idle"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:ut.timeBig,children:yc(s*60)}),n.jsxs("div",{style:ut.controls,children:[n.jsxs("div",{style:ut.chips,children:[Vy.map(W=>n.jsxs("button",{onClick:()=>E(W),style:{...ut.chip,...!l&&s===W?ut.chipOn:{}},children:[W,"m"]},W)),n.jsx("button",{onClick:x,style:{...ut.chip,...l?ut.chipOn:{}},children:"Custom"})]}),l&&n.jsxs("div",{style:ut.customRow,children:[n.jsx("input",{type:"number",min:"1",max:"600",inputMode:"numeric",autoFocus:!0,value:s||"",onChange:W=>G(W.target.value),placeholder:"e.g. 50",style:ut.customInput}),n.jsx("span",{style:ut.customUnit,children:"minutes"})]}),n.jsx("input",{value:d,onChange:W=>g(W.target.value),placeholder:"What are you focusing on? (optional)",style:ut.input,maxLength:60}),n.jsx("div",{style:ut.treePick,children:Object.entries(je).map(([W,F])=>n.jsxs("button",{onClick:()=>y(W),title:F.label,style:{...ut.treeBtn,...h===W?{borderColor:F.leaf,background:F.leaf+"1A"}:{}},children:[n.jsx("span",{style:{...ut.treeDot,background:F.leaf}}),F.label]},W))}),n.jsxs("button",{onClick:R,style:ut.toggleRow,children:[n.jsxs("div",{style:{textAlign:"left"},children:[n.jsx("div",{style:ut.toggleTitle,children:"Deep Focus"}),n.jsx("div",{style:ut.toggleHint,children:f?"Leaving the app kills the tree":"Tree survives until you give up"})]}),n.jsx("div",{style:{...ut.switch,...f?ut.switchOn:{}},children:n.jsx("div",{style:{...ut.knob,...f?ut.knobOn:{}}})})]}),n.jsx("button",{onClick:N,disabled:s<1,style:{...ut.plantBtn,...s<1?{opacity:.5,cursor:"not-allowed"}:{}},children:"Plant tree"})]})]}),r==="running"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:ut.timeBig,children:yc(k)}),n.jsx("div",{style:ut.focusLabel,children:d.trim()||"Focusing…"}),n.jsx("div",{style:f?ut.warn:ut.warnSoft,children:f?"⚠ Deep Focus on — leaving this app will kill your tree.":"🌿 Relaxed mode — only Give up ends this session."}),n.jsx("button",{onClick:$,style:ut.giveUp,children:"Give up"})]}),r==="done"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:ut.resultTitle,children:["🌳 You grew a ",je[h].label," tree!"]}),n.jsxs("div",{style:ut.resultSub,children:[pi(s)," of focus added to your grove."]}),n.jsx("button",{onClick:C,style:ut.plantBtn,children:"Plant another"})]}),r==="failed"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{...ut.resultTitle,color:"#C2536B"},children:"Your tree withered."}),n.jsx("div",{style:ut.resultSub,children:"You left before the timer finished. Try again?"}),n.jsx("button",{onClick:C,style:ut.plantBtn,children:"Try again"})]})]}),n.jsx(Qy,{sessions:z.sessions,onDelete:async W=>{await O.deleteFocus(W),S()}})]})}function js({label:t,value:e}){return n.jsxs("div",{style:ut.stat,children:[n.jsx("div",{style:ut.statValue,children:e}),n.jsx("div",{style:ut.statLabel,children:t})]})}function Qy({sessions:t,onDelete:e}){const r=t.filter(l=>l.completed);if(r.length===0)return n.jsx("div",{style:ut.forestEmpty,children:"Your grove is empty. Plant your first tree above. 🌱"});const o={};for(const l of r){const a=(l.started_at||l.created_at||"").slice(0,10);(o[a]||(o[a]=[])).push(l)}const s=Object.keys(o).sort().reverse(),i=l=>{const a=new Date().toISOString().slice(0,10);return l===a?"Today":new Date(l+"T00:00").toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})};return n.jsxs("div",{style:ut.forest,children:[n.jsxs("div",{style:ut.forestHead,children:["Your Grove · ",r.length," trees"]}),s.map(l=>n.jsxs("div",{style:ut.daySection,children:[n.jsxs("div",{style:ut.dayLabel,children:[i(l)," · ",o[l].length]}),n.jsx("div",{style:ut.treeGrid,children:o[l].map(a=>n.jsxs("div",{style:ut.treeCard,title:`${a.label||"Focus"} · ${pi(a.actual_min)}`,onDoubleClick:()=>e(a.id),children:[n.jsx(Fy,{species:a.tree}),n.jsx("div",{style:ut.treeCardMin,children:pi(a.actual_min||a.duration_min)}),a.label&&n.jsx("div",{style:ut.treeCardLabel,children:a.label})]},a.id))})]},l)),n.jsx("div",{style:ut.forestHint,children:"Double-tap a tree to remove it."})]})}const ut={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:820,margin:"0 auto"},head:{marginBottom:16,textAlign:"center"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},insightsBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginTop:12},statRow:{display:"flex",gap:10,justifyContent:"center",marginBottom:18,flexWrap:"wrap"},stat:{background:"var(--surface)",borderRadius:12,padding:"10px 18px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",minWidth:78},statValue:{fontSize:19,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},statLabel:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},stage:{background:"var(--surface)",borderRadius:18,padding:"28px 24px 32px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",display:"flex",flexDirection:"column",alignItems:"center",marginBottom:26},ringWrap:{position:"relative",width:300,height:300,display:"grid",placeItems:"center"},ringInner:{position:"relative",zIndex:1,display:"grid",placeItems:"center"},timeBig:{fontSize:40,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:6},focusLabel:{fontSize:14,color:"var(--text-2)",marginTop:2,fontWeight:500},warn:{fontSize:12,color:"#C2773B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},warnSoft:{fontSize:12,color:"#4C9A6B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},toggleRow:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:12,padding:"10px 14px",cursor:"pointer",fontFamily:"inherit",width:"100%"},toggleTitle:{fontSize:14,fontWeight:700,color:"var(--text)"},toggleHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},switch:{width:42,height:24,borderRadius:12,background:"var(--border)",flexShrink:0,padding:2,transition:"background 0.18s",boxSizing:"border-box"},switchOn:{background:"#4C9A6B"},knob:{width:20,height:20,borderRadius:"50%",background:"var(--surface)",boxShadow:"0 1px 2px rgba(0,0,0,0.2)",transform:"translateX(0)",transition:"transform 0.18s"},knobOn:{transform:"translateX(18px)"},controls:{width:"100%",maxWidth:380,display:"flex",flexDirection:"column",gap:14,marginTop:8},chips:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},chip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},customRow:{display:"flex",alignItems:"center",justifyContent:"center",gap:8},customInput:{border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:15,fontWeight:700,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center",width:100},customUnit:{fontSize:13,color:"var(--text-3)",fontWeight:600},input:{border:"1px solid var(--border)",borderRadius:10,padding:"11px 13px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center"},treePick:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},treeBtn:{display:"flex",alignItems:"center",gap:6,border:"1.5px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},treeDot:{width:10,height:10,borderRadius:"50%"},plantBtn:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},giveUp:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",padding:"11px 26px",borderRadius:11,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:18},resultTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginTop:14,textAlign:"center"},resultSub:{fontSize:13.5,color:"var(--text-3)",marginTop:6,marginBottom:18,textAlign:"center"},forest:{background:"var(--surface)",borderRadius:16,padding:"20px 22px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},forestHead:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},forestEmpty:{background:"var(--surface)",borderRadius:16,padding:"40px 20px",textAlign:"center",color:"var(--text-3)",fontSize:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},daySection:{marginBottom:16},dayLabel:{fontSize:12,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:8},treeGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(80px,1fr))",gap:8},treeCard:{display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 4px",borderRadius:10,cursor:"pointer",background:"var(--surface-2)"},treeCardMin:{fontSize:12,fontWeight:700,color:"#4C9A6B",marginTop:-4},treeCardLabel:{fontSize:10.5,color:"var(--text-3)",marginTop:2,textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:76},forestHint:{fontSize:11,color:"var(--text-3)",textAlign:"center",marginTop:6}},Ta=[{code:"INR",symbol:"₹",locale:"en-IN",label:"Indian Rupee"},{code:"USD",symbol:"$",locale:"en-US",label:"US Dollar"},{code:"EUR",symbol:"€",locale:"de-DE",label:"Euro"},{code:"GBP",symbol:"£",locale:"en-GB",label:"British Pound"},{code:"JPY",symbol:"¥",locale:"ja-JP",label:"Japanese Yen"},{code:"AED",symbol:"د.إ",locale:"en-AE",label:"UAE Dirham"},{code:"AUD",symbol:"A$",locale:"en-AU",label:"Australian Dollar"},{code:"CAD",symbol:"C$",locale:"en-CA",label:"Canadian Dollar"},{code:"SGD",symbol:"S$",locale:"en-SG",label:"Singapore Dollar"}],vc="INR",vp="anvil_currency",Ai=t=>Ta.find(e=>e.code===t)||Ta[0];function Vn(){try{return localStorage.getItem(vp)||vc}catch{return vc}}function xc(t){try{localStorage.setItem(vp,t)}catch{}return window.dispatchEvent(new CustomEvent("anvil-currency",{detail:t})),t}function Ea(t,e){const r=Ai(e||Vn()),o=Math.round(Number(t)||0);return r.symbol+o.toLocaleString(r.locale)}function Ky(t,e){const r=Ai(e||Vn()),o=Number(t)||0;return r.symbol+o.toLocaleString(r.locale,{minimumFractionDigits:2,maximumFractionDigits:2})}function Xy(t,e){const r=Ai(e||Vn()),o=Math.round(Number(t)||0),s=Math.abs(o);return r.code==="INR"?s>=1e7?r.symbol+(o/1e7).toFixed(s>=1e8?0:1)+"Cr":s>=1e5?r.symbol+(o/1e5).toFixed(s>=1e6?0:1)+"L":s>=1e3?r.symbol+(o/1e3).toFixed(s>=1e4?0:1)+"K":r.symbol+o:s>=1e9?r.symbol+(o/1e9).toFixed(1)+"B":s>=1e6?r.symbol+(o/1e6).toFixed(1)+"M":s>=1e3?r.symbol+(o/1e3).toFixed(1)+"K":r.symbol+o}function xp(){const[t,e]=b.useState(Vn());return b.useEffect(()=>{const r=o=>e(o.detail||Vn());return window.addEventListener("anvil-currency",r),()=>window.removeEventListener("anvil-currency",r)},[]),Ai(t)}const Jy="grove_rates",Zy="reward_rates",Ss=Object.keys(je),kc=[{id:"kickstart",label:"Kickstart"},{id:"golden",label:"Golden Book"},{id:"habits",label:"Habits"},{id:"quadrant",label:"Quadrant"},{id:"goals",label:"Goals"},{id:"grove",label:"Grove"},{id:"journal",label:"Journal"},{id:"revision",label:"Revision"},{id:"affirmations",label:"Affirmations"},{id:"skills",label:"Skills"},{id:"spiritual",label:"Spiritual"},{id:"mindscape",label:"Mindscape"},{id:"vault",label:"Vault"}],Cs="#C9A227",vl="#3A7CA5",qy=t=>{const e=Math.floor(t/60),r=Math.round(t%60);return e&&r?`${e}h ${r}m`:e?`${e}h`:`${r}m`},t0=t=>{let e=Math.round((t||0)*60);const r=Math.floor(e/3600);e%=3600;const o=Math.floor(e/60);return e%=60,[r?`${r}h`:null,r||o?`${o}m`:null,`${e}s`].filter(Boolean).join(" ")},e0=()=>{const t=new Date,e=r=>String(r).padStart(2,"0");return`${t.getFullYear()}-${e(t.getMonth()+1)}-${e(t.getDate())}T${e(t.getHours())}:${e(t.getMinutes())}`},r0=t=>{if(!t)return"";const e=new Date(t.includes("T")?t:t+"T00:00:00");return isNaN(e)?t:e.toLocaleDateString("en-US",t.includes("T")?{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}:{month:"short",day:"numeric",year:"numeric"})},Ke=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,wc=t=>{const e=new Date(t);return e.setHours(0,0,0,0),e.setDate(e.getDate()-(e.getDay()+6)%7),e},xl=[{id:"all",label:"All time"},{id:"tweek",label:"This week"},{id:"tmonth",label:"This month"},{id:"pweek",label:"Last week"},{id:"pmonth",label:"Last month"},{id:"tyear",label:"This year"}];function n0(t){const e=new Date;if(t==="tweek"){const r=wc(e),o=new Date(r);return o.setDate(r.getDate()+6),[Ke(r),Ke(o)]}if(t==="pweek"){const r=wc(e);r.setDate(r.getDate()-7);const o=new Date(r);return o.setDate(r.getDate()+6),[Ke(r),Ke(o)]}return t==="tmonth"?[Ke(new Date(e.getFullYear(),e.getMonth(),1)),Ke(new Date(e.getFullYear(),e.getMonth()+1,0))]:t==="pmonth"?[Ke(new Date(e.getFullYear(),e.getMonth()-1,1)),Ke(new Date(e.getFullYear(),e.getMonth(),0))]:t==="tyear"?[Ke(new Date(e.getFullYear(),0,1)),Ke(new Date(e.getFullYear(),11,31))]:["0000-01-01","9999-12-31"]}function o0(){const t=xp(),e=P=>Ky(P,t.code),[r,o]=b.useState([]),[s,i]=b.useState([]),[l,a]=b.useState([]),[d,g]=b.useState([]),[h,y]=b.useState({}),[f,w]=b.useState({}),[k,j]=b.useState(!1),[z,p]=b.useState({}),[c,u]=b.useState({}),[v,S]=b.useState(!1),[T,$]=b.useState(!1),[U,R]=b.useState(!1),[N,C]=b.useState(""),[E,x]=b.useState("all"),G=()=>O.getPayouts().then(g).catch(()=>{}),dt=()=>O.getRewardRates().then(a).catch(()=>{});b.useEffect(()=>{(async()=>{try{const[P,ft,Mt,ee,Ve,Ye]=await Promise.all([O.getFocus(),O.getScreenTime(),O.getRewardRates(),O.getPayouts(),O.getSetting(Jy),O.getSetting(Zy)]);o(P.sessions||[]),i(Array.isArray(ft)?ft:[]),a(Mt||[]),g(ee||[]),y((Ve==null?void 0:Ve.value)||{}),w((Ye==null?void 0:Ye.value)||{})}catch{}j(!0)})()},[]);const Z={};l.forEach(P=>{var ft;(Z[ft=`${P.kind}:${P.rkey}`]||(Z[ft]=[])).push({eff:P.eff_date,rate:P.rate})}),Object.values(Z).forEach(P=>P.sort((ft,Mt)=>ft.eff.localeCompare(Mt.eff)));const D=(P,ft,Mt)=>{const ee=Z[`${P}:${ft}`];if(ee){let Ve=null;for(const Ye of ee)if(Ye.eff<=Mt)Ve=Ye.rate;else break;if(Ve!==null)return Ve}return(P==="focus"?h[ft]:f[ft])||0},A=(P,ft)=>{const Mt=Z[`${P}:${ft}`];return Mt&&Mt.length?Mt[Mt.length-1].rate:(P==="focus"?h[ft]:f[ft])??""},[M,V]=n0(E);let W=0,F=0;r.filter(P=>P.completed).forEach(P=>{const ft=(P.started_at||P.created_at||"").slice(0,10),Mt=je[P.tree]?P.tree:Un;W+=(P.actual_min||0)/60*D("focus",Mt,ft)}),s.forEach(P=>{P.screen!=="worth"&&(F+=P.seconds/60*D("usage",P.screen,P.date))});const m=W+F,H=d.reduce((P,ft)=>P+ft.amount,0),ot=Math.max(0,m-H),q={};Ss.forEach(P=>q[P]={minutes:0,earned:0}),r.filter(P=>P.completed).forEach(P=>{const ft=(P.started_at||P.created_at||"").slice(0,10);if(ft<M||ft>V)return;const Mt=je[P.tree]?P.tree:Un,ee=P.actual_min||0;q[Mt].minutes+=ee,q[Mt].earned+=ee/60*D("focus",Mt,ft)});const ht=Ss.reduce((P,ft)=>P+q[ft].earned,0),It={};s.forEach(P=>{var Mt;if(P.screen==="worth"||P.date<M||P.date>V)return;const ft=It[Mt=P.screen]||(It[Mt]={seconds:0,earned:0});ft.seconds+=P.seconds,ft.earned+=P.seconds/60*D("usage",P.screen,P.date)});const yt=Object.values(It).reduce((P,ft)=>P+ft.earned,0),jt=ht+yt,K=jt>0?ht/jt*100:0,mt=jt>0?yt/jt*100:0,vt=Ss.map(P=>({p:P,...q[P],...je[P]})).filter(P=>P.minutes>0).sort((P,ft)=>ft.earned-P.earned),Bt=kc.map(P=>({...P,...It[P.id]||{seconds:0,earned:0}})).filter(P=>P.seconds>0).sort((P,ft)=>ft.earned-P.earned),$t=(P,ft)=>{O.setRewardRate({kind:"focus",rkey:P,rate:Math.max(0,parseFloat(ft)||0)}).then(dt).catch(()=>{})},We=(P,ft)=>{O.setRewardRate({kind:"usage",rkey:P,rate:Math.max(0,parseFloat(ft)||0)}).then(dt).catch(()=>{})},_e=async P=>{const ft=Math.min(parseFloat(P)||0,ot);ft<=0||(await O.createPayout({amount:ft,note:"",date:e0()}),R(!1),C(""),G())},$r=async P=>{await O.deletePayout(P),G()};return n.jsxs("div",{style:J.page,children:[n.jsxs("div",{style:J.head,children:[n.jsx("div",{style:J.eyebrow,children:"Anvil · Rewards"}),n.jsx("h1",{style:J.h1,children:"Rewards"}),n.jsx("div",{style:J.subhead,children:"Your earned rewards from focus and app usage."})]}),n.jsxs("div",{style:J.hero,children:[n.jsx("div",{style:J.heroLabel,children:"Final reward · pending"}),n.jsx("div",{style:J.heroVal,children:e(ot)}),n.jsxs("div",{style:J.heroSub,children:["Earned ",e(m)," · Taken ",e(H)]}),U?n.jsxs("div",{style:J.partialRow,children:[n.jsxs("div",{style:J.partialInputWrap,children:[n.jsx("span",{style:J.partialSign,children:t.symbol}),n.jsx("input",{type:"number",min:"0",step:"0.01",autoFocus:!0,placeholder:ot.toFixed(2),value:N,onChange:P=>C(P.target.value),style:J.partialInput})]}),n.jsx("button",{onClick:()=>_e(N),style:J.heroBtnSolid,children:"Confirm"}),n.jsx("button",{onClick:()=>{R(!1),C("")},style:J.heroBtnGhost,children:"Cancel"})]}):n.jsxs("div",{style:J.heroBtns,children:[n.jsx("button",{onClick:()=>R(!0),disabled:ot<=0,style:{...J.heroBtnGhost,...ot<=0?J.btnDisabled:{}},children:"Take partial"}),n.jsx("button",{onClick:()=>_e(ot),disabled:ot<=0,style:{...J.heroBtnSolid,...ot<=0?J.btnDisabled:{}},children:"Take all pending"})]})]}),n.jsxs("div",{style:J.statRow,children:[n.jsxs("div",{style:J.statCard,children:[n.jsx("div",{style:J.statVal,children:e(H)}),n.jsx("div",{style:J.statLbl,children:"Total taken"})]}),n.jsxs("div",{style:J.statCard,children:[n.jsx("div",{style:{...J.statVal,color:Cs},children:e(ot)}),n.jsx("div",{style:J.statLbl,children:"Total pending"})]})]}),n.jsx("div",{style:J.periodRow,children:xl.map(P=>n.jsx("button",{onClick:()=>x(P.id),style:{...J.periodChip,...E===P.id?J.periodChipOn:{}},children:P.label},P.id))}),jt>0?n.jsxs("div",{style:J.card,children:[n.jsxs("div",{style:J.cardTitleRow,children:[n.jsx("span",{style:J.cardTitle,children:"Reward split"}),n.jsxs("span",{style:J.periodTotal,children:[e(jt)," · ",xl.find(P=>P.id===E).label]})]}),n.jsxs("div",{style:J.splitTrack,children:[n.jsx("div",{style:{width:`${K}%`,background:Cs,height:"100%"}}),n.jsx("div",{style:{width:`${mt}%`,background:vl,height:"100%"}})]}),n.jsxs("div",{style:J.legendRow,children:[n.jsxs("span",{style:J.legendItem,children:[n.jsx("span",{style:{...J.legendDot,background:Cs}})," Focus ",Math.round(K),"% · ",e(ht)]}),n.jsxs("span",{style:J.legendItem,children:[n.jsx("span",{style:{...J.legendDot,background:vl}})," Usage ",Math.round(mt),"% · ",e(yt)]})]})]}):n.jsxs("div",{style:{...J.card,...J.muted},children:["No rewards earned in ",xl.find(P=>P.id===E).label.toLowerCase(),"."]}),n.jsxs("div",{style:J.card,children:[n.jsxs("button",{onClick:()=>S(P=>!P),style:J.collapseBtn,children:[n.jsxs("span",{style:{...J.cardTitle,color:Cs},children:["Focus Rewards · ",e(ht)]}),n.jsx("span",{style:J.collapseHint,children:v?"Hide rates":"Set rates"})]}),v&&n.jsx("div",{style:{...J.rateGrid,marginTop:12},children:Ss.map(P=>n.jsxs("div",{style:J.rateRow,children:[n.jsx("span",{style:{...J.dot,background:je[P].leaf}}),n.jsx("span",{style:J.rateName,children:je[P].label}),n.jsxs("div",{style:J.rateInputWrap,children:[n.jsx("span",{style:J.unitSign,children:t.symbol}),n.jsx("input",{type:"number",min:"0",step:"0.5",inputMode:"decimal",placeholder:"0",value:z[P]!==void 0?z[P]:A("focus",P),onChange:ft=>p(Mt=>({...Mt,[P]:ft.target.value})),onBlur:ft=>$t(P,ft.target.value),style:J.rateInput}),n.jsx("span",{style:J.unit,children:"/hr"})]})]},P))}),vt.length>0?n.jsx("div",{style:{...J.rows,marginTop:14},children:vt.map(P=>n.jsxs("div",{style:J.row,children:[n.jsx("span",{style:{...J.dot,background:P.leaf}}),n.jsx("span",{style:J.rowName,children:P.label}),n.jsx("span",{style:J.rowMeta,children:qy(Math.round(P.minutes))}),n.jsx("span",{style:J.rowAmt,children:e(P.earned)})]},P.p))}):n.jsx("div",{style:J.muted,children:"No focus sessions yet."})]}),n.jsxs("div",{style:J.card,children:[n.jsxs("button",{onClick:()=>$(P=>!P),style:J.collapseBtn,children:[n.jsxs("span",{style:{...J.cardTitle,color:vl},children:["Usage Rewards · ",e(yt)]}),n.jsx("span",{style:J.collapseHint,children:T?"Hide rates":"Set rates"})]}),T&&n.jsx("div",{style:{...J.rateGrid,marginTop:12},children:kc.map(P=>n.jsxs("div",{style:J.rateRow,children:[n.jsx("span",{style:J.rateName,children:P.label}),n.jsxs("div",{style:J.rateInputWrap,children:[n.jsx("span",{style:J.unitSign,children:t.symbol}),n.jsx("input",{type:"number",min:"0",step:"0.1",inputMode:"decimal",placeholder:"0",value:c[P.id]!==void 0?c[P.id]:A("usage",P.id),onChange:ft=>u(Mt=>({...Mt,[P.id]:ft.target.value})),onBlur:ft=>We(P.id,ft.target.value),style:J.rateInput}),n.jsx("span",{style:J.unit,children:"/min"})]})]},P.id))}),Bt.length>0?n.jsx("div",{style:{...J.rows,marginTop:14},children:Bt.map(P=>n.jsxs("div",{style:J.row,children:[n.jsx("span",{style:J.rowName,children:P.label}),n.jsx("span",{style:J.rowMeta,children:t0(P.seconds/60)}),n.jsx("span",{style:J.rowAmt,children:e(P.earned)})]},P.id))}):n.jsx("div",{style:J.muted,children:k?"No usage tracked yet.":"Loading…"})]}),d.length>0&&n.jsxs("div",{style:J.card,children:[n.jsx("div",{style:J.cardTitle,children:"Rewards taken"}),n.jsxs("div",{style:J.rows,children:[d.map(P=>n.jsxs("div",{style:J.row,children:[n.jsx("span",{style:J.rowMeta,children:r0(P.date)}),n.jsx("span",{style:{...J.rowName,textAlign:"right"}}),n.jsx("span",{style:J.rowAmt,children:e(P.amount)}),n.jsx("button",{onClick:()=>$r(P.id),style:J.del,children:"×"})]},P.id)),n.jsxs("div",{style:J.totalRow,children:[n.jsx("span",{children:"Total taken"}),n.jsx("span",{style:J.totalVal,children:e(H)})]})]})]}),n.jsx("div",{style:J.note,children:"Set rates only affect time from today onward — past time keeps the rate it was earned at."})]})}const J={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},hero:{background:"linear-gradient(135deg,var(--accent-strong),var(--accent-2))",borderRadius:16,padding:"22px 24px",color:"#fff",marginBottom:14,textAlign:"center"},heroLabel:{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",opacity:.85},heroVal:{fontSize:44,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,lineHeight:1.05},heroSub:{fontSize:12.5,opacity:.9,marginTop:6},heroBtns:{display:"flex",gap:10,marginTop:16,justifyContent:"center"},heroBtnSolid:{border:"none",background:"#fff",color:"var(--accent-strong)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},heroBtnGhost:{border:"1px solid rgba(255,255,255,0.6)",background:"transparent",color:"#fff",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},btnDisabled:{opacity:.45,cursor:"not-allowed"},partialRow:{display:"flex",gap:8,marginTop:16,justifyContent:"center",alignItems:"center",flexWrap:"wrap"},partialInputWrap:{display:"flex",alignItems:"center",gap:4,background:"#fff",borderRadius:10,padding:"6px 12px"},partialSign:{fontSize:15,color:"var(--accent-strong)",fontWeight:700},partialInput:{border:"none",background:"none",outline:"none",width:90,fontSize:16,fontWeight:700,fontFamily:"inherit",color:"#26241F"},statRow:{display:"flex",gap:10,marginBottom:14},statCard:{flex:1,background:"var(--surface)",borderRadius:12,padding:"12px 14px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},statVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},card:{background:"var(--surface)",borderRadius:16,padding:"18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:10,flexWrap:"wrap"},periodTotal:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text-2)"},periodRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},periodChip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},periodChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},collapseBtn:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"inherit"},collapseHint:{fontSize:12,fontWeight:700,color:"var(--accent)"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"12px 0"},splitTrack:{display:"flex",height:16,borderRadius:8,overflow:"hidden",marginTop:12,marginBottom:12,border:"1px solid var(--border)"},legendRow:{display:"flex",gap:16,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:600,color:"var(--text-2)"},legendDot:{width:10,height:10,borderRadius:3},rows:{display:"flex",flexDirection:"column",gap:2},row:{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:"1px solid var(--border)"},dot:{width:10,height:10,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:13.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},rowMeta:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,flexShrink:0},rowAmt:{fontSize:13.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",flexShrink:0,minWidth:64,textAlign:"right"},del:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",fontSize:16,lineHeight:1,padding:"0 2px",flexShrink:0},totalRow:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:10,marginTop:4,fontSize:14,fontWeight:700},totalVal:{fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},rateGrid:{display:"flex",flexDirection:"column",gap:10},rateRow:{display:"flex",alignItems:"center",gap:8},rateName:{flex:1,fontSize:14,fontWeight:600},rateInputWrap:{display:"flex",alignItems:"center",gap:3,border:"1px solid var(--border)",borderRadius:9,padding:"4px 10px",background:"var(--surface-2)"},unitSign:{fontSize:14,color:"var(--text-2)",fontWeight:600},rateInput:{border:"none",background:"none",outline:"none",width:64,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},unit:{fontSize:12,color:"var(--text-3)",fontWeight:600},note:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",fontStyle:"italic",marginTop:4}};function s0({onAuthed:t}){const[e,r]=b.useState("login"),[o,s]=b.useState(""),[i,l]=b.useState(""),[a,d]=b.useState(""),[g,h]=b.useState(""),[y,f]=b.useState(!1),w=e==="register",k=async j=>{if(j.preventDefault(),h(""),!i.trim()||!a){h("Email and password are required.");return}if(w&&a.length<6){h("Password must be at least 6 characters.");return}f(!0);try{const z=w?await O.register({name:o,email:i,password:a}):await O.login({email:i,password:a});Lh(z.token),t(z.user)}catch(z){h(z.message||"Something went wrong.")}finally{f(!1)}};return n.jsx("div",{style:Qt.page,children:n.jsxs("form",{style:Qt.card,onSubmit:k,children:[n.jsxs("div",{style:Qt.brand,children:[n.jsx("div",{style:Qt.logo,children:"B"}),n.jsx("span",{style:Qt.brandName,children:"Anvil"})]}),n.jsx("h1",{style:Qt.title,children:w?"Create your account":"Welcome back"}),n.jsx("p",{style:Qt.sub,children:w?"Start forging your days.":"Sign in to continue."}),w&&n.jsxs("label",{style:Qt.field,children:[n.jsx("span",{style:Qt.label,children:"Name"}),n.jsx("input",{value:o,onChange:j=>s(j.target.value),placeholder:"Your name",style:Qt.input,autoFocus:!0})]}),n.jsxs("label",{style:Qt.field,children:[n.jsx("span",{style:Qt.label,children:"Email"}),n.jsx("input",{type:"email",value:i,onChange:j=>l(j.target.value),placeholder:"you@example.com",style:Qt.input,autoFocus:!w})]}),n.jsxs("label",{style:Qt.field,children:[n.jsx("span",{style:Qt.label,children:"Password"}),n.jsx("input",{type:"password",value:a,onChange:j=>d(j.target.value),placeholder:"••••••••",style:Qt.input})]}),g&&n.jsx("div",{style:Qt.error,children:g}),n.jsx("button",{type:"submit",disabled:y,style:{...Qt.submit,...y?{opacity:.6}:{}},children:y?"Please wait…":w?"Create account":"Sign in"}),n.jsxs("div",{style:Qt.switch,children:[w?"Already have an account?":"New here?"," ",n.jsx("button",{type:"button",onClick:()=>{r(w?"login":"register"),h("")},style:Qt.link,children:w?"Sign in":"Create one"})]})]})})}const Qt={page:{minHeight:"100vh",display:"grid",placeItems:"center",background:"var(--bg)",fontFamily:"'Inter',system-ui,sans-serif",padding:20},card:{width:"100%",maxWidth:380,background:"var(--surface)",borderRadius:16,padding:"32px 28px",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",display:"flex",flexDirection:"column"},brand:{display:"flex",alignItems:"center",gap:9,marginBottom:20},logo:{width:32,height:32,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},brandName:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},title:{fontSize:22,fontWeight:700,margin:"0 0 4px",fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},sub:{fontSize:13.5,color:"var(--text-3)",margin:"0 0 22px"},field:{display:"flex",flexDirection:"column",gap:5,marginBottom:14},label:{fontSize:12,fontWeight:600,color:"var(--text-2)"},input:{border:"1px solid var(--border)",borderRadius:9,padding:"11px 12px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)"},error:{background:"rgba(194,83,107,0.10)",color:"#C2536B",fontSize:13,padding:"9px 12px",borderRadius:8,marginBottom:14,fontWeight:500},submit:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"12px",borderRadius:10,fontSize:14.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},switch:{fontSize:13,color:"var(--text-2)",textAlign:"center",marginTop:18},link:{border:"none",background:"none",color:"#3A7CA5",fontWeight:700,cursor:"pointer",fontFamily:"inherit",fontSize:13,padding:0}},jc=["Salary","Stocks","Business","Interest","Rent","Gift","Other"],Sc=["Bills","EMI","Rent","Food","Shopping","Transport","Health","Entertainment","Education","Other"],i0={Salary:"#4C9A6B",Stocks:"#3A7CA5",Business:"#C9A227",Interest:"#8268B0",Gift:"#C2773B",Bills:"#C2536B",EMI:"#A23E57",Food:"#E08E45",Shopping:"#8268B0",Transport:"#3A7CA5",Health:"#4C9A6B",Entertainment:"#C9A227",Education:"#5B7C99",Rent:"#5B8C5A",Other:"#9A968C"},kp=t=>i0[t]||"#9A968C",Ze="#3E9E6B",qe="#D1556E",mo=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,To=mo(new Date),l0=[{id:"month",label:"This month"},{id:"last",label:"Last month"},{id:"year",label:"This year"},{id:"all",label:"All time"}];function a0(t){const e=new Date;return t==="month"?[mo(new Date(e.getFullYear(),e.getMonth(),1)),To]:t==="last"?[mo(new Date(e.getFullYear(),e.getMonth()-1,1)),mo(new Date(e.getFullYear(),e.getMonth(),0))]:t==="year"?[mo(new Date(e.getFullYear(),0,1)),To]:["0000-01-01","9999-12-31"]}function d0(){const t=xp(),[e,r]=b.useState("overview"),[o,s]=b.useState([]),[i,l]=b.useState(!1),a=b.useCallback(()=>O.getTxns().then(g=>{s(g),l(!0)}).catch(()=>l(!0)),[]);b.useEffect(()=>{a()},[a]);const d=g=>Ea(g,t.code);return n.jsxs("div",{style:B.page,children:[n.jsxs("div",{style:B.head,children:[n.jsx("div",{style:B.eyebrow,children:"Anvil · Vault"}),n.jsx("h1",{style:B.h1,children:"Vault"}),n.jsx("div",{style:B.subhead,children:"Your money — what comes in, what goes out, and where it's headed."})]}),n.jsx("div",{style:B.tabs,children:[["overview","Overview",gh],["money","Money",Mh],["calc","Calculators",ah]].map(([g,h,y])=>n.jsxs("button",{onClick:()=>r(g),style:{...B.tab,...e===g?B.tabOn:{}},children:[n.jsx(y,{size:15})," ",h]},g))}),e==="overview"&&n.jsx(g0,{txns:o,loaded:i,money:d,cur:t}),e==="money"&&n.jsx(u0,{txns:o,reload:a,money:d}),e==="calc"&&n.jsx(b0,{money:d,cur:t})]})}function g0({txns:t,loaded:e,money:r,cur:o}){const[s,i]=b.useState("month"),[l,a]=a0(s),d=b.useMemo(()=>t.filter(j=>j.date>=l&&j.date<=a),[t,l,a]),g=d.filter(j=>j.kind==="income"),h=d.filter(j=>j.kind==="expense"),y=g.reduce((j,z)=>j+z.amount,0),f=h.reduce((j,z)=>j+z.amount,0),w=y-f,k=j=>{const z={};return j.forEach(p=>{z[p.category]=(z[p.category]||0)+p.amount}),Object.entries(z).map(([p,c])=>({category:p,amount:c})).sort((p,c)=>c.amount-p.amount)};return n.jsxs(n.Fragment,{children:[n.jsx("div",{style:B.presetRow,children:l0.map(j=>n.jsx("button",{onClick:()=>i(j.id),style:{...B.preset,...s===j.id?B.presetOn:{}},children:j.label},j.id))}),n.jsxs("div",{style:B.sumGrid,children:[n.jsx(kl,{icon:n.jsx(ya,{size:16}),label:"Income",value:r(y),color:Ze}),n.jsx(kl,{icon:n.jsx(va,{size:16}),label:"Expenses",value:r(f),color:qe}),n.jsx(kl,{icon:w>=0?n.jsx(up,{size:16}):n.jsx(cp,{size:16}),label:"Net savings",value:r(w),color:w>=0?Ze:qe})]}),e?d.length===0?n.jsx("div",{style:B.card,children:n.jsxs("div",{style:B.muted,children:["No transactions in this period. Add some under the ",n.jsx("b",{children:"Money"})," tab."]})}):n.jsxs(n.Fragment,{children:[n.jsx(c0,{totalIn:y,totalOut:f}),n.jsxs("div",{style:B.twoCol,children:[n.jsx(Cc,{title:"Incoming",subtitle:"Where your money comes from",total:y,data:k(g),accent:Ze,cur:o}),n.jsx(Cc,{title:"Outgoing",subtitle:"Where your money goes",total:f,data:k(h),accent:qe,cur:o})]})]}):n.jsx("div",{style:B.muted,children:"Loading…"})]})}function kl({icon:t,label:e,value:r,color:o}){return n.jsxs("div",{style:B.sumCard,children:[n.jsx("div",{style:{...B.sumIcon,color:o,background:o+"1A"},children:t}),n.jsx("div",{style:B.sumLabel,children:e}),n.jsx("div",{style:{...B.sumVal,color:o},children:r})]})}function Cc({title:t,subtitle:e,total:r,data:o,accent:s,cur:i}){let l=0;const a=o.map(g=>{const h=r>0?l/r*100:0;l+=g.amount;const y=r>0?l/r*100:0;return{...g,start:h,end:y,color:kp(g.category),pct:r>0?g.amount/r*100:0}}),d=a.length?`conic-gradient(${a.map(g=>`${g.color} ${g.start}% ${g.end}%`).join(", ")})`:"var(--surface-2)";return n.jsxs("div",{style:B.card,children:[n.jsxs("div",{style:B.cardTitleRow,children:[n.jsxs("div",{children:[n.jsx("div",{style:{...B.cardTitle,color:s},children:t}),n.jsx("div",{style:B.cardSub,children:e})]}),n.jsx("div",{style:{...B.cardTotal,color:s},children:Ea(r,i.code)})]}),o.length===0?n.jsx("div",{style:B.muted,children:"Nothing logged."}):n.jsxs("div",{style:B.pieWrap,children:[n.jsxs("div",{style:B.pieChart,children:[n.jsx("div",{style:{...B.pieDisc,background:d}}),n.jsxs("div",{style:B.pieHole,children:[n.jsx("span",{style:B.pieHoleVal,children:Xy(r,i.code)}),n.jsx("span",{style:B.pieHoleLbl,children:"total"})]})]}),n.jsx("div",{style:B.pieLegend,children:a.map(g=>n.jsxs("div",{style:B.legendRow,children:[n.jsx("span",{style:{...B.dot,background:g.color}}),n.jsx("span",{style:B.legendName,children:g.category}),n.jsxs("span",{style:B.legendPct,children:[Math.round(g.pct),"%"]}),n.jsx("span",{style:B.legendAmt,children:Ea(g.amount,i.code)})]},g.category))})]})]})}function c0({totalIn:t,totalOut:e}){const r=t-e,o=t>0?r/t:0,s=t===0?0:Math.max(0,Math.min(100,Math.round(50+o*100)));let i,l,a;t===0?(i="No income logged",l="#9A968C",a="Add your income to see your financial health."):o>=.3?(i="Excellent",l="#3E9E6B",a="You're saving 30%+ of income — keep investing the surplus."):o>=.2?(i="Healthy",l="#4C9A6B",a="Solid savings rate. Consider automating a SIP with the surplus."):o>=.1?(i="Okay",l="#C9A227",a="Decent, but aim for 20%+. Trim your biggest expense category."):o>=0?(i="Tight",l="#C2773B",a="You're saving very little. Review recurring bills and EMIs."):(i="Overspending",l="#D1556E",a="You're spending more than you earn. Cut back to avoid debt.");const d=t>0?Math.min(100,Math.round(e/t*100)):0;return n.jsxs("div",{style:B.card,children:[n.jsxs("div",{style:B.cardTitleRow,children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx(fh,{size:18,color:l}),n.jsxs("div",{children:[n.jsx("div",{style:B.cardTitle,children:"Financial health"}),n.jsx("div",{style:B.cardSub,children:"Based on your savings rate this period"})]})]}),n.jsxs("div",{style:{textAlign:"right"},children:[n.jsx("div",{style:{...B.healthScore,color:l},children:t===0?"—":s}),n.jsx("div",{style:{...B.healthStatus,color:l},children:i})]})]}),n.jsx("div",{style:B.gaugeTrack,children:n.jsx("div",{style:{...B.gaugeFill,width:`${t===0?0:s}%`,background:l}})}),n.jsxs("div",{style:B.healthStats,children:[n.jsxs("div",{style:B.healthStat,children:[n.jsxs("span",{style:B.healthStatV,children:[t>0?Math.round(o*100):0,"%"]}),n.jsx("span",{style:B.healthStatL,children:"Savings rate"})]}),n.jsxs("div",{style:B.healthStat,children:[n.jsxs("span",{style:B.healthStatV,children:[d,"%"]}),n.jsx("span",{style:B.healthStatL,children:"of income spent"})]})]}),n.jsx("div",{style:{...B.tip,borderColor:l+"55",background:l+"12",color:l},children:a})]})}function u0({txns:t,reload:e,money:r}){const[o,s]=b.useState("expense"),[i,l]=b.useState(""),[a,d]=b.useState("Bills"),[g,h]=b.useState(To),[y,f]=b.useState(""),[w,k]=b.useState(null),{deleteItem:j,toasts:z,handleUndo:p,handleDismiss:c}=dn(O.deleteTxn,O.restoreTxn,e),u=o==="income"?jc:Sc,v=E=>{s(E),d(E==="income"?"Salary":"Bills")},S=async()=>{const E=parseFloat(i);!E||E<=0||(await O.createTxn({kind:o,category:a,amount:E,note:y.trim(),date:g}),l(""),f(""),e())},T=E=>k({id:E.id,kind:E.kind,amount:String(E.amount),category:E.category,date:E.date,note:E.note||""}),$=(w==null?void 0:w.kind)==="income"?jc:Sc,U=E=>k(x=>({...x,kind:E,category:$.includes(x.category)?x.category:E==="income"?"Salary":"Bills"})),R=async()=>{const E=parseFloat(w.amount);!E||E<=0||(await O.updateTxn(w.id,{kind:w.kind,category:w.category,amount:E,note:w.note.trim(),date:w.date}),k(null),e())},N=b.useMemo(()=>{const E={};return t.forEach(x=>{(E[x.date]=E[x.date]||[]).push(x)}),Object.entries(E).sort((x,G)=>G[0].localeCompare(x[0]))},[t]),C=E=>new Date(E+"T00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:B.card,children:[n.jsx("div",{style:B.cardTitle,children:"Add transaction"}),n.jsxs("div",{style:B.kindToggle,children:[n.jsxs("button",{onClick:()=>v("expense"),style:{...B.kindBtn,...o==="expense"?{background:qe,color:"#fff",borderColor:qe}:{}},children:[n.jsx(va,{size:15})," Expense"]}),n.jsxs("button",{onClick:()=>v("income"),style:{...B.kindBtn,...o==="income"?{background:Ze,color:"#fff",borderColor:Ze}:{}},children:[n.jsx(ya,{size:15})," Income"]})]}),n.jsxs("div",{style:B.formGrid,children:[n.jsx("input",{type:"number",inputMode:"decimal",placeholder:"Amount",value:i,onChange:E=>l(E.target.value),onKeyDown:E=>E.key==="Enter"&&S(),style:B.input,autoFocus:!0}),n.jsx("select",{value:a,onChange:E=>d(E.target.value),style:B.input,children:u.map(E=>n.jsx("option",{children:E},E))}),n.jsx("input",{type:"date",value:g,max:To,onChange:E=>h(E.target.value),style:B.input})]}),n.jsx("input",{placeholder:"Note (optional)",value:y,onChange:E=>f(E.target.value),onKeyDown:E=>E.key==="Enter"&&S(),style:{...B.input,marginTop:8}}),n.jsxs("button",{onClick:S,style:{...B.addBtn,background:o==="income"?Ze:qe},children:[n.jsx(ge,{size:15})," Add ",o]})]}),n.jsxs("div",{style:B.card,children:[n.jsx("div",{style:B.cardTitle,children:"History"}),N.length===0?n.jsx("div",{style:B.muted,children:"No transactions yet."}):n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:N.map(([E,x])=>n.jsxs("div",{children:[n.jsx("div",{style:B.dateHead,children:C(E)}),x.map(G=>(w==null?void 0:w.id)===G.id?n.jsxs("div",{style:B.editTxn,children:[n.jsxs("div",{style:B.kindToggle,children:[n.jsxs("button",{onClick:()=>U("expense"),style:{...B.kindBtn,...w.kind==="expense"?{background:qe,color:"#fff",borderColor:qe}:{}},children:[n.jsx(va,{size:14})," Expense"]}),n.jsxs("button",{onClick:()=>U("income"),style:{...B.kindBtn,...w.kind==="income"?{background:Ze,color:"#fff",borderColor:Ze}:{}},children:[n.jsx(ya,{size:14})," Income"]})]}),n.jsxs("div",{style:B.formGrid,children:[n.jsx("input",{type:"number",inputMode:"decimal",value:w.amount,onChange:dt=>k({...w,amount:dt.target.value}),style:B.input}),n.jsx("select",{value:w.category,onChange:dt=>k({...w,category:dt.target.value}),style:B.input,children:$.map(dt=>n.jsx("option",{children:dt},dt))}),n.jsx("input",{type:"date",value:w.date,max:To,onChange:dt=>k({...w,date:dt.target.value}),style:B.input})]}),n.jsx("input",{placeholder:"Note (optional)",value:w.note,onChange:dt=>k({...w,note:dt.target.value}),onKeyDown:dt=>dt.key==="Enter"&&R(),style:{...B.input,marginTop:8}}),n.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[n.jsxs("button",{onClick:()=>k(null),style:B.editCancel,children:[n.jsx(kt,{size:14})," Cancel"]}),n.jsxs("button",{onClick:R,style:{...B.addBtn,marginTop:0,flex:1,background:w.kind==="income"?Ze:qe},children:[n.jsx(zt,{size:15})," Save"]})]})]},G.id):n.jsxs("div",{style:B.txnRow,children:[n.jsx("span",{style:{...B.txnDot,background:kp(G.category)}}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:B.txnCat,children:G.category}),G.note&&n.jsx("div",{style:B.txnNote,children:G.note})]}),n.jsxs("span",{style:{...B.txnAmt,color:G.kind==="income"?Ze:qe},children:[G.kind==="income"?"+":"−",r(G.amount)]}),n.jsx("button",{onClick:()=>T(G),style:B.delBtn,children:n.jsx(ke,{size:13})}),n.jsx("button",{onClick:()=>j(G.id,G.category),style:B.delBtn,children:n.jsx(kt,{size:14})})]},G.id))]},E))})]}),n.jsx(gn,{toasts:z,onUndo:p,onDismiss:c})]})}function b0({money:t,cur:e}){return n.jsxs(n.Fragment,{children:[n.jsx(p0,{money:t,cur:e}),n.jsx(f0,{money:t,cur:e})]})}function Kr({label:t,value:e,set:r,min:o,max:s,step:i,suffix:l}){return n.jsxs("div",{style:B.field,children:[n.jsxs("div",{style:B.fieldTop,children:[n.jsx("span",{style:B.fieldLabel,children:t}),n.jsxs("div",{style:B.fieldInputWrap,children:[n.jsx("input",{type:"number",value:e,onChange:a=>r(a.target.value),style:B.fieldInput}),l&&n.jsx("span",{style:B.fieldSuffix,children:l})]})]}),n.jsx("input",{type:"range",min:o,max:s,step:i,value:e,onChange:a=>r(a.target.value),style:B.range})]})}function p0({money:t,cur:e}){const[r,o]=b.useState(3e4),[s,i]=b.useState(12),[l,a]=b.useState(15),{invested:d,futureValue:g,gains:h,yearly:y}=b.useMemo(()=>{const w=Math.max(0,parseFloat(r)||0),k=Math.max(0,parseFloat(s)||0),j=Math.max(0,Math.min(60,parseInt(l)||0)),z=k/12/100,p=S=>S<=0?0:z===0?w*S:w*((Math.pow(1+z,S)-1)/z)*(1+z),c=[];for(let S=1;S<=j;S++)c.push({year:S,invested:w*12*S,value:p(S*12)});const u=p(j*12),v=w*12*j;return{invested:v,futureValue:u,gains:u-v,yearly:c}},[r,s,l]),f=Math.max(1,...y.map(w=>w.value));return n.jsxs("div",{style:B.card,children:[n.jsx("div",{style:B.cardTitleRow,children:n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx(zh,{size:18,color:"#3A7CA5"}),n.jsxs("div",{children:[n.jsx("div",{style:B.cardTitle,children:"SIP projection"}),n.jsx("div",{style:B.cardSub,children:"Mutual fund / SIP future value"})]})]})}),n.jsx(Kr,{label:"Monthly investment",value:r,set:o,min:500,max:5e5,step:500,suffix:e.symbol}),n.jsx(Kr,{label:"Expected return (p.a.)",value:s,set:i,min:1,max:30,step:.5,suffix:"%"}),n.jsx(Kr,{label:"Time period",value:l,set:a,min:1,max:40,step:1,suffix:"yrs"}),n.jsxs("div",{style:B.resultHero,children:[n.jsx("div",{style:B.resultLabel,children:"Projected wealth"}),n.jsx("div",{style:{...B.resultVal,color:"#3A7CA5"},children:t(g)})]}),n.jsxs("div",{style:B.splitRow,children:[n.jsxs("div",{style:B.splitItem,children:[n.jsx("span",{style:B.splitV,children:t(d)}),n.jsx("span",{style:B.splitL,children:"Invested"})]}),n.jsxs("div",{style:B.splitItem,children:[n.jsx("span",{style:{...B.splitV,color:"#3E9E6B"},children:t(h)}),n.jsx("span",{style:B.splitL,children:"Est. returns"})]})]}),y.length>0&&n.jsxs("div",{style:B.chartWrap,children:[n.jsx("div",{style:B.chartBars,children:y.map(w=>n.jsx("div",{style:B.chartCol,title:`Year ${w.year}: ${t(w.value)}`,children:n.jsx("div",{style:{...B.chartStack,height:`${w.value/f*100}%`},children:n.jsx("div",{style:{...B.chartGain,height:`${(1-w.invested/w.value)*100}%`}})})},w.year))}),n.jsxs("div",{style:B.chartAxis,children:[n.jsx("span",{children:"Yr 1"}),n.jsxs("span",{style:{marginLeft:"auto"},children:["Yr ",y.length]})]}),n.jsxs("div",{style:B.legend,children:[n.jsxs("span",{style:B.legendItem,children:[n.jsx("span",{style:{...B.legendDot,background:"#9DBFD6"}})," Invested"]}),n.jsxs("span",{style:B.legendItem,children:[n.jsx("span",{style:{...B.legendDot,background:"#3E9E6B"}})," Returns"]})]})]})]})}function Ic(t,e,r,o=0,s=0){let i=Math.max(0,t-s),l=0,a=0,d=s;const g=1200;for(;i>.01&&a<g;){const h=i*e;let y=r+o,f=y-h;if(f<=0)return{months:1/0,totalInterest:1/0,totalPaid:1/0};f>i&&(f=i,y=i+h),i-=f,l+=h,d+=y,a++}return{months:a,totalInterest:l,totalPaid:d}}const zc=t=>{if(!isFinite(t))return"—";const e=Math.floor(t/12),r=t%12;return(e?`${e}y `:"")+`${r}m`},m0=t=>{if(!isFinite(t))return"—";const e=new Date;return e.setMonth(e.getMonth()+t),e.toLocaleDateString("en-US",{month:"short",year:"numeric"})};function f0({money:t,cur:e}){const[r,o]=b.useState(2e6),[s,i]=b.useState(9),[l,a]=b.useState(20),[d,g]=b.useState(5e5),[h,y]=b.useState("once"),[f,w]=b.useState("tenure"),k=b.useMemo(()=>{const u=Math.max(0,parseFloat(r)||0),v=Math.max(0,parseFloat(s)||0)/12/100,S=Math.max(1,Math.round((parseFloat(l)||0)*12)),T=v===0?u/S:u*v*Math.pow(1+v,S)/(Math.pow(1+v,S)-1);return{P:u,i:v,n:S,emi:T,totalPay:T*S,totalInterest:T*S-u}},[r,s,l]),j=h==="monthly"?"tenure":f,z=b.useMemo(()=>{const{P:u,i:v,n:S,emi:T,totalInterest:$}=k,U=Math.max(0,parseFloat(d)||0);if(U<=0)return null;let R=T,N=S,C=$,E=k.totalPay;if(h==="once"&&j==="emi"){const x=Math.max(0,u-U);R=v===0?x/S:x*v*Math.pow(1+v,S)/(Math.pow(1+v,S)-1),N=S,C=R*S-x,E=U+R*S}else if(h==="once"){const x=Ic(u,v,T,0,U);N=x.months,C=x.totalInterest,E=x.totalPaid}else{const x=Ic(u,v,T,U,0);N=x.months,C=x.totalInterest,E=x.totalPaid}return{newEMI:R,newMonths:N,newInterest:C,totalPaid:E,interestSaved:Math.max(0,$-C),monthsSaved:Math.max(0,S-(isFinite(N)?N:S))}},[k,d,h,j]),p=k.totalPay>0?k.P/k.totalPay*100:0,c=h==="once"?Math.max(1e5,Math.round(k.P)):Math.max(5e4,Math.round(k.emi*3));return n.jsxs("div",{style:B.card,children:[n.jsx("div",{style:B.cardTitleRow,children:n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx(rp,{size:18,color:"#C2536B"}),n.jsxs("div",{children:[n.jsx("div",{style:B.cardTitle,children:"EMI calculator"}),n.jsx("div",{style:B.cardSub,children:"Loan / mortgage monthly payment"})]})]})}),n.jsx(Kr,{label:"Loan amount",value:r,set:o,min:5e4,max:5e7,step:5e4,suffix:e.symbol}),n.jsx(Kr,{label:"Interest rate (p.a.)",value:s,set:i,min:1,max:24,step:.1,suffix:"%"}),n.jsx(Kr,{label:"Tenure",value:l,set:a,min:1,max:30,step:1,suffix:"yrs"}),n.jsxs("div",{style:B.resultHero,children:[n.jsx("div",{style:B.resultLabel,children:"Monthly EMI"}),n.jsx("div",{style:{...B.resultVal,color:"#C2536B"},children:t(k.emi)})]}),n.jsxs("div",{style:B.emiSplitTrack,children:[n.jsx("div",{style:{width:`${p}%`,background:"#5B7C99",height:"100%"}}),n.jsx("div",{style:{width:`${100-p}%`,background:"#C2536B",height:"100%"}})]}),n.jsxs("div",{style:B.splitRow,children:[n.jsxs("div",{style:B.splitItem,children:[n.jsx("span",{style:{...B.splitV,color:"#5B7C99"},children:t(k.P)}),n.jsx("span",{style:B.splitL,children:"Principal"})]}),n.jsxs("div",{style:B.splitItem,children:[n.jsx("span",{style:{...B.splitV,color:"#C2536B"},children:t(k.totalInterest)}),n.jsx("span",{style:B.splitL,children:"Total interest"})]}),n.jsxs("div",{style:B.splitItem,children:[n.jsx("span",{style:B.splitV,children:t(k.totalPay)}),n.jsx("span",{style:B.splitL,children:"Total payable"})]})]}),n.jsx("div",{style:B.subDivider}),n.jsx("div",{style:B.subTitle,children:"Prepayment planner"}),n.jsx("div",{style:B.cardSub,children:"See what an extra payment does to your loan."}),n.jsx("div",{style:{marginTop:14},children:n.jsx(Kr,{label:"Prepayment amount",value:d,set:g,min:0,max:c,step:h==="once"?25e3:1e3,suffix:e.symbol})}),n.jsxs("div",{style:B.segGroup,children:[n.jsx("span",{style:B.segLbl,children:"Type"}),n.jsxs("div",{style:B.segRow,children:[n.jsx(Is,{label:"One-time",on:h==="once",onClick:()=>y("once")}),n.jsx(Is,{label:"Every month",on:h==="monthly",onClick:()=>y("monthly")})]})]}),n.jsxs("div",{style:B.segGroup,children:[n.jsx("span",{style:B.segLbl,children:"Strategy"}),n.jsxs("div",{style:B.segRow,children:[n.jsx(Is,{label:"Reduce tenure",on:j==="tenure",onClick:()=>w("tenure")}),n.jsx(Is,{label:"Reduce EMI",on:j==="emi",disabled:h==="monthly",onClick:()=>w("emi")})]})]}),h==="monthly"&&n.jsx("div",{style:B.note,children:"An extra monthly payment always shortens the tenure. Switch to a one-time prepayment to reduce your EMI instead."}),z?n.jsxs("div",{style:B.cmpCard,children:[n.jsxs("div",{style:B.cmpRow,children:[n.jsx("span",{style:B.cmpLbl,children:"New EMI"}),n.jsxs("span",{style:B.cmpVal,children:[t(z.newEMI),z.newEMI<k.emi-1&&n.jsxs("span",{style:B.cmpWas,children:[" was ",t(k.emi)]})]})]}),n.jsxs("div",{style:B.cmpRow,children:[n.jsx("span",{style:B.cmpLbl,children:"New tenure"}),n.jsxs("span",{style:B.cmpVal,children:[zc(z.newMonths)," ",n.jsxs("span",{style:B.cmpWas,children:["· paid off ",m0(z.newMonths)]})]})]}),n.jsxs("div",{style:B.cmpRow,children:[n.jsx("span",{style:B.cmpLbl,children:"Total interest"}),n.jsx("span",{style:B.cmpVal,children:t(z.newInterest)})]}),n.jsxs("div",{style:B.cmpRow,children:[n.jsx("span",{style:B.cmpLbl,children:"Total payable"}),n.jsx("span",{style:B.cmpVal,children:t(z.totalPaid)})]}),n.jsxs("div",{style:B.saveRow,children:["You save ",t(z.interestSaved)," in interest",z.monthsSaved>0?` · ${zc(z.monthsSaved)} sooner`:""]})]}):n.jsx("div",{style:B.muted,children:"Enter a prepayment amount to see the impact."})]})}function Is({label:t,on:e,onClick:r,disabled:o}){return n.jsx("button",{onClick:o?void 0:r,disabled:o,style:{...B.seg,...e?B.segOn:{},...o?B.segDisabled:{}},children:t})}const B={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},tabs:{display:"flex",gap:7,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},presetRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},preset:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},presetOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},sumGrid:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:16},sumCard:{background:"var(--surface)",borderRadius:14,padding:"14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},sumIcon:{width:30,height:30,borderRadius:9,display:"grid",placeItems:"center",marginBottom:8},sumLabel:{fontSize:11.5,color:"var(--text-3)",fontWeight:600},sumVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2,letterSpacing:"-0.01em",wordBreak:"break-word"},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},cardTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},twoCol:{display:"grid",gridTemplateColumns:"1fr",gap:0},dot:{width:10,height:10,borderRadius:3,flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:160,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},healthScore:{fontSize:32,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1},healthStatus:{fontSize:12.5,fontWeight:700,marginTop:2},gaugeTrack:{height:10,background:"var(--surface-2)",borderRadius:6,overflow:"hidden",marginBottom:14},gaugeFill:{height:"100%",borderRadius:6,transition:"width 0.4s"},healthStats:{display:"flex",gap:24,marginBottom:12},healthStat:{display:"flex",flexDirection:"column"},healthStatV:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},healthStatL:{fontSize:11,color:"var(--text-3)",fontWeight:600},tip:{fontSize:12.5,lineHeight:1.5,padding:"10px 12px",borderRadius:10,border:"1px solid",fontWeight:500},kindToggle:{display:"flex",gap:8,marginBottom:12},kindBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},formGrid:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},input:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},addBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},dateHead:{fontSize:11,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8},txnRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},txnDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},txnCat:{fontSize:13.5,fontWeight:600},txnNote:{fontSize:11.5,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},txnAmt:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},editTxn:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:12,margin:"6px 0"},editCancel:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},field:{marginBottom:16},fieldTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},fieldLabel:{fontSize:13,fontWeight:600,color:"var(--text-2)"},fieldInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:8,padding:"5px 10px",background:"var(--surface-2)"},fieldInput:{border:"none",background:"none",outline:"none",width:90,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},fieldSuffix:{fontSize:12,color:"var(--text-3)",fontWeight:600},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},resultHero:{textAlign:"center",padding:"14px 0 6px"},resultLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},resultVal:{fontSize:34,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,wordBreak:"break-word"},splitRow:{display:"flex",gap:10,marginTop:10},splitItem:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",background:"var(--surface-2)",borderRadius:10,padding:"10px 6px"},splitV:{fontSize:14.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",wordBreak:"break-word"},splitL:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:2},chartWrap:{marginTop:18},chartBars:{display:"flex",alignItems:"flex-end",gap:3,height:90},chartCol:{flex:1,height:"100%",display:"flex",alignItems:"flex-end"},chartStack:{width:"100%",background:"#9DBFD6",borderRadius:"3px 3px 0 0",minHeight:2,position:"relative",display:"flex",flexDirection:"column",justifyContent:"flex-start"},chartGain:{width:"100%",background:"#3E9E6B",borderRadius:"3px 3px 0 0"},chartAxis:{display:"flex",fontSize:10,color:"var(--text-3)",fontWeight:600,marginTop:6},legend:{display:"flex",gap:16,justifyContent:"center",marginTop:10},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)",fontWeight:600},legendDot:{width:10,height:10,borderRadius:3},emiSplitTrack:{display:"flex",height:12,borderRadius:6,overflow:"hidden",marginTop:16,border:"1px solid var(--border)"},subDivider:{height:1,background:"var(--border)",margin:"20px 0 14px"},subTitle:{fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},segGroup:{marginBottom:12},segLbl:{fontSize:12,fontWeight:600,color:"var(--text-3)",display:"block",marginBottom:6},segRow:{display:"flex",gap:8},seg:{flex:1,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},segOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},segDisabled:{opacity:.4,cursor:"not-allowed"},note:{fontSize:12,lineHeight:1.5,color:"var(--text-3)",background:"var(--surface-2)",borderRadius:9,padding:"9px 11px",marginBottom:12},cmpCard:{background:"var(--surface-2)",borderRadius:12,padding:"12px 14px",marginTop:4},cmpRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"6px 0",borderBottom:"1px solid var(--border)",gap:10},cmpLbl:{fontSize:12.5,color:"var(--text-2)",fontWeight:600},cmpVal:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",textAlign:"right"},cmpWas:{fontSize:11,color:"var(--text-3)",fontWeight:500,fontFamily:"'Inter',system-ui,sans-serif"},saveRow:{marginTop:12,background:"rgba(62,158,107,0.12)",color:"#3E9E6B",borderRadius:9,padding:"10px 12px",fontSize:13,fontWeight:700,textAlign:"center"}},Ba=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],wl={Monday:"Mon",Tuesday:"Tue",Wednesday:"Wed",Thursday:"Thu",Friday:"Fri",Saturday:"Sat",Sunday:"Sun"},fo=()=>Ba[(new Date().getDay()+6)%7],ir={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},Tc=Object.keys(ir),jl=21,Ec="kickstart_tags",Sl=t=>{if(!t)return"";const e=t.trim();if(/^[A-Za-z0-9_-]{11}$/.test(e))return e;const r=e.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return r?r[1]:""},Bc=t=>{if(!t||!String(t).trim())return null;const e=String(t).split(":").map(r=>parseInt(r.trim(),10));return e.some(r=>isNaN(r)||r<0)?null:e.reduce((r,o)=>r*60+o,0)},zs=t=>{if(t==null)return"";const e=Math.max(0,t|0);return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`},h0=t=>`https://www.youtube.com/embed/${t.youtube_id}?start=${t.start_sec||0}`+(t.end_sec?`&end=${t.end_sec}`:"")+"&autoplay=1&rel=0",y0=()=>({id:null,url:"",title:"",start:"",end:"",days:[fo()],pillars:[],customs:[]});function v0(){const[t,e]=b.useState([]),[r,o]=b.useState([]),[s,i]=b.useState(!1),[l,a]=b.useState({type:"day",value:fo()}),[d,g]=b.useState(null),[h,y]=b.useState(null),[f,w]=b.useState(""),k=b.useCallback(async()=>{try{const[x,G]=await Promise.all([O.getKickstart(),O.getSetting(Ec)]);e(x),o(Array.isArray(G==null?void 0:G.value)?G.value:[])}catch{}i(!0)},[]);b.useEffect(()=>{k()},[k]);const{deleteItem:j,toasts:z,handleUndo:p,handleDismiss:c}=dn(O.deleteKickstart,O.restoreKickstart,k);b.useEffect(()=>{if(!h)return;const x=t.find(A=>A.id===h);if(!x)return;const G=x.end_sec?Math.max(1,x.end_sec-(x.start_sec||0)):1/0;let dt=0;const Z=10,D=setInterval(()=>{if(document.hidden)return;const A=G-dt;if(A<=0){clearInterval(D);return}const M=Math.min(Z,A);dt+=M,O.addScreenTime("kickstart",Math.round(M)).catch(()=>{})},Z*1e3);return()=>clearInterval(D)},[h,t]);const u=x=>{o(x),O.setSetting(Ec,x).catch(()=>{})},v=()=>{const x=f.trim();!x||r.length>=jl||r.includes(x)||(u([...r,x]),g(G=>G&&!G.customs.includes(x)?{...G,customs:[...G.customs,x]}:G),w(""))},S=x=>u(r.filter(G=>G!==x)),T=(x,G)=>g(dt=>({...dt,[x]:dt[x].includes(G)?dt[x].filter(Z=>Z!==G):[...dt[x],G]})),$=x=>g({id:x.id,url:`https://youtu.be/${x.youtube_id}`,title:x.title,start:zs(x.start_sec),end:x.end_sec?zs(x.end_sec):"",days:[...x.days],pillars:[...x.pillars],customs:[...x.customs]}),U=async()=>{const x=Sl(d.url);if(!x||d.days.length===0||!d.title.trim())return;const G={youtube_id:x,title:d.title.trim(),start_sec:Bc(d.start)||0,end_sec:Bc(d.end),days:d.days,pillars:d.pillars,customs:d.customs};d.id?await O.updateKickstart(d.id,G):await O.createKickstart(G),g(null),k()},R=b.useMemo(()=>t.filter(x=>l.type==="all"?!0:l.type==="day"?x.days.includes(l.value):l.type==="pillar"?x.pillars.includes(l.value):l.type==="custom"?x.customs.includes(l.value):!0),[t,l]),N=(x,G)=>l.type===x&&l.value===G,C=d?[!Sl(d.url)&&"a valid YouTube link",!d.title.trim()&&"a title",d.days.length===0&&"at least one day"].filter(Boolean):[],E=!!d&&C.length===0;return n.jsxs("div",{style:tt.page,children:[n.jsxs("div",{style:tt.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:tt.eyebrow,children:"Anvil · Kickstart"}),n.jsx("h1",{style:tt.h1,children:"Kickstart"}),n.jsxs("div",{style:tt.subhead,children:["Your motivation hub — the right push for ",fo(),"."]})]}),!d&&n.jsxs("button",{onClick:()=>g(y0()),style:tt.addBtn,children:[n.jsx(ge,{size:15})," Add video"]})]}),d&&n.jsxs("div",{style:tt.card,children:[n.jsx("div",{style:tt.cardTitle,children:d.id?"Edit video":"Add video"}),n.jsx("input",{placeholder:"YouTube link (or video ID)",value:d.url,onChange:x=>g({...d,url:x.target.value}),style:tt.input,autoFocus:!0}),d.url&&!Sl(d.url)&&n.jsx("div",{style:tt.warn,children:"Couldn't find a YouTube video ID in that link."}),n.jsx("input",{placeholder:"Title (required)",value:d.title,onChange:x=>g({...d,title:x.target.value}),style:{...tt.input,marginTop:8}}),n.jsxs("div",{style:tt.trimRow,children:[n.jsx(Eh,{size:15,color:"var(--text-3)"}),n.jsxs("label",{style:tt.trimField,children:[n.jsx("span",{style:tt.trimLbl,children:"Start"}),n.jsx("input",{placeholder:"0:30",value:d.start,onChange:x=>g({...d,start:x.target.value}),style:tt.trimInput})]}),n.jsx("span",{style:tt.trimArrow,children:"→"}),n.jsxs("label",{style:tt.trimField,children:[n.jsx("span",{style:tt.trimLbl,children:"End"}),n.jsx("input",{placeholder:"end (optional)",value:d.end,onChange:x=>g({...d,end:x.target.value}),style:tt.trimInput})]})]}),n.jsx("div",{style:tt.hint,children:"Only this trimmed part plays. Use m:ss (e.g. 1:30). Leave End blank to play to the end."}),n.jsxs("div",{style:tt.tagBlock,children:[n.jsxs("div",{style:tt.tagLabel,children:["Days ",n.jsx("span",{style:tt.req,children:"required"})]}),n.jsx("div",{style:tt.chipRow,children:Ba.map(x=>n.jsx("button",{onClick:()=>T("days",x),style:{...tt.chip,...d.days.includes(x)?tt.chipOnDark:{}},children:wl[x]},x))})]}),n.jsxs("div",{style:tt.tagBlock,children:[n.jsxs("div",{style:tt.tagLabel,children:["Pillars ",n.jsx("span",{style:tt.opt,children:"optional"})]}),n.jsx("div",{style:tt.chipRow,children:Tc.map(x=>{const G=d.pillars.includes(x);return n.jsxs("button",{onClick:()=>T("pillars",x),style:{...tt.chip,...G?{background:ir[x],color:"#fff",borderColor:ir[x]}:{}},children:[n.jsx("span",{style:{...tt.dot,background:G?"#fff":ir[x]}}),x]},x)})})]}),n.jsxs("div",{style:tt.tagBlock,children:[n.jsxs("div",{style:tt.tagLabel,children:["Custom tags ",n.jsxs("span",{style:tt.opt,children:["optional · ",r.length,"/",jl]})]}),n.jsxs("div",{style:tt.chipRow,children:[r.map(x=>n.jsxs("span",{style:{...tt.chip,...d.customs.includes(x)?tt.chipOnAccent:{},paddingRight:4},children:[n.jsx("button",{onClick:()=>T("customs",x),style:tt.chipInner,children:x}),n.jsx("button",{onClick:()=>S(x),style:tt.chipX,title:"Delete tag",children:n.jsx(kt,{size:11})})]},x)),r.length===0&&n.jsx("span",{style:tt.muted,children:"No custom tags yet."})]}),r.length<jl&&n.jsxs("div",{style:tt.newTagRow,children:[n.jsx("input",{placeholder:"New custom tag…",value:f,onChange:x=>w(x.target.value),onKeyDown:x=>x.key==="Enter"&&v(),style:{...tt.input,padding:"7px 10px"}}),n.jsx("button",{onClick:v,style:tt.smallBtn,children:n.jsx(ge,{size:14})})]})]}),!E&&n.jsxs("div",{style:tt.warn,children:["Add ",C.join(", ")," to save."]}),n.jsxs("div",{style:tt.formActions,children:[n.jsxs("button",{onClick:()=>g(null),style:tt.cancelBtn,children:[n.jsx(kt,{size:14})," Cancel"]}),n.jsxs("button",{onClick:U,disabled:!E,style:{...tt.saveBtn,...E?{}:tt.saveDisabled},children:[n.jsx(zt,{size:15})," ",d.id?"Save":"Add video"]})]})]}),n.jsxs("div",{style:tt.filterCard,children:[n.jsx("button",{onClick:()=>a({type:"all"}),style:{...tt.fChip,...l.type==="all"?tt.fChipOnDark:{}},children:"All"}),n.jsx("span",{style:tt.fDivider}),Ba.map(x=>n.jsxs("button",{onClick:()=>a({type:"day",value:x}),style:{...tt.fChip,...N("day",x)?tt.fChipOnDark:{},...x===fo()?tt.fToday:{}},children:[wl[x],x===fo()?" ·":""]},x)),n.jsx("span",{style:tt.fDivider}),Tc.map(x=>n.jsxs("button",{onClick:()=>a({type:"pillar",value:x}),style:{...tt.fChip,...N("pillar",x)?{background:ir[x],color:"#fff",borderColor:ir[x]}:{}},children:[n.jsx("span",{style:{...tt.dot,background:N("pillar",x)?"#fff":ir[x]}}),x]},x)),r.length>0&&n.jsx("span",{style:tt.fDivider}),r.map(x=>n.jsxs("button",{onClick:()=>a({type:"custom",value:x}),style:{...tt.fChip,...N("custom",x)?tt.fChipOnAccent:{}},children:[n.jsx(Rh,{size:11})," ",x]},x))]}),s?R.length===0?n.jsx("div",{style:tt.empty,children:t.length===0?"No videos yet — add your first motivation clip.":"No videos for this tag."}):n.jsx("div",{style:tt.grid,children:R.map(x=>n.jsxs("div",{style:tt.videoCard,children:[n.jsx("div",{style:tt.thumbWrap,children:h===x.id?n.jsx("iframe",{src:h0(x),title:x.title||x.youtube_id,style:tt.iframe,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):n.jsxs("button",{onClick:()=>y(x.id),style:tt.thumbBtn,children:[n.jsx("img",{src:`https://img.youtube.com/vi/${x.youtube_id}/hqdefault.jpg`,alt:"",style:tt.thumb}),n.jsx("span",{style:tt.playOverlay,children:n.jsx(lp,{size:22,color:"#fff",fill:"#fff"})}),n.jsxs("span",{style:tt.trimBadge,children:[zs(x.start_sec),x.end_sec?` – ${zs(x.end_sec)}`:"+"]})]})}),n.jsxs("div",{style:tt.videoBody,children:[n.jsx("div",{style:tt.videoTitle,children:x.title||"Untitled clip"}),n.jsxs("div",{style:tt.tagWrap,children:[x.days.map(G=>n.jsx("span",{style:tt.dayTag,children:wl[G]},G)),x.pillars.map(G=>n.jsx("span",{style:{...tt.pillTag,color:ir[G]||"var(--text-2)",borderColor:ir[G]||"var(--border)"},children:G},G)),x.customs.map(G=>n.jsx("span",{style:tt.customTag,children:G},G))]}),n.jsxs("div",{style:tt.cardActions,children:[n.jsx("button",{onClick:()=>$(x),style:tt.iconBtn,title:"Edit",children:n.jsx(ke,{size:13})}),n.jsx("button",{onClick:()=>j(x.id,x.title||"video"),style:tt.iconBtn,title:"Delete",children:n.jsx(kt,{size:14})})]})]})]},x.id))}):n.jsx("div",{style:tt.muted,children:"Loading…"}),n.jsx(gn,{toasts:z,onUndo:p,onDismiss:c})]})}const tt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:1e3,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},warn:{fontSize:11.5,color:"#C2773B",marginTop:5,fontWeight:600},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:6,lineHeight:1.4},trimRow:{display:"flex",alignItems:"flex-end",gap:10,marginTop:10},trimField:{display:"flex",flexDirection:"column",gap:4,flex:1},trimLbl:{fontSize:11,color:"var(--text-2)",fontWeight:600},trimInput:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},trimArrow:{color:"var(--text-3)",paddingBottom:9},tagBlock:{marginTop:14},tagLabel:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},req:{fontSize:10,fontWeight:700,color:"#C2536B",textTransform:"uppercase",marginLeft:6},opt:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",marginLeft:6},chipRow:{display:"flex",gap:6,flexWrap:"wrap"},chip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},chipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},chipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},chipInner:{border:"none",background:"none",color:"inherit",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,padding:0},chipX:{border:"none",background:"rgba(0,0,0,0.12)",color:"inherit",cursor:"pointer",display:"grid",placeItems:"center",borderRadius:"50%",width:16,height:16,padding:0},newTagRow:{display:"flex",gap:6,marginTop:8,maxWidth:280},smallBtn:{border:"none",background:"var(--accent)",color:"#fff",width:34,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},dot:{width:8,height:8,borderRadius:"50%",flexShrink:0,display:"inline-block"},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"var(--accent)",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},filterCard:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:12,marginBottom:18},fChip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},fChipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},fChipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},fToday:{borderColor:"var(--accent)",borderWidth:2},fDivider:{width:1,alignSelf:"stretch",background:"var(--border)",margin:"0 2px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:14},videoCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 9",background:"#000"},thumbBtn:{border:"none",padding:0,margin:0,cursor:"pointer",width:"100%",height:"100%",position:"relative",display:"block",background:"#000"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center",background:"rgba(0,0,0,0.28)"},trimBadge:{position:"absolute",bottom:8,right:8,background:"rgba(0,0,0,0.75)",color:"#fff",fontSize:11,fontWeight:700,padding:"2px 7px",borderRadius:6,fontFamily:"'Fraunces',Georgia,serif"},iframe:{width:"100%",height:"100%",border:"none",display:"block"},videoBody:{padding:"12px 13px",display:"flex",flexDirection:"column",gap:8},videoTitle:{fontSize:14,fontWeight:700},tagWrap:{display:"flex",gap:5,flexWrap:"wrap"},dayTag:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:8},pillTag:{fontSize:10,fontWeight:700,border:"1px solid",borderRadius:8,padding:"2px 7px"},customTag:{fontSize:10,fontWeight:700,color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"2px 7px",borderRadius:8},cardActions:{display:"flex",gap:4,justifyContent:"flex-end"},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},wp=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,Dc=()=>wp(new Date),Rc=(t,e)=>{const r=new Date(t+"T00:00:00");return r.setDate(r.getDate()+e),wp(r)},Fc=t=>new Date(t+"T00:00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"}),x0=t=>{if(!t)return"";const e=t.trim();if(/^[A-Za-z0-9_-]{11}$/.test(e))return e;const r=e.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return r?r[1]:""},k0=t=>new Promise((e,r)=>{const o=new FileReader;o.onload=()=>{const s=new Image;s.onload=()=>{let{width:l,height:a}=s;l>a&&l>900?(a=a*900/l,l=900):a>900&&(l=l*900/a,a=900);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(s,0,0,l,a),e(d.toDataURL("image/jpeg",.82))},s.onerror=r,s.src=o.result},o.onerror=r,o.readAsDataURL(t)});function w0(){const[t,e]=b.useState([]),[r,o]=b.useState(!1),[s,i]=b.useState(null),[l,a]=b.useState(!1),[d,g]=b.useState({title:"",image:""}),[h,y]=b.useState(""),[f,w]=b.useState(!0),[k,j]=b.useState(null),z=b.useCallback(async()=>{try{e(await O.getGoldenGoals())}catch{}o(!0)},[]);b.useEffect(()=>{z()},[z]),b.useEffect(()=>{O.getSetting("golden_music").then(S=>y(x0((S==null?void 0:S.value)||""))).catch(()=>{})},[]);const p=async()=>{if(!d.title.trim())return;const S=await O.createGolden({title:d.title.trim(),image:d.image});g({title:"",image:""}),a(!1),await z(),i(S.id)},c=async(S,T)=>{var U;const $=(U=S.target.files)==null?void 0:U[0];if($)try{T(await k0($))}catch{}},u=t.filter(S=>!S.achieved),v=t.filter(S=>S.achieved);return s?n.jsxs("div",{style:et.page,children:[n.jsx(C0,{musicId:h,on:f}),n.jsx(j0,{goalId:s,onBack:()=>i(null),onReload:z,onCelebrate:(S,T)=>j({title:S,days:T}),pickImage:c,musicId:h,musicOn:f,setMusicOn:w}),k&&n.jsx(S0,{data:k,onClose:()=>j(null)})]}):n.jsxs("div",{style:et.page,children:[n.jsxs("div",{style:et.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:et.eyebrow,children:"Anvil · Golden Book"}),n.jsx("h1",{style:et.h1,children:"Golden Book"}),n.jsx("div",{style:et.subhead,children:"Write your dreams into being — a little every day."})]}),!l&&n.jsxs("button",{onClick:()=>a(!0),style:et.addBtn,children:[n.jsx(ge,{size:15})," New dream"]})]}),l&&n.jsxs("div",{style:et.card,children:[n.jsx("div",{style:et.cardTitle,children:"Manifest a new dream"}),n.jsx("textarea",{autoFocus:!0,placeholder:"Write your dream as if it's already true…",value:d.title,onChange:S=>g({...d,title:S.target.value}),style:et.textarea}),n.jsxs("label",{style:et.photoPick,children:[d.image?n.jsx("img",{src:d.image,alt:"",style:et.photoPreview}):n.jsxs("span",{style:et.photoEmpty,children:[n.jsx(Ri,{size:18})," Add a photo"]}),n.jsx("input",{type:"file",accept:"image/*",onChange:S=>c(S,T=>g({...d,image:T})),style:{display:"none"}})]}),n.jsxs("div",{style:et.formActions,children:[n.jsxs("button",{onClick:()=>{a(!1),g({title:"",image:""})},style:et.cancelBtn,children:[n.jsx(kt,{size:14})," Cancel"]}),n.jsxs("button",{onClick:p,disabled:!d.title.trim(),style:{...et.saveBtn,...d.title.trim()?{}:et.saveDisabled},children:[n.jsx(zt,{size:15})," Create"]})]})]}),r?n.jsxs(n.Fragment,{children:[u.length===0&&v.length===0&&!l&&n.jsx("div",{style:et.empty,children:"No dreams yet. Add your first one and revisit it daily."}),u.length>0&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:et.sectionTitle,children:[n.jsx(Jo,{size:15,color:"#C9A227"})," Manifesting ",n.jsx("span",{style:et.badge,children:u.length})]}),n.jsx("div",{style:et.grid,children:u.map(S=>n.jsx(Ac,{g:S,onOpen:()=>i(S.id)},S.id))})]}),v.length>0&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{...et.sectionTitle,marginTop:22},children:[n.jsx(nn,{size:15,color:"#4C9A6B"})," Manifested ",n.jsx("span",{style:et.badge,children:v.length})]}),n.jsx("div",{style:et.grid,children:v.map(S=>n.jsx(Ac,{g:S,onOpen:()=>i(S.id),achieved:!0},S.id))})]})]}):n.jsx("div",{style:et.muted,children:"Loading…"})]})}function Ac({g:t,onOpen:e,achieved:r}){return n.jsxs("button",{onClick:e,style:{...et.goalCard,...r?{opacity:.96}:{}},children:[n.jsxs("div",{style:et.thumbWrap,children:[t.image?n.jsx("img",{src:t.image,alt:"",style:et.thumb}):n.jsx("div",{style:et.thumbEmpty,children:n.jsx(Jo,{size:26,color:"var(--text-3)"})}),r&&n.jsx("span",{style:et.stamp,children:"✦ Manifested"})]}),n.jsxs("div",{style:et.goalBody,children:[n.jsx("div",{style:et.goalTitle,children:t.title}),n.jsxs("div",{style:et.goalMeta,children:[r?n.jsxs("span",{style:{...et.metaPill,color:"#4C9A6B",background:"rgba(76,154,107,0.12)"},children:[n.jsx(nn,{size:12})," ",t.days_to_manifest!=null?`in ${t.days_to_manifest} day${t.days_to_manifest===1?"":"s"}`:"done"]}):n.jsxs("span",{style:{...et.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[n.jsx(Jn,{size:12})," ",t.streak," day streak"]}),n.jsxs("span",{style:et.metaDim,children:[t.total_days," entr",t.total_days===1?"y":"ies"]})]})]})]})}function j0({goalId:t,onBack:e,onReload:r,onCelebrate:o,pickImage:s,musicId:i,musicOn:l,setMusicOn:a}){const[d,g]=b.useState(null),[h,y]=b.useState({}),[f,w]=b.useState(Dc()),[k,j]=b.useState(""),[z,p]=b.useState(null),c=Dc(),u=b.useCallback(async()=>{const E=await O.getGoldenGoal(t);g(E);const x={};E.entries.forEach(G=>{x[G.date]=G.text}),y(x),j(x[c]||"")},[t,c]);if(b.useEffect(()=>{u()},[u]),!d)return n.jsx("div",{style:et.muted,children:"Loading…"});const v=f===c,S=f>d.created_date,T=f<c,$=async()=>{await O.upsertGoldenEntry(t,{date:c,text:k}),await u(),r()},U=async()=>{const E=await O.achieveGolden(t);o(d.title,E.days_to_manifest),await u(),r()},R=async()=>{await O.unachieveGolden(t),await u(),r()},N=async()=>{z.trim()&&(await O.updateGolden(t,{title:z.trim()}),p(null),await u(),r())},C=E=>O.updateGolden(t,{image:E}).then(()=>{u(),r()});return n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:e,style:et.backBtn,children:[n.jsx(Zb,{size:16})," All dreams"]}),n.jsxs("div",{style:et.detailHero,children:[n.jsxs("label",{style:et.heroPhoto,children:[d.image?n.jsx("img",{src:d.image,alt:"",style:et.heroImg}):n.jsxs("span",{style:et.photoEmpty,children:[n.jsx(Ri,{size:20})," Add a photo"]}),n.jsxs("span",{style:et.photoEdit,children:[n.jsx(ke,{size:12})," Edit photo"]}),n.jsx("input",{type:"file",accept:"image/*",onChange:E=>s(E,C),style:{display:"none"}})]}),n.jsxs("div",{style:et.heroInfo,children:[d.achieved&&n.jsxs("span",{style:et.heroStamp,children:["✦ Manifested",d.days_to_manifest!=null?` in ${d.days_to_manifest} day${d.days_to_manifest===1?"":"s"}`:""]}),z!==null?n.jsxs("div",{style:{display:"flex",gap:6,width:"100%"},children:[n.jsx("textarea",{autoFocus:!0,value:z,onChange:E=>p(E.target.value),style:{...et.textarea,minHeight:60}}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[n.jsx("button",{onClick:N,style:et.iconSave,children:n.jsx(zt,{size:14})}),n.jsx("button",{onClick:()=>p(null),style:et.iconCancel,children:n.jsx(kt,{size:14})})]})]}):n.jsxs("div",{style:et.heroTitleRow,children:[n.jsx("div",{style:et.heroTitle,children:d.title}),n.jsx("button",{onClick:()=>p(d.title),style:et.ghostBtn,title:"Edit",children:n.jsx(ke,{size:13})})]}),n.jsxs("div",{style:et.heroStats,children:[n.jsxs("span",{style:{...et.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[n.jsx(Jn,{size:13})," ",d.streak," day streak"]}),n.jsxs("span",{style:et.metaDim,children:[d.total_days," entr",d.total_days===1?"y":"ies"]}),n.jsxs("span",{style:et.metaDim,children:["since ",Fc(d.created_date)]})]})]})]}),n.jsxs("div",{style:et.writeCard,children:[n.jsx("div",{style:et.tuneRow,children:i?n.jsxs("button",{onClick:()=>a(E=>!E),style:{...et.tuneBtn,...l?et.tuneOn:{}},children:[l?n.jsx(sp,{size:14}):n.jsx(ip,{size:14})," Soft tunes"]}):n.jsx("span",{style:et.tuneHint,children:"Add a track in Settings → Music"})}),n.jsxs("div",{style:et.writeNav,children:[n.jsx("button",{onClick:()=>w(E=>Rc(E,-1)),disabled:!S,style:{...et.navBtn,...S?{}:et.navDisabled},children:n.jsx(Xn,{size:16})}),n.jsx("div",{style:et.writeDate,children:v?"Today":Fc(f)}),n.jsx("button",{onClick:()=>w(E=>Rc(E,1)),disabled:!T,style:{...et.navBtn,...T?{}:et.navDisabled},children:n.jsx(an,{size:16})})]}),v&&!d.achieved?n.jsxs(n.Fragment,{children:[n.jsx("textarea",{value:k,onChange:E=>j(E.target.value),placeholder:"Write it again today, as if it's already yours…",style:et.writeArea}),n.jsxs("button",{onClick:$,style:et.writeSave,children:[n.jsx(zt,{size:15})," Save today's entry"]})]}):n.jsx("div",{style:et.readEntry,children:h[f]?n.jsxs(n.Fragment,{children:[n.jsx(ap,{size:16,color:"var(--text-3)"}),n.jsx("p",{style:et.readText,children:h[f]})]}):n.jsx("div",{style:et.muted,children:"Nothing written on this day."})})]}),d.achieved?n.jsx("button",{onClick:R,style:et.unmanifestBtn,children:"Undo manifested"}):n.jsxs("button",{onClick:U,style:et.manifestBtn,children:[n.jsx(Jo,{size:16})," Mark as manifested"]})]})}function S0({data:t,onClose:e}){return n.jsx("div",{style:et.celebOverlay,onClick:e,children:n.jsxs("div",{style:et.celebBox,onClick:r=>r.stopPropagation(),children:[n.jsx("div",{style:et.celebEmoji,children:"✨🌟✨"}),n.jsx("div",{style:et.celebTitle,children:"It's happening!"}),n.jsxs("div",{style:et.celebDream,children:['"',t.title,'"']}),n.jsxs("div",{style:et.celebSub,children:[t.days!=null?`Manifested in ${t.days} day${t.days===1?"":"s"}.`:"Manifested."," The universe delivered. 🙏"]}),n.jsx("button",{onClick:e,style:et.celebBtn,children:"Wonderful"})]})})}function C0({musicId:t,on:e}){return!t||!e?null:n.jsx("iframe",{title:"golden-music",src:`https://www.youtube.com/embed/${t}?autoplay=1&loop=1&playlist=${t}&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}})}const Or="#C9A227",et={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:860,margin:"0 auto",position:"relative"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:Or,color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"11px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:70,resize:"vertical",lineHeight:1.5},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:Or,color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:12},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:14},goalCard:{textAlign:"left",border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,overflow:"hidden",cursor:"pointer",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",padding:0,fontFamily:"inherit",display:"flex",flexDirection:"column"},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 10",background:"var(--surface-2)"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},thumbEmpty:{width:"100%",height:"100%",display:"grid",placeItems:"center"},stamp:{position:"absolute",top:8,right:8,transform:"rotate(6deg)",background:"rgba(76,154,107,0.95)",color:"#fff",fontSize:11,fontWeight:800,letterSpacing:"0.04em",padding:"3px 9px",borderRadius:6,border:"1.5px solid #fff",textTransform:"uppercase"},goalBody:{padding:"11px 13px",display:"flex",flexDirection:"column",gap:8},goalTitle:{fontSize:14,fontWeight:600,lineHeight:1.35,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},goalMeta:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},metaPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:700,padding:"2px 8px",borderRadius:10},metaDim:{fontSize:11,color:"var(--text-3)",fontWeight:500},backBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginBottom:16},detailHero:{display:"flex",flexDirection:"column",gap:14,marginBottom:16},heroPhoto:{position:"relative",width:"100%",borderRadius:14,overflow:"hidden",border:"1px solid var(--border)",cursor:"pointer",background:"var(--surface-2)",display:"flex",alignItems:"center",justifyContent:"center",minHeight:120},heroImg:{width:"100%",maxHeight:"62vh",objectFit:"contain",display:"block"},photoEdit:{position:"absolute",bottom:8,right:8,display:"flex",alignItems:"center",gap:5,background:"rgba(0,0,0,0.6)",color:"#fff",fontSize:11,fontWeight:600,padding:"4px 8px",borderRadius:7},heroInfo:{display:"flex",flexDirection:"column",gap:10,alignItems:"center",textAlign:"center"},heroStamp:{alignSelf:"center",background:"rgba(76,154,107,0.14)",color:"#4C9A6B",fontSize:12,fontWeight:800,padding:"4px 10px",borderRadius:8,letterSpacing:"0.03em"},heroTitleRow:{display:"flex",alignItems:"flex-start",gap:8,justifyContent:"center"},heroTitle:{fontSize:23,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.35},heroStats:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",justifyContent:"center"},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",flexShrink:0},iconSave:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},iconCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},writeCard:{background:"var(--surface)",borderRadius:14,padding:16,border:"1px solid var(--border)",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},tuneRow:{display:"flex",justifyContent:"flex-end",marginBottom:10},tuneBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tuneOn:{background:Or,color:"#fff",borderColor:Or},tuneHint:{fontSize:11,color:"var(--text-3)",fontWeight:500},writeNav:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,marginBottom:12},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center"},navDisabled:{opacity:.35,cursor:"not-allowed"},writeDate:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:150,textAlign:"center"},writeArea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:120,resize:"vertical",lineHeight:1.6},writeSave:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",background:Or,color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},readEntry:{display:"flex",gap:8,padding:"6px 2px"},readText:{fontSize:15,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.6,margin:0,whiteSpace:"pre-wrap"},manifestBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,width:"100%",border:"none",background:"linear-gradient(135deg,#C9A227,#E0BD45)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:800,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 2px 10px rgba(201,162,39,0.35)"},unmanifestBtn:{display:"block",margin:"0 auto",border:"none",background:"none",color:"var(--text-3)",fontSize:12,fontWeight:600,cursor:"pointer",textDecoration:"underline",fontFamily:"inherit"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.6)",zIndex:200,display:"grid",placeItems:"center",padding:16},celebBox:{background:"var(--surface)",color:"var(--text)",borderRadius:20,padding:"36px 30px",textAlign:"center",maxWidth:360,boxShadow:"0 12px 48px rgba(0,0,0,0.3)"},celebEmoji:{fontSize:40,marginBottom:10},celebTitle:{fontSize:24,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginBottom:10,color:Or},celebDream:{fontSize:15,fontStyle:"italic",fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.5,marginBottom:10},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:Or,color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Cl=[{id:"meditation",label:"Meditation Hub",icon:lh,color:"#8268B0"},{id:"visualization",label:"Visualization",icon:ui,color:"#3A7CA5"}],Mc=t=>{if(!t)return"";const e=t.trim();if(/^[A-Za-z0-9_-]{11}$/.test(e))return e;const r=e.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return r?r[1]:""},I0=t=>new Promise((e,r)=>{const o=new FileReader;o.onload=()=>{const s=new Image;s.onload=()=>{let{width:l,height:a}=s;l>a&&l>1e3?(a=a*1e3/l,l=1e3):a>1e3&&(l=l*1e3/a,a=1e3);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(s,0,0,l,a),e(d.toDataURL("image/jpeg",.82))},s.onerror=r,s.src=o.result},o.onerror=r,o.readAsDataURL(t)}),z0=t=>({id:null,kind:t,title:"",url:"",image:""});function T0(){const[t,e]=b.useState("meditation"),[r,o]=b.useState([]),[s,i]=b.useState(!1),[l,a]=b.useState(null),[d,g]=b.useState(null),h=b.useCallback(async()=>{try{o(await O.getMedia())}catch{}i(!0)},[]);b.useEffect(()=>{h()},[h]);const{deleteItem:y,toasts:f,handleUndo:w,handleDismiss:k}=dn(O.deleteMedia,O.restoreMedia,h);b.useEffect(()=>{if(!d)return;const T=10,$=setInterval(()=>{document.hidden||O.addScreenTime("mindscape",T).catch(()=>{})},T*1e3);return()=>clearInterval($)},[d]);const j=Cl.find(T=>T.id===t),z=r.filter(T=>T.kind===t),p=T=>a({id:T.id,kind:T.kind,title:T.title,url:`https://youtu.be/${T.youtube_id}`,image:T.image}),c=async T=>{var U;const $=(U=T.target.files)==null?void 0:U[0];if($){try{const R=await I0($);a(N=>({...N,image:R}))}catch{}T.target.value=""}},u=l?[!l.title.trim()&&"a title",!l.image&&"an image",!Mc(l.url)&&"a valid YouTube link"].filter(Boolean):[],v=!!l&&u.length===0,S=async()=>{if(!v)return;const T={kind:l.kind,title:l.title.trim(),image:l.image,youtube_id:Mc(l.url)};l.id?await O.updateMedia(l.id,T):await O.createMedia(T),a(null),h()};return n.jsxs("div",{style:Tt.page,children:[d&&n.jsx("iframe",{title:"mindscape-audio",src:`https://www.youtube.com/embed/${d.youtube_id}?autoplay=1&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}}),n.jsxs("div",{style:Tt.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:Tt.eyebrow,children:"Anvil · Mindscape"}),n.jsx("h1",{style:Tt.h1,children:"Mindscape"}),n.jsx("div",{style:Tt.subhead,children:"Close your eyes and listen — guided meditation and visualization."})]}),!l&&n.jsxs("button",{onClick:()=>a(z0(t)),style:{...Tt.addBtn,background:j.color},children:[n.jsx(ge,{size:15})," Add"]})]}),n.jsx("div",{style:Tt.tabs,children:Cl.map(T=>{const $=T.icon,U=t===T.id;return n.jsxs("button",{onClick:()=>{e(T.id),a(null)},style:{...Tt.tab,...U?{background:T.color,color:"#fff",borderColor:T.color}:{}},children:[n.jsx($,{size:15})," ",T.label]},T.id)})}),l&&n.jsxs("div",{style:Tt.card,children:[n.jsx("div",{style:Tt.cardTitle,children:l.id?"Edit":`New ${Cl.find(T=>T.id===l.kind).label}`}),n.jsx("input",{placeholder:"YouTube link (plays as audio only)",value:l.url,onChange:T=>a({...l,url:T.target.value}),style:Tt.input,autoFocus:!0}),n.jsx("input",{placeholder:"Title (required)",value:l.title,onChange:T=>a({...l,title:T.target.value}),style:{...Tt.input,marginTop:8}}),n.jsxs("label",{style:Tt.photoPick,children:[l.image?n.jsx("img",{src:l.image,alt:"",style:Tt.photoPreview}):n.jsxs("span",{style:Tt.photoEmpty,children:[n.jsx(Ri,{size:18})," Add cover image (required)"]}),n.jsx("input",{type:"file",accept:"image/*",onChange:c,style:{display:"none"}})]}),!v&&n.jsxs("div",{style:Tt.warn,children:["Add ",u.join(", ")," to save."]}),n.jsxs("div",{style:Tt.formActions,children:[n.jsxs("button",{onClick:()=>a(null),style:Tt.cancelBtn,children:[n.jsx(kt,{size:14})," Cancel"]}),n.jsxs("button",{onClick:S,disabled:!v,style:{...Tt.saveBtn,background:v?j.color:"var(--border)",color:v?"#fff":"var(--text-3)",cursor:v?"pointer":"not-allowed"},children:[n.jsx(zt,{size:15})," ",l.id?"Save":"Add"]})]})]}),s?z.length===0?n.jsxs("div",{style:Tt.empty,children:["Nothing here yet — add a ",j.label.toLowerCase()," track."]}):n.jsx("div",{style:Tt.grid,children:z.map(T=>{const $=(d==null?void 0:d.id)===T.id;return n.jsxs("div",{style:Tt.mediaCard,children:[n.jsxs("button",{onClick:()=>g($?null:T),style:Tt.coverBtn,title:$?"Pause":"Play",children:[n.jsx("img",{src:T.image,alt:"",style:Tt.cover}),n.jsx("span",{style:{...Tt.playOverlay,background:$?"rgba(0,0,0,0.45)":"rgba(0,0,0,0.28)"},children:n.jsx("span",{style:{...Tt.playCircle,background:j.color},children:$?n.jsx(Ih,{size:20,color:"#fff",fill:"#fff"}):n.jsx(lp,{size:20,color:"#fff",fill:"#fff"})})}),$&&n.jsxs("span",{style:Tt.nowPlaying,children:[n.jsx(sp,{size:11})," Playing"]})]}),n.jsxs("div",{style:Tt.mediaBody,children:[n.jsx("div",{style:Tt.mediaTitle,children:T.title}),n.jsxs("div",{style:Tt.cardActions,children:[n.jsx("button",{onClick:()=>p(T),style:Tt.iconBtn,title:"Edit",children:n.jsx(ke,{size:13})}),n.jsx("button",{onClick:()=>{(d==null?void 0:d.id)===T.id&&g(null),y(T.id,T.title)},style:Tt.iconBtn,title:"Delete",children:n.jsx(kt,{size:14})})]})]})]},T.id)})}):n.jsx("div",{style:Tt.muted,children:"Loading…"}),n.jsx(gn,{toasts:f,onUndo:w,onDismiss:k})]})}const Tt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:900,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},tabs:{display:"flex",gap:8,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:200,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},warn:{fontSize:12,color:"#C2773B",marginTop:8,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,fontFamily:"inherit"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:16},mediaCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},coverBtn:{position:"relative",border:"none",padding:0,cursor:"pointer",display:"block",width:"100%",aspectRatio:"1",background:"var(--surface-2)"},cover:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center"},playCircle:{width:46,height:46,borderRadius:"50%",display:"grid",placeItems:"center",boxShadow:"0 2px 10px rgba(0,0,0,0.3)"},nowPlaying:{position:"absolute",bottom:8,left:8,display:"flex",alignItems:"center",gap:4,background:"rgba(0,0,0,0.65)",color:"#fff",fontSize:11,fontWeight:700,padding:"3px 8px",borderRadius:7},mediaBody:{padding:"12px 14px",display:"flex",alignItems:"flex-start",gap:8},mediaTitle:{flex:1,fontSize:14.5,fontWeight:600,lineHeight:1.4,minWidth:0,wordBreak:"break-word"},cardActions:{display:"flex",gap:2,flexShrink:0,marginTop:1},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},Da=[{id:"sandstone",name:"Sandstone",description:"Warm editorial light — the original Anvil look.",dark:!1,swatch:["#F7F6F3","#4C9A6B","#26241F"],vars:{"--bg":"#F7F6F3","--surface":"#FFFFFF","--surface-2":"#FAFAF8","--hover":"#F2F1EC","--border":"#ECEAE3","--text":"#26241F","--text-2":"#6B675E","--text-3":"#9A968C","--accent":"#4C9A6B","--accent-strong":"#26241F","--accent-2":"#3A352C"}},{id:"midnight",name:"Midnight",description:"Deep low-glare dark mode for night owls and focus.",dark:!0,swatch:["#161513","#6FB58C","#ECEAE3"],vars:{"--bg":"#161513","--surface":"#211F1C","--surface-2":"#1B1A17","--hover":"#2B2924","--border":"#34312B","--text":"#ECEAE3","--text-2":"#B6B1A6","--text-3":"#8A857A","--accent":"#6FB58C","--accent-strong":"#2E6F4B","--accent-2":"#245C3E"}},{id:"blossom",name:"Blossom",description:"Soft rose & blush — gentle, warm, and feminine.",dark:!1,swatch:["#FFF5F8","#E0608E","#B23A6B"],vars:{"--bg":"#FFF5F8","--surface":"#FFFFFF","--surface-2":"#FFF0F4","--hover":"#FDE7EE","--border":"#F6D9E2","--text":"#3D2230","--text-2":"#7A5466","--text-3":"#B08799","--accent":"#E0608E","--accent-strong":"#B23A6B","--accent-2":"#9C2F5C"}},{id:"tide",name:"Tide",description:"Calm professional blues — clean and focused.",dark:!1,swatch:["#F1F6FA","#2E86C1","#1C4E73"],vars:{"--bg":"#F1F6FA","--surface":"#FFFFFF","--surface-2":"#ECF3F9","--hover":"#E2EEF6","--border":"#D5E3EE","--text":"#13283A","--text-2":"#4A6275","--text-3":"#8AA0B0","--accent":"#2E86C1","--accent-strong":"#1C4E73","--accent-2":"#163E5C"}},{id:"velocity",name:"Velocity",description:"High-energy sport — crisp slate with electric orange.",dark:!1,swatch:["#F4F5F7","#F4511E","#1F2A37"],vars:{"--bg":"#F4F5F7","--surface":"#FFFFFF","--surface-2":"#EEF0F3","--hover":"#E7EAEE","--border":"#DCE0E6","--text":"#18202B","--text-2":"#515B68","--text-3":"#8B95A1","--accent":"#F4511E","--accent-strong":"#1F2A37","--accent-2":"#16202B"}},{id:"evergreen",name:"Evergreen",description:"Earthy forest greens — grounded and natural.",dark:!1,swatch:["#F2F6F1","#3E8E52","#2A4A30"],vars:{"--bg":"#F2F6F1","--surface":"#FFFFFF","--surface-2":"#ECF2EA","--hover":"#E4EEE2","--border":"#D7E4D3","--text":"#1E2B20","--text-2":"#4F6151","--text-3":"#8AA08C","--accent":"#3E8E52","--accent-strong":"#2A4A30","--accent-2":"#213B26"}},{id:"amethyst",name:"Amethyst",description:"Premium purple & plum — elegant and refined.",dark:!1,swatch:["#F6F4FB","#7A4FE0","#3A2D5C"],vars:{"--bg":"#F6F4FB","--surface":"#FFFFFF","--surface-2":"#F1EDF9","--hover":"#EAE3F6","--border":"#DFD6F0","--text":"#241B36","--text-2":"#5A4E72","--text-3":"#9588AE","--accent":"#7A4FE0","--accent-strong":"#3A2D5C","--accent-2":"#2E2349"}}],Wc="sandstone",jp="anvil_theme",E0=t=>Da.find(e=>e.id===t)||Da[0];function Sp(){try{return localStorage.getItem(jp)||Wc}catch{return Wc}}function ho(t,e=!0){const r=E0(t),o=document.documentElement;Object.entries(r.vars).forEach(([i,l])=>o.style.setProperty(i,l)),o.style.colorScheme=r.dark?"dark":"light",o.setAttribute("data-theme",r.id);const s=document.querySelector('meta[name="theme-color"]');if(s&&s.setAttribute("content",r.vars["--surface"]),e)try{localStorage.setItem(jp,r.id)}catch{}return r.id}function B0(t=560){const[e,r]=b.useState(()=>window.innerWidth<=t);return b.useEffect(()=>{const o=()=>r(window.innerWidth<=t);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[t]),e}function D0({screens:t,order:e,hidden:r,themeId:o,currency:s,ticker:i,defaultScreen:l,onSetDefault:a,onSaveSidebar:d,onPreviewTheme:g,onCommitTheme:h,onSelectCurrency:y,onSaveTicker:f,onClose:w}){const[k,j]=b.useState("sidebar"),[z,p]=b.useState(()=>e.map(K=>({id:K,hidden:r.includes(K)}))),[c,u]=b.useState(o),[v,S]=b.useState(""),[T,$]=b.useState(!1),U=B0(),[R,N]=b.useState(!!(i!=null&&i.enabled)),[C,E]=b.useState(()=>{const K=Array.isArray(i==null?void 0:i.statements)?i.statements.slice(0,5):[];return K.length?K:[""]}),[x,G]=b.useState((i==null?void 0:i.speed)??60),[dt,Z]=b.useState((i==null?void 0:i.delay)??3),[D,A]=b.useState(!1),M=(K,mt)=>E(vt=>vt.map((Bt,$t)=>$t===K?mt:Bt)),V=()=>E(K=>K.length<5?[...K,""]:K),W=K=>E(mt=>mt.length>1?mt.filter((vt,Bt)=>Bt!==K):mt),F=()=>{const K=C.map(mt=>mt.trim()).filter(Boolean).slice(0,5);f({enabled:R,statements:K,speed:Number(x),delay:Number(dt)}),A(!0),setTimeout(()=>A(!1),1500)};b.useEffect(()=>{O.getSetting("golden_music").then(K=>S((K==null?void 0:K.value)||"")).catch(()=>{})},[]);const m=()=>{O.setSetting("golden_music",v.trim()).then(()=>{$(!0),setTimeout(()=>$(!1),1500)}).catch(()=>{})},H=K=>{u(K),g(K)},ot=z.filter(K=>!K.hidden).length,q=(K,mt)=>{const vt=K+mt;if(vt<0||vt>=z.length)return;const Bt=[...z];[Bt[K],Bt[vt]]=[Bt[vt],Bt[K]],p(Bt)},ht=K=>{const mt=z[K];if(!mt.hidden&&ot<=1)return;const vt=[...z];vt[K]={...mt,hidden:!mt.hidden},p(vt)},It=()=>{d(z.map(K=>K.id),z.filter(K=>K.hidden).map(K=>K.id))},yt=U?{...st.overlay,padding:0}:st.overlay,jt=U?{...st.modal,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"100%",borderRadius:0,border:"none"}:st.modal;return n.jsx("div",{style:yt,onClick:w,children:n.jsxs("div",{style:jt,onClick:K=>K.stopPropagation(),children:[n.jsxs("div",{style:st.head,children:[n.jsx("div",{style:st.title,children:"Settings"}),n.jsx("button",{onClick:w,style:st.closeBtn,children:n.jsx(kt,{size:18})})]}),n.jsxs("div",{style:st.tabs,children:[n.jsxs("button",{onClick:()=>j("sidebar"),style:{...st.tab,...k==="sidebar"?st.tabOn:{}},children:[n.jsx(xh,{size:15})," Configure sidebar"]}),n.jsxs("button",{onClick:()=>j("themes"),style:{...st.tab,...k==="themes"?st.tabOn:{}},children:[n.jsx(jh,{size:15})," Themes"]}),n.jsxs("button",{onClick:()=>j("currency"),style:{...st.tab,...k==="currency"?st.tabOn:{}},children:[n.jsx(uh,{size:15})," Currency"]}),n.jsxs("button",{onClick:()=>j("music"),style:{...st.tab,...k==="music"?st.tabOn:{}},children:[n.jsx(ip,{size:15})," Music"]}),n.jsxs("button",{onClick:()=>j("reminders"),style:{...st.tab,...k==="reminders"?st.tabOn:{}},children:[n.jsx(op,{size:15})," Reminders"]})]}),n.jsx("div",{style:st.body,children:k==="sidebar"?n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:st.hint,children:["Reorder with the arrows, hide ones you don't use, and tap ",n.jsx(bi,{size:11,style:{verticalAlign:"-1px"}})," to set the screen that opens on launch."]}),n.jsx("div",{style:st.list,children:z.map((K,mt)=>{const vt=t[K.id],Bt=vt.icon,$t=l===K.id;return n.jsxs("div",{style:{...st.row,opacity:K.hidden?.5:1,...$t?{borderColor:"var(--accent)"}:{}},children:[n.jsx("span",{style:st.rowNum,children:mt+1}),n.jsx(Bt,{size:16}),n.jsxs("span",{style:st.rowLabel,children:[vt.label,$t&&n.jsx("span",{style:st.defaultTag,children:"default"})]}),n.jsx("button",{onClick:()=>a(K.id),title:$t?"Opens on launch":"Set as default",style:{...st.iconBtn,...$t?{color:"var(--accent)"}:{}},children:n.jsx(bi,{size:15})}),n.jsx("button",{onClick:()=>ht(mt),title:K.hidden?"Show":"Hide",style:{...st.iconBtn,...K.hidden?{}:{color:"var(--accent)"}},children:K.hidden?n.jsx(xa,{size:15}):n.jsx(ui,{size:15})}),n.jsx("button",{onClick:()=>q(mt,-1),disabled:mt===0,style:{...st.iconBtn,opacity:mt===0?.3:1},children:n.jsx(ep,{size:15})}),n.jsx("button",{onClick:()=>q(mt,1),disabled:mt===z.length-1,style:{...st.iconBtn,opacity:mt===z.length-1?.3:1},children:n.jsx(Di,{size:15})})]},K.id)})}),n.jsxs("button",{onClick:It,style:st.saveBtn,children:[n.jsx(zt,{size:15})," Save sidebar"]})]}):k==="currency"?n.jsxs(n.Fragment,{children:[n.jsx("p",{style:st.hint,children:"Choose the currency used across Vault and Worth. Applies instantly."}),n.jsx("div",{style:st.list,children:Ta.map(K=>{const mt=K.code===s;return n.jsxs("button",{onClick:()=>y(K.code),style:{...st.row,cursor:"pointer",textAlign:"left",width:"100%",...mt?{borderColor:"var(--accent)"}:{}},children:[n.jsx("span",{style:st.curSymbol,children:K.symbol}),n.jsxs("span",{style:st.rowLabel,children:[K.label," ",n.jsx("span",{style:st.curCode,children:K.code})]}),mt&&n.jsx("span",{style:st.themeCheck,children:n.jsx(zt,{size:13})})]},K.code)})})]}):k==="music"?n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:st.hint,children:["Paste a YouTube link to play softly while you write in the ",n.jsx("b",{children:"Golden Book"}),". It plays only on that screen (audio only)."]}),n.jsx("input",{value:v,onChange:K=>S(K.target.value),placeholder:"https://youtube.com/watch?v=…",style:st.musicInput}),n.jsxs("button",{onClick:m,style:st.saveBtn,children:[n.jsx(zt,{size:15})," ",T?"Saved":"Save music"]})]}):k==="reminders"?n.jsxs(n.Fragment,{children:[n.jsx("p",{style:st.hint,children:"Up to 5 reminders scroll across the top of every screen — a gentle nudge toward your goals."}),n.jsxs("button",{onClick:()=>N(K=>!K),style:{...st.row,cursor:"pointer",width:"100%",justifyContent:"space-between",...R?{borderColor:"var(--accent)"}:{}},children:[n.jsx("span",{style:st.rowLabel,children:"Show reminder banner"}),n.jsx("span",{style:{...st.switch,...R?st.switchOn:{}},children:R?"On":"Off"})]}),n.jsxs("div",{style:{marginTop:14},children:[n.jsxs("div",{style:st.fieldLbl,children:["Reminders (",C.filter(K=>K.trim()).length,"/5)"]}),C.map((K,mt)=>n.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[n.jsx("input",{value:K,onChange:vt=>M(mt,vt.target.value),maxLength:120,placeholder:`Reminder ${mt+1}`,style:{...st.musicInput,marginBottom:0}}),n.jsx("button",{onClick:()=>W(mt),style:st.iconBtn,title:"Remove",children:n.jsx(kt,{size:15})})]},mt)),C.length<5&&n.jsxs("button",{onClick:V,style:st.addRowBtn,children:[n.jsx(ge,{size:14})," Add reminder"]})]}),n.jsxs("div",{style:{marginTop:16},children:[n.jsxs("div",{style:st.sliderHead,children:[n.jsx("span",{style:st.fieldLbl,children:"Scroll speed"}),n.jsxs("span",{style:st.sliderVal,children:[x," px/s"]})]}),n.jsx("input",{type:"range",min:20,max:200,step:5,value:x,onChange:K=>G(K.target.value),style:st.range})]}),n.jsxs("div",{style:{marginTop:12},children:[n.jsxs("div",{style:st.sliderHead,children:[n.jsx("span",{style:st.fieldLbl,children:"Delay between reminders"}),n.jsxs("span",{style:st.sliderVal,children:[dt,"s"]})]}),n.jsx("input",{type:"range",min:0,max:15,step:1,value:dt,onChange:K=>Z(K.target.value),style:st.range})]}),n.jsxs("button",{onClick:F,style:{...st.saveBtn,marginTop:16},children:[n.jsx(zt,{size:15})," ",D?"Saved":"Save reminders"]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:st.hint,children:["Tap a theme to preview it live, then hit ",n.jsx("b",{children:"Apply theme"})," to keep it."]}),n.jsx("div",{style:st.themeGrid,children:Da.map(K=>{const mt=K.id===c;return n.jsxs("button",{onClick:()=>H(K.id),style:{...st.themeCard,...mt?st.themeCardOn:{}},children:[n.jsxs("div",{style:st.swatchRow,children:[K.swatch.map((vt,Bt)=>n.jsx("span",{style:{...st.swatch,background:vt}},Bt)),mt&&n.jsx("span",{style:st.themeCheck,children:n.jsx(zt,{size:13})})]}),n.jsxs("div",{style:st.themeName,children:[K.name,K.dark?n.jsx("span",{style:st.darkTag,children:"Dark"}):null]}),n.jsx("div",{style:st.themeDesc,children:K.description})]},K.id)})}),n.jsxs("button",{onClick:()=>h(c),disabled:c===o,style:{...st.saveBtn,...c===o?st.saveBtnDisabled:{}},children:[n.jsx(zt,{size:15})," ",c===o?"Theme applied":"Apply theme"]})]})})]})})}const st={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,width:460,maxWidth:"100%",maxHeight:"88vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",overflow:"hidden"},head:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 18px",borderBottom:"1px solid var(--border)",flexShrink:0},title:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},tabs:{display:"flex",flexWrap:"wrap",gap:6,padding:"12px 18px 0",flexShrink:0},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"transparent"},body:{padding:"16px 18px 20px",overflowY:"auto",overflowX:"hidden",flex:1,minHeight:0},hint:{fontSize:12.5,color:"var(--text-3)",lineHeight:1.5,margin:"0 0 14px"},list:{display:"flex",flexDirection:"column",gap:6},row:{display:"flex",alignItems:"center",gap:10,padding:"9px 11px",background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:9},rowNum:{fontSize:11,fontWeight:700,color:"var(--text-3)",width:16,textAlign:"center"},rowLabel:{flex:1,fontSize:13.5,fontWeight:500,display:"flex",alignItems:"center",gap:7},defaultTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"1px 6px",borderRadius:6},curSymbol:{width:22,textAlign:"center",fontSize:15,fontWeight:700,color:"var(--text)"},curCode:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginLeft:4},iconBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},saveBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",marginTop:16,border:"none",background:"var(--accent)",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer"},saveBtnDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"default"},musicInput:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:12},switch:{fontSize:12,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:20,padding:"3px 12px",minWidth:44,textAlign:"center"},switchOn:{background:"var(--accent)",color:"#fff"},fieldLbl:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},addRowBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},sliderHead:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},sliderVal:{fontSize:12,fontWeight:700,color:"var(--accent)"},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},themeGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},themeCard:{textAlign:"left",border:"2px solid var(--border)",background:"var(--surface-2)",borderRadius:12,padding:12,cursor:"pointer",display:"flex",flexDirection:"column",gap:6,outline:"none",WebkitTapHighlightColor:"transparent",transition:"border-color .15s ease, box-shadow .15s ease"},themeCardOn:{borderColor:"var(--accent)",boxShadow:"0 0 0 3px color-mix(in srgb, var(--accent) 25%, transparent)"},swatchRow:{display:"flex",alignItems:"center",gap:5,position:"relative"},swatch:{width:22,height:22,borderRadius:"50%",border:"1px solid rgba(0,0,0,0.08)"},themeCheck:{marginLeft:"auto",width:20,height:20,borderRadius:"50%",background:"var(--accent)",color:"#fff",display:"grid",placeItems:"center"},themeName:{fontSize:14,fontWeight:700,display:"flex",alignItems:"center",gap:6},darkTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",background:"var(--hover)",color:"var(--text-2)",padding:"1px 6px",borderRadius:6},themeDesc:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4}},R0=`
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
`;function F0({statements:t,speed:e=60,delay:r=3}){const o=b.useMemo(()=>(t||[]).map(d=>(d||"").trim()).filter(Boolean).slice(0,5),[t]),[s,i]=b.useState(0),l=b.useRef(null),a=b.useRef(null);return b.useEffect(()=>{i(0)},[o]),b.useEffect(()=>{if(!o.length)return;const d=l.current,g=a.current;if(!d||!g)return;const h=d.offsetWidth,y=g.offsetWidth,f=Math.max(10,Number(e)||60),w=Math.max(2500,(h+y)/f*1e3),k=g.animate([{transform:`translateX(${h}px)`},{transform:`translateX(${-y}px)`}],{duration:w,easing:"linear",fill:"both"});let j;const z=()=>{j=setTimeout(()=>i(p=>(p+1)%o.length),Math.max(0,Number(r)||0)*1e3)};return k.addEventListener("finish",z),()=>{k.cancel(),k.removeEventListener("finish",z),clearTimeout(j)}},[s,o,e,r]),o.length?n.jsxs("div",{style:hn.bar,"aria-label":"Reminders",children:[n.jsx("style",{children:R0}),n.jsx("div",{className:"anvil-tick-glow",style:hn.icon,children:n.jsx("span",{className:"anvil-tick-pulse",style:{display:"grid",placeItems:"center"},children:n.jsx(op,{size:15})})}),n.jsxs("div",{ref:l,style:hn.viewport,children:[n.jsx("span",{className:"anvil-tick-shimmer",style:hn.shimmer}),n.jsx("div",{className:"anvil-tick-float",style:hn.floatWrap,children:n.jsx("div",{ref:a,style:hn.text,children:o[s%o.length]},s)})]})]}):null}const hn={bar:{display:"flex",alignItems:"center",height:36,flexShrink:0,overflow:"hidden",borderBottom:"1px solid var(--border)",background:"color-mix(in srgb, var(--accent) 12%, var(--surface))"},icon:{display:"grid",placeItems:"center",width:42,height:"100%",flexShrink:0,color:"#fff",background:"var(--accent)",zIndex:2},viewport:{position:"relative",flex:1,height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},shimmer:{position:"absolute",top:0,bottom:0,left:0,width:"22%",background:"linear-gradient(100deg, transparent, color-mix(in srgb, var(--accent) 22%, transparent), transparent)",pointerEvents:"none",zIndex:1},floatWrap:{display:"inline-flex",alignItems:"center",willChange:"transform"},text:{whiteSpace:"nowrap",fontSize:13.5,fontWeight:700,color:"var(--text)",letterSpacing:"0.01em",willChange:"transform",paddingLeft:4}};ho(Sp(),!1);const Ra="anvil_default_screen",_c=()=>{try{return localStorage.getItem(Ra)}catch{return null}},Ur={kickstart:{label:"Kickstart",icon:Th,component:v0},golden:{label:"Golden Book",icon:bh,component:w0},habits:{label:"Habits",icon:Bh,component:iy},quadrant:{label:"Quadrant",icon:np,component:Uh},goals:{label:"Goals",icon:Ed,component:ty},grove:{label:"Grove",icon:Ah,component:Yy},worth:{label:"Rewards",icon:vh,component:o0},vault:{label:"Vault",icon:rp,component:d0},journal:{label:"Journal",icon:tp,component:hy},revision:{label:"Revision",icon:dp,component:Ey},affirmations:{label:"Affirmations",icon:Jo,component:Ry},skills:{label:"Skills",icon:ph,component:yy},spiritual:{label:"Spiritual",icon:Ns,component:ky},mindscape:{label:"Mindscape",icon:mh,component:T0}},Cp=["kickstart","golden","habits","quadrant","goals","grove","journal","revision","affirmations","skills","spiritual","mindscape","worth","vault"];function Ts(t){const e=Cp.filter(s=>Ur[s]),o=[...(Array.isArray(t)?t:[]).filter(s=>Ur[s])];return e.forEach(s=>{o.includes(s)||o.push(s)}),o}function A0(){const[t,e]=b.useState(()=>window.innerWidth<720);return b.useEffect(()=>{const r=()=>e(window.innerWidth<720);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),t}function M0(){const[t,e]=b.useState(()=>{const F=_c();return F&&Ur[F]?F:"habits"}),[r,o]=b.useState(()=>_c()||"habits"),[s,i]=b.useState(!1),[l,a]=b.useState(null),[d,g]=b.useState(!1),[h,y]=b.useState(!1),[f,w]=b.useState(Sp()),[k,j]=b.useState(Vn()),[z,p]=b.useState({enabled:!1,statements:[],speed:60,delay:3}),[c,u]=b.useState(()=>Ts(Cp)),[v,S]=b.useState([]),T=A0(),$=b.useRef(t);b.useEffect(()=>{$.current=t},[t]),b.useEffect(()=>{if(!l)return;const F=10,m=new Set(["kickstart","mindscape"]),H=setInterval(()=>{const ot=$.current;!document.hidden&&ot&&!m.has(ot)&&O.addScreenTime(ot,F).catch(()=>{})},F*1e3);return()=>clearInterval(H)},[l]),b.useEffect(()=>{let F=!1;const m=()=>{wa(),a(null)};return window.addEventListener("anvil-unauthorized",m),Dd()?O.me().then(H=>{F||a(H)}).catch(()=>{}).finally(()=>{F||g(!0)}):g(!0),()=>{F=!0,window.removeEventListener("anvil-unauthorized",m)}},[]),b.useEffect(()=>{l&&(O.getSetting("theme").then(F=>{F!=null&&F.value&&w(ho(F.value))}).catch(()=>{}),O.getSetting("currency").then(F=>{F!=null&&F.value&&j(xc(F.value))}).catch(()=>{}),O.getSetting("ticker").then(F=>{F!=null&&F.value&&p(m=>({...m,...F.value}))}).catch(()=>{}),O.getSetting("default_screen").then(F=>{if(F!=null&&F.value&&Ur[F.value]){o(F.value);try{localStorage.setItem(Ra,F.value)}catch{}}}).catch(()=>{}),O.getSetting("sidebar_order").then(F=>{Array.isArray(F==null?void 0:F.value)&&u(Ts(F.value))}).catch(()=>{}),O.getSetting("sidebar_hidden").then(F=>{Array.isArray(F==null?void 0:F.value)&&S(F.value)}).catch(()=>{}))},[l]);function U(F){e(F),i(!1)}const R=()=>{wa(),a(null)},N=F=>{ho(F,!1)},C=F=>{w(ho(F)),O.setSetting("theme",F).catch(()=>{}),y(!1)},E=()=>{ho(f,!1),y(!1)},x=F=>{j(xc(F)),O.setSetting("currency",F).catch(()=>{})},G=F=>{p(F),O.setSetting("ticker",F).catch(()=>{})},dt=F=>{o(F);try{localStorage.setItem(Ra,F)}catch{}O.setSetting("default_screen",F).catch(()=>{})},Z=(F,m)=>{if(u(Ts(F)),S(m),y(!1),O.setSetting("sidebar_order",F).catch(()=>{}),O.setSetting("sidebar_hidden",m).catch(()=>{}),m.includes(t)){const H=Ts(F).find(ot=>!m.includes(ot));H&&e(H)}},D=c.filter(F=>!v.includes(F));if(!d)return n.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:"'Inter',system-ui,sans-serif",color:"var(--text-3)"},children:"Loading…"});if(!l)return n.jsx(s0,{onAuthed:a});const A=Ur[t],M=A.component,V=()=>n.jsx("div",{style:Dt.navItems,children:D.map(F=>{const m=Ur[F];if(!m)return null;const H=m.icon,ot=t===F;return n.jsxs("button",{onClick:()=>U(F),title:m.label,style:{...Dt.navItem,...ot?Dt.navItemOn:{}},children:[n.jsx(H,{size:18}),n.jsx("span",{style:Dt.navLabel,children:m.label})]},F)})}),W=()=>n.jsxs("div",{style:Dt.footerWrap,children:[n.jsxs("button",{onClick:()=>y(!0),style:Dt.settingsBtn,title:"Settings",children:[n.jsx(gp,{size:17}),n.jsx("span",{children:"Settings"})]}),n.jsxs("div",{style:Dt.userFooter,children:[n.jsxs("div",{style:Dt.userInfo,children:[n.jsx("div",{style:Dt.userAvatar,children:(l.name||l.email||"?").charAt(0).toUpperCase()}),n.jsxs("div",{style:{minWidth:0},children:[n.jsx("div",{style:Dt.userName,children:l.name||"You"}),n.jsx("div",{style:Dt.userEmail,children:l.email})]})]}),n.jsx("button",{onClick:R,style:Dt.logoutBtn,title:"Sign out",children:n.jsx(kh,{size:16})})]})]});return n.jsxs("div",{style:Dt.shell,children:[!T&&n.jsxs("nav",{style:Dt.nav,children:[n.jsxs("div",{style:Dt.brand,children:[n.jsx("div",{style:Dt.brandLogo,children:"B"}),n.jsx("span",{style:Dt.brandName,children:"Anvil"})]}),n.jsx(V,{}),n.jsx(W,{})]}),T&&s&&n.jsx("div",{style:Dt.overlay,onClick:()=>i(!1),children:n.jsxs("nav",{style:Dt.drawer,onClick:F=>F.stopPropagation(),children:[n.jsxs("div",{style:Dt.drawerHeader,children:[n.jsxs("div",{style:Dt.brand,children:[n.jsx("div",{style:Dt.brandLogo,children:"B"}),n.jsx("span",{style:Dt.brandName,children:"Anvil"})]}),n.jsx("button",{style:Dt.closeBtn,onClick:()=>i(!1),children:n.jsx(kt,{size:20})})]}),n.jsx(V,{}),n.jsx(W,{})]})}),n.jsxs("div",{style:Dt.content,children:[T&&n.jsxs("div",{style:Dt.topBar,children:[n.jsx("button",{style:Dt.menuBtn,onClick:()=>i(!0),children:n.jsx(Td,{size:22})}),n.jsx("span",{style:Dt.topBarTitle,children:A.label}),n.jsx("div",{style:{width:38}})]}),z.enabled&&n.jsx(F0,{statements:z.statements,speed:z.speed,delay:z.delay}),n.jsx("main",{style:Dt.main,children:n.jsx(M,{})})]}),h&&n.jsx(D0,{screens:Ur,order:c,hidden:v,themeId:f,currency:k,ticker:z,defaultScreen:r,onSetDefault:dt,onSaveSidebar:Z,onPreviewTheme:N,onCommitTheme:C,onSelectCurrency:x,onSaveTicker:G,onClose:E})]})}const Dt={shell:{display:"flex",height:"100vh",overflow:"hidden",fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)"},nav:{width:200,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column",padding:"20px 10px",gap:2,overflowY:"auto",overflowX:"hidden"},brand:{display:"flex",alignItems:"center",gap:9,padding:"6px 10px 20px",borderBottom:"1px solid var(--border)",marginBottom:8},brandLogo:{width:30,height:30,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:14,fontWeight:800,fontFamily:"'Fraunces', Georgia, serif",flexShrink:0},brandName:{fontSize:16,fontWeight:700,letterSpacing:"-0.01em",color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},navItems:{display:"flex",flexDirection:"column",gap:2},navItem:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},navItemOn:{background:"var(--hover)",color:"var(--text)",fontWeight:700},footerWrap:{marginTop:"auto",paddingTop:8},settingsBtn:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},userFooter:{marginTop:4,paddingTop:12,borderTop:"1px solid var(--border)",display:"flex",alignItems:"center",gap:8},userInfo:{display:"flex",alignItems:"center",gap:8,flex:1,minWidth:0},userAvatar:{width:30,height:30,borderRadius:"50%",background:"#8268B0",color:"#fff",display:"grid",placeItems:"center",fontSize:13,fontWeight:700,flexShrink:0},userName:{fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},userEmail:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logoutBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",padding:7,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},navLabel:{flex:1},content:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},main:{flex:1,overflowY:"auto",overflowX:"hidden"},topBar:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"var(--surface)",borderBottom:"1px solid var(--border)",flexShrink:0},topBarTitle:{fontSize:16,fontWeight:700,color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},menuBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text)",padding:8,borderRadius:8,display:"grid",placeItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:100,display:"flex"},drawer:{width:220,background:"var(--surface)",height:"100%",display:"flex",flexDirection:"column",padding:"16px 10px",gap:2,boxShadow:"4px 0 24px rgba(0,0,0,0.12)"},drawerHeader:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:4},closeBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",padding:6,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0}};Xb(document.getElementById("root")).render(n.jsx(b.StrictMode,{children:n.jsx(M0,{})}));
