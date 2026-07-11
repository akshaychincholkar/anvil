(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Vp={exports:{}},na={},Yp={exports:{}},lt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ks=Symbol.for("react.element"),Vh=Symbol.for("react.portal"),Yh=Symbol.for("react.fragment"),Kh=Symbol.for("react.strict_mode"),Qh=Symbol.for("react.profiler"),qh=Symbol.for("react.provider"),Xh=Symbol.for("react.context"),Zh=Symbol.for("react.forward_ref"),Jh=Symbol.for("react.suspense"),ef=Symbol.for("react.memo"),tf=Symbol.for("react.lazy"),Ag=Symbol.iterator;function rf(e){return e===null||typeof e!="object"?null:(e=Ag&&e[Ag]||e["@@iterator"],typeof e=="function"?e:null)}var Kp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qp=Object.assign,qp={};function ci(e,r,n){this.props=e,this.context=r,this.refs=qp,this.updater=n||Kp}ci.prototype.isReactComponent={};ci.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")};ci.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xp(){}Xp.prototype=ci.prototype;function Tc(e,r,n){this.props=e,this.context=r,this.refs=qp,this.updater=n||Kp}var Ic=Tc.prototype=new Xp;Ic.constructor=Tc;Qp(Ic,ci.prototype);Ic.isPureReactComponent=!0;var Dg=Array.isArray,Zp=Object.prototype.hasOwnProperty,Bc={current:null},Jp={key:!0,ref:!0,__self:!0,__source:!0};function eb(e,r,n){var o,i={},s=null,l=null;if(r!=null)for(o in r.ref!==void 0&&(l=r.ref),r.key!==void 0&&(s=""+r.key),r)Zp.call(r,o)&&!Jp.hasOwnProperty(o)&&(i[o]=r[o]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var d=Array(a),g=0;g<a;g++)d[g]=arguments[g+2];i.children=d}if(e&&e.defaultProps)for(o in a=e.defaultProps,a)i[o]===void 0&&(i[o]=a[o]);return{$$typeof:ks,type:e,key:s,ref:l,props:i,_owner:Bc.current}}function nf(e,r){return{$$typeof:ks,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function Rc(e){return typeof e=="object"&&e!==null&&e.$$typeof===ks}function of(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return r[n]})}var Wg=/\/+/g;function Ca(e,r){return typeof e=="object"&&e!==null&&e.key!=null?of(""+e.key):r.toString(36)}function gl(e,r,n,o,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ks:case Vh:l=!0}}if(l)return l=e,i=i(l),e=o===""?"."+Ca(l,0):o,Dg(i)?(n="",e!=null&&(n=e.replace(Wg,"$&/")+"/"),gl(i,r,n,"",function(g){return g})):i!=null&&(Rc(i)&&(i=nf(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Wg,"$&/")+"/")+e)),r.push(i)),1;if(l=0,o=o===""?".":o+":",Dg(e))for(var a=0;a<e.length;a++){s=e[a];var d=o+Ca(s,a);l+=gl(s,r,n,d,i)}else if(d=rf(e),typeof d=="function")for(e=d.call(e),a=0;!(s=e.next()).done;)s=s.value,d=o+Ca(s,a++),l+=gl(s,r,n,d,i);else if(s==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return l}function Ts(e,r,n){if(e==null)return e;var o=[],i=0;return gl(e,o,"","",function(s){return r.call(n,s,i++)}),o}function sf(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var nr={current:null},ul={transition:null},lf={ReactCurrentDispatcher:nr,ReactCurrentBatchConfig:ul,ReactCurrentOwner:Bc};function tb(){throw Error("act(...) is not supported in production builds of React.")}lt.Children={map:Ts,forEach:function(e,r,n){Ts(e,function(){r.apply(this,arguments)},n)},count:function(e){var r=0;return Ts(e,function(){r++}),r},toArray:function(e){return Ts(e,function(r){return r})||[]},only:function(e){if(!Rc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};lt.Component=ci;lt.Fragment=Yh;lt.Profiler=Qh;lt.PureComponent=Tc;lt.StrictMode=Kh;lt.Suspense=Jh;lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lf;lt.act=tb;lt.cloneElement=function(e,r,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=Qp({},e.props),i=e.key,s=e.ref,l=e._owner;if(r!=null){if(r.ref!==void 0&&(s=r.ref,l=Bc.current),r.key!==void 0&&(i=""+r.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(d in r)Zp.call(r,d)&&!Jp.hasOwnProperty(d)&&(o[d]=r[d]===void 0&&a!==void 0?a[d]:r[d])}var d=arguments.length-2;if(d===1)o.children=n;else if(1<d){a=Array(d);for(var g=0;g<d;g++)a[g]=arguments[g+2];o.children=a}return{$$typeof:ks,type:e.type,key:i,ref:s,props:o,_owner:l}};lt.createContext=function(e){return e={$$typeof:Xh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qh,_context:e},e.Consumer=e};lt.createElement=eb;lt.createFactory=function(e){var r=eb.bind(null,e);return r.type=e,r};lt.createRef=function(){return{current:null}};lt.forwardRef=function(e){return{$$typeof:Zh,render:e}};lt.isValidElement=Rc;lt.lazy=function(e){return{$$typeof:tf,_payload:{_status:-1,_result:e},_init:sf}};lt.memo=function(e,r){return{$$typeof:ef,type:e,compare:r===void 0?null:r}};lt.startTransition=function(e){var r=ul.transition;ul.transition={};try{e()}finally{ul.transition=r}};lt.unstable_act=tb;lt.useCallback=function(e,r){return nr.current.useCallback(e,r)};lt.useContext=function(e){return nr.current.useContext(e)};lt.useDebugValue=function(){};lt.useDeferredValue=function(e){return nr.current.useDeferredValue(e)};lt.useEffect=function(e,r){return nr.current.useEffect(e,r)};lt.useId=function(){return nr.current.useId()};lt.useImperativeHandle=function(e,r,n){return nr.current.useImperativeHandle(e,r,n)};lt.useInsertionEffect=function(e,r){return nr.current.useInsertionEffect(e,r)};lt.useLayoutEffect=function(e,r){return nr.current.useLayoutEffect(e,r)};lt.useMemo=function(e,r){return nr.current.useMemo(e,r)};lt.useReducer=function(e,r,n){return nr.current.useReducer(e,r,n)};lt.useRef=function(e){return nr.current.useRef(e)};lt.useState=function(e){return nr.current.useState(e)};lt.useSyncExternalStore=function(e,r,n){return nr.current.useSyncExternalStore(e,r,n)};lt.useTransition=function(){return nr.current.useTransition()};lt.version="18.3.1";Yp.exports=lt;var c=Yp.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var af=c,df=Symbol.for("react.element"),cf=Symbol.for("react.fragment"),gf=Object.prototype.hasOwnProperty,uf=af.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pf={key:!0,ref:!0,__self:!0,__source:!0};function rb(e,r,n){var o,i={},s=null,l=null;n!==void 0&&(s=""+n),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(l=r.ref);for(o in r)gf.call(r,o)&&!pf.hasOwnProperty(o)&&(i[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps,r)i[o]===void 0&&(i[o]=r[o]);return{$$typeof:df,type:e,key:s,ref:l,props:i,_owner:uf.current}}na.Fragment=cf;na.jsx=rb;na.jsxs=rb;Vp.exports=na;var t=Vp.exports,nb={exports:{}},kr={},ob={exports:{}},ib={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function r(re,U){var de=re.length;re.push(U);e:for(;0<de;){var X=de-1>>>1,I=re[X];if(0<i(I,U))re[X]=U,re[de]=I,de=X;else break e}}function n(re){return re.length===0?null:re[0]}function o(re){if(re.length===0)return null;var U=re[0],de=re.pop();if(de!==U){re[0]=de;e:for(var X=0,I=re.length,A=I>>>1;X<A;){var P=2*(X+1)-1,$=re[P],ae=P+1,ce=re[ae];if(0>i($,de))ae<I&&0>i(ce,$)?(re[X]=ce,re[ae]=de,X=ae):(re[X]=$,re[P]=de,X=P);else if(ae<I&&0>i(ce,de))re[X]=ce,re[ae]=de,X=ae;else break e}}return U}function i(re,U){var de=re.sortIndex-U.sortIndex;return de!==0?de:re.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var d=[],g=[],m=1,f=null,h=3,B=!1,R=!1,z=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function u(re){for(var U=n(g);U!==null;){if(U.callback===null)o(g);else if(U.startTime<=re)o(g),U.sortIndex=U.expirationTime,r(d,U);else break;U=n(g)}}function k(re){if(z=!1,u(re),!R)if(n(d)!==null)R=!0,pe(x);else{var U=n(g);U!==null&&ze(k,U.startTime-re)}}function x(re,U){R=!1,z&&(z=!1,p(w),w=-1),B=!0;var de=h;try{for(u(U),f=n(d);f!==null&&(!(f.expirationTime>U)||re&&!q());){var X=f.callback;if(typeof X=="function"){f.callback=null,h=f.priorityLevel;var I=X(f.expirationTime<=U);U=e.unstable_now(),typeof I=="function"?f.callback=I:f===n(d)&&o(d),u(U)}else o(d);f=n(d)}if(f!==null)var A=!0;else{var P=n(g);P!==null&&ze(k,P.startTime-U),A=!1}return A}finally{f=null,h=de,B=!1}}var T=!1,E=null,w=-1,j=5,Y=-1;function q(){return!(e.unstable_now()-Y<j)}function te(){if(E!==null){var re=e.unstable_now();Y=re;var U=!0;try{U=E(!0,re)}finally{U?he():(T=!1,E=null)}}else T=!1}var he;if(typeof b=="function")he=function(){b(te)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,ue=G.port2;G.port1.onmessage=te,he=function(){ue.postMessage(null)}}else he=function(){S(te,0)};function pe(re){E=re,T||(T=!0,he())}function ze(re,U){w=S(function(){re(e.unstable_now())},U)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(re){re.callback=null},e.unstable_continueExecution=function(){R||B||(R=!0,pe(x))},e.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<re?Math.floor(1e3/re):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(re){switch(h){case 1:case 2:case 3:var U=3;break;default:U=h}var de=h;h=U;try{return re()}finally{h=de}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(re,U){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var de=h;h=re;try{return U()}finally{h=de}},e.unstable_scheduleCallback=function(re,U,de){var X=e.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?X+de:X):de=X,re){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=de+I,re={id:m++,callback:U,priorityLevel:re,startTime:de,expirationTime:I,sortIndex:-1},de>X?(re.sortIndex=de,r(g,re),n(d)===null&&re===n(g)&&(z?(p(w),w=-1):z=!0,ze(k,de-X))):(re.sortIndex=I,r(d,re),R||B||(R=!0,pe(x))),re},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(re){var U=h;return function(){var de=h;h=U;try{return re.apply(this,arguments)}finally{h=de}}}})(ib);ob.exports=ib;var bf=ob.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf=c,jr=bf;function Ce(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sb=new Set,Ji={};function ko(e,r){ti(e,r),ti(e+"Capture",r)}function ti(e,r){for(Ji[e]=r,e=0;e<r.length;e++)sb.add(r[e])}var fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fd=Object.prototype.hasOwnProperty,hf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mg={},Lg={};function ff(e){return fd.call(Lg,e)?!0:fd.call(Mg,e)?!1:hf.test(e)?Lg[e]=!0:(Mg[e]=!0,!1)}function xf(e,r,n,o){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function yf(e,r,n,o){if(r===null||typeof r>"u"||xf(e,r,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function or(e,r,n,o,i,s,l){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=s,this.removeEmptyString=l}var Kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Kt[e]=new or(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];Kt[r]=new or(r,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Kt[e]=new or(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Kt[e]=new or(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Kt[e]=new or(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Kt[e]=new or(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Kt[e]=new or(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Kt[e]=new or(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Kt[e]=new or(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ec=/[\-:]([a-z])/g;function Fc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(Ec,Fc);Kt[r]=new or(r,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(Ec,Fc);Kt[r]=new or(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(Ec,Fc);Kt[r]=new or(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Kt[e]=new or(e,1,!1,e.toLowerCase(),null,!1,!1)});Kt.xlinkHref=new or("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Kt[e]=new or(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ac(e,r,n,o){var i=Kt.hasOwnProperty(r)?Kt[r]:null;(i!==null?i.type!==0:o||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(yf(r,n,i,o)&&(n=null),o||i===null?ff(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(r=i.attributeName,o=i.attributeNamespace,n===null?e.removeAttribute(r):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,o?e.setAttributeNS(o,r,n):e.setAttribute(r,n))))}var wn=mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Is=Symbol.for("react.element"),Mo=Symbol.for("react.portal"),Lo=Symbol.for("react.fragment"),Dc=Symbol.for("react.strict_mode"),xd=Symbol.for("react.profiler"),lb=Symbol.for("react.provider"),ab=Symbol.for("react.context"),Wc=Symbol.for("react.forward_ref"),yd=Symbol.for("react.suspense"),vd=Symbol.for("react.suspense_list"),Mc=Symbol.for("react.memo"),Fn=Symbol.for("react.lazy"),db=Symbol.for("react.offscreen"),_g=Symbol.iterator;function fi(e){return e===null||typeof e!="object"?null:(e=_g&&e[_g]||e["@@iterator"],typeof e=="function"?e:null)}var Et=Object.assign,za;function Ii(e){if(za===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);za=r&&r[1]||""}return`
`+za+e}var Ta=!1;function Ia(e,r){if(!e||Ta)return"";Ta=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(g){var o=g}Reflect.construct(e,[],r)}else{try{r.call()}catch(g){o=g}e.call(r.prototype)}else{try{throw Error()}catch(g){o=g}e()}}catch(g){if(g&&o&&typeof g.stack=="string"){for(var i=g.stack.split(`
`),s=o.stack.split(`
`),l=i.length-1,a=s.length-1;1<=l&&0<=a&&i[l]!==s[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==s[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==s[a]){var d=`
`+i[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=a);break}}}finally{Ta=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ii(e):""}function vf(e){switch(e.tag){case 5:return Ii(e.type);case 16:return Ii("Lazy");case 13:return Ii("Suspense");case 19:return Ii("SuspenseList");case 0:case 2:case 15:return e=Ia(e.type,!1),e;case 11:return e=Ia(e.type.render,!1),e;case 1:return e=Ia(e.type,!0),e;default:return""}}function jd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Lo:return"Fragment";case Mo:return"Portal";case xd:return"Profiler";case Dc:return"StrictMode";case yd:return"Suspense";case vd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ab:return(e.displayName||"Context")+".Consumer";case lb:return(e._context.displayName||"Context")+".Provider";case Wc:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Mc:return r=e.displayName||null,r!==null?r:jd(e.type)||"Memo";case Fn:r=e._payload,e=e._init;try{return jd(e(r))}catch{}}return null}function jf(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jd(r);case 8:return r===Dc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Kn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cb(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function kf(e){var r=cb(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),o=""+e[r];if(!e.hasOwnProperty(r)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return i.call(this)},set:function(l){o=""+l,s.call(this,l)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Bs(e){e._valueTracker||(e._valueTracker=kf(e))}function gb(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),o="";return e&&(o=cb(e)?e.checked?"true":"false":e.value),e=o,e!==n?(r.setValue(e),!0):!1}function Cl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kd(e,r){var n=r.checked;return Et({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $g(e,r){var n=r.defaultValue==null?"":r.defaultValue,o=r.checked!=null?r.checked:r.defaultChecked;n=Kn(r.value!=null?r.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ub(e,r){r=r.checked,r!=null&&Ac(e,"checked",r,!1)}function wd(e,r){ub(e,r);var n=Kn(r.value),o=r.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Sd(e,r.type,n):r.hasOwnProperty("defaultValue")&&Sd(e,r.type,Kn(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function Pg(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var o=r.type;if(!(o!=="submit"&&o!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Sd(e,r,n){(r!=="number"||Cl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Bi=Array.isArray;function Ko(e,r,n,o){if(e=e.options,r){r={};for(var i=0;i<n.length;i++)r["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=r.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Kn(n),r=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}r!==null||e[i].disabled||(r=e[i])}r!==null&&(r.selected=!0)}}function Cd(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(Ce(91));return Et({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ng(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(Ce(92));if(Bi(n)){if(1<n.length)throw Error(Ce(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:Kn(n)}}function pb(e,r){var n=Kn(r.value),o=Kn(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function Og(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function bb(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zd(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?bb(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Rs,mb=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,n,o,i){MSApp.execUnsafeLocalFunction(function(){return e(r,n,o,i)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(Rs=Rs||document.createElement("div"),Rs.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Rs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function es(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var Li={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wf=["Webkit","ms","Moz","O"];Object.keys(Li).forEach(function(e){wf.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),Li[r]=Li[e]})});function hb(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||Li.hasOwnProperty(e)&&Li[e]?(""+r).trim():r+"px"}function fb(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var o=n.indexOf("--")===0,i=hb(n,r[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,i):e[n]=i}}var Sf=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Td(e,r){if(r){if(Sf[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(Ce(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(Ce(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(Ce(61))}if(r.style!=null&&typeof r.style!="object")throw Error(Ce(62))}}function Id(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bd=null;function Lc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rd=null,Qo=null,qo=null;function Hg(e){if(e=Cs(e)){if(typeof Rd!="function")throw Error(Ce(280));var r=e.stateNode;r&&(r=aa(r),Rd(e.stateNode,e.type,r))}}function xb(e){Qo?qo?qo.push(e):qo=[e]:Qo=e}function yb(){if(Qo){var e=Qo,r=qo;if(qo=Qo=null,Hg(e),r)for(e=0;e<r.length;e++)Hg(r[e])}}function vb(e,r){return e(r)}function jb(){}var Ba=!1;function kb(e,r,n){if(Ba)return e(r,n);Ba=!0;try{return vb(e,r,n)}finally{Ba=!1,(Qo!==null||qo!==null)&&(jb(),yb())}}function ts(e,r){var n=e.stateNode;if(n===null)return null;var o=aa(n);if(o===null)return null;n=o[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Ce(231,r,typeof n));return n}var Ed=!1;if(fn)try{var xi={};Object.defineProperty(xi,"passive",{get:function(){Ed=!0}}),window.addEventListener("test",xi,xi),window.removeEventListener("test",xi,xi)}catch{Ed=!1}function Cf(e,r,n,o,i,s,l,a,d){var g=Array.prototype.slice.call(arguments,3);try{r.apply(n,g)}catch(m){this.onError(m)}}var _i=!1,zl=null,Tl=!1,Fd=null,zf={onError:function(e){_i=!0,zl=e}};function Tf(e,r,n,o,i,s,l,a,d){_i=!1,zl=null,Cf.apply(zf,arguments)}function If(e,r,n,o,i,s,l,a,d){if(Tf.apply(this,arguments),_i){if(_i){var g=zl;_i=!1,zl=null}else throw Error(Ce(198));Tl||(Tl=!0,Fd=g)}}function wo(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,r.flags&4098&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function wb(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function Gg(e){if(wo(e)!==e)throw Error(Ce(188))}function Bf(e){var r=e.alternate;if(!r){if(r=wo(e),r===null)throw Error(Ce(188));return r!==e?null:e}for(var n=e,o=r;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(o=i.return,o!==null){n=o;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Gg(i),e;if(s===o)return Gg(i),r;s=s.sibling}throw Error(Ce(188))}if(n.return!==o.return)n=i,o=s;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,o=s;break}if(a===o){l=!0,o=i,n=s;break}a=a.sibling}if(!l){for(a=s.child;a;){if(a===n){l=!0,n=s,o=i;break}if(a===o){l=!0,o=s,n=i;break}a=a.sibling}if(!l)throw Error(Ce(189))}}if(n.alternate!==o)throw Error(Ce(190))}if(n.tag!==3)throw Error(Ce(188));return n.stateNode.current===n?e:r}function Sb(e){return e=Bf(e),e!==null?Cb(e):null}function Cb(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=Cb(e);if(r!==null)return r;e=e.sibling}return null}var zb=jr.unstable_scheduleCallback,Ug=jr.unstable_cancelCallback,Rf=jr.unstable_shouldYield,Ef=jr.unstable_requestPaint,Dt=jr.unstable_now,Ff=jr.unstable_getCurrentPriorityLevel,_c=jr.unstable_ImmediatePriority,Tb=jr.unstable_UserBlockingPriority,Il=jr.unstable_NormalPriority,Af=jr.unstable_LowPriority,Ib=jr.unstable_IdlePriority,oa=null,en=null;function Df(e){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(oa,e,void 0,(e.current.flags&128)===128)}catch{}}var Gr=Math.clz32?Math.clz32:Lf,Wf=Math.log,Mf=Math.LN2;function Lf(e){return e>>>=0,e===0?32:31-(Wf(e)/Mf|0)|0}var Es=64,Fs=4194304;function Ri(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bl(e,r){var n=e.pendingLanes;if(n===0)return 0;var o=0,i=e.suspendedLanes,s=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?o=Ri(a):(s&=l,s!==0&&(o=Ri(s)))}else l=n&~i,l!==0?o=Ri(l):s!==0&&(o=Ri(s));if(o===0)return 0;if(r!==0&&r!==o&&!(r&i)&&(i=o&-o,s=r&-r,i>=s||i===16&&(s&4194240)!==0))return r;if(o&4&&(o|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=o;0<r;)n=31-Gr(r),i=1<<n,o|=e[n],r&=~i;return o}function _f(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $f(e,r){for(var n=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-Gr(s),a=1<<l,d=i[l];d===-1?(!(a&n)||a&o)&&(i[l]=_f(a,r)):d<=r&&(e.expiredLanes|=a),s&=~a}}function Ad(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bb(){var e=Es;return Es<<=1,!(Es&4194240)&&(Es=64),e}function Ra(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function ws(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Gr(r),e[r]=n}function Pf(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Gr(n),s=1<<i;r[i]=0,o[i]=-1,e[i]=-1,n&=~s}}function $c(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var o=31-Gr(n),i=1<<o;i&r|e[o]&r&&(e[o]|=r),n&=~i}}var xt=0;function Rb(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Eb,Pc,Fb,Ab,Db,Dd=!1,As=[],$n=null,Pn=null,Nn=null,rs=new Map,ns=new Map,Dn=[],Nf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vg(e,r){switch(e){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":rs.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ns.delete(r.pointerId)}}function yi(e,r,n,o,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:r,domEventName:n,eventSystemFlags:o,nativeEvent:s,targetContainers:[i]},r!==null&&(r=Cs(r),r!==null&&Pc(r)),e):(e.eventSystemFlags|=o,r=e.targetContainers,i!==null&&r.indexOf(i)===-1&&r.push(i),e)}function Of(e,r,n,o,i){switch(r){case"focusin":return $n=yi($n,e,r,n,o,i),!0;case"dragenter":return Pn=yi(Pn,e,r,n,o,i),!0;case"mouseover":return Nn=yi(Nn,e,r,n,o,i),!0;case"pointerover":var s=i.pointerId;return rs.set(s,yi(rs.get(s)||null,e,r,n,o,i)),!0;case"gotpointercapture":return s=i.pointerId,ns.set(s,yi(ns.get(s)||null,e,r,n,o,i)),!0}return!1}function Wb(e){var r=go(e.target);if(r!==null){var n=wo(r);if(n!==null){if(r=n.tag,r===13){if(r=wb(n),r!==null){e.blockedOn=r,Db(e.priority,function(){Fb(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pl(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=Wd(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Bd=o,n.target.dispatchEvent(o),Bd=null}else return r=Cs(n),r!==null&&Pc(r),e.blockedOn=n,!1;r.shift()}return!0}function Yg(e,r,n){pl(e)&&n.delete(r)}function Hf(){Dd=!1,$n!==null&&pl($n)&&($n=null),Pn!==null&&pl(Pn)&&(Pn=null),Nn!==null&&pl(Nn)&&(Nn=null),rs.forEach(Yg),ns.forEach(Yg)}function vi(e,r){e.blockedOn===r&&(e.blockedOn=null,Dd||(Dd=!0,jr.unstable_scheduleCallback(jr.unstable_NormalPriority,Hf)))}function os(e){function r(i){return vi(i,e)}if(0<As.length){vi(As[0],e);for(var n=1;n<As.length;n++){var o=As[n];o.blockedOn===e&&(o.blockedOn=null)}}for($n!==null&&vi($n,e),Pn!==null&&vi(Pn,e),Nn!==null&&vi(Nn,e),rs.forEach(r),ns.forEach(r),n=0;n<Dn.length;n++)o=Dn[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Dn.length&&(n=Dn[0],n.blockedOn===null);)Wb(n),n.blockedOn===null&&Dn.shift()}var Xo=wn.ReactCurrentBatchConfig,Rl=!0;function Gf(e,r,n,o){var i=xt,s=Xo.transition;Xo.transition=null;try{xt=1,Nc(e,r,n,o)}finally{xt=i,Xo.transition=s}}function Uf(e,r,n,o){var i=xt,s=Xo.transition;Xo.transition=null;try{xt=4,Nc(e,r,n,o)}finally{xt=i,Xo.transition=s}}function Nc(e,r,n,o){if(Rl){var i=Wd(e,r,n,o);if(i===null)Pa(e,r,o,El,n),Vg(e,o);else if(Of(i,e,r,n,o))o.stopPropagation();else if(Vg(e,o),r&4&&-1<Nf.indexOf(e)){for(;i!==null;){var s=Cs(i);if(s!==null&&Eb(s),s=Wd(e,r,n,o),s===null&&Pa(e,r,o,El,n),s===i)break;i=s}i!==null&&o.stopPropagation()}else Pa(e,r,o,null,n)}}var El=null;function Wd(e,r,n,o){if(El=null,e=Lc(o),e=go(e),e!==null)if(r=wo(e),r===null)e=null;else if(n=r.tag,n===13){if(e=wb(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return El=e,null}function Mb(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ff()){case _c:return 1;case Tb:return 4;case Il:case Af:return 16;case Ib:return 536870912;default:return 16}default:return 16}}var Ln=null,Oc=null,bl=null;function Lb(){if(bl)return bl;var e,r=Oc,n=r.length,o,i="value"in Ln?Ln.value:Ln.textContent,s=i.length;for(e=0;e<n&&r[e]===i[e];e++);var l=n-e;for(o=1;o<=l&&r[n-o]===i[s-o];o++);return bl=i.slice(e,1<o?1-o:void 0)}function ml(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Ds(){return!0}function Kg(){return!1}function wr(e){function r(n,o,i,s,l){this._reactName=n,this._targetInst=i,this.type=o,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ds:Kg,this.isPropagationStopped=Kg,this}return Et(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ds)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ds)},persist:function(){},isPersistent:Ds}),r}var gi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hc=wr(gi),Ss=Et({},gi,{view:0,detail:0}),Vf=wr(Ss),Ea,Fa,ji,ia=Et({},Ss,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ji&&(ji&&e.type==="mousemove"?(Ea=e.screenX-ji.screenX,Fa=e.screenY-ji.screenY):Fa=Ea=0,ji=e),Ea)},movementY:function(e){return"movementY"in e?e.movementY:Fa}}),Qg=wr(ia),Yf=Et({},ia,{dataTransfer:0}),Kf=wr(Yf),Qf=Et({},Ss,{relatedTarget:0}),Aa=wr(Qf),qf=Et({},gi,{animationName:0,elapsedTime:0,pseudoElement:0}),Xf=wr(qf),Zf=Et({},gi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jf=wr(Zf),ex=Et({},gi,{data:0}),qg=wr(ex),tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ox(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=nx[e])?!!r[e]:!1}function Gc(){return ox}var ix=Et({},Ss,{key:function(e){if(e.key){var r=tx[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=ml(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gc,charCode:function(e){return e.type==="keypress"?ml(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ml(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sx=wr(ix),lx=Et({},ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xg=wr(lx),ax=Et({},Ss,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gc}),dx=wr(ax),cx=Et({},gi,{propertyName:0,elapsedTime:0,pseudoElement:0}),gx=wr(cx),ux=Et({},ia,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),px=wr(ux),bx=[9,13,27,32],Uc=fn&&"CompositionEvent"in window,$i=null;fn&&"documentMode"in document&&($i=document.documentMode);var mx=fn&&"TextEvent"in window&&!$i,_b=fn&&(!Uc||$i&&8<$i&&11>=$i),Zg=" ",Jg=!1;function $b(e,r){switch(e){case"keyup":return bx.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pb(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _o=!1;function hx(e,r){switch(e){case"compositionend":return Pb(r);case"keypress":return r.which!==32?null:(Jg=!0,Zg);case"textInput":return e=r.data,e===Zg&&Jg?null:e;default:return null}}function fx(e,r){if(_o)return e==="compositionend"||!Uc&&$b(e,r)?(e=Lb(),bl=Oc=Ln=null,_o=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return _b&&r.locale!=="ko"?null:r.data;default:return null}}var xx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eu(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!xx[e.type]:r==="textarea"}function Nb(e,r,n,o){xb(o),r=Fl(r,"onChange"),0<r.length&&(n=new Hc("onChange","change",null,n,o),e.push({event:n,listeners:r}))}var Pi=null,is=null;function yx(e){Zb(e,0)}function sa(e){var r=No(e);if(gb(r))return e}function vx(e,r){if(e==="change")return r}var Ob=!1;if(fn){var Da;if(fn){var Wa="oninput"in document;if(!Wa){var tu=document.createElement("div");tu.setAttribute("oninput","return;"),Wa=typeof tu.oninput=="function"}Da=Wa}else Da=!1;Ob=Da&&(!document.documentMode||9<document.documentMode)}function ru(){Pi&&(Pi.detachEvent("onpropertychange",Hb),is=Pi=null)}function Hb(e){if(e.propertyName==="value"&&sa(is)){var r=[];Nb(r,is,e,Lc(e)),kb(yx,r)}}function jx(e,r,n){e==="focusin"?(ru(),Pi=r,is=n,Pi.attachEvent("onpropertychange",Hb)):e==="focusout"&&ru()}function kx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sa(is)}function wx(e,r){if(e==="click")return sa(r)}function Sx(e,r){if(e==="input"||e==="change")return sa(r)}function Cx(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Vr=typeof Object.is=="function"?Object.is:Cx;function ss(e,r){if(Vr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),o=Object.keys(r);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var i=n[o];if(!fd.call(r,i)||!Vr(e[i],r[i]))return!1}return!0}function nu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ou(e,r){var n=nu(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=r&&o>=r)return{node:n,offset:r-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nu(n)}}function Gb(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Gb(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function Ub(){for(var e=window,r=Cl();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=Cl(e.document)}return r}function Vc(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function zx(e){var r=Ub(),n=e.focusedElem,o=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&Gb(n.ownerDocument.documentElement,n)){if(o!==null&&Vc(n)){if(r=o.start,e=o.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(o.start,i);o=o.end===void 0?s:Math.min(o.end,i),!e.extend&&s>o&&(i=o,o=s,s=i),i=ou(n,s);var l=ou(n,o);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(r=r.createRange(),r.setStart(i.node,i.offset),e.removeAllRanges(),s>o?(e.addRange(r),e.extend(l.node,l.offset)):(r.setEnd(l.node,l.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tx=fn&&"documentMode"in document&&11>=document.documentMode,$o=null,Md=null,Ni=null,Ld=!1;function iu(e,r,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ld||$o==null||$o!==Cl(o)||(o=$o,"selectionStart"in o&&Vc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ni&&ss(Ni,o)||(Ni=o,o=Fl(Md,"onSelect"),0<o.length&&(r=new Hc("onSelect","select",null,r,n),e.push({event:r,listeners:o}),r.target=$o)))}function Ws(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var Po={animationend:Ws("Animation","AnimationEnd"),animationiteration:Ws("Animation","AnimationIteration"),animationstart:Ws("Animation","AnimationStart"),transitionend:Ws("Transition","TransitionEnd")},Ma={},Vb={};fn&&(Vb=document.createElement("div").style,"AnimationEvent"in window||(delete Po.animationend.animation,delete Po.animationiteration.animation,delete Po.animationstart.animation),"TransitionEvent"in window||delete Po.transitionend.transition);function la(e){if(Ma[e])return Ma[e];if(!Po[e])return e;var r=Po[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in Vb)return Ma[e]=r[n];return e}var Yb=la("animationend"),Kb=la("animationiteration"),Qb=la("animationstart"),qb=la("transitionend"),Xb=new Map,su="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qn(e,r){Xb.set(e,r),ko(r,[e])}for(var La=0;La<su.length;La++){var _a=su[La],Ix=_a.toLowerCase(),Bx=_a[0].toUpperCase()+_a.slice(1);qn(Ix,"on"+Bx)}qn(Yb,"onAnimationEnd");qn(Kb,"onAnimationIteration");qn(Qb,"onAnimationStart");qn("dblclick","onDoubleClick");qn("focusin","onFocus");qn("focusout","onBlur");qn(qb,"onTransitionEnd");ti("onMouseEnter",["mouseout","mouseover"]);ti("onMouseLeave",["mouseout","mouseover"]);ti("onPointerEnter",["pointerout","pointerover"]);ti("onPointerLeave",["pointerout","pointerover"]);ko("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ko("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ko("onBeforeInput",["compositionend","keypress","textInput","paste"]);ko("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ko("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ko("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ei));function lu(e,r,n){var o=e.type||"unknown-event";e.currentTarget=n,If(o,r,void 0,e),e.currentTarget=null}function Zb(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],i=o.event;o=o.listeners;e:{var s=void 0;if(r)for(var l=o.length-1;0<=l;l--){var a=o[l],d=a.instance,g=a.currentTarget;if(a=a.listener,d!==s&&i.isPropagationStopped())break e;lu(i,a,g),s=d}else for(l=0;l<o.length;l++){if(a=o[l],d=a.instance,g=a.currentTarget,a=a.listener,d!==s&&i.isPropagationStopped())break e;lu(i,a,g),s=d}}}if(Tl)throw e=Fd,Tl=!1,Fd=null,e}function St(e,r){var n=r[Od];n===void 0&&(n=r[Od]=new Set);var o=e+"__bubble";n.has(o)||(Jb(r,e,2,!1),n.add(o))}function $a(e,r,n){var o=0;r&&(o|=4),Jb(n,e,o,r)}var Ms="_reactListening"+Math.random().toString(36).slice(2);function ls(e){if(!e[Ms]){e[Ms]=!0,sb.forEach(function(n){n!=="selectionchange"&&(Rx.has(n)||$a(n,!1,e),$a(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Ms]||(r[Ms]=!0,$a("selectionchange",!1,r))}}function Jb(e,r,n,o){switch(Mb(r)){case 1:var i=Gf;break;case 4:i=Uf;break;default:i=Nc}n=i.bind(null,r,n,e),i=void 0,!Ed||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(r,n,{capture:!0,passive:i}):e.addEventListener(r,n,!0):i!==void 0?e.addEventListener(r,n,{passive:i}):e.addEventListener(r,n,!1)}function Pa(e,r,n,o,i){var s=o;if(!(r&1)&&!(r&2)&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var a=o.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=o.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;l=l.return}for(;a!==null;){if(l=go(a),l===null)return;if(d=l.tag,d===5||d===6){o=s=l;continue e}a=a.parentNode}}o=o.return}kb(function(){var g=s,m=Lc(n),f=[];e:{var h=Xb.get(e);if(h!==void 0){var B=Hc,R=e;switch(e){case"keypress":if(ml(n)===0)break e;case"keydown":case"keyup":B=sx;break;case"focusin":R="focus",B=Aa;break;case"focusout":R="blur",B=Aa;break;case"beforeblur":case"afterblur":B=Aa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Qg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Kf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=dx;break;case Yb:case Kb:case Qb:B=Xf;break;case qb:B=gx;break;case"scroll":B=Vf;break;case"wheel":B=px;break;case"copy":case"cut":case"paste":B=Jf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Xg}var z=(r&4)!==0,S=!z&&e==="scroll",p=z?h!==null?h+"Capture":null:h;z=[];for(var b=g,u;b!==null;){u=b;var k=u.stateNode;if(u.tag===5&&k!==null&&(u=k,p!==null&&(k=ts(b,p),k!=null&&z.push(as(b,k,u)))),S)break;b=b.return}0<z.length&&(h=new B(h,R,null,n,m),f.push({event:h,listeners:z}))}}if(!(r&7)){e:{if(h=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",h&&n!==Bd&&(R=n.relatedTarget||n.fromElement)&&(go(R)||R[xn]))break e;if((B||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,B?(R=n.relatedTarget||n.toElement,B=g,R=R?go(R):null,R!==null&&(S=wo(R),R!==S||R.tag!==5&&R.tag!==6)&&(R=null)):(B=null,R=g),B!==R)){if(z=Qg,k="onMouseLeave",p="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(z=Xg,k="onPointerLeave",p="onPointerEnter",b="pointer"),S=B==null?h:No(B),u=R==null?h:No(R),h=new z(k,b+"leave",B,n,m),h.target=S,h.relatedTarget=u,k=null,go(m)===g&&(z=new z(p,b+"enter",R,n,m),z.target=u,z.relatedTarget=S,k=z),S=k,B&&R)t:{for(z=B,p=R,b=0,u=z;u;u=zo(u))b++;for(u=0,k=p;k;k=zo(k))u++;for(;0<b-u;)z=zo(z),b--;for(;0<u-b;)p=zo(p),u--;for(;b--;){if(z===p||p!==null&&z===p.alternate)break t;z=zo(z),p=zo(p)}z=null}else z=null;B!==null&&au(f,h,B,z,!1),R!==null&&S!==null&&au(f,S,R,z,!0)}}e:{if(h=g?No(g):window,B=h.nodeName&&h.nodeName.toLowerCase(),B==="select"||B==="input"&&h.type==="file")var x=vx;else if(eu(h))if(Ob)x=Sx;else{x=kx;var T=jx}else(B=h.nodeName)&&B.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(x=wx);if(x&&(x=x(e,g))){Nb(f,x,n,m);break e}T&&T(e,h,g),e==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Sd(h,"number",h.value)}switch(T=g?No(g):window,e){case"focusin":(eu(T)||T.contentEditable==="true")&&($o=T,Md=g,Ni=null);break;case"focusout":Ni=Md=$o=null;break;case"mousedown":Ld=!0;break;case"contextmenu":case"mouseup":case"dragend":Ld=!1,iu(f,n,m);break;case"selectionchange":if(Tx)break;case"keydown":case"keyup":iu(f,n,m)}var E;if(Uc)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else _o?$b(e,n)&&(w="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(_b&&n.locale!=="ko"&&(_o||w!=="onCompositionStart"?w==="onCompositionEnd"&&_o&&(E=Lb()):(Ln=m,Oc="value"in Ln?Ln.value:Ln.textContent,_o=!0)),T=Fl(g,w),0<T.length&&(w=new qg(w,e,null,n,m),f.push({event:w,listeners:T}),E?w.data=E:(E=Pb(n),E!==null&&(w.data=E)))),(E=mx?hx(e,n):fx(e,n))&&(g=Fl(g,"onBeforeInput"),0<g.length&&(m=new qg("onBeforeInput","beforeinput",null,n,m),f.push({event:m,listeners:g}),m.data=E))}Zb(f,r)})}function as(e,r,n){return{instance:e,listener:r,currentTarget:n}}function Fl(e,r){for(var n=r+"Capture",o=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ts(e,n),s!=null&&o.unshift(as(e,s,i)),s=ts(e,r),s!=null&&o.push(as(e,s,i))),e=e.return}return o}function zo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function au(e,r,n,o,i){for(var s=r._reactName,l=[];n!==null&&n!==o;){var a=n,d=a.alternate,g=a.stateNode;if(d!==null&&d===o)break;a.tag===5&&g!==null&&(a=g,i?(d=ts(n,s),d!=null&&l.unshift(as(n,d,a))):i||(d=ts(n,s),d!=null&&l.push(as(n,d,a)))),n=n.return}l.length!==0&&e.push({event:r,listeners:l})}var Ex=/\r\n?/g,Fx=/\u0000|\uFFFD/g;function du(e){return(typeof e=="string"?e:""+e).replace(Ex,`
`).replace(Fx,"")}function Ls(e,r,n){if(r=du(r),du(e)!==r&&n)throw Error(Ce(425))}function Al(){}var _d=null,$d=null;function Pd(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Nd=typeof setTimeout=="function"?setTimeout:void 0,Ax=typeof clearTimeout=="function"?clearTimeout:void 0,cu=typeof Promise=="function"?Promise:void 0,Dx=typeof queueMicrotask=="function"?queueMicrotask:typeof cu<"u"?function(e){return cu.resolve(null).then(e).catch(Wx)}:Nd;function Wx(e){setTimeout(function(){throw e})}function Na(e,r){var n=r,o=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(o===0){e.removeChild(i),os(r);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=i}while(n);os(r)}function On(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function gu(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var ui=Math.random().toString(36).slice(2),Jr="__reactFiber$"+ui,ds="__reactProps$"+ui,xn="__reactContainer$"+ui,Od="__reactEvents$"+ui,Mx="__reactListeners$"+ui,Lx="__reactHandles$"+ui;function go(e){var r=e[Jr];if(r)return r;for(var n=e.parentNode;n;){if(r=n[xn]||n[Jr]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=gu(e);e!==null;){if(n=e[Jr])return n;e=gu(e)}return r}e=n,n=e.parentNode}return null}function Cs(e){return e=e[Jr]||e[xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function No(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Ce(33))}function aa(e){return e[ds]||null}var Hd=[],Oo=-1;function Xn(e){return{current:e}}function Ct(e){0>Oo||(e.current=Hd[Oo],Hd[Oo]=null,Oo--)}function kt(e,r){Oo++,Hd[Oo]=e.current,e.current=r}var Qn={},Jt=Xn(Qn),dr=Xn(!1),fo=Qn;function ri(e,r){var n=e.type.contextTypes;if(!n)return Qn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===r)return o.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=r[s];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),i}function cr(e){return e=e.childContextTypes,e!=null}function Dl(){Ct(dr),Ct(Jt)}function uu(e,r,n){if(Jt.current!==Qn)throw Error(Ce(168));kt(Jt,r),kt(dr,n)}function em(e,r,n){var o=e.stateNode;if(r=r.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var i in o)if(!(i in r))throw Error(Ce(108,jf(e)||"Unknown",i));return Et({},n,o)}function Wl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qn,fo=Jt.current,kt(Jt,e),kt(dr,dr.current),!0}function pu(e,r,n){var o=e.stateNode;if(!o)throw Error(Ce(169));n?(e=em(e,r,fo),o.__reactInternalMemoizedMergedChildContext=e,Ct(dr),Ct(Jt),kt(Jt,e)):Ct(dr),kt(dr,n)}var un=null,da=!1,Oa=!1;function tm(e){un===null?un=[e]:un.push(e)}function _x(e){da=!0,tm(e)}function Zn(){if(!Oa&&un!==null){Oa=!0;var e=0,r=xt;try{var n=un;for(xt=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}un=null,da=!1}catch(i){throw un!==null&&(un=un.slice(e+1)),zb(_c,Zn),i}finally{xt=r,Oa=!1}}return null}var Ho=[],Go=0,Ml=null,Ll=0,Er=[],Fr=0,xo=null,bn=1,mn="";function so(e,r){Ho[Go++]=Ll,Ho[Go++]=Ml,Ml=e,Ll=r}function rm(e,r,n){Er[Fr++]=bn,Er[Fr++]=mn,Er[Fr++]=xo,xo=e;var o=bn;e=mn;var i=32-Gr(o)-1;o&=~(1<<i),n+=1;var s=32-Gr(r)+i;if(30<s){var l=i-i%5;s=(o&(1<<l)-1).toString(32),o>>=l,i-=l,bn=1<<32-Gr(r)+i|n<<i|o,mn=s+e}else bn=1<<s|n<<i|o,mn=e}function Yc(e){e.return!==null&&(so(e,1),rm(e,1,0))}function Kc(e){for(;e===Ml;)Ml=Ho[--Go],Ho[Go]=null,Ll=Ho[--Go],Ho[Go]=null;for(;e===xo;)xo=Er[--Fr],Er[Fr]=null,mn=Er[--Fr],Er[Fr]=null,bn=Er[--Fr],Er[Fr]=null}var vr=null,yr=null,It=!1,Hr=null;function nm(e,r){var n=Ar(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function bu(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,vr=e,yr=On(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,vr=e,yr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=xo!==null?{id:bn,overflow:mn}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=Ar(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,vr=e,yr=null,!0):!1;default:return!1}}function Gd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ud(e){if(It){var r=yr;if(r){var n=r;if(!bu(e,r)){if(Gd(e))throw Error(Ce(418));r=On(n.nextSibling);var o=vr;r&&bu(e,r)?nm(o,n):(e.flags=e.flags&-4097|2,It=!1,vr=e)}}else{if(Gd(e))throw Error(Ce(418));e.flags=e.flags&-4097|2,It=!1,vr=e}}}function mu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vr=e}function _s(e){if(e!==vr)return!1;if(!It)return mu(e),It=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Pd(e.type,e.memoizedProps)),r&&(r=yr)){if(Gd(e))throw om(),Error(Ce(418));for(;r;)nm(e,r),r=On(r.nextSibling)}if(mu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Ce(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){yr=On(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}yr=null}}else yr=vr?On(e.stateNode.nextSibling):null;return!0}function om(){for(var e=yr;e;)e=On(e.nextSibling)}function ni(){yr=vr=null,It=!1}function Qc(e){Hr===null?Hr=[e]:Hr.push(e)}var $x=wn.ReactCurrentBatchConfig;function ki(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Ce(309));var o=n.stateNode}if(!o)throw Error(Ce(147,e));var i=o,s=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===s?r.ref:(r=function(l){var a=i.refs;l===null?delete a[s]:a[s]=l},r._stringRef=s,r)}if(typeof e!="string")throw Error(Ce(284));if(!n._owner)throw Error(Ce(290,e))}return e}function $s(e,r){throw e=Object.prototype.toString.call(r),Error(Ce(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function hu(e){var r=e._init;return r(e._payload)}function im(e){function r(p,b){if(e){var u=p.deletions;u===null?(p.deletions=[b],p.flags|=16):u.push(b)}}function n(p,b){if(!e)return null;for(;b!==null;)r(p,b),b=b.sibling;return null}function o(p,b){for(p=new Map;b!==null;)b.key!==null?p.set(b.key,b):p.set(b.index,b),b=b.sibling;return p}function i(p,b){return p=Vn(p,b),p.index=0,p.sibling=null,p}function s(p,b,u){return p.index=u,e?(u=p.alternate,u!==null?(u=u.index,u<b?(p.flags|=2,b):u):(p.flags|=2,b)):(p.flags|=1048576,b)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,b,u,k){return b===null||b.tag!==6?(b=Qa(u,p.mode,k),b.return=p,b):(b=i(b,u),b.return=p,b)}function d(p,b,u,k){var x=u.type;return x===Lo?m(p,b,u.props.children,k,u.key):b!==null&&(b.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Fn&&hu(x)===b.type)?(k=i(b,u.props),k.ref=ki(p,b,u),k.return=p,k):(k=kl(u.type,u.key,u.props,null,p.mode,k),k.ref=ki(p,b,u),k.return=p,k)}function g(p,b,u,k){return b===null||b.tag!==4||b.stateNode.containerInfo!==u.containerInfo||b.stateNode.implementation!==u.implementation?(b=qa(u,p.mode,k),b.return=p,b):(b=i(b,u.children||[]),b.return=p,b)}function m(p,b,u,k,x){return b===null||b.tag!==7?(b=ho(u,p.mode,k,x),b.return=p,b):(b=i(b,u),b.return=p,b)}function f(p,b,u){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Qa(""+b,p.mode,u),b.return=p,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Is:return u=kl(b.type,b.key,b.props,null,p.mode,u),u.ref=ki(p,null,b),u.return=p,u;case Mo:return b=qa(b,p.mode,u),b.return=p,b;case Fn:var k=b._init;return f(p,k(b._payload),u)}if(Bi(b)||fi(b))return b=ho(b,p.mode,u,null),b.return=p,b;$s(p,b)}return null}function h(p,b,u,k){var x=b!==null?b.key:null;if(typeof u=="string"&&u!==""||typeof u=="number")return x!==null?null:a(p,b,""+u,k);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Is:return u.key===x?d(p,b,u,k):null;case Mo:return u.key===x?g(p,b,u,k):null;case Fn:return x=u._init,h(p,b,x(u._payload),k)}if(Bi(u)||fi(u))return x!==null?null:m(p,b,u,k,null);$s(p,u)}return null}function B(p,b,u,k,x){if(typeof k=="string"&&k!==""||typeof k=="number")return p=p.get(u)||null,a(b,p,""+k,x);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Is:return p=p.get(k.key===null?u:k.key)||null,d(b,p,k,x);case Mo:return p=p.get(k.key===null?u:k.key)||null,g(b,p,k,x);case Fn:var T=k._init;return B(p,b,u,T(k._payload),x)}if(Bi(k)||fi(k))return p=p.get(u)||null,m(b,p,k,x,null);$s(b,k)}return null}function R(p,b,u,k){for(var x=null,T=null,E=b,w=b=0,j=null;E!==null&&w<u.length;w++){E.index>w?(j=E,E=null):j=E.sibling;var Y=h(p,E,u[w],k);if(Y===null){E===null&&(E=j);break}e&&E&&Y.alternate===null&&r(p,E),b=s(Y,b,w),T===null?x=Y:T.sibling=Y,T=Y,E=j}if(w===u.length)return n(p,E),It&&so(p,w),x;if(E===null){for(;w<u.length;w++)E=f(p,u[w],k),E!==null&&(b=s(E,b,w),T===null?x=E:T.sibling=E,T=E);return It&&so(p,w),x}for(E=o(p,E);w<u.length;w++)j=B(E,p,w,u[w],k),j!==null&&(e&&j.alternate!==null&&E.delete(j.key===null?w:j.key),b=s(j,b,w),T===null?x=j:T.sibling=j,T=j);return e&&E.forEach(function(q){return r(p,q)}),It&&so(p,w),x}function z(p,b,u,k){var x=fi(u);if(typeof x!="function")throw Error(Ce(150));if(u=x.call(u),u==null)throw Error(Ce(151));for(var T=x=null,E=b,w=b=0,j=null,Y=u.next();E!==null&&!Y.done;w++,Y=u.next()){E.index>w?(j=E,E=null):j=E.sibling;var q=h(p,E,Y.value,k);if(q===null){E===null&&(E=j);break}e&&E&&q.alternate===null&&r(p,E),b=s(q,b,w),T===null?x=q:T.sibling=q,T=q,E=j}if(Y.done)return n(p,E),It&&so(p,w),x;if(E===null){for(;!Y.done;w++,Y=u.next())Y=f(p,Y.value,k),Y!==null&&(b=s(Y,b,w),T===null?x=Y:T.sibling=Y,T=Y);return It&&so(p,w),x}for(E=o(p,E);!Y.done;w++,Y=u.next())Y=B(E,p,w,Y.value,k),Y!==null&&(e&&Y.alternate!==null&&E.delete(Y.key===null?w:Y.key),b=s(Y,b,w),T===null?x=Y:T.sibling=Y,T=Y);return e&&E.forEach(function(te){return r(p,te)}),It&&so(p,w),x}function S(p,b,u,k){if(typeof u=="object"&&u!==null&&u.type===Lo&&u.key===null&&(u=u.props.children),typeof u=="object"&&u!==null){switch(u.$$typeof){case Is:e:{for(var x=u.key,T=b;T!==null;){if(T.key===x){if(x=u.type,x===Lo){if(T.tag===7){n(p,T.sibling),b=i(T,u.props.children),b.return=p,p=b;break e}}else if(T.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Fn&&hu(x)===T.type){n(p,T.sibling),b=i(T,u.props),b.ref=ki(p,T,u),b.return=p,p=b;break e}n(p,T);break}else r(p,T);T=T.sibling}u.type===Lo?(b=ho(u.props.children,p.mode,k,u.key),b.return=p,p=b):(k=kl(u.type,u.key,u.props,null,p.mode,k),k.ref=ki(p,b,u),k.return=p,p=k)}return l(p);case Mo:e:{for(T=u.key;b!==null;){if(b.key===T)if(b.tag===4&&b.stateNode.containerInfo===u.containerInfo&&b.stateNode.implementation===u.implementation){n(p,b.sibling),b=i(b,u.children||[]),b.return=p,p=b;break e}else{n(p,b);break}else r(p,b);b=b.sibling}b=qa(u,p.mode,k),b.return=p,p=b}return l(p);case Fn:return T=u._init,S(p,b,T(u._payload),k)}if(Bi(u))return R(p,b,u,k);if(fi(u))return z(p,b,u,k);$s(p,u)}return typeof u=="string"&&u!==""||typeof u=="number"?(u=""+u,b!==null&&b.tag===6?(n(p,b.sibling),b=i(b,u),b.return=p,p=b):(n(p,b),b=Qa(u,p.mode,k),b.return=p,p=b),l(p)):n(p,b)}return S}var oi=im(!0),sm=im(!1),_l=Xn(null),$l=null,Uo=null,qc=null;function Xc(){qc=Uo=$l=null}function Zc(e){var r=_l.current;Ct(_l),e._currentValue=r}function Vd(e,r,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,o!==null&&(o.childLanes|=r)):o!==null&&(o.childLanes&r)!==r&&(o.childLanes|=r),e===n)break;e=e.return}}function Zo(e,r){$l=e,qc=Uo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&r&&(ar=!0),e.firstContext=null)}function Wr(e){var r=e._currentValue;if(qc!==e)if(e={context:e,memoizedValue:r,next:null},Uo===null){if($l===null)throw Error(Ce(308));Uo=e,$l.dependencies={lanes:0,firstContext:e}}else Uo=Uo.next=e;return r}var uo=null;function Jc(e){uo===null?uo=[e]:uo.push(e)}function lm(e,r,n,o){var i=r.interleaved;return i===null?(n.next=n,Jc(r)):(n.next=i.next,i.next=n),r.interleaved=n,yn(e,o)}function yn(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var An=!1;function eg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function am(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function hn(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function Hn(e,r,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,ut&2){var i=o.pending;return i===null?r.next=r:(r.next=i.next,i.next=r),o.pending=r,yn(e,n)}return i=o.interleaved,i===null?(r.next=r,Jc(o)):(r.next=i.next,i.next=r),o.interleaved=r,yn(e,n)}function hl(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var o=r.lanes;o&=e.pendingLanes,n|=o,r.lanes=n,$c(e,n)}}function fu(e,r){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?i=s=r:s=s.next=r}else i=s=r;n={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function Pl(e,r,n,o){var i=e.updateQueue;An=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var d=a,g=d.next;d.next=null,l===null?s=g:l.next=g,l=d;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==l&&(a===null?m.firstBaseUpdate=g:a.next=g,m.lastBaseUpdate=d))}if(s!==null){var f=i.baseState;l=0,m=g=d=null,a=s;do{var h=a.lane,B=a.eventTime;if((o&h)===h){m!==null&&(m=m.next={eventTime:B,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var R=e,z=a;switch(h=r,B=n,z.tag){case 1:if(R=z.payload,typeof R=="function"){f=R.call(B,f,h);break e}f=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=z.payload,h=typeof R=="function"?R.call(B,f,h):R,h==null)break e;f=Et({},f,h);break e;case 2:An=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else B={eventTime:B,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(g=m=B,d=f):m=m.next=B,l|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(m===null&&(d=f),i.baseState=d,i.firstBaseUpdate=g,i.lastBaseUpdate=m,r=i.shared.interleaved,r!==null){i=r;do l|=i.lane,i=i.next;while(i!==r)}else s===null&&(i.shared.lanes=0);vo|=l,e.lanes=l,e.memoizedState=f}}function xu(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var o=e[r],i=o.callback;if(i!==null){if(o.callback=null,o=n,typeof i!="function")throw Error(Ce(191,i));i.call(o)}}}var zs={},tn=Xn(zs),cs=Xn(zs),gs=Xn(zs);function po(e){if(e===zs)throw Error(Ce(174));return e}function tg(e,r){switch(kt(gs,r),kt(cs,e),kt(tn,zs),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:zd(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=zd(r,e)}Ct(tn),kt(tn,r)}function ii(){Ct(tn),Ct(cs),Ct(gs)}function dm(e){po(gs.current);var r=po(tn.current),n=zd(r,e.type);r!==n&&(kt(cs,e),kt(tn,n))}function rg(e){cs.current===e&&(Ct(tn),Ct(cs))}var Bt=Xn(0);function Nl(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ha=[];function ng(){for(var e=0;e<Ha.length;e++)Ha[e]._workInProgressVersionPrimary=null;Ha.length=0}var fl=wn.ReactCurrentDispatcher,Ga=wn.ReactCurrentBatchConfig,yo=0,Rt=null,_t=null,Ht=null,Ol=!1,Oi=!1,us=0,Px=0;function Qt(){throw Error(Ce(321))}function og(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!Vr(e[n],r[n]))return!1;return!0}function ig(e,r,n,o,i,s){if(yo=s,Rt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,fl.current=e===null||e.memoizedState===null?Gx:Ux,e=n(o,i),Oi){s=0;do{if(Oi=!1,us=0,25<=s)throw Error(Ce(301));s+=1,Ht=_t=null,r.updateQueue=null,fl.current=Vx,e=n(o,i)}while(Oi)}if(fl.current=Hl,r=_t!==null&&_t.next!==null,yo=0,Ht=_t=Rt=null,Ol=!1,r)throw Error(Ce(300));return e}function sg(){var e=us!==0;return us=0,e}function qr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?Rt.memoizedState=Ht=e:Ht=Ht.next=e,Ht}function Mr(){if(_t===null){var e=Rt.alternate;e=e!==null?e.memoizedState:null}else e=_t.next;var r=Ht===null?Rt.memoizedState:Ht.next;if(r!==null)Ht=r,_t=e;else{if(e===null)throw Error(Ce(310));_t=e,e={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},Ht===null?Rt.memoizedState=Ht=e:Ht=Ht.next=e}return Ht}function ps(e,r){return typeof r=="function"?r(e):r}function Ua(e){var r=Mr(),n=r.queue;if(n===null)throw Error(Ce(311));n.lastRenderedReducer=e;var o=_t,i=o.baseQueue,s=n.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}o.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,o=o.baseState;var a=l=null,d=null,g=s;do{var m=g.lane;if((yo&m)===m)d!==null&&(d=d.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),o=g.hasEagerState?g.eagerState:e(o,g.action);else{var f={lane:m,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};d===null?(a=d=f,l=o):d=d.next=f,Rt.lanes|=m,vo|=m}g=g.next}while(g!==null&&g!==s);d===null?l=o:d.next=a,Vr(o,r.memoizedState)||(ar=!0),r.memoizedState=o,r.baseState=l,r.baseQueue=d,n.lastRenderedState=o}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Rt.lanes|=s,vo|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function Va(e){var r=Mr(),n=r.queue;if(n===null)throw Error(Ce(311));n.lastRenderedReducer=e;var o=n.dispatch,i=n.pending,s=r.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do s=e(s,l.action),l=l.next;while(l!==i);Vr(s,r.memoizedState)||(ar=!0),r.memoizedState=s,r.baseQueue===null&&(r.baseState=s),n.lastRenderedState=s}return[s,o]}function cm(){}function gm(e,r){var n=Rt,o=Mr(),i=r(),s=!Vr(o.memoizedState,i);if(s&&(o.memoizedState=i,ar=!0),o=o.queue,lg(bm.bind(null,n,o,e),[e]),o.getSnapshot!==r||s||Ht!==null&&Ht.memoizedState.tag&1){if(n.flags|=2048,bs(9,pm.bind(null,n,o,i,r),void 0,null),Gt===null)throw Error(Ce(349));yo&30||um(n,r,i)}return i}function um(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=Rt.updateQueue,r===null?(r={lastEffect:null,stores:null},Rt.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function pm(e,r,n,o){r.value=n,r.getSnapshot=o,mm(r)&&hm(e)}function bm(e,r,n){return n(function(){mm(r)&&hm(e)})}function mm(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!Vr(e,n)}catch{return!0}}function hm(e){var r=yn(e,1);r!==null&&Ur(r,e,1,-1)}function yu(e){var r=qr();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ps,lastRenderedState:e},r.queue=e,e=e.dispatch=Hx.bind(null,Rt,e),[r.memoizedState,e]}function bs(e,r,n,o){return e={tag:e,create:r,destroy:n,deps:o,next:null},r=Rt.updateQueue,r===null?(r={lastEffect:null,stores:null},Rt.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,r.lastEffect=e)),e}function fm(){return Mr().memoizedState}function xl(e,r,n,o){var i=qr();Rt.flags|=e,i.memoizedState=bs(1|r,n,void 0,o===void 0?null:o)}function ca(e,r,n,o){var i=Mr();o=o===void 0?null:o;var s=void 0;if(_t!==null){var l=_t.memoizedState;if(s=l.destroy,o!==null&&og(o,l.deps)){i.memoizedState=bs(r,n,s,o);return}}Rt.flags|=e,i.memoizedState=bs(1|r,n,s,o)}function vu(e,r){return xl(8390656,8,e,r)}function lg(e,r){return ca(2048,8,e,r)}function xm(e,r){return ca(4,2,e,r)}function ym(e,r){return ca(4,4,e,r)}function vm(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function jm(e,r,n){return n=n!=null?n.concat([e]):null,ca(4,4,vm.bind(null,r,e),n)}function ag(){}function km(e,r){var n=Mr();r=r===void 0?null:r;var o=n.memoizedState;return o!==null&&r!==null&&og(r,o[1])?o[0]:(n.memoizedState=[e,r],e)}function wm(e,r){var n=Mr();r=r===void 0?null:r;var o=n.memoizedState;return o!==null&&r!==null&&og(r,o[1])?o[0]:(e=e(),n.memoizedState=[e,r],e)}function Sm(e,r,n){return yo&21?(Vr(n,r)||(n=Bb(),Rt.lanes|=n,vo|=n,e.baseState=!0),r):(e.baseState&&(e.baseState=!1,ar=!0),e.memoizedState=n)}function Nx(e,r){var n=xt;xt=n!==0&&4>n?n:4,e(!0);var o=Ga.transition;Ga.transition={};try{e(!1),r()}finally{xt=n,Ga.transition=o}}function Cm(){return Mr().memoizedState}function Ox(e,r,n){var o=Un(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},zm(e))Tm(r,n);else if(n=lm(e,r,n,o),n!==null){var i=rr();Ur(n,e,o,i),Im(n,r,o)}}function Hx(e,r,n){var o=Un(e),i={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(zm(e))Tm(r,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=r.lastRenderedReducer,s!==null))try{var l=r.lastRenderedState,a=s(l,n);if(i.hasEagerState=!0,i.eagerState=a,Vr(a,l)){var d=r.interleaved;d===null?(i.next=i,Jc(r)):(i.next=d.next,d.next=i),r.interleaved=i;return}}catch{}finally{}n=lm(e,r,i,o),n!==null&&(i=rr(),Ur(n,e,o,i),Im(n,r,o))}}function zm(e){var r=e.alternate;return e===Rt||r!==null&&r===Rt}function Tm(e,r){Oi=Ol=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function Im(e,r,n){if(n&4194240){var o=r.lanes;o&=e.pendingLanes,n|=o,r.lanes=n,$c(e,n)}}var Hl={readContext:Wr,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},Gx={readContext:Wr,useCallback:function(e,r){return qr().memoizedState=[e,r===void 0?null:r],e},useContext:Wr,useEffect:vu,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,xl(4194308,4,vm.bind(null,r,e),n)},useLayoutEffect:function(e,r){return xl(4194308,4,e,r)},useInsertionEffect:function(e,r){return xl(4,2,e,r)},useMemo:function(e,r){var n=qr();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var o=qr();return r=n!==void 0?n(r):r,o.memoizedState=o.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},o.queue=e,e=e.dispatch=Ox.bind(null,Rt,e),[o.memoizedState,e]},useRef:function(e){var r=qr();return e={current:e},r.memoizedState=e},useState:yu,useDebugValue:ag,useDeferredValue:function(e){return qr().memoizedState=e},useTransition:function(){var e=yu(!1),r=e[0];return e=Nx.bind(null,e[1]),qr().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var o=Rt,i=qr();if(It){if(n===void 0)throw Error(Ce(407));n=n()}else{if(n=r(),Gt===null)throw Error(Ce(349));yo&30||um(o,r,n)}i.memoizedState=n;var s={value:n,getSnapshot:r};return i.queue=s,vu(bm.bind(null,o,s,e),[e]),o.flags|=2048,bs(9,pm.bind(null,o,s,n,r),void 0,null),n},useId:function(){var e=qr(),r=Gt.identifierPrefix;if(It){var n=mn,o=bn;n=(o&~(1<<32-Gr(o)-1)).toString(32)+n,r=":"+r+"R"+n,n=us++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=Px++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Ux={readContext:Wr,useCallback:km,useContext:Wr,useEffect:lg,useImperativeHandle:jm,useInsertionEffect:xm,useLayoutEffect:ym,useMemo:wm,useReducer:Ua,useRef:fm,useState:function(){return Ua(ps)},useDebugValue:ag,useDeferredValue:function(e){var r=Mr();return Sm(r,_t.memoizedState,e)},useTransition:function(){var e=Ua(ps)[0],r=Mr().memoizedState;return[e,r]},useMutableSource:cm,useSyncExternalStore:gm,useId:Cm,unstable_isNewReconciler:!1},Vx={readContext:Wr,useCallback:km,useContext:Wr,useEffect:lg,useImperativeHandle:jm,useInsertionEffect:xm,useLayoutEffect:ym,useMemo:wm,useReducer:Va,useRef:fm,useState:function(){return Va(ps)},useDebugValue:ag,useDeferredValue:function(e){var r=Mr();return _t===null?r.memoizedState=e:Sm(r,_t.memoizedState,e)},useTransition:function(){var e=Va(ps)[0],r=Mr().memoizedState;return[e,r]},useMutableSource:cm,useSyncExternalStore:gm,useId:Cm,unstable_isNewReconciler:!1};function Pr(e,r){if(e&&e.defaultProps){r=Et({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function Yd(e,r,n,o){r=e.memoizedState,n=n(o,r),n=n==null?r:Et({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ga={isMounted:function(e){return(e=e._reactInternals)?wo(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var o=rr(),i=Un(e),s=hn(o,i);s.payload=r,n!=null&&(s.callback=n),r=Hn(e,s,i),r!==null&&(Ur(r,e,i,o),hl(r,e,i))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var o=rr(),i=Un(e),s=hn(o,i);s.tag=1,s.payload=r,n!=null&&(s.callback=n),r=Hn(e,s,i),r!==null&&(Ur(r,e,i,o),hl(r,e,i))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=rr(),o=Un(e),i=hn(n,o);i.tag=2,r!=null&&(i.callback=r),r=Hn(e,i,o),r!==null&&(Ur(r,e,o,n),hl(r,e,o))}};function ju(e,r,n,o,i,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,l):r.prototype&&r.prototype.isPureReactComponent?!ss(n,o)||!ss(i,s):!0}function Bm(e,r,n){var o=!1,i=Qn,s=r.contextType;return typeof s=="object"&&s!==null?s=Wr(s):(i=cr(r)?fo:Jt.current,o=r.contextTypes,s=(o=o!=null)?ri(e,i):Qn),r=new r(n,s),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ga,e.stateNode=r,r._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),r}function ku(e,r,n,o){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,o),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,o),r.state!==e&&ga.enqueueReplaceState(r,r.state,null)}function Kd(e,r,n,o){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},eg(e);var s=r.contextType;typeof s=="object"&&s!==null?i.context=Wr(s):(s=cr(r)?fo:Jt.current,i.context=ri(e,s)),i.state=e.memoizedState,s=r.getDerivedStateFromProps,typeof s=="function"&&(Yd(e,r,s,n),i.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&ga.enqueueReplaceState(i,i.state,null),Pl(e,n,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function si(e,r){try{var n="",o=r;do n+=vf(o),o=o.return;while(o);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:r,stack:i,digest:null}}function Ya(e,r,n){return{value:e,source:null,stack:n??null,digest:r??null}}function Qd(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var Yx=typeof WeakMap=="function"?WeakMap:Map;function Rm(e,r,n){n=hn(-1,n),n.tag=3,n.payload={element:null};var o=r.value;return n.callback=function(){Ul||(Ul=!0,ic=o),Qd(e,r)},n}function Em(e,r,n){n=hn(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=r.value;n.payload=function(){return o(i)},n.callback=function(){Qd(e,r)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Qd(e,r),typeof o!="function"&&(Gn===null?Gn=new Set([this]):Gn.add(this));var l=r.stack;this.componentDidCatch(r.value,{componentStack:l!==null?l:""})}),n}function wu(e,r,n){var o=e.pingCache;if(o===null){o=e.pingCache=new Yx;var i=new Set;o.set(r,i)}else i=o.get(r),i===void 0&&(i=new Set,o.set(r,i));i.has(n)||(i.add(n),e=ly.bind(null,e,r,n),r.then(e,e))}function Su(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function Cu(e,r,n,o,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=hn(-1,1),r.tag=2,Hn(n,r,1))),n.lanes|=1),e)}var Kx=wn.ReactCurrentOwner,ar=!1;function er(e,r,n,o){r.child=e===null?sm(r,null,n,o):oi(r,e.child,n,o)}function zu(e,r,n,o,i){n=n.render;var s=r.ref;return Zo(r,i),o=ig(e,r,n,o,s,i),n=sg(),e!==null&&!ar?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,vn(e,r,i)):(It&&n&&Yc(r),r.flags|=1,er(e,r,o,i),r.child)}function Tu(e,r,n,o,i){if(e===null){var s=n.type;return typeof s=="function"&&!hg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=s,Fm(e,r,s,o,i)):(e=kl(n.type,null,o,r,r.mode,i),e.ref=r.ref,e.return=r,r.child=e)}if(s=e.child,!(e.lanes&i)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:ss,n(l,o)&&e.ref===r.ref)return vn(e,r,i)}return r.flags|=1,e=Vn(s,o),e.ref=r.ref,e.return=r,r.child=e}function Fm(e,r,n,o,i){if(e!==null){var s=e.memoizedProps;if(ss(s,o)&&e.ref===r.ref)if(ar=!1,r.pendingProps=o=s,(e.lanes&i)!==0)e.flags&131072&&(ar=!0);else return r.lanes=e.lanes,vn(e,r,i)}return qd(e,r,n,o,i)}function Am(e,r,n){var o=r.pendingProps,i=o.children,s=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Yo,xr),xr|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,kt(Yo,xr),xr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:n,kt(Yo,xr),xr|=o}else s!==null?(o=s.baseLanes|n,r.memoizedState=null):o=n,kt(Yo,xr),xr|=o;return er(e,r,i,n),r.child}function Dm(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function qd(e,r,n,o,i){var s=cr(n)?fo:Jt.current;return s=ri(r,s),Zo(r,i),n=ig(e,r,n,o,s,i),o=sg(),e!==null&&!ar?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,vn(e,r,i)):(It&&o&&Yc(r),r.flags|=1,er(e,r,n,i),r.child)}function Iu(e,r,n,o,i){if(cr(n)){var s=!0;Wl(r)}else s=!1;if(Zo(r,i),r.stateNode===null)yl(e,r),Bm(r,n,o),Kd(r,n,o,i),o=!0;else if(e===null){var l=r.stateNode,a=r.memoizedProps;l.props=a;var d=l.context,g=n.contextType;typeof g=="object"&&g!==null?g=Wr(g):(g=cr(n)?fo:Jt.current,g=ri(r,g));var m=n.getDerivedStateFromProps,f=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==o||d!==g)&&ku(r,l,o,g),An=!1;var h=r.memoizedState;l.state=h,Pl(r,o,l,i),d=r.memoizedState,a!==o||h!==d||dr.current||An?(typeof m=="function"&&(Yd(r,n,m,o),d=r.memoizedState),(a=An||ju(r,n,a,o,h,d,g))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(r.flags|=4194308)):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=o,r.memoizedState=d),l.props=o,l.state=d,l.context=g,o=a):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),o=!1)}else{l=r.stateNode,am(e,r),a=r.memoizedProps,g=r.type===r.elementType?a:Pr(r.type,a),l.props=g,f=r.pendingProps,h=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=Wr(d):(d=cr(n)?fo:Jt.current,d=ri(r,d));var B=n.getDerivedStateFromProps;(m=typeof B=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||h!==d)&&ku(r,l,o,d),An=!1,h=r.memoizedState,l.state=h,Pl(r,o,l,i);var R=r.memoizedState;a!==f||h!==R||dr.current||An?(typeof B=="function"&&(Yd(r,n,B,o),R=r.memoizedState),(g=An||ju(r,n,g,o,h,R,d)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,R,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,R,d)),typeof l.componentDidUpdate=="function"&&(r.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(r.flags|=1024),r.memoizedProps=o,r.memoizedState=R),l.props=o,l.state=R,l.context=d,o=g):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(r.flags|=1024),o=!1)}return Xd(e,r,n,o,s,i)}function Xd(e,r,n,o,i,s){Dm(e,r);var l=(r.flags&128)!==0;if(!o&&!l)return i&&pu(r,n,!1),vn(e,r,s);o=r.stateNode,Kx.current=r;var a=l&&typeof n.getDerivedStateFromError!="function"?null:o.render();return r.flags|=1,e!==null&&l?(r.child=oi(r,e.child,null,s),r.child=oi(r,null,a,s)):er(e,r,a,s),r.memoizedState=o.state,i&&pu(r,n,!0),r.child}function Wm(e){var r=e.stateNode;r.pendingContext?uu(e,r.pendingContext,r.pendingContext!==r.context):r.context&&uu(e,r.context,!1),tg(e,r.containerInfo)}function Bu(e,r,n,o,i){return ni(),Qc(i),r.flags|=256,er(e,r,n,o),r.child}var Zd={dehydrated:null,treeContext:null,retryLane:0};function Jd(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mm(e,r,n){var o=r.pendingProps,i=Bt.current,s=!1,l=(r.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),kt(Bt,i&1),e===null)return Ud(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(r.mode&1?e.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(l=o.children,e=o.fallback,s?(o=r.mode,s=r.child,l={mode:"hidden",children:l},!(o&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=ba(l,o,0,null),e=ho(e,o,n,null),s.return=r,e.return=r,s.sibling=e,r.child=s,r.child.memoizedState=Jd(n),r.memoizedState=Zd,e):dg(r,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Qx(e,r,l,o,a,i,n);if(s){s=o.fallback,l=r.mode,i=e.child,a=i.sibling;var d={mode:"hidden",children:o.children};return!(l&1)&&r.child!==i?(o=r.child,o.childLanes=0,o.pendingProps=d,r.deletions=null):(o=Vn(i,d),o.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Vn(a,s):(s=ho(s,l,n,null),s.flags|=2),s.return=r,o.return=r,o.sibling=s,r.child=o,o=s,s=r.child,l=e.child.memoizedState,l=l===null?Jd(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,r.memoizedState=Zd,o}return s=e.child,e=s.sibling,o=Vn(s,{mode:"visible",children:o.children}),!(r.mode&1)&&(o.lanes=n),o.return=r,o.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=o,r.memoizedState=null,o}function dg(e,r){return r=ba({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Ps(e,r,n,o){return o!==null&&Qc(o),oi(r,e.child,null,n),e=dg(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Qx(e,r,n,o,i,s,l){if(n)return r.flags&256?(r.flags&=-257,o=Ya(Error(Ce(422))),Ps(e,r,l,o)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(s=o.fallback,i=r.mode,o=ba({mode:"visible",children:o.children},i,0,null),s=ho(s,i,l,null),s.flags|=2,o.return=r,s.return=r,o.sibling=s,r.child=o,r.mode&1&&oi(r,e.child,null,l),r.child.memoizedState=Jd(l),r.memoizedState=Zd,s);if(!(r.mode&1))return Ps(e,r,l,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var a=o.dgst;return o=a,s=Error(Ce(419)),o=Ya(s,o,void 0),Ps(e,r,l,o)}if(a=(l&e.childLanes)!==0,ar||a){if(o=Gt,o!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(o.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,yn(e,i),Ur(o,e,i,-1))}return mg(),o=Ya(Error(Ce(421))),Ps(e,r,l,o)}return i.data==="$?"?(r.flags|=128,r.child=e.child,r=ay.bind(null,e),i._reactRetry=r,null):(e=s.treeContext,yr=On(i.nextSibling),vr=r,It=!0,Hr=null,e!==null&&(Er[Fr++]=bn,Er[Fr++]=mn,Er[Fr++]=xo,bn=e.id,mn=e.overflow,xo=r),r=dg(r,o.children),r.flags|=4096,r)}function Ru(e,r,n){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r),Vd(e.return,r,n)}function Ka(e,r,n,o,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:i}:(s.isBackwards=r,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=n,s.tailMode=i)}function Lm(e,r,n){var o=r.pendingProps,i=o.revealOrder,s=o.tail;if(er(e,r,o.children,n),o=Bt.current,o&2)o=o&1|2,r.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ru(e,n,r);else if(e.tag===19)Ru(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(kt(Bt,o),!(r.mode&1))r.memoizedState=null;else switch(i){case"forwards":for(n=r.child,i=null;n!==null;)e=n.alternate,e!==null&&Nl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=r.child,r.child=null):(i=n.sibling,n.sibling=null),Ka(r,!1,i,n,s);break;case"backwards":for(n=null,i=r.child,r.child=null;i!==null;){if(e=i.alternate,e!==null&&Nl(e)===null){r.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ka(r,!0,n,null,s);break;case"together":Ka(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function yl(e,r){!(r.mode&1)&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function vn(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),vo|=r.lanes,!(n&r.childLanes))return null;if(e!==null&&r.child!==e.child)throw Error(Ce(153));if(r.child!==null){for(e=r.child,n=Vn(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=Vn(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function qx(e,r,n){switch(r.tag){case 3:Wm(r),ni();break;case 5:dm(r);break;case 1:cr(r.type)&&Wl(r);break;case 4:tg(r,r.stateNode.containerInfo);break;case 10:var o=r.type._context,i=r.memoizedProps.value;kt(_l,o._currentValue),o._currentValue=i;break;case 13:if(o=r.memoizedState,o!==null)return o.dehydrated!==null?(kt(Bt,Bt.current&1),r.flags|=128,null):n&r.child.childLanes?Mm(e,r,n):(kt(Bt,Bt.current&1),e=vn(e,r,n),e!==null?e.sibling:null);kt(Bt,Bt.current&1);break;case 19:if(o=(n&r.childLanes)!==0,e.flags&128){if(o)return Lm(e,r,n);r.flags|=128}if(i=r.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),kt(Bt,Bt.current),o)break;return null;case 22:case 23:return r.lanes=0,Am(e,r,n)}return vn(e,r,n)}var _m,ec,$m,Pm;_m=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ec=function(){};$m=function(e,r,n,o){var i=e.memoizedProps;if(i!==o){e=r.stateNode,po(tn.current);var s=null;switch(n){case"input":i=kd(e,i),o=kd(e,o),s=[];break;case"select":i=Et({},i,{value:void 0}),o=Et({},o,{value:void 0}),s=[];break;case"textarea":i=Cd(e,i),o=Cd(e,o),s=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Al)}Td(n,o);var l;n=null;for(g in i)if(!o.hasOwnProperty(g)&&i.hasOwnProperty(g)&&i[g]!=null)if(g==="style"){var a=i[g];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(Ji.hasOwnProperty(g)?s||(s=[]):(s=s||[]).push(g,null));for(g in o){var d=o[g];if(a=i!=null?i[g]:void 0,o.hasOwnProperty(g)&&d!==a&&(d!=null||a!=null))if(g==="style")if(a){for(l in a)!a.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&a[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(s||(s=[]),s.push(g,n)),n=d;else g==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(s=s||[]).push(g,d)):g==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(g,""+d):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(Ji.hasOwnProperty(g)?(d!=null&&g==="onScroll"&&St("scroll",e),s||a===d||(s=[])):(s=s||[]).push(g,d))}n&&(s=s||[]).push("style",n);var g=s;(r.updateQueue=g)&&(r.flags|=4)}};Pm=function(e,r,n,o){n!==o&&(r.flags|=4)};function wi(e,r){if(!It)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function qt(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(r)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=n,r}function Xx(e,r,n){var o=r.pendingProps;switch(Kc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(r),null;case 1:return cr(r.type)&&Dl(),qt(r),null;case 3:return o=r.stateNode,ii(),Ct(dr),Ct(Jt),ng(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(_s(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Hr!==null&&(ac(Hr),Hr=null))),ec(e,r),qt(r),null;case 5:rg(r);var i=po(gs.current);if(n=r.type,e!==null&&r.stateNode!=null)$m(e,r,n,o,i),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!o){if(r.stateNode===null)throw Error(Ce(166));return qt(r),null}if(e=po(tn.current),_s(r)){o=r.stateNode,n=r.type;var s=r.memoizedProps;switch(o[Jr]=r,o[ds]=s,e=(r.mode&1)!==0,n){case"dialog":St("cancel",o),St("close",o);break;case"iframe":case"object":case"embed":St("load",o);break;case"video":case"audio":for(i=0;i<Ei.length;i++)St(Ei[i],o);break;case"source":St("error",o);break;case"img":case"image":case"link":St("error",o),St("load",o);break;case"details":St("toggle",o);break;case"input":$g(o,s),St("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},St("invalid",o);break;case"textarea":Ng(o,s),St("invalid",o)}Td(n,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="children"?typeof a=="string"?o.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ls(o.textContent,a,e),i=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ls(o.textContent,a,e),i=["children",""+a]):Ji.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&St("scroll",o)}switch(n){case"input":Bs(o),Pg(o,s,!0);break;case"textarea":Bs(o),Og(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=Al)}o=i,r.updateQueue=o,o!==null&&(r.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bb(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=l.createElement(n,{is:o.is}):(e=l.createElement(n),n==="select"&&(l=e,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):e=l.createElementNS(e,n),e[Jr]=r,e[ds]=o,_m(e,r,!1,!1),r.stateNode=e;e:{switch(l=Id(n,o),n){case"dialog":St("cancel",e),St("close",e),i=o;break;case"iframe":case"object":case"embed":St("load",e),i=o;break;case"video":case"audio":for(i=0;i<Ei.length;i++)St(Ei[i],e);i=o;break;case"source":St("error",e),i=o;break;case"img":case"image":case"link":St("error",e),St("load",e),i=o;break;case"details":St("toggle",e),i=o;break;case"input":$g(e,o),i=kd(e,o),St("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=Et({},o,{value:void 0}),St("invalid",e);break;case"textarea":Ng(e,o),i=Cd(e,o),St("invalid",e);break;default:i=o}Td(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var d=a[s];s==="style"?fb(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&mb(e,d)):s==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&es(e,d):typeof d=="number"&&es(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ji.hasOwnProperty(s)?d!=null&&s==="onScroll"&&St("scroll",e):d!=null&&Ac(e,s,d,l))}switch(n){case"input":Bs(e),Pg(e,o,!1);break;case"textarea":Bs(e),Og(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Kn(o.value));break;case"select":e.multiple=!!o.multiple,s=o.value,s!=null?Ko(e,!!o.multiple,s,!1):o.defaultValue!=null&&Ko(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Al)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return qt(r),null;case 6:if(e&&r.stateNode!=null)Pm(e,r,e.memoizedProps,o);else{if(typeof o!="string"&&r.stateNode===null)throw Error(Ce(166));if(n=po(gs.current),po(tn.current),_s(r)){if(o=r.stateNode,n=r.memoizedProps,o[Jr]=r,(s=o.nodeValue!==n)&&(e=vr,e!==null))switch(e.tag){case 3:Ls(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ls(o.nodeValue,n,(e.mode&1)!==0)}s&&(r.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Jr]=r,r.stateNode=o}return qt(r),null;case 13:if(Ct(Bt),o=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(It&&yr!==null&&r.mode&1&&!(r.flags&128))om(),ni(),r.flags|=98560,s=!1;else if(s=_s(r),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(Ce(318));if(s=r.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Ce(317));s[Jr]=r}else ni(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;qt(r),s=!1}else Hr!==null&&(ac(Hr),Hr=null),s=!0;if(!s)return r.flags&65536?r:null}return r.flags&128?(r.lanes=n,r):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(r.child.flags|=8192,r.mode&1&&(e===null||Bt.current&1?$t===0&&($t=3):mg())),r.updateQueue!==null&&(r.flags|=4),qt(r),null);case 4:return ii(),ec(e,r),e===null&&ls(r.stateNode.containerInfo),qt(r),null;case 10:return Zc(r.type._context),qt(r),null;case 17:return cr(r.type)&&Dl(),qt(r),null;case 19:if(Ct(Bt),s=r.memoizedState,s===null)return qt(r),null;if(o=(r.flags&128)!==0,l=s.rendering,l===null)if(o)wi(s,!1);else{if($t!==0||e!==null&&e.flags&128)for(e=r.child;e!==null;){if(l=Nl(e),l!==null){for(r.flags|=128,wi(s,!1),o=l.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),r.subtreeFlags=0,o=n,n=r.child;n!==null;)s=n,e=o,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return kt(Bt,Bt.current&1|2),r.child}e=e.sibling}s.tail!==null&&Dt()>li&&(r.flags|=128,o=!0,wi(s,!1),r.lanes=4194304)}else{if(!o)if(e=Nl(l),e!==null){if(r.flags|=128,o=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),wi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!It)return qt(r),null}else 2*Dt()-s.renderingStartTime>li&&n!==1073741824&&(r.flags|=128,o=!0,wi(s,!1),r.lanes=4194304);s.isBackwards?(l.sibling=r.child,r.child=l):(n=s.last,n!==null?n.sibling=l:r.child=l,s.last=l)}return s.tail!==null?(r=s.tail,s.rendering=r,s.tail=r.sibling,s.renderingStartTime=Dt(),r.sibling=null,n=Bt.current,kt(Bt,o?n&1|2:n&1),r):(qt(r),null);case 22:case 23:return bg(),o=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(r.flags|=8192),o&&r.mode&1?xr&1073741824&&(qt(r),r.subtreeFlags&6&&(r.flags|=8192)):qt(r),null;case 24:return null;case 25:return null}throw Error(Ce(156,r.tag))}function Zx(e,r){switch(Kc(r),r.tag){case 1:return cr(r.type)&&Dl(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return ii(),Ct(dr),Ct(Jt),ng(),e=r.flags,e&65536&&!(e&128)?(r.flags=e&-65537|128,r):null;case 5:return rg(r),null;case 13:if(Ct(Bt),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(Ce(340));ni()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return Ct(Bt),null;case 4:return ii(),null;case 10:return Zc(r.type._context),null;case 22:case 23:return bg(),null;case 24:return null;default:return null}}var Ns=!1,Zt=!1,Jx=typeof WeakSet=="function"?WeakSet:Set,_e=null;function Vo(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){At(e,r,o)}else n.current=null}function tc(e,r,n){try{n()}catch(o){At(e,r,o)}}var Eu=!1;function ey(e,r){if(_d=Rl,e=Ub(),Vc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var i=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,a=-1,d=-1,g=0,m=0,f=e,h=null;t:for(;;){for(var B;f!==n||i!==0&&f.nodeType!==3||(a=l+i),f!==s||o!==0&&f.nodeType!==3||(d=l+o),f.nodeType===3&&(l+=f.nodeValue.length),(B=f.firstChild)!==null;)h=f,f=B;for(;;){if(f===e)break t;if(h===n&&++g===i&&(a=l),h===s&&++m===o&&(d=l),(B=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=B}n=a===-1||d===-1?null:{start:a,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for($d={focusedElem:e,selectionRange:n},Rl=!1,_e=r;_e!==null;)if(r=_e,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,_e=e;else for(;_e!==null;){r=_e;try{var R=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var z=R.memoizedProps,S=R.memoizedState,p=r.stateNode,b=p.getSnapshotBeforeUpdate(r.elementType===r.type?z:Pr(r.type,z),S);p.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var u=r.stateNode.containerInfo;u.nodeType===1?u.textContent="":u.nodeType===9&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Ce(163))}}catch(k){At(r,r.return,k)}if(e=r.sibling,e!==null){e.return=r.return,_e=e;break}_e=r.return}return R=Eu,Eu=!1,R}function Hi(e,r,n){var o=r.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&tc(r,n,s)}i=i.next}while(i!==o)}}function ua(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==r)}}function rc(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function Nm(e){var r=e.alternate;r!==null&&(e.alternate=null,Nm(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Jr],delete r[ds],delete r[Od],delete r[Mx],delete r[Lx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Om(e){return e.tag===5||e.tag===3||e.tag===4}function Fu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Om(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nc(e,r,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=Al));else if(o!==4&&(e=e.child,e!==null))for(nc(e,r,n),e=e.sibling;e!==null;)nc(e,r,n),e=e.sibling}function oc(e,r,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(oc(e,r,n),e=e.sibling;e!==null;)oc(e,r,n),e=e.sibling}var Ut=null,Nr=!1;function Tn(e,r,n){for(n=n.child;n!==null;)Hm(e,r,n),n=n.sibling}function Hm(e,r,n){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(oa,n)}catch{}switch(n.tag){case 5:Zt||Vo(n,r);case 6:var o=Ut,i=Nr;Ut=null,Tn(e,r,n),Ut=o,Nr=i,Ut!==null&&(Nr?(e=Ut,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(Nr?(e=Ut,n=n.stateNode,e.nodeType===8?Na(e.parentNode,n):e.nodeType===1&&Na(e,n),os(e)):Na(Ut,n.stateNode));break;case 4:o=Ut,i=Nr,Ut=n.stateNode.containerInfo,Nr=!0,Tn(e,r,n),Ut=o,Nr=i;break;case 0:case 11:case 14:case 15:if(!Zt&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&tc(n,r,l),i=i.next}while(i!==o)}Tn(e,r,n);break;case 1:if(!Zt&&(Vo(n,r),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(a){At(n,r,a)}Tn(e,r,n);break;case 21:Tn(e,r,n);break;case 22:n.mode&1?(Zt=(o=Zt)||n.memoizedState!==null,Tn(e,r,n),Zt=o):Tn(e,r,n);break;default:Tn(e,r,n)}}function Au(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Jx),r.forEach(function(o){var i=dy.bind(null,e,o);n.has(o)||(n.add(o),o.then(i,i))})}}function Lr(e,r){var n=r.deletions;if(n!==null)for(var o=0;o<n.length;o++){var i=n[o];try{var s=e,l=r,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ut=a.stateNode,Nr=!1;break e;case 3:Ut=a.stateNode.containerInfo,Nr=!0;break e;case 4:Ut=a.stateNode.containerInfo,Nr=!0;break e}a=a.return}if(Ut===null)throw Error(Ce(160));Hm(s,l,i),Ut=null,Nr=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(g){At(i,r,g)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Gm(r,e),r=r.sibling}function Gm(e,r){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Lr(r,e),Kr(e),o&4){try{Hi(3,e,e.return),ua(3,e)}catch(z){At(e,e.return,z)}try{Hi(5,e,e.return)}catch(z){At(e,e.return,z)}}break;case 1:Lr(r,e),Kr(e),o&512&&n!==null&&Vo(n,n.return);break;case 5:if(Lr(r,e),Kr(e),o&512&&n!==null&&Vo(n,n.return),e.flags&32){var i=e.stateNode;try{es(i,"")}catch(z){At(e,e.return,z)}}if(o&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,l=n!==null?n.memoizedProps:s,a=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ub(i,s),Id(a,l);var g=Id(a,s);for(l=0;l<d.length;l+=2){var m=d[l],f=d[l+1];m==="style"?fb(i,f):m==="dangerouslySetInnerHTML"?mb(i,f):m==="children"?es(i,f):Ac(i,m,f,g)}switch(a){case"input":wd(i,s);break;case"textarea":pb(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var B=s.value;B!=null?Ko(i,!!s.multiple,B,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ko(i,!!s.multiple,s.defaultValue,!0):Ko(i,!!s.multiple,s.multiple?[]:"",!1))}i[ds]=s}catch(z){At(e,e.return,z)}}break;case 6:if(Lr(r,e),Kr(e),o&4){if(e.stateNode===null)throw Error(Ce(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(z){At(e,e.return,z)}}break;case 3:if(Lr(r,e),Kr(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{os(r.containerInfo)}catch(z){At(e,e.return,z)}break;case 4:Lr(r,e),Kr(e);break;case 13:Lr(r,e),Kr(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ug=Dt())),o&4&&Au(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Zt=(g=Zt)||m,Lr(r,e),Zt=g):Lr(r,e),Kr(e),o&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!m&&e.mode&1)for(_e=e,m=e.child;m!==null;){for(f=_e=m;_e!==null;){switch(h=_e,B=h.child,h.tag){case 0:case 11:case 14:case 15:Hi(4,h,h.return);break;case 1:Vo(h,h.return);var R=h.stateNode;if(typeof R.componentWillUnmount=="function"){o=h,n=h.return;try{r=o,R.props=r.memoizedProps,R.state=r.memoizedState,R.componentWillUnmount()}catch(z){At(o,n,z)}}break;case 5:Vo(h,h.return);break;case 22:if(h.memoizedState!==null){Wu(f);continue}}B!==null?(B.return=h,_e=B):Wu(f)}m=m.sibling}e:for(m=null,f=e;;){if(f.tag===5){if(m===null){m=f;try{i=f.stateNode,g?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,d=f.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=hb("display",l))}catch(z){At(e,e.return,z)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=g?"":f.memoizedProps}catch(z){At(e,e.return,z)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Lr(r,e),Kr(e),o&4&&Au(e);break;case 21:break;default:Lr(r,e),Kr(e)}}function Kr(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(Om(n)){var o=n;break e}n=n.return}throw Error(Ce(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(es(i,""),o.flags&=-33);var s=Fu(e);oc(e,s,i);break;case 3:case 4:var l=o.stateNode.containerInfo,a=Fu(e);nc(e,a,l);break;default:throw Error(Ce(161))}}catch(d){At(e,e.return,d)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function ty(e,r,n){_e=e,Um(e)}function Um(e,r,n){for(var o=(e.mode&1)!==0;_e!==null;){var i=_e,s=i.child;if(i.tag===22&&o){var l=i.memoizedState!==null||Ns;if(!l){var a=i.alternate,d=a!==null&&a.memoizedState!==null||Zt;a=Ns;var g=Zt;if(Ns=l,(Zt=d)&&!g)for(_e=i;_e!==null;)l=_e,d=l.child,l.tag===22&&l.memoizedState!==null?Mu(i):d!==null?(d.return=l,_e=d):Mu(i);for(;s!==null;)_e=s,Um(s),s=s.sibling;_e=i,Ns=a,Zt=g}Du(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,_e=s):Du(e)}}function Du(e){for(;_e!==null;){var r=_e;if(r.flags&8772){var n=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Zt||ua(5,r);break;case 1:var o=r.stateNode;if(r.flags&4&&!Zt)if(n===null)o.componentDidMount();else{var i=r.elementType===r.type?n.memoizedProps:Pr(r.type,n.memoizedProps);o.componentDidUpdate(i,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=r.updateQueue;s!==null&&xu(r,s,o);break;case 3:var l=r.updateQueue;if(l!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}xu(r,l,n)}break;case 5:var a=r.stateNode;if(n===null&&r.flags&4){n=a;var d=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var g=r.alternate;if(g!==null){var m=g.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&os(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Ce(163))}Zt||r.flags&512&&rc(r)}catch(h){At(r,r.return,h)}}if(r===e){_e=null;break}if(n=r.sibling,n!==null){n.return=r.return,_e=n;break}_e=r.return}}function Wu(e){for(;_e!==null;){var r=_e;if(r===e){_e=null;break}var n=r.sibling;if(n!==null){n.return=r.return,_e=n;break}_e=r.return}}function Mu(e){for(;_e!==null;){var r=_e;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{ua(4,r)}catch(d){At(r,n,d)}break;case 1:var o=r.stateNode;if(typeof o.componentDidMount=="function"){var i=r.return;try{o.componentDidMount()}catch(d){At(r,i,d)}}var s=r.return;try{rc(r)}catch(d){At(r,s,d)}break;case 5:var l=r.return;try{rc(r)}catch(d){At(r,l,d)}}}catch(d){At(r,r.return,d)}if(r===e){_e=null;break}var a=r.sibling;if(a!==null){a.return=r.return,_e=a;break}_e=r.return}}var ry=Math.ceil,Gl=wn.ReactCurrentDispatcher,cg=wn.ReactCurrentOwner,Dr=wn.ReactCurrentBatchConfig,ut=0,Gt=null,Wt=null,Yt=0,xr=0,Yo=Xn(0),$t=0,ms=null,vo=0,pa=0,gg=0,Gi=null,lr=null,ug=0,li=1/0,dn=null,Ul=!1,ic=null,Gn=null,Os=!1,_n=null,Vl=0,Ui=0,sc=null,vl=-1,jl=0;function rr(){return ut&6?Dt():vl!==-1?vl:vl=Dt()}function Un(e){return e.mode&1?ut&2&&Yt!==0?Yt&-Yt:$x.transition!==null?(jl===0&&(jl=Bb()),jl):(e=xt,e!==0||(e=window.event,e=e===void 0?16:Mb(e.type)),e):1}function Ur(e,r,n,o){if(50<Ui)throw Ui=0,sc=null,Error(Ce(185));ws(e,n,o),(!(ut&2)||e!==Gt)&&(e===Gt&&(!(ut&2)&&(pa|=n),$t===4&&Wn(e,Yt)),gr(e,o),n===1&&ut===0&&!(r.mode&1)&&(li=Dt()+500,da&&Zn()))}function gr(e,r){var n=e.callbackNode;$f(e,r);var o=Bl(e,e===Gt?Yt:0);if(o===0)n!==null&&Ug(n),e.callbackNode=null,e.callbackPriority=0;else if(r=o&-o,e.callbackPriority!==r){if(n!=null&&Ug(n),r===1)e.tag===0?_x(Lu.bind(null,e)):tm(Lu.bind(null,e)),Dx(function(){!(ut&6)&&Zn()}),n=null;else{switch(Rb(o)){case 1:n=_c;break;case 4:n=Tb;break;case 16:n=Il;break;case 536870912:n=Ib;break;default:n=Il}n=Jm(n,Vm.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function Vm(e,r){if(vl=-1,jl=0,ut&6)throw Error(Ce(327));var n=e.callbackNode;if(Jo()&&e.callbackNode!==n)return null;var o=Bl(e,e===Gt?Yt:0);if(o===0)return null;if(o&30||o&e.expiredLanes||r)r=Yl(e,o);else{r=o;var i=ut;ut|=2;var s=Km();(Gt!==e||Yt!==r)&&(dn=null,li=Dt()+500,mo(e,r));do try{iy();break}catch(a){Ym(e,a)}while(!0);Xc(),Gl.current=s,ut=i,Wt!==null?r=0:(Gt=null,Yt=0,r=$t)}if(r!==0){if(r===2&&(i=Ad(e),i!==0&&(o=i,r=lc(e,i))),r===1)throw n=ms,mo(e,0),Wn(e,o),gr(e,Dt()),n;if(r===6)Wn(e,o);else{if(i=e.current.alternate,!(o&30)&&!ny(i)&&(r=Yl(e,o),r===2&&(s=Ad(e),s!==0&&(o=s,r=lc(e,s))),r===1))throw n=ms,mo(e,0),Wn(e,o),gr(e,Dt()),n;switch(e.finishedWork=i,e.finishedLanes=o,r){case 0:case 1:throw Error(Ce(345));case 2:lo(e,lr,dn);break;case 3:if(Wn(e,o),(o&130023424)===o&&(r=ug+500-Dt(),10<r)){if(Bl(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){rr(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Nd(lo.bind(null,e,lr,dn),r);break}lo(e,lr,dn);break;case 4:if(Wn(e,o),(o&4194240)===o)break;for(r=e.eventTimes,i=-1;0<o;){var l=31-Gr(o);s=1<<l,l=r[l],l>i&&(i=l),o&=~s}if(o=i,o=Dt()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*ry(o/1960))-o,10<o){e.timeoutHandle=Nd(lo.bind(null,e,lr,dn),o);break}lo(e,lr,dn);break;case 5:lo(e,lr,dn);break;default:throw Error(Ce(329))}}}return gr(e,Dt()),e.callbackNode===n?Vm.bind(null,e):null}function lc(e,r){var n=Gi;return e.current.memoizedState.isDehydrated&&(mo(e,r).flags|=256),e=Yl(e,r),e!==2&&(r=lr,lr=n,r!==null&&ac(r)),e}function ac(e){lr===null?lr=e:lr.push.apply(lr,e)}function ny(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var i=n[o],s=i.getSnapshot;i=i.value;try{if(!Vr(s(),i))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Wn(e,r){for(r&=~gg,r&=~pa,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-Gr(r),o=1<<n;e[n]=-1,r&=~o}}function Lu(e){if(ut&6)throw Error(Ce(327));Jo();var r=Bl(e,0);if(!(r&1))return gr(e,Dt()),null;var n=Yl(e,r);if(e.tag!==0&&n===2){var o=Ad(e);o!==0&&(r=o,n=lc(e,o))}if(n===1)throw n=ms,mo(e,0),Wn(e,r),gr(e,Dt()),n;if(n===6)throw Error(Ce(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,lo(e,lr,dn),gr(e,Dt()),null}function pg(e,r){var n=ut;ut|=1;try{return e(r)}finally{ut=n,ut===0&&(li=Dt()+500,da&&Zn())}}function jo(e){_n!==null&&_n.tag===0&&!(ut&6)&&Jo();var r=ut;ut|=1;var n=Dr.transition,o=xt;try{if(Dr.transition=null,xt=1,e)return e()}finally{xt=o,Dr.transition=n,ut=r,!(ut&6)&&Zn()}}function bg(){xr=Yo.current,Ct(Yo)}function mo(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ax(n)),Wt!==null)for(n=Wt.return;n!==null;){var o=n;switch(Kc(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Dl();break;case 3:ii(),Ct(dr),Ct(Jt),ng();break;case 5:rg(o);break;case 4:ii();break;case 13:Ct(Bt);break;case 19:Ct(Bt);break;case 10:Zc(o.type._context);break;case 22:case 23:bg()}n=n.return}if(Gt=e,Wt=e=Vn(e.current,null),Yt=xr=r,$t=0,ms=null,gg=pa=vo=0,lr=Gi=null,uo!==null){for(r=0;r<uo.length;r++)if(n=uo[r],o=n.interleaved,o!==null){n.interleaved=null;var i=o.next,s=n.pending;if(s!==null){var l=s.next;s.next=i,o.next=l}n.pending=o}uo=null}return e}function Ym(e,r){do{var n=Wt;try{if(Xc(),fl.current=Hl,Ol){for(var o=Rt.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}Ol=!1}if(yo=0,Ht=_t=Rt=null,Oi=!1,us=0,cg.current=null,n===null||n.return===null){$t=1,ms=r,Wt=null;break}e:{var s=e,l=n.return,a=n,d=r;if(r=Yt,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var g=d,m=a,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var B=Su(l);if(B!==null){B.flags&=-257,Cu(B,l,a,s,r),B.mode&1&&wu(s,g,r),r=B,d=g;var R=r.updateQueue;if(R===null){var z=new Set;z.add(d),r.updateQueue=z}else R.add(d);break e}else{if(!(r&1)){wu(s,g,r),mg();break e}d=Error(Ce(426))}}else if(It&&a.mode&1){var S=Su(l);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Cu(S,l,a,s,r),Qc(si(d,a));break e}}s=d=si(d,a),$t!==4&&($t=2),Gi===null?Gi=[s]:Gi.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,r&=-r,s.lanes|=r;var p=Rm(s,d,r);fu(s,p);break e;case 1:a=d;var b=s.type,u=s.stateNode;if(!(s.flags&128)&&(typeof b.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Gn===null||!Gn.has(u)))){s.flags|=65536,r&=-r,s.lanes|=r;var k=Em(s,a,r);fu(s,k);break e}}s=s.return}while(s!==null)}qm(n)}catch(x){r=x,Wt===n&&n!==null&&(Wt=n=n.return);continue}break}while(!0)}function Km(){var e=Gl.current;return Gl.current=Hl,e===null?Hl:e}function mg(){($t===0||$t===3||$t===2)&&($t=4),Gt===null||!(vo&268435455)&&!(pa&268435455)||Wn(Gt,Yt)}function Yl(e,r){var n=ut;ut|=2;var o=Km();(Gt!==e||Yt!==r)&&(dn=null,mo(e,r));do try{oy();break}catch(i){Ym(e,i)}while(!0);if(Xc(),ut=n,Gl.current=o,Wt!==null)throw Error(Ce(261));return Gt=null,Yt=0,$t}function oy(){for(;Wt!==null;)Qm(Wt)}function iy(){for(;Wt!==null&&!Rf();)Qm(Wt)}function Qm(e){var r=Zm(e.alternate,e,xr);e.memoizedProps=e.pendingProps,r===null?qm(e):Wt=r,cg.current=null}function qm(e){var r=e;do{var n=r.alternate;if(e=r.return,r.flags&32768){if(n=Zx(n,r),n!==null){n.flags&=32767,Wt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$t=6,Wt=null;return}}else if(n=Xx(n,r,xr),n!==null){Wt=n;return}if(r=r.sibling,r!==null){Wt=r;return}Wt=r=e}while(r!==null);$t===0&&($t=5)}function lo(e,r,n){var o=xt,i=Dr.transition;try{Dr.transition=null,xt=1,sy(e,r,n,o)}finally{Dr.transition=i,xt=o}return null}function sy(e,r,n,o){do Jo();while(_n!==null);if(ut&6)throw Error(Ce(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(Ce(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Pf(e,s),e===Gt&&(Wt=Gt=null,Yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Os||(Os=!0,Jm(Il,function(){return Jo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dr.transition,Dr.transition=null;var l=xt;xt=1;var a=ut;ut|=4,cg.current=null,ey(e,n),Gm(n,e),zx($d),Rl=!!_d,$d=_d=null,e.current=n,ty(n),Ef(),ut=a,xt=l,Dr.transition=s}else e.current=n;if(Os&&(Os=!1,_n=e,Vl=i),s=e.pendingLanes,s===0&&(Gn=null),Df(n.stateNode),gr(e,Dt()),r!==null)for(o=e.onRecoverableError,n=0;n<r.length;n++)i=r[n],o(i.value,{componentStack:i.stack,digest:i.digest});if(Ul)throw Ul=!1,e=ic,ic=null,e;return Vl&1&&e.tag!==0&&Jo(),s=e.pendingLanes,s&1?e===sc?Ui++:(Ui=0,sc=e):Ui=0,Zn(),null}function Jo(){if(_n!==null){var e=Rb(Vl),r=Dr.transition,n=xt;try{if(Dr.transition=null,xt=16>e?16:e,_n===null)var o=!1;else{if(e=_n,_n=null,Vl=0,ut&6)throw Error(Ce(331));var i=ut;for(ut|=4,_e=e.current;_e!==null;){var s=_e,l=s.child;if(_e.flags&16){var a=s.deletions;if(a!==null){for(var d=0;d<a.length;d++){var g=a[d];for(_e=g;_e!==null;){var m=_e;switch(m.tag){case 0:case 11:case 15:Hi(8,m,s)}var f=m.child;if(f!==null)f.return=m,_e=f;else for(;_e!==null;){m=_e;var h=m.sibling,B=m.return;if(Nm(m),m===g){_e=null;break}if(h!==null){h.return=B,_e=h;break}_e=B}}}var R=s.alternate;if(R!==null){var z=R.child;if(z!==null){R.child=null;do{var S=z.sibling;z.sibling=null,z=S}while(z!==null)}}_e=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,_e=l;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Hi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,_e=p;break e}_e=s.return}}var b=e.current;for(_e=b;_e!==null;){l=_e;var u=l.child;if(l.subtreeFlags&2064&&u!==null)u.return=l,_e=u;else e:for(l=b;_e!==null;){if(a=_e,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ua(9,a)}}catch(x){At(a,a.return,x)}if(a===l){_e=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,_e=k;break e}_e=a.return}}if(ut=i,Zn(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(oa,e)}catch{}o=!0}return o}finally{xt=n,Dr.transition=r}}return!1}function _u(e,r,n){r=si(n,r),r=Rm(e,r,1),e=Hn(e,r,1),r=rr(),e!==null&&(ws(e,1,r),gr(e,r))}function At(e,r,n){if(e.tag===3)_u(e,e,n);else for(;r!==null;){if(r.tag===3){_u(r,e,n);break}else if(r.tag===1){var o=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Gn===null||!Gn.has(o))){e=si(n,e),e=Em(r,e,1),r=Hn(r,e,1),e=rr(),r!==null&&(ws(r,1,e),gr(r,e));break}}r=r.return}}function ly(e,r,n){var o=e.pingCache;o!==null&&o.delete(r),r=rr(),e.pingedLanes|=e.suspendedLanes&n,Gt===e&&(Yt&n)===n&&($t===4||$t===3&&(Yt&130023424)===Yt&&500>Dt()-ug?mo(e,0):gg|=n),gr(e,r)}function Xm(e,r){r===0&&(e.mode&1?(r=Fs,Fs<<=1,!(Fs&130023424)&&(Fs=4194304)):r=1);var n=rr();e=yn(e,r),e!==null&&(ws(e,r,n),gr(e,n))}function ay(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),Xm(e,n)}function dy(e,r){var n=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(Ce(314))}o!==null&&o.delete(r),Xm(e,n)}var Zm;Zm=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||dr.current)ar=!0;else{if(!(e.lanes&n)&&!(r.flags&128))return ar=!1,qx(e,r,n);ar=!!(e.flags&131072)}else ar=!1,It&&r.flags&1048576&&rm(r,Ll,r.index);switch(r.lanes=0,r.tag){case 2:var o=r.type;yl(e,r),e=r.pendingProps;var i=ri(r,Jt.current);Zo(r,n),i=ig(null,r,o,e,i,n);var s=sg();return r.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,cr(o)?(s=!0,Wl(r)):s=!1,r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,eg(r),i.updater=ga,r.stateNode=i,i._reactInternals=r,Kd(r,o,e,n),r=Xd(null,r,o,!0,s,n)):(r.tag=0,It&&s&&Yc(r),er(null,r,i,n),r=r.child),r;case 16:o=r.elementType;e:{switch(yl(e,r),e=r.pendingProps,i=o._init,o=i(o._payload),r.type=o,i=r.tag=gy(o),e=Pr(o,e),i){case 0:r=qd(null,r,o,e,n);break e;case 1:r=Iu(null,r,o,e,n);break e;case 11:r=zu(null,r,o,e,n);break e;case 14:r=Tu(null,r,o,Pr(o.type,e),n);break e}throw Error(Ce(306,o,""))}return r;case 0:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Pr(o,i),qd(e,r,o,i,n);case 1:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Pr(o,i),Iu(e,r,o,i,n);case 3:e:{if(Wm(r),e===null)throw Error(Ce(387));o=r.pendingProps,s=r.memoizedState,i=s.element,am(e,r),Pl(r,o,null,n);var l=r.memoizedState;if(o=l.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},r.updateQueue.baseState=s,r.memoizedState=s,r.flags&256){i=si(Error(Ce(423)),r),r=Bu(e,r,o,n,i);break e}else if(o!==i){i=si(Error(Ce(424)),r),r=Bu(e,r,o,n,i);break e}else for(yr=On(r.stateNode.containerInfo.firstChild),vr=r,It=!0,Hr=null,n=sm(r,null,o,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ni(),o===i){r=vn(e,r,n);break e}er(e,r,o,n)}r=r.child}return r;case 5:return dm(r),e===null&&Ud(r),o=r.type,i=r.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,Pd(o,i)?l=null:s!==null&&Pd(o,s)&&(r.flags|=32),Dm(e,r),er(e,r,l,n),r.child;case 6:return e===null&&Ud(r),null;case 13:return Mm(e,r,n);case 4:return tg(r,r.stateNode.containerInfo),o=r.pendingProps,e===null?r.child=oi(r,null,o,n):er(e,r,o,n),r.child;case 11:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Pr(o,i),zu(e,r,o,i,n);case 7:return er(e,r,r.pendingProps,n),r.child;case 8:return er(e,r,r.pendingProps.children,n),r.child;case 12:return er(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(o=r.type._context,i=r.pendingProps,s=r.memoizedProps,l=i.value,kt(_l,o._currentValue),o._currentValue=l,s!==null)if(Vr(s.value,l)){if(s.children===i.children&&!dr.current){r=vn(e,r,n);break e}}else for(s=r.child,s!==null&&(s.return=r);s!==null;){var a=s.dependencies;if(a!==null){l=s.child;for(var d=a.firstContext;d!==null;){if(d.context===o){if(s.tag===1){d=hn(-1,n&-n),d.tag=2;var g=s.updateQueue;if(g!==null){g=g.shared;var m=g.pending;m===null?d.next=d:(d.next=m.next,m.next=d),g.pending=d}}s.lanes|=n,d=s.alternate,d!==null&&(d.lanes|=n),Vd(s.return,n,r),a.lanes|=n;break}d=d.next}}else if(s.tag===10)l=s.type===r.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(Ce(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Vd(l,n,r),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===r){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}er(e,r,i.children,n),r=r.child}return r;case 9:return i=r.type,o=r.pendingProps.children,Zo(r,n),i=Wr(i),o=o(i),r.flags|=1,er(e,r,o,n),r.child;case 14:return o=r.type,i=Pr(o,r.pendingProps),i=Pr(o.type,i),Tu(e,r,o,i,n);case 15:return Fm(e,r,r.type,r.pendingProps,n);case 17:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Pr(o,i),yl(e,r),r.tag=1,cr(o)?(e=!0,Wl(r)):e=!1,Zo(r,n),Bm(r,o,i),Kd(r,o,i,n),Xd(null,r,o,!0,e,n);case 19:return Lm(e,r,n);case 22:return Am(e,r,n)}throw Error(Ce(156,r.tag))};function Jm(e,r){return zb(e,r)}function cy(e,r,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ar(e,r,n,o){return new cy(e,r,n,o)}function hg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gy(e){if(typeof e=="function")return hg(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Wc)return 11;if(e===Mc)return 14}return 2}function Vn(e,r){var n=e.alternate;return n===null?(n=Ar(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function kl(e,r,n,o,i,s){var l=2;if(o=e,typeof e=="function")hg(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Lo:return ho(n.children,i,s,r);case Dc:l=8,i|=8;break;case xd:return e=Ar(12,n,r,i|2),e.elementType=xd,e.lanes=s,e;case yd:return e=Ar(13,n,r,i),e.elementType=yd,e.lanes=s,e;case vd:return e=Ar(19,n,r,i),e.elementType=vd,e.lanes=s,e;case db:return ba(n,i,s,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case lb:l=10;break e;case ab:l=9;break e;case Wc:l=11;break e;case Mc:l=14;break e;case Fn:l=16,o=null;break e}throw Error(Ce(130,e==null?e:typeof e,""))}return r=Ar(l,n,r,i),r.elementType=e,r.type=o,r.lanes=s,r}function ho(e,r,n,o){return e=Ar(7,e,o,r),e.lanes=n,e}function ba(e,r,n,o){return e=Ar(22,e,o,r),e.elementType=db,e.lanes=n,e.stateNode={isHidden:!1},e}function Qa(e,r,n){return e=Ar(6,e,null,r),e.lanes=n,e}function qa(e,r,n){return r=Ar(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function uy(e,r,n,o,i){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ra(0),this.expirationTimes=Ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ra(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fg(e,r,n,o,i,s,l,a,d){return e=new uy(e,r,n,a,d),r===1?(r=1,s===!0&&(r|=8)):r=0,s=Ar(3,null,null,r),e.current=s,s.stateNode=e,s.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},eg(s),e}function py(e,r,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mo,key:o==null?null:""+o,children:e,containerInfo:r,implementation:n}}function eh(e){if(!e)return Qn;e=e._reactInternals;e:{if(wo(e)!==e||e.tag!==1)throw Error(Ce(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(cr(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(Ce(171))}if(e.tag===1){var n=e.type;if(cr(n))return em(e,n,r)}return r}function th(e,r,n,o,i,s,l,a,d){return e=fg(n,o,!0,e,i,s,l,a,d),e.context=eh(null),n=e.current,o=rr(),i=Un(n),s=hn(o,i),s.callback=r??null,Hn(n,s,i),e.current.lanes=i,ws(e,i,o),gr(e,o),e}function ma(e,r,n,o){var i=r.current,s=rr(),l=Un(i);return n=eh(n),r.context===null?r.context=n:r.pendingContext=n,r=hn(s,l),r.payload={element:e},o=o===void 0?null:o,o!==null&&(r.callback=o),e=Hn(i,r,l),e!==null&&(Ur(e,i,l,s),hl(e,i,l)),l}function Kl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $u(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function xg(e,r){$u(e,r),(e=e.alternate)&&$u(e,r)}function by(){return null}var rh=typeof reportError=="function"?reportError:function(e){console.error(e)};function yg(e){this._internalRoot=e}ha.prototype.render=yg.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(Ce(409));ma(e,r,null,null)};ha.prototype.unmount=yg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;jo(function(){ma(null,e,null,null)}),r[xn]=null}};function ha(e){this._internalRoot=e}ha.prototype.unstable_scheduleHydration=function(e){if(e){var r=Ab();e={blockedOn:null,target:e,priority:r};for(var n=0;n<Dn.length&&r!==0&&r<Dn[n].priority;n++);Dn.splice(n,0,e),n===0&&Wb(e)}};function vg(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pu(){}function my(e,r,n,o,i){if(i){if(typeof o=="function"){var s=o;o=function(){var g=Kl(l);s.call(g)}}var l=th(r,o,e,0,null,!1,!1,"",Pu);return e._reactRootContainer=l,e[xn]=l.current,ls(e.nodeType===8?e.parentNode:e),jo(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var a=o;o=function(){var g=Kl(d);a.call(g)}}var d=fg(e,0,!1,null,null,!1,!1,"",Pu);return e._reactRootContainer=d,e[xn]=d.current,ls(e.nodeType===8?e.parentNode:e),jo(function(){ma(r,d,n,o)}),d}function xa(e,r,n,o,i){var s=n._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var a=i;i=function(){var d=Kl(l);a.call(d)}}ma(r,l,e,i)}else l=my(n,r,e,i,o);return Kl(l)}Eb=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=Ri(r.pendingLanes);n!==0&&($c(r,n|1),gr(r,Dt()),!(ut&6)&&(li=Dt()+500,Zn()))}break;case 13:jo(function(){var o=yn(e,1);if(o!==null){var i=rr();Ur(o,e,1,i)}}),xg(e,1)}};Pc=function(e){if(e.tag===13){var r=yn(e,134217728);if(r!==null){var n=rr();Ur(r,e,134217728,n)}xg(e,134217728)}};Fb=function(e){if(e.tag===13){var r=Un(e),n=yn(e,r);if(n!==null){var o=rr();Ur(n,e,r,o)}xg(e,r)}};Ab=function(){return xt};Db=function(e,r){var n=xt;try{return xt=e,r()}finally{xt=n}};Rd=function(e,r,n){switch(r){case"input":if(wd(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var o=n[r];if(o!==e&&o.form===e.form){var i=aa(o);if(!i)throw Error(Ce(90));gb(o),wd(o,i)}}}break;case"textarea":pb(e,n);break;case"select":r=n.value,r!=null&&Ko(e,!!n.multiple,r,!1)}};vb=pg;jb=jo;var hy={usingClientEntryPoint:!1,Events:[Cs,No,aa,xb,yb,pg]},Si={findFiberByHostInstance:go,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fy={bundleType:Si.bundleType,version:Si.version,rendererPackageName:Si.rendererPackageName,rendererConfig:Si.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sb(e),e===null?null:e.stateNode},findFiberByHostInstance:Si.findFiberByHostInstance||by,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hs.isDisabled&&Hs.supportsFiber)try{oa=Hs.inject(fy),en=Hs}catch{}}kr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hy;kr.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vg(r))throw Error(Ce(200));return py(e,r,null,n)};kr.createRoot=function(e,r){if(!vg(e))throw Error(Ce(299));var n=!1,o="",i=rh;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),r=fg(e,1,!1,null,null,n,!1,o,i),e[xn]=r.current,ls(e.nodeType===8?e.parentNode:e),new yg(r)};kr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(Ce(188)):(e=Object.keys(e).join(","),Error(Ce(268,e)));return e=Sb(r),e=e===null?null:e.stateNode,e};kr.flushSync=function(e){return jo(e)};kr.hydrate=function(e,r,n){if(!fa(r))throw Error(Ce(200));return xa(null,e,r,!0,n)};kr.hydrateRoot=function(e,r,n){if(!vg(e))throw Error(Ce(405));var o=n!=null&&n.hydratedSources||null,i=!1,s="",l=rh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),r=th(r,null,e,1,n??null,i,!1,s,l),e[xn]=r.current,ls(e),o)for(e=0;e<o.length;e++)n=o[e],i=n._getVersion,i=i(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,i]:r.mutableSourceEagerHydrationData.push(n,i);return new ha(r)};kr.render=function(e,r,n){if(!fa(r))throw Error(Ce(200));return xa(null,e,r,!1,n)};kr.unmountComponentAtNode=function(e){if(!fa(e))throw Error(Ce(40));return e._reactRootContainer?(jo(function(){xa(null,null,e,!1,function(){e._reactRootContainer=null,e[xn]=null})}),!0):!1};kr.unstable_batchedUpdates=pg;kr.unstable_renderSubtreeIntoContainer=function(e,r,n,o){if(!fa(n))throw Error(Ce(200));if(e==null||e._reactInternals===void 0)throw Error(Ce(38));return xa(e,r,n,!1,o)};kr.version="18.3.1-next-f1338f8080-20240426";function nh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nh)}catch(e){console.error(e)}}nh(),nb.exports=kr;var xy=nb.exports,oh,Nu=xy;oh=Nu.createRoot,Nu.hydrateRoot;/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ih=(...e)=>e.filter((r,n,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===n).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var vy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=c.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:i="",children:s,iconNode:l,...a},d)=>c.createElement("svg",{ref:d,...vy,width:r,height:r,stroke:e,strokeWidth:o?Number(n)*24/Number(r):n,className:ih("lucide",i),...a},[...l.map(([g,m])=>c.createElement(g,m)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=(e,r)=>{const n=c.forwardRef(({className:o,...i},s)=>c.createElement(jy,{ref:s,iconNode:r,className:ih(`lucide-${yy(e)}`,o),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=be("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=be("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=be("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=be("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=be("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=be("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=be("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=be("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=be("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=be("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=be("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=be("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=be("Bus",[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=be("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=be("CalendarClock",[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=be("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=be("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=be("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=be("Carrot",[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",key:"rfqxbe"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",key:"6b25w4"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",key:"fn65lo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=be("ChartCandlestick",[["path",{d:"M9 5v4",key:"14uxtq"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1",key:"f4fvz0"}],["path",{d:"M9 15v2",key:"r5rk32"}],["path",{d:"M17 3v2",key:"1l2re6"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1",key:"z38je5"}],["path",{d:"M17 13v3",key:"5l0wba"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=be("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=be("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=be("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=be("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=be("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=be("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=be("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=be("Clapperboard",[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=be("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=be("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=be("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=be("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=be("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=be("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=be("Dumbbell",[["path",{d:"M14.4 14.4 9.6 9.6",key:"ic80wn"}],["path",{d:"M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z",key:"nnl7wr"}],["path",{d:"m21.5 21.5-1.4-1.4",key:"1f1ice"}],["path",{d:"M3.9 3.9 2.5 2.5",key:"1evmna"}],["path",{d:"M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z",key:"yhosts"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=be("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=be("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=be("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=be("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=be("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=be("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=be("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"7cu91f"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=be("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=be("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=be("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=be("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=be("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=be("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=be("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=be("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=be("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=be("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=be("Images",[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=be("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=be("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=be("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=be("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=be("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=be("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=be("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=be("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=be("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=be("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=be("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=be("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=be("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=be("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=be("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=be("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=be("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=be("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=be("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=be("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=be("PartyPopper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"hbicv8"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",key:"1i94pl"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",key:"1cofks"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=be("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=be("PawPrint",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=be("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=be("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=be("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=be("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=be("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=be("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=be("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=be("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=be("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=be("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=be("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=be("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=be("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=be("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=be("ScrollText",[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=be("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=be("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=be("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=be("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=be("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=be("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=be("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=be("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=be("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=be("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=be("Swords",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=be("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=be("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=be("TramFront",[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=be("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=be("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=be("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=be("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=be("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=be("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=be("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=be("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=be("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=be("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=be("WashingMachine",[["path",{d:"M3 6h3",key:"155dbl"}],["path",{d:"M17 6h.01",key:"e2y6kg"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2",key:"od3kk9"}],["circle",{cx:"12",cy:"13",r:"5",key:"nlbqau"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5",key:"17lach"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=be("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=be("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=be("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=be("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=be("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Bg="anvil_token",zh=()=>localStorage.getItem(Bg),T0=e=>localStorage.setItem(Bg,e),bc=()=>localStorage.removeItem(Bg),J=async(e,r,n)=>{const o={};n!==void 0&&(o["Content-Type"]="application/json");const i=zh();i&&(o.Authorization=`Bearer ${i}`);const s=await fetch(`/api${r}`,{method:e,headers:o,body:n!==void 0?JSON.stringify(n):void 0});if(s.status===401)throw bc(),window.dispatchEvent(new Event("anvil-unauthorized")),new Error("Not authenticated");if(s.status===204)return null;if(!s.ok){const l=await s.text();let a=l;try{a=JSON.parse(l).detail||l}catch{}throw new Error(a||`HTTP ${s.status}`)}return s.json()},F={me:()=>J("GET","/auth/me"),signInWithGoogle:()=>{window.location.href="/api/auth/google"},getPillars:()=>J("GET","/pillars"),getFocus:()=>J("GET","/focus"),createFocus:e=>J("POST","/focus",e),deleteFocus:e=>J("DELETE",`/focus/${e}`),addScreenTime:(e,r)=>J("POST","/screentime",{screen:e,seconds:r}),getScreenTime:()=>J("GET","/screentime"),getPayouts:()=>J("GET","/rewards/payouts"),createPayout:e=>J("POST","/rewards/payouts",e),deletePayout:e=>J("DELETE",`/rewards/payouts/${e}`),getRewardRates:()=>J("GET","/rewards/rates"),setRewardRate:e=>J("POST","/rewards/rates",e),getMedia:()=>J("GET","/media"),createMedia:e=>J("POST","/media",e),updateMedia:(e,r)=>J("PUT",`/media/${e}`,r),deleteMedia:e=>J("DELETE",`/media/${e}`),restoreMedia:e=>J("POST",`/media/${e}/restore`),getDecks:()=>J("GET","/spiritual/decks"),createDeck:e=>J("POST","/spiritual/decks",e),deleteDeck:e=>J("DELETE",`/spiritual/decks/${e}`),getGoldenGoals:()=>J("GET","/golden/goals"),getGoldenGoal:e=>J("GET",`/golden/goals/${e}`),createGolden:e=>J("POST","/golden/goals",e),updateGolden:(e,r)=>J("PUT",`/golden/goals/${e}`,r),achieveGolden:e=>J("POST",`/golden/goals/${e}/achieve`),unachieveGolden:e=>J("POST",`/golden/goals/${e}/unachieve`),upsertGoldenEntry:(e,r)=>J("PUT",`/golden/goals/${e}/entry`,r),deleteGolden:e=>J("DELETE",`/golden/goals/${e}`),restoreGolden:e=>J("POST",`/golden/goals/${e}/restore`),logTesla369:e=>J("POST",`/golden/goals/${e}/369/log`),undoTesla369:e=>J("DELETE",`/golden/goals/${e}/369/log`),getKickstart:()=>J("GET","/kickstart/videos"),createKickstart:e=>J("POST","/kickstart/videos",e),updateKickstart:(e,r)=>J("PUT",`/kickstart/videos/${e}`,r),deleteKickstart:e=>J("DELETE",`/kickstart/videos/${e}`),restoreKickstart:e=>J("POST",`/kickstart/videos/${e}/restore`),getTxns:()=>J("GET","/finance/txns"),createTxn:e=>J("POST","/finance/txns",e),updateTxn:(e,r)=>J("PUT",`/finance/txns/${e}`,r),deleteTxn:e=>J("DELETE",`/finance/txns/${e}`),restoreTxn:e=>J("POST",`/finance/txns/${e}/restore`),getInvestments:()=>J("GET","/finance/investments"),createInvestment:e=>J("POST","/finance/investments",e),updateInvestment:(e,r)=>J("PUT",`/finance/investments/${e}`,r),deleteInvestment:e=>J("DELETE",`/finance/investments/${e}`),restoreInvestment:e=>J("POST",`/finance/investments/${e}/restore`),getFixedItems:()=>J("GET","/finance/fixed-items"),createFixedItem:e=>J("POST","/finance/fixed-items",e),updateFixedItem:(e,r)=>J("PUT",`/finance/fixed-items/${e}`,r),deleteFixedItem:e=>J("DELETE",`/finance/fixed-items/${e}`),getExpenses:()=>J("GET","/expenses"),createExpenseCategory:e=>J("POST","/expenses/categories",e),updateExpenseCategory:(e,r)=>J("PUT",`/expenses/categories/${e}`,r),arrangeExpenseCategories:e=>J("PUT","/expenses/categories/arrange",{order:e}),deleteExpenseCategory:e=>J("DELETE",`/expenses/categories/${e}`),createExpenseLog:e=>J("POST","/expenses/logs",e),updateExpenseLog:(e,r)=>J("PUT",`/expenses/logs/${e}`,r),deleteExpenseLog:e=>J("DELETE",`/expenses/logs/${e}`),restoreExpenseLog:e=>J("POST",`/expenses/logs/${e}/restore`),getTrades:()=>J("GET","/trades"),createTradeEntry:e=>J("POST","/trades/entries",e),updateTradeEntry:(e,r)=>J("PUT",`/trades/entries/${e}`,r),bookTradeEntry:(e,r,n)=>J("POST",`/trades/entries/${e}/book`,{outcome:r,date:n}),reopenTradeEntry:e=>J("POST",`/trades/entries/${e}/reopen`),deleteTradeEntry:e=>J("DELETE",`/trades/entries/${e}`),setTradeLearning:(e,r)=>J("PUT","/trades/learning",{date:e,learning:r}),getSetting:e=>J("GET",`/settings/${e}`),setSetting:(e,r)=>J("PUT",`/settings/${e}`,{value:r}),getTasks:()=>J("GET","/tasks"),createTask:e=>J("POST","/tasks",e),updateTask:(e,r)=>J("PUT",`/tasks/${e}`,r),deleteTask:e=>J("DELETE",`/tasks/${e}`),restoreTask:e=>J("POST",`/tasks/${e}/restore`),scheduleTask:e=>J("PUT",`/tasks/${e}/schedule`),getGoals:e=>J("GET",`/goals${e?`?pillar=${encodeURIComponent(e)}`:""}`),createGoal:e=>J("POST","/goals",e),updateGoal:(e,r)=>J("PUT",`/goals/${e}`,r),deleteGoal:e=>J("DELETE",`/goals/${e}`),restoreGoal:e=>J("POST",`/goals/${e}/restore`),getHabits:()=>J("GET","/habits"),createHabit:e=>J("POST","/habits",e),updateHabit:(e,r)=>J("PUT",`/habits/${e}`,r),deleteHabit:e=>J("DELETE",`/habits/${e}`),restoreHabit:e=>J("POST",`/habits/${e}/restore`),toggleHabitLog:(e,r)=>J("POST",`/habits/${e}/log/${r}`),setHabitLogNote:(e,r,n)=>J("PUT",`/habits/${e}/log/${r}/note`,{note:n}),setHabitLogCount:(e,r,n,o)=>J("PUT",`/habits/${e}/log/${r}/count`,{count:n,note:o}),incrementHabitLog:(e,r)=>J("POST",`/habits/${e}/log/${r}/increment`),clearHabitLog:(e,r)=>J("DELETE",`/habits/${e}/log/${r}`),getHabitsYearly:e=>J("GET",`/habits/yearly/${e}`),getJournalEntry:e=>J("GET",`/journal/${e}`),getJournalHistory:(e,r)=>J("GET",`/journal/history/${e}/${r}`),updateJournalMood:(e,r)=>J("PUT",`/journal/${e}`,{mood:r}),addJournalBullet:(e,r,n)=>J("POST",`/journal/${e}/bullets`,{section:r,text:n}),deleteJournalBullet:e=>J("DELETE",`/journal/bullets/${e}`),getSkills:()=>J("GET","/skills"),createSkill:e=>J("POST","/skills",e),updateSkill:(e,r)=>J("PUT",`/skills/${e}`,r),deleteSkill:e=>J("DELETE",`/skills/${e}`),restoreSkill:e=>J("POST",`/skills/${e}/restore`),addSkillNote:(e,r,n,o=null)=>J("POST",`/skills/${e}/notes`,{stage:r,text:n,grp:o}),setSkillGroups:(e,r)=>J("PUT",`/skills/${e}/groups`,{groups:r}),deleteSkillNote:e=>J("DELETE",`/skill-notes/${e}`),updateSkillNote:(e,r)=>J("PUT",`/skill-notes/${e}`,{text:r}),toggleSkillNote:e=>J("PUT",`/skill-notes/${e}/toggle`),completeSkillStage:(e,r)=>J("POST",`/skills/${e}/complete-stage`,{stage:r}),getScriptures:()=>J("GET","/scriptures"),createScripture:e=>J("POST","/scriptures",e),deleteScripture:e=>J("DELETE",`/scriptures/${e}`),restoreScripture:e=>J("POST",`/scriptures/${e}/restore`),addChapter:(e,r)=>J("POST",`/scriptures/${e}/chapters`,r),updateChapter:(e,r)=>J("PUT",`/chapters/${e}`,r),deleteChapter:e=>J("DELETE",`/chapters/${e}`),restoreChapter:e=>J("POST",`/chapters/${e}/restore`),addInsight:(e,r)=>J("POST",`/chapters/${e}/insights`,{text:r}),deleteInsight:e=>J("DELETE",`/insights/${e}`),getTopics:()=>J("GET","/revision/topics"),createTopic:e=>J("POST","/revision/topics",e),updateTopic:(e,r)=>J("PUT",`/revision/topics/${e}`,r),deleteTopic:e=>J("DELETE",`/revision/topics/${e}`),restoreTopic:e=>J("POST",`/revision/topics/${e}/restore`),getDueToday:()=>J("GET","/revision/due-today"),getCalendar:(e,r)=>J("GET",`/revision/calendar/${e}/${r}`),toggleReviewDone:e=>J("PUT",`/revision/reviews/${e}/done`),getAffirmations:()=>J("GET","/affirmations"),createAffirmation:e=>J("POST","/affirmations",e),updateAffirmation:(e,r)=>J("PUT",`/affirmations/${e}`,r),deleteAffirmation:e=>J("DELETE",`/affirmations/${e}`),restoreAffirmation:e=>J("POST",`/affirmations/${e}/restore`),getBucket:()=>J("GET","/bucket"),createBucketWish:e=>J("POST","/bucket",e),updateBucketWish:(e,r)=>J("PUT",`/bucket/${e}`,r),fulfillBucketWish:e=>J("POST",`/bucket/${e}/fulfill`),arrangeBucket:e=>J("PUT","/bucket/arrange",{order:e}),deleteBucketWish:e=>J("DELETE",`/bucket/${e}`),restoreBucketWish:e=>J("POST",`/bucket/${e}/restore`),getChallenges:()=>J("GET","/challenges"),createChallenge:e=>J("POST","/challenges",e),updateChallenge:(e,r)=>J("PUT",`/challenges/${e}`,r),deleteChallenge:e=>J("DELETE",`/challenges/${e}`),restoreChallenge:e=>J("POST",`/challenges/${e}/restore`),getAchievements:()=>J("GET","/achievements"),createAchievement:e=>J("POST","/achievements",e),updateAchievement:(e,r)=>J("PUT",`/achievements/${e}`,r),deleteAchievement:e=>J("DELETE",`/achievements/${e}`),restoreAchievement:e=>J("POST",`/achievements/${e}/restore`),getDelight:()=>J("GET","/delight"),createCollection:e=>J("POST","/delight/collections",e),updateCollection:(e,r)=>J("PUT",`/delight/collections/${e}`,r),deleteCollection:e=>J("DELETE",`/delight/collections/${e}`),restoreCollection:e=>J("POST",`/delight/collections/${e}/restore`),createDelightItem:(e,r)=>J("POST",`/delight/collections/${e}/items`,r),updateDelightItem:(e,r)=>J("PUT",`/delight/items/${e}`,r),deleteDelightItem:e=>J("DELETE",`/delight/items/${e}`),restoreDelightItem:e=>J("POST",`/delight/items/${e}/restore`),arrangeDelight:(e,r)=>J("PUT",`/delight/collections/${e}/arrange`,{order:r})},mc=[{code:"INR",symbol:"₹",locale:"en-IN",label:"Indian Rupee"},{code:"USD",symbol:"$",locale:"en-US",label:"US Dollar"},{code:"EUR",symbol:"€",locale:"de-DE",label:"Euro"},{code:"GBP",symbol:"£",locale:"en-GB",label:"British Pound"},{code:"JPY",symbol:"¥",locale:"ja-JP",label:"Japanese Yen"},{code:"AED",symbol:"د.إ",locale:"en-AE",label:"UAE Dirham"},{code:"AUD",symbol:"A$",locale:"en-AU",label:"Australian Dollar"},{code:"CAD",symbol:"C$",locale:"en-CA",label:"Canadian Dollar"},{code:"SGD",symbol:"S$",locale:"en-SG",label:"Singapore Dollar"}],Gu="INR",Th="anvil_currency",wa=e=>mc.find(r=>r.code===e)||mc[0];function ai(){try{return localStorage.getItem(Th)||Gu}catch{return Gu}}function Uu(e){try{localStorage.setItem(Th,e)}catch{}return window.dispatchEvent(new CustomEvent("anvil-currency",{detail:e})),e}function js(e,r){const n=wa(r||ai()),o=Math.round(Number(e)||0);return n.symbol+o.toLocaleString(n.locale)}function Or(e,r){const n=wa(r||ai()),o=Number(e)||0;return n.symbol+o.toLocaleString(n.locale,{minimumFractionDigits:2,maximumFractionDigits:2})}function Vu(e,r){const n=wa(r||ai()),o=Math.round(Number(e)||0),i=Math.abs(o);return n.code==="INR"?i>=1e7?n.symbol+(o/1e7).toFixed(i>=1e8?0:1)+"Cr":i>=1e5?n.symbol+(o/1e5).toFixed(i>=1e6?0:1)+"L":i>=1e3?n.symbol+(o/1e3).toFixed(i>=1e4?0:1)+"K":n.symbol+o:i>=1e9?n.symbol+(o/1e9).toFixed(1)+"B":i>=1e6?n.symbol+(o/1e6).toFixed(1)+"M":i>=1e3?n.symbol+(o/1e3).toFixed(1)+"K":n.symbol+o}function Jn(){const[e,r]=c.useState(ai());return c.useEffect(()=>{const n=o=>r(o.detail||ai());return window.addEventListener("anvil-currency",n),()=>window.removeEventListener("anvil-currency",n)},[]),wa(e)}const Vt={financial:{label:"Financial",leaf:"#C9A227",shape:"round"},academic:{label:"Academic",leaf:"#3A7CA5",shape:"pine"},relationship:{label:"Relationship",leaf:"#C2536B",shape:"round"},spiritual:{label:"Spiritual",leaf:"#8268B0",shape:"tall"},health:{label:"Health",leaf:"#4C9A6B",shape:"round"}},rn="health";function Rg({species:e=rn,progress:r=1,withered:n=!1,size:o=200}){const i=Math.max(0,Math.min(1,r)),s=Vt[e]||Vt[rn],l=n?"#8A7B63":"#7A5A3C",a=n?"#A99C84":s.leaf,d=n?"#8F8268":a,g=14+i*46,m=112-g,f=i>.14,h=f?8+i*30:0;return t.jsxs("svg",{viewBox:"0 0 120 120",width:o,height:o,style:{display:"block"},children:[t.jsx("ellipse",{cx:"60",cy:"114",rx:20+i*14,ry:"5",fill:"rgba(38,36,31,0.08)"}),!f&&t.jsxs("g",{transform:`translate(60 ${112-i*40})`,children:[t.jsx("path",{d:"M0 8 C0 8 0 -2 0 -6",stroke:"#4C9A6B",strokeWidth:"2.5",fill:"none"}),t.jsx("ellipse",{cx:"-5",cy:"-4",rx:"6",ry:"3.5",fill:"#4C9A6B",transform:"rotate(-30 -5 -4)"}),t.jsx("ellipse",{cx:"5",cy:"-4",rx:"6",ry:"3.5",fill:"#5BB07E",transform:"rotate(30 5 -4)"})]}),f&&t.jsxs(t.Fragment,{children:[t.jsx("rect",{x:60-(2+i*2.5),y:m,width:(2+i*2.5)*2,height:g,rx:"2",fill:l}),s.shape==="pine"?t.jsxs(t.Fragment,{children:[t.jsx("polygon",{points:`60,${m-h*2.2} ${60-h},${m+4} ${60+h},${m+4}`,fill:a}),t.jsx("polygon",{points:`60,${m-h*3} ${60-h*.8},${m-h*.7} ${60+h*.8},${m-h*.7}`,fill:d})]}):s.shape==="tall"?t.jsxs(t.Fragment,{children:[t.jsx("ellipse",{cx:"60",cy:m-h*.3,rx:h*.78,ry:h*1.55,fill:a}),t.jsx("ellipse",{cx:"60",cy:m-h*.9,rx:h*.5,ry:h*1,fill:d,opacity:"0.9"})]}):t.jsxs(t.Fragment,{children:[t.jsx("circle",{cx:"60",cy:m,r:h,fill:a}),t.jsx("circle",{cx:60-h*.7,cy:m+h*.3,r:h*.78,fill:a}),t.jsx("circle",{cx:60+h*.7,cy:m+h*.3,r:h*.78,fill:d}),t.jsx("circle",{cx:"60",cy:m-h*.5,r:h*.8,fill:d,opacity:"0.92"})]})]})]})}function I0({species:e}){return t.jsx(Rg,{species:e,progress:1,size:56})}const Gs="#C9A227",Yu="#3A7CA5",Ku="#C2536B",Qu=new Set(["worth","achievements"]),B0=()=>{const e=new Date,r=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${r(e.getMonth()+1)}-${r(e.getDate())}`},Xt=B0(),R0={kickstart:"Kickstart",golden:"Golden Book",habits:"Habits",quadrant:"Quadrant",goals:"Goals",grove:"Grove",worth:"Rewards",vault:"Wallet",expenses:"Expenses",journal:"Journal",revision:"Revision",affirmations:"Affirmations",skills:"Skills",spiritual:"Spiritual",mindscape:"Mindscape",achievements:"Achievements",delight:"Delights"},hc=e=>{const r=Math.round(e||0),n=Math.floor(r/60),o=r%60;return n?`${n}h ${o}m`:`${o}m`},E0=e=>hc((e||0)/60),qu=[{id:"Q1",label:"Do Now"},{id:"Q2",label:"Schedule"},{id:"Q3",label:"Delegate"},{id:"Q4",label:"Drop"}],Xu=["Financial","Academic","Relationship","Health","Spiritual"];function F0({onNavigate:e}){var br,pt;const r=Jn(),n=H=>Or(H,r.code),[o,i]=c.useState(!1),[s,l]=c.useState([]),[a,d]=c.useState([]),[g,m]=c.useState({sessions:[],stats:{}}),[f,h]=c.useState([]),[B,R]=c.useState([]),[z,S]=c.useState([]),[p,b]=c.useState([]),[u,k]=c.useState({}),[x,T]=c.useState({}),[E,w]=c.useState([]),[j,Y]=c.useState([]),[q,te]=c.useState([]),[he,G]=c.useState([]),[ue,pe]=c.useState([]),ze=c.useCallback(()=>{Promise.all([F.getHabits().catch(()=>[]),F.getTasks().catch(()=>[]),F.getFocus().catch(()=>({sessions:[],stats:{}})),F.getScreenTime().catch(()=>[]),F.getRewardRates().catch(()=>[]),F.getPayouts().catch(()=>[]),F.getAchievements().catch(()=>[]),F.getSetting("grove_rates").catch(()=>null),F.getSetting("reward_rates").catch(()=>null),F.getExpenses().catch(()=>({categories:[],logs:[]})),F.getInvestments().catch(()=>[]),F.getDueToday().catch(()=>[]),F.getSkills().catch(()=>[])]).then(([H,je,Mt,Pt,ir,Cr,Cn,zr,on,sr,eo,zn,pi])=>{l(H||[]),d(je||[]),m(Mt||{sessions:[],stats:{}}),h(Array.isArray(Pt)?Pt:[]),R(ir||[]),S(Cr||[]),b(Array.isArray(Cn)?Cn:[]),k((zr==null?void 0:zr.value)||{}),T((on==null?void 0:on.value)||{}),w((sr==null?void 0:sr.categories)||[]),Y((sr==null?void 0:sr.logs)||[]),te(eo||[]),G(zn||[]),pe(pi||[]),i(!0)}).catch(()=>i(!0))},[]);c.useEffect(()=>{ze()},[ze]);const re=s.filter(H=>(H.logs||[]).includes(Xt)).length;a.filter(H=>(H.start_datetime||"").slice(0,10)===Xt);const U=c.useMemo(()=>{const H={Q1:0,Q2:0,Q3:0,Q4:0};return a.forEach(je=>{H[je.quadrant]!==void 0&&H[je.quadrant]++}),H},[a]),de=((br=g.stats)==null?void 0:br.today_minutes)||0,X=((pt=g.stats)==null?void 0:pt.today_trees)||0,I={};B.forEach(H=>{var je;(I[je=`${H.kind}:${H.rkey}`]||(I[je]=[])).push({eff:H.eff_date,rate:H.rate})}),Object.values(I).forEach(H=>H.sort((je,Mt)=>je.eff.localeCompare(Mt.eff)));const A=(H,je,Mt)=>{const Pt=I[`${H}:${je}`];if(Pt){let ir=null;for(const Cr of Pt)if(Cr.eff<=Mt)ir=Cr.rate;else break;if(ir!==null)return ir}return(H==="focus"?u[je]:x[je])||0};let P=0,$=0;(g.sessions||[]).filter(H=>H.completed).forEach(H=>{const je=(H.started_at||H.created_at||"").slice(0,10);if(je!==Xt)return;const Mt=Vt[H.tree]?H.tree:rn;P+=(H.actual_min||0)/60*A("focus",Mt,je)}),f.forEach(H=>{!Qu.has(H.screen)&&H.date===Xt&&($+=H.seconds/60*A("usage",H.screen,H.date))});const ce=p.filter(H=>H.date===Xt&&(H.reward||0)>0).reduce((H,je)=>H+(je.reward||0),0),De=P+$+ce,Q=De>0?P/De*100:0,ie=De>0?$/De*100:0,O=De>0?ce/De*100:0;let ee=0,fe=0;(g.sessions||[]).filter(H=>H.completed).forEach(H=>{const je=(H.started_at||H.created_at||"").slice(0,10),Mt=Vt[H.tree]?H.tree:rn;ee+=(H.actual_min||0)/60*A("focus",Mt,je)}),f.forEach(H=>{Qu.has(H.screen)||(fe+=H.seconds/60*A("usage",H.screen,H.date))});const M=p.reduce((H,je)=>H+(je.reward||0),0),y=z.reduce((H,je)=>H+je.amount,0),ne=Math.max(0,ee+fe+M-y),ge=j.filter(H=>H.date===Xt).reduce((H,je)=>H+je.amount,0);c.useMemo(()=>Object.fromEntries(E.map(H=>[H.id,H])),[E]);const We=q.filter(H=>H.date===Xt||H.start_date===Xt).reduce((H,je)=>H+(je.invested||0),0),Xe=c.useMemo(()=>{const H={};return f.forEach(je=>{je.date===Xt&&(H[je.screen]=(H[je.screen]||0)+je.seconds)}),Object.entries(H).filter(([,je])=>je>0).sort((je,Mt)=>Mt[1]-je[1])},[f]),dt=H=>f.some(je=>je.screen===H&&je.date===Xt&&je.seconds>0),$e=dt("spiritual"),rt=dt("affirmations"),Qe=c.useMemo(()=>{const H=[];return ue.forEach(je=>Object.values(je.notes||{}).forEach(Mt=>Mt.forEach(Pt=>{(Pt.created_at||"").slice(0,10)===Xt&&H.push({...Pt,skill:je.title})}))),H},[ue]),at=dt("kickstart"),se=dt("mindscape"),Me=p.filter(H=>H.date===Xt),[qe,nt]=c.useState(null),[ct,Ft]=c.useState(null),[zt,yt]=c.useState(null),[mt,wt]=c.useState(null),Sr=H=>F.toggleHabitLog(H.id,Xt).then(ze).catch(()=>{}),v=async()=>{const H=qe.title.trim();H&&(await F.createTask({pillar:qe.pillar,title:H,quadrant:qe.quadrant,time_estimate_min:Number(qe.time_estimate_min)||30,start_datetime:null,goal_id:null}),nt(null),ze())},le=async()=>{await F.createFocus({label:ct.label.trim()||null,tree:ct.tree,duration_min:Number(ct.duration_min)||25}),Ft(null),ze()},Pe=async()=>{const H=parseFloat(zt.amount)||0;H<=0||!zt.category_id||(await F.createExpenseLog({category_id:Number(zt.category_id),amount:H,note:zt.note.trim(),date:Xt}),yt(null),ze())},Le=async()=>{const H=mt.name.trim(),je=parseFloat(mt.invested)||0;!H||je<=0||(await F.createInvestment({name:H,kind:mt.kind,invested:je,current_value:je,note:mt.note.trim(),date:Xt}),wt(null),ze())},Je=H=>e&&e(H);return o?t.jsxs("div",{style:ye.page,children:[t.jsxs("div",{style:ye.head,children:[t.jsx("div",{style:ye.eyebrow,children:"Anvil · Today"}),t.jsx("h1",{style:ye.h1,children:"Dashboard"}),t.jsx("div",{style:ye.subhead,children:new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})})]}),t.jsx(To,{title:"Used today",onClick:()=>{},children:Xe.length===0?t.jsx(Us,{children:"Nothing opened yet today."}):t.jsx("div",{style:ye.chipWrap,children:Xe.map(([H,je])=>t.jsxs("button",{onClick:()=>Je(H),style:ye.usedChip,children:[R0[H]||H," ",t.jsx("span",{style:ye.usedChipTime,children:E0(je)})]},H))})}),t.jsxs("div",{style:ye.statGrid,children:[t.jsx(Vs,{icon:gc,color:"#4C9A6B",label:"Habits done",value:`${re}/${s.length}`,onClick:()=>Je("habits")}),t.jsx(Vs,{icon:pc,color:Gs,label:X?`Focus · ${X} tree${X===1?"":"s"}`:"Focus time",value:hc(de),onClick:()=>Je("grove")}),t.jsx(Vs,{icon:Zl,color:"#C9772E",label:"Spent today",value:Or(ge,r.code),onClick:()=>Je("expenses")}),t.jsx(Vs,{icon:ka,color:"#8268B0",label:"Invested today",value:Or(We,r.code),onClick:()=>Je("vault")})]}),t.jsx(To,{title:"Rewards",eyebrow:`Pending ${n(ne)}`,onClick:()=>Je("worth"),children:De>0?t.jsxs("div",{style:ye.pieWrap,children:[t.jsxs("div",{style:ye.pieChart,children:[t.jsx("div",{style:{...ye.pieDisc,background:`conic-gradient(${Gs} 0 ${Q}%, ${Yu} ${Q}% ${Q+ie}%, ${Ku} ${Q+ie}% 100%)`}}),t.jsxs("div",{style:ye.pieHole,children:[t.jsx("span",{style:ye.pieHoleVal,children:n(De)}),t.jsx("span",{style:ye.pieHoleLbl,children:"today"})]})]}),t.jsxs("div",{style:ye.pieLegend,children:[t.jsx(Xa,{color:Gs,label:"Focus",pct:Q,val:n(P)}),t.jsx(Xa,{color:Yu,label:"Usage",pct:ie,val:n($)}),t.jsx(Xa,{color:Ku,label:"Achievement",pct:O,val:n(ce)})]})]}):t.jsx(Us,{children:"No rewards earned yet today."})}),he.length>0&&t.jsx(To,{title:"Revision due",eyebrow:`${he.length} pending`,onClick:()=>Je("revision"),children:t.jsx("div",{style:ye.rows,children:he.slice(0,5).map(H=>t.jsxs("div",{style:ye.row,children:[t.jsx("span",{style:{...ye.dot,background:H.is_missed?"#C2536B":"#C9A227"}}),t.jsx("span",{style:ye.rowName,children:H.topic}),t.jsxs("span",{style:ye.rowMeta,children:["Stage ",H.stage]})]},H.review_id))})}),t.jsxs("div",{style:ye.cardGrid,children:[t.jsx(Ys,{icon:Yi,color:"#8268B0",label:"Spiritual",done:$e,doneText:"Read today",idleText:"Not opened yet",onClick:()=>Je("spiritual")}),t.jsx(Ys,{icon:Co,color:"#C9A227",label:"Affirmations",done:rt,doneText:"Read today",idleText:"Not opened yet",onClick:()=>Je("affirmations")}),t.jsx(Ys,{icon:xh,color:"#C9772E",label:"Kickstart",done:at,doneText:"Watched today",idleText:"Not watched yet",onClick:()=>Je("kickstart")}),t.jsx(Ys,{icon:gh,color:"#3A7CA5",label:"Mindscape",done:se,doneText:"Listened today",idleText:"Not listened yet",onClick:()=>Je("mindscape")})]}),t.jsx(To,{title:"Skills enhanced",eyebrow:Qe.length?`${Qe.length} note${Qe.length===1?"":"s"}`:null,onClick:()=>Je("skills"),children:Qe.length===0?t.jsx(Us,{children:"No skill notes added today."}):t.jsx("div",{style:ye.rows,children:Qe.slice(0,5).map(H=>t.jsxs("div",{style:ye.row,children:[t.jsx("span",{style:{...ye.dot,background:"#4C9A6B"}}),t.jsx("span",{style:ye.rowName,children:H.text}),t.jsx("span",{style:ye.rowMeta,children:H.skill})]},H.id))})}),Me.length>0&&t.jsx(To,{title:"Achievements today",eyebrow:`${Me.length}`,onClick:()=>Je("achievements"),children:t.jsx("div",{style:ye.rows,children:Me.map(H=>t.jsxs("div",{style:ye.row,children:[t.jsx("span",{style:{...ye.dot,background:"#C2536B"}}),t.jsx("span",{style:ye.rowName,children:H.title}),H.reward>0&&t.jsx("span",{style:ye.rowAmt,children:n(H.reward)})]},H.id))})}),t.jsx(To,{title:"Wallet status",onClick:()=>Je("vault"),children:t.jsxs("div",{style:ye.walletRow,children:[t.jsxs("div",{style:ye.walletStat,children:[t.jsx("div",{style:{...ye.walletVal,color:"#C9772E"},children:Or(ge,r.code)}),t.jsx("div",{style:ye.walletLbl,children:"Spent today"})]}),t.jsxs("div",{style:ye.walletStat,children:[t.jsx("div",{style:{...ye.walletVal,color:"#8268B0"},children:Or(We,r.code)}),t.jsx("div",{style:ye.walletLbl,children:"Invested today"})]}),t.jsxs("div",{style:ye.walletStat,children:[t.jsx("div",{style:ye.walletVal,children:Or(ne,r.code)}),t.jsx("div",{style:ye.walletLbl,children:"Rewards pending"})]})]})}),t.jsx("div",{style:ye.quickHead,children:"Quick log"}),t.jsxs("div",{style:ye.cardGrid,children:[t.jsxs("div",{style:ye.quickCard,children:[t.jsxs("div",{style:ye.quickTitle,children:[t.jsx(gc,{size:15,color:"#4C9A6B"})," Habits"]}),s.length===0?t.jsx(Us,{children:"No habits yet."}):t.jsx("div",{style:ye.habitList,children:s.slice(0,6).map(H=>{const je=(H.logs||[]).includes(Xt);return t.jsxs("button",{onClick:()=>Sr(H),style:{...ye.habitChip,...je?ye.habitChipOn:{}},children:[je&&t.jsx(jn,{size:12})," ",H.name]},H.id)})})]}),t.jsxs("div",{style:ye.quickCard,children:[t.jsxs("div",{style:ye.quickTitle,children:[t.jsx(wg,{size:15,color:"#3A7CA5"})," Quadrant"]}),t.jsx("div",{style:ye.quadGrid,children:qu.map(H=>t.jsxs("div",{style:ye.quadCell,children:[t.jsx("span",{style:ye.quadLabel,children:H.label}),t.jsx("span",{style:ye.quadCount,children:U[H.id]})]},H.id))}),t.jsxs("button",{onClick:()=>nt({title:"",pillar:Xu[0],quadrant:"Q1",time_estimate_min:30}),style:ye.quickAddBtn,children:[t.jsx(st,{size:14})," Add task"]})]}),t.jsxs("div",{style:ye.quickCard,children:[t.jsxs("div",{style:ye.quickTitle,children:[t.jsx(pc,{size:15,color:Gs})," Grove focus"]}),t.jsxs("div",{style:ye.quickStat,children:[hc(de)," today"]}),t.jsxs("button",{onClick:()=>Ft({label:"",tree:rn,duration_min:25}),style:ye.quickAddBtn,children:[t.jsx(st,{size:14})," Start session"]})]}),t.jsxs("div",{style:ye.quickCard,children:[t.jsxs("div",{style:ye.quickTitle,children:[t.jsx(Zl,{size:15,color:"#C9772E"})," Expense / Investment"]}),t.jsxs("div",{style:ye.quickStat,children:[Or(ge,r.code)," spent today"]}),t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsxs("button",{onClick:()=>{var H;return yt({category_id:((H=E[0])==null?void 0:H.id)||"",amount:"",note:""})},style:{...ye.quickAddBtn,flex:1},children:[t.jsx(st,{size:14})," Expense"]}),t.jsxs("button",{onClick:()=>wt({name:"",kind:"Stocks",invested:"",note:""}),style:{...ye.quickAddBtn,flex:1},children:[t.jsx(st,{size:14})," Invest"]})]})]})]}),qe&&t.jsxs(Ks,{title:"Add task",onClose:()=>nt(null),children:[t.jsx("input",{autoFocus:!0,placeholder:"Task title",value:qe.title,onChange:H=>nt(je=>({...je,title:H.target.value})),style:ye.input}),t.jsx("select",{value:qe.pillar,onChange:H=>nt(je=>({...je,pillar:H.target.value})),style:ye.input,children:Xu.map(H=>t.jsx("option",{value:H,children:H},H))}),t.jsx("select",{value:qe.quadrant,onChange:H=>nt(je=>({...je,quadrant:H.target.value})),style:ye.input,children:qu.map(H=>t.jsxs("option",{value:H.id,children:[H.id," · ",H.label]},H.id))}),t.jsx("input",{type:"number",min:"1",placeholder:"Estimate (min)",value:qe.time_estimate_min,onChange:H=>nt(je=>({...je,time_estimate_min:H.target.value})),style:ye.input}),t.jsx(Qs,{onCancel:()=>nt(null),onSave:v,disabled:!qe.title.trim()})]}),ct&&t.jsxs(Ks,{title:"Start focus session",onClose:()=>Ft(null),children:[t.jsx("input",{autoFocus:!0,placeholder:"Label (optional)",value:ct.label,onChange:H=>Ft(je=>({...je,label:H.target.value})),style:ye.input}),t.jsx("select",{value:ct.tree,onChange:H=>Ft(je=>({...je,tree:H.target.value})),style:ye.input,children:Object.entries(Vt).map(([H,je])=>t.jsx("option",{value:H,children:je.label},H))}),t.jsx("input",{type:"number",min:"1",placeholder:"Duration (min)",value:ct.duration_min,onChange:H=>Ft(je=>({...je,duration_min:H.target.value})),style:ye.input}),t.jsx(Qs,{onCancel:()=>Ft(null),onSave:le,disabled:!Number(ct.duration_min)})]}),zt&&t.jsxs(Ks,{title:"Log expense",onClose:()=>yt(null),children:[t.jsx("select",{value:zt.category_id,onChange:H=>yt(je=>({...je,category_id:H.target.value})),style:ye.input,children:E.map(H=>t.jsx("option",{value:H.id,children:H.name},H.id))}),t.jsx("input",{autoFocus:!0,type:"number",min:"0",step:"0.01",placeholder:`Amount (${r.symbol})`,value:zt.amount,onChange:H=>yt(je=>({...je,amount:H.target.value})),style:ye.input}),t.jsx("input",{placeholder:"Note (optional)",value:zt.note,onChange:H=>yt(je=>({...je,note:H.target.value})),style:ye.input}),t.jsx(Qs,{onCancel:()=>yt(null),onSave:Pe,disabled:!(parseFloat(zt.amount)>0&&zt.category_id)})]}),mt&&t.jsxs(Ks,{title:"Log investment",onClose:()=>wt(null),children:[t.jsx("input",{autoFocus:!0,placeholder:"Name",value:mt.name,onChange:H=>wt(je=>({...je,name:H.target.value})),style:ye.input}),t.jsx("select",{value:mt.kind,onChange:H=>wt(je=>({...je,kind:H.target.value})),style:ye.input,children:["Stocks","Mutual Fund","Gold","Real Estate","Fixed Deposit","Crypto","Other"].map(H=>t.jsx("option",{value:H,children:H},H))}),t.jsx("input",{type:"number",min:"0",step:"0.01",placeholder:`Invested (${r.symbol})`,value:mt.invested,onChange:H=>wt(je=>({...je,invested:H.target.value})),style:ye.input}),t.jsx("input",{placeholder:"Note (optional)",value:mt.note,onChange:H=>wt(je=>({...je,note:H.target.value})),style:ye.input}),t.jsx(Qs,{onCancel:()=>wt(null),onSave:Le,disabled:!(mt.name.trim()&&parseFloat(mt.invested)>0)})]})]}):t.jsx("div",{style:ye.loading,children:"Loading…"})}function To({title:e,eyebrow:r,onClick:n,children:o}){return t.jsxs("div",{style:ye.card,children:[t.jsxs("div",{style:ye.cardTitleRow,children:[t.jsxs("button",{onClick:n,style:ye.cardTitleBtn,children:[e," ",t.jsx(wy,{size:13})]}),r&&t.jsx("span",{style:ye.cardEyebrow,children:r})]}),o]})}function Us({children:e}){return t.jsx("div",{style:ye.muted,children:e})}function Xa({color:e,label:r,pct:n,val:o}){return t.jsxs("div",{style:ye.pieLegRow,children:[t.jsx("span",{style:{...ye.legendDot,background:e}}),t.jsx("span",{style:ye.pieLegName,children:r}),t.jsxs("span",{style:ye.pieLegPct,children:[Math.round(n),"%"]}),t.jsx("span",{style:ye.pieLegMin,children:o})]})}function Vs({icon:e,color:r,label:n,value:o,sub:i,onClick:s}){return t.jsxs("button",{onClick:s,style:ye.statTile,children:[t.jsx("div",{style:{...ye.statIcon,background:`${r}1A`,color:r},children:t.jsx(e,{size:17})}),t.jsxs("div",{style:{minWidth:0},children:[t.jsx("div",{style:ye.statVal,children:o}),t.jsxs("div",{style:ye.statLbl,children:[n,i?` · ${i}`:""]})]})]})}function Ys({icon:e,color:r,label:n,done:o,doneText:i,idleText:s,onClick:l}){return t.jsxs("button",{onClick:l,style:ye.miniCard,children:[t.jsx("div",{style:{...ye.statIcon,background:`${r}1A`,color:r},children:t.jsx(e,{size:16})}),t.jsx("div",{style:ye.miniLabel,children:n}),t.jsx("div",{style:{...ye.miniStatus,color:o?"#4C9A6B":"var(--text-3)"},children:o?i:s})]})}function Ks({title:e,onClose:r,children:n}){return t.jsx("div",{style:ye.modalOverlay,onClick:r,children:t.jsxs("div",{style:ye.modalCard,onClick:o=>o.stopPropagation(),children:[t.jsx("div",{style:ye.modalTitle,children:e}),t.jsx("div",{style:ye.modalBody,children:n})]})})}function Qs({onCancel:e,onSave:r,disabled:n}){return t.jsxs("div",{style:ye.modalActions,children:[t.jsx("button",{onClick:e,style:ye.modalCancel,children:"Cancel"}),t.jsx("button",{onClick:r,disabled:n,style:{...ye.modalConfirm,...n?{opacity:.5,cursor:"not-allowed"}:{}},children:"Save"})]})}const ye={loading:{padding:40,textAlign:"center",color:"var(--text-3)",fontFamily:"'Inter',system-ui,sans-serif"},page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},chipWrap:{display:"flex",gap:8,flexWrap:"wrap"},usedChip:{border:"1px solid var(--border)",background:"var(--surface-2)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",gap:6},usedChipTime:{color:"var(--text-3)",fontWeight:600,fontSize:11.5},statGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:10,marginBottom:14},statTile:{display:"flex",alignItems:"center",gap:10,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,padding:"12px 14px",cursor:"pointer",fontFamily:"inherit",textAlign:"left",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},statIcon:{width:34,height:34,borderRadius:10,display:"grid",placeItems:"center",flexShrink:0},statVal:{fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},card:{background:"var(--surface)",borderRadius:16,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,marginBottom:10},cardTitleBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"'Fraunces',Georgia,serif",fontSize:16,fontWeight:700,color:"var(--text)"},cardEyebrow:{fontSize:12,fontWeight:700,color:"var(--text-3)"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"10px 0"},rows:{display:"flex",flexDirection:"column",gap:2},row:{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:"1px solid var(--border)"},dot:{width:10,height:10,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:13.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},rowMeta:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,flexShrink:0},rowAmt:{fontSize:13.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:20,flexWrap:"wrap"},pieChart:{position:"relative",width:110,height:110,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:66,height:66,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:12.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:9.5,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:160,display:"flex",flexDirection:"column",gap:8},pieLegRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:10,height:10,borderRadius:3,flexShrink:0},pieLegName:{flex:1,fontSize:13,fontWeight:600},pieLegPct:{fontSize:12.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",width:40,textAlign:"right"},pieLegMin:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,minWidth:58,textAlign:"right"},cardGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:10,marginBottom:14},miniCard:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:6,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,padding:"12px 14px",cursor:"pointer",fontFamily:"inherit",textAlign:"left",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},miniLabel:{fontSize:13,fontWeight:700,color:"var(--text)"},miniStatus:{fontSize:11.5,fontWeight:600},walletRow:{display:"flex",gap:10},walletStat:{flex:1,textAlign:"center"},walletVal:{fontSize:17,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},walletLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:2},quickHead:{fontSize:13,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",margin:"6px 0 10px"},quickCard:{border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,padding:"14px 16px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},quickTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13.5,fontWeight:700,color:"var(--text)"},quickStat:{fontSize:13,color:"var(--text-2)",fontWeight:600},quickAddBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface-2)",color:"var(--text)",padding:"8px 10px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},habitList:{display:"flex",flexWrap:"wrap",gap:6},habitChip:{border:"1px solid var(--border)",background:"var(--surface-2)",color:"var(--text-2)",padding:"5px 10px",borderRadius:14,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",gap:4},habitChipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},quadGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6},quadCell:{display:"flex",justifyContent:"space-between",alignItems:"center",border:"1px solid var(--border)",borderRadius:8,padding:"5px 8px",fontSize:11.5},quadLabel:{color:"var(--text-3)",fontWeight:600},quadCount:{fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",fontSize:13},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modalCard:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"20px 20px 16px",width:340,maxWidth:"100%",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)"},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},modalBody:{display:"flex",flexDirection:"column",gap:8},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface-2)",outline:"none"},modalActions:{display:"flex",gap:8,marginTop:6},modalCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalConfirm:{flex:1,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},A0=7e3;function ur(e,r,n){const[o,i]=c.useState([]),s=c.useRef({}),l=c.useCallback(async(g,m="Item")=>{await e(g),n();const f=`${g}-${Date.now()}`;i(h=>[...h,{id:f,itemId:g,label:m}]),s.current[f]=setTimeout(()=>{i(h=>h.filter(B=>B.id!==f)),delete s.current[f]},A0)},[e,n]),a=c.useCallback(async g=>{const m=o.find(f=>f.id===g);m&&(clearTimeout(s.current[g]),delete s.current[g],i(f=>f.filter(h=>h.id!==g)),await r(m.itemId),n())},[o,r,n]),d=c.useCallback(g=>{clearTimeout(s.current[g]),delete s.current[g],i(m=>m.filter(f=>f.id!==g))},[]);return{deleteItem:l,toasts:o,handleUndo:a,handleDismiss:d}}function pr({toasts:e,onUndo:r,onDismiss:n}){return t.jsx("div",{style:Do.container,children:e.map(o=>t.jsx(D0,{toast:o,onUndo:r,onDismiss:n},o.id))})}function D0({toast:e,onUndo:r,onDismiss:n}){const[o,i]=c.useState(100);return c.useEffect(()=>{const s=Date.now(),l=7e3,a=setInterval(()=>{const d=Date.now()-s,g=Math.max(0,100-d/l*100);i(g),g===0&&clearInterval(a)},50);return()=>clearInterval(a)},[]),t.jsxs("div",{style:Do.toast,children:[t.jsx("div",{style:{...Do.bar,width:`${o}%`}}),t.jsxs("span",{style:Do.msg,children:[e.label," deleted"]}),t.jsx("button",{style:Do.undoBtn,onClick:()=>r(e.id),children:"Undo"}),t.jsx("button",{style:Do.closeBtn,onClick:()=>n(e.id),children:"×"})]})}const Do={container:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",gap:8,zIndex:999,pointerEvents:"none"},toast:{position:"relative",display:"flex",alignItems:"center",gap:12,background:"var(--accent-strong)",color:"#fff",borderRadius:10,padding:"12px 16px",fontSize:13.5,fontFamily:"'Inter', system-ui, sans-serif",boxShadow:"0 4px 20px rgba(0,0,0,0.25)",minWidth:260,overflow:"hidden",pointerEvents:"all"},bar:{position:"absolute",bottom:0,left:0,height:3,background:"#4C9A6B",transition:"width 0.05s linear",borderRadius:"0 0 0 10px"},msg:{flex:1,fontWeight:500},undoBtn:{border:"1px solid rgba(255,255,255,0.3)",background:"none",color:"#4C9A6B",fontWeight:700,fontSize:13,padding:"4px 10px",borderRadius:6,cursor:"pointer",fontFamily:"inherit"},closeBtn:{border:"none",background:"none",color:"rgba(255,255,255,0.5)",cursor:"pointer",fontSize:18,lineHeight:1,padding:"0 2px"}},sn={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},W0=[{id:"Q1",symbol:"™",title:"Do Now",sub:"Important · Urgent",accent:"#C2536B"},{id:"Q2",symbol:"©",title:"Schedule",sub:"Important · Not Urgent",accent:"#3A7CA5"},{id:"Q3",symbol:"®",title:"Delegate",sub:"Not Important · Urgent",accent:"#C9A227"},{id:"Q4",symbol:"•",title:"Drop",sub:"Not Important · Not Urgent",accent:"#8A8780"}];function Ih(){return new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Kolkata"})}function Bh(){const e=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"})),n=e.getMinutes()<30?30:0,o=n===0?e.getHours()+1:e.getHours();return`${String(o%24).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function Zu(e,r){const[n,o]=e.split(":").map(Number),i=n*60+o+r;return`${String(Math.floor(i/60)%24).padStart(2,"0")}:${String(i%60).padStart(2,"0")}`}function M0(e){return e?new Date(e).toLocaleString("en-IN",{timeZone:"Asia/Kolkata",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0}):""}const qs=()=>({title:"",pillar:"Financial",est:30,date:Ih(),startTime:Bh()});function L0(){const[e,r]=c.useState([]),[n,o]=c.useState([]),[i,s]=c.useState("All"),[l,a]=c.useState(null),[d,g]=c.useState(null),[m,f]=c.useState(qs()),[h,B]=c.useState(null),[R,z]=c.useState(qs()),S=c.useCallback(()=>F.getTasks().then(r).catch(console.error),[]);c.useEffect(()=>{S(),F.getGoals().then(P=>o(P.filter($=>$.horizon==="Weekly"))).catch(()=>{})},[S]);const p=Object.keys(sn),b=n.filter(P=>i==="All"||P.pillar===i),u=n.find(P=>P.id===l)||null,k=e.filter(P=>l!=null?P.goal_id===l:i!=="All"?P.pillar===i:!0),x=P=>{s(P),a(null),g(null),f($=>({...$,pillar:P==="All"?"Financial":P}))},T=P=>{a(P),g(null);const $=n.find(ae=>ae.id===P);$&&f(ae=>({...ae,pillar:$.pillar}))},{deleteItem:E,toasts:w,handleUndo:j,handleDismiss:Y}=ur(F.deleteTask,F.restoreTask,S),q=P=>k.filter($=>$.quadrant===P),te=P=>q(P).reduce(($,ae)=>$+ae.time_estimate_min,0),he=P=>P>=60?`${Math.floor(P/60)}h${P%60?` ${P%60}m`:""}`:`${P}m`,G=async P=>{if(!m.title.trim())return;const $=m.date&&m.startTime?`${m.date}T${m.startTime}:00`:null;await F.createTask({pillar:u?u.pillar:m.pillar,title:m.title,quadrant:P,time_estimate_min:Number(m.est)||30,start_datetime:$,goal_id:l??null}),f(qs()),g(null),S()},ue=(P,$)=>E(P,$),pe=P=>{const $=P.start_datetime?P.start_datetime.split("T"):[];B(P.id),g(null),z({title:P.title,pillar:P.pillar,est:P.time_estimate_min,date:$[0]||Ih(),startTime:($[1]||"").slice(0,5)||Bh()})},ze=async P=>{if(!R.title.trim())return;const $=R.date&&R.startTime?`${R.date}T${R.startTime}:00`:null;await F.updateTask(P.id,{title:R.title.trim(),pillar:R.pillar,time_estimate_min:Number(R.est)||30,start_datetime:$}),B(null),S()},re=c.useRef(null),U=c.useRef(null),[de,X]=c.useState(null),I=(P,$)=>{var ce;const ae=document.elementFromPoint(P,$);return ae&&ae.closest&&((ce=ae.closest("[data-quad]"))==null?void 0:ce.getAttribute("data-quad"))||null};c.useEffect(()=>{const P=ae=>{const ce=re.current;if(!ce)return;const De=Math.hypot(ae.clientX-ce.startX,ae.clientY-ce.startY);if(!ce.active){if(ce.pointerType!=="mouse"){De>12&&(clearTimeout(U.current),re.current=null);return}if(De<6)return;ce.active=!0,document.body.style.userSelect="none"}ae.cancelable&&ae.preventDefault(),ce.overQ=I(ae.clientX,ae.clientY),X({id:ce.task.id,title:ce.task.title,x:ae.clientX,y:ae.clientY,overQ:ce.overQ})},$=()=>{clearTimeout(U.current);const ae=re.current;re.current=null,document.body.style.userSelect="",document.body.style.touchAction="",X(null),ae&&ae.active&&ae.overQ&&ae.overQ!==ae.task.quadrant&&F.updateTask(ae.task.id,{quadrant:ae.overQ}).then(S).catch(()=>{})};return window.addEventListener("pointermove",P,{passive:!1}),window.addEventListener("pointerup",$),window.addEventListener("pointercancel",$),()=>{window.removeEventListener("pointermove",P),window.removeEventListener("pointerup",$),window.removeEventListener("pointercancel",$)}},[S]);const A=(P,$)=>{P.pointerType==="mouse"&&P.button!==0||(re.current={task:$,startX:P.clientX,startY:P.clientY,active:!1,pointerType:P.pointerType,overQ:null},P.pointerType!=="mouse"&&(U.current=setTimeout(()=>{const ae=re.current;ae&&(ae.active=!0,document.body.style.touchAction="none",X({id:ae.task.id,title:ae.task.title,x:ae.startX,y:ae.startY,overQ:ae.task.quadrant}))},280)))};return t.jsxs("div",{style:Re.page,children:[t.jsxs("div",{style:Re.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:Re.eyebrow,children:"Anvil · Weekly Routing"}),t.jsx("h1",{style:Re.h1,children:"Weekly Routing"})]}),t.jsx("div",{style:Re.headRight,children:t.jsx("div",{style:Re.legend,children:Object.entries(sn).map(([P,$])=>t.jsxs("span",{style:Re.legendItem,children:[t.jsx("span",{style:{...Re.dot,background:$.dot}}),P]},P))})})]}),t.jsx("div",{style:Re.filterBar,children:["All",...p].map(P=>{const $=i===P,ae=sn[P];return t.jsxs("button",{onClick:()=>x(P),style:{...Re.pillChip,...$?ae?{background:ae.dot,color:"#fff",borderColor:ae.dot}:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:[ae&&t.jsx("span",{style:{...Re.dot,background:$?"#fff":ae.dot}}),P==="All"?"All":P]},P)})}),t.jsxs("div",{style:Re.goalBar,children:[t.jsx("button",{onClick:()=>a(null),style:{...Re.goalChip,...l==null?Re.goalChipOn:{}},children:"All goals"}),b.map(P=>{var ce;const $=((ce=sn[P.pillar])==null?void 0:ce.dot)||"#9A968C",ae=l===P.id;return t.jsxs("button",{onClick:()=>T(P.id),style:{...Re.goalChip,...ae?{background:$,color:"#fff",borderColor:$}:{}},title:P.title,children:[t.jsx("span",{style:{...Re.dot,background:ae?"#fff":$}}),t.jsx("span",{style:Re.goalChipText,children:P.title})]},P.id)}),b.length===0&&t.jsxs("span",{style:Re.goalEmpty,children:["No weekly goals",i!=="All"?` for ${i}`:""," — create them in Goals."]})]}),t.jsx("div",{style:Re.grid,children:W0.map(P=>{var $,ae;return t.jsxs("section",{"data-quad":P.id,style:{...Re.quad,borderTop:`3px solid ${P.accent}`,...de&&de.overQ===P.id&&de.overQ!==(($=e.find(ce=>ce.id===de.id))==null?void 0:$.quadrant)?{outline:`2px dashed ${P.accent}`,outlineOffset:2,background:"var(--hover)"}:{}},children:[t.jsxs("header",{style:Re.quadHead,children:[t.jsxs("div",{style:Re.quadTitleRow,children:[t.jsx("span",{style:{...Re.symbol,color:P.accent},children:P.symbol}),t.jsxs("div",{children:[t.jsx("div",{style:Re.quadTitle,children:P.title}),t.jsx("div",{style:Re.quadSub,children:P.sub})]})]}),t.jsx("span",{style:Re.quadTotal,children:he(te(P.id))})]}),t.jsxs("div",{style:Re.list,children:[q(P.id).map(ce=>{const De=sn[ce.pillar]||sn.Financial;return h===ce.id?t.jsxs("div",{style:Re.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"Task title",value:R.title,onChange:Q=>z({...R,title:Q.target.value}),onKeyDown:Q=>Q.key==="Enter"&&ze(ce),style:Re.input}),t.jsxs("div",{style:Re.dateTimeRow,children:[t.jsxs("div",{style:Re.dateTimeGroup,children:[t.jsx("label",{style:Re.dtLabel,children:"Date"}),t.jsx("input",{type:"date",value:R.date,onChange:Q=>z({...R,date:Q.target.value}),style:Re.dtInput})]}),t.jsxs("div",{style:Re.dateTimeGroup,children:[t.jsx("label",{style:Re.dtLabel,children:"Start"}),t.jsx("input",{type:"time",value:R.startTime,onChange:Q=>z({...R,startTime:Q.target.value}),style:Re.dtInput})]}),t.jsxs("div",{style:Re.dateTimeGroup,children:[t.jsx("label",{style:Re.dtLabel,children:"End"}),t.jsx("div",{style:Re.dtEndValue,children:Zu(R.startTime,Number(R.est)||30)})]})]}),t.jsxs("div",{style:Re.addRow,children:[t.jsx("select",{value:R.pillar,onChange:Q=>z({...R,pillar:Q.target.value}),style:Re.select,children:Object.keys(sn).map(Q=>t.jsx("option",{children:Q},Q))}),t.jsx("input",{type:"number",value:R.est,onChange:Q=>z({...R,est:Q.target.value}),style:{...Re.input,width:60}}),t.jsx("span",{style:Re.minLabel,children:"min"}),t.jsx("button",{onClick:()=>ze(ce),style:Re.saveBtn,children:t.jsx(He,{size:14})}),t.jsx("button",{onClick:()=>B(null),style:Re.cancelBtn,children:t.jsx(Ae,{size:14})})]})]},ce.id):t.jsxs("div",{onPointerDown:Q=>A(Q,ce),style:{...Re.card,background:De.soft,cursor:"grab",touchAction:"pan-y",...(de==null?void 0:de.id)===ce.id?{opacity:.4}:{}},children:[t.jsx("span",{style:{...Re.cardBar,background:De.dot}}),t.jsxs("div",{style:Re.cardBody,children:[t.jsx("div",{style:Re.cardTitle,children:ce.title}),ce.start_datetime&&t.jsxs("div",{style:Re.eventTime,children:[t.jsx(Ay,{size:10}),M0(ce.start_datetime)]}),t.jsxs("div",{style:Re.cardMeta,children:[t.jsxs("span",{style:Re.metaPill,children:[t.jsx("span",{style:{...Re.dot,background:De.dot,width:7,height:7}}),ce.pillar]}),t.jsxs("span",{style:Re.metaPill,children:[t.jsx(dh,{size:11})," ",he(ce.time_estimate_min)]})]})]}),t.jsxs("div",{style:Re.cardActions,children:[t.jsx("button",{onClick:()=>pe(ce),onPointerDown:Q=>Q.stopPropagation(),style:Re.delBtn,title:"Edit",children:t.jsx(vt,{size:12})}),t.jsx("button",{onClick:()=>ue(ce.id,ce.title),onPointerDown:Q=>Q.stopPropagation(),style:Re.delBtn,children:t.jsx(Ae,{size:13})})]})]},ce.id)}),d===P.id?t.jsxs("div",{style:Re.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"Task title",value:m.title,onChange:ce=>f({...m,title:ce.target.value}),onKeyDown:ce=>ce.key==="Enter"&&G(P.id),style:Re.input}),t.jsxs("div",{style:Re.dateTimeRow,children:[t.jsxs("div",{style:Re.dateTimeGroup,children:[t.jsx("label",{style:Re.dtLabel,children:"Date"}),t.jsx("input",{type:"date",value:m.date,onChange:ce=>f({...m,date:ce.target.value}),style:Re.dtInput})]}),t.jsxs("div",{style:Re.dateTimeGroup,children:[t.jsx("label",{style:Re.dtLabel,children:"Start"}),t.jsx("input",{type:"time",value:m.startTime,onChange:ce=>f({...m,startTime:ce.target.value}),style:Re.dtInput})]}),t.jsxs("div",{style:Re.dateTimeGroup,children:[t.jsx("label",{style:Re.dtLabel,children:"End"}),t.jsx("div",{style:Re.dtEndValue,children:Zu(m.startTime,Number(m.est)||30)})]})]}),t.jsxs("div",{style:Re.addRow,children:[u?t.jsxs("span",{style:Re.goalPillarTag,children:[t.jsx("span",{style:{...Re.dot,background:(ae=sn[u.pillar])==null?void 0:ae.dot}})," ",u.pillar]}):t.jsx("select",{value:m.pillar,onChange:ce=>f({...m,pillar:ce.target.value}),style:Re.select,children:Object.keys(sn).map(ce=>t.jsx("option",{children:ce},ce))}),t.jsx("input",{type:"number",value:m.est,onChange:ce=>f({...m,est:ce.target.value}),style:{...Re.input,width:60}}),t.jsx("span",{style:Re.minLabel,children:"min"}),t.jsx("button",{onClick:()=>G(P.id),style:Re.saveBtn,children:t.jsx(He,{size:14})}),t.jsx("button",{onClick:()=>{g(null),f(qs())},style:Re.cancelBtn,children:t.jsx(Ae,{size:14})})]})]}):t.jsxs("button",{onClick:()=>g(P.id),style:Re.addTrigger,children:[t.jsx(st,{size:13})," Add task"]})]})]},P.id)})}),de&&t.jsx("div",{style:{...Re.dragClone,left:de.x+12,top:de.y+12},children:de.title}),t.jsx(pr,{toasts:w,onUndo:j,onDismiss:Y})]})}const Re={page:{fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:16,marginBottom:22},headRight:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:10},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces', Georgia, serif"},legend:{display:"flex",gap:14,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--text-2)",fontWeight:500},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:10},pillChip:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},goalBar:{display:"flex",gap:7,flexWrap:"wrap",alignItems:"center",marginBottom:18,paddingBottom:14,borderBottom:"1px solid var(--border)"},goalChip:{display:"inline-flex",alignItems:"center",gap:6,maxWidth:220,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},goalChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},goalChipText:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},goalEmpty:{fontSize:12,color:"var(--text-3)",fontStyle:"italic"},goalPillarTag:{display:"inline-flex",alignItems:"center",gap:6,fontSize:12.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"7px 10px",borderRadius:6,flex:1},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16},quad:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.06)"},quadHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14},quadTitleRow:{display:"flex",gap:10,alignItems:"center"},symbol:{fontSize:20,lineHeight:1},quadTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em"},quadSub:{fontSize:11,color:"var(--text-3)",marginTop:1,letterSpacing:"0.02em"},quadTotal:{fontSize:12,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"3px 9px",borderRadius:20},list:{display:"flex",flexDirection:"column",gap:8},card:{display:"flex",alignItems:"stretch",gap:10,borderRadius:9,padding:"10px 10px 10px 0",overflow:"hidden"},cardBar:{width:3,borderRadius:3,flexShrink:0},cardBody:{flex:1,minWidth:0},cardTitle:{fontSize:13.5,fontWeight:500,lineHeight:1.35,marginBottom:4},eventTime:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#3A7CA5",fontWeight:500,marginBottom:5},cardMeta:{display:"flex",gap:8,flexWrap:"wrap"},metaPill:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"var(--text-2)",fontWeight:500},cardActions:{display:"flex",flexDirection:"column",gap:4,alignSelf:"center",flexShrink:0},delBtn:{width:30,height:30,borderRadius:8,border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center"},addTrigger:{display:"flex",alignItems:"center",gap:5,fontSize:12.5,color:"var(--text-3)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"8px 10px",cursor:"pointer",fontWeight:500,marginTop:2},addBox:{border:"1px solid var(--border)",borderRadius:9,padding:10,display:"flex",flexDirection:"column",gap:8},dateTimeRow:{display:"flex",gap:8,alignItems:"flex-end"},dateTimeGroup:{display:"flex",flexDirection:"column",gap:3,flex:1},dtLabel:{fontSize:10,fontWeight:600,color:"var(--text-3)",letterSpacing:"0.08em",textTransform:"uppercase"},dtInput:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},dtEndValue:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,color:"var(--text-2)",background:"var(--bg)"},addRow:{display:"flex",alignItems:"center",gap:6},input:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",flex:1,minWidth:0},select:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 8px",fontSize:12.5,fontFamily:"inherit",flex:1},minLabel:{fontSize:11,color:"var(--text-3)"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},dragClone:{position:"fixed",zIndex:1e3,pointerEvents:"none",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:8,padding:"8px 12px",fontSize:13,fontWeight:600,color:"var(--text)",boxShadow:"0 8px 24px rgba(0,0,0,0.25)",maxWidth:220,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},Tr={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},Ci=Object.keys(Tr),wl=["Yearly","Quarterly","Monthly","Weekly"],Xr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ju=[{label:"Q1 · Jan–Mar",startMonth:0},{label:"Q2 · Apr–Jun",startMonth:3},{label:"Q3 · Jul–Sep",startMonth:6},{label:"Q4 · Oct–Dec",startMonth:9}],Sl=new Date().getFullYear(),Io=Array.from({length:8},(e,r)=>Sl-1+r);function _0(e=720){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const Fi=864e5,Ot=30,Qi=190,Bo=e=>new Date(e+"T00:00:00"),ep=e=>e.toLocaleDateString("en-US",{month:"short",day:"numeric"}),$0=[{key:"yearly",label:"Yearly",horizons:["Yearly"]},{key:"quarterly",label:"Quarterly",horizons:["Quarterly"]},{key:"mw",label:"Monthly & Weekly",horizons:["Monthly","Weekly"]}],tp={Yearly:"Yr",Quarterly:"Q",Monthly:"Mo",Weekly:"Wk"},P0={Yearly:"Y",Quarterly:"Q",Monthly:"M",Weekly:"W"},rp={Yearly:0,Quarterly:1,Monthly:2,Weekly:3},Za=e=>wl[Math.min(wl.indexOf(e)+1,wl.length-1)],Xs=e=>{if(!e||!e.start_date)return Array.from({length:12},(l,a)=>a);const r=new Date(e.start_date+"T00:00:00"),n=new Date(e.end_date+"T00:00:00"),o=r.getFullYear(),i=r.getMonth(),s=n.getFullYear()>o?11:n.getMonth();return Array.from({length:s-i+1},(l,a)=>i+a)},zi=e=>new Date(e+"T00:00:00").getFullYear(),Rh=(e,r,n)=>{const o=(n-1)*7+1,i=Math.min(o+6,new Date(e,r+1,0).getDate()),s=String(r+1).padStart(2,"0");return{start_date:`${e}-${s}-${String(o).padStart(2,"0")}`,end_date:`${e}-${s}-${String(i).padStart(2,"0")}`}},np=(e,r,n,o=1)=>{const i=r;switch(e){case"Yearly":return{start_date:`${i}-01-01`,end_date:`${i}-12-31`};case"Quarterly":{const s=Math.floor(n/3)*3,l=s+1,a=s+3,d=new Date(i,a,0).getDate();return{start_date:`${i}-${String(l).padStart(2,"0")}-01`,end_date:`${i}-${String(a).padStart(2,"0")}-${d}`}}case"Monthly":{const s=new Date(i,n+1,0).getDate();return{start_date:`${i}-${String(n+1).padStart(2,"0")}-01`,end_date:`${i}-${String(n+1).padStart(2,"0")}-${s}`}}case"Weekly":return Rh(i,n,o);default:return{start_date:`${i}-01-01`,end_date:`${i}-12-31`}}},qi=(e,r)=>{const n=new Date(e+"T00:00:00");return n.setDate(n.getDate()+r),`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`},Jl=(e,r)=>Math.round((new Date(r+"T00:00:00")-new Date(e+"T00:00:00"))/Fi)+1,N0=(e,r,n)=>{if(!n||!n.start_date||!n.end_date)return{start_date:e,end_date:r,clamped:!1};const o=Jl(e,r);let i=e,s=r,l=!1;return i<n.start_date&&(i=n.start_date,s=qi(i,o-1),l=!0),s>n.end_date&&(s=n.end_date,i=qi(s,-(o-1)),l=!0,i<n.start_date&&(i=n.start_date)),{start_date:i,end_date:s,clamped:l}},O0=(e,r)=>new Date(e,r+1,0).getDate(),fc=e=>{const r=new Date(e.start_date+"T00:00:00");if(e.horizon==="Monthly")return O0(r.getFullYear(),r.getMonth());if(e.horizon==="Weekly"){const n=Math.min(Math.max(Math.ceil(r.getDate()/7),1),4),o=Rh(r.getFullYear(),r.getMonth(),n);return Jl(o.start_date,o.end_date)}return Jl(e.start_date,e.end_date)},op=e=>Math.round(fc(e)*1.5),H0=e=>e.horizon==="Monthly"||e.horizon==="Weekly",G0=e=>{if(!e.start_date)return"";const r=new Date(e.start_date+"T00:00:00"),n=r.getMonth();switch(e.horizon){case"Yearly":{const o=e.end_date?new Date(e.end_date+"T00:00:00").getFullYear():r.getFullYear();return o>r.getFullYear()?`${r.getFullYear()}–${o}`:`${r.getFullYear()}`}case"Quarterly":return`Q${Math.floor(n/3)+1} ${r.getFullYear()}`;case"Monthly":return`${Xr[n]} ${r.getFullYear()}`;case"Weekly":return`${Xr[n]} W${Math.ceil(r.getDate()/7)}`;default:return""}};function U0(){const[e,r]=c.useState([]),[n,o]=c.useState("All"),[i,s]=c.useState({}),[l,a]=c.useState({}),[d,g]=c.useState(null),[m,f]=c.useState(""),[h,B]=c.useState(0),[R,z]=c.useState(1),[S,p]=c.useState(Sl),[b,u]=c.useState(Sl),[k,x]=c.useState("Yearly"),[T,E]=c.useState(Ci[0]),[w,j]=c.useState(null),Y=_0(),[q,te]=c.useState(!Y),[he,G]=c.useState("day"),[ue,pe]=c.useState(null),ze=c.useRef(null);c.useEffect(()=>{ze.current=ue},[ue]);const re=c.useRef(e);c.useEffect(()=>{re.current=e},[e]);const[U,de]=c.useState(null),X=c.useRef(null);c.useEffect(()=>{X.current=U},[U]);const I=c.useRef(null),A=c.useRef(0),[P,$]=c.useState(null),ae=c.useRef(null),ce=c.useCallback(W=>{$(W),clearTimeout(ae.current),ae.current=setTimeout(()=>$(null),2800)},[]),[De,Q]=c.useState(null),ie=c.useRef(null),[O,ee]=c.useState(null),[fe,M]=c.useState(null),y=(W,Z)=>{if(O===Z){ee(null);return}const Ie=W.currentTarget.getBoundingClientRect(),Ne=Ie.bottom+220<window.innerHeight;M({right:Math.max(8,window.innerWidth-Ie.right),...Ne?{top:Ie.bottom+4}:{bottom:window.innerHeight-Ie.top+4}}),ee(Z)},ne=W=>{clearTimeout(ie.current),ie.current=setTimeout(()=>Q(W),350)},D=()=>{clearTimeout(ie.current),Q(null)},ge=c.useCallback(()=>{F.getGoals().then(r).catch(console.error)},[]);c.useEffect(()=>{ge()},[ge]);const{deleteItem:ve,toasts:We,handleUndo:Xe,handleDismiss:dt}=ur(F.deleteGoal,F.restoreGoal,ge),$e=c.useCallback(async()=>{const W=ze.current;if(pe(null),!W)return;const Z=Math.round(W.dx/(W.pxPerDay||Ot));if(!Z)return;let Ie=qi(W.g.start_date,Z),Ne=qi(W.g.end_date,Z);if(W.g.parent_goal_id){const tt=re.current.find(et=>et.id===W.g.parent_goal_id),Ze=N0(Ie,Ne,tt);Ze.clamped&&ce(`Can't move past "${(tt==null?void 0:tt.title)||"parent goal"}" — kept within its dates.`),Ie=Ze.start_date,Ne=Ze.end_date}(Ie!==W.g.start_date||Ne!==W.g.end_date)&&(await F.updateGoal(W.g.id,{pillar:W.g.pillar,start_date:Ie,end_date:Ne}),ge())},[ge,ce]),rt=!!ue;c.useEffect(()=>{if(!rt)return;const W=Ze=>{A.current=Ze.clientX,pe(et=>et&&{...et,dx:Ze.clientX-et.startX})},Z=()=>$e();window.addEventListener("pointermove",W),window.addEventListener("pointerup",Z);const Ie=44,Ne=16,tt=setInterval(()=>{const Ze=I.current;if(!Ze)return;const et=Ze.getBoundingClientRect(),bt=A.current;let Be=0;if(bt<et.left+Ie?Be=-1:bt>et.right-Ie&&(Be=1),!Be)return;const Nt=Ze.scrollLeft;Ze.scrollLeft=Math.max(0,Math.min(Nt+Be*Ne,Ze.scrollWidth-Ze.clientWidth));const mr=Ze.scrollLeft-Nt;mr&&pe(ht=>ht&&{...ht,startX:ht.startX-mr,dx:bt-(ht.startX-mr)})},16);return()=>{window.removeEventListener("pointermove",W),window.removeEventListener("pointerup",Z),clearInterval(tt)}},[rt,$e]);const Qe=c.useCallback(async()=>{const W=X.current;if(de(null),!W)return;const Z=W.g,Ie=fc(Z),Ne=op(Z),tt=Math.max(Ie,Math.min(Ne,Jl(Z.start_date,Z.end_date)+Math.round(W.dx/Ot)));let Ze=qi(Z.start_date,tt-1);if(Z.parent_goal_id){const et=re.current.find(bt=>bt.id===Z.parent_goal_id);et!=null&&et.end_date&&Ze>et.end_date&&(Ze=et.end_date,ce(`Can't extend past "${(et==null?void 0:et.title)||"parent goal"}" — kept within its dates.`))}Ze!==Z.end_date&&Ze>=Z.start_date&&(await F.updateGoal(Z.id,{end_date:Ze}),ge())},[ge,ce]),at=!!U;c.useEffect(()=>{if(!at)return;const W=Ie=>de(Ne=>Ne&&{...Ne,dx:Ie.clientX-Ne.startX}),Z=()=>Qe();return window.addEventListener("pointermove",W),window.addEventListener("pointerup",Z),()=>{window.removeEventListener("pointermove",W),window.removeEventListener("pointerup",Z)}},[at,Qe]);const se=n==="All",Me=Tr[n]||{dot:"var(--text-3)"},qe=se?e:e.filter(W=>W.pillar===n),nt=qe.filter(W=>!W.parent_goal_id),ct=W=>qe.filter(Z=>Z.parent_goal_id===W),Ft=W=>a(Z=>({...Z,[W]:!Z[W]})),zt=W=>W.horizon==="Monthly"||W.horizon==="Weekly",yt=W=>i[W.id]!==void 0?i[W.id]:zt(W),mt=W=>s(Z=>({...Z,[W.id]:!yt(W)})),wt=(W,Z=null)=>{g(W),f(""),z(1);const Ie=Z?zi(Z.start_date):Sl;p(Ie),u(Ie),W==="ROOT"&&E(se?Ci[0]:n);const Ne=W==="ROOT"?"Yearly":Za(Z==null?void 0:Z.horizon);x(Ne);const tt=W==="ROOT"?Array.from({length:12},(Ze,et)=>et):Xs(Z);B(Ne==="Quarterly"?Math.floor(tt[0]/3)*3:tt[0]??0)},Sr=async(W,Z)=>{if(!m.trim())return;const Ie=(Z==null?void 0:Z.horizon)??null,Ne=W==="ROOT"?k:Za(Ie),tt=W==="ROOT"?T:(Z==null?void 0:Z.pillar)||n;let Ze,et;if(Ne==="Yearly"){const bt=Number(S),Be=Math.max(bt,Number(b)||bt);Ze=`${bt}-01-01`,et=`${Be}-12-31`}else{const bt=Z?zi(Z.start_date):Number(S);({start_date:Ze,end_date:et}=np(Ne,bt,h,R))}await F.createGoal({pillar:tt,title:m.trim(),horizon:Ne,parent_goal_id:W==="ROOT"?null:W,start_date:Ze,end_date:et}),W!=="ROOT"&&a(bt=>({...bt,[W]:!0})),g(null),f(""),ge()},v=W=>{const Z=W.start_date?new Date(W.start_date+"T00:00:00"):new Date,Ie=Z.getMonth(),Ne=Math.min(Math.max(Math.ceil(Z.getDate()/7),1),4);j({id:W.id,title:W.title,pillar:W.pillar,horizon:W.horizon,parentGoal:e.find(tt=>tt.id===W.parent_goal_id)||null,year:zi(W.start_date),endYear:zi(W.end_date),month:W.horizon==="Quarterly"?Math.floor(Ie/3)*3:Ie,week:Ne})},le=async()=>{if(!w||!w.title.trim())return;let W,Z;if(w.horizon==="Yearly"){const Ie=Number(w.year),Ne=Math.max(Ie,Number(w.endYear)||Ie);W=`${Ie}-01-01`,Z=`${Ne}-12-31`}else{let Ie=w.month;w.horizon==="Weekly"&&w.parentGoal&&(Ie=Xs(w.parentGoal)[0]);const Ne=w.parentGoal?zi(w.parentGoal.start_date):Number(w.year);({start_date:W,end_date:Z}=np(w.horizon,Ne,Ie,w.week))}await F.updateGoal(w.id,{title:w.title.trim(),pillar:w.pillar,start_date:W,end_date:Z}),j(null),ge()},Pe=({parentId:W,parentGoal:Z,depth:Ie})=>{const Ne=W==="ROOT",tt=Ne?k:Za((Z==null?void 0:Z.horizon)??null),Ze=Ne?Array.from({length:12},(Be,Nt)=>Nt):Xs(Z),et=Ju.filter(Be=>Ze.includes(Be.startMonth)),bt=Be=>{x(Be),B(0),z(1),u(S)};return t.jsxs("div",{style:{...me.addBox,marginLeft:Ie*24},children:[t.jsx("input",{autoFocus:!0,placeholder:`New ${tt.toLowerCase()} goal…`,value:m,onChange:Be=>f(Be.target.value),onKeyDown:Be=>{Be.key==="Enter"&&Sr(W,Z),Be.key==="Escape"&&g(null)},style:me.input}),Ne&&se&&t.jsx("select",{value:T,onChange:Be=>E(Be.target.value),style:me.monthSelect,title:"Pillar",children:Ci.map(Be=>t.jsx("option",{value:Be,children:Be},Be))}),Ne&&t.jsx("select",{value:k,onChange:Be=>bt(Be.target.value),style:me.monthSelect,title:"Goal level",children:wl.map(Be=>t.jsx("option",{value:Be,children:Be},Be))}),tt==="Yearly"&&t.jsxs(t.Fragment,{children:[t.jsx("select",{value:S,onChange:Be=>{const Nt=Number(Be.target.value);p(Nt),b<Nt&&u(Nt)},style:me.monthSelect,title:"Start year",children:Io.map(Be=>t.jsx("option",{value:Be,children:Be},Be))}),t.jsx("span",{style:me.toTag,children:"to"}),t.jsx("select",{value:b,onChange:Be=>u(Number(Be.target.value)),style:me.monthSelect,title:"End year (spans multiple years)",children:Io.filter(Be=>Be>=S).map(Be=>t.jsx("option",{value:Be,children:Be},Be))})]}),tt!=="Yearly"&&Ne&&t.jsx("select",{value:S,onChange:Be=>p(Number(Be.target.value)),style:me.monthSelect,title:"Year",children:Io.map(Be=>t.jsx("option",{value:Be,children:Be},Be))}),tt==="Quarterly"&&t.jsx("select",{value:h,onChange:Be=>B(Number(Be.target.value)),style:me.monthSelect,children:et.map(Be=>t.jsx("option",{value:Be.startMonth,children:Be.label},Be.startMonth))}),tt==="Monthly"&&t.jsx("select",{value:h,onChange:Be=>B(Number(Be.target.value)),style:me.monthSelect,children:Ze.map(Be=>t.jsx("option",{value:Be,children:Xr[Be]},Be))}),tt==="Weekly"&&t.jsxs(t.Fragment,{children:[Ne?t.jsx("select",{value:h,onChange:Be=>B(Number(Be.target.value)),style:me.monthSelect,children:Ze.map(Be=>t.jsx("option",{value:Be,children:Xr[Be]},Be))}):t.jsx("span",{style:me.inheritTag,children:Xr[Ze[0]]}),t.jsx("select",{value:R,onChange:Be=>z(Number(Be.target.value)),style:me.monthSelect,children:[1,2,3,4].map(Be=>t.jsxs("option",{value:Be,children:["Week ",Be]},Be))})]}),t.jsx("button",{onClick:()=>Sr(W,Z),style:me.saveBtn,children:t.jsx(He,{size:14})}),t.jsx("button",{onClick:()=>g(null),style:me.cancelBtn,children:t.jsx(Ae,{size:14})})]})},Le=({goal:W,depth:Z})=>{var et,bt,Be,Nt,mr;const Ie=ct(W.id),Ne=l[W.id],tt=W.horizon!=="Weekly";if((w==null?void 0:w.id)===W.id){const ht=Xs(w.parentGoal),to=Ju.filter(Ge=>ht.includes(Ge.startMonth)),mi=!w.parentGoal;return t.jsxs("div",{style:{...me.editBox,marginLeft:Z*24},children:[t.jsx("input",{autoFocus:!0,value:w.title,onChange:Ge=>j({...w,title:Ge.target.value}),onKeyDown:Ge=>Ge.key==="Enter"&&le(),style:{...me.input,flex:1}}),t.jsx("select",{value:w.pillar,onChange:Ge=>j({...w,pillar:Ge.target.value}),style:me.monthSelect,children:Ci.map(Ge=>t.jsx("option",{children:Ge},Ge))}),w.horizon==="Yearly"&&t.jsxs(t.Fragment,{children:[t.jsx("select",{value:w.year,onChange:Ge=>{const hi=Number(Ge.target.value);j({...w,year:hi,endYear:Math.max(hi,w.endYear)})},style:me.monthSelect,title:"Start year",children:Io.map(Ge=>t.jsx("option",{value:Ge,children:Ge},Ge))}),t.jsx("span",{style:me.toTag,children:"to"}),t.jsx("select",{value:w.endYear,onChange:Ge=>j({...w,endYear:Number(Ge.target.value)}),style:me.monthSelect,title:"End year (spans multiple years)",children:Io.filter(Ge=>Ge>=w.year).map(Ge=>t.jsx("option",{value:Ge,children:Ge},Ge))})]}),w.horizon!=="Yearly"&&mi&&t.jsx("select",{value:w.year,onChange:Ge=>j({...w,year:Number(Ge.target.value)}),style:me.monthSelect,title:"Year",children:Io.map(Ge=>t.jsx("option",{value:Ge,children:Ge},Ge))}),w.horizon==="Quarterly"&&t.jsx("select",{value:w.month,onChange:Ge=>j({...w,month:Number(Ge.target.value)}),style:me.monthSelect,children:to.map(Ge=>t.jsx("option",{value:Ge.startMonth,children:Ge.label},Ge.startMonth))}),w.horizon==="Monthly"&&t.jsx("select",{value:w.month,onChange:Ge=>j({...w,month:Number(Ge.target.value)}),style:me.monthSelect,children:ht.map(Ge=>t.jsx("option",{value:Ge,children:Xr[Ge]},Ge))}),w.horizon==="Weekly"&&t.jsxs(t.Fragment,{children:[mi?t.jsx("select",{value:w.month,onChange:Ge=>j({...w,month:Number(Ge.target.value)}),style:me.monthSelect,children:ht.map(Ge=>t.jsx("option",{value:Ge,children:Xr[Ge]},Ge))}):t.jsx("span",{style:me.inheritTag,children:Xr[ht[0]]}),t.jsx("select",{value:w.week,onChange:Ge=>j({...w,week:Number(Ge.target.value)}),style:me.monthSelect,children:[1,2,3,4].map(Ge=>t.jsxs("option",{value:Ge,children:["Week ",Ge]},Ge))})]}),t.jsx("button",{onClick:le,style:me.saveBtn,children:t.jsx(He,{size:14})}),t.jsx("button",{onClick:()=>j(null),style:me.cancelBtn,children:t.jsx(Ae,{size:14})})]})}return t.jsxs("div",{children:[t.jsxs("div",{style:{...me.row,marginLeft:Z*24,background:Z===0&&((et=Tr[W.pillar])==null?void 0:et.soft)||"transparent"},children:[Ie.length>0?t.jsx("button",{onClick:()=>Ft(W.id),style:me.caret,children:Ne?t.jsx(So,{size:15}):t.jsx(nn,{size:15})}):t.jsx("span",{style:{...me.caret,opacity:.25},children:t.jsx(Tg,{size:12})}),t.jsx("span",{style:{...me.horizonTag,color:((bt=Tr[W.pillar])==null?void 0:bt.dot)||Me.dot,borderColor:((Be=Tr[W.pillar])==null?void 0:Be.dot)||Me.dot},title:W.horizon,children:Y?P0[W.horizon]:W.horizon}),t.jsxs("div",{style:me.nameCol,children:[t.jsx("span",{style:{...me.title,...De===W.id?me.titleFull:{}},title:W.title,onPointerDown:()=>ne(W.id),onPointerUp:D,onPointerLeave:D,onPointerCancel:D,children:W.title}),t.jsx("span",{style:me.whenSub,children:G0(W)})]}),Y?t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{position:"relative",flexShrink:0},children:[t.jsx("button",{onClick:ht=>y(ht,W.id),style:me.rowAdd,title:"Options",children:t.jsx(jh,{size:15})}),O===W.id&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:me.menuBackdrop,onClick:()=>ee(null)}),t.jsxs("div",{style:{...me.goalMenu,...fe},children:[t.jsxs("button",{style:me.menuItem,onClick:()=>{v(W),ee(null)},children:[t.jsx(vt,{size:14})," Edit"]}),tt&&t.jsxs("button",{style:me.menuItem,onClick:()=>{a(ht=>({...ht,[W.id]:!0})),wt(W.id,W),ee(null)},children:[t.jsx(st,{size:14})," Add sub-goal"]}),t.jsxs("button",{style:{...me.menuItem,color:"#C2536B"},onClick:()=>{ve(W.id,W.title),ee(null)},children:[t.jsx(Ae,{size:14})," Delete"]})]})]})]}),t.jsx("button",{onClick:()=>mt(W),style:{...me.rowAdd,color:yt(W)?((Nt=Tr[W.pillar])==null?void 0:Nt.dot)||Me.dot:"var(--text-3)"},title:yt(W)?"Showing on timeline":"Hidden from timeline",children:yt(W)?t.jsx(hs,{size:14}):t.jsx(Ql,{size:14})})]}):t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>mt(W),style:{...me.rowAdd,color:yt(W)?((mr=Tr[W.pillar])==null?void 0:mr.dot)||Me.dot:"var(--text-3)"},title:yt(W)?"Showing on timeline — click to hide":"Hidden from timeline — click to show",children:yt(W)?t.jsx(hs,{size:13}):t.jsx(Ql,{size:13})}),t.jsx("button",{onClick:()=>v(W),style:me.rowAdd,title:"Edit",children:t.jsx(vt,{size:12})}),tt&&t.jsx("button",{onClick:()=>{a(ht=>({...ht,[W.id]:!0})),wt(W.id,W)},style:me.rowAdd,title:"Add sub-goal",children:t.jsx(st,{size:13})}),t.jsx("button",{onClick:()=>ve(W.id,W.title),style:{...me.rowAdd,color:"var(--text-3)"},title:"Delete",children:t.jsx(Ae,{size:13})})]})]}),Ne&&Ie.map(ht=>t.jsx(Le,{goal:ht,depth:Z+1},ht.id)),Ne&&d===W.id&&t.jsx(Pe,{parentId:W.id,parentGoal:W,depth:Z+1})]})},Je=e.filter(W=>yt(W)&&W.start_date&&W.end_date),br=$0.map(W=>({...W,items:Je.filter(Z=>W.horizons.includes(Z.horizon)).sort((Z,Ie)=>Z.pillar.localeCompare(Ie.pillar)||Z.start_date.localeCompare(Ie.start_date)||rp[Z.horizon]-rp[Ie.horizon]||Z.end_date.localeCompare(Ie.end_date))})).filter(W=>W.items.length>0),pt=(()=>{if(!Je.length)return null;let W=Je[0].start_date,Z=Je[0].end_date;return Je.forEach(Ie=>{Ie.start_date<W&&(W=Ie.start_date),Ie.end_date>Z&&(Z=Ie.end_date)}),{start:Bo(W),end:Bo(Z)}})(),H=(()=>{if(!pt)return[];const W=[];for(let Z=pt.start.getTime();Z<=pt.end.getTime();Z+=Fi)W.push(new Date(Z));return W})(),je=H.length,Mt=(()=>{const W=[];return H.forEach(Z=>{const Ie=`${Z.getFullYear()}-${Z.getMonth()}`,Ne=W[W.length-1];Ne&&Ne.key===Ie?Ne.days++:W.push({key:Ie,label:`${Xr[Z.getMonth()]} '${String(Z.getFullYear()).slice(2)}`,days:1})}),W})(),Pt=new Date;Pt.setHours(0,0,0,0);const ir=pt?Math.round((Pt-pt.start)/Fi):-1,Cr=ir>=0&&ir<je,Cn=W=>Math.round((Bo(W.end_date)-Bo(W.start_date))/Fi)+1,zr=he==="month",on=pt?pt.start.getFullYear():0,sr=pt?pt.start.getMonth():0,eo=(()=>{if(!pt)return[];const W=[];let Z=on,Ie=sr;const Ne=pt.end.getFullYear(),tt=pt.end.getMonth();for(;Z<Ne||Z===Ne&&Ie<=tt;)W.push({y:Z,m:Ie}),Ie++,Ie>11&&(Ie=0,Z++);return W})(),zn=eo.length||1,pi=(W,Z)=>{const Ie=Bo(W),Ne=(Ie.getFullYear()-on)*12+Ie.getMonth()-sr,tt=new Date(Ie.getFullYear(),Ie.getMonth()+1,0).getDate();return Ne+(Ie.getDate()-(Z?0:1))/tt},bi=(W,Z)=>pi(W,Z)/zn*100,Sa=`${Pt.getFullYear()}-${String(Pt.getMonth()+1).padStart(2,"0")}-${String(Pt.getDate()).padStart(2,"0")}`,L=pt?bi(Sa,!1):0,Ee=(q?Qi:0)+ir*Ot,ot=pt?`${pt.start.getTime()}-${pt.end.getTime()}`:"";return c.useEffect(()=>{if(zr||!Cr)return;const W=I.current;W&&(W.scrollLeft=Math.max(0,Ee-W.clientWidth/2+Ot/2))},[ot,ir,q,Cr,zr]),t.jsxs("div",{style:me.page,children:[t.jsxs("div",{style:me.head,children:[t.jsx("div",{style:me.eyebrow,children:"Anvil · Goals"}),t.jsx("h1",{style:me.h1,children:se?"All Goals":`${n} Goals`})]}),t.jsxs("div",{style:me.pillarPicker,children:[t.jsx("button",{onClick:()=>{o("All"),g(null),j(null)},style:{...me.pillarChip,...se?{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:"All Goals"}),Ci.map(W=>{const Z=W===n;return t.jsxs("button",{onClick:()=>{o(W),g(null),j(null)},style:{...me.pillarChip,...Z?{background:Tr[W].dot,color:"#fff",borderColor:Tr[W].dot}:{}},children:[t.jsx("span",{style:{...me.dot,background:Z?"#fff":Tr[W].dot}}),W]},W)})]}),t.jsxs("div",{style:me.list,children:[nt.map(W=>t.jsx(Le,{goal:W,depth:0},W.id)),nt.length===0&&t.jsxs("div",{style:me.ganttEmpty,children:["No goals yet",se?"":` for ${n}`,"."]}),d==="ROOT"&&t.jsx(Pe,{parentId:"ROOT",parentGoal:null,depth:0}),d!=="ROOT"&&t.jsxs("button",{onClick:()=>wt("ROOT",null),style:me.rootAdd,children:[t.jsx(st,{size:14})," Add new goal"]})]}),t.jsxs("div",{style:me.ganttWrap,children:[t.jsxs("div",{style:me.ganttTop,children:[t.jsxs("div",{style:me.ganttTitle,children:[zr?"Monthly":"Daily"," Timeline",pt?` · ${ep(pt.start)} – ${ep(pt.end)}`:""]}),t.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[t.jsxs("div",{style:me.zoomToggle,children:[t.jsx("button",{onClick:()=>G("day"),style:{...me.zoomBtn,...zr?{}:me.zoomBtnOn},children:"Day"}),t.jsx("button",{onClick:()=>G("month"),style:{...me.zoomBtn,...zr?me.zoomBtnOn:{}},children:"Month"})]}),t.jsxs("button",{onClick:()=>te(W=>!W),style:me.labelToggle,children:[q?t.jsx(l0,{size:14}):t.jsx(a0,{size:14}),q?"Hide names":"Show names"]})]})]}),pt?zr?t.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[t.jsxs("div",{style:me.gBandRow,children:[q&&t.jsx("div",{style:{...me.gLabelHead,zIndex:4},children:"Goal"}),t.jsx("div",{style:{flex:1,display:"grid",gridTemplateColumns:`repeat(${zn}, 1fr)`,minWidth:0},children:eo.map((W,Z)=>t.jsxs("div",{style:me.gMonthFluid,children:[Xr[W.m],W.m===0||Z===0?` '${String(W.y).slice(2)}`:""]},Z))})]}),br.map(W=>t.jsxs("div",{children:[t.jsxs("div",{style:me.gGroupRow,children:[q?t.jsxs("div",{style:me.gGroupLabel,children:[W.label,t.jsx("span",{style:me.gGroupCount,children:W.items.length})]}):t.jsxs("div",{style:me.gGroupChip,children:[W.label," · ",W.items.length]}),t.jsx("div",{style:{flex:1}})]}),W.items.map(Z=>{var mr;const Ie=((mr=Tr[Z.pillar])==null?void 0:mr.dot)||"#9A968C",Ne=(ue==null?void 0:ue.id)===Z.id,tt=Ne?ue.dx:0,Ze=bi(Z.start_date,!1),et=Math.max(2,bi(Z.end_date,!0)-Ze),bt=Cn(Z),Be=et>=14,Nt=`${Z.title} · ${Z.start_date} → ${Z.end_date} · ${bt} day${bt>1?"s":""}`;return t.jsxs("div",{style:me.gRow,children:[q&&t.jsxs("div",{style:{...me.gLabel,paddingLeft:12},children:[t.jsx("span",{style:{...me.ganttRowDot,background:Ie}}),t.jsx("span",{style:{...me.gHzTag,color:Ie,borderColor:Ie},children:tp[Z.horizon]}),t.jsx("span",{style:me.gLabelText,title:Z.title,children:Z.title}),t.jsxs("span",{style:me.gDurChip,children:[bt,"d"]})]}),t.jsxs("div",{style:{position:"relative",flex:1,minHeight:36,minWidth:0,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent calc(100% / ${zn}))`},children:[Cr&&t.jsx("div",{style:{...me.gTodayLine,left:`${L}%`}}),t.jsxs("div",{onPointerDown:ht=>{ht.preventDefault(),A.current=ht.clientX;const to=ht.currentTarget.parentNode.offsetWidth;pe({id:Z.id,startX:ht.clientX,dx:0,g:Z,pxPerDay:to/je})},style:{...me.gBar,left:`${Ze}%`,width:`${et}%`,background:Ie,cursor:Ne?"grabbing":"grab",transform:tt?`translateX(${tt}px)`:"none",zIndex:Ne?6:1,boxShadow:Ne?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:Nt,children:[t.jsx(ql,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff"}}),Be&&t.jsx("span",{style:me.gBarLabel,children:Z.title})]}),!Be&&t.jsx("span",{style:{...me.gBarOutside,left:`calc(${Ze+et}% + 6px)`},title:Nt,children:Z.title})]})]},Z.id)})]},W.key))]}):t.jsx("div",{style:me.ganttScroll,ref:I,children:t.jsxs("div",{style:{minWidth:(q?Qi:0)+je*Ot,position:"relative"},children:[Cr&&t.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:Ee,width:Ot,background:"color-mix(in srgb, var(--accent) 14%, transparent)",pointerEvents:"none",zIndex:3}}),t.jsxs("div",{style:me.gBandRow,children:[q&&t.jsx("div",{style:{...me.gLabelHead,zIndex:4},children:"Goal"}),t.jsx("div",{style:{display:"flex"},children:Mt.map((W,Z)=>t.jsx("div",{style:{...me.gMonthCell,width:W.days*Ot},children:W.label},Z))})]}),t.jsxs("div",{style:me.gBandRow,children:[q&&t.jsx("div",{style:{...me.gLabelHead,zIndex:4,fontSize:10,color:"var(--text-3)",fontWeight:600},children:"days →"}),t.jsx("div",{style:{display:"flex"},children:H.map((W,Z)=>{const Ie=W.getDay()===0||W.getDay()===6,Ne=Z===ir;return t.jsx("div",{style:{...me.gDayCell,...Ie?me.gWeekend:{},...Ne?me.gTodayCell:{}},children:W.getDate()},Z)})})]}),br.map(W=>t.jsxs("div",{children:[t.jsxs("div",{style:me.gGroupRow,children:[q?t.jsxs("div",{style:me.gGroupLabel,children:[W.label,t.jsx("span",{style:me.gGroupCount,children:W.items.length})]}):t.jsxs("div",{style:me.gGroupChip,children:[W.label," · ",W.items.length]}),t.jsx("div",{style:{width:je*Ot,flexShrink:0}})]}),W.items.map(Z=>{var hi;const Ie=((hi=Tr[Z.pillar])==null?void 0:hi.dot)||"#9A968C",Ne=Math.round((Bo(Z.start_date)-pt.start)/Fi),tt=Cn(Z),Ze=(ue==null?void 0:ue.id)===Z.id,et=Ze?ue.dx:0,bt=H0(Z),Be=(U==null?void 0:U.id)===Z.id,Nt=bt?fc(Z):tt,mr=bt?op(Z):tt,ht=Be?Math.max(Nt,Math.min(mr,tt+Math.round(U.dx/Ot))):tt,to=ht*Ot-4,mi=to>=54,Ge=`${Z.title} · ${Z.start_date} → ${Z.end_date} · ${ht} day${ht>1?"s":""}${bt?` (max ${mr})`:""}`;return t.jsxs("div",{style:me.gRow,children:[q&&t.jsxs("div",{style:{...me.gLabel,paddingLeft:12},children:[t.jsx("span",{style:{...me.ganttRowDot,background:Ie}}),t.jsx("span",{style:{...me.gHzTag,color:Ie,borderColor:Ie},children:tp[Z.horizon]}),t.jsx("span",{style:me.gLabelText,title:Z.title,children:Z.title}),t.jsxs("span",{style:me.gDurChip,children:[ht,"d"]})]}),t.jsxs("div",{style:{...me.gTrack,width:je*Ot},children:[Cr&&t.jsx("div",{style:{...me.gTodayLine,left:ir*Ot}}),t.jsxs("div",{onPointerDown:ro=>{ro.preventDefault(),A.current=ro.clientX,pe({id:Z.id,startX:ro.clientX,dx:0,g:Z,pxPerDay:Ot})},style:{...me.gBar,left:Ne*Ot+2,width:to,background:Ie,cursor:Ze?"grabbing":"grab",transform:et?`translateX(${et}px)`:"none",zIndex:Ze||Be?6:1,boxShadow:Ze||Be?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:Ge,children:[bt&&ht>Nt&&t.jsx("div",{style:{position:"absolute",left:Nt*Ot,top:0,bottom:0,right:0,background:"#C2536B",borderRadius:"0 5px 5px 0"}}),t.jsx(ql,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff",position:"relative",zIndex:1}}),mi&&t.jsx("span",{style:{...me.gBarLabel,position:"relative",zIndex:1},children:Z.title}),bt&&t.jsx("div",{onPointerDown:ro=>{ro.preventDefault(),ro.stopPropagation(),de({id:Z.id,startX:ro.clientX,dx:0,g:Z})},style:me.resizeHandle,title:`Drag to extend up to ${mr} days`,children:t.jsx("div",{style:me.resizeGrip})})]}),!mi&&t.jsx("span",{style:{...me.gBarOutside,left:Ne*Ot+to+8+et},title:Ge,children:Z.title})]})]},Z.id)})]},W.key))]})}):t.jsx("div",{style:me.ganttEmpty,children:"No goals on the timeline. Click the eye icon on a goal to show it here."}),pt&&t.jsxs("div",{style:me.gLegend,children:[t.jsxs("span",{style:me.gLegendItem,children:[t.jsx("span",{style:{...me.gLegendBar}})," bar length = number of days"]}),t.jsxs("span",{style:me.gLegendItem,children:[t.jsx("span",{style:me.gLegendToday})," today"]})]})]}),P&&t.jsxs("div",{style:me.warnToast,children:[t.jsx(j0,{size:15,style:{flexShrink:0}}),t.jsx("span",{children:P})]}),t.jsx(pr,{toasts:We,onUndo:Xe,onDismiss:dt})]})}const me={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},pillarPicker:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},pillarChip:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},list:{background:"var(--surface)",borderRadius:12,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"hidden"},row:{display:"flex",alignItems:"center",gap:9,padding:"9px 10px",borderRadius:8,flexWrap:"nowrap"},caret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},horizonTag:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",border:"1px solid",borderRadius:5,padding:"2px 6px",flexShrink:0},nameCol:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:1},title:{fontSize:14,fontWeight:500,lineHeight:1.3,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",userSelect:"none",WebkitUserSelect:"none",cursor:"default"},titleFull:{whiteSpace:"normal",overflow:"visible",textOverflow:"clip",wordBreak:"break-word"},whenSub:{fontSize:11,fontStyle:"italic",color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},rowAdd:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,flexShrink:0},menuBackdrop:{position:"fixed",inset:0,zIndex:40},goalMenu:{position:"fixed",zIndex:41,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 6px 24px rgba(0,0,0,0.18)",padding:4,minWidth:180,display:"flex",flexDirection:"column"},menuItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:7,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text)",textAlign:"left"},rootAdd:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"var(--text-2)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"9px 12px",cursor:"pointer",fontWeight:600,fontFamily:"inherit",marginTop:6,width:"100%",justifyContent:"center"},addBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 0 6px 28px",flexWrap:"wrap"},editBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 10px",flexWrap:"wrap",background:"var(--bg)",borderRadius:8,margin:"4px 0"},input:{border:"1px solid var(--border)",borderRadius:7,padding:"8px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",flex:1,minWidth:120},monthSelect:{border:"1px solid var(--border)",borderRadius:7,padding:"8px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},inheritTag:{fontSize:11.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"6px 9px",borderRadius:7,flexShrink:0},toTag:{fontSize:11.5,fontWeight:600,color:"var(--text-3)",flexShrink:0},warnToast:{position:"fixed",top:18,left:"50%",transform:"translateX(-50%)",zIndex:300,display:"flex",alignItems:"center",gap:8,maxWidth:"90vw",background:"#C2536B",color:"#fff",padding:"10px 16px",borderRadius:10,fontSize:13,fontWeight:600,boxShadow:"0 6px 24px rgba(0,0,0,0.25)"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},ganttWrap:{background:"var(--surface)",borderRadius:12,padding:"16px 14px",marginTop:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},ganttTop:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10,marginBottom:14},ganttTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",fontFamily:"'Fraunces',Georgia,serif"},labelToggle:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 10px",borderRadius:8,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},zoomToggle:{display:"inline-flex",border:"1px solid var(--border)",borderRadius:8,overflow:"hidden"},zoomBtn:{border:"none",background:"var(--surface)",color:"var(--text-2)",padding:"5px 12px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},zoomBtnOn:{background:"var(--accent-strong)",color:"#fff"},gMonthFluid:{borderLeft:"1px solid var(--border)",fontSize:10,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gGroupChip:{position:"sticky",left:0,zIndex:3,background:"var(--surface-2)",padding:"5px 10px",fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",whiteSpace:"nowrap",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center"},ganttEmpty:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},ganttScroll:{overflowX:"auto"},ganttRowDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},gBandRow:{display:"flex",alignItems:"stretch",borderBottom:"1px solid var(--border)"},gLabelHead:{width:Qi,flexShrink:0,position:"sticky",left:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",padding:"6px 10px",fontSize:12,fontWeight:700,color:"var(--text-2)"},gMonthCell:{flexShrink:0,borderLeft:"1px solid var(--border)",fontSize:10.5,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gDayCell:{width:Ot,flexShrink:0,textAlign:"center",fontSize:10,color:"var(--text-3)",padding:"4px 0",borderLeft:"1px solid var(--border)",fontWeight:600},gWeekend:{background:"var(--surface-2)"},gTodayCell:{background:"var(--hover)",color:"var(--accent)",fontWeight:800},gGroupRow:{display:"flex",alignItems:"stretch",background:"var(--surface-2)",borderBottom:"1px solid var(--border)",borderTop:"1px solid var(--border)"},gGroupLabel:{width:Qi,flexShrink:0,position:"sticky",left:0,background:"var(--surface-2)",zIndex:3,padding:"6px 12px",fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",gap:7},gGroupCount:{fontSize:10,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},gHzTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.04em",border:"1px solid",borderRadius:4,padding:"1px 4px",flexShrink:0},gRow:{display:"flex",alignItems:"stretch",minHeight:36,borderBottom:"1px solid var(--border)"},gLabel:{width:Qi,flexShrink:0,display:"flex",alignItems:"center",gap:7,position:"sticky",left:0,background:"var(--surface)",zIndex:2,borderRight:"1px solid var(--border)",paddingRight:8,overflow:"hidden"},gLabelText:{flex:1,minWidth:0,fontSize:12,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},gDurChip:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",borderRadius:10,padding:"1px 6px",flexShrink:0,marginRight:6},gTrack:{position:"relative",flexShrink:0,minHeight:36,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent ${Ot}px)`},gBar:{position:"absolute",top:9,height:18,borderRadius:5,display:"flex",alignItems:"center",padding:"0 7px",boxShadow:"0 1px 2px rgba(0,0,0,0.15)",overflow:"hidden",zIndex:1},gBarLabel:{fontSize:11,fontWeight:600,color:"#fff",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},gBarOutside:{position:"absolute",top:9,height:18,display:"flex",alignItems:"center",fontSize:11,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",pointerEvents:"none",zIndex:1},resizeHandle:{position:"absolute",right:0,top:0,bottom:0,width:12,cursor:"ew-resize",display:"grid",placeItems:"center",touchAction:"none",zIndex:2},resizeGrip:{width:2,height:11,background:"rgba(255,255,255,0.9)",borderRadius:1,boxShadow:"3px 0 0 rgba(255,255,255,0.6)"},gTodayLine:{position:"absolute",top:0,bottom:0,width:2,background:"#C2536B",zIndex:0,opacity:.6},gLegend:{display:"flex",gap:16,marginTop:12,fontSize:11,color:"var(--text-3)",flexWrap:"wrap"},gLegendItem:{display:"flex",alignItems:"center",gap:6,fontWeight:600},gLegendBar:{width:18,height:8,borderRadius:3,background:"var(--accent)",display:"inline-block"},gLegendToday:{width:2,height:12,background:"#C2536B",display:"inline-block"}},kn={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.12)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.12)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.12)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.12)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.12)"}},ei=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],V0=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],di=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Eg=()=>di(new Date),Y0=(e=0)=>{const r=new Date,n=r.getDay(),o=n===0?-6:1-n,i=new Date(r);return i.setDate(r.getDate()+o+e*7),Array.from({length:7},(s,l)=>{const a=new Date(i);return a.setDate(i.getDate()+l),di(a)})},K0=(e=0)=>{const r=new Date,n=new Date(r.getFullYear(),r.getMonth()+e,1),o=n.getFullYear(),i=n.getMonth(),s=new Date(o,i+1,0).getDate(),l=n.getDay(),a=l===0?6:l-1,d=Array.from({length:s},(m,f)=>`${o}-${String(i+1).padStart(2,"0")}-${String(f+1).padStart(2,"0")}`),g=n.toLocaleDateString("en-US",{month:"long",year:"numeric"});return{dates:d,startOffset:a,label:g,year:o,month:i}},ip=e=>new Date(e+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"}),Q0=(e,r)=>{var i;const n=Number(e==null?void 0:e.min_interval_min)||0;if(n<=0||r!==Eg())return 0;const o=(i=e.log_count_times)==null?void 0:i[r];return o?Math.max(0,new Date(o).getTime()+n*6e4-Date.now()):0},Eh=e=>{const r=Math.ceil(e/1e3);return`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`},Mn=Eg(),q0=new Date().getFullYear();function X0(){var ce,De;const[e,r]=c.useState([]),[n,o]=c.useState("ALL"),[i,s]=c.useState(!1),[l,a]=c.useState(!1),[d,g]=c.useState(!1),[m,f]=c.useState(null),[h,B]=c.useState(null),[R,z]=c.useState(null),[S,p]=c.useState({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week",days:[],min_interval_min:0}),[b,u]=c.useState(!1),[k,x]=c.useState([]),T=c.useCallback(()=>F.getHabits().then(r).catch(console.error),[]);c.useEffect(()=>{T()},[T]);const E=c.useCallback(Q=>{Q&&Q.id!=null&&r(ie=>ie.map(O=>O.id===Q.id?Q:O))},[]);c.useEffect(()=>{F.getSetting("habit_order").then(Q=>{Array.isArray(Q==null?void 0:Q.value)&&x(Q.value)}).catch(()=>{})},[]);const w=c.useMemo(()=>k.length?[...e].sort((Q,ie)=>{const O=k.indexOf(Q.id),ee=k.indexOf(ie.id);return O===-1&&ee===-1?0:O===-1?1:ee===-1?-1:O-ee}):e,[e,k]),j=c.useMemo(()=>w.filter(Q=>Q.active!==!1),[w]);c.useEffect(()=>{n!=="ALL"&&e.some(Q=>Q.id===n&&Q.active===!1)&&o("ALL")},[e,n]);const Y=async Q=>{x(Q),await F.setSetting("habit_order",Q),u(!1)},q=async(Q,ie)=>{E(await F.updateHabit(Q,{active:ie}))};c.useEffect(()=>{const Q=()=>{const ie=window.innerWidth<720;s(ie),ie||a(!1)};return Q(),window.addEventListener("resize",Q),()=>window.removeEventListener("resize",Q)},[]);const{deleteItem:te,toasts:he,handleUndo:G,handleDismiss:ue}=ur(F.deleteHabit,F.restoreHabit,T),pe=Q=>{o(Q),i&&a(!1)},ze=(Q,ie)=>{(Q.type==="minimum"||Q.type==="maximum")&&Q.period==="day"?!i&&Q0(Q,ie)>0?z(O=>O&&O.habitId===Q.id&&O.date===ie?null:{habitId:Q.id,date:ie}):B({habit:Q,date:ie}):re(Q.id,ie)},re=async(Q,ie)=>{E(await F.toggleHabitLog(Q,ie))},U=async(Q,ie,O,ee)=>{try{E(await F.setHabitLogCount(Q,ie,O,ee)),B(null)}catch(fe){alert(fe.message||"Could not save.")}},de=async(Q,ie)=>{E(await F.clearHabitLog(Q,ie)),B(null)},X=Q=>{var ie;return!R||R.habitId!==Q.id?null:t.jsx(ev,{habit:Q,date:R.date,onSave:async O=>{var ee;try{await F.setHabitLogCount(Q.id,R.date,O,((ee=Q.log_notes)==null?void 0:ee[R.date])??"").then(E)}catch(fe){alert(fe.message||"Could not save.")}},onOpen:()=>{z(null),B({habit:Q,date:R.date})},onClose:()=>z(null)},R.date+":"+(((ie=Q.log_count_times)==null?void 0:ie[R.date])||""))},I=async()=>{if(!S.name.trim())return;const Q=S.type==="minimum"||S.type==="maximum",ie=S.type==="weekly";if(ie&&S.days.length===0)return;const O={name:S.name.trim(),pillar:S.pillar,target_per_week:Number(S.target_per_week)||7,type:S.type,target_count:Q?Number(S.target_count)||1:null,period:Q?S.period:null,days:ie?S.days:null,min_interval_min:Q&&S.period==="day"&&Number(S.min_interval_min)||0};await F.createHabit(O),p({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week",days:[],min_interval_min:0}),g(!1),T()},A=async(Q,ie)=>{n===Q&&o("ALL"),te(Q,ie)},P=e.find(Q=>Q.id===n),$=Q=>new Set(Q.logs||[]),ae={...N.sidebar,...i?N.sidebarOverlay:{},...i&&!l?N.sidebarHidden:{}};return t.jsxs("div",{style:N.shell,children:[i&&l&&t.jsx("div",{style:N.backdrop,onClick:()=>a(!1)}),t.jsxs("aside",{style:ae,children:[t.jsxs("div",{style:N.sideTop,children:[t.jsx("div",{style:N.brand,children:"Anvil · Habits"}),i&&t.jsx("button",{onClick:()=>a(!1),style:N.closeBtn,children:t.jsx(Ae,{size:18})})]}),t.jsxs("div",{style:{...N.sideItem,...n==="ALL"?N.sideItemOn:{},cursor:"default",padding:"2px 6px 2px 10px"},children:[t.jsxs("button",{onClick:()=>pe("ALL"),style:{display:"flex",alignItems:"center",gap:9,flex:1,border:"none",background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:n==="ALL"?600:500,color:"var(--text-2)",padding:"7px 0"},children:[t.jsx(wg,{size:15}),t.jsx("span",{style:N.sideLabel,children:"All Habits"}),t.jsx("span",{style:N.sideCount,children:e.length})]}),t.jsx("button",{onClick:Q=>{Q.stopPropagation(),u(!0)},style:N.tinyBtn,title:"Reorder habits",children:t.jsx(vt,{size:12})})]}),t.jsx("div",{style:N.sideDivider}),j.map(Q=>{var ee;const ie=n===Q.id,O=((ee=kn[Q.pillar])==null?void 0:ee.dot)||"#9A968C";return t.jsxs("button",{onClick:()=>pe(Q.id),style:{...N.sideItem,...ie?N.sideItemOn:{}},children:[t.jsx("span",{style:{...N.sideDot,background:O}}),t.jsx("span",{style:N.sideLabel,children:Q.name}),t.jsxs("span",{style:N.sideStreak,children:[t.jsx(jn,{size:11})," ",Q.streak]})]},Q.id)}),d?t.jsx(Z0,{habit:S,onChange:p,onSave:I,onCancel:()=>g(!1)}):t.jsxs("button",{onClick:()=>g(!0),style:N.sideNewBtn,children:[t.jsx(st,{size:13})," New habit"]})]}),t.jsxs("main",{style:N.main,children:[i&&t.jsxs("button",{onClick:()=>a(!0),style:N.hamburger,children:[t.jsx(Sg,{size:18}),t.jsx("span",{style:N.hamburgerLabel,children:n==="ALL"?"All Habits":P==null?void 0:P.name})]}),n==="ALL"?t.jsx(rv,{habits:j,dayAction:ze,logSet:$,onDelete:A,onEdit:Q=>f(Q),isMobile:i,onOpenHabit:pe,renderInline:X}):t.jsx(ov,{habit:P,dayAction:ze,logSet:$,onDelete:()=>A(P.id,P.name),onEdit:()=>f(P),onToggleActive:q,renderInline:X,setNote:(Q,ie)=>F.setHabitLogNote(P.id,Q,ie).then(E)}),n==="ALL"&&t.jsx(lv,{year:q0})]}),b&&t.jsx(sv,{habits:w,onSave:Y,onToggleActive:q,onClose:()=>u(!1)}),m&&t.jsx(J0,{habit:m,onSave:async Q=>{await F.updateHabit(m.id,Q),f(null),T()},onClose:()=>f(null)}),h&&t.jsx(tv,{habit:h.habit,date:h.date,initialCount:((ce=h.habit.log_counts)==null?void 0:ce[h.date])??0,initialNote:((De=h.habit.log_notes)==null?void 0:De[h.date])??"",onSave:(Q,ie)=>U(h.habit.id,h.date,Q,ie),onClear:()=>de(h.habit.id,h.date),onClose:()=>B(null)}),t.jsx(pr,{toasts:he,onUndo:G,onDismiss:ue})]})}function Fh({days:e,onToggle:r}){return t.jsx("div",{style:N.dayPick,children:ei.map((n,o)=>t.jsx("button",{type:"button",onClick:()=>r(o),style:{...N.dayChip,...e.includes(o)?N.dayChipOn:{}},children:n},n))})}function Z0({habit:e,onChange:r,onSave:n,onCancel:o}){const i=e.type==="minimum"||e.type==="maximum",s=e.type==="weekly",l=a=>r(d=>({...d,days:d.days.includes(a)?d.days.filter(g=>g!==a):[...d.days,a].sort((g,m)=>g-m)}));return t.jsxs("div",{style:N.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"Habit name",value:e.name,onChange:a=>r(d=>({...d,name:a.target.value})),onKeyDown:a=>a.key==="Enter"&&n(),style:N.sideInput}),t.jsx("select",{value:e.pillar,onChange:a=>r(d=>({...d,pillar:a.target.value})),style:N.sideInput,children:Object.keys(kn).map(a=>t.jsx("option",{children:a},a))}),t.jsxs("select",{value:e.type,onChange:a=>r(d=>({...d,type:a.target.value})),style:N.sideInput,children:[t.jsx("option",{value:"regular",children:"Regular (yes/no)"}),t.jsx("option",{value:"weekly",children:"Weekly (specific days)"}),t.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),t.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),s&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:N.pickHint,children:"Do this on…"}),t.jsx(Fh,{days:e.days,onToggle:l})]}),i&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{display:"flex",gap:6},children:[t.jsx("input",{type:"number",min:1,placeholder:"N",value:e.target_count||"",onChange:a=>r(d=>({...d,target_count:a.target.value})),style:{...N.sideInput,width:60}}),t.jsx("select",{value:e.period,onChange:a=>r(d=>({...d,period:a.target.value})),style:N.sideInput,children:["day","week","month","year"].map(a=>t.jsx("option",{children:a},a))})]}),e.period==="day"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:N.pickHint,children:"Min gap between entries (minutes)"}),t.jsx("input",{type:"number",min:0,placeholder:"0",value:e.min_interval_min??0,onChange:a=>r(d=>({...d,min_interval_min:a.target.value})),style:N.sideInput})]})]}),t.jsxs("div",{style:{display:"flex",gap:6},children:[t.jsx("button",{onClick:n,style:N.sideAddBtn,children:t.jsx(He,{size:13})}),t.jsx("button",{onClick:o,style:N.sideCancelBtn,children:t.jsx(Ae,{size:13})})]})]})}function J0({habit:e,onSave:r,onClose:n}){const[o,i]=c.useState(e.name),[s,l]=c.useState(e.pillar||"Health"),[a,d]=c.useState(e.type||"regular"),[g,m]=c.useState(e.target_count||""),[f,h]=c.useState(e.period||"week"),[B,R]=c.useState(e.reminder_time||""),[z,S]=c.useState(e.days||[]),[p,b]=c.useState(e.min_interval_min??0),u=a==="minimum"||a==="maximum",k=a==="weekly",x=E=>S(w=>w.includes(E)?w.filter(j=>j!==E):[...w,E].sort((j,Y)=>j-Y)),T=()=>{k&&z.length===0||r({name:o.trim(),pillar:s,type:a,target_count:u?Number(g):null,period:u?f:null,days:k?z:[],reminder_time:B||null,min_interval_min:u&&f==="day"&&Number(p)||0})};return t.jsx("div",{style:N.modalOverlay,onClick:n,children:t.jsxs("div",{style:N.modal,onClick:E=>E.stopPropagation(),children:[t.jsxs("div",{style:N.modalHead,children:["Edit Habit",t.jsx("button",{onClick:n,style:N.closeBtn,children:t.jsx(Ae,{size:16})})]}),t.jsx("label",{style:N.modalLabel,children:"Name"}),t.jsx("input",{value:o,onChange:E=>i(E.target.value),style:N.sideInput}),t.jsx("label",{style:N.modalLabel,children:"Pillar"}),t.jsx("select",{value:s,onChange:E=>l(E.target.value),style:N.sideInput,children:Object.keys(kn).map(E=>t.jsx("option",{value:E,children:E},E))}),t.jsx("label",{style:N.modalLabel,children:"Type"}),t.jsxs("select",{value:a,onChange:E=>d(E.target.value),style:N.sideInput,children:[t.jsx("option",{value:"regular",children:"Regular (yes/no)"}),t.jsx("option",{value:"weekly",children:"Weekly (specific days)"}),t.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),t.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),k&&t.jsxs(t.Fragment,{children:[t.jsx("label",{style:N.modalLabel,children:"Days"}),t.jsx(Fh,{days:z,onToggle:x})]}),u&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[t.jsx("input",{type:"number",min:1,value:g,onChange:E=>m(E.target.value),style:{...N.sideInput,width:70}}),t.jsx("select",{value:f,onChange:E=>h(E.target.value),style:N.sideInput,children:["day","week","month","year"].map(E=>t.jsx("option",{children:E},E))})]}),f==="day"&&t.jsxs(t.Fragment,{children:[t.jsx("label",{style:N.modalLabel,children:"Min gap between entries (minutes)"}),t.jsx("input",{type:"number",min:0,value:p,onChange:E=>b(E.target.value),style:N.sideInput})]})]}),t.jsx("label",{style:N.modalLabel,children:"Reminder time"}),t.jsx("input",{type:"time",value:B,onChange:E=>R(E.target.value),style:N.sideInput}),t.jsx("button",{onClick:T,style:{...N.sideAddBtn,width:"100%",marginTop:10,height:36},children:"Save"})]})})}function ev({habit:e,date:r,onSave:n,onOpen:o,onClose:i}){var k,x,T;const[s,l]=c.useState(Date.now()),a=((k=e.log_counts)==null?void 0:k[r])??0,[d,g]=c.useState(a),m=Number(e.min_interval_min)||0,f=e.target_count,h=(x=e.log_count_times)==null?void 0:x[r],B=h?new Date(h).getTime()+m*6e4:0,R=Math.max(0,B-s);c.useEffect(()=>{const E=window.setInterval(()=>l(Date.now()),1e3);return()=>window.clearInterval(E)},[]);const z=d>=a+1||R>0,S=d<=0,p=d!==a,b=((T=kn[e.pillar])==null?void 0:T.dot)||"#9A968C",u=e.type==="minimum"?d>=f:d>0&&d<=f;return t.jsxs("div",{style:N.inlineCounter,children:[t.jsxs("span",{style:{...N.inlineCount,color:u?"#4C9A6B":b},children:[d,t.jsxs("span",{style:N.inlineTarget,children:["/",f]})]}),t.jsx("button",{onClick:()=>!S&&g(E=>Math.max(0,E-1)),disabled:S,style:{...N.inlinePlus,...S?{opacity:.45,cursor:"not-allowed"}:{}},children:"−"}),t.jsx("button",{onClick:()=>!z&&g(E=>E+1),disabled:z,style:{...N.inlinePlus,...z?{opacity:.45,cursor:"not-allowed"}:{background:b,borderColor:b,color:"#fff"}},title:R>0?"Wait for the interval":d>=a+1?"Press Set to confirm":"Stage an entry",children:"+"}),t.jsx("button",{onClick:()=>n(d),disabled:!p,style:{...N.inlineSet,...p?{background:b,borderColor:b,color:"#fff"}:{opacity:.5,cursor:"not-allowed"}},children:"Set"}),R>0?t.jsxs("span",{style:N.inlineWait,children:["Wait ",Eh(R)]}):t.jsx("span",{style:N.inlineReady,children:p?"Press Set to confirm":"Tap + to add"}),t.jsx("button",{onClick:o,style:N.inlineMore,title:"Open details",children:"⋯"}),t.jsx("button",{onClick:i,style:N.inlineMore,title:"Hide",children:t.jsx(Ae,{size:13})})]})}function tv({habit:e,date:r,initialCount:n,initialNote:o,onSave:i,onClear:s,onClose:l}){var ue;const a=n??0,[d,g]=c.useState(a),[m,f]=c.useState(o??""),[h,B]=c.useState(Date.now()),R=e.target_count,z=e.type==="minimum"?d>=R:d>0&&d<=R,S=e.type==="maximum"&&d>R,p=z?"#4C9A6B":S?"#C2536B":"#C2773B",b=z?"✓ Goal met":S?"Over the limit":"Not met yet",u=Number(e.min_interval_min)||0,k=r===Eg(),x=u>0&&k,T=(ue=e.log_count_times)==null?void 0:ue[r],E=x&&T?new Date(T).getTime()+u*6e4:0,w=Math.max(0,E-h);c.useEffect(()=>{if(!x||w<=0)return;const pe=window.setInterval(()=>B(Date.now()),1e3);return()=>window.clearInterval(pe)},[x,w]);const j=d-a,Y=x&&(d>=a+1||w>0),q=d<=0,te=()=>{Y||g(pe=>pe+1)},he=()=>{q||g(pe=>Math.max(0,pe-1))},G=d!==a||m!==(o??"");return t.jsx("div",{style:N.modalOverlay,onClick:l,children:t.jsxs("div",{style:N.modal,onClick:pe=>pe.stopPropagation(),children:[t.jsxs("div",{style:N.modalHead,children:[e.name,t.jsx("button",{onClick:l,style:N.closeBtn,children:t.jsx(Ae,{size:16})})]}),t.jsxs("div",{style:{fontSize:12,color:"var(--text-3)",marginBottom:2},children:[r," · ",e.type==="minimum"?`at least ${R}`:`no more than ${R}`," / ",e.period,u>0&&t.jsxs(t.Fragment,{children:[" · ",u,"m between entries"]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:20,margin:"14px 0 6px"},children:[t.jsx("button",{onClick:he,disabled:q,style:{...N.counterBtn,...q?{opacity:.45,cursor:"not-allowed"}:{}},children:"−"}),t.jsx("span",{style:{fontSize:38,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:52,textAlign:"center",color:p},children:d}),t.jsx("button",{onClick:te,disabled:Y,style:{...N.counterBtn,...Y?{opacity:.45,cursor:"not-allowed"}:{}},title:x&&w>0?"Wait for the interval before the next entry":x&&d>=a+1?"Press Set to confirm this entry":void 0,children:"+"})]}),x&&w>0&&t.jsxs("div",{style:{textAlign:"center",fontSize:12,fontWeight:700,color:"#C2773B",marginBottom:8},children:["Wait ",Eh(w)," before the next entry"]}),x&&w<=0&&t.jsx("div",{style:{textAlign:"center",fontSize:11.5,color:"var(--text-3)",marginBottom:8},children:j>0?"Press Set to confirm this entry":`Tap + to add an entry (each at least ${u}m apart)`}),t.jsx("div",{style:{textAlign:"center",fontSize:12.5,fontWeight:700,color:p,marginBottom:12},children:b}),t.jsx("textarea",{value:m,onChange:pe=>f(pe.target.value),placeholder:"Add a comment (optional)…",style:{...N.sideInput,minHeight:56,resize:"vertical"}}),t.jsxs("div",{style:{display:"flex",gap:8,marginTop:10},children:[t.jsxs("button",{onClick:s,style:{...N.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[t.jsx(Ae,{size:14})," Delete"]}),t.jsxs("button",{onClick:()=>i(d,m),disabled:!G,style:{...N.sideAddBtn,flex:1,justifyContent:"center",height:38,...G?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:14})," Set"]})]})]})})}function Ja({pct:e,label:r,sub:n,color:o}){const s=2*Math.PI*26,l=s*(1-Math.max(0,Math.min(100,e))/100);return t.jsxs("div",{style:N.ringStat,children:[t.jsxs("div",{style:N.ringBox,children:[t.jsxs("svg",{width:"70",height:"70",viewBox:"0 0 70 70",children:[t.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:"var(--border)",strokeWidth:"7"}),t.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:o,strokeWidth:"7",strokeLinecap:"round",strokeDasharray:s,strokeDashoffset:l,transform:"rotate(-90 35 35)",style:{transition:"stroke-dashoffset 0.5s ease"}})]}),t.jsxs("div",{style:{...N.ringPct,color:o},children:[e,"%"]})]}),t.jsxs("div",{children:[t.jsx("div",{style:N.ringLabel,children:r}),t.jsx("div",{style:N.ringSub,children:n})]})]})}function rv({habits:e,dayAction:r,logSet:n,onDelete:o,onEdit:i,renderInline:s,isMobile:l,onOpenHabit:a}){const[d,g]=c.useState(0),[m,f]=c.useState(null),[h,B]=c.useState(!1);c.useEffect(()=>{F.getSetting("habit_show_names").then(I=>{typeof(I==null?void 0:I.value)=="boolean"&&B(I.value)}).catch(()=>{})},[]);const R=()=>B(I=>{const A=!I;return F.setSetting("habit_show_names",A).catch(()=>{}),A&&f(null),A}),z=Y0(d),S=`${ip(z[0])} – ${ip(z[6])}${d===0?" · This week":""}`,p=I=>{const A=new Date(I+"T00:00:00"),P=A.getDay(),$=new Date(A);return $.setDate(A.getDate()+(P===0?-6:1-P)),Array.from({length:7},(ae,ce)=>{const De=new Date($);return De.setDate($.getDate()+ce),di(De)})},b=I=>I.logs||[],u=(I,A)=>I.type==="minimum"&&I.period==="week"&&A.filter(P=>n(I).has(P)).length>=(I.target_count||0),k=(I,A)=>I.type==="minimum"&&I.period==="month"&&b(I).filter(P=>P.slice(0,7)===A).length>=(I.target_count||0),x=(I,A)=>I.type==="minimum"&&I.period==="year"&&b(I).filter(P=>P.slice(0,4)===A).length>=(I.target_count||0),T=(I,A)=>{var P;if((I.type==="minimum"||I.type==="maximum")&&I.period==="day"){const $=(P=I.log_counts)==null?void 0:P[A];return $==null?!1:I.type==="minimum"?$>=(I.target_count||0):$>0&&$<=(I.target_count||0)}return n(I).has(A)},E=(I,A)=>I.type!=="minimum"?!1:I.period==="week"?u(I,p(A)):I.period==="month"?k(I,A.slice(0,7)):I.period==="year"?x(I,A.slice(0,4)):!1,w=(I,A)=>T(I,A)||E(I,A),j=e.filter(I=>w(I,Mn)).length,Y=e.length?Math.round(j/e.length*100):0,q=I=>{if(I.type==="minimum"&&I.period==="month"&&(k(I,z[0].slice(0,7))||k(I,z[6].slice(0,7)))||I.type==="minimum"&&I.period==="year"&&(x(I,z[0].slice(0,4))||x(I,z[6].slice(0,4)))||I.type==="minimum"&&I.period==="week"&&u(I,z))return 1;if((I.type==="minimum"||I.type==="maximum")&&I.period==="day")return Math.min(1,z.filter(ae=>T(I,ae)).length/7);const A=n(I),P=z.filter(ae=>A.has(ae)).length,$=I.type==="minimum"&&I.period==="week"?I.target_count||1:I.target_per_week||7;return $>0?Math.min(1,P/$):0},te=e.length?Math.round(e.reduce((I,A)=>I+q(A),0)/e.length*100):0,he=new Date,G=`${he.getFullYear()}-${String(he.getMonth()+1).padStart(2,"0")}`,ue=new Date(he.getFullYear(),he.getMonth()+1,0).getDate(),pe=ue/7,ze=I=>{if(I.type==="minimum"&&I.period==="month"&&k(I,G)||I.type==="minimum"&&I.period==="year"&&x(I,G.slice(0,4)))return 1;if((I.type==="minimum"||I.type==="maximum")&&I.period==="day"){let $=0;for(let ae=1;ae<=ue;ae++)T(I,`${G}-${String(ae).padStart(2,"0")}`)&&$++;return Math.min(1,$/ue)}const A=b(I).filter($=>$.slice(0,7)===G).length;let P;return I.type==="minimum"&&I.period==="week"?P=(I.target_count||1)*pe:I.type==="minimum"&&I.period==="month"?P=I.target_count||1:I.type==="minimum"&&I.period==="year"?P=(I.target_count||1)/12:P=(I.target_per_week||7)*pe,P>0?Math.min(1,A/P):0},re=e.length?Math.round(e.reduce((I,A)=>I+ze(A),0)/e.length*100):0,U=I=>{const A=new Date;return A.setDate(A.getDate()+I),di(A)},de=I=>e.filter(A=>w(A,I)).length,X=[{label:"Today",value:de(U(0)),color:"#4C9A6B"},{label:"Yesterday",value:de(U(-1)),color:"var(--text-3)"},{label:"Day before",value:de(U(-2)),color:"var(--text-3)"}];return t.jsxs("div",{children:[t.jsxs("div",{style:N.mainHead,children:[t.jsx("div",{style:N.eyebrow,children:"Weekly view"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,flexWrap:"wrap"},children:[t.jsx("h1",{style:N.h1,children:"All Habits"}),l&&e.length>0&&t.jsxs("button",{onClick:R,style:N.nameToggle,title:h?"Hide habit names — tap a circle to reveal one":"Show all habit names",children:[t.jsx("span",{style:{...N.nameToggleTrack,background:h?"#4C9A6B":"var(--border)"},children:t.jsx("span",{style:{...N.nameToggleKnob,left:h?19:3}})}),h?t.jsx(hs,{size:13}):t.jsx(Ql,{size:13}),t.jsx("span",{children:"Names"})]})]})]}),t.jsxs("div",{style:N.navBar,children:[t.jsx("button",{onClick:()=>g(I=>I-1),style:N.navBtn,children:t.jsx(Sn,{size:16})}),t.jsx("span",{style:N.navLabel,children:S}),t.jsx("button",{onClick:()=>g(I=>Math.min(0,I+1)),disabled:d>=0,style:{...N.navBtn,...d>=0?N.navBtnDisabled:{}},children:t.jsx(nn,{size:16})})]}),t.jsxs("div",{style:{...N.weekCard,...l?N.weekCardMobile:{}},children:[t.jsxs("div",{style:{...N.weekHeadRow,...l?N.weekRowMobile:{}},children:[t.jsx("div",{style:{...N.weekNameCol,...l?N.weekNameColMobile:{}}}),ei.map((I,A)=>t.jsxs("div",{style:N.weekDayHead,children:[t.jsx("span",{style:N.weekDayName,children:I}),t.jsx("span",{style:{...N.weekDayNum,...z[A]===Mn?N.weekDayToday:{}},children:new Date(z[A]+"T00:00").getDate()})]},I)),t.jsx("div",{style:{...N.weekStreakCol,...l?N.weekStreakColMobile:{}},children:l?t.jsx(jn,{size:12}):"Streak"})]}),e.map(I=>{var Xe,dt;const A=((Xe=kn[I.pillar])==null?void 0:Xe.dot)||"#9A968C",P=((dt=kn[I.pillar])==null?void 0:dt.soft)||"rgba(0,0,0,0.05)",$=n(I),ae=I.type==="weekly",ce=new Set(I.days||[]),De=[0,1,2,3,4,5,6].filter($e=>ce.has($e)),Q=ae&&De.length>0&&De.every($e=>$.has(z[$e])),ie=ae?Array(7).fill(Q):null,O=I.type==="minimum"&&["week","month","year"].includes(I.period),ee=I.target_count||0,fe=I.logs||[],M=$e=>fe.filter(rt=>rt.slice(0,7)===$e).length,y=$e=>fe.filter(rt=>rt.slice(0,4)===$e).length,ne=z.filter($e=>$.has($e)).length,D=$e=>O?I.period==="week"?ne>=ee:I.period==="month"?M($e.slice(0,7))>=ee:I.period==="year"?y($e.slice(0,4))>=ee:!1:!1,ge=O&&z.some(D),ve=I.period==="week"?ne:I.period==="month"?M(z[0].slice(0,7)):I.period==="year"?y(z[0].slice(0,4)):0,We=m===I.id;return t.jsxs(c.Fragment,{children:[l&&(We||h)&&t.jsxs("button",{onClick:()=>a&&a(I.id),style:{...N.mobileNameBanner,color:A},children:[t.jsx("span",{style:{...N.sideDot,background:A}}),t.jsx("span",{style:N.mobileNameText,children:I.name}),I.type==="weekly"?t.jsx("span",{style:N.typeBadge,children:(I.days||[]).map($e=>ei[$e]).join("·")||"—"}):I.type!=="regular"?t.jsx("span",{style:N.typeBadge,children:I.type==="minimum"?`≥${I.target_count}/${I.period}`:`≤${I.target_count}/${I.period}`}):null]}),t.jsxs("div",{style:{...N.weekRow,...l?N.weekRowMobile:{}},children:[l?t.jsx("div",{style:{...N.weekNameCol,...N.weekNameColMobile},children:t.jsx("button",{onClick:()=>f(We?null:I.id),style:{...N.habitAvatar,background:A},title:I.name,children:(I.name||"?").trim().charAt(0).toUpperCase()})}):t.jsxs("div",{style:{...N.weekNameCol,flexDirection:"column",alignItems:"flex-start",gap:2},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[t.jsx("span",{style:{...N.sideDot,background:A}}),t.jsx("span",{style:N.weekHabitName,children:I.name})]}),I.type==="weekly"?t.jsx("span",{style:N.typeBadge,children:(I.days||[]).map($e=>ei[$e]).join("·")||"—"}):I.type!=="regular"?t.jsx("span",{style:N.typeBadge,children:I.type==="minimum"?`≥${I.target_count}/${I.period}`:`≤${I.target_count}/${I.period}`}):null]}),z.map(($e,rt)=>{var mt,wt;if(ae&&!ce.has(rt))return t.jsxs("div",{style:{...N.weekCell,position:"relative",zIndex:0},children:[ie[rt]&&t.jsx("span",{style:{...N.chainLine,background:A,left:ie[rt-1]?0:"50%",right:ie[rt+1]?0:"50%"}}),t.jsx("span",{style:{...N.offDay,position:"relative",zIndex:1},title:"Not scheduled",children:"·"})]},$e);const Qe=$.has($e),at=$e>Mn,se=(I.type==="minimum"||I.type==="maximum")&&I.period==="day",Me=(mt=I.log_counts)==null?void 0:mt[$e],qe=Me!=null,nt=!!((wt=I.log_notes)!=null&&wt[$e]),ct=D($e),Ft=rt>0&&D(z[rt-1]),zt=rt<z.length-1&&D(z[rt+1]),yt=Qe||ct;return t.jsxs("div",{style:{...N.weekCell,position:"relative",zIndex:0},children:[ct&&t.jsx("span",{style:{...N.chainLine,background:A,left:Ft?0:"50%",right:zt?0:"50%"}}),ae&&ie[rt]&&t.jsx("span",{style:{...N.chainLine,background:A,left:ie[rt-1]?0:"50%",right:ie[rt+1]?0:"50%"}}),t.jsx("button",{disabled:at,onClick:()=>r(I,$e),style:{...N.tick,...yt?{background:A,borderColor:A,color:"#fff"}:{},...se&&qe&&!Qe?{borderColor:A,color:A}:{},...at&&!yt?N.tickFuture:{}},children:se?qe?t.jsx("span",{style:{fontSize:12,fontWeight:700},children:Me}):null:Qe&&t.jsx(He,{size:14,color:"#fff",strokeWidth:3})}),nt&&t.jsx("span",{style:N.cellNoteBubble})]},$e)}),t.jsx("div",{style:{...N.weekStreakCol,...l?N.weekStreakColMobile:{}},children:Q?t.jsxs("span",{style:{...N.streakPill,...l?N.streakPillMobile:{},background:P,color:A},children:[t.jsx(ys,{size:12})," ",l?De.length:`${De.length}/${De.length}`]}):ge?t.jsxs("span",{style:{...N.streakPill,...l?N.streakPillMobile:{},background:P,color:A},children:[t.jsx(ys,{size:12})," ",l?ve:`${ve}/${ee}`]}):t.jsxs("span",{style:{...N.streakPill,...l?N.streakPillMobile:{},background:P,color:A},children:[t.jsx(jn,{size:12})," ",I.streak]})})]}),s&&s(I)]},I.id)}),e.length===0&&t.jsx("div",{style:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},children:"No habits yet — add one from the sidebar."})]}),e.length>0&&t.jsxs("div",{style:{...N.progressCard,marginTop:18,marginBottom:0},children:[t.jsx(Ja,{pct:Y,label:"Today",sub:`${j}/${e.length} done`,color:"#4C9A6B"}),t.jsx("div",{style:N.progressDivider}),t.jsx(Ja,{pct:te,label:"This week",sub:"of weekly targets",color:"#3A7CA5"}),t.jsx("div",{style:N.progressDivider}),t.jsx(Ja,{pct:re,label:"This month",sub:"of monthly targets",color:"#8268B0"})]}),e.length>0&&t.jsxs("div",{style:{...N.progressCard,marginTop:14,marginBottom:0,flexDirection:"column",alignItems:"stretch",gap:12},children:[t.jsx("div",{style:N.threeDayTitle,children:"Last 3 days · habits completed"}),t.jsx(nv,{items:X,total:e.length})]})]})}function nv({items:e,total:r}){const n=Math.max(1,r,...e.map(o=>o.value));return t.jsx("div",{style:N.tbWrap,children:e.map((o,i)=>t.jsxs("div",{style:N.tbRow,children:[t.jsx("div",{style:N.tbLbl,children:o.label}),t.jsx("div",{style:N.tbTrack,children:t.jsx("div",{style:{...N.tbBar,width:`${o.value/n*100}%`,background:o.color}})}),t.jsxs("div",{style:N.tbVal,children:[o.value,"/",r]})]},i))})}function ov({habit:e,dayAction:r,logSet:n,onDelete:o,onEdit:i,setNote:s,onToggleActive:l,renderInline:a}){var De,Q;const[d,g]=c.useState(null),[m,f]=c.useState(""),[h,B]=c.useState(null),[R,z]=c.useState(0),S=c.useRef(null);if(!e)return null;const p=((De=kn[e.pillar])==null?void 0:De.dot)||"#9A968C",b=((Q=kn[e.pillar])==null?void 0:Q.soft)||"rgba(0,0,0,0.05)",u=n(e),k=e.type==="weekly",x=new Set(e.days||[]),T=ie=>(new Date(ie+"T00:00").getDay()+6)%7,E=ie=>!k||x.has(T(ie)),w=ie=>{const O=new Date(ie+"T00:00"),ee=O.getDay(),fe=new Date(O);fe.setDate(O.getDate()+(ee===0?-6:1-ee));const M=Array.from({length:7},(D,ge)=>{const ve=new Date(fe);return ve.setDate(fe.getDate()+ge),di(ve)}),y=[0,1,2,3,4,5,6].filter(D=>x.has(D)),ne=y.length>0&&y.every(D=>u.has(M[D]));return Array(7).fill(ne)},{dates:j,startOffset:Y,label:q,year:te}=K0(R),he=j.filter(ie=>ie<=Mn&&E(ie)&&u.has(ie)).length,G=j.filter(ie=>ie<=Mn&&E(ie)).length,ue=G>0?Math.round(he/G*100):0,pe=e.type==="minimum"&&(e.period==="month"||e.period==="year"),ze=e.period==="year"?(e.logs||[]).filter(ie=>ie.startsWith(`${te}-`)).length:j.filter(ie=>u.has(ie)).length,re=pe&&ze>=(e.target_count||0),U=e.type==="minimum"&&e.period==="week",de=e.target_count||0,X=ie=>{const O=new Date(ie+"T00:00"),ee=O.getDay(),fe=new Date(O);fe.setDate(O.getDate()+(ee===0?-6:1-ee));let M=0;for(let y=0;y<7;y++){const ne=new Date(fe);ne.setDate(fe.getDate()+y),u.has(di(ne))&&M++}return M},I=ie=>pe?re:U?X(ie)>=de:!1,A=U?X(Mn):0,P=U&&A>=de,$=ie=>{S.current=setTimeout(()=>g(ie),500)},ae=()=>clearTimeout(S.current),ce=ie=>{var O;B(ie),f(((O=e.log_notes)==null?void 0:O[ie])||""),g(null)};return t.jsxs("div",{children:[t.jsxs("div",{style:N.mainHead,children:[t.jsxs("div",{children:[t.jsxs("div",{style:N.eyebrow,children:[t.jsx("span",{style:{...N.sideDot,background:p,marginRight:6}}),e.pillar," · Monthly view"]}),t.jsx("h1",{style:N.h1,children:e.name})]}),t.jsxs("div",{style:{display:"flex",gap:8,marginTop:8,flexWrap:"wrap"},children:[t.jsxs("button",{onClick:i,style:N.actionBtn,children:[t.jsx(vt,{size:14})," Edit"]}),t.jsx("button",{onClick:()=>l(e.id,e.active===!1),style:{...N.actionBtn,...e.active===!1?{color:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:e.active===!1?t.jsxs(t.Fragment,{children:[t.jsx(He,{size:14})," Enable"]}):t.jsxs(t.Fragment,{children:[t.jsx(p0,{size:14})," Disable"]})}),t.jsxs("button",{onClick:o,style:{...N.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[t.jsx(Ae,{size:14})," Delete"]}),e.reminder_time&&t.jsxs("button",{style:N.actionBtn,children:[t.jsx(jg,{size:14})," ",e.reminder_time]})]})]}),t.jsxs("div",{style:N.statStrip,children:[t.jsx(no,{label:"Current streak",value:`${e.streak} days`,c:p,soft:b,flame:!0}),t.jsx(no,{label:"Best streak",value:`${e.max_streak??e.streak} days`,c:p,soft:b,flame:!0}),t.jsx(no,{label:"Done this month",value:`${he}/${G}`,c:p,soft:b}),t.jsx(no,{label:"Completion",value:`${ue}%`,c:p,soft:b}),e.type==="regular"?t.jsx(no,{label:"Weekly target",value:`${e.target_per_week}×`,c:p,soft:b}):e.type==="weekly"?t.jsx(no,{label:"Days",value:(e.days||[]).map(ie=>ei[ie]).join(", ")||"—",c:p,soft:b}):t.jsx(no,{label:e.type==="minimum"?"Min target":"Max allowed",value:`${e.target_count}/${e.period}`,c:p,soft:b})]}),a&&a(e),t.jsxs("div",{style:N.navBar,children:[t.jsx("button",{onClick:()=>z(ie=>ie-1),style:N.navBtn,children:t.jsx(Sn,{size:16})}),t.jsxs("span",{style:N.navLabel,children:[q,R===0?" · This month":""]}),t.jsx("button",{onClick:()=>z(ie=>Math.min(0,ie+1)),disabled:R>=0,style:{...N.navBtn,...R>=0?N.navBtnDisabled:{}},children:t.jsx(nn,{size:16})})]}),pe&&t.jsxs("div",{style:{...N.chainBanner,background:re?b:"var(--bg)",color:re?p:"var(--text-3)"},children:[t.jsx(ys,{size:15}),re?`${e.period==="year"?"Yearly":"Monthly"} chain complete — ${ze}/${e.target_count} connected`:`${ze}/${e.target_count} this ${e.period} · ${(e.target_count||0)-ze} more to connect the chain`]}),U&&R===0&&t.jsxs("div",{style:{...N.chainBanner,background:P?b:"var(--bg)",color:P?p:"var(--text-3)"},children:[t.jsx(ys,{size:15}),P?`This week's chain complete — ${A}/${de} connected`:`${A}/${de} this week · ${Math.max(0,de-A)} more to connect the chain`]}),t.jsxs("div",{style:N.monthCard,children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[t.jsx("div",{style:N.monthTitle,children:q}),t.jsx("span",{style:{fontSize:11,color:"var(--text-3)"},children:"Long-press a day for options"})]}),t.jsx("div",{style:N.monthDow,children:ei.map(ie=>t.jsx("div",{style:N.monthDowCell,children:ie},ie))}),t.jsxs("div",{style:N.monthGrid,children:[Array.from({length:Y}).map((ie,O)=>t.jsx("div",{},`pad${O}`)),j.map((ie,O)=>{var $e,rt;const ee=O+1;if(k&&!E(ie)){const Qe=T(ie),at=w(ie),se=(Y+O)%7;return t.jsxs("div",{style:{position:"relative"},children:[at[Qe]&&t.jsx("span",{style:{...N.chainLine,background:p,...se===0?{left:"50%"}:{left:at[Qe-1]?-6:"50%"},...se===6?{right:"50%"}:{right:at[Qe+1]?-6:"50%"}}}),t.jsx("div",{style:{...N.monthDay,...N.monthDayOff,width:"100%",position:"relative",zIndex:1},children:ee})]},ie)}const fe=u.has(ie),M=ie>Mn,y=ie===Mn,ne=!!(($e=e.log_notes)!=null&&$e[ie]),D=(e.type==="minimum"||e.type==="maximum")&&e.period==="day",ge=(rt=e.log_counts)==null?void 0:rt[ie],ve=ge!=null,We=I(ie),Xe=We&&!fe,dt=(Y+O)%7;return t.jsxs("div",{style:{position:"relative"},children:[We&&t.jsx("span",{style:{...N.chainLine,background:p,...dt===0?{left:"50%"}:{left:-6},...dt===6?{right:"50%"}:{right:-6}}}),k&&(()=>{const Qe=T(ie),at=w(ie);return at[Qe]?t.jsx("span",{style:{...N.chainLine,background:p,...dt===0?{left:"50%"}:{left:at[Qe-1]?-6:"50%"},...dt===6?{right:"50%"}:{right:at[Qe+1]?-6:"50%"}}}):null})(),t.jsx("button",{disabled:M,onClick:()=>r(e,ie),onMouseDown:()=>!D&&$(ie),onMouseUp:ae,onTouchStart:()=>!D&&$(ie),onTouchEnd:ae,style:{...N.monthDay,position:"relative",zIndex:1,...fe?{background:p,borderColor:p,color:"#fff"}:{},...Xe?{background:b,borderColor:p,color:p}:{},...D&&ve&&!fe?{borderColor:p,color:p}:{},...M&&!fe?N.monthDayFuture:{},...y&&!fe?{borderColor:p,borderWidth:2}:{},width:"100%"},children:ee}),D&&ve&&t.jsx("span",{style:{...N.countBadge,background:fe?"#4C9A6B":p},children:ge}),ne&&t.jsx("span",{style:N.noteIndicator}),d===ie&&t.jsx(iv,{onEdit:i,onDelete:o,onAddNote:()=>ce(ie),onRemind:i,onClose:()=>g(null)})]},ie)})]})]}),h&&t.jsxs("div",{style:N.noteBox,children:[t.jsxs("div",{style:{fontWeight:600,fontSize:13,marginBottom:6},children:["Note for ",h]}),t.jsx("textarea",{value:m,onChange:ie=>f(ie.target.value),placeholder:"Add a note for this day…",style:{...N.sideInput,minHeight:60,resize:"vertical"}}),t.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[t.jsxs("button",{onClick:()=>{s(h,m),B(null)},style:N.sideAddBtn,children:[t.jsx(He,{size:13})," Save"]}),t.jsx("button",{onClick:()=>B(null),style:N.sideCancelBtn,children:t.jsx(Ae,{size:13})})]})]})]})}function iv({onEdit:e,onDelete:r,onAddNote:n,onRemind:o,onClose:i}){return t.jsxs("div",{style:N.longPressMenu,children:[t.jsxs("button",{style:N.menuItem,onClick:()=>{e(),i()},children:[t.jsx(vt,{size:13})," Edit"]}),t.jsxs("button",{style:N.menuItem,onClick:()=>{n(),i()},children:[t.jsx(kg,{size:13})," Add note"]}),t.jsxs("button",{style:N.menuItem,onClick:()=>{o(),i()},children:[t.jsx(jg,{size:13})," Remind"]}),t.jsxs("button",{style:{...N.menuItem,color:"#C2536B"},onClick:()=>{r(),i()},children:[t.jsx(Ae,{size:13})," Delete"]})]})}function sv({habits:e,onSave:r,onToggleActive:n,onClose:o}){const[i,s]=c.useState(()=>e.map(g=>g.id)),l=c.useMemo(()=>{const g={};return e.forEach(m=>g[m.id]=m),g},[e]),a=i.map(g=>l[g]).filter(Boolean),d=(g,m)=>{const f=g+m;if(f<0||f>=i.length)return;const h=[...i];[h[g],h[f]]=[h[f],h[g]],s(h)};return t.jsx("div",{style:N.modalOverlay,onClick:o,children:t.jsxs("div",{style:{...N.modal,maxHeight:"80vh",overflow:"hidden"},onClick:g=>g.stopPropagation(),children:[t.jsxs("div",{style:{...N.modalHead,flexShrink:0},children:["Edit Habits",t.jsx("button",{onClick:o,style:N.closeBtn,children:t.jsx(Ae,{size:16})})]}),t.jsx("p",{style:{fontSize:12,color:"var(--text-3)",margin:"0 0 10px",flexShrink:0},children:"Reorder with the arrows. Toggle a habit off to hide it from your views (its history is kept)."}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6,overflowY:"auto",minHeight:0},children:a.map((g,m)=>{var B;const f=((B=kn[g.pillar])==null?void 0:B.dot)||"#9A968C",h=g.active!==!1;return t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"9px 10px",background:"var(--bg)",borderRadius:9,border:"1px solid var(--border)",opacity:h?1:.5},children:[t.jsx("span",{style:{...N.sideDot,background:f}}),t.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500,textDecoration:h?"none":"line-through"},children:g.name}),t.jsx("button",{onClick:()=>n(g.id,!h),title:h?"Disable (hide) habit":"Enable habit",style:{...N.activeToggle,...h?N.activeToggleOn:{}},role:"switch","aria-checked":h,children:t.jsx("span",{style:{...N.activeKnob,...h?N.activeKnobOn:{}}})}),t.jsx("button",{onClick:()=>d(m,-1),disabled:m===0,style:{...N.navBtn,width:28,height:28,opacity:m===0?.3:1,fontSize:14},children:"↑"}),t.jsx("button",{onClick:()=>d(m,1),disabled:m===a.length-1,style:{...N.navBtn,width:28,height:28,opacity:m===a.length-1?.3:1,fontSize:14},children:"↓"})]},g.id)})}),t.jsxs("button",{onClick:()=>r(i),style:{...N.sideAddBtn,width:"100%",marginTop:14,height:38,justifyContent:"center",flexShrink:0},children:[t.jsx(He,{size:14})," Save Order"]})]})})}function lv({year:e}){const[r,n]=c.useState([]);if(c.useEffect(()=>{F.getHabitsYearly(e).then(n).catch(console.error)},[e]),!r.length)return null;const o=Array.from({length:12},(s,l)=>{const a=r.reduce((g,m)=>{var f;return g+(((f=m.monthly[l+1])==null?void 0:f.done)||0)},0),d=r.reduce((g,m)=>{var f;return g+Math.floor((((f=m.monthly[l+1])==null?void 0:f.days)||30)/7*7)},0);return d>0?Math.round(a/d*100):0}),i=Math.max(...o,1);return t.jsxs("div",{style:{...N.monthCard,marginTop:18},children:[t.jsxs("div",{style:N.monthTitle,children:[e," Completion"]}),t.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:6,height:80,marginTop:12},children:o.map((s,l)=>t.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[t.jsx("div",{style:{width:"100%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",height:`${s/i*60}px`,minHeight:2,opacity:s>0?1:.15},title:`${s}%`}),t.jsx("span",{style:{fontSize:9,color:"var(--text-3)",fontWeight:600},children:V0[l]})]},l))})]})}function no({label:e,value:r,c:n,soft:o,flame:i}){return t.jsxs("div",{style:{...N.stat,background:o},children:[t.jsx("div",{style:N.statLabel,children:e}),t.jsxs("div",{style:{...N.statValue,color:n},children:[i&&t.jsx(jn,{size:15})," ",r]})]})}const N={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:230,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",padding:"20px 12px",display:"flex",flexDirection:"column",gap:3,overflowY:"auto"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.18)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)",boxShadow:"none"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.38)",zIndex:20},sideTop:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 4px"},closeBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",marginBottom:8},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700,padding:"0 6px 14px"},sideItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"9px 10px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:500,color:"var(--text-2)",textAlign:"left"},sideItemOn:{background:"var(--hover)",fontWeight:600},sideLabel:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},sideCount:{fontSize:11,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:10,padding:"1px 7px"},sideStreak:{display:"flex",alignItems:"center",gap:3,fontSize:11,fontWeight:600,color:"#C2773B"},sideDot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},sideDivider:{height:1,background:"var(--border)",margin:"8px 6px"},addBox:{padding:"10px 6px",display:"flex",flexDirection:"column",gap:6},sideInput:{border:"1px solid var(--border)",borderRadius:7,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},sideAddBtn:{border:"none",background:"#4C9A6B",color:"#fff",height:30,padding:"0 12px",borderRadius:7,cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontSize:13,fontFamily:"inherit"},sideCancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:30,height:30,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},sideNewBtn:{display:"flex",alignItems:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",borderRadius:8,padding:"8px 10px",fontSize:12.5,color:"var(--text-3)",fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginTop:6,justifyContent:"center"},main:{flex:1,padding:"26px",overflowX:"hidden",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:200},mainHead:{marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:5,display:"flex",alignItems:"center"},h1:{fontSize:27,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},actionBtn:{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:500,color:"var(--text-2)",border:"1px solid var(--border)",background:"var(--surface)",padding:"5px 10px",borderRadius:7,cursor:"pointer",fontFamily:"inherit"},progressCard:{background:"var(--surface)",borderRadius:12,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14,display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"},progressDivider:{width:1,alignSelf:"stretch",background:"var(--border)",minHeight:48},threeDayTitle:{fontSize:13,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:84,fontSize:11.5,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap"},tbTrack:{flex:1,height:14,background:"var(--surface-2)",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:52,fontSize:11.5,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"},ringStat:{display:"flex",alignItems:"center",gap:12,flex:"1 1 160px"},ringBox:{position:"relative",width:70,height:70,display:"grid",placeItems:"center",flexShrink:0},ringPct:{position:"absolute",inset:0,display:"grid",placeItems:"center",fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},ringLabel:{fontSize:14,fontWeight:700,color:"var(--text)"},ringSub:{fontSize:11.5,color:"var(--text-3)",fontWeight:500,marginTop:2},weekCard:{background:"var(--surface)",borderRadius:12,padding:"8px 14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"auto"},weekCardMobile:{padding:"8px 8px 12px",overflowX:"hidden"},weekHeadRow:{display:"flex",alignItems:"flex-end",padding:"10px 0",borderBottom:"1px solid var(--border)",minWidth:480,position:"relative",zIndex:0},weekRowMobile:{minWidth:0},weekNameCol:{width:160,flexShrink:0,alignSelf:"stretch",display:"flex",alignItems:"center",gap:8,position:"sticky",left:0,zIndex:5,background:"var(--surface)",boxShadow:"6px 0 6px -6px rgba(0,0,0,0.15)"},weekNameColMobile:{width:34,gap:0,boxShadow:"none",justifyContent:"center",position:"static"},weekStreakColMobile:{width:30},streakPillMobile:{padding:"3px 6px",gap:2},habitAvatar:{width:26,height:26,borderRadius:"50%",border:"none",color:"#fff",fontSize:12,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,lineHeight:1},mobileNameBanner:{display:"flex",alignItems:"center",gap:7,width:"100%",border:"none",background:"var(--hover)",borderRadius:8,padding:"6px 10px",margin:"4px 0 2px",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},mobileNameText:{fontSize:13,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},nameToggle:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:20,padding:"5px 11px 5px 5px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit",flexShrink:0},nameToggleTrack:{position:"relative",width:34,height:20,borderRadius:10,flexShrink:0,transition:"background 0.2s",display:"inline-block"},nameToggleKnob:{position:"absolute",top:3,width:14,height:14,borderRadius:"50%",background:"#fff",transition:"left 0.2s",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},weekDayHead:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2},weekDayName:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekDayNum:{fontSize:12,fontWeight:600,color:"var(--text-2)",width:22,height:22,display:"grid",placeItems:"center",borderRadius:"50%"},weekDayToday:{background:"var(--accent-strong)",color:"#fff"},weekStreakCol:{width:64,flexShrink:0,textAlign:"center",fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekRow:{display:"flex",alignItems:"center",padding:"9px 0",borderBottom:"1px solid #F4F2EC",minWidth:480,position:"relative",zIndex:0},weekHabitName:{fontSize:13,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},weekCell:{flex:1,display:"grid",placeItems:"center"},typeBadge:{fontSize:10,color:"var(--text-3)",background:"var(--hover)",padding:"1px 6px",borderRadius:8,fontWeight:600},tick:{width:26,height:26,borderRadius:7,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",padding:0,position:"relative",zIndex:1},tickFuture:{opacity:.4,cursor:"not-allowed",borderStyle:"dashed"},streakPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,fontWeight:700,padding:"3px 9px",borderRadius:12},tinyBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:"2px 3px",display:"grid",placeItems:"center",borderRadius:4},statStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:10,marginBottom:18},stat:{borderRadius:10,padding:"13px 14px"},statLabel:{fontSize:11,fontWeight:600,color:"var(--text-2)",marginBottom:5},statValue:{fontSize:19,fontWeight:700,display:"flex",alignItems:"center",gap:5,fontFamily:"'Fraunces',Georgia,serif"},monthCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},monthTitle:{fontSize:14,fontWeight:700,marginBottom:12,fontFamily:"'Fraunces',Georgia,serif"},monthDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:8},monthDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},monthGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6},monthDay:{aspectRatio:"1",border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",display:"grid",placeItems:"center"},monthDayFuture:{opacity:.4,cursor:"not-allowed",background:"var(--surface-2)"},monthDayOff:{background:"var(--surface-2)",borderStyle:"dashed",color:"var(--text-3)",opacity:.5,cursor:"default"},dayPick:{display:"flex",gap:4,flexWrap:"wrap"},dayChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:7,padding:"5px 7px",fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:"inherit",minWidth:34},dayChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},pickHint:{fontSize:11,color:"var(--text-3)",fontWeight:600},offDay:{color:"var(--text-3)",opacity:.4,fontSize:18,lineHeight:1,userSelect:"none"},noteIndicator:{position:"absolute",top:3,right:3,width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},cellNoteBubble:{position:"absolute",top:2,right:"calc(50% - 16px)",width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},countBadge:{position:"absolute",bottom:2,right:2,minWidth:13,height:13,padding:"0 2px",borderRadius:7,color:"#fff",fontSize:9,fontWeight:700,display:"grid",placeItems:"center",lineHeight:1},counterBtn:{width:44,height:44,borderRadius:"50%",border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:24,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1},inlineCounter:{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",margin:"2px 0 8px",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,flexWrap:"wrap"},inlineCount:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1},inlineTarget:{fontSize:12,fontWeight:600,color:"var(--text-3)",marginLeft:1},inlinePlus:{width:30,height:30,borderRadius:8,border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:18,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1,flexShrink:0},inlineSet:{height:30,padding:"0 12px",borderRadius:8,border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",flexShrink:0},inlineWait:{fontSize:12,fontWeight:700,color:"#C2773B"},inlineReady:{fontSize:12,fontWeight:700,color:"#4C9A6B"},inlineMore:{marginLeft:"auto",border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",fontSize:16,fontWeight:700,lineHeight:1},activeToggle:{position:"relative",width:38,height:22,borderRadius:11,border:"none",background:"var(--border)",cursor:"pointer",flexShrink:0,transition:"background 0.2s",padding:0},activeToggleOn:{background:"#4C9A6B"},activeKnob:{position:"absolute",top:3,left:3,width:16,height:16,borderRadius:"50%",background:"#fff",transition:"left 0.2s",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},activeKnobOn:{left:19},chainLine:{position:"absolute",top:"calc(50% - 3px)",left:0,right:0,height:6,zIndex:0,opacity:.9},chainBanner:{display:"flex",alignItems:"center",gap:8,borderRadius:10,padding:"10px 14px",marginBottom:14,fontSize:12.5,fontWeight:700,fontFamily:"'Inter',system-ui,sans-serif"},navBar:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:16},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},navLabel:{fontSize:13,fontWeight:700,color:"var(--text)",minWidth:180,textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},noteBox:{background:"var(--surface)",borderRadius:10,padding:14,marginTop:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},longPressMenu:{position:"absolute",top:"100%",left:0,zIndex:50,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 4px 16px rgba(0,0,0,0.12)",padding:"4px 0",minWidth:140},menuItem:{display:"flex",alignItems:"center",gap:8,width:"100%",border:"none",background:"none",padding:"8px 14px",fontSize:13,color:"var(--text)",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:100,display:"grid",placeItems:"center"},modal:{background:"var(--surface)",borderRadius:14,padding:24,width:320,maxWidth:"90vw",display:"flex",flexDirection:"column",gap:8},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:700,fontSize:16,fontFamily:"'Fraunces',Georgia,serif",marginBottom:6},modalLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4}},xc=[{id:1,label:"Rough",emoji:"😣",color:"#C2536B"},{id:2,label:"Low",emoji:"🙁",color:"#C2773B"},{id:3,label:"Okay",emoji:"😐",color:"#C9A227"},{id:4,label:"Good",emoji:"🙂",color:"#4C9A6B"},{id:5,label:"Great",emoji:"😄",color:"#3A7CA5"}],av=e=>xc.find(r=>r.id===e),ed=[{id:"wins",label:"Wins",hint:"What went well today?",icon:Yr,color:"#C9A227"},{id:"grateful",label:"Grateful for",hint:"1–3 things",icon:uh,color:"#C2536B"},{id:"mattered",label:"What mattered",hint:"The point of today",icon:Tg,color:"#3A7CA5"},{id:"letgo",label:"Letting go of",hint:"Offload what's draining",icon:z0,color:"#8268B0"},{id:"tomorrow",label:"Tomorrow's one thing",hint:"A single priority",icon:wh,color:"#4C9A6B"}],Ah=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,dv=()=>Ah(new Date),td=e=>new Date(e+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"});function cv(){const e=dv(),[r,n]=[new Date().getFullYear(),new Date().getMonth()+1],[o,i]=c.useState(null),s=o||e,l=s===e,[a,d]=c.useState(null),[g,m]=c.useState({}),[f,h]=c.useState(Object.fromEntries(ed.map(j=>[j.id,""]))),B=c.useCallback(async j=>{const Y=await F.getJournalEntry(j);d(Y)},[]);c.useCallback(async()=>{const j=await F.getJournalHistory(r,n);m(j)},[r,n]);const R=c.useCallback(async()=>{const[j,Y]=await Promise.all([F.getJournalEntry(s),F.getJournalHistory(r,n)]);d(j),m(Y)},[s,r,n]);c.useEffect(()=>{R()},[R]);const z=async j=>{l&&(await F.updateJournalMood(s,j),R())},S=async j=>{if(!l)return;const Y=f[j].trim();Y&&(await F.addJournalBullet(s,j,Y),h(q=>({...q,[j]:""})),B(s))},p=async j=>{await F.deleteJournalBullet(j),B(s)},b=j=>{i(j===e?null:j),h(Object.fromEntries(ed.map(Y=>[Y.id,""])))};if(!a)return t.jsx("div",{style:{padding:28,color:"var(--text-3)"},children:"Loading…"});const u=a.mood!==null,k=(()=>{let j=0;const Y=new Date(e);if(g[e]||l&&u)j=1,Y.setDate(Y.getDate()-1);else return 0;for(;;){const te=Ah(Y);if(g[te])j++,Y.setDate(Y.getDate()-1);else break}return j})(),x=Object.values(a.bullets||{}).reduce((j,Y)=>j+Y.length,0),T=new Date(r,n,0).getDate(),E=new Date(r,n-1,1).getDay(),w=E===0?6:E-1;return t.jsxs("div",{style:it.page,children:[t.jsxs("div",{style:it.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:it.eyebrow,children:"Anvil · Journal"}),!l&&t.jsxs("button",{style:it.backBtn,onClick:()=>i(null),children:[t.jsx(Sn,{size:14})," Back to Today"]}),t.jsx("h1",{style:it.h1,children:l?"Today":td(s)}),l&&t.jsx("div",{style:it.date,children:td(e)})]}),t.jsxs("div",{style:it.streakBox,children:[t.jsx(jn,{size:16,color:"#C2773B"}),t.jsx("span",{style:it.streakNum,children:k}),t.jsx("span",{style:it.streakLabel,children:"day streak"})]})]}),t.jsxs("div",{style:it.card,children:[t.jsxs("div",{style:it.cardTitle,children:["How ",l?"are":"were"," you?"]}),t.jsx("div",{style:it.moodRow,children:xc.map(j=>{const Y=a.mood===j.id;return t.jsxs("button",{onClick:()=>z(j.id),disabled:!l,style:{...it.moodBtn,cursor:l?"pointer":"default",...Y?{background:j.color,borderColor:j.color,transform:"translateY(-2px)"}:{},...!l&&!Y?{opacity:.55}:{}},children:[t.jsx("span",{style:it.moodEmoji,children:j.emoji}),t.jsx("span",{style:{...it.moodLabel,color:Y?"#fff":"#6B675E"},children:j.label})]},j.id)})})]}),ed.map(j=>{var te;const Y=j.icon,q=((te=a.bullets)==null?void 0:te[j.id])||[];return t.jsxs("div",{style:it.card,children:[t.jsxs("div",{style:it.sectionHead,children:[t.jsx("span",{style:{...it.sectionIcon,background:`${j.color}1A`,color:j.color},children:t.jsx(Y,{size:15})}),t.jsxs("div",{children:[t.jsx("div",{style:it.cardTitle,children:j.label}),t.jsx("div",{style:it.sectionHint,children:j.hint})]})]}),t.jsxs("ul",{style:it.bulletList,children:[q.map(he=>t.jsxs("li",{style:it.bullet,children:[t.jsx("span",{style:{...it.bulletDot,background:j.color}}),t.jsx("span",{style:it.bulletText,children:he.text}),l&&t.jsx("button",{onClick:()=>p(he.id),style:it.bulletDel,children:t.jsx(Ae,{size:13})})]},he.id)),!l&&q.length===0&&t.jsx("li",{style:it.sectionHint,children:"Nothing written."})]}),l&&t.jsxs("div",{style:it.addRow,children:[t.jsx("input",{placeholder:"Add a point…",value:f[j.id],onChange:he=>h(G=>({...G,[j.id]:he.target.value})),onKeyDown:he=>he.key==="Enter"&&S(j.id),style:it.input}),t.jsx("button",{onClick:()=>S(j.id),style:{...it.addBtn,background:j.color},children:t.jsx(st,{size:16})})]})]},j.id)}),t.jsxs("div",{style:it.card,children:[t.jsxs("div",{style:it.cardTitle,children:[new Date(r,n-1).toLocaleDateString("en-US",{month:"long",year:"numeric"})," · Mood history",t.jsx("span",{style:{fontSize:11,color:"var(--text-3)",fontWeight:400,marginLeft:8},children:"tap a day to view"})]}),t.jsx("div",{style:it.calDow,children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(j=>t.jsx("div",{style:it.calDowCell,children:j},j))}),t.jsxs("div",{style:it.calGrid,children:[Array.from({length:w}).map((j,Y)=>t.jsx("div",{},`p${Y}`)),Array.from({length:T},(j,Y)=>Y+1).map(j=>{const Y=`${r}-${String(n).padStart(2,"0")}-${String(j).padStart(2,"0")}`,q=Y===e&&a.mood?a.mood:g[Y],te=q?av(q):null,he=Y>e,G=Y===s;return t.jsx("button",{onClick:()=>!he&&b(Y),disabled:he,style:{...it.calDay,background:te?te.color:he?"var(--surface-2)":"var(--surface)",borderColor:G?"var(--accent-strong)":"var(--border)",borderWidth:G?2:1,color:te?"#fff":"var(--text-3)",opacity:he?.5:1,cursor:he?"not-allowed":"pointer",outline:G?"2px solid var(--accent-strong)":"none",outlineOffset:1},title:te?te.label:Y,children:te?te.emoji:j},j)})]}),t.jsx("div",{style:it.legend,children:xc.map(j=>t.jsxs("span",{style:it.legendItem,children:[t.jsx("span",{style:{...it.legendDot,background:j.color}})," ",j.label]},j.id))})]}),t.jsx("div",{style:it.footer,children:l?u?`Mood set · ${x} point${x===1?"":"s"} written today`:"Tap a mood to log today and keep your streak":`Viewing ${td(s)} · past entries are read-only`})]})}const it={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},backBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",background:"none",color:"#3A7CA5",fontSize:12.5,fontWeight:600,cursor:"pointer",padding:"0 0 6px",fontFamily:"inherit"},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},date:{fontSize:13,color:"var(--text-3)",marginTop:4},streakBox:{display:"flex",alignItems:"center",gap:6,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"8px 14px"},streakNum:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"#C2773B"},streakLabel:{fontSize:11,color:"var(--text-3)",fontWeight:500},card:{background:"var(--surface)",borderRadius:12,padding:"18px 20px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},cardTitle:{fontSize:14,fontWeight:700,marginBottom:12,color:"var(--text)"},moodRow:{display:"flex",gap:8,flexWrap:"wrap"},moodBtn:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,border:"2px solid var(--border)",background:"var(--surface)",borderRadius:10,padding:"10px 12px",cursor:"pointer",flex:"1 1 60px",transition:"transform 0.1s"},moodEmoji:{fontSize:22},moodLabel:{fontSize:11,fontWeight:600},sectionHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:10},sectionIcon:{width:32,height:32,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},sectionHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},bulletList:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6,marginBottom:10},bullet:{display:"flex",alignItems:"center",gap:8,fontSize:13.5,lineHeight:1.4},bulletDot:{width:6,height:6,borderRadius:"50%",flexShrink:0},bulletText:{flex:1},bulletDel:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},addRow:{display:"flex",gap:8},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",outline:"none"},addBtn:{width:36,height:36,border:"none",borderRadius:8,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:12},calDay:{aspectRatio:"1",border:"1px solid var(--border)",borderRadius:7,fontSize:13,display:"grid",placeItems:"center",fontWeight:500,fontFamily:"inherit"},legend:{display:"flex",gap:10,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)"},legendDot:{width:8,height:8,borderRadius:"50%",display:"inline-block"},footer:{fontSize:12.5,color:"var(--text-3)",textAlign:"center",marginTop:8,fontStyle:"italic"}};function gv(e=760){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const _r=[{id:"D",label:"Data",color:"#3A7CA5",soft:"rgba(58,124,165,0.10)",prompt:"What did you read/watch? Log the raw source and a quick note.",hint:"e.g. 'Atomic Habits ch.1 — habits are systems not goals'"},{id:"I",label:"Information",color:"#8268B0",soft:"rgba(130,104,176,0.10)",prompt:"What did you actually understand from it? In your own words.",hint:"e.g. 'Small 1% improvements compound into massive change over time'"},{id:"K",label:"Knowledge",color:"#C9A227",soft:"rgba(201,162,39,0.10)",prompt:"How will this specifically improve your life? Connect it to your goals.",hint:"e.g. 'I will improve my morning workout habit by 1% each week'"},{id:"W",label:"Wisdom",color:"#4C9A6B",soft:"rgba(76,154,107,0.10)",prompt:"How have you implemented it? What changed?",hint:"e.g. 'I've not missed a workout in 3 weeks using the 1% rule'"}],sp=e=>_r.findIndex(r=>r.id===e),yc=[{id:"book",label:"Book",icon:ya},{id:"video",label:"Video",icon:Ch},{id:"article",label:"Article",icon:kg}],Zs=e=>yc.find(r=>r.id===e)||yc[0],rd={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"};function uv(){var ne;const[e,r]=c.useState([]),[n,o]=c.useState(null),[i,s]=c.useState("ALL"),[l,a]=c.useState(!1),[d,g]=c.useState(null),[m,f]=c.useState({title:"",type:"book",pillar:"Academic",note:"",link:""}),[h,B]=c.useState(null),[R,z]=c.useState({}),[S,p]=c.useState(null),[b,u]=c.useState(null),[k,x]=c.useState({}),[T,E]=c.useState({}),[w,j]=c.useState(null),Y=gv(),q=c.useCallback(async()=>{try{const D=await F.getSkills();r(D);const ge={};D.forEach(ve=>{ge[ve.id]=Object.fromEntries(_r.map(We=>[We.id,""]))}),z(ve=>{const We={...ge};return D.forEach(Xe=>{ve[Xe.id]&&(We[Xe.id]={...ge[Xe.id],...ve[Xe.id]})}),We})}catch(D){console.error(D)}},[]);c.useEffect(()=>{q()},[q]);const te=e.find(D=>D.id===n),he=te?sp(te.stage):-1,G=async(D,ge)=>{var We;const ve=(((We=R[D])==null?void 0:We[ge])??"").trim();ve&&(await F.addSkillNote(D,ge,ve),z(Xe=>({...Xe,[D]:{...Xe[D],[ge]:""}})),q())},ue=async D=>{await F.deleteSkillNote(D),q()},pe=D=>(D==null?void 0:D.source_type)==="book"?"Chapter":"Learning",ze=()=>`g${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,re=async D=>{const ge=[...D.data_groups||[]];ge.push({id:ze(),label:`${pe(D)} ${ge.length+1}`}),await F.setSkillGroups(D.id,ge),E(ve=>({...ve,[ge[ge.length-1].id]:!0})),q()},U=async(D,ge,ve)=>{const We=(D.data_groups||[]).map(Xe=>Xe.id===ge?{...Xe,label:ve}:Xe);await F.setSkillGroups(D.id,We),q()},de=async(D,ge)=>{const ve=(D.data_groups||[]).filter(We=>We.id!==ge);await F.setSkillGroups(D.id,ve),q()},X=async(D,ge)=>{const ve=(k[ge]??"").trim();ve&&(await F.addSkillNote(D.id,"D",ve,ge),x(We=>({...We,[ge]:""})),q())},I=async()=>{!te||!(b!=null&&b.trim())||(await F.updateSkill(te.id,{title:b.trim()}),u(null),q())},A=async()=>{!S||!S.text.trim()||(await F.updateSkillNote(S.id,S.text.trim()),p(null),q())},P=async D=>{await F.toggleSkillNote(D),q()},$=async(D,ge)=>{e.find(We=>We.id===D)&&(ge==="W"&&g(D),await F.completeSkillStage(D,ge),q())},ae=async()=>{if(!m.title.trim())return;const D=await F.createSkill({pillar:m.pillar,title:m.title.trim(),source_type:m.type,link:m.link.trim(),note_d:m.note.trim()});a(!1),f({title:"",type:"book",pillar:"Academic",note:"",link:""}),o(D.id),q()},ce=async()=>{te&&(await F.updateSkill(te.id,{link:(h||"").trim()}),B(null),q())},{deleteItem:De,toasts:Q,handleUndo:ie,handleDismiss:O}=ur(F.deleteSkill,F.restoreSkill,q),ee=(D,ge="Skill")=>{n===D&&o(null),De(D,ge)},fe=i==="ALL"?e:e.filter(D=>D.stage===i),M=e.filter(D=>D.stage==="W").length,y=!!te;return t.jsxs("div",{style:xe.page,children:[d&&t.jsx("div",{style:xe.celebOverlay,children:t.jsxs("div",{style:xe.celebBox,children:[t.jsx("div",{style:xe.celebEmoji,children:"🏆"}),t.jsx("div",{style:xe.celebTitle,children:"Wisdom unlocked!"}),t.jsx("div",{style:xe.celebSub,children:"You've implemented this knowledge — that's rare and real."}),t.jsx("button",{onClick:()=>g(null),style:xe.celebBtn,children:"Continue"})]})}),t.jsxs("div",{style:xe.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:xe.eyebrow,children:"Anvil · Skills"}),t.jsx("h1",{style:xe.h1,children:"Skills"}),t.jsx("div",{style:xe.subhead,children:"Data → Information → Knowledge → Wisdom"})]}),t.jsxs("div",{style:xe.headRight,children:[t.jsxs("div",{style:xe.wisdomBadge,children:[t.jsx(Yr,{size:14,color:"#C9A227"})," ",M," Wisdom",M!==1?"s":""]}),t.jsxs("button",{onClick:()=>{a(!0),o(null)},style:xe.addSkillBtn,children:[t.jsx(st,{size:15})," Add skill"]})]})]}),t.jsx("div",{style:xe.filterBar,children:["ALL",..._r.map(D=>D.id)].map(D=>{const ge=_r.find(We=>We.id===D),ve=i===D;return t.jsx("button",{onClick:()=>s(D),style:{...xe.filterBtn,...ve?{background:ge?ge.color:"var(--accent-strong)",color:"#fff",borderColor:"transparent"}:{}},children:ge?`${D} · ${ge.label}`:"All"},D)})}),t.jsxs("div",{style:{...xe.layout,gridTemplateColumns:!Y&&y?"minmax(0,1fr) minmax(0,1fr)":"1fr"},children:[(!Y||!te)&&t.jsxs("div",{style:{...xe.cardList,gridTemplateColumns:Y||y?"1fr":"repeat(3, minmax(0, 1fr))"},children:[l&&t.jsxs("div",{style:{...xe.skillCard,border:"2px dashed #3A7CA5",gridColumn:"1 / -1"},children:[t.jsx("div",{style:xe.cardTitle,children:"New skill"}),t.jsx("input",{placeholder:"Title (book / video / article name)",value:m.title,onChange:D=>f(ge=>({...ge,title:D.target.value})),onKeyDown:D=>D.key==="Enter"&&ae(),style:xe.input,autoFocus:!0}),t.jsxs("div",{style:xe.addRow,children:[t.jsx("select",{value:m.type,onChange:D=>f(ge=>({...ge,type:D.target.value})),style:xe.select,children:yc.map(D=>t.jsx("option",{value:D.id,children:D.label},D.id))}),t.jsx("select",{value:m.pillar,onChange:D=>f(ge=>({...ge,pillar:D.target.value})),style:xe.select,children:Object.keys(rd).map(D=>t.jsx("option",{children:D},D))})]}),t.jsx("input",{placeholder:m.type==="book"?"Link (optional)":`${Zs(m.type).label} link (optional) — paste URL to route here`,value:m.link,onChange:D=>f(ge=>({...ge,link:D.target.value})),onKeyDown:D=>D.key==="Enter"&&ae(),style:xe.input}),t.jsxs("div",{style:xe.addRow,children:[t.jsxs("button",{onClick:ae,style:xe.saveBtn,children:[t.jsx(He,{size:14})," Save"]}),t.jsxs("button",{onClick:()=>a(!1),style:xe.cancelBtn,children:[t.jsx(Ae,{size:14})," Cancel"]})]})]}),fe.map(D=>{const ge=sp(D.stage),ve=_r[ge],We=Zs(D.source_type),Xe=D.stage==="W",dt=n===D.id;return t.jsxs("div",{onClick:()=>o(dt?null:D.id),style:{...xe.skillCard,...dt?{borderColor:ve.color,borderWidth:2}:{},...Xe?{background:"rgba(76,154,107,0.05)"}:{}},children:[t.jsxs("div",{style:xe.skillCardTop,children:[t.jsxs("div",{style:xe.skillMeta,children:[t.jsx("span",{style:{color:rd[D.pillar]},children:t.jsx(We.icon,{size:13})}),t.jsx("span",{style:{...xe.pillarDot,background:rd[D.pillar]}}),t.jsxs("span",{style:xe.srcLabel,children:[We.label," · ",D.pillar]})]}),t.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[Xe&&t.jsx(Co,{size:14,color:"#4C9A6B"}),D.link&&t.jsx("a",{href:D.link,target:"_blank",rel:"noreferrer",onClick:$e=>$e.stopPropagation(),style:xe.ghostBtn,title:"Open source",children:t.jsx(dc,{size:13})}),t.jsx("button",{onClick:$e=>{$e.stopPropagation(),ee(D.id,D.title)},style:xe.ghostBtn,children:t.jsx(Ae,{size:13})})]})]}),t.jsx("div",{style:xe.skillTitle,children:D.title}),t.jsxs("div",{style:xe.track,children:[_r.map(($e,rt)=>{var Me;const Qe=rt<ge,at=rt===ge,se=(Me=D.completed_stages)==null?void 0:Me[$e.id];return t.jsxs("div",{style:{...xe.trackItem,...rt<_r.length-1?{flex:1}:{}},children:[t.jsxs("div",{style:{...xe.trackDot,background:Qe||se||at?$e.color:"var(--border)",boxShadow:at?`0 0 0 3px ${$e.color}33`:"none"},children:[(Qe||at&&se)&&t.jsx(He,{size:9,color:"#fff",strokeWidth:3}),at&&!se&&t.jsx("span",{style:xe.trackCurrent,children:$e.id}),!Qe&&!at&&t.jsx(Hu,{size:8,color:"#B5B1A7"})]}),rt<_r.length-1&&t.jsx("div",{style:{...xe.trackLine,background:Qe?_r[rt+1].color:"var(--border)"}})]},$e.id)}),t.jsx("span",{style:{...xe.stageTag,background:ve.soft,color:ve.color},children:ve.label})]})]},D.id)}),fe.length===0&&!l&&t.jsx("div",{style:{...xe.empty,gridColumn:"1 / -1"},children:"No skills at this stage yet."})]}),te&&t.jsxs("div",{style:xe.detail,children:[t.jsxs("div",{style:xe.detailHead,children:[Y&&t.jsx("button",{onClick:()=>{o(null),u(null)},style:xe.backBtn,title:"Back to skills",children:t.jsx(Sn,{size:18})}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsxs("div",{style:xe.eyebrow,children:[Zs(te.source_type).label," · ",te.pillar]}),b!==null?t.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginTop:4},children:[t.jsx("input",{autoFocus:!0,value:b,onChange:D=>u(D.target.value),onKeyDown:D=>{D.key==="Enter"&&I(),D.key==="Escape"&&u(null)},style:{...xe.input,fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:0,flex:1}}),t.jsx("button",{onClick:I,style:{...xe.noteAddBtn,background:"#4C9A6B",width:30,height:30},children:t.jsx(He,{size:13})}),t.jsx("button",{onClick:()=>u(null),style:{...xe.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:30,height:30},children:t.jsx(Ae,{size:13})})]}):t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[t.jsx("div",{style:xe.detailTitle,children:te.title}),t.jsx("button",{onClick:()=>u(te.title),style:xe.ghostBtn,title:"Edit name",children:t.jsx(vt,{size:13})})]}),h!==null?t.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginTop:6},children:[t.jsx("input",{autoFocus:!0,value:h,placeholder:"Paste the video / article URL",onChange:D=>B(D.target.value),onKeyDown:D=>{D.key==="Enter"&&ce(),D.key==="Escape"&&B(null)},style:{...xe.input,marginBottom:0,flex:1}}),t.jsx("button",{onClick:ce,style:{...xe.noteAddBtn,background:"#4C9A6B",width:30,height:30},children:t.jsx(He,{size:13})}),t.jsx("button",{onClick:()=>B(null),style:{...xe.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:30,height:30},children:t.jsx(Ae,{size:13})})]}):t.jsx("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:6,flexWrap:"wrap"},children:te.link?t.jsxs(t.Fragment,{children:[t.jsxs("a",{href:te.link,target:"_blank",rel:"noreferrer",style:xe.openLinkBtn,children:[t.jsx(dc,{size:13})," Open ",Zs(te.source_type).label.toLowerCase()]}),t.jsx("button",{onClick:()=>B(te.link),style:xe.ghostBtn,title:"Edit link",children:t.jsx(vt,{size:12})})]}):t.jsxs("button",{onClick:()=>B(""),style:xe.addLinkBtn,children:[t.jsx(ys,{size:12})," Add link"]})})]}),t.jsx("button",{onClick:()=>{o(null),u(null)},style:xe.closeBtn,children:t.jsx(Ae,{size:16})})]}),_r.map((D,ge)=>{var Qe,at,se;const ve=ge<=he,We=ge===he,Xe=ge<he||((Qe=te.completed_stages)==null?void 0:Qe[D.id]),dt=ge>he,$e=((at=te.notes)==null?void 0:at[D.id])||[],rt=((se=R[te.id])==null?void 0:se[D.id])??"";return t.jsxs("div",{style:{...xe.stageBlock,...ve?{borderColor:D.color}:{},opacity:dt?.45:1},children:[t.jsxs("div",{style:xe.stageBlockHead,children:[t.jsx("div",{style:{...xe.stageLetter,background:ve?D.color:"var(--border)",color:ve?"#fff":"#9A968C"},children:Xe&&!We?t.jsx(He,{size:12,color:"#fff",strokeWidth:3}):dt?t.jsx(Hu,{size:11,color:"#9A968C"}):D.id}),t.jsxs("div",{style:{flex:1},children:[t.jsx("div",{style:{...xe.stageName,color:ve?D.color:"#9A968C"},children:D.label}),ve&&t.jsx("div",{style:xe.stagePrompt,children:D.prompt})]}),Xe&&!We&&t.jsx("span",{style:{...xe.doneBadge,color:D.color,background:D.soft},children:"Done"})]}),ve&&(()=>{var wt,Sr;const Me=D.id==="W",qe=D.id==="D",nt=$e.length>0&&$e.every(v=>v.done),ct=Me?nt:$e.length>0,Ft=te.data_groups||[],zt=$e.filter(v=>!v.grp),yt=pe(te),mt=v=>t.jsxs("li",{style:xe.noteItem,children:[t.jsx("span",{style:{...xe.noteDot,background:D.color}}),(S==null?void 0:S.id)===v.id?t.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[t.jsx("input",{autoFocus:!0,value:S.text,onChange:le=>p(Pe=>({...Pe,text:le.target.value})),onKeyDown:le=>{le.key==="Enter"&&A(),le.key==="Escape"&&p(null)},style:{...xe.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),t.jsx("button",{onClick:A,style:{...xe.noteAddBtn,background:D.color,width:28,height:28},children:t.jsx(He,{size:12})}),t.jsx("button",{onClick:()=>p(null),style:{...xe.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:t.jsx(Ae,{size:12})})]}):t.jsx("span",{style:xe.noteText,children:v.text}),(S==null?void 0:S.id)!==v.id&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>p({id:v.id,text:v.text}),style:xe.ghostBtn,children:t.jsx(vt,{size:12})}),t.jsx("button",{onClick:()=>ue(v.id),style:xe.ghostBtn,children:t.jsx(Ae,{size:12})})]})]},v.id);return t.jsxs(t.Fragment,{children:[qe?t.jsxs(t.Fragment,{children:[zt.length>0&&t.jsx("ul",{style:xe.noteList,children:zt.map(mt)}),Ft.map(v=>{const le=$e.filter(Le=>Le.grp===v.id),Pe=T[v.id]!==!1;return t.jsxs("div",{style:{...xe.groupBox,borderColor:`${D.color}55`},children:[t.jsxs("div",{style:xe.groupHead,children:[t.jsx("button",{onClick:()=>E(Le=>({...Le,[v.id]:!Pe})),style:xe.groupCaret,children:Pe?t.jsx(So,{size:15}):t.jsx(nn,{size:15})}),te.source_type==="book"?t.jsx(ya,{size:13,color:D.color}):t.jsx(r0,{size:13,color:D.color}),(w==null?void 0:w.id)===v.id?t.jsx("input",{autoFocus:!0,value:w.label,onChange:Le=>j(Je=>({...Je,label:Le.target.value})),onKeyDown:Le=>{Le.key==="Enter"&&(U(te,v.id,w.label.trim()||v.label),j(null)),Le.key==="Escape"&&j(null)},onBlur:()=>{U(te,v.id,w.label.trim()||v.label),j(null)},style:{...xe.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}):t.jsx("span",{style:xe.groupTitle,onClick:()=>j({id:v.id,label:v.label}),title:"Click to rename",children:v.label}),t.jsx("span",{style:xe.groupCount,children:le.length}),t.jsx("button",{onClick:()=>de(te,v.id),style:xe.ghostBtn,title:`Delete ${yt.toLowerCase()}`,children:t.jsx(Ae,{size:13})})]}),Pe&&t.jsxs("div",{style:xe.groupBody,children:[le.length>0&&t.jsx("ul",{style:xe.noteList,children:le.map(mt)}),t.jsxs("div",{style:xe.noteAddRow,children:[t.jsx("input",{placeholder:"Add a point…",value:k[v.id]??"",onChange:Le=>x(Je=>({...Je,[v.id]:Le.target.value})),onKeyDown:Le=>Le.key==="Enter"&&X(te,v.id),style:xe.noteInput}),t.jsx("button",{onClick:()=>X(te,v.id),style:{...xe.noteAddBtn,background:D.color},children:t.jsx(st,{size:14})})]})]})]},v.id)}),Ft.length===0&&zt.length===0&&t.jsxs("div",{style:xe.noNotes,children:["No ",yt.toLowerCase(),"s yet — add one to start logging points."]}),t.jsxs("button",{onClick:()=>re(te),style:{...xe.addGroupBtn,color:D.color,borderColor:`${D.color}80`},children:[t.jsx(st,{size:14})," Add ",yt.toLowerCase()]})]}):t.jsxs(t.Fragment,{children:[$e.length>0&&t.jsx("ul",{style:xe.noteList,children:$e.map(v=>t.jsxs("li",{style:xe.noteItem,children:[Me?t.jsx("button",{onClick:()=>P(v.id),style:{...xe.checkBox,...v.done?{background:D.color,borderColor:D.color}:{}},children:v.done&&t.jsx(He,{size:11,color:"#fff",strokeWidth:3})}):t.jsx("span",{style:{...xe.noteDot,background:D.color}}),(S==null?void 0:S.id)===v.id?t.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[t.jsx("input",{autoFocus:!0,value:S.text,onChange:le=>p(Pe=>({...Pe,text:le.target.value})),onKeyDown:le=>{le.key==="Enter"&&A(),le.key==="Escape"&&p(null)},style:{...xe.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),t.jsx("button",{onClick:A,style:{...xe.noteAddBtn,background:D.color,width:28,height:28},children:t.jsx(He,{size:12})}),t.jsx("button",{onClick:()=>p(null),style:{...xe.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:t.jsx(Ae,{size:12})})]}):t.jsx("span",{style:{...xe.noteText,...Me&&v.done?{textDecoration:"line-through",color:"var(--text-3)"}:{}},children:v.text}),(S==null?void 0:S.id)!==v.id&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>p({id:v.id,text:v.text}),style:xe.ghostBtn,children:t.jsx(vt,{size:12})}),t.jsx("button",{onClick:()=>ue(v.id),style:xe.ghostBtn,children:t.jsx(Ae,{size:12})})]})]},v.id))}),$e.length===0&&t.jsx("div",{style:xe.noNotes,children:Me?"Add the steps to implement this — check each off as you do it.":`No notes yet — ${D.hint}`}),t.jsxs("div",{style:xe.noteAddRow,children:[t.jsx("input",{placeholder:Me?"Add a step to implement…":`Add a ${D.label} note…`,value:rt,onChange:v=>z(le=>({...le,[te.id]:{...le[te.id],[D.id]:v.target.value}})),onKeyDown:v=>v.key==="Enter"&&G(te.id,D.id),style:xe.noteInput}),t.jsx("button",{onClick:()=>G(te.id,D.id),style:{...xe.noteAddBtn,background:D.color},children:t.jsx(st,{size:14})})]})]}),We&&!((wt=te.completed_stages)!=null&&wt[D.id])&&t.jsxs(t.Fragment,{children:[Me&&$e.length>0&&!nt&&t.jsxs("div",{style:xe.checklistHint,children:[$e.filter(v=>v.done).length,"/",$e.length," done — check all steps to complete Wisdom"]}),t.jsxs("button",{onClick:()=>$(te.id,D.id),disabled:!ct,style:{...xe.advanceBtn,background:ct?D.color:"#C3BFB5",marginTop:10,cursor:ct?"pointer":"not-allowed"},children:[t.jsx(He,{size:14}),Me?"Mark Wisdom complete":`Complete ${D.label} → ${(Sr=_r[ge+1])==null?void 0:Sr.label}`]})]})]})})()]},D.id)}),te.stage==="W"&&((ne=te.completed_stages)==null?void 0:ne.W)&&t.jsxs("div",{style:xe.wisdomDone,children:[t.jsx(Yr,{size:16,color:"#4C9A6B"})," Wisdom achieved — implemented in your life"]})]})]}),t.jsx(pr,{toasts:Q,onUndo:ie,onDismiss:O})]})}const xe={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box",position:"relative"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},wisdomBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addSkillBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},filterBar:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16},filterBtn:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},layout:{display:"grid",gap:12,alignItems:"start"},cardList:{display:"grid",gap:10,alignContent:"start"},skillCard:{background:"var(--surface)",borderRadius:12,padding:"16px",border:"1.5px solid var(--border)",cursor:"pointer",boxShadow:"0 1px 2px rgba(0,0,0,0.04)",minWidth:0,overflow:"hidden",boxSizing:"border-box"},skillCardTop:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8,marginBottom:6},skillMeta:{display:"flex",alignItems:"center",gap:6,minWidth:0},pillarDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},srcLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},skillTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",marginBottom:12,lineHeight:1.3,wordBreak:"break-word"},cardTitle:{fontSize:13,fontWeight:700,marginBottom:10},track:{display:"flex",alignItems:"center",minWidth:0},trackItem:{display:"flex",alignItems:"center",minWidth:0},trackDot:{width:22,height:22,borderRadius:"50%",display:"grid",placeItems:"center",flexShrink:0},trackCurrent:{fontSize:9,fontWeight:800,color:"#fff"},trackLine:{flex:1,minWidth:8,height:3,borderRadius:2,margin:"0 2px"},stageTag:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,marginLeft:8,flexShrink:0,whiteSpace:"nowrap"},detail:{background:"var(--surface)",borderRadius:14,padding:"18px 16px",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",border:"1.5px solid var(--border)",alignSelf:"start"},detailHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16},detailTitle:{fontSize:18,fontWeight:700,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},backBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginRight:4},groupBox:{border:"1.5px solid var(--border)",borderRadius:9,marginBottom:8,overflow:"hidden",background:"var(--bg)"},groupHead:{display:"flex",alignItems:"center",gap:7,padding:"8px 10px"},groupCaret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},groupTitle:{flex:1,minWidth:0,fontSize:13,fontWeight:700,color:"var(--text)",cursor:"text",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},groupCount:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 7px",flexShrink:0},groupBody:{padding:"0 10px 10px 10px"},addGroupBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1.5px dashed",background:"none",padding:"9px 12px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:2},stageBlock:{border:"1.5px solid var(--border)",borderRadius:10,padding:"12px 13px",marginBottom:10},stageBlockHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:8},stageLetter:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",fontSize:13,fontWeight:800,flexShrink:0},stageName:{fontSize:13,fontWeight:700},stagePrompt:{fontSize:11.5,color:"var(--text-2)",marginTop:2,lineHeight:1.4},doneBadge:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10,marginLeft:"auto",flexShrink:0},noteList:{margin:"0 0 8px 0",padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6},noteItem:{display:"flex",alignItems:"flex-start",gap:8,fontSize:13,lineHeight:1.4},noteDot:{width:6,height:6,borderRadius:"50%",flexShrink:0,marginTop:5},checkBox:{width:18,height:18,borderRadius:5,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginTop:1,padding:0},checklistHint:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,marginTop:10,textAlign:"center"},noteText:{flex:1,color:"var(--text)"},noNotes:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",marginBottom:8},noteAddRow:{display:"flex",gap:6},noteInput:{flex:1,border:"1px solid var(--border)",borderRadius:7,padding:"7px 10px",fontSize:13,fontFamily:"inherit",outline:"none"},noteAddBtn:{width:32,height:32,border:"none",borderRadius:7,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},advanceBtn:{display:"flex",alignItems:"center",gap:8,border:"none",color:"#fff",padding:"10px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},wisdomDone:{display:"flex",alignItems:"center",gap:8,justifyContent:"center",fontSize:13.5,fontWeight:700,color:"#4C9A6B",padding:12,background:"rgba(76,154,107,0.08)",borderRadius:10,marginTop:4},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},openLinkBtn:{display:"inline-flex",alignItems:"center",gap:5,textDecoration:"none",border:"1px solid #3A7CA5",background:"rgba(58,124,165,0.10)",color:"#3A7CA5",fontSize:12,fontWeight:700,padding:"5px 11px",borderRadius:8,fontFamily:"inherit",cursor:"pointer"},addLinkBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"1px dashed var(--border)",background:"none",color:"var(--text-3)",fontSize:12,fontWeight:600,padding:"5px 11px",borderRadius:8,fontFamily:"inherit",cursor:"pointer"},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box",marginBottom:8},select:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:12.5,fontFamily:"inherit",flex:1},addRow:{display:"flex",gap:8,marginBottom:8},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{fontSize:13,color:"var(--text-3)",padding:"32px 12px",textAlign:"center"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.55)",zIndex:50,display:"grid",placeItems:"center"},celebBox:{background:"var(--surface)",borderRadius:20,padding:"40px 32px",textAlign:"center",maxWidth:320,boxShadow:"0 8px 40px rgba(0,0,0,0.18)"},celebEmoji:{fontSize:52,marginBottom:12},celebTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:8},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:"#4C9A6B",color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Js=[{id:"aarti",title:"Aarti",html:`<h1>॥ गणपतीची आरती ॥</h1><br/>
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
      </div>`}];function pv(){const[e,r]=c.useState(()=>window.innerWidth<720);return c.useEffect(()=>{const n=()=>r(window.innerWidth<720);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}const bv=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>1400?(a=a*1400/l,l=1400):a>1400&&(l=l*1400/a,a=1400);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),r(d.toDataURL("image/jpeg",.85))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)});function lp({base:e,count:r,images:n}){const o=n&&n.length?n:null,i=o?o.length:r,[s,l]=c.useState(0);if(!i)return null;const a=s%i,d=o?o[a]:`${e}${a+1}.jpg`;return t.jsxs("div",{style:{maxWidth:560,margin:"0 auto"},children:[t.jsx("div",{style:Ue.carouselFrame,children:t.jsx("img",{src:d,alt:`Page ${a+1}`,style:Ue.carouselImg})}),t.jsxs("div",{style:Ue.carouselNav,children:[t.jsxs("button",{onClick:()=>l(g=>(g-1+i)%i),style:Ue.carouselBtn,children:[t.jsx(Sn,{size:16})," Prev"]}),t.jsxs("span",{style:Ue.carouselCount,children:[o?"":"Adhyay ",a+1," / ",i]}),t.jsxs("button",{onClick:()=>l(g=>(g+1)%i),style:Ue.carouselBtn,children:["Next ",t.jsx(nn,{size:16})]})]})]})}function mv(){const e=pv(),[r,n]=c.useState(!1),[o,i]=c.useState([]),[s,l]=c.useState("dss"),[a,d]=c.useState(!1),[g,m]=c.useState({title:"",type:"text",content:"",images:[]}),[f,h]=c.useState([]),[B,R]=c.useState(null),[z,S]=c.useState(!1),p=c.useRef(!1),b=c.useCallback(async()=>{try{const[U,de,X]=await Promise.all([F.getDecks(),F.getSetting("spiritual_order"),F.getSetting("spiritual_default")]);if(i(U),Array.isArray(de==null?void 0:de.value)&&h(de.value),X!=null&&X.value&&R(X.value),!p.current){p.current=!0;const I=new Set([...Js.map(A=>A.id),...U.map(A=>`deck-${A.id}`)]);X!=null&&X.value&&I.has(X.value)&&l(X.value)}}catch{}},[]);c.useEffect(()=>{b()},[b]);const u=[...Js.map(U=>({id:U.id,title:U.title})),...o.map(U=>({id:`deck-${U.id}`,title:U.title}))],k=(()=>{if(!f.length)return u;const U=new Map(u.map(X=>[X.id,X])),de=[];return f.forEach(X=>{U.has(X)&&(de.push(U.get(X)),U.delete(X))}),U.forEach(X=>de.push(X)),de})(),x=(U,de)=>{const X=k.map(A=>A.id),I=U+de;I<0||I>=X.length||([X[U],X[I]]=[X[I],X[U]],h(X),F.setSetting("spiritual_order",X).catch(()=>{}))},T=U=>{R(U),F.setSetting("spiritual_default",U).catch(()=>{})},E=s.startsWith("deck-")?Number(s.slice(5)):null,w=E!=null?o.find(U=>U.id===E):null,j=w?null:Js.find(U=>U.id===s)||(E==null?Js[0]:null),Y=a?"New deck":w?w.title:(j==null?void 0:j.title)||"",q=U=>{l(U),d(!1),e&&n(!1)},te=()=>{d(!0),m({title:"",type:"text",content:"",images:[]}),e&&n(!1)},he=async U=>{const de=Array.from(U.target.files||[]),X=[];for(const I of de)try{X.push(await bv(I))}catch{}m(I=>({...I,images:[...I.images,...X]})),U.target.value=""},G=U=>m(de=>({...de,images:de.images.filter((X,I)=>I!==U)})),ue=g.title.trim()&&(g.type==="text"?g.content.trim():g.images.length>0),pe=async()=>{if(!ue)return;const U=await F.createDeck({title:g.title.trim(),type:g.type,content:g.type==="text"?g.content:"",images:g.type==="images"?g.images:[]});d(!1),await b(),l(`deck-${U.id}`)},ze=async U=>{await F.deleteDeck(U),s===`deck-${U}`&&l("dss"),b()},re={...Ue.sidebar,...e?Ue.sidebarOverlay:{},...e&&!r?Ue.sidebarHidden:{}};return t.jsxs("div",{style:Ue.shell,children:[t.jsx("style",{children:hv}),e&&r&&t.jsx("div",{style:Ue.backdrop,onClick:()=>n(!1)}),t.jsxs("aside",{style:re,children:[t.jsxs("div",{style:Ue.sideHead,children:[t.jsx("div",{style:Ue.brand,children:"Anvil · Spiritual"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:2},children:[t.jsx("button",{onClick:()=>S(U=>!U),style:Ue.iconBtn,title:"Rearrange & set default",children:z?t.jsx(He,{size:16}):t.jsx(vt,{size:15})}),e&&t.jsx("button",{onClick:()=>n(!1),style:Ue.iconBtn,children:t.jsx(Ae,{size:17})})]})]}),z&&t.jsxs("div",{style:Ue.editHint,children:["Arrows reorder · ",t.jsx(xs,{size:11,style:{verticalAlign:"-1px"}})," sets what opens by default"]}),t.jsxs("div",{style:Ue.sideScroll,children:[k.map((U,de)=>{const X=U.id===s&&!a,I=B===U.id;return t.jsxs("div",{style:Ue.sideRow,children:[t.jsxs("button",{onClick:()=>q(U.id),style:{...Ue.sideItem,flex:1,...X?Ue.sideItemOn:{}},children:[U.title,I&&t.jsx("span",{style:Ue.defStar,title:"Opens by default",children:" ★"})]}),z&&t.jsxs("div",{style:Ue.editControls,children:[t.jsx("button",{onClick:()=>T(U.id),title:"Set as default",style:{...Ue.miniBtn,...I?{color:"#8268B0"}:{}},children:t.jsx(xs,{size:13})}),t.jsx("button",{onClick:()=>x(de,-1),disabled:de===0,style:{...Ue.miniBtn,opacity:de===0?.3:1},children:t.jsx(va,{size:13})}),t.jsx("button",{onClick:()=>x(de,1),disabled:de===k.length-1,style:{...Ue.miniBtn,opacity:de===k.length-1?.3:1},children:t.jsx(So,{size:13})})]})]},U.id)}),t.jsxs("button",{onClick:te,style:{...Ue.newDeckBtn,...a?Ue.sideItemOn:{}},children:[t.jsx(st,{size:14})," New deck"]})]})]}),t.jsxs("main",{style:Ue.main,children:[e&&t.jsxs("button",{onClick:()=>n(!0),style:Ue.hamburger,children:[t.jsx(Sg,{size:17}),t.jsx("span",{style:Ue.hamburgerLabel,children:Y})]}),a?t.jsxs("div",{style:Ue.contentWrap,children:[t.jsx("div",{style:Ue.formTitle,children:"Create a deck"}),t.jsx("input",{placeholder:"Deck title (e.g. Vishnu Sahasranamam)",value:g.title,onChange:U=>m({...g,title:U.target.value}),style:Ue.input}),t.jsxs("div",{style:Ue.typeRow,children:[t.jsxs("button",{onClick:()=>m({...g,type:"text"}),style:{...Ue.typeBtn,...g.type==="text"?Ue.typeOn:{}},children:[t.jsx(kg,{size:15})," Text"]}),t.jsxs("button",{onClick:()=>m({...g,type:"images"}),style:{...Ue.typeBtn,...g.type==="images"?Ue.typeOn:{}},children:[t.jsx(Xy,{size:15})," Images"]})]}),g.type==="text"?t.jsx("textarea",{placeholder:"Paste or write the text (verses, chant, reflection)…",value:g.content,onChange:U=>m({...g,content:U.target.value}),style:Ue.textarea}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:Ue.imgGrid,children:[g.images.map((U,de)=>t.jsxs("div",{style:Ue.imgThumbWrap,children:[t.jsx("img",{src:U,alt:"",style:Ue.imgThumb}),t.jsx("button",{onClick:()=>G(de),style:Ue.imgDel,children:t.jsx(Ae,{size:12})})]},de)),t.jsxs("label",{style:Ue.imgAdd,children:[t.jsx(ja,{size:20}),t.jsx("span",{style:{fontSize:11},children:"Add images"}),t.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:he,style:{display:"none"}})]})]}),t.jsx("div",{style:Ue.hint,children:"Images show as a swipeable carousel, in the order added."})]}),t.jsxs("div",{style:Ue.formActions,children:[t.jsxs("button",{onClick:()=>d(!1),style:Ue.cancelBtn,children:[t.jsx(Ae,{size:14})," Cancel"]}),t.jsxs("button",{onClick:pe,disabled:!ue,style:{...Ue.saveBtn,...ue?{}:Ue.saveDisabled},children:[t.jsx(He,{size:15})," Create deck"]})]})]}):w?t.jsxs("div",{style:Ue.contentWrap,children:[t.jsxs("div",{style:Ue.deckHead,children:[t.jsx("h2",{style:Ue.deckTitle,children:w.title}),t.jsx("button",{onClick:()=>ze(w.id),style:Ue.deckDel,title:"Delete deck",children:t.jsx(vs,{size:15})})]}),w.type==="images"?t.jsx(lp,{images:w.images}):t.jsx("div",{style:Ue.deckText,children:w.content})]}):t.jsxs("div",{style:Ue.contentWrap,children:[(j==null?void 0:j.youtube)&&t.jsx("div",{style:Ue.videoFrame,children:t.jsx("iframe",{src:`https://www.youtube.com/embed/${j.youtube}`,title:j.title,style:Ue.video,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},j.youtube)}),j!=null&&j.carousel?t.jsx(lp,{base:j.imageBase,count:j.carousel}):t.jsx("div",{className:"spiritual-content",dangerouslySetInnerHTML:{__html:(j==null?void 0:j.html)||""}})]})]})]})}const hv=`
.spiritual-content { font-family: 'Inter', system-ui, sans-serif; color: var(--text); line-height: 1.9; font-size: 16px; text-align: center; }
.spiritual-content h1 { font-family: 'Fraunces', Georgia, serif; font-size: 24px; color: #8268B0; margin: 8px 0 18px; letter-spacing: -0.01em; }
.spiritual-content h2 { font-family: 'Fraunces', Georgia, serif; font-size: 18px; color: #7A5EA8; margin: 20px 0 8px; }
.spiritual-content h3 { font-size: 15px; color: var(--text-3); text-transform: uppercase; letter-spacing: 0.06em; margin: 18px 0 6px; }
.spiritual-content b { color: #8268B0; }
.spiritual-content div { text-align: center; }
`,Ue={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:240,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.15)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.35)",zIndex:20},sideHead:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 14px 12px"},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700},sideScroll:{flex:1,overflowY:"auto",padding:"0 8px 16px"},sideItem:{display:"block",width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text-2)",textAlign:"left",marginBottom:2},sideItemOn:{background:"rgba(130,104,176,0.12)",color:"#8268B0",fontWeight:700},sideRow:{display:"flex",alignItems:"center",gap:2},editControls:{display:"flex",alignItems:"center",gap:1,flexShrink:0},miniBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:5},defStar:{color:"#C9A227",fontWeight:700},editHint:{fontSize:10.5,color:"var(--text-3)",padding:"0 14px 8px",lineHeight:1.4},newDeckBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",padding:"9px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,color:"var(--text-2)",marginTop:6},main:{flex:1,padding:"26px 22px",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:220},contentWrap:{background:"var(--surface)",borderRadius:14,padding:"26px 28px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",maxWidth:760,margin:"0 auto"},videoFrame:{position:"relative",width:"100%",maxWidth:600,margin:"0 auto 22px",aspectRatio:"16 / 9",borderRadius:12,overflow:"hidden",background:"#000"},video:{position:"absolute",inset:0,width:"100%",height:"100%",border:"none"},carouselFrame:{background:"var(--surface-2)",borderRadius:12,padding:8,border:"1px solid var(--border)"},carouselImg:{width:"100%",borderRadius:8,display:"block"},carouselNav:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:14},carouselBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},carouselCount:{fontSize:13,fontWeight:700,color:"#8268B0",fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"none",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,color:"var(--text-2)"},deckHead:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,marginBottom:16,borderBottom:"1px solid var(--border)",paddingBottom:12},deckTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",margin:0,color:"#8268B0"},deckDel:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",cursor:"pointer",display:"grid",placeItems:"center",padding:7,borderRadius:8,flexShrink:0},deckText:{fontSize:16,lineHeight:1.9,whiteSpace:"pre-wrap",color:"var(--text)",textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},formTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},typeRow:{display:"flex",gap:8,marginTop:12},typeBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},typeOn:{background:"#8268B0",color:"#fff",borderColor:"#8268B0"},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:200,resize:"vertical",lineHeight:1.7,marginTop:12},imgGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(90px, 1fr))",gap:8,marginTop:12},imgThumbWrap:{position:"relative",aspectRatio:"1",borderRadius:8,overflow:"hidden",border:"1px solid var(--border)"},imgThumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},imgDel:{position:"absolute",top:3,right:3,border:"none",background:"rgba(0,0,0,0.6)",color:"#fff",borderRadius:"50%",width:18,height:18,cursor:"pointer",display:"grid",placeItems:"center",padding:0},imgAdd:{aspectRatio:"1",border:"1px dashed var(--border)",borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4,cursor:"pointer",color:"var(--text-3)"},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:8},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"#8268B0",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"}},ln={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},ap=Object.keys(ln),fv=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],xv=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],yv=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},vv=(e,r)=>`${xv[r-1]} ${e}`,jv=(e,r)=>{const n=new Date(e,r,0).getDate();return Array.from({length:n},(o,i)=>`${e}-${String(r).padStart(2,"0")}-${String(i+1).padStart(2,"0")}`)},kv=(e,r)=>{const n=new Date(e,r-1,1).getDay();return n===0?6:n-1};function wv(){const e=yv(),[r,n]=c.useState(new Date().getFullYear()),[o,i]=c.useState(new Date().getMonth()+1),[s,l]=c.useState([]),[a,d]=c.useState([]),[g,m]=c.useState({}),[f,h]=c.useState(null),[B,R]=c.useState(!1),[z,S]=c.useState(!1),[p,b]=c.useState({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:e}),[u,k]=c.useState(null),x=c.useCallback(async()=>{const[A,P,$]=await Promise.all([F.getTopics(),F.getDueToday(),F.getCalendar(r,o)]);l(A),d(P),m($)},[r,o]);c.useEffect(()=>{x()},[x]);const T=async A=>{await F.toggleReviewDone(A),x()},E=async()=>{const A=p.intervals.split(",").map(P=>parseInt(P.trim(),10)).filter(P=>!isNaN(P));!p.topic.trim()||A.length===0||(await F.createTopic({pillar:p.pillar,topic:p.topic.trim(),intervals:A,learned_date:p.learned_date||e}),b({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:e}),S(!1),x())},{deleteItem:w,toasts:j,handleUndo:Y,handleDismiss:q}=ur(F.deleteTopic,F.restoreTopic,x),te=(A,P)=>w(A,P),he=A=>k({id:A.id,topic:A.topic,pillar:A.pillar,intervals:(A.intervals||[]).join(", "),learned_date:A.learned_date}),G=async()=>{if(!u)return;const A=u.intervals.split(",").map(P=>parseInt(P.trim(),10)).filter(P=>!isNaN(P)&&P>=0);!u.topic.trim()||A.length===0||(await F.updateTopic(u.id,{topic:u.topic.trim(),pillar:u.pillar,learned_date:u.learned_date,intervals:A}),k(null),x())},ue=()=>{o===1?(n(A=>A-1),i(12)):i(A=>A-1),h(null)},pe=()=>{o===12?(n(A=>A+1),i(1)):i(A=>A+1),h(null)},ze=s.filter(A=>!A.cemented),re=s.filter(A=>A.cemented),U=jv(r,o),de=kv(r,o),X=c.useMemo(()=>{const A={};return s.forEach(P=>P.reviews.forEach($=>{$.done||(A[$.due_date]=A[$.due_date]||[]).push({topic:P.topic,pillar:P.pillar,stage:$.stage})})),A},[s]),I=f?s.flatMap(A=>A.reviews.filter(P=>P.due_date===f).map(P=>({...P,topic:A.topic,pillar:A.pillar,total:A.reviews.length}))):[];return t.jsxs("div",{style:Fe.page,children:[t.jsxs("div",{style:Fe.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:Fe.eyebrow,children:"Anvil · Revision"}),t.jsx("h1",{style:Fe.h1,children:"Spaced Repetition"})]}),t.jsxs("button",{onClick:()=>S(!0),style:Fe.addBtn,children:[t.jsx(st,{size:15})," Add topic"]})]}),z&&t.jsxs("div",{style:Fe.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"What did you learn?",value:p.topic,onChange:A=>b(P=>({...P,topic:A.target.value})),onKeyDown:A=>A.key==="Enter"&&E(),style:Fe.input}),t.jsxs("div",{style:Fe.addRow,children:[t.jsx("select",{value:p.pillar,onChange:A=>b(P=>({...P,pillar:A.target.value})),style:Fe.select,children:ap.map(A=>t.jsx("option",{children:A},A))}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[t.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),t.jsx("input",{type:"date",value:p.learned_date,onChange:A=>b(P=>({...P,learned_date:A.target.value})),style:{...Fe.select,fontSize:13}})]}),t.jsx("div",{style:{flex:1,minWidth:0},children:t.jsx("input",{value:p.intervals,onChange:A=>b(P=>({...P,intervals:A.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:Fe.input})})]}),t.jsxs("div",{style:Fe.addRow,children:[t.jsxs("button",{onClick:E,style:Fe.saveBtn,children:[t.jsx(He,{size:14})," Save"]}),t.jsxs("button",{onClick:()=>S(!1),style:Fe.cancelBtn,children:[t.jsx(Ae,{size:14})," Cancel"]})]})]}),a.length>0&&t.jsxs("div",{style:Fe.section,children:[t.jsxs("div",{style:Fe.sectionTitle,children:[t.jsx(yh,{size:15,color:"#C2536B"}),"Due Today",t.jsx("span",{style:Fe.badge,children:a.length})]}),a.map(A=>{var $,ae;const P=(($=ln[A.pillar])==null?void 0:$.dot)||"#9A968C";return t.jsxs("div",{style:{...Fe.reviewCard,borderLeft:`3px solid ${P}`,...A.is_missed?{opacity:.85}:{}},children:[t.jsx("button",{onClick:()=>T(A.review_id),style:{...Fe.checkbox,...A.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:A.done&&t.jsx(He,{size:12,color:"#fff",strokeWidth:3})}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:Fe.reviewTopic,children:A.topic}),t.jsxs("div",{style:Fe.reviewMeta,children:[t.jsxs("span",{style:{...Fe.stageTag,background:((ae=ln[A.pillar])==null?void 0:ae.soft)||"rgba(0,0,0,0.05)",color:P},children:["Review ",A.stage,"/",A.total_stages]}),A.is_missed&&t.jsxs("span",{style:Fe.missedTag,children:["missed · ",A.due_date]})]})]})]},A.review_id)})]}),t.jsxs("div",{style:Fe.section,children:[t.jsxs("div",{style:Fe.sectionTitle,children:["Active Topics ",t.jsx("span",{style:Fe.badge,children:ze.length})]}),ze.length===0&&t.jsx("div",{style:Fe.empty,children:"No active topics. Add something you learned today."}),ze.map(A=>{var ce,De;const P=((ce=ln[A.pillar])==null?void 0:ce.dot)||"#9A968C",$=((De=ln[A.pillar])==null?void 0:De.soft)||"rgba(0,0,0,0.05)",ae=A.reviews.filter(Q=>Q.done).length;return(u==null?void 0:u.id)===A.id?t.jsxs("div",{style:Fe.addBox,children:[t.jsx("input",{autoFocus:!0,value:u.topic,onChange:Q=>k(ie=>({...ie,topic:Q.target.value})),onKeyDown:Q=>Q.key==="Enter"&&G(),placeholder:"Topic",style:Fe.input}),t.jsxs("div",{style:Fe.addRow,children:[t.jsx("select",{value:u.pillar,onChange:Q=>k(ie=>({...ie,pillar:Q.target.value})),style:Fe.select,children:ap.map(Q=>t.jsx("option",{children:Q},Q))}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[t.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),t.jsx("input",{type:"date",value:u.learned_date,onChange:Q=>k(ie=>({...ie,learned_date:Q.target.value})),style:{...Fe.select,fontSize:13}})]}),t.jsx("div",{style:{flex:1,minWidth:0},children:t.jsx("input",{value:u.intervals,onChange:Q=>k(ie=>({...ie,intervals:Q.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:Fe.input})})]}),t.jsx("div",{style:Fe.editHint,children:"Changing the date or intervals reschedules the reviews (completed steps are kept where they still apply)."}),t.jsxs("div",{style:Fe.addRow,children:[t.jsxs("button",{onClick:G,style:Fe.saveBtn,children:[t.jsx(He,{size:14})," Save plan"]}),t.jsxs("button",{onClick:()=>k(null),style:Fe.cancelBtn,children:[t.jsx(Ae,{size:14})," Cancel"]})]})]},A.id):t.jsxs("div",{style:Fe.topicCard,children:[t.jsxs("div",{style:Fe.topicHead,children:[t.jsx("span",{style:{...Fe.dot,background:P}}),t.jsx("span",{style:Fe.topicName,children:A.topic}),t.jsx("span",{style:Fe.topicPillar,children:A.pillar}),t.jsxs("span",{style:Fe.topicProgress,children:[ae,"/",A.reviews.length," done"]}),t.jsx("button",{onClick:()=>he(A),style:Fe.ghostBtn,title:"Edit plan",children:t.jsx(vt,{size:12})}),t.jsx("button",{onClick:()=>te(A.id,A.topic),style:Fe.ghostBtn,title:"Delete",children:t.jsx(Ae,{size:13})})]}),t.jsxs("div",{style:Fe.reviewDots,children:[A.reviews.map(Q=>{Q.due_date<e;const ie=Q.due_date===e;return t.jsx("button",{onClick:()=>T(Q.id),title:`Review ${Q.stage} · ${Q.due_date}${Q.done?" · Done":""}`,style:{...Fe.reviewDot,background:Q.done?P:ie?$:"var(--hover)",border:`2px solid ${Q.done||ie?P:"var(--border)"}`,color:Q.done?"#fff":P},children:Q.stage},Q.id)}),t.jsxs("span",{style:Fe.learnedDate,children:["Learned ",A.learned_date]})]})]},A.id)})]}),re.length>0&&t.jsxs("div",{style:Fe.section,children:[t.jsxs("button",{onClick:()=>R(A=>!A),style:Fe.cementedToggle,children:[B?t.jsx(So,{size:15}):t.jsx(nn,{size:15}),t.jsx(Yr,{size:14,color:"#C9A227"}),"Cemented",t.jsx("span",{style:{...Fe.badge,background:"rgba(201,162,39,0.12)",color:"#8A6E1A"},children:re.length})]}),B&&re.map(A=>{var $;const P=(($=ln[A.pillar])==null?void 0:$.dot)||"#9A968C";return t.jsx("div",{style:{...Fe.topicCard,opacity:.75},children:t.jsxs("div",{style:Fe.topicHead,children:[t.jsx("span",{style:{...Fe.dot,background:P}}),t.jsx("span",{style:Fe.topicName,children:A.topic}),t.jsx("span",{style:Fe.topicPillar,children:A.pillar}),t.jsx(Yr,{size:13,color:"#C9A227",style:{marginLeft:"auto"}})]})},A.id)})]}),t.jsxs("div",{style:Fe.calCard,children:[t.jsxs("div",{style:Fe.calHead,children:[t.jsx("button",{onClick:ue,style:Fe.calNav,children:"‹"}),t.jsxs("div",{style:Fe.calTitle,children:[vv(r,o)," · Review Calendar"]}),t.jsx("button",{onClick:pe,style:Fe.calNav,children:"›"})]}),t.jsx("div",{style:Fe.calDow,children:fv.map(A=>t.jsx("div",{style:Fe.calDowCell,children:A},A))}),t.jsxs("div",{style:Fe.calGrid,children:[Array.from({length:de}).map((A,P)=>t.jsx("div",{},`p${P}`)),U.map((A,P)=>{const $=X[A]||[],ae=A===e,ce=A===f,De=A<e,Q=ce?"#fff":ae?"var(--text)":De?"var(--text-2)":"var(--text-3)";return t.jsxs("button",{onClick:()=>h(ce?null:A),style:{...Fe.calDay,background:ce?"var(--accent-strong)":ae?"var(--hover)":"var(--surface)",borderColor:ae||ce?"var(--accent-strong)":"var(--border)"},children:[t.jsx("span",{style:{...Fe.calDayNum,color:Q,fontWeight:ae||ce?700:600},children:P+1}),$.slice(0,2).map((ie,O)=>{var ee;return t.jsxs("span",{title:ie.topic,style:{...Fe.calItem,color:ce?"#fff":((ee=ln[ie.pillar])==null?void 0:ee.dot)||"var(--text-2)"},children:[O+1,". ",ie.topic]},O)}),$.length>2&&t.jsxs("span",{style:{...Fe.calMore,color:ce?"#fff":"var(--text-3)"},children:["+",$.length-2," more"]})]},A)})]}),f&&t.jsxs("div",{style:Fe.dayDetail,children:[t.jsxs("div",{style:Fe.dayDetailTitle,children:["Reviews for ",f]}),I.length===0?t.jsx("div",{style:Fe.empty,children:"No reviews scheduled for this day."}):I.map((A,P)=>{var ae,ce;const $=((ae=ln[A.pillar])==null?void 0:ae.dot)||"#9A968C";return t.jsxs("div",{style:{...Fe.reviewCard,borderLeft:`3px solid ${$}`},children:[t.jsx("button",{onClick:()=>T(A.id),style:{...Fe.checkbox,...A.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:A.done&&t.jsx(He,{size:12,color:"#fff",strokeWidth:3})}),t.jsxs("div",{children:[t.jsxs("div",{style:Fe.reviewTopic,children:[P+1,". ",A.topic]}),t.jsxs("span",{style:{...Fe.stageTag,background:((ce=ln[A.pillar])==null?void 0:ce.soft)||"rgba(0,0,0,0.05)",color:$},children:["Review ",A.stage,"/",A.total]})]})]},A.id)})]})]}),t.jsx(pr,{toasts:j,onUndo:Y,onDismiss:q})]})}const Fe={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},addBox:{background:"var(--surface)",borderRadius:12,padding:16,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},addRow:{display:"flex",gap:8,alignItems:"center"},editHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",minWidth:0},select:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 10px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},section:{marginBottom:20},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},reviewCard:{display:"flex",alignItems:"center",gap:12,background:"var(--surface)",borderRadius:10,padding:"12px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},checkbox:{width:22,height:22,borderRadius:6,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,padding:0},reviewTopic:{fontSize:13.5,fontWeight:600,marginBottom:4},reviewMeta:{display:"flex",alignItems:"center",gap:8},stageTag:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10},missedTag:{fontSize:11,color:"#C2536B",fontWeight:600},topicCard:{background:"var(--surface)",borderRadius:12,padding:"13px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},topicHead:{display:"flex",alignItems:"center",gap:8,marginBottom:10},dot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},topicName:{fontSize:14,fontWeight:600,flex:1},topicPillar:{fontSize:11,color:"var(--text-3)",fontWeight:500},topicProgress:{fontSize:11,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:10},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},reviewDots:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},reviewDot:{width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",fontSize:11,fontWeight:700,padding:0},learnedDate:{fontSize:11,color:"var(--text-3)",marginLeft:"auto"},cementedToggle:{display:"flex",alignItems:"center",gap:8,border:"none",background:"none",cursor:"pointer",fontSize:13,fontWeight:700,color:"var(--text-2)",padding:"4px 0",fontFamily:"inherit",marginBottom:8},empty:{fontSize:13,color:"var(--text-3)",padding:"16px 0",textAlign:"center"},calCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{border:"none",background:"none",fontSize:20,cursor:"pointer",color:"var(--text-2)",padding:"0 6px",lineHeight:1},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4},calDay:{minHeight:62,border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,cursor:"pointer",fontFamily:"inherit",display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"flex-start",gap:1,position:"relative",padding:"3px 4px",overflow:"hidden",textAlign:"left"},calDayNum:{fontSize:11,lineHeight:1.1,marginBottom:1},calItem:{fontSize:8.5,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",lineHeight:1.3,textAlign:"left"},calMore:{fontSize:8,fontWeight:700,opacity:.85,lineHeight:1.2},dayDetail:{marginTop:16,paddingTop:16,borderTop:"1px solid var(--border)"},dayDetailTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10}},el=[{id:1,title:"Regular Habits",cards:[{id:1,text:"1. I always do everything I need to do, when I need to do it. "},{id:2,text:"2. I never argue or let my emotions work against me. "},{id:3,text:"3. I have a good memory. I easily and automatically remember any name or anything that is important to me. "},{id:4,text:"4. I eat only what I should. "},{id:5,text:"5. I am a good listener. I hear everything that is said. I am attentive, interested, and aware of everything that is going on around me. "},{id:6,text:"6. I have the courage to state my opinions. I take responsibility for myself and everything I say and do."},{id:7,text:"7. I never spend more than I earn. I am financially responsible, both for my present and for my future."},{id:8,text:"8. I set goals and I follow them. I set my sights, take the appropriate action, and achieve my goals."},{id:9,text:"9. I spend time with my family and my loved ones. I enjoy sharing their lives with mine and my life with theirs."}]},{id:2,title:"Motivational",cards:[{id:1,text:"1. I can do anything I believe I can do. I’ve got it and every day I get more of it. I have talent, skills, and ability"},{id:2,text:"2. I set goals and I reach them. I know what I want out of life. I go after it and I get it. "},{id:3,text:"3. People like me, and I feel good about myself. I have a sense of pride in whoa am and I believe in myself. Nothing seems to stop me. I have a lot of determination. "},{id:4,text:"4. I turn problems into advantages. I find possibilities in things that other people never give a chance."},{id:5,text:"5. I have a lot of energy––I am very alive. I enjoy life and I can tell it and so can others"},{id:6,text:"6. I keep myself up, looking ahead, and liking it. I know that I can accomplish anything I choose, and I refuse to let anything negative hold me back or stand in my way. I am not afraid of anything or anyone. I have strength, power, conviction, and confidence. "},{id:7,text:"7. I like challenges and I meet them head on, face to face––today especially. I am on top of the world and I’m going for it. "},{id:8,text:"8. I have a clear picture in my mind of what I want. I can see it in front of me. "},{id:9,text:"9. I know what I want and I know how to get it. I know that it’s all up to me and I know I can do it. Roadblocks don’t bother me. They just mean that I am alive and running, and I’m not going to stand still for anything. "},{id:10,text:"10. I trust myself I’ve got what it takes––plenty of it––and I know how to use it. "},{id:11,text:"11. Today, more than ever. Today I am unstoppable. I’ve got myself together and I’m getting more together every day. And today––look out world, here I come. "},{id:12,text:"12. Limitations? I don’t even recognize them as limitations. There is no challenge I can’t conquer; there is no wall I can’t climb over. "},{id:13,text:"13. There is no problem I can’t defeat or turn around and make it work for me. I stand tall. I am honest and sincere. I like to deal with people and they like me. "},{id:14,text:"14. I think well; I think clearly. I am organized; I am in control of myself, and everything about me. I call my shots and no one has to call them for me. I never blame anyone else for the circumstances of my life. "},{id:15,text:"15. I accept my failings and move past them as easily as I accept the rewards for my victories. I never demand perfection of myself, but I expect the very best of what I have to give––and that’s what I get. I never give myself excuses. "},{id:16,text:"16. I get things done on time and in the right way. Today I have the inner strength to do more than ever. I am an exceptional human being. "},{id:17,text:"17. My goals and my incredible belief in myself turn my goals into reality. I have the power to live my dreams."},{id:18,text:"18.  I believe in them like I believe in myself. And that belief is so strong that there is nothing that diminishes my undefeatable spirit. "}]},{id:3,title:"Organized planning",cards:[{id:1,text:"1. I am organized and in control of my life. I am in control of myself, my thoughts, my time, my actions, and my future. "},{id:2,text:"2. I know what to do and when to do it, and I do everything I need to do, when I need to do it. "},{id:3,text:"3. I program my mind to make the maximum use of my time. I am in control of my time and how to use it. I like being organized, efficient, and on top of things."},{id:4,text:"4. Controlling my time keeps me that way. "},{id:5,text:"5. I never waste time––I always “plan” time. And because I plan my time, I always have time to do the things I choose to do. "},{id:6,text:"6. Each day I become more organized and in control of all areas of my life––at home, at work, in my mind and in my thoughts, in everything that I do. "},{id:7,text:"7. I am very well organized. Each night I make a list of things I need to do the next day. I set my priorities and I follow them. "},{id:8,text:"8. I am always on time. I am always right where I need to be, exactly when I need to be there. "},{id:9,text:"9. Being on time is easy for me and the more I control my time and the more organized I become, the easier it is. "},{id:10,text:"10. I am in control of my feelings, my emotions, my attitudes, and my needs. I control them; they do not control me. "},{id:11,text:"11. I have the winning vote in the outcome of my own actions. And I choose to live my life by choice, not chance. Therefore, I take the time to take control."},{id:12,text:"12. I have an organized and orderly mind. Because I think in an organized way, I conduct my life in an organized manner. "},{id:13,text:"13. I think in the most positive and productive way at all times and in all things. The way I think is the way I live––and I think “right.” "},{id:14,text:"14. I am the director of my destiny. I know where I am going and I know why I am going there. My earthly life is in my hands and in my control. "},{id:15,text:"15. I control my goals and the achievement of my goals. I organize my goals by writing each of them down, along with the steps I need to reach them. One of the reasons for my success is that my goals are clearly defined and organized."},{id:16,text:"16. I am in complete control of what I think and how I think. Therefore, I choose to think only those thoughts which help me and which are of genuine benefit to me."}]},{id:4,title:"Solving Problems",cards:[{id:1,text:"1. I’m good at solving problems. I like challenges and I meet them head on. "},{id:2,text:"2. Problems are my teachers. They help me to learn and grow. Without them, I would be going nowhere. With them, I am moving forward in the direction of my own goals. "},{id:3,text:"3. There is no problem which I cannot conquer. I am strong in mind, body, and spirit. My will, my strength, and my determination are always greater than any problem I face."},{id:4,text:"4. When I meet a new problem, I do not see the problem as my enemy. I know that finding the solution to the problem will move me forward in my own personal growth."},{id:5,text:"5. Because I know that problems are a key ingredient in my spiritual and mental education and preparation, I recognize that all problems are important to me. "},{id:6,text:"6. I do not fear problems, I solve them. I do not ignore problems, I confront them. I do not avoid problems, I conquer them. "},{id:7,text:"7. I know that every problem holds within itself the keys to its own solution. Therefore, the better I understand the problem, the clearer I am able to see its solution. "},{id:8,text:"8. Having problems is not a problem for me. I am confident, self-assured, positive, and determined. I always know that I am going to overcome any problem I encounter––and I always do. "},{id:9,text:"9. I am good at breaking large obstacles down into smaller pieces that are easier to handle. And I never make any problem appear to be larger than it actually is. "},{id:10,text:"10. I never worry. I turn “worry time” into positive, constructive, “solution time.” I keep my mind alert and open to all solutions—and solutions come quickly and easily to me. "},{id:11,text:"11. I have learned to recognize that many problems carry with them benefits and potential opportunities which would not have presented themselves had the problem not occurred in the first place. "},{id:12,text:"12. I do not seek to live a life which is free from all problems. Instead, I choose to live a life of finding solutions and enjoying the benefits which those solutions create."},{id:13,text:"13. Challenge, conquer, solution, and win are words which I live by daily. Challenges are opportunities. Conquering them is the inevitable outcome. "},{id:14,text:"14. “Solutions” are the stepping stones to my success, and “Winning” is my way of life."}]},{id:5,title:"Self Esteem",cards:[{id:1,text:"1. I really am very special. I like who I am and I feel good about myself. "},{id:2,text:"2. Although I always work to improve myself and I get better every day, I like who I am today. And tomorrow, when I’m even better, I’ll like myself then, too. "},{id:3,text:"3. It’s true that there really is no one else like me in the entire world. There never was another me before, and there will never be another me again. "},{id:4,text:"4. I am unique––from the top of my head to the bottom of my feet. In some ways I may look and act and sound like some others––but I am not them. I am me."},{id:5,text:"5. I wanted to be somebody––and now I know I am I would rather be me than anyone else in the world. "},{id:6,text:"6. I like how I feel and I like how I think and I like how I do things. I approve of me and I approve of who I am."},{id:7,text:"7. I have many beautiful qualities about me. I have talents and skills and abilities. I even have talents that I don’t even know about yet. And I am discovering new talents inside myself all the time. "},{id:8,text:"8. I am positive. I am confident. I radiate good things. If you look closely, you can even see a glow around me."},{id:9,text:"9. I am full of life. I like life and I’m glad to be alive. I am a very special person, living at a very special time. "},{id:10,text:"10. I am intelligent. My mind is quick and alert and clever and fun. I think good thoughts, and my mind makes things work right for me. "},{id:11,text:"11. I have a lot of energy and enthusiasm and vitality. I am exciting and I really enjoy being me. "},{id:12,text:"12. I like to be around other people and other people like to be around me. People like to hear what I have to say and know what I have to think. "},{id:13,text:"13. I smile a lot. I am happy on the inside and I am happy on the outside. "},{id:14,text:"14. I am interested in many things. I appreciate all the blessings I have, and the things that I learn, and all the things I will learn today and tomorrow and forever––just as long as I am. "},{id:15,text:"15. I am warm, sincere, honest, and genuine. I am all of these things and more. And all of these things are me. I like who I am, and I’m glad to be me."}]},{id:6,title:"Self-Responsibility",cards:[{id:1,text:"1. I take full responsibility for everything about me––even the thoughts that I think. I am in control of the vast resources of my own mind."},{id:2,text:"2. I alone am responsible for what I do and what I tell myself about me. No one can share this responsibility with me. "},{id:3,text:"3. I also allow others to accept their responsibilities far themselves and I do not try to accept their responsibilities for them. "},{id:4,text:"4. I enjoy being responsible. It puts me in charge of being me––and that’s a challenge I enjoy. "},{id:5,text:"5. I allow no one else, at any time, to assume control or responsibility over my life or over anything that I do. My responsibility to others is an extension of my own responsibility to myself. "},{id:6,text:"6. I choose to leave nothing about me up to chance. When it comes to me––and anything in my life––I choose to CHOOSE. "},{id:7,text:"7. My choices are mine alone to make for myself. I do not, at any time, allow anyone else to make my choices for me. And I accept full responsibility for every choice and decision I make. "},{id:8,text:"8. I always meet all of the obligations which I accept. And I accept no obligations which I will not meet. "},{id:9,text:"9. I am trustworthy. I can be counted on. I have accepted winning responsibility for myself––and I always live up to the responsibilities I accept. "},{id:10,text:"10. There is no they on whom I lay the blame, or with whom I share my own personal responsibilities. I have learned the great secret of mastering my own destiny. I have learned that “they” is “me.” "},{id:11,text:"11. I have no need to make excuses and no one needs to carry my responsibility for me. I gladly carry my own weight––and I carry it well. "},{id:12,text:"12. Each day I acknowledge and accept the responsibility––not only for my own actions––but also for my emotions, my thoughts, and my attitude. "},{id:13,text:"13. I accept the responsibility for living my life in a way which creates my strengths, my happiness, my positive, healthy beliefs, and for my past, my present, and my future."}]},{id:7,title:"Freedom from worry",cards:[{id:1,text:"1. I never worry. Instead of worrying, I find solutions and I act on them. "},{id:2,text:"2. My mind is constantly in tune with the positive. It is bright, cheerful, enthusiastic, and full of good, positive thoughts and ideas. "},{id:3,text:"3. I am able to relax easily and comfortably in my body and in my mind. I am calm, confident, and self-assured. "},{id:4,text:"4. My mind is orderly and well-organized. I consciously choose what I think and I always choose those thoughts which are the most positive and beneficial for me. "},{id:5,text:"5. All of my thoughts create healthiness within me. My mind dwells only on those thoughts which create more harmony, balance, and well-being within me and in the world around me. "},{id:6,text:"6. I automatically, and always, think in a decisive and determined way. "},{id:7,text:"7. I am full of resolution and the absolute assurance of the best possible outcome in everything that I do. "},{id:8,text:"8. I choose to look at the world around me in the bright, healthy light of optimism and self-assurance. "},{id:9,text:"9. I do only those things which are best for me. I create the best within myself, I attract the best in others, and I find the best in the world around me. "},{id:10,text:"10. I willingly, and without fail, take care of the duties and obligations which I have accepted for myself."},{id:11,text:"11. I commit only to those responsibilities which I know I can fulfill. "},{id:12,text:"12. I focus the attention of my mind only on those things that I can do something about. If I cannot affect it or direct it––I accept it. "},{id:13,text:"13. I keep my mind too busy thinking good, healthy, positive, constructive, and productive thoughts to ever have any time for worry. "},{id:14,text:"14. I control the thoughts I choose. No thought, at any time, can dwell in my mind without my approval or permission. I never worry."}]},{id:8,title:"Eating Habits",cards:[{id:1,text:"1. I am in control of myself in every way––at all times and in all situations. "},{id:2,text:"2. Each time I sit down to eat I reaffirm my determination to achieve my goal. By eating right, and never giving in, I am reaching the weight I want. "},{id:3,text:"3. Whether eating in or eating out, I really enjoy eating less. "},{id:4,text:"4. I never feel the need to finish the food in front of me. I eat only what I should––and never one bite more. "},{id:5,text:"5. One way to weight-loss that’s easy and works, is less food on my plate, and less on my fork. "},{id:6,text:'6. By ordering less when I eat out, and by serving myself smaller portions at home, I keep myself aware of the importance of staying with my goal––each and every day. “Less on my plate means less on my waist."'},{id:7,text:"7. When I sit down to eat, at no time do I allow anyone else to influence, tempt, or discourage me in any negative way."},{id:8,text:"8. What I eat, and the goals I reach, are up to me. And I give no one the right to hinder or control my success."},{id:9,text:"9. Although others may benefit from my success, I. am achieving my weight-loss goals for my own personal reasons––for myself, my life, my future, and my own personal well-being."},{id:10,text:"10. I am never, at any time, tempted to take one bite more than I should. I am strong, I am capable of reaching my goal, and I am doing it."},{id:11,text:"11. Being in situations which put a lot of food in front of me is not a problem to me now. I simply say “No” to the food and “Yes” to my success."},{id:12,text:"12. I enjoy sitting down to eat. Each time I do I conquer my past, and I create a trimmer, happier, more self-confident future in front of me. "},{id:13,text:"13. When I sit down to eat, I do not need someone else to remind me of my goal, or to keep me from eating something I should not. I take full responsibility for myself, and no one else has to do it for me. "},{id:14,text:"14. Controlling my weight, and my appetite, is easy for me now. I enjoy smaller portions, smaller bites, and a slower, healthier, more relaxed way of eating. "},{id:15,text:"15. I have set my goal and I am staying with it. I have turned mealtime into “achievement time.”"}]}],dp=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#3A7CA5","#4C9A6B"],nd=e=>dp[e%dp.length],Sv=e=>e+"1A",Ai="affirmation_favs",Cv="anvil_affirmation_favs",cp=()=>{try{return JSON.parse(localStorage.getItem(Ai)||localStorage.getItem(Cv)||"[]")}catch{return[]}};function zv(){const[e,r]=c.useState(0),[n,o]=c.useState(0),[i,s]=c.useState(()=>new Set(cp())),l=c.useRef(!1);c.useEffect(()=>{let p=!1;return F.getSetting(Ai).then(b=>{if(!p){if(Array.isArray(b==null?void 0:b.value))s(new Set(b.value));else{const u=cp();u.length&&F.setSetting(Ai,u).catch(()=>{}),s(new Set(u))}l.current=!0}}).catch(()=>{l.current=!0}),()=>{p=!0}},[]),c.useEffect(()=>{localStorage.setItem(Ai,JSON.stringify([...i])),l.current&&F.setSetting(Ai,[...i]).catch(()=>{})},[i]);const a=(p,b)=>`${p}#${b.id}`,d=e==="FAV"?el.flatMap((p,b)=>p.cards.filter(u=>i.has(a(p.title,u))).map(u=>({...u,color:nd(b),title:p.title}))):el[e].cards.map(p=>({...p,color:nd(e),title:el[e].title})),g=d.length,m=Math.min(n,Math.max(0,g-1)),f=d[m],h=p=>{r(p),o(0)},B=c.useCallback(()=>o(p=>Math.max(0,p-1)),[]),R=c.useCallback(()=>o(p=>Math.min(g-1,p+1)),[g]);c.useEffect(()=>{const p=b=>{b.key==="ArrowLeft"&&B(),b.key==="ArrowRight"&&R()};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[B,R]);const z=p=>s(b=>{const u=new Set(b);return u.has(p)?u.delete(p):u.add(p),u}),S=f?f.color:"#8268B0";return t.jsxs("div",{style:jt.page,children:[t.jsxs("div",{style:jt.head,children:[t.jsx("div",{style:jt.eyebrow,children:"Anvil · Affirmations"}),t.jsx("h1",{style:jt.h1,children:"Affirmations"}),t.jsx("div",{style:jt.subhead,children:"One at a time — read it, mean it."})]}),t.jsxs("div",{style:jt.filterBar,children:[el.map((p,b)=>{const u=e===b,k=nd(b);return t.jsxs("button",{onClick:()=>h(b),style:{...jt.chip,...u?{background:k,color:"#fff",borderColor:k}:{}},children:[t.jsx("span",{style:{...jt.catDot,background:u?"#fff":k}})," ",p.title," ",t.jsx("span",{style:jt.chipCount,children:p.cards.length})]},p.title)}),t.jsxs("button",{onClick:()=>h("FAV"),style:{...jt.chip,...e==="FAV"?{background:"#C9A227",color:"#fff",borderColor:"#C9A227"}:{}},children:[t.jsx(Yi,{size:12,fill:e==="FAV"?"#fff":"none"})," Favorites ",t.jsx("span",{style:jt.chipCount,children:i.size})]})]}),g===0?t.jsxs("div",{style:jt.empty,children:[t.jsx(Yi,{size:22,color:"#C3BFB5"}),t.jsx("div",{children:"No favorites yet — tap the star on a card to save it here."})]}):t.jsxs("div",{style:jt.viewer,children:[t.jsxs("div",{style:{...jt.card,borderTop:`4px solid ${S}`},children:[t.jsx("div",{style:{...jt.cardCat,color:S,background:Sv(S)},children:f.title}),t.jsx("button",{onClick:()=>z(a(f.title,f)),style:{...jt.favBtn,color:i.has(a(f.title,f))?"#C9A227":"#C3BFB5"},title:"Favorite",children:t.jsx(Yi,{size:20,fill:i.has(a(f.title,f))?"#C9A227":"none"})}),t.jsx(cc,{size:30,color:S,style:{opacity:.25}}),t.jsx("p",{style:jt.cardText,children:f.text.trim()})]}),t.jsxs("div",{style:jt.navRow,children:[t.jsxs("button",{onClick:B,disabled:m===0,style:{...jt.navBtn,...m===0?jt.navBtnDisabled:{}},children:[t.jsx(Sn,{size:18})," Back"]}),t.jsxs("span",{style:{...jt.counter,color:S},children:[m+1," ",t.jsxs("span",{style:jt.counterTotal,children:["/ ",g]})]}),t.jsxs("button",{onClick:R,disabled:m===g-1,style:{...jt.navBtn,...m===g-1?jt.navBtnDisabled:{}},children:["Next ",t.jsx(nn,{size:18})]})]}),t.jsx("div",{style:jt.dots,children:d.map((p,b)=>t.jsx("button",{onClick:()=>o(b),style:{...jt.dot,...b===m?{background:S,transform:"scale(1.5)"}:{}},title:`${b+1}`},b))})]})]})}const jt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:22},chip:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipCount:{fontSize:11,fontWeight:700,opacity:.7},catDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},empty:{display:"flex",flexDirection:"column",alignItems:"center",gap:10,fontSize:13.5,color:"var(--text-3)",padding:"56px 12px",textAlign:"center",background:"var(--surface)",borderRadius:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},viewer:{display:"flex",flexDirection:"column",alignItems:"center"},card:{position:"relative",background:"var(--surface)",borderRadius:16,padding:"40px 32px 44px",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",width:"100%",minHeight:240,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",boxSizing:"border-box"},cardCat:{position:"absolute",top:16,left:16,fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:12,textTransform:"uppercase",letterSpacing:"0.04em"},favBtn:{position:"absolute",top:14,right:14,border:"none",background:"none",cursor:"pointer",padding:4,display:"grid",placeItems:"center"},cardText:{fontSize:21,lineHeight:1.55,margin:"14px 0 0",fontWeight:500,color:"var(--text)",fontFamily:"'Fraunces',Georgia,serif",maxWidth:560},navRow:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",maxWidth:420,marginTop:22},navBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},counter:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},counterTotal:{fontSize:13,fontWeight:600,color:"var(--text-3)"},dots:{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center",marginTop:20,maxWidth:480},dot:{width:7,height:7,borderRadius:"50%",border:"none",background:"var(--border)",cursor:"pointer",padding:0,transition:"transform 0.12s"}},Tv=[{id:"day",label:"Day"},{id:"week",label:"Week"},{id:"month",label:"Month"},{id:"year",label:"Year"}],cn=e=>e>=60?`${Math.floor(e/60)}h ${e%60}m`:`${e}m`,Iv=e=>{const r=e<12?"am":"pm",n=e%12===0?12:e%12;return`${String(n).padStart(2,"0")} ${r}`};function Bv(e){const r=e<=60?10:e<=120?20:e<=300?60:120,n=Math.max(60,Math.ceil((e||1)/r)*r),o=[];for(let i=0;i<=n;i+=r)o.push(i);return{max:n,ticks:o}}const Dh=e=>{const r=new Date(e);return r.setHours(0,0,0,0),r},Rv=e=>{const r=Dh(e),n=(r.getDay()+6)%7;return r.setDate(r.getDate()-n),r},Ev=e=>new Date(e.getFullYear(),e.getMonth(),1),Fv=e=>new Date(e.getFullYear(),0,1);function Av(e,r){if(e==="day"){const i=Dh(r);return{start:i,end:new Date(+i+864e5),prev:new Date(+i-864e5),prev2:new Date(+i-2*864e5)}}if(e==="week"){const i=Rv(r);return{start:i,end:new Date(+i+7*864e5),prev:new Date(+i-7*864e5),prev2:new Date(+i-14*864e5)}}if(e==="month"){const i=Ev(r),s=r.getFullYear(),l=r.getMonth();return{start:i,end:new Date(s,l+1,1),prev:new Date(s,l-1,1),prev2:new Date(s,l-2,1)}}const n=r.getFullYear();return{start:Fv(r),end:new Date(n+1,0,1),prev:new Date(n-1,0,1),prev2:new Date(n-2,0,1)}}function Dv({sessions:e=[],onBack:r}){const[n,o]=c.useState("day"),i=new Date,{start:s,end:l,prev:a,prev2:d}=Av(n,i),g=pe=>new Date(pe.started_at||pe.created_at),m=e.filter(pe=>pe.completed),f=(pe,ze,re)=>{const U=g(pe);return U>=ze&&U<re},h=(pe,ze)=>m.filter(re=>f(re,pe,ze)).reduce((re,U)=>re+(U.actual_min||0),0),B=m.filter(pe=>f(pe,s,l)),R=B.reduce((pe,ze)=>pe+(ze.actual_min||0),0),z=h(a,s),S=h(d,a),p=B.length,b=Array(24).fill(0);B.forEach(pe=>{b[g(pe).getHours()]+=pe.actual_min||0});const u=Math.max(...b,0),k=Bv(u),x={};B.forEach(pe=>{const ze=Vt[pe.tree]?pe.tree:rn;x[ze]=(x[ze]||0)+(pe.actual_min||0)});const T=Object.entries(x).map(([pe,ze])=>({name:Vt[pe].label,min:ze,color:Vt[pe].leaf})).sort((pe,ze)=>ze.min-pe.min),E=z>0?Math.round((R-z)/z*100):R>0?100:0,w=E>0?Ki:E<0?Yn:bh,j=E>0?"#4C9A6B":E<0?"#C2536B":"#9A968C",Y={day:"yesterday",week:"last week",month:"last month",year:"last year"}[n],q={day:"2 days ago",week:"2 weeks ago",month:"2 months ago",year:"2 years ago"}[n],te=54,he=22,G=2*Math.PI*te;let ue=0;return t.jsxs("div",{style:Oe.page,children:[t.jsxs("div",{style:Oe.topbar,children:[t.jsxs("button",{onClick:r,style:Oe.back,children:[t.jsx(sh,{size:18})," Grove"]}),t.jsx("h1",{style:Oe.h1,children:"Insights"}),t.jsx("div",{style:{width:76}})]}),t.jsx("div",{style:Oe.rangeBar,children:Tv.map(pe=>t.jsx("button",{onClick:()=>o(pe.id),style:{...Oe.rangeBtn,...n===pe.id?Oe.rangeOn:{}},children:pe.label},pe.id))}),t.jsxs("div",{style:Oe.headline,children:[t.jsxs("div",{style:Oe.bigStat,children:[t.jsx("div",{style:Oe.bigVal,children:cn(R)}),t.jsxs("div",{style:Oe.bigLbl,children:["Focused this ",n]})]}),t.jsxs("div",{style:Oe.bigStat,children:[t.jsx("div",{style:Oe.bigVal,children:p}),t.jsx("div",{style:Oe.bigLbl,children:"Trees"})]})]}),t.jsxs("div",{style:Oe.card,children:[t.jsxs("div",{style:Oe.cardHead,children:[t.jsxs("div",{style:Oe.cardTitle,children:["Your forest this ",n]}),t.jsx("div",{style:Oe.cardHint,children:"Each tree is a completed session — bigger means longer focus"})]}),t.jsx(Lv,{sessions:B}),t.jsxs("div",{style:Oe.forestNumber,children:[p," ",p===1?"tree":"trees"," · ",cn(R)," focused"]})]}),t.jsx(od,{title:"Focus distribution",hint:"Minutes focused at each time of day",children:u===0?t.jsx(gp,{}):t.jsx(Mv,{hours:b,axis:k})}),t.jsx(od,{title:"Pillar distribution",hint:"How your focus splits across the five trees",children:T.length===0?t.jsx(gp,{}):t.jsxs("div",{style:Oe.donutWrap,children:[t.jsxs("svg",{viewBox:"0 0 140 140",width:"150",height:"150",style:{flexShrink:0},children:[T.map(pe=>{const ze=pe.min/(R||1)*G,re=t.jsx("circle",{cx:"70",cy:"70",r:te,fill:"none",stroke:pe.color,strokeWidth:he,strokeDasharray:`${ze} ${G-ze}`,strokeDashoffset:-ue,transform:"rotate(-90 70 70)"},pe.name);return ue+=ze,re}),t.jsx("text",{x:"70",y:"66",textAnchor:"middle",style:Oe.donutCenterTop,children:cn(R)}),t.jsx("text",{x:"70",y:"82",textAnchor:"middle",style:Oe.donutCenterSub,children:"total"})]}),t.jsx("div",{style:Oe.legend,children:T.map(pe=>t.jsxs("div",{style:Oe.legendRow,children:[t.jsx("span",{style:{...Oe.legendDot,background:pe.color}}),t.jsx("span",{style:Oe.legendName,children:pe.name}),t.jsxs("span",{style:Oe.legendVal,children:[cn(pe.min)," · ",Math.round(pe.min/(R||1)*100),"%"]})]},pe.name))})]})}),t.jsxs(od,{title:"Focus trend",hint:`This ${n} vs the previous two`,children:[t.jsxs("div",{style:Oe.trend3,children:[t.jsxs("div",{style:Oe.trendCol,children:[t.jsx("div",{style:Oe.trendVal,children:cn(R)}),t.jsxs("div",{style:Oe.trendLbl,children:["This ",n]})]}),t.jsxs("div",{style:Oe.trendCol,children:[t.jsx("div",{style:{...Oe.trendVal,color:"var(--text-2)"},children:cn(z)}),t.jsx("div",{style:Oe.trendLbl,children:Y})]}),t.jsxs("div",{style:Oe.trendCol,children:[t.jsx("div",{style:{...Oe.trendVal,color:"var(--text-3)"},children:cn(S)}),t.jsx("div",{style:Oe.trendLbl,children:q})]})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:t.jsxs("div",{style:{...Oe.trendBadge,color:j,background:j+"1A"},children:[t.jsx(w,{size:15})," ",E>0?"+":"",E,"% vs ",Y]})}),t.jsx(_v,{items:[{label:`This ${n}`,value:R,color:"#4C9A6B"},{label:Y,value:z,color:"var(--text-3)"},{label:q,value:S,color:"var(--text-3)"}]})]})]})}const Wv=e=>e===0?"12a":e<12?`${e}a`:e===12?"12p":`${e-12}p`;function Mv({hours:e,axis:r}){return t.jsxs("div",{children:[t.jsxs("div",{style:Oe.vcPlot,children:[r.ticks.map(n=>t.jsxs("div",{style:{...Oe.vcGridRow,bottom:`${n/r.max*100}%`},children:[t.jsx("span",{style:Oe.vcYLabel,children:n}),t.jsx("div",{style:Oe.vcGridLine})]},n)),t.jsx("div",{style:Oe.vcBars,children:e.map((n,o)=>t.jsx("div",{style:Oe.vcCell,title:`${Iv(o)} · ${n} min`,children:t.jsx("div",{style:{...Oe.vcBar,height:n>0?`max(3px, ${n/r.max*100}%)`:0}})},o))})]}),t.jsx("div",{style:Oe.vcXAxis,children:e.map((n,o)=>t.jsx("div",{style:Oe.vcXCell,children:o%3===0?Wv(o):""},o))}),t.jsx("div",{style:Oe.vcYTitle,children:"minutes focused, by hour of day"})]})}function Lv({sessions:e}){if(!e.length)return t.jsx("div",{style:Oe.sceneEmpty,children:"No trees yet this period. 🌱"});const n=e.slice(0,80),o=e.length-n.length,i=s=>Math.round(Math.max(40,Math.min(88,40+(s||0)*.6)));return t.jsxs("div",{children:[t.jsx("div",{style:Oe.scene,children:n.map(s=>t.jsx("div",{style:Oe.sceneTree,title:`${s.label||"Focus"} · ${cn(s.actual_min||s.duration_min)}`,children:t.jsx(Rg,{species:s.tree,progress:1,size:i(s.actual_min||s.duration_min)})},s.id))}),o>0&&t.jsxs("div",{style:Oe.overflow,children:["+",o," more trees"]})]})}function od({title:e,hint:r,children:n}){return t.jsxs("div",{style:Oe.card,children:[t.jsxs("div",{style:Oe.cardHead,children:[t.jsx("div",{style:Oe.cardTitle,children:e}),r&&t.jsx("div",{style:Oe.cardHint,children:r})]}),n]})}function gp(){return t.jsx("div",{style:Oe.empty,children:"No focus sessions in this period yet. 🌱"})}function _v({items:e}){const r=Math.max(1,...e.map(n=>n.value));return t.jsx("div",{style:Oe.tbWrap,children:e.map(n=>t.jsxs("div",{style:Oe.tbRow,children:[t.jsx("div",{style:Oe.tbLbl,children:n.label}),t.jsx("div",{style:Oe.tbTrack,children:t.jsx("div",{style:{...Oe.tbBar,width:`${n.value/r*100}%`,background:n.color}})}),t.jsx("div",{style:Oe.tbVal,children:cn(n.value)})]},n.label))})}const Oe={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"20px 16px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:720,margin:"0 auto"},topbar:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},back:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},h1:{fontSize:20,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},rangeBar:{display:"flex",gap:6,background:"var(--surface)",padding:5,borderRadius:12,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},rangeBtn:{flex:1,border:"none",background:"none",padding:"9px 0",borderRadius:8,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},rangeOn:{background:"var(--accent-strong)",color:"#fff"},headline:{display:"flex",gap:12,marginBottom:16},bigStat:{flex:1,background:"var(--surface)",borderRadius:14,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},bigVal:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em"},bigLbl:{fontSize:12,color:"var(--text-3)",marginTop:3,fontWeight:500},card:{background:"var(--surface)",borderRadius:16,padding:"18px 18px 20px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},cardHead:{marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardHint:{fontSize:12,color:"var(--text-3)",marginTop:2},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"24px 0"},scene:{display:"flex",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"center",gap:"0 2px",padding:"14px 8px 6px",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,minHeight:110,border:"1px solid var(--border)"},sceneTree:{lineHeight:0},sceneEmpty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"34px 0",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,border:"1px solid var(--border)"},overflow:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",marginTop:6,fontWeight:600},forestNumber:{textAlign:"center",marginTop:12,fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},vcPlot:{position:"relative",height:180,paddingLeft:30},vcGridRow:{position:"absolute",left:0,right:0,display:"flex",alignItems:"center",height:0},vcYLabel:{width:26,marginRight:4,textAlign:"right",fontSize:9,color:"var(--text-3)",fontWeight:600,flexShrink:0},vcGridLine:{flex:1,height:1,background:"#EEEBE4"},vcBars:{position:"absolute",left:30,right:0,top:0,bottom:0,display:"flex",alignItems:"flex-end",gap:1},vcCell:{flex:1,height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"center"},vcBar:{width:"72%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",transition:"height 0.3s"},vcXAxis:{display:"flex",marginLeft:30,marginTop:4},vcXCell:{flex:1,textAlign:"center",fontSize:8.5,color:"var(--text-3)",fontWeight:600,overflow:"hidden"},vcYTitle:{textAlign:"center",fontSize:9.5,color:"var(--text-3)",marginTop:6,letterSpacing:"0.06em",textTransform:"uppercase",fontWeight:600},donutWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap",justifyContent:"center"},donutCenterTop:{fontSize:16,fontWeight:800,fill:"var(--text)",fontFamily:"'Fraunces',Georgia,serif"},donutCenterSub:{fontSize:9,fill:"#9A968C",textTransform:"uppercase",letterSpacing:"0.08em"},legend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:11,height:11,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},legendVal:{fontSize:12,color:"var(--text-3)",fontWeight:600,flexShrink:0},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:56,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},$v=[15,30,45,60,90],id="anvil_grove_active",up=e=>`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`,ea=e=>e>=60?`${Math.floor(e/60)}h ${e%60}m`:`${e}m`;function Pv(){const[e,r]=c.useState("timer"),[n,o]=c.useState("idle"),[i,s]=c.useState(15),[l,a]=c.useState(!1),[d,g]=c.useState(""),[m,f]=c.useState(rn),[h,B]=c.useState(()=>localStorage.getItem("anvil_grove_deepfocus")!=="0"),[R,z]=c.useState(15*60),[S,p]=c.useState({sessions:[],stats:null}),b=c.useRef(null),u=c.useRef(null),k=c.useRef(!1),x=c.useCallback(async()=>{try{p(await F.getFocus())}catch{}},[]),T=c.useCallback(async(X,I)=>{if(!k.current){k.current=!0,localStorage.removeItem(id);try{await F.createFocus({label:d.trim()||null,tree:m,duration_min:i,actual_min:I,completed:X,started_at:u.current,ended_at:new Date().toISOString()})}catch{}x()}},[d,m,i,x]),E=c.useCallback(()=>{if(n!=="running")return;const X=u.current?Math.round((Date.now()-new Date(u.current).getTime())/6e4):0;o("failed"),T(!1,Math.max(0,Math.min(i,X)))},[n,i,T]),w=c.useCallback(()=>{o("done"),z(0),T(!0,i)},[i,T]);c.useEffect(()=>{x();const X=JSON.parse(localStorage.getItem(id)||"null");if(X&&X.endTime){const I=Math.round((X.endTime-Date.now())/1e3);s(X.duration),g(X.label||""),f(X.tree||"oak"),b.current=X.endTime,u.current=X.startedAt,I>0?(z(I),o("running")):(o("done"),k.current=!1,T(!0,X.duration))}},[]),c.useEffect(()=>{if(n!=="running")return;const X=()=>{const A=Math.round((b.current-Date.now())/1e3);if(A<=0){w();return}z(A)};X();const I=setInterval(X,250);return()=>clearInterval(I)},[n,w]),c.useEffect(()=>{if(n!=="running"||!h)return;const X=()=>{document.hidden&&E()};return document.addEventListener("visibilitychange",X),()=>document.removeEventListener("visibilitychange",X)},[n,h,E]),c.useEffect(()=>{const X=()=>{!document.hidden&&n!=="running"&&x()};window.addEventListener("focus",X),document.addEventListener("visibilitychange",X);const I=setInterval(X,6e4);return()=>{window.removeEventListener("focus",X),document.removeEventListener("visibilitychange",X),clearInterval(I)}},[x,n]);const j=()=>B(X=>{const I=!X;return localStorage.setItem("anvil_grove_deepfocus",I?"1":"0"),I}),Y=()=>{k.current=!1,u.current=new Date().toISOString(),b.current=Date.now()+i*60*1e3,localStorage.setItem(id,JSON.stringify({endTime:b.current,duration:i,label:d,tree:m,startedAt:u.current})),z(i*60),o("running")},q=()=>{o("idle"),z(i*60)},te=X=>{a(!1),s(X),z(X*60)},he=()=>{l||(a(!0),s(5),z(5*60))},G=X=>{if(a(!0),X===""){s(0),z(0);return}const I=Math.max(1,Math.min(600,parseInt(X,10)||0));s(I),z(I*60)},ue=i*60,pe=n==="running"?1-R/ue:n==="done"?1:0,ze=130,re=2*Math.PI*ze,U=re*(1-(n==="running"?pe:n==="done"?1:0)),de=S.stats;return e==="stats"?t.jsx(Dv,{sessions:S.sessions,onBack:()=>r("timer")}):t.jsxs("div",{style:Ye.page,children:[t.jsxs("div",{style:Ye.head,children:[t.jsx("div",{style:Ye.eyebrow,children:"Anvil · Grove"}),t.jsx("h1",{style:Ye.h1,children:"Grove"}),t.jsx("div",{style:Ye.subhead,children:"Plant a tree, stay focused, grow your grove."}),t.jsxs("button",{onClick:()=>r("stats"),style:Ye.insightsBtn,disabled:n==="running",children:[t.jsx(_y,{size:15})," Insights"]})]}),de&&t.jsxs("div",{style:Ye.statRow,children:[t.jsx(tl,{label:"Today",value:ea(de.today_minutes)}),t.jsx(tl,{label:"Trees",value:de.trees}),t.jsx(tl,{label:"Streak",value:`${de.streak}d`}),t.jsx(tl,{label:"Success",value:`${de.success_rate}%`})]}),t.jsxs("div",{style:Ye.stage,children:[t.jsxs("div",{style:Ye.ringWrap,children:[t.jsxs("svg",{width:"300",height:"300",viewBox:"0 0 300 300",style:{position:"absolute",inset:0},children:[t.jsx("circle",{cx:"150",cy:"150",r:ze,fill:"none",stroke:"var(--border)",strokeWidth:"10"}),t.jsx("circle",{cx:"150",cy:"150",r:ze,fill:"none",stroke:n==="failed"?"#C2536B":"#4C9A6B",strokeWidth:"10",strokeLinecap:"round",strokeDasharray:re,strokeDashoffset:U,transform:"rotate(-90 150 150)",style:{transition:"stroke-dashoffset 0.4s linear"}})]}),t.jsx("div",{style:Ye.ringInner,children:t.jsx(Rg,{species:m,progress:n==="idle"?0:pe,withered:n==="failed",size:170})})]}),n==="idle"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:Ye.timeBig,children:up(i*60)}),t.jsxs("div",{style:Ye.controls,children:[t.jsxs("div",{style:Ye.chips,children:[$v.map(X=>t.jsxs("button",{onClick:()=>te(X),style:{...Ye.chip,...!l&&i===X?Ye.chipOn:{}},children:[X,"m"]},X)),t.jsx("button",{onClick:he,style:{...Ye.chip,...l?Ye.chipOn:{}},children:"Custom"})]}),l&&t.jsxs("div",{style:Ye.customRow,children:[t.jsx("input",{type:"number",min:"1",max:"600",inputMode:"numeric",autoFocus:!0,value:i||"",onChange:X=>G(X.target.value),placeholder:"e.g. 50",style:Ye.customInput}),t.jsx("span",{style:Ye.customUnit,children:"minutes"})]}),t.jsx("input",{value:d,onChange:X=>g(X.target.value),placeholder:"What are you focusing on? (optional)",style:Ye.input,maxLength:60}),t.jsx("div",{style:Ye.treePick,children:Object.entries(Vt).map(([X,I])=>t.jsxs("button",{onClick:()=>f(X),title:I.label,style:{...Ye.treeBtn,...m===X?{borderColor:I.leaf,background:I.leaf+"1A"}:{}},children:[t.jsx("span",{style:{...Ye.treeDot,background:I.leaf}}),I.label]},X))}),t.jsxs("button",{onClick:j,style:Ye.toggleRow,children:[t.jsxs("div",{style:{textAlign:"left"},children:[t.jsx("div",{style:Ye.toggleTitle,children:"Deep Focus"}),t.jsx("div",{style:Ye.toggleHint,children:h?"Leaving the app kills the tree":"Tree survives until you give up"})]}),t.jsx("div",{style:{...Ye.switch,...h?Ye.switchOn:{}},children:t.jsx("div",{style:{...Ye.knob,...h?Ye.knobOn:{}}})})]}),t.jsx("button",{onClick:Y,disabled:i<1,style:{...Ye.plantBtn,...i<1?{opacity:.5,cursor:"not-allowed"}:{}},children:"Plant tree"})]})]}),n==="running"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:Ye.timeBig,children:up(R)}),t.jsx("div",{style:Ye.focusLabel,children:d.trim()||"Focusing…"}),t.jsx("div",{style:h?Ye.warn:Ye.warnSoft,children:h?"⚠ Deep Focus on — leaving this app will kill your tree.":"🌿 Relaxed mode — only Give up ends this session."}),t.jsx("button",{onClick:E,style:Ye.giveUp,children:"Give up"})]}),n==="done"&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:Ye.resultTitle,children:["🌳 You grew a ",Vt[m].label," tree!"]}),t.jsxs("div",{style:Ye.resultSub,children:[ea(i)," of focus added to your grove."]}),t.jsx("button",{onClick:q,style:Ye.plantBtn,children:"Plant another"})]}),n==="failed"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{...Ye.resultTitle,color:"#C2536B"},children:"Your tree withered."}),t.jsx("div",{style:Ye.resultSub,children:"You left before the timer finished. Try again?"}),t.jsx("button",{onClick:q,style:Ye.plantBtn,children:"Try again"})]})]}),t.jsx(Nv,{sessions:S.sessions,onDelete:async X=>{await F.deleteFocus(X),x()}})]})}function tl({label:e,value:r}){return t.jsxs("div",{style:Ye.stat,children:[t.jsx("div",{style:Ye.statValue,children:r}),t.jsx("div",{style:Ye.statLabel,children:e})]})}function Nv({sessions:e,onDelete:r}){const n=e.filter(l=>l.completed);if(n.length===0)return t.jsx("div",{style:Ye.forestEmpty,children:"Your grove is empty. Plant your first tree above. 🌱"});const o={};for(const l of n){const a=(l.started_at||l.created_at||"").slice(0,10);(o[a]||(o[a]=[])).push(l)}const i=Object.keys(o).sort().reverse(),s=l=>{const a=new Date().toISOString().slice(0,10);return l===a?"Today":new Date(l+"T00:00").toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})};return t.jsxs("div",{style:Ye.forest,children:[t.jsxs("div",{style:Ye.forestHead,children:["Your Grove · ",n.length," trees"]}),i.map(l=>t.jsxs("div",{style:Ye.daySection,children:[t.jsxs("div",{style:Ye.dayLabel,children:[s(l)," · ",o[l].length]}),t.jsx("div",{style:Ye.treeGrid,children:o[l].map(a=>t.jsxs("div",{style:Ye.treeCard,title:`${a.label||"Focus"} · ${ea(a.actual_min)}`,onDoubleClick:()=>r(a.id),children:[t.jsx(I0,{species:a.tree}),t.jsx("div",{style:Ye.treeCardMin,children:ea(a.actual_min||a.duration_min)}),a.label&&t.jsx("div",{style:Ye.treeCardLabel,children:a.label})]},a.id))})]},l)),t.jsx("div",{style:Ye.forestHint,children:"Double-tap a tree to remove it."})]})}const Ye={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:820,margin:"0 auto"},head:{marginBottom:16,textAlign:"center"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},insightsBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginTop:12},statRow:{display:"flex",gap:10,justifyContent:"center",marginBottom:18,flexWrap:"wrap"},stat:{background:"var(--surface)",borderRadius:12,padding:"10px 18px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",minWidth:78},statValue:{fontSize:19,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},statLabel:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},stage:{background:"var(--surface)",borderRadius:18,padding:"28px 24px 32px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",display:"flex",flexDirection:"column",alignItems:"center",marginBottom:26},ringWrap:{position:"relative",width:300,height:300,display:"grid",placeItems:"center"},ringInner:{position:"relative",zIndex:1,display:"grid",placeItems:"center"},timeBig:{fontSize:40,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:6},focusLabel:{fontSize:14,color:"var(--text-2)",marginTop:2,fontWeight:500},warn:{fontSize:12,color:"#C2773B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},warnSoft:{fontSize:12,color:"#4C9A6B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},toggleRow:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:12,padding:"10px 14px",cursor:"pointer",fontFamily:"inherit",width:"100%"},toggleTitle:{fontSize:14,fontWeight:700,color:"var(--text)"},toggleHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},switch:{width:42,height:24,borderRadius:12,background:"var(--border)",flexShrink:0,padding:2,transition:"background 0.18s",boxSizing:"border-box"},switchOn:{background:"#4C9A6B"},knob:{width:20,height:20,borderRadius:"50%",background:"var(--surface)",boxShadow:"0 1px 2px rgba(0,0,0,0.2)",transform:"translateX(0)",transition:"transform 0.18s"},knobOn:{transform:"translateX(18px)"},controls:{width:"100%",maxWidth:380,display:"flex",flexDirection:"column",gap:14,marginTop:8},chips:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},chip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},customRow:{display:"flex",alignItems:"center",justifyContent:"center",gap:8},customInput:{border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:15,fontWeight:700,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center",width:100},customUnit:{fontSize:13,color:"var(--text-3)",fontWeight:600},input:{border:"1px solid var(--border)",borderRadius:10,padding:"11px 13px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center"},treePick:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},treeBtn:{display:"flex",alignItems:"center",gap:6,border:"1.5px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},treeDot:{width:10,height:10,borderRadius:"50%"},plantBtn:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},giveUp:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",padding:"11px 26px",borderRadius:11,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:18},resultTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginTop:14,textAlign:"center"},resultSub:{fontSize:13.5,color:"var(--text-3)",marginTop:6,marginBottom:18,textAlign:"center"},forest:{background:"var(--surface)",borderRadius:16,padding:"20px 22px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},forestHead:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},forestEmpty:{background:"var(--surface)",borderRadius:16,padding:"40px 20px",textAlign:"center",color:"var(--text-3)",fontSize:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},daySection:{marginBottom:16},dayLabel:{fontSize:12,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:8},treeGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(80px,1fr))",gap:8},treeCard:{display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 4px",borderRadius:10,cursor:"pointer",background:"var(--surface-2)"},treeCardMin:{fontSize:12,fontWeight:700,color:"#4C9A6B",marginTop:-4},treeCardLabel:{fontSize:10.5,color:"var(--text-3)",marginTop:2,textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:76},forestHint:{fontSize:11,color:"var(--text-3)",textAlign:"center",marginTop:6}},Ov="grove_rates",Hv="reward_rates",rl=Object.keys(Vt),pp=[{id:"kickstart",label:"Kickstart"},{id:"golden",label:"Golden Book"},{id:"habits",label:"Habits"},{id:"quadrant",label:"Quadrant"},{id:"goals",label:"Goals"},{id:"grove",label:"Grove"},{id:"journal",label:"Journal"},{id:"revision",label:"Revision"},{id:"affirmations",label:"Affirmations"},{id:"skills",label:"Skills"},{id:"spiritual",label:"Spiritual"},{id:"mindscape",label:"Mindscape"},{id:"vault",label:"Wallet"},{id:"expenses",label:"Expenses"},{id:"trading",label:"Trading Journal"},{id:"delight",label:"Delights"},{id:"achievements",label:"Achievements"},{id:"challenges",label:"Challenges"},{id:"bucket",label:"Bucket List"}],sd=new Set(["worth"]),bp="reward_toggles",mp="bucket_take_enabled",In="#C9A227",Ro="#3A7CA5",oo="#C2536B",io="#4C9A6B",hp=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#5B9B9B","#B0654E","#6E7FC2","#A23E57","#3E9E6B","#9A7BB0","#C99B2E","#4E86B0","#B04E86","#6BA34C","#8A6D3B"],Gv=e=>{const r=Math.floor(e/60),n=Math.round(e%60);return r&&n?`${r}h ${n}m`:r?`${r}h`:`${n}m`},ld=e=>{let r=Math.round((e||0)*60);const n=Math.floor(r/3600);r%=3600;const o=Math.floor(r/60);return r%=60,[n?`${n}h`:null,n||o?`${o}m`:null,`${r}s`].filter(Boolean).join(" ")},Uv=()=>{const e=new Date,r=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${r(e.getMonth()+1)}-${r(e.getDate())}T${r(e.getHours())}:${r(e.getMinutes())}`},fp=e=>{if(!e)return"";const r=new Date(e.includes("T")?e:e+"T00:00:00");return isNaN(r)?e:r.toLocaleDateString("en-US",e.includes("T")?{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}:{month:"short",day:"numeric",year:"numeric"})},fr=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,xp=e=>{const r=new Date(e);return r.setHours(0,0,0,0),r.setDate(r.getDate()-(r.getDay()+6)%7),r},Eo=[{id:"today",label:"Today"},{id:"all",label:"All time"},{id:"tweek",label:"This week"},{id:"tmonth",label:"This month"},{id:"pweek",label:"Last week"},{id:"pmonth",label:"Last month"},{id:"tyear",label:"This year"}];function Vv(e){const r=new Date;if(e==="today")return[fr(r),fr(r)];if(e==="tweek"){const n=xp(r),o=new Date(n);return o.setDate(n.getDate()+6),[fr(n),fr(o)]}if(e==="pweek"){const n=xp(r);n.setDate(n.getDate()-7);const o=new Date(n);return o.setDate(n.getDate()+6),[fr(n),fr(o)]}return e==="tmonth"?[fr(new Date(r.getFullYear(),r.getMonth(),1)),fr(new Date(r.getFullYear(),r.getMonth()+1,0))]:e==="pmonth"?[fr(new Date(r.getFullYear(),r.getMonth()-1,1)),fr(new Date(r.getFullYear(),r.getMonth(),0))]:e==="tyear"?[fr(new Date(r.getFullYear(),0,1)),fr(new Date(r.getFullYear(),11,31))]:["0000-01-01","9999-12-31"]}function Yv(){const e=Jn(),r=L=>Or(L,e.code),[n,o]=c.useState([]),[i,s]=c.useState([]),[l,a]=c.useState([]),[d,g]=c.useState([]),[m,f]=c.useState([]),[h,B]=c.useState([]),[R,z]=c.useState({}),[S,p]=c.useState({}),[b,u]=c.useState({focus:!0,usage:!0,achievement:!0,challenge:!0}),[k,x]=c.useState(!1),[T,E]=c.useState({}),[w,j]=c.useState({}),[Y,q]=c.useState(!1),[te,he]=c.useState(!1),[G,ue]=c.useState(null),[pe,ze]=c.useState(""),[re,U]=c.useState(""),[de,X]=c.useState(!1),[I,A]=c.useState("today"),[P,$]=c.useState([]),[ae,ce]=c.useState(!1),[De,Q]=c.useState(null),ie=()=>F.getPayouts().then(g).catch(()=>{}),O=()=>F.getBucket().then(L=>$(Array.isArray(L)?L:[])).catch(()=>{}),ee=()=>F.getRewardRates().then(a).catch(()=>{});c.useEffect(()=>{(async()=>{try{const[L,Ee,ot,W,Z,Ie,Ne,tt,Ze,et,bt]=await Promise.all([F.getFocus(),F.getScreenTime(),F.getRewardRates(),F.getPayouts(),F.getAchievements(),F.getChallenges(),F.getBucket(),F.getSetting(Ov),F.getSetting(Hv),F.getSetting(bp),F.getSetting(mp)]);o(L.sessions||[]),s(Array.isArray(Ee)?Ee:[]),a(ot||[]),g(W||[]),f(Array.isArray(Z)?Z:[]),B(Array.isArray(Ie)?Ie:[]),$(Array.isArray(Ne)?Ne:[]),z((tt==null?void 0:tt.value)||{}),p((Ze==null?void 0:Ze.value)||{}),et!=null&&et.value&&u(Be=>({...Be,...et.value})),ce(!!(bt!=null&&bt.value))}catch{}x(!0)})()},[]);const fe={};l.forEach(L=>{var Ee;(fe[Ee=`${L.kind}:${L.rkey}`]||(fe[Ee]=[])).push({eff:L.eff_date,rate:L.rate})}),Object.values(fe).forEach(L=>L.sort((Ee,ot)=>Ee.eff.localeCompare(ot.eff)));const M=(L,Ee,ot)=>{const W=fe[`${L}:${Ee}`];if(W){let Z=null;for(const Ie of W)if(Ie.eff<=ot)Z=Ie.rate;else break;if(Z!==null)return Z}return(L==="focus"?R[Ee]:S[Ee])||0},y=(L,Ee)=>{const ot=fe[`${L}:${Ee}`];return ot&&ot.length?ot[ot.length-1].rate:(L==="focus"?R[Ee]:S[Ee])??""},[ne,D]=Vv(I);let ge=0,ve=0;n.filter(L=>L.completed).forEach(L=>{const Ee=(L.started_at||L.created_at||"").slice(0,10),ot=Vt[L.tree]?L.tree:rn;ge+=(L.actual_min||0)/60*M("focus",ot,Ee)}),i.forEach(L=>{sd.has(L.screen)||(ve+=L.seconds/60*M("usage",L.screen,L.date))});const We=m.reduce((L,Ee)=>L+(Ee.reward||0),0),Xe=h.filter(L=>L.status==="done"),dt=Xe.reduce((L,Ee)=>L+(Ee.reward_earned||0),0),$e=(b.focus?ge:0)+(b.usage?ve:0)+(b.achievement?We:0)+(b.challenge?dt:0),rt=d.reduce((L,Ee)=>L+Ee.amount,0),Qe=Math.max(0,$e-rt),at=L=>{let Ee=0,ot=0;return b.focus&&n.filter(W=>W.completed).forEach(W=>{const Z=(W.started_at||W.created_at||"").slice(0,10);if(Z!==L)return;const Ie=Vt[W.tree]?W.tree:rn;Ee+=(W.actual_min||0)/60*M("focus",Ie,Z)}),b.usage&&i.forEach(W=>{sd.has(W.screen)||W.date!==L||(ot+=W.seconds/60*M("usage",W.screen,W.date))}),Ee+ot},se=L=>{const Ee=new Date;return Ee.setDate(Ee.getDate()+L),fr(Ee)},Me=[{label:"Today",value:at(se(0)),color:In},{label:"Yesterday",value:at(se(-1)),color:"var(--text-3)"},{label:"Day before",value:at(se(-2)),color:"var(--text-3)"}],qe={};rl.forEach(L=>qe[L]={minutes:0,earned:0}),n.filter(L=>L.completed).forEach(L=>{const Ee=(L.started_at||L.created_at||"").slice(0,10);if(Ee<ne||Ee>D)return;const ot=Vt[L.tree]?L.tree:rn,W=L.actual_min||0;qe[ot].minutes+=W,qe[ot].earned+=W/60*M("focus",ot,Ee)});const nt=b.focus?rl.reduce((L,Ee)=>L+qe[Ee].earned,0):0,ct={};i.forEach(L=>{var ot;if(sd.has(L.screen)||L.date<ne||L.date>D)return;const Ee=ct[ot=L.screen]||(ct[ot]={seconds:0,earned:0});Ee.seconds+=L.seconds,Ee.earned+=L.seconds/60*M("usage",L.screen,L.date)});const Ft=b.usage?Object.values(ct).reduce((L,Ee)=>L+Ee.earned,0):0,zt=m.filter(L=>L.date>=ne&&L.date<=D&&(L.reward||0)>0),yt=[...zt].sort((L,Ee)=>Ee.date.localeCompare(L.date)||Ee.reward-L.reward),mt=b.achievement?zt.reduce((L,Ee)=>L+(Ee.reward||0),0):0,wt=Xe.filter(L=>!L.end_date||L.end_date>=ne&&L.end_date<=D),Sr=[...wt].sort((L,Ee)=>(Ee.reward_earned||0)-(L.reward_earned||0)),v=b.challenge?wt.reduce((L,Ee)=>L+(Ee.reward_earned||0),0):0,le=nt+Ft+mt+v,Pe=le>0?nt/le*100:0,Le=le>0?Ft/le*100:0,Je=le>0?mt/le*100:0,br=le>0?v/le*100:0,pt=rl.map(L=>({p:L,...qe[L],...Vt[L]})).filter(L=>L.minutes>0).sort((L,Ee)=>Ee.earned-L.earned),H=pp.map(L=>({...L,...ct[L.id]||{seconds:0,earned:0}})).filter(L=>L.seconds>0).sort((L,Ee)=>Ee.earned-L.earned),je=H.reduce((L,Ee)=>L+Ee.seconds,0);let Mt=0;const Pt=H.map((L,Ee)=>{const ot=je>0?Mt/je*100:0;Mt+=L.seconds;const W=je>0?Mt/je*100:0;return{...L,color:hp[Ee%hp.length],start:ot,end:W,pct:je>0?L.seconds/je*100:0}}),ir=Pt.length?`conic-gradient(${Pt.map(L=>`${L.color} ${L.start}% ${L.end}%`).join(", ")})`:"var(--surface-2)",Cr=async()=>{const L=Object.entries(T);for(const[Ee,ot]of L)await F.setRewardRate({kind:"focus",rkey:Ee,rate:Math.max(0,parseFloat(ot)||0)}).catch(()=>{});E({}),q(!1),ee()},Cn=()=>{E({}),q(!1)},zr=async()=>{const L=Object.entries(w);for(const[Ee,ot]of L)await F.setRewardRate({kind:"usage",rkey:Ee,rate:Math.max(0,parseFloat(ot)||0)}).catch(()=>{});j({}),he(!1),ee()},on=()=>{j({}),he(!1)},sr=L=>{u(Ee=>{const ot={...Ee,[L]:!Ee[L]};return F.setSetting(bp,ot).catch(()=>{}),ot})},eo=L=>{Qe<=0||(ue(L),ze(L==="all"?Qe.toFixed(2):""),U(""),Q(null))},zn=async()=>{const L=Math.min(parseFloat(pe)||0,Qe);L<=0||!re.trim()||(await F.createPayout({amount:L,note:re.trim(),date:Uv()}),ue(null),ze(""),U(""),await ie(),X(!0))},pi=async()=>{!De||(De.cost||0)>Qe||(await F.fulfillBucketWish(De.id).catch(()=>{}),ue(null),Q(null),await Promise.all([ie(),O()]),X(!0))},bi=()=>{ce(L=>{const Ee=!L;return F.setSetting(mp,Ee).catch(()=>{}),Ee})},Sa=async L=>{await F.deletePayout(L),ie()};return t.jsxs("div",{style:_.page,children:[t.jsxs("div",{style:_.head,children:[t.jsx("div",{style:_.eyebrow,children:"Anvil · Rewards"}),t.jsx("h1",{style:_.h1,children:"Rewards"}),t.jsx("div",{style:_.subhead,children:"Your earned rewards from focus and app usage."})]}),t.jsxs("div",{style:_.hero,children:[t.jsx("button",{onClick:()=>X(L=>!L),style:_.logIcon,title:"View reward log",children:t.jsx(m0,{size:16})}),t.jsx("div",{style:_.heroLabel,children:"Final reward · pending"}),t.jsx("div",{style:_.heroVal,children:r(Qe)}),t.jsxs("div",{style:_.heroSub,children:["Earned ",r($e)," · Taken ",r(rt),We>0?` · incl. ${r(We)} achievement`:"",dt>0?` · incl. ${r(dt)} challenge`:""]}),t.jsxs("div",{style:_.heroBtns,children:[t.jsx("button",{onClick:()=>eo("partial"),disabled:Qe<=0,style:{..._.heroBtnGhost,...Qe<=0?_.btnDisabled:{}},children:"Take partial"}),t.jsx("button",{onClick:()=>eo("all"),disabled:Qe<=0,style:{..._.heroBtnSolid,...Qe<=0?_.btnDisabled:{}},children:"Take all pending"})]}),t.jsxs("button",{onClick:bi,style:_.bucketToggleRow,title:ae?"Taking will pick a bucket-list wish":"Taking uses a free amount",children:[t.jsx("span",{style:{..._.miniToggle,background:ae?"#fff":"rgba(255,255,255,0.3)",justifyContent:ae?"flex-end":"flex-start"},children:t.jsx("span",{style:{..._.miniKnob,background:ae?"var(--accent-strong)":"#fff"}})}),t.jsxs("span",{children:["Fulfil from bucket list",ae?" · on":" · off"]})]})]}),t.jsxs("div",{style:_.statRow,children:[t.jsxs("div",{style:_.statCard,children:[t.jsx("div",{style:_.statVal,children:r(rt)}),t.jsx("div",{style:_.statLbl,children:"Total taken"})]}),t.jsxs("div",{style:_.statCard,children:[t.jsx("div",{style:{..._.statVal,color:In},children:r(Qe)}),t.jsx("div",{style:_.statLbl,children:"Total pending"})]})]}),t.jsxs("div",{style:_.card,children:[t.jsx("div",{style:_.threeDayTitle,children:"Earned · last 3 days"}),t.jsx(Kv,{items:Me,reward:r})]}),t.jsx("div",{style:_.periodRow,children:Eo.map(L=>t.jsx("button",{onClick:()=>A(L.id),style:{..._.periodChip,...I===L.id?_.periodChipOn:{}},children:L.label},L.id))}),le>0?t.jsxs("div",{style:_.card,children:[t.jsxs("div",{style:_.cardTitleRow,children:[t.jsx("span",{style:_.cardTitle,children:"Reward split"}),t.jsxs("span",{style:_.periodTotal,children:[r(le)," · ",Eo.find(L=>L.id===I).label]})]}),t.jsxs("div",{style:_.splitTrack,children:[t.jsx("div",{style:{width:`${Pe}%`,background:In,height:"100%"}}),t.jsx("div",{style:{width:`${Le}%`,background:Ro,height:"100%"}}),t.jsx("div",{style:{width:`${Je}%`,background:oo,height:"100%"}}),t.jsx("div",{style:{width:`${br}%`,background:io,height:"100%"}})]}),t.jsxs("div",{style:_.legendRow,children:[t.jsxs("span",{style:_.legendItem,children:[t.jsx("span",{style:{..._.legendDot,background:In}})," Focus ",Math.round(Pe),"% · ",r(nt)]}),t.jsxs("span",{style:_.legendItem,children:[t.jsx("span",{style:{..._.legendDot,background:Ro}})," Usage ",Math.round(Le),"% · ",r(Ft)]}),t.jsxs("span",{style:_.legendItem,children:[t.jsx("span",{style:{..._.legendDot,background:oo}})," Achievement ",Math.round(Je),"% · ",r(mt)]}),t.jsxs("span",{style:_.legendItem,children:[t.jsx("span",{style:{..._.legendDot,background:io}})," Challenges ",Math.round(br),"% · ",r(v)]})]})]}):t.jsxs("div",{style:{..._.card,..._.muted},children:["No rewards earned in ",Eo.find(L=>L.id===I).label.toLowerCase(),"."]}),t.jsxs("div",{style:{..._.card,...b.focus?{}:_.cardOff},children:[t.jsxs("div",{style:_.sectionHead,children:[t.jsxs("span",{style:{..._.cardTitle,color:In},children:["Focus Rewards · ",r(nt)]}),t.jsxs("div",{style:_.sectionHeadRight,children:[b.focus&&t.jsx("button",{onClick:()=>Y?Cn():q(!0),style:_.collapseLink,children:Y?"Hide rates":"Set rates"}),t.jsx(nl,{on:b.focus,onClick:()=>sr("focus"),color:In})]})]}),b.focus&&Y&&t.jsxs("div",{style:{marginTop:12},children:[t.jsx("div",{style:_.rateGrid,children:rl.map(L=>t.jsxs("div",{style:_.rateRow,children:[t.jsx("span",{style:{..._.dot,background:Vt[L].leaf}}),t.jsx("span",{style:_.rateName,children:Vt[L].label}),t.jsxs("div",{style:_.rateInputWrap,children:[t.jsx("span",{style:_.unitSign,children:e.symbol}),t.jsx("input",{type:"number",min:"0",step:"0.5",inputMode:"decimal",placeholder:"0",value:T[L]!==void 0?T[L]:y("focus",L),onChange:Ee=>E(ot=>({...ot,[L]:Ee.target.value})),style:_.rateInput}),t.jsx("span",{style:_.unit,children:"/hr"})]})]},L))}),t.jsxs("div",{style:_.rateActions,children:[t.jsx("button",{onClick:Cn,style:_.rateCancel,children:"Cancel"}),t.jsx("button",{onClick:Cr,style:_.rateSave,children:"Save"})]})]}),b.focus?pt.length>0?t.jsx("div",{style:{..._.rows,marginTop:14},children:pt.map(L=>t.jsxs("div",{style:_.row,children:[t.jsx("span",{style:{..._.dot,background:L.leaf}}),t.jsx("span",{style:_.rowName,children:L.label}),t.jsx("span",{style:_.rowMeta,children:Gv(Math.round(L.minutes))}),t.jsx("span",{style:_.rowAmt,children:r(L.earned)})]},L.p))}):t.jsx("div",{style:_.muted,children:"No focus sessions yet."}):t.jsx("div",{style:_.muted,children:"Focus rewards are disabled — no reward is being calculated."})]}),t.jsxs("div",{style:{..._.card,...b.usage?{}:_.cardOff},children:[t.jsxs("div",{style:_.sectionHead,children:[t.jsxs("span",{style:{..._.cardTitle,color:Ro},children:["Usage Rewards · ",r(Ft)]}),t.jsxs("div",{style:_.sectionHeadRight,children:[b.usage&&t.jsx("button",{onClick:()=>te?on():he(!0),style:_.collapseLink,children:te?"Hide rates":"Set rates"}),t.jsx(nl,{on:b.usage,onClick:()=>sr("usage"),color:Ro})]})]}),b.usage&&te&&t.jsxs("div",{style:{marginTop:12},children:[t.jsx("div",{style:_.rateGrid,children:pp.map(L=>t.jsxs("div",{style:_.rateRow,children:[t.jsx("span",{style:_.rateName,children:L.label}),t.jsxs("div",{style:_.rateInputWrap,children:[t.jsx("span",{style:_.unitSign,children:e.symbol}),t.jsx("input",{type:"number",min:"0",step:"0.1",inputMode:"decimal",placeholder:"0",value:w[L.id]!==void 0?w[L.id]:y("usage",L.id),onChange:Ee=>j(ot=>({...ot,[L.id]:Ee.target.value})),style:_.rateInput}),t.jsx("span",{style:_.unit,children:"/min"})]})]},L.id))}),t.jsxs("div",{style:_.rateActions,children:[t.jsx("button",{onClick:on,style:_.rateCancel,children:"Cancel"}),t.jsx("button",{onClick:zr,style:_.rateSave,children:"Save"})]})]}),b.usage?H.length>0?t.jsx("div",{style:{..._.rows,marginTop:14},children:H.map(L=>t.jsxs("div",{style:_.row,children:[t.jsx("span",{style:_.rowName,children:L.label}),t.jsx("span",{style:_.rowMeta,children:ld(L.seconds/60)}),t.jsx("span",{style:_.rowAmt,children:r(L.earned)})]},L.id))}):t.jsx("div",{style:_.muted,children:k?"No usage tracked yet.":"Loading…"}):t.jsx("div",{style:_.muted,children:"Usage rewards are disabled — no reward is being calculated."}),b.usage&&je>0&&t.jsxs("div",{style:_.usagePieBlock,children:[t.jsxs("div",{style:_.usagePieTitle,children:["Most-used screens · ",Eo.find(L=>L.id===I).label]}),t.jsxs("div",{style:_.pieWrap,children:[t.jsxs("div",{style:_.pieChart,children:[t.jsx("div",{style:{..._.pieDisc,background:ir}}),t.jsxs("div",{style:_.pieHole,children:[t.jsx("span",{style:_.pieHoleVal,children:ld(je/60)}),t.jsx("span",{style:_.pieHoleLbl,children:"total time"})]})]}),t.jsx("div",{style:_.pieLegend,children:Pt.map(L=>t.jsxs("div",{style:_.pieLegRow,children:[t.jsx("span",{style:{..._.legendDot,background:L.color}}),t.jsx("span",{style:_.pieLegName,children:L.label}),t.jsxs("span",{style:_.pieLegPct,children:[Math.round(L.pct),"%"]}),t.jsx("span",{style:_.pieLegMin,children:ld(L.seconds/60)})]},L.id))})]})]})]}),t.jsxs("div",{style:{..._.card,...b.achievement?{}:_.cardOff},children:[t.jsxs("div",{style:_.sectionHead,children:[t.jsxs("span",{style:{..._.cardTitle,color:oo},children:["Achievement Rewards · ",r(mt)]}),t.jsxs("div",{style:_.sectionHeadRight,children:[b.achievement&&t.jsx("span",{style:_.collapseHint,children:"Set in Achievements"}),t.jsx(nl,{on:b.achievement,onClick:()=>sr("achievement"),color:oo})]})]}),b.achievement?yt.length>0?t.jsx("div",{style:{..._.rows,marginTop:14},children:yt.map(L=>t.jsxs("div",{style:_.row,children:[t.jsx("span",{style:{..._.dot,background:oo}}),t.jsx("span",{style:_.rowName,children:L.title}),t.jsx("span",{style:_.rowMeta,children:fp(L.date)}),t.jsx("span",{style:_.rowAmt,children:r(L.reward)})]},L.id))}):t.jsxs("div",{style:{..._.muted,marginTop:10},children:["No achievement rewards in ",Eo.find(L=>L.id===I).label.toLowerCase(),". Add a reward to a win in the Achievements section."]}):t.jsx("div",{style:{..._.muted,marginTop:10},children:"Achievement rewards are disabled — no reward is being calculated."})]}),t.jsxs("div",{style:{..._.card,...b.challenge?{}:_.cardOff},children:[t.jsxs("div",{style:_.sectionHead,children:[t.jsxs("span",{style:{..._.cardTitle,color:io},children:["Challenge Rewards · ",r(v)]}),t.jsxs("div",{style:_.sectionHeadRight,children:[b.challenge&&t.jsx("span",{style:_.collapseHint,children:"Set in Challenges"}),t.jsx(nl,{on:b.challenge,onClick:()=>sr("challenge"),color:io})]})]}),b.challenge?Sr.length>0?t.jsx("div",{style:{..._.rows,marginTop:14},children:Sr.map(L=>t.jsxs("div",{style:_.row,children:[t.jsx("span",{style:{..._.dot,background:io}}),t.jsx("span",{style:_.rowName,children:L.name}),t.jsx("span",{style:_.rowMeta,children:L.reward||"Completed"}),t.jsx("span",{style:_.rowAmt,children:r(L.reward_earned)})]},L.id))}):t.jsxs("div",{style:{..._.muted,marginTop:10},children:["No completed challenges in ",Eo.find(L=>L.id===I).label.toLowerCase(),". Finish a challenge in the Challenges section to bank its reward."]}):t.jsx("div",{style:{..._.muted,marginTop:10},children:"Challenge rewards are disabled — no reward is being calculated."})]}),de&&t.jsx("div",{style:_.modalOverlay,onClick:()=>X(!1),children:t.jsxs("div",{style:_.logModal,onClick:L=>L.stopPropagation(),children:[t.jsxs("div",{style:_.logModalHead,children:[t.jsx("span",{style:_.modalTitle,children:"Reward log"}),t.jsx("button",{onClick:()=>X(!1),style:_.logClose,title:"Close",children:t.jsx(Ae,{size:16})})]}),d.length===0?t.jsx("div",{style:{..._.muted,padding:"24px 0",textAlign:"center"},children:"No rewards taken yet."}):t.jsxs(t.Fragment,{children:[t.jsx("div",{style:_.logScroll,children:d.map(L=>t.jsxs("div",{style:_.row,children:[t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:_.logNote,children:L.note||"Reward taken"}),t.jsx("div",{style:_.rowMeta,children:fp(L.date)})]}),t.jsx("span",{style:_.rowAmt,children:r(L.amount)}),t.jsx("button",{onClick:()=>Sa(L.id),style:_.del,children:"×"})]},L.id))}),t.jsxs("div",{style:_.totalRow,children:[t.jsx("span",{children:"Total taken"}),t.jsx("span",{style:_.totalVal,children:r(rt)})]})]})]})}),le>0&&t.jsxs("div",{style:_.card,children:[t.jsx("div",{style:_.cardTitle,children:"Reward breakdown"}),t.jsxs("div",{style:_.pieWrap,children:[t.jsxs("div",{style:_.pieChart,children:[t.jsx("div",{style:{..._.pieDisc,background:`conic-gradient(${In} 0 ${Pe}%, ${Ro} ${Pe}% ${Pe+Le}%, ${oo} ${Pe+Le}% ${Pe+Le+Je}%, ${io} ${Pe+Le+Je}% 100%)`}}),t.jsxs("div",{style:_.pieHole,children:[t.jsx("span",{style:_.pieHoleVal,children:r(le)}),t.jsx("span",{style:_.pieHoleLbl,children:"total"})]})]}),t.jsxs("div",{style:_.pieLegend,children:[t.jsxs("div",{style:_.pieLegRow,children:[t.jsx("span",{style:{..._.legendDot,background:In}}),t.jsx("span",{style:_.pieLegName,children:"Focus"}),t.jsxs("span",{style:_.pieLegPct,children:[Math.round(Pe),"%"]}),t.jsx("span",{style:_.pieLegMin,children:r(nt)})]}),t.jsxs("div",{style:_.pieLegRow,children:[t.jsx("span",{style:{..._.legendDot,background:Ro}}),t.jsx("span",{style:_.pieLegName,children:"Usage"}),t.jsxs("span",{style:_.pieLegPct,children:[Math.round(Le),"%"]}),t.jsx("span",{style:_.pieLegMin,children:r(Ft)})]}),t.jsxs("div",{style:_.pieLegRow,children:[t.jsx("span",{style:{..._.legendDot,background:oo}}),t.jsx("span",{style:_.pieLegName,children:"Achievement"}),t.jsxs("span",{style:_.pieLegPct,children:[Math.round(Je),"%"]}),t.jsx("span",{style:_.pieLegMin,children:r(mt)})]}),t.jsxs("div",{style:_.pieLegRow,children:[t.jsx("span",{style:{..._.legendDot,background:io}}),t.jsx("span",{style:_.pieLegName,children:"Challenges"}),t.jsxs("span",{style:_.pieLegPct,children:[Math.round(br),"%"]}),t.jsx("span",{style:_.pieLegMin,children:r(v)})]})]})]})]}),G&&t.jsx("div",{style:_.modalOverlay,onClick:()=>ue(null),children:t.jsxs("div",{style:_.modalCard,onClick:L=>L.stopPropagation(),children:[t.jsx("div",{style:_.modalTitle,children:G==="all"?"Take all pending reward?":"Take partial reward"}),t.jsxs("div",{style:_.modalSub,children:["Pending: ",r(Qe)]}),ae?(()=>{const L=P.filter(W=>!W.fulfilled),Ee=De&&(De.cost||0)>Qe,ot=De&&!Ee;return t.jsxs(t.Fragment,{children:[L.length===0?t.jsx("div",{style:_.wishEmpty,children:"No unfulfilled wishes. Add some in the Bucket List section."}):t.jsx("div",{style:_.wishList,children:L.map((W,Z)=>{const Ie=(W.cost||0)>Qe,Ne=(De==null?void 0:De.id)===W.id;return t.jsxs("button",{onClick:()=>!Ie&&Q(W),disabled:Ie,style:{..._.wishRow,...Ne?_.wishRowOn:{},...Ie?_.wishRowOver:{}},children:[t.jsx("span",{style:_.wishRank,children:Z+1}),t.jsx("span",{style:_.wishName,children:W.wish}),t.jsxs("span",{style:_.wishCost,children:[r(W.cost),Ie?" · too costly":""]})]},W.id)})}),t.jsxs("div",{style:_.modalActions,children:[t.jsx("button",{onClick:()=>ue(null),style:_.modalCancel,children:"Cancel"}),t.jsx("button",{onClick:pi,disabled:!ot,style:{..._.modalConfirm,...ot?{}:{opacity:.5,cursor:"not-allowed"}},children:De?`Fulfil · ${r(De.cost)}`:"Pick a wish"})]})]})})():t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:_.modalInputWrap,children:[t.jsx("span",{style:_.modalSign,children:e.symbol}),t.jsx("input",{type:"number",min:"0",step:"0.01",autoFocus:!0,placeholder:Qe.toFixed(2),value:pe,onChange:L=>ze(L.target.value),style:_.modalAmt})]}),t.jsx("input",{placeholder:"What is this reward for? (required)",value:re,onChange:L=>U(L.target.value),onKeyDown:L=>L.key==="Enter"&&zn(),style:_.modalReason}),(()=>{const L=parseFloat(pe)>0&&!!re.trim();return t.jsxs("div",{style:_.modalActions,children:[t.jsx("button",{onClick:()=>ue(null),style:_.modalCancel,children:"Cancel"}),t.jsxs("button",{onClick:zn,disabled:!L,style:{..._.modalConfirm,...L?{}:{opacity:.5,cursor:"not-allowed"}},children:["Confirm · ",r(Math.min(parseFloat(pe)||0,Qe))]})]})})()]})]})}),t.jsx("div",{style:_.note,children:"Set rates only affect time from today onward — past time keeps the rate it was earned at."})]})}function nl({on:e,onClick:r,color:n}){return t.jsx("button",{onClick:r,title:e?"Disable — stop calculating this reward":"Enable this reward",style:{..._.toggle,background:e?n:"var(--border)",justifyContent:e?"flex-end":"flex-start"},children:t.jsx("span",{style:_.toggleKnob})})}function Kv({items:e,reward:r}){const n=Math.max(1,...e.map(o=>o.value));return t.jsx("div",{style:_.tbWrap,children:e.map((o,i)=>t.jsxs("div",{style:_.tbRow,children:[t.jsx("div",{style:_.tbLbl,children:o.label}),t.jsx("div",{style:_.tbTrack,children:t.jsx("div",{style:{..._.tbBar,width:`${o.value/n*100}%`,background:o.color}})}),t.jsx("div",{style:_.tbVal,children:r(o.value)})]},i))})}const _={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},hero:{position:"relative",background:"linear-gradient(135deg,var(--accent-strong),var(--accent-2))",borderRadius:16,padding:"22px 24px",color:"#fff",marginBottom:14,textAlign:"center"},logIcon:{position:"absolute",top:12,right:12,border:"1px solid rgba(255,255,255,0.5)",background:"rgba(255,255,255,0.12)",color:"#fff",width:32,height:32,borderRadius:9,cursor:"pointer",display:"grid",placeItems:"center"},logClose:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:28,height:28,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},logNote:{fontSize:13.5,fontWeight:600,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modalCard:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"22px 22px 18px",width:360,maxWidth:"100%",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)"},logModal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"18px 18px 14px",width:440,maxWidth:"100%",maxHeight:"82vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",boxSizing:"border-box"},logModalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8,flexShrink:0},logScroll:{overflowY:"auto",display:"flex",flexDirection:"column",gap:2,paddingRight:2,minHeight:0},modalTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:4},modalSub:{fontSize:12.5,color:"var(--text-3)",fontWeight:600,marginBottom:14},modalInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:10,padding:"8px 12px",background:"var(--surface-2)",marginBottom:8},modalSign:{fontSize:16,color:"var(--text-2)",fontWeight:700},modalAmt:{border:"none",background:"none",outline:"none",flex:1,fontSize:18,fontWeight:700,fontFamily:"inherit",color:"var(--text)"},modalReason:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:14},modalActions:{display:"flex",gap:8},modalCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalConfirm:{flex:1,border:"none",background:"#C9A227",color:"#fff",padding:"10px 14px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},bucketToggleRow:{display:"inline-flex",alignItems:"center",gap:8,margin:"12px auto 0",border:"none",background:"rgba(255,255,255,0.12)",color:"#fff",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},miniToggle:{display:"flex",alignItems:"center",width:32,height:18,borderRadius:10,padding:2,flexShrink:0,transition:"background 0.15s"},miniKnob:{width:14,height:14,borderRadius:"50%",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},wishList:{display:"flex",flexDirection:"column",gap:6,maxHeight:300,overflowY:"auto",margin:"4px 0 4px"},wishRow:{display:"flex",alignItems:"center",gap:10,width:"100%",textAlign:"left",border:"1px solid var(--border)",background:"var(--surface)",borderRadius:10,padding:"10px 12px",cursor:"pointer",fontFamily:"inherit"},wishRowOn:{borderColor:"var(--accent-strong)",background:"var(--hover)",boxShadow:"0 0 0 1px var(--accent-strong)"},wishRowOver:{opacity:.5,cursor:"not-allowed"},wishRank:{fontSize:12,fontWeight:800,color:"var(--text-3)",fontFamily:"'Fraunces',Georgia,serif",flexShrink:0},wishName:{flex:1,fontSize:13.5,fontWeight:700,color:"var(--text)",minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},wishCost:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--accent-strong)",flexShrink:0},wishEmpty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"20px 0"},heroLabel:{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",opacity:.85},heroVal:{fontSize:44,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,lineHeight:1.05},heroSub:{fontSize:12.5,opacity:.9,marginTop:6},heroBtns:{display:"flex",gap:10,marginTop:16,justifyContent:"center"},heroBtnSolid:{border:"none",background:"#fff",color:"var(--accent-strong)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},heroBtnGhost:{border:"1px solid rgba(255,255,255,0.6)",background:"transparent",color:"#fff",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},btnDisabled:{opacity:.45,cursor:"not-allowed"},statRow:{display:"flex",gap:10,marginBottom:14},statCard:{flex:1,background:"var(--surface)",borderRadius:12,padding:"12px 14px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},threeDayTitle:{fontSize:13,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:84,fontSize:11.5,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap"},tbTrack:{flex:1,height:14,background:"var(--surface-2)",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:76,fontSize:11.5,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"},statVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},card:{background:"var(--surface)",borderRadius:16,padding:"18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:10,flexWrap:"wrap"},periodTotal:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text-2)"},periodRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},periodChip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},periodChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},collapseHint:{fontSize:12,fontWeight:700,color:"var(--accent)"},sectionHead:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,flexWrap:"wrap"},sectionHeadRight:{display:"flex",alignItems:"center",gap:12},collapseLink:{border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"inherit",fontSize:12,fontWeight:700,color:"var(--accent)"},cardOff:{opacity:.62},toggle:{border:"none",cursor:"pointer",width:40,height:22,borderRadius:11,padding:2,display:"flex",alignItems:"center",transition:"background 0.15s",flexShrink:0},toggleKnob:{width:18,height:18,borderRadius:"50%",background:"#fff",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"12px 0"},splitTrack:{display:"flex",height:16,borderRadius:8,overflow:"hidden",marginTop:12,marginBottom:12,border:"1px solid var(--border)"},legendRow:{display:"flex",gap:16,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:600,color:"var(--text-2)"},legendDot:{width:10,height:10,borderRadius:3,flexShrink:0},usagePieBlock:{marginTop:16,paddingTop:14,borderTop:"1px solid var(--border)"},usagePieTitle:{fontSize:12.5,fontWeight:700,color:"var(--text-2)",marginBottom:6},pieWrap:{display:"flex",alignItems:"center",gap:20,flexWrap:"wrap",marginTop:6},pieChart:{position:"relative",width:130,height:130,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:78,height:78,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:10},pieLegRow:{display:"flex",alignItems:"center",gap:8},pieLegName:{flex:1,fontSize:13.5,fontWeight:600},pieLegPct:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",width:46,textAlign:"right"},pieLegMin:{fontSize:12,color:"var(--text-3)",fontWeight:600,minWidth:64,textAlign:"right"},rows:{display:"flex",flexDirection:"column",gap:2},row:{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:"1px solid var(--border)"},dot:{width:10,height:10,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:13.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},rowMeta:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,flexShrink:0},rowAmt:{fontSize:13.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",flexShrink:0,minWidth:64,textAlign:"right"},del:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",fontSize:16,lineHeight:1,padding:"0 2px",flexShrink:0},totalRow:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:10,marginTop:4,fontSize:14,fontWeight:700},totalVal:{fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},rateActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:14},rateCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},rateSave:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},rateGrid:{display:"flex",flexDirection:"column",gap:10},rateRow:{display:"flex",alignItems:"center",gap:8},rateName:{flex:1,fontSize:14,fontWeight:600},rateInputWrap:{display:"flex",alignItems:"center",gap:3,border:"1px solid var(--border)",borderRadius:9,padding:"4px 10px",background:"var(--surface-2)"},unitSign:{fontSize:14,color:"var(--text-2)",fontWeight:600},rateInput:{border:"none",background:"none",outline:"none",width:64,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},unit:{fontSize:12,color:"var(--text-3)",fontWeight:600},note:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",fontStyle:"italic",marginTop:4}};function Qv(){return t.jsx("div",{style:Bn.page,children:t.jsxs("div",{style:Bn.card,children:[t.jsxs("div",{style:Bn.brand,children:[t.jsx("div",{style:Bn.logo,children:"B"}),t.jsx("span",{style:Bn.brandName,children:"Anvil"})]}),t.jsx("h1",{style:Bn.title,children:"Welcome to Anvil"}),t.jsx("p",{style:Bn.sub,children:"Sign in with Google to continue."}),t.jsxs("button",{onClick:()=>F.signInWithGoogle(),style:Bn.googleBtn,children:[t.jsx(qv,{}),"Sign in with Google"]})]})})}function qv(){return t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[t.jsx("path",{fill:"#4285F4",d:"M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84c-.21 1.13-.85 2.09-1.81 2.73v2.27h2.92c1.71-1.57 2.69-3.88 2.69-6.64z"}),t.jsx("path",{fill:"#34A853",d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.27c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.71H.96v2.34C2.44 15.98 5.48 18 9 18z"}),t.jsx("path",{fill:"#FBBC05",d:"M3.97 10.7c-.18-.54-.28-1.11-.28-1.7s.1-1.16.28-1.7V4.96H.96A8.997 8.997 0 0 0 0 9c0 1.45.35 2.83.96 4.04l3.01-2.34z"}),t.jsx("path",{fill:"#EA4335",d:"M9 3.58c1.32 0 2.51.45 3.44 1.35l2.59-2.59C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l3.01 2.34C4.68 5.16 6.66 3.58 9 3.58z"})]})}const Bn={page:{minHeight:"100vh",display:"grid",placeItems:"center",background:"var(--bg)",fontFamily:"'Inter',system-ui,sans-serif",padding:20},card:{width:"100%",maxWidth:380,background:"var(--surface)",borderRadius:16,padding:"32px 28px",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",display:"flex",flexDirection:"column",textAlign:"center"},brand:{display:"flex",alignItems:"center",justifyContent:"center",gap:9,marginBottom:20},logo:{width:32,height:32,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},brandName:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},title:{fontSize:22,fontWeight:700,margin:"0 0 4px",fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},sub:{fontSize:13.5,color:"var(--text-3)",margin:"0 0 24px"},googleBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,border:"1px solid var(--border)",background:"#fff",color:"#26241F",padding:"12px",borderRadius:10,fontSize:14.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},vc=1,Wh="anvil_month_start_day";function jc(){try{return Number(localStorage.getItem(Wh))||vc}catch{return vc}}function yp(e){const r=Math.min(28,Math.max(1,Number(e)||vc));try{localStorage.setItem(Wh,String(r))}catch{}return window.dispatchEvent(new CustomEvent("anvil-month-start",{detail:r})),r}function Mh(){const[e,r]=c.useState(jc());return c.useEffect(()=>{const n=o=>r(o.detail||jc());return window.addEventListener("anvil-month-start",n),()=>window.removeEventListener("anvil-month-start",n)},[]),e}const vp=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;function Ir(e,r,n=0){const o=e.getFullYear(),i=e.getMonth(),l=e.getDate()>=r?i:i-1,a=new Date(o,l+n,r),d=new Date(o,l+n+1,r-1);return[vp(a),vp(d)]}function Xv(e=600){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const jp=["Salary","Stocks","Business","Interest","Rent","Gift","Other"],Zv=["Bills","EMI","Rent","Food","Shopping","Transport","Health","Entertainment","Education","Other"],kp=["Stocks","Mutual Fund","SIP","Fixed Deposit","Gold","Real Estate","PPF/EPF","Crypto","Other"],Jv={Salary:"#4C9A6B",Stocks:"#3A7CA5",Business:"#C9A227",Interest:"#8268B0",Gift:"#C2773B",Bills:"#C2536B",EMI:"#A23E57",Food:"#E08E45",Shopping:"#8268B0",Transport:"#3A7CA5",Health:"#4C9A6B",Entertainment:"#C9A227",Education:"#5B7C99",Rent:"#5B8C5A",Other:"#9A968C"},Fg=e=>Jv[e]||"#9A968C",e1={Stocks:"#2F6B4F","Mutual Fund":"#3E9E6B",SIP:"#4FAE7E","Fixed Deposit":"#6BBE92",Gold:"#8ECDA8","Real Estate":"#1F5C3F","PPF/EPF":"#5BAE83",Crypto:"#7FC79E",Other:"#9AD4B3"},t1=e=>e1[e]||"#4C9A6B",pn="#3E9E6B",Br="#D1556E",Zr="#3A7CA5",ad="#8268B0",Lh=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Wo=Lh(new Date),r1=[{id:"month",label:"This month"},{id:"last",label:"Last month"},{id:"year",label:"This year"},{id:"all",label:"All time"}];function n1(e,r){const n=new Date;return e==="month"?Ir(n,r):e==="last"?Ir(n,r,-1):e==="year"?[Lh(new Date(n.getFullYear(),0,1)),Wo]:["0000-01-01","9999-12-31"]}function o1(){const e=Jn(),[r,n]=c.useState("overview"),[o,i]=c.useState([]),[s,l]=c.useState([]),[a,d]=c.useState([]),[g,m]=c.useState([]),[f,h]=c.useState([]),[B,R]=c.useState(!1),z=c.useCallback(()=>Promise.all([F.getTxns(),F.getExpenses(),F.getInvestments()]).then(([T,E,w])=>(i(T),l(E.categories),d(E.logs),m(w),F.getFixedItems())).then(h).then(()=>R(!0)).catch(()=>R(!0)),[]);c.useEffect(()=>{z()},[z]);const S=c.useMemo(()=>{const T={};return s.forEach(E=>T[E.id]=E),T},[s]),p=c.useMemo(()=>a.map(T=>{var E;return{id:`exp-${T.id}`,rawId:T.id,source:"expense",kind:"expense",category:((E=S[T.category_id])==null?void 0:E.name)||"Other",amount:T.amount,note:T.note,date:T.date}}),[a,S]),b=c.useMemo(()=>o.filter(T=>T.kind==="expense").map(T=>({...T,source:"legacy"})),[o]),u=c.useMemo(()=>o.filter(T=>T.kind==="income").map(T=>({...T,source:"legacy"})),[o]),k=c.useMemo(()=>[...u,...b,...p].sort((T,E)=>E.date.localeCompare(T.date)),[u,b,p]),x=T=>js(T,e.code);return t.jsxs("div",{style:C.page,children:[t.jsxs("div",{style:C.head,children:[t.jsx("div",{style:C.eyebrow,children:"Anvil · Wallet"}),t.jsx("h1",{style:C.h1,children:"Wallet"}),t.jsx("div",{style:C.subhead,children:"Your money — what comes in, what goes out, and where it's headed."})]}),t.jsx("div",{style:C.tabs,children:[["overview","Overview",ah],["money","Money",ka],["calc","Calculators",Ey]].map(([T,E,w])=>t.jsxs("button",{onClick:()=>n(T),style:{...C.tab,...r===T?C.tabOn:{}},children:[t.jsx(w,{size:15})," ",E]},T))}),r==="overview"&&t.jsx(i1,{txns:k,investments:g,loaded:B,money:x,cur:e}),r==="money"&&t.jsx(a1,{txns:k,expCats:s,investments:g,fixedItems:f,reload:z,money:x,cur:e}),r==="calc"&&t.jsx(d1,{money:x,cur:e})]})}function i1({txns:e,investments:r,loaded:n,money:o,cur:i}){const s=Mh(),l=Xv(),[a,d]=c.useState("month"),[g,m]=n1(a,s),f=c.useMemo(()=>e.filter(q=>q.date>=g&&q.date<=m),[e,g,m]),h=f.filter(q=>q.kind==="income"),B=f.filter(q=>q.kind==="expense"),R=h.reduce((q,te)=>q+te.amount,0),z=B.reduce((q,te)=>q+te.amount,0),S=c.useMemo(()=>r.filter(q=>q.date>=g&&q.date<=m),[r,g,m]),p=S.reduce((q,te)=>q+te.invested,0),b=z+p,u=R-b,k=r.reduce((q,te)=>q+te.invested,0),x=r.reduce((q,te)=>q+te.current_value,0),T=x-k,E=q=>{const te={};return q.forEach(he=>{te[he.category]=(te[he.category]||0)+he.amount}),Object.entries(te).map(([he,G])=>({category:he,amount:G,color:Fg(he)})).sort((he,G)=>G.amount-he.amount)},w=E(B),j=c.useMemo(()=>{const q={};return S.forEach(te=>{q[te.kind]=(q[te.kind]||0)+te.invested}),Object.entries(q).map(([te,he])=>({category:te,amount:he,color:t1(te)})).sort((te,he)=>he.amount-te.amount)},[S]),Y=[...w,...j];return t.jsxs(t.Fragment,{children:[t.jsx("div",{style:C.presetRow,children:r1.map(q=>t.jsx("button",{onClick:()=>d(q.id),style:{...C.preset,...a===q.id?C.presetOn:{}},children:q.label},q.id))}),t.jsxs("div",{style:{...C.sumGrid,gridTemplateColumns:l?"repeat(2,1fr)":"repeat(4,1fr)"},children:[t.jsx(ol,{icon:t.jsx(ky,{size:16}),label:"Income",value:o(R),color:pn}),t.jsx(ol,{icon:t.jsx(lh,{size:16}),label:"Expenses",value:o(z),color:Br}),t.jsx(ol,{icon:t.jsx(Vi,{size:16}),label:"Invested",value:o(p),color:Zr}),t.jsx(ol,{icon:u>=0?t.jsx(fh,{size:16}):t.jsx(Yn,{size:16}),label:"Remaining",value:o(u),color:u>=0?pn:Br})]}),p>0&&t.jsxs("div",{style:C.investNote,children:[t.jsx(Vi,{size:13,color:Zr})," ",o(p)," invested this period — counted as outgoing and deducted from what remains."]}),r.length>0&&t.jsxs("div",{style:C.card,children:[t.jsxs("div",{style:C.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(Vi,{size:18,color:Zr}),t.jsxs("div",{children:[t.jsx("div",{style:C.cardTitle,children:"Assets & investments"}),t.jsx("div",{style:C.cardSub,children:"Across all your holdings, all time"})]})]}),t.jsx("div",{style:{...C.cardTotal,color:Zr},children:o(x)})]}),t.jsxs("div",{style:C.healthStats,children:[t.jsxs("div",{style:C.healthStat,children:[t.jsx("span",{style:C.healthStatV,children:o(k)}),t.jsx("span",{style:C.healthStatL,children:"Total invested"})]}),t.jsxs("div",{style:C.healthStat,children:[t.jsxs("span",{style:{...C.healthStatV,color:T>=0?pn:Br},children:[T>=0?"+":"",o(T)]}),t.jsx("span",{style:C.healthStatL,children:"Unrealized gain"})]})]})]}),n?f.length===0&&S.length===0?t.jsx("div",{style:C.card,children:t.jsxs("div",{style:C.muted,children:["No transactions in this period. Add some under the ",t.jsx("b",{children:"Money"})," tab."]})}):t.jsxs(t.Fragment,{children:[t.jsx(l1,{totalIn:R,totalOut:b}),t.jsxs("div",{style:C.twoCol,children:[t.jsx(wp,{title:"Incoming",subtitle:"Where your money comes from",total:R,data:E(h),accent:pn,cur:i}),t.jsx(wp,{title:"Outgoing",subtitle:"Spending + money set aside in investments",total:b,data:Y,accent:Br,cur:i})]})]}):t.jsx("div",{style:C.muted,children:"Loading…"})]})}function ol({icon:e,wideIcon:r,label:n,value:o,color:i,style:s,wide:l}){return l?t.jsxs("div",{style:{...C.sumCard,...C.sumCardWide,...s},children:[t.jsx("div",{style:{...C.sumIconWide,color:i,background:i+"1A"},children:r||e}),t.jsxs("div",{style:C.sumWideText,children:[t.jsx("div",{style:C.sumLabel,children:n}),t.jsx("div",{style:{...C.sumVal,color:i,marginTop:0},children:o})]})]}):t.jsxs("div",{style:{...C.sumCard,...s},children:[t.jsx("div",{style:{...C.sumIcon,color:i,background:i+"1A"},children:e}),t.jsx("div",{style:C.sumLabel,children:n}),t.jsx("div",{style:{...C.sumVal,color:i},children:o})]})}function wp({title:e,subtitle:r,total:n,data:o,accent:i,cur:s}){const[l,a]=c.useState(null);let d=0;const g=o.map(h=>{const B=n>0?d/n*100:0;d+=h.amount;const R=n>0?d/n*100:0;return{...h,start:B,end:R,color:h.color||Fg(h.category),pct:n>0?h.amount/n*100:0}}),m=l!=null?g[l]:null,f=g.length===1;return t.jsxs("div",{style:C.card,children:[t.jsxs("div",{style:C.cardTitleRow,children:[t.jsxs("div",{children:[t.jsx("div",{style:{...C.cardTitle,color:i},children:e}),t.jsx("div",{style:C.cardSub,children:r})]}),t.jsx("div",{style:{...C.cardTotal,color:i},children:js(n,s.code)})]}),o.length===0?t.jsx("div",{style:C.muted,children:"Nothing logged."}):t.jsxs("div",{style:C.pieWrap,children:[t.jsxs("div",{style:C.pieChart,onMouseLeave:()=>a(null),children:[t.jsx("svg",{viewBox:"0 0 120 120",style:C.pieSvg,children:g.map((h,B)=>t.jsx("path",{d:s1(h.start,h.end,B===l,f),fill:h.color,onMouseEnter:()=>a(B),style:{cursor:"pointer",transition:"transform 0.15s, filter 0.15s",filter:B===l?"brightness(1.08)":"none"}},h.category))}),t.jsx("div",{style:{...C.pieHole,...m?{transform:"translate(-50%,-50%) scale(1.06)",boxShadow:`0 0 0 4px ${m.color}33`}:{}},children:m?t.jsxs(t.Fragment,{children:[t.jsx("span",{style:{...C.pieHoleVal,color:m.color,fontSize:13},children:Vu(m.amount,s.code)}),t.jsxs("span",{style:C.pieHoleLbl,children:[Math.round(m.pct),"% · ",m.category]})]}):t.jsxs(t.Fragment,{children:[t.jsx("span",{style:C.pieHoleVal,children:Vu(n,s.code)}),t.jsx("span",{style:C.pieHoleLbl,children:"total"})]})})]}),t.jsx("div",{style:C.pieLegend,children:g.map((h,B)=>t.jsxs("div",{style:{...C.legendRow,...B===l?C.legendRowOn:{}},onMouseEnter:()=>a(B),onMouseLeave:()=>a(null),children:[t.jsx("span",{style:{...C.dot,background:h.color}}),t.jsx("span",{style:C.legendName,children:h.category}),t.jsxs("span",{style:C.legendPct,children:[Math.round(h.pct),"%"]}),t.jsx("span",{style:C.legendAmt,children:js(h.amount,s.code)})]},h.category))})]})]})}function s1(e,r,n,o){const d=n?6:0,g=(T,E,w=0,j=0)=>{const Y=T/100*2*Math.PI-Math.PI/2;return[60+w+E*Math.cos(Y),60+j+E*Math.sin(Y)]},m=(e+r)/2/100*2*Math.PI-Math.PI/2,f=o?0:Math.cos(m)*d,h=o?0:Math.sin(m)*d;if(r-e>=99.999)return`M ${60+f} ${60+h-58} A 58 58 0 1 1 ${60+f-.01} ${60+h-58} L ${60+f-.01} ${60+h-35} A 35 35 0 1 0 ${60+f} ${60+h-35} Z`;const[B,R]=g(e,58,f,h),[z,S]=g(r,58,f,h),[p,b]=g(r,35,f,h),[u,k]=g(e,35,f,h),x=r-e>50?1:0;return`M ${B} ${R} A 58 58 0 ${x} 1 ${z} ${S} L ${p} ${b} A 35 35 0 ${x} 0 ${u} ${k} Z`}function l1({totalIn:e,totalOut:r}){const n=e-r,o=e>0?n/e:0,i=e===0?0:Math.max(0,Math.min(100,Math.round(50+o*100)));let s,l,a;e===0?(s="No income logged",l="#9A968C",a="Add your income to see your financial health."):o>=.3?(s="Excellent",l="#3E9E6B",a="You're saving 30%+ of income — keep investing the surplus."):o>=.2?(s="Healthy",l="#4C9A6B",a="Solid savings rate. Consider automating a SIP with the surplus."):o>=.1?(s="Okay",l="#C9A227",a="Decent, but aim for 20%+. Trim your biggest expense category."):o>=0?(s="Tight",l="#C2773B",a="You're saving very little. Review recurring bills and EMIs."):(s="Overspending",l="#D1556E",a="You're spending more than you earn. Cut back to avoid debt.");const d=e>0?Math.min(100,Math.round(r/e*100)):0;return t.jsxs("div",{style:C.card,children:[t.jsxs("div",{style:C.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(Qy,{size:18,color:l}),t.jsxs("div",{children:[t.jsx("div",{style:C.cardTitle,children:"Financial health"}),t.jsx("div",{style:C.cardSub,children:"Based on your savings rate this period"})]})]}),t.jsxs("div",{style:{textAlign:"right"},children:[t.jsx("div",{style:{...C.healthScore,color:l},children:e===0?"—":i}),t.jsx("div",{style:{...C.healthStatus,color:l},children:s})]})]}),t.jsx("div",{style:C.gaugeTrack,children:t.jsx("div",{style:{...C.gaugeFill,width:`${e===0?0:i}%`,background:l}})}),t.jsxs("div",{style:C.healthStats,children:[t.jsxs("div",{style:C.healthStat,children:[t.jsxs("span",{style:C.healthStatV,children:[e>0?Math.round(o*100):0,"%"]}),t.jsx("span",{style:C.healthStatL,children:"Savings rate"})]}),t.jsxs("div",{style:C.healthStat,children:[t.jsxs("span",{style:C.healthStatV,children:[d,"%"]}),t.jsx("span",{style:C.healthStatL,children:"of income spent"})]})]}),t.jsx("div",{style:{...C.tip,borderColor:l+"55",background:l+"12",color:l},children:a})]})}function a1({txns:e,expCats:r,investments:n,fixedItems:o,reload:i,money:s,cur:l}){const[a,d]=c.useState(""),[g,m]=c.useState("Salary"),[f,h]=c.useState(Wo),[B,R]=c.useState(""),[z,S]=c.useState(null),[p,b]=c.useState(null),[u,k]=c.useState(null),{deleteItem:x,toasts:T,handleUndo:E,handleDismiss:w}=ur(F.deleteTxn,F.restoreTxn,i),{deleteItem:j,toasts:Y,handleUndo:q,handleDismiss:te}=ur(F.deleteExpenseLog,F.restoreExpenseLog,i),{deleteItem:he,toasts:G,handleUndo:ue,handleDismiss:pe}=ur(F.deleteInvestment,F.restoreInvestment,i),ze=()=>{var y;return k({id:null,kind:"expense",name:"",amount:"",category_id:((y=r[0])==null?void 0:y.id)||"",invest_kind:"Stocks",note:""})},re=y=>{var ne;return k({id:y.id,kind:y.kind,name:y.name,amount:String(y.amount),category_id:y.category_id||((ne=r[0])==null?void 0:ne.id)||"",invest_kind:y.invest_kind||"Stocks",note:y.note||""})},U=async()=>{const y=u.name.trim(),ne=parseFloat(u.amount)||0;if(!y||ne<=0)return;const D={kind:u.kind,name:y,amount:ne,note:u.note.trim(),...u.kind==="expense"?{category_id:Number(u.category_id)}:{invest_kind:u.invest_kind}};u.id?await F.updateFixedItem(u.id,D):await F.createFixedItem(D),k(null),i()},de=async y=>{window.confirm(`Stop "${y.name}" from auto-posting each month? Past entries it already created will stay.`)&&(await F.deleteFixedItem(y.id),i())},X=async y=>{await F.updateFixedItem(y.id,{active:!y.active}),i()},I=()=>b({id:null,name:"",kind:"Stocks",invested:"",current_value:"",date:Wo,note:""}),A=y=>b({id:y.id,name:y.name,kind:y.kind,invested:String(y.invested),current_value:String(y.current_value),date:y.date,note:y.note||""}),P=async()=>{const y=p.name.trim(),ne=parseFloat(p.invested)||0,D=parseFloat(p.current_value)||0;if(!y)return;const ge={name:y,kind:p.kind,invested:ne,current_value:D,note:p.note.trim(),date:p.date};p.id?await F.updateInvestment(p.id,ge):await F.createInvestment(ge),b(null),i()},$=n.reduce((y,ne)=>y+ne.invested,0),ae=n.reduce((y,ne)=>y+ne.current_value,0),ce=ae-$,De=async()=>{const y=parseFloat(a);!y||y<=0||(await F.createTxn({kind:"income",category:g,amount:y,note:B.trim(),date:f}),d(""),R(""),i())},Q=y=>S({id:y.id,rawId:y.rawId,source:y.source,kind:y.kind,amount:String(y.amount),category:y.category,date:y.date,note:y.note||""}),ie=(z==null?void 0:z.source)==="expense"?r.map(y=>y.name):(z==null?void 0:z.kind)==="income"?jp:Zv,O=async()=>{const y=parseFloat(z.amount);if(!(!y||y<=0)){if(z.source==="expense"){const ne=r.find(D=>D.name===z.category);await F.updateExpenseLog(z.rawId,{amount:y,note:z.note.trim(),date:z.date,...ne?{category_id:ne.id}:{}})}else await F.updateTxn(z.id,{kind:z.kind,category:z.category,amount:y,note:z.note.trim(),date:z.date});S(null),i()}},ee=y=>{y.source==="expense"?j(y.rawId,y.category):x(y.id,y.category)},fe=c.useMemo(()=>{const y={};return e.forEach(ne=>{(y[ne.date]=y[ne.date]||[]).push(ne)}),Object.entries(y).sort((ne,D)=>D[0].localeCompare(ne[0]))},[e]),M=y=>new Date(y+"T00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:C.card,children:[t.jsx("div",{style:C.cardTitle,children:"Add income"}),t.jsxs("div",{style:C.cardSub,children:["Expenses are added from the ",t.jsx("b",{children:"Expenses"})," section and show up here automatically."]}),t.jsxs("div",{style:C.formGrid,children:[t.jsx("input",{type:"number",inputMode:"decimal",placeholder:"Amount",value:a,onChange:y=>d(y.target.value),onKeyDown:y=>y.key==="Enter"&&De(),style:C.input,autoFocus:!0}),t.jsx("select",{value:g,onChange:y=>m(y.target.value),style:C.input,children:jp.map(y=>t.jsx("option",{children:y},y))}),t.jsx("input",{type:"date",value:f,max:Wo,onChange:y=>h(y.target.value),style:C.input})]}),t.jsx("input",{placeholder:"Note (optional)",value:B,onChange:y=>R(y.target.value),onKeyDown:y=>y.key==="Enter"&&De(),style:{...C.input,marginTop:8}}),t.jsxs("button",{onClick:De,style:{...C.addBtn,background:pn},children:[t.jsx(st,{size:15})," Add income"]})]}),t.jsxs("div",{style:C.card,children:[t.jsxs("div",{style:C.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(b0,{size:18,color:ad}),t.jsxs("div",{children:[t.jsx("div",{style:C.cardTitle,children:"Fixed items"}),t.jsx("div",{style:C.cardSub,children:"EMI, rent, SIP… auto-posted at the start of every billing cycle"})]})]}),t.jsxs("button",{onClick:ze,style:{...C.invAddBtn,background:ad},children:[t.jsx(st,{size:14})," Add"]})]}),o.length===0?t.jsx("div",{style:C.muted,children:"No fixed items yet — add an EMI or rent to auto-post it every cycle."}):t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:o.map(y=>{var D;const ne=y.kind==="expense"?((D=r.find(ge=>ge.id===y.category_id))==null?void 0:D.name)||"Other":y.invest_kind||"Other";return t.jsxs("div",{style:{...C.invRow,opacity:y.active?1:.5},children:[t.jsx("span",{style:{...C.txnDot,background:y.kind==="expense"?Br:Zr}}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:C.txnCat,children:y.name}),t.jsxs("div",{style:C.txnNote,children:[y.kind==="expense"?"Fixed expense":"Fixed investment"," · ",ne]})]}),t.jsxs("span",{style:{...C.txnAmt,color:y.kind==="expense"?Br:Zr},children:[s(y.amount),"/mo"]}),t.jsx("button",{onClick:()=>X(y),style:C.delBtn,title:y.active?"Pause":"Resume",children:y.active?t.jsx(hh,{size:13}):t.jsx(Xl,{size:13})}),t.jsx("button",{onClick:()=>re(y),style:C.delBtn,children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:()=>de(y),style:C.delBtn,children:t.jsx(Ae,{size:14})})]},y.id)})})]}),t.jsxs("div",{style:C.card,children:[t.jsxs("div",{style:C.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(Vi,{size:18,color:Zr}),t.jsxs("div",{children:[t.jsx("div",{style:C.cardTitle,children:"Investments"}),t.jsx("div",{style:C.cardSub,children:"Asset generation — what you've put in vs. what it's worth now"})]})]}),t.jsxs("button",{onClick:I,style:C.invAddBtn,children:[t.jsx(st,{size:14})," Add"]})]}),n.length===0?t.jsx("div",{style:C.muted,children:"No investments tracked yet."}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:C.healthStats,children:[t.jsxs("div",{style:C.healthStat,children:[t.jsx("span",{style:C.healthStatV,children:s($)}),t.jsx("span",{style:C.healthStatL,children:"Invested"})]}),t.jsxs("div",{style:C.healthStat,children:[t.jsx("span",{style:C.healthStatV,children:s(ae)}),t.jsx("span",{style:C.healthStatL,children:"Current value"})]}),t.jsxs("div",{style:C.healthStat,children:[t.jsxs("span",{style:{...C.healthStatV,color:ce>=0?pn:Br},children:[ce>=0?"+":"",s(ce)]}),t.jsx("span",{style:C.healthStatL,children:"Gain / loss"})]})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginTop:4},children:n.map(y=>{const ne=y.current_value-y.invested,D=y.invested>0?ne/y.invested*100:0;return t.jsxs("div",{style:C.invRow,children:[t.jsx("span",{style:{...C.txnDot,background:Zr}}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:C.txnCat,children:y.name}),t.jsxs("div",{style:C.txnNote,children:[y.kind," · invested ",s(y.invested)]})]}),t.jsxs("div",{style:{textAlign:"right"},children:[t.jsx("div",{style:C.txnAmt,children:s(y.current_value)}),t.jsxs("div",{style:{...C.invPct,color:ne>=0?pn:Br},children:[ne>=0?"+":"",Math.round(D),"%"]})]}),t.jsx("button",{onClick:()=>A(y),style:C.delBtn,children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:()=>he(y.id,y.name),style:C.delBtn,children:t.jsx(Ae,{size:14})})]},y.id)})})]})]}),t.jsxs("div",{style:C.card,children:[t.jsx("div",{style:C.cardTitle,children:"History"}),fe.length===0?t.jsx("div",{style:C.muted,children:"No transactions yet."}):t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:fe.map(([y,ne])=>t.jsxs("div",{children:[t.jsx("div",{style:C.dateHead,children:M(y)}),ne.map(D=>(z==null?void 0:z.id)===D.id?t.jsxs("div",{style:C.editTxn,children:[t.jsxs("div",{style:C.formGrid,children:[t.jsx("input",{type:"number",inputMode:"decimal",value:z.amount,onChange:ge=>S({...z,amount:ge.target.value}),style:C.input}),t.jsx("select",{value:z.category,onChange:ge=>S({...z,category:ge.target.value}),style:C.input,children:ie.map(ge=>t.jsx("option",{children:ge},ge))}),t.jsx("input",{type:"date",value:z.date,max:Wo,onChange:ge=>S({...z,date:ge.target.value}),style:C.input})]}),t.jsx("input",{placeholder:"Note (optional)",value:z.note,onChange:ge=>S({...z,note:ge.target.value}),onKeyDown:ge=>ge.key==="Enter"&&O(),style:{...C.input,marginTop:8}}),t.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[t.jsxs("button",{onClick:()=>S(null),style:C.editCancel,children:[t.jsx(Ae,{size:14})," Cancel"]}),t.jsxs("button",{onClick:O,style:{...C.addBtn,marginTop:0,flex:1,background:z.kind==="income"?pn:Br},children:[t.jsx(He,{size:15})," Save"]})]})]},D.id):t.jsxs("div",{style:C.txnRow,children:[t.jsx("span",{style:{...C.txnDot,background:Fg(D.category)}}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:C.txnCat,children:D.category}),D.note&&t.jsx("div",{style:C.txnNote,children:D.note})]}),t.jsxs("span",{style:{...C.txnAmt,color:D.kind==="income"?pn:Br},children:[D.kind==="income"?"+":"−",s(D.amount)]}),t.jsx("button",{onClick:()=>Q(D),style:C.delBtn,children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:()=>ee(D),style:C.delBtn,children:t.jsx(Ae,{size:14})})]},D.id))]},y))})]}),p&&t.jsx("div",{style:C.overlay,onClick:()=>b(null),children:t.jsxs("div",{style:C.modal,onClick:y=>y.stopPropagation(),children:[t.jsxs("div",{style:C.modalHead,children:[t.jsx("span",{style:C.modalTitle,children:p.id?"Edit investment":"New investment"}),t.jsx("button",{onClick:()=>b(null),style:C.iconBtnPlain,children:t.jsx(Ae,{size:16})})]}),t.jsx("label",{style:C.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:p.name,onChange:y=>b(ne=>({...ne,name:y.target.value})),placeholder:"e.g. Nifty Index Fund, HDFC FD…",style:C.input}),t.jsx("label",{style:C.label,children:"Type"}),t.jsx("select",{value:p.kind,onChange:y=>b(ne=>({...ne,kind:y.target.value})),style:C.input,children:kp.map(y=>t.jsx("option",{children:y},y))}),t.jsxs("div",{style:C.formGrid,children:[t.jsxs("div",{children:[t.jsx("label",{style:C.label,children:"Invested"}),t.jsx("input",{type:"number",inputMode:"decimal",value:p.invested,onChange:y=>b(ne=>({...ne,invested:y.target.value})),placeholder:"0",style:C.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:C.label,children:"Current value"}),t.jsx("input",{type:"number",inputMode:"decimal",value:p.current_value,onChange:y=>b(ne=>({...ne,current_value:y.target.value})),placeholder:"0",style:C.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:C.label,children:"Date"}),t.jsx("input",{type:"date",value:p.date,max:Wo,onChange:y=>b(ne=>({...ne,date:y.target.value})),style:C.input})]})]}),t.jsx("label",{style:C.label,children:"Note (optional)"}),t.jsx("input",{value:p.note,onChange:y=>b(ne=>({...ne,note:y.target.value})),placeholder:"Folio no., broker, etc.",style:C.input}),t.jsxs("div",{style:C.modalActions,children:[t.jsx("button",{onClick:()=>b(null),style:C.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:P,disabled:!p.name.trim(),style:{...C.saveBtn,...p.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",p.id?"Save":"Add"]})]})]})}),u&&t.jsx("div",{style:C.overlay,onClick:()=>k(null),children:t.jsxs("div",{style:C.modal,onClick:y=>y.stopPropagation(),children:[t.jsxs("div",{style:C.modalHead,children:[t.jsx("span",{style:C.modalTitle,children:u.id?"Edit fixed item":"New fixed item"}),t.jsx("button",{onClick:()=>k(null),style:C.iconBtnPlain,children:t.jsx(Ae,{size:16})})]}),t.jsxs("div",{style:C.kindToggle,children:[t.jsxs("button",{onClick:()=>k(y=>({...y,kind:"expense"})),style:{...C.kindBtn,...u.kind==="expense"?{background:Br,color:"#fff",borderColor:Br}:{}},children:[t.jsx(lh,{size:15})," Expense"]}),t.jsxs("button",{onClick:()=>k(y=>({...y,kind:"investment"})),style:{...C.kindBtn,...u.kind==="investment"?{background:Zr,color:"#fff",borderColor:Zr}:{}},children:[t.jsx(Vi,{size:15})," Investment"]})]}),t.jsx("label",{style:C.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:u.name,onChange:y=>k(ne=>({...ne,name:y.target.value})),placeholder:u.kind==="expense"?"e.g. Home loan EMI, Rent…":"e.g. Monthly SIP — Nifty Index",style:C.input}),t.jsxs("div",{style:C.formGrid,children:[t.jsxs("div",{children:[t.jsx("label",{style:C.label,children:"Amount / month"}),t.jsx("input",{type:"number",inputMode:"decimal",value:u.amount,onChange:y=>k(ne=>({...ne,amount:y.target.value})),placeholder:"0",style:C.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:C.label,children:u.kind==="expense"?"Category":"Type"}),u.kind==="expense"?t.jsx("select",{value:u.category_id,onChange:y=>k(ne=>({...ne,category_id:y.target.value})),style:C.input,children:r.map(y=>t.jsx("option",{value:y.id,children:y.name},y.id))}):t.jsx("select",{value:u.invest_kind,onChange:y=>k(ne=>({...ne,invest_kind:y.target.value})),style:C.input,children:kp.map(y=>t.jsx("option",{children:y},y))})]})]}),t.jsx("label",{style:C.label,children:"Note (optional)"}),t.jsx("input",{value:u.note,onChange:y=>k(ne=>({...ne,note:y.target.value})),placeholder:"Loan account no., etc.",style:C.input}),t.jsx("p",{style:C.fixedHint,children:"Posts automatically at the start of every billing cycle (set in Settings → Currency). This one posts immediately for the current cycle when you save."}),t.jsxs("div",{style:C.modalActions,children:[t.jsx("button",{onClick:()=>k(null),style:C.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:U,disabled:!u.name.trim()||!(parseFloat(u.amount)>0),style:{...C.saveBtn,background:ad,...!u.name.trim()||!(parseFloat(u.amount)>0)?{opacity:.5,cursor:"not-allowed"}:{}},children:[t.jsx(He,{size:15})," ",u.id?"Save":"Add"]})]})]})}),t.jsx(pr,{toasts:T,onUndo:E,onDismiss:w}),t.jsx(pr,{toasts:Y,onUndo:q,onDismiss:te}),t.jsx(pr,{toasts:G,onUndo:ue,onDismiss:pe})]})}function d1({money:e,cur:r}){return t.jsxs(t.Fragment,{children:[t.jsx(c1,{money:e,cur:r}),t.jsx(u1,{money:e,cur:r})]})}function bo({label:e,value:r,set:n,min:o,max:i,step:s,suffix:l}){return t.jsxs("div",{style:C.field,children:[t.jsxs("div",{style:C.fieldTop,children:[t.jsx("span",{style:C.fieldLabel,children:e}),t.jsxs("div",{style:C.fieldInputWrap,children:[t.jsx("input",{type:"number",value:r,onChange:a=>n(a.target.value),style:C.fieldInput}),l&&t.jsx("span",{style:C.fieldSuffix,children:l})]})]}),t.jsx("input",{type:"range",min:o,max:i,step:s,value:r,onChange:a=>n(a.target.value),style:C.range})]})}function c1({money:e,cur:r}){const[n,o]=c.useState(3e4),[i,s]=c.useState(12),[l,a]=c.useState(15),{invested:d,futureValue:g,gains:m,yearly:f}=c.useMemo(()=>{const B=Math.max(0,parseFloat(n)||0),R=Math.max(0,parseFloat(i)||0),z=Math.max(0,Math.min(60,parseInt(l)||0)),S=R/12/100,p=x=>x<=0?0:S===0?B*x:B*((Math.pow(1+S,x)-1)/S)*(1+S),b=[];for(let x=1;x<=z;x++)b.push({year:x,invested:B*12*x,value:p(x*12)});const u=p(z*12),k=B*12*z;return{invested:k,futureValue:u,gains:u-k,yearly:b}},[n,i,l]),h=Math.max(1,...f.map(B=>B.value));return t.jsxs("div",{style:C.card,children:[t.jsx("div",{style:C.cardTitleRow,children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(fh,{size:18,color:"#3A7CA5"}),t.jsxs("div",{children:[t.jsx("div",{style:C.cardTitle,children:"SIP projection"}),t.jsx("div",{style:C.cardSub,children:"Mutual fund / SIP future value"})]})]})}),t.jsx(bo,{label:"Monthly investment",value:n,set:o,min:500,max:5e5,step:500,suffix:r.symbol}),t.jsx(bo,{label:"Expected return (p.a.)",value:i,set:s,min:1,max:30,step:.5,suffix:"%"}),t.jsx(bo,{label:"Time period",value:l,set:a,min:1,max:40,step:1,suffix:"yrs"}),t.jsxs("div",{style:C.resultHero,children:[t.jsx("div",{style:C.resultLabel,children:"Projected wealth"}),t.jsx("div",{style:{...C.resultVal,color:"#3A7CA5"},children:e(g)})]}),t.jsxs("div",{style:C.splitRow,children:[t.jsxs("div",{style:C.splitItem,children:[t.jsx("span",{style:C.splitV,children:e(d)}),t.jsx("span",{style:C.splitL,children:"Invested"})]}),t.jsxs("div",{style:C.splitItem,children:[t.jsx("span",{style:{...C.splitV,color:"#3E9E6B"},children:e(m)}),t.jsx("span",{style:C.splitL,children:"Est. returns"})]})]}),f.length>0&&t.jsxs("div",{style:C.chartWrap,children:[t.jsx("div",{style:C.chartBars,children:f.map(B=>t.jsx("div",{style:C.chartCol,title:`Year ${B.year}: ${e(B.value)}`,children:t.jsx("div",{style:{...C.chartStack,height:`${B.value/h*100}%`},children:t.jsx("div",{style:{...C.chartGain,height:`${(1-B.invested/B.value)*100}%`}})})},B.year))}),t.jsxs("div",{style:C.chartAxis,children:[t.jsx("span",{children:"Yr 1"}),t.jsxs("span",{style:{marginLeft:"auto"},children:["Yr ",f.length]})]}),t.jsxs("div",{style:C.legend,children:[t.jsxs("span",{style:C.legendItem,children:[t.jsx("span",{style:{...C.legendDot,background:"#9DBFD6"}})," Invested"]}),t.jsxs("span",{style:C.legendItem,children:[t.jsx("span",{style:{...C.legendDot,background:"#3E9E6B"}})," Returns"]})]})]})]})}function Sp(e,r,n,o=0,i=0){let s=Math.max(0,e-i),l=0,a=0,d=i;const g=1200;for(;s>.01&&a<g;){const m=s*r;let f=n+o,h=f-m;if(h<=0)return{months:1/0,totalInterest:1/0,totalPaid:1/0};h>s&&(h=s,f=s+m),s-=h,l+=m,d+=f,a++}return{months:a,totalInterest:l,totalPaid:d}}const Cp=e=>{if(!isFinite(e))return"—";const r=Math.floor(e/12),n=e%12;return(r?`${r}y `:"")+`${n}m`},g1=e=>{if(!isFinite(e))return"—";const r=new Date;return r.setMonth(r.getMonth()+e),r.toLocaleDateString("en-US",{month:"short",year:"numeric"})};function u1({money:e,cur:r}){const[n,o]=c.useState(2e6),[i,s]=c.useState(9),[l,a]=c.useState(20),[d,g]=c.useState(5e5),[m,f]=c.useState("once"),[h,B]=c.useState("tenure"),R=c.useMemo(()=>{const u=Math.max(0,parseFloat(n)||0),k=Math.max(0,parseFloat(i)||0)/12/100,x=Math.max(1,Math.round((parseFloat(l)||0)*12)),T=k===0?u/x:u*k*Math.pow(1+k,x)/(Math.pow(1+k,x)-1);return{P:u,i:k,n:x,emi:T,totalPay:T*x,totalInterest:T*x-u}},[n,i,l]),z=m==="monthly"?"tenure":h,S=c.useMemo(()=>{const{P:u,i:k,n:x,emi:T,totalInterest:E}=R,w=Math.max(0,parseFloat(d)||0);if(w<=0)return null;let j=T,Y=x,q=E,te=R.totalPay;if(m==="once"&&z==="emi"){const he=Math.max(0,u-w);j=k===0?he/x:he*k*Math.pow(1+k,x)/(Math.pow(1+k,x)-1),Y=x,q=j*x-he,te=w+j*x}else if(m==="once"){const he=Sp(u,k,T,0,w);Y=he.months,q=he.totalInterest,te=he.totalPaid}else{const he=Sp(u,k,T,w,0);Y=he.months,q=he.totalInterest,te=he.totalPaid}return{newEMI:j,newMonths:Y,newInterest:q,totalPaid:te,interestSaved:Math.max(0,E-q),monthsSaved:Math.max(0,x-(isFinite(Y)?Y:x))}},[R,d,m,z]),p=R.totalPay>0?R.P/R.totalPay*100:0,b=m==="once"?Math.max(1e5,Math.round(R.P)):Math.max(5e4,Math.round(R.emi*3));return t.jsxs("div",{style:C.card,children:[t.jsx("div",{style:C.cardTitleRow,children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(Jy,{size:18,color:"#C2536B"}),t.jsxs("div",{children:[t.jsx("div",{style:C.cardTitle,children:"EMI calculator"}),t.jsx("div",{style:C.cardSub,children:"Loan / mortgage monthly payment"})]})]})}),t.jsx(bo,{label:"Loan amount",value:n,set:o,min:5e4,max:5e7,step:5e4,suffix:r.symbol}),t.jsx(bo,{label:"Interest rate (p.a.)",value:i,set:s,min:1,max:24,step:.1,suffix:"%"}),t.jsx(bo,{label:"Tenure",value:l,set:a,min:1,max:30,step:1,suffix:"yrs"}),t.jsxs("div",{style:C.resultHero,children:[t.jsx("div",{style:C.resultLabel,children:"Monthly EMI"}),t.jsx("div",{style:{...C.resultVal,color:"#C2536B"},children:e(R.emi)})]}),t.jsxs("div",{style:C.emiSplitTrack,children:[t.jsx("div",{style:{width:`${p}%`,background:"#5B7C99",height:"100%"}}),t.jsx("div",{style:{width:`${100-p}%`,background:"#C2536B",height:"100%"}})]}),t.jsxs("div",{style:C.splitRow,children:[t.jsxs("div",{style:C.splitItem,children:[t.jsx("span",{style:{...C.splitV,color:"#5B7C99"},children:e(R.P)}),t.jsx("span",{style:C.splitL,children:"Principal"})]}),t.jsxs("div",{style:C.splitItem,children:[t.jsx("span",{style:{...C.splitV,color:"#C2536B"},children:e(R.totalInterest)}),t.jsx("span",{style:C.splitL,children:"Total interest"})]}),t.jsxs("div",{style:C.splitItem,children:[t.jsx("span",{style:C.splitV,children:e(R.totalPay)}),t.jsx("span",{style:C.splitL,children:"Total payable"})]})]}),t.jsx("div",{style:C.subDivider}),t.jsx("div",{style:C.subTitle,children:"Prepayment planner"}),t.jsx("div",{style:C.cardSub,children:"See what an extra payment does to your loan."}),t.jsx("div",{style:{marginTop:14},children:t.jsx(bo,{label:"Prepayment amount",value:d,set:g,min:0,max:b,step:m==="once"?25e3:1e3,suffix:r.symbol})}),t.jsxs("div",{style:C.segGroup,children:[t.jsx("span",{style:C.segLbl,children:"Type"}),t.jsxs("div",{style:C.segRow,children:[t.jsx(il,{label:"One-time",on:m==="once",onClick:()=>f("once")}),t.jsx(il,{label:"Every month",on:m==="monthly",onClick:()=>f("monthly")})]})]}),t.jsxs("div",{style:C.segGroup,children:[t.jsx("span",{style:C.segLbl,children:"Strategy"}),t.jsxs("div",{style:C.segRow,children:[t.jsx(il,{label:"Reduce tenure",on:z==="tenure",onClick:()=>B("tenure")}),t.jsx(il,{label:"Reduce EMI",on:z==="emi",disabled:m==="monthly",onClick:()=>B("emi")})]})]}),m==="monthly"&&t.jsx("div",{style:C.note,children:"An extra monthly payment always shortens the tenure. Switch to a one-time prepayment to reduce your EMI instead."}),S?t.jsxs("div",{style:C.cmpCard,children:[t.jsxs("div",{style:C.cmpRow,children:[t.jsx("span",{style:C.cmpLbl,children:"New EMI"}),t.jsxs("span",{style:C.cmpVal,children:[e(S.newEMI),S.newEMI<R.emi-1&&t.jsxs("span",{style:C.cmpWas,children:[" was ",e(R.emi)]})]})]}),t.jsxs("div",{style:C.cmpRow,children:[t.jsx("span",{style:C.cmpLbl,children:"New tenure"}),t.jsxs("span",{style:C.cmpVal,children:[Cp(S.newMonths)," ",t.jsxs("span",{style:C.cmpWas,children:["· paid off ",g1(S.newMonths)]})]})]}),t.jsxs("div",{style:C.cmpRow,children:[t.jsx("span",{style:C.cmpLbl,children:"Total interest"}),t.jsx("span",{style:C.cmpVal,children:e(S.newInterest)})]}),t.jsxs("div",{style:C.cmpRow,children:[t.jsx("span",{style:C.cmpLbl,children:"Total payable"}),t.jsx("span",{style:C.cmpVal,children:e(S.totalPaid)})]}),t.jsxs("div",{style:C.saveRow,children:["You save ",e(S.interestSaved)," in interest",S.monthsSaved>0?` · ${Cp(S.monthsSaved)} sooner`:""]})]}):t.jsx("div",{style:C.muted,children:"Enter a prepayment amount to see the impact."})]})}function il({label:e,on:r,onClick:n,disabled:o}){return t.jsx("button",{onClick:o?void 0:n,disabled:o,style:{...C.seg,...r?C.segOn:{},...o?C.segDisabled:{}},children:e})}const C={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},tabs:{display:"flex",gap:7,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},presetRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},preset:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},presetOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},sumGrid:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:16},sumCard:{background:"var(--surface)",borderRadius:14,padding:"14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},sumCardWide:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,padding:"16px 14px"},sumIcon:{width:30,height:30,borderRadius:9,display:"grid",placeItems:"center",marginBottom:8},sumIconWide:{width:48,height:48,borderRadius:12,display:"grid",placeItems:"center",flexShrink:0},sumWideText:{textAlign:"center"},sumLabel:{fontSize:11.5,color:"var(--text-3)",fontWeight:600},sumVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2,letterSpacing:"-0.01em",wordBreak:"break-word"},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},cardTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},twoCol:{display:"grid",gridTemplateColumns:"1fr",gap:0},dot:{width:10,height:10,borderRadius:3,flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieSvg:{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"visible"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",transition:"transform 0.15s, box-shadow 0.15s",pointerEvents:"none",textAlign:"center",padding:4,boxSizing:"border-box"},pieHoleVal:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:160,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8,borderRadius:8,padding:"3px 5px",margin:"-3px -5px",cursor:"default",transition:"background 0.15s"},legendRowOn:{background:"var(--surface-2)"},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},investNote:{display:"flex",alignItems:"center",gap:6,fontSize:11.5,color:"var(--text-3)",marginBottom:14,marginTop:-4},healthScore:{fontSize:32,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1},healthStatus:{fontSize:12.5,fontWeight:700,marginTop:2},gaugeTrack:{height:10,background:"var(--surface-2)",borderRadius:6,overflow:"hidden",marginBottom:14},gaugeFill:{height:"100%",borderRadius:6,transition:"width 0.4s"},healthStats:{display:"flex",gap:24,marginBottom:12},healthStat:{display:"flex",flexDirection:"column"},healthStatV:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},healthStatL:{fontSize:11,color:"var(--text-3)",fontWeight:600},tip:{fontSize:12.5,lineHeight:1.5,padding:"10px 12px",borderRadius:10,border:"1px solid",fontWeight:500},kindToggle:{display:"flex",gap:8,marginBottom:12},kindBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},formGrid:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},input:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},addBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},invAddBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"7px 13px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",flexShrink:0},invRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},invPct:{fontSize:11,fontWeight:700,marginTop:1},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},fixedHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.5,marginTop:10,marginBottom:0},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},dateHead:{fontSize:11,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8},txnRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},txnDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},txnCat:{fontSize:13.5,fontWeight:600},txnNote:{fontSize:11.5,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},txnAmt:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},editTxn:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:12,margin:"6px 0"},editCancel:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},field:{marginBottom:16},fieldTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},fieldLabel:{fontSize:13,fontWeight:600,color:"var(--text-2)"},fieldInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:8,padding:"5px 10px",background:"var(--surface-2)"},fieldInput:{border:"none",background:"none",outline:"none",width:90,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},fieldSuffix:{fontSize:12,color:"var(--text-3)",fontWeight:600},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},resultHero:{textAlign:"center",padding:"14px 0 6px"},resultLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},resultVal:{fontSize:34,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,wordBreak:"break-word"},splitRow:{display:"flex",gap:10,marginTop:10},splitItem:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",background:"var(--surface-2)",borderRadius:10,padding:"10px 6px"},splitV:{fontSize:14.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",wordBreak:"break-word"},splitL:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:2},chartWrap:{marginTop:18},chartBars:{display:"flex",alignItems:"flex-end",gap:3,height:90},chartCol:{flex:1,height:"100%",display:"flex",alignItems:"flex-end"},chartStack:{width:"100%",background:"#9DBFD6",borderRadius:"3px 3px 0 0",minHeight:2,position:"relative",display:"flex",flexDirection:"column",justifyContent:"flex-start"},chartGain:{width:"100%",background:"#3E9E6B",borderRadius:"3px 3px 0 0"},chartAxis:{display:"flex",fontSize:10,color:"var(--text-3)",fontWeight:600,marginTop:6},legend:{display:"flex",gap:16,justifyContent:"center",marginTop:10},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)",fontWeight:600},legendDot:{width:10,height:10,borderRadius:3},emiSplitTrack:{display:"flex",height:12,borderRadius:6,overflow:"hidden",marginTop:16,border:"1px solid var(--border)"},subDivider:{height:1,background:"var(--border)",margin:"20px 0 14px"},subTitle:{fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},segGroup:{marginBottom:12},segLbl:{fontSize:12,fontWeight:600,color:"var(--text-3)",display:"block",marginBottom:6},segRow:{display:"flex",gap:8},seg:{flex:1,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},segOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},segDisabled:{opacity:.4,cursor:"not-allowed"},note:{fontSize:12,lineHeight:1.5,color:"var(--text-3)",background:"var(--surface-2)",borderRadius:9,padding:"9px 11px",marginBottom:12},cmpCard:{background:"var(--surface-2)",borderRadius:12,padding:"12px 14px",marginTop:4},cmpRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"6px 0",borderBottom:"1px solid var(--border)",gap:10},cmpLbl:{fontSize:12.5,color:"var(--text-2)",fontWeight:600},cmpVal:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",textAlign:"right"},cmpWas:{fontSize:11,color:"var(--text-3)",fontWeight:500,fontFamily:"'Inter',system-ui,sans-serif"},saveRow:{marginTop:12,background:"rgba(62,158,107,0.12)",color:"#3E9E6B",borderRadius:9,padding:"10px 12px",fontSize:13,fontWeight:700,textAlign:"center"}},kc=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],dd={Monday:"Mon",Tuesday:"Tue",Wednesday:"Wed",Thursday:"Thu",Friday:"Fri",Saturday:"Sat",Sunday:"Sun"},Di=()=>kc[(new Date().getDay()+6)%7],an={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},zp=Object.keys(an),cd=21,Tp="kickstart_tags",p1=e=>{if(!e)return"";const r=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(r))return r;const n=r.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},b1=e=>{if(!e)return"";const r=e.trim().match(/instagram\.com\/(?:reels?|p|tv)\/([A-Za-z0-9_-]+)/);return r?r[1]:""},Ip=e=>{const r=b1(e);if(r)return{platform:"instagram",id:r};const n=p1(e);return n?{platform:"youtube",id:n}:null},Bp=e=>{if(!e||!String(e).trim())return null;const r=String(e).split(":").map(n=>parseInt(n.trim(),10));return r.some(n=>isNaN(n)||n<0)?null:r.reduce((n,o)=>n*60+o,0)},sl=e=>{if(e==null)return"";const r=Math.max(0,e|0);return`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`},m1=e=>e.platform==="instagram"?`https://www.instagram.com/p/${e.youtube_id}/embed/`:`https://www.youtube.com/embed/${e.youtube_id}?start=${e.start_sec||0}`+(e.end_sec?`&end=${e.end_sec}`:"")+"&autoplay=1&rel=0",h1=()=>({id:null,url:"",title:"",start:"",end:"",days:[Di()],pillars:[],customs:[]});function f1(){const[e,r]=c.useState([]),[n,o]=c.useState([]),[i,s]=c.useState(!1),[l,a]=c.useState({type:"day",value:Di()}),[d,g]=c.useState(null),[m,f]=c.useState(null),[h,B]=c.useState(""),R=c.useCallback(async()=>{try{const[G,ue]=await Promise.all([F.getKickstart(),F.getSetting(Tp)]);r(G),o(Array.isArray(ue==null?void 0:ue.value)?ue.value:[])}catch{}s(!0)},[]);c.useEffect(()=>{R()},[R]);const{deleteItem:z,toasts:S,handleUndo:p,handleDismiss:b}=ur(F.deleteKickstart,F.restoreKickstart,R);c.useEffect(()=>{if(!m)return;const G=e.find(U=>U.id===m);if(!G)return;const ue=G.end_sec?Math.max(1,G.end_sec-(G.start_sec||0)):1/0;let pe=0;const ze=10,re=setInterval(()=>{if(document.hidden)return;const U=ue-pe;if(U<=0){clearInterval(re);return}const de=Math.min(ze,U);pe+=de,F.addScreenTime("kickstart",Math.round(de)).catch(()=>{})},ze*1e3);return()=>clearInterval(re)},[m,e]);const u=G=>{o(G),F.setSetting(Tp,G).catch(()=>{})},k=()=>{const G=h.trim();!G||n.length>=cd||n.includes(G)||(u([...n,G]),g(ue=>ue&&!ue.customs.includes(G)?{...ue,customs:[...ue.customs,G]}:ue),B(""))},x=G=>u(n.filter(ue=>ue!==G)),T=(G,ue)=>g(pe=>({...pe,[G]:pe[G].includes(ue)?pe[G].filter(ze=>ze!==ue):[...pe[G],ue]})),E=G=>g({id:G.id,url:G.platform==="instagram"?`https://www.instagram.com/reel/${G.youtube_id}/`:`https://youtu.be/${G.youtube_id}`,title:G.title,start:sl(G.start_sec),end:G.end_sec?sl(G.end_sec):"",days:[...G.days],pillars:[...G.pillars],customs:[...G.customs]}),w=async()=>{const G=Ip(d.url);if(!G||d.days.length===0||!d.title.trim())return;const ue=G.platform==="instagram",pe={youtube_id:G.id,platform:G.platform,title:d.title.trim(),start_sec:ue?0:Bp(d.start)||0,end_sec:ue?null:Bp(d.end),days:d.days,pillars:d.pillars,customs:d.customs};d.id?await F.updateKickstart(d.id,pe):await F.createKickstart(pe),g(null),R()},j=c.useMemo(()=>e.filter(G=>l.type==="all"?!0:l.type==="day"?G.days.includes(l.value):l.type==="pillar"?G.pillars.includes(l.value):l.type==="custom"?G.customs.includes(l.value):!0),[e,l]),Y=(G,ue)=>l.type===G&&l.value===ue,q=d?Ip(d.url):null,te=d?[!q&&"a valid YouTube or Instagram link",!d.title.trim()&&"a title",d.days.length===0&&"at least one day"].filter(Boolean):[],he=!!d&&te.length===0;return t.jsxs("div",{style:Te.page,children:[t.jsxs("div",{style:Te.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:Te.eyebrow,children:"Anvil · Kickstart"}),t.jsx("h1",{style:Te.h1,children:"Kickstart"}),t.jsxs("div",{style:Te.subhead,children:["Your motivation hub — the right push for ",Di(),"."]})]}),!d&&t.jsxs("button",{onClick:()=>g(h1()),style:Te.addBtn,children:[t.jsx(st,{size:15})," Add video"]})]}),d&&t.jsxs("div",{style:Te.card,children:[t.jsx("div",{style:Te.cardTitle,children:d.id?"Edit video":"Add video"}),t.jsx("input",{placeholder:"YouTube or Instagram link",value:d.url,onChange:G=>g({...d,url:G.target.value}),style:Te.input,autoFocus:!0}),d.url&&!q&&t.jsx("div",{style:Te.warn,children:"Couldn't find a YouTube or Instagram video in that link."}),q&&t.jsx("div",{style:Te.platformRow,children:q.platform==="instagram"?t.jsxs(t.Fragment,{children:[t.jsx(Ou,{size:13,color:"#C2536B"})," Instagram reel detected"]}):t.jsxs(t.Fragment,{children:[t.jsx(Ch,{size:13,color:"#C2536B"})," YouTube video detected"]})}),t.jsx("input",{placeholder:"Title (required)",value:d.title,onChange:G=>g({...d,title:G.target.value}),style:{...Te.input,marginTop:8}}),(q==null?void 0:q.platform)==="instagram"?t.jsx("div",{style:Te.hint,children:"Instagram clips always play in full — trimming isn't supported by Instagram embeds."}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:Te.trimRow,children:[t.jsx(vh,{size:15,color:"var(--text-3)"}),t.jsxs("label",{style:Te.trimField,children:[t.jsx("span",{style:Te.trimLbl,children:"Start"}),t.jsx("input",{placeholder:"0:30",value:d.start,onChange:G=>g({...d,start:G.target.value}),style:Te.trimInput})]}),t.jsx("span",{style:Te.trimArrow,children:"→"}),t.jsxs("label",{style:Te.trimField,children:[t.jsx("span",{style:Te.trimLbl,children:"End"}),t.jsx("input",{placeholder:"end (optional)",value:d.end,onChange:G=>g({...d,end:G.target.value}),style:Te.trimInput})]})]}),t.jsx("div",{style:Te.hint,children:"Only this trimmed part plays. Use m:ss (e.g. 1:30). Leave End blank to play to the end."})]}),t.jsxs("div",{style:Te.tagBlock,children:[t.jsxs("div",{style:Te.tagLabel,children:["Days ",t.jsx("span",{style:Te.req,children:"required"})]}),t.jsx("div",{style:Te.chipRow,children:kc.map(G=>t.jsx("button",{onClick:()=>T("days",G),style:{...Te.chip,...d.days.includes(G)?Te.chipOnDark:{}},children:dd[G]},G))})]}),t.jsxs("div",{style:Te.tagBlock,children:[t.jsxs("div",{style:Te.tagLabel,children:["Pillars ",t.jsx("span",{style:Te.opt,children:"optional"})]}),t.jsx("div",{style:Te.chipRow,children:zp.map(G=>{const ue=d.pillars.includes(G);return t.jsxs("button",{onClick:()=>T("pillars",G),style:{...Te.chip,...ue?{background:an[G],color:"#fff",borderColor:an[G]}:{}},children:[t.jsx("span",{style:{...Te.dot,background:ue?"#fff":an[G]}}),G]},G)})})]}),t.jsxs("div",{style:Te.tagBlock,children:[t.jsxs("div",{style:Te.tagLabel,children:["Custom tags ",t.jsxs("span",{style:Te.opt,children:["optional · ",n.length,"/",cd]})]}),t.jsxs("div",{style:Te.chipRow,children:[n.map(G=>t.jsxs("span",{style:{...Te.chip,...d.customs.includes(G)?Te.chipOnAccent:{},paddingRight:4},children:[t.jsx("button",{onClick:()=>T("customs",G),style:Te.chipInner,children:G}),t.jsx("button",{onClick:()=>x(G),style:Te.chipX,title:"Delete tag",children:t.jsx(Ae,{size:11})})]},G)),n.length===0&&t.jsx("span",{style:Te.muted,children:"No custom tags yet."})]}),n.length<cd&&t.jsxs("div",{style:Te.newTagRow,children:[t.jsx("input",{placeholder:"New custom tag…",value:h,onChange:G=>B(G.target.value),onKeyDown:G=>G.key==="Enter"&&k(),style:{...Te.input,padding:"7px 10px"}}),t.jsx("button",{onClick:k,style:Te.smallBtn,children:t.jsx(st,{size:14})})]})]}),!he&&t.jsxs("div",{style:Te.warn,children:["Add ",te.join(", ")," to save."]}),t.jsxs("div",{style:Te.formActions,children:[t.jsxs("button",{onClick:()=>g(null),style:Te.cancelBtn,children:[t.jsx(Ae,{size:14})," Cancel"]}),t.jsxs("button",{onClick:w,disabled:!he,style:{...Te.saveBtn,...he?{}:Te.saveDisabled},children:[t.jsx(He,{size:15})," ",d.id?"Save":"Add video"]})]})]}),t.jsxs("div",{style:Te.filterCard,children:[t.jsx("button",{onClick:()=>a({type:"all"}),style:{...Te.fChip,...l.type==="all"?Te.fChipOnDark:{}},children:"All"}),t.jsx("span",{style:Te.fDivider}),kc.map(G=>t.jsxs("button",{onClick:()=>a({type:"day",value:G}),style:{...Te.fChip,...Y("day",G)?Te.fChipOnDark:{},...G===Di()?Te.fToday:{}},children:[dd[G],G===Di()?" ·":""]},G)),t.jsx("span",{style:Te.fDivider}),zp.map(G=>t.jsxs("button",{onClick:()=>a({type:"pillar",value:G}),style:{...Te.fChip,...Y("pillar",G)?{background:an[G],color:"#fff",borderColor:an[G]}:{}},children:[t.jsx("span",{style:{...Te.dot,background:Y("pillar",G)?"#fff":an[G]}}),G]},G)),n.length>0&&t.jsx("span",{style:Te.fDivider}),n.map(G=>t.jsxs("button",{onClick:()=>a({type:"custom",value:G}),style:{...Te.fChip,...Y("custom",G)?Te.fChipOnAccent:{}},children:[t.jsx(uc,{size:11})," ",G]},G))]}),i?j.length===0?t.jsx("div",{style:Te.empty,children:e.length===0?"No videos yet — add your first motivation clip.":"No videos for this tag."}):t.jsx("div",{style:Te.grid,children:j.map(G=>t.jsxs("div",{style:Te.videoCard,children:[t.jsx("div",{style:{...Te.thumbWrap,...G.platform==="instagram"&&m===G.id?Te.thumbWrapInsta:{}},children:m===G.id?t.jsx("iframe",{src:m1(G),title:G.title||G.youtube_id,style:Te.iframe,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):G.platform==="instagram"?t.jsxs("button",{onClick:()=>f(G.id),style:{...Te.thumbBtn,...Te.instaThumb},children:[t.jsx(Ou,{size:34,color:"#fff"}),t.jsx("span",{style:Te.instaLabel,children:"Instagram reel"}),t.jsx("span",{style:Te.playOverlay,children:t.jsx(Xl,{size:22,color:"#fff",fill:"#fff"})})]}):t.jsxs("button",{onClick:()=>f(G.id),style:Te.thumbBtn,children:[t.jsx("img",{src:`https://img.youtube.com/vi/${G.youtube_id}/hqdefault.jpg`,alt:"",style:Te.thumb}),t.jsx("span",{style:Te.playOverlay,children:t.jsx(Xl,{size:22,color:"#fff",fill:"#fff"})}),t.jsxs("span",{style:Te.trimBadge,children:[sl(G.start_sec),G.end_sec?` – ${sl(G.end_sec)}`:"+"]})]})}),t.jsxs("div",{style:Te.videoBody,children:[t.jsx("div",{style:Te.videoTitle,children:G.title||"Untitled clip"}),t.jsxs("div",{style:Te.tagWrap,children:[G.days.map(ue=>t.jsx("span",{style:Te.dayTag,children:dd[ue]},ue)),G.pillars.map(ue=>t.jsx("span",{style:{...Te.pillTag,color:an[ue]||"var(--text-2)",borderColor:an[ue]||"var(--border)"},children:ue},ue)),G.customs.map(ue=>t.jsx("span",{style:Te.customTag,children:ue},ue))]}),t.jsxs("div",{style:Te.cardActions,children:[t.jsx("button",{onClick:()=>E(G),style:Te.iconBtn,title:"Edit",children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:()=>z(G.id,G.title||"video"),style:Te.iconBtn,title:"Delete",children:t.jsx(Ae,{size:14})})]})]})]},G.id))}):t.jsx("div",{style:Te.muted,children:"Loading…"}),t.jsx(pr,{toasts:S,onUndo:p,onDismiss:b})]})}const Te={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:1e3,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},warn:{fontSize:11.5,color:"#C2773B",marginTop:5,fontWeight:600},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:6,lineHeight:1.4},platformRow:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)",fontWeight:600,marginTop:5},trimRow:{display:"flex",alignItems:"flex-end",gap:10,marginTop:10},trimField:{display:"flex",flexDirection:"column",gap:4,flex:1},trimLbl:{fontSize:11,color:"var(--text-2)",fontWeight:600},trimInput:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},trimArrow:{color:"var(--text-3)",paddingBottom:9},tagBlock:{marginTop:14},tagLabel:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},req:{fontSize:10,fontWeight:700,color:"#C2536B",textTransform:"uppercase",marginLeft:6},opt:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",marginLeft:6},chipRow:{display:"flex",gap:6,flexWrap:"wrap"},chip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},chipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},chipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},chipInner:{border:"none",background:"none",color:"inherit",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,padding:0},chipX:{border:"none",background:"rgba(0,0,0,0.12)",color:"inherit",cursor:"pointer",display:"grid",placeItems:"center",borderRadius:"50%",width:16,height:16,padding:0},newTagRow:{display:"flex",gap:6,marginTop:8,maxWidth:280},smallBtn:{border:"none",background:"var(--accent)",color:"#fff",width:34,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},dot:{width:8,height:8,borderRadius:"50%",flexShrink:0,display:"inline-block"},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"var(--accent)",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},filterCard:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:12,marginBottom:18},fChip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},fChipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},fChipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},fToday:{borderColor:"var(--accent)",borderWidth:2},fDivider:{width:1,alignSelf:"stretch",background:"var(--border)",margin:"0 2px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:14},videoCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 9",background:"#000"},thumbWrapInsta:{aspectRatio:"9 / 14"},thumbBtn:{border:"none",padding:0,margin:0,cursor:"pointer",width:"100%",height:"100%",position:"relative",display:"block",background:"#000"},instaThumb:{background:"linear-gradient(135deg, #833AB4, #E1306C 55%, #F77737)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:6},instaLabel:{color:"rgba(255,255,255,0.9)",fontSize:12,fontWeight:700,letterSpacing:"0.04em"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center",background:"rgba(0,0,0,0.28)"},trimBadge:{position:"absolute",bottom:8,right:8,background:"rgba(0,0,0,0.75)",color:"#fff",fontSize:11,fontWeight:700,padding:"2px 7px",borderRadius:6,fontFamily:"'Fraunces',Georgia,serif"},iframe:{width:"100%",height:"100%",border:"none",display:"block"},videoBody:{padding:"12px 13px",display:"flex",flexDirection:"column",gap:8},videoTitle:{fontSize:14,fontWeight:700},tagWrap:{display:"flex",gap:5,flexWrap:"wrap"},dayTag:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:8},pillTag:{fontSize:10,fontWeight:700,border:"1px solid",borderRadius:8,padding:"2px 7px"},customTag:{fontSize:10,fontWeight:700,color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"2px 7px",borderRadius:8},cardActions:{display:"flex",gap:4,justifyContent:"flex-end"},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},_h=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Rp=()=>_h(new Date),Ep=(e,r)=>{const n=new Date(e+"T00:00:00");return n.setDate(n.getDate()+r),_h(n)},Fp=e=>new Date(e+"T00:00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"}),x1=e=>{if(!e)return"";const r=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(r))return r;const n=r.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},y1=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>900?(a=a*900/l,l=900):a>900&&(l=l*900/a,a=900);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),r(d.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)});function v1(){const[e,r]=c.useState([]),[n,o]=c.useState(!1),[i,s]=c.useState(null),[l,a]=c.useState(!1),[d,g]=c.useState({title:"",image:""}),[m,f]=c.useState(""),[h,B]=c.useState(!1),[R,z]=c.useState(null),S=c.useCallback(async()=>{try{r(await F.getGoldenGoals())}catch{}o(!0)},[]);c.useEffect(()=>{S()},[S]);const{deleteItem:p,toasts:b,handleUndo:u,handleDismiss:k}=ur(F.deleteGolden,F.restoreGolden,S);c.useEffect(()=>{const j=()=>F.getSetting("golden_music").then(Y=>f(x1((Y==null?void 0:Y.value)||""))).catch(()=>{});return j(),window.addEventListener("focus",j),()=>window.removeEventListener("focus",j)},[]);const x=async()=>{if(!d.title.trim())return;const j=await F.createGolden({title:d.title.trim(),image:d.image});g({title:"",image:""}),a(!1),await S(),s(j.id)},T=async(j,Y)=>{var te;const q=(te=j.target.files)==null?void 0:te[0];if(q)try{Y(await y1(q))}catch{}},E=e.filter(j=>!j.achieved),w=e.filter(j=>j.achieved);return i?t.jsxs("div",{style:oe.page,children:[t.jsx(z1,{musicId:m,on:h}),t.jsx(S1,{goalId:i,onBack:()=>s(null),onReload:S,onCelebrate:(j,Y)=>z({title:j,days:Y}),pickImage:T,musicId:m,setMusicId:f,musicOn:h,setMusicOn:B}),R&&t.jsx(C1,{data:R,onClose:()=>z(null)})]}):t.jsxs("div",{style:oe.page,children:[t.jsxs("div",{style:oe.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:oe.eyebrow,children:"Anvil · Golden Book"}),t.jsx("h1",{style:oe.h1,children:"Golden Book"}),t.jsx("div",{style:oe.subhead,children:"Write your dreams into being — a little every day."})]}),!l&&t.jsxs("button",{onClick:()=>a(!0),style:oe.addBtn,children:[t.jsx(st,{size:15})," New dream"]})]}),l&&t.jsxs("div",{style:oe.card,children:[t.jsx("div",{style:oe.cardTitle,children:"Manifest a new dream"}),t.jsx("textarea",{autoFocus:!0,placeholder:"Write your dream as if it's already true…",value:d.title,onChange:j=>g({...d,title:j.target.value}),style:oe.textarea}),t.jsxs("label",{style:oe.photoPick,children:[d.image?t.jsx("img",{src:d.image,alt:"",style:oe.photoPreview}):t.jsxs("span",{style:oe.photoEmpty,children:[t.jsx(ja,{size:18})," Add a photo"]}),t.jsx("input",{type:"file",accept:"image/*",onChange:j=>T(j,Y=>g({...d,image:Y})),style:{display:"none"}})]}),t.jsxs("div",{style:oe.formActions,children:[t.jsxs("button",{onClick:()=>{a(!1),g({title:"",image:""})},style:oe.cancelBtn,children:[t.jsx(Ae,{size:14})," Cancel"]}),t.jsxs("button",{onClick:x,disabled:!d.title.trim(),style:{...oe.saveBtn,...d.title.trim()?{}:oe.saveDisabled},children:[t.jsx(He,{size:15})," Create"]})]})]}),n?t.jsxs(t.Fragment,{children:[E.length===0&&w.length===0&&!l&&t.jsx("div",{style:oe.empty,children:"No dreams yet. Add your first one and revisit it daily."}),E.length>0&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:oe.sectionTitle,children:[t.jsx(Co,{size:15,color:"#C9A227"})," Manifesting ",t.jsx("span",{style:oe.badge,children:E.length})]}),t.jsx("div",{style:oe.grid,children:E.map(j=>t.jsx(Wp,{g:j,onOpen:()=>s(j.id),onDelete:()=>p(j.id,j.title)},j.id))})]}),w.length>0&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{...oe.sectionTitle,marginTop:22},children:[t.jsx(Yr,{size:15,color:"#4C9A6B"})," Manifested ",t.jsx("span",{style:oe.badge,children:w.length})]}),t.jsx("div",{style:oe.grid,children:w.map(j=>t.jsx(Wp,{g:j,onOpen:()=>s(j.id),onDelete:()=>p(j.id,j.title),achieved:!0},j.id))})]})]}):t.jsx("div",{style:oe.muted,children:"Loading…"}),t.jsx(pr,{toasts:b,onUndo:u,onDismiss:k})]})}const wc=[{key:"morning",label:"Morning",time:"6 AM – 12 PM",Icon:wh,color:"#E0883B"},{key:"noon",label:"Noon",time:"12 – 6 PM",Icon:x0,color:"#C9A227"},{key:"night",label:"Night",time:"6 PM – 2 AM",Icon:i0,color:"#6B6FB0"}],Ap=e=>{if(e<31)return`${e} day${e===1?"":"s"}`;const r=Math.floor(e/365),n=Math.floor(e%365/30),o=e%365%30,i=[];return r&&i.push(`${r}y`),n&&i.push(`${n}mo`),o&&i.push(`${o}d`),i.join(" ")},Dp="tesla369_reminders";function j1({g:e,onChanged:r,musicId:n,setMusicId:o,musicOn:i,setMusicOn:s}){const[l,a]=c.useState(""),[d,g]=c.useState(!1),[m,f]=c.useState(!1),[h,B]=c.useState(()=>localStorage.getItem(Dp)==="1"),R=e.t369,z=(e.t369_affirmation||"").trim();if(w1(h&&!!z,R,e.title),!R)return null;const{window:S,targets:p,counts:b,current_streak:u,best_streak:k,min_streak:x,min_reached:T,day_complete:E}=R,w=(b.morning||0)+(b.noon||0)+(b.night||0),j=p.morning+p.noon+p.night,Y=async()=>{if(z&&l.trim()===z&&S){f(!0);try{r(await F.logTesla369(e.id)),a("")}catch(ue){alert(ue.message||"Could not log this write.")}finally{f(!1)}}},q=async()=>{f(!0);try{r(await F.undoTesla369(e.id))}catch{}finally{f(!1)}},te=async()=>{if(!h&&!await k1()){alert("Enable notifications in your browser to get 369 reminders.");return}const ue=!h;B(ue),localStorage.setItem(Dp,ue?"1":"0")},he=l.trim()===z&&z!=="",G=S&&(b[S]||0)>=p[S];return t.jsxs("div",{style:oe.tCard,children:[t.jsxs("div",{style:oe.tHead,children:[t.jsxs("div",{style:oe.tTitleWrap,children:[t.jsxs("span",{style:oe.tBadge,children:[t.jsx(Ig,{size:14})," 369"]}),t.jsxs("div",{children:[t.jsx("div",{style:oe.tTitle,children:"369 Method"}),t.jsx("div",{style:oe.tSub,children:"Write it 3× morning · 6× noon · 9× night."})]})]}),t.jsxs("div",{style:oe.tHeadBtns,children:[t.jsx($h,{musicId:n,musicOn:i,setMusicOn:s}),t.jsxs("button",{onClick:te,style:{...oe.tRemBtn,...h?oe.tRemOn:{}},title:h?"Reminders on":"Turn on reminders",children:[h?t.jsx(jg,{size:14}):t.jsx(Cy,{size:14})," ",h?"Reminders on":"Remind me"]})]})]}),t.jsxs("div",{style:oe.tStreakRow,children:[t.jsxs("div",{style:oe.tStreakBox,children:[t.jsxs("div",{style:oe.tStreakLabel,children:[t.jsx(jn,{size:13,color:"#C2773B"})," Current streak"]}),t.jsx("div",{style:oe.tStreakVal,children:Ap(u)}),T?t.jsxs("div",{style:{...oe.tStreakHint,color:"#4C9A6B"},children:["✓ ",x,"-day minimum met — keep going until it manifests"]}):t.jsxs("div",{style:oe.tStreakHint,children:["Day ",u," of ",x," minimum"]}),!T&&t.jsx("div",{style:oe.tProgTrack,children:t.jsx("div",{style:{...oe.tProgFill,width:`${Math.min(100,u/x*100)}%`}})})]}),t.jsxs("div",{style:oe.tStreakBox,children:[t.jsxs("div",{style:oe.tStreakLabel,children:[t.jsx(Yr,{size:13,color:"#C9A227"})," All-time best"]}),t.jsx("div",{style:oe.tStreakVal,children:Ap(k)}),t.jsxs("div",{style:oe.tStreakHint,children:["Today: ",w,"/",j," written ",E?"✓":""]})]})]}),z?t.jsxs(t.Fragment,{children:[t.jsx("div",{style:oe.tWindows,children:wc.map(({key:ue,label:pe,time:ze,Icon:re,color:U})=>{const de=b[ue]||0,X=p[ue],I=S===ue,A=de>=X;return t.jsxs("div",{style:{...oe.tWindow,...I?{border:`1px solid ${U}`,boxShadow:`0 0 0 2px ${U}22`}:{}},children:[t.jsxs("div",{style:oe.tWindowHead,children:[t.jsx(re,{size:15,color:U}),t.jsx("span",{style:oe.tWindowLabel,children:pe}),I&&t.jsx("span",{style:{...oe.tNow,color:U},children:"now"})]}),t.jsx("div",{style:oe.tWindowTime,children:ze}),t.jsx("div",{style:oe.tDots,children:Array.from({length:X}).map((P,$)=>t.jsx("span",{style:{...oe.tDot,...$<de?{background:U,borderColor:U}:{}}},$))}),t.jsxs("div",{style:{...oe.tCount,...A?{color:U}:{}},children:[de,"/",X,A?" ✓":""]})]},ue)})}),t.jsx("div",{style:oe.tWriteBox,children:S?G?t.jsxs("div",{style:oe.tDoneMsg,children:["✓ ",wc.find(ue=>ue.key===S).label," complete. ",E?"All 18 done today! 🔥":"Next window unlocks ahead."]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{style:oe.tNote,children:"✍️ Type it out by hand — no copy-pasting. The act of writing is the point."}),t.jsx("textarea",{value:l,onChange:ue=>a(ue.target.value),onPaste:ue=>{ue.preventDefault(),g(!0),setTimeout(()=>g(!1),2500)},onDrop:ue=>ue.preventDefault(),placeholder:"Type your affirmation here…",style:{...oe.writeArea,...he?{border:"1px solid #4C9A6B"}:{}}}),d&&t.jsx("div",{style:oe.tPasteWarn,children:"Pasting is disabled — please type it."}),t.jsxs("div",{style:oe.tWriteActions,children:[t.jsxs("button",{onClick:q,disabled:m||(b[S]||0)===0,style:oe.tUndoBtn,title:"Undo last write",children:[t.jsx(Sh,{size:14})," Undo"]}),t.jsxs("button",{onClick:Y,disabled:m||!he,style:{...oe.writeSave,flex:1,...he?{}:oe.saveDisabled},children:[t.jsx(He,{size:15})," ",he?"Log this write":"Type it to log"]})]})]}):t.jsx("div",{style:oe.tClosed,children:"Writing windows: 6 AM–12 PM, 12–6 PM, 6 PM–2 AM. Come back during a window."})})]}):t.jsx("div",{style:oe.tClosed,children:"Set a 369 affirmation above to start writing."})]})}async function k1(){return"Notification"in window?Notification.permission==="granted"?!0:Notification.permission==="denied"?!1:await Notification.requestPermission()==="granted":!1}function w1(e,r,n){const o=c.useRef({});c.useEffect(()=>{if(!e||!r)return;const i=()=>{var B;if(Notification.permission!=="granted")return;const l=r.window;if(!l)return;const a=r.counts||{},d=r.targets||{};if((a[l]||0)>=(d[l]||0))return;const g=r.today,m=`369-${n||""}-${g}-${l}`;if(o.current[m])return;o.current[m]=!0;const f=((B=wc.find(R=>R.key===l))==null?void 0:B.label)||"",h=(d[l]||0)-(a[l]||0);try{new Notification("369 — time to write ✍️",{body:`${n?`"${n}" · `:""}${f} window: ${h} more to go. Type your affirmation.`,tag:m})}catch{}};i();const s=setInterval(i,60*1e3);return()=>clearInterval(s)},[e,r,n])}function Wp({g:e,onOpen:r,onDelete:n,achieved:o}){return t.jsxs("div",{style:{...oe.goalCard,...o?{opacity:.96}:{},position:"relative"},children:[t.jsxs("button",{onClick:r,style:oe.goalCardBtn,children:[t.jsxs("div",{style:oe.thumbWrap,children:[e.image?t.jsx("img",{src:e.image,alt:"",style:oe.thumb}):t.jsx("div",{style:oe.thumbEmpty,children:t.jsx(Co,{size:26,color:"var(--text-3)"})}),o&&t.jsx("span",{style:oe.stamp,children:"✦ Manifested"})]}),t.jsxs("div",{style:oe.goalBody,children:[t.jsx("div",{style:oe.goalTitle,children:e.title}),t.jsxs("div",{style:oe.goalMeta,children:[o?t.jsxs("span",{style:{...oe.metaPill,color:"#4C9A6B",background:"rgba(76,154,107,0.12)"},children:[t.jsx(Yr,{size:12})," ",e.days_to_manifest!=null?`in ${e.days_to_manifest} day${e.days_to_manifest===1?"":"s"}`:"done"]}):t.jsxs("span",{style:{...oe.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[t.jsx(jn,{size:12})," ",e.streak," day streak"]}),t.jsxs("span",{style:oe.metaDim,children:[e.total_days," entr",e.total_days===1?"y":"ies"]})]})]})]}),t.jsx("button",{onClick:i=>{i.stopPropagation(),window.confirm(`Delete "${e.title}"?`)&&n()},style:oe.cardDelBtn,title:"Delete dream",children:t.jsx(vs,{size:14})})]})}function S1({goalId:e,onBack:r,onReload:n,onCelebrate:o,pickImage:i,musicId:s,setMusicId:l,musicOn:a,setMusicOn:d}){const[g,m]=c.useState(null),[f,h]=c.useState({}),[B,R]=c.useState(Rp()),[z,S]=c.useState(""),[p,b]=c.useState(null),[u,k]=c.useState(null),x=Rp(),T=c.useCallback(U=>{m(U);const de={};(U.entries||[]).forEach(X=>{de[X.date]=X.text}),h(de),S(de[x]||"")},[x]),E=c.useCallback(async()=>{T(await F.getGoldenGoal(e))},[e,T]);if(c.useEffect(()=>{E()},[E]),c.useEffect(()=>{if(!(g!=null&&g.t369_enabled))return;const U=setInterval(()=>{F.getGoldenGoal(e).then(T).catch(()=>{})},60*1e3);return()=>clearInterval(U)},[g==null?void 0:g.t369_enabled,e,T]),!g)return t.jsx("div",{style:oe.muted,children:"Loading…"});const w=B===x,j=B>g.created_date,Y=B<x,q=async()=>{await F.upsertGoldenEntry(e,{date:x,text:z}),await E(),n()},te=async()=>{const U=await F.achieveGolden(e);o(g.title,U.days_to_manifest),await E(),n()},he=async()=>{await F.unachieveGolden(e),await E(),n()},G=async()=>{p.trim()&&(await F.updateGolden(e,{title:p.trim()}),b(null),await E(),n())},ue=U=>F.updateGolden(e,{image:U}).then(()=>{E(),n()}),pe=async()=>{await F.updateGolden(e,{t369_enabled:!g.t369_enabled}),await E(),n()},ze=async()=>{await F.updateGolden(e,{t369_affirmation:(u||"").trim()}),k(null),await E()},re=async()=>{window.confirm(`Delete "${g.title}"? This cannot be undone from here.`)&&(await F.deleteGolden(e),n(),r())};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:oe.detailTopRow,children:[t.jsxs("button",{onClick:r,style:oe.backBtn,children:[t.jsx(sh,{size:16})," All dreams"]}),t.jsxs("button",{onClick:re,style:oe.deleteBtn,title:"Delete dream",children:[t.jsx(vs,{size:14})," Delete"]})]}),t.jsxs("div",{style:oe.detailHero,children:[t.jsxs("label",{style:oe.heroPhoto,children:[g.image?t.jsx("img",{src:g.image,alt:"",style:oe.heroImg}):t.jsxs("span",{style:oe.photoEmpty,children:[t.jsx(ja,{size:20})," Add a photo"]}),t.jsxs("span",{style:oe.photoEdit,children:[t.jsx(vt,{size:12})," Edit photo"]}),t.jsx("input",{type:"file",accept:"image/*",onChange:U=>i(U,ue),style:{display:"none"}})]}),t.jsxs("div",{style:oe.heroInfo,children:[g.achieved&&t.jsxs("span",{style:oe.heroStamp,children:["✦ Manifested",g.days_to_manifest!=null?` in ${g.days_to_manifest} day${g.days_to_manifest===1?"":"s"}`:""]}),p!==null?t.jsxs("div",{style:{display:"flex",gap:6,width:"100%"},children:[t.jsx("textarea",{autoFocus:!0,value:p,onChange:U=>b(U.target.value),style:{...oe.textarea,minHeight:60}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[t.jsx("button",{onClick:G,style:oe.iconSave,children:t.jsx(He,{size:14})}),t.jsx("button",{onClick:()=>b(null),style:oe.iconCancel,children:t.jsx(Ae,{size:14})})]})]}):t.jsxs("div",{style:oe.heroTitleRow,children:[t.jsx("div",{style:oe.heroTitle,children:g.title}),t.jsx("button",{onClick:()=>b(g.title),style:oe.ghostBtn,title:"Edit",children:t.jsx(vt,{size:13})})]}),t.jsxs("div",{style:oe.heroStats,children:[t.jsxs("span",{style:{...oe.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[t.jsx(jn,{size:13})," ",g.streak," day streak"]}),t.jsxs("span",{style:oe.metaDim,children:[g.total_days," entr",g.total_days===1?"y":"ies"]}),t.jsxs("span",{style:oe.metaDim,children:["since ",Fp(g.created_date)]})]})]})]}),!g.achieved&&t.jsxs("div",{style:oe.t369Row,children:[t.jsxs("div",{style:oe.t369RowLeft,children:[t.jsxs("span",{style:{...oe.tBadge,...g.t369_enabled?{}:oe.tBadgeOff},children:[t.jsx(Ig,{size:13})," 369"]}),t.jsxs("div",{children:[t.jsx("div",{style:oe.t369RowTitle,children:"Tesla's 369 Method"}),t.jsx("div",{style:oe.t369RowSub,children:g.t369_enabled?"On — write this dream 3×/6×/9× across the day.":"Off — using the simple daily entry."})]})]}),t.jsx("button",{onClick:pe,style:{...oe.switch,...g.t369_enabled?oe.switchOn:{}},role:"switch","aria-checked":g.t369_enabled,title:"Toggle 369 method",children:t.jsx("span",{style:{...oe.switchKnob,...g.t369_enabled?oe.switchKnobOn:{}}})})]}),g.t369_enabled&&!g.achieved&&t.jsxs(t.Fragment,{children:[u!==null||!g.t369_affirmation?t.jsxs("div",{style:oe.card,children:[t.jsx("div",{style:oe.cardTitle,children:"Your 369 affirmation"}),t.jsx("textarea",{autoFocus:!0,value:u??g.t369_affirmation??"",onChange:U=>k(U.target.value),placeholder:"The exact line you'll write 18× a day, e.g. 'I am grateful for my dream home.'",style:oe.textarea}),t.jsxs("div",{style:oe.formActions,children:[g.t369_affirmation&&t.jsxs("button",{onClick:()=>k(null),style:oe.cancelBtn,children:[t.jsx(Ae,{size:14})," Cancel"]}),t.jsxs("button",{onClick:ze,disabled:!(u??"").trim()&&!g.t369_affirmation,style:{...oe.saveBtn,...(u??g.t369_affirmation??"").trim()?{}:oe.saveDisabled},children:[t.jsx(He,{size:15})," Save affirmation"]})]})]}):t.jsxs("div",{style:oe.tAffShow,children:[t.jsx(cc,{size:15,color:$r}),t.jsx("p",{style:oe.tAffText,children:g.t369_affirmation}),t.jsx("button",{onClick:()=>k(g.t369_affirmation),style:oe.ghostBtn,title:"Edit affirmation",children:t.jsx(vt,{size:13})})]}),t.jsx(j1,{g,onChanged:T,musicId:s,setMusicId:l,musicOn:a,setMusicOn:d})]}),!g.t369_enabled&&t.jsxs("div",{style:oe.writeCard,children:[t.jsx("div",{style:oe.tuneRow,children:t.jsx($h,{musicId:s,musicOn:a,setMusicOn:d})}),t.jsxs("div",{style:oe.writeNav,children:[t.jsx("button",{onClick:()=>R(U=>Ep(U,-1)),disabled:!j,style:{...oe.navBtn,...j?{}:oe.navDisabled},children:t.jsx(Sn,{size:16})}),t.jsx("div",{style:oe.writeDate,children:w?"Today":Fp(B)}),t.jsx("button",{onClick:()=>R(U=>Ep(U,1)),disabled:!Y,style:{...oe.navBtn,...Y?{}:oe.navDisabled},children:t.jsx(nn,{size:16})})]}),w&&!g.achieved?t.jsxs(t.Fragment,{children:[t.jsx("textarea",{value:z,onChange:U=>S(U.target.value),placeholder:"Write it again today, as if it's already yours…",style:oe.writeArea}),t.jsxs("button",{onClick:q,style:oe.writeSave,children:[t.jsx(He,{size:15})," Save today's entry"]})]}):t.jsx("div",{style:oe.readEntry,children:f[B]?t.jsxs(t.Fragment,{children:[t.jsx(cc,{size:16,color:"var(--text-3)"}),t.jsx("p",{style:oe.readText,children:f[B]})]}):t.jsx("div",{style:oe.muted,children:"Nothing written on this day."})})]}),g.achieved?t.jsx("button",{onClick:he,style:oe.unmanifestBtn,children:"Undo manifested"}):t.jsxs("button",{onClick:te,style:oe.manifestBtn,children:[t.jsx(Co,{size:16})," Mark as manifested"]})]})}function C1({data:e,onClose:r}){return t.jsx("div",{style:oe.celebOverlay,onClick:r,children:t.jsxs("div",{style:oe.celebBox,onClick:n=>n.stopPropagation(),children:[t.jsx("div",{style:oe.celebEmoji,children:"✨🌟✨"}),t.jsx("div",{style:oe.celebTitle,children:"It's happening!"}),t.jsxs("div",{style:oe.celebDream,children:['"',e.title,'"']}),t.jsxs("div",{style:oe.celebSub,children:[e.days!=null?`Manifested in ${e.days} day${e.days===1?"":"s"}.`:"Manifested."," The universe delivered. 🙏"]}),t.jsx("button",{onClick:r,style:oe.celebBtn,children:"Wonderful"})]})})}function z1({musicId:e,on:r}){return!e||!r?null:t.jsx("iframe",{title:"golden-music",src:`https://www.youtube.com/embed/${e}?autoplay=1&loop=1&playlist=${e}&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}})}function $h({musicId:e,musicOn:r,setMusicOn:n}){return e?t.jsxs("button",{onClick:()=>n(o=>!o),style:{...oe.tRemBtn,...r?oe.tuneOn:{}},title:r?"Soft tunes on":"Play soft tunes",children:[r?t.jsx(mh,{size:14}):t.jsx(Cg,{size:14})," Soft tunes"]}):t.jsx("span",{style:oe.tuneHint,children:"Add a track in Settings → Music"})}const $r="#C9A227",oe={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:860,margin:"0 auto",position:"relative"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:$r,color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"11px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:70,resize:"vertical",lineHeight:1.5},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:$r,color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:12},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:14},goalCard:{textAlign:"left",border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},goalCardBtn:{textAlign:"left",border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"inherit",display:"flex",flexDirection:"column",width:"100%"},cardDelBtn:{position:"absolute",top:8,left:8,border:"none",background:"rgba(0,0,0,0.55)",color:"#fff",width:26,height:26,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",zIndex:2},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 10",background:"var(--surface-2)"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},thumbEmpty:{width:"100%",height:"100%",display:"grid",placeItems:"center"},stamp:{position:"absolute",top:8,right:8,transform:"rotate(6deg)",background:"rgba(76,154,107,0.95)",color:"#fff",fontSize:11,fontWeight:800,letterSpacing:"0.04em",padding:"3px 9px",borderRadius:6,border:"1.5px solid #fff",textTransform:"uppercase"},goalBody:{padding:"11px 13px",display:"flex",flexDirection:"column",gap:8},goalTitle:{fontSize:14,fontWeight:600,lineHeight:1.35,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},goalMeta:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},metaPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:700,padding:"2px 8px",borderRadius:10},metaDim:{fontSize:11,color:"var(--text-3)",fontWeight:500},detailTopRow:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16,gap:10},backBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},deleteBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid rgba(194,83,107,0.4)",background:"rgba(194,83,107,0.08)",color:"#C2536B",padding:"7px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},detailHero:{display:"flex",flexDirection:"column",gap:14,marginBottom:16},heroPhoto:{position:"relative",width:"100%",borderRadius:14,overflow:"hidden",border:"1px solid var(--border)",cursor:"pointer",background:"var(--surface-2)",display:"flex",alignItems:"center",justifyContent:"center",minHeight:120},heroImg:{width:"100%",maxHeight:"62vh",objectFit:"contain",display:"block"},photoEdit:{position:"absolute",bottom:8,right:8,display:"flex",alignItems:"center",gap:5,background:"rgba(0,0,0,0.6)",color:"#fff",fontSize:11,fontWeight:600,padding:"4px 8px",borderRadius:7},heroInfo:{display:"flex",flexDirection:"column",gap:10,alignItems:"center",textAlign:"center"},heroStamp:{alignSelf:"center",background:"rgba(76,154,107,0.14)",color:"#4C9A6B",fontSize:12,fontWeight:800,padding:"4px 10px",borderRadius:8,letterSpacing:"0.03em"},heroTitleRow:{display:"flex",alignItems:"flex-start",gap:8,justifyContent:"center"},heroTitle:{fontSize:23,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.35},heroStats:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",justifyContent:"center"},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",flexShrink:0},iconSave:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},iconCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},writeCard:{background:"var(--surface)",borderRadius:14,padding:16,border:"1px solid var(--border)",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},tuneRow:{display:"flex",justifyContent:"flex-end",marginBottom:10},tuneOn:{background:$r,color:"#fff",borderColor:$r},tuneHint:{fontSize:11,color:"var(--text-3)",fontWeight:500},writeNav:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,marginBottom:12},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center"},navDisabled:{opacity:.35,cursor:"not-allowed"},writeDate:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:150,textAlign:"center"},writeArea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:120,resize:"vertical",lineHeight:1.6},writeSave:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",background:$r,color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},readEntry:{display:"flex",gap:8,padding:"6px 2px"},readText:{fontSize:15,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.6,margin:0,whiteSpace:"pre-wrap"},manifestBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,width:"100%",border:"none",background:"linear-gradient(135deg,#C9A227,#E0BD45)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:800,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 2px 10px rgba(201,162,39,0.35)"},unmanifestBtn:{display:"block",margin:"0 auto",border:"none",background:"none",color:"var(--text-3)",fontSize:12,fontWeight:600,cursor:"pointer",textDecoration:"underline",fontFamily:"inherit"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.6)",zIndex:200,display:"grid",placeItems:"center",padding:16},celebBox:{background:"var(--surface)",color:"var(--text)",borderRadius:20,padding:"36px 30px",textAlign:"center",maxWidth:360,boxShadow:"0 12px 48px rgba(0,0,0,0.3)"},celebEmoji:{fontSize:40,marginBottom:10},celebTitle:{fontSize:24,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginBottom:10,color:$r},celebDream:{fontSize:15,fontStyle:"italic",fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.5,marginBottom:10},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:$r,color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},t369Row:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:"12px 16px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},t369RowLeft:{display:"flex",alignItems:"center",gap:11},t369RowTitle:{fontSize:14,fontWeight:700},t369RowSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},tBadgeOff:{background:"var(--border)",color:"var(--text-3)"},switch:{position:"relative",width:46,height:26,borderRadius:14,border:"none",background:"var(--border)",cursor:"pointer",flexShrink:0,transition:"background 0.2s",padding:0},switchOn:{background:$r},switchKnob:{position:"absolute",top:3,left:3,width:20,height:20,borderRadius:"50%",background:"#fff",transition:"left 0.2s",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},switchKnobOn:{left:23},tCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:16,padding:18,marginBottom:20,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},tHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12,flexWrap:"wrap",marginBottom:14},tTitleWrap:{display:"flex",alignItems:"center",gap:11},tBadge:{display:"inline-flex",alignItems:"center",gap:4,background:"linear-gradient(135deg,#C9A227,#E0BD45)",color:"#fff",fontSize:14,fontWeight:800,padding:"6px 10px",borderRadius:10,letterSpacing:"0.02em",flexShrink:0},tTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},tSub:{fontSize:12,color:"var(--text-3)",marginTop:2},tHeadBtns:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",justifyContent:"flex-end"},tRemBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 12px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tRemOn:{background:$r,color:"#fff",borderColor:$r},tStreakRow:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:14},tStreakBox:{background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px"},tStreakLabel:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,fontWeight:600,color:"var(--text-2)"},tStreakVal:{fontSize:21,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.1},tStreakHint:{fontSize:11,color:"var(--text-3)",marginTop:4,fontWeight:500},tProgTrack:{height:5,borderRadius:4,background:"var(--border)",marginTop:8,overflow:"hidden"},tProgFill:{height:"100%",background:"linear-gradient(90deg,#C2773B,#C9A227)",borderRadius:4,transition:"width 0.4s"},tAffShow:{display:"flex",alignItems:"flex-start",gap:9,background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px",marginBottom:14},tAffText:{flex:1,fontSize:15,fontFamily:"'Fraunces',Georgia,serif",fontStyle:"italic",lineHeight:1.5,margin:0,whiteSpace:"pre-wrap"},tWindows:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:10,marginBottom:14},tWindow:{background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:"11px 12px",transition:"box-shadow 0.2s, border-color 0.2s"},tWindowHead:{display:"flex",alignItems:"center",gap:6},tWindowLabel:{fontSize:13,fontWeight:700},tNow:{fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",marginLeft:"auto"},tWindowTime:{fontSize:10.5,color:"var(--text-3)",marginTop:2,marginBottom:8,fontWeight:500},tDots:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:7},tDot:{width:11,height:11,borderRadius:"50%",border:"1.5px solid var(--border)",background:"transparent",transition:"background 0.2s"},tCount:{fontSize:12,fontWeight:700,color:"var(--text-2)"},tWriteBox:{borderTop:"1px solid var(--border)",paddingTop:14},tNote:{fontSize:12,fontWeight:600,color:"#C2773B",background:"rgba(194,119,59,0.10)",borderRadius:8,padding:"8px 11px",marginBottom:9},tPasteWarn:{fontSize:11.5,color:"#C2536B",fontWeight:600,marginTop:6},tWriteActions:{display:"flex",gap:8,marginTop:10},tUndoBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"11px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tClosed:{fontSize:12.5,color:"var(--text-3)",textAlign:"center",padding:"10px 4px",lineHeight:1.5},tDoneMsg:{fontSize:13,fontWeight:700,color:"#4C9A6B",textAlign:"center",padding:"10px 4px"}},gd=[{id:"meditation",label:"Meditation Hub",icon:Iy,color:"#8268B0"},{id:"visualization",label:"Visualization",icon:hs,color:"#3A7CA5"}],Mp=e=>{if(!e)return"";const r=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(r))return r;const n=r.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},T1=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>1e3?(a=a*1e3/l,l=1e3):a>1e3&&(l=l*1e3/a,a=1e3);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),r(d.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)}),I1=e=>({id:null,kind:e,title:"",url:"",image:""});function B1(){const[e,r]=c.useState("meditation"),[n,o]=c.useState([]),[i,s]=c.useState(!1),[l,a]=c.useState(null),[d,g]=c.useState(null),m=c.useCallback(async()=>{try{o(await F.getMedia())}catch{}s(!0)},[]);c.useEffect(()=>{m()},[m]);const{deleteItem:f,toasts:h,handleUndo:B,handleDismiss:R}=ur(F.deleteMedia,F.restoreMedia,m);c.useEffect(()=>{if(!d)return;const T=10,E=setInterval(()=>{document.hidden||F.addScreenTime("mindscape",T).catch(()=>{})},T*1e3);return()=>clearInterval(E)},[d]);const z=gd.find(T=>T.id===e),S=n.filter(T=>T.kind===e),p=T=>a({id:T.id,kind:T.kind,title:T.title,url:`https://youtu.be/${T.youtube_id}`,image:T.image}),b=async T=>{var w;const E=(w=T.target.files)==null?void 0:w[0];if(E){try{const j=await T1(E);a(Y=>({...Y,image:j}))}catch{}T.target.value=""}},u=l?[!l.title.trim()&&"a title",!l.image&&"an image",!Mp(l.url)&&"a valid YouTube link"].filter(Boolean):[],k=!!l&&u.length===0,x=async()=>{if(!k)return;const T={kind:l.kind,title:l.title.trim(),image:l.image,youtube_id:Mp(l.url)};l.id?await F.updateMedia(l.id,T):await F.createMedia(T),a(null),m()};return t.jsxs("div",{style:gt.page,children:[d&&t.jsx("iframe",{title:"mindscape-audio",src:`https://www.youtube.com/embed/${d.youtube_id}?autoplay=1&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}}),t.jsxs("div",{style:gt.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:gt.eyebrow,children:"Anvil · Mindscape"}),t.jsx("h1",{style:gt.h1,children:"Mindscape"}),t.jsx("div",{style:gt.subhead,children:"Close your eyes and listen — guided meditation and visualization."})]}),!l&&t.jsxs("button",{onClick:()=>a(I1(e)),style:{...gt.addBtn,background:z.color},children:[t.jsx(st,{size:15})," Add"]})]}),t.jsx("div",{style:gt.tabs,children:gd.map(T=>{const E=T.icon,w=e===T.id;return t.jsxs("button",{onClick:()=>{r(T.id),a(null)},style:{...gt.tab,...w?{background:T.color,color:"#fff",borderColor:T.color}:{}},children:[t.jsx(E,{size:15})," ",T.label]},T.id)})}),l&&t.jsxs("div",{style:gt.card,children:[t.jsx("div",{style:gt.cardTitle,children:l.id?"Edit":`New ${gd.find(T=>T.id===l.kind).label}`}),t.jsx("input",{placeholder:"YouTube link (plays as audio only)",value:l.url,onChange:T=>a({...l,url:T.target.value}),style:gt.input,autoFocus:!0}),t.jsx("input",{placeholder:"Title (required)",value:l.title,onChange:T=>a({...l,title:T.target.value}),style:{...gt.input,marginTop:8}}),t.jsxs("label",{style:gt.photoPick,children:[l.image?t.jsx("img",{src:l.image,alt:"",style:gt.photoPreview}):t.jsxs("span",{style:gt.photoEmpty,children:[t.jsx(ja,{size:18})," Add cover image (required)"]}),t.jsx("input",{type:"file",accept:"image/*",onChange:b,style:{display:"none"}})]}),!k&&t.jsxs("div",{style:gt.warn,children:["Add ",u.join(", ")," to save."]}),t.jsxs("div",{style:gt.formActions,children:[t.jsxs("button",{onClick:()=>a(null),style:gt.cancelBtn,children:[t.jsx(Ae,{size:14})," Cancel"]}),t.jsxs("button",{onClick:x,disabled:!k,style:{...gt.saveBtn,background:k?z.color:"var(--border)",color:k?"#fff":"var(--text-3)",cursor:k?"pointer":"not-allowed"},children:[t.jsx(He,{size:15})," ",l.id?"Save":"Add"]})]})]}),i?S.length===0?t.jsxs("div",{style:gt.empty,children:["Nothing here yet — add a ",z.label.toLowerCase()," track."]}):t.jsx("div",{style:gt.grid,children:S.map(T=>{const E=(d==null?void 0:d.id)===T.id;return t.jsxs("div",{style:gt.mediaCard,children:[t.jsxs("button",{onClick:()=>g(E?null:T),style:gt.coverBtn,title:E?"Pause":"Play",children:[t.jsx("img",{src:T.image,alt:"",style:gt.cover}),t.jsx("span",{style:{...gt.playOverlay,background:E?"rgba(0,0,0,0.45)":"rgba(0,0,0,0.28)"},children:t.jsx("span",{style:{...gt.playCircle,background:z.color},children:E?t.jsx(hh,{size:20,color:"#fff",fill:"#fff"}):t.jsx(Xl,{size:20,color:"#fff",fill:"#fff"})})}),E&&t.jsxs("span",{style:gt.nowPlaying,children:[t.jsx(mh,{size:11})," Playing"]})]}),t.jsxs("div",{style:gt.mediaBody,children:[t.jsx("div",{style:gt.mediaTitle,children:T.title}),t.jsxs("div",{style:gt.cardActions,children:[t.jsx("button",{onClick:()=>p(T),style:gt.iconBtn,title:"Edit",children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:()=>{(d==null?void 0:d.id)===T.id&&g(null),f(T.id,T.title)},style:gt.iconBtn,title:"Delete",children:t.jsx(Ae,{size:14})})]})]})]},T.id)})}):t.jsx("div",{style:gt.muted,children:"Loading…"}),t.jsx(pr,{toasts:h,onUndo:B,onDismiss:R})]})}const gt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:900,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},tabs:{display:"flex",gap:8,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:200,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},warn:{fontSize:12,color:"#C2773B",marginTop:8,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,fontFamily:"inherit"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:16},mediaCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},coverBtn:{position:"relative",border:"none",padding:0,cursor:"pointer",display:"block",width:"100%",aspectRatio:"1",background:"var(--surface-2)"},cover:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center"},playCircle:{width:46,height:46,borderRadius:"50%",display:"grid",placeItems:"center",boxShadow:"0 2px 10px rgba(0,0,0,0.3)"},nowPlaying:{position:"absolute",bottom:8,left:8,display:"flex",alignItems:"center",gap:4,background:"rgba(0,0,0,0.65)",color:"#fff",fontSize:11,fontWeight:700,padding:"3px 8px",borderRadius:7},mediaBody:{padding:"12px 14px",display:"flex",alignItems:"flex-start",gap:8},mediaTitle:{flex:1,fontSize:14.5,fontWeight:600,lineHeight:1.4,minWidth:0,wordBreak:"break-word"},cardActions:{display:"flex",gap:2,flexShrink:0,marginTop:1},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},Ph={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},R1=Object.keys(Ph),E1="#9A7B4F";function F1(e=760){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const A1=()=>{const e=new Date,r=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${r(e.getMonth()+1)}-${r(e.getDate())}`},D1=e=>{if(!e)return"";const r=new Date(e+"T00:00:00");return isNaN(r)?e:r.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},ud=e=>(e||"").slice(0,4),W1=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>r(o.result),o.onerror=n,o.readAsDataURL(e)}),M1=(e,r=1e3)=>new Promise((n,o)=>{const i=new Image;i.onload=()=>{let{width:s,height:l}=i;s>l&&s>r?(l=l*r/s,s=r):l>r&&(s=s*r/l,l=r);const a=document.createElement("canvas");a.width=s,a.height=l,a.getContext("2d").drawImage(i,0,0,s,l),n(a.toDataURL("image/jpeg",.82))},i.onerror=o,i.src=e});function L1({src:e,onCancel:r,onCrop:n,onKeepOriginal:o}){const[l,a]=c.useState(null),[d,g]=c.useState(1),[m,f]=c.useState({x:0,y:0}),h=c.useRef(null);c.useEffect(()=>{const x=new Image;x.onload=()=>{a(x);const T=Math.max(300/x.width,300/x.height);g(1),x._base=T;const E=x.width*T,w=x.height*T;f({x:(300-E)/2,y:(300-w)/2})},x.src=e},[e]);const B=l?l._base*d:1,R=l?l.width*B:0,z=l?l.height*B:0,S=(x,T,E)=>({x:Math.min(0,Math.max(300-T,x.x)),y:Math.min(0,Math.max(300-E,x.y))});c.useEffect(()=>{l&&f(x=>S(x,R,z))},[d,l]);const p=x=>{const T=x.touches?x.touches[0]:x;h.current={sx:T.clientX,sy:T.clientY,ox:m.x,oy:m.y}},b=x=>{if(!h.current)return;const T=x.touches?x.touches[0]:x,E=h.current.ox+(T.clientX-h.current.sx),w=h.current.oy+(T.clientY-h.current.sy);f(S({x:E,y:w},R,z))},u=()=>{h.current=null},k=()=>{if(!l)return;const x=document.createElement("canvas");x.width=700,x.height=700;const T=x.getContext("2d"),E=700/300;T.drawImage(l,m.x*E,m.y*E,R*E,z*E),n(x.toDataURL("image/jpeg",.85))};return t.jsx("div",{style:hr.overlay,onClick:r,children:t.jsxs("div",{style:hr.box,onClick:x=>x.stopPropagation(),children:[t.jsxs("div",{style:hr.head,children:["Crop to square",t.jsx("button",{onClick:r,style:hr.close,children:t.jsx(Ae,{size:16})})]}),t.jsxs("div",{style:{...hr.frame,width:300,height:300},onMouseDown:p,onMouseMove:b,onMouseUp:u,onMouseLeave:u,onTouchStart:p,onTouchMove:b,onTouchEnd:u,children:[l&&t.jsx("img",{src:e,alt:"",draggable:!1,style:{position:"absolute",left:m.x,top:m.y,width:R,height:z,userSelect:"none",pointerEvents:"none"}}),t.jsx("div",{style:hr.grid})]}),t.jsxs("div",{style:hr.zoomRow,children:[t.jsx("span",{style:hr.zoomLbl,children:"Zoom"}),t.jsx("input",{type:"range",min:"1",max:"3",step:"0.01",value:d,onChange:x=>g(parseFloat(x.target.value)),style:{flex:1}})]}),t.jsx("div",{style:hr.hint,children:"Drag to reposition · slide to zoom"}),t.jsxs("div",{style:hr.actions,children:[t.jsx("button",{onClick:r,style:hr.cancel,children:"Cancel"}),t.jsx("button",{onClick:o,style:hr.keep,children:"Keep original"}),t.jsxs("button",{onClick:k,style:hr.apply,children:[t.jsx(He,{size:15})," Square crop"]})]})]})})}const _1={id:null,title:"",date:A1(),pillar:"",reward:"",image:"",note:""};function $1(){const e=Jn(),r=w=>Or(w,e.code),n=F1(),[o,i]=c.useState([]),[s,l]=c.useState(null),[a,d]=c.useState(!1),[g,m]=c.useState(null),f=c.useRef(null),h=c.useCallback(()=>{F.getAchievements().then(i).catch(()=>{})},[]);c.useEffect(()=>{h()},[h]);const{deleteItem:B,toasts:R,handleUndo:z,handleDismiss:S}=ur(F.deleteAchievement,F.restoreAchievement,h),p=()=>l({..._1}),b=w=>l({id:w.id,title:w.title,date:w.date,pillar:w.pillar||"",reward:w.reward?String(w.reward):"",image:w.image||"",note:w.note||""}),u=async w=>{var Y;const j=(Y=w.target.files)==null?void 0:Y[0];if(j){try{const q=await W1(j);m(q)}catch{}f.current&&(f.current.value="")}},k=async()=>{let w=g;try{g&&(w=await M1(g))}catch{}l(j=>({...j,image:w})),m(null)},x=s&&s.title.trim()&&s.date,T=async()=>{if(!x||a)return;d(!0);const w={title:s.title.trim(),date:s.date,pillar:s.pillar||null,reward:parseFloat(s.reward)||0,image:s.image||null,note:s.note.trim()};try{s.id?await F.updateAchievement(s.id,w):await F.createAchievement(w),l(null),h()}catch{}finally{d(!1)}},E=o.reduce((w,j)=>w+(j.reward||0),0);return t.jsxs("div",{style:Ke.page,children:[t.jsxs("div",{style:Ke.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:Ke.eyebrow,children:"Anvil · Achievements"}),t.jsx("h1",{style:Ke.h1,children:"Achievements"}),t.jsx("div",{style:Ke.subhead,children:"Your tree of wins — newest at the top, scroll down through the past."})]}),t.jsxs("div",{style:Ke.headRight,children:[E>0&&t.jsxs("div",{style:Ke.totalBadge,children:[t.jsx(fs,{size:14,color:"#C9A227"})," ",r(E)," earned"]}),t.jsxs("button",{onClick:p,style:Ke.addBtn,children:[t.jsx(st,{size:15})," Add achievement"]})]})]}),o.length===0?t.jsxs("div",{style:Ke.empty,children:[t.jsx(Yr,{size:30,color:"var(--text-3)"}),t.jsx("div",{style:{marginTop:10},children:"No achievements yet."}),t.jsx("div",{style:Ke.emptySub,children:"Plant your first win — it'll grow into a timeline you can look back on."})]}):t.jsxs("div",{style:{...Ke.timeline,paddingLeft:0},children:[t.jsx("div",{style:{...Ke.trunk,left:n?13:"50%"}}),o.map((w,j)=>{const Y=Ph[w.pillar]||E1,q=!n&&j%2===1,te=o[j-1],he=!te||ud(te.date)!==ud(w.date);return t.jsxs("div",{children:[he&&t.jsx("div",{style:{...Ke.yearRow,justifyContent:n?"flex-start":"center",paddingLeft:n?36:0},children:t.jsx("span",{style:Ke.yearChip,children:ud(w.date)})}),t.jsxs("div",{style:{...Ke.row,gridTemplateColumns:n?"28px 1fr":"1fr 44px 1fr"},children:[!n&&t.jsx("div",{style:{gridColumn:1,display:"flex",justifyContent:"flex-end"},children:q&&t.jsx(Lp,{a:w,color:Y,side:"left",money:r,onEdit:()=>b(w),onDelete:()=>B(w.id,w.title)})}),t.jsx("div",{style:{gridColumn:n?1:2,display:"flex",justifyContent:"center",position:"relative"},children:t.jsx("div",{style:{...Ke.node,borderColor:Y,background:"var(--surface)"},children:t.jsx("div",{style:{...Ke.nodeDot,background:Y}})})}),t.jsx("div",{style:{gridColumn:n?2:3,display:"flex",justifyContent:"flex-start"},children:(n||!q)&&t.jsx(Lp,{a:w,color:Y,side:n?"mobile":"right",money:r,onEdit:()=>b(w),onDelete:()=>B(w.id,w.title)})})]})]},w.id)})]}),s&&t.jsx("div",{style:Ke.overlay,onClick:()=>l(null),children:t.jsxs("div",{style:Ke.modal,onClick:w=>w.stopPropagation(),children:[t.jsxs("div",{style:Ke.modalHead,children:[t.jsx("div",{style:Ke.modalTitle,children:s.id?"Edit achievement":"New achievement"}),t.jsx("button",{onClick:()=>l(null),style:Ke.iconBtn,children:t.jsx(Ae,{size:16})})]}),t.jsx("label",{style:Ke.label,children:"Title *"}),t.jsx("input",{autoFocus:!0,value:s.title,onChange:w=>l(j=>({...j,title:w.target.value})),placeholder:"What did you achieve?",style:Ke.input}),t.jsxs("div",{style:Ke.formRow,children:[t.jsxs("div",{style:{flex:1},children:[t.jsxs("label",{style:Ke.label,children:[t.jsx(Dy,{size:12})," Date *"]}),t.jsx("input",{type:"date",value:s.date,onChange:w=>l(j=>({...j,date:w.target.value})),style:Ke.input})]}),t.jsxs("div",{style:{flex:1},children:[t.jsx("label",{style:Ke.label,children:"Pillar (optional)"}),t.jsxs("select",{value:s.pillar,onChange:w=>l(j=>({...j,pillar:w.target.value})),style:Ke.input,children:[t.jsx("option",{value:"",children:"— None —"}),R1.map(w=>t.jsx("option",{value:w,children:w},w))]})]})]}),t.jsxs("label",{style:Ke.label,children:[t.jsx(fs,{size:12})," Reward (",e.code,") — optional gesture of appreciation"]}),t.jsx("input",{type:"number",min:"0",step:"any",value:s.reward,onChange:w=>l(j=>({...j,reward:w.target.value})),placeholder:"0",style:Ke.input}),t.jsx("label",{style:Ke.label,children:"Photo (optional)"}),s.image?t.jsxs("div",{style:Ke.imgWrap,children:[t.jsx("img",{src:s.image,alt:"",style:Ke.imgPreview}),t.jsx("button",{onClick:()=>l(w=>({...w,image:""})),style:Ke.imgRemove,children:t.jsx(Ae,{size:14})})]}):t.jsxs("button",{onClick:()=>{var w;return(w=f.current)==null?void 0:w.click()},style:Ke.uploadBtn,children:[t.jsx(qy,{size:15})," Add a photo"]}),t.jsx("input",{ref:f,type:"file",accept:"image/*",onChange:u,style:{display:"none"}}),t.jsx("label",{style:Ke.label,children:"Note (optional)"}),t.jsx("textarea",{value:s.note,onChange:w=>l(j=>({...j,note:w.target.value})),placeholder:"The story behind it…",rows:3,style:{...Ke.input,resize:"vertical",fontFamily:"inherit"}}),t.jsxs("div",{style:Ke.modalActions,children:[t.jsx("button",{onClick:()=>l(null),style:Ke.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:T,disabled:!x||a,style:{...Ke.saveBtn,...!x||a?{opacity:.5,cursor:"not-allowed"}:{}},children:[t.jsx(He,{size:15})," ",s.id?"Save":"Add"]})]})]})}),g&&t.jsx(L1,{src:g,onCancel:()=>m(null),onKeepOriginal:k,onCrop:w=>{l(j=>({...j,image:w})),m(null)}}),t.jsx(pr,{toasts:R,onUndo:z,onDismiss:S})]})}function Lp({a:e,color:r,side:n,money:o,onEdit:i,onDelete:s}){return t.jsxs("div",{style:{...Ke.card,borderTop:`3px solid ${r}`,textAlign:n==="left"?"right":"left"},children:[t.jsxs("div",{style:{...Ke.cardTop,flexDirection:n==="left"?"row-reverse":"row"},children:[t.jsx("span",{style:{...Ke.dateChip,background:`${r}1A`,color:r},children:D1(e.date)}),t.jsxs("div",{style:{display:"flex",gap:2},children:[t.jsx("button",{onClick:i,style:Ke.ghostBtn,title:"Edit",children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:s,style:Ke.ghostBtn,title:"Delete",children:t.jsx(Ae,{size:14})})]})]}),t.jsx("div",{style:Ke.cardTitle,children:e.title}),e.image&&t.jsx("img",{src:e.image,alt:"",style:Ke.cardImg}),e.note&&t.jsx("div",{style:Ke.cardNote,children:e.note}),e.reward>0&&t.jsxs("div",{style:{...Ke.rewardBadge,marginLeft:n==="left"?"auto":0},children:[t.jsx(fs,{size:13})," ",o(e.reward)]})]})}const Ke={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},totalBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{textAlign:"center",color:"var(--text-3)",padding:"60px 16px",fontSize:14,fontWeight:600},emptySub:{fontSize:12.5,fontWeight:400,marginTop:6,maxWidth:320,marginInline:"auto",lineHeight:1.5},timeline:{position:"relative",maxWidth:1e3,margin:"0 auto",paddingBottom:30},trunk:{position:"absolute",top:8,bottom:8,width:3,background:"linear-gradient(to bottom, var(--border), var(--border))",transform:"translateX(-1.5px)",borderRadius:2},yearRow:{display:"flex",margin:"6px 0 12px"},yearChip:{fontSize:11.5,fontWeight:800,letterSpacing:"0.06em",color:"var(--text-2)",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:"4px 12px",position:"relative",zIndex:2},row:{display:"grid",alignItems:"center",gap:8,marginBottom:16},node:{width:20,height:20,borderRadius:"50%",border:"3px solid",display:"grid",placeItems:"center",zIndex:2,boxShadow:"0 0 0 4px var(--bg)"},nodeDot:{width:7,height:7,borderRadius:"50%"},card:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.06)",maxWidth:420,width:"100%",boxSizing:"border-box"},cardTop:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,marginBottom:7},dateChip:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,whiteSpace:"nowrap"},cardTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",lineHeight:1.3,wordBreak:"break-word"},cardImg:{width:"100%",maxHeight:220,objectFit:"cover",borderRadius:9,marginTop:9,display:"block"},cardNote:{fontSize:12.5,color:"var(--text-2)",marginTop:7,lineHeight:1.5,whiteSpace:"pre-wrap",wordBreak:"break-word"},rewardBadge:{display:"inline-flex",alignItems:"center",gap:5,marginTop:9,background:"rgba(201,162,39,0.12)",color:"#8A6E1A",border:"1px solid rgba(201,162,39,0.3)",padding:"3px 10px",borderRadius:14,fontSize:12,fontWeight:700},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:6},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:60,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:460,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},label:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)"},formRow:{display:"flex",gap:10},uploadBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",border:"1.5px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"11px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},imgWrap:{position:"relative",borderRadius:10,overflow:"hidden"},imgPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block",borderRadius:10},imgRemove:{position:"absolute",top:8,right:8,border:"none",background:"rgba(0,0,0,0.55)",color:"#fff",width:28,height:28,borderRadius:"50%",cursor:"pointer",display:"grid",placeItems:"center"},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},hr={overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.62)",zIndex:300,display:"grid",placeItems:"center",padding:16},box:{background:"var(--surface)",borderRadius:16,padding:"18px",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",maxWidth:"92vw"},head:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},close:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},frame:{position:"relative",overflow:"hidden",borderRadius:12,background:"#000",cursor:"grab",touchAction:"none",margin:"0 auto",maxWidth:"84vw"},grid:{position:"absolute",inset:0,pointerEvents:"none",boxShadow:"inset 0 0 0 1px rgba(255,255,255,0.5)",backgroundImage:"linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",backgroundSize:"33.33% 33.33%"},zoomRow:{display:"flex",alignItems:"center",gap:10,marginTop:14},zoomLbl:{fontSize:12,fontWeight:700,color:"var(--text-2)"},hint:{fontSize:11,color:"var(--text-3)",textAlign:"center",marginTop:8},actions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:14,flexWrap:"wrap"},cancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},keep:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},apply:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}};function P1(e=760){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const ll=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},N1=e=>e?new Date(e+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"",Qr="#C9772E",Ti=[{id:"todo",label:"Want to",color:"#3A7CA5"},{id:"doing",label:"Enjoying",color:"#C9772E"},{id:"done",label:"Satisfied",color:"#4C9A6B"}],O1=[{id:"text",label:"Text"},{id:"number",label:"Number"},{id:"link",label:"Link"}],pd=e=>(e&&typeof e=="object"?e.type:"text")||"text",Rn=e=>(e&&typeof e=="object"?e.name:e)||"";function H1(){const e=P1(),[r,n]=c.useState([]),[o,i]=c.useState(null),[s,l]=c.useState(!1),[a,d]=c.useState(null),[g,m]=c.useState(null),[f,h]=c.useState(null),[B,R]=c.useState(null),[z,S]=c.useState(null),[p,b]=c.useState([]),u=c.useRef({}),k=c.useCallback(()=>{F.getDelight().then(O=>{n(O),i(ee=>{var fe;return ee&&O.some(M=>M.id===ee)?ee:((fe=O[0])==null?void 0:fe.id)??null}),l(!0)}).catch(()=>l(!0))},[]);c.useEffect(()=>{k()},[k]),c.useEffect(()=>{b([])},[o]);const{deleteItem:x,toasts:T,handleUndo:E,handleDismiss:w}=ur(F.deleteDelightItem,F.restoreDelightItem,k),j=r.find(O=>O.id===o)||null,Y=c.useMemo(()=>{const O={todo:[],doing:[],done:[]};return((j==null?void 0:j.items)||[]).forEach(ee=>{(O[ee.status]||O.todo).push(ee)}),Object.values(O).forEach(ee=>ee.sort((fe,M)=>fe.position-M.position||fe.id-M.id)),O},[j]),q=O=>/^tags?$/i.test(Rn(O).trim()),te=O=>((j==null?void 0:j.columns)||[]).filter(q).flatMap(ee=>(O.fields[Rn(ee)]||"").split(",").map(fe=>fe.trim()).filter(Boolean)),he=c.useMemo(()=>{const O=new Set;return((j==null?void 0:j.items)||[]).forEach(ee=>(j.columns||[]).filter(q).forEach(fe=>(ee.fields[Rn(fe)]||"").split(",").map(M=>M.trim()).filter(Boolean).forEach(M=>O.add(M)))),[...O].sort((ee,fe)=>ee.localeCompare(fe))},[j]),G=c.useMemo(()=>{const O={};return((j==null?void 0:j.columns)||[]).forEach(ee=>{const fe=Rn(ee);if(q(ee))return;const M=new Set;((j==null?void 0:j.items)||[]).forEach(y=>{const ne=(y.fields[fe]||"").trim();ne&&M.add(ne)}),O[fe]=[...M].sort((y,ne)=>y.localeCompare(ne))}),O},[j]),ue=O=>p.length===0||te(O).some(ee=>p.includes(ee)),pe=O=>b(ee=>ee.includes(O)?ee.filter(fe=>fe!==O):[...ee,O]),ze=(O,ee,fe)=>{for(const M of Ti){const y=u.current[M.id];if(!y)continue;const ne=y.getBoundingClientRect();if(O>=ne.left&&O<=ne.right&&ee>=ne.top&&ee<=ne.bottom){const D=[...y.querySelectorAll("[data-card]")].filter(ve=>ve.dataset.id!==String(fe));let ge=D.length;for(let ve=0;ve<D.length;ve++){const We=D[ve].getBoundingClientRect();if(ee<We.top+We.height/2){ge=ve;break}}return{status:M.id,index:ge}}}return null},re=(O,ee)=>{if(O.target.closest("button"))return;const fe=O.clientX,M=O.clientY,y=O.currentTarget;let ne=!1,D=null,ge=null;const ve=Xe=>{if(!ne){if(Math.hypot(Xe.clientX-fe,Xe.clientY-M)<6)return;ne=!0;const dt=y.getBoundingClientRect();ge={id:ee.id,item:ee,w:dt.width,offX:fe-dt.left,offY:M-dt.top}}ge={...ge,x:Xe.clientX,y:Xe.clientY},R(ge),D=ze(Xe.clientX,Xe.clientY,ee.id)||D,S(D)},We=()=>{window.removeEventListener("pointermove",ve),window.removeEventListener("pointerup",We),ne&&D&&U(ee,D),R(null),S(null)};window.addEventListener("pointermove",ve),window.addEventListener("pointerup",We)},U=(O,ee)=>{const fe={};Ti.forEach(D=>{fe[D.id]=(Y[D.id]||[]).filter(ge=>ge.id!==O.id)});const M=fe[ee.status]||[];let y;if(p.length){const D=M.filter(ue);y=ee.index<D.length?M.indexOf(D[ee.index]):M.length}else y=Math.max(0,Math.min(ee.index,M.length));fe[ee.status]=[...M.slice(0,y),{...O,status:ee.status},...M.slice(y)];const ne=[];Ti.forEach(D=>(fe[D.id]||[]).forEach((ge,ve)=>ne.push({id:ge.id,status:D.id,position:ve}))),n(D=>D.map(ge=>ge.id===o?{...ge,items:ne.map(ve=>({...ge.items.find(We=>We.id===ve.id),status:ve.status,position:ve.position}))}:ge)),F.arrangeDelight(o,ne).then(k).catch(k),ee.status==="done"&&O.status!=="done"&&h({item:O,date:ll(),note:""})},de=async O=>{window.confirm(`Delete "${O.name}" and all its items?`)&&(await F.deleteCollection(O.id),k())},X=()=>({name:"",type:"text"}),I=()=>d({id:null,name:"",columns:[X(),X()]}),A=O=>d({id:O.id,name:O.name,columns:O.columns.length?O.columns.map(ee=>({name:Rn(ee),type:pd(ee)})):[X()]}),P=async()=>{const O=a.name.trim();if(!O)return;const ee=a.columns.map(fe=>({name:fe.name.trim(),type:fe.type||"text"})).filter(fe=>fe.name);a.id?await F.updateCollection(a.id,{name:O,columns:ee}):await F.createCollection({name:O,columns:ee}),d(null),k()},$=(O="todo")=>m({id:null,name:"",fields:{},status:O}),ae=O=>m({id:O.id,name:O.name,fields:{...O.fields},status:O.status}),ce=async()=>{const O=g.name.trim();if(!O||!j)return;const ee=g.id?(j.items||[]).find(ne=>ne.id===g.id):null,fe=(ee==null?void 0:ee.status)==="done",M={name:O,fields:g.fields,status:g.status};let y;if(g.id?y=await F.updateDelightItem(g.id,M):y=await F.createDelightItem(j.id,M),m(null),await k(),g.status==="done"&&!fe){const ne=De(y,j.id,O);h({item:ne||{id:g.id,name:O},date:ll(),note:""})}},De=(O,ee,fe)=>{const M=Array.isArray(O)?O.find(ne=>ne.id===ee):null;if(!M)return null;const y=(M.items||[]).filter(ne=>ne.name===fe&&ne.status==="done");return y.length?y[y.length-1]:null},Q=async()=>{var O;if(!((O=f==null?void 0:f.item)!=null&&O.id)){h(null);return}await F.updateDelightItem(f.item.id,{completed_date:f.date||ll(),completion_note:f.note||""}),h(null),k()},ie=({it:O})=>{const ee=j.columns.filter(M=>O.fields[Rn(M)]&&!q(M)),fe=te(O);return t.jsxs("div",{"data-card":!0,"data-id":O.id,onPointerDown:M=>re(M,O),style:ke.itemCard,children:[t.jsxs("div",{style:ke.itemCardTop,children:[t.jsx(ql,{size:13,style:{color:"var(--text-3)",flexShrink:0}}),t.jsx("span",{style:ke.itemName,children:O.name}),t.jsx("button",{onClick:()=>ae(O),style:ke.ghostBtn,children:t.jsx(vt,{size:12})}),t.jsx("button",{onClick:()=>x(O.id,O.name),style:ke.ghostBtn,children:t.jsx(Ae,{size:13})})]}),ee.map(M=>{const y=Rn(M),ne=O.fields[y];return t.jsxs("div",{style:ke.itemField,children:[t.jsx("span",{style:ke.fieldLabel,children:y}),pd(M)==="link"?t.jsx("a",{href:/^https?:\/\//i.test(ne)?ne:`https://${ne}`,target:"_blank",rel:"noreferrer",style:{minWidth:0,wordBreak:"break-word",color:Qr},onClick:D=>D.stopPropagation(),children:ne}):t.jsx("span",{style:{minWidth:0,wordBreak:"break-word"},children:ne})]},y)}),fe.length>0&&t.jsx("div",{style:ke.tagWrap,children:fe.map((M,y)=>t.jsx("span",{style:ke.tag,children:M},y))}),O.status==="done"&&O.completed_date&&t.jsxs("div",{style:ke.doneMeta,children:[t.jsxs("span",{style:ke.doneDate,children:["✓ ",N1(O.completed_date)]}),O.completion_note&&t.jsx("span",{style:ke.doneNote,children:O.completion_note})]})]})};return t.jsxs("div",{style:ke.page,children:[t.jsxs("div",{style:ke.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:ke.eyebrow,children:"Anvil · Delights"}),t.jsx("h1",{style:ke.h1,children:"Delights"}),t.jsx("div",{style:ke.subhead,children:"Books, films, places, food — track what you want to enjoy and how you felt."})]}),t.jsxs("button",{onClick:I,style:ke.addColBtn,children:[t.jsx(st,{size:15})," New list"]})]}),t.jsxs("div",{style:ke.tabs,children:[r.map(O=>t.jsxs("button",{onClick:()=>i(O.id),style:{...ke.tab,...O.id===o?ke.tabOn:{}},children:[O.name,t.jsx("span",{style:ke.tabCount,children:O.items.length})]},O.id)),t.jsx("button",{onClick:I,style:ke.tabAdd,title:"New list",children:t.jsx(st,{size:15})})]}),s?j?t.jsxs("div",{children:[t.jsxs("div",{style:ke.colHead,children:[t.jsx("h2",{style:ke.colTitle,children:j.name}),t.jsxs("div",{style:ke.colActions,children:[t.jsxs("button",{onClick:()=>$(),style:ke.primaryBtn,children:[t.jsx(st,{size:14})," Add"]}),t.jsx("button",{onClick:()=>A(j),style:ke.ghostBtn,title:"Edit list & columns",children:t.jsx(Oy,{size:15})}),t.jsx("button",{onClick:()=>de(j),style:ke.ghostBtn,title:"Delete list",children:t.jsx(Ae,{size:16})})]})]}),he.length>0&&t.jsxs("div",{style:ke.filterBar,children:[t.jsx("span",{style:ke.filterLabel,children:"Tags"}),t.jsx("button",{onClick:()=>b([]),style:{...ke.filterChip,...p.length===0?ke.filterChipOn:{}},children:"All"}),he.map(O=>t.jsx("button",{onClick:()=>pe(O),style:{...ke.filterChip,...p.includes(O)?ke.filterChipOn:{}},children:O},O))]}),t.jsx("div",{style:{...ke.board,gridTemplateColumns:e?"1fr":"repeat(3, 1fr)"},children:Ti.map(O=>{const ee=(Y[O.id]||[]).filter(ue),fe=B?ee.filter(y=>y.id!==B.id):ee,M=z&&z.status===O.id;return t.jsxs("div",{ref:y=>u.current[O.id]=y,style:{...ke.lane,...M?{outline:`2px dashed ${O.color}`,outlineOffset:-2}:{}},children:[t.jsxs("div",{style:ke.laneHead,children:[t.jsx("span",{style:{...ke.laneDot,background:O.color}}),t.jsx("span",{style:ke.laneLabel,children:O.label}),t.jsx("span",{style:ke.laneCount,children:ee.length}),t.jsx("button",{onClick:()=>$(O.id),style:ke.laneAdd,title:`Add to ${O.label}`,children:t.jsx(st,{size:13})})]}),t.jsxs("div",{style:ke.laneBody,children:[fe.map((y,ne)=>t.jsxs("div",{children:[M&&z.index===ne&&t.jsx("div",{style:{...ke.insertLine,background:O.color}}),t.jsx(ie,{it:y})]},y.id)),M&&z.index>=fe.length&&t.jsx("div",{style:{...ke.insertLine,background:O.color}}),fe.length===0&&!M&&t.jsx("div",{style:ke.laneEmpty,children:"Drop here"})]})]},O.id)})})]}):t.jsxs("div",{style:ke.empty,children:[t.jsx(zg,{size:28,color:"var(--text-3)"}),t.jsx("div",{style:{marginTop:10},children:"No lists yet."}),t.jsxs("button",{onClick:I,style:{...ke.addColBtn,marginTop:14},children:[t.jsx(st,{size:15})," Create your first list"]})]}):t.jsx("div",{style:ke.muted,children:"Loading…"}),B&&t.jsx("div",{style:{...ke.ghost,width:B.w,left:B.x-B.offX,top:B.y-B.offY},children:t.jsxs("div",{style:ke.itemCardTop,children:[t.jsx(ql,{size:13,style:{color:"var(--text-3)",flexShrink:0}}),t.jsx("span",{style:ke.itemName,children:B.item.name})]})}),a&&t.jsx("div",{style:ke.overlay,onClick:()=>d(null),children:t.jsxs("div",{style:ke.modal,onClick:O=>O.stopPropagation(),children:[t.jsxs("div",{style:ke.modalHead,children:[t.jsx("span",{style:ke.modalTitle,children:a.id?"Edit list":"New list"}),t.jsx("button",{onClick:()=>d(null),style:ke.iconBtn,children:t.jsx(Ae,{size:16})})]}),t.jsx("label",{style:ke.label,children:"List name *"}),t.jsx("input",{autoFocus:!0,value:a.name,onChange:O=>d(ee=>({...ee,name:O.target.value})),placeholder:"e.g. Gardens, Cafés, Trips…",style:ke.input}),t.jsx("label",{style:ke.label,children:"Columns"}),t.jsx("div",{style:ke.muted2,children:"Name the details you want to track (e.g. Author, Distance, Tag)."}),a.columns.map((O,ee)=>t.jsxs("div",{style:ke.colRow,children:[t.jsx("input",{value:O.name,placeholder:`Column ${ee+1}`,onChange:fe=>d(M=>{const y=[...M.columns];return y[ee]={...y[ee],name:fe.target.value},{...M,columns:y}}),style:{...ke.input,marginBottom:0,flex:1}}),t.jsx("select",{value:O.type,onChange:fe=>d(M=>{const y=[...M.columns];return y[ee]={...y[ee],type:fe.target.value},{...M,columns:y}}),style:ke.colTypeSelect,children:O1.map(fe=>t.jsx("option",{value:fe.id,children:fe.label},fe.id))}),t.jsx("button",{onClick:()=>d(fe=>({...fe,columns:fe.columns.filter((M,y)=>y!==ee)})),style:ke.iconBtn,children:t.jsx(Ae,{size:14})})]},ee)),a.columns.length<6&&t.jsxs("button",{onClick:()=>d(O=>({...O,columns:[...O.columns,X()]})),style:ke.addColInline,children:[t.jsx(st,{size:13})," Add column"]}),t.jsxs("div",{style:ke.modalActions,children:[t.jsx("button",{onClick:()=>d(null),style:ke.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:P,disabled:!a.name.trim(),style:{...ke.saveBtn,...a.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",a.id?"Save":"Create"]})]})]})}),g&&j&&t.jsx("div",{style:ke.overlay,onClick:()=>m(null),children:t.jsxs("div",{style:ke.modal,onClick:O=>O.stopPropagation(),children:[t.jsxs("div",{style:ke.modalHead,children:[t.jsx("span",{style:ke.modalTitle,children:g.id?"Edit":`Add to ${j.name}`}),t.jsx("button",{onClick:()=>m(null),style:ke.iconBtn,children:t.jsx(Ae,{size:16})})]}),t.jsx("label",{style:ke.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:g.name,onChange:O=>m(ee=>({...ee,name:O.target.value})),onKeyDown:O=>O.key==="Enter"&&ce(),placeholder:"Title / name",style:ke.input}),j.columns.map(O=>{const ee=Rn(O),fe=pd(O),M=`dl-${j.id}-${ee}`,y=G[ee]||[];return t.jsxs("div",{children:[t.jsx("label",{style:ke.label,children:ee}),t.jsx("input",{value:g.fields[ee]||"",type:fe==="number"?"number":fe==="link"?"url":"text",list:y.length?M:void 0,onChange:ne=>m(D=>({...D,fields:{...D.fields,[ee]:ne.target.value}})),placeholder:fe==="link"?"https://…":ee,style:ke.input}),y.length>0&&t.jsx("datalist",{id:M,children:y.map(ne=>t.jsx("option",{value:ne},ne))})]},ee)}),t.jsx("label",{style:ke.label,children:"Status"}),t.jsx("div",{style:ke.statusPick,children:Ti.map(O=>t.jsx("button",{type:"button",onClick:()=>m(ee=>({...ee,status:O.id})),style:{...ke.statusChip,...g.status===O.id?{background:O.color,color:"#fff",border:`1px solid ${O.color}`}:{}},children:O.label},O.id))}),t.jsxs("div",{style:ke.modalActions,children:[t.jsx("button",{onClick:()=>m(null),style:ke.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:ce,disabled:!g.name.trim(),style:{...ke.saveBtn,...g.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",g.id?"Save":"Add"]})]})]})}),f&&t.jsx("div",{style:ke.overlay,onClick:()=>h(null),children:t.jsxs("div",{style:{...ke.modal,maxWidth:380},onClick:O=>O.stopPropagation(),children:[t.jsxs("div",{style:ke.modalHead,children:[t.jsx("span",{style:ke.modalTitle,children:"Satisfied! 🎉"}),t.jsx("button",{onClick:()=>h(null),style:ke.iconBtn,children:t.jsx(Ae,{size:16})})]}),t.jsxs("div",{style:ke.muted2,children:['"',f.item.name,'" — when did you complete it?']}),t.jsx("label",{style:ke.label,children:"Completed on"}),t.jsx("input",{type:"date",value:f.date,max:ll(),onChange:O=>h(ee=>({...ee,date:O.target.value})),style:ke.input}),t.jsx("label",{style:ke.label,children:"Comment (optional)"}),t.jsx("textarea",{value:f.note,onChange:O=>h(ee=>({...ee,note:O.target.value})),placeholder:"How was it?",style:{...ke.input,minHeight:64,resize:"vertical"}}),t.jsxs("div",{style:ke.modalActions,children:[t.jsx("button",{onClick:()=>h(null),style:ke.cancelBtn,children:"Skip"}),t.jsxs("button",{onClick:Q,style:ke.saveBtn,children:[t.jsx(He,{size:15})," Save"]})]})]})}),t.jsx(pr,{toasts:T,onUndo:E,onDismiss:w})]})}const ke={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},addColBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"none",background:Qr,color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabs:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16,alignItems:"center"},tab:{display:"inline-flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},tabOn:{background:Qr,color:"#fff",borderColor:Qr},tabCount:{fontSize:10.5,fontWeight:700,background:"rgba(0,0,0,0.12)",borderRadius:9,padding:"1px 6px"},tabAdd:{border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",width:32,height:32,borderRadius:"50%",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},colHead:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,marginBottom:12,flexWrap:"wrap"},colTitle:{fontSize:18,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},colActions:{display:"flex",gap:6,alignItems:"center"},primaryBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"none",background:Qr,color:"#fff",padding:"7px 13px",borderRadius:8,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:6,flexShrink:0},filterBar:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",marginBottom:14},filterLabel:{fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--text-3)",marginRight:2},filterChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 11px",borderRadius:16,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},filterChipOn:{background:Qr,color:"#fff",borderColor:Qr},board:{display:"grid",gap:12,alignItems:"start"},lane:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:"10px 10px 12px",minHeight:120,display:"flex",flexDirection:"column"},laneHead:{display:"flex",alignItems:"center",gap:7,padding:"2px 4px 10px"},laneDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},laneLabel:{fontSize:12.5,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--text-2)"},laneCount:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},laneAdd:{marginLeft:"auto",border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:2,borderRadius:6},laneBody:{display:"flex",flexDirection:"column",gap:8,minHeight:40,flex:1},laneEmpty:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",textAlign:"center",padding:"16px 0",border:"1px dashed var(--border)",borderRadius:8},insertLine:{height:3,borderRadius:2,margin:"1px 0"},itemCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"9px 10px",boxShadow:"0 1px 2px rgba(0,0,0,0.05)",cursor:"grab",touchAction:"none",userSelect:"none"},itemCardTop:{display:"flex",alignItems:"center",gap:6},itemName:{flex:1,minWidth:0,fontSize:13.5,fontWeight:700,wordBreak:"break-word"},itemField:{display:"flex",gap:8,fontSize:12,color:"var(--text-2)",marginTop:5,paddingLeft:19},fieldLabel:{fontWeight:700,color:"var(--text-3)",minWidth:64,flexShrink:0},tagWrap:{display:"flex",flexWrap:"wrap",gap:5,marginTop:8,paddingLeft:19},tag:{fontSize:10.5,fontWeight:700,color:Qr,background:"color-mix(in srgb, "+Qr+" 14%, transparent)",border:"1px solid color-mix(in srgb, "+Qr+" 30%, transparent)",borderRadius:12,padding:"2px 8px",whiteSpace:"nowrap"},doneMeta:{marginTop:8,paddingLeft:19,display:"flex",flexDirection:"column",gap:3},doneDate:{fontSize:11,fontWeight:700,color:"#4C9A6B"},doneNote:{fontSize:11.5,color:"var(--text-2)",fontStyle:"italic",wordBreak:"break-word"},ghost:{position:"fixed",zIndex:300,pointerEvents:"none",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"9px 10px",boxShadow:"0 8px 28px rgba(0,0,0,0.28)",opacity:.95,transform:"rotate(1.5deg)"},muted:{fontSize:13,color:"var(--text-3)"},muted2:{fontSize:11.5,color:"var(--text-3)",marginBottom:8},empty:{textAlign:"center",color:"var(--text-3)",padding:"50px 16px",fontSize:14,fontWeight:600,display:"flex",flexDirection:"column",alignItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:8},colRow:{display:"flex",gap:6,alignItems:"center",marginBottom:8},colTypeSelect:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",background:"var(--bg)",color:"var(--text)",flexShrink:0},addColInline:{display:"inline-flex",alignItems:"center",gap:5,border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"7px 12px",borderRadius:8,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},statusPick:{display:"flex",gap:6,flexWrap:"wrap"},statusChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 13px",borderRadius:18,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Rr="#C9772E",Nh={Carrot:My,ShoppingCart:f0,Clapperboard:$y,ShoppingBag:kh,Fuel:Yy,Sparkles:Co,Shirt:h0,WashingMachine:S0,Zap:Ig,Tv:k0,Droplet:Gy,Coffee:Py,Utensils:w0,Bus:Ry,Train:v0,Plane:u0,Home:xs,Heart:uh,Gift:fs,Book:Ty,Dumbbell:Uy,Pill:g0,Phone:c0,Wifi:C0,Gamepad2:Ky,Music:Cg,Scissors:vh,PawPrint:d0,Baby:Sy,GraduationCap:ch,Briefcase:By,Car:Wy,Bike:zy},En=({name:e,...r})=>{const n=Nh[e]||kh;return t.jsx(n,{...r})},bd=["#C9772E","#4C9A6B","#3A7CA5","#8268B0","#C2536B","#C9A227","#D1556E","#5B7C99","#A23E57","#3E9E6B"],Sc=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,_p=Sc(new Date),Fo=120;function G1(e=760){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}function U1(){const e=G1(),r=Jn(),n=Mh(),[o,i]=c.useState([]),[s,l]=c.useState([]),[a,d]=c.useState(!1),[g,m]=c.useState(_p),[f,h]=c.useState(()=>new Date),[B,R]=c.useState(null),[z,S]=c.useState(null),[p,b]=c.useState(null),[u,k]=c.useState(!1),[x,T]=c.useState("day"),[E,w]=c.useState(()=>Ir(new Date,n)[0]),[j,Y]=c.useState(new Set),q=v=>Y(le=>{const Pe=new Set(le);return Pe.has(v)?Pe.delete(v):Pe.add(v),Pe}),te=c.useCallback(()=>{F.getExpenses().then(v=>{i(v.categories),l(v.logs),d(!0)}).catch(()=>d(!0))},[]);c.useEffect(()=>{te()},[te]);const{deleteItem:he,toasts:G,handleUndo:ue,handleDismiss:pe}=ur(F.deleteExpenseLog,F.restoreExpenseLog,te),ze=c.useMemo(()=>{const v={};return o.forEach(le=>v[le.id]=le),v},[o]),re=v=>js(v,r.code),U=c.useMemo(()=>s.filter(v=>v.date===g),[s,g]),de=U.reduce((v,le)=>v+le.amount,0),X=c.useMemo(()=>{const v=Pe=>{const Le=new Date;return Le.setDate(Le.getDate()+Pe),Sc(Le)},le=Pe=>s.filter(Le=>Le.date===Pe).reduce((Le,Je)=>Le+Je.amount,0);return[{label:"Today",value:le(v(0)),color:Rr},{label:"Yesterday",value:le(v(-1)),color:"var(--text-3)"},{label:"Day before",value:le(v(-2)),color:"var(--text-3)"}]},[s]),I=c.useMemo(()=>{if(x==="day")return U;if(x==="month"){const[v,le]=Ir(new Date(g+"T00:00"),n);return s.filter(Pe=>Pe.date>=v&&Pe.date<=le)}if(x==="year"){const v=g.slice(0,4);return s.filter(le=>le.date.slice(0,4)===v)}return s},[s,U,x,g,n]),A=I.reduce((v,le)=>v+le.amount,0),P=c.useMemo(()=>{const v={};return I.forEach(le=>{v[le.category_id]=(v[le.category_id]||0)+le.amount}),Object.entries(v).map(([le,Pe])=>({cat:ze[le],amount:Pe})).filter(le=>le.cat).sort((le,Pe)=>Pe.amount-le.amount)},[I,ze]),$=v=>Ir(new Date(v+"T00:00"),n)[0],ae=c.useMemo(()=>{const v=new Set(s.map(le=>$(le.date)));return v.add(Ir(new Date,n)[0]),Array.from(v).sort().reverse().slice(0,12)},[s,n]),ce=v=>new Date(v+"T00:00").toLocaleDateString("en-US",{month:"short",year:"numeric"}),De=(v,le)=>Ir(new Date(v+"T00:00"),n,-le)[0],Q=v=>j.size===0||j.has(v.category_id),ie=[E,De(E,1),De(E,2)],O=ie.map(v=>{const[le,Pe]=Ir(new Date(v+"T00:00"),n);return s.filter(Le=>Le.date>=le&&Le.date<=Pe&&Q(Le)).reduce((Le,Je)=>Le+Je.amount,0)}),[ee,fe,M]=O,y=fe>0?Math.round((ee-fe)/fe*100):ee>0?100:0,ne=y>0?Ki:y<0?Yn:bh,D=y>0?"#C2536B":y<0?"#4C9A6B":"#9A968C",ge=c.useMemo(()=>{const[v,le]=Ir(new Date(E+"T00:00"),n),Pe={};return s.filter(Le=>Le.date>=v&&Le.date<=le&&Q(Le)).forEach(Le=>{Pe[Le.category_id]=(Pe[Le.category_id]||0)+Le.amount}),Object.entries(Pe).map(([Le,Je])=>({cat:ze[Le],amount:Je})).filter(Le=>Le.cat).sort((Le,Je)=>Je.amount-Le.amount)},[s,E,j,ze,n]);let ve=0;const We=ge.map(v=>{const le=ee>0?ve/ee*100:0;ve+=v.amount;const Pe=ee>0?ve/ee*100:0;return{...v,start:le,end:Pe,pct:ee>0?v.amount/ee*100:0}}),Xe=We.length?`conic-gradient(${We.map(v=>`${v.cat.color} ${v.start}% ${v.end}%`).join(", ")})`:"var(--surface-2)",dt=c.useMemo(()=>{const[v,le]=Ir(f,n),Pe=new Date(v+"T00:00"),Le=new Date(le+"T00:00"),Je=(Pe.getDay()+6)%7,br={};s.forEach(H=>{H.date>=v&&H.date<=le&&(br[H.date]=(br[H.date]||0)+H.amount)});const pt=[];for(let H=0;H<Je;H++)pt.push(null);for(let H=new Date(Pe);H<=Le;H.setDate(H.getDate()+1)){const je=Sc(H);pt.push({date:je,day:H.getDate(),total:br[je]||0})}return pt},[f,s,n]),$e=v=>h(le=>{const[Pe]=Ir(le,n,v);return new Date(Pe+"T00:00")}),rt=c.useMemo(()=>{const[v,le]=Ir(f,n);if(n===1)return new Date(v+"T00:00").toLocaleDateString("en-US",{month:"long",year:"numeric"});const Pe=Le=>new Date(Le+"T00:00").toLocaleDateString("en-US",{day:"numeric",month:"short"});return`${Pe(v)} – ${Pe(le)}`},[f,n]),Qe=v=>R({cat:v,amount:"",note:""}),at=async()=>{const v=parseFloat(B.amount);!v||v<=0||(await F.createExpenseLog({category_id:B.cat.id,amount:v,note:B.note.trim().slice(0,Fo),date:g}),R(null),te())},se=v=>S({id:v.id,category_id:v.category_id,amount:String(v.amount),note:v.note||"",date:v.date}),Me=async()=>{const v=parseFloat(z.amount);!v||v<=0||(await F.updateExpenseLog(z.id,{category_id:z.category_id,amount:v,note:z.note.trim().slice(0,Fo),date:z.date}),S(null),te())},qe=()=>b({id:null,name:"",icon:"ShoppingBag",color:bd[o.length%bd.length]}),nt=v=>b({id:v.id,name:v.name,icon:v.icon,color:v.color}),ct=async()=>{const v=p.name.trim();v&&(p.id?await F.updateExpenseCategory(p.id,{name:v,icon:p.icon,color:p.color}):await F.createExpenseCategory({name:v,icon:p.icon,color:p.color}),b(null),te())},Ft=async v=>{const le=s.filter(Le=>Le.category_id===v.id).length,Pe=le>0?`Delete "${v.name}"? Its ${le} transaction${le===1?"":"s"} will be moved to "Other".`:`Delete "${v.name}"?`;window.confirm(Pe)&&(await F.deleteExpenseCategory(v.id),te())},zt=async(v,le)=>{const Pe=v+le;if(Pe<0||Pe>=o.length)return;const Le=[...o];[Le[v],Le[Pe]]=[Le[Pe],Le[v]],i(Le),await F.arrangeExpenseCategories(Le.map(Je=>Je.id)).catch(()=>{}),te()},yt=new Date(g+"T00:00").toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});let mt=0;const wt=P.map(v=>{const le=A>0?mt/A*100:0;mt+=v.amount;const Pe=A>0?mt/A*100:0;return{...v,start:le,end:Pe,pct:A>0?v.amount/A*100:0}}),Sr=wt.length?`conic-gradient(${wt.map(v=>`${v.cat.color} ${v.start}% ${v.end}%`).join(", ")})`:"var(--surface-2)";return t.jsxs("div",{style:{...V.page,...e?{padding:"20px 14px"}:{}},children:[t.jsx("div",{style:V.head,children:t.jsxs("div",{children:[t.jsx("div",{style:V.eyebrow,children:"Anvil · Expenses"}),t.jsx("h1",{style:V.h1,children:"Expenses"}),t.jsx("div",{style:V.subhead,children:"Log day-to-day spending by category and see where it goes."})]})}),t.jsxs("div",{style:V.totalCard,children:[t.jsxs("div",{style:V.totalLeft,children:[t.jsx(Zl,{size:20,color:Rr}),t.jsxs("div",{children:[t.jsxs("div",{style:V.totalLabel,children:["Total spent ",x==="day"?"today":x==="month"?"this month":x==="year"?"this year":"all time"]}),t.jsx("div",{style:V.totalVal,children:re(A)})]})]}),t.jsx("div",{style:V.scopeRow,children:[["day","Day"],["month","Month"],["year","Year"],["all","All"]].map(([v,le])=>t.jsx("button",{onClick:()=>T(v),style:{...V.scopeBtn,...x===v?V.scopeBtnOn:{}},children:le},v))})]}),t.jsxs("div",{style:{...V.card,marginBottom:16},children:[t.jsx("div",{style:V.threeDayTitle,children:"Last 3 days"}),t.jsx($p,{items:X,money:re})]}),t.jsxs("div",{style:{...V.cols,gridTemplateColumns:e?"minmax(0,1fr)":"320px minmax(0,1fr)"},children:[t.jsxs("div",{style:{...V.card,minWidth:0,...e?{padding:12}:{}},children:[t.jsxs("div",{style:V.calHead,children:[t.jsx("button",{onClick:()=>$e(-1),style:V.calNav,children:t.jsx(Sn,{size:16})}),t.jsx("span",{style:V.calTitle,children:rt}),t.jsx("button",{onClick:()=>$e(1),style:V.calNav,children:t.jsx(nn,{size:16})})]}),t.jsxs("div",{style:V.calGrid,children:[["M","T","W","T","F","S","S"].map((v,le)=>t.jsx("div",{style:V.calDow,children:v},le)),dt.map((v,le)=>v===null?t.jsx("div",{},le):t.jsxs("button",{onClick:()=>m(v.date),style:{...V.calCell,...v.date===g?V.calCellOn:{},...v.date===_p&&v.date!==g?V.calCellToday:{}},children:[t.jsx("span",{children:v.day}),v.total>0&&t.jsx("span",{style:{...V.calDot,background:v.date===g?"#fff":Rr}})]},v.date))]})]}),t.jsxs("div",{children:[t.jsxs("div",{style:V.card,children:[t.jsxs("div",{style:V.cardTitleRow,children:[t.jsxs("div",{children:[t.jsx("div",{style:V.cardTitle,children:yt}),t.jsx("div",{style:V.cardSub,children:"Tap a category to log an expense for this day."})]}),t.jsx("div",{style:V.dayTotal,children:re(de)})]}),t.jsxs("div",{style:V.iconGrid,children:[o.map(v=>t.jsxs("div",{style:V.iconCell,children:[t.jsx("button",{onClick:()=>Qe(v),style:{...V.iconBtn,background:v.color+"1A",color:v.color,borderColor:v.color+"44"},children:t.jsx(En,{name:v.icon,size:22})}),t.jsx("span",{style:V.iconLabel,children:v.name})]},v.id)),t.jsxs("div",{style:V.iconCell,children:[t.jsx("button",{onClick:qe,style:V.iconBtnAdd,children:t.jsx(st,{size:20})}),t.jsx("span",{style:V.iconLabel,children:"Add"})]})]}),t.jsxs("button",{onClick:()=>k(!0),style:V.manageLink,children:[t.jsx(vt,{size:11})," Customize categories"]}),U.length>0&&t.jsx("div",{style:V.logList,children:U.map(v=>{const le=ze[v.category_id];return t.jsxs("div",{style:V.logRow,children:[t.jsx("span",{style:{...V.logIcon,background:((le==null?void 0:le.color)||"#9A968C")+"1A",color:(le==null?void 0:le.color)||"#9A968C"},children:t.jsx(En,{name:le==null?void 0:le.icon,size:14})}),t.jsxs("button",{onClick:()=>se(v),style:V.logInfoBtn,title:"Edit this expense",children:[t.jsx("div",{style:V.logCat,children:(le==null?void 0:le.name)||"Deleted category"}),v.note&&t.jsx("div",{style:V.logNote,children:v.note})]}),t.jsx("span",{style:V.logAmt,children:re(v.amount)}),t.jsx("button",{onClick:()=>se(v),style:V.editBtn,title:"Edit",children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:()=>he(v.id,(le==null?void 0:le.name)||"Expense"),style:V.delBtn,children:t.jsx(Ae,{size:14})})]},v.id)})})]}),t.jsxs("div",{style:V.card,children:[t.jsx("div",{style:V.cardTitleRow,children:t.jsxs("div",{children:[t.jsx("div",{style:V.cardTitle,children:"Spending by category"}),t.jsxs("div",{style:V.cardSub,children:[x==="day"?"Today":x==="month"?"This month":x==="year"?"This year":"All time"," — percentage & amount"]})]})}),P.length===0?t.jsx("div",{style:V.muted,children:"No expenses logged for this period yet."}):t.jsxs("div",{style:V.pieWrap,children:[t.jsxs("div",{style:V.pieChart,children:[t.jsx("div",{style:{...V.pieDisc,background:Sr}}),t.jsxs("div",{style:V.pieHole,children:[t.jsx("span",{style:V.pieHoleVal,children:re(A)}),t.jsx("span",{style:V.pieHoleLbl,children:"total"})]})]}),t.jsx("div",{style:V.pieLegend,children:wt.map(v=>t.jsxs("div",{style:V.legendRow,children:[t.jsx("span",{style:{...V.dot,background:v.cat.color}}),t.jsx(En,{name:v.cat.icon,size:13,style:{color:v.cat.color,flexShrink:0}}),t.jsx("span",{style:V.legendName,children:v.cat.name}),t.jsxs("span",{style:V.legendPct,children:[Math.round(v.pct),"%"]}),t.jsx("span",{style:V.legendAmt,children:re(v.amount)})]},v.cat.id))})]})]}),t.jsxs("div",{style:V.card,children:[t.jsx("div",{style:V.cardTitleRow,children:t.jsxs("div",{children:[t.jsx("div",{style:V.cardTitle,children:"Monthly trend"}),t.jsx("div",{style:V.cardSub,children:"Compare a month against the previous two"})]})}),t.jsx("div",{style:V.tagRow,children:ae.map(v=>t.jsxs("button",{onClick:()=>w(v),style:{...V.tagChip,...E===v?V.tagChipOn:{}},children:[t.jsx(uc,{size:11})," ",ce(v)]},v))}),t.jsxs("div",{style:{...V.tagRow,marginTop:8},children:[t.jsxs("button",{onClick:()=>Y(new Set),style:{...V.tagChip,...j.size===0?V.tagChipOn:{}},children:[t.jsx(uc,{size:11})," All categories"]}),o.map(v=>{const le=j.has(v.id);return t.jsxs("button",{onClick:()=>q(v.id),style:{...V.tagChip,...le?V.tagChipOn:{}},children:[t.jsx(En,{name:v.icon,size:11})," ",v.name,le&&t.jsx(He,{size:11,style:{marginLeft:2}})]},v.id)})]}),t.jsxs("div",{style:{...V.trend3,marginTop:16},children:[t.jsxs("div",{style:V.trendCol,children:[t.jsx("div",{style:V.trendVal,children:re(ee)}),t.jsx("div",{style:V.trendLbl,children:ce(ie[0])})]}),t.jsxs("div",{style:V.trendCol,children:[t.jsx("div",{style:{...V.trendVal,color:"var(--text-2)"},children:re(fe)}),t.jsx("div",{style:V.trendLbl,children:ce(ie[1])})]}),t.jsxs("div",{style:V.trendCol,children:[t.jsx("div",{style:{...V.trendVal,color:"var(--text-3)"},children:re(M)}),t.jsx("div",{style:V.trendLbl,children:ce(ie[2])})]})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:t.jsxs("div",{style:{...V.trendBadge,color:D,background:D+"1A"},children:[t.jsx(ne,{size:15})," ",y>0?"+":"",y,"% vs ",ce(ie[1])]})}),t.jsx($p,{items:[{label:ce(ie[0]),value:ee,color:Rr},{label:ce(ie[1]),value:fe,color:"var(--text-3)"},{label:ce(ie[2]),value:M,color:"var(--text-3)"}],money:re}),t.jsx("div",{style:V.trendDivider}),t.jsxs("div",{style:V.cardSub,children:["Category split for ",ce(E)]}),ge.length===0?t.jsx("div",{style:V.muted,children:"No expenses logged for this month yet."}):t.jsxs("div",{style:{...V.pieWrap,marginTop:10},children:[t.jsxs("div",{style:V.pieChart,children:[t.jsx("div",{style:{...V.pieDisc,background:Xe}}),t.jsxs("div",{style:V.pieHole,children:[t.jsx("span",{style:V.pieHoleVal,children:re(ee)}),t.jsx("span",{style:V.pieHoleLbl,children:"total"})]})]}),t.jsx("div",{style:V.pieLegend,children:We.map(v=>t.jsxs("div",{style:V.legendRow,children:[t.jsx("span",{style:{...V.dot,background:v.cat.color}}),t.jsx(En,{name:v.cat.icon,size:13,style:{color:v.cat.color,flexShrink:0}}),t.jsx("span",{style:V.legendName,children:v.cat.name}),t.jsxs("span",{style:V.legendPct,children:[Math.round(v.pct),"%"]}),t.jsx("span",{style:V.legendAmt,children:re(v.amount)})]},v.cat.id))})]})]})]})]}),B&&t.jsx("div",{style:V.overlay,onClick:()=>R(null),children:t.jsxs("div",{style:V.modal,onClick:v=>v.stopPropagation(),children:[t.jsxs("div",{style:V.modalHead,children:[t.jsxs("span",{style:{...V.modalTitle,display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{...V.iconBadge,background:B.cat.color+"1A",color:B.cat.color},children:t.jsx(En,{name:B.cat.icon,size:16})}),B.cat.name]}),t.jsx("button",{onClick:()=>R(null),style:V.iconBtnPlain,children:t.jsx(Ae,{size:16})})]}),t.jsx("label",{style:V.label,children:"Amount *"}),t.jsx("input",{autoFocus:!0,type:"number",inputMode:"decimal",value:B.amount,onChange:v=>R(le=>({...le,amount:v.target.value})),onKeyDown:v=>v.key==="Enter"&&at(),placeholder:"0",style:V.input}),t.jsx("label",{style:V.label,children:"Note (optional)"}),t.jsx("input",{value:B.note,maxLength:Fo,onChange:v=>R(le=>({...le,note:v.target.value})),onKeyDown:v=>v.key==="Enter"&&at(),placeholder:"What was it for?",style:V.input}),t.jsxs("div",{style:V.noteCount,children:[B.note.length,"/",Fo]}),t.jsxs("div",{style:V.modalActions,children:[t.jsx("button",{onClick:()=>R(null),style:V.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:at,disabled:!B.amount,style:{...V.saveBtn,...B.amount?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," Add"]})]})]})}),z&&(ze[z.category_id],t.jsx("div",{style:V.overlay,onClick:()=>S(null),children:t.jsxs("div",{style:V.modal,onClick:v=>v.stopPropagation(),children:[t.jsxs("div",{style:V.modalHead,children:[t.jsx("span",{style:V.modalTitle,children:"Edit expense"}),t.jsx("button",{onClick:()=>S(null),style:V.iconBtnPlain,children:t.jsx(Ae,{size:16})})]}),t.jsx("label",{style:V.label,children:"Category"}),t.jsx("select",{value:z.category_id,onChange:v=>S(le=>({...le,category_id:Number(v.target.value)})),style:V.input,children:o.map(v=>t.jsx("option",{value:v.id,children:v.name},v.id))}),t.jsx("label",{style:V.label,children:"Amount *"}),t.jsx("input",{autoFocus:!0,type:"number",inputMode:"decimal",value:z.amount,onChange:v=>S(le=>({...le,amount:v.target.value})),onKeyDown:v=>v.key==="Enter"&&Me(),placeholder:"0",style:V.input}),t.jsx("label",{style:V.label,children:"Date"}),t.jsx("input",{type:"date",value:z.date,onChange:v=>S(le=>({...le,date:v.target.value})),style:V.input}),t.jsx("label",{style:V.label,children:"Note (optional)"}),t.jsx("input",{value:z.note,maxLength:Fo,onChange:v=>S(le=>({...le,note:v.target.value})),onKeyDown:v=>v.key==="Enter"&&Me(),placeholder:"What was it for?",style:V.input}),t.jsxs("div",{style:V.noteCount,children:[z.note.length,"/",Fo]}),t.jsxs("div",{style:V.modalActions,children:[t.jsx("button",{onClick:()=>S(null),style:V.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:Me,disabled:!z.amount,style:{...V.saveBtn,...z.amount?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," Save"]})]})]})})),u&&t.jsx("div",{style:V.overlay,onClick:()=>k(!1),children:t.jsxs("div",{style:V.modal,onClick:v=>v.stopPropagation(),children:[t.jsxs("div",{style:V.modalHead,children:[t.jsx("span",{style:V.modalTitle,children:"Customize categories"}),t.jsx("button",{onClick:()=>k(!1),style:V.iconBtnPlain,children:t.jsx(Ae,{size:16})})]}),t.jsx("div",{style:V.manageHint,children:"Use the arrows to reorder how categories appear."}),t.jsx("div",{style:V.manageList,children:o.map((v,le)=>t.jsxs("div",{style:V.manageRow,children:[t.jsxs("div",{style:V.reorderCol,children:[t.jsx("button",{onClick:()=>zt(le,-1),disabled:le===0,style:{...V.reorderBtn,...le===0?V.reorderDisabled:{}},title:"Move up",children:t.jsx(va,{size:13})}),t.jsx("button",{onClick:()=>zt(le,1),disabled:le===o.length-1,style:{...V.reorderBtn,...le===o.length-1?V.reorderDisabled:{}},title:"Move down",children:t.jsx(So,{size:13})})]}),t.jsx("span",{style:{...V.iconBadge,background:v.color+"1A",color:v.color},children:t.jsx(En,{name:v.icon,size:15})}),t.jsx("span",{style:{flex:1,fontSize:13.5,fontWeight:600},children:v.name}),t.jsx("button",{onClick:()=>nt(v),style:V.delBtn,children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:()=>Ft(v),style:V.delBtn,children:t.jsx(Ae,{size:14})})]},v.id))}),t.jsxs("button",{onClick:qe,style:V.addColInline,children:[t.jsx(st,{size:13})," Add category"]})]})}),p&&t.jsx("div",{style:V.overlay,onClick:()=>b(null),children:t.jsxs("div",{style:V.modal,onClick:v=>v.stopPropagation(),children:[t.jsxs("div",{style:V.modalHead,children:[t.jsx("span",{style:V.modalTitle,children:p.id?"Edit category":"New category"}),t.jsx("button",{onClick:()=>b(null),style:V.iconBtnPlain,children:t.jsx(Ae,{size:16})})]}),t.jsx("label",{style:V.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:p.name,onChange:v=>b(le=>({...le,name:v.target.value})),onKeyDown:v=>v.key==="Enter"&&ct(),placeholder:"e.g. Vegetables, Petrol…",style:V.input}),t.jsx("label",{style:V.label,children:"Color"}),t.jsx("div",{style:V.colorRow,children:bd.map(v=>t.jsx("button",{onClick:()=>b(le=>({...le,color:v})),style:{...V.colorSwatch,background:v,...p.color===v?V.colorSwatchOn:{}}},v))}),t.jsx("label",{style:V.label,children:"Icon"}),t.jsx("div",{style:V.iconPickGrid,children:Object.keys(Nh).map(v=>t.jsx("button",{onClick:()=>b(le=>({...le,icon:v})),style:{...V.iconPick,...p.icon===v?{background:p.color+"22",borderColor:p.color,color:p.color}:{}},children:t.jsx(En,{name:v,size:17})},v))}),t.jsxs("div",{style:V.modalActions,children:[t.jsx("button",{onClick:()=>b(null),style:V.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:ct,disabled:!p.name.trim(),style:{...V.saveBtn,...p.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",p.id?"Save":"Create"]})]})]})}),!a&&t.jsx("div",{style:V.muted,children:"Loading…"}),t.jsx(pr,{toasts:G,onUndo:ue,onDismiss:pe})]})}function $p({items:e,money:r}){const n=Math.max(1,...e.map(o=>o.value));return t.jsx("div",{style:V.tbWrap,children:e.map((o,i)=>t.jsxs("div",{style:V.tbRow,children:[t.jsx("div",{style:V.tbLbl,children:o.label}),t.jsx("div",{style:V.tbTrack,children:t.jsx("div",{style:{...V.tbBar,width:`${o.value/n*100}%`,background:o.color}})}),t.jsx("div",{style:V.tbVal,children:r(o.value)})]},i))})}const V={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},totalCard:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:14,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:16,padding:"16px 18px",marginBottom:16,flexWrap:"wrap"},totalLeft:{display:"flex",alignItems:"center",gap:12},totalLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600},totalVal:{fontSize:24,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2},scopeRow:{display:"flex",gap:6},scopeBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 13px",borderRadius:8,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},scopeBtnOn:{background:Rr,color:"#fff",borderColor:Rr},cols:{display:"grid",gap:16,alignItems:"start"},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},dayTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap",color:Rr},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},calNav:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,minmax(0,1fr))",gap:4},calDow:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",textAlign:"center",padding:"4px 0"},calCell:{position:"relative",border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:8,aspectRatio:"1",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},calCellOn:{background:Rr,color:"#fff",borderColor:Rr,fontWeight:700},calCellToday:{borderColor:Rr,fontWeight:700},calDot:{position:"absolute",bottom:3,width:4,height:4,borderRadius:"50%"},iconGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(64px, 1fr))",gap:10,marginTop:4},iconCell:{display:"flex",flexDirection:"column",alignItems:"center",gap:5},iconBtn:{width:52,height:52,borderRadius:14,border:"1px solid",display:"grid",placeItems:"center",cursor:"pointer"},iconBtnAdd:{width:52,height:52,borderRadius:14,border:"1px dashed var(--border)",background:"none",color:"var(--text-3)",display:"grid",placeItems:"center",cursor:"pointer"},iconLabel:{fontSize:10.5,fontWeight:600,color:"var(--text-2)",textAlign:"center",maxWidth:66,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},manageLink:{display:"inline-flex",alignItems:"center",gap:5,border:"none",background:"none",color:"var(--text-3)",fontSize:11.5,fontWeight:600,cursor:"pointer",marginTop:12,padding:0,fontFamily:"inherit"},logList:{marginTop:14,paddingTop:14,borderTop:"1px solid var(--border)",display:"flex",flexDirection:"column",gap:8},logRow:{display:"flex",alignItems:"center",gap:10,minWidth:0},logIcon:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},logInfoBtn:{flex:1,minWidth:0,border:"none",background:"none",padding:0,cursor:"pointer",textAlign:"left",fontFamily:"inherit",overflow:"hidden",color:"inherit"},logCat:{fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logNote:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logAmt:{fontSize:13.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap",flexShrink:0},editBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},noteCount:{fontSize:10.5,color:"var(--text-3)",textAlign:"right",marginTop:3},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:7},dot:{width:9,height:9,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},iconBadge:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:8},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},manageHint:{fontSize:11.5,color:"var(--text-3)",marginBottom:8},manageList:{display:"flex",flexDirection:"column",gap:6,marginBottom:10,maxHeight:320,overflowY:"auto"},manageRow:{display:"flex",alignItems:"center",gap:10,padding:"6px 2px"},reorderCol:{display:"flex",flexDirection:"column",gap:1,flexShrink:0},reorderBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:22,height:17,borderRadius:5,cursor:"pointer",display:"grid",placeItems:"center",padding:0},reorderDisabled:{opacity:.35,cursor:"not-allowed"},addColInline:{display:"inline-flex",alignItems:"center",gap:5,border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"9px 12px",borderRadius:8,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},colorRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:4},colorSwatch:{width:26,height:26,borderRadius:"50%",border:"2px solid transparent",cursor:"pointer",padding:0},colorSwatchOn:{border:"2px solid var(--text)",boxShadow:"0 0 0 2px var(--surface)"},iconPickGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:4},iconPick:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:9,height:36,display:"grid",placeItems:"center",cursor:"pointer"},tagRow:{display:"flex",gap:6,flexWrap:"wrap"},tagChip:{display:"inline-flex",alignItems:"center",gap:4,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:20,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tagChipOn:{background:Rr,color:"#fff",borderColor:Rr},trendDivider:{height:1,background:"var(--border)",margin:"16px 0 12px"},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},threeDayTitle:{fontSize:13,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:64,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},gn="#C9A227",ao="#C2536B",ta="#4C9A6B";new Date().toISOString().slice(0,10);const V1=e=>e?new Date(e+"T00:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"—";function Y1(e=620){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const md=e=>(Number(e)||0).toLocaleString(void 0,{maximumFractionDigits:2});function K1(e){const r=e.target||0,n=e.completed||0;return r<=0?{pct:0,negPct:0,negative:!1}:n<0?{pct:0,negPct:Math.min(100,Math.abs(n)/r*100),negative:!0}:{pct:Math.min(100,n/r*100),negPct:0,negative:!1}}const Q1=()=>({id:null,name:"",completed:"",target:"",end_date:"",reward:"",reward_cost:"",comment:"",allow_negative:!1});function q1(){const e=Jn(),r=u=>Or(u,e.code),n=Y1(),[o,i]=c.useState([]),[s,l]=c.useState(!1),[a,d]=c.useState(null),[g,m]=c.useState(null),f=c.useCallback(()=>{F.getChallenges().then(u=>{i(Array.isArray(u)?u:[]),l(!0)}).catch(()=>l(!0))},[]);c.useEffect(()=>{f()},[f]);const h=c.useMemo(()=>{const u=o.filter(x=>x.status==="done"),k=u.reduce((x,T)=>x+(T.reward_earned||0),0);return{total:o.length,done:u.length,active:o.filter(x=>x.status==="active").length,failed:o.filter(x=>x.status==="failed").length,earned:k}},[o]),B=()=>d(Q1()),R=u=>d({id:u.id,name:u.name,completed:String(u.completed??""),target:String(u.target??""),end_date:u.end_date||"",reward:u.reward||"",reward_cost:String(u.reward_cost??""),comment:u.comment||"",allow_negative:!!u.allow_negative}),z=async()=>{const u=a.name.trim();if(!u)return;const k={name:u,completed:parseFloat(a.completed)||0,target:parseFloat(a.target)||0,end_date:a.end_date||null,reward:a.reward.trim(),reward_cost:parseFloat(a.reward_cost)||0,comment:a.comment.trim(),allow_negative:a.allow_negative};a.id?await F.updateChallenge(a.id,k):await F.createChallenge(k),d(null),f()},S=async u=>{window.confirm(`Delete challenge "${u.name}"?`)&&(await F.deleteChallenge(u.id),f())},p=u=>m({ch:u,amount:"",mode:"add"}),b=async()=>{const u=parseFloat(g.amount);if(isNaN(u))return;const k=g.mode==="set"?u:(g.ch.completed||0)+u;await F.updateChallenge(g.ch.id,{completed:k}),m(null),f()};return t.jsxs("div",{style:Se.page,children:[t.jsxs("div",{style:Se.head,children:[t.jsx("div",{style:Se.eyebrow,children:"Anvil · Challenges"}),t.jsx("h1",{style:Se.h1,children:"Challenges"}),t.jsx("div",{style:Se.subhead,children:"Small steps toward success — track each toward its target and bank the reward on completion."})]}),t.jsxs("div",{style:Se.statRow,children:[t.jsxs("div",{style:Se.statCard,children:[t.jsx("div",{style:Se.statVal,children:h.active}),t.jsx("div",{style:Se.statLbl,children:"Active"})]}),t.jsxs("div",{style:Se.statCard,children:[t.jsx("div",{style:{...Se.statVal,color:ta},children:h.done}),t.jsx("div",{style:Se.statLbl,children:"Completed"})]}),t.jsxs("div",{style:Se.statCard,children:[t.jsx("div",{style:{...Se.statVal,color:ao},children:h.failed}),t.jsx("div",{style:Se.statLbl,children:"Missed"})]}),t.jsxs("div",{style:Se.statCard,children:[t.jsx("div",{style:{...Se.statVal,color:gn},children:r(h.earned)}),t.jsx("div",{style:Se.statLbl,children:"Reward earned"})]})]}),t.jsxs("button",{onClick:B,style:Se.addBtn,children:[t.jsx(st,{size:16})," New challenge"]}),o.length===0?t.jsx("div",{style:Se.empty,children:s?"No challenges yet. Create your first small step toward success.":"Loading…"}):t.jsx("div",{style:Se.list,children:o.map((u,k)=>{const{pct:x,negPct:T,negative:E}=K1(u),w=E?ao:u.status==="done"?ta:gn;return t.jsxs("div",{style:{...Se.card,...u.status==="failed"?Se.cardFailed:{}},children:[t.jsxs("div",{style:{...Se.cardTop,...n?{alignItems:"flex-start"}:{}},children:[t.jsxs("span",{style:{...Se.num,...n?{marginTop:2}:{}},children:["#",k+1]}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:{...Se.name,...n?Se.nameMobile:{}},children:u.name}),u.comment&&t.jsx("div",{style:Se.comment,children:u.comment}),n&&t.jsx("div",{style:Se.badgeRow,children:t.jsx(Pp,{status:u.status})})]}),!n&&t.jsx(Pp,{status:u.status}),t.jsx("button",{onClick:()=>R(u),style:Se.iconBtn,title:"Edit",children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:()=>S(u),style:Se.iconBtn,title:"Delete",children:t.jsx(Ae,{size:14})})]}),t.jsxs("div",{style:Se.barWrap,children:[t.jsx("div",{style:Se.barTrack,children:E?t.jsx("div",{style:{...Se.barFill,width:`${T}%`,background:ao,marginLeft:"auto"}}):t.jsx("div",{style:{...Se.barFill,width:`${x}%`,background:w}})}),t.jsxs("div",{style:Se.barMetaRow,children:[t.jsxs("span",{style:{...Se.completed,color:(u.completed||0)<0?ao:"var(--text)"},children:[(u.completed||0)<0&&t.jsx(Yn,{size:12,style:{marginRight:3,verticalAlign:"-1px"}}),md(u.completed)]}),t.jsx("span",{style:Se.barPct,children:E?`-${Math.round(T)}%`:`${Math.round(x)}%`}),t.jsxs("span",{style:Se.target,children:["of ",md(u.target)]})]})]}),t.jsxs("div",{style:Se.chips,children:[t.jsxs("span",{style:Se.chip,children:[t.jsx(Vy,{size:12})," Remaining ",md(u.remaining)]}),t.jsxs("span",{style:Se.chip,children:[t.jsx(Fy,{size:12})," ",u.end_date?`Ends ${V1(u.end_date)}`:"No deadline"]}),u.reward&&t.jsxs("span",{style:Se.chip,children:[t.jsx(fs,{size:12})," ",u.reward]}),u.reward_cost>0&&t.jsxs("span",{style:{...Se.chip,...Se.chipReward},children:[t.jsx(Yr,{size:12})," ",r(u.reward_cost),u.status==="done"?" earned":""]}),u.allow_negative&&t.jsx("span",{style:{...Se.chip,color:ao,borderColor:ao+"55"},children:"± negative allowed"})]}),t.jsx("div",{style:Se.actions,children:t.jsxs("button",{onClick:()=>p(u),style:Se.progressBtn,children:[t.jsx(st,{size:13})," Update progress"]})})]},u.id)})}),a&&t.jsx("div",{style:Se.overlay,onClick:()=>d(null),children:t.jsxs("div",{style:Se.modal,onClick:u=>u.stopPropagation(),children:[t.jsxs("div",{style:Se.modalHead,children:[t.jsx("span",{style:Se.modalTitle,children:a.id?"Edit challenge":"New challenge"}),t.jsx("button",{onClick:()=>d(null),style:Se.iconBtnPlain,children:t.jsx(Ae,{size:16})})]}),t.jsx("label",{style:Se.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:a.name,onChange:u=>d(k=>({...k,name:u.target.value})),placeholder:"e.g. Earn ₹1,00,000 from trading",style:Se.input}),t.jsxs("div",{style:Se.grid2,children:[t.jsxs("div",{children:[t.jsx("label",{style:Se.label,children:"Completed"}),t.jsx("input",{type:"number",inputMode:"decimal",value:a.completed,onChange:u=>d(k=>({...k,completed:u.target.value})),placeholder:"0",style:Se.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:Se.label,children:"Target"}),t.jsx("input",{type:"number",inputMode:"decimal",value:a.target,onChange:u=>d(k=>({...k,target:u.target.value})),placeholder:"0",style:Se.input})]})]}),t.jsx("label",{style:Se.label,children:"End date (optional — past & incomplete marks it missed)"}),t.jsx("input",{type:"date",value:a.end_date,onChange:u=>d(k=>({...k,end_date:u.target.value})),style:Se.input}),t.jsxs("div",{style:Se.grid2,children:[t.jsxs("div",{children:[t.jsx("label",{style:Se.label,children:"Reward"}),t.jsx("input",{value:a.reward,onChange:u=>d(k=>({...k,reward:u.target.value})),placeholder:"e.g. New headphones",style:Se.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:Se.label,children:"Reward cost"}),t.jsx("input",{type:"number",inputMode:"decimal",value:a.reward_cost,onChange:u=>d(k=>({...k,reward_cost:u.target.value})),placeholder:"0",style:Se.input})]})]}),t.jsx("label",{style:Se.label,children:"Comment"}),t.jsx("input",{value:a.comment,onChange:u=>d(k=>({...k,comment:u.target.value})),placeholder:"Notes about this challenge",style:Se.input}),t.jsxs("label",{style:Se.toggleRow,children:[t.jsx("input",{type:"checkbox",checked:a.allow_negative,onChange:u=>d(k=>({...k,allow_negative:u.target.checked})),style:Se.checkbox}),t.jsxs("span",{children:[t.jsx("span",{style:Se.toggleLabel,children:"Allow negative progress"}),t.jsx("span",{style:Se.toggleHint,children:"Let progress drop below zero (e.g. a running trading loss shown in red)."})]})]}),t.jsxs("div",{style:Se.modalActions,children:[t.jsx("button",{onClick:()=>d(null),style:Se.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:z,disabled:!a.name.trim(),style:{...Se.saveBtn,...a.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",a.id?"Save":"Create"]})]})]})}),g&&t.jsx("div",{style:Se.overlay,onClick:()=>m(null),children:t.jsxs("div",{style:Se.modal,onClick:u=>u.stopPropagation(),children:[t.jsxs("div",{style:Se.modalHead,children:[t.jsxs("span",{style:Se.modalTitle,children:["Update · ",g.ch.name]}),t.jsx("button",{onClick:()=>m(null),style:Se.iconBtnPlain,children:t.jsx(Ae,{size:16})})]}),t.jsxs("div",{style:Se.progressCur,children:["Current: ",t.jsx("b",{children:r(g.ch.completed)})," of ",r(g.ch.target)]}),t.jsxs("div",{style:Se.modeRow,children:[t.jsx("button",{onClick:()=>m(u=>({...u,mode:"add"})),style:{...Se.modeBtn,...g.mode==="add"?Se.modeBtnOn:{}},children:"Add / subtract"}),t.jsx("button",{onClick:()=>m(u=>({...u,mode:"set"})),style:{...Se.modeBtn,...g.mode==="set"?Se.modeBtnOn:{}},children:"Set total"})]}),t.jsx("label",{style:Se.label,children:g.mode==="set"?"New completed total":"Amount to add (use a negative number to subtract)"}),t.jsx("input",{autoFocus:!0,type:"number",inputMode:"decimal",value:g.amount,onChange:u=>m(k=>({...k,amount:u.target.value})),onKeyDown:u=>u.key==="Enter"&&b(),placeholder:"0",style:Se.input}),!g.ch.allow_negative&&t.jsx("div",{style:Se.progressHint,children:"Negative totals are blocked for this challenge. Enable “Allow negative progress” to permit them."}),t.jsxs("div",{style:Se.modalActions,children:[t.jsx("button",{onClick:()=>m(null),style:Se.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:b,disabled:g.amount===""||isNaN(parseFloat(g.amount)),style:{...Se.saveBtn,...g.amount===""||isNaN(parseFloat(g.amount))?{opacity:.5,cursor:"not-allowed"}:{}},children:[t.jsx(He,{size:15})," Save"]})]})]})})]})}function Pp({status:e}){const r={done:{label:"Completed",color:ta},failed:{label:"Missed",color:ao},active:{label:"In progress",color:"#3A7CA5"}},n=r[e]||r.active;return t.jsx("span",{style:{...Se.badge,color:n.color,background:n.color+"1A",borderColor:n.color+"44"},children:n.label})}const Se={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:780,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},statRow:{display:"flex",gap:10,marginBottom:14,flexWrap:"wrap"},statCard:{flex:1,minWidth:120,background:"var(--surface)",borderRadius:12,padding:"12px 14px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},statVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},addBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"none",background:gn,color:"#fff",padding:"10px 16px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginBottom:16},empty:{fontSize:13.5,color:"var(--text-3)",textAlign:"center",padding:"40px 0",background:"var(--surface)",borderRadius:16,border:"1px dashed var(--border)"},list:{display:"flex",flexDirection:"column",gap:14},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardFailed:{opacity:.72},cardTop:{display:"flex",alignItems:"center",gap:10},num:{fontSize:12,fontWeight:800,color:"var(--text-3)",fontFamily:"'Fraunces',Georgia,serif",flexShrink:0},name:{fontSize:15.5,fontWeight:700,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},nameMobile:{whiteSpace:"normal",overflow:"visible",textOverflow:"clip",wordBreak:"break-word",lineHeight:1.25},badgeRow:{marginTop:6},comment:{fontSize:12,color:"var(--text-3)",marginTop:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},badge:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:20,border:"1px solid",flexShrink:0,whiteSpace:"nowrap"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},barWrap:{marginTop:14},barTrack:{height:14,background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:8,overflow:"hidden",display:"flex"},barFill:{height:"100%",borderRadius:7,transition:"width 0.3s"},barMetaRow:{display:"flex",alignItems:"baseline",gap:8,marginTop:6},completed:{fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},barPct:{fontSize:12,fontWeight:700,color:"var(--text-2)"},target:{fontSize:12,color:"var(--text-3)",marginLeft:"auto"},chips:{display:"flex",gap:7,flexWrap:"wrap",marginTop:12},chip:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:600,color:"var(--text-2)",border:"1px solid var(--border)",borderRadius:20,padding:"4px 10px"},chipReward:{color:gn,borderColor:gn+"55",background:gn+"12"},actions:{marginTop:12},progressBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 14px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:460,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:4},grid2:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},toggleRow:{display:"flex",alignItems:"flex-start",gap:9,marginTop:14,cursor:"pointer"},checkbox:{width:17,height:17,marginTop:1,accentColor:gn,cursor:"pointer",flexShrink:0},toggleLabel:{display:"block",fontSize:13,fontWeight:700},toggleHint:{display:"block",fontSize:11.5,color:"var(--text-3)",marginTop:2},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:ta,color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},progressCur:{fontSize:13,color:"var(--text-2)",marginBottom:12},progressHint:{fontSize:11.5,color:"var(--text-3)",marginTop:6},modeRow:{display:"flex",gap:6,marginBottom:8},modeBtn:{flex:1,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 10px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modeBtnOn:{background:gn,color:"#fff",borderColor:gn}},Wi="#8268B0",Xi="#4C9A6B",X1=e=>e?new Date(e+"T00:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"",Z1=()=>({id:null,wish:"",cost:"",note:"",link:""});function J1(){const e=Jn(),r=S=>Or(S,e.code),[n,o]=c.useState([]),[i,s]=c.useState(!1),[l,a]=c.useState(null),d=c.useCallback(()=>{F.getBucket().then(S=>{o(Array.isArray(S)?S:[]),s(!0)}).catch(()=>s(!0))},[]);c.useEffect(()=>{d()},[d]);const g=c.useMemo(()=>{const S=n.filter(p=>!p.fulfilled);return{total:n.length,fulfilled:n.filter(p=>p.fulfilled).length,openCost:S.reduce((p,b)=>p+(b.cost||0),0)}},[n]),m=()=>a(Z1()),f=S=>a({id:S.id,wish:S.wish,cost:String(S.cost??""),note:S.note||"",link:S.link||""}),h=async()=>{const S=l.wish.trim();if(!S)return;const p={wish:S,cost:parseFloat(l.cost)||0,note:l.note.trim(),link:l.link.trim()};l.id?await F.updateBucketWish(l.id,p):await F.createBucketWish(p),a(null),d()},B=async S=>{window.confirm(`Delete "${S.wish}" from your bucket list?`)&&(await F.deleteBucketWish(S.id),d())},R=async S=>{await F.updateBucketWish(S.id,{fulfilled:!S.fulfilled}),d()},z=async(S,p)=>{const b=S+p;if(b<0||b>=n.length)return;const u=[...n];[u[S],u[b]]=[u[b],u[S]],o(u),await F.arrangeBucket(u.map(k=>k.id)).catch(()=>{}),d()};return t.jsxs("div",{style:Ve.page,children:[t.jsxs("div",{style:Ve.head,children:[t.jsx("div",{style:Ve.eyebrow,children:"Anvil · Bucket List"}),t.jsx("h1",{style:Ve.h1,children:"Bucket List"}),t.jsx("div",{style:Ve.subhead,children:"The materialistic wishes you want to fulfil, big or small — ordered by what matters most."})]}),t.jsxs("div",{style:Ve.statRow,children:[t.jsxs("div",{style:Ve.statCard,children:[t.jsx("div",{style:Ve.statVal,children:g.total}),t.jsx("div",{style:Ve.statLbl,children:"Wishes"})]}),t.jsxs("div",{style:Ve.statCard,children:[t.jsx("div",{style:{...Ve.statVal,color:Xi},children:g.fulfilled}),t.jsx("div",{style:Ve.statLbl,children:"Fulfilled"})]}),t.jsxs("div",{style:Ve.statCard,children:[t.jsx("div",{style:{...Ve.statVal,color:Wi},children:r(g.openCost)}),t.jsx("div",{style:Ve.statLbl,children:"Still wished"})]})]}),t.jsxs("button",{onClick:m,style:Ve.addBtn,children:[t.jsx(st,{size:16})," New wish"]}),n.length===0?t.jsx("div",{style:Ve.empty,children:i?"No wishes yet. Add the first thing you'd love to have.":"Loading…"}):t.jsx("div",{style:Ve.list,children:n.map((S,p)=>t.jsxs("div",{style:{...Ve.card,...S.fulfilled?Ve.cardDone:{}},children:[t.jsxs("div",{style:Ve.reorderCol,children:[t.jsx("button",{onClick:()=>z(p,-1),disabled:p===0,style:{...Ve.reorderBtn,...p===0?Ve.reorderOff:{}},title:"Higher priority",children:t.jsx(va,{size:14})}),t.jsx("span",{style:Ve.rank,children:p+1}),t.jsx("button",{onClick:()=>z(p,1),disabled:p===n.length-1,style:{...Ve.reorderBtn,...p===n.length-1?Ve.reorderOff:{}},title:"Lower priority",children:t.jsx(So,{size:14})})]}),t.jsxs("div",{style:Ve.body,children:[t.jsxs("div",{style:Ve.topRow,children:[t.jsx("span",{style:{...Ve.wishName,...S.fulfilled?Ve.wishNameDone:{}},children:S.wish}),t.jsx("span",{style:Ve.cost,children:r(S.cost)})]}),S.note&&t.jsx("div",{style:Ve.note,children:S.note}),t.jsxs("div",{style:Ve.metaRow,children:[S.fulfilled&&t.jsxs("span",{style:Ve.doneBadge,children:[t.jsx(zg,{size:11})," Fulfilled",S.fulfilled_date?` · ${X1(S.fulfilled_date)}`:""]}),S.link&&t.jsxs("a",{href:S.link,target:"_blank",rel:"noreferrer",style:Ve.link,children:[t.jsx(dc,{size:11})," Link"]})]})]}),t.jsxs("div",{style:Ve.actions,children:[t.jsxs("button",{onClick:()=>R(S),style:{...Ve.pill,...S.fulfilled?{}:{color:Xi,borderColor:Xi+"66"}},title:S.fulfilled?"Mark as not fulfilled":"Mark fulfilled",children:[t.jsx(He,{size:13})," ",S.fulfilled?"Undo":"Fulfilled"]}),t.jsx("button",{onClick:()=>f(S),style:Ve.iconBtn,title:"Edit",children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:()=>B(S),style:Ve.iconBtn,title:"Delete",children:t.jsx(Ae,{size:14})})]})]},S.id))}),t.jsx("div",{style:Ve.footNote,children:"Enable “Fulfil from bucket list” in the Rewards screen to spend your pending reward on these wishes."}),l&&t.jsx("div",{style:Ve.overlay,onClick:()=>a(null),children:t.jsxs("div",{style:Ve.modal,onClick:S=>S.stopPropagation(),children:[t.jsxs("div",{style:Ve.modalHead,children:[t.jsx("span",{style:Ve.modalTitle,children:l.id?"Edit wish":"New wish"}),t.jsx("button",{onClick:()=>a(null),style:Ve.iconBtnPlain,children:t.jsx(Ae,{size:16})})]}),t.jsx("label",{style:Ve.label,children:"Wish *"}),t.jsx("input",{autoFocus:!0,value:l.wish,onChange:S=>a(p=>({...p,wish:S.target.value})),placeholder:"e.g. PlayStation 5, trip to Japan",style:Ve.input}),t.jsx("label",{style:Ve.label,children:"Cost"}),t.jsx("input",{type:"number",inputMode:"decimal",value:l.cost,onChange:S=>a(p=>({...p,cost:S.target.value})),placeholder:"0",style:Ve.input}),t.jsx("label",{style:Ve.label,children:"Link (optional)"}),t.jsx("input",{value:l.link,onChange:S=>a(p=>({...p,link:S.target.value})),placeholder:"https://…",style:Ve.input}),t.jsx("label",{style:Ve.label,children:"Note (optional)"}),t.jsx("input",{value:l.note,onChange:S=>a(p=>({...p,note:S.target.value})),placeholder:"colour, model, why you want it…",style:Ve.input}),t.jsxs("div",{style:Ve.modalActions,children:[t.jsx("button",{onClick:()=>a(null),style:Ve.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:h,disabled:!l.wish.trim(),style:{...Ve.saveBtn,...l.wish.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",l.id?"Save":"Add wish"]})]})]})})]})}const Ve={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:720,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},statRow:{display:"flex",gap:10,marginBottom:14,flexWrap:"wrap"},statCard:{flex:1,minWidth:110,background:"var(--surface)",borderRadius:12,padding:"12px 14px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},statVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},addBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"none",background:Wi,color:"#fff",padding:"10px 16px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginBottom:16},empty:{fontSize:13.5,color:"var(--text-3)",textAlign:"center",padding:"40px 0",background:"var(--surface)",borderRadius:16,border:"1px dashed var(--border)"},list:{display:"flex",flexDirection:"column",gap:10},card:{display:"flex",gap:12,alignItems:"stretch",background:"var(--surface)",borderRadius:14,padding:"12px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardDone:{opacity:.7},reorderCol:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:2,flexShrink:0},reorderBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:24,height:20,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center",padding:0},reorderOff:{opacity:.3,cursor:"not-allowed"},rank:{fontSize:12,fontWeight:800,color:"var(--text-3)",fontFamily:"'Fraunces',Georgia,serif",padding:"1px 0"},body:{flex:1,minWidth:0},topRow:{display:"flex",justifyContent:"space-between",gap:10,alignItems:"baseline"},wishName:{fontSize:15,fontWeight:700,minWidth:0,wordBreak:"break-word"},wishNameDone:{textDecoration:"line-through",color:"var(--text-3)"},cost:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:Wi,flexShrink:0,whiteSpace:"nowrap"},note:{fontSize:12.5,color:"var(--text-3)",marginTop:3},metaRow:{display:"flex",gap:8,flexWrap:"wrap",marginTop:7,alignItems:"center"},doneBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11,fontWeight:700,color:Xi,background:Xi+"1A",borderRadius:20,padding:"3px 9px"},link:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:700,color:Wi,textDecoration:"none"},actions:{display:"flex",flexDirection:"column",gap:6,alignItems:"flex-end",justifyContent:"center",flexShrink:0},pill:{display:"inline-flex",alignItems:"center",gap:4,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 10px",borderRadius:8,fontSize:11.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",whiteSpace:"nowrap"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:26,height:26,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},footNote:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",marginTop:18,fontStyle:"italic"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:4},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:Wi,color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Zi="#3A7CA5",Lt="#4C9A6B",Tt="#C2536B",ra=[{id:"swing",label:"Swing",color:"#8268B0"},{id:"fno",label:"FnO",color:"#C9772E"},{id:"intraday",label:"Intraday",color:"#3A7CA5"}],al=e=>ra.find(r=>r.id===e)||ra[0],e2=new Set(["fno","intraday"]),Np=e=>e2.has(e),Oh=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,dl=Oh(new Date),t2=e=>new Date(e+"T00:00").toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"}),Op=e=>e?new Date(e+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"—",tr=e=>e===""||e===null||e===void 0||isNaN(parseFloat(e))?0:parseFloat(e),hd=(e,r)=>{const n=tr(e.qty);return r==="profit"?Math.abs(tr(e.tgt_price)-tr(e.entry_price))*n:-Math.abs(tr(e.sl_price)-tr(e.entry_price))*n};function r2(e,r,n,o){const i=tr(e.entry_price),s=tr(e.sl_price),l=tr(e.tgt_price),a=tr(e.qty),d=e.direction==="short";if(!e.instrument.trim())return"Enter the instrument.";if(i<=0||s<=0||l<=0||a<=0)return"Entry, SL, target and quantity must all be greater than zero.";if(d){if(s<=i)return"For a short, stop loss must be greater than the entry price (CMP).";if(l>=i)return"For a short, target must be less than the entry price (CMP)."}else{if(s>=i)return"Stop loss must be less than the entry price (CMP).";if(l<=i)return"Target must be greater than the entry price (CMP)."}const g=Math.abs(i-s),m=Math.abs(l-i),f=r.capital||0;if(r.rr>0&&m<r.rr*g-1e-9){const B=d?i-r.rr*g:i+r.rr*g;return`Risk:reward must be ≥ 1:${r.rr}. Target must be ${d?"at most":"at least"} ${B.toLocaleString()}.`}if(r.risk_pct>0&&f>0){const B=f*r.risk_pct/100,R=g*a;if(R>B+1e-9)return`This risks ${o(R)} — over your ${r.risk_pct}% limit of ${o(B)}. Reduce qty or tighten SL.`}const h=(r.diversification||{})[e.kind]||0;if(h>0){if(f>0){const B=f/h,R=i*a;if(R>B+1e-9)return`Position value ${o(R)} exceeds the diversification cap ${o(B)} (capital ÷ ${h}).`}if(n>=h)return`You already hold ${n} open ${e.kind} trade(s); diversification allows ${h}.`}return""}function n2(e=760){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const o2=e=>({id:null,kind:"swing",direction:"long",instrument:"",purchase_date:e,entry_price:"",sl_price:"",tgt_price:"",qty:"",note:""});function i2(){const e=n2(),r=Jn(),n=M=>js(M,r.code),[o,i]=c.useState([]),[s,l]=c.useState({}),[a,d]=c.useState(0),[g,m]=c.useState(0),[f,h]=c.useState(0),[B,R]=c.useState({capital:0,risk_pct:0,rr:0,diversification:{swing:0,fno:0,intraday:0}}),[z,S]=c.useState(!1),[p,b]=c.useState(dl),[u,k]=c.useState(()=>{const M=new Date;return new Date(M.getFullYear(),M.getMonth(),1)}),[x,T]=c.useState(null),[E,w]=c.useState(null),[j,Y]=c.useState(""),q=c.useCallback(()=>{F.getTrades().then(M=>{i(M.entries),l(M.learnings||{}),d(M.capital||0),m(M.net_pl||0),h(M.current||0),M.rules&&R(M.rules),S(!0)}).catch(()=>S(!0))},[]);c.useEffect(()=>{q()},[q]),c.useEffect(()=>{Y(s[p]||"")},[p,s]);const te=c.useMemo(()=>o.filter(M=>M.status==="open"),[o]),he=c.useMemo(()=>o.filter(M=>M.status!=="open"),[o]),G=c.useMemo(()=>{if(!x)return"";const M=te.filter(y=>y.kind===x.kind&&y.id!==x.id).length;return r2(x,B,M,n)},[x,B,te,r.code]),ue=c.useMemo(()=>{const M={};return he.forEach(y=>{M[y.date]=(M[y.date]||0)+(Number(y.pl)||0)}),M},[he]),pe=he.filter(M=>M.date===p),ze=ue[p]||0,re=ze>0?"positive":ze<0?"negative":"neutral",U=c.useMemo(()=>{const M=u,y=(M.getDay()+6)%7,ne=new Date(M.getFullYear(),M.getMonth()+1,0).getDate(),D=[];for(let ge=0;ge<y;ge++)D.push(null);for(let ge=1;ge<=ne;ge++){const ve=Oh(new Date(M.getFullYear(),M.getMonth(),ge)),We=ue[ve],Xe=!!s[ve];D.push({date:ve,day:ge,pl:We,hasLearning:Xe,has:We!==void 0||Xe})}return D},[u,ue,s]),de=M=>k(y=>new Date(y.getFullYear(),y.getMonth()+M,1)),X=u.toLocaleDateString("en-US",{month:"long",year:"numeric"}),I=(M="swing")=>T({...o2(p),kind:M}),A=M=>T({id:M.id,kind:M.kind,direction:M.direction||"long",instrument:M.instrument,purchase_date:M.purchase_date||M.date,entry_price:M.entry_price??"",sl_price:M.sl_price??"",tgt_price:M.tgt_price??"",qty:M.qty??"",note:M.note||""}),P=M=>T(y=>({...y,kind:M,direction:Np(M)?y.direction:"long"})),$=async()=>{if(G)return;const M={kind:x.kind,direction:x.direction,instrument:x.instrument.trim(),purchase_date:x.purchase_date,entry_price:tr(x.entry_price),sl_price:tr(x.sl_price),tgt_price:tr(x.tgt_price),qty:tr(x.qty),note:x.note.trim()};try{x.id?await F.updateTradeEntry(x.id,M):await F.createTradeEntry(M),T(null),q()}catch(y){window.alert(y.message||"Could not save this trade.")}},ae=async M=>{window.confirm("Delete this trade?")&&(await F.deleteTradeEntry(M.id),q())},ce=(M,y)=>w({trade:M,outcome:y,date:M.kind==="intraday"&&M.purchase_date||dl}),De=async()=>{try{await F.bookTradeEntry(E.trade.id,E.outcome,E.date),w(null),q()}catch(M){window.alert(M.message||"Could not book this trade.")}},Q=async M=>{await F.reopenTradeEntry(M.id),q()},ie=async()=>{await F.setTradeLearning(p,j),q()},O=(s[p]||"")!==j,ee=f>=a,fe=g>0?Lt:g<0?Tt:"var(--text)";return t.jsxs("div",{style:K.page,children:[t.jsx("div",{style:K.head,children:t.jsxs("div",{children:[t.jsx("div",{style:K.eyebrow,children:"Anvil · Trading Journal"}),t.jsx("h1",{style:K.h1,children:"Trading Journal"}),t.jsx("div",{style:K.subhead,children:"Open trades with your entry, SL & target — book profit/loss and P/L is calculated for you."})]})}),t.jsxs("div",{style:K.capStrip,children:[t.jsxs("div",{style:K.capBox,children:[t.jsxs("div",{style:K.capLabel,children:[t.jsx(ka,{size:13})," Starting capital"]}),t.jsx("div",{style:K.capVal,children:n(a)}),t.jsx("div",{style:K.capHint,children:"Set in Settings → Trading"})]}),t.jsxs("div",{style:K.capBox,children:[t.jsxs("div",{style:K.capLabel,children:[t.jsx(ah,{size:13})," Net P/L (booked)"]}),t.jsxs("div",{style:{...K.capVal,color:fe},children:[g>=0?"+":"",n(g)]}),t.jsxs("div",{style:K.capHint,children:[he.length," booked · ",te.length," open"]})]}),t.jsxs("div",{style:{...K.capBox,...K.capBoxMain,borderColor:ee?Lt:Tt},children:[t.jsxs("div",{style:K.capLabel,children:[ee?t.jsx(Ki,{size:13,color:Lt}):t.jsx(Yn,{size:13,color:Tt})," Current balance"]}),t.jsx("div",{style:{...K.capValBig,color:ee?Lt:Tt},children:n(f)}),t.jsx("div",{style:K.capHint,children:ee?"Above starting capital":"Below starting capital"})]})]}),t.jsxs("div",{style:K.card,children:[t.jsxs("div",{style:K.cardTitleRow,children:[t.jsxs("div",{children:[t.jsxs("div",{style:K.cardTitle,children:[t.jsx(dh,{size:15,color:Zi})," Open trades"]}),t.jsx("div",{style:K.cardSub,children:"Positions you haven't booked yet — mark profit or loss when you exit."})]}),t.jsx("div",{style:K.addRow,children:ra.map(M=>t.jsxs("button",{onClick:()=>I(M.id),style:{...K.addKindBtn,color:M.color,borderColor:M.color+"55",background:M.color+"12"},children:[t.jsx(st,{size:14})," ",M.label]},M.id))})]}),te.length>0?t.jsx("div",{style:K.openScroll,children:te.map(M=>{const y=al(M.kind);return t.jsxs("div",{style:K.openRow,children:[t.jsx("span",{style:{...K.kindTag,background:y.color+"1A",color:y.color},children:y.label}),t.jsxs("div",{style:K.openBody,children:[t.jsxs("div",{style:K.openTop,children:[t.jsxs("span",{style:K.tradeInstr,children:[M.instrument||"—",t.jsx(Hp,{direction:M.direction})]}),t.jsx("span",{style:K.openQty,children:M.qty?`${M.qty} qty`:""})]}),t.jsxs("div",{style:K.openMeta,children:[t.jsxs("span",{style:K.metaPill,children:["Bought ",Op(M.purchase_date)]}),M.entry_price?t.jsxs("span",{style:K.metaPill,children:["Entry ",M.entry_price]}):null,M.sl_price?t.jsxs("span",{style:{...K.metaPill,color:Tt},children:["SL ",M.sl_price]}):null,M.tgt_price?t.jsxs("span",{style:{...K.metaPill,color:Lt},children:["TGT ",M.tgt_price]}):null]})]}),t.jsxs("div",{style:K.bookBtns,children:[t.jsxs("button",{onClick:()=>ce(M,"profit"),style:{...K.bookBtn,background:Lt},children:[t.jsx(Ki,{size:13})," Profit"]}),t.jsxs("button",{onClick:()=>ce(M,"loss"),style:{...K.bookBtn,background:Tt},children:[t.jsx(Yn,{size:13})," Loss"]}),t.jsx("button",{onClick:()=>A(M),style:K.iconGhost,title:"Edit",children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:()=>ae(M),style:K.iconGhost,title:"Delete",children:t.jsx(vs,{size:13})})]})]},M.id)})}):t.jsx("div",{style:K.noTrades,children:z?"No open trades. Add one with the buttons above.":"Loading…"})]}),t.jsxs("div",{style:{...K.cols,gridTemplateColumns:e?"1fr":"320px 1fr"},children:[t.jsxs("div",{style:K.card,children:[t.jsxs("div",{style:K.calHead,children:[t.jsx("button",{onClick:()=>de(-1),style:K.calNav,children:t.jsx(Sn,{size:16})}),t.jsx("span",{style:K.calTitle,children:X}),t.jsx("button",{onClick:()=>de(1),style:K.calNav,children:t.jsx(nn,{size:16})})]}),t.jsxs("div",{style:K.calGrid,children:[["M","T","W","T","F","S","S"].map((M,y)=>t.jsx("div",{style:K.calDow,children:M},y)),U.map((M,y)=>M===null?t.jsx("div",{},y):t.jsxs("button",{onClick:()=>b(M.date),style:{...K.calCell,...M.date===p?K.calCellOn:{},...M.date===dl&&M.date!==p?K.calCellToday:{}},children:[t.jsx("span",{children:M.day}),M.pl!==void 0&&M.pl!==0&&t.jsx("span",{style:{...K.calDot,background:M.date===p?"#fff":M.pl>0?Lt:Tt}}),M.pl===void 0&&M.hasLearning&&t.jsx("span",{style:{...K.calDot,background:M.date===p?"#fff":"var(--text-3)"}})]},M.date))]}),t.jsxs("div",{style:K.calLegend,children:[t.jsxs("span",{children:[t.jsx("span",{style:{...K.legDot,background:Lt}})," Profit"]}),t.jsxs("span",{children:[t.jsx("span",{style:{...K.legDot,background:Tt}})," Loss"]}),t.jsxs("span",{children:[t.jsx("span",{style:{...K.legDot,background:"var(--text-3)"}})," Learning only"]})]})]}),t.jsxs("div",{children:[t.jsxs("div",{style:K.card,children:[t.jsxs("div",{style:K.cardTitleRow,children:[t.jsxs("div",{children:[t.jsx("div",{style:K.cardTitle,children:t2(p)}),t.jsxs("div",{style:K.cardSub,children:[pe.length," booked trade",pe.length===1?"":"s"," this day"]})]}),t.jsxs("div",{style:K.dayPLWrap,children:[t.jsx("span",{style:{...K.sentiment,...re==="positive"?{background:Lt+"1A",color:Lt}:re==="negative"?{background:Tt+"1A",color:Tt}:{background:"var(--hover)",color:"var(--text-3)"}},children:re==="positive"?"Positive day":re==="negative"?"Negative day":"No trades"}),t.jsxs("span",{style:{...K.dayPL,color:ze>0?Lt:ze<0?Tt:"var(--text-2)"},children:[ze>=0?"+":"",n(ze)]})]})]}),pe.length>0?t.jsx("div",{style:K.tradeList,children:pe.map(M=>{const y=al(M.kind),ne=(Number(M.pl)||0)>=0;return t.jsxs("div",{style:K.tradeRow,children:[t.jsx("span",{style:{...K.kindTag,background:y.color+"1A",color:y.color},children:y.label}),t.jsxs("div",{style:K.tradeBody,children:[t.jsxs("div",{style:K.tradeTop,children:[t.jsxs("span",{style:K.tradeInstr,children:[M.instrument||"—",t.jsx(Hp,{direction:M.direction})]}),t.jsxs("span",{style:{...K.tradePL,color:ne?Lt:Tt},children:[ne?"+":"",n(Number(M.pl)||0)]})]}),t.jsxs("div",{style:K.tradeMeta,children:[M.entry_price?t.jsxs("span",{style:K.metaPill,children:["Entry ",M.entry_price]}):null,M.sl_price?t.jsxs("span",{style:K.metaPill,children:["SL ",M.sl_price]}):null,M.tgt_price?t.jsxs("span",{style:K.metaPill,children:["TGT ",M.tgt_price]}):null,M.qty?t.jsxs("span",{style:K.metaPill,children:[M.qty," qty"]}):null,M.purchase_date&&M.purchase_date!==M.date&&t.jsxs("span",{style:K.metaPill,children:["Bought ",Op(M.purchase_date)]}),M.note&&t.jsx("span",{style:K.tradeNote,children:M.note})]})]}),t.jsx("button",{onClick:()=>Q(M),style:K.iconGhost,title:"Reopen",children:t.jsx(Sh,{size:13})}),t.jsx("button",{onClick:()=>ae(M),style:K.iconGhost,title:"Delete",children:t.jsx(vs,{size:13})})]},M.id)})}):t.jsx("div",{style:K.noTrades,children:"No trades booked on this day — you can still record a learning below."})]}),t.jsxs("div",{style:K.card,children:[t.jsxs("div",{style:K.cardTitle,children:[t.jsx(ya,{size:15,color:Zi})," Daily learning"]}),t.jsx("textarea",{value:j,onChange:M=>Y(M.target.value),placeholder:"What did you learn today? Mistakes, what worked, discipline notes…",style:K.learnArea}),t.jsxs("button",{onClick:ie,disabled:!O,style:{...K.saveBtn,...O?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:14})," Save learning"]})]})]})]}),x&&(()=>{const M=al(x.kind),y=x.direction==="short",ne=y?Tt:Lt,D=hd(x,"profit"),ge=hd(x,"loss");return t.jsx("div",{style:K.overlay,onClick:()=>T(null),children:t.jsxs("div",{style:K.sheet,onClick:ve=>ve.stopPropagation(),children:[t.jsxs("div",{style:{...K.sheetHead,background:`linear-gradient(135deg, ${M.color}, ${ne})`},children:[t.jsxs("div",{style:K.sheetHeadRow,children:[t.jsx("span",{style:K.sheetKicker,children:x.id?"Edit position":"New position"}),t.jsx("button",{onClick:()=>T(null),style:K.sheetClose,children:t.jsx(Ae,{size:16})})]}),t.jsx("div",{style:K.sheetTitle,children:x.instrument||"Open trade"}),t.jsxs("div",{style:K.sheetChips,children:[t.jsx("span",{style:K.sheetChip,children:M.label}),t.jsx("span",{style:K.sheetChip,children:y?"Short ▼":"Long ▲"}),tr(x.qty)>0&&t.jsxs("span",{style:K.sheetChip,children:[tr(x.qty)," qty"]})]})]}),t.jsxs("div",{style:K.sheetBody,children:[t.jsx("label",{style:K.fLabel,children:"Type"}),t.jsx("div",{style:K.seg,children:ra.map(ve=>t.jsx("button",{type:"button",onClick:()=>P(ve.id),style:{...K.segBtn,...x.kind===ve.id?{...K.segBtnOn,background:ve.color}:{}},children:ve.label},ve.id))}),Np(x.kind)&&t.jsxs(t.Fragment,{children:[t.jsx("label",{style:K.fLabel,children:"Direction"}),t.jsxs("div",{style:K.seg,children:[t.jsxs("button",{type:"button",onClick:()=>T(ve=>({...ve,direction:"long"})),style:{...K.segBtn,...y?{}:{...K.segBtnOn,background:Lt}},children:[t.jsx(Ki,{size:14})," Long"]}),t.jsxs("button",{type:"button",onClick:()=>T(ve=>({...ve,direction:"short"})),style:{...K.segBtn,...y?{...K.segBtnOn,background:Tt}:{}},children:[t.jsx(Yn,{size:14})," Short"]})]}),t.jsx("div",{style:K.dirHint,children:y?"Short — profit when price falls. SL sits above CMP, target below.":"Long — profit when price rises. SL sits below CMP, target above."})]}),t.jsx("label",{style:K.fLabel,children:"Instrument"}),t.jsx("input",{autoFocus:!0,value:x.instrument,onChange:ve=>T(We=>({...We,instrument:ve.target.value.toUpperCase()})),placeholder:"e.g. NIFTY 22000 CE, RELIANCE",style:{...K.field,textTransform:"uppercase"}}),t.jsxs("div",{style:K.grid2,children:[t.jsxs("div",{children:[t.jsx("label",{style:K.fLabel,children:"Entry (CMP)"}),t.jsx("input",{type:"number",inputMode:"decimal",value:x.entry_price,onChange:ve=>T(We=>({...We,entry_price:ve.target.value})),placeholder:"0",style:K.field})]}),t.jsxs("div",{children:[t.jsx("label",{style:K.fLabel,children:"Quantity"}),t.jsx("input",{type:"number",inputMode:"decimal",value:x.qty,onChange:ve=>T(We=>({...We,qty:ve.target.value})),placeholder:"0",style:K.field})]})]}),t.jsxs("div",{style:K.grid2,children:[t.jsxs("div",{children:[t.jsxs("label",{style:{...K.fLabel,color:Tt},children:["Stop loss",y?" (above)":" (below)"]}),t.jsx("input",{type:"number",inputMode:"decimal",value:x.sl_price,onChange:ve=>T(We=>({...We,sl_price:ve.target.value})),placeholder:"0",style:{...K.field,borderColor:Tt+"55"}})]}),t.jsxs("div",{children:[t.jsxs("label",{style:{...K.fLabel,color:Lt},children:["Target",y?" (below)":" (above)"]}),t.jsx("input",{type:"number",inputMode:"decimal",value:x.tgt_price,onChange:ve=>T(We=>({...We,tgt_price:ve.target.value})),placeholder:"0",style:{...K.field,borderColor:Lt+"55"}})]})]}),t.jsxs("div",{style:K.preview2,children:[t.jsxs("div",{style:{...K.previewCell,background:Lt+"12"},children:[t.jsx("span",{style:K.previewLbl,children:"If target hit"}),t.jsxs("span",{style:{...K.previewVal,color:Lt},children:["+",n(D)]})]}),t.jsxs("div",{style:{...K.previewCell,background:Tt+"12"},children:[t.jsx("span",{style:K.previewLbl,children:"If SL hit"}),t.jsx("span",{style:{...K.previewVal,color:Tt},children:n(ge)})]})]}),t.jsx("label",{style:K.fLabel,children:"Purchase date"}),t.jsx("input",{type:"date",value:x.purchase_date,onChange:ve=>T(We=>({...We,purchase_date:ve.target.value})),style:K.field}),t.jsx("label",{style:K.fLabel,children:"Note (optional)"}),t.jsx("input",{value:x.note,onChange:ve=>T(We=>({...We,note:ve.target.value})),placeholder:"reason, setup, emotion…",style:K.field}),G?t.jsx("div",{style:K.errBanner,children:G}):t.jsx(s2,{rules:B,kind:x.kind,money:n})]}),t.jsxs("div",{style:K.sheetFoot,children:[t.jsx("button",{onClick:()=>T(null),style:K.ghostBtn,children:"Cancel"}),t.jsxs("button",{onClick:$,disabled:!!G,style:{...K.primaryBtn,background:ne,...G?{opacity:.45,cursor:"not-allowed"}:{}},children:[t.jsx(He,{size:16})," ",x.id?"Save changes":"Open trade"]})]})]})})})(),E&&(()=>{const M=E.outcome==="profit",y=M?Lt:Tt,ne=E.trade,D=(ne.direction||"long")==="short",ge=al(ne.kind),ve=M?D?`(Entry ${ne.entry_price||0} − TGT ${ne.tgt_price||0}) × ${ne.qty||0}`:`(TGT ${ne.tgt_price||0} − Entry ${ne.entry_price||0}) × ${ne.qty||0}`:D?`(SL ${ne.sl_price||0} − Entry ${ne.entry_price||0}) × ${ne.qty||0}`:`(Entry ${ne.entry_price||0} − SL ${ne.sl_price||0}) × ${ne.qty||0}`;return t.jsx("div",{style:K.overlay,onClick:()=>w(null),children:t.jsxs("div",{style:K.sheet,onClick:We=>We.stopPropagation(),children:[t.jsxs("div",{style:{...K.sheetHead,background:`linear-gradient(135deg, ${y}, ${y}CC)`},children:[t.jsxs("div",{style:K.sheetHeadRow,children:[t.jsx("span",{style:K.sheetKicker,children:M?"Book profit":"Book loss"}),t.jsx("button",{onClick:()=>w(null),style:K.sheetClose,children:t.jsx(Ae,{size:16})})]}),t.jsx("div",{style:K.sheetTitle,children:ne.instrument||"—"}),t.jsxs("div",{style:K.sheetChips,children:[t.jsx("span",{style:K.sheetChip,children:ge.label}),t.jsx("span",{style:K.sheetChip,children:D?"Short":"Long"})]})]}),t.jsxs("div",{style:K.sheetBody,children:[t.jsxs("div",{style:K.bookHero,children:[t.jsx("span",{style:K.bookHeroLbl,children:M?"Realized profit":"Realized loss"}),t.jsxs("span",{style:{...K.bookHeroVal,color:y},children:[M?"+":"",n(hd(ne,E.outcome))]}),t.jsx("span",{style:K.bookHeroMeta,children:ve})]}),ne.kind==="intraday"?t.jsxs(t.Fragment,{children:[t.jsx("label",{style:K.fLabel,children:"Outcome date · locked to purchase day"}),t.jsx("input",{type:"date",value:E.date,min:ne.purchase_date,max:ne.purchase_date,disabled:!0,style:{...K.field,opacity:.7,cursor:"not-allowed"}}),t.jsx("div",{style:K.dirHint,children:"Intraday trades are squared off the same day they're bought."})]}):t.jsxs(t.Fragment,{children:[t.jsx("label",{style:K.fLabel,children:"Outcome date · colours this day"}),t.jsx("input",{type:"date",value:E.date,onChange:We=>w(Xe=>({...Xe,date:We.target.value})),style:K.field})]})]}),t.jsxs("div",{style:K.sheetFoot,children:[t.jsx("button",{onClick:()=>w(null),style:K.ghostBtn,children:"Cancel"}),t.jsxs("button",{onClick:De,disabled:!E.date,style:{...K.primaryBtn,background:y,...E.date?{}:{opacity:.45,cursor:"not-allowed"}},children:[t.jsx(He,{size:16})," Book ",E.outcome]})]})]})})})()]})}function Hp({direction:e}){return(e||"long")!=="short"?null:t.jsxs("span",{style:K.dirBadge,children:[t.jsx(Yn,{size:10})," SHORT"]})}function s2({rules:e,kind:r,money:n}){const o=[],i=e.capital||0;e.rr>0&&o.push(`Min risk:reward 1:${e.rr}`),e.risk_pct>0&&i>0&&o.push(`Max risk ${n(i*e.risk_pct/100)} (${e.risk_pct}%)`);const s=(e.diversification||{})[r]||0;return s>0&&(i>0&&o.push(`Max position ${n(i/s)}`),o.push(`Max ${s} open ${r}`)),o.length?t.jsxs("div",{style:K.rulesHint,children:["Rules · ",o.join(" · ")]}):null}const K={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:1100,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},capStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:12,marginBottom:18},capBox:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:"13px 16px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},capBoxMain:{borderWidth:2},capLabel:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,fontWeight:600,color:"var(--text-2)"},capVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.1},capValBig:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.1},capHint:{fontSize:10.5,color:"var(--text-3)",marginTop:4},cols:{display:"grid",gap:16,alignItems:"start"},card:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{width:30,height:30,borderRadius:8,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:4},calDow:{fontSize:10,fontWeight:700,color:"var(--text-3)",textAlign:"center",padding:"2px 0"},calCell:{position:"relative",aspectRatio:"1",border:"1px solid transparent",borderRadius:8,background:"var(--bg)",color:"var(--text-2)",fontSize:12.5,fontWeight:600,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},calCellOn:{background:Zi,color:"#fff"},calCellToday:{borderColor:Zi},calDot:{position:"absolute",bottom:4,width:5,height:5,borderRadius:"50%"},calLegend:{display:"flex",gap:12,flexWrap:"wrap",marginTop:12,fontSize:10.5,color:"var(--text-3)",fontWeight:600},legDot:{display:"inline-block",width:7,height:7,borderRadius:"50%",marginRight:4},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:10,marginBottom:12,flexWrap:"wrap"},cardTitle:{display:"flex",alignItems:"center",gap:6,fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:12,color:"var(--text-3)",marginTop:2},dayPLWrap:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:4},sentiment:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:10},dayPL:{fontSize:17,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},addRow:{display:"flex",gap:8,flexWrap:"wrap"},addKindBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid",borderRadius:9,padding:"7px 12px",fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},openScroll:{display:"flex",flexDirection:"column",gap:8,maxHeight:320,overflowY:"auto",paddingRight:2},openRow:{display:"flex",alignItems:"flex-start",gap:9,padding:"10px 11px",background:"var(--bg)",border:"1px solid var(--border)",borderRadius:10,flexWrap:"wrap"},openBody:{flex:1,minWidth:140},openTop:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"baseline"},openQty:{fontSize:11.5,fontWeight:700,color:"var(--text-3)",flexShrink:0},openMeta:{display:"flex",gap:6,flexWrap:"wrap",marginTop:5,alignItems:"center"},bookBtns:{display:"flex",gap:6,alignItems:"center",flexShrink:0},bookBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",color:"#fff",padding:"6px 11px",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},tradeList:{display:"flex",flexDirection:"column",gap:8},tradeRow:{display:"flex",alignItems:"flex-start",gap:9,padding:"9px 10px",background:"var(--bg)",border:"1px solid var(--border)",borderRadius:10},kindTag:{fontSize:10.5,fontWeight:800,padding:"3px 8px",borderRadius:7,flexShrink:0,marginTop:1},tradeBody:{flex:1,minWidth:0},tradeTop:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"baseline"},tradeInstr:{fontSize:13.5,fontWeight:700,wordBreak:"break-word"},tradePL:{fontSize:13.5,fontWeight:800,flexShrink:0},tradeMeta:{display:"flex",gap:6,flexWrap:"wrap",marginTop:5,alignItems:"center"},metaPill:{fontSize:10.5,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",borderRadius:6,padding:"2px 7px"},tradeNote:{fontSize:11.5,color:"var(--text-3)",fontStyle:"italic"},iconGhost:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",flexShrink:0},noTrades:{fontSize:12.5,color:"var(--text-3)",fontStyle:"italic",textAlign:"center",padding:"16px 8px",border:"1px dashed var(--border)",borderRadius:8},learnArea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"11px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--bg)",outline:"none",minHeight:90,resize:"vertical",lineHeight:1.55,marginTop:8},saveBtn:{display:"inline-flex",alignItems:"center",gap:6,marginTop:10,border:"none",background:Zi,color:"#fff",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},dirBadge:{display:"inline-flex",alignItems:"center",gap:2,fontSize:9.5,fontWeight:800,letterSpacing:"0.03em",color:Tt,background:Tt+"1A",borderRadius:5,padding:"1px 5px",marginLeft:6,verticalAlign:"middle"},overlay:{position:"fixed",inset:0,background:"rgba(20,18,15,0.55)",backdropFilter:"blur(3px)",zIndex:200,display:"grid",placeItems:"center",padding:16},sheet:{background:"var(--surface)",borderRadius:20,width:"100%",maxWidth:460,maxHeight:"92vh",display:"flex",flexDirection:"column",overflow:"hidden",boxShadow:"0 24px 64px rgba(0,0,0,0.34)",boxSizing:"border-box"},sheetHead:{padding:"16px 18px 18px",color:"#fff"},sheetHeadRow:{display:"flex",justifyContent:"space-between",alignItems:"center"},sheetKicker:{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",opacity:.9},sheetClose:{border:"none",background:"rgba(255,255,255,0.2)",color:"#fff",width:30,height:30,borderRadius:9,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},sheetTitle:{fontSize:22,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:8,wordBreak:"break-word",lineHeight:1.15},sheetChips:{display:"flex",gap:6,flexWrap:"wrap",marginTop:10},sheetChip:{fontSize:11,fontWeight:700,background:"rgba(255,255,255,0.22)",color:"#fff",borderRadius:20,padding:"3px 10px"},sheetBody:{padding:"16px 18px 6px",overflowY:"auto"},sheetFoot:{display:"flex",gap:10,padding:"14px 18px 16px",borderTop:"1px solid var(--border)",background:"var(--surface)"},fLabel:{display:"block",fontSize:11,fontWeight:700,color:"var(--text-2)",margin:"12px 0 5px",textTransform:"uppercase",letterSpacing:"0.05em"},field:{width:"100%",border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:14,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)"},grid2:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},seg:{display:"flex",gap:4,background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:4},segBtn:{flex:1,display:"inline-flex",alignItems:"center",justifyContent:"center",gap:5,border:"none",background:"none",color:"var(--text-2)",padding:"9px 0",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",transition:"background 0.12s"},segBtnOn:{color:"#fff",boxShadow:"0 2px 8px rgba(0,0,0,0.18)"},dirHint:{fontSize:11.5,color:"var(--text-3)",marginTop:7,lineHeight:1.4},preview2:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginTop:14},previewCell:{display:"flex",flexDirection:"column",gap:2,borderRadius:12,padding:"11px 13px"},previewLbl:{fontSize:11,fontWeight:600,color:"var(--text-2)"},previewVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},bookHero:{textAlign:"center",padding:"14px 0 6px"},bookHeroLbl:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em"},bookHeroVal:{display:"block",fontSize:34,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.05},bookHeroMeta:{display:"block",fontSize:11.5,color:"var(--text-3)",marginTop:6},errBanner:{marginTop:14,background:Tt+"18",border:`1px solid ${Tt}55`,color:Tt,borderRadius:10,padding:"10px 12px",fontSize:12.5,fontWeight:600,lineHeight:1.4},rulesHint:{marginTop:14,fontSize:11.5,color:"var(--text-3)",fontWeight:600,lineHeight:1.4},ghostBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"11px 18px",borderRadius:11,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},primaryBtn:{flex:1,display:"inline-flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",color:"#fff",padding:"11px 18px",borderRadius:11,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Cc=[{id:"sandstone",name:"Sandstone",description:"Warm editorial light — the original Anvil look.",dark:!1,swatch:["#F7F6F3","#4C9A6B","#26241F"],vars:{"--bg":"#F7F6F3","--surface":"#FFFFFF","--surface-2":"#FAFAF8","--hover":"#F2F1EC","--border":"#ECEAE3","--text":"#26241F","--text-2":"#6B675E","--text-3":"#9A968C","--accent":"#4C9A6B","--accent-strong":"#26241F","--accent-2":"#3A352C"}},{id:"midnight",name:"Midnight",description:"Deep low-glare dark mode for night owls and focus.",dark:!0,swatch:["#161513","#6FB58C","#ECEAE3"],vars:{"--bg":"#161513","--surface":"#211F1C","--surface-2":"#1B1A17","--hover":"#2B2924","--border":"#34312B","--text":"#ECEAE3","--text-2":"#B6B1A6","--text-3":"#8A857A","--accent":"#6FB58C","--accent-strong":"#2E6F4B","--accent-2":"#245C3E"}},{id:"blossom",name:"Blossom",description:"Soft rose & blush — gentle, warm, and feminine.",dark:!1,swatch:["#FFF5F8","#E0608E","#B23A6B"],vars:{"--bg":"#FFF5F8","--surface":"#FFFFFF","--surface-2":"#FFF0F4","--hover":"#FDE7EE","--border":"#F6D9E2","--text":"#3D2230","--text-2":"#7A5466","--text-3":"#B08799","--accent":"#E0608E","--accent-strong":"#B23A6B","--accent-2":"#9C2F5C"}},{id:"tide",name:"Tide",description:"Calm professional blues — clean and focused.",dark:!1,swatch:["#F1F6FA","#2E86C1","#1C4E73"],vars:{"--bg":"#F1F6FA","--surface":"#FFFFFF","--surface-2":"#ECF3F9","--hover":"#E2EEF6","--border":"#D5E3EE","--text":"#13283A","--text-2":"#4A6275","--text-3":"#8AA0B0","--accent":"#2E86C1","--accent-strong":"#1C4E73","--accent-2":"#163E5C"}},{id:"velocity",name:"Velocity",description:"High-energy sport — crisp slate with electric orange.",dark:!1,swatch:["#F4F5F7","#F4511E","#1F2A37"],vars:{"--bg":"#F4F5F7","--surface":"#FFFFFF","--surface-2":"#EEF0F3","--hover":"#E7EAEE","--border":"#DCE0E6","--text":"#18202B","--text-2":"#515B68","--text-3":"#8B95A1","--accent":"#F4511E","--accent-strong":"#1F2A37","--accent-2":"#16202B"}},{id:"evergreen",name:"Evergreen",description:"Earthy forest greens — grounded and natural.",dark:!1,swatch:["#F2F6F1","#3E8E52","#2A4A30"],vars:{"--bg":"#F2F6F1","--surface":"#FFFFFF","--surface-2":"#ECF2EA","--hover":"#E4EEE2","--border":"#D7E4D3","--text":"#1E2B20","--text-2":"#4F6151","--text-3":"#8AA08C","--accent":"#3E8E52","--accent-strong":"#2A4A30","--accent-2":"#213B26"}},{id:"amethyst",name:"Amethyst",description:"Premium purple & plum — elegant and refined.",dark:!1,swatch:["#F6F4FB","#7A4FE0","#3A2D5C"],vars:{"--bg":"#F6F4FB","--surface":"#FFFFFF","--surface-2":"#F1EDF9","--hover":"#EAE3F6","--border":"#DFD6F0","--text":"#241B36","--text-2":"#5A4E72","--text-3":"#9588AE","--accent":"#7A4FE0","--accent-strong":"#3A2D5C","--accent-2":"#2E2349"}}],Gp="sandstone",Hh="anvil_theme",l2=e=>Cc.find(r=>r.id===e)||Cc[0];function Gh(){try{return localStorage.getItem(Hh)||Gp}catch{return Gp}}function Mi(e,r=!0){const n=l2(e),o=document.documentElement;Object.entries(n.vars).forEach(([s,l])=>o.style.setProperty(s,l)),o.style.colorScheme=n.dark?"dark":"light",o.setAttribute("data-theme",n.id);const i=document.querySelector('meta[name="theme-color"]');if(i&&i.setAttribute("content",n.vars["--surface"]),r)try{localStorage.setItem(Hh,n.id)}catch{}return n.id}const a2=e=>e%10===1&&e!==11?"st":e%10===2&&e!==12?"nd":e%10===3&&e!==13?"rd":"th";function d2(e=560){const[r,n]=c.useState(()=>window.innerWidth<=e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<=e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}function c2({screens:e,order:r,hidden:n,themeId:o,currency:i,monthStartDay:s,ticker:l,defaultScreen:a,onSetDefault:d,onSaveSidebar:g,onPreviewTheme:m,onCommitTheme:f,onSelectCurrency:h,onSelectMonthStartDay:B,onSaveTicker:R,onClose:z}){const[S,p]=c.useState("sidebar"),[b,u]=c.useState(()=>r.map(se=>({id:se,hidden:n.includes(se)}))),[k,x]=c.useState(o),[T,E]=c.useState(""),[w,j]=c.useState(!1),[Y,q]=c.useState(""),[te,he]=c.useState(!1),[G,ue]=c.useState(""),[pe,ze]=c.useState(""),[re,U]=c.useState({swing:"",fno:"",intraday:""}),[de,X]=c.useState(!1),I=d2(),[A,P]=c.useState(!!(l!=null&&l.enabled)),[$,ae]=c.useState(()=>{const se=Array.isArray(l==null?void 0:l.statements)?l.statements.slice(0,5):[];return se.length?se:[""]}),[ce,De]=c.useState((l==null?void 0:l.speed)??60),[Q,ie]=c.useState((l==null?void 0:l.delay)??3),[O,ee]=c.useState(!1),fe=(se,Me)=>ae(qe=>qe.map((nt,ct)=>ct===se?Me:nt)),M=()=>ae(se=>se.length<5?[...se,""]:se),y=se=>ae(Me=>Me.length>1?Me.filter((qe,nt)=>nt!==se):Me),ne=()=>{const se=$.map(Me=>Me.trim()).filter(Boolean).slice(0,5);R({enabled:A,statements:se,speed:Number(ce),delay:Number(Q)}),ee(!0),setTimeout(()=>ee(!1),1500)};c.useEffect(()=>{F.getSetting("golden_music").then(se=>E((se==null?void 0:se.value)||"")).catch(()=>{})},[]);const D=()=>{F.setSetting("golden_music",T.trim()).then(()=>{j(!0),setTimeout(()=>j(!1),1500)}).catch(()=>{})};c.useEffect(()=>{F.getSetting("trading_capital").then(se=>q((se==null?void 0:se.value)||"")).catch(()=>{})},[]);const ge=()=>{F.setSetting("trading_capital",String(parseFloat(Y)||0)).then(()=>{he(!0),setTimeout(()=>he(!1),1500)}).catch(()=>{})};c.useEffect(()=>{F.getSetting("trading_risk_pct").then(se=>ue((se==null?void 0:se.value)??"")).catch(()=>{}),F.getSetting("trading_rr").then(se=>ze((se==null?void 0:se.value)??"")).catch(()=>{}),F.getSetting("trading_diversification").then(se=>{const Me=(se==null?void 0:se.value)||{};U({swing:Me.swing??"",fno:Me.fno??"",intraday:Me.intraday??""})}).catch(()=>{})},[]);const ve=()=>{const se={swing:parseInt(re.swing,10)||0,fno:parseInt(re.fno,10)||0,intraday:parseInt(re.intraday,10)||0};Promise.all([F.setSetting("trading_risk_pct",parseFloat(G)||0),F.setSetting("trading_rr",parseFloat(pe)||0),F.setSetting("trading_diversification",se)]).then(()=>{X(!0),setTimeout(()=>X(!1),1500)}).catch(()=>{})},We=se=>{x(se),m(se)},Xe=b.filter(se=>!se.hidden).length,dt=(se,Me)=>{const qe=se+Me;if(qe<0||qe>=b.length)return;const nt=[...b];[nt[se],nt[qe]]=[nt[qe],nt[se]],u(nt)},$e=se=>{const Me=b[se];if(!Me.hidden&&Xe<=1)return;const qe=[...b];qe[se]={...Me,hidden:!Me.hidden},u(qe)},rt=()=>{g(b.map(se=>se.id),b.filter(se=>se.hidden).map(se=>se.id))},Qe=I?{...we.overlay,padding:0}:we.overlay,at=I?{...we.modal,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"100%",borderRadius:0,border:"none"}:we.modal;return t.jsx("div",{style:Qe,onClick:z,children:t.jsxs("div",{style:at,onClick:se=>se.stopPropagation(),children:[t.jsxs("div",{style:we.head,children:[t.jsx("div",{style:we.title,children:"Settings"}),t.jsx("button",{onClick:z,style:we.closeBtn,children:t.jsx(Ae,{size:18})})]}),t.jsxs("div",{style:we.tabs,children:[t.jsxs("button",{onClick:()=>p("sidebar"),style:{...we.tab,...S==="sidebar"?we.tabOn:{}},children:[t.jsx(t0,{size:15})," Configure sidebar"]}),t.jsxs("button",{onClick:()=>p("themes"),style:{...we.tab,...S==="themes"?we.tabOn:{}},children:[t.jsx(s0,{size:15})," Themes"]}),t.jsxs("button",{onClick:()=>p("currency"),style:{...we.tab,...S==="currency"?we.tabOn:{}},children:[t.jsx(Ny,{size:15})," Monetary"]}),t.jsxs("button",{onClick:()=>p("music"),style:{...we.tab,...S==="music"?we.tabOn:{}},children:[t.jsx(Cg,{size:15})," Music"]}),t.jsxs("button",{onClick:()=>p("reminders"),style:{...we.tab,...S==="reminders"?we.tabOn:{}},children:[t.jsx(ph,{size:15})," Reminders"]})]}),t.jsx("div",{style:we.body,children:S==="sidebar"?t.jsxs(t.Fragment,{children:[t.jsxs("p",{style:we.hint,children:["Reorder with the arrows, hide ones you don't use, and tap ",t.jsx(xs,{size:11,style:{verticalAlign:"-1px"}})," to set the screen that opens on launch."]}),t.jsx("div",{style:we.list,children:b.map((se,Me)=>{const qe=e[se.id],nt=qe.icon,ct=a===se.id;return t.jsxs("div",{style:{...we.row,opacity:se.hidden?.5:1,...ct?{borderColor:"var(--accent)"}:{}},children:[t.jsx("span",{style:we.rowNum,children:Me+1}),t.jsx(nt,{size:16}),t.jsxs("span",{style:we.rowLabel,children:[qe.label,ct&&t.jsx("span",{style:we.defaultTag,children:"default"})]}),t.jsx("button",{onClick:()=>d(se.id),title:ct?"Opens on launch":"Set as default",style:{...we.iconBtn,...ct?{color:"var(--accent)"}:{}},children:t.jsx(xs,{size:15})}),t.jsx("button",{onClick:()=>$e(Me),title:se.hidden?"Show":"Hide",style:{...we.iconBtn,...se.hidden?{}:{color:"var(--accent)"}},children:se.hidden?t.jsx(Ql,{size:15}):t.jsx(hs,{size:15})}),t.jsx("button",{onClick:()=>dt(Me,-1),disabled:Me===0,style:{...we.iconBtn,opacity:Me===0?.3:1},children:t.jsx(va,{size:15})}),t.jsx("button",{onClick:()=>dt(Me,1),disabled:Me===b.length-1,style:{...we.iconBtn,opacity:Me===b.length-1?.3:1},children:t.jsx(So,{size:15})})]},se.id)})}),t.jsxs("button",{onClick:rt,style:we.saveBtn,children:[t.jsx(He,{size:15})," Save sidebar"]})]}):S==="currency"?t.jsxs(t.Fragment,{children:[t.jsx("p",{style:we.hint,children:"Choose the currency used across Wallet and Worth. Applies instantly."}),t.jsx("div",{style:we.list,children:mc.map(se=>{const Me=se.code===i;return t.jsxs("button",{onClick:()=>h(se.code),style:{...we.row,cursor:"pointer",textAlign:"left",width:"100%",...Me?{borderColor:"var(--accent)"}:{}},children:[t.jsx("span",{style:we.curSymbol,children:se.symbol}),t.jsxs("span",{style:we.rowLabel,children:[se.label," ",t.jsx("span",{style:we.curCode,children:se.code})]}),Me&&t.jsx("span",{style:we.themeCheck,children:t.jsx(He,{size:13})})]},se.code)})}),t.jsx("div",{style:we.subDivider}),t.jsx("div",{style:we.fieldLbl,children:"Month starts on"}),t.jsx("p",{style:we.hint,children:'If your salary lands on the 25th, set this to 25 — Wallet and Expenses will treat each "month" as running 25th to 24th instead of calendar month.'}),t.jsx("select",{value:s,onChange:se=>B(Number(se.target.value)),style:we.musicInput,children:Array.from({length:28},(se,Me)=>Me+1).map(se=>t.jsx("option",{value:se,children:se===1?"1st (calendar month)":`${se}${a2(se)}`},se))}),t.jsx("div",{style:we.subDivider}),t.jsx("div",{style:we.fieldLbl,children:"Trading capital"}),t.jsxs("p",{style:we.hint,children:["Your starting capital for the ",t.jsx("b",{children:"Trading Journal"}),". The page shows this plus your all-time net P/L — green when in profit, red when below."]}),t.jsx("input",{type:"number",value:Y,onChange:se=>q(se.target.value),placeholder:"e.g. 100000",style:we.musicInput}),t.jsxs("button",{onClick:ge,style:we.saveBtn,children:[t.jsx(He,{size:15})," ",te?"Saved":"Save capital"]}),t.jsx("div",{style:we.subDivider}),t.jsx("div",{style:we.fieldLbl,children:"Trading discipline rules"}),t.jsx("p",{style:we.hint,children:"Guardrails enforced when opening a trade. A trade that breaks any rule can't be saved. Leave a field at 0 (or blank) to disable that rule."}),t.jsx("label",{style:we.miniLbl,children:"Risk per trade (%)"}),t.jsx("p",{style:we.hint,children:"Max loss on any single trade as a percent of capital. e.g. 2% of 100000 caps loss at 2000 — quantity or SL that risks more is blocked."}),t.jsx("input",{type:"number",step:"0.1",min:"0",value:G,onChange:se=>ue(se.target.value),placeholder:"e.g. 2",style:we.musicInput}),t.jsx("label",{style:we.miniLbl,children:"Risk : Reward (1 : R)"}),t.jsx("p",{style:we.hint,children:"Minimum reward multiple of risk. Enter 3 for 1:3 — if SL is 5 below entry, target must be at least 15 above entry."}),t.jsx("input",{type:"number",step:"0.5",min:"0",value:pe,onChange:se=>ze(se.target.value),placeholder:"e.g. 3",style:we.musicInput}),t.jsx("label",{style:we.miniLbl,children:"Diversification (max open trades per section)"}),t.jsx("p",{style:we.hint,children:"Limits how many open trades you may hold per section, and caps each position's value at capital ÷ this number (e.g. 5 → max 20000 per trade on 100000 capital)."}),t.jsx("div",{style:we.divGrid,children:[["swing","Swing"],["fno","FnO"],["intraday","Intraday"]].map(([se,Me])=>t.jsxs("div",{style:we.divCell,children:[t.jsx("span",{style:we.divLbl,children:Me}),t.jsx("input",{type:"number",min:"0",step:"1",value:re[se],onChange:qe=>U(nt=>({...nt,[se]:qe.target.value})),placeholder:"0",style:we.divInput})]},se))}),t.jsxs("button",{onClick:ve,style:we.saveBtn,children:[t.jsx(He,{size:15})," ",de?"Saved":"Save rules"]})]}):S==="music"?t.jsxs(t.Fragment,{children:[t.jsxs("p",{style:we.hint,children:["Paste a YouTube link to play softly while you write in the ",t.jsx("b",{children:"Golden Book"}),". It plays only on that screen (audio only)."]}),t.jsx("input",{value:T,onChange:se=>E(se.target.value),placeholder:"https://youtube.com/watch?v=…",style:we.musicInput}),t.jsxs("button",{onClick:D,style:we.saveBtn,children:[t.jsx(He,{size:15})," ",w?"Saved":"Save music"]})]}):S==="reminders"?t.jsxs(t.Fragment,{children:[t.jsx("p",{style:we.hint,children:"Up to 5 reminders scroll across the top of every screen — a gentle nudge toward your goals."}),t.jsxs("button",{onClick:()=>P(se=>!se),style:{...we.row,cursor:"pointer",width:"100%",justifyContent:"space-between",...A?{borderColor:"var(--accent)"}:{}},children:[t.jsx("span",{style:we.rowLabel,children:"Show reminder banner"}),t.jsx("span",{style:{...we.switch,...A?we.switchOn:{}},children:A?"On":"Off"})]}),t.jsxs("div",{style:{marginTop:14},children:[t.jsxs("div",{style:we.fieldLbl,children:["Reminders (",$.filter(se=>se.trim()).length,"/5)"]}),$.map((se,Me)=>t.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[t.jsx("input",{value:se,onChange:qe=>fe(Me,qe.target.value),maxLength:120,placeholder:`Reminder ${Me+1}`,style:{...we.musicInput,marginBottom:0}}),t.jsx("button",{onClick:()=>y(Me),style:we.iconBtn,title:"Remove",children:t.jsx(Ae,{size:15})})]},Me)),$.length<5&&t.jsxs("button",{onClick:M,style:we.addRowBtn,children:[t.jsx(st,{size:14})," Add reminder"]})]}),t.jsxs("div",{style:{marginTop:16},children:[t.jsxs("div",{style:we.sliderHead,children:[t.jsx("span",{style:we.fieldLbl,children:"Scroll speed"}),t.jsxs("span",{style:we.sliderVal,children:[ce," px/s"]})]}),t.jsx("input",{type:"range",min:20,max:200,step:5,value:ce,onChange:se=>De(se.target.value),style:we.range})]}),t.jsxs("div",{style:{marginTop:12},children:[t.jsxs("div",{style:we.sliderHead,children:[t.jsx("span",{style:we.fieldLbl,children:"Delay between reminders"}),t.jsxs("span",{style:we.sliderVal,children:[Q,"s"]})]}),t.jsx("input",{type:"range",min:0,max:15,step:1,value:Q,onChange:se=>ie(se.target.value),style:we.range})]}),t.jsxs("button",{onClick:ne,style:{...we.saveBtn,marginTop:16},children:[t.jsx(He,{size:15})," ",O?"Saved":"Save reminders"]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("p",{style:we.hint,children:["Tap a theme to preview it live, then hit ",t.jsx("b",{children:"Apply theme"})," to keep it."]}),t.jsx("div",{style:we.themeGrid,children:Cc.map(se=>{const Me=se.id===k;return t.jsxs("button",{onClick:()=>We(se.id),style:{...we.themeCard,...Me?we.themeCardOn:{}},children:[t.jsxs("div",{style:we.swatchRow,children:[se.swatch.map((qe,nt)=>t.jsx("span",{style:{...we.swatch,background:qe}},nt)),Me&&t.jsx("span",{style:we.themeCheck,children:t.jsx(He,{size:13})})]}),t.jsxs("div",{style:we.themeName,children:[se.name,se.dark?t.jsx("span",{style:we.darkTag,children:"Dark"}):null]}),t.jsx("div",{style:we.themeDesc,children:se.description})]},se.id)})}),t.jsxs("button",{onClick:()=>f(k),disabled:k===o,style:{...we.saveBtn,...k===o?we.saveBtnDisabled:{}},children:[t.jsx(He,{size:15})," ",k===o?"Theme applied":"Apply theme"]})]})})]})})}const we={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,width:460,maxWidth:"100%",maxHeight:"88vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",overflow:"hidden"},head:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 18px",borderBottom:"1px solid var(--border)",flexShrink:0},title:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},tabs:{display:"flex",flexWrap:"wrap",gap:6,padding:"12px 18px 0",flexShrink:0},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"transparent"},body:{padding:"16px 18px 20px",overflowY:"auto",overflowX:"hidden",flex:1,minHeight:0},hint:{fontSize:12.5,color:"var(--text-3)",lineHeight:1.5,margin:"0 0 14px"},list:{display:"flex",flexDirection:"column",gap:6},row:{display:"flex",alignItems:"center",gap:10,padding:"9px 11px",background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:9},rowNum:{fontSize:11,fontWeight:700,color:"var(--text-3)",width:16,textAlign:"center"},rowLabel:{flex:1,fontSize:13.5,fontWeight:500,display:"flex",alignItems:"center",gap:7},defaultTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"1px 6px",borderRadius:6},curSymbol:{width:22,textAlign:"center",fontSize:15,fontWeight:700,color:"var(--text)"},curCode:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginLeft:4},iconBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},saveBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",marginTop:16,border:"none",background:"var(--accent)",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer"},saveBtnDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"default"},musicInput:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:12},switch:{fontSize:12,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:20,padding:"3px 12px",minWidth:44,textAlign:"center"},switchOn:{background:"var(--accent)",color:"#fff"},fieldLbl:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},miniLbl:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text)",margin:"12px 0 2px"},subDivider:{height:1,background:"var(--border)",margin:"18px 0 14px"},divGrid:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8,marginBottom:12},divCell:{display:"flex",flexDirection:"column",gap:4},divLbl:{fontSize:11,fontWeight:700,color:"var(--text-3)"},divInput:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"8px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},addRowBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},sliderHead:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},sliderVal:{fontSize:12,fontWeight:700,color:"var(--accent)"},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},themeGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},themeCard:{textAlign:"left",border:"2px solid var(--border)",background:"var(--surface-2)",borderRadius:12,padding:12,cursor:"pointer",display:"flex",flexDirection:"column",gap:6,outline:"none",WebkitTapHighlightColor:"transparent",transition:"border-color .15s ease, box-shadow .15s ease"},themeCardOn:{borderColor:"var(--accent)",boxShadow:"0 0 0 3px color-mix(in srgb, var(--accent) 25%, transparent)"},swatchRow:{display:"flex",alignItems:"center",gap:5,position:"relative"},swatch:{width:22,height:22,borderRadius:"50%",border:"1px solid rgba(0,0,0,0.08)"},themeCheck:{marginLeft:"auto",width:20,height:20,borderRadius:"50%",background:"var(--accent)",color:"#fff",display:"grid",placeItems:"center"},themeName:{fontSize:14,fontWeight:700,display:"flex",alignItems:"center",gap:6},darkTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",background:"var(--hover)",color:"var(--text-2)",padding:"1px 6px",borderRadius:6},themeDesc:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4}},g2=`
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
`;function u2({statements:e,speed:r=60,delay:n=3}){const o=c.useMemo(()=>(e||[]).map(d=>(d||"").trim()).filter(Boolean).slice(0,5),[e]),[i,s]=c.useState(0),l=c.useRef(null),a=c.useRef(null);return c.useEffect(()=>{s(0)},[o]),c.useEffect(()=>{if(!o.length)return;const d=l.current,g=a.current;if(!d||!g)return;const m=d.offsetWidth,f=g.offsetWidth,h=Math.max(10,Number(r)||60),B=Math.max(2500,(m+f)/h*1e3),R=g.animate([{transform:`translateX(${m}px)`},{transform:`translateX(${-f}px)`}],{duration:B,easing:"linear",fill:"both"});let z;const S=()=>{z=setTimeout(()=>s(p=>(p+1)%o.length),Math.max(0,Number(n)||0)*1e3)};return R.addEventListener("finish",S),()=>{R.cancel(),R.removeEventListener("finish",S),clearTimeout(z)}},[i,o,r,n]),o.length?t.jsxs("div",{style:Ao.bar,"aria-label":"Reminders",children:[t.jsx("style",{children:g2}),t.jsx("div",{className:"anvil-tick-glow",style:Ao.icon,children:t.jsx("span",{className:"anvil-tick-pulse",style:{display:"grid",placeItems:"center"},children:t.jsx(ph,{size:15})})}),t.jsxs("div",{ref:l,style:Ao.viewport,children:[t.jsx("span",{className:"anvil-tick-shimmer",style:Ao.shimmer}),t.jsx("div",{className:"anvil-tick-float",style:Ao.floatWrap,children:t.jsx("div",{ref:a,style:Ao.text,children:o[i%o.length]},i)})]})]}):null}const Ao={bar:{display:"flex",alignItems:"center",height:36,flexShrink:0,overflow:"hidden",borderBottom:"1px solid var(--border)",background:"color-mix(in srgb, var(--accent) 12%, var(--surface))"},icon:{display:"grid",placeItems:"center",width:42,height:"100%",flexShrink:0,color:"#fff",background:"var(--accent)",zIndex:2},viewport:{position:"relative",flex:1,height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},shimmer:{position:"absolute",top:0,bottom:0,left:0,width:"22%",background:"linear-gradient(100deg, transparent, color-mix(in srgb, var(--accent) 22%, transparent), transparent)",pointerEvents:"none",zIndex:1},floatWrap:{display:"inline-flex",alignItems:"center",willChange:"transform"},text:{whiteSpace:"nowrap",fontSize:13.5,fontWeight:700,color:"var(--text)",letterSpacing:"0.01em",willChange:"transform",paddingLeft:4}};Mi(Gh(),!1);const zc="anvil_default_screen",Up=()=>{try{return localStorage.getItem(zc)}catch{return null}},co={dashboard:{label:"Dashboard",icon:e0,component:F0},kickstart:{label:"Kickstart",icon:xh,component:f1},golden:{label:"Golden Book",icon:Hy,component:v1},habits:{label:"Habits",icon:gc,component:X0},quadrant:{label:"Quadrant",icon:wg,component:L0},goals:{label:"Goals",icon:Tg,component:U0},grove:{label:"Grove",icon:pc,component:Pv},worth:{label:"Rewards",icon:Zy,component:Yv},vault:{label:"Wallet",icon:ka,component:o1},expenses:{label:"Expenses",icon:Zl,component:U1},trading:{label:"Trading Journal",icon:Ly,component:i2},journal:{label:"Journal",icon:ya,component:cv},revision:{label:"Revision",icon:yh,component:wv},affirmations:{label:"Affirmations",icon:Co,component:zv},skills:{label:"Skills",icon:ch,component:uv},spiritual:{label:"Spiritual",icon:Yi,component:mv},mindscape:{label:"Mindscape",icon:gh,component:B1},achievements:{label:"Achievements",icon:Yr,component:$1},challenges:{label:"Challenges",icon:y0,component:q1},bucket:{label:"Bucket List",icon:n0,component:J1},delight:{label:"Delights",icon:zg,component:H1}},Uh=["dashboard","kickstart","golden","habits","quadrant","goals","grove","journal","revision","affirmations","skills","spiritual","mindscape","achievements","challenges","bucket","delight","worth","vault","expenses","trading"];function cl(e){const r=Uh.filter(i=>co[i]),o=[...(Array.isArray(e)?e:[]).filter(i=>co[i])];return r.forEach(i=>{o.includes(i)||o.push(i)}),o}function p2(){const[e,r]=c.useState(()=>window.innerWidth<720);return c.useEffect(()=>{const n=()=>r(window.innerWidth<720);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}function b2(){const[e,r]=c.useState(()=>{const $=Up();return $&&co[$]?$:"habits"}),[n,o]=c.useState(()=>Up()||"habits"),[i,s]=c.useState(!1),[l,a]=c.useState(null),[d,g]=c.useState(!1),[m,f]=c.useState(!1),[h,B]=c.useState(Gh()),[R,z]=c.useState(ai()),[S,p]=c.useState(jc()),[b,u]=c.useState({enabled:!1,statements:[],speed:60,delay:3}),[k,x]=c.useState(()=>cl(Uh)),[T,E]=c.useState([]),w=p2(),j=c.useRef(e);c.useEffect(()=>{j.current=e},[e]),c.useEffect(()=>{if(!l)return;const $=10,ae=new Set(["kickstart","mindscape"]),ce=setInterval(()=>{const De=j.current;!document.hidden&&De&&!ae.has(De)&&F.addScreenTime(De,$).catch(()=>{})},$*1e3);return()=>clearInterval(ce)},[l]),c.useEffect(()=>{let $=!1;const ae=()=>{bc(),a(null)};window.addEventListener("anvil-unauthorized",ae);const ce=new URLSearchParams(window.location.search).get("login");return ce&&(T0(ce),window.history.replaceState({},"",window.location.pathname)),zh()?F.me().then(De=>{$||a(De)}).catch(()=>{}).finally(()=>{$||g(!0)}):g(!0),()=>{$=!0,window.removeEventListener("anvil-unauthorized",ae)}},[]),c.useEffect(()=>{l&&(F.getSetting("theme").then($=>{$!=null&&$.value&&B(Mi($.value))}).catch(()=>{}),F.getSetting("currency").then($=>{$!=null&&$.value&&z(Uu($.value))}).catch(()=>{}),F.getSetting("month_start_day").then($=>{$!=null&&$.value&&p(yp($.value))}).catch(()=>{}),F.getSetting("ticker").then($=>{$!=null&&$.value&&u(ae=>({...ae,...$.value}))}).catch(()=>{}),F.getSetting("default_screen").then($=>{if($!=null&&$.value&&co[$.value]){o($.value);try{localStorage.setItem(zc,$.value)}catch{}}}).catch(()=>{}),F.getSetting("sidebar_order").then($=>{Array.isArray($==null?void 0:$.value)&&x(cl($.value))}).catch(()=>{}),F.getSetting("sidebar_hidden").then($=>{Array.isArray($==null?void 0:$.value)&&E($.value)}).catch(()=>{}))},[l]);function Y($){r($),s(!1)}const q=()=>{bc(),a(null)},te=$=>{Mi($,!1)},he=$=>{B(Mi($)),F.setSetting("theme",$).catch(()=>{}),f(!1)},G=()=>{Mi(h,!1),f(!1)},ue=$=>{z(Uu($)),F.setSetting("currency",$).catch(()=>{})},pe=$=>{p(yp($)),F.setSetting("month_start_day",Number($)).catch(()=>{})},ze=$=>{u($),F.setSetting("ticker",$).catch(()=>{})},re=$=>{o($);try{localStorage.setItem(zc,$)}catch{}F.setSetting("default_screen",$).catch(()=>{})},U=($,ae)=>{if(x(cl($)),E(ae),f(!1),F.setSetting("sidebar_order",$).catch(()=>{}),F.setSetting("sidebar_hidden",ae).catch(()=>{}),ae.includes(e)){const ce=cl($).find(De=>!ae.includes(De));ce&&r(ce)}},de=k.filter($=>!T.includes($));if(!d)return t.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:"'Inter',system-ui,sans-serif",color:"var(--text-3)"},children:"Loading…"});if(!l)return t.jsx(Qv,{});const X=co[e],I=X.component,A=()=>t.jsx("div",{style:ft.navItems,children:de.map($=>{const ae=co[$];if(!ae)return null;const ce=ae.icon,De=e===$;return t.jsxs("button",{onClick:()=>Y($),title:ae.label,style:{...ft.navItem,...De?ft.navItemOn:{}},children:[t.jsx(ce,{size:18}),t.jsx("span",{style:ft.navLabel,children:ae.label})]},$)})}),P=()=>t.jsxs("div",{style:ft.footerWrap,children:[t.jsxs("button",{onClick:()=>f(!0),style:ft.settingsBtn,title:"Settings",children:[t.jsx(jh,{size:17}),t.jsx("span",{children:"Settings"})]}),t.jsxs("div",{style:ft.userFooter,children:[t.jsxs("div",{style:ft.userInfo,children:[t.jsx("div",{style:ft.userAvatar,children:(l.name||l.email||"?").charAt(0).toUpperCase()}),t.jsxs("div",{style:{minWidth:0},children:[t.jsx("div",{style:ft.userName,children:l.name||"You"}),t.jsx("div",{style:ft.userEmail,children:l.email})]})]}),t.jsx("button",{onClick:q,style:ft.logoutBtn,title:"Sign out",children:t.jsx(o0,{size:16})})]})]});return t.jsxs("div",{style:ft.shell,children:[!w&&t.jsxs("nav",{style:ft.nav,children:[t.jsxs("div",{style:ft.brand,children:[t.jsx("div",{style:ft.brandLogo,children:"B"}),t.jsx("span",{style:ft.brandName,children:"Anvil"})]}),t.jsx(A,{}),t.jsx(P,{})]}),w&&i&&t.jsx("div",{style:ft.overlay,onClick:()=>s(!1),children:t.jsxs("nav",{style:ft.drawer,onClick:$=>$.stopPropagation(),children:[t.jsxs("div",{style:ft.drawerHeader,children:[t.jsxs("div",{style:ft.brand,children:[t.jsx("div",{style:ft.brandLogo,children:"B"}),t.jsx("span",{style:ft.brandName,children:"Anvil"})]}),t.jsx("button",{style:ft.closeBtn,onClick:()=>s(!1),children:t.jsx(Ae,{size:20})})]}),t.jsx("div",{style:ft.drawerNav,children:t.jsx(A,{})}),t.jsx(P,{})]})}),t.jsxs("div",{style:ft.content,children:[w&&t.jsxs("div",{style:ft.topBar,children:[t.jsx("button",{style:ft.menuBtn,onClick:()=>s(!0),children:t.jsx(Sg,{size:22})}),t.jsx("span",{style:ft.topBarTitle,children:X.label}),t.jsx("div",{style:{width:38}})]}),b.enabled&&t.jsx(u2,{statements:b.statements,speed:b.speed,delay:b.delay}),t.jsx("main",{style:ft.main,children:t.jsx(I,{onNavigate:Y})})]}),m&&t.jsx(c2,{screens:co,order:k,hidden:T,themeId:h,currency:R,monthStartDay:S,ticker:b,defaultScreen:n,onSetDefault:re,onSaveSidebar:U,onPreviewTheme:te,onCommitTheme:he,onSelectCurrency:ue,onSelectMonthStartDay:pe,onSaveTicker:ze,onClose:G})]})}const ft={shell:{display:"flex",height:"100vh",overflow:"hidden",fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)"},nav:{width:200,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column",padding:"20px 10px",gap:2,overflowY:"auto",overflowX:"hidden"},brand:{display:"flex",alignItems:"center",gap:9,padding:"6px 10px 20px",borderBottom:"1px solid var(--border)",marginBottom:8},brandLogo:{width:30,height:30,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:14,fontWeight:800,fontFamily:"'Fraunces', Georgia, serif",flexShrink:0},brandName:{fontSize:16,fontWeight:700,letterSpacing:"-0.01em",color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},navItems:{display:"flex",flexDirection:"column",gap:2},navItem:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},navItemOn:{background:"var(--hover)",color:"var(--text)",fontWeight:700},footerWrap:{marginTop:"auto",paddingTop:8,flexShrink:0},settingsBtn:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},userFooter:{marginTop:4,paddingTop:12,borderTop:"1px solid var(--border)",display:"flex",alignItems:"center",gap:8},userInfo:{display:"flex",alignItems:"center",gap:8,flex:1,minWidth:0},userAvatar:{width:30,height:30,borderRadius:"50%",background:"#8268B0",color:"#fff",display:"grid",placeItems:"center",fontSize:13,fontWeight:700,flexShrink:0},userName:{fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},userEmail:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logoutBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",padding:7,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},navLabel:{flex:1},content:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},main:{flex:1,overflowY:"auto",overflowX:"hidden"},topBar:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"var(--surface)",borderBottom:"1px solid var(--border)",flexShrink:0},topBarTitle:{fontSize:16,fontWeight:700,color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},menuBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text)",padding:8,borderRadius:8,display:"grid",placeItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:100,display:"flex"},drawer:{width:220,background:"var(--surface)",height:"100%",display:"flex",flexDirection:"column",padding:"16px 10px",gap:2,boxShadow:"4px 0 24px rgba(0,0,0,0.12)",overflow:"hidden"},drawerNav:{flex:1,minHeight:0,overflowY:"auto",overflowX:"hidden"},drawerHeader:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:4,flexShrink:0},closeBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",padding:6,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0}};oh(document.getElementById("root")).render(t.jsx(c.StrictMode,{children:t.jsx(b2,{})}));
