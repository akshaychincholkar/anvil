(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Up={exports:{}},ra={},Vp={exports:{}},lt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ks=Symbol.for("react.element"),Um=Symbol.for("react.portal"),Vm=Symbol.for("react.fragment"),Ym=Symbol.for("react.strict_mode"),Km=Symbol.for("react.profiler"),Qm=Symbol.for("react.provider"),qm=Symbol.for("react.context"),Xm=Symbol.for("react.forward_ref"),Zm=Symbol.for("react.suspense"),Jm=Symbol.for("react.memo"),ef=Symbol.for("react.lazy"),Fg=Symbol.iterator;function tf(e){return e===null||typeof e!="object"?null:(e=Fg&&e[Fg]||e["@@iterator"],typeof e=="function"?e:null)}var Yp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kp=Object.assign,Qp={};function ci(e,r,n){this.props=e,this.context=r,this.refs=Qp,this.updater=n||Yp}ci.prototype.isReactComponent={};ci.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")};ci.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qp(){}qp.prototype=ci.prototype;function Tc(e,r,n){this.props=e,this.context=r,this.refs=Qp,this.updater=n||Yp}var Ic=Tc.prototype=new qp;Ic.constructor=Tc;Kp(Ic,ci.prototype);Ic.isPureReactComponent=!0;var Ag=Array.isArray,Xp=Object.prototype.hasOwnProperty,Bc={current:null},Zp={key:!0,ref:!0,__self:!0,__source:!0};function Jp(e,r,n){var o,i={},s=null,l=null;if(r!=null)for(o in r.ref!==void 0&&(l=r.ref),r.key!==void 0&&(s=""+r.key),r)Xp.call(r,o)&&!Zp.hasOwnProperty(o)&&(i[o]=r[o]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var d=Array(a),g=0;g<a;g++)d[g]=arguments[g+2];i.children=d}if(e&&e.defaultProps)for(o in a=e.defaultProps,a)i[o]===void 0&&(i[o]=a[o]);return{$$typeof:ks,type:e,key:s,ref:l,props:i,_owner:Bc.current}}function rf(e,r){return{$$typeof:ks,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function Ec(e){return typeof e=="object"&&e!==null&&e.$$typeof===ks}function nf(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return r[n]})}var Wg=/\/+/g;function Sa(e,r){return typeof e=="object"&&e!==null&&e.key!=null?nf(""+e.key):r.toString(36)}function gl(e,r,n,o,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ks:case Um:l=!0}}if(l)return l=e,i=i(l),e=o===""?"."+Sa(l,0):o,Ag(i)?(n="",e!=null&&(n=e.replace(Wg,"$&/")+"/"),gl(i,r,n,"",function(g){return g})):i!=null&&(Ec(i)&&(i=rf(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Wg,"$&/")+"/")+e)),r.push(i)),1;if(l=0,o=o===""?".":o+":",Ag(e))for(var a=0;a<e.length;a++){s=e[a];var d=o+Sa(s,a);l+=gl(s,r,n,d,i)}else if(d=tf(e),typeof d=="function")for(e=d.call(e),a=0;!(s=e.next()).done;)s=s.value,d=o+Sa(s,a++),l+=gl(s,r,n,d,i);else if(s==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return l}function Ts(e,r,n){if(e==null)return e;var o=[],i=0;return gl(e,o,"","",function(s){return r.call(n,s,i++)}),o}function of(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var nr={current:null},ul={transition:null},sf={ReactCurrentDispatcher:nr,ReactCurrentBatchConfig:ul,ReactCurrentOwner:Bc};function eb(){throw Error("act(...) is not supported in production builds of React.")}lt.Children={map:Ts,forEach:function(e,r,n){Ts(e,function(){r.apply(this,arguments)},n)},count:function(e){var r=0;return Ts(e,function(){r++}),r},toArray:function(e){return Ts(e,function(r){return r})||[]},only:function(e){if(!Ec(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};lt.Component=ci;lt.Fragment=Vm;lt.Profiler=Km;lt.PureComponent=Tc;lt.StrictMode=Ym;lt.Suspense=Zm;lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sf;lt.act=eb;lt.cloneElement=function(e,r,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=Kp({},e.props),i=e.key,s=e.ref,l=e._owner;if(r!=null){if(r.ref!==void 0&&(s=r.ref,l=Bc.current),r.key!==void 0&&(i=""+r.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(d in r)Xp.call(r,d)&&!Zp.hasOwnProperty(d)&&(o[d]=r[d]===void 0&&a!==void 0?a[d]:r[d])}var d=arguments.length-2;if(d===1)o.children=n;else if(1<d){a=Array(d);for(var g=0;g<d;g++)a[g]=arguments[g+2];o.children=a}return{$$typeof:ks,type:e.type,key:i,ref:s,props:o,_owner:l}};lt.createContext=function(e){return e={$$typeof:qm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Qm,_context:e},e.Consumer=e};lt.createElement=Jp;lt.createFactory=function(e){var r=Jp.bind(null,e);return r.type=e,r};lt.createRef=function(){return{current:null}};lt.forwardRef=function(e){return{$$typeof:Xm,render:e}};lt.isValidElement=Ec;lt.lazy=function(e){return{$$typeof:ef,_payload:{_status:-1,_result:e},_init:of}};lt.memo=function(e,r){return{$$typeof:Jm,type:e,compare:r===void 0?null:r}};lt.startTransition=function(e){var r=ul.transition;ul.transition={};try{e()}finally{ul.transition=r}};lt.unstable_act=eb;lt.useCallback=function(e,r){return nr.current.useCallback(e,r)};lt.useContext=function(e){return nr.current.useContext(e)};lt.useDebugValue=function(){};lt.useDeferredValue=function(e){return nr.current.useDeferredValue(e)};lt.useEffect=function(e,r){return nr.current.useEffect(e,r)};lt.useId=function(){return nr.current.useId()};lt.useImperativeHandle=function(e,r,n){return nr.current.useImperativeHandle(e,r,n)};lt.useInsertionEffect=function(e,r){return nr.current.useInsertionEffect(e,r)};lt.useLayoutEffect=function(e,r){return nr.current.useLayoutEffect(e,r)};lt.useMemo=function(e,r){return nr.current.useMemo(e,r)};lt.useReducer=function(e,r,n){return nr.current.useReducer(e,r,n)};lt.useRef=function(e){return nr.current.useRef(e)};lt.useState=function(e){return nr.current.useState(e)};lt.useSyncExternalStore=function(e,r,n){return nr.current.useSyncExternalStore(e,r,n)};lt.useTransition=function(){return nr.current.useTransition()};lt.version="18.3.1";Vp.exports=lt;var c=Vp.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lf=c,af=Symbol.for("react.element"),df=Symbol.for("react.fragment"),cf=Object.prototype.hasOwnProperty,gf=lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,uf={key:!0,ref:!0,__self:!0,__source:!0};function tb(e,r,n){var o,i={},s=null,l=null;n!==void 0&&(s=""+n),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(l=r.ref);for(o in r)cf.call(r,o)&&!uf.hasOwnProperty(o)&&(i[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps,r)i[o]===void 0&&(i[o]=r[o]);return{$$typeof:af,type:e,key:s,ref:l,props:i,_owner:gf.current}}ra.Fragment=df;ra.jsx=tb;ra.jsxs=tb;Up.exports=ra;var t=Up.exports,rb={exports:{}},kr={},nb={exports:{}},ob={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function r(K,U){var ce=K.length;K.push(U);e:for(;0<ce;){var x=ce-1>>>1,Q=K[x];if(0<i(Q,U))K[x]=U,K[ce]=Q,ce=x;else break e}}function n(K){return K.length===0?null:K[0]}function o(K){if(K.length===0)return null;var U=K[0],ce=K.pop();if(ce!==U){K[0]=ce;e:for(var x=0,Q=K.length,O=Q>>>1;x<O;){var G=2*(x+1)-1,N=K[G],ge=G+1,de=K[ge];if(0>i(N,ce))ge<Q&&0>i(de,N)?(K[x]=de,K[ge]=ce,x=ge):(K[x]=N,K[G]=ce,x=G);else if(ge<Q&&0>i(de,ce))K[x]=de,K[ge]=ce,x=ge;else break e}}return U}function i(K,U){var ce=K.sortIndex-U.sortIndex;return ce!==0?ce:K.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var d=[],g=[],h=1,f=null,m=3,B=!1,T=!1,R=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function u(K){for(var U=n(g);U!==null;){if(U.callback===null)o(g);else if(U.startTime<=K)o(g),U.sortIndex=U.expirationTime,r(d,U);else break;U=n(g)}}function z(K){if(R=!1,u(K),!T)if(n(d)!==null)T=!0,be(v);else{var U=n(g);U!==null&&ze(z,U.startTime-K)}}function v(K,U){T=!1,R&&(R=!1,p(S),S=-1),B=!0;var ce=m;try{for(u(U),f=n(d);f!==null&&(!(f.expirationTime>U)||K&&!re());){var x=f.callback;if(typeof x=="function"){f.callback=null,m=f.priorityLevel;var Q=x(f.expirationTime<=U);U=e.unstable_now(),typeof Q=="function"?f.callback=Q:f===n(d)&&o(d),u(U)}else o(d);f=n(d)}if(f!==null)var O=!0;else{var G=n(g);G!==null&&ze(z,G.startTime-U),O=!1}return O}finally{f=null,m=ce,B=!1}}var I=!1,E=null,S=-1,j=5,Y=-1;function re(){return!(e.unstable_now()-Y<j)}function ee(){if(E!==null){var K=e.unstable_now();Y=K;var U=!0;try{U=E(!0,K)}finally{U?W():(I=!1,E=null)}}else I=!1}var W;if(typeof b=="function")W=function(){b(ee)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,we=he.port2;he.port1.onmessage=ee,W=function(){we.postMessage(null)}}else W=function(){w(ee,0)};function be(K){E=K,I||(I=!0,W())}function ze(K,U){S=w(function(){K(e.unstable_now())},U)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(K){K.callback=null},e.unstable_continueExecution=function(){T||B||(T=!0,be(v))},e.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<K?Math.floor(1e3/K):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(K){switch(m){case 1:case 2:case 3:var U=3;break;default:U=m}var ce=m;m=U;try{return K()}finally{m=ce}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(K,U){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var ce=m;m=K;try{return U()}finally{m=ce}},e.unstable_scheduleCallback=function(K,U,ce){var x=e.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?x+ce:x):ce=x,K){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=ce+Q,K={id:h++,callback:U,priorityLevel:K,startTime:ce,expirationTime:Q,sortIndex:-1},ce>x?(K.sortIndex=ce,r(g,K),n(d)===null&&K===n(g)&&(R?(p(S),S=-1):R=!0,ze(z,ce-x))):(K.sortIndex=Q,r(d,K),T||B||(T=!0,be(v))),K},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(K){var U=m;return function(){var ce=m;m=U;try{return K.apply(this,arguments)}finally{m=ce}}}})(ob);nb.exports=ob;var pf=nb.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bf=c,jr=pf;function Ce(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ib=new Set,Ji={};function ko(e,r){ti(e,r),ti(e+"Capture",r)}function ti(e,r){for(Ji[e]=r,e=0;e<r.length;e++)ib.add(r[e])}var fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fd=Object.prototype.hasOwnProperty,hf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mg={},Lg={};function mf(e){return fd.call(Lg,e)?!0:fd.call(Mg,e)?!1:hf.test(e)?Lg[e]=!0:(Mg[e]=!0,!1)}function ff(e,r,n,o){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xf(e,r,n,o){if(r===null||typeof r>"u"||ff(e,r,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function or(e,r,n,o,i,s,l){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=s,this.removeEmptyString=l}var Kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Kt[e]=new or(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];Kt[r]=new or(r,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Kt[e]=new or(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Kt[e]=new or(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Kt[e]=new or(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Kt[e]=new or(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Kt[e]=new or(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Kt[e]=new or(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Kt[e]=new or(e,5,!1,e.toLowerCase(),null,!1,!1)});var Rc=/[\-:]([a-z])/g;function Dc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(Rc,Dc);Kt[r]=new or(r,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(Rc,Dc);Kt[r]=new or(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(Rc,Dc);Kt[r]=new or(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Kt[e]=new or(e,1,!1,e.toLowerCase(),null,!1,!1)});Kt.xlinkHref=new or("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Kt[e]=new or(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fc(e,r,n,o){var i=Kt.hasOwnProperty(r)?Kt[r]:null;(i!==null?i.type!==0:o||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(xf(r,n,i,o)&&(n=null),o||i===null?mf(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(r=i.attributeName,o=i.attributeNamespace,n===null?e.removeAttribute(r):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,o?e.setAttributeNS(o,r,n):e.setAttribute(r,n))))}var kn=bf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Is=Symbol.for("react.element"),Mo=Symbol.for("react.portal"),Lo=Symbol.for("react.fragment"),Ac=Symbol.for("react.strict_mode"),xd=Symbol.for("react.profiler"),sb=Symbol.for("react.provider"),lb=Symbol.for("react.context"),Wc=Symbol.for("react.forward_ref"),yd=Symbol.for("react.suspense"),vd=Symbol.for("react.suspense_list"),Mc=Symbol.for("react.memo"),Rn=Symbol.for("react.lazy"),ab=Symbol.for("react.offscreen"),_g=Symbol.iterator;function fi(e){return e===null||typeof e!="object"?null:(e=_g&&e[_g]||e["@@iterator"],typeof e=="function"?e:null)}var Et=Object.assign,Ca;function Ii(e){if(Ca===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);Ca=r&&r[1]||""}return`
`+Ca+e}var za=!1;function Ta(e,r){if(!e||za)return"";za=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(g){var o=g}Reflect.construct(e,[],r)}else{try{r.call()}catch(g){o=g}e.call(r.prototype)}else{try{throw Error()}catch(g){o=g}e()}}catch(g){if(g&&o&&typeof g.stack=="string"){for(var i=g.stack.split(`
`),s=o.stack.split(`
`),l=i.length-1,a=s.length-1;1<=l&&0<=a&&i[l]!==s[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==s[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==s[a]){var d=`
`+i[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=a);break}}}finally{za=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ii(e):""}function yf(e){switch(e.tag){case 5:return Ii(e.type);case 16:return Ii("Lazy");case 13:return Ii("Suspense");case 19:return Ii("SuspenseList");case 0:case 2:case 15:return e=Ta(e.type,!1),e;case 11:return e=Ta(e.type.render,!1),e;case 1:return e=Ta(e.type,!0),e;default:return""}}function jd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Lo:return"Fragment";case Mo:return"Portal";case xd:return"Profiler";case Ac:return"StrictMode";case yd:return"Suspense";case vd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lb:return(e.displayName||"Context")+".Consumer";case sb:return(e._context.displayName||"Context")+".Provider";case Wc:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Mc:return r=e.displayName||null,r!==null?r:jd(e.type)||"Memo";case Rn:r=e._payload,e=e._init;try{return jd(e(r))}catch{}}return null}function vf(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jd(r);case 8:return r===Ac?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Yn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function db(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function jf(e){var r=db(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),o=""+e[r];if(!e.hasOwnProperty(r)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return i.call(this)},set:function(l){o=""+l,s.call(this,l)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Bs(e){e._valueTracker||(e._valueTracker=jf(e))}function cb(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),o="";return e&&(o=db(e)?e.checked?"true":"false":e.value),e=o,e!==n?(r.setValue(e),!0):!1}function Cl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kd(e,r){var n=r.checked;return Et({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $g(e,r){var n=r.defaultValue==null?"":r.defaultValue,o=r.checked!=null?r.checked:r.defaultChecked;n=Yn(r.value!=null?r.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function gb(e,r){r=r.checked,r!=null&&Fc(e,"checked",r,!1)}function wd(e,r){gb(e,r);var n=Yn(r.value),o=r.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Sd(e,r.type,n):r.hasOwnProperty("defaultValue")&&Sd(e,r.type,Yn(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function Pg(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var o=r.type;if(!(o!=="submit"&&o!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Sd(e,r,n){(r!=="number"||Cl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Bi=Array.isArray;function Ko(e,r,n,o){if(e=e.options,r){r={};for(var i=0;i<n.length;i++)r["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=r.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Yn(n),r=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}r!==null||e[i].disabled||(r=e[i])}r!==null&&(r.selected=!0)}}function Cd(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(Ce(91));return Et({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ng(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(Ce(92));if(Bi(n)){if(1<n.length)throw Error(Ce(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:Yn(n)}}function ub(e,r){var n=Yn(r.value),o=Yn(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function Og(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function pb(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zd(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?pb(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Es,bb=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,n,o,i){MSApp.execUnsafeLocalFunction(function(){return e(r,n,o,i)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(Es=Es||document.createElement("div"),Es.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Es.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function es(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var Li={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kf=["Webkit","ms","Moz","O"];Object.keys(Li).forEach(function(e){kf.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),Li[r]=Li[e]})});function hb(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||Li.hasOwnProperty(e)&&Li[e]?(""+r).trim():r+"px"}function mb(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var o=n.indexOf("--")===0,i=hb(n,r[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,i):e[n]=i}}var wf=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Td(e,r){if(r){if(wf[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(Ce(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(Ce(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(Ce(61))}if(r.style!=null&&typeof r.style!="object")throw Error(Ce(62))}}function Id(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bd=null;function Lc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ed=null,Qo=null,qo=null;function Hg(e){if(e=Cs(e)){if(typeof Ed!="function")throw Error(Ce(280));var r=e.stateNode;r&&(r=la(r),Ed(e.stateNode,e.type,r))}}function fb(e){Qo?qo?qo.push(e):qo=[e]:Qo=e}function xb(){if(Qo){var e=Qo,r=qo;if(qo=Qo=null,Hg(e),r)for(e=0;e<r.length;e++)Hg(r[e])}}function yb(e,r){return e(r)}function vb(){}var Ia=!1;function jb(e,r,n){if(Ia)return e(r,n);Ia=!0;try{return yb(e,r,n)}finally{Ia=!1,(Qo!==null||qo!==null)&&(vb(),xb())}}function ts(e,r){var n=e.stateNode;if(n===null)return null;var o=la(n);if(o===null)return null;n=o[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Ce(231,r,typeof n));return n}var Rd=!1;if(fn)try{var xi={};Object.defineProperty(xi,"passive",{get:function(){Rd=!0}}),window.addEventListener("test",xi,xi),window.removeEventListener("test",xi,xi)}catch{Rd=!1}function Sf(e,r,n,o,i,s,l,a,d){var g=Array.prototype.slice.call(arguments,3);try{r.apply(n,g)}catch(h){this.onError(h)}}var _i=!1,zl=null,Tl=!1,Dd=null,Cf={onError:function(e){_i=!0,zl=e}};function zf(e,r,n,o,i,s,l,a,d){_i=!1,zl=null,Sf.apply(Cf,arguments)}function Tf(e,r,n,o,i,s,l,a,d){if(zf.apply(this,arguments),_i){if(_i){var g=zl;_i=!1,zl=null}else throw Error(Ce(198));Tl||(Tl=!0,Dd=g)}}function wo(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,r.flags&4098&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function kb(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function Gg(e){if(wo(e)!==e)throw Error(Ce(188))}function If(e){var r=e.alternate;if(!r){if(r=wo(e),r===null)throw Error(Ce(188));return r!==e?null:e}for(var n=e,o=r;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(o=i.return,o!==null){n=o;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Gg(i),e;if(s===o)return Gg(i),r;s=s.sibling}throw Error(Ce(188))}if(n.return!==o.return)n=i,o=s;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,o=s;break}if(a===o){l=!0,o=i,n=s;break}a=a.sibling}if(!l){for(a=s.child;a;){if(a===n){l=!0,n=s,o=i;break}if(a===o){l=!0,o=s,n=i;break}a=a.sibling}if(!l)throw Error(Ce(189))}}if(n.alternate!==o)throw Error(Ce(190))}if(n.tag!==3)throw Error(Ce(188));return n.stateNode.current===n?e:r}function wb(e){return e=If(e),e!==null?Sb(e):null}function Sb(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=Sb(e);if(r!==null)return r;e=e.sibling}return null}var Cb=jr.unstable_scheduleCallback,Ug=jr.unstable_cancelCallback,Bf=jr.unstable_shouldYield,Ef=jr.unstable_requestPaint,At=jr.unstable_now,Rf=jr.unstable_getCurrentPriorityLevel,_c=jr.unstable_ImmediatePriority,zb=jr.unstable_UserBlockingPriority,Il=jr.unstable_NormalPriority,Df=jr.unstable_LowPriority,Tb=jr.unstable_IdlePriority,na=null,en=null;function Ff(e){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(na,e,void 0,(e.current.flags&128)===128)}catch{}}var Gr=Math.clz32?Math.clz32:Mf,Af=Math.log,Wf=Math.LN2;function Mf(e){return e>>>=0,e===0?32:31-(Af(e)/Wf|0)|0}var Rs=64,Ds=4194304;function Ei(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bl(e,r){var n=e.pendingLanes;if(n===0)return 0;var o=0,i=e.suspendedLanes,s=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?o=Ei(a):(s&=l,s!==0&&(o=Ei(s)))}else l=n&~i,l!==0?o=Ei(l):s!==0&&(o=Ei(s));if(o===0)return 0;if(r!==0&&r!==o&&!(r&i)&&(i=o&-o,s=r&-r,i>=s||i===16&&(s&4194240)!==0))return r;if(o&4&&(o|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=o;0<r;)n=31-Gr(r),i=1<<n,o|=e[n],r&=~i;return o}function Lf(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _f(e,r){for(var n=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-Gr(s),a=1<<l,d=i[l];d===-1?(!(a&n)||a&o)&&(i[l]=Lf(a,r)):d<=r&&(e.expiredLanes|=a),s&=~a}}function Fd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ib(){var e=Rs;return Rs<<=1,!(Rs&4194240)&&(Rs=64),e}function Ba(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function ws(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Gr(r),e[r]=n}function $f(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Gr(n),s=1<<i;r[i]=0,o[i]=-1,e[i]=-1,n&=~s}}function $c(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var o=31-Gr(n),i=1<<o;i&r|e[o]&r&&(e[o]|=r),n&=~i}}var xt=0;function Bb(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Eb,Pc,Rb,Db,Fb,Ad=!1,Fs=[],_n=null,$n=null,Pn=null,rs=new Map,ns=new Map,Fn=[],Pf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vg(e,r){switch(e){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":rs.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ns.delete(r.pointerId)}}function yi(e,r,n,o,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:r,domEventName:n,eventSystemFlags:o,nativeEvent:s,targetContainers:[i]},r!==null&&(r=Cs(r),r!==null&&Pc(r)),e):(e.eventSystemFlags|=o,r=e.targetContainers,i!==null&&r.indexOf(i)===-1&&r.push(i),e)}function Nf(e,r,n,o,i){switch(r){case"focusin":return _n=yi(_n,e,r,n,o,i),!0;case"dragenter":return $n=yi($n,e,r,n,o,i),!0;case"mouseover":return Pn=yi(Pn,e,r,n,o,i),!0;case"pointerover":var s=i.pointerId;return rs.set(s,yi(rs.get(s)||null,e,r,n,o,i)),!0;case"gotpointercapture":return s=i.pointerId,ns.set(s,yi(ns.get(s)||null,e,r,n,o,i)),!0}return!1}function Ab(e){var r=go(e.target);if(r!==null){var n=wo(r);if(n!==null){if(r=n.tag,r===13){if(r=kb(n),r!==null){e.blockedOn=r,Fb(e.priority,function(){Rb(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pl(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=Wd(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Bd=o,n.target.dispatchEvent(o),Bd=null}else return r=Cs(n),r!==null&&Pc(r),e.blockedOn=n,!1;r.shift()}return!0}function Yg(e,r,n){pl(e)&&n.delete(r)}function Of(){Ad=!1,_n!==null&&pl(_n)&&(_n=null),$n!==null&&pl($n)&&($n=null),Pn!==null&&pl(Pn)&&(Pn=null),rs.forEach(Yg),ns.forEach(Yg)}function vi(e,r){e.blockedOn===r&&(e.blockedOn=null,Ad||(Ad=!0,jr.unstable_scheduleCallback(jr.unstable_NormalPriority,Of)))}function os(e){function r(i){return vi(i,e)}if(0<Fs.length){vi(Fs[0],e);for(var n=1;n<Fs.length;n++){var o=Fs[n];o.blockedOn===e&&(o.blockedOn=null)}}for(_n!==null&&vi(_n,e),$n!==null&&vi($n,e),Pn!==null&&vi(Pn,e),rs.forEach(r),ns.forEach(r),n=0;n<Fn.length;n++)o=Fn[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Fn.length&&(n=Fn[0],n.blockedOn===null);)Ab(n),n.blockedOn===null&&Fn.shift()}var Xo=kn.ReactCurrentBatchConfig,El=!0;function Hf(e,r,n,o){var i=xt,s=Xo.transition;Xo.transition=null;try{xt=1,Nc(e,r,n,o)}finally{xt=i,Xo.transition=s}}function Gf(e,r,n,o){var i=xt,s=Xo.transition;Xo.transition=null;try{xt=4,Nc(e,r,n,o)}finally{xt=i,Xo.transition=s}}function Nc(e,r,n,o){if(El){var i=Wd(e,r,n,o);if(i===null)$a(e,r,o,Rl,n),Vg(e,o);else if(Nf(i,e,r,n,o))o.stopPropagation();else if(Vg(e,o),r&4&&-1<Pf.indexOf(e)){for(;i!==null;){var s=Cs(i);if(s!==null&&Eb(s),s=Wd(e,r,n,o),s===null&&$a(e,r,o,Rl,n),s===i)break;i=s}i!==null&&o.stopPropagation()}else $a(e,r,o,null,n)}}var Rl=null;function Wd(e,r,n,o){if(Rl=null,e=Lc(o),e=go(e),e!==null)if(r=wo(e),r===null)e=null;else if(n=r.tag,n===13){if(e=kb(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Rl=e,null}function Wb(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rf()){case _c:return 1;case zb:return 4;case Il:case Df:return 16;case Tb:return 536870912;default:return 16}default:return 16}}var Mn=null,Oc=null,bl=null;function Mb(){if(bl)return bl;var e,r=Oc,n=r.length,o,i="value"in Mn?Mn.value:Mn.textContent,s=i.length;for(e=0;e<n&&r[e]===i[e];e++);var l=n-e;for(o=1;o<=l&&r[n-o]===i[s-o];o++);return bl=i.slice(e,1<o?1-o:void 0)}function hl(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function As(){return!0}function Kg(){return!1}function wr(e){function r(n,o,i,s,l){this._reactName=n,this._targetInst=i,this.type=o,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?As:Kg,this.isPropagationStopped=Kg,this}return Et(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=As)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=As)},persist:function(){},isPersistent:As}),r}var gi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hc=wr(gi),Ss=Et({},gi,{view:0,detail:0}),Uf=wr(Ss),Ea,Ra,ji,oa=Et({},Ss,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ji&&(ji&&e.type==="mousemove"?(Ea=e.screenX-ji.screenX,Ra=e.screenY-ji.screenY):Ra=Ea=0,ji=e),Ea)},movementY:function(e){return"movementY"in e?e.movementY:Ra}}),Qg=wr(oa),Vf=Et({},oa,{dataTransfer:0}),Yf=wr(Vf),Kf=Et({},Ss,{relatedTarget:0}),Da=wr(Kf),Qf=Et({},gi,{animationName:0,elapsedTime:0,pseudoElement:0}),qf=wr(Qf),Xf=Et({},gi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zf=wr(Xf),Jf=Et({},gi,{data:0}),qg=wr(Jf),ex={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nx(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=rx[e])?!!r[e]:!1}function Gc(){return nx}var ox=Et({},Ss,{key:function(e){if(e.key){var r=ex[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=hl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gc,charCode:function(e){return e.type==="keypress"?hl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ix=wr(ox),sx=Et({},oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xg=wr(sx),lx=Et({},Ss,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gc}),ax=wr(lx),dx=Et({},gi,{propertyName:0,elapsedTime:0,pseudoElement:0}),cx=wr(dx),gx=Et({},oa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ux=wr(gx),px=[9,13,27,32],Uc=fn&&"CompositionEvent"in window,$i=null;fn&&"documentMode"in document&&($i=document.documentMode);var bx=fn&&"TextEvent"in window&&!$i,Lb=fn&&(!Uc||$i&&8<$i&&11>=$i),Zg=" ",Jg=!1;function _b(e,r){switch(e){case"keyup":return px.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $b(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _o=!1;function hx(e,r){switch(e){case"compositionend":return $b(r);case"keypress":return r.which!==32?null:(Jg=!0,Zg);case"textInput":return e=r.data,e===Zg&&Jg?null:e;default:return null}}function mx(e,r){if(_o)return e==="compositionend"||!Uc&&_b(e,r)?(e=Mb(),bl=Oc=Mn=null,_o=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Lb&&r.locale!=="ko"?null:r.data;default:return null}}var fx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eu(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!fx[e.type]:r==="textarea"}function Pb(e,r,n,o){fb(o),r=Dl(r,"onChange"),0<r.length&&(n=new Hc("onChange","change",null,n,o),e.push({event:n,listeners:r}))}var Pi=null,is=null;function xx(e){Xb(e,0)}function ia(e){var r=No(e);if(cb(r))return e}function yx(e,r){if(e==="change")return r}var Nb=!1;if(fn){var Fa;if(fn){var Aa="oninput"in document;if(!Aa){var tu=document.createElement("div");tu.setAttribute("oninput","return;"),Aa=typeof tu.oninput=="function"}Fa=Aa}else Fa=!1;Nb=Fa&&(!document.documentMode||9<document.documentMode)}function ru(){Pi&&(Pi.detachEvent("onpropertychange",Ob),is=Pi=null)}function Ob(e){if(e.propertyName==="value"&&ia(is)){var r=[];Pb(r,is,e,Lc(e)),jb(xx,r)}}function vx(e,r,n){e==="focusin"?(ru(),Pi=r,is=n,Pi.attachEvent("onpropertychange",Ob)):e==="focusout"&&ru()}function jx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ia(is)}function kx(e,r){if(e==="click")return ia(r)}function wx(e,r){if(e==="input"||e==="change")return ia(r)}function Sx(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Vr=typeof Object.is=="function"?Object.is:Sx;function ss(e,r){if(Vr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),o=Object.keys(r);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var i=n[o];if(!fd.call(r,i)||!Vr(e[i],r[i]))return!1}return!0}function nu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ou(e,r){var n=nu(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=r&&o>=r)return{node:n,offset:r-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nu(n)}}function Hb(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Hb(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function Gb(){for(var e=window,r=Cl();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=Cl(e.document)}return r}function Vc(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Cx(e){var r=Gb(),n=e.focusedElem,o=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&Hb(n.ownerDocument.documentElement,n)){if(o!==null&&Vc(n)){if(r=o.start,e=o.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(o.start,i);o=o.end===void 0?s:Math.min(o.end,i),!e.extend&&s>o&&(i=o,o=s,s=i),i=ou(n,s);var l=ou(n,o);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(r=r.createRange(),r.setStart(i.node,i.offset),e.removeAllRanges(),s>o?(e.addRange(r),e.extend(l.node,l.offset)):(r.setEnd(l.node,l.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zx=fn&&"documentMode"in document&&11>=document.documentMode,$o=null,Md=null,Ni=null,Ld=!1;function iu(e,r,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ld||$o==null||$o!==Cl(o)||(o=$o,"selectionStart"in o&&Vc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ni&&ss(Ni,o)||(Ni=o,o=Dl(Md,"onSelect"),0<o.length&&(r=new Hc("onSelect","select",null,r,n),e.push({event:r,listeners:o}),r.target=$o)))}function Ws(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var Po={animationend:Ws("Animation","AnimationEnd"),animationiteration:Ws("Animation","AnimationIteration"),animationstart:Ws("Animation","AnimationStart"),transitionend:Ws("Transition","TransitionEnd")},Wa={},Ub={};fn&&(Ub=document.createElement("div").style,"AnimationEvent"in window||(delete Po.animationend.animation,delete Po.animationiteration.animation,delete Po.animationstart.animation),"TransitionEvent"in window||delete Po.transitionend.transition);function sa(e){if(Wa[e])return Wa[e];if(!Po[e])return e;var r=Po[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in Ub)return Wa[e]=r[n];return e}var Vb=sa("animationend"),Yb=sa("animationiteration"),Kb=sa("animationstart"),Qb=sa("transitionend"),qb=new Map,su="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qn(e,r){qb.set(e,r),ko(r,[e])}for(var Ma=0;Ma<su.length;Ma++){var La=su[Ma],Tx=La.toLowerCase(),Ix=La[0].toUpperCase()+La.slice(1);qn(Tx,"on"+Ix)}qn(Vb,"onAnimationEnd");qn(Yb,"onAnimationIteration");qn(Kb,"onAnimationStart");qn("dblclick","onDoubleClick");qn("focusin","onFocus");qn("focusout","onBlur");qn(Qb,"onTransitionEnd");ti("onMouseEnter",["mouseout","mouseover"]);ti("onMouseLeave",["mouseout","mouseover"]);ti("onPointerEnter",["pointerout","pointerover"]);ti("onPointerLeave",["pointerout","pointerover"]);ko("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ko("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ko("onBeforeInput",["compositionend","keypress","textInput","paste"]);ko("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ko("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ko("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ri));function lu(e,r,n){var o=e.type||"unknown-event";e.currentTarget=n,Tf(o,r,void 0,e),e.currentTarget=null}function Xb(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],i=o.event;o=o.listeners;e:{var s=void 0;if(r)for(var l=o.length-1;0<=l;l--){var a=o[l],d=a.instance,g=a.currentTarget;if(a=a.listener,d!==s&&i.isPropagationStopped())break e;lu(i,a,g),s=d}else for(l=0;l<o.length;l++){if(a=o[l],d=a.instance,g=a.currentTarget,a=a.listener,d!==s&&i.isPropagationStopped())break e;lu(i,a,g),s=d}}}if(Tl)throw e=Dd,Tl=!1,Dd=null,e}function St(e,r){var n=r[Od];n===void 0&&(n=r[Od]=new Set);var o=e+"__bubble";n.has(o)||(Zb(r,e,2,!1),n.add(o))}function _a(e,r,n){var o=0;r&&(o|=4),Zb(n,e,o,r)}var Ms="_reactListening"+Math.random().toString(36).slice(2);function ls(e){if(!e[Ms]){e[Ms]=!0,ib.forEach(function(n){n!=="selectionchange"&&(Bx.has(n)||_a(n,!1,e),_a(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Ms]||(r[Ms]=!0,_a("selectionchange",!1,r))}}function Zb(e,r,n,o){switch(Wb(r)){case 1:var i=Hf;break;case 4:i=Gf;break;default:i=Nc}n=i.bind(null,r,n,e),i=void 0,!Rd||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(r,n,{capture:!0,passive:i}):e.addEventListener(r,n,!0):i!==void 0?e.addEventListener(r,n,{passive:i}):e.addEventListener(r,n,!1)}function $a(e,r,n,o,i){var s=o;if(!(r&1)&&!(r&2)&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var a=o.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=o.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;l=l.return}for(;a!==null;){if(l=go(a),l===null)return;if(d=l.tag,d===5||d===6){o=s=l;continue e}a=a.parentNode}}o=o.return}jb(function(){var g=s,h=Lc(n),f=[];e:{var m=qb.get(e);if(m!==void 0){var B=Hc,T=e;switch(e){case"keypress":if(hl(n)===0)break e;case"keydown":case"keyup":B=ix;break;case"focusin":T="focus",B=Da;break;case"focusout":T="blur",B=Da;break;case"beforeblur":case"afterblur":B=Da;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Qg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Yf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=ax;break;case Vb:case Yb:case Kb:B=qf;break;case Qb:B=cx;break;case"scroll":B=Uf;break;case"wheel":B=ux;break;case"copy":case"cut":case"paste":B=Zf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Xg}var R=(r&4)!==0,w=!R&&e==="scroll",p=R?m!==null?m+"Capture":null:m;R=[];for(var b=g,u;b!==null;){u=b;var z=u.stateNode;if(u.tag===5&&z!==null&&(u=z,p!==null&&(z=ts(b,p),z!=null&&R.push(as(b,z,u)))),w)break;b=b.return}0<R.length&&(m=new B(m,T,null,n,h),f.push({event:m,listeners:R}))}}if(!(r&7)){e:{if(m=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",m&&n!==Bd&&(T=n.relatedTarget||n.fromElement)&&(go(T)||T[xn]))break e;if((B||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,B?(T=n.relatedTarget||n.toElement,B=g,T=T?go(T):null,T!==null&&(w=wo(T),T!==w||T.tag!==5&&T.tag!==6)&&(T=null)):(B=null,T=g),B!==T)){if(R=Qg,z="onMouseLeave",p="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(R=Xg,z="onPointerLeave",p="onPointerEnter",b="pointer"),w=B==null?m:No(B),u=T==null?m:No(T),m=new R(z,b+"leave",B,n,h),m.target=w,m.relatedTarget=u,z=null,go(h)===g&&(R=new R(p,b+"enter",T,n,h),R.target=u,R.relatedTarget=w,z=R),w=z,B&&T)t:{for(R=B,p=T,b=0,u=R;u;u=zo(u))b++;for(u=0,z=p;z;z=zo(z))u++;for(;0<b-u;)R=zo(R),b--;for(;0<u-b;)p=zo(p),u--;for(;b--;){if(R===p||p!==null&&R===p.alternate)break t;R=zo(R),p=zo(p)}R=null}else R=null;B!==null&&au(f,m,B,R,!1),T!==null&&w!==null&&au(f,w,T,R,!0)}}e:{if(m=g?No(g):window,B=m.nodeName&&m.nodeName.toLowerCase(),B==="select"||B==="input"&&m.type==="file")var v=yx;else if(eu(m))if(Nb)v=wx;else{v=jx;var I=vx}else(B=m.nodeName)&&B.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(v=kx);if(v&&(v=v(e,g))){Pb(f,v,n,h);break e}I&&I(e,m,g),e==="focusout"&&(I=m._wrapperState)&&I.controlled&&m.type==="number"&&Sd(m,"number",m.value)}switch(I=g?No(g):window,e){case"focusin":(eu(I)||I.contentEditable==="true")&&($o=I,Md=g,Ni=null);break;case"focusout":Ni=Md=$o=null;break;case"mousedown":Ld=!0;break;case"contextmenu":case"mouseup":case"dragend":Ld=!1,iu(f,n,h);break;case"selectionchange":if(zx)break;case"keydown":case"keyup":iu(f,n,h)}var E;if(Uc)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else _o?_b(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Lb&&n.locale!=="ko"&&(_o||S!=="onCompositionStart"?S==="onCompositionEnd"&&_o&&(E=Mb()):(Mn=h,Oc="value"in Mn?Mn.value:Mn.textContent,_o=!0)),I=Dl(g,S),0<I.length&&(S=new qg(S,e,null,n,h),f.push({event:S,listeners:I}),E?S.data=E:(E=$b(n),E!==null&&(S.data=E)))),(E=bx?hx(e,n):mx(e,n))&&(g=Dl(g,"onBeforeInput"),0<g.length&&(h=new qg("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:g}),h.data=E))}Xb(f,r)})}function as(e,r,n){return{instance:e,listener:r,currentTarget:n}}function Dl(e,r){for(var n=r+"Capture",o=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ts(e,n),s!=null&&o.unshift(as(e,s,i)),s=ts(e,r),s!=null&&o.push(as(e,s,i))),e=e.return}return o}function zo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function au(e,r,n,o,i){for(var s=r._reactName,l=[];n!==null&&n!==o;){var a=n,d=a.alternate,g=a.stateNode;if(d!==null&&d===o)break;a.tag===5&&g!==null&&(a=g,i?(d=ts(n,s),d!=null&&l.unshift(as(n,d,a))):i||(d=ts(n,s),d!=null&&l.push(as(n,d,a)))),n=n.return}l.length!==0&&e.push({event:r,listeners:l})}var Ex=/\r\n?/g,Rx=/\u0000|\uFFFD/g;function du(e){return(typeof e=="string"?e:""+e).replace(Ex,`
`).replace(Rx,"")}function Ls(e,r,n){if(r=du(r),du(e)!==r&&n)throw Error(Ce(425))}function Fl(){}var _d=null,$d=null;function Pd(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Nd=typeof setTimeout=="function"?setTimeout:void 0,Dx=typeof clearTimeout=="function"?clearTimeout:void 0,cu=typeof Promise=="function"?Promise:void 0,Fx=typeof queueMicrotask=="function"?queueMicrotask:typeof cu<"u"?function(e){return cu.resolve(null).then(e).catch(Ax)}:Nd;function Ax(e){setTimeout(function(){throw e})}function Pa(e,r){var n=r,o=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(o===0){e.removeChild(i),os(r);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=i}while(n);os(r)}function Nn(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function gu(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var ui=Math.random().toString(36).slice(2),Jr="__reactFiber$"+ui,ds="__reactProps$"+ui,xn="__reactContainer$"+ui,Od="__reactEvents$"+ui,Wx="__reactListeners$"+ui,Mx="__reactHandles$"+ui;function go(e){var r=e[Jr];if(r)return r;for(var n=e.parentNode;n;){if(r=n[xn]||n[Jr]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=gu(e);e!==null;){if(n=e[Jr])return n;e=gu(e)}return r}e=n,n=e.parentNode}return null}function Cs(e){return e=e[Jr]||e[xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function No(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Ce(33))}function la(e){return e[ds]||null}var Hd=[],Oo=-1;function Xn(e){return{current:e}}function Ct(e){0>Oo||(e.current=Hd[Oo],Hd[Oo]=null,Oo--)}function kt(e,r){Oo++,Hd[Oo]=e.current,e.current=r}var Kn={},Jt=Xn(Kn),dr=Xn(!1),fo=Kn;function ri(e,r){var n=e.type.contextTypes;if(!n)return Kn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===r)return o.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=r[s];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),i}function cr(e){return e=e.childContextTypes,e!=null}function Al(){Ct(dr),Ct(Jt)}function uu(e,r,n){if(Jt.current!==Kn)throw Error(Ce(168));kt(Jt,r),kt(dr,n)}function Jb(e,r,n){var o=e.stateNode;if(r=r.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var i in o)if(!(i in r))throw Error(Ce(108,vf(e)||"Unknown",i));return Et({},n,o)}function Wl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kn,fo=Jt.current,kt(Jt,e),kt(dr,dr.current),!0}function pu(e,r,n){var o=e.stateNode;if(!o)throw Error(Ce(169));n?(e=Jb(e,r,fo),o.__reactInternalMemoizedMergedChildContext=e,Ct(dr),Ct(Jt),kt(Jt,e)):Ct(dr),kt(dr,n)}var un=null,aa=!1,Na=!1;function eh(e){un===null?un=[e]:un.push(e)}function Lx(e){aa=!0,eh(e)}function Zn(){if(!Na&&un!==null){Na=!0;var e=0,r=xt;try{var n=un;for(xt=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}un=null,aa=!1}catch(i){throw un!==null&&(un=un.slice(e+1)),Cb(_c,Zn),i}finally{xt=r,Na=!1}}return null}var Ho=[],Go=0,Ml=null,Ll=0,Rr=[],Dr=0,xo=null,bn=1,hn="";function so(e,r){Ho[Go++]=Ll,Ho[Go++]=Ml,Ml=e,Ll=r}function th(e,r,n){Rr[Dr++]=bn,Rr[Dr++]=hn,Rr[Dr++]=xo,xo=e;var o=bn;e=hn;var i=32-Gr(o)-1;o&=~(1<<i),n+=1;var s=32-Gr(r)+i;if(30<s){var l=i-i%5;s=(o&(1<<l)-1).toString(32),o>>=l,i-=l,bn=1<<32-Gr(r)+i|n<<i|o,hn=s+e}else bn=1<<s|n<<i|o,hn=e}function Yc(e){e.return!==null&&(so(e,1),th(e,1,0))}function Kc(e){for(;e===Ml;)Ml=Ho[--Go],Ho[Go]=null,Ll=Ho[--Go],Ho[Go]=null;for(;e===xo;)xo=Rr[--Dr],Rr[Dr]=null,hn=Rr[--Dr],Rr[Dr]=null,bn=Rr[--Dr],Rr[Dr]=null}var vr=null,yr=null,Tt=!1,Hr=null;function rh(e,r){var n=Fr(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function bu(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,vr=e,yr=Nn(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,vr=e,yr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=xo!==null?{id:bn,overflow:hn}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=Fr(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,vr=e,yr=null,!0):!1;default:return!1}}function Gd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ud(e){if(Tt){var r=yr;if(r){var n=r;if(!bu(e,r)){if(Gd(e))throw Error(Ce(418));r=Nn(n.nextSibling);var o=vr;r&&bu(e,r)?rh(o,n):(e.flags=e.flags&-4097|2,Tt=!1,vr=e)}}else{if(Gd(e))throw Error(Ce(418));e.flags=e.flags&-4097|2,Tt=!1,vr=e}}}function hu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vr=e}function _s(e){if(e!==vr)return!1;if(!Tt)return hu(e),Tt=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Pd(e.type,e.memoizedProps)),r&&(r=yr)){if(Gd(e))throw nh(),Error(Ce(418));for(;r;)rh(e,r),r=Nn(r.nextSibling)}if(hu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Ce(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){yr=Nn(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}yr=null}}else yr=vr?Nn(e.stateNode.nextSibling):null;return!0}function nh(){for(var e=yr;e;)e=Nn(e.nextSibling)}function ni(){yr=vr=null,Tt=!1}function Qc(e){Hr===null?Hr=[e]:Hr.push(e)}var _x=kn.ReactCurrentBatchConfig;function ki(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Ce(309));var o=n.stateNode}if(!o)throw Error(Ce(147,e));var i=o,s=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===s?r.ref:(r=function(l){var a=i.refs;l===null?delete a[s]:a[s]=l},r._stringRef=s,r)}if(typeof e!="string")throw Error(Ce(284));if(!n._owner)throw Error(Ce(290,e))}return e}function $s(e,r){throw e=Object.prototype.toString.call(r),Error(Ce(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function mu(e){var r=e._init;return r(e._payload)}function oh(e){function r(p,b){if(e){var u=p.deletions;u===null?(p.deletions=[b],p.flags|=16):u.push(b)}}function n(p,b){if(!e)return null;for(;b!==null;)r(p,b),b=b.sibling;return null}function o(p,b){for(p=new Map;b!==null;)b.key!==null?p.set(b.key,b):p.set(b.index,b),b=b.sibling;return p}function i(p,b){return p=Un(p,b),p.index=0,p.sibling=null,p}function s(p,b,u){return p.index=u,e?(u=p.alternate,u!==null?(u=u.index,u<b?(p.flags|=2,b):u):(p.flags|=2,b)):(p.flags|=1048576,b)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,b,u,z){return b===null||b.tag!==6?(b=Ka(u,p.mode,z),b.return=p,b):(b=i(b,u),b.return=p,b)}function d(p,b,u,z){var v=u.type;return v===Lo?h(p,b,u.props.children,z,u.key):b!==null&&(b.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Rn&&mu(v)===b.type)?(z=i(b,u.props),z.ref=ki(p,b,u),z.return=p,z):(z=kl(u.type,u.key,u.props,null,p.mode,z),z.ref=ki(p,b,u),z.return=p,z)}function g(p,b,u,z){return b===null||b.tag!==4||b.stateNode.containerInfo!==u.containerInfo||b.stateNode.implementation!==u.implementation?(b=Qa(u,p.mode,z),b.return=p,b):(b=i(b,u.children||[]),b.return=p,b)}function h(p,b,u,z,v){return b===null||b.tag!==7?(b=mo(u,p.mode,z,v),b.return=p,b):(b=i(b,u),b.return=p,b)}function f(p,b,u){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Ka(""+b,p.mode,u),b.return=p,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Is:return u=kl(b.type,b.key,b.props,null,p.mode,u),u.ref=ki(p,null,b),u.return=p,u;case Mo:return b=Qa(b,p.mode,u),b.return=p,b;case Rn:var z=b._init;return f(p,z(b._payload),u)}if(Bi(b)||fi(b))return b=mo(b,p.mode,u,null),b.return=p,b;$s(p,b)}return null}function m(p,b,u,z){var v=b!==null?b.key:null;if(typeof u=="string"&&u!==""||typeof u=="number")return v!==null?null:a(p,b,""+u,z);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Is:return u.key===v?d(p,b,u,z):null;case Mo:return u.key===v?g(p,b,u,z):null;case Rn:return v=u._init,m(p,b,v(u._payload),z)}if(Bi(u)||fi(u))return v!==null?null:h(p,b,u,z,null);$s(p,u)}return null}function B(p,b,u,z,v){if(typeof z=="string"&&z!==""||typeof z=="number")return p=p.get(u)||null,a(b,p,""+z,v);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Is:return p=p.get(z.key===null?u:z.key)||null,d(b,p,z,v);case Mo:return p=p.get(z.key===null?u:z.key)||null,g(b,p,z,v);case Rn:var I=z._init;return B(p,b,u,I(z._payload),v)}if(Bi(z)||fi(z))return p=p.get(u)||null,h(b,p,z,v,null);$s(b,z)}return null}function T(p,b,u,z){for(var v=null,I=null,E=b,S=b=0,j=null;E!==null&&S<u.length;S++){E.index>S?(j=E,E=null):j=E.sibling;var Y=m(p,E,u[S],z);if(Y===null){E===null&&(E=j);break}e&&E&&Y.alternate===null&&r(p,E),b=s(Y,b,S),I===null?v=Y:I.sibling=Y,I=Y,E=j}if(S===u.length)return n(p,E),Tt&&so(p,S),v;if(E===null){for(;S<u.length;S++)E=f(p,u[S],z),E!==null&&(b=s(E,b,S),I===null?v=E:I.sibling=E,I=E);return Tt&&so(p,S),v}for(E=o(p,E);S<u.length;S++)j=B(E,p,S,u[S],z),j!==null&&(e&&j.alternate!==null&&E.delete(j.key===null?S:j.key),b=s(j,b,S),I===null?v=j:I.sibling=j,I=j);return e&&E.forEach(function(re){return r(p,re)}),Tt&&so(p,S),v}function R(p,b,u,z){var v=fi(u);if(typeof v!="function")throw Error(Ce(150));if(u=v.call(u),u==null)throw Error(Ce(151));for(var I=v=null,E=b,S=b=0,j=null,Y=u.next();E!==null&&!Y.done;S++,Y=u.next()){E.index>S?(j=E,E=null):j=E.sibling;var re=m(p,E,Y.value,z);if(re===null){E===null&&(E=j);break}e&&E&&re.alternate===null&&r(p,E),b=s(re,b,S),I===null?v=re:I.sibling=re,I=re,E=j}if(Y.done)return n(p,E),Tt&&so(p,S),v;if(E===null){for(;!Y.done;S++,Y=u.next())Y=f(p,Y.value,z),Y!==null&&(b=s(Y,b,S),I===null?v=Y:I.sibling=Y,I=Y);return Tt&&so(p,S),v}for(E=o(p,E);!Y.done;S++,Y=u.next())Y=B(E,p,S,Y.value,z),Y!==null&&(e&&Y.alternate!==null&&E.delete(Y.key===null?S:Y.key),b=s(Y,b,S),I===null?v=Y:I.sibling=Y,I=Y);return e&&E.forEach(function(ee){return r(p,ee)}),Tt&&so(p,S),v}function w(p,b,u,z){if(typeof u=="object"&&u!==null&&u.type===Lo&&u.key===null&&(u=u.props.children),typeof u=="object"&&u!==null){switch(u.$$typeof){case Is:e:{for(var v=u.key,I=b;I!==null;){if(I.key===v){if(v=u.type,v===Lo){if(I.tag===7){n(p,I.sibling),b=i(I,u.props.children),b.return=p,p=b;break e}}else if(I.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Rn&&mu(v)===I.type){n(p,I.sibling),b=i(I,u.props),b.ref=ki(p,I,u),b.return=p,p=b;break e}n(p,I);break}else r(p,I);I=I.sibling}u.type===Lo?(b=mo(u.props.children,p.mode,z,u.key),b.return=p,p=b):(z=kl(u.type,u.key,u.props,null,p.mode,z),z.ref=ki(p,b,u),z.return=p,p=z)}return l(p);case Mo:e:{for(I=u.key;b!==null;){if(b.key===I)if(b.tag===4&&b.stateNode.containerInfo===u.containerInfo&&b.stateNode.implementation===u.implementation){n(p,b.sibling),b=i(b,u.children||[]),b.return=p,p=b;break e}else{n(p,b);break}else r(p,b);b=b.sibling}b=Qa(u,p.mode,z),b.return=p,p=b}return l(p);case Rn:return I=u._init,w(p,b,I(u._payload),z)}if(Bi(u))return T(p,b,u,z);if(fi(u))return R(p,b,u,z);$s(p,u)}return typeof u=="string"&&u!==""||typeof u=="number"?(u=""+u,b!==null&&b.tag===6?(n(p,b.sibling),b=i(b,u),b.return=p,p=b):(n(p,b),b=Ka(u,p.mode,z),b.return=p,p=b),l(p)):n(p,b)}return w}var oi=oh(!0),ih=oh(!1),_l=Xn(null),$l=null,Uo=null,qc=null;function Xc(){qc=Uo=$l=null}function Zc(e){var r=_l.current;Ct(_l),e._currentValue=r}function Vd(e,r,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,o!==null&&(o.childLanes|=r)):o!==null&&(o.childLanes&r)!==r&&(o.childLanes|=r),e===n)break;e=e.return}}function Zo(e,r){$l=e,qc=Uo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&r&&(ar=!0),e.firstContext=null)}function Wr(e){var r=e._currentValue;if(qc!==e)if(e={context:e,memoizedValue:r,next:null},Uo===null){if($l===null)throw Error(Ce(308));Uo=e,$l.dependencies={lanes:0,firstContext:e}}else Uo=Uo.next=e;return r}var uo=null;function Jc(e){uo===null?uo=[e]:uo.push(e)}function sh(e,r,n,o){var i=r.interleaved;return i===null?(n.next=n,Jc(r)):(n.next=i.next,i.next=n),r.interleaved=n,yn(e,o)}function yn(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dn=!1;function eg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lh(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mn(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function On(e,r,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,ct&2){var i=o.pending;return i===null?r.next=r:(r.next=i.next,i.next=r),o.pending=r,yn(e,n)}return i=o.interleaved,i===null?(r.next=r,Jc(o)):(r.next=i.next,i.next=r),o.interleaved=r,yn(e,n)}function ml(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var o=r.lanes;o&=e.pendingLanes,n|=o,r.lanes=n,$c(e,n)}}function fu(e,r){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?i=s=r:s=s.next=r}else i=s=r;n={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function Pl(e,r,n,o){var i=e.updateQueue;Dn=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var d=a,g=d.next;d.next=null,l===null?s=g:l.next=g,l=d;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=g:a.next=g,h.lastBaseUpdate=d))}if(s!==null){var f=i.baseState;l=0,h=g=d=null,a=s;do{var m=a.lane,B=a.eventTime;if((o&m)===m){h!==null&&(h=h.next={eventTime:B,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=e,R=a;switch(m=r,B=n,R.tag){case 1:if(T=R.payload,typeof T=="function"){f=T.call(B,f,m);break e}f=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=R.payload,m=typeof T=="function"?T.call(B,f,m):T,m==null)break e;f=Et({},f,m);break e;case 2:Dn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else B={eventTime:B,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(g=h=B,d=f):h=h.next=B,l|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(d=f),i.baseState=d,i.firstBaseUpdate=g,i.lastBaseUpdate=h,r=i.shared.interleaved,r!==null){i=r;do l|=i.lane,i=i.next;while(i!==r)}else s===null&&(i.shared.lanes=0);vo|=l,e.lanes=l,e.memoizedState=f}}function xu(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var o=e[r],i=o.callback;if(i!==null){if(o.callback=null,o=n,typeof i!="function")throw Error(Ce(191,i));i.call(o)}}}var zs={},tn=Xn(zs),cs=Xn(zs),gs=Xn(zs);function po(e){if(e===zs)throw Error(Ce(174));return e}function tg(e,r){switch(kt(gs,r),kt(cs,e),kt(tn,zs),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:zd(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=zd(r,e)}Ct(tn),kt(tn,r)}function ii(){Ct(tn),Ct(cs),Ct(gs)}function ah(e){po(gs.current);var r=po(tn.current),n=zd(r,e.type);r!==n&&(kt(cs,e),kt(tn,n))}function rg(e){cs.current===e&&(Ct(tn),Ct(cs))}var It=Xn(0);function Nl(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Oa=[];function ng(){for(var e=0;e<Oa.length;e++)Oa[e]._workInProgressVersionPrimary=null;Oa.length=0}var fl=kn.ReactCurrentDispatcher,Ha=kn.ReactCurrentBatchConfig,yo=0,Bt=null,_t=null,Ht=null,Ol=!1,Oi=!1,us=0,$x=0;function Qt(){throw Error(Ce(321))}function og(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!Vr(e[n],r[n]))return!1;return!0}function ig(e,r,n,o,i,s){if(yo=s,Bt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,fl.current=e===null||e.memoizedState===null?Hx:Gx,e=n(o,i),Oi){s=0;do{if(Oi=!1,us=0,25<=s)throw Error(Ce(301));s+=1,Ht=_t=null,r.updateQueue=null,fl.current=Ux,e=n(o,i)}while(Oi)}if(fl.current=Hl,r=_t!==null&&_t.next!==null,yo=0,Ht=_t=Bt=null,Ol=!1,r)throw Error(Ce(300));return e}function sg(){var e=us!==0;return us=0,e}function qr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?Bt.memoizedState=Ht=e:Ht=Ht.next=e,Ht}function Mr(){if(_t===null){var e=Bt.alternate;e=e!==null?e.memoizedState:null}else e=_t.next;var r=Ht===null?Bt.memoizedState:Ht.next;if(r!==null)Ht=r,_t=e;else{if(e===null)throw Error(Ce(310));_t=e,e={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},Ht===null?Bt.memoizedState=Ht=e:Ht=Ht.next=e}return Ht}function ps(e,r){return typeof r=="function"?r(e):r}function Ga(e){var r=Mr(),n=r.queue;if(n===null)throw Error(Ce(311));n.lastRenderedReducer=e;var o=_t,i=o.baseQueue,s=n.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}o.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,o=o.baseState;var a=l=null,d=null,g=s;do{var h=g.lane;if((yo&h)===h)d!==null&&(d=d.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),o=g.hasEagerState?g.eagerState:e(o,g.action);else{var f={lane:h,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};d===null?(a=d=f,l=o):d=d.next=f,Bt.lanes|=h,vo|=h}g=g.next}while(g!==null&&g!==s);d===null?l=o:d.next=a,Vr(o,r.memoizedState)||(ar=!0),r.memoizedState=o,r.baseState=l,r.baseQueue=d,n.lastRenderedState=o}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Bt.lanes|=s,vo|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function Ua(e){var r=Mr(),n=r.queue;if(n===null)throw Error(Ce(311));n.lastRenderedReducer=e;var o=n.dispatch,i=n.pending,s=r.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do s=e(s,l.action),l=l.next;while(l!==i);Vr(s,r.memoizedState)||(ar=!0),r.memoizedState=s,r.baseQueue===null&&(r.baseState=s),n.lastRenderedState=s}return[s,o]}function dh(){}function ch(e,r){var n=Bt,o=Mr(),i=r(),s=!Vr(o.memoizedState,i);if(s&&(o.memoizedState=i,ar=!0),o=o.queue,lg(ph.bind(null,n,o,e),[e]),o.getSnapshot!==r||s||Ht!==null&&Ht.memoizedState.tag&1){if(n.flags|=2048,bs(9,uh.bind(null,n,o,i,r),void 0,null),Gt===null)throw Error(Ce(349));yo&30||gh(n,r,i)}return i}function gh(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=Bt.updateQueue,r===null?(r={lastEffect:null,stores:null},Bt.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function uh(e,r,n,o){r.value=n,r.getSnapshot=o,bh(r)&&hh(e)}function ph(e,r,n){return n(function(){bh(r)&&hh(e)})}function bh(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!Vr(e,n)}catch{return!0}}function hh(e){var r=yn(e,1);r!==null&&Ur(r,e,1,-1)}function yu(e){var r=qr();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ps,lastRenderedState:e},r.queue=e,e=e.dispatch=Ox.bind(null,Bt,e),[r.memoizedState,e]}function bs(e,r,n,o){return e={tag:e,create:r,destroy:n,deps:o,next:null},r=Bt.updateQueue,r===null?(r={lastEffect:null,stores:null},Bt.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,r.lastEffect=e)),e}function mh(){return Mr().memoizedState}function xl(e,r,n,o){var i=qr();Bt.flags|=e,i.memoizedState=bs(1|r,n,void 0,o===void 0?null:o)}function da(e,r,n,o){var i=Mr();o=o===void 0?null:o;var s=void 0;if(_t!==null){var l=_t.memoizedState;if(s=l.destroy,o!==null&&og(o,l.deps)){i.memoizedState=bs(r,n,s,o);return}}Bt.flags|=e,i.memoizedState=bs(1|r,n,s,o)}function vu(e,r){return xl(8390656,8,e,r)}function lg(e,r){return da(2048,8,e,r)}function fh(e,r){return da(4,2,e,r)}function xh(e,r){return da(4,4,e,r)}function yh(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function vh(e,r,n){return n=n!=null?n.concat([e]):null,da(4,4,yh.bind(null,r,e),n)}function ag(){}function jh(e,r){var n=Mr();r=r===void 0?null:r;var o=n.memoizedState;return o!==null&&r!==null&&og(r,o[1])?o[0]:(n.memoizedState=[e,r],e)}function kh(e,r){var n=Mr();r=r===void 0?null:r;var o=n.memoizedState;return o!==null&&r!==null&&og(r,o[1])?o[0]:(e=e(),n.memoizedState=[e,r],e)}function wh(e,r,n){return yo&21?(Vr(n,r)||(n=Ib(),Bt.lanes|=n,vo|=n,e.baseState=!0),r):(e.baseState&&(e.baseState=!1,ar=!0),e.memoizedState=n)}function Px(e,r){var n=xt;xt=n!==0&&4>n?n:4,e(!0);var o=Ha.transition;Ha.transition={};try{e(!1),r()}finally{xt=n,Ha.transition=o}}function Sh(){return Mr().memoizedState}function Nx(e,r,n){var o=Gn(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Ch(e))zh(r,n);else if(n=sh(e,r,n,o),n!==null){var i=rr();Ur(n,e,o,i),Th(n,r,o)}}function Ox(e,r,n){var o=Gn(e),i={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ch(e))zh(r,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=r.lastRenderedReducer,s!==null))try{var l=r.lastRenderedState,a=s(l,n);if(i.hasEagerState=!0,i.eagerState=a,Vr(a,l)){var d=r.interleaved;d===null?(i.next=i,Jc(r)):(i.next=d.next,d.next=i),r.interleaved=i;return}}catch{}finally{}n=sh(e,r,i,o),n!==null&&(i=rr(),Ur(n,e,o,i),Th(n,r,o))}}function Ch(e){var r=e.alternate;return e===Bt||r!==null&&r===Bt}function zh(e,r){Oi=Ol=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function Th(e,r,n){if(n&4194240){var o=r.lanes;o&=e.pendingLanes,n|=o,r.lanes=n,$c(e,n)}}var Hl={readContext:Wr,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},Hx={readContext:Wr,useCallback:function(e,r){return qr().memoizedState=[e,r===void 0?null:r],e},useContext:Wr,useEffect:vu,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,xl(4194308,4,yh.bind(null,r,e),n)},useLayoutEffect:function(e,r){return xl(4194308,4,e,r)},useInsertionEffect:function(e,r){return xl(4,2,e,r)},useMemo:function(e,r){var n=qr();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var o=qr();return r=n!==void 0?n(r):r,o.memoizedState=o.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},o.queue=e,e=e.dispatch=Nx.bind(null,Bt,e),[o.memoizedState,e]},useRef:function(e){var r=qr();return e={current:e},r.memoizedState=e},useState:yu,useDebugValue:ag,useDeferredValue:function(e){return qr().memoizedState=e},useTransition:function(){var e=yu(!1),r=e[0];return e=Px.bind(null,e[1]),qr().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var o=Bt,i=qr();if(Tt){if(n===void 0)throw Error(Ce(407));n=n()}else{if(n=r(),Gt===null)throw Error(Ce(349));yo&30||gh(o,r,n)}i.memoizedState=n;var s={value:n,getSnapshot:r};return i.queue=s,vu(ph.bind(null,o,s,e),[e]),o.flags|=2048,bs(9,uh.bind(null,o,s,n,r),void 0,null),n},useId:function(){var e=qr(),r=Gt.identifierPrefix;if(Tt){var n=hn,o=bn;n=(o&~(1<<32-Gr(o)-1)).toString(32)+n,r=":"+r+"R"+n,n=us++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=$x++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Gx={readContext:Wr,useCallback:jh,useContext:Wr,useEffect:lg,useImperativeHandle:vh,useInsertionEffect:fh,useLayoutEffect:xh,useMemo:kh,useReducer:Ga,useRef:mh,useState:function(){return Ga(ps)},useDebugValue:ag,useDeferredValue:function(e){var r=Mr();return wh(r,_t.memoizedState,e)},useTransition:function(){var e=Ga(ps)[0],r=Mr().memoizedState;return[e,r]},useMutableSource:dh,useSyncExternalStore:ch,useId:Sh,unstable_isNewReconciler:!1},Ux={readContext:Wr,useCallback:jh,useContext:Wr,useEffect:lg,useImperativeHandle:vh,useInsertionEffect:fh,useLayoutEffect:xh,useMemo:kh,useReducer:Ua,useRef:mh,useState:function(){return Ua(ps)},useDebugValue:ag,useDeferredValue:function(e){var r=Mr();return _t===null?r.memoizedState=e:wh(r,_t.memoizedState,e)},useTransition:function(){var e=Ua(ps)[0],r=Mr().memoizedState;return[e,r]},useMutableSource:dh,useSyncExternalStore:ch,useId:Sh,unstable_isNewReconciler:!1};function Pr(e,r){if(e&&e.defaultProps){r=Et({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function Yd(e,r,n,o){r=e.memoizedState,n=n(o,r),n=n==null?r:Et({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ca={isMounted:function(e){return(e=e._reactInternals)?wo(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var o=rr(),i=Gn(e),s=mn(o,i);s.payload=r,n!=null&&(s.callback=n),r=On(e,s,i),r!==null&&(Ur(r,e,i,o),ml(r,e,i))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var o=rr(),i=Gn(e),s=mn(o,i);s.tag=1,s.payload=r,n!=null&&(s.callback=n),r=On(e,s,i),r!==null&&(Ur(r,e,i,o),ml(r,e,i))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=rr(),o=Gn(e),i=mn(n,o);i.tag=2,r!=null&&(i.callback=r),r=On(e,i,o),r!==null&&(Ur(r,e,o,n),ml(r,e,o))}};function ju(e,r,n,o,i,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,l):r.prototype&&r.prototype.isPureReactComponent?!ss(n,o)||!ss(i,s):!0}function Ih(e,r,n){var o=!1,i=Kn,s=r.contextType;return typeof s=="object"&&s!==null?s=Wr(s):(i=cr(r)?fo:Jt.current,o=r.contextTypes,s=(o=o!=null)?ri(e,i):Kn),r=new r(n,s),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ca,e.stateNode=r,r._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),r}function ku(e,r,n,o){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,o),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,o),r.state!==e&&ca.enqueueReplaceState(r,r.state,null)}function Kd(e,r,n,o){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},eg(e);var s=r.contextType;typeof s=="object"&&s!==null?i.context=Wr(s):(s=cr(r)?fo:Jt.current,i.context=ri(e,s)),i.state=e.memoizedState,s=r.getDerivedStateFromProps,typeof s=="function"&&(Yd(e,r,s,n),i.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&ca.enqueueReplaceState(i,i.state,null),Pl(e,n,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function si(e,r){try{var n="",o=r;do n+=yf(o),o=o.return;while(o);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:r,stack:i,digest:null}}function Va(e,r,n){return{value:e,source:null,stack:n??null,digest:r??null}}function Qd(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var Vx=typeof WeakMap=="function"?WeakMap:Map;function Bh(e,r,n){n=mn(-1,n),n.tag=3,n.payload={element:null};var o=r.value;return n.callback=function(){Ul||(Ul=!0,ic=o),Qd(e,r)},n}function Eh(e,r,n){n=mn(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=r.value;n.payload=function(){return o(i)},n.callback=function(){Qd(e,r)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Qd(e,r),typeof o!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var l=r.stack;this.componentDidCatch(r.value,{componentStack:l!==null?l:""})}),n}function wu(e,r,n){var o=e.pingCache;if(o===null){o=e.pingCache=new Vx;var i=new Set;o.set(r,i)}else i=o.get(r),i===void 0&&(i=new Set,o.set(r,i));i.has(n)||(i.add(n),e=sy.bind(null,e,r,n),r.then(e,e))}function Su(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function Cu(e,r,n,o,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=mn(-1,1),r.tag=2,On(n,r,1))),n.lanes|=1),e)}var Yx=kn.ReactCurrentOwner,ar=!1;function er(e,r,n,o){r.child=e===null?ih(r,null,n,o):oi(r,e.child,n,o)}function zu(e,r,n,o,i){n=n.render;var s=r.ref;return Zo(r,i),o=ig(e,r,n,o,s,i),n=sg(),e!==null&&!ar?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,vn(e,r,i)):(Tt&&n&&Yc(r),r.flags|=1,er(e,r,o,i),r.child)}function Tu(e,r,n,o,i){if(e===null){var s=n.type;return typeof s=="function"&&!mg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=s,Rh(e,r,s,o,i)):(e=kl(n.type,null,o,r,r.mode,i),e.ref=r.ref,e.return=r,r.child=e)}if(s=e.child,!(e.lanes&i)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:ss,n(l,o)&&e.ref===r.ref)return vn(e,r,i)}return r.flags|=1,e=Un(s,o),e.ref=r.ref,e.return=r,r.child=e}function Rh(e,r,n,o,i){if(e!==null){var s=e.memoizedProps;if(ss(s,o)&&e.ref===r.ref)if(ar=!1,r.pendingProps=o=s,(e.lanes&i)!==0)e.flags&131072&&(ar=!0);else return r.lanes=e.lanes,vn(e,r,i)}return qd(e,r,n,o,i)}function Dh(e,r,n){var o=r.pendingProps,i=o.children,s=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Yo,xr),xr|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,kt(Yo,xr),xr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:n,kt(Yo,xr),xr|=o}else s!==null?(o=s.baseLanes|n,r.memoizedState=null):o=n,kt(Yo,xr),xr|=o;return er(e,r,i,n),r.child}function Fh(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function qd(e,r,n,o,i){var s=cr(n)?fo:Jt.current;return s=ri(r,s),Zo(r,i),n=ig(e,r,n,o,s,i),o=sg(),e!==null&&!ar?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,vn(e,r,i)):(Tt&&o&&Yc(r),r.flags|=1,er(e,r,n,i),r.child)}function Iu(e,r,n,o,i){if(cr(n)){var s=!0;Wl(r)}else s=!1;if(Zo(r,i),r.stateNode===null)yl(e,r),Ih(r,n,o),Kd(r,n,o,i),o=!0;else if(e===null){var l=r.stateNode,a=r.memoizedProps;l.props=a;var d=l.context,g=n.contextType;typeof g=="object"&&g!==null?g=Wr(g):(g=cr(n)?fo:Jt.current,g=ri(r,g));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==o||d!==g)&&ku(r,l,o,g),Dn=!1;var m=r.memoizedState;l.state=m,Pl(r,o,l,i),d=r.memoizedState,a!==o||m!==d||dr.current||Dn?(typeof h=="function"&&(Yd(r,n,h,o),d=r.memoizedState),(a=Dn||ju(r,n,a,o,m,d,g))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(r.flags|=4194308)):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=o,r.memoizedState=d),l.props=o,l.state=d,l.context=g,o=a):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),o=!1)}else{l=r.stateNode,lh(e,r),a=r.memoizedProps,g=r.type===r.elementType?a:Pr(r.type,a),l.props=g,f=r.pendingProps,m=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=Wr(d):(d=cr(n)?fo:Jt.current,d=ri(r,d));var B=n.getDerivedStateFromProps;(h=typeof B=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||m!==d)&&ku(r,l,o,d),Dn=!1,m=r.memoizedState,l.state=m,Pl(r,o,l,i);var T=r.memoizedState;a!==f||m!==T||dr.current||Dn?(typeof B=="function"&&(Yd(r,n,B,o),T=r.memoizedState),(g=Dn||ju(r,n,g,o,m,T,d)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,T,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,T,d)),typeof l.componentDidUpdate=="function"&&(r.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(r.flags|=1024),r.memoizedProps=o,r.memoizedState=T),l.props=o,l.state=T,l.context=d,o=g):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(r.flags|=1024),o=!1)}return Xd(e,r,n,o,s,i)}function Xd(e,r,n,o,i,s){Fh(e,r);var l=(r.flags&128)!==0;if(!o&&!l)return i&&pu(r,n,!1),vn(e,r,s);o=r.stateNode,Yx.current=r;var a=l&&typeof n.getDerivedStateFromError!="function"?null:o.render();return r.flags|=1,e!==null&&l?(r.child=oi(r,e.child,null,s),r.child=oi(r,null,a,s)):er(e,r,a,s),r.memoizedState=o.state,i&&pu(r,n,!0),r.child}function Ah(e){var r=e.stateNode;r.pendingContext?uu(e,r.pendingContext,r.pendingContext!==r.context):r.context&&uu(e,r.context,!1),tg(e,r.containerInfo)}function Bu(e,r,n,o,i){return ni(),Qc(i),r.flags|=256,er(e,r,n,o),r.child}var Zd={dehydrated:null,treeContext:null,retryLane:0};function Jd(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wh(e,r,n){var o=r.pendingProps,i=It.current,s=!1,l=(r.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),kt(It,i&1),e===null)return Ud(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(r.mode&1?e.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(l=o.children,e=o.fallback,s?(o=r.mode,s=r.child,l={mode:"hidden",children:l},!(o&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=pa(l,o,0,null),e=mo(e,o,n,null),s.return=r,e.return=r,s.sibling=e,r.child=s,r.child.memoizedState=Jd(n),r.memoizedState=Zd,e):dg(r,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Kx(e,r,l,o,a,i,n);if(s){s=o.fallback,l=r.mode,i=e.child,a=i.sibling;var d={mode:"hidden",children:o.children};return!(l&1)&&r.child!==i?(o=r.child,o.childLanes=0,o.pendingProps=d,r.deletions=null):(o=Un(i,d),o.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Un(a,s):(s=mo(s,l,n,null),s.flags|=2),s.return=r,o.return=r,o.sibling=s,r.child=o,o=s,s=r.child,l=e.child.memoizedState,l=l===null?Jd(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,r.memoizedState=Zd,o}return s=e.child,e=s.sibling,o=Un(s,{mode:"visible",children:o.children}),!(r.mode&1)&&(o.lanes=n),o.return=r,o.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=o,r.memoizedState=null,o}function dg(e,r){return r=pa({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Ps(e,r,n,o){return o!==null&&Qc(o),oi(r,e.child,null,n),e=dg(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Kx(e,r,n,o,i,s,l){if(n)return r.flags&256?(r.flags&=-257,o=Va(Error(Ce(422))),Ps(e,r,l,o)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(s=o.fallback,i=r.mode,o=pa({mode:"visible",children:o.children},i,0,null),s=mo(s,i,l,null),s.flags|=2,o.return=r,s.return=r,o.sibling=s,r.child=o,r.mode&1&&oi(r,e.child,null,l),r.child.memoizedState=Jd(l),r.memoizedState=Zd,s);if(!(r.mode&1))return Ps(e,r,l,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var a=o.dgst;return o=a,s=Error(Ce(419)),o=Va(s,o,void 0),Ps(e,r,l,o)}if(a=(l&e.childLanes)!==0,ar||a){if(o=Gt,o!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(o.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,yn(e,i),Ur(o,e,i,-1))}return hg(),o=Va(Error(Ce(421))),Ps(e,r,l,o)}return i.data==="$?"?(r.flags|=128,r.child=e.child,r=ly.bind(null,e),i._reactRetry=r,null):(e=s.treeContext,yr=Nn(i.nextSibling),vr=r,Tt=!0,Hr=null,e!==null&&(Rr[Dr++]=bn,Rr[Dr++]=hn,Rr[Dr++]=xo,bn=e.id,hn=e.overflow,xo=r),r=dg(r,o.children),r.flags|=4096,r)}function Eu(e,r,n){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r),Vd(e.return,r,n)}function Ya(e,r,n,o,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:i}:(s.isBackwards=r,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=n,s.tailMode=i)}function Mh(e,r,n){var o=r.pendingProps,i=o.revealOrder,s=o.tail;if(er(e,r,o.children,n),o=It.current,o&2)o=o&1|2,r.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Eu(e,n,r);else if(e.tag===19)Eu(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(kt(It,o),!(r.mode&1))r.memoizedState=null;else switch(i){case"forwards":for(n=r.child,i=null;n!==null;)e=n.alternate,e!==null&&Nl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=r.child,r.child=null):(i=n.sibling,n.sibling=null),Ya(r,!1,i,n,s);break;case"backwards":for(n=null,i=r.child,r.child=null;i!==null;){if(e=i.alternate,e!==null&&Nl(e)===null){r.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ya(r,!0,n,null,s);break;case"together":Ya(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function yl(e,r){!(r.mode&1)&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function vn(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),vo|=r.lanes,!(n&r.childLanes))return null;if(e!==null&&r.child!==e.child)throw Error(Ce(153));if(r.child!==null){for(e=r.child,n=Un(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=Un(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function Qx(e,r,n){switch(r.tag){case 3:Ah(r),ni();break;case 5:ah(r);break;case 1:cr(r.type)&&Wl(r);break;case 4:tg(r,r.stateNode.containerInfo);break;case 10:var o=r.type._context,i=r.memoizedProps.value;kt(_l,o._currentValue),o._currentValue=i;break;case 13:if(o=r.memoizedState,o!==null)return o.dehydrated!==null?(kt(It,It.current&1),r.flags|=128,null):n&r.child.childLanes?Wh(e,r,n):(kt(It,It.current&1),e=vn(e,r,n),e!==null?e.sibling:null);kt(It,It.current&1);break;case 19:if(o=(n&r.childLanes)!==0,e.flags&128){if(o)return Mh(e,r,n);r.flags|=128}if(i=r.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),kt(It,It.current),o)break;return null;case 22:case 23:return r.lanes=0,Dh(e,r,n)}return vn(e,r,n)}var Lh,ec,_h,$h;Lh=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ec=function(){};_h=function(e,r,n,o){var i=e.memoizedProps;if(i!==o){e=r.stateNode,po(tn.current);var s=null;switch(n){case"input":i=kd(e,i),o=kd(e,o),s=[];break;case"select":i=Et({},i,{value:void 0}),o=Et({},o,{value:void 0}),s=[];break;case"textarea":i=Cd(e,i),o=Cd(e,o),s=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Fl)}Td(n,o);var l;n=null;for(g in i)if(!o.hasOwnProperty(g)&&i.hasOwnProperty(g)&&i[g]!=null)if(g==="style"){var a=i[g];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(Ji.hasOwnProperty(g)?s||(s=[]):(s=s||[]).push(g,null));for(g in o){var d=o[g];if(a=i!=null?i[g]:void 0,o.hasOwnProperty(g)&&d!==a&&(d!=null||a!=null))if(g==="style")if(a){for(l in a)!a.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&a[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(s||(s=[]),s.push(g,n)),n=d;else g==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(s=s||[]).push(g,d)):g==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(g,""+d):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(Ji.hasOwnProperty(g)?(d!=null&&g==="onScroll"&&St("scroll",e),s||a===d||(s=[])):(s=s||[]).push(g,d))}n&&(s=s||[]).push("style",n);var g=s;(r.updateQueue=g)&&(r.flags|=4)}};$h=function(e,r,n,o){n!==o&&(r.flags|=4)};function wi(e,r){if(!Tt)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function qt(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(r)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=n,r}function qx(e,r,n){var o=r.pendingProps;switch(Kc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(r),null;case 1:return cr(r.type)&&Al(),qt(r),null;case 3:return o=r.stateNode,ii(),Ct(dr),Ct(Jt),ng(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(_s(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Hr!==null&&(ac(Hr),Hr=null))),ec(e,r),qt(r),null;case 5:rg(r);var i=po(gs.current);if(n=r.type,e!==null&&r.stateNode!=null)_h(e,r,n,o,i),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!o){if(r.stateNode===null)throw Error(Ce(166));return qt(r),null}if(e=po(tn.current),_s(r)){o=r.stateNode,n=r.type;var s=r.memoizedProps;switch(o[Jr]=r,o[ds]=s,e=(r.mode&1)!==0,n){case"dialog":St("cancel",o),St("close",o);break;case"iframe":case"object":case"embed":St("load",o);break;case"video":case"audio":for(i=0;i<Ri.length;i++)St(Ri[i],o);break;case"source":St("error",o);break;case"img":case"image":case"link":St("error",o),St("load",o);break;case"details":St("toggle",o);break;case"input":$g(o,s),St("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},St("invalid",o);break;case"textarea":Ng(o,s),St("invalid",o)}Td(n,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="children"?typeof a=="string"?o.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ls(o.textContent,a,e),i=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ls(o.textContent,a,e),i=["children",""+a]):Ji.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&St("scroll",o)}switch(n){case"input":Bs(o),Pg(o,s,!0);break;case"textarea":Bs(o),Og(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=Fl)}o=i,r.updateQueue=o,o!==null&&(r.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pb(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=l.createElement(n,{is:o.is}):(e=l.createElement(n),n==="select"&&(l=e,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):e=l.createElementNS(e,n),e[Jr]=r,e[ds]=o,Lh(e,r,!1,!1),r.stateNode=e;e:{switch(l=Id(n,o),n){case"dialog":St("cancel",e),St("close",e),i=o;break;case"iframe":case"object":case"embed":St("load",e),i=o;break;case"video":case"audio":for(i=0;i<Ri.length;i++)St(Ri[i],e);i=o;break;case"source":St("error",e),i=o;break;case"img":case"image":case"link":St("error",e),St("load",e),i=o;break;case"details":St("toggle",e),i=o;break;case"input":$g(e,o),i=kd(e,o),St("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=Et({},o,{value:void 0}),St("invalid",e);break;case"textarea":Ng(e,o),i=Cd(e,o),St("invalid",e);break;default:i=o}Td(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var d=a[s];s==="style"?mb(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&bb(e,d)):s==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&es(e,d):typeof d=="number"&&es(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ji.hasOwnProperty(s)?d!=null&&s==="onScroll"&&St("scroll",e):d!=null&&Fc(e,s,d,l))}switch(n){case"input":Bs(e),Pg(e,o,!1);break;case"textarea":Bs(e),Og(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Yn(o.value));break;case"select":e.multiple=!!o.multiple,s=o.value,s!=null?Ko(e,!!o.multiple,s,!1):o.defaultValue!=null&&Ko(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Fl)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return qt(r),null;case 6:if(e&&r.stateNode!=null)$h(e,r,e.memoizedProps,o);else{if(typeof o!="string"&&r.stateNode===null)throw Error(Ce(166));if(n=po(gs.current),po(tn.current),_s(r)){if(o=r.stateNode,n=r.memoizedProps,o[Jr]=r,(s=o.nodeValue!==n)&&(e=vr,e!==null))switch(e.tag){case 3:Ls(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ls(o.nodeValue,n,(e.mode&1)!==0)}s&&(r.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Jr]=r,r.stateNode=o}return qt(r),null;case 13:if(Ct(It),o=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Tt&&yr!==null&&r.mode&1&&!(r.flags&128))nh(),ni(),r.flags|=98560,s=!1;else if(s=_s(r),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(Ce(318));if(s=r.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Ce(317));s[Jr]=r}else ni(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;qt(r),s=!1}else Hr!==null&&(ac(Hr),Hr=null),s=!0;if(!s)return r.flags&65536?r:null}return r.flags&128?(r.lanes=n,r):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(r.child.flags|=8192,r.mode&1&&(e===null||It.current&1?$t===0&&($t=3):hg())),r.updateQueue!==null&&(r.flags|=4),qt(r),null);case 4:return ii(),ec(e,r),e===null&&ls(r.stateNode.containerInfo),qt(r),null;case 10:return Zc(r.type._context),qt(r),null;case 17:return cr(r.type)&&Al(),qt(r),null;case 19:if(Ct(It),s=r.memoizedState,s===null)return qt(r),null;if(o=(r.flags&128)!==0,l=s.rendering,l===null)if(o)wi(s,!1);else{if($t!==0||e!==null&&e.flags&128)for(e=r.child;e!==null;){if(l=Nl(e),l!==null){for(r.flags|=128,wi(s,!1),o=l.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),r.subtreeFlags=0,o=n,n=r.child;n!==null;)s=n,e=o,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return kt(It,It.current&1|2),r.child}e=e.sibling}s.tail!==null&&At()>li&&(r.flags|=128,o=!0,wi(s,!1),r.lanes=4194304)}else{if(!o)if(e=Nl(l),e!==null){if(r.flags|=128,o=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),wi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!Tt)return qt(r),null}else 2*At()-s.renderingStartTime>li&&n!==1073741824&&(r.flags|=128,o=!0,wi(s,!1),r.lanes=4194304);s.isBackwards?(l.sibling=r.child,r.child=l):(n=s.last,n!==null?n.sibling=l:r.child=l,s.last=l)}return s.tail!==null?(r=s.tail,s.rendering=r,s.tail=r.sibling,s.renderingStartTime=At(),r.sibling=null,n=It.current,kt(It,o?n&1|2:n&1),r):(qt(r),null);case 22:case 23:return bg(),o=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(r.flags|=8192),o&&r.mode&1?xr&1073741824&&(qt(r),r.subtreeFlags&6&&(r.flags|=8192)):qt(r),null;case 24:return null;case 25:return null}throw Error(Ce(156,r.tag))}function Xx(e,r){switch(Kc(r),r.tag){case 1:return cr(r.type)&&Al(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return ii(),Ct(dr),Ct(Jt),ng(),e=r.flags,e&65536&&!(e&128)?(r.flags=e&-65537|128,r):null;case 5:return rg(r),null;case 13:if(Ct(It),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(Ce(340));ni()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return Ct(It),null;case 4:return ii(),null;case 10:return Zc(r.type._context),null;case 22:case 23:return bg(),null;case 24:return null;default:return null}}var Ns=!1,Zt=!1,Zx=typeof WeakSet=="function"?WeakSet:Set,_e=null;function Vo(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){Ft(e,r,o)}else n.current=null}function tc(e,r,n){try{n()}catch(o){Ft(e,r,o)}}var Ru=!1;function Jx(e,r){if(_d=El,e=Gb(),Vc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var i=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,a=-1,d=-1,g=0,h=0,f=e,m=null;t:for(;;){for(var B;f!==n||i!==0&&f.nodeType!==3||(a=l+i),f!==s||o!==0&&f.nodeType!==3||(d=l+o),f.nodeType===3&&(l+=f.nodeValue.length),(B=f.firstChild)!==null;)m=f,f=B;for(;;){if(f===e)break t;if(m===n&&++g===i&&(a=l),m===s&&++h===o&&(d=l),(B=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=B}n=a===-1||d===-1?null:{start:a,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for($d={focusedElem:e,selectionRange:n},El=!1,_e=r;_e!==null;)if(r=_e,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,_e=e;else for(;_e!==null;){r=_e;try{var T=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var R=T.memoizedProps,w=T.memoizedState,p=r.stateNode,b=p.getSnapshotBeforeUpdate(r.elementType===r.type?R:Pr(r.type,R),w);p.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var u=r.stateNode.containerInfo;u.nodeType===1?u.textContent="":u.nodeType===9&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Ce(163))}}catch(z){Ft(r,r.return,z)}if(e=r.sibling,e!==null){e.return=r.return,_e=e;break}_e=r.return}return T=Ru,Ru=!1,T}function Hi(e,r,n){var o=r.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&tc(r,n,s)}i=i.next}while(i!==o)}}function ga(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==r)}}function rc(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function Ph(e){var r=e.alternate;r!==null&&(e.alternate=null,Ph(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Jr],delete r[ds],delete r[Od],delete r[Wx],delete r[Mx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Nh(e){return e.tag===5||e.tag===3||e.tag===4}function Du(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nc(e,r,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=Fl));else if(o!==4&&(e=e.child,e!==null))for(nc(e,r,n),e=e.sibling;e!==null;)nc(e,r,n),e=e.sibling}function oc(e,r,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(oc(e,r,n),e=e.sibling;e!==null;)oc(e,r,n),e=e.sibling}var Ut=null,Nr=!1;function zn(e,r,n){for(n=n.child;n!==null;)Oh(e,r,n),n=n.sibling}function Oh(e,r,n){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(na,n)}catch{}switch(n.tag){case 5:Zt||Vo(n,r);case 6:var o=Ut,i=Nr;Ut=null,zn(e,r,n),Ut=o,Nr=i,Ut!==null&&(Nr?(e=Ut,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(Nr?(e=Ut,n=n.stateNode,e.nodeType===8?Pa(e.parentNode,n):e.nodeType===1&&Pa(e,n),os(e)):Pa(Ut,n.stateNode));break;case 4:o=Ut,i=Nr,Ut=n.stateNode.containerInfo,Nr=!0,zn(e,r,n),Ut=o,Nr=i;break;case 0:case 11:case 14:case 15:if(!Zt&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&tc(n,r,l),i=i.next}while(i!==o)}zn(e,r,n);break;case 1:if(!Zt&&(Vo(n,r),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(a){Ft(n,r,a)}zn(e,r,n);break;case 21:zn(e,r,n);break;case 22:n.mode&1?(Zt=(o=Zt)||n.memoizedState!==null,zn(e,r,n),Zt=o):zn(e,r,n);break;default:zn(e,r,n)}}function Fu(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Zx),r.forEach(function(o){var i=ay.bind(null,e,o);n.has(o)||(n.add(o),o.then(i,i))})}}function Lr(e,r){var n=r.deletions;if(n!==null)for(var o=0;o<n.length;o++){var i=n[o];try{var s=e,l=r,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ut=a.stateNode,Nr=!1;break e;case 3:Ut=a.stateNode.containerInfo,Nr=!0;break e;case 4:Ut=a.stateNode.containerInfo,Nr=!0;break e}a=a.return}if(Ut===null)throw Error(Ce(160));Oh(s,l,i),Ut=null,Nr=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(g){Ft(i,r,g)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Hh(r,e),r=r.sibling}function Hh(e,r){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Lr(r,e),Kr(e),o&4){try{Hi(3,e,e.return),ga(3,e)}catch(R){Ft(e,e.return,R)}try{Hi(5,e,e.return)}catch(R){Ft(e,e.return,R)}}break;case 1:Lr(r,e),Kr(e),o&512&&n!==null&&Vo(n,n.return);break;case 5:if(Lr(r,e),Kr(e),o&512&&n!==null&&Vo(n,n.return),e.flags&32){var i=e.stateNode;try{es(i,"")}catch(R){Ft(e,e.return,R)}}if(o&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,l=n!==null?n.memoizedProps:s,a=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&gb(i,s),Id(a,l);var g=Id(a,s);for(l=0;l<d.length;l+=2){var h=d[l],f=d[l+1];h==="style"?mb(i,f):h==="dangerouslySetInnerHTML"?bb(i,f):h==="children"?es(i,f):Fc(i,h,f,g)}switch(a){case"input":wd(i,s);break;case"textarea":ub(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var B=s.value;B!=null?Ko(i,!!s.multiple,B,!1):m!==!!s.multiple&&(s.defaultValue!=null?Ko(i,!!s.multiple,s.defaultValue,!0):Ko(i,!!s.multiple,s.multiple?[]:"",!1))}i[ds]=s}catch(R){Ft(e,e.return,R)}}break;case 6:if(Lr(r,e),Kr(e),o&4){if(e.stateNode===null)throw Error(Ce(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(R){Ft(e,e.return,R)}}break;case 3:if(Lr(r,e),Kr(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{os(r.containerInfo)}catch(R){Ft(e,e.return,R)}break;case 4:Lr(r,e),Kr(e);break;case 13:Lr(r,e),Kr(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ug=At())),o&4&&Fu(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Zt=(g=Zt)||h,Lr(r,e),Zt=g):Lr(r,e),Kr(e),o&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!h&&e.mode&1)for(_e=e,h=e.child;h!==null;){for(f=_e=h;_e!==null;){switch(m=_e,B=m.child,m.tag){case 0:case 11:case 14:case 15:Hi(4,m,m.return);break;case 1:Vo(m,m.return);var T=m.stateNode;if(typeof T.componentWillUnmount=="function"){o=m,n=m.return;try{r=o,T.props=r.memoizedProps,T.state=r.memoizedState,T.componentWillUnmount()}catch(R){Ft(o,n,R)}}break;case 5:Vo(m,m.return);break;case 22:if(m.memoizedState!==null){Wu(f);continue}}B!==null?(B.return=m,_e=B):Wu(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,g?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,d=f.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=hb("display",l))}catch(R){Ft(e,e.return,R)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=g?"":f.memoizedProps}catch(R){Ft(e,e.return,R)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Lr(r,e),Kr(e),o&4&&Fu(e);break;case 21:break;default:Lr(r,e),Kr(e)}}function Kr(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(Nh(n)){var o=n;break e}n=n.return}throw Error(Ce(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(es(i,""),o.flags&=-33);var s=Du(e);oc(e,s,i);break;case 3:case 4:var l=o.stateNode.containerInfo,a=Du(e);nc(e,a,l);break;default:throw Error(Ce(161))}}catch(d){Ft(e,e.return,d)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function ey(e,r,n){_e=e,Gh(e)}function Gh(e,r,n){for(var o=(e.mode&1)!==0;_e!==null;){var i=_e,s=i.child;if(i.tag===22&&o){var l=i.memoizedState!==null||Ns;if(!l){var a=i.alternate,d=a!==null&&a.memoizedState!==null||Zt;a=Ns;var g=Zt;if(Ns=l,(Zt=d)&&!g)for(_e=i;_e!==null;)l=_e,d=l.child,l.tag===22&&l.memoizedState!==null?Mu(i):d!==null?(d.return=l,_e=d):Mu(i);for(;s!==null;)_e=s,Gh(s),s=s.sibling;_e=i,Ns=a,Zt=g}Au(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,_e=s):Au(e)}}function Au(e){for(;_e!==null;){var r=_e;if(r.flags&8772){var n=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Zt||ga(5,r);break;case 1:var o=r.stateNode;if(r.flags&4&&!Zt)if(n===null)o.componentDidMount();else{var i=r.elementType===r.type?n.memoizedProps:Pr(r.type,n.memoizedProps);o.componentDidUpdate(i,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=r.updateQueue;s!==null&&xu(r,s,o);break;case 3:var l=r.updateQueue;if(l!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}xu(r,l,n)}break;case 5:var a=r.stateNode;if(n===null&&r.flags&4){n=a;var d=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var g=r.alternate;if(g!==null){var h=g.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&os(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Ce(163))}Zt||r.flags&512&&rc(r)}catch(m){Ft(r,r.return,m)}}if(r===e){_e=null;break}if(n=r.sibling,n!==null){n.return=r.return,_e=n;break}_e=r.return}}function Wu(e){for(;_e!==null;){var r=_e;if(r===e){_e=null;break}var n=r.sibling;if(n!==null){n.return=r.return,_e=n;break}_e=r.return}}function Mu(e){for(;_e!==null;){var r=_e;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{ga(4,r)}catch(d){Ft(r,n,d)}break;case 1:var o=r.stateNode;if(typeof o.componentDidMount=="function"){var i=r.return;try{o.componentDidMount()}catch(d){Ft(r,i,d)}}var s=r.return;try{rc(r)}catch(d){Ft(r,s,d)}break;case 5:var l=r.return;try{rc(r)}catch(d){Ft(r,l,d)}}}catch(d){Ft(r,r.return,d)}if(r===e){_e=null;break}var a=r.sibling;if(a!==null){a.return=r.return,_e=a;break}_e=r.return}}var ty=Math.ceil,Gl=kn.ReactCurrentDispatcher,cg=kn.ReactCurrentOwner,Ar=kn.ReactCurrentBatchConfig,ct=0,Gt=null,Wt=null,Yt=0,xr=0,Yo=Xn(0),$t=0,hs=null,vo=0,ua=0,gg=0,Gi=null,lr=null,ug=0,li=1/0,dn=null,Ul=!1,ic=null,Hn=null,Os=!1,Ln=null,Vl=0,Ui=0,sc=null,vl=-1,jl=0;function rr(){return ct&6?At():vl!==-1?vl:vl=At()}function Gn(e){return e.mode&1?ct&2&&Yt!==0?Yt&-Yt:_x.transition!==null?(jl===0&&(jl=Ib()),jl):(e=xt,e!==0||(e=window.event,e=e===void 0?16:Wb(e.type)),e):1}function Ur(e,r,n,o){if(50<Ui)throw Ui=0,sc=null,Error(Ce(185));ws(e,n,o),(!(ct&2)||e!==Gt)&&(e===Gt&&(!(ct&2)&&(ua|=n),$t===4&&An(e,Yt)),gr(e,o),n===1&&ct===0&&!(r.mode&1)&&(li=At()+500,aa&&Zn()))}function gr(e,r){var n=e.callbackNode;_f(e,r);var o=Bl(e,e===Gt?Yt:0);if(o===0)n!==null&&Ug(n),e.callbackNode=null,e.callbackPriority=0;else if(r=o&-o,e.callbackPriority!==r){if(n!=null&&Ug(n),r===1)e.tag===0?Lx(Lu.bind(null,e)):eh(Lu.bind(null,e)),Fx(function(){!(ct&6)&&Zn()}),n=null;else{switch(Bb(o)){case 1:n=_c;break;case 4:n=zb;break;case 16:n=Il;break;case 536870912:n=Tb;break;default:n=Il}n=Zh(n,Uh.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function Uh(e,r){if(vl=-1,jl=0,ct&6)throw Error(Ce(327));var n=e.callbackNode;if(Jo()&&e.callbackNode!==n)return null;var o=Bl(e,e===Gt?Yt:0);if(o===0)return null;if(o&30||o&e.expiredLanes||r)r=Yl(e,o);else{r=o;var i=ct;ct|=2;var s=Yh();(Gt!==e||Yt!==r)&&(dn=null,li=At()+500,ho(e,r));do try{oy();break}catch(a){Vh(e,a)}while(!0);Xc(),Gl.current=s,ct=i,Wt!==null?r=0:(Gt=null,Yt=0,r=$t)}if(r!==0){if(r===2&&(i=Fd(e),i!==0&&(o=i,r=lc(e,i))),r===1)throw n=hs,ho(e,0),An(e,o),gr(e,At()),n;if(r===6)An(e,o);else{if(i=e.current.alternate,!(o&30)&&!ry(i)&&(r=Yl(e,o),r===2&&(s=Fd(e),s!==0&&(o=s,r=lc(e,s))),r===1))throw n=hs,ho(e,0),An(e,o),gr(e,At()),n;switch(e.finishedWork=i,e.finishedLanes=o,r){case 0:case 1:throw Error(Ce(345));case 2:lo(e,lr,dn);break;case 3:if(An(e,o),(o&130023424)===o&&(r=ug+500-At(),10<r)){if(Bl(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){rr(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Nd(lo.bind(null,e,lr,dn),r);break}lo(e,lr,dn);break;case 4:if(An(e,o),(o&4194240)===o)break;for(r=e.eventTimes,i=-1;0<o;){var l=31-Gr(o);s=1<<l,l=r[l],l>i&&(i=l),o&=~s}if(o=i,o=At()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*ty(o/1960))-o,10<o){e.timeoutHandle=Nd(lo.bind(null,e,lr,dn),o);break}lo(e,lr,dn);break;case 5:lo(e,lr,dn);break;default:throw Error(Ce(329))}}}return gr(e,At()),e.callbackNode===n?Uh.bind(null,e):null}function lc(e,r){var n=Gi;return e.current.memoizedState.isDehydrated&&(ho(e,r).flags|=256),e=Yl(e,r),e!==2&&(r=lr,lr=n,r!==null&&ac(r)),e}function ac(e){lr===null?lr=e:lr.push.apply(lr,e)}function ry(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var i=n[o],s=i.getSnapshot;i=i.value;try{if(!Vr(s(),i))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function An(e,r){for(r&=~gg,r&=~ua,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-Gr(r),o=1<<n;e[n]=-1,r&=~o}}function Lu(e){if(ct&6)throw Error(Ce(327));Jo();var r=Bl(e,0);if(!(r&1))return gr(e,At()),null;var n=Yl(e,r);if(e.tag!==0&&n===2){var o=Fd(e);o!==0&&(r=o,n=lc(e,o))}if(n===1)throw n=hs,ho(e,0),An(e,r),gr(e,At()),n;if(n===6)throw Error(Ce(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,lo(e,lr,dn),gr(e,At()),null}function pg(e,r){var n=ct;ct|=1;try{return e(r)}finally{ct=n,ct===0&&(li=At()+500,aa&&Zn())}}function jo(e){Ln!==null&&Ln.tag===0&&!(ct&6)&&Jo();var r=ct;ct|=1;var n=Ar.transition,o=xt;try{if(Ar.transition=null,xt=1,e)return e()}finally{xt=o,Ar.transition=n,ct=r,!(ct&6)&&Zn()}}function bg(){xr=Yo.current,Ct(Yo)}function ho(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Dx(n)),Wt!==null)for(n=Wt.return;n!==null;){var o=n;switch(Kc(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Al();break;case 3:ii(),Ct(dr),Ct(Jt),ng();break;case 5:rg(o);break;case 4:ii();break;case 13:Ct(It);break;case 19:Ct(It);break;case 10:Zc(o.type._context);break;case 22:case 23:bg()}n=n.return}if(Gt=e,Wt=e=Un(e.current,null),Yt=xr=r,$t=0,hs=null,gg=ua=vo=0,lr=Gi=null,uo!==null){for(r=0;r<uo.length;r++)if(n=uo[r],o=n.interleaved,o!==null){n.interleaved=null;var i=o.next,s=n.pending;if(s!==null){var l=s.next;s.next=i,o.next=l}n.pending=o}uo=null}return e}function Vh(e,r){do{var n=Wt;try{if(Xc(),fl.current=Hl,Ol){for(var o=Bt.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}Ol=!1}if(yo=0,Ht=_t=Bt=null,Oi=!1,us=0,cg.current=null,n===null||n.return===null){$t=1,hs=r,Wt=null;break}e:{var s=e,l=n.return,a=n,d=r;if(r=Yt,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var g=d,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var B=Su(l);if(B!==null){B.flags&=-257,Cu(B,l,a,s,r),B.mode&1&&wu(s,g,r),r=B,d=g;var T=r.updateQueue;if(T===null){var R=new Set;R.add(d),r.updateQueue=R}else T.add(d);break e}else{if(!(r&1)){wu(s,g,r),hg();break e}d=Error(Ce(426))}}else if(Tt&&a.mode&1){var w=Su(l);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Cu(w,l,a,s,r),Qc(si(d,a));break e}}s=d=si(d,a),$t!==4&&($t=2),Gi===null?Gi=[s]:Gi.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,r&=-r,s.lanes|=r;var p=Bh(s,d,r);fu(s,p);break e;case 1:a=d;var b=s.type,u=s.stateNode;if(!(s.flags&128)&&(typeof b.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Hn===null||!Hn.has(u)))){s.flags|=65536,r&=-r,s.lanes|=r;var z=Eh(s,a,r);fu(s,z);break e}}s=s.return}while(s!==null)}Qh(n)}catch(v){r=v,Wt===n&&n!==null&&(Wt=n=n.return);continue}break}while(!0)}function Yh(){var e=Gl.current;return Gl.current=Hl,e===null?Hl:e}function hg(){($t===0||$t===3||$t===2)&&($t=4),Gt===null||!(vo&268435455)&&!(ua&268435455)||An(Gt,Yt)}function Yl(e,r){var n=ct;ct|=2;var o=Yh();(Gt!==e||Yt!==r)&&(dn=null,ho(e,r));do try{ny();break}catch(i){Vh(e,i)}while(!0);if(Xc(),ct=n,Gl.current=o,Wt!==null)throw Error(Ce(261));return Gt=null,Yt=0,$t}function ny(){for(;Wt!==null;)Kh(Wt)}function oy(){for(;Wt!==null&&!Bf();)Kh(Wt)}function Kh(e){var r=Xh(e.alternate,e,xr);e.memoizedProps=e.pendingProps,r===null?Qh(e):Wt=r,cg.current=null}function Qh(e){var r=e;do{var n=r.alternate;if(e=r.return,r.flags&32768){if(n=Xx(n,r),n!==null){n.flags&=32767,Wt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$t=6,Wt=null;return}}else if(n=qx(n,r,xr),n!==null){Wt=n;return}if(r=r.sibling,r!==null){Wt=r;return}Wt=r=e}while(r!==null);$t===0&&($t=5)}function lo(e,r,n){var o=xt,i=Ar.transition;try{Ar.transition=null,xt=1,iy(e,r,n,o)}finally{Ar.transition=i,xt=o}return null}function iy(e,r,n,o){do Jo();while(Ln!==null);if(ct&6)throw Error(Ce(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(Ce(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if($f(e,s),e===Gt&&(Wt=Gt=null,Yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Os||(Os=!0,Zh(Il,function(){return Jo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ar.transition,Ar.transition=null;var l=xt;xt=1;var a=ct;ct|=4,cg.current=null,Jx(e,n),Hh(n,e),Cx($d),El=!!_d,$d=_d=null,e.current=n,ey(n),Ef(),ct=a,xt=l,Ar.transition=s}else e.current=n;if(Os&&(Os=!1,Ln=e,Vl=i),s=e.pendingLanes,s===0&&(Hn=null),Ff(n.stateNode),gr(e,At()),r!==null)for(o=e.onRecoverableError,n=0;n<r.length;n++)i=r[n],o(i.value,{componentStack:i.stack,digest:i.digest});if(Ul)throw Ul=!1,e=ic,ic=null,e;return Vl&1&&e.tag!==0&&Jo(),s=e.pendingLanes,s&1?e===sc?Ui++:(Ui=0,sc=e):Ui=0,Zn(),null}function Jo(){if(Ln!==null){var e=Bb(Vl),r=Ar.transition,n=xt;try{if(Ar.transition=null,xt=16>e?16:e,Ln===null)var o=!1;else{if(e=Ln,Ln=null,Vl=0,ct&6)throw Error(Ce(331));var i=ct;for(ct|=4,_e=e.current;_e!==null;){var s=_e,l=s.child;if(_e.flags&16){var a=s.deletions;if(a!==null){for(var d=0;d<a.length;d++){var g=a[d];for(_e=g;_e!==null;){var h=_e;switch(h.tag){case 0:case 11:case 15:Hi(8,h,s)}var f=h.child;if(f!==null)f.return=h,_e=f;else for(;_e!==null;){h=_e;var m=h.sibling,B=h.return;if(Ph(h),h===g){_e=null;break}if(m!==null){m.return=B,_e=m;break}_e=B}}}var T=s.alternate;if(T!==null){var R=T.child;if(R!==null){T.child=null;do{var w=R.sibling;R.sibling=null,R=w}while(R!==null)}}_e=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,_e=l;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Hi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,_e=p;break e}_e=s.return}}var b=e.current;for(_e=b;_e!==null;){l=_e;var u=l.child;if(l.subtreeFlags&2064&&u!==null)u.return=l,_e=u;else e:for(l=b;_e!==null;){if(a=_e,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ga(9,a)}}catch(v){Ft(a,a.return,v)}if(a===l){_e=null;break e}var z=a.sibling;if(z!==null){z.return=a.return,_e=z;break e}_e=a.return}}if(ct=i,Zn(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(na,e)}catch{}o=!0}return o}finally{xt=n,Ar.transition=r}}return!1}function _u(e,r,n){r=si(n,r),r=Bh(e,r,1),e=On(e,r,1),r=rr(),e!==null&&(ws(e,1,r),gr(e,r))}function Ft(e,r,n){if(e.tag===3)_u(e,e,n);else for(;r!==null;){if(r.tag===3){_u(r,e,n);break}else if(r.tag===1){var o=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Hn===null||!Hn.has(o))){e=si(n,e),e=Eh(r,e,1),r=On(r,e,1),e=rr(),r!==null&&(ws(r,1,e),gr(r,e));break}}r=r.return}}function sy(e,r,n){var o=e.pingCache;o!==null&&o.delete(r),r=rr(),e.pingedLanes|=e.suspendedLanes&n,Gt===e&&(Yt&n)===n&&($t===4||$t===3&&(Yt&130023424)===Yt&&500>At()-ug?ho(e,0):gg|=n),gr(e,r)}function qh(e,r){r===0&&(e.mode&1?(r=Ds,Ds<<=1,!(Ds&130023424)&&(Ds=4194304)):r=1);var n=rr();e=yn(e,r),e!==null&&(ws(e,r,n),gr(e,n))}function ly(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),qh(e,n)}function ay(e,r){var n=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(Ce(314))}o!==null&&o.delete(r),qh(e,n)}var Xh;Xh=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||dr.current)ar=!0;else{if(!(e.lanes&n)&&!(r.flags&128))return ar=!1,Qx(e,r,n);ar=!!(e.flags&131072)}else ar=!1,Tt&&r.flags&1048576&&th(r,Ll,r.index);switch(r.lanes=0,r.tag){case 2:var o=r.type;yl(e,r),e=r.pendingProps;var i=ri(r,Jt.current);Zo(r,n),i=ig(null,r,o,e,i,n);var s=sg();return r.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,cr(o)?(s=!0,Wl(r)):s=!1,r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,eg(r),i.updater=ca,r.stateNode=i,i._reactInternals=r,Kd(r,o,e,n),r=Xd(null,r,o,!0,s,n)):(r.tag=0,Tt&&s&&Yc(r),er(null,r,i,n),r=r.child),r;case 16:o=r.elementType;e:{switch(yl(e,r),e=r.pendingProps,i=o._init,o=i(o._payload),r.type=o,i=r.tag=cy(o),e=Pr(o,e),i){case 0:r=qd(null,r,o,e,n);break e;case 1:r=Iu(null,r,o,e,n);break e;case 11:r=zu(null,r,o,e,n);break e;case 14:r=Tu(null,r,o,Pr(o.type,e),n);break e}throw Error(Ce(306,o,""))}return r;case 0:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Pr(o,i),qd(e,r,o,i,n);case 1:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Pr(o,i),Iu(e,r,o,i,n);case 3:e:{if(Ah(r),e===null)throw Error(Ce(387));o=r.pendingProps,s=r.memoizedState,i=s.element,lh(e,r),Pl(r,o,null,n);var l=r.memoizedState;if(o=l.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},r.updateQueue.baseState=s,r.memoizedState=s,r.flags&256){i=si(Error(Ce(423)),r),r=Bu(e,r,o,n,i);break e}else if(o!==i){i=si(Error(Ce(424)),r),r=Bu(e,r,o,n,i);break e}else for(yr=Nn(r.stateNode.containerInfo.firstChild),vr=r,Tt=!0,Hr=null,n=ih(r,null,o,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ni(),o===i){r=vn(e,r,n);break e}er(e,r,o,n)}r=r.child}return r;case 5:return ah(r),e===null&&Ud(r),o=r.type,i=r.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,Pd(o,i)?l=null:s!==null&&Pd(o,s)&&(r.flags|=32),Fh(e,r),er(e,r,l,n),r.child;case 6:return e===null&&Ud(r),null;case 13:return Wh(e,r,n);case 4:return tg(r,r.stateNode.containerInfo),o=r.pendingProps,e===null?r.child=oi(r,null,o,n):er(e,r,o,n),r.child;case 11:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Pr(o,i),zu(e,r,o,i,n);case 7:return er(e,r,r.pendingProps,n),r.child;case 8:return er(e,r,r.pendingProps.children,n),r.child;case 12:return er(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(o=r.type._context,i=r.pendingProps,s=r.memoizedProps,l=i.value,kt(_l,o._currentValue),o._currentValue=l,s!==null)if(Vr(s.value,l)){if(s.children===i.children&&!dr.current){r=vn(e,r,n);break e}}else for(s=r.child,s!==null&&(s.return=r);s!==null;){var a=s.dependencies;if(a!==null){l=s.child;for(var d=a.firstContext;d!==null;){if(d.context===o){if(s.tag===1){d=mn(-1,n&-n),d.tag=2;var g=s.updateQueue;if(g!==null){g=g.shared;var h=g.pending;h===null?d.next=d:(d.next=h.next,h.next=d),g.pending=d}}s.lanes|=n,d=s.alternate,d!==null&&(d.lanes|=n),Vd(s.return,n,r),a.lanes|=n;break}d=d.next}}else if(s.tag===10)l=s.type===r.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(Ce(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Vd(l,n,r),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===r){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}er(e,r,i.children,n),r=r.child}return r;case 9:return i=r.type,o=r.pendingProps.children,Zo(r,n),i=Wr(i),o=o(i),r.flags|=1,er(e,r,o,n),r.child;case 14:return o=r.type,i=Pr(o,r.pendingProps),i=Pr(o.type,i),Tu(e,r,o,i,n);case 15:return Rh(e,r,r.type,r.pendingProps,n);case 17:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Pr(o,i),yl(e,r),r.tag=1,cr(o)?(e=!0,Wl(r)):e=!1,Zo(r,n),Ih(r,o,i),Kd(r,o,i,n),Xd(null,r,o,!0,e,n);case 19:return Mh(e,r,n);case 22:return Dh(e,r,n)}throw Error(Ce(156,r.tag))};function Zh(e,r){return Cb(e,r)}function dy(e,r,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fr(e,r,n,o){return new dy(e,r,n,o)}function mg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cy(e){if(typeof e=="function")return mg(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Wc)return 11;if(e===Mc)return 14}return 2}function Un(e,r){var n=e.alternate;return n===null?(n=Fr(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function kl(e,r,n,o,i,s){var l=2;if(o=e,typeof e=="function")mg(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Lo:return mo(n.children,i,s,r);case Ac:l=8,i|=8;break;case xd:return e=Fr(12,n,r,i|2),e.elementType=xd,e.lanes=s,e;case yd:return e=Fr(13,n,r,i),e.elementType=yd,e.lanes=s,e;case vd:return e=Fr(19,n,r,i),e.elementType=vd,e.lanes=s,e;case ab:return pa(n,i,s,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case sb:l=10;break e;case lb:l=9;break e;case Wc:l=11;break e;case Mc:l=14;break e;case Rn:l=16,o=null;break e}throw Error(Ce(130,e==null?e:typeof e,""))}return r=Fr(l,n,r,i),r.elementType=e,r.type=o,r.lanes=s,r}function mo(e,r,n,o){return e=Fr(7,e,o,r),e.lanes=n,e}function pa(e,r,n,o){return e=Fr(22,e,o,r),e.elementType=ab,e.lanes=n,e.stateNode={isHidden:!1},e}function Ka(e,r,n){return e=Fr(6,e,null,r),e.lanes=n,e}function Qa(e,r,n){return r=Fr(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function gy(e,r,n,o,i){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ba(0),this.expirationTimes=Ba(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ba(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fg(e,r,n,o,i,s,l,a,d){return e=new gy(e,r,n,a,d),r===1?(r=1,s===!0&&(r|=8)):r=0,s=Fr(3,null,null,r),e.current=s,s.stateNode=e,s.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},eg(s),e}function uy(e,r,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mo,key:o==null?null:""+o,children:e,containerInfo:r,implementation:n}}function Jh(e){if(!e)return Kn;e=e._reactInternals;e:{if(wo(e)!==e||e.tag!==1)throw Error(Ce(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(cr(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(Ce(171))}if(e.tag===1){var n=e.type;if(cr(n))return Jb(e,n,r)}return r}function em(e,r,n,o,i,s,l,a,d){return e=fg(n,o,!0,e,i,s,l,a,d),e.context=Jh(null),n=e.current,o=rr(),i=Gn(n),s=mn(o,i),s.callback=r??null,On(n,s,i),e.current.lanes=i,ws(e,i,o),gr(e,o),e}function ba(e,r,n,o){var i=r.current,s=rr(),l=Gn(i);return n=Jh(n),r.context===null?r.context=n:r.pendingContext=n,r=mn(s,l),r.payload={element:e},o=o===void 0?null:o,o!==null&&(r.callback=o),e=On(i,r,l),e!==null&&(Ur(e,i,l,s),ml(e,i,l)),l}function Kl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $u(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function xg(e,r){$u(e,r),(e=e.alternate)&&$u(e,r)}function py(){return null}var tm=typeof reportError=="function"?reportError:function(e){console.error(e)};function yg(e){this._internalRoot=e}ha.prototype.render=yg.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(Ce(409));ba(e,r,null,null)};ha.prototype.unmount=yg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;jo(function(){ba(null,e,null,null)}),r[xn]=null}};function ha(e){this._internalRoot=e}ha.prototype.unstable_scheduleHydration=function(e){if(e){var r=Db();e={blockedOn:null,target:e,priority:r};for(var n=0;n<Fn.length&&r!==0&&r<Fn[n].priority;n++);Fn.splice(n,0,e),n===0&&Ab(e)}};function vg(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pu(){}function by(e,r,n,o,i){if(i){if(typeof o=="function"){var s=o;o=function(){var g=Kl(l);s.call(g)}}var l=em(r,o,e,0,null,!1,!1,"",Pu);return e._reactRootContainer=l,e[xn]=l.current,ls(e.nodeType===8?e.parentNode:e),jo(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var a=o;o=function(){var g=Kl(d);a.call(g)}}var d=fg(e,0,!1,null,null,!1,!1,"",Pu);return e._reactRootContainer=d,e[xn]=d.current,ls(e.nodeType===8?e.parentNode:e),jo(function(){ba(r,d,n,o)}),d}function fa(e,r,n,o,i){var s=n._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var a=i;i=function(){var d=Kl(l);a.call(d)}}ba(r,l,e,i)}else l=by(n,r,e,i,o);return Kl(l)}Eb=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=Ei(r.pendingLanes);n!==0&&($c(r,n|1),gr(r,At()),!(ct&6)&&(li=At()+500,Zn()))}break;case 13:jo(function(){var o=yn(e,1);if(o!==null){var i=rr();Ur(o,e,1,i)}}),xg(e,1)}};Pc=function(e){if(e.tag===13){var r=yn(e,134217728);if(r!==null){var n=rr();Ur(r,e,134217728,n)}xg(e,134217728)}};Rb=function(e){if(e.tag===13){var r=Gn(e),n=yn(e,r);if(n!==null){var o=rr();Ur(n,e,r,o)}xg(e,r)}};Db=function(){return xt};Fb=function(e,r){var n=xt;try{return xt=e,r()}finally{xt=n}};Ed=function(e,r,n){switch(r){case"input":if(wd(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var o=n[r];if(o!==e&&o.form===e.form){var i=la(o);if(!i)throw Error(Ce(90));cb(o),wd(o,i)}}}break;case"textarea":ub(e,n);break;case"select":r=n.value,r!=null&&Ko(e,!!n.multiple,r,!1)}};yb=pg;vb=jo;var hy={usingClientEntryPoint:!1,Events:[Cs,No,la,fb,xb,pg]},Si={findFiberByHostInstance:go,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},my={bundleType:Si.bundleType,version:Si.version,rendererPackageName:Si.rendererPackageName,rendererConfig:Si.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wb(e),e===null?null:e.stateNode},findFiberByHostInstance:Si.findFiberByHostInstance||py,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hs.isDisabled&&Hs.supportsFiber)try{na=Hs.inject(my),en=Hs}catch{}}kr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hy;kr.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vg(r))throw Error(Ce(200));return uy(e,r,null,n)};kr.createRoot=function(e,r){if(!vg(e))throw Error(Ce(299));var n=!1,o="",i=tm;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),r=fg(e,1,!1,null,null,n,!1,o,i),e[xn]=r.current,ls(e.nodeType===8?e.parentNode:e),new yg(r)};kr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(Ce(188)):(e=Object.keys(e).join(","),Error(Ce(268,e)));return e=wb(r),e=e===null?null:e.stateNode,e};kr.flushSync=function(e){return jo(e)};kr.hydrate=function(e,r,n){if(!ma(r))throw Error(Ce(200));return fa(null,e,r,!0,n)};kr.hydrateRoot=function(e,r,n){if(!vg(e))throw Error(Ce(405));var o=n!=null&&n.hydratedSources||null,i=!1,s="",l=tm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),r=em(r,null,e,1,n??null,i,!1,s,l),e[xn]=r.current,ls(e),o)for(e=0;e<o.length;e++)n=o[e],i=n._getVersion,i=i(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,i]:r.mutableSourceEagerHydrationData.push(n,i);return new ha(r)};kr.render=function(e,r,n){if(!ma(r))throw Error(Ce(200));return fa(null,e,r,!1,n)};kr.unmountComponentAtNode=function(e){if(!ma(e))throw Error(Ce(40));return e._reactRootContainer?(jo(function(){fa(null,null,e,!1,function(){e._reactRootContainer=null,e[xn]=null})}),!0):!1};kr.unstable_batchedUpdates=pg;kr.unstable_renderSubtreeIntoContainer=function(e,r,n,o){if(!ma(n))throw Error(Ce(200));if(e==null||e._reactInternals===void 0)throw Error(Ce(38));return fa(e,r,n,!1,o)};kr.version="18.3.1-next-f1338f8080-20240426";function rm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rm)}catch(e){console.error(e)}}rm(),rb.exports=kr;var fy=rb.exports,nm,Nu=fy;nm=Nu.createRoot,Nu.hydrateRoot;/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),om=(...e)=>e.filter((r,n,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===n).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=c.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:i="",children:s,iconNode:l,...a},d)=>c.createElement("svg",{ref:d,...yy,width:r,height:r,stroke:e,strokeWidth:o?Number(n)*24/Number(r):n,className:om("lucide",i),...a},[...l.map(([g,h])=>c.createElement(g,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=(e,r)=>{const n=c.forwardRef(({className:o,...i},s)=>c.createElement(vy,{ref:s,iconNode:r,className:om(`lucide-${xy(e)}`,o),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=ue("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=ue("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=ue("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=ue("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=ue("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=ue("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=ue("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=ue("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=ue("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=ue("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=ue("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=ue("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=ue("Bus",[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=ue("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=ue("CalendarClock",[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=ue("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=ue("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=ue("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=ue("Carrot",[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",key:"rfqxbe"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",key:"6b25w4"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",key:"fn65lo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=ue("ChartCandlestick",[["path",{d:"M9 5v4",key:"14uxtq"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1",key:"f4fvz0"}],["path",{d:"M9 15v2",key:"r5rk32"}],["path",{d:"M17 3v2",key:"1l2re6"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1",key:"z38je5"}],["path",{d:"M17 13v3",key:"5l0wba"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=ue("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=ue("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=ue("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=ue("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=ue("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=ue("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=ue("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=ue("Clapperboard",[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=ue("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=ue("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=ue("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=ue("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=ue("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=ue("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=ue("Dumbbell",[["path",{d:"M14.4 14.4 9.6 9.6",key:"ic80wn"}],["path",{d:"M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z",key:"nnl7wr"}],["path",{d:"m21.5 21.5-1.4-1.4",key:"1f1ice"}],["path",{d:"M3.9 3.9 2.5 2.5",key:"1evmna"}],["path",{d:"M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z",key:"yhosts"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=ue("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=ue("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=ue("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=ue("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=ue("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=ue("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=ue("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"7cu91f"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=ue("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=ue("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=ue("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=ue("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=ue("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=ue("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=ue("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=ue("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=ue("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=ue("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=ue("Images",[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=ue("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=ue("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=ue("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=ue("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=ue("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=ue("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=ue("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=ue("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=ue("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=ue("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=ue("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=ue("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=ue("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=ue("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=ue("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=ue("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=ue("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=ue("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=ue("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=ue("PartyPopper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"hbicv8"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",key:"1i94pl"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",key:"1cofks"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=ue("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=ue("PawPrint",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=ue("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=ue("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=ue("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=ue("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=ue("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=ue("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=ue("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=ue("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=ue("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=ue("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=ue("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=ue("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=ue("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=ue("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=ue("ScrollText",[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=ue("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=ue("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=ue("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=ue("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=ue("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=ue("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
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
 */const f0=ue("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=ue("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=ue("Swords",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=ue("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=ue("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=ue("TramFront",[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=ue("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=ue("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=ue("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=ue("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=ue("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=ue("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=ue("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=ue("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=ue("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=ue("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=ue("WashingMachine",[["path",{d:"M3 6h3",key:"155dbl"}],["path",{d:"M17 6h.01",key:"e2y6kg"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2",key:"od3kk9"}],["circle",{cx:"12",cy:"13",r:"5",key:"nlbqau"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5",key:"17lach"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=ue("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=ue("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=ue("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=ue("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=ue("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Eg="anvil_token",Sm=()=>localStorage.getItem(Eg),T0=e=>localStorage.setItem(Eg,e),bc=()=>localStorage.removeItem(Eg),J=async(e,r,n)=>{const o={};n!==void 0&&(o["Content-Type"]="application/json");const i=Sm();i&&(o.Authorization=`Bearer ${i}`);const s=await fetch(`/api${r}`,{method:e,headers:o,body:n!==void 0?JSON.stringify(n):void 0});if(s.status===401)throw bc(),window.dispatchEvent(new Event("anvil-unauthorized")),new Error("Not authenticated");if(s.status===204)return null;if(!s.ok){const l=await s.text();let a=l;try{a=JSON.parse(l).detail||l}catch{}throw new Error(a||`HTTP ${s.status}`)}return s.json()},F={me:()=>J("GET","/auth/me"),signInWithGoogle:()=>{window.location.href="/api/auth/google"},getPillars:()=>J("GET","/pillars"),getFocus:()=>J("GET","/focus"),createFocus:e=>J("POST","/focus",e),deleteFocus:e=>J("DELETE",`/focus/${e}`),addScreenTime:(e,r)=>J("POST","/screentime",{screen:e,seconds:r}),getScreenTime:()=>J("GET","/screentime"),getPayouts:()=>J("GET","/rewards/payouts"),createPayout:e=>J("POST","/rewards/payouts",e),deletePayout:e=>J("DELETE",`/rewards/payouts/${e}`),getRewardRates:()=>J("GET","/rewards/rates"),setRewardRate:e=>J("POST","/rewards/rates",e),getMedia:()=>J("GET","/media"),createMedia:e=>J("POST","/media",e),updateMedia:(e,r)=>J("PUT",`/media/${e}`,r),deleteMedia:e=>J("DELETE",`/media/${e}`),restoreMedia:e=>J("POST",`/media/${e}/restore`),getDecks:()=>J("GET","/spiritual/decks"),createDeck:e=>J("POST","/spiritual/decks",e),deleteDeck:e=>J("DELETE",`/spiritual/decks/${e}`),getGoldenGoals:()=>J("GET","/golden/goals"),getGoldenGoal:e=>J("GET",`/golden/goals/${e}`),createGolden:e=>J("POST","/golden/goals",e),updateGolden:(e,r)=>J("PUT",`/golden/goals/${e}`,r),achieveGolden:e=>J("POST",`/golden/goals/${e}/achieve`),unachieveGolden:e=>J("POST",`/golden/goals/${e}/unachieve`),upsertGoldenEntry:(e,r)=>J("PUT",`/golden/goals/${e}/entry`,r),deleteGolden:e=>J("DELETE",`/golden/goals/${e}`),restoreGolden:e=>J("POST",`/golden/goals/${e}/restore`),logTesla369:e=>J("POST",`/golden/goals/${e}/369/log`),undoTesla369:e=>J("DELETE",`/golden/goals/${e}/369/log`),getKickstart:()=>J("GET","/kickstart/videos"),createKickstart:e=>J("POST","/kickstart/videos",e),updateKickstart:(e,r)=>J("PUT",`/kickstart/videos/${e}`,r),deleteKickstart:e=>J("DELETE",`/kickstart/videos/${e}`),restoreKickstart:e=>J("POST",`/kickstart/videos/${e}/restore`),getTxns:()=>J("GET","/finance/txns"),createTxn:e=>J("POST","/finance/txns",e),updateTxn:(e,r)=>J("PUT",`/finance/txns/${e}`,r),deleteTxn:e=>J("DELETE",`/finance/txns/${e}`),restoreTxn:e=>J("POST",`/finance/txns/${e}/restore`),getInvestments:()=>J("GET","/finance/investments"),createInvestment:e=>J("POST","/finance/investments",e),updateInvestment:(e,r)=>J("PUT",`/finance/investments/${e}`,r),deleteInvestment:e=>J("DELETE",`/finance/investments/${e}`),restoreInvestment:e=>J("POST",`/finance/investments/${e}/restore`),getFixedItems:()=>J("GET","/finance/fixed-items"),createFixedItem:e=>J("POST","/finance/fixed-items",e),updateFixedItem:(e,r)=>J("PUT",`/finance/fixed-items/${e}`,r),deleteFixedItem:e=>J("DELETE",`/finance/fixed-items/${e}`),getExpenses:()=>J("GET","/expenses"),createExpenseCategory:e=>J("POST","/expenses/categories",e),updateExpenseCategory:(e,r)=>J("PUT",`/expenses/categories/${e}`,r),arrangeExpenseCategories:e=>J("PUT","/expenses/categories/arrange",{order:e}),deleteExpenseCategory:e=>J("DELETE",`/expenses/categories/${e}`),createExpenseLog:e=>J("POST","/expenses/logs",e),updateExpenseLog:(e,r)=>J("PUT",`/expenses/logs/${e}`,r),deleteExpenseLog:e=>J("DELETE",`/expenses/logs/${e}`),restoreExpenseLog:e=>J("POST",`/expenses/logs/${e}/restore`),getTrades:()=>J("GET","/trades"),createTradeEntry:e=>J("POST","/trades/entries",e),updateTradeEntry:(e,r)=>J("PUT",`/trades/entries/${e}`,r),bookTradeEntry:(e,r,n)=>J("POST",`/trades/entries/${e}/book`,{outcome:r,date:n}),reopenTradeEntry:e=>J("POST",`/trades/entries/${e}/reopen`),deleteTradeEntry:e=>J("DELETE",`/trades/entries/${e}`),setTradeLearning:(e,r)=>J("PUT","/trades/learning",{date:e,learning:r}),getSetting:e=>J("GET",`/settings/${e}`),setSetting:(e,r)=>J("PUT",`/settings/${e}`,{value:r}),getTasks:()=>J("GET","/tasks"),createTask:e=>J("POST","/tasks",e),updateTask:(e,r)=>J("PUT",`/tasks/${e}`,r),deleteTask:e=>J("DELETE",`/tasks/${e}`),restoreTask:e=>J("POST",`/tasks/${e}/restore`),scheduleTask:e=>J("PUT",`/tasks/${e}/schedule`),getGoals:e=>J("GET",`/goals${e?`?pillar=${encodeURIComponent(e)}`:""}`),createGoal:e=>J("POST","/goals",e),updateGoal:(e,r)=>J("PUT",`/goals/${e}`,r),deleteGoal:e=>J("DELETE",`/goals/${e}`),restoreGoal:e=>J("POST",`/goals/${e}/restore`),getHabits:()=>J("GET","/habits"),createHabit:e=>J("POST","/habits",e),updateHabit:(e,r)=>J("PUT",`/habits/${e}`,r),deleteHabit:e=>J("DELETE",`/habits/${e}`),restoreHabit:e=>J("POST",`/habits/${e}/restore`),toggleHabitLog:(e,r)=>J("POST",`/habits/${e}/log/${r}`),setHabitLogNote:(e,r,n)=>J("PUT",`/habits/${e}/log/${r}/note`,{note:n}),setHabitLogCount:(e,r,n,o)=>J("PUT",`/habits/${e}/log/${r}/count`,{count:n,note:o}),incrementHabitLog:(e,r)=>J("POST",`/habits/${e}/log/${r}/increment`),clearHabitLog:(e,r)=>J("DELETE",`/habits/${e}/log/${r}`),getHabitsYearly:e=>J("GET",`/habits/yearly/${e}`),getJournalEntry:e=>J("GET",`/journal/${e}`),getJournalHistory:(e,r)=>J("GET",`/journal/history/${e}/${r}`),updateJournalMood:(e,r)=>J("PUT",`/journal/${e}`,{mood:r}),addJournalBullet:(e,r,n)=>J("POST",`/journal/${e}/bullets`,{section:r,text:n}),deleteJournalBullet:e=>J("DELETE",`/journal/bullets/${e}`),getSkills:()=>J("GET","/skills"),createSkill:e=>J("POST","/skills",e),updateSkill:(e,r)=>J("PUT",`/skills/${e}`,r),deleteSkill:e=>J("DELETE",`/skills/${e}`),restoreSkill:e=>J("POST",`/skills/${e}/restore`),addSkillNote:(e,r,n,o=null)=>J("POST",`/skills/${e}/notes`,{stage:r,text:n,grp:o}),setSkillGroups:(e,r)=>J("PUT",`/skills/${e}/groups`,{groups:r}),deleteSkillNote:e=>J("DELETE",`/skill-notes/${e}`),updateSkillNote:(e,r)=>J("PUT",`/skill-notes/${e}`,{text:r}),toggleSkillNote:e=>J("PUT",`/skill-notes/${e}/toggle`),completeSkillStage:(e,r)=>J("POST",`/skills/${e}/complete-stage`,{stage:r}),getScriptures:()=>J("GET","/scriptures"),createScripture:e=>J("POST","/scriptures",e),deleteScripture:e=>J("DELETE",`/scriptures/${e}`),restoreScripture:e=>J("POST",`/scriptures/${e}/restore`),addChapter:(e,r)=>J("POST",`/scriptures/${e}/chapters`,r),updateChapter:(e,r)=>J("PUT",`/chapters/${e}`,r),deleteChapter:e=>J("DELETE",`/chapters/${e}`),restoreChapter:e=>J("POST",`/chapters/${e}/restore`),addInsight:(e,r)=>J("POST",`/chapters/${e}/insights`,{text:r}),deleteInsight:e=>J("DELETE",`/insights/${e}`),getTopics:()=>J("GET","/revision/topics"),createTopic:e=>J("POST","/revision/topics",e),updateTopic:(e,r)=>J("PUT",`/revision/topics/${e}`,r),deleteTopic:e=>J("DELETE",`/revision/topics/${e}`),restoreTopic:e=>J("POST",`/revision/topics/${e}/restore`),getDueToday:()=>J("GET","/revision/due-today"),getCalendar:(e,r)=>J("GET",`/revision/calendar/${e}/${r}`),toggleReviewDone:e=>J("PUT",`/revision/reviews/${e}/done`),getAffirmations:()=>J("GET","/affirmations"),createAffirmation:e=>J("POST","/affirmations",e),updateAffirmation:(e,r)=>J("PUT",`/affirmations/${e}`,r),deleteAffirmation:e=>J("DELETE",`/affirmations/${e}`),restoreAffirmation:e=>J("POST",`/affirmations/${e}/restore`),getBucket:()=>J("GET","/bucket"),createBucketWish:e=>J("POST","/bucket",e),updateBucketWish:(e,r)=>J("PUT",`/bucket/${e}`,r),fulfillBucketWish:e=>J("POST",`/bucket/${e}/fulfill`),arrangeBucket:e=>J("PUT","/bucket/arrange",{order:e}),deleteBucketWish:e=>J("DELETE",`/bucket/${e}`),restoreBucketWish:e=>J("POST",`/bucket/${e}/restore`),getChallenges:()=>J("GET","/challenges"),createChallenge:e=>J("POST","/challenges",e),updateChallenge:(e,r)=>J("PUT",`/challenges/${e}`,r),deleteChallenge:e=>J("DELETE",`/challenges/${e}`),restoreChallenge:e=>J("POST",`/challenges/${e}/restore`),getAchievements:()=>J("GET","/achievements"),createAchievement:e=>J("POST","/achievements",e),updateAchievement:(e,r)=>J("PUT",`/achievements/${e}`,r),deleteAchievement:e=>J("DELETE",`/achievements/${e}`),restoreAchievement:e=>J("POST",`/achievements/${e}/restore`),getDelight:()=>J("GET","/delight"),createCollection:e=>J("POST","/delight/collections",e),updateCollection:(e,r)=>J("PUT",`/delight/collections/${e}`,r),deleteCollection:e=>J("DELETE",`/delight/collections/${e}`),restoreCollection:e=>J("POST",`/delight/collections/${e}/restore`),createDelightItem:(e,r)=>J("POST",`/delight/collections/${e}/items`,r),updateDelightItem:(e,r)=>J("PUT",`/delight/items/${e}`,r),deleteDelightItem:e=>J("DELETE",`/delight/items/${e}`),restoreDelightItem:e=>J("POST",`/delight/items/${e}/restore`),arrangeDelight:(e,r)=>J("PUT",`/delight/collections/${e}/arrange`,{order:r})},hc=[{code:"INR",symbol:"₹",locale:"en-IN",label:"Indian Rupee"},{code:"USD",symbol:"$",locale:"en-US",label:"US Dollar"},{code:"EUR",symbol:"€",locale:"de-DE",label:"Euro"},{code:"GBP",symbol:"£",locale:"en-GB",label:"British Pound"},{code:"JPY",symbol:"¥",locale:"ja-JP",label:"Japanese Yen"},{code:"AED",symbol:"د.إ",locale:"en-AE",label:"UAE Dirham"},{code:"AUD",symbol:"A$",locale:"en-AU",label:"Australian Dollar"},{code:"CAD",symbol:"C$",locale:"en-CA",label:"Canadian Dollar"},{code:"SGD",symbol:"S$",locale:"en-SG",label:"Singapore Dollar"}],Hu="INR",Cm="anvil_currency",ka=e=>hc.find(r=>r.code===e)||hc[0];function ai(){try{return localStorage.getItem(Cm)||Hu}catch{return Hu}}function Gu(e){try{localStorage.setItem(Cm,e)}catch{}return window.dispatchEvent(new CustomEvent("anvil-currency",{detail:e})),e}function js(e,r){const n=ka(r||ai()),o=Math.round(Number(e)||0);return n.symbol+o.toLocaleString(n.locale)}function Or(e,r){const n=ka(r||ai()),o=Number(e)||0;return n.symbol+o.toLocaleString(n.locale,{minimumFractionDigits:2,maximumFractionDigits:2})}function Uu(e,r){const n=ka(r||ai()),o=Math.round(Number(e)||0),i=Math.abs(o);return n.code==="INR"?i>=1e7?n.symbol+(o/1e7).toFixed(i>=1e8?0:1)+"Cr":i>=1e5?n.symbol+(o/1e5).toFixed(i>=1e6?0:1)+"L":i>=1e3?n.symbol+(o/1e3).toFixed(i>=1e4?0:1)+"K":n.symbol+o:i>=1e9?n.symbol+(o/1e9).toFixed(1)+"B":i>=1e6?n.symbol+(o/1e6).toFixed(1)+"M":i>=1e3?n.symbol+(o/1e3).toFixed(1)+"K":n.symbol+o}function Jn(){const[e,r]=c.useState(ai());return c.useEffect(()=>{const n=o=>r(o.detail||ai());return window.addEventListener("anvil-currency",n),()=>window.removeEventListener("anvil-currency",n)},[]),ka(e)}const Vt={financial:{label:"Financial",leaf:"#C9A227",shape:"round"},academic:{label:"Academic",leaf:"#3A7CA5",shape:"pine"},relationship:{label:"Relationship",leaf:"#C2536B",shape:"round"},spiritual:{label:"Spiritual",leaf:"#8268B0",shape:"tall"},health:{label:"Health",leaf:"#4C9A6B",shape:"round"}},rn="health";function Rg({species:e=rn,progress:r=1,withered:n=!1,size:o=200}){const i=Math.max(0,Math.min(1,r)),s=Vt[e]||Vt[rn],l=n?"#8A7B63":"#7A5A3C",a=n?"#A99C84":s.leaf,d=n?"#8F8268":a,g=14+i*46,h=112-g,f=i>.14,m=f?8+i*30:0;return t.jsxs("svg",{viewBox:"0 0 120 120",width:o,height:o,style:{display:"block"},children:[t.jsx("ellipse",{cx:"60",cy:"114",rx:20+i*14,ry:"5",fill:"rgba(38,36,31,0.08)"}),!f&&t.jsxs("g",{transform:`translate(60 ${112-i*40})`,children:[t.jsx("path",{d:"M0 8 C0 8 0 -2 0 -6",stroke:"#4C9A6B",strokeWidth:"2.5",fill:"none"}),t.jsx("ellipse",{cx:"-5",cy:"-4",rx:"6",ry:"3.5",fill:"#4C9A6B",transform:"rotate(-30 -5 -4)"}),t.jsx("ellipse",{cx:"5",cy:"-4",rx:"6",ry:"3.5",fill:"#5BB07E",transform:"rotate(30 5 -4)"})]}),f&&t.jsxs(t.Fragment,{children:[t.jsx("rect",{x:60-(2+i*2.5),y:h,width:(2+i*2.5)*2,height:g,rx:"2",fill:l}),s.shape==="pine"?t.jsxs(t.Fragment,{children:[t.jsx("polygon",{points:`60,${h-m*2.2} ${60-m},${h+4} ${60+m},${h+4}`,fill:a}),t.jsx("polygon",{points:`60,${h-m*3} ${60-m*.8},${h-m*.7} ${60+m*.8},${h-m*.7}`,fill:d})]}):s.shape==="tall"?t.jsxs(t.Fragment,{children:[t.jsx("ellipse",{cx:"60",cy:h-m*.3,rx:m*.78,ry:m*1.55,fill:a}),t.jsx("ellipse",{cx:"60",cy:h-m*.9,rx:m*.5,ry:m*1,fill:d,opacity:"0.9"})]}):t.jsxs(t.Fragment,{children:[t.jsx("circle",{cx:"60",cy:h,r:m,fill:a}),t.jsx("circle",{cx:60-m*.7,cy:h+m*.3,r:m*.78,fill:a}),t.jsx("circle",{cx:60+m*.7,cy:h+m*.3,r:m*.78,fill:d}),t.jsx("circle",{cx:"60",cy:h-m*.5,r:m*.8,fill:d,opacity:"0.92"})]})]})]})}function I0({species:e}){return t.jsx(Rg,{species:e,progress:1,size:56})}const Gs="#C9A227",Vu="#3A7CA5",Yu="#C2536B",Ku=new Set(["worth","achievements"]),B0=()=>{const e=new Date,r=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${r(e.getMonth()+1)}-${r(e.getDate())}`},Xt=B0(),E0={kickstart:"Kickstart",golden:"Golden Book",habits:"Habits",quadrant:"Quadrant",goals:"Goals",grove:"Grove",worth:"Rewards",vault:"Wallet",expenses:"Expenses",journal:"Journal",revision:"Revision",affirmations:"Affirmations",skills:"Skills",spiritual:"Spiritual",mindscape:"Mindscape",achievements:"Achievements",delight:"Delights"},mc=e=>{const r=Math.round(e||0),n=Math.floor(r/60),o=r%60;return n?`${n}h ${o}m`:`${o}m`},R0=e=>mc((e||0)/60),Qu=[{id:"Q1",label:"Do Now"},{id:"Q2",label:"Schedule"},{id:"Q3",label:"Delegate"},{id:"Q4",label:"Drop"}],qu=["Financial","Academic","Relationship","Health","Spiritual"];function D0({onNavigate:e}){var br,ut;const r=Jn(),n=H=>Or(H,r.code),[o,i]=c.useState(!1),[s,l]=c.useState([]),[a,d]=c.useState([]),[g,h]=c.useState({sessions:[],stats:{}}),[f,m]=c.useState([]),[B,T]=c.useState([]),[R,w]=c.useState([]),[p,b]=c.useState([]),[u,z]=c.useState({}),[v,I]=c.useState({}),[E,S]=c.useState([]),[j,Y]=c.useState([]),[re,ee]=c.useState([]),[W,he]=c.useState([]),[we,be]=c.useState([]),ze=c.useCallback(()=>{Promise.all([F.getHabits().catch(()=>[]),F.getTasks().catch(()=>[]),F.getFocus().catch(()=>({sessions:[],stats:{}})),F.getScreenTime().catch(()=>[]),F.getRewardRates().catch(()=>[]),F.getPayouts().catch(()=>[]),F.getAchievements().catch(()=>[]),F.getSetting("grove_rates").catch(()=>null),F.getSetting("reward_rates").catch(()=>null),F.getExpenses().catch(()=>({categories:[],logs:[]})),F.getInvestments().catch(()=>[]),F.getDueToday().catch(()=>[]),F.getSkills().catch(()=>[])]).then(([H,ye,Mt,Pt,ir,Cr,Sn,zr,on,sr,eo,Cn,pi])=>{l(H||[]),d(ye||[]),h(Mt||{sessions:[],stats:{}}),m(Array.isArray(Pt)?Pt:[]),T(ir||[]),w(Cr||[]),b(Array.isArray(Sn)?Sn:[]),z((zr==null?void 0:zr.value)||{}),I((on==null?void 0:on.value)||{}),S((sr==null?void 0:sr.categories)||[]),Y((sr==null?void 0:sr.logs)||[]),ee(eo||[]),he(Cn||[]),be(pi||[]),i(!0)}).catch(()=>i(!0))},[]);c.useEffect(()=>{ze()},[ze]);const K=s.filter(H=>(H.logs||[]).includes(Xt)).length;a.filter(H=>(H.start_datetime||"").slice(0,10)===Xt);const U=c.useMemo(()=>{const H={Q1:0,Q2:0,Q3:0,Q4:0};return a.forEach(ye=>{H[ye.quadrant]!==void 0&&H[ye.quadrant]++}),H},[a]),ce=((br=g.stats)==null?void 0:br.today_minutes)||0,x=((ut=g.stats)==null?void 0:ut.today_trees)||0,Q={};B.forEach(H=>{var ye;(Q[ye=`${H.kind}:${H.rkey}`]||(Q[ye]=[])).push({eff:H.eff_date,rate:H.rate})}),Object.values(Q).forEach(H=>H.sort((ye,Mt)=>ye.eff.localeCompare(Mt.eff)));const O=(H,ye,Mt)=>{const Pt=Q[`${H}:${ye}`];if(Pt){let ir=null;for(const Cr of Pt)if(Cr.eff<=Mt)ir=Cr.rate;else break;if(ir!==null)return ir}return(H==="focus"?u[ye]:v[ye])||0};let G=0,N=0;(g.sessions||[]).filter(H=>H.completed).forEach(H=>{const ye=(H.started_at||H.created_at||"").slice(0,10);if(ye!==Xt)return;const Mt=Vt[H.tree]?H.tree:rn;G+=(H.actual_min||0)/60*O("focus",Mt,ye)}),f.forEach(H=>{!Ku.has(H.screen)&&H.date===Xt&&(N+=H.seconds/60*O("usage",H.screen,H.date))});const de=p.filter(H=>H.date===Xt&&(H.reward||0)>0).reduce((H,ye)=>H+(ye.reward||0),0),Me=G+N+de,oe=Me>0?G/Me*100:0,ae=Me>0?N/Me*100:0,P=Me>0?de/Me*100:0;let X=0,me=0;(g.sessions||[]).filter(H=>H.completed).forEach(H=>{const ye=(H.started_at||H.created_at||"").slice(0,10),Mt=Vt[H.tree]?H.tree:rn;X+=(H.actual_min||0)/60*O("focus",Mt,ye)}),f.forEach(H=>{Ku.has(H.screen)||(me+=H.seconds/60*O("usage",H.screen,H.date))});const D=p.reduce((H,ye)=>H+(ye.reward||0),0),y=R.reduce((H,ye)=>H+ye.amount,0),te=Math.max(0,X+me+D-y),ie=j.filter(H=>H.date===Xt).reduce((H,ye)=>H+ye.amount,0);c.useMemo(()=>Object.fromEntries(E.map(H=>[H.id,H])),[E]);const Ae=re.filter(H=>H.date===Xt||H.start_date===Xt).reduce((H,ye)=>H+(ye.invested||0),0),qe=c.useMemo(()=>{const H={};return f.forEach(ye=>{ye.date===Xt&&(H[ye.screen]=(H[ye.screen]||0)+ye.seconds)}),Object.entries(H).filter(([,ye])=>ye>0).sort((ye,Mt)=>Mt[1]-ye[1])},[f]),Ye=H=>f.some(ye=>ye.screen===H&&ye.date===Xt&&ye.seconds>0),Ke=Ye("spiritual"),at=Ye("affirmations"),Xe=c.useMemo(()=>{const H=[];return we.forEach(ye=>Object.values(ye.notes||{}).forEach(Mt=>Mt.forEach(Pt=>{(Pt.created_at||"").slice(0,10)===Xt&&H.push({...Pt,skill:ye.title})}))),H},[we]),ft=Ye("kickstart"),se=Ye("mindscape"),We=p.filter(H=>H.date===Xt),[Ze,rt]=c.useState(null),[gt,Rt]=c.useState(null),[wt,yt]=c.useState(null),[bt,Dt]=c.useState(null),Sr=H=>F.toggleHabitLog(H.id,Xt).then(ze).catch(()=>{}),k=async()=>{const H=Ze.title.trim();H&&(await F.createTask({pillar:Ze.pillar,title:H,quadrant:Ze.quadrant,time_estimate_min:Number(Ze.time_estimate_min)||30,start_datetime:null,goal_id:null}),rt(null),ze())},le=async()=>{await F.createFocus({label:gt.label.trim()||null,tree:gt.tree,duration_min:Number(gt.duration_min)||25}),Rt(null),ze()},$e=async()=>{const H=parseFloat(wt.amount)||0;H<=0||!wt.category_id||(await F.createExpenseLog({category_id:Number(wt.category_id),amount:H,note:wt.note.trim(),date:Xt}),yt(null),ze())},Le=async()=>{const H=bt.name.trim(),ye=parseFloat(bt.invested)||0;!H||ye<=0||(await F.createInvestment({name:H,kind:bt.kind,invested:ye,current_value:ye,note:bt.note.trim(),date:Xt}),Dt(null),ze())},et=H=>e&&e(H);return o?t.jsxs("div",{style:xe.page,children:[t.jsxs("div",{style:xe.head,children:[t.jsx("div",{style:xe.eyebrow,children:"Anvil · Today"}),t.jsx("h1",{style:xe.h1,children:"Dashboard"}),t.jsx("div",{style:xe.subhead,children:new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})})]}),t.jsx(To,{title:"Used today",onClick:()=>{},children:qe.length===0?t.jsx(Us,{children:"Nothing opened yet today."}):t.jsx("div",{style:xe.chipWrap,children:qe.map(([H,ye])=>t.jsxs("button",{onClick:()=>et(H),style:xe.usedChip,children:[E0[H]||H," ",t.jsx("span",{style:xe.usedChipTime,children:R0(ye)})]},H))})}),t.jsxs("div",{style:xe.statGrid,children:[t.jsx(Vs,{icon:gc,color:"#4C9A6B",label:"Habits done",value:`${K}/${s.length}`,onClick:()=>et("habits")}),t.jsx(Vs,{icon:pc,color:Gs,label:x?`Focus · ${x} tree${x===1?"":"s"}`:"Focus time",value:mc(ce),onClick:()=>et("grove")}),t.jsx(Vs,{icon:Xl,color:"#C9772E",label:"Spent today",value:Or(ie,r.code),onClick:()=>et("expenses")}),t.jsx(Vs,{icon:ja,color:"#8268B0",label:"Invested today",value:Or(Ae,r.code),onClick:()=>et("vault")})]}),t.jsx(To,{title:"Rewards",eyebrow:`Pending ${n(te)}`,onClick:()=>et("worth"),children:Me>0?t.jsxs("div",{style:xe.pieWrap,children:[t.jsxs("div",{style:xe.pieChart,children:[t.jsx("div",{style:{...xe.pieDisc,background:`conic-gradient(${Gs} 0 ${oe}%, ${Vu} ${oe}% ${oe+ae}%, ${Yu} ${oe+ae}% 100%)`}}),t.jsxs("div",{style:xe.pieHole,children:[t.jsx("span",{style:xe.pieHoleVal,children:n(Me)}),t.jsx("span",{style:xe.pieHoleLbl,children:"today"})]})]}),t.jsxs("div",{style:xe.pieLegend,children:[t.jsx(qa,{color:Gs,label:"Focus",pct:oe,val:n(G)}),t.jsx(qa,{color:Vu,label:"Usage",pct:ae,val:n(N)}),t.jsx(qa,{color:Yu,label:"Achievement",pct:P,val:n(de)})]})]}):t.jsx(Us,{children:"No rewards earned yet today."})}),W.length>0&&t.jsx(To,{title:"Revision due",eyebrow:`${W.length} pending`,onClick:()=>et("revision"),children:t.jsx("div",{style:xe.rows,children:W.slice(0,5).map(H=>t.jsxs("div",{style:xe.row,children:[t.jsx("span",{style:{...xe.dot,background:H.is_missed?"#C2536B":"#C9A227"}}),t.jsx("span",{style:xe.rowName,children:H.topic}),t.jsxs("span",{style:xe.rowMeta,children:["Stage ",H.stage]})]},H.review_id))})}),t.jsxs("div",{style:xe.cardGrid,children:[t.jsx(Ys,{icon:Yi,color:"#8268B0",label:"Spiritual",done:Ke,doneText:"Read today",idleText:"Not opened yet",onClick:()=>et("spiritual")}),t.jsx(Ys,{icon:Co,color:"#C9A227",label:"Affirmations",done:at,doneText:"Read today",idleText:"Not opened yet",onClick:()=>et("affirmations")}),t.jsx(Ys,{icon:fm,color:"#C9772E",label:"Kickstart",done:ft,doneText:"Watched today",idleText:"Not watched yet",onClick:()=>et("kickstart")}),t.jsx(Ys,{icon:cm,color:"#3A7CA5",label:"Mindscape",done:se,doneText:"Listened today",idleText:"Not listened yet",onClick:()=>et("mindscape")})]}),t.jsx(To,{title:"Skills enhanced",eyebrow:Xe.length?`${Xe.length} note${Xe.length===1?"":"s"}`:null,onClick:()=>et("skills"),children:Xe.length===0?t.jsx(Us,{children:"No skill notes added today."}):t.jsx("div",{style:xe.rows,children:Xe.slice(0,5).map(H=>t.jsxs("div",{style:xe.row,children:[t.jsx("span",{style:{...xe.dot,background:"#4C9A6B"}}),t.jsx("span",{style:xe.rowName,children:H.text}),t.jsx("span",{style:xe.rowMeta,children:H.skill})]},H.id))})}),We.length>0&&t.jsx(To,{title:"Achievements today",eyebrow:`${We.length}`,onClick:()=>et("achievements"),children:t.jsx("div",{style:xe.rows,children:We.map(H=>t.jsxs("div",{style:xe.row,children:[t.jsx("span",{style:{...xe.dot,background:"#C2536B"}}),t.jsx("span",{style:xe.rowName,children:H.title}),H.reward>0&&t.jsx("span",{style:xe.rowAmt,children:n(H.reward)})]},H.id))})}),t.jsx(To,{title:"Wallet status",onClick:()=>et("vault"),children:t.jsxs("div",{style:xe.walletRow,children:[t.jsxs("div",{style:xe.walletStat,children:[t.jsx("div",{style:{...xe.walletVal,color:"#C9772E"},children:Or(ie,r.code)}),t.jsx("div",{style:xe.walletLbl,children:"Spent today"})]}),t.jsxs("div",{style:xe.walletStat,children:[t.jsx("div",{style:{...xe.walletVal,color:"#8268B0"},children:Or(Ae,r.code)}),t.jsx("div",{style:xe.walletLbl,children:"Invested today"})]}),t.jsxs("div",{style:xe.walletStat,children:[t.jsx("div",{style:xe.walletVal,children:Or(te,r.code)}),t.jsx("div",{style:xe.walletLbl,children:"Rewards pending"})]})]})}),t.jsx("div",{style:xe.quickHead,children:"Quick log"}),t.jsxs("div",{style:xe.cardGrid,children:[t.jsxs("div",{style:xe.quickCard,children:[t.jsxs("div",{style:xe.quickTitle,children:[t.jsx(gc,{size:15,color:"#4C9A6B"})," Habits"]}),s.length===0?t.jsx(Us,{children:"No habits yet."}):t.jsx("div",{style:xe.habitList,children:s.slice(0,6).map(H=>{const ye=(H.logs||[]).includes(Xt);return t.jsxs("button",{onClick:()=>Sr(H),style:{...xe.habitChip,...ye?xe.habitChipOn:{}},children:[ye&&t.jsx(jn,{size:12})," ",H.name]},H.id)})})]}),t.jsxs("div",{style:xe.quickCard,children:[t.jsxs("div",{style:xe.quickTitle,children:[t.jsx(wg,{size:15,color:"#3A7CA5"})," Quadrant"]}),t.jsx("div",{style:xe.quadGrid,children:Qu.map(H=>t.jsxs("div",{style:xe.quadCell,children:[t.jsx("span",{style:xe.quadLabel,children:H.label}),t.jsx("span",{style:xe.quadCount,children:U[H.id]})]},H.id))}),t.jsxs("button",{onClick:()=>rt({title:"",pillar:qu[0],quadrant:"Q1",time_estimate_min:30}),style:xe.quickAddBtn,children:[t.jsx(st,{size:14})," Add task"]})]}),t.jsxs("div",{style:xe.quickCard,children:[t.jsxs("div",{style:xe.quickTitle,children:[t.jsx(pc,{size:15,color:Gs})," Grove focus"]}),t.jsxs("div",{style:xe.quickStat,children:[mc(ce)," today"]}),t.jsxs("button",{onClick:()=>Rt({label:"",tree:rn,duration_min:25}),style:xe.quickAddBtn,children:[t.jsx(st,{size:14})," Start session"]})]}),t.jsxs("div",{style:xe.quickCard,children:[t.jsxs("div",{style:xe.quickTitle,children:[t.jsx(Xl,{size:15,color:"#C9772E"})," Expense / Investment"]}),t.jsxs("div",{style:xe.quickStat,children:[Or(ie,r.code)," spent today"]}),t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsxs("button",{onClick:()=>{var H;return yt({category_id:((H=E[0])==null?void 0:H.id)||"",amount:"",note:""})},style:{...xe.quickAddBtn,flex:1},children:[t.jsx(st,{size:14})," Expense"]}),t.jsxs("button",{onClick:()=>Dt({name:"",kind:"Stocks",invested:"",note:""}),style:{...xe.quickAddBtn,flex:1},children:[t.jsx(st,{size:14})," Invest"]})]})]})]}),Ze&&t.jsxs(Ks,{title:"Add task",onClose:()=>rt(null),children:[t.jsx("input",{autoFocus:!0,placeholder:"Task title",value:Ze.title,onChange:H=>rt(ye=>({...ye,title:H.target.value})),style:xe.input}),t.jsx("select",{value:Ze.pillar,onChange:H=>rt(ye=>({...ye,pillar:H.target.value})),style:xe.input,children:qu.map(H=>t.jsx("option",{value:H,children:H},H))}),t.jsx("select",{value:Ze.quadrant,onChange:H=>rt(ye=>({...ye,quadrant:H.target.value})),style:xe.input,children:Qu.map(H=>t.jsxs("option",{value:H.id,children:[H.id," · ",H.label]},H.id))}),t.jsx("input",{type:"number",min:"1",placeholder:"Estimate (min)",value:Ze.time_estimate_min,onChange:H=>rt(ye=>({...ye,time_estimate_min:H.target.value})),style:xe.input}),t.jsx(Qs,{onCancel:()=>rt(null),onSave:k,disabled:!Ze.title.trim()})]}),gt&&t.jsxs(Ks,{title:"Start focus session",onClose:()=>Rt(null),children:[t.jsx("input",{autoFocus:!0,placeholder:"Label (optional)",value:gt.label,onChange:H=>Rt(ye=>({...ye,label:H.target.value})),style:xe.input}),t.jsx("select",{value:gt.tree,onChange:H=>Rt(ye=>({...ye,tree:H.target.value})),style:xe.input,children:Object.entries(Vt).map(([H,ye])=>t.jsx("option",{value:H,children:ye.label},H))}),t.jsx("input",{type:"number",min:"1",placeholder:"Duration (min)",value:gt.duration_min,onChange:H=>Rt(ye=>({...ye,duration_min:H.target.value})),style:xe.input}),t.jsx(Qs,{onCancel:()=>Rt(null),onSave:le,disabled:!Number(gt.duration_min)})]}),wt&&t.jsxs(Ks,{title:"Log expense",onClose:()=>yt(null),children:[t.jsx("select",{value:wt.category_id,onChange:H=>yt(ye=>({...ye,category_id:H.target.value})),style:xe.input,children:E.map(H=>t.jsx("option",{value:H.id,children:H.name},H.id))}),t.jsx("input",{autoFocus:!0,type:"number",min:"0",step:"0.01",placeholder:`Amount (${r.symbol})`,value:wt.amount,onChange:H=>yt(ye=>({...ye,amount:H.target.value})),style:xe.input}),t.jsx("input",{placeholder:"Note (optional)",value:wt.note,onChange:H=>yt(ye=>({...ye,note:H.target.value})),style:xe.input}),t.jsx(Qs,{onCancel:()=>yt(null),onSave:$e,disabled:!(parseFloat(wt.amount)>0&&wt.category_id)})]}),bt&&t.jsxs(Ks,{title:"Log investment",onClose:()=>Dt(null),children:[t.jsx("input",{autoFocus:!0,placeholder:"Name",value:bt.name,onChange:H=>Dt(ye=>({...ye,name:H.target.value})),style:xe.input}),t.jsx("select",{value:bt.kind,onChange:H=>Dt(ye=>({...ye,kind:H.target.value})),style:xe.input,children:["Stocks","Mutual Fund","Gold","Real Estate","Fixed Deposit","Crypto","Other"].map(H=>t.jsx("option",{value:H,children:H},H))}),t.jsx("input",{type:"number",min:"0",step:"0.01",placeholder:`Invested (${r.symbol})`,value:bt.invested,onChange:H=>Dt(ye=>({...ye,invested:H.target.value})),style:xe.input}),t.jsx("input",{placeholder:"Note (optional)",value:bt.note,onChange:H=>Dt(ye=>({...ye,note:H.target.value})),style:xe.input}),t.jsx(Qs,{onCancel:()=>Dt(null),onSave:Le,disabled:!(bt.name.trim()&&parseFloat(bt.invested)>0)})]})]}):t.jsx("div",{style:xe.loading,children:"Loading…"})}function To({title:e,eyebrow:r,onClick:n,children:o}){return t.jsxs("div",{style:xe.card,children:[t.jsxs("div",{style:xe.cardTitleRow,children:[t.jsxs("button",{onClick:n,style:xe.cardTitleBtn,children:[e," ",t.jsx(ky,{size:13})]}),r&&t.jsx("span",{style:xe.cardEyebrow,children:r})]}),o]})}function Us({children:e}){return t.jsx("div",{style:xe.muted,children:e})}function qa({color:e,label:r,pct:n,val:o}){return t.jsxs("div",{style:xe.pieLegRow,children:[t.jsx("span",{style:{...xe.legendDot,background:e}}),t.jsx("span",{style:xe.pieLegName,children:r}),t.jsxs("span",{style:xe.pieLegPct,children:[Math.round(n),"%"]}),t.jsx("span",{style:xe.pieLegMin,children:o})]})}function Vs({icon:e,color:r,label:n,value:o,sub:i,onClick:s}){return t.jsxs("button",{onClick:s,style:xe.statTile,children:[t.jsx("div",{style:{...xe.statIcon,background:`${r}1A`,color:r},children:t.jsx(e,{size:17})}),t.jsxs("div",{style:{minWidth:0},children:[t.jsx("div",{style:xe.statVal,children:o}),t.jsxs("div",{style:xe.statLbl,children:[n,i?` · ${i}`:""]})]})]})}function Ys({icon:e,color:r,label:n,done:o,doneText:i,idleText:s,onClick:l}){return t.jsxs("button",{onClick:l,style:xe.miniCard,children:[t.jsx("div",{style:{...xe.statIcon,background:`${r}1A`,color:r},children:t.jsx(e,{size:16})}),t.jsx("div",{style:xe.miniLabel,children:n}),t.jsx("div",{style:{...xe.miniStatus,color:o?"#4C9A6B":"var(--text-3)"},children:o?i:s})]})}function Ks({title:e,onClose:r,children:n}){return t.jsx("div",{style:xe.modalOverlay,onClick:r,children:t.jsxs("div",{style:xe.modalCard,onClick:o=>o.stopPropagation(),children:[t.jsx("div",{style:xe.modalTitle,children:e}),t.jsx("div",{style:xe.modalBody,children:n})]})})}function Qs({onCancel:e,onSave:r,disabled:n}){return t.jsxs("div",{style:xe.modalActions,children:[t.jsx("button",{onClick:e,style:xe.modalCancel,children:"Cancel"}),t.jsx("button",{onClick:r,disabled:n,style:{...xe.modalConfirm,...n?{opacity:.5,cursor:"not-allowed"}:{}},children:"Save"})]})}const xe={loading:{padding:40,textAlign:"center",color:"var(--text-3)",fontFamily:"'Inter',system-ui,sans-serif"},page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},chipWrap:{display:"flex",gap:8,flexWrap:"wrap"},usedChip:{border:"1px solid var(--border)",background:"var(--surface-2)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",gap:6},usedChipTime:{color:"var(--text-3)",fontWeight:600,fontSize:11.5},statGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:10,marginBottom:14},statTile:{display:"flex",alignItems:"center",gap:10,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,padding:"12px 14px",cursor:"pointer",fontFamily:"inherit",textAlign:"left",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},statIcon:{width:34,height:34,borderRadius:10,display:"grid",placeItems:"center",flexShrink:0},statVal:{fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},card:{background:"var(--surface)",borderRadius:16,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,marginBottom:10},cardTitleBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"'Fraunces',Georgia,serif",fontSize:16,fontWeight:700,color:"var(--text)"},cardEyebrow:{fontSize:12,fontWeight:700,color:"var(--text-3)"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"10px 0"},rows:{display:"flex",flexDirection:"column",gap:2},row:{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:"1px solid var(--border)"},dot:{width:10,height:10,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:13.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},rowMeta:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,flexShrink:0},rowAmt:{fontSize:13.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:20,flexWrap:"wrap"},pieChart:{position:"relative",width:110,height:110,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:66,height:66,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:12.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:9.5,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:160,display:"flex",flexDirection:"column",gap:8},pieLegRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:10,height:10,borderRadius:3,flexShrink:0},pieLegName:{flex:1,fontSize:13,fontWeight:600},pieLegPct:{fontSize:12.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",width:40,textAlign:"right"},pieLegMin:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,minWidth:58,textAlign:"right"},cardGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:10,marginBottom:14},miniCard:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:6,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,padding:"12px 14px",cursor:"pointer",fontFamily:"inherit",textAlign:"left",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},miniLabel:{fontSize:13,fontWeight:700,color:"var(--text)"},miniStatus:{fontSize:11.5,fontWeight:600},walletRow:{display:"flex",gap:10},walletStat:{flex:1,textAlign:"center"},walletVal:{fontSize:17,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},walletLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:2},quickHead:{fontSize:13,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",margin:"6px 0 10px"},quickCard:{border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,padding:"14px 16px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},quickTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13.5,fontWeight:700,color:"var(--text)"},quickStat:{fontSize:13,color:"var(--text-2)",fontWeight:600},quickAddBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface-2)",color:"var(--text)",padding:"8px 10px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},habitList:{display:"flex",flexWrap:"wrap",gap:6},habitChip:{border:"1px solid var(--border)",background:"var(--surface-2)",color:"var(--text-2)",padding:"5px 10px",borderRadius:14,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",gap:4},habitChipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},quadGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6},quadCell:{display:"flex",justifyContent:"space-between",alignItems:"center",border:"1px solid var(--border)",borderRadius:8,padding:"5px 8px",fontSize:11.5},quadLabel:{color:"var(--text-3)",fontWeight:600},quadCount:{fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",fontSize:13},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modalCard:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"20px 20px 16px",width:340,maxWidth:"100%",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)"},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},modalBody:{display:"flex",flexDirection:"column",gap:8},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface-2)",outline:"none"},modalActions:{display:"flex",gap:8,marginTop:6},modalCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalConfirm:{flex:1,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},F0=7e3;function ur(e,r,n){const[o,i]=c.useState([]),s=c.useRef({}),l=c.useCallback(async(g,h="Item")=>{await e(g),n();const f=`${g}-${Date.now()}`;i(m=>[...m,{id:f,itemId:g,label:h}]),s.current[f]=setTimeout(()=>{i(m=>m.filter(B=>B.id!==f)),delete s.current[f]},F0)},[e,n]),a=c.useCallback(async g=>{const h=o.find(f=>f.id===g);h&&(clearTimeout(s.current[g]),delete s.current[g],i(f=>f.filter(m=>m.id!==g)),await r(h.itemId),n())},[o,r,n]),d=c.useCallback(g=>{clearTimeout(s.current[g]),delete s.current[g],i(h=>h.filter(f=>f.id!==g))},[]);return{deleteItem:l,toasts:o,handleUndo:a,handleDismiss:d}}function pr({toasts:e,onUndo:r,onDismiss:n}){return t.jsx("div",{style:Ao.container,children:e.map(o=>t.jsx(A0,{toast:o,onUndo:r,onDismiss:n},o.id))})}function A0({toast:e,onUndo:r,onDismiss:n}){const[o,i]=c.useState(100);return c.useEffect(()=>{const s=Date.now(),l=7e3,a=setInterval(()=>{const d=Date.now()-s,g=Math.max(0,100-d/l*100);i(g),g===0&&clearInterval(a)},50);return()=>clearInterval(a)},[]),t.jsxs("div",{style:Ao.toast,children:[t.jsx("div",{style:{...Ao.bar,width:`${o}%`}}),t.jsxs("span",{style:Ao.msg,children:[e.label," deleted"]}),t.jsx("button",{style:Ao.undoBtn,onClick:()=>r(e.id),children:"Undo"}),t.jsx("button",{style:Ao.closeBtn,onClick:()=>n(e.id),children:"×"})]})}const Ao={container:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",gap:8,zIndex:999,pointerEvents:"none"},toast:{position:"relative",display:"flex",alignItems:"center",gap:12,background:"var(--accent-strong)",color:"#fff",borderRadius:10,padding:"12px 16px",fontSize:13.5,fontFamily:"'Inter', system-ui, sans-serif",boxShadow:"0 4px 20px rgba(0,0,0,0.25)",minWidth:260,overflow:"hidden",pointerEvents:"all"},bar:{position:"absolute",bottom:0,left:0,height:3,background:"#4C9A6B",transition:"width 0.05s linear",borderRadius:"0 0 0 10px"},msg:{flex:1,fontWeight:500},undoBtn:{border:"1px solid rgba(255,255,255,0.3)",background:"none",color:"#4C9A6B",fontWeight:700,fontSize:13,padding:"4px 10px",borderRadius:6,cursor:"pointer",fontFamily:"inherit"},closeBtn:{border:"none",background:"none",color:"rgba(255,255,255,0.5)",cursor:"pointer",fontSize:18,lineHeight:1,padding:"0 2px"}},sn={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},W0=[{id:"Q1",symbol:"™",title:"Do Now",sub:"Important · Urgent",accent:"#C2536B"},{id:"Q2",symbol:"©",title:"Schedule",sub:"Important · Not Urgent",accent:"#3A7CA5"},{id:"Q3",symbol:"®",title:"Delegate",sub:"Not Important · Urgent",accent:"#C9A227"},{id:"Q4",symbol:"•",title:"Drop",sub:"Not Important · Not Urgent",accent:"#8A8780"}];function zm(){return new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Kolkata"})}function Tm(){const e=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"})),n=e.getMinutes()<30?30:0,o=n===0?e.getHours()+1:e.getHours();return`${String(o%24).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function Xu(e,r){const[n,o]=e.split(":").map(Number),i=n*60+o+r;return`${String(Math.floor(i/60)%24).padStart(2,"0")}:${String(i%60).padStart(2,"0")}`}function M0(e){return e?new Date(e).toLocaleString("en-IN",{timeZone:"Asia/Kolkata",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0}):""}const qs=()=>({title:"",pillar:"Financial",est:30,date:zm(),startTime:Tm()});function L0(){const[e,r]=c.useState([]),[n,o]=c.useState([]),[i,s]=c.useState("All"),[l,a]=c.useState(null),[d,g]=c.useState(null),[h,f]=c.useState(qs()),[m,B]=c.useState(null),[T,R]=c.useState(qs()),w=c.useCallback(()=>F.getTasks().then(r).catch(console.error),[]);c.useEffect(()=>{w(),F.getGoals().then(G=>o(G.filter(N=>N.horizon==="Weekly"))).catch(()=>{})},[w]);const p=Object.keys(sn),b=n.filter(G=>i==="All"||G.pillar===i),u=n.find(G=>G.id===l)||null,z=e.filter(G=>l!=null?G.goal_id===l:i!=="All"?G.pillar===i:!0),v=G=>{s(G),a(null),g(null),f(N=>({...N,pillar:G==="All"?"Financial":G}))},I=G=>{a(G),g(null);const N=n.find(ge=>ge.id===G);N&&f(ge=>({...ge,pillar:N.pillar}))},{deleteItem:E,toasts:S,handleUndo:j,handleDismiss:Y}=ur(F.deleteTask,F.restoreTask,w),re=G=>z.filter(N=>N.quadrant===G),ee=G=>re(G).reduce((N,ge)=>N+ge.time_estimate_min,0),W=G=>G>=60?`${Math.floor(G/60)}h${G%60?` ${G%60}m`:""}`:`${G}m`,he=async G=>{if(!h.title.trim())return;const N=h.date&&h.startTime?`${h.date}T${h.startTime}:00`:null;await F.createTask({pillar:u?u.pillar:h.pillar,title:h.title,quadrant:G,time_estimate_min:Number(h.est)||30,start_datetime:N,goal_id:l??null}),f(qs()),g(null),w()},we=(G,N)=>E(G,N),be=G=>{const N=G.start_datetime?G.start_datetime.split("T"):[];B(G.id),g(null),R({title:G.title,pillar:G.pillar,est:G.time_estimate_min,date:N[0]||zm(),startTime:(N[1]||"").slice(0,5)||Tm()})},ze=async G=>{if(!T.title.trim())return;const N=T.date&&T.startTime?`${T.date}T${T.startTime}:00`:null;await F.updateTask(G.id,{title:T.title.trim(),pillar:T.pillar,time_estimate_min:Number(T.est)||30,start_datetime:N}),B(null),w()},K=c.useRef(null),U=c.useRef(null),[ce,x]=c.useState(null),Q=(G,N)=>{var de;const ge=document.elementFromPoint(G,N);return ge&&ge.closest&&((de=ge.closest("[data-quad]"))==null?void 0:de.getAttribute("data-quad"))||null};c.useEffect(()=>{const G=ge=>{const de=K.current;if(!de)return;const Me=Math.hypot(ge.clientX-de.startX,ge.clientY-de.startY);if(!de.active){if(de.pointerType!=="mouse"){Me>12&&(clearTimeout(U.current),K.current=null);return}if(Me<6)return;de.active=!0,document.body.style.userSelect="none"}ge.cancelable&&ge.preventDefault(),de.overQ=Q(ge.clientX,ge.clientY),x({id:de.task.id,title:de.task.title,x:ge.clientX,y:ge.clientY,overQ:de.overQ})},N=()=>{clearTimeout(U.current);const ge=K.current;K.current=null,document.body.style.userSelect="",document.body.style.touchAction="",x(null),ge&&ge.active&&ge.overQ&&ge.overQ!==ge.task.quadrant&&F.updateTask(ge.task.id,{quadrant:ge.overQ}).then(w).catch(()=>{})};return window.addEventListener("pointermove",G,{passive:!1}),window.addEventListener("pointerup",N),window.addEventListener("pointercancel",N),()=>{window.removeEventListener("pointermove",G),window.removeEventListener("pointerup",N),window.removeEventListener("pointercancel",N)}},[w]);const O=(G,N)=>{G.pointerType==="mouse"&&G.button!==0||(K.current={task:N,startX:G.clientX,startY:G.clientY,active:!1,pointerType:G.pointerType,overQ:null},G.pointerType!=="mouse"&&(U.current=setTimeout(()=>{const ge=K.current;ge&&(ge.active=!0,document.body.style.touchAction="none",x({id:ge.task.id,title:ge.task.title,x:ge.startX,y:ge.startY,overQ:ge.task.quadrant}))},280)))};return t.jsxs("div",{style:Ee.page,children:[t.jsxs("div",{style:Ee.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:Ee.eyebrow,children:"Anvil · Weekly Routing"}),t.jsx("h1",{style:Ee.h1,children:"Weekly Routing"})]}),t.jsx("div",{style:Ee.headRight,children:t.jsx("div",{style:Ee.legend,children:Object.entries(sn).map(([G,N])=>t.jsxs("span",{style:Ee.legendItem,children:[t.jsx("span",{style:{...Ee.dot,background:N.dot}}),G]},G))})})]}),t.jsx("div",{style:Ee.filterBar,children:["All",...p].map(G=>{const N=i===G,ge=sn[G];return t.jsxs("button",{onClick:()=>v(G),style:{...Ee.pillChip,...N?ge?{background:ge.dot,color:"#fff",borderColor:ge.dot}:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:[ge&&t.jsx("span",{style:{...Ee.dot,background:N?"#fff":ge.dot}}),G==="All"?"All":G]},G)})}),t.jsxs("div",{style:Ee.goalBar,children:[t.jsx("button",{onClick:()=>a(null),style:{...Ee.goalChip,...l==null?Ee.goalChipOn:{}},children:"All goals"}),b.map(G=>{var de;const N=((de=sn[G.pillar])==null?void 0:de.dot)||"#9A968C",ge=l===G.id;return t.jsxs("button",{onClick:()=>I(G.id),style:{...Ee.goalChip,...ge?{background:N,color:"#fff",borderColor:N}:{}},title:G.title,children:[t.jsx("span",{style:{...Ee.dot,background:ge?"#fff":N}}),t.jsx("span",{style:Ee.goalChipText,children:G.title})]},G.id)}),b.length===0&&t.jsxs("span",{style:Ee.goalEmpty,children:["No weekly goals",i!=="All"?` for ${i}`:""," — create them in Goals."]})]}),t.jsx("div",{style:Ee.grid,children:W0.map(G=>{var N,ge;return t.jsxs("section",{"data-quad":G.id,style:{...Ee.quad,borderTop:`3px solid ${G.accent}`,...ce&&ce.overQ===G.id&&ce.overQ!==((N=e.find(de=>de.id===ce.id))==null?void 0:N.quadrant)?{outline:`2px dashed ${G.accent}`,outlineOffset:2,background:"var(--hover)"}:{}},children:[t.jsxs("header",{style:Ee.quadHead,children:[t.jsxs("div",{style:Ee.quadTitleRow,children:[t.jsx("span",{style:{...Ee.symbol,color:G.accent},children:G.symbol}),t.jsxs("div",{children:[t.jsx("div",{style:Ee.quadTitle,children:G.title}),t.jsx("div",{style:Ee.quadSub,children:G.sub})]})]}),t.jsx("span",{style:Ee.quadTotal,children:W(ee(G.id))})]}),t.jsxs("div",{style:Ee.list,children:[re(G.id).map(de=>{const Me=sn[de.pillar]||sn.Financial;return m===de.id?t.jsxs("div",{style:Ee.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"Task title",value:T.title,onChange:oe=>R({...T,title:oe.target.value}),onKeyDown:oe=>oe.key==="Enter"&&ze(de),style:Ee.input}),t.jsxs("div",{style:Ee.dateTimeRow,children:[t.jsxs("div",{style:Ee.dateTimeGroup,children:[t.jsx("label",{style:Ee.dtLabel,children:"Date"}),t.jsx("input",{type:"date",value:T.date,onChange:oe=>R({...T,date:oe.target.value}),style:Ee.dtInput})]}),t.jsxs("div",{style:Ee.dateTimeGroup,children:[t.jsx("label",{style:Ee.dtLabel,children:"Start"}),t.jsx("input",{type:"time",value:T.startTime,onChange:oe=>R({...T,startTime:oe.target.value}),style:Ee.dtInput})]}),t.jsxs("div",{style:Ee.dateTimeGroup,children:[t.jsx("label",{style:Ee.dtLabel,children:"End"}),t.jsx("div",{style:Ee.dtEndValue,children:Xu(T.startTime,Number(T.est)||30)})]})]}),t.jsxs("div",{style:Ee.addRow,children:[t.jsx("select",{value:T.pillar,onChange:oe=>R({...T,pillar:oe.target.value}),style:Ee.select,children:Object.keys(sn).map(oe=>t.jsx("option",{children:oe},oe))}),t.jsx("input",{type:"number",value:T.est,onChange:oe=>R({...T,est:oe.target.value}),style:{...Ee.input,width:60}}),t.jsx("span",{style:Ee.minLabel,children:"min"}),t.jsx("button",{onClick:()=>ze(de),style:Ee.saveBtn,children:t.jsx(Oe,{size:14})}),t.jsx("button",{onClick:()=>B(null),style:Ee.cancelBtn,children:t.jsx(Fe,{size:14})})]})]},de.id):t.jsxs("div",{onPointerDown:oe=>O(oe,de),style:{...Ee.card,background:Me.soft,cursor:"grab",touchAction:"pan-y",...(ce==null?void 0:ce.id)===de.id?{opacity:.4}:{}},children:[t.jsx("span",{style:{...Ee.cardBar,background:Me.dot}}),t.jsxs("div",{style:Ee.cardBody,children:[t.jsx("div",{style:Ee.cardTitle,children:de.title}),de.start_datetime&&t.jsxs("div",{style:Ee.eventTime,children:[t.jsx(Dy,{size:10}),M0(de.start_datetime)]}),t.jsxs("div",{style:Ee.cardMeta,children:[t.jsxs("span",{style:Ee.metaPill,children:[t.jsx("span",{style:{...Ee.dot,background:Me.dot,width:7,height:7}}),de.pillar]}),t.jsxs("span",{style:Ee.metaPill,children:[t.jsx(am,{size:11})," ",W(de.time_estimate_min)]})]})]}),t.jsxs("div",{style:Ee.cardActions,children:[t.jsx("button",{onClick:()=>be(de),onPointerDown:oe=>oe.stopPropagation(),style:Ee.delBtn,title:"Edit",children:t.jsx(vt,{size:12})}),t.jsx("button",{onClick:()=>we(de.id,de.title),onPointerDown:oe=>oe.stopPropagation(),style:Ee.delBtn,children:t.jsx(Fe,{size:13})})]})]},de.id)}),d===G.id?t.jsxs("div",{style:Ee.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"Task title",value:h.title,onChange:de=>f({...h,title:de.target.value}),onKeyDown:de=>de.key==="Enter"&&he(G.id),style:Ee.input}),t.jsxs("div",{style:Ee.dateTimeRow,children:[t.jsxs("div",{style:Ee.dateTimeGroup,children:[t.jsx("label",{style:Ee.dtLabel,children:"Date"}),t.jsx("input",{type:"date",value:h.date,onChange:de=>f({...h,date:de.target.value}),style:Ee.dtInput})]}),t.jsxs("div",{style:Ee.dateTimeGroup,children:[t.jsx("label",{style:Ee.dtLabel,children:"Start"}),t.jsx("input",{type:"time",value:h.startTime,onChange:de=>f({...h,startTime:de.target.value}),style:Ee.dtInput})]}),t.jsxs("div",{style:Ee.dateTimeGroup,children:[t.jsx("label",{style:Ee.dtLabel,children:"End"}),t.jsx("div",{style:Ee.dtEndValue,children:Xu(h.startTime,Number(h.est)||30)})]})]}),t.jsxs("div",{style:Ee.addRow,children:[u?t.jsxs("span",{style:Ee.goalPillarTag,children:[t.jsx("span",{style:{...Ee.dot,background:(ge=sn[u.pillar])==null?void 0:ge.dot}})," ",u.pillar]}):t.jsx("select",{value:h.pillar,onChange:de=>f({...h,pillar:de.target.value}),style:Ee.select,children:Object.keys(sn).map(de=>t.jsx("option",{children:de},de))}),t.jsx("input",{type:"number",value:h.est,onChange:de=>f({...h,est:de.target.value}),style:{...Ee.input,width:60}}),t.jsx("span",{style:Ee.minLabel,children:"min"}),t.jsx("button",{onClick:()=>he(G.id),style:Ee.saveBtn,children:t.jsx(Oe,{size:14})}),t.jsx("button",{onClick:()=>{g(null),f(qs())},style:Ee.cancelBtn,children:t.jsx(Fe,{size:14})})]})]}):t.jsxs("button",{onClick:()=>g(G.id),style:Ee.addTrigger,children:[t.jsx(st,{size:13})," Add task"]})]})]},G.id)})}),ce&&t.jsx("div",{style:{...Ee.dragClone,left:ce.x+12,top:ce.y+12},children:ce.title}),t.jsx(pr,{toasts:S,onUndo:j,onDismiss:Y})]})}const Ee={page:{fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:16,marginBottom:22},headRight:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:10},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces', Georgia, serif"},legend:{display:"flex",gap:14,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--text-2)",fontWeight:500},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:10},pillChip:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},goalBar:{display:"flex",gap:7,flexWrap:"wrap",alignItems:"center",marginBottom:18,paddingBottom:14,borderBottom:"1px solid var(--border)"},goalChip:{display:"inline-flex",alignItems:"center",gap:6,maxWidth:220,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},goalChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},goalChipText:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},goalEmpty:{fontSize:12,color:"var(--text-3)",fontStyle:"italic"},goalPillarTag:{display:"inline-flex",alignItems:"center",gap:6,fontSize:12.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"7px 10px",borderRadius:6,flex:1},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16},quad:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.06)"},quadHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14},quadTitleRow:{display:"flex",gap:10,alignItems:"center"},symbol:{fontSize:20,lineHeight:1},quadTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em"},quadSub:{fontSize:11,color:"var(--text-3)",marginTop:1,letterSpacing:"0.02em"},quadTotal:{fontSize:12,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"3px 9px",borderRadius:20},list:{display:"flex",flexDirection:"column",gap:8},card:{display:"flex",alignItems:"stretch",gap:10,borderRadius:9,padding:"10px 10px 10px 0",overflow:"hidden"},cardBar:{width:3,borderRadius:3,flexShrink:0},cardBody:{flex:1,minWidth:0},cardTitle:{fontSize:13.5,fontWeight:500,lineHeight:1.35,marginBottom:4},eventTime:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#3A7CA5",fontWeight:500,marginBottom:5},cardMeta:{display:"flex",gap:8,flexWrap:"wrap"},metaPill:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"var(--text-2)",fontWeight:500},cardActions:{display:"flex",flexDirection:"column",gap:4,alignSelf:"center",flexShrink:0},delBtn:{width:30,height:30,borderRadius:8,border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center"},addTrigger:{display:"flex",alignItems:"center",gap:5,fontSize:12.5,color:"var(--text-3)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"8px 10px",cursor:"pointer",fontWeight:500,marginTop:2},addBox:{border:"1px solid var(--border)",borderRadius:9,padding:10,display:"flex",flexDirection:"column",gap:8},dateTimeRow:{display:"flex",gap:8,alignItems:"flex-end"},dateTimeGroup:{display:"flex",flexDirection:"column",gap:3,flex:1},dtLabel:{fontSize:10,fontWeight:600,color:"var(--text-3)",letterSpacing:"0.08em",textTransform:"uppercase"},dtInput:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},dtEndValue:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,color:"var(--text-2)",background:"var(--bg)"},addRow:{display:"flex",alignItems:"center",gap:6},input:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",flex:1,minWidth:0},select:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 8px",fontSize:12.5,fontFamily:"inherit",flex:1},minLabel:{fontSize:11,color:"var(--text-3)"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},dragClone:{position:"fixed",zIndex:1e3,pointerEvents:"none",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:8,padding:"8px 12px",fontSize:13,fontWeight:600,color:"var(--text)",boxShadow:"0 8px 24px rgba(0,0,0,0.25)",maxWidth:220,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},Tr={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},Ci=Object.keys(Tr),wl=["Yearly","Quarterly","Monthly","Weekly"],Xr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Zu=[{label:"Q1 · Jan–Mar",startMonth:0},{label:"Q2 · Apr–Jun",startMonth:3},{label:"Q3 · Jul–Sep",startMonth:6},{label:"Q4 · Oct–Dec",startMonth:9}],Sl=new Date().getFullYear(),Io=Array.from({length:8},(e,r)=>Sl-1+r);function _0(e=720){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const Di=864e5,Ot=30,Qi=190,Bo=e=>new Date(e+"T00:00:00"),Ju=e=>e.toLocaleDateString("en-US",{month:"short",day:"numeric"}),$0=[{key:"yearly",label:"Yearly",horizons:["Yearly"]},{key:"quarterly",label:"Quarterly",horizons:["Quarterly"]},{key:"mw",label:"Monthly & Weekly",horizons:["Monthly","Weekly"]}],ep={Yearly:"Yr",Quarterly:"Q",Monthly:"Mo",Weekly:"Wk"},P0={Yearly:"Y",Quarterly:"Q",Monthly:"M",Weekly:"W"},tp={Yearly:0,Quarterly:1,Monthly:2,Weekly:3},Xa=e=>wl[Math.min(wl.indexOf(e)+1,wl.length-1)],Xs=e=>{if(!e||!e.start_date)return Array.from({length:12},(l,a)=>a);const r=new Date(e.start_date+"T00:00:00"),n=new Date(e.end_date+"T00:00:00"),o=r.getFullYear(),i=r.getMonth(),s=n.getFullYear()>o?11:n.getMonth();return Array.from({length:s-i+1},(l,a)=>i+a)},zi=e=>new Date(e+"T00:00:00").getFullYear(),Im=(e,r,n)=>{const o=(n-1)*7+1,i=Math.min(o+6,new Date(e,r+1,0).getDate()),s=String(r+1).padStart(2,"0");return{start_date:`${e}-${s}-${String(o).padStart(2,"0")}`,end_date:`${e}-${s}-${String(i).padStart(2,"0")}`}},rp=(e,r,n,o=1)=>{const i=r;switch(e){case"Yearly":return{start_date:`${i}-01-01`,end_date:`${i}-12-31`};case"Quarterly":{const s=Math.floor(n/3)*3,l=s+1,a=s+3,d=new Date(i,a,0).getDate();return{start_date:`${i}-${String(l).padStart(2,"0")}-01`,end_date:`${i}-${String(a).padStart(2,"0")}-${d}`}}case"Monthly":{const s=new Date(i,n+1,0).getDate();return{start_date:`${i}-${String(n+1).padStart(2,"0")}-01`,end_date:`${i}-${String(n+1).padStart(2,"0")}-${s}`}}case"Weekly":return Im(i,n,o);default:return{start_date:`${i}-01-01`,end_date:`${i}-12-31`}}},qi=(e,r)=>{const n=new Date(e+"T00:00:00");return n.setDate(n.getDate()+r),`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`},Zl=(e,r)=>Math.round((new Date(r+"T00:00:00")-new Date(e+"T00:00:00"))/Di)+1,N0=(e,r,n)=>{if(!n||!n.start_date||!n.end_date)return{start_date:e,end_date:r,clamped:!1};const o=Zl(e,r);let i=e,s=r,l=!1;return i<n.start_date&&(i=n.start_date,s=qi(i,o-1),l=!0),s>n.end_date&&(s=n.end_date,i=qi(s,-(o-1)),l=!0,i<n.start_date&&(i=n.start_date)),{start_date:i,end_date:s,clamped:l}},O0=(e,r)=>new Date(e,r+1,0).getDate(),fc=e=>{const r=new Date(e.start_date+"T00:00:00");if(e.horizon==="Monthly")return O0(r.getFullYear(),r.getMonth());if(e.horizon==="Weekly"){const n=Math.min(Math.max(Math.ceil(r.getDate()/7),1),4),o=Im(r.getFullYear(),r.getMonth(),n);return Zl(o.start_date,o.end_date)}return Zl(e.start_date,e.end_date)},np=e=>Math.round(fc(e)*1.5),H0=e=>e.horizon==="Monthly"||e.horizon==="Weekly",G0=e=>{if(!e.start_date)return"";const r=new Date(e.start_date+"T00:00:00"),n=r.getMonth();switch(e.horizon){case"Yearly":{const o=e.end_date?new Date(e.end_date+"T00:00:00").getFullYear():r.getFullYear();return o>r.getFullYear()?`${r.getFullYear()}–${o}`:`${r.getFullYear()}`}case"Quarterly":return`Q${Math.floor(n/3)+1} ${r.getFullYear()}`;case"Monthly":return`${Xr[n]} ${r.getFullYear()}`;case"Weekly":return`${Xr[n]} W${Math.ceil(r.getDate()/7)}`;default:return""}};function U0(){const[e,r]=c.useState([]),[n,o]=c.useState("All"),[i,s]=c.useState({}),[l,a]=c.useState({}),[d,g]=c.useState(null),[h,f]=c.useState(""),[m,B]=c.useState(0),[T,R]=c.useState(1),[w,p]=c.useState(Sl),[b,u]=c.useState(Sl),[z,v]=c.useState("Yearly"),[I,E]=c.useState(Ci[0]),[S,j]=c.useState(null),Y=_0(),[re,ee]=c.useState(!Y),[W,he]=c.useState("day"),[we,be]=c.useState(null),ze=c.useRef(null);c.useEffect(()=>{ze.current=we},[we]);const K=c.useRef(e);c.useEffect(()=>{K.current=e},[e]);const[U,ce]=c.useState(null),x=c.useRef(null);c.useEffect(()=>{x.current=U},[U]);const Q=c.useRef(null),O=c.useRef(0),[G,N]=c.useState(null),ge=c.useRef(null),de=c.useCallback(A=>{N(A),clearTimeout(ge.current),ge.current=setTimeout(()=>N(null),2800)},[]),[Me,oe]=c.useState(null),ae=c.useRef(null),[P,X]=c.useState(null),[me,D]=c.useState(null),y=(A,Z)=>{if(P===Z){X(null);return}const Te=A.currentTarget.getBoundingClientRect(),Pe=Te.bottom+220<window.innerHeight;D({right:Math.max(8,window.innerWidth-Te.right),...Pe?{top:Te.bottom+4}:{bottom:window.innerHeight-Te.top+4}}),X(Z)},te=A=>{clearTimeout(ae.current),ae.current=setTimeout(()=>oe(A),350)},M=()=>{clearTimeout(ae.current),oe(null)},ie=c.useCallback(()=>{F.getGoals().then(r).catch(console.error)},[]);c.useEffect(()=>{ie()},[ie]);const{deleteItem:ve,toasts:Ae,handleUndo:qe,handleDismiss:Ye}=ur(F.deleteGoal,F.restoreGoal,ie),Ke=c.useCallback(async()=>{const A=ze.current;if(be(null),!A)return;const Z=Math.round(A.dx/(A.pxPerDay||Ot));if(!Z)return;let Te=qi(A.g.start_date,Z),Pe=qi(A.g.end_date,Z);if(A.g.parent_goal_id){const nt=K.current.find(tt=>tt.id===A.g.parent_goal_id),Je=N0(Te,Pe,nt);Je.clamped&&de(`Can't move past "${(nt==null?void 0:nt.title)||"parent goal"}" — kept within its dates.`),Te=Je.start_date,Pe=Je.end_date}(Te!==A.g.start_date||Pe!==A.g.end_date)&&(await F.updateGoal(A.g.id,{pillar:A.g.pillar,start_date:Te,end_date:Pe}),ie())},[ie,de]),at=!!we;c.useEffect(()=>{if(!at)return;const A=Je=>{O.current=Je.clientX,be(tt=>tt&&{...tt,dx:Je.clientX-tt.startX})},Z=()=>Ke();window.addEventListener("pointermove",A),window.addEventListener("pointerup",Z);const Te=44,Pe=16,nt=setInterval(()=>{const Je=Q.current;if(!Je)return;const tt=Je.getBoundingClientRect(),pt=O.current;let Ie=0;if(pt<tt.left+Te?Ie=-1:pt>tt.right-Te&&(Ie=1),!Ie)return;const Nt=Je.scrollLeft;Je.scrollLeft=Math.max(0,Math.min(Nt+Ie*Pe,Je.scrollWidth-Je.clientWidth));const hr=Je.scrollLeft-Nt;hr&&be(ht=>ht&&{...ht,startX:ht.startX-hr,dx:pt-(ht.startX-hr)})},16);return()=>{window.removeEventListener("pointermove",A),window.removeEventListener("pointerup",Z),clearInterval(nt)}},[at,Ke]);const Xe=c.useCallback(async()=>{const A=x.current;if(ce(null),!A)return;const Z=A.g,Te=fc(Z),Pe=np(Z),nt=Math.max(Te,Math.min(Pe,Zl(Z.start_date,Z.end_date)+Math.round(A.dx/Ot)));let Je=qi(Z.start_date,nt-1);if(Z.parent_goal_id){const tt=K.current.find(pt=>pt.id===Z.parent_goal_id);tt!=null&&tt.end_date&&Je>tt.end_date&&(Je=tt.end_date,de(`Can't extend past "${(tt==null?void 0:tt.title)||"parent goal"}" — kept within its dates.`))}Je!==Z.end_date&&Je>=Z.start_date&&(await F.updateGoal(Z.id,{end_date:Je}),ie())},[ie,de]),ft=!!U;c.useEffect(()=>{if(!ft)return;const A=Te=>ce(Pe=>Pe&&{...Pe,dx:Te.clientX-Pe.startX}),Z=()=>Xe();return window.addEventListener("pointermove",A),window.addEventListener("pointerup",Z),()=>{window.removeEventListener("pointermove",A),window.removeEventListener("pointerup",Z)}},[ft,Xe]);const se=n==="All",We=Tr[n]||{dot:"var(--text-3)"},Ze=se?e:e.filter(A=>A.pillar===n),rt=Ze.filter(A=>!A.parent_goal_id),gt=A=>Ze.filter(Z=>Z.parent_goal_id===A),Rt=A=>a(Z=>({...Z,[A]:!Z[A]})),wt=A=>A.horizon==="Monthly"||A.horizon==="Weekly",yt=A=>i[A.id]!==void 0?i[A.id]:wt(A),bt=A=>s(Z=>({...Z,[A.id]:!yt(A)})),Dt=(A,Z=null)=>{g(A),f(""),R(1);const Te=Z?zi(Z.start_date):Sl;p(Te),u(Te),A==="ROOT"&&E(se?Ci[0]:n);const Pe=A==="ROOT"?"Yearly":Xa(Z==null?void 0:Z.horizon);v(Pe);const nt=A==="ROOT"?Array.from({length:12},(Je,tt)=>tt):Xs(Z);B(Pe==="Quarterly"?Math.floor(nt[0]/3)*3:nt[0]??0)},Sr=async(A,Z)=>{if(!h.trim())return;const Te=(Z==null?void 0:Z.horizon)??null,Pe=A==="ROOT"?z:Xa(Te),nt=A==="ROOT"?I:(Z==null?void 0:Z.pillar)||n;let Je,tt;if(Pe==="Yearly"){const pt=Number(w),Ie=Math.max(pt,Number(b)||pt);Je=`${pt}-01-01`,tt=`${Ie}-12-31`}else{const pt=Z?zi(Z.start_date):Number(w);({start_date:Je,end_date:tt}=rp(Pe,pt,m,T))}await F.createGoal({pillar:nt,title:h.trim(),horizon:Pe,parent_goal_id:A==="ROOT"?null:A,start_date:Je,end_date:tt}),A!=="ROOT"&&a(pt=>({...pt,[A]:!0})),g(null),f(""),ie()},k=A=>{const Z=A.start_date?new Date(A.start_date+"T00:00:00"):new Date,Te=Z.getMonth(),Pe=Math.min(Math.max(Math.ceil(Z.getDate()/7),1),4);j({id:A.id,title:A.title,pillar:A.pillar,horizon:A.horizon,parentGoal:e.find(nt=>nt.id===A.parent_goal_id)||null,year:zi(A.start_date),endYear:zi(A.end_date),month:A.horizon==="Quarterly"?Math.floor(Te/3)*3:Te,week:Pe})},le=async()=>{if(!S||!S.title.trim())return;let A,Z;if(S.horizon==="Yearly"){const Te=Number(S.year),Pe=Math.max(Te,Number(S.endYear)||Te);A=`${Te}-01-01`,Z=`${Pe}-12-31`}else{let Te=S.month;S.horizon==="Weekly"&&S.parentGoal&&(Te=Xs(S.parentGoal)[0]);const Pe=S.parentGoal?zi(S.parentGoal.start_date):Number(S.year);({start_date:A,end_date:Z}=rp(S.horizon,Pe,Te,S.week))}await F.updateGoal(S.id,{title:S.title.trim(),pillar:S.pillar,start_date:A,end_date:Z}),j(null),ie()},$e=({parentId:A,parentGoal:Z,depth:Te})=>{const Pe=A==="ROOT",nt=Pe?z:Xa((Z==null?void 0:Z.horizon)??null),Je=Pe?Array.from({length:12},(Ie,Nt)=>Nt):Xs(Z),tt=Zu.filter(Ie=>Je.includes(Ie.startMonth)),pt=Ie=>{v(Ie),B(0),R(1),u(w)};return t.jsxs("div",{style:{...pe.addBox,marginLeft:Te*24},children:[t.jsx("input",{autoFocus:!0,placeholder:`New ${nt.toLowerCase()} goal…`,value:h,onChange:Ie=>f(Ie.target.value),onKeyDown:Ie=>{Ie.key==="Enter"&&Sr(A,Z),Ie.key==="Escape"&&g(null)},style:pe.input}),Pe&&se&&t.jsx("select",{value:I,onChange:Ie=>E(Ie.target.value),style:pe.monthSelect,title:"Pillar",children:Ci.map(Ie=>t.jsx("option",{value:Ie,children:Ie},Ie))}),Pe&&t.jsx("select",{value:z,onChange:Ie=>pt(Ie.target.value),style:pe.monthSelect,title:"Goal level",children:wl.map(Ie=>t.jsx("option",{value:Ie,children:Ie},Ie))}),nt==="Yearly"&&t.jsxs(t.Fragment,{children:[t.jsx("select",{value:w,onChange:Ie=>{const Nt=Number(Ie.target.value);p(Nt),b<Nt&&u(Nt)},style:pe.monthSelect,title:"Start year",children:Io.map(Ie=>t.jsx("option",{value:Ie,children:Ie},Ie))}),t.jsx("span",{style:pe.toTag,children:"to"}),t.jsx("select",{value:b,onChange:Ie=>u(Number(Ie.target.value)),style:pe.monthSelect,title:"End year (spans multiple years)",children:Io.filter(Ie=>Ie>=w).map(Ie=>t.jsx("option",{value:Ie,children:Ie},Ie))})]}),nt!=="Yearly"&&Pe&&t.jsx("select",{value:w,onChange:Ie=>p(Number(Ie.target.value)),style:pe.monthSelect,title:"Year",children:Io.map(Ie=>t.jsx("option",{value:Ie,children:Ie},Ie))}),nt==="Quarterly"&&t.jsx("select",{value:m,onChange:Ie=>B(Number(Ie.target.value)),style:pe.monthSelect,children:tt.map(Ie=>t.jsx("option",{value:Ie.startMonth,children:Ie.label},Ie.startMonth))}),nt==="Monthly"&&t.jsx("select",{value:m,onChange:Ie=>B(Number(Ie.target.value)),style:pe.monthSelect,children:Je.map(Ie=>t.jsx("option",{value:Ie,children:Xr[Ie]},Ie))}),nt==="Weekly"&&t.jsxs(t.Fragment,{children:[Pe?t.jsx("select",{value:m,onChange:Ie=>B(Number(Ie.target.value)),style:pe.monthSelect,children:Je.map(Ie=>t.jsx("option",{value:Ie,children:Xr[Ie]},Ie))}):t.jsx("span",{style:pe.inheritTag,children:Xr[Je[0]]}),t.jsx("select",{value:T,onChange:Ie=>R(Number(Ie.target.value)),style:pe.monthSelect,children:[1,2,3,4].map(Ie=>t.jsxs("option",{value:Ie,children:["Week ",Ie]},Ie))})]}),t.jsx("button",{onClick:()=>Sr(A,Z),style:pe.saveBtn,children:t.jsx(Oe,{size:14})}),t.jsx("button",{onClick:()=>g(null),style:pe.cancelBtn,children:t.jsx(Fe,{size:14})})]})},Le=({goal:A,depth:Z})=>{var tt,pt,Ie,Nt,hr;const Te=gt(A.id),Pe=l[A.id],nt=A.horizon!=="Weekly";if((S==null?void 0:S.id)===A.id){const ht=Xs(S.parentGoal),to=Zu.filter(He=>ht.includes(He.startMonth)),hi=!S.parentGoal;return t.jsxs("div",{style:{...pe.editBox,marginLeft:Z*24},children:[t.jsx("input",{autoFocus:!0,value:S.title,onChange:He=>j({...S,title:He.target.value}),onKeyDown:He=>He.key==="Enter"&&le(),style:{...pe.input,flex:1}}),t.jsx("select",{value:S.pillar,onChange:He=>j({...S,pillar:He.target.value}),style:pe.monthSelect,children:Ci.map(He=>t.jsx("option",{children:He},He))}),S.horizon==="Yearly"&&t.jsxs(t.Fragment,{children:[t.jsx("select",{value:S.year,onChange:He=>{const mi=Number(He.target.value);j({...S,year:mi,endYear:Math.max(mi,S.endYear)})},style:pe.monthSelect,title:"Start year",children:Io.map(He=>t.jsx("option",{value:He,children:He},He))}),t.jsx("span",{style:pe.toTag,children:"to"}),t.jsx("select",{value:S.endYear,onChange:He=>j({...S,endYear:Number(He.target.value)}),style:pe.monthSelect,title:"End year (spans multiple years)",children:Io.filter(He=>He>=S.year).map(He=>t.jsx("option",{value:He,children:He},He))})]}),S.horizon!=="Yearly"&&hi&&t.jsx("select",{value:S.year,onChange:He=>j({...S,year:Number(He.target.value)}),style:pe.monthSelect,title:"Year",children:Io.map(He=>t.jsx("option",{value:He,children:He},He))}),S.horizon==="Quarterly"&&t.jsx("select",{value:S.month,onChange:He=>j({...S,month:Number(He.target.value)}),style:pe.monthSelect,children:to.map(He=>t.jsx("option",{value:He.startMonth,children:He.label},He.startMonth))}),S.horizon==="Monthly"&&t.jsx("select",{value:S.month,onChange:He=>j({...S,month:Number(He.target.value)}),style:pe.monthSelect,children:ht.map(He=>t.jsx("option",{value:He,children:Xr[He]},He))}),S.horizon==="Weekly"&&t.jsxs(t.Fragment,{children:[hi?t.jsx("select",{value:S.month,onChange:He=>j({...S,month:Number(He.target.value)}),style:pe.monthSelect,children:ht.map(He=>t.jsx("option",{value:He,children:Xr[He]},He))}):t.jsx("span",{style:pe.inheritTag,children:Xr[ht[0]]}),t.jsx("select",{value:S.week,onChange:He=>j({...S,week:Number(He.target.value)}),style:pe.monthSelect,children:[1,2,3,4].map(He=>t.jsxs("option",{value:He,children:["Week ",He]},He))})]}),t.jsx("button",{onClick:le,style:pe.saveBtn,children:t.jsx(Oe,{size:14})}),t.jsx("button",{onClick:()=>j(null),style:pe.cancelBtn,children:t.jsx(Fe,{size:14})})]})}return t.jsxs("div",{children:[t.jsxs("div",{style:{...pe.row,marginLeft:Z*24,background:Z===0&&((tt=Tr[A.pillar])==null?void 0:tt.soft)||"transparent"},children:[Te.length>0?t.jsx("button",{onClick:()=>Rt(A.id),style:pe.caret,children:Pe?t.jsx(So,{size:15}):t.jsx(nn,{size:15})}):t.jsx("span",{style:{...pe.caret,opacity:.25},children:t.jsx(Ig,{size:12})}),t.jsx("span",{style:{...pe.horizonTag,color:((pt=Tr[A.pillar])==null?void 0:pt.dot)||We.dot,borderColor:((Ie=Tr[A.pillar])==null?void 0:Ie.dot)||We.dot},title:A.horizon,children:Y?P0[A.horizon]:A.horizon}),t.jsxs("div",{style:pe.nameCol,children:[t.jsx("span",{style:{...pe.title,...Me===A.id?pe.titleFull:{}},title:A.title,onPointerDown:()=>te(A.id),onPointerUp:M,onPointerLeave:M,onPointerCancel:M,children:A.title}),t.jsx("span",{style:pe.whenSub,children:G0(A)})]}),Y?t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{position:"relative",flexShrink:0},children:[t.jsx("button",{onClick:ht=>y(ht,A.id),style:pe.rowAdd,title:"Options",children:t.jsx(vm,{size:15})}),P===A.id&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:pe.menuBackdrop,onClick:()=>X(null)}),t.jsxs("div",{style:{...pe.goalMenu,...me},children:[t.jsxs("button",{style:pe.menuItem,onClick:()=>{k(A),X(null)},children:[t.jsx(vt,{size:14})," Edit"]}),nt&&t.jsxs("button",{style:pe.menuItem,onClick:()=>{a(ht=>({...ht,[A.id]:!0})),Dt(A.id,A),X(null)},children:[t.jsx(st,{size:14})," Add sub-goal"]}),t.jsxs("button",{style:{...pe.menuItem,color:"#C2536B"},onClick:()=>{ve(A.id,A.title),X(null)},children:[t.jsx(Fe,{size:14})," Delete"]})]})]})]}),t.jsx("button",{onClick:()=>bt(A),style:{...pe.rowAdd,color:yt(A)?((Nt=Tr[A.pillar])==null?void 0:Nt.dot)||We.dot:"var(--text-3)"},title:yt(A)?"Showing on timeline":"Hidden from timeline",children:yt(A)?t.jsx(ms,{size:14}):t.jsx(Ql,{size:14})})]}):t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>bt(A),style:{...pe.rowAdd,color:yt(A)?((hr=Tr[A.pillar])==null?void 0:hr.dot)||We.dot:"var(--text-3)"},title:yt(A)?"Showing on timeline — click to hide":"Hidden from timeline — click to show",children:yt(A)?t.jsx(ms,{size:13}):t.jsx(Ql,{size:13})}),t.jsx("button",{onClick:()=>k(A),style:pe.rowAdd,title:"Edit",children:t.jsx(vt,{size:12})}),nt&&t.jsx("button",{onClick:()=>{a(ht=>({...ht,[A.id]:!0})),Dt(A.id,A)},style:pe.rowAdd,title:"Add sub-goal",children:t.jsx(st,{size:13})}),t.jsx("button",{onClick:()=>ve(A.id,A.title),style:{...pe.rowAdd,color:"var(--text-3)"},title:"Delete",children:t.jsx(Fe,{size:13})})]})]}),Pe&&Te.map(ht=>t.jsx(Le,{goal:ht,depth:Z+1},ht.id)),Pe&&d===A.id&&t.jsx($e,{parentId:A.id,parentGoal:A,depth:Z+1})]})},et=e.filter(A=>yt(A)&&A.start_date&&A.end_date),br=$0.map(A=>({...A,items:et.filter(Z=>A.horizons.includes(Z.horizon)).sort((Z,Te)=>Z.pillar.localeCompare(Te.pillar)||Z.start_date.localeCompare(Te.start_date)||tp[Z.horizon]-tp[Te.horizon]||Z.end_date.localeCompare(Te.end_date))})).filter(A=>A.items.length>0),ut=(()=>{if(!et.length)return null;let A=et[0].start_date,Z=et[0].end_date;return et.forEach(Te=>{Te.start_date<A&&(A=Te.start_date),Te.end_date>Z&&(Z=Te.end_date)}),{start:Bo(A),end:Bo(Z)}})(),H=(()=>{if(!ut)return[];const A=[];for(let Z=ut.start.getTime();Z<=ut.end.getTime();Z+=Di)A.push(new Date(Z));return A})(),ye=H.length,Mt=(()=>{const A=[];return H.forEach(Z=>{const Te=`${Z.getFullYear()}-${Z.getMonth()}`,Pe=A[A.length-1];Pe&&Pe.key===Te?Pe.days++:A.push({key:Te,label:`${Xr[Z.getMonth()]} '${String(Z.getFullYear()).slice(2)}`,days:1})}),A})(),Pt=new Date;Pt.setHours(0,0,0,0);const ir=ut?Math.round((Pt-ut.start)/Di):-1,Cr=ir>=0&&ir<ye,Sn=A=>Math.round((Bo(A.end_date)-Bo(A.start_date))/Di)+1,zr=W==="month",on=ut?ut.start.getFullYear():0,sr=ut?ut.start.getMonth():0,eo=(()=>{if(!ut)return[];const A=[];let Z=on,Te=sr;const Pe=ut.end.getFullYear(),nt=ut.end.getMonth();for(;Z<Pe||Z===Pe&&Te<=nt;)A.push({y:Z,m:Te}),Te++,Te>11&&(Te=0,Z++);return A})(),Cn=eo.length||1,pi=(A,Z)=>{const Te=Bo(A),Pe=(Te.getFullYear()-on)*12+Te.getMonth()-sr,nt=new Date(Te.getFullYear(),Te.getMonth()+1,0).getDate();return Pe+(Te.getDate()-(Z?0:1))/nt},bi=(A,Z)=>pi(A,Z)/Cn*100,wa=`${Pt.getFullYear()}-${String(Pt.getMonth()+1).padStart(2,"0")}-${String(Pt.getDate()).padStart(2,"0")}`,L=ut?bi(wa,!1):0,Re=(re?Qi:0)+ir*Ot,ot=ut?`${ut.start.getTime()}-${ut.end.getTime()}`:"";return c.useEffect(()=>{if(zr||!Cr)return;const A=Q.current;A&&(A.scrollLeft=Math.max(0,Re-A.clientWidth/2+Ot/2))},[ot,ir,re,Cr,zr]),t.jsxs("div",{style:pe.page,children:[t.jsxs("div",{style:pe.head,children:[t.jsx("div",{style:pe.eyebrow,children:"Anvil · Goals"}),t.jsx("h1",{style:pe.h1,children:se?"All Goals":`${n} Goals`})]}),t.jsxs("div",{style:pe.pillarPicker,children:[t.jsx("button",{onClick:()=>{o("All"),g(null),j(null)},style:{...pe.pillarChip,...se?{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:"All Goals"}),Ci.map(A=>{const Z=A===n;return t.jsxs("button",{onClick:()=>{o(A),g(null),j(null)},style:{...pe.pillarChip,...Z?{background:Tr[A].dot,color:"#fff",borderColor:Tr[A].dot}:{}},children:[t.jsx("span",{style:{...pe.dot,background:Z?"#fff":Tr[A].dot}}),A]},A)})]}),t.jsxs("div",{style:pe.list,children:[rt.map(A=>t.jsx(Le,{goal:A,depth:0},A.id)),rt.length===0&&t.jsxs("div",{style:pe.ganttEmpty,children:["No goals yet",se?"":` for ${n}`,"."]}),d==="ROOT"&&t.jsx($e,{parentId:"ROOT",parentGoal:null,depth:0}),d!=="ROOT"&&t.jsxs("button",{onClick:()=>Dt("ROOT",null),style:pe.rootAdd,children:[t.jsx(st,{size:14})," Add new goal"]})]}),t.jsxs("div",{style:pe.ganttWrap,children:[t.jsxs("div",{style:pe.ganttTop,children:[t.jsxs("div",{style:pe.ganttTitle,children:[zr?"Monthly":"Daily"," Timeline",ut?` · ${Ju(ut.start)} – ${Ju(ut.end)}`:""]}),t.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[t.jsxs("div",{style:pe.zoomToggle,children:[t.jsx("button",{onClick:()=>he("day"),style:{...pe.zoomBtn,...zr?{}:pe.zoomBtnOn},children:"Day"}),t.jsx("button",{onClick:()=>he("month"),style:{...pe.zoomBtn,...zr?pe.zoomBtnOn:{}},children:"Month"})]}),t.jsxs("button",{onClick:()=>ee(A=>!A),style:pe.labelToggle,children:[re?t.jsx(s0,{size:14}):t.jsx(l0,{size:14}),re?"Hide names":"Show names"]})]})]}),ut?zr?t.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[t.jsxs("div",{style:pe.gBandRow,children:[re&&t.jsx("div",{style:{...pe.gLabelHead,zIndex:4},children:"Goal"}),t.jsx("div",{style:{flex:1,display:"grid",gridTemplateColumns:`repeat(${Cn}, 1fr)`,minWidth:0},children:eo.map((A,Z)=>t.jsxs("div",{style:pe.gMonthFluid,children:[Xr[A.m],A.m===0||Z===0?` '${String(A.y).slice(2)}`:""]},Z))})]}),br.map(A=>t.jsxs("div",{children:[t.jsxs("div",{style:pe.gGroupRow,children:[re?t.jsxs("div",{style:pe.gGroupLabel,children:[A.label,t.jsx("span",{style:pe.gGroupCount,children:A.items.length})]}):t.jsxs("div",{style:pe.gGroupChip,children:[A.label," · ",A.items.length]}),t.jsx("div",{style:{flex:1}})]}),A.items.map(Z=>{var hr;const Te=((hr=Tr[Z.pillar])==null?void 0:hr.dot)||"#9A968C",Pe=(we==null?void 0:we.id)===Z.id,nt=Pe?we.dx:0,Je=bi(Z.start_date,!1),tt=Math.max(2,bi(Z.end_date,!0)-Je),pt=Sn(Z),Ie=tt>=14,Nt=`${Z.title} · ${Z.start_date} → ${Z.end_date} · ${pt} day${pt>1?"s":""}`;return t.jsxs("div",{style:pe.gRow,children:[re&&t.jsxs("div",{style:{...pe.gLabel,paddingLeft:12},children:[t.jsx("span",{style:{...pe.ganttRowDot,background:Te}}),t.jsx("span",{style:{...pe.gHzTag,color:Te,borderColor:Te},children:ep[Z.horizon]}),t.jsx("span",{style:pe.gLabelText,title:Z.title,children:Z.title}),t.jsxs("span",{style:pe.gDurChip,children:[pt,"d"]})]}),t.jsxs("div",{style:{position:"relative",flex:1,minHeight:36,minWidth:0,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent calc(100% / ${Cn}))`},children:[Cr&&t.jsx("div",{style:{...pe.gTodayLine,left:`${L}%`}}),t.jsxs("div",{onPointerDown:ht=>{ht.preventDefault(),O.current=ht.clientX;const to=ht.currentTarget.parentNode.offsetWidth;be({id:Z.id,startX:ht.clientX,dx:0,g:Z,pxPerDay:to/ye})},style:{...pe.gBar,left:`${Je}%`,width:`${tt}%`,background:Te,cursor:Pe?"grabbing":"grab",transform:nt?`translateX(${nt}px)`:"none",zIndex:Pe?6:1,boxShadow:Pe?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:Nt,children:[t.jsx(ql,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff"}}),Ie&&t.jsx("span",{style:pe.gBarLabel,children:Z.title})]}),!Ie&&t.jsx("span",{style:{...pe.gBarOutside,left:`calc(${Je+tt}% + 6px)`},title:Nt,children:Z.title})]})]},Z.id)})]},A.key))]}):t.jsx("div",{style:pe.ganttScroll,ref:Q,children:t.jsxs("div",{style:{minWidth:(re?Qi:0)+ye*Ot,position:"relative"},children:[Cr&&t.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:Re,width:Ot,background:"color-mix(in srgb, var(--accent) 14%, transparent)",pointerEvents:"none",zIndex:3}}),t.jsxs("div",{style:pe.gBandRow,children:[re&&t.jsx("div",{style:{...pe.gLabelHead,zIndex:4},children:"Goal"}),t.jsx("div",{style:{display:"flex"},children:Mt.map((A,Z)=>t.jsx("div",{style:{...pe.gMonthCell,width:A.days*Ot},children:A.label},Z))})]}),t.jsxs("div",{style:pe.gBandRow,children:[re&&t.jsx("div",{style:{...pe.gLabelHead,zIndex:4,fontSize:10,color:"var(--text-3)",fontWeight:600},children:"days →"}),t.jsx("div",{style:{display:"flex"},children:H.map((A,Z)=>{const Te=A.getDay()===0||A.getDay()===6,Pe=Z===ir;return t.jsx("div",{style:{...pe.gDayCell,...Te?pe.gWeekend:{},...Pe?pe.gTodayCell:{}},children:A.getDate()},Z)})})]}),br.map(A=>t.jsxs("div",{children:[t.jsxs("div",{style:pe.gGroupRow,children:[re?t.jsxs("div",{style:pe.gGroupLabel,children:[A.label,t.jsx("span",{style:pe.gGroupCount,children:A.items.length})]}):t.jsxs("div",{style:pe.gGroupChip,children:[A.label," · ",A.items.length]}),t.jsx("div",{style:{width:ye*Ot,flexShrink:0}})]}),A.items.map(Z=>{var mi;const Te=((mi=Tr[Z.pillar])==null?void 0:mi.dot)||"#9A968C",Pe=Math.round((Bo(Z.start_date)-ut.start)/Di),nt=Sn(Z),Je=(we==null?void 0:we.id)===Z.id,tt=Je?we.dx:0,pt=H0(Z),Ie=(U==null?void 0:U.id)===Z.id,Nt=pt?fc(Z):nt,hr=pt?np(Z):nt,ht=Ie?Math.max(Nt,Math.min(hr,nt+Math.round(U.dx/Ot))):nt,to=ht*Ot-4,hi=to>=54,He=`${Z.title} · ${Z.start_date} → ${Z.end_date} · ${ht} day${ht>1?"s":""}${pt?` (max ${hr})`:""}`;return t.jsxs("div",{style:pe.gRow,children:[re&&t.jsxs("div",{style:{...pe.gLabel,paddingLeft:12},children:[t.jsx("span",{style:{...pe.ganttRowDot,background:Te}}),t.jsx("span",{style:{...pe.gHzTag,color:Te,borderColor:Te},children:ep[Z.horizon]}),t.jsx("span",{style:pe.gLabelText,title:Z.title,children:Z.title}),t.jsxs("span",{style:pe.gDurChip,children:[ht,"d"]})]}),t.jsxs("div",{style:{...pe.gTrack,width:ye*Ot},children:[Cr&&t.jsx("div",{style:{...pe.gTodayLine,left:ir*Ot}}),t.jsxs("div",{onPointerDown:ro=>{ro.preventDefault(),O.current=ro.clientX,be({id:Z.id,startX:ro.clientX,dx:0,g:Z,pxPerDay:Ot})},style:{...pe.gBar,left:Pe*Ot+2,width:to,background:Te,cursor:Je?"grabbing":"grab",transform:tt?`translateX(${tt}px)`:"none",zIndex:Je||Ie?6:1,boxShadow:Je||Ie?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:He,children:[pt&&ht>Nt&&t.jsx("div",{style:{position:"absolute",left:Nt*Ot,top:0,bottom:0,right:0,background:"#C2536B",borderRadius:"0 5px 5px 0"}}),t.jsx(ql,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff",position:"relative",zIndex:1}}),hi&&t.jsx("span",{style:{...pe.gBarLabel,position:"relative",zIndex:1},children:Z.title}),pt&&t.jsx("div",{onPointerDown:ro=>{ro.preventDefault(),ro.stopPropagation(),ce({id:Z.id,startX:ro.clientX,dx:0,g:Z})},style:pe.resizeHandle,title:`Drag to extend up to ${hr} days`,children:t.jsx("div",{style:pe.resizeGrip})})]}),!hi&&t.jsx("span",{style:{...pe.gBarOutside,left:Pe*Ot+to+8+tt},title:He,children:Z.title})]})]},Z.id)})]},A.key))]})}):t.jsx("div",{style:pe.ganttEmpty,children:"No goals on the timeline. Click the eye icon on a goal to show it here."}),ut&&t.jsxs("div",{style:pe.gLegend,children:[t.jsxs("span",{style:pe.gLegendItem,children:[t.jsx("span",{style:{...pe.gLegendBar}})," bar length = number of days"]}),t.jsxs("span",{style:pe.gLegendItem,children:[t.jsx("span",{style:pe.gLegendToday})," today"]})]})]}),G&&t.jsxs("div",{style:pe.warnToast,children:[t.jsx(v0,{size:15,style:{flexShrink:0}}),t.jsx("span",{children:G})]}),t.jsx(pr,{toasts:Ae,onUndo:qe,onDismiss:Ye})]})}const pe={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},pillarPicker:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},pillarChip:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},list:{background:"var(--surface)",borderRadius:12,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"hidden"},row:{display:"flex",alignItems:"center",gap:9,padding:"9px 10px",borderRadius:8,flexWrap:"nowrap"},caret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},horizonTag:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",border:"1px solid",borderRadius:5,padding:"2px 6px",flexShrink:0},nameCol:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:1},title:{fontSize:14,fontWeight:500,lineHeight:1.3,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",userSelect:"none",WebkitUserSelect:"none",cursor:"default"},titleFull:{whiteSpace:"normal",overflow:"visible",textOverflow:"clip",wordBreak:"break-word"},whenSub:{fontSize:11,fontStyle:"italic",color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},rowAdd:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,flexShrink:0},menuBackdrop:{position:"fixed",inset:0,zIndex:40},goalMenu:{position:"fixed",zIndex:41,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 6px 24px rgba(0,0,0,0.18)",padding:4,minWidth:180,display:"flex",flexDirection:"column"},menuItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:7,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text)",textAlign:"left"},rootAdd:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"var(--text-2)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"9px 12px",cursor:"pointer",fontWeight:600,fontFamily:"inherit",marginTop:6,width:"100%",justifyContent:"center"},addBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 0 6px 28px",flexWrap:"wrap"},editBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 10px",flexWrap:"wrap",background:"var(--bg)",borderRadius:8,margin:"4px 0"},input:{border:"1px solid var(--border)",borderRadius:7,padding:"8px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",flex:1,minWidth:120},monthSelect:{border:"1px solid var(--border)",borderRadius:7,padding:"8px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},inheritTag:{fontSize:11.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"6px 9px",borderRadius:7,flexShrink:0},toTag:{fontSize:11.5,fontWeight:600,color:"var(--text-3)",flexShrink:0},warnToast:{position:"fixed",top:18,left:"50%",transform:"translateX(-50%)",zIndex:300,display:"flex",alignItems:"center",gap:8,maxWidth:"90vw",background:"#C2536B",color:"#fff",padding:"10px 16px",borderRadius:10,fontSize:13,fontWeight:600,boxShadow:"0 6px 24px rgba(0,0,0,0.25)"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},ganttWrap:{background:"var(--surface)",borderRadius:12,padding:"16px 14px",marginTop:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},ganttTop:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10,marginBottom:14},ganttTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",fontFamily:"'Fraunces',Georgia,serif"},labelToggle:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 10px",borderRadius:8,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},zoomToggle:{display:"inline-flex",border:"1px solid var(--border)",borderRadius:8,overflow:"hidden"},zoomBtn:{border:"none",background:"var(--surface)",color:"var(--text-2)",padding:"5px 12px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},zoomBtnOn:{background:"var(--accent-strong)",color:"#fff"},gMonthFluid:{borderLeft:"1px solid var(--border)",fontSize:10,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gGroupChip:{position:"sticky",left:0,zIndex:3,background:"var(--surface-2)",padding:"5px 10px",fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",whiteSpace:"nowrap",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center"},ganttEmpty:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},ganttScroll:{overflowX:"auto"},ganttRowDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},gBandRow:{display:"flex",alignItems:"stretch",borderBottom:"1px solid var(--border)"},gLabelHead:{width:Qi,flexShrink:0,position:"sticky",left:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",padding:"6px 10px",fontSize:12,fontWeight:700,color:"var(--text-2)"},gMonthCell:{flexShrink:0,borderLeft:"1px solid var(--border)",fontSize:10.5,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gDayCell:{width:Ot,flexShrink:0,textAlign:"center",fontSize:10,color:"var(--text-3)",padding:"4px 0",borderLeft:"1px solid var(--border)",fontWeight:600},gWeekend:{background:"var(--surface-2)"},gTodayCell:{background:"var(--hover)",color:"var(--accent)",fontWeight:800},gGroupRow:{display:"flex",alignItems:"stretch",background:"var(--surface-2)",borderBottom:"1px solid var(--border)",borderTop:"1px solid var(--border)"},gGroupLabel:{width:Qi,flexShrink:0,position:"sticky",left:0,background:"var(--surface-2)",zIndex:3,padding:"6px 12px",fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",gap:7},gGroupCount:{fontSize:10,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},gHzTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.04em",border:"1px solid",borderRadius:4,padding:"1px 4px",flexShrink:0},gRow:{display:"flex",alignItems:"stretch",minHeight:36,borderBottom:"1px solid var(--border)"},gLabel:{width:Qi,flexShrink:0,display:"flex",alignItems:"center",gap:7,position:"sticky",left:0,background:"var(--surface)",zIndex:2,borderRight:"1px solid var(--border)",paddingRight:8,overflow:"hidden"},gLabelText:{flex:1,minWidth:0,fontSize:12,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},gDurChip:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",borderRadius:10,padding:"1px 6px",flexShrink:0,marginRight:6},gTrack:{position:"relative",flexShrink:0,minHeight:36,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent ${Ot}px)`},gBar:{position:"absolute",top:9,height:18,borderRadius:5,display:"flex",alignItems:"center",padding:"0 7px",boxShadow:"0 1px 2px rgba(0,0,0,0.15)",overflow:"hidden",zIndex:1},gBarLabel:{fontSize:11,fontWeight:600,color:"#fff",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},gBarOutside:{position:"absolute",top:9,height:18,display:"flex",alignItems:"center",fontSize:11,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",pointerEvents:"none",zIndex:1},resizeHandle:{position:"absolute",right:0,top:0,bottom:0,width:12,cursor:"ew-resize",display:"grid",placeItems:"center",touchAction:"none",zIndex:2},resizeGrip:{width:2,height:11,background:"rgba(255,255,255,0.9)",borderRadius:1,boxShadow:"3px 0 0 rgba(255,255,255,0.6)"},gTodayLine:{position:"absolute",top:0,bottom:0,width:2,background:"#C2536B",zIndex:0,opacity:.6},gLegend:{display:"flex",gap:16,marginTop:12,fontSize:11,color:"var(--text-3)",flexWrap:"wrap"},gLegendItem:{display:"flex",alignItems:"center",gap:6,fontWeight:600},gLegendBar:{width:18,height:8,borderRadius:3,background:"var(--accent)",display:"inline-block"},gLegendToday:{width:2,height:12,background:"#C2536B",display:"inline-block"}},Qn={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.12)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.12)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.12)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.12)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.12)"}},ei=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],V0=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],di=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Bm=()=>di(new Date),Y0=(e=0)=>{const r=new Date,n=r.getDay(),o=n===0?-6:1-n,i=new Date(r);return i.setDate(r.getDate()+o+e*7),Array.from({length:7},(s,l)=>{const a=new Date(i);return a.setDate(i.getDate()+l),di(a)})},K0=(e=0)=>{const r=new Date,n=new Date(r.getFullYear(),r.getMonth()+e,1),o=n.getFullYear(),i=n.getMonth(),s=new Date(o,i+1,0).getDate(),l=n.getDay(),a=l===0?6:l-1,d=Array.from({length:s},(h,f)=>`${o}-${String(i+1).padStart(2,"0")}-${String(f+1).padStart(2,"0")}`),g=n.toLocaleDateString("en-US",{month:"long",year:"numeric"});return{dates:d,startOffset:a,label:g,year:o,month:i}},op=e=>new Date(e+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"}),Q0=e=>{const r=Math.ceil(e/1e3);return`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`},Wn=Bm(),q0=new Date().getFullYear(),ip=(e,r)=>{const n=e.target_count||0;return e.type==="minimum"?r>=n:r>0&&r<=n};function X0(){var Me,oe;const[e,r]=c.useState([]),[n,o]=c.useState("ALL"),[i,s]=c.useState(!1),[l,a]=c.useState(!1),[d,g]=c.useState(!1),[h,f]=c.useState(null),[m,B]=c.useState(null),[T,R]=c.useState({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week",days:[],min_interval_min:0}),[w,p]=c.useState(!1),[b,u]=c.useState([]),[z,v]=c.useState(null),[I,E]=c.useState(null),S=c.useCallback(()=>F.getHabits().then(r).catch(console.error),[]);c.useEffect(()=>{S()},[S]);const j=c.useCallback(ae=>{ae&&ae.id!=null&&r(P=>P.map(X=>X.id===ae.id?ae:X))},[]);c.useEffect(()=>{F.getSetting("habit_order").then(ae=>{Array.isArray(ae==null?void 0:ae.value)&&u(ae.value)}).catch(()=>{})},[]);const Y=c.useMemo(()=>b.length?[...e].sort((ae,P)=>{const X=b.indexOf(ae.id),me=b.indexOf(P.id);return X===-1&&me===-1?0:X===-1?1:me===-1?-1:X-me}):e,[e,b]),re=c.useMemo(()=>Y.filter(ae=>ae.active!==!1),[Y]);c.useEffect(()=>{n!=="ALL"&&e.some(ae=>ae.id===n&&ae.active===!1)&&o("ALL")},[e,n]);const ee=async ae=>{u(ae),await F.setSetting("habit_order",ae),p(!1)},W=async(ae,P)=>{j(await F.updateHabit(ae,{active:P}))};c.useEffect(()=>{const ae=()=>{const P=window.innerWidth<720;s(P),P||a(!1)};return ae(),window.addEventListener("resize",ae),()=>window.removeEventListener("resize",ae)},[]);const{deleteItem:he,toasts:we,handleUndo:be,handleDismiss:ze}=ur(F.deleteHabit,F.restoreHabit,S),K=ae=>{o(ae),i&&a(!1)},U=(ae,P)=>{(ae.type==="minimum"||ae.type==="maximum")&&ae.period==="day"?B({habit:ae,date:P}):ce(ae.id,P)},ce=async(ae,P)=>{j(await F.toggleHabitLog(ae,P))},x=async(ae,P,X,me)=>{var M;const D=e.find(ie=>ie.id===ae),y=((M=D==null?void 0:D.log_counts)==null?void 0:M[P])??0,te=D?ip(D,y):!1;try{const ie=await F.setHabitLogCount(ae,P,X,me);j(ie),B(null),ie.type==="minimum"&&!te&&ip(ie,X)&&v(ie.name);const ve=D?y>(D.target_count||0):!1;ie.type==="maximum"&&!ve&&X>(ie.target_count||0)&&E(ie.name)}catch(ie){alert(ie.message||"Could not save.")}},Q=async(ae,P)=>{j(await F.clearHabitLog(ae,P)),B(null)},O=async()=>{if(!T.name.trim())return;const ae=T.type==="minimum"||T.type==="maximum",P=T.type==="weekly";if(P&&T.days.length===0)return;const X={name:T.name.trim(),pillar:T.pillar,target_per_week:Number(T.target_per_week)||7,type:T.type,target_count:ae?Number(T.target_count)||1:null,period:ae?T.period:null,days:P?T.days:null,min_interval_min:ae&&T.period==="day"&&Number(T.min_interval_min)||0};await F.createHabit(X),R({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week",days:[],min_interval_min:0}),g(!1),S()},G=async(ae,P)=>{n===ae&&o("ALL"),he(ae,P)},N=e.find(ae=>ae.id===n),ge=ae=>new Set(ae.logs||[]),de={...$.sidebar,...i?$.sidebarOverlay:{},...i&&!l?$.sidebarHidden:{}};return t.jsxs("div",{style:$.shell,children:[i&&l&&t.jsx("div",{style:$.backdrop,onClick:()=>a(!1)}),t.jsxs("aside",{style:de,children:[t.jsxs("div",{style:$.sideTop,children:[t.jsx("div",{style:$.brand,children:"Anvil · Habits"}),i&&t.jsx("button",{onClick:()=>a(!1),style:$.closeBtn,children:t.jsx(Fe,{size:18})})]}),t.jsxs("div",{style:{...$.sideItem,...n==="ALL"?$.sideItemOn:{},cursor:"default",padding:"2px 6px 2px 10px"},children:[t.jsxs("button",{onClick:()=>K("ALL"),style:{display:"flex",alignItems:"center",gap:9,flex:1,border:"none",background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:n==="ALL"?600:500,color:"var(--text-2)",padding:"7px 0"},children:[t.jsx(wg,{size:15}),t.jsx("span",{style:$.sideLabel,children:"All Habits"}),t.jsx("span",{style:$.sideCount,children:e.length})]}),t.jsx("button",{onClick:ae=>{ae.stopPropagation(),p(!0)},style:$.tinyBtn,title:"Reorder habits",children:t.jsx(vt,{size:12})})]}),t.jsx("div",{style:$.sideDivider}),re.map(ae=>{var me;const P=n===ae.id,X=((me=Qn[ae.pillar])==null?void 0:me.dot)||"#9A968C";return t.jsxs("button",{onClick:()=>K(ae.id),style:{...$.sideItem,...P?$.sideItemOn:{}},children:[t.jsx("span",{style:{...$.sideDot,background:X}}),t.jsx("span",{style:$.sideLabel,children:ae.name}),t.jsxs("span",{style:$.sideStreak,children:[t.jsx(jn,{size:11})," ",ae.streak]})]},ae.id)}),d?t.jsx(ev,{habit:T,onChange:R,onSave:O,onCancel:()=>g(!1)}):t.jsxs("button",{onClick:()=>g(!0),style:$.sideNewBtn,children:[t.jsx(st,{size:13})," New habit"]})]}),t.jsxs("main",{style:$.main,children:[i&&t.jsxs("button",{onClick:()=>a(!0),style:$.hamburger,children:[t.jsx(Sg,{size:18}),t.jsx("span",{style:$.hamburgerLabel,children:n==="ALL"?"All Habits":N==null?void 0:N.name})]}),n==="ALL"?t.jsx(nv,{habits:re,dayAction:U,logSet:ge,onDelete:G,onEdit:ae=>f(ae),isMobile:i,onOpenHabit:K}):t.jsx(iv,{habit:N,dayAction:U,logSet:ge,onDelete:()=>G(N.id,N.name),onEdit:()=>f(N),onToggleActive:W,setNote:(ae,P)=>F.setHabitLogNote(N.id,ae,P).then(j)}),n==="ALL"&&t.jsx(av,{year:q0})]}),w&&t.jsx(lv,{habits:Y,onSave:ee,onToggleActive:W,onClose:()=>p(!1)}),h&&t.jsx(tv,{habit:h,onSave:async ae=>{await F.updateHabit(h.id,ae),f(null),S()},onClose:()=>f(null)}),m&&t.jsx(rv,{habit:m.habit,date:m.date,initialCount:((Me=m.habit.log_counts)==null?void 0:Me[m.date])??0,initialNote:((oe=m.habit.log_notes)==null?void 0:oe[m.date])??"",onSave:(ae,P)=>x(m.habit.id,m.date,ae,P),onClear:()=>Q(m.habit.id,m.date),onClose:()=>B(null)}),t.jsx(pr,{toasts:we,onUndo:be,onDismiss:ze}),z&&t.jsx(Z0,{name:z,onClose:()=>v(null)}),I&&t.jsx(J0,{name:I,onClose:()=>E(null)})]})}const Em=`
@keyframes habitCelebPop { 0% { transform: scale(0.7); opacity: 0; } 60% { transform: scale(1.06); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
`;function Z0({name:e,onClose:r}){return c.useEffect(()=>{const n=setTimeout(r,1800);return()=>clearTimeout(n)},[r]),t.jsxs("div",{style:$.celebOverlay,children:[t.jsx("style",{children:Em}),t.jsxs("div",{style:$.celebBox,children:[t.jsx("div",{style:$.celebEmoji,children:"👏🎉👏"}),t.jsx("div",{style:$.celebTitle,children:"Nailed it!"}),t.jsxs("div",{style:$.celebSub,children:[e," — done for today."]})]})]})}function J0({name:e,onClose:r}){return c.useEffect(()=>{const n=setTimeout(r,1800);return()=>clearTimeout(n)},[r]),t.jsxs("div",{style:$.celebOverlay,children:[t.jsx("style",{children:Em}),t.jsxs("div",{style:{...$.celebBox,...$.urgeBox},children:[t.jsx("div",{style:$.celebEmoji,children:"😕"}),t.jsx("div",{style:{...$.celebTitle,color:"#C2536B"},children:"Ohh no…"}),t.jsxs("div",{style:$.celebSub,children:[e," — you have more good stuff to do."]})]})]})}function Rm({days:e,onToggle:r}){return t.jsx("div",{style:$.dayPick,children:ei.map((n,o)=>t.jsx("button",{type:"button",onClick:()=>r(o),style:{...$.dayChip,...e.includes(o)?$.dayChipOn:{}},children:n},n))})}function ev({habit:e,onChange:r,onSave:n,onCancel:o}){const i=e.type==="minimum"||e.type==="maximum",s=e.type==="weekly",l=a=>r(d=>({...d,days:d.days.includes(a)?d.days.filter(g=>g!==a):[...d.days,a].sort((g,h)=>g-h)}));return t.jsxs("div",{style:$.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"Habit name",value:e.name,onChange:a=>r(d=>({...d,name:a.target.value})),onKeyDown:a=>a.key==="Enter"&&n(),style:$.sideInput}),t.jsx("select",{value:e.pillar,onChange:a=>r(d=>({...d,pillar:a.target.value})),style:$.sideInput,children:Object.keys(Qn).map(a=>t.jsx("option",{children:a},a))}),t.jsxs("select",{value:e.type,onChange:a=>r(d=>({...d,type:a.target.value})),style:$.sideInput,children:[t.jsx("option",{value:"regular",children:"Regular (yes/no)"}),t.jsx("option",{value:"weekly",children:"Weekly (specific days)"}),t.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),t.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),s&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:$.pickHint,children:"Do this on…"}),t.jsx(Rm,{days:e.days,onToggle:l})]}),i&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{display:"flex",gap:6},children:[t.jsx("input",{type:"number",min:1,placeholder:"N",value:e.target_count||"",onChange:a=>r(d=>({...d,target_count:a.target.value})),style:{...$.sideInput,width:60}}),t.jsx("select",{value:e.period,onChange:a=>r(d=>({...d,period:a.target.value})),style:$.sideInput,children:["day","week","month","year"].map(a=>t.jsx("option",{children:a},a))})]}),e.period==="day"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:$.pickHint,children:"Min gap between entries (minutes)"}),t.jsx("input",{type:"number",min:0,placeholder:"0",value:e.min_interval_min??0,onChange:a=>r(d=>({...d,min_interval_min:a.target.value})),style:$.sideInput})]})]}),t.jsxs("div",{style:{display:"flex",gap:6},children:[t.jsx("button",{onClick:n,style:$.sideAddBtn,children:t.jsx(Oe,{size:13})}),t.jsx("button",{onClick:o,style:$.sideCancelBtn,children:t.jsx(Fe,{size:13})})]})]})}function tv({habit:e,onSave:r,onClose:n}){const[o,i]=c.useState(e.name),[s,l]=c.useState(e.pillar||"Health"),[a,d]=c.useState(e.type||"regular"),[g,h]=c.useState(e.target_count||""),[f,m]=c.useState(e.period||"week"),[B,T]=c.useState(e.reminder_time||""),[R,w]=c.useState(e.days||[]),[p,b]=c.useState(e.min_interval_min??0),u=a==="minimum"||a==="maximum",z=a==="weekly",v=E=>w(S=>S.includes(E)?S.filter(j=>j!==E):[...S,E].sort((j,Y)=>j-Y)),I=()=>{z&&R.length===0||r({name:o.trim(),pillar:s,type:a,target_count:u?Number(g):null,period:u?f:null,days:z?R:[],reminder_time:B||null,min_interval_min:u&&f==="day"&&Number(p)||0})};return t.jsx("div",{style:$.modalOverlay,onClick:n,children:t.jsxs("div",{style:$.modal,onClick:E=>E.stopPropagation(),children:[t.jsxs("div",{style:$.modalHead,children:["Edit Habit",t.jsx("button",{onClick:n,style:$.closeBtn,children:t.jsx(Fe,{size:16})})]}),t.jsx("label",{style:$.modalLabel,children:"Name"}),t.jsx("input",{value:o,onChange:E=>i(E.target.value),style:$.sideInput}),t.jsx("label",{style:$.modalLabel,children:"Pillar"}),t.jsx("select",{value:s,onChange:E=>l(E.target.value),style:$.sideInput,children:Object.keys(Qn).map(E=>t.jsx("option",{value:E,children:E},E))}),t.jsx("label",{style:$.modalLabel,children:"Type"}),t.jsxs("select",{value:a,onChange:E=>d(E.target.value),style:$.sideInput,children:[t.jsx("option",{value:"regular",children:"Regular (yes/no)"}),t.jsx("option",{value:"weekly",children:"Weekly (specific days)"}),t.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),t.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),z&&t.jsxs(t.Fragment,{children:[t.jsx("label",{style:$.modalLabel,children:"Days"}),t.jsx(Rm,{days:R,onToggle:v})]}),u&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[t.jsx("input",{type:"number",min:1,value:g,onChange:E=>h(E.target.value),style:{...$.sideInput,width:70}}),t.jsx("select",{value:f,onChange:E=>m(E.target.value),style:$.sideInput,children:["day","week","month","year"].map(E=>t.jsx("option",{children:E},E))})]}),f==="day"&&t.jsxs(t.Fragment,{children:[t.jsx("label",{style:$.modalLabel,children:"Min gap between entries (minutes)"}),t.jsx("input",{type:"number",min:0,value:p,onChange:E=>b(E.target.value),style:$.sideInput})]})]}),t.jsx("label",{style:$.modalLabel,children:"Reminder time"}),t.jsx("input",{type:"time",value:B,onChange:E=>T(E.target.value),style:$.sideInput}),t.jsx("button",{onClick:I,style:{...$.sideAddBtn,width:"100%",marginTop:10,height:36},children:"Save"})]})})}function rv({habit:e,date:r,initialCount:n,initialNote:o,onSave:i,onClear:s,onClose:l}){var ze;const a=n??0,[d,g]=c.useState(a),[h,f]=c.useState(o??""),[m,B]=c.useState(Date.now()),[T,R]=c.useState(!1),w=e.target_count,p=e.type==="minimum"?d>=w:d>0&&d<=w,b=e.type==="maximum"&&d>w,u=p?"#4C9A6B":b?"#C2536B":"#C2773B",z=p?"✓ Goal met":b?"Over the limit":"Not met yet",v=Number(e.min_interval_min)||0,I=r===Bm(),E=v>0&&I,S=(ze=e.log_count_times)==null?void 0:ze[r],j=E&&S?new Date(S).getTime()+v*6e4:0,Y=Math.max(0,j-m);c.useEffect(()=>{if(!E||Y<=0)return;const K=window.setInterval(()=>B(Date.now()),1e3);return()=>window.clearInterval(K)},[E,Y]);const re=d-a,ee=E&&(d>=a+1||Y>0),W=d<=0,he=()=>{ee||g(K=>K+1)},we=()=>{W||g(K=>Math.max(0,K-1))},be=d!==a||h!==(o??"");return t.jsxs("div",{style:$.modalOverlay,onClick:l,children:[t.jsxs("div",{style:$.modal,onClick:K=>K.stopPropagation(),children:[t.jsxs("div",{style:$.modalHead,children:[e.name,t.jsx("button",{onClick:l,style:$.closeBtn,children:t.jsx(Fe,{size:16})})]}),t.jsxs("div",{style:{fontSize:12,color:"var(--text-3)",marginBottom:2},children:[r," · ",e.type==="minimum"?`at least ${w}`:`no more than ${w}`," / ",e.period,v>0&&t.jsxs(t.Fragment,{children:[" · ",v,"m between entries"]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:20,margin:"14px 0 6px"},children:[t.jsx("button",{onClick:we,disabled:W,style:{...$.counterBtn,...W?{opacity:.45,cursor:"not-allowed"}:{}},children:"−"}),t.jsx("span",{style:{fontSize:38,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:52,textAlign:"center",color:u},children:d}),t.jsx("button",{onClick:he,disabled:ee,style:{...$.counterBtn,...ee?{opacity:.45,cursor:"not-allowed"}:{}},title:E&&Y>0?"Wait for the interval before the next entry":E&&d>=a+1?"Press Set to confirm this entry":void 0,children:"+"})]}),E&&Y>0&&t.jsxs("div",{style:{textAlign:"center",fontSize:12,fontWeight:700,color:"#C2773B",marginBottom:8},children:["Wait ",Q0(Y)," before the next entry"]}),E&&Y<=0&&t.jsx("div",{style:{textAlign:"center",fontSize:11.5,color:"var(--text-3)",marginBottom:8},children:re>0?"Press Set to confirm this entry":`Tap + to add an entry (each at least ${v}m apart)`}),t.jsx("div",{style:{textAlign:"center",fontSize:12.5,fontWeight:700,color:u,marginBottom:12},children:z}),t.jsx("textarea",{value:h,onChange:K=>f(K.target.value),placeholder:"Add a comment (optional)…",style:{...$.sideInput,minHeight:56,resize:"vertical"}}),t.jsxs("div",{style:{display:"flex",gap:8,marginTop:10},children:[t.jsxs("button",{onClick:()=>R(!0),style:{...$.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[t.jsx(Fe,{size:14})," Delete"]}),t.jsxs("button",{onClick:()=>i(d,h),disabled:!be,style:{...$.sideAddBtn,flex:1,justifyContent:"center",height:38,...be?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(Oe,{size:14})," Set"]})]})]}),T&&t.jsx("div",{style:$.modalOverlay,onClick:K=>{K.stopPropagation(),R(!1)},children:t.jsxs("div",{style:{...$.modal,width:300},onClick:K=>K.stopPropagation(),children:[t.jsx("div",{style:$.modalHead,children:"Delete mark?"}),t.jsxs("p",{style:{fontSize:13,color:"var(--text-2)",margin:"2px 0 4px"},children:["Delete ",I?"today's":`${r}'s`," mark for ",t.jsx("strong",{children:e.name}),"? This can't be undone."]}),t.jsxs("div",{style:{display:"flex",gap:8,marginTop:6},children:[t.jsx("button",{onClick:()=>R(!1),style:{...$.actionBtn,flex:1,justifyContent:"center",height:36},children:"Cancel"}),t.jsxs("button",{onClick:s,style:{...$.sideAddBtn,flex:1,justifyContent:"center",height:36,background:"#C2536B"},children:[t.jsx(Fe,{size:14})," Delete"]})]})]})})]})}function Za({pct:e,label:r,sub:n,color:o}){const s=2*Math.PI*26,l=s*(1-Math.max(0,Math.min(100,e))/100);return t.jsxs("div",{style:$.ringStat,children:[t.jsxs("div",{style:$.ringBox,children:[t.jsxs("svg",{width:"70",height:"70",viewBox:"0 0 70 70",children:[t.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:"var(--border)",strokeWidth:"7"}),t.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:o,strokeWidth:"7",strokeLinecap:"round",strokeDasharray:s,strokeDashoffset:l,transform:"rotate(-90 35 35)",style:{transition:"stroke-dashoffset 0.5s ease"}})]}),t.jsxs("div",{style:{...$.ringPct,color:o},children:[e,"%"]})]}),t.jsxs("div",{children:[t.jsx("div",{style:$.ringLabel,children:r}),t.jsx("div",{style:$.ringSub,children:n})]})]})}function nv({habits:e,dayAction:r,logSet:n,onDelete:o,onEdit:i,isMobile:s,onOpenHabit:l}){const[a,d]=c.useState(0),[g,h]=c.useState(null),[f,m]=c.useState(!1);c.useEffect(()=>{F.getSetting("habit_show_names").then(x=>{typeof(x==null?void 0:x.value)=="boolean"&&m(x.value)}).catch(()=>{})},[]);const B=()=>m(x=>{const Q=!x;return F.setSetting("habit_show_names",Q).catch(()=>{}),Q&&h(null),Q}),T=Y0(a),R=`${op(T[0])} – ${op(T[6])}${a===0?" · This week":""}`,w=x=>{const Q=new Date(x+"T00:00:00"),O=Q.getDay(),G=new Date(Q);return G.setDate(Q.getDate()+(O===0?-6:1-O)),Array.from({length:7},(N,ge)=>{const de=new Date(G);return de.setDate(G.getDate()+ge),di(de)})},p=x=>x.logs||[],b=(x,Q)=>x.type==="minimum"&&x.period==="week"&&Q.filter(O=>n(x).has(O)).length>=(x.target_count||0),u=(x,Q)=>x.type==="minimum"&&x.period==="month"&&p(x).filter(O=>O.slice(0,7)===Q).length>=(x.target_count||0),z=(x,Q)=>x.type==="minimum"&&x.period==="year"&&p(x).filter(O=>O.slice(0,4)===Q).length>=(x.target_count||0),v=(x,Q)=>{var O;if((x.type==="minimum"||x.type==="maximum")&&x.period==="day"){const G=(O=x.log_counts)==null?void 0:O[Q];return G==null?!1:x.type==="minimum"?G>=(x.target_count||0):G>0&&G<=(x.target_count||0)}return n(x).has(Q)},I=(x,Q)=>x.type!=="minimum"?!1:x.period==="week"?b(x,w(Q)):x.period==="month"?u(x,Q.slice(0,7)):x.period==="year"?z(x,Q.slice(0,4)):!1,E=(x,Q)=>v(x,Q)||I(x,Q),S=e.filter(x=>E(x,Wn)).length,j=e.length?Math.round(S/e.length*100):0,Y=x=>{if(x.type==="minimum"&&x.period==="month"&&(u(x,T[0].slice(0,7))||u(x,T[6].slice(0,7)))||x.type==="minimum"&&x.period==="year"&&(z(x,T[0].slice(0,4))||z(x,T[6].slice(0,4)))||x.type==="minimum"&&x.period==="week"&&b(x,T))return 1;if((x.type==="minimum"||x.type==="maximum")&&x.period==="day")return Math.min(1,T.filter(N=>v(x,N)).length/7);const Q=n(x),O=T.filter(N=>Q.has(N)).length,G=x.type==="minimum"&&x.period==="week"?x.target_count||1:x.target_per_week||7;return G>0?Math.min(1,O/G):0},re=e.length?Math.round(e.reduce((x,Q)=>x+Y(Q),0)/e.length*100):0,ee=new Date,W=`${ee.getFullYear()}-${String(ee.getMonth()+1).padStart(2,"0")}`,he=new Date(ee.getFullYear(),ee.getMonth()+1,0).getDate(),we=he/7,be=x=>{if(x.type==="minimum"&&x.period==="month"&&u(x,W)||x.type==="minimum"&&x.period==="year"&&z(x,W.slice(0,4)))return 1;if((x.type==="minimum"||x.type==="maximum")&&x.period==="day"){let G=0;for(let N=1;N<=he;N++)v(x,`${W}-${String(N).padStart(2,"0")}`)&&G++;return Math.min(1,G/he)}const Q=p(x).filter(G=>G.slice(0,7)===W).length;let O;return x.type==="minimum"&&x.period==="week"?O=(x.target_count||1)*we:x.type==="minimum"&&x.period==="month"?O=x.target_count||1:x.type==="minimum"&&x.period==="year"?O=(x.target_count||1)/12:O=(x.target_per_week||7)*we,O>0?Math.min(1,Q/O):0},ze=e.length?Math.round(e.reduce((x,Q)=>x+be(Q),0)/e.length*100):0,K=x=>{const Q=new Date;return Q.setDate(Q.getDate()+x),di(Q)},U=x=>e.filter(Q=>E(Q,x)).length,ce=[{label:"Today",value:U(K(0)),color:"#4C9A6B"},{label:"Yesterday",value:U(K(-1)),color:"var(--text-3)"},{label:"Day before",value:U(K(-2)),color:"var(--text-3)"}];return t.jsxs("div",{children:[t.jsxs("div",{style:$.mainHead,children:[t.jsx("div",{style:$.eyebrow,children:"Weekly view"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,flexWrap:"wrap"},children:[t.jsx("h1",{style:$.h1,children:"All Habits"}),s&&e.length>0&&t.jsxs("button",{onClick:B,style:$.nameToggle,title:f?"Hide habit names — tap a circle to reveal one":"Show all habit names",children:[t.jsx("span",{style:{...$.nameToggleTrack,background:f?"#4C9A6B":"var(--border)"},children:t.jsx("span",{style:{...$.nameToggleKnob,left:f?19:3}})}),f?t.jsx(ms,{size:13}):t.jsx(Ql,{size:13}),t.jsx("span",{children:"Names"})]})]})]}),t.jsxs("div",{style:$.navBar,children:[t.jsx("button",{onClick:()=>d(x=>x-1),style:$.navBtn,children:t.jsx(wn,{size:16})}),t.jsx("span",{style:$.navLabel,children:R}),t.jsx("button",{onClick:()=>d(x=>Math.min(0,x+1)),disabled:a>=0,style:{...$.navBtn,...a>=0?$.navBtnDisabled:{}},children:t.jsx(nn,{size:16})})]}),t.jsxs("div",{style:{...$.weekCard,...s?$.weekCardMobile:{}},children:[t.jsxs("div",{style:{...$.weekHeadRow,...s?$.weekRowMobile:{}},children:[t.jsx("div",{style:{...$.weekNameCol,...s?$.weekNameColMobile:{}}}),ei.map((x,Q)=>t.jsxs("div",{style:$.weekDayHead,children:[t.jsx("span",{style:$.weekDayName,children:x}),t.jsx("span",{style:{...$.weekDayNum,...T[Q]===Wn?$.weekDayToday:{}},children:new Date(T[Q]+"T00:00").getDate()})]},x)),t.jsx("div",{style:{...$.weekStreakCol,...s?$.weekStreakColMobile:{}},children:s?t.jsx(jn,{size:12}):"Streak"})]}),e.map(x=>{var Ae,qe;const Q=((Ae=Qn[x.pillar])==null?void 0:Ae.dot)||"#9A968C",O=((qe=Qn[x.pillar])==null?void 0:qe.soft)||"rgba(0,0,0,0.05)",G=n(x),N=x.type==="weekly",ge=new Set(x.days||[]),de=[0,1,2,3,4,5,6].filter(Ye=>ge.has(Ye)),Me=N&&de.length>0&&de.every(Ye=>G.has(T[Ye])),oe=N?Array(7).fill(Me):null,ae=x.type==="minimum"&&["week","month","year"].includes(x.period),P=x.target_count||0,X=x.logs||[],me=Ye=>X.filter(Ke=>Ke.slice(0,7)===Ye).length,D=Ye=>X.filter(Ke=>Ke.slice(0,4)===Ye).length,y=T.filter(Ye=>G.has(Ye)).length,te=Ye=>ae?x.period==="week"?y>=P:x.period==="month"?me(Ye.slice(0,7))>=P:x.period==="year"?D(Ye.slice(0,4))>=P:!1:!1,M=ae&&T.some(te),ie=x.period==="week"?y:x.period==="month"?me(T[0].slice(0,7)):x.period==="year"?D(T[0].slice(0,4)):0,ve=g===x.id;return t.jsxs(c.Fragment,{children:[s&&(ve||f)&&t.jsxs("button",{onClick:()=>l&&l(x.id),style:{...$.mobileNameBanner,color:Q},children:[t.jsx("span",{style:{...$.sideDot,background:Q}}),t.jsx("span",{style:$.mobileNameText,children:x.name}),x.type==="weekly"?t.jsx("span",{style:$.typeBadge,children:(x.days||[]).map(Ye=>ei[Ye]).join("·")||"—"}):x.type!=="regular"?t.jsx("span",{style:$.typeBadge,children:x.type==="minimum"?`≥${x.target_count}/${x.period}`:`≤${x.target_count}/${x.period}`}):null]}),t.jsxs("div",{style:{...$.weekRow,...s?$.weekRowMobile:{}},children:[s?t.jsx("div",{style:{...$.weekNameCol,...$.weekNameColMobile},children:t.jsx("button",{onClick:()=>h(ve?null:x.id),style:{...$.habitAvatar,background:Q},title:x.name,children:(x.name||"?").trim().charAt(0).toUpperCase()})}):t.jsxs("div",{style:{...$.weekNameCol,flexDirection:"column",alignItems:"flex-start",gap:2},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[t.jsx("span",{style:{...$.sideDot,background:Q}}),t.jsx("span",{style:$.weekHabitName,children:x.name})]}),x.type==="weekly"?t.jsx("span",{style:$.typeBadge,children:(x.days||[]).map(Ye=>ei[Ye]).join("·")||"—"}):x.type!=="regular"?t.jsx("span",{style:$.typeBadge,children:x.type==="minimum"?`≥${x.target_count}/${x.period}`:`≤${x.target_count}/${x.period}`}):null]}),T.map((Ye,Ke)=>{var yt,bt;if(N&&!ge.has(Ke))return t.jsxs("div",{style:{...$.weekCell,position:"relative",zIndex:0},children:[oe[Ke]&&t.jsx("span",{style:{...$.chainLine,background:Q,left:oe[Ke-1]?0:"50%",right:oe[Ke+1]?0:"50%"}}),t.jsx("span",{style:{...$.offDay,position:"relative",zIndex:1},title:"Not scheduled",children:"·"})]},Ye);const at=G.has(Ye),Xe=Ye>Wn,ft=(x.type==="minimum"||x.type==="maximum")&&x.period==="day",se=(yt=x.log_counts)==null?void 0:yt[Ye],We=se!=null,Ze=!!((bt=x.log_notes)!=null&&bt[Ye]),rt=te(Ye),gt=Ke>0&&te(T[Ke-1]),Rt=Ke<T.length-1&&te(T[Ke+1]),wt=at||rt;return t.jsxs("div",{style:{...$.weekCell,position:"relative",zIndex:0},children:[rt&&t.jsx("span",{style:{...$.chainLine,background:Q,left:gt?0:"50%",right:Rt?0:"50%"}}),N&&oe[Ke]&&t.jsx("span",{style:{...$.chainLine,background:Q,left:oe[Ke-1]?0:"50%",right:oe[Ke+1]?0:"50%"}}),t.jsx("button",{disabled:Xe,onClick:()=>r(x,Ye),style:{...$.tick,...wt?{background:Q,borderColor:Q,color:"#fff"}:{},...ft&&We&&!at?{borderColor:Q,color:Q}:{},...Xe&&!wt?$.tickFuture:{}},children:ft?We?t.jsx("span",{style:{fontSize:12,fontWeight:700},children:se}):null:at&&t.jsx(Oe,{size:14,color:"#fff",strokeWidth:3})}),Ze&&t.jsx("span",{style:$.cellNoteBubble})]},Ye)}),t.jsx("div",{style:{...$.weekStreakCol,...s?$.weekStreakColMobile:{}},children:Me?t.jsxs("span",{style:{...$.streakPill,...s?$.streakPillMobile:{},background:O,color:Q},children:[t.jsx(ys,{size:12})," ",s?de.length:`${de.length}/${de.length}`]}):M?t.jsxs("span",{style:{...$.streakPill,...s?$.streakPillMobile:{},background:O,color:Q},children:[t.jsx(ys,{size:12})," ",s?ie:`${ie}/${P}`]}):t.jsxs("span",{style:{...$.streakPill,...s?$.streakPillMobile:{},background:O,color:Q},children:[t.jsx(jn,{size:12})," ",x.streak]})})]})]},x.id)}),e.length===0&&t.jsx("div",{style:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},children:"No habits yet — add one from the sidebar."})]}),e.length>0&&t.jsxs("div",{style:{...$.progressCard,marginTop:18,marginBottom:0,flexDirection:"column",alignItems:"stretch",gap:12},children:[t.jsx("div",{style:$.threeDayTitle,children:"Last 3 days · habits completed"}),t.jsx(ov,{items:ce,total:e.length})]}),e.length>0&&t.jsxs("div",{style:{...$.progressCard,marginTop:14,marginBottom:0},children:[t.jsx(Za,{pct:j,label:"Today",sub:`${S}/${e.length} done`,color:"#4C9A6B"}),t.jsx("div",{style:$.progressDivider}),t.jsx(Za,{pct:re,label:"This week",sub:"of weekly targets",color:"#3A7CA5"}),t.jsx("div",{style:$.progressDivider}),t.jsx(Za,{pct:ze,label:"This month",sub:"of monthly targets",color:"#8268B0"})]})]})}function ov({items:e,total:r}){const n=Math.max(1,r,...e.map(o=>o.value));return t.jsx("div",{style:$.tbWrap,children:e.map((o,i)=>t.jsxs("div",{style:$.tbRow,children:[t.jsx("div",{style:$.tbLbl,children:o.label}),t.jsx("div",{style:$.tbTrack,children:t.jsx("div",{style:{...$.tbBar,width:`${o.value/n*100}%`,background:o.color}})}),t.jsxs("div",{style:$.tbVal,children:[o.value,"/",r]})]},i))})}function iv({habit:e,dayAction:r,logSet:n,onDelete:o,onEdit:i,setNote:s,onToggleActive:l}){var de,Me;const[a,d]=c.useState(null),[g,h]=c.useState(""),[f,m]=c.useState(null),[B,T]=c.useState(0),R=c.useRef(null);if(!e)return null;const w=((de=Qn[e.pillar])==null?void 0:de.dot)||"#9A968C",p=((Me=Qn[e.pillar])==null?void 0:Me.soft)||"rgba(0,0,0,0.05)",b=n(e),u=e.type==="weekly",z=new Set(e.days||[]),v=oe=>(new Date(oe+"T00:00").getDay()+6)%7,I=oe=>!u||z.has(v(oe)),E=oe=>{const ae=new Date(oe+"T00:00"),P=ae.getDay(),X=new Date(ae);X.setDate(ae.getDate()+(P===0?-6:1-P));const me=Array.from({length:7},(te,M)=>{const ie=new Date(X);return ie.setDate(X.getDate()+M),di(ie)}),D=[0,1,2,3,4,5,6].filter(te=>z.has(te)),y=D.length>0&&D.every(te=>b.has(me[te]));return Array(7).fill(y)},{dates:S,startOffset:j,label:Y,year:re}=K0(B),ee=S.filter(oe=>oe<=Wn&&I(oe)&&b.has(oe)).length,W=S.filter(oe=>oe<=Wn&&I(oe)).length,he=W>0?Math.round(ee/W*100):0,we=e.type==="minimum"&&(e.period==="month"||e.period==="year"),be=e.period==="year"?(e.logs||[]).filter(oe=>oe.startsWith(`${re}-`)).length:S.filter(oe=>b.has(oe)).length,ze=we&&be>=(e.target_count||0),K=e.type==="minimum"&&e.period==="week",U=e.target_count||0,ce=oe=>{const ae=new Date(oe+"T00:00"),P=ae.getDay(),X=new Date(ae);X.setDate(ae.getDate()+(P===0?-6:1-P));let me=0;for(let D=0;D<7;D++){const y=new Date(X);y.setDate(X.getDate()+D),b.has(di(y))&&me++}return me},x=oe=>we?ze:K?ce(oe)>=U:!1,Q=K?ce(Wn):0,O=K&&Q>=U,G=oe=>{R.current=setTimeout(()=>d(oe),500)},N=()=>clearTimeout(R.current),ge=oe=>{var ae;m(oe),h(((ae=e.log_notes)==null?void 0:ae[oe])||""),d(null)};return t.jsxs("div",{children:[t.jsxs("div",{style:$.mainHead,children:[t.jsxs("div",{children:[t.jsxs("div",{style:$.eyebrow,children:[t.jsx("span",{style:{...$.sideDot,background:w,marginRight:6}}),e.pillar," · Monthly view"]}),t.jsx("h1",{style:$.h1,children:e.name})]}),t.jsxs("div",{style:{display:"flex",gap:8,marginTop:8,flexWrap:"wrap"},children:[t.jsxs("button",{onClick:i,style:$.actionBtn,children:[t.jsx(vt,{size:14})," Edit"]}),t.jsx("button",{onClick:()=>l(e.id,e.active===!1),style:{...$.actionBtn,...e.active===!1?{color:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:e.active===!1?t.jsxs(t.Fragment,{children:[t.jsx(Oe,{size:14})," Enable"]}):t.jsxs(t.Fragment,{children:[t.jsx(u0,{size:14})," Disable"]})}),t.jsxs("button",{onClick:o,style:{...$.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[t.jsx(Fe,{size:14})," Delete"]}),e.reminder_time&&t.jsxs("button",{style:$.actionBtn,children:[t.jsx(jg,{size:14})," ",e.reminder_time]})]})]}),t.jsxs("div",{style:$.statStrip,children:[t.jsx(no,{label:"Current streak",value:`${e.streak} days`,c:w,soft:p,flame:!0}),t.jsx(no,{label:"Best streak",value:`${e.max_streak??e.streak} days`,c:w,soft:p,flame:!0}),t.jsx(no,{label:"Done this month",value:`${ee}/${W}`,c:w,soft:p}),t.jsx(no,{label:"Completion",value:`${he}%`,c:w,soft:p}),e.type==="regular"?t.jsx(no,{label:"Weekly target",value:`${e.target_per_week}×`,c:w,soft:p}):e.type==="weekly"?t.jsx(no,{label:"Days",value:(e.days||[]).map(oe=>ei[oe]).join(", ")||"—",c:w,soft:p}):t.jsx(no,{label:e.type==="minimum"?"Min target":"Max allowed",value:`${e.target_count}/${e.period}`,c:w,soft:p})]}),t.jsxs("div",{style:$.navBar,children:[t.jsx("button",{onClick:()=>T(oe=>oe-1),style:$.navBtn,children:t.jsx(wn,{size:16})}),t.jsxs("span",{style:$.navLabel,children:[Y,B===0?" · This month":""]}),t.jsx("button",{onClick:()=>T(oe=>Math.min(0,oe+1)),disabled:B>=0,style:{...$.navBtn,...B>=0?$.navBtnDisabled:{}},children:t.jsx(nn,{size:16})})]}),we&&t.jsxs("div",{style:{...$.chainBanner,background:ze?p:"var(--bg)",color:ze?w:"var(--text-3)"},children:[t.jsx(ys,{size:15}),ze?`${e.period==="year"?"Yearly":"Monthly"} chain complete — ${be}/${e.target_count} connected`:`${be}/${e.target_count} this ${e.period} · ${(e.target_count||0)-be} more to connect the chain`]}),K&&B===0&&t.jsxs("div",{style:{...$.chainBanner,background:O?p:"var(--bg)",color:O?w:"var(--text-3)"},children:[t.jsx(ys,{size:15}),O?`This week's chain complete — ${Q}/${U} connected`:`${Q}/${U} this week · ${Math.max(0,U-Q)} more to connect the chain`]}),t.jsxs("div",{style:$.monthCard,children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[t.jsx("div",{style:$.monthTitle,children:Y}),t.jsx("span",{style:{fontSize:11,color:"var(--text-3)"},children:"Long-press a day for options"})]}),t.jsx("div",{style:$.monthDow,children:ei.map(oe=>t.jsx("div",{style:$.monthDowCell,children:oe},oe))}),t.jsxs("div",{style:$.monthGrid,children:[Array.from({length:j}).map((oe,ae)=>t.jsx("div",{},`pad${ae}`)),S.map((oe,ae)=>{var Ye,Ke;const P=ae+1;if(u&&!I(oe)){const at=v(oe),Xe=E(oe),ft=(j+ae)%7;return t.jsxs("div",{style:{position:"relative"},children:[Xe[at]&&t.jsx("span",{style:{...$.chainLine,background:w,...ft===0?{left:"50%"}:{left:Xe[at-1]?-6:"50%"},...ft===6?{right:"50%"}:{right:Xe[at+1]?-6:"50%"}}}),t.jsx("div",{style:{...$.monthDay,...$.monthDayOff,width:"100%",position:"relative",zIndex:1},children:P})]},oe)}const X=b.has(oe),me=oe>Wn,D=oe===Wn,y=!!((Ye=e.log_notes)!=null&&Ye[oe]),te=(e.type==="minimum"||e.type==="maximum")&&e.period==="day",M=(Ke=e.log_counts)==null?void 0:Ke[oe],ie=M!=null,ve=x(oe),Ae=ve&&!X,qe=(j+ae)%7;return t.jsxs("div",{style:{position:"relative"},children:[ve&&t.jsx("span",{style:{...$.chainLine,background:w,...qe===0?{left:"50%"}:{left:-6},...qe===6?{right:"50%"}:{right:-6}}}),u&&(()=>{const at=v(oe),Xe=E(oe);return Xe[at]?t.jsx("span",{style:{...$.chainLine,background:w,...qe===0?{left:"50%"}:{left:Xe[at-1]?-6:"50%"},...qe===6?{right:"50%"}:{right:Xe[at+1]?-6:"50%"}}}):null})(),t.jsx("button",{disabled:me,onClick:()=>r(e,oe),onMouseDown:()=>!te&&G(oe),onMouseUp:N,onTouchStart:()=>!te&&G(oe),onTouchEnd:N,style:{...$.monthDay,position:"relative",zIndex:1,...X?{background:w,borderColor:w,color:"#fff"}:{},...Ae?{background:p,borderColor:w,color:w}:{},...te&&ie&&!X?{borderColor:w,color:w}:{},...me&&!X?$.monthDayFuture:{},...D&&!X?{borderColor:w,borderWidth:2}:{},width:"100%"},children:P}),te&&ie&&t.jsx("span",{style:{...$.countBadge,background:X?"#4C9A6B":w},children:M}),y&&t.jsx("span",{style:$.noteIndicator}),a===oe&&t.jsx(sv,{onEdit:i,onDelete:o,onAddNote:()=>ge(oe),onRemind:i,onClose:()=>d(null)})]},oe)})]})]}),f&&t.jsxs("div",{style:$.noteBox,children:[t.jsxs("div",{style:{fontWeight:600,fontSize:13,marginBottom:6},children:["Note for ",f]}),t.jsx("textarea",{value:g,onChange:oe=>h(oe.target.value),placeholder:"Add a note for this day…",style:{...$.sideInput,minHeight:60,resize:"vertical"}}),t.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[t.jsxs("button",{onClick:()=>{s(f,g),m(null)},style:$.sideAddBtn,children:[t.jsx(Oe,{size:13})," Save"]}),t.jsx("button",{onClick:()=>m(null),style:$.sideCancelBtn,children:t.jsx(Fe,{size:13})})]})]})]})}function sv({onEdit:e,onDelete:r,onAddNote:n,onRemind:o,onClose:i}){return t.jsxs("div",{style:$.longPressMenu,children:[t.jsxs("button",{style:$.menuItem,onClick:()=>{e(),i()},children:[t.jsx(vt,{size:13})," Edit"]}),t.jsxs("button",{style:$.menuItem,onClick:()=>{n(),i()},children:[t.jsx(kg,{size:13})," Add note"]}),t.jsxs("button",{style:$.menuItem,onClick:()=>{o(),i()},children:[t.jsx(jg,{size:13})," Remind"]}),t.jsxs("button",{style:{...$.menuItem,color:"#C2536B"},onClick:()=>{r(),i()},children:[t.jsx(Fe,{size:13})," Delete"]})]})}function lv({habits:e,onSave:r,onToggleActive:n,onClose:o}){const[i,s]=c.useState(()=>e.map(g=>g.id)),l=c.useMemo(()=>{const g={};return e.forEach(h=>g[h.id]=h),g},[e]),a=i.map(g=>l[g]).filter(Boolean),d=(g,h)=>{const f=g+h;if(f<0||f>=i.length)return;const m=[...i];[m[g],m[f]]=[m[f],m[g]],s(m)};return t.jsx("div",{style:$.modalOverlay,onClick:o,children:t.jsxs("div",{style:{...$.modal,maxHeight:"80vh",overflow:"hidden"},onClick:g=>g.stopPropagation(),children:[t.jsxs("div",{style:{...$.modalHead,flexShrink:0},children:["Edit Habits",t.jsx("button",{onClick:o,style:$.closeBtn,children:t.jsx(Fe,{size:16})})]}),t.jsx("p",{style:{fontSize:12,color:"var(--text-3)",margin:"0 0 10px",flexShrink:0},children:"Reorder with the arrows. Toggle a habit off to hide it from your views (its history is kept)."}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6,overflowY:"auto",minHeight:0},children:a.map((g,h)=>{var B;const f=((B=Qn[g.pillar])==null?void 0:B.dot)||"#9A968C",m=g.active!==!1;return t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"9px 10px",background:"var(--bg)",borderRadius:9,border:"1px solid var(--border)",opacity:m?1:.5},children:[t.jsx("span",{style:{...$.sideDot,background:f}}),t.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500,textDecoration:m?"none":"line-through"},children:g.name}),t.jsx("button",{onClick:()=>n(g.id,!m),title:m?"Disable (hide) habit":"Enable habit",style:{...$.activeToggle,...m?$.activeToggleOn:{}},role:"switch","aria-checked":m,children:t.jsx("span",{style:{...$.activeKnob,...m?$.activeKnobOn:{}}})}),t.jsx("button",{onClick:()=>d(h,-1),disabled:h===0,style:{...$.navBtn,width:28,height:28,opacity:h===0?.3:1,fontSize:14},children:"↑"}),t.jsx("button",{onClick:()=>d(h,1),disabled:h===a.length-1,style:{...$.navBtn,width:28,height:28,opacity:h===a.length-1?.3:1,fontSize:14},children:"↓"})]},g.id)})}),t.jsxs("button",{onClick:()=>r(i),style:{...$.sideAddBtn,width:"100%",marginTop:14,height:38,justifyContent:"center",flexShrink:0},children:[t.jsx(Oe,{size:14})," Save Order"]})]})})}function av({year:e}){const[r,n]=c.useState([]);if(c.useEffect(()=>{F.getHabitsYearly(e).then(n).catch(console.error)},[e]),!r.length)return null;const o=Array.from({length:12},(s,l)=>{const a=r.reduce((g,h)=>{var f;return g+(((f=h.monthly[l+1])==null?void 0:f.done)||0)},0),d=r.reduce((g,h)=>{var f;return g+Math.floor((((f=h.monthly[l+1])==null?void 0:f.days)||30)/7*7)},0);return d>0?Math.round(a/d*100):0}),i=Math.max(...o,1);return t.jsxs("div",{style:{...$.monthCard,marginTop:18},children:[t.jsxs("div",{style:$.monthTitle,children:[e," Completion"]}),t.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:6,height:80,marginTop:12},children:o.map((s,l)=>t.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[t.jsx("div",{style:{width:"100%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",height:`${s/i*60}px`,minHeight:2,opacity:s>0?1:.15},title:`${s}%`}),t.jsx("span",{style:{fontSize:9,color:"var(--text-3)",fontWeight:600},children:V0[l]})]},l))})]})}function no({label:e,value:r,c:n,soft:o,flame:i}){return t.jsxs("div",{style:{...$.stat,background:o},children:[t.jsx("div",{style:$.statLabel,children:e}),t.jsxs("div",{style:{...$.statValue,color:n},children:[i&&t.jsx(jn,{size:15})," ",r]})]})}const $={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:230,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",padding:"20px 12px",display:"flex",flexDirection:"column",gap:3,overflowY:"auto"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.18)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)",boxShadow:"none"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.38)",zIndex:20},sideTop:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 4px"},closeBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",marginBottom:8},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700,padding:"0 6px 14px"},sideItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"9px 10px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:500,color:"var(--text-2)",textAlign:"left"},sideItemOn:{background:"var(--hover)",fontWeight:600},sideLabel:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},sideCount:{fontSize:11,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:10,padding:"1px 7px"},sideStreak:{display:"flex",alignItems:"center",gap:3,fontSize:11,fontWeight:600,color:"#C2773B"},sideDot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},sideDivider:{height:1,background:"var(--border)",margin:"8px 6px"},addBox:{padding:"10px 6px",display:"flex",flexDirection:"column",gap:6},sideInput:{border:"1px solid var(--border)",borderRadius:7,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},sideAddBtn:{border:"none",background:"#4C9A6B",color:"#fff",height:30,padding:"0 12px",borderRadius:7,cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontSize:13,fontFamily:"inherit"},sideCancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:30,height:30,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},sideNewBtn:{display:"flex",alignItems:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",borderRadius:8,padding:"8px 10px",fontSize:12.5,color:"var(--text-3)",fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginTop:6,justifyContent:"center"},main:{flex:1,padding:"26px",overflowX:"hidden",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:200},mainHead:{marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:5,display:"flex",alignItems:"center"},h1:{fontSize:27,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},actionBtn:{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:500,color:"var(--text-2)",border:"1px solid var(--border)",background:"var(--surface)",padding:"5px 10px",borderRadius:7,cursor:"pointer",fontFamily:"inherit"},progressCard:{background:"var(--surface)",borderRadius:12,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14,display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"},progressDivider:{width:1,alignSelf:"stretch",background:"var(--border)",minHeight:48},threeDayTitle:{fontSize:13,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:84,fontSize:11.5,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap"},tbTrack:{flex:1,height:14,background:"var(--surface-2)",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:52,fontSize:11.5,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"},ringStat:{display:"flex",alignItems:"center",gap:12,flex:"1 1 160px"},ringBox:{position:"relative",width:70,height:70,display:"grid",placeItems:"center",flexShrink:0},ringPct:{position:"absolute",inset:0,display:"grid",placeItems:"center",fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},ringLabel:{fontSize:14,fontWeight:700,color:"var(--text)"},ringSub:{fontSize:11.5,color:"var(--text-3)",fontWeight:500,marginTop:2},weekCard:{background:"var(--surface)",borderRadius:12,padding:"8px 14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"auto"},weekCardMobile:{padding:"8px 8px 12px",overflowX:"hidden"},weekHeadRow:{display:"flex",alignItems:"flex-end",padding:"10px 0",borderBottom:"1px solid var(--border)",minWidth:480,position:"relative",zIndex:0},weekRowMobile:{minWidth:0},weekNameCol:{width:160,flexShrink:0,alignSelf:"stretch",display:"flex",alignItems:"center",gap:8,position:"sticky",left:0,zIndex:5,background:"var(--surface)",boxShadow:"6px 0 6px -6px rgba(0,0,0,0.15)"},weekNameColMobile:{width:34,gap:0,boxShadow:"none",justifyContent:"center",position:"static"},weekStreakColMobile:{width:30},streakPillMobile:{padding:"3px 6px",gap:2},habitAvatar:{width:26,height:26,borderRadius:"50%",border:"none",color:"#fff",fontSize:12,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,lineHeight:1},mobileNameBanner:{display:"flex",alignItems:"center",gap:7,width:"100%",border:"none",background:"var(--hover)",borderRadius:8,padding:"6px 10px",margin:"4px 0 2px",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},mobileNameText:{fontSize:13,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},nameToggle:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:20,padding:"5px 11px 5px 5px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit",flexShrink:0},nameToggleTrack:{position:"relative",width:34,height:20,borderRadius:10,flexShrink:0,transition:"background 0.2s",display:"inline-block"},nameToggleKnob:{position:"absolute",top:3,width:14,height:14,borderRadius:"50%",background:"#fff",transition:"left 0.2s",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},weekDayHead:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2},weekDayName:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekDayNum:{fontSize:12,fontWeight:600,color:"var(--text-2)",width:22,height:22,display:"grid",placeItems:"center",borderRadius:"50%"},weekDayToday:{background:"var(--accent-strong)",color:"#fff"},weekStreakCol:{width:64,flexShrink:0,textAlign:"center",fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekRow:{display:"flex",alignItems:"center",padding:"9px 0",borderBottom:"1px solid #F4F2EC",minWidth:480,position:"relative",zIndex:0},weekHabitName:{fontSize:13,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},weekCell:{flex:1,display:"grid",placeItems:"center"},typeBadge:{fontSize:10,color:"var(--text-3)",background:"var(--hover)",padding:"1px 6px",borderRadius:8,fontWeight:600},tick:{width:26,height:26,borderRadius:7,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",padding:0,position:"relative",zIndex:1},tickFuture:{opacity:.4,cursor:"not-allowed",borderStyle:"dashed"},streakPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,fontWeight:700,padding:"3px 9px",borderRadius:12},tinyBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:"2px 3px",display:"grid",placeItems:"center",borderRadius:4},statStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:10,marginBottom:18},stat:{borderRadius:10,padding:"13px 14px"},statLabel:{fontSize:11,fontWeight:600,color:"var(--text-2)",marginBottom:5},statValue:{fontSize:19,fontWeight:700,display:"flex",alignItems:"center",gap:5,fontFamily:"'Fraunces',Georgia,serif"},monthCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},monthTitle:{fontSize:14,fontWeight:700,marginBottom:12,fontFamily:"'Fraunces',Georgia,serif"},monthDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:8},monthDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},monthGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6},monthDay:{aspectRatio:"1",border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",display:"grid",placeItems:"center"},monthDayFuture:{opacity:.4,cursor:"not-allowed",background:"var(--surface-2)"},monthDayOff:{background:"var(--surface-2)",borderStyle:"dashed",color:"var(--text-3)",opacity:.5,cursor:"default"},dayPick:{display:"flex",gap:4,flexWrap:"wrap"},dayChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:7,padding:"5px 7px",fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:"inherit",minWidth:34},dayChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},pickHint:{fontSize:11,color:"var(--text-3)",fontWeight:600},offDay:{color:"var(--text-3)",opacity:.4,fontSize:18,lineHeight:1,userSelect:"none"},noteIndicator:{position:"absolute",top:3,right:3,width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},cellNoteBubble:{position:"absolute",top:2,right:"calc(50% - 16px)",width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},countBadge:{position:"absolute",bottom:2,right:2,minWidth:13,height:13,padding:"0 2px",borderRadius:7,color:"#fff",fontSize:9,fontWeight:700,display:"grid",placeItems:"center",lineHeight:1},counterBtn:{width:44,height:44,borderRadius:"50%",border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:24,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1},activeToggle:{position:"relative",width:38,height:22,borderRadius:11,border:"none",background:"var(--border)",cursor:"pointer",flexShrink:0,transition:"background 0.2s",padding:0},activeToggleOn:{background:"#4C9A6B"},activeKnob:{position:"absolute",top:3,left:3,width:16,height:16,borderRadius:"50%",background:"#fff",transition:"left 0.2s",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},activeKnobOn:{left:19},chainLine:{position:"absolute",top:"calc(50% - 3px)",left:0,right:0,height:6,zIndex:0,opacity:.9},chainBanner:{display:"flex",alignItems:"center",gap:8,borderRadius:10,padding:"10px 14px",marginBottom:14,fontSize:12.5,fontWeight:700,fontFamily:"'Inter',system-ui,sans-serif"},navBar:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:16},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},navLabel:{fontSize:13,fontWeight:700,color:"var(--text)",minWidth:180,textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},noteBox:{background:"var(--surface)",borderRadius:10,padding:14,marginTop:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},longPressMenu:{position:"absolute",top:"100%",left:0,zIndex:50,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 4px 16px rgba(0,0,0,0.12)",padding:"4px 0",minWidth:140},menuItem:{display:"flex",alignItems:"center",gap:8,width:"100%",border:"none",background:"none",padding:"8px 14px",fontSize:13,color:"var(--text)",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:100,display:"grid",placeItems:"center"},modal:{background:"var(--surface)",borderRadius:14,padding:24,width:320,maxWidth:"90vw",display:"flex",flexDirection:"column",gap:8},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:700,fontSize:16,fontFamily:"'Fraunces',Georgia,serif",marginBottom:6},modalLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4},celebOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.25)",zIndex:200,display:"grid",placeItems:"center",pointerEvents:"none"},celebBox:{background:"var(--surface)",borderRadius:18,padding:"28px 36px",textAlign:"center",boxShadow:"0 12px 40px rgba(0,0,0,0.25)",animation:"habitCelebPop 0.35s cubic-bezier(0.34,1.56,0.64,1)"},celebEmoji:{fontSize:40,lineHeight:1,marginBottom:10},celebTitle:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},celebSub:{fontSize:13,color:"var(--text-3)",marginTop:4,fontWeight:500},urgeBox:{borderTop:"3px solid #C2536B"}},xc=[{id:1,label:"Rough",emoji:"😣",color:"#C2536B"},{id:2,label:"Low",emoji:"🙁",color:"#C2773B"},{id:3,label:"Okay",emoji:"😐",color:"#C9A227"},{id:4,label:"Good",emoji:"🙂",color:"#4C9A6B"},{id:5,label:"Great",emoji:"😄",color:"#3A7CA5"}],dv=e=>xc.find(r=>r.id===e),Ja=[{id:"wins",label:"Wins",hint:"What went well today?",icon:Yr,color:"#C9A227"},{id:"grateful",label:"Grateful for",hint:"1–3 things",icon:gm,color:"#C2536B"},{id:"mattered",label:"What mattered",hint:"The point of today",icon:Ig,color:"#3A7CA5"},{id:"letgo",label:"Letting go of",hint:"Offload what's draining",icon:C0,color:"#8268B0"},{id:"tomorrow",label:"Tomorrow's one thing",hint:"A single priority",icon:km,color:"#4C9A6B"}],Dm=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,cv=()=>Dm(new Date),ed=e=>new Date(e+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"});function gv(){const e=cv(),[r,n]=[new Date().getFullYear(),new Date().getMonth()+1],[o,i]=c.useState(null),s=o||e,l=s===e,[a,d]=c.useState(null),[g,h]=c.useState({}),[f,m]=c.useState(Object.fromEntries(Ja.map(j=>[j.id,""]))),B=c.useCallback(async j=>{const Y=await F.getJournalEntry(j);d(Y)},[]);c.useCallback(async()=>{const j=await F.getJournalHistory(r,n);h(j)},[r,n]);const T=c.useCallback(async()=>{const[j,Y]=await Promise.all([F.getJournalEntry(s),F.getJournalHistory(r,n)]);d(j),h(Y)},[s,r,n]);c.useEffect(()=>{T()},[T]);const R=async j=>{l&&(await F.updateJournalMood(s,j),T())},w=async j=>{if(!l)return;const Y=f[j].trim();Y&&(await F.addJournalBullet(s,j,Y),m(re=>({...re,[j]:""})),B(s))},p=async j=>{await F.deleteJournalBullet(j),B(s)},b=j=>{i(j===e?null:j),m(Object.fromEntries(Ja.map(Y=>[Y.id,""])))};if(!a)return t.jsx("div",{style:{padding:28,color:"var(--text-3)"},children:"Loading…"});const u=a.mood!==null,z=(()=>{let j=0;const Y=new Date(e);if(g[e]||l&&u)j=1,Y.setDate(Y.getDate()-1);else return 0;for(;;){const ee=Dm(Y);if(g[ee])j++,Y.setDate(Y.getDate()-1);else break}return j})(),v=Object.values(a.bullets||{}).reduce((j,Y)=>j+Y.length,0),I=new Date(r,n,0).getDate(),E=new Date(r,n-1,1).getDay(),S=E===0?6:E-1;return t.jsxs("div",{style:it.page,children:[t.jsxs("div",{style:it.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:it.eyebrow,children:"Anvil · Journal"}),!l&&t.jsxs("button",{style:it.backBtn,onClick:()=>i(null),children:[t.jsx(wn,{size:14})," Back to Today"]}),t.jsx("h1",{style:it.h1,children:l?"Today":ed(s)}),l&&t.jsx("div",{style:it.date,children:ed(e)})]}),t.jsxs("div",{style:it.streakBox,children:[t.jsx(jn,{size:16,color:"#C2773B"}),t.jsx("span",{style:it.streakNum,children:z}),t.jsx("span",{style:it.streakLabel,children:"day streak"})]})]}),t.jsxs("div",{style:it.card,children:[t.jsxs("div",{style:it.cardTitle,children:["How ",l?"are":"were"," you?"]}),t.jsx("div",{style:it.moodRow,children:xc.map(j=>{const Y=a.mood===j.id;return t.jsxs("button",{onClick:()=>R(j.id),disabled:!l,style:{...it.moodBtn,cursor:l?"pointer":"default",...Y?{background:j.color,borderColor:j.color,transform:"translateY(-2px)"}:{},...!l&&!Y?{opacity:.55}:{}},children:[t.jsx("span",{style:it.moodEmoji,children:j.emoji}),t.jsx("span",{style:{...it.moodLabel,color:Y?"#fff":"#6B675E"},children:j.label})]},j.id)})})]}),Ja.map(j=>{var ee;const Y=j.icon,re=((ee=a.bullets)==null?void 0:ee[j.id])||[];return t.jsxs("div",{style:it.card,children:[t.jsxs("div",{style:it.sectionHead,children:[t.jsx("span",{style:{...it.sectionIcon,background:`${j.color}1A`,color:j.color},children:t.jsx(Y,{size:15})}),t.jsxs("div",{children:[t.jsx("div",{style:it.cardTitle,children:j.label}),t.jsx("div",{style:it.sectionHint,children:j.hint})]})]}),t.jsxs("ul",{style:it.bulletList,children:[re.map(W=>t.jsxs("li",{style:it.bullet,children:[t.jsx("span",{style:{...it.bulletDot,background:j.color}}),t.jsx("span",{style:it.bulletText,children:W.text}),l&&t.jsx("button",{onClick:()=>p(W.id),style:it.bulletDel,children:t.jsx(Fe,{size:13})})]},W.id)),!l&&re.length===0&&t.jsx("li",{style:it.sectionHint,children:"Nothing written."})]}),l&&t.jsxs("div",{style:it.addRow,children:[t.jsx("input",{placeholder:"Add a point…",value:f[j.id],onChange:W=>m(he=>({...he,[j.id]:W.target.value})),onKeyDown:W=>W.key==="Enter"&&w(j.id),style:it.input}),t.jsx("button",{onClick:()=>w(j.id),style:{...it.addBtn,background:j.color},children:t.jsx(st,{size:16})})]})]},j.id)}),t.jsxs("div",{style:it.card,children:[t.jsxs("div",{style:it.cardTitle,children:[new Date(r,n-1).toLocaleDateString("en-US",{month:"long",year:"numeric"})," · Mood history",t.jsx("span",{style:{fontSize:11,color:"var(--text-3)",fontWeight:400,marginLeft:8},children:"tap a day to view"})]}),t.jsx("div",{style:it.calDow,children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(j=>t.jsx("div",{style:it.calDowCell,children:j},j))}),t.jsxs("div",{style:it.calGrid,children:[Array.from({length:S}).map((j,Y)=>t.jsx("div",{},`p${Y}`)),Array.from({length:I},(j,Y)=>Y+1).map(j=>{const Y=`${r}-${String(n).padStart(2,"0")}-${String(j).padStart(2,"0")}`,re=Y===e&&a.mood?a.mood:g[Y],ee=re?dv(re):null,W=Y>e,he=Y===s;return t.jsx("button",{onClick:()=>!W&&b(Y),disabled:W,style:{...it.calDay,background:ee?ee.color:W?"var(--surface-2)":"var(--surface)",borderColor:he?"var(--accent-strong)":"var(--border)",borderWidth:he?2:1,color:ee?"#fff":"var(--text-3)",opacity:W?.5:1,cursor:W?"not-allowed":"pointer",outline:he?"2px solid var(--accent-strong)":"none",outlineOffset:1},title:ee?ee.label:Y,children:ee?ee.emoji:j},j)})]}),t.jsx("div",{style:it.legend,children:xc.map(j=>t.jsxs("span",{style:it.legendItem,children:[t.jsx("span",{style:{...it.legendDot,background:j.color}})," ",j.label]},j.id))})]}),t.jsx("div",{style:it.footer,children:l?u?`Mood set · ${v} point${v===1?"":"s"} written today`:"Tap a mood to log today and keep your streak":`Viewing ${ed(s)} · past entries are read-only`})]})}const it={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},backBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",background:"none",color:"#3A7CA5",fontSize:12.5,fontWeight:600,cursor:"pointer",padding:"0 0 6px",fontFamily:"inherit"},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},date:{fontSize:13,color:"var(--text-3)",marginTop:4},streakBox:{display:"flex",alignItems:"center",gap:6,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"8px 14px"},streakNum:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"#C2773B"},streakLabel:{fontSize:11,color:"var(--text-3)",fontWeight:500},card:{background:"var(--surface)",borderRadius:12,padding:"18px 20px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},cardTitle:{fontSize:14,fontWeight:700,marginBottom:12,color:"var(--text)"},moodRow:{display:"flex",gap:8,flexWrap:"wrap"},moodBtn:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,border:"2px solid var(--border)",background:"var(--surface)",borderRadius:10,padding:"10px 12px",cursor:"pointer",flex:"1 1 60px",transition:"transform 0.1s"},moodEmoji:{fontSize:22},moodLabel:{fontSize:11,fontWeight:600},sectionHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:10},sectionIcon:{width:32,height:32,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},sectionHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},bulletList:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6,marginBottom:10},bullet:{display:"flex",alignItems:"center",gap:8,fontSize:13.5,lineHeight:1.4},bulletDot:{width:6,height:6,borderRadius:"50%",flexShrink:0},bulletText:{flex:1},bulletDel:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},addRow:{display:"flex",gap:8},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",outline:"none"},addBtn:{width:36,height:36,border:"none",borderRadius:8,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:12},calDay:{aspectRatio:"1",border:"1px solid var(--border)",borderRadius:7,fontSize:13,display:"grid",placeItems:"center",fontWeight:500,fontFamily:"inherit"},legend:{display:"flex",gap:10,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)"},legendDot:{width:8,height:8,borderRadius:"50%",display:"inline-block"},footer:{fontSize:12.5,color:"var(--text-3)",textAlign:"center",marginTop:8,fontStyle:"italic"}};function uv(e=760){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const _r=[{id:"D",label:"Data",color:"#3A7CA5",soft:"rgba(58,124,165,0.10)",prompt:"What did you read/watch? Log the raw source and a quick note.",hint:"e.g. 'Atomic Habits ch.1 — habits are systems not goals'"},{id:"I",label:"Information",color:"#8268B0",soft:"rgba(130,104,176,0.10)",prompt:"What did you actually understand from it? In your own words.",hint:"e.g. 'Small 1% improvements compound into massive change over time'"},{id:"K",label:"Knowledge",color:"#C9A227",soft:"rgba(201,162,39,0.10)",prompt:"How will this specifically improve your life? Connect it to your goals.",hint:"e.g. 'I will improve my morning workout habit by 1% each week'"},{id:"W",label:"Wisdom",color:"#4C9A6B",soft:"rgba(76,154,107,0.10)",prompt:"How have you implemented it? What changed?",hint:"e.g. 'I've not missed a workout in 3 weeks using the 1% rule'"}],sp=e=>_r.findIndex(r=>r.id===e),yc=[{id:"book",label:"Book",icon:xa},{id:"video",label:"Video",icon:z0},{id:"article",label:"Article",icon:kg}],Zs=e=>yc.find(r=>r.id===e)||yc[0],td={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"};function pv(){var te;const[e,r]=c.useState([]),[n,o]=c.useState(null),[i,s]=c.useState("ALL"),[l,a]=c.useState(!1),[d,g]=c.useState(null),[h,f]=c.useState({title:"",type:"book",pillar:"Academic",note:"",link:""}),[m,B]=c.useState(null),[T,R]=c.useState({}),[w,p]=c.useState(null),[b,u]=c.useState(null),[z,v]=c.useState({}),[I,E]=c.useState({}),[S,j]=c.useState(null),Y=uv(),re=c.useCallback(async()=>{try{const M=await F.getSkills();r(M);const ie={};M.forEach(ve=>{ie[ve.id]=Object.fromEntries(_r.map(Ae=>[Ae.id,""]))}),R(ve=>{const Ae={...ie};return M.forEach(qe=>{ve[qe.id]&&(Ae[qe.id]={...ie[qe.id],...ve[qe.id]})}),Ae})}catch(M){console.error(M)}},[]);c.useEffect(()=>{re()},[re]);const ee=e.find(M=>M.id===n),W=ee?sp(ee.stage):-1,he=async(M,ie)=>{var Ae;const ve=(((Ae=T[M])==null?void 0:Ae[ie])??"").trim();ve&&(await F.addSkillNote(M,ie,ve),R(qe=>({...qe,[M]:{...qe[M],[ie]:""}})),re())},we=async M=>{await F.deleteSkillNote(M),re()},be=M=>(M==null?void 0:M.source_type)==="book"?"Chapter":"Learning",ze=()=>`g${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,K=async M=>{const ie=[...M.data_groups||[]];ie.push({id:ze(),label:`${be(M)} ${ie.length+1}`}),await F.setSkillGroups(M.id,ie),E(ve=>({...ve,[ie[ie.length-1].id]:!0})),re()},U=async(M,ie,ve)=>{const Ae=(M.data_groups||[]).map(qe=>qe.id===ie?{...qe,label:ve}:qe);await F.setSkillGroups(M.id,Ae),re()},ce=async(M,ie)=>{const ve=(M.data_groups||[]).filter(Ae=>Ae.id!==ie);await F.setSkillGroups(M.id,ve),re()},x=async(M,ie)=>{const ve=(z[ie]??"").trim();ve&&(await F.addSkillNote(M.id,"D",ve,ie),v(Ae=>({...Ae,[ie]:""})),re())},Q=async()=>{!ee||!(b!=null&&b.trim())||(await F.updateSkill(ee.id,{title:b.trim()}),u(null),re())},O=async()=>{!w||!w.text.trim()||(await F.updateSkillNote(w.id,w.text.trim()),p(null),re())},G=async M=>{await F.toggleSkillNote(M),re()},N=async(M,ie)=>{e.find(Ae=>Ae.id===M)&&(ie==="W"&&g(M),await F.completeSkillStage(M,ie),re())},ge=async()=>{if(!h.title.trim())return;const M=await F.createSkill({pillar:h.pillar,title:h.title.trim(),source_type:h.type,link:h.link.trim(),note_d:h.note.trim()});a(!1),f({title:"",type:"book",pillar:"Academic",note:"",link:""}),o(M.id),re()},de=async()=>{ee&&(await F.updateSkill(ee.id,{link:(m||"").trim()}),B(null),re())},{deleteItem:Me,toasts:oe,handleUndo:ae,handleDismiss:P}=ur(F.deleteSkill,F.restoreSkill,re),X=(M,ie="Skill")=>{n===M&&o(null),Me(M,ie)},me=i==="ALL"?e:e.filter(M=>M.stage===i),D=e.filter(M=>M.stage==="W").length,y=!!ee;return t.jsxs("div",{style:fe.page,children:[d&&t.jsx("div",{style:fe.celebOverlay,children:t.jsxs("div",{style:fe.celebBox,children:[t.jsx("div",{style:fe.celebEmoji,children:"🏆"}),t.jsx("div",{style:fe.celebTitle,children:"Wisdom unlocked!"}),t.jsx("div",{style:fe.celebSub,children:"You've implemented this knowledge — that's rare and real."}),t.jsx("button",{onClick:()=>g(null),style:fe.celebBtn,children:"Continue"})]})}),t.jsxs("div",{style:fe.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:fe.eyebrow,children:"Anvil · Skills"}),t.jsx("h1",{style:fe.h1,children:"Skill"}),t.jsx("div",{style:fe.subhead,children:"Data → Information → Knowledge → Wisdom"})]}),t.jsxs("div",{style:fe.headRight,children:[t.jsxs("div",{style:fe.wisdomBadge,children:[t.jsx(Yr,{size:14,color:"#C9A227"})," ",D," Wisdom",D!==1?"s":""]}),t.jsxs("button",{onClick:()=>{a(!0),o(null)},style:fe.addSkillBtn,children:[t.jsx(st,{size:15})," Add skill"]})]})]}),t.jsx("div",{style:fe.filterBar,children:["ALL",..._r.map(M=>M.id)].map(M=>{const ie=_r.find(Ae=>Ae.id===M),ve=i===M;return t.jsx("button",{onClick:()=>s(M),style:{...fe.filterBtn,...ve?{background:ie?ie.color:"var(--accent-strong)",color:"#fff",borderColor:"transparent"}:{}},children:ie?`${M} · ${ie.label}`:"All"},M)})}),t.jsxs("div",{style:{...fe.layout,gridTemplateColumns:!Y&&y?"minmax(0,1fr) minmax(0,1fr)":"1fr"},children:[(!Y||!ee)&&t.jsxs("div",{style:{...fe.cardList,gridTemplateColumns:Y||y?"1fr":"repeat(3, minmax(0, 1fr))"},children:[l&&t.jsxs("div",{style:{...fe.skillCard,border:"2px dashed #3A7CA5",gridColumn:"1 / -1"},children:[t.jsx("div",{style:fe.cardTitle,children:"New skill"}),t.jsx("input",{placeholder:"Title (book / video / article name)",value:h.title,onChange:M=>f(ie=>({...ie,title:M.target.value})),onKeyDown:M=>M.key==="Enter"&&ge(),style:fe.input,autoFocus:!0}),t.jsxs("div",{style:fe.addRow,children:[t.jsx("select",{value:h.type,onChange:M=>f(ie=>({...ie,type:M.target.value})),style:fe.select,children:yc.map(M=>t.jsx("option",{value:M.id,children:M.label},M.id))}),t.jsx("select",{value:h.pillar,onChange:M=>f(ie=>({...ie,pillar:M.target.value})),style:fe.select,children:Object.keys(td).map(M=>t.jsx("option",{children:M},M))})]}),t.jsx("input",{placeholder:h.type==="book"?"Link (optional)":`${Zs(h.type).label} link (optional) — paste URL to route here`,value:h.link,onChange:M=>f(ie=>({...ie,link:M.target.value})),onKeyDown:M=>M.key==="Enter"&&ge(),style:fe.input}),t.jsxs("div",{style:fe.addRow,children:[t.jsxs("button",{onClick:ge,style:fe.saveBtn,children:[t.jsx(Oe,{size:14})," Save"]}),t.jsxs("button",{onClick:()=>a(!1),style:fe.cancelBtn,children:[t.jsx(Fe,{size:14})," Cancel"]})]})]}),me.map(M=>{const ie=sp(M.stage),ve=_r[ie],Ae=Zs(M.source_type),qe=M.stage==="W",Ye=n===M.id;return t.jsxs("div",{onClick:()=>o(Ye?null:M.id),style:{...fe.skillCard,...Ye?{borderColor:ve.color,borderWidth:2}:{},...qe?{background:"rgba(76,154,107,0.05)"}:{}},children:[t.jsxs("div",{style:fe.skillCardTop,children:[t.jsxs("div",{style:fe.skillMeta,children:[t.jsx("span",{style:{color:td[M.pillar]},children:t.jsx(Ae.icon,{size:13})}),t.jsx("span",{style:{...fe.pillarDot,background:td[M.pillar]}}),t.jsxs("span",{style:fe.srcLabel,children:[Ae.label," · ",M.pillar]})]}),t.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[qe&&t.jsx(Co,{size:14,color:"#4C9A6B"}),M.link&&t.jsx("a",{href:M.link,target:"_blank",rel:"noreferrer",onClick:Ke=>Ke.stopPropagation(),style:fe.ghostBtn,title:"Open source",children:t.jsx(dc,{size:13})}),t.jsx("button",{onClick:Ke=>{Ke.stopPropagation(),X(M.id,M.title)},style:fe.ghostBtn,children:t.jsx(Fe,{size:13})})]})]}),t.jsx("div",{style:fe.skillTitle,children:M.title}),t.jsxs("div",{style:fe.track,children:[_r.map((Ke,at)=>{var We;const Xe=at<ie,ft=at===ie,se=(We=M.completed_stages)==null?void 0:We[Ke.id];return t.jsxs("div",{style:{...fe.trackItem,...at<_r.length-1?{flex:1}:{}},children:[t.jsxs("div",{style:{...fe.trackDot,background:Xe||se||ft?Ke.color:"var(--border)",boxShadow:ft?`0 0 0 3px ${Ke.color}33`:"none"},children:[(Xe||ft&&se)&&t.jsx(Oe,{size:9,color:"#fff",strokeWidth:3}),ft&&!se&&t.jsx("span",{style:fe.trackCurrent,children:Ke.id}),!Xe&&!ft&&t.jsx(Ou,{size:8,color:"#B5B1A7"})]}),at<_r.length-1&&t.jsx("div",{style:{...fe.trackLine,background:Xe?_r[at+1].color:"var(--border)"}})]},Ke.id)}),t.jsx("span",{style:{...fe.stageTag,background:ve.soft,color:ve.color},children:ve.label})]})]},M.id)}),me.length===0&&!l&&t.jsx("div",{style:{...fe.empty,gridColumn:"1 / -1"},children:"No skills at this stage yet."})]}),ee&&t.jsxs("div",{style:fe.detail,children:[t.jsxs("div",{style:fe.detailHead,children:[Y&&t.jsx("button",{onClick:()=>{o(null),u(null)},style:fe.backBtn,title:"Back to skills",children:t.jsx(wn,{size:18})}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsxs("div",{style:fe.eyebrow,children:[Zs(ee.source_type).label," · ",ee.pillar]}),b!==null?t.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginTop:4},children:[t.jsx("input",{autoFocus:!0,value:b,onChange:M=>u(M.target.value),onKeyDown:M=>{M.key==="Enter"&&Q(),M.key==="Escape"&&u(null)},style:{...fe.input,fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:0,flex:1}}),t.jsx("button",{onClick:Q,style:{...fe.noteAddBtn,background:"#4C9A6B",width:30,height:30},children:t.jsx(Oe,{size:13})}),t.jsx("button",{onClick:()=>u(null),style:{...fe.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:30,height:30},children:t.jsx(Fe,{size:13})})]}):t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[t.jsx("div",{style:fe.detailTitle,children:ee.title}),t.jsx("button",{onClick:()=>u(ee.title),style:fe.ghostBtn,title:"Edit name",children:t.jsx(vt,{size:13})})]}),m!==null?t.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginTop:6},children:[t.jsx("input",{autoFocus:!0,value:m,placeholder:"Paste the video / article URL",onChange:M=>B(M.target.value),onKeyDown:M=>{M.key==="Enter"&&de(),M.key==="Escape"&&B(null)},style:{...fe.input,marginBottom:0,flex:1}}),t.jsx("button",{onClick:de,style:{...fe.noteAddBtn,background:"#4C9A6B",width:30,height:30},children:t.jsx(Oe,{size:13})}),t.jsx("button",{onClick:()=>B(null),style:{...fe.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:30,height:30},children:t.jsx(Fe,{size:13})})]}):t.jsx("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:6,flexWrap:"wrap"},children:ee.link?t.jsxs(t.Fragment,{children:[t.jsxs("a",{href:ee.link,target:"_blank",rel:"noreferrer",style:fe.openLinkBtn,children:[t.jsx(dc,{size:13})," Open ",Zs(ee.source_type).label.toLowerCase()]}),t.jsx("button",{onClick:()=>B(ee.link),style:fe.ghostBtn,title:"Edit link",children:t.jsx(vt,{size:12})})]}):t.jsxs("button",{onClick:()=>B(""),style:fe.addLinkBtn,children:[t.jsx(ys,{size:12})," Add link"]})})]}),t.jsx("button",{onClick:()=>{o(null),u(null)},style:fe.closeBtn,children:t.jsx(Fe,{size:16})})]}),_r.map((M,ie)=>{var Xe,ft,se;const ve=ie<=W,Ae=ie===W,qe=ie<W||((Xe=ee.completed_stages)==null?void 0:Xe[M.id]),Ye=ie>W,Ke=((ft=ee.notes)==null?void 0:ft[M.id])||[],at=((se=T[ee.id])==null?void 0:se[M.id])??"";return t.jsxs("div",{style:{...fe.stageBlock,...ve?{borderColor:M.color}:{},opacity:Ye?.45:1},children:[t.jsxs("div",{style:fe.stageBlockHead,children:[t.jsx("div",{style:{...fe.stageLetter,background:ve?M.color:"var(--border)",color:ve?"#fff":"#9A968C"},children:qe&&!Ae?t.jsx(Oe,{size:12,color:"#fff",strokeWidth:3}):Ye?t.jsx(Ou,{size:11,color:"#9A968C"}):M.id}),t.jsxs("div",{style:{flex:1},children:[t.jsx("div",{style:{...fe.stageName,color:ve?M.color:"#9A968C"},children:M.label}),ve&&t.jsx("div",{style:fe.stagePrompt,children:M.prompt})]}),qe&&!Ae&&t.jsx("span",{style:{...fe.doneBadge,color:M.color,background:M.soft},children:"Done"})]}),ve&&(()=>{var Dt,Sr;const We=M.id==="W",Ze=M.id==="D",rt=Ke.length>0&&Ke.every(k=>k.done),gt=We?rt:Ke.length>0,Rt=ee.data_groups||[],wt=Ke.filter(k=>!k.grp),yt=be(ee),bt=k=>t.jsxs("li",{style:fe.noteItem,children:[t.jsx("span",{style:{...fe.noteDot,background:M.color}}),(w==null?void 0:w.id)===k.id?t.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[t.jsx("input",{autoFocus:!0,value:w.text,onChange:le=>p($e=>({...$e,text:le.target.value})),onKeyDown:le=>{le.key==="Enter"&&O(),le.key==="Escape"&&p(null)},style:{...fe.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),t.jsx("button",{onClick:O,style:{...fe.noteAddBtn,background:M.color,width:28,height:28},children:t.jsx(Oe,{size:12})}),t.jsx("button",{onClick:()=>p(null),style:{...fe.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:t.jsx(Fe,{size:12})})]}):t.jsx("span",{style:fe.noteText,children:k.text}),(w==null?void 0:w.id)!==k.id&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>p({id:k.id,text:k.text}),style:fe.ghostBtn,children:t.jsx(vt,{size:12})}),t.jsx("button",{onClick:()=>we(k.id),style:fe.ghostBtn,children:t.jsx(Fe,{size:12})})]})]},k.id);return t.jsxs(t.Fragment,{children:[Ze?t.jsxs(t.Fragment,{children:[wt.length>0&&t.jsx("ul",{style:fe.noteList,children:wt.map(bt)}),Rt.map(k=>{const le=Ke.filter(Le=>Le.grp===k.id),$e=I[k.id]!==!1;return t.jsxs("div",{style:{...fe.groupBox,borderColor:`${M.color}55`},children:[t.jsxs("div",{style:fe.groupHead,children:[t.jsx("button",{onClick:()=>E(Le=>({...Le,[k.id]:!$e})),style:fe.groupCaret,children:$e?t.jsx(So,{size:15}):t.jsx(nn,{size:15})}),ee.source_type==="book"?t.jsx(xa,{size:13,color:M.color}):t.jsx(t0,{size:13,color:M.color}),(S==null?void 0:S.id)===k.id?t.jsx("input",{autoFocus:!0,value:S.label,onChange:Le=>j(et=>({...et,label:Le.target.value})),onKeyDown:Le=>{Le.key==="Enter"&&(U(ee,k.id,S.label.trim()||k.label),j(null)),Le.key==="Escape"&&j(null)},onBlur:()=>{U(ee,k.id,S.label.trim()||k.label),j(null)},style:{...fe.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}):t.jsx("span",{style:fe.groupTitle,onClick:()=>j({id:k.id,label:k.label}),title:"Click to rename",children:k.label}),t.jsx("span",{style:fe.groupCount,children:le.length}),t.jsx("button",{onClick:()=>ce(ee,k.id),style:fe.ghostBtn,title:`Delete ${yt.toLowerCase()}`,children:t.jsx(Fe,{size:13})})]}),$e&&t.jsxs("div",{style:fe.groupBody,children:[le.length>0&&t.jsx("ul",{style:fe.noteList,children:le.map(bt)}),t.jsxs("div",{style:fe.noteAddRow,children:[t.jsx("input",{placeholder:"Add a point…",value:z[k.id]??"",onChange:Le=>v(et=>({...et,[k.id]:Le.target.value})),onKeyDown:Le=>Le.key==="Enter"&&x(ee,k.id),style:fe.noteInput}),t.jsx("button",{onClick:()=>x(ee,k.id),style:{...fe.noteAddBtn,background:M.color},children:t.jsx(st,{size:14})})]})]})]},k.id)}),Rt.length===0&&wt.length===0&&t.jsxs("div",{style:fe.noNotes,children:["No ",yt.toLowerCase(),"s yet — add one to start logging points."]}),t.jsxs("button",{onClick:()=>K(ee),style:{...fe.addGroupBtn,color:M.color,borderColor:`${M.color}80`},children:[t.jsx(st,{size:14})," Add ",yt.toLowerCase()]})]}):t.jsxs(t.Fragment,{children:[Ke.length>0&&t.jsx("ul",{style:fe.noteList,children:Ke.map(k=>t.jsxs("li",{style:fe.noteItem,children:[We?t.jsx("button",{onClick:()=>G(k.id),style:{...fe.checkBox,...k.done?{background:M.color,borderColor:M.color}:{}},children:k.done&&t.jsx(Oe,{size:11,color:"#fff",strokeWidth:3})}):t.jsx("span",{style:{...fe.noteDot,background:M.color}}),(w==null?void 0:w.id)===k.id?t.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[t.jsx("input",{autoFocus:!0,value:w.text,onChange:le=>p($e=>({...$e,text:le.target.value})),onKeyDown:le=>{le.key==="Enter"&&O(),le.key==="Escape"&&p(null)},style:{...fe.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),t.jsx("button",{onClick:O,style:{...fe.noteAddBtn,background:M.color,width:28,height:28},children:t.jsx(Oe,{size:12})}),t.jsx("button",{onClick:()=>p(null),style:{...fe.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:t.jsx(Fe,{size:12})})]}):t.jsx("span",{style:{...fe.noteText,...We&&k.done?{textDecoration:"line-through",color:"var(--text-3)"}:{}},children:k.text}),(w==null?void 0:w.id)!==k.id&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>p({id:k.id,text:k.text}),style:fe.ghostBtn,children:t.jsx(vt,{size:12})}),t.jsx("button",{onClick:()=>we(k.id),style:fe.ghostBtn,children:t.jsx(Fe,{size:12})})]})]},k.id))}),Ke.length===0&&t.jsx("div",{style:fe.noNotes,children:We?"Add the steps to implement this — check each off as you do it.":`No notes yet — ${M.hint}`}),t.jsxs("div",{style:fe.noteAddRow,children:[t.jsx("input",{placeholder:We?"Add a step to implement…":`Add a ${M.label} note…`,value:at,onChange:k=>R(le=>({...le,[ee.id]:{...le[ee.id],[M.id]:k.target.value}})),onKeyDown:k=>k.key==="Enter"&&he(ee.id,M.id),style:fe.noteInput}),t.jsx("button",{onClick:()=>he(ee.id,M.id),style:{...fe.noteAddBtn,background:M.color},children:t.jsx(st,{size:14})})]})]}),Ae&&!((Dt=ee.completed_stages)!=null&&Dt[M.id])&&t.jsxs(t.Fragment,{children:[We&&Ke.length>0&&!rt&&t.jsxs("div",{style:fe.checklistHint,children:[Ke.filter(k=>k.done).length,"/",Ke.length," done — check all steps to complete Wisdom"]}),t.jsxs("button",{onClick:()=>N(ee.id,M.id),disabled:!gt,style:{...fe.advanceBtn,background:gt?M.color:"#C3BFB5",marginTop:10,cursor:gt?"pointer":"not-allowed"},children:[t.jsx(Oe,{size:14}),We?"Mark Wisdom complete":`Complete ${M.label} → ${(Sr=_r[ie+1])==null?void 0:Sr.label}`]})]})]})})()]},M.id)}),ee.stage==="W"&&((te=ee.completed_stages)==null?void 0:te.W)&&t.jsxs("div",{style:fe.wisdomDone,children:[t.jsx(Yr,{size:16,color:"#4C9A6B"})," Wisdom achieved — implemented in your life"]})]})]}),t.jsx(pr,{toasts:oe,onUndo:ae,onDismiss:P})]})}const fe={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box",position:"relative"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},wisdomBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addSkillBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},filterBar:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16},filterBtn:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},layout:{display:"grid",gap:12,alignItems:"start"},cardList:{display:"grid",gap:10,alignContent:"start"},skillCard:{background:"var(--surface)",borderRadius:12,padding:"16px",border:"1.5px solid var(--border)",cursor:"pointer",boxShadow:"0 1px 2px rgba(0,0,0,0.04)",minWidth:0,overflow:"hidden",boxSizing:"border-box"},skillCardTop:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8,marginBottom:6},skillMeta:{display:"flex",alignItems:"center",gap:6,minWidth:0},pillarDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},srcLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},skillTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",marginBottom:12,lineHeight:1.3,wordBreak:"break-word"},cardTitle:{fontSize:13,fontWeight:700,marginBottom:10},track:{display:"flex",alignItems:"center",minWidth:0},trackItem:{display:"flex",alignItems:"center",minWidth:0},trackDot:{width:22,height:22,borderRadius:"50%",display:"grid",placeItems:"center",flexShrink:0},trackCurrent:{fontSize:9,fontWeight:800,color:"#fff"},trackLine:{flex:1,minWidth:8,height:3,borderRadius:2,margin:"0 2px"},stageTag:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,marginLeft:8,flexShrink:0,whiteSpace:"nowrap"},detail:{background:"var(--surface)",borderRadius:14,padding:"18px 16px",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",border:"1.5px solid var(--border)",alignSelf:"start"},detailHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16},detailTitle:{fontSize:18,fontWeight:700,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},backBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginRight:4},groupBox:{border:"1.5px solid var(--border)",borderRadius:9,marginBottom:8,overflow:"hidden",background:"var(--bg)"},groupHead:{display:"flex",alignItems:"center",gap:7,padding:"8px 10px"},groupCaret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},groupTitle:{flex:1,minWidth:0,fontSize:13,fontWeight:700,color:"var(--text)",cursor:"text",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},groupCount:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 7px",flexShrink:0},groupBody:{padding:"0 10px 10px 10px"},addGroupBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1.5px dashed",background:"none",padding:"9px 12px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:2},stageBlock:{border:"1.5px solid var(--border)",borderRadius:10,padding:"12px 13px",marginBottom:10},stageBlockHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:8},stageLetter:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",fontSize:13,fontWeight:800,flexShrink:0},stageName:{fontSize:13,fontWeight:700},stagePrompt:{fontSize:11.5,color:"var(--text-2)",marginTop:2,lineHeight:1.4},doneBadge:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10,marginLeft:"auto",flexShrink:0},noteList:{margin:"0 0 8px 0",padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6},noteItem:{display:"flex",alignItems:"flex-start",gap:8,fontSize:13,lineHeight:1.4},noteDot:{width:6,height:6,borderRadius:"50%",flexShrink:0,marginTop:5},checkBox:{width:18,height:18,borderRadius:5,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginTop:1,padding:0},checklistHint:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,marginTop:10,textAlign:"center"},noteText:{flex:1,color:"var(--text)"},noNotes:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",marginBottom:8},noteAddRow:{display:"flex",gap:6},noteInput:{flex:1,border:"1px solid var(--border)",borderRadius:7,padding:"7px 10px",fontSize:13,fontFamily:"inherit",outline:"none"},noteAddBtn:{width:32,height:32,border:"none",borderRadius:7,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},advanceBtn:{display:"flex",alignItems:"center",gap:8,border:"none",color:"#fff",padding:"10px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},wisdomDone:{display:"flex",alignItems:"center",gap:8,justifyContent:"center",fontSize:13.5,fontWeight:700,color:"#4C9A6B",padding:12,background:"rgba(76,154,107,0.08)",borderRadius:10,marginTop:4},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},openLinkBtn:{display:"inline-flex",alignItems:"center",gap:5,textDecoration:"none",border:"1px solid #3A7CA5",background:"rgba(58,124,165,0.10)",color:"#3A7CA5",fontSize:12,fontWeight:700,padding:"5px 11px",borderRadius:8,fontFamily:"inherit",cursor:"pointer"},addLinkBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"1px dashed var(--border)",background:"none",color:"var(--text-3)",fontSize:12,fontWeight:600,padding:"5px 11px",borderRadius:8,fontFamily:"inherit",cursor:"pointer"},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box",marginBottom:8},select:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:12.5,fontFamily:"inherit",flex:1},addRow:{display:"flex",gap:8,marginBottom:8},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{fontSize:13,color:"var(--text-3)",padding:"32px 12px",textAlign:"center"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.55)",zIndex:50,display:"grid",placeItems:"center"},celebBox:{background:"var(--surface)",borderRadius:20,padding:"40px 32px",textAlign:"center",maxWidth:320,boxShadow:"0 8px 40px rgba(0,0,0,0.18)"},celebEmoji:{fontSize:52,marginBottom:12},celebTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:8},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:"#4C9A6B",color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Js=[{id:"aarti",title:"Aarti",html:`<h1>॥ गणपतीची आरती ॥</h1><br/>
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
      </div>`}];function bv(){const[e,r]=c.useState(()=>window.innerWidth<720);return c.useEffect(()=>{const n=()=>r(window.innerWidth<720);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}const hv=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>1400?(a=a*1400/l,l=1400):a>1400&&(l=l*1400/a,a=1400);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),r(d.toDataURL("image/jpeg",.85))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)});function lp({base:e,count:r,images:n}){const o=n&&n.length?n:null,i=o?o.length:r,[s,l]=c.useState(0);if(!i)return null;const a=s%i,d=o?o[a]:`${e}${a+1}.jpg`;return t.jsxs("div",{style:{maxWidth:560,margin:"0 auto"},children:[t.jsx("div",{style:Ge.carouselFrame,children:t.jsx("img",{src:d,alt:`Page ${a+1}`,style:Ge.carouselImg})}),t.jsxs("div",{style:Ge.carouselNav,children:[t.jsxs("button",{onClick:()=>l(g=>(g-1+i)%i),style:Ge.carouselBtn,children:[t.jsx(wn,{size:16})," Prev"]}),t.jsxs("span",{style:Ge.carouselCount,children:[o?"":"Adhyay ",a+1," / ",i]}),t.jsxs("button",{onClick:()=>l(g=>(g+1)%i),style:Ge.carouselBtn,children:["Next ",t.jsx(nn,{size:16})]})]})]})}function mv(){const e=bv(),[r,n]=c.useState(!1),[o,i]=c.useState([]),[s,l]=c.useState("dss"),[a,d]=c.useState(!1),[g,h]=c.useState({title:"",type:"text",content:"",images:[]}),[f,m]=c.useState([]),[B,T]=c.useState(null),[R,w]=c.useState(!1),p=c.useRef(!1),b=c.useCallback(async()=>{try{const[U,ce,x]=await Promise.all([F.getDecks(),F.getSetting("spiritual_order"),F.getSetting("spiritual_default")]);if(i(U),Array.isArray(ce==null?void 0:ce.value)&&m(ce.value),x!=null&&x.value&&T(x.value),!p.current){p.current=!0;const Q=new Set([...Js.map(O=>O.id),...U.map(O=>`deck-${O.id}`)]);x!=null&&x.value&&Q.has(x.value)&&l(x.value)}}catch{}},[]);c.useEffect(()=>{b()},[b]);const u=[...Js.map(U=>({id:U.id,title:U.title})),...o.map(U=>({id:`deck-${U.id}`,title:U.title}))],z=(()=>{if(!f.length)return u;const U=new Map(u.map(x=>[x.id,x])),ce=[];return f.forEach(x=>{U.has(x)&&(ce.push(U.get(x)),U.delete(x))}),U.forEach(x=>ce.push(x)),ce})(),v=(U,ce)=>{const x=z.map(O=>O.id),Q=U+ce;Q<0||Q>=x.length||([x[U],x[Q]]=[x[Q],x[U]],m(x),F.setSetting("spiritual_order",x).catch(()=>{}))},I=U=>{T(U),F.setSetting("spiritual_default",U).catch(()=>{})},E=s.startsWith("deck-")?Number(s.slice(5)):null,S=E!=null?o.find(U=>U.id===E):null,j=S?null:Js.find(U=>U.id===s)||(E==null?Js[0]:null),Y=a?"New deck":S?S.title:(j==null?void 0:j.title)||"",re=U=>{l(U),d(!1),e&&n(!1)},ee=()=>{d(!0),h({title:"",type:"text",content:"",images:[]}),e&&n(!1)},W=async U=>{const ce=Array.from(U.target.files||[]),x=[];for(const Q of ce)try{x.push(await hv(Q))}catch{}h(Q=>({...Q,images:[...Q.images,...x]})),U.target.value=""},he=U=>h(ce=>({...ce,images:ce.images.filter((x,Q)=>Q!==U)})),we=g.title.trim()&&(g.type==="text"?g.content.trim():g.images.length>0),be=async()=>{if(!we)return;const U=await F.createDeck({title:g.title.trim(),type:g.type,content:g.type==="text"?g.content:"",images:g.type==="images"?g.images:[]});d(!1),await b(),l(`deck-${U.id}`)},ze=async U=>{await F.deleteDeck(U),s===`deck-${U}`&&l("dss"),b()},K={...Ge.sidebar,...e?Ge.sidebarOverlay:{},...e&&!r?Ge.sidebarHidden:{}};return t.jsxs("div",{style:Ge.shell,children:[t.jsx("style",{children:fv}),e&&r&&t.jsx("div",{style:Ge.backdrop,onClick:()=>n(!1)}),t.jsxs("aside",{style:K,children:[t.jsxs("div",{style:Ge.sideHead,children:[t.jsx("div",{style:Ge.brand,children:"Anvil · Spiritual"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:2},children:[t.jsx("button",{onClick:()=>w(U=>!U),style:Ge.iconBtn,title:"Rearrange & set default",children:R?t.jsx(Oe,{size:16}):t.jsx(vt,{size:15})}),e&&t.jsx("button",{onClick:()=>n(!1),style:Ge.iconBtn,children:t.jsx(Fe,{size:17})})]})]}),R&&t.jsxs("div",{style:Ge.editHint,children:["Arrows reorder · ",t.jsx(xs,{size:11,style:{verticalAlign:"-1px"}})," sets what opens by default"]}),t.jsxs("div",{style:Ge.sideScroll,children:[z.map((U,ce)=>{const x=U.id===s&&!a,Q=B===U.id;return t.jsxs("div",{style:Ge.sideRow,children:[t.jsxs("button",{onClick:()=>re(U.id),style:{...Ge.sideItem,flex:1,...x?Ge.sideItemOn:{}},children:[U.title,Q&&t.jsx("span",{style:Ge.defStar,title:"Opens by default",children:" ★"})]}),R&&t.jsxs("div",{style:Ge.editControls,children:[t.jsx("button",{onClick:()=>I(U.id),title:"Set as default",style:{...Ge.miniBtn,...Q?{color:"#8268B0"}:{}},children:t.jsx(xs,{size:13})}),t.jsx("button",{onClick:()=>v(ce,-1),disabled:ce===0,style:{...Ge.miniBtn,opacity:ce===0?.3:1},children:t.jsx(ya,{size:13})}),t.jsx("button",{onClick:()=>v(ce,1),disabled:ce===z.length-1,style:{...Ge.miniBtn,opacity:ce===z.length-1?.3:1},children:t.jsx(So,{size:13})})]})]},U.id)}),t.jsxs("button",{onClick:ee,style:{...Ge.newDeckBtn,...a?Ge.sideItemOn:{}},children:[t.jsx(st,{size:14})," New deck"]})]})]}),t.jsxs("main",{style:Ge.main,children:[e&&t.jsxs("button",{onClick:()=>n(!0),style:Ge.hamburger,children:[t.jsx(Sg,{size:17}),t.jsx("span",{style:Ge.hamburgerLabel,children:Y})]}),a?t.jsxs("div",{style:Ge.contentWrap,children:[t.jsx("div",{style:Ge.formTitle,children:"Create a deck"}),t.jsx("input",{placeholder:"Deck title (e.g. Vishnu Sahasranamam)",value:g.title,onChange:U=>h({...g,title:U.target.value}),style:Ge.input}),t.jsxs("div",{style:Ge.typeRow,children:[t.jsxs("button",{onClick:()=>h({...g,type:"text"}),style:{...Ge.typeBtn,...g.type==="text"?Ge.typeOn:{}},children:[t.jsx(kg,{size:15})," Text"]}),t.jsxs("button",{onClick:()=>h({...g,type:"images"}),style:{...Ge.typeBtn,...g.type==="images"?Ge.typeOn:{}},children:[t.jsx(qy,{size:15})," Images"]})]}),g.type==="text"?t.jsx("textarea",{placeholder:"Paste or write the text (verses, chant, reflection)…",value:g.content,onChange:U=>h({...g,content:U.target.value}),style:Ge.textarea}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:Ge.imgGrid,children:[g.images.map((U,ce)=>t.jsxs("div",{style:Ge.imgThumbWrap,children:[t.jsx("img",{src:U,alt:"",style:Ge.imgThumb}),t.jsx("button",{onClick:()=>he(ce),style:Ge.imgDel,children:t.jsx(Fe,{size:12})})]},ce)),t.jsxs("label",{style:Ge.imgAdd,children:[t.jsx(va,{size:20}),t.jsx("span",{style:{fontSize:11},children:"Add images"}),t.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:W,style:{display:"none"}})]})]}),t.jsx("div",{style:Ge.hint,children:"Images show as a swipeable carousel, in the order added."})]}),t.jsxs("div",{style:Ge.formActions,children:[t.jsxs("button",{onClick:()=>d(!1),style:Ge.cancelBtn,children:[t.jsx(Fe,{size:14})," Cancel"]}),t.jsxs("button",{onClick:be,disabled:!we,style:{...Ge.saveBtn,...we?{}:Ge.saveDisabled},children:[t.jsx(Oe,{size:15})," Create deck"]})]})]}):S?t.jsxs("div",{style:Ge.contentWrap,children:[t.jsxs("div",{style:Ge.deckHead,children:[t.jsx("h2",{style:Ge.deckTitle,children:S.title}),t.jsx("button",{onClick:()=>ze(S.id),style:Ge.deckDel,title:"Delete deck",children:t.jsx(vs,{size:15})})]}),S.type==="images"?t.jsx(lp,{images:S.images}):t.jsx("div",{style:Ge.deckText,children:S.content})]}):t.jsxs("div",{style:Ge.contentWrap,children:[(j==null?void 0:j.youtube)&&t.jsx("div",{style:Ge.videoFrame,children:t.jsx("iframe",{src:`https://www.youtube.com/embed/${j.youtube}`,title:j.title,style:Ge.video,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},j.youtube)}),j!=null&&j.carousel?t.jsx(lp,{base:j.imageBase,count:j.carousel}):t.jsx("div",{className:"spiritual-content",dangerouslySetInnerHTML:{__html:(j==null?void 0:j.html)||""}})]})]})]})}const fv=`
.spiritual-content { font-family: 'Inter', system-ui, sans-serif; color: var(--text); line-height: 1.9; font-size: 16px; text-align: center; }
.spiritual-content h1 { font-family: 'Fraunces', Georgia, serif; font-size: 24px; color: #8268B0; margin: 8px 0 18px; letter-spacing: -0.01em; }
.spiritual-content h2 { font-family: 'Fraunces', Georgia, serif; font-size: 18px; color: #7A5EA8; margin: 20px 0 8px; }
.spiritual-content h3 { font-size: 15px; color: var(--text-3); text-transform: uppercase; letter-spacing: 0.06em; margin: 18px 0 6px; }
.spiritual-content b { color: #8268B0; }
.spiritual-content div { text-align: center; }
`,Ge={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:240,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.15)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.35)",zIndex:20},sideHead:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 14px 12px"},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700},sideScroll:{flex:1,overflowY:"auto",padding:"0 8px 16px"},sideItem:{display:"block",width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text-2)",textAlign:"left",marginBottom:2},sideItemOn:{background:"rgba(130,104,176,0.12)",color:"#8268B0",fontWeight:700},sideRow:{display:"flex",alignItems:"center",gap:2},editControls:{display:"flex",alignItems:"center",gap:1,flexShrink:0},miniBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:5},defStar:{color:"#C9A227",fontWeight:700},editHint:{fontSize:10.5,color:"var(--text-3)",padding:"0 14px 8px",lineHeight:1.4},newDeckBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",padding:"9px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,color:"var(--text-2)",marginTop:6},main:{flex:1,padding:"26px 22px",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:220},contentWrap:{background:"var(--surface)",borderRadius:14,padding:"26px 28px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",maxWidth:760,margin:"0 auto"},videoFrame:{position:"relative",width:"100%",maxWidth:600,margin:"0 auto 22px",aspectRatio:"16 / 9",borderRadius:12,overflow:"hidden",background:"#000"},video:{position:"absolute",inset:0,width:"100%",height:"100%",border:"none"},carouselFrame:{background:"var(--surface-2)",borderRadius:12,padding:8,border:"1px solid var(--border)"},carouselImg:{width:"100%",borderRadius:8,display:"block"},carouselNav:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:14},carouselBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},carouselCount:{fontSize:13,fontWeight:700,color:"#8268B0",fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"none",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,color:"var(--text-2)"},deckHead:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,marginBottom:16,borderBottom:"1px solid var(--border)",paddingBottom:12},deckTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",margin:0,color:"#8268B0"},deckDel:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",cursor:"pointer",display:"grid",placeItems:"center",padding:7,borderRadius:8,flexShrink:0},deckText:{fontSize:16,lineHeight:1.9,whiteSpace:"pre-wrap",color:"var(--text)",textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},formTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},typeRow:{display:"flex",gap:8,marginTop:12},typeBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},typeOn:{background:"#8268B0",color:"#fff",borderColor:"#8268B0"},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:200,resize:"vertical",lineHeight:1.7,marginTop:12},imgGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(90px, 1fr))",gap:8,marginTop:12},imgThumbWrap:{position:"relative",aspectRatio:"1",borderRadius:8,overflow:"hidden",border:"1px solid var(--border)"},imgThumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},imgDel:{position:"absolute",top:3,right:3,border:"none",background:"rgba(0,0,0,0.6)",color:"#fff",borderRadius:"50%",width:18,height:18,cursor:"pointer",display:"grid",placeItems:"center",padding:0},imgAdd:{aspectRatio:"1",border:"1px dashed var(--border)",borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4,cursor:"pointer",color:"var(--text-3)"},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:8},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"#8268B0",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"}},ln={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},ap=Object.keys(ln),xv=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],yv=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],vv=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},jv=(e,r)=>`${yv[r-1]} ${e}`,kv=(e,r)=>{const n=new Date(e,r,0).getDate();return Array.from({length:n},(o,i)=>`${e}-${String(r).padStart(2,"0")}-${String(i+1).padStart(2,"0")}`)},wv=(e,r)=>{const n=new Date(e,r-1,1).getDay();return n===0?6:n-1};function Sv(){const e=vv(),[r,n]=c.useState(new Date().getFullYear()),[o,i]=c.useState(new Date().getMonth()+1),[s,l]=c.useState([]),[a,d]=c.useState([]),[g,h]=c.useState({}),[f,m]=c.useState(null),[B,T]=c.useState(!1),[R,w]=c.useState(!1),[p,b]=c.useState({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:e}),[u,z]=c.useState(null),v=c.useCallback(async()=>{const[O,G,N]=await Promise.all([F.getTopics(),F.getDueToday(),F.getCalendar(r,o)]);l(O),d(G),h(N)},[r,o]);c.useEffect(()=>{v()},[v]);const I=async O=>{await F.toggleReviewDone(O),v()},E=async()=>{const O=p.intervals.split(",").map(G=>parseInt(G.trim(),10)).filter(G=>!isNaN(G));!p.topic.trim()||O.length===0||(await F.createTopic({pillar:p.pillar,topic:p.topic.trim(),intervals:O,learned_date:p.learned_date||e}),b({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:e}),w(!1),v())},{deleteItem:S,toasts:j,handleUndo:Y,handleDismiss:re}=ur(F.deleteTopic,F.restoreTopic,v),ee=(O,G)=>S(O,G),W=O=>z({id:O.id,topic:O.topic,pillar:O.pillar,intervals:(O.intervals||[]).join(", "),learned_date:O.learned_date}),he=async()=>{if(!u)return;const O=u.intervals.split(",").map(G=>parseInt(G.trim(),10)).filter(G=>!isNaN(G)&&G>=0);!u.topic.trim()||O.length===0||(await F.updateTopic(u.id,{topic:u.topic.trim(),pillar:u.pillar,learned_date:u.learned_date,intervals:O}),z(null),v())},we=()=>{o===1?(n(O=>O-1),i(12)):i(O=>O-1),m(null)},be=()=>{o===12?(n(O=>O+1),i(1)):i(O=>O+1),m(null)},ze=s.filter(O=>!O.cemented),K=s.filter(O=>O.cemented),U=kv(r,o),ce=wv(r,o),x=c.useMemo(()=>{const O={};return s.forEach(G=>G.reviews.forEach(N=>{N.done||(O[N.due_date]=O[N.due_date]||[]).push({topic:G.topic,pillar:G.pillar,stage:N.stage})})),O},[s]),Q=f?s.flatMap(O=>O.reviews.filter(G=>G.due_date===f).map(G=>({...G,topic:O.topic,pillar:O.pillar,total:O.reviews.length}))):[];return t.jsxs("div",{style:De.page,children:[t.jsxs("div",{style:De.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:De.eyebrow,children:"Anvil · Revision"}),t.jsx("h1",{style:De.h1,children:"Spaced Repetition"})]}),t.jsxs("button",{onClick:()=>w(!0),style:De.addBtn,children:[t.jsx(st,{size:15})," Add topic"]})]}),R&&t.jsxs("div",{style:De.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"What did you learn?",value:p.topic,onChange:O=>b(G=>({...G,topic:O.target.value})),onKeyDown:O=>O.key==="Enter"&&E(),style:De.input}),t.jsxs("div",{style:De.addRow,children:[t.jsx("select",{value:p.pillar,onChange:O=>b(G=>({...G,pillar:O.target.value})),style:De.select,children:ap.map(O=>t.jsx("option",{children:O},O))}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[t.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),t.jsx("input",{type:"date",value:p.learned_date,onChange:O=>b(G=>({...G,learned_date:O.target.value})),style:{...De.select,fontSize:13}})]}),t.jsx("div",{style:{flex:1,minWidth:0},children:t.jsx("input",{value:p.intervals,onChange:O=>b(G=>({...G,intervals:O.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:De.input})})]}),t.jsxs("div",{style:De.addRow,children:[t.jsxs("button",{onClick:E,style:De.saveBtn,children:[t.jsx(Oe,{size:14})," Save"]}),t.jsxs("button",{onClick:()=>w(!1),style:De.cancelBtn,children:[t.jsx(Fe,{size:14})," Cancel"]})]})]}),a.length>0&&t.jsxs("div",{style:De.section,children:[t.jsxs("div",{style:De.sectionTitle,children:[t.jsx(xm,{size:15,color:"#C2536B"}),"Due Today",t.jsx("span",{style:De.badge,children:a.length})]}),a.map(O=>{var N,ge;const G=((N=ln[O.pillar])==null?void 0:N.dot)||"#9A968C";return t.jsxs("div",{style:{...De.reviewCard,borderLeft:`3px solid ${G}`,...O.is_missed?{opacity:.85}:{}},children:[t.jsx("button",{onClick:()=>I(O.review_id),style:{...De.checkbox,...O.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:O.done&&t.jsx(Oe,{size:12,color:"#fff",strokeWidth:3})}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:De.reviewTopic,children:O.topic}),t.jsxs("div",{style:De.reviewMeta,children:[t.jsxs("span",{style:{...De.stageTag,background:((ge=ln[O.pillar])==null?void 0:ge.soft)||"rgba(0,0,0,0.05)",color:G},children:["Review ",O.stage,"/",O.total_stages]}),O.is_missed&&t.jsxs("span",{style:De.missedTag,children:["missed · ",O.due_date]})]})]})]},O.review_id)})]}),t.jsxs("div",{style:De.section,children:[t.jsxs("div",{style:De.sectionTitle,children:["Active Topics ",t.jsx("span",{style:De.badge,children:ze.length})]}),ze.length===0&&t.jsx("div",{style:De.empty,children:"No active topics. Add something you learned today."}),ze.map(O=>{var de,Me;const G=((de=ln[O.pillar])==null?void 0:de.dot)||"#9A968C",N=((Me=ln[O.pillar])==null?void 0:Me.soft)||"rgba(0,0,0,0.05)",ge=O.reviews.filter(oe=>oe.done).length;return(u==null?void 0:u.id)===O.id?t.jsxs("div",{style:De.addBox,children:[t.jsx("input",{autoFocus:!0,value:u.topic,onChange:oe=>z(ae=>({...ae,topic:oe.target.value})),onKeyDown:oe=>oe.key==="Enter"&&he(),placeholder:"Topic",style:De.input}),t.jsxs("div",{style:De.addRow,children:[t.jsx("select",{value:u.pillar,onChange:oe=>z(ae=>({...ae,pillar:oe.target.value})),style:De.select,children:ap.map(oe=>t.jsx("option",{children:oe},oe))}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[t.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),t.jsx("input",{type:"date",value:u.learned_date,onChange:oe=>z(ae=>({...ae,learned_date:oe.target.value})),style:{...De.select,fontSize:13}})]}),t.jsx("div",{style:{flex:1,minWidth:0},children:t.jsx("input",{value:u.intervals,onChange:oe=>z(ae=>({...ae,intervals:oe.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:De.input})})]}),t.jsx("div",{style:De.editHint,children:"Changing the date or intervals reschedules the reviews (completed steps are kept where they still apply)."}),t.jsxs("div",{style:De.addRow,children:[t.jsxs("button",{onClick:he,style:De.saveBtn,children:[t.jsx(Oe,{size:14})," Save plan"]}),t.jsxs("button",{onClick:()=>z(null),style:De.cancelBtn,children:[t.jsx(Fe,{size:14})," Cancel"]})]})]},O.id):t.jsxs("div",{style:De.topicCard,children:[t.jsxs("div",{style:De.topicHead,children:[t.jsx("span",{style:{...De.dot,background:G}}),t.jsx("span",{style:De.topicName,children:O.topic}),t.jsx("span",{style:De.topicPillar,children:O.pillar}),t.jsxs("span",{style:De.topicProgress,children:[ge,"/",O.reviews.length," done"]}),t.jsx("button",{onClick:()=>W(O),style:De.ghostBtn,title:"Edit plan",children:t.jsx(vt,{size:12})}),t.jsx("button",{onClick:()=>ee(O.id,O.topic),style:De.ghostBtn,title:"Delete",children:t.jsx(Fe,{size:13})})]}),t.jsxs("div",{style:De.reviewDots,children:[O.reviews.map(oe=>{oe.due_date<e;const ae=oe.due_date===e;return t.jsx("button",{onClick:()=>I(oe.id),title:`Review ${oe.stage} · ${oe.due_date}${oe.done?" · Done":""}`,style:{...De.reviewDot,background:oe.done?G:ae?N:"var(--hover)",border:`2px solid ${oe.done||ae?G:"var(--border)"}`,color:oe.done?"#fff":G},children:oe.stage},oe.id)}),t.jsxs("span",{style:De.learnedDate,children:["Learned ",O.learned_date]})]})]},O.id)})]}),K.length>0&&t.jsxs("div",{style:De.section,children:[t.jsxs("button",{onClick:()=>T(O=>!O),style:De.cementedToggle,children:[B?t.jsx(So,{size:15}):t.jsx(nn,{size:15}),t.jsx(Yr,{size:14,color:"#C9A227"}),"Cemented",t.jsx("span",{style:{...De.badge,background:"rgba(201,162,39,0.12)",color:"#8A6E1A"},children:K.length})]}),B&&K.map(O=>{var N;const G=((N=ln[O.pillar])==null?void 0:N.dot)||"#9A968C";return t.jsx("div",{style:{...De.topicCard,opacity:.75},children:t.jsxs("div",{style:De.topicHead,children:[t.jsx("span",{style:{...De.dot,background:G}}),t.jsx("span",{style:De.topicName,children:O.topic}),t.jsx("span",{style:De.topicPillar,children:O.pillar}),t.jsx(Yr,{size:13,color:"#C9A227",style:{marginLeft:"auto"}})]})},O.id)})]}),t.jsxs("div",{style:De.calCard,children:[t.jsxs("div",{style:De.calHead,children:[t.jsx("button",{onClick:we,style:De.calNav,children:"‹"}),t.jsxs("div",{style:De.calTitle,children:[jv(r,o)," · Review Calendar"]}),t.jsx("button",{onClick:be,style:De.calNav,children:"›"})]}),t.jsx("div",{style:De.calDow,children:xv.map(O=>t.jsx("div",{style:De.calDowCell,children:O},O))}),t.jsxs("div",{style:De.calGrid,children:[Array.from({length:ce}).map((O,G)=>t.jsx("div",{},`p${G}`)),U.map((O,G)=>{const N=x[O]||[],ge=O===e,de=O===f,Me=O<e,oe=de?"#fff":ge?"var(--text)":Me?"var(--text-2)":"var(--text-3)";return t.jsxs("button",{onClick:()=>m(de?null:O),style:{...De.calDay,background:de?"var(--accent-strong)":ge?"var(--hover)":"var(--surface)",borderColor:ge||de?"var(--accent-strong)":"var(--border)"},children:[t.jsx("span",{style:{...De.calDayNum,color:oe,fontWeight:ge||de?700:600},children:G+1}),N.slice(0,2).map((ae,P)=>{var X;return t.jsxs("span",{title:ae.topic,style:{...De.calItem,color:de?"#fff":((X=ln[ae.pillar])==null?void 0:X.dot)||"var(--text-2)"},children:[P+1,". ",ae.topic]},P)}),N.length>2&&t.jsxs("span",{style:{...De.calMore,color:de?"#fff":"var(--text-3)"},children:["+",N.length-2," more"]})]},O)})]}),f&&t.jsxs("div",{style:De.dayDetail,children:[t.jsxs("div",{style:De.dayDetailTitle,children:["Reviews for ",f]}),Q.length===0?t.jsx("div",{style:De.empty,children:"No reviews scheduled for this day."}):Q.map((O,G)=>{var ge,de;const N=((ge=ln[O.pillar])==null?void 0:ge.dot)||"#9A968C";return t.jsxs("div",{style:{...De.reviewCard,borderLeft:`3px solid ${N}`},children:[t.jsx("button",{onClick:()=>I(O.id),style:{...De.checkbox,...O.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:O.done&&t.jsx(Oe,{size:12,color:"#fff",strokeWidth:3})}),t.jsxs("div",{children:[t.jsxs("div",{style:De.reviewTopic,children:[G+1,". ",O.topic]}),t.jsxs("span",{style:{...De.stageTag,background:((de=ln[O.pillar])==null?void 0:de.soft)||"rgba(0,0,0,0.05)",color:N},children:["Review ",O.stage,"/",O.total]})]})]},O.id)})]})]}),t.jsx(pr,{toasts:j,onUndo:Y,onDismiss:re})]})}const De={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},addBox:{background:"var(--surface)",borderRadius:12,padding:16,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},addRow:{display:"flex",gap:8,alignItems:"center"},editHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",minWidth:0},select:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 10px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},section:{marginBottom:20},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},reviewCard:{display:"flex",alignItems:"center",gap:12,background:"var(--surface)",borderRadius:10,padding:"12px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},checkbox:{width:22,height:22,borderRadius:6,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,padding:0},reviewTopic:{fontSize:13.5,fontWeight:600,marginBottom:4},reviewMeta:{display:"flex",alignItems:"center",gap:8},stageTag:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10},missedTag:{fontSize:11,color:"#C2536B",fontWeight:600},topicCard:{background:"var(--surface)",borderRadius:12,padding:"13px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},topicHead:{display:"flex",alignItems:"center",gap:8,marginBottom:10},dot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},topicName:{fontSize:14,fontWeight:600,flex:1},topicPillar:{fontSize:11,color:"var(--text-3)",fontWeight:500},topicProgress:{fontSize:11,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:10},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},reviewDots:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},reviewDot:{width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",fontSize:11,fontWeight:700,padding:0},learnedDate:{fontSize:11,color:"var(--text-3)",marginLeft:"auto"},cementedToggle:{display:"flex",alignItems:"center",gap:8,border:"none",background:"none",cursor:"pointer",fontSize:13,fontWeight:700,color:"var(--text-2)",padding:"4px 0",fontFamily:"inherit",marginBottom:8},empty:{fontSize:13,color:"var(--text-3)",padding:"16px 0",textAlign:"center"},calCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{border:"none",background:"none",fontSize:20,cursor:"pointer",color:"var(--text-2)",padding:"0 6px",lineHeight:1},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4},calDay:{minHeight:62,border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,cursor:"pointer",fontFamily:"inherit",display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"flex-start",gap:1,position:"relative",padding:"3px 4px",overflow:"hidden",textAlign:"left"},calDayNum:{fontSize:11,lineHeight:1.1,marginBottom:1},calItem:{fontSize:8.5,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",lineHeight:1.3,textAlign:"left"},calMore:{fontSize:8,fontWeight:700,opacity:.85,lineHeight:1.2},dayDetail:{marginTop:16,paddingTop:16,borderTop:"1px solid var(--border)"},dayDetailTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10}},el=[{id:1,title:"Regular Habits",cards:[{id:1,text:"1. I always do everything I need to do, when I need to do it. "},{id:2,text:"2. I never argue or let my emotions work against me. "},{id:3,text:"3. I have a good memory. I easily and automatically remember any name or anything that is important to me. "},{id:4,text:"4. I eat only what I should. "},{id:5,text:"5. I am a good listener. I hear everything that is said. I am attentive, interested, and aware of everything that is going on around me. "},{id:6,text:"6. I have the courage to state my opinions. I take responsibility for myself and everything I say and do."},{id:7,text:"7. I never spend more than I earn. I am financially responsible, both for my present and for my future."},{id:8,text:"8. I set goals and I follow them. I set my sights, take the appropriate action, and achieve my goals."},{id:9,text:"9. I spend time with my family and my loved ones. I enjoy sharing their lives with mine and my life with theirs."}]},{id:2,title:"Motivational",cards:[{id:1,text:"1. I can do anything I believe I can do. I’ve got it and every day I get more of it. I have talent, skills, and ability"},{id:2,text:"2. I set goals and I reach them. I know what I want out of life. I go after it and I get it. "},{id:3,text:"3. People like me, and I feel good about myself. I have a sense of pride in whoa am and I believe in myself. Nothing seems to stop me. I have a lot of determination. "},{id:4,text:"4. I turn problems into advantages. I find possibilities in things that other people never give a chance."},{id:5,text:"5. I have a lot of energy––I am very alive. I enjoy life and I can tell it and so can others"},{id:6,text:"6. I keep myself up, looking ahead, and liking it. I know that I can accomplish anything I choose, and I refuse to let anything negative hold me back or stand in my way. I am not afraid of anything or anyone. I have strength, power, conviction, and confidence. "},{id:7,text:"7. I like challenges and I meet them head on, face to face––today especially. I am on top of the world and I’m going for it. "},{id:8,text:"8. I have a clear picture in my mind of what I want. I can see it in front of me. "},{id:9,text:"9. I know what I want and I know how to get it. I know that it’s all up to me and I know I can do it. Roadblocks don’t bother me. They just mean that I am alive and running, and I’m not going to stand still for anything. "},{id:10,text:"10. I trust myself I’ve got what it takes––plenty of it––and I know how to use it. "},{id:11,text:"11. Today, more than ever. Today I am unstoppable. I’ve got myself together and I’m getting more together every day. And today––look out world, here I come. "},{id:12,text:"12. Limitations? I don’t even recognize them as limitations. There is no challenge I can’t conquer; there is no wall I can’t climb over. "},{id:13,text:"13. There is no problem I can’t defeat or turn around and make it work for me. I stand tall. I am honest and sincere. I like to deal with people and they like me. "},{id:14,text:"14. I think well; I think clearly. I am organized; I am in control of myself, and everything about me. I call my shots and no one has to call them for me. I never blame anyone else for the circumstances of my life. "},{id:15,text:"15. I accept my failings and move past them as easily as I accept the rewards for my victories. I never demand perfection of myself, but I expect the very best of what I have to give––and that’s what I get. I never give myself excuses. "},{id:16,text:"16. I get things done on time and in the right way. Today I have the inner strength to do more than ever. I am an exceptional human being. "},{id:17,text:"17. My goals and my incredible belief in myself turn my goals into reality. I have the power to live my dreams."},{id:18,text:"18.  I believe in them like I believe in myself. And that belief is so strong that there is nothing that diminishes my undefeatable spirit. "}]},{id:3,title:"Organized planning",cards:[{id:1,text:"1. I am organized and in control of my life. I am in control of myself, my thoughts, my time, my actions, and my future. "},{id:2,text:"2. I know what to do and when to do it, and I do everything I need to do, when I need to do it. "},{id:3,text:"3. I program my mind to make the maximum use of my time. I am in control of my time and how to use it. I like being organized, efficient, and on top of things."},{id:4,text:"4. Controlling my time keeps me that way. "},{id:5,text:"5. I never waste time––I always “plan” time. And because I plan my time, I always have time to do the things I choose to do. "},{id:6,text:"6. Each day I become more organized and in control of all areas of my life––at home, at work, in my mind and in my thoughts, in everything that I do. "},{id:7,text:"7. I am very well organized. Each night I make a list of things I need to do the next day. I set my priorities and I follow them. "},{id:8,text:"8. I am always on time. I am always right where I need to be, exactly when I need to be there. "},{id:9,text:"9. Being on time is easy for me and the more I control my time and the more organized I become, the easier it is. "},{id:10,text:"10. I am in control of my feelings, my emotions, my attitudes, and my needs. I control them; they do not control me. "},{id:11,text:"11. I have the winning vote in the outcome of my own actions. And I choose to live my life by choice, not chance. Therefore, I take the time to take control."},{id:12,text:"12. I have an organized and orderly mind. Because I think in an organized way, I conduct my life in an organized manner. "},{id:13,text:"13. I think in the most positive and productive way at all times and in all things. The way I think is the way I live––and I think “right.” "},{id:14,text:"14. I am the director of my destiny. I know where I am going and I know why I am going there. My earthly life is in my hands and in my control. "},{id:15,text:"15. I control my goals and the achievement of my goals. I organize my goals by writing each of them down, along with the steps I need to reach them. One of the reasons for my success is that my goals are clearly defined and organized."},{id:16,text:"16. I am in complete control of what I think and how I think. Therefore, I choose to think only those thoughts which help me and which are of genuine benefit to me."}]},{id:4,title:"Solving Problems",cards:[{id:1,text:"1. I’m good at solving problems. I like challenges and I meet them head on. "},{id:2,text:"2. Problems are my teachers. They help me to learn and grow. Without them, I would be going nowhere. With them, I am moving forward in the direction of my own goals. "},{id:3,text:"3. There is no problem which I cannot conquer. I am strong in mind, body, and spirit. My will, my strength, and my determination are always greater than any problem I face."},{id:4,text:"4. When I meet a new problem, I do not see the problem as my enemy. I know that finding the solution to the problem will move me forward in my own personal growth."},{id:5,text:"5. Because I know that problems are a key ingredient in my spiritual and mental education and preparation, I recognize that all problems are important to me. "},{id:6,text:"6. I do not fear problems, I solve them. I do not ignore problems, I confront them. I do not avoid problems, I conquer them. "},{id:7,text:"7. I know that every problem holds within itself the keys to its own solution. Therefore, the better I understand the problem, the clearer I am able to see its solution. "},{id:8,text:"8. Having problems is not a problem for me. I am confident, self-assured, positive, and determined. I always know that I am going to overcome any problem I encounter––and I always do. "},{id:9,text:"9. I am good at breaking large obstacles down into smaller pieces that are easier to handle. And I never make any problem appear to be larger than it actually is. "},{id:10,text:"10. I never worry. I turn “worry time” into positive, constructive, “solution time.” I keep my mind alert and open to all solutions—and solutions come quickly and easily to me. "},{id:11,text:"11. I have learned to recognize that many problems carry with them benefits and potential opportunities which would not have presented themselves had the problem not occurred in the first place. "},{id:12,text:"12. I do not seek to live a life which is free from all problems. Instead, I choose to live a life of finding solutions and enjoying the benefits which those solutions create."},{id:13,text:"13. Challenge, conquer, solution, and win are words which I live by daily. Challenges are opportunities. Conquering them is the inevitable outcome. "},{id:14,text:"14. “Solutions” are the stepping stones to my success, and “Winning” is my way of life."}]},{id:5,title:"Self Esteem",cards:[{id:1,text:"1. I really am very special. I like who I am and I feel good about myself. "},{id:2,text:"2. Although I always work to improve myself and I get better every day, I like who I am today. And tomorrow, when I’m even better, I’ll like myself then, too. "},{id:3,text:"3. It’s true that there really is no one else like me in the entire world. There never was another me before, and there will never be another me again. "},{id:4,text:"4. I am unique––from the top of my head to the bottom of my feet. In some ways I may look and act and sound like some others––but I am not them. I am me."},{id:5,text:"5. I wanted to be somebody––and now I know I am I would rather be me than anyone else in the world. "},{id:6,text:"6. I like how I feel and I like how I think and I like how I do things. I approve of me and I approve of who I am."},{id:7,text:"7. I have many beautiful qualities about me. I have talents and skills and abilities. I even have talents that I don’t even know about yet. And I am discovering new talents inside myself all the time. "},{id:8,text:"8. I am positive. I am confident. I radiate good things. If you look closely, you can even see a glow around me."},{id:9,text:"9. I am full of life. I like life and I’m glad to be alive. I am a very special person, living at a very special time. "},{id:10,text:"10. I am intelligent. My mind is quick and alert and clever and fun. I think good thoughts, and my mind makes things work right for me. "},{id:11,text:"11. I have a lot of energy and enthusiasm and vitality. I am exciting and I really enjoy being me. "},{id:12,text:"12. I like to be around other people and other people like to be around me. People like to hear what I have to say and know what I have to think. "},{id:13,text:"13. I smile a lot. I am happy on the inside and I am happy on the outside. "},{id:14,text:"14. I am interested in many things. I appreciate all the blessings I have, and the things that I learn, and all the things I will learn today and tomorrow and forever––just as long as I am. "},{id:15,text:"15. I am warm, sincere, honest, and genuine. I am all of these things and more. And all of these things are me. I like who I am, and I’m glad to be me."}]},{id:6,title:"Self-Responsibility",cards:[{id:1,text:"1. I take full responsibility for everything about me––even the thoughts that I think. I am in control of the vast resources of my own mind."},{id:2,text:"2. I alone am responsible for what I do and what I tell myself about me. No one can share this responsibility with me. "},{id:3,text:"3. I also allow others to accept their responsibilities far themselves and I do not try to accept their responsibilities for them. "},{id:4,text:"4. I enjoy being responsible. It puts me in charge of being me––and that’s a challenge I enjoy. "},{id:5,text:"5. I allow no one else, at any time, to assume control or responsibility over my life or over anything that I do. My responsibility to others is an extension of my own responsibility to myself. "},{id:6,text:"6. I choose to leave nothing about me up to chance. When it comes to me––and anything in my life––I choose to CHOOSE. "},{id:7,text:"7. My choices are mine alone to make for myself. I do not, at any time, allow anyone else to make my choices for me. And I accept full responsibility for every choice and decision I make. "},{id:8,text:"8. I always meet all of the obligations which I accept. And I accept no obligations which I will not meet. "},{id:9,text:"9. I am trustworthy. I can be counted on. I have accepted winning responsibility for myself––and I always live up to the responsibilities I accept. "},{id:10,text:"10. There is no they on whom I lay the blame, or with whom I share my own personal responsibilities. I have learned the great secret of mastering my own destiny. I have learned that “they” is “me.” "},{id:11,text:"11. I have no need to make excuses and no one needs to carry my responsibility for me. I gladly carry my own weight––and I carry it well. "},{id:12,text:"12. Each day I acknowledge and accept the responsibility––not only for my own actions––but also for my emotions, my thoughts, and my attitude. "},{id:13,text:"13. I accept the responsibility for living my life in a way which creates my strengths, my happiness, my positive, healthy beliefs, and for my past, my present, and my future."}]},{id:7,title:"Freedom from worry",cards:[{id:1,text:"1. I never worry. Instead of worrying, I find solutions and I act on them. "},{id:2,text:"2. My mind is constantly in tune with the positive. It is bright, cheerful, enthusiastic, and full of good, positive thoughts and ideas. "},{id:3,text:"3. I am able to relax easily and comfortably in my body and in my mind. I am calm, confident, and self-assured. "},{id:4,text:"4. My mind is orderly and well-organized. I consciously choose what I think and I always choose those thoughts which are the most positive and beneficial for me. "},{id:5,text:"5. All of my thoughts create healthiness within me. My mind dwells only on those thoughts which create more harmony, balance, and well-being within me and in the world around me. "},{id:6,text:"6. I automatically, and always, think in a decisive and determined way. "},{id:7,text:"7. I am full of resolution and the absolute assurance of the best possible outcome in everything that I do. "},{id:8,text:"8. I choose to look at the world around me in the bright, healthy light of optimism and self-assurance. "},{id:9,text:"9. I do only those things which are best for me. I create the best within myself, I attract the best in others, and I find the best in the world around me. "},{id:10,text:"10. I willingly, and without fail, take care of the duties and obligations which I have accepted for myself."},{id:11,text:"11. I commit only to those responsibilities which I know I can fulfill. "},{id:12,text:"12. I focus the attention of my mind only on those things that I can do something about. If I cannot affect it or direct it––I accept it. "},{id:13,text:"13. I keep my mind too busy thinking good, healthy, positive, constructive, and productive thoughts to ever have any time for worry. "},{id:14,text:"14. I control the thoughts I choose. No thought, at any time, can dwell in my mind without my approval or permission. I never worry."}]},{id:8,title:"Eating Habits",cards:[{id:1,text:"1. I am in control of myself in every way––at all times and in all situations. "},{id:2,text:"2. Each time I sit down to eat I reaffirm my determination to achieve my goal. By eating right, and never giving in, I am reaching the weight I want. "},{id:3,text:"3. Whether eating in or eating out, I really enjoy eating less. "},{id:4,text:"4. I never feel the need to finish the food in front of me. I eat only what I should––and never one bite more. "},{id:5,text:"5. One way to weight-loss that’s easy and works, is less food on my plate, and less on my fork. "},{id:6,text:'6. By ordering less when I eat out, and by serving myself smaller portions at home, I keep myself aware of the importance of staying with my goal––each and every day. “Less on my plate means less on my waist."'},{id:7,text:"7. When I sit down to eat, at no time do I allow anyone else to influence, tempt, or discourage me in any negative way."},{id:8,text:"8. What I eat, and the goals I reach, are up to me. And I give no one the right to hinder or control my success."},{id:9,text:"9. Although others may benefit from my success, I. am achieving my weight-loss goals for my own personal reasons––for myself, my life, my future, and my own personal well-being."},{id:10,text:"10. I am never, at any time, tempted to take one bite more than I should. I am strong, I am capable of reaching my goal, and I am doing it."},{id:11,text:"11. Being in situations which put a lot of food in front of me is not a problem to me now. I simply say “No” to the food and “Yes” to my success."},{id:12,text:"12. I enjoy sitting down to eat. Each time I do I conquer my past, and I create a trimmer, happier, more self-confident future in front of me. "},{id:13,text:"13. When I sit down to eat, I do not need someone else to remind me of my goal, or to keep me from eating something I should not. I take full responsibility for myself, and no one else has to do it for me. "},{id:14,text:"14. Controlling my weight, and my appetite, is easy for me now. I enjoy smaller portions, smaller bites, and a slower, healthier, more relaxed way of eating. "},{id:15,text:"15. I have set my goal and I am staying with it. I have turned mealtime into “achievement time.”"}]}],dp=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#3A7CA5","#4C9A6B"],rd=e=>dp[e%dp.length],Cv=e=>e+"1A",Fi="affirmation_favs",zv="anvil_affirmation_favs",cp=()=>{try{return JSON.parse(localStorage.getItem(Fi)||localStorage.getItem(zv)||"[]")}catch{return[]}};function Tv(){const[e,r]=c.useState(0),[n,o]=c.useState(0),[i,s]=c.useState(()=>new Set(cp())),l=c.useRef(!1);c.useEffect(()=>{let p=!1;return F.getSetting(Fi).then(b=>{if(!p){if(Array.isArray(b==null?void 0:b.value))s(new Set(b.value));else{const u=cp();u.length&&F.setSetting(Fi,u).catch(()=>{}),s(new Set(u))}l.current=!0}}).catch(()=>{l.current=!0}),()=>{p=!0}},[]),c.useEffect(()=>{localStorage.setItem(Fi,JSON.stringify([...i])),l.current&&F.setSetting(Fi,[...i]).catch(()=>{})},[i]);const a=(p,b)=>`${p}#${b.id}`,d=e==="FAV"?el.flatMap((p,b)=>p.cards.filter(u=>i.has(a(p.title,u))).map(u=>({...u,color:rd(b),title:p.title}))):el[e].cards.map(p=>({...p,color:rd(e),title:el[e].title})),g=d.length,h=Math.min(n,Math.max(0,g-1)),f=d[h],m=p=>{r(p),o(0)},B=c.useCallback(()=>o(p=>Math.max(0,p-1)),[]),T=c.useCallback(()=>o(p=>Math.min(g-1,p+1)),[g]);c.useEffect(()=>{const p=b=>{b.key==="ArrowLeft"&&B(),b.key==="ArrowRight"&&T()};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[B,T]);const R=p=>s(b=>{const u=new Set(b);return u.has(p)?u.delete(p):u.add(p),u}),w=f?f.color:"#8268B0";return t.jsxs("div",{style:jt.page,children:[t.jsxs("div",{style:jt.head,children:[t.jsx("div",{style:jt.eyebrow,children:"Anvil · Affirmations"}),t.jsx("h1",{style:jt.h1,children:"Affirmations"}),t.jsx("div",{style:jt.subhead,children:"One at a time — read it, mean it."})]}),t.jsxs("div",{style:jt.filterBar,children:[el.map((p,b)=>{const u=e===b,z=rd(b);return t.jsxs("button",{onClick:()=>m(b),style:{...jt.chip,...u?{background:z,color:"#fff",borderColor:z}:{}},children:[t.jsx("span",{style:{...jt.catDot,background:u?"#fff":z}})," ",p.title," ",t.jsx("span",{style:jt.chipCount,children:p.cards.length})]},p.title)}),t.jsxs("button",{onClick:()=>m("FAV"),style:{...jt.chip,...e==="FAV"?{background:"#C9A227",color:"#fff",borderColor:"#C9A227"}:{}},children:[t.jsx(Yi,{size:12,fill:e==="FAV"?"#fff":"none"})," Favorites ",t.jsx("span",{style:jt.chipCount,children:i.size})]})]}),g===0?t.jsxs("div",{style:jt.empty,children:[t.jsx(Yi,{size:22,color:"#C3BFB5"}),t.jsx("div",{children:"No favorites yet — tap the star on a card to save it here."})]}):t.jsxs("div",{style:jt.viewer,children:[t.jsxs("div",{style:{...jt.card,borderTop:`4px solid ${w}`},children:[t.jsx("div",{style:{...jt.cardCat,color:w,background:Cv(w)},children:f.title}),t.jsx("button",{onClick:()=>R(a(f.title,f)),style:{...jt.favBtn,color:i.has(a(f.title,f))?"#C9A227":"#C3BFB5"},title:"Favorite",children:t.jsx(Yi,{size:20,fill:i.has(a(f.title,f))?"#C9A227":"none"})}),t.jsx(cc,{size:30,color:w,style:{opacity:.25}}),t.jsx("p",{style:jt.cardText,children:f.text.trim()})]}),t.jsxs("div",{style:jt.navRow,children:[t.jsxs("button",{onClick:B,disabled:h===0,style:{...jt.navBtn,...h===0?jt.navBtnDisabled:{}},children:[t.jsx(wn,{size:18})," Back"]}),t.jsxs("span",{style:{...jt.counter,color:w},children:[h+1," ",t.jsxs("span",{style:jt.counterTotal,children:["/ ",g]})]}),t.jsxs("button",{onClick:T,disabled:h===g-1,style:{...jt.navBtn,...h===g-1?jt.navBtnDisabled:{}},children:["Next ",t.jsx(nn,{size:18})]})]}),t.jsx("div",{style:jt.dots,children:d.map((p,b)=>t.jsx("button",{onClick:()=>o(b),style:{...jt.dot,...b===h?{background:w,transform:"scale(1.5)"}:{}},title:`${b+1}`},b))})]})]})}const jt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:22},chip:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipCount:{fontSize:11,fontWeight:700,opacity:.7},catDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},empty:{display:"flex",flexDirection:"column",alignItems:"center",gap:10,fontSize:13.5,color:"var(--text-3)",padding:"56px 12px",textAlign:"center",background:"var(--surface)",borderRadius:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},viewer:{display:"flex",flexDirection:"column",alignItems:"center"},card:{position:"relative",background:"var(--surface)",borderRadius:16,padding:"40px 32px 44px",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",width:"100%",minHeight:240,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",boxSizing:"border-box"},cardCat:{position:"absolute",top:16,left:16,fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:12,textTransform:"uppercase",letterSpacing:"0.04em"},favBtn:{position:"absolute",top:14,right:14,border:"none",background:"none",cursor:"pointer",padding:4,display:"grid",placeItems:"center"},cardText:{fontSize:21,lineHeight:1.55,margin:"14px 0 0",fontWeight:500,color:"var(--text)",fontFamily:"'Fraunces',Georgia,serif",maxWidth:560},navRow:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",maxWidth:420,marginTop:22},navBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},counter:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},counterTotal:{fontSize:13,fontWeight:600,color:"var(--text-3)"},dots:{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center",marginTop:20,maxWidth:480},dot:{width:7,height:7,borderRadius:"50%",border:"none",background:"var(--border)",cursor:"pointer",padding:0,transition:"transform 0.12s"}},Iv=[{id:"day",label:"Day"},{id:"week",label:"Week"},{id:"month",label:"Month"},{id:"year",label:"Year"}],cn=e=>e>=60?`${Math.floor(e/60)}h ${e%60}m`:`${e}m`,Bv=e=>{const r=e<12?"am":"pm",n=e%12===0?12:e%12;return`${String(n).padStart(2,"0")} ${r}`};function Ev(e){const r=e<=60?10:e<=120?20:e<=300?60:120,n=Math.max(60,Math.ceil((e||1)/r)*r),o=[];for(let i=0;i<=n;i+=r)o.push(i);return{max:n,ticks:o}}const Fm=e=>{const r=new Date(e);return r.setHours(0,0,0,0),r},Rv=e=>{const r=Fm(e),n=(r.getDay()+6)%7;return r.setDate(r.getDate()-n),r},Dv=e=>new Date(e.getFullYear(),e.getMonth(),1),Fv=e=>new Date(e.getFullYear(),0,1);function Av(e,r){if(e==="day"){const i=Fm(r);return{start:i,end:new Date(+i+864e5),prev:new Date(+i-864e5),prev2:new Date(+i-2*864e5)}}if(e==="week"){const i=Rv(r);return{start:i,end:new Date(+i+7*864e5),prev:new Date(+i-7*864e5),prev2:new Date(+i-14*864e5)}}if(e==="month"){const i=Dv(r),s=r.getFullYear(),l=r.getMonth();return{start:i,end:new Date(s,l+1,1),prev:new Date(s,l-1,1),prev2:new Date(s,l-2,1)}}const n=r.getFullYear();return{start:Fv(r),end:new Date(n+1,0,1),prev:new Date(n-1,0,1),prev2:new Date(n-2,0,1)}}function Wv({sessions:e=[],onBack:r}){const[n,o]=c.useState("day"),i=new Date,{start:s,end:l,prev:a,prev2:d}=Av(n,i),g=be=>new Date(be.started_at||be.created_at),h=e.filter(be=>be.completed),f=(be,ze,K)=>{const U=g(be);return U>=ze&&U<K},m=(be,ze)=>h.filter(K=>f(K,be,ze)).reduce((K,U)=>K+(U.actual_min||0),0),B=h.filter(be=>f(be,s,l)),T=B.reduce((be,ze)=>be+(ze.actual_min||0),0),R=m(a,s),w=m(d,a),p=B.length,b=Array(24).fill(0);B.forEach(be=>{b[g(be).getHours()]+=be.actual_min||0});const u=Math.max(...b,0),z=Ev(u),v={};B.forEach(be=>{const ze=Vt[be.tree]?be.tree:rn;v[ze]=(v[ze]||0)+(be.actual_min||0)});const I=Object.entries(v).map(([be,ze])=>({name:Vt[be].label,min:ze,color:Vt[be].leaf})).sort((be,ze)=>ze.min-be.min),E=R>0?Math.round((T-R)/R*100):T>0?100:0,S=E>0?Ki:E<0?Vn:pm,j=E>0?"#4C9A6B":E<0?"#C2536B":"#9A968C",Y={day:"yesterday",week:"last week",month:"last month",year:"last year"}[n],re={day:"2 days ago",week:"2 weeks ago",month:"2 months ago",year:"2 years ago"}[n],ee=54,W=22,he=2*Math.PI*ee;let we=0;return t.jsxs("div",{style:Ne.page,children:[t.jsxs("div",{style:Ne.topbar,children:[t.jsxs("button",{onClick:r,style:Ne.back,children:[t.jsx(im,{size:18})," Grove"]}),t.jsx("h1",{style:Ne.h1,children:"Insights"}),t.jsx("div",{style:{width:76}})]}),t.jsx("div",{style:Ne.rangeBar,children:Iv.map(be=>t.jsx("button",{onClick:()=>o(be.id),style:{...Ne.rangeBtn,...n===be.id?Ne.rangeOn:{}},children:be.label},be.id))}),t.jsxs("div",{style:Ne.headline,children:[t.jsxs("div",{style:Ne.bigStat,children:[t.jsx("div",{style:Ne.bigVal,children:cn(T)}),t.jsxs("div",{style:Ne.bigLbl,children:["Focused this ",n]})]}),t.jsxs("div",{style:Ne.bigStat,children:[t.jsx("div",{style:Ne.bigVal,children:p}),t.jsx("div",{style:Ne.bigLbl,children:"Trees"})]})]}),t.jsxs("div",{style:Ne.card,children:[t.jsxs("div",{style:Ne.cardHead,children:[t.jsxs("div",{style:Ne.cardTitle,children:["Your forest this ",n]}),t.jsx("div",{style:Ne.cardHint,children:"Each tree is a completed session — bigger means longer focus"})]}),t.jsx(_v,{sessions:B}),t.jsxs("div",{style:Ne.forestNumber,children:[p," ",p===1?"tree":"trees"," · ",cn(T)," focused"]})]}),t.jsx(nd,{title:"Focus distribution",hint:"Minutes focused at each time of day",children:u===0?t.jsx(gp,{}):t.jsx(Lv,{hours:b,axis:z})}),t.jsx(nd,{title:"Pillar distribution",hint:"How your focus splits across the five trees",children:I.length===0?t.jsx(gp,{}):t.jsxs("div",{style:Ne.donutWrap,children:[t.jsxs("svg",{viewBox:"0 0 140 140",width:"150",height:"150",style:{flexShrink:0},children:[I.map(be=>{const ze=be.min/(T||1)*he,K=t.jsx("circle",{cx:"70",cy:"70",r:ee,fill:"none",stroke:be.color,strokeWidth:W,strokeDasharray:`${ze} ${he-ze}`,strokeDashoffset:-we,transform:"rotate(-90 70 70)"},be.name);return we+=ze,K}),t.jsx("text",{x:"70",y:"66",textAnchor:"middle",style:Ne.donutCenterTop,children:cn(T)}),t.jsx("text",{x:"70",y:"82",textAnchor:"middle",style:Ne.donutCenterSub,children:"total"})]}),t.jsx("div",{style:Ne.legend,children:I.map(be=>t.jsxs("div",{style:Ne.legendRow,children:[t.jsx("span",{style:{...Ne.legendDot,background:be.color}}),t.jsx("span",{style:Ne.legendName,children:be.name}),t.jsxs("span",{style:Ne.legendVal,children:[cn(be.min)," · ",Math.round(be.min/(T||1)*100),"%"]})]},be.name))})]})}),t.jsxs(nd,{title:"Focus trend",hint:`This ${n} vs the previous two`,children:[t.jsxs("div",{style:Ne.trend3,children:[t.jsxs("div",{style:Ne.trendCol,children:[t.jsx("div",{style:Ne.trendVal,children:cn(T)}),t.jsxs("div",{style:Ne.trendLbl,children:["This ",n]})]}),t.jsxs("div",{style:Ne.trendCol,children:[t.jsx("div",{style:{...Ne.trendVal,color:"var(--text-2)"},children:cn(R)}),t.jsx("div",{style:Ne.trendLbl,children:Y})]}),t.jsxs("div",{style:Ne.trendCol,children:[t.jsx("div",{style:{...Ne.trendVal,color:"var(--text-3)"},children:cn(w)}),t.jsx("div",{style:Ne.trendLbl,children:re})]})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:t.jsxs("div",{style:{...Ne.trendBadge,color:j,background:j+"1A"},children:[t.jsx(S,{size:15})," ",E>0?"+":"",E,"% vs ",Y]})}),t.jsx($v,{items:[{label:`This ${n}`,value:T,color:"#4C9A6B"},{label:Y,value:R,color:"var(--text-3)"},{label:re,value:w,color:"var(--text-3)"}]})]})]})}const Mv=e=>e===0?"12a":e<12?`${e}a`:e===12?"12p":`${e-12}p`;function Lv({hours:e,axis:r}){return t.jsxs("div",{children:[t.jsxs("div",{style:Ne.vcPlot,children:[r.ticks.map(n=>t.jsxs("div",{style:{...Ne.vcGridRow,bottom:`${n/r.max*100}%`},children:[t.jsx("span",{style:Ne.vcYLabel,children:n}),t.jsx("div",{style:Ne.vcGridLine})]},n)),t.jsx("div",{style:Ne.vcBars,children:e.map((n,o)=>t.jsx("div",{style:Ne.vcCell,title:`${Bv(o)} · ${n} min`,children:t.jsx("div",{style:{...Ne.vcBar,height:n>0?`max(3px, ${n/r.max*100}%)`:0}})},o))})]}),t.jsx("div",{style:Ne.vcXAxis,children:e.map((n,o)=>t.jsx("div",{style:Ne.vcXCell,children:o%3===0?Mv(o):""},o))}),t.jsx("div",{style:Ne.vcYTitle,children:"minutes focused, by hour of day"})]})}function _v({sessions:e}){if(!e.length)return t.jsx("div",{style:Ne.sceneEmpty,children:"No trees yet this period. 🌱"});const n=e.slice(0,80),o=e.length-n.length,i=s=>Math.round(Math.max(40,Math.min(88,40+(s||0)*.6)));return t.jsxs("div",{children:[t.jsx("div",{style:Ne.scene,children:n.map(s=>t.jsx("div",{style:Ne.sceneTree,title:`${s.label||"Focus"} · ${cn(s.actual_min||s.duration_min)}`,children:t.jsx(Rg,{species:s.tree,progress:1,size:i(s.actual_min||s.duration_min)})},s.id))}),o>0&&t.jsxs("div",{style:Ne.overflow,children:["+",o," more trees"]})]})}function nd({title:e,hint:r,children:n}){return t.jsxs("div",{style:Ne.card,children:[t.jsxs("div",{style:Ne.cardHead,children:[t.jsx("div",{style:Ne.cardTitle,children:e}),r&&t.jsx("div",{style:Ne.cardHint,children:r})]}),n]})}function gp(){return t.jsx("div",{style:Ne.empty,children:"No focus sessions in this period yet. 🌱"})}function $v({items:e}){const r=Math.max(1,...e.map(n=>n.value));return t.jsx("div",{style:Ne.tbWrap,children:e.map(n=>t.jsxs("div",{style:Ne.tbRow,children:[t.jsx("div",{style:Ne.tbLbl,children:n.label}),t.jsx("div",{style:Ne.tbTrack,children:t.jsx("div",{style:{...Ne.tbBar,width:`${n.value/r*100}%`,background:n.color}})}),t.jsx("div",{style:Ne.tbVal,children:cn(n.value)})]},n.label))})}const Ne={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"20px 16px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:720,margin:"0 auto"},topbar:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},back:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},h1:{fontSize:20,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},rangeBar:{display:"flex",gap:6,background:"var(--surface)",padding:5,borderRadius:12,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},rangeBtn:{flex:1,border:"none",background:"none",padding:"9px 0",borderRadius:8,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},rangeOn:{background:"var(--accent-strong)",color:"#fff"},headline:{display:"flex",gap:12,marginBottom:16},bigStat:{flex:1,background:"var(--surface)",borderRadius:14,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},bigVal:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em"},bigLbl:{fontSize:12,color:"var(--text-3)",marginTop:3,fontWeight:500},card:{background:"var(--surface)",borderRadius:16,padding:"18px 18px 20px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},cardHead:{marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardHint:{fontSize:12,color:"var(--text-3)",marginTop:2},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"24px 0"},scene:{display:"flex",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"center",gap:"0 2px",padding:"14px 8px 6px",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,minHeight:110,border:"1px solid var(--border)"},sceneTree:{lineHeight:0},sceneEmpty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"34px 0",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,border:"1px solid var(--border)"},overflow:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",marginTop:6,fontWeight:600},forestNumber:{textAlign:"center",marginTop:12,fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},vcPlot:{position:"relative",height:180,paddingLeft:30},vcGridRow:{position:"absolute",left:0,right:0,display:"flex",alignItems:"center",height:0},vcYLabel:{width:26,marginRight:4,textAlign:"right",fontSize:9,color:"var(--text-3)",fontWeight:600,flexShrink:0},vcGridLine:{flex:1,height:1,background:"#EEEBE4"},vcBars:{position:"absolute",left:30,right:0,top:0,bottom:0,display:"flex",alignItems:"flex-end",gap:1},vcCell:{flex:1,height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"center"},vcBar:{width:"72%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",transition:"height 0.3s"},vcXAxis:{display:"flex",marginLeft:30,marginTop:4},vcXCell:{flex:1,textAlign:"center",fontSize:8.5,color:"var(--text-3)",fontWeight:600,overflow:"hidden"},vcYTitle:{textAlign:"center",fontSize:9.5,color:"var(--text-3)",marginTop:6,letterSpacing:"0.06em",textTransform:"uppercase",fontWeight:600},donutWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap",justifyContent:"center"},donutCenterTop:{fontSize:16,fontWeight:800,fill:"var(--text)",fontFamily:"'Fraunces',Georgia,serif"},donutCenterSub:{fontSize:9,fill:"#9A968C",textTransform:"uppercase",letterSpacing:"0.08em"},legend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:11,height:11,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},legendVal:{fontSize:12,color:"var(--text-3)",fontWeight:600,flexShrink:0},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:56,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},Pv=[15,30,45,60,90],od="anvil_grove_active",up=e=>`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`,Jl=e=>e>=60?`${Math.floor(e/60)}h ${e%60}m`:`${e}m`;function Nv(){const[e,r]=c.useState("timer"),[n,o]=c.useState("idle"),[i,s]=c.useState(15),[l,a]=c.useState(!1),[d,g]=c.useState(""),[h,f]=c.useState(rn),[m,B]=c.useState(()=>localStorage.getItem("anvil_grove_deepfocus")!=="0"),[T,R]=c.useState(15*60),[w,p]=c.useState({sessions:[],stats:null}),b=c.useRef(null),u=c.useRef(null),z=c.useRef(!1),v=c.useCallback(async()=>{try{p(await F.getFocus())}catch{}},[]),I=c.useCallback(async(x,Q)=>{if(!z.current){z.current=!0,localStorage.removeItem(od);try{await F.createFocus({label:d.trim()||null,tree:h,duration_min:i,actual_min:Q,completed:x,started_at:u.current,ended_at:new Date().toISOString()})}catch{}v()}},[d,h,i,v]),E=c.useCallback(()=>{if(n!=="running")return;const x=u.current?Math.round((Date.now()-new Date(u.current).getTime())/6e4):0;o("failed"),I(!1,Math.max(0,Math.min(i,x)))},[n,i,I]),S=c.useCallback(()=>{o("done"),R(0),I(!0,i)},[i,I]);c.useEffect(()=>{v();const x=JSON.parse(localStorage.getItem(od)||"null");if(x&&x.endTime){const Q=Math.round((x.endTime-Date.now())/1e3);s(x.duration),g(x.label||""),f(x.tree||"oak"),b.current=x.endTime,u.current=x.startedAt,Q>0?(R(Q),o("running")):(o("done"),z.current=!1,I(!0,x.duration))}},[]),c.useEffect(()=>{if(n!=="running")return;const x=()=>{const O=Math.round((b.current-Date.now())/1e3);if(O<=0){S();return}R(O)};x();const Q=setInterval(x,250);return()=>clearInterval(Q)},[n,S]),c.useEffect(()=>{if(n!=="running"||!m)return;const x=()=>{document.hidden&&E()};return document.addEventListener("visibilitychange",x),()=>document.removeEventListener("visibilitychange",x)},[n,m,E]),c.useEffect(()=>{const x=()=>{!document.hidden&&n!=="running"&&v()};window.addEventListener("focus",x),document.addEventListener("visibilitychange",x);const Q=setInterval(x,6e4);return()=>{window.removeEventListener("focus",x),document.removeEventListener("visibilitychange",x),clearInterval(Q)}},[v,n]);const j=()=>B(x=>{const Q=!x;return localStorage.setItem("anvil_grove_deepfocus",Q?"1":"0"),Q}),Y=()=>{z.current=!1,u.current=new Date().toISOString(),b.current=Date.now()+i*60*1e3,localStorage.setItem(od,JSON.stringify({endTime:b.current,duration:i,label:d,tree:h,startedAt:u.current})),R(i*60),o("running")},re=()=>{o("idle"),R(i*60)},ee=x=>{a(!1),s(x),R(x*60)},W=()=>{l||(a(!0),s(5),R(5*60))},he=x=>{if(a(!0),x===""){s(0),R(0);return}const Q=Math.max(1,Math.min(600,parseInt(x,10)||0));s(Q),R(Q*60)},we=i*60,be=n==="running"?1-T/we:n==="done"?1:0,ze=130,K=2*Math.PI*ze,U=K*(1-(n==="running"?be:n==="done"?1:0)),ce=w.stats;return e==="stats"?t.jsx(Wv,{sessions:w.sessions,onBack:()=>r("timer")}):t.jsxs("div",{style:Ve.page,children:[t.jsxs("div",{style:Ve.head,children:[t.jsx("div",{style:Ve.eyebrow,children:"Anvil · Grove"}),t.jsx("h1",{style:Ve.h1,children:"Grove"}),t.jsx("div",{style:Ve.subhead,children:"Plant a tree, stay focused, grow your grove."}),t.jsxs("button",{onClick:()=>r("stats"),style:Ve.insightsBtn,disabled:n==="running",children:[t.jsx(Ly,{size:15})," Insights"]})]}),ce&&t.jsxs("div",{style:Ve.statRow,children:[t.jsx(tl,{label:"Today",value:Jl(ce.today_minutes)}),t.jsx(tl,{label:"Trees",value:ce.trees}),t.jsx(tl,{label:"Streak",value:`${ce.streak}d`}),t.jsx(tl,{label:"Success",value:`${ce.success_rate}%`})]}),t.jsxs("div",{style:Ve.stage,children:[t.jsxs("div",{style:Ve.ringWrap,children:[t.jsxs("svg",{width:"300",height:"300",viewBox:"0 0 300 300",style:{position:"absolute",inset:0},children:[t.jsx("circle",{cx:"150",cy:"150",r:ze,fill:"none",stroke:"var(--border)",strokeWidth:"10"}),t.jsx("circle",{cx:"150",cy:"150",r:ze,fill:"none",stroke:n==="failed"?"#C2536B":"#4C9A6B",strokeWidth:"10",strokeLinecap:"round",strokeDasharray:K,strokeDashoffset:U,transform:"rotate(-90 150 150)",style:{transition:"stroke-dashoffset 0.4s linear"}})]}),t.jsx("div",{style:Ve.ringInner,children:t.jsx(Rg,{species:h,progress:n==="idle"?0:be,withered:n==="failed",size:170})})]}),n==="idle"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:Ve.timeBig,children:up(i*60)}),t.jsxs("div",{style:Ve.controls,children:[t.jsxs("div",{style:Ve.chips,children:[Pv.map(x=>t.jsxs("button",{onClick:()=>ee(x),style:{...Ve.chip,...!l&&i===x?Ve.chipOn:{}},children:[x,"m"]},x)),t.jsx("button",{onClick:W,style:{...Ve.chip,...l?Ve.chipOn:{}},children:"Custom"})]}),l&&t.jsxs("div",{style:Ve.customRow,children:[t.jsx("input",{type:"number",min:"1",max:"600",inputMode:"numeric",autoFocus:!0,value:i||"",onChange:x=>he(x.target.value),placeholder:"e.g. 50",style:Ve.customInput}),t.jsx("span",{style:Ve.customUnit,children:"minutes"})]}),t.jsx("input",{value:d,onChange:x=>g(x.target.value),placeholder:"What are you focusing on? (optional)",style:Ve.input,maxLength:60}),t.jsx("div",{style:Ve.treePick,children:Object.entries(Vt).map(([x,Q])=>t.jsxs("button",{onClick:()=>f(x),title:Q.label,style:{...Ve.treeBtn,...h===x?{borderColor:Q.leaf,background:Q.leaf+"1A"}:{}},children:[t.jsx("span",{style:{...Ve.treeDot,background:Q.leaf}}),Q.label]},x))}),t.jsxs("button",{onClick:j,style:Ve.toggleRow,children:[t.jsxs("div",{style:{textAlign:"left"},children:[t.jsx("div",{style:Ve.toggleTitle,children:"Deep Focus"}),t.jsx("div",{style:Ve.toggleHint,children:m?"Leaving the app kills the tree":"Tree survives until you give up"})]}),t.jsx("div",{style:{...Ve.switch,...m?Ve.switchOn:{}},children:t.jsx("div",{style:{...Ve.knob,...m?Ve.knobOn:{}}})})]}),t.jsx("button",{onClick:Y,disabled:i<1,style:{...Ve.plantBtn,...i<1?{opacity:.5,cursor:"not-allowed"}:{}},children:"Plant tree"})]})]}),n==="running"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:Ve.timeBig,children:up(T)}),t.jsx("div",{style:Ve.focusLabel,children:d.trim()||"Focusing…"}),t.jsx("div",{style:m?Ve.warn:Ve.warnSoft,children:m?"⚠ Deep Focus on — leaving this app will kill your tree.":"🌿 Relaxed mode — only Give up ends this session."}),t.jsx("button",{onClick:E,style:Ve.giveUp,children:"Give up"})]}),n==="done"&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:Ve.resultTitle,children:["🌳 You grew a ",Vt[h].label," tree!"]}),t.jsxs("div",{style:Ve.resultSub,children:[Jl(i)," of focus added to your grove."]}),t.jsx("button",{onClick:re,style:Ve.plantBtn,children:"Plant another"})]}),n==="failed"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{...Ve.resultTitle,color:"#C2536B"},children:"Your tree withered."}),t.jsx("div",{style:Ve.resultSub,children:"You left before the timer finished. Try again?"}),t.jsx("button",{onClick:re,style:Ve.plantBtn,children:"Try again"})]})]}),t.jsx(Ov,{sessions:w.sessions,onDelete:async x=>{await F.deleteFocus(x),v()}})]})}function tl({label:e,value:r}){return t.jsxs("div",{style:Ve.stat,children:[t.jsx("div",{style:Ve.statValue,children:r}),t.jsx("div",{style:Ve.statLabel,children:e})]})}function Ov({sessions:e,onDelete:r}){const n=e.filter(l=>l.completed);if(n.length===0)return t.jsx("div",{style:Ve.forestEmpty,children:"Your grove is empty. Plant your first tree above. 🌱"});const o={};for(const l of n){const a=(l.started_at||l.created_at||"").slice(0,10);(o[a]||(o[a]=[])).push(l)}const i=Object.keys(o).sort().reverse(),s=l=>{const a=new Date().toISOString().slice(0,10);return l===a?"Today":new Date(l+"T00:00").toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})};return t.jsxs("div",{style:Ve.forest,children:[t.jsxs("div",{style:Ve.forestHead,children:["Your Grove · ",n.length," trees"]}),i.map(l=>t.jsxs("div",{style:Ve.daySection,children:[t.jsxs("div",{style:Ve.dayLabel,children:[s(l)," · ",o[l].length]}),t.jsx("div",{style:Ve.treeGrid,children:o[l].map(a=>t.jsxs("div",{style:Ve.treeCard,title:`${a.label||"Focus"} · ${Jl(a.actual_min)}`,onDoubleClick:()=>r(a.id),children:[t.jsx(I0,{species:a.tree}),t.jsx("div",{style:Ve.treeCardMin,children:Jl(a.actual_min||a.duration_min)}),a.label&&t.jsx("div",{style:Ve.treeCardLabel,children:a.label})]},a.id))})]},l)),t.jsx("div",{style:Ve.forestHint,children:"Double-tap a tree to remove it."})]})}const Ve={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:820,margin:"0 auto"},head:{marginBottom:16,textAlign:"center"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},insightsBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginTop:12},statRow:{display:"flex",gap:10,justifyContent:"center",marginBottom:18,flexWrap:"wrap"},stat:{background:"var(--surface)",borderRadius:12,padding:"10px 18px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",minWidth:78},statValue:{fontSize:19,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},statLabel:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},stage:{background:"var(--surface)",borderRadius:18,padding:"28px 24px 32px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",display:"flex",flexDirection:"column",alignItems:"center",marginBottom:26},ringWrap:{position:"relative",width:300,height:300,display:"grid",placeItems:"center"},ringInner:{position:"relative",zIndex:1,display:"grid",placeItems:"center"},timeBig:{fontSize:40,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:6},focusLabel:{fontSize:14,color:"var(--text-2)",marginTop:2,fontWeight:500},warn:{fontSize:12,color:"#C2773B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},warnSoft:{fontSize:12,color:"#4C9A6B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},toggleRow:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:12,padding:"10px 14px",cursor:"pointer",fontFamily:"inherit",width:"100%"},toggleTitle:{fontSize:14,fontWeight:700,color:"var(--text)"},toggleHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},switch:{width:42,height:24,borderRadius:12,background:"var(--border)",flexShrink:0,padding:2,transition:"background 0.18s",boxSizing:"border-box"},switchOn:{background:"#4C9A6B"},knob:{width:20,height:20,borderRadius:"50%",background:"var(--surface)",boxShadow:"0 1px 2px rgba(0,0,0,0.2)",transform:"translateX(0)",transition:"transform 0.18s"},knobOn:{transform:"translateX(18px)"},controls:{width:"100%",maxWidth:380,display:"flex",flexDirection:"column",gap:14,marginTop:8},chips:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},chip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},customRow:{display:"flex",alignItems:"center",justifyContent:"center",gap:8},customInput:{border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:15,fontWeight:700,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center",width:100},customUnit:{fontSize:13,color:"var(--text-3)",fontWeight:600},input:{border:"1px solid var(--border)",borderRadius:10,padding:"11px 13px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center"},treePick:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},treeBtn:{display:"flex",alignItems:"center",gap:6,border:"1.5px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},treeDot:{width:10,height:10,borderRadius:"50%"},plantBtn:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},giveUp:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",padding:"11px 26px",borderRadius:11,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:18},resultTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginTop:14,textAlign:"center"},resultSub:{fontSize:13.5,color:"var(--text-3)",marginTop:6,marginBottom:18,textAlign:"center"},forest:{background:"var(--surface)",borderRadius:16,padding:"20px 22px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},forestHead:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},forestEmpty:{background:"var(--surface)",borderRadius:16,padding:"40px 20px",textAlign:"center",color:"var(--text-3)",fontSize:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},daySection:{marginBottom:16},dayLabel:{fontSize:12,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:8},treeGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(80px,1fr))",gap:8},treeCard:{display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 4px",borderRadius:10,cursor:"pointer",background:"var(--surface-2)"},treeCardMin:{fontSize:12,fontWeight:700,color:"#4C9A6B",marginTop:-4},treeCardLabel:{fontSize:10.5,color:"var(--text-3)",marginTop:2,textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:76},forestHint:{fontSize:11,color:"var(--text-3)",textAlign:"center",marginTop:6}},Hv="grove_rates",Gv="reward_rates",rl=Object.keys(Vt),pp=[{id:"kickstart",label:"Kickstart"},{id:"golden",label:"Golden Book"},{id:"habits",label:"Habits"},{id:"quadrant",label:"Quadrant"},{id:"goals",label:"Goals"},{id:"grove",label:"Grove"},{id:"journal",label:"Journal"},{id:"revision",label:"Revision"},{id:"affirmations",label:"Affirmations"},{id:"skills",label:"Skills"},{id:"spiritual",label:"Spiritual"},{id:"mindscape",label:"Mindscape"},{id:"vault",label:"Wallet"},{id:"expenses",label:"Expenses"},{id:"trading",label:"Trading Journal"},{id:"delight",label:"Delights"},{id:"achievements",label:"Achievements"},{id:"challenges",label:"Challenges"},{id:"bucket",label:"Bucket List"}],id=new Set(["worth"]),bp="reward_toggles",hp="bucket_take_enabled",Tn="#C9A227",Eo="#3A7CA5",oo="#C2536B",io="#4C9A6B",mp=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#5B9B9B","#B0654E","#6E7FC2","#A23E57","#3E9E6B","#9A7BB0","#C99B2E","#4E86B0","#B04E86","#6BA34C","#8A6D3B"],Uv=e=>{const r=Math.floor(e/60),n=Math.round(e%60);return r&&n?`${r}h ${n}m`:r?`${r}h`:`${n}m`},sd=e=>{let r=Math.round((e||0)*60);const n=Math.floor(r/3600);r%=3600;const o=Math.floor(r/60);return r%=60,[n?`${n}h`:null,n||o?`${o}m`:null,`${r}s`].filter(Boolean).join(" ")},Vv=()=>{const e=new Date,r=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${r(e.getMonth()+1)}-${r(e.getDate())}T${r(e.getHours())}:${r(e.getMinutes())}`},fp=e=>{if(!e)return"";const r=new Date(e.includes("T")?e:e+"T00:00:00");return isNaN(r)?e:r.toLocaleDateString("en-US",e.includes("T")?{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}:{month:"short",day:"numeric",year:"numeric"})},fr=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,xp=e=>{const r=new Date(e);return r.setHours(0,0,0,0),r.setDate(r.getDate()-(r.getDay()+6)%7),r},Ro=[{id:"today",label:"Today"},{id:"all",label:"All time"},{id:"tweek",label:"This week"},{id:"tmonth",label:"This month"},{id:"pweek",label:"Last week"},{id:"pmonth",label:"Last month"},{id:"tyear",label:"This year"}];function Yv(e){const r=new Date;if(e==="today")return[fr(r),fr(r)];if(e==="tweek"){const n=xp(r),o=new Date(n);return o.setDate(n.getDate()+6),[fr(n),fr(o)]}if(e==="pweek"){const n=xp(r);n.setDate(n.getDate()-7);const o=new Date(n);return o.setDate(n.getDate()+6),[fr(n),fr(o)]}return e==="tmonth"?[fr(new Date(r.getFullYear(),r.getMonth(),1)),fr(new Date(r.getFullYear(),r.getMonth()+1,0))]:e==="pmonth"?[fr(new Date(r.getFullYear(),r.getMonth()-1,1)),fr(new Date(r.getFullYear(),r.getMonth(),0))]:e==="tyear"?[fr(new Date(r.getFullYear(),0,1)),fr(new Date(r.getFullYear(),11,31))]:["0000-01-01","9999-12-31"]}function Kv(){const e=Jn(),r=L=>Or(L,e.code),[n,o]=c.useState([]),[i,s]=c.useState([]),[l,a]=c.useState([]),[d,g]=c.useState([]),[h,f]=c.useState([]),[m,B]=c.useState([]),[T,R]=c.useState({}),[w,p]=c.useState({}),[b,u]=c.useState({focus:!0,usage:!0,achievement:!0,challenge:!0}),[z,v]=c.useState(!1),[I,E]=c.useState({}),[S,j]=c.useState({}),[Y,re]=c.useState(!1),[ee,W]=c.useState(!1),[he,we]=c.useState(null),[be,ze]=c.useState(""),[K,U]=c.useState(""),[ce,x]=c.useState(!1),[Q,O]=c.useState("today"),[G,N]=c.useState([]),[ge,de]=c.useState(!1),[Me,oe]=c.useState(null),ae=()=>F.getPayouts().then(g).catch(()=>{}),P=()=>F.getBucket().then(L=>N(Array.isArray(L)?L:[])).catch(()=>{}),X=()=>F.getRewardRates().then(a).catch(()=>{});c.useEffect(()=>{(async()=>{try{const[L,Re,ot,A,Z,Te,Pe,nt,Je,tt,pt]=await Promise.all([F.getFocus(),F.getScreenTime(),F.getRewardRates(),F.getPayouts(),F.getAchievements(),F.getChallenges(),F.getBucket(),F.getSetting(Hv),F.getSetting(Gv),F.getSetting(bp),F.getSetting(hp)]);o(L.sessions||[]),s(Array.isArray(Re)?Re:[]),a(ot||[]),g(A||[]),f(Array.isArray(Z)?Z:[]),B(Array.isArray(Te)?Te:[]),N(Array.isArray(Pe)?Pe:[]),R((nt==null?void 0:nt.value)||{}),p((Je==null?void 0:Je.value)||{}),tt!=null&&tt.value&&u(Ie=>({...Ie,...tt.value})),de(!!(pt!=null&&pt.value))}catch{}v(!0)})()},[]);const me={};l.forEach(L=>{var Re;(me[Re=`${L.kind}:${L.rkey}`]||(me[Re]=[])).push({eff:L.eff_date,rate:L.rate})}),Object.values(me).forEach(L=>L.sort((Re,ot)=>Re.eff.localeCompare(ot.eff)));const D=(L,Re,ot)=>{const A=me[`${L}:${Re}`];if(A){let Z=null;for(const Te of A)if(Te.eff<=ot)Z=Te.rate;else break;if(Z!==null)return Z}return(L==="focus"?T[Re]:w[Re])||0},y=(L,Re)=>{const ot=me[`${L}:${Re}`];return ot&&ot.length?ot[ot.length-1].rate:(L==="focus"?T[Re]:w[Re])??""},[te,M]=Yv(Q);let ie=0,ve=0;n.filter(L=>L.completed).forEach(L=>{const Re=(L.started_at||L.created_at||"").slice(0,10),ot=Vt[L.tree]?L.tree:rn;ie+=(L.actual_min||0)/60*D("focus",ot,Re)}),i.forEach(L=>{id.has(L.screen)||(ve+=L.seconds/60*D("usage",L.screen,L.date))});const Ae=h.reduce((L,Re)=>L+(Re.reward||0),0),qe=m.filter(L=>L.status==="done"),Ye=qe.reduce((L,Re)=>L+(Re.reward_earned||0),0),Ke=(b.focus?ie:0)+(b.usage?ve:0)+(b.achievement?Ae:0)+(b.challenge?Ye:0),at=d.reduce((L,Re)=>L+Re.amount,0),Xe=Math.max(0,Ke-at),ft=L=>{let Re=0,ot=0;return b.focus&&n.filter(A=>A.completed).forEach(A=>{const Z=(A.started_at||A.created_at||"").slice(0,10);if(Z!==L)return;const Te=Vt[A.tree]?A.tree:rn;Re+=(A.actual_min||0)/60*D("focus",Te,Z)}),b.usage&&i.forEach(A=>{id.has(A.screen)||A.date!==L||(ot+=A.seconds/60*D("usage",A.screen,A.date))}),Re+ot},se=L=>{const Re=new Date;return Re.setDate(Re.getDate()+L),fr(Re)},We=[{label:"Today",value:ft(se(0)),color:Tn},{label:"Yesterday",value:ft(se(-1)),color:"var(--text-3)"},{label:"Day before",value:ft(se(-2)),color:"var(--text-3)"}],Ze={};rl.forEach(L=>Ze[L]={minutes:0,earned:0}),n.filter(L=>L.completed).forEach(L=>{const Re=(L.started_at||L.created_at||"").slice(0,10);if(Re<te||Re>M)return;const ot=Vt[L.tree]?L.tree:rn,A=L.actual_min||0;Ze[ot].minutes+=A,Ze[ot].earned+=A/60*D("focus",ot,Re)});const rt=b.focus?rl.reduce((L,Re)=>L+Ze[Re].earned,0):0,gt={};i.forEach(L=>{var ot;if(id.has(L.screen)||L.date<te||L.date>M)return;const Re=gt[ot=L.screen]||(gt[ot]={seconds:0,earned:0});Re.seconds+=L.seconds,Re.earned+=L.seconds/60*D("usage",L.screen,L.date)});const Rt=b.usage?Object.values(gt).reduce((L,Re)=>L+Re.earned,0):0,wt=h.filter(L=>L.date>=te&&L.date<=M&&(L.reward||0)>0),yt=[...wt].sort((L,Re)=>Re.date.localeCompare(L.date)||Re.reward-L.reward),bt=b.achievement?wt.reduce((L,Re)=>L+(Re.reward||0),0):0,Dt=qe.filter(L=>!L.end_date||L.end_date>=te&&L.end_date<=M),Sr=[...Dt].sort((L,Re)=>(Re.reward_earned||0)-(L.reward_earned||0)),k=b.challenge?Dt.reduce((L,Re)=>L+(Re.reward_earned||0),0):0,le=rt+Rt+bt+k,$e=le>0?rt/le*100:0,Le=le>0?Rt/le*100:0,et=le>0?bt/le*100:0,br=le>0?k/le*100:0,ut=rl.map(L=>({p:L,...Ze[L],...Vt[L]})).filter(L=>L.minutes>0).sort((L,Re)=>Re.earned-L.earned),H=pp.map(L=>({...L,...gt[L.id]||{seconds:0,earned:0}})).filter(L=>L.seconds>0).sort((L,Re)=>Re.earned-L.earned),ye=H.reduce((L,Re)=>L+Re.seconds,0);let Mt=0;const Pt=H.map((L,Re)=>{const ot=ye>0?Mt/ye*100:0;Mt+=L.seconds;const A=ye>0?Mt/ye*100:0;return{...L,color:mp[Re%mp.length],start:ot,end:A,pct:ye>0?L.seconds/ye*100:0}}),ir=Pt.length?`conic-gradient(${Pt.map(L=>`${L.color} ${L.start}% ${L.end}%`).join(", ")})`:"var(--surface-2)",Cr=async()=>{const L=Object.entries(I);for(const[Re,ot]of L)await F.setRewardRate({kind:"focus",rkey:Re,rate:Math.max(0,parseFloat(ot)||0)}).catch(()=>{});E({}),re(!1),X()},Sn=()=>{E({}),re(!1)},zr=async()=>{const L=Object.entries(S);for(const[Re,ot]of L)await F.setRewardRate({kind:"usage",rkey:Re,rate:Math.max(0,parseFloat(ot)||0)}).catch(()=>{});j({}),W(!1),X()},on=()=>{j({}),W(!1)},sr=L=>{u(Re=>{const ot={...Re,[L]:!Re[L]};return F.setSetting(bp,ot).catch(()=>{}),ot})},eo=L=>{Xe<=0||(we(L),ze(L==="all"?Xe.toFixed(2):""),U(""),oe(null))},Cn=async()=>{const L=Math.min(parseFloat(be)||0,Xe);L<=0||!K.trim()||(await F.createPayout({amount:L,note:K.trim(),date:Vv()}),we(null),ze(""),U(""),await ae(),x(!0))},pi=async()=>{!Me||(Me.cost||0)>Xe||(await F.fulfillBucketWish(Me.id).catch(()=>{}),we(null),oe(null),await Promise.all([ae(),P()]),x(!0))},bi=()=>{de(L=>{const Re=!L;return F.setSetting(hp,Re).catch(()=>{}),Re})},wa=async L=>{await F.deletePayout(L),ae()};return t.jsxs("div",{style:_.page,children:[t.jsxs("div",{style:_.head,children:[t.jsx("div",{style:_.eyebrow,children:"Anvil · Rewards"}),t.jsx("h1",{style:_.h1,children:"Rewards"}),t.jsx("div",{style:_.subhead,children:"Your earned rewards from focus and app usage."})]}),t.jsxs("div",{style:_.hero,children:[t.jsx("button",{onClick:()=>x(L=>!L),style:_.logIcon,title:"View reward log",children:t.jsx(b0,{size:16})}),t.jsx("div",{style:_.heroLabel,children:"Final reward · pending"}),t.jsx("div",{style:_.heroVal,children:r(Xe)}),t.jsxs("div",{style:_.heroSub,children:["Earned ",r(Ke)," · Taken ",r(at),Ae>0?` · incl. ${r(Ae)} achievement`:"",Ye>0?` · incl. ${r(Ye)} challenge`:""]}),t.jsxs("div",{style:_.heroBtns,children:[t.jsx("button",{onClick:()=>eo("partial"),disabled:Xe<=0,style:{..._.heroBtnGhost,...Xe<=0?_.btnDisabled:{}},children:"Take partial"}),t.jsx("button",{onClick:()=>eo("all"),disabled:Xe<=0,style:{..._.heroBtnSolid,...Xe<=0?_.btnDisabled:{}},children:"Take all pending"})]}),t.jsxs("button",{onClick:bi,style:_.bucketToggleRow,title:ge?"Taking will pick a bucket-list wish":"Taking uses a free amount",children:[t.jsx("span",{style:{..._.miniToggle,background:ge?"#fff":"rgba(255,255,255,0.3)",justifyContent:ge?"flex-end":"flex-start"},children:t.jsx("span",{style:{..._.miniKnob,background:ge?"var(--accent-strong)":"#fff"}})}),t.jsxs("span",{children:["Fulfil from bucket list",ge?" · on":" · off"]})]})]}),t.jsxs("div",{style:_.statRow,children:[t.jsxs("div",{style:_.statCard,children:[t.jsx("div",{style:_.statVal,children:r(at)}),t.jsx("div",{style:_.statLbl,children:"Total taken"})]}),t.jsxs("div",{style:_.statCard,children:[t.jsx("div",{style:{..._.statVal,color:Tn},children:r(Xe)}),t.jsx("div",{style:_.statLbl,children:"Total pending"})]})]}),t.jsxs("div",{style:_.card,children:[t.jsx("div",{style:_.threeDayTitle,children:"Earned · last 3 days"}),t.jsx(Qv,{items:We,reward:r})]}),t.jsx("div",{style:_.periodRow,children:Ro.map(L=>t.jsx("button",{onClick:()=>O(L.id),style:{..._.periodChip,...Q===L.id?_.periodChipOn:{}},children:L.label},L.id))}),le>0?t.jsxs("div",{style:_.card,children:[t.jsxs("div",{style:_.cardTitleRow,children:[t.jsx("span",{style:_.cardTitle,children:"Reward split"}),t.jsxs("span",{style:_.periodTotal,children:[r(le)," · ",Ro.find(L=>L.id===Q).label]})]}),t.jsxs("div",{style:_.splitTrack,children:[t.jsx("div",{style:{width:`${$e}%`,background:Tn,height:"100%"}}),t.jsx("div",{style:{width:`${Le}%`,background:Eo,height:"100%"}}),t.jsx("div",{style:{width:`${et}%`,background:oo,height:"100%"}}),t.jsx("div",{style:{width:`${br}%`,background:io,height:"100%"}})]}),t.jsxs("div",{style:_.legendRow,children:[t.jsxs("span",{style:_.legendItem,children:[t.jsx("span",{style:{..._.legendDot,background:Tn}})," Focus ",Math.round($e),"% · ",r(rt)]}),t.jsxs("span",{style:_.legendItem,children:[t.jsx("span",{style:{..._.legendDot,background:Eo}})," Usage ",Math.round(Le),"% · ",r(Rt)]}),t.jsxs("span",{style:_.legendItem,children:[t.jsx("span",{style:{..._.legendDot,background:oo}})," Achievement ",Math.round(et),"% · ",r(bt)]}),t.jsxs("span",{style:_.legendItem,children:[t.jsx("span",{style:{..._.legendDot,background:io}})," Challenges ",Math.round(br),"% · ",r(k)]})]})]}):t.jsxs("div",{style:{..._.card,..._.muted},children:["No rewards earned in ",Ro.find(L=>L.id===Q).label.toLowerCase(),"."]}),t.jsxs("div",{style:{..._.card,...b.focus?{}:_.cardOff},children:[t.jsxs("div",{style:_.sectionHead,children:[t.jsxs("span",{style:{..._.cardTitle,color:Tn},children:["Focus Rewards · ",r(rt)]}),t.jsxs("div",{style:_.sectionHeadRight,children:[b.focus&&t.jsx("button",{onClick:()=>Y?Sn():re(!0),style:_.collapseLink,children:Y?"Hide rates":"Set rates"}),t.jsx(nl,{on:b.focus,onClick:()=>sr("focus"),color:Tn})]})]}),b.focus&&Y&&t.jsxs("div",{style:{marginTop:12},children:[t.jsx("div",{style:_.rateGrid,children:rl.map(L=>t.jsxs("div",{style:_.rateRow,children:[t.jsx("span",{style:{..._.dot,background:Vt[L].leaf}}),t.jsx("span",{style:_.rateName,children:Vt[L].label}),t.jsxs("div",{style:_.rateInputWrap,children:[t.jsx("span",{style:_.unitSign,children:e.symbol}),t.jsx("input",{type:"number",min:"0",step:"0.5",inputMode:"decimal",placeholder:"0",value:I[L]!==void 0?I[L]:y("focus",L),onChange:Re=>E(ot=>({...ot,[L]:Re.target.value})),style:_.rateInput}),t.jsx("span",{style:_.unit,children:"/hr"})]})]},L))}),t.jsxs("div",{style:_.rateActions,children:[t.jsx("button",{onClick:Sn,style:_.rateCancel,children:"Cancel"}),t.jsx("button",{onClick:Cr,style:_.rateSave,children:"Save"})]})]}),b.focus?ut.length>0?t.jsx("div",{style:{..._.rows,marginTop:14},children:ut.map(L=>t.jsxs("div",{style:_.row,children:[t.jsx("span",{style:{..._.dot,background:L.leaf}}),t.jsx("span",{style:_.rowName,children:L.label}),t.jsx("span",{style:_.rowMeta,children:Uv(Math.round(L.minutes))}),t.jsx("span",{style:_.rowAmt,children:r(L.earned)})]},L.p))}):t.jsx("div",{style:_.muted,children:"No focus sessions yet."}):t.jsx("div",{style:_.muted,children:"Focus rewards are disabled — no reward is being calculated."})]}),t.jsxs("div",{style:{..._.card,...b.usage?{}:_.cardOff},children:[t.jsxs("div",{style:_.sectionHead,children:[t.jsxs("span",{style:{..._.cardTitle,color:Eo},children:["Usage Rewards · ",r(Rt)]}),t.jsxs("div",{style:_.sectionHeadRight,children:[b.usage&&t.jsx("button",{onClick:()=>ee?on():W(!0),style:_.collapseLink,children:ee?"Hide rates":"Set rates"}),t.jsx(nl,{on:b.usage,onClick:()=>sr("usage"),color:Eo})]})]}),b.usage&&ee&&t.jsxs("div",{style:{marginTop:12},children:[t.jsx("div",{style:_.rateGrid,children:pp.map(L=>t.jsxs("div",{style:_.rateRow,children:[t.jsx("span",{style:_.rateName,children:L.label}),t.jsxs("div",{style:_.rateInputWrap,children:[t.jsx("span",{style:_.unitSign,children:e.symbol}),t.jsx("input",{type:"number",min:"0",step:"0.1",inputMode:"decimal",placeholder:"0",value:S[L.id]!==void 0?S[L.id]:y("usage",L.id),onChange:Re=>j(ot=>({...ot,[L.id]:Re.target.value})),style:_.rateInput}),t.jsx("span",{style:_.unit,children:"/min"})]})]},L.id))}),t.jsxs("div",{style:_.rateActions,children:[t.jsx("button",{onClick:on,style:_.rateCancel,children:"Cancel"}),t.jsx("button",{onClick:zr,style:_.rateSave,children:"Save"})]})]}),b.usage?H.length>0?t.jsx("div",{style:{..._.rows,marginTop:14},children:H.map(L=>t.jsxs("div",{style:_.row,children:[t.jsx("span",{style:_.rowName,children:L.label}),t.jsx("span",{style:_.rowMeta,children:sd(L.seconds/60)}),t.jsx("span",{style:_.rowAmt,children:r(L.earned)})]},L.id))}):t.jsx("div",{style:_.muted,children:z?"No usage tracked yet.":"Loading…"}):t.jsx("div",{style:_.muted,children:"Usage rewards are disabled — no reward is being calculated."}),b.usage&&ye>0&&t.jsxs("div",{style:_.usagePieBlock,children:[t.jsxs("div",{style:_.usagePieTitle,children:["Most-used screens · ",Ro.find(L=>L.id===Q).label]}),t.jsxs("div",{style:_.pieWrap,children:[t.jsxs("div",{style:_.pieChart,children:[t.jsx("div",{style:{..._.pieDisc,background:ir}}),t.jsxs("div",{style:_.pieHole,children:[t.jsx("span",{style:_.pieHoleVal,children:sd(ye/60)}),t.jsx("span",{style:_.pieHoleLbl,children:"total time"})]})]}),t.jsx("div",{style:_.pieLegend,children:Pt.map(L=>t.jsxs("div",{style:_.pieLegRow,children:[t.jsx("span",{style:{..._.legendDot,background:L.color}}),t.jsx("span",{style:_.pieLegName,children:L.label}),t.jsxs("span",{style:_.pieLegPct,children:[Math.round(L.pct),"%"]}),t.jsx("span",{style:_.pieLegMin,children:sd(L.seconds/60)})]},L.id))})]})]})]}),t.jsxs("div",{style:{..._.card,...b.achievement?{}:_.cardOff},children:[t.jsxs("div",{style:_.sectionHead,children:[t.jsxs("span",{style:{..._.cardTitle,color:oo},children:["Achievement Rewards · ",r(bt)]}),t.jsxs("div",{style:_.sectionHeadRight,children:[b.achievement&&t.jsx("span",{style:_.collapseHint,children:"Set in Achievements"}),t.jsx(nl,{on:b.achievement,onClick:()=>sr("achievement"),color:oo})]})]}),b.achievement?yt.length>0?t.jsx("div",{style:{..._.rows,marginTop:14},children:yt.map(L=>t.jsxs("div",{style:_.row,children:[t.jsx("span",{style:{..._.dot,background:oo}}),t.jsx("span",{style:_.rowName,children:L.title}),t.jsx("span",{style:_.rowMeta,children:fp(L.date)}),t.jsx("span",{style:_.rowAmt,children:r(L.reward)})]},L.id))}):t.jsxs("div",{style:{..._.muted,marginTop:10},children:["No achievement rewards in ",Ro.find(L=>L.id===Q).label.toLowerCase(),". Add a reward to a win in the Achievements section."]}):t.jsx("div",{style:{..._.muted,marginTop:10},children:"Achievement rewards are disabled — no reward is being calculated."})]}),t.jsxs("div",{style:{..._.card,...b.challenge?{}:_.cardOff},children:[t.jsxs("div",{style:_.sectionHead,children:[t.jsxs("span",{style:{..._.cardTitle,color:io},children:["Challenge Rewards · ",r(k)]}),t.jsxs("div",{style:_.sectionHeadRight,children:[b.challenge&&t.jsx("span",{style:_.collapseHint,children:"Set in Challenges"}),t.jsx(nl,{on:b.challenge,onClick:()=>sr("challenge"),color:io})]})]}),b.challenge?Sr.length>0?t.jsx("div",{style:{..._.rows,marginTop:14},children:Sr.map(L=>t.jsxs("div",{style:_.row,children:[t.jsx("span",{style:{..._.dot,background:io}}),t.jsx("span",{style:_.rowName,children:L.name}),t.jsx("span",{style:_.rowMeta,children:L.reward||"Completed"}),t.jsx("span",{style:_.rowAmt,children:r(L.reward_earned)})]},L.id))}):t.jsxs("div",{style:{..._.muted,marginTop:10},children:["No completed challenges in ",Ro.find(L=>L.id===Q).label.toLowerCase(),". Finish a challenge in the Challenges section to bank its reward."]}):t.jsx("div",{style:{..._.muted,marginTop:10},children:"Challenge rewards are disabled — no reward is being calculated."})]}),ce&&t.jsx("div",{style:_.modalOverlay,onClick:()=>x(!1),children:t.jsxs("div",{style:_.logModal,onClick:L=>L.stopPropagation(),children:[t.jsxs("div",{style:_.logModalHead,children:[t.jsx("span",{style:_.modalTitle,children:"Reward log"}),t.jsx("button",{onClick:()=>x(!1),style:_.logClose,title:"Close",children:t.jsx(Fe,{size:16})})]}),d.length===0?t.jsx("div",{style:{..._.muted,padding:"24px 0",textAlign:"center"},children:"No rewards taken yet."}):t.jsxs(t.Fragment,{children:[t.jsx("div",{style:_.logScroll,children:d.map(L=>t.jsxs("div",{style:_.row,children:[t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:_.logNote,children:L.note||"Reward taken"}),t.jsx("div",{style:_.rowMeta,children:fp(L.date)})]}),t.jsx("span",{style:_.rowAmt,children:r(L.amount)}),t.jsx("button",{onClick:()=>wa(L.id),style:_.del,children:"×"})]},L.id))}),t.jsxs("div",{style:_.totalRow,children:[t.jsx("span",{children:"Total taken"}),t.jsx("span",{style:_.totalVal,children:r(at)})]})]})]})}),le>0&&t.jsxs("div",{style:_.card,children:[t.jsx("div",{style:_.cardTitle,children:"Reward breakdown"}),t.jsxs("div",{style:_.pieWrap,children:[t.jsxs("div",{style:_.pieChart,children:[t.jsx("div",{style:{..._.pieDisc,background:`conic-gradient(${Tn} 0 ${$e}%, ${Eo} ${$e}% ${$e+Le}%, ${oo} ${$e+Le}% ${$e+Le+et}%, ${io} ${$e+Le+et}% 100%)`}}),t.jsxs("div",{style:_.pieHole,children:[t.jsx("span",{style:_.pieHoleVal,children:r(le)}),t.jsx("span",{style:_.pieHoleLbl,children:"total"})]})]}),t.jsxs("div",{style:_.pieLegend,children:[t.jsxs("div",{style:_.pieLegRow,children:[t.jsx("span",{style:{..._.legendDot,background:Tn}}),t.jsx("span",{style:_.pieLegName,children:"Focus"}),t.jsxs("span",{style:_.pieLegPct,children:[Math.round($e),"%"]}),t.jsx("span",{style:_.pieLegMin,children:r(rt)})]}),t.jsxs("div",{style:_.pieLegRow,children:[t.jsx("span",{style:{..._.legendDot,background:Eo}}),t.jsx("span",{style:_.pieLegName,children:"Usage"}),t.jsxs("span",{style:_.pieLegPct,children:[Math.round(Le),"%"]}),t.jsx("span",{style:_.pieLegMin,children:r(Rt)})]}),t.jsxs("div",{style:_.pieLegRow,children:[t.jsx("span",{style:{..._.legendDot,background:oo}}),t.jsx("span",{style:_.pieLegName,children:"Achievement"}),t.jsxs("span",{style:_.pieLegPct,children:[Math.round(et),"%"]}),t.jsx("span",{style:_.pieLegMin,children:r(bt)})]}),t.jsxs("div",{style:_.pieLegRow,children:[t.jsx("span",{style:{..._.legendDot,background:io}}),t.jsx("span",{style:_.pieLegName,children:"Challenges"}),t.jsxs("span",{style:_.pieLegPct,children:[Math.round(br),"%"]}),t.jsx("span",{style:_.pieLegMin,children:r(k)})]})]})]})]}),he&&t.jsx("div",{style:_.modalOverlay,onClick:()=>we(null),children:t.jsxs("div",{style:_.modalCard,onClick:L=>L.stopPropagation(),children:[t.jsx("div",{style:_.modalTitle,children:he==="all"?"Take all pending reward?":"Take partial reward"}),t.jsxs("div",{style:_.modalSub,children:["Pending: ",r(Xe)]}),ge?(()=>{const L=G.filter(A=>!A.fulfilled),Re=Me&&(Me.cost||0)>Xe,ot=Me&&!Re;return t.jsxs(t.Fragment,{children:[L.length===0?t.jsx("div",{style:_.wishEmpty,children:"No unfulfilled wishes. Add some in the Bucket List section."}):t.jsx("div",{style:_.wishList,children:L.map((A,Z)=>{const Te=(A.cost||0)>Xe,Pe=(Me==null?void 0:Me.id)===A.id;return t.jsxs("button",{onClick:()=>!Te&&oe(A),disabled:Te,style:{..._.wishRow,...Pe?_.wishRowOn:{},...Te?_.wishRowOver:{}},children:[t.jsx("span",{style:_.wishRank,children:Z+1}),t.jsx("span",{style:_.wishName,children:A.wish}),t.jsxs("span",{style:_.wishCost,children:[r(A.cost),Te?" · too costly":""]})]},A.id)})}),t.jsxs("div",{style:_.modalActions,children:[t.jsx("button",{onClick:()=>we(null),style:_.modalCancel,children:"Cancel"}),t.jsx("button",{onClick:pi,disabled:!ot,style:{..._.modalConfirm,...ot?{}:{opacity:.5,cursor:"not-allowed"}},children:Me?`Fulfil · ${r(Me.cost)}`:"Pick a wish"})]})]})})():t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:_.modalInputWrap,children:[t.jsx("span",{style:_.modalSign,children:e.symbol}),t.jsx("input",{type:"number",min:"0",step:"0.01",autoFocus:!0,placeholder:Xe.toFixed(2),value:be,onChange:L=>ze(L.target.value),style:_.modalAmt})]}),t.jsx("input",{placeholder:"What is this reward for? (required)",value:K,onChange:L=>U(L.target.value),onKeyDown:L=>L.key==="Enter"&&Cn(),style:_.modalReason}),(()=>{const L=parseFloat(be)>0&&!!K.trim();return t.jsxs("div",{style:_.modalActions,children:[t.jsx("button",{onClick:()=>we(null),style:_.modalCancel,children:"Cancel"}),t.jsxs("button",{onClick:Cn,disabled:!L,style:{..._.modalConfirm,...L?{}:{opacity:.5,cursor:"not-allowed"}},children:["Confirm · ",r(Math.min(parseFloat(be)||0,Xe))]})]})})()]})]})}),t.jsx("div",{style:_.note,children:"Set rates only affect time from today onward — past time keeps the rate it was earned at."})]})}function nl({on:e,onClick:r,color:n}){return t.jsx("button",{onClick:r,title:e?"Disable — stop calculating this reward":"Enable this reward",style:{..._.toggle,background:e?n:"var(--border)",justifyContent:e?"flex-end":"flex-start"},children:t.jsx("span",{style:_.toggleKnob})})}function Qv({items:e,reward:r}){const n=Math.max(1,...e.map(o=>o.value));return t.jsx("div",{style:_.tbWrap,children:e.map((o,i)=>t.jsxs("div",{style:_.tbRow,children:[t.jsx("div",{style:_.tbLbl,children:o.label}),t.jsx("div",{style:_.tbTrack,children:t.jsx("div",{style:{..._.tbBar,width:`${o.value/n*100}%`,background:o.color}})}),t.jsx("div",{style:_.tbVal,children:r(o.value)})]},i))})}const _={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},hero:{position:"relative",background:"linear-gradient(135deg,var(--accent-strong),var(--accent-2))",borderRadius:16,padding:"22px 24px",color:"#fff",marginBottom:14,textAlign:"center"},logIcon:{position:"absolute",top:12,right:12,border:"1px solid rgba(255,255,255,0.5)",background:"rgba(255,255,255,0.12)",color:"#fff",width:32,height:32,borderRadius:9,cursor:"pointer",display:"grid",placeItems:"center"},logClose:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:28,height:28,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},logNote:{fontSize:13.5,fontWeight:600,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modalCard:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"22px 22px 18px",width:360,maxWidth:"100%",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)"},logModal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"18px 18px 14px",width:440,maxWidth:"100%",maxHeight:"82vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",boxSizing:"border-box"},logModalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8,flexShrink:0},logScroll:{overflowY:"auto",display:"flex",flexDirection:"column",gap:2,paddingRight:2,minHeight:0},modalTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:4},modalSub:{fontSize:12.5,color:"var(--text-3)",fontWeight:600,marginBottom:14},modalInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:10,padding:"8px 12px",background:"var(--surface-2)",marginBottom:8},modalSign:{fontSize:16,color:"var(--text-2)",fontWeight:700},modalAmt:{border:"none",background:"none",outline:"none",flex:1,fontSize:18,fontWeight:700,fontFamily:"inherit",color:"var(--text)"},modalReason:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:14},modalActions:{display:"flex",gap:8},modalCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalConfirm:{flex:1,border:"none",background:"#C9A227",color:"#fff",padding:"10px 14px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},bucketToggleRow:{display:"inline-flex",alignItems:"center",gap:8,margin:"12px auto 0",border:"none",background:"rgba(255,255,255,0.12)",color:"#fff",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},miniToggle:{display:"flex",alignItems:"center",width:32,height:18,borderRadius:10,padding:2,flexShrink:0,transition:"background 0.15s"},miniKnob:{width:14,height:14,borderRadius:"50%",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},wishList:{display:"flex",flexDirection:"column",gap:6,maxHeight:300,overflowY:"auto",margin:"4px 0 4px"},wishRow:{display:"flex",alignItems:"center",gap:10,width:"100%",textAlign:"left",border:"1px solid var(--border)",background:"var(--surface)",borderRadius:10,padding:"10px 12px",cursor:"pointer",fontFamily:"inherit"},wishRowOn:{borderColor:"var(--accent-strong)",background:"var(--hover)",boxShadow:"0 0 0 1px var(--accent-strong)"},wishRowOver:{opacity:.5,cursor:"not-allowed"},wishRank:{fontSize:12,fontWeight:800,color:"var(--text-3)",fontFamily:"'Fraunces',Georgia,serif",flexShrink:0},wishName:{flex:1,fontSize:13.5,fontWeight:700,color:"var(--text)",minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},wishCost:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--accent-strong)",flexShrink:0},wishEmpty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"20px 0"},heroLabel:{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",opacity:.85},heroVal:{fontSize:44,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,lineHeight:1.05},heroSub:{fontSize:12.5,opacity:.9,marginTop:6},heroBtns:{display:"flex",gap:10,marginTop:16,justifyContent:"center"},heroBtnSolid:{border:"none",background:"#fff",color:"var(--accent-strong)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},heroBtnGhost:{border:"1px solid rgba(255,255,255,0.6)",background:"transparent",color:"#fff",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},btnDisabled:{opacity:.45,cursor:"not-allowed"},statRow:{display:"flex",gap:10,marginBottom:14},statCard:{flex:1,background:"var(--surface)",borderRadius:12,padding:"12px 14px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},threeDayTitle:{fontSize:13,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:84,fontSize:11.5,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap"},tbTrack:{flex:1,height:14,background:"var(--surface-2)",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:76,fontSize:11.5,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"},statVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},card:{background:"var(--surface)",borderRadius:16,padding:"18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:10,flexWrap:"wrap"},periodTotal:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text-2)"},periodRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},periodChip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},periodChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},collapseHint:{fontSize:12,fontWeight:700,color:"var(--accent)"},sectionHead:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,flexWrap:"wrap"},sectionHeadRight:{display:"flex",alignItems:"center",gap:12},collapseLink:{border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"inherit",fontSize:12,fontWeight:700,color:"var(--accent)"},cardOff:{opacity:.62},toggle:{border:"none",cursor:"pointer",width:40,height:22,borderRadius:11,padding:2,display:"flex",alignItems:"center",transition:"background 0.15s",flexShrink:0},toggleKnob:{width:18,height:18,borderRadius:"50%",background:"#fff",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"12px 0"},splitTrack:{display:"flex",height:16,borderRadius:8,overflow:"hidden",marginTop:12,marginBottom:12,border:"1px solid var(--border)"},legendRow:{display:"flex",gap:16,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:600,color:"var(--text-2)"},legendDot:{width:10,height:10,borderRadius:3,flexShrink:0},usagePieBlock:{marginTop:16,paddingTop:14,borderTop:"1px solid var(--border)"},usagePieTitle:{fontSize:12.5,fontWeight:700,color:"var(--text-2)",marginBottom:6},pieWrap:{display:"flex",alignItems:"center",gap:20,flexWrap:"wrap",marginTop:6},pieChart:{position:"relative",width:130,height:130,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:78,height:78,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:10},pieLegRow:{display:"flex",alignItems:"center",gap:8},pieLegName:{flex:1,fontSize:13.5,fontWeight:600},pieLegPct:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",width:46,textAlign:"right"},pieLegMin:{fontSize:12,color:"var(--text-3)",fontWeight:600,minWidth:64,textAlign:"right"},rows:{display:"flex",flexDirection:"column",gap:2},row:{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:"1px solid var(--border)"},dot:{width:10,height:10,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:13.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},rowMeta:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,flexShrink:0},rowAmt:{fontSize:13.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",flexShrink:0,minWidth:64,textAlign:"right"},del:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",fontSize:16,lineHeight:1,padding:"0 2px",flexShrink:0},totalRow:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:10,marginTop:4,fontSize:14,fontWeight:700},totalVal:{fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},rateActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:14},rateCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},rateSave:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},rateGrid:{display:"flex",flexDirection:"column",gap:10},rateRow:{display:"flex",alignItems:"center",gap:8},rateName:{flex:1,fontSize:14,fontWeight:600},rateInputWrap:{display:"flex",alignItems:"center",gap:3,border:"1px solid var(--border)",borderRadius:9,padding:"4px 10px",background:"var(--surface-2)"},unitSign:{fontSize:14,color:"var(--text-2)",fontWeight:600},rateInput:{border:"none",background:"none",outline:"none",width:64,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},unit:{fontSize:12,color:"var(--text-3)",fontWeight:600},note:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",fontStyle:"italic",marginTop:4}};function qv(){return t.jsx("div",{style:In.page,children:t.jsxs("div",{style:In.card,children:[t.jsxs("div",{style:In.brand,children:[t.jsx("div",{style:In.logo,children:"B"}),t.jsx("span",{style:In.brandName,children:"Anvil"})]}),t.jsx("h1",{style:In.title,children:"Welcome to Anvil"}),t.jsx("p",{style:In.sub,children:"Sign in with Google to continue."}),t.jsxs("button",{onClick:()=>F.signInWithGoogle(),style:In.googleBtn,children:[t.jsx(Xv,{}),"Sign in with Google"]})]})})}function Xv(){return t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[t.jsx("path",{fill:"#4285F4",d:"M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84c-.21 1.13-.85 2.09-1.81 2.73v2.27h2.92c1.71-1.57 2.69-3.88 2.69-6.64z"}),t.jsx("path",{fill:"#34A853",d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.27c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.71H.96v2.34C2.44 15.98 5.48 18 9 18z"}),t.jsx("path",{fill:"#FBBC05",d:"M3.97 10.7c-.18-.54-.28-1.11-.28-1.7s.1-1.16.28-1.7V4.96H.96A8.997 8.997 0 0 0 0 9c0 1.45.35 2.83.96 4.04l3.01-2.34z"}),t.jsx("path",{fill:"#EA4335",d:"M9 3.58c1.32 0 2.51.45 3.44 1.35l2.59-2.59C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l3.01 2.34C4.68 5.16 6.66 3.58 9 3.58z"})]})}const In={page:{minHeight:"100vh",display:"grid",placeItems:"center",background:"var(--bg)",fontFamily:"'Inter',system-ui,sans-serif",padding:20},card:{width:"100%",maxWidth:380,background:"var(--surface)",borderRadius:16,padding:"32px 28px",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",display:"flex",flexDirection:"column",textAlign:"center"},brand:{display:"flex",alignItems:"center",justifyContent:"center",gap:9,marginBottom:20},logo:{width:32,height:32,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},brandName:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},title:{fontSize:22,fontWeight:700,margin:"0 0 4px",fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},sub:{fontSize:13.5,color:"var(--text-3)",margin:"0 0 24px"},googleBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,border:"1px solid var(--border)",background:"#fff",color:"#26241F",padding:"12px",borderRadius:10,fontSize:14.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},vc=1,Am="anvil_month_start_day";function jc(){try{return Number(localStorage.getItem(Am))||vc}catch{return vc}}function yp(e){const r=Math.min(28,Math.max(1,Number(e)||vc));try{localStorage.setItem(Am,String(r))}catch{}return window.dispatchEvent(new CustomEvent("anvil-month-start",{detail:r})),r}function Wm(){const[e,r]=c.useState(jc());return c.useEffect(()=>{const n=o=>r(o.detail||jc());return window.addEventListener("anvil-month-start",n),()=>window.removeEventListener("anvil-month-start",n)},[]),e}const vp=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;function Ir(e,r,n=0){const o=e.getFullYear(),i=e.getMonth(),l=e.getDate()>=r?i:i-1,a=new Date(o,l+n,r),d=new Date(o,l+n+1,r-1);return[vp(a),vp(d)]}function Zv(e=600){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const jp=["Salary","Stocks","Business","Interest","Rent","Gift","Other"],Jv=["Bills","EMI","Rent","Food","Shopping","Transport","Health","Entertainment","Education","Other"],kp=["Stocks","Mutual Fund","SIP","Fixed Deposit","Gold","Real Estate","PPF/EPF","Crypto","Other"],e1={Salary:"#4C9A6B",Stocks:"#3A7CA5",Business:"#C9A227",Interest:"#8268B0",Gift:"#C2773B",Bills:"#C2536B",EMI:"#A23E57",Food:"#E08E45",Shopping:"#8268B0",Transport:"#3A7CA5",Health:"#4C9A6B",Entertainment:"#C9A227",Education:"#5B7C99",Rent:"#5B8C5A",Other:"#9A968C"},Dg=e=>e1[e]||"#9A968C",t1={Stocks:"#2F6B4F","Mutual Fund":"#3E9E6B",SIP:"#4FAE7E","Fixed Deposit":"#6BBE92",Gold:"#8ECDA8","Real Estate":"#1F5C3F","PPF/EPF":"#5BAE83",Crypto:"#7FC79E",Other:"#9AD4B3"},r1=e=>t1[e]||"#4C9A6B",pn="#3E9E6B",Br="#D1556E",Zr="#3A7CA5",ld="#8268B0",Mm=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Wo=Mm(new Date),n1=[{id:"month",label:"This month"},{id:"last",label:"Last month"},{id:"year",label:"This year"},{id:"all",label:"All time"}];function o1(e,r){const n=new Date;return e==="month"?Ir(n,r):e==="last"?Ir(n,r,-1):e==="year"?[Mm(new Date(n.getFullYear(),0,1)),Wo]:["0000-01-01","9999-12-31"]}function i1(){const e=Jn(),[r,n]=c.useState("overview"),[o,i]=c.useState([]),[s,l]=c.useState([]),[a,d]=c.useState([]),[g,h]=c.useState([]),[f,m]=c.useState([]),[B,T]=c.useState(!1),R=c.useCallback(()=>Promise.all([F.getTxns(),F.getExpenses(),F.getInvestments()]).then(([I,E,S])=>(i(I),l(E.categories),d(E.logs),h(S),F.getFixedItems())).then(m).then(()=>T(!0)).catch(()=>T(!0)),[]);c.useEffect(()=>{R()},[R]);const w=c.useMemo(()=>{const I={};return s.forEach(E=>I[E.id]=E),I},[s]),p=c.useMemo(()=>a.map(I=>{var E;return{id:`exp-${I.id}`,rawId:I.id,source:"expense",kind:"expense",category:((E=w[I.category_id])==null?void 0:E.name)||"Other",amount:I.amount,note:I.note,date:I.date}}),[a,w]),b=c.useMemo(()=>o.filter(I=>I.kind==="expense").map(I=>({...I,source:"legacy"})),[o]),u=c.useMemo(()=>o.filter(I=>I.kind==="income").map(I=>({...I,source:"legacy"})),[o]),z=c.useMemo(()=>[...u,...b,...p].sort((I,E)=>E.date.localeCompare(I.date)),[u,b,p]),v=I=>js(I,e.code);return t.jsxs("div",{style:C.page,children:[t.jsxs("div",{style:C.head,children:[t.jsx("div",{style:C.eyebrow,children:"Anvil · Wallet"}),t.jsx("h1",{style:C.h1,children:"Wallet"}),t.jsx("div",{style:C.subhead,children:"Your money — what comes in, what goes out, and where it's headed."})]}),t.jsx("div",{style:C.tabs,children:[["overview","Overview",lm],["money","Money",ja],["calc","Calculators",Ey]].map(([I,E,S])=>t.jsxs("button",{onClick:()=>n(I),style:{...C.tab,...r===I?C.tabOn:{}},children:[t.jsx(S,{size:15})," ",E]},I))}),r==="overview"&&t.jsx(s1,{txns:z,investments:g,loaded:B,money:v,cur:e}),r==="money"&&t.jsx(d1,{txns:z,expCats:s,investments:g,fixedItems:f,reload:R,money:v,cur:e}),r==="calc"&&t.jsx(c1,{money:v,cur:e})]})}function s1({txns:e,investments:r,loaded:n,money:o,cur:i}){const s=Wm(),l=Zv(),[a,d]=c.useState("month"),[g,h]=o1(a,s),f=c.useMemo(()=>e.filter(re=>re.date>=g&&re.date<=h),[e,g,h]),m=f.filter(re=>re.kind==="income"),B=f.filter(re=>re.kind==="expense"),T=m.reduce((re,ee)=>re+ee.amount,0),R=B.reduce((re,ee)=>re+ee.amount,0),w=c.useMemo(()=>r.filter(re=>re.date>=g&&re.date<=h),[r,g,h]),p=w.reduce((re,ee)=>re+ee.invested,0),b=R+p,u=T-b,z=r.reduce((re,ee)=>re+ee.invested,0),v=r.reduce((re,ee)=>re+ee.current_value,0),I=v-z,E=re=>{const ee={};return re.forEach(W=>{ee[W.category]=(ee[W.category]||0)+W.amount}),Object.entries(ee).map(([W,he])=>({category:W,amount:he,color:Dg(W)})).sort((W,he)=>he.amount-W.amount)},S=E(B),j=c.useMemo(()=>{const re={};return w.forEach(ee=>{re[ee.kind]=(re[ee.kind]||0)+ee.invested}),Object.entries(re).map(([ee,W])=>({category:ee,amount:W,color:r1(ee)})).sort((ee,W)=>W.amount-ee.amount)},[w]),Y=[...S,...j];return t.jsxs(t.Fragment,{children:[t.jsx("div",{style:C.presetRow,children:n1.map(re=>t.jsx("button",{onClick:()=>d(re.id),style:{...C.preset,...a===re.id?C.presetOn:{}},children:re.label},re.id))}),t.jsxs("div",{style:{...C.sumGrid,gridTemplateColumns:l?"repeat(2,1fr)":"repeat(4,1fr)"},children:[t.jsx(ol,{icon:t.jsx(jy,{size:16}),label:"Income",value:o(T),color:pn}),t.jsx(ol,{icon:t.jsx(sm,{size:16}),label:"Expenses",value:o(R),color:Br}),t.jsx(ol,{icon:t.jsx(Vi,{size:16}),label:"Invested",value:o(p),color:Zr}),t.jsx(ol,{icon:u>=0?t.jsx(mm,{size:16}):t.jsx(Vn,{size:16}),label:"Remaining",value:o(u),color:u>=0?pn:Br})]}),p>0&&t.jsxs("div",{style:C.investNote,children:[t.jsx(Vi,{size:13,color:Zr})," ",o(p)," invested this period — counted as outgoing and deducted from what remains."]}),r.length>0&&t.jsxs("div",{style:C.card,children:[t.jsxs("div",{style:C.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(Vi,{size:18,color:Zr}),t.jsxs("div",{children:[t.jsx("div",{style:C.cardTitle,children:"Assets & investments"}),t.jsx("div",{style:C.cardSub,children:"Across all your holdings, all time"})]})]}),t.jsx("div",{style:{...C.cardTotal,color:Zr},children:o(v)})]}),t.jsxs("div",{style:C.healthStats,children:[t.jsxs("div",{style:C.healthStat,children:[t.jsx("span",{style:C.healthStatV,children:o(z)}),t.jsx("span",{style:C.healthStatL,children:"Total invested"})]}),t.jsxs("div",{style:C.healthStat,children:[t.jsxs("span",{style:{...C.healthStatV,color:I>=0?pn:Br},children:[I>=0?"+":"",o(I)]}),t.jsx("span",{style:C.healthStatL,children:"Unrealized gain"})]})]})]}),n?f.length===0&&w.length===0?t.jsx("div",{style:C.card,children:t.jsxs("div",{style:C.muted,children:["No transactions in this period. Add some under the ",t.jsx("b",{children:"Money"})," tab."]})}):t.jsxs(t.Fragment,{children:[t.jsx(a1,{totalIn:T,totalOut:b}),t.jsxs("div",{style:C.twoCol,children:[t.jsx(wp,{title:"Incoming",subtitle:"Where your money comes from",total:T,data:E(m),accent:pn,cur:i}),t.jsx(wp,{title:"Outgoing",subtitle:"Spending + money set aside in investments",total:b,data:Y,accent:Br,cur:i})]})]}):t.jsx("div",{style:C.muted,children:"Loading…"})]})}function ol({icon:e,wideIcon:r,label:n,value:o,color:i,style:s,wide:l}){return l?t.jsxs("div",{style:{...C.sumCard,...C.sumCardWide,...s},children:[t.jsx("div",{style:{...C.sumIconWide,color:i,background:i+"1A"},children:r||e}),t.jsxs("div",{style:C.sumWideText,children:[t.jsx("div",{style:C.sumLabel,children:n}),t.jsx("div",{style:{...C.sumVal,color:i,marginTop:0},children:o})]})]}):t.jsxs("div",{style:{...C.sumCard,...s},children:[t.jsx("div",{style:{...C.sumIcon,color:i,background:i+"1A"},children:e}),t.jsx("div",{style:C.sumLabel,children:n}),t.jsx("div",{style:{...C.sumVal,color:i},children:o})]})}function wp({title:e,subtitle:r,total:n,data:o,accent:i,cur:s}){const[l,a]=c.useState(null);let d=0;const g=o.map(m=>{const B=n>0?d/n*100:0;d+=m.amount;const T=n>0?d/n*100:0;return{...m,start:B,end:T,color:m.color||Dg(m.category),pct:n>0?m.amount/n*100:0}}),h=l!=null?g[l]:null,f=g.length===1;return t.jsxs("div",{style:C.card,children:[t.jsxs("div",{style:C.cardTitleRow,children:[t.jsxs("div",{children:[t.jsx("div",{style:{...C.cardTitle,color:i},children:e}),t.jsx("div",{style:C.cardSub,children:r})]}),t.jsx("div",{style:{...C.cardTotal,color:i},children:js(n,s.code)})]}),o.length===0?t.jsx("div",{style:C.muted,children:"Nothing logged."}):t.jsxs("div",{style:C.pieWrap,children:[t.jsxs("div",{style:C.pieChart,onMouseLeave:()=>a(null),children:[t.jsx("svg",{viewBox:"0 0 120 120",style:C.pieSvg,children:g.map((m,B)=>t.jsx("path",{d:l1(m.start,m.end,B===l,f),fill:m.color,onMouseEnter:()=>a(B),style:{cursor:"pointer",transition:"transform 0.15s, filter 0.15s",filter:B===l?"brightness(1.08)":"none"}},m.category))}),t.jsx("div",{style:{...C.pieHole,...h?{transform:"translate(-50%,-50%) scale(1.06)",boxShadow:`0 0 0 4px ${h.color}33`}:{}},children:h?t.jsxs(t.Fragment,{children:[t.jsx("span",{style:{...C.pieHoleVal,color:h.color,fontSize:13},children:Uu(h.amount,s.code)}),t.jsxs("span",{style:C.pieHoleLbl,children:[Math.round(h.pct),"% · ",h.category]})]}):t.jsxs(t.Fragment,{children:[t.jsx("span",{style:C.pieHoleVal,children:Uu(n,s.code)}),t.jsx("span",{style:C.pieHoleLbl,children:"total"})]})})]}),t.jsx("div",{style:C.pieLegend,children:g.map((m,B)=>t.jsxs("div",{style:{...C.legendRow,...B===l?C.legendRowOn:{}},onMouseEnter:()=>a(B),onMouseLeave:()=>a(null),children:[t.jsx("span",{style:{...C.dot,background:m.color}}),t.jsx("span",{style:C.legendName,children:m.category}),t.jsxs("span",{style:C.legendPct,children:[Math.round(m.pct),"%"]}),t.jsx("span",{style:C.legendAmt,children:js(m.amount,s.code)})]},m.category))})]})]})}function l1(e,r,n,o){const d=n?6:0,g=(I,E,S=0,j=0)=>{const Y=I/100*2*Math.PI-Math.PI/2;return[60+S+E*Math.cos(Y),60+j+E*Math.sin(Y)]},h=(e+r)/2/100*2*Math.PI-Math.PI/2,f=o?0:Math.cos(h)*d,m=o?0:Math.sin(h)*d;if(r-e>=99.999)return`M ${60+f} ${60+m-58} A 58 58 0 1 1 ${60+f-.01} ${60+m-58} L ${60+f-.01} ${60+m-35} A 35 35 0 1 0 ${60+f} ${60+m-35} Z`;const[B,T]=g(e,58,f,m),[R,w]=g(r,58,f,m),[p,b]=g(r,35,f,m),[u,z]=g(e,35,f,m),v=r-e>50?1:0;return`M ${B} ${T} A 58 58 0 ${v} 1 ${R} ${w} L ${p} ${b} A 35 35 0 ${v} 0 ${u} ${z} Z`}function a1({totalIn:e,totalOut:r}){const n=e-r,o=e>0?n/e:0,i=e===0?0:Math.max(0,Math.min(100,Math.round(50+o*100)));let s,l,a;e===0?(s="No income logged",l="#9A968C",a="Add your income to see your financial health."):o>=.3?(s="Excellent",l="#3E9E6B",a="You're saving 30%+ of income — keep investing the surplus."):o>=.2?(s="Healthy",l="#4C9A6B",a="Solid savings rate. Consider automating a SIP with the surplus."):o>=.1?(s="Okay",l="#C9A227",a="Decent, but aim for 20%+. Trim your biggest expense category."):o>=0?(s="Tight",l="#C2773B",a="You're saving very little. Review recurring bills and EMIs."):(s="Overspending",l="#D1556E",a="You're spending more than you earn. Cut back to avoid debt.");const d=e>0?Math.min(100,Math.round(r/e*100)):0;return t.jsxs("div",{style:C.card,children:[t.jsxs("div",{style:C.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(Ky,{size:18,color:l}),t.jsxs("div",{children:[t.jsx("div",{style:C.cardTitle,children:"Financial health"}),t.jsx("div",{style:C.cardSub,children:"Based on your savings rate this period"})]})]}),t.jsxs("div",{style:{textAlign:"right"},children:[t.jsx("div",{style:{...C.healthScore,color:l},children:e===0?"—":i}),t.jsx("div",{style:{...C.healthStatus,color:l},children:s})]})]}),t.jsx("div",{style:C.gaugeTrack,children:t.jsx("div",{style:{...C.gaugeFill,width:`${e===0?0:i}%`,background:l}})}),t.jsxs("div",{style:C.healthStats,children:[t.jsxs("div",{style:C.healthStat,children:[t.jsxs("span",{style:C.healthStatV,children:[e>0?Math.round(o*100):0,"%"]}),t.jsx("span",{style:C.healthStatL,children:"Savings rate"})]}),t.jsxs("div",{style:C.healthStat,children:[t.jsxs("span",{style:C.healthStatV,children:[d,"%"]}),t.jsx("span",{style:C.healthStatL,children:"of income spent"})]})]}),t.jsx("div",{style:{...C.tip,borderColor:l+"55",background:l+"12",color:l},children:a})]})}function d1({txns:e,expCats:r,investments:n,fixedItems:o,reload:i,money:s,cur:l}){const[a,d]=c.useState(""),[g,h]=c.useState("Salary"),[f,m]=c.useState(Wo),[B,T]=c.useState(""),[R,w]=c.useState(null),[p,b]=c.useState(null),[u,z]=c.useState(null),{deleteItem:v,toasts:I,handleUndo:E,handleDismiss:S}=ur(F.deleteTxn,F.restoreTxn,i),{deleteItem:j,toasts:Y,handleUndo:re,handleDismiss:ee}=ur(F.deleteExpenseLog,F.restoreExpenseLog,i),{deleteItem:W,toasts:he,handleUndo:we,handleDismiss:be}=ur(F.deleteInvestment,F.restoreInvestment,i),ze=()=>{var y;return z({id:null,kind:"expense",name:"",amount:"",category_id:((y=r[0])==null?void 0:y.id)||"",invest_kind:"Stocks",note:""})},K=y=>{var te;return z({id:y.id,kind:y.kind,name:y.name,amount:String(y.amount),category_id:y.category_id||((te=r[0])==null?void 0:te.id)||"",invest_kind:y.invest_kind||"Stocks",note:y.note||""})},U=async()=>{const y=u.name.trim(),te=parseFloat(u.amount)||0;if(!y||te<=0)return;const M={kind:u.kind,name:y,amount:te,note:u.note.trim(),...u.kind==="expense"?{category_id:Number(u.category_id)}:{invest_kind:u.invest_kind}};u.id?await F.updateFixedItem(u.id,M):await F.createFixedItem(M),z(null),i()},ce=async y=>{window.confirm(`Stop "${y.name}" from auto-posting each month? Past entries it already created will stay.`)&&(await F.deleteFixedItem(y.id),i())},x=async y=>{await F.updateFixedItem(y.id,{active:!y.active}),i()},Q=()=>b({id:null,name:"",kind:"Stocks",invested:"",current_value:"",date:Wo,note:""}),O=y=>b({id:y.id,name:y.name,kind:y.kind,invested:String(y.invested),current_value:String(y.current_value),date:y.date,note:y.note||""}),G=async()=>{const y=p.name.trim(),te=parseFloat(p.invested)||0,M=parseFloat(p.current_value)||0;if(!y)return;const ie={name:y,kind:p.kind,invested:te,current_value:M,note:p.note.trim(),date:p.date};p.id?await F.updateInvestment(p.id,ie):await F.createInvestment(ie),b(null),i()},N=n.reduce((y,te)=>y+te.invested,0),ge=n.reduce((y,te)=>y+te.current_value,0),de=ge-N,Me=async()=>{const y=parseFloat(a);!y||y<=0||(await F.createTxn({kind:"income",category:g,amount:y,note:B.trim(),date:f}),d(""),T(""),i())},oe=y=>w({id:y.id,rawId:y.rawId,source:y.source,kind:y.kind,amount:String(y.amount),category:y.category,date:y.date,note:y.note||""}),ae=(R==null?void 0:R.source)==="expense"?r.map(y=>y.name):(R==null?void 0:R.kind)==="income"?jp:Jv,P=async()=>{const y=parseFloat(R.amount);if(!(!y||y<=0)){if(R.source==="expense"){const te=r.find(M=>M.name===R.category);await F.updateExpenseLog(R.rawId,{amount:y,note:R.note.trim(),date:R.date,...te?{category_id:te.id}:{}})}else await F.updateTxn(R.id,{kind:R.kind,category:R.category,amount:y,note:R.note.trim(),date:R.date});w(null),i()}},X=y=>{y.source==="expense"?j(y.rawId,y.category):v(y.id,y.category)},me=c.useMemo(()=>{const y={};return e.forEach(te=>{(y[te.date]=y[te.date]||[]).push(te)}),Object.entries(y).sort((te,M)=>M[0].localeCompare(te[0]))},[e]),D=y=>new Date(y+"T00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:C.card,children:[t.jsx("div",{style:C.cardTitle,children:"Add income"}),t.jsxs("div",{style:C.cardSub,children:["Expenses are added from the ",t.jsx("b",{children:"Expenses"})," section and show up here automatically."]}),t.jsxs("div",{style:C.formGrid,children:[t.jsx("input",{type:"number",inputMode:"decimal",placeholder:"Amount",value:a,onChange:y=>d(y.target.value),onKeyDown:y=>y.key==="Enter"&&Me(),style:C.input,autoFocus:!0}),t.jsx("select",{value:g,onChange:y=>h(y.target.value),style:C.input,children:jp.map(y=>t.jsx("option",{children:y},y))}),t.jsx("input",{type:"date",value:f,max:Wo,onChange:y=>m(y.target.value),style:C.input})]}),t.jsx("input",{placeholder:"Note (optional)",value:B,onChange:y=>T(y.target.value),onKeyDown:y=>y.key==="Enter"&&Me(),style:{...C.input,marginTop:8}}),t.jsxs("button",{onClick:Me,style:{...C.addBtn,background:pn},children:[t.jsx(st,{size:15})," Add income"]})]}),t.jsxs("div",{style:C.card,children:[t.jsxs("div",{style:C.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(p0,{size:18,color:ld}),t.jsxs("div",{children:[t.jsx("div",{style:C.cardTitle,children:"Fixed items"}),t.jsx("div",{style:C.cardSub,children:"EMI, rent, SIP… auto-posted at the start of every billing cycle"})]})]}),t.jsxs("button",{onClick:ze,style:{...C.invAddBtn,background:ld},children:[t.jsx(st,{size:14})," Add"]})]}),o.length===0?t.jsx("div",{style:C.muted,children:"No fixed items yet — add an EMI or rent to auto-post it every cycle."}):t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:o.map(y=>{var M;const te=y.kind==="expense"?((M=r.find(ie=>ie.id===y.category_id))==null?void 0:M.name)||"Other":y.invest_kind||"Other";return t.jsxs("div",{style:{...C.invRow,opacity:y.active?1:.5},children:[t.jsx("span",{style:{...C.txnDot,background:y.kind==="expense"?Br:Zr}}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:C.txnCat,children:y.name}),t.jsxs("div",{style:C.txnNote,children:[y.kind==="expense"?"Fixed expense":"Fixed investment"," · ",te]})]}),t.jsxs("span",{style:{...C.txnAmt,color:y.kind==="expense"?Br:Zr},children:[s(y.amount),"/mo"]}),t.jsx("button",{onClick:()=>x(y),style:C.delBtn,title:y.active?"Pause":"Resume",children:y.active?t.jsx(hm,{size:13}):t.jsx(Tg,{size:13})}),t.jsx("button",{onClick:()=>K(y),style:C.delBtn,children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:()=>ce(y),style:C.delBtn,children:t.jsx(Fe,{size:14})})]},y.id)})})]}),t.jsxs("div",{style:C.card,children:[t.jsxs("div",{style:C.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(Vi,{size:18,color:Zr}),t.jsxs("div",{children:[t.jsx("div",{style:C.cardTitle,children:"Investments"}),t.jsx("div",{style:C.cardSub,children:"Asset generation — what you've put in vs. what it's worth now"})]})]}),t.jsxs("button",{onClick:Q,style:C.invAddBtn,children:[t.jsx(st,{size:14})," Add"]})]}),n.length===0?t.jsx("div",{style:C.muted,children:"No investments tracked yet."}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:C.healthStats,children:[t.jsxs("div",{style:C.healthStat,children:[t.jsx("span",{style:C.healthStatV,children:s(N)}),t.jsx("span",{style:C.healthStatL,children:"Invested"})]}),t.jsxs("div",{style:C.healthStat,children:[t.jsx("span",{style:C.healthStatV,children:s(ge)}),t.jsx("span",{style:C.healthStatL,children:"Current value"})]}),t.jsxs("div",{style:C.healthStat,children:[t.jsxs("span",{style:{...C.healthStatV,color:de>=0?pn:Br},children:[de>=0?"+":"",s(de)]}),t.jsx("span",{style:C.healthStatL,children:"Gain / loss"})]})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginTop:4},children:n.map(y=>{const te=y.current_value-y.invested,M=y.invested>0?te/y.invested*100:0;return t.jsxs("div",{style:C.invRow,children:[t.jsx("span",{style:{...C.txnDot,background:Zr}}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:C.txnCat,children:y.name}),t.jsxs("div",{style:C.txnNote,children:[y.kind," · invested ",s(y.invested)]})]}),t.jsxs("div",{style:{textAlign:"right"},children:[t.jsx("div",{style:C.txnAmt,children:s(y.current_value)}),t.jsxs("div",{style:{...C.invPct,color:te>=0?pn:Br},children:[te>=0?"+":"",Math.round(M),"%"]})]}),t.jsx("button",{onClick:()=>O(y),style:C.delBtn,children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:()=>W(y.id,y.name),style:C.delBtn,children:t.jsx(Fe,{size:14})})]},y.id)})})]})]}),t.jsxs("div",{style:C.card,children:[t.jsx("div",{style:C.cardTitle,children:"History"}),me.length===0?t.jsx("div",{style:C.muted,children:"No transactions yet."}):t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:me.map(([y,te])=>t.jsxs("div",{children:[t.jsx("div",{style:C.dateHead,children:D(y)}),te.map(M=>(R==null?void 0:R.id)===M.id?t.jsxs("div",{style:C.editTxn,children:[t.jsxs("div",{style:C.formGrid,children:[t.jsx("input",{type:"number",inputMode:"decimal",value:R.amount,onChange:ie=>w({...R,amount:ie.target.value}),style:C.input}),t.jsx("select",{value:R.category,onChange:ie=>w({...R,category:ie.target.value}),style:C.input,children:ae.map(ie=>t.jsx("option",{children:ie},ie))}),t.jsx("input",{type:"date",value:R.date,max:Wo,onChange:ie=>w({...R,date:ie.target.value}),style:C.input})]}),t.jsx("input",{placeholder:"Note (optional)",value:R.note,onChange:ie=>w({...R,note:ie.target.value}),onKeyDown:ie=>ie.key==="Enter"&&P(),style:{...C.input,marginTop:8}}),t.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[t.jsxs("button",{onClick:()=>w(null),style:C.editCancel,children:[t.jsx(Fe,{size:14})," Cancel"]}),t.jsxs("button",{onClick:P,style:{...C.addBtn,marginTop:0,flex:1,background:R.kind==="income"?pn:Br},children:[t.jsx(Oe,{size:15})," Save"]})]})]},M.id):t.jsxs("div",{style:C.txnRow,children:[t.jsx("span",{style:{...C.txnDot,background:Dg(M.category)}}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:C.txnCat,children:M.category}),M.note&&t.jsx("div",{style:C.txnNote,children:M.note})]}),t.jsxs("span",{style:{...C.txnAmt,color:M.kind==="income"?pn:Br},children:[M.kind==="income"?"+":"−",s(M.amount)]}),t.jsx("button",{onClick:()=>oe(M),style:C.delBtn,children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:()=>X(M),style:C.delBtn,children:t.jsx(Fe,{size:14})})]},M.id))]},y))})]}),p&&t.jsx("div",{style:C.overlay,onClick:()=>b(null),children:t.jsxs("div",{style:C.modal,onClick:y=>y.stopPropagation(),children:[t.jsxs("div",{style:C.modalHead,children:[t.jsx("span",{style:C.modalTitle,children:p.id?"Edit investment":"New investment"}),t.jsx("button",{onClick:()=>b(null),style:C.iconBtnPlain,children:t.jsx(Fe,{size:16})})]}),t.jsx("label",{style:C.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:p.name,onChange:y=>b(te=>({...te,name:y.target.value})),placeholder:"e.g. Nifty Index Fund, HDFC FD…",style:C.input}),t.jsx("label",{style:C.label,children:"Type"}),t.jsx("select",{value:p.kind,onChange:y=>b(te=>({...te,kind:y.target.value})),style:C.input,children:kp.map(y=>t.jsx("option",{children:y},y))}),t.jsxs("div",{style:C.formGrid,children:[t.jsxs("div",{children:[t.jsx("label",{style:C.label,children:"Invested"}),t.jsx("input",{type:"number",inputMode:"decimal",value:p.invested,onChange:y=>b(te=>({...te,invested:y.target.value})),placeholder:"0",style:C.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:C.label,children:"Current value"}),t.jsx("input",{type:"number",inputMode:"decimal",value:p.current_value,onChange:y=>b(te=>({...te,current_value:y.target.value})),placeholder:"0",style:C.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:C.label,children:"Date"}),t.jsx("input",{type:"date",value:p.date,max:Wo,onChange:y=>b(te=>({...te,date:y.target.value})),style:C.input})]})]}),t.jsx("label",{style:C.label,children:"Note (optional)"}),t.jsx("input",{value:p.note,onChange:y=>b(te=>({...te,note:y.target.value})),placeholder:"Folio no., broker, etc.",style:C.input}),t.jsxs("div",{style:C.modalActions,children:[t.jsx("button",{onClick:()=>b(null),style:C.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:G,disabled:!p.name.trim(),style:{...C.saveBtn,...p.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(Oe,{size:15})," ",p.id?"Save":"Add"]})]})]})}),u&&t.jsx("div",{style:C.overlay,onClick:()=>z(null),children:t.jsxs("div",{style:C.modal,onClick:y=>y.stopPropagation(),children:[t.jsxs("div",{style:C.modalHead,children:[t.jsx("span",{style:C.modalTitle,children:u.id?"Edit fixed item":"New fixed item"}),t.jsx("button",{onClick:()=>z(null),style:C.iconBtnPlain,children:t.jsx(Fe,{size:16})})]}),t.jsxs("div",{style:C.kindToggle,children:[t.jsxs("button",{onClick:()=>z(y=>({...y,kind:"expense"})),style:{...C.kindBtn,...u.kind==="expense"?{background:Br,color:"#fff",borderColor:Br}:{}},children:[t.jsx(sm,{size:15})," Expense"]}),t.jsxs("button",{onClick:()=>z(y=>({...y,kind:"investment"})),style:{...C.kindBtn,...u.kind==="investment"?{background:Zr,color:"#fff",borderColor:Zr}:{}},children:[t.jsx(Vi,{size:15})," Investment"]})]}),t.jsx("label",{style:C.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:u.name,onChange:y=>z(te=>({...te,name:y.target.value})),placeholder:u.kind==="expense"?"e.g. Home loan EMI, Rent…":"e.g. Monthly SIP — Nifty Index",style:C.input}),t.jsxs("div",{style:C.formGrid,children:[t.jsxs("div",{children:[t.jsx("label",{style:C.label,children:"Amount / month"}),t.jsx("input",{type:"number",inputMode:"decimal",value:u.amount,onChange:y=>z(te=>({...te,amount:y.target.value})),placeholder:"0",style:C.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:C.label,children:u.kind==="expense"?"Category":"Type"}),u.kind==="expense"?t.jsx("select",{value:u.category_id,onChange:y=>z(te=>({...te,category_id:y.target.value})),style:C.input,children:r.map(y=>t.jsx("option",{value:y.id,children:y.name},y.id))}):t.jsx("select",{value:u.invest_kind,onChange:y=>z(te=>({...te,invest_kind:y.target.value})),style:C.input,children:kp.map(y=>t.jsx("option",{children:y},y))})]})]}),t.jsx("label",{style:C.label,children:"Note (optional)"}),t.jsx("input",{value:u.note,onChange:y=>z(te=>({...te,note:y.target.value})),placeholder:"Loan account no., etc.",style:C.input}),t.jsx("p",{style:C.fixedHint,children:"Posts automatically at the start of every billing cycle (set in Settings → Currency). This one posts immediately for the current cycle when you save."}),t.jsxs("div",{style:C.modalActions,children:[t.jsx("button",{onClick:()=>z(null),style:C.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:U,disabled:!u.name.trim()||!(parseFloat(u.amount)>0),style:{...C.saveBtn,background:ld,...!u.name.trim()||!(parseFloat(u.amount)>0)?{opacity:.5,cursor:"not-allowed"}:{}},children:[t.jsx(Oe,{size:15})," ",u.id?"Save":"Add"]})]})]})}),t.jsx(pr,{toasts:I,onUndo:E,onDismiss:S}),t.jsx(pr,{toasts:Y,onUndo:re,onDismiss:ee}),t.jsx(pr,{toasts:he,onUndo:we,onDismiss:be})]})}function c1({money:e,cur:r}){return t.jsxs(t.Fragment,{children:[t.jsx(g1,{money:e,cur:r}),t.jsx(p1,{money:e,cur:r})]})}function bo({label:e,value:r,set:n,min:o,max:i,step:s,suffix:l}){return t.jsxs("div",{style:C.field,children:[t.jsxs("div",{style:C.fieldTop,children:[t.jsx("span",{style:C.fieldLabel,children:e}),t.jsxs("div",{style:C.fieldInputWrap,children:[t.jsx("input",{type:"number",value:r,onChange:a=>n(a.target.value),style:C.fieldInput}),l&&t.jsx("span",{style:C.fieldSuffix,children:l})]})]}),t.jsx("input",{type:"range",min:o,max:i,step:s,value:r,onChange:a=>n(a.target.value),style:C.range})]})}function g1({money:e,cur:r}){const[n,o]=c.useState(3e4),[i,s]=c.useState(12),[l,a]=c.useState(15),{invested:d,futureValue:g,gains:h,yearly:f}=c.useMemo(()=>{const B=Math.max(0,parseFloat(n)||0),T=Math.max(0,parseFloat(i)||0),R=Math.max(0,Math.min(60,parseInt(l)||0)),w=T/12/100,p=v=>v<=0?0:w===0?B*v:B*((Math.pow(1+w,v)-1)/w)*(1+w),b=[];for(let v=1;v<=R;v++)b.push({year:v,invested:B*12*v,value:p(v*12)});const u=p(R*12),z=B*12*R;return{invested:z,futureValue:u,gains:u-z,yearly:b}},[n,i,l]),m=Math.max(1,...f.map(B=>B.value));return t.jsxs("div",{style:C.card,children:[t.jsx("div",{style:C.cardTitleRow,children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(mm,{size:18,color:"#3A7CA5"}),t.jsxs("div",{children:[t.jsx("div",{style:C.cardTitle,children:"SIP projection"}),t.jsx("div",{style:C.cardSub,children:"Mutual fund / SIP future value"})]})]})}),t.jsx(bo,{label:"Monthly investment",value:n,set:o,min:500,max:5e5,step:500,suffix:r.symbol}),t.jsx(bo,{label:"Expected return (p.a.)",value:i,set:s,min:1,max:30,step:.5,suffix:"%"}),t.jsx(bo,{label:"Time period",value:l,set:a,min:1,max:40,step:1,suffix:"yrs"}),t.jsxs("div",{style:C.resultHero,children:[t.jsx("div",{style:C.resultLabel,children:"Projected wealth"}),t.jsx("div",{style:{...C.resultVal,color:"#3A7CA5"},children:e(g)})]}),t.jsxs("div",{style:C.splitRow,children:[t.jsxs("div",{style:C.splitItem,children:[t.jsx("span",{style:C.splitV,children:e(d)}),t.jsx("span",{style:C.splitL,children:"Invested"})]}),t.jsxs("div",{style:C.splitItem,children:[t.jsx("span",{style:{...C.splitV,color:"#3E9E6B"},children:e(h)}),t.jsx("span",{style:C.splitL,children:"Est. returns"})]})]}),f.length>0&&t.jsxs("div",{style:C.chartWrap,children:[t.jsx("div",{style:C.chartBars,children:f.map(B=>t.jsx("div",{style:C.chartCol,title:`Year ${B.year}: ${e(B.value)}`,children:t.jsx("div",{style:{...C.chartStack,height:`${B.value/m*100}%`},children:t.jsx("div",{style:{...C.chartGain,height:`${(1-B.invested/B.value)*100}%`}})})},B.year))}),t.jsxs("div",{style:C.chartAxis,children:[t.jsx("span",{children:"Yr 1"}),t.jsxs("span",{style:{marginLeft:"auto"},children:["Yr ",f.length]})]}),t.jsxs("div",{style:C.legend,children:[t.jsxs("span",{style:C.legendItem,children:[t.jsx("span",{style:{...C.legendDot,background:"#9DBFD6"}})," Invested"]}),t.jsxs("span",{style:C.legendItem,children:[t.jsx("span",{style:{...C.legendDot,background:"#3E9E6B"}})," Returns"]})]})]})]})}function Sp(e,r,n,o=0,i=0){let s=Math.max(0,e-i),l=0,a=0,d=i;const g=1200;for(;s>.01&&a<g;){const h=s*r;let f=n+o,m=f-h;if(m<=0)return{months:1/0,totalInterest:1/0,totalPaid:1/0};m>s&&(m=s,f=s+h),s-=m,l+=h,d+=f,a++}return{months:a,totalInterest:l,totalPaid:d}}const Cp=e=>{if(!isFinite(e))return"—";const r=Math.floor(e/12),n=e%12;return(r?`${r}y `:"")+`${n}m`},u1=e=>{if(!isFinite(e))return"—";const r=new Date;return r.setMonth(r.getMonth()+e),r.toLocaleDateString("en-US",{month:"short",year:"numeric"})};function p1({money:e,cur:r}){const[n,o]=c.useState(2e6),[i,s]=c.useState(9),[l,a]=c.useState(20),[d,g]=c.useState(5e5),[h,f]=c.useState("once"),[m,B]=c.useState("tenure"),T=c.useMemo(()=>{const u=Math.max(0,parseFloat(n)||0),z=Math.max(0,parseFloat(i)||0)/12/100,v=Math.max(1,Math.round((parseFloat(l)||0)*12)),I=z===0?u/v:u*z*Math.pow(1+z,v)/(Math.pow(1+z,v)-1);return{P:u,i:z,n:v,emi:I,totalPay:I*v,totalInterest:I*v-u}},[n,i,l]),R=h==="monthly"?"tenure":m,w=c.useMemo(()=>{const{P:u,i:z,n:v,emi:I,totalInterest:E}=T,S=Math.max(0,parseFloat(d)||0);if(S<=0)return null;let j=I,Y=v,re=E,ee=T.totalPay;if(h==="once"&&R==="emi"){const W=Math.max(0,u-S);j=z===0?W/v:W*z*Math.pow(1+z,v)/(Math.pow(1+z,v)-1),Y=v,re=j*v-W,ee=S+j*v}else if(h==="once"){const W=Sp(u,z,I,0,S);Y=W.months,re=W.totalInterest,ee=W.totalPaid}else{const W=Sp(u,z,I,S,0);Y=W.months,re=W.totalInterest,ee=W.totalPaid}return{newEMI:j,newMonths:Y,newInterest:re,totalPaid:ee,interestSaved:Math.max(0,E-re),monthsSaved:Math.max(0,v-(isFinite(Y)?Y:v))}},[T,d,h,R]),p=T.totalPay>0?T.P/T.totalPay*100:0,b=h==="once"?Math.max(1e5,Math.round(T.P)):Math.max(5e4,Math.round(T.emi*3));return t.jsxs("div",{style:C.card,children:[t.jsx("div",{style:C.cardTitleRow,children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(Zy,{size:18,color:"#C2536B"}),t.jsxs("div",{children:[t.jsx("div",{style:C.cardTitle,children:"EMI calculator"}),t.jsx("div",{style:C.cardSub,children:"Loan / mortgage monthly payment"})]})]})}),t.jsx(bo,{label:"Loan amount",value:n,set:o,min:5e4,max:5e7,step:5e4,suffix:r.symbol}),t.jsx(bo,{label:"Interest rate (p.a.)",value:i,set:s,min:1,max:24,step:.1,suffix:"%"}),t.jsx(bo,{label:"Tenure",value:l,set:a,min:1,max:30,step:1,suffix:"yrs"}),t.jsxs("div",{style:C.resultHero,children:[t.jsx("div",{style:C.resultLabel,children:"Monthly EMI"}),t.jsx("div",{style:{...C.resultVal,color:"#C2536B"},children:e(T.emi)})]}),t.jsxs("div",{style:C.emiSplitTrack,children:[t.jsx("div",{style:{width:`${p}%`,background:"#5B7C99",height:"100%"}}),t.jsx("div",{style:{width:`${100-p}%`,background:"#C2536B",height:"100%"}})]}),t.jsxs("div",{style:C.splitRow,children:[t.jsxs("div",{style:C.splitItem,children:[t.jsx("span",{style:{...C.splitV,color:"#5B7C99"},children:e(T.P)}),t.jsx("span",{style:C.splitL,children:"Principal"})]}),t.jsxs("div",{style:C.splitItem,children:[t.jsx("span",{style:{...C.splitV,color:"#C2536B"},children:e(T.totalInterest)}),t.jsx("span",{style:C.splitL,children:"Total interest"})]}),t.jsxs("div",{style:C.splitItem,children:[t.jsx("span",{style:C.splitV,children:e(T.totalPay)}),t.jsx("span",{style:C.splitL,children:"Total payable"})]})]}),t.jsx("div",{style:C.subDivider}),t.jsx("div",{style:C.subTitle,children:"Prepayment planner"}),t.jsx("div",{style:C.cardSub,children:"See what an extra payment does to your loan."}),t.jsx("div",{style:{marginTop:14},children:t.jsx(bo,{label:"Prepayment amount",value:d,set:g,min:0,max:b,step:h==="once"?25e3:1e3,suffix:r.symbol})}),t.jsxs("div",{style:C.segGroup,children:[t.jsx("span",{style:C.segLbl,children:"Type"}),t.jsxs("div",{style:C.segRow,children:[t.jsx(il,{label:"One-time",on:h==="once",onClick:()=>f("once")}),t.jsx(il,{label:"Every month",on:h==="monthly",onClick:()=>f("monthly")})]})]}),t.jsxs("div",{style:C.segGroup,children:[t.jsx("span",{style:C.segLbl,children:"Strategy"}),t.jsxs("div",{style:C.segRow,children:[t.jsx(il,{label:"Reduce tenure",on:R==="tenure",onClick:()=>B("tenure")}),t.jsx(il,{label:"Reduce EMI",on:R==="emi",disabled:h==="monthly",onClick:()=>B("emi")})]})]}),h==="monthly"&&t.jsx("div",{style:C.note,children:"An extra monthly payment always shortens the tenure. Switch to a one-time prepayment to reduce your EMI instead."}),w?t.jsxs("div",{style:C.cmpCard,children:[t.jsxs("div",{style:C.cmpRow,children:[t.jsx("span",{style:C.cmpLbl,children:"New EMI"}),t.jsxs("span",{style:C.cmpVal,children:[e(w.newEMI),w.newEMI<T.emi-1&&t.jsxs("span",{style:C.cmpWas,children:[" was ",e(T.emi)]})]})]}),t.jsxs("div",{style:C.cmpRow,children:[t.jsx("span",{style:C.cmpLbl,children:"New tenure"}),t.jsxs("span",{style:C.cmpVal,children:[Cp(w.newMonths)," ",t.jsxs("span",{style:C.cmpWas,children:["· paid off ",u1(w.newMonths)]})]})]}),t.jsxs("div",{style:C.cmpRow,children:[t.jsx("span",{style:C.cmpLbl,children:"Total interest"}),t.jsx("span",{style:C.cmpVal,children:e(w.newInterest)})]}),t.jsxs("div",{style:C.cmpRow,children:[t.jsx("span",{style:C.cmpLbl,children:"Total payable"}),t.jsx("span",{style:C.cmpVal,children:e(w.totalPaid)})]}),t.jsxs("div",{style:C.saveRow,children:["You save ",e(w.interestSaved)," in interest",w.monthsSaved>0?` · ${Cp(w.monthsSaved)} sooner`:""]})]}):t.jsx("div",{style:C.muted,children:"Enter a prepayment amount to see the impact."})]})}function il({label:e,on:r,onClick:n,disabled:o}){return t.jsx("button",{onClick:o?void 0:n,disabled:o,style:{...C.seg,...r?C.segOn:{},...o?C.segDisabled:{}},children:e})}const C={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},tabs:{display:"flex",gap:7,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},presetRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},preset:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},presetOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},sumGrid:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:16},sumCard:{background:"var(--surface)",borderRadius:14,padding:"14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},sumCardWide:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,padding:"16px 14px"},sumIcon:{width:30,height:30,borderRadius:9,display:"grid",placeItems:"center",marginBottom:8},sumIconWide:{width:48,height:48,borderRadius:12,display:"grid",placeItems:"center",flexShrink:0},sumWideText:{textAlign:"center"},sumLabel:{fontSize:11.5,color:"var(--text-3)",fontWeight:600},sumVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2,letterSpacing:"-0.01em",wordBreak:"break-word"},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},cardTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},twoCol:{display:"grid",gridTemplateColumns:"1fr",gap:0},dot:{width:10,height:10,borderRadius:3,flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieSvg:{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"visible"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",transition:"transform 0.15s, box-shadow 0.15s",pointerEvents:"none",textAlign:"center",padding:4,boxSizing:"border-box"},pieHoleVal:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:160,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8,borderRadius:8,padding:"3px 5px",margin:"-3px -5px",cursor:"default",transition:"background 0.15s"},legendRowOn:{background:"var(--surface-2)"},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},investNote:{display:"flex",alignItems:"center",gap:6,fontSize:11.5,color:"var(--text-3)",marginBottom:14,marginTop:-4},healthScore:{fontSize:32,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1},healthStatus:{fontSize:12.5,fontWeight:700,marginTop:2},gaugeTrack:{height:10,background:"var(--surface-2)",borderRadius:6,overflow:"hidden",marginBottom:14},gaugeFill:{height:"100%",borderRadius:6,transition:"width 0.4s"},healthStats:{display:"flex",gap:24,marginBottom:12},healthStat:{display:"flex",flexDirection:"column"},healthStatV:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},healthStatL:{fontSize:11,color:"var(--text-3)",fontWeight:600},tip:{fontSize:12.5,lineHeight:1.5,padding:"10px 12px",borderRadius:10,border:"1px solid",fontWeight:500},kindToggle:{display:"flex",gap:8,marginBottom:12},kindBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},formGrid:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},input:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},addBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},invAddBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"7px 13px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",flexShrink:0},invRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},invPct:{fontSize:11,fontWeight:700,marginTop:1},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},fixedHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.5,marginTop:10,marginBottom:0},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},dateHead:{fontSize:11,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8},txnRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},txnDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},txnCat:{fontSize:13.5,fontWeight:600},txnNote:{fontSize:11.5,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},txnAmt:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},editTxn:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:12,margin:"6px 0"},editCancel:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},field:{marginBottom:16},fieldTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},fieldLabel:{fontSize:13,fontWeight:600,color:"var(--text-2)"},fieldInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:8,padding:"5px 10px",background:"var(--surface-2)"},fieldInput:{border:"none",background:"none",outline:"none",width:90,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},fieldSuffix:{fontSize:12,color:"var(--text-3)",fontWeight:600},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},resultHero:{textAlign:"center",padding:"14px 0 6px"},resultLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},resultVal:{fontSize:34,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,wordBreak:"break-word"},splitRow:{display:"flex",gap:10,marginTop:10},splitItem:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",background:"var(--surface-2)",borderRadius:10,padding:"10px 6px"},splitV:{fontSize:14.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",wordBreak:"break-word"},splitL:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:2},chartWrap:{marginTop:18},chartBars:{display:"flex",alignItems:"flex-end",gap:3,height:90},chartCol:{flex:1,height:"100%",display:"flex",alignItems:"flex-end"},chartStack:{width:"100%",background:"#9DBFD6",borderRadius:"3px 3px 0 0",minHeight:2,position:"relative",display:"flex",flexDirection:"column",justifyContent:"flex-start"},chartGain:{width:"100%",background:"#3E9E6B",borderRadius:"3px 3px 0 0"},chartAxis:{display:"flex",fontSize:10,color:"var(--text-3)",fontWeight:600,marginTop:6},legend:{display:"flex",gap:16,justifyContent:"center",marginTop:10},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)",fontWeight:600},legendDot:{width:10,height:10,borderRadius:3},emiSplitTrack:{display:"flex",height:12,borderRadius:6,overflow:"hidden",marginTop:16,border:"1px solid var(--border)"},subDivider:{height:1,background:"var(--border)",margin:"20px 0 14px"},subTitle:{fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},segGroup:{marginBottom:12},segLbl:{fontSize:12,fontWeight:600,color:"var(--text-3)",display:"block",marginBottom:6},segRow:{display:"flex",gap:8},seg:{flex:1,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},segOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},segDisabled:{opacity:.4,cursor:"not-allowed"},note:{fontSize:12,lineHeight:1.5,color:"var(--text-3)",background:"var(--surface-2)",borderRadius:9,padding:"9px 11px",marginBottom:12},cmpCard:{background:"var(--surface-2)",borderRadius:12,padding:"12px 14px",marginTop:4},cmpRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"6px 0",borderBottom:"1px solid var(--border)",gap:10},cmpLbl:{fontSize:12.5,color:"var(--text-2)",fontWeight:600},cmpVal:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",textAlign:"right"},cmpWas:{fontSize:11,color:"var(--text-3)",fontWeight:500,fontFamily:"'Inter',system-ui,sans-serif"},saveRow:{marginTop:12,background:"rgba(62,158,107,0.12)",color:"#3E9E6B",borderRadius:9,padding:"10px 12px",fontSize:13,fontWeight:700,textAlign:"center"}},kc=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],ad={Monday:"Mon",Tuesday:"Tue",Wednesday:"Wed",Thursday:"Thu",Friday:"Fri",Saturday:"Sat",Sunday:"Sun"},Ai=()=>kc[(new Date().getDay()+6)%7],an={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},zp=Object.keys(an),dd=21,Tp="kickstart_tags",cd=e=>{if(!e)return"";const r=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(r))return r;const n=r.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},Ip=e=>{if(!e||!String(e).trim())return null;const r=String(e).split(":").map(n=>parseInt(n.trim(),10));return r.some(n=>isNaN(n)||n<0)?null:r.reduce((n,o)=>n*60+o,0)},sl=e=>{if(e==null)return"";const r=Math.max(0,e|0);return`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`},b1=e=>`https://www.youtube.com/embed/${e.youtube_id}?start=${e.start_sec||0}`+(e.end_sec?`&end=${e.end_sec}`:"")+"&autoplay=1&rel=0",h1=()=>({id:null,url:"",title:"",start:"",end:"",days:[Ai()],pillars:[],customs:[]});function m1(){const[e,r]=c.useState([]),[n,o]=c.useState([]),[i,s]=c.useState(!1),[l,a]=c.useState({type:"day",value:Ai()}),[d,g]=c.useState(null),[h,f]=c.useState(null),[m,B]=c.useState(""),T=c.useCallback(async()=>{try{const[W,he]=await Promise.all([F.getKickstart(),F.getSetting(Tp)]);r(W),o(Array.isArray(he==null?void 0:he.value)?he.value:[])}catch{}s(!0)},[]);c.useEffect(()=>{T()},[T]);const{deleteItem:R,toasts:w,handleUndo:p,handleDismiss:b}=ur(F.deleteKickstart,F.restoreKickstart,T);c.useEffect(()=>{if(!h)return;const W=e.find(K=>K.id===h);if(!W)return;const he=W.end_sec?Math.max(1,W.end_sec-(W.start_sec||0)):1/0;let we=0;const be=10,ze=setInterval(()=>{if(document.hidden)return;const K=he-we;if(K<=0){clearInterval(ze);return}const U=Math.min(be,K);we+=U,F.addScreenTime("kickstart",Math.round(U)).catch(()=>{})},be*1e3);return()=>clearInterval(ze)},[h,e]);const u=W=>{o(W),F.setSetting(Tp,W).catch(()=>{})},z=()=>{const W=m.trim();!W||n.length>=dd||n.includes(W)||(u([...n,W]),g(he=>he&&!he.customs.includes(W)?{...he,customs:[...he.customs,W]}:he),B(""))},v=W=>u(n.filter(he=>he!==W)),I=(W,he)=>g(we=>({...we,[W]:we[W].includes(he)?we[W].filter(be=>be!==he):[...we[W],he]})),E=W=>g({id:W.id,url:`https://youtu.be/${W.youtube_id}`,title:W.title,start:sl(W.start_sec),end:W.end_sec?sl(W.end_sec):"",days:[...W.days],pillars:[...W.pillars],customs:[...W.customs]}),S=async()=>{const W=cd(d.url);if(!W||d.days.length===0||!d.title.trim())return;const he={youtube_id:W,title:d.title.trim(),start_sec:Ip(d.start)||0,end_sec:Ip(d.end),days:d.days,pillars:d.pillars,customs:d.customs};d.id?await F.updateKickstart(d.id,he):await F.createKickstart(he),g(null),T()},j=c.useMemo(()=>e.filter(W=>l.type==="all"?!0:l.type==="day"?W.days.includes(l.value):l.type==="pillar"?W.pillars.includes(l.value):l.type==="custom"?W.customs.includes(l.value):!0),[e,l]),Y=(W,he)=>l.type===W&&l.value===he,re=d?[!cd(d.url)&&"a valid YouTube link",!d.title.trim()&&"a title",d.days.length===0&&"at least one day"].filter(Boolean):[],ee=!!d&&re.length===0;return t.jsxs("div",{style:Be.page,children:[t.jsxs("div",{style:Be.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:Be.eyebrow,children:"Anvil · Kickstart"}),t.jsx("h1",{style:Be.h1,children:"Kickstart"}),t.jsxs("div",{style:Be.subhead,children:["Your motivation hub — the right push for ",Ai(),"."]})]}),!d&&t.jsxs("button",{onClick:()=>g(h1()),style:Be.addBtn,children:[t.jsx(st,{size:15})," Add video"]})]}),d&&t.jsxs("div",{style:Be.card,children:[t.jsx("div",{style:Be.cardTitle,children:d.id?"Edit video":"Add video"}),t.jsx("input",{placeholder:"YouTube link (or video ID)",value:d.url,onChange:W=>g({...d,url:W.target.value}),style:Be.input,autoFocus:!0}),d.url&&!cd(d.url)&&t.jsx("div",{style:Be.warn,children:"Couldn't find a YouTube video ID in that link."}),t.jsx("input",{placeholder:"Title (required)",value:d.title,onChange:W=>g({...d,title:W.target.value}),style:{...Be.input,marginTop:8}}),t.jsxs("div",{style:Be.trimRow,children:[t.jsx(ym,{size:15,color:"var(--text-3)"}),t.jsxs("label",{style:Be.trimField,children:[t.jsx("span",{style:Be.trimLbl,children:"Start"}),t.jsx("input",{placeholder:"0:30",value:d.start,onChange:W=>g({...d,start:W.target.value}),style:Be.trimInput})]}),t.jsx("span",{style:Be.trimArrow,children:"→"}),t.jsxs("label",{style:Be.trimField,children:[t.jsx("span",{style:Be.trimLbl,children:"End"}),t.jsx("input",{placeholder:"end (optional)",value:d.end,onChange:W=>g({...d,end:W.target.value}),style:Be.trimInput})]})]}),t.jsx("div",{style:Be.hint,children:"Only this trimmed part plays. Use m:ss (e.g. 1:30). Leave End blank to play to the end."}),t.jsxs("div",{style:Be.tagBlock,children:[t.jsxs("div",{style:Be.tagLabel,children:["Days ",t.jsx("span",{style:Be.req,children:"required"})]}),t.jsx("div",{style:Be.chipRow,children:kc.map(W=>t.jsx("button",{onClick:()=>I("days",W),style:{...Be.chip,...d.days.includes(W)?Be.chipOnDark:{}},children:ad[W]},W))})]}),t.jsxs("div",{style:Be.tagBlock,children:[t.jsxs("div",{style:Be.tagLabel,children:["Pillars ",t.jsx("span",{style:Be.opt,children:"optional"})]}),t.jsx("div",{style:Be.chipRow,children:zp.map(W=>{const he=d.pillars.includes(W);return t.jsxs("button",{onClick:()=>I("pillars",W),style:{...Be.chip,...he?{background:an[W],color:"#fff",borderColor:an[W]}:{}},children:[t.jsx("span",{style:{...Be.dot,background:he?"#fff":an[W]}}),W]},W)})})]}),t.jsxs("div",{style:Be.tagBlock,children:[t.jsxs("div",{style:Be.tagLabel,children:["Custom tags ",t.jsxs("span",{style:Be.opt,children:["optional · ",n.length,"/",dd]})]}),t.jsxs("div",{style:Be.chipRow,children:[n.map(W=>t.jsxs("span",{style:{...Be.chip,...d.customs.includes(W)?Be.chipOnAccent:{},paddingRight:4},children:[t.jsx("button",{onClick:()=>I("customs",W),style:Be.chipInner,children:W}),t.jsx("button",{onClick:()=>v(W),style:Be.chipX,title:"Delete tag",children:t.jsx(Fe,{size:11})})]},W)),n.length===0&&t.jsx("span",{style:Be.muted,children:"No custom tags yet."})]}),n.length<dd&&t.jsxs("div",{style:Be.newTagRow,children:[t.jsx("input",{placeholder:"New custom tag…",value:m,onChange:W=>B(W.target.value),onKeyDown:W=>W.key==="Enter"&&z(),style:{...Be.input,padding:"7px 10px"}}),t.jsx("button",{onClick:z,style:Be.smallBtn,children:t.jsx(st,{size:14})})]})]}),!ee&&t.jsxs("div",{style:Be.warn,children:["Add ",re.join(", ")," to save."]}),t.jsxs("div",{style:Be.formActions,children:[t.jsxs("button",{onClick:()=>g(null),style:Be.cancelBtn,children:[t.jsx(Fe,{size:14})," Cancel"]}),t.jsxs("button",{onClick:S,disabled:!ee,style:{...Be.saveBtn,...ee?{}:Be.saveDisabled},children:[t.jsx(Oe,{size:15})," ",d.id?"Save":"Add video"]})]})]}),t.jsxs("div",{style:Be.filterCard,children:[t.jsx("button",{onClick:()=>a({type:"all"}),style:{...Be.fChip,...l.type==="all"?Be.fChipOnDark:{}},children:"All"}),t.jsx("span",{style:Be.fDivider}),kc.map(W=>t.jsxs("button",{onClick:()=>a({type:"day",value:W}),style:{...Be.fChip,...Y("day",W)?Be.fChipOnDark:{},...W===Ai()?Be.fToday:{}},children:[ad[W],W===Ai()?" ·":""]},W)),t.jsx("span",{style:Be.fDivider}),zp.map(W=>t.jsxs("button",{onClick:()=>a({type:"pillar",value:W}),style:{...Be.fChip,...Y("pillar",W)?{background:an[W],color:"#fff",borderColor:an[W]}:{}},children:[t.jsx("span",{style:{...Be.dot,background:Y("pillar",W)?"#fff":an[W]}}),W]},W)),n.length>0&&t.jsx("span",{style:Be.fDivider}),n.map(W=>t.jsxs("button",{onClick:()=>a({type:"custom",value:W}),style:{...Be.fChip,...Y("custom",W)?Be.fChipOnAccent:{}},children:[t.jsx(uc,{size:11})," ",W]},W))]}),i?j.length===0?t.jsx("div",{style:Be.empty,children:e.length===0?"No videos yet — add your first motivation clip.":"No videos for this tag."}):t.jsx("div",{style:Be.grid,children:j.map(W=>t.jsxs("div",{style:Be.videoCard,children:[t.jsx("div",{style:Be.thumbWrap,children:h===W.id?t.jsx("iframe",{src:b1(W),title:W.title||W.youtube_id,style:Be.iframe,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):t.jsxs("button",{onClick:()=>f(W.id),style:Be.thumbBtn,children:[t.jsx("img",{src:`https://img.youtube.com/vi/${W.youtube_id}/hqdefault.jpg`,alt:"",style:Be.thumb}),t.jsx("span",{style:Be.playOverlay,children:t.jsx(Tg,{size:22,color:"#fff",fill:"#fff"})}),t.jsxs("span",{style:Be.trimBadge,children:[sl(W.start_sec),W.end_sec?` – ${sl(W.end_sec)}`:"+"]})]})}),t.jsxs("div",{style:Be.videoBody,children:[t.jsx("div",{style:Be.videoTitle,children:W.title||"Untitled clip"}),t.jsxs("div",{style:Be.tagWrap,children:[W.days.map(he=>t.jsx("span",{style:Be.dayTag,children:ad[he]},he)),W.pillars.map(he=>t.jsx("span",{style:{...Be.pillTag,color:an[he]||"var(--text-2)",borderColor:an[he]||"var(--border)"},children:he},he)),W.customs.map(he=>t.jsx("span",{style:Be.customTag,children:he},he))]}),t.jsxs("div",{style:Be.cardActions,children:[t.jsx("button",{onClick:()=>E(W),style:Be.iconBtn,title:"Edit",children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:()=>R(W.id,W.title||"video"),style:Be.iconBtn,title:"Delete",children:t.jsx(Fe,{size:14})})]})]})]},W.id))}):t.jsx("div",{style:Be.muted,children:"Loading…"}),t.jsx(pr,{toasts:w,onUndo:p,onDismiss:b})]})}const Be={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:1e3,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},warn:{fontSize:11.5,color:"#C2773B",marginTop:5,fontWeight:600},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:6,lineHeight:1.4},trimRow:{display:"flex",alignItems:"flex-end",gap:10,marginTop:10},trimField:{display:"flex",flexDirection:"column",gap:4,flex:1},trimLbl:{fontSize:11,color:"var(--text-2)",fontWeight:600},trimInput:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},trimArrow:{color:"var(--text-3)",paddingBottom:9},tagBlock:{marginTop:14},tagLabel:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},req:{fontSize:10,fontWeight:700,color:"#C2536B",textTransform:"uppercase",marginLeft:6},opt:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",marginLeft:6},chipRow:{display:"flex",gap:6,flexWrap:"wrap"},chip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},chipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},chipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},chipInner:{border:"none",background:"none",color:"inherit",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,padding:0},chipX:{border:"none",background:"rgba(0,0,0,0.12)",color:"inherit",cursor:"pointer",display:"grid",placeItems:"center",borderRadius:"50%",width:16,height:16,padding:0},newTagRow:{display:"flex",gap:6,marginTop:8,maxWidth:280},smallBtn:{border:"none",background:"var(--accent)",color:"#fff",width:34,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},dot:{width:8,height:8,borderRadius:"50%",flexShrink:0,display:"inline-block"},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"var(--accent)",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},filterCard:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:12,marginBottom:18},fChip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},fChipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},fChipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},fToday:{borderColor:"var(--accent)",borderWidth:2},fDivider:{width:1,alignSelf:"stretch",background:"var(--border)",margin:"0 2px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:14},videoCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 9",background:"#000"},thumbBtn:{border:"none",padding:0,margin:0,cursor:"pointer",width:"100%",height:"100%",position:"relative",display:"block",background:"#000"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center",background:"rgba(0,0,0,0.28)"},trimBadge:{position:"absolute",bottom:8,right:8,background:"rgba(0,0,0,0.75)",color:"#fff",fontSize:11,fontWeight:700,padding:"2px 7px",borderRadius:6,fontFamily:"'Fraunces',Georgia,serif"},iframe:{width:"100%",height:"100%",border:"none",display:"block"},videoBody:{padding:"12px 13px",display:"flex",flexDirection:"column",gap:8},videoTitle:{fontSize:14,fontWeight:700},tagWrap:{display:"flex",gap:5,flexWrap:"wrap"},dayTag:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:8},pillTag:{fontSize:10,fontWeight:700,border:"1px solid",borderRadius:8,padding:"2px 7px"},customTag:{fontSize:10,fontWeight:700,color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"2px 7px",borderRadius:8},cardActions:{display:"flex",gap:4,justifyContent:"flex-end"},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},Lm=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Bp=()=>Lm(new Date),Ep=(e,r)=>{const n=new Date(e+"T00:00:00");return n.setDate(n.getDate()+r),Lm(n)},Rp=e=>new Date(e+"T00:00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"}),f1=e=>{if(!e)return"";const r=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(r))return r;const n=r.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},x1=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>900?(a=a*900/l,l=900):a>900&&(l=l*900/a,a=900);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),r(d.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)});function y1(){const[e,r]=c.useState([]),[n,o]=c.useState(!1),[i,s]=c.useState(null),[l,a]=c.useState(!1),[d,g]=c.useState({title:"",image:""}),[h,f]=c.useState(""),[m,B]=c.useState(!1),[T,R]=c.useState(null),w=c.useCallback(async()=>{try{r(await F.getGoldenGoals())}catch{}o(!0)},[]);c.useEffect(()=>{w()},[w]);const{deleteItem:p,toasts:b,handleUndo:u,handleDismiss:z}=ur(F.deleteGolden,F.restoreGolden,w);c.useEffect(()=>{const j=()=>F.getSetting("golden_music").then(Y=>f(f1((Y==null?void 0:Y.value)||""))).catch(()=>{});return j(),window.addEventListener("focus",j),()=>window.removeEventListener("focus",j)},[]);const v=async()=>{if(!d.title.trim())return;const j=await F.createGolden({title:d.title.trim(),image:d.image});g({title:"",image:""}),a(!1),await w(),s(j.id)},I=async(j,Y)=>{var ee;const re=(ee=j.target.files)==null?void 0:ee[0];if(re)try{Y(await x1(re))}catch{}},E=e.filter(j=>!j.achieved),S=e.filter(j=>j.achieved);return i?t.jsxs("div",{style:ne.page,children:[t.jsx(C1,{musicId:h,on:m}),t.jsx(w1,{goalId:i,onBack:()=>s(null),onReload:w,onCelebrate:(j,Y)=>R({title:j,days:Y}),pickImage:I,musicId:h,setMusicId:f,musicOn:m,setMusicOn:B}),T&&t.jsx(S1,{data:T,onClose:()=>R(null)})]}):t.jsxs("div",{style:ne.page,children:[t.jsxs("div",{style:ne.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:ne.eyebrow,children:"Anvil · Golden Book"}),t.jsx("h1",{style:ne.h1,children:"Golden Book"}),t.jsx("div",{style:ne.subhead,children:"Write your dreams into being — a little every day."})]}),!l&&t.jsxs("button",{onClick:()=>a(!0),style:ne.addBtn,children:[t.jsx(st,{size:15})," New dream"]})]}),l&&t.jsxs("div",{style:ne.card,children:[t.jsx("div",{style:ne.cardTitle,children:"Manifest a new dream"}),t.jsx("textarea",{autoFocus:!0,placeholder:"Write your dream as if it's already true…",value:d.title,onChange:j=>g({...d,title:j.target.value}),style:ne.textarea}),t.jsxs("label",{style:ne.photoPick,children:[d.image?t.jsx("img",{src:d.image,alt:"",style:ne.photoPreview}):t.jsxs("span",{style:ne.photoEmpty,children:[t.jsx(va,{size:18})," Add a photo"]}),t.jsx("input",{type:"file",accept:"image/*",onChange:j=>I(j,Y=>g({...d,image:Y})),style:{display:"none"}})]}),t.jsxs("div",{style:ne.formActions,children:[t.jsxs("button",{onClick:()=>{a(!1),g({title:"",image:""})},style:ne.cancelBtn,children:[t.jsx(Fe,{size:14})," Cancel"]}),t.jsxs("button",{onClick:v,disabled:!d.title.trim(),style:{...ne.saveBtn,...d.title.trim()?{}:ne.saveDisabled},children:[t.jsx(Oe,{size:15})," Create"]})]})]}),n?t.jsxs(t.Fragment,{children:[E.length===0&&S.length===0&&!l&&t.jsx("div",{style:ne.empty,children:"No dreams yet. Add your first one and revisit it daily."}),E.length>0&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:ne.sectionTitle,children:[t.jsx(Co,{size:15,color:"#C9A227"})," Manifesting ",t.jsx("span",{style:ne.badge,children:E.length})]}),t.jsx("div",{style:ne.grid,children:E.map(j=>t.jsx(Ap,{g:j,onOpen:()=>s(j.id),onDelete:()=>p(j.id,j.title)},j.id))})]}),S.length>0&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{...ne.sectionTitle,marginTop:22},children:[t.jsx(Yr,{size:15,color:"#4C9A6B"})," Manifested ",t.jsx("span",{style:ne.badge,children:S.length})]}),t.jsx("div",{style:ne.grid,children:S.map(j=>t.jsx(Ap,{g:j,onOpen:()=>s(j.id),onDelete:()=>p(j.id,j.title),achieved:!0},j.id))})]})]}):t.jsx("div",{style:ne.muted,children:"Loading…"}),t.jsx(pr,{toasts:b,onUndo:u,onDismiss:z})]})}const wc=[{key:"morning",label:"Morning",time:"6 AM – 12 PM",Icon:km,color:"#E0883B"},{key:"noon",label:"Noon",time:"12 – 6 PM",Icon:f0,color:"#C9A227"},{key:"night",label:"Night",time:"6 PM – 2 AM",Icon:o0,color:"#6B6FB0"}],Dp=e=>{if(e<31)return`${e} day${e===1?"":"s"}`;const r=Math.floor(e/365),n=Math.floor(e%365/30),o=e%365%30,i=[];return r&&i.push(`${r}y`),n&&i.push(`${n}mo`),o&&i.push(`${o}d`),i.join(" ")},Fp="tesla369_reminders";function v1({g:e,onChanged:r,musicId:n,setMusicId:o,musicOn:i,setMusicOn:s}){const[l,a]=c.useState(""),[d,g]=c.useState(!1),[h,f]=c.useState(!1),[m,B]=c.useState(()=>localStorage.getItem(Fp)==="1"),T=e.t369,R=(e.t369_affirmation||"").trim();if(k1(m&&!!R,T,e.title),!T)return null;const{window:w,targets:p,counts:b,current_streak:u,best_streak:z,min_streak:v,min_reached:I,day_complete:E}=T,S=(b.morning||0)+(b.noon||0)+(b.night||0),j=p.morning+p.noon+p.night,Y=async()=>{if(R&&l.trim()===R&&w){f(!0);try{r(await F.logTesla369(e.id)),a("")}catch(we){alert(we.message||"Could not log this write.")}finally{f(!1)}}},re=async()=>{f(!0);try{r(await F.undoTesla369(e.id))}catch{}finally{f(!1)}},ee=async()=>{if(!m&&!await j1()){alert("Enable notifications in your browser to get 369 reminders.");return}const we=!m;B(we),localStorage.setItem(Fp,we?"1":"0")},W=l.trim()===R&&R!=="",he=w&&(b[w]||0)>=p[w];return t.jsxs("div",{style:ne.tCard,children:[t.jsxs("div",{style:ne.tHead,children:[t.jsxs("div",{style:ne.tTitleWrap,children:[t.jsxs("span",{style:ne.tBadge,children:[t.jsx(Bg,{size:14})," 369"]}),t.jsxs("div",{children:[t.jsx("div",{style:ne.tTitle,children:"369 Method"}),t.jsx("div",{style:ne.tSub,children:"Write it 3× morning · 6× noon · 9× night."})]})]}),t.jsxs("div",{style:ne.tHeadBtns,children:[t.jsx(_m,{musicId:n,musicOn:i,setMusicOn:s}),t.jsxs("button",{onClick:ee,style:{...ne.tRemBtn,...m?ne.tRemOn:{}},title:m?"Reminders on":"Turn on reminders",children:[m?t.jsx(jg,{size:14}):t.jsx(Sy,{size:14})," ",m?"Reminders on":"Remind me"]})]})]}),t.jsxs("div",{style:ne.tStreakRow,children:[t.jsxs("div",{style:ne.tStreakBox,children:[t.jsxs("div",{style:ne.tStreakLabel,children:[t.jsx(jn,{size:13,color:"#C2773B"})," Current streak"]}),t.jsx("div",{style:ne.tStreakVal,children:Dp(u)}),I?t.jsxs("div",{style:{...ne.tStreakHint,color:"#4C9A6B"},children:["✓ ",v,"-day minimum met — keep going until it manifests"]}):t.jsxs("div",{style:ne.tStreakHint,children:["Day ",u," of ",v," minimum"]}),!I&&t.jsx("div",{style:ne.tProgTrack,children:t.jsx("div",{style:{...ne.tProgFill,width:`${Math.min(100,u/v*100)}%`}})})]}),t.jsxs("div",{style:ne.tStreakBox,children:[t.jsxs("div",{style:ne.tStreakLabel,children:[t.jsx(Yr,{size:13,color:"#C9A227"})," All-time best"]}),t.jsx("div",{style:ne.tStreakVal,children:Dp(z)}),t.jsxs("div",{style:ne.tStreakHint,children:["Today: ",S,"/",j," written ",E?"✓":""]})]})]}),R?t.jsxs(t.Fragment,{children:[t.jsx("div",{style:ne.tWindows,children:wc.map(({key:we,label:be,time:ze,Icon:K,color:U})=>{const ce=b[we]||0,x=p[we],Q=w===we,O=ce>=x;return t.jsxs("div",{style:{...ne.tWindow,...Q?{border:`1px solid ${U}`,boxShadow:`0 0 0 2px ${U}22`}:{}},children:[t.jsxs("div",{style:ne.tWindowHead,children:[t.jsx(K,{size:15,color:U}),t.jsx("span",{style:ne.tWindowLabel,children:be}),Q&&t.jsx("span",{style:{...ne.tNow,color:U},children:"now"})]}),t.jsx("div",{style:ne.tWindowTime,children:ze}),t.jsx("div",{style:ne.tDots,children:Array.from({length:x}).map((G,N)=>t.jsx("span",{style:{...ne.tDot,...N<ce?{background:U,borderColor:U}:{}}},N))}),t.jsxs("div",{style:{...ne.tCount,...O?{color:U}:{}},children:[ce,"/",x,O?" ✓":""]})]},we)})}),t.jsx("div",{style:ne.tWriteBox,children:w?he?t.jsxs("div",{style:ne.tDoneMsg,children:["✓ ",wc.find(we=>we.key===w).label," complete. ",E?"All 18 done today! 🔥":"Next window unlocks ahead."]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{style:ne.tNote,children:"✍️ Type it out by hand — no copy-pasting. The act of writing is the point."}),t.jsx("textarea",{value:l,onChange:we=>a(we.target.value),onPaste:we=>{we.preventDefault(),g(!0),setTimeout(()=>g(!1),2500)},onDrop:we=>we.preventDefault(),placeholder:"Type your affirmation here…",style:{...ne.writeArea,...W?{border:"1px solid #4C9A6B"}:{}}}),d&&t.jsx("div",{style:ne.tPasteWarn,children:"Pasting is disabled — please type it."}),t.jsxs("div",{style:ne.tWriteActions,children:[t.jsxs("button",{onClick:re,disabled:h||(b[w]||0)===0,style:ne.tUndoBtn,title:"Undo last write",children:[t.jsx(wm,{size:14})," Undo"]}),t.jsxs("button",{onClick:Y,disabled:h||!W,style:{...ne.writeSave,flex:1,...W?{}:ne.saveDisabled},children:[t.jsx(Oe,{size:15})," ",W?"Log this write":"Type it to log"]})]})]}):t.jsx("div",{style:ne.tClosed,children:"Writing windows: 6 AM–12 PM, 12–6 PM, 6 PM–2 AM. Come back during a window."})})]}):t.jsx("div",{style:ne.tClosed,children:"Set a 369 affirmation above to start writing."})]})}async function j1(){return"Notification"in window?Notification.permission==="granted"?!0:Notification.permission==="denied"?!1:await Notification.requestPermission()==="granted":!1}function k1(e,r,n){const o=c.useRef({});c.useEffect(()=>{if(!e||!r)return;const i=()=>{var B;if(Notification.permission!=="granted")return;const l=r.window;if(!l)return;const a=r.counts||{},d=r.targets||{};if((a[l]||0)>=(d[l]||0))return;const g=r.today,h=`369-${n||""}-${g}-${l}`;if(o.current[h])return;o.current[h]=!0;const f=((B=wc.find(T=>T.key===l))==null?void 0:B.label)||"",m=(d[l]||0)-(a[l]||0);try{new Notification("369 — time to write ✍️",{body:`${n?`"${n}" · `:""}${f} window: ${m} more to go. Type your affirmation.`,tag:h})}catch{}};i();const s=setInterval(i,60*1e3);return()=>clearInterval(s)},[e,r,n])}function Ap({g:e,onOpen:r,onDelete:n,achieved:o}){return t.jsxs("div",{style:{...ne.goalCard,...o?{opacity:.96}:{},position:"relative"},children:[t.jsxs("button",{onClick:r,style:ne.goalCardBtn,children:[t.jsxs("div",{style:ne.thumbWrap,children:[e.image?t.jsx("img",{src:e.image,alt:"",style:ne.thumb}):t.jsx("div",{style:ne.thumbEmpty,children:t.jsx(Co,{size:26,color:"var(--text-3)"})}),o&&t.jsx("span",{style:ne.stamp,children:"✦ Manifested"})]}),t.jsxs("div",{style:ne.goalBody,children:[t.jsx("div",{style:ne.goalTitle,children:e.title}),t.jsxs("div",{style:ne.goalMeta,children:[o?t.jsxs("span",{style:{...ne.metaPill,color:"#4C9A6B",background:"rgba(76,154,107,0.12)"},children:[t.jsx(Yr,{size:12})," ",e.days_to_manifest!=null?`in ${e.days_to_manifest} day${e.days_to_manifest===1?"":"s"}`:"done"]}):t.jsxs("span",{style:{...ne.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[t.jsx(jn,{size:12})," ",e.streak," day streak"]}),t.jsxs("span",{style:ne.metaDim,children:[e.total_days," entr",e.total_days===1?"y":"ies"]})]})]})]}),t.jsx("button",{onClick:i=>{i.stopPropagation(),window.confirm(`Delete "${e.title}"?`)&&n()},style:ne.cardDelBtn,title:"Delete dream",children:t.jsx(vs,{size:14})})]})}function w1({goalId:e,onBack:r,onReload:n,onCelebrate:o,pickImage:i,musicId:s,setMusicId:l,musicOn:a,setMusicOn:d}){const[g,h]=c.useState(null),[f,m]=c.useState({}),[B,T]=c.useState(Bp()),[R,w]=c.useState(""),[p,b]=c.useState(null),[u,z]=c.useState(null),v=Bp(),I=c.useCallback(U=>{h(U);const ce={};(U.entries||[]).forEach(x=>{ce[x.date]=x.text}),m(ce),w(ce[v]||"")},[v]),E=c.useCallback(async()=>{I(await F.getGoldenGoal(e))},[e,I]);if(c.useEffect(()=>{E()},[E]),c.useEffect(()=>{if(!(g!=null&&g.t369_enabled))return;const U=setInterval(()=>{F.getGoldenGoal(e).then(I).catch(()=>{})},60*1e3);return()=>clearInterval(U)},[g==null?void 0:g.t369_enabled,e,I]),!g)return t.jsx("div",{style:ne.muted,children:"Loading…"});const S=B===v,j=B>g.created_date,Y=B<v,re=async()=>{await F.upsertGoldenEntry(e,{date:v,text:R}),await E(),n()},ee=async()=>{const U=await F.achieveGolden(e);o(g.title,U.days_to_manifest),await E(),n()},W=async()=>{await F.unachieveGolden(e),await E(),n()},he=async()=>{p.trim()&&(await F.updateGolden(e,{title:p.trim()}),b(null),await E(),n())},we=U=>F.updateGolden(e,{image:U}).then(()=>{E(),n()}),be=async()=>{await F.updateGolden(e,{t369_enabled:!g.t369_enabled}),await E(),n()},ze=async()=>{await F.updateGolden(e,{t369_affirmation:(u||"").trim()}),z(null),await E()},K=async()=>{window.confirm(`Delete "${g.title}"? This cannot be undone from here.`)&&(await F.deleteGolden(e),n(),r())};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:ne.detailTopRow,children:[t.jsxs("button",{onClick:r,style:ne.backBtn,children:[t.jsx(im,{size:16})," All dreams"]}),t.jsxs("button",{onClick:K,style:ne.deleteBtn,title:"Delete dream",children:[t.jsx(vs,{size:14})," Delete"]})]}),t.jsxs("div",{style:ne.detailHero,children:[t.jsxs("label",{style:ne.heroPhoto,children:[g.image?t.jsx("img",{src:g.image,alt:"",style:ne.heroImg}):t.jsxs("span",{style:ne.photoEmpty,children:[t.jsx(va,{size:20})," Add a photo"]}),t.jsxs("span",{style:ne.photoEdit,children:[t.jsx(vt,{size:12})," Edit photo"]}),t.jsx("input",{type:"file",accept:"image/*",onChange:U=>i(U,we),style:{display:"none"}})]}),t.jsxs("div",{style:ne.heroInfo,children:[g.achieved&&t.jsxs("span",{style:ne.heroStamp,children:["✦ Manifested",g.days_to_manifest!=null?` in ${g.days_to_manifest} day${g.days_to_manifest===1?"":"s"}`:""]}),p!==null?t.jsxs("div",{style:{display:"flex",gap:6,width:"100%"},children:[t.jsx("textarea",{autoFocus:!0,value:p,onChange:U=>b(U.target.value),style:{...ne.textarea,minHeight:60}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[t.jsx("button",{onClick:he,style:ne.iconSave,children:t.jsx(Oe,{size:14})}),t.jsx("button",{onClick:()=>b(null),style:ne.iconCancel,children:t.jsx(Fe,{size:14})})]})]}):t.jsxs("div",{style:ne.heroTitleRow,children:[t.jsx("div",{style:ne.heroTitle,children:g.title}),t.jsx("button",{onClick:()=>b(g.title),style:ne.ghostBtn,title:"Edit",children:t.jsx(vt,{size:13})})]}),t.jsxs("div",{style:ne.heroStats,children:[t.jsxs("span",{style:{...ne.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[t.jsx(jn,{size:13})," ",g.streak," day streak"]}),t.jsxs("span",{style:ne.metaDim,children:[g.total_days," entr",g.total_days===1?"y":"ies"]}),t.jsxs("span",{style:ne.metaDim,children:["since ",Rp(g.created_date)]})]})]})]}),!g.achieved&&t.jsxs("div",{style:ne.t369Row,children:[t.jsxs("div",{style:ne.t369RowLeft,children:[t.jsxs("span",{style:{...ne.tBadge,...g.t369_enabled?{}:ne.tBadgeOff},children:[t.jsx(Bg,{size:13})," 369"]}),t.jsxs("div",{children:[t.jsx("div",{style:ne.t369RowTitle,children:"Tesla's 369 Method"}),t.jsx("div",{style:ne.t369RowSub,children:g.t369_enabled?"On — write this dream 3×/6×/9× across the day.":"Off — using the simple daily entry."})]})]}),t.jsx("button",{onClick:be,style:{...ne.switch,...g.t369_enabled?ne.switchOn:{}},role:"switch","aria-checked":g.t369_enabled,title:"Toggle 369 method",children:t.jsx("span",{style:{...ne.switchKnob,...g.t369_enabled?ne.switchKnobOn:{}}})})]}),g.t369_enabled&&!g.achieved&&t.jsxs(t.Fragment,{children:[u!==null||!g.t369_affirmation?t.jsxs("div",{style:ne.card,children:[t.jsx("div",{style:ne.cardTitle,children:"Your 369 affirmation"}),t.jsx("textarea",{autoFocus:!0,value:u??g.t369_affirmation??"",onChange:U=>z(U.target.value),placeholder:"The exact line you'll write 18× a day, e.g. 'I am grateful for my dream home.'",style:ne.textarea}),t.jsxs("div",{style:ne.formActions,children:[g.t369_affirmation&&t.jsxs("button",{onClick:()=>z(null),style:ne.cancelBtn,children:[t.jsx(Fe,{size:14})," Cancel"]}),t.jsxs("button",{onClick:ze,disabled:!(u??"").trim()&&!g.t369_affirmation,style:{...ne.saveBtn,...(u??g.t369_affirmation??"").trim()?{}:ne.saveDisabled},children:[t.jsx(Oe,{size:15})," Save affirmation"]})]})]}):t.jsxs("div",{style:ne.tAffShow,children:[t.jsx(cc,{size:15,color:$r}),t.jsx("p",{style:ne.tAffText,children:g.t369_affirmation}),t.jsx("button",{onClick:()=>z(g.t369_affirmation),style:ne.ghostBtn,title:"Edit affirmation",children:t.jsx(vt,{size:13})})]}),t.jsx(v1,{g,onChanged:I,musicId:s,setMusicId:l,musicOn:a,setMusicOn:d})]}),!g.t369_enabled&&t.jsxs("div",{style:ne.writeCard,children:[t.jsx("div",{style:ne.tuneRow,children:t.jsx(_m,{musicId:s,musicOn:a,setMusicOn:d})}),t.jsxs("div",{style:ne.writeNav,children:[t.jsx("button",{onClick:()=>T(U=>Ep(U,-1)),disabled:!j,style:{...ne.navBtn,...j?{}:ne.navDisabled},children:t.jsx(wn,{size:16})}),t.jsx("div",{style:ne.writeDate,children:S?"Today":Rp(B)}),t.jsx("button",{onClick:()=>T(U=>Ep(U,1)),disabled:!Y,style:{...ne.navBtn,...Y?{}:ne.navDisabled},children:t.jsx(nn,{size:16})})]}),S&&!g.achieved?t.jsxs(t.Fragment,{children:[t.jsx("textarea",{value:R,onChange:U=>w(U.target.value),placeholder:"Write it again today, as if it's already yours…",style:ne.writeArea}),t.jsxs("button",{onClick:re,style:ne.writeSave,children:[t.jsx(Oe,{size:15})," Save today's entry"]})]}):t.jsx("div",{style:ne.readEntry,children:f[B]?t.jsxs(t.Fragment,{children:[t.jsx(cc,{size:16,color:"var(--text-3)"}),t.jsx("p",{style:ne.readText,children:f[B]})]}):t.jsx("div",{style:ne.muted,children:"Nothing written on this day."})})]}),g.achieved?t.jsx("button",{onClick:W,style:ne.unmanifestBtn,children:"Undo manifested"}):t.jsxs("button",{onClick:ee,style:ne.manifestBtn,children:[t.jsx(Co,{size:16})," Mark as manifested"]})]})}function S1({data:e,onClose:r}){return t.jsx("div",{style:ne.celebOverlay,onClick:r,children:t.jsxs("div",{style:ne.celebBox,onClick:n=>n.stopPropagation(),children:[t.jsx("div",{style:ne.celebEmoji,children:"✨🌟✨"}),t.jsx("div",{style:ne.celebTitle,children:"It's happening!"}),t.jsxs("div",{style:ne.celebDream,children:['"',e.title,'"']}),t.jsxs("div",{style:ne.celebSub,children:[e.days!=null?`Manifested in ${e.days} day${e.days===1?"":"s"}.`:"Manifested."," The universe delivered. 🙏"]}),t.jsx("button",{onClick:r,style:ne.celebBtn,children:"Wonderful"})]})})}function C1({musicId:e,on:r}){return!e||!r?null:t.jsx("iframe",{title:"golden-music",src:`https://www.youtube.com/embed/${e}?autoplay=1&loop=1&playlist=${e}&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}})}function _m({musicId:e,musicOn:r,setMusicOn:n}){return e?t.jsxs("button",{onClick:()=>n(o=>!o),style:{...ne.tRemBtn,...r?ne.tuneOn:{}},title:r?"Soft tunes on":"Play soft tunes",children:[r?t.jsx(bm,{size:14}):t.jsx(Cg,{size:14})," Soft tunes"]}):t.jsx("span",{style:ne.tuneHint,children:"Add a track in Settings → Music"})}const $r="#C9A227",ne={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:860,margin:"0 auto",position:"relative"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:$r,color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"11px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:70,resize:"vertical",lineHeight:1.5},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:$r,color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:12},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:14},goalCard:{textAlign:"left",border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},goalCardBtn:{textAlign:"left",border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"inherit",display:"flex",flexDirection:"column",width:"100%"},cardDelBtn:{position:"absolute",top:8,left:8,border:"none",background:"rgba(0,0,0,0.55)",color:"#fff",width:26,height:26,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",zIndex:2},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 10",background:"var(--surface-2)"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},thumbEmpty:{width:"100%",height:"100%",display:"grid",placeItems:"center"},stamp:{position:"absolute",top:8,right:8,transform:"rotate(6deg)",background:"rgba(76,154,107,0.95)",color:"#fff",fontSize:11,fontWeight:800,letterSpacing:"0.04em",padding:"3px 9px",borderRadius:6,border:"1.5px solid #fff",textTransform:"uppercase"},goalBody:{padding:"11px 13px",display:"flex",flexDirection:"column",gap:8},goalTitle:{fontSize:14,fontWeight:600,lineHeight:1.35,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},goalMeta:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},metaPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:700,padding:"2px 8px",borderRadius:10},metaDim:{fontSize:11,color:"var(--text-3)",fontWeight:500},detailTopRow:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16,gap:10},backBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},deleteBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid rgba(194,83,107,0.4)",background:"rgba(194,83,107,0.08)",color:"#C2536B",padding:"7px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},detailHero:{display:"flex",flexDirection:"column",gap:14,marginBottom:16},heroPhoto:{position:"relative",width:"100%",borderRadius:14,overflow:"hidden",border:"1px solid var(--border)",cursor:"pointer",background:"var(--surface-2)",display:"flex",alignItems:"center",justifyContent:"center",minHeight:120},heroImg:{width:"100%",maxHeight:"62vh",objectFit:"contain",display:"block"},photoEdit:{position:"absolute",bottom:8,right:8,display:"flex",alignItems:"center",gap:5,background:"rgba(0,0,0,0.6)",color:"#fff",fontSize:11,fontWeight:600,padding:"4px 8px",borderRadius:7},heroInfo:{display:"flex",flexDirection:"column",gap:10,alignItems:"center",textAlign:"center"},heroStamp:{alignSelf:"center",background:"rgba(76,154,107,0.14)",color:"#4C9A6B",fontSize:12,fontWeight:800,padding:"4px 10px",borderRadius:8,letterSpacing:"0.03em"},heroTitleRow:{display:"flex",alignItems:"flex-start",gap:8,justifyContent:"center"},heroTitle:{fontSize:23,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.35},heroStats:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",justifyContent:"center"},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",flexShrink:0},iconSave:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},iconCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},writeCard:{background:"var(--surface)",borderRadius:14,padding:16,border:"1px solid var(--border)",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},tuneRow:{display:"flex",justifyContent:"flex-end",marginBottom:10},tuneOn:{background:$r,color:"#fff",borderColor:$r},tuneHint:{fontSize:11,color:"var(--text-3)",fontWeight:500},writeNav:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,marginBottom:12},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center"},navDisabled:{opacity:.35,cursor:"not-allowed"},writeDate:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:150,textAlign:"center"},writeArea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:120,resize:"vertical",lineHeight:1.6},writeSave:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",background:$r,color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},readEntry:{display:"flex",gap:8,padding:"6px 2px"},readText:{fontSize:15,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.6,margin:0,whiteSpace:"pre-wrap"},manifestBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,width:"100%",border:"none",background:"linear-gradient(135deg,#C9A227,#E0BD45)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:800,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 2px 10px rgba(201,162,39,0.35)"},unmanifestBtn:{display:"block",margin:"0 auto",border:"none",background:"none",color:"var(--text-3)",fontSize:12,fontWeight:600,cursor:"pointer",textDecoration:"underline",fontFamily:"inherit"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.6)",zIndex:200,display:"grid",placeItems:"center",padding:16},celebBox:{background:"var(--surface)",color:"var(--text)",borderRadius:20,padding:"36px 30px",textAlign:"center",maxWidth:360,boxShadow:"0 12px 48px rgba(0,0,0,0.3)"},celebEmoji:{fontSize:40,marginBottom:10},celebTitle:{fontSize:24,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginBottom:10,color:$r},celebDream:{fontSize:15,fontStyle:"italic",fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.5,marginBottom:10},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:$r,color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},t369Row:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:"12px 16px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},t369RowLeft:{display:"flex",alignItems:"center",gap:11},t369RowTitle:{fontSize:14,fontWeight:700},t369RowSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},tBadgeOff:{background:"var(--border)",color:"var(--text-3)"},switch:{position:"relative",width:46,height:26,borderRadius:14,border:"none",background:"var(--border)",cursor:"pointer",flexShrink:0,transition:"background 0.2s",padding:0},switchOn:{background:$r},switchKnob:{position:"absolute",top:3,left:3,width:20,height:20,borderRadius:"50%",background:"#fff",transition:"left 0.2s",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},switchKnobOn:{left:23},tCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:16,padding:18,marginBottom:20,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},tHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12,flexWrap:"wrap",marginBottom:14},tTitleWrap:{display:"flex",alignItems:"center",gap:11},tBadge:{display:"inline-flex",alignItems:"center",gap:4,background:"linear-gradient(135deg,#C9A227,#E0BD45)",color:"#fff",fontSize:14,fontWeight:800,padding:"6px 10px",borderRadius:10,letterSpacing:"0.02em",flexShrink:0},tTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},tSub:{fontSize:12,color:"var(--text-3)",marginTop:2},tHeadBtns:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",justifyContent:"flex-end"},tRemBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 12px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tRemOn:{background:$r,color:"#fff",borderColor:$r},tStreakRow:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:14},tStreakBox:{background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px"},tStreakLabel:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,fontWeight:600,color:"var(--text-2)"},tStreakVal:{fontSize:21,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.1},tStreakHint:{fontSize:11,color:"var(--text-3)",marginTop:4,fontWeight:500},tProgTrack:{height:5,borderRadius:4,background:"var(--border)",marginTop:8,overflow:"hidden"},tProgFill:{height:"100%",background:"linear-gradient(90deg,#C2773B,#C9A227)",borderRadius:4,transition:"width 0.4s"},tAffShow:{display:"flex",alignItems:"flex-start",gap:9,background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px",marginBottom:14},tAffText:{flex:1,fontSize:15,fontFamily:"'Fraunces',Georgia,serif",fontStyle:"italic",lineHeight:1.5,margin:0,whiteSpace:"pre-wrap"},tWindows:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:10,marginBottom:14},tWindow:{background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:"11px 12px",transition:"box-shadow 0.2s, border-color 0.2s"},tWindowHead:{display:"flex",alignItems:"center",gap:6},tWindowLabel:{fontSize:13,fontWeight:700},tNow:{fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",marginLeft:"auto"},tWindowTime:{fontSize:10.5,color:"var(--text-3)",marginTop:2,marginBottom:8,fontWeight:500},tDots:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:7},tDot:{width:11,height:11,borderRadius:"50%",border:"1.5px solid var(--border)",background:"transparent",transition:"background 0.2s"},tCount:{fontSize:12,fontWeight:700,color:"var(--text-2)"},tWriteBox:{borderTop:"1px solid var(--border)",paddingTop:14},tNote:{fontSize:12,fontWeight:600,color:"#C2773B",background:"rgba(194,119,59,0.10)",borderRadius:8,padding:"8px 11px",marginBottom:9},tPasteWarn:{fontSize:11.5,color:"#C2536B",fontWeight:600,marginTop:6},tWriteActions:{display:"flex",gap:8,marginTop:10},tUndoBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"11px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tClosed:{fontSize:12.5,color:"var(--text-3)",textAlign:"center",padding:"10px 4px",lineHeight:1.5},tDoneMsg:{fontSize:13,fontWeight:700,color:"#4C9A6B",textAlign:"center",padding:"10px 4px"}},gd=[{id:"meditation",label:"Meditation Hub",icon:Ty,color:"#8268B0"},{id:"visualization",label:"Visualization",icon:ms,color:"#3A7CA5"}],Wp=e=>{if(!e)return"";const r=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(r))return r;const n=r.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},z1=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>1e3?(a=a*1e3/l,l=1e3):a>1e3&&(l=l*1e3/a,a=1e3);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),r(d.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)}),T1=e=>({id:null,kind:e,title:"",url:"",image:""});function I1(){const[e,r]=c.useState("meditation"),[n,o]=c.useState([]),[i,s]=c.useState(!1),[l,a]=c.useState(null),[d,g]=c.useState(null),h=c.useCallback(async()=>{try{o(await F.getMedia())}catch{}s(!0)},[]);c.useEffect(()=>{h()},[h]);const{deleteItem:f,toasts:m,handleUndo:B,handleDismiss:T}=ur(F.deleteMedia,F.restoreMedia,h);c.useEffect(()=>{if(!d)return;const I=10,E=setInterval(()=>{document.hidden||F.addScreenTime("mindscape",I).catch(()=>{})},I*1e3);return()=>clearInterval(E)},[d]);const R=gd.find(I=>I.id===e),w=n.filter(I=>I.kind===e),p=I=>a({id:I.id,kind:I.kind,title:I.title,url:`https://youtu.be/${I.youtube_id}`,image:I.image}),b=async I=>{var S;const E=(S=I.target.files)==null?void 0:S[0];if(E){try{const j=await z1(E);a(Y=>({...Y,image:j}))}catch{}I.target.value=""}},u=l?[!l.title.trim()&&"a title",!l.image&&"an image",!Wp(l.url)&&"a valid YouTube link"].filter(Boolean):[],z=!!l&&u.length===0,v=async()=>{if(!z)return;const I={kind:l.kind,title:l.title.trim(),image:l.image,youtube_id:Wp(l.url)};l.id?await F.updateMedia(l.id,I):await F.createMedia(I),a(null),h()};return t.jsxs("div",{style:dt.page,children:[d&&t.jsx("iframe",{title:"mindscape-audio",src:`https://www.youtube.com/embed/${d.youtube_id}?autoplay=1&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}}),t.jsxs("div",{style:dt.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:dt.eyebrow,children:"Anvil · Mindscape"}),t.jsx("h1",{style:dt.h1,children:"Mindscape"}),t.jsx("div",{style:dt.subhead,children:"Close your eyes and listen — guided meditation and visualization."})]}),!l&&t.jsxs("button",{onClick:()=>a(T1(e)),style:{...dt.addBtn,background:R.color},children:[t.jsx(st,{size:15})," Add"]})]}),t.jsx("div",{style:dt.tabs,children:gd.map(I=>{const E=I.icon,S=e===I.id;return t.jsxs("button",{onClick:()=>{r(I.id),a(null)},style:{...dt.tab,...S?{background:I.color,color:"#fff",borderColor:I.color}:{}},children:[t.jsx(E,{size:15})," ",I.label]},I.id)})}),l&&t.jsxs("div",{style:dt.card,children:[t.jsx("div",{style:dt.cardTitle,children:l.id?"Edit":`New ${gd.find(I=>I.id===l.kind).label}`}),t.jsx("input",{placeholder:"YouTube link (plays as audio only)",value:l.url,onChange:I=>a({...l,url:I.target.value}),style:dt.input,autoFocus:!0}),t.jsx("input",{placeholder:"Title (required)",value:l.title,onChange:I=>a({...l,title:I.target.value}),style:{...dt.input,marginTop:8}}),t.jsxs("label",{style:dt.photoPick,children:[l.image?t.jsx("img",{src:l.image,alt:"",style:dt.photoPreview}):t.jsxs("span",{style:dt.photoEmpty,children:[t.jsx(va,{size:18})," Add cover image (required)"]}),t.jsx("input",{type:"file",accept:"image/*",onChange:b,style:{display:"none"}})]}),!z&&t.jsxs("div",{style:dt.warn,children:["Add ",u.join(", ")," to save."]}),t.jsxs("div",{style:dt.formActions,children:[t.jsxs("button",{onClick:()=>a(null),style:dt.cancelBtn,children:[t.jsx(Fe,{size:14})," Cancel"]}),t.jsxs("button",{onClick:v,disabled:!z,style:{...dt.saveBtn,background:z?R.color:"var(--border)",color:z?"#fff":"var(--text-3)",cursor:z?"pointer":"not-allowed"},children:[t.jsx(Oe,{size:15})," ",l.id?"Save":"Add"]})]})]}),i?w.length===0?t.jsxs("div",{style:dt.empty,children:["Nothing here yet — add a ",R.label.toLowerCase()," track."]}):t.jsx("div",{style:dt.grid,children:w.map(I=>{const E=(d==null?void 0:d.id)===I.id;return t.jsxs("div",{style:dt.mediaCard,children:[t.jsxs("button",{onClick:()=>g(E?null:I),style:dt.coverBtn,title:E?"Pause":"Play",children:[t.jsx("img",{src:I.image,alt:"",style:dt.cover}),t.jsx("span",{style:{...dt.playOverlay,background:E?"rgba(0,0,0,0.45)":"rgba(0,0,0,0.28)"},children:t.jsx("span",{style:{...dt.playCircle,background:R.color},children:E?t.jsx(hm,{size:20,color:"#fff",fill:"#fff"}):t.jsx(Tg,{size:20,color:"#fff",fill:"#fff"})})}),E&&t.jsxs("span",{style:dt.nowPlaying,children:[t.jsx(bm,{size:11})," Playing"]})]}),t.jsxs("div",{style:dt.mediaBody,children:[t.jsx("div",{style:dt.mediaTitle,children:I.title}),t.jsxs("div",{style:dt.cardActions,children:[t.jsx("button",{onClick:()=>p(I),style:dt.iconBtn,title:"Edit",children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:()=>{(d==null?void 0:d.id)===I.id&&g(null),f(I.id,I.title)},style:dt.iconBtn,title:"Delete",children:t.jsx(Fe,{size:14})})]})]})]},I.id)})}):t.jsx("div",{style:dt.muted,children:"Loading…"}),t.jsx(pr,{toasts:m,onUndo:B,onDismiss:T})]})}const dt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:900,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},tabs:{display:"flex",gap:8,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:200,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},warn:{fontSize:12,color:"#C2773B",marginTop:8,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,fontFamily:"inherit"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:16},mediaCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},coverBtn:{position:"relative",border:"none",padding:0,cursor:"pointer",display:"block",width:"100%",aspectRatio:"1",background:"var(--surface-2)"},cover:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center"},playCircle:{width:46,height:46,borderRadius:"50%",display:"grid",placeItems:"center",boxShadow:"0 2px 10px rgba(0,0,0,0.3)"},nowPlaying:{position:"absolute",bottom:8,left:8,display:"flex",alignItems:"center",gap:4,background:"rgba(0,0,0,0.65)",color:"#fff",fontSize:11,fontWeight:700,padding:"3px 8px",borderRadius:7},mediaBody:{padding:"12px 14px",display:"flex",alignItems:"flex-start",gap:8},mediaTitle:{flex:1,fontSize:14.5,fontWeight:600,lineHeight:1.4,minWidth:0,wordBreak:"break-word"},cardActions:{display:"flex",gap:2,flexShrink:0,marginTop:1},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},$m={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},B1=Object.keys($m),E1="#9A7B4F";function R1(e=760){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const D1=()=>{const e=new Date,r=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${r(e.getMonth()+1)}-${r(e.getDate())}`},F1=e=>{if(!e)return"";const r=new Date(e+"T00:00:00");return isNaN(r)?e:r.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},ud=e=>(e||"").slice(0,4),A1=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>r(o.result),o.onerror=n,o.readAsDataURL(e)}),W1=(e,r=1e3)=>new Promise((n,o)=>{const i=new Image;i.onload=()=>{let{width:s,height:l}=i;s>l&&s>r?(l=l*r/s,s=r):l>r&&(s=s*r/l,l=r);const a=document.createElement("canvas");a.width=s,a.height=l,a.getContext("2d").drawImage(i,0,0,s,l),n(a.toDataURL("image/jpeg",.82))},i.onerror=o,i.src=e});function M1({src:e,onCancel:r,onCrop:n,onKeepOriginal:o}){const[l,a]=c.useState(null),[d,g]=c.useState(1),[h,f]=c.useState({x:0,y:0}),m=c.useRef(null);c.useEffect(()=>{const v=new Image;v.onload=()=>{a(v);const I=Math.max(300/v.width,300/v.height);g(1),v._base=I;const E=v.width*I,S=v.height*I;f({x:(300-E)/2,y:(300-S)/2})},v.src=e},[e]);const B=l?l._base*d:1,T=l?l.width*B:0,R=l?l.height*B:0,w=(v,I,E)=>({x:Math.min(0,Math.max(300-I,v.x)),y:Math.min(0,Math.max(300-E,v.y))});c.useEffect(()=>{l&&f(v=>w(v,T,R))},[d,l]);const p=v=>{const I=v.touches?v.touches[0]:v;m.current={sx:I.clientX,sy:I.clientY,ox:h.x,oy:h.y}},b=v=>{if(!m.current)return;const I=v.touches?v.touches[0]:v,E=m.current.ox+(I.clientX-m.current.sx),S=m.current.oy+(I.clientY-m.current.sy);f(w({x:E,y:S},T,R))},u=()=>{m.current=null},z=()=>{if(!l)return;const v=document.createElement("canvas");v.width=700,v.height=700;const I=v.getContext("2d"),E=700/300;I.drawImage(l,h.x*E,h.y*E,T*E,R*E),n(v.toDataURL("image/jpeg",.85))};return t.jsx("div",{style:mr.overlay,onClick:r,children:t.jsxs("div",{style:mr.box,onClick:v=>v.stopPropagation(),children:[t.jsxs("div",{style:mr.head,children:["Crop to square",t.jsx("button",{onClick:r,style:mr.close,children:t.jsx(Fe,{size:16})})]}),t.jsxs("div",{style:{...mr.frame,width:300,height:300},onMouseDown:p,onMouseMove:b,onMouseUp:u,onMouseLeave:u,onTouchStart:p,onTouchMove:b,onTouchEnd:u,children:[l&&t.jsx("img",{src:e,alt:"",draggable:!1,style:{position:"absolute",left:h.x,top:h.y,width:T,height:R,userSelect:"none",pointerEvents:"none"}}),t.jsx("div",{style:mr.grid})]}),t.jsxs("div",{style:mr.zoomRow,children:[t.jsx("span",{style:mr.zoomLbl,children:"Zoom"}),t.jsx("input",{type:"range",min:"1",max:"3",step:"0.01",value:d,onChange:v=>g(parseFloat(v.target.value)),style:{flex:1}})]}),t.jsx("div",{style:mr.hint,children:"Drag to reposition · slide to zoom"}),t.jsxs("div",{style:mr.actions,children:[t.jsx("button",{onClick:r,style:mr.cancel,children:"Cancel"}),t.jsx("button",{onClick:o,style:mr.keep,children:"Keep original"}),t.jsxs("button",{onClick:z,style:mr.apply,children:[t.jsx(Oe,{size:15})," Square crop"]})]})]})})}const L1={id:null,title:"",date:D1(),pillar:"",reward:"",image:"",note:""};function _1(){const e=Jn(),r=S=>Or(S,e.code),n=R1(),[o,i]=c.useState([]),[s,l]=c.useState(null),[a,d]=c.useState(!1),[g,h]=c.useState(null),f=c.useRef(null),m=c.useCallback(()=>{F.getAchievements().then(i).catch(()=>{})},[]);c.useEffect(()=>{m()},[m]);const{deleteItem:B,toasts:T,handleUndo:R,handleDismiss:w}=ur(F.deleteAchievement,F.restoreAchievement,m),p=()=>l({...L1}),b=S=>l({id:S.id,title:S.title,date:S.date,pillar:S.pillar||"",reward:S.reward?String(S.reward):"",image:S.image||"",note:S.note||""}),u=async S=>{var Y;const j=(Y=S.target.files)==null?void 0:Y[0];if(j){try{const re=await A1(j);h(re)}catch{}f.current&&(f.current.value="")}},z=async()=>{let S=g;try{g&&(S=await W1(g))}catch{}l(j=>({...j,image:S})),h(null)},v=s&&s.title.trim()&&s.date,I=async()=>{if(!v||a)return;d(!0);const S={title:s.title.trim(),date:s.date,pillar:s.pillar||null,reward:parseFloat(s.reward)||0,image:s.image||null,note:s.note.trim()};try{s.id?await F.updateAchievement(s.id,S):await F.createAchievement(S),l(null),m()}catch{}finally{d(!1)}},E=o.reduce((S,j)=>S+(j.reward||0),0);return t.jsxs("div",{style:Qe.page,children:[t.jsxs("div",{style:Qe.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:Qe.eyebrow,children:"Anvil · Achievements"}),t.jsx("h1",{style:Qe.h1,children:"Achievements"}),t.jsx("div",{style:Qe.subhead,children:"Your tree of wins — newest at the top, scroll down through the past."})]}),t.jsxs("div",{style:Qe.headRight,children:[E>0&&t.jsxs("div",{style:Qe.totalBadge,children:[t.jsx(fs,{size:14,color:"#C9A227"})," ",r(E)," earned"]}),t.jsxs("button",{onClick:p,style:Qe.addBtn,children:[t.jsx(st,{size:15})," Add achievement"]})]})]}),o.length===0?t.jsxs("div",{style:Qe.empty,children:[t.jsx(Yr,{size:30,color:"var(--text-3)"}),t.jsx("div",{style:{marginTop:10},children:"No achievements yet."}),t.jsx("div",{style:Qe.emptySub,children:"Plant your first win — it'll grow into a timeline you can look back on."})]}):t.jsxs("div",{style:{...Qe.timeline,paddingLeft:0},children:[t.jsx("div",{style:{...Qe.trunk,left:n?13:"50%"}}),o.map((S,j)=>{const Y=$m[S.pillar]||E1,re=!n&&j%2===1,ee=o[j-1],W=!ee||ud(ee.date)!==ud(S.date);return t.jsxs("div",{children:[W&&t.jsx("div",{style:{...Qe.yearRow,justifyContent:n?"flex-start":"center",paddingLeft:n?36:0},children:t.jsx("span",{style:Qe.yearChip,children:ud(S.date)})}),t.jsxs("div",{style:{...Qe.row,gridTemplateColumns:n?"28px 1fr":"1fr 44px 1fr"},children:[!n&&t.jsx("div",{style:{gridColumn:1,display:"flex",justifyContent:"flex-end"},children:re&&t.jsx(Mp,{a:S,color:Y,side:"left",money:r,onEdit:()=>b(S),onDelete:()=>B(S.id,S.title)})}),t.jsx("div",{style:{gridColumn:n?1:2,display:"flex",justifyContent:"center",position:"relative"},children:t.jsx("div",{style:{...Qe.node,borderColor:Y,background:"var(--surface)"},children:t.jsx("div",{style:{...Qe.nodeDot,background:Y}})})}),t.jsx("div",{style:{gridColumn:n?2:3,display:"flex",justifyContent:"flex-start"},children:(n||!re)&&t.jsx(Mp,{a:S,color:Y,side:n?"mobile":"right",money:r,onEdit:()=>b(S),onDelete:()=>B(S.id,S.title)})})]})]},S.id)})]}),s&&t.jsx("div",{style:Qe.overlay,onClick:()=>l(null),children:t.jsxs("div",{style:Qe.modal,onClick:S=>S.stopPropagation(),children:[t.jsxs("div",{style:Qe.modalHead,children:[t.jsx("div",{style:Qe.modalTitle,children:s.id?"Edit achievement":"New achievement"}),t.jsx("button",{onClick:()=>l(null),style:Qe.iconBtn,children:t.jsx(Fe,{size:16})})]}),t.jsx("label",{style:Qe.label,children:"Title *"}),t.jsx("input",{autoFocus:!0,value:s.title,onChange:S=>l(j=>({...j,title:S.target.value})),placeholder:"What did you achieve?",style:Qe.input}),t.jsxs("div",{style:Qe.formRow,children:[t.jsxs("div",{style:{flex:1},children:[t.jsxs("label",{style:Qe.label,children:[t.jsx(Fy,{size:12})," Date *"]}),t.jsx("input",{type:"date",value:s.date,onChange:S=>l(j=>({...j,date:S.target.value})),style:Qe.input})]}),t.jsxs("div",{style:{flex:1},children:[t.jsx("label",{style:Qe.label,children:"Pillar (optional)"}),t.jsxs("select",{value:s.pillar,onChange:S=>l(j=>({...j,pillar:S.target.value})),style:Qe.input,children:[t.jsx("option",{value:"",children:"— None —"}),B1.map(S=>t.jsx("option",{value:S,children:S},S))]})]})]}),t.jsxs("label",{style:Qe.label,children:[t.jsx(fs,{size:12})," Reward (",e.code,") — optional gesture of appreciation"]}),t.jsx("input",{type:"number",min:"0",step:"any",value:s.reward,onChange:S=>l(j=>({...j,reward:S.target.value})),placeholder:"0",style:Qe.input}),t.jsx("label",{style:Qe.label,children:"Photo (optional)"}),s.image?t.jsxs("div",{style:Qe.imgWrap,children:[t.jsx("img",{src:s.image,alt:"",style:Qe.imgPreview}),t.jsx("button",{onClick:()=>l(S=>({...S,image:""})),style:Qe.imgRemove,children:t.jsx(Fe,{size:14})})]}):t.jsxs("button",{onClick:()=>{var S;return(S=f.current)==null?void 0:S.click()},style:Qe.uploadBtn,children:[t.jsx(Qy,{size:15})," Add a photo"]}),t.jsx("input",{ref:f,type:"file",accept:"image/*",onChange:u,style:{display:"none"}}),t.jsx("label",{style:Qe.label,children:"Note (optional)"}),t.jsx("textarea",{value:s.note,onChange:S=>l(j=>({...j,note:S.target.value})),placeholder:"The story behind it…",rows:3,style:{...Qe.input,resize:"vertical",fontFamily:"inherit"}}),t.jsxs("div",{style:Qe.modalActions,children:[t.jsx("button",{onClick:()=>l(null),style:Qe.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:I,disabled:!v||a,style:{...Qe.saveBtn,...!v||a?{opacity:.5,cursor:"not-allowed"}:{}},children:[t.jsx(Oe,{size:15})," ",s.id?"Save":"Add"]})]})]})}),g&&t.jsx(M1,{src:g,onCancel:()=>h(null),onKeepOriginal:z,onCrop:S=>{l(j=>({...j,image:S})),h(null)}}),t.jsx(pr,{toasts:T,onUndo:R,onDismiss:w})]})}function Mp({a:e,color:r,side:n,money:o,onEdit:i,onDelete:s}){return t.jsxs("div",{style:{...Qe.card,borderTop:`3px solid ${r}`,textAlign:n==="left"?"right":"left"},children:[t.jsxs("div",{style:{...Qe.cardTop,flexDirection:n==="left"?"row-reverse":"row"},children:[t.jsx("span",{style:{...Qe.dateChip,background:`${r}1A`,color:r},children:F1(e.date)}),t.jsxs("div",{style:{display:"flex",gap:2},children:[t.jsx("button",{onClick:i,style:Qe.ghostBtn,title:"Edit",children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:s,style:Qe.ghostBtn,title:"Delete",children:t.jsx(Fe,{size:14})})]})]}),t.jsx("div",{style:Qe.cardTitle,children:e.title}),e.image&&t.jsx("img",{src:e.image,alt:"",style:Qe.cardImg}),e.note&&t.jsx("div",{style:Qe.cardNote,children:e.note}),e.reward>0&&t.jsxs("div",{style:{...Qe.rewardBadge,marginLeft:n==="left"?"auto":0},children:[t.jsx(fs,{size:13})," ",o(e.reward)]})]})}const Qe={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},totalBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{textAlign:"center",color:"var(--text-3)",padding:"60px 16px",fontSize:14,fontWeight:600},emptySub:{fontSize:12.5,fontWeight:400,marginTop:6,maxWidth:320,marginInline:"auto",lineHeight:1.5},timeline:{position:"relative",maxWidth:1e3,margin:"0 auto",paddingBottom:30},trunk:{position:"absolute",top:8,bottom:8,width:3,background:"linear-gradient(to bottom, var(--border), var(--border))",transform:"translateX(-1.5px)",borderRadius:2},yearRow:{display:"flex",margin:"6px 0 12px"},yearChip:{fontSize:11.5,fontWeight:800,letterSpacing:"0.06em",color:"var(--text-2)",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:"4px 12px",position:"relative",zIndex:2},row:{display:"grid",alignItems:"center",gap:8,marginBottom:16},node:{width:20,height:20,borderRadius:"50%",border:"3px solid",display:"grid",placeItems:"center",zIndex:2,boxShadow:"0 0 0 4px var(--bg)"},nodeDot:{width:7,height:7,borderRadius:"50%"},card:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.06)",maxWidth:420,width:"100%",boxSizing:"border-box"},cardTop:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,marginBottom:7},dateChip:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,whiteSpace:"nowrap"},cardTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",lineHeight:1.3,wordBreak:"break-word"},cardImg:{width:"100%",maxHeight:220,objectFit:"cover",borderRadius:9,marginTop:9,display:"block"},cardNote:{fontSize:12.5,color:"var(--text-2)",marginTop:7,lineHeight:1.5,whiteSpace:"pre-wrap",wordBreak:"break-word"},rewardBadge:{display:"inline-flex",alignItems:"center",gap:5,marginTop:9,background:"rgba(201,162,39,0.12)",color:"#8A6E1A",border:"1px solid rgba(201,162,39,0.3)",padding:"3px 10px",borderRadius:14,fontSize:12,fontWeight:700},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:6},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:60,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:460,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},label:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)"},formRow:{display:"flex",gap:10},uploadBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",border:"1.5px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"11px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},imgWrap:{position:"relative",borderRadius:10,overflow:"hidden"},imgPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block",borderRadius:10},imgRemove:{position:"absolute",top:8,right:8,border:"none",background:"rgba(0,0,0,0.55)",color:"#fff",width:28,height:28,borderRadius:"50%",cursor:"pointer",display:"grid",placeItems:"center"},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},mr={overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.62)",zIndex:300,display:"grid",placeItems:"center",padding:16},box:{background:"var(--surface)",borderRadius:16,padding:"18px",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",maxWidth:"92vw"},head:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},close:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},frame:{position:"relative",overflow:"hidden",borderRadius:12,background:"#000",cursor:"grab",touchAction:"none",margin:"0 auto",maxWidth:"84vw"},grid:{position:"absolute",inset:0,pointerEvents:"none",boxShadow:"inset 0 0 0 1px rgba(255,255,255,0.5)",backgroundImage:"linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",backgroundSize:"33.33% 33.33%"},zoomRow:{display:"flex",alignItems:"center",gap:10,marginTop:14},zoomLbl:{fontSize:12,fontWeight:700,color:"var(--text-2)"},hint:{fontSize:11,color:"var(--text-3)",textAlign:"center",marginTop:8},actions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:14,flexWrap:"wrap"},cancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},keep:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},apply:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}};function $1(e=760){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const ll=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},P1=e=>e?new Date(e+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"",Qr="#C9772E",Ti=[{id:"todo",label:"Want to",color:"#3A7CA5"},{id:"doing",label:"Enjoying",color:"#C9772E"},{id:"done",label:"Satisfied",color:"#4C9A6B"}],N1=[{id:"text",label:"Text"},{id:"number",label:"Number"},{id:"link",label:"Link"}],pd=e=>(e&&typeof e=="object"?e.type:"text")||"text",Bn=e=>(e&&typeof e=="object"?e.name:e)||"";function O1(){const e=$1(),[r,n]=c.useState([]),[o,i]=c.useState(null),[s,l]=c.useState(!1),[a,d]=c.useState(null),[g,h]=c.useState(null),[f,m]=c.useState(null),[B,T]=c.useState(null),[R,w]=c.useState(null),[p,b]=c.useState([]),u=c.useRef({}),z=c.useCallback(()=>{F.getDelight().then(P=>{n(P),i(X=>{var me;return X&&P.some(D=>D.id===X)?X:((me=P[0])==null?void 0:me.id)??null}),l(!0)}).catch(()=>l(!0))},[]);c.useEffect(()=>{z()},[z]),c.useEffect(()=>{b([])},[o]);const{deleteItem:v,toasts:I,handleUndo:E,handleDismiss:S}=ur(F.deleteDelightItem,F.restoreDelightItem,z),j=r.find(P=>P.id===o)||null,Y=c.useMemo(()=>{const P={todo:[],doing:[],done:[]};return((j==null?void 0:j.items)||[]).forEach(X=>{(P[X.status]||P.todo).push(X)}),Object.values(P).forEach(X=>X.sort((me,D)=>me.position-D.position||me.id-D.id)),P},[j]),re=P=>/^tags?$/i.test(Bn(P).trim()),ee=P=>((j==null?void 0:j.columns)||[]).filter(re).flatMap(X=>(P.fields[Bn(X)]||"").split(",").map(me=>me.trim()).filter(Boolean)),W=c.useMemo(()=>{const P=new Set;return((j==null?void 0:j.items)||[]).forEach(X=>(j.columns||[]).filter(re).forEach(me=>(X.fields[Bn(me)]||"").split(",").map(D=>D.trim()).filter(Boolean).forEach(D=>P.add(D)))),[...P].sort((X,me)=>X.localeCompare(me))},[j]),he=c.useMemo(()=>{const P={};return((j==null?void 0:j.columns)||[]).forEach(X=>{const me=Bn(X);if(re(X))return;const D=new Set;((j==null?void 0:j.items)||[]).forEach(y=>{const te=(y.fields[me]||"").trim();te&&D.add(te)}),P[me]=[...D].sort((y,te)=>y.localeCompare(te))}),P},[j]),we=P=>p.length===0||ee(P).some(X=>p.includes(X)),be=P=>b(X=>X.includes(P)?X.filter(me=>me!==P):[...X,P]),ze=(P,X,me)=>{for(const D of Ti){const y=u.current[D.id];if(!y)continue;const te=y.getBoundingClientRect();if(P>=te.left&&P<=te.right&&X>=te.top&&X<=te.bottom){const M=[...y.querySelectorAll("[data-card]")].filter(ve=>ve.dataset.id!==String(me));let ie=M.length;for(let ve=0;ve<M.length;ve++){const Ae=M[ve].getBoundingClientRect();if(X<Ae.top+Ae.height/2){ie=ve;break}}return{status:D.id,index:ie}}}return null},K=(P,X)=>{if(P.target.closest("button"))return;const me=P.clientX,D=P.clientY,y=P.currentTarget;let te=!1,M=null,ie=null;const ve=qe=>{if(!te){if(Math.hypot(qe.clientX-me,qe.clientY-D)<6)return;te=!0;const Ye=y.getBoundingClientRect();ie={id:X.id,item:X,w:Ye.width,offX:me-Ye.left,offY:D-Ye.top}}ie={...ie,x:qe.clientX,y:qe.clientY},T(ie),M=ze(qe.clientX,qe.clientY,X.id)||M,w(M)},Ae=()=>{window.removeEventListener("pointermove",ve),window.removeEventListener("pointerup",Ae),te&&M&&U(X,M),T(null),w(null)};window.addEventListener("pointermove",ve),window.addEventListener("pointerup",Ae)},U=(P,X)=>{const me={};Ti.forEach(M=>{me[M.id]=(Y[M.id]||[]).filter(ie=>ie.id!==P.id)});const D=me[X.status]||[];let y;if(p.length){const M=D.filter(we);y=X.index<M.length?D.indexOf(M[X.index]):D.length}else y=Math.max(0,Math.min(X.index,D.length));me[X.status]=[...D.slice(0,y),{...P,status:X.status},...D.slice(y)];const te=[];Ti.forEach(M=>(me[M.id]||[]).forEach((ie,ve)=>te.push({id:ie.id,status:M.id,position:ve}))),n(M=>M.map(ie=>ie.id===o?{...ie,items:te.map(ve=>({...ie.items.find(Ae=>Ae.id===ve.id),status:ve.status,position:ve.position}))}:ie)),F.arrangeDelight(o,te).then(z).catch(z),X.status==="done"&&P.status!=="done"&&m({item:P,date:ll(),note:""})},ce=async P=>{window.confirm(`Delete "${P.name}" and all its items?`)&&(await F.deleteCollection(P.id),z())},x=()=>({name:"",type:"text"}),Q=()=>d({id:null,name:"",columns:[x(),x()]}),O=P=>d({id:P.id,name:P.name,columns:P.columns.length?P.columns.map(X=>({name:Bn(X),type:pd(X)})):[x()]}),G=async()=>{const P=a.name.trim();if(!P)return;const X=a.columns.map(me=>({name:me.name.trim(),type:me.type||"text"})).filter(me=>me.name);a.id?await F.updateCollection(a.id,{name:P,columns:X}):await F.createCollection({name:P,columns:X}),d(null),z()},N=(P="todo")=>h({id:null,name:"",fields:{},status:P}),ge=P=>h({id:P.id,name:P.name,fields:{...P.fields},status:P.status}),de=async()=>{const P=g.name.trim();if(!P||!j)return;const X=g.id?(j.items||[]).find(te=>te.id===g.id):null,me=(X==null?void 0:X.status)==="done",D={name:P,fields:g.fields,status:g.status};let y;if(g.id?y=await F.updateDelightItem(g.id,D):y=await F.createDelightItem(j.id,D),h(null),await z(),g.status==="done"&&!me){const te=Me(y,j.id,P);m({item:te||{id:g.id,name:P},date:ll(),note:""})}},Me=(P,X,me)=>{const D=Array.isArray(P)?P.find(te=>te.id===X):null;if(!D)return null;const y=(D.items||[]).filter(te=>te.name===me&&te.status==="done");return y.length?y[y.length-1]:null},oe=async()=>{var P;if(!((P=f==null?void 0:f.item)!=null&&P.id)){m(null);return}await F.updateDelightItem(f.item.id,{completed_date:f.date||ll(),completion_note:f.note||""}),m(null),z()},ae=({it:P})=>{const X=j.columns.filter(D=>P.fields[Bn(D)]&&!re(D)),me=ee(P);return t.jsxs("div",{"data-card":!0,"data-id":P.id,onPointerDown:D=>K(D,P),style:je.itemCard,children:[t.jsxs("div",{style:je.itemCardTop,children:[t.jsx(ql,{size:13,style:{color:"var(--text-3)",flexShrink:0}}),t.jsx("span",{style:je.itemName,children:P.name}),t.jsx("button",{onClick:()=>ge(P),style:je.ghostBtn,children:t.jsx(vt,{size:12})}),t.jsx("button",{onClick:()=>v(P.id,P.name),style:je.ghostBtn,children:t.jsx(Fe,{size:13})})]}),X.map(D=>{const y=Bn(D),te=P.fields[y];return t.jsxs("div",{style:je.itemField,children:[t.jsx("span",{style:je.fieldLabel,children:y}),pd(D)==="link"?t.jsx("a",{href:/^https?:\/\//i.test(te)?te:`https://${te}`,target:"_blank",rel:"noreferrer",style:{minWidth:0,wordBreak:"break-word",color:Qr},onClick:M=>M.stopPropagation(),children:te}):t.jsx("span",{style:{minWidth:0,wordBreak:"break-word"},children:te})]},y)}),me.length>0&&t.jsx("div",{style:je.tagWrap,children:me.map((D,y)=>t.jsx("span",{style:je.tag,children:D},y))}),P.status==="done"&&P.completed_date&&t.jsxs("div",{style:je.doneMeta,children:[t.jsxs("span",{style:je.doneDate,children:["✓ ",P1(P.completed_date)]}),P.completion_note&&t.jsx("span",{style:je.doneNote,children:P.completion_note})]})]})};return t.jsxs("div",{style:je.page,children:[t.jsxs("div",{style:je.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:je.eyebrow,children:"Anvil · Delights"}),t.jsx("h1",{style:je.h1,children:"Delights"}),t.jsx("div",{style:je.subhead,children:"Books, films, places, food — track what you want to enjoy and how you felt."})]}),t.jsxs("button",{onClick:Q,style:je.addColBtn,children:[t.jsx(st,{size:15})," New list"]})]}),t.jsxs("div",{style:je.tabs,children:[r.map(P=>t.jsxs("button",{onClick:()=>i(P.id),style:{...je.tab,...P.id===o?je.tabOn:{}},children:[P.name,t.jsx("span",{style:je.tabCount,children:P.items.length})]},P.id)),t.jsx("button",{onClick:Q,style:je.tabAdd,title:"New list",children:t.jsx(st,{size:15})})]}),s?j?t.jsxs("div",{children:[t.jsxs("div",{style:je.colHead,children:[t.jsx("h2",{style:je.colTitle,children:j.name}),t.jsxs("div",{style:je.colActions,children:[t.jsxs("button",{onClick:()=>N(),style:je.primaryBtn,children:[t.jsx(st,{size:14})," Add"]}),t.jsx("button",{onClick:()=>O(j),style:je.ghostBtn,title:"Edit list & columns",children:t.jsx(Ny,{size:15})}),t.jsx("button",{onClick:()=>ce(j),style:je.ghostBtn,title:"Delete list",children:t.jsx(Fe,{size:16})})]})]}),W.length>0&&t.jsxs("div",{style:je.filterBar,children:[t.jsx("span",{style:je.filterLabel,children:"Tags"}),t.jsx("button",{onClick:()=>b([]),style:{...je.filterChip,...p.length===0?je.filterChipOn:{}},children:"All"}),W.map(P=>t.jsx("button",{onClick:()=>be(P),style:{...je.filterChip,...p.includes(P)?je.filterChipOn:{}},children:P},P))]}),t.jsx("div",{style:{...je.board,gridTemplateColumns:e?"1fr":"repeat(3, 1fr)"},children:Ti.map(P=>{const X=(Y[P.id]||[]).filter(we),me=B?X.filter(y=>y.id!==B.id):X,D=R&&R.status===P.id;return t.jsxs("div",{ref:y=>u.current[P.id]=y,style:{...je.lane,...D?{outline:`2px dashed ${P.color}`,outlineOffset:-2}:{}},children:[t.jsxs("div",{style:je.laneHead,children:[t.jsx("span",{style:{...je.laneDot,background:P.color}}),t.jsx("span",{style:je.laneLabel,children:P.label}),t.jsx("span",{style:je.laneCount,children:X.length}),t.jsx("button",{onClick:()=>N(P.id),style:je.laneAdd,title:`Add to ${P.label}`,children:t.jsx(st,{size:13})})]}),t.jsxs("div",{style:je.laneBody,children:[me.map((y,te)=>t.jsxs("div",{children:[D&&R.index===te&&t.jsx("div",{style:{...je.insertLine,background:P.color}}),t.jsx(ae,{it:y})]},y.id)),D&&R.index>=me.length&&t.jsx("div",{style:{...je.insertLine,background:P.color}}),me.length===0&&!D&&t.jsx("div",{style:je.laneEmpty,children:"Drop here"})]})]},P.id)})})]}):t.jsxs("div",{style:je.empty,children:[t.jsx(zg,{size:28,color:"var(--text-3)"}),t.jsx("div",{style:{marginTop:10},children:"No lists yet."}),t.jsxs("button",{onClick:Q,style:{...je.addColBtn,marginTop:14},children:[t.jsx(st,{size:15})," Create your first list"]})]}):t.jsx("div",{style:je.muted,children:"Loading…"}),B&&t.jsx("div",{style:{...je.ghost,width:B.w,left:B.x-B.offX,top:B.y-B.offY},children:t.jsxs("div",{style:je.itemCardTop,children:[t.jsx(ql,{size:13,style:{color:"var(--text-3)",flexShrink:0}}),t.jsx("span",{style:je.itemName,children:B.item.name})]})}),a&&t.jsx("div",{style:je.overlay,onClick:()=>d(null),children:t.jsxs("div",{style:je.modal,onClick:P=>P.stopPropagation(),children:[t.jsxs("div",{style:je.modalHead,children:[t.jsx("span",{style:je.modalTitle,children:a.id?"Edit list":"New list"}),t.jsx("button",{onClick:()=>d(null),style:je.iconBtn,children:t.jsx(Fe,{size:16})})]}),t.jsx("label",{style:je.label,children:"List name *"}),t.jsx("input",{autoFocus:!0,value:a.name,onChange:P=>d(X=>({...X,name:P.target.value})),placeholder:"e.g. Gardens, Cafés, Trips…",style:je.input}),t.jsx("label",{style:je.label,children:"Columns"}),t.jsx("div",{style:je.muted2,children:"Name the details you want to track (e.g. Author, Distance, Tag)."}),a.columns.map((P,X)=>t.jsxs("div",{style:je.colRow,children:[t.jsx("input",{value:P.name,placeholder:`Column ${X+1}`,onChange:me=>d(D=>{const y=[...D.columns];return y[X]={...y[X],name:me.target.value},{...D,columns:y}}),style:{...je.input,marginBottom:0,flex:1}}),t.jsx("select",{value:P.type,onChange:me=>d(D=>{const y=[...D.columns];return y[X]={...y[X],type:me.target.value},{...D,columns:y}}),style:je.colTypeSelect,children:N1.map(me=>t.jsx("option",{value:me.id,children:me.label},me.id))}),t.jsx("button",{onClick:()=>d(me=>({...me,columns:me.columns.filter((D,y)=>y!==X)})),style:je.iconBtn,children:t.jsx(Fe,{size:14})})]},X)),a.columns.length<6&&t.jsxs("button",{onClick:()=>d(P=>({...P,columns:[...P.columns,x()]})),style:je.addColInline,children:[t.jsx(st,{size:13})," Add column"]}),t.jsxs("div",{style:je.modalActions,children:[t.jsx("button",{onClick:()=>d(null),style:je.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:G,disabled:!a.name.trim(),style:{...je.saveBtn,...a.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(Oe,{size:15})," ",a.id?"Save":"Create"]})]})]})}),g&&j&&t.jsx("div",{style:je.overlay,onClick:()=>h(null),children:t.jsxs("div",{style:je.modal,onClick:P=>P.stopPropagation(),children:[t.jsxs("div",{style:je.modalHead,children:[t.jsx("span",{style:je.modalTitle,children:g.id?"Edit":`Add to ${j.name}`}),t.jsx("button",{onClick:()=>h(null),style:je.iconBtn,children:t.jsx(Fe,{size:16})})]}),t.jsx("label",{style:je.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:g.name,onChange:P=>h(X=>({...X,name:P.target.value})),onKeyDown:P=>P.key==="Enter"&&de(),placeholder:"Title / name",style:je.input}),j.columns.map(P=>{const X=Bn(P),me=pd(P),D=`dl-${j.id}-${X}`,y=he[X]||[];return t.jsxs("div",{children:[t.jsx("label",{style:je.label,children:X}),t.jsx("input",{value:g.fields[X]||"",type:me==="number"?"number":me==="link"?"url":"text",list:y.length?D:void 0,onChange:te=>h(M=>({...M,fields:{...M.fields,[X]:te.target.value}})),placeholder:me==="link"?"https://…":X,style:je.input}),y.length>0&&t.jsx("datalist",{id:D,children:y.map(te=>t.jsx("option",{value:te},te))})]},X)}),t.jsx("label",{style:je.label,children:"Status"}),t.jsx("div",{style:je.statusPick,children:Ti.map(P=>t.jsx("button",{type:"button",onClick:()=>h(X=>({...X,status:P.id})),style:{...je.statusChip,...g.status===P.id?{background:P.color,color:"#fff",border:`1px solid ${P.color}`}:{}},children:P.label},P.id))}),t.jsxs("div",{style:je.modalActions,children:[t.jsx("button",{onClick:()=>h(null),style:je.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:de,disabled:!g.name.trim(),style:{...je.saveBtn,...g.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(Oe,{size:15})," ",g.id?"Save":"Add"]})]})]})}),f&&t.jsx("div",{style:je.overlay,onClick:()=>m(null),children:t.jsxs("div",{style:{...je.modal,maxWidth:380},onClick:P=>P.stopPropagation(),children:[t.jsxs("div",{style:je.modalHead,children:[t.jsx("span",{style:je.modalTitle,children:"Satisfied! 🎉"}),t.jsx("button",{onClick:()=>m(null),style:je.iconBtn,children:t.jsx(Fe,{size:16})})]}),t.jsxs("div",{style:je.muted2,children:['"',f.item.name,'" — when did you complete it?']}),t.jsx("label",{style:je.label,children:"Completed on"}),t.jsx("input",{type:"date",value:f.date,max:ll(),onChange:P=>m(X=>({...X,date:P.target.value})),style:je.input}),t.jsx("label",{style:je.label,children:"Comment (optional)"}),t.jsx("textarea",{value:f.note,onChange:P=>m(X=>({...X,note:P.target.value})),placeholder:"How was it?",style:{...je.input,minHeight:64,resize:"vertical"}}),t.jsxs("div",{style:je.modalActions,children:[t.jsx("button",{onClick:()=>m(null),style:je.cancelBtn,children:"Skip"}),t.jsxs("button",{onClick:oe,style:je.saveBtn,children:[t.jsx(Oe,{size:15})," Save"]})]})]})}),t.jsx(pr,{toasts:I,onUndo:E,onDismiss:S})]})}const je={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},addColBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"none",background:Qr,color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabs:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16,alignItems:"center"},tab:{display:"inline-flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},tabOn:{background:Qr,color:"#fff",borderColor:Qr},tabCount:{fontSize:10.5,fontWeight:700,background:"rgba(0,0,0,0.12)",borderRadius:9,padding:"1px 6px"},tabAdd:{border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",width:32,height:32,borderRadius:"50%",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},colHead:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,marginBottom:12,flexWrap:"wrap"},colTitle:{fontSize:18,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},colActions:{display:"flex",gap:6,alignItems:"center"},primaryBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"none",background:Qr,color:"#fff",padding:"7px 13px",borderRadius:8,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:6,flexShrink:0},filterBar:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",marginBottom:14},filterLabel:{fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--text-3)",marginRight:2},filterChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 11px",borderRadius:16,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},filterChipOn:{background:Qr,color:"#fff",borderColor:Qr},board:{display:"grid",gap:12,alignItems:"start"},lane:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:"10px 10px 12px",minHeight:120,display:"flex",flexDirection:"column"},laneHead:{display:"flex",alignItems:"center",gap:7,padding:"2px 4px 10px"},laneDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},laneLabel:{fontSize:12.5,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--text-2)"},laneCount:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},laneAdd:{marginLeft:"auto",border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:2,borderRadius:6},laneBody:{display:"flex",flexDirection:"column",gap:8,minHeight:40,flex:1},laneEmpty:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",textAlign:"center",padding:"16px 0",border:"1px dashed var(--border)",borderRadius:8},insertLine:{height:3,borderRadius:2,margin:"1px 0"},itemCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"9px 10px",boxShadow:"0 1px 2px rgba(0,0,0,0.05)",cursor:"grab",touchAction:"none",userSelect:"none"},itemCardTop:{display:"flex",alignItems:"center",gap:6},itemName:{flex:1,minWidth:0,fontSize:13.5,fontWeight:700,wordBreak:"break-word"},itemField:{display:"flex",gap:8,fontSize:12,color:"var(--text-2)",marginTop:5,paddingLeft:19},fieldLabel:{fontWeight:700,color:"var(--text-3)",minWidth:64,flexShrink:0},tagWrap:{display:"flex",flexWrap:"wrap",gap:5,marginTop:8,paddingLeft:19},tag:{fontSize:10.5,fontWeight:700,color:Qr,background:"color-mix(in srgb, "+Qr+" 14%, transparent)",border:"1px solid color-mix(in srgb, "+Qr+" 30%, transparent)",borderRadius:12,padding:"2px 8px",whiteSpace:"nowrap"},doneMeta:{marginTop:8,paddingLeft:19,display:"flex",flexDirection:"column",gap:3},doneDate:{fontSize:11,fontWeight:700,color:"#4C9A6B"},doneNote:{fontSize:11.5,color:"var(--text-2)",fontStyle:"italic",wordBreak:"break-word"},ghost:{position:"fixed",zIndex:300,pointerEvents:"none",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"9px 10px",boxShadow:"0 8px 28px rgba(0,0,0,0.28)",opacity:.95,transform:"rotate(1.5deg)"},muted:{fontSize:13,color:"var(--text-3)"},muted2:{fontSize:11.5,color:"var(--text-3)",marginBottom:8},empty:{textAlign:"center",color:"var(--text-3)",padding:"50px 16px",fontSize:14,fontWeight:600,display:"flex",flexDirection:"column",alignItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:8},colRow:{display:"flex",gap:6,alignItems:"center",marginBottom:8},colTypeSelect:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",background:"var(--bg)",color:"var(--text)",flexShrink:0},addColInline:{display:"inline-flex",alignItems:"center",gap:5,border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"7px 12px",borderRadius:8,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},statusPick:{display:"flex",gap:6,flexWrap:"wrap"},statusChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 13px",borderRadius:18,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Er="#C9772E",Pm={Carrot:Wy,ShoppingCart:m0,Clapperboard:_y,ShoppingBag:jm,Fuel:Vy,Sparkles:Co,Shirt:h0,WashingMachine:w0,Zap:Bg,Tv:j0,Droplet:Hy,Coffee:$y,Utensils:k0,Bus:By,Train:y0,Plane:g0,Home:xs,Heart:gm,Gift:fs,Book:zy,Dumbbell:Gy,Pill:c0,Phone:d0,Wifi:S0,Gamepad2:Yy,Music:Cg,Scissors:ym,PawPrint:a0,Baby:wy,GraduationCap:dm,Briefcase:Iy,Car:Ay,Bike:Cy},En=({name:e,...r})=>{const n=Pm[e]||jm;return t.jsx(n,{...r})},bd=["#C9772E","#4C9A6B","#3A7CA5","#8268B0","#C2536B","#C9A227","#D1556E","#5B7C99","#A23E57","#3E9E6B"],Sc=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Lp=Sc(new Date),Do=120;function H1(e=760){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}function G1(){const e=H1(),r=Jn(),n=Wm(),[o,i]=c.useState([]),[s,l]=c.useState([]),[a,d]=c.useState(!1),[g,h]=c.useState(Lp),[f,m]=c.useState(()=>new Date),[B,T]=c.useState(null),[R,w]=c.useState(null),[p,b]=c.useState(null),[u,z]=c.useState(!1),[v,I]=c.useState("day"),[E,S]=c.useState(()=>Ir(new Date,n)[0]),[j,Y]=c.useState(new Set),re=k=>Y(le=>{const $e=new Set(le);return $e.has(k)?$e.delete(k):$e.add(k),$e}),ee=c.useCallback(()=>{F.getExpenses().then(k=>{i(k.categories),l(k.logs),d(!0)}).catch(()=>d(!0))},[]);c.useEffect(()=>{ee()},[ee]);const{deleteItem:W,toasts:he,handleUndo:we,handleDismiss:be}=ur(F.deleteExpenseLog,F.restoreExpenseLog,ee),ze=c.useMemo(()=>{const k={};return o.forEach(le=>k[le.id]=le),k},[o]),K=k=>js(k,r.code),U=c.useMemo(()=>s.filter(k=>k.date===g),[s,g]),ce=U.reduce((k,le)=>k+le.amount,0),x=c.useMemo(()=>{const k=$e=>{const Le=new Date;return Le.setDate(Le.getDate()+$e),Sc(Le)},le=$e=>s.filter(Le=>Le.date===$e).reduce((Le,et)=>Le+et.amount,0);return[{label:"Today",value:le(k(0)),color:Er},{label:"Yesterday",value:le(k(-1)),color:"var(--text-3)"},{label:"Day before",value:le(k(-2)),color:"var(--text-3)"}]},[s]),Q=c.useMemo(()=>{if(v==="day")return U;if(v==="month"){const[k,le]=Ir(new Date(g+"T00:00"),n);return s.filter($e=>$e.date>=k&&$e.date<=le)}if(v==="year"){const k=g.slice(0,4);return s.filter(le=>le.date.slice(0,4)===k)}return s},[s,U,v,g,n]),O=Q.reduce((k,le)=>k+le.amount,0),G=c.useMemo(()=>{const k={};return Q.forEach(le=>{k[le.category_id]=(k[le.category_id]||0)+le.amount}),Object.entries(k).map(([le,$e])=>({cat:ze[le],amount:$e})).filter(le=>le.cat).sort((le,$e)=>$e.amount-le.amount)},[Q,ze]),N=k=>Ir(new Date(k+"T00:00"),n)[0],ge=c.useMemo(()=>{const k=new Set(s.map(le=>N(le.date)));return k.add(Ir(new Date,n)[0]),Array.from(k).sort().reverse().slice(0,12)},[s,n]),de=k=>new Date(k+"T00:00").toLocaleDateString("en-US",{month:"short",year:"numeric"}),Me=(k,le)=>Ir(new Date(k+"T00:00"),n,-le)[0],oe=k=>j.size===0||j.has(k.category_id),ae=[E,Me(E,1),Me(E,2)],P=ae.map(k=>{const[le,$e]=Ir(new Date(k+"T00:00"),n);return s.filter(Le=>Le.date>=le&&Le.date<=$e&&oe(Le)).reduce((Le,et)=>Le+et.amount,0)}),[X,me,D]=P,y=me>0?Math.round((X-me)/me*100):X>0?100:0,te=y>0?Ki:y<0?Vn:pm,M=y>0?"#C2536B":y<0?"#4C9A6B":"#9A968C",ie=c.useMemo(()=>{const[k,le]=Ir(new Date(E+"T00:00"),n),$e={};return s.filter(Le=>Le.date>=k&&Le.date<=le&&oe(Le)).forEach(Le=>{$e[Le.category_id]=($e[Le.category_id]||0)+Le.amount}),Object.entries($e).map(([Le,et])=>({cat:ze[Le],amount:et})).filter(Le=>Le.cat).sort((Le,et)=>et.amount-Le.amount)},[s,E,j,ze,n]);let ve=0;const Ae=ie.map(k=>{const le=X>0?ve/X*100:0;ve+=k.amount;const $e=X>0?ve/X*100:0;return{...k,start:le,end:$e,pct:X>0?k.amount/X*100:0}}),qe=Ae.length?`conic-gradient(${Ae.map(k=>`${k.cat.color} ${k.start}% ${k.end}%`).join(", ")})`:"var(--surface-2)",Ye=c.useMemo(()=>{const[k,le]=Ir(f,n),$e=new Date(k+"T00:00"),Le=new Date(le+"T00:00"),et=($e.getDay()+6)%7,br={};s.forEach(H=>{H.date>=k&&H.date<=le&&(br[H.date]=(br[H.date]||0)+H.amount)});const ut=[];for(let H=0;H<et;H++)ut.push(null);for(let H=new Date($e);H<=Le;H.setDate(H.getDate()+1)){const ye=Sc(H);ut.push({date:ye,day:H.getDate(),total:br[ye]||0})}return ut},[f,s,n]),Ke=k=>m(le=>{const[$e]=Ir(le,n,k);return new Date($e+"T00:00")}),at=c.useMemo(()=>{const[k,le]=Ir(f,n);if(n===1)return new Date(k+"T00:00").toLocaleDateString("en-US",{month:"long",year:"numeric"});const $e=Le=>new Date(Le+"T00:00").toLocaleDateString("en-US",{day:"numeric",month:"short"});return`${$e(k)} – ${$e(le)}`},[f,n]),Xe=k=>T({cat:k,amount:"",note:""}),ft=async()=>{const k=parseFloat(B.amount);!k||k<=0||(await F.createExpenseLog({category_id:B.cat.id,amount:k,note:B.note.trim().slice(0,Do),date:g}),T(null),ee())},se=k=>w({id:k.id,category_id:k.category_id,amount:String(k.amount),note:k.note||"",date:k.date}),We=async()=>{const k=parseFloat(R.amount);!k||k<=0||(await F.updateExpenseLog(R.id,{category_id:R.category_id,amount:k,note:R.note.trim().slice(0,Do),date:R.date}),w(null),ee())},Ze=()=>b({id:null,name:"",icon:"ShoppingBag",color:bd[o.length%bd.length]}),rt=k=>b({id:k.id,name:k.name,icon:k.icon,color:k.color}),gt=async()=>{const k=p.name.trim();k&&(p.id?await F.updateExpenseCategory(p.id,{name:k,icon:p.icon,color:p.color}):await F.createExpenseCategory({name:k,icon:p.icon,color:p.color}),b(null),ee())},Rt=async k=>{const le=s.filter(Le=>Le.category_id===k.id).length,$e=le>0?`Delete "${k.name}"? Its ${le} transaction${le===1?"":"s"} will be moved to "Other".`:`Delete "${k.name}"?`;window.confirm($e)&&(await F.deleteExpenseCategory(k.id),ee())},wt=async(k,le)=>{const $e=k+le;if($e<0||$e>=o.length)return;const Le=[...o];[Le[k],Le[$e]]=[Le[$e],Le[k]],i(Le),await F.arrangeExpenseCategories(Le.map(et=>et.id)).catch(()=>{}),ee()},yt=new Date(g+"T00:00").toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});let bt=0;const Dt=G.map(k=>{const le=O>0?bt/O*100:0;bt+=k.amount;const $e=O>0?bt/O*100:0;return{...k,start:le,end:$e,pct:O>0?k.amount/O*100:0}}),Sr=Dt.length?`conic-gradient(${Dt.map(k=>`${k.cat.color} ${k.start}% ${k.end}%`).join(", ")})`:"var(--surface-2)";return t.jsxs("div",{style:{...V.page,...e?{padding:"20px 14px"}:{}},children:[t.jsx("div",{style:V.head,children:t.jsxs("div",{children:[t.jsx("div",{style:V.eyebrow,children:"Anvil · Expenses"}),t.jsx("h1",{style:V.h1,children:"Expenses"}),t.jsx("div",{style:V.subhead,children:"Log day-to-day spending by category and see where it goes."})]})}),t.jsxs("div",{style:V.totalCard,children:[t.jsxs("div",{style:V.totalLeft,children:[t.jsx(Xl,{size:20,color:Er}),t.jsxs("div",{children:[t.jsxs("div",{style:V.totalLabel,children:["Total spent ",v==="day"?"today":v==="month"?"this month":v==="year"?"this year":"all time"]}),t.jsx("div",{style:V.totalVal,children:K(O)})]})]}),t.jsx("div",{style:V.scopeRow,children:[["day","Day"],["month","Month"],["year","Year"],["all","All"]].map(([k,le])=>t.jsx("button",{onClick:()=>I(k),style:{...V.scopeBtn,...v===k?V.scopeBtnOn:{}},children:le},k))})]}),t.jsxs("div",{style:{...V.card,marginBottom:16},children:[t.jsx("div",{style:V.threeDayTitle,children:"Last 3 days"}),t.jsx(_p,{items:x,money:K})]}),t.jsxs("div",{style:{...V.cols,gridTemplateColumns:e?"minmax(0,1fr)":"320px minmax(0,1fr)"},children:[t.jsxs("div",{style:{...V.card,minWidth:0,...e?{padding:12}:{}},children:[t.jsxs("div",{style:V.calHead,children:[t.jsx("button",{onClick:()=>Ke(-1),style:V.calNav,children:t.jsx(wn,{size:16})}),t.jsx("span",{style:V.calTitle,children:at}),t.jsx("button",{onClick:()=>Ke(1),style:V.calNav,children:t.jsx(nn,{size:16})})]}),t.jsxs("div",{style:V.calGrid,children:[["M","T","W","T","F","S","S"].map((k,le)=>t.jsx("div",{style:V.calDow,children:k},le)),Ye.map((k,le)=>k===null?t.jsx("div",{},le):t.jsxs("button",{onClick:()=>h(k.date),style:{...V.calCell,...k.date===g?V.calCellOn:{},...k.date===Lp&&k.date!==g?V.calCellToday:{}},children:[t.jsx("span",{children:k.day}),k.total>0&&t.jsx("span",{style:{...V.calDot,background:k.date===g?"#fff":Er}})]},k.date))]})]}),t.jsxs("div",{children:[t.jsxs("div",{style:V.card,children:[t.jsxs("div",{style:V.cardTitleRow,children:[t.jsxs("div",{children:[t.jsx("div",{style:V.cardTitle,children:yt}),t.jsx("div",{style:V.cardSub,children:"Tap a category to log an expense for this day."})]}),t.jsx("div",{style:V.dayTotal,children:K(ce)})]}),t.jsxs("div",{style:V.iconGrid,children:[o.map(k=>t.jsxs("div",{style:V.iconCell,children:[t.jsx("button",{onClick:()=>Xe(k),style:{...V.iconBtn,background:k.color+"1A",color:k.color,borderColor:k.color+"44"},children:t.jsx(En,{name:k.icon,size:22})}),t.jsx("span",{style:V.iconLabel,children:k.name})]},k.id)),t.jsxs("div",{style:V.iconCell,children:[t.jsx("button",{onClick:Ze,style:V.iconBtnAdd,children:t.jsx(st,{size:20})}),t.jsx("span",{style:V.iconLabel,children:"Add"})]})]}),t.jsxs("button",{onClick:()=>z(!0),style:V.manageLink,children:[t.jsx(vt,{size:11})," Customize categories"]}),U.length>0&&t.jsx("div",{style:V.logList,children:U.map(k=>{const le=ze[k.category_id];return t.jsxs("div",{style:V.logRow,children:[t.jsx("span",{style:{...V.logIcon,background:((le==null?void 0:le.color)||"#9A968C")+"1A",color:(le==null?void 0:le.color)||"#9A968C"},children:t.jsx(En,{name:le==null?void 0:le.icon,size:14})}),t.jsxs("button",{onClick:()=>se(k),style:V.logInfoBtn,title:"Edit this expense",children:[t.jsx("div",{style:V.logCat,children:(le==null?void 0:le.name)||"Deleted category"}),k.note&&t.jsx("div",{style:V.logNote,children:k.note})]}),t.jsx("span",{style:V.logAmt,children:K(k.amount)}),t.jsx("button",{onClick:()=>se(k),style:V.editBtn,title:"Edit",children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:()=>W(k.id,(le==null?void 0:le.name)||"Expense"),style:V.delBtn,children:t.jsx(Fe,{size:14})})]},k.id)})})]}),t.jsxs("div",{style:V.card,children:[t.jsx("div",{style:V.cardTitleRow,children:t.jsxs("div",{children:[t.jsx("div",{style:V.cardTitle,children:"Spending by category"}),t.jsxs("div",{style:V.cardSub,children:[v==="day"?"Today":v==="month"?"This month":v==="year"?"This year":"All time"," — percentage & amount"]})]})}),G.length===0?t.jsx("div",{style:V.muted,children:"No expenses logged for this period yet."}):t.jsxs("div",{style:V.pieWrap,children:[t.jsxs("div",{style:V.pieChart,children:[t.jsx("div",{style:{...V.pieDisc,background:Sr}}),t.jsxs("div",{style:V.pieHole,children:[t.jsx("span",{style:V.pieHoleVal,children:K(O)}),t.jsx("span",{style:V.pieHoleLbl,children:"total"})]})]}),t.jsx("div",{style:V.pieLegend,children:Dt.map(k=>t.jsxs("div",{style:V.legendRow,children:[t.jsx("span",{style:{...V.dot,background:k.cat.color}}),t.jsx(En,{name:k.cat.icon,size:13,style:{color:k.cat.color,flexShrink:0}}),t.jsx("span",{style:V.legendName,children:k.cat.name}),t.jsxs("span",{style:V.legendPct,children:[Math.round(k.pct),"%"]}),t.jsx("span",{style:V.legendAmt,children:K(k.amount)})]},k.cat.id))})]})]}),t.jsxs("div",{style:V.card,children:[t.jsx("div",{style:V.cardTitleRow,children:t.jsxs("div",{children:[t.jsx("div",{style:V.cardTitle,children:"Monthly trend"}),t.jsx("div",{style:V.cardSub,children:"Compare a month against the previous two"})]})}),t.jsx("div",{style:V.tagRow,children:ge.map(k=>t.jsxs("button",{onClick:()=>S(k),style:{...V.tagChip,...E===k?V.tagChipOn:{}},children:[t.jsx(uc,{size:11})," ",de(k)]},k))}),t.jsxs("div",{style:{...V.tagRow,marginTop:8},children:[t.jsxs("button",{onClick:()=>Y(new Set),style:{...V.tagChip,...j.size===0?V.tagChipOn:{}},children:[t.jsx(uc,{size:11})," All categories"]}),o.map(k=>{const le=j.has(k.id);return t.jsxs("button",{onClick:()=>re(k.id),style:{...V.tagChip,...le?V.tagChipOn:{}},children:[t.jsx(En,{name:k.icon,size:11})," ",k.name,le&&t.jsx(Oe,{size:11,style:{marginLeft:2}})]},k.id)})]}),t.jsxs("div",{style:{...V.trend3,marginTop:16},children:[t.jsxs("div",{style:V.trendCol,children:[t.jsx("div",{style:V.trendVal,children:K(X)}),t.jsx("div",{style:V.trendLbl,children:de(ae[0])})]}),t.jsxs("div",{style:V.trendCol,children:[t.jsx("div",{style:{...V.trendVal,color:"var(--text-2)"},children:K(me)}),t.jsx("div",{style:V.trendLbl,children:de(ae[1])})]}),t.jsxs("div",{style:V.trendCol,children:[t.jsx("div",{style:{...V.trendVal,color:"var(--text-3)"},children:K(D)}),t.jsx("div",{style:V.trendLbl,children:de(ae[2])})]})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:t.jsxs("div",{style:{...V.trendBadge,color:M,background:M+"1A"},children:[t.jsx(te,{size:15})," ",y>0?"+":"",y,"% vs ",de(ae[1])]})}),t.jsx(_p,{items:[{label:de(ae[0]),value:X,color:Er},{label:de(ae[1]),value:me,color:"var(--text-3)"},{label:de(ae[2]),value:D,color:"var(--text-3)"}],money:K}),t.jsx("div",{style:V.trendDivider}),t.jsxs("div",{style:V.cardSub,children:["Category split for ",de(E)]}),ie.length===0?t.jsx("div",{style:V.muted,children:"No expenses logged for this month yet."}):t.jsxs("div",{style:{...V.pieWrap,marginTop:10},children:[t.jsxs("div",{style:V.pieChart,children:[t.jsx("div",{style:{...V.pieDisc,background:qe}}),t.jsxs("div",{style:V.pieHole,children:[t.jsx("span",{style:V.pieHoleVal,children:K(X)}),t.jsx("span",{style:V.pieHoleLbl,children:"total"})]})]}),t.jsx("div",{style:V.pieLegend,children:Ae.map(k=>t.jsxs("div",{style:V.legendRow,children:[t.jsx("span",{style:{...V.dot,background:k.cat.color}}),t.jsx(En,{name:k.cat.icon,size:13,style:{color:k.cat.color,flexShrink:0}}),t.jsx("span",{style:V.legendName,children:k.cat.name}),t.jsxs("span",{style:V.legendPct,children:[Math.round(k.pct),"%"]}),t.jsx("span",{style:V.legendAmt,children:K(k.amount)})]},k.cat.id))})]})]})]})]}),B&&t.jsx("div",{style:V.overlay,onClick:()=>T(null),children:t.jsxs("div",{style:V.modal,onClick:k=>k.stopPropagation(),children:[t.jsxs("div",{style:V.modalHead,children:[t.jsxs("span",{style:{...V.modalTitle,display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{...V.iconBadge,background:B.cat.color+"1A",color:B.cat.color},children:t.jsx(En,{name:B.cat.icon,size:16})}),B.cat.name]}),t.jsx("button",{onClick:()=>T(null),style:V.iconBtnPlain,children:t.jsx(Fe,{size:16})})]}),t.jsx("label",{style:V.label,children:"Amount *"}),t.jsx("input",{autoFocus:!0,type:"number",inputMode:"decimal",value:B.amount,onChange:k=>T(le=>({...le,amount:k.target.value})),onKeyDown:k=>k.key==="Enter"&&ft(),placeholder:"0",style:V.input}),t.jsx("label",{style:V.label,children:"Note (optional)"}),t.jsx("input",{value:B.note,maxLength:Do,onChange:k=>T(le=>({...le,note:k.target.value})),onKeyDown:k=>k.key==="Enter"&&ft(),placeholder:"What was it for?",style:V.input}),t.jsxs("div",{style:V.noteCount,children:[B.note.length,"/",Do]}),t.jsxs("div",{style:V.modalActions,children:[t.jsx("button",{onClick:()=>T(null),style:V.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:ft,disabled:!B.amount,style:{...V.saveBtn,...B.amount?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(Oe,{size:15})," Add"]})]})]})}),R&&(ze[R.category_id],t.jsx("div",{style:V.overlay,onClick:()=>w(null),children:t.jsxs("div",{style:V.modal,onClick:k=>k.stopPropagation(),children:[t.jsxs("div",{style:V.modalHead,children:[t.jsx("span",{style:V.modalTitle,children:"Edit expense"}),t.jsx("button",{onClick:()=>w(null),style:V.iconBtnPlain,children:t.jsx(Fe,{size:16})})]}),t.jsx("label",{style:V.label,children:"Category"}),t.jsx("select",{value:R.category_id,onChange:k=>w(le=>({...le,category_id:Number(k.target.value)})),style:V.input,children:o.map(k=>t.jsx("option",{value:k.id,children:k.name},k.id))}),t.jsx("label",{style:V.label,children:"Amount *"}),t.jsx("input",{autoFocus:!0,type:"number",inputMode:"decimal",value:R.amount,onChange:k=>w(le=>({...le,amount:k.target.value})),onKeyDown:k=>k.key==="Enter"&&We(),placeholder:"0",style:V.input}),t.jsx("label",{style:V.label,children:"Date"}),t.jsx("input",{type:"date",value:R.date,onChange:k=>w(le=>({...le,date:k.target.value})),style:V.input}),t.jsx("label",{style:V.label,children:"Note (optional)"}),t.jsx("input",{value:R.note,maxLength:Do,onChange:k=>w(le=>({...le,note:k.target.value})),onKeyDown:k=>k.key==="Enter"&&We(),placeholder:"What was it for?",style:V.input}),t.jsxs("div",{style:V.noteCount,children:[R.note.length,"/",Do]}),t.jsxs("div",{style:V.modalActions,children:[t.jsx("button",{onClick:()=>w(null),style:V.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:We,disabled:!R.amount,style:{...V.saveBtn,...R.amount?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(Oe,{size:15})," Save"]})]})]})})),u&&t.jsx("div",{style:V.overlay,onClick:()=>z(!1),children:t.jsxs("div",{style:V.modal,onClick:k=>k.stopPropagation(),children:[t.jsxs("div",{style:V.modalHead,children:[t.jsx("span",{style:V.modalTitle,children:"Customize categories"}),t.jsx("button",{onClick:()=>z(!1),style:V.iconBtnPlain,children:t.jsx(Fe,{size:16})})]}),t.jsx("div",{style:V.manageHint,children:"Use the arrows to reorder how categories appear."}),t.jsx("div",{style:V.manageList,children:o.map((k,le)=>t.jsxs("div",{style:V.manageRow,children:[t.jsxs("div",{style:V.reorderCol,children:[t.jsx("button",{onClick:()=>wt(le,-1),disabled:le===0,style:{...V.reorderBtn,...le===0?V.reorderDisabled:{}},title:"Move up",children:t.jsx(ya,{size:13})}),t.jsx("button",{onClick:()=>wt(le,1),disabled:le===o.length-1,style:{...V.reorderBtn,...le===o.length-1?V.reorderDisabled:{}},title:"Move down",children:t.jsx(So,{size:13})})]}),t.jsx("span",{style:{...V.iconBadge,background:k.color+"1A",color:k.color},children:t.jsx(En,{name:k.icon,size:15})}),t.jsx("span",{style:{flex:1,fontSize:13.5,fontWeight:600},children:k.name}),t.jsx("button",{onClick:()=>rt(k),style:V.delBtn,children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:()=>Rt(k),style:V.delBtn,children:t.jsx(Fe,{size:14})})]},k.id))}),t.jsxs("button",{onClick:Ze,style:V.addColInline,children:[t.jsx(st,{size:13})," Add category"]})]})}),p&&t.jsx("div",{style:V.overlay,onClick:()=>b(null),children:t.jsxs("div",{style:V.modal,onClick:k=>k.stopPropagation(),children:[t.jsxs("div",{style:V.modalHead,children:[t.jsx("span",{style:V.modalTitle,children:p.id?"Edit category":"New category"}),t.jsx("button",{onClick:()=>b(null),style:V.iconBtnPlain,children:t.jsx(Fe,{size:16})})]}),t.jsx("label",{style:V.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:p.name,onChange:k=>b(le=>({...le,name:k.target.value})),onKeyDown:k=>k.key==="Enter"&&gt(),placeholder:"e.g. Vegetables, Petrol…",style:V.input}),t.jsx("label",{style:V.label,children:"Color"}),t.jsx("div",{style:V.colorRow,children:bd.map(k=>t.jsx("button",{onClick:()=>b(le=>({...le,color:k})),style:{...V.colorSwatch,background:k,...p.color===k?V.colorSwatchOn:{}}},k))}),t.jsx("label",{style:V.label,children:"Icon"}),t.jsx("div",{style:V.iconPickGrid,children:Object.keys(Pm).map(k=>t.jsx("button",{onClick:()=>b(le=>({...le,icon:k})),style:{...V.iconPick,...p.icon===k?{background:p.color+"22",borderColor:p.color,color:p.color}:{}},children:t.jsx(En,{name:k,size:17})},k))}),t.jsxs("div",{style:V.modalActions,children:[t.jsx("button",{onClick:()=>b(null),style:V.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:gt,disabled:!p.name.trim(),style:{...V.saveBtn,...p.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(Oe,{size:15})," ",p.id?"Save":"Create"]})]})]})}),!a&&t.jsx("div",{style:V.muted,children:"Loading…"}),t.jsx(pr,{toasts:he,onUndo:we,onDismiss:be})]})}function _p({items:e,money:r}){const n=Math.max(1,...e.map(o=>o.value));return t.jsx("div",{style:V.tbWrap,children:e.map((o,i)=>t.jsxs("div",{style:V.tbRow,children:[t.jsx("div",{style:V.tbLbl,children:o.label}),t.jsx("div",{style:V.tbTrack,children:t.jsx("div",{style:{...V.tbBar,width:`${o.value/n*100}%`,background:o.color}})}),t.jsx("div",{style:V.tbVal,children:r(o.value)})]},i))})}const V={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},totalCard:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:14,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:16,padding:"16px 18px",marginBottom:16,flexWrap:"wrap"},totalLeft:{display:"flex",alignItems:"center",gap:12},totalLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600},totalVal:{fontSize:24,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2},scopeRow:{display:"flex",gap:6},scopeBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 13px",borderRadius:8,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},scopeBtnOn:{background:Er,color:"#fff",borderColor:Er},cols:{display:"grid",gap:16,alignItems:"start"},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},dayTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap",color:Er},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},calNav:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,minmax(0,1fr))",gap:4},calDow:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",textAlign:"center",padding:"4px 0"},calCell:{position:"relative",border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:8,aspectRatio:"1",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},calCellOn:{background:Er,color:"#fff",borderColor:Er,fontWeight:700},calCellToday:{borderColor:Er,fontWeight:700},calDot:{position:"absolute",bottom:3,width:4,height:4,borderRadius:"50%"},iconGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(64px, 1fr))",gap:10,marginTop:4},iconCell:{display:"flex",flexDirection:"column",alignItems:"center",gap:5},iconBtn:{width:52,height:52,borderRadius:14,border:"1px solid",display:"grid",placeItems:"center",cursor:"pointer"},iconBtnAdd:{width:52,height:52,borderRadius:14,border:"1px dashed var(--border)",background:"none",color:"var(--text-3)",display:"grid",placeItems:"center",cursor:"pointer"},iconLabel:{fontSize:10.5,fontWeight:600,color:"var(--text-2)",textAlign:"center",maxWidth:66,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},manageLink:{display:"inline-flex",alignItems:"center",gap:5,border:"none",background:"none",color:"var(--text-3)",fontSize:11.5,fontWeight:600,cursor:"pointer",marginTop:12,padding:0,fontFamily:"inherit"},logList:{marginTop:14,paddingTop:14,borderTop:"1px solid var(--border)",display:"flex",flexDirection:"column",gap:8},logRow:{display:"flex",alignItems:"center",gap:10,minWidth:0},logIcon:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},logInfoBtn:{flex:1,minWidth:0,border:"none",background:"none",padding:0,cursor:"pointer",textAlign:"left",fontFamily:"inherit",overflow:"hidden",color:"inherit"},logCat:{fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logNote:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logAmt:{fontSize:13.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap",flexShrink:0},editBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},noteCount:{fontSize:10.5,color:"var(--text-3)",textAlign:"right",marginTop:3},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:7},dot:{width:9,height:9,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},iconBadge:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:8},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},manageHint:{fontSize:11.5,color:"var(--text-3)",marginBottom:8},manageList:{display:"flex",flexDirection:"column",gap:6,marginBottom:10,maxHeight:320,overflowY:"auto"},manageRow:{display:"flex",alignItems:"center",gap:10,padding:"6px 2px"},reorderCol:{display:"flex",flexDirection:"column",gap:1,flexShrink:0},reorderBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:22,height:17,borderRadius:5,cursor:"pointer",display:"grid",placeItems:"center",padding:0},reorderDisabled:{opacity:.35,cursor:"not-allowed"},addColInline:{display:"inline-flex",alignItems:"center",gap:5,border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"9px 12px",borderRadius:8,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},colorRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:4},colorSwatch:{width:26,height:26,borderRadius:"50%",border:"2px solid transparent",cursor:"pointer",padding:0},colorSwatchOn:{border:"2px solid var(--text)",boxShadow:"0 0 0 2px var(--surface)"},iconPickGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:4},iconPick:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:9,height:36,display:"grid",placeItems:"center",cursor:"pointer"},tagRow:{display:"flex",gap:6,flexWrap:"wrap"},tagChip:{display:"inline-flex",alignItems:"center",gap:4,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:20,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tagChipOn:{background:Er,color:"#fff",borderColor:Er},trendDivider:{height:1,background:"var(--border)",margin:"16px 0 12px"},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},threeDayTitle:{fontSize:13,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:64,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},gn="#C9A227",ao="#C2536B",ea="#4C9A6B";new Date().toISOString().slice(0,10);const U1=e=>e?new Date(e+"T00:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"—";function V1(e=620){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const hd=e=>(Number(e)||0).toLocaleString(void 0,{maximumFractionDigits:2});function Y1(e){const r=e.target||0,n=e.completed||0;return r<=0?{pct:0,negPct:0,negative:!1}:n<0?{pct:0,negPct:Math.min(100,Math.abs(n)/r*100),negative:!0}:{pct:Math.min(100,n/r*100),negPct:0,negative:!1}}const K1=()=>({id:null,name:"",completed:"",target:"",end_date:"",reward:"",reward_cost:"",comment:"",allow_negative:!1});function Q1(){const e=Jn(),r=u=>Or(u,e.code),n=V1(),[o,i]=c.useState([]),[s,l]=c.useState(!1),[a,d]=c.useState(null),[g,h]=c.useState(null),f=c.useCallback(()=>{F.getChallenges().then(u=>{i(Array.isArray(u)?u:[]),l(!0)}).catch(()=>l(!0))},[]);c.useEffect(()=>{f()},[f]);const m=c.useMemo(()=>{const u=o.filter(v=>v.status==="done"),z=u.reduce((v,I)=>v+(I.reward_earned||0),0);return{total:o.length,done:u.length,active:o.filter(v=>v.status==="active").length,failed:o.filter(v=>v.status==="failed").length,earned:z}},[o]),B=()=>d(K1()),T=u=>d({id:u.id,name:u.name,completed:String(u.completed??""),target:String(u.target??""),end_date:u.end_date||"",reward:u.reward||"",reward_cost:String(u.reward_cost??""),comment:u.comment||"",allow_negative:!!u.allow_negative}),R=async()=>{const u=a.name.trim();if(!u)return;const z={name:u,completed:parseFloat(a.completed)||0,target:parseFloat(a.target)||0,end_date:a.end_date||null,reward:a.reward.trim(),reward_cost:parseFloat(a.reward_cost)||0,comment:a.comment.trim(),allow_negative:a.allow_negative};a.id?await F.updateChallenge(a.id,z):await F.createChallenge(z),d(null),f()},w=async u=>{window.confirm(`Delete challenge "${u.name}"?`)&&(await F.deleteChallenge(u.id),f())},p=u=>h({ch:u,amount:"",mode:"add"}),b=async()=>{const u=parseFloat(g.amount);if(isNaN(u))return;const z=g.mode==="set"?u:(g.ch.completed||0)+u;await F.updateChallenge(g.ch.id,{completed:z}),h(null),f()};return t.jsxs("div",{style:Se.page,children:[t.jsxs("div",{style:Se.head,children:[t.jsx("div",{style:Se.eyebrow,children:"Anvil · Challenges"}),t.jsx("h1",{style:Se.h1,children:"Challenges"}),t.jsx("div",{style:Se.subhead,children:"Small steps toward success — track each toward its target and bank the reward on completion."})]}),t.jsxs("div",{style:Se.statRow,children:[t.jsxs("div",{style:Se.statCard,children:[t.jsx("div",{style:Se.statVal,children:m.active}),t.jsx("div",{style:Se.statLbl,children:"Active"})]}),t.jsxs("div",{style:Se.statCard,children:[t.jsx("div",{style:{...Se.statVal,color:ea},children:m.done}),t.jsx("div",{style:Se.statLbl,children:"Completed"})]}),t.jsxs("div",{style:Se.statCard,children:[t.jsx("div",{style:{...Se.statVal,color:ao},children:m.failed}),t.jsx("div",{style:Se.statLbl,children:"Missed"})]}),t.jsxs("div",{style:Se.statCard,children:[t.jsx("div",{style:{...Se.statVal,color:gn},children:r(m.earned)}),t.jsx("div",{style:Se.statLbl,children:"Reward earned"})]})]}),t.jsxs("button",{onClick:B,style:Se.addBtn,children:[t.jsx(st,{size:16})," New challenge"]}),o.length===0?t.jsx("div",{style:Se.empty,children:s?"No challenges yet. Create your first small step toward success.":"Loading…"}):t.jsx("div",{style:Se.list,children:o.map((u,z)=>{const{pct:v,negPct:I,negative:E}=Y1(u),S=E?ao:u.status==="done"?ea:gn;return t.jsxs("div",{style:{...Se.card,...u.status==="failed"?Se.cardFailed:{}},children:[t.jsxs("div",{style:{...Se.cardTop,...n?{alignItems:"flex-start"}:{}},children:[t.jsxs("span",{style:{...Se.num,...n?{marginTop:2}:{}},children:["#",z+1]}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:{...Se.name,...n?Se.nameMobile:{}},children:u.name}),u.comment&&t.jsx("div",{style:Se.comment,children:u.comment}),n&&t.jsx("div",{style:Se.badgeRow,children:t.jsx($p,{status:u.status})})]}),!n&&t.jsx($p,{status:u.status}),t.jsx("button",{onClick:()=>T(u),style:Se.iconBtn,title:"Edit",children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:()=>w(u),style:Se.iconBtn,title:"Delete",children:t.jsx(Fe,{size:14})})]}),t.jsxs("div",{style:Se.barWrap,children:[t.jsx("div",{style:Se.barTrack,children:E?t.jsx("div",{style:{...Se.barFill,width:`${I}%`,background:ao,marginLeft:"auto"}}):t.jsx("div",{style:{...Se.barFill,width:`${v}%`,background:S}})}),t.jsxs("div",{style:Se.barMetaRow,children:[t.jsxs("span",{style:{...Se.completed,color:(u.completed||0)<0?ao:"var(--text)"},children:[(u.completed||0)<0&&t.jsx(Vn,{size:12,style:{marginRight:3,verticalAlign:"-1px"}}),hd(u.completed)]}),t.jsx("span",{style:Se.barPct,children:E?`-${Math.round(I)}%`:`${Math.round(v)}%`}),t.jsxs("span",{style:Se.target,children:["of ",hd(u.target)]})]})]}),t.jsxs("div",{style:Se.chips,children:[t.jsxs("span",{style:Se.chip,children:[t.jsx(Uy,{size:12})," Remaining ",hd(u.remaining)]}),t.jsxs("span",{style:Se.chip,children:[t.jsx(Ry,{size:12})," ",u.end_date?`Ends ${U1(u.end_date)}`:"No deadline"]}),u.reward&&t.jsxs("span",{style:Se.chip,children:[t.jsx(fs,{size:12})," ",u.reward]}),u.reward_cost>0&&t.jsxs("span",{style:{...Se.chip,...Se.chipReward},children:[t.jsx(Yr,{size:12})," ",r(u.reward_cost),u.status==="done"?" earned":""]}),u.allow_negative&&t.jsx("span",{style:{...Se.chip,color:ao,borderColor:ao+"55"},children:"± negative allowed"})]}),t.jsx("div",{style:Se.actions,children:t.jsxs("button",{onClick:()=>p(u),style:Se.progressBtn,children:[t.jsx(st,{size:13})," Update progress"]})})]},u.id)})}),a&&t.jsx("div",{style:Se.overlay,onClick:()=>d(null),children:t.jsxs("div",{style:Se.modal,onClick:u=>u.stopPropagation(),children:[t.jsxs("div",{style:Se.modalHead,children:[t.jsx("span",{style:Se.modalTitle,children:a.id?"Edit challenge":"New challenge"}),t.jsx("button",{onClick:()=>d(null),style:Se.iconBtnPlain,children:t.jsx(Fe,{size:16})})]}),t.jsx("label",{style:Se.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:a.name,onChange:u=>d(z=>({...z,name:u.target.value})),placeholder:"e.g. Earn ₹1,00,000 from trading",style:Se.input}),t.jsxs("div",{style:Se.grid2,children:[t.jsxs("div",{children:[t.jsx("label",{style:Se.label,children:"Completed"}),t.jsx("input",{type:"number",inputMode:"decimal",value:a.completed,onChange:u=>d(z=>({...z,completed:u.target.value})),placeholder:"0",style:Se.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:Se.label,children:"Target"}),t.jsx("input",{type:"number",inputMode:"decimal",value:a.target,onChange:u=>d(z=>({...z,target:u.target.value})),placeholder:"0",style:Se.input})]})]}),t.jsx("label",{style:Se.label,children:"End date (optional — past & incomplete marks it missed)"}),t.jsx("input",{type:"date",value:a.end_date,onChange:u=>d(z=>({...z,end_date:u.target.value})),style:Se.input}),t.jsxs("div",{style:Se.grid2,children:[t.jsxs("div",{children:[t.jsx("label",{style:Se.label,children:"Reward"}),t.jsx("input",{value:a.reward,onChange:u=>d(z=>({...z,reward:u.target.value})),placeholder:"e.g. New headphones",style:Se.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:Se.label,children:"Reward cost"}),t.jsx("input",{type:"number",inputMode:"decimal",value:a.reward_cost,onChange:u=>d(z=>({...z,reward_cost:u.target.value})),placeholder:"0",style:Se.input})]})]}),t.jsx("label",{style:Se.label,children:"Comment"}),t.jsx("input",{value:a.comment,onChange:u=>d(z=>({...z,comment:u.target.value})),placeholder:"Notes about this challenge",style:Se.input}),t.jsxs("label",{style:Se.toggleRow,children:[t.jsx("input",{type:"checkbox",checked:a.allow_negative,onChange:u=>d(z=>({...z,allow_negative:u.target.checked})),style:Se.checkbox}),t.jsxs("span",{children:[t.jsx("span",{style:Se.toggleLabel,children:"Allow negative progress"}),t.jsx("span",{style:Se.toggleHint,children:"Let progress drop below zero (e.g. a running trading loss shown in red)."})]})]}),t.jsxs("div",{style:Se.modalActions,children:[t.jsx("button",{onClick:()=>d(null),style:Se.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:R,disabled:!a.name.trim(),style:{...Se.saveBtn,...a.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(Oe,{size:15})," ",a.id?"Save":"Create"]})]})]})}),g&&t.jsx("div",{style:Se.overlay,onClick:()=>h(null),children:t.jsxs("div",{style:Se.modal,onClick:u=>u.stopPropagation(),children:[t.jsxs("div",{style:Se.modalHead,children:[t.jsxs("span",{style:Se.modalTitle,children:["Update · ",g.ch.name]}),t.jsx("button",{onClick:()=>h(null),style:Se.iconBtnPlain,children:t.jsx(Fe,{size:16})})]}),t.jsxs("div",{style:Se.progressCur,children:["Current: ",t.jsx("b",{children:r(g.ch.completed)})," of ",r(g.ch.target)]}),t.jsxs("div",{style:Se.modeRow,children:[t.jsx("button",{onClick:()=>h(u=>({...u,mode:"add"})),style:{...Se.modeBtn,...g.mode==="add"?Se.modeBtnOn:{}},children:"Add / subtract"}),t.jsx("button",{onClick:()=>h(u=>({...u,mode:"set"})),style:{...Se.modeBtn,...g.mode==="set"?Se.modeBtnOn:{}},children:"Set total"})]}),t.jsx("label",{style:Se.label,children:g.mode==="set"?"New completed total":"Amount to add (use a negative number to subtract)"}),t.jsx("input",{autoFocus:!0,type:"number",inputMode:"decimal",value:g.amount,onChange:u=>h(z=>({...z,amount:u.target.value})),onKeyDown:u=>u.key==="Enter"&&b(),placeholder:"0",style:Se.input}),!g.ch.allow_negative&&t.jsx("div",{style:Se.progressHint,children:"Negative totals are blocked for this challenge. Enable “Allow negative progress” to permit them."}),t.jsxs("div",{style:Se.modalActions,children:[t.jsx("button",{onClick:()=>h(null),style:Se.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:b,disabled:g.amount===""||isNaN(parseFloat(g.amount)),style:{...Se.saveBtn,...g.amount===""||isNaN(parseFloat(g.amount))?{opacity:.5,cursor:"not-allowed"}:{}},children:[t.jsx(Oe,{size:15})," Save"]})]})]})})]})}function $p({status:e}){const r={done:{label:"Completed",color:ea},failed:{label:"Missed",color:ao},active:{label:"In progress",color:"#3A7CA5"}},n=r[e]||r.active;return t.jsx("span",{style:{...Se.badge,color:n.color,background:n.color+"1A",borderColor:n.color+"44"},children:n.label})}const Se={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:780,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},statRow:{display:"flex",gap:10,marginBottom:14,flexWrap:"wrap"},statCard:{flex:1,minWidth:120,background:"var(--surface)",borderRadius:12,padding:"12px 14px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},statVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},addBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"none",background:gn,color:"#fff",padding:"10px 16px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginBottom:16},empty:{fontSize:13.5,color:"var(--text-3)",textAlign:"center",padding:"40px 0",background:"var(--surface)",borderRadius:16,border:"1px dashed var(--border)"},list:{display:"flex",flexDirection:"column",gap:14},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardFailed:{opacity:.72},cardTop:{display:"flex",alignItems:"center",gap:10},num:{fontSize:12,fontWeight:800,color:"var(--text-3)",fontFamily:"'Fraunces',Georgia,serif",flexShrink:0},name:{fontSize:15.5,fontWeight:700,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},nameMobile:{whiteSpace:"normal",overflow:"visible",textOverflow:"clip",wordBreak:"break-word",lineHeight:1.25},badgeRow:{marginTop:6},comment:{fontSize:12,color:"var(--text-3)",marginTop:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},badge:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:20,border:"1px solid",flexShrink:0,whiteSpace:"nowrap"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},barWrap:{marginTop:14},barTrack:{height:14,background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:8,overflow:"hidden",display:"flex"},barFill:{height:"100%",borderRadius:7,transition:"width 0.3s"},barMetaRow:{display:"flex",alignItems:"baseline",gap:8,marginTop:6},completed:{fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},barPct:{fontSize:12,fontWeight:700,color:"var(--text-2)"},target:{fontSize:12,color:"var(--text-3)",marginLeft:"auto"},chips:{display:"flex",gap:7,flexWrap:"wrap",marginTop:12},chip:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:600,color:"var(--text-2)",border:"1px solid var(--border)",borderRadius:20,padding:"4px 10px"},chipReward:{color:gn,borderColor:gn+"55",background:gn+"12"},actions:{marginTop:12},progressBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 14px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:460,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:4},grid2:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},toggleRow:{display:"flex",alignItems:"flex-start",gap:9,marginTop:14,cursor:"pointer"},checkbox:{width:17,height:17,marginTop:1,accentColor:gn,cursor:"pointer",flexShrink:0},toggleLabel:{display:"block",fontSize:13,fontWeight:700},toggleHint:{display:"block",fontSize:11.5,color:"var(--text-3)",marginTop:2},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:ea,color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},progressCur:{fontSize:13,color:"var(--text-2)",marginBottom:12},progressHint:{fontSize:11.5,color:"var(--text-3)",marginTop:6},modeRow:{display:"flex",gap:6,marginBottom:8},modeBtn:{flex:1,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 10px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modeBtnOn:{background:gn,color:"#fff",borderColor:gn}},Wi="#8268B0",Xi="#4C9A6B",q1=e=>e?new Date(e+"T00:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"",X1=()=>({id:null,wish:"",cost:"",note:"",link:""});function Z1(){const e=Jn(),r=w=>Or(w,e.code),[n,o]=c.useState([]),[i,s]=c.useState(!1),[l,a]=c.useState(null),d=c.useCallback(()=>{F.getBucket().then(w=>{o(Array.isArray(w)?w:[]),s(!0)}).catch(()=>s(!0))},[]);c.useEffect(()=>{d()},[d]);const g=c.useMemo(()=>{const w=n.filter(p=>!p.fulfilled);return{total:n.length,fulfilled:n.filter(p=>p.fulfilled).length,openCost:w.reduce((p,b)=>p+(b.cost||0),0)}},[n]),h=()=>a(X1()),f=w=>a({id:w.id,wish:w.wish,cost:String(w.cost??""),note:w.note||"",link:w.link||""}),m=async()=>{const w=l.wish.trim();if(!w)return;const p={wish:w,cost:parseFloat(l.cost)||0,note:l.note.trim(),link:l.link.trim()};l.id?await F.updateBucketWish(l.id,p):await F.createBucketWish(p),a(null),d()},B=async w=>{window.confirm(`Delete "${w.wish}" from your bucket list?`)&&(await F.deleteBucketWish(w.id),d())},T=async w=>{await F.updateBucketWish(w.id,{fulfilled:!w.fulfilled}),d()},R=async(w,p)=>{const b=w+p;if(b<0||b>=n.length)return;const u=[...n];[u[w],u[b]]=[u[b],u[w]],o(u),await F.arrangeBucket(u.map(z=>z.id)).catch(()=>{}),d()};return t.jsxs("div",{style:Ue.page,children:[t.jsxs("div",{style:Ue.head,children:[t.jsx("div",{style:Ue.eyebrow,children:"Anvil · Bucket List"}),t.jsx("h1",{style:Ue.h1,children:"Bucket List"}),t.jsx("div",{style:Ue.subhead,children:"The materialistic wishes you want to fulfil, big or small — ordered by what matters most."})]}),t.jsxs("div",{style:Ue.statRow,children:[t.jsxs("div",{style:Ue.statCard,children:[t.jsx("div",{style:Ue.statVal,children:g.total}),t.jsx("div",{style:Ue.statLbl,children:"Wishes"})]}),t.jsxs("div",{style:Ue.statCard,children:[t.jsx("div",{style:{...Ue.statVal,color:Xi},children:g.fulfilled}),t.jsx("div",{style:Ue.statLbl,children:"Fulfilled"})]}),t.jsxs("div",{style:Ue.statCard,children:[t.jsx("div",{style:{...Ue.statVal,color:Wi},children:r(g.openCost)}),t.jsx("div",{style:Ue.statLbl,children:"Still wished"})]})]}),t.jsxs("button",{onClick:h,style:Ue.addBtn,children:[t.jsx(st,{size:16})," New wish"]}),n.length===0?t.jsx("div",{style:Ue.empty,children:i?"No wishes yet. Add the first thing you'd love to have.":"Loading…"}):t.jsx("div",{style:Ue.list,children:n.map((w,p)=>t.jsxs("div",{style:{...Ue.card,...w.fulfilled?Ue.cardDone:{}},children:[t.jsxs("div",{style:Ue.reorderCol,children:[t.jsx("button",{onClick:()=>R(p,-1),disabled:p===0,style:{...Ue.reorderBtn,...p===0?Ue.reorderOff:{}},title:"Higher priority",children:t.jsx(ya,{size:14})}),t.jsx("span",{style:Ue.rank,children:p+1}),t.jsx("button",{onClick:()=>R(p,1),disabled:p===n.length-1,style:{...Ue.reorderBtn,...p===n.length-1?Ue.reorderOff:{}},title:"Lower priority",children:t.jsx(So,{size:14})})]}),t.jsxs("div",{style:Ue.body,children:[t.jsxs("div",{style:Ue.topRow,children:[t.jsx("span",{style:{...Ue.wishName,...w.fulfilled?Ue.wishNameDone:{}},children:w.wish}),t.jsx("span",{style:Ue.cost,children:r(w.cost)})]}),w.note&&t.jsx("div",{style:Ue.note,children:w.note}),t.jsxs("div",{style:Ue.metaRow,children:[w.fulfilled&&t.jsxs("span",{style:Ue.doneBadge,children:[t.jsx(zg,{size:11})," Fulfilled",w.fulfilled_date?` · ${q1(w.fulfilled_date)}`:""]}),w.link&&t.jsxs("a",{href:w.link,target:"_blank",rel:"noreferrer",style:Ue.link,children:[t.jsx(dc,{size:11})," Link"]})]})]}),t.jsxs("div",{style:Ue.actions,children:[t.jsxs("button",{onClick:()=>T(w),style:{...Ue.pill,...w.fulfilled?{}:{color:Xi,borderColor:Xi+"66"}},title:w.fulfilled?"Mark as not fulfilled":"Mark fulfilled",children:[t.jsx(Oe,{size:13})," ",w.fulfilled?"Undo":"Fulfilled"]}),t.jsx("button",{onClick:()=>f(w),style:Ue.iconBtn,title:"Edit",children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:()=>B(w),style:Ue.iconBtn,title:"Delete",children:t.jsx(Fe,{size:14})})]})]},w.id))}),t.jsx("div",{style:Ue.footNote,children:"Enable “Fulfil from bucket list” in the Rewards screen to spend your pending reward on these wishes."}),l&&t.jsx("div",{style:Ue.overlay,onClick:()=>a(null),children:t.jsxs("div",{style:Ue.modal,onClick:w=>w.stopPropagation(),children:[t.jsxs("div",{style:Ue.modalHead,children:[t.jsx("span",{style:Ue.modalTitle,children:l.id?"Edit wish":"New wish"}),t.jsx("button",{onClick:()=>a(null),style:Ue.iconBtnPlain,children:t.jsx(Fe,{size:16})})]}),t.jsx("label",{style:Ue.label,children:"Wish *"}),t.jsx("input",{autoFocus:!0,value:l.wish,onChange:w=>a(p=>({...p,wish:w.target.value})),placeholder:"e.g. PlayStation 5, trip to Japan",style:Ue.input}),t.jsx("label",{style:Ue.label,children:"Cost"}),t.jsx("input",{type:"number",inputMode:"decimal",value:l.cost,onChange:w=>a(p=>({...p,cost:w.target.value})),placeholder:"0",style:Ue.input}),t.jsx("label",{style:Ue.label,children:"Link (optional)"}),t.jsx("input",{value:l.link,onChange:w=>a(p=>({...p,link:w.target.value})),placeholder:"https://…",style:Ue.input}),t.jsx("label",{style:Ue.label,children:"Note (optional)"}),t.jsx("input",{value:l.note,onChange:w=>a(p=>({...p,note:w.target.value})),placeholder:"colour, model, why you want it…",style:Ue.input}),t.jsxs("div",{style:Ue.modalActions,children:[t.jsx("button",{onClick:()=>a(null),style:Ue.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:m,disabled:!l.wish.trim(),style:{...Ue.saveBtn,...l.wish.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(Oe,{size:15})," ",l.id?"Save":"Add wish"]})]})]})})]})}const Ue={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:720,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},statRow:{display:"flex",gap:10,marginBottom:14,flexWrap:"wrap"},statCard:{flex:1,minWidth:110,background:"var(--surface)",borderRadius:12,padding:"12px 14px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},statVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},addBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"none",background:Wi,color:"#fff",padding:"10px 16px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginBottom:16},empty:{fontSize:13.5,color:"var(--text-3)",textAlign:"center",padding:"40px 0",background:"var(--surface)",borderRadius:16,border:"1px dashed var(--border)"},list:{display:"flex",flexDirection:"column",gap:10},card:{display:"flex",gap:12,alignItems:"stretch",background:"var(--surface)",borderRadius:14,padding:"12px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardDone:{opacity:.7},reorderCol:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:2,flexShrink:0},reorderBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:24,height:20,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center",padding:0},reorderOff:{opacity:.3,cursor:"not-allowed"},rank:{fontSize:12,fontWeight:800,color:"var(--text-3)",fontFamily:"'Fraunces',Georgia,serif",padding:"1px 0"},body:{flex:1,minWidth:0},topRow:{display:"flex",justifyContent:"space-between",gap:10,alignItems:"baseline"},wishName:{fontSize:15,fontWeight:700,minWidth:0,wordBreak:"break-word"},wishNameDone:{textDecoration:"line-through",color:"var(--text-3)"},cost:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:Wi,flexShrink:0,whiteSpace:"nowrap"},note:{fontSize:12.5,color:"var(--text-3)",marginTop:3},metaRow:{display:"flex",gap:8,flexWrap:"wrap",marginTop:7,alignItems:"center"},doneBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11,fontWeight:700,color:Xi,background:Xi+"1A",borderRadius:20,padding:"3px 9px"},link:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:700,color:Wi,textDecoration:"none"},actions:{display:"flex",flexDirection:"column",gap:6,alignItems:"flex-end",justifyContent:"center",flexShrink:0},pill:{display:"inline-flex",alignItems:"center",gap:4,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 10px",borderRadius:8,fontSize:11.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",whiteSpace:"nowrap"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:26,height:26,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},footNote:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",marginTop:18,fontStyle:"italic"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:4},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:Wi,color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Zi="#3A7CA5",Lt="#4C9A6B",zt="#C2536B",ta=[{id:"swing",label:"Swing",color:"#8268B0"},{id:"fno",label:"FnO",color:"#C9772E"},{id:"intraday",label:"Intraday",color:"#3A7CA5"}],al=e=>ta.find(r=>r.id===e)||ta[0],J1=new Set(["fno","intraday"]),Pp=e=>J1.has(e),Nm=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,dl=Nm(new Date),e2=e=>new Date(e+"T00:00").toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"}),Np=e=>e?new Date(e+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"—",tr=e=>e===""||e===null||e===void 0||isNaN(parseFloat(e))?0:parseFloat(e),md=(e,r)=>{const n=tr(e.qty);return r==="profit"?Math.abs(tr(e.tgt_price)-tr(e.entry_price))*n:-Math.abs(tr(e.sl_price)-tr(e.entry_price))*n};function t2(e,r,n,o){const i=tr(e.entry_price),s=tr(e.sl_price),l=tr(e.tgt_price),a=tr(e.qty),d=e.direction==="short";if(!e.instrument.trim())return"Enter the instrument.";if(i<=0||s<=0||l<=0||a<=0)return"Entry, SL, target and quantity must all be greater than zero.";if(d){if(s<=i)return"For a short, stop loss must be greater than the entry price (CMP).";if(l>=i)return"For a short, target must be less than the entry price (CMP)."}else{if(s>=i)return"Stop loss must be less than the entry price (CMP).";if(l<=i)return"Target must be greater than the entry price (CMP)."}const g=Math.abs(i-s),h=Math.abs(l-i),f=r.capital||0;if(r.rr>0&&h<r.rr*g-1e-9){const B=d?i-r.rr*g:i+r.rr*g;return`Risk:reward must be ≥ 1:${r.rr}. Target must be ${d?"at most":"at least"} ${B.toLocaleString()}.`}if(r.risk_pct>0&&f>0){const B=f*r.risk_pct/100,T=g*a;if(T>B+1e-9)return`This risks ${o(T)} — over your ${r.risk_pct}% limit of ${o(B)}. Reduce qty or tighten SL.`}const m=(r.diversification||{})[e.kind]||0;if(m>0){if(f>0){const B=f/m,T=i*a;if(T>B+1e-9)return`Position value ${o(T)} exceeds the diversification cap ${o(B)} (capital ÷ ${m}).`}if(n>=m)return`You already hold ${n} open ${e.kind} trade(s); diversification allows ${m}.`}return""}function r2(e=760){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const n2=e=>({id:null,kind:"swing",direction:"long",instrument:"",purchase_date:e,entry_price:"",sl_price:"",tgt_price:"",qty:"",note:""});function o2(){const e=r2(),r=Jn(),n=D=>js(D,r.code),[o,i]=c.useState([]),[s,l]=c.useState({}),[a,d]=c.useState(0),[g,h]=c.useState(0),[f,m]=c.useState(0),[B,T]=c.useState({capital:0,risk_pct:0,rr:0,diversification:{swing:0,fno:0,intraday:0}}),[R,w]=c.useState(!1),[p,b]=c.useState(dl),[u,z]=c.useState(()=>{const D=new Date;return new Date(D.getFullYear(),D.getMonth(),1)}),[v,I]=c.useState(null),[E,S]=c.useState(null),[j,Y]=c.useState(""),re=c.useCallback(()=>{F.getTrades().then(D=>{i(D.entries),l(D.learnings||{}),d(D.capital||0),h(D.net_pl||0),m(D.current||0),D.rules&&T(D.rules),w(!0)}).catch(()=>w(!0))},[]);c.useEffect(()=>{re()},[re]),c.useEffect(()=>{Y(s[p]||"")},[p,s]);const ee=c.useMemo(()=>o.filter(D=>D.status==="open"),[o]),W=c.useMemo(()=>o.filter(D=>D.status!=="open"),[o]),he=c.useMemo(()=>{if(!v)return"";const D=ee.filter(y=>y.kind===v.kind&&y.id!==v.id).length;return t2(v,B,D,n)},[v,B,ee,r.code]),we=c.useMemo(()=>{const D={};return W.forEach(y=>{D[y.date]=(D[y.date]||0)+(Number(y.pl)||0)}),D},[W]),be=W.filter(D=>D.date===p),ze=we[p]||0,K=ze>0?"positive":ze<0?"negative":"neutral",U=c.useMemo(()=>{const D=u,y=(D.getDay()+6)%7,te=new Date(D.getFullYear(),D.getMonth()+1,0).getDate(),M=[];for(let ie=0;ie<y;ie++)M.push(null);for(let ie=1;ie<=te;ie++){const ve=Nm(new Date(D.getFullYear(),D.getMonth(),ie)),Ae=we[ve],qe=!!s[ve];M.push({date:ve,day:ie,pl:Ae,hasLearning:qe,has:Ae!==void 0||qe})}return M},[u,we,s]),ce=D=>z(y=>new Date(y.getFullYear(),y.getMonth()+D,1)),x=u.toLocaleDateString("en-US",{month:"long",year:"numeric"}),Q=(D="swing")=>I({...n2(p),kind:D}),O=D=>I({id:D.id,kind:D.kind,direction:D.direction||"long",instrument:D.instrument,purchase_date:D.purchase_date||D.date,entry_price:D.entry_price??"",sl_price:D.sl_price??"",tgt_price:D.tgt_price??"",qty:D.qty??"",note:D.note||""}),G=D=>I(y=>({...y,kind:D,direction:Pp(D)?y.direction:"long"})),N=async()=>{if(he)return;const D={kind:v.kind,direction:v.direction,instrument:v.instrument.trim(),purchase_date:v.purchase_date,entry_price:tr(v.entry_price),sl_price:tr(v.sl_price),tgt_price:tr(v.tgt_price),qty:tr(v.qty),note:v.note.trim()};try{v.id?await F.updateTradeEntry(v.id,D):await F.createTradeEntry(D),I(null),re()}catch(y){window.alert(y.message||"Could not save this trade.")}},ge=async D=>{window.confirm("Delete this trade?")&&(await F.deleteTradeEntry(D.id),re())},de=(D,y)=>S({trade:D,outcome:y,date:D.kind==="intraday"&&D.purchase_date||dl}),Me=async()=>{try{await F.bookTradeEntry(E.trade.id,E.outcome,E.date),S(null),re()}catch(D){window.alert(D.message||"Could not book this trade.")}},oe=async D=>{await F.reopenTradeEntry(D.id),re()},ae=async()=>{await F.setTradeLearning(p,j),re()},P=(s[p]||"")!==j,X=f>=a,me=g>0?Lt:g<0?zt:"var(--text)";return t.jsxs("div",{style:q.page,children:[t.jsx("div",{style:q.head,children:t.jsxs("div",{children:[t.jsx("div",{style:q.eyebrow,children:"Anvil · Trading Journal"}),t.jsx("h1",{style:q.h1,children:"Trading Journal"}),t.jsx("div",{style:q.subhead,children:"Open trades with your entry, SL & target — book profit/loss and P/L is calculated for you."})]})}),t.jsxs("div",{style:q.capStrip,children:[t.jsxs("div",{style:q.capBox,children:[t.jsxs("div",{style:q.capLabel,children:[t.jsx(ja,{size:13})," Starting capital"]}),t.jsx("div",{style:q.capVal,children:n(a)}),t.jsx("div",{style:q.capHint,children:"Set in Settings → Trading"})]}),t.jsxs("div",{style:q.capBox,children:[t.jsxs("div",{style:q.capLabel,children:[t.jsx(lm,{size:13})," Net P/L (booked)"]}),t.jsxs("div",{style:{...q.capVal,color:me},children:[g>=0?"+":"",n(g)]}),t.jsxs("div",{style:q.capHint,children:[W.length," booked · ",ee.length," open"]})]}),t.jsxs("div",{style:{...q.capBox,...q.capBoxMain,borderColor:X?Lt:zt},children:[t.jsxs("div",{style:q.capLabel,children:[X?t.jsx(Ki,{size:13,color:Lt}):t.jsx(Vn,{size:13,color:zt})," Current balance"]}),t.jsx("div",{style:{...q.capValBig,color:X?Lt:zt},children:n(f)}),t.jsx("div",{style:q.capHint,children:X?"Above starting capital":"Below starting capital"})]})]}),t.jsxs("div",{style:q.card,children:[t.jsxs("div",{style:q.cardTitleRow,children:[t.jsxs("div",{children:[t.jsxs("div",{style:q.cardTitle,children:[t.jsx(am,{size:15,color:Zi})," Open trades"]}),t.jsx("div",{style:q.cardSub,children:"Positions you haven't booked yet — mark profit or loss when you exit."})]}),t.jsx("div",{style:q.addRow,children:ta.map(D=>t.jsxs("button",{onClick:()=>Q(D.id),style:{...q.addKindBtn,color:D.color,borderColor:D.color+"55",background:D.color+"12"},children:[t.jsx(st,{size:14})," ",D.label]},D.id))})]}),ee.length>0?t.jsx("div",{style:q.openScroll,children:ee.map(D=>{const y=al(D.kind);return t.jsxs("div",{style:q.openRow,children:[t.jsx("span",{style:{...q.kindTag,background:y.color+"1A",color:y.color},children:y.label}),t.jsxs("div",{style:q.openBody,children:[t.jsxs("div",{style:q.openTop,children:[t.jsxs("span",{style:q.tradeInstr,children:[D.instrument||"—",t.jsx(Op,{direction:D.direction})]}),t.jsx("span",{style:q.openQty,children:D.qty?`${D.qty} qty`:""})]}),t.jsxs("div",{style:q.openMeta,children:[t.jsxs("span",{style:q.metaPill,children:["Bought ",Np(D.purchase_date)]}),D.entry_price?t.jsxs("span",{style:q.metaPill,children:["Entry ",D.entry_price]}):null,D.sl_price?t.jsxs("span",{style:{...q.metaPill,color:zt},children:["SL ",D.sl_price]}):null,D.tgt_price?t.jsxs("span",{style:{...q.metaPill,color:Lt},children:["TGT ",D.tgt_price]}):null]})]}),t.jsxs("div",{style:q.bookBtns,children:[t.jsxs("button",{onClick:()=>de(D,"profit"),style:{...q.bookBtn,background:Lt},children:[t.jsx(Ki,{size:13})," Profit"]}),t.jsxs("button",{onClick:()=>de(D,"loss"),style:{...q.bookBtn,background:zt},children:[t.jsx(Vn,{size:13})," Loss"]}),t.jsx("button",{onClick:()=>O(D),style:q.iconGhost,title:"Edit",children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:()=>ge(D),style:q.iconGhost,title:"Delete",children:t.jsx(vs,{size:13})})]})]},D.id)})}):t.jsx("div",{style:q.noTrades,children:R?"No open trades. Add one with the buttons above.":"Loading…"})]}),t.jsxs("div",{style:{...q.cols,gridTemplateColumns:e?"1fr":"320px 1fr"},children:[t.jsxs("div",{style:q.card,children:[t.jsxs("div",{style:q.calHead,children:[t.jsx("button",{onClick:()=>ce(-1),style:q.calNav,children:t.jsx(wn,{size:16})}),t.jsx("span",{style:q.calTitle,children:x}),t.jsx("button",{onClick:()=>ce(1),style:q.calNav,children:t.jsx(nn,{size:16})})]}),t.jsxs("div",{style:q.calGrid,children:[["M","T","W","T","F","S","S"].map((D,y)=>t.jsx("div",{style:q.calDow,children:D},y)),U.map((D,y)=>D===null?t.jsx("div",{},y):t.jsxs("button",{onClick:()=>b(D.date),style:{...q.calCell,...D.date===p?q.calCellOn:{},...D.date===dl&&D.date!==p?q.calCellToday:{}},children:[t.jsx("span",{children:D.day}),D.pl!==void 0&&D.pl!==0&&t.jsx("span",{style:{...q.calDot,background:D.date===p?"#fff":D.pl>0?Lt:zt}}),D.pl===void 0&&D.hasLearning&&t.jsx("span",{style:{...q.calDot,background:D.date===p?"#fff":"var(--text-3)"}})]},D.date))]}),t.jsxs("div",{style:q.calLegend,children:[t.jsxs("span",{children:[t.jsx("span",{style:{...q.legDot,background:Lt}})," Profit"]}),t.jsxs("span",{children:[t.jsx("span",{style:{...q.legDot,background:zt}})," Loss"]}),t.jsxs("span",{children:[t.jsx("span",{style:{...q.legDot,background:"var(--text-3)"}})," Learning only"]})]})]}),t.jsxs("div",{children:[t.jsxs("div",{style:q.card,children:[t.jsxs("div",{style:q.cardTitleRow,children:[t.jsxs("div",{children:[t.jsx("div",{style:q.cardTitle,children:e2(p)}),t.jsxs("div",{style:q.cardSub,children:[be.length," booked trade",be.length===1?"":"s"," this day"]})]}),t.jsxs("div",{style:q.dayPLWrap,children:[t.jsx("span",{style:{...q.sentiment,...K==="positive"?{background:Lt+"1A",color:Lt}:K==="negative"?{background:zt+"1A",color:zt}:{background:"var(--hover)",color:"var(--text-3)"}},children:K==="positive"?"Positive day":K==="negative"?"Negative day":"No trades"}),t.jsxs("span",{style:{...q.dayPL,color:ze>0?Lt:ze<0?zt:"var(--text-2)"},children:[ze>=0?"+":"",n(ze)]})]})]}),be.length>0?t.jsx("div",{style:q.tradeList,children:be.map(D=>{const y=al(D.kind),te=(Number(D.pl)||0)>=0;return t.jsxs("div",{style:q.tradeRow,children:[t.jsx("span",{style:{...q.kindTag,background:y.color+"1A",color:y.color},children:y.label}),t.jsxs("div",{style:q.tradeBody,children:[t.jsxs("div",{style:q.tradeTop,children:[t.jsxs("span",{style:q.tradeInstr,children:[D.instrument||"—",t.jsx(Op,{direction:D.direction})]}),t.jsxs("span",{style:{...q.tradePL,color:te?Lt:zt},children:[te?"+":"",n(Number(D.pl)||0)]})]}),t.jsxs("div",{style:q.tradeMeta,children:[D.entry_price?t.jsxs("span",{style:q.metaPill,children:["Entry ",D.entry_price]}):null,D.sl_price?t.jsxs("span",{style:q.metaPill,children:["SL ",D.sl_price]}):null,D.tgt_price?t.jsxs("span",{style:q.metaPill,children:["TGT ",D.tgt_price]}):null,D.qty?t.jsxs("span",{style:q.metaPill,children:[D.qty," qty"]}):null,D.purchase_date&&D.purchase_date!==D.date&&t.jsxs("span",{style:q.metaPill,children:["Bought ",Np(D.purchase_date)]}),D.note&&t.jsx("span",{style:q.tradeNote,children:D.note})]})]}),t.jsx("button",{onClick:()=>oe(D),style:q.iconGhost,title:"Reopen",children:t.jsx(wm,{size:13})}),t.jsx("button",{onClick:()=>ge(D),style:q.iconGhost,title:"Delete",children:t.jsx(vs,{size:13})})]},D.id)})}):t.jsx("div",{style:q.noTrades,children:"No trades booked on this day — you can still record a learning below."})]}),t.jsxs("div",{style:q.card,children:[t.jsxs("div",{style:q.cardTitle,children:[t.jsx(xa,{size:15,color:Zi})," Daily learning"]}),t.jsx("textarea",{value:j,onChange:D=>Y(D.target.value),placeholder:"What did you learn today? Mistakes, what worked, discipline notes…",style:q.learnArea}),t.jsxs("button",{onClick:ae,disabled:!P,style:{...q.saveBtn,...P?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(Oe,{size:14})," Save learning"]})]})]})]}),v&&(()=>{const D=al(v.kind),y=v.direction==="short",te=y?zt:Lt,M=md(v,"profit"),ie=md(v,"loss");return t.jsx("div",{style:q.overlay,onClick:()=>I(null),children:t.jsxs("div",{style:q.sheet,onClick:ve=>ve.stopPropagation(),children:[t.jsxs("div",{style:{...q.sheetHead,background:`linear-gradient(135deg, ${D.color}, ${te})`},children:[t.jsxs("div",{style:q.sheetHeadRow,children:[t.jsx("span",{style:q.sheetKicker,children:v.id?"Edit position":"New position"}),t.jsx("button",{onClick:()=>I(null),style:q.sheetClose,children:t.jsx(Fe,{size:16})})]}),t.jsx("div",{style:q.sheetTitle,children:v.instrument||"Open trade"}),t.jsxs("div",{style:q.sheetChips,children:[t.jsx("span",{style:q.sheetChip,children:D.label}),t.jsx("span",{style:q.sheetChip,children:y?"Short ▼":"Long ▲"}),tr(v.qty)>0&&t.jsxs("span",{style:q.sheetChip,children:[tr(v.qty)," qty"]})]})]}),t.jsxs("div",{style:q.sheetBody,children:[t.jsx("label",{style:q.fLabel,children:"Type"}),t.jsx("div",{style:q.seg,children:ta.map(ve=>t.jsx("button",{type:"button",onClick:()=>G(ve.id),style:{...q.segBtn,...v.kind===ve.id?{...q.segBtnOn,background:ve.color}:{}},children:ve.label},ve.id))}),Pp(v.kind)&&t.jsxs(t.Fragment,{children:[t.jsx("label",{style:q.fLabel,children:"Direction"}),t.jsxs("div",{style:q.seg,children:[t.jsxs("button",{type:"button",onClick:()=>I(ve=>({...ve,direction:"long"})),style:{...q.segBtn,...y?{}:{...q.segBtnOn,background:Lt}},children:[t.jsx(Ki,{size:14})," Long"]}),t.jsxs("button",{type:"button",onClick:()=>I(ve=>({...ve,direction:"short"})),style:{...q.segBtn,...y?{...q.segBtnOn,background:zt}:{}},children:[t.jsx(Vn,{size:14})," Short"]})]}),t.jsx("div",{style:q.dirHint,children:y?"Short — profit when price falls. SL sits above CMP, target below.":"Long — profit when price rises. SL sits below CMP, target above."})]}),t.jsx("label",{style:q.fLabel,children:"Instrument"}),t.jsx("input",{autoFocus:!0,value:v.instrument,onChange:ve=>I(Ae=>({...Ae,instrument:ve.target.value.toUpperCase()})),placeholder:"e.g. NIFTY 22000 CE, RELIANCE",style:{...q.field,textTransform:"uppercase"}}),t.jsxs("div",{style:q.grid2,children:[t.jsxs("div",{children:[t.jsx("label",{style:q.fLabel,children:"Entry (CMP)"}),t.jsx("input",{type:"number",inputMode:"decimal",value:v.entry_price,onChange:ve=>I(Ae=>({...Ae,entry_price:ve.target.value})),placeholder:"0",style:q.field})]}),t.jsxs("div",{children:[t.jsx("label",{style:q.fLabel,children:"Quantity"}),t.jsx("input",{type:"number",inputMode:"decimal",value:v.qty,onChange:ve=>I(Ae=>({...Ae,qty:ve.target.value})),placeholder:"0",style:q.field})]})]}),t.jsxs("div",{style:q.grid2,children:[t.jsxs("div",{children:[t.jsxs("label",{style:{...q.fLabel,color:zt},children:["Stop loss",y?" (above)":" (below)"]}),t.jsx("input",{type:"number",inputMode:"decimal",value:v.sl_price,onChange:ve=>I(Ae=>({...Ae,sl_price:ve.target.value})),placeholder:"0",style:{...q.field,borderColor:zt+"55"}})]}),t.jsxs("div",{children:[t.jsxs("label",{style:{...q.fLabel,color:Lt},children:["Target",y?" (below)":" (above)"]}),t.jsx("input",{type:"number",inputMode:"decimal",value:v.tgt_price,onChange:ve=>I(Ae=>({...Ae,tgt_price:ve.target.value})),placeholder:"0",style:{...q.field,borderColor:Lt+"55"}})]})]}),t.jsxs("div",{style:q.preview2,children:[t.jsxs("div",{style:{...q.previewCell,background:Lt+"12"},children:[t.jsx("span",{style:q.previewLbl,children:"If target hit"}),t.jsxs("span",{style:{...q.previewVal,color:Lt},children:["+",n(M)]})]}),t.jsxs("div",{style:{...q.previewCell,background:zt+"12"},children:[t.jsx("span",{style:q.previewLbl,children:"If SL hit"}),t.jsx("span",{style:{...q.previewVal,color:zt},children:n(ie)})]})]}),t.jsx("label",{style:q.fLabel,children:"Purchase date"}),t.jsx("input",{type:"date",value:v.purchase_date,onChange:ve=>I(Ae=>({...Ae,purchase_date:ve.target.value})),style:q.field}),t.jsx("label",{style:q.fLabel,children:"Note (optional)"}),t.jsx("input",{value:v.note,onChange:ve=>I(Ae=>({...Ae,note:ve.target.value})),placeholder:"reason, setup, emotion…",style:q.field}),he?t.jsx("div",{style:q.errBanner,children:he}):t.jsx(i2,{rules:B,kind:v.kind,money:n})]}),t.jsxs("div",{style:q.sheetFoot,children:[t.jsx("button",{onClick:()=>I(null),style:q.ghostBtn,children:"Cancel"}),t.jsxs("button",{onClick:N,disabled:!!he,style:{...q.primaryBtn,background:te,...he?{opacity:.45,cursor:"not-allowed"}:{}},children:[t.jsx(Oe,{size:16})," ",v.id?"Save changes":"Open trade"]})]})]})})})(),E&&(()=>{const D=E.outcome==="profit",y=D?Lt:zt,te=E.trade,M=(te.direction||"long")==="short",ie=al(te.kind),ve=D?M?`(Entry ${te.entry_price||0} − TGT ${te.tgt_price||0}) × ${te.qty||0}`:`(TGT ${te.tgt_price||0} − Entry ${te.entry_price||0}) × ${te.qty||0}`:M?`(SL ${te.sl_price||0} − Entry ${te.entry_price||0}) × ${te.qty||0}`:`(Entry ${te.entry_price||0} − SL ${te.sl_price||0}) × ${te.qty||0}`;return t.jsx("div",{style:q.overlay,onClick:()=>S(null),children:t.jsxs("div",{style:q.sheet,onClick:Ae=>Ae.stopPropagation(),children:[t.jsxs("div",{style:{...q.sheetHead,background:`linear-gradient(135deg, ${y}, ${y}CC)`},children:[t.jsxs("div",{style:q.sheetHeadRow,children:[t.jsx("span",{style:q.sheetKicker,children:D?"Book profit":"Book loss"}),t.jsx("button",{onClick:()=>S(null),style:q.sheetClose,children:t.jsx(Fe,{size:16})})]}),t.jsx("div",{style:q.sheetTitle,children:te.instrument||"—"}),t.jsxs("div",{style:q.sheetChips,children:[t.jsx("span",{style:q.sheetChip,children:ie.label}),t.jsx("span",{style:q.sheetChip,children:M?"Short":"Long"})]})]}),t.jsxs("div",{style:q.sheetBody,children:[t.jsxs("div",{style:q.bookHero,children:[t.jsx("span",{style:q.bookHeroLbl,children:D?"Realized profit":"Realized loss"}),t.jsxs("span",{style:{...q.bookHeroVal,color:y},children:[D?"+":"",n(md(te,E.outcome))]}),t.jsx("span",{style:q.bookHeroMeta,children:ve})]}),te.kind==="intraday"?t.jsxs(t.Fragment,{children:[t.jsx("label",{style:q.fLabel,children:"Outcome date · locked to purchase day"}),t.jsx("input",{type:"date",value:E.date,min:te.purchase_date,max:te.purchase_date,disabled:!0,style:{...q.field,opacity:.7,cursor:"not-allowed"}}),t.jsx("div",{style:q.dirHint,children:"Intraday trades are squared off the same day they're bought."})]}):t.jsxs(t.Fragment,{children:[t.jsx("label",{style:q.fLabel,children:"Outcome date · colours this day"}),t.jsx("input",{type:"date",value:E.date,onChange:Ae=>S(qe=>({...qe,date:Ae.target.value})),style:q.field})]})]}),t.jsxs("div",{style:q.sheetFoot,children:[t.jsx("button",{onClick:()=>S(null),style:q.ghostBtn,children:"Cancel"}),t.jsxs("button",{onClick:Me,disabled:!E.date,style:{...q.primaryBtn,background:y,...E.date?{}:{opacity:.45,cursor:"not-allowed"}},children:[t.jsx(Oe,{size:16})," Book ",E.outcome]})]})]})})})()]})}function Op({direction:e}){return(e||"long")!=="short"?null:t.jsxs("span",{style:q.dirBadge,children:[t.jsx(Vn,{size:10})," SHORT"]})}function i2({rules:e,kind:r,money:n}){const o=[],i=e.capital||0;e.rr>0&&o.push(`Min risk:reward 1:${e.rr}`),e.risk_pct>0&&i>0&&o.push(`Max risk ${n(i*e.risk_pct/100)} (${e.risk_pct}%)`);const s=(e.diversification||{})[r]||0;return s>0&&(i>0&&o.push(`Max position ${n(i/s)}`),o.push(`Max ${s} open ${r}`)),o.length?t.jsxs("div",{style:q.rulesHint,children:["Rules · ",o.join(" · ")]}):null}const q={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:1100,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},capStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:12,marginBottom:18},capBox:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:"13px 16px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},capBoxMain:{borderWidth:2},capLabel:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,fontWeight:600,color:"var(--text-2)"},capVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.1},capValBig:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.1},capHint:{fontSize:10.5,color:"var(--text-3)",marginTop:4},cols:{display:"grid",gap:16,alignItems:"start"},card:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{width:30,height:30,borderRadius:8,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:4},calDow:{fontSize:10,fontWeight:700,color:"var(--text-3)",textAlign:"center",padding:"2px 0"},calCell:{position:"relative",aspectRatio:"1",border:"1px solid transparent",borderRadius:8,background:"var(--bg)",color:"var(--text-2)",fontSize:12.5,fontWeight:600,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},calCellOn:{background:Zi,color:"#fff"},calCellToday:{borderColor:Zi},calDot:{position:"absolute",bottom:4,width:5,height:5,borderRadius:"50%"},calLegend:{display:"flex",gap:12,flexWrap:"wrap",marginTop:12,fontSize:10.5,color:"var(--text-3)",fontWeight:600},legDot:{display:"inline-block",width:7,height:7,borderRadius:"50%",marginRight:4},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:10,marginBottom:12,flexWrap:"wrap"},cardTitle:{display:"flex",alignItems:"center",gap:6,fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:12,color:"var(--text-3)",marginTop:2},dayPLWrap:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:4},sentiment:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:10},dayPL:{fontSize:17,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},addRow:{display:"flex",gap:8,flexWrap:"wrap"},addKindBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid",borderRadius:9,padding:"7px 12px",fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},openScroll:{display:"flex",flexDirection:"column",gap:8,maxHeight:320,overflowY:"auto",paddingRight:2},openRow:{display:"flex",alignItems:"flex-start",gap:9,padding:"10px 11px",background:"var(--bg)",border:"1px solid var(--border)",borderRadius:10,flexWrap:"wrap"},openBody:{flex:1,minWidth:140},openTop:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"baseline"},openQty:{fontSize:11.5,fontWeight:700,color:"var(--text-3)",flexShrink:0},openMeta:{display:"flex",gap:6,flexWrap:"wrap",marginTop:5,alignItems:"center"},bookBtns:{display:"flex",gap:6,alignItems:"center",flexShrink:0},bookBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",color:"#fff",padding:"6px 11px",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},tradeList:{display:"flex",flexDirection:"column",gap:8},tradeRow:{display:"flex",alignItems:"flex-start",gap:9,padding:"9px 10px",background:"var(--bg)",border:"1px solid var(--border)",borderRadius:10},kindTag:{fontSize:10.5,fontWeight:800,padding:"3px 8px",borderRadius:7,flexShrink:0,marginTop:1},tradeBody:{flex:1,minWidth:0},tradeTop:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"baseline"},tradeInstr:{fontSize:13.5,fontWeight:700,wordBreak:"break-word"},tradePL:{fontSize:13.5,fontWeight:800,flexShrink:0},tradeMeta:{display:"flex",gap:6,flexWrap:"wrap",marginTop:5,alignItems:"center"},metaPill:{fontSize:10.5,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",borderRadius:6,padding:"2px 7px"},tradeNote:{fontSize:11.5,color:"var(--text-3)",fontStyle:"italic"},iconGhost:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",flexShrink:0},noTrades:{fontSize:12.5,color:"var(--text-3)",fontStyle:"italic",textAlign:"center",padding:"16px 8px",border:"1px dashed var(--border)",borderRadius:8},learnArea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"11px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--bg)",outline:"none",minHeight:90,resize:"vertical",lineHeight:1.55,marginTop:8},saveBtn:{display:"inline-flex",alignItems:"center",gap:6,marginTop:10,border:"none",background:Zi,color:"#fff",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},dirBadge:{display:"inline-flex",alignItems:"center",gap:2,fontSize:9.5,fontWeight:800,letterSpacing:"0.03em",color:zt,background:zt+"1A",borderRadius:5,padding:"1px 5px",marginLeft:6,verticalAlign:"middle"},overlay:{position:"fixed",inset:0,background:"rgba(20,18,15,0.55)",backdropFilter:"blur(3px)",zIndex:200,display:"grid",placeItems:"center",padding:16},sheet:{background:"var(--surface)",borderRadius:20,width:"100%",maxWidth:460,maxHeight:"92vh",display:"flex",flexDirection:"column",overflow:"hidden",boxShadow:"0 24px 64px rgba(0,0,0,0.34)",boxSizing:"border-box"},sheetHead:{padding:"16px 18px 18px",color:"#fff"},sheetHeadRow:{display:"flex",justifyContent:"space-between",alignItems:"center"},sheetKicker:{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",opacity:.9},sheetClose:{border:"none",background:"rgba(255,255,255,0.2)",color:"#fff",width:30,height:30,borderRadius:9,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},sheetTitle:{fontSize:22,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:8,wordBreak:"break-word",lineHeight:1.15},sheetChips:{display:"flex",gap:6,flexWrap:"wrap",marginTop:10},sheetChip:{fontSize:11,fontWeight:700,background:"rgba(255,255,255,0.22)",color:"#fff",borderRadius:20,padding:"3px 10px"},sheetBody:{padding:"16px 18px 6px",overflowY:"auto"},sheetFoot:{display:"flex",gap:10,padding:"14px 18px 16px",borderTop:"1px solid var(--border)",background:"var(--surface)"},fLabel:{display:"block",fontSize:11,fontWeight:700,color:"var(--text-2)",margin:"12px 0 5px",textTransform:"uppercase",letterSpacing:"0.05em"},field:{width:"100%",border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:14,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)"},grid2:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},seg:{display:"flex",gap:4,background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:4},segBtn:{flex:1,display:"inline-flex",alignItems:"center",justifyContent:"center",gap:5,border:"none",background:"none",color:"var(--text-2)",padding:"9px 0",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",transition:"background 0.12s"},segBtnOn:{color:"#fff",boxShadow:"0 2px 8px rgba(0,0,0,0.18)"},dirHint:{fontSize:11.5,color:"var(--text-3)",marginTop:7,lineHeight:1.4},preview2:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginTop:14},previewCell:{display:"flex",flexDirection:"column",gap:2,borderRadius:12,padding:"11px 13px"},previewLbl:{fontSize:11,fontWeight:600,color:"var(--text-2)"},previewVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},bookHero:{textAlign:"center",padding:"14px 0 6px"},bookHeroLbl:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em"},bookHeroVal:{display:"block",fontSize:34,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.05},bookHeroMeta:{display:"block",fontSize:11.5,color:"var(--text-3)",marginTop:6},errBanner:{marginTop:14,background:zt+"18",border:`1px solid ${zt}55`,color:zt,borderRadius:10,padding:"10px 12px",fontSize:12.5,fontWeight:600,lineHeight:1.4},rulesHint:{marginTop:14,fontSize:11.5,color:"var(--text-3)",fontWeight:600,lineHeight:1.4},ghostBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"11px 18px",borderRadius:11,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},primaryBtn:{flex:1,display:"inline-flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",color:"#fff",padding:"11px 18px",borderRadius:11,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Cc=[{id:"sandstone",name:"Sandstone",description:"Warm editorial light — the original Anvil look.",dark:!1,swatch:["#F7F6F3","#4C9A6B","#26241F"],vars:{"--bg":"#F7F6F3","--surface":"#FFFFFF","--surface-2":"#FAFAF8","--hover":"#F2F1EC","--border":"#ECEAE3","--text":"#26241F","--text-2":"#6B675E","--text-3":"#9A968C","--accent":"#4C9A6B","--accent-strong":"#26241F","--accent-2":"#3A352C"}},{id:"midnight",name:"Midnight",description:"Deep low-glare dark mode for night owls and focus.",dark:!0,swatch:["#161513","#6FB58C","#ECEAE3"],vars:{"--bg":"#161513","--surface":"#211F1C","--surface-2":"#1B1A17","--hover":"#2B2924","--border":"#34312B","--text":"#ECEAE3","--text-2":"#B6B1A6","--text-3":"#8A857A","--accent":"#6FB58C","--accent-strong":"#2E6F4B","--accent-2":"#245C3E"}},{id:"blossom",name:"Blossom",description:"Soft rose & blush — gentle, warm, and feminine.",dark:!1,swatch:["#FFF5F8","#E0608E","#B23A6B"],vars:{"--bg":"#FFF5F8","--surface":"#FFFFFF","--surface-2":"#FFF0F4","--hover":"#FDE7EE","--border":"#F6D9E2","--text":"#3D2230","--text-2":"#7A5466","--text-3":"#B08799","--accent":"#E0608E","--accent-strong":"#B23A6B","--accent-2":"#9C2F5C"}},{id:"tide",name:"Tide",description:"Calm professional blues — clean and focused.",dark:!1,swatch:["#F1F6FA","#2E86C1","#1C4E73"],vars:{"--bg":"#F1F6FA","--surface":"#FFFFFF","--surface-2":"#ECF3F9","--hover":"#E2EEF6","--border":"#D5E3EE","--text":"#13283A","--text-2":"#4A6275","--text-3":"#8AA0B0","--accent":"#2E86C1","--accent-strong":"#1C4E73","--accent-2":"#163E5C"}},{id:"velocity",name:"Velocity",description:"High-energy sport — crisp slate with electric orange.",dark:!1,swatch:["#F4F5F7","#F4511E","#1F2A37"],vars:{"--bg":"#F4F5F7","--surface":"#FFFFFF","--surface-2":"#EEF0F3","--hover":"#E7EAEE","--border":"#DCE0E6","--text":"#18202B","--text-2":"#515B68","--text-3":"#8B95A1","--accent":"#F4511E","--accent-strong":"#1F2A37","--accent-2":"#16202B"}},{id:"evergreen",name:"Evergreen",description:"Earthy forest greens — grounded and natural.",dark:!1,swatch:["#F2F6F1","#3E8E52","#2A4A30"],vars:{"--bg":"#F2F6F1","--surface":"#FFFFFF","--surface-2":"#ECF2EA","--hover":"#E4EEE2","--border":"#D7E4D3","--text":"#1E2B20","--text-2":"#4F6151","--text-3":"#8AA08C","--accent":"#3E8E52","--accent-strong":"#2A4A30","--accent-2":"#213B26"}},{id:"amethyst",name:"Amethyst",description:"Premium purple & plum — elegant and refined.",dark:!1,swatch:["#F6F4FB","#7A4FE0","#3A2D5C"],vars:{"--bg":"#F6F4FB","--surface":"#FFFFFF","--surface-2":"#F1EDF9","--hover":"#EAE3F6","--border":"#DFD6F0","--text":"#241B36","--text-2":"#5A4E72","--text-3":"#9588AE","--accent":"#7A4FE0","--accent-strong":"#3A2D5C","--accent-2":"#2E2349"}}],Hp="sandstone",Om="anvil_theme",s2=e=>Cc.find(r=>r.id===e)||Cc[0];function Hm(){try{return localStorage.getItem(Om)||Hp}catch{return Hp}}function Mi(e,r=!0){const n=s2(e),o=document.documentElement;Object.entries(n.vars).forEach(([s,l])=>o.style.setProperty(s,l)),o.style.colorScheme=n.dark?"dark":"light",o.setAttribute("data-theme",n.id);const i=document.querySelector('meta[name="theme-color"]');if(i&&i.setAttribute("content",n.vars["--surface"]),r)try{localStorage.setItem(Om,n.id)}catch{}return n.id}const l2=e=>e%10===1&&e!==11?"st":e%10===2&&e!==12?"nd":e%10===3&&e!==13?"rd":"th";function a2(e=560){const[r,n]=c.useState(()=>window.innerWidth<=e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<=e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}function d2({screens:e,order:r,hidden:n,themeId:o,currency:i,monthStartDay:s,ticker:l,defaultScreen:a,onSetDefault:d,onSaveSidebar:g,onPreviewTheme:h,onCommitTheme:f,onSelectCurrency:m,onSelectMonthStartDay:B,onSaveTicker:T,onClose:R}){const[w,p]=c.useState("sidebar"),[b,u]=c.useState(()=>r.map(se=>({id:se,hidden:n.includes(se)}))),[z,v]=c.useState(o),[I,E]=c.useState(""),[S,j]=c.useState(!1),[Y,re]=c.useState(""),[ee,W]=c.useState(!1),[he,we]=c.useState(""),[be,ze]=c.useState(""),[K,U]=c.useState({swing:"",fno:"",intraday:""}),[ce,x]=c.useState(!1),Q=a2(),[O,G]=c.useState(!!(l!=null&&l.enabled)),[N,ge]=c.useState(()=>{const se=Array.isArray(l==null?void 0:l.statements)?l.statements.slice(0,5):[];return se.length?se:[""]}),[de,Me]=c.useState((l==null?void 0:l.speed)??60),[oe,ae]=c.useState((l==null?void 0:l.delay)??3),[P,X]=c.useState(!1),me=(se,We)=>ge(Ze=>Ze.map((rt,gt)=>gt===se?We:rt)),D=()=>ge(se=>se.length<5?[...se,""]:se),y=se=>ge(We=>We.length>1?We.filter((Ze,rt)=>rt!==se):We),te=()=>{const se=N.map(We=>We.trim()).filter(Boolean).slice(0,5);T({enabled:O,statements:se,speed:Number(de),delay:Number(oe)}),X(!0),setTimeout(()=>X(!1),1500)};c.useEffect(()=>{F.getSetting("golden_music").then(se=>E((se==null?void 0:se.value)||"")).catch(()=>{})},[]);const M=()=>{F.setSetting("golden_music",I.trim()).then(()=>{j(!0),setTimeout(()=>j(!1),1500)}).catch(()=>{})};c.useEffect(()=>{F.getSetting("trading_capital").then(se=>re((se==null?void 0:se.value)||"")).catch(()=>{})},[]);const ie=()=>{F.setSetting("trading_capital",String(parseFloat(Y)||0)).then(()=>{W(!0),setTimeout(()=>W(!1),1500)}).catch(()=>{})};c.useEffect(()=>{F.getSetting("trading_risk_pct").then(se=>we((se==null?void 0:se.value)??"")).catch(()=>{}),F.getSetting("trading_rr").then(se=>ze((se==null?void 0:se.value)??"")).catch(()=>{}),F.getSetting("trading_diversification").then(se=>{const We=(se==null?void 0:se.value)||{};U({swing:We.swing??"",fno:We.fno??"",intraday:We.intraday??""})}).catch(()=>{})},[]);const ve=()=>{const se={swing:parseInt(K.swing,10)||0,fno:parseInt(K.fno,10)||0,intraday:parseInt(K.intraday,10)||0};Promise.all([F.setSetting("trading_risk_pct",parseFloat(he)||0),F.setSetting("trading_rr",parseFloat(be)||0),F.setSetting("trading_diversification",se)]).then(()=>{x(!0),setTimeout(()=>x(!1),1500)}).catch(()=>{})},Ae=se=>{v(se),h(se)},qe=b.filter(se=>!se.hidden).length,Ye=(se,We)=>{const Ze=se+We;if(Ze<0||Ze>=b.length)return;const rt=[...b];[rt[se],rt[Ze]]=[rt[Ze],rt[se]],u(rt)},Ke=se=>{const We=b[se];if(!We.hidden&&qe<=1)return;const Ze=[...b];Ze[se]={...We,hidden:!We.hidden},u(Ze)},at=()=>{g(b.map(se=>se.id),b.filter(se=>se.hidden).map(se=>se.id))},Xe=Q?{...ke.overlay,padding:0}:ke.overlay,ft=Q?{...ke.modal,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"100%",borderRadius:0,border:"none"}:ke.modal;return t.jsx("div",{style:Xe,onClick:R,children:t.jsxs("div",{style:ft,onClick:se=>se.stopPropagation(),children:[t.jsxs("div",{style:ke.head,children:[t.jsx("div",{style:ke.title,children:"Settings"}),t.jsx("button",{onClick:R,style:ke.closeBtn,children:t.jsx(Fe,{size:18})})]}),t.jsxs("div",{style:ke.tabs,children:[t.jsxs("button",{onClick:()=>p("sidebar"),style:{...ke.tab,...w==="sidebar"?ke.tabOn:{}},children:[t.jsx(e0,{size:15})," Configure sidebar"]}),t.jsxs("button",{onClick:()=>p("themes"),style:{...ke.tab,...w==="themes"?ke.tabOn:{}},children:[t.jsx(i0,{size:15})," Themes"]}),t.jsxs("button",{onClick:()=>p("currency"),style:{...ke.tab,...w==="currency"?ke.tabOn:{}},children:[t.jsx(Py,{size:15})," Monetary"]}),t.jsxs("button",{onClick:()=>p("music"),style:{...ke.tab,...w==="music"?ke.tabOn:{}},children:[t.jsx(Cg,{size:15})," Music"]}),t.jsxs("button",{onClick:()=>p("reminders"),style:{...ke.tab,...w==="reminders"?ke.tabOn:{}},children:[t.jsx(um,{size:15})," Reminders"]})]}),t.jsx("div",{style:ke.body,children:w==="sidebar"?t.jsxs(t.Fragment,{children:[t.jsxs("p",{style:ke.hint,children:["Reorder with the arrows, hide ones you don't use, and tap ",t.jsx(xs,{size:11,style:{verticalAlign:"-1px"}})," to set the screen that opens on launch."]}),t.jsx("div",{style:ke.list,children:b.map((se,We)=>{const Ze=e[se.id],rt=Ze.icon,gt=a===se.id;return t.jsxs("div",{style:{...ke.row,opacity:se.hidden?.5:1,...gt?{borderColor:"var(--accent)"}:{}},children:[t.jsx("span",{style:ke.rowNum,children:We+1}),t.jsx(rt,{size:16}),t.jsxs("span",{style:ke.rowLabel,children:[Ze.label,gt&&t.jsx("span",{style:ke.defaultTag,children:"default"})]}),t.jsx("button",{onClick:()=>d(se.id),title:gt?"Opens on launch":"Set as default",style:{...ke.iconBtn,...gt?{color:"var(--accent)"}:{}},children:t.jsx(xs,{size:15})}),t.jsx("button",{onClick:()=>Ke(We),title:se.hidden?"Show":"Hide",style:{...ke.iconBtn,...se.hidden?{}:{color:"var(--accent)"}},children:se.hidden?t.jsx(Ql,{size:15}):t.jsx(ms,{size:15})}),t.jsx("button",{onClick:()=>Ye(We,-1),disabled:We===0,style:{...ke.iconBtn,opacity:We===0?.3:1},children:t.jsx(ya,{size:15})}),t.jsx("button",{onClick:()=>Ye(We,1),disabled:We===b.length-1,style:{...ke.iconBtn,opacity:We===b.length-1?.3:1},children:t.jsx(So,{size:15})})]},se.id)})}),t.jsxs("button",{onClick:at,style:ke.saveBtn,children:[t.jsx(Oe,{size:15})," Save sidebar"]})]}):w==="currency"?t.jsxs(t.Fragment,{children:[t.jsx("p",{style:ke.hint,children:"Choose the currency used across Wallet and Worth. Applies instantly."}),t.jsx("div",{style:ke.list,children:hc.map(se=>{const We=se.code===i;return t.jsxs("button",{onClick:()=>m(se.code),style:{...ke.row,cursor:"pointer",textAlign:"left",width:"100%",...We?{borderColor:"var(--accent)"}:{}},children:[t.jsx("span",{style:ke.curSymbol,children:se.symbol}),t.jsxs("span",{style:ke.rowLabel,children:[se.label," ",t.jsx("span",{style:ke.curCode,children:se.code})]}),We&&t.jsx("span",{style:ke.themeCheck,children:t.jsx(Oe,{size:13})})]},se.code)})}),t.jsx("div",{style:ke.subDivider}),t.jsx("div",{style:ke.fieldLbl,children:"Month starts on"}),t.jsx("p",{style:ke.hint,children:'If your salary lands on the 25th, set this to 25 — Wallet and Expenses will treat each "month" as running 25th to 24th instead of calendar month.'}),t.jsx("select",{value:s,onChange:se=>B(Number(se.target.value)),style:ke.musicInput,children:Array.from({length:28},(se,We)=>We+1).map(se=>t.jsx("option",{value:se,children:se===1?"1st (calendar month)":`${se}${l2(se)}`},se))}),t.jsx("div",{style:ke.subDivider}),t.jsx("div",{style:ke.fieldLbl,children:"Trading capital"}),t.jsxs("p",{style:ke.hint,children:["Your starting capital for the ",t.jsx("b",{children:"Trading Journal"}),". The page shows this plus your all-time net P/L — green when in profit, red when below."]}),t.jsx("input",{type:"number",value:Y,onChange:se=>re(se.target.value),placeholder:"e.g. 100000",style:ke.musicInput}),t.jsxs("button",{onClick:ie,style:ke.saveBtn,children:[t.jsx(Oe,{size:15})," ",ee?"Saved":"Save capital"]}),t.jsx("div",{style:ke.subDivider}),t.jsx("div",{style:ke.fieldLbl,children:"Trading discipline rules"}),t.jsx("p",{style:ke.hint,children:"Guardrails enforced when opening a trade. A trade that breaks any rule can't be saved. Leave a field at 0 (or blank) to disable that rule."}),t.jsx("label",{style:ke.miniLbl,children:"Risk per trade (%)"}),t.jsx("p",{style:ke.hint,children:"Max loss on any single trade as a percent of capital. e.g. 2% of 100000 caps loss at 2000 — quantity or SL that risks more is blocked."}),t.jsx("input",{type:"number",step:"0.1",min:"0",value:he,onChange:se=>we(se.target.value),placeholder:"e.g. 2",style:ke.musicInput}),t.jsx("label",{style:ke.miniLbl,children:"Risk : Reward (1 : R)"}),t.jsx("p",{style:ke.hint,children:"Minimum reward multiple of risk. Enter 3 for 1:3 — if SL is 5 below entry, target must be at least 15 above entry."}),t.jsx("input",{type:"number",step:"0.5",min:"0",value:be,onChange:se=>ze(se.target.value),placeholder:"e.g. 3",style:ke.musicInput}),t.jsx("label",{style:ke.miniLbl,children:"Diversification (max open trades per section)"}),t.jsx("p",{style:ke.hint,children:"Limits how many open trades you may hold per section, and caps each position's value at capital ÷ this number (e.g. 5 → max 20000 per trade on 100000 capital)."}),t.jsx("div",{style:ke.divGrid,children:[["swing","Swing"],["fno","FnO"],["intraday","Intraday"]].map(([se,We])=>t.jsxs("div",{style:ke.divCell,children:[t.jsx("span",{style:ke.divLbl,children:We}),t.jsx("input",{type:"number",min:"0",step:"1",value:K[se],onChange:Ze=>U(rt=>({...rt,[se]:Ze.target.value})),placeholder:"0",style:ke.divInput})]},se))}),t.jsxs("button",{onClick:ve,style:ke.saveBtn,children:[t.jsx(Oe,{size:15})," ",ce?"Saved":"Save rules"]})]}):w==="music"?t.jsxs(t.Fragment,{children:[t.jsxs("p",{style:ke.hint,children:["Paste a YouTube link to play softly while you write in the ",t.jsx("b",{children:"Golden Book"}),". It plays only on that screen (audio only)."]}),t.jsx("input",{value:I,onChange:se=>E(se.target.value),placeholder:"https://youtube.com/watch?v=…",style:ke.musicInput}),t.jsxs("button",{onClick:M,style:ke.saveBtn,children:[t.jsx(Oe,{size:15})," ",S?"Saved":"Save music"]})]}):w==="reminders"?t.jsxs(t.Fragment,{children:[t.jsx("p",{style:ke.hint,children:"Up to 5 reminders scroll across the top of every screen — a gentle nudge toward your goals."}),t.jsxs("button",{onClick:()=>G(se=>!se),style:{...ke.row,cursor:"pointer",width:"100%",justifyContent:"space-between",...O?{borderColor:"var(--accent)"}:{}},children:[t.jsx("span",{style:ke.rowLabel,children:"Show reminder banner"}),t.jsx("span",{style:{...ke.switch,...O?ke.switchOn:{}},children:O?"On":"Off"})]}),t.jsxs("div",{style:{marginTop:14},children:[t.jsxs("div",{style:ke.fieldLbl,children:["Reminders (",N.filter(se=>se.trim()).length,"/5)"]}),N.map((se,We)=>t.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[t.jsx("input",{value:se,onChange:Ze=>me(We,Ze.target.value),maxLength:120,placeholder:`Reminder ${We+1}`,style:{...ke.musicInput,marginBottom:0}}),t.jsx("button",{onClick:()=>y(We),style:ke.iconBtn,title:"Remove",children:t.jsx(Fe,{size:15})})]},We)),N.length<5&&t.jsxs("button",{onClick:D,style:ke.addRowBtn,children:[t.jsx(st,{size:14})," Add reminder"]})]}),t.jsxs("div",{style:{marginTop:16},children:[t.jsxs("div",{style:ke.sliderHead,children:[t.jsx("span",{style:ke.fieldLbl,children:"Scroll speed"}),t.jsxs("span",{style:ke.sliderVal,children:[de," px/s"]})]}),t.jsx("input",{type:"range",min:20,max:200,step:5,value:de,onChange:se=>Me(se.target.value),style:ke.range})]}),t.jsxs("div",{style:{marginTop:12},children:[t.jsxs("div",{style:ke.sliderHead,children:[t.jsx("span",{style:ke.fieldLbl,children:"Delay between reminders"}),t.jsxs("span",{style:ke.sliderVal,children:[oe,"s"]})]}),t.jsx("input",{type:"range",min:0,max:15,step:1,value:oe,onChange:se=>ae(se.target.value),style:ke.range})]}),t.jsxs("button",{onClick:te,style:{...ke.saveBtn,marginTop:16},children:[t.jsx(Oe,{size:15})," ",P?"Saved":"Save reminders"]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("p",{style:ke.hint,children:["Tap a theme to preview it live, then hit ",t.jsx("b",{children:"Apply theme"})," to keep it."]}),t.jsx("div",{style:ke.themeGrid,children:Cc.map(se=>{const We=se.id===z;return t.jsxs("button",{onClick:()=>Ae(se.id),style:{...ke.themeCard,...We?ke.themeCardOn:{}},children:[t.jsxs("div",{style:ke.swatchRow,children:[se.swatch.map((Ze,rt)=>t.jsx("span",{style:{...ke.swatch,background:Ze}},rt)),We&&t.jsx("span",{style:ke.themeCheck,children:t.jsx(Oe,{size:13})})]}),t.jsxs("div",{style:ke.themeName,children:[se.name,se.dark?t.jsx("span",{style:ke.darkTag,children:"Dark"}):null]}),t.jsx("div",{style:ke.themeDesc,children:se.description})]},se.id)})}),t.jsxs("button",{onClick:()=>f(z),disabled:z===o,style:{...ke.saveBtn,...z===o?ke.saveBtnDisabled:{}},children:[t.jsx(Oe,{size:15})," ",z===o?"Theme applied":"Apply theme"]})]})})]})})}const ke={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,width:460,maxWidth:"100%",maxHeight:"88vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",overflow:"hidden"},head:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 18px",borderBottom:"1px solid var(--border)",flexShrink:0},title:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},tabs:{display:"flex",flexWrap:"wrap",gap:6,padding:"12px 18px 0",flexShrink:0},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"transparent"},body:{padding:"16px 18px 20px",overflowY:"auto",overflowX:"hidden",flex:1,minHeight:0},hint:{fontSize:12.5,color:"var(--text-3)",lineHeight:1.5,margin:"0 0 14px"},list:{display:"flex",flexDirection:"column",gap:6},row:{display:"flex",alignItems:"center",gap:10,padding:"9px 11px",background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:9},rowNum:{fontSize:11,fontWeight:700,color:"var(--text-3)",width:16,textAlign:"center"},rowLabel:{flex:1,fontSize:13.5,fontWeight:500,display:"flex",alignItems:"center",gap:7},defaultTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"1px 6px",borderRadius:6},curSymbol:{width:22,textAlign:"center",fontSize:15,fontWeight:700,color:"var(--text)"},curCode:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginLeft:4},iconBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},saveBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",marginTop:16,border:"none",background:"var(--accent)",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer"},saveBtnDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"default"},musicInput:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:12},switch:{fontSize:12,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:20,padding:"3px 12px",minWidth:44,textAlign:"center"},switchOn:{background:"var(--accent)",color:"#fff"},fieldLbl:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},miniLbl:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text)",margin:"12px 0 2px"},subDivider:{height:1,background:"var(--border)",margin:"18px 0 14px"},divGrid:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8,marginBottom:12},divCell:{display:"flex",flexDirection:"column",gap:4},divLbl:{fontSize:11,fontWeight:700,color:"var(--text-3)"},divInput:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"8px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},addRowBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},sliderHead:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},sliderVal:{fontSize:12,fontWeight:700,color:"var(--accent)"},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},themeGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},themeCard:{textAlign:"left",border:"2px solid var(--border)",background:"var(--surface-2)",borderRadius:12,padding:12,cursor:"pointer",display:"flex",flexDirection:"column",gap:6,outline:"none",WebkitTapHighlightColor:"transparent",transition:"border-color .15s ease, box-shadow .15s ease"},themeCardOn:{borderColor:"var(--accent)",boxShadow:"0 0 0 3px color-mix(in srgb, var(--accent) 25%, transparent)"},swatchRow:{display:"flex",alignItems:"center",gap:5,position:"relative"},swatch:{width:22,height:22,borderRadius:"50%",border:"1px solid rgba(0,0,0,0.08)"},themeCheck:{marginLeft:"auto",width:20,height:20,borderRadius:"50%",background:"var(--accent)",color:"#fff",display:"grid",placeItems:"center"},themeName:{fontSize:14,fontWeight:700,display:"flex",alignItems:"center",gap:6},darkTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",background:"var(--hover)",color:"var(--text-2)",padding:"1px 6px",borderRadius:6},themeDesc:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4}},c2=`
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
`;function g2({statements:e,speed:r=60,delay:n=3}){const o=c.useMemo(()=>(e||[]).map(d=>(d||"").trim()).filter(Boolean).slice(0,5),[e]),[i,s]=c.useState(0),l=c.useRef(null),a=c.useRef(null);return c.useEffect(()=>{s(0)},[o]),c.useEffect(()=>{if(!o.length)return;const d=l.current,g=a.current;if(!d||!g)return;const h=d.offsetWidth,f=g.offsetWidth,m=Math.max(10,Number(r)||60),B=Math.max(2500,(h+f)/m*1e3),T=g.animate([{transform:`translateX(${h}px)`},{transform:`translateX(${-f}px)`}],{duration:B,easing:"linear",fill:"both"});let R;const w=()=>{R=setTimeout(()=>s(p=>(p+1)%o.length),Math.max(0,Number(n)||0)*1e3)};return T.addEventListener("finish",w),()=>{T.cancel(),T.removeEventListener("finish",w),clearTimeout(R)}},[i,o,r,n]),o.length?t.jsxs("div",{style:Fo.bar,"aria-label":"Reminders",children:[t.jsx("style",{children:c2}),t.jsx("div",{className:"anvil-tick-glow",style:Fo.icon,children:t.jsx("span",{className:"anvil-tick-pulse",style:{display:"grid",placeItems:"center"},children:t.jsx(um,{size:15})})}),t.jsxs("div",{ref:l,style:Fo.viewport,children:[t.jsx("span",{className:"anvil-tick-shimmer",style:Fo.shimmer}),t.jsx("div",{className:"anvil-tick-float",style:Fo.floatWrap,children:t.jsx("div",{ref:a,style:Fo.text,children:o[i%o.length]},i)})]})]}):null}const Fo={bar:{display:"flex",alignItems:"center",height:36,flexShrink:0,overflow:"hidden",borderBottom:"1px solid var(--border)",background:"color-mix(in srgb, var(--accent) 12%, var(--surface))"},icon:{display:"grid",placeItems:"center",width:42,height:"100%",flexShrink:0,color:"#fff",background:"var(--accent)",zIndex:2},viewport:{position:"relative",flex:1,height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},shimmer:{position:"absolute",top:0,bottom:0,left:0,width:"22%",background:"linear-gradient(100deg, transparent, color-mix(in srgb, var(--accent) 22%, transparent), transparent)",pointerEvents:"none",zIndex:1},floatWrap:{display:"inline-flex",alignItems:"center",willChange:"transform"},text:{whiteSpace:"nowrap",fontSize:13.5,fontWeight:700,color:"var(--text)",letterSpacing:"0.01em",willChange:"transform",paddingLeft:4}};Mi(Hm(),!1);const zc="anvil_default_screen",Gp=()=>{try{return localStorage.getItem(zc)}catch{return null}},co={dashboard:{label:"Dashboard",icon:Jy,component:D0},kickstart:{label:"Kickstart",icon:fm,component:m1},golden:{label:"Golden Book",icon:Oy,component:y1},habits:{label:"Habits",icon:gc,component:X0},quadrant:{label:"Quadrant",icon:wg,component:L0},goals:{label:"Goals",icon:Ig,component:U0},grove:{label:"Grove",icon:pc,component:Nv},worth:{label:"Rewards",icon:Xy,component:Kv},vault:{label:"Wallet",icon:ja,component:i1},expenses:{label:"Expenses",icon:Xl,component:G1},trading:{label:"Trading Journal",icon:My,component:o2},journal:{label:"Journal",icon:xa,component:gv},revision:{label:"Revision",icon:xm,component:Sv},affirmations:{label:"Affirmations",icon:Co,component:Tv},skills:{label:"Skills",icon:dm,component:pv},spiritual:{label:"Spiritual",icon:Yi,component:mv},mindscape:{label:"Mindscape",icon:cm,component:I1},achievements:{label:"Achievements",icon:Yr,component:_1},challenges:{label:"Challenges",icon:x0,component:Q1},bucket:{label:"Bucket List",icon:r0,component:Z1},delight:{label:"Delights",icon:zg,component:O1}},Gm=["dashboard","kickstart","golden","habits","quadrant","goals","grove","journal","revision","affirmations","skills","spiritual","mindscape","achievements","challenges","bucket","delight","worth","vault","expenses","trading"];function cl(e){const r=Gm.filter(i=>co[i]),o=[...(Array.isArray(e)?e:[]).filter(i=>co[i])];return r.forEach(i=>{o.includes(i)||o.push(i)}),o}function u2(){const[e,r]=c.useState(()=>window.innerWidth<720);return c.useEffect(()=>{const n=()=>r(window.innerWidth<720);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}function p2(){const[e,r]=c.useState(()=>{const N=Gp();return N&&co[N]?N:"habits"}),[n,o]=c.useState(()=>Gp()||"habits"),[i,s]=c.useState(!1),[l,a]=c.useState(null),[d,g]=c.useState(!1),[h,f]=c.useState(!1),[m,B]=c.useState(Hm()),[T,R]=c.useState(ai()),[w,p]=c.useState(jc()),[b,u]=c.useState({enabled:!1,statements:[],speed:60,delay:3}),[z,v]=c.useState(()=>cl(Gm)),[I,E]=c.useState([]),S=u2(),j=c.useRef(e);c.useEffect(()=>{j.current=e},[e]),c.useEffect(()=>{if(!l)return;const N=10,ge=new Set(["kickstart","mindscape"]),de=setInterval(()=>{const Me=j.current;!document.hidden&&Me&&!ge.has(Me)&&F.addScreenTime(Me,N).catch(()=>{})},N*1e3);return()=>clearInterval(de)},[l]),c.useEffect(()=>{let N=!1;const ge=()=>{bc(),a(null)};window.addEventListener("anvil-unauthorized",ge);const de=new URLSearchParams(window.location.search).get("login");return de&&(T0(de),window.history.replaceState({},"",window.location.pathname)),Sm()?F.me().then(Me=>{N||a(Me)}).catch(()=>{}).finally(()=>{N||g(!0)}):g(!0),()=>{N=!0,window.removeEventListener("anvil-unauthorized",ge)}},[]),c.useEffect(()=>{l&&(F.getSetting("theme").then(N=>{N!=null&&N.value&&B(Mi(N.value))}).catch(()=>{}),F.getSetting("currency").then(N=>{N!=null&&N.value&&R(Gu(N.value))}).catch(()=>{}),F.getSetting("month_start_day").then(N=>{N!=null&&N.value&&p(yp(N.value))}).catch(()=>{}),F.getSetting("ticker").then(N=>{N!=null&&N.value&&u(ge=>({...ge,...N.value}))}).catch(()=>{}),F.getSetting("default_screen").then(N=>{if(N!=null&&N.value&&co[N.value]){o(N.value);try{localStorage.setItem(zc,N.value)}catch{}}}).catch(()=>{}),F.getSetting("sidebar_order").then(N=>{Array.isArray(N==null?void 0:N.value)&&v(cl(N.value))}).catch(()=>{}),F.getSetting("sidebar_hidden").then(N=>{Array.isArray(N==null?void 0:N.value)&&E(N.value)}).catch(()=>{}))},[l]);function Y(N){r(N),s(!1)}const re=()=>{bc(),a(null)},ee=N=>{Mi(N,!1)},W=N=>{B(Mi(N)),F.setSetting("theme",N).catch(()=>{}),f(!1)},he=()=>{Mi(m,!1),f(!1)},we=N=>{R(Gu(N)),F.setSetting("currency",N).catch(()=>{})},be=N=>{p(yp(N)),F.setSetting("month_start_day",Number(N)).catch(()=>{})},ze=N=>{u(N),F.setSetting("ticker",N).catch(()=>{})},K=N=>{o(N);try{localStorage.setItem(zc,N)}catch{}F.setSetting("default_screen",N).catch(()=>{})},U=(N,ge)=>{if(v(cl(N)),E(ge),f(!1),F.setSetting("sidebar_order",N).catch(()=>{}),F.setSetting("sidebar_hidden",ge).catch(()=>{}),ge.includes(e)){const de=cl(N).find(Me=>!ge.includes(Me));de&&r(de)}},ce=z.filter(N=>!I.includes(N));if(!d)return t.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:"'Inter',system-ui,sans-serif",color:"var(--text-3)"},children:"Loading…"});if(!l)return t.jsx(qv,{});const x=co[e],Q=x.component,O=()=>t.jsx("div",{style:mt.navItems,children:ce.map(N=>{const ge=co[N];if(!ge)return null;const de=ge.icon,Me=e===N;return t.jsxs("button",{onClick:()=>Y(N),title:ge.label,style:{...mt.navItem,...Me?mt.navItemOn:{}},children:[t.jsx(de,{size:18}),t.jsx("span",{style:mt.navLabel,children:ge.label})]},N)})}),G=()=>t.jsxs("div",{style:mt.footerWrap,children:[t.jsxs("button",{onClick:()=>f(!0),style:mt.settingsBtn,title:"Settings",children:[t.jsx(vm,{size:17}),t.jsx("span",{children:"Settings"})]}),t.jsxs("div",{style:mt.userFooter,children:[t.jsxs("div",{style:mt.userInfo,children:[t.jsx("div",{style:mt.userAvatar,children:(l.name||l.email||"?").charAt(0).toUpperCase()}),t.jsxs("div",{style:{minWidth:0},children:[t.jsx("div",{style:mt.userName,children:l.name||"You"}),t.jsx("div",{style:mt.userEmail,children:l.email})]})]}),t.jsx("button",{onClick:re,style:mt.logoutBtn,title:"Sign out",children:t.jsx(n0,{size:16})})]})]});return t.jsxs("div",{style:mt.shell,children:[!S&&t.jsxs("nav",{style:mt.nav,children:[t.jsxs("div",{style:mt.brand,children:[t.jsx("div",{style:mt.brandLogo,children:"B"}),t.jsx("span",{style:mt.brandName,children:"Anvil"})]}),t.jsx(O,{}),t.jsx(G,{})]}),S&&i&&t.jsx("div",{style:mt.overlay,onClick:()=>s(!1),children:t.jsxs("nav",{style:mt.drawer,onClick:N=>N.stopPropagation(),children:[t.jsxs("div",{style:mt.drawerHeader,children:[t.jsxs("div",{style:mt.brand,children:[t.jsx("div",{style:mt.brandLogo,children:"B"}),t.jsx("span",{style:mt.brandName,children:"Anvil"})]}),t.jsx("button",{style:mt.closeBtn,onClick:()=>s(!1),children:t.jsx(Fe,{size:20})})]}),t.jsx("div",{style:mt.drawerNav,children:t.jsx(O,{})}),t.jsx(G,{})]})}),t.jsxs("div",{style:mt.content,children:[S&&t.jsxs("div",{style:mt.topBar,children:[t.jsx("button",{style:mt.menuBtn,onClick:()=>s(!0),children:t.jsx(Sg,{size:22})}),t.jsx("span",{style:mt.topBarTitle,children:x.label}),t.jsx("div",{style:{width:38}})]}),b.enabled&&t.jsx(g2,{statements:b.statements,speed:b.speed,delay:b.delay}),t.jsx("main",{style:mt.main,children:t.jsx(Q,{onNavigate:Y})})]}),h&&t.jsx(d2,{screens:co,order:z,hidden:I,themeId:m,currency:T,monthStartDay:w,ticker:b,defaultScreen:n,onSetDefault:K,onSaveSidebar:U,onPreviewTheme:ee,onCommitTheme:W,onSelectCurrency:we,onSelectMonthStartDay:be,onSaveTicker:ze,onClose:he})]})}const mt={shell:{display:"flex",height:"100vh",overflow:"hidden",fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)"},nav:{width:200,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column",padding:"20px 10px",gap:2,overflowY:"auto",overflowX:"hidden"},brand:{display:"flex",alignItems:"center",gap:9,padding:"6px 10px 20px",borderBottom:"1px solid var(--border)",marginBottom:8},brandLogo:{width:30,height:30,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:14,fontWeight:800,fontFamily:"'Fraunces', Georgia, serif",flexShrink:0},brandName:{fontSize:16,fontWeight:700,letterSpacing:"-0.01em",color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},navItems:{display:"flex",flexDirection:"column",gap:2},navItem:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},navItemOn:{background:"var(--hover)",color:"var(--text)",fontWeight:700},footerWrap:{marginTop:"auto",paddingTop:8,flexShrink:0},settingsBtn:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},userFooter:{marginTop:4,paddingTop:12,borderTop:"1px solid var(--border)",display:"flex",alignItems:"center",gap:8},userInfo:{display:"flex",alignItems:"center",gap:8,flex:1,minWidth:0},userAvatar:{width:30,height:30,borderRadius:"50%",background:"#8268B0",color:"#fff",display:"grid",placeItems:"center",fontSize:13,fontWeight:700,flexShrink:0},userName:{fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},userEmail:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logoutBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",padding:7,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},navLabel:{flex:1},content:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},main:{flex:1,overflowY:"auto",overflowX:"hidden"},topBar:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"var(--surface)",borderBottom:"1px solid var(--border)",flexShrink:0},topBarTitle:{fontSize:16,fontWeight:700,color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},menuBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text)",padding:8,borderRadius:8,display:"grid",placeItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:100,display:"flex"},drawer:{width:220,background:"var(--surface)",height:"100%",display:"flex",flexDirection:"column",padding:"16px 10px",gap:2,boxShadow:"4px 0 24px rgba(0,0,0,0.12)",overflow:"hidden"},drawerNav:{flex:1,minHeight:0,overflowY:"auto",overflowX:"hidden"},drawerHeader:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:4,flexShrink:0},closeBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",padding:6,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0}};nm(document.getElementById("root")).render(t.jsx(c.StrictMode,{children:t.jsx(p2,{})}));
