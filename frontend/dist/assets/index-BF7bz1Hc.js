(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Hp={exports:{}},ra={},Gp={exports:{}},it={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ks=Symbol.for("react.element"),Ph=Symbol.for("react.portal"),Nh=Symbol.for("react.fragment"),Oh=Symbol.for("react.strict_mode"),Hh=Symbol.for("react.profiler"),Gh=Symbol.for("react.provider"),Uh=Symbol.for("react.context"),Vh=Symbol.for("react.forward_ref"),Yh=Symbol.for("react.suspense"),Kh=Symbol.for("react.memo"),Qh=Symbol.for("react.lazy"),Ag=Symbol.iterator;function qh(e){return e===null||typeof e!="object"?null:(e=Ag&&e[Ag]||e["@@iterator"],typeof e=="function"?e:null)}var Up={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vp=Object.assign,Yp={};function pi(e,r,n){this.props=e,this.context=r,this.refs=Yp,this.updater=n||Up}pi.prototype.isReactComponent={};pi.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")};pi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kp(){}Kp.prototype=pi.prototype;function zc(e,r,n){this.props=e,this.context=r,this.refs=Yp,this.updater=n||Up}var Tc=zc.prototype=new Kp;Tc.constructor=zc;Vp(Tc,pi.prototype);Tc.isPureReactComponent=!0;var Dg=Array.isArray,Qp=Object.prototype.hasOwnProperty,Ic={current:null},qp={key:!0,ref:!0,__self:!0,__source:!0};function Xp(e,r,n){var o,i={},s=null,l=null;if(r!=null)for(o in r.ref!==void 0&&(l=r.ref),r.key!==void 0&&(s=""+r.key),r)Qp.call(r,o)&&!qp.hasOwnProperty(o)&&(i[o]=r[o]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var d=Array(a),u=0;u<a;u++)d[u]=arguments[u+2];i.children=d}if(e&&e.defaultProps)for(o in a=e.defaultProps,a)i[o]===void 0&&(i[o]=a[o]);return{$$typeof:ks,type:e,key:s,ref:l,props:i,_owner:Ic.current}}function Xh(e,r){return{$$typeof:ks,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function Bc(e){return typeof e=="object"&&e!==null&&e.$$typeof===ks}function Zh(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return r[n]})}var Wg=/\/+/g;function Sa(e,r){return typeof e=="object"&&e!==null&&e.key!=null?Zh(""+e.key):r.toString(36)}function cl(e,r,n,o,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ks:case Ph:l=!0}}if(l)return l=e,i=i(l),e=o===""?"."+Sa(l,0):o,Dg(i)?(n="",e!=null&&(n=e.replace(Wg,"$&/")+"/"),cl(i,r,n,"",function(u){return u})):i!=null&&(Bc(i)&&(i=Xh(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Wg,"$&/")+"/")+e)),r.push(i)),1;if(l=0,o=o===""?".":o+":",Dg(e))for(var a=0;a<e.length;a++){s=e[a];var d=o+Sa(s,a);l+=cl(s,r,n,d,i)}else if(d=qh(e),typeof d=="function")for(e=d.call(e),a=0;!(s=e.next()).done;)s=s.value,d=o+Sa(s,a++),l+=cl(s,r,n,d,i);else if(s==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return l}function Ts(e,r,n){if(e==null)return e;var o=[],i=0;return cl(e,o,"","",function(s){return r.call(n,s,i++)}),o}function Jh(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var sr={current:null},gl={transition:null},ef={ReactCurrentDispatcher:sr,ReactCurrentBatchConfig:gl,ReactCurrentOwner:Ic};function Zp(){throw Error("act(...) is not supported in production builds of React.")}it.Children={map:Ts,forEach:function(e,r,n){Ts(e,function(){r.apply(this,arguments)},n)},count:function(e){var r=0;return Ts(e,function(){r++}),r},toArray:function(e){return Ts(e,function(r){return r})||[]},only:function(e){if(!Bc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};it.Component=pi;it.Fragment=Nh;it.Profiler=Hh;it.PureComponent=zc;it.StrictMode=Oh;it.Suspense=Yh;it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ef;it.act=Zp;it.cloneElement=function(e,r,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=Vp({},e.props),i=e.key,s=e.ref,l=e._owner;if(r!=null){if(r.ref!==void 0&&(s=r.ref,l=Ic.current),r.key!==void 0&&(i=""+r.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(d in r)Qp.call(r,d)&&!qp.hasOwnProperty(d)&&(o[d]=r[d]===void 0&&a!==void 0?a[d]:r[d])}var d=arguments.length-2;if(d===1)o.children=n;else if(1<d){a=Array(d);for(var u=0;u<d;u++)a[u]=arguments[u+2];o.children=a}return{$$typeof:ks,type:e.type,key:i,ref:s,props:o,_owner:l}};it.createContext=function(e){return e={$$typeof:Uh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Gh,_context:e},e.Consumer=e};it.createElement=Xp;it.createFactory=function(e){var r=Xp.bind(null,e);return r.type=e,r};it.createRef=function(){return{current:null}};it.forwardRef=function(e){return{$$typeof:Vh,render:e}};it.isValidElement=Bc;it.lazy=function(e){return{$$typeof:Qh,_payload:{_status:-1,_result:e},_init:Jh}};it.memo=function(e,r){return{$$typeof:Kh,type:e,compare:r===void 0?null:r}};it.startTransition=function(e){var r=gl.transition;gl.transition={};try{e()}finally{gl.transition=r}};it.unstable_act=Zp;it.useCallback=function(e,r){return sr.current.useCallback(e,r)};it.useContext=function(e){return sr.current.useContext(e)};it.useDebugValue=function(){};it.useDeferredValue=function(e){return sr.current.useDeferredValue(e)};it.useEffect=function(e,r){return sr.current.useEffect(e,r)};it.useId=function(){return sr.current.useId()};it.useImperativeHandle=function(e,r,n){return sr.current.useImperativeHandle(e,r,n)};it.useInsertionEffect=function(e,r){return sr.current.useInsertionEffect(e,r)};it.useLayoutEffect=function(e,r){return sr.current.useLayoutEffect(e,r)};it.useMemo=function(e,r){return sr.current.useMemo(e,r)};it.useReducer=function(e,r,n){return sr.current.useReducer(e,r,n)};it.useRef=function(e){return sr.current.useRef(e)};it.useState=function(e){return sr.current.useState(e)};it.useSyncExternalStore=function(e,r,n){return sr.current.useSyncExternalStore(e,r,n)};it.useTransition=function(){return sr.current.useTransition()};it.version="18.3.1";Gp.exports=it;var g=Gp.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tf=g,rf=Symbol.for("react.element"),nf=Symbol.for("react.fragment"),of=Object.prototype.hasOwnProperty,sf=tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lf={key:!0,ref:!0,__self:!0,__source:!0};function Jp(e,r,n){var o,i={},s=null,l=null;n!==void 0&&(s=""+n),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(l=r.ref);for(o in r)of.call(r,o)&&!lf.hasOwnProperty(o)&&(i[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps,r)i[o]===void 0&&(i[o]=r[o]);return{$$typeof:rf,type:e,key:s,ref:l,props:i,_owner:sf.current}}ra.Fragment=nf;ra.jsx=Jp;ra.jsxs=Jp;Hp.exports=ra;var t=Hp.exports,eb={exports:{}},Sr={},tb={exports:{}},rb={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function r(Q,x){var Y=Q.length;Q.push(x);e:for(;0<Y;){var H=Y-1>>>1,ae=Q[H];if(0<i(ae,x))Q[H]=x,Q[Y]=ae,Y=H;else break e}}function n(Q){return Q.length===0?null:Q[0]}function o(Q){if(Q.length===0)return null;var x=Q[0],Y=Q.pop();if(Y!==x){Q[0]=Y;e:for(var H=0,ae=Q.length,V=ae>>>1;H<V;){var G=2*(H+1)-1,P=Q[G],ge=G+1,ce=Q[ge];if(0>i(P,Y))ge<ae&&0>i(ce,P)?(Q[H]=ce,Q[ge]=Y,H=ge):(Q[H]=P,Q[G]=Y,H=G);else if(ge<ae&&0>i(ce,Y))Q[H]=ce,Q[ge]=Y,H=ge;else break e}}return x}function i(Q,x){var Y=Q.sortIndex-x.sortIndex;return Y!==0?Y:Q.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var d=[],u=[],m=1,f=null,h=3,I=!1,B=!1,k=!1,C=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(Q){for(var x=n(u);x!==null;){if(x.callback===null)o(u);else if(x.startTime<=Q)o(u),x.sortIndex=x.expirationTime,r(d,x);else break;x=n(u)}}function T(Q){if(k=!1,b(Q),!B)if(n(d)!==null)B=!0,pe(y);else{var x=n(u);x!==null&&je(T,x.startTime-Q)}}function y(Q,x){B=!1,k&&(k=!1,p(S),S=-1),I=!0;var Y=h;try{for(b(x),f=n(d);f!==null&&(!(f.expirationTime>x)||Q&&!J());){var H=f.callback;if(typeof H=="function"){f.callback=null,h=f.priorityLevel;var ae=H(f.expirationTime<=x);x=e.unstable_now(),typeof ae=="function"?f.callback=ae:f===n(d)&&o(d),b(x)}else o(d);f=n(d)}if(f!==null)var V=!0;else{var G=n(u);G!==null&&je(T,G.startTime-x),V=!1}return V}finally{f=null,h=Y,I=!1}}var w=!1,D=null,S=-1,j=5,N=-1;function J(){return!(e.unstable_now()-N<j)}function se(){if(D!==null){var Q=e.unstable_now();N=Q;var x=!0;try{x=D(!0,Q)}finally{x?W():(w=!1,D=null)}}else w=!1}var W;if(typeof c=="function")W=function(){c(se)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,Re=de.port2;de.port1.onmessage=se,W=function(){Re.postMessage(null)}}else W=function(){C(se,0)};function pe(Q){D=Q,w||(w=!0,W())}function je(Q,x){S=C(function(){Q(e.unstable_now())},x)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(Q){Q.callback=null},e.unstable_continueExecution=function(){B||I||(B=!0,pe(y))},e.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<Q?Math.floor(1e3/Q):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(Q){switch(h){case 1:case 2:case 3:var x=3;break;default:x=h}var Y=h;h=x;try{return Q()}finally{h=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(Q,x){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var Y=h;h=Q;try{return x()}finally{h=Y}},e.unstable_scheduleCallback=function(Q,x,Y){var H=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?H+Y:H):Y=H,Q){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=Y+ae,Q={id:m++,callback:x,priorityLevel:Q,startTime:Y,expirationTime:ae,sortIndex:-1},Y>H?(Q.sortIndex=Y,r(u,Q),n(d)===null&&Q===n(u)&&(k?(p(S),S=-1):k=!0,je(T,Y-H))):(Q.sortIndex=ae,r(d,Q),B||I||(B=!0,pe(y))),Q},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(Q){var x=h;return function(){var Y=h;h=x;try{return Q.apply(this,arguments)}finally{h=Y}}}})(rb);tb.exports=rb;var af=tb.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var df=g,wr=af;function Se(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nb=new Set,Zi={};function So(e,r){ii(e,r),ii(e+"Capture",r)}function ii(e,r){for(Zi[e]=r,e=0;e<r.length;e++)nb.add(r[e])}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fd=Object.prototype.hasOwnProperty,cf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mg={},Lg={};function gf(e){return fd.call(Lg,e)?!0:fd.call(Mg,e)?!1:cf.test(e)?Lg[e]=!0:(Mg[e]=!0,!1)}function uf(e,r,n,o){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function pf(e,r,n,o){if(r===null||typeof r>"u"||uf(e,r,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function lr(e,r,n,o,i,s,l){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=s,this.removeEmptyString=l}var qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){qt[e]=new lr(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];qt[r]=new lr(r,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){qt[e]=new lr(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){qt[e]=new lr(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){qt[e]=new lr(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){qt[e]=new lr(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){qt[e]=new lr(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){qt[e]=new lr(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){qt[e]=new lr(e,5,!1,e.toLowerCase(),null,!1,!1)});var Rc=/[\-:]([a-z])/g;function Ec(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(Rc,Ec);qt[r]=new lr(r,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(Rc,Ec);qt[r]=new lr(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(Rc,Ec);qt[r]=new lr(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){qt[e]=new lr(e,1,!1,e.toLowerCase(),null,!1,!1)});qt.xlinkHref=new lr("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){qt[e]=new lr(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fc(e,r,n,o){var i=qt.hasOwnProperty(r)?qt[r]:null;(i!==null?i.type!==0:o||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(pf(r,n,i,o)&&(n=null),o||i===null?gf(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(r=i.attributeName,o=i.attributeNamespace,n===null?e.removeAttribute(r):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,o?e.setAttributeNS(o,r,n):e.setAttribute(r,n))))}var zn=df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Is=Symbol.for("react.element"),$o=Symbol.for("react.portal"),Po=Symbol.for("react.fragment"),Ac=Symbol.for("react.strict_mode"),xd=Symbol.for("react.profiler"),ob=Symbol.for("react.provider"),ib=Symbol.for("react.context"),Dc=Symbol.for("react.forward_ref"),yd=Symbol.for("react.suspense"),vd=Symbol.for("react.suspense_list"),Wc=Symbol.for("react.memo"),Fn=Symbol.for("react.lazy"),sb=Symbol.for("react.offscreen"),_g=Symbol.iterator;function xi(e){return e===null||typeof e!="object"?null:(e=_g&&e[_g]||e["@@iterator"],typeof e=="function"?e:null)}var Dt=Object.assign,Ca;function Bi(e){if(Ca===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);Ca=r&&r[1]||""}return`
`+Ca+e}var za=!1;function Ta(e,r){if(!e||za)return"";za=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(u){var o=u}Reflect.construct(e,[],r)}else{try{r.call()}catch(u){o=u}e.call(r.prototype)}else{try{throw Error()}catch(u){o=u}e()}}catch(u){if(u&&o&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=o.stack.split(`
`),l=i.length-1,a=s.length-1;1<=l&&0<=a&&i[l]!==s[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==s[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==s[a]){var d=`
`+i[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=a);break}}}finally{za=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Bi(e):""}function bf(e){switch(e.tag){case 5:return Bi(e.type);case 16:return Bi("Lazy");case 13:return Bi("Suspense");case 19:return Bi("SuspenseList");case 0:case 2:case 15:return e=Ta(e.type,!1),e;case 11:return e=Ta(e.type.render,!1),e;case 1:return e=Ta(e.type,!0),e;default:return""}}function jd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Po:return"Fragment";case $o:return"Portal";case xd:return"Profiler";case Ac:return"StrictMode";case yd:return"Suspense";case vd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ib:return(e.displayName||"Context")+".Consumer";case ob:return(e._context.displayName||"Context")+".Provider";case Dc:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wc:return r=e.displayName||null,r!==null?r:jd(e.type)||"Memo";case Fn:r=e._payload,e=e._init;try{return jd(e(r))}catch{}}return null}function mf(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jd(r);case 8:return r===Ac?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Kn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lb(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function hf(e){var r=lb(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),o=""+e[r];if(!e.hasOwnProperty(r)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return i.call(this)},set:function(l){o=""+l,s.call(this,l)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Bs(e){e._valueTracker||(e._valueTracker=hf(e))}function ab(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),o="";return e&&(o=lb(e)?e.checked?"true":"false":e.value),e=o,e!==n?(r.setValue(e),!0):!1}function Sl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kd(e,r){var n=r.checked;return Dt({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $g(e,r){var n=r.defaultValue==null?"":r.defaultValue,o=r.checked!=null?r.checked:r.defaultChecked;n=Kn(r.value!=null?r.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function db(e,r){r=r.checked,r!=null&&Fc(e,"checked",r,!1)}function wd(e,r){db(e,r);var n=Kn(r.value),o=r.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Sd(e,r.type,n):r.hasOwnProperty("defaultValue")&&Sd(e,r.type,Kn(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function Pg(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var o=r.type;if(!(o!=="submit"&&o!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Sd(e,r,n){(r!=="number"||Sl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ri=Array.isArray;function Xo(e,r,n,o){if(e=e.options,r){r={};for(var i=0;i<n.length;i++)r["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=r.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Kn(n),r=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}r!==null||e[i].disabled||(r=e[i])}r!==null&&(r.selected=!0)}}function Cd(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(Se(91));return Dt({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ng(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(Se(92));if(Ri(n)){if(1<n.length)throw Error(Se(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:Kn(n)}}function cb(e,r){var n=Kn(r.value),o=Kn(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function Og(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function gb(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zd(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?gb(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Rs,ub=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,n,o,i){MSApp.execUnsafeLocalFunction(function(){return e(r,n,o,i)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(Rs=Rs||document.createElement("div"),Rs.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Rs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function Ji(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var _i={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ff=["Webkit","ms","Moz","O"];Object.keys(_i).forEach(function(e){ff.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),_i[r]=_i[e]})});function pb(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||_i.hasOwnProperty(e)&&_i[e]?(""+r).trim():r+"px"}function bb(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var o=n.indexOf("--")===0,i=pb(n,r[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,i):e[n]=i}}var xf=Dt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Td(e,r){if(r){if(xf[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(Se(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(Se(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(Se(61))}if(r.style!=null&&typeof r.style!="object")throw Error(Se(62))}}function Id(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bd=null;function Mc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rd=null,Zo=null,Jo=null;function Hg(e){if(e=Cs(e)){if(typeof Rd!="function")throw Error(Se(280));var r=e.stateNode;r&&(r=la(r),Rd(e.stateNode,e.type,r))}}function mb(e){Zo?Jo?Jo.push(e):Jo=[e]:Zo=e}function hb(){if(Zo){var e=Zo,r=Jo;if(Jo=Zo=null,Hg(e),r)for(e=0;e<r.length;e++)Hg(r[e])}}function fb(e,r){return e(r)}function xb(){}var Ia=!1;function yb(e,r,n){if(Ia)return e(r,n);Ia=!0;try{return fb(e,r,n)}finally{Ia=!1,(Zo!==null||Jo!==null)&&(xb(),hb())}}function es(e,r){var n=e.stateNode;if(n===null)return null;var o=la(n);if(o===null)return null;n=o[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Se(231,r,typeof n));return n}var Ed=!1;if(jn)try{var yi={};Object.defineProperty(yi,"passive",{get:function(){Ed=!0}}),window.addEventListener("test",yi,yi),window.removeEventListener("test",yi,yi)}catch{Ed=!1}function yf(e,r,n,o,i,s,l,a,d){var u=Array.prototype.slice.call(arguments,3);try{r.apply(n,u)}catch(m){this.onError(m)}}var $i=!1,Cl=null,zl=!1,Fd=null,vf={onError:function(e){$i=!0,Cl=e}};function jf(e,r,n,o,i,s,l,a,d){$i=!1,Cl=null,yf.apply(vf,arguments)}function kf(e,r,n,o,i,s,l,a,d){if(jf.apply(this,arguments),$i){if($i){var u=Cl;$i=!1,Cl=null}else throw Error(Se(198));zl||(zl=!0,Fd=u)}}function Co(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,r.flags&4098&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function vb(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function Gg(e){if(Co(e)!==e)throw Error(Se(188))}function wf(e){var r=e.alternate;if(!r){if(r=Co(e),r===null)throw Error(Se(188));return r!==e?null:e}for(var n=e,o=r;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(o=i.return,o!==null){n=o;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Gg(i),e;if(s===o)return Gg(i),r;s=s.sibling}throw Error(Se(188))}if(n.return!==o.return)n=i,o=s;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,o=s;break}if(a===o){l=!0,o=i,n=s;break}a=a.sibling}if(!l){for(a=s.child;a;){if(a===n){l=!0,n=s,o=i;break}if(a===o){l=!0,o=s,n=i;break}a=a.sibling}if(!l)throw Error(Se(189))}}if(n.alternate!==o)throw Error(Se(190))}if(n.tag!==3)throw Error(Se(188));return n.stateNode.current===n?e:r}function jb(e){return e=wf(e),e!==null?kb(e):null}function kb(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=kb(e);if(r!==null)return r;e=e.sibling}return null}var wb=wr.unstable_scheduleCallback,Ug=wr.unstable_cancelCallback,Sf=wr.unstable_shouldYield,Cf=wr.unstable_requestPaint,Lt=wr.unstable_now,zf=wr.unstable_getCurrentPriorityLevel,Lc=wr.unstable_ImmediatePriority,Sb=wr.unstable_UserBlockingPriority,Tl=wr.unstable_NormalPriority,Tf=wr.unstable_LowPriority,Cb=wr.unstable_IdlePriority,na=null,nn=null;function If(e){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(na,e,void 0,(e.current.flags&128)===128)}catch{}}var Yr=Math.clz32?Math.clz32:Ef,Bf=Math.log,Rf=Math.LN2;function Ef(e){return e>>>=0,e===0?32:31-(Bf(e)/Rf|0)|0}var Es=64,Fs=4194304;function Ei(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Il(e,r){var n=e.pendingLanes;if(n===0)return 0;var o=0,i=e.suspendedLanes,s=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?o=Ei(a):(s&=l,s!==0&&(o=Ei(s)))}else l=n&~i,l!==0?o=Ei(l):s!==0&&(o=Ei(s));if(o===0)return 0;if(r!==0&&r!==o&&!(r&i)&&(i=o&-o,s=r&-r,i>=s||i===16&&(s&4194240)!==0))return r;if(o&4&&(o|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=o;0<r;)n=31-Yr(r),i=1<<n,o|=e[n],r&=~i;return o}function Ff(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Af(e,r){for(var n=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-Yr(s),a=1<<l,d=i[l];d===-1?(!(a&n)||a&o)&&(i[l]=Ff(a,r)):d<=r&&(e.expiredLanes|=a),s&=~a}}function Ad(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zb(){var e=Es;return Es<<=1,!(Es&4194240)&&(Es=64),e}function Ba(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function ws(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Yr(r),e[r]=n}function Df(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Yr(n),s=1<<i;r[i]=0,o[i]=-1,e[i]=-1,n&=~s}}function _c(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var o=31-Yr(n),i=1<<o;i&r|e[o]&r&&(e[o]|=r),n&=~i}}var ft=0;function Tb(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ib,$c,Bb,Rb,Eb,Dd=!1,As=[],$n=null,Pn=null,Nn=null,ts=new Map,rs=new Map,Dn=[],Wf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vg(e,r){switch(e){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":ts.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":rs.delete(r.pointerId)}}function vi(e,r,n,o,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:r,domEventName:n,eventSystemFlags:o,nativeEvent:s,targetContainers:[i]},r!==null&&(r=Cs(r),r!==null&&$c(r)),e):(e.eventSystemFlags|=o,r=e.targetContainers,i!==null&&r.indexOf(i)===-1&&r.push(i),e)}function Mf(e,r,n,o,i){switch(r){case"focusin":return $n=vi($n,e,r,n,o,i),!0;case"dragenter":return Pn=vi(Pn,e,r,n,o,i),!0;case"mouseover":return Nn=vi(Nn,e,r,n,o,i),!0;case"pointerover":var s=i.pointerId;return ts.set(s,vi(ts.get(s)||null,e,r,n,o,i)),!0;case"gotpointercapture":return s=i.pointerId,rs.set(s,vi(rs.get(s)||null,e,r,n,o,i)),!0}return!1}function Fb(e){var r=po(e.target);if(r!==null){var n=Co(r);if(n!==null){if(r=n.tag,r===13){if(r=vb(n),r!==null){e.blockedOn=r,Eb(e.priority,function(){Bb(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ul(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=Wd(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Bd=o,n.target.dispatchEvent(o),Bd=null}else return r=Cs(n),r!==null&&$c(r),e.blockedOn=n,!1;r.shift()}return!0}function Yg(e,r,n){ul(e)&&n.delete(r)}function Lf(){Dd=!1,$n!==null&&ul($n)&&($n=null),Pn!==null&&ul(Pn)&&(Pn=null),Nn!==null&&ul(Nn)&&(Nn=null),ts.forEach(Yg),rs.forEach(Yg)}function ji(e,r){e.blockedOn===r&&(e.blockedOn=null,Dd||(Dd=!0,wr.unstable_scheduleCallback(wr.unstable_NormalPriority,Lf)))}function ns(e){function r(i){return ji(i,e)}if(0<As.length){ji(As[0],e);for(var n=1;n<As.length;n++){var o=As[n];o.blockedOn===e&&(o.blockedOn=null)}}for($n!==null&&ji($n,e),Pn!==null&&ji(Pn,e),Nn!==null&&ji(Nn,e),ts.forEach(r),rs.forEach(r),n=0;n<Dn.length;n++)o=Dn[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Dn.length&&(n=Dn[0],n.blockedOn===null);)Fb(n),n.blockedOn===null&&Dn.shift()}var ei=zn.ReactCurrentBatchConfig,Bl=!0;function _f(e,r,n,o){var i=ft,s=ei.transition;ei.transition=null;try{ft=1,Pc(e,r,n,o)}finally{ft=i,ei.transition=s}}function $f(e,r,n,o){var i=ft,s=ei.transition;ei.transition=null;try{ft=4,Pc(e,r,n,o)}finally{ft=i,ei.transition=s}}function Pc(e,r,n,o){if(Bl){var i=Wd(e,r,n,o);if(i===null)$a(e,r,o,Rl,n),Vg(e,o);else if(Mf(i,e,r,n,o))o.stopPropagation();else if(Vg(e,o),r&4&&-1<Wf.indexOf(e)){for(;i!==null;){var s=Cs(i);if(s!==null&&Ib(s),s=Wd(e,r,n,o),s===null&&$a(e,r,o,Rl,n),s===i)break;i=s}i!==null&&o.stopPropagation()}else $a(e,r,o,null,n)}}var Rl=null;function Wd(e,r,n,o){if(Rl=null,e=Mc(o),e=po(e),e!==null)if(r=Co(e),r===null)e=null;else if(n=r.tag,n===13){if(e=vb(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Rl=e,null}function Ab(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zf()){case Lc:return 1;case Sb:return 4;case Tl:case Tf:return 16;case Cb:return 536870912;default:return 16}default:return 16}}var Ln=null,Nc=null,pl=null;function Db(){if(pl)return pl;var e,r=Nc,n=r.length,o,i="value"in Ln?Ln.value:Ln.textContent,s=i.length;for(e=0;e<n&&r[e]===i[e];e++);var l=n-e;for(o=1;o<=l&&r[n-o]===i[s-o];o++);return pl=i.slice(e,1<o?1-o:void 0)}function bl(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Ds(){return!0}function Kg(){return!1}function Cr(e){function r(n,o,i,s,l){this._reactName=n,this._targetInst=i,this.type=o,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ds:Kg,this.isPropagationStopped=Kg,this}return Dt(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ds)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ds)},persist:function(){},isPersistent:Ds}),r}var bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oc=Cr(bi),Ss=Dt({},bi,{view:0,detail:0}),Pf=Cr(Ss),Ra,Ea,ki,oa=Dt({},Ss,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ki&&(ki&&e.type==="mousemove"?(Ra=e.screenX-ki.screenX,Ea=e.screenY-ki.screenY):Ea=Ra=0,ki=e),Ra)},movementY:function(e){return"movementY"in e?e.movementY:Ea}}),Qg=Cr(oa),Nf=Dt({},oa,{dataTransfer:0}),Of=Cr(Nf),Hf=Dt({},Ss,{relatedTarget:0}),Fa=Cr(Hf),Gf=Dt({},bi,{animationName:0,elapsedTime:0,pseudoElement:0}),Uf=Cr(Gf),Vf=Dt({},bi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yf=Cr(Vf),Kf=Dt({},bi,{data:0}),qg=Cr(Kf),Qf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zf(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Xf[e])?!!r[e]:!1}function Hc(){return Zf}var Jf=Dt({},Ss,{key:function(e){if(e.key){var r=Qf[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=bl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hc,charCode:function(e){return e.type==="keypress"?bl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ex=Cr(Jf),tx=Dt({},oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xg=Cr(tx),rx=Dt({},Ss,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hc}),nx=Cr(rx),ox=Dt({},bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),ix=Cr(ox),sx=Dt({},oa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lx=Cr(sx),ax=[9,13,27,32],Gc=jn&&"CompositionEvent"in window,Pi=null;jn&&"documentMode"in document&&(Pi=document.documentMode);var dx=jn&&"TextEvent"in window&&!Pi,Wb=jn&&(!Gc||Pi&&8<Pi&&11>=Pi),Zg=" ",Jg=!1;function Mb(e,r){switch(e){case"keyup":return ax.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lb(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var No=!1;function cx(e,r){switch(e){case"compositionend":return Lb(r);case"keypress":return r.which!==32?null:(Jg=!0,Zg);case"textInput":return e=r.data,e===Zg&&Jg?null:e;default:return null}}function gx(e,r){if(No)return e==="compositionend"||!Gc&&Mb(e,r)?(e=Db(),pl=Nc=Ln=null,No=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Wb&&r.locale!=="ko"?null:r.data;default:return null}}var ux={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eu(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!ux[e.type]:r==="textarea"}function _b(e,r,n,o){mb(o),r=El(r,"onChange"),0<r.length&&(n=new Oc("onChange","change",null,n,o),e.push({event:n,listeners:r}))}var Ni=null,os=null;function px(e){Qb(e,0)}function ia(e){var r=Go(e);if(ab(r))return e}function bx(e,r){if(e==="change")return r}var $b=!1;if(jn){var Aa;if(jn){var Da="oninput"in document;if(!Da){var tu=document.createElement("div");tu.setAttribute("oninput","return;"),Da=typeof tu.oninput=="function"}Aa=Da}else Aa=!1;$b=Aa&&(!document.documentMode||9<document.documentMode)}function ru(){Ni&&(Ni.detachEvent("onpropertychange",Pb),os=Ni=null)}function Pb(e){if(e.propertyName==="value"&&ia(os)){var r=[];_b(r,os,e,Mc(e)),yb(px,r)}}function mx(e,r,n){e==="focusin"?(ru(),Ni=r,os=n,Ni.attachEvent("onpropertychange",Pb)):e==="focusout"&&ru()}function hx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ia(os)}function fx(e,r){if(e==="click")return ia(r)}function xx(e,r){if(e==="input"||e==="change")return ia(r)}function yx(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Qr=typeof Object.is=="function"?Object.is:yx;function is(e,r){if(Qr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),o=Object.keys(r);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var i=n[o];if(!fd.call(r,i)||!Qr(e[i],r[i]))return!1}return!0}function nu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ou(e,r){var n=nu(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=r&&o>=r)return{node:n,offset:r-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nu(n)}}function Nb(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Nb(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function Ob(){for(var e=window,r=Sl();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=Sl(e.document)}return r}function Uc(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function vx(e){var r=Ob(),n=e.focusedElem,o=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&Nb(n.ownerDocument.documentElement,n)){if(o!==null&&Uc(n)){if(r=o.start,e=o.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(o.start,i);o=o.end===void 0?s:Math.min(o.end,i),!e.extend&&s>o&&(i=o,o=s,s=i),i=ou(n,s);var l=ou(n,o);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(r=r.createRange(),r.setStart(i.node,i.offset),e.removeAllRanges(),s>o?(e.addRange(r),e.extend(l.node,l.offset)):(r.setEnd(l.node,l.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jx=jn&&"documentMode"in document&&11>=document.documentMode,Oo=null,Md=null,Oi=null,Ld=!1;function iu(e,r,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ld||Oo==null||Oo!==Sl(o)||(o=Oo,"selectionStart"in o&&Uc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Oi&&is(Oi,o)||(Oi=o,o=El(Md,"onSelect"),0<o.length&&(r=new Oc("onSelect","select",null,r,n),e.push({event:r,listeners:o}),r.target=Oo)))}function Ws(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var Ho={animationend:Ws("Animation","AnimationEnd"),animationiteration:Ws("Animation","AnimationIteration"),animationstart:Ws("Animation","AnimationStart"),transitionend:Ws("Transition","TransitionEnd")},Wa={},Hb={};jn&&(Hb=document.createElement("div").style,"AnimationEvent"in window||(delete Ho.animationend.animation,delete Ho.animationiteration.animation,delete Ho.animationstart.animation),"TransitionEvent"in window||delete Ho.transitionend.transition);function sa(e){if(Wa[e])return Wa[e];if(!Ho[e])return e;var r=Ho[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in Hb)return Wa[e]=r[n];return e}var Gb=sa("animationend"),Ub=sa("animationiteration"),Vb=sa("animationstart"),Yb=sa("transitionend"),Kb=new Map,su="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xn(e,r){Kb.set(e,r),So(r,[e])}for(var Ma=0;Ma<su.length;Ma++){var La=su[Ma],kx=La.toLowerCase(),wx=La[0].toUpperCase()+La.slice(1);Xn(kx,"on"+wx)}Xn(Gb,"onAnimationEnd");Xn(Ub,"onAnimationIteration");Xn(Vb,"onAnimationStart");Xn("dblclick","onDoubleClick");Xn("focusin","onFocus");Xn("focusout","onBlur");Xn(Yb,"onTransitionEnd");ii("onMouseEnter",["mouseout","mouseover"]);ii("onMouseLeave",["mouseout","mouseover"]);ii("onPointerEnter",["pointerout","pointerover"]);ii("onPointerLeave",["pointerout","pointerover"]);So("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));So("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));So("onBeforeInput",["compositionend","keypress","textInput","paste"]);So("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));So("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));So("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fi));function lu(e,r,n){var o=e.type||"unknown-event";e.currentTarget=n,kf(o,r,void 0,e),e.currentTarget=null}function Qb(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],i=o.event;o=o.listeners;e:{var s=void 0;if(r)for(var l=o.length-1;0<=l;l--){var a=o[l],d=a.instance,u=a.currentTarget;if(a=a.listener,d!==s&&i.isPropagationStopped())break e;lu(i,a,u),s=d}else for(l=0;l<o.length;l++){if(a=o[l],d=a.instance,u=a.currentTarget,a=a.listener,d!==s&&i.isPropagationStopped())break e;lu(i,a,u),s=d}}}if(zl)throw e=Fd,zl=!1,Fd=null,e}function zt(e,r){var n=r[Od];n===void 0&&(n=r[Od]=new Set);var o=e+"__bubble";n.has(o)||(qb(r,e,2,!1),n.add(o))}function _a(e,r,n){var o=0;r&&(o|=4),qb(n,e,o,r)}var Ms="_reactListening"+Math.random().toString(36).slice(2);function ss(e){if(!e[Ms]){e[Ms]=!0,nb.forEach(function(n){n!=="selectionchange"&&(Sx.has(n)||_a(n,!1,e),_a(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Ms]||(r[Ms]=!0,_a("selectionchange",!1,r))}}function qb(e,r,n,o){switch(Ab(r)){case 1:var i=_f;break;case 4:i=$f;break;default:i=Pc}n=i.bind(null,r,n,e),i=void 0,!Ed||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(r,n,{capture:!0,passive:i}):e.addEventListener(r,n,!0):i!==void 0?e.addEventListener(r,n,{passive:i}):e.addEventListener(r,n,!1)}function $a(e,r,n,o,i){var s=o;if(!(r&1)&&!(r&2)&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var a=o.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=o.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;l=l.return}for(;a!==null;){if(l=po(a),l===null)return;if(d=l.tag,d===5||d===6){o=s=l;continue e}a=a.parentNode}}o=o.return}yb(function(){var u=s,m=Mc(n),f=[];e:{var h=Kb.get(e);if(h!==void 0){var I=Oc,B=e;switch(e){case"keypress":if(bl(n)===0)break e;case"keydown":case"keyup":I=ex;break;case"focusin":B="focus",I=Fa;break;case"focusout":B="blur",I=Fa;break;case"beforeblur":case"afterblur":I=Fa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Qg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=Of;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=nx;break;case Gb:case Ub:case Vb:I=Uf;break;case Yb:I=ix;break;case"scroll":I=Pf;break;case"wheel":I=lx;break;case"copy":case"cut":case"paste":I=Yf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Xg}var k=(r&4)!==0,C=!k&&e==="scroll",p=k?h!==null?h+"Capture":null:h;k=[];for(var c=u,b;c!==null;){b=c;var T=b.stateNode;if(b.tag===5&&T!==null&&(b=T,p!==null&&(T=es(c,p),T!=null&&k.push(ls(c,T,b)))),C)break;c=c.return}0<k.length&&(h=new I(h,B,null,n,m),f.push({event:h,listeners:k}))}}if(!(r&7)){e:{if(h=e==="mouseover"||e==="pointerover",I=e==="mouseout"||e==="pointerout",h&&n!==Bd&&(B=n.relatedTarget||n.fromElement)&&(po(B)||B[kn]))break e;if((I||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,I?(B=n.relatedTarget||n.toElement,I=u,B=B?po(B):null,B!==null&&(C=Co(B),B!==C||B.tag!==5&&B.tag!==6)&&(B=null)):(I=null,B=u),I!==B)){if(k=Qg,T="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=Xg,T="onPointerLeave",p="onPointerEnter",c="pointer"),C=I==null?h:Go(I),b=B==null?h:Go(B),h=new k(T,c+"leave",I,n,m),h.target=C,h.relatedTarget=b,T=null,po(m)===u&&(k=new k(p,c+"enter",B,n,m),k.target=b,k.relatedTarget=C,T=k),C=T,I&&B)t:{for(k=I,p=B,c=0,b=k;b;b=Bo(b))c++;for(b=0,T=p;T;T=Bo(T))b++;for(;0<c-b;)k=Bo(k),c--;for(;0<b-c;)p=Bo(p),b--;for(;c--;){if(k===p||p!==null&&k===p.alternate)break t;k=Bo(k),p=Bo(p)}k=null}else k=null;I!==null&&au(f,h,I,k,!1),B!==null&&C!==null&&au(f,C,B,k,!0)}}e:{if(h=u?Go(u):window,I=h.nodeName&&h.nodeName.toLowerCase(),I==="select"||I==="input"&&h.type==="file")var y=bx;else if(eu(h))if($b)y=xx;else{y=hx;var w=mx}else(I=h.nodeName)&&I.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(y=fx);if(y&&(y=y(e,u))){_b(f,y,n,m);break e}w&&w(e,h,u),e==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&Sd(h,"number",h.value)}switch(w=u?Go(u):window,e){case"focusin":(eu(w)||w.contentEditable==="true")&&(Oo=w,Md=u,Oi=null);break;case"focusout":Oi=Md=Oo=null;break;case"mousedown":Ld=!0;break;case"contextmenu":case"mouseup":case"dragend":Ld=!1,iu(f,n,m);break;case"selectionchange":if(jx)break;case"keydown":case"keyup":iu(f,n,m)}var D;if(Gc)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else No?Mb(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Wb&&n.locale!=="ko"&&(No||S!=="onCompositionStart"?S==="onCompositionEnd"&&No&&(D=Db()):(Ln=m,Nc="value"in Ln?Ln.value:Ln.textContent,No=!0)),w=El(u,S),0<w.length&&(S=new qg(S,e,null,n,m),f.push({event:S,listeners:w}),D?S.data=D:(D=Lb(n),D!==null&&(S.data=D)))),(D=dx?cx(e,n):gx(e,n))&&(u=El(u,"onBeforeInput"),0<u.length&&(m=new qg("onBeforeInput","beforeinput",null,n,m),f.push({event:m,listeners:u}),m.data=D))}Qb(f,r)})}function ls(e,r,n){return{instance:e,listener:r,currentTarget:n}}function El(e,r){for(var n=r+"Capture",o=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=es(e,n),s!=null&&o.unshift(ls(e,s,i)),s=es(e,r),s!=null&&o.push(ls(e,s,i))),e=e.return}return o}function Bo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function au(e,r,n,o,i){for(var s=r._reactName,l=[];n!==null&&n!==o;){var a=n,d=a.alternate,u=a.stateNode;if(d!==null&&d===o)break;a.tag===5&&u!==null&&(a=u,i?(d=es(n,s),d!=null&&l.unshift(ls(n,d,a))):i||(d=es(n,s),d!=null&&l.push(ls(n,d,a)))),n=n.return}l.length!==0&&e.push({event:r,listeners:l})}var Cx=/\r\n?/g,zx=/\u0000|\uFFFD/g;function du(e){return(typeof e=="string"?e:""+e).replace(Cx,`
`).replace(zx,"")}function Ls(e,r,n){if(r=du(r),du(e)!==r&&n)throw Error(Se(425))}function Fl(){}var _d=null,$d=null;function Pd(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Nd=typeof setTimeout=="function"?setTimeout:void 0,Tx=typeof clearTimeout=="function"?clearTimeout:void 0,cu=typeof Promise=="function"?Promise:void 0,Ix=typeof queueMicrotask=="function"?queueMicrotask:typeof cu<"u"?function(e){return cu.resolve(null).then(e).catch(Bx)}:Nd;function Bx(e){setTimeout(function(){throw e})}function Pa(e,r){var n=r,o=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(o===0){e.removeChild(i),ns(r);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=i}while(n);ns(r)}function On(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function gu(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var mi=Math.random().toString(36).slice(2),rn="__reactFiber$"+mi,as="__reactProps$"+mi,kn="__reactContainer$"+mi,Od="__reactEvents$"+mi,Rx="__reactListeners$"+mi,Ex="__reactHandles$"+mi;function po(e){var r=e[rn];if(r)return r;for(var n=e.parentNode;n;){if(r=n[kn]||n[rn]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=gu(e);e!==null;){if(n=e[rn])return n;e=gu(e)}return r}e=n,n=e.parentNode}return null}function Cs(e){return e=e[rn]||e[kn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Go(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Se(33))}function la(e){return e[as]||null}var Hd=[],Uo=-1;function Zn(e){return{current:e}}function Tt(e){0>Uo||(e.current=Hd[Uo],Hd[Uo]=null,Uo--)}function St(e,r){Uo++,Hd[Uo]=e.current,e.current=r}var Qn={},rr=Zn(Qn),gr=Zn(!1),yo=Qn;function si(e,r){var n=e.type.contextTypes;if(!n)return Qn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===r)return o.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=r[s];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),i}function ur(e){return e=e.childContextTypes,e!=null}function Al(){Tt(gr),Tt(rr)}function uu(e,r,n){if(rr.current!==Qn)throw Error(Se(168));St(rr,r),St(gr,n)}function Xb(e,r,n){var o=e.stateNode;if(r=r.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var i in o)if(!(i in r))throw Error(Se(108,mf(e)||"Unknown",i));return Dt({},n,o)}function Dl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qn,yo=rr.current,St(rr,e),St(gr,gr.current),!0}function pu(e,r,n){var o=e.stateNode;if(!o)throw Error(Se(169));n?(e=Xb(e,r,yo),o.__reactInternalMemoizedMergedChildContext=e,Tt(gr),Tt(rr),St(rr,e)):Tt(gr),St(gr,n)}var bn=null,aa=!1,Na=!1;function Zb(e){bn===null?bn=[e]:bn.push(e)}function Fx(e){aa=!0,Zb(e)}function Jn(){if(!Na&&bn!==null){Na=!0;var e=0,r=ft;try{var n=bn;for(ft=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}bn=null,aa=!1}catch(i){throw bn!==null&&(bn=bn.slice(e+1)),wb(Lc,Jn),i}finally{ft=r,Na=!1}}return null}var Vo=[],Yo=0,Wl=null,Ml=0,Er=[],Fr=0,vo=null,fn=1,xn="";function ao(e,r){Vo[Yo++]=Ml,Vo[Yo++]=Wl,Wl=e,Ml=r}function Jb(e,r,n){Er[Fr++]=fn,Er[Fr++]=xn,Er[Fr++]=vo,vo=e;var o=fn;e=xn;var i=32-Yr(o)-1;o&=~(1<<i),n+=1;var s=32-Yr(r)+i;if(30<s){var l=i-i%5;s=(o&(1<<l)-1).toString(32),o>>=l,i-=l,fn=1<<32-Yr(r)+i|n<<i|o,xn=s+e}else fn=1<<s|n<<i|o,xn=e}function Vc(e){e.return!==null&&(ao(e,1),Jb(e,1,0))}function Yc(e){for(;e===Wl;)Wl=Vo[--Yo],Vo[Yo]=null,Ml=Vo[--Yo],Vo[Yo]=null;for(;e===vo;)vo=Er[--Fr],Er[Fr]=null,xn=Er[--Fr],Er[Fr]=null,fn=Er[--Fr],Er[Fr]=null}var kr=null,jr=null,Rt=!1,Vr=null;function em(e,r){var n=Ar(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function bu(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,kr=e,jr=On(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,kr=e,jr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=vo!==null?{id:fn,overflow:xn}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=Ar(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,kr=e,jr=null,!0):!1;default:return!1}}function Gd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ud(e){if(Rt){var r=jr;if(r){var n=r;if(!bu(e,r)){if(Gd(e))throw Error(Se(418));r=On(n.nextSibling);var o=kr;r&&bu(e,r)?em(o,n):(e.flags=e.flags&-4097|2,Rt=!1,kr=e)}}else{if(Gd(e))throw Error(Se(418));e.flags=e.flags&-4097|2,Rt=!1,kr=e}}}function mu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;kr=e}function _s(e){if(e!==kr)return!1;if(!Rt)return mu(e),Rt=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Pd(e.type,e.memoizedProps)),r&&(r=jr)){if(Gd(e))throw tm(),Error(Se(418));for(;r;)em(e,r),r=On(r.nextSibling)}if(mu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Se(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){jr=On(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}jr=null}}else jr=kr?On(e.stateNode.nextSibling):null;return!0}function tm(){for(var e=jr;e;)e=On(e.nextSibling)}function li(){jr=kr=null,Rt=!1}function Kc(e){Vr===null?Vr=[e]:Vr.push(e)}var Ax=zn.ReactCurrentBatchConfig;function wi(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Se(309));var o=n.stateNode}if(!o)throw Error(Se(147,e));var i=o,s=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===s?r.ref:(r=function(l){var a=i.refs;l===null?delete a[s]:a[s]=l},r._stringRef=s,r)}if(typeof e!="string")throw Error(Se(284));if(!n._owner)throw Error(Se(290,e))}return e}function $s(e,r){throw e=Object.prototype.toString.call(r),Error(Se(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function hu(e){var r=e._init;return r(e._payload)}function rm(e){function r(p,c){if(e){var b=p.deletions;b===null?(p.deletions=[c],p.flags|=16):b.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)r(p,c),c=c.sibling;return null}function o(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function i(p,c){return p=Vn(p,c),p.index=0,p.sibling=null,p}function s(p,c,b){return p.index=b,e?(b=p.alternate,b!==null?(b=b.index,b<c?(p.flags|=2,c):b):(p.flags|=2,c)):(p.flags|=1048576,c)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,c,b,T){return c===null||c.tag!==6?(c=Ka(b,p.mode,T),c.return=p,c):(c=i(c,b),c.return=p,c)}function d(p,c,b,T){var y=b.type;return y===Po?m(p,c,b.props.children,T,b.key):c!==null&&(c.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===Fn&&hu(y)===c.type)?(T=i(c,b.props),T.ref=wi(p,c,b),T.return=p,T):(T=jl(b.type,b.key,b.props,null,p.mode,T),T.ref=wi(p,c,b),T.return=p,T)}function u(p,c,b,T){return c===null||c.tag!==4||c.stateNode.containerInfo!==b.containerInfo||c.stateNode.implementation!==b.implementation?(c=Qa(b,p.mode,T),c.return=p,c):(c=i(c,b.children||[]),c.return=p,c)}function m(p,c,b,T,y){return c===null||c.tag!==7?(c=xo(b,p.mode,T,y),c.return=p,c):(c=i(c,b),c.return=p,c)}function f(p,c,b){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ka(""+c,p.mode,b),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Is:return b=jl(c.type,c.key,c.props,null,p.mode,b),b.ref=wi(p,null,c),b.return=p,b;case $o:return c=Qa(c,p.mode,b),c.return=p,c;case Fn:var T=c._init;return f(p,T(c._payload),b)}if(Ri(c)||xi(c))return c=xo(c,p.mode,b,null),c.return=p,c;$s(p,c)}return null}function h(p,c,b,T){var y=c!==null?c.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return y!==null?null:a(p,c,""+b,T);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Is:return b.key===y?d(p,c,b,T):null;case $o:return b.key===y?u(p,c,b,T):null;case Fn:return y=b._init,h(p,c,y(b._payload),T)}if(Ri(b)||xi(b))return y!==null?null:m(p,c,b,T,null);$s(p,b)}return null}function I(p,c,b,T,y){if(typeof T=="string"&&T!==""||typeof T=="number")return p=p.get(b)||null,a(c,p,""+T,y);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Is:return p=p.get(T.key===null?b:T.key)||null,d(c,p,T,y);case $o:return p=p.get(T.key===null?b:T.key)||null,u(c,p,T,y);case Fn:var w=T._init;return I(p,c,b,w(T._payload),y)}if(Ri(T)||xi(T))return p=p.get(b)||null,m(c,p,T,y,null);$s(c,T)}return null}function B(p,c,b,T){for(var y=null,w=null,D=c,S=c=0,j=null;D!==null&&S<b.length;S++){D.index>S?(j=D,D=null):j=D.sibling;var N=h(p,D,b[S],T);if(N===null){D===null&&(D=j);break}e&&D&&N.alternate===null&&r(p,D),c=s(N,c,S),w===null?y=N:w.sibling=N,w=N,D=j}if(S===b.length)return n(p,D),Rt&&ao(p,S),y;if(D===null){for(;S<b.length;S++)D=f(p,b[S],T),D!==null&&(c=s(D,c,S),w===null?y=D:w.sibling=D,w=D);return Rt&&ao(p,S),y}for(D=o(p,D);S<b.length;S++)j=I(D,p,S,b[S],T),j!==null&&(e&&j.alternate!==null&&D.delete(j.key===null?S:j.key),c=s(j,c,S),w===null?y=j:w.sibling=j,w=j);return e&&D.forEach(function(J){return r(p,J)}),Rt&&ao(p,S),y}function k(p,c,b,T){var y=xi(b);if(typeof y!="function")throw Error(Se(150));if(b=y.call(b),b==null)throw Error(Se(151));for(var w=y=null,D=c,S=c=0,j=null,N=b.next();D!==null&&!N.done;S++,N=b.next()){D.index>S?(j=D,D=null):j=D.sibling;var J=h(p,D,N.value,T);if(J===null){D===null&&(D=j);break}e&&D&&J.alternate===null&&r(p,D),c=s(J,c,S),w===null?y=J:w.sibling=J,w=J,D=j}if(N.done)return n(p,D),Rt&&ao(p,S),y;if(D===null){for(;!N.done;S++,N=b.next())N=f(p,N.value,T),N!==null&&(c=s(N,c,S),w===null?y=N:w.sibling=N,w=N);return Rt&&ao(p,S),y}for(D=o(p,D);!N.done;S++,N=b.next())N=I(D,p,S,N.value,T),N!==null&&(e&&N.alternate!==null&&D.delete(N.key===null?S:N.key),c=s(N,c,S),w===null?y=N:w.sibling=N,w=N);return e&&D.forEach(function(se){return r(p,se)}),Rt&&ao(p,S),y}function C(p,c,b,T){if(typeof b=="object"&&b!==null&&b.type===Po&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Is:e:{for(var y=b.key,w=c;w!==null;){if(w.key===y){if(y=b.type,y===Po){if(w.tag===7){n(p,w.sibling),c=i(w,b.props.children),c.return=p,p=c;break e}}else if(w.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===Fn&&hu(y)===w.type){n(p,w.sibling),c=i(w,b.props),c.ref=wi(p,w,b),c.return=p,p=c;break e}n(p,w);break}else r(p,w);w=w.sibling}b.type===Po?(c=xo(b.props.children,p.mode,T,b.key),c.return=p,p=c):(T=jl(b.type,b.key,b.props,null,p.mode,T),T.ref=wi(p,c,b),T.return=p,p=T)}return l(p);case $o:e:{for(w=b.key;c!==null;){if(c.key===w)if(c.tag===4&&c.stateNode.containerInfo===b.containerInfo&&c.stateNode.implementation===b.implementation){n(p,c.sibling),c=i(c,b.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else r(p,c);c=c.sibling}c=Qa(b,p.mode,T),c.return=p,p=c}return l(p);case Fn:return w=b._init,C(p,c,w(b._payload),T)}if(Ri(b))return B(p,c,b,T);if(xi(b))return k(p,c,b,T);$s(p,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,c!==null&&c.tag===6?(n(p,c.sibling),c=i(c,b),c.return=p,p=c):(n(p,c),c=Ka(b,p.mode,T),c.return=p,p=c),l(p)):n(p,c)}return C}var ai=rm(!0),nm=rm(!1),Ll=Zn(null),_l=null,Ko=null,Qc=null;function qc(){Qc=Ko=_l=null}function Xc(e){var r=Ll.current;Tt(Ll),e._currentValue=r}function Vd(e,r,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,o!==null&&(o.childLanes|=r)):o!==null&&(o.childLanes&r)!==r&&(o.childLanes|=r),e===n)break;e=e.return}}function ti(e,r){_l=e,Qc=Ko=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&r&&(cr=!0),e.firstContext=null)}function Wr(e){var r=e._currentValue;if(Qc!==e)if(e={context:e,memoizedValue:r,next:null},Ko===null){if(_l===null)throw Error(Se(308));Ko=e,_l.dependencies={lanes:0,firstContext:e}}else Ko=Ko.next=e;return r}var bo=null;function Zc(e){bo===null?bo=[e]:bo.push(e)}function om(e,r,n,o){var i=r.interleaved;return i===null?(n.next=n,Zc(r)):(n.next=i.next,i.next=n),r.interleaved=n,wn(e,o)}function wn(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var An=!1;function Jc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function im(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yn(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function Hn(e,r,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,ct&2){var i=o.pending;return i===null?r.next=r:(r.next=i.next,i.next=r),o.pending=r,wn(e,n)}return i=o.interleaved,i===null?(r.next=r,Zc(o)):(r.next=i.next,i.next=r),o.interleaved=r,wn(e,n)}function ml(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var o=r.lanes;o&=e.pendingLanes,n|=o,r.lanes=n,_c(e,n)}}function fu(e,r){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?i=s=r:s=s.next=r}else i=s=r;n={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function $l(e,r,n,o){var i=e.updateQueue;An=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var d=a,u=d.next;d.next=null,l===null?s=u:l.next=u,l=d;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==l&&(a===null?m.firstBaseUpdate=u:a.next=u,m.lastBaseUpdate=d))}if(s!==null){var f=i.baseState;l=0,m=u=d=null,a=s;do{var h=a.lane,I=a.eventTime;if((o&h)===h){m!==null&&(m=m.next={eventTime:I,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var B=e,k=a;switch(h=r,I=n,k.tag){case 1:if(B=k.payload,typeof B=="function"){f=B.call(I,f,h);break e}f=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=k.payload,h=typeof B=="function"?B.call(I,f,h):B,h==null)break e;f=Dt({},f,h);break e;case 2:An=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else I={eventTime:I,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(u=m=I,d=f):m=m.next=I,l|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(m===null&&(d=f),i.baseState=d,i.firstBaseUpdate=u,i.lastBaseUpdate=m,r=i.shared.interleaved,r!==null){i=r;do l|=i.lane,i=i.next;while(i!==r)}else s===null&&(i.shared.lanes=0);ko|=l,e.lanes=l,e.memoizedState=f}}function xu(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var o=e[r],i=o.callback;if(i!==null){if(o.callback=null,o=n,typeof i!="function")throw Error(Se(191,i));i.call(o)}}}var zs={},on=Zn(zs),ds=Zn(zs),cs=Zn(zs);function mo(e){if(e===zs)throw Error(Se(174));return e}function eg(e,r){switch(St(cs,r),St(ds,e),St(on,zs),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:zd(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=zd(r,e)}Tt(on),St(on,r)}function di(){Tt(on),Tt(ds),Tt(cs)}function sm(e){mo(cs.current);var r=mo(on.current),n=zd(r,e.type);r!==n&&(St(ds,e),St(on,n))}function tg(e){ds.current===e&&(Tt(on),Tt(ds))}var Ft=Zn(0);function Pl(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Oa=[];function rg(){for(var e=0;e<Oa.length;e++)Oa[e]._workInProgressVersionPrimary=null;Oa.length=0}var hl=zn.ReactCurrentDispatcher,Ha=zn.ReactCurrentBatchConfig,jo=0,At=null,Pt=null,Gt=null,Nl=!1,Hi=!1,gs=0,Dx=0;function Xt(){throw Error(Se(321))}function ng(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!Qr(e[n],r[n]))return!1;return!0}function og(e,r,n,o,i,s){if(jo=s,At=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,hl.current=e===null||e.memoizedState===null?_x:$x,e=n(o,i),Hi){s=0;do{if(Hi=!1,gs=0,25<=s)throw Error(Se(301));s+=1,Gt=Pt=null,r.updateQueue=null,hl.current=Px,e=n(o,i)}while(Hi)}if(hl.current=Ol,r=Pt!==null&&Pt.next!==null,jo=0,Gt=Pt=At=null,Nl=!1,r)throw Error(Se(300));return e}function ig(){var e=gs!==0;return gs=0,e}function en(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?At.memoizedState=Gt=e:Gt=Gt.next=e,Gt}function Mr(){if(Pt===null){var e=At.alternate;e=e!==null?e.memoizedState:null}else e=Pt.next;var r=Gt===null?At.memoizedState:Gt.next;if(r!==null)Gt=r,Pt=e;else{if(e===null)throw Error(Se(310));Pt=e,e={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},Gt===null?At.memoizedState=Gt=e:Gt=Gt.next=e}return Gt}function us(e,r){return typeof r=="function"?r(e):r}function Ga(e){var r=Mr(),n=r.queue;if(n===null)throw Error(Se(311));n.lastRenderedReducer=e;var o=Pt,i=o.baseQueue,s=n.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}o.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,o=o.baseState;var a=l=null,d=null,u=s;do{var m=u.lane;if((jo&m)===m)d!==null&&(d=d.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),o=u.hasEagerState?u.eagerState:e(o,u.action);else{var f={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};d===null?(a=d=f,l=o):d=d.next=f,At.lanes|=m,ko|=m}u=u.next}while(u!==null&&u!==s);d===null?l=o:d.next=a,Qr(o,r.memoizedState)||(cr=!0),r.memoizedState=o,r.baseState=l,r.baseQueue=d,n.lastRenderedState=o}if(e=n.interleaved,e!==null){i=e;do s=i.lane,At.lanes|=s,ko|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function Ua(e){var r=Mr(),n=r.queue;if(n===null)throw Error(Se(311));n.lastRenderedReducer=e;var o=n.dispatch,i=n.pending,s=r.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do s=e(s,l.action),l=l.next;while(l!==i);Qr(s,r.memoizedState)||(cr=!0),r.memoizedState=s,r.baseQueue===null&&(r.baseState=s),n.lastRenderedState=s}return[s,o]}function lm(){}function am(e,r){var n=At,o=Mr(),i=r(),s=!Qr(o.memoizedState,i);if(s&&(o.memoizedState=i,cr=!0),o=o.queue,sg(gm.bind(null,n,o,e),[e]),o.getSnapshot!==r||s||Gt!==null&&Gt.memoizedState.tag&1){if(n.flags|=2048,ps(9,cm.bind(null,n,o,i,r),void 0,null),Ut===null)throw Error(Se(349));jo&30||dm(n,r,i)}return i}function dm(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=At.updateQueue,r===null?(r={lastEffect:null,stores:null},At.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function cm(e,r,n,o){r.value=n,r.getSnapshot=o,um(r)&&pm(e)}function gm(e,r,n){return n(function(){um(r)&&pm(e)})}function um(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!Qr(e,n)}catch{return!0}}function pm(e){var r=wn(e,1);r!==null&&Kr(r,e,1,-1)}function yu(e){var r=en();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:e},r.queue=e,e=e.dispatch=Lx.bind(null,At,e),[r.memoizedState,e]}function ps(e,r,n,o){return e={tag:e,create:r,destroy:n,deps:o,next:null},r=At.updateQueue,r===null?(r={lastEffect:null,stores:null},At.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,r.lastEffect=e)),e}function bm(){return Mr().memoizedState}function fl(e,r,n,o){var i=en();At.flags|=e,i.memoizedState=ps(1|r,n,void 0,o===void 0?null:o)}function da(e,r,n,o){var i=Mr();o=o===void 0?null:o;var s=void 0;if(Pt!==null){var l=Pt.memoizedState;if(s=l.destroy,o!==null&&ng(o,l.deps)){i.memoizedState=ps(r,n,s,o);return}}At.flags|=e,i.memoizedState=ps(1|r,n,s,o)}function vu(e,r){return fl(8390656,8,e,r)}function sg(e,r){return da(2048,8,e,r)}function mm(e,r){return da(4,2,e,r)}function hm(e,r){return da(4,4,e,r)}function fm(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function xm(e,r,n){return n=n!=null?n.concat([e]):null,da(4,4,fm.bind(null,r,e),n)}function lg(){}function ym(e,r){var n=Mr();r=r===void 0?null:r;var o=n.memoizedState;return o!==null&&r!==null&&ng(r,o[1])?o[0]:(n.memoizedState=[e,r],e)}function vm(e,r){var n=Mr();r=r===void 0?null:r;var o=n.memoizedState;return o!==null&&r!==null&&ng(r,o[1])?o[0]:(e=e(),n.memoizedState=[e,r],e)}function jm(e,r,n){return jo&21?(Qr(n,r)||(n=zb(),At.lanes|=n,ko|=n,e.baseState=!0),r):(e.baseState&&(e.baseState=!1,cr=!0),e.memoizedState=n)}function Wx(e,r){var n=ft;ft=n!==0&&4>n?n:4,e(!0);var o=Ha.transition;Ha.transition={};try{e(!1),r()}finally{ft=n,Ha.transition=o}}function km(){return Mr().memoizedState}function Mx(e,r,n){var o=Un(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},wm(e))Sm(r,n);else if(n=om(e,r,n,o),n!==null){var i=ir();Kr(n,e,o,i),Cm(n,r,o)}}function Lx(e,r,n){var o=Un(e),i={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(wm(e))Sm(r,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=r.lastRenderedReducer,s!==null))try{var l=r.lastRenderedState,a=s(l,n);if(i.hasEagerState=!0,i.eagerState=a,Qr(a,l)){var d=r.interleaved;d===null?(i.next=i,Zc(r)):(i.next=d.next,d.next=i),r.interleaved=i;return}}catch{}finally{}n=om(e,r,i,o),n!==null&&(i=ir(),Kr(n,e,o,i),Cm(n,r,o))}}function wm(e){var r=e.alternate;return e===At||r!==null&&r===At}function Sm(e,r){Hi=Nl=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function Cm(e,r,n){if(n&4194240){var o=r.lanes;o&=e.pendingLanes,n|=o,r.lanes=n,_c(e,n)}}var Ol={readContext:Wr,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},_x={readContext:Wr,useCallback:function(e,r){return en().memoizedState=[e,r===void 0?null:r],e},useContext:Wr,useEffect:vu,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,fl(4194308,4,fm.bind(null,r,e),n)},useLayoutEffect:function(e,r){return fl(4194308,4,e,r)},useInsertionEffect:function(e,r){return fl(4,2,e,r)},useMemo:function(e,r){var n=en();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var o=en();return r=n!==void 0?n(r):r,o.memoizedState=o.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},o.queue=e,e=e.dispatch=Mx.bind(null,At,e),[o.memoizedState,e]},useRef:function(e){var r=en();return e={current:e},r.memoizedState=e},useState:yu,useDebugValue:lg,useDeferredValue:function(e){return en().memoizedState=e},useTransition:function(){var e=yu(!1),r=e[0];return e=Wx.bind(null,e[1]),en().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var o=At,i=en();if(Rt){if(n===void 0)throw Error(Se(407));n=n()}else{if(n=r(),Ut===null)throw Error(Se(349));jo&30||dm(o,r,n)}i.memoizedState=n;var s={value:n,getSnapshot:r};return i.queue=s,vu(gm.bind(null,o,s,e),[e]),o.flags|=2048,ps(9,cm.bind(null,o,s,n,r),void 0,null),n},useId:function(){var e=en(),r=Ut.identifierPrefix;if(Rt){var n=xn,o=fn;n=(o&~(1<<32-Yr(o)-1)).toString(32)+n,r=":"+r+"R"+n,n=gs++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=Dx++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},$x={readContext:Wr,useCallback:ym,useContext:Wr,useEffect:sg,useImperativeHandle:xm,useInsertionEffect:mm,useLayoutEffect:hm,useMemo:vm,useReducer:Ga,useRef:bm,useState:function(){return Ga(us)},useDebugValue:lg,useDeferredValue:function(e){var r=Mr();return jm(r,Pt.memoizedState,e)},useTransition:function(){var e=Ga(us)[0],r=Mr().memoizedState;return[e,r]},useMutableSource:lm,useSyncExternalStore:am,useId:km,unstable_isNewReconciler:!1},Px={readContext:Wr,useCallback:ym,useContext:Wr,useEffect:sg,useImperativeHandle:xm,useInsertionEffect:mm,useLayoutEffect:hm,useMemo:vm,useReducer:Ua,useRef:bm,useState:function(){return Ua(us)},useDebugValue:lg,useDeferredValue:function(e){var r=Mr();return Pt===null?r.memoizedState=e:jm(r,Pt.memoizedState,e)},useTransition:function(){var e=Ua(us)[0],r=Mr().memoizedState;return[e,r]},useMutableSource:lm,useSyncExternalStore:am,useId:km,unstable_isNewReconciler:!1};function Or(e,r){if(e&&e.defaultProps){r=Dt({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function Yd(e,r,n,o){r=e.memoizedState,n=n(o,r),n=n==null?r:Dt({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ca={isMounted:function(e){return(e=e._reactInternals)?Co(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var o=ir(),i=Un(e),s=yn(o,i);s.payload=r,n!=null&&(s.callback=n),r=Hn(e,s,i),r!==null&&(Kr(r,e,i,o),ml(r,e,i))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var o=ir(),i=Un(e),s=yn(o,i);s.tag=1,s.payload=r,n!=null&&(s.callback=n),r=Hn(e,s,i),r!==null&&(Kr(r,e,i,o),ml(r,e,i))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=ir(),o=Un(e),i=yn(n,o);i.tag=2,r!=null&&(i.callback=r),r=Hn(e,i,o),r!==null&&(Kr(r,e,o,n),ml(r,e,o))}};function ju(e,r,n,o,i,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,l):r.prototype&&r.prototype.isPureReactComponent?!is(n,o)||!is(i,s):!0}function zm(e,r,n){var o=!1,i=Qn,s=r.contextType;return typeof s=="object"&&s!==null?s=Wr(s):(i=ur(r)?yo:rr.current,o=r.contextTypes,s=(o=o!=null)?si(e,i):Qn),r=new r(n,s),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ca,e.stateNode=r,r._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),r}function ku(e,r,n,o){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,o),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,o),r.state!==e&&ca.enqueueReplaceState(r,r.state,null)}function Kd(e,r,n,o){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Jc(e);var s=r.contextType;typeof s=="object"&&s!==null?i.context=Wr(s):(s=ur(r)?yo:rr.current,i.context=si(e,s)),i.state=e.memoizedState,s=r.getDerivedStateFromProps,typeof s=="function"&&(Yd(e,r,s,n),i.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&ca.enqueueReplaceState(i,i.state,null),$l(e,n,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ci(e,r){try{var n="",o=r;do n+=bf(o),o=o.return;while(o);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:r,stack:i,digest:null}}function Va(e,r,n){return{value:e,source:null,stack:n??null,digest:r??null}}function Qd(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var Nx=typeof WeakMap=="function"?WeakMap:Map;function Tm(e,r,n){n=yn(-1,n),n.tag=3,n.payload={element:null};var o=r.value;return n.callback=function(){Gl||(Gl=!0,ic=o),Qd(e,r)},n}function Im(e,r,n){n=yn(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=r.value;n.payload=function(){return o(i)},n.callback=function(){Qd(e,r)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Qd(e,r),typeof o!="function"&&(Gn===null?Gn=new Set([this]):Gn.add(this));var l=r.stack;this.componentDidCatch(r.value,{componentStack:l!==null?l:""})}),n}function wu(e,r,n){var o=e.pingCache;if(o===null){o=e.pingCache=new Nx;var i=new Set;o.set(r,i)}else i=o.get(r),i===void 0&&(i=new Set,o.set(r,i));i.has(n)||(i.add(n),e=ty.bind(null,e,r,n),r.then(e,e))}function Su(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function Cu(e,r,n,o,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=yn(-1,1),r.tag=2,Hn(n,r,1))),n.lanes|=1),e)}var Ox=zn.ReactCurrentOwner,cr=!1;function nr(e,r,n,o){r.child=e===null?nm(r,null,n,o):ai(r,e.child,n,o)}function zu(e,r,n,o,i){n=n.render;var s=r.ref;return ti(r,i),o=og(e,r,n,o,s,i),n=ig(),e!==null&&!cr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,Sn(e,r,i)):(Rt&&n&&Vc(r),r.flags|=1,nr(e,r,o,i),r.child)}function Tu(e,r,n,o,i){if(e===null){var s=n.type;return typeof s=="function"&&!mg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=s,Bm(e,r,s,o,i)):(e=jl(n.type,null,o,r,r.mode,i),e.ref=r.ref,e.return=r,r.child=e)}if(s=e.child,!(e.lanes&i)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:is,n(l,o)&&e.ref===r.ref)return Sn(e,r,i)}return r.flags|=1,e=Vn(s,o),e.ref=r.ref,e.return=r,r.child=e}function Bm(e,r,n,o,i){if(e!==null){var s=e.memoizedProps;if(is(s,o)&&e.ref===r.ref)if(cr=!1,r.pendingProps=o=s,(e.lanes&i)!==0)e.flags&131072&&(cr=!0);else return r.lanes=e.lanes,Sn(e,r,i)}return qd(e,r,n,o,i)}function Rm(e,r,n){var o=r.pendingProps,i=o.children,s=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},St(qo,vr),vr|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,St(qo,vr),vr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:n,St(qo,vr),vr|=o}else s!==null?(o=s.baseLanes|n,r.memoizedState=null):o=n,St(qo,vr),vr|=o;return nr(e,r,i,n),r.child}function Em(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function qd(e,r,n,o,i){var s=ur(n)?yo:rr.current;return s=si(r,s),ti(r,i),n=og(e,r,n,o,s,i),o=ig(),e!==null&&!cr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,Sn(e,r,i)):(Rt&&o&&Vc(r),r.flags|=1,nr(e,r,n,i),r.child)}function Iu(e,r,n,o,i){if(ur(n)){var s=!0;Dl(r)}else s=!1;if(ti(r,i),r.stateNode===null)xl(e,r),zm(r,n,o),Kd(r,n,o,i),o=!0;else if(e===null){var l=r.stateNode,a=r.memoizedProps;l.props=a;var d=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Wr(u):(u=ur(n)?yo:rr.current,u=si(r,u));var m=n.getDerivedStateFromProps,f=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==o||d!==u)&&ku(r,l,o,u),An=!1;var h=r.memoizedState;l.state=h,$l(r,o,l,i),d=r.memoizedState,a!==o||h!==d||gr.current||An?(typeof m=="function"&&(Yd(r,n,m,o),d=r.memoizedState),(a=An||ju(r,n,a,o,h,d,u))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(r.flags|=4194308)):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=o,r.memoizedState=d),l.props=o,l.state=d,l.context=u,o=a):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),o=!1)}else{l=r.stateNode,im(e,r),a=r.memoizedProps,u=r.type===r.elementType?a:Or(r.type,a),l.props=u,f=r.pendingProps,h=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=Wr(d):(d=ur(n)?yo:rr.current,d=si(r,d));var I=n.getDerivedStateFromProps;(m=typeof I=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||h!==d)&&ku(r,l,o,d),An=!1,h=r.memoizedState,l.state=h,$l(r,o,l,i);var B=r.memoizedState;a!==f||h!==B||gr.current||An?(typeof I=="function"&&(Yd(r,n,I,o),B=r.memoizedState),(u=An||ju(r,n,u,o,h,B,d)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,B,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,B,d)),typeof l.componentDidUpdate=="function"&&(r.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(r.flags|=1024),r.memoizedProps=o,r.memoizedState=B),l.props=o,l.state=B,l.context=d,o=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(r.flags|=1024),o=!1)}return Xd(e,r,n,o,s,i)}function Xd(e,r,n,o,i,s){Em(e,r);var l=(r.flags&128)!==0;if(!o&&!l)return i&&pu(r,n,!1),Sn(e,r,s);o=r.stateNode,Ox.current=r;var a=l&&typeof n.getDerivedStateFromError!="function"?null:o.render();return r.flags|=1,e!==null&&l?(r.child=ai(r,e.child,null,s),r.child=ai(r,null,a,s)):nr(e,r,a,s),r.memoizedState=o.state,i&&pu(r,n,!0),r.child}function Fm(e){var r=e.stateNode;r.pendingContext?uu(e,r.pendingContext,r.pendingContext!==r.context):r.context&&uu(e,r.context,!1),eg(e,r.containerInfo)}function Bu(e,r,n,o,i){return li(),Kc(i),r.flags|=256,nr(e,r,n,o),r.child}var Zd={dehydrated:null,treeContext:null,retryLane:0};function Jd(e){return{baseLanes:e,cachePool:null,transitions:null}}function Am(e,r,n){var o=r.pendingProps,i=Ft.current,s=!1,l=(r.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),St(Ft,i&1),e===null)return Ud(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(r.mode&1?e.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(l=o.children,e=o.fallback,s?(o=r.mode,s=r.child,l={mode:"hidden",children:l},!(o&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=pa(l,o,0,null),e=xo(e,o,n,null),s.return=r,e.return=r,s.sibling=e,r.child=s,r.child.memoizedState=Jd(n),r.memoizedState=Zd,e):ag(r,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Hx(e,r,l,o,a,i,n);if(s){s=o.fallback,l=r.mode,i=e.child,a=i.sibling;var d={mode:"hidden",children:o.children};return!(l&1)&&r.child!==i?(o=r.child,o.childLanes=0,o.pendingProps=d,r.deletions=null):(o=Vn(i,d),o.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Vn(a,s):(s=xo(s,l,n,null),s.flags|=2),s.return=r,o.return=r,o.sibling=s,r.child=o,o=s,s=r.child,l=e.child.memoizedState,l=l===null?Jd(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,r.memoizedState=Zd,o}return s=e.child,e=s.sibling,o=Vn(s,{mode:"visible",children:o.children}),!(r.mode&1)&&(o.lanes=n),o.return=r,o.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=o,r.memoizedState=null,o}function ag(e,r){return r=pa({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Ps(e,r,n,o){return o!==null&&Kc(o),ai(r,e.child,null,n),e=ag(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Hx(e,r,n,o,i,s,l){if(n)return r.flags&256?(r.flags&=-257,o=Va(Error(Se(422))),Ps(e,r,l,o)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(s=o.fallback,i=r.mode,o=pa({mode:"visible",children:o.children},i,0,null),s=xo(s,i,l,null),s.flags|=2,o.return=r,s.return=r,o.sibling=s,r.child=o,r.mode&1&&ai(r,e.child,null,l),r.child.memoizedState=Jd(l),r.memoizedState=Zd,s);if(!(r.mode&1))return Ps(e,r,l,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var a=o.dgst;return o=a,s=Error(Se(419)),o=Va(s,o,void 0),Ps(e,r,l,o)}if(a=(l&e.childLanes)!==0,cr||a){if(o=Ut,o!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(o.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,wn(e,i),Kr(o,e,i,-1))}return bg(),o=Va(Error(Se(421))),Ps(e,r,l,o)}return i.data==="$?"?(r.flags|=128,r.child=e.child,r=ry.bind(null,e),i._reactRetry=r,null):(e=s.treeContext,jr=On(i.nextSibling),kr=r,Rt=!0,Vr=null,e!==null&&(Er[Fr++]=fn,Er[Fr++]=xn,Er[Fr++]=vo,fn=e.id,xn=e.overflow,vo=r),r=ag(r,o.children),r.flags|=4096,r)}function Ru(e,r,n){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r),Vd(e.return,r,n)}function Ya(e,r,n,o,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:i}:(s.isBackwards=r,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=n,s.tailMode=i)}function Dm(e,r,n){var o=r.pendingProps,i=o.revealOrder,s=o.tail;if(nr(e,r,o.children,n),o=Ft.current,o&2)o=o&1|2,r.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ru(e,n,r);else if(e.tag===19)Ru(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(St(Ft,o),!(r.mode&1))r.memoizedState=null;else switch(i){case"forwards":for(n=r.child,i=null;n!==null;)e=n.alternate,e!==null&&Pl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=r.child,r.child=null):(i=n.sibling,n.sibling=null),Ya(r,!1,i,n,s);break;case"backwards":for(n=null,i=r.child,r.child=null;i!==null;){if(e=i.alternate,e!==null&&Pl(e)===null){r.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ya(r,!0,n,null,s);break;case"together":Ya(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function xl(e,r){!(r.mode&1)&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Sn(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),ko|=r.lanes,!(n&r.childLanes))return null;if(e!==null&&r.child!==e.child)throw Error(Se(153));if(r.child!==null){for(e=r.child,n=Vn(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=Vn(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function Gx(e,r,n){switch(r.tag){case 3:Fm(r),li();break;case 5:sm(r);break;case 1:ur(r.type)&&Dl(r);break;case 4:eg(r,r.stateNode.containerInfo);break;case 10:var o=r.type._context,i=r.memoizedProps.value;St(Ll,o._currentValue),o._currentValue=i;break;case 13:if(o=r.memoizedState,o!==null)return o.dehydrated!==null?(St(Ft,Ft.current&1),r.flags|=128,null):n&r.child.childLanes?Am(e,r,n):(St(Ft,Ft.current&1),e=Sn(e,r,n),e!==null?e.sibling:null);St(Ft,Ft.current&1);break;case 19:if(o=(n&r.childLanes)!==0,e.flags&128){if(o)return Dm(e,r,n);r.flags|=128}if(i=r.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),St(Ft,Ft.current),o)break;return null;case 22:case 23:return r.lanes=0,Rm(e,r,n)}return Sn(e,r,n)}var Wm,ec,Mm,Lm;Wm=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ec=function(){};Mm=function(e,r,n,o){var i=e.memoizedProps;if(i!==o){e=r.stateNode,mo(on.current);var s=null;switch(n){case"input":i=kd(e,i),o=kd(e,o),s=[];break;case"select":i=Dt({},i,{value:void 0}),o=Dt({},o,{value:void 0}),s=[];break;case"textarea":i=Cd(e,i),o=Cd(e,o),s=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Fl)}Td(n,o);var l;n=null;for(u in i)if(!o.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in o){var d=o[u];if(a=i!=null?i[u]:void 0,o.hasOwnProperty(u)&&d!==a&&(d!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&a[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(s||(s=[]),s.push(u,n)),n=d;else u==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(s=s||[]).push(u,d)):u==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(u,""+d):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zi.hasOwnProperty(u)?(d!=null&&u==="onScroll"&&zt("scroll",e),s||a===d||(s=[])):(s=s||[]).push(u,d))}n&&(s=s||[]).push("style",n);var u=s;(r.updateQueue=u)&&(r.flags|=4)}};Lm=function(e,r,n,o){n!==o&&(r.flags|=4)};function Si(e,r){if(!Rt)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Zt(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(r)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=n,r}function Ux(e,r,n){var o=r.pendingProps;switch(Yc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(r),null;case 1:return ur(r.type)&&Al(),Zt(r),null;case 3:return o=r.stateNode,di(),Tt(gr),Tt(rr),rg(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(_s(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Vr!==null&&(ac(Vr),Vr=null))),ec(e,r),Zt(r),null;case 5:tg(r);var i=mo(cs.current);if(n=r.type,e!==null&&r.stateNode!=null)Mm(e,r,n,o,i),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!o){if(r.stateNode===null)throw Error(Se(166));return Zt(r),null}if(e=mo(on.current),_s(r)){o=r.stateNode,n=r.type;var s=r.memoizedProps;switch(o[rn]=r,o[as]=s,e=(r.mode&1)!==0,n){case"dialog":zt("cancel",o),zt("close",o);break;case"iframe":case"object":case"embed":zt("load",o);break;case"video":case"audio":for(i=0;i<Fi.length;i++)zt(Fi[i],o);break;case"source":zt("error",o);break;case"img":case"image":case"link":zt("error",o),zt("load",o);break;case"details":zt("toggle",o);break;case"input":$g(o,s),zt("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},zt("invalid",o);break;case"textarea":Ng(o,s),zt("invalid",o)}Td(n,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="children"?typeof a=="string"?o.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ls(o.textContent,a,e),i=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ls(o.textContent,a,e),i=["children",""+a]):Zi.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&zt("scroll",o)}switch(n){case"input":Bs(o),Pg(o,s,!0);break;case"textarea":Bs(o),Og(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=Fl)}o=i,r.updateQueue=o,o!==null&&(r.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gb(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=l.createElement(n,{is:o.is}):(e=l.createElement(n),n==="select"&&(l=e,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):e=l.createElementNS(e,n),e[rn]=r,e[as]=o,Wm(e,r,!1,!1),r.stateNode=e;e:{switch(l=Id(n,o),n){case"dialog":zt("cancel",e),zt("close",e),i=o;break;case"iframe":case"object":case"embed":zt("load",e),i=o;break;case"video":case"audio":for(i=0;i<Fi.length;i++)zt(Fi[i],e);i=o;break;case"source":zt("error",e),i=o;break;case"img":case"image":case"link":zt("error",e),zt("load",e),i=o;break;case"details":zt("toggle",e),i=o;break;case"input":$g(e,o),i=kd(e,o),zt("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=Dt({},o,{value:void 0}),zt("invalid",e);break;case"textarea":Ng(e,o),i=Cd(e,o),zt("invalid",e);break;default:i=o}Td(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var d=a[s];s==="style"?bb(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&ub(e,d)):s==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Ji(e,d):typeof d=="number"&&Ji(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Zi.hasOwnProperty(s)?d!=null&&s==="onScroll"&&zt("scroll",e):d!=null&&Fc(e,s,d,l))}switch(n){case"input":Bs(e),Pg(e,o,!1);break;case"textarea":Bs(e),Og(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Kn(o.value));break;case"select":e.multiple=!!o.multiple,s=o.value,s!=null?Xo(e,!!o.multiple,s,!1):o.defaultValue!=null&&Xo(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Fl)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Zt(r),null;case 6:if(e&&r.stateNode!=null)Lm(e,r,e.memoizedProps,o);else{if(typeof o!="string"&&r.stateNode===null)throw Error(Se(166));if(n=mo(cs.current),mo(on.current),_s(r)){if(o=r.stateNode,n=r.memoizedProps,o[rn]=r,(s=o.nodeValue!==n)&&(e=kr,e!==null))switch(e.tag){case 3:Ls(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ls(o.nodeValue,n,(e.mode&1)!==0)}s&&(r.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[rn]=r,r.stateNode=o}return Zt(r),null;case 13:if(Tt(Ft),o=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Rt&&jr!==null&&r.mode&1&&!(r.flags&128))tm(),li(),r.flags|=98560,s=!1;else if(s=_s(r),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(Se(318));if(s=r.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Se(317));s[rn]=r}else li(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Zt(r),s=!1}else Vr!==null&&(ac(Vr),Vr=null),s=!0;if(!s)return r.flags&65536?r:null}return r.flags&128?(r.lanes=n,r):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(r.child.flags|=8192,r.mode&1&&(e===null||Ft.current&1?Nt===0&&(Nt=3):bg())),r.updateQueue!==null&&(r.flags|=4),Zt(r),null);case 4:return di(),ec(e,r),e===null&&ss(r.stateNode.containerInfo),Zt(r),null;case 10:return Xc(r.type._context),Zt(r),null;case 17:return ur(r.type)&&Al(),Zt(r),null;case 19:if(Tt(Ft),s=r.memoizedState,s===null)return Zt(r),null;if(o=(r.flags&128)!==0,l=s.rendering,l===null)if(o)Si(s,!1);else{if(Nt!==0||e!==null&&e.flags&128)for(e=r.child;e!==null;){if(l=Pl(e),l!==null){for(r.flags|=128,Si(s,!1),o=l.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),r.subtreeFlags=0,o=n,n=r.child;n!==null;)s=n,e=o,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return St(Ft,Ft.current&1|2),r.child}e=e.sibling}s.tail!==null&&Lt()>gi&&(r.flags|=128,o=!0,Si(s,!1),r.lanes=4194304)}else{if(!o)if(e=Pl(l),e!==null){if(r.flags|=128,o=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),Si(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!Rt)return Zt(r),null}else 2*Lt()-s.renderingStartTime>gi&&n!==1073741824&&(r.flags|=128,o=!0,Si(s,!1),r.lanes=4194304);s.isBackwards?(l.sibling=r.child,r.child=l):(n=s.last,n!==null?n.sibling=l:r.child=l,s.last=l)}return s.tail!==null?(r=s.tail,s.rendering=r,s.tail=r.sibling,s.renderingStartTime=Lt(),r.sibling=null,n=Ft.current,St(Ft,o?n&1|2:n&1),r):(Zt(r),null);case 22:case 23:return pg(),o=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(r.flags|=8192),o&&r.mode&1?vr&1073741824&&(Zt(r),r.subtreeFlags&6&&(r.flags|=8192)):Zt(r),null;case 24:return null;case 25:return null}throw Error(Se(156,r.tag))}function Vx(e,r){switch(Yc(r),r.tag){case 1:return ur(r.type)&&Al(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return di(),Tt(gr),Tt(rr),rg(),e=r.flags,e&65536&&!(e&128)?(r.flags=e&-65537|128,r):null;case 5:return tg(r),null;case 13:if(Tt(Ft),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(Se(340));li()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return Tt(Ft),null;case 4:return di(),null;case 10:return Xc(r.type._context),null;case 22:case 23:return pg(),null;case 24:return null;default:return null}}var Ns=!1,er=!1,Yx=typeof WeakSet=="function"?WeakSet:Set,_e=null;function Qo(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){Wt(e,r,o)}else n.current=null}function tc(e,r,n){try{n()}catch(o){Wt(e,r,o)}}var Eu=!1;function Kx(e,r){if(_d=Bl,e=Ob(),Uc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var i=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,a=-1,d=-1,u=0,m=0,f=e,h=null;t:for(;;){for(var I;f!==n||i!==0&&f.nodeType!==3||(a=l+i),f!==s||o!==0&&f.nodeType!==3||(d=l+o),f.nodeType===3&&(l+=f.nodeValue.length),(I=f.firstChild)!==null;)h=f,f=I;for(;;){if(f===e)break t;if(h===n&&++u===i&&(a=l),h===s&&++m===o&&(d=l),(I=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=I}n=a===-1||d===-1?null:{start:a,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for($d={focusedElem:e,selectionRange:n},Bl=!1,_e=r;_e!==null;)if(r=_e,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,_e=e;else for(;_e!==null;){r=_e;try{var B=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(B!==null){var k=B.memoizedProps,C=B.memoizedState,p=r.stateNode,c=p.getSnapshotBeforeUpdate(r.elementType===r.type?k:Or(r.type,k),C);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var b=r.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Se(163))}}catch(T){Wt(r,r.return,T)}if(e=r.sibling,e!==null){e.return=r.return,_e=e;break}_e=r.return}return B=Eu,Eu=!1,B}function Gi(e,r,n){var o=r.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&tc(r,n,s)}i=i.next}while(i!==o)}}function ga(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==r)}}function rc(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function _m(e){var r=e.alternate;r!==null&&(e.alternate=null,_m(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[rn],delete r[as],delete r[Od],delete r[Rx],delete r[Ex])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $m(e){return e.tag===5||e.tag===3||e.tag===4}function Fu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$m(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nc(e,r,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=Fl));else if(o!==4&&(e=e.child,e!==null))for(nc(e,r,n),e=e.sibling;e!==null;)nc(e,r,n),e=e.sibling}function oc(e,r,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(oc(e,r,n),e=e.sibling;e!==null;)oc(e,r,n),e=e.sibling}var Kt=null,Gr=!1;function In(e,r,n){for(n=n.child;n!==null;)Pm(e,r,n),n=n.sibling}function Pm(e,r,n){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(na,n)}catch{}switch(n.tag){case 5:er||Qo(n,r);case 6:var o=Kt,i=Gr;Kt=null,In(e,r,n),Kt=o,Gr=i,Kt!==null&&(Gr?(e=Kt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Kt.removeChild(n.stateNode));break;case 18:Kt!==null&&(Gr?(e=Kt,n=n.stateNode,e.nodeType===8?Pa(e.parentNode,n):e.nodeType===1&&Pa(e,n),ns(e)):Pa(Kt,n.stateNode));break;case 4:o=Kt,i=Gr,Kt=n.stateNode.containerInfo,Gr=!0,In(e,r,n),Kt=o,Gr=i;break;case 0:case 11:case 14:case 15:if(!er&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&tc(n,r,l),i=i.next}while(i!==o)}In(e,r,n);break;case 1:if(!er&&(Qo(n,r),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(a){Wt(n,r,a)}In(e,r,n);break;case 21:In(e,r,n);break;case 22:n.mode&1?(er=(o=er)||n.memoizedState!==null,In(e,r,n),er=o):In(e,r,n);break;default:In(e,r,n)}}function Au(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Yx),r.forEach(function(o){var i=ny.bind(null,e,o);n.has(o)||(n.add(o),o.then(i,i))})}}function $r(e,r){var n=r.deletions;if(n!==null)for(var o=0;o<n.length;o++){var i=n[o];try{var s=e,l=r,a=l;e:for(;a!==null;){switch(a.tag){case 5:Kt=a.stateNode,Gr=!1;break e;case 3:Kt=a.stateNode.containerInfo,Gr=!0;break e;case 4:Kt=a.stateNode.containerInfo,Gr=!0;break e}a=a.return}if(Kt===null)throw Error(Se(160));Pm(s,l,i),Kt=null,Gr=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(u){Wt(i,r,u)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Nm(r,e),r=r.sibling}function Nm(e,r){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($r(r,e),Zr(e),o&4){try{Gi(3,e,e.return),ga(3,e)}catch(k){Wt(e,e.return,k)}try{Gi(5,e,e.return)}catch(k){Wt(e,e.return,k)}}break;case 1:$r(r,e),Zr(e),o&512&&n!==null&&Qo(n,n.return);break;case 5:if($r(r,e),Zr(e),o&512&&n!==null&&Qo(n,n.return),e.flags&32){var i=e.stateNode;try{Ji(i,"")}catch(k){Wt(e,e.return,k)}}if(o&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,l=n!==null?n.memoizedProps:s,a=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&db(i,s),Id(a,l);var u=Id(a,s);for(l=0;l<d.length;l+=2){var m=d[l],f=d[l+1];m==="style"?bb(i,f):m==="dangerouslySetInnerHTML"?ub(i,f):m==="children"?Ji(i,f):Fc(i,m,f,u)}switch(a){case"input":wd(i,s);break;case"textarea":cb(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?Xo(i,!!s.multiple,I,!1):h!==!!s.multiple&&(s.defaultValue!=null?Xo(i,!!s.multiple,s.defaultValue,!0):Xo(i,!!s.multiple,s.multiple?[]:"",!1))}i[as]=s}catch(k){Wt(e,e.return,k)}}break;case 6:if($r(r,e),Zr(e),o&4){if(e.stateNode===null)throw Error(Se(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(k){Wt(e,e.return,k)}}break;case 3:if($r(r,e),Zr(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{ns(r.containerInfo)}catch(k){Wt(e,e.return,k)}break;case 4:$r(r,e),Zr(e);break;case 13:$r(r,e),Zr(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(gg=Lt())),o&4&&Au(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(er=(u=er)||m,$r(r,e),er=u):$r(r,e),Zr(e),o&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(_e=e,m=e.child;m!==null;){for(f=_e=m;_e!==null;){switch(h=_e,I=h.child,h.tag){case 0:case 11:case 14:case 15:Gi(4,h,h.return);break;case 1:Qo(h,h.return);var B=h.stateNode;if(typeof B.componentWillUnmount=="function"){o=h,n=h.return;try{r=o,B.props=r.memoizedProps,B.state=r.memoizedState,B.componentWillUnmount()}catch(k){Wt(o,n,k)}}break;case 5:Qo(h,h.return);break;case 22:if(h.memoizedState!==null){Wu(f);continue}}I!==null?(I.return=h,_e=I):Wu(f)}m=m.sibling}e:for(m=null,f=e;;){if(f.tag===5){if(m===null){m=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,d=f.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=pb("display",l))}catch(k){Wt(e,e.return,k)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(k){Wt(e,e.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:$r(r,e),Zr(e),o&4&&Au(e);break;case 21:break;default:$r(r,e),Zr(e)}}function Zr(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if($m(n)){var o=n;break e}n=n.return}throw Error(Se(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(Ji(i,""),o.flags&=-33);var s=Fu(e);oc(e,s,i);break;case 3:case 4:var l=o.stateNode.containerInfo,a=Fu(e);nc(e,a,l);break;default:throw Error(Se(161))}}catch(d){Wt(e,e.return,d)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function Qx(e,r,n){_e=e,Om(e)}function Om(e,r,n){for(var o=(e.mode&1)!==0;_e!==null;){var i=_e,s=i.child;if(i.tag===22&&o){var l=i.memoizedState!==null||Ns;if(!l){var a=i.alternate,d=a!==null&&a.memoizedState!==null||er;a=Ns;var u=er;if(Ns=l,(er=d)&&!u)for(_e=i;_e!==null;)l=_e,d=l.child,l.tag===22&&l.memoizedState!==null?Mu(i):d!==null?(d.return=l,_e=d):Mu(i);for(;s!==null;)_e=s,Om(s),s=s.sibling;_e=i,Ns=a,er=u}Du(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,_e=s):Du(e)}}function Du(e){for(;_e!==null;){var r=_e;if(r.flags&8772){var n=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:er||ga(5,r);break;case 1:var o=r.stateNode;if(r.flags&4&&!er)if(n===null)o.componentDidMount();else{var i=r.elementType===r.type?n.memoizedProps:Or(r.type,n.memoizedProps);o.componentDidUpdate(i,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=r.updateQueue;s!==null&&xu(r,s,o);break;case 3:var l=r.updateQueue;if(l!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}xu(r,l,n)}break;case 5:var a=r.stateNode;if(n===null&&r.flags&4){n=a;var d=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var u=r.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&ns(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Se(163))}er||r.flags&512&&rc(r)}catch(h){Wt(r,r.return,h)}}if(r===e){_e=null;break}if(n=r.sibling,n!==null){n.return=r.return,_e=n;break}_e=r.return}}function Wu(e){for(;_e!==null;){var r=_e;if(r===e){_e=null;break}var n=r.sibling;if(n!==null){n.return=r.return,_e=n;break}_e=r.return}}function Mu(e){for(;_e!==null;){var r=_e;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{ga(4,r)}catch(d){Wt(r,n,d)}break;case 1:var o=r.stateNode;if(typeof o.componentDidMount=="function"){var i=r.return;try{o.componentDidMount()}catch(d){Wt(r,i,d)}}var s=r.return;try{rc(r)}catch(d){Wt(r,s,d)}break;case 5:var l=r.return;try{rc(r)}catch(d){Wt(r,l,d)}}}catch(d){Wt(r,r.return,d)}if(r===e){_e=null;break}var a=r.sibling;if(a!==null){a.return=r.return,_e=a;break}_e=r.return}}var qx=Math.ceil,Hl=zn.ReactCurrentDispatcher,dg=zn.ReactCurrentOwner,Dr=zn.ReactCurrentBatchConfig,ct=0,Ut=null,_t=null,Qt=0,vr=0,qo=Zn(0),Nt=0,bs=null,ko=0,ua=0,cg=0,Ui=null,dr=null,gg=0,gi=1/0,gn=null,Gl=!1,ic=null,Gn=null,Os=!1,_n=null,Ul=0,Vi=0,sc=null,yl=-1,vl=0;function ir(){return ct&6?Lt():yl!==-1?yl:yl=Lt()}function Un(e){return e.mode&1?ct&2&&Qt!==0?Qt&-Qt:Ax.transition!==null?(vl===0&&(vl=zb()),vl):(e=ft,e!==0||(e=window.event,e=e===void 0?16:Ab(e.type)),e):1}function Kr(e,r,n,o){if(50<Vi)throw Vi=0,sc=null,Error(Se(185));ws(e,n,o),(!(ct&2)||e!==Ut)&&(e===Ut&&(!(ct&2)&&(ua|=n),Nt===4&&Wn(e,Qt)),pr(e,o),n===1&&ct===0&&!(r.mode&1)&&(gi=Lt()+500,aa&&Jn()))}function pr(e,r){var n=e.callbackNode;Af(e,r);var o=Il(e,e===Ut?Qt:0);if(o===0)n!==null&&Ug(n),e.callbackNode=null,e.callbackPriority=0;else if(r=o&-o,e.callbackPriority!==r){if(n!=null&&Ug(n),r===1)e.tag===0?Fx(Lu.bind(null,e)):Zb(Lu.bind(null,e)),Ix(function(){!(ct&6)&&Jn()}),n=null;else{switch(Tb(o)){case 1:n=Lc;break;case 4:n=Sb;break;case 16:n=Tl;break;case 536870912:n=Cb;break;default:n=Tl}n=qm(n,Hm.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function Hm(e,r){if(yl=-1,vl=0,ct&6)throw Error(Se(327));var n=e.callbackNode;if(ri()&&e.callbackNode!==n)return null;var o=Il(e,e===Ut?Qt:0);if(o===0)return null;if(o&30||o&e.expiredLanes||r)r=Vl(e,o);else{r=o;var i=ct;ct|=2;var s=Um();(Ut!==e||Qt!==r)&&(gn=null,gi=Lt()+500,fo(e,r));do try{Jx();break}catch(a){Gm(e,a)}while(!0);qc(),Hl.current=s,ct=i,_t!==null?r=0:(Ut=null,Qt=0,r=Nt)}if(r!==0){if(r===2&&(i=Ad(e),i!==0&&(o=i,r=lc(e,i))),r===1)throw n=bs,fo(e,0),Wn(e,o),pr(e,Lt()),n;if(r===6)Wn(e,o);else{if(i=e.current.alternate,!(o&30)&&!Xx(i)&&(r=Vl(e,o),r===2&&(s=Ad(e),s!==0&&(o=s,r=lc(e,s))),r===1))throw n=bs,fo(e,0),Wn(e,o),pr(e,Lt()),n;switch(e.finishedWork=i,e.finishedLanes=o,r){case 0:case 1:throw Error(Se(345));case 2:co(e,dr,gn);break;case 3:if(Wn(e,o),(o&130023424)===o&&(r=gg+500-Lt(),10<r)){if(Il(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){ir(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Nd(co.bind(null,e,dr,gn),r);break}co(e,dr,gn);break;case 4:if(Wn(e,o),(o&4194240)===o)break;for(r=e.eventTimes,i=-1;0<o;){var l=31-Yr(o);s=1<<l,l=r[l],l>i&&(i=l),o&=~s}if(o=i,o=Lt()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*qx(o/1960))-o,10<o){e.timeoutHandle=Nd(co.bind(null,e,dr,gn),o);break}co(e,dr,gn);break;case 5:co(e,dr,gn);break;default:throw Error(Se(329))}}}return pr(e,Lt()),e.callbackNode===n?Hm.bind(null,e):null}function lc(e,r){var n=Ui;return e.current.memoizedState.isDehydrated&&(fo(e,r).flags|=256),e=Vl(e,r),e!==2&&(r=dr,dr=n,r!==null&&ac(r)),e}function ac(e){dr===null?dr=e:dr.push.apply(dr,e)}function Xx(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var i=n[o],s=i.getSnapshot;i=i.value;try{if(!Qr(s(),i))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Wn(e,r){for(r&=~cg,r&=~ua,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-Yr(r),o=1<<n;e[n]=-1,r&=~o}}function Lu(e){if(ct&6)throw Error(Se(327));ri();var r=Il(e,0);if(!(r&1))return pr(e,Lt()),null;var n=Vl(e,r);if(e.tag!==0&&n===2){var o=Ad(e);o!==0&&(r=o,n=lc(e,o))}if(n===1)throw n=bs,fo(e,0),Wn(e,r),pr(e,Lt()),n;if(n===6)throw Error(Se(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,co(e,dr,gn),pr(e,Lt()),null}function ug(e,r){var n=ct;ct|=1;try{return e(r)}finally{ct=n,ct===0&&(gi=Lt()+500,aa&&Jn())}}function wo(e){_n!==null&&_n.tag===0&&!(ct&6)&&ri();var r=ct;ct|=1;var n=Dr.transition,o=ft;try{if(Dr.transition=null,ft=1,e)return e()}finally{ft=o,Dr.transition=n,ct=r,!(ct&6)&&Jn()}}function pg(){vr=qo.current,Tt(qo)}function fo(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Tx(n)),_t!==null)for(n=_t.return;n!==null;){var o=n;switch(Yc(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Al();break;case 3:di(),Tt(gr),Tt(rr),rg();break;case 5:tg(o);break;case 4:di();break;case 13:Tt(Ft);break;case 19:Tt(Ft);break;case 10:Xc(o.type._context);break;case 22:case 23:pg()}n=n.return}if(Ut=e,_t=e=Vn(e.current,null),Qt=vr=r,Nt=0,bs=null,cg=ua=ko=0,dr=Ui=null,bo!==null){for(r=0;r<bo.length;r++)if(n=bo[r],o=n.interleaved,o!==null){n.interleaved=null;var i=o.next,s=n.pending;if(s!==null){var l=s.next;s.next=i,o.next=l}n.pending=o}bo=null}return e}function Gm(e,r){do{var n=_t;try{if(qc(),hl.current=Ol,Nl){for(var o=At.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}Nl=!1}if(jo=0,Gt=Pt=At=null,Hi=!1,gs=0,dg.current=null,n===null||n.return===null){Nt=1,bs=r,_t=null;break}e:{var s=e,l=n.return,a=n,d=r;if(r=Qt,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var u=d,m=a,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var I=Su(l);if(I!==null){I.flags&=-257,Cu(I,l,a,s,r),I.mode&1&&wu(s,u,r),r=I,d=u;var B=r.updateQueue;if(B===null){var k=new Set;k.add(d),r.updateQueue=k}else B.add(d);break e}else{if(!(r&1)){wu(s,u,r),bg();break e}d=Error(Se(426))}}else if(Rt&&a.mode&1){var C=Su(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Cu(C,l,a,s,r),Kc(ci(d,a));break e}}s=d=ci(d,a),Nt!==4&&(Nt=2),Ui===null?Ui=[s]:Ui.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,r&=-r,s.lanes|=r;var p=Tm(s,d,r);fu(s,p);break e;case 1:a=d;var c=s.type,b=s.stateNode;if(!(s.flags&128)&&(typeof c.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Gn===null||!Gn.has(b)))){s.flags|=65536,r&=-r,s.lanes|=r;var T=Im(s,a,r);fu(s,T);break e}}s=s.return}while(s!==null)}Ym(n)}catch(y){r=y,_t===n&&n!==null&&(_t=n=n.return);continue}break}while(!0)}function Um(){var e=Hl.current;return Hl.current=Ol,e===null?Ol:e}function bg(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),Ut===null||!(ko&268435455)&&!(ua&268435455)||Wn(Ut,Qt)}function Vl(e,r){var n=ct;ct|=2;var o=Um();(Ut!==e||Qt!==r)&&(gn=null,fo(e,r));do try{Zx();break}catch(i){Gm(e,i)}while(!0);if(qc(),ct=n,Hl.current=o,_t!==null)throw Error(Se(261));return Ut=null,Qt=0,Nt}function Zx(){for(;_t!==null;)Vm(_t)}function Jx(){for(;_t!==null&&!Sf();)Vm(_t)}function Vm(e){var r=Qm(e.alternate,e,vr);e.memoizedProps=e.pendingProps,r===null?Ym(e):_t=r,dg.current=null}function Ym(e){var r=e;do{var n=r.alternate;if(e=r.return,r.flags&32768){if(n=Vx(n,r),n!==null){n.flags&=32767,_t=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Nt=6,_t=null;return}}else if(n=Ux(n,r,vr),n!==null){_t=n;return}if(r=r.sibling,r!==null){_t=r;return}_t=r=e}while(r!==null);Nt===0&&(Nt=5)}function co(e,r,n){var o=ft,i=Dr.transition;try{Dr.transition=null,ft=1,ey(e,r,n,o)}finally{Dr.transition=i,ft=o}return null}function ey(e,r,n,o){do ri();while(_n!==null);if(ct&6)throw Error(Se(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(Se(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Df(e,s),e===Ut&&(_t=Ut=null,Qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Os||(Os=!0,qm(Tl,function(){return ri(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dr.transition,Dr.transition=null;var l=ft;ft=1;var a=ct;ct|=4,dg.current=null,Kx(e,n),Nm(n,e),vx($d),Bl=!!_d,$d=_d=null,e.current=n,Qx(n),Cf(),ct=a,ft=l,Dr.transition=s}else e.current=n;if(Os&&(Os=!1,_n=e,Ul=i),s=e.pendingLanes,s===0&&(Gn=null),If(n.stateNode),pr(e,Lt()),r!==null)for(o=e.onRecoverableError,n=0;n<r.length;n++)i=r[n],o(i.value,{componentStack:i.stack,digest:i.digest});if(Gl)throw Gl=!1,e=ic,ic=null,e;return Ul&1&&e.tag!==0&&ri(),s=e.pendingLanes,s&1?e===sc?Vi++:(Vi=0,sc=e):Vi=0,Jn(),null}function ri(){if(_n!==null){var e=Tb(Ul),r=Dr.transition,n=ft;try{if(Dr.transition=null,ft=16>e?16:e,_n===null)var o=!1;else{if(e=_n,_n=null,Ul=0,ct&6)throw Error(Se(331));var i=ct;for(ct|=4,_e=e.current;_e!==null;){var s=_e,l=s.child;if(_e.flags&16){var a=s.deletions;if(a!==null){for(var d=0;d<a.length;d++){var u=a[d];for(_e=u;_e!==null;){var m=_e;switch(m.tag){case 0:case 11:case 15:Gi(8,m,s)}var f=m.child;if(f!==null)f.return=m,_e=f;else for(;_e!==null;){m=_e;var h=m.sibling,I=m.return;if(_m(m),m===u){_e=null;break}if(h!==null){h.return=I,_e=h;break}_e=I}}}var B=s.alternate;if(B!==null){var k=B.child;if(k!==null){B.child=null;do{var C=k.sibling;k.sibling=null,k=C}while(k!==null)}}_e=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,_e=l;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Gi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,_e=p;break e}_e=s.return}}var c=e.current;for(_e=c;_e!==null;){l=_e;var b=l.child;if(l.subtreeFlags&2064&&b!==null)b.return=l,_e=b;else e:for(l=c;_e!==null;){if(a=_e,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ga(9,a)}}catch(y){Wt(a,a.return,y)}if(a===l){_e=null;break e}var T=a.sibling;if(T!==null){T.return=a.return,_e=T;break e}_e=a.return}}if(ct=i,Jn(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(na,e)}catch{}o=!0}return o}finally{ft=n,Dr.transition=r}}return!1}function _u(e,r,n){r=ci(n,r),r=Tm(e,r,1),e=Hn(e,r,1),r=ir(),e!==null&&(ws(e,1,r),pr(e,r))}function Wt(e,r,n){if(e.tag===3)_u(e,e,n);else for(;r!==null;){if(r.tag===3){_u(r,e,n);break}else if(r.tag===1){var o=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Gn===null||!Gn.has(o))){e=ci(n,e),e=Im(r,e,1),r=Hn(r,e,1),e=ir(),r!==null&&(ws(r,1,e),pr(r,e));break}}r=r.return}}function ty(e,r,n){var o=e.pingCache;o!==null&&o.delete(r),r=ir(),e.pingedLanes|=e.suspendedLanes&n,Ut===e&&(Qt&n)===n&&(Nt===4||Nt===3&&(Qt&130023424)===Qt&&500>Lt()-gg?fo(e,0):cg|=n),pr(e,r)}function Km(e,r){r===0&&(e.mode&1?(r=Fs,Fs<<=1,!(Fs&130023424)&&(Fs=4194304)):r=1);var n=ir();e=wn(e,r),e!==null&&(ws(e,r,n),pr(e,n))}function ry(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),Km(e,n)}function ny(e,r){var n=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(Se(314))}o!==null&&o.delete(r),Km(e,n)}var Qm;Qm=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||gr.current)cr=!0;else{if(!(e.lanes&n)&&!(r.flags&128))return cr=!1,Gx(e,r,n);cr=!!(e.flags&131072)}else cr=!1,Rt&&r.flags&1048576&&Jb(r,Ml,r.index);switch(r.lanes=0,r.tag){case 2:var o=r.type;xl(e,r),e=r.pendingProps;var i=si(r,rr.current);ti(r,n),i=og(null,r,o,e,i,n);var s=ig();return r.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,ur(o)?(s=!0,Dl(r)):s=!1,r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jc(r),i.updater=ca,r.stateNode=i,i._reactInternals=r,Kd(r,o,e,n),r=Xd(null,r,o,!0,s,n)):(r.tag=0,Rt&&s&&Vc(r),nr(null,r,i,n),r=r.child),r;case 16:o=r.elementType;e:{switch(xl(e,r),e=r.pendingProps,i=o._init,o=i(o._payload),r.type=o,i=r.tag=iy(o),e=Or(o,e),i){case 0:r=qd(null,r,o,e,n);break e;case 1:r=Iu(null,r,o,e,n);break e;case 11:r=zu(null,r,o,e,n);break e;case 14:r=Tu(null,r,o,Or(o.type,e),n);break e}throw Error(Se(306,o,""))}return r;case 0:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Or(o,i),qd(e,r,o,i,n);case 1:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Or(o,i),Iu(e,r,o,i,n);case 3:e:{if(Fm(r),e===null)throw Error(Se(387));o=r.pendingProps,s=r.memoizedState,i=s.element,im(e,r),$l(r,o,null,n);var l=r.memoizedState;if(o=l.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},r.updateQueue.baseState=s,r.memoizedState=s,r.flags&256){i=ci(Error(Se(423)),r),r=Bu(e,r,o,n,i);break e}else if(o!==i){i=ci(Error(Se(424)),r),r=Bu(e,r,o,n,i);break e}else for(jr=On(r.stateNode.containerInfo.firstChild),kr=r,Rt=!0,Vr=null,n=nm(r,null,o,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(li(),o===i){r=Sn(e,r,n);break e}nr(e,r,o,n)}r=r.child}return r;case 5:return sm(r),e===null&&Ud(r),o=r.type,i=r.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,Pd(o,i)?l=null:s!==null&&Pd(o,s)&&(r.flags|=32),Em(e,r),nr(e,r,l,n),r.child;case 6:return e===null&&Ud(r),null;case 13:return Am(e,r,n);case 4:return eg(r,r.stateNode.containerInfo),o=r.pendingProps,e===null?r.child=ai(r,null,o,n):nr(e,r,o,n),r.child;case 11:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Or(o,i),zu(e,r,o,i,n);case 7:return nr(e,r,r.pendingProps,n),r.child;case 8:return nr(e,r,r.pendingProps.children,n),r.child;case 12:return nr(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(o=r.type._context,i=r.pendingProps,s=r.memoizedProps,l=i.value,St(Ll,o._currentValue),o._currentValue=l,s!==null)if(Qr(s.value,l)){if(s.children===i.children&&!gr.current){r=Sn(e,r,n);break e}}else for(s=r.child,s!==null&&(s.return=r);s!==null;){var a=s.dependencies;if(a!==null){l=s.child;for(var d=a.firstContext;d!==null;){if(d.context===o){if(s.tag===1){d=yn(-1,n&-n),d.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?d.next=d:(d.next=m.next,m.next=d),u.pending=d}}s.lanes|=n,d=s.alternate,d!==null&&(d.lanes|=n),Vd(s.return,n,r),a.lanes|=n;break}d=d.next}}else if(s.tag===10)l=s.type===r.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(Se(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Vd(l,n,r),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===r){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}nr(e,r,i.children,n),r=r.child}return r;case 9:return i=r.type,o=r.pendingProps.children,ti(r,n),i=Wr(i),o=o(i),r.flags|=1,nr(e,r,o,n),r.child;case 14:return o=r.type,i=Or(o,r.pendingProps),i=Or(o.type,i),Tu(e,r,o,i,n);case 15:return Bm(e,r,r.type,r.pendingProps,n);case 17:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Or(o,i),xl(e,r),r.tag=1,ur(o)?(e=!0,Dl(r)):e=!1,ti(r,n),zm(r,o,i),Kd(r,o,i,n),Xd(null,r,o,!0,e,n);case 19:return Dm(e,r,n);case 22:return Rm(e,r,n)}throw Error(Se(156,r.tag))};function qm(e,r){return wb(e,r)}function oy(e,r,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ar(e,r,n,o){return new oy(e,r,n,o)}function mg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function iy(e){if(typeof e=="function")return mg(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Dc)return 11;if(e===Wc)return 14}return 2}function Vn(e,r){var n=e.alternate;return n===null?(n=Ar(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function jl(e,r,n,o,i,s){var l=2;if(o=e,typeof e=="function")mg(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Po:return xo(n.children,i,s,r);case Ac:l=8,i|=8;break;case xd:return e=Ar(12,n,r,i|2),e.elementType=xd,e.lanes=s,e;case yd:return e=Ar(13,n,r,i),e.elementType=yd,e.lanes=s,e;case vd:return e=Ar(19,n,r,i),e.elementType=vd,e.lanes=s,e;case sb:return pa(n,i,s,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ob:l=10;break e;case ib:l=9;break e;case Dc:l=11;break e;case Wc:l=14;break e;case Fn:l=16,o=null;break e}throw Error(Se(130,e==null?e:typeof e,""))}return r=Ar(l,n,r,i),r.elementType=e,r.type=o,r.lanes=s,r}function xo(e,r,n,o){return e=Ar(7,e,o,r),e.lanes=n,e}function pa(e,r,n,o){return e=Ar(22,e,o,r),e.elementType=sb,e.lanes=n,e.stateNode={isHidden:!1},e}function Ka(e,r,n){return e=Ar(6,e,null,r),e.lanes=n,e}function Qa(e,r,n){return r=Ar(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function sy(e,r,n,o,i){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ba(0),this.expirationTimes=Ba(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ba(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function hg(e,r,n,o,i,s,l,a,d){return e=new sy(e,r,n,a,d),r===1?(r=1,s===!0&&(r|=8)):r=0,s=Ar(3,null,null,r),e.current=s,s.stateNode=e,s.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jc(s),e}function ly(e,r,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$o,key:o==null?null:""+o,children:e,containerInfo:r,implementation:n}}function Xm(e){if(!e)return Qn;e=e._reactInternals;e:{if(Co(e)!==e||e.tag!==1)throw Error(Se(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(ur(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(Se(171))}if(e.tag===1){var n=e.type;if(ur(n))return Xb(e,n,r)}return r}function Zm(e,r,n,o,i,s,l,a,d){return e=hg(n,o,!0,e,i,s,l,a,d),e.context=Xm(null),n=e.current,o=ir(),i=Un(n),s=yn(o,i),s.callback=r??null,Hn(n,s,i),e.current.lanes=i,ws(e,i,o),pr(e,o),e}function ba(e,r,n,o){var i=r.current,s=ir(),l=Un(i);return n=Xm(n),r.context===null?r.context=n:r.pendingContext=n,r=yn(s,l),r.payload={element:e},o=o===void 0?null:o,o!==null&&(r.callback=o),e=Hn(i,r,l),e!==null&&(Kr(e,i,l,s),ml(e,i,l)),l}function Yl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $u(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function fg(e,r){$u(e,r),(e=e.alternate)&&$u(e,r)}function ay(){return null}var Jm=typeof reportError=="function"?reportError:function(e){console.error(e)};function xg(e){this._internalRoot=e}ma.prototype.render=xg.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(Se(409));ba(e,r,null,null)};ma.prototype.unmount=xg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;wo(function(){ba(null,e,null,null)}),r[kn]=null}};function ma(e){this._internalRoot=e}ma.prototype.unstable_scheduleHydration=function(e){if(e){var r=Rb();e={blockedOn:null,target:e,priority:r};for(var n=0;n<Dn.length&&r!==0&&r<Dn[n].priority;n++);Dn.splice(n,0,e),n===0&&Fb(e)}};function yg(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ha(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pu(){}function dy(e,r,n,o,i){if(i){if(typeof o=="function"){var s=o;o=function(){var u=Yl(l);s.call(u)}}var l=Zm(r,o,e,0,null,!1,!1,"",Pu);return e._reactRootContainer=l,e[kn]=l.current,ss(e.nodeType===8?e.parentNode:e),wo(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var a=o;o=function(){var u=Yl(d);a.call(u)}}var d=hg(e,0,!1,null,null,!1,!1,"",Pu);return e._reactRootContainer=d,e[kn]=d.current,ss(e.nodeType===8?e.parentNode:e),wo(function(){ba(r,d,n,o)}),d}function fa(e,r,n,o,i){var s=n._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var a=i;i=function(){var d=Yl(l);a.call(d)}}ba(r,l,e,i)}else l=dy(n,r,e,i,o);return Yl(l)}Ib=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=Ei(r.pendingLanes);n!==0&&(_c(r,n|1),pr(r,Lt()),!(ct&6)&&(gi=Lt()+500,Jn()))}break;case 13:wo(function(){var o=wn(e,1);if(o!==null){var i=ir();Kr(o,e,1,i)}}),fg(e,1)}};$c=function(e){if(e.tag===13){var r=wn(e,134217728);if(r!==null){var n=ir();Kr(r,e,134217728,n)}fg(e,134217728)}};Bb=function(e){if(e.tag===13){var r=Un(e),n=wn(e,r);if(n!==null){var o=ir();Kr(n,e,r,o)}fg(e,r)}};Rb=function(){return ft};Eb=function(e,r){var n=ft;try{return ft=e,r()}finally{ft=n}};Rd=function(e,r,n){switch(r){case"input":if(wd(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var o=n[r];if(o!==e&&o.form===e.form){var i=la(o);if(!i)throw Error(Se(90));ab(o),wd(o,i)}}}break;case"textarea":cb(e,n);break;case"select":r=n.value,r!=null&&Xo(e,!!n.multiple,r,!1)}};fb=ug;xb=wo;var cy={usingClientEntryPoint:!1,Events:[Cs,Go,la,mb,hb,ug]},Ci={findFiberByHostInstance:po,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gy={bundleType:Ci.bundleType,version:Ci.version,rendererPackageName:Ci.rendererPackageName,rendererConfig:Ci.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=jb(e),e===null?null:e.stateNode},findFiberByHostInstance:Ci.findFiberByHostInstance||ay,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hs.isDisabled&&Hs.supportsFiber)try{na=Hs.inject(gy),nn=Hs}catch{}}Sr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cy;Sr.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yg(r))throw Error(Se(200));return ly(e,r,null,n)};Sr.createRoot=function(e,r){if(!yg(e))throw Error(Se(299));var n=!1,o="",i=Jm;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),r=hg(e,1,!1,null,null,n,!1,o,i),e[kn]=r.current,ss(e.nodeType===8?e.parentNode:e),new xg(r)};Sr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(Se(188)):(e=Object.keys(e).join(","),Error(Se(268,e)));return e=jb(r),e=e===null?null:e.stateNode,e};Sr.flushSync=function(e){return wo(e)};Sr.hydrate=function(e,r,n){if(!ha(r))throw Error(Se(200));return fa(null,e,r,!0,n)};Sr.hydrateRoot=function(e,r,n){if(!yg(e))throw Error(Se(405));var o=n!=null&&n.hydratedSources||null,i=!1,s="",l=Jm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),r=Zm(r,null,e,1,n??null,i,!1,s,l),e[kn]=r.current,ss(e),o)for(e=0;e<o.length;e++)n=o[e],i=n._getVersion,i=i(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,i]:r.mutableSourceEagerHydrationData.push(n,i);return new ma(r)};Sr.render=function(e,r,n){if(!ha(r))throw Error(Se(200));return fa(null,e,r,!1,n)};Sr.unmountComponentAtNode=function(e){if(!ha(e))throw Error(Se(40));return e._reactRootContainer?(wo(function(){fa(null,null,e,!1,function(){e._reactRootContainer=null,e[kn]=null})}),!0):!1};Sr.unstable_batchedUpdates=ug;Sr.unstable_renderSubtreeIntoContainer=function(e,r,n,o){if(!ha(n))throw Error(Se(200));if(e==null||e._reactInternals===void 0)throw Error(Se(38));return fa(e,r,n,!1,o)};Sr.version="18.3.1-next-f1338f8080-20240426";function eh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eh)}catch(e){console.error(e)}}eh(),eb.exports=Sr;var uy=eb.exports,th,Nu=uy;th=Nu.createRoot,Nu.hydrateRoot;/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rh=(...e)=>e.filter((r,n,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===n).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var by={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=g.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:i="",children:s,iconNode:l,...a},d)=>g.createElement("svg",{ref:d,...by,width:r,height:r,stroke:e,strokeWidth:o?Number(n)*24/Number(r):n,className:rh("lucide",i),...a},[...l.map(([u,m])=>g.createElement(u,m)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=(e,r)=>{const n=g.forwardRef(({className:o,...i},s)=>g.createElement(my,{ref:s,iconNode:r,className:rh(`lucide-${py(e)}`,o),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=ue("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=ue("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=ue("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=ue("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=ue("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=ue("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=ue("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=ue("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=ue("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=ue("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=ue("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=ue("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=ue("Bus",[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=ue("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=ue("CalendarClock",[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=ue("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=ue("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=ue("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=ue("Carrot",[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",key:"rfqxbe"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",key:"6b25w4"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",key:"fn65lo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=ue("ChartCandlestick",[["path",{d:"M9 5v4",key:"14uxtq"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1",key:"f4fvz0"}],["path",{d:"M9 15v2",key:"r5rk32"}],["path",{d:"M17 3v2",key:"1l2re6"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1",key:"z38je5"}],["path",{d:"M17 13v3",key:"5l0wba"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=ue("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=ue("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=ue("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=ue("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=ue("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=ue("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=ue("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=ue("Clapperboard",[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=ue("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=ue("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=ue("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=ue("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=ue("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=ue("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=ue("Dumbbell",[["path",{d:"M14.4 14.4 9.6 9.6",key:"ic80wn"}],["path",{d:"M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z",key:"nnl7wr"}],["path",{d:"m21.5 21.5-1.4-1.4",key:"1f1ice"}],["path",{d:"M3.9 3.9 2.5 2.5",key:"1evmna"}],["path",{d:"M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z",key:"yhosts"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=ue("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=ue("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=ue("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=ue("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=ue("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=ue("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=ue("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"7cu91f"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=ue("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=ue("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=ue("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=ue("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=ue("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=ue("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=ue("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=ue("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=ue("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=ue("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=ue("Images",[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=ue("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=ue("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=ue("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=ue("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=ue("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=ue("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=ue("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=ue("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=ue("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=ue("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=ue("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=ue("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=ue("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=ue("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=ue("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=ue("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=ue("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=ue("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=ue("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=ue("PartyPopper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"hbicv8"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",key:"1i94pl"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",key:"1cofks"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=ue("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=ue("PawPrint",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=ue("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=ue("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=ue("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=ue("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=ue("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=ue("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=ue("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=ue("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=ue("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=ue("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=ue("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=ue("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=ue("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=ue("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=ue("ScrollText",[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=ue("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=ue("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=ue("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=ue("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=ue("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=ue("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=ue("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=ue("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=ue("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=ue("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=ue("Swords",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=ue("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=ue("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=ue("TramFront",[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=ue("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=ue("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=ue("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=ue("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=ue("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=ue("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=ue("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=ue("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=ue("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=ue("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=ue("WashingMachine",[["path",{d:"M3 6h3",key:"155dbl"}],["path",{d:"M17 6h.01",key:"e2y6kg"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2",key:"od3kk9"}],["circle",{cx:"12",cy:"13",r:"5",key:"nlbqau"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5",key:"17lach"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=ue("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=ue("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=ue("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=ue("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=ue("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Bg="anvil_token",vh=()=>localStorage.getItem(Bg),w0=e=>localStorage.setItem(Bg,e),bc=()=>localStorage.removeItem(Bg),Z=async(e,r,n)=>{const o={};n!==void 0&&(o["Content-Type"]="application/json");const i=vh();i&&(o.Authorization=`Bearer ${i}`);const s=await fetch(`/api${r}`,{method:e,headers:o,body:n!==void 0?JSON.stringify(n):void 0});if(s.status===401)throw bc(),window.dispatchEvent(new Event("anvil-unauthorized")),new Error("Not authenticated");if(s.status===204)return null;if(!s.ok){const l=await s.text();let a=l;try{a=JSON.parse(l).detail||l}catch{}throw new Error(a||`HTTP ${s.status}`)}return s.json()},E={me:()=>Z("GET","/auth/me"),signInWithGoogle:()=>{window.location.href="/api/auth/google"},getPillars:()=>Z("GET","/pillars"),getFocus:()=>Z("GET","/focus"),createFocus:e=>Z("POST","/focus",e),deleteFocus:e=>Z("DELETE",`/focus/${e}`),addScreenTime:(e,r)=>Z("POST","/screentime",{screen:e,seconds:r}),getScreenTime:()=>Z("GET","/screentime"),getPayouts:()=>Z("GET","/rewards/payouts"),createPayout:e=>Z("POST","/rewards/payouts",e),deletePayout:e=>Z("DELETE",`/rewards/payouts/${e}`),getRewardRates:()=>Z("GET","/rewards/rates"),setRewardRate:e=>Z("POST","/rewards/rates",e),getMedia:()=>Z("GET","/media"),createMedia:e=>Z("POST","/media",e),updateMedia:(e,r)=>Z("PUT",`/media/${e}`,r),deleteMedia:e=>Z("DELETE",`/media/${e}`),restoreMedia:e=>Z("POST",`/media/${e}/restore`),getDecks:()=>Z("GET","/spiritual/decks"),createDeck:e=>Z("POST","/spiritual/decks",e),deleteDeck:e=>Z("DELETE",`/spiritual/decks/${e}`),getGoldenGoals:()=>Z("GET","/golden/goals"),getGoldenGoal:e=>Z("GET",`/golden/goals/${e}`),createGolden:e=>Z("POST","/golden/goals",e),updateGolden:(e,r)=>Z("PUT",`/golden/goals/${e}`,r),achieveGolden:e=>Z("POST",`/golden/goals/${e}/achieve`),unachieveGolden:e=>Z("POST",`/golden/goals/${e}/unachieve`),upsertGoldenEntry:(e,r)=>Z("PUT",`/golden/goals/${e}/entry`,r),deleteGolden:e=>Z("DELETE",`/golden/goals/${e}`),restoreGolden:e=>Z("POST",`/golden/goals/${e}/restore`),logTesla369:e=>Z("POST",`/golden/goals/${e}/369/log`),undoTesla369:e=>Z("DELETE",`/golden/goals/${e}/369/log`),getKickstart:()=>Z("GET","/kickstart/videos"),createKickstart:e=>Z("POST","/kickstart/videos",e),updateKickstart:(e,r)=>Z("PUT",`/kickstart/videos/${e}`,r),deleteKickstart:e=>Z("DELETE",`/kickstart/videos/${e}`),restoreKickstart:e=>Z("POST",`/kickstart/videos/${e}/restore`),getTxns:()=>Z("GET","/finance/txns"),createTxn:e=>Z("POST","/finance/txns",e),updateTxn:(e,r)=>Z("PUT",`/finance/txns/${e}`,r),deleteTxn:e=>Z("DELETE",`/finance/txns/${e}`),restoreTxn:e=>Z("POST",`/finance/txns/${e}/restore`),getInvestments:()=>Z("GET","/finance/investments"),createInvestment:e=>Z("POST","/finance/investments",e),updateInvestment:(e,r)=>Z("PUT",`/finance/investments/${e}`,r),deleteInvestment:e=>Z("DELETE",`/finance/investments/${e}`),restoreInvestment:e=>Z("POST",`/finance/investments/${e}/restore`),getFixedItems:()=>Z("GET","/finance/fixed-items"),createFixedItem:e=>Z("POST","/finance/fixed-items",e),updateFixedItem:(e,r)=>Z("PUT",`/finance/fixed-items/${e}`,r),deleteFixedItem:e=>Z("DELETE",`/finance/fixed-items/${e}`),getExpenses:()=>Z("GET","/expenses"),createExpenseCategory:e=>Z("POST","/expenses/categories",e),updateExpenseCategory:(e,r)=>Z("PUT",`/expenses/categories/${e}`,r),arrangeExpenseCategories:e=>Z("PUT","/expenses/categories/arrange",{order:e}),deleteExpenseCategory:e=>Z("DELETE",`/expenses/categories/${e}`),createExpenseLog:e=>Z("POST","/expenses/logs",e),updateExpenseLog:(e,r)=>Z("PUT",`/expenses/logs/${e}`,r),deleteExpenseLog:e=>Z("DELETE",`/expenses/logs/${e}`),restoreExpenseLog:e=>Z("POST",`/expenses/logs/${e}/restore`),getTrades:()=>Z("GET","/trades"),createTradeEntry:e=>Z("POST","/trades/entries",e),updateTradeEntry:(e,r)=>Z("PUT",`/trades/entries/${e}`,r),bookTradeEntry:(e,r,n)=>Z("POST",`/trades/entries/${e}/book`,{outcome:r,date:n}),reopenTradeEntry:e=>Z("POST",`/trades/entries/${e}/reopen`),deleteTradeEntry:e=>Z("DELETE",`/trades/entries/${e}`),setTradeLearning:(e,r)=>Z("PUT","/trades/learning",{date:e,learning:r}),getSetting:e=>Z("GET",`/settings/${e}`),setSetting:(e,r)=>Z("PUT",`/settings/${e}`,{value:r}),getTasks:()=>Z("GET","/tasks"),createTask:e=>Z("POST","/tasks",e),updateTask:(e,r)=>Z("PUT",`/tasks/${e}`,r),deleteTask:e=>Z("DELETE",`/tasks/${e}`),restoreTask:e=>Z("POST",`/tasks/${e}/restore`),scheduleTask:e=>Z("PUT",`/tasks/${e}/schedule`),getGoals:e=>Z("GET",`/goals${e?`?pillar=${encodeURIComponent(e)}`:""}`),createGoal:e=>Z("POST","/goals",e),updateGoal:(e,r)=>Z("PUT",`/goals/${e}`,r),deleteGoal:e=>Z("DELETE",`/goals/${e}`),restoreGoal:e=>Z("POST",`/goals/${e}/restore`),getHabits:()=>Z("GET","/habits"),createHabit:e=>Z("POST","/habits",e),updateHabit:(e,r)=>Z("PUT",`/habits/${e}`,r),deleteHabit:e=>Z("DELETE",`/habits/${e}`),restoreHabit:e=>Z("POST",`/habits/${e}/restore`),toggleHabitLog:(e,r)=>Z("POST",`/habits/${e}/log/${r}`),setHabitLogNote:(e,r,n)=>Z("PUT",`/habits/${e}/log/${r}/note`,{note:n}),setHabitLogCount:(e,r,n,o)=>Z("PUT",`/habits/${e}/log/${r}/count`,{count:n,note:o}),incrementHabitLog:(e,r)=>Z("POST",`/habits/${e}/log/${r}/increment`),clearHabitLog:(e,r)=>Z("DELETE",`/habits/${e}/log/${r}`),getHabitsYearly:e=>Z("GET",`/habits/yearly/${e}`),getJournalEntry:e=>Z("GET",`/journal/${e}`),getJournalHistory:(e,r)=>Z("GET",`/journal/history/${e}/${r}`),updateJournalMood:(e,r)=>Z("PUT",`/journal/${e}`,{mood:r}),addJournalBullet:(e,r,n)=>Z("POST",`/journal/${e}/bullets`,{section:r,text:n}),deleteJournalBullet:e=>Z("DELETE",`/journal/bullets/${e}`),getSkills:()=>Z("GET","/skills"),createSkill:e=>Z("POST","/skills",e),updateSkill:(e,r)=>Z("PUT",`/skills/${e}`,r),deleteSkill:e=>Z("DELETE",`/skills/${e}`),restoreSkill:e=>Z("POST",`/skills/${e}/restore`),addSkillNote:(e,r,n,o=null)=>Z("POST",`/skills/${e}/notes`,{stage:r,text:n,grp:o}),setSkillGroups:(e,r)=>Z("PUT",`/skills/${e}/groups`,{groups:r}),deleteSkillNote:e=>Z("DELETE",`/skill-notes/${e}`),updateSkillNote:(e,r)=>Z("PUT",`/skill-notes/${e}`,{text:r}),toggleSkillNote:e=>Z("PUT",`/skill-notes/${e}/toggle`),completeSkillStage:(e,r)=>Z("POST",`/skills/${e}/complete-stage`,{stage:r}),getScriptures:()=>Z("GET","/scriptures"),createScripture:e=>Z("POST","/scriptures",e),deleteScripture:e=>Z("DELETE",`/scriptures/${e}`),restoreScripture:e=>Z("POST",`/scriptures/${e}/restore`),addChapter:(e,r)=>Z("POST",`/scriptures/${e}/chapters`,r),updateChapter:(e,r)=>Z("PUT",`/chapters/${e}`,r),deleteChapter:e=>Z("DELETE",`/chapters/${e}`),restoreChapter:e=>Z("POST",`/chapters/${e}/restore`),addInsight:(e,r)=>Z("POST",`/chapters/${e}/insights`,{text:r}),deleteInsight:e=>Z("DELETE",`/insights/${e}`),getTopics:()=>Z("GET","/revision/topics"),createTopic:e=>Z("POST","/revision/topics",e),updateTopic:(e,r)=>Z("PUT",`/revision/topics/${e}`,r),deleteTopic:e=>Z("DELETE",`/revision/topics/${e}`),restoreTopic:e=>Z("POST",`/revision/topics/${e}/restore`),getDueToday:()=>Z("GET","/revision/due-today"),getCalendar:(e,r)=>Z("GET",`/revision/calendar/${e}/${r}`),toggleReviewDone:e=>Z("PUT",`/revision/reviews/${e}/done`),getAffirmations:()=>Z("GET","/affirmations"),createAffirmation:e=>Z("POST","/affirmations",e),updateAffirmation:(e,r)=>Z("PUT",`/affirmations/${e}`,r),deleteAffirmation:e=>Z("DELETE",`/affirmations/${e}`),restoreAffirmation:e=>Z("POST",`/affirmations/${e}/restore`),getBucket:()=>Z("GET","/bucket"),createBucketWish:e=>Z("POST","/bucket",e),updateBucketWish:(e,r)=>Z("PUT",`/bucket/${e}`,r),fulfillBucketWish:e=>Z("POST",`/bucket/${e}/fulfill`),arrangeBucket:e=>Z("PUT","/bucket/arrange",{order:e}),deleteBucketWish:e=>Z("DELETE",`/bucket/${e}`),restoreBucketWish:e=>Z("POST",`/bucket/${e}/restore`),getChallenges:()=>Z("GET","/challenges"),createChallenge:e=>Z("POST","/challenges",e),updateChallenge:(e,r)=>Z("PUT",`/challenges/${e}`,r),deleteChallenge:e=>Z("DELETE",`/challenges/${e}`),restoreChallenge:e=>Z("POST",`/challenges/${e}/restore`),getAchievements:()=>Z("GET","/achievements"),createAchievement:e=>Z("POST","/achievements",e),updateAchievement:(e,r)=>Z("PUT",`/achievements/${e}`,r),deleteAchievement:e=>Z("DELETE",`/achievements/${e}`),restoreAchievement:e=>Z("POST",`/achievements/${e}/restore`),getDelight:()=>Z("GET","/delight"),createCollection:e=>Z("POST","/delight/collections",e),updateCollection:(e,r)=>Z("PUT",`/delight/collections/${e}`,r),deleteCollection:e=>Z("DELETE",`/delight/collections/${e}`),restoreCollection:e=>Z("POST",`/delight/collections/${e}/restore`),createDelightItem:(e,r)=>Z("POST",`/delight/collections/${e}/items`,r),updateDelightItem:(e,r)=>Z("PUT",`/delight/items/${e}`,r),deleteDelightItem:e=>Z("DELETE",`/delight/items/${e}`),restoreDelightItem:e=>Z("POST",`/delight/items/${e}/restore`),arrangeDelight:(e,r)=>Z("PUT",`/delight/collections/${e}/arrange`,{order:r})},mc=[{code:"INR",symbol:"₹",locale:"en-IN",label:"Indian Rupee"},{code:"USD",symbol:"$",locale:"en-US",label:"US Dollar"},{code:"EUR",symbol:"€",locale:"de-DE",label:"Euro"},{code:"GBP",symbol:"£",locale:"en-GB",label:"British Pound"},{code:"JPY",symbol:"¥",locale:"ja-JP",label:"Japanese Yen"},{code:"AED",symbol:"د.إ",locale:"en-AE",label:"UAE Dirham"},{code:"AUD",symbol:"A$",locale:"en-AU",label:"Australian Dollar"},{code:"CAD",symbol:"C$",locale:"en-CA",label:"Canadian Dollar"},{code:"SGD",symbol:"S$",locale:"en-SG",label:"Singapore Dollar"}],Hu="INR",jh="anvil_currency",wa=e=>mc.find(r=>r.code===e)||mc[0];function ui(){try{return localStorage.getItem(jh)||Hu}catch{return Hu}}function Gu(e){try{localStorage.setItem(jh,e)}catch{}return window.dispatchEvent(new CustomEvent("anvil-currency",{detail:e})),e}function vs(e,r){const n=wa(r||ui()),o=Math.round(Number(e)||0);return n.symbol+o.toLocaleString(n.locale)}function Ur(e,r){const n=wa(r||ui()),o=Number(e)||0;return n.symbol+o.toLocaleString(n.locale,{minimumFractionDigits:2,maximumFractionDigits:2})}function Uu(e,r){const n=wa(r||ui()),o=Math.round(Number(e)||0),i=Math.abs(o);return n.code==="INR"?i>=1e7?n.symbol+(o/1e7).toFixed(i>=1e8?0:1)+"Cr":i>=1e5?n.symbol+(o/1e5).toFixed(i>=1e6?0:1)+"L":i>=1e3?n.symbol+(o/1e3).toFixed(i>=1e4?0:1)+"K":n.symbol+o:i>=1e9?n.symbol+(o/1e9).toFixed(1)+"B":i>=1e6?n.symbol+(o/1e6).toFixed(1)+"M":i>=1e3?n.symbol+(o/1e3).toFixed(1)+"K":n.symbol+o}function eo(){const[e,r]=g.useState(ui());return g.useEffect(()=>{const n=o=>r(o.detail||ui());return window.addEventListener("anvil-currency",n),()=>window.removeEventListener("anvil-currency",n)},[]),wa(e)}const tr={financial:{label:"Financial",leaf:"#C9A227",shape:"round"},academic:{label:"Academic",leaf:"#3A7CA5",shape:"pine"},relationship:{label:"Relationship",leaf:"#C2536B",shape:"round"},spiritual:{label:"Spiritual",leaf:"#8268B0",shape:"tall"},health:{label:"Health",leaf:"#4C9A6B",shape:"round"}},vn="health";function Rg({species:e=vn,progress:r=1,withered:n=!1,size:o=200}){const i=Math.max(0,Math.min(1,r)),s=tr[e]||tr[vn],l=n?"#8A7B63":"#7A5A3C",a=n?"#A99C84":s.leaf,d=n?"#8F8268":a,u=14+i*46,m=112-u,f=i>.14,h=f?8+i*30:0;return t.jsxs("svg",{viewBox:"0 0 120 120",width:o,height:o,style:{display:"block"},children:[t.jsx("ellipse",{cx:"60",cy:"114",rx:20+i*14,ry:"5",fill:"rgba(38,36,31,0.08)"}),!f&&t.jsxs("g",{transform:`translate(60 ${112-i*40})`,children:[t.jsx("path",{d:"M0 8 C0 8 0 -2 0 -6",stroke:"#4C9A6B",strokeWidth:"2.5",fill:"none"}),t.jsx("ellipse",{cx:"-5",cy:"-4",rx:"6",ry:"3.5",fill:"#4C9A6B",transform:"rotate(-30 -5 -4)"}),t.jsx("ellipse",{cx:"5",cy:"-4",rx:"6",ry:"3.5",fill:"#5BB07E",transform:"rotate(30 5 -4)"})]}),f&&t.jsxs(t.Fragment,{children:[t.jsx("rect",{x:60-(2+i*2.5),y:m,width:(2+i*2.5)*2,height:u,rx:"2",fill:l}),s.shape==="pine"?t.jsxs(t.Fragment,{children:[t.jsx("polygon",{points:`60,${m-h*2.2} ${60-h},${m+4} ${60+h},${m+4}`,fill:a}),t.jsx("polygon",{points:`60,${m-h*3} ${60-h*.8},${m-h*.7} ${60+h*.8},${m-h*.7}`,fill:d})]}):s.shape==="tall"?t.jsxs(t.Fragment,{children:[t.jsx("ellipse",{cx:"60",cy:m-h*.3,rx:h*.78,ry:h*1.55,fill:a}),t.jsx("ellipse",{cx:"60",cy:m-h*.9,rx:h*.5,ry:h*1,fill:d,opacity:"0.9"})]}):t.jsxs(t.Fragment,{children:[t.jsx("circle",{cx:"60",cy:m,r:h,fill:a}),t.jsx("circle",{cx:60-h*.7,cy:m+h*.3,r:h*.78,fill:a}),t.jsx("circle",{cx:60+h*.7,cy:m+h*.3,r:h*.78,fill:d}),t.jsx("circle",{cx:"60",cy:m-h*.5,r:h*.8,fill:d,opacity:"0.92"})]})]})]})}function S0({species:e}){return t.jsx(Rg,{species:e,progress:1,size:56})}const Gs="#C9A227",Vu="#3A7CA5",Yu="#C2536B",Ku=new Set(["worth","achievements"]),C0=()=>{const e=new Date,r=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${r(e.getMonth()+1)}-${r(e.getDate())}`},Jt=C0(),z0={kickstart:"Kickstart",golden:"Golden Book",habits:"Habits",quadrant:"Quadrant",goals:"Goals",grove:"Grove",worth:"Rewards",vault:"Wallet",expenses:"Expenses",journal:"Journal",revision:"Revision",affirmations:"Affirmations",skills:"Skills",spiritual:"Spiritual",mindscape:"Mindscape",achievements:"Achievements",delight:"Delights"},hc=e=>{const r=Math.round(e||0),n=Math.floor(r/60),o=r%60;return n?`${n}h ${o}m`:`${o}m`},T0=e=>hc((e||0)/60),Qu=[{id:"Q1",label:"Do Now"},{id:"Q2",label:"Schedule"},{id:"Q3",label:"Delegate"},{id:"Q4",label:"Drop"}],qu=["Financial","Academic","Relationship","Health","Spiritual"];function I0({onNavigate:e}){var ht,gt;const r=eo(),n=U=>Ur(U,r.code),[o,i]=g.useState(!1),[s,l]=g.useState([]),[a,d]=g.useState([]),[u,m]=g.useState({sessions:[],stats:{}}),[f,h]=g.useState([]),[I,B]=g.useState([]),[k,C]=g.useState([]),[p,c]=g.useState([]),[b,T]=g.useState({}),[y,w]=g.useState({}),[D,S]=g.useState([]),[j,N]=g.useState([]),[J,se]=g.useState([]),[W,de]=g.useState([]),[Re,pe]=g.useState([]),je=g.useCallback(()=>{Promise.all([E.getHabits().catch(()=>[]),E.getTasks().catch(()=>[]),E.getFocus().catch(()=>({sessions:[],stats:{}})),E.getScreenTime().catch(()=>[]),E.getRewardRates().catch(()=>[]),E.getPayouts().catch(()=>[]),E.getAchievements().catch(()=>[]),E.getSetting("grove_rates").catch(()=>null),E.getSetting("reward_rates").catch(()=>null),E.getExpenses().catch(()=>({categories:[],logs:[]})),E.getInvestments().catch(()=>[]),E.getDueToday().catch(()=>[]),E.getSkills().catch(()=>[])]).then(([U,Te,Vt,Yt,ar,hr,Xr,fr,ln,Lr,Io,to,M])=>{l(U||[]),d(Te||[]),m(Vt||{sessions:[],stats:{}}),h(Array.isArray(Yt)?Yt:[]),B(ar||[]),C(hr||[]),c(Array.isArray(Xr)?Xr:[]),T((fr==null?void 0:fr.value)||{}),w((ln==null?void 0:ln.value)||{}),S((Lr==null?void 0:Lr.categories)||[]),N((Lr==null?void 0:Lr.logs)||[]),se(Io||[]),de(to||[]),pe(M||[]),i(!0)}).catch(()=>i(!0))},[]);g.useEffect(()=>{je()},[je]);const Q=s.filter(U=>(U.logs||[]).includes(Jt)).length;a.filter(U=>(U.start_datetime||"").slice(0,10)===Jt);const x=g.useMemo(()=>{const U={Q1:0,Q2:0,Q3:0,Q4:0};return a.forEach(Te=>{U[Te.quadrant]!==void 0&&U[Te.quadrant]++}),U},[a]),Y=((ht=u.stats)==null?void 0:ht.today_minutes)||0,H=((gt=u.stats)==null?void 0:gt.today_trees)||0,ae={};I.forEach(U=>{var Te;(ae[Te=`${U.kind}:${U.rkey}`]||(ae[Te]=[])).push({eff:U.eff_date,rate:U.rate})}),Object.values(ae).forEach(U=>U.sort((Te,Vt)=>Te.eff.localeCompare(Vt.eff)));const V=(U,Te,Vt)=>{const Yt=ae[`${U}:${Te}`];if(Yt){let ar=null;for(const hr of Yt)if(hr.eff<=Vt)ar=hr.rate;else break;if(ar!==null)return ar}return(U==="focus"?b[Te]:y[Te])||0};let G=0,P=0;(u.sessions||[]).filter(U=>U.completed).forEach(U=>{const Te=(U.started_at||U.created_at||"").slice(0,10);if(Te!==Jt)return;const Vt=tr[U.tree]?U.tree:vn;G+=(U.actual_min||0)/60*V("focus",Vt,Te)}),f.forEach(U=>{!Ku.has(U.screen)&&U.date===Jt&&(P+=U.seconds/60*V("usage",U.screen,U.date))});const ce=p.filter(U=>U.date===Jt&&(U.reward||0)>0).reduce((U,Te)=>U+(Te.reward||0),0),We=G+P+ce,X=We>0?G/We*100:0,ne=We>0?P/We*100:0,L=We>0?ce/We*100:0;let ie=0,he=0;(u.sessions||[]).filter(U=>U.completed).forEach(U=>{const Te=(U.started_at||U.created_at||"").slice(0,10),Vt=tr[U.tree]?U.tree:vn;ie+=(U.actual_min||0)/60*V("focus",Vt,Te)}),f.forEach(U=>{Ku.has(U.screen)||(he+=U.seconds/60*V("usage",U.screen,U.date))});const A=p.reduce((U,Te)=>U+(Te.reward||0),0),v=k.reduce((U,Te)=>U+Te.amount,0),re=Math.max(0,ie+he+A-v),le=j.filter(U=>U.date===Jt).reduce((U,Te)=>U+Te.amount,0);g.useMemo(()=>Object.fromEntries(D.map(U=>[U.id,U])),[D]);const ke=J.filter(U=>U.date===Jt||U.start_date===Jt).reduce((U,Te)=>U+(Te.invested||0),0),Ne=g.useMemo(()=>{const U={};return f.forEach(Te=>{Te.date===Jt&&(U[Te.screen]=(U[Te.screen]||0)+Te.seconds)}),Object.entries(U).filter(([,Te])=>Te>0).sort((Te,Vt)=>Vt[1]-Te[1])},[f]),lt=U=>f.some(Te=>Te.screen===U&&Te.date===Jt&&Te.seconds>0),Je=lt("spiritual"),mt=lt("affirmations"),Qe=g.useMemo(()=>{const U=[];return Re.forEach(Te=>Object.values(Te.notes||{}).forEach(Vt=>Vt.forEach(Yt=>{(Yt.created_at||"").slice(0,10)===Jt&&U.push({...Yt,skill:Te.title})}))),U},[Re]),st=lt("kickstart"),oe=lt("mindscape"),Me=p.filter(U=>U.date===Jt),[qe,tt]=g.useState(null),[ut,Et]=g.useState(null),[jt,vt]=g.useState(null),[Ct,R]=g.useState(null),me=U=>E.toggleHabitLog(U.id,Jt).then(je).catch(()=>{}),Ce=async()=>{const U=qe.title.trim();U&&(await E.createTask({pillar:qe.pillar,title:U,quadrant:qe.quadrant,time_estimate_min:Number(qe.time_estimate_min)||30,start_datetime:null,goal_id:null}),tt(null),je())},Oe=async()=>{await E.createFocus({label:ut.label.trim()||null,tree:ut.tree,duration_min:Number(ut.duration_min)||25}),Et(null),je()},kt=async()=>{const U=parseFloat(jt.amount)||0;U<=0||!jt.category_id||(await E.createExpenseLog({category_id:Number(jt.category_id),amount:U,note:jt.note.trim(),date:Jt}),vt(null),je())},It=async()=>{const U=Ct.name.trim(),Te=parseFloat(Ct.invested)||0;!U||Te<=0||(await E.createInvestment({name:U,kind:Ct.kind,invested:Te,current_value:Te,note:Ct.note.trim(),date:Jt}),R(null),je())},at=U=>e&&e(U);return o?t.jsxs("div",{style:xe.page,children:[t.jsxs("div",{style:xe.head,children:[t.jsx("div",{style:xe.eyebrow,children:"Anvil · Today"}),t.jsx("h1",{style:xe.h1,children:"Dashboard"}),t.jsx("div",{style:xe.subhead,children:new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})})]}),t.jsx(Ro,{title:"Used today",onClick:()=>{},children:Ne.length===0?t.jsx(Us,{children:"Nothing opened yet today."}):t.jsx("div",{style:xe.chipWrap,children:Ne.map(([U,Te])=>t.jsxs("button",{onClick:()=>at(U),style:xe.usedChip,children:[z0[U]||U," ",t.jsx("span",{style:xe.usedChipTime,children:T0(Te)})]},U))})}),t.jsxs("div",{style:xe.statGrid,children:[t.jsx(Vs,{icon:gc,color:"#4C9A6B",label:"Habits done",value:`${Q}/${s.length}`,onClick:()=>at("habits")}),t.jsx(Vs,{icon:pc,color:Gs,label:H?`Focus · ${H} tree${H===1?"":"s"}`:"Focus time",value:hc(Y),onClick:()=>at("grove")}),t.jsx(Vs,{icon:ql,color:"#C9772E",label:"Spent today",value:Ur(le,r.code),onClick:()=>at("expenses")}),t.jsx(Vs,{icon:ka,color:"#8268B0",label:"Invested today",value:Ur(ke,r.code),onClick:()=>at("vault")})]}),t.jsx(Ro,{title:"Rewards",eyebrow:`Pending ${n(re)}`,onClick:()=>at("worth"),children:We>0?t.jsxs("div",{style:xe.pieWrap,children:[t.jsxs("div",{style:xe.pieChart,children:[t.jsx("div",{style:{...xe.pieDisc,background:`conic-gradient(${Gs} 0 ${X}%, ${Vu} ${X}% ${X+ne}%, ${Yu} ${X+ne}% 100%)`}}),t.jsxs("div",{style:xe.pieHole,children:[t.jsx("span",{style:xe.pieHoleVal,children:n(We)}),t.jsx("span",{style:xe.pieHoleLbl,children:"today"})]})]}),t.jsxs("div",{style:xe.pieLegend,children:[t.jsx(qa,{color:Gs,label:"Focus",pct:X,val:n(G)}),t.jsx(qa,{color:Vu,label:"Usage",pct:ne,val:n(P)}),t.jsx(qa,{color:Yu,label:"Achievement",pct:L,val:n(ce)})]})]}):t.jsx(Us,{children:"No rewards earned yet today."})}),W.length>0&&t.jsx(Ro,{title:"Revision due",eyebrow:`${W.length} pending`,onClick:()=>at("revision"),children:t.jsx("div",{style:xe.rows,children:W.slice(0,5).map(U=>t.jsxs("div",{style:xe.row,children:[t.jsx("span",{style:{...xe.dot,background:U.is_missed?"#C2536B":"#C9A227"}}),t.jsx("span",{style:xe.rowName,children:U.topic}),t.jsxs("span",{style:xe.rowMeta,children:["Stage ",U.stage]})]},U.review_id))})}),t.jsxs("div",{style:xe.cardGrid,children:[t.jsx(Ys,{icon:Yi,color:"#8268B0",label:"Spiritual",done:Je,doneText:"Read today",idleText:"Not opened yet",onClick:()=>at("spiritual")}),t.jsx(Ys,{icon:To,color:"#C9A227",label:"Affirmations",done:mt,doneText:"Read today",idleText:"Not opened yet",onClick:()=>at("affirmations")}),t.jsx(Ys,{icon:ph,color:"#C9772E",label:"Kickstart",done:st,doneText:"Watched today",idleText:"Not watched yet",onClick:()=>at("kickstart")}),t.jsx(Ys,{icon:ah,color:"#3A7CA5",label:"Mindscape",done:oe,doneText:"Listened today",idleText:"Not listened yet",onClick:()=>at("mindscape")})]}),t.jsx(Ro,{title:"Skills enhanced",eyebrow:Qe.length?`${Qe.length} note${Qe.length===1?"":"s"}`:null,onClick:()=>at("skills"),children:Qe.length===0?t.jsx(Us,{children:"No skill notes added today."}):t.jsx("div",{style:xe.rows,children:Qe.slice(0,5).map(U=>t.jsxs("div",{style:xe.row,children:[t.jsx("span",{style:{...xe.dot,background:"#4C9A6B"}}),t.jsx("span",{style:xe.rowName,children:U.text}),t.jsx("span",{style:xe.rowMeta,children:U.skill})]},U.id))})}),Me.length>0&&t.jsx(Ro,{title:"Achievements today",eyebrow:`${Me.length}`,onClick:()=>at("achievements"),children:t.jsx("div",{style:xe.rows,children:Me.map(U=>t.jsxs("div",{style:xe.row,children:[t.jsx("span",{style:{...xe.dot,background:"#C2536B"}}),t.jsx("span",{style:xe.rowName,children:U.title}),U.reward>0&&t.jsx("span",{style:xe.rowAmt,children:n(U.reward)})]},U.id))})}),t.jsx(Ro,{title:"Wallet status",onClick:()=>at("vault"),children:t.jsxs("div",{style:xe.walletRow,children:[t.jsxs("div",{style:xe.walletStat,children:[t.jsx("div",{style:{...xe.walletVal,color:"#C9772E"},children:Ur(le,r.code)}),t.jsx("div",{style:xe.walletLbl,children:"Spent today"})]}),t.jsxs("div",{style:xe.walletStat,children:[t.jsx("div",{style:{...xe.walletVal,color:"#8268B0"},children:Ur(ke,r.code)}),t.jsx("div",{style:xe.walletLbl,children:"Invested today"})]}),t.jsxs("div",{style:xe.walletStat,children:[t.jsx("div",{style:xe.walletVal,children:Ur(re,r.code)}),t.jsx("div",{style:xe.walletLbl,children:"Rewards pending"})]})]})}),t.jsx("div",{style:xe.quickHead,children:"Quick log"}),t.jsxs("div",{style:xe.cardGrid,children:[t.jsxs("div",{style:xe.quickCard,children:[t.jsxs("div",{style:xe.quickTitle,children:[t.jsx(gc,{size:15,color:"#4C9A6B"})," Habits"]}),s.length===0?t.jsx(Us,{children:"No habits yet."}):t.jsx("div",{style:xe.habitList,children:s.slice(0,6).map(U=>{const Te=(U.logs||[]).includes(Jt);return t.jsxs("button",{onClick:()=>me(U),style:{...xe.habitChip,...Te?xe.habitChipOn:{}},children:[Te&&t.jsx(Cn,{size:12})," ",U.name]},U.id)})})]}),t.jsxs("div",{style:xe.quickCard,children:[t.jsxs("div",{style:xe.quickTitle,children:[t.jsx(kg,{size:15,color:"#3A7CA5"})," Quadrant"]}),t.jsx("div",{style:xe.quadGrid,children:Qu.map(U=>t.jsxs("div",{style:xe.quadCell,children:[t.jsx("span",{style:xe.quadLabel,children:U.label}),t.jsx("span",{style:xe.quadCount,children:x[U.id]})]},U.id))}),t.jsxs("button",{onClick:()=>tt({title:"",pillar:qu[0],quadrant:"Q1",time_estimate_min:30}),style:xe.quickAddBtn,children:[t.jsx(ot,{size:14})," Add task"]})]}),t.jsxs("div",{style:xe.quickCard,children:[t.jsxs("div",{style:xe.quickTitle,children:[t.jsx(pc,{size:15,color:Gs})," Grove focus"]}),t.jsxs("div",{style:xe.quickStat,children:[hc(Y)," today"]}),t.jsxs("button",{onClick:()=>Et({label:"",tree:vn,duration_min:25}),style:xe.quickAddBtn,children:[t.jsx(ot,{size:14})," Start session"]})]}),t.jsxs("div",{style:xe.quickCard,children:[t.jsxs("div",{style:xe.quickTitle,children:[t.jsx(ql,{size:15,color:"#C9772E"})," Expense / Investment"]}),t.jsxs("div",{style:xe.quickStat,children:[Ur(le,r.code)," spent today"]}),t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsxs("button",{onClick:()=>{var U;return vt({category_id:((U=D[0])==null?void 0:U.id)||"",amount:"",note:""})},style:{...xe.quickAddBtn,flex:1},children:[t.jsx(ot,{size:14})," Expense"]}),t.jsxs("button",{onClick:()=>R({name:"",kind:"Stocks",invested:"",note:""}),style:{...xe.quickAddBtn,flex:1},children:[t.jsx(ot,{size:14})," Invest"]})]})]})]}),qe&&t.jsxs(Ks,{title:"Add task",onClose:()=>tt(null),children:[t.jsx("input",{autoFocus:!0,placeholder:"Task title",value:qe.title,onChange:U=>tt(Te=>({...Te,title:U.target.value})),style:xe.input}),t.jsx("select",{value:qe.pillar,onChange:U=>tt(Te=>({...Te,pillar:U.target.value})),style:xe.input,children:qu.map(U=>t.jsx("option",{value:U,children:U},U))}),t.jsx("select",{value:qe.quadrant,onChange:U=>tt(Te=>({...Te,quadrant:U.target.value})),style:xe.input,children:Qu.map(U=>t.jsxs("option",{value:U.id,children:[U.id," · ",U.label]},U.id))}),t.jsx("input",{type:"number",min:"1",placeholder:"Estimate (min)",value:qe.time_estimate_min,onChange:U=>tt(Te=>({...Te,time_estimate_min:U.target.value})),style:xe.input}),t.jsx(Qs,{onCancel:()=>tt(null),onSave:Ce,disabled:!qe.title.trim()})]}),ut&&t.jsxs(Ks,{title:"Start focus session",onClose:()=>Et(null),children:[t.jsx("input",{autoFocus:!0,placeholder:"Label (optional)",value:ut.label,onChange:U=>Et(Te=>({...Te,label:U.target.value})),style:xe.input}),t.jsx("select",{value:ut.tree,onChange:U=>Et(Te=>({...Te,tree:U.target.value})),style:xe.input,children:Object.entries(tr).map(([U,Te])=>t.jsx("option",{value:U,children:Te.label},U))}),t.jsx("input",{type:"number",min:"1",placeholder:"Duration (min)",value:ut.duration_min,onChange:U=>Et(Te=>({...Te,duration_min:U.target.value})),style:xe.input}),t.jsx(Qs,{onCancel:()=>Et(null),onSave:Oe,disabled:!Number(ut.duration_min)})]}),jt&&t.jsxs(Ks,{title:"Log expense",onClose:()=>vt(null),children:[t.jsx("select",{value:jt.category_id,onChange:U=>vt(Te=>({...Te,category_id:U.target.value})),style:xe.input,children:D.map(U=>t.jsx("option",{value:U.id,children:U.name},U.id))}),t.jsx("input",{autoFocus:!0,type:"number",min:"0",step:"0.01",placeholder:`Amount (${r.symbol})`,value:jt.amount,onChange:U=>vt(Te=>({...Te,amount:U.target.value})),style:xe.input}),t.jsx("input",{placeholder:"Note (optional)",value:jt.note,onChange:U=>vt(Te=>({...Te,note:U.target.value})),style:xe.input}),t.jsx(Qs,{onCancel:()=>vt(null),onSave:kt,disabled:!(parseFloat(jt.amount)>0&&jt.category_id)})]}),Ct&&t.jsxs(Ks,{title:"Log investment",onClose:()=>R(null),children:[t.jsx("input",{autoFocus:!0,placeholder:"Name",value:Ct.name,onChange:U=>R(Te=>({...Te,name:U.target.value})),style:xe.input}),t.jsx("select",{value:Ct.kind,onChange:U=>R(Te=>({...Te,kind:U.target.value})),style:xe.input,children:["Stocks","Mutual Fund","Gold","Real Estate","Fixed Deposit","Crypto","Other"].map(U=>t.jsx("option",{value:U,children:U},U))}),t.jsx("input",{type:"number",min:"0",step:"0.01",placeholder:`Invested (${r.symbol})`,value:Ct.invested,onChange:U=>R(Te=>({...Te,invested:U.target.value})),style:xe.input}),t.jsx("input",{placeholder:"Note (optional)",value:Ct.note,onChange:U=>R(Te=>({...Te,note:U.target.value})),style:xe.input}),t.jsx(Qs,{onCancel:()=>R(null),onSave:It,disabled:!(Ct.name.trim()&&parseFloat(Ct.invested)>0)})]})]}):t.jsx("div",{style:xe.loading,children:"Loading…"})}function Ro({title:e,eyebrow:r,onClick:n,children:o}){return t.jsxs("div",{style:xe.card,children:[t.jsxs("div",{style:xe.cardTitleRow,children:[t.jsxs("button",{onClick:n,style:xe.cardTitleBtn,children:[e," ",t.jsx(fy,{size:13})]}),r&&t.jsx("span",{style:xe.cardEyebrow,children:r})]}),o]})}function Us({children:e}){return t.jsx("div",{style:xe.muted,children:e})}function qa({color:e,label:r,pct:n,val:o}){return t.jsxs("div",{style:xe.pieLegRow,children:[t.jsx("span",{style:{...xe.legendDot,background:e}}),t.jsx("span",{style:xe.pieLegName,children:r}),t.jsxs("span",{style:xe.pieLegPct,children:[Math.round(n),"%"]}),t.jsx("span",{style:xe.pieLegMin,children:o})]})}function Vs({icon:e,color:r,label:n,value:o,sub:i,onClick:s}){return t.jsxs("button",{onClick:s,style:xe.statTile,children:[t.jsx("div",{style:{...xe.statIcon,background:`${r}1A`,color:r},children:t.jsx(e,{size:17})}),t.jsxs("div",{style:{minWidth:0},children:[t.jsx("div",{style:xe.statVal,children:o}),t.jsxs("div",{style:xe.statLbl,children:[n,i?` · ${i}`:""]})]})]})}function Ys({icon:e,color:r,label:n,done:o,doneText:i,idleText:s,onClick:l}){return t.jsxs("button",{onClick:l,style:xe.miniCard,children:[t.jsx("div",{style:{...xe.statIcon,background:`${r}1A`,color:r},children:t.jsx(e,{size:16})}),t.jsx("div",{style:xe.miniLabel,children:n}),t.jsx("div",{style:{...xe.miniStatus,color:o?"#4C9A6B":"var(--text-3)"},children:o?i:s})]})}function Ks({title:e,onClose:r,children:n}){return t.jsx("div",{style:xe.modalOverlay,onClick:r,children:t.jsxs("div",{style:xe.modalCard,onClick:o=>o.stopPropagation(),children:[t.jsx("div",{style:xe.modalTitle,children:e}),t.jsx("div",{style:xe.modalBody,children:n})]})})}function Qs({onCancel:e,onSave:r,disabled:n}){return t.jsxs("div",{style:xe.modalActions,children:[t.jsx("button",{onClick:e,style:xe.modalCancel,children:"Cancel"}),t.jsx("button",{onClick:r,disabled:n,style:{...xe.modalConfirm,...n?{opacity:.5,cursor:"not-allowed"}:{}},children:"Save"})]})}const xe={loading:{padding:40,textAlign:"center",color:"var(--text-3)",fontFamily:"'Inter',system-ui,sans-serif"},page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},chipWrap:{display:"flex",gap:8,flexWrap:"wrap"},usedChip:{border:"1px solid var(--border)",background:"var(--surface-2)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",gap:6},usedChipTime:{color:"var(--text-3)",fontWeight:600,fontSize:11.5},statGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:10,marginBottom:14},statTile:{display:"flex",alignItems:"center",gap:10,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,padding:"12px 14px",cursor:"pointer",fontFamily:"inherit",textAlign:"left",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},statIcon:{width:34,height:34,borderRadius:10,display:"grid",placeItems:"center",flexShrink:0},statVal:{fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},card:{background:"var(--surface)",borderRadius:16,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,marginBottom:10},cardTitleBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"'Fraunces',Georgia,serif",fontSize:16,fontWeight:700,color:"var(--text)"},cardEyebrow:{fontSize:12,fontWeight:700,color:"var(--text-3)"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"10px 0"},rows:{display:"flex",flexDirection:"column",gap:2},row:{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:"1px solid var(--border)"},dot:{width:10,height:10,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:13.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},rowMeta:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,flexShrink:0},rowAmt:{fontSize:13.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:20,flexWrap:"wrap"},pieChart:{position:"relative",width:110,height:110,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:66,height:66,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:12.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:9.5,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:160,display:"flex",flexDirection:"column",gap:8},pieLegRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:10,height:10,borderRadius:3,flexShrink:0},pieLegName:{flex:1,fontSize:13,fontWeight:600},pieLegPct:{fontSize:12.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",width:40,textAlign:"right"},pieLegMin:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,minWidth:58,textAlign:"right"},cardGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:10,marginBottom:14},miniCard:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:6,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,padding:"12px 14px",cursor:"pointer",fontFamily:"inherit",textAlign:"left",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},miniLabel:{fontSize:13,fontWeight:700,color:"var(--text)"},miniStatus:{fontSize:11.5,fontWeight:600},walletRow:{display:"flex",gap:10},walletStat:{flex:1,textAlign:"center"},walletVal:{fontSize:17,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},walletLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:2},quickHead:{fontSize:13,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",margin:"6px 0 10px"},quickCard:{border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,padding:"14px 16px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},quickTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13.5,fontWeight:700,color:"var(--text)"},quickStat:{fontSize:13,color:"var(--text-2)",fontWeight:600},quickAddBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface-2)",color:"var(--text)",padding:"8px 10px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},habitList:{display:"flex",flexWrap:"wrap",gap:6},habitChip:{border:"1px solid var(--border)",background:"var(--surface-2)",color:"var(--text-2)",padding:"5px 10px",borderRadius:14,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",gap:4},habitChipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},quadGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6},quadCell:{display:"flex",justifyContent:"space-between",alignItems:"center",border:"1px solid var(--border)",borderRadius:8,padding:"5px 8px",fontSize:11.5},quadLabel:{color:"var(--text-3)",fontWeight:600},quadCount:{fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",fontSize:13},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modalCard:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"20px 20px 16px",width:340,maxWidth:"100%",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)"},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},modalBody:{display:"flex",flexDirection:"column",gap:8},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface-2)",outline:"none"},modalActions:{display:"flex",gap:8,marginTop:6},modalCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalConfirm:{flex:1,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},B0=7e3;function br(e,r,n){const[o,i]=g.useState([]),s=g.useRef({}),l=g.useCallback(async(u,m="Item")=>{await e(u),n();const f=`${u}-${Date.now()}`;i(h=>[...h,{id:f,itemId:u,label:m}]),s.current[f]=setTimeout(()=>{i(h=>h.filter(I=>I.id!==f)),delete s.current[f]},B0)},[e,n]),a=g.useCallback(async u=>{const m=o.find(f=>f.id===u);m&&(clearTimeout(s.current[u]),delete s.current[u],i(f=>f.filter(h=>h.id!==u)),await r(m.itemId),n())},[o,r,n]),d=g.useCallback(u=>{clearTimeout(s.current[u]),delete s.current[u],i(m=>m.filter(f=>f.id!==u))},[]);return{deleteItem:l,toasts:o,handleUndo:a,handleDismiss:d}}function mr({toasts:e,onUndo:r,onDismiss:n}){return t.jsx("div",{style:Lo.container,children:e.map(o=>t.jsx(R0,{toast:o,onUndo:r,onDismiss:n},o.id))})}function R0({toast:e,onUndo:r,onDismiss:n}){const[o,i]=g.useState(100);return g.useEffect(()=>{const s=Date.now(),l=7e3,a=setInterval(()=>{const d=Date.now()-s,u=Math.max(0,100-d/l*100);i(u),u===0&&clearInterval(a)},50);return()=>clearInterval(a)},[]),t.jsxs("div",{style:Lo.toast,children:[t.jsx("div",{style:{...Lo.bar,width:`${o}%`}}),t.jsxs("span",{style:Lo.msg,children:[e.label," deleted"]}),t.jsx("button",{style:Lo.undoBtn,onClick:()=>r(e.id),children:"Undo"}),t.jsx("button",{style:Lo.closeBtn,onClick:()=>n(e.id),children:"×"})]})}const Lo={container:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",gap:8,zIndex:999,pointerEvents:"none"},toast:{position:"relative",display:"flex",alignItems:"center",gap:12,background:"var(--accent-strong)",color:"#fff",borderRadius:10,padding:"12px 16px",fontSize:13.5,fontFamily:"'Inter', system-ui, sans-serif",boxShadow:"0 4px 20px rgba(0,0,0,0.25)",minWidth:260,overflow:"hidden",pointerEvents:"all"},bar:{position:"absolute",bottom:0,left:0,height:3,background:"#4C9A6B",transition:"width 0.05s linear",borderRadius:"0 0 0 10px"},msg:{flex:1,fontWeight:500},undoBtn:{border:"1px solid rgba(255,255,255,0.3)",background:"none",color:"#4C9A6B",fontWeight:700,fontSize:13,padding:"4px 10px",borderRadius:6,cursor:"pointer",fontFamily:"inherit"},closeBtn:{border:"none",background:"none",color:"rgba(255,255,255,0.5)",cursor:"pointer",fontSize:18,lineHeight:1,padding:"0 2px"}},an={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},E0=[{id:"Q1",symbol:"™",title:"Do Now",sub:"Important · Urgent",accent:"#C2536B"},{id:"Q2",symbol:"©",title:"Schedule",sub:"Important · Not Urgent",accent:"#3A7CA5"},{id:"Q3",symbol:"®",title:"Delegate",sub:"Not Important · Urgent",accent:"#C9A227"},{id:"Q4",symbol:"•",title:"Drop",sub:"Not Important · Not Urgent",accent:"#8A8780"}];function kh(){return new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Kolkata"})}function wh(){const e=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"})),n=e.getMinutes()<30?30:0,o=n===0?e.getHours()+1:e.getHours();return`${String(o%24).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function Xu(e,r){const[n,o]=e.split(":").map(Number),i=n*60+o+r;return`${String(Math.floor(i/60)%24).padStart(2,"0")}:${String(i%60).padStart(2,"0")}`}function F0(e){return e?new Date(e).toLocaleString("en-IN",{timeZone:"Asia/Kolkata",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0}):""}const qs=()=>({title:"",pillar:"Financial",est:30,date:kh(),startTime:wh()});function A0(){const[e,r]=g.useState([]),[n,o]=g.useState([]),[i,s]=g.useState("All"),[l,a]=g.useState(null),[d,u]=g.useState(null),[m,f]=g.useState(qs()),[h,I]=g.useState(null),[B,k]=g.useState(qs()),C=g.useCallback(()=>E.getTasks().then(r).catch(console.error),[]);g.useEffect(()=>{C(),E.getGoals().then(G=>o(G.filter(P=>P.horizon==="Weekly"))).catch(()=>{})},[C]);const p=Object.keys(an),c=n.filter(G=>i==="All"||G.pillar===i),b=n.find(G=>G.id===l)||null,T=e.filter(G=>l!=null?G.goal_id===l:i!=="All"?G.pillar===i:!0),y=G=>{s(G),a(null),u(null),f(P=>({...P,pillar:G==="All"?"Financial":G}))},w=G=>{a(G),u(null);const P=n.find(ge=>ge.id===G);P&&f(ge=>({...ge,pillar:P.pillar}))},{deleteItem:D,toasts:S,handleUndo:j,handleDismiss:N}=br(E.deleteTask,E.restoreTask,C),J=G=>T.filter(P=>P.quadrant===G),se=G=>J(G).reduce((P,ge)=>P+ge.time_estimate_min,0),W=G=>G>=60?`${Math.floor(G/60)}h${G%60?` ${G%60}m`:""}`:`${G}m`,de=async G=>{if(!m.title.trim())return;const P=m.date&&m.startTime?`${m.date}T${m.startTime}:00`:null;await E.createTask({pillar:b?b.pillar:m.pillar,title:m.title,quadrant:G,time_estimate_min:Number(m.est)||30,start_datetime:P,goal_id:l??null}),f(qs()),u(null),C()},Re=(G,P)=>D(G,P),pe=G=>{const P=G.start_datetime?G.start_datetime.split("T"):[];I(G.id),u(null),k({title:G.title,pillar:G.pillar,est:G.time_estimate_min,date:P[0]||kh(),startTime:(P[1]||"").slice(0,5)||wh()})},je=async G=>{if(!B.title.trim())return;const P=B.date&&B.startTime?`${B.date}T${B.startTime}:00`:null;await E.updateTask(G.id,{title:B.title.trim(),pillar:B.pillar,time_estimate_min:Number(B.est)||30,start_datetime:P}),I(null),C()},Q=g.useRef(null),x=g.useRef(null),[Y,H]=g.useState(null),ae=(G,P)=>{var ce;const ge=document.elementFromPoint(G,P);return ge&&ge.closest&&((ce=ge.closest("[data-quad]"))==null?void 0:ce.getAttribute("data-quad"))||null};g.useEffect(()=>{const G=ge=>{const ce=Q.current;if(!ce)return;const We=Math.hypot(ge.clientX-ce.startX,ge.clientY-ce.startY);if(!ce.active){if(ce.pointerType!=="mouse"){We>12&&(clearTimeout(x.current),Q.current=null);return}if(We<6)return;ce.active=!0,document.body.style.userSelect="none"}ge.cancelable&&ge.preventDefault(),ce.overQ=ae(ge.clientX,ge.clientY),H({id:ce.task.id,title:ce.task.title,x:ge.clientX,y:ge.clientY,overQ:ce.overQ})},P=()=>{clearTimeout(x.current);const ge=Q.current;Q.current=null,document.body.style.userSelect="",document.body.style.touchAction="",H(null),ge&&ge.active&&ge.overQ&&ge.overQ!==ge.task.quadrant&&E.updateTask(ge.task.id,{quadrant:ge.overQ}).then(C).catch(()=>{})};return window.addEventListener("pointermove",G,{passive:!1}),window.addEventListener("pointerup",P),window.addEventListener("pointercancel",P),()=>{window.removeEventListener("pointermove",G),window.removeEventListener("pointerup",P),window.removeEventListener("pointercancel",P)}},[C]);const V=(G,P)=>{G.pointerType==="mouse"&&G.button!==0||(Q.current={task:P,startX:G.clientX,startY:G.clientY,active:!1,pointerType:G.pointerType,overQ:null},G.pointerType!=="mouse"&&(x.current=setTimeout(()=>{const ge=Q.current;ge&&(ge.active=!0,document.body.style.touchAction="none",H({id:ge.task.id,title:ge.task.title,x:ge.startX,y:ge.startY,overQ:ge.task.quadrant}))},280)))};return t.jsxs("div",{style:Ee.page,children:[t.jsxs("div",{style:Ee.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:Ee.eyebrow,children:"Anvil · Weekly Routing"}),t.jsx("h1",{style:Ee.h1,children:"Weekly Routing"})]}),t.jsx("div",{style:Ee.headRight,children:t.jsx("div",{style:Ee.legend,children:Object.entries(an).map(([G,P])=>t.jsxs("span",{style:Ee.legendItem,children:[t.jsx("span",{style:{...Ee.dot,background:P.dot}}),G]},G))})})]}),t.jsx("div",{style:Ee.filterBar,children:["All",...p].map(G=>{const P=i===G,ge=an[G];return t.jsxs("button",{onClick:()=>y(G),style:{...Ee.pillChip,...P?ge?{background:ge.dot,color:"#fff",borderColor:ge.dot}:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:[ge&&t.jsx("span",{style:{...Ee.dot,background:P?"#fff":ge.dot}}),G==="All"?"All":G]},G)})}),t.jsxs("div",{style:Ee.goalBar,children:[t.jsx("button",{onClick:()=>a(null),style:{...Ee.goalChip,...l==null?Ee.goalChipOn:{}},children:"All goals"}),c.map(G=>{var ce;const P=((ce=an[G.pillar])==null?void 0:ce.dot)||"#9A968C",ge=l===G.id;return t.jsxs("button",{onClick:()=>w(G.id),style:{...Ee.goalChip,...ge?{background:P,color:"#fff",borderColor:P}:{}},title:G.title,children:[t.jsx("span",{style:{...Ee.dot,background:ge?"#fff":P}}),t.jsx("span",{style:Ee.goalChipText,children:G.title})]},G.id)}),c.length===0&&t.jsxs("span",{style:Ee.goalEmpty,children:["No weekly goals",i!=="All"?` for ${i}`:""," — create them in Goals."]})]}),t.jsx("div",{style:Ee.grid,children:E0.map(G=>{var P,ge;return t.jsxs("section",{"data-quad":G.id,style:{...Ee.quad,borderTop:`3px solid ${G.accent}`,...Y&&Y.overQ===G.id&&Y.overQ!==((P=e.find(ce=>ce.id===Y.id))==null?void 0:P.quadrant)?{outline:`2px dashed ${G.accent}`,outlineOffset:2,background:"var(--hover)"}:{}},children:[t.jsxs("header",{style:Ee.quadHead,children:[t.jsxs("div",{style:Ee.quadTitleRow,children:[t.jsx("span",{style:{...Ee.symbol,color:G.accent},children:G.symbol}),t.jsxs("div",{children:[t.jsx("div",{style:Ee.quadTitle,children:G.title}),t.jsx("div",{style:Ee.quadSub,children:G.sub})]})]}),t.jsx("span",{style:Ee.quadTotal,children:W(se(G.id))})]}),t.jsxs("div",{style:Ee.list,children:[J(G.id).map(ce=>{const We=an[ce.pillar]||an.Financial;return h===ce.id?t.jsxs("div",{style:Ee.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"Task title",value:B.title,onChange:X=>k({...B,title:X.target.value}),onKeyDown:X=>X.key==="Enter"&&je(ce),style:Ee.input}),t.jsxs("div",{style:Ee.dateTimeRow,children:[t.jsxs("div",{style:Ee.dateTimeGroup,children:[t.jsx("label",{style:Ee.dtLabel,children:"Date"}),t.jsx("input",{type:"date",value:B.date,onChange:X=>k({...B,date:X.target.value}),style:Ee.dtInput})]}),t.jsxs("div",{style:Ee.dateTimeGroup,children:[t.jsx("label",{style:Ee.dtLabel,children:"Start"}),t.jsx("input",{type:"time",value:B.startTime,onChange:X=>k({...B,startTime:X.target.value}),style:Ee.dtInput})]}),t.jsxs("div",{style:Ee.dateTimeGroup,children:[t.jsx("label",{style:Ee.dtLabel,children:"End"}),t.jsx("div",{style:Ee.dtEndValue,children:Xu(B.startTime,Number(B.est)||30)})]})]}),t.jsxs("div",{style:Ee.addRow,children:[t.jsx("select",{value:B.pillar,onChange:X=>k({...B,pillar:X.target.value}),style:Ee.select,children:Object.keys(an).map(X=>t.jsx("option",{children:X},X))}),t.jsx("input",{type:"number",value:B.est,onChange:X=>k({...B,est:X.target.value}),style:{...Ee.input,width:60}}),t.jsx("span",{style:Ee.minLabel,children:"min"}),t.jsx("button",{onClick:()=>je(ce),style:Ee.saveBtn,children:t.jsx(He,{size:14})}),t.jsx("button",{onClick:()=>I(null),style:Ee.cancelBtn,children:t.jsx(De,{size:14})})]})]},ce.id):t.jsxs("div",{onPointerDown:X=>V(X,ce),style:{...Ee.card,background:We.soft,cursor:"grab",touchAction:"pan-y",...(Y==null?void 0:Y.id)===ce.id?{opacity:.4}:{}},children:[t.jsx("span",{style:{...Ee.cardBar,background:We.dot}}),t.jsxs("div",{style:Ee.cardBody,children:[t.jsx("div",{style:Ee.cardTitle,children:ce.title}),ce.start_datetime&&t.jsxs("div",{style:Ee.eventTime,children:[t.jsx(Ty,{size:10}),F0(ce.start_datetime)]}),t.jsxs("div",{style:Ee.cardMeta,children:[t.jsxs("span",{style:Ee.metaPill,children:[t.jsx("span",{style:{...Ee.dot,background:We.dot,width:7,height:7}}),ce.pillar]}),t.jsxs("span",{style:Ee.metaPill,children:[t.jsx(sh,{size:11})," ",W(ce.time_estimate_min)]})]})]}),t.jsxs("div",{style:Ee.cardActions,children:[t.jsx("button",{onClick:()=>pe(ce),onPointerDown:X=>X.stopPropagation(),style:Ee.delBtn,title:"Edit",children:t.jsx(yt,{size:12})}),t.jsx("button",{onClick:()=>Re(ce.id,ce.title),onPointerDown:X=>X.stopPropagation(),style:Ee.delBtn,children:t.jsx(De,{size:13})})]})]},ce.id)}),d===G.id?t.jsxs("div",{style:Ee.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"Task title",value:m.title,onChange:ce=>f({...m,title:ce.target.value}),onKeyDown:ce=>ce.key==="Enter"&&de(G.id),style:Ee.input}),t.jsxs("div",{style:Ee.dateTimeRow,children:[t.jsxs("div",{style:Ee.dateTimeGroup,children:[t.jsx("label",{style:Ee.dtLabel,children:"Date"}),t.jsx("input",{type:"date",value:m.date,onChange:ce=>f({...m,date:ce.target.value}),style:Ee.dtInput})]}),t.jsxs("div",{style:Ee.dateTimeGroup,children:[t.jsx("label",{style:Ee.dtLabel,children:"Start"}),t.jsx("input",{type:"time",value:m.startTime,onChange:ce=>f({...m,startTime:ce.target.value}),style:Ee.dtInput})]}),t.jsxs("div",{style:Ee.dateTimeGroup,children:[t.jsx("label",{style:Ee.dtLabel,children:"End"}),t.jsx("div",{style:Ee.dtEndValue,children:Xu(m.startTime,Number(m.est)||30)})]})]}),t.jsxs("div",{style:Ee.addRow,children:[b?t.jsxs("span",{style:Ee.goalPillarTag,children:[t.jsx("span",{style:{...Ee.dot,background:(ge=an[b.pillar])==null?void 0:ge.dot}})," ",b.pillar]}):t.jsx("select",{value:m.pillar,onChange:ce=>f({...m,pillar:ce.target.value}),style:Ee.select,children:Object.keys(an).map(ce=>t.jsx("option",{children:ce},ce))}),t.jsx("input",{type:"number",value:m.est,onChange:ce=>f({...m,est:ce.target.value}),style:{...Ee.input,width:60}}),t.jsx("span",{style:Ee.minLabel,children:"min"}),t.jsx("button",{onClick:()=>de(G.id),style:Ee.saveBtn,children:t.jsx(He,{size:14})}),t.jsx("button",{onClick:()=>{u(null),f(qs())},style:Ee.cancelBtn,children:t.jsx(De,{size:14})})]})]}):t.jsxs("button",{onClick:()=>u(G.id),style:Ee.addTrigger,children:[t.jsx(ot,{size:13})," Add task"]})]})]},G.id)})}),Y&&t.jsx("div",{style:{...Ee.dragClone,left:Y.x+12,top:Y.y+12},children:Y.title}),t.jsx(mr,{toasts:S,onUndo:j,onDismiss:N})]})}const Ee={page:{fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:16,marginBottom:22},headRight:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:10},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces', Georgia, serif"},legend:{display:"flex",gap:14,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--text-2)",fontWeight:500},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:10},pillChip:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},goalBar:{display:"flex",gap:7,flexWrap:"wrap",alignItems:"center",marginBottom:18,paddingBottom:14,borderBottom:"1px solid var(--border)"},goalChip:{display:"inline-flex",alignItems:"center",gap:6,maxWidth:220,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},goalChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},goalChipText:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},goalEmpty:{fontSize:12,color:"var(--text-3)",fontStyle:"italic"},goalPillarTag:{display:"inline-flex",alignItems:"center",gap:6,fontSize:12.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"7px 10px",borderRadius:6,flex:1},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16},quad:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.06)"},quadHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14},quadTitleRow:{display:"flex",gap:10,alignItems:"center"},symbol:{fontSize:20,lineHeight:1},quadTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em"},quadSub:{fontSize:11,color:"var(--text-3)",marginTop:1,letterSpacing:"0.02em"},quadTotal:{fontSize:12,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"3px 9px",borderRadius:20},list:{display:"flex",flexDirection:"column",gap:8},card:{display:"flex",alignItems:"stretch",gap:10,borderRadius:9,padding:"10px 10px 10px 0",overflow:"hidden"},cardBar:{width:3,borderRadius:3,flexShrink:0},cardBody:{flex:1,minWidth:0},cardTitle:{fontSize:13.5,fontWeight:500,lineHeight:1.35,marginBottom:4},eventTime:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#3A7CA5",fontWeight:500,marginBottom:5},cardMeta:{display:"flex",gap:8,flexWrap:"wrap"},metaPill:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"var(--text-2)",fontWeight:500},cardActions:{display:"flex",flexDirection:"column",gap:4,alignSelf:"center",flexShrink:0},delBtn:{width:30,height:30,borderRadius:8,border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center"},addTrigger:{display:"flex",alignItems:"center",gap:5,fontSize:12.5,color:"var(--text-3)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"8px 10px",cursor:"pointer",fontWeight:500,marginTop:2},addBox:{border:"1px solid var(--border)",borderRadius:9,padding:10,display:"flex",flexDirection:"column",gap:8},dateTimeRow:{display:"flex",gap:8,alignItems:"flex-end"},dateTimeGroup:{display:"flex",flexDirection:"column",gap:3,flex:1},dtLabel:{fontSize:10,fontWeight:600,color:"var(--text-3)",letterSpacing:"0.08em",textTransform:"uppercase"},dtInput:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},dtEndValue:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,color:"var(--text-2)",background:"var(--bg)"},addRow:{display:"flex",alignItems:"center",gap:6},input:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",flex:1,minWidth:0},select:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 8px",fontSize:12.5,fontFamily:"inherit",flex:1},minLabel:{fontSize:11,color:"var(--text-3)"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},dragClone:{position:"fixed",zIndex:1e3,pointerEvents:"none",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:8,padding:"8px 12px",fontSize:13,fontWeight:600,color:"var(--text)",boxShadow:"0 8px 24px rgba(0,0,0,0.25)",maxWidth:220,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},Ir={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},zi=Object.keys(Ir),kl=["Yearly","Quarterly","Monthly","Weekly"],tn=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Zu=[{label:"Q1 · Jan–Mar",startMonth:0},{label:"Q2 · Apr–Jun",startMonth:3},{label:"Q3 · Jul–Sep",startMonth:6},{label:"Q4 · Oct–Dec",startMonth:9}],wl=new Date().getFullYear(),Eo=Array.from({length:8},(e,r)=>wl-1+r);function D0(e=720){const[r,n]=g.useState(()=>window.innerWidth<e);return g.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const Ai=864e5,Ht=30,Ki=190,Fo=e=>new Date(e+"T00:00:00"),Ju=e=>e.toLocaleDateString("en-US",{month:"short",day:"numeric"}),W0=[{key:"yearly",label:"Yearly",horizons:["Yearly"]},{key:"quarterly",label:"Quarterly",horizons:["Quarterly"]},{key:"mw",label:"Monthly & Weekly",horizons:["Monthly","Weekly"]}],ep={Yearly:"Yr",Quarterly:"Q",Monthly:"Mo",Weekly:"Wk"},M0={Yearly:"Y",Quarterly:"Q",Monthly:"M",Weekly:"W"},tp={Yearly:0,Quarterly:1,Monthly:2,Weekly:3},Xa=e=>kl[Math.min(kl.indexOf(e)+1,kl.length-1)],Xs=e=>{if(!e||!e.start_date)return Array.from({length:12},(l,a)=>a);const r=new Date(e.start_date+"T00:00:00"),n=new Date(e.end_date+"T00:00:00"),o=r.getFullYear(),i=r.getMonth(),s=n.getFullYear()>o?11:n.getMonth();return Array.from({length:s-i+1},(l,a)=>i+a)},Ti=e=>new Date(e+"T00:00:00").getFullYear(),Sh=(e,r,n)=>{const o=(n-1)*7+1,i=Math.min(o+6,new Date(e,r+1,0).getDate()),s=String(r+1).padStart(2,"0");return{start_date:`${e}-${s}-${String(o).padStart(2,"0")}`,end_date:`${e}-${s}-${String(i).padStart(2,"0")}`}},rp=(e,r,n,o=1)=>{const i=r;switch(e){case"Yearly":return{start_date:`${i}-01-01`,end_date:`${i}-12-31`};case"Quarterly":{const s=Math.floor(n/3)*3,l=s+1,a=s+3,d=new Date(i,a,0).getDate();return{start_date:`${i}-${String(l).padStart(2,"0")}-01`,end_date:`${i}-${String(a).padStart(2,"0")}-${d}`}}case"Monthly":{const s=new Date(i,n+1,0).getDate();return{start_date:`${i}-${String(n+1).padStart(2,"0")}-01`,end_date:`${i}-${String(n+1).padStart(2,"0")}-${s}`}}case"Weekly":return Sh(i,n,o);default:return{start_date:`${i}-01-01`,end_date:`${i}-12-31`}}},Qi=(e,r)=>{const n=new Date(e+"T00:00:00");return n.setDate(n.getDate()+r),`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`},Zl=(e,r)=>Math.round((new Date(r+"T00:00:00")-new Date(e+"T00:00:00"))/Ai)+1,L0=(e,r,n)=>{if(!n||!n.start_date||!n.end_date)return{start_date:e,end_date:r,clamped:!1};const o=Zl(e,r);let i=e,s=r,l=!1;return i<n.start_date&&(i=n.start_date,s=Qi(i,o-1),l=!0),s>n.end_date&&(s=n.end_date,i=Qi(s,-(o-1)),l=!0,i<n.start_date&&(i=n.start_date)),{start_date:i,end_date:s,clamped:l}},_0=(e,r)=>new Date(e,r+1,0).getDate(),fc=e=>{const r=new Date(e.start_date+"T00:00:00");if(e.horizon==="Monthly")return _0(r.getFullYear(),r.getMonth());if(e.horizon==="Weekly"){const n=Math.min(Math.max(Math.ceil(r.getDate()/7),1),4),o=Sh(r.getFullYear(),r.getMonth(),n);return Zl(o.start_date,o.end_date)}return Zl(e.start_date,e.end_date)},np=e=>Math.round(fc(e)*1.5),$0=e=>e.horizon==="Monthly"||e.horizon==="Weekly",P0=e=>{if(!e.start_date)return"";const r=new Date(e.start_date+"T00:00:00"),n=r.getMonth();switch(e.horizon){case"Yearly":{const o=e.end_date?new Date(e.end_date+"T00:00:00").getFullYear():r.getFullYear();return o>r.getFullYear()?`${r.getFullYear()}–${o}`:`${r.getFullYear()}`}case"Quarterly":return`Q${Math.floor(n/3)+1} ${r.getFullYear()}`;case"Monthly":return`${tn[n]} ${r.getFullYear()}`;case"Weekly":return`${tn[n]} W${Math.ceil(r.getDate()/7)}`;default:return""}};function N0(){const[e,r]=g.useState([]),[n,o]=g.useState("All"),[i,s]=g.useState({}),[l,a]=g.useState({}),[d,u]=g.useState(null),[m,f]=g.useState(""),[h,I]=g.useState(0),[B,k]=g.useState(1),[C,p]=g.useState(wl),[c,b]=g.useState(wl),[T,y]=g.useState("Yearly"),[w,D]=g.useState(zi[0]),[S,j]=g.useState(null),N=D0(),[J,se]=g.useState(!N),[W,de]=g.useState("day"),[Re,pe]=g.useState(null),je=g.useRef(null);g.useEffect(()=>{je.current=Re},[Re]);const Q=g.useRef(e);g.useEffect(()=>{Q.current=e},[e]);const[x,Y]=g.useState(null),H=g.useRef(null);g.useEffect(()=>{H.current=x},[x]);const ae=g.useRef(null),V=g.useRef(0),[G,P]=g.useState(null),ge=g.useRef(null),ce=g.useCallback($=>{P($),clearTimeout(ge.current),ge.current=setTimeout(()=>P(null),2800)},[]),[We,X]=g.useState(null),ne=g.useRef(null),[L,ie]=g.useState(null),[he,A]=g.useState(null),v=($,ee)=>{if(L===ee){ie(null);return}const Fe=$.currentTarget.getBoundingClientRect(),$e=Fe.bottom+220<window.innerHeight;A({right:Math.max(8,window.innerWidth-Fe.right),...$e?{top:Fe.bottom+4}:{bottom:window.innerHeight-Fe.top+4}}),ie(ee)},re=$=>{clearTimeout(ne.current),ne.current=setTimeout(()=>X($),350)},F=()=>{clearTimeout(ne.current),X(null)},le=g.useCallback(()=>{E.getGoals().then(r).catch(console.error)},[]);g.useEffect(()=>{le()},[le]);const{deleteItem:ye,toasts:ke,handleUndo:Ne,handleDismiss:lt}=br(E.deleteGoal,E.restoreGoal,le),Je=g.useCallback(async()=>{const $=je.current;if(pe(null),!$)return;const ee=Math.round($.dx/($.pxPerDay||Ht));if(!ee)return;let Fe=Qi($.g.start_date,ee),$e=Qi($.g.end_date,ee);if($.g.parent_goal_id){const Ze=Q.current.find(nt=>nt.id===$.g.parent_goal_id),Xe=L0(Fe,$e,Ze);Xe.clamped&&ce(`Can't move past "${(Ze==null?void 0:Ze.title)||"parent goal"}" — kept within its dates.`),Fe=Xe.start_date,$e=Xe.end_date}(Fe!==$.g.start_date||$e!==$.g.end_date)&&(await E.updateGoal($.g.id,{pillar:$.g.pillar,start_date:Fe,end_date:$e}),le())},[le,ce]),mt=!!Re;g.useEffect(()=>{if(!mt)return;const $=Xe=>{V.current=Xe.clientX,pe(nt=>nt&&{...nt,dx:Xe.clientX-nt.startX})},ee=()=>Je();window.addEventListener("pointermove",$),window.addEventListener("pointerup",ee);const Fe=44,$e=16,Ze=setInterval(()=>{const Xe=ae.current;if(!Xe)return;const nt=Xe.getBoundingClientRect(),xt=V.current;let Ie=0;if(xt<nt.left+Fe?Ie=-1:xt>nt.right-Fe&&(Ie=1),!Ie)return;const Ot=Xe.scrollLeft;Xe.scrollLeft=Math.max(0,Math.min(Ot+Ie*$e,Xe.scrollWidth-Xe.clientWidth));const xr=Xe.scrollLeft-Ot;xr&&pe(pt=>pt&&{...pt,startX:pt.startX-xr,dx:xt-(pt.startX-xr)})},16);return()=>{window.removeEventListener("pointermove",$),window.removeEventListener("pointerup",ee),clearInterval(Ze)}},[mt,Je]);const Qe=g.useCallback(async()=>{const $=H.current;if(Y(null),!$)return;const ee=$.g,Fe=fc(ee),$e=np(ee),Ze=Math.max(Fe,Math.min($e,Zl(ee.start_date,ee.end_date)+Math.round($.dx/Ht)));let Xe=Qi(ee.start_date,Ze-1);if(ee.parent_goal_id){const nt=Q.current.find(xt=>xt.id===ee.parent_goal_id);nt!=null&&nt.end_date&&Xe>nt.end_date&&(Xe=nt.end_date,ce(`Can't extend past "${(nt==null?void 0:nt.title)||"parent goal"}" — kept within its dates.`))}Xe!==ee.end_date&&Xe>=ee.start_date&&(await E.updateGoal(ee.id,{end_date:Xe}),le())},[le,ce]),st=!!x;g.useEffect(()=>{if(!st)return;const $=Fe=>Y($e=>$e&&{...$e,dx:Fe.clientX-$e.startX}),ee=()=>Qe();return window.addEventListener("pointermove",$),window.addEventListener("pointerup",ee),()=>{window.removeEventListener("pointermove",$),window.removeEventListener("pointerup",ee)}},[st,Qe]);const oe=n==="All",Me=Ir[n]||{dot:"var(--text-3)"},qe=oe?e:e.filter($=>$.pillar===n),tt=qe.filter($=>!$.parent_goal_id),ut=$=>qe.filter(ee=>ee.parent_goal_id===$),Et=$=>a(ee=>({...ee,[$]:!ee[$]})),jt=$=>$.horizon==="Monthly"||$.horizon==="Weekly",vt=$=>i[$.id]!==void 0?i[$.id]:jt($),Ct=$=>s(ee=>({...ee,[$.id]:!vt($)})),R=($,ee=null)=>{u($),f(""),k(1);const Fe=ee?Ti(ee.start_date):wl;p(Fe),b(Fe),$==="ROOT"&&D(oe?zi[0]:n);const $e=$==="ROOT"?"Yearly":Xa(ee==null?void 0:ee.horizon);y($e);const Ze=$==="ROOT"?Array.from({length:12},(Xe,nt)=>nt):Xs(ee);I($e==="Quarterly"?Math.floor(Ze[0]/3)*3:Ze[0]??0)},me=async($,ee)=>{if(!m.trim())return;const Fe=(ee==null?void 0:ee.horizon)??null,$e=$==="ROOT"?T:Xa(Fe),Ze=$==="ROOT"?w:(ee==null?void 0:ee.pillar)||n;let Xe,nt;if($e==="Yearly"){const xt=Number(C),Ie=Math.max(xt,Number(c)||xt);Xe=`${xt}-01-01`,nt=`${Ie}-12-31`}else{const xt=ee?Ti(ee.start_date):Number(C);({start_date:Xe,end_date:nt}=rp($e,xt,h,B))}await E.createGoal({pillar:Ze,title:m.trim(),horizon:$e,parent_goal_id:$==="ROOT"?null:$,start_date:Xe,end_date:nt}),$!=="ROOT"&&a(xt=>({...xt,[$]:!0})),u(null),f(""),le()},Ce=$=>{const ee=$.start_date?new Date($.start_date+"T00:00:00"):new Date,Fe=ee.getMonth(),$e=Math.min(Math.max(Math.ceil(ee.getDate()/7),1),4);j({id:$.id,title:$.title,pillar:$.pillar,horizon:$.horizon,parentGoal:e.find(Ze=>Ze.id===$.parent_goal_id)||null,year:Ti($.start_date),endYear:Ti($.end_date),month:$.horizon==="Quarterly"?Math.floor(Fe/3)*3:Fe,week:$e})},Oe=async()=>{if(!S||!S.title.trim())return;let $,ee;if(S.horizon==="Yearly"){const Fe=Number(S.year),$e=Math.max(Fe,Number(S.endYear)||Fe);$=`${Fe}-01-01`,ee=`${$e}-12-31`}else{let Fe=S.month;S.horizon==="Weekly"&&S.parentGoal&&(Fe=Xs(S.parentGoal)[0]);const $e=S.parentGoal?Ti(S.parentGoal.start_date):Number(S.year);({start_date:$,end_date:ee}=rp(S.horizon,$e,Fe,S.week))}await E.updateGoal(S.id,{title:S.title.trim(),pillar:S.pillar,start_date:$,end_date:ee}),j(null),le()},kt=({parentId:$,parentGoal:ee,depth:Fe})=>{const $e=$==="ROOT",Ze=$e?T:Xa((ee==null?void 0:ee.horizon)??null),Xe=$e?Array.from({length:12},(Ie,Ot)=>Ot):Xs(ee),nt=Zu.filter(Ie=>Xe.includes(Ie.startMonth)),xt=Ie=>{y(Ie),I(0),k(1),b(C)};return t.jsxs("div",{style:{...be.addBox,marginLeft:Fe*24},children:[t.jsx("input",{autoFocus:!0,placeholder:`New ${Ze.toLowerCase()} goal…`,value:m,onChange:Ie=>f(Ie.target.value),onKeyDown:Ie=>{Ie.key==="Enter"&&me($,ee),Ie.key==="Escape"&&u(null)},style:be.input}),$e&&oe&&t.jsx("select",{value:w,onChange:Ie=>D(Ie.target.value),style:be.monthSelect,title:"Pillar",children:zi.map(Ie=>t.jsx("option",{value:Ie,children:Ie},Ie))}),$e&&t.jsx("select",{value:T,onChange:Ie=>xt(Ie.target.value),style:be.monthSelect,title:"Goal level",children:kl.map(Ie=>t.jsx("option",{value:Ie,children:Ie},Ie))}),Ze==="Yearly"&&t.jsxs(t.Fragment,{children:[t.jsx("select",{value:C,onChange:Ie=>{const Ot=Number(Ie.target.value);p(Ot),c<Ot&&b(Ot)},style:be.monthSelect,title:"Start year",children:Eo.map(Ie=>t.jsx("option",{value:Ie,children:Ie},Ie))}),t.jsx("span",{style:be.toTag,children:"to"}),t.jsx("select",{value:c,onChange:Ie=>b(Number(Ie.target.value)),style:be.monthSelect,title:"End year (spans multiple years)",children:Eo.filter(Ie=>Ie>=C).map(Ie=>t.jsx("option",{value:Ie,children:Ie},Ie))})]}),Ze!=="Yearly"&&$e&&t.jsx("select",{value:C,onChange:Ie=>p(Number(Ie.target.value)),style:be.monthSelect,title:"Year",children:Eo.map(Ie=>t.jsx("option",{value:Ie,children:Ie},Ie))}),Ze==="Quarterly"&&t.jsx("select",{value:h,onChange:Ie=>I(Number(Ie.target.value)),style:be.monthSelect,children:nt.map(Ie=>t.jsx("option",{value:Ie.startMonth,children:Ie.label},Ie.startMonth))}),Ze==="Monthly"&&t.jsx("select",{value:h,onChange:Ie=>I(Number(Ie.target.value)),style:be.monthSelect,children:Xe.map(Ie=>t.jsx("option",{value:Ie,children:tn[Ie]},Ie))}),Ze==="Weekly"&&t.jsxs(t.Fragment,{children:[$e?t.jsx("select",{value:h,onChange:Ie=>I(Number(Ie.target.value)),style:be.monthSelect,children:Xe.map(Ie=>t.jsx("option",{value:Ie,children:tn[Ie]},Ie))}):t.jsx("span",{style:be.inheritTag,children:tn[Xe[0]]}),t.jsx("select",{value:B,onChange:Ie=>k(Number(Ie.target.value)),style:be.monthSelect,children:[1,2,3,4].map(Ie=>t.jsxs("option",{value:Ie,children:["Week ",Ie]},Ie))})]}),t.jsx("button",{onClick:()=>me($,ee),style:be.saveBtn,children:t.jsx(He,{size:14})}),t.jsx("button",{onClick:()=>u(null),style:be.cancelBtn,children:t.jsx(De,{size:14})})]})},It=({goal:$,depth:ee})=>{var nt,xt,Ie,Ot,xr;const Fe=ut($.id),$e=l[$.id],Ze=$.horizon!=="Weekly";if((S==null?void 0:S.id)===$.id){const pt=Xs(S.parentGoal),ro=Zu.filter(Ge=>pt.includes(Ge.startMonth)),hi=!S.parentGoal;return t.jsxs("div",{style:{...be.editBox,marginLeft:ee*24},children:[t.jsx("input",{autoFocus:!0,value:S.title,onChange:Ge=>j({...S,title:Ge.target.value}),onKeyDown:Ge=>Ge.key==="Enter"&&Oe(),style:{...be.input,flex:1}}),t.jsx("select",{value:S.pillar,onChange:Ge=>j({...S,pillar:Ge.target.value}),style:be.monthSelect,children:zi.map(Ge=>t.jsx("option",{children:Ge},Ge))}),S.horizon==="Yearly"&&t.jsxs(t.Fragment,{children:[t.jsx("select",{value:S.year,onChange:Ge=>{const fi=Number(Ge.target.value);j({...S,year:fi,endYear:Math.max(fi,S.endYear)})},style:be.monthSelect,title:"Start year",children:Eo.map(Ge=>t.jsx("option",{value:Ge,children:Ge},Ge))}),t.jsx("span",{style:be.toTag,children:"to"}),t.jsx("select",{value:S.endYear,onChange:Ge=>j({...S,endYear:Number(Ge.target.value)}),style:be.monthSelect,title:"End year (spans multiple years)",children:Eo.filter(Ge=>Ge>=S.year).map(Ge=>t.jsx("option",{value:Ge,children:Ge},Ge))})]}),S.horizon!=="Yearly"&&hi&&t.jsx("select",{value:S.year,onChange:Ge=>j({...S,year:Number(Ge.target.value)}),style:be.monthSelect,title:"Year",children:Eo.map(Ge=>t.jsx("option",{value:Ge,children:Ge},Ge))}),S.horizon==="Quarterly"&&t.jsx("select",{value:S.month,onChange:Ge=>j({...S,month:Number(Ge.target.value)}),style:be.monthSelect,children:ro.map(Ge=>t.jsx("option",{value:Ge.startMonth,children:Ge.label},Ge.startMonth))}),S.horizon==="Monthly"&&t.jsx("select",{value:S.month,onChange:Ge=>j({...S,month:Number(Ge.target.value)}),style:be.monthSelect,children:pt.map(Ge=>t.jsx("option",{value:Ge,children:tn[Ge]},Ge))}),S.horizon==="Weekly"&&t.jsxs(t.Fragment,{children:[hi?t.jsx("select",{value:S.month,onChange:Ge=>j({...S,month:Number(Ge.target.value)}),style:be.monthSelect,children:pt.map(Ge=>t.jsx("option",{value:Ge,children:tn[Ge]},Ge))}):t.jsx("span",{style:be.inheritTag,children:tn[pt[0]]}),t.jsx("select",{value:S.week,onChange:Ge=>j({...S,week:Number(Ge.target.value)}),style:be.monthSelect,children:[1,2,3,4].map(Ge=>t.jsxs("option",{value:Ge,children:["Week ",Ge]},Ge))})]}),t.jsx("button",{onClick:Oe,style:be.saveBtn,children:t.jsx(He,{size:14})}),t.jsx("button",{onClick:()=>j(null),style:be.cancelBtn,children:t.jsx(De,{size:14})})]})}return t.jsxs("div",{children:[t.jsxs("div",{style:{...be.row,marginLeft:ee*24,background:ee===0&&((nt=Ir[$.pillar])==null?void 0:nt.soft)||"transparent"},children:[Fe.length>0?t.jsx("button",{onClick:()=>Et($.id),style:be.caret,children:$e?t.jsx(zo,{size:15}):t.jsx(sn,{size:15})}):t.jsx("span",{style:{...be.caret,opacity:.25},children:t.jsx(Tg,{size:12})}),t.jsx("span",{style:{...be.horizonTag,color:((xt=Ir[$.pillar])==null?void 0:xt.dot)||Me.dot,borderColor:((Ie=Ir[$.pillar])==null?void 0:Ie.dot)||Me.dot},title:$.horizon,children:N?M0[$.horizon]:$.horizon}),t.jsxs("div",{style:be.nameCol,children:[t.jsx("span",{style:{...be.title,...We===$.id?be.titleFull:{}},title:$.title,onPointerDown:()=>re($.id),onPointerUp:F,onPointerLeave:F,onPointerCancel:F,children:$.title}),t.jsx("span",{style:be.whenSub,children:P0($)})]}),N?t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{position:"relative",flexShrink:0},children:[t.jsx("button",{onClick:pt=>v(pt,$.id),style:be.rowAdd,title:"Options",children:t.jsx(hh,{size:15})}),L===$.id&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:be.menuBackdrop,onClick:()=>ie(null)}),t.jsxs("div",{style:{...be.goalMenu,...he},children:[t.jsxs("button",{style:be.menuItem,onClick:()=>{Ce($),ie(null)},children:[t.jsx(yt,{size:14})," Edit"]}),Ze&&t.jsxs("button",{style:be.menuItem,onClick:()=>{a(pt=>({...pt,[$.id]:!0})),R($.id,$),ie(null)},children:[t.jsx(ot,{size:14})," Add sub-goal"]}),t.jsxs("button",{style:{...be.menuItem,color:"#C2536B"},onClick:()=>{ye($.id,$.title),ie(null)},children:[t.jsx(De,{size:14})," Delete"]})]})]})]}),t.jsx("button",{onClick:()=>Ct($),style:{...be.rowAdd,color:vt($)?((Ot=Ir[$.pillar])==null?void 0:Ot.dot)||Me.dot:"var(--text-3)"},title:vt($)?"Showing on timeline":"Hidden from timeline",children:vt($)?t.jsx(ms,{size:14}):t.jsx(Kl,{size:14})})]}):t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>Ct($),style:{...be.rowAdd,color:vt($)?((xr=Ir[$.pillar])==null?void 0:xr.dot)||Me.dot:"var(--text-3)"},title:vt($)?"Showing on timeline — click to hide":"Hidden from timeline — click to show",children:vt($)?t.jsx(ms,{size:13}):t.jsx(Kl,{size:13})}),t.jsx("button",{onClick:()=>Ce($),style:be.rowAdd,title:"Edit",children:t.jsx(yt,{size:12})}),Ze&&t.jsx("button",{onClick:()=>{a(pt=>({...pt,[$.id]:!0})),R($.id,$)},style:be.rowAdd,title:"Add sub-goal",children:t.jsx(ot,{size:13})}),t.jsx("button",{onClick:()=>ye($.id,$.title),style:{...be.rowAdd,color:"var(--text-3)"},title:"Delete",children:t.jsx(De,{size:13})})]})]}),$e&&Fe.map(pt=>t.jsx(It,{goal:pt,depth:ee+1},pt.id)),$e&&d===$.id&&t.jsx(kt,{parentId:$.id,parentGoal:$,depth:ee+1})]})},at=e.filter($=>vt($)&&$.start_date&&$.end_date),ht=W0.map($=>({...$,items:at.filter(ee=>$.horizons.includes(ee.horizon)).sort((ee,Fe)=>ee.pillar.localeCompare(Fe.pillar)||ee.start_date.localeCompare(Fe.start_date)||tp[ee.horizon]-tp[Fe.horizon]||ee.end_date.localeCompare(Fe.end_date))})).filter($=>$.items.length>0),gt=(()=>{if(!at.length)return null;let $=at[0].start_date,ee=at[0].end_date;return at.forEach(Fe=>{Fe.start_date<$&&($=Fe.start_date),Fe.end_date>ee&&(ee=Fe.end_date)}),{start:Fo($),end:Fo(ee)}})(),U=(()=>{if(!gt)return[];const $=[];for(let ee=gt.start.getTime();ee<=gt.end.getTime();ee+=Ai)$.push(new Date(ee));return $})(),Te=U.length,Vt=(()=>{const $=[];return U.forEach(ee=>{const Fe=`${ee.getFullYear()}-${ee.getMonth()}`,$e=$[$.length-1];$e&&$e.key===Fe?$e.days++:$.push({key:Fe,label:`${tn[ee.getMonth()]} '${String(ee.getFullYear()).slice(2)}`,days:1})}),$})(),Yt=new Date;Yt.setHours(0,0,0,0);const ar=gt?Math.round((Yt-gt.start)/Ai):-1,hr=ar>=0&&ar<Te,Xr=$=>Math.round((Fo($.end_date)-Fo($.start_date))/Ai)+1,fr=W==="month",ln=gt?gt.start.getFullYear():0,Lr=gt?gt.start.getMonth():0,Io=(()=>{if(!gt)return[];const $=[];let ee=ln,Fe=Lr;const $e=gt.end.getFullYear(),Ze=gt.end.getMonth();for(;ee<$e||ee===$e&&Fe<=Ze;)$.push({y:ee,m:Fe}),Fe++,Fe>11&&(Fe=0,ee++);return $})(),to=Io.length||1,M=($,ee)=>{const Fe=Fo($),$e=(Fe.getFullYear()-ln)*12+Fe.getMonth()-Lr,Ze=new Date(Fe.getFullYear(),Fe.getMonth()+1,0).getDate();return $e+(Fe.getDate()-(ee?0:1))/Ze},Le=($,ee)=>M($,ee)/to*100,rt=`${Yt.getFullYear()}-${String(Yt.getMonth()+1).padStart(2,"0")}-${String(Yt.getDate()).padStart(2,"0")}`,Mt=gt?Le(rt,!1):0,_r=(J?Ki:0)+ar*Ht,zr=gt?`${gt.start.getTime()}-${gt.end.getTime()}`:"";return g.useEffect(()=>{if(fr||!hr)return;const $=ae.current;$&&($.scrollLeft=Math.max(0,_r-$.clientWidth/2+Ht/2))},[zr,ar,J,hr,fr]),t.jsxs("div",{style:be.page,children:[t.jsxs("div",{style:be.head,children:[t.jsx("div",{style:be.eyebrow,children:"Anvil · Goals"}),t.jsx("h1",{style:be.h1,children:oe?"All Goals":`${n} Goals`})]}),t.jsxs("div",{style:be.pillarPicker,children:[t.jsx("button",{onClick:()=>{o("All"),u(null),j(null)},style:{...be.pillarChip,...oe?{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:"All Goals"}),zi.map($=>{const ee=$===n;return t.jsxs("button",{onClick:()=>{o($),u(null),j(null)},style:{...be.pillarChip,...ee?{background:Ir[$].dot,color:"#fff",borderColor:Ir[$].dot}:{}},children:[t.jsx("span",{style:{...be.dot,background:ee?"#fff":Ir[$].dot}}),$]},$)})]}),t.jsxs("div",{style:be.list,children:[tt.map($=>t.jsx(It,{goal:$,depth:0},$.id)),tt.length===0&&t.jsxs("div",{style:be.ganttEmpty,children:["No goals yet",oe?"":` for ${n}`,"."]}),d==="ROOT"&&t.jsx(kt,{parentId:"ROOT",parentGoal:null,depth:0}),d!=="ROOT"&&t.jsxs("button",{onClick:()=>R("ROOT",null),style:be.rootAdd,children:[t.jsx(ot,{size:14})," Add new goal"]})]}),t.jsxs("div",{style:be.ganttWrap,children:[t.jsxs("div",{style:be.ganttTop,children:[t.jsxs("div",{style:be.ganttTitle,children:[fr?"Monthly":"Daily"," Timeline",gt?` · ${Ju(gt.start)} – ${Ju(gt.end)}`:""]}),t.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[t.jsxs("div",{style:be.zoomToggle,children:[t.jsx("button",{onClick:()=>de("day"),style:{...be.zoomBtn,...fr?{}:be.zoomBtnOn},children:"Day"}),t.jsx("button",{onClick:()=>de("month"),style:{...be.zoomBtn,...fr?be.zoomBtnOn:{}},children:"Month"})]}),t.jsxs("button",{onClick:()=>se($=>!$),style:be.labelToggle,children:[J?t.jsx(t0,{size:14}):t.jsx(r0,{size:14}),J?"Hide names":"Show names"]})]})]}),gt?fr?t.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[t.jsxs("div",{style:be.gBandRow,children:[J&&t.jsx("div",{style:{...be.gLabelHead,zIndex:4},children:"Goal"}),t.jsx("div",{style:{flex:1,display:"grid",gridTemplateColumns:`repeat(${to}, 1fr)`,minWidth:0},children:Io.map(($,ee)=>t.jsxs("div",{style:be.gMonthFluid,children:[tn[$.m],$.m===0||ee===0?` '${String($.y).slice(2)}`:""]},ee))})]}),ht.map($=>t.jsxs("div",{children:[t.jsxs("div",{style:be.gGroupRow,children:[J?t.jsxs("div",{style:be.gGroupLabel,children:[$.label,t.jsx("span",{style:be.gGroupCount,children:$.items.length})]}):t.jsxs("div",{style:be.gGroupChip,children:[$.label," · ",$.items.length]}),t.jsx("div",{style:{flex:1}})]}),$.items.map(ee=>{var xr;const Fe=((xr=Ir[ee.pillar])==null?void 0:xr.dot)||"#9A968C",$e=(Re==null?void 0:Re.id)===ee.id,Ze=$e?Re.dx:0,Xe=Le(ee.start_date,!1),nt=Math.max(2,Le(ee.end_date,!0)-Xe),xt=Xr(ee),Ie=nt>=14,Ot=`${ee.title} · ${ee.start_date} → ${ee.end_date} · ${xt} day${xt>1?"s":""}`;return t.jsxs("div",{style:be.gRow,children:[J&&t.jsxs("div",{style:{...be.gLabel,paddingLeft:12},children:[t.jsx("span",{style:{...be.ganttRowDot,background:Fe}}),t.jsx("span",{style:{...be.gHzTag,color:Fe,borderColor:Fe},children:ep[ee.horizon]}),t.jsx("span",{style:be.gLabelText,title:ee.title,children:ee.title}),t.jsxs("span",{style:be.gDurChip,children:[xt,"d"]})]}),t.jsxs("div",{style:{position:"relative",flex:1,minHeight:36,minWidth:0,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent calc(100% / ${to}))`},children:[hr&&t.jsx("div",{style:{...be.gTodayLine,left:`${Mt}%`}}),t.jsxs("div",{onPointerDown:pt=>{pt.preventDefault(),V.current=pt.clientX;const ro=pt.currentTarget.parentNode.offsetWidth;pe({id:ee.id,startX:pt.clientX,dx:0,g:ee,pxPerDay:ro/Te})},style:{...be.gBar,left:`${Xe}%`,width:`${nt}%`,background:Fe,cursor:$e?"grabbing":"grab",transform:Ze?`translateX(${Ze}px)`:"none",zIndex:$e?6:1,boxShadow:$e?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:Ot,children:[t.jsx(Ql,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff"}}),Ie&&t.jsx("span",{style:be.gBarLabel,children:ee.title})]}),!Ie&&t.jsx("span",{style:{...be.gBarOutside,left:`calc(${Xe+nt}% + 6px)`},title:Ot,children:ee.title})]})]},ee.id)})]},$.key))]}):t.jsx("div",{style:be.ganttScroll,ref:ae,children:t.jsxs("div",{style:{minWidth:(J?Ki:0)+Te*Ht,position:"relative"},children:[hr&&t.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:_r,width:Ht,background:"color-mix(in srgb, var(--accent) 14%, transparent)",pointerEvents:"none",zIndex:3}}),t.jsxs("div",{style:be.gBandRow,children:[J&&t.jsx("div",{style:{...be.gLabelHead,zIndex:4},children:"Goal"}),t.jsx("div",{style:{display:"flex"},children:Vt.map(($,ee)=>t.jsx("div",{style:{...be.gMonthCell,width:$.days*Ht},children:$.label},ee))})]}),t.jsxs("div",{style:be.gBandRow,children:[J&&t.jsx("div",{style:{...be.gLabelHead,zIndex:4,fontSize:10,color:"var(--text-3)",fontWeight:600},children:"days →"}),t.jsx("div",{style:{display:"flex"},children:U.map(($,ee)=>{const Fe=$.getDay()===0||$.getDay()===6,$e=ee===ar;return t.jsx("div",{style:{...be.gDayCell,...Fe?be.gWeekend:{},...$e?be.gTodayCell:{}},children:$.getDate()},ee)})})]}),ht.map($=>t.jsxs("div",{children:[t.jsxs("div",{style:be.gGroupRow,children:[J?t.jsxs("div",{style:be.gGroupLabel,children:[$.label,t.jsx("span",{style:be.gGroupCount,children:$.items.length})]}):t.jsxs("div",{style:be.gGroupChip,children:[$.label," · ",$.items.length]}),t.jsx("div",{style:{width:Te*Ht,flexShrink:0}})]}),$.items.map(ee=>{var fi;const Fe=((fi=Ir[ee.pillar])==null?void 0:fi.dot)||"#9A968C",$e=Math.round((Fo(ee.start_date)-gt.start)/Ai),Ze=Xr(ee),Xe=(Re==null?void 0:Re.id)===ee.id,nt=Xe?Re.dx:0,xt=$0(ee),Ie=(x==null?void 0:x.id)===ee.id,Ot=xt?fc(ee):Ze,xr=xt?np(ee):Ze,pt=Ie?Math.max(Ot,Math.min(xr,Ze+Math.round(x.dx/Ht))):Ze,ro=pt*Ht-4,hi=ro>=54,Ge=`${ee.title} · ${ee.start_date} → ${ee.end_date} · ${pt} day${pt>1?"s":""}${xt?` (max ${xr})`:""}`;return t.jsxs("div",{style:be.gRow,children:[J&&t.jsxs("div",{style:{...be.gLabel,paddingLeft:12},children:[t.jsx("span",{style:{...be.ganttRowDot,background:Fe}}),t.jsx("span",{style:{...be.gHzTag,color:Fe,borderColor:Fe},children:ep[ee.horizon]}),t.jsx("span",{style:be.gLabelText,title:ee.title,children:ee.title}),t.jsxs("span",{style:be.gDurChip,children:[pt,"d"]})]}),t.jsxs("div",{style:{...be.gTrack,width:Te*Ht},children:[hr&&t.jsx("div",{style:{...be.gTodayLine,left:ar*Ht}}),t.jsxs("div",{onPointerDown:no=>{no.preventDefault(),V.current=no.clientX,pe({id:ee.id,startX:no.clientX,dx:0,g:ee,pxPerDay:Ht})},style:{...be.gBar,left:$e*Ht+2,width:ro,background:Fe,cursor:Xe?"grabbing":"grab",transform:nt?`translateX(${nt}px)`:"none",zIndex:Xe||Ie?6:1,boxShadow:Xe||Ie?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:Ge,children:[xt&&pt>Ot&&t.jsx("div",{style:{position:"absolute",left:Ot*Ht,top:0,bottom:0,right:0,background:"#C2536B",borderRadius:"0 5px 5px 0"}}),t.jsx(Ql,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff",position:"relative",zIndex:1}}),hi&&t.jsx("span",{style:{...be.gBarLabel,position:"relative",zIndex:1},children:ee.title}),xt&&t.jsx("div",{onPointerDown:no=>{no.preventDefault(),no.stopPropagation(),Y({id:ee.id,startX:no.clientX,dx:0,g:ee})},style:be.resizeHandle,title:`Drag to extend up to ${xr} days`,children:t.jsx("div",{style:be.resizeGrip})})]}),!hi&&t.jsx("span",{style:{...be.gBarOutside,left:$e*Ht+ro+8+nt},title:Ge,children:ee.title})]})]},ee.id)})]},$.key))]})}):t.jsx("div",{style:be.ganttEmpty,children:"No goals on the timeline. Click the eye icon on a goal to show it here."}),gt&&t.jsxs("div",{style:be.gLegend,children:[t.jsxs("span",{style:be.gLegendItem,children:[t.jsx("span",{style:{...be.gLegendBar}})," bar length = number of days"]}),t.jsxs("span",{style:be.gLegendItem,children:[t.jsx("span",{style:be.gLegendToday})," today"]})]})]}),G&&t.jsxs("div",{style:be.warnToast,children:[t.jsx(h0,{size:15,style:{flexShrink:0}}),t.jsx("span",{children:G})]}),t.jsx(mr,{toasts:ke,onUndo:Ne,onDismiss:lt})]})}const be={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},pillarPicker:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},pillarChip:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},list:{background:"var(--surface)",borderRadius:12,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"hidden"},row:{display:"flex",alignItems:"center",gap:9,padding:"9px 10px",borderRadius:8,flexWrap:"nowrap"},caret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},horizonTag:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",border:"1px solid",borderRadius:5,padding:"2px 6px",flexShrink:0},nameCol:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:1},title:{fontSize:14,fontWeight:500,lineHeight:1.3,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",userSelect:"none",WebkitUserSelect:"none",cursor:"default"},titleFull:{whiteSpace:"normal",overflow:"visible",textOverflow:"clip",wordBreak:"break-word"},whenSub:{fontSize:11,fontStyle:"italic",color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},rowAdd:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,flexShrink:0},menuBackdrop:{position:"fixed",inset:0,zIndex:40},goalMenu:{position:"fixed",zIndex:41,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 6px 24px rgba(0,0,0,0.18)",padding:4,minWidth:180,display:"flex",flexDirection:"column"},menuItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:7,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text)",textAlign:"left"},rootAdd:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"var(--text-2)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"9px 12px",cursor:"pointer",fontWeight:600,fontFamily:"inherit",marginTop:6,width:"100%",justifyContent:"center"},addBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 0 6px 28px",flexWrap:"wrap"},editBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 10px",flexWrap:"wrap",background:"var(--bg)",borderRadius:8,margin:"4px 0"},input:{border:"1px solid var(--border)",borderRadius:7,padding:"8px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",flex:1,minWidth:120},monthSelect:{border:"1px solid var(--border)",borderRadius:7,padding:"8px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},inheritTag:{fontSize:11.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"6px 9px",borderRadius:7,flexShrink:0},toTag:{fontSize:11.5,fontWeight:600,color:"var(--text-3)",flexShrink:0},warnToast:{position:"fixed",top:18,left:"50%",transform:"translateX(-50%)",zIndex:300,display:"flex",alignItems:"center",gap:8,maxWidth:"90vw",background:"#C2536B",color:"#fff",padding:"10px 16px",borderRadius:10,fontSize:13,fontWeight:600,boxShadow:"0 6px 24px rgba(0,0,0,0.25)"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},ganttWrap:{background:"var(--surface)",borderRadius:12,padding:"16px 14px",marginTop:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},ganttTop:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10,marginBottom:14},ganttTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",fontFamily:"'Fraunces',Georgia,serif"},labelToggle:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 10px",borderRadius:8,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},zoomToggle:{display:"inline-flex",border:"1px solid var(--border)",borderRadius:8,overflow:"hidden"},zoomBtn:{border:"none",background:"var(--surface)",color:"var(--text-2)",padding:"5px 12px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},zoomBtnOn:{background:"var(--accent-strong)",color:"#fff"},gMonthFluid:{borderLeft:"1px solid var(--border)",fontSize:10,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gGroupChip:{position:"sticky",left:0,zIndex:3,background:"var(--surface-2)",padding:"5px 10px",fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",whiteSpace:"nowrap",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center"},ganttEmpty:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},ganttScroll:{overflowX:"auto"},ganttRowDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},gBandRow:{display:"flex",alignItems:"stretch",borderBottom:"1px solid var(--border)"},gLabelHead:{width:Ki,flexShrink:0,position:"sticky",left:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",padding:"6px 10px",fontSize:12,fontWeight:700,color:"var(--text-2)"},gMonthCell:{flexShrink:0,borderLeft:"1px solid var(--border)",fontSize:10.5,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gDayCell:{width:Ht,flexShrink:0,textAlign:"center",fontSize:10,color:"var(--text-3)",padding:"4px 0",borderLeft:"1px solid var(--border)",fontWeight:600},gWeekend:{background:"var(--surface-2)"},gTodayCell:{background:"var(--hover)",color:"var(--accent)",fontWeight:800},gGroupRow:{display:"flex",alignItems:"stretch",background:"var(--surface-2)",borderBottom:"1px solid var(--border)",borderTop:"1px solid var(--border)"},gGroupLabel:{width:Ki,flexShrink:0,position:"sticky",left:0,background:"var(--surface-2)",zIndex:3,padding:"6px 12px",fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",gap:7},gGroupCount:{fontSize:10,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},gHzTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.04em",border:"1px solid",borderRadius:4,padding:"1px 4px",flexShrink:0},gRow:{display:"flex",alignItems:"stretch",minHeight:36,borderBottom:"1px solid var(--border)"},gLabel:{width:Ki,flexShrink:0,display:"flex",alignItems:"center",gap:7,position:"sticky",left:0,background:"var(--surface)",zIndex:2,borderRight:"1px solid var(--border)",paddingRight:8,overflow:"hidden"},gLabelText:{flex:1,minWidth:0,fontSize:12,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},gDurChip:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",borderRadius:10,padding:"1px 6px",flexShrink:0,marginRight:6},gTrack:{position:"relative",flexShrink:0,minHeight:36,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent ${Ht}px)`},gBar:{position:"absolute",top:9,height:18,borderRadius:5,display:"flex",alignItems:"center",padding:"0 7px",boxShadow:"0 1px 2px rgba(0,0,0,0.15)",overflow:"hidden",zIndex:1},gBarLabel:{fontSize:11,fontWeight:600,color:"#fff",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},gBarOutside:{position:"absolute",top:9,height:18,display:"flex",alignItems:"center",fontSize:11,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",pointerEvents:"none",zIndex:1},resizeHandle:{position:"absolute",right:0,top:0,bottom:0,width:12,cursor:"ew-resize",display:"grid",placeItems:"center",touchAction:"none",zIndex:2},resizeGrip:{width:2,height:11,background:"rgba(255,255,255,0.9)",borderRadius:1,boxShadow:"3px 0 0 rgba(255,255,255,0.6)"},gTodayLine:{position:"absolute",top:0,bottom:0,width:2,background:"#C2536B",zIndex:0,opacity:.6},gLegend:{display:"flex",gap:16,marginTop:12,fontSize:11,color:"var(--text-3)",flexWrap:"wrap"},gLegendItem:{display:"flex",alignItems:"center",gap:6,fontWeight:600},gLegendBar:{width:18,height:8,borderRadius:3,background:"var(--accent)",display:"inline-block"},gLegendToday:{width:2,height:12,background:"#C2536B",display:"inline-block"}},qn={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.12)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.12)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.12)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.12)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.12)"}},oi=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],O0=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],js=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Eg=()=>js(new Date),H0=(e=0)=>{const r=new Date,n=r.getDay(),o=n===0?-6:1-n,i=new Date(r);return i.setDate(r.getDate()+o+e*7),Array.from({length:7},(s,l)=>{const a=new Date(i);return a.setDate(i.getDate()+l),js(a)})},G0=(e=0)=>{const r=new Date,n=new Date(r.getFullYear(),r.getMonth()+e,1),o=n.getFullYear(),i=n.getMonth(),s=new Date(o,i+1,0).getDate(),l=n.getDay(),a=l===0?6:l-1,d=Array.from({length:s},(m,f)=>`${o}-${String(i+1).padStart(2,"0")}-${String(f+1).padStart(2,"0")}`),u=n.toLocaleDateString("en-US",{month:"long",year:"numeric"});return{dates:d,startOffset:a,label:u,year:o,month:i}},op=e=>new Date(e+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"}),U0=(e,r)=>{var i;const n=Number(e==null?void 0:e.min_interval_min)||0;if(n<=0||r!==Eg())return 0;const o=(i=e.log_count_times)==null?void 0:i[r];return o?Math.max(0,new Date(o).getTime()+n*6e4-Date.now()):0},Ch=e=>{const r=Math.ceil(e/1e3);return`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`},Mn=Eg(),V0=new Date().getFullYear();function Y0(){var ce,We;const[e,r]=g.useState([]),[n,o]=g.useState("ALL"),[i,s]=g.useState(!1),[l,a]=g.useState(!1),[d,u]=g.useState(!1),[m,f]=g.useState(null),[h,I]=g.useState(null),[B,k]=g.useState(null),[C,p]=g.useState({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week",days:[],min_interval_min:0}),[c,b]=g.useState(!1),[T,y]=g.useState([]),w=g.useCallback(()=>E.getHabits().then(r).catch(console.error),[]);g.useEffect(()=>{w()},[w]);const D=g.useCallback(X=>{X&&X.id!=null&&r(ne=>ne.map(L=>L.id===X.id?X:L))},[]);g.useEffect(()=>{E.getSetting("habit_order").then(X=>{Array.isArray(X==null?void 0:X.value)&&y(X.value)}).catch(()=>{})},[]);const S=g.useMemo(()=>T.length?[...e].sort((X,ne)=>{const L=T.indexOf(X.id),ie=T.indexOf(ne.id);return L===-1&&ie===-1?0:L===-1?1:ie===-1?-1:L-ie}):e,[e,T]),j=g.useMemo(()=>S.filter(X=>X.active!==!1),[S]);g.useEffect(()=>{n!=="ALL"&&e.some(X=>X.id===n&&X.active===!1)&&o("ALL")},[e,n]);const N=async X=>{y(X),await E.setSetting("habit_order",X),b(!1)},J=async(X,ne)=>{D(await E.updateHabit(X,{active:ne}))};g.useEffect(()=>{const X=()=>{const ne=window.innerWidth<720;s(ne),ne||a(!1)};return X(),window.addEventListener("resize",X),()=>window.removeEventListener("resize",X)},[]);const{deleteItem:se,toasts:W,handleUndo:de,handleDismiss:Re}=br(E.deleteHabit,E.restoreHabit,w),pe=X=>{o(X),i&&a(!1)},je=(X,ne)=>{(X.type==="minimum"||X.type==="maximum")&&X.period==="day"?U0(X,ne)>0?k(L=>L&&L.habitId===X.id&&L.date===ne?null:{habitId:X.id,date:ne}):I({habit:X,date:ne}):Q(X.id,ne)},Q=async(X,ne)=>{D(await E.toggleHabitLog(X,ne))},x=async(X,ne,L,ie)=>{try{D(await E.setHabitLogCount(X,ne,L,ie)),I(null)}catch(he){alert(he.message||"Could not save.")}},Y=async(X,ne)=>{D(await E.clearHabitLog(X,ne)),I(null)},H=X=>{var ne;return!B||B.habitId!==X.id?null:t.jsx(q0,{habit:X,date:B.date,onSave:async L=>{var ie;try{await E.setHabitLogCount(X.id,B.date,L,((ie=X.log_notes)==null?void 0:ie[B.date])??"").then(D)}catch(he){alert(he.message||"Could not save.")}},onOpen:()=>{k(null),I({habit:X,date:B.date})},onClose:()=>k(null)},B.date+":"+(((ne=X.log_count_times)==null?void 0:ne[B.date])||""))},ae=async()=>{if(!C.name.trim())return;const X=C.type==="minimum"||C.type==="maximum",ne=C.type==="weekly";if(ne&&C.days.length===0)return;const L={name:C.name.trim(),pillar:C.pillar,target_per_week:Number(C.target_per_week)||7,type:C.type,target_count:X?Number(C.target_count)||1:null,period:X?C.period:null,days:ne?C.days:null,min_interval_min:X&&C.period==="day"&&Number(C.min_interval_min)||0};await E.createHabit(L),p({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week",days:[],min_interval_min:0}),u(!1),w()},V=async(X,ne)=>{n===X&&o("ALL"),se(X,ne)},G=e.find(X=>X.id===n),P=X=>new Set(X.logs||[]),ge={...O.sidebar,...i?O.sidebarOverlay:{},...i&&!l?O.sidebarHidden:{}};return t.jsxs("div",{style:O.shell,children:[i&&l&&t.jsx("div",{style:O.backdrop,onClick:()=>a(!1)}),t.jsxs("aside",{style:ge,children:[t.jsxs("div",{style:O.sideTop,children:[t.jsx("div",{style:O.brand,children:"Anvil · Habits"}),i&&t.jsx("button",{onClick:()=>a(!1),style:O.closeBtn,children:t.jsx(De,{size:18})})]}),t.jsxs("div",{style:{...O.sideItem,...n==="ALL"?O.sideItemOn:{},cursor:"default",padding:"2px 6px 2px 10px"},children:[t.jsxs("button",{onClick:()=>pe("ALL"),style:{display:"flex",alignItems:"center",gap:9,flex:1,border:"none",background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:n==="ALL"?600:500,color:"var(--text-2)",padding:"7px 0"},children:[t.jsx(kg,{size:15}),t.jsx("span",{style:O.sideLabel,children:"All Habits"}),t.jsx("span",{style:O.sideCount,children:e.length})]}),t.jsx("button",{onClick:X=>{X.stopPropagation(),b(!0)},style:O.tinyBtn,title:"Reorder habits",children:t.jsx(yt,{size:12})})]}),t.jsx("div",{style:O.sideDivider}),j.map(X=>{var ie;const ne=n===X.id,L=((ie=qn[X.pillar])==null?void 0:ie.dot)||"#9A968C";return t.jsxs("button",{onClick:()=>pe(X.id),style:{...O.sideItem,...ne?O.sideItemOn:{}},children:[t.jsx("span",{style:{...O.sideDot,background:L}}),t.jsx("span",{style:O.sideLabel,children:X.name}),t.jsxs("span",{style:O.sideStreak,children:[t.jsx(Cn,{size:11})," ",X.streak]})]},X.id)}),d?t.jsx(K0,{habit:C,onChange:p,onSave:ae,onCancel:()=>u(!1)}):t.jsxs("button",{onClick:()=>u(!0),style:O.sideNewBtn,children:[t.jsx(ot,{size:13})," New habit"]})]}),t.jsxs("main",{style:O.main,children:[i&&t.jsxs("button",{onClick:()=>a(!0),style:O.hamburger,children:[t.jsx(wg,{size:18}),t.jsx("span",{style:O.hamburgerLabel,children:n==="ALL"?"All Habits":G==null?void 0:G.name})]}),n==="ALL"?t.jsx(Z0,{habits:j,dayAction:je,logSet:P,onDelete:V,onEdit:X=>f(X),isMobile:i,onOpenHabit:pe,renderInline:H}):t.jsx(J0,{habit:G,dayAction:je,logSet:P,onDelete:()=>V(G.id,G.name),onEdit:()=>f(G),onToggleActive:J,renderInline:H,setNote:(X,ne)=>E.setHabitLogNote(G.id,X,ne).then(D)}),n==="ALL"&&t.jsx(rv,{year:V0})]}),c&&t.jsx(tv,{habits:S,onSave:N,onToggleActive:J,onClose:()=>b(!1)}),m&&t.jsx(Q0,{habit:m,onSave:async X=>{await E.updateHabit(m.id,X),f(null),w()},onClose:()=>f(null)}),h&&t.jsx(X0,{habit:h.habit,date:h.date,initialCount:((ce=h.habit.log_counts)==null?void 0:ce[h.date])??0,initialNote:((We=h.habit.log_notes)==null?void 0:We[h.date])??"",onSave:(X,ne)=>x(h.habit.id,h.date,X,ne),onClear:()=>Y(h.habit.id,h.date),onClose:()=>I(null)}),t.jsx(mr,{toasts:W,onUndo:de,onDismiss:Re})]})}function zh({days:e,onToggle:r}){return t.jsx("div",{style:O.dayPick,children:oi.map((n,o)=>t.jsx("button",{type:"button",onClick:()=>r(o),style:{...O.dayChip,...e.includes(o)?O.dayChipOn:{}},children:n},n))})}function K0({habit:e,onChange:r,onSave:n,onCancel:o}){const i=e.type==="minimum"||e.type==="maximum",s=e.type==="weekly",l=a=>r(d=>({...d,days:d.days.includes(a)?d.days.filter(u=>u!==a):[...d.days,a].sort((u,m)=>u-m)}));return t.jsxs("div",{style:O.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"Habit name",value:e.name,onChange:a=>r(d=>({...d,name:a.target.value})),onKeyDown:a=>a.key==="Enter"&&n(),style:O.sideInput}),t.jsx("select",{value:e.pillar,onChange:a=>r(d=>({...d,pillar:a.target.value})),style:O.sideInput,children:Object.keys(qn).map(a=>t.jsx("option",{children:a},a))}),t.jsxs("select",{value:e.type,onChange:a=>r(d=>({...d,type:a.target.value})),style:O.sideInput,children:[t.jsx("option",{value:"regular",children:"Regular (yes/no)"}),t.jsx("option",{value:"weekly",children:"Weekly (specific days)"}),t.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),t.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),s&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:O.pickHint,children:"Do this on…"}),t.jsx(zh,{days:e.days,onToggle:l})]}),i&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{display:"flex",gap:6},children:[t.jsx("input",{type:"number",min:1,placeholder:"N",value:e.target_count||"",onChange:a=>r(d=>({...d,target_count:a.target.value})),style:{...O.sideInput,width:60}}),t.jsx("select",{value:e.period,onChange:a=>r(d=>({...d,period:a.target.value})),style:O.sideInput,children:["day","week","month","year"].map(a=>t.jsx("option",{children:a},a))})]}),e.period==="day"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:O.pickHint,children:"Min gap between entries (minutes)"}),t.jsx("input",{type:"number",min:0,placeholder:"0",value:e.min_interval_min??0,onChange:a=>r(d=>({...d,min_interval_min:a.target.value})),style:O.sideInput})]})]}),t.jsxs("div",{style:{display:"flex",gap:6},children:[t.jsx("button",{onClick:n,style:O.sideAddBtn,children:t.jsx(He,{size:13})}),t.jsx("button",{onClick:o,style:O.sideCancelBtn,children:t.jsx(De,{size:13})})]})]})}function Q0({habit:e,onSave:r,onClose:n}){const[o,i]=g.useState(e.name),[s,l]=g.useState(e.type||"regular"),[a,d]=g.useState(e.target_count||""),[u,m]=g.useState(e.period||"week"),[f,h]=g.useState(e.reminder_time||""),[I,B]=g.useState(e.days||[]),[k,C]=g.useState(e.min_interval_min??0),p=s==="minimum"||s==="maximum",c=s==="weekly",b=y=>B(w=>w.includes(y)?w.filter(D=>D!==y):[...w,y].sort((D,S)=>D-S)),T=()=>{c&&I.length===0||r({name:o.trim(),type:s,target_count:p?Number(a):null,period:p?u:null,days:c?I:[],reminder_time:f||null,min_interval_min:p&&u==="day"&&Number(k)||0})};return t.jsx("div",{style:O.modalOverlay,onClick:n,children:t.jsxs("div",{style:O.modal,onClick:y=>y.stopPropagation(),children:[t.jsxs("div",{style:O.modalHead,children:["Edit Habit",t.jsx("button",{onClick:n,style:O.closeBtn,children:t.jsx(De,{size:16})})]}),t.jsx("label",{style:O.modalLabel,children:"Name"}),t.jsx("input",{value:o,onChange:y=>i(y.target.value),style:O.sideInput}),t.jsx("label",{style:O.modalLabel,children:"Type"}),t.jsxs("select",{value:s,onChange:y=>l(y.target.value),style:O.sideInput,children:[t.jsx("option",{value:"regular",children:"Regular (yes/no)"}),t.jsx("option",{value:"weekly",children:"Weekly (specific days)"}),t.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),t.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),c&&t.jsxs(t.Fragment,{children:[t.jsx("label",{style:O.modalLabel,children:"Days"}),t.jsx(zh,{days:I,onToggle:b})]}),p&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[t.jsx("input",{type:"number",min:1,value:a,onChange:y=>d(y.target.value),style:{...O.sideInput,width:70}}),t.jsx("select",{value:u,onChange:y=>m(y.target.value),style:O.sideInput,children:["day","week","month","year"].map(y=>t.jsx("option",{children:y},y))})]}),u==="day"&&t.jsxs(t.Fragment,{children:[t.jsx("label",{style:O.modalLabel,children:"Min gap between entries (minutes)"}),t.jsx("input",{type:"number",min:0,value:k,onChange:y=>C(y.target.value),style:O.sideInput})]})]}),t.jsx("label",{style:O.modalLabel,children:"Reminder time"}),t.jsx("input",{type:"time",value:f,onChange:y=>h(y.target.value),style:O.sideInput}),t.jsx("button",{onClick:T,style:{...O.sideAddBtn,width:"100%",marginTop:10,height:36},children:"Save"})]})})}function q0({habit:e,date:r,onSave:n,onOpen:o,onClose:i}){var T,y,w;const[s,l]=g.useState(Date.now()),a=((T=e.log_counts)==null?void 0:T[r])??0,[d,u]=g.useState(a),m=Number(e.min_interval_min)||0,f=e.target_count,h=(y=e.log_count_times)==null?void 0:y[r],I=h?new Date(h).getTime()+m*6e4:0,B=Math.max(0,I-s);g.useEffect(()=>{const D=window.setInterval(()=>l(Date.now()),1e3);return()=>window.clearInterval(D)},[]);const k=d>=a+1||B>0,C=d<=0,p=d!==a,c=((w=qn[e.pillar])==null?void 0:w.dot)||"#9A968C",b=e.type==="minimum"?d>=f:d>0&&d<=f;return t.jsxs("div",{style:O.inlineCounter,children:[t.jsxs("span",{style:{...O.inlineCount,color:b?"#4C9A6B":c},children:[d,t.jsxs("span",{style:O.inlineTarget,children:["/",f]})]}),t.jsx("button",{onClick:()=>!C&&u(D=>Math.max(0,D-1)),disabled:C,style:{...O.inlinePlus,...C?{opacity:.45,cursor:"not-allowed"}:{}},children:"−"}),t.jsx("button",{onClick:()=>!k&&u(D=>D+1),disabled:k,style:{...O.inlinePlus,...k?{opacity:.45,cursor:"not-allowed"}:{background:c,borderColor:c,color:"#fff"}},title:B>0?"Wait for the interval":d>=a+1?"Press Set to confirm":"Stage an entry",children:"+"}),t.jsx("button",{onClick:()=>n(d),disabled:!p,style:{...O.inlineSet,...p?{background:c,borderColor:c,color:"#fff"}:{opacity:.5,cursor:"not-allowed"}},children:"Set"}),B>0?t.jsxs("span",{style:O.inlineWait,children:["Wait ",Ch(B)]}):t.jsx("span",{style:O.inlineReady,children:p?"Press Set to confirm":"Tap + to add"}),t.jsx("button",{onClick:o,style:O.inlineMore,title:"Open details",children:"⋯"}),t.jsx("button",{onClick:i,style:O.inlineMore,title:"Hide",children:t.jsx(De,{size:13})})]})}function X0({habit:e,date:r,initialCount:n,initialNote:o,onSave:i,onClear:s,onClose:l}){var Re;const a=n??0,[d,u]=g.useState(a),[m,f]=g.useState(o??""),[h,I]=g.useState(Date.now()),B=e.target_count,k=e.type==="minimum"?d>=B:d>0&&d<=B,C=e.type==="maximum"&&d>B,p=k?"#4C9A6B":C?"#C2536B":"#C2773B",c=k?"✓ Goal met":C?"Over the limit":"Not met yet",b=Number(e.min_interval_min)||0,T=r===Eg(),y=b>0&&T,w=(Re=e.log_count_times)==null?void 0:Re[r],D=y&&w?new Date(w).getTime()+b*6e4:0,S=Math.max(0,D-h);g.useEffect(()=>{if(!y||S<=0)return;const pe=window.setInterval(()=>I(Date.now()),1e3);return()=>window.clearInterval(pe)},[y,S]);const j=d-a,N=y&&(d>=a+1||S>0),J=d<=0,se=()=>{N||u(pe=>pe+1)},W=()=>{J||u(pe=>Math.max(0,pe-1))},de=d!==a||m!==(o??"");return t.jsx("div",{style:O.modalOverlay,onClick:l,children:t.jsxs("div",{style:O.modal,onClick:pe=>pe.stopPropagation(),children:[t.jsxs("div",{style:O.modalHead,children:[e.name,t.jsx("button",{onClick:l,style:O.closeBtn,children:t.jsx(De,{size:16})})]}),t.jsxs("div",{style:{fontSize:12,color:"var(--text-3)",marginBottom:2},children:[r," · ",e.type==="minimum"?`at least ${B}`:`no more than ${B}`," / ",e.period,b>0&&t.jsxs(t.Fragment,{children:[" · ",b,"m between entries"]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:20,margin:"14px 0 6px"},children:[t.jsx("button",{onClick:W,disabled:J,style:{...O.counterBtn,...J?{opacity:.45,cursor:"not-allowed"}:{}},children:"−"}),t.jsx("span",{style:{fontSize:38,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:52,textAlign:"center",color:p},children:d}),t.jsx("button",{onClick:se,disabled:N,style:{...O.counterBtn,...N?{opacity:.45,cursor:"not-allowed"}:{}},title:y&&S>0?"Wait for the interval before the next entry":y&&d>=a+1?"Press Set to confirm this entry":void 0,children:"+"})]}),y&&S>0&&t.jsxs("div",{style:{textAlign:"center",fontSize:12,fontWeight:700,color:"#C2773B",marginBottom:8},children:["Wait ",Ch(S)," before the next entry"]}),y&&S<=0&&t.jsx("div",{style:{textAlign:"center",fontSize:11.5,color:"var(--text-3)",marginBottom:8},children:j>0?"Press Set to confirm this entry":`Tap + to add an entry (each at least ${b}m apart)`}),t.jsx("div",{style:{textAlign:"center",fontSize:12.5,fontWeight:700,color:p,marginBottom:12},children:c}),t.jsx("textarea",{value:m,onChange:pe=>f(pe.target.value),placeholder:"Add a comment (optional)…",style:{...O.sideInput,minHeight:56,resize:"vertical"}}),t.jsxs("div",{style:{display:"flex",gap:8,marginTop:10},children:[t.jsxs("button",{onClick:s,style:{...O.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[t.jsx(De,{size:14})," Delete"]}),t.jsxs("button",{onClick:()=>i(d,m),disabled:!de,style:{...O.sideAddBtn,flex:1,justifyContent:"center",height:38,...de?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:14})," Set"]})]})]})})}function Za({pct:e,label:r,sub:n,color:o}){const s=2*Math.PI*26,l=s*(1-Math.max(0,Math.min(100,e))/100);return t.jsxs("div",{style:O.ringStat,children:[t.jsxs("div",{style:O.ringBox,children:[t.jsxs("svg",{width:"70",height:"70",viewBox:"0 0 70 70",children:[t.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:"var(--border)",strokeWidth:"7"}),t.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:o,strokeWidth:"7",strokeLinecap:"round",strokeDasharray:s,strokeDashoffset:l,transform:"rotate(-90 35 35)",style:{transition:"stroke-dashoffset 0.5s ease"}})]}),t.jsxs("div",{style:{...O.ringPct,color:o},children:[e,"%"]})]}),t.jsxs("div",{children:[t.jsx("div",{style:O.ringLabel,children:r}),t.jsx("div",{style:O.ringSub,children:n})]})]})}function Z0({habits:e,dayAction:r,logSet:n,onDelete:o,onEdit:i,renderInline:s,isMobile:l,onOpenHabit:a}){const[d,u]=g.useState(0),[m,f]=g.useState(null),[h,I]=g.useState(!1);g.useEffect(()=>{E.getSetting("habit_show_names").then(x=>{typeof(x==null?void 0:x.value)=="boolean"&&I(x.value)}).catch(()=>{})},[]);const B=()=>I(x=>{const Y=!x;return E.setSetting("habit_show_names",Y).catch(()=>{}),Y&&f(null),Y}),k=H0(d),C=`${op(k[0])} – ${op(k[6])}${d===0?" · This week":""}`,p=x=>{const Y=new Date(x+"T00:00:00"),H=Y.getDay(),ae=new Date(Y);return ae.setDate(Y.getDate()+(H===0?-6:1-H)),Array.from({length:7},(V,G)=>{const P=new Date(ae);return P.setDate(ae.getDate()+G),js(P)})},c=x=>x.logs||[],b=(x,Y)=>x.type==="minimum"&&x.period==="week"&&Y.filter(H=>n(x).has(H)).length>=(x.target_count||0),T=(x,Y)=>x.type==="minimum"&&x.period==="month"&&c(x).filter(H=>H.slice(0,7)===Y).length>=(x.target_count||0),y=(x,Y)=>x.type==="minimum"&&x.period==="year"&&c(x).filter(H=>H.slice(0,4)===Y).length>=(x.target_count||0),w=(x,Y)=>{var H;if((x.type==="minimum"||x.type==="maximum")&&x.period==="day"){const ae=(H=x.log_counts)==null?void 0:H[Y];return ae==null?!1:x.type==="minimum"?ae>=(x.target_count||0):ae>0&&ae<=(x.target_count||0)}return n(x).has(Y)},D=(x,Y)=>x.type!=="minimum"?!1:x.period==="week"?b(x,p(Y)):x.period==="month"?T(x,Y.slice(0,7)):x.period==="year"?y(x,Y.slice(0,4)):!1,S=(x,Y)=>w(x,Y)||D(x,Y),j=e.filter(x=>S(x,Mn)).length,N=e.length?Math.round(j/e.length*100):0,J=x=>{if(x.type==="minimum"&&x.period==="month"&&(T(x,k[0].slice(0,7))||T(x,k[6].slice(0,7)))||x.type==="minimum"&&x.period==="year"&&(y(x,k[0].slice(0,4))||y(x,k[6].slice(0,4)))||x.type==="minimum"&&x.period==="week"&&b(x,k))return 1;if((x.type==="minimum"||x.type==="maximum")&&x.period==="day")return Math.min(1,k.filter(V=>w(x,V)).length/7);const Y=n(x),H=k.filter(V=>Y.has(V)).length,ae=x.type==="minimum"&&x.period==="week"?x.target_count||1:x.target_per_week||7;return ae>0?Math.min(1,H/ae):0},se=e.length?Math.round(e.reduce((x,Y)=>x+J(Y),0)/e.length*100):0,W=new Date,de=`${W.getFullYear()}-${String(W.getMonth()+1).padStart(2,"0")}`,Re=new Date(W.getFullYear(),W.getMonth()+1,0).getDate(),pe=Re/7,je=x=>{if(x.type==="minimum"&&x.period==="month"&&T(x,de)||x.type==="minimum"&&x.period==="year"&&y(x,de.slice(0,4)))return 1;if((x.type==="minimum"||x.type==="maximum")&&x.period==="day"){let ae=0;for(let V=1;V<=Re;V++)w(x,`${de}-${String(V).padStart(2,"0")}`)&&ae++;return Math.min(1,ae/Re)}const Y=c(x).filter(ae=>ae.slice(0,7)===de).length;let H;return x.type==="minimum"&&x.period==="week"?H=(x.target_count||1)*pe:x.type==="minimum"&&x.period==="month"?H=x.target_count||1:x.type==="minimum"&&x.period==="year"?H=(x.target_count||1)/12:H=(x.target_per_week||7)*pe,H>0?Math.min(1,Y/H):0},Q=e.length?Math.round(e.reduce((x,Y)=>x+je(Y),0)/e.length*100):0;return t.jsxs("div",{children:[t.jsxs("div",{style:O.mainHead,children:[t.jsx("div",{style:O.eyebrow,children:"Weekly view"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,flexWrap:"wrap"},children:[t.jsx("h1",{style:O.h1,children:"All Habits"}),l&&e.length>0&&t.jsxs("button",{onClick:B,style:O.nameToggle,title:h?"Hide habit names — tap a circle to reveal one":"Show all habit names",children:[t.jsx("span",{style:{...O.nameToggleTrack,background:h?"#4C9A6B":"var(--border)"},children:t.jsx("span",{style:{...O.nameToggleKnob,left:h?19:3}})}),h?t.jsx(ms,{size:13}):t.jsx(Kl,{size:13}),t.jsx("span",{children:"Names"})]})]})]}),t.jsxs("div",{style:O.navBar,children:[t.jsx("button",{onClick:()=>u(x=>x-1),style:O.navBtn,children:t.jsx(Tn,{size:16})}),t.jsx("span",{style:O.navLabel,children:C}),t.jsx("button",{onClick:()=>u(x=>Math.min(0,x+1)),disabled:d>=0,style:{...O.navBtn,...d>=0?O.navBtnDisabled:{}},children:t.jsx(sn,{size:16})})]}),t.jsxs("div",{style:{...O.weekCard,...l?O.weekCardMobile:{}},children:[t.jsxs("div",{style:{...O.weekHeadRow,...l?O.weekRowMobile:{}},children:[t.jsx("div",{style:{...O.weekNameCol,...l?O.weekNameColMobile:{}}}),oi.map((x,Y)=>t.jsxs("div",{style:O.weekDayHead,children:[t.jsx("span",{style:O.weekDayName,children:x}),t.jsx("span",{style:{...O.weekDayNum,...k[Y]===Mn?O.weekDayToday:{}},children:new Date(k[Y]+"T00:00").getDate()})]},x)),t.jsx("div",{style:{...O.weekStreakCol,...l?O.weekStreakColMobile:{}},children:l?t.jsx(Cn,{size:12}):"Streak"})]}),e.map(x=>{var le,ye;const Y=((le=qn[x.pillar])==null?void 0:le.dot)||"#9A968C",H=((ye=qn[x.pillar])==null?void 0:ye.soft)||"rgba(0,0,0,0.05)",ae=n(x),V=x.type==="weekly",G=new Set(x.days||[]),P=[0,1,2,3,4,5,6].filter(ke=>G.has(ke)),ge=V&&P.length>0&&P.every(ke=>ae.has(k[ke])),ce=V?Array(7).fill(ge):null,We=x.type==="minimum"&&["week","month","year"].includes(x.period),X=x.target_count||0,ne=x.logs||[],L=ke=>ne.filter(Ne=>Ne.slice(0,7)===ke).length,ie=ke=>ne.filter(Ne=>Ne.slice(0,4)===ke).length,he=k.filter(ke=>ae.has(ke)).length,A=ke=>We?x.period==="week"?he>=X:x.period==="month"?L(ke.slice(0,7))>=X:x.period==="year"?ie(ke.slice(0,4))>=X:!1:!1,v=We&&k.some(A),re=x.period==="week"?he:x.period==="month"?L(k[0].slice(0,7)):x.period==="year"?ie(k[0].slice(0,4)):0,F=m===x.id;return t.jsxs(g.Fragment,{children:[l&&(F||h)&&t.jsxs("button",{onClick:()=>a&&a(x.id),style:{...O.mobileNameBanner,color:Y},children:[t.jsx("span",{style:{...O.sideDot,background:Y}}),t.jsx("span",{style:O.mobileNameText,children:x.name}),x.type==="weekly"?t.jsx("span",{style:O.typeBadge,children:(x.days||[]).map(ke=>oi[ke]).join("·")||"—"}):x.type!=="regular"?t.jsx("span",{style:O.typeBadge,children:x.type==="minimum"?`≥${x.target_count}/${x.period}`:`≤${x.target_count}/${x.period}`}):null]}),t.jsxs("div",{style:{...O.weekRow,...l?O.weekRowMobile:{}},children:[l?t.jsx("div",{style:{...O.weekNameCol,...O.weekNameColMobile},children:t.jsx("button",{onClick:()=>f(F?null:x.id),style:{...O.habitAvatar,background:Y},title:x.name,children:(x.name||"?").trim().charAt(0).toUpperCase()})}):t.jsxs("div",{style:{...O.weekNameCol,flexDirection:"column",alignItems:"flex-start",gap:2},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[t.jsx("span",{style:{...O.sideDot,background:Y}}),t.jsx("span",{style:O.weekHabitName,children:x.name})]}),x.type==="weekly"?t.jsx("span",{style:O.typeBadge,children:(x.days||[]).map(ke=>oi[ke]).join("·")||"—"}):x.type!=="regular"?t.jsx("span",{style:O.typeBadge,children:x.type==="minimum"?`≥${x.target_count}/${x.period}`:`≤${x.target_count}/${x.period}`}):null]}),k.map((ke,Ne)=>{var Et,jt;if(V&&!G.has(Ne))return t.jsxs("div",{style:{...O.weekCell,position:"relative",zIndex:0},children:[ce[Ne]&&t.jsx("span",{style:{...O.chainLine,background:Y,left:ce[Ne-1]?0:"50%",right:ce[Ne+1]?0:"50%"}}),t.jsx("span",{style:{...O.offDay,position:"relative",zIndex:1},title:"Not scheduled",children:"·"})]},ke);const lt=ae.has(ke),Je=ke>Mn,mt=(x.type==="minimum"||x.type==="maximum")&&x.period==="day",Qe=(Et=x.log_counts)==null?void 0:Et[ke],st=Qe!=null,oe=!!((jt=x.log_notes)!=null&&jt[ke]),Me=A(ke),qe=Ne>0&&A(k[Ne-1]),tt=Ne<k.length-1&&A(k[Ne+1]),ut=lt||Me;return t.jsxs("div",{style:{...O.weekCell,position:"relative",zIndex:0},children:[Me&&t.jsx("span",{style:{...O.chainLine,background:Y,left:qe?0:"50%",right:tt?0:"50%"}}),V&&ce[Ne]&&t.jsx("span",{style:{...O.chainLine,background:Y,left:ce[Ne-1]?0:"50%",right:ce[Ne+1]?0:"50%"}}),t.jsx("button",{disabled:Je,onClick:()=>r(x,ke),style:{...O.tick,...ut?{background:Y,borderColor:Y,color:"#fff"}:{},...mt&&st&&!lt?{borderColor:Y,color:Y}:{},...Je&&!ut?O.tickFuture:{}},children:mt?st?t.jsx("span",{style:{fontSize:12,fontWeight:700},children:Qe}):null:lt&&t.jsx(He,{size:14,color:"#fff",strokeWidth:3})}),oe&&t.jsx("span",{style:O.cellNoteBubble})]},ke)}),t.jsx("div",{style:{...O.weekStreakCol,...l?O.weekStreakColMobile:{}},children:ge?t.jsxs("span",{style:{...O.streakPill,...l?O.streakPillMobile:{},background:H,color:Y},children:[t.jsx(xs,{size:12})," ",l?P.length:`${P.length}/${P.length}`]}):v?t.jsxs("span",{style:{...O.streakPill,...l?O.streakPillMobile:{},background:H,color:Y},children:[t.jsx(xs,{size:12})," ",l?re:`${re}/${X}`]}):t.jsxs("span",{style:{...O.streakPill,...l?O.streakPillMobile:{},background:H,color:Y},children:[t.jsx(Cn,{size:12})," ",x.streak]})})]}),s&&s(x)]},x.id)}),e.length===0&&t.jsx("div",{style:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},children:"No habits yet — add one from the sidebar."})]}),e.length>0&&t.jsxs("div",{style:{...O.progressCard,marginTop:18,marginBottom:0},children:[t.jsx(Za,{pct:N,label:"Today",sub:`${j}/${e.length} done`,color:"#4C9A6B"}),t.jsx("div",{style:O.progressDivider}),t.jsx(Za,{pct:se,label:"This week",sub:"of weekly targets",color:"#3A7CA5"}),t.jsx("div",{style:O.progressDivider}),t.jsx(Za,{pct:Q,label:"This month",sub:"of monthly targets",color:"#8268B0"})]})]})}function J0({habit:e,dayAction:r,logSet:n,onDelete:o,onEdit:i,setNote:s,onToggleActive:l,renderInline:a}){var We,X;const[d,u]=g.useState(null),[m,f]=g.useState(""),[h,I]=g.useState(null),[B,k]=g.useState(0),C=g.useRef(null);if(!e)return null;const p=((We=qn[e.pillar])==null?void 0:We.dot)||"#9A968C",c=((X=qn[e.pillar])==null?void 0:X.soft)||"rgba(0,0,0,0.05)",b=n(e),T=e.type==="weekly",y=new Set(e.days||[]),w=ne=>(new Date(ne+"T00:00").getDay()+6)%7,D=ne=>!T||y.has(w(ne)),S=ne=>{const L=new Date(ne+"T00:00"),ie=L.getDay(),he=new Date(L);he.setDate(L.getDate()+(ie===0?-6:1-ie));const A=Array.from({length:7},(F,le)=>{const ye=new Date(he);return ye.setDate(he.getDate()+le),js(ye)}),v=[0,1,2,3,4,5,6].filter(F=>y.has(F)),re=v.length>0&&v.every(F=>b.has(A[F]));return Array(7).fill(re)},{dates:j,startOffset:N,label:J,year:se}=G0(B),W=j.filter(ne=>ne<=Mn&&D(ne)&&b.has(ne)).length,de=j.filter(ne=>ne<=Mn&&D(ne)).length,Re=de>0?Math.round(W/de*100):0,pe=e.type==="minimum"&&(e.period==="month"||e.period==="year"),je=e.period==="year"?(e.logs||[]).filter(ne=>ne.startsWith(`${se}-`)).length:j.filter(ne=>b.has(ne)).length,Q=pe&&je>=(e.target_count||0),x=e.type==="minimum"&&e.period==="week",Y=e.target_count||0,H=ne=>{const L=new Date(ne+"T00:00"),ie=L.getDay(),he=new Date(L);he.setDate(L.getDate()+(ie===0?-6:1-ie));let A=0;for(let v=0;v<7;v++){const re=new Date(he);re.setDate(he.getDate()+v),b.has(js(re))&&A++}return A},ae=ne=>pe?Q:x?H(ne)>=Y:!1,V=x?H(Mn):0,G=x&&V>=Y,P=ne=>{C.current=setTimeout(()=>u(ne),500)},ge=()=>clearTimeout(C.current),ce=ne=>{var L;I(ne),f(((L=e.log_notes)==null?void 0:L[ne])||""),u(null)};return t.jsxs("div",{children:[t.jsxs("div",{style:O.mainHead,children:[t.jsxs("div",{children:[t.jsxs("div",{style:O.eyebrow,children:[t.jsx("span",{style:{...O.sideDot,background:p,marginRight:6}}),e.pillar," · Monthly view"]}),t.jsx("h1",{style:O.h1,children:e.name})]}),t.jsxs("div",{style:{display:"flex",gap:8,marginTop:8,flexWrap:"wrap"},children:[t.jsxs("button",{onClick:i,style:O.actionBtn,children:[t.jsx(yt,{size:14})," Edit"]}),t.jsx("button",{onClick:()=>l(e.id,e.active===!1),style:{...O.actionBtn,...e.active===!1?{color:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:e.active===!1?t.jsxs(t.Fragment,{children:[t.jsx(He,{size:14})," Enable"]}):t.jsxs(t.Fragment,{children:[t.jsx(a0,{size:14})," Disable"]})}),t.jsxs("button",{onClick:o,style:{...O.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[t.jsx(De,{size:14})," Delete"]}),e.reminder_time&&t.jsxs("button",{style:O.actionBtn,children:[t.jsx(vg,{size:14})," ",e.reminder_time]})]})]}),t.jsxs("div",{style:O.statStrip,children:[t.jsx(oo,{label:"Current streak",value:`${e.streak} days`,c:p,soft:c,flame:!0}),t.jsx(oo,{label:"Best streak",value:`${e.max_streak??e.streak} days`,c:p,soft:c,flame:!0}),t.jsx(oo,{label:"Done this month",value:`${W}/${de}`,c:p,soft:c}),t.jsx(oo,{label:"Completion",value:`${Re}%`,c:p,soft:c}),e.type==="regular"?t.jsx(oo,{label:"Weekly target",value:`${e.target_per_week}×`,c:p,soft:c}):e.type==="weekly"?t.jsx(oo,{label:"Days",value:(e.days||[]).map(ne=>oi[ne]).join(", ")||"—",c:p,soft:c}):t.jsx(oo,{label:e.type==="minimum"?"Min target":"Max allowed",value:`${e.target_count}/${e.period}`,c:p,soft:c})]}),a&&a(e),t.jsxs("div",{style:O.navBar,children:[t.jsx("button",{onClick:()=>k(ne=>ne-1),style:O.navBtn,children:t.jsx(Tn,{size:16})}),t.jsxs("span",{style:O.navLabel,children:[J,B===0?" · This month":""]}),t.jsx("button",{onClick:()=>k(ne=>Math.min(0,ne+1)),disabled:B>=0,style:{...O.navBtn,...B>=0?O.navBtnDisabled:{}},children:t.jsx(sn,{size:16})})]}),pe&&t.jsxs("div",{style:{...O.chainBanner,background:Q?c:"var(--bg)",color:Q?p:"var(--text-3)"},children:[t.jsx(xs,{size:15}),Q?`${e.period==="year"?"Yearly":"Monthly"} chain complete — ${je}/${e.target_count} connected`:`${je}/${e.target_count} this ${e.period} · ${(e.target_count||0)-je} more to connect the chain`]}),x&&B===0&&t.jsxs("div",{style:{...O.chainBanner,background:G?c:"var(--bg)",color:G?p:"var(--text-3)"},children:[t.jsx(xs,{size:15}),G?`This week's chain complete — ${V}/${Y} connected`:`${V}/${Y} this week · ${Math.max(0,Y-V)} more to connect the chain`]}),t.jsxs("div",{style:O.monthCard,children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[t.jsx("div",{style:O.monthTitle,children:J}),t.jsx("span",{style:{fontSize:11,color:"var(--text-3)"},children:"Long-press a day for options"})]}),t.jsx("div",{style:O.monthDow,children:oi.map(ne=>t.jsx("div",{style:O.monthDowCell,children:ne},ne))}),t.jsxs("div",{style:O.monthGrid,children:[Array.from({length:N}).map((ne,L)=>t.jsx("div",{},`pad${L}`)),j.map((ne,L)=>{var Je,mt;const ie=L+1;if(T&&!D(ne)){const Qe=w(ne),st=S(ne),oe=(N+L)%7;return t.jsxs("div",{style:{position:"relative"},children:[st[Qe]&&t.jsx("span",{style:{...O.chainLine,background:p,...oe===0?{left:"50%"}:{left:st[Qe-1]?-6:"50%"},...oe===6?{right:"50%"}:{right:st[Qe+1]?-6:"50%"}}}),t.jsx("div",{style:{...O.monthDay,...O.monthDayOff,width:"100%",position:"relative",zIndex:1},children:ie})]},ne)}const he=b.has(ne),A=ne>Mn,v=ne===Mn,re=!!((Je=e.log_notes)!=null&&Je[ne]),F=(e.type==="minimum"||e.type==="maximum")&&e.period==="day",le=(mt=e.log_counts)==null?void 0:mt[ne],ye=le!=null,ke=ae(ne),Ne=ke&&!he,lt=(N+L)%7;return t.jsxs("div",{style:{position:"relative"},children:[ke&&t.jsx("span",{style:{...O.chainLine,background:p,...lt===0?{left:"50%"}:{left:-6},...lt===6?{right:"50%"}:{right:-6}}}),T&&(()=>{const Qe=w(ne),st=S(ne);return st[Qe]?t.jsx("span",{style:{...O.chainLine,background:p,...lt===0?{left:"50%"}:{left:st[Qe-1]?-6:"50%"},...lt===6?{right:"50%"}:{right:st[Qe+1]?-6:"50%"}}}):null})(),t.jsx("button",{disabled:A,onClick:()=>r(e,ne),onMouseDown:()=>!F&&P(ne),onMouseUp:ge,onTouchStart:()=>!F&&P(ne),onTouchEnd:ge,style:{...O.monthDay,position:"relative",zIndex:1,...he?{background:p,borderColor:p,color:"#fff"}:{},...Ne?{background:c,borderColor:p,color:p}:{},...F&&ye&&!he?{borderColor:p,color:p}:{},...A&&!he?O.monthDayFuture:{},...v&&!he?{borderColor:p,borderWidth:2}:{},width:"100%"},children:ie}),F&&ye&&t.jsx("span",{style:{...O.countBadge,background:he?"#4C9A6B":p},children:le}),re&&t.jsx("span",{style:O.noteIndicator}),d===ne&&t.jsx(ev,{onEdit:i,onDelete:o,onAddNote:()=>ce(ne),onRemind:i,onClose:()=>u(null)})]},ne)})]})]}),h&&t.jsxs("div",{style:O.noteBox,children:[t.jsxs("div",{style:{fontWeight:600,fontSize:13,marginBottom:6},children:["Note for ",h]}),t.jsx("textarea",{value:m,onChange:ne=>f(ne.target.value),placeholder:"Add a note for this day…",style:{...O.sideInput,minHeight:60,resize:"vertical"}}),t.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[t.jsxs("button",{onClick:()=>{s(h,m),I(null)},style:O.sideAddBtn,children:[t.jsx(He,{size:13})," Save"]}),t.jsx("button",{onClick:()=>I(null),style:O.sideCancelBtn,children:t.jsx(De,{size:13})})]})]})]})}function ev({onEdit:e,onDelete:r,onAddNote:n,onRemind:o,onClose:i}){return t.jsxs("div",{style:O.longPressMenu,children:[t.jsxs("button",{style:O.menuItem,onClick:()=>{e(),i()},children:[t.jsx(yt,{size:13})," Edit"]}),t.jsxs("button",{style:O.menuItem,onClick:()=>{n(),i()},children:[t.jsx(jg,{size:13})," Add note"]}),t.jsxs("button",{style:O.menuItem,onClick:()=>{o(),i()},children:[t.jsx(vg,{size:13})," Remind"]}),t.jsxs("button",{style:{...O.menuItem,color:"#C2536B"},onClick:()=>{r(),i()},children:[t.jsx(De,{size:13})," Delete"]})]})}function tv({habits:e,onSave:r,onToggleActive:n,onClose:o}){const[i,s]=g.useState(()=>e.map(u=>u.id)),l=g.useMemo(()=>{const u={};return e.forEach(m=>u[m.id]=m),u},[e]),a=i.map(u=>l[u]).filter(Boolean),d=(u,m)=>{const f=u+m;if(f<0||f>=i.length)return;const h=[...i];[h[u],h[f]]=[h[f],h[u]],s(h)};return t.jsx("div",{style:O.modalOverlay,onClick:o,children:t.jsxs("div",{style:{...O.modal,maxHeight:"80vh",overflow:"hidden"},onClick:u=>u.stopPropagation(),children:[t.jsxs("div",{style:{...O.modalHead,flexShrink:0},children:["Edit Habits",t.jsx("button",{onClick:o,style:O.closeBtn,children:t.jsx(De,{size:16})})]}),t.jsx("p",{style:{fontSize:12,color:"var(--text-3)",margin:"0 0 10px",flexShrink:0},children:"Reorder with the arrows. Toggle a habit off to hide it from your views (its history is kept)."}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6,overflowY:"auto",minHeight:0},children:a.map((u,m)=>{var I;const f=((I=qn[u.pillar])==null?void 0:I.dot)||"#9A968C",h=u.active!==!1;return t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"9px 10px",background:"var(--bg)",borderRadius:9,border:"1px solid var(--border)",opacity:h?1:.5},children:[t.jsx("span",{style:{...O.sideDot,background:f}}),t.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500,textDecoration:h?"none":"line-through"},children:u.name}),t.jsx("button",{onClick:()=>n(u.id,!h),title:h?"Disable (hide) habit":"Enable habit",style:{...O.activeToggle,...h?O.activeToggleOn:{}},role:"switch","aria-checked":h,children:t.jsx("span",{style:{...O.activeKnob,...h?O.activeKnobOn:{}}})}),t.jsx("button",{onClick:()=>d(m,-1),disabled:m===0,style:{...O.navBtn,width:28,height:28,opacity:m===0?.3:1,fontSize:14},children:"↑"}),t.jsx("button",{onClick:()=>d(m,1),disabled:m===a.length-1,style:{...O.navBtn,width:28,height:28,opacity:m===a.length-1?.3:1,fontSize:14},children:"↓"})]},u.id)})}),t.jsxs("button",{onClick:()=>r(i),style:{...O.sideAddBtn,width:"100%",marginTop:14,height:38,justifyContent:"center",flexShrink:0},children:[t.jsx(He,{size:14})," Save Order"]})]})})}function rv({year:e}){const[r,n]=g.useState([]);if(g.useEffect(()=>{E.getHabitsYearly(e).then(n).catch(console.error)},[e]),!r.length)return null;const o=Array.from({length:12},(s,l)=>{const a=r.reduce((u,m)=>{var f;return u+(((f=m.monthly[l+1])==null?void 0:f.done)||0)},0),d=r.reduce((u,m)=>{var f;return u+Math.floor((((f=m.monthly[l+1])==null?void 0:f.days)||30)/7*7)},0);return d>0?Math.round(a/d*100):0}),i=Math.max(...o,1);return t.jsxs("div",{style:{...O.monthCard,marginTop:18},children:[t.jsxs("div",{style:O.monthTitle,children:[e," Completion"]}),t.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:6,height:80,marginTop:12},children:o.map((s,l)=>t.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[t.jsx("div",{style:{width:"100%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",height:`${s/i*60}px`,minHeight:2,opacity:s>0?1:.15},title:`${s}%`}),t.jsx("span",{style:{fontSize:9,color:"var(--text-3)",fontWeight:600},children:O0[l]})]},l))})]})}function oo({label:e,value:r,c:n,soft:o,flame:i}){return t.jsxs("div",{style:{...O.stat,background:o},children:[t.jsx("div",{style:O.statLabel,children:e}),t.jsxs("div",{style:{...O.statValue,color:n},children:[i&&t.jsx(Cn,{size:15})," ",r]})]})}const O={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:230,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",padding:"20px 12px",display:"flex",flexDirection:"column",gap:3,overflowY:"auto"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.18)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)",boxShadow:"none"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.38)",zIndex:20},sideTop:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 4px"},closeBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",marginBottom:8},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700,padding:"0 6px 14px"},sideItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"9px 10px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:500,color:"var(--text-2)",textAlign:"left"},sideItemOn:{background:"var(--hover)",fontWeight:600},sideLabel:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},sideCount:{fontSize:11,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:10,padding:"1px 7px"},sideStreak:{display:"flex",alignItems:"center",gap:3,fontSize:11,fontWeight:600,color:"#C2773B"},sideDot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},sideDivider:{height:1,background:"var(--border)",margin:"8px 6px"},addBox:{padding:"10px 6px",display:"flex",flexDirection:"column",gap:6},sideInput:{border:"1px solid var(--border)",borderRadius:7,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},sideAddBtn:{border:"none",background:"#4C9A6B",color:"#fff",height:30,padding:"0 12px",borderRadius:7,cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontSize:13,fontFamily:"inherit"},sideCancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:30,height:30,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},sideNewBtn:{display:"flex",alignItems:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",borderRadius:8,padding:"8px 10px",fontSize:12.5,color:"var(--text-3)",fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginTop:6,justifyContent:"center"},main:{flex:1,padding:"26px",overflowX:"hidden",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:200},mainHead:{marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:5,display:"flex",alignItems:"center"},h1:{fontSize:27,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},actionBtn:{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:500,color:"var(--text-2)",border:"1px solid var(--border)",background:"var(--surface)",padding:"5px 10px",borderRadius:7,cursor:"pointer",fontFamily:"inherit"},progressCard:{background:"var(--surface)",borderRadius:12,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14,display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"},progressDivider:{width:1,alignSelf:"stretch",background:"var(--border)",minHeight:48},ringStat:{display:"flex",alignItems:"center",gap:12,flex:"1 1 160px"},ringBox:{position:"relative",width:70,height:70,display:"grid",placeItems:"center",flexShrink:0},ringPct:{position:"absolute",inset:0,display:"grid",placeItems:"center",fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},ringLabel:{fontSize:14,fontWeight:700,color:"var(--text)"},ringSub:{fontSize:11.5,color:"var(--text-3)",fontWeight:500,marginTop:2},weekCard:{background:"var(--surface)",borderRadius:12,padding:"8px 14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"auto"},weekCardMobile:{padding:"8px 8px 12px",overflowX:"hidden"},weekHeadRow:{display:"flex",alignItems:"flex-end",padding:"10px 0",borderBottom:"1px solid var(--border)",minWidth:480,position:"relative",zIndex:0},weekRowMobile:{minWidth:0},weekNameCol:{width:160,flexShrink:0,alignSelf:"stretch",display:"flex",alignItems:"center",gap:8,position:"sticky",left:0,zIndex:5,background:"var(--surface)",boxShadow:"6px 0 6px -6px rgba(0,0,0,0.15)"},weekNameColMobile:{width:34,gap:0,boxShadow:"none",justifyContent:"center",position:"static"},weekStreakColMobile:{width:30},streakPillMobile:{padding:"3px 6px",gap:2},habitAvatar:{width:26,height:26,borderRadius:"50%",border:"none",color:"#fff",fontSize:12,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,lineHeight:1},mobileNameBanner:{display:"flex",alignItems:"center",gap:7,width:"100%",border:"none",background:"var(--hover)",borderRadius:8,padding:"6px 10px",margin:"4px 0 2px",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},mobileNameText:{fontSize:13,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},nameToggle:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:20,padding:"5px 11px 5px 5px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit",flexShrink:0},nameToggleTrack:{position:"relative",width:34,height:20,borderRadius:10,flexShrink:0,transition:"background 0.2s",display:"inline-block"},nameToggleKnob:{position:"absolute",top:3,width:14,height:14,borderRadius:"50%",background:"#fff",transition:"left 0.2s",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},weekDayHead:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2},weekDayName:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekDayNum:{fontSize:12,fontWeight:600,color:"var(--text-2)",width:22,height:22,display:"grid",placeItems:"center",borderRadius:"50%"},weekDayToday:{background:"var(--accent-strong)",color:"#fff"},weekStreakCol:{width:64,flexShrink:0,textAlign:"center",fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekRow:{display:"flex",alignItems:"center",padding:"9px 0",borderBottom:"1px solid #F4F2EC",minWidth:480,position:"relative",zIndex:0},weekHabitName:{fontSize:13,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},weekCell:{flex:1,display:"grid",placeItems:"center"},typeBadge:{fontSize:10,color:"var(--text-3)",background:"var(--hover)",padding:"1px 6px",borderRadius:8,fontWeight:600},tick:{width:26,height:26,borderRadius:7,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",padding:0,position:"relative",zIndex:1},tickFuture:{opacity:.4,cursor:"not-allowed",borderStyle:"dashed"},streakPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,fontWeight:700,padding:"3px 9px",borderRadius:12},tinyBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:"2px 3px",display:"grid",placeItems:"center",borderRadius:4},statStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:10,marginBottom:18},stat:{borderRadius:10,padding:"13px 14px"},statLabel:{fontSize:11,fontWeight:600,color:"var(--text-2)",marginBottom:5},statValue:{fontSize:19,fontWeight:700,display:"flex",alignItems:"center",gap:5,fontFamily:"'Fraunces',Georgia,serif"},monthCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},monthTitle:{fontSize:14,fontWeight:700,marginBottom:12,fontFamily:"'Fraunces',Georgia,serif"},monthDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:8},monthDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},monthGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6},monthDay:{aspectRatio:"1",border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",display:"grid",placeItems:"center"},monthDayFuture:{opacity:.4,cursor:"not-allowed",background:"var(--surface-2)"},monthDayOff:{background:"var(--surface-2)",borderStyle:"dashed",color:"var(--text-3)",opacity:.5,cursor:"default"},dayPick:{display:"flex",gap:4,flexWrap:"wrap"},dayChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:7,padding:"5px 7px",fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:"inherit",minWidth:34},dayChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},pickHint:{fontSize:11,color:"var(--text-3)",fontWeight:600},offDay:{color:"var(--text-3)",opacity:.4,fontSize:18,lineHeight:1,userSelect:"none"},noteIndicator:{position:"absolute",top:3,right:3,width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},cellNoteBubble:{position:"absolute",top:2,right:"calc(50% - 16px)",width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},countBadge:{position:"absolute",bottom:2,right:2,minWidth:13,height:13,padding:"0 2px",borderRadius:7,color:"#fff",fontSize:9,fontWeight:700,display:"grid",placeItems:"center",lineHeight:1},counterBtn:{width:44,height:44,borderRadius:"50%",border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:24,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1},inlineCounter:{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",margin:"2px 0 8px",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,flexWrap:"wrap"},inlineCount:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1},inlineTarget:{fontSize:12,fontWeight:600,color:"var(--text-3)",marginLeft:1},inlinePlus:{width:30,height:30,borderRadius:8,border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:18,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1,flexShrink:0},inlineSet:{height:30,padding:"0 12px",borderRadius:8,border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",flexShrink:0},inlineWait:{fontSize:12,fontWeight:700,color:"#C2773B"},inlineReady:{fontSize:12,fontWeight:700,color:"#4C9A6B"},inlineMore:{marginLeft:"auto",border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",fontSize:16,fontWeight:700,lineHeight:1},activeToggle:{position:"relative",width:38,height:22,borderRadius:11,border:"none",background:"var(--border)",cursor:"pointer",flexShrink:0,transition:"background 0.2s",padding:0},activeToggleOn:{background:"#4C9A6B"},activeKnob:{position:"absolute",top:3,left:3,width:16,height:16,borderRadius:"50%",background:"#fff",transition:"left 0.2s",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},activeKnobOn:{left:19},chainLine:{position:"absolute",top:"calc(50% - 3px)",left:0,right:0,height:6,zIndex:0,opacity:.9},chainBanner:{display:"flex",alignItems:"center",gap:8,borderRadius:10,padding:"10px 14px",marginBottom:14,fontSize:12.5,fontWeight:700,fontFamily:"'Inter',system-ui,sans-serif"},navBar:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:16},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},navLabel:{fontSize:13,fontWeight:700,color:"var(--text)",minWidth:180,textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},noteBox:{background:"var(--surface)",borderRadius:10,padding:14,marginTop:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},longPressMenu:{position:"absolute",top:"100%",left:0,zIndex:50,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 4px 16px rgba(0,0,0,0.12)",padding:"4px 0",minWidth:140},menuItem:{display:"flex",alignItems:"center",gap:8,width:"100%",border:"none",background:"none",padding:"8px 14px",fontSize:13,color:"var(--text)",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:100,display:"grid",placeItems:"center"},modal:{background:"var(--surface)",borderRadius:14,padding:24,width:320,maxWidth:"90vw",display:"flex",flexDirection:"column",gap:8},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:700,fontSize:16,fontFamily:"'Fraunces',Georgia,serif",marginBottom:6},modalLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4}},xc=[{id:1,label:"Rough",emoji:"😣",color:"#C2536B"},{id:2,label:"Low",emoji:"🙁",color:"#C2773B"},{id:3,label:"Okay",emoji:"😐",color:"#C9A227"},{id:4,label:"Good",emoji:"🙂",color:"#4C9A6B"},{id:5,label:"Great",emoji:"😄",color:"#3A7CA5"}],nv=e=>xc.find(r=>r.id===e),Ja=[{id:"wins",label:"Wins",hint:"What went well today?",icon:qr,color:"#C9A227"},{id:"grateful",label:"Grateful for",hint:"1–3 things",icon:dh,color:"#C2536B"},{id:"mattered",label:"What mattered",hint:"The point of today",icon:Tg,color:"#3A7CA5"},{id:"letgo",label:"Letting go of",hint:"Offload what's draining",icon:j0,color:"#8268B0"},{id:"tomorrow",label:"Tomorrow's one thing",hint:"A single priority",icon:xh,color:"#4C9A6B"}],Th=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,ov=()=>Th(new Date),ed=e=>new Date(e+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"});function iv(){const e=ov(),[r,n]=[new Date().getFullYear(),new Date().getMonth()+1],[o,i]=g.useState(null),s=o||e,l=s===e,[a,d]=g.useState(null),[u,m]=g.useState({}),[f,h]=g.useState(Object.fromEntries(Ja.map(j=>[j.id,""]))),I=g.useCallback(async j=>{const N=await E.getJournalEntry(j);d(N)},[]);g.useCallback(async()=>{const j=await E.getJournalHistory(r,n);m(j)},[r,n]);const B=g.useCallback(async()=>{const[j,N]=await Promise.all([E.getJournalEntry(s),E.getJournalHistory(r,n)]);d(j),m(N)},[s,r,n]);g.useEffect(()=>{B()},[B]);const k=async j=>{l&&(await E.updateJournalMood(s,j),B())},C=async j=>{if(!l)return;const N=f[j].trim();N&&(await E.addJournalBullet(s,j,N),h(J=>({...J,[j]:""})),I(s))},p=async j=>{await E.deleteJournalBullet(j),I(s)},c=j=>{i(j===e?null:j),h(Object.fromEntries(Ja.map(N=>[N.id,""])))};if(!a)return t.jsx("div",{style:{padding:28,color:"var(--text-3)"},children:"Loading…"});const b=a.mood!==null,T=(()=>{let j=0;const N=new Date(e);if(u[e]||l&&b)j=1,N.setDate(N.getDate()-1);else return 0;for(;;){const se=Th(N);if(u[se])j++,N.setDate(N.getDate()-1);else break}return j})(),y=Object.values(a.bullets||{}).reduce((j,N)=>j+N.length,0),w=new Date(r,n,0).getDate(),D=new Date(r,n-1,1).getDay(),S=D===0?6:D-1;return t.jsxs("div",{style:et.page,children:[t.jsxs("div",{style:et.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:et.eyebrow,children:"Anvil · Journal"}),!l&&t.jsxs("button",{style:et.backBtn,onClick:()=>i(null),children:[t.jsx(Tn,{size:14})," Back to Today"]}),t.jsx("h1",{style:et.h1,children:l?"Today":ed(s)}),l&&t.jsx("div",{style:et.date,children:ed(e)})]}),t.jsxs("div",{style:et.streakBox,children:[t.jsx(Cn,{size:16,color:"#C2773B"}),t.jsx("span",{style:et.streakNum,children:T}),t.jsx("span",{style:et.streakLabel,children:"day streak"})]})]}),t.jsxs("div",{style:et.card,children:[t.jsxs("div",{style:et.cardTitle,children:["How ",l?"are":"were"," you?"]}),t.jsx("div",{style:et.moodRow,children:xc.map(j=>{const N=a.mood===j.id;return t.jsxs("button",{onClick:()=>k(j.id),disabled:!l,style:{...et.moodBtn,cursor:l?"pointer":"default",...N?{background:j.color,borderColor:j.color,transform:"translateY(-2px)"}:{},...!l&&!N?{opacity:.55}:{}},children:[t.jsx("span",{style:et.moodEmoji,children:j.emoji}),t.jsx("span",{style:{...et.moodLabel,color:N?"#fff":"#6B675E"},children:j.label})]},j.id)})})]}),Ja.map(j=>{var se;const N=j.icon,J=((se=a.bullets)==null?void 0:se[j.id])||[];return t.jsxs("div",{style:et.card,children:[t.jsxs("div",{style:et.sectionHead,children:[t.jsx("span",{style:{...et.sectionIcon,background:`${j.color}1A`,color:j.color},children:t.jsx(N,{size:15})}),t.jsxs("div",{children:[t.jsx("div",{style:et.cardTitle,children:j.label}),t.jsx("div",{style:et.sectionHint,children:j.hint})]})]}),t.jsxs("ul",{style:et.bulletList,children:[J.map(W=>t.jsxs("li",{style:et.bullet,children:[t.jsx("span",{style:{...et.bulletDot,background:j.color}}),t.jsx("span",{style:et.bulletText,children:W.text}),l&&t.jsx("button",{onClick:()=>p(W.id),style:et.bulletDel,children:t.jsx(De,{size:13})})]},W.id)),!l&&J.length===0&&t.jsx("li",{style:et.sectionHint,children:"Nothing written."})]}),l&&t.jsxs("div",{style:et.addRow,children:[t.jsx("input",{placeholder:"Add a point…",value:f[j.id],onChange:W=>h(de=>({...de,[j.id]:W.target.value})),onKeyDown:W=>W.key==="Enter"&&C(j.id),style:et.input}),t.jsx("button",{onClick:()=>C(j.id),style:{...et.addBtn,background:j.color},children:t.jsx(ot,{size:16})})]})]},j.id)}),t.jsxs("div",{style:et.card,children:[t.jsxs("div",{style:et.cardTitle,children:[new Date(r,n-1).toLocaleDateString("en-US",{month:"long",year:"numeric"})," · Mood history",t.jsx("span",{style:{fontSize:11,color:"var(--text-3)",fontWeight:400,marginLeft:8},children:"tap a day to view"})]}),t.jsx("div",{style:et.calDow,children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(j=>t.jsx("div",{style:et.calDowCell,children:j},j))}),t.jsxs("div",{style:et.calGrid,children:[Array.from({length:S}).map((j,N)=>t.jsx("div",{},`p${N}`)),Array.from({length:w},(j,N)=>N+1).map(j=>{const N=`${r}-${String(n).padStart(2,"0")}-${String(j).padStart(2,"0")}`,J=N===e&&a.mood?a.mood:u[N],se=J?nv(J):null,W=N>e,de=N===s;return t.jsx("button",{onClick:()=>!W&&c(N),disabled:W,style:{...et.calDay,background:se?se.color:W?"var(--surface-2)":"var(--surface)",borderColor:de?"var(--accent-strong)":"var(--border)",borderWidth:de?2:1,color:se?"#fff":"var(--text-3)",opacity:W?.5:1,cursor:W?"not-allowed":"pointer",outline:de?"2px solid var(--accent-strong)":"none",outlineOffset:1},title:se?se.label:N,children:se?se.emoji:j},j)})]}),t.jsx("div",{style:et.legend,children:xc.map(j=>t.jsxs("span",{style:et.legendItem,children:[t.jsx("span",{style:{...et.legendDot,background:j.color}})," ",j.label]},j.id))})]}),t.jsx("div",{style:et.footer,children:l?b?`Mood set · ${y} point${y===1?"":"s"} written today`:"Tap a mood to log today and keep your streak":`Viewing ${ed(s)} · past entries are read-only`})]})}const et={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},backBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",background:"none",color:"#3A7CA5",fontSize:12.5,fontWeight:600,cursor:"pointer",padding:"0 0 6px",fontFamily:"inherit"},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},date:{fontSize:13,color:"var(--text-3)",marginTop:4},streakBox:{display:"flex",alignItems:"center",gap:6,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"8px 14px"},streakNum:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"#C2773B"},streakLabel:{fontSize:11,color:"var(--text-3)",fontWeight:500},card:{background:"var(--surface)",borderRadius:12,padding:"18px 20px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},cardTitle:{fontSize:14,fontWeight:700,marginBottom:12,color:"var(--text)"},moodRow:{display:"flex",gap:8,flexWrap:"wrap"},moodBtn:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,border:"2px solid var(--border)",background:"var(--surface)",borderRadius:10,padding:"10px 12px",cursor:"pointer",flex:"1 1 60px",transition:"transform 0.1s"},moodEmoji:{fontSize:22},moodLabel:{fontSize:11,fontWeight:600},sectionHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:10},sectionIcon:{width:32,height:32,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},sectionHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},bulletList:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6,marginBottom:10},bullet:{display:"flex",alignItems:"center",gap:8,fontSize:13.5,lineHeight:1.4},bulletDot:{width:6,height:6,borderRadius:"50%",flexShrink:0},bulletText:{flex:1},bulletDel:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},addRow:{display:"flex",gap:8},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",outline:"none"},addBtn:{width:36,height:36,border:"none",borderRadius:8,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:12},calDay:{aspectRatio:"1",border:"1px solid var(--border)",borderRadius:7,fontSize:13,display:"grid",placeItems:"center",fontWeight:500,fontFamily:"inherit"},legend:{display:"flex",gap:10,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)"},legendDot:{width:8,height:8,borderRadius:"50%",display:"inline-block"},footer:{fontSize:12.5,color:"var(--text-3)",textAlign:"center",marginTop:8,fontStyle:"italic"}};function sv(e=760){const[r,n]=g.useState(()=>window.innerWidth<e);return g.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const Pr=[{id:"D",label:"Data",color:"#3A7CA5",soft:"rgba(58,124,165,0.10)",prompt:"What did you read/watch? Log the raw source and a quick note.",hint:"e.g. 'Atomic Habits ch.1 — habits are systems not goals'"},{id:"I",label:"Information",color:"#8268B0",soft:"rgba(130,104,176,0.10)",prompt:"What did you actually understand from it? In your own words.",hint:"e.g. 'Small 1% improvements compound into massive change over time'"},{id:"K",label:"Knowledge",color:"#C9A227",soft:"rgba(201,162,39,0.10)",prompt:"How will this specifically improve your life? Connect it to your goals.",hint:"e.g. 'I will improve my morning workout habit by 1% each week'"},{id:"W",label:"Wisdom",color:"#4C9A6B",soft:"rgba(76,154,107,0.10)",prompt:"How have you implemented it? What changed?",hint:"e.g. 'I've not missed a workout in 3 weeks using the 1% rule'"}],ip=e=>Pr.findIndex(r=>r.id===e),yc=[{id:"book",label:"Book",icon:xa},{id:"video",label:"Video",icon:k0},{id:"article",label:"Article",icon:jg}],Zs=e=>yc.find(r=>r.id===e)||yc[0],td={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"};function lv(){var re;const[e,r]=g.useState([]),[n,o]=g.useState(null),[i,s]=g.useState("ALL"),[l,a]=g.useState(!1),[d,u]=g.useState(null),[m,f]=g.useState({title:"",type:"book",pillar:"Academic",note:"",link:""}),[h,I]=g.useState(null),[B,k]=g.useState({}),[C,p]=g.useState(null),[c,b]=g.useState(null),[T,y]=g.useState({}),[w,D]=g.useState({}),[S,j]=g.useState(null),N=sv(),J=g.useCallback(async()=>{try{const F=await E.getSkills();r(F);const le={};F.forEach(ye=>{le[ye.id]=Object.fromEntries(Pr.map(ke=>[ke.id,""]))}),k(ye=>{const ke={...le};return F.forEach(Ne=>{ye[Ne.id]&&(ke[Ne.id]={...le[Ne.id],...ye[Ne.id]})}),ke})}catch(F){console.error(F)}},[]);g.useEffect(()=>{J()},[J]);const se=e.find(F=>F.id===n),W=se?ip(se.stage):-1,de=async(F,le)=>{var ke;const ye=(((ke=B[F])==null?void 0:ke[le])??"").trim();ye&&(await E.addSkillNote(F,le,ye),k(Ne=>({...Ne,[F]:{...Ne[F],[le]:""}})),J())},Re=async F=>{await E.deleteSkillNote(F),J()},pe=F=>(F==null?void 0:F.source_type)==="book"?"Chapter":"Learning",je=()=>`g${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,Q=async F=>{const le=[...F.data_groups||[]];le.push({id:je(),label:`${pe(F)} ${le.length+1}`}),await E.setSkillGroups(F.id,le),D(ye=>({...ye,[le[le.length-1].id]:!0})),J()},x=async(F,le,ye)=>{const ke=(F.data_groups||[]).map(Ne=>Ne.id===le?{...Ne,label:ye}:Ne);await E.setSkillGroups(F.id,ke),J()},Y=async(F,le)=>{const ye=(F.data_groups||[]).filter(ke=>ke.id!==le);await E.setSkillGroups(F.id,ye),J()},H=async(F,le)=>{const ye=(T[le]??"").trim();ye&&(await E.addSkillNote(F.id,"D",ye,le),y(ke=>({...ke,[le]:""})),J())},ae=async()=>{!se||!(c!=null&&c.trim())||(await E.updateSkill(se.id,{title:c.trim()}),b(null),J())},V=async()=>{!C||!C.text.trim()||(await E.updateSkillNote(C.id,C.text.trim()),p(null),J())},G=async F=>{await E.toggleSkillNote(F),J()},P=async(F,le)=>{e.find(ke=>ke.id===F)&&(le==="W"&&u(F),await E.completeSkillStage(F,le),J())},ge=async()=>{if(!m.title.trim())return;const F=await E.createSkill({pillar:m.pillar,title:m.title.trim(),source_type:m.type,link:m.link.trim(),note_d:m.note.trim()});a(!1),f({title:"",type:"book",pillar:"Academic",note:"",link:""}),o(F.id),J()},ce=async()=>{se&&(await E.updateSkill(se.id,{link:(h||"").trim()}),I(null),J())},{deleteItem:We,toasts:X,handleUndo:ne,handleDismiss:L}=br(E.deleteSkill,E.restoreSkill,J),ie=(F,le="Skill")=>{n===F&&o(null),We(F,le)},he=i==="ALL"?e:e.filter(F=>F.stage===i),A=e.filter(F=>F.stage==="W").length,v=!!se;return t.jsxs("div",{style:fe.page,children:[d&&t.jsx("div",{style:fe.celebOverlay,children:t.jsxs("div",{style:fe.celebBox,children:[t.jsx("div",{style:fe.celebEmoji,children:"🏆"}),t.jsx("div",{style:fe.celebTitle,children:"Wisdom unlocked!"}),t.jsx("div",{style:fe.celebSub,children:"You've implemented this knowledge — that's rare and real."}),t.jsx("button",{onClick:()=>u(null),style:fe.celebBtn,children:"Continue"})]})}),t.jsxs("div",{style:fe.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:fe.eyebrow,children:"Anvil · Skills"}),t.jsx("h1",{style:fe.h1,children:"DIKW Skills"}),t.jsx("div",{style:fe.subhead,children:"Data → Information → Knowledge → Wisdom"})]}),t.jsxs("div",{style:fe.headRight,children:[t.jsxs("div",{style:fe.wisdomBadge,children:[t.jsx(qr,{size:14,color:"#C9A227"})," ",A," Wisdom",A!==1?"s":""]}),t.jsxs("button",{onClick:()=>{a(!0),o(null)},style:fe.addSkillBtn,children:[t.jsx(ot,{size:15})," Add skill"]})]})]}),t.jsx("div",{style:fe.filterBar,children:["ALL",...Pr.map(F=>F.id)].map(F=>{const le=Pr.find(ke=>ke.id===F),ye=i===F;return t.jsx("button",{onClick:()=>s(F),style:{...fe.filterBtn,...ye?{background:le?le.color:"var(--accent-strong)",color:"#fff",borderColor:"transparent"}:{}},children:le?`${F} · ${le.label}`:"All"},F)})}),t.jsxs("div",{style:{...fe.layout,gridTemplateColumns:!N&&v?"minmax(0,1fr) minmax(0,1fr)":"1fr"},children:[(!N||!se)&&t.jsxs("div",{style:{...fe.cardList,gridTemplateColumns:N||v?"1fr":"repeat(3, minmax(0, 1fr))"},children:[l&&t.jsxs("div",{style:{...fe.skillCard,border:"2px dashed #3A7CA5",gridColumn:"1 / -1"},children:[t.jsx("div",{style:fe.cardTitle,children:"New skill"}),t.jsx("input",{placeholder:"Title (book / video / article name)",value:m.title,onChange:F=>f(le=>({...le,title:F.target.value})),onKeyDown:F=>F.key==="Enter"&&ge(),style:fe.input,autoFocus:!0}),t.jsxs("div",{style:fe.addRow,children:[t.jsx("select",{value:m.type,onChange:F=>f(le=>({...le,type:F.target.value})),style:fe.select,children:yc.map(F=>t.jsx("option",{value:F.id,children:F.label},F.id))}),t.jsx("select",{value:m.pillar,onChange:F=>f(le=>({...le,pillar:F.target.value})),style:fe.select,children:Object.keys(td).map(F=>t.jsx("option",{children:F},F))})]}),t.jsx("input",{placeholder:m.type==="book"?"Link (optional)":`${Zs(m.type).label} link (optional) — paste URL to route here`,value:m.link,onChange:F=>f(le=>({...le,link:F.target.value})),onKeyDown:F=>F.key==="Enter"&&ge(),style:fe.input}),t.jsxs("div",{style:fe.addRow,children:[t.jsxs("button",{onClick:ge,style:fe.saveBtn,children:[t.jsx(He,{size:14})," Save"]}),t.jsxs("button",{onClick:()=>a(!1),style:fe.cancelBtn,children:[t.jsx(De,{size:14})," Cancel"]})]})]}),he.map(F=>{const le=ip(F.stage),ye=Pr[le],ke=Zs(F.source_type),Ne=F.stage==="W",lt=n===F.id;return t.jsxs("div",{onClick:()=>o(lt?null:F.id),style:{...fe.skillCard,...lt?{borderColor:ye.color,borderWidth:2}:{},...Ne?{background:"rgba(76,154,107,0.05)"}:{}},children:[t.jsxs("div",{style:fe.skillCardTop,children:[t.jsxs("div",{style:fe.skillMeta,children:[t.jsx("span",{style:{color:td[F.pillar]},children:t.jsx(ke.icon,{size:13})}),t.jsx("span",{style:{...fe.pillarDot,background:td[F.pillar]}}),t.jsxs("span",{style:fe.srcLabel,children:[ke.label," · ",F.pillar]})]}),t.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[Ne&&t.jsx(To,{size:14,color:"#4C9A6B"}),F.link&&t.jsx("a",{href:F.link,target:"_blank",rel:"noreferrer",onClick:Je=>Je.stopPropagation(),style:fe.ghostBtn,title:"Open source",children:t.jsx(dc,{size:13})}),t.jsx("button",{onClick:Je=>{Je.stopPropagation(),ie(F.id,F.title)},style:fe.ghostBtn,children:t.jsx(De,{size:13})})]})]}),t.jsx("div",{style:fe.skillTitle,children:F.title}),t.jsxs("div",{style:fe.track,children:[Pr.map((Je,mt)=>{var Me;const Qe=mt<le,st=mt===le,oe=(Me=F.completed_stages)==null?void 0:Me[Je.id];return t.jsxs("div",{style:{...fe.trackItem,...mt<Pr.length-1?{flex:1}:{}},children:[t.jsxs("div",{style:{...fe.trackDot,background:Qe||oe||st?Je.color:"var(--border)",boxShadow:st?`0 0 0 3px ${Je.color}33`:"none"},children:[(Qe||st&&oe)&&t.jsx(He,{size:9,color:"#fff",strokeWidth:3}),st&&!oe&&t.jsx("span",{style:fe.trackCurrent,children:Je.id}),!Qe&&!st&&t.jsx(Ou,{size:8,color:"#B5B1A7"})]}),mt<Pr.length-1&&t.jsx("div",{style:{...fe.trackLine,background:Qe?Pr[mt+1].color:"var(--border)"}})]},Je.id)}),t.jsx("span",{style:{...fe.stageTag,background:ye.soft,color:ye.color},children:ye.label})]})]},F.id)}),he.length===0&&!l&&t.jsx("div",{style:{...fe.empty,gridColumn:"1 / -1"},children:"No skills at this stage yet."})]}),se&&t.jsxs("div",{style:fe.detail,children:[t.jsxs("div",{style:fe.detailHead,children:[N&&t.jsx("button",{onClick:()=>{o(null),b(null)},style:fe.backBtn,title:"Back to skills",children:t.jsx(Tn,{size:18})}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsxs("div",{style:fe.eyebrow,children:[Zs(se.source_type).label," · ",se.pillar]}),c!==null?t.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginTop:4},children:[t.jsx("input",{autoFocus:!0,value:c,onChange:F=>b(F.target.value),onKeyDown:F=>{F.key==="Enter"&&ae(),F.key==="Escape"&&b(null)},style:{...fe.input,fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:0,flex:1}}),t.jsx("button",{onClick:ae,style:{...fe.noteAddBtn,background:"#4C9A6B",width:30,height:30},children:t.jsx(He,{size:13})}),t.jsx("button",{onClick:()=>b(null),style:{...fe.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:30,height:30},children:t.jsx(De,{size:13})})]}):t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[t.jsx("div",{style:fe.detailTitle,children:se.title}),t.jsx("button",{onClick:()=>b(se.title),style:fe.ghostBtn,title:"Edit name",children:t.jsx(yt,{size:13})})]}),h!==null?t.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginTop:6},children:[t.jsx("input",{autoFocus:!0,value:h,placeholder:"Paste the video / article URL",onChange:F=>I(F.target.value),onKeyDown:F=>{F.key==="Enter"&&ce(),F.key==="Escape"&&I(null)},style:{...fe.input,marginBottom:0,flex:1}}),t.jsx("button",{onClick:ce,style:{...fe.noteAddBtn,background:"#4C9A6B",width:30,height:30},children:t.jsx(He,{size:13})}),t.jsx("button",{onClick:()=>I(null),style:{...fe.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:30,height:30},children:t.jsx(De,{size:13})})]}):t.jsx("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:6,flexWrap:"wrap"},children:se.link?t.jsxs(t.Fragment,{children:[t.jsxs("a",{href:se.link,target:"_blank",rel:"noreferrer",style:fe.openLinkBtn,children:[t.jsx(dc,{size:13})," Open ",Zs(se.source_type).label.toLowerCase()]}),t.jsx("button",{onClick:()=>I(se.link),style:fe.ghostBtn,title:"Edit link",children:t.jsx(yt,{size:12})})]}):t.jsxs("button",{onClick:()=>I(""),style:fe.addLinkBtn,children:[t.jsx(xs,{size:12})," Add link"]})})]}),t.jsx("button",{onClick:()=>{o(null),b(null)},style:fe.closeBtn,children:t.jsx(De,{size:16})})]}),Pr.map((F,le)=>{var Qe,st,oe;const ye=le<=W,ke=le===W,Ne=le<W||((Qe=se.completed_stages)==null?void 0:Qe[F.id]),lt=le>W,Je=((st=se.notes)==null?void 0:st[F.id])||[],mt=((oe=B[se.id])==null?void 0:oe[F.id])??"";return t.jsxs("div",{style:{...fe.stageBlock,...ye?{borderColor:F.color}:{},opacity:lt?.45:1},children:[t.jsxs("div",{style:fe.stageBlockHead,children:[t.jsx("div",{style:{...fe.stageLetter,background:ye?F.color:"var(--border)",color:ye?"#fff":"#9A968C"},children:Ne&&!ke?t.jsx(He,{size:12,color:"#fff",strokeWidth:3}):lt?t.jsx(Ou,{size:11,color:"#9A968C"}):F.id}),t.jsxs("div",{style:{flex:1},children:[t.jsx("div",{style:{...fe.stageName,color:ye?F.color:"#9A968C"},children:F.label}),ye&&t.jsx("div",{style:fe.stagePrompt,children:F.prompt})]}),Ne&&!ke&&t.jsx("span",{style:{...fe.doneBadge,color:F.color,background:F.soft},children:"Done"})]}),ye&&(()=>{var R,me;const Me=F.id==="W",qe=F.id==="D",tt=Je.length>0&&Je.every(Ce=>Ce.done),ut=Me?tt:Je.length>0,Et=se.data_groups||[],jt=Je.filter(Ce=>!Ce.grp),vt=pe(se),Ct=Ce=>t.jsxs("li",{style:fe.noteItem,children:[t.jsx("span",{style:{...fe.noteDot,background:F.color}}),(C==null?void 0:C.id)===Ce.id?t.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[t.jsx("input",{autoFocus:!0,value:C.text,onChange:Oe=>p(kt=>({...kt,text:Oe.target.value})),onKeyDown:Oe=>{Oe.key==="Enter"&&V(),Oe.key==="Escape"&&p(null)},style:{...fe.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),t.jsx("button",{onClick:V,style:{...fe.noteAddBtn,background:F.color,width:28,height:28},children:t.jsx(He,{size:12})}),t.jsx("button",{onClick:()=>p(null),style:{...fe.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:t.jsx(De,{size:12})})]}):t.jsx("span",{style:fe.noteText,children:Ce.text}),(C==null?void 0:C.id)!==Ce.id&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>p({id:Ce.id,text:Ce.text}),style:fe.ghostBtn,children:t.jsx(yt,{size:12})}),t.jsx("button",{onClick:()=>Re(Ce.id),style:fe.ghostBtn,children:t.jsx(De,{size:12})})]})]},Ce.id);return t.jsxs(t.Fragment,{children:[qe?t.jsxs(t.Fragment,{children:[jt.length>0&&t.jsx("ul",{style:fe.noteList,children:jt.map(Ct)}),Et.map(Ce=>{const Oe=Je.filter(It=>It.grp===Ce.id),kt=w[Ce.id]!==!1;return t.jsxs("div",{style:{...fe.groupBox,borderColor:`${F.color}55`},children:[t.jsxs("div",{style:fe.groupHead,children:[t.jsx("button",{onClick:()=>D(It=>({...It,[Ce.id]:!kt})),style:fe.groupCaret,children:kt?t.jsx(zo,{size:15}):t.jsx(sn,{size:15})}),se.source_type==="book"?t.jsx(xa,{size:13,color:F.color}):t.jsx(qy,{size:13,color:F.color}),(S==null?void 0:S.id)===Ce.id?t.jsx("input",{autoFocus:!0,value:S.label,onChange:It=>j(at=>({...at,label:It.target.value})),onKeyDown:It=>{It.key==="Enter"&&(x(se,Ce.id,S.label.trim()||Ce.label),j(null)),It.key==="Escape"&&j(null)},onBlur:()=>{x(se,Ce.id,S.label.trim()||Ce.label),j(null)},style:{...fe.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}):t.jsx("span",{style:fe.groupTitle,onClick:()=>j({id:Ce.id,label:Ce.label}),title:"Click to rename",children:Ce.label}),t.jsx("span",{style:fe.groupCount,children:Oe.length}),t.jsx("button",{onClick:()=>Y(se,Ce.id),style:fe.ghostBtn,title:`Delete ${vt.toLowerCase()}`,children:t.jsx(De,{size:13})})]}),kt&&t.jsxs("div",{style:fe.groupBody,children:[Oe.length>0&&t.jsx("ul",{style:fe.noteList,children:Oe.map(Ct)}),t.jsxs("div",{style:fe.noteAddRow,children:[t.jsx("input",{placeholder:"Add a point…",value:T[Ce.id]??"",onChange:It=>y(at=>({...at,[Ce.id]:It.target.value})),onKeyDown:It=>It.key==="Enter"&&H(se,Ce.id),style:fe.noteInput}),t.jsx("button",{onClick:()=>H(se,Ce.id),style:{...fe.noteAddBtn,background:F.color},children:t.jsx(ot,{size:14})})]})]})]},Ce.id)}),Et.length===0&&jt.length===0&&t.jsxs("div",{style:fe.noNotes,children:["No ",vt.toLowerCase(),"s yet — add one to start logging points."]}),t.jsxs("button",{onClick:()=>Q(se),style:{...fe.addGroupBtn,color:F.color,borderColor:`${F.color}80`},children:[t.jsx(ot,{size:14})," Add ",vt.toLowerCase()]})]}):t.jsxs(t.Fragment,{children:[Je.length>0&&t.jsx("ul",{style:fe.noteList,children:Je.map(Ce=>t.jsxs("li",{style:fe.noteItem,children:[Me?t.jsx("button",{onClick:()=>G(Ce.id),style:{...fe.checkBox,...Ce.done?{background:F.color,borderColor:F.color}:{}},children:Ce.done&&t.jsx(He,{size:11,color:"#fff",strokeWidth:3})}):t.jsx("span",{style:{...fe.noteDot,background:F.color}}),(C==null?void 0:C.id)===Ce.id?t.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[t.jsx("input",{autoFocus:!0,value:C.text,onChange:Oe=>p(kt=>({...kt,text:Oe.target.value})),onKeyDown:Oe=>{Oe.key==="Enter"&&V(),Oe.key==="Escape"&&p(null)},style:{...fe.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),t.jsx("button",{onClick:V,style:{...fe.noteAddBtn,background:F.color,width:28,height:28},children:t.jsx(He,{size:12})}),t.jsx("button",{onClick:()=>p(null),style:{...fe.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:t.jsx(De,{size:12})})]}):t.jsx("span",{style:{...fe.noteText,...Me&&Ce.done?{textDecoration:"line-through",color:"var(--text-3)"}:{}},children:Ce.text}),(C==null?void 0:C.id)!==Ce.id&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>p({id:Ce.id,text:Ce.text}),style:fe.ghostBtn,children:t.jsx(yt,{size:12})}),t.jsx("button",{onClick:()=>Re(Ce.id),style:fe.ghostBtn,children:t.jsx(De,{size:12})})]})]},Ce.id))}),Je.length===0&&t.jsx("div",{style:fe.noNotes,children:Me?"Add the steps to implement this — check each off as you do it.":`No notes yet — ${F.hint}`}),t.jsxs("div",{style:fe.noteAddRow,children:[t.jsx("input",{placeholder:Me?"Add a step to implement…":`Add a ${F.label} note…`,value:mt,onChange:Ce=>k(Oe=>({...Oe,[se.id]:{...Oe[se.id],[F.id]:Ce.target.value}})),onKeyDown:Ce=>Ce.key==="Enter"&&de(se.id,F.id),style:fe.noteInput}),t.jsx("button",{onClick:()=>de(se.id,F.id),style:{...fe.noteAddBtn,background:F.color},children:t.jsx(ot,{size:14})})]})]}),ke&&!((R=se.completed_stages)!=null&&R[F.id])&&t.jsxs(t.Fragment,{children:[Me&&Je.length>0&&!tt&&t.jsxs("div",{style:fe.checklistHint,children:[Je.filter(Ce=>Ce.done).length,"/",Je.length," done — check all steps to complete Wisdom"]}),t.jsxs("button",{onClick:()=>P(se.id,F.id),disabled:!ut,style:{...fe.advanceBtn,background:ut?F.color:"#C3BFB5",marginTop:10,cursor:ut?"pointer":"not-allowed"},children:[t.jsx(He,{size:14}),Me?"Mark Wisdom complete":`Complete ${F.label} → ${(me=Pr[le+1])==null?void 0:me.label}`]})]})]})})()]},F.id)}),se.stage==="W"&&((re=se.completed_stages)==null?void 0:re.W)&&t.jsxs("div",{style:fe.wisdomDone,children:[t.jsx(qr,{size:16,color:"#4C9A6B"})," Wisdom achieved — implemented in your life"]})]})]}),t.jsx(mr,{toasts:X,onUndo:ne,onDismiss:L})]})}const fe={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box",position:"relative"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},wisdomBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addSkillBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},filterBar:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16},filterBtn:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},layout:{display:"grid",gap:12,alignItems:"start"},cardList:{display:"grid",gap:10,alignContent:"start"},skillCard:{background:"var(--surface)",borderRadius:12,padding:"16px",border:"1.5px solid var(--border)",cursor:"pointer",boxShadow:"0 1px 2px rgba(0,0,0,0.04)",minWidth:0,overflow:"hidden",boxSizing:"border-box"},skillCardTop:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8,marginBottom:6},skillMeta:{display:"flex",alignItems:"center",gap:6,minWidth:0},pillarDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},srcLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},skillTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",marginBottom:12,lineHeight:1.3,wordBreak:"break-word"},cardTitle:{fontSize:13,fontWeight:700,marginBottom:10},track:{display:"flex",alignItems:"center",minWidth:0},trackItem:{display:"flex",alignItems:"center",minWidth:0},trackDot:{width:22,height:22,borderRadius:"50%",display:"grid",placeItems:"center",flexShrink:0},trackCurrent:{fontSize:9,fontWeight:800,color:"#fff"},trackLine:{flex:1,minWidth:8,height:3,borderRadius:2,margin:"0 2px"},stageTag:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,marginLeft:8,flexShrink:0,whiteSpace:"nowrap"},detail:{background:"var(--surface)",borderRadius:14,padding:"18px 16px",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",border:"1.5px solid var(--border)",alignSelf:"start"},detailHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16},detailTitle:{fontSize:18,fontWeight:700,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},backBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginRight:4},groupBox:{border:"1.5px solid var(--border)",borderRadius:9,marginBottom:8,overflow:"hidden",background:"var(--bg)"},groupHead:{display:"flex",alignItems:"center",gap:7,padding:"8px 10px"},groupCaret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},groupTitle:{flex:1,minWidth:0,fontSize:13,fontWeight:700,color:"var(--text)",cursor:"text",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},groupCount:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 7px",flexShrink:0},groupBody:{padding:"0 10px 10px 10px"},addGroupBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1.5px dashed",background:"none",padding:"9px 12px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:2},stageBlock:{border:"1.5px solid var(--border)",borderRadius:10,padding:"12px 13px",marginBottom:10},stageBlockHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:8},stageLetter:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",fontSize:13,fontWeight:800,flexShrink:0},stageName:{fontSize:13,fontWeight:700},stagePrompt:{fontSize:11.5,color:"var(--text-2)",marginTop:2,lineHeight:1.4},doneBadge:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10,marginLeft:"auto",flexShrink:0},noteList:{margin:"0 0 8px 0",padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6},noteItem:{display:"flex",alignItems:"flex-start",gap:8,fontSize:13,lineHeight:1.4},noteDot:{width:6,height:6,borderRadius:"50%",flexShrink:0,marginTop:5},checkBox:{width:18,height:18,borderRadius:5,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginTop:1,padding:0},checklistHint:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,marginTop:10,textAlign:"center"},noteText:{flex:1,color:"var(--text)"},noNotes:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",marginBottom:8},noteAddRow:{display:"flex",gap:6},noteInput:{flex:1,border:"1px solid var(--border)",borderRadius:7,padding:"7px 10px",fontSize:13,fontFamily:"inherit",outline:"none"},noteAddBtn:{width:32,height:32,border:"none",borderRadius:7,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},advanceBtn:{display:"flex",alignItems:"center",gap:8,border:"none",color:"#fff",padding:"10px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},wisdomDone:{display:"flex",alignItems:"center",gap:8,justifyContent:"center",fontSize:13.5,fontWeight:700,color:"#4C9A6B",padding:12,background:"rgba(76,154,107,0.08)",borderRadius:10,marginTop:4},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},openLinkBtn:{display:"inline-flex",alignItems:"center",gap:5,textDecoration:"none",border:"1px solid #3A7CA5",background:"rgba(58,124,165,0.10)",color:"#3A7CA5",fontSize:12,fontWeight:700,padding:"5px 11px",borderRadius:8,fontFamily:"inherit",cursor:"pointer"},addLinkBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"1px dashed var(--border)",background:"none",color:"var(--text-3)",fontSize:12,fontWeight:600,padding:"5px 11px",borderRadius:8,fontFamily:"inherit",cursor:"pointer"},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box",marginBottom:8},select:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:12.5,fontFamily:"inherit",flex:1},addRow:{display:"flex",gap:8,marginBottom:8},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{fontSize:13,color:"var(--text-3)",padding:"32px 12px",textAlign:"center"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.55)",zIndex:50,display:"grid",placeItems:"center"},celebBox:{background:"var(--surface)",borderRadius:20,padding:"40px 32px",textAlign:"center",maxWidth:320,boxShadow:"0 8px 40px rgba(0,0,0,0.18)"},celebEmoji:{fontSize:52,marginBottom:12},celebTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:8},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:"#4C9A6B",color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Js=[{id:"aarti",title:"Aarti",html:`<h1>॥ गणपतीची आरती ॥</h1><br/>
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
      </div>`}];function av(){const[e,r]=g.useState(()=>window.innerWidth<720);return g.useEffect(()=>{const n=()=>r(window.innerWidth<720);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}const dv=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>1400?(a=a*1400/l,l=1400):a>1400&&(l=l*1400/a,a=1400);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),r(d.toDataURL("image/jpeg",.85))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)});function sp({base:e,count:r,images:n}){const o=n&&n.length?n:null,i=o?o.length:r,[s,l]=g.useState(0);if(!i)return null;const a=s%i,d=o?o[a]:`${e}${a+1}.jpg`;return t.jsxs("div",{style:{maxWidth:560,margin:"0 auto"},children:[t.jsx("div",{style:Ue.carouselFrame,children:t.jsx("img",{src:d,alt:`Page ${a+1}`,style:Ue.carouselImg})}),t.jsxs("div",{style:Ue.carouselNav,children:[t.jsxs("button",{onClick:()=>l(u=>(u-1+i)%i),style:Ue.carouselBtn,children:[t.jsx(Tn,{size:16})," Prev"]}),t.jsxs("span",{style:Ue.carouselCount,children:[o?"":"Adhyay ",a+1," / ",i]}),t.jsxs("button",{onClick:()=>l(u=>(u+1)%i),style:Ue.carouselBtn,children:["Next ",t.jsx(sn,{size:16})]})]})]})}function cv(){const e=av(),[r,n]=g.useState(!1),[o,i]=g.useState([]),[s,l]=g.useState("dss"),[a,d]=g.useState(!1),[u,m]=g.useState({title:"",type:"text",content:"",images:[]}),[f,h]=g.useState([]),[I,B]=g.useState(null),[k,C]=g.useState(!1),p=g.useRef(!1),c=g.useCallback(async()=>{try{const[x,Y,H]=await Promise.all([E.getDecks(),E.getSetting("spiritual_order"),E.getSetting("spiritual_default")]);if(i(x),Array.isArray(Y==null?void 0:Y.value)&&h(Y.value),H!=null&&H.value&&B(H.value),!p.current){p.current=!0;const ae=new Set([...Js.map(V=>V.id),...x.map(V=>`deck-${V.id}`)]);H!=null&&H.value&&ae.has(H.value)&&l(H.value)}}catch{}},[]);g.useEffect(()=>{c()},[c]);const b=[...Js.map(x=>({id:x.id,title:x.title})),...o.map(x=>({id:`deck-${x.id}`,title:x.title}))],T=(()=>{if(!f.length)return b;const x=new Map(b.map(H=>[H.id,H])),Y=[];return f.forEach(H=>{x.has(H)&&(Y.push(x.get(H)),x.delete(H))}),x.forEach(H=>Y.push(H)),Y})(),y=(x,Y)=>{const H=T.map(V=>V.id),ae=x+Y;ae<0||ae>=H.length||([H[x],H[ae]]=[H[ae],H[x]],h(H),E.setSetting("spiritual_order",H).catch(()=>{}))},w=x=>{B(x),E.setSetting("spiritual_default",x).catch(()=>{})},D=s.startsWith("deck-")?Number(s.slice(5)):null,S=D!=null?o.find(x=>x.id===D):null,j=S?null:Js.find(x=>x.id===s)||(D==null?Js[0]:null),N=a?"New deck":S?S.title:(j==null?void 0:j.title)||"",J=x=>{l(x),d(!1),e&&n(!1)},se=()=>{d(!0),m({title:"",type:"text",content:"",images:[]}),e&&n(!1)},W=async x=>{const Y=Array.from(x.target.files||[]),H=[];for(const ae of Y)try{H.push(await dv(ae))}catch{}m(ae=>({...ae,images:[...ae.images,...H]})),x.target.value=""},de=x=>m(Y=>({...Y,images:Y.images.filter((H,ae)=>ae!==x)})),Re=u.title.trim()&&(u.type==="text"?u.content.trim():u.images.length>0),pe=async()=>{if(!Re)return;const x=await E.createDeck({title:u.title.trim(),type:u.type,content:u.type==="text"?u.content:"",images:u.type==="images"?u.images:[]});d(!1),await c(),l(`deck-${x.id}`)},je=async x=>{await E.deleteDeck(x),s===`deck-${x}`&&l("dss"),c()},Q={...Ue.sidebar,...e?Ue.sidebarOverlay:{},...e&&!r?Ue.sidebarHidden:{}};return t.jsxs("div",{style:Ue.shell,children:[t.jsx("style",{children:gv}),e&&r&&t.jsx("div",{style:Ue.backdrop,onClick:()=>n(!1)}),t.jsxs("aside",{style:Q,children:[t.jsxs("div",{style:Ue.sideHead,children:[t.jsx("div",{style:Ue.brand,children:"Anvil · Spiritual"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:2},children:[t.jsx("button",{onClick:()=>C(x=>!x),style:Ue.iconBtn,title:"Rearrange & set default",children:k?t.jsx(He,{size:16}):t.jsx(yt,{size:15})}),e&&t.jsx("button",{onClick:()=>n(!1),style:Ue.iconBtn,children:t.jsx(De,{size:17})})]})]}),k&&t.jsxs("div",{style:Ue.editHint,children:["Arrows reorder · ",t.jsx(fs,{size:11,style:{verticalAlign:"-1px"}})," sets what opens by default"]}),t.jsxs("div",{style:Ue.sideScroll,children:[T.map((x,Y)=>{const H=x.id===s&&!a,ae=I===x.id;return t.jsxs("div",{style:Ue.sideRow,children:[t.jsxs("button",{onClick:()=>J(x.id),style:{...Ue.sideItem,flex:1,...H?Ue.sideItemOn:{}},children:[x.title,ae&&t.jsx("span",{style:Ue.defStar,title:"Opens by default",children:" ★"})]}),k&&t.jsxs("div",{style:Ue.editControls,children:[t.jsx("button",{onClick:()=>w(x.id),title:"Set as default",style:{...Ue.miniBtn,...ae?{color:"#8268B0"}:{}},children:t.jsx(fs,{size:13})}),t.jsx("button",{onClick:()=>y(Y,-1),disabled:Y===0,style:{...Ue.miniBtn,opacity:Y===0?.3:1},children:t.jsx(ya,{size:13})}),t.jsx("button",{onClick:()=>y(Y,1),disabled:Y===T.length-1,style:{...Ue.miniBtn,opacity:Y===T.length-1?.3:1},children:t.jsx(zo,{size:13})})]})]},x.id)}),t.jsxs("button",{onClick:se,style:{...Ue.newDeckBtn,...a?Ue.sideItemOn:{}},children:[t.jsx(ot,{size:14})," New deck"]})]})]}),t.jsxs("main",{style:Ue.main,children:[e&&t.jsxs("button",{onClick:()=>n(!0),style:Ue.hamburger,children:[t.jsx(wg,{size:17}),t.jsx("span",{style:Ue.hamburgerLabel,children:N})]}),a?t.jsxs("div",{style:Ue.contentWrap,children:[t.jsx("div",{style:Ue.formTitle,children:"Create a deck"}),t.jsx("input",{placeholder:"Deck title (e.g. Vishnu Sahasranamam)",value:u.title,onChange:x=>m({...u,title:x.target.value}),style:Ue.input}),t.jsxs("div",{style:Ue.typeRow,children:[t.jsxs("button",{onClick:()=>m({...u,type:"text"}),style:{...Ue.typeBtn,...u.type==="text"?Ue.typeOn:{}},children:[t.jsx(jg,{size:15})," Text"]}),t.jsxs("button",{onClick:()=>m({...u,type:"images"}),style:{...Ue.typeBtn,...u.type==="images"?Ue.typeOn:{}},children:[t.jsx(Uy,{size:15})," Images"]})]}),u.type==="text"?t.jsx("textarea",{placeholder:"Paste or write the text (verses, chant, reflection)…",value:u.content,onChange:x=>m({...u,content:x.target.value}),style:Ue.textarea}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:Ue.imgGrid,children:[u.images.map((x,Y)=>t.jsxs("div",{style:Ue.imgThumbWrap,children:[t.jsx("img",{src:x,alt:"",style:Ue.imgThumb}),t.jsx("button",{onClick:()=>de(Y),style:Ue.imgDel,children:t.jsx(De,{size:12})})]},Y)),t.jsxs("label",{style:Ue.imgAdd,children:[t.jsx(va,{size:20}),t.jsx("span",{style:{fontSize:11},children:"Add images"}),t.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:W,style:{display:"none"}})]})]}),t.jsx("div",{style:Ue.hint,children:"Images show as a swipeable carousel, in the order added."})]}),t.jsxs("div",{style:Ue.formActions,children:[t.jsxs("button",{onClick:()=>d(!1),style:Ue.cancelBtn,children:[t.jsx(De,{size:14})," Cancel"]}),t.jsxs("button",{onClick:pe,disabled:!Re,style:{...Ue.saveBtn,...Re?{}:Ue.saveDisabled},children:[t.jsx(He,{size:15})," Create deck"]})]})]}):S?t.jsxs("div",{style:Ue.contentWrap,children:[t.jsxs("div",{style:Ue.deckHead,children:[t.jsx("h2",{style:Ue.deckTitle,children:S.title}),t.jsx("button",{onClick:()=>je(S.id),style:Ue.deckDel,title:"Delete deck",children:t.jsx(ys,{size:15})})]}),S.type==="images"?t.jsx(sp,{images:S.images}):t.jsx("div",{style:Ue.deckText,children:S.content})]}):t.jsxs("div",{style:Ue.contentWrap,children:[(j==null?void 0:j.youtube)&&t.jsx("div",{style:Ue.videoFrame,children:t.jsx("iframe",{src:`https://www.youtube.com/embed/${j.youtube}`,title:j.title,style:Ue.video,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},j.youtube)}),j!=null&&j.carousel?t.jsx(sp,{base:j.imageBase,count:j.carousel}):t.jsx("div",{className:"spiritual-content",dangerouslySetInnerHTML:{__html:(j==null?void 0:j.html)||""}})]})]})]})}const gv=`
.spiritual-content { font-family: 'Inter', system-ui, sans-serif; color: var(--text); line-height: 1.9; font-size: 16px; text-align: center; }
.spiritual-content h1 { font-family: 'Fraunces', Georgia, serif; font-size: 24px; color: #8268B0; margin: 8px 0 18px; letter-spacing: -0.01em; }
.spiritual-content h2 { font-family: 'Fraunces', Georgia, serif; font-size: 18px; color: #7A5EA8; margin: 20px 0 8px; }
.spiritual-content h3 { font-size: 15px; color: var(--text-3); text-transform: uppercase; letter-spacing: 0.06em; margin: 18px 0 6px; }
.spiritual-content b { color: #8268B0; }
.spiritual-content div { text-align: center; }
`,Ue={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:240,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.15)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.35)",zIndex:20},sideHead:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 14px 12px"},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700},sideScroll:{flex:1,overflowY:"auto",padding:"0 8px 16px"},sideItem:{display:"block",width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text-2)",textAlign:"left",marginBottom:2},sideItemOn:{background:"rgba(130,104,176,0.12)",color:"#8268B0",fontWeight:700},sideRow:{display:"flex",alignItems:"center",gap:2},editControls:{display:"flex",alignItems:"center",gap:1,flexShrink:0},miniBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:5},defStar:{color:"#C9A227",fontWeight:700},editHint:{fontSize:10.5,color:"var(--text-3)",padding:"0 14px 8px",lineHeight:1.4},newDeckBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",padding:"9px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,color:"var(--text-2)",marginTop:6},main:{flex:1,padding:"26px 22px",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:220},contentWrap:{background:"var(--surface)",borderRadius:14,padding:"26px 28px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",maxWidth:760,margin:"0 auto"},videoFrame:{position:"relative",width:"100%",maxWidth:600,margin:"0 auto 22px",aspectRatio:"16 / 9",borderRadius:12,overflow:"hidden",background:"#000"},video:{position:"absolute",inset:0,width:"100%",height:"100%",border:"none"},carouselFrame:{background:"var(--surface-2)",borderRadius:12,padding:8,border:"1px solid var(--border)"},carouselImg:{width:"100%",borderRadius:8,display:"block"},carouselNav:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:14},carouselBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},carouselCount:{fontSize:13,fontWeight:700,color:"#8268B0",fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"none",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,color:"var(--text-2)"},deckHead:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,marginBottom:16,borderBottom:"1px solid var(--border)",paddingBottom:12},deckTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",margin:0,color:"#8268B0"},deckDel:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",cursor:"pointer",display:"grid",placeItems:"center",padding:7,borderRadius:8,flexShrink:0},deckText:{fontSize:16,lineHeight:1.9,whiteSpace:"pre-wrap",color:"var(--text)",textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},formTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},typeRow:{display:"flex",gap:8,marginTop:12},typeBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},typeOn:{background:"#8268B0",color:"#fff",borderColor:"#8268B0"},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:200,resize:"vertical",lineHeight:1.7,marginTop:12},imgGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(90px, 1fr))",gap:8,marginTop:12},imgThumbWrap:{position:"relative",aspectRatio:"1",borderRadius:8,overflow:"hidden",border:"1px solid var(--border)"},imgThumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},imgDel:{position:"absolute",top:3,right:3,border:"none",background:"rgba(0,0,0,0.6)",color:"#fff",borderRadius:"50%",width:18,height:18,cursor:"pointer",display:"grid",placeItems:"center",padding:0},imgAdd:{aspectRatio:"1",border:"1px dashed var(--border)",borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4,cursor:"pointer",color:"var(--text-3)"},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:8},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"#8268B0",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"}},dn={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},lp=Object.keys(dn),uv=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],pv=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],bv=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},mv=(e,r)=>`${pv[r-1]} ${e}`,hv=(e,r)=>{const n=new Date(e,r,0).getDate();return Array.from({length:n},(o,i)=>`${e}-${String(r).padStart(2,"0")}-${String(i+1).padStart(2,"0")}`)},fv=(e,r)=>{const n=new Date(e,r-1,1).getDay();return n===0?6:n-1};function xv(){const e=bv(),[r,n]=g.useState(new Date().getFullYear()),[o,i]=g.useState(new Date().getMonth()+1),[s,l]=g.useState([]),[a,d]=g.useState([]),[u,m]=g.useState({}),[f,h]=g.useState(null),[I,B]=g.useState(!1),[k,C]=g.useState(!1),[p,c]=g.useState({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:e}),[b,T]=g.useState(null),y=g.useCallback(async()=>{const[V,G,P]=await Promise.all([E.getTopics(),E.getDueToday(),E.getCalendar(r,o)]);l(V),d(G),m(P)},[r,o]);g.useEffect(()=>{y()},[y]);const w=async V=>{await E.toggleReviewDone(V),y()},D=async()=>{const V=p.intervals.split(",").map(G=>parseInt(G.trim(),10)).filter(G=>!isNaN(G));!p.topic.trim()||V.length===0||(await E.createTopic({pillar:p.pillar,topic:p.topic.trim(),intervals:V,learned_date:p.learned_date||e}),c({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:e}),C(!1),y())},{deleteItem:S,toasts:j,handleUndo:N,handleDismiss:J}=br(E.deleteTopic,E.restoreTopic,y),se=(V,G)=>S(V,G),W=V=>T({id:V.id,topic:V.topic,pillar:V.pillar,intervals:(V.intervals||[]).join(", "),learned_date:V.learned_date}),de=async()=>{if(!b)return;const V=b.intervals.split(",").map(G=>parseInt(G.trim(),10)).filter(G=>!isNaN(G)&&G>=0);!b.topic.trim()||V.length===0||(await E.updateTopic(b.id,{topic:b.topic.trim(),pillar:b.pillar,learned_date:b.learned_date,intervals:V}),T(null),y())},Re=()=>{o===1?(n(V=>V-1),i(12)):i(V=>V-1),h(null)},pe=()=>{o===12?(n(V=>V+1),i(1)):i(V=>V+1),h(null)},je=s.filter(V=>!V.cemented),Q=s.filter(V=>V.cemented),x=hv(r,o),Y=fv(r,o),H=g.useMemo(()=>{const V={};return s.forEach(G=>G.reviews.forEach(P=>{P.done||(V[P.due_date]=V[P.due_date]||[]).push({topic:G.topic,pillar:G.pillar,stage:P.stage})})),V},[s]),ae=f?s.flatMap(V=>V.reviews.filter(G=>G.due_date===f).map(G=>({...G,topic:V.topic,pillar:V.pillar,total:V.reviews.length}))):[];return t.jsxs("div",{style:Ae.page,children:[t.jsxs("div",{style:Ae.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:Ae.eyebrow,children:"Anvil · Revision"}),t.jsx("h1",{style:Ae.h1,children:"Spaced Repetition"})]}),t.jsxs("button",{onClick:()=>C(!0),style:Ae.addBtn,children:[t.jsx(ot,{size:15})," Add topic"]})]}),k&&t.jsxs("div",{style:Ae.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"What did you learn?",value:p.topic,onChange:V=>c(G=>({...G,topic:V.target.value})),onKeyDown:V=>V.key==="Enter"&&D(),style:Ae.input}),t.jsxs("div",{style:Ae.addRow,children:[t.jsx("select",{value:p.pillar,onChange:V=>c(G=>({...G,pillar:V.target.value})),style:Ae.select,children:lp.map(V=>t.jsx("option",{children:V},V))}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[t.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),t.jsx("input",{type:"date",value:p.learned_date,onChange:V=>c(G=>({...G,learned_date:V.target.value})),style:{...Ae.select,fontSize:13}})]}),t.jsx("div",{style:{flex:1,minWidth:0},children:t.jsx("input",{value:p.intervals,onChange:V=>c(G=>({...G,intervals:V.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:Ae.input})})]}),t.jsxs("div",{style:Ae.addRow,children:[t.jsxs("button",{onClick:D,style:Ae.saveBtn,children:[t.jsx(He,{size:14})," Save"]}),t.jsxs("button",{onClick:()=>C(!1),style:Ae.cancelBtn,children:[t.jsx(De,{size:14})," Cancel"]})]})]}),a.length>0&&t.jsxs("div",{style:Ae.section,children:[t.jsxs("div",{style:Ae.sectionTitle,children:[t.jsx(bh,{size:15,color:"#C2536B"}),"Due Today",t.jsx("span",{style:Ae.badge,children:a.length})]}),a.map(V=>{var P,ge;const G=((P=dn[V.pillar])==null?void 0:P.dot)||"#9A968C";return t.jsxs("div",{style:{...Ae.reviewCard,borderLeft:`3px solid ${G}`,...V.is_missed?{opacity:.85}:{}},children:[t.jsx("button",{onClick:()=>w(V.review_id),style:{...Ae.checkbox,...V.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:V.done&&t.jsx(He,{size:12,color:"#fff",strokeWidth:3})}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:Ae.reviewTopic,children:V.topic}),t.jsxs("div",{style:Ae.reviewMeta,children:[t.jsxs("span",{style:{...Ae.stageTag,background:((ge=dn[V.pillar])==null?void 0:ge.soft)||"rgba(0,0,0,0.05)",color:G},children:["Review ",V.stage,"/",V.total_stages]}),V.is_missed&&t.jsxs("span",{style:Ae.missedTag,children:["missed · ",V.due_date]})]})]})]},V.review_id)})]}),t.jsxs("div",{style:Ae.section,children:[t.jsxs("div",{style:Ae.sectionTitle,children:["Active Topics ",t.jsx("span",{style:Ae.badge,children:je.length})]}),je.length===0&&t.jsx("div",{style:Ae.empty,children:"No active topics. Add something you learned today."}),je.map(V=>{var ce,We;const G=((ce=dn[V.pillar])==null?void 0:ce.dot)||"#9A968C",P=((We=dn[V.pillar])==null?void 0:We.soft)||"rgba(0,0,0,0.05)",ge=V.reviews.filter(X=>X.done).length;return(b==null?void 0:b.id)===V.id?t.jsxs("div",{style:Ae.addBox,children:[t.jsx("input",{autoFocus:!0,value:b.topic,onChange:X=>T(ne=>({...ne,topic:X.target.value})),onKeyDown:X=>X.key==="Enter"&&de(),placeholder:"Topic",style:Ae.input}),t.jsxs("div",{style:Ae.addRow,children:[t.jsx("select",{value:b.pillar,onChange:X=>T(ne=>({...ne,pillar:X.target.value})),style:Ae.select,children:lp.map(X=>t.jsx("option",{children:X},X))}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[t.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),t.jsx("input",{type:"date",value:b.learned_date,onChange:X=>T(ne=>({...ne,learned_date:X.target.value})),style:{...Ae.select,fontSize:13}})]}),t.jsx("div",{style:{flex:1,minWidth:0},children:t.jsx("input",{value:b.intervals,onChange:X=>T(ne=>({...ne,intervals:X.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:Ae.input})})]}),t.jsx("div",{style:Ae.editHint,children:"Changing the date or intervals reschedules the reviews (completed steps are kept where they still apply)."}),t.jsxs("div",{style:Ae.addRow,children:[t.jsxs("button",{onClick:de,style:Ae.saveBtn,children:[t.jsx(He,{size:14})," Save plan"]}),t.jsxs("button",{onClick:()=>T(null),style:Ae.cancelBtn,children:[t.jsx(De,{size:14})," Cancel"]})]})]},V.id):t.jsxs("div",{style:Ae.topicCard,children:[t.jsxs("div",{style:Ae.topicHead,children:[t.jsx("span",{style:{...Ae.dot,background:G}}),t.jsx("span",{style:Ae.topicName,children:V.topic}),t.jsx("span",{style:Ae.topicPillar,children:V.pillar}),t.jsxs("span",{style:Ae.topicProgress,children:[ge,"/",V.reviews.length," done"]}),t.jsx("button",{onClick:()=>W(V),style:Ae.ghostBtn,title:"Edit plan",children:t.jsx(yt,{size:12})}),t.jsx("button",{onClick:()=>se(V.id,V.topic),style:Ae.ghostBtn,title:"Delete",children:t.jsx(De,{size:13})})]}),t.jsxs("div",{style:Ae.reviewDots,children:[V.reviews.map(X=>{X.due_date<e;const ne=X.due_date===e;return t.jsx("button",{onClick:()=>w(X.id),title:`Review ${X.stage} · ${X.due_date}${X.done?" · Done":""}`,style:{...Ae.reviewDot,background:X.done?G:ne?P:"var(--hover)",border:`2px solid ${X.done||ne?G:"var(--border)"}`,color:X.done?"#fff":G},children:X.stage},X.id)}),t.jsxs("span",{style:Ae.learnedDate,children:["Learned ",V.learned_date]})]})]},V.id)})]}),Q.length>0&&t.jsxs("div",{style:Ae.section,children:[t.jsxs("button",{onClick:()=>B(V=>!V),style:Ae.cementedToggle,children:[I?t.jsx(zo,{size:15}):t.jsx(sn,{size:15}),t.jsx(qr,{size:14,color:"#C9A227"}),"Cemented",t.jsx("span",{style:{...Ae.badge,background:"rgba(201,162,39,0.12)",color:"#8A6E1A"},children:Q.length})]}),I&&Q.map(V=>{var P;const G=((P=dn[V.pillar])==null?void 0:P.dot)||"#9A968C";return t.jsx("div",{style:{...Ae.topicCard,opacity:.75},children:t.jsxs("div",{style:Ae.topicHead,children:[t.jsx("span",{style:{...Ae.dot,background:G}}),t.jsx("span",{style:Ae.topicName,children:V.topic}),t.jsx("span",{style:Ae.topicPillar,children:V.pillar}),t.jsx(qr,{size:13,color:"#C9A227",style:{marginLeft:"auto"}})]})},V.id)})]}),t.jsxs("div",{style:Ae.calCard,children:[t.jsxs("div",{style:Ae.calHead,children:[t.jsx("button",{onClick:Re,style:Ae.calNav,children:"‹"}),t.jsxs("div",{style:Ae.calTitle,children:[mv(r,o)," · Review Calendar"]}),t.jsx("button",{onClick:pe,style:Ae.calNav,children:"›"})]}),t.jsx("div",{style:Ae.calDow,children:uv.map(V=>t.jsx("div",{style:Ae.calDowCell,children:V},V))}),t.jsxs("div",{style:Ae.calGrid,children:[Array.from({length:Y}).map((V,G)=>t.jsx("div",{},`p${G}`)),x.map((V,G)=>{const P=H[V]||[],ge=V===e,ce=V===f,We=V<e,X=ce?"#fff":ge?"var(--text)":We?"var(--text-2)":"var(--text-3)";return t.jsxs("button",{onClick:()=>h(ce?null:V),style:{...Ae.calDay,background:ce?"var(--accent-strong)":ge?"var(--hover)":"var(--surface)",borderColor:ge||ce?"var(--accent-strong)":"var(--border)"},children:[t.jsx("span",{style:{...Ae.calDayNum,color:X,fontWeight:ge||ce?700:600},children:G+1}),P.slice(0,2).map((ne,L)=>{var ie;return t.jsxs("span",{title:ne.topic,style:{...Ae.calItem,color:ce?"#fff":((ie=dn[ne.pillar])==null?void 0:ie.dot)||"var(--text-2)"},children:[L+1,". ",ne.topic]},L)}),P.length>2&&t.jsxs("span",{style:{...Ae.calMore,color:ce?"#fff":"var(--text-3)"},children:["+",P.length-2," more"]})]},V)})]}),f&&t.jsxs("div",{style:Ae.dayDetail,children:[t.jsxs("div",{style:Ae.dayDetailTitle,children:["Reviews for ",f]}),ae.length===0?t.jsx("div",{style:Ae.empty,children:"No reviews scheduled for this day."}):ae.map((V,G)=>{var ge,ce;const P=((ge=dn[V.pillar])==null?void 0:ge.dot)||"#9A968C";return t.jsxs("div",{style:{...Ae.reviewCard,borderLeft:`3px solid ${P}`},children:[t.jsx("button",{onClick:()=>w(V.id),style:{...Ae.checkbox,...V.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:V.done&&t.jsx(He,{size:12,color:"#fff",strokeWidth:3})}),t.jsxs("div",{children:[t.jsxs("div",{style:Ae.reviewTopic,children:[G+1,". ",V.topic]}),t.jsxs("span",{style:{...Ae.stageTag,background:((ce=dn[V.pillar])==null?void 0:ce.soft)||"rgba(0,0,0,0.05)",color:P},children:["Review ",V.stage,"/",V.total]})]})]},V.id)})]})]}),t.jsx(mr,{toasts:j,onUndo:N,onDismiss:J})]})}const Ae={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},addBox:{background:"var(--surface)",borderRadius:12,padding:16,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},addRow:{display:"flex",gap:8,alignItems:"center"},editHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",minWidth:0},select:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 10px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},section:{marginBottom:20},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},reviewCard:{display:"flex",alignItems:"center",gap:12,background:"var(--surface)",borderRadius:10,padding:"12px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},checkbox:{width:22,height:22,borderRadius:6,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,padding:0},reviewTopic:{fontSize:13.5,fontWeight:600,marginBottom:4},reviewMeta:{display:"flex",alignItems:"center",gap:8},stageTag:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10},missedTag:{fontSize:11,color:"#C2536B",fontWeight:600},topicCard:{background:"var(--surface)",borderRadius:12,padding:"13px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},topicHead:{display:"flex",alignItems:"center",gap:8,marginBottom:10},dot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},topicName:{fontSize:14,fontWeight:600,flex:1},topicPillar:{fontSize:11,color:"var(--text-3)",fontWeight:500},topicProgress:{fontSize:11,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:10},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},reviewDots:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},reviewDot:{width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",fontSize:11,fontWeight:700,padding:0},learnedDate:{fontSize:11,color:"var(--text-3)",marginLeft:"auto"},cementedToggle:{display:"flex",alignItems:"center",gap:8,border:"none",background:"none",cursor:"pointer",fontSize:13,fontWeight:700,color:"var(--text-2)",padding:"4px 0",fontFamily:"inherit",marginBottom:8},empty:{fontSize:13,color:"var(--text-3)",padding:"16px 0",textAlign:"center"},calCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{border:"none",background:"none",fontSize:20,cursor:"pointer",color:"var(--text-2)",padding:"0 6px",lineHeight:1},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4},calDay:{minHeight:62,border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,cursor:"pointer",fontFamily:"inherit",display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"flex-start",gap:1,position:"relative",padding:"3px 4px",overflow:"hidden",textAlign:"left"},calDayNum:{fontSize:11,lineHeight:1.1,marginBottom:1},calItem:{fontSize:8.5,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",lineHeight:1.3,textAlign:"left"},calMore:{fontSize:8,fontWeight:700,opacity:.85,lineHeight:1.2},dayDetail:{marginTop:16,paddingTop:16,borderTop:"1px solid var(--border)"},dayDetailTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10}},el=[{id:1,title:"Regular Habits",cards:[{id:1,text:"1. I always do everything I need to do, when I need to do it. "},{id:2,text:"2. I never argue or let my emotions work against me. "},{id:3,text:"3. I have a good memory. I easily and automatically remember any name or anything that is important to me. "},{id:4,text:"4. I eat only what I should. "},{id:5,text:"5. I am a good listener. I hear everything that is said. I am attentive, interested, and aware of everything that is going on around me. "},{id:6,text:"6. I have the courage to state my opinions. I take responsibility for myself and everything I say and do."},{id:7,text:"7. I never spend more than I earn. I am financially responsible, both for my present and for my future."},{id:8,text:"8. I set goals and I follow them. I set my sights, take the appropriate action, and achieve my goals."},{id:9,text:"9. I spend time with my family and my loved ones. I enjoy sharing their lives with mine and my life with theirs."}]},{id:2,title:"Motivational",cards:[{id:1,text:"1. I can do anything I believe I can do. I’ve got it and every day I get more of it. I have talent, skills, and ability"},{id:2,text:"2. I set goals and I reach them. I know what I want out of life. I go after it and I get it. "},{id:3,text:"3. People like me, and I feel good about myself. I have a sense of pride in whoa am and I believe in myself. Nothing seems to stop me. I have a lot of determination. "},{id:4,text:"4. I turn problems into advantages. I find possibilities in things that other people never give a chance."},{id:5,text:"5. I have a lot of energy––I am very alive. I enjoy life and I can tell it and so can others"},{id:6,text:"6. I keep myself up, looking ahead, and liking it. I know that I can accomplish anything I choose, and I refuse to let anything negative hold me back or stand in my way. I am not afraid of anything or anyone. I have strength, power, conviction, and confidence. "},{id:7,text:"7. I like challenges and I meet them head on, face to face––today especially. I am on top of the world and I’m going for it. "},{id:8,text:"8. I have a clear picture in my mind of what I want. I can see it in front of me. "},{id:9,text:"9. I know what I want and I know how to get it. I know that it’s all up to me and I know I can do it. Roadblocks don’t bother me. They just mean that I am alive and running, and I’m not going to stand still for anything. "},{id:10,text:"10. I trust myself I’ve got what it takes––plenty of it––and I know how to use it. "},{id:11,text:"11. Today, more than ever. Today I am unstoppable. I’ve got myself together and I’m getting more together every day. And today––look out world, here I come. "},{id:12,text:"12. Limitations? I don’t even recognize them as limitations. There is no challenge I can’t conquer; there is no wall I can’t climb over. "},{id:13,text:"13. There is no problem I can’t defeat or turn around and make it work for me. I stand tall. I am honest and sincere. I like to deal with people and they like me. "},{id:14,text:"14. I think well; I think clearly. I am organized; I am in control of myself, and everything about me. I call my shots and no one has to call them for me. I never blame anyone else for the circumstances of my life. "},{id:15,text:"15. I accept my failings and move past them as easily as I accept the rewards for my victories. I never demand perfection of myself, but I expect the very best of what I have to give––and that’s what I get. I never give myself excuses. "},{id:16,text:"16. I get things done on time and in the right way. Today I have the inner strength to do more than ever. I am an exceptional human being. "},{id:17,text:"17. My goals and my incredible belief in myself turn my goals into reality. I have the power to live my dreams."},{id:18,text:"18.  I believe in them like I believe in myself. And that belief is so strong that there is nothing that diminishes my undefeatable spirit. "}]},{id:3,title:"Organized planning",cards:[{id:1,text:"1. I am organized and in control of my life. I am in control of myself, my thoughts, my time, my actions, and my future. "},{id:2,text:"2. I know what to do and when to do it, and I do everything I need to do, when I need to do it. "},{id:3,text:"3. I program my mind to make the maximum use of my time. I am in control of my time and how to use it. I like being organized, efficient, and on top of things."},{id:4,text:"4. Controlling my time keeps me that way. "},{id:5,text:"5. I never waste time––I always “plan” time. And because I plan my time, I always have time to do the things I choose to do. "},{id:6,text:"6. Each day I become more organized and in control of all areas of my life––at home, at work, in my mind and in my thoughts, in everything that I do. "},{id:7,text:"7. I am very well organized. Each night I make a list of things I need to do the next day. I set my priorities and I follow them. "},{id:8,text:"8. I am always on time. I am always right where I need to be, exactly when I need to be there. "},{id:9,text:"9. Being on time is easy for me and the more I control my time and the more organized I become, the easier it is. "},{id:10,text:"10. I am in control of my feelings, my emotions, my attitudes, and my needs. I control them; they do not control me. "},{id:11,text:"11. I have the winning vote in the outcome of my own actions. And I choose to live my life by choice, not chance. Therefore, I take the time to take control."},{id:12,text:"12. I have an organized and orderly mind. Because I think in an organized way, I conduct my life in an organized manner. "},{id:13,text:"13. I think in the most positive and productive way at all times and in all things. The way I think is the way I live––and I think “right.” "},{id:14,text:"14. I am the director of my destiny. I know where I am going and I know why I am going there. My earthly life is in my hands and in my control. "},{id:15,text:"15. I control my goals and the achievement of my goals. I organize my goals by writing each of them down, along with the steps I need to reach them. One of the reasons for my success is that my goals are clearly defined and organized."},{id:16,text:"16. I am in complete control of what I think and how I think. Therefore, I choose to think only those thoughts which help me and which are of genuine benefit to me."}]},{id:4,title:"Solving Problems",cards:[{id:1,text:"1. I’m good at solving problems. I like challenges and I meet them head on. "},{id:2,text:"2. Problems are my teachers. They help me to learn and grow. Without them, I would be going nowhere. With them, I am moving forward in the direction of my own goals. "},{id:3,text:"3. There is no problem which I cannot conquer. I am strong in mind, body, and spirit. My will, my strength, and my determination are always greater than any problem I face."},{id:4,text:"4. When I meet a new problem, I do not see the problem as my enemy. I know that finding the solution to the problem will move me forward in my own personal growth."},{id:5,text:"5. Because I know that problems are a key ingredient in my spiritual and mental education and preparation, I recognize that all problems are important to me. "},{id:6,text:"6. I do not fear problems, I solve them. I do not ignore problems, I confront them. I do not avoid problems, I conquer them. "},{id:7,text:"7. I know that every problem holds within itself the keys to its own solution. Therefore, the better I understand the problem, the clearer I am able to see its solution. "},{id:8,text:"8. Having problems is not a problem for me. I am confident, self-assured, positive, and determined. I always know that I am going to overcome any problem I encounter––and I always do. "},{id:9,text:"9. I am good at breaking large obstacles down into smaller pieces that are easier to handle. And I never make any problem appear to be larger than it actually is. "},{id:10,text:"10. I never worry. I turn “worry time” into positive, constructive, “solution time.” I keep my mind alert and open to all solutions—and solutions come quickly and easily to me. "},{id:11,text:"11. I have learned to recognize that many problems carry with them benefits and potential opportunities which would not have presented themselves had the problem not occurred in the first place. "},{id:12,text:"12. I do not seek to live a life which is free from all problems. Instead, I choose to live a life of finding solutions and enjoying the benefits which those solutions create."},{id:13,text:"13. Challenge, conquer, solution, and win are words which I live by daily. Challenges are opportunities. Conquering them is the inevitable outcome. "},{id:14,text:"14. “Solutions” are the stepping stones to my success, and “Winning” is my way of life."}]},{id:5,title:"Self Esteem",cards:[{id:1,text:"1. I really am very special. I like who I am and I feel good about myself. "},{id:2,text:"2. Although I always work to improve myself and I get better every day, I like who I am today. And tomorrow, when I’m even better, I’ll like myself then, too. "},{id:3,text:"3. It’s true that there really is no one else like me in the entire world. There never was another me before, and there will never be another me again. "},{id:4,text:"4. I am unique––from the top of my head to the bottom of my feet. In some ways I may look and act and sound like some others––but I am not them. I am me."},{id:5,text:"5. I wanted to be somebody––and now I know I am I would rather be me than anyone else in the world. "},{id:6,text:"6. I like how I feel and I like how I think and I like how I do things. I approve of me and I approve of who I am."},{id:7,text:"7. I have many beautiful qualities about me. I have talents and skills and abilities. I even have talents that I don’t even know about yet. And I am discovering new talents inside myself all the time. "},{id:8,text:"8. I am positive. I am confident. I radiate good things. If you look closely, you can even see a glow around me."},{id:9,text:"9. I am full of life. I like life and I’m glad to be alive. I am a very special person, living at a very special time. "},{id:10,text:"10. I am intelligent. My mind is quick and alert and clever and fun. I think good thoughts, and my mind makes things work right for me. "},{id:11,text:"11. I have a lot of energy and enthusiasm and vitality. I am exciting and I really enjoy being me. "},{id:12,text:"12. I like to be around other people and other people like to be around me. People like to hear what I have to say and know what I have to think. "},{id:13,text:"13. I smile a lot. I am happy on the inside and I am happy on the outside. "},{id:14,text:"14. I am interested in many things. I appreciate all the blessings I have, and the things that I learn, and all the things I will learn today and tomorrow and forever––just as long as I am. "},{id:15,text:"15. I am warm, sincere, honest, and genuine. I am all of these things and more. And all of these things are me. I like who I am, and I’m glad to be me."}]},{id:6,title:"Self-Responsibility",cards:[{id:1,text:"1. I take full responsibility for everything about me––even the thoughts that I think. I am in control of the vast resources of my own mind."},{id:2,text:"2. I alone am responsible for what I do and what I tell myself about me. No one can share this responsibility with me. "},{id:3,text:"3. I also allow others to accept their responsibilities far themselves and I do not try to accept their responsibilities for them. "},{id:4,text:"4. I enjoy being responsible. It puts me in charge of being me––and that’s a challenge I enjoy. "},{id:5,text:"5. I allow no one else, at any time, to assume control or responsibility over my life or over anything that I do. My responsibility to others is an extension of my own responsibility to myself. "},{id:6,text:"6. I choose to leave nothing about me up to chance. When it comes to me––and anything in my life––I choose to CHOOSE. "},{id:7,text:"7. My choices are mine alone to make for myself. I do not, at any time, allow anyone else to make my choices for me. And I accept full responsibility for every choice and decision I make. "},{id:8,text:"8. I always meet all of the obligations which I accept. And I accept no obligations which I will not meet. "},{id:9,text:"9. I am trustworthy. I can be counted on. I have accepted winning responsibility for myself––and I always live up to the responsibilities I accept. "},{id:10,text:"10. There is no they on whom I lay the blame, or with whom I share my own personal responsibilities. I have learned the great secret of mastering my own destiny. I have learned that “they” is “me.” "},{id:11,text:"11. I have no need to make excuses and no one needs to carry my responsibility for me. I gladly carry my own weight––and I carry it well. "},{id:12,text:"12. Each day I acknowledge and accept the responsibility––not only for my own actions––but also for my emotions, my thoughts, and my attitude. "},{id:13,text:"13. I accept the responsibility for living my life in a way which creates my strengths, my happiness, my positive, healthy beliefs, and for my past, my present, and my future."}]},{id:7,title:"Freedom from worry",cards:[{id:1,text:"1. I never worry. Instead of worrying, I find solutions and I act on them. "},{id:2,text:"2. My mind is constantly in tune with the positive. It is bright, cheerful, enthusiastic, and full of good, positive thoughts and ideas. "},{id:3,text:"3. I am able to relax easily and comfortably in my body and in my mind. I am calm, confident, and self-assured. "},{id:4,text:"4. My mind is orderly and well-organized. I consciously choose what I think and I always choose those thoughts which are the most positive and beneficial for me. "},{id:5,text:"5. All of my thoughts create healthiness within me. My mind dwells only on those thoughts which create more harmony, balance, and well-being within me and in the world around me. "},{id:6,text:"6. I automatically, and always, think in a decisive and determined way. "},{id:7,text:"7. I am full of resolution and the absolute assurance of the best possible outcome in everything that I do. "},{id:8,text:"8. I choose to look at the world around me in the bright, healthy light of optimism and self-assurance. "},{id:9,text:"9. I do only those things which are best for me. I create the best within myself, I attract the best in others, and I find the best in the world around me. "},{id:10,text:"10. I willingly, and without fail, take care of the duties and obligations which I have accepted for myself."},{id:11,text:"11. I commit only to those responsibilities which I know I can fulfill. "},{id:12,text:"12. I focus the attention of my mind only on those things that I can do something about. If I cannot affect it or direct it––I accept it. "},{id:13,text:"13. I keep my mind too busy thinking good, healthy, positive, constructive, and productive thoughts to ever have any time for worry. "},{id:14,text:"14. I control the thoughts I choose. No thought, at any time, can dwell in my mind without my approval or permission. I never worry."}]},{id:8,title:"Eating Habits",cards:[{id:1,text:"1. I am in control of myself in every way––at all times and in all situations. "},{id:2,text:"2. Each time I sit down to eat I reaffirm my determination to achieve my goal. By eating right, and never giving in, I am reaching the weight I want. "},{id:3,text:"3. Whether eating in or eating out, I really enjoy eating less. "},{id:4,text:"4. I never feel the need to finish the food in front of me. I eat only what I should––and never one bite more. "},{id:5,text:"5. One way to weight-loss that’s easy and works, is less food on my plate, and less on my fork. "},{id:6,text:'6. By ordering less when I eat out, and by serving myself smaller portions at home, I keep myself aware of the importance of staying with my goal––each and every day. “Less on my plate means less on my waist."'},{id:7,text:"7. When I sit down to eat, at no time do I allow anyone else to influence, tempt, or discourage me in any negative way."},{id:8,text:"8. What I eat, and the goals I reach, are up to me. And I give no one the right to hinder or control my success."},{id:9,text:"9. Although others may benefit from my success, I. am achieving my weight-loss goals for my own personal reasons––for myself, my life, my future, and my own personal well-being."},{id:10,text:"10. I am never, at any time, tempted to take one bite more than I should. I am strong, I am capable of reaching my goal, and I am doing it."},{id:11,text:"11. Being in situations which put a lot of food in front of me is not a problem to me now. I simply say “No” to the food and “Yes” to my success."},{id:12,text:"12. I enjoy sitting down to eat. Each time I do I conquer my past, and I create a trimmer, happier, more self-confident future in front of me. "},{id:13,text:"13. When I sit down to eat, I do not need someone else to remind me of my goal, or to keep me from eating something I should not. I take full responsibility for myself, and no one else has to do it for me. "},{id:14,text:"14. Controlling my weight, and my appetite, is easy for me now. I enjoy smaller portions, smaller bites, and a slower, healthier, more relaxed way of eating. "},{id:15,text:"15. I have set my goal and I am staying with it. I have turned mealtime into “achievement time.”"}]}],ap=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#3A7CA5","#4C9A6B"],rd=e=>ap[e%ap.length],yv=e=>e+"1A",Di="affirmation_favs",vv="anvil_affirmation_favs",dp=()=>{try{return JSON.parse(localStorage.getItem(Di)||localStorage.getItem(vv)||"[]")}catch{return[]}};function jv(){const[e,r]=g.useState(0),[n,o]=g.useState(0),[i,s]=g.useState(()=>new Set(dp())),l=g.useRef(!1);g.useEffect(()=>{let p=!1;return E.getSetting(Di).then(c=>{if(!p){if(Array.isArray(c==null?void 0:c.value))s(new Set(c.value));else{const b=dp();b.length&&E.setSetting(Di,b).catch(()=>{}),s(new Set(b))}l.current=!0}}).catch(()=>{l.current=!0}),()=>{p=!0}},[]),g.useEffect(()=>{localStorage.setItem(Di,JSON.stringify([...i])),l.current&&E.setSetting(Di,[...i]).catch(()=>{})},[i]);const a=(p,c)=>`${p}#${c.id}`,d=e==="FAV"?el.flatMap((p,c)=>p.cards.filter(b=>i.has(a(p.title,b))).map(b=>({...b,color:rd(c),title:p.title}))):el[e].cards.map(p=>({...p,color:rd(e),title:el[e].title})),u=d.length,m=Math.min(n,Math.max(0,u-1)),f=d[m],h=p=>{r(p),o(0)},I=g.useCallback(()=>o(p=>Math.max(0,p-1)),[]),B=g.useCallback(()=>o(p=>Math.min(u-1,p+1)),[u]);g.useEffect(()=>{const p=c=>{c.key==="ArrowLeft"&&I(),c.key==="ArrowRight"&&B()};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[I,B]);const k=p=>s(c=>{const b=new Set(c);return b.has(p)?b.delete(p):b.add(p),b}),C=f?f.color:"#8268B0";return t.jsxs("div",{style:wt.page,children:[t.jsxs("div",{style:wt.head,children:[t.jsx("div",{style:wt.eyebrow,children:"Anvil · Affirmations"}),t.jsx("h1",{style:wt.h1,children:"Affirmations"}),t.jsx("div",{style:wt.subhead,children:"One at a time — read it, mean it."})]}),t.jsxs("div",{style:wt.filterBar,children:[el.map((p,c)=>{const b=e===c,T=rd(c);return t.jsxs("button",{onClick:()=>h(c),style:{...wt.chip,...b?{background:T,color:"#fff",borderColor:T}:{}},children:[t.jsx("span",{style:{...wt.catDot,background:b?"#fff":T}})," ",p.title," ",t.jsx("span",{style:wt.chipCount,children:p.cards.length})]},p.title)}),t.jsxs("button",{onClick:()=>h("FAV"),style:{...wt.chip,...e==="FAV"?{background:"#C9A227",color:"#fff",borderColor:"#C9A227"}:{}},children:[t.jsx(Yi,{size:12,fill:e==="FAV"?"#fff":"none"})," Favorites ",t.jsx("span",{style:wt.chipCount,children:i.size})]})]}),u===0?t.jsxs("div",{style:wt.empty,children:[t.jsx(Yi,{size:22,color:"#C3BFB5"}),t.jsx("div",{children:"No favorites yet — tap the star on a card to save it here."})]}):t.jsxs("div",{style:wt.viewer,children:[t.jsxs("div",{style:{...wt.card,borderTop:`4px solid ${C}`},children:[t.jsx("div",{style:{...wt.cardCat,color:C,background:yv(C)},children:f.title}),t.jsx("button",{onClick:()=>k(a(f.title,f)),style:{...wt.favBtn,color:i.has(a(f.title,f))?"#C9A227":"#C3BFB5"},title:"Favorite",children:t.jsx(Yi,{size:20,fill:i.has(a(f.title,f))?"#C9A227":"none"})}),t.jsx(cc,{size:30,color:C,style:{opacity:.25}}),t.jsx("p",{style:wt.cardText,children:f.text.trim()})]}),t.jsxs("div",{style:wt.navRow,children:[t.jsxs("button",{onClick:I,disabled:m===0,style:{...wt.navBtn,...m===0?wt.navBtnDisabled:{}},children:[t.jsx(Tn,{size:18})," Back"]}),t.jsxs("span",{style:{...wt.counter,color:C},children:[m+1," ",t.jsxs("span",{style:wt.counterTotal,children:["/ ",u]})]}),t.jsxs("button",{onClick:B,disabled:m===u-1,style:{...wt.navBtn,...m===u-1?wt.navBtnDisabled:{}},children:["Next ",t.jsx(sn,{size:18})]})]}),t.jsx("div",{style:wt.dots,children:d.map((p,c)=>t.jsx("button",{onClick:()=>o(c),style:{...wt.dot,...c===m?{background:C,transform:"scale(1.5)"}:{}},title:`${c+1}`},c))})]})]})}const wt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:22},chip:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipCount:{fontSize:11,fontWeight:700,opacity:.7},catDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},empty:{display:"flex",flexDirection:"column",alignItems:"center",gap:10,fontSize:13.5,color:"var(--text-3)",padding:"56px 12px",textAlign:"center",background:"var(--surface)",borderRadius:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},viewer:{display:"flex",flexDirection:"column",alignItems:"center"},card:{position:"relative",background:"var(--surface)",borderRadius:16,padding:"40px 32px 44px",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",width:"100%",minHeight:240,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",boxSizing:"border-box"},cardCat:{position:"absolute",top:16,left:16,fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:12,textTransform:"uppercase",letterSpacing:"0.04em"},favBtn:{position:"absolute",top:14,right:14,border:"none",background:"none",cursor:"pointer",padding:4,display:"grid",placeItems:"center"},cardText:{fontSize:21,lineHeight:1.55,margin:"14px 0 0",fontWeight:500,color:"var(--text)",fontFamily:"'Fraunces',Georgia,serif",maxWidth:560},navRow:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",maxWidth:420,marginTop:22},navBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},counter:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},counterTotal:{fontSize:13,fontWeight:600,color:"var(--text-3)"},dots:{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center",marginTop:20,maxWidth:480},dot:{width:7,height:7,borderRadius:"50%",border:"none",background:"var(--border)",cursor:"pointer",padding:0,transition:"transform 0.12s"}},kv=[{id:"day",label:"Day"},{id:"week",label:"Week"},{id:"month",label:"Month"},{id:"year",label:"Year"}],un=e=>e>=60?`${Math.floor(e/60)}h ${e%60}m`:`${e}m`,wv=e=>{const r=e<12?"am":"pm",n=e%12===0?12:e%12;return`${String(n).padStart(2,"0")} ${r}`};function Sv(e){const r=e<=60?10:e<=120?20:e<=300?60:120,n=Math.max(60,Math.ceil((e||1)/r)*r),o=[];for(let i=0;i<=n;i+=r)o.push(i);return{max:n,ticks:o}}const Ih=e=>{const r=new Date(e);return r.setHours(0,0,0,0),r},Cv=e=>{const r=Ih(e),n=(r.getDay()+6)%7;return r.setDate(r.getDate()-n),r},zv=e=>new Date(e.getFullYear(),e.getMonth(),1),Tv=e=>new Date(e.getFullYear(),0,1);function Iv(e,r){if(e==="day"){const i=Ih(r);return{start:i,end:new Date(+i+864e5),prev:new Date(+i-864e5),prev2:new Date(+i-2*864e5)}}if(e==="week"){const i=Cv(r);return{start:i,end:new Date(+i+7*864e5),prev:new Date(+i-7*864e5),prev2:new Date(+i-14*864e5)}}if(e==="month"){const i=zv(r),s=r.getFullYear(),l=r.getMonth();return{start:i,end:new Date(s,l+1,1),prev:new Date(s,l-1,1),prev2:new Date(s,l-2,1)}}const n=r.getFullYear();return{start:Tv(r),end:new Date(n+1,0,1),prev:new Date(n-1,0,1),prev2:new Date(n-2,0,1)}}function Bv({sessions:e=[],onBack:r}){const[n,o]=g.useState("day"),i=new Date,{start:s,end:l,prev:a,prev2:d}=Iv(n,i),u=pe=>new Date(pe.started_at||pe.created_at),m=e.filter(pe=>pe.completed),f=(pe,je,Q)=>{const x=u(pe);return x>=je&&x<Q},h=(pe,je)=>m.filter(Q=>f(Q,pe,je)).reduce((Q,x)=>Q+(x.actual_min||0),0),I=m.filter(pe=>f(pe,s,l)),B=I.reduce((pe,je)=>pe+(je.actual_min||0),0),k=h(a,s),C=h(d,a),p=I.length,c=Array(24).fill(0);I.forEach(pe=>{c[u(pe).getHours()]+=pe.actual_min||0});const b=Math.max(...c,0),T=Sv(b),y={};I.forEach(pe=>{const je=tr[pe.tree]?pe.tree:vn;y[je]=(y[je]||0)+(pe.actual_min||0)});const w=Object.entries(y).map(([pe,je])=>({name:tr[pe].label,min:je,color:tr[pe].leaf})).sort((pe,je)=>je.min-pe.min),D=k>0?Math.round((B-k)/k*100):B>0?100:0,S=D>0?ni:D<0?Yn:gh,j=D>0?"#4C9A6B":D<0?"#C2536B":"#9A968C",N={day:"yesterday",week:"last week",month:"last month",year:"last year"}[n],J={day:"2 days ago",week:"2 weeks ago",month:"2 months ago",year:"2 years ago"}[n],se=54,W=22,de=2*Math.PI*se;let Re=0;return t.jsxs("div",{style:Pe.page,children:[t.jsxs("div",{style:Pe.topbar,children:[t.jsxs("button",{onClick:r,style:Pe.back,children:[t.jsx(nh,{size:18})," Grove"]}),t.jsx("h1",{style:Pe.h1,children:"Insights"}),t.jsx("div",{style:{width:76}})]}),t.jsx("div",{style:Pe.rangeBar,children:kv.map(pe=>t.jsx("button",{onClick:()=>o(pe.id),style:{...Pe.rangeBtn,...n===pe.id?Pe.rangeOn:{}},children:pe.label},pe.id))}),t.jsxs("div",{style:Pe.headline,children:[t.jsxs("div",{style:Pe.bigStat,children:[t.jsx("div",{style:Pe.bigVal,children:un(B)}),t.jsxs("div",{style:Pe.bigLbl,children:["Focused this ",n]})]}),t.jsxs("div",{style:Pe.bigStat,children:[t.jsx("div",{style:Pe.bigVal,children:p}),t.jsx("div",{style:Pe.bigLbl,children:"Trees"})]})]}),t.jsxs("div",{style:Pe.card,children:[t.jsxs("div",{style:Pe.cardHead,children:[t.jsxs("div",{style:Pe.cardTitle,children:["Your forest this ",n]}),t.jsx("div",{style:Pe.cardHint,children:"Each tree is a completed session — bigger means longer focus"})]}),t.jsx(Fv,{sessions:I}),t.jsxs("div",{style:Pe.forestNumber,children:[p," ",p===1?"tree":"trees"," · ",un(B)," focused"]})]}),t.jsx(nd,{title:"Focus distribution",hint:"Minutes focused at each time of day",children:b===0?t.jsx(cp,{}):t.jsx(Ev,{hours:c,axis:T})}),t.jsx(nd,{title:"Pillar distribution",hint:"How your focus splits across the five trees",children:w.length===0?t.jsx(cp,{}):t.jsxs("div",{style:Pe.donutWrap,children:[t.jsxs("svg",{viewBox:"0 0 140 140",width:"150",height:"150",style:{flexShrink:0},children:[w.map(pe=>{const je=pe.min/(B||1)*de,Q=t.jsx("circle",{cx:"70",cy:"70",r:se,fill:"none",stroke:pe.color,strokeWidth:W,strokeDasharray:`${je} ${de-je}`,strokeDashoffset:-Re,transform:"rotate(-90 70 70)"},pe.name);return Re+=je,Q}),t.jsx("text",{x:"70",y:"66",textAnchor:"middle",style:Pe.donutCenterTop,children:un(B)}),t.jsx("text",{x:"70",y:"82",textAnchor:"middle",style:Pe.donutCenterSub,children:"total"})]}),t.jsx("div",{style:Pe.legend,children:w.map(pe=>t.jsxs("div",{style:Pe.legendRow,children:[t.jsx("span",{style:{...Pe.legendDot,background:pe.color}}),t.jsx("span",{style:Pe.legendName,children:pe.name}),t.jsxs("span",{style:Pe.legendVal,children:[un(pe.min)," · ",Math.round(pe.min/(B||1)*100),"%"]})]},pe.name))})]})}),t.jsxs(nd,{title:"Focus trend",hint:`This ${n} vs the previous two`,children:[t.jsxs("div",{style:Pe.trend3,children:[t.jsxs("div",{style:Pe.trendCol,children:[t.jsx("div",{style:Pe.trendVal,children:un(B)}),t.jsxs("div",{style:Pe.trendLbl,children:["This ",n]})]}),t.jsxs("div",{style:Pe.trendCol,children:[t.jsx("div",{style:{...Pe.trendVal,color:"var(--text-2)"},children:un(k)}),t.jsx("div",{style:Pe.trendLbl,children:N})]}),t.jsxs("div",{style:Pe.trendCol,children:[t.jsx("div",{style:{...Pe.trendVal,color:"var(--text-3)"},children:un(C)}),t.jsx("div",{style:Pe.trendLbl,children:J})]})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:t.jsxs("div",{style:{...Pe.trendBadge,color:j,background:j+"1A"},children:[t.jsx(S,{size:15})," ",D>0?"+":"",D,"% vs ",N]})}),t.jsx(Av,{items:[{label:`This ${n}`,value:B,color:"#4C9A6B"},{label:N,value:k,color:"var(--text-3)"},{label:J,value:C,color:"var(--text-3)"}]})]})]})}const Rv=e=>e===0?"12a":e<12?`${e}a`:e===12?"12p":`${e-12}p`;function Ev({hours:e,axis:r}){return t.jsxs("div",{children:[t.jsxs("div",{style:Pe.vcPlot,children:[r.ticks.map(n=>t.jsxs("div",{style:{...Pe.vcGridRow,bottom:`${n/r.max*100}%`},children:[t.jsx("span",{style:Pe.vcYLabel,children:n}),t.jsx("div",{style:Pe.vcGridLine})]},n)),t.jsx("div",{style:Pe.vcBars,children:e.map((n,o)=>t.jsx("div",{style:Pe.vcCell,title:`${wv(o)} · ${n} min`,children:t.jsx("div",{style:{...Pe.vcBar,height:n>0?`max(3px, ${n/r.max*100}%)`:0}})},o))})]}),t.jsx("div",{style:Pe.vcXAxis,children:e.map((n,o)=>t.jsx("div",{style:Pe.vcXCell,children:o%3===0?Rv(o):""},o))}),t.jsx("div",{style:Pe.vcYTitle,children:"minutes focused, by hour of day"})]})}function Fv({sessions:e}){if(!e.length)return t.jsx("div",{style:Pe.sceneEmpty,children:"No trees yet this period. 🌱"});const n=e.slice(0,80),o=e.length-n.length,i=s=>Math.round(Math.max(40,Math.min(88,40+(s||0)*.6)));return t.jsxs("div",{children:[t.jsx("div",{style:Pe.scene,children:n.map(s=>t.jsx("div",{style:Pe.sceneTree,title:`${s.label||"Focus"} · ${un(s.actual_min||s.duration_min)}`,children:t.jsx(Rg,{species:s.tree,progress:1,size:i(s.actual_min||s.duration_min)})},s.id))}),o>0&&t.jsxs("div",{style:Pe.overflow,children:["+",o," more trees"]})]})}function nd({title:e,hint:r,children:n}){return t.jsxs("div",{style:Pe.card,children:[t.jsxs("div",{style:Pe.cardHead,children:[t.jsx("div",{style:Pe.cardTitle,children:e}),r&&t.jsx("div",{style:Pe.cardHint,children:r})]}),n]})}function cp(){return t.jsx("div",{style:Pe.empty,children:"No focus sessions in this period yet. 🌱"})}function Av({items:e}){const r=Math.max(1,...e.map(n=>n.value));return t.jsx("div",{style:Pe.tbWrap,children:e.map(n=>t.jsxs("div",{style:Pe.tbRow,children:[t.jsx("div",{style:Pe.tbLbl,children:n.label}),t.jsx("div",{style:Pe.tbTrack,children:t.jsx("div",{style:{...Pe.tbBar,width:`${n.value/r*100}%`,background:n.color}})}),t.jsx("div",{style:Pe.tbVal,children:un(n.value)})]},n.label))})}const Pe={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"20px 16px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:720,margin:"0 auto"},topbar:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},back:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},h1:{fontSize:20,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},rangeBar:{display:"flex",gap:6,background:"var(--surface)",padding:5,borderRadius:12,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},rangeBtn:{flex:1,border:"none",background:"none",padding:"9px 0",borderRadius:8,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},rangeOn:{background:"var(--accent-strong)",color:"#fff"},headline:{display:"flex",gap:12,marginBottom:16},bigStat:{flex:1,background:"var(--surface)",borderRadius:14,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},bigVal:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em"},bigLbl:{fontSize:12,color:"var(--text-3)",marginTop:3,fontWeight:500},card:{background:"var(--surface)",borderRadius:16,padding:"18px 18px 20px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},cardHead:{marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardHint:{fontSize:12,color:"var(--text-3)",marginTop:2},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"24px 0"},scene:{display:"flex",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"center",gap:"0 2px",padding:"14px 8px 6px",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,minHeight:110,border:"1px solid var(--border)"},sceneTree:{lineHeight:0},sceneEmpty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"34px 0",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,border:"1px solid var(--border)"},overflow:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",marginTop:6,fontWeight:600},forestNumber:{textAlign:"center",marginTop:12,fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},vcPlot:{position:"relative",height:180,paddingLeft:30},vcGridRow:{position:"absolute",left:0,right:0,display:"flex",alignItems:"center",height:0},vcYLabel:{width:26,marginRight:4,textAlign:"right",fontSize:9,color:"var(--text-3)",fontWeight:600,flexShrink:0},vcGridLine:{flex:1,height:1,background:"#EEEBE4"},vcBars:{position:"absolute",left:30,right:0,top:0,bottom:0,display:"flex",alignItems:"flex-end",gap:1},vcCell:{flex:1,height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"center"},vcBar:{width:"72%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",transition:"height 0.3s"},vcXAxis:{display:"flex",marginLeft:30,marginTop:4},vcXCell:{flex:1,textAlign:"center",fontSize:8.5,color:"var(--text-3)",fontWeight:600,overflow:"hidden"},vcYTitle:{textAlign:"center",fontSize:9.5,color:"var(--text-3)",marginTop:6,letterSpacing:"0.06em",textTransform:"uppercase",fontWeight:600},donutWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap",justifyContent:"center"},donutCenterTop:{fontSize:16,fontWeight:800,fill:"var(--text)",fontFamily:"'Fraunces',Georgia,serif"},donutCenterSub:{fontSize:9,fill:"#9A968C",textTransform:"uppercase",letterSpacing:"0.08em"},legend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:11,height:11,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},legendVal:{fontSize:12,color:"var(--text-3)",fontWeight:600,flexShrink:0},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:56,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},Dv=[15,30,45,60,90],od="anvil_grove_active",gp=e=>`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`,Jl=e=>e>=60?`${Math.floor(e/60)}h ${e%60}m`:`${e}m`;function Wv(){const[e,r]=g.useState("timer"),[n,o]=g.useState("idle"),[i,s]=g.useState(15),[l,a]=g.useState(!1),[d,u]=g.useState(""),[m,f]=g.useState(vn),[h,I]=g.useState(()=>localStorage.getItem("anvil_grove_deepfocus")!=="0"),[B,k]=g.useState(15*60),[C,p]=g.useState({sessions:[],stats:null}),c=g.useRef(null),b=g.useRef(null),T=g.useRef(!1),y=g.useCallback(async()=>{try{p(await E.getFocus())}catch{}},[]),w=g.useCallback(async(H,ae)=>{if(!T.current){T.current=!0,localStorage.removeItem(od);try{await E.createFocus({label:d.trim()||null,tree:m,duration_min:i,actual_min:ae,completed:H,started_at:b.current,ended_at:new Date().toISOString()})}catch{}y()}},[d,m,i,y]),D=g.useCallback(()=>{if(n!=="running")return;const H=b.current?Math.round((Date.now()-new Date(b.current).getTime())/6e4):0;o("failed"),w(!1,Math.max(0,Math.min(i,H)))},[n,i,w]),S=g.useCallback(()=>{o("done"),k(0),w(!0,i)},[i,w]);g.useEffect(()=>{y();const H=JSON.parse(localStorage.getItem(od)||"null");if(H&&H.endTime){const ae=Math.round((H.endTime-Date.now())/1e3);s(H.duration),u(H.label||""),f(H.tree||"oak"),c.current=H.endTime,b.current=H.startedAt,ae>0?(k(ae),o("running")):(o("done"),T.current=!1,w(!0,H.duration))}},[]),g.useEffect(()=>{if(n!=="running")return;const H=()=>{const V=Math.round((c.current-Date.now())/1e3);if(V<=0){S();return}k(V)};H();const ae=setInterval(H,250);return()=>clearInterval(ae)},[n,S]),g.useEffect(()=>{if(n!=="running"||!h)return;const H=()=>{document.hidden&&D()};return document.addEventListener("visibilitychange",H),()=>document.removeEventListener("visibilitychange",H)},[n,h,D]),g.useEffect(()=>{const H=()=>{!document.hidden&&n!=="running"&&y()};window.addEventListener("focus",H),document.addEventListener("visibilitychange",H);const ae=setInterval(H,6e4);return()=>{window.removeEventListener("focus",H),document.removeEventListener("visibilitychange",H),clearInterval(ae)}},[y,n]);const j=()=>I(H=>{const ae=!H;return localStorage.setItem("anvil_grove_deepfocus",ae?"1":"0"),ae}),N=()=>{T.current=!1,b.current=new Date().toISOString(),c.current=Date.now()+i*60*1e3,localStorage.setItem(od,JSON.stringify({endTime:c.current,duration:i,label:d,tree:m,startedAt:b.current})),k(i*60),o("running")},J=()=>{o("idle"),k(i*60)},se=H=>{a(!1),s(H),k(H*60)},W=()=>{l||(a(!0),s(5),k(5*60))},de=H=>{if(a(!0),H===""){s(0),k(0);return}const ae=Math.max(1,Math.min(600,parseInt(H,10)||0));s(ae),k(ae*60)},Re=i*60,pe=n==="running"?1-B/Re:n==="done"?1:0,je=130,Q=2*Math.PI*je,x=Q*(1-(n==="running"?pe:n==="done"?1:0)),Y=C.stats;return e==="stats"?t.jsx(Bv,{sessions:C.sessions,onBack:()=>r("timer")}):t.jsxs("div",{style:Ye.page,children:[t.jsxs("div",{style:Ye.head,children:[t.jsx("div",{style:Ye.eyebrow,children:"Anvil · Grove"}),t.jsx("h1",{style:Ye.h1,children:"Grove"}),t.jsx("div",{style:Ye.subhead,children:"Plant a tree, stay focused, grow your grove."}),t.jsxs("button",{onClick:()=>r("stats"),style:Ye.insightsBtn,disabled:n==="running",children:[t.jsx(Fy,{size:15})," Insights"]})]}),Y&&t.jsxs("div",{style:Ye.statRow,children:[t.jsx(tl,{label:"Today",value:Jl(Y.today_minutes)}),t.jsx(tl,{label:"Trees",value:Y.trees}),t.jsx(tl,{label:"Streak",value:`${Y.streak}d`}),t.jsx(tl,{label:"Success",value:`${Y.success_rate}%`})]}),t.jsxs("div",{style:Ye.stage,children:[t.jsxs("div",{style:Ye.ringWrap,children:[t.jsxs("svg",{width:"300",height:"300",viewBox:"0 0 300 300",style:{position:"absolute",inset:0},children:[t.jsx("circle",{cx:"150",cy:"150",r:je,fill:"none",stroke:"var(--border)",strokeWidth:"10"}),t.jsx("circle",{cx:"150",cy:"150",r:je,fill:"none",stroke:n==="failed"?"#C2536B":"#4C9A6B",strokeWidth:"10",strokeLinecap:"round",strokeDasharray:Q,strokeDashoffset:x,transform:"rotate(-90 150 150)",style:{transition:"stroke-dashoffset 0.4s linear"}})]}),t.jsx("div",{style:Ye.ringInner,children:t.jsx(Rg,{species:m,progress:n==="idle"?0:pe,withered:n==="failed",size:170})})]}),n==="idle"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:Ye.timeBig,children:gp(i*60)}),t.jsxs("div",{style:Ye.controls,children:[t.jsxs("div",{style:Ye.chips,children:[Dv.map(H=>t.jsxs("button",{onClick:()=>se(H),style:{...Ye.chip,...!l&&i===H?Ye.chipOn:{}},children:[H,"m"]},H)),t.jsx("button",{onClick:W,style:{...Ye.chip,...l?Ye.chipOn:{}},children:"Custom"})]}),l&&t.jsxs("div",{style:Ye.customRow,children:[t.jsx("input",{type:"number",min:"1",max:"600",inputMode:"numeric",autoFocus:!0,value:i||"",onChange:H=>de(H.target.value),placeholder:"e.g. 50",style:Ye.customInput}),t.jsx("span",{style:Ye.customUnit,children:"minutes"})]}),t.jsx("input",{value:d,onChange:H=>u(H.target.value),placeholder:"What are you focusing on? (optional)",style:Ye.input,maxLength:60}),t.jsx("div",{style:Ye.treePick,children:Object.entries(tr).map(([H,ae])=>t.jsxs("button",{onClick:()=>f(H),title:ae.label,style:{...Ye.treeBtn,...m===H?{borderColor:ae.leaf,background:ae.leaf+"1A"}:{}},children:[t.jsx("span",{style:{...Ye.treeDot,background:ae.leaf}}),ae.label]},H))}),t.jsxs("button",{onClick:j,style:Ye.toggleRow,children:[t.jsxs("div",{style:{textAlign:"left"},children:[t.jsx("div",{style:Ye.toggleTitle,children:"Deep Focus"}),t.jsx("div",{style:Ye.toggleHint,children:h?"Leaving the app kills the tree":"Tree survives until you give up"})]}),t.jsx("div",{style:{...Ye.switch,...h?Ye.switchOn:{}},children:t.jsx("div",{style:{...Ye.knob,...h?Ye.knobOn:{}}})})]}),t.jsx("button",{onClick:N,disabled:i<1,style:{...Ye.plantBtn,...i<1?{opacity:.5,cursor:"not-allowed"}:{}},children:"Plant tree"})]})]}),n==="running"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:Ye.timeBig,children:gp(B)}),t.jsx("div",{style:Ye.focusLabel,children:d.trim()||"Focusing…"}),t.jsx("div",{style:h?Ye.warn:Ye.warnSoft,children:h?"⚠ Deep Focus on — leaving this app will kill your tree.":"🌿 Relaxed mode — only Give up ends this session."}),t.jsx("button",{onClick:D,style:Ye.giveUp,children:"Give up"})]}),n==="done"&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:Ye.resultTitle,children:["🌳 You grew a ",tr[m].label," tree!"]}),t.jsxs("div",{style:Ye.resultSub,children:[Jl(i)," of focus added to your grove."]}),t.jsx("button",{onClick:J,style:Ye.plantBtn,children:"Plant another"})]}),n==="failed"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{...Ye.resultTitle,color:"#C2536B"},children:"Your tree withered."}),t.jsx("div",{style:Ye.resultSub,children:"You left before the timer finished. Try again?"}),t.jsx("button",{onClick:J,style:Ye.plantBtn,children:"Try again"})]})]}),t.jsx(Mv,{sessions:C.sessions,onDelete:async H=>{await E.deleteFocus(H),y()}})]})}function tl({label:e,value:r}){return t.jsxs("div",{style:Ye.stat,children:[t.jsx("div",{style:Ye.statValue,children:r}),t.jsx("div",{style:Ye.statLabel,children:e})]})}function Mv({sessions:e,onDelete:r}){const n=e.filter(l=>l.completed);if(n.length===0)return t.jsx("div",{style:Ye.forestEmpty,children:"Your grove is empty. Plant your first tree above. 🌱"});const o={};for(const l of n){const a=(l.started_at||l.created_at||"").slice(0,10);(o[a]||(o[a]=[])).push(l)}const i=Object.keys(o).sort().reverse(),s=l=>{const a=new Date().toISOString().slice(0,10);return l===a?"Today":new Date(l+"T00:00").toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})};return t.jsxs("div",{style:Ye.forest,children:[t.jsxs("div",{style:Ye.forestHead,children:["Your Grove · ",n.length," trees"]}),i.map(l=>t.jsxs("div",{style:Ye.daySection,children:[t.jsxs("div",{style:Ye.dayLabel,children:[s(l)," · ",o[l].length]}),t.jsx("div",{style:Ye.treeGrid,children:o[l].map(a=>t.jsxs("div",{style:Ye.treeCard,title:`${a.label||"Focus"} · ${Jl(a.actual_min)}`,onDoubleClick:()=>r(a.id),children:[t.jsx(S0,{species:a.tree}),t.jsx("div",{style:Ye.treeCardMin,children:Jl(a.actual_min||a.duration_min)}),a.label&&t.jsx("div",{style:Ye.treeCardLabel,children:a.label})]},a.id))})]},l)),t.jsx("div",{style:Ye.forestHint,children:"Double-tap a tree to remove it."})]})}const Ye={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:820,margin:"0 auto"},head:{marginBottom:16,textAlign:"center"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},insightsBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginTop:12},statRow:{display:"flex",gap:10,justifyContent:"center",marginBottom:18,flexWrap:"wrap"},stat:{background:"var(--surface)",borderRadius:12,padding:"10px 18px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",minWidth:78},statValue:{fontSize:19,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},statLabel:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},stage:{background:"var(--surface)",borderRadius:18,padding:"28px 24px 32px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",display:"flex",flexDirection:"column",alignItems:"center",marginBottom:26},ringWrap:{position:"relative",width:300,height:300,display:"grid",placeItems:"center"},ringInner:{position:"relative",zIndex:1,display:"grid",placeItems:"center"},timeBig:{fontSize:40,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:6},focusLabel:{fontSize:14,color:"var(--text-2)",marginTop:2,fontWeight:500},warn:{fontSize:12,color:"#C2773B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},warnSoft:{fontSize:12,color:"#4C9A6B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},toggleRow:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:12,padding:"10px 14px",cursor:"pointer",fontFamily:"inherit",width:"100%"},toggleTitle:{fontSize:14,fontWeight:700,color:"var(--text)"},toggleHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},switch:{width:42,height:24,borderRadius:12,background:"var(--border)",flexShrink:0,padding:2,transition:"background 0.18s",boxSizing:"border-box"},switchOn:{background:"#4C9A6B"},knob:{width:20,height:20,borderRadius:"50%",background:"var(--surface)",boxShadow:"0 1px 2px rgba(0,0,0,0.2)",transform:"translateX(0)",transition:"transform 0.18s"},knobOn:{transform:"translateX(18px)"},controls:{width:"100%",maxWidth:380,display:"flex",flexDirection:"column",gap:14,marginTop:8},chips:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},chip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},customRow:{display:"flex",alignItems:"center",justifyContent:"center",gap:8},customInput:{border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:15,fontWeight:700,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center",width:100},customUnit:{fontSize:13,color:"var(--text-3)",fontWeight:600},input:{border:"1px solid var(--border)",borderRadius:10,padding:"11px 13px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center"},treePick:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},treeBtn:{display:"flex",alignItems:"center",gap:6,border:"1.5px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},treeDot:{width:10,height:10,borderRadius:"50%"},plantBtn:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},giveUp:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",padding:"11px 26px",borderRadius:11,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:18},resultTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginTop:14,textAlign:"center"},resultSub:{fontSize:13.5,color:"var(--text-3)",marginTop:6,marginBottom:18,textAlign:"center"},forest:{background:"var(--surface)",borderRadius:16,padding:"20px 22px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},forestHead:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},forestEmpty:{background:"var(--surface)",borderRadius:16,padding:"40px 20px",textAlign:"center",color:"var(--text-3)",fontSize:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},daySection:{marginBottom:16},dayLabel:{fontSize:12,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:8},treeGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(80px,1fr))",gap:8},treeCard:{display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 4px",borderRadius:10,cursor:"pointer",background:"var(--surface-2)"},treeCardMin:{fontSize:12,fontWeight:700,color:"#4C9A6B",marginTop:-4},treeCardLabel:{fontSize:10.5,color:"var(--text-3)",marginTop:2,textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:76},forestHint:{fontSize:11,color:"var(--text-3)",textAlign:"center",marginTop:6}},Lv="grove_rates",_v="reward_rates",rl=Object.keys(tr),up=[{id:"kickstart",label:"Kickstart"},{id:"golden",label:"Golden Book"},{id:"habits",label:"Habits"},{id:"quadrant",label:"Quadrant"},{id:"goals",label:"Goals"},{id:"grove",label:"Grove"},{id:"journal",label:"Journal"},{id:"revision",label:"Revision"},{id:"affirmations",label:"Affirmations"},{id:"skills",label:"Skills"},{id:"spiritual",label:"Spiritual"},{id:"mindscape",label:"Mindscape"},{id:"vault",label:"Wallet"},{id:"expenses",label:"Expenses"},{id:"trading",label:"Trading Journal"},{id:"delight",label:"Delights"},{id:"achievements",label:"Achievements"},{id:"challenges",label:"Challenges"},{id:"bucket",label:"Bucket List"}],pp=new Set(["worth"]),bp="reward_toggles",mp="bucket_take_enabled",io="#C9A227",Ao="#3A7CA5",so="#C2536B",lo="#4C9A6B",hp=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#5B9B9B","#B0654E","#6E7FC2","#A23E57","#3E9E6B","#9A7BB0","#C99B2E","#4E86B0","#B04E86","#6BA34C","#8A6D3B"],$v=e=>{const r=Math.floor(e/60),n=Math.round(e%60);return r&&n?`${r}h ${n}m`:r?`${r}h`:`${n}m`},id=e=>{let r=Math.round((e||0)*60);const n=Math.floor(r/3600);r%=3600;const o=Math.floor(r/60);return r%=60,[n?`${n}h`:null,n||o?`${o}m`:null,`${r}s`].filter(Boolean).join(" ")},Pv=()=>{const e=new Date,r=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${r(e.getMonth()+1)}-${r(e.getDate())}T${r(e.getHours())}:${r(e.getMinutes())}`},fp=e=>{if(!e)return"";const r=new Date(e.includes("T")?e:e+"T00:00:00");return isNaN(r)?e:r.toLocaleDateString("en-US",e.includes("T")?{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}:{month:"short",day:"numeric",year:"numeric"})},Tr=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,xp=e=>{const r=new Date(e);return r.setHours(0,0,0,0),r.setDate(r.getDate()-(r.getDay()+6)%7),r},Do=[{id:"today",label:"Today"},{id:"all",label:"All time"},{id:"tweek",label:"This week"},{id:"tmonth",label:"This month"},{id:"pweek",label:"Last week"},{id:"pmonth",label:"Last month"},{id:"tyear",label:"This year"}];function Nv(e){const r=new Date;if(e==="today")return[Tr(r),Tr(r)];if(e==="tweek"){const n=xp(r),o=new Date(n);return o.setDate(n.getDate()+6),[Tr(n),Tr(o)]}if(e==="pweek"){const n=xp(r);n.setDate(n.getDate()-7);const o=new Date(n);return o.setDate(n.getDate()+6),[Tr(n),Tr(o)]}return e==="tmonth"?[Tr(new Date(r.getFullYear(),r.getMonth(),1)),Tr(new Date(r.getFullYear(),r.getMonth()+1,0))]:e==="pmonth"?[Tr(new Date(r.getFullYear(),r.getMonth()-1,1)),Tr(new Date(r.getFullYear(),r.getMonth(),0))]:e==="tyear"?[Tr(new Date(r.getFullYear(),0,1)),Tr(new Date(r.getFullYear(),11,31))]:["0000-01-01","9999-12-31"]}function Ov(){const e=eo(),r=M=>Ur(M,e.code),[n,o]=g.useState([]),[i,s]=g.useState([]),[l,a]=g.useState([]),[d,u]=g.useState([]),[m,f]=g.useState([]),[h,I]=g.useState([]),[B,k]=g.useState({}),[C,p]=g.useState({}),[c,b]=g.useState({focus:!0,usage:!0,achievement:!0,challenge:!0}),[T,y]=g.useState(!1),[w,D]=g.useState({}),[S,j]=g.useState({}),[N,J]=g.useState(!1),[se,W]=g.useState(!1),[de,Re]=g.useState(null),[pe,je]=g.useState(""),[Q,x]=g.useState(""),[Y,H]=g.useState(!1),[ae,V]=g.useState("today"),[G,P]=g.useState([]),[ge,ce]=g.useState(!1),[We,X]=g.useState(null),ne=()=>E.getPayouts().then(u).catch(()=>{}),L=()=>E.getBucket().then(M=>P(Array.isArray(M)?M:[])).catch(()=>{}),ie=()=>E.getRewardRates().then(a).catch(()=>{});g.useEffect(()=>{(async()=>{try{const[M,Le,rt,Mt,_r,zr,$,ee,Fe,$e,Ze]=await Promise.all([E.getFocus(),E.getScreenTime(),E.getRewardRates(),E.getPayouts(),E.getAchievements(),E.getChallenges(),E.getBucket(),E.getSetting(Lv),E.getSetting(_v),E.getSetting(bp),E.getSetting(mp)]);o(M.sessions||[]),s(Array.isArray(Le)?Le:[]),a(rt||[]),u(Mt||[]),f(Array.isArray(_r)?_r:[]),I(Array.isArray(zr)?zr:[]),P(Array.isArray($)?$:[]),k((ee==null?void 0:ee.value)||{}),p((Fe==null?void 0:Fe.value)||{}),$e!=null&&$e.value&&b(Xe=>({...Xe,...$e.value})),ce(!!(Ze!=null&&Ze.value))}catch{}y(!0)})()},[]);const he={};l.forEach(M=>{var Le;(he[Le=`${M.kind}:${M.rkey}`]||(he[Le]=[])).push({eff:M.eff_date,rate:M.rate})}),Object.values(he).forEach(M=>M.sort((Le,rt)=>Le.eff.localeCompare(rt.eff)));const A=(M,Le,rt)=>{const Mt=he[`${M}:${Le}`];if(Mt){let _r=null;for(const zr of Mt)if(zr.eff<=rt)_r=zr.rate;else break;if(_r!==null)return _r}return(M==="focus"?B[Le]:C[Le])||0},v=(M,Le)=>{const rt=he[`${M}:${Le}`];return rt&&rt.length?rt[rt.length-1].rate:(M==="focus"?B[Le]:C[Le])??""},[re,F]=Nv(ae);let le=0,ye=0;n.filter(M=>M.completed).forEach(M=>{const Le=(M.started_at||M.created_at||"").slice(0,10),rt=tr[M.tree]?M.tree:vn;le+=(M.actual_min||0)/60*A("focus",rt,Le)}),i.forEach(M=>{pp.has(M.screen)||(ye+=M.seconds/60*A("usage",M.screen,M.date))});const ke=m.reduce((M,Le)=>M+(Le.reward||0),0),Ne=h.filter(M=>M.status==="done"),lt=Ne.reduce((M,Le)=>M+(Le.reward_earned||0),0),Je=(c.focus?le:0)+(c.usage?ye:0)+(c.achievement?ke:0)+(c.challenge?lt:0),mt=d.reduce((M,Le)=>M+Le.amount,0),Qe=Math.max(0,Je-mt),st={};rl.forEach(M=>st[M]={minutes:0,earned:0}),n.filter(M=>M.completed).forEach(M=>{const Le=(M.started_at||M.created_at||"").slice(0,10);if(Le<re||Le>F)return;const rt=tr[M.tree]?M.tree:vn,Mt=M.actual_min||0;st[rt].minutes+=Mt,st[rt].earned+=Mt/60*A("focus",rt,Le)});const oe=c.focus?rl.reduce((M,Le)=>M+st[Le].earned,0):0,Me={};i.forEach(M=>{var rt;if(pp.has(M.screen)||M.date<re||M.date>F)return;const Le=Me[rt=M.screen]||(Me[rt]={seconds:0,earned:0});Le.seconds+=M.seconds,Le.earned+=M.seconds/60*A("usage",M.screen,M.date)});const qe=c.usage?Object.values(Me).reduce((M,Le)=>M+Le.earned,0):0,tt=m.filter(M=>M.date>=re&&M.date<=F&&(M.reward||0)>0),ut=[...tt].sort((M,Le)=>Le.date.localeCompare(M.date)||Le.reward-M.reward),Et=c.achievement?tt.reduce((M,Le)=>M+(Le.reward||0),0):0,jt=Ne.filter(M=>!M.end_date||M.end_date>=re&&M.end_date<=F),vt=[...jt].sort((M,Le)=>(Le.reward_earned||0)-(M.reward_earned||0)),Ct=c.challenge?jt.reduce((M,Le)=>M+(Le.reward_earned||0),0):0,R=oe+qe+Et+Ct,me=R>0?oe/R*100:0,Ce=R>0?qe/R*100:0,Oe=R>0?Et/R*100:0,kt=R>0?Ct/R*100:0,It=rl.map(M=>({p:M,...st[M],...tr[M]})).filter(M=>M.minutes>0).sort((M,Le)=>Le.earned-M.earned),at=up.map(M=>({...M,...Me[M.id]||{seconds:0,earned:0}})).filter(M=>M.seconds>0).sort((M,Le)=>Le.earned-M.earned),ht=at.reduce((M,Le)=>M+Le.seconds,0);let gt=0;const U=at.map((M,Le)=>{const rt=ht>0?gt/ht*100:0;gt+=M.seconds;const Mt=ht>0?gt/ht*100:0;return{...M,color:hp[Le%hp.length],start:rt,end:Mt,pct:ht>0?M.seconds/ht*100:0}}),Te=U.length?`conic-gradient(${U.map(M=>`${M.color} ${M.start}% ${M.end}%`).join(", ")})`:"var(--surface-2)",Vt=async()=>{const M=Object.entries(w);for(const[Le,rt]of M)await E.setRewardRate({kind:"focus",rkey:Le,rate:Math.max(0,parseFloat(rt)||0)}).catch(()=>{});D({}),J(!1),ie()},Yt=()=>{D({}),J(!1)},ar=async()=>{const M=Object.entries(S);for(const[Le,rt]of M)await E.setRewardRate({kind:"usage",rkey:Le,rate:Math.max(0,parseFloat(rt)||0)}).catch(()=>{});j({}),W(!1),ie()},hr=()=>{j({}),W(!1)},Xr=M=>{b(Le=>{const rt={...Le,[M]:!Le[M]};return E.setSetting(bp,rt).catch(()=>{}),rt})},fr=M=>{Qe<=0||(Re(M),je(M==="all"?Qe.toFixed(2):""),x(""),X(null))},ln=async()=>{const M=Math.min(parseFloat(pe)||0,Qe);M<=0||!Q.trim()||(await E.createPayout({amount:M,note:Q.trim(),date:Pv()}),Re(null),je(""),x(""),await ne(),H(!0))},Lr=async()=>{!We||(We.cost||0)>Qe||(await E.fulfillBucketWish(We.id).catch(()=>{}),Re(null),X(null),await Promise.all([ne(),L()]),H(!0))},Io=()=>{ce(M=>{const Le=!M;return E.setSetting(mp,Le).catch(()=>{}),Le})},to=async M=>{await E.deletePayout(M),ne()};return t.jsxs("div",{style:_.page,children:[t.jsxs("div",{style:_.head,children:[t.jsx("div",{style:_.eyebrow,children:"Anvil · Rewards"}),t.jsx("h1",{style:_.h1,children:"Rewards"}),t.jsx("div",{style:_.subhead,children:"Your earned rewards from focus and app usage."})]}),t.jsxs("div",{style:_.hero,children:[t.jsx("button",{onClick:()=>H(M=>!M),style:_.logIcon,title:"View reward log",children:t.jsx(c0,{size:16})}),t.jsx("div",{style:_.heroLabel,children:"Final reward · pending"}),t.jsx("div",{style:_.heroVal,children:r(Qe)}),t.jsxs("div",{style:_.heroSub,children:["Earned ",r(Je)," · Taken ",r(mt),ke>0?` · incl. ${r(ke)} achievement`:"",lt>0?` · incl. ${r(lt)} challenge`:""]}),t.jsxs("div",{style:_.heroBtns,children:[t.jsx("button",{onClick:()=>fr("partial"),disabled:Qe<=0,style:{..._.heroBtnGhost,...Qe<=0?_.btnDisabled:{}},children:"Take partial"}),t.jsx("button",{onClick:()=>fr("all"),disabled:Qe<=0,style:{..._.heroBtnSolid,...Qe<=0?_.btnDisabled:{}},children:"Take all pending"})]}),t.jsxs("button",{onClick:Io,style:_.bucketToggleRow,title:ge?"Taking will pick a bucket-list wish":"Taking uses a free amount",children:[t.jsx("span",{style:{..._.miniToggle,background:ge?"#fff":"rgba(255,255,255,0.3)",justifyContent:ge?"flex-end":"flex-start"},children:t.jsx("span",{style:{..._.miniKnob,background:ge?"var(--accent-strong)":"#fff"}})}),t.jsxs("span",{children:["Fulfil from bucket list",ge?" · on":" · off"]})]})]}),t.jsxs("div",{style:_.statRow,children:[t.jsxs("div",{style:_.statCard,children:[t.jsx("div",{style:_.statVal,children:r(mt)}),t.jsx("div",{style:_.statLbl,children:"Total taken"})]}),t.jsxs("div",{style:_.statCard,children:[t.jsx("div",{style:{..._.statVal,color:io},children:r(Qe)}),t.jsx("div",{style:_.statLbl,children:"Total pending"})]})]}),t.jsx("div",{style:_.periodRow,children:Do.map(M=>t.jsx("button",{onClick:()=>V(M.id),style:{..._.periodChip,...ae===M.id?_.periodChipOn:{}},children:M.label},M.id))}),R>0?t.jsxs("div",{style:_.card,children:[t.jsxs("div",{style:_.cardTitleRow,children:[t.jsx("span",{style:_.cardTitle,children:"Reward split"}),t.jsxs("span",{style:_.periodTotal,children:[r(R)," · ",Do.find(M=>M.id===ae).label]})]}),t.jsxs("div",{style:_.splitTrack,children:[t.jsx("div",{style:{width:`${me}%`,background:io,height:"100%"}}),t.jsx("div",{style:{width:`${Ce}%`,background:Ao,height:"100%"}}),t.jsx("div",{style:{width:`${Oe}%`,background:so,height:"100%"}}),t.jsx("div",{style:{width:`${kt}%`,background:lo,height:"100%"}})]}),t.jsxs("div",{style:_.legendRow,children:[t.jsxs("span",{style:_.legendItem,children:[t.jsx("span",{style:{..._.legendDot,background:io}})," Focus ",Math.round(me),"% · ",r(oe)]}),t.jsxs("span",{style:_.legendItem,children:[t.jsx("span",{style:{..._.legendDot,background:Ao}})," Usage ",Math.round(Ce),"% · ",r(qe)]}),t.jsxs("span",{style:_.legendItem,children:[t.jsx("span",{style:{..._.legendDot,background:so}})," Achievement ",Math.round(Oe),"% · ",r(Et)]}),t.jsxs("span",{style:_.legendItem,children:[t.jsx("span",{style:{..._.legendDot,background:lo}})," Challenges ",Math.round(kt),"% · ",r(Ct)]})]})]}):t.jsxs("div",{style:{..._.card,..._.muted},children:["No rewards earned in ",Do.find(M=>M.id===ae).label.toLowerCase(),"."]}),t.jsxs("div",{style:{..._.card,...c.focus?{}:_.cardOff},children:[t.jsxs("div",{style:_.sectionHead,children:[t.jsxs("span",{style:{..._.cardTitle,color:io},children:["Focus Rewards · ",r(oe)]}),t.jsxs("div",{style:_.sectionHeadRight,children:[c.focus&&t.jsx("button",{onClick:()=>N?Yt():J(!0),style:_.collapseLink,children:N?"Hide rates":"Set rates"}),t.jsx(nl,{on:c.focus,onClick:()=>Xr("focus"),color:io})]})]}),c.focus&&N&&t.jsxs("div",{style:{marginTop:12},children:[t.jsx("div",{style:_.rateGrid,children:rl.map(M=>t.jsxs("div",{style:_.rateRow,children:[t.jsx("span",{style:{..._.dot,background:tr[M].leaf}}),t.jsx("span",{style:_.rateName,children:tr[M].label}),t.jsxs("div",{style:_.rateInputWrap,children:[t.jsx("span",{style:_.unitSign,children:e.symbol}),t.jsx("input",{type:"number",min:"0",step:"0.5",inputMode:"decimal",placeholder:"0",value:w[M]!==void 0?w[M]:v("focus",M),onChange:Le=>D(rt=>({...rt,[M]:Le.target.value})),style:_.rateInput}),t.jsx("span",{style:_.unit,children:"/hr"})]})]},M))}),t.jsxs("div",{style:_.rateActions,children:[t.jsx("button",{onClick:Yt,style:_.rateCancel,children:"Cancel"}),t.jsx("button",{onClick:Vt,style:_.rateSave,children:"Save"})]})]}),c.focus?It.length>0?t.jsx("div",{style:{..._.rows,marginTop:14},children:It.map(M=>t.jsxs("div",{style:_.row,children:[t.jsx("span",{style:{..._.dot,background:M.leaf}}),t.jsx("span",{style:_.rowName,children:M.label}),t.jsx("span",{style:_.rowMeta,children:$v(Math.round(M.minutes))}),t.jsx("span",{style:_.rowAmt,children:r(M.earned)})]},M.p))}):t.jsx("div",{style:_.muted,children:"No focus sessions yet."}):t.jsx("div",{style:_.muted,children:"Focus rewards are disabled — no reward is being calculated."})]}),t.jsxs("div",{style:{..._.card,...c.usage?{}:_.cardOff},children:[t.jsxs("div",{style:_.sectionHead,children:[t.jsxs("span",{style:{..._.cardTitle,color:Ao},children:["Usage Rewards · ",r(qe)]}),t.jsxs("div",{style:_.sectionHeadRight,children:[c.usage&&t.jsx("button",{onClick:()=>se?hr():W(!0),style:_.collapseLink,children:se?"Hide rates":"Set rates"}),t.jsx(nl,{on:c.usage,onClick:()=>Xr("usage"),color:Ao})]})]}),c.usage&&se&&t.jsxs("div",{style:{marginTop:12},children:[t.jsx("div",{style:_.rateGrid,children:up.map(M=>t.jsxs("div",{style:_.rateRow,children:[t.jsx("span",{style:_.rateName,children:M.label}),t.jsxs("div",{style:_.rateInputWrap,children:[t.jsx("span",{style:_.unitSign,children:e.symbol}),t.jsx("input",{type:"number",min:"0",step:"0.1",inputMode:"decimal",placeholder:"0",value:S[M.id]!==void 0?S[M.id]:v("usage",M.id),onChange:Le=>j(rt=>({...rt,[M.id]:Le.target.value})),style:_.rateInput}),t.jsx("span",{style:_.unit,children:"/min"})]})]},M.id))}),t.jsxs("div",{style:_.rateActions,children:[t.jsx("button",{onClick:hr,style:_.rateCancel,children:"Cancel"}),t.jsx("button",{onClick:ar,style:_.rateSave,children:"Save"})]})]}),c.usage?at.length>0?t.jsx("div",{style:{..._.rows,marginTop:14},children:at.map(M=>t.jsxs("div",{style:_.row,children:[t.jsx("span",{style:_.rowName,children:M.label}),t.jsx("span",{style:_.rowMeta,children:id(M.seconds/60)}),t.jsx("span",{style:_.rowAmt,children:r(M.earned)})]},M.id))}):t.jsx("div",{style:_.muted,children:T?"No usage tracked yet.":"Loading…"}):t.jsx("div",{style:_.muted,children:"Usage rewards are disabled — no reward is being calculated."}),c.usage&&ht>0&&t.jsxs("div",{style:_.usagePieBlock,children:[t.jsxs("div",{style:_.usagePieTitle,children:["Most-used screens · ",Do.find(M=>M.id===ae).label]}),t.jsxs("div",{style:_.pieWrap,children:[t.jsxs("div",{style:_.pieChart,children:[t.jsx("div",{style:{..._.pieDisc,background:Te}}),t.jsxs("div",{style:_.pieHole,children:[t.jsx("span",{style:_.pieHoleVal,children:id(ht/60)}),t.jsx("span",{style:_.pieHoleLbl,children:"total time"})]})]}),t.jsx("div",{style:_.pieLegend,children:U.map(M=>t.jsxs("div",{style:_.pieLegRow,children:[t.jsx("span",{style:{..._.legendDot,background:M.color}}),t.jsx("span",{style:_.pieLegName,children:M.label}),t.jsxs("span",{style:_.pieLegPct,children:[Math.round(M.pct),"%"]}),t.jsx("span",{style:_.pieLegMin,children:id(M.seconds/60)})]},M.id))})]})]})]}),t.jsxs("div",{style:{..._.card,...c.achievement?{}:_.cardOff},children:[t.jsxs("div",{style:_.sectionHead,children:[t.jsxs("span",{style:{..._.cardTitle,color:so},children:["Achievement Rewards · ",r(Et)]}),t.jsxs("div",{style:_.sectionHeadRight,children:[c.achievement&&t.jsx("span",{style:_.collapseHint,children:"Set in Achievements"}),t.jsx(nl,{on:c.achievement,onClick:()=>Xr("achievement"),color:so})]})]}),c.achievement?ut.length>0?t.jsx("div",{style:{..._.rows,marginTop:14},children:ut.map(M=>t.jsxs("div",{style:_.row,children:[t.jsx("span",{style:{..._.dot,background:so}}),t.jsx("span",{style:_.rowName,children:M.title}),t.jsx("span",{style:_.rowMeta,children:fp(M.date)}),t.jsx("span",{style:_.rowAmt,children:r(M.reward)})]},M.id))}):t.jsxs("div",{style:{..._.muted,marginTop:10},children:["No achievement rewards in ",Do.find(M=>M.id===ae).label.toLowerCase(),". Add a reward to a win in the Achievements section."]}):t.jsx("div",{style:{..._.muted,marginTop:10},children:"Achievement rewards are disabled — no reward is being calculated."})]}),t.jsxs("div",{style:{..._.card,...c.challenge?{}:_.cardOff},children:[t.jsxs("div",{style:_.sectionHead,children:[t.jsxs("span",{style:{..._.cardTitle,color:lo},children:["Challenge Rewards · ",r(Ct)]}),t.jsxs("div",{style:_.sectionHeadRight,children:[c.challenge&&t.jsx("span",{style:_.collapseHint,children:"Set in Challenges"}),t.jsx(nl,{on:c.challenge,onClick:()=>Xr("challenge"),color:lo})]})]}),c.challenge?vt.length>0?t.jsx("div",{style:{..._.rows,marginTop:14},children:vt.map(M=>t.jsxs("div",{style:_.row,children:[t.jsx("span",{style:{..._.dot,background:lo}}),t.jsx("span",{style:_.rowName,children:M.name}),t.jsx("span",{style:_.rowMeta,children:M.reward||"Completed"}),t.jsx("span",{style:_.rowAmt,children:r(M.reward_earned)})]},M.id))}):t.jsxs("div",{style:{..._.muted,marginTop:10},children:["No completed challenges in ",Do.find(M=>M.id===ae).label.toLowerCase(),". Finish a challenge in the Challenges section to bank its reward."]}):t.jsx("div",{style:{..._.muted,marginTop:10},children:"Challenge rewards are disabled — no reward is being calculated."})]}),Y&&t.jsx("div",{style:_.modalOverlay,onClick:()=>H(!1),children:t.jsxs("div",{style:_.logModal,onClick:M=>M.stopPropagation(),children:[t.jsxs("div",{style:_.logModalHead,children:[t.jsx("span",{style:_.modalTitle,children:"Reward log"}),t.jsx("button",{onClick:()=>H(!1),style:_.logClose,title:"Close",children:t.jsx(De,{size:16})})]}),d.length===0?t.jsx("div",{style:{..._.muted,padding:"24px 0",textAlign:"center"},children:"No rewards taken yet."}):t.jsxs(t.Fragment,{children:[t.jsx("div",{style:_.logScroll,children:d.map(M=>t.jsxs("div",{style:_.row,children:[t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:_.logNote,children:M.note||"Reward taken"}),t.jsx("div",{style:_.rowMeta,children:fp(M.date)})]}),t.jsx("span",{style:_.rowAmt,children:r(M.amount)}),t.jsx("button",{onClick:()=>to(M.id),style:_.del,children:"×"})]},M.id))}),t.jsxs("div",{style:_.totalRow,children:[t.jsx("span",{children:"Total taken"}),t.jsx("span",{style:_.totalVal,children:r(mt)})]})]})]})}),R>0&&t.jsxs("div",{style:_.card,children:[t.jsx("div",{style:_.cardTitle,children:"Reward breakdown"}),t.jsxs("div",{style:_.pieWrap,children:[t.jsxs("div",{style:_.pieChart,children:[t.jsx("div",{style:{..._.pieDisc,background:`conic-gradient(${io} 0 ${me}%, ${Ao} ${me}% ${me+Ce}%, ${so} ${me+Ce}% ${me+Ce+Oe}%, ${lo} ${me+Ce+Oe}% 100%)`}}),t.jsxs("div",{style:_.pieHole,children:[t.jsx("span",{style:_.pieHoleVal,children:r(R)}),t.jsx("span",{style:_.pieHoleLbl,children:"total"})]})]}),t.jsxs("div",{style:_.pieLegend,children:[t.jsxs("div",{style:_.pieLegRow,children:[t.jsx("span",{style:{..._.legendDot,background:io}}),t.jsx("span",{style:_.pieLegName,children:"Focus"}),t.jsxs("span",{style:_.pieLegPct,children:[Math.round(me),"%"]}),t.jsx("span",{style:_.pieLegMin,children:r(oe)})]}),t.jsxs("div",{style:_.pieLegRow,children:[t.jsx("span",{style:{..._.legendDot,background:Ao}}),t.jsx("span",{style:_.pieLegName,children:"Usage"}),t.jsxs("span",{style:_.pieLegPct,children:[Math.round(Ce),"%"]}),t.jsx("span",{style:_.pieLegMin,children:r(qe)})]}),t.jsxs("div",{style:_.pieLegRow,children:[t.jsx("span",{style:{..._.legendDot,background:so}}),t.jsx("span",{style:_.pieLegName,children:"Achievement"}),t.jsxs("span",{style:_.pieLegPct,children:[Math.round(Oe),"%"]}),t.jsx("span",{style:_.pieLegMin,children:r(Et)})]}),t.jsxs("div",{style:_.pieLegRow,children:[t.jsx("span",{style:{..._.legendDot,background:lo}}),t.jsx("span",{style:_.pieLegName,children:"Challenges"}),t.jsxs("span",{style:_.pieLegPct,children:[Math.round(kt),"%"]}),t.jsx("span",{style:_.pieLegMin,children:r(Ct)})]})]})]})]}),de&&t.jsx("div",{style:_.modalOverlay,onClick:()=>Re(null),children:t.jsxs("div",{style:_.modalCard,onClick:M=>M.stopPropagation(),children:[t.jsx("div",{style:_.modalTitle,children:de==="all"?"Take all pending reward?":"Take partial reward"}),t.jsxs("div",{style:_.modalSub,children:["Pending: ",r(Qe)]}),ge?(()=>{const M=G.filter(Mt=>!Mt.fulfilled),Le=We&&(We.cost||0)>Qe,rt=We&&!Le;return t.jsxs(t.Fragment,{children:[M.length===0?t.jsx("div",{style:_.wishEmpty,children:"No unfulfilled wishes. Add some in the Bucket List section."}):t.jsx("div",{style:_.wishList,children:M.map((Mt,_r)=>{const zr=(Mt.cost||0)>Qe,$=(We==null?void 0:We.id)===Mt.id;return t.jsxs("button",{onClick:()=>!zr&&X(Mt),disabled:zr,style:{..._.wishRow,...$?_.wishRowOn:{},...zr?_.wishRowOver:{}},children:[t.jsx("span",{style:_.wishRank,children:_r+1}),t.jsx("span",{style:_.wishName,children:Mt.wish}),t.jsxs("span",{style:_.wishCost,children:[r(Mt.cost),zr?" · too costly":""]})]},Mt.id)})}),t.jsxs("div",{style:_.modalActions,children:[t.jsx("button",{onClick:()=>Re(null),style:_.modalCancel,children:"Cancel"}),t.jsx("button",{onClick:Lr,disabled:!rt,style:{..._.modalConfirm,...rt?{}:{opacity:.5,cursor:"not-allowed"}},children:We?`Fulfil · ${r(We.cost)}`:"Pick a wish"})]})]})})():t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:_.modalInputWrap,children:[t.jsx("span",{style:_.modalSign,children:e.symbol}),t.jsx("input",{type:"number",min:"0",step:"0.01",autoFocus:!0,placeholder:Qe.toFixed(2),value:pe,onChange:M=>je(M.target.value),style:_.modalAmt})]}),t.jsx("input",{placeholder:"What is this reward for? (required)",value:Q,onChange:M=>x(M.target.value),onKeyDown:M=>M.key==="Enter"&&ln(),style:_.modalReason}),(()=>{const M=parseFloat(pe)>0&&!!Q.trim();return t.jsxs("div",{style:_.modalActions,children:[t.jsx("button",{onClick:()=>Re(null),style:_.modalCancel,children:"Cancel"}),t.jsxs("button",{onClick:ln,disabled:!M,style:{..._.modalConfirm,...M?{}:{opacity:.5,cursor:"not-allowed"}},children:["Confirm · ",r(Math.min(parseFloat(pe)||0,Qe))]})]})})()]})]})}),t.jsx("div",{style:_.note,children:"Set rates only affect time from today onward — past time keeps the rate it was earned at."})]})}function nl({on:e,onClick:r,color:n}){return t.jsx("button",{onClick:r,title:e?"Disable — stop calculating this reward":"Enable this reward",style:{..._.toggle,background:e?n:"var(--border)",justifyContent:e?"flex-end":"flex-start"},children:t.jsx("span",{style:_.toggleKnob})})}const _={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},hero:{position:"relative",background:"linear-gradient(135deg,var(--accent-strong),var(--accent-2))",borderRadius:16,padding:"22px 24px",color:"#fff",marginBottom:14,textAlign:"center"},logIcon:{position:"absolute",top:12,right:12,border:"1px solid rgba(255,255,255,0.5)",background:"rgba(255,255,255,0.12)",color:"#fff",width:32,height:32,borderRadius:9,cursor:"pointer",display:"grid",placeItems:"center"},logClose:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:28,height:28,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},logNote:{fontSize:13.5,fontWeight:600,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modalCard:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"22px 22px 18px",width:360,maxWidth:"100%",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)"},logModal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"18px 18px 14px",width:440,maxWidth:"100%",maxHeight:"82vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",boxSizing:"border-box"},logModalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8,flexShrink:0},logScroll:{overflowY:"auto",display:"flex",flexDirection:"column",gap:2,paddingRight:2,minHeight:0},modalTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:4},modalSub:{fontSize:12.5,color:"var(--text-3)",fontWeight:600,marginBottom:14},modalInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:10,padding:"8px 12px",background:"var(--surface-2)",marginBottom:8},modalSign:{fontSize:16,color:"var(--text-2)",fontWeight:700},modalAmt:{border:"none",background:"none",outline:"none",flex:1,fontSize:18,fontWeight:700,fontFamily:"inherit",color:"var(--text)"},modalReason:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:14},modalActions:{display:"flex",gap:8},modalCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalConfirm:{flex:1,border:"none",background:"#C9A227",color:"#fff",padding:"10px 14px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},bucketToggleRow:{display:"inline-flex",alignItems:"center",gap:8,margin:"12px auto 0",border:"none",background:"rgba(255,255,255,0.12)",color:"#fff",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},miniToggle:{display:"flex",alignItems:"center",width:32,height:18,borderRadius:10,padding:2,flexShrink:0,transition:"background 0.15s"},miniKnob:{width:14,height:14,borderRadius:"50%",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},wishList:{display:"flex",flexDirection:"column",gap:6,maxHeight:300,overflowY:"auto",margin:"4px 0 4px"},wishRow:{display:"flex",alignItems:"center",gap:10,width:"100%",textAlign:"left",border:"1px solid var(--border)",background:"var(--surface)",borderRadius:10,padding:"10px 12px",cursor:"pointer",fontFamily:"inherit"},wishRowOn:{borderColor:"var(--accent-strong)",background:"var(--hover)",boxShadow:"0 0 0 1px var(--accent-strong)"},wishRowOver:{opacity:.5,cursor:"not-allowed"},wishRank:{fontSize:12,fontWeight:800,color:"var(--text-3)",fontFamily:"'Fraunces',Georgia,serif",flexShrink:0},wishName:{flex:1,fontSize:13.5,fontWeight:700,color:"var(--text)",minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},wishCost:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--accent-strong)",flexShrink:0},wishEmpty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"20px 0"},heroLabel:{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",opacity:.85},heroVal:{fontSize:44,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,lineHeight:1.05},heroSub:{fontSize:12.5,opacity:.9,marginTop:6},heroBtns:{display:"flex",gap:10,marginTop:16,justifyContent:"center"},heroBtnSolid:{border:"none",background:"#fff",color:"var(--accent-strong)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},heroBtnGhost:{border:"1px solid rgba(255,255,255,0.6)",background:"transparent",color:"#fff",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},btnDisabled:{opacity:.45,cursor:"not-allowed"},statRow:{display:"flex",gap:10,marginBottom:14},statCard:{flex:1,background:"var(--surface)",borderRadius:12,padding:"12px 14px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},statVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},card:{background:"var(--surface)",borderRadius:16,padding:"18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:10,flexWrap:"wrap"},periodTotal:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text-2)"},periodRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},periodChip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},periodChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},collapseHint:{fontSize:12,fontWeight:700,color:"var(--accent)"},sectionHead:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,flexWrap:"wrap"},sectionHeadRight:{display:"flex",alignItems:"center",gap:12},collapseLink:{border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"inherit",fontSize:12,fontWeight:700,color:"var(--accent)"},cardOff:{opacity:.62},toggle:{border:"none",cursor:"pointer",width:40,height:22,borderRadius:11,padding:2,display:"flex",alignItems:"center",transition:"background 0.15s",flexShrink:0},toggleKnob:{width:18,height:18,borderRadius:"50%",background:"#fff",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"12px 0"},splitTrack:{display:"flex",height:16,borderRadius:8,overflow:"hidden",marginTop:12,marginBottom:12,border:"1px solid var(--border)"},legendRow:{display:"flex",gap:16,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:600,color:"var(--text-2)"},legendDot:{width:10,height:10,borderRadius:3,flexShrink:0},usagePieBlock:{marginTop:16,paddingTop:14,borderTop:"1px solid var(--border)"},usagePieTitle:{fontSize:12.5,fontWeight:700,color:"var(--text-2)",marginBottom:6},pieWrap:{display:"flex",alignItems:"center",gap:20,flexWrap:"wrap",marginTop:6},pieChart:{position:"relative",width:130,height:130,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:78,height:78,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:10},pieLegRow:{display:"flex",alignItems:"center",gap:8},pieLegName:{flex:1,fontSize:13.5,fontWeight:600},pieLegPct:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",width:46,textAlign:"right"},pieLegMin:{fontSize:12,color:"var(--text-3)",fontWeight:600,minWidth:64,textAlign:"right"},rows:{display:"flex",flexDirection:"column",gap:2},row:{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:"1px solid var(--border)"},dot:{width:10,height:10,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:13.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},rowMeta:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,flexShrink:0},rowAmt:{fontSize:13.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",flexShrink:0,minWidth:64,textAlign:"right"},del:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",fontSize:16,lineHeight:1,padding:"0 2px",flexShrink:0},totalRow:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:10,marginTop:4,fontSize:14,fontWeight:700},totalVal:{fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},rateActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:14},rateCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},rateSave:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},rateGrid:{display:"flex",flexDirection:"column",gap:10},rateRow:{display:"flex",alignItems:"center",gap:8},rateName:{flex:1,fontSize:14,fontWeight:600},rateInputWrap:{display:"flex",alignItems:"center",gap:3,border:"1px solid var(--border)",borderRadius:9,padding:"4px 10px",background:"var(--surface-2)"},unitSign:{fontSize:14,color:"var(--text-2)",fontWeight:600},rateInput:{border:"none",background:"none",outline:"none",width:64,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},unit:{fontSize:12,color:"var(--text-3)",fontWeight:600},note:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",fontStyle:"italic",marginTop:4}};function Hv(){return t.jsx("div",{style:Bn.page,children:t.jsxs("div",{style:Bn.card,children:[t.jsxs("div",{style:Bn.brand,children:[t.jsx("div",{style:Bn.logo,children:"B"}),t.jsx("span",{style:Bn.brandName,children:"Anvil"})]}),t.jsx("h1",{style:Bn.title,children:"Welcome to Anvil"}),t.jsx("p",{style:Bn.sub,children:"Sign in with Google to continue."}),t.jsxs("button",{onClick:()=>E.signInWithGoogle(),style:Bn.googleBtn,children:[t.jsx(Gv,{}),"Sign in with Google"]})]})})}function Gv(){return t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[t.jsx("path",{fill:"#4285F4",d:"M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84c-.21 1.13-.85 2.09-1.81 2.73v2.27h2.92c1.71-1.57 2.69-3.88 2.69-6.64z"}),t.jsx("path",{fill:"#34A853",d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.27c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.71H.96v2.34C2.44 15.98 5.48 18 9 18z"}),t.jsx("path",{fill:"#FBBC05",d:"M3.97 10.7c-.18-.54-.28-1.11-.28-1.7s.1-1.16.28-1.7V4.96H.96A8.997 8.997 0 0 0 0 9c0 1.45.35 2.83.96 4.04l3.01-2.34z"}),t.jsx("path",{fill:"#EA4335",d:"M9 3.58c1.32 0 2.51.45 3.44 1.35l2.59-2.59C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l3.01 2.34C4.68 5.16 6.66 3.58 9 3.58z"})]})}const Bn={page:{minHeight:"100vh",display:"grid",placeItems:"center",background:"var(--bg)",fontFamily:"'Inter',system-ui,sans-serif",padding:20},card:{width:"100%",maxWidth:380,background:"var(--surface)",borderRadius:16,padding:"32px 28px",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",display:"flex",flexDirection:"column",textAlign:"center"},brand:{display:"flex",alignItems:"center",justifyContent:"center",gap:9,marginBottom:20},logo:{width:32,height:32,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},brandName:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},title:{fontSize:22,fontWeight:700,margin:"0 0 4px",fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},sub:{fontSize:13.5,color:"var(--text-3)",margin:"0 0 24px"},googleBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,border:"1px solid var(--border)",background:"#fff",color:"#26241F",padding:"12px",borderRadius:10,fontSize:14.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},vc=1,Bh="anvil_month_start_day";function jc(){try{return Number(localStorage.getItem(Bh))||vc}catch{return vc}}function yp(e){const r=Math.min(28,Math.max(1,Number(e)||vc));try{localStorage.setItem(Bh,String(r))}catch{}return window.dispatchEvent(new CustomEvent("anvil-month-start",{detail:r})),r}function Rh(){const[e,r]=g.useState(jc());return g.useEffect(()=>{const n=o=>r(o.detail||jc());return window.addEventListener("anvil-month-start",n),()=>window.removeEventListener("anvil-month-start",n)},[]),e}const vp=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;function Br(e,r,n=0){const o=e.getFullYear(),i=e.getMonth(),l=e.getDate()>=r?i:i-1,a=new Date(o,l+n,r),d=new Date(o,l+n+1,r-1);return[vp(a),vp(d)]}const jp=["Salary","Stocks","Business","Interest","Rent","Gift","Other"],Uv=["Bills","EMI","Rent","Food","Shopping","Transport","Health","Entertainment","Education","Other"],kp=["Stocks","Mutual Fund","SIP","Fixed Deposit","Gold","Real Estate","PPF/EPF","Crypto","Other"],Vv={Salary:"#4C9A6B",Stocks:"#3A7CA5",Business:"#C9A227",Interest:"#8268B0",Gift:"#C2773B",Bills:"#C2536B",EMI:"#A23E57",Food:"#E08E45",Shopping:"#8268B0",Transport:"#3A7CA5",Health:"#4C9A6B",Entertainment:"#C9A227",Education:"#5B7C99",Rent:"#5B8C5A",Other:"#9A968C"},Fg=e=>Vv[e]||"#9A968C",Yv={Stocks:"#2F6B4F","Mutual Fund":"#3E9E6B",SIP:"#4FAE7E","Fixed Deposit":"#6BBE92",Gold:"#8ECDA8","Real Estate":"#1F5C3F","PPF/EPF":"#5BAE83",Crypto:"#7FC79E",Other:"#9AD4B3"},Kv=e=>Yv[e]||"#4C9A6B",hn="#3E9E6B",Rr="#D1556E",mn="#3A7CA5",sd="#8268B0",Eh=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,_o=Eh(new Date),Qv=[{id:"month",label:"This month"},{id:"last",label:"Last month"},{id:"year",label:"This year"},{id:"all",label:"All time"}];function qv(e,r){const n=new Date;return e==="month"?Br(n,r):e==="last"?Br(n,r,-1):e==="year"?[Eh(new Date(n.getFullYear(),0,1)),_o]:["0000-01-01","9999-12-31"]}function Xv(){const e=eo(),[r,n]=g.useState("overview"),[o,i]=g.useState([]),[s,l]=g.useState([]),[a,d]=g.useState([]),[u,m]=g.useState([]),[f,h]=g.useState([]),[I,B]=g.useState(!1),k=g.useCallback(()=>Promise.all([E.getTxns(),E.getExpenses(),E.getInvestments()]).then(([w,D,S])=>(i(w),l(D.categories),d(D.logs),m(S),E.getFixedItems())).then(h).then(()=>B(!0)).catch(()=>B(!0)),[]);g.useEffect(()=>{k()},[k]);const C=g.useMemo(()=>{const w={};return s.forEach(D=>w[D.id]=D),w},[s]),p=g.useMemo(()=>a.map(w=>{var D;return{id:`exp-${w.id}`,rawId:w.id,source:"expense",kind:"expense",category:((D=C[w.category_id])==null?void 0:D.name)||"Other",amount:w.amount,note:w.note,date:w.date}}),[a,C]),c=g.useMemo(()=>o.filter(w=>w.kind==="expense").map(w=>({...w,source:"legacy"})),[o]),b=g.useMemo(()=>o.filter(w=>w.kind==="income").map(w=>({...w,source:"legacy"})),[o]),T=g.useMemo(()=>[...b,...c,...p].sort((w,D)=>D.date.localeCompare(w.date)),[b,c,p]),y=w=>vs(w,e.code);return t.jsxs("div",{style:z.page,children:[t.jsxs("div",{style:z.head,children:[t.jsx("div",{style:z.eyebrow,children:"Anvil · Wallet"}),t.jsx("h1",{style:z.h1,children:"Wallet"}),t.jsx("div",{style:z.subhead,children:"Your money — what comes in, what goes out, and where it's headed."})]}),t.jsx("div",{style:z.tabs,children:[["overview","Overview",ih],["money","Money",ka],["calc","Calculators",Cy]].map(([w,D,S])=>t.jsxs("button",{onClick:()=>n(w),style:{...z.tab,...r===w?z.tabOn:{}},children:[t.jsx(S,{size:15})," ",D]},w))}),r==="overview"&&t.jsx(Zv,{txns:T,investments:u,loaded:I,money:y,cur:e}),r==="money"&&t.jsx(t1,{txns:T,expCats:s,investments:u,fixedItems:f,reload:k,money:y,cur:e}),r==="calc"&&t.jsx(r1,{money:y,cur:e})]})}function Zv({txns:e,investments:r,loaded:n,money:o,cur:i}){const s=Rh(),[l,a]=g.useState("month"),[d,u]=qv(l,s),m=g.useMemo(()=>e.filter(N=>N.date>=d&&N.date<=u),[e,d,u]),f=m.filter(N=>N.kind==="income"),h=m.filter(N=>N.kind==="expense"),I=f.reduce((N,J)=>N+J.amount,0),B=h.reduce((N,J)=>N+J.amount,0),k=g.useMemo(()=>r.filter(N=>N.date>=d&&N.date<=u),[r,d,u]),C=k.reduce((N,J)=>N+J.invested,0),p=B+C,c=I-p,b=r.reduce((N,J)=>N+J.invested,0),T=r.reduce((N,J)=>N+J.current_value,0),y=T-b,w=N=>{const J={};return N.forEach(se=>{J[se.category]=(J[se.category]||0)+se.amount}),Object.entries(J).map(([se,W])=>({category:se,amount:W,color:Fg(se)})).sort((se,W)=>W.amount-se.amount)},D=w(h),S=g.useMemo(()=>{const N={};return k.forEach(J=>{N[J.kind]=(N[J.kind]||0)+J.invested}),Object.entries(N).map(([J,se])=>({category:J,amount:se,color:Kv(J)})).sort((J,se)=>se.amount-J.amount)},[k]),j=[...D,...S];return t.jsxs(t.Fragment,{children:[t.jsx("div",{style:z.presetRow,children:Qv.map(N=>t.jsx("button",{onClick:()=>a(N.id),style:{...z.preset,...l===N.id?z.presetOn:{}},children:N.label},N.id))}),t.jsxs("div",{style:z.sumGrid,children:[t.jsx(ld,{icon:t.jsx(hy,{size:16}),label:"Income",value:o(I),color:hn}),t.jsx(ld,{icon:t.jsx(oh,{size:16}),label:"Expenses",value:o(p),color:Rr}),t.jsx(ld,{icon:c>=0?t.jsx(ni,{size:16}):t.jsx(Yn,{size:16}),label:"Net savings",value:o(c),color:c>=0?hn:Rr})]}),C>0&&t.jsxs("div",{style:z.investNote,children:[t.jsx(Xl,{size:13,color:mn})," Includes ",o(C)," invested this period — counted as outgoing and deducted from net savings."]}),r.length>0&&t.jsxs("div",{style:z.card,children:[t.jsxs("div",{style:z.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(Xl,{size:18,color:mn}),t.jsxs("div",{children:[t.jsx("div",{style:z.cardTitle,children:"Assets & investments"}),t.jsx("div",{style:z.cardSub,children:"Across all your holdings, all time"})]})]}),t.jsx("div",{style:{...z.cardTotal,color:mn},children:o(T)})]}),t.jsxs("div",{style:z.healthStats,children:[t.jsxs("div",{style:z.healthStat,children:[t.jsx("span",{style:z.healthStatV,children:o(b)}),t.jsx("span",{style:z.healthStatL,children:"Total invested"})]}),t.jsxs("div",{style:z.healthStat,children:[t.jsxs("span",{style:{...z.healthStatV,color:y>=0?hn:Rr},children:[y>=0?"+":"",o(y)]}),t.jsx("span",{style:z.healthStatL,children:"Unrealized gain"})]})]})]}),n?m.length===0&&k.length===0?t.jsx("div",{style:z.card,children:t.jsxs("div",{style:z.muted,children:["No transactions in this period. Add some under the ",t.jsx("b",{children:"Money"})," tab."]})}):t.jsxs(t.Fragment,{children:[t.jsx(e1,{totalIn:I,totalOut:p}),t.jsxs("div",{style:z.twoCol,children:[t.jsx(wp,{title:"Incoming",subtitle:"Where your money comes from",total:I,data:w(f),accent:hn,cur:i}),t.jsx(wp,{title:"Outgoing",subtitle:"Spending + money set aside in investments",total:p,data:j,accent:Rr,cur:i})]})]}):t.jsx("div",{style:z.muted,children:"Loading…"})]})}function ld({icon:e,label:r,value:n,color:o}){return t.jsxs("div",{style:z.sumCard,children:[t.jsx("div",{style:{...z.sumIcon,color:o,background:o+"1A"},children:e}),t.jsx("div",{style:z.sumLabel,children:r}),t.jsx("div",{style:{...z.sumVal,color:o},children:n})]})}function wp({title:e,subtitle:r,total:n,data:o,accent:i,cur:s}){const[l,a]=g.useState(null);let d=0;const u=o.map(h=>{const I=n>0?d/n*100:0;d+=h.amount;const B=n>0?d/n*100:0;return{...h,start:I,end:B,color:h.color||Fg(h.category),pct:n>0?h.amount/n*100:0}}),m=l!=null?u[l]:null,f=u.length===1;return t.jsxs("div",{style:z.card,children:[t.jsxs("div",{style:z.cardTitleRow,children:[t.jsxs("div",{children:[t.jsx("div",{style:{...z.cardTitle,color:i},children:e}),t.jsx("div",{style:z.cardSub,children:r})]}),t.jsx("div",{style:{...z.cardTotal,color:i},children:vs(n,s.code)})]}),o.length===0?t.jsx("div",{style:z.muted,children:"Nothing logged."}):t.jsxs("div",{style:z.pieWrap,children:[t.jsxs("div",{style:z.pieChart,onMouseLeave:()=>a(null),children:[t.jsx("svg",{viewBox:"0 0 120 120",style:z.pieSvg,children:u.map((h,I)=>t.jsx("path",{d:Jv(h.start,h.end,I===l,f),fill:h.color,onMouseEnter:()=>a(I),style:{cursor:"pointer",transition:"transform 0.15s, filter 0.15s",filter:I===l?"brightness(1.08)":"none"}},h.category))}),t.jsx("div",{style:{...z.pieHole,...m?{transform:"translate(-50%,-50%) scale(1.06)",boxShadow:`0 0 0 4px ${m.color}33`}:{}},children:m?t.jsxs(t.Fragment,{children:[t.jsx("span",{style:{...z.pieHoleVal,color:m.color,fontSize:13},children:Uu(m.amount,s.code)}),t.jsxs("span",{style:z.pieHoleLbl,children:[Math.round(m.pct),"% · ",m.category]})]}):t.jsxs(t.Fragment,{children:[t.jsx("span",{style:z.pieHoleVal,children:Uu(n,s.code)}),t.jsx("span",{style:z.pieHoleLbl,children:"total"})]})})]}),t.jsx("div",{style:z.pieLegend,children:u.map((h,I)=>t.jsxs("div",{style:{...z.legendRow,...I===l?z.legendRowOn:{}},onMouseEnter:()=>a(I),onMouseLeave:()=>a(null),children:[t.jsx("span",{style:{...z.dot,background:h.color}}),t.jsx("span",{style:z.legendName,children:h.category}),t.jsxs("span",{style:z.legendPct,children:[Math.round(h.pct),"%"]}),t.jsx("span",{style:z.legendAmt,children:vs(h.amount,s.code)})]},h.category))})]})]})}function Jv(e,r,n,o){const d=n?6:0,u=(w,D,S=0,j=0)=>{const N=w/100*2*Math.PI-Math.PI/2;return[60+S+D*Math.cos(N),60+j+D*Math.sin(N)]},m=(e+r)/2/100*2*Math.PI-Math.PI/2,f=o?0:Math.cos(m)*d,h=o?0:Math.sin(m)*d;if(r-e>=99.999)return`M ${60+f} ${60+h-58} A 58 58 0 1 1 ${60+f-.01} ${60+h-58} L ${60+f-.01} ${60+h-35} A 35 35 0 1 0 ${60+f} ${60+h-35} Z`;const[I,B]=u(e,58,f,h),[k,C]=u(r,58,f,h),[p,c]=u(r,35,f,h),[b,T]=u(e,35,f,h),y=r-e>50?1:0;return`M ${I} ${B} A 58 58 0 ${y} 1 ${k} ${C} L ${p} ${c} A 35 35 0 ${y} 0 ${b} ${T} Z`}function e1({totalIn:e,totalOut:r}){const n=e-r,o=e>0?n/e:0,i=e===0?0:Math.max(0,Math.min(100,Math.round(50+o*100)));let s,l,a;e===0?(s="No income logged",l="#9A968C",a="Add your income to see your financial health."):o>=.3?(s="Excellent",l="#3E9E6B",a="You're saving 30%+ of income — keep investing the surplus."):o>=.2?(s="Healthy",l="#4C9A6B",a="Solid savings rate. Consider automating a SIP with the surplus."):o>=.1?(s="Okay",l="#C9A227",a="Decent, but aim for 20%+. Trim your biggest expense category."):o>=0?(s="Tight",l="#C2773B",a="You're saving very little. Review recurring bills and EMIs."):(s="Overspending",l="#D1556E",a="You're spending more than you earn. Cut back to avoid debt.");const d=e>0?Math.min(100,Math.round(r/e*100)):0;return t.jsxs("div",{style:z.card,children:[t.jsxs("div",{style:z.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(Hy,{size:18,color:l}),t.jsxs("div",{children:[t.jsx("div",{style:z.cardTitle,children:"Financial health"}),t.jsx("div",{style:z.cardSub,children:"Based on your savings rate this period"})]})]}),t.jsxs("div",{style:{textAlign:"right"},children:[t.jsx("div",{style:{...z.healthScore,color:l},children:e===0?"—":i}),t.jsx("div",{style:{...z.healthStatus,color:l},children:s})]})]}),t.jsx("div",{style:z.gaugeTrack,children:t.jsx("div",{style:{...z.gaugeFill,width:`${e===0?0:i}%`,background:l}})}),t.jsxs("div",{style:z.healthStats,children:[t.jsxs("div",{style:z.healthStat,children:[t.jsxs("span",{style:z.healthStatV,children:[e>0?Math.round(o*100):0,"%"]}),t.jsx("span",{style:z.healthStatL,children:"Savings rate"})]}),t.jsxs("div",{style:z.healthStat,children:[t.jsxs("span",{style:z.healthStatV,children:[d,"%"]}),t.jsx("span",{style:z.healthStatL,children:"of income spent"})]})]}),t.jsx("div",{style:{...z.tip,borderColor:l+"55",background:l+"12",color:l},children:a})]})}function t1({txns:e,expCats:r,investments:n,fixedItems:o,reload:i,money:s,cur:l}){const[a,d]=g.useState(""),[u,m]=g.useState("Salary"),[f,h]=g.useState(_o),[I,B]=g.useState(""),[k,C]=g.useState(null),[p,c]=g.useState(null),[b,T]=g.useState(null),{deleteItem:y,toasts:w,handleUndo:D,handleDismiss:S}=br(E.deleteTxn,E.restoreTxn,i),{deleteItem:j,toasts:N,handleUndo:J,handleDismiss:se}=br(E.deleteExpenseLog,E.restoreExpenseLog,i),{deleteItem:W,toasts:de,handleUndo:Re,handleDismiss:pe}=br(E.deleteInvestment,E.restoreInvestment,i),je=()=>{var v;return T({id:null,kind:"expense",name:"",amount:"",category_id:((v=r[0])==null?void 0:v.id)||"",invest_kind:"Stocks",note:""})},Q=v=>{var re;return T({id:v.id,kind:v.kind,name:v.name,amount:String(v.amount),category_id:v.category_id||((re=r[0])==null?void 0:re.id)||"",invest_kind:v.invest_kind||"Stocks",note:v.note||""})},x=async()=>{const v=b.name.trim(),re=parseFloat(b.amount)||0;if(!v||re<=0)return;const F={kind:b.kind,name:v,amount:re,note:b.note.trim(),...b.kind==="expense"?{category_id:Number(b.category_id)}:{invest_kind:b.invest_kind}};b.id?await E.updateFixedItem(b.id,F):await E.createFixedItem(F),T(null),i()},Y=async v=>{window.confirm(`Stop "${v.name}" from auto-posting each month? Past entries it already created will stay.`)&&(await E.deleteFixedItem(v.id),i())},H=async v=>{await E.updateFixedItem(v.id,{active:!v.active}),i()},ae=()=>c({id:null,name:"",kind:"Stocks",invested:"",current_value:"",date:_o,note:""}),V=v=>c({id:v.id,name:v.name,kind:v.kind,invested:String(v.invested),current_value:String(v.current_value),date:v.date,note:v.note||""}),G=async()=>{const v=p.name.trim(),re=parseFloat(p.invested)||0,F=parseFloat(p.current_value)||0;if(!v)return;const le={name:v,kind:p.kind,invested:re,current_value:F,note:p.note.trim(),date:p.date};p.id?await E.updateInvestment(p.id,le):await E.createInvestment(le),c(null),i()},P=n.reduce((v,re)=>v+re.invested,0),ge=n.reduce((v,re)=>v+re.current_value,0),ce=ge-P,We=async()=>{const v=parseFloat(a);!v||v<=0||(await E.createTxn({kind:"income",category:u,amount:v,note:I.trim(),date:f}),d(""),B(""),i())},X=v=>C({id:v.id,rawId:v.rawId,source:v.source,kind:v.kind,amount:String(v.amount),category:v.category,date:v.date,note:v.note||""}),ne=(k==null?void 0:k.source)==="expense"?r.map(v=>v.name):(k==null?void 0:k.kind)==="income"?jp:Uv,L=async()=>{const v=parseFloat(k.amount);if(!(!v||v<=0)){if(k.source==="expense"){const re=r.find(F=>F.name===k.category);await E.updateExpenseLog(k.rawId,{amount:v,note:k.note.trim(),date:k.date,...re?{category_id:re.id}:{}})}else await E.updateTxn(k.id,{kind:k.kind,category:k.category,amount:v,note:k.note.trim(),date:k.date});C(null),i()}},ie=v=>{v.source==="expense"?j(v.rawId,v.category):y(v.id,v.category)},he=g.useMemo(()=>{const v={};return e.forEach(re=>{(v[re.date]=v[re.date]||[]).push(re)}),Object.entries(v).sort((re,F)=>F[0].localeCompare(re[0]))},[e]),A=v=>new Date(v+"T00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:z.card,children:[t.jsx("div",{style:z.cardTitle,children:"Add income"}),t.jsxs("div",{style:z.cardSub,children:["Expenses are added from the ",t.jsx("b",{children:"Expenses"})," section and show up here automatically."]}),t.jsxs("div",{style:z.formGrid,children:[t.jsx("input",{type:"number",inputMode:"decimal",placeholder:"Amount",value:a,onChange:v=>d(v.target.value),onKeyDown:v=>v.key==="Enter"&&We(),style:z.input,autoFocus:!0}),t.jsx("select",{value:u,onChange:v=>m(v.target.value),style:z.input,children:jp.map(v=>t.jsx("option",{children:v},v))}),t.jsx("input",{type:"date",value:f,max:_o,onChange:v=>h(v.target.value),style:z.input})]}),t.jsx("input",{placeholder:"Note (optional)",value:I,onChange:v=>B(v.target.value),onKeyDown:v=>v.key==="Enter"&&We(),style:{...z.input,marginTop:8}}),t.jsxs("button",{onClick:We,style:{...z.addBtn,background:hn},children:[t.jsx(ot,{size:15})," Add income"]})]}),t.jsxs("div",{style:z.card,children:[t.jsxs("div",{style:z.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(d0,{size:18,color:sd}),t.jsxs("div",{children:[t.jsx("div",{style:z.cardTitle,children:"Fixed items"}),t.jsx("div",{style:z.cardSub,children:"EMI, rent, SIP… auto-posted at the start of every billing cycle"})]})]}),t.jsxs("button",{onClick:je,style:{...z.invAddBtn,background:sd},children:[t.jsx(ot,{size:14})," Add"]})]}),o.length===0?t.jsx("div",{style:z.muted,children:"No fixed items yet — add an EMI or rent to auto-post it every cycle."}):t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:o.map(v=>{var F;const re=v.kind==="expense"?((F=r.find(le=>le.id===v.category_id))==null?void 0:F.name)||"Other":v.invest_kind||"Other";return t.jsxs("div",{style:{...z.invRow,opacity:v.active?1:.5},children:[t.jsx("span",{style:{...z.txnDot,background:v.kind==="expense"?Rr:mn}}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:z.txnCat,children:v.name}),t.jsxs("div",{style:z.txnNote,children:[v.kind==="expense"?"Fixed expense":"Fixed investment"," · ",re]})]}),t.jsxs("span",{style:{...z.txnAmt,color:v.kind==="expense"?Rr:mn},children:[s(v.amount),"/mo"]}),t.jsx("button",{onClick:()=>H(v),style:z.delBtn,title:v.active?"Pause":"Resume",children:v.active?t.jsx(uh,{size:13}):t.jsx(zg,{size:13})}),t.jsx("button",{onClick:()=>Q(v),style:z.delBtn,children:t.jsx(yt,{size:13})}),t.jsx("button",{onClick:()=>Y(v),style:z.delBtn,children:t.jsx(De,{size:14})})]},v.id)})})]}),t.jsxs("div",{style:z.card,children:[t.jsxs("div",{style:z.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(Xl,{size:18,color:mn}),t.jsxs("div",{children:[t.jsx("div",{style:z.cardTitle,children:"Investments"}),t.jsx("div",{style:z.cardSub,children:"Asset generation — what you've put in vs. what it's worth now"})]})]}),t.jsxs("button",{onClick:ae,style:z.invAddBtn,children:[t.jsx(ot,{size:14})," Add"]})]}),n.length===0?t.jsx("div",{style:z.muted,children:"No investments tracked yet."}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:z.healthStats,children:[t.jsxs("div",{style:z.healthStat,children:[t.jsx("span",{style:z.healthStatV,children:s(P)}),t.jsx("span",{style:z.healthStatL,children:"Invested"})]}),t.jsxs("div",{style:z.healthStat,children:[t.jsx("span",{style:z.healthStatV,children:s(ge)}),t.jsx("span",{style:z.healthStatL,children:"Current value"})]}),t.jsxs("div",{style:z.healthStat,children:[t.jsxs("span",{style:{...z.healthStatV,color:ce>=0?hn:Rr},children:[ce>=0?"+":"",s(ce)]}),t.jsx("span",{style:z.healthStatL,children:"Gain / loss"})]})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginTop:4},children:n.map(v=>{const re=v.current_value-v.invested,F=v.invested>0?re/v.invested*100:0;return t.jsxs("div",{style:z.invRow,children:[t.jsx("span",{style:{...z.txnDot,background:mn}}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:z.txnCat,children:v.name}),t.jsxs("div",{style:z.txnNote,children:[v.kind," · invested ",s(v.invested)]})]}),t.jsxs("div",{style:{textAlign:"right"},children:[t.jsx("div",{style:z.txnAmt,children:s(v.current_value)}),t.jsxs("div",{style:{...z.invPct,color:re>=0?hn:Rr},children:[re>=0?"+":"",Math.round(F),"%"]})]}),t.jsx("button",{onClick:()=>V(v),style:z.delBtn,children:t.jsx(yt,{size:13})}),t.jsx("button",{onClick:()=>W(v.id,v.name),style:z.delBtn,children:t.jsx(De,{size:14})})]},v.id)})})]})]}),t.jsxs("div",{style:z.card,children:[t.jsx("div",{style:z.cardTitle,children:"History"}),he.length===0?t.jsx("div",{style:z.muted,children:"No transactions yet."}):t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:he.map(([v,re])=>t.jsxs("div",{children:[t.jsx("div",{style:z.dateHead,children:A(v)}),re.map(F=>(k==null?void 0:k.id)===F.id?t.jsxs("div",{style:z.editTxn,children:[t.jsxs("div",{style:z.formGrid,children:[t.jsx("input",{type:"number",inputMode:"decimal",value:k.amount,onChange:le=>C({...k,amount:le.target.value}),style:z.input}),t.jsx("select",{value:k.category,onChange:le=>C({...k,category:le.target.value}),style:z.input,children:ne.map(le=>t.jsx("option",{children:le},le))}),t.jsx("input",{type:"date",value:k.date,max:_o,onChange:le=>C({...k,date:le.target.value}),style:z.input})]}),t.jsx("input",{placeholder:"Note (optional)",value:k.note,onChange:le=>C({...k,note:le.target.value}),onKeyDown:le=>le.key==="Enter"&&L(),style:{...z.input,marginTop:8}}),t.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[t.jsxs("button",{onClick:()=>C(null),style:z.editCancel,children:[t.jsx(De,{size:14})," Cancel"]}),t.jsxs("button",{onClick:L,style:{...z.addBtn,marginTop:0,flex:1,background:k.kind==="income"?hn:Rr},children:[t.jsx(He,{size:15})," Save"]})]})]},F.id):t.jsxs("div",{style:z.txnRow,children:[t.jsx("span",{style:{...z.txnDot,background:Fg(F.category)}}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:z.txnCat,children:F.category}),F.note&&t.jsx("div",{style:z.txnNote,children:F.note})]}),t.jsxs("span",{style:{...z.txnAmt,color:F.kind==="income"?hn:Rr},children:[F.kind==="income"?"+":"−",s(F.amount)]}),t.jsx("button",{onClick:()=>X(F),style:z.delBtn,children:t.jsx(yt,{size:13})}),t.jsx("button",{onClick:()=>ie(F),style:z.delBtn,children:t.jsx(De,{size:14})})]},F.id))]},v))})]}),p&&t.jsx("div",{style:z.overlay,onClick:()=>c(null),children:t.jsxs("div",{style:z.modal,onClick:v=>v.stopPropagation(),children:[t.jsxs("div",{style:z.modalHead,children:[t.jsx("span",{style:z.modalTitle,children:p.id?"Edit investment":"New investment"}),t.jsx("button",{onClick:()=>c(null),style:z.iconBtnPlain,children:t.jsx(De,{size:16})})]}),t.jsx("label",{style:z.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:p.name,onChange:v=>c(re=>({...re,name:v.target.value})),placeholder:"e.g. Nifty Index Fund, HDFC FD…",style:z.input}),t.jsx("label",{style:z.label,children:"Type"}),t.jsx("select",{value:p.kind,onChange:v=>c(re=>({...re,kind:v.target.value})),style:z.input,children:kp.map(v=>t.jsx("option",{children:v},v))}),t.jsxs("div",{style:z.formGrid,children:[t.jsxs("div",{children:[t.jsx("label",{style:z.label,children:"Invested"}),t.jsx("input",{type:"number",inputMode:"decimal",value:p.invested,onChange:v=>c(re=>({...re,invested:v.target.value})),placeholder:"0",style:z.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:z.label,children:"Current value"}),t.jsx("input",{type:"number",inputMode:"decimal",value:p.current_value,onChange:v=>c(re=>({...re,current_value:v.target.value})),placeholder:"0",style:z.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:z.label,children:"Date"}),t.jsx("input",{type:"date",value:p.date,max:_o,onChange:v=>c(re=>({...re,date:v.target.value})),style:z.input})]})]}),t.jsx("label",{style:z.label,children:"Note (optional)"}),t.jsx("input",{value:p.note,onChange:v=>c(re=>({...re,note:v.target.value})),placeholder:"Folio no., broker, etc.",style:z.input}),t.jsxs("div",{style:z.modalActions,children:[t.jsx("button",{onClick:()=>c(null),style:z.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:G,disabled:!p.name.trim(),style:{...z.saveBtn,...p.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",p.id?"Save":"Add"]})]})]})}),b&&t.jsx("div",{style:z.overlay,onClick:()=>T(null),children:t.jsxs("div",{style:z.modal,onClick:v=>v.stopPropagation(),children:[t.jsxs("div",{style:z.modalHead,children:[t.jsx("span",{style:z.modalTitle,children:b.id?"Edit fixed item":"New fixed item"}),t.jsx("button",{onClick:()=>T(null),style:z.iconBtnPlain,children:t.jsx(De,{size:16})})]}),t.jsxs("div",{style:z.kindToggle,children:[t.jsxs("button",{onClick:()=>T(v=>({...v,kind:"expense"})),style:{...z.kindBtn,...b.kind==="expense"?{background:Rr,color:"#fff",borderColor:Rr}:{}},children:[t.jsx(oh,{size:15})," Expense"]}),t.jsxs("button",{onClick:()=>T(v=>({...v,kind:"investment"})),style:{...z.kindBtn,...b.kind==="investment"?{background:mn,color:"#fff",borderColor:mn}:{}},children:[t.jsx(Xl,{size:15})," Investment"]})]}),t.jsx("label",{style:z.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:b.name,onChange:v=>T(re=>({...re,name:v.target.value})),placeholder:b.kind==="expense"?"e.g. Home loan EMI, Rent…":"e.g. Monthly SIP — Nifty Index",style:z.input}),t.jsxs("div",{style:z.formGrid,children:[t.jsxs("div",{children:[t.jsx("label",{style:z.label,children:"Amount / month"}),t.jsx("input",{type:"number",inputMode:"decimal",value:b.amount,onChange:v=>T(re=>({...re,amount:v.target.value})),placeholder:"0",style:z.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:z.label,children:b.kind==="expense"?"Category":"Type"}),b.kind==="expense"?t.jsx("select",{value:b.category_id,onChange:v=>T(re=>({...re,category_id:v.target.value})),style:z.input,children:r.map(v=>t.jsx("option",{value:v.id,children:v.name},v.id))}):t.jsx("select",{value:b.invest_kind,onChange:v=>T(re=>({...re,invest_kind:v.target.value})),style:z.input,children:kp.map(v=>t.jsx("option",{children:v},v))})]})]}),t.jsx("label",{style:z.label,children:"Note (optional)"}),t.jsx("input",{value:b.note,onChange:v=>T(re=>({...re,note:v.target.value})),placeholder:"Loan account no., etc.",style:z.input}),t.jsx("p",{style:z.fixedHint,children:"Posts automatically at the start of every billing cycle (set in Settings → Currency). This one posts immediately for the current cycle when you save."}),t.jsxs("div",{style:z.modalActions,children:[t.jsx("button",{onClick:()=>T(null),style:z.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:x,disabled:!b.name.trim()||!(parseFloat(b.amount)>0),style:{...z.saveBtn,background:sd,...!b.name.trim()||!(parseFloat(b.amount)>0)?{opacity:.5,cursor:"not-allowed"}:{}},children:[t.jsx(He,{size:15})," ",b.id?"Save":"Add"]})]})]})}),t.jsx(mr,{toasts:w,onUndo:D,onDismiss:S}),t.jsx(mr,{toasts:N,onUndo:J,onDismiss:se}),t.jsx(mr,{toasts:de,onUndo:Re,onDismiss:pe})]})}function r1({money:e,cur:r}){return t.jsxs(t.Fragment,{children:[t.jsx(n1,{money:e,cur:r}),t.jsx(i1,{money:e,cur:r})]})}function ho({label:e,value:r,set:n,min:o,max:i,step:s,suffix:l}){return t.jsxs("div",{style:z.field,children:[t.jsxs("div",{style:z.fieldTop,children:[t.jsx("span",{style:z.fieldLabel,children:e}),t.jsxs("div",{style:z.fieldInputWrap,children:[t.jsx("input",{type:"number",value:r,onChange:a=>n(a.target.value),style:z.fieldInput}),l&&t.jsx("span",{style:z.fieldSuffix,children:l})]})]}),t.jsx("input",{type:"range",min:o,max:i,step:s,value:r,onChange:a=>n(a.target.value),style:z.range})]})}function n1({money:e,cur:r}){const[n,o]=g.useState(3e4),[i,s]=g.useState(12),[l,a]=g.useState(15),{invested:d,futureValue:u,gains:m,yearly:f}=g.useMemo(()=>{const I=Math.max(0,parseFloat(n)||0),B=Math.max(0,parseFloat(i)||0),k=Math.max(0,Math.min(60,parseInt(l)||0)),C=B/12/100,p=y=>y<=0?0:C===0?I*y:I*((Math.pow(1+C,y)-1)/C)*(1+C),c=[];for(let y=1;y<=k;y++)c.push({year:y,invested:I*12*y,value:p(y*12)});const b=p(k*12),T=I*12*k;return{invested:T,futureValue:b,gains:b-T,yearly:c}},[n,i,l]),h=Math.max(1,...f.map(I=>I.value));return t.jsxs("div",{style:z.card,children:[t.jsx("div",{style:z.cardTitleRow,children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(i0,{size:18,color:"#3A7CA5"}),t.jsxs("div",{children:[t.jsx("div",{style:z.cardTitle,children:"SIP projection"}),t.jsx("div",{style:z.cardSub,children:"Mutual fund / SIP future value"})]})]})}),t.jsx(ho,{label:"Monthly investment",value:n,set:o,min:500,max:5e5,step:500,suffix:r.symbol}),t.jsx(ho,{label:"Expected return (p.a.)",value:i,set:s,min:1,max:30,step:.5,suffix:"%"}),t.jsx(ho,{label:"Time period",value:l,set:a,min:1,max:40,step:1,suffix:"yrs"}),t.jsxs("div",{style:z.resultHero,children:[t.jsx("div",{style:z.resultLabel,children:"Projected wealth"}),t.jsx("div",{style:{...z.resultVal,color:"#3A7CA5"},children:e(u)})]}),t.jsxs("div",{style:z.splitRow,children:[t.jsxs("div",{style:z.splitItem,children:[t.jsx("span",{style:z.splitV,children:e(d)}),t.jsx("span",{style:z.splitL,children:"Invested"})]}),t.jsxs("div",{style:z.splitItem,children:[t.jsx("span",{style:{...z.splitV,color:"#3E9E6B"},children:e(m)}),t.jsx("span",{style:z.splitL,children:"Est. returns"})]})]}),f.length>0&&t.jsxs("div",{style:z.chartWrap,children:[t.jsx("div",{style:z.chartBars,children:f.map(I=>t.jsx("div",{style:z.chartCol,title:`Year ${I.year}: ${e(I.value)}`,children:t.jsx("div",{style:{...z.chartStack,height:`${I.value/h*100}%`},children:t.jsx("div",{style:{...z.chartGain,height:`${(1-I.invested/I.value)*100}%`}})})},I.year))}),t.jsxs("div",{style:z.chartAxis,children:[t.jsx("span",{children:"Yr 1"}),t.jsxs("span",{style:{marginLeft:"auto"},children:["Yr ",f.length]})]}),t.jsxs("div",{style:z.legend,children:[t.jsxs("span",{style:z.legendItem,children:[t.jsx("span",{style:{...z.legendDot,background:"#9DBFD6"}})," Invested"]}),t.jsxs("span",{style:z.legendItem,children:[t.jsx("span",{style:{...z.legendDot,background:"#3E9E6B"}})," Returns"]})]})]})]})}function Sp(e,r,n,o=0,i=0){let s=Math.max(0,e-i),l=0,a=0,d=i;const u=1200;for(;s>.01&&a<u;){const m=s*r;let f=n+o,h=f-m;if(h<=0)return{months:1/0,totalInterest:1/0,totalPaid:1/0};h>s&&(h=s,f=s+m),s-=h,l+=m,d+=f,a++}return{months:a,totalInterest:l,totalPaid:d}}const Cp=e=>{if(!isFinite(e))return"—";const r=Math.floor(e/12),n=e%12;return(r?`${r}y `:"")+`${n}m`},o1=e=>{if(!isFinite(e))return"—";const r=new Date;return r.setMonth(r.getMonth()+e),r.toLocaleDateString("en-US",{month:"short",year:"numeric"})};function i1({money:e,cur:r}){const[n,o]=g.useState(2e6),[i,s]=g.useState(9),[l,a]=g.useState(20),[d,u]=g.useState(5e5),[m,f]=g.useState("once"),[h,I]=g.useState("tenure"),B=g.useMemo(()=>{const b=Math.max(0,parseFloat(n)||0),T=Math.max(0,parseFloat(i)||0)/12/100,y=Math.max(1,Math.round((parseFloat(l)||0)*12)),w=T===0?b/y:b*T*Math.pow(1+T,y)/(Math.pow(1+T,y)-1);return{P:b,i:T,n:y,emi:w,totalPay:w*y,totalInterest:w*y-b}},[n,i,l]),k=m==="monthly"?"tenure":h,C=g.useMemo(()=>{const{P:b,i:T,n:y,emi:w,totalInterest:D}=B,S=Math.max(0,parseFloat(d)||0);if(S<=0)return null;let j=w,N=y,J=D,se=B.totalPay;if(m==="once"&&k==="emi"){const W=Math.max(0,b-S);j=T===0?W/y:W*T*Math.pow(1+T,y)/(Math.pow(1+T,y)-1),N=y,J=j*y-W,se=S+j*y}else if(m==="once"){const W=Sp(b,T,w,0,S);N=W.months,J=W.totalInterest,se=W.totalPaid}else{const W=Sp(b,T,w,S,0);N=W.months,J=W.totalInterest,se=W.totalPaid}return{newEMI:j,newMonths:N,newInterest:J,totalPaid:se,interestSaved:Math.max(0,D-J),monthsSaved:Math.max(0,y-(isFinite(N)?N:y))}},[B,d,m,k]),p=B.totalPay>0?B.P/B.totalPay*100:0,c=m==="once"?Math.max(1e5,Math.round(B.P)):Math.max(5e4,Math.round(B.emi*3));return t.jsxs("div",{style:z.card,children:[t.jsx("div",{style:z.cardTitleRow,children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(Yy,{size:18,color:"#C2536B"}),t.jsxs("div",{children:[t.jsx("div",{style:z.cardTitle,children:"EMI calculator"}),t.jsx("div",{style:z.cardSub,children:"Loan / mortgage monthly payment"})]})]})}),t.jsx(ho,{label:"Loan amount",value:n,set:o,min:5e4,max:5e7,step:5e4,suffix:r.symbol}),t.jsx(ho,{label:"Interest rate (p.a.)",value:i,set:s,min:1,max:24,step:.1,suffix:"%"}),t.jsx(ho,{label:"Tenure",value:l,set:a,min:1,max:30,step:1,suffix:"yrs"}),t.jsxs("div",{style:z.resultHero,children:[t.jsx("div",{style:z.resultLabel,children:"Monthly EMI"}),t.jsx("div",{style:{...z.resultVal,color:"#C2536B"},children:e(B.emi)})]}),t.jsxs("div",{style:z.emiSplitTrack,children:[t.jsx("div",{style:{width:`${p}%`,background:"#5B7C99",height:"100%"}}),t.jsx("div",{style:{width:`${100-p}%`,background:"#C2536B",height:"100%"}})]}),t.jsxs("div",{style:z.splitRow,children:[t.jsxs("div",{style:z.splitItem,children:[t.jsx("span",{style:{...z.splitV,color:"#5B7C99"},children:e(B.P)}),t.jsx("span",{style:z.splitL,children:"Principal"})]}),t.jsxs("div",{style:z.splitItem,children:[t.jsx("span",{style:{...z.splitV,color:"#C2536B"},children:e(B.totalInterest)}),t.jsx("span",{style:z.splitL,children:"Total interest"})]}),t.jsxs("div",{style:z.splitItem,children:[t.jsx("span",{style:z.splitV,children:e(B.totalPay)}),t.jsx("span",{style:z.splitL,children:"Total payable"})]})]}),t.jsx("div",{style:z.subDivider}),t.jsx("div",{style:z.subTitle,children:"Prepayment planner"}),t.jsx("div",{style:z.cardSub,children:"See what an extra payment does to your loan."}),t.jsx("div",{style:{marginTop:14},children:t.jsx(ho,{label:"Prepayment amount",value:d,set:u,min:0,max:c,step:m==="once"?25e3:1e3,suffix:r.symbol})}),t.jsxs("div",{style:z.segGroup,children:[t.jsx("span",{style:z.segLbl,children:"Type"}),t.jsxs("div",{style:z.segRow,children:[t.jsx(ol,{label:"One-time",on:m==="once",onClick:()=>f("once")}),t.jsx(ol,{label:"Every month",on:m==="monthly",onClick:()=>f("monthly")})]})]}),t.jsxs("div",{style:z.segGroup,children:[t.jsx("span",{style:z.segLbl,children:"Strategy"}),t.jsxs("div",{style:z.segRow,children:[t.jsx(ol,{label:"Reduce tenure",on:k==="tenure",onClick:()=>I("tenure")}),t.jsx(ol,{label:"Reduce EMI",on:k==="emi",disabled:m==="monthly",onClick:()=>I("emi")})]})]}),m==="monthly"&&t.jsx("div",{style:z.note,children:"An extra monthly payment always shortens the tenure. Switch to a one-time prepayment to reduce your EMI instead."}),C?t.jsxs("div",{style:z.cmpCard,children:[t.jsxs("div",{style:z.cmpRow,children:[t.jsx("span",{style:z.cmpLbl,children:"New EMI"}),t.jsxs("span",{style:z.cmpVal,children:[e(C.newEMI),C.newEMI<B.emi-1&&t.jsxs("span",{style:z.cmpWas,children:[" was ",e(B.emi)]})]})]}),t.jsxs("div",{style:z.cmpRow,children:[t.jsx("span",{style:z.cmpLbl,children:"New tenure"}),t.jsxs("span",{style:z.cmpVal,children:[Cp(C.newMonths)," ",t.jsxs("span",{style:z.cmpWas,children:["· paid off ",o1(C.newMonths)]})]})]}),t.jsxs("div",{style:z.cmpRow,children:[t.jsx("span",{style:z.cmpLbl,children:"Total interest"}),t.jsx("span",{style:z.cmpVal,children:e(C.newInterest)})]}),t.jsxs("div",{style:z.cmpRow,children:[t.jsx("span",{style:z.cmpLbl,children:"Total payable"}),t.jsx("span",{style:z.cmpVal,children:e(C.totalPaid)})]}),t.jsxs("div",{style:z.saveRow,children:["You save ",e(C.interestSaved)," in interest",C.monthsSaved>0?` · ${Cp(C.monthsSaved)} sooner`:""]})]}):t.jsx("div",{style:z.muted,children:"Enter a prepayment amount to see the impact."})]})}function ol({label:e,on:r,onClick:n,disabled:o}){return t.jsx("button",{onClick:o?void 0:n,disabled:o,style:{...z.seg,...r?z.segOn:{},...o?z.segDisabled:{}},children:e})}const z={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},tabs:{display:"flex",gap:7,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},presetRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},preset:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},presetOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},sumGrid:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:16},sumCard:{background:"var(--surface)",borderRadius:14,padding:"14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},sumIcon:{width:30,height:30,borderRadius:9,display:"grid",placeItems:"center",marginBottom:8},sumLabel:{fontSize:11.5,color:"var(--text-3)",fontWeight:600},sumVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2,letterSpacing:"-0.01em",wordBreak:"break-word"},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},cardTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},twoCol:{display:"grid",gridTemplateColumns:"1fr",gap:0},dot:{width:10,height:10,borderRadius:3,flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieSvg:{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"visible"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",transition:"transform 0.15s, box-shadow 0.15s",pointerEvents:"none",textAlign:"center",padding:4,boxSizing:"border-box"},pieHoleVal:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:160,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8,borderRadius:8,padding:"3px 5px",margin:"-3px -5px",cursor:"default",transition:"background 0.15s"},legendRowOn:{background:"var(--surface-2)"},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},investNote:{display:"flex",alignItems:"center",gap:6,fontSize:11.5,color:"var(--text-3)",marginBottom:14,marginTop:-4},healthScore:{fontSize:32,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1},healthStatus:{fontSize:12.5,fontWeight:700,marginTop:2},gaugeTrack:{height:10,background:"var(--surface-2)",borderRadius:6,overflow:"hidden",marginBottom:14},gaugeFill:{height:"100%",borderRadius:6,transition:"width 0.4s"},healthStats:{display:"flex",gap:24,marginBottom:12},healthStat:{display:"flex",flexDirection:"column"},healthStatV:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},healthStatL:{fontSize:11,color:"var(--text-3)",fontWeight:600},tip:{fontSize:12.5,lineHeight:1.5,padding:"10px 12px",borderRadius:10,border:"1px solid",fontWeight:500},kindToggle:{display:"flex",gap:8,marginBottom:12},kindBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},formGrid:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},input:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},addBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},invAddBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"7px 13px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",flexShrink:0},invRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},invPct:{fontSize:11,fontWeight:700,marginTop:1},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},fixedHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.5,marginTop:10,marginBottom:0},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},dateHead:{fontSize:11,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8},txnRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},txnDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},txnCat:{fontSize:13.5,fontWeight:600},txnNote:{fontSize:11.5,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},txnAmt:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},editTxn:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:12,margin:"6px 0"},editCancel:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},field:{marginBottom:16},fieldTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},fieldLabel:{fontSize:13,fontWeight:600,color:"var(--text-2)"},fieldInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:8,padding:"5px 10px",background:"var(--surface-2)"},fieldInput:{border:"none",background:"none",outline:"none",width:90,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},fieldSuffix:{fontSize:12,color:"var(--text-3)",fontWeight:600},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},resultHero:{textAlign:"center",padding:"14px 0 6px"},resultLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},resultVal:{fontSize:34,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,wordBreak:"break-word"},splitRow:{display:"flex",gap:10,marginTop:10},splitItem:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",background:"var(--surface-2)",borderRadius:10,padding:"10px 6px"},splitV:{fontSize:14.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",wordBreak:"break-word"},splitL:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:2},chartWrap:{marginTop:18},chartBars:{display:"flex",alignItems:"flex-end",gap:3,height:90},chartCol:{flex:1,height:"100%",display:"flex",alignItems:"flex-end"},chartStack:{width:"100%",background:"#9DBFD6",borderRadius:"3px 3px 0 0",minHeight:2,position:"relative",display:"flex",flexDirection:"column",justifyContent:"flex-start"},chartGain:{width:"100%",background:"#3E9E6B",borderRadius:"3px 3px 0 0"},chartAxis:{display:"flex",fontSize:10,color:"var(--text-3)",fontWeight:600,marginTop:6},legend:{display:"flex",gap:16,justifyContent:"center",marginTop:10},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)",fontWeight:600},legendDot:{width:10,height:10,borderRadius:3},emiSplitTrack:{display:"flex",height:12,borderRadius:6,overflow:"hidden",marginTop:16,border:"1px solid var(--border)"},subDivider:{height:1,background:"var(--border)",margin:"20px 0 14px"},subTitle:{fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},segGroup:{marginBottom:12},segLbl:{fontSize:12,fontWeight:600,color:"var(--text-3)",display:"block",marginBottom:6},segRow:{display:"flex",gap:8},seg:{flex:1,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},segOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},segDisabled:{opacity:.4,cursor:"not-allowed"},note:{fontSize:12,lineHeight:1.5,color:"var(--text-3)",background:"var(--surface-2)",borderRadius:9,padding:"9px 11px",marginBottom:12},cmpCard:{background:"var(--surface-2)",borderRadius:12,padding:"12px 14px",marginTop:4},cmpRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"6px 0",borderBottom:"1px solid var(--border)",gap:10},cmpLbl:{fontSize:12.5,color:"var(--text-2)",fontWeight:600},cmpVal:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",textAlign:"right"},cmpWas:{fontSize:11,color:"var(--text-3)",fontWeight:500,fontFamily:"'Inter',system-ui,sans-serif"},saveRow:{marginTop:12,background:"rgba(62,158,107,0.12)",color:"#3E9E6B",borderRadius:9,padding:"10px 12px",fontSize:13,fontWeight:700,textAlign:"center"}},kc=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],ad={Monday:"Mon",Tuesday:"Tue",Wednesday:"Wed",Thursday:"Thu",Friday:"Fri",Saturday:"Sat",Sunday:"Sun"},Wi=()=>kc[(new Date().getDay()+6)%7],cn={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},zp=Object.keys(cn),dd=21,Tp="kickstart_tags",cd=e=>{if(!e)return"";const r=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(r))return r;const n=r.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},Ip=e=>{if(!e||!String(e).trim())return null;const r=String(e).split(":").map(n=>parseInt(n.trim(),10));return r.some(n=>isNaN(n)||n<0)?null:r.reduce((n,o)=>n*60+o,0)},il=e=>{if(e==null)return"";const r=Math.max(0,e|0);return`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`},s1=e=>`https://www.youtube.com/embed/${e.youtube_id}?start=${e.start_sec||0}`+(e.end_sec?`&end=${e.end_sec}`:"")+"&autoplay=1&rel=0",l1=()=>({id:null,url:"",title:"",start:"",end:"",days:[Wi()],pillars:[],customs:[]});function a1(){const[e,r]=g.useState([]),[n,o]=g.useState([]),[i,s]=g.useState(!1),[l,a]=g.useState({type:"day",value:Wi()}),[d,u]=g.useState(null),[m,f]=g.useState(null),[h,I]=g.useState(""),B=g.useCallback(async()=>{try{const[W,de]=await Promise.all([E.getKickstart(),E.getSetting(Tp)]);r(W),o(Array.isArray(de==null?void 0:de.value)?de.value:[])}catch{}s(!0)},[]);g.useEffect(()=>{B()},[B]);const{deleteItem:k,toasts:C,handleUndo:p,handleDismiss:c}=br(E.deleteKickstart,E.restoreKickstart,B);g.useEffect(()=>{if(!m)return;const W=e.find(Q=>Q.id===m);if(!W)return;const de=W.end_sec?Math.max(1,W.end_sec-(W.start_sec||0)):1/0;let Re=0;const pe=10,je=setInterval(()=>{if(document.hidden)return;const Q=de-Re;if(Q<=0){clearInterval(je);return}const x=Math.min(pe,Q);Re+=x,E.addScreenTime("kickstart",Math.round(x)).catch(()=>{})},pe*1e3);return()=>clearInterval(je)},[m,e]);const b=W=>{o(W),E.setSetting(Tp,W).catch(()=>{})},T=()=>{const W=h.trim();!W||n.length>=dd||n.includes(W)||(b([...n,W]),u(de=>de&&!de.customs.includes(W)?{...de,customs:[...de.customs,W]}:de),I(""))},y=W=>b(n.filter(de=>de!==W)),w=(W,de)=>u(Re=>({...Re,[W]:Re[W].includes(de)?Re[W].filter(pe=>pe!==de):[...Re[W],de]})),D=W=>u({id:W.id,url:`https://youtu.be/${W.youtube_id}`,title:W.title,start:il(W.start_sec),end:W.end_sec?il(W.end_sec):"",days:[...W.days],pillars:[...W.pillars],customs:[...W.customs]}),S=async()=>{const W=cd(d.url);if(!W||d.days.length===0||!d.title.trim())return;const de={youtube_id:W,title:d.title.trim(),start_sec:Ip(d.start)||0,end_sec:Ip(d.end),days:d.days,pillars:d.pillars,customs:d.customs};d.id?await E.updateKickstart(d.id,de):await E.createKickstart(de),u(null),B()},j=g.useMemo(()=>e.filter(W=>l.type==="all"?!0:l.type==="day"?W.days.includes(l.value):l.type==="pillar"?W.pillars.includes(l.value):l.type==="custom"?W.customs.includes(l.value):!0),[e,l]),N=(W,de)=>l.type===W&&l.value===de,J=d?[!cd(d.url)&&"a valid YouTube link",!d.title.trim()&&"a title",d.days.length===0&&"at least one day"].filter(Boolean):[],se=!!d&&J.length===0;return t.jsxs("div",{style:Be.page,children:[t.jsxs("div",{style:Be.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:Be.eyebrow,children:"Anvil · Kickstart"}),t.jsx("h1",{style:Be.h1,children:"Kickstart"}),t.jsxs("div",{style:Be.subhead,children:["Your motivation hub — the right push for ",Wi(),"."]})]}),!d&&t.jsxs("button",{onClick:()=>u(l1()),style:Be.addBtn,children:[t.jsx(ot,{size:15})," Add video"]})]}),d&&t.jsxs("div",{style:Be.card,children:[t.jsx("div",{style:Be.cardTitle,children:d.id?"Edit video":"Add video"}),t.jsx("input",{placeholder:"YouTube link (or video ID)",value:d.url,onChange:W=>u({...d,url:W.target.value}),style:Be.input,autoFocus:!0}),d.url&&!cd(d.url)&&t.jsx("div",{style:Be.warn,children:"Couldn't find a YouTube video ID in that link."}),t.jsx("input",{placeholder:"Title (required)",value:d.title,onChange:W=>u({...d,title:W.target.value}),style:{...Be.input,marginTop:8}}),t.jsxs("div",{style:Be.trimRow,children:[t.jsx(mh,{size:15,color:"var(--text-3)"}),t.jsxs("label",{style:Be.trimField,children:[t.jsx("span",{style:Be.trimLbl,children:"Start"}),t.jsx("input",{placeholder:"0:30",value:d.start,onChange:W=>u({...d,start:W.target.value}),style:Be.trimInput})]}),t.jsx("span",{style:Be.trimArrow,children:"→"}),t.jsxs("label",{style:Be.trimField,children:[t.jsx("span",{style:Be.trimLbl,children:"End"}),t.jsx("input",{placeholder:"end (optional)",value:d.end,onChange:W=>u({...d,end:W.target.value}),style:Be.trimInput})]})]}),t.jsx("div",{style:Be.hint,children:"Only this trimmed part plays. Use m:ss (e.g. 1:30). Leave End blank to play to the end."}),t.jsxs("div",{style:Be.tagBlock,children:[t.jsxs("div",{style:Be.tagLabel,children:["Days ",t.jsx("span",{style:Be.req,children:"required"})]}),t.jsx("div",{style:Be.chipRow,children:kc.map(W=>t.jsx("button",{onClick:()=>w("days",W),style:{...Be.chip,...d.days.includes(W)?Be.chipOnDark:{}},children:ad[W]},W))})]}),t.jsxs("div",{style:Be.tagBlock,children:[t.jsxs("div",{style:Be.tagLabel,children:["Pillars ",t.jsx("span",{style:Be.opt,children:"optional"})]}),t.jsx("div",{style:Be.chipRow,children:zp.map(W=>{const de=d.pillars.includes(W);return t.jsxs("button",{onClick:()=>w("pillars",W),style:{...Be.chip,...de?{background:cn[W],color:"#fff",borderColor:cn[W]}:{}},children:[t.jsx("span",{style:{...Be.dot,background:de?"#fff":cn[W]}}),W]},W)})})]}),t.jsxs("div",{style:Be.tagBlock,children:[t.jsxs("div",{style:Be.tagLabel,children:["Custom tags ",t.jsxs("span",{style:Be.opt,children:["optional · ",n.length,"/",dd]})]}),t.jsxs("div",{style:Be.chipRow,children:[n.map(W=>t.jsxs("span",{style:{...Be.chip,...d.customs.includes(W)?Be.chipOnAccent:{},paddingRight:4},children:[t.jsx("button",{onClick:()=>w("customs",W),style:Be.chipInner,children:W}),t.jsx("button",{onClick:()=>y(W),style:Be.chipX,title:"Delete tag",children:t.jsx(De,{size:11})})]},W)),n.length===0&&t.jsx("span",{style:Be.muted,children:"No custom tags yet."})]}),n.length<dd&&t.jsxs("div",{style:Be.newTagRow,children:[t.jsx("input",{placeholder:"New custom tag…",value:h,onChange:W=>I(W.target.value),onKeyDown:W=>W.key==="Enter"&&T(),style:{...Be.input,padding:"7px 10px"}}),t.jsx("button",{onClick:T,style:Be.smallBtn,children:t.jsx(ot,{size:14})})]})]}),!se&&t.jsxs("div",{style:Be.warn,children:["Add ",J.join(", ")," to save."]}),t.jsxs("div",{style:Be.formActions,children:[t.jsxs("button",{onClick:()=>u(null),style:Be.cancelBtn,children:[t.jsx(De,{size:14})," Cancel"]}),t.jsxs("button",{onClick:S,disabled:!se,style:{...Be.saveBtn,...se?{}:Be.saveDisabled},children:[t.jsx(He,{size:15})," ",d.id?"Save":"Add video"]})]})]}),t.jsxs("div",{style:Be.filterCard,children:[t.jsx("button",{onClick:()=>a({type:"all"}),style:{...Be.fChip,...l.type==="all"?Be.fChipOnDark:{}},children:"All"}),t.jsx("span",{style:Be.fDivider}),kc.map(W=>t.jsxs("button",{onClick:()=>a({type:"day",value:W}),style:{...Be.fChip,...N("day",W)?Be.fChipOnDark:{},...W===Wi()?Be.fToday:{}},children:[ad[W],W===Wi()?" ·":""]},W)),t.jsx("span",{style:Be.fDivider}),zp.map(W=>t.jsxs("button",{onClick:()=>a({type:"pillar",value:W}),style:{...Be.fChip,...N("pillar",W)?{background:cn[W],color:"#fff",borderColor:cn[W]}:{}},children:[t.jsx("span",{style:{...Be.dot,background:N("pillar",W)?"#fff":cn[W]}}),W]},W)),n.length>0&&t.jsx("span",{style:Be.fDivider}),n.map(W=>t.jsxs("button",{onClick:()=>a({type:"custom",value:W}),style:{...Be.fChip,...N("custom",W)?Be.fChipOnAccent:{}},children:[t.jsx(uc,{size:11})," ",W]},W))]}),i?j.length===0?t.jsx("div",{style:Be.empty,children:e.length===0?"No videos yet — add your first motivation clip.":"No videos for this tag."}):t.jsx("div",{style:Be.grid,children:j.map(W=>t.jsxs("div",{style:Be.videoCard,children:[t.jsx("div",{style:Be.thumbWrap,children:m===W.id?t.jsx("iframe",{src:s1(W),title:W.title||W.youtube_id,style:Be.iframe,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):t.jsxs("button",{onClick:()=>f(W.id),style:Be.thumbBtn,children:[t.jsx("img",{src:`https://img.youtube.com/vi/${W.youtube_id}/hqdefault.jpg`,alt:"",style:Be.thumb}),t.jsx("span",{style:Be.playOverlay,children:t.jsx(zg,{size:22,color:"#fff",fill:"#fff"})}),t.jsxs("span",{style:Be.trimBadge,children:[il(W.start_sec),W.end_sec?` – ${il(W.end_sec)}`:"+"]})]})}),t.jsxs("div",{style:Be.videoBody,children:[t.jsx("div",{style:Be.videoTitle,children:W.title||"Untitled clip"}),t.jsxs("div",{style:Be.tagWrap,children:[W.days.map(de=>t.jsx("span",{style:Be.dayTag,children:ad[de]},de)),W.pillars.map(de=>t.jsx("span",{style:{...Be.pillTag,color:cn[de]||"var(--text-2)",borderColor:cn[de]||"var(--border)"},children:de},de)),W.customs.map(de=>t.jsx("span",{style:Be.customTag,children:de},de))]}),t.jsxs("div",{style:Be.cardActions,children:[t.jsx("button",{onClick:()=>D(W),style:Be.iconBtn,title:"Edit",children:t.jsx(yt,{size:13})}),t.jsx("button",{onClick:()=>k(W.id,W.title||"video"),style:Be.iconBtn,title:"Delete",children:t.jsx(De,{size:14})})]})]})]},W.id))}):t.jsx("div",{style:Be.muted,children:"Loading…"}),t.jsx(mr,{toasts:C,onUndo:p,onDismiss:c})]})}const Be={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:1e3,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},warn:{fontSize:11.5,color:"#C2773B",marginTop:5,fontWeight:600},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:6,lineHeight:1.4},trimRow:{display:"flex",alignItems:"flex-end",gap:10,marginTop:10},trimField:{display:"flex",flexDirection:"column",gap:4,flex:1},trimLbl:{fontSize:11,color:"var(--text-2)",fontWeight:600},trimInput:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},trimArrow:{color:"var(--text-3)",paddingBottom:9},tagBlock:{marginTop:14},tagLabel:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},req:{fontSize:10,fontWeight:700,color:"#C2536B",textTransform:"uppercase",marginLeft:6},opt:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",marginLeft:6},chipRow:{display:"flex",gap:6,flexWrap:"wrap"},chip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},chipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},chipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},chipInner:{border:"none",background:"none",color:"inherit",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,padding:0},chipX:{border:"none",background:"rgba(0,0,0,0.12)",color:"inherit",cursor:"pointer",display:"grid",placeItems:"center",borderRadius:"50%",width:16,height:16,padding:0},newTagRow:{display:"flex",gap:6,marginTop:8,maxWidth:280},smallBtn:{border:"none",background:"var(--accent)",color:"#fff",width:34,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},dot:{width:8,height:8,borderRadius:"50%",flexShrink:0,display:"inline-block"},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"var(--accent)",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},filterCard:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:12,marginBottom:18},fChip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},fChipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},fChipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},fToday:{borderColor:"var(--accent)",borderWidth:2},fDivider:{width:1,alignSelf:"stretch",background:"var(--border)",margin:"0 2px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:14},videoCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 9",background:"#000"},thumbBtn:{border:"none",padding:0,margin:0,cursor:"pointer",width:"100%",height:"100%",position:"relative",display:"block",background:"#000"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center",background:"rgba(0,0,0,0.28)"},trimBadge:{position:"absolute",bottom:8,right:8,background:"rgba(0,0,0,0.75)",color:"#fff",fontSize:11,fontWeight:700,padding:"2px 7px",borderRadius:6,fontFamily:"'Fraunces',Georgia,serif"},iframe:{width:"100%",height:"100%",border:"none",display:"block"},videoBody:{padding:"12px 13px",display:"flex",flexDirection:"column",gap:8},videoTitle:{fontSize:14,fontWeight:700},tagWrap:{display:"flex",gap:5,flexWrap:"wrap"},dayTag:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:8},pillTag:{fontSize:10,fontWeight:700,border:"1px solid",borderRadius:8,padding:"2px 7px"},customTag:{fontSize:10,fontWeight:700,color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"2px 7px",borderRadius:8},cardActions:{display:"flex",gap:4,justifyContent:"flex-end"},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},Fh=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Bp=()=>Fh(new Date),Rp=(e,r)=>{const n=new Date(e+"T00:00:00");return n.setDate(n.getDate()+r),Fh(n)},Ep=e=>new Date(e+"T00:00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"}),d1=e=>{if(!e)return"";const r=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(r))return r;const n=r.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},c1=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>900?(a=a*900/l,l=900):a>900&&(l=l*900/a,a=900);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),r(d.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)});function g1(){const[e,r]=g.useState([]),[n,o]=g.useState(!1),[i,s]=g.useState(null),[l,a]=g.useState(!1),[d,u]=g.useState({title:"",image:""}),[m,f]=g.useState(""),[h,I]=g.useState(!0),[B,k]=g.useState(null),C=g.useCallback(async()=>{try{r(await E.getGoldenGoals())}catch{}o(!0)},[]);g.useEffect(()=>{C()},[C]);const{deleteItem:p,toasts:c,handleUndo:b,handleDismiss:T}=br(E.deleteGolden,E.restoreGolden,C);g.useEffect(()=>{E.getSetting("golden_music").then(j=>f(d1((j==null?void 0:j.value)||""))).catch(()=>{})},[]);const y=async()=>{if(!d.title.trim())return;const j=await E.createGolden({title:d.title.trim(),image:d.image});u({title:"",image:""}),a(!1),await C(),s(j.id)},w=async(j,N)=>{var se;const J=(se=j.target.files)==null?void 0:se[0];if(J)try{N(await c1(J))}catch{}},D=e.filter(j=>!j.achieved),S=e.filter(j=>j.achieved);return i?t.jsxs("div",{style:te.page,children:[t.jsx(f1,{musicId:m,on:h}),t.jsx(m1,{goalId:i,onBack:()=>s(null),onReload:C,onCelebrate:(j,N)=>k({title:j,days:N}),pickImage:w,musicId:m,musicOn:h,setMusicOn:I}),B&&t.jsx(h1,{data:B,onClose:()=>k(null)})]}):t.jsxs("div",{style:te.page,children:[t.jsxs("div",{style:te.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:te.eyebrow,children:"Anvil · Golden Book"}),t.jsx("h1",{style:te.h1,children:"Golden Book"}),t.jsx("div",{style:te.subhead,children:"Write your dreams into being — a little every day."})]}),!l&&t.jsxs("button",{onClick:()=>a(!0),style:te.addBtn,children:[t.jsx(ot,{size:15})," New dream"]})]}),l&&t.jsxs("div",{style:te.card,children:[t.jsx("div",{style:te.cardTitle,children:"Manifest a new dream"}),t.jsx("textarea",{autoFocus:!0,placeholder:"Write your dream as if it's already true…",value:d.title,onChange:j=>u({...d,title:j.target.value}),style:te.textarea}),t.jsxs("label",{style:te.photoPick,children:[d.image?t.jsx("img",{src:d.image,alt:"",style:te.photoPreview}):t.jsxs("span",{style:te.photoEmpty,children:[t.jsx(va,{size:18})," Add a photo"]}),t.jsx("input",{type:"file",accept:"image/*",onChange:j=>w(j,N=>u({...d,image:N})),style:{display:"none"}})]}),t.jsxs("div",{style:te.formActions,children:[t.jsxs("button",{onClick:()=>{a(!1),u({title:"",image:""})},style:te.cancelBtn,children:[t.jsx(De,{size:14})," Cancel"]}),t.jsxs("button",{onClick:y,disabled:!d.title.trim(),style:{...te.saveBtn,...d.title.trim()?{}:te.saveDisabled},children:[t.jsx(He,{size:15})," Create"]})]})]}),n?t.jsxs(t.Fragment,{children:[D.length===0&&S.length===0&&!l&&t.jsx("div",{style:te.empty,children:"No dreams yet. Add your first one and revisit it daily."}),D.length>0&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:te.sectionTitle,children:[t.jsx(To,{size:15,color:"#C9A227"})," Manifesting ",t.jsx("span",{style:te.badge,children:D.length})]}),t.jsx("div",{style:te.grid,children:D.map(j=>t.jsx(Dp,{g:j,onOpen:()=>s(j.id),onDelete:()=>p(j.id,j.title)},j.id))})]}),S.length>0&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{...te.sectionTitle,marginTop:22},children:[t.jsx(qr,{size:15,color:"#4C9A6B"})," Manifested ",t.jsx("span",{style:te.badge,children:S.length})]}),t.jsx("div",{style:te.grid,children:S.map(j=>t.jsx(Dp,{g:j,onOpen:()=>s(j.id),onDelete:()=>p(j.id,j.title),achieved:!0},j.id))})]})]}):t.jsx("div",{style:te.muted,children:"Loading…"}),t.jsx(mr,{toasts:c,onUndo:b,onDismiss:T})]})}const wc=[{key:"morning",label:"Morning",time:"6 AM – 12 PM",Icon:xh,color:"#E0883B"},{key:"noon",label:"Noon",time:"12 – 6 PM",Icon:p0,color:"#C9A227"},{key:"night",label:"Night",time:"6 PM – 2 AM",Icon:Jy,color:"#6B6FB0"}],Fp=e=>{if(e<31)return`${e} day${e===1?"":"s"}`;const r=Math.floor(e/365),n=Math.floor(e%365/30),o=e%365%30,i=[];return r&&i.push(`${r}y`),n&&i.push(`${n}mo`),o&&i.push(`${o}d`),i.join(" ")},Ap="tesla369_reminders";function u1({g:e,onChanged:r,musicId:n,musicOn:o,setMusicOn:i}){const[s,l]=g.useState(""),[a,d]=g.useState(!1),[u,m]=g.useState(!1),[f,h]=g.useState(()=>localStorage.getItem(Ap)==="1"),I=e.t369,B=(e.t369_affirmation||"").trim();if(b1(f&&!!B,I,e.title),!I)return null;const{window:k,targets:C,counts:p,current_streak:c,best_streak:b,min_streak:T,min_reached:y,day_complete:w}=I,D=(p.morning||0)+(p.noon||0)+(p.night||0),S=C.morning+C.noon+C.night,j=async()=>{if(B&&s.trim()===B&&k){m(!0);try{r(await E.logTesla369(e.id)),l("")}catch(de){alert(de.message||"Could not log this write.")}finally{m(!1)}}},N=async()=>{m(!0);try{r(await E.undoTesla369(e.id))}catch{}finally{m(!1)}},J=async()=>{if(!f&&!await p1()){alert("Enable notifications in your browser to get 369 reminders.");return}const de=!f;h(de),localStorage.setItem(Ap,de?"1":"0")},se=s.trim()===B&&B!=="",W=k&&(p[k]||0)>=C[k];return t.jsxs("div",{style:te.tCard,children:[t.jsxs("div",{style:te.tHead,children:[t.jsxs("div",{style:te.tTitleWrap,children:[t.jsxs("span",{style:te.tBadge,children:[t.jsx(Ig,{size:14})," 369"]}),t.jsxs("div",{children:[t.jsx("div",{style:te.tTitle,children:"369 Method"}),t.jsx("div",{style:te.tSub,children:"Write it 3× morning · 6× noon · 9× night."})]})]}),t.jsxs("div",{style:te.tHeadBtns,children:[n&&t.jsxs("button",{onClick:()=>i(de=>!de),style:{...te.tRemBtn,...o?te.tuneOn:{}},title:o?"Soft tunes on":"Play soft tunes",children:[o?t.jsx(Sg,{size:14}):t.jsx(ja,{size:14})," Soft tunes"]}),t.jsxs("button",{onClick:J,style:{...te.tRemBtn,...f?te.tRemOn:{}},title:f?"Reminders on":"Turn on reminders",children:[f?t.jsx(vg,{size:14}):t.jsx(yy,{size:14})," ",f?"Reminders on":"Remind me"]})]})]}),t.jsxs("div",{style:te.tStreakRow,children:[t.jsxs("div",{style:te.tStreakBox,children:[t.jsxs("div",{style:te.tStreakLabel,children:[t.jsx(Cn,{size:13,color:"#C2773B"})," Current streak"]}),t.jsx("div",{style:te.tStreakVal,children:Fp(c)}),y?t.jsxs("div",{style:{...te.tStreakHint,color:"#4C9A6B"},children:["✓ ",T,"-day minimum met — keep going until it manifests"]}):t.jsxs("div",{style:te.tStreakHint,children:["Day ",c," of ",T," minimum"]}),!y&&t.jsx("div",{style:te.tProgTrack,children:t.jsx("div",{style:{...te.tProgFill,width:`${Math.min(100,c/T*100)}%`}})})]}),t.jsxs("div",{style:te.tStreakBox,children:[t.jsxs("div",{style:te.tStreakLabel,children:[t.jsx(qr,{size:13,color:"#C9A227"})," All-time best"]}),t.jsx("div",{style:te.tStreakVal,children:Fp(b)}),t.jsxs("div",{style:te.tStreakHint,children:["Today: ",D,"/",S," written ",w?"✓":""]})]})]}),B?t.jsxs(t.Fragment,{children:[t.jsx("div",{style:te.tWindows,children:wc.map(({key:de,label:Re,time:pe,Icon:je,color:Q})=>{const x=p[de]||0,Y=C[de],H=k===de,ae=x>=Y;return t.jsxs("div",{style:{...te.tWindow,...H?{border:`1px solid ${Q}`,boxShadow:`0 0 0 2px ${Q}22`}:{}},children:[t.jsxs("div",{style:te.tWindowHead,children:[t.jsx(je,{size:15,color:Q}),t.jsx("span",{style:te.tWindowLabel,children:Re}),H&&t.jsx("span",{style:{...te.tNow,color:Q},children:"now"})]}),t.jsx("div",{style:te.tWindowTime,children:pe}),t.jsx("div",{style:te.tDots,children:Array.from({length:Y}).map((V,G)=>t.jsx("span",{style:{...te.tDot,...G<x?{background:Q,borderColor:Q}:{}}},G))}),t.jsxs("div",{style:{...te.tCount,...ae?{color:Q}:{}},children:[x,"/",Y,ae?" ✓":""]})]},de)})}),t.jsx("div",{style:te.tWriteBox,children:k?W?t.jsxs("div",{style:te.tDoneMsg,children:["✓ ",wc.find(de=>de.key===k).label," complete. ",w?"All 18 done today! 🔥":"Next window unlocks ahead."]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{style:te.tNote,children:"✍️ Type it out by hand — no copy-pasting. The act of writing is the point."}),t.jsx("textarea",{value:s,onChange:de=>l(de.target.value),onPaste:de=>{de.preventDefault(),d(!0),setTimeout(()=>d(!1),2500)},onDrop:de=>de.preventDefault(),placeholder:"Type your affirmation here…",style:{...te.writeArea,...se?{border:"1px solid #4C9A6B"}:{}}}),a&&t.jsx("div",{style:te.tPasteWarn,children:"Pasting is disabled — please type it."}),t.jsxs("div",{style:te.tWriteActions,children:[t.jsxs("button",{onClick:N,disabled:u||(p[k]||0)===0,style:te.tUndoBtn,title:"Undo last write",children:[t.jsx(yh,{size:14})," Undo"]}),t.jsxs("button",{onClick:j,disabled:u||!se,style:{...te.writeSave,flex:1,...se?{}:te.saveDisabled},children:[t.jsx(He,{size:15})," ",se?"Log this write":"Type it to log"]})]})]}):t.jsx("div",{style:te.tClosed,children:"Writing windows: 6 AM–12 PM, 12–6 PM, 6 PM–2 AM. Come back during a window."})})]}):t.jsx("div",{style:te.tClosed,children:"Set a 369 affirmation above to start writing."})]})}async function p1(){return"Notification"in window?Notification.permission==="granted"?!0:Notification.permission==="denied"?!1:await Notification.requestPermission()==="granted":!1}function b1(e,r,n){const o=g.useRef({});g.useEffect(()=>{if(!e||!r)return;const i=()=>{var I;if(Notification.permission!=="granted")return;const l=r.window;if(!l)return;const a=r.counts||{},d=r.targets||{};if((a[l]||0)>=(d[l]||0))return;const u=r.today,m=`369-${n||""}-${u}-${l}`;if(o.current[m])return;o.current[m]=!0;const f=((I=wc.find(B=>B.key===l))==null?void 0:I.label)||"",h=(d[l]||0)-(a[l]||0);try{new Notification("369 — time to write ✍️",{body:`${n?`"${n}" · `:""}${f} window: ${h} more to go. Type your affirmation.`,tag:m})}catch{}};i();const s=setInterval(i,60*1e3);return()=>clearInterval(s)},[e,r,n])}function Dp({g:e,onOpen:r,onDelete:n,achieved:o}){return t.jsxs("div",{style:{...te.goalCard,...o?{opacity:.96}:{},position:"relative"},children:[t.jsxs("button",{onClick:r,style:te.goalCardBtn,children:[t.jsxs("div",{style:te.thumbWrap,children:[e.image?t.jsx("img",{src:e.image,alt:"",style:te.thumb}):t.jsx("div",{style:te.thumbEmpty,children:t.jsx(To,{size:26,color:"var(--text-3)"})}),o&&t.jsx("span",{style:te.stamp,children:"✦ Manifested"})]}),t.jsxs("div",{style:te.goalBody,children:[t.jsx("div",{style:te.goalTitle,children:e.title}),t.jsxs("div",{style:te.goalMeta,children:[o?t.jsxs("span",{style:{...te.metaPill,color:"#4C9A6B",background:"rgba(76,154,107,0.12)"},children:[t.jsx(qr,{size:12})," ",e.days_to_manifest!=null?`in ${e.days_to_manifest} day${e.days_to_manifest===1?"":"s"}`:"done"]}):t.jsxs("span",{style:{...te.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[t.jsx(Cn,{size:12})," ",e.streak," day streak"]}),t.jsxs("span",{style:te.metaDim,children:[e.total_days," entr",e.total_days===1?"y":"ies"]})]})]})]}),t.jsx("button",{onClick:i=>{i.stopPropagation(),window.confirm(`Delete "${e.title}"?`)&&n()},style:te.cardDelBtn,title:"Delete dream",children:t.jsx(ys,{size:14})})]})}function m1({goalId:e,onBack:r,onReload:n,onCelebrate:o,pickImage:i,musicId:s,musicOn:l,setMusicOn:a}){const[d,u]=g.useState(null),[m,f]=g.useState({}),[h,I]=g.useState(Bp()),[B,k]=g.useState(""),[C,p]=g.useState(null),[c,b]=g.useState(null),T=Bp(),y=g.useCallback(Q=>{u(Q);const x={};(Q.entries||[]).forEach(Y=>{x[Y.date]=Y.text}),f(x),k(x[T]||"")},[T]),w=g.useCallback(async()=>{y(await E.getGoldenGoal(e))},[e,y]);if(g.useEffect(()=>{w()},[w]),g.useEffect(()=>{if(!(d!=null&&d.t369_enabled))return;const Q=setInterval(()=>{E.getGoldenGoal(e).then(y).catch(()=>{})},60*1e3);return()=>clearInterval(Q)},[d==null?void 0:d.t369_enabled,e,y]),!d)return t.jsx("div",{style:te.muted,children:"Loading…"});const D=h===T,S=h>d.created_date,j=h<T,N=async()=>{await E.upsertGoldenEntry(e,{date:T,text:B}),await w(),n()},J=async()=>{const Q=await E.achieveGolden(e);o(d.title,Q.days_to_manifest),await w(),n()},se=async()=>{await E.unachieveGolden(e),await w(),n()},W=async()=>{C.trim()&&(await E.updateGolden(e,{title:C.trim()}),p(null),await w(),n())},de=Q=>E.updateGolden(e,{image:Q}).then(()=>{w(),n()}),Re=async()=>{await E.updateGolden(e,{t369_enabled:!d.t369_enabled}),await w(),n()},pe=async()=>{await E.updateGolden(e,{t369_affirmation:(c||"").trim()}),b(null),await w()},je=async()=>{window.confirm(`Delete "${d.title}"? This cannot be undone from here.`)&&(await E.deleteGolden(e),n(),r())};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:te.detailTopRow,children:[t.jsxs("button",{onClick:r,style:te.backBtn,children:[t.jsx(nh,{size:16})," All dreams"]}),t.jsxs("button",{onClick:je,style:te.deleteBtn,title:"Delete dream",children:[t.jsx(ys,{size:14})," Delete"]})]}),t.jsxs("div",{style:te.detailHero,children:[t.jsxs("label",{style:te.heroPhoto,children:[d.image?t.jsx("img",{src:d.image,alt:"",style:te.heroImg}):t.jsxs("span",{style:te.photoEmpty,children:[t.jsx(va,{size:20})," Add a photo"]}),t.jsxs("span",{style:te.photoEdit,children:[t.jsx(yt,{size:12})," Edit photo"]}),t.jsx("input",{type:"file",accept:"image/*",onChange:Q=>i(Q,de),style:{display:"none"}})]}),t.jsxs("div",{style:te.heroInfo,children:[d.achieved&&t.jsxs("span",{style:te.heroStamp,children:["✦ Manifested",d.days_to_manifest!=null?` in ${d.days_to_manifest} day${d.days_to_manifest===1?"":"s"}`:""]}),C!==null?t.jsxs("div",{style:{display:"flex",gap:6,width:"100%"},children:[t.jsx("textarea",{autoFocus:!0,value:C,onChange:Q=>p(Q.target.value),style:{...te.textarea,minHeight:60}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[t.jsx("button",{onClick:W,style:te.iconSave,children:t.jsx(He,{size:14})}),t.jsx("button",{onClick:()=>p(null),style:te.iconCancel,children:t.jsx(De,{size:14})})]})]}):t.jsxs("div",{style:te.heroTitleRow,children:[t.jsx("div",{style:te.heroTitle,children:d.title}),t.jsx("button",{onClick:()=>p(d.title),style:te.ghostBtn,title:"Edit",children:t.jsx(yt,{size:13})})]}),t.jsxs("div",{style:te.heroStats,children:[t.jsxs("span",{style:{...te.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[t.jsx(Cn,{size:13})," ",d.streak," day streak"]}),t.jsxs("span",{style:te.metaDim,children:[d.total_days," entr",d.total_days===1?"y":"ies"]}),t.jsxs("span",{style:te.metaDim,children:["since ",Ep(d.created_date)]})]})]})]}),!d.achieved&&t.jsxs("div",{style:te.t369Row,children:[t.jsxs("div",{style:te.t369RowLeft,children:[t.jsxs("span",{style:{...te.tBadge,...d.t369_enabled?{}:te.tBadgeOff},children:[t.jsx(Ig,{size:13})," 369"]}),t.jsxs("div",{children:[t.jsx("div",{style:te.t369RowTitle,children:"Tesla's 369 Method"}),t.jsx("div",{style:te.t369RowSub,children:d.t369_enabled?"On — write this dream 3×/6×/9× across the day.":"Off — using the simple daily entry."})]})]}),t.jsx("button",{onClick:Re,style:{...te.switch,...d.t369_enabled?te.switchOn:{}},role:"switch","aria-checked":d.t369_enabled,title:"Toggle 369 method",children:t.jsx("span",{style:{...te.switchKnob,...d.t369_enabled?te.switchKnobOn:{}}})})]}),d.t369_enabled&&!d.achieved&&t.jsxs(t.Fragment,{children:[c!==null||!d.t369_affirmation?t.jsxs("div",{style:te.card,children:[t.jsx("div",{style:te.cardTitle,children:"Your 369 affirmation"}),t.jsx("textarea",{autoFocus:!0,value:c??d.t369_affirmation??"",onChange:Q=>b(Q.target.value),placeholder:"The exact line you'll write 18× a day, e.g. 'I am grateful for my dream home.'",style:te.textarea}),t.jsxs("div",{style:te.formActions,children:[d.t369_affirmation&&t.jsxs("button",{onClick:()=>b(null),style:te.cancelBtn,children:[t.jsx(De,{size:14})," Cancel"]}),t.jsxs("button",{onClick:pe,disabled:!(c??"").trim()&&!d.t369_affirmation,style:{...te.saveBtn,...(c??d.t369_affirmation??"").trim()?{}:te.saveDisabled},children:[t.jsx(He,{size:15})," Save affirmation"]})]})]}):t.jsxs("div",{style:te.tAffShow,children:[t.jsx(cc,{size:15,color:Nr}),t.jsx("p",{style:te.tAffText,children:d.t369_affirmation}),t.jsx("button",{onClick:()=>b(d.t369_affirmation),style:te.ghostBtn,title:"Edit affirmation",children:t.jsx(yt,{size:13})})]}),t.jsx(u1,{g:d,onChanged:y,musicId:s,musicOn:l,setMusicOn:a})]}),!d.t369_enabled&&t.jsxs("div",{style:te.writeCard,children:[t.jsx("div",{style:te.tuneRow,children:s?t.jsxs("button",{onClick:()=>a(Q=>!Q),style:{...te.tuneBtn,...l?te.tuneOn:{}},children:[l?t.jsx(Sg,{size:14}):t.jsx(ja,{size:14})," Soft tunes"]}):t.jsx("span",{style:te.tuneHint,children:"Add a track in Settings → Music"})}),t.jsxs("div",{style:te.writeNav,children:[t.jsx("button",{onClick:()=>I(Q=>Rp(Q,-1)),disabled:!S,style:{...te.navBtn,...S?{}:te.navDisabled},children:t.jsx(Tn,{size:16})}),t.jsx("div",{style:te.writeDate,children:D?"Today":Ep(h)}),t.jsx("button",{onClick:()=>I(Q=>Rp(Q,1)),disabled:!j,style:{...te.navBtn,...j?{}:te.navDisabled},children:t.jsx(sn,{size:16})})]}),D&&!d.achieved?t.jsxs(t.Fragment,{children:[t.jsx("textarea",{value:B,onChange:Q=>k(Q.target.value),placeholder:"Write it again today, as if it's already yours…",style:te.writeArea}),t.jsxs("button",{onClick:N,style:te.writeSave,children:[t.jsx(He,{size:15})," Save today's entry"]})]}):t.jsx("div",{style:te.readEntry,children:m[h]?t.jsxs(t.Fragment,{children:[t.jsx(cc,{size:16,color:"var(--text-3)"}),t.jsx("p",{style:te.readText,children:m[h]})]}):t.jsx("div",{style:te.muted,children:"Nothing written on this day."})})]}),d.achieved?t.jsx("button",{onClick:se,style:te.unmanifestBtn,children:"Undo manifested"}):t.jsxs("button",{onClick:J,style:te.manifestBtn,children:[t.jsx(To,{size:16})," Mark as manifested"]})]})}function h1({data:e,onClose:r}){return t.jsx("div",{style:te.celebOverlay,onClick:r,children:t.jsxs("div",{style:te.celebBox,onClick:n=>n.stopPropagation(),children:[t.jsx("div",{style:te.celebEmoji,children:"✨🌟✨"}),t.jsx("div",{style:te.celebTitle,children:"It's happening!"}),t.jsxs("div",{style:te.celebDream,children:['"',e.title,'"']}),t.jsxs("div",{style:te.celebSub,children:[e.days!=null?`Manifested in ${e.days} day${e.days===1?"":"s"}.`:"Manifested."," The universe delivered. 🙏"]}),t.jsx("button",{onClick:r,style:te.celebBtn,children:"Wonderful"})]})})}function f1({musicId:e,on:r}){return!e||!r?null:t.jsx("iframe",{title:"golden-music",src:`https://www.youtube.com/embed/${e}?autoplay=1&loop=1&playlist=${e}&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}})}const Nr="#C9A227",te={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:860,margin:"0 auto",position:"relative"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:Nr,color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"11px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:70,resize:"vertical",lineHeight:1.5},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:Nr,color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:12},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:14},goalCard:{textAlign:"left",border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},goalCardBtn:{textAlign:"left",border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"inherit",display:"flex",flexDirection:"column",width:"100%"},cardDelBtn:{position:"absolute",top:8,left:8,border:"none",background:"rgba(0,0,0,0.55)",color:"#fff",width:26,height:26,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",zIndex:2},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 10",background:"var(--surface-2)"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},thumbEmpty:{width:"100%",height:"100%",display:"grid",placeItems:"center"},stamp:{position:"absolute",top:8,right:8,transform:"rotate(6deg)",background:"rgba(76,154,107,0.95)",color:"#fff",fontSize:11,fontWeight:800,letterSpacing:"0.04em",padding:"3px 9px",borderRadius:6,border:"1.5px solid #fff",textTransform:"uppercase"},goalBody:{padding:"11px 13px",display:"flex",flexDirection:"column",gap:8},goalTitle:{fontSize:14,fontWeight:600,lineHeight:1.35,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},goalMeta:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},metaPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:700,padding:"2px 8px",borderRadius:10},metaDim:{fontSize:11,color:"var(--text-3)",fontWeight:500},detailTopRow:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16,gap:10},backBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},deleteBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid rgba(194,83,107,0.4)",background:"rgba(194,83,107,0.08)",color:"#C2536B",padding:"7px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},detailHero:{display:"flex",flexDirection:"column",gap:14,marginBottom:16},heroPhoto:{position:"relative",width:"100%",borderRadius:14,overflow:"hidden",border:"1px solid var(--border)",cursor:"pointer",background:"var(--surface-2)",display:"flex",alignItems:"center",justifyContent:"center",minHeight:120},heroImg:{width:"100%",maxHeight:"62vh",objectFit:"contain",display:"block"},photoEdit:{position:"absolute",bottom:8,right:8,display:"flex",alignItems:"center",gap:5,background:"rgba(0,0,0,0.6)",color:"#fff",fontSize:11,fontWeight:600,padding:"4px 8px",borderRadius:7},heroInfo:{display:"flex",flexDirection:"column",gap:10,alignItems:"center",textAlign:"center"},heroStamp:{alignSelf:"center",background:"rgba(76,154,107,0.14)",color:"#4C9A6B",fontSize:12,fontWeight:800,padding:"4px 10px",borderRadius:8,letterSpacing:"0.03em"},heroTitleRow:{display:"flex",alignItems:"flex-start",gap:8,justifyContent:"center"},heroTitle:{fontSize:23,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.35},heroStats:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",justifyContent:"center"},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",flexShrink:0},iconSave:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},iconCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},writeCard:{background:"var(--surface)",borderRadius:14,padding:16,border:"1px solid var(--border)",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},tuneRow:{display:"flex",justifyContent:"flex-end",marginBottom:10},tuneBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tuneOn:{background:Nr,color:"#fff",borderColor:Nr},tuneHint:{fontSize:11,color:"var(--text-3)",fontWeight:500},writeNav:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,marginBottom:12},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center"},navDisabled:{opacity:.35,cursor:"not-allowed"},writeDate:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:150,textAlign:"center"},writeArea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:120,resize:"vertical",lineHeight:1.6},writeSave:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",background:Nr,color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},readEntry:{display:"flex",gap:8,padding:"6px 2px"},readText:{fontSize:15,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.6,margin:0,whiteSpace:"pre-wrap"},manifestBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,width:"100%",border:"none",background:"linear-gradient(135deg,#C9A227,#E0BD45)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:800,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 2px 10px rgba(201,162,39,0.35)"},unmanifestBtn:{display:"block",margin:"0 auto",border:"none",background:"none",color:"var(--text-3)",fontSize:12,fontWeight:600,cursor:"pointer",textDecoration:"underline",fontFamily:"inherit"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.6)",zIndex:200,display:"grid",placeItems:"center",padding:16},celebBox:{background:"var(--surface)",color:"var(--text)",borderRadius:20,padding:"36px 30px",textAlign:"center",maxWidth:360,boxShadow:"0 12px 48px rgba(0,0,0,0.3)"},celebEmoji:{fontSize:40,marginBottom:10},celebTitle:{fontSize:24,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginBottom:10,color:Nr},celebDream:{fontSize:15,fontStyle:"italic",fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.5,marginBottom:10},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:Nr,color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},t369Row:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:"12px 16px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},t369RowLeft:{display:"flex",alignItems:"center",gap:11},t369RowTitle:{fontSize:14,fontWeight:700},t369RowSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},tBadgeOff:{background:"var(--border)",color:"var(--text-3)"},switch:{position:"relative",width:46,height:26,borderRadius:14,border:"none",background:"var(--border)",cursor:"pointer",flexShrink:0,transition:"background 0.2s",padding:0},switchOn:{background:Nr},switchKnob:{position:"absolute",top:3,left:3,width:20,height:20,borderRadius:"50%",background:"#fff",transition:"left 0.2s",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},switchKnobOn:{left:23},tCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:16,padding:18,marginBottom:20,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},tHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12,flexWrap:"wrap",marginBottom:14},tTitleWrap:{display:"flex",alignItems:"center",gap:11},tBadge:{display:"inline-flex",alignItems:"center",gap:4,background:"linear-gradient(135deg,#C9A227,#E0BD45)",color:"#fff",fontSize:14,fontWeight:800,padding:"6px 10px",borderRadius:10,letterSpacing:"0.02em",flexShrink:0},tTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},tSub:{fontSize:12,color:"var(--text-3)",marginTop:2},tHeadBtns:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",justifyContent:"flex-end"},tRemBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 12px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tRemOn:{background:Nr,color:"#fff",borderColor:Nr},tStreakRow:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:14},tStreakBox:{background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px"},tStreakLabel:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,fontWeight:600,color:"var(--text-2)"},tStreakVal:{fontSize:21,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.1},tStreakHint:{fontSize:11,color:"var(--text-3)",marginTop:4,fontWeight:500},tProgTrack:{height:5,borderRadius:4,background:"var(--border)",marginTop:8,overflow:"hidden"},tProgFill:{height:"100%",background:"linear-gradient(90deg,#C2773B,#C9A227)",borderRadius:4,transition:"width 0.4s"},tAffShow:{display:"flex",alignItems:"flex-start",gap:9,background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px",marginBottom:14},tAffText:{flex:1,fontSize:15,fontFamily:"'Fraunces',Georgia,serif",fontStyle:"italic",lineHeight:1.5,margin:0,whiteSpace:"pre-wrap"},tWindows:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:10,marginBottom:14},tWindow:{background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:"11px 12px",transition:"box-shadow 0.2s, border-color 0.2s"},tWindowHead:{display:"flex",alignItems:"center",gap:6},tWindowLabel:{fontSize:13,fontWeight:700},tNow:{fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",marginLeft:"auto"},tWindowTime:{fontSize:10.5,color:"var(--text-3)",marginTop:2,marginBottom:8,fontWeight:500},tDots:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:7},tDot:{width:11,height:11,borderRadius:"50%",border:"1.5px solid var(--border)",background:"transparent",transition:"background 0.2s"},tCount:{fontSize:12,fontWeight:700,color:"var(--text-2)"},tWriteBox:{borderTop:"1px solid var(--border)",paddingTop:14},tNote:{fontSize:12,fontWeight:600,color:"#C2773B",background:"rgba(194,119,59,0.10)",borderRadius:8,padding:"8px 11px",marginBottom:9},tPasteWarn:{fontSize:11.5,color:"#C2536B",fontWeight:600,marginTop:6},tWriteActions:{display:"flex",gap:8,marginTop:10},tUndoBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"11px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tClosed:{fontSize:12.5,color:"var(--text-3)",textAlign:"center",padding:"10px 4px",lineHeight:1.5},tDoneMsg:{fontSize:13,fontWeight:700,color:"#4C9A6B",textAlign:"center",padding:"10px 4px"}},gd=[{id:"meditation",label:"Meditation Hub",icon:ky,color:"#8268B0"},{id:"visualization",label:"Visualization",icon:ms,color:"#3A7CA5"}],Wp=e=>{if(!e)return"";const r=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(r))return r;const n=r.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},x1=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>1e3?(a=a*1e3/l,l=1e3):a>1e3&&(l=l*1e3/a,a=1e3);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),r(d.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)}),y1=e=>({id:null,kind:e,title:"",url:"",image:""});function v1(){const[e,r]=g.useState("meditation"),[n,o]=g.useState([]),[i,s]=g.useState(!1),[l,a]=g.useState(null),[d,u]=g.useState(null),m=g.useCallback(async()=>{try{o(await E.getMedia())}catch{}s(!0)},[]);g.useEffect(()=>{m()},[m]);const{deleteItem:f,toasts:h,handleUndo:I,handleDismiss:B}=br(E.deleteMedia,E.restoreMedia,m);g.useEffect(()=>{if(!d)return;const w=10,D=setInterval(()=>{document.hidden||E.addScreenTime("mindscape",w).catch(()=>{})},w*1e3);return()=>clearInterval(D)},[d]);const k=gd.find(w=>w.id===e),C=n.filter(w=>w.kind===e),p=w=>a({id:w.id,kind:w.kind,title:w.title,url:`https://youtu.be/${w.youtube_id}`,image:w.image}),c=async w=>{var S;const D=(S=w.target.files)==null?void 0:S[0];if(D){try{const j=await x1(D);a(N=>({...N,image:j}))}catch{}w.target.value=""}},b=l?[!l.title.trim()&&"a title",!l.image&&"an image",!Wp(l.url)&&"a valid YouTube link"].filter(Boolean):[],T=!!l&&b.length===0,y=async()=>{if(!T)return;const w={kind:l.kind,title:l.title.trim(),image:l.image,youtube_id:Wp(l.url)};l.id?await E.updateMedia(l.id,w):await E.createMedia(w),a(null),m()};return t.jsxs("div",{style:dt.page,children:[d&&t.jsx("iframe",{title:"mindscape-audio",src:`https://www.youtube.com/embed/${d.youtube_id}?autoplay=1&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}}),t.jsxs("div",{style:dt.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:dt.eyebrow,children:"Anvil · Mindscape"}),t.jsx("h1",{style:dt.h1,children:"Mindscape"}),t.jsx("div",{style:dt.subhead,children:"Close your eyes and listen — guided meditation and visualization."})]}),!l&&t.jsxs("button",{onClick:()=>a(y1(e)),style:{...dt.addBtn,background:k.color},children:[t.jsx(ot,{size:15})," Add"]})]}),t.jsx("div",{style:dt.tabs,children:gd.map(w=>{const D=w.icon,S=e===w.id;return t.jsxs("button",{onClick:()=>{r(w.id),a(null)},style:{...dt.tab,...S?{background:w.color,color:"#fff",borderColor:w.color}:{}},children:[t.jsx(D,{size:15})," ",w.label]},w.id)})}),l&&t.jsxs("div",{style:dt.card,children:[t.jsx("div",{style:dt.cardTitle,children:l.id?"Edit":`New ${gd.find(w=>w.id===l.kind).label}`}),t.jsx("input",{placeholder:"YouTube link (plays as audio only)",value:l.url,onChange:w=>a({...l,url:w.target.value}),style:dt.input,autoFocus:!0}),t.jsx("input",{placeholder:"Title (required)",value:l.title,onChange:w=>a({...l,title:w.target.value}),style:{...dt.input,marginTop:8}}),t.jsxs("label",{style:dt.photoPick,children:[l.image?t.jsx("img",{src:l.image,alt:"",style:dt.photoPreview}):t.jsxs("span",{style:dt.photoEmpty,children:[t.jsx(va,{size:18})," Add cover image (required)"]}),t.jsx("input",{type:"file",accept:"image/*",onChange:c,style:{display:"none"}})]}),!T&&t.jsxs("div",{style:dt.warn,children:["Add ",b.join(", ")," to save."]}),t.jsxs("div",{style:dt.formActions,children:[t.jsxs("button",{onClick:()=>a(null),style:dt.cancelBtn,children:[t.jsx(De,{size:14})," Cancel"]}),t.jsxs("button",{onClick:y,disabled:!T,style:{...dt.saveBtn,background:T?k.color:"var(--border)",color:T?"#fff":"var(--text-3)",cursor:T?"pointer":"not-allowed"},children:[t.jsx(He,{size:15})," ",l.id?"Save":"Add"]})]})]}),i?C.length===0?t.jsxs("div",{style:dt.empty,children:["Nothing here yet — add a ",k.label.toLowerCase()," track."]}):t.jsx("div",{style:dt.grid,children:C.map(w=>{const D=(d==null?void 0:d.id)===w.id;return t.jsxs("div",{style:dt.mediaCard,children:[t.jsxs("button",{onClick:()=>u(D?null:w),style:dt.coverBtn,title:D?"Pause":"Play",children:[t.jsx("img",{src:w.image,alt:"",style:dt.cover}),t.jsx("span",{style:{...dt.playOverlay,background:D?"rgba(0,0,0,0.45)":"rgba(0,0,0,0.28)"},children:t.jsx("span",{style:{...dt.playCircle,background:k.color},children:D?t.jsx(uh,{size:20,color:"#fff",fill:"#fff"}):t.jsx(zg,{size:20,color:"#fff",fill:"#fff"})})}),D&&t.jsxs("span",{style:dt.nowPlaying,children:[t.jsx(Sg,{size:11})," Playing"]})]}),t.jsxs("div",{style:dt.mediaBody,children:[t.jsx("div",{style:dt.mediaTitle,children:w.title}),t.jsxs("div",{style:dt.cardActions,children:[t.jsx("button",{onClick:()=>p(w),style:dt.iconBtn,title:"Edit",children:t.jsx(yt,{size:13})}),t.jsx("button",{onClick:()=>{(d==null?void 0:d.id)===w.id&&u(null),f(w.id,w.title)},style:dt.iconBtn,title:"Delete",children:t.jsx(De,{size:14})})]})]})]},w.id)})}):t.jsx("div",{style:dt.muted,children:"Loading…"}),t.jsx(mr,{toasts:h,onUndo:I,onDismiss:B})]})}const dt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:900,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},tabs:{display:"flex",gap:8,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:200,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},warn:{fontSize:12,color:"#C2773B",marginTop:8,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,fontFamily:"inherit"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:16},mediaCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},coverBtn:{position:"relative",border:"none",padding:0,cursor:"pointer",display:"block",width:"100%",aspectRatio:"1",background:"var(--surface-2)"},cover:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center"},playCircle:{width:46,height:46,borderRadius:"50%",display:"grid",placeItems:"center",boxShadow:"0 2px 10px rgba(0,0,0,0.3)"},nowPlaying:{position:"absolute",bottom:8,left:8,display:"flex",alignItems:"center",gap:4,background:"rgba(0,0,0,0.65)",color:"#fff",fontSize:11,fontWeight:700,padding:"3px 8px",borderRadius:7},mediaBody:{padding:"12px 14px",display:"flex",alignItems:"flex-start",gap:8},mediaTitle:{flex:1,fontSize:14.5,fontWeight:600,lineHeight:1.4,minWidth:0,wordBreak:"break-word"},cardActions:{display:"flex",gap:2,flexShrink:0,marginTop:1},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},Ah={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},j1=Object.keys(Ah),k1="#9A7B4F";function w1(e=760){const[r,n]=g.useState(()=>window.innerWidth<e);return g.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const S1=()=>{const e=new Date,r=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${r(e.getMonth()+1)}-${r(e.getDate())}`},C1=e=>{if(!e)return"";const r=new Date(e+"T00:00:00");return isNaN(r)?e:r.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},ud=e=>(e||"").slice(0,4),z1=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>r(o.result),o.onerror=n,o.readAsDataURL(e)}),T1=(e,r=1e3)=>new Promise((n,o)=>{const i=new Image;i.onload=()=>{let{width:s,height:l}=i;s>l&&s>r?(l=l*r/s,s=r):l>r&&(s=s*r/l,l=r);const a=document.createElement("canvas");a.width=s,a.height=l,a.getContext("2d").drawImage(i,0,0,s,l),n(a.toDataURL("image/jpeg",.82))},i.onerror=o,i.src=e});function I1({src:e,onCancel:r,onCrop:n,onKeepOriginal:o}){const[l,a]=g.useState(null),[d,u]=g.useState(1),[m,f]=g.useState({x:0,y:0}),h=g.useRef(null);g.useEffect(()=>{const y=new Image;y.onload=()=>{a(y);const w=Math.max(300/y.width,300/y.height);u(1),y._base=w;const D=y.width*w,S=y.height*w;f({x:(300-D)/2,y:(300-S)/2})},y.src=e},[e]);const I=l?l._base*d:1,B=l?l.width*I:0,k=l?l.height*I:0,C=(y,w,D)=>({x:Math.min(0,Math.max(300-w,y.x)),y:Math.min(0,Math.max(300-D,y.y))});g.useEffect(()=>{l&&f(y=>C(y,B,k))},[d,l]);const p=y=>{const w=y.touches?y.touches[0]:y;h.current={sx:w.clientX,sy:w.clientY,ox:m.x,oy:m.y}},c=y=>{if(!h.current)return;const w=y.touches?y.touches[0]:y,D=h.current.ox+(w.clientX-h.current.sx),S=h.current.oy+(w.clientY-h.current.sy);f(C({x:D,y:S},B,k))},b=()=>{h.current=null},T=()=>{if(!l)return;const y=document.createElement("canvas");y.width=700,y.height=700;const w=y.getContext("2d"),D=700/300;w.drawImage(l,m.x*D,m.y*D,B*D,k*D),n(y.toDataURL("image/jpeg",.85))};return t.jsx("div",{style:yr.overlay,onClick:r,children:t.jsxs("div",{style:yr.box,onClick:y=>y.stopPropagation(),children:[t.jsxs("div",{style:yr.head,children:["Crop to square",t.jsx("button",{onClick:r,style:yr.close,children:t.jsx(De,{size:16})})]}),t.jsxs("div",{style:{...yr.frame,width:300,height:300},onMouseDown:p,onMouseMove:c,onMouseUp:b,onMouseLeave:b,onTouchStart:p,onTouchMove:c,onTouchEnd:b,children:[l&&t.jsx("img",{src:e,alt:"",draggable:!1,style:{position:"absolute",left:m.x,top:m.y,width:B,height:k,userSelect:"none",pointerEvents:"none"}}),t.jsx("div",{style:yr.grid})]}),t.jsxs("div",{style:yr.zoomRow,children:[t.jsx("span",{style:yr.zoomLbl,children:"Zoom"}),t.jsx("input",{type:"range",min:"1",max:"3",step:"0.01",value:d,onChange:y=>u(parseFloat(y.target.value)),style:{flex:1}})]}),t.jsx("div",{style:yr.hint,children:"Drag to reposition · slide to zoom"}),t.jsxs("div",{style:yr.actions,children:[t.jsx("button",{onClick:r,style:yr.cancel,children:"Cancel"}),t.jsx("button",{onClick:o,style:yr.keep,children:"Keep original"}),t.jsxs("button",{onClick:T,style:yr.apply,children:[t.jsx(He,{size:15})," Square crop"]})]})]})})}const B1={id:null,title:"",date:S1(),pillar:"",reward:"",image:"",note:""};function R1(){const e=eo(),r=S=>Ur(S,e.code),n=w1(),[o,i]=g.useState([]),[s,l]=g.useState(null),[a,d]=g.useState(!1),[u,m]=g.useState(null),f=g.useRef(null),h=g.useCallback(()=>{E.getAchievements().then(i).catch(()=>{})},[]);g.useEffect(()=>{h()},[h]);const{deleteItem:I,toasts:B,handleUndo:k,handleDismiss:C}=br(E.deleteAchievement,E.restoreAchievement,h),p=()=>l({...B1}),c=S=>l({id:S.id,title:S.title,date:S.date,pillar:S.pillar||"",reward:S.reward?String(S.reward):"",image:S.image||"",note:S.note||""}),b=async S=>{var N;const j=(N=S.target.files)==null?void 0:N[0];if(j){try{const J=await z1(j);m(J)}catch{}f.current&&(f.current.value="")}},T=async()=>{let S=u;try{u&&(S=await T1(u))}catch{}l(j=>({...j,image:S})),m(null)},y=s&&s.title.trim()&&s.date,w=async()=>{if(!y||a)return;d(!0);const S={title:s.title.trim(),date:s.date,pillar:s.pillar||null,reward:parseFloat(s.reward)||0,image:s.image||null,note:s.note.trim()};try{s.id?await E.updateAchievement(s.id,S):await E.createAchievement(S),l(null),h()}catch{}finally{d(!1)}},D=o.reduce((S,j)=>S+(j.reward||0),0);return t.jsxs("div",{style:Ke.page,children:[t.jsxs("div",{style:Ke.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:Ke.eyebrow,children:"Anvil · Achievements"}),t.jsx("h1",{style:Ke.h1,children:"Achievements"}),t.jsx("div",{style:Ke.subhead,children:"Your tree of wins — newest at the top, scroll down through the past."})]}),t.jsxs("div",{style:Ke.headRight,children:[D>0&&t.jsxs("div",{style:Ke.totalBadge,children:[t.jsx(hs,{size:14,color:"#C9A227"})," ",r(D)," earned"]}),t.jsxs("button",{onClick:p,style:Ke.addBtn,children:[t.jsx(ot,{size:15})," Add achievement"]})]})]}),o.length===0?t.jsxs("div",{style:Ke.empty,children:[t.jsx(qr,{size:30,color:"var(--text-3)"}),t.jsx("div",{style:{marginTop:10},children:"No achievements yet."}),t.jsx("div",{style:Ke.emptySub,children:"Plant your first win — it'll grow into a timeline you can look back on."})]}):t.jsxs("div",{style:{...Ke.timeline,paddingLeft:0},children:[t.jsx("div",{style:{...Ke.trunk,left:n?13:"50%"}}),o.map((S,j)=>{const N=Ah[S.pillar]||k1,J=!n&&j%2===1,se=o[j-1],W=!se||ud(se.date)!==ud(S.date);return t.jsxs("div",{children:[W&&t.jsx("div",{style:{...Ke.yearRow,justifyContent:n?"flex-start":"center",paddingLeft:n?36:0},children:t.jsx("span",{style:Ke.yearChip,children:ud(S.date)})}),t.jsxs("div",{style:{...Ke.row,gridTemplateColumns:n?"28px 1fr":"1fr 44px 1fr"},children:[!n&&t.jsx("div",{style:{gridColumn:1,display:"flex",justifyContent:"flex-end"},children:J&&t.jsx(Mp,{a:S,color:N,side:"left",money:r,onEdit:()=>c(S),onDelete:()=>I(S.id,S.title)})}),t.jsx("div",{style:{gridColumn:n?1:2,display:"flex",justifyContent:"center",position:"relative"},children:t.jsx("div",{style:{...Ke.node,borderColor:N,background:"var(--surface)"},children:t.jsx("div",{style:{...Ke.nodeDot,background:N}})})}),t.jsx("div",{style:{gridColumn:n?2:3,display:"flex",justifyContent:"flex-start"},children:(n||!J)&&t.jsx(Mp,{a:S,color:N,side:n?"mobile":"right",money:r,onEdit:()=>c(S),onDelete:()=>I(S.id,S.title)})})]})]},S.id)})]}),s&&t.jsx("div",{style:Ke.overlay,onClick:()=>l(null),children:t.jsxs("div",{style:Ke.modal,onClick:S=>S.stopPropagation(),children:[t.jsxs("div",{style:Ke.modalHead,children:[t.jsx("div",{style:Ke.modalTitle,children:s.id?"Edit achievement":"New achievement"}),t.jsx("button",{onClick:()=>l(null),style:Ke.iconBtn,children:t.jsx(De,{size:16})})]}),t.jsx("label",{style:Ke.label,children:"Title *"}),t.jsx("input",{autoFocus:!0,value:s.title,onChange:S=>l(j=>({...j,title:S.target.value})),placeholder:"What did you achieve?",style:Ke.input}),t.jsxs("div",{style:Ke.formRow,children:[t.jsxs("div",{style:{flex:1},children:[t.jsxs("label",{style:Ke.label,children:[t.jsx(Iy,{size:12})," Date *"]}),t.jsx("input",{type:"date",value:s.date,onChange:S=>l(j=>({...j,date:S.target.value})),style:Ke.input})]}),t.jsxs("div",{style:{flex:1},children:[t.jsx("label",{style:Ke.label,children:"Pillar (optional)"}),t.jsxs("select",{value:s.pillar,onChange:S=>l(j=>({...j,pillar:S.target.value})),style:Ke.input,children:[t.jsx("option",{value:"",children:"— None —"}),j1.map(S=>t.jsx("option",{value:S,children:S},S))]})]})]}),t.jsxs("label",{style:Ke.label,children:[t.jsx(hs,{size:12})," Reward (",e.code,") — optional gesture of appreciation"]}),t.jsx("input",{type:"number",min:"0",step:"any",value:s.reward,onChange:S=>l(j=>({...j,reward:S.target.value})),placeholder:"0",style:Ke.input}),t.jsx("label",{style:Ke.label,children:"Photo (optional)"}),s.image?t.jsxs("div",{style:Ke.imgWrap,children:[t.jsx("img",{src:s.image,alt:"",style:Ke.imgPreview}),t.jsx("button",{onClick:()=>l(S=>({...S,image:""})),style:Ke.imgRemove,children:t.jsx(De,{size:14})})]}):t.jsxs("button",{onClick:()=>{var S;return(S=f.current)==null?void 0:S.click()},style:Ke.uploadBtn,children:[t.jsx(Gy,{size:15})," Add a photo"]}),t.jsx("input",{ref:f,type:"file",accept:"image/*",onChange:b,style:{display:"none"}}),t.jsx("label",{style:Ke.label,children:"Note (optional)"}),t.jsx("textarea",{value:s.note,onChange:S=>l(j=>({...j,note:S.target.value})),placeholder:"The story behind it…",rows:3,style:{...Ke.input,resize:"vertical",fontFamily:"inherit"}}),t.jsxs("div",{style:Ke.modalActions,children:[t.jsx("button",{onClick:()=>l(null),style:Ke.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:w,disabled:!y||a,style:{...Ke.saveBtn,...!y||a?{opacity:.5,cursor:"not-allowed"}:{}},children:[t.jsx(He,{size:15})," ",s.id?"Save":"Add"]})]})]})}),u&&t.jsx(I1,{src:u,onCancel:()=>m(null),onKeepOriginal:T,onCrop:S=>{l(j=>({...j,image:S})),m(null)}}),t.jsx(mr,{toasts:B,onUndo:k,onDismiss:C})]})}function Mp({a:e,color:r,side:n,money:o,onEdit:i,onDelete:s}){return t.jsxs("div",{style:{...Ke.card,borderTop:`3px solid ${r}`,textAlign:n==="left"?"right":"left"},children:[t.jsxs("div",{style:{...Ke.cardTop,flexDirection:n==="left"?"row-reverse":"row"},children:[t.jsx("span",{style:{...Ke.dateChip,background:`${r}1A`,color:r},children:C1(e.date)}),t.jsxs("div",{style:{display:"flex",gap:2},children:[t.jsx("button",{onClick:i,style:Ke.ghostBtn,title:"Edit",children:t.jsx(yt,{size:13})}),t.jsx("button",{onClick:s,style:Ke.ghostBtn,title:"Delete",children:t.jsx(De,{size:14})})]})]}),t.jsx("div",{style:Ke.cardTitle,children:e.title}),e.image&&t.jsx("img",{src:e.image,alt:"",style:Ke.cardImg}),e.note&&t.jsx("div",{style:Ke.cardNote,children:e.note}),e.reward>0&&t.jsxs("div",{style:{...Ke.rewardBadge,marginLeft:n==="left"?"auto":0},children:[t.jsx(hs,{size:13})," ",o(e.reward)]})]})}const Ke={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},totalBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{textAlign:"center",color:"var(--text-3)",padding:"60px 16px",fontSize:14,fontWeight:600},emptySub:{fontSize:12.5,fontWeight:400,marginTop:6,maxWidth:320,marginInline:"auto",lineHeight:1.5},timeline:{position:"relative",maxWidth:1e3,margin:"0 auto",paddingBottom:30},trunk:{position:"absolute",top:8,bottom:8,width:3,background:"linear-gradient(to bottom, var(--border), var(--border))",transform:"translateX(-1.5px)",borderRadius:2},yearRow:{display:"flex",margin:"6px 0 12px"},yearChip:{fontSize:11.5,fontWeight:800,letterSpacing:"0.06em",color:"var(--text-2)",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:"4px 12px",position:"relative",zIndex:2},row:{display:"grid",alignItems:"center",gap:8,marginBottom:16},node:{width:20,height:20,borderRadius:"50%",border:"3px solid",display:"grid",placeItems:"center",zIndex:2,boxShadow:"0 0 0 4px var(--bg)"},nodeDot:{width:7,height:7,borderRadius:"50%"},card:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.06)",maxWidth:420,width:"100%",boxSizing:"border-box"},cardTop:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,marginBottom:7},dateChip:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,whiteSpace:"nowrap"},cardTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",lineHeight:1.3,wordBreak:"break-word"},cardImg:{width:"100%",maxHeight:220,objectFit:"cover",borderRadius:9,marginTop:9,display:"block"},cardNote:{fontSize:12.5,color:"var(--text-2)",marginTop:7,lineHeight:1.5,whiteSpace:"pre-wrap",wordBreak:"break-word"},rewardBadge:{display:"inline-flex",alignItems:"center",gap:5,marginTop:9,background:"rgba(201,162,39,0.12)",color:"#8A6E1A",border:"1px solid rgba(201,162,39,0.3)",padding:"3px 10px",borderRadius:14,fontSize:12,fontWeight:700},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:6},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:60,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:460,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},label:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)"},formRow:{display:"flex",gap:10},uploadBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",border:"1.5px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"11px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},imgWrap:{position:"relative",borderRadius:10,overflow:"hidden"},imgPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block",borderRadius:10},imgRemove:{position:"absolute",top:8,right:8,border:"none",background:"rgba(0,0,0,0.55)",color:"#fff",width:28,height:28,borderRadius:"50%",cursor:"pointer",display:"grid",placeItems:"center"},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},yr={overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.62)",zIndex:300,display:"grid",placeItems:"center",padding:16},box:{background:"var(--surface)",borderRadius:16,padding:"18px",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",maxWidth:"92vw"},head:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},close:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},frame:{position:"relative",overflow:"hidden",borderRadius:12,background:"#000",cursor:"grab",touchAction:"none",margin:"0 auto",maxWidth:"84vw"},grid:{position:"absolute",inset:0,pointerEvents:"none",boxShadow:"inset 0 0 0 1px rgba(255,255,255,0.5)",backgroundImage:"linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",backgroundSize:"33.33% 33.33%"},zoomRow:{display:"flex",alignItems:"center",gap:10,marginTop:14},zoomLbl:{fontSize:12,fontWeight:700,color:"var(--text-2)"},hint:{fontSize:11,color:"var(--text-3)",textAlign:"center",marginTop:8},actions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:14,flexWrap:"wrap"},cancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},keep:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},apply:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}};function E1(e=760){const[r,n]=g.useState(()=>window.innerWidth<e);return g.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const sl=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},F1=e=>e?new Date(e+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"",Jr="#C9772E",Ii=[{id:"todo",label:"Want to",color:"#3A7CA5"},{id:"doing",label:"Enjoying",color:"#C9772E"},{id:"done",label:"Satisfied",color:"#4C9A6B"}],A1=[{id:"text",label:"Text"},{id:"number",label:"Number"},{id:"link",label:"Link"}],pd=e=>(e&&typeof e=="object"?e.type:"text")||"text",Rn=e=>(e&&typeof e=="object"?e.name:e)||"";function D1(){const e=E1(),[r,n]=g.useState([]),[o,i]=g.useState(null),[s,l]=g.useState(!1),[a,d]=g.useState(null),[u,m]=g.useState(null),[f,h]=g.useState(null),[I,B]=g.useState(null),[k,C]=g.useState(null),[p,c]=g.useState([]),b=g.useRef({}),T=g.useCallback(()=>{E.getDelight().then(L=>{n(L),i(ie=>{var he;return ie&&L.some(A=>A.id===ie)?ie:((he=L[0])==null?void 0:he.id)??null}),l(!0)}).catch(()=>l(!0))},[]);g.useEffect(()=>{T()},[T]),g.useEffect(()=>{c([])},[o]);const{deleteItem:y,toasts:w,handleUndo:D,handleDismiss:S}=br(E.deleteDelightItem,E.restoreDelightItem,T),j=r.find(L=>L.id===o)||null,N=g.useMemo(()=>{const L={todo:[],doing:[],done:[]};return((j==null?void 0:j.items)||[]).forEach(ie=>{(L[ie.status]||L.todo).push(ie)}),Object.values(L).forEach(ie=>ie.sort((he,A)=>he.position-A.position||he.id-A.id)),L},[j]),J=L=>/^tags?$/i.test(Rn(L).trim()),se=L=>((j==null?void 0:j.columns)||[]).filter(J).flatMap(ie=>(L.fields[Rn(ie)]||"").split(",").map(he=>he.trim()).filter(Boolean)),W=g.useMemo(()=>{const L=new Set;return((j==null?void 0:j.items)||[]).forEach(ie=>(j.columns||[]).filter(J).forEach(he=>(ie.fields[Rn(he)]||"").split(",").map(A=>A.trim()).filter(Boolean).forEach(A=>L.add(A)))),[...L].sort((ie,he)=>ie.localeCompare(he))},[j]),de=g.useMemo(()=>{const L={};return((j==null?void 0:j.columns)||[]).forEach(ie=>{const he=Rn(ie);if(J(ie))return;const A=new Set;((j==null?void 0:j.items)||[]).forEach(v=>{const re=(v.fields[he]||"").trim();re&&A.add(re)}),L[he]=[...A].sort((v,re)=>v.localeCompare(re))}),L},[j]),Re=L=>p.length===0||se(L).some(ie=>p.includes(ie)),pe=L=>c(ie=>ie.includes(L)?ie.filter(he=>he!==L):[...ie,L]),je=(L,ie,he)=>{for(const A of Ii){const v=b.current[A.id];if(!v)continue;const re=v.getBoundingClientRect();if(L>=re.left&&L<=re.right&&ie>=re.top&&ie<=re.bottom){const F=[...v.querySelectorAll("[data-card]")].filter(ye=>ye.dataset.id!==String(he));let le=F.length;for(let ye=0;ye<F.length;ye++){const ke=F[ye].getBoundingClientRect();if(ie<ke.top+ke.height/2){le=ye;break}}return{status:A.id,index:le}}}return null},Q=(L,ie)=>{if(L.target.closest("button"))return;const he=L.clientX,A=L.clientY,v=L.currentTarget;let re=!1,F=null,le=null;const ye=Ne=>{if(!re){if(Math.hypot(Ne.clientX-he,Ne.clientY-A)<6)return;re=!0;const lt=v.getBoundingClientRect();le={id:ie.id,item:ie,w:lt.width,offX:he-lt.left,offY:A-lt.top}}le={...le,x:Ne.clientX,y:Ne.clientY},B(le),F=je(Ne.clientX,Ne.clientY,ie.id)||F,C(F)},ke=()=>{window.removeEventListener("pointermove",ye),window.removeEventListener("pointerup",ke),re&&F&&x(ie,F),B(null),C(null)};window.addEventListener("pointermove",ye),window.addEventListener("pointerup",ke)},x=(L,ie)=>{const he={};Ii.forEach(F=>{he[F.id]=(N[F.id]||[]).filter(le=>le.id!==L.id)});const A=he[ie.status]||[];let v;if(p.length){const F=A.filter(Re);v=ie.index<F.length?A.indexOf(F[ie.index]):A.length}else v=Math.max(0,Math.min(ie.index,A.length));he[ie.status]=[...A.slice(0,v),{...L,status:ie.status},...A.slice(v)];const re=[];Ii.forEach(F=>(he[F.id]||[]).forEach((le,ye)=>re.push({id:le.id,status:F.id,position:ye}))),n(F=>F.map(le=>le.id===o?{...le,items:re.map(ye=>({...le.items.find(ke=>ke.id===ye.id),status:ye.status,position:ye.position}))}:le)),E.arrangeDelight(o,re).then(T).catch(T),ie.status==="done"&&L.status!=="done"&&h({item:L,date:sl(),note:""})},Y=async L=>{window.confirm(`Delete "${L.name}" and all its items?`)&&(await E.deleteCollection(L.id),T())},H=()=>({name:"",type:"text"}),ae=()=>d({id:null,name:"",columns:[H(),H()]}),V=L=>d({id:L.id,name:L.name,columns:L.columns.length?L.columns.map(ie=>({name:Rn(ie),type:pd(ie)})):[H()]}),G=async()=>{const L=a.name.trim();if(!L)return;const ie=a.columns.map(he=>({name:he.name.trim(),type:he.type||"text"})).filter(he=>he.name);a.id?await E.updateCollection(a.id,{name:L,columns:ie}):await E.createCollection({name:L,columns:ie}),d(null),T()},P=(L="todo")=>m({id:null,name:"",fields:{},status:L}),ge=L=>m({id:L.id,name:L.name,fields:{...L.fields},status:L.status}),ce=async()=>{const L=u.name.trim();if(!L||!j)return;const ie=u.id?(j.items||[]).find(re=>re.id===u.id):null,he=(ie==null?void 0:ie.status)==="done",A={name:L,fields:u.fields,status:u.status};let v;if(u.id?v=await E.updateDelightItem(u.id,A):v=await E.createDelightItem(j.id,A),m(null),await T(),u.status==="done"&&!he){const re=We(v,j.id,L);h({item:re||{id:u.id,name:L},date:sl(),note:""})}},We=(L,ie,he)=>{const A=Array.isArray(L)?L.find(re=>re.id===ie):null;if(!A)return null;const v=(A.items||[]).filter(re=>re.name===he&&re.status==="done");return v.length?v[v.length-1]:null},X=async()=>{var L;if(!((L=f==null?void 0:f.item)!=null&&L.id)){h(null);return}await E.updateDelightItem(f.item.id,{completed_date:f.date||sl(),completion_note:f.note||""}),h(null),T()},ne=({it:L})=>{const ie=j.columns.filter(A=>L.fields[Rn(A)]&&!J(A)),he=se(L);return t.jsxs("div",{"data-card":!0,"data-id":L.id,onPointerDown:A=>Q(A,L),style:ve.itemCard,children:[t.jsxs("div",{style:ve.itemCardTop,children:[t.jsx(Ql,{size:13,style:{color:"var(--text-3)",flexShrink:0}}),t.jsx("span",{style:ve.itemName,children:L.name}),t.jsx("button",{onClick:()=>ge(L),style:ve.ghostBtn,children:t.jsx(yt,{size:12})}),t.jsx("button",{onClick:()=>y(L.id,L.name),style:ve.ghostBtn,children:t.jsx(De,{size:13})})]}),ie.map(A=>{const v=Rn(A),re=L.fields[v];return t.jsxs("div",{style:ve.itemField,children:[t.jsx("span",{style:ve.fieldLabel,children:v}),pd(A)==="link"?t.jsx("a",{href:/^https?:\/\//i.test(re)?re:`https://${re}`,target:"_blank",rel:"noreferrer",style:{minWidth:0,wordBreak:"break-word",color:Jr},onClick:F=>F.stopPropagation(),children:re}):t.jsx("span",{style:{minWidth:0,wordBreak:"break-word"},children:re})]},v)}),he.length>0&&t.jsx("div",{style:ve.tagWrap,children:he.map((A,v)=>t.jsx("span",{style:ve.tag,children:A},v))}),L.status==="done"&&L.completed_date&&t.jsxs("div",{style:ve.doneMeta,children:[t.jsxs("span",{style:ve.doneDate,children:["✓ ",F1(L.completed_date)]}),L.completion_note&&t.jsx("span",{style:ve.doneNote,children:L.completion_note})]})]})};return t.jsxs("div",{style:ve.page,children:[t.jsxs("div",{style:ve.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:ve.eyebrow,children:"Anvil · Delights"}),t.jsx("h1",{style:ve.h1,children:"Delights"}),t.jsx("div",{style:ve.subhead,children:"Books, films, places, food — track what you want to enjoy and how you felt."})]}),t.jsxs("button",{onClick:ae,style:ve.addColBtn,children:[t.jsx(ot,{size:15})," New list"]})]}),t.jsxs("div",{style:ve.tabs,children:[r.map(L=>t.jsxs("button",{onClick:()=>i(L.id),style:{...ve.tab,...L.id===o?ve.tabOn:{}},children:[L.name,t.jsx("span",{style:ve.tabCount,children:L.items.length})]},L.id)),t.jsx("button",{onClick:ae,style:ve.tabAdd,title:"New list",children:t.jsx(ot,{size:15})})]}),s?j?t.jsxs("div",{children:[t.jsxs("div",{style:ve.colHead,children:[t.jsx("h2",{style:ve.colTitle,children:j.name}),t.jsxs("div",{style:ve.colActions,children:[t.jsxs("button",{onClick:()=>P(),style:ve.primaryBtn,children:[t.jsx(ot,{size:14})," Add"]}),t.jsx("button",{onClick:()=>V(j),style:ve.ghostBtn,title:"Edit list & columns",children:t.jsx(My,{size:15})}),t.jsx("button",{onClick:()=>Y(j),style:ve.ghostBtn,title:"Delete list",children:t.jsx(De,{size:16})})]})]}),W.length>0&&t.jsxs("div",{style:ve.filterBar,children:[t.jsx("span",{style:ve.filterLabel,children:"Tags"}),t.jsx("button",{onClick:()=>c([]),style:{...ve.filterChip,...p.length===0?ve.filterChipOn:{}},children:"All"}),W.map(L=>t.jsx("button",{onClick:()=>pe(L),style:{...ve.filterChip,...p.includes(L)?ve.filterChipOn:{}},children:L},L))]}),t.jsx("div",{style:{...ve.board,gridTemplateColumns:e?"1fr":"repeat(3, 1fr)"},children:Ii.map(L=>{const ie=(N[L.id]||[]).filter(Re),he=I?ie.filter(v=>v.id!==I.id):ie,A=k&&k.status===L.id;return t.jsxs("div",{ref:v=>b.current[L.id]=v,style:{...ve.lane,...A?{outline:`2px dashed ${L.color}`,outlineOffset:-2}:{}},children:[t.jsxs("div",{style:ve.laneHead,children:[t.jsx("span",{style:{...ve.laneDot,background:L.color}}),t.jsx("span",{style:ve.laneLabel,children:L.label}),t.jsx("span",{style:ve.laneCount,children:ie.length}),t.jsx("button",{onClick:()=>P(L.id),style:ve.laneAdd,title:`Add to ${L.label}`,children:t.jsx(ot,{size:13})})]}),t.jsxs("div",{style:ve.laneBody,children:[he.map((v,re)=>t.jsxs("div",{children:[A&&k.index===re&&t.jsx("div",{style:{...ve.insertLine,background:L.color}}),t.jsx(ne,{it:v})]},v.id)),A&&k.index>=he.length&&t.jsx("div",{style:{...ve.insertLine,background:L.color}}),he.length===0&&!A&&t.jsx("div",{style:ve.laneEmpty,children:"Drop here"})]})]},L.id)})})]}):t.jsxs("div",{style:ve.empty,children:[t.jsx(Cg,{size:28,color:"var(--text-3)"}),t.jsx("div",{style:{marginTop:10},children:"No lists yet."}),t.jsxs("button",{onClick:ae,style:{...ve.addColBtn,marginTop:14},children:[t.jsx(ot,{size:15})," Create your first list"]})]}):t.jsx("div",{style:ve.muted,children:"Loading…"}),I&&t.jsx("div",{style:{...ve.ghost,width:I.w,left:I.x-I.offX,top:I.y-I.offY},children:t.jsxs("div",{style:ve.itemCardTop,children:[t.jsx(Ql,{size:13,style:{color:"var(--text-3)",flexShrink:0}}),t.jsx("span",{style:ve.itemName,children:I.item.name})]})}),a&&t.jsx("div",{style:ve.overlay,onClick:()=>d(null),children:t.jsxs("div",{style:ve.modal,onClick:L=>L.stopPropagation(),children:[t.jsxs("div",{style:ve.modalHead,children:[t.jsx("span",{style:ve.modalTitle,children:a.id?"Edit list":"New list"}),t.jsx("button",{onClick:()=>d(null),style:ve.iconBtn,children:t.jsx(De,{size:16})})]}),t.jsx("label",{style:ve.label,children:"List name *"}),t.jsx("input",{autoFocus:!0,value:a.name,onChange:L=>d(ie=>({...ie,name:L.target.value})),placeholder:"e.g. Gardens, Cafés, Trips…",style:ve.input}),t.jsx("label",{style:ve.label,children:"Columns"}),t.jsx("div",{style:ve.muted2,children:"Name the details you want to track (e.g. Author, Distance, Tag)."}),a.columns.map((L,ie)=>t.jsxs("div",{style:ve.colRow,children:[t.jsx("input",{value:L.name,placeholder:`Column ${ie+1}`,onChange:he=>d(A=>{const v=[...A.columns];return v[ie]={...v[ie],name:he.target.value},{...A,columns:v}}),style:{...ve.input,marginBottom:0,flex:1}}),t.jsx("select",{value:L.type,onChange:he=>d(A=>{const v=[...A.columns];return v[ie]={...v[ie],type:he.target.value},{...A,columns:v}}),style:ve.colTypeSelect,children:A1.map(he=>t.jsx("option",{value:he.id,children:he.label},he.id))}),t.jsx("button",{onClick:()=>d(he=>({...he,columns:he.columns.filter((A,v)=>v!==ie)})),style:ve.iconBtn,children:t.jsx(De,{size:14})})]},ie)),a.columns.length<6&&t.jsxs("button",{onClick:()=>d(L=>({...L,columns:[...L.columns,H()]})),style:ve.addColInline,children:[t.jsx(ot,{size:13})," Add column"]}),t.jsxs("div",{style:ve.modalActions,children:[t.jsx("button",{onClick:()=>d(null),style:ve.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:G,disabled:!a.name.trim(),style:{...ve.saveBtn,...a.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",a.id?"Save":"Create"]})]})]})}),u&&j&&t.jsx("div",{style:ve.overlay,onClick:()=>m(null),children:t.jsxs("div",{style:ve.modal,onClick:L=>L.stopPropagation(),children:[t.jsxs("div",{style:ve.modalHead,children:[t.jsx("span",{style:ve.modalTitle,children:u.id?"Edit":`Add to ${j.name}`}),t.jsx("button",{onClick:()=>m(null),style:ve.iconBtn,children:t.jsx(De,{size:16})})]}),t.jsx("label",{style:ve.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:u.name,onChange:L=>m(ie=>({...ie,name:L.target.value})),onKeyDown:L=>L.key==="Enter"&&ce(),placeholder:"Title / name",style:ve.input}),j.columns.map(L=>{const ie=Rn(L),he=pd(L),A=`dl-${j.id}-${ie}`,v=de[ie]||[];return t.jsxs("div",{children:[t.jsx("label",{style:ve.label,children:ie}),t.jsx("input",{value:u.fields[ie]||"",type:he==="number"?"number":he==="link"?"url":"text",list:v.length?A:void 0,onChange:re=>m(F=>({...F,fields:{...F.fields,[ie]:re.target.value}})),placeholder:he==="link"?"https://…":ie,style:ve.input}),v.length>0&&t.jsx("datalist",{id:A,children:v.map(re=>t.jsx("option",{value:re},re))})]},ie)}),t.jsx("label",{style:ve.label,children:"Status"}),t.jsx("div",{style:ve.statusPick,children:Ii.map(L=>t.jsx("button",{type:"button",onClick:()=>m(ie=>({...ie,status:L.id})),style:{...ve.statusChip,...u.status===L.id?{background:L.color,color:"#fff",border:`1px solid ${L.color}`}:{}},children:L.label},L.id))}),t.jsxs("div",{style:ve.modalActions,children:[t.jsx("button",{onClick:()=>m(null),style:ve.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:ce,disabled:!u.name.trim(),style:{...ve.saveBtn,...u.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",u.id?"Save":"Add"]})]})]})}),f&&t.jsx("div",{style:ve.overlay,onClick:()=>h(null),children:t.jsxs("div",{style:{...ve.modal,maxWidth:380},onClick:L=>L.stopPropagation(),children:[t.jsxs("div",{style:ve.modalHead,children:[t.jsx("span",{style:ve.modalTitle,children:"Satisfied! 🎉"}),t.jsx("button",{onClick:()=>h(null),style:ve.iconBtn,children:t.jsx(De,{size:16})})]}),t.jsxs("div",{style:ve.muted2,children:['"',f.item.name,'" — when did you complete it?']}),t.jsx("label",{style:ve.label,children:"Completed on"}),t.jsx("input",{type:"date",value:f.date,max:sl(),onChange:L=>h(ie=>({...ie,date:L.target.value})),style:ve.input}),t.jsx("label",{style:ve.label,children:"Comment (optional)"}),t.jsx("textarea",{value:f.note,onChange:L=>h(ie=>({...ie,note:L.target.value})),placeholder:"How was it?",style:{...ve.input,minHeight:64,resize:"vertical"}}),t.jsxs("div",{style:ve.modalActions,children:[t.jsx("button",{onClick:()=>h(null),style:ve.cancelBtn,children:"Skip"}),t.jsxs("button",{onClick:X,style:ve.saveBtn,children:[t.jsx(He,{size:15})," Save"]})]})]})}),t.jsx(mr,{toasts:w,onUndo:D,onDismiss:S})]})}const ve={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},addColBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"none",background:Jr,color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabs:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16,alignItems:"center"},tab:{display:"inline-flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},tabOn:{background:Jr,color:"#fff",borderColor:Jr},tabCount:{fontSize:10.5,fontWeight:700,background:"rgba(0,0,0,0.12)",borderRadius:9,padding:"1px 6px"},tabAdd:{border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",width:32,height:32,borderRadius:"50%",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},colHead:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,marginBottom:12,flexWrap:"wrap"},colTitle:{fontSize:18,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},colActions:{display:"flex",gap:6,alignItems:"center"},primaryBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"none",background:Jr,color:"#fff",padding:"7px 13px",borderRadius:8,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:6,flexShrink:0},filterBar:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",marginBottom:14},filterLabel:{fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--text-3)",marginRight:2},filterChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 11px",borderRadius:16,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},filterChipOn:{background:Jr,color:"#fff",borderColor:Jr},board:{display:"grid",gap:12,alignItems:"start"},lane:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:"10px 10px 12px",minHeight:120,display:"flex",flexDirection:"column"},laneHead:{display:"flex",alignItems:"center",gap:7,padding:"2px 4px 10px"},laneDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},laneLabel:{fontSize:12.5,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--text-2)"},laneCount:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},laneAdd:{marginLeft:"auto",border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:2,borderRadius:6},laneBody:{display:"flex",flexDirection:"column",gap:8,minHeight:40,flex:1},laneEmpty:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",textAlign:"center",padding:"16px 0",border:"1px dashed var(--border)",borderRadius:8},insertLine:{height:3,borderRadius:2,margin:"1px 0"},itemCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"9px 10px",boxShadow:"0 1px 2px rgba(0,0,0,0.05)",cursor:"grab",touchAction:"none",userSelect:"none"},itemCardTop:{display:"flex",alignItems:"center",gap:6},itemName:{flex:1,minWidth:0,fontSize:13.5,fontWeight:700,wordBreak:"break-word"},itemField:{display:"flex",gap:8,fontSize:12,color:"var(--text-2)",marginTop:5,paddingLeft:19},fieldLabel:{fontWeight:700,color:"var(--text-3)",minWidth:64,flexShrink:0},tagWrap:{display:"flex",flexWrap:"wrap",gap:5,marginTop:8,paddingLeft:19},tag:{fontSize:10.5,fontWeight:700,color:Jr,background:"color-mix(in srgb, "+Jr+" 14%, transparent)",border:"1px solid color-mix(in srgb, "+Jr+" 30%, transparent)",borderRadius:12,padding:"2px 8px",whiteSpace:"nowrap"},doneMeta:{marginTop:8,paddingLeft:19,display:"flex",flexDirection:"column",gap:3},doneDate:{fontSize:11,fontWeight:700,color:"#4C9A6B"},doneNote:{fontSize:11.5,color:"var(--text-2)",fontStyle:"italic",wordBreak:"break-word"},ghost:{position:"fixed",zIndex:300,pointerEvents:"none",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"9px 10px",boxShadow:"0 8px 28px rgba(0,0,0,0.28)",opacity:.95,transform:"rotate(1.5deg)"},muted:{fontSize:13,color:"var(--text-3)"},muted2:{fontSize:11.5,color:"var(--text-3)",marginBottom:8},empty:{textAlign:"center",color:"var(--text-3)",padding:"50px 16px",fontSize:14,fontWeight:600,display:"flex",flexDirection:"column",alignItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:8},colRow:{display:"flex",gap:6,alignItems:"center",marginBottom:8},colTypeSelect:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",background:"var(--bg)",color:"var(--text)",flexShrink:0},addColInline:{display:"inline-flex",alignItems:"center",gap:5,border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"7px 12px",borderRadius:8,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},statusPick:{display:"flex",gap:6,flexWrap:"wrap"},statusChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 13px",borderRadius:18,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Hr="#C9772E",Dh={Carrot:Ry,ShoppingCart:u0,Clapperboard:Ay,ShoppingBag:fh,Fuel:Ny,Sparkles:To,Shirt:g0,WashingMachine:y0,Zap:Ig,Tv:f0,Droplet:_y,Coffee:Dy,Utensils:x0,Bus:Sy,Train:m0,Plane:l0,Home:fs,Heart:dh,Gift:hs,Book:jy,Dumbbell:$y,Pill:s0,Phone:o0,Wifi:v0,Gamepad2:Oy,Music:ja,Scissors:mh,PawPrint:n0,Baby:xy,GraduationCap:lh,Briefcase:wy,Car:By,Bike:vy},En=({name:e,...r})=>{const n=Dh[e]||fh;return t.jsx(n,{...r})},bd=["#C9772E","#4C9A6B","#3A7CA5","#8268B0","#C2536B","#C9A227","#D1556E","#5B7C99","#A23E57","#3E9E6B"],Wh=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Lp=Wh(new Date),Wo=120;function W1(e=760){const[r,n]=g.useState(()=>window.innerWidth<e);return g.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}function M1(){const e=W1(),r=eo(),n=Rh(),[o,i]=g.useState([]),[s,l]=g.useState([]),[a,d]=g.useState(!1),[u,m]=g.useState(Lp),[f,h]=g.useState(()=>new Date),[I,B]=g.useState(null),[k,C]=g.useState(null),[p,c]=g.useState(null),[b,T]=g.useState(!1),[y,w]=g.useState("day"),[D,S]=g.useState(()=>Br(new Date,n)[0]),[j,N]=g.useState("all"),J=g.useCallback(()=>{E.getExpenses().then(R=>{i(R.categories),l(R.logs),d(!0)}).catch(()=>d(!0))},[]);g.useEffect(()=>{J()},[J]);const{deleteItem:se,toasts:W,handleUndo:de,handleDismiss:Re}=br(E.deleteExpenseLog,E.restoreExpenseLog,J),pe=g.useMemo(()=>{const R={};return o.forEach(me=>R[me.id]=me),R},[o]),je=R=>vs(R,r.code),Q=g.useMemo(()=>s.filter(R=>R.date===u),[s,u]),x=Q.reduce((R,me)=>R+me.amount,0),Y=g.useMemo(()=>{if(y==="day")return Q;if(y==="month"){const[R,me]=Br(new Date(u+"T00:00"),n);return s.filter(Ce=>Ce.date>=R&&Ce.date<=me)}if(y==="year"){const R=u.slice(0,4);return s.filter(me=>me.date.slice(0,4)===R)}return s},[s,Q,y,u,n]),H=Y.reduce((R,me)=>R+me.amount,0),ae=g.useMemo(()=>{const R={};return Y.forEach(me=>{R[me.category_id]=(R[me.category_id]||0)+me.amount}),Object.entries(R).map(([me,Ce])=>({cat:pe[me],amount:Ce})).filter(me=>me.cat).sort((me,Ce)=>Ce.amount-me.amount)},[Y,pe]),V=R=>Br(new Date(R+"T00:00"),n)[0],G=g.useMemo(()=>{const R=new Set(s.map(me=>V(me.date)));return R.add(Br(new Date,n)[0]),Array.from(R).sort().reverse().slice(0,12)},[s,n]),P=R=>new Date(R+"T00:00").toLocaleDateString("en-US",{month:"short",year:"numeric"}),ge=(R,me)=>Br(new Date(R+"T00:00"),n,-me)[0],ce=R=>j==="all"||R.category_id===Number(j),We=[D,ge(D,1),ge(D,2)],X=We.map(R=>{const[me,Ce]=Br(new Date(R+"T00:00"),n);return s.filter(Oe=>Oe.date>=me&&Oe.date<=Ce&&ce(Oe)).reduce((Oe,kt)=>Oe+kt.amount,0)}),[ne,L,ie]=X,he=L>0?Math.round((ne-L)/L*100):ne>0?100:0,A=he>0?ni:he<0?Yn:gh,v=he>0?"#C2536B":he<0?"#4C9A6B":"#9A968C",re=g.useMemo(()=>{const[R,me]=Br(new Date(D+"T00:00"),n),Ce={};return s.filter(Oe=>Oe.date>=R&&Oe.date<=me&&ce(Oe)).forEach(Oe=>{Ce[Oe.category_id]=(Ce[Oe.category_id]||0)+Oe.amount}),Object.entries(Ce).map(([Oe,kt])=>({cat:pe[Oe],amount:kt})).filter(Oe=>Oe.cat).sort((Oe,kt)=>kt.amount-Oe.amount)},[s,D,j,pe,n]);let F=0;const le=re.map(R=>{const me=ne>0?F/ne*100:0;F+=R.amount;const Ce=ne>0?F/ne*100:0;return{...R,start:me,end:Ce,pct:ne>0?R.amount/ne*100:0}}),ye=le.length?`conic-gradient(${le.map(R=>`${R.cat.color} ${R.start}% ${R.end}%`).join(", ")})`:"var(--surface-2)",ke=g.useMemo(()=>{const[R,me]=Br(f,n),Ce=new Date(R+"T00:00"),Oe=new Date(me+"T00:00"),kt=(Ce.getDay()+6)%7,It={};s.forEach(ht=>{ht.date>=R&&ht.date<=me&&(It[ht.date]=(It[ht.date]||0)+ht.amount)});const at=[];for(let ht=0;ht<kt;ht++)at.push(null);for(let ht=new Date(Ce);ht<=Oe;ht.setDate(ht.getDate()+1)){const gt=Wh(ht);at.push({date:gt,day:ht.getDate(),total:It[gt]||0})}return at},[f,s,n]),Ne=R=>h(me=>{const[Ce]=Br(me,n,R);return new Date(Ce+"T00:00")}),lt=g.useMemo(()=>{const[R,me]=Br(f,n);if(n===1)return new Date(R+"T00:00").toLocaleDateString("en-US",{month:"long",year:"numeric"});const Ce=Oe=>new Date(Oe+"T00:00").toLocaleDateString("en-US",{day:"numeric",month:"short"});return`${Ce(R)} – ${Ce(me)}`},[f,n]),Je=R=>B({cat:R,amount:"",note:""}),mt=async()=>{const R=parseFloat(I.amount);!R||R<=0||(await E.createExpenseLog({category_id:I.cat.id,amount:R,note:I.note.trim().slice(0,Wo),date:u}),B(null),J())},Qe=R=>C({id:R.id,category_id:R.category_id,amount:String(R.amount),note:R.note||"",date:R.date}),st=async()=>{const R=parseFloat(k.amount);!R||R<=0||(await E.updateExpenseLog(k.id,{category_id:k.category_id,amount:R,note:k.note.trim().slice(0,Wo),date:k.date}),C(null),J())},oe=()=>c({id:null,name:"",icon:"ShoppingBag",color:bd[o.length%bd.length]}),Me=R=>c({id:R.id,name:R.name,icon:R.icon,color:R.color}),qe=async()=>{const R=p.name.trim();R&&(p.id?await E.updateExpenseCategory(p.id,{name:R,icon:p.icon,color:p.color}):await E.createExpenseCategory({name:R,icon:p.icon,color:p.color}),c(null),J())},tt=async R=>{const me=s.filter(Oe=>Oe.category_id===R.id).length,Ce=me>0?`Delete "${R.name}"? Its ${me} transaction${me===1?"":"s"} will be moved to "Other".`:`Delete "${R.name}"?`;window.confirm(Ce)&&(await E.deleteExpenseCategory(R.id),J())},ut=async(R,me)=>{const Ce=R+me;if(Ce<0||Ce>=o.length)return;const Oe=[...o];[Oe[R],Oe[Ce]]=[Oe[Ce],Oe[R]],i(Oe),await E.arrangeExpenseCategories(Oe.map(kt=>kt.id)).catch(()=>{}),J()},Et=new Date(u+"T00:00").toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});let jt=0;const vt=ae.map(R=>{const me=H>0?jt/H*100:0;jt+=R.amount;const Ce=H>0?jt/H*100:0;return{...R,start:me,end:Ce,pct:H>0?R.amount/H*100:0}}),Ct=vt.length?`conic-gradient(${vt.map(R=>`${R.cat.color} ${R.start}% ${R.end}%`).join(", ")})`:"var(--surface-2)";return t.jsxs("div",{style:{...K.page,...e?{padding:"20px 14px"}:{}},children:[t.jsx("div",{style:K.head,children:t.jsxs("div",{children:[t.jsx("div",{style:K.eyebrow,children:"Anvil · Expenses"}),t.jsx("h1",{style:K.h1,children:"Expenses"}),t.jsx("div",{style:K.subhead,children:"Log day-to-day spending by category and see where it goes."})]})}),t.jsxs("div",{style:K.totalCard,children:[t.jsxs("div",{style:K.totalLeft,children:[t.jsx(ql,{size:20,color:Hr}),t.jsxs("div",{children:[t.jsxs("div",{style:K.totalLabel,children:["Total spent ",y==="day"?"today":y==="month"?"this month":y==="year"?"this year":"all time"]}),t.jsx("div",{style:K.totalVal,children:je(H)})]})]}),t.jsx("div",{style:K.scopeRow,children:[["day","Day"],["month","Month"],["year","Year"],["all","All"]].map(([R,me])=>t.jsx("button",{onClick:()=>w(R),style:{...K.scopeBtn,...y===R?K.scopeBtnOn:{}},children:me},R))})]}),t.jsxs("div",{style:{...K.cols,gridTemplateColumns:e?"minmax(0,1fr)":"320px minmax(0,1fr)"},children:[t.jsxs("div",{style:{...K.card,minWidth:0,...e?{padding:12}:{}},children:[t.jsxs("div",{style:K.calHead,children:[t.jsx("button",{onClick:()=>Ne(-1),style:K.calNav,children:t.jsx(Tn,{size:16})}),t.jsx("span",{style:K.calTitle,children:lt}),t.jsx("button",{onClick:()=>Ne(1),style:K.calNav,children:t.jsx(sn,{size:16})})]}),t.jsxs("div",{style:K.calGrid,children:[["M","T","W","T","F","S","S"].map((R,me)=>t.jsx("div",{style:K.calDow,children:R},me)),ke.map((R,me)=>R===null?t.jsx("div",{},me):t.jsxs("button",{onClick:()=>m(R.date),style:{...K.calCell,...R.date===u?K.calCellOn:{},...R.date===Lp&&R.date!==u?K.calCellToday:{}},children:[t.jsx("span",{children:R.day}),R.total>0&&t.jsx("span",{style:{...K.calDot,background:R.date===u?"#fff":Hr}})]},R.date))]})]}),t.jsxs("div",{children:[t.jsxs("div",{style:K.card,children:[t.jsxs("div",{style:K.cardTitleRow,children:[t.jsxs("div",{children:[t.jsx("div",{style:K.cardTitle,children:Et}),t.jsx("div",{style:K.cardSub,children:"Tap a category to log an expense for this day."})]}),t.jsx("div",{style:K.dayTotal,children:je(x)})]}),t.jsxs("div",{style:K.iconGrid,children:[o.map(R=>t.jsxs("div",{style:K.iconCell,children:[t.jsx("button",{onClick:()=>Je(R),style:{...K.iconBtn,background:R.color+"1A",color:R.color,borderColor:R.color+"44"},children:t.jsx(En,{name:R.icon,size:22})}),t.jsx("span",{style:K.iconLabel,children:R.name})]},R.id)),t.jsxs("div",{style:K.iconCell,children:[t.jsx("button",{onClick:oe,style:K.iconBtnAdd,children:t.jsx(ot,{size:20})}),t.jsx("span",{style:K.iconLabel,children:"Add"})]})]}),t.jsxs("button",{onClick:()=>T(!0),style:K.manageLink,children:[t.jsx(yt,{size:11})," Customize categories"]}),Q.length>0&&t.jsx("div",{style:K.logList,children:Q.map(R=>{const me=pe[R.category_id];return t.jsxs("div",{style:K.logRow,children:[t.jsx("span",{style:{...K.logIcon,background:((me==null?void 0:me.color)||"#9A968C")+"1A",color:(me==null?void 0:me.color)||"#9A968C"},children:t.jsx(En,{name:me==null?void 0:me.icon,size:14})}),t.jsxs("button",{onClick:()=>Qe(R),style:K.logInfoBtn,title:"Edit this expense",children:[t.jsx("div",{style:K.logCat,children:(me==null?void 0:me.name)||"Deleted category"}),R.note&&t.jsx("div",{style:K.logNote,children:R.note})]}),t.jsx("span",{style:K.logAmt,children:je(R.amount)}),t.jsx("button",{onClick:()=>Qe(R),style:K.editBtn,title:"Edit",children:t.jsx(yt,{size:13})}),t.jsx("button",{onClick:()=>se(R.id,(me==null?void 0:me.name)||"Expense"),style:K.delBtn,children:t.jsx(De,{size:14})})]},R.id)})})]}),t.jsxs("div",{style:K.card,children:[t.jsx("div",{style:K.cardTitleRow,children:t.jsxs("div",{children:[t.jsx("div",{style:K.cardTitle,children:"Spending by category"}),t.jsxs("div",{style:K.cardSub,children:[y==="day"?"Today":y==="month"?"This month":y==="year"?"This year":"All time"," — percentage & amount"]})]})}),ae.length===0?t.jsx("div",{style:K.muted,children:"No expenses logged for this period yet."}):t.jsxs("div",{style:K.pieWrap,children:[t.jsxs("div",{style:K.pieChart,children:[t.jsx("div",{style:{...K.pieDisc,background:Ct}}),t.jsxs("div",{style:K.pieHole,children:[t.jsx("span",{style:K.pieHoleVal,children:je(H)}),t.jsx("span",{style:K.pieHoleLbl,children:"total"})]})]}),t.jsx("div",{style:K.pieLegend,children:vt.map(R=>t.jsxs("div",{style:K.legendRow,children:[t.jsx("span",{style:{...K.dot,background:R.cat.color}}),t.jsx(En,{name:R.cat.icon,size:13,style:{color:R.cat.color,flexShrink:0}}),t.jsx("span",{style:K.legendName,children:R.cat.name}),t.jsxs("span",{style:K.legendPct,children:[Math.round(R.pct),"%"]}),t.jsx("span",{style:K.legendAmt,children:je(R.amount)})]},R.cat.id))})]})]}),t.jsxs("div",{style:K.card,children:[t.jsx("div",{style:K.cardTitleRow,children:t.jsxs("div",{children:[t.jsx("div",{style:K.cardTitle,children:"Monthly trend"}),t.jsx("div",{style:K.cardSub,children:"Compare a month against the previous two"})]})}),t.jsx("div",{style:K.tagRow,children:G.map(R=>t.jsxs("button",{onClick:()=>S(R),style:{...K.tagChip,...D===R?K.tagChipOn:{}},children:[t.jsx(uc,{size:11})," ",P(R)]},R))}),t.jsxs("div",{style:{...K.tagRow,marginTop:8},children:[t.jsxs("button",{onClick:()=>N("all"),style:{...K.tagChip,...j==="all"?K.tagChipOn:{}},children:[t.jsx(uc,{size:11})," All categories"]}),o.map(R=>t.jsxs("button",{onClick:()=>N(String(R.id)),style:{...K.tagChip,...j===String(R.id)?K.tagChipOn:{}},children:[t.jsx(En,{name:R.icon,size:11})," ",R.name]},R.id))]}),t.jsxs("div",{style:{...K.trend3,marginTop:16},children:[t.jsxs("div",{style:K.trendCol,children:[t.jsx("div",{style:K.trendVal,children:je(ne)}),t.jsx("div",{style:K.trendLbl,children:P(We[0])})]}),t.jsxs("div",{style:K.trendCol,children:[t.jsx("div",{style:{...K.trendVal,color:"var(--text-2)"},children:je(L)}),t.jsx("div",{style:K.trendLbl,children:P(We[1])})]}),t.jsxs("div",{style:K.trendCol,children:[t.jsx("div",{style:{...K.trendVal,color:"var(--text-3)"},children:je(ie)}),t.jsx("div",{style:K.trendLbl,children:P(We[2])})]})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:t.jsxs("div",{style:{...K.trendBadge,color:v,background:v+"1A"},children:[t.jsx(A,{size:15})," ",he>0?"+":"",he,"% vs ",P(We[1])]})}),t.jsx(L1,{items:[{label:P(We[0]),value:ne,color:Hr},{label:P(We[1]),value:L,color:"var(--text-3)"},{label:P(We[2]),value:ie,color:"var(--text-3)"}],money:je}),t.jsx("div",{style:K.trendDivider}),t.jsxs("div",{style:K.cardSub,children:["Category split for ",P(D)]}),re.length===0?t.jsx("div",{style:K.muted,children:"No expenses logged for this month yet."}):t.jsxs("div",{style:{...K.pieWrap,marginTop:10},children:[t.jsxs("div",{style:K.pieChart,children:[t.jsx("div",{style:{...K.pieDisc,background:ye}}),t.jsxs("div",{style:K.pieHole,children:[t.jsx("span",{style:K.pieHoleVal,children:je(ne)}),t.jsx("span",{style:K.pieHoleLbl,children:"total"})]})]}),t.jsx("div",{style:K.pieLegend,children:le.map(R=>t.jsxs("div",{style:K.legendRow,children:[t.jsx("span",{style:{...K.dot,background:R.cat.color}}),t.jsx(En,{name:R.cat.icon,size:13,style:{color:R.cat.color,flexShrink:0}}),t.jsx("span",{style:K.legendName,children:R.cat.name}),t.jsxs("span",{style:K.legendPct,children:[Math.round(R.pct),"%"]}),t.jsx("span",{style:K.legendAmt,children:je(R.amount)})]},R.cat.id))})]})]})]})]}),I&&t.jsx("div",{style:K.overlay,onClick:()=>B(null),children:t.jsxs("div",{style:K.modal,onClick:R=>R.stopPropagation(),children:[t.jsxs("div",{style:K.modalHead,children:[t.jsxs("span",{style:{...K.modalTitle,display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{...K.iconBadge,background:I.cat.color+"1A",color:I.cat.color},children:t.jsx(En,{name:I.cat.icon,size:16})}),I.cat.name]}),t.jsx("button",{onClick:()=>B(null),style:K.iconBtnPlain,children:t.jsx(De,{size:16})})]}),t.jsx("label",{style:K.label,children:"Amount *"}),t.jsx("input",{autoFocus:!0,type:"number",inputMode:"decimal",value:I.amount,onChange:R=>B(me=>({...me,amount:R.target.value})),onKeyDown:R=>R.key==="Enter"&&mt(),placeholder:"0",style:K.input}),t.jsx("label",{style:K.label,children:"Note (optional)"}),t.jsx("input",{value:I.note,maxLength:Wo,onChange:R=>B(me=>({...me,note:R.target.value})),onKeyDown:R=>R.key==="Enter"&&mt(),placeholder:"What was it for?",style:K.input}),t.jsxs("div",{style:K.noteCount,children:[I.note.length,"/",Wo]}),t.jsxs("div",{style:K.modalActions,children:[t.jsx("button",{onClick:()=>B(null),style:K.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:mt,disabled:!I.amount,style:{...K.saveBtn,...I.amount?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," Add"]})]})]})}),k&&(pe[k.category_id],t.jsx("div",{style:K.overlay,onClick:()=>C(null),children:t.jsxs("div",{style:K.modal,onClick:R=>R.stopPropagation(),children:[t.jsxs("div",{style:K.modalHead,children:[t.jsx("span",{style:K.modalTitle,children:"Edit expense"}),t.jsx("button",{onClick:()=>C(null),style:K.iconBtnPlain,children:t.jsx(De,{size:16})})]}),t.jsx("label",{style:K.label,children:"Category"}),t.jsx("select",{value:k.category_id,onChange:R=>C(me=>({...me,category_id:Number(R.target.value)})),style:K.input,children:o.map(R=>t.jsx("option",{value:R.id,children:R.name},R.id))}),t.jsx("label",{style:K.label,children:"Amount *"}),t.jsx("input",{autoFocus:!0,type:"number",inputMode:"decimal",value:k.amount,onChange:R=>C(me=>({...me,amount:R.target.value})),onKeyDown:R=>R.key==="Enter"&&st(),placeholder:"0",style:K.input}),t.jsx("label",{style:K.label,children:"Date"}),t.jsx("input",{type:"date",value:k.date,onChange:R=>C(me=>({...me,date:R.target.value})),style:K.input}),t.jsx("label",{style:K.label,children:"Note (optional)"}),t.jsx("input",{value:k.note,maxLength:Wo,onChange:R=>C(me=>({...me,note:R.target.value})),onKeyDown:R=>R.key==="Enter"&&st(),placeholder:"What was it for?",style:K.input}),t.jsxs("div",{style:K.noteCount,children:[k.note.length,"/",Wo]}),t.jsxs("div",{style:K.modalActions,children:[t.jsx("button",{onClick:()=>C(null),style:K.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:st,disabled:!k.amount,style:{...K.saveBtn,...k.amount?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," Save"]})]})]})})),b&&t.jsx("div",{style:K.overlay,onClick:()=>T(!1),children:t.jsxs("div",{style:K.modal,onClick:R=>R.stopPropagation(),children:[t.jsxs("div",{style:K.modalHead,children:[t.jsx("span",{style:K.modalTitle,children:"Customize categories"}),t.jsx("button",{onClick:()=>T(!1),style:K.iconBtnPlain,children:t.jsx(De,{size:16})})]}),t.jsx("div",{style:K.manageHint,children:"Use the arrows to reorder how categories appear."}),t.jsx("div",{style:K.manageList,children:o.map((R,me)=>t.jsxs("div",{style:K.manageRow,children:[t.jsxs("div",{style:K.reorderCol,children:[t.jsx("button",{onClick:()=>ut(me,-1),disabled:me===0,style:{...K.reorderBtn,...me===0?K.reorderDisabled:{}},title:"Move up",children:t.jsx(ya,{size:13})}),t.jsx("button",{onClick:()=>ut(me,1),disabled:me===o.length-1,style:{...K.reorderBtn,...me===o.length-1?K.reorderDisabled:{}},title:"Move down",children:t.jsx(zo,{size:13})})]}),t.jsx("span",{style:{...K.iconBadge,background:R.color+"1A",color:R.color},children:t.jsx(En,{name:R.icon,size:15})}),t.jsx("span",{style:{flex:1,fontSize:13.5,fontWeight:600},children:R.name}),t.jsx("button",{onClick:()=>Me(R),style:K.delBtn,children:t.jsx(yt,{size:13})}),t.jsx("button",{onClick:()=>tt(R),style:K.delBtn,children:t.jsx(De,{size:14})})]},R.id))}),t.jsxs("button",{onClick:oe,style:K.addColInline,children:[t.jsx(ot,{size:13})," Add category"]})]})}),p&&t.jsx("div",{style:K.overlay,onClick:()=>c(null),children:t.jsxs("div",{style:K.modal,onClick:R=>R.stopPropagation(),children:[t.jsxs("div",{style:K.modalHead,children:[t.jsx("span",{style:K.modalTitle,children:p.id?"Edit category":"New category"}),t.jsx("button",{onClick:()=>c(null),style:K.iconBtnPlain,children:t.jsx(De,{size:16})})]}),t.jsx("label",{style:K.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:p.name,onChange:R=>c(me=>({...me,name:R.target.value})),onKeyDown:R=>R.key==="Enter"&&qe(),placeholder:"e.g. Vegetables, Petrol…",style:K.input}),t.jsx("label",{style:K.label,children:"Color"}),t.jsx("div",{style:K.colorRow,children:bd.map(R=>t.jsx("button",{onClick:()=>c(me=>({...me,color:R})),style:{...K.colorSwatch,background:R,...p.color===R?K.colorSwatchOn:{}}},R))}),t.jsx("label",{style:K.label,children:"Icon"}),t.jsx("div",{style:K.iconPickGrid,children:Object.keys(Dh).map(R=>t.jsx("button",{onClick:()=>c(me=>({...me,icon:R})),style:{...K.iconPick,...p.icon===R?{background:p.color+"22",borderColor:p.color,color:p.color}:{}},children:t.jsx(En,{name:R,size:17})},R))}),t.jsxs("div",{style:K.modalActions,children:[t.jsx("button",{onClick:()=>c(null),style:K.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:qe,disabled:!p.name.trim(),style:{...K.saveBtn,...p.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",p.id?"Save":"Create"]})]})]})}),!a&&t.jsx("div",{style:K.muted,children:"Loading…"}),t.jsx(mr,{toasts:W,onUndo:de,onDismiss:Re})]})}function L1({items:e,money:r}){const n=Math.max(1,...e.map(o=>o.value));return t.jsx("div",{style:K.tbWrap,children:e.map((o,i)=>t.jsxs("div",{style:K.tbRow,children:[t.jsx("div",{style:K.tbLbl,children:o.label}),t.jsx("div",{style:K.tbTrack,children:t.jsx("div",{style:{...K.tbBar,width:`${o.value/n*100}%`,background:o.color}})}),t.jsx("div",{style:K.tbVal,children:r(o.value)})]},i))})}const K={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},totalCard:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:14,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:16,padding:"16px 18px",marginBottom:16,flexWrap:"wrap"},totalLeft:{display:"flex",alignItems:"center",gap:12},totalLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600},totalVal:{fontSize:24,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2},scopeRow:{display:"flex",gap:6},scopeBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 13px",borderRadius:8,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},scopeBtnOn:{background:Hr,color:"#fff",borderColor:Hr},cols:{display:"grid",gap:16,alignItems:"start"},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},dayTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap",color:Hr},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},calNav:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,minmax(0,1fr))",gap:4},calDow:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",textAlign:"center",padding:"4px 0"},calCell:{position:"relative",border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:8,aspectRatio:"1",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},calCellOn:{background:Hr,color:"#fff",borderColor:Hr,fontWeight:700},calCellToday:{borderColor:Hr,fontWeight:700},calDot:{position:"absolute",bottom:3,width:4,height:4,borderRadius:"50%"},iconGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(64px, 1fr))",gap:10,marginTop:4},iconCell:{display:"flex",flexDirection:"column",alignItems:"center",gap:5},iconBtn:{width:52,height:52,borderRadius:14,border:"1px solid",display:"grid",placeItems:"center",cursor:"pointer"},iconBtnAdd:{width:52,height:52,borderRadius:14,border:"1px dashed var(--border)",background:"none",color:"var(--text-3)",display:"grid",placeItems:"center",cursor:"pointer"},iconLabel:{fontSize:10.5,fontWeight:600,color:"var(--text-2)",textAlign:"center",maxWidth:66,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},manageLink:{display:"inline-flex",alignItems:"center",gap:5,border:"none",background:"none",color:"var(--text-3)",fontSize:11.5,fontWeight:600,cursor:"pointer",marginTop:12,padding:0,fontFamily:"inherit"},logList:{marginTop:14,paddingTop:14,borderTop:"1px solid var(--border)",display:"flex",flexDirection:"column",gap:8},logRow:{display:"flex",alignItems:"center",gap:10,minWidth:0},logIcon:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},logInfoBtn:{flex:1,minWidth:0,border:"none",background:"none",padding:0,cursor:"pointer",textAlign:"left",fontFamily:"inherit",overflow:"hidden",color:"inherit"},logCat:{fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logNote:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logAmt:{fontSize:13.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap",flexShrink:0},editBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},noteCount:{fontSize:10.5,color:"var(--text-3)",textAlign:"right",marginTop:3},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:7},dot:{width:9,height:9,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},iconBadge:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:8},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},manageHint:{fontSize:11.5,color:"var(--text-3)",marginBottom:8},manageList:{display:"flex",flexDirection:"column",gap:6,marginBottom:10,maxHeight:320,overflowY:"auto"},manageRow:{display:"flex",alignItems:"center",gap:10,padding:"6px 2px"},reorderCol:{display:"flex",flexDirection:"column",gap:1,flexShrink:0},reorderBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:22,height:17,borderRadius:5,cursor:"pointer",display:"grid",placeItems:"center",padding:0},reorderDisabled:{opacity:.35,cursor:"not-allowed"},addColInline:{display:"inline-flex",alignItems:"center",gap:5,border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"9px 12px",borderRadius:8,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},colorRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:4},colorSwatch:{width:26,height:26,borderRadius:"50%",border:"2px solid transparent",cursor:"pointer",padding:0},colorSwatchOn:{border:"2px solid var(--text)",boxShadow:"0 0 0 2px var(--surface)"},iconPickGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:4},iconPick:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:9,height:36,display:"grid",placeItems:"center",cursor:"pointer"},tagRow:{display:"flex",gap:6,flexWrap:"wrap"},tagChip:{display:"inline-flex",alignItems:"center",gap:4,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:20,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tagChipOn:{background:Hr,color:"#fff",borderColor:Hr},trendDivider:{height:1,background:"var(--border)",margin:"16px 0 12px"},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:64,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},pn="#C9A227",go="#C2536B",ea="#4C9A6B";new Date().toISOString().slice(0,10);const _1=e=>e?new Date(e+"T00:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"—",md=e=>(Number(e)||0).toLocaleString(void 0,{maximumFractionDigits:2});function $1(e){const r=e.target||0,n=e.completed||0;return r<=0?{pct:0,negPct:0,negative:!1}:n<0?{pct:0,negPct:Math.min(100,Math.abs(n)/r*100),negative:!0}:{pct:Math.min(100,n/r*100),negPct:0,negative:!1}}const P1=()=>({id:null,name:"",completed:"",target:"",end_date:"",reward:"",reward_cost:"",comment:"",allow_negative:!1});function N1(){const e=eo(),r=c=>Ur(c,e.code),[n,o]=g.useState([]),[i,s]=g.useState(!1),[l,a]=g.useState(null),[d,u]=g.useState(null),m=g.useCallback(()=>{E.getChallenges().then(c=>{o(Array.isArray(c)?c:[]),s(!0)}).catch(()=>s(!0))},[]);g.useEffect(()=>{m()},[m]);const f=g.useMemo(()=>{const c=n.filter(T=>T.status==="done"),b=c.reduce((T,y)=>T+(y.reward_earned||0),0);return{total:n.length,done:c.length,active:n.filter(T=>T.status==="active").length,failed:n.filter(T=>T.status==="failed").length,earned:b}},[n]),h=()=>a(P1()),I=c=>a({id:c.id,name:c.name,completed:String(c.completed??""),target:String(c.target??""),end_date:c.end_date||"",reward:c.reward||"",reward_cost:String(c.reward_cost??""),comment:c.comment||"",allow_negative:!!c.allow_negative}),B=async()=>{const c=l.name.trim();if(!c)return;const b={name:c,completed:parseFloat(l.completed)||0,target:parseFloat(l.target)||0,end_date:l.end_date||null,reward:l.reward.trim(),reward_cost:parseFloat(l.reward_cost)||0,comment:l.comment.trim(),allow_negative:l.allow_negative};l.id?await E.updateChallenge(l.id,b):await E.createChallenge(b),a(null),m()},k=async c=>{window.confirm(`Delete challenge "${c.name}"?`)&&(await E.deleteChallenge(c.id),m())},C=c=>u({ch:c,amount:"",mode:"add"}),p=async()=>{const c=parseFloat(d.amount);if(isNaN(c))return;const b=d.mode==="set"?c:(d.ch.completed||0)+c;await E.updateChallenge(d.ch.id,{completed:b}),u(null),m()};return t.jsxs("div",{style:ze.page,children:[t.jsxs("div",{style:ze.head,children:[t.jsx("div",{style:ze.eyebrow,children:"Anvil · Challenges"}),t.jsx("h1",{style:ze.h1,children:"Challenges"}),t.jsx("div",{style:ze.subhead,children:"Small steps toward success — track each toward its target and bank the reward on completion."})]}),t.jsxs("div",{style:ze.statRow,children:[t.jsxs("div",{style:ze.statCard,children:[t.jsx("div",{style:ze.statVal,children:f.active}),t.jsx("div",{style:ze.statLbl,children:"Active"})]}),t.jsxs("div",{style:ze.statCard,children:[t.jsx("div",{style:{...ze.statVal,color:ea},children:f.done}),t.jsx("div",{style:ze.statLbl,children:"Completed"})]}),t.jsxs("div",{style:ze.statCard,children:[t.jsx("div",{style:{...ze.statVal,color:go},children:f.failed}),t.jsx("div",{style:ze.statLbl,children:"Missed"})]}),t.jsxs("div",{style:ze.statCard,children:[t.jsx("div",{style:{...ze.statVal,color:pn},children:r(f.earned)}),t.jsx("div",{style:ze.statLbl,children:"Reward earned"})]})]}),t.jsxs("button",{onClick:h,style:ze.addBtn,children:[t.jsx(ot,{size:16})," New challenge"]}),n.length===0?t.jsx("div",{style:ze.empty,children:i?"No challenges yet. Create your first small step toward success.":"Loading…"}):t.jsx("div",{style:ze.list,children:n.map((c,b)=>{const{pct:T,negPct:y,negative:w}=$1(c),D=w?go:c.status==="done"?ea:pn;return t.jsxs("div",{style:{...ze.card,...c.status==="failed"?ze.cardFailed:{}},children:[t.jsxs("div",{style:ze.cardTop,children:[t.jsxs("span",{style:ze.num,children:["#",b+1]}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:ze.name,children:c.name}),c.comment&&t.jsx("div",{style:ze.comment,children:c.comment})]}),t.jsx(O1,{status:c.status}),t.jsx("button",{onClick:()=>I(c),style:ze.iconBtn,title:"Edit",children:t.jsx(yt,{size:13})}),t.jsx("button",{onClick:()=>k(c),style:ze.iconBtn,title:"Delete",children:t.jsx(De,{size:14})})]}),t.jsxs("div",{style:ze.barWrap,children:[t.jsx("div",{style:ze.barTrack,children:w?t.jsx("div",{style:{...ze.barFill,width:`${y}%`,background:go,marginLeft:"auto"}}):t.jsx("div",{style:{...ze.barFill,width:`${T}%`,background:D}})}),t.jsxs("div",{style:ze.barMetaRow,children:[t.jsxs("span",{style:{...ze.completed,color:(c.completed||0)<0?go:"var(--text)"},children:[(c.completed||0)<0&&t.jsx(Yn,{size:12,style:{marginRight:3,verticalAlign:"-1px"}}),md(c.completed)]}),t.jsx("span",{style:ze.barPct,children:w?`-${Math.round(y)}%`:`${Math.round(T)}%`}),t.jsxs("span",{style:ze.target,children:["of ",md(c.target)]})]})]}),t.jsxs("div",{style:ze.chips,children:[t.jsxs("span",{style:ze.chip,children:[t.jsx(Py,{size:12})," Remaining ",md(c.remaining)]}),t.jsxs("span",{style:ze.chip,children:[t.jsx(zy,{size:12})," ",c.end_date?`Ends ${_1(c.end_date)}`:"No deadline"]}),c.reward&&t.jsxs("span",{style:ze.chip,children:[t.jsx(hs,{size:12})," ",c.reward]}),c.reward_cost>0&&t.jsxs("span",{style:{...ze.chip,...ze.chipReward},children:[t.jsx(qr,{size:12})," ",r(c.reward_cost),c.status==="done"?" earned":""]}),c.allow_negative&&t.jsx("span",{style:{...ze.chip,color:go,borderColor:go+"55"},children:"± negative allowed"})]}),t.jsx("div",{style:ze.actions,children:t.jsxs("button",{onClick:()=>C(c),style:ze.progressBtn,children:[t.jsx(ot,{size:13})," Update progress"]})})]},c.id)})}),l&&t.jsx("div",{style:ze.overlay,onClick:()=>a(null),children:t.jsxs("div",{style:ze.modal,onClick:c=>c.stopPropagation(),children:[t.jsxs("div",{style:ze.modalHead,children:[t.jsx("span",{style:ze.modalTitle,children:l.id?"Edit challenge":"New challenge"}),t.jsx("button",{onClick:()=>a(null),style:ze.iconBtnPlain,children:t.jsx(De,{size:16})})]}),t.jsx("label",{style:ze.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:l.name,onChange:c=>a(b=>({...b,name:c.target.value})),placeholder:"e.g. Earn ₹1,00,000 from trading",style:ze.input}),t.jsxs("div",{style:ze.grid2,children:[t.jsxs("div",{children:[t.jsx("label",{style:ze.label,children:"Completed"}),t.jsx("input",{type:"number",inputMode:"decimal",value:l.completed,onChange:c=>a(b=>({...b,completed:c.target.value})),placeholder:"0",style:ze.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:ze.label,children:"Target"}),t.jsx("input",{type:"number",inputMode:"decimal",value:l.target,onChange:c=>a(b=>({...b,target:c.target.value})),placeholder:"0",style:ze.input})]})]}),t.jsx("label",{style:ze.label,children:"End date (optional — past & incomplete marks it missed)"}),t.jsx("input",{type:"date",value:l.end_date,onChange:c=>a(b=>({...b,end_date:c.target.value})),style:ze.input}),t.jsxs("div",{style:ze.grid2,children:[t.jsxs("div",{children:[t.jsx("label",{style:ze.label,children:"Reward"}),t.jsx("input",{value:l.reward,onChange:c=>a(b=>({...b,reward:c.target.value})),placeholder:"e.g. New headphones",style:ze.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:ze.label,children:"Reward cost"}),t.jsx("input",{type:"number",inputMode:"decimal",value:l.reward_cost,onChange:c=>a(b=>({...b,reward_cost:c.target.value})),placeholder:"0",style:ze.input})]})]}),t.jsx("label",{style:ze.label,children:"Comment"}),t.jsx("input",{value:l.comment,onChange:c=>a(b=>({...b,comment:c.target.value})),placeholder:"Notes about this challenge",style:ze.input}),t.jsxs("label",{style:ze.toggleRow,children:[t.jsx("input",{type:"checkbox",checked:l.allow_negative,onChange:c=>a(b=>({...b,allow_negative:c.target.checked})),style:ze.checkbox}),t.jsxs("span",{children:[t.jsx("span",{style:ze.toggleLabel,children:"Allow negative progress"}),t.jsx("span",{style:ze.toggleHint,children:"Let progress drop below zero (e.g. a running trading loss shown in red)."})]})]}),t.jsxs("div",{style:ze.modalActions,children:[t.jsx("button",{onClick:()=>a(null),style:ze.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:B,disabled:!l.name.trim(),style:{...ze.saveBtn,...l.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",l.id?"Save":"Create"]})]})]})}),d&&t.jsx("div",{style:ze.overlay,onClick:()=>u(null),children:t.jsxs("div",{style:ze.modal,onClick:c=>c.stopPropagation(),children:[t.jsxs("div",{style:ze.modalHead,children:[t.jsxs("span",{style:ze.modalTitle,children:["Update · ",d.ch.name]}),t.jsx("button",{onClick:()=>u(null),style:ze.iconBtnPlain,children:t.jsx(De,{size:16})})]}),t.jsxs("div",{style:ze.progressCur,children:["Current: ",t.jsx("b",{children:r(d.ch.completed)})," of ",r(d.ch.target)]}),t.jsxs("div",{style:ze.modeRow,children:[t.jsx("button",{onClick:()=>u(c=>({...c,mode:"add"})),style:{...ze.modeBtn,...d.mode==="add"?ze.modeBtnOn:{}},children:"Add / subtract"}),t.jsx("button",{onClick:()=>u(c=>({...c,mode:"set"})),style:{...ze.modeBtn,...d.mode==="set"?ze.modeBtnOn:{}},children:"Set total"})]}),t.jsx("label",{style:ze.label,children:d.mode==="set"?"New completed total":"Amount to add (use a negative number to subtract)"}),t.jsx("input",{autoFocus:!0,type:"number",inputMode:"decimal",value:d.amount,onChange:c=>u(b=>({...b,amount:c.target.value})),onKeyDown:c=>c.key==="Enter"&&p(),placeholder:"0",style:ze.input}),!d.ch.allow_negative&&t.jsx("div",{style:ze.progressHint,children:"Negative totals are blocked for this challenge. Enable “Allow negative progress” to permit them."}),t.jsxs("div",{style:ze.modalActions,children:[t.jsx("button",{onClick:()=>u(null),style:ze.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:p,disabled:d.amount===""||isNaN(parseFloat(d.amount)),style:{...ze.saveBtn,...d.amount===""||isNaN(parseFloat(d.amount))?{opacity:.5,cursor:"not-allowed"}:{}},children:[t.jsx(He,{size:15})," Save"]})]})]})})]})}function O1({status:e}){const r={done:{label:"Completed",color:ea},failed:{label:"Missed",color:go},active:{label:"In progress",color:"#3A7CA5"}},n=r[e]||r.active;return t.jsx("span",{style:{...ze.badge,color:n.color,background:n.color+"1A",borderColor:n.color+"44"},children:n.label})}const ze={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:780,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},statRow:{display:"flex",gap:10,marginBottom:14,flexWrap:"wrap"},statCard:{flex:1,minWidth:120,background:"var(--surface)",borderRadius:12,padding:"12px 14px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},statVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},addBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"none",background:pn,color:"#fff",padding:"10px 16px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginBottom:16},empty:{fontSize:13.5,color:"var(--text-3)",textAlign:"center",padding:"40px 0",background:"var(--surface)",borderRadius:16,border:"1px dashed var(--border)"},list:{display:"flex",flexDirection:"column",gap:14},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardFailed:{opacity:.72},cardTop:{display:"flex",alignItems:"center",gap:10},num:{fontSize:12,fontWeight:800,color:"var(--text-3)",fontFamily:"'Fraunces',Georgia,serif",flexShrink:0},name:{fontSize:15.5,fontWeight:700,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},comment:{fontSize:12,color:"var(--text-3)",marginTop:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},badge:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:20,border:"1px solid",flexShrink:0,whiteSpace:"nowrap"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},barWrap:{marginTop:14},barTrack:{height:14,background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:8,overflow:"hidden",display:"flex"},barFill:{height:"100%",borderRadius:7,transition:"width 0.3s"},barMetaRow:{display:"flex",alignItems:"baseline",gap:8,marginTop:6},completed:{fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},barPct:{fontSize:12,fontWeight:700,color:"var(--text-2)"},target:{fontSize:12,color:"var(--text-3)",marginLeft:"auto"},chips:{display:"flex",gap:7,flexWrap:"wrap",marginTop:12},chip:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:600,color:"var(--text-2)",border:"1px solid var(--border)",borderRadius:20,padding:"4px 10px"},chipReward:{color:pn,borderColor:pn+"55",background:pn+"12"},actions:{marginTop:12},progressBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 14px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:460,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:4},grid2:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},toggleRow:{display:"flex",alignItems:"flex-start",gap:9,marginTop:14,cursor:"pointer"},checkbox:{width:17,height:17,marginTop:1,accentColor:pn,cursor:"pointer",flexShrink:0},toggleLabel:{display:"block",fontSize:13,fontWeight:700},toggleHint:{display:"block",fontSize:11.5,color:"var(--text-3)",marginTop:2},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:ea,color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},progressCur:{fontSize:13,color:"var(--text-2)",marginBottom:12},progressHint:{fontSize:11.5,color:"var(--text-3)",marginTop:6},modeRow:{display:"flex",gap:6,marginBottom:8},modeBtn:{flex:1,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 10px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modeBtnOn:{background:pn,color:"#fff",borderColor:pn}},Mi="#8268B0",qi="#4C9A6B",H1=e=>e?new Date(e+"T00:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"",G1=()=>({id:null,wish:"",cost:"",note:"",link:""});function U1(){const e=eo(),r=C=>Ur(C,e.code),[n,o]=g.useState([]),[i,s]=g.useState(!1),[l,a]=g.useState(null),d=g.useCallback(()=>{E.getBucket().then(C=>{o(Array.isArray(C)?C:[]),s(!0)}).catch(()=>s(!0))},[]);g.useEffect(()=>{d()},[d]);const u=g.useMemo(()=>{const C=n.filter(p=>!p.fulfilled);return{total:n.length,fulfilled:n.filter(p=>p.fulfilled).length,openCost:C.reduce((p,c)=>p+(c.cost||0),0)}},[n]),m=()=>a(G1()),f=C=>a({id:C.id,wish:C.wish,cost:String(C.cost??""),note:C.note||"",link:C.link||""}),h=async()=>{const C=l.wish.trim();if(!C)return;const p={wish:C,cost:parseFloat(l.cost)||0,note:l.note.trim(),link:l.link.trim()};l.id?await E.updateBucketWish(l.id,p):await E.createBucketWish(p),a(null),d()},I=async C=>{window.confirm(`Delete "${C.wish}" from your bucket list?`)&&(await E.deleteBucketWish(C.id),d())},B=async C=>{await E.updateBucketWish(C.id,{fulfilled:!C.fulfilled}),d()},k=async(C,p)=>{const c=C+p;if(c<0||c>=n.length)return;const b=[...n];[b[C],b[c]]=[b[c],b[C]],o(b),await E.arrangeBucket(b.map(T=>T.id)).catch(()=>{}),d()};return t.jsxs("div",{style:Ve.page,children:[t.jsxs("div",{style:Ve.head,children:[t.jsx("div",{style:Ve.eyebrow,children:"Anvil · Bucket List"}),t.jsx("h1",{style:Ve.h1,children:"Bucket List"}),t.jsx("div",{style:Ve.subhead,children:"The materialistic wishes you want to fulfil, big or small — ordered by what matters most."})]}),t.jsxs("div",{style:Ve.statRow,children:[t.jsxs("div",{style:Ve.statCard,children:[t.jsx("div",{style:Ve.statVal,children:u.total}),t.jsx("div",{style:Ve.statLbl,children:"Wishes"})]}),t.jsxs("div",{style:Ve.statCard,children:[t.jsx("div",{style:{...Ve.statVal,color:qi},children:u.fulfilled}),t.jsx("div",{style:Ve.statLbl,children:"Fulfilled"})]}),t.jsxs("div",{style:Ve.statCard,children:[t.jsx("div",{style:{...Ve.statVal,color:Mi},children:r(u.openCost)}),t.jsx("div",{style:Ve.statLbl,children:"Still wished"})]})]}),t.jsxs("button",{onClick:m,style:Ve.addBtn,children:[t.jsx(ot,{size:16})," New wish"]}),n.length===0?t.jsx("div",{style:Ve.empty,children:i?"No wishes yet. Add the first thing you'd love to have.":"Loading…"}):t.jsx("div",{style:Ve.list,children:n.map((C,p)=>t.jsxs("div",{style:{...Ve.card,...C.fulfilled?Ve.cardDone:{}},children:[t.jsxs("div",{style:Ve.reorderCol,children:[t.jsx("button",{onClick:()=>k(p,-1),disabled:p===0,style:{...Ve.reorderBtn,...p===0?Ve.reorderOff:{}},title:"Higher priority",children:t.jsx(ya,{size:14})}),t.jsx("span",{style:Ve.rank,children:p+1}),t.jsx("button",{onClick:()=>k(p,1),disabled:p===n.length-1,style:{...Ve.reorderBtn,...p===n.length-1?Ve.reorderOff:{}},title:"Lower priority",children:t.jsx(zo,{size:14})})]}),t.jsxs("div",{style:Ve.body,children:[t.jsxs("div",{style:Ve.topRow,children:[t.jsx("span",{style:{...Ve.wishName,...C.fulfilled?Ve.wishNameDone:{}},children:C.wish}),t.jsx("span",{style:Ve.cost,children:r(C.cost)})]}),C.note&&t.jsx("div",{style:Ve.note,children:C.note}),t.jsxs("div",{style:Ve.metaRow,children:[C.fulfilled&&t.jsxs("span",{style:Ve.doneBadge,children:[t.jsx(Cg,{size:11})," Fulfilled",C.fulfilled_date?` · ${H1(C.fulfilled_date)}`:""]}),C.link&&t.jsxs("a",{href:C.link,target:"_blank",rel:"noreferrer",style:Ve.link,children:[t.jsx(dc,{size:11})," Link"]})]})]}),t.jsxs("div",{style:Ve.actions,children:[t.jsxs("button",{onClick:()=>B(C),style:{...Ve.pill,...C.fulfilled?{}:{color:qi,borderColor:qi+"66"}},title:C.fulfilled?"Mark as not fulfilled":"Mark fulfilled",children:[t.jsx(He,{size:13})," ",C.fulfilled?"Undo":"Fulfilled"]}),t.jsx("button",{onClick:()=>f(C),style:Ve.iconBtn,title:"Edit",children:t.jsx(yt,{size:13})}),t.jsx("button",{onClick:()=>I(C),style:Ve.iconBtn,title:"Delete",children:t.jsx(De,{size:14})})]})]},C.id))}),t.jsx("div",{style:Ve.footNote,children:"Enable “Fulfil from bucket list” in the Rewards screen to spend your pending reward on these wishes."}),l&&t.jsx("div",{style:Ve.overlay,onClick:()=>a(null),children:t.jsxs("div",{style:Ve.modal,onClick:C=>C.stopPropagation(),children:[t.jsxs("div",{style:Ve.modalHead,children:[t.jsx("span",{style:Ve.modalTitle,children:l.id?"Edit wish":"New wish"}),t.jsx("button",{onClick:()=>a(null),style:Ve.iconBtnPlain,children:t.jsx(De,{size:16})})]}),t.jsx("label",{style:Ve.label,children:"Wish *"}),t.jsx("input",{autoFocus:!0,value:l.wish,onChange:C=>a(p=>({...p,wish:C.target.value})),placeholder:"e.g. PlayStation 5, trip to Japan",style:Ve.input}),t.jsx("label",{style:Ve.label,children:"Cost"}),t.jsx("input",{type:"number",inputMode:"decimal",value:l.cost,onChange:C=>a(p=>({...p,cost:C.target.value})),placeholder:"0",style:Ve.input}),t.jsx("label",{style:Ve.label,children:"Link (optional)"}),t.jsx("input",{value:l.link,onChange:C=>a(p=>({...p,link:C.target.value})),placeholder:"https://…",style:Ve.input}),t.jsx("label",{style:Ve.label,children:"Note (optional)"}),t.jsx("input",{value:l.note,onChange:C=>a(p=>({...p,note:C.target.value})),placeholder:"colour, model, why you want it…",style:Ve.input}),t.jsxs("div",{style:Ve.modalActions,children:[t.jsx("button",{onClick:()=>a(null),style:Ve.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:h,disabled:!l.wish.trim(),style:{...Ve.saveBtn,...l.wish.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",l.id?"Save":"Add wish"]})]})]})})]})}const Ve={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:720,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},statRow:{display:"flex",gap:10,marginBottom:14,flexWrap:"wrap"},statCard:{flex:1,minWidth:110,background:"var(--surface)",borderRadius:12,padding:"12px 14px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},statVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},addBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"none",background:Mi,color:"#fff",padding:"10px 16px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginBottom:16},empty:{fontSize:13.5,color:"var(--text-3)",textAlign:"center",padding:"40px 0",background:"var(--surface)",borderRadius:16,border:"1px dashed var(--border)"},list:{display:"flex",flexDirection:"column",gap:10},card:{display:"flex",gap:12,alignItems:"stretch",background:"var(--surface)",borderRadius:14,padding:"12px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardDone:{opacity:.7},reorderCol:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:2,flexShrink:0},reorderBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:24,height:20,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center",padding:0},reorderOff:{opacity:.3,cursor:"not-allowed"},rank:{fontSize:12,fontWeight:800,color:"var(--text-3)",fontFamily:"'Fraunces',Georgia,serif",padding:"1px 0"},body:{flex:1,minWidth:0},topRow:{display:"flex",justifyContent:"space-between",gap:10,alignItems:"baseline"},wishName:{fontSize:15,fontWeight:700,minWidth:0,wordBreak:"break-word"},wishNameDone:{textDecoration:"line-through",color:"var(--text-3)"},cost:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:Mi,flexShrink:0,whiteSpace:"nowrap"},note:{fontSize:12.5,color:"var(--text-3)",marginTop:3},metaRow:{display:"flex",gap:8,flexWrap:"wrap",marginTop:7,alignItems:"center"},doneBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11,fontWeight:700,color:qi,background:qi+"1A",borderRadius:20,padding:"3px 9px"},link:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:700,color:Mi,textDecoration:"none"},actions:{display:"flex",flexDirection:"column",gap:6,alignItems:"flex-end",justifyContent:"center",flexShrink:0},pill:{display:"inline-flex",alignItems:"center",gap:4,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 10px",borderRadius:8,fontSize:11.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",whiteSpace:"nowrap"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:26,height:26,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},footNote:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",marginTop:18,fontStyle:"italic"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:4},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:Mi,color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Xi="#3A7CA5",$t="#4C9A6B",Bt="#C2536B",ta=[{id:"swing",label:"Swing",color:"#8268B0"},{id:"fno",label:"FnO",color:"#C9772E"},{id:"intraday",label:"Intraday",color:"#3A7CA5"}],ll=e=>ta.find(r=>r.id===e)||ta[0],V1=new Set(["fno","intraday"]),_p=e=>V1.has(e),Mh=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,al=Mh(new Date),Y1=e=>new Date(e+"T00:00").toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"}),$p=e=>e?new Date(e+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"—",or=e=>e===""||e===null||e===void 0||isNaN(parseFloat(e))?0:parseFloat(e),hd=(e,r)=>{const n=or(e.qty);return r==="profit"?Math.abs(or(e.tgt_price)-or(e.entry_price))*n:-Math.abs(or(e.sl_price)-or(e.entry_price))*n};function K1(e,r,n,o){const i=or(e.entry_price),s=or(e.sl_price),l=or(e.tgt_price),a=or(e.qty),d=e.direction==="short";if(!e.instrument.trim())return"Enter the instrument.";if(i<=0||s<=0||l<=0||a<=0)return"Entry, SL, target and quantity must all be greater than zero.";if(d){if(s<=i)return"For a short, stop loss must be greater than the entry price (CMP).";if(l>=i)return"For a short, target must be less than the entry price (CMP)."}else{if(s>=i)return"Stop loss must be less than the entry price (CMP).";if(l<=i)return"Target must be greater than the entry price (CMP)."}const u=Math.abs(i-s),m=Math.abs(l-i),f=r.capital||0;if(r.rr>0&&m<r.rr*u-1e-9){const I=d?i-r.rr*u:i+r.rr*u;return`Risk:reward must be ≥ 1:${r.rr}. Target must be ${d?"at most":"at least"} ${I.toLocaleString()}.`}if(r.risk_pct>0&&f>0){const I=f*r.risk_pct/100,B=u*a;if(B>I+1e-9)return`This risks ${o(B)} — over your ${r.risk_pct}% limit of ${o(I)}. Reduce qty or tighten SL.`}const h=(r.diversification||{})[e.kind]||0;if(h>0){if(f>0){const I=f/h,B=i*a;if(B>I+1e-9)return`Position value ${o(B)} exceeds the diversification cap ${o(I)} (capital ÷ ${h}).`}if(n>=h)return`You already hold ${n} open ${e.kind} trade(s); diversification allows ${h}.`}return""}function Q1(e=760){const[r,n]=g.useState(()=>window.innerWidth<e);return g.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const q1=e=>({id:null,kind:"swing",direction:"long",instrument:"",purchase_date:e,entry_price:"",sl_price:"",tgt_price:"",qty:"",note:""});function X1(){const e=Q1(),r=eo(),n=A=>vs(A,r.code),[o,i]=g.useState([]),[s,l]=g.useState({}),[a,d]=g.useState(0),[u,m]=g.useState(0),[f,h]=g.useState(0),[I,B]=g.useState({capital:0,risk_pct:0,rr:0,diversification:{swing:0,fno:0,intraday:0}}),[k,C]=g.useState(!1),[p,c]=g.useState(al),[b,T]=g.useState(()=>{const A=new Date;return new Date(A.getFullYear(),A.getMonth(),1)}),[y,w]=g.useState(null),[D,S]=g.useState(null),[j,N]=g.useState(""),J=g.useCallback(()=>{E.getTrades().then(A=>{i(A.entries),l(A.learnings||{}),d(A.capital||0),m(A.net_pl||0),h(A.current||0),A.rules&&B(A.rules),C(!0)}).catch(()=>C(!0))},[]);g.useEffect(()=>{J()},[J]),g.useEffect(()=>{N(s[p]||"")},[p,s]);const se=g.useMemo(()=>o.filter(A=>A.status==="open"),[o]),W=g.useMemo(()=>o.filter(A=>A.status!=="open"),[o]),de=g.useMemo(()=>{if(!y)return"";const A=se.filter(v=>v.kind===y.kind&&v.id!==y.id).length;return K1(y,I,A,n)},[y,I,se,r.code]),Re=g.useMemo(()=>{const A={};return W.forEach(v=>{A[v.date]=(A[v.date]||0)+(Number(v.pl)||0)}),A},[W]),pe=W.filter(A=>A.date===p),je=Re[p]||0,Q=je>0?"positive":je<0?"negative":"neutral",x=g.useMemo(()=>{const A=b,v=(A.getDay()+6)%7,re=new Date(A.getFullYear(),A.getMonth()+1,0).getDate(),F=[];for(let le=0;le<v;le++)F.push(null);for(let le=1;le<=re;le++){const ye=Mh(new Date(A.getFullYear(),A.getMonth(),le)),ke=Re[ye],Ne=!!s[ye];F.push({date:ye,day:le,pl:ke,hasLearning:Ne,has:ke!==void 0||Ne})}return F},[b,Re,s]),Y=A=>T(v=>new Date(v.getFullYear(),v.getMonth()+A,1)),H=b.toLocaleDateString("en-US",{month:"long",year:"numeric"}),ae=(A="swing")=>w({...q1(p),kind:A}),V=A=>w({id:A.id,kind:A.kind,direction:A.direction||"long",instrument:A.instrument,purchase_date:A.purchase_date||A.date,entry_price:A.entry_price??"",sl_price:A.sl_price??"",tgt_price:A.tgt_price??"",qty:A.qty??"",note:A.note||""}),G=A=>w(v=>({...v,kind:A,direction:_p(A)?v.direction:"long"})),P=async()=>{if(de)return;const A={kind:y.kind,direction:y.direction,instrument:y.instrument.trim(),purchase_date:y.purchase_date,entry_price:or(y.entry_price),sl_price:or(y.sl_price),tgt_price:or(y.tgt_price),qty:or(y.qty),note:y.note.trim()};try{y.id?await E.updateTradeEntry(y.id,A):await E.createTradeEntry(A),w(null),J()}catch(v){window.alert(v.message||"Could not save this trade.")}},ge=async A=>{window.confirm("Delete this trade?")&&(await E.deleteTradeEntry(A.id),J())},ce=(A,v)=>S({trade:A,outcome:v,date:A.kind==="intraday"&&A.purchase_date||al}),We=async()=>{try{await E.bookTradeEntry(D.trade.id,D.outcome,D.date),S(null),J()}catch(A){window.alert(A.message||"Could not book this trade.")}},X=async A=>{await E.reopenTradeEntry(A.id),J()},ne=async()=>{await E.setTradeLearning(p,j),J()},L=(s[p]||"")!==j,ie=f>=a,he=u>0?$t:u<0?Bt:"var(--text)";return t.jsxs("div",{style:q.page,children:[t.jsx("div",{style:q.head,children:t.jsxs("div",{children:[t.jsx("div",{style:q.eyebrow,children:"Anvil · Trading Journal"}),t.jsx("h1",{style:q.h1,children:"Trading Journal"}),t.jsx("div",{style:q.subhead,children:"Open trades with your entry, SL & target — book profit/loss and P/L is calculated for you."})]})}),t.jsxs("div",{style:q.capStrip,children:[t.jsxs("div",{style:q.capBox,children:[t.jsxs("div",{style:q.capLabel,children:[t.jsx(ka,{size:13})," Starting capital"]}),t.jsx("div",{style:q.capVal,children:n(a)}),t.jsx("div",{style:q.capHint,children:"Set in Settings → Trading"})]}),t.jsxs("div",{style:q.capBox,children:[t.jsxs("div",{style:q.capLabel,children:[t.jsx(ih,{size:13})," Net P/L (booked)"]}),t.jsxs("div",{style:{...q.capVal,color:he},children:[u>=0?"+":"",n(u)]}),t.jsxs("div",{style:q.capHint,children:[W.length," booked · ",se.length," open"]})]}),t.jsxs("div",{style:{...q.capBox,...q.capBoxMain,borderColor:ie?$t:Bt},children:[t.jsxs("div",{style:q.capLabel,children:[ie?t.jsx(ni,{size:13,color:$t}):t.jsx(Yn,{size:13,color:Bt})," Current balance"]}),t.jsx("div",{style:{...q.capValBig,color:ie?$t:Bt},children:n(f)}),t.jsx("div",{style:q.capHint,children:ie?"Above starting capital":"Below starting capital"})]})]}),t.jsxs("div",{style:q.card,children:[t.jsxs("div",{style:q.cardTitleRow,children:[t.jsxs("div",{children:[t.jsxs("div",{style:q.cardTitle,children:[t.jsx(sh,{size:15,color:Xi})," Open trades"]}),t.jsx("div",{style:q.cardSub,children:"Positions you haven't booked yet — mark profit or loss when you exit."})]}),t.jsx("div",{style:q.addRow,children:ta.map(A=>t.jsxs("button",{onClick:()=>ae(A.id),style:{...q.addKindBtn,color:A.color,borderColor:A.color+"55",background:A.color+"12"},children:[t.jsx(ot,{size:14})," ",A.label]},A.id))})]}),se.length>0?t.jsx("div",{style:q.openScroll,children:se.map(A=>{const v=ll(A.kind);return t.jsxs("div",{style:q.openRow,children:[t.jsx("span",{style:{...q.kindTag,background:v.color+"1A",color:v.color},children:v.label}),t.jsxs("div",{style:q.openBody,children:[t.jsxs("div",{style:q.openTop,children:[t.jsxs("span",{style:q.tradeInstr,children:[A.instrument||"—",t.jsx(Pp,{direction:A.direction})]}),t.jsx("span",{style:q.openQty,children:A.qty?`${A.qty} qty`:""})]}),t.jsxs("div",{style:q.openMeta,children:[t.jsxs("span",{style:q.metaPill,children:["Bought ",$p(A.purchase_date)]}),A.entry_price?t.jsxs("span",{style:q.metaPill,children:["Entry ",A.entry_price]}):null,A.sl_price?t.jsxs("span",{style:{...q.metaPill,color:Bt},children:["SL ",A.sl_price]}):null,A.tgt_price?t.jsxs("span",{style:{...q.metaPill,color:$t},children:["TGT ",A.tgt_price]}):null]})]}),t.jsxs("div",{style:q.bookBtns,children:[t.jsxs("button",{onClick:()=>ce(A,"profit"),style:{...q.bookBtn,background:$t},children:[t.jsx(ni,{size:13})," Profit"]}),t.jsxs("button",{onClick:()=>ce(A,"loss"),style:{...q.bookBtn,background:Bt},children:[t.jsx(Yn,{size:13})," Loss"]}),t.jsx("button",{onClick:()=>V(A),style:q.iconGhost,title:"Edit",children:t.jsx(yt,{size:13})}),t.jsx("button",{onClick:()=>ge(A),style:q.iconGhost,title:"Delete",children:t.jsx(ys,{size:13})})]})]},A.id)})}):t.jsx("div",{style:q.noTrades,children:k?"No open trades. Add one with the buttons above.":"Loading…"})]}),t.jsxs("div",{style:{...q.cols,gridTemplateColumns:e?"1fr":"320px 1fr"},children:[t.jsxs("div",{style:q.card,children:[t.jsxs("div",{style:q.calHead,children:[t.jsx("button",{onClick:()=>Y(-1),style:q.calNav,children:t.jsx(Tn,{size:16})}),t.jsx("span",{style:q.calTitle,children:H}),t.jsx("button",{onClick:()=>Y(1),style:q.calNav,children:t.jsx(sn,{size:16})})]}),t.jsxs("div",{style:q.calGrid,children:[["M","T","W","T","F","S","S"].map((A,v)=>t.jsx("div",{style:q.calDow,children:A},v)),x.map((A,v)=>A===null?t.jsx("div",{},v):t.jsxs("button",{onClick:()=>c(A.date),style:{...q.calCell,...A.date===p?q.calCellOn:{},...A.date===al&&A.date!==p?q.calCellToday:{}},children:[t.jsx("span",{children:A.day}),A.pl!==void 0&&A.pl!==0&&t.jsx("span",{style:{...q.calDot,background:A.date===p?"#fff":A.pl>0?$t:Bt}}),A.pl===void 0&&A.hasLearning&&t.jsx("span",{style:{...q.calDot,background:A.date===p?"#fff":"var(--text-3)"}})]},A.date))]}),t.jsxs("div",{style:q.calLegend,children:[t.jsxs("span",{children:[t.jsx("span",{style:{...q.legDot,background:$t}})," Profit"]}),t.jsxs("span",{children:[t.jsx("span",{style:{...q.legDot,background:Bt}})," Loss"]}),t.jsxs("span",{children:[t.jsx("span",{style:{...q.legDot,background:"var(--text-3)"}})," Learning only"]})]})]}),t.jsxs("div",{children:[t.jsxs("div",{style:q.card,children:[t.jsxs("div",{style:q.cardTitleRow,children:[t.jsxs("div",{children:[t.jsx("div",{style:q.cardTitle,children:Y1(p)}),t.jsxs("div",{style:q.cardSub,children:[pe.length," booked trade",pe.length===1?"":"s"," this day"]})]}),t.jsxs("div",{style:q.dayPLWrap,children:[t.jsx("span",{style:{...q.sentiment,...Q==="positive"?{background:$t+"1A",color:$t}:Q==="negative"?{background:Bt+"1A",color:Bt}:{background:"var(--hover)",color:"var(--text-3)"}},children:Q==="positive"?"Positive day":Q==="negative"?"Negative day":"No trades"}),t.jsxs("span",{style:{...q.dayPL,color:je>0?$t:je<0?Bt:"var(--text-2)"},children:[je>=0?"+":"",n(je)]})]})]}),pe.length>0?t.jsx("div",{style:q.tradeList,children:pe.map(A=>{const v=ll(A.kind),re=(Number(A.pl)||0)>=0;return t.jsxs("div",{style:q.tradeRow,children:[t.jsx("span",{style:{...q.kindTag,background:v.color+"1A",color:v.color},children:v.label}),t.jsxs("div",{style:q.tradeBody,children:[t.jsxs("div",{style:q.tradeTop,children:[t.jsxs("span",{style:q.tradeInstr,children:[A.instrument||"—",t.jsx(Pp,{direction:A.direction})]}),t.jsxs("span",{style:{...q.tradePL,color:re?$t:Bt},children:[re?"+":"",n(Number(A.pl)||0)]})]}),t.jsxs("div",{style:q.tradeMeta,children:[A.entry_price?t.jsxs("span",{style:q.metaPill,children:["Entry ",A.entry_price]}):null,A.sl_price?t.jsxs("span",{style:q.metaPill,children:["SL ",A.sl_price]}):null,A.tgt_price?t.jsxs("span",{style:q.metaPill,children:["TGT ",A.tgt_price]}):null,A.qty?t.jsxs("span",{style:q.metaPill,children:[A.qty," qty"]}):null,A.purchase_date&&A.purchase_date!==A.date&&t.jsxs("span",{style:q.metaPill,children:["Bought ",$p(A.purchase_date)]}),A.note&&t.jsx("span",{style:q.tradeNote,children:A.note})]})]}),t.jsx("button",{onClick:()=>X(A),style:q.iconGhost,title:"Reopen",children:t.jsx(yh,{size:13})}),t.jsx("button",{onClick:()=>ge(A),style:q.iconGhost,title:"Delete",children:t.jsx(ys,{size:13})})]},A.id)})}):t.jsx("div",{style:q.noTrades,children:"No trades booked on this day — you can still record a learning below."})]}),t.jsxs("div",{style:q.card,children:[t.jsxs("div",{style:q.cardTitle,children:[t.jsx(xa,{size:15,color:Xi})," Daily learning"]}),t.jsx("textarea",{value:j,onChange:A=>N(A.target.value),placeholder:"What did you learn today? Mistakes, what worked, discipline notes…",style:q.learnArea}),t.jsxs("button",{onClick:ne,disabled:!L,style:{...q.saveBtn,...L?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:14})," Save learning"]})]})]})]}),y&&(()=>{const A=ll(y.kind),v=y.direction==="short",re=v?Bt:$t,F=hd(y,"profit"),le=hd(y,"loss");return t.jsx("div",{style:q.overlay,onClick:()=>w(null),children:t.jsxs("div",{style:q.sheet,onClick:ye=>ye.stopPropagation(),children:[t.jsxs("div",{style:{...q.sheetHead,background:`linear-gradient(135deg, ${A.color}, ${re})`},children:[t.jsxs("div",{style:q.sheetHeadRow,children:[t.jsx("span",{style:q.sheetKicker,children:y.id?"Edit position":"New position"}),t.jsx("button",{onClick:()=>w(null),style:q.sheetClose,children:t.jsx(De,{size:16})})]}),t.jsx("div",{style:q.sheetTitle,children:y.instrument||"Open trade"}),t.jsxs("div",{style:q.sheetChips,children:[t.jsx("span",{style:q.sheetChip,children:A.label}),t.jsx("span",{style:q.sheetChip,children:v?"Short ▼":"Long ▲"}),or(y.qty)>0&&t.jsxs("span",{style:q.sheetChip,children:[or(y.qty)," qty"]})]})]}),t.jsxs("div",{style:q.sheetBody,children:[t.jsx("label",{style:q.fLabel,children:"Type"}),t.jsx("div",{style:q.seg,children:ta.map(ye=>t.jsx("button",{type:"button",onClick:()=>G(ye.id),style:{...q.segBtn,...y.kind===ye.id?{...q.segBtnOn,background:ye.color}:{}},children:ye.label},ye.id))}),_p(y.kind)&&t.jsxs(t.Fragment,{children:[t.jsx("label",{style:q.fLabel,children:"Direction"}),t.jsxs("div",{style:q.seg,children:[t.jsxs("button",{type:"button",onClick:()=>w(ye=>({...ye,direction:"long"})),style:{...q.segBtn,...v?{}:{...q.segBtnOn,background:$t}},children:[t.jsx(ni,{size:14})," Long"]}),t.jsxs("button",{type:"button",onClick:()=>w(ye=>({...ye,direction:"short"})),style:{...q.segBtn,...v?{...q.segBtnOn,background:Bt}:{}},children:[t.jsx(Yn,{size:14})," Short"]})]}),t.jsx("div",{style:q.dirHint,children:v?"Short — profit when price falls. SL sits above CMP, target below.":"Long — profit when price rises. SL sits below CMP, target above."})]}),t.jsx("label",{style:q.fLabel,children:"Instrument"}),t.jsx("input",{autoFocus:!0,value:y.instrument,onChange:ye=>w(ke=>({...ke,instrument:ye.target.value.toUpperCase()})),placeholder:"e.g. NIFTY 22000 CE, RELIANCE",style:{...q.field,textTransform:"uppercase"}}),t.jsxs("div",{style:q.grid2,children:[t.jsxs("div",{children:[t.jsx("label",{style:q.fLabel,children:"Entry (CMP)"}),t.jsx("input",{type:"number",inputMode:"decimal",value:y.entry_price,onChange:ye=>w(ke=>({...ke,entry_price:ye.target.value})),placeholder:"0",style:q.field})]}),t.jsxs("div",{children:[t.jsx("label",{style:q.fLabel,children:"Quantity"}),t.jsx("input",{type:"number",inputMode:"decimal",value:y.qty,onChange:ye=>w(ke=>({...ke,qty:ye.target.value})),placeholder:"0",style:q.field})]})]}),t.jsxs("div",{style:q.grid2,children:[t.jsxs("div",{children:[t.jsxs("label",{style:{...q.fLabel,color:Bt},children:["Stop loss",v?" (above)":" (below)"]}),t.jsx("input",{type:"number",inputMode:"decimal",value:y.sl_price,onChange:ye=>w(ke=>({...ke,sl_price:ye.target.value})),placeholder:"0",style:{...q.field,borderColor:Bt+"55"}})]}),t.jsxs("div",{children:[t.jsxs("label",{style:{...q.fLabel,color:$t},children:["Target",v?" (below)":" (above)"]}),t.jsx("input",{type:"number",inputMode:"decimal",value:y.tgt_price,onChange:ye=>w(ke=>({...ke,tgt_price:ye.target.value})),placeholder:"0",style:{...q.field,borderColor:$t+"55"}})]})]}),t.jsxs("div",{style:q.preview2,children:[t.jsxs("div",{style:{...q.previewCell,background:$t+"12"},children:[t.jsx("span",{style:q.previewLbl,children:"If target hit"}),t.jsxs("span",{style:{...q.previewVal,color:$t},children:["+",n(F)]})]}),t.jsxs("div",{style:{...q.previewCell,background:Bt+"12"},children:[t.jsx("span",{style:q.previewLbl,children:"If SL hit"}),t.jsx("span",{style:{...q.previewVal,color:Bt},children:n(le)})]})]}),t.jsx("label",{style:q.fLabel,children:"Purchase date"}),t.jsx("input",{type:"date",value:y.purchase_date,onChange:ye=>w(ke=>({...ke,purchase_date:ye.target.value})),style:q.field}),t.jsx("label",{style:q.fLabel,children:"Note (optional)"}),t.jsx("input",{value:y.note,onChange:ye=>w(ke=>({...ke,note:ye.target.value})),placeholder:"reason, setup, emotion…",style:q.field}),de?t.jsx("div",{style:q.errBanner,children:de}):t.jsx(Z1,{rules:I,kind:y.kind,money:n})]}),t.jsxs("div",{style:q.sheetFoot,children:[t.jsx("button",{onClick:()=>w(null),style:q.ghostBtn,children:"Cancel"}),t.jsxs("button",{onClick:P,disabled:!!de,style:{...q.primaryBtn,background:re,...de?{opacity:.45,cursor:"not-allowed"}:{}},children:[t.jsx(He,{size:16})," ",y.id?"Save changes":"Open trade"]})]})]})})})(),D&&(()=>{const A=D.outcome==="profit",v=A?$t:Bt,re=D.trade,F=(re.direction||"long")==="short",le=ll(re.kind),ye=A?F?`(Entry ${re.entry_price||0} − TGT ${re.tgt_price||0}) × ${re.qty||0}`:`(TGT ${re.tgt_price||0} − Entry ${re.entry_price||0}) × ${re.qty||0}`:F?`(SL ${re.sl_price||0} − Entry ${re.entry_price||0}) × ${re.qty||0}`:`(Entry ${re.entry_price||0} − SL ${re.sl_price||0}) × ${re.qty||0}`;return t.jsx("div",{style:q.overlay,onClick:()=>S(null),children:t.jsxs("div",{style:q.sheet,onClick:ke=>ke.stopPropagation(),children:[t.jsxs("div",{style:{...q.sheetHead,background:`linear-gradient(135deg, ${v}, ${v}CC)`},children:[t.jsxs("div",{style:q.sheetHeadRow,children:[t.jsx("span",{style:q.sheetKicker,children:A?"Book profit":"Book loss"}),t.jsx("button",{onClick:()=>S(null),style:q.sheetClose,children:t.jsx(De,{size:16})})]}),t.jsx("div",{style:q.sheetTitle,children:re.instrument||"—"}),t.jsxs("div",{style:q.sheetChips,children:[t.jsx("span",{style:q.sheetChip,children:le.label}),t.jsx("span",{style:q.sheetChip,children:F?"Short":"Long"})]})]}),t.jsxs("div",{style:q.sheetBody,children:[t.jsxs("div",{style:q.bookHero,children:[t.jsx("span",{style:q.bookHeroLbl,children:A?"Realized profit":"Realized loss"}),t.jsxs("span",{style:{...q.bookHeroVal,color:v},children:[A?"+":"",n(hd(re,D.outcome))]}),t.jsx("span",{style:q.bookHeroMeta,children:ye})]}),re.kind==="intraday"?t.jsxs(t.Fragment,{children:[t.jsx("label",{style:q.fLabel,children:"Outcome date · locked to purchase day"}),t.jsx("input",{type:"date",value:D.date,min:re.purchase_date,max:re.purchase_date,disabled:!0,style:{...q.field,opacity:.7,cursor:"not-allowed"}}),t.jsx("div",{style:q.dirHint,children:"Intraday trades are squared off the same day they're bought."})]}):t.jsxs(t.Fragment,{children:[t.jsx("label",{style:q.fLabel,children:"Outcome date · colours this day"}),t.jsx("input",{type:"date",value:D.date,onChange:ke=>S(Ne=>({...Ne,date:ke.target.value})),style:q.field})]})]}),t.jsxs("div",{style:q.sheetFoot,children:[t.jsx("button",{onClick:()=>S(null),style:q.ghostBtn,children:"Cancel"}),t.jsxs("button",{onClick:We,disabled:!D.date,style:{...q.primaryBtn,background:v,...D.date?{}:{opacity:.45,cursor:"not-allowed"}},children:[t.jsx(He,{size:16})," Book ",D.outcome]})]})]})})})()]})}function Pp({direction:e}){return(e||"long")!=="short"?null:t.jsxs("span",{style:q.dirBadge,children:[t.jsx(Yn,{size:10})," SHORT"]})}function Z1({rules:e,kind:r,money:n}){const o=[],i=e.capital||0;e.rr>0&&o.push(`Min risk:reward 1:${e.rr}`),e.risk_pct>0&&i>0&&o.push(`Max risk ${n(i*e.risk_pct/100)} (${e.risk_pct}%)`);const s=(e.diversification||{})[r]||0;return s>0&&(i>0&&o.push(`Max position ${n(i/s)}`),o.push(`Max ${s} open ${r}`)),o.length?t.jsxs("div",{style:q.rulesHint,children:["Rules · ",o.join(" · ")]}):null}const q={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:1100,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},capStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:12,marginBottom:18},capBox:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:"13px 16px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},capBoxMain:{borderWidth:2},capLabel:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,fontWeight:600,color:"var(--text-2)"},capVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.1},capValBig:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.1},capHint:{fontSize:10.5,color:"var(--text-3)",marginTop:4},cols:{display:"grid",gap:16,alignItems:"start"},card:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{width:30,height:30,borderRadius:8,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:4},calDow:{fontSize:10,fontWeight:700,color:"var(--text-3)",textAlign:"center",padding:"2px 0"},calCell:{position:"relative",aspectRatio:"1",border:"1px solid transparent",borderRadius:8,background:"var(--bg)",color:"var(--text-2)",fontSize:12.5,fontWeight:600,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},calCellOn:{background:Xi,color:"#fff"},calCellToday:{borderColor:Xi},calDot:{position:"absolute",bottom:4,width:5,height:5,borderRadius:"50%"},calLegend:{display:"flex",gap:12,flexWrap:"wrap",marginTop:12,fontSize:10.5,color:"var(--text-3)",fontWeight:600},legDot:{display:"inline-block",width:7,height:7,borderRadius:"50%",marginRight:4},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:10,marginBottom:12,flexWrap:"wrap"},cardTitle:{display:"flex",alignItems:"center",gap:6,fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:12,color:"var(--text-3)",marginTop:2},dayPLWrap:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:4},sentiment:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:10},dayPL:{fontSize:17,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},addRow:{display:"flex",gap:8,flexWrap:"wrap"},addKindBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid",borderRadius:9,padding:"7px 12px",fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},openScroll:{display:"flex",flexDirection:"column",gap:8,maxHeight:320,overflowY:"auto",paddingRight:2},openRow:{display:"flex",alignItems:"flex-start",gap:9,padding:"10px 11px",background:"var(--bg)",border:"1px solid var(--border)",borderRadius:10,flexWrap:"wrap"},openBody:{flex:1,minWidth:140},openTop:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"baseline"},openQty:{fontSize:11.5,fontWeight:700,color:"var(--text-3)",flexShrink:0},openMeta:{display:"flex",gap:6,flexWrap:"wrap",marginTop:5,alignItems:"center"},bookBtns:{display:"flex",gap:6,alignItems:"center",flexShrink:0},bookBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",color:"#fff",padding:"6px 11px",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},tradeList:{display:"flex",flexDirection:"column",gap:8},tradeRow:{display:"flex",alignItems:"flex-start",gap:9,padding:"9px 10px",background:"var(--bg)",border:"1px solid var(--border)",borderRadius:10},kindTag:{fontSize:10.5,fontWeight:800,padding:"3px 8px",borderRadius:7,flexShrink:0,marginTop:1},tradeBody:{flex:1,minWidth:0},tradeTop:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"baseline"},tradeInstr:{fontSize:13.5,fontWeight:700,wordBreak:"break-word"},tradePL:{fontSize:13.5,fontWeight:800,flexShrink:0},tradeMeta:{display:"flex",gap:6,flexWrap:"wrap",marginTop:5,alignItems:"center"},metaPill:{fontSize:10.5,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",borderRadius:6,padding:"2px 7px"},tradeNote:{fontSize:11.5,color:"var(--text-3)",fontStyle:"italic"},iconGhost:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",flexShrink:0},noTrades:{fontSize:12.5,color:"var(--text-3)",fontStyle:"italic",textAlign:"center",padding:"16px 8px",border:"1px dashed var(--border)",borderRadius:8},learnArea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"11px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--bg)",outline:"none",minHeight:90,resize:"vertical",lineHeight:1.55,marginTop:8},saveBtn:{display:"inline-flex",alignItems:"center",gap:6,marginTop:10,border:"none",background:Xi,color:"#fff",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},dirBadge:{display:"inline-flex",alignItems:"center",gap:2,fontSize:9.5,fontWeight:800,letterSpacing:"0.03em",color:Bt,background:Bt+"1A",borderRadius:5,padding:"1px 5px",marginLeft:6,verticalAlign:"middle"},overlay:{position:"fixed",inset:0,background:"rgba(20,18,15,0.55)",backdropFilter:"blur(3px)",zIndex:200,display:"grid",placeItems:"center",padding:16},sheet:{background:"var(--surface)",borderRadius:20,width:"100%",maxWidth:460,maxHeight:"92vh",display:"flex",flexDirection:"column",overflow:"hidden",boxShadow:"0 24px 64px rgba(0,0,0,0.34)",boxSizing:"border-box"},sheetHead:{padding:"16px 18px 18px",color:"#fff"},sheetHeadRow:{display:"flex",justifyContent:"space-between",alignItems:"center"},sheetKicker:{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",opacity:.9},sheetClose:{border:"none",background:"rgba(255,255,255,0.2)",color:"#fff",width:30,height:30,borderRadius:9,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},sheetTitle:{fontSize:22,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:8,wordBreak:"break-word",lineHeight:1.15},sheetChips:{display:"flex",gap:6,flexWrap:"wrap",marginTop:10},sheetChip:{fontSize:11,fontWeight:700,background:"rgba(255,255,255,0.22)",color:"#fff",borderRadius:20,padding:"3px 10px"},sheetBody:{padding:"16px 18px 6px",overflowY:"auto"},sheetFoot:{display:"flex",gap:10,padding:"14px 18px 16px",borderTop:"1px solid var(--border)",background:"var(--surface)"},fLabel:{display:"block",fontSize:11,fontWeight:700,color:"var(--text-2)",margin:"12px 0 5px",textTransform:"uppercase",letterSpacing:"0.05em"},field:{width:"100%",border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:14,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)"},grid2:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},seg:{display:"flex",gap:4,background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:4},segBtn:{flex:1,display:"inline-flex",alignItems:"center",justifyContent:"center",gap:5,border:"none",background:"none",color:"var(--text-2)",padding:"9px 0",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",transition:"background 0.12s"},segBtnOn:{color:"#fff",boxShadow:"0 2px 8px rgba(0,0,0,0.18)"},dirHint:{fontSize:11.5,color:"var(--text-3)",marginTop:7,lineHeight:1.4},preview2:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginTop:14},previewCell:{display:"flex",flexDirection:"column",gap:2,borderRadius:12,padding:"11px 13px"},previewLbl:{fontSize:11,fontWeight:600,color:"var(--text-2)"},previewVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},bookHero:{textAlign:"center",padding:"14px 0 6px"},bookHeroLbl:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em"},bookHeroVal:{display:"block",fontSize:34,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.05},bookHeroMeta:{display:"block",fontSize:11.5,color:"var(--text-3)",marginTop:6},errBanner:{marginTop:14,background:Bt+"18",border:`1px solid ${Bt}55`,color:Bt,borderRadius:10,padding:"10px 12px",fontSize:12.5,fontWeight:600,lineHeight:1.4},rulesHint:{marginTop:14,fontSize:11.5,color:"var(--text-3)",fontWeight:600,lineHeight:1.4},ghostBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"11px 18px",borderRadius:11,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},primaryBtn:{flex:1,display:"inline-flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",color:"#fff",padding:"11px 18px",borderRadius:11,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Sc=[{id:"sandstone",name:"Sandstone",description:"Warm editorial light — the original Anvil look.",dark:!1,swatch:["#F7F6F3","#4C9A6B","#26241F"],vars:{"--bg":"#F7F6F3","--surface":"#FFFFFF","--surface-2":"#FAFAF8","--hover":"#F2F1EC","--border":"#ECEAE3","--text":"#26241F","--text-2":"#6B675E","--text-3":"#9A968C","--accent":"#4C9A6B","--accent-strong":"#26241F","--accent-2":"#3A352C"}},{id:"midnight",name:"Midnight",description:"Deep low-glare dark mode for night owls and focus.",dark:!0,swatch:["#161513","#6FB58C","#ECEAE3"],vars:{"--bg":"#161513","--surface":"#211F1C","--surface-2":"#1B1A17","--hover":"#2B2924","--border":"#34312B","--text":"#ECEAE3","--text-2":"#B6B1A6","--text-3":"#8A857A","--accent":"#6FB58C","--accent-strong":"#2E6F4B","--accent-2":"#245C3E"}},{id:"blossom",name:"Blossom",description:"Soft rose & blush — gentle, warm, and feminine.",dark:!1,swatch:["#FFF5F8","#E0608E","#B23A6B"],vars:{"--bg":"#FFF5F8","--surface":"#FFFFFF","--surface-2":"#FFF0F4","--hover":"#FDE7EE","--border":"#F6D9E2","--text":"#3D2230","--text-2":"#7A5466","--text-3":"#B08799","--accent":"#E0608E","--accent-strong":"#B23A6B","--accent-2":"#9C2F5C"}},{id:"tide",name:"Tide",description:"Calm professional blues — clean and focused.",dark:!1,swatch:["#F1F6FA","#2E86C1","#1C4E73"],vars:{"--bg":"#F1F6FA","--surface":"#FFFFFF","--surface-2":"#ECF3F9","--hover":"#E2EEF6","--border":"#D5E3EE","--text":"#13283A","--text-2":"#4A6275","--text-3":"#8AA0B0","--accent":"#2E86C1","--accent-strong":"#1C4E73","--accent-2":"#163E5C"}},{id:"velocity",name:"Velocity",description:"High-energy sport — crisp slate with electric orange.",dark:!1,swatch:["#F4F5F7","#F4511E","#1F2A37"],vars:{"--bg":"#F4F5F7","--surface":"#FFFFFF","--surface-2":"#EEF0F3","--hover":"#E7EAEE","--border":"#DCE0E6","--text":"#18202B","--text-2":"#515B68","--text-3":"#8B95A1","--accent":"#F4511E","--accent-strong":"#1F2A37","--accent-2":"#16202B"}},{id:"evergreen",name:"Evergreen",description:"Earthy forest greens — grounded and natural.",dark:!1,swatch:["#F2F6F1","#3E8E52","#2A4A30"],vars:{"--bg":"#F2F6F1","--surface":"#FFFFFF","--surface-2":"#ECF2EA","--hover":"#E4EEE2","--border":"#D7E4D3","--text":"#1E2B20","--text-2":"#4F6151","--text-3":"#8AA08C","--accent":"#3E8E52","--accent-strong":"#2A4A30","--accent-2":"#213B26"}},{id:"amethyst",name:"Amethyst",description:"Premium purple & plum — elegant and refined.",dark:!1,swatch:["#F6F4FB","#7A4FE0","#3A2D5C"],vars:{"--bg":"#F6F4FB","--surface":"#FFFFFF","--surface-2":"#F1EDF9","--hover":"#EAE3F6","--border":"#DFD6F0","--text":"#241B36","--text-2":"#5A4E72","--text-3":"#9588AE","--accent":"#7A4FE0","--accent-strong":"#3A2D5C","--accent-2":"#2E2349"}}],Np="sandstone",Lh="anvil_theme",J1=e=>Sc.find(r=>r.id===e)||Sc[0];function _h(){try{return localStorage.getItem(Lh)||Np}catch{return Np}}function Li(e,r=!0){const n=J1(e),o=document.documentElement;Object.entries(n.vars).forEach(([s,l])=>o.style.setProperty(s,l)),o.style.colorScheme=n.dark?"dark":"light",o.setAttribute("data-theme",n.id);const i=document.querySelector('meta[name="theme-color"]');if(i&&i.setAttribute("content",n.vars["--surface"]),r)try{localStorage.setItem(Lh,n.id)}catch{}return n.id}const e2=e=>e%10===1&&e!==11?"st":e%10===2&&e!==12?"nd":e%10===3&&e!==13?"rd":"th";function t2(e=560){const[r,n]=g.useState(()=>window.innerWidth<=e);return g.useEffect(()=>{const o=()=>n(window.innerWidth<=e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}function r2({screens:e,order:r,hidden:n,themeId:o,currency:i,monthStartDay:s,ticker:l,defaultScreen:a,onSetDefault:d,onSaveSidebar:u,onPreviewTheme:m,onCommitTheme:f,onSelectCurrency:h,onSelectMonthStartDay:I,onSaveTicker:B,onClose:k}){const[C,p]=g.useState("sidebar"),[c,b]=g.useState(()=>r.map(oe=>({id:oe,hidden:n.includes(oe)}))),[T,y]=g.useState(o),[w,D]=g.useState(""),[S,j]=g.useState(!1),[N,J]=g.useState(""),[se,W]=g.useState(!1),[de,Re]=g.useState(""),[pe,je]=g.useState(""),[Q,x]=g.useState({swing:"",fno:"",intraday:""}),[Y,H]=g.useState(!1),ae=t2(),[V,G]=g.useState(!!(l!=null&&l.enabled)),[P,ge]=g.useState(()=>{const oe=Array.isArray(l==null?void 0:l.statements)?l.statements.slice(0,5):[];return oe.length?oe:[""]}),[ce,We]=g.useState((l==null?void 0:l.speed)??60),[X,ne]=g.useState((l==null?void 0:l.delay)??3),[L,ie]=g.useState(!1),he=(oe,Me)=>ge(qe=>qe.map((tt,ut)=>ut===oe?Me:tt)),A=()=>ge(oe=>oe.length<5?[...oe,""]:oe),v=oe=>ge(Me=>Me.length>1?Me.filter((qe,tt)=>tt!==oe):Me),re=()=>{const oe=P.map(Me=>Me.trim()).filter(Boolean).slice(0,5);B({enabled:V,statements:oe,speed:Number(ce),delay:Number(X)}),ie(!0),setTimeout(()=>ie(!1),1500)};g.useEffect(()=>{E.getSetting("golden_music").then(oe=>D((oe==null?void 0:oe.value)||"")).catch(()=>{})},[]);const F=()=>{E.setSetting("golden_music",w.trim()).then(()=>{j(!0),setTimeout(()=>j(!1),1500)}).catch(()=>{})};g.useEffect(()=>{E.getSetting("trading_capital").then(oe=>J((oe==null?void 0:oe.value)||"")).catch(()=>{})},[]);const le=()=>{E.setSetting("trading_capital",String(parseFloat(N)||0)).then(()=>{W(!0),setTimeout(()=>W(!1),1500)}).catch(()=>{})};g.useEffect(()=>{E.getSetting("trading_risk_pct").then(oe=>Re((oe==null?void 0:oe.value)??"")).catch(()=>{}),E.getSetting("trading_rr").then(oe=>je((oe==null?void 0:oe.value)??"")).catch(()=>{}),E.getSetting("trading_diversification").then(oe=>{const Me=(oe==null?void 0:oe.value)||{};x({swing:Me.swing??"",fno:Me.fno??"",intraday:Me.intraday??""})}).catch(()=>{})},[]);const ye=()=>{const oe={swing:parseInt(Q.swing,10)||0,fno:parseInt(Q.fno,10)||0,intraday:parseInt(Q.intraday,10)||0};Promise.all([E.setSetting("trading_risk_pct",parseFloat(de)||0),E.setSetting("trading_rr",parseFloat(pe)||0),E.setSetting("trading_diversification",oe)]).then(()=>{H(!0),setTimeout(()=>H(!1),1500)}).catch(()=>{})},ke=oe=>{y(oe),m(oe)},Ne=c.filter(oe=>!oe.hidden).length,lt=(oe,Me)=>{const qe=oe+Me;if(qe<0||qe>=c.length)return;const tt=[...c];[tt[oe],tt[qe]]=[tt[qe],tt[oe]],b(tt)},Je=oe=>{const Me=c[oe];if(!Me.hidden&&Ne<=1)return;const qe=[...c];qe[oe]={...Me,hidden:!Me.hidden},b(qe)},mt=()=>{u(c.map(oe=>oe.id),c.filter(oe=>oe.hidden).map(oe=>oe.id))},Qe=ae?{...we.overlay,padding:0}:we.overlay,st=ae?{...we.modal,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"100%",borderRadius:0,border:"none"}:we.modal;return t.jsx("div",{style:Qe,onClick:k,children:t.jsxs("div",{style:st,onClick:oe=>oe.stopPropagation(),children:[t.jsxs("div",{style:we.head,children:[t.jsx("div",{style:we.title,children:"Settings"}),t.jsx("button",{onClick:k,style:we.closeBtn,children:t.jsx(De,{size:18})})]}),t.jsxs("div",{style:we.tabs,children:[t.jsxs("button",{onClick:()=>p("sidebar"),style:{...we.tab,...C==="sidebar"?we.tabOn:{}},children:[t.jsx(Qy,{size:15})," Configure sidebar"]}),t.jsxs("button",{onClick:()=>p("themes"),style:{...we.tab,...C==="themes"?we.tabOn:{}},children:[t.jsx(e0,{size:15})," Themes"]}),t.jsxs("button",{onClick:()=>p("currency"),style:{...we.tab,...C==="currency"?we.tabOn:{}},children:[t.jsx(Wy,{size:15})," Monetary"]}),t.jsxs("button",{onClick:()=>p("music"),style:{...we.tab,...C==="music"?we.tabOn:{}},children:[t.jsx(ja,{size:15})," Music"]}),t.jsxs("button",{onClick:()=>p("reminders"),style:{...we.tab,...C==="reminders"?we.tabOn:{}},children:[t.jsx(ch,{size:15})," Reminders"]})]}),t.jsx("div",{style:we.body,children:C==="sidebar"?t.jsxs(t.Fragment,{children:[t.jsxs("p",{style:we.hint,children:["Reorder with the arrows, hide ones you don't use, and tap ",t.jsx(fs,{size:11,style:{verticalAlign:"-1px"}})," to set the screen that opens on launch."]}),t.jsx("div",{style:we.list,children:c.map((oe,Me)=>{const qe=e[oe.id],tt=qe.icon,ut=a===oe.id;return t.jsxs("div",{style:{...we.row,opacity:oe.hidden?.5:1,...ut?{borderColor:"var(--accent)"}:{}},children:[t.jsx("span",{style:we.rowNum,children:Me+1}),t.jsx(tt,{size:16}),t.jsxs("span",{style:we.rowLabel,children:[qe.label,ut&&t.jsx("span",{style:we.defaultTag,children:"default"})]}),t.jsx("button",{onClick:()=>d(oe.id),title:ut?"Opens on launch":"Set as default",style:{...we.iconBtn,...ut?{color:"var(--accent)"}:{}},children:t.jsx(fs,{size:15})}),t.jsx("button",{onClick:()=>Je(Me),title:oe.hidden?"Show":"Hide",style:{...we.iconBtn,...oe.hidden?{}:{color:"var(--accent)"}},children:oe.hidden?t.jsx(Kl,{size:15}):t.jsx(ms,{size:15})}),t.jsx("button",{onClick:()=>lt(Me,-1),disabled:Me===0,style:{...we.iconBtn,opacity:Me===0?.3:1},children:t.jsx(ya,{size:15})}),t.jsx("button",{onClick:()=>lt(Me,1),disabled:Me===c.length-1,style:{...we.iconBtn,opacity:Me===c.length-1?.3:1},children:t.jsx(zo,{size:15})})]},oe.id)})}),t.jsxs("button",{onClick:mt,style:we.saveBtn,children:[t.jsx(He,{size:15})," Save sidebar"]})]}):C==="currency"?t.jsxs(t.Fragment,{children:[t.jsx("p",{style:we.hint,children:"Choose the currency used across Wallet and Worth. Applies instantly."}),t.jsx("div",{style:we.list,children:mc.map(oe=>{const Me=oe.code===i;return t.jsxs("button",{onClick:()=>h(oe.code),style:{...we.row,cursor:"pointer",textAlign:"left",width:"100%",...Me?{borderColor:"var(--accent)"}:{}},children:[t.jsx("span",{style:we.curSymbol,children:oe.symbol}),t.jsxs("span",{style:we.rowLabel,children:[oe.label," ",t.jsx("span",{style:we.curCode,children:oe.code})]}),Me&&t.jsx("span",{style:we.themeCheck,children:t.jsx(He,{size:13})})]},oe.code)})}),t.jsx("div",{style:we.subDivider}),t.jsx("div",{style:we.fieldLbl,children:"Month starts on"}),t.jsx("p",{style:we.hint,children:'If your salary lands on the 25th, set this to 25 — Wallet and Expenses will treat each "month" as running 25th to 24th instead of calendar month.'}),t.jsx("select",{value:s,onChange:oe=>I(Number(oe.target.value)),style:we.musicInput,children:Array.from({length:28},(oe,Me)=>Me+1).map(oe=>t.jsx("option",{value:oe,children:oe===1?"1st (calendar month)":`${oe}${e2(oe)}`},oe))}),t.jsx("div",{style:we.subDivider}),t.jsx("div",{style:we.fieldLbl,children:"Trading capital"}),t.jsxs("p",{style:we.hint,children:["Your starting capital for the ",t.jsx("b",{children:"Trading Journal"}),". The page shows this plus your all-time net P/L — green when in profit, red when below."]}),t.jsx("input",{type:"number",value:N,onChange:oe=>J(oe.target.value),placeholder:"e.g. 100000",style:we.musicInput}),t.jsxs("button",{onClick:le,style:we.saveBtn,children:[t.jsx(He,{size:15})," ",se?"Saved":"Save capital"]}),t.jsx("div",{style:we.subDivider}),t.jsx("div",{style:we.fieldLbl,children:"Trading discipline rules"}),t.jsx("p",{style:we.hint,children:"Guardrails enforced when opening a trade. A trade that breaks any rule can't be saved. Leave a field at 0 (or blank) to disable that rule."}),t.jsx("label",{style:we.miniLbl,children:"Risk per trade (%)"}),t.jsx("p",{style:we.hint,children:"Max loss on any single trade as a percent of capital. e.g. 2% of 100000 caps loss at 2000 — quantity or SL that risks more is blocked."}),t.jsx("input",{type:"number",step:"0.1",min:"0",value:de,onChange:oe=>Re(oe.target.value),placeholder:"e.g. 2",style:we.musicInput}),t.jsx("label",{style:we.miniLbl,children:"Risk : Reward (1 : R)"}),t.jsx("p",{style:we.hint,children:"Minimum reward multiple of risk. Enter 3 for 1:3 — if SL is 5 below entry, target must be at least 15 above entry."}),t.jsx("input",{type:"number",step:"0.5",min:"0",value:pe,onChange:oe=>je(oe.target.value),placeholder:"e.g. 3",style:we.musicInput}),t.jsx("label",{style:we.miniLbl,children:"Diversification (max open trades per section)"}),t.jsx("p",{style:we.hint,children:"Limits how many open trades you may hold per section, and caps each position's value at capital ÷ this number (e.g. 5 → max 20000 per trade on 100000 capital)."}),t.jsx("div",{style:we.divGrid,children:[["swing","Swing"],["fno","FnO"],["intraday","Intraday"]].map(([oe,Me])=>t.jsxs("div",{style:we.divCell,children:[t.jsx("span",{style:we.divLbl,children:Me}),t.jsx("input",{type:"number",min:"0",step:"1",value:Q[oe],onChange:qe=>x(tt=>({...tt,[oe]:qe.target.value})),placeholder:"0",style:we.divInput})]},oe))}),t.jsxs("button",{onClick:ye,style:we.saveBtn,children:[t.jsx(He,{size:15})," ",Y?"Saved":"Save rules"]})]}):C==="music"?t.jsxs(t.Fragment,{children:[t.jsxs("p",{style:we.hint,children:["Paste a YouTube link to play softly while you write in the ",t.jsx("b",{children:"Golden Book"}),". It plays only on that screen (audio only)."]}),t.jsx("input",{value:w,onChange:oe=>D(oe.target.value),placeholder:"https://youtube.com/watch?v=…",style:we.musicInput}),t.jsxs("button",{onClick:F,style:we.saveBtn,children:[t.jsx(He,{size:15})," ",S?"Saved":"Save music"]})]}):C==="reminders"?t.jsxs(t.Fragment,{children:[t.jsx("p",{style:we.hint,children:"Up to 5 reminders scroll across the top of every screen — a gentle nudge toward your goals."}),t.jsxs("button",{onClick:()=>G(oe=>!oe),style:{...we.row,cursor:"pointer",width:"100%",justifyContent:"space-between",...V?{borderColor:"var(--accent)"}:{}},children:[t.jsx("span",{style:we.rowLabel,children:"Show reminder banner"}),t.jsx("span",{style:{...we.switch,...V?we.switchOn:{}},children:V?"On":"Off"})]}),t.jsxs("div",{style:{marginTop:14},children:[t.jsxs("div",{style:we.fieldLbl,children:["Reminders (",P.filter(oe=>oe.trim()).length,"/5)"]}),P.map((oe,Me)=>t.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[t.jsx("input",{value:oe,onChange:qe=>he(Me,qe.target.value),maxLength:120,placeholder:`Reminder ${Me+1}`,style:{...we.musicInput,marginBottom:0}}),t.jsx("button",{onClick:()=>v(Me),style:we.iconBtn,title:"Remove",children:t.jsx(De,{size:15})})]},Me)),P.length<5&&t.jsxs("button",{onClick:A,style:we.addRowBtn,children:[t.jsx(ot,{size:14})," Add reminder"]})]}),t.jsxs("div",{style:{marginTop:16},children:[t.jsxs("div",{style:we.sliderHead,children:[t.jsx("span",{style:we.fieldLbl,children:"Scroll speed"}),t.jsxs("span",{style:we.sliderVal,children:[ce," px/s"]})]}),t.jsx("input",{type:"range",min:20,max:200,step:5,value:ce,onChange:oe=>We(oe.target.value),style:we.range})]}),t.jsxs("div",{style:{marginTop:12},children:[t.jsxs("div",{style:we.sliderHead,children:[t.jsx("span",{style:we.fieldLbl,children:"Delay between reminders"}),t.jsxs("span",{style:we.sliderVal,children:[X,"s"]})]}),t.jsx("input",{type:"range",min:0,max:15,step:1,value:X,onChange:oe=>ne(oe.target.value),style:we.range})]}),t.jsxs("button",{onClick:re,style:{...we.saveBtn,marginTop:16},children:[t.jsx(He,{size:15})," ",L?"Saved":"Save reminders"]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("p",{style:we.hint,children:["Tap a theme to preview it live, then hit ",t.jsx("b",{children:"Apply theme"})," to keep it."]}),t.jsx("div",{style:we.themeGrid,children:Sc.map(oe=>{const Me=oe.id===T;return t.jsxs("button",{onClick:()=>ke(oe.id),style:{...we.themeCard,...Me?we.themeCardOn:{}},children:[t.jsxs("div",{style:we.swatchRow,children:[oe.swatch.map((qe,tt)=>t.jsx("span",{style:{...we.swatch,background:qe}},tt)),Me&&t.jsx("span",{style:we.themeCheck,children:t.jsx(He,{size:13})})]}),t.jsxs("div",{style:we.themeName,children:[oe.name,oe.dark?t.jsx("span",{style:we.darkTag,children:"Dark"}):null]}),t.jsx("div",{style:we.themeDesc,children:oe.description})]},oe.id)})}),t.jsxs("button",{onClick:()=>f(T),disabled:T===o,style:{...we.saveBtn,...T===o?we.saveBtnDisabled:{}},children:[t.jsx(He,{size:15})," ",T===o?"Theme applied":"Apply theme"]})]})})]})})}const we={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,width:460,maxWidth:"100%",maxHeight:"88vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",overflow:"hidden"},head:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 18px",borderBottom:"1px solid var(--border)",flexShrink:0},title:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},tabs:{display:"flex",flexWrap:"wrap",gap:6,padding:"12px 18px 0",flexShrink:0},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"transparent"},body:{padding:"16px 18px 20px",overflowY:"auto",overflowX:"hidden",flex:1,minHeight:0},hint:{fontSize:12.5,color:"var(--text-3)",lineHeight:1.5,margin:"0 0 14px"},list:{display:"flex",flexDirection:"column",gap:6},row:{display:"flex",alignItems:"center",gap:10,padding:"9px 11px",background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:9},rowNum:{fontSize:11,fontWeight:700,color:"var(--text-3)",width:16,textAlign:"center"},rowLabel:{flex:1,fontSize:13.5,fontWeight:500,display:"flex",alignItems:"center",gap:7},defaultTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"1px 6px",borderRadius:6},curSymbol:{width:22,textAlign:"center",fontSize:15,fontWeight:700,color:"var(--text)"},curCode:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginLeft:4},iconBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},saveBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",marginTop:16,border:"none",background:"var(--accent)",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer"},saveBtnDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"default"},musicInput:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:12},switch:{fontSize:12,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:20,padding:"3px 12px",minWidth:44,textAlign:"center"},switchOn:{background:"var(--accent)",color:"#fff"},fieldLbl:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},miniLbl:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text)",margin:"12px 0 2px"},subDivider:{height:1,background:"var(--border)",margin:"18px 0 14px"},divGrid:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8,marginBottom:12},divCell:{display:"flex",flexDirection:"column",gap:4},divLbl:{fontSize:11,fontWeight:700,color:"var(--text-3)"},divInput:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"8px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},addRowBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},sliderHead:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},sliderVal:{fontSize:12,fontWeight:700,color:"var(--accent)"},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},themeGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},themeCard:{textAlign:"left",border:"2px solid var(--border)",background:"var(--surface-2)",borderRadius:12,padding:12,cursor:"pointer",display:"flex",flexDirection:"column",gap:6,outline:"none",WebkitTapHighlightColor:"transparent",transition:"border-color .15s ease, box-shadow .15s ease"},themeCardOn:{borderColor:"var(--accent)",boxShadow:"0 0 0 3px color-mix(in srgb, var(--accent) 25%, transparent)"},swatchRow:{display:"flex",alignItems:"center",gap:5,position:"relative"},swatch:{width:22,height:22,borderRadius:"50%",border:"1px solid rgba(0,0,0,0.08)"},themeCheck:{marginLeft:"auto",width:20,height:20,borderRadius:"50%",background:"var(--accent)",color:"#fff",display:"grid",placeItems:"center"},themeName:{fontSize:14,fontWeight:700,display:"flex",alignItems:"center",gap:6},darkTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",background:"var(--hover)",color:"var(--text-2)",padding:"1px 6px",borderRadius:6},themeDesc:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4}},n2=`
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
`;function o2({statements:e,speed:r=60,delay:n=3}){const o=g.useMemo(()=>(e||[]).map(d=>(d||"").trim()).filter(Boolean).slice(0,5),[e]),[i,s]=g.useState(0),l=g.useRef(null),a=g.useRef(null);return g.useEffect(()=>{s(0)},[o]),g.useEffect(()=>{if(!o.length)return;const d=l.current,u=a.current;if(!d||!u)return;const m=d.offsetWidth,f=u.offsetWidth,h=Math.max(10,Number(r)||60),I=Math.max(2500,(m+f)/h*1e3),B=u.animate([{transform:`translateX(${m}px)`},{transform:`translateX(${-f}px)`}],{duration:I,easing:"linear",fill:"both"});let k;const C=()=>{k=setTimeout(()=>s(p=>(p+1)%o.length),Math.max(0,Number(n)||0)*1e3)};return B.addEventListener("finish",C),()=>{B.cancel(),B.removeEventListener("finish",C),clearTimeout(k)}},[i,o,r,n]),o.length?t.jsxs("div",{style:Mo.bar,"aria-label":"Reminders",children:[t.jsx("style",{children:n2}),t.jsx("div",{className:"anvil-tick-glow",style:Mo.icon,children:t.jsx("span",{className:"anvil-tick-pulse",style:{display:"grid",placeItems:"center"},children:t.jsx(ch,{size:15})})}),t.jsxs("div",{ref:l,style:Mo.viewport,children:[t.jsx("span",{className:"anvil-tick-shimmer",style:Mo.shimmer}),t.jsx("div",{className:"anvil-tick-float",style:Mo.floatWrap,children:t.jsx("div",{ref:a,style:Mo.text,children:o[i%o.length]},i)})]})]}):null}const Mo={bar:{display:"flex",alignItems:"center",height:36,flexShrink:0,overflow:"hidden",borderBottom:"1px solid var(--border)",background:"color-mix(in srgb, var(--accent) 12%, var(--surface))"},icon:{display:"grid",placeItems:"center",width:42,height:"100%",flexShrink:0,color:"#fff",background:"var(--accent)",zIndex:2},viewport:{position:"relative",flex:1,height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},shimmer:{position:"absolute",top:0,bottom:0,left:0,width:"22%",background:"linear-gradient(100deg, transparent, color-mix(in srgb, var(--accent) 22%, transparent), transparent)",pointerEvents:"none",zIndex:1},floatWrap:{display:"inline-flex",alignItems:"center",willChange:"transform"},text:{whiteSpace:"nowrap",fontSize:13.5,fontWeight:700,color:"var(--text)",letterSpacing:"0.01em",willChange:"transform",paddingLeft:4}};Li(_h(),!1);const Cc="anvil_default_screen",Op=()=>{try{return localStorage.getItem(Cc)}catch{return null}},uo={dashboard:{label:"Dashboard",icon:Ky,component:I0},kickstart:{label:"Kickstart",icon:ph,component:a1},golden:{label:"Golden Book",icon:Ly,component:g1},habits:{label:"Habits",icon:gc,component:Y0},quadrant:{label:"Quadrant",icon:kg,component:A0},goals:{label:"Goals",icon:Tg,component:N0},grove:{label:"Grove",icon:pc,component:Wv},worth:{label:"Rewards",icon:Vy,component:Ov},vault:{label:"Wallet",icon:ka,component:Xv},expenses:{label:"Expenses",icon:ql,component:M1},trading:{label:"Trading Journal",icon:Ey,component:X1},journal:{label:"Journal",icon:xa,component:iv},revision:{label:"Revision",icon:bh,component:xv},affirmations:{label:"Affirmations",icon:To,component:jv},skills:{label:"Skills",icon:lh,component:lv},spiritual:{label:"Spiritual",icon:Yi,component:cv},mindscape:{label:"Mindscape",icon:ah,component:v1},achievements:{label:"Achievements",icon:qr,component:R1},challenges:{label:"Challenges",icon:b0,component:N1},bucket:{label:"Bucket List",icon:Xy,component:U1},delight:{label:"Delights",icon:Cg,component:D1}},$h=["dashboard","kickstart","golden","habits","quadrant","goals","grove","journal","revision","affirmations","skills","spiritual","mindscape","achievements","challenges","bucket","delight","worth","vault","expenses","trading"];function dl(e){const r=$h.filter(i=>uo[i]),o=[...(Array.isArray(e)?e:[]).filter(i=>uo[i])];return r.forEach(i=>{o.includes(i)||o.push(i)}),o}function i2(){const[e,r]=g.useState(()=>window.innerWidth<720);return g.useEffect(()=>{const n=()=>r(window.innerWidth<720);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}function s2(){const[e,r]=g.useState(()=>{const P=Op();return P&&uo[P]?P:"habits"}),[n,o]=g.useState(()=>Op()||"habits"),[i,s]=g.useState(!1),[l,a]=g.useState(null),[d,u]=g.useState(!1),[m,f]=g.useState(!1),[h,I]=g.useState(_h()),[B,k]=g.useState(ui()),[C,p]=g.useState(jc()),[c,b]=g.useState({enabled:!1,statements:[],speed:60,delay:3}),[T,y]=g.useState(()=>dl($h)),[w,D]=g.useState([]),S=i2(),j=g.useRef(e);g.useEffect(()=>{j.current=e},[e]),g.useEffect(()=>{if(!l)return;const P=10,ge=new Set(["kickstart","mindscape"]),ce=setInterval(()=>{const We=j.current;!document.hidden&&We&&!ge.has(We)&&E.addScreenTime(We,P).catch(()=>{})},P*1e3);return()=>clearInterval(ce)},[l]),g.useEffect(()=>{let P=!1;const ge=()=>{bc(),a(null)};window.addEventListener("anvil-unauthorized",ge);const ce=new URLSearchParams(window.location.search).get("login");return ce&&(w0(ce),window.history.replaceState({},"",window.location.pathname)),vh()?E.me().then(We=>{P||a(We)}).catch(()=>{}).finally(()=>{P||u(!0)}):u(!0),()=>{P=!0,window.removeEventListener("anvil-unauthorized",ge)}},[]),g.useEffect(()=>{l&&(E.getSetting("theme").then(P=>{P!=null&&P.value&&I(Li(P.value))}).catch(()=>{}),E.getSetting("currency").then(P=>{P!=null&&P.value&&k(Gu(P.value))}).catch(()=>{}),E.getSetting("month_start_day").then(P=>{P!=null&&P.value&&p(yp(P.value))}).catch(()=>{}),E.getSetting("ticker").then(P=>{P!=null&&P.value&&b(ge=>({...ge,...P.value}))}).catch(()=>{}),E.getSetting("default_screen").then(P=>{if(P!=null&&P.value&&uo[P.value]){o(P.value);try{localStorage.setItem(Cc,P.value)}catch{}}}).catch(()=>{}),E.getSetting("sidebar_order").then(P=>{Array.isArray(P==null?void 0:P.value)&&y(dl(P.value))}).catch(()=>{}),E.getSetting("sidebar_hidden").then(P=>{Array.isArray(P==null?void 0:P.value)&&D(P.value)}).catch(()=>{}))},[l]);function N(P){r(P),s(!1)}const J=()=>{bc(),a(null)},se=P=>{Li(P,!1)},W=P=>{I(Li(P)),E.setSetting("theme",P).catch(()=>{}),f(!1)},de=()=>{Li(h,!1),f(!1)},Re=P=>{k(Gu(P)),E.setSetting("currency",P).catch(()=>{})},pe=P=>{p(yp(P)),E.setSetting("month_start_day",Number(P)).catch(()=>{})},je=P=>{b(P),E.setSetting("ticker",P).catch(()=>{})},Q=P=>{o(P);try{localStorage.setItem(Cc,P)}catch{}E.setSetting("default_screen",P).catch(()=>{})},x=(P,ge)=>{if(y(dl(P)),D(ge),f(!1),E.setSetting("sidebar_order",P).catch(()=>{}),E.setSetting("sidebar_hidden",ge).catch(()=>{}),ge.includes(e)){const ce=dl(P).find(We=>!ge.includes(We));ce&&r(ce)}},Y=T.filter(P=>!w.includes(P));if(!d)return t.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:"'Inter',system-ui,sans-serif",color:"var(--text-3)"},children:"Loading…"});if(!l)return t.jsx(Hv,{});const H=uo[e],ae=H.component,V=()=>t.jsx("div",{style:bt.navItems,children:Y.map(P=>{const ge=uo[P];if(!ge)return null;const ce=ge.icon,We=e===P;return t.jsxs("button",{onClick:()=>N(P),title:ge.label,style:{...bt.navItem,...We?bt.navItemOn:{}},children:[t.jsx(ce,{size:18}),t.jsx("span",{style:bt.navLabel,children:ge.label})]},P)})}),G=()=>t.jsxs("div",{style:bt.footerWrap,children:[t.jsxs("button",{onClick:()=>f(!0),style:bt.settingsBtn,title:"Settings",children:[t.jsx(hh,{size:17}),t.jsx("span",{children:"Settings"})]}),t.jsxs("div",{style:bt.userFooter,children:[t.jsxs("div",{style:bt.userInfo,children:[t.jsx("div",{style:bt.userAvatar,children:(l.name||l.email||"?").charAt(0).toUpperCase()}),t.jsxs("div",{style:{minWidth:0},children:[t.jsx("div",{style:bt.userName,children:l.name||"You"}),t.jsx("div",{style:bt.userEmail,children:l.email})]})]}),t.jsx("button",{onClick:J,style:bt.logoutBtn,title:"Sign out",children:t.jsx(Zy,{size:16})})]})]});return t.jsxs("div",{style:bt.shell,children:[!S&&t.jsxs("nav",{style:bt.nav,children:[t.jsxs("div",{style:bt.brand,children:[t.jsx("div",{style:bt.brandLogo,children:"B"}),t.jsx("span",{style:bt.brandName,children:"Anvil"})]}),t.jsx(V,{}),t.jsx(G,{})]}),S&&i&&t.jsx("div",{style:bt.overlay,onClick:()=>s(!1),children:t.jsxs("nav",{style:bt.drawer,onClick:P=>P.stopPropagation(),children:[t.jsxs("div",{style:bt.drawerHeader,children:[t.jsxs("div",{style:bt.brand,children:[t.jsx("div",{style:bt.brandLogo,children:"B"}),t.jsx("span",{style:bt.brandName,children:"Anvil"})]}),t.jsx("button",{style:bt.closeBtn,onClick:()=>s(!1),children:t.jsx(De,{size:20})})]}),t.jsx("div",{style:bt.drawerNav,children:t.jsx(V,{})}),t.jsx(G,{})]})}),t.jsxs("div",{style:bt.content,children:[S&&t.jsxs("div",{style:bt.topBar,children:[t.jsx("button",{style:bt.menuBtn,onClick:()=>s(!0),children:t.jsx(wg,{size:22})}),t.jsx("span",{style:bt.topBarTitle,children:H.label}),t.jsx("div",{style:{width:38}})]}),c.enabled&&t.jsx(o2,{statements:c.statements,speed:c.speed,delay:c.delay}),t.jsx("main",{style:bt.main,children:t.jsx(ae,{onNavigate:N})})]}),m&&t.jsx(r2,{screens:uo,order:T,hidden:w,themeId:h,currency:B,monthStartDay:C,ticker:c,defaultScreen:n,onSetDefault:Q,onSaveSidebar:x,onPreviewTheme:se,onCommitTheme:W,onSelectCurrency:Re,onSelectMonthStartDay:pe,onSaveTicker:je,onClose:de})]})}const bt={shell:{display:"flex",height:"100vh",overflow:"hidden",fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)"},nav:{width:200,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column",padding:"20px 10px",gap:2,overflowY:"auto",overflowX:"hidden"},brand:{display:"flex",alignItems:"center",gap:9,padding:"6px 10px 20px",borderBottom:"1px solid var(--border)",marginBottom:8},brandLogo:{width:30,height:30,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:14,fontWeight:800,fontFamily:"'Fraunces', Georgia, serif",flexShrink:0},brandName:{fontSize:16,fontWeight:700,letterSpacing:"-0.01em",color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},navItems:{display:"flex",flexDirection:"column",gap:2},navItem:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},navItemOn:{background:"var(--hover)",color:"var(--text)",fontWeight:700},footerWrap:{marginTop:"auto",paddingTop:8,flexShrink:0},settingsBtn:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},userFooter:{marginTop:4,paddingTop:12,borderTop:"1px solid var(--border)",display:"flex",alignItems:"center",gap:8},userInfo:{display:"flex",alignItems:"center",gap:8,flex:1,minWidth:0},userAvatar:{width:30,height:30,borderRadius:"50%",background:"#8268B0",color:"#fff",display:"grid",placeItems:"center",fontSize:13,fontWeight:700,flexShrink:0},userName:{fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},userEmail:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logoutBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",padding:7,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},navLabel:{flex:1},content:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},main:{flex:1,overflowY:"auto",overflowX:"hidden"},topBar:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"var(--surface)",borderBottom:"1px solid var(--border)",flexShrink:0},topBarTitle:{fontSize:16,fontWeight:700,color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},menuBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text)",padding:8,borderRadius:8,display:"grid",placeItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:100,display:"flex"},drawer:{width:220,background:"var(--surface)",height:"100%",display:"flex",flexDirection:"column",padding:"16px 10px",gap:2,boxShadow:"4px 0 24px rgba(0,0,0,0.12)",overflow:"hidden"},drawerNav:{flex:1,minHeight:0,overflowY:"auto",overflowX:"hidden"},drawerHeader:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:4,flexShrink:0},closeBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",padding:6,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0}};th(document.getElementById("root")).render(t.jsx(g.StrictMode,{children:t.jsx(s2,{})}));
