(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Up={exports:{}},na={},Vp={exports:{}},at={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ks=Symbol.for("react.element"),Um=Symbol.for("react.portal"),Vm=Symbol.for("react.fragment"),Ym=Symbol.for("react.strict_mode"),Km=Symbol.for("react.profiler"),Qm=Symbol.for("react.provider"),qm=Symbol.for("react.context"),Xm=Symbol.for("react.forward_ref"),Zm=Symbol.for("react.suspense"),Jm=Symbol.for("react.memo"),ef=Symbol.for("react.lazy"),Ag=Symbol.iterator;function tf(e){return e===null||typeof e!="object"?null:(e=Ag&&e[Ag]||e["@@iterator"],typeof e=="function"?e:null)}var Yp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kp=Object.assign,Qp={};function gi(e,r,n){this.props=e,this.context=r,this.refs=Qp,this.updater=n||Yp}gi.prototype.isReactComponent={};gi.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")};gi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qp(){}qp.prototype=gi.prototype;function Ic(e,r,n){this.props=e,this.context=r,this.refs=Qp,this.updater=n||Yp}var Bc=Ic.prototype=new qp;Bc.constructor=Ic;Kp(Bc,gi.prototype);Bc.isPureReactComponent=!0;var Wg=Array.isArray,Xp=Object.prototype.hasOwnProperty,Rc={current:null},Zp={key:!0,ref:!0,__self:!0,__source:!0};function Jp(e,r,n){var o,i={},s=null,l=null;if(r!=null)for(o in r.ref!==void 0&&(l=r.ref),r.key!==void 0&&(s=""+r.key),r)Xp.call(r,o)&&!Zp.hasOwnProperty(o)&&(i[o]=r[o]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var d=Array(a),c=0;c<a;c++)d[c]=arguments[c+2];i.children=d}if(e&&e.defaultProps)for(o in a=e.defaultProps,a)i[o]===void 0&&(i[o]=a[o]);return{$$typeof:ks,type:e,key:s,ref:l,props:i,_owner:Rc.current}}function rf(e,r){return{$$typeof:ks,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function Ec(e){return typeof e=="object"&&e!==null&&e.$$typeof===ks}function nf(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return r[n]})}var Mg=/\/+/g;function Ca(e,r){return typeof e=="object"&&e!==null&&e.key!=null?nf(""+e.key):r.toString(36)}function gl(e,r,n,o,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ks:case Um:l=!0}}if(l)return l=e,i=i(l),e=o===""?"."+Ca(l,0):o,Wg(i)?(n="",e!=null&&(n=e.replace(Mg,"$&/")+"/"),gl(i,r,n,"",function(c){return c})):i!=null&&(Ec(i)&&(i=rf(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Mg,"$&/")+"/")+e)),r.push(i)),1;if(l=0,o=o===""?".":o+":",Wg(e))for(var a=0;a<e.length;a++){s=e[a];var d=o+Ca(s,a);l+=gl(s,r,n,d,i)}else if(d=tf(e),typeof d=="function")for(e=d.call(e),a=0;!(s=e.next()).done;)s=s.value,d=o+Ca(s,a++),l+=gl(s,r,n,d,i);else if(s==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return l}function Ts(e,r,n){if(e==null)return e;var o=[],i=0;return gl(e,o,"","",function(s){return r.call(n,s,i++)}),o}function of(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var or={current:null},ul={transition:null},sf={ReactCurrentDispatcher:or,ReactCurrentBatchConfig:ul,ReactCurrentOwner:Rc};function eb(){throw Error("act(...) is not supported in production builds of React.")}at.Children={map:Ts,forEach:function(e,r,n){Ts(e,function(){r.apply(this,arguments)},n)},count:function(e){var r=0;return Ts(e,function(){r++}),r},toArray:function(e){return Ts(e,function(r){return r})||[]},only:function(e){if(!Ec(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};at.Component=gi;at.Fragment=Vm;at.Profiler=Km;at.PureComponent=Ic;at.StrictMode=Ym;at.Suspense=Zm;at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sf;at.act=eb;at.cloneElement=function(e,r,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=Kp({},e.props),i=e.key,s=e.ref,l=e._owner;if(r!=null){if(r.ref!==void 0&&(s=r.ref,l=Rc.current),r.key!==void 0&&(i=""+r.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(d in r)Xp.call(r,d)&&!Zp.hasOwnProperty(d)&&(o[d]=r[d]===void 0&&a!==void 0?a[d]:r[d])}var d=arguments.length-2;if(d===1)o.children=n;else if(1<d){a=Array(d);for(var c=0;c<d;c++)a[c]=arguments[c+2];o.children=a}return{$$typeof:ks,type:e.type,key:i,ref:s,props:o,_owner:l}};at.createContext=function(e){return e={$$typeof:qm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Qm,_context:e},e.Consumer=e};at.createElement=Jp;at.createFactory=function(e){var r=Jp.bind(null,e);return r.type=e,r};at.createRef=function(){return{current:null}};at.forwardRef=function(e){return{$$typeof:Xm,render:e}};at.isValidElement=Ec;at.lazy=function(e){return{$$typeof:ef,_payload:{_status:-1,_result:e},_init:of}};at.memo=function(e,r){return{$$typeof:Jm,type:e,compare:r===void 0?null:r}};at.startTransition=function(e){var r=ul.transition;ul.transition={};try{e()}finally{ul.transition=r}};at.unstable_act=eb;at.useCallback=function(e,r){return or.current.useCallback(e,r)};at.useContext=function(e){return or.current.useContext(e)};at.useDebugValue=function(){};at.useDeferredValue=function(e){return or.current.useDeferredValue(e)};at.useEffect=function(e,r){return or.current.useEffect(e,r)};at.useId=function(){return or.current.useId()};at.useImperativeHandle=function(e,r,n){return or.current.useImperativeHandle(e,r,n)};at.useInsertionEffect=function(e,r){return or.current.useInsertionEffect(e,r)};at.useLayoutEffect=function(e,r){return or.current.useLayoutEffect(e,r)};at.useMemo=function(e,r){return or.current.useMemo(e,r)};at.useReducer=function(e,r,n){return or.current.useReducer(e,r,n)};at.useRef=function(e){return or.current.useRef(e)};at.useState=function(e){return or.current.useState(e)};at.useSyncExternalStore=function(e,r,n){return or.current.useSyncExternalStore(e,r,n)};at.useTransition=function(){return or.current.useTransition()};at.version="18.3.1";Vp.exports=at;var g=Vp.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lf=g,af=Symbol.for("react.element"),df=Symbol.for("react.fragment"),cf=Object.prototype.hasOwnProperty,gf=lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,uf={key:!0,ref:!0,__self:!0,__source:!0};function tb(e,r,n){var o,i={},s=null,l=null;n!==void 0&&(s=""+n),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(l=r.ref);for(o in r)cf.call(r,o)&&!uf.hasOwnProperty(o)&&(i[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps,r)i[o]===void 0&&(i[o]=r[o]);return{$$typeof:af,type:e,key:s,ref:l,props:i,_owner:gf.current}}na.Fragment=df;na.jsx=tb;na.jsxs=tb;Up.exports=na;var t=Up.exports,rb={exports:{}},wr={},nb={exports:{}},ob={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function r(se,U){var de=se.length;se.push(U);e:for(;0<de;){var X=de-1>>>1,S=se[X];if(0<i(S,U))se[X]=U,se[de]=S,de=X;else break e}}function n(se){return se.length===0?null:se[0]}function o(se){if(se.length===0)return null;var U=se[0],de=se.pop();if(de!==U){se[0]=de;e:for(var X=0,S=se.length,W=S>>>1;X<W;){var O=2*(X+1)-1,N=se[O],le=O+1,ge=se[le];if(0>i(N,de))le<S&&0>i(ge,N)?(se[X]=ge,se[le]=de,X=le):(se[X]=N,se[O]=de,X=O);else if(le<S&&0>i(ge,de))se[X]=ge,se[le]=de,X=le;else break e}}return U}function i(se,U){var de=se.sortIndex-U.sortIndex;return de!==0?de:se.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var d=[],c=[],h=1,f=null,m=3,I=!1,B=!1,z=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function u(se){for(var U=n(c);U!==null;){if(U.callback===null)o(c);else if(U.startTime<=se)o(c),U.sortIndex=U.expirationTime,r(d,U);else break;U=n(c)}}function j(se){if(z=!1,u(se),!B)if(n(d)!==null)B=!0,ue(x);else{var U=n(c);U!==null&&ke(j,U.startTime-se)}}function x(se,U){B=!1,z&&(z=!1,p(k),k=-1),I=!0;var de=m;try{for(u(U),f=n(d);f!==null&&(!(f.expirationTime>U)||se&&!q());){var X=f.callback;if(typeof X=="function"){f.callback=null,m=f.priorityLevel;var S=X(f.expirationTime<=U);U=e.unstable_now(),typeof S=="function"?f.callback=S:f===n(d)&&o(d),u(U)}else o(d);f=n(d)}if(f!==null)var W=!0;else{var O=n(c);O!==null&&ke(j,O.startTime-U),W=!1}return W}finally{f=null,m=de,I=!1}}var T=!1,R=null,k=-1,y=5,K=-1;function q(){return!(e.unstable_now()-K<y)}function oe(){if(R!==null){var se=e.unstable_now();K=se;var U=!0;try{U=R(!0,se)}finally{U?L():(T=!1,R=null)}}else T=!1}var L;if(typeof b=="function")L=function(){b(oe)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,Se=he.port2;he.port1.onmessage=oe,L=function(){Se.postMessage(null)}}else L=function(){w(oe,0)};function ue(se){R=se,T||(T=!0,L())}function ke(se,U){k=w(function(){se(e.unstable_now())},U)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(se){se.callback=null},e.unstable_continueExecution=function(){B||I||(B=!0,ue(x))},e.unstable_forceFrameRate=function(se){0>se||125<se?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<se?Math.floor(1e3/se):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(se){switch(m){case 1:case 2:case 3:var U=3;break;default:U=m}var de=m;m=U;try{return se()}finally{m=de}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(se,U){switch(se){case 1:case 2:case 3:case 4:case 5:break;default:se=3}var de=m;m=se;try{return U()}finally{m=de}},e.unstable_scheduleCallback=function(se,U,de){var X=e.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?X+de:X):de=X,se){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=de+S,se={id:h++,callback:U,priorityLevel:se,startTime:de,expirationTime:S,sortIndex:-1},de>X?(se.sortIndex=de,r(c,se),n(d)===null&&se===n(c)&&(z?(p(k),k=-1):z=!0,ke(j,de-X))):(se.sortIndex=S,r(d,se),B||I||(B=!0,ue(x))),se},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(se){var U=m;return function(){var de=m;m=U;try{return se.apply(this,arguments)}finally{m=de}}}})(ob);nb.exports=ob;var pf=nb.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bf=g,kr=pf;function ze(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ib=new Set,es={};function ko(e,r){ti(e,r),ti(e+"Capture",r)}function ti(e,r){for(es[e]=r,e=0;e<r.length;e++)ib.add(r[e])}var fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xd=Object.prototype.hasOwnProperty,hf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lg={},_g={};function mf(e){return xd.call(_g,e)?!0:xd.call(Lg,e)?!1:hf.test(e)?_g[e]=!0:(Lg[e]=!0,!1)}function ff(e,r,n,o){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xf(e,r,n,o){if(r===null||typeof r>"u"||ff(e,r,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function ir(e,r,n,o,i,s,l){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=s,this.removeEmptyString=l}var Qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Qt[e]=new ir(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];Qt[r]=new ir(r,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Qt[e]=new ir(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Qt[e]=new ir(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Qt[e]=new ir(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Qt[e]=new ir(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Qt[e]=new ir(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Qt[e]=new ir(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Qt[e]=new ir(e,5,!1,e.toLowerCase(),null,!1,!1)});var Dc=/[\-:]([a-z])/g;function Fc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(Dc,Fc);Qt[r]=new ir(r,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(Dc,Fc);Qt[r]=new ir(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(Dc,Fc);Qt[r]=new ir(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Qt[e]=new ir(e,1,!1,e.toLowerCase(),null,!1,!1)});Qt.xlinkHref=new ir("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Qt[e]=new ir(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ac(e,r,n,o){var i=Qt.hasOwnProperty(r)?Qt[r]:null;(i!==null?i.type!==0:o||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(xf(r,n,i,o)&&(n=null),o||i===null?mf(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(r=i.attributeName,o=i.attributeNamespace,n===null?e.removeAttribute(r):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,o?e.setAttributeNS(o,r,n):e.setAttribute(r,n))))}var wn=bf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Is=Symbol.for("react.element"),Mo=Symbol.for("react.portal"),Lo=Symbol.for("react.fragment"),Wc=Symbol.for("react.strict_mode"),yd=Symbol.for("react.profiler"),sb=Symbol.for("react.provider"),lb=Symbol.for("react.context"),Mc=Symbol.for("react.forward_ref"),vd=Symbol.for("react.suspense"),jd=Symbol.for("react.suspense_list"),Lc=Symbol.for("react.memo"),Dn=Symbol.for("react.lazy"),ab=Symbol.for("react.offscreen"),$g=Symbol.iterator;function xi(e){return e===null||typeof e!="object"?null:(e=$g&&e[$g]||e["@@iterator"],typeof e=="function"?e:null)}var Ft=Object.assign,za;function Bi(e){if(za===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);za=r&&r[1]||""}return`
`+za+e}var Ta=!1;function Ia(e,r){if(!e||Ta)return"";Ta=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(c){var o=c}Reflect.construct(e,[],r)}else{try{r.call()}catch(c){o=c}e.call(r.prototype)}else{try{throw Error()}catch(c){o=c}e()}}catch(c){if(c&&o&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=o.stack.split(`
`),l=i.length-1,a=s.length-1;1<=l&&0<=a&&i[l]!==s[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==s[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==s[a]){var d=`
`+i[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=a);break}}}finally{Ta=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Bi(e):""}function yf(e){switch(e.tag){case 5:return Bi(e.type);case 16:return Bi("Lazy");case 13:return Bi("Suspense");case 19:return Bi("SuspenseList");case 0:case 2:case 15:return e=Ia(e.type,!1),e;case 11:return e=Ia(e.type.render,!1),e;case 1:return e=Ia(e.type,!0),e;default:return""}}function kd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Lo:return"Fragment";case Mo:return"Portal";case yd:return"Profiler";case Wc:return"StrictMode";case vd:return"Suspense";case jd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lb:return(e.displayName||"Context")+".Consumer";case sb:return(e._context.displayName||"Context")+".Provider";case Mc:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Lc:return r=e.displayName||null,r!==null?r:kd(e.type)||"Memo";case Dn:r=e._payload,e=e._init;try{return kd(e(r))}catch{}}return null}function vf(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kd(r);case 8:return r===Wc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Kn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function db(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function jf(e){var r=db(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),o=""+e[r];if(!e.hasOwnProperty(r)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return i.call(this)},set:function(l){o=""+l,s.call(this,l)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Bs(e){e._valueTracker||(e._valueTracker=jf(e))}function cb(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),o="";return e&&(o=db(e)?e.checked?"true":"false":e.value),e=o,e!==n?(r.setValue(e),!0):!1}function Cl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wd(e,r){var n=r.checked;return Ft({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Pg(e,r){var n=r.defaultValue==null?"":r.defaultValue,o=r.checked!=null?r.checked:r.defaultChecked;n=Kn(r.value!=null?r.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function gb(e,r){r=r.checked,r!=null&&Ac(e,"checked",r,!1)}function Sd(e,r){gb(e,r);var n=Kn(r.value),o=r.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Cd(e,r.type,n):r.hasOwnProperty("defaultValue")&&Cd(e,r.type,Kn(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function Ng(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var o=r.type;if(!(o!=="submit"&&o!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Cd(e,r,n){(r!=="number"||Cl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ri=Array.isArray;function Ko(e,r,n,o){if(e=e.options,r){r={};for(var i=0;i<n.length;i++)r["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=r.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Kn(n),r=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}r!==null||e[i].disabled||(r=e[i])}r!==null&&(r.selected=!0)}}function zd(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(ze(91));return Ft({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Og(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(ze(92));if(Ri(n)){if(1<n.length)throw Error(ze(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:Kn(n)}}function ub(e,r){var n=Kn(r.value),o=Kn(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function Hg(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function pb(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Td(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?pb(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Rs,bb=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,n,o,i){MSApp.execUnsafeLocalFunction(function(){return e(r,n,o,i)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(Rs=Rs||document.createElement("div"),Rs.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Rs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function ts(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var _i={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kf=["Webkit","ms","Moz","O"];Object.keys(_i).forEach(function(e){kf.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),_i[r]=_i[e]})});function hb(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||_i.hasOwnProperty(e)&&_i[e]?(""+r).trim():r+"px"}function mb(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var o=n.indexOf("--")===0,i=hb(n,r[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,i):e[n]=i}}var wf=Ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Id(e,r){if(r){if(wf[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(ze(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(ze(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(ze(61))}if(r.style!=null&&typeof r.style!="object")throw Error(ze(62))}}function Bd(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rd=null;function _c(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ed=null,Qo=null,qo=null;function Gg(e){if(e=Cs(e)){if(typeof Ed!="function")throw Error(ze(280));var r=e.stateNode;r&&(r=aa(r),Ed(e.stateNode,e.type,r))}}function fb(e){Qo?qo?qo.push(e):qo=[e]:Qo=e}function xb(){if(Qo){var e=Qo,r=qo;if(qo=Qo=null,Gg(e),r)for(e=0;e<r.length;e++)Gg(r[e])}}function yb(e,r){return e(r)}function vb(){}var Ba=!1;function jb(e,r,n){if(Ba)return e(r,n);Ba=!0;try{return yb(e,r,n)}finally{Ba=!1,(Qo!==null||qo!==null)&&(vb(),xb())}}function rs(e,r){var n=e.stateNode;if(n===null)return null;var o=aa(n);if(o===null)return null;n=o[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(ze(231,r,typeof n));return n}var Dd=!1;if(fn)try{var yi={};Object.defineProperty(yi,"passive",{get:function(){Dd=!0}}),window.addEventListener("test",yi,yi),window.removeEventListener("test",yi,yi)}catch{Dd=!1}function Sf(e,r,n,o,i,s,l,a,d){var c=Array.prototype.slice.call(arguments,3);try{r.apply(n,c)}catch(h){this.onError(h)}}var $i=!1,zl=null,Tl=!1,Fd=null,Cf={onError:function(e){$i=!0,zl=e}};function zf(e,r,n,o,i,s,l,a,d){$i=!1,zl=null,Sf.apply(Cf,arguments)}function Tf(e,r,n,o,i,s,l,a,d){if(zf.apply(this,arguments),$i){if($i){var c=zl;$i=!1,zl=null}else throw Error(ze(198));Tl||(Tl=!0,Fd=c)}}function wo(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,r.flags&4098&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function kb(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function Ug(e){if(wo(e)!==e)throw Error(ze(188))}function If(e){var r=e.alternate;if(!r){if(r=wo(e),r===null)throw Error(ze(188));return r!==e?null:e}for(var n=e,o=r;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(o=i.return,o!==null){n=o;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ug(i),e;if(s===o)return Ug(i),r;s=s.sibling}throw Error(ze(188))}if(n.return!==o.return)n=i,o=s;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,o=s;break}if(a===o){l=!0,o=i,n=s;break}a=a.sibling}if(!l){for(a=s.child;a;){if(a===n){l=!0,n=s,o=i;break}if(a===o){l=!0,o=s,n=i;break}a=a.sibling}if(!l)throw Error(ze(189))}}if(n.alternate!==o)throw Error(ze(190))}if(n.tag!==3)throw Error(ze(188));return n.stateNode.current===n?e:r}function wb(e){return e=If(e),e!==null?Sb(e):null}function Sb(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=Sb(e);if(r!==null)return r;e=e.sibling}return null}var Cb=kr.unstable_scheduleCallback,Vg=kr.unstable_cancelCallback,Bf=kr.unstable_shouldYield,Rf=kr.unstable_requestPaint,Wt=kr.unstable_now,Ef=kr.unstable_getCurrentPriorityLevel,$c=kr.unstable_ImmediatePriority,zb=kr.unstable_UserBlockingPriority,Il=kr.unstable_NormalPriority,Df=kr.unstable_LowPriority,Tb=kr.unstable_IdlePriority,oa=null,en=null;function Ff(e){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(oa,e,void 0,(e.current.flags&128)===128)}catch{}}var Gr=Math.clz32?Math.clz32:Mf,Af=Math.log,Wf=Math.LN2;function Mf(e){return e>>>=0,e===0?32:31-(Af(e)/Wf|0)|0}var Es=64,Ds=4194304;function Ei(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bl(e,r){var n=e.pendingLanes;if(n===0)return 0;var o=0,i=e.suspendedLanes,s=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?o=Ei(a):(s&=l,s!==0&&(o=Ei(s)))}else l=n&~i,l!==0?o=Ei(l):s!==0&&(o=Ei(s));if(o===0)return 0;if(r!==0&&r!==o&&!(r&i)&&(i=o&-o,s=r&-r,i>=s||i===16&&(s&4194240)!==0))return r;if(o&4&&(o|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=o;0<r;)n=31-Gr(r),i=1<<n,o|=e[n],r&=~i;return o}function Lf(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _f(e,r){for(var n=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-Gr(s),a=1<<l,d=i[l];d===-1?(!(a&n)||a&o)&&(i[l]=Lf(a,r)):d<=r&&(e.expiredLanes|=a),s&=~a}}function Ad(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ib(){var e=Es;return Es<<=1,!(Es&4194240)&&(Es=64),e}function Ra(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function ws(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Gr(r),e[r]=n}function $f(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Gr(n),s=1<<i;r[i]=0,o[i]=-1,e[i]=-1,n&=~s}}function Pc(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var o=31-Gr(n),i=1<<o;i&r|e[o]&r&&(e[o]|=r),n&=~i}}var jt=0;function Bb(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Rb,Nc,Eb,Db,Fb,Wd=!1,Fs=[],$n=null,Pn=null,Nn=null,ns=new Map,os=new Map,An=[],Pf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yg(e,r){switch(e){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":ns.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":os.delete(r.pointerId)}}function vi(e,r,n,o,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:r,domEventName:n,eventSystemFlags:o,nativeEvent:s,targetContainers:[i]},r!==null&&(r=Cs(r),r!==null&&Nc(r)),e):(e.eventSystemFlags|=o,r=e.targetContainers,i!==null&&r.indexOf(i)===-1&&r.push(i),e)}function Nf(e,r,n,o,i){switch(r){case"focusin":return $n=vi($n,e,r,n,o,i),!0;case"dragenter":return Pn=vi(Pn,e,r,n,o,i),!0;case"mouseover":return Nn=vi(Nn,e,r,n,o,i),!0;case"pointerover":var s=i.pointerId;return ns.set(s,vi(ns.get(s)||null,e,r,n,o,i)),!0;case"gotpointercapture":return s=i.pointerId,os.set(s,vi(os.get(s)||null,e,r,n,o,i)),!0}return!1}function Ab(e){var r=go(e.target);if(r!==null){var n=wo(r);if(n!==null){if(r=n.tag,r===13){if(r=kb(n),r!==null){e.blockedOn=r,Fb(e.priority,function(){Eb(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pl(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=Md(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Rd=o,n.target.dispatchEvent(o),Rd=null}else return r=Cs(n),r!==null&&Nc(r),e.blockedOn=n,!1;r.shift()}return!0}function Kg(e,r,n){pl(e)&&n.delete(r)}function Of(){Wd=!1,$n!==null&&pl($n)&&($n=null),Pn!==null&&pl(Pn)&&(Pn=null),Nn!==null&&pl(Nn)&&(Nn=null),ns.forEach(Kg),os.forEach(Kg)}function ji(e,r){e.blockedOn===r&&(e.blockedOn=null,Wd||(Wd=!0,kr.unstable_scheduleCallback(kr.unstable_NormalPriority,Of)))}function is(e){function r(i){return ji(i,e)}if(0<Fs.length){ji(Fs[0],e);for(var n=1;n<Fs.length;n++){var o=Fs[n];o.blockedOn===e&&(o.blockedOn=null)}}for($n!==null&&ji($n,e),Pn!==null&&ji(Pn,e),Nn!==null&&ji(Nn,e),ns.forEach(r),os.forEach(r),n=0;n<An.length;n++)o=An[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<An.length&&(n=An[0],n.blockedOn===null);)Ab(n),n.blockedOn===null&&An.shift()}var Xo=wn.ReactCurrentBatchConfig,Rl=!0;function Hf(e,r,n,o){var i=jt,s=Xo.transition;Xo.transition=null;try{jt=1,Oc(e,r,n,o)}finally{jt=i,Xo.transition=s}}function Gf(e,r,n,o){var i=jt,s=Xo.transition;Xo.transition=null;try{jt=4,Oc(e,r,n,o)}finally{jt=i,Xo.transition=s}}function Oc(e,r,n,o){if(Rl){var i=Md(e,r,n,o);if(i===null)Pa(e,r,o,El,n),Yg(e,o);else if(Nf(i,e,r,n,o))o.stopPropagation();else if(Yg(e,o),r&4&&-1<Pf.indexOf(e)){for(;i!==null;){var s=Cs(i);if(s!==null&&Rb(s),s=Md(e,r,n,o),s===null&&Pa(e,r,o,El,n),s===i)break;i=s}i!==null&&o.stopPropagation()}else Pa(e,r,o,null,n)}}var El=null;function Md(e,r,n,o){if(El=null,e=_c(o),e=go(e),e!==null)if(r=wo(e),r===null)e=null;else if(n=r.tag,n===13){if(e=kb(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return El=e,null}function Wb(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ef()){case $c:return 1;case zb:return 4;case Il:case Df:return 16;case Tb:return 536870912;default:return 16}default:return 16}}var Ln=null,Hc=null,bl=null;function Mb(){if(bl)return bl;var e,r=Hc,n=r.length,o,i="value"in Ln?Ln.value:Ln.textContent,s=i.length;for(e=0;e<n&&r[e]===i[e];e++);var l=n-e;for(o=1;o<=l&&r[n-o]===i[s-o];o++);return bl=i.slice(e,1<o?1-o:void 0)}function hl(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function As(){return!0}function Qg(){return!1}function Sr(e){function r(n,o,i,s,l){this._reactName=n,this._targetInst=i,this.type=o,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?As:Qg,this.isPropagationStopped=Qg,this}return Ft(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=As)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=As)},persist:function(){},isPersistent:As}),r}var ui={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gc=Sr(ui),Ss=Ft({},ui,{view:0,detail:0}),Uf=Sr(Ss),Ea,Da,ki,ia=Ft({},Ss,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ki&&(ki&&e.type==="mousemove"?(Ea=e.screenX-ki.screenX,Da=e.screenY-ki.screenY):Da=Ea=0,ki=e),Ea)},movementY:function(e){return"movementY"in e?e.movementY:Da}}),qg=Sr(ia),Vf=Ft({},ia,{dataTransfer:0}),Yf=Sr(Vf),Kf=Ft({},Ss,{relatedTarget:0}),Fa=Sr(Kf),Qf=Ft({},ui,{animationName:0,elapsedTime:0,pseudoElement:0}),qf=Sr(Qf),Xf=Ft({},ui,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zf=Sr(Xf),Jf=Ft({},ui,{data:0}),Xg=Sr(Jf),ex={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nx(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=rx[e])?!!r[e]:!1}function Uc(){return nx}var ox=Ft({},Ss,{key:function(e){if(e.key){var r=ex[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=hl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uc,charCode:function(e){return e.type==="keypress"?hl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ix=Sr(ox),sx=Ft({},ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zg=Sr(sx),lx=Ft({},Ss,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uc}),ax=Sr(lx),dx=Ft({},ui,{propertyName:0,elapsedTime:0,pseudoElement:0}),cx=Sr(dx),gx=Ft({},ia,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ux=Sr(gx),px=[9,13,27,32],Vc=fn&&"CompositionEvent"in window,Pi=null;fn&&"documentMode"in document&&(Pi=document.documentMode);var bx=fn&&"TextEvent"in window&&!Pi,Lb=fn&&(!Vc||Pi&&8<Pi&&11>=Pi),Jg=" ",eu=!1;function _b(e,r){switch(e){case"keyup":return px.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $b(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _o=!1;function hx(e,r){switch(e){case"compositionend":return $b(r);case"keypress":return r.which!==32?null:(eu=!0,Jg);case"textInput":return e=r.data,e===Jg&&eu?null:e;default:return null}}function mx(e,r){if(_o)return e==="compositionend"||!Vc&&_b(e,r)?(e=Mb(),bl=Hc=Ln=null,_o=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Lb&&r.locale!=="ko"?null:r.data;default:return null}}var fx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tu(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!fx[e.type]:r==="textarea"}function Pb(e,r,n,o){fb(o),r=Dl(r,"onChange"),0<r.length&&(n=new Gc("onChange","change",null,n,o),e.push({event:n,listeners:r}))}var Ni=null,ss=null;function xx(e){Xb(e,0)}function sa(e){var r=No(e);if(cb(r))return e}function yx(e,r){if(e==="change")return r}var Nb=!1;if(fn){var Aa;if(fn){var Wa="oninput"in document;if(!Wa){var ru=document.createElement("div");ru.setAttribute("oninput","return;"),Wa=typeof ru.oninput=="function"}Aa=Wa}else Aa=!1;Nb=Aa&&(!document.documentMode||9<document.documentMode)}function nu(){Ni&&(Ni.detachEvent("onpropertychange",Ob),ss=Ni=null)}function Ob(e){if(e.propertyName==="value"&&sa(ss)){var r=[];Pb(r,ss,e,_c(e)),jb(xx,r)}}function vx(e,r,n){e==="focusin"?(nu(),Ni=r,ss=n,Ni.attachEvent("onpropertychange",Ob)):e==="focusout"&&nu()}function jx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sa(ss)}function kx(e,r){if(e==="click")return sa(r)}function wx(e,r){if(e==="input"||e==="change")return sa(r)}function Sx(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Vr=typeof Object.is=="function"?Object.is:Sx;function ls(e,r){if(Vr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),o=Object.keys(r);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var i=n[o];if(!xd.call(r,i)||!Vr(e[i],r[i]))return!1}return!0}function ou(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function iu(e,r){var n=ou(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=r&&o>=r)return{node:n,offset:r-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ou(n)}}function Hb(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Hb(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function Gb(){for(var e=window,r=Cl();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=Cl(e.document)}return r}function Yc(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Cx(e){var r=Gb(),n=e.focusedElem,o=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&Hb(n.ownerDocument.documentElement,n)){if(o!==null&&Yc(n)){if(r=o.start,e=o.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(o.start,i);o=o.end===void 0?s:Math.min(o.end,i),!e.extend&&s>o&&(i=o,o=s,s=i),i=iu(n,s);var l=iu(n,o);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(r=r.createRange(),r.setStart(i.node,i.offset),e.removeAllRanges(),s>o?(e.addRange(r),e.extend(l.node,l.offset)):(r.setEnd(l.node,l.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zx=fn&&"documentMode"in document&&11>=document.documentMode,$o=null,Ld=null,Oi=null,_d=!1;function su(e,r,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_d||$o==null||$o!==Cl(o)||(o=$o,"selectionStart"in o&&Yc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Oi&&ls(Oi,o)||(Oi=o,o=Dl(Ld,"onSelect"),0<o.length&&(r=new Gc("onSelect","select",null,r,n),e.push({event:r,listeners:o}),r.target=$o)))}function Ws(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var Po={animationend:Ws("Animation","AnimationEnd"),animationiteration:Ws("Animation","AnimationIteration"),animationstart:Ws("Animation","AnimationStart"),transitionend:Ws("Transition","TransitionEnd")},Ma={},Ub={};fn&&(Ub=document.createElement("div").style,"AnimationEvent"in window||(delete Po.animationend.animation,delete Po.animationiteration.animation,delete Po.animationstart.animation),"TransitionEvent"in window||delete Po.transitionend.transition);function la(e){if(Ma[e])return Ma[e];if(!Po[e])return e;var r=Po[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in Ub)return Ma[e]=r[n];return e}var Vb=la("animationend"),Yb=la("animationiteration"),Kb=la("animationstart"),Qb=la("transitionend"),qb=new Map,lu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qn(e,r){qb.set(e,r),ko(r,[e])}for(var La=0;La<lu.length;La++){var _a=lu[La],Tx=_a.toLowerCase(),Ix=_a[0].toUpperCase()+_a.slice(1);qn(Tx,"on"+Ix)}qn(Vb,"onAnimationEnd");qn(Yb,"onAnimationIteration");qn(Kb,"onAnimationStart");qn("dblclick","onDoubleClick");qn("focusin","onFocus");qn("focusout","onBlur");qn(Qb,"onTransitionEnd");ti("onMouseEnter",["mouseout","mouseover"]);ti("onMouseLeave",["mouseout","mouseover"]);ti("onPointerEnter",["pointerout","pointerover"]);ti("onPointerLeave",["pointerout","pointerover"]);ko("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ko("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ko("onBeforeInput",["compositionend","keypress","textInput","paste"]);ko("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ko("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ko("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Di));function au(e,r,n){var o=e.type||"unknown-event";e.currentTarget=n,Tf(o,r,void 0,e),e.currentTarget=null}function Xb(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],i=o.event;o=o.listeners;e:{var s=void 0;if(r)for(var l=o.length-1;0<=l;l--){var a=o[l],d=a.instance,c=a.currentTarget;if(a=a.listener,d!==s&&i.isPropagationStopped())break e;au(i,a,c),s=d}else for(l=0;l<o.length;l++){if(a=o[l],d=a.instance,c=a.currentTarget,a=a.listener,d!==s&&i.isPropagationStopped())break e;au(i,a,c),s=d}}}if(Tl)throw e=Fd,Tl=!1,Fd=null,e}function St(e,r){var n=r[Hd];n===void 0&&(n=r[Hd]=new Set);var o=e+"__bubble";n.has(o)||(Zb(r,e,2,!1),n.add(o))}function $a(e,r,n){var o=0;r&&(o|=4),Zb(n,e,o,r)}var Ms="_reactListening"+Math.random().toString(36).slice(2);function as(e){if(!e[Ms]){e[Ms]=!0,ib.forEach(function(n){n!=="selectionchange"&&(Bx.has(n)||$a(n,!1,e),$a(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Ms]||(r[Ms]=!0,$a("selectionchange",!1,r))}}function Zb(e,r,n,o){switch(Wb(r)){case 1:var i=Hf;break;case 4:i=Gf;break;default:i=Oc}n=i.bind(null,r,n,e),i=void 0,!Dd||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(r,n,{capture:!0,passive:i}):e.addEventListener(r,n,!0):i!==void 0?e.addEventListener(r,n,{passive:i}):e.addEventListener(r,n,!1)}function Pa(e,r,n,o,i){var s=o;if(!(r&1)&&!(r&2)&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var a=o.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=o.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;l=l.return}for(;a!==null;){if(l=go(a),l===null)return;if(d=l.tag,d===5||d===6){o=s=l;continue e}a=a.parentNode}}o=o.return}jb(function(){var c=s,h=_c(n),f=[];e:{var m=qb.get(e);if(m!==void 0){var I=Gc,B=e;switch(e){case"keypress":if(hl(n)===0)break e;case"keydown":case"keyup":I=ix;break;case"focusin":B="focus",I=Fa;break;case"focusout":B="blur",I=Fa;break;case"beforeblur":case"afterblur":I=Fa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=qg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=Yf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=ax;break;case Vb:case Yb:case Kb:I=qf;break;case Qb:I=cx;break;case"scroll":I=Uf;break;case"wheel":I=ux;break;case"copy":case"cut":case"paste":I=Zf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Zg}var z=(r&4)!==0,w=!z&&e==="scroll",p=z?m!==null?m+"Capture":null:m;z=[];for(var b=c,u;b!==null;){u=b;var j=u.stateNode;if(u.tag===5&&j!==null&&(u=j,p!==null&&(j=rs(b,p),j!=null&&z.push(ds(b,j,u)))),w)break;b=b.return}0<z.length&&(m=new I(m,B,null,n,h),f.push({event:m,listeners:z}))}}if(!(r&7)){e:{if(m=e==="mouseover"||e==="pointerover",I=e==="mouseout"||e==="pointerout",m&&n!==Rd&&(B=n.relatedTarget||n.fromElement)&&(go(B)||B[xn]))break e;if((I||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,I?(B=n.relatedTarget||n.toElement,I=c,B=B?go(B):null,B!==null&&(w=wo(B),B!==w||B.tag!==5&&B.tag!==6)&&(B=null)):(I=null,B=c),I!==B)){if(z=qg,j="onMouseLeave",p="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(z=Zg,j="onPointerLeave",p="onPointerEnter",b="pointer"),w=I==null?m:No(I),u=B==null?m:No(B),m=new z(j,b+"leave",I,n,h),m.target=w,m.relatedTarget=u,j=null,go(h)===c&&(z=new z(p,b+"enter",B,n,h),z.target=u,z.relatedTarget=w,j=z),w=j,I&&B)t:{for(z=I,p=B,b=0,u=z;u;u=zo(u))b++;for(u=0,j=p;j;j=zo(j))u++;for(;0<b-u;)z=zo(z),b--;for(;0<u-b;)p=zo(p),u--;for(;b--;){if(z===p||p!==null&&z===p.alternate)break t;z=zo(z),p=zo(p)}z=null}else z=null;I!==null&&du(f,m,I,z,!1),B!==null&&w!==null&&du(f,w,B,z,!0)}}e:{if(m=c?No(c):window,I=m.nodeName&&m.nodeName.toLowerCase(),I==="select"||I==="input"&&m.type==="file")var x=yx;else if(tu(m))if(Nb)x=wx;else{x=jx;var T=vx}else(I=m.nodeName)&&I.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(x=kx);if(x&&(x=x(e,c))){Pb(f,x,n,h);break e}T&&T(e,m,c),e==="focusout"&&(T=m._wrapperState)&&T.controlled&&m.type==="number"&&Cd(m,"number",m.value)}switch(T=c?No(c):window,e){case"focusin":(tu(T)||T.contentEditable==="true")&&($o=T,Ld=c,Oi=null);break;case"focusout":Oi=Ld=$o=null;break;case"mousedown":_d=!0;break;case"contextmenu":case"mouseup":case"dragend":_d=!1,su(f,n,h);break;case"selectionchange":if(zx)break;case"keydown":case"keyup":su(f,n,h)}var R;if(Vc)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else _o?_b(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Lb&&n.locale!=="ko"&&(_o||k!=="onCompositionStart"?k==="onCompositionEnd"&&_o&&(R=Mb()):(Ln=h,Hc="value"in Ln?Ln.value:Ln.textContent,_o=!0)),T=Dl(c,k),0<T.length&&(k=new Xg(k,e,null,n,h),f.push({event:k,listeners:T}),R?k.data=R:(R=$b(n),R!==null&&(k.data=R)))),(R=bx?hx(e,n):mx(e,n))&&(c=Dl(c,"onBeforeInput"),0<c.length&&(h=new Xg("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=R))}Xb(f,r)})}function ds(e,r,n){return{instance:e,listener:r,currentTarget:n}}function Dl(e,r){for(var n=r+"Capture",o=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=rs(e,n),s!=null&&o.unshift(ds(e,s,i)),s=rs(e,r),s!=null&&o.push(ds(e,s,i))),e=e.return}return o}function zo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function du(e,r,n,o,i){for(var s=r._reactName,l=[];n!==null&&n!==o;){var a=n,d=a.alternate,c=a.stateNode;if(d!==null&&d===o)break;a.tag===5&&c!==null&&(a=c,i?(d=rs(n,s),d!=null&&l.unshift(ds(n,d,a))):i||(d=rs(n,s),d!=null&&l.push(ds(n,d,a)))),n=n.return}l.length!==0&&e.push({event:r,listeners:l})}var Rx=/\r\n?/g,Ex=/\u0000|\uFFFD/g;function cu(e){return(typeof e=="string"?e:""+e).replace(Rx,`
`).replace(Ex,"")}function Ls(e,r,n){if(r=cu(r),cu(e)!==r&&n)throw Error(ze(425))}function Fl(){}var $d=null,Pd=null;function Nd(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Od=typeof setTimeout=="function"?setTimeout:void 0,Dx=typeof clearTimeout=="function"?clearTimeout:void 0,gu=typeof Promise=="function"?Promise:void 0,Fx=typeof queueMicrotask=="function"?queueMicrotask:typeof gu<"u"?function(e){return gu.resolve(null).then(e).catch(Ax)}:Od;function Ax(e){setTimeout(function(){throw e})}function Na(e,r){var n=r,o=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(o===0){e.removeChild(i),is(r);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=i}while(n);is(r)}function On(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function uu(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var pi=Math.random().toString(36).slice(2),Jr="__reactFiber$"+pi,cs="__reactProps$"+pi,xn="__reactContainer$"+pi,Hd="__reactEvents$"+pi,Wx="__reactListeners$"+pi,Mx="__reactHandles$"+pi;function go(e){var r=e[Jr];if(r)return r;for(var n=e.parentNode;n;){if(r=n[xn]||n[Jr]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=uu(e);e!==null;){if(n=e[Jr])return n;e=uu(e)}return r}e=n,n=e.parentNode}return null}function Cs(e){return e=e[Jr]||e[xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function No(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(ze(33))}function aa(e){return e[cs]||null}var Gd=[],Oo=-1;function Xn(e){return{current:e}}function Ct(e){0>Oo||(e.current=Gd[Oo],Gd[Oo]=null,Oo--)}function wt(e,r){Oo++,Gd[Oo]=e.current,e.current=r}var Qn={},er=Xn(Qn),cr=Xn(!1),fo=Qn;function ri(e,r){var n=e.type.contextTypes;if(!n)return Qn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===r)return o.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=r[s];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),i}function gr(e){return e=e.childContextTypes,e!=null}function Al(){Ct(cr),Ct(er)}function pu(e,r,n){if(er.current!==Qn)throw Error(ze(168));wt(er,r),wt(cr,n)}function Jb(e,r,n){var o=e.stateNode;if(r=r.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var i in o)if(!(i in r))throw Error(ze(108,vf(e)||"Unknown",i));return Ft({},n,o)}function Wl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qn,fo=er.current,wt(er,e),wt(cr,cr.current),!0}function bu(e,r,n){var o=e.stateNode;if(!o)throw Error(ze(169));n?(e=Jb(e,r,fo),o.__reactInternalMemoizedMergedChildContext=e,Ct(cr),Ct(er),wt(er,e)):Ct(cr),wt(cr,n)}var un=null,da=!1,Oa=!1;function eh(e){un===null?un=[e]:un.push(e)}function Lx(e){da=!0,eh(e)}function Zn(){if(!Oa&&un!==null){Oa=!0;var e=0,r=jt;try{var n=un;for(jt=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}un=null,da=!1}catch(i){throw un!==null&&(un=un.slice(e+1)),Cb($c,Zn),i}finally{jt=r,Oa=!1}}return null}var Ho=[],Go=0,Ml=null,Ll=0,Er=[],Dr=0,xo=null,bn=1,hn="";function so(e,r){Ho[Go++]=Ll,Ho[Go++]=Ml,Ml=e,Ll=r}function th(e,r,n){Er[Dr++]=bn,Er[Dr++]=hn,Er[Dr++]=xo,xo=e;var o=bn;e=hn;var i=32-Gr(o)-1;o&=~(1<<i),n+=1;var s=32-Gr(r)+i;if(30<s){var l=i-i%5;s=(o&(1<<l)-1).toString(32),o>>=l,i-=l,bn=1<<32-Gr(r)+i|n<<i|o,hn=s+e}else bn=1<<s|n<<i|o,hn=e}function Kc(e){e.return!==null&&(so(e,1),th(e,1,0))}function Qc(e){for(;e===Ml;)Ml=Ho[--Go],Ho[Go]=null,Ll=Ho[--Go],Ho[Go]=null;for(;e===xo;)xo=Er[--Dr],Er[Dr]=null,hn=Er[--Dr],Er[Dr]=null,bn=Er[--Dr],Er[Dr]=null}var jr=null,vr=null,Tt=!1,Hr=null;function rh(e,r){var n=Fr(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function hu(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,jr=e,vr=On(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,jr=e,vr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=xo!==null?{id:bn,overflow:hn}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=Fr(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,jr=e,vr=null,!0):!1;default:return!1}}function Ud(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vd(e){if(Tt){var r=vr;if(r){var n=r;if(!hu(e,r)){if(Ud(e))throw Error(ze(418));r=On(n.nextSibling);var o=jr;r&&hu(e,r)?rh(o,n):(e.flags=e.flags&-4097|2,Tt=!1,jr=e)}}else{if(Ud(e))throw Error(ze(418));e.flags=e.flags&-4097|2,Tt=!1,jr=e}}}function mu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;jr=e}function _s(e){if(e!==jr)return!1;if(!Tt)return mu(e),Tt=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Nd(e.type,e.memoizedProps)),r&&(r=vr)){if(Ud(e))throw nh(),Error(ze(418));for(;r;)rh(e,r),r=On(r.nextSibling)}if(mu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(ze(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){vr=On(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}vr=null}}else vr=jr?On(e.stateNode.nextSibling):null;return!0}function nh(){for(var e=vr;e;)e=On(e.nextSibling)}function ni(){vr=jr=null,Tt=!1}function qc(e){Hr===null?Hr=[e]:Hr.push(e)}var _x=wn.ReactCurrentBatchConfig;function wi(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ze(309));var o=n.stateNode}if(!o)throw Error(ze(147,e));var i=o,s=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===s?r.ref:(r=function(l){var a=i.refs;l===null?delete a[s]:a[s]=l},r._stringRef=s,r)}if(typeof e!="string")throw Error(ze(284));if(!n._owner)throw Error(ze(290,e))}return e}function $s(e,r){throw e=Object.prototype.toString.call(r),Error(ze(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function fu(e){var r=e._init;return r(e._payload)}function oh(e){function r(p,b){if(e){var u=p.deletions;u===null?(p.deletions=[b],p.flags|=16):u.push(b)}}function n(p,b){if(!e)return null;for(;b!==null;)r(p,b),b=b.sibling;return null}function o(p,b){for(p=new Map;b!==null;)b.key!==null?p.set(b.key,b):p.set(b.index,b),b=b.sibling;return p}function i(p,b){return p=Vn(p,b),p.index=0,p.sibling=null,p}function s(p,b,u){return p.index=u,e?(u=p.alternate,u!==null?(u=u.index,u<b?(p.flags|=2,b):u):(p.flags|=2,b)):(p.flags|=1048576,b)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,b,u,j){return b===null||b.tag!==6?(b=Qa(u,p.mode,j),b.return=p,b):(b=i(b,u),b.return=p,b)}function d(p,b,u,j){var x=u.type;return x===Lo?h(p,b,u.props.children,j,u.key):b!==null&&(b.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Dn&&fu(x)===b.type)?(j=i(b,u.props),j.ref=wi(p,b,u),j.return=p,j):(j=kl(u.type,u.key,u.props,null,p.mode,j),j.ref=wi(p,b,u),j.return=p,j)}function c(p,b,u,j){return b===null||b.tag!==4||b.stateNode.containerInfo!==u.containerInfo||b.stateNode.implementation!==u.implementation?(b=qa(u,p.mode,j),b.return=p,b):(b=i(b,u.children||[]),b.return=p,b)}function h(p,b,u,j,x){return b===null||b.tag!==7?(b=mo(u,p.mode,j,x),b.return=p,b):(b=i(b,u),b.return=p,b)}function f(p,b,u){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Qa(""+b,p.mode,u),b.return=p,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Is:return u=kl(b.type,b.key,b.props,null,p.mode,u),u.ref=wi(p,null,b),u.return=p,u;case Mo:return b=qa(b,p.mode,u),b.return=p,b;case Dn:var j=b._init;return f(p,j(b._payload),u)}if(Ri(b)||xi(b))return b=mo(b,p.mode,u,null),b.return=p,b;$s(p,b)}return null}function m(p,b,u,j){var x=b!==null?b.key:null;if(typeof u=="string"&&u!==""||typeof u=="number")return x!==null?null:a(p,b,""+u,j);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Is:return u.key===x?d(p,b,u,j):null;case Mo:return u.key===x?c(p,b,u,j):null;case Dn:return x=u._init,m(p,b,x(u._payload),j)}if(Ri(u)||xi(u))return x!==null?null:h(p,b,u,j,null);$s(p,u)}return null}function I(p,b,u,j,x){if(typeof j=="string"&&j!==""||typeof j=="number")return p=p.get(u)||null,a(b,p,""+j,x);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Is:return p=p.get(j.key===null?u:j.key)||null,d(b,p,j,x);case Mo:return p=p.get(j.key===null?u:j.key)||null,c(b,p,j,x);case Dn:var T=j._init;return I(p,b,u,T(j._payload),x)}if(Ri(j)||xi(j))return p=p.get(u)||null,h(b,p,j,x,null);$s(b,j)}return null}function B(p,b,u,j){for(var x=null,T=null,R=b,k=b=0,y=null;R!==null&&k<u.length;k++){R.index>k?(y=R,R=null):y=R.sibling;var K=m(p,R,u[k],j);if(K===null){R===null&&(R=y);break}e&&R&&K.alternate===null&&r(p,R),b=s(K,b,k),T===null?x=K:T.sibling=K,T=K,R=y}if(k===u.length)return n(p,R),Tt&&so(p,k),x;if(R===null){for(;k<u.length;k++)R=f(p,u[k],j),R!==null&&(b=s(R,b,k),T===null?x=R:T.sibling=R,T=R);return Tt&&so(p,k),x}for(R=o(p,R);k<u.length;k++)y=I(R,p,k,u[k],j),y!==null&&(e&&y.alternate!==null&&R.delete(y.key===null?k:y.key),b=s(y,b,k),T===null?x=y:T.sibling=y,T=y);return e&&R.forEach(function(q){return r(p,q)}),Tt&&so(p,k),x}function z(p,b,u,j){var x=xi(u);if(typeof x!="function")throw Error(ze(150));if(u=x.call(u),u==null)throw Error(ze(151));for(var T=x=null,R=b,k=b=0,y=null,K=u.next();R!==null&&!K.done;k++,K=u.next()){R.index>k?(y=R,R=null):y=R.sibling;var q=m(p,R,K.value,j);if(q===null){R===null&&(R=y);break}e&&R&&q.alternate===null&&r(p,R),b=s(q,b,k),T===null?x=q:T.sibling=q,T=q,R=y}if(K.done)return n(p,R),Tt&&so(p,k),x;if(R===null){for(;!K.done;k++,K=u.next())K=f(p,K.value,j),K!==null&&(b=s(K,b,k),T===null?x=K:T.sibling=K,T=K);return Tt&&so(p,k),x}for(R=o(p,R);!K.done;k++,K=u.next())K=I(R,p,k,K.value,j),K!==null&&(e&&K.alternate!==null&&R.delete(K.key===null?k:K.key),b=s(K,b,k),T===null?x=K:T.sibling=K,T=K);return e&&R.forEach(function(oe){return r(p,oe)}),Tt&&so(p,k),x}function w(p,b,u,j){if(typeof u=="object"&&u!==null&&u.type===Lo&&u.key===null&&(u=u.props.children),typeof u=="object"&&u!==null){switch(u.$$typeof){case Is:e:{for(var x=u.key,T=b;T!==null;){if(T.key===x){if(x=u.type,x===Lo){if(T.tag===7){n(p,T.sibling),b=i(T,u.props.children),b.return=p,p=b;break e}}else if(T.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Dn&&fu(x)===T.type){n(p,T.sibling),b=i(T,u.props),b.ref=wi(p,T,u),b.return=p,p=b;break e}n(p,T);break}else r(p,T);T=T.sibling}u.type===Lo?(b=mo(u.props.children,p.mode,j,u.key),b.return=p,p=b):(j=kl(u.type,u.key,u.props,null,p.mode,j),j.ref=wi(p,b,u),j.return=p,p=j)}return l(p);case Mo:e:{for(T=u.key;b!==null;){if(b.key===T)if(b.tag===4&&b.stateNode.containerInfo===u.containerInfo&&b.stateNode.implementation===u.implementation){n(p,b.sibling),b=i(b,u.children||[]),b.return=p,p=b;break e}else{n(p,b);break}else r(p,b);b=b.sibling}b=qa(u,p.mode,j),b.return=p,p=b}return l(p);case Dn:return T=u._init,w(p,b,T(u._payload),j)}if(Ri(u))return B(p,b,u,j);if(xi(u))return z(p,b,u,j);$s(p,u)}return typeof u=="string"&&u!==""||typeof u=="number"?(u=""+u,b!==null&&b.tag===6?(n(p,b.sibling),b=i(b,u),b.return=p,p=b):(n(p,b),b=Qa(u,p.mode,j),b.return=p,p=b),l(p)):n(p,b)}return w}var oi=oh(!0),ih=oh(!1),_l=Xn(null),$l=null,Uo=null,Xc=null;function Zc(){Xc=Uo=$l=null}function Jc(e){var r=_l.current;Ct(_l),e._currentValue=r}function Yd(e,r,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,o!==null&&(o.childLanes|=r)):o!==null&&(o.childLanes&r)!==r&&(o.childLanes|=r),e===n)break;e=e.return}}function Zo(e,r){$l=e,Xc=Uo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&r&&(dr=!0),e.firstContext=null)}function Wr(e){var r=e._currentValue;if(Xc!==e)if(e={context:e,memoizedValue:r,next:null},Uo===null){if($l===null)throw Error(ze(308));Uo=e,$l.dependencies={lanes:0,firstContext:e}}else Uo=Uo.next=e;return r}var uo=null;function eg(e){uo===null?uo=[e]:uo.push(e)}function sh(e,r,n,o){var i=r.interleaved;return i===null?(n.next=n,eg(r)):(n.next=i.next,i.next=n),r.interleaved=n,yn(e,o)}function yn(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Fn=!1;function tg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lh(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mn(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function Hn(e,r,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,pt&2){var i=o.pending;return i===null?r.next=r:(r.next=i.next,i.next=r),o.pending=r,yn(e,n)}return i=o.interleaved,i===null?(r.next=r,eg(o)):(r.next=i.next,i.next=r),o.interleaved=r,yn(e,n)}function ml(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var o=r.lanes;o&=e.pendingLanes,n|=o,r.lanes=n,Pc(e,n)}}function xu(e,r){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?i=s=r:s=s.next=r}else i=s=r;n={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function Pl(e,r,n,o){var i=e.updateQueue;Fn=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var d=a,c=d.next;d.next=null,l===null?s=c:l.next=c,l=d;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=d))}if(s!==null){var f=i.baseState;l=0,h=c=d=null,a=s;do{var m=a.lane,I=a.eventTime;if((o&m)===m){h!==null&&(h=h.next={eventTime:I,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var B=e,z=a;switch(m=r,I=n,z.tag){case 1:if(B=z.payload,typeof B=="function"){f=B.call(I,f,m);break e}f=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=z.payload,m=typeof B=="function"?B.call(I,f,m):B,m==null)break e;f=Ft({},f,m);break e;case 2:Fn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else I={eventTime:I,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=I,d=f):h=h.next=I,l|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(d=f),i.baseState=d,i.firstBaseUpdate=c,i.lastBaseUpdate=h,r=i.shared.interleaved,r!==null){i=r;do l|=i.lane,i=i.next;while(i!==r)}else s===null&&(i.shared.lanes=0);vo|=l,e.lanes=l,e.memoizedState=f}}function yu(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var o=e[r],i=o.callback;if(i!==null){if(o.callback=null,o=n,typeof i!="function")throw Error(ze(191,i));i.call(o)}}}var zs={},tn=Xn(zs),gs=Xn(zs),us=Xn(zs);function po(e){if(e===zs)throw Error(ze(174));return e}function rg(e,r){switch(wt(us,r),wt(gs,e),wt(tn,zs),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Td(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Td(r,e)}Ct(tn),wt(tn,r)}function ii(){Ct(tn),Ct(gs),Ct(us)}function ah(e){po(us.current);var r=po(tn.current),n=Td(r,e.type);r!==n&&(wt(gs,e),wt(tn,n))}function ng(e){gs.current===e&&(Ct(tn),Ct(gs))}var Et=Xn(0);function Nl(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ha=[];function og(){for(var e=0;e<Ha.length;e++)Ha[e]._workInProgressVersionPrimary=null;Ha.length=0}var fl=wn.ReactCurrentDispatcher,Ga=wn.ReactCurrentBatchConfig,yo=0,Dt=null,$t=null,Gt=null,Ol=!1,Hi=!1,ps=0,$x=0;function qt(){throw Error(ze(321))}function ig(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!Vr(e[n],r[n]))return!1;return!0}function sg(e,r,n,o,i,s){if(yo=s,Dt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,fl.current=e===null||e.memoizedState===null?Hx:Gx,e=n(o,i),Hi){s=0;do{if(Hi=!1,ps=0,25<=s)throw Error(ze(301));s+=1,Gt=$t=null,r.updateQueue=null,fl.current=Ux,e=n(o,i)}while(Hi)}if(fl.current=Hl,r=$t!==null&&$t.next!==null,yo=0,Gt=$t=Dt=null,Ol=!1,r)throw Error(ze(300));return e}function lg(){var e=ps!==0;return ps=0,e}function qr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?Dt.memoizedState=Gt=e:Gt=Gt.next=e,Gt}function Mr(){if($t===null){var e=Dt.alternate;e=e!==null?e.memoizedState:null}else e=$t.next;var r=Gt===null?Dt.memoizedState:Gt.next;if(r!==null)Gt=r,$t=e;else{if(e===null)throw Error(ze(310));$t=e,e={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},Gt===null?Dt.memoizedState=Gt=e:Gt=Gt.next=e}return Gt}function bs(e,r){return typeof r=="function"?r(e):r}function Ua(e){var r=Mr(),n=r.queue;if(n===null)throw Error(ze(311));n.lastRenderedReducer=e;var o=$t,i=o.baseQueue,s=n.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}o.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,o=o.baseState;var a=l=null,d=null,c=s;do{var h=c.lane;if((yo&h)===h)d!==null&&(d=d.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),o=c.hasEagerState?c.eagerState:e(o,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};d===null?(a=d=f,l=o):d=d.next=f,Dt.lanes|=h,vo|=h}c=c.next}while(c!==null&&c!==s);d===null?l=o:d.next=a,Vr(o,r.memoizedState)||(dr=!0),r.memoizedState=o,r.baseState=l,r.baseQueue=d,n.lastRenderedState=o}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Dt.lanes|=s,vo|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function Va(e){var r=Mr(),n=r.queue;if(n===null)throw Error(ze(311));n.lastRenderedReducer=e;var o=n.dispatch,i=n.pending,s=r.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do s=e(s,l.action),l=l.next;while(l!==i);Vr(s,r.memoizedState)||(dr=!0),r.memoizedState=s,r.baseQueue===null&&(r.baseState=s),n.lastRenderedState=s}return[s,o]}function dh(){}function ch(e,r){var n=Dt,o=Mr(),i=r(),s=!Vr(o.memoizedState,i);if(s&&(o.memoizedState=i,dr=!0),o=o.queue,ag(ph.bind(null,n,o,e),[e]),o.getSnapshot!==r||s||Gt!==null&&Gt.memoizedState.tag&1){if(n.flags|=2048,hs(9,uh.bind(null,n,o,i,r),void 0,null),Ut===null)throw Error(ze(349));yo&30||gh(n,r,i)}return i}function gh(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=Dt.updateQueue,r===null?(r={lastEffect:null,stores:null},Dt.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function uh(e,r,n,o){r.value=n,r.getSnapshot=o,bh(r)&&hh(e)}function ph(e,r,n){return n(function(){bh(r)&&hh(e)})}function bh(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!Vr(e,n)}catch{return!0}}function hh(e){var r=yn(e,1);r!==null&&Ur(r,e,1,-1)}function vu(e){var r=qr();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bs,lastRenderedState:e},r.queue=e,e=e.dispatch=Ox.bind(null,Dt,e),[r.memoizedState,e]}function hs(e,r,n,o){return e={tag:e,create:r,destroy:n,deps:o,next:null},r=Dt.updateQueue,r===null?(r={lastEffect:null,stores:null},Dt.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,r.lastEffect=e)),e}function mh(){return Mr().memoizedState}function xl(e,r,n,o){var i=qr();Dt.flags|=e,i.memoizedState=hs(1|r,n,void 0,o===void 0?null:o)}function ca(e,r,n,o){var i=Mr();o=o===void 0?null:o;var s=void 0;if($t!==null){var l=$t.memoizedState;if(s=l.destroy,o!==null&&ig(o,l.deps)){i.memoizedState=hs(r,n,s,o);return}}Dt.flags|=e,i.memoizedState=hs(1|r,n,s,o)}function ju(e,r){return xl(8390656,8,e,r)}function ag(e,r){return ca(2048,8,e,r)}function fh(e,r){return ca(4,2,e,r)}function xh(e,r){return ca(4,4,e,r)}function yh(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function vh(e,r,n){return n=n!=null?n.concat([e]):null,ca(4,4,yh.bind(null,r,e),n)}function dg(){}function jh(e,r){var n=Mr();r=r===void 0?null:r;var o=n.memoizedState;return o!==null&&r!==null&&ig(r,o[1])?o[0]:(n.memoizedState=[e,r],e)}function kh(e,r){var n=Mr();r=r===void 0?null:r;var o=n.memoizedState;return o!==null&&r!==null&&ig(r,o[1])?o[0]:(e=e(),n.memoizedState=[e,r],e)}function wh(e,r,n){return yo&21?(Vr(n,r)||(n=Ib(),Dt.lanes|=n,vo|=n,e.baseState=!0),r):(e.baseState&&(e.baseState=!1,dr=!0),e.memoizedState=n)}function Px(e,r){var n=jt;jt=n!==0&&4>n?n:4,e(!0);var o=Ga.transition;Ga.transition={};try{e(!1),r()}finally{jt=n,Ga.transition=o}}function Sh(){return Mr().memoizedState}function Nx(e,r,n){var o=Un(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Ch(e))zh(r,n);else if(n=sh(e,r,n,o),n!==null){var i=nr();Ur(n,e,o,i),Th(n,r,o)}}function Ox(e,r,n){var o=Un(e),i={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ch(e))zh(r,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=r.lastRenderedReducer,s!==null))try{var l=r.lastRenderedState,a=s(l,n);if(i.hasEagerState=!0,i.eagerState=a,Vr(a,l)){var d=r.interleaved;d===null?(i.next=i,eg(r)):(i.next=d.next,d.next=i),r.interleaved=i;return}}catch{}finally{}n=sh(e,r,i,o),n!==null&&(i=nr(),Ur(n,e,o,i),Th(n,r,o))}}function Ch(e){var r=e.alternate;return e===Dt||r!==null&&r===Dt}function zh(e,r){Hi=Ol=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function Th(e,r,n){if(n&4194240){var o=r.lanes;o&=e.pendingLanes,n|=o,r.lanes=n,Pc(e,n)}}var Hl={readContext:Wr,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useInsertionEffect:qt,useLayoutEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useMutableSource:qt,useSyncExternalStore:qt,useId:qt,unstable_isNewReconciler:!1},Hx={readContext:Wr,useCallback:function(e,r){return qr().memoizedState=[e,r===void 0?null:r],e},useContext:Wr,useEffect:ju,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,xl(4194308,4,yh.bind(null,r,e),n)},useLayoutEffect:function(e,r){return xl(4194308,4,e,r)},useInsertionEffect:function(e,r){return xl(4,2,e,r)},useMemo:function(e,r){var n=qr();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var o=qr();return r=n!==void 0?n(r):r,o.memoizedState=o.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},o.queue=e,e=e.dispatch=Nx.bind(null,Dt,e),[o.memoizedState,e]},useRef:function(e){var r=qr();return e={current:e},r.memoizedState=e},useState:vu,useDebugValue:dg,useDeferredValue:function(e){return qr().memoizedState=e},useTransition:function(){var e=vu(!1),r=e[0];return e=Px.bind(null,e[1]),qr().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var o=Dt,i=qr();if(Tt){if(n===void 0)throw Error(ze(407));n=n()}else{if(n=r(),Ut===null)throw Error(ze(349));yo&30||gh(o,r,n)}i.memoizedState=n;var s={value:n,getSnapshot:r};return i.queue=s,ju(ph.bind(null,o,s,e),[e]),o.flags|=2048,hs(9,uh.bind(null,o,s,n,r),void 0,null),n},useId:function(){var e=qr(),r=Ut.identifierPrefix;if(Tt){var n=hn,o=bn;n=(o&~(1<<32-Gr(o)-1)).toString(32)+n,r=":"+r+"R"+n,n=ps++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=$x++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Gx={readContext:Wr,useCallback:jh,useContext:Wr,useEffect:ag,useImperativeHandle:vh,useInsertionEffect:fh,useLayoutEffect:xh,useMemo:kh,useReducer:Ua,useRef:mh,useState:function(){return Ua(bs)},useDebugValue:dg,useDeferredValue:function(e){var r=Mr();return wh(r,$t.memoizedState,e)},useTransition:function(){var e=Ua(bs)[0],r=Mr().memoizedState;return[e,r]},useMutableSource:dh,useSyncExternalStore:ch,useId:Sh,unstable_isNewReconciler:!1},Ux={readContext:Wr,useCallback:jh,useContext:Wr,useEffect:ag,useImperativeHandle:vh,useInsertionEffect:fh,useLayoutEffect:xh,useMemo:kh,useReducer:Va,useRef:mh,useState:function(){return Va(bs)},useDebugValue:dg,useDeferredValue:function(e){var r=Mr();return $t===null?r.memoizedState=e:wh(r,$t.memoizedState,e)},useTransition:function(){var e=Va(bs)[0],r=Mr().memoizedState;return[e,r]},useMutableSource:dh,useSyncExternalStore:ch,useId:Sh,unstable_isNewReconciler:!1};function Pr(e,r){if(e&&e.defaultProps){r=Ft({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function Kd(e,r,n,o){r=e.memoizedState,n=n(o,r),n=n==null?r:Ft({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ga={isMounted:function(e){return(e=e._reactInternals)?wo(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var o=nr(),i=Un(e),s=mn(o,i);s.payload=r,n!=null&&(s.callback=n),r=Hn(e,s,i),r!==null&&(Ur(r,e,i,o),ml(r,e,i))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var o=nr(),i=Un(e),s=mn(o,i);s.tag=1,s.payload=r,n!=null&&(s.callback=n),r=Hn(e,s,i),r!==null&&(Ur(r,e,i,o),ml(r,e,i))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=nr(),o=Un(e),i=mn(n,o);i.tag=2,r!=null&&(i.callback=r),r=Hn(e,i,o),r!==null&&(Ur(r,e,o,n),ml(r,e,o))}};function ku(e,r,n,o,i,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,l):r.prototype&&r.prototype.isPureReactComponent?!ls(n,o)||!ls(i,s):!0}function Ih(e,r,n){var o=!1,i=Qn,s=r.contextType;return typeof s=="object"&&s!==null?s=Wr(s):(i=gr(r)?fo:er.current,o=r.contextTypes,s=(o=o!=null)?ri(e,i):Qn),r=new r(n,s),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ga,e.stateNode=r,r._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),r}function wu(e,r,n,o){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,o),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,o),r.state!==e&&ga.enqueueReplaceState(r,r.state,null)}function Qd(e,r,n,o){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},tg(e);var s=r.contextType;typeof s=="object"&&s!==null?i.context=Wr(s):(s=gr(r)?fo:er.current,i.context=ri(e,s)),i.state=e.memoizedState,s=r.getDerivedStateFromProps,typeof s=="function"&&(Kd(e,r,s,n),i.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&ga.enqueueReplaceState(i,i.state,null),Pl(e,n,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function si(e,r){try{var n="",o=r;do n+=yf(o),o=o.return;while(o);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:r,stack:i,digest:null}}function Ya(e,r,n){return{value:e,source:null,stack:n??null,digest:r??null}}function qd(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var Vx=typeof WeakMap=="function"?WeakMap:Map;function Bh(e,r,n){n=mn(-1,n),n.tag=3,n.payload={element:null};var o=r.value;return n.callback=function(){Ul||(Ul=!0,sc=o),qd(e,r)},n}function Rh(e,r,n){n=mn(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=r.value;n.payload=function(){return o(i)},n.callback=function(){qd(e,r)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qd(e,r),typeof o!="function"&&(Gn===null?Gn=new Set([this]):Gn.add(this));var l=r.stack;this.componentDidCatch(r.value,{componentStack:l!==null?l:""})}),n}function Su(e,r,n){var o=e.pingCache;if(o===null){o=e.pingCache=new Vx;var i=new Set;o.set(r,i)}else i=o.get(r),i===void 0&&(i=new Set,o.set(r,i));i.has(n)||(i.add(n),e=sy.bind(null,e,r,n),r.then(e,e))}function Cu(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function zu(e,r,n,o,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=mn(-1,1),r.tag=2,Hn(n,r,1))),n.lanes|=1),e)}var Yx=wn.ReactCurrentOwner,dr=!1;function tr(e,r,n,o){r.child=e===null?ih(r,null,n,o):oi(r,e.child,n,o)}function Tu(e,r,n,o,i){n=n.render;var s=r.ref;return Zo(r,i),o=sg(e,r,n,o,s,i),n=lg(),e!==null&&!dr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,vn(e,r,i)):(Tt&&n&&Kc(r),r.flags|=1,tr(e,r,o,i),r.child)}function Iu(e,r,n,o,i){if(e===null){var s=n.type;return typeof s=="function"&&!fg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=s,Eh(e,r,s,o,i)):(e=kl(n.type,null,o,r,r.mode,i),e.ref=r.ref,e.return=r,r.child=e)}if(s=e.child,!(e.lanes&i)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:ls,n(l,o)&&e.ref===r.ref)return vn(e,r,i)}return r.flags|=1,e=Vn(s,o),e.ref=r.ref,e.return=r,r.child=e}function Eh(e,r,n,o,i){if(e!==null){var s=e.memoizedProps;if(ls(s,o)&&e.ref===r.ref)if(dr=!1,r.pendingProps=o=s,(e.lanes&i)!==0)e.flags&131072&&(dr=!0);else return r.lanes=e.lanes,vn(e,r,i)}return Xd(e,r,n,o,i)}function Dh(e,r,n){var o=r.pendingProps,i=o.children,s=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},wt(Yo,yr),yr|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,wt(Yo,yr),yr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:n,wt(Yo,yr),yr|=o}else s!==null?(o=s.baseLanes|n,r.memoizedState=null):o=n,wt(Yo,yr),yr|=o;return tr(e,r,i,n),r.child}function Fh(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function Xd(e,r,n,o,i){var s=gr(n)?fo:er.current;return s=ri(r,s),Zo(r,i),n=sg(e,r,n,o,s,i),o=lg(),e!==null&&!dr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,vn(e,r,i)):(Tt&&o&&Kc(r),r.flags|=1,tr(e,r,n,i),r.child)}function Bu(e,r,n,o,i){if(gr(n)){var s=!0;Wl(r)}else s=!1;if(Zo(r,i),r.stateNode===null)yl(e,r),Ih(r,n,o),Qd(r,n,o,i),o=!0;else if(e===null){var l=r.stateNode,a=r.memoizedProps;l.props=a;var d=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Wr(c):(c=gr(n)?fo:er.current,c=ri(r,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==o||d!==c)&&wu(r,l,o,c),Fn=!1;var m=r.memoizedState;l.state=m,Pl(r,o,l,i),d=r.memoizedState,a!==o||m!==d||cr.current||Fn?(typeof h=="function"&&(Kd(r,n,h,o),d=r.memoizedState),(a=Fn||ku(r,n,a,o,m,d,c))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(r.flags|=4194308)):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=o,r.memoizedState=d),l.props=o,l.state=d,l.context=c,o=a):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),o=!1)}else{l=r.stateNode,lh(e,r),a=r.memoizedProps,c=r.type===r.elementType?a:Pr(r.type,a),l.props=c,f=r.pendingProps,m=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=Wr(d):(d=gr(n)?fo:er.current,d=ri(r,d));var I=n.getDerivedStateFromProps;(h=typeof I=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||m!==d)&&wu(r,l,o,d),Fn=!1,m=r.memoizedState,l.state=m,Pl(r,o,l,i);var B=r.memoizedState;a!==f||m!==B||cr.current||Fn?(typeof I=="function"&&(Kd(r,n,I,o),B=r.memoizedState),(c=Fn||ku(r,n,c,o,m,B,d)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,B,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,B,d)),typeof l.componentDidUpdate=="function"&&(r.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(r.flags|=1024),r.memoizedProps=o,r.memoizedState=B),l.props=o,l.state=B,l.context=d,o=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(r.flags|=1024),o=!1)}return Zd(e,r,n,o,s,i)}function Zd(e,r,n,o,i,s){Fh(e,r);var l=(r.flags&128)!==0;if(!o&&!l)return i&&bu(r,n,!1),vn(e,r,s);o=r.stateNode,Yx.current=r;var a=l&&typeof n.getDerivedStateFromError!="function"?null:o.render();return r.flags|=1,e!==null&&l?(r.child=oi(r,e.child,null,s),r.child=oi(r,null,a,s)):tr(e,r,a,s),r.memoizedState=o.state,i&&bu(r,n,!0),r.child}function Ah(e){var r=e.stateNode;r.pendingContext?pu(e,r.pendingContext,r.pendingContext!==r.context):r.context&&pu(e,r.context,!1),rg(e,r.containerInfo)}function Ru(e,r,n,o,i){return ni(),qc(i),r.flags|=256,tr(e,r,n,o),r.child}var Jd={dehydrated:null,treeContext:null,retryLane:0};function ec(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wh(e,r,n){var o=r.pendingProps,i=Et.current,s=!1,l=(r.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),wt(Et,i&1),e===null)return Vd(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(r.mode&1?e.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(l=o.children,e=o.fallback,s?(o=r.mode,s=r.child,l={mode:"hidden",children:l},!(o&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=ba(l,o,0,null),e=mo(e,o,n,null),s.return=r,e.return=r,s.sibling=e,r.child=s,r.child.memoizedState=ec(n),r.memoizedState=Jd,e):cg(r,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Kx(e,r,l,o,a,i,n);if(s){s=o.fallback,l=r.mode,i=e.child,a=i.sibling;var d={mode:"hidden",children:o.children};return!(l&1)&&r.child!==i?(o=r.child,o.childLanes=0,o.pendingProps=d,r.deletions=null):(o=Vn(i,d),o.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Vn(a,s):(s=mo(s,l,n,null),s.flags|=2),s.return=r,o.return=r,o.sibling=s,r.child=o,o=s,s=r.child,l=e.child.memoizedState,l=l===null?ec(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,r.memoizedState=Jd,o}return s=e.child,e=s.sibling,o=Vn(s,{mode:"visible",children:o.children}),!(r.mode&1)&&(o.lanes=n),o.return=r,o.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=o,r.memoizedState=null,o}function cg(e,r){return r=ba({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Ps(e,r,n,o){return o!==null&&qc(o),oi(r,e.child,null,n),e=cg(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Kx(e,r,n,o,i,s,l){if(n)return r.flags&256?(r.flags&=-257,o=Ya(Error(ze(422))),Ps(e,r,l,o)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(s=o.fallback,i=r.mode,o=ba({mode:"visible",children:o.children},i,0,null),s=mo(s,i,l,null),s.flags|=2,o.return=r,s.return=r,o.sibling=s,r.child=o,r.mode&1&&oi(r,e.child,null,l),r.child.memoizedState=ec(l),r.memoizedState=Jd,s);if(!(r.mode&1))return Ps(e,r,l,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var a=o.dgst;return o=a,s=Error(ze(419)),o=Ya(s,o,void 0),Ps(e,r,l,o)}if(a=(l&e.childLanes)!==0,dr||a){if(o=Ut,o!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(o.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,yn(e,i),Ur(o,e,i,-1))}return mg(),o=Ya(Error(ze(421))),Ps(e,r,l,o)}return i.data==="$?"?(r.flags|=128,r.child=e.child,r=ly.bind(null,e),i._reactRetry=r,null):(e=s.treeContext,vr=On(i.nextSibling),jr=r,Tt=!0,Hr=null,e!==null&&(Er[Dr++]=bn,Er[Dr++]=hn,Er[Dr++]=xo,bn=e.id,hn=e.overflow,xo=r),r=cg(r,o.children),r.flags|=4096,r)}function Eu(e,r,n){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r),Yd(e.return,r,n)}function Ka(e,r,n,o,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:i}:(s.isBackwards=r,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=n,s.tailMode=i)}function Mh(e,r,n){var o=r.pendingProps,i=o.revealOrder,s=o.tail;if(tr(e,r,o.children,n),o=Et.current,o&2)o=o&1|2,r.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Eu(e,n,r);else if(e.tag===19)Eu(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(wt(Et,o),!(r.mode&1))r.memoizedState=null;else switch(i){case"forwards":for(n=r.child,i=null;n!==null;)e=n.alternate,e!==null&&Nl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=r.child,r.child=null):(i=n.sibling,n.sibling=null),Ka(r,!1,i,n,s);break;case"backwards":for(n=null,i=r.child,r.child=null;i!==null;){if(e=i.alternate,e!==null&&Nl(e)===null){r.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ka(r,!0,n,null,s);break;case"together":Ka(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function yl(e,r){!(r.mode&1)&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function vn(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),vo|=r.lanes,!(n&r.childLanes))return null;if(e!==null&&r.child!==e.child)throw Error(ze(153));if(r.child!==null){for(e=r.child,n=Vn(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=Vn(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function Qx(e,r,n){switch(r.tag){case 3:Ah(r),ni();break;case 5:ah(r);break;case 1:gr(r.type)&&Wl(r);break;case 4:rg(r,r.stateNode.containerInfo);break;case 10:var o=r.type._context,i=r.memoizedProps.value;wt(_l,o._currentValue),o._currentValue=i;break;case 13:if(o=r.memoizedState,o!==null)return o.dehydrated!==null?(wt(Et,Et.current&1),r.flags|=128,null):n&r.child.childLanes?Wh(e,r,n):(wt(Et,Et.current&1),e=vn(e,r,n),e!==null?e.sibling:null);wt(Et,Et.current&1);break;case 19:if(o=(n&r.childLanes)!==0,e.flags&128){if(o)return Mh(e,r,n);r.flags|=128}if(i=r.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),wt(Et,Et.current),o)break;return null;case 22:case 23:return r.lanes=0,Dh(e,r,n)}return vn(e,r,n)}var Lh,tc,_h,$h;Lh=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tc=function(){};_h=function(e,r,n,o){var i=e.memoizedProps;if(i!==o){e=r.stateNode,po(tn.current);var s=null;switch(n){case"input":i=wd(e,i),o=wd(e,o),s=[];break;case"select":i=Ft({},i,{value:void 0}),o=Ft({},o,{value:void 0}),s=[];break;case"textarea":i=zd(e,i),o=zd(e,o),s=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Fl)}Id(n,o);var l;n=null;for(c in i)if(!o.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(es.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in o){var d=o[c];if(a=i!=null?i[c]:void 0,o.hasOwnProperty(c)&&d!==a&&(d!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&a[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(s||(s=[]),s.push(c,n)),n=d;else c==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(s=s||[]).push(c,d)):c==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(c,""+d):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(es.hasOwnProperty(c)?(d!=null&&c==="onScroll"&&St("scroll",e),s||a===d||(s=[])):(s=s||[]).push(c,d))}n&&(s=s||[]).push("style",n);var c=s;(r.updateQueue=c)&&(r.flags|=4)}};$h=function(e,r,n,o){n!==o&&(r.flags|=4)};function Si(e,r){if(!Tt)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Xt(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(r)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=n,r}function qx(e,r,n){var o=r.pendingProps;switch(Qc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(r),null;case 1:return gr(r.type)&&Al(),Xt(r),null;case 3:return o=r.stateNode,ii(),Ct(cr),Ct(er),og(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(_s(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Hr!==null&&(dc(Hr),Hr=null))),tc(e,r),Xt(r),null;case 5:ng(r);var i=po(us.current);if(n=r.type,e!==null&&r.stateNode!=null)_h(e,r,n,o,i),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!o){if(r.stateNode===null)throw Error(ze(166));return Xt(r),null}if(e=po(tn.current),_s(r)){o=r.stateNode,n=r.type;var s=r.memoizedProps;switch(o[Jr]=r,o[cs]=s,e=(r.mode&1)!==0,n){case"dialog":St("cancel",o),St("close",o);break;case"iframe":case"object":case"embed":St("load",o);break;case"video":case"audio":for(i=0;i<Di.length;i++)St(Di[i],o);break;case"source":St("error",o);break;case"img":case"image":case"link":St("error",o),St("load",o);break;case"details":St("toggle",o);break;case"input":Pg(o,s),St("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},St("invalid",o);break;case"textarea":Og(o,s),St("invalid",o)}Id(n,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="children"?typeof a=="string"?o.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ls(o.textContent,a,e),i=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ls(o.textContent,a,e),i=["children",""+a]):es.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&St("scroll",o)}switch(n){case"input":Bs(o),Ng(o,s,!0);break;case"textarea":Bs(o),Hg(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=Fl)}o=i,r.updateQueue=o,o!==null&&(r.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pb(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=l.createElement(n,{is:o.is}):(e=l.createElement(n),n==="select"&&(l=e,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):e=l.createElementNS(e,n),e[Jr]=r,e[cs]=o,Lh(e,r,!1,!1),r.stateNode=e;e:{switch(l=Bd(n,o),n){case"dialog":St("cancel",e),St("close",e),i=o;break;case"iframe":case"object":case"embed":St("load",e),i=o;break;case"video":case"audio":for(i=0;i<Di.length;i++)St(Di[i],e);i=o;break;case"source":St("error",e),i=o;break;case"img":case"image":case"link":St("error",e),St("load",e),i=o;break;case"details":St("toggle",e),i=o;break;case"input":Pg(e,o),i=wd(e,o),St("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=Ft({},o,{value:void 0}),St("invalid",e);break;case"textarea":Og(e,o),i=zd(e,o),St("invalid",e);break;default:i=o}Id(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var d=a[s];s==="style"?mb(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&bb(e,d)):s==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&ts(e,d):typeof d=="number"&&ts(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(es.hasOwnProperty(s)?d!=null&&s==="onScroll"&&St("scroll",e):d!=null&&Ac(e,s,d,l))}switch(n){case"input":Bs(e),Ng(e,o,!1);break;case"textarea":Bs(e),Hg(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Kn(o.value));break;case"select":e.multiple=!!o.multiple,s=o.value,s!=null?Ko(e,!!o.multiple,s,!1):o.defaultValue!=null&&Ko(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Fl)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Xt(r),null;case 6:if(e&&r.stateNode!=null)$h(e,r,e.memoizedProps,o);else{if(typeof o!="string"&&r.stateNode===null)throw Error(ze(166));if(n=po(us.current),po(tn.current),_s(r)){if(o=r.stateNode,n=r.memoizedProps,o[Jr]=r,(s=o.nodeValue!==n)&&(e=jr,e!==null))switch(e.tag){case 3:Ls(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ls(o.nodeValue,n,(e.mode&1)!==0)}s&&(r.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Jr]=r,r.stateNode=o}return Xt(r),null;case 13:if(Ct(Et),o=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Tt&&vr!==null&&r.mode&1&&!(r.flags&128))nh(),ni(),r.flags|=98560,s=!1;else if(s=_s(r),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(ze(318));if(s=r.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ze(317));s[Jr]=r}else ni(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Xt(r),s=!1}else Hr!==null&&(dc(Hr),Hr=null),s=!0;if(!s)return r.flags&65536?r:null}return r.flags&128?(r.lanes=n,r):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(r.child.flags|=8192,r.mode&1&&(e===null||Et.current&1?Pt===0&&(Pt=3):mg())),r.updateQueue!==null&&(r.flags|=4),Xt(r),null);case 4:return ii(),tc(e,r),e===null&&as(r.stateNode.containerInfo),Xt(r),null;case 10:return Jc(r.type._context),Xt(r),null;case 17:return gr(r.type)&&Al(),Xt(r),null;case 19:if(Ct(Et),s=r.memoizedState,s===null)return Xt(r),null;if(o=(r.flags&128)!==0,l=s.rendering,l===null)if(o)Si(s,!1);else{if(Pt!==0||e!==null&&e.flags&128)for(e=r.child;e!==null;){if(l=Nl(e),l!==null){for(r.flags|=128,Si(s,!1),o=l.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),r.subtreeFlags=0,o=n,n=r.child;n!==null;)s=n,e=o,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return wt(Et,Et.current&1|2),r.child}e=e.sibling}s.tail!==null&&Wt()>li&&(r.flags|=128,o=!0,Si(s,!1),r.lanes=4194304)}else{if(!o)if(e=Nl(l),e!==null){if(r.flags|=128,o=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),Si(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!Tt)return Xt(r),null}else 2*Wt()-s.renderingStartTime>li&&n!==1073741824&&(r.flags|=128,o=!0,Si(s,!1),r.lanes=4194304);s.isBackwards?(l.sibling=r.child,r.child=l):(n=s.last,n!==null?n.sibling=l:r.child=l,s.last=l)}return s.tail!==null?(r=s.tail,s.rendering=r,s.tail=r.sibling,s.renderingStartTime=Wt(),r.sibling=null,n=Et.current,wt(Et,o?n&1|2:n&1),r):(Xt(r),null);case 22:case 23:return hg(),o=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(r.flags|=8192),o&&r.mode&1?yr&1073741824&&(Xt(r),r.subtreeFlags&6&&(r.flags|=8192)):Xt(r),null;case 24:return null;case 25:return null}throw Error(ze(156,r.tag))}function Xx(e,r){switch(Qc(r),r.tag){case 1:return gr(r.type)&&Al(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return ii(),Ct(cr),Ct(er),og(),e=r.flags,e&65536&&!(e&128)?(r.flags=e&-65537|128,r):null;case 5:return ng(r),null;case 13:if(Ct(Et),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(ze(340));ni()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return Ct(Et),null;case 4:return ii(),null;case 10:return Jc(r.type._context),null;case 22:case 23:return hg(),null;case 24:return null;default:return null}}var Ns=!1,Jt=!1,Zx=typeof WeakSet=="function"?WeakSet:Set,_e=null;function Vo(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){At(e,r,o)}else n.current=null}function rc(e,r,n){try{n()}catch(o){At(e,r,o)}}var Du=!1;function Jx(e,r){if($d=Rl,e=Gb(),Yc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var i=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,a=-1,d=-1,c=0,h=0,f=e,m=null;t:for(;;){for(var I;f!==n||i!==0&&f.nodeType!==3||(a=l+i),f!==s||o!==0&&f.nodeType!==3||(d=l+o),f.nodeType===3&&(l+=f.nodeValue.length),(I=f.firstChild)!==null;)m=f,f=I;for(;;){if(f===e)break t;if(m===n&&++c===i&&(a=l),m===s&&++h===o&&(d=l),(I=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=I}n=a===-1||d===-1?null:{start:a,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pd={focusedElem:e,selectionRange:n},Rl=!1,_e=r;_e!==null;)if(r=_e,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,_e=e;else for(;_e!==null;){r=_e;try{var B=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(B!==null){var z=B.memoizedProps,w=B.memoizedState,p=r.stateNode,b=p.getSnapshotBeforeUpdate(r.elementType===r.type?z:Pr(r.type,z),w);p.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var u=r.stateNode.containerInfo;u.nodeType===1?u.textContent="":u.nodeType===9&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ze(163))}}catch(j){At(r,r.return,j)}if(e=r.sibling,e!==null){e.return=r.return,_e=e;break}_e=r.return}return B=Du,Du=!1,B}function Gi(e,r,n){var o=r.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&rc(r,n,s)}i=i.next}while(i!==o)}}function ua(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==r)}}function nc(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function Ph(e){var r=e.alternate;r!==null&&(e.alternate=null,Ph(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Jr],delete r[cs],delete r[Hd],delete r[Wx],delete r[Mx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Nh(e){return e.tag===5||e.tag===3||e.tag===4}function Fu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function oc(e,r,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=Fl));else if(o!==4&&(e=e.child,e!==null))for(oc(e,r,n),e=e.sibling;e!==null;)oc(e,r,n),e=e.sibling}function ic(e,r,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(ic(e,r,n),e=e.sibling;e!==null;)ic(e,r,n),e=e.sibling}var Vt=null,Nr=!1;function Tn(e,r,n){for(n=n.child;n!==null;)Oh(e,r,n),n=n.sibling}function Oh(e,r,n){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(oa,n)}catch{}switch(n.tag){case 5:Jt||Vo(n,r);case 6:var o=Vt,i=Nr;Vt=null,Tn(e,r,n),Vt=o,Nr=i,Vt!==null&&(Nr?(e=Vt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Vt.removeChild(n.stateNode));break;case 18:Vt!==null&&(Nr?(e=Vt,n=n.stateNode,e.nodeType===8?Na(e.parentNode,n):e.nodeType===1&&Na(e,n),is(e)):Na(Vt,n.stateNode));break;case 4:o=Vt,i=Nr,Vt=n.stateNode.containerInfo,Nr=!0,Tn(e,r,n),Vt=o,Nr=i;break;case 0:case 11:case 14:case 15:if(!Jt&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&rc(n,r,l),i=i.next}while(i!==o)}Tn(e,r,n);break;case 1:if(!Jt&&(Vo(n,r),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(a){At(n,r,a)}Tn(e,r,n);break;case 21:Tn(e,r,n);break;case 22:n.mode&1?(Jt=(o=Jt)||n.memoizedState!==null,Tn(e,r,n),Jt=o):Tn(e,r,n);break;default:Tn(e,r,n)}}function Au(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Zx),r.forEach(function(o){var i=ay.bind(null,e,o);n.has(o)||(n.add(o),o.then(i,i))})}}function Lr(e,r){var n=r.deletions;if(n!==null)for(var o=0;o<n.length;o++){var i=n[o];try{var s=e,l=r,a=l;e:for(;a!==null;){switch(a.tag){case 5:Vt=a.stateNode,Nr=!1;break e;case 3:Vt=a.stateNode.containerInfo,Nr=!0;break e;case 4:Vt=a.stateNode.containerInfo,Nr=!0;break e}a=a.return}if(Vt===null)throw Error(ze(160));Oh(s,l,i),Vt=null,Nr=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(c){At(i,r,c)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Hh(r,e),r=r.sibling}function Hh(e,r){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Lr(r,e),Kr(e),o&4){try{Gi(3,e,e.return),ua(3,e)}catch(z){At(e,e.return,z)}try{Gi(5,e,e.return)}catch(z){At(e,e.return,z)}}break;case 1:Lr(r,e),Kr(e),o&512&&n!==null&&Vo(n,n.return);break;case 5:if(Lr(r,e),Kr(e),o&512&&n!==null&&Vo(n,n.return),e.flags&32){var i=e.stateNode;try{ts(i,"")}catch(z){At(e,e.return,z)}}if(o&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,l=n!==null?n.memoizedProps:s,a=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&gb(i,s),Bd(a,l);var c=Bd(a,s);for(l=0;l<d.length;l+=2){var h=d[l],f=d[l+1];h==="style"?mb(i,f):h==="dangerouslySetInnerHTML"?bb(i,f):h==="children"?ts(i,f):Ac(i,h,f,c)}switch(a){case"input":Sd(i,s);break;case"textarea":ub(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?Ko(i,!!s.multiple,I,!1):m!==!!s.multiple&&(s.defaultValue!=null?Ko(i,!!s.multiple,s.defaultValue,!0):Ko(i,!!s.multiple,s.multiple?[]:"",!1))}i[cs]=s}catch(z){At(e,e.return,z)}}break;case 6:if(Lr(r,e),Kr(e),o&4){if(e.stateNode===null)throw Error(ze(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(z){At(e,e.return,z)}}break;case 3:if(Lr(r,e),Kr(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{is(r.containerInfo)}catch(z){At(e,e.return,z)}break;case 4:Lr(r,e),Kr(e);break;case 13:Lr(r,e),Kr(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(pg=Wt())),o&4&&Au(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Jt=(c=Jt)||h,Lr(r,e),Jt=c):Lr(r,e),Kr(e),o&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(_e=e,h=e.child;h!==null;){for(f=_e=h;_e!==null;){switch(m=_e,I=m.child,m.tag){case 0:case 11:case 14:case 15:Gi(4,m,m.return);break;case 1:Vo(m,m.return);var B=m.stateNode;if(typeof B.componentWillUnmount=="function"){o=m,n=m.return;try{r=o,B.props=r.memoizedProps,B.state=r.memoizedState,B.componentWillUnmount()}catch(z){At(o,n,z)}}break;case 5:Vo(m,m.return);break;case 22:if(m.memoizedState!==null){Mu(f);continue}}I!==null?(I.return=m,_e=I):Mu(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,d=f.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=hb("display",l))}catch(z){At(e,e.return,z)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(z){At(e,e.return,z)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Lr(r,e),Kr(e),o&4&&Au(e);break;case 21:break;default:Lr(r,e),Kr(e)}}function Kr(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(Nh(n)){var o=n;break e}n=n.return}throw Error(ze(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(ts(i,""),o.flags&=-33);var s=Fu(e);ic(e,s,i);break;case 3:case 4:var l=o.stateNode.containerInfo,a=Fu(e);oc(e,a,l);break;default:throw Error(ze(161))}}catch(d){At(e,e.return,d)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function ey(e,r,n){_e=e,Gh(e)}function Gh(e,r,n){for(var o=(e.mode&1)!==0;_e!==null;){var i=_e,s=i.child;if(i.tag===22&&o){var l=i.memoizedState!==null||Ns;if(!l){var a=i.alternate,d=a!==null&&a.memoizedState!==null||Jt;a=Ns;var c=Jt;if(Ns=l,(Jt=d)&&!c)for(_e=i;_e!==null;)l=_e,d=l.child,l.tag===22&&l.memoizedState!==null?Lu(i):d!==null?(d.return=l,_e=d):Lu(i);for(;s!==null;)_e=s,Gh(s),s=s.sibling;_e=i,Ns=a,Jt=c}Wu(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,_e=s):Wu(e)}}function Wu(e){for(;_e!==null;){var r=_e;if(r.flags&8772){var n=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Jt||ua(5,r);break;case 1:var o=r.stateNode;if(r.flags&4&&!Jt)if(n===null)o.componentDidMount();else{var i=r.elementType===r.type?n.memoizedProps:Pr(r.type,n.memoizedProps);o.componentDidUpdate(i,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=r.updateQueue;s!==null&&yu(r,s,o);break;case 3:var l=r.updateQueue;if(l!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}yu(r,l,n)}break;case 5:var a=r.stateNode;if(n===null&&r.flags&4){n=a;var d=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var c=r.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&is(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ze(163))}Jt||r.flags&512&&nc(r)}catch(m){At(r,r.return,m)}}if(r===e){_e=null;break}if(n=r.sibling,n!==null){n.return=r.return,_e=n;break}_e=r.return}}function Mu(e){for(;_e!==null;){var r=_e;if(r===e){_e=null;break}var n=r.sibling;if(n!==null){n.return=r.return,_e=n;break}_e=r.return}}function Lu(e){for(;_e!==null;){var r=_e;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{ua(4,r)}catch(d){At(r,n,d)}break;case 1:var o=r.stateNode;if(typeof o.componentDidMount=="function"){var i=r.return;try{o.componentDidMount()}catch(d){At(r,i,d)}}var s=r.return;try{nc(r)}catch(d){At(r,s,d)}break;case 5:var l=r.return;try{nc(r)}catch(d){At(r,l,d)}}}catch(d){At(r,r.return,d)}if(r===e){_e=null;break}var a=r.sibling;if(a!==null){a.return=r.return,_e=a;break}_e=r.return}}var ty=Math.ceil,Gl=wn.ReactCurrentDispatcher,gg=wn.ReactCurrentOwner,Ar=wn.ReactCurrentBatchConfig,pt=0,Ut=null,Mt=null,Kt=0,yr=0,Yo=Xn(0),Pt=0,ms=null,vo=0,pa=0,ug=0,Ui=null,ar=null,pg=0,li=1/0,dn=null,Ul=!1,sc=null,Gn=null,Os=!1,_n=null,Vl=0,Vi=0,lc=null,vl=-1,jl=0;function nr(){return pt&6?Wt():vl!==-1?vl:vl=Wt()}function Un(e){return e.mode&1?pt&2&&Kt!==0?Kt&-Kt:_x.transition!==null?(jl===0&&(jl=Ib()),jl):(e=jt,e!==0||(e=window.event,e=e===void 0?16:Wb(e.type)),e):1}function Ur(e,r,n,o){if(50<Vi)throw Vi=0,lc=null,Error(ze(185));ws(e,n,o),(!(pt&2)||e!==Ut)&&(e===Ut&&(!(pt&2)&&(pa|=n),Pt===4&&Wn(e,Kt)),ur(e,o),n===1&&pt===0&&!(r.mode&1)&&(li=Wt()+500,da&&Zn()))}function ur(e,r){var n=e.callbackNode;_f(e,r);var o=Bl(e,e===Ut?Kt:0);if(o===0)n!==null&&Vg(n),e.callbackNode=null,e.callbackPriority=0;else if(r=o&-o,e.callbackPriority!==r){if(n!=null&&Vg(n),r===1)e.tag===0?Lx(_u.bind(null,e)):eh(_u.bind(null,e)),Fx(function(){!(pt&6)&&Zn()}),n=null;else{switch(Bb(o)){case 1:n=$c;break;case 4:n=zb;break;case 16:n=Il;break;case 536870912:n=Tb;break;default:n=Il}n=Zh(n,Uh.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function Uh(e,r){if(vl=-1,jl=0,pt&6)throw Error(ze(327));var n=e.callbackNode;if(Jo()&&e.callbackNode!==n)return null;var o=Bl(e,e===Ut?Kt:0);if(o===0)return null;if(o&30||o&e.expiredLanes||r)r=Yl(e,o);else{r=o;var i=pt;pt|=2;var s=Yh();(Ut!==e||Kt!==r)&&(dn=null,li=Wt()+500,ho(e,r));do try{oy();break}catch(a){Vh(e,a)}while(!0);Zc(),Gl.current=s,pt=i,Mt!==null?r=0:(Ut=null,Kt=0,r=Pt)}if(r!==0){if(r===2&&(i=Ad(e),i!==0&&(o=i,r=ac(e,i))),r===1)throw n=ms,ho(e,0),Wn(e,o),ur(e,Wt()),n;if(r===6)Wn(e,o);else{if(i=e.current.alternate,!(o&30)&&!ry(i)&&(r=Yl(e,o),r===2&&(s=Ad(e),s!==0&&(o=s,r=ac(e,s))),r===1))throw n=ms,ho(e,0),Wn(e,o),ur(e,Wt()),n;switch(e.finishedWork=i,e.finishedLanes=o,r){case 0:case 1:throw Error(ze(345));case 2:lo(e,ar,dn);break;case 3:if(Wn(e,o),(o&130023424)===o&&(r=pg+500-Wt(),10<r)){if(Bl(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){nr(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Od(lo.bind(null,e,ar,dn),r);break}lo(e,ar,dn);break;case 4:if(Wn(e,o),(o&4194240)===o)break;for(r=e.eventTimes,i=-1;0<o;){var l=31-Gr(o);s=1<<l,l=r[l],l>i&&(i=l),o&=~s}if(o=i,o=Wt()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*ty(o/1960))-o,10<o){e.timeoutHandle=Od(lo.bind(null,e,ar,dn),o);break}lo(e,ar,dn);break;case 5:lo(e,ar,dn);break;default:throw Error(ze(329))}}}return ur(e,Wt()),e.callbackNode===n?Uh.bind(null,e):null}function ac(e,r){var n=Ui;return e.current.memoizedState.isDehydrated&&(ho(e,r).flags|=256),e=Yl(e,r),e!==2&&(r=ar,ar=n,r!==null&&dc(r)),e}function dc(e){ar===null?ar=e:ar.push.apply(ar,e)}function ry(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var i=n[o],s=i.getSnapshot;i=i.value;try{if(!Vr(s(),i))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Wn(e,r){for(r&=~ug,r&=~pa,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-Gr(r),o=1<<n;e[n]=-1,r&=~o}}function _u(e){if(pt&6)throw Error(ze(327));Jo();var r=Bl(e,0);if(!(r&1))return ur(e,Wt()),null;var n=Yl(e,r);if(e.tag!==0&&n===2){var o=Ad(e);o!==0&&(r=o,n=ac(e,o))}if(n===1)throw n=ms,ho(e,0),Wn(e,r),ur(e,Wt()),n;if(n===6)throw Error(ze(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,lo(e,ar,dn),ur(e,Wt()),null}function bg(e,r){var n=pt;pt|=1;try{return e(r)}finally{pt=n,pt===0&&(li=Wt()+500,da&&Zn())}}function jo(e){_n!==null&&_n.tag===0&&!(pt&6)&&Jo();var r=pt;pt|=1;var n=Ar.transition,o=jt;try{if(Ar.transition=null,jt=1,e)return e()}finally{jt=o,Ar.transition=n,pt=r,!(pt&6)&&Zn()}}function hg(){yr=Yo.current,Ct(Yo)}function ho(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Dx(n)),Mt!==null)for(n=Mt.return;n!==null;){var o=n;switch(Qc(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Al();break;case 3:ii(),Ct(cr),Ct(er),og();break;case 5:ng(o);break;case 4:ii();break;case 13:Ct(Et);break;case 19:Ct(Et);break;case 10:Jc(o.type._context);break;case 22:case 23:hg()}n=n.return}if(Ut=e,Mt=e=Vn(e.current,null),Kt=yr=r,Pt=0,ms=null,ug=pa=vo=0,ar=Ui=null,uo!==null){for(r=0;r<uo.length;r++)if(n=uo[r],o=n.interleaved,o!==null){n.interleaved=null;var i=o.next,s=n.pending;if(s!==null){var l=s.next;s.next=i,o.next=l}n.pending=o}uo=null}return e}function Vh(e,r){do{var n=Mt;try{if(Zc(),fl.current=Hl,Ol){for(var o=Dt.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}Ol=!1}if(yo=0,Gt=$t=Dt=null,Hi=!1,ps=0,gg.current=null,n===null||n.return===null){Pt=1,ms=r,Mt=null;break}e:{var s=e,l=n.return,a=n,d=r;if(r=Kt,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var c=d,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var I=Cu(l);if(I!==null){I.flags&=-257,zu(I,l,a,s,r),I.mode&1&&Su(s,c,r),r=I,d=c;var B=r.updateQueue;if(B===null){var z=new Set;z.add(d),r.updateQueue=z}else B.add(d);break e}else{if(!(r&1)){Su(s,c,r),mg();break e}d=Error(ze(426))}}else if(Tt&&a.mode&1){var w=Cu(l);if(w!==null){!(w.flags&65536)&&(w.flags|=256),zu(w,l,a,s,r),qc(si(d,a));break e}}s=d=si(d,a),Pt!==4&&(Pt=2),Ui===null?Ui=[s]:Ui.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,r&=-r,s.lanes|=r;var p=Bh(s,d,r);xu(s,p);break e;case 1:a=d;var b=s.type,u=s.stateNode;if(!(s.flags&128)&&(typeof b.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Gn===null||!Gn.has(u)))){s.flags|=65536,r&=-r,s.lanes|=r;var j=Rh(s,a,r);xu(s,j);break e}}s=s.return}while(s!==null)}Qh(n)}catch(x){r=x,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(!0)}function Yh(){var e=Gl.current;return Gl.current=Hl,e===null?Hl:e}function mg(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Ut===null||!(vo&268435455)&&!(pa&268435455)||Wn(Ut,Kt)}function Yl(e,r){var n=pt;pt|=2;var o=Yh();(Ut!==e||Kt!==r)&&(dn=null,ho(e,r));do try{ny();break}catch(i){Vh(e,i)}while(!0);if(Zc(),pt=n,Gl.current=o,Mt!==null)throw Error(ze(261));return Ut=null,Kt=0,Pt}function ny(){for(;Mt!==null;)Kh(Mt)}function oy(){for(;Mt!==null&&!Bf();)Kh(Mt)}function Kh(e){var r=Xh(e.alternate,e,yr);e.memoizedProps=e.pendingProps,r===null?Qh(e):Mt=r,gg.current=null}function Qh(e){var r=e;do{var n=r.alternate;if(e=r.return,r.flags&32768){if(n=Xx(n,r),n!==null){n.flags&=32767,Mt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pt=6,Mt=null;return}}else if(n=qx(n,r,yr),n!==null){Mt=n;return}if(r=r.sibling,r!==null){Mt=r;return}Mt=r=e}while(r!==null);Pt===0&&(Pt=5)}function lo(e,r,n){var o=jt,i=Ar.transition;try{Ar.transition=null,jt=1,iy(e,r,n,o)}finally{Ar.transition=i,jt=o}return null}function iy(e,r,n,o){do Jo();while(_n!==null);if(pt&6)throw Error(ze(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(ze(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if($f(e,s),e===Ut&&(Mt=Ut=null,Kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Os||(Os=!0,Zh(Il,function(){return Jo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ar.transition,Ar.transition=null;var l=jt;jt=1;var a=pt;pt|=4,gg.current=null,Jx(e,n),Hh(n,e),Cx(Pd),Rl=!!$d,Pd=$d=null,e.current=n,ey(n),Rf(),pt=a,jt=l,Ar.transition=s}else e.current=n;if(Os&&(Os=!1,_n=e,Vl=i),s=e.pendingLanes,s===0&&(Gn=null),Ff(n.stateNode),ur(e,Wt()),r!==null)for(o=e.onRecoverableError,n=0;n<r.length;n++)i=r[n],o(i.value,{componentStack:i.stack,digest:i.digest});if(Ul)throw Ul=!1,e=sc,sc=null,e;return Vl&1&&e.tag!==0&&Jo(),s=e.pendingLanes,s&1?e===lc?Vi++:(Vi=0,lc=e):Vi=0,Zn(),null}function Jo(){if(_n!==null){var e=Bb(Vl),r=Ar.transition,n=jt;try{if(Ar.transition=null,jt=16>e?16:e,_n===null)var o=!1;else{if(e=_n,_n=null,Vl=0,pt&6)throw Error(ze(331));var i=pt;for(pt|=4,_e=e.current;_e!==null;){var s=_e,l=s.child;if(_e.flags&16){var a=s.deletions;if(a!==null){for(var d=0;d<a.length;d++){var c=a[d];for(_e=c;_e!==null;){var h=_e;switch(h.tag){case 0:case 11:case 15:Gi(8,h,s)}var f=h.child;if(f!==null)f.return=h,_e=f;else for(;_e!==null;){h=_e;var m=h.sibling,I=h.return;if(Ph(h),h===c){_e=null;break}if(m!==null){m.return=I,_e=m;break}_e=I}}}var B=s.alternate;if(B!==null){var z=B.child;if(z!==null){B.child=null;do{var w=z.sibling;z.sibling=null,z=w}while(z!==null)}}_e=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,_e=l;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Gi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,_e=p;break e}_e=s.return}}var b=e.current;for(_e=b;_e!==null;){l=_e;var u=l.child;if(l.subtreeFlags&2064&&u!==null)u.return=l,_e=u;else e:for(l=b;_e!==null;){if(a=_e,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ua(9,a)}}catch(x){At(a,a.return,x)}if(a===l){_e=null;break e}var j=a.sibling;if(j!==null){j.return=a.return,_e=j;break e}_e=a.return}}if(pt=i,Zn(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(oa,e)}catch{}o=!0}return o}finally{jt=n,Ar.transition=r}}return!1}function $u(e,r,n){r=si(n,r),r=Bh(e,r,1),e=Hn(e,r,1),r=nr(),e!==null&&(ws(e,1,r),ur(e,r))}function At(e,r,n){if(e.tag===3)$u(e,e,n);else for(;r!==null;){if(r.tag===3){$u(r,e,n);break}else if(r.tag===1){var o=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Gn===null||!Gn.has(o))){e=si(n,e),e=Rh(r,e,1),r=Hn(r,e,1),e=nr(),r!==null&&(ws(r,1,e),ur(r,e));break}}r=r.return}}function sy(e,r,n){var o=e.pingCache;o!==null&&o.delete(r),r=nr(),e.pingedLanes|=e.suspendedLanes&n,Ut===e&&(Kt&n)===n&&(Pt===4||Pt===3&&(Kt&130023424)===Kt&&500>Wt()-pg?ho(e,0):ug|=n),ur(e,r)}function qh(e,r){r===0&&(e.mode&1?(r=Ds,Ds<<=1,!(Ds&130023424)&&(Ds=4194304)):r=1);var n=nr();e=yn(e,r),e!==null&&(ws(e,r,n),ur(e,n))}function ly(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),qh(e,n)}function ay(e,r){var n=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(ze(314))}o!==null&&o.delete(r),qh(e,n)}var Xh;Xh=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||cr.current)dr=!0;else{if(!(e.lanes&n)&&!(r.flags&128))return dr=!1,Qx(e,r,n);dr=!!(e.flags&131072)}else dr=!1,Tt&&r.flags&1048576&&th(r,Ll,r.index);switch(r.lanes=0,r.tag){case 2:var o=r.type;yl(e,r),e=r.pendingProps;var i=ri(r,er.current);Zo(r,n),i=sg(null,r,o,e,i,n);var s=lg();return r.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,gr(o)?(s=!0,Wl(r)):s=!1,r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,tg(r),i.updater=ga,r.stateNode=i,i._reactInternals=r,Qd(r,o,e,n),r=Zd(null,r,o,!0,s,n)):(r.tag=0,Tt&&s&&Kc(r),tr(null,r,i,n),r=r.child),r;case 16:o=r.elementType;e:{switch(yl(e,r),e=r.pendingProps,i=o._init,o=i(o._payload),r.type=o,i=r.tag=cy(o),e=Pr(o,e),i){case 0:r=Xd(null,r,o,e,n);break e;case 1:r=Bu(null,r,o,e,n);break e;case 11:r=Tu(null,r,o,e,n);break e;case 14:r=Iu(null,r,o,Pr(o.type,e),n);break e}throw Error(ze(306,o,""))}return r;case 0:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Pr(o,i),Xd(e,r,o,i,n);case 1:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Pr(o,i),Bu(e,r,o,i,n);case 3:e:{if(Ah(r),e===null)throw Error(ze(387));o=r.pendingProps,s=r.memoizedState,i=s.element,lh(e,r),Pl(r,o,null,n);var l=r.memoizedState;if(o=l.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},r.updateQueue.baseState=s,r.memoizedState=s,r.flags&256){i=si(Error(ze(423)),r),r=Ru(e,r,o,n,i);break e}else if(o!==i){i=si(Error(ze(424)),r),r=Ru(e,r,o,n,i);break e}else for(vr=On(r.stateNode.containerInfo.firstChild),jr=r,Tt=!0,Hr=null,n=ih(r,null,o,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ni(),o===i){r=vn(e,r,n);break e}tr(e,r,o,n)}r=r.child}return r;case 5:return ah(r),e===null&&Vd(r),o=r.type,i=r.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,Nd(o,i)?l=null:s!==null&&Nd(o,s)&&(r.flags|=32),Fh(e,r),tr(e,r,l,n),r.child;case 6:return e===null&&Vd(r),null;case 13:return Wh(e,r,n);case 4:return rg(r,r.stateNode.containerInfo),o=r.pendingProps,e===null?r.child=oi(r,null,o,n):tr(e,r,o,n),r.child;case 11:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Pr(o,i),Tu(e,r,o,i,n);case 7:return tr(e,r,r.pendingProps,n),r.child;case 8:return tr(e,r,r.pendingProps.children,n),r.child;case 12:return tr(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(o=r.type._context,i=r.pendingProps,s=r.memoizedProps,l=i.value,wt(_l,o._currentValue),o._currentValue=l,s!==null)if(Vr(s.value,l)){if(s.children===i.children&&!cr.current){r=vn(e,r,n);break e}}else for(s=r.child,s!==null&&(s.return=r);s!==null;){var a=s.dependencies;if(a!==null){l=s.child;for(var d=a.firstContext;d!==null;){if(d.context===o){if(s.tag===1){d=mn(-1,n&-n),d.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?d.next=d:(d.next=h.next,h.next=d),c.pending=d}}s.lanes|=n,d=s.alternate,d!==null&&(d.lanes|=n),Yd(s.return,n,r),a.lanes|=n;break}d=d.next}}else if(s.tag===10)l=s.type===r.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(ze(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Yd(l,n,r),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===r){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}tr(e,r,i.children,n),r=r.child}return r;case 9:return i=r.type,o=r.pendingProps.children,Zo(r,n),i=Wr(i),o=o(i),r.flags|=1,tr(e,r,o,n),r.child;case 14:return o=r.type,i=Pr(o,r.pendingProps),i=Pr(o.type,i),Iu(e,r,o,i,n);case 15:return Eh(e,r,r.type,r.pendingProps,n);case 17:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Pr(o,i),yl(e,r),r.tag=1,gr(o)?(e=!0,Wl(r)):e=!1,Zo(r,n),Ih(r,o,i),Qd(r,o,i,n),Zd(null,r,o,!0,e,n);case 19:return Mh(e,r,n);case 22:return Dh(e,r,n)}throw Error(ze(156,r.tag))};function Zh(e,r){return Cb(e,r)}function dy(e,r,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fr(e,r,n,o){return new dy(e,r,n,o)}function fg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cy(e){if(typeof e=="function")return fg(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Mc)return 11;if(e===Lc)return 14}return 2}function Vn(e,r){var n=e.alternate;return n===null?(n=Fr(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function kl(e,r,n,o,i,s){var l=2;if(o=e,typeof e=="function")fg(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Lo:return mo(n.children,i,s,r);case Wc:l=8,i|=8;break;case yd:return e=Fr(12,n,r,i|2),e.elementType=yd,e.lanes=s,e;case vd:return e=Fr(13,n,r,i),e.elementType=vd,e.lanes=s,e;case jd:return e=Fr(19,n,r,i),e.elementType=jd,e.lanes=s,e;case ab:return ba(n,i,s,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case sb:l=10;break e;case lb:l=9;break e;case Mc:l=11;break e;case Lc:l=14;break e;case Dn:l=16,o=null;break e}throw Error(ze(130,e==null?e:typeof e,""))}return r=Fr(l,n,r,i),r.elementType=e,r.type=o,r.lanes=s,r}function mo(e,r,n,o){return e=Fr(7,e,o,r),e.lanes=n,e}function ba(e,r,n,o){return e=Fr(22,e,o,r),e.elementType=ab,e.lanes=n,e.stateNode={isHidden:!1},e}function Qa(e,r,n){return e=Fr(6,e,null,r),e.lanes=n,e}function qa(e,r,n){return r=Fr(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function gy(e,r,n,o,i){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ra(0),this.expirationTimes=Ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ra(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xg(e,r,n,o,i,s,l,a,d){return e=new gy(e,r,n,a,d),r===1?(r=1,s===!0&&(r|=8)):r=0,s=Fr(3,null,null,r),e.current=s,s.stateNode=e,s.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tg(s),e}function uy(e,r,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mo,key:o==null?null:""+o,children:e,containerInfo:r,implementation:n}}function Jh(e){if(!e)return Qn;e=e._reactInternals;e:{if(wo(e)!==e||e.tag!==1)throw Error(ze(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(gr(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(ze(171))}if(e.tag===1){var n=e.type;if(gr(n))return Jb(e,n,r)}return r}function em(e,r,n,o,i,s,l,a,d){return e=xg(n,o,!0,e,i,s,l,a,d),e.context=Jh(null),n=e.current,o=nr(),i=Un(n),s=mn(o,i),s.callback=r??null,Hn(n,s,i),e.current.lanes=i,ws(e,i,o),ur(e,o),e}function ha(e,r,n,o){var i=r.current,s=nr(),l=Un(i);return n=Jh(n),r.context===null?r.context=n:r.pendingContext=n,r=mn(s,l),r.payload={element:e},o=o===void 0?null:o,o!==null&&(r.callback=o),e=Hn(i,r,l),e!==null&&(Ur(e,i,l,s),ml(e,i,l)),l}function Kl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Pu(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function yg(e,r){Pu(e,r),(e=e.alternate)&&Pu(e,r)}function py(){return null}var tm=typeof reportError=="function"?reportError:function(e){console.error(e)};function vg(e){this._internalRoot=e}ma.prototype.render=vg.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(ze(409));ha(e,r,null,null)};ma.prototype.unmount=vg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;jo(function(){ha(null,e,null,null)}),r[xn]=null}};function ma(e){this._internalRoot=e}ma.prototype.unstable_scheduleHydration=function(e){if(e){var r=Db();e={blockedOn:null,target:e,priority:r};for(var n=0;n<An.length&&r!==0&&r<An[n].priority;n++);An.splice(n,0,e),n===0&&Ab(e)}};function jg(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Nu(){}function by(e,r,n,o,i){if(i){if(typeof o=="function"){var s=o;o=function(){var c=Kl(l);s.call(c)}}var l=em(r,o,e,0,null,!1,!1,"",Nu);return e._reactRootContainer=l,e[xn]=l.current,as(e.nodeType===8?e.parentNode:e),jo(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var a=o;o=function(){var c=Kl(d);a.call(c)}}var d=xg(e,0,!1,null,null,!1,!1,"",Nu);return e._reactRootContainer=d,e[xn]=d.current,as(e.nodeType===8?e.parentNode:e),jo(function(){ha(r,d,n,o)}),d}function xa(e,r,n,o,i){var s=n._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var a=i;i=function(){var d=Kl(l);a.call(d)}}ha(r,l,e,i)}else l=by(n,r,e,i,o);return Kl(l)}Rb=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=Ei(r.pendingLanes);n!==0&&(Pc(r,n|1),ur(r,Wt()),!(pt&6)&&(li=Wt()+500,Zn()))}break;case 13:jo(function(){var o=yn(e,1);if(o!==null){var i=nr();Ur(o,e,1,i)}}),yg(e,1)}};Nc=function(e){if(e.tag===13){var r=yn(e,134217728);if(r!==null){var n=nr();Ur(r,e,134217728,n)}yg(e,134217728)}};Eb=function(e){if(e.tag===13){var r=Un(e),n=yn(e,r);if(n!==null){var o=nr();Ur(n,e,r,o)}yg(e,r)}};Db=function(){return jt};Fb=function(e,r){var n=jt;try{return jt=e,r()}finally{jt=n}};Ed=function(e,r,n){switch(r){case"input":if(Sd(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var o=n[r];if(o!==e&&o.form===e.form){var i=aa(o);if(!i)throw Error(ze(90));cb(o),Sd(o,i)}}}break;case"textarea":ub(e,n);break;case"select":r=n.value,r!=null&&Ko(e,!!n.multiple,r,!1)}};yb=bg;vb=jo;var hy={usingClientEntryPoint:!1,Events:[Cs,No,aa,fb,xb,bg]},Ci={findFiberByHostInstance:go,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},my={bundleType:Ci.bundleType,version:Ci.version,rendererPackageName:Ci.rendererPackageName,rendererConfig:Ci.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wb(e),e===null?null:e.stateNode},findFiberByHostInstance:Ci.findFiberByHostInstance||py,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hs.isDisabled&&Hs.supportsFiber)try{oa=Hs.inject(my),en=Hs}catch{}}wr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hy;wr.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jg(r))throw Error(ze(200));return uy(e,r,null,n)};wr.createRoot=function(e,r){if(!jg(e))throw Error(ze(299));var n=!1,o="",i=tm;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),r=xg(e,1,!1,null,null,n,!1,o,i),e[xn]=r.current,as(e.nodeType===8?e.parentNode:e),new vg(r)};wr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(ze(188)):(e=Object.keys(e).join(","),Error(ze(268,e)));return e=wb(r),e=e===null?null:e.stateNode,e};wr.flushSync=function(e){return jo(e)};wr.hydrate=function(e,r,n){if(!fa(r))throw Error(ze(200));return xa(null,e,r,!0,n)};wr.hydrateRoot=function(e,r,n){if(!jg(e))throw Error(ze(405));var o=n!=null&&n.hydratedSources||null,i=!1,s="",l=tm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),r=em(r,null,e,1,n??null,i,!1,s,l),e[xn]=r.current,as(e),o)for(e=0;e<o.length;e++)n=o[e],i=n._getVersion,i=i(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,i]:r.mutableSourceEagerHydrationData.push(n,i);return new ma(r)};wr.render=function(e,r,n){if(!fa(r))throw Error(ze(200));return xa(null,e,r,!1,n)};wr.unmountComponentAtNode=function(e){if(!fa(e))throw Error(ze(40));return e._reactRootContainer?(jo(function(){xa(null,null,e,!1,function(){e._reactRootContainer=null,e[xn]=null})}),!0):!1};wr.unstable_batchedUpdates=bg;wr.unstable_renderSubtreeIntoContainer=function(e,r,n,o){if(!fa(n))throw Error(ze(200));if(e==null||e._reactInternals===void 0)throw Error(ze(38));return xa(e,r,n,!1,o)};wr.version="18.3.1-next-f1338f8080-20240426";function rm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rm)}catch(e){console.error(e)}}rm(),rb.exports=wr;var fy=rb.exports,nm,Ou=fy;nm=Ou.createRoot,Ou.hydrateRoot;/**
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
 */const vy=g.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:i="",children:s,iconNode:l,...a},d)=>g.createElement("svg",{ref:d,...yy,width:r,height:r,stroke:e,strokeWidth:o?Number(n)*24/Number(r):n,className:om("lucide",i),...a},[...l.map(([c,h])=>g.createElement(c,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=(e,r)=>{const n=g.forwardRef(({className:o,...i},s)=>g.createElement(vy,{ref:s,iconNode:r,className:om(`lucide-${xy(e)}`,o),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=pe("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=pe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=pe("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=pe("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=pe("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=pe("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=pe("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=pe("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=pe("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=pe("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=pe("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=pe("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=pe("Bus",[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=pe("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=pe("CalendarClock",[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=pe("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=pe("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=pe("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=pe("Carrot",[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",key:"rfqxbe"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",key:"6b25w4"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",key:"fn65lo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=pe("ChartCandlestick",[["path",{d:"M9 5v4",key:"14uxtq"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1",key:"f4fvz0"}],["path",{d:"M9 15v2",key:"r5rk32"}],["path",{d:"M17 3v2",key:"1l2re6"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1",key:"z38je5"}],["path",{d:"M17 13v3",key:"5l0wba"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=pe("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=pe("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=pe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=pe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=pe("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=pe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=pe("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=pe("Clapperboard",[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=pe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=pe("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=pe("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=pe("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=pe("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=pe("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=pe("Dumbbell",[["path",{d:"M14.4 14.4 9.6 9.6",key:"ic80wn"}],["path",{d:"M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z",key:"nnl7wr"}],["path",{d:"m21.5 21.5-1.4-1.4",key:"1f1ice"}],["path",{d:"M3.9 3.9 2.5 2.5",key:"1evmna"}],["path",{d:"M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z",key:"yhosts"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=pe("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=pe("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=pe("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=pe("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=pe("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=pe("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=pe("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"7cu91f"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=pe("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=pe("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=pe("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=pe("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=pe("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=pe("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=pe("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=pe("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=pe("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=pe("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=pe("Images",[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=pe("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=pe("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=pe("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=pe("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=pe("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=pe("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=pe("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=pe("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=pe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=pe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=pe("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=pe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=pe("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=pe("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=pe("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=pe("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=pe("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=pe("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=pe("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=pe("PartyPopper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"hbicv8"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",key:"1i94pl"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",key:"1cofks"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=pe("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=pe("PawPrint",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=pe("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=pe("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=pe("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=pe("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=pe("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=pe("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=pe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=pe("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=pe("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=pe("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=pe("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=pe("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=pe("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=pe("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=pe("ScrollText",[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=pe("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=pe("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=pe("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=pe("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=pe("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=pe("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=pe("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=pe("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=pe("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=pe("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=pe("Swords",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=pe("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=pe("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=pe("TramFront",[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=pe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=pe("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=pe("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=pe("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=pe("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=pe("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=pe("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=pe("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=pe("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=pe("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=pe("WashingMachine",[["path",{d:"M3 6h3",key:"155dbl"}],["path",{d:"M17 6h.01",key:"e2y6kg"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2",key:"od3kk9"}],["circle",{cx:"12",cy:"13",r:"5",key:"nlbqau"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5",key:"17lach"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=pe("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=pe("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=pe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=pe("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=pe("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Rg="anvil_token",Sm=()=>localStorage.getItem(Rg),T0=e=>localStorage.setItem(Rg,e),hc=()=>localStorage.removeItem(Rg),J=async(e,r,n)=>{const o={};n!==void 0&&(o["Content-Type"]="application/json");const i=Sm();i&&(o.Authorization=`Bearer ${i}`);const s=await fetch(`/api${r}`,{method:e,headers:o,body:n!==void 0?JSON.stringify(n):void 0});if(s.status===401)throw hc(),window.dispatchEvent(new Event("anvil-unauthorized")),new Error("Not authenticated");if(s.status===204)return null;if(!s.ok){const l=await s.text();let a=l;try{a=JSON.parse(l).detail||l}catch{}throw new Error(a||`HTTP ${s.status}`)}return s.json()},E={me:()=>J("GET","/auth/me"),signInWithGoogle:()=>{window.location.href="/api/auth/google"},getPillars:()=>J("GET","/pillars"),getFocus:()=>J("GET","/focus"),createFocus:e=>J("POST","/focus",e),deleteFocus:e=>J("DELETE",`/focus/${e}`),addScreenTime:(e,r)=>J("POST","/screentime",{screen:e,seconds:r}),getScreenTime:()=>J("GET","/screentime"),getPayouts:()=>J("GET","/rewards/payouts"),createPayout:e=>J("POST","/rewards/payouts",e),deletePayout:e=>J("DELETE",`/rewards/payouts/${e}`),getRewardRates:()=>J("GET","/rewards/rates"),setRewardRate:e=>J("POST","/rewards/rates",e),getMedia:()=>J("GET","/media"),createMedia:e=>J("POST","/media",e),updateMedia:(e,r)=>J("PUT",`/media/${e}`,r),deleteMedia:e=>J("DELETE",`/media/${e}`),restoreMedia:e=>J("POST",`/media/${e}/restore`),getDecks:()=>J("GET","/spiritual/decks"),createDeck:e=>J("POST","/spiritual/decks",e),deleteDeck:e=>J("DELETE",`/spiritual/decks/${e}`),getGoldenGoals:()=>J("GET","/golden/goals"),getGoldenGoal:e=>J("GET",`/golden/goals/${e}`),createGolden:e=>J("POST","/golden/goals",e),updateGolden:(e,r)=>J("PUT",`/golden/goals/${e}`,r),achieveGolden:e=>J("POST",`/golden/goals/${e}/achieve`),unachieveGolden:e=>J("POST",`/golden/goals/${e}/unachieve`),upsertGoldenEntry:(e,r)=>J("PUT",`/golden/goals/${e}/entry`,r),deleteGolden:e=>J("DELETE",`/golden/goals/${e}`),restoreGolden:e=>J("POST",`/golden/goals/${e}/restore`),logTesla369:e=>J("POST",`/golden/goals/${e}/369/log`),undoTesla369:e=>J("DELETE",`/golden/goals/${e}/369/log`),getKickstart:()=>J("GET","/kickstart/videos"),createKickstart:e=>J("POST","/kickstart/videos",e),updateKickstart:(e,r)=>J("PUT",`/kickstart/videos/${e}`,r),deleteKickstart:e=>J("DELETE",`/kickstart/videos/${e}`),restoreKickstart:e=>J("POST",`/kickstart/videos/${e}/restore`),getTxns:()=>J("GET","/finance/txns"),createTxn:e=>J("POST","/finance/txns",e),updateTxn:(e,r)=>J("PUT",`/finance/txns/${e}`,r),deleteTxn:e=>J("DELETE",`/finance/txns/${e}`),restoreTxn:e=>J("POST",`/finance/txns/${e}/restore`),getInvestments:()=>J("GET","/finance/investments"),createInvestment:e=>J("POST","/finance/investments",e),updateInvestment:(e,r)=>J("PUT",`/finance/investments/${e}`,r),deleteInvestment:e=>J("DELETE",`/finance/investments/${e}`),restoreInvestment:e=>J("POST",`/finance/investments/${e}/restore`),getFixedItems:()=>J("GET","/finance/fixed-items"),createFixedItem:e=>J("POST","/finance/fixed-items",e),updateFixedItem:(e,r)=>J("PUT",`/finance/fixed-items/${e}`,r),deleteFixedItem:e=>J("DELETE",`/finance/fixed-items/${e}`),getExpenses:()=>J("GET","/expenses"),createExpenseCategory:e=>J("POST","/expenses/categories",e),updateExpenseCategory:(e,r)=>J("PUT",`/expenses/categories/${e}`,r),arrangeExpenseCategories:e=>J("PUT","/expenses/categories/arrange",{order:e}),deleteExpenseCategory:e=>J("DELETE",`/expenses/categories/${e}`),createExpenseLog:e=>J("POST","/expenses/logs",e),updateExpenseLog:(e,r)=>J("PUT",`/expenses/logs/${e}`,r),deleteExpenseLog:e=>J("DELETE",`/expenses/logs/${e}`),restoreExpenseLog:e=>J("POST",`/expenses/logs/${e}/restore`),getTrades:()=>J("GET","/trades"),createTradeEntry:e=>J("POST","/trades/entries",e),updateTradeEntry:(e,r)=>J("PUT",`/trades/entries/${e}`,r),bookTradeEntry:(e,r,n)=>J("POST",`/trades/entries/${e}/book`,{outcome:r,date:n}),reopenTradeEntry:e=>J("POST",`/trades/entries/${e}/reopen`),deleteTradeEntry:e=>J("DELETE",`/trades/entries/${e}`),setTradeLearning:(e,r)=>J("PUT","/trades/learning",{date:e,learning:r}),getSetting:e=>J("GET",`/settings/${e}`),setSetting:(e,r)=>J("PUT",`/settings/${e}`,{value:r}),getTasks:()=>J("GET","/tasks"),createTask:e=>J("POST","/tasks",e),updateTask:(e,r)=>J("PUT",`/tasks/${e}`,r),deleteTask:e=>J("DELETE",`/tasks/${e}`),restoreTask:e=>J("POST",`/tasks/${e}/restore`),scheduleTask:e=>J("PUT",`/tasks/${e}/schedule`),getGoals:e=>J("GET",`/goals${e?`?pillar=${encodeURIComponent(e)}`:""}`),createGoal:e=>J("POST","/goals",e),updateGoal:(e,r)=>J("PUT",`/goals/${e}`,r),deleteGoal:e=>J("DELETE",`/goals/${e}`),restoreGoal:e=>J("POST",`/goals/${e}/restore`),getHabits:()=>J("GET","/habits"),createHabit:e=>J("POST","/habits",e),updateHabit:(e,r)=>J("PUT",`/habits/${e}`,r),deleteHabit:e=>J("DELETE",`/habits/${e}`),restoreHabit:e=>J("POST",`/habits/${e}/restore`),toggleHabitLog:(e,r)=>J("POST",`/habits/${e}/log/${r}`),setHabitLogNote:(e,r,n)=>J("PUT",`/habits/${e}/log/${r}/note`,{note:n}),setHabitLogCount:(e,r,n,o)=>J("PUT",`/habits/${e}/log/${r}/count`,{count:n,note:o}),incrementHabitLog:(e,r)=>J("POST",`/habits/${e}/log/${r}/increment`),clearHabitLog:(e,r)=>J("DELETE",`/habits/${e}/log/${r}`),getHabitsYearly:e=>J("GET",`/habits/yearly/${e}`),getJournalEntry:e=>J("GET",`/journal/${e}`),getJournalHistory:(e,r)=>J("GET",`/journal/history/${e}/${r}`),updateJournalMood:(e,r)=>J("PUT",`/journal/${e}`,{mood:r}),addJournalBullet:(e,r,n)=>J("POST",`/journal/${e}/bullets`,{section:r,text:n}),deleteJournalBullet:e=>J("DELETE",`/journal/bullets/${e}`),getSkills:()=>J("GET","/skills"),createSkill:e=>J("POST","/skills",e),updateSkill:(e,r)=>J("PUT",`/skills/${e}`,r),deleteSkill:e=>J("DELETE",`/skills/${e}`),restoreSkill:e=>J("POST",`/skills/${e}/restore`),addSkillNote:(e,r,n,o=null)=>J("POST",`/skills/${e}/notes`,{stage:r,text:n,grp:o}),setSkillGroups:(e,r)=>J("PUT",`/skills/${e}/groups`,{groups:r}),deleteSkillNote:e=>J("DELETE",`/skill-notes/${e}`),updateSkillNote:(e,r)=>J("PUT",`/skill-notes/${e}`,{text:r}),toggleSkillNote:e=>J("PUT",`/skill-notes/${e}/toggle`),completeSkillStage:(e,r)=>J("POST",`/skills/${e}/complete-stage`,{stage:r}),getScriptures:()=>J("GET","/scriptures"),createScripture:e=>J("POST","/scriptures",e),deleteScripture:e=>J("DELETE",`/scriptures/${e}`),restoreScripture:e=>J("POST",`/scriptures/${e}/restore`),addChapter:(e,r)=>J("POST",`/scriptures/${e}/chapters`,r),updateChapter:(e,r)=>J("PUT",`/chapters/${e}`,r),deleteChapter:e=>J("DELETE",`/chapters/${e}`),restoreChapter:e=>J("POST",`/chapters/${e}/restore`),addInsight:(e,r)=>J("POST",`/chapters/${e}/insights`,{text:r}),deleteInsight:e=>J("DELETE",`/insights/${e}`),getTopics:()=>J("GET","/revision/topics"),createTopic:e=>J("POST","/revision/topics",e),updateTopic:(e,r)=>J("PUT",`/revision/topics/${e}`,r),deleteTopic:e=>J("DELETE",`/revision/topics/${e}`),restoreTopic:e=>J("POST",`/revision/topics/${e}/restore`),getDueToday:()=>J("GET","/revision/due-today"),getCalendar:(e,r)=>J("GET",`/revision/calendar/${e}/${r}`),toggleReviewDone:e=>J("PUT",`/revision/reviews/${e}/done`),getAffirmations:()=>J("GET","/affirmations"),createAffirmation:e=>J("POST","/affirmations",e),updateAffirmation:(e,r)=>J("PUT",`/affirmations/${e}`,r),deleteAffirmation:e=>J("DELETE",`/affirmations/${e}`),restoreAffirmation:e=>J("POST",`/affirmations/${e}/restore`),getBucket:()=>J("GET","/bucket"),createBucketWish:e=>J("POST","/bucket",e),updateBucketWish:(e,r)=>J("PUT",`/bucket/${e}`,r),fulfillBucketWish:e=>J("POST",`/bucket/${e}/fulfill`),arrangeBucket:e=>J("PUT","/bucket/arrange",{order:e}),deleteBucketWish:e=>J("DELETE",`/bucket/${e}`),restoreBucketWish:e=>J("POST",`/bucket/${e}/restore`),getChallenges:()=>J("GET","/challenges"),createChallenge:e=>J("POST","/challenges",e),updateChallenge:(e,r)=>J("PUT",`/challenges/${e}`,r),deleteChallenge:e=>J("DELETE",`/challenges/${e}`),restoreChallenge:e=>J("POST",`/challenges/${e}/restore`),getAchievements:()=>J("GET","/achievements"),createAchievement:e=>J("POST","/achievements",e),updateAchievement:(e,r)=>J("PUT",`/achievements/${e}`,r),deleteAchievement:e=>J("DELETE",`/achievements/${e}`),restoreAchievement:e=>J("POST",`/achievements/${e}/restore`),getDelight:()=>J("GET","/delight"),createCollection:e=>J("POST","/delight/collections",e),updateCollection:(e,r)=>J("PUT",`/delight/collections/${e}`,r),deleteCollection:e=>J("DELETE",`/delight/collections/${e}`),restoreCollection:e=>J("POST",`/delight/collections/${e}/restore`),createDelightItem:(e,r)=>J("POST",`/delight/collections/${e}/items`,r),updateDelightItem:(e,r)=>J("PUT",`/delight/items/${e}`,r),deleteDelightItem:e=>J("DELETE",`/delight/items/${e}`),restoreDelightItem:e=>J("POST",`/delight/items/${e}/restore`),arrangeDelight:(e,r)=>J("PUT",`/delight/collections/${e}/arrange`,{order:r})},mc=[{code:"INR",symbol:"₹",locale:"en-IN",label:"Indian Rupee"},{code:"USD",symbol:"$",locale:"en-US",label:"US Dollar"},{code:"EUR",symbol:"€",locale:"de-DE",label:"Euro"},{code:"GBP",symbol:"£",locale:"en-GB",label:"British Pound"},{code:"JPY",symbol:"¥",locale:"ja-JP",label:"Japanese Yen"},{code:"AED",symbol:"د.إ",locale:"en-AE",label:"UAE Dirham"},{code:"AUD",symbol:"A$",locale:"en-AU",label:"Australian Dollar"},{code:"CAD",symbol:"C$",locale:"en-CA",label:"Canadian Dollar"},{code:"SGD",symbol:"S$",locale:"en-SG",label:"Singapore Dollar"}],Gu="INR",Cm="anvil_currency",wa=e=>mc.find(r=>r.code===e)||mc[0];function di(){try{return localStorage.getItem(Cm)||Gu}catch{return Gu}}function Uu(e){try{localStorage.setItem(Cm,e)}catch{}return window.dispatchEvent(new CustomEvent("anvil-currency",{detail:e})),e}function js(e,r){const n=wa(r||di()),o=Math.round(Number(e)||0);return n.symbol+o.toLocaleString(n.locale)}function Or(e,r){const n=wa(r||di()),o=Number(e)||0;return n.symbol+o.toLocaleString(n.locale,{minimumFractionDigits:2,maximumFractionDigits:2})}function Vu(e,r){const n=wa(r||di()),o=Math.round(Number(e)||0),i=Math.abs(o);return n.code==="INR"?i>=1e7?n.symbol+(o/1e7).toFixed(i>=1e8?0:1)+"Cr":i>=1e5?n.symbol+(o/1e5).toFixed(i>=1e6?0:1)+"L":i>=1e3?n.symbol+(o/1e3).toFixed(i>=1e4?0:1)+"K":n.symbol+o:i>=1e9?n.symbol+(o/1e9).toFixed(1)+"B":i>=1e6?n.symbol+(o/1e6).toFixed(1)+"M":i>=1e3?n.symbol+(o/1e3).toFixed(1)+"K":n.symbol+o}function Jn(){const[e,r]=g.useState(di());return g.useEffect(()=>{const n=o=>r(o.detail||di());return window.addEventListener("anvil-currency",n),()=>window.removeEventListener("anvil-currency",n)},[]),wa(e)}const Yt={financial:{label:"Financial",leaf:"#C9A227",shape:"round"},academic:{label:"Academic",leaf:"#3A7CA5",shape:"pine"},relationship:{label:"Relationship",leaf:"#C2536B",shape:"round"},spiritual:{label:"Spiritual",leaf:"#8268B0",shape:"tall"},health:{label:"Health",leaf:"#4C9A6B",shape:"round"}},rn="health";function Eg({species:e=rn,progress:r=1,withered:n=!1,size:o=200}){const i=Math.max(0,Math.min(1,r)),s=Yt[e]||Yt[rn],l=n?"#8A7B63":"#7A5A3C",a=n?"#A99C84":s.leaf,d=n?"#8F8268":a,c=14+i*46,h=112-c,f=i>.14,m=f?8+i*30:0;return t.jsxs("svg",{viewBox:"0 0 120 120",width:o,height:o,style:{display:"block"},children:[t.jsx("ellipse",{cx:"60",cy:"114",rx:20+i*14,ry:"5",fill:"rgba(38,36,31,0.08)"}),!f&&t.jsxs("g",{transform:`translate(60 ${112-i*40})`,children:[t.jsx("path",{d:"M0 8 C0 8 0 -2 0 -6",stroke:"#4C9A6B",strokeWidth:"2.5",fill:"none"}),t.jsx("ellipse",{cx:"-5",cy:"-4",rx:"6",ry:"3.5",fill:"#4C9A6B",transform:"rotate(-30 -5 -4)"}),t.jsx("ellipse",{cx:"5",cy:"-4",rx:"6",ry:"3.5",fill:"#5BB07E",transform:"rotate(30 5 -4)"})]}),f&&t.jsxs(t.Fragment,{children:[t.jsx("rect",{x:60-(2+i*2.5),y:h,width:(2+i*2.5)*2,height:c,rx:"2",fill:l}),s.shape==="pine"?t.jsxs(t.Fragment,{children:[t.jsx("polygon",{points:`60,${h-m*2.2} ${60-m},${h+4} ${60+m},${h+4}`,fill:a}),t.jsx("polygon",{points:`60,${h-m*3} ${60-m*.8},${h-m*.7} ${60+m*.8},${h-m*.7}`,fill:d})]}):s.shape==="tall"?t.jsxs(t.Fragment,{children:[t.jsx("ellipse",{cx:"60",cy:h-m*.3,rx:m*.78,ry:m*1.55,fill:a}),t.jsx("ellipse",{cx:"60",cy:h-m*.9,rx:m*.5,ry:m*1,fill:d,opacity:"0.9"})]}):t.jsxs(t.Fragment,{children:[t.jsx("circle",{cx:"60",cy:h,r:m,fill:a}),t.jsx("circle",{cx:60-m*.7,cy:h+m*.3,r:m*.78,fill:a}),t.jsx("circle",{cx:60+m*.7,cy:h+m*.3,r:m*.78,fill:d}),t.jsx("circle",{cx:"60",cy:h-m*.5,r:m*.8,fill:d,opacity:"0.92"})]})]})]})}function I0({species:e}){return t.jsx(Eg,{species:e,progress:1,size:56})}const Gs="#C9A227",Yu="#3A7CA5",Ku="#C2536B",Qu=new Set(["worth","achievements"]),B0=()=>{const e=new Date,r=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${r(e.getMonth()+1)}-${r(e.getDate())}`},Zt=B0(),R0={kickstart:"Kickstart",golden:"Golden Book",habits:"Habits",quadrant:"Quadrant",goals:"Goals",grove:"Grove",worth:"Rewards",vault:"Wallet",expenses:"Expenses",journal:"Journal",revision:"Revision",affirmations:"Affirmations",skills:"Skills",spiritual:"Spiritual",mindscape:"Mindscape",achievements:"Achievements",delight:"Delights"},fc=e=>{const r=Math.round(e||0),n=Math.floor(r/60),o=r%60;return n?`${n}h ${o}m`:`${o}m`},E0=e=>fc((e||0)/60),qu=[{id:"Q1",label:"Do Now"},{id:"Q2",label:"Schedule"},{id:"Q3",label:"Delegate"},{id:"Q4",label:"Drop"}],Xu=["Financial","Academic","Relationship","Health","Spiritual"];function D0({onNavigate:e}){var hr,Je;const r=Jn(),n=G=>Or(G,r.code),[o,i]=g.useState(!1),[s,l]=g.useState([]),[a,d]=g.useState([]),[c,h]=g.useState({sessions:[],stats:{}}),[f,m]=g.useState([]),[I,B]=g.useState([]),[z,w]=g.useState([]),[p,b]=g.useState([]),[u,j]=g.useState({}),[x,T]=g.useState({}),[R,k]=g.useState([]),[y,K]=g.useState([]),[q,oe]=g.useState([]),[L,he]=g.useState([]),[Se,ue]=g.useState([]),ke=g.useCallback(()=>{Promise.all([E.getHabits().catch(()=>[]),E.getTasks().catch(()=>[]),E.getFocus().catch(()=>({sessions:[],stats:{}})),E.getScreenTime().catch(()=>[]),E.getRewardRates().catch(()=>[]),E.getPayouts().catch(()=>[]),E.getAchievements().catch(()=>[]),E.getSetting("grove_rates").catch(()=>null),E.getSetting("reward_rates").catch(()=>null),E.getExpenses().catch(()=>({categories:[],logs:[]})),E.getInvestments().catch(()=>[]),E.getDueToday().catch(()=>[]),E.getSkills().catch(()=>[])]).then(([G,ve,Lt,Nt,sr,Cr,Cn,zr,on,lr,eo,zn,bi])=>{l(G||[]),d(ve||[]),h(Lt||{sessions:[],stats:{}}),m(Array.isArray(Nt)?Nt:[]),B(sr||[]),w(Cr||[]),b(Array.isArray(Cn)?Cn:[]),j((zr==null?void 0:zr.value)||{}),T((on==null?void 0:on.value)||{}),k((lr==null?void 0:lr.categories)||[]),K((lr==null?void 0:lr.logs)||[]),oe(eo||[]),he(zn||[]),ue(bi||[]),i(!0)}).catch(()=>i(!0))},[]);g.useEffect(()=>{ke()},[ke]);const se=s.filter(G=>(G.logs||[]).includes(Zt)).length;a.filter(G=>(G.start_datetime||"").slice(0,10)===Zt);const U=g.useMemo(()=>{const G={Q1:0,Q2:0,Q3:0,Q4:0};return a.forEach(ve=>{G[ve.quadrant]!==void 0&&G[ve.quadrant]++}),G},[a]),de=((hr=c.stats)==null?void 0:hr.today_minutes)||0,X=((Je=c.stats)==null?void 0:Je.today_trees)||0,S={};I.forEach(G=>{var ve;(S[ve=`${G.kind}:${G.rkey}`]||(S[ve]=[])).push({eff:G.eff_date,rate:G.rate})}),Object.values(S).forEach(G=>G.sort((ve,Lt)=>ve.eff.localeCompare(Lt.eff)));const W=(G,ve,Lt)=>{const Nt=S[`${G}:${ve}`];if(Nt){let sr=null;for(const Cr of Nt)if(Cr.eff<=Lt)sr=Cr.rate;else break;if(sr!==null)return sr}return(G==="focus"?u[ve]:x[ve])||0};let O=0,N=0;(c.sessions||[]).filter(G=>G.completed).forEach(G=>{const ve=(G.started_at||G.created_at||"").slice(0,10);if(ve!==Zt)return;const Lt=Yt[G.tree]?G.tree:rn;O+=(G.actual_min||0)/60*W("focus",Lt,ve)}),f.forEach(G=>{!Qu.has(G.screen)&&G.date===Zt&&(N+=G.seconds/60*W("usage",G.screen,G.date))});const ge=p.filter(G=>G.date===Zt&&(G.reward||0)>0).reduce((G,ve)=>G+(ve.reward||0),0),Ae=O+N+ge,Y=Ae>0?O/Ae*100:0,ae=Ae>0?N/Ae*100:0,_=Ae>0?ge/Ae*100:0;let ne=0,xe=0;(c.sessions||[]).filter(G=>G.completed).forEach(G=>{const ve=(G.started_at||G.created_at||"").slice(0,10),Lt=Yt[G.tree]?G.tree:rn;ne+=(G.actual_min||0)/60*W("focus",Lt,ve)}),f.forEach(G=>{Qu.has(G.screen)||(xe+=G.seconds/60*W("usage",G.screen,G.date))});const D=p.reduce((G,ve)=>G+(ve.reward||0),0),v=z.reduce((G,ve)=>G+ve.amount,0),re=Math.max(0,ne+xe+D-v),ce=y.filter(G=>G.date===Zt).reduce((G,ve)=>G+ve.amount,0);g.useMemo(()=>Object.fromEntries(R.map(G=>[G.id,G])),[R]);const We=q.filter(G=>G.date===Zt||G.start_date===Zt).reduce((G,ve)=>G+(ve.invested||0),0),qe=g.useMemo(()=>{const G={};return f.forEach(ve=>{ve.date===Zt&&(G[ve.screen]=(G[ve.screen]||0)+ve.seconds)}),Object.entries(G).filter(([,ve])=>ve>0).sort((ve,Lt)=>Lt[1]-ve[1])},[f]),dt=G=>f.some(ve=>ve.screen===G&&ve.date===Zt&&ve.seconds>0),$e=dt("spiritual"),nt=dt("affirmations"),Ke=g.useMemo(()=>{const G=[];return Se.forEach(ve=>Object.values(ve.notes||{}).forEach(Lt=>Lt.forEach(Nt=>{(Nt.created_at||"").slice(0,10)===Zt&&G.push({...Nt,skill:ve.title})}))),G},[Se]),gt=dt("kickstart"),ie=dt("mindscape"),Me=p.filter(G=>G.date===Zt),[Xe,tt]=g.useState(null),[bt,It]=g.useState(null),[Bt,mt]=g.useState(null),[ft,Rt]=g.useState(null),M=G=>E.toggleHabitLog(G.id,Zt).then(ke).catch(()=>{}),ee=async()=>{const G=Xe.title.trim();G&&(await E.createTask({pillar:Xe.pillar,title:G,quadrant:Xe.quadrant,time_estimate_min:Number(Xe.time_estimate_min)||30,start_datetime:null,goal_id:null}),tt(null),ke())},Le=async()=>{await E.createFocus({label:bt.label.trim()||null,tree:bt.tree,duration_min:Number(bt.duration_min)||25}),It(null),ke()},Pe=async()=>{const G=parseFloat(Bt.amount)||0;G<=0||!Bt.category_id||(await E.createExpenseLog({category_id:Number(Bt.category_id),amount:G,note:Bt.note.trim(),date:Zt}),mt(null),ke())},st=async()=>{const G=ft.name.trim(),ve=parseFloat(ft.invested)||0;!G||ve<=0||(await E.createInvestment({name:G,kind:ft.kind,invested:ve,current_value:ve,note:ft.note.trim(),date:Zt}),Rt(null),ke())},ct=G=>e&&e(G);return o?t.jsxs("div",{style:fe.page,children:[t.jsxs("div",{style:fe.head,children:[t.jsx("div",{style:fe.eyebrow,children:"Anvil · Today"}),t.jsx("h1",{style:fe.h1,children:"Dashboard"}),t.jsx("div",{style:fe.subhead,children:new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})})]}),t.jsx(To,{title:"Used today",onClick:()=>{},children:qe.length===0?t.jsx(Us,{children:"Nothing opened yet today."}):t.jsx("div",{style:fe.chipWrap,children:qe.map(([G,ve])=>t.jsxs("button",{onClick:()=>ct(G),style:fe.usedChip,children:[R0[G]||G," ",t.jsx("span",{style:fe.usedChipTime,children:E0(ve)})]},G))})}),t.jsxs("div",{style:fe.statGrid,children:[t.jsx(Vs,{icon:uc,color:"#4C9A6B",label:"Habits done",value:`${se}/${s.length}`,onClick:()=>ct("habits")}),t.jsx(Vs,{icon:bc,color:Gs,label:X?`Focus · ${X} tree${X===1?"":"s"}`:"Focus time",value:fc(de),onClick:()=>ct("grove")}),t.jsx(Vs,{icon:Zl,color:"#C9772E",label:"Spent today",value:Or(ce,r.code),onClick:()=>ct("expenses")}),t.jsx(Vs,{icon:ka,color:"#8268B0",label:"Invested today",value:Or(We,r.code),onClick:()=>ct("vault")})]}),t.jsx(To,{title:"Rewards",eyebrow:`Pending ${n(re)}`,onClick:()=>ct("worth"),children:Ae>0?t.jsxs("div",{style:fe.pieWrap,children:[t.jsxs("div",{style:fe.pieChart,children:[t.jsx("div",{style:{...fe.pieDisc,background:`conic-gradient(${Gs} 0 ${Y}%, ${Yu} ${Y}% ${Y+ae}%, ${Ku} ${Y+ae}% 100%)`}}),t.jsxs("div",{style:fe.pieHole,children:[t.jsx("span",{style:fe.pieHoleVal,children:n(Ae)}),t.jsx("span",{style:fe.pieHoleLbl,children:"today"})]})]}),t.jsxs("div",{style:fe.pieLegend,children:[t.jsx(Xa,{color:Gs,label:"Focus",pct:Y,val:n(O)}),t.jsx(Xa,{color:Yu,label:"Usage",pct:ae,val:n(N)}),t.jsx(Xa,{color:Ku,label:"Achievement",pct:_,val:n(ge)})]})]}):t.jsx(Us,{children:"No rewards earned yet today."})}),L.length>0&&t.jsx(To,{title:"Revision due",eyebrow:`${L.length} pending`,onClick:()=>ct("revision"),children:t.jsx("div",{style:fe.rows,children:L.slice(0,5).map(G=>t.jsxs("div",{style:fe.row,children:[t.jsx("span",{style:{...fe.dot,background:G.is_missed?"#C2536B":"#C9A227"}}),t.jsx("span",{style:fe.rowName,children:G.topic}),t.jsxs("span",{style:fe.rowMeta,children:["Stage ",G.stage]})]},G.review_id))})}),t.jsxs("div",{style:fe.cardGrid,children:[t.jsx(Ys,{icon:Ki,color:"#8268B0",label:"Spiritual",done:$e,doneText:"Read today",idleText:"Not opened yet",onClick:()=>ct("spiritual")}),t.jsx(Ys,{icon:Co,color:"#C9A227",label:"Affirmations",done:nt,doneText:"Read today",idleText:"Not opened yet",onClick:()=>ct("affirmations")}),t.jsx(Ys,{icon:fm,color:"#C9772E",label:"Kickstart",done:gt,doneText:"Watched today",idleText:"Not watched yet",onClick:()=>ct("kickstart")}),t.jsx(Ys,{icon:cm,color:"#3A7CA5",label:"Mindscape",done:ie,doneText:"Listened today",idleText:"Not listened yet",onClick:()=>ct("mindscape")})]}),t.jsx(To,{title:"Skills enhanced",eyebrow:Ke.length?`${Ke.length} note${Ke.length===1?"":"s"}`:null,onClick:()=>ct("skills"),children:Ke.length===0?t.jsx(Us,{children:"No skill notes added today."}):t.jsx("div",{style:fe.rows,children:Ke.slice(0,5).map(G=>t.jsxs("div",{style:fe.row,children:[t.jsx("span",{style:{...fe.dot,background:"#4C9A6B"}}),t.jsx("span",{style:fe.rowName,children:G.text}),t.jsx("span",{style:fe.rowMeta,children:G.skill})]},G.id))})}),Me.length>0&&t.jsx(To,{title:"Achievements today",eyebrow:`${Me.length}`,onClick:()=>ct("achievements"),children:t.jsx("div",{style:fe.rows,children:Me.map(G=>t.jsxs("div",{style:fe.row,children:[t.jsx("span",{style:{...fe.dot,background:"#C2536B"}}),t.jsx("span",{style:fe.rowName,children:G.title}),G.reward>0&&t.jsx("span",{style:fe.rowAmt,children:n(G.reward)})]},G.id))})}),t.jsx(To,{title:"Wallet status",onClick:()=>ct("vault"),children:t.jsxs("div",{style:fe.walletRow,children:[t.jsxs("div",{style:fe.walletStat,children:[t.jsx("div",{style:{...fe.walletVal,color:"#C9772E"},children:Or(ce,r.code)}),t.jsx("div",{style:fe.walletLbl,children:"Spent today"})]}),t.jsxs("div",{style:fe.walletStat,children:[t.jsx("div",{style:{...fe.walletVal,color:"#8268B0"},children:Or(We,r.code)}),t.jsx("div",{style:fe.walletLbl,children:"Invested today"})]}),t.jsxs("div",{style:fe.walletStat,children:[t.jsx("div",{style:fe.walletVal,children:Or(re,r.code)}),t.jsx("div",{style:fe.walletLbl,children:"Rewards pending"})]})]})}),t.jsx("div",{style:fe.quickHead,children:"Quick log"}),t.jsxs("div",{style:fe.cardGrid,children:[t.jsxs("div",{style:fe.quickCard,children:[t.jsxs("div",{style:fe.quickTitle,children:[t.jsx(uc,{size:15,color:"#4C9A6B"})," Habits"]}),s.length===0?t.jsx(Us,{children:"No habits yet."}):t.jsx("div",{style:fe.habitList,children:s.slice(0,6).map(G=>{const ve=(G.logs||[]).includes(Zt);return t.jsxs("button",{onClick:()=>M(G),style:{...fe.habitChip,...ve?fe.habitChipOn:{}},children:[ve&&t.jsx(jn,{size:12})," ",G.name]},G.id)})})]}),t.jsxs("div",{style:fe.quickCard,children:[t.jsxs("div",{style:fe.quickTitle,children:[t.jsx(Sg,{size:15,color:"#3A7CA5"})," Quadrant"]}),t.jsx("div",{style:fe.quadGrid,children:qu.map(G=>t.jsxs("div",{style:fe.quadCell,children:[t.jsx("span",{style:fe.quadLabel,children:G.label}),t.jsx("span",{style:fe.quadCount,children:U[G.id]})]},G.id))}),t.jsxs("button",{onClick:()=>tt({title:"",pillar:Xu[0],quadrant:"Q1",time_estimate_min:30}),style:fe.quickAddBtn,children:[t.jsx(lt,{size:14})," Add task"]})]}),t.jsxs("div",{style:fe.quickCard,children:[t.jsxs("div",{style:fe.quickTitle,children:[t.jsx(bc,{size:15,color:Gs})," Grove focus"]}),t.jsxs("div",{style:fe.quickStat,children:[fc(de)," today"]}),t.jsxs("button",{onClick:()=>It({label:"",tree:rn,duration_min:25}),style:fe.quickAddBtn,children:[t.jsx(lt,{size:14})," Start session"]})]}),t.jsxs("div",{style:fe.quickCard,children:[t.jsxs("div",{style:fe.quickTitle,children:[t.jsx(Zl,{size:15,color:"#C9772E"})," Expense / Investment"]}),t.jsxs("div",{style:fe.quickStat,children:[Or(ce,r.code)," spent today"]}),t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsxs("button",{onClick:()=>{var G;return mt({category_id:((G=R[0])==null?void 0:G.id)||"",amount:"",note:""})},style:{...fe.quickAddBtn,flex:1},children:[t.jsx(lt,{size:14})," Expense"]}),t.jsxs("button",{onClick:()=>Rt({name:"",kind:"Stocks",invested:"",note:""}),style:{...fe.quickAddBtn,flex:1},children:[t.jsx(lt,{size:14})," Invest"]})]})]})]}),Xe&&t.jsxs(Ks,{title:"Add task",onClose:()=>tt(null),children:[t.jsx("input",{autoFocus:!0,placeholder:"Task title",value:Xe.title,onChange:G=>tt(ve=>({...ve,title:G.target.value})),style:fe.input}),t.jsx("select",{value:Xe.pillar,onChange:G=>tt(ve=>({...ve,pillar:G.target.value})),style:fe.input,children:Xu.map(G=>t.jsx("option",{value:G,children:G},G))}),t.jsx("select",{value:Xe.quadrant,onChange:G=>tt(ve=>({...ve,quadrant:G.target.value})),style:fe.input,children:qu.map(G=>t.jsxs("option",{value:G.id,children:[G.id," · ",G.label]},G.id))}),t.jsx("input",{type:"number",min:"1",placeholder:"Estimate (min)",value:Xe.time_estimate_min,onChange:G=>tt(ve=>({...ve,time_estimate_min:G.target.value})),style:fe.input}),t.jsx(Qs,{onCancel:()=>tt(null),onSave:ee,disabled:!Xe.title.trim()})]}),bt&&t.jsxs(Ks,{title:"Start focus session",onClose:()=>It(null),children:[t.jsx("input",{autoFocus:!0,placeholder:"Label (optional)",value:bt.label,onChange:G=>It(ve=>({...ve,label:G.target.value})),style:fe.input}),t.jsx("select",{value:bt.tree,onChange:G=>It(ve=>({...ve,tree:G.target.value})),style:fe.input,children:Object.entries(Yt).map(([G,ve])=>t.jsx("option",{value:G,children:ve.label},G))}),t.jsx("input",{type:"number",min:"1",placeholder:"Duration (min)",value:bt.duration_min,onChange:G=>It(ve=>({...ve,duration_min:G.target.value})),style:fe.input}),t.jsx(Qs,{onCancel:()=>It(null),onSave:Le,disabled:!Number(bt.duration_min)})]}),Bt&&t.jsxs(Ks,{title:"Log expense",onClose:()=>mt(null),children:[t.jsx("select",{value:Bt.category_id,onChange:G=>mt(ve=>({...ve,category_id:G.target.value})),style:fe.input,children:R.map(G=>t.jsx("option",{value:G.id,children:G.name},G.id))}),t.jsx("input",{autoFocus:!0,type:"number",min:"0",step:"0.01",placeholder:`Amount (${r.symbol})`,value:Bt.amount,onChange:G=>mt(ve=>({...ve,amount:G.target.value})),style:fe.input}),t.jsx("input",{placeholder:"Note (optional)",value:Bt.note,onChange:G=>mt(ve=>({...ve,note:G.target.value})),style:fe.input}),t.jsx(Qs,{onCancel:()=>mt(null),onSave:Pe,disabled:!(parseFloat(Bt.amount)>0&&Bt.category_id)})]}),ft&&t.jsxs(Ks,{title:"Log investment",onClose:()=>Rt(null),children:[t.jsx("input",{autoFocus:!0,placeholder:"Name",value:ft.name,onChange:G=>Rt(ve=>({...ve,name:G.target.value})),style:fe.input}),t.jsx("select",{value:ft.kind,onChange:G=>Rt(ve=>({...ve,kind:G.target.value})),style:fe.input,children:["Stocks","Mutual Fund","Gold","Real Estate","Fixed Deposit","Crypto","Other"].map(G=>t.jsx("option",{value:G,children:G},G))}),t.jsx("input",{type:"number",min:"0",step:"0.01",placeholder:`Invested (${r.symbol})`,value:ft.invested,onChange:G=>Rt(ve=>({...ve,invested:G.target.value})),style:fe.input}),t.jsx("input",{placeholder:"Note (optional)",value:ft.note,onChange:G=>Rt(ve=>({...ve,note:G.target.value})),style:fe.input}),t.jsx(Qs,{onCancel:()=>Rt(null),onSave:st,disabled:!(ft.name.trim()&&parseFloat(ft.invested)>0)})]})]}):t.jsx("div",{style:fe.loading,children:"Loading…"})}function To({title:e,eyebrow:r,onClick:n,children:o}){return t.jsxs("div",{style:fe.card,children:[t.jsxs("div",{style:fe.cardTitleRow,children:[t.jsxs("button",{onClick:n,style:fe.cardTitleBtn,children:[e," ",t.jsx(ky,{size:13})]}),r&&t.jsx("span",{style:fe.cardEyebrow,children:r})]}),o]})}function Us({children:e}){return t.jsx("div",{style:fe.muted,children:e})}function Xa({color:e,label:r,pct:n,val:o}){return t.jsxs("div",{style:fe.pieLegRow,children:[t.jsx("span",{style:{...fe.legendDot,background:e}}),t.jsx("span",{style:fe.pieLegName,children:r}),t.jsxs("span",{style:fe.pieLegPct,children:[Math.round(n),"%"]}),t.jsx("span",{style:fe.pieLegMin,children:o})]})}function Vs({icon:e,color:r,label:n,value:o,sub:i,onClick:s}){return t.jsxs("button",{onClick:s,style:fe.statTile,children:[t.jsx("div",{style:{...fe.statIcon,background:`${r}1A`,color:r},children:t.jsx(e,{size:17})}),t.jsxs("div",{style:{minWidth:0},children:[t.jsx("div",{style:fe.statVal,children:o}),t.jsxs("div",{style:fe.statLbl,children:[n,i?` · ${i}`:""]})]})]})}function Ys({icon:e,color:r,label:n,done:o,doneText:i,idleText:s,onClick:l}){return t.jsxs("button",{onClick:l,style:fe.miniCard,children:[t.jsx("div",{style:{...fe.statIcon,background:`${r}1A`,color:r},children:t.jsx(e,{size:16})}),t.jsx("div",{style:fe.miniLabel,children:n}),t.jsx("div",{style:{...fe.miniStatus,color:o?"#4C9A6B":"var(--text-3)"},children:o?i:s})]})}function Ks({title:e,onClose:r,children:n}){return t.jsx("div",{style:fe.modalOverlay,onClick:r,children:t.jsxs("div",{style:fe.modalCard,onClick:o=>o.stopPropagation(),children:[t.jsx("div",{style:fe.modalTitle,children:e}),t.jsx("div",{style:fe.modalBody,children:n})]})})}function Qs({onCancel:e,onSave:r,disabled:n}){return t.jsxs("div",{style:fe.modalActions,children:[t.jsx("button",{onClick:e,style:fe.modalCancel,children:"Cancel"}),t.jsx("button",{onClick:r,disabled:n,style:{...fe.modalConfirm,...n?{opacity:.5,cursor:"not-allowed"}:{}},children:"Save"})]})}const fe={loading:{padding:40,textAlign:"center",color:"var(--text-3)",fontFamily:"'Inter',system-ui,sans-serif"},page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},chipWrap:{display:"flex",gap:8,flexWrap:"wrap"},usedChip:{border:"1px solid var(--border)",background:"var(--surface-2)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",gap:6},usedChipTime:{color:"var(--text-3)",fontWeight:600,fontSize:11.5},statGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:10,marginBottom:14},statTile:{display:"flex",alignItems:"center",gap:10,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,padding:"12px 14px",cursor:"pointer",fontFamily:"inherit",textAlign:"left",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},statIcon:{width:34,height:34,borderRadius:10,display:"grid",placeItems:"center",flexShrink:0},statVal:{fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},card:{background:"var(--surface)",borderRadius:16,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,marginBottom:10},cardTitleBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"'Fraunces',Georgia,serif",fontSize:16,fontWeight:700,color:"var(--text)"},cardEyebrow:{fontSize:12,fontWeight:700,color:"var(--text-3)"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"10px 0"},rows:{display:"flex",flexDirection:"column",gap:2},row:{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:"1px solid var(--border)"},dot:{width:10,height:10,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:13.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},rowMeta:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,flexShrink:0},rowAmt:{fontSize:13.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:20,flexWrap:"wrap"},pieChart:{position:"relative",width:110,height:110,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:66,height:66,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:12.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:9.5,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:160,display:"flex",flexDirection:"column",gap:8},pieLegRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:10,height:10,borderRadius:3,flexShrink:0},pieLegName:{flex:1,fontSize:13,fontWeight:600},pieLegPct:{fontSize:12.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",width:40,textAlign:"right"},pieLegMin:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,minWidth:58,textAlign:"right"},cardGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:10,marginBottom:14},miniCard:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:6,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,padding:"12px 14px",cursor:"pointer",fontFamily:"inherit",textAlign:"left",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},miniLabel:{fontSize:13,fontWeight:700,color:"var(--text)"},miniStatus:{fontSize:11.5,fontWeight:600},walletRow:{display:"flex",gap:10},walletStat:{flex:1,textAlign:"center"},walletVal:{fontSize:17,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},walletLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:2},quickHead:{fontSize:13,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",margin:"6px 0 10px"},quickCard:{border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,padding:"14px 16px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},quickTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13.5,fontWeight:700,color:"var(--text)"},quickStat:{fontSize:13,color:"var(--text-2)",fontWeight:600},quickAddBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface-2)",color:"var(--text)",padding:"8px 10px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},habitList:{display:"flex",flexWrap:"wrap",gap:6},habitChip:{border:"1px solid var(--border)",background:"var(--surface-2)",color:"var(--text-2)",padding:"5px 10px",borderRadius:14,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",gap:4},habitChipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},quadGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6},quadCell:{display:"flex",justifyContent:"space-between",alignItems:"center",border:"1px solid var(--border)",borderRadius:8,padding:"5px 8px",fontSize:11.5},quadLabel:{color:"var(--text-3)",fontWeight:600},quadCount:{fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",fontSize:13},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modalCard:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"20px 20px 16px",width:340,maxWidth:"100%",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)"},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},modalBody:{display:"flex",flexDirection:"column",gap:8},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface-2)",outline:"none"},modalActions:{display:"flex",gap:8,marginTop:6},modalCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalConfirm:{flex:1,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},F0=7e3;function pr(e,r,n){const[o,i]=g.useState([]),s=g.useRef({}),l=g.useCallback(async(c,h="Item")=>{await e(c),n();const f=`${c}-${Date.now()}`;i(m=>[...m,{id:f,itemId:c,label:h}]),s.current[f]=setTimeout(()=>{i(m=>m.filter(I=>I.id!==f)),delete s.current[f]},F0)},[e,n]),a=g.useCallback(async c=>{const h=o.find(f=>f.id===c);h&&(clearTimeout(s.current[c]),delete s.current[c],i(f=>f.filter(m=>m.id!==c)),await r(h.itemId),n())},[o,r,n]),d=g.useCallback(c=>{clearTimeout(s.current[c]),delete s.current[c],i(h=>h.filter(f=>f.id!==c))},[]);return{deleteItem:l,toasts:o,handleUndo:a,handleDismiss:d}}function br({toasts:e,onUndo:r,onDismiss:n}){return t.jsx("div",{style:Ao.container,children:e.map(o=>t.jsx(A0,{toast:o,onUndo:r,onDismiss:n},o.id))})}function A0({toast:e,onUndo:r,onDismiss:n}){const[o,i]=g.useState(100);return g.useEffect(()=>{const s=Date.now(),l=7e3,a=setInterval(()=>{const d=Date.now()-s,c=Math.max(0,100-d/l*100);i(c),c===0&&clearInterval(a)},50);return()=>clearInterval(a)},[]),t.jsxs("div",{style:Ao.toast,children:[t.jsx("div",{style:{...Ao.bar,width:`${o}%`}}),t.jsxs("span",{style:Ao.msg,children:[e.label," deleted"]}),t.jsx("button",{style:Ao.undoBtn,onClick:()=>r(e.id),children:"Undo"}),t.jsx("button",{style:Ao.closeBtn,onClick:()=>n(e.id),children:"×"})]})}const Ao={container:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",gap:8,zIndex:999,pointerEvents:"none"},toast:{position:"relative",display:"flex",alignItems:"center",gap:12,background:"var(--accent-strong)",color:"#fff",borderRadius:10,padding:"12px 16px",fontSize:13.5,fontFamily:"'Inter', system-ui, sans-serif",boxShadow:"0 4px 20px rgba(0,0,0,0.25)",minWidth:260,overflow:"hidden",pointerEvents:"all"},bar:{position:"absolute",bottom:0,left:0,height:3,background:"#4C9A6B",transition:"width 0.05s linear",borderRadius:"0 0 0 10px"},msg:{flex:1,fontWeight:500},undoBtn:{border:"1px solid rgba(255,255,255,0.3)",background:"none",color:"#4C9A6B",fontWeight:700,fontSize:13,padding:"4px 10px",borderRadius:6,cursor:"pointer",fontFamily:"inherit"},closeBtn:{border:"none",background:"none",color:"rgba(255,255,255,0.5)",cursor:"pointer",fontSize:18,lineHeight:1,padding:"0 2px"}},sn={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},W0=[{id:"Q1",symbol:"™",title:"Do Now",sub:"Important · Urgent",accent:"#C2536B"},{id:"Q2",symbol:"©",title:"Schedule",sub:"Important · Not Urgent",accent:"#3A7CA5"},{id:"Q3",symbol:"®",title:"Delegate",sub:"Not Important · Urgent",accent:"#C9A227"},{id:"Q4",symbol:"•",title:"Drop",sub:"Not Important · Not Urgent",accent:"#8A8780"}];function zm(){return new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Kolkata"})}function Tm(){const e=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"})),n=e.getMinutes()<30?30:0,o=n===0?e.getHours()+1:e.getHours();return`${String(o%24).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function Zu(e,r){const[n,o]=e.split(":").map(Number),i=n*60+o+r;return`${String(Math.floor(i/60)%24).padStart(2,"0")}:${String(i%60).padStart(2,"0")}`}function M0(e){return e?new Date(e).toLocaleString("en-IN",{timeZone:"Asia/Kolkata",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0}):""}const qs=()=>({title:"",pillar:"Financial",est:30,date:zm(),startTime:Tm()});function L0(){const[e,r]=g.useState([]),[n,o]=g.useState([]),[i,s]=g.useState("All"),[l,a]=g.useState(null),[d,c]=g.useState(null),[h,f]=g.useState(qs()),[m,I]=g.useState(null),[B,z]=g.useState(qs()),w=g.useCallback(()=>E.getTasks().then(r).catch(console.error),[]);g.useEffect(()=>{w(),E.getGoals().then(O=>o(O.filter(N=>N.horizon==="Weekly"))).catch(()=>{})},[w]);const p=Object.keys(sn),b=n.filter(O=>i==="All"||O.pillar===i),u=n.find(O=>O.id===l)||null,j=e.filter(O=>l!=null?O.goal_id===l:i!=="All"?O.pillar===i:!0),x=O=>{s(O),a(null),c(null),f(N=>({...N,pillar:O==="All"?"Financial":O}))},T=O=>{a(O),c(null);const N=n.find(le=>le.id===O);N&&f(le=>({...le,pillar:N.pillar}))},{deleteItem:R,toasts:k,handleUndo:y,handleDismiss:K}=pr(E.deleteTask,E.restoreTask,w),q=O=>j.filter(N=>N.quadrant===O),oe=O=>q(O).reduce((N,le)=>N+le.time_estimate_min,0),L=O=>O>=60?`${Math.floor(O/60)}h${O%60?` ${O%60}m`:""}`:`${O}m`,he=async O=>{if(!h.title.trim())return;const N=h.date&&h.startTime?`${h.date}T${h.startTime}:00`:null;await E.createTask({pillar:u?u.pillar:h.pillar,title:h.title,quadrant:O,time_estimate_min:Number(h.est)||30,start_datetime:N,goal_id:l??null}),f(qs()),c(null),w()},Se=(O,N)=>R(O,N),ue=O=>{const N=O.start_datetime?O.start_datetime.split("T"):[];I(O.id),c(null),z({title:O.title,pillar:O.pillar,est:O.time_estimate_min,date:N[0]||zm(),startTime:(N[1]||"").slice(0,5)||Tm()})},ke=async O=>{if(!B.title.trim())return;const N=B.date&&B.startTime?`${B.date}T${B.startTime}:00`:null;await E.updateTask(O.id,{title:B.title.trim(),pillar:B.pillar,time_estimate_min:Number(B.est)||30,start_datetime:N}),I(null),w()},se=g.useRef(null),U=g.useRef(null),[de,X]=g.useState(null),S=(O,N)=>{var ge;const le=document.elementFromPoint(O,N);return le&&le.closest&&((ge=le.closest("[data-quad]"))==null?void 0:ge.getAttribute("data-quad"))||null};g.useEffect(()=>{const O=le=>{const ge=se.current;if(!ge)return;const Ae=Math.hypot(le.clientX-ge.startX,le.clientY-ge.startY);if(!ge.active){if(ge.pointerType!=="mouse"){Ae>12&&(clearTimeout(U.current),se.current=null);return}if(Ae<6)return;ge.active=!0,document.body.style.userSelect="none"}le.cancelable&&le.preventDefault(),ge.overQ=S(le.clientX,le.clientY),X({id:ge.task.id,title:ge.task.title,x:le.clientX,y:le.clientY,overQ:ge.overQ})},N=()=>{clearTimeout(U.current);const le=se.current;se.current=null,document.body.style.userSelect="",document.body.style.touchAction="",X(null),le&&le.active&&le.overQ&&le.overQ!==le.task.quadrant&&E.updateTask(le.task.id,{quadrant:le.overQ}).then(w).catch(()=>{})};return window.addEventListener("pointermove",O,{passive:!1}),window.addEventListener("pointerup",N),window.addEventListener("pointercancel",N),()=>{window.removeEventListener("pointermove",O),window.removeEventListener("pointerup",N),window.removeEventListener("pointercancel",N)}},[w]);const W=(O,N)=>{O.pointerType==="mouse"&&O.button!==0||(se.current={task:N,startX:O.clientX,startY:O.clientY,active:!1,pointerType:O.pointerType,overQ:null},O.pointerType!=="mouse"&&(U.current=setTimeout(()=>{const le=se.current;le&&(le.active=!0,document.body.style.touchAction="none",X({id:le.task.id,title:le.task.title,x:le.startX,y:le.startY,overQ:le.task.quadrant}))},280)))};return t.jsxs("div",{style:Re.page,children:[t.jsxs("div",{style:Re.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:Re.eyebrow,children:"Anvil · Weekly Routing"}),t.jsx("h1",{style:Re.h1,children:"Weekly Routing"})]}),t.jsx("div",{style:Re.headRight,children:t.jsx("div",{style:Re.legend,children:Object.entries(sn).map(([O,N])=>t.jsxs("span",{style:Re.legendItem,children:[t.jsx("span",{style:{...Re.dot,background:N.dot}}),O]},O))})})]}),t.jsx("div",{style:Re.filterBar,children:["All",...p].map(O=>{const N=i===O,le=sn[O];return t.jsxs("button",{onClick:()=>x(O),style:{...Re.pillChip,...N?le?{background:le.dot,color:"#fff",borderColor:le.dot}:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:[le&&t.jsx("span",{style:{...Re.dot,background:N?"#fff":le.dot}}),O==="All"?"All":O]},O)})}),t.jsxs("div",{style:Re.goalBar,children:[t.jsx("button",{onClick:()=>a(null),style:{...Re.goalChip,...l==null?Re.goalChipOn:{}},children:"All goals"}),b.map(O=>{var ge;const N=((ge=sn[O.pillar])==null?void 0:ge.dot)||"#9A968C",le=l===O.id;return t.jsxs("button",{onClick:()=>T(O.id),style:{...Re.goalChip,...le?{background:N,color:"#fff",borderColor:N}:{}},title:O.title,children:[t.jsx("span",{style:{...Re.dot,background:le?"#fff":N}}),t.jsx("span",{style:Re.goalChipText,children:O.title})]},O.id)}),b.length===0&&t.jsxs("span",{style:Re.goalEmpty,children:["No weekly goals",i!=="All"?` for ${i}`:""," — create them in Goals."]})]}),t.jsx("div",{style:Re.grid,children:W0.map(O=>{var N,le;return t.jsxs("section",{"data-quad":O.id,style:{...Re.quad,borderTop:`3px solid ${O.accent}`,...de&&de.overQ===O.id&&de.overQ!==((N=e.find(ge=>ge.id===de.id))==null?void 0:N.quadrant)?{outline:`2px dashed ${O.accent}`,outlineOffset:2,background:"var(--hover)"}:{}},children:[t.jsxs("header",{style:Re.quadHead,children:[t.jsxs("div",{style:Re.quadTitleRow,children:[t.jsx("span",{style:{...Re.symbol,color:O.accent},children:O.symbol}),t.jsxs("div",{children:[t.jsx("div",{style:Re.quadTitle,children:O.title}),t.jsx("div",{style:Re.quadSub,children:O.sub})]})]}),t.jsx("span",{style:Re.quadTotal,children:L(oe(O.id))})]}),t.jsxs("div",{style:Re.list,children:[q(O.id).map(ge=>{const Ae=sn[ge.pillar]||sn.Financial;return m===ge.id?t.jsxs("div",{style:Re.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"Task title",value:B.title,onChange:Y=>z({...B,title:Y.target.value}),onKeyDown:Y=>Y.key==="Enter"&&ke(ge),style:Re.input}),t.jsxs("div",{style:Re.dateTimeRow,children:[t.jsxs("div",{style:Re.dateTimeGroup,children:[t.jsx("label",{style:Re.dtLabel,children:"Date"}),t.jsx("input",{type:"date",value:B.date,onChange:Y=>z({...B,date:Y.target.value}),style:Re.dtInput})]}),t.jsxs("div",{style:Re.dateTimeGroup,children:[t.jsx("label",{style:Re.dtLabel,children:"Start"}),t.jsx("input",{type:"time",value:B.startTime,onChange:Y=>z({...B,startTime:Y.target.value}),style:Re.dtInput})]}),t.jsxs("div",{style:Re.dateTimeGroup,children:[t.jsx("label",{style:Re.dtLabel,children:"End"}),t.jsx("div",{style:Re.dtEndValue,children:Zu(B.startTime,Number(B.est)||30)})]})]}),t.jsxs("div",{style:Re.addRow,children:[t.jsx("select",{value:B.pillar,onChange:Y=>z({...B,pillar:Y.target.value}),style:Re.select,children:Object.keys(sn).map(Y=>t.jsx("option",{children:Y},Y))}),t.jsx("input",{type:"number",value:B.est,onChange:Y=>z({...B,est:Y.target.value}),style:{...Re.input,width:60}}),t.jsx("span",{style:Re.minLabel,children:"min"}),t.jsx("button",{onClick:()=>ke(ge),style:Re.saveBtn,children:t.jsx(He,{size:14})}),t.jsx("button",{onClick:()=>I(null),style:Re.cancelBtn,children:t.jsx(De,{size:14})})]})]},ge.id):t.jsxs("div",{onPointerDown:Y=>W(Y,ge),style:{...Re.card,background:Ae.soft,cursor:"grab",touchAction:"pan-y",...(de==null?void 0:de.id)===ge.id?{opacity:.4}:{}},children:[t.jsx("span",{style:{...Re.cardBar,background:Ae.dot}}),t.jsxs("div",{style:Re.cardBody,children:[t.jsx("div",{style:Re.cardTitle,children:ge.title}),ge.start_datetime&&t.jsxs("div",{style:Re.eventTime,children:[t.jsx(Dy,{size:10}),M0(ge.start_datetime)]}),t.jsxs("div",{style:Re.cardMeta,children:[t.jsxs("span",{style:Re.metaPill,children:[t.jsx("span",{style:{...Re.dot,background:Ae.dot,width:7,height:7}}),ge.pillar]}),t.jsxs("span",{style:Re.metaPill,children:[t.jsx(am,{size:11})," ",L(ge.time_estimate_min)]})]})]}),t.jsxs("div",{style:Re.cardActions,children:[t.jsx("button",{onClick:()=>ue(ge),onPointerDown:Y=>Y.stopPropagation(),style:Re.delBtn,title:"Edit",children:t.jsx(vt,{size:12})}),t.jsx("button",{onClick:()=>Se(ge.id,ge.title),onPointerDown:Y=>Y.stopPropagation(),style:Re.delBtn,children:t.jsx(De,{size:13})})]})]},ge.id)}),d===O.id?t.jsxs("div",{style:Re.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"Task title",value:h.title,onChange:ge=>f({...h,title:ge.target.value}),onKeyDown:ge=>ge.key==="Enter"&&he(O.id),style:Re.input}),t.jsxs("div",{style:Re.dateTimeRow,children:[t.jsxs("div",{style:Re.dateTimeGroup,children:[t.jsx("label",{style:Re.dtLabel,children:"Date"}),t.jsx("input",{type:"date",value:h.date,onChange:ge=>f({...h,date:ge.target.value}),style:Re.dtInput})]}),t.jsxs("div",{style:Re.dateTimeGroup,children:[t.jsx("label",{style:Re.dtLabel,children:"Start"}),t.jsx("input",{type:"time",value:h.startTime,onChange:ge=>f({...h,startTime:ge.target.value}),style:Re.dtInput})]}),t.jsxs("div",{style:Re.dateTimeGroup,children:[t.jsx("label",{style:Re.dtLabel,children:"End"}),t.jsx("div",{style:Re.dtEndValue,children:Zu(h.startTime,Number(h.est)||30)})]})]}),t.jsxs("div",{style:Re.addRow,children:[u?t.jsxs("span",{style:Re.goalPillarTag,children:[t.jsx("span",{style:{...Re.dot,background:(le=sn[u.pillar])==null?void 0:le.dot}})," ",u.pillar]}):t.jsx("select",{value:h.pillar,onChange:ge=>f({...h,pillar:ge.target.value}),style:Re.select,children:Object.keys(sn).map(ge=>t.jsx("option",{children:ge},ge))}),t.jsx("input",{type:"number",value:h.est,onChange:ge=>f({...h,est:ge.target.value}),style:{...Re.input,width:60}}),t.jsx("span",{style:Re.minLabel,children:"min"}),t.jsx("button",{onClick:()=>he(O.id),style:Re.saveBtn,children:t.jsx(He,{size:14})}),t.jsx("button",{onClick:()=>{c(null),f(qs())},style:Re.cancelBtn,children:t.jsx(De,{size:14})})]})]}):t.jsxs("button",{onClick:()=>c(O.id),style:Re.addTrigger,children:[t.jsx(lt,{size:13})," Add task"]})]})]},O.id)})}),de&&t.jsx("div",{style:{...Re.dragClone,left:de.x+12,top:de.y+12},children:de.title}),t.jsx(br,{toasts:k,onUndo:y,onDismiss:K})]})}const Re={page:{fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:16,marginBottom:22},headRight:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:10},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces', Georgia, serif"},legend:{display:"flex",gap:14,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--text-2)",fontWeight:500},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:10},pillChip:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},goalBar:{display:"flex",gap:7,flexWrap:"wrap",alignItems:"center",marginBottom:18,paddingBottom:14,borderBottom:"1px solid var(--border)"},goalChip:{display:"inline-flex",alignItems:"center",gap:6,maxWidth:220,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},goalChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},goalChipText:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},goalEmpty:{fontSize:12,color:"var(--text-3)",fontStyle:"italic"},goalPillarTag:{display:"inline-flex",alignItems:"center",gap:6,fontSize:12.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"7px 10px",borderRadius:6,flex:1},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16},quad:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.06)"},quadHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14},quadTitleRow:{display:"flex",gap:10,alignItems:"center"},symbol:{fontSize:20,lineHeight:1},quadTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em"},quadSub:{fontSize:11,color:"var(--text-3)",marginTop:1,letterSpacing:"0.02em"},quadTotal:{fontSize:12,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"3px 9px",borderRadius:20},list:{display:"flex",flexDirection:"column",gap:8},card:{display:"flex",alignItems:"stretch",gap:10,borderRadius:9,padding:"10px 10px 10px 0",overflow:"hidden"},cardBar:{width:3,borderRadius:3,flexShrink:0},cardBody:{flex:1,minWidth:0},cardTitle:{fontSize:13.5,fontWeight:500,lineHeight:1.35,marginBottom:4},eventTime:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#3A7CA5",fontWeight:500,marginBottom:5},cardMeta:{display:"flex",gap:8,flexWrap:"wrap"},metaPill:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"var(--text-2)",fontWeight:500},cardActions:{display:"flex",flexDirection:"column",gap:4,alignSelf:"center",flexShrink:0},delBtn:{width:30,height:30,borderRadius:8,border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center"},addTrigger:{display:"flex",alignItems:"center",gap:5,fontSize:12.5,color:"var(--text-3)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"8px 10px",cursor:"pointer",fontWeight:500,marginTop:2},addBox:{border:"1px solid var(--border)",borderRadius:9,padding:10,display:"flex",flexDirection:"column",gap:8},dateTimeRow:{display:"flex",gap:8,alignItems:"flex-end"},dateTimeGroup:{display:"flex",flexDirection:"column",gap:3,flex:1},dtLabel:{fontSize:10,fontWeight:600,color:"var(--text-3)",letterSpacing:"0.08em",textTransform:"uppercase"},dtInput:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},dtEndValue:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,color:"var(--text-2)",background:"var(--bg)"},addRow:{display:"flex",alignItems:"center",gap:6},input:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",flex:1,minWidth:0},select:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 8px",fontSize:12.5,fontFamily:"inherit",flex:1},minLabel:{fontSize:11,color:"var(--text-3)"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},dragClone:{position:"fixed",zIndex:1e3,pointerEvents:"none",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:8,padding:"8px 12px",fontSize:13,fontWeight:600,color:"var(--text)",boxShadow:"0 8px 24px rgba(0,0,0,0.25)",maxWidth:220,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},Tr={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},zi=Object.keys(Tr),wl=["Yearly","Quarterly","Monthly","Weekly"],Xr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ju=[{label:"Q1 · Jan–Mar",startMonth:0},{label:"Q2 · Apr–Jun",startMonth:3},{label:"Q3 · Jul–Sep",startMonth:6},{label:"Q4 · Oct–Dec",startMonth:9}],Sl=new Date().getFullYear(),Io=Array.from({length:8},(e,r)=>Sl-1+r);function _0(e=720){const[r,n]=g.useState(()=>window.innerWidth<e);return g.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const Fi=864e5,Ht=30,qi=190,Bo=e=>new Date(e+"T00:00:00"),ep=e=>e.toLocaleDateString("en-US",{month:"short",day:"numeric"}),$0=[{key:"yearly",label:"Yearly",horizons:["Yearly"]},{key:"quarterly",label:"Quarterly",horizons:["Quarterly"]},{key:"mw",label:"Monthly & Weekly",horizons:["Monthly","Weekly"]}],tp={Yearly:"Yr",Quarterly:"Q",Monthly:"Mo",Weekly:"Wk"},P0={Yearly:"Y",Quarterly:"Q",Monthly:"M",Weekly:"W"},rp={Yearly:0,Quarterly:1,Monthly:2,Weekly:3},Za=e=>wl[Math.min(wl.indexOf(e)+1,wl.length-1)],Xs=e=>{if(!e||!e.start_date)return Array.from({length:12},(l,a)=>a);const r=new Date(e.start_date+"T00:00:00"),n=new Date(e.end_date+"T00:00:00"),o=r.getFullYear(),i=r.getMonth(),s=n.getFullYear()>o?11:n.getMonth();return Array.from({length:s-i+1},(l,a)=>i+a)},Ti=e=>new Date(e+"T00:00:00").getFullYear(),Im=(e,r,n)=>{const o=(n-1)*7+1,i=Math.min(o+6,new Date(e,r+1,0).getDate()),s=String(r+1).padStart(2,"0");return{start_date:`${e}-${s}-${String(o).padStart(2,"0")}`,end_date:`${e}-${s}-${String(i).padStart(2,"0")}`}},np=(e,r,n,o=1)=>{const i=r;switch(e){case"Yearly":return{start_date:`${i}-01-01`,end_date:`${i}-12-31`};case"Quarterly":{const s=Math.floor(n/3)*3,l=s+1,a=s+3,d=new Date(i,a,0).getDate();return{start_date:`${i}-${String(l).padStart(2,"0")}-01`,end_date:`${i}-${String(a).padStart(2,"0")}-${d}`}}case"Monthly":{const s=new Date(i,n+1,0).getDate();return{start_date:`${i}-${String(n+1).padStart(2,"0")}-01`,end_date:`${i}-${String(n+1).padStart(2,"0")}-${s}`}}case"Weekly":return Im(i,n,o);default:return{start_date:`${i}-01-01`,end_date:`${i}-12-31`}}},Xi=(e,r)=>{const n=new Date(e+"T00:00:00");return n.setDate(n.getDate()+r),`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`},Jl=(e,r)=>Math.round((new Date(r+"T00:00:00")-new Date(e+"T00:00:00"))/Fi)+1,N0=(e,r,n)=>{if(!n||!n.start_date||!n.end_date)return{start_date:e,end_date:r,clamped:!1};const o=Jl(e,r);let i=e,s=r,l=!1;return i<n.start_date&&(i=n.start_date,s=Xi(i,o-1),l=!0),s>n.end_date&&(s=n.end_date,i=Xi(s,-(o-1)),l=!0,i<n.start_date&&(i=n.start_date)),{start_date:i,end_date:s,clamped:l}},O0=(e,r)=>new Date(e,r+1,0).getDate(),xc=e=>{const r=new Date(e.start_date+"T00:00:00");if(e.horizon==="Monthly")return O0(r.getFullYear(),r.getMonth());if(e.horizon==="Weekly"){const n=Math.min(Math.max(Math.ceil(r.getDate()/7),1),4),o=Im(r.getFullYear(),r.getMonth(),n);return Jl(o.start_date,o.end_date)}return Jl(e.start_date,e.end_date)},op=e=>Math.round(xc(e)*1.5),H0=e=>e.horizon==="Monthly"||e.horizon==="Weekly",G0=e=>{if(!e.start_date)return"";const r=new Date(e.start_date+"T00:00:00"),n=r.getMonth();switch(e.horizon){case"Yearly":{const o=e.end_date?new Date(e.end_date+"T00:00:00").getFullYear():r.getFullYear();return o>r.getFullYear()?`${r.getFullYear()}–${o}`:`${r.getFullYear()}`}case"Quarterly":return`Q${Math.floor(n/3)+1} ${r.getFullYear()}`;case"Monthly":return`${Xr[n]} ${r.getFullYear()}`;case"Weekly":return`${Xr[n]} W${Math.ceil(r.getDate()/7)}`;default:return""}};function U0(){const[e,r]=g.useState([]),[n,o]=g.useState("All"),[i,s]=g.useState({}),[l,a]=g.useState({}),[d,c]=g.useState(null),[h,f]=g.useState(""),[m,I]=g.useState(0),[B,z]=g.useState(1),[w,p]=g.useState(Sl),[b,u]=g.useState(Sl),[j,x]=g.useState("Yearly"),[T,R]=g.useState(zi[0]),[k,y]=g.useState(null),K=_0(),[q,oe]=g.useState(!K),[L,he]=g.useState("day"),[Se,ue]=g.useState(null),ke=g.useRef(null);g.useEffect(()=>{ke.current=Se},[Se]);const se=g.useRef(e);g.useEffect(()=>{se.current=e},[e]);const[U,de]=g.useState(null),X=g.useRef(null);g.useEffect(()=>{X.current=U},[U]);const S=g.useRef(null),W=g.useRef(0),[O,N]=g.useState(null),le=g.useRef(null),ge=g.useCallback(A=>{N(A),clearTimeout(le.current),le.current=setTimeout(()=>N(null),2800)},[]),[Ae,Y]=g.useState(null),ae=g.useRef(null),[_,ne]=g.useState(null),[xe,D]=g.useState(null),v=(A,Z)=>{if(_===Z){ne(null);return}const Te=A.currentTarget.getBoundingClientRect(),Ne=Te.bottom+220<window.innerHeight;D({right:Math.max(8,window.innerWidth-Te.right),...Ne?{top:Te.bottom+4}:{bottom:window.innerHeight-Te.top+4}}),ne(Z)},re=A=>{clearTimeout(ae.current),ae.current=setTimeout(()=>Y(A),350)},F=()=>{clearTimeout(ae.current),Y(null)},ce=g.useCallback(()=>{E.getGoals().then(r).catch(console.error)},[]);g.useEffect(()=>{ce()},[ce]);const{deleteItem:ye,toasts:We,handleUndo:qe,handleDismiss:dt}=pr(E.deleteGoal,E.restoreGoal,ce),$e=g.useCallback(async()=>{const A=ke.current;if(ue(null),!A)return;const Z=Math.round(A.dx/(A.pxPerDay||Ht));if(!Z)return;let Te=Xi(A.g.start_date,Z),Ne=Xi(A.g.end_date,Z);if(A.g.parent_goal_id){const rt=se.current.find(et=>et.id===A.g.parent_goal_id),Ze=N0(Te,Ne,rt);Ze.clamped&&ge(`Can't move past "${(rt==null?void 0:rt.title)||"parent goal"}" — kept within its dates.`),Te=Ze.start_date,Ne=Ze.end_date}(Te!==A.g.start_date||Ne!==A.g.end_date)&&(await E.updateGoal(A.g.id,{pillar:A.g.pillar,start_date:Te,end_date:Ne}),ce())},[ce,ge]),nt=!!Se;g.useEffect(()=>{if(!nt)return;const A=Ze=>{W.current=Ze.clientX,ue(et=>et&&{...et,dx:Ze.clientX-et.startX})},Z=()=>$e();window.addEventListener("pointermove",A),window.addEventListener("pointerup",Z);const Te=44,Ne=16,rt=setInterval(()=>{const Ze=S.current;if(!Ze)return;const et=Ze.getBoundingClientRect(),ht=W.current;let Ie=0;if(ht<et.left+Te?Ie=-1:ht>et.right-Te&&(Ie=1),!Ie)return;const Ot=Ze.scrollLeft;Ze.scrollLeft=Math.max(0,Math.min(Ot+Ie*Ne,Ze.scrollWidth-Ze.clientWidth));const mr=Ze.scrollLeft-Ot;mr&&ue(xt=>xt&&{...xt,startX:xt.startX-mr,dx:ht-(xt.startX-mr)})},16);return()=>{window.removeEventListener("pointermove",A),window.removeEventListener("pointerup",Z),clearInterval(rt)}},[nt,$e]);const Ke=g.useCallback(async()=>{const A=X.current;if(de(null),!A)return;const Z=A.g,Te=xc(Z),Ne=op(Z),rt=Math.max(Te,Math.min(Ne,Jl(Z.start_date,Z.end_date)+Math.round(A.dx/Ht)));let Ze=Xi(Z.start_date,rt-1);if(Z.parent_goal_id){const et=se.current.find(ht=>ht.id===Z.parent_goal_id);et!=null&&et.end_date&&Ze>et.end_date&&(Ze=et.end_date,ge(`Can't extend past "${(et==null?void 0:et.title)||"parent goal"}" — kept within its dates.`))}Ze!==Z.end_date&&Ze>=Z.start_date&&(await E.updateGoal(Z.id,{end_date:Ze}),ce())},[ce,ge]),gt=!!U;g.useEffect(()=>{if(!gt)return;const A=Te=>de(Ne=>Ne&&{...Ne,dx:Te.clientX-Ne.startX}),Z=()=>Ke();return window.addEventListener("pointermove",A),window.addEventListener("pointerup",Z),()=>{window.removeEventListener("pointermove",A),window.removeEventListener("pointerup",Z)}},[gt,Ke]);const ie=n==="All",Me=Tr[n]||{dot:"var(--text-3)"},Xe=ie?e:e.filter(A=>A.pillar===n),tt=Xe.filter(A=>!A.parent_goal_id),bt=A=>Xe.filter(Z=>Z.parent_goal_id===A),It=A=>a(Z=>({...Z,[A]:!Z[A]})),Bt=A=>A.horizon==="Monthly"||A.horizon==="Weekly",mt=A=>i[A.id]!==void 0?i[A.id]:Bt(A),ft=A=>s(Z=>({...Z,[A.id]:!mt(A)})),Rt=(A,Z=null)=>{c(A),f(""),z(1);const Te=Z?Ti(Z.start_date):Sl;p(Te),u(Te),A==="ROOT"&&R(ie?zi[0]:n);const Ne=A==="ROOT"?"Yearly":Za(Z==null?void 0:Z.horizon);x(Ne);const rt=A==="ROOT"?Array.from({length:12},(Ze,et)=>et):Xs(Z);I(Ne==="Quarterly"?Math.floor(rt[0]/3)*3:rt[0]??0)},M=async(A,Z)=>{if(!h.trim())return;const Te=(Z==null?void 0:Z.horizon)??null,Ne=A==="ROOT"?j:Za(Te),rt=A==="ROOT"?T:(Z==null?void 0:Z.pillar)||n;let Ze,et;if(Ne==="Yearly"){const ht=Number(w),Ie=Math.max(ht,Number(b)||ht);Ze=`${ht}-01-01`,et=`${Ie}-12-31`}else{const ht=Z?Ti(Z.start_date):Number(w);({start_date:Ze,end_date:et}=np(Ne,ht,m,B))}await E.createGoal({pillar:rt,title:h.trim(),horizon:Ne,parent_goal_id:A==="ROOT"?null:A,start_date:Ze,end_date:et}),A!=="ROOT"&&a(ht=>({...ht,[A]:!0})),c(null),f(""),ce()},ee=A=>{const Z=A.start_date?new Date(A.start_date+"T00:00:00"):new Date,Te=Z.getMonth(),Ne=Math.min(Math.max(Math.ceil(Z.getDate()/7),1),4);y({id:A.id,title:A.title,pillar:A.pillar,horizon:A.horizon,parentGoal:e.find(rt=>rt.id===A.parent_goal_id)||null,year:Ti(A.start_date),endYear:Ti(A.end_date),month:A.horizon==="Quarterly"?Math.floor(Te/3)*3:Te,week:Ne})},Le=async()=>{if(!k||!k.title.trim())return;let A,Z;if(k.horizon==="Yearly"){const Te=Number(k.year),Ne=Math.max(Te,Number(k.endYear)||Te);A=`${Te}-01-01`,Z=`${Ne}-12-31`}else{let Te=k.month;k.horizon==="Weekly"&&k.parentGoal&&(Te=Xs(k.parentGoal)[0]);const Ne=k.parentGoal?Ti(k.parentGoal.start_date):Number(k.year);({start_date:A,end_date:Z}=np(k.horizon,Ne,Te,k.week))}await E.updateGoal(k.id,{title:k.title.trim(),pillar:k.pillar,start_date:A,end_date:Z}),y(null),ce()},Pe=({parentId:A,parentGoal:Z,depth:Te})=>{const Ne=A==="ROOT",rt=Ne?j:Za((Z==null?void 0:Z.horizon)??null),Ze=Ne?Array.from({length:12},(Ie,Ot)=>Ot):Xs(Z),et=Ju.filter(Ie=>Ze.includes(Ie.startMonth)),ht=Ie=>{x(Ie),I(0),z(1),u(w)};return t.jsxs("div",{style:{...be.addBox,marginLeft:Te*24},children:[t.jsx("input",{autoFocus:!0,placeholder:`New ${rt.toLowerCase()} goal…`,value:h,onChange:Ie=>f(Ie.target.value),onKeyDown:Ie=>{Ie.key==="Enter"&&M(A,Z),Ie.key==="Escape"&&c(null)},style:be.input}),Ne&&ie&&t.jsx("select",{value:T,onChange:Ie=>R(Ie.target.value),style:be.monthSelect,title:"Pillar",children:zi.map(Ie=>t.jsx("option",{value:Ie,children:Ie},Ie))}),Ne&&t.jsx("select",{value:j,onChange:Ie=>ht(Ie.target.value),style:be.monthSelect,title:"Goal level",children:wl.map(Ie=>t.jsx("option",{value:Ie,children:Ie},Ie))}),rt==="Yearly"&&t.jsxs(t.Fragment,{children:[t.jsx("select",{value:w,onChange:Ie=>{const Ot=Number(Ie.target.value);p(Ot),b<Ot&&u(Ot)},style:be.monthSelect,title:"Start year",children:Io.map(Ie=>t.jsx("option",{value:Ie,children:Ie},Ie))}),t.jsx("span",{style:be.toTag,children:"to"}),t.jsx("select",{value:b,onChange:Ie=>u(Number(Ie.target.value)),style:be.monthSelect,title:"End year (spans multiple years)",children:Io.filter(Ie=>Ie>=w).map(Ie=>t.jsx("option",{value:Ie,children:Ie},Ie))})]}),rt!=="Yearly"&&Ne&&t.jsx("select",{value:w,onChange:Ie=>p(Number(Ie.target.value)),style:be.monthSelect,title:"Year",children:Io.map(Ie=>t.jsx("option",{value:Ie,children:Ie},Ie))}),rt==="Quarterly"&&t.jsx("select",{value:m,onChange:Ie=>I(Number(Ie.target.value)),style:be.monthSelect,children:et.map(Ie=>t.jsx("option",{value:Ie.startMonth,children:Ie.label},Ie.startMonth))}),rt==="Monthly"&&t.jsx("select",{value:m,onChange:Ie=>I(Number(Ie.target.value)),style:be.monthSelect,children:Ze.map(Ie=>t.jsx("option",{value:Ie,children:Xr[Ie]},Ie))}),rt==="Weekly"&&t.jsxs(t.Fragment,{children:[Ne?t.jsx("select",{value:m,onChange:Ie=>I(Number(Ie.target.value)),style:be.monthSelect,children:Ze.map(Ie=>t.jsx("option",{value:Ie,children:Xr[Ie]},Ie))}):t.jsx("span",{style:be.inheritTag,children:Xr[Ze[0]]}),t.jsx("select",{value:B,onChange:Ie=>z(Number(Ie.target.value)),style:be.monthSelect,children:[1,2,3,4].map(Ie=>t.jsxs("option",{value:Ie,children:["Week ",Ie]},Ie))})]}),t.jsx("button",{onClick:()=>M(A,Z),style:be.saveBtn,children:t.jsx(He,{size:14})}),t.jsx("button",{onClick:()=>c(null),style:be.cancelBtn,children:t.jsx(De,{size:14})})]})},st=({goal:A,depth:Z})=>{var et,ht,Ie,Ot,mr;const Te=bt(A.id),Ne=l[A.id],rt=A.horizon!=="Weekly";if((k==null?void 0:k.id)===A.id){const xt=Xs(k.parentGoal),to=Ju.filter(Ge=>xt.includes(Ge.startMonth)),mi=!k.parentGoal;return t.jsxs("div",{style:{...be.editBox,marginLeft:Z*24},children:[t.jsx("input",{autoFocus:!0,value:k.title,onChange:Ge=>y({...k,title:Ge.target.value}),onKeyDown:Ge=>Ge.key==="Enter"&&Le(),style:{...be.input,flex:1}}),t.jsx("select",{value:k.pillar,onChange:Ge=>y({...k,pillar:Ge.target.value}),style:be.monthSelect,children:zi.map(Ge=>t.jsx("option",{children:Ge},Ge))}),k.horizon==="Yearly"&&t.jsxs(t.Fragment,{children:[t.jsx("select",{value:k.year,onChange:Ge=>{const fi=Number(Ge.target.value);y({...k,year:fi,endYear:Math.max(fi,k.endYear)})},style:be.monthSelect,title:"Start year",children:Io.map(Ge=>t.jsx("option",{value:Ge,children:Ge},Ge))}),t.jsx("span",{style:be.toTag,children:"to"}),t.jsx("select",{value:k.endYear,onChange:Ge=>y({...k,endYear:Number(Ge.target.value)}),style:be.monthSelect,title:"End year (spans multiple years)",children:Io.filter(Ge=>Ge>=k.year).map(Ge=>t.jsx("option",{value:Ge,children:Ge},Ge))})]}),k.horizon!=="Yearly"&&mi&&t.jsx("select",{value:k.year,onChange:Ge=>y({...k,year:Number(Ge.target.value)}),style:be.monthSelect,title:"Year",children:Io.map(Ge=>t.jsx("option",{value:Ge,children:Ge},Ge))}),k.horizon==="Quarterly"&&t.jsx("select",{value:k.month,onChange:Ge=>y({...k,month:Number(Ge.target.value)}),style:be.monthSelect,children:to.map(Ge=>t.jsx("option",{value:Ge.startMonth,children:Ge.label},Ge.startMonth))}),k.horizon==="Monthly"&&t.jsx("select",{value:k.month,onChange:Ge=>y({...k,month:Number(Ge.target.value)}),style:be.monthSelect,children:xt.map(Ge=>t.jsx("option",{value:Ge,children:Xr[Ge]},Ge))}),k.horizon==="Weekly"&&t.jsxs(t.Fragment,{children:[mi?t.jsx("select",{value:k.month,onChange:Ge=>y({...k,month:Number(Ge.target.value)}),style:be.monthSelect,children:xt.map(Ge=>t.jsx("option",{value:Ge,children:Xr[Ge]},Ge))}):t.jsx("span",{style:be.inheritTag,children:Xr[xt[0]]}),t.jsx("select",{value:k.week,onChange:Ge=>y({...k,week:Number(Ge.target.value)}),style:be.monthSelect,children:[1,2,3,4].map(Ge=>t.jsxs("option",{value:Ge,children:["Week ",Ge]},Ge))})]}),t.jsx("button",{onClick:Le,style:be.saveBtn,children:t.jsx(He,{size:14})}),t.jsx("button",{onClick:()=>y(null),style:be.cancelBtn,children:t.jsx(De,{size:14})})]})}return t.jsxs("div",{children:[t.jsxs("div",{style:{...be.row,marginLeft:Z*24,background:Z===0&&((et=Tr[A.pillar])==null?void 0:et.soft)||"transparent"},children:[Te.length>0?t.jsx("button",{onClick:()=>It(A.id),style:be.caret,children:Ne?t.jsx(So,{size:15}):t.jsx(nn,{size:15})}):t.jsx("span",{style:{...be.caret,opacity:.25},children:t.jsx(Ig,{size:12})}),t.jsx("span",{style:{...be.horizonTag,color:((ht=Tr[A.pillar])==null?void 0:ht.dot)||Me.dot,borderColor:((Ie=Tr[A.pillar])==null?void 0:Ie.dot)||Me.dot},title:A.horizon,children:K?P0[A.horizon]:A.horizon}),t.jsxs("div",{style:be.nameCol,children:[t.jsx("span",{style:{...be.title,...Ae===A.id?be.titleFull:{}},title:A.title,onPointerDown:()=>re(A.id),onPointerUp:F,onPointerLeave:F,onPointerCancel:F,children:A.title}),t.jsx("span",{style:be.whenSub,children:G0(A)})]}),K?t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{position:"relative",flexShrink:0},children:[t.jsx("button",{onClick:xt=>v(xt,A.id),style:be.rowAdd,title:"Options",children:t.jsx(vm,{size:15})}),_===A.id&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:be.menuBackdrop,onClick:()=>ne(null)}),t.jsxs("div",{style:{...be.goalMenu,...xe},children:[t.jsxs("button",{style:be.menuItem,onClick:()=>{ee(A),ne(null)},children:[t.jsx(vt,{size:14})," Edit"]}),rt&&t.jsxs("button",{style:be.menuItem,onClick:()=>{a(xt=>({...xt,[A.id]:!0})),Rt(A.id,A),ne(null)},children:[t.jsx(lt,{size:14})," Add sub-goal"]}),t.jsxs("button",{style:{...be.menuItem,color:"#C2536B"},onClick:()=>{ye(A.id,A.title),ne(null)},children:[t.jsx(De,{size:14})," Delete"]})]})]})]}),t.jsx("button",{onClick:()=>ft(A),style:{...be.rowAdd,color:mt(A)?((Ot=Tr[A.pillar])==null?void 0:Ot.dot)||Me.dot:"var(--text-3)"},title:mt(A)?"Showing on timeline":"Hidden from timeline",children:mt(A)?t.jsx(fs,{size:14}):t.jsx(Ql,{size:14})})]}):t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>ft(A),style:{...be.rowAdd,color:mt(A)?((mr=Tr[A.pillar])==null?void 0:mr.dot)||Me.dot:"var(--text-3)"},title:mt(A)?"Showing on timeline — click to hide":"Hidden from timeline — click to show",children:mt(A)?t.jsx(fs,{size:13}):t.jsx(Ql,{size:13})}),t.jsx("button",{onClick:()=>ee(A),style:be.rowAdd,title:"Edit",children:t.jsx(vt,{size:12})}),rt&&t.jsx("button",{onClick:()=>{a(xt=>({...xt,[A.id]:!0})),Rt(A.id,A)},style:be.rowAdd,title:"Add sub-goal",children:t.jsx(lt,{size:13})}),t.jsx("button",{onClick:()=>ye(A.id,A.title),style:{...be.rowAdd,color:"var(--text-3)"},title:"Delete",children:t.jsx(De,{size:13})})]})]}),Ne&&Te.map(xt=>t.jsx(st,{goal:xt,depth:Z+1},xt.id)),Ne&&d===A.id&&t.jsx(Pe,{parentId:A.id,parentGoal:A,depth:Z+1})]})},ct=e.filter(A=>mt(A)&&A.start_date&&A.end_date),hr=$0.map(A=>({...A,items:ct.filter(Z=>A.horizons.includes(Z.horizon)).sort((Z,Te)=>Z.pillar.localeCompare(Te.pillar)||Z.start_date.localeCompare(Te.start_date)||rp[Z.horizon]-rp[Te.horizon]||Z.end_date.localeCompare(Te.end_date))})).filter(A=>A.items.length>0),Je=(()=>{if(!ct.length)return null;let A=ct[0].start_date,Z=ct[0].end_date;return ct.forEach(Te=>{Te.start_date<A&&(A=Te.start_date),Te.end_date>Z&&(Z=Te.end_date)}),{start:Bo(A),end:Bo(Z)}})(),G=(()=>{if(!Je)return[];const A=[];for(let Z=Je.start.getTime();Z<=Je.end.getTime();Z+=Fi)A.push(new Date(Z));return A})(),ve=G.length,Lt=(()=>{const A=[];return G.forEach(Z=>{const Te=`${Z.getFullYear()}-${Z.getMonth()}`,Ne=A[A.length-1];Ne&&Ne.key===Te?Ne.days++:A.push({key:Te,label:`${Xr[Z.getMonth()]} '${String(Z.getFullYear()).slice(2)}`,days:1})}),A})(),Nt=new Date;Nt.setHours(0,0,0,0);const sr=Je?Math.round((Nt-Je.start)/Fi):-1,Cr=sr>=0&&sr<ve,Cn=A=>Math.round((Bo(A.end_date)-Bo(A.start_date))/Fi)+1,zr=L==="month",on=Je?Je.start.getFullYear():0,lr=Je?Je.start.getMonth():0,eo=(()=>{if(!Je)return[];const A=[];let Z=on,Te=lr;const Ne=Je.end.getFullYear(),rt=Je.end.getMonth();for(;Z<Ne||Z===Ne&&Te<=rt;)A.push({y:Z,m:Te}),Te++,Te>11&&(Te=0,Z++);return A})(),zn=eo.length||1,bi=(A,Z)=>{const Te=Bo(A),Ne=(Te.getFullYear()-on)*12+Te.getMonth()-lr,rt=new Date(Te.getFullYear(),Te.getMonth()+1,0).getDate();return Ne+(Te.getDate()-(Z?0:1))/rt},hi=(A,Z)=>bi(A,Z)/zn*100,Sa=`${Nt.getFullYear()}-${String(Nt.getMonth()+1).padStart(2,"0")}-${String(Nt.getDate()).padStart(2,"0")}`,$=Je?hi(Sa,!1):0,Ee=(q?qi:0)+sr*Ht,ot=Je?`${Je.start.getTime()}-${Je.end.getTime()}`:"";return g.useEffect(()=>{if(zr||!Cr)return;const A=S.current;A&&(A.scrollLeft=Math.max(0,Ee-A.clientWidth/2+Ht/2))},[ot,sr,q,Cr,zr]),t.jsxs("div",{style:be.page,children:[t.jsxs("div",{style:be.head,children:[t.jsx("div",{style:be.eyebrow,children:"Anvil · Goals"}),t.jsx("h1",{style:be.h1,children:ie?"All Goals":`${n} Goals`})]}),t.jsxs("div",{style:be.pillarPicker,children:[t.jsx("button",{onClick:()=>{o("All"),c(null),y(null)},style:{...be.pillarChip,...ie?{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:"All Goals"}),zi.map(A=>{const Z=A===n;return t.jsxs("button",{onClick:()=>{o(A),c(null),y(null)},style:{...be.pillarChip,...Z?{background:Tr[A].dot,color:"#fff",borderColor:Tr[A].dot}:{}},children:[t.jsx("span",{style:{...be.dot,background:Z?"#fff":Tr[A].dot}}),A]},A)})]}),t.jsxs("div",{style:be.list,children:[tt.map(A=>t.jsx(st,{goal:A,depth:0},A.id)),tt.length===0&&t.jsxs("div",{style:be.ganttEmpty,children:["No goals yet",ie?"":` for ${n}`,"."]}),d==="ROOT"&&t.jsx(Pe,{parentId:"ROOT",parentGoal:null,depth:0}),d!=="ROOT"&&t.jsxs("button",{onClick:()=>Rt("ROOT",null),style:be.rootAdd,children:[t.jsx(lt,{size:14})," Add new goal"]})]}),t.jsxs("div",{style:be.ganttWrap,children:[t.jsxs("div",{style:be.ganttTop,children:[t.jsxs("div",{style:be.ganttTitle,children:[zr?"Monthly":"Daily"," Timeline",Je?` · ${ep(Je.start)} – ${ep(Je.end)}`:""]}),t.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[t.jsxs("div",{style:be.zoomToggle,children:[t.jsx("button",{onClick:()=>he("day"),style:{...be.zoomBtn,...zr?{}:be.zoomBtnOn},children:"Day"}),t.jsx("button",{onClick:()=>he("month"),style:{...be.zoomBtn,...zr?be.zoomBtnOn:{}},children:"Month"})]}),t.jsxs("button",{onClick:()=>oe(A=>!A),style:be.labelToggle,children:[q?t.jsx(s0,{size:14}):t.jsx(l0,{size:14}),q?"Hide names":"Show names"]})]})]}),Je?zr?t.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[t.jsxs("div",{style:be.gBandRow,children:[q&&t.jsx("div",{style:{...be.gLabelHead,zIndex:4},children:"Goal"}),t.jsx("div",{style:{flex:1,display:"grid",gridTemplateColumns:`repeat(${zn}, 1fr)`,minWidth:0},children:eo.map((A,Z)=>t.jsxs("div",{style:be.gMonthFluid,children:[Xr[A.m],A.m===0||Z===0?` '${String(A.y).slice(2)}`:""]},Z))})]}),hr.map(A=>t.jsxs("div",{children:[t.jsxs("div",{style:be.gGroupRow,children:[q?t.jsxs("div",{style:be.gGroupLabel,children:[A.label,t.jsx("span",{style:be.gGroupCount,children:A.items.length})]}):t.jsxs("div",{style:be.gGroupChip,children:[A.label," · ",A.items.length]}),t.jsx("div",{style:{flex:1}})]}),A.items.map(Z=>{var mr;const Te=((mr=Tr[Z.pillar])==null?void 0:mr.dot)||"#9A968C",Ne=(Se==null?void 0:Se.id)===Z.id,rt=Ne?Se.dx:0,Ze=hi(Z.start_date,!1),et=Math.max(2,hi(Z.end_date,!0)-Ze),ht=Cn(Z),Ie=et>=14,Ot=`${Z.title} · ${Z.start_date} → ${Z.end_date} · ${ht} day${ht>1?"s":""}`;return t.jsxs("div",{style:be.gRow,children:[q&&t.jsxs("div",{style:{...be.gLabel,paddingLeft:12},children:[t.jsx("span",{style:{...be.ganttRowDot,background:Te}}),t.jsx("span",{style:{...be.gHzTag,color:Te,borderColor:Te},children:tp[Z.horizon]}),t.jsx("span",{style:be.gLabelText,title:Z.title,children:Z.title}),t.jsxs("span",{style:be.gDurChip,children:[ht,"d"]})]}),t.jsxs("div",{style:{position:"relative",flex:1,minHeight:36,minWidth:0,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent calc(100% / ${zn}))`},children:[Cr&&t.jsx("div",{style:{...be.gTodayLine,left:`${$}%`}}),t.jsxs("div",{onPointerDown:xt=>{xt.preventDefault(),W.current=xt.clientX;const to=xt.currentTarget.parentNode.offsetWidth;ue({id:Z.id,startX:xt.clientX,dx:0,g:Z,pxPerDay:to/ve})},style:{...be.gBar,left:`${Ze}%`,width:`${et}%`,background:Te,cursor:Ne?"grabbing":"grab",transform:rt?`translateX(${rt}px)`:"none",zIndex:Ne?6:1,boxShadow:Ne?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:Ot,children:[t.jsx(ql,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff"}}),Ie&&t.jsx("span",{style:be.gBarLabel,children:Z.title})]}),!Ie&&t.jsx("span",{style:{...be.gBarOutside,left:`calc(${Ze+et}% + 6px)`},title:Ot,children:Z.title})]})]},Z.id)})]},A.key))]}):t.jsx("div",{style:be.ganttScroll,ref:S,children:t.jsxs("div",{style:{minWidth:(q?qi:0)+ve*Ht,position:"relative"},children:[Cr&&t.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:Ee,width:Ht,background:"color-mix(in srgb, var(--accent) 14%, transparent)",pointerEvents:"none",zIndex:3}}),t.jsxs("div",{style:be.gBandRow,children:[q&&t.jsx("div",{style:{...be.gLabelHead,zIndex:4},children:"Goal"}),t.jsx("div",{style:{display:"flex"},children:Lt.map((A,Z)=>t.jsx("div",{style:{...be.gMonthCell,width:A.days*Ht},children:A.label},Z))})]}),t.jsxs("div",{style:be.gBandRow,children:[q&&t.jsx("div",{style:{...be.gLabelHead,zIndex:4,fontSize:10,color:"var(--text-3)",fontWeight:600},children:"days →"}),t.jsx("div",{style:{display:"flex"},children:G.map((A,Z)=>{const Te=A.getDay()===0||A.getDay()===6,Ne=Z===sr;return t.jsx("div",{style:{...be.gDayCell,...Te?be.gWeekend:{},...Ne?be.gTodayCell:{}},children:A.getDate()},Z)})})]}),hr.map(A=>t.jsxs("div",{children:[t.jsxs("div",{style:be.gGroupRow,children:[q?t.jsxs("div",{style:be.gGroupLabel,children:[A.label,t.jsx("span",{style:be.gGroupCount,children:A.items.length})]}):t.jsxs("div",{style:be.gGroupChip,children:[A.label," · ",A.items.length]}),t.jsx("div",{style:{width:ve*Ht,flexShrink:0}})]}),A.items.map(Z=>{var fi;const Te=((fi=Tr[Z.pillar])==null?void 0:fi.dot)||"#9A968C",Ne=Math.round((Bo(Z.start_date)-Je.start)/Fi),rt=Cn(Z),Ze=(Se==null?void 0:Se.id)===Z.id,et=Ze?Se.dx:0,ht=H0(Z),Ie=(U==null?void 0:U.id)===Z.id,Ot=ht?xc(Z):rt,mr=ht?op(Z):rt,xt=Ie?Math.max(Ot,Math.min(mr,rt+Math.round(U.dx/Ht))):rt,to=xt*Ht-4,mi=to>=54,Ge=`${Z.title} · ${Z.start_date} → ${Z.end_date} · ${xt} day${xt>1?"s":""}${ht?` (max ${mr})`:""}`;return t.jsxs("div",{style:be.gRow,children:[q&&t.jsxs("div",{style:{...be.gLabel,paddingLeft:12},children:[t.jsx("span",{style:{...be.ganttRowDot,background:Te}}),t.jsx("span",{style:{...be.gHzTag,color:Te,borderColor:Te},children:tp[Z.horizon]}),t.jsx("span",{style:be.gLabelText,title:Z.title,children:Z.title}),t.jsxs("span",{style:be.gDurChip,children:[xt,"d"]})]}),t.jsxs("div",{style:{...be.gTrack,width:ve*Ht},children:[Cr&&t.jsx("div",{style:{...be.gTodayLine,left:sr*Ht}}),t.jsxs("div",{onPointerDown:ro=>{ro.preventDefault(),W.current=ro.clientX,ue({id:Z.id,startX:ro.clientX,dx:0,g:Z,pxPerDay:Ht})},style:{...be.gBar,left:Ne*Ht+2,width:to,background:Te,cursor:Ze?"grabbing":"grab",transform:et?`translateX(${et}px)`:"none",zIndex:Ze||Ie?6:1,boxShadow:Ze||Ie?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:Ge,children:[ht&&xt>Ot&&t.jsx("div",{style:{position:"absolute",left:Ot*Ht,top:0,bottom:0,right:0,background:"#C2536B",borderRadius:"0 5px 5px 0"}}),t.jsx(ql,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff",position:"relative",zIndex:1}}),mi&&t.jsx("span",{style:{...be.gBarLabel,position:"relative",zIndex:1},children:Z.title}),ht&&t.jsx("div",{onPointerDown:ro=>{ro.preventDefault(),ro.stopPropagation(),de({id:Z.id,startX:ro.clientX,dx:0,g:Z})},style:be.resizeHandle,title:`Drag to extend up to ${mr} days`,children:t.jsx("div",{style:be.resizeGrip})})]}),!mi&&t.jsx("span",{style:{...be.gBarOutside,left:Ne*Ht+to+8+et},title:Ge,children:Z.title})]})]},Z.id)})]},A.key))]})}):t.jsx("div",{style:be.ganttEmpty,children:"No goals on the timeline. Click the eye icon on a goal to show it here."}),Je&&t.jsxs("div",{style:be.gLegend,children:[t.jsxs("span",{style:be.gLegendItem,children:[t.jsx("span",{style:{...be.gLegendBar}})," bar length = number of days"]}),t.jsxs("span",{style:be.gLegendItem,children:[t.jsx("span",{style:be.gLegendToday})," today"]})]})]}),O&&t.jsxs("div",{style:be.warnToast,children:[t.jsx(v0,{size:15,style:{flexShrink:0}}),t.jsx("span",{children:O})]}),t.jsx(br,{toasts:We,onUndo:qe,onDismiss:dt})]})}const be={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},pillarPicker:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},pillarChip:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},list:{background:"var(--surface)",borderRadius:12,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"hidden"},row:{display:"flex",alignItems:"center",gap:9,padding:"9px 10px",borderRadius:8,flexWrap:"nowrap"},caret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},horizonTag:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",border:"1px solid",borderRadius:5,padding:"2px 6px",flexShrink:0},nameCol:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:1},title:{fontSize:14,fontWeight:500,lineHeight:1.3,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",userSelect:"none",WebkitUserSelect:"none",cursor:"default"},titleFull:{whiteSpace:"normal",overflow:"visible",textOverflow:"clip",wordBreak:"break-word"},whenSub:{fontSize:11,fontStyle:"italic",color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},rowAdd:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,flexShrink:0},menuBackdrop:{position:"fixed",inset:0,zIndex:40},goalMenu:{position:"fixed",zIndex:41,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 6px 24px rgba(0,0,0,0.18)",padding:4,minWidth:180,display:"flex",flexDirection:"column"},menuItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:7,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text)",textAlign:"left"},rootAdd:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"var(--text-2)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"9px 12px",cursor:"pointer",fontWeight:600,fontFamily:"inherit",marginTop:6,width:"100%",justifyContent:"center"},addBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 0 6px 28px",flexWrap:"wrap"},editBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 10px",flexWrap:"wrap",background:"var(--bg)",borderRadius:8,margin:"4px 0"},input:{border:"1px solid var(--border)",borderRadius:7,padding:"8px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",flex:1,minWidth:120},monthSelect:{border:"1px solid var(--border)",borderRadius:7,padding:"8px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},inheritTag:{fontSize:11.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"6px 9px",borderRadius:7,flexShrink:0},toTag:{fontSize:11.5,fontWeight:600,color:"var(--text-3)",flexShrink:0},warnToast:{position:"fixed",top:18,left:"50%",transform:"translateX(-50%)",zIndex:300,display:"flex",alignItems:"center",gap:8,maxWidth:"90vw",background:"#C2536B",color:"#fff",padding:"10px 16px",borderRadius:10,fontSize:13,fontWeight:600,boxShadow:"0 6px 24px rgba(0,0,0,0.25)"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},ganttWrap:{background:"var(--surface)",borderRadius:12,padding:"16px 14px",marginTop:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},ganttTop:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10,marginBottom:14},ganttTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",fontFamily:"'Fraunces',Georgia,serif"},labelToggle:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 10px",borderRadius:8,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},zoomToggle:{display:"inline-flex",border:"1px solid var(--border)",borderRadius:8,overflow:"hidden"},zoomBtn:{border:"none",background:"var(--surface)",color:"var(--text-2)",padding:"5px 12px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},zoomBtnOn:{background:"var(--accent-strong)",color:"#fff"},gMonthFluid:{borderLeft:"1px solid var(--border)",fontSize:10,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gGroupChip:{position:"sticky",left:0,zIndex:3,background:"var(--surface-2)",padding:"5px 10px",fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",whiteSpace:"nowrap",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center"},ganttEmpty:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},ganttScroll:{overflowX:"auto"},ganttRowDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},gBandRow:{display:"flex",alignItems:"stretch",borderBottom:"1px solid var(--border)"},gLabelHead:{width:qi,flexShrink:0,position:"sticky",left:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",padding:"6px 10px",fontSize:12,fontWeight:700,color:"var(--text-2)"},gMonthCell:{flexShrink:0,borderLeft:"1px solid var(--border)",fontSize:10.5,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gDayCell:{width:Ht,flexShrink:0,textAlign:"center",fontSize:10,color:"var(--text-3)",padding:"4px 0",borderLeft:"1px solid var(--border)",fontWeight:600},gWeekend:{background:"var(--surface-2)"},gTodayCell:{background:"var(--hover)",color:"var(--accent)",fontWeight:800},gGroupRow:{display:"flex",alignItems:"stretch",background:"var(--surface-2)",borderBottom:"1px solid var(--border)",borderTop:"1px solid var(--border)"},gGroupLabel:{width:qi,flexShrink:0,position:"sticky",left:0,background:"var(--surface-2)",zIndex:3,padding:"6px 12px",fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",gap:7},gGroupCount:{fontSize:10,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},gHzTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.04em",border:"1px solid",borderRadius:4,padding:"1px 4px",flexShrink:0},gRow:{display:"flex",alignItems:"stretch",minHeight:36,borderBottom:"1px solid var(--border)"},gLabel:{width:qi,flexShrink:0,display:"flex",alignItems:"center",gap:7,position:"sticky",left:0,background:"var(--surface)",zIndex:2,borderRight:"1px solid var(--border)",paddingRight:8,overflow:"hidden"},gLabelText:{flex:1,minWidth:0,fontSize:12,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},gDurChip:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",borderRadius:10,padding:"1px 6px",flexShrink:0,marginRight:6},gTrack:{position:"relative",flexShrink:0,minHeight:36,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent ${Ht}px)`},gBar:{position:"absolute",top:9,height:18,borderRadius:5,display:"flex",alignItems:"center",padding:"0 7px",boxShadow:"0 1px 2px rgba(0,0,0,0.15)",overflow:"hidden",zIndex:1},gBarLabel:{fontSize:11,fontWeight:600,color:"#fff",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},gBarOutside:{position:"absolute",top:9,height:18,display:"flex",alignItems:"center",fontSize:11,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",pointerEvents:"none",zIndex:1},resizeHandle:{position:"absolute",right:0,top:0,bottom:0,width:12,cursor:"ew-resize",display:"grid",placeItems:"center",touchAction:"none",zIndex:2},resizeGrip:{width:2,height:11,background:"rgba(255,255,255,0.9)",borderRadius:1,boxShadow:"3px 0 0 rgba(255,255,255,0.6)"},gTodayLine:{position:"absolute",top:0,bottom:0,width:2,background:"#C2536B",zIndex:0,opacity:.6},gLegend:{display:"flex",gap:16,marginTop:12,fontSize:11,color:"var(--text-3)",flexWrap:"wrap"},gLegendItem:{display:"flex",alignItems:"center",gap:6,fontWeight:600},gLegendBar:{width:18,height:8,borderRadius:3,background:"var(--accent)",display:"inline-block"},gLegendToday:{width:2,height:12,background:"#C2536B",display:"inline-block"}},kn={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.12)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.12)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.12)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.12)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.12)"}},ei=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],V0=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ci=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Dg=()=>ci(new Date),Y0=(e=0)=>{const r=new Date,n=r.getDay(),o=n===0?-6:1-n,i=new Date(r);return i.setDate(r.getDate()+o+e*7),Array.from({length:7},(s,l)=>{const a=new Date(i);return a.setDate(i.getDate()+l),ci(a)})},K0=(e=0)=>{const r=new Date,n=new Date(r.getFullYear(),r.getMonth()+e,1),o=n.getFullYear(),i=n.getMonth(),s=new Date(o,i+1,0).getDate(),l=n.getDay(),a=l===0?6:l-1,d=Array.from({length:s},(h,f)=>`${o}-${String(i+1).padStart(2,"0")}-${String(f+1).padStart(2,"0")}`),c=n.toLocaleDateString("en-US",{month:"long",year:"numeric"});return{dates:d,startOffset:a,label:c,year:o,month:i}},ip=e=>new Date(e+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"}),Q0=(e,r)=>{var i;const n=Number(e==null?void 0:e.min_interval_min)||0;if(n<=0||r!==Dg())return 0;const o=(i=e.log_count_times)==null?void 0:i[r];return o?Math.max(0,new Date(o).getTime()+n*6e4-Date.now()):0},Bm=e=>{const r=Math.ceil(e/1e3);return`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`},Mn=Dg(),q0=new Date().getFullYear();function X0(){var ge,Ae;const[e,r]=g.useState([]),[n,o]=g.useState("ALL"),[i,s]=g.useState(!1),[l,a]=g.useState(!1),[d,c]=g.useState(!1),[h,f]=g.useState(null),[m,I]=g.useState(null),[B,z]=g.useState(null),[w,p]=g.useState({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week",days:[],min_interval_min:0}),[b,u]=g.useState(!1),[j,x]=g.useState([]),T=g.useCallback(()=>E.getHabits().then(r).catch(console.error),[]);g.useEffect(()=>{T()},[T]);const R=g.useCallback(Y=>{Y&&Y.id!=null&&r(ae=>ae.map(_=>_.id===Y.id?Y:_))},[]);g.useEffect(()=>{E.getSetting("habit_order").then(Y=>{Array.isArray(Y==null?void 0:Y.value)&&x(Y.value)}).catch(()=>{})},[]);const k=g.useMemo(()=>j.length?[...e].sort((Y,ae)=>{const _=j.indexOf(Y.id),ne=j.indexOf(ae.id);return _===-1&&ne===-1?0:_===-1?1:ne===-1?-1:_-ne}):e,[e,j]),y=g.useMemo(()=>k.filter(Y=>Y.active!==!1),[k]);g.useEffect(()=>{n!=="ALL"&&e.some(Y=>Y.id===n&&Y.active===!1)&&o("ALL")},[e,n]);const K=async Y=>{x(Y),await E.setSetting("habit_order",Y),u(!1)},q=async(Y,ae)=>{R(await E.updateHabit(Y,{active:ae}))};g.useEffect(()=>{const Y=()=>{const ae=window.innerWidth<720;s(ae),ae||a(!1)};return Y(),window.addEventListener("resize",Y),()=>window.removeEventListener("resize",Y)},[]);const{deleteItem:oe,toasts:L,handleUndo:he,handleDismiss:Se}=pr(E.deleteHabit,E.restoreHabit,T),ue=Y=>{o(Y),i&&a(!1)},ke=(Y,ae)=>{(Y.type==="minimum"||Y.type==="maximum")&&Y.period==="day"?Q0(Y,ae)>0?z(_=>_&&_.habitId===Y.id&&_.date===ae?null:{habitId:Y.id,date:ae}):I({habit:Y,date:ae}):se(Y.id,ae)},se=async(Y,ae)=>{R(await E.toggleHabitLog(Y,ae))},U=async(Y,ae,_,ne)=>{try{R(await E.setHabitLogCount(Y,ae,_,ne)),I(null)}catch(xe){alert(xe.message||"Could not save.")}},de=async(Y,ae)=>{R(await E.clearHabitLog(Y,ae)),I(null)},X=Y=>{var ae;return!B||B.habitId!==Y.id?null:t.jsx(ev,{habit:Y,date:B.date,onSave:async _=>{var ne;try{await E.setHabitLogCount(Y.id,B.date,_,((ne=Y.log_notes)==null?void 0:ne[B.date])??"").then(R)}catch(xe){alert(xe.message||"Could not save.")}},onOpen:()=>{z(null),I({habit:Y,date:B.date})},onClose:()=>z(null)},B.date+":"+(((ae=Y.log_count_times)==null?void 0:ae[B.date])||""))},S=async()=>{if(!w.name.trim())return;const Y=w.type==="minimum"||w.type==="maximum",ae=w.type==="weekly";if(ae&&w.days.length===0)return;const _={name:w.name.trim(),pillar:w.pillar,target_per_week:Number(w.target_per_week)||7,type:w.type,target_count:Y?Number(w.target_count)||1:null,period:Y?w.period:null,days:ae?w.days:null,min_interval_min:Y&&w.period==="day"&&Number(w.min_interval_min)||0};await E.createHabit(_),p({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week",days:[],min_interval_min:0}),c(!1),T()},W=async(Y,ae)=>{n===Y&&o("ALL"),oe(Y,ae)},O=e.find(Y=>Y.id===n),N=Y=>new Set(Y.logs||[]),le={...H.sidebar,...i?H.sidebarOverlay:{},...i&&!l?H.sidebarHidden:{}};return t.jsxs("div",{style:H.shell,children:[i&&l&&t.jsx("div",{style:H.backdrop,onClick:()=>a(!1)}),t.jsxs("aside",{style:le,children:[t.jsxs("div",{style:H.sideTop,children:[t.jsx("div",{style:H.brand,children:"Anvil · Habits"}),i&&t.jsx("button",{onClick:()=>a(!1),style:H.closeBtn,children:t.jsx(De,{size:18})})]}),t.jsxs("div",{style:{...H.sideItem,...n==="ALL"?H.sideItemOn:{},cursor:"default",padding:"2px 6px 2px 10px"},children:[t.jsxs("button",{onClick:()=>ue("ALL"),style:{display:"flex",alignItems:"center",gap:9,flex:1,border:"none",background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:n==="ALL"?600:500,color:"var(--text-2)",padding:"7px 0"},children:[t.jsx(Sg,{size:15}),t.jsx("span",{style:H.sideLabel,children:"All Habits"}),t.jsx("span",{style:H.sideCount,children:e.length})]}),t.jsx("button",{onClick:Y=>{Y.stopPropagation(),u(!0)},style:H.tinyBtn,title:"Reorder habits",children:t.jsx(vt,{size:12})})]}),t.jsx("div",{style:H.sideDivider}),y.map(Y=>{var ne;const ae=n===Y.id,_=((ne=kn[Y.pillar])==null?void 0:ne.dot)||"#9A968C";return t.jsxs("button",{onClick:()=>ue(Y.id),style:{...H.sideItem,...ae?H.sideItemOn:{}},children:[t.jsx("span",{style:{...H.sideDot,background:_}}),t.jsx("span",{style:H.sideLabel,children:Y.name}),t.jsxs("span",{style:H.sideStreak,children:[t.jsx(jn,{size:11})," ",Y.streak]})]},Y.id)}),d?t.jsx(Z0,{habit:w,onChange:p,onSave:S,onCancel:()=>c(!1)}):t.jsxs("button",{onClick:()=>c(!0),style:H.sideNewBtn,children:[t.jsx(lt,{size:13})," New habit"]})]}),t.jsxs("main",{style:H.main,children:[i&&t.jsxs("button",{onClick:()=>a(!0),style:H.hamburger,children:[t.jsx(Cg,{size:18}),t.jsx("span",{style:H.hamburgerLabel,children:n==="ALL"?"All Habits":O==null?void 0:O.name})]}),n==="ALL"?t.jsx(rv,{habits:y,dayAction:ke,logSet:N,onDelete:W,onEdit:Y=>f(Y),isMobile:i,onOpenHabit:ue,renderInline:X}):t.jsx(ov,{habit:O,dayAction:ke,logSet:N,onDelete:()=>W(O.id,O.name),onEdit:()=>f(O),onToggleActive:q,renderInline:X,setNote:(Y,ae)=>E.setHabitLogNote(O.id,Y,ae).then(R)}),n==="ALL"&&t.jsx(lv,{year:q0})]}),b&&t.jsx(sv,{habits:k,onSave:K,onToggleActive:q,onClose:()=>u(!1)}),h&&t.jsx(J0,{habit:h,onSave:async Y=>{await E.updateHabit(h.id,Y),f(null),T()},onClose:()=>f(null)}),m&&t.jsx(tv,{habit:m.habit,date:m.date,initialCount:((ge=m.habit.log_counts)==null?void 0:ge[m.date])??0,initialNote:((Ae=m.habit.log_notes)==null?void 0:Ae[m.date])??"",onSave:(Y,ae)=>U(m.habit.id,m.date,Y,ae),onClear:()=>de(m.habit.id,m.date),onClose:()=>I(null)}),t.jsx(br,{toasts:L,onUndo:he,onDismiss:Se})]})}function Rm({days:e,onToggle:r}){return t.jsx("div",{style:H.dayPick,children:ei.map((n,o)=>t.jsx("button",{type:"button",onClick:()=>r(o),style:{...H.dayChip,...e.includes(o)?H.dayChipOn:{}},children:n},n))})}function Z0({habit:e,onChange:r,onSave:n,onCancel:o}){const i=e.type==="minimum"||e.type==="maximum",s=e.type==="weekly",l=a=>r(d=>({...d,days:d.days.includes(a)?d.days.filter(c=>c!==a):[...d.days,a].sort((c,h)=>c-h)}));return t.jsxs("div",{style:H.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"Habit name",value:e.name,onChange:a=>r(d=>({...d,name:a.target.value})),onKeyDown:a=>a.key==="Enter"&&n(),style:H.sideInput}),t.jsx("select",{value:e.pillar,onChange:a=>r(d=>({...d,pillar:a.target.value})),style:H.sideInput,children:Object.keys(kn).map(a=>t.jsx("option",{children:a},a))}),t.jsxs("select",{value:e.type,onChange:a=>r(d=>({...d,type:a.target.value})),style:H.sideInput,children:[t.jsx("option",{value:"regular",children:"Regular (yes/no)"}),t.jsx("option",{value:"weekly",children:"Weekly (specific days)"}),t.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),t.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),s&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:H.pickHint,children:"Do this on…"}),t.jsx(Rm,{days:e.days,onToggle:l})]}),i&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{display:"flex",gap:6},children:[t.jsx("input",{type:"number",min:1,placeholder:"N",value:e.target_count||"",onChange:a=>r(d=>({...d,target_count:a.target.value})),style:{...H.sideInput,width:60}}),t.jsx("select",{value:e.period,onChange:a=>r(d=>({...d,period:a.target.value})),style:H.sideInput,children:["day","week","month","year"].map(a=>t.jsx("option",{children:a},a))})]}),e.period==="day"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:H.pickHint,children:"Min gap between entries (minutes)"}),t.jsx("input",{type:"number",min:0,placeholder:"0",value:e.min_interval_min??0,onChange:a=>r(d=>({...d,min_interval_min:a.target.value})),style:H.sideInput})]})]}),t.jsxs("div",{style:{display:"flex",gap:6},children:[t.jsx("button",{onClick:n,style:H.sideAddBtn,children:t.jsx(He,{size:13})}),t.jsx("button",{onClick:o,style:H.sideCancelBtn,children:t.jsx(De,{size:13})})]})]})}function J0({habit:e,onSave:r,onClose:n}){const[o,i]=g.useState(e.name),[s,l]=g.useState(e.pillar||"Health"),[a,d]=g.useState(e.type||"regular"),[c,h]=g.useState(e.target_count||""),[f,m]=g.useState(e.period||"week"),[I,B]=g.useState(e.reminder_time||""),[z,w]=g.useState(e.days||[]),[p,b]=g.useState(e.min_interval_min??0),u=a==="minimum"||a==="maximum",j=a==="weekly",x=R=>w(k=>k.includes(R)?k.filter(y=>y!==R):[...k,R].sort((y,K)=>y-K)),T=()=>{j&&z.length===0||r({name:o.trim(),pillar:s,type:a,target_count:u?Number(c):null,period:u?f:null,days:j?z:[],reminder_time:I||null,min_interval_min:u&&f==="day"&&Number(p)||0})};return t.jsx("div",{style:H.modalOverlay,onClick:n,children:t.jsxs("div",{style:H.modal,onClick:R=>R.stopPropagation(),children:[t.jsxs("div",{style:H.modalHead,children:["Edit Habit",t.jsx("button",{onClick:n,style:H.closeBtn,children:t.jsx(De,{size:16})})]}),t.jsx("label",{style:H.modalLabel,children:"Name"}),t.jsx("input",{value:o,onChange:R=>i(R.target.value),style:H.sideInput}),t.jsx("label",{style:H.modalLabel,children:"Pillar"}),t.jsx("select",{value:s,onChange:R=>l(R.target.value),style:H.sideInput,children:Object.keys(kn).map(R=>t.jsx("option",{value:R,children:R},R))}),t.jsx("label",{style:H.modalLabel,children:"Type"}),t.jsxs("select",{value:a,onChange:R=>d(R.target.value),style:H.sideInput,children:[t.jsx("option",{value:"regular",children:"Regular (yes/no)"}),t.jsx("option",{value:"weekly",children:"Weekly (specific days)"}),t.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),t.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),j&&t.jsxs(t.Fragment,{children:[t.jsx("label",{style:H.modalLabel,children:"Days"}),t.jsx(Rm,{days:z,onToggle:x})]}),u&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[t.jsx("input",{type:"number",min:1,value:c,onChange:R=>h(R.target.value),style:{...H.sideInput,width:70}}),t.jsx("select",{value:f,onChange:R=>m(R.target.value),style:H.sideInput,children:["day","week","month","year"].map(R=>t.jsx("option",{children:R},R))})]}),f==="day"&&t.jsxs(t.Fragment,{children:[t.jsx("label",{style:H.modalLabel,children:"Min gap between entries (minutes)"}),t.jsx("input",{type:"number",min:0,value:p,onChange:R=>b(R.target.value),style:H.sideInput})]})]}),t.jsx("label",{style:H.modalLabel,children:"Reminder time"}),t.jsx("input",{type:"time",value:I,onChange:R=>B(R.target.value),style:H.sideInput}),t.jsx("button",{onClick:T,style:{...H.sideAddBtn,width:"100%",marginTop:10,height:36},children:"Save"})]})})}function ev({habit:e,date:r,onSave:n,onOpen:o,onClose:i}){var j,x,T;const[s,l]=g.useState(Date.now()),a=((j=e.log_counts)==null?void 0:j[r])??0,[d,c]=g.useState(a),h=Number(e.min_interval_min)||0,f=e.target_count,m=(x=e.log_count_times)==null?void 0:x[r],I=m?new Date(m).getTime()+h*6e4:0,B=Math.max(0,I-s);g.useEffect(()=>{const R=window.setInterval(()=>l(Date.now()),1e3);return()=>window.clearInterval(R)},[]);const z=d>=a+1||B>0,w=d<=0,p=d!==a,b=((T=kn[e.pillar])==null?void 0:T.dot)||"#9A968C",u=e.type==="minimum"?d>=f:d>0&&d<=f;return t.jsxs("div",{style:H.inlineCounter,children:[t.jsxs("span",{style:{...H.inlineCount,color:u?"#4C9A6B":b},children:[d,t.jsxs("span",{style:H.inlineTarget,children:["/",f]})]}),t.jsx("button",{onClick:()=>!w&&c(R=>Math.max(0,R-1)),disabled:w,style:{...H.inlinePlus,...w?{opacity:.45,cursor:"not-allowed"}:{}},children:"−"}),t.jsx("button",{onClick:()=>!z&&c(R=>R+1),disabled:z,style:{...H.inlinePlus,...z?{opacity:.45,cursor:"not-allowed"}:{background:b,borderColor:b,color:"#fff"}},title:B>0?"Wait for the interval":d>=a+1?"Press Set to confirm":"Stage an entry",children:"+"}),t.jsx("button",{onClick:()=>n(d),disabled:!p,style:{...H.inlineSet,...p?{background:b,borderColor:b,color:"#fff"}:{opacity:.5,cursor:"not-allowed"}},children:"Set"}),B>0?t.jsxs("span",{style:H.inlineWait,children:["Wait ",Bm(B)]}):t.jsx("span",{style:H.inlineReady,children:p?"Press Set to confirm":"Tap + to add"}),t.jsx("button",{onClick:o,style:H.inlineMore,title:"Open details",children:"⋯"}),t.jsx("button",{onClick:i,style:H.inlineMore,title:"Hide",children:t.jsx(De,{size:13})})]})}function tv({habit:e,date:r,initialCount:n,initialNote:o,onSave:i,onClear:s,onClose:l}){var Se;const a=n??0,[d,c]=g.useState(a),[h,f]=g.useState(o??""),[m,I]=g.useState(Date.now()),B=e.target_count,z=e.type==="minimum"?d>=B:d>0&&d<=B,w=e.type==="maximum"&&d>B,p=z?"#4C9A6B":w?"#C2536B":"#C2773B",b=z?"✓ Goal met":w?"Over the limit":"Not met yet",u=Number(e.min_interval_min)||0,j=r===Dg(),x=u>0&&j,T=(Se=e.log_count_times)==null?void 0:Se[r],R=x&&T?new Date(T).getTime()+u*6e4:0,k=Math.max(0,R-m);g.useEffect(()=>{if(!x||k<=0)return;const ue=window.setInterval(()=>I(Date.now()),1e3);return()=>window.clearInterval(ue)},[x,k]);const y=d-a,K=x&&(d>=a+1||k>0),q=d<=0,oe=()=>{K||c(ue=>ue+1)},L=()=>{q||c(ue=>Math.max(0,ue-1))},he=d!==a||h!==(o??"");return t.jsx("div",{style:H.modalOverlay,onClick:l,children:t.jsxs("div",{style:H.modal,onClick:ue=>ue.stopPropagation(),children:[t.jsxs("div",{style:H.modalHead,children:[e.name,t.jsx("button",{onClick:l,style:H.closeBtn,children:t.jsx(De,{size:16})})]}),t.jsxs("div",{style:{fontSize:12,color:"var(--text-3)",marginBottom:2},children:[r," · ",e.type==="minimum"?`at least ${B}`:`no more than ${B}`," / ",e.period,u>0&&t.jsxs(t.Fragment,{children:[" · ",u,"m between entries"]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:20,margin:"14px 0 6px"},children:[t.jsx("button",{onClick:L,disabled:q,style:{...H.counterBtn,...q?{opacity:.45,cursor:"not-allowed"}:{}},children:"−"}),t.jsx("span",{style:{fontSize:38,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:52,textAlign:"center",color:p},children:d}),t.jsx("button",{onClick:oe,disabled:K,style:{...H.counterBtn,...K?{opacity:.45,cursor:"not-allowed"}:{}},title:x&&k>0?"Wait for the interval before the next entry":x&&d>=a+1?"Press Set to confirm this entry":void 0,children:"+"})]}),x&&k>0&&t.jsxs("div",{style:{textAlign:"center",fontSize:12,fontWeight:700,color:"#C2773B",marginBottom:8},children:["Wait ",Bm(k)," before the next entry"]}),x&&k<=0&&t.jsx("div",{style:{textAlign:"center",fontSize:11.5,color:"var(--text-3)",marginBottom:8},children:y>0?"Press Set to confirm this entry":`Tap + to add an entry (each at least ${u}m apart)`}),t.jsx("div",{style:{textAlign:"center",fontSize:12.5,fontWeight:700,color:p,marginBottom:12},children:b}),t.jsx("textarea",{value:h,onChange:ue=>f(ue.target.value),placeholder:"Add a comment (optional)…",style:{...H.sideInput,minHeight:56,resize:"vertical"}}),t.jsxs("div",{style:{display:"flex",gap:8,marginTop:10},children:[t.jsxs("button",{onClick:s,style:{...H.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[t.jsx(De,{size:14})," Delete"]}),t.jsxs("button",{onClick:()=>i(d,h),disabled:!he,style:{...H.sideAddBtn,flex:1,justifyContent:"center",height:38,...he?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:14})," Set"]})]})]})})}function Ja({pct:e,label:r,sub:n,color:o}){const s=2*Math.PI*26,l=s*(1-Math.max(0,Math.min(100,e))/100);return t.jsxs("div",{style:H.ringStat,children:[t.jsxs("div",{style:H.ringBox,children:[t.jsxs("svg",{width:"70",height:"70",viewBox:"0 0 70 70",children:[t.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:"var(--border)",strokeWidth:"7"}),t.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:o,strokeWidth:"7",strokeLinecap:"round",strokeDasharray:s,strokeDashoffset:l,transform:"rotate(-90 35 35)",style:{transition:"stroke-dashoffset 0.5s ease"}})]}),t.jsxs("div",{style:{...H.ringPct,color:o},children:[e,"%"]})]}),t.jsxs("div",{children:[t.jsx("div",{style:H.ringLabel,children:r}),t.jsx("div",{style:H.ringSub,children:n})]})]})}function rv({habits:e,dayAction:r,logSet:n,onDelete:o,onEdit:i,renderInline:s,isMobile:l,onOpenHabit:a}){const[d,c]=g.useState(0),[h,f]=g.useState(null),[m,I]=g.useState(!1);g.useEffect(()=>{E.getSetting("habit_show_names").then(S=>{typeof(S==null?void 0:S.value)=="boolean"&&I(S.value)}).catch(()=>{})},[]);const B=()=>I(S=>{const W=!S;return E.setSetting("habit_show_names",W).catch(()=>{}),W&&f(null),W}),z=Y0(d),w=`${ip(z[0])} – ${ip(z[6])}${d===0?" · This week":""}`,p=S=>{const W=new Date(S+"T00:00:00"),O=W.getDay(),N=new Date(W);return N.setDate(W.getDate()+(O===0?-6:1-O)),Array.from({length:7},(le,ge)=>{const Ae=new Date(N);return Ae.setDate(N.getDate()+ge),ci(Ae)})},b=S=>S.logs||[],u=(S,W)=>S.type==="minimum"&&S.period==="week"&&W.filter(O=>n(S).has(O)).length>=(S.target_count||0),j=(S,W)=>S.type==="minimum"&&S.period==="month"&&b(S).filter(O=>O.slice(0,7)===W).length>=(S.target_count||0),x=(S,W)=>S.type==="minimum"&&S.period==="year"&&b(S).filter(O=>O.slice(0,4)===W).length>=(S.target_count||0),T=(S,W)=>{var O;if((S.type==="minimum"||S.type==="maximum")&&S.period==="day"){const N=(O=S.log_counts)==null?void 0:O[W];return N==null?!1:S.type==="minimum"?N>=(S.target_count||0):N>0&&N<=(S.target_count||0)}return n(S).has(W)},R=(S,W)=>S.type!=="minimum"?!1:S.period==="week"?u(S,p(W)):S.period==="month"?j(S,W.slice(0,7)):S.period==="year"?x(S,W.slice(0,4)):!1,k=(S,W)=>T(S,W)||R(S,W),y=e.filter(S=>k(S,Mn)).length,K=e.length?Math.round(y/e.length*100):0,q=S=>{if(S.type==="minimum"&&S.period==="month"&&(j(S,z[0].slice(0,7))||j(S,z[6].slice(0,7)))||S.type==="minimum"&&S.period==="year"&&(x(S,z[0].slice(0,4))||x(S,z[6].slice(0,4)))||S.type==="minimum"&&S.period==="week"&&u(S,z))return 1;if((S.type==="minimum"||S.type==="maximum")&&S.period==="day")return Math.min(1,z.filter(le=>T(S,le)).length/7);const W=n(S),O=z.filter(le=>W.has(le)).length,N=S.type==="minimum"&&S.period==="week"?S.target_count||1:S.target_per_week||7;return N>0?Math.min(1,O/N):0},oe=e.length?Math.round(e.reduce((S,W)=>S+q(W),0)/e.length*100):0,L=new Date,he=`${L.getFullYear()}-${String(L.getMonth()+1).padStart(2,"0")}`,Se=new Date(L.getFullYear(),L.getMonth()+1,0).getDate(),ue=Se/7,ke=S=>{if(S.type==="minimum"&&S.period==="month"&&j(S,he)||S.type==="minimum"&&S.period==="year"&&x(S,he.slice(0,4)))return 1;if((S.type==="minimum"||S.type==="maximum")&&S.period==="day"){let N=0;for(let le=1;le<=Se;le++)T(S,`${he}-${String(le).padStart(2,"0")}`)&&N++;return Math.min(1,N/Se)}const W=b(S).filter(N=>N.slice(0,7)===he).length;let O;return S.type==="minimum"&&S.period==="week"?O=(S.target_count||1)*ue:S.type==="minimum"&&S.period==="month"?O=S.target_count||1:S.type==="minimum"&&S.period==="year"?O=(S.target_count||1)/12:O=(S.target_per_week||7)*ue,O>0?Math.min(1,W/O):0},se=e.length?Math.round(e.reduce((S,W)=>S+ke(W),0)/e.length*100):0,U=S=>{const W=new Date;return W.setDate(W.getDate()+S),ci(W)},de=S=>e.filter(W=>k(W,S)).length,X=[{label:"Today",value:de(U(0)),color:"#4C9A6B"},{label:"Yesterday",value:de(U(-1)),color:"var(--text-3)"},{label:"Day before",value:de(U(-2)),color:"var(--text-3)"}];return t.jsxs("div",{children:[t.jsxs("div",{style:H.mainHead,children:[t.jsx("div",{style:H.eyebrow,children:"Weekly view"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,flexWrap:"wrap"},children:[t.jsx("h1",{style:H.h1,children:"All Habits"}),l&&e.length>0&&t.jsxs("button",{onClick:B,style:H.nameToggle,title:m?"Hide habit names — tap a circle to reveal one":"Show all habit names",children:[t.jsx("span",{style:{...H.nameToggleTrack,background:m?"#4C9A6B":"var(--border)"},children:t.jsx("span",{style:{...H.nameToggleKnob,left:m?19:3}})}),m?t.jsx(fs,{size:13}):t.jsx(Ql,{size:13}),t.jsx("span",{children:"Names"})]})]})]}),t.jsxs("div",{style:H.navBar,children:[t.jsx("button",{onClick:()=>c(S=>S-1),style:H.navBtn,children:t.jsx(Sn,{size:16})}),t.jsx("span",{style:H.navLabel,children:w}),t.jsx("button",{onClick:()=>c(S=>Math.min(0,S+1)),disabled:d>=0,style:{...H.navBtn,...d>=0?H.navBtnDisabled:{}},children:t.jsx(nn,{size:16})})]}),t.jsxs("div",{style:{...H.weekCard,...l?H.weekCardMobile:{}},children:[t.jsxs("div",{style:{...H.weekHeadRow,...l?H.weekRowMobile:{}},children:[t.jsx("div",{style:{...H.weekNameCol,...l?H.weekNameColMobile:{}}}),ei.map((S,W)=>t.jsxs("div",{style:H.weekDayHead,children:[t.jsx("span",{style:H.weekDayName,children:S}),t.jsx("span",{style:{...H.weekDayNum,...z[W]===Mn?H.weekDayToday:{}},children:new Date(z[W]+"T00:00").getDate()})]},S)),t.jsx("div",{style:{...H.weekStreakCol,...l?H.weekStreakColMobile:{}},children:l?t.jsx(jn,{size:12}):"Streak"})]}),e.map(S=>{var qe,dt;const W=((qe=kn[S.pillar])==null?void 0:qe.dot)||"#9A968C",O=((dt=kn[S.pillar])==null?void 0:dt.soft)||"rgba(0,0,0,0.05)",N=n(S),le=S.type==="weekly",ge=new Set(S.days||[]),Ae=[0,1,2,3,4,5,6].filter($e=>ge.has($e)),Y=le&&Ae.length>0&&Ae.every($e=>N.has(z[$e])),ae=le?Array(7).fill(Y):null,_=S.type==="minimum"&&["week","month","year"].includes(S.period),ne=S.target_count||0,xe=S.logs||[],D=$e=>xe.filter(nt=>nt.slice(0,7)===$e).length,v=$e=>xe.filter(nt=>nt.slice(0,4)===$e).length,re=z.filter($e=>N.has($e)).length,F=$e=>_?S.period==="week"?re>=ne:S.period==="month"?D($e.slice(0,7))>=ne:S.period==="year"?v($e.slice(0,4))>=ne:!1:!1,ce=_&&z.some(F),ye=S.period==="week"?re:S.period==="month"?D(z[0].slice(0,7)):S.period==="year"?v(z[0].slice(0,4)):0,We=h===S.id;return t.jsxs(g.Fragment,{children:[l&&(We||m)&&t.jsxs("button",{onClick:()=>a&&a(S.id),style:{...H.mobileNameBanner,color:W},children:[t.jsx("span",{style:{...H.sideDot,background:W}}),t.jsx("span",{style:H.mobileNameText,children:S.name}),S.type==="weekly"?t.jsx("span",{style:H.typeBadge,children:(S.days||[]).map($e=>ei[$e]).join("·")||"—"}):S.type!=="regular"?t.jsx("span",{style:H.typeBadge,children:S.type==="minimum"?`≥${S.target_count}/${S.period}`:`≤${S.target_count}/${S.period}`}):null]}),t.jsxs("div",{style:{...H.weekRow,...l?H.weekRowMobile:{}},children:[l?t.jsx("div",{style:{...H.weekNameCol,...H.weekNameColMobile},children:t.jsx("button",{onClick:()=>f(We?null:S.id),style:{...H.habitAvatar,background:W},title:S.name,children:(S.name||"?").trim().charAt(0).toUpperCase()})}):t.jsxs("div",{style:{...H.weekNameCol,flexDirection:"column",alignItems:"flex-start",gap:2},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[t.jsx("span",{style:{...H.sideDot,background:W}}),t.jsx("span",{style:H.weekHabitName,children:S.name})]}),S.type==="weekly"?t.jsx("span",{style:H.typeBadge,children:(S.days||[]).map($e=>ei[$e]).join("·")||"—"}):S.type!=="regular"?t.jsx("span",{style:H.typeBadge,children:S.type==="minimum"?`≥${S.target_count}/${S.period}`:`≤${S.target_count}/${S.period}`}):null]}),z.map(($e,nt)=>{var ft,Rt;if(le&&!ge.has(nt))return t.jsxs("div",{style:{...H.weekCell,position:"relative",zIndex:0},children:[ae[nt]&&t.jsx("span",{style:{...H.chainLine,background:W,left:ae[nt-1]?0:"50%",right:ae[nt+1]?0:"50%"}}),t.jsx("span",{style:{...H.offDay,position:"relative",zIndex:1},title:"Not scheduled",children:"·"})]},$e);const Ke=N.has($e),gt=$e>Mn,ie=(S.type==="minimum"||S.type==="maximum")&&S.period==="day",Me=(ft=S.log_counts)==null?void 0:ft[$e],Xe=Me!=null,tt=!!((Rt=S.log_notes)!=null&&Rt[$e]),bt=F($e),It=nt>0&&F(z[nt-1]),Bt=nt<z.length-1&&F(z[nt+1]),mt=Ke||bt;return t.jsxs("div",{style:{...H.weekCell,position:"relative",zIndex:0},children:[bt&&t.jsx("span",{style:{...H.chainLine,background:W,left:It?0:"50%",right:Bt?0:"50%"}}),le&&ae[nt]&&t.jsx("span",{style:{...H.chainLine,background:W,left:ae[nt-1]?0:"50%",right:ae[nt+1]?0:"50%"}}),t.jsx("button",{disabled:gt,onClick:()=>r(S,$e),style:{...H.tick,...mt?{background:W,borderColor:W,color:"#fff"}:{},...ie&&Xe&&!Ke?{borderColor:W,color:W}:{},...gt&&!mt?H.tickFuture:{}},children:ie?Xe?t.jsx("span",{style:{fontSize:12,fontWeight:700},children:Me}):null:Ke&&t.jsx(He,{size:14,color:"#fff",strokeWidth:3})}),tt&&t.jsx("span",{style:H.cellNoteBubble})]},$e)}),t.jsx("div",{style:{...H.weekStreakCol,...l?H.weekStreakColMobile:{}},children:Y?t.jsxs("span",{style:{...H.streakPill,...l?H.streakPillMobile:{},background:O,color:W},children:[t.jsx(vs,{size:12})," ",l?Ae.length:`${Ae.length}/${Ae.length}`]}):ce?t.jsxs("span",{style:{...H.streakPill,...l?H.streakPillMobile:{},background:O,color:W},children:[t.jsx(vs,{size:12})," ",l?ye:`${ye}/${ne}`]}):t.jsxs("span",{style:{...H.streakPill,...l?H.streakPillMobile:{},background:O,color:W},children:[t.jsx(jn,{size:12})," ",S.streak]})})]}),s&&s(S)]},S.id)}),e.length===0&&t.jsx("div",{style:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},children:"No habits yet — add one from the sidebar."})]}),e.length>0&&t.jsxs("div",{style:{...H.progressCard,marginTop:18,marginBottom:0},children:[t.jsx(Ja,{pct:K,label:"Today",sub:`${y}/${e.length} done`,color:"#4C9A6B"}),t.jsx("div",{style:H.progressDivider}),t.jsx(Ja,{pct:oe,label:"This week",sub:"of weekly targets",color:"#3A7CA5"}),t.jsx("div",{style:H.progressDivider}),t.jsx(Ja,{pct:se,label:"This month",sub:"of monthly targets",color:"#8268B0"})]}),e.length>0&&t.jsxs("div",{style:{...H.progressCard,marginTop:14,marginBottom:0,flexDirection:"column",alignItems:"stretch",gap:12},children:[t.jsx("div",{style:H.threeDayTitle,children:"Last 3 days · habits completed"}),t.jsx(nv,{items:X,total:e.length})]})]})}function nv({items:e,total:r}){const n=Math.max(1,r,...e.map(o=>o.value));return t.jsx("div",{style:H.tbWrap,children:e.map((o,i)=>t.jsxs("div",{style:H.tbRow,children:[t.jsx("div",{style:H.tbLbl,children:o.label}),t.jsx("div",{style:H.tbTrack,children:t.jsx("div",{style:{...H.tbBar,width:`${o.value/n*100}%`,background:o.color}})}),t.jsxs("div",{style:H.tbVal,children:[o.value,"/",r]})]},i))})}function ov({habit:e,dayAction:r,logSet:n,onDelete:o,onEdit:i,setNote:s,onToggleActive:l,renderInline:a}){var Ae,Y;const[d,c]=g.useState(null),[h,f]=g.useState(""),[m,I]=g.useState(null),[B,z]=g.useState(0),w=g.useRef(null);if(!e)return null;const p=((Ae=kn[e.pillar])==null?void 0:Ae.dot)||"#9A968C",b=((Y=kn[e.pillar])==null?void 0:Y.soft)||"rgba(0,0,0,0.05)",u=n(e),j=e.type==="weekly",x=new Set(e.days||[]),T=ae=>(new Date(ae+"T00:00").getDay()+6)%7,R=ae=>!j||x.has(T(ae)),k=ae=>{const _=new Date(ae+"T00:00"),ne=_.getDay(),xe=new Date(_);xe.setDate(_.getDate()+(ne===0?-6:1-ne));const D=Array.from({length:7},(F,ce)=>{const ye=new Date(xe);return ye.setDate(xe.getDate()+ce),ci(ye)}),v=[0,1,2,3,4,5,6].filter(F=>x.has(F)),re=v.length>0&&v.every(F=>u.has(D[F]));return Array(7).fill(re)},{dates:y,startOffset:K,label:q,year:oe}=K0(B),L=y.filter(ae=>ae<=Mn&&R(ae)&&u.has(ae)).length,he=y.filter(ae=>ae<=Mn&&R(ae)).length,Se=he>0?Math.round(L/he*100):0,ue=e.type==="minimum"&&(e.period==="month"||e.period==="year"),ke=e.period==="year"?(e.logs||[]).filter(ae=>ae.startsWith(`${oe}-`)).length:y.filter(ae=>u.has(ae)).length,se=ue&&ke>=(e.target_count||0),U=e.type==="minimum"&&e.period==="week",de=e.target_count||0,X=ae=>{const _=new Date(ae+"T00:00"),ne=_.getDay(),xe=new Date(_);xe.setDate(_.getDate()+(ne===0?-6:1-ne));let D=0;for(let v=0;v<7;v++){const re=new Date(xe);re.setDate(xe.getDate()+v),u.has(ci(re))&&D++}return D},S=ae=>ue?se:U?X(ae)>=de:!1,W=U?X(Mn):0,O=U&&W>=de,N=ae=>{w.current=setTimeout(()=>c(ae),500)},le=()=>clearTimeout(w.current),ge=ae=>{var _;I(ae),f(((_=e.log_notes)==null?void 0:_[ae])||""),c(null)};return t.jsxs("div",{children:[t.jsxs("div",{style:H.mainHead,children:[t.jsxs("div",{children:[t.jsxs("div",{style:H.eyebrow,children:[t.jsx("span",{style:{...H.sideDot,background:p,marginRight:6}}),e.pillar," · Monthly view"]}),t.jsx("h1",{style:H.h1,children:e.name})]}),t.jsxs("div",{style:{display:"flex",gap:8,marginTop:8,flexWrap:"wrap"},children:[t.jsxs("button",{onClick:i,style:H.actionBtn,children:[t.jsx(vt,{size:14})," Edit"]}),t.jsx("button",{onClick:()=>l(e.id,e.active===!1),style:{...H.actionBtn,...e.active===!1?{color:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:e.active===!1?t.jsxs(t.Fragment,{children:[t.jsx(He,{size:14})," Enable"]}):t.jsxs(t.Fragment,{children:[t.jsx(u0,{size:14})," Disable"]})}),t.jsxs("button",{onClick:o,style:{...H.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[t.jsx(De,{size:14})," Delete"]}),e.reminder_time&&t.jsxs("button",{style:H.actionBtn,children:[t.jsx(kg,{size:14})," ",e.reminder_time]})]})]}),t.jsxs("div",{style:H.statStrip,children:[t.jsx(no,{label:"Current streak",value:`${e.streak} days`,c:p,soft:b,flame:!0}),t.jsx(no,{label:"Best streak",value:`${e.max_streak??e.streak} days`,c:p,soft:b,flame:!0}),t.jsx(no,{label:"Done this month",value:`${L}/${he}`,c:p,soft:b}),t.jsx(no,{label:"Completion",value:`${Se}%`,c:p,soft:b}),e.type==="regular"?t.jsx(no,{label:"Weekly target",value:`${e.target_per_week}×`,c:p,soft:b}):e.type==="weekly"?t.jsx(no,{label:"Days",value:(e.days||[]).map(ae=>ei[ae]).join(", ")||"—",c:p,soft:b}):t.jsx(no,{label:e.type==="minimum"?"Min target":"Max allowed",value:`${e.target_count}/${e.period}`,c:p,soft:b})]}),a&&a(e),t.jsxs("div",{style:H.navBar,children:[t.jsx("button",{onClick:()=>z(ae=>ae-1),style:H.navBtn,children:t.jsx(Sn,{size:16})}),t.jsxs("span",{style:H.navLabel,children:[q,B===0?" · This month":""]}),t.jsx("button",{onClick:()=>z(ae=>Math.min(0,ae+1)),disabled:B>=0,style:{...H.navBtn,...B>=0?H.navBtnDisabled:{}},children:t.jsx(nn,{size:16})})]}),ue&&t.jsxs("div",{style:{...H.chainBanner,background:se?b:"var(--bg)",color:se?p:"var(--text-3)"},children:[t.jsx(vs,{size:15}),se?`${e.period==="year"?"Yearly":"Monthly"} chain complete — ${ke}/${e.target_count} connected`:`${ke}/${e.target_count} this ${e.period} · ${(e.target_count||0)-ke} more to connect the chain`]}),U&&B===0&&t.jsxs("div",{style:{...H.chainBanner,background:O?b:"var(--bg)",color:O?p:"var(--text-3)"},children:[t.jsx(vs,{size:15}),O?`This week's chain complete — ${W}/${de} connected`:`${W}/${de} this week · ${Math.max(0,de-W)} more to connect the chain`]}),t.jsxs("div",{style:H.monthCard,children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[t.jsx("div",{style:H.monthTitle,children:q}),t.jsx("span",{style:{fontSize:11,color:"var(--text-3)"},children:"Long-press a day for options"})]}),t.jsx("div",{style:H.monthDow,children:ei.map(ae=>t.jsx("div",{style:H.monthDowCell,children:ae},ae))}),t.jsxs("div",{style:H.monthGrid,children:[Array.from({length:K}).map((ae,_)=>t.jsx("div",{},`pad${_}`)),y.map((ae,_)=>{var $e,nt;const ne=_+1;if(j&&!R(ae)){const Ke=T(ae),gt=k(ae),ie=(K+_)%7;return t.jsxs("div",{style:{position:"relative"},children:[gt[Ke]&&t.jsx("span",{style:{...H.chainLine,background:p,...ie===0?{left:"50%"}:{left:gt[Ke-1]?-6:"50%"},...ie===6?{right:"50%"}:{right:gt[Ke+1]?-6:"50%"}}}),t.jsx("div",{style:{...H.monthDay,...H.monthDayOff,width:"100%",position:"relative",zIndex:1},children:ne})]},ae)}const xe=u.has(ae),D=ae>Mn,v=ae===Mn,re=!!(($e=e.log_notes)!=null&&$e[ae]),F=(e.type==="minimum"||e.type==="maximum")&&e.period==="day",ce=(nt=e.log_counts)==null?void 0:nt[ae],ye=ce!=null,We=S(ae),qe=We&&!xe,dt=(K+_)%7;return t.jsxs("div",{style:{position:"relative"},children:[We&&t.jsx("span",{style:{...H.chainLine,background:p,...dt===0?{left:"50%"}:{left:-6},...dt===6?{right:"50%"}:{right:-6}}}),j&&(()=>{const Ke=T(ae),gt=k(ae);return gt[Ke]?t.jsx("span",{style:{...H.chainLine,background:p,...dt===0?{left:"50%"}:{left:gt[Ke-1]?-6:"50%"},...dt===6?{right:"50%"}:{right:gt[Ke+1]?-6:"50%"}}}):null})(),t.jsx("button",{disabled:D,onClick:()=>r(e,ae),onMouseDown:()=>!F&&N(ae),onMouseUp:le,onTouchStart:()=>!F&&N(ae),onTouchEnd:le,style:{...H.monthDay,position:"relative",zIndex:1,...xe?{background:p,borderColor:p,color:"#fff"}:{},...qe?{background:b,borderColor:p,color:p}:{},...F&&ye&&!xe?{borderColor:p,color:p}:{},...D&&!xe?H.monthDayFuture:{},...v&&!xe?{borderColor:p,borderWidth:2}:{},width:"100%"},children:ne}),F&&ye&&t.jsx("span",{style:{...H.countBadge,background:xe?"#4C9A6B":p},children:ce}),re&&t.jsx("span",{style:H.noteIndicator}),d===ae&&t.jsx(iv,{onEdit:i,onDelete:o,onAddNote:()=>ge(ae),onRemind:i,onClose:()=>c(null)})]},ae)})]})]}),m&&t.jsxs("div",{style:H.noteBox,children:[t.jsxs("div",{style:{fontWeight:600,fontSize:13,marginBottom:6},children:["Note for ",m]}),t.jsx("textarea",{value:h,onChange:ae=>f(ae.target.value),placeholder:"Add a note for this day…",style:{...H.sideInput,minHeight:60,resize:"vertical"}}),t.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[t.jsxs("button",{onClick:()=>{s(m,h),I(null)},style:H.sideAddBtn,children:[t.jsx(He,{size:13})," Save"]}),t.jsx("button",{onClick:()=>I(null),style:H.sideCancelBtn,children:t.jsx(De,{size:13})})]})]})]})}function iv({onEdit:e,onDelete:r,onAddNote:n,onRemind:o,onClose:i}){return t.jsxs("div",{style:H.longPressMenu,children:[t.jsxs("button",{style:H.menuItem,onClick:()=>{e(),i()},children:[t.jsx(vt,{size:13})," Edit"]}),t.jsxs("button",{style:H.menuItem,onClick:()=>{n(),i()},children:[t.jsx(wg,{size:13})," Add note"]}),t.jsxs("button",{style:H.menuItem,onClick:()=>{o(),i()},children:[t.jsx(kg,{size:13})," Remind"]}),t.jsxs("button",{style:{...H.menuItem,color:"#C2536B"},onClick:()=>{r(),i()},children:[t.jsx(De,{size:13})," Delete"]})]})}function sv({habits:e,onSave:r,onToggleActive:n,onClose:o}){const[i,s]=g.useState(()=>e.map(c=>c.id)),l=g.useMemo(()=>{const c={};return e.forEach(h=>c[h.id]=h),c},[e]),a=i.map(c=>l[c]).filter(Boolean),d=(c,h)=>{const f=c+h;if(f<0||f>=i.length)return;const m=[...i];[m[c],m[f]]=[m[f],m[c]],s(m)};return t.jsx("div",{style:H.modalOverlay,onClick:o,children:t.jsxs("div",{style:{...H.modal,maxHeight:"80vh",overflow:"hidden"},onClick:c=>c.stopPropagation(),children:[t.jsxs("div",{style:{...H.modalHead,flexShrink:0},children:["Edit Habits",t.jsx("button",{onClick:o,style:H.closeBtn,children:t.jsx(De,{size:16})})]}),t.jsx("p",{style:{fontSize:12,color:"var(--text-3)",margin:"0 0 10px",flexShrink:0},children:"Reorder with the arrows. Toggle a habit off to hide it from your views (its history is kept)."}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6,overflowY:"auto",minHeight:0},children:a.map((c,h)=>{var I;const f=((I=kn[c.pillar])==null?void 0:I.dot)||"#9A968C",m=c.active!==!1;return t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"9px 10px",background:"var(--bg)",borderRadius:9,border:"1px solid var(--border)",opacity:m?1:.5},children:[t.jsx("span",{style:{...H.sideDot,background:f}}),t.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500,textDecoration:m?"none":"line-through"},children:c.name}),t.jsx("button",{onClick:()=>n(c.id,!m),title:m?"Disable (hide) habit":"Enable habit",style:{...H.activeToggle,...m?H.activeToggleOn:{}},role:"switch","aria-checked":m,children:t.jsx("span",{style:{...H.activeKnob,...m?H.activeKnobOn:{}}})}),t.jsx("button",{onClick:()=>d(h,-1),disabled:h===0,style:{...H.navBtn,width:28,height:28,opacity:h===0?.3:1,fontSize:14},children:"↑"}),t.jsx("button",{onClick:()=>d(h,1),disabled:h===a.length-1,style:{...H.navBtn,width:28,height:28,opacity:h===a.length-1?.3:1,fontSize:14},children:"↓"})]},c.id)})}),t.jsxs("button",{onClick:()=>r(i),style:{...H.sideAddBtn,width:"100%",marginTop:14,height:38,justifyContent:"center",flexShrink:0},children:[t.jsx(He,{size:14})," Save Order"]})]})})}function lv({year:e}){const[r,n]=g.useState([]);if(g.useEffect(()=>{E.getHabitsYearly(e).then(n).catch(console.error)},[e]),!r.length)return null;const o=Array.from({length:12},(s,l)=>{const a=r.reduce((c,h)=>{var f;return c+(((f=h.monthly[l+1])==null?void 0:f.done)||0)},0),d=r.reduce((c,h)=>{var f;return c+Math.floor((((f=h.monthly[l+1])==null?void 0:f.days)||30)/7*7)},0);return d>0?Math.round(a/d*100):0}),i=Math.max(...o,1);return t.jsxs("div",{style:{...H.monthCard,marginTop:18},children:[t.jsxs("div",{style:H.monthTitle,children:[e," Completion"]}),t.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:6,height:80,marginTop:12},children:o.map((s,l)=>t.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[t.jsx("div",{style:{width:"100%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",height:`${s/i*60}px`,minHeight:2,opacity:s>0?1:.15},title:`${s}%`}),t.jsx("span",{style:{fontSize:9,color:"var(--text-3)",fontWeight:600},children:V0[l]})]},l))})]})}function no({label:e,value:r,c:n,soft:o,flame:i}){return t.jsxs("div",{style:{...H.stat,background:o},children:[t.jsx("div",{style:H.statLabel,children:e}),t.jsxs("div",{style:{...H.statValue,color:n},children:[i&&t.jsx(jn,{size:15})," ",r]})]})}const H={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:230,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",padding:"20px 12px",display:"flex",flexDirection:"column",gap:3,overflowY:"auto"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.18)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)",boxShadow:"none"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.38)",zIndex:20},sideTop:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 4px"},closeBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",marginBottom:8},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700,padding:"0 6px 14px"},sideItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"9px 10px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:500,color:"var(--text-2)",textAlign:"left"},sideItemOn:{background:"var(--hover)",fontWeight:600},sideLabel:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},sideCount:{fontSize:11,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:10,padding:"1px 7px"},sideStreak:{display:"flex",alignItems:"center",gap:3,fontSize:11,fontWeight:600,color:"#C2773B"},sideDot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},sideDivider:{height:1,background:"var(--border)",margin:"8px 6px"},addBox:{padding:"10px 6px",display:"flex",flexDirection:"column",gap:6},sideInput:{border:"1px solid var(--border)",borderRadius:7,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},sideAddBtn:{border:"none",background:"#4C9A6B",color:"#fff",height:30,padding:"0 12px",borderRadius:7,cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontSize:13,fontFamily:"inherit"},sideCancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:30,height:30,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},sideNewBtn:{display:"flex",alignItems:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",borderRadius:8,padding:"8px 10px",fontSize:12.5,color:"var(--text-3)",fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginTop:6,justifyContent:"center"},main:{flex:1,padding:"26px",overflowX:"hidden",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:200},mainHead:{marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:5,display:"flex",alignItems:"center"},h1:{fontSize:27,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},actionBtn:{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:500,color:"var(--text-2)",border:"1px solid var(--border)",background:"var(--surface)",padding:"5px 10px",borderRadius:7,cursor:"pointer",fontFamily:"inherit"},progressCard:{background:"var(--surface)",borderRadius:12,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14,display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"},progressDivider:{width:1,alignSelf:"stretch",background:"var(--border)",minHeight:48},threeDayTitle:{fontSize:13,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:84,fontSize:11.5,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap"},tbTrack:{flex:1,height:14,background:"var(--surface-2)",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:52,fontSize:11.5,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"},ringStat:{display:"flex",alignItems:"center",gap:12,flex:"1 1 160px"},ringBox:{position:"relative",width:70,height:70,display:"grid",placeItems:"center",flexShrink:0},ringPct:{position:"absolute",inset:0,display:"grid",placeItems:"center",fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},ringLabel:{fontSize:14,fontWeight:700,color:"var(--text)"},ringSub:{fontSize:11.5,color:"var(--text-3)",fontWeight:500,marginTop:2},weekCard:{background:"var(--surface)",borderRadius:12,padding:"8px 14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"auto"},weekCardMobile:{padding:"8px 8px 12px",overflowX:"hidden"},weekHeadRow:{display:"flex",alignItems:"flex-end",padding:"10px 0",borderBottom:"1px solid var(--border)",minWidth:480,position:"relative",zIndex:0},weekRowMobile:{minWidth:0},weekNameCol:{width:160,flexShrink:0,alignSelf:"stretch",display:"flex",alignItems:"center",gap:8,position:"sticky",left:0,zIndex:5,background:"var(--surface)",boxShadow:"6px 0 6px -6px rgba(0,0,0,0.15)"},weekNameColMobile:{width:34,gap:0,boxShadow:"none",justifyContent:"center",position:"static"},weekStreakColMobile:{width:30},streakPillMobile:{padding:"3px 6px",gap:2},habitAvatar:{width:26,height:26,borderRadius:"50%",border:"none",color:"#fff",fontSize:12,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,lineHeight:1},mobileNameBanner:{display:"flex",alignItems:"center",gap:7,width:"100%",border:"none",background:"var(--hover)",borderRadius:8,padding:"6px 10px",margin:"4px 0 2px",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},mobileNameText:{fontSize:13,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},nameToggle:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:20,padding:"5px 11px 5px 5px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit",flexShrink:0},nameToggleTrack:{position:"relative",width:34,height:20,borderRadius:10,flexShrink:0,transition:"background 0.2s",display:"inline-block"},nameToggleKnob:{position:"absolute",top:3,width:14,height:14,borderRadius:"50%",background:"#fff",transition:"left 0.2s",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},weekDayHead:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2},weekDayName:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekDayNum:{fontSize:12,fontWeight:600,color:"var(--text-2)",width:22,height:22,display:"grid",placeItems:"center",borderRadius:"50%"},weekDayToday:{background:"var(--accent-strong)",color:"#fff"},weekStreakCol:{width:64,flexShrink:0,textAlign:"center",fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekRow:{display:"flex",alignItems:"center",padding:"9px 0",borderBottom:"1px solid #F4F2EC",minWidth:480,position:"relative",zIndex:0},weekHabitName:{fontSize:13,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},weekCell:{flex:1,display:"grid",placeItems:"center"},typeBadge:{fontSize:10,color:"var(--text-3)",background:"var(--hover)",padding:"1px 6px",borderRadius:8,fontWeight:600},tick:{width:26,height:26,borderRadius:7,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",padding:0,position:"relative",zIndex:1},tickFuture:{opacity:.4,cursor:"not-allowed",borderStyle:"dashed"},streakPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,fontWeight:700,padding:"3px 9px",borderRadius:12},tinyBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:"2px 3px",display:"grid",placeItems:"center",borderRadius:4},statStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:10,marginBottom:18},stat:{borderRadius:10,padding:"13px 14px"},statLabel:{fontSize:11,fontWeight:600,color:"var(--text-2)",marginBottom:5},statValue:{fontSize:19,fontWeight:700,display:"flex",alignItems:"center",gap:5,fontFamily:"'Fraunces',Georgia,serif"},monthCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},monthTitle:{fontSize:14,fontWeight:700,marginBottom:12,fontFamily:"'Fraunces',Georgia,serif"},monthDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:8},monthDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},monthGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6},monthDay:{aspectRatio:"1",border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",display:"grid",placeItems:"center"},monthDayFuture:{opacity:.4,cursor:"not-allowed",background:"var(--surface-2)"},monthDayOff:{background:"var(--surface-2)",borderStyle:"dashed",color:"var(--text-3)",opacity:.5,cursor:"default"},dayPick:{display:"flex",gap:4,flexWrap:"wrap"},dayChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:7,padding:"5px 7px",fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:"inherit",minWidth:34},dayChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},pickHint:{fontSize:11,color:"var(--text-3)",fontWeight:600},offDay:{color:"var(--text-3)",opacity:.4,fontSize:18,lineHeight:1,userSelect:"none"},noteIndicator:{position:"absolute",top:3,right:3,width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},cellNoteBubble:{position:"absolute",top:2,right:"calc(50% - 16px)",width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},countBadge:{position:"absolute",bottom:2,right:2,minWidth:13,height:13,padding:"0 2px",borderRadius:7,color:"#fff",fontSize:9,fontWeight:700,display:"grid",placeItems:"center",lineHeight:1},counterBtn:{width:44,height:44,borderRadius:"50%",border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:24,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1},inlineCounter:{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",margin:"2px 0 8px",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,flexWrap:"wrap"},inlineCount:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1},inlineTarget:{fontSize:12,fontWeight:600,color:"var(--text-3)",marginLeft:1},inlinePlus:{width:30,height:30,borderRadius:8,border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:18,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1,flexShrink:0},inlineSet:{height:30,padding:"0 12px",borderRadius:8,border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",flexShrink:0},inlineWait:{fontSize:12,fontWeight:700,color:"#C2773B"},inlineReady:{fontSize:12,fontWeight:700,color:"#4C9A6B"},inlineMore:{marginLeft:"auto",border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",fontSize:16,fontWeight:700,lineHeight:1},activeToggle:{position:"relative",width:38,height:22,borderRadius:11,border:"none",background:"var(--border)",cursor:"pointer",flexShrink:0,transition:"background 0.2s",padding:0},activeToggleOn:{background:"#4C9A6B"},activeKnob:{position:"absolute",top:3,left:3,width:16,height:16,borderRadius:"50%",background:"#fff",transition:"left 0.2s",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},activeKnobOn:{left:19},chainLine:{position:"absolute",top:"calc(50% - 3px)",left:0,right:0,height:6,zIndex:0,opacity:.9},chainBanner:{display:"flex",alignItems:"center",gap:8,borderRadius:10,padding:"10px 14px",marginBottom:14,fontSize:12.5,fontWeight:700,fontFamily:"'Inter',system-ui,sans-serif"},navBar:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:16},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},navLabel:{fontSize:13,fontWeight:700,color:"var(--text)",minWidth:180,textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},noteBox:{background:"var(--surface)",borderRadius:10,padding:14,marginTop:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},longPressMenu:{position:"absolute",top:"100%",left:0,zIndex:50,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 4px 16px rgba(0,0,0,0.12)",padding:"4px 0",minWidth:140},menuItem:{display:"flex",alignItems:"center",gap:8,width:"100%",border:"none",background:"none",padding:"8px 14px",fontSize:13,color:"var(--text)",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:100,display:"grid",placeItems:"center"},modal:{background:"var(--surface)",borderRadius:14,padding:24,width:320,maxWidth:"90vw",display:"flex",flexDirection:"column",gap:8},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:700,fontSize:16,fontFamily:"'Fraunces',Georgia,serif",marginBottom:6},modalLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4}},yc=[{id:1,label:"Rough",emoji:"😣",color:"#C2536B"},{id:2,label:"Low",emoji:"🙁",color:"#C2773B"},{id:3,label:"Okay",emoji:"😐",color:"#C9A227"},{id:4,label:"Good",emoji:"🙂",color:"#4C9A6B"},{id:5,label:"Great",emoji:"😄",color:"#3A7CA5"}],av=e=>yc.find(r=>r.id===e),ed=[{id:"wins",label:"Wins",hint:"What went well today?",icon:Yr,color:"#C9A227"},{id:"grateful",label:"Grateful for",hint:"1–3 things",icon:gm,color:"#C2536B"},{id:"mattered",label:"What mattered",hint:"The point of today",icon:Ig,color:"#3A7CA5"},{id:"letgo",label:"Letting go of",hint:"Offload what's draining",icon:C0,color:"#8268B0"},{id:"tomorrow",label:"Tomorrow's one thing",hint:"A single priority",icon:km,color:"#4C9A6B"}],Em=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,dv=()=>Em(new Date),td=e=>new Date(e+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"});function cv(){const e=dv(),[r,n]=[new Date().getFullYear(),new Date().getMonth()+1],[o,i]=g.useState(null),s=o||e,l=s===e,[a,d]=g.useState(null),[c,h]=g.useState({}),[f,m]=g.useState(Object.fromEntries(ed.map(y=>[y.id,""]))),I=g.useCallback(async y=>{const K=await E.getJournalEntry(y);d(K)},[]);g.useCallback(async()=>{const y=await E.getJournalHistory(r,n);h(y)},[r,n]);const B=g.useCallback(async()=>{const[y,K]=await Promise.all([E.getJournalEntry(s),E.getJournalHistory(r,n)]);d(y),h(K)},[s,r,n]);g.useEffect(()=>{B()},[B]);const z=async y=>{l&&(await E.updateJournalMood(s,y),B())},w=async y=>{if(!l)return;const K=f[y].trim();K&&(await E.addJournalBullet(s,y,K),m(q=>({...q,[y]:""})),I(s))},p=async y=>{await E.deleteJournalBullet(y),I(s)},b=y=>{i(y===e?null:y),m(Object.fromEntries(ed.map(K=>[K.id,""])))};if(!a)return t.jsx("div",{style:{padding:28,color:"var(--text-3)"},children:"Loading…"});const u=a.mood!==null,j=(()=>{let y=0;const K=new Date(e);if(c[e]||l&&u)y=1,K.setDate(K.getDate()-1);else return 0;for(;;){const oe=Em(K);if(c[oe])y++,K.setDate(K.getDate()-1);else break}return y})(),x=Object.values(a.bullets||{}).reduce((y,K)=>y+K.length,0),T=new Date(r,n,0).getDate(),R=new Date(r,n-1,1).getDay(),k=R===0?6:R-1;return t.jsxs("div",{style:it.page,children:[t.jsxs("div",{style:it.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:it.eyebrow,children:"Anvil · Journal"}),!l&&t.jsxs("button",{style:it.backBtn,onClick:()=>i(null),children:[t.jsx(Sn,{size:14})," Back to Today"]}),t.jsx("h1",{style:it.h1,children:l?"Today":td(s)}),l&&t.jsx("div",{style:it.date,children:td(e)})]}),t.jsxs("div",{style:it.streakBox,children:[t.jsx(jn,{size:16,color:"#C2773B"}),t.jsx("span",{style:it.streakNum,children:j}),t.jsx("span",{style:it.streakLabel,children:"day streak"})]})]}),t.jsxs("div",{style:it.card,children:[t.jsxs("div",{style:it.cardTitle,children:["How ",l?"are":"were"," you?"]}),t.jsx("div",{style:it.moodRow,children:yc.map(y=>{const K=a.mood===y.id;return t.jsxs("button",{onClick:()=>z(y.id),disabled:!l,style:{...it.moodBtn,cursor:l?"pointer":"default",...K?{background:y.color,borderColor:y.color,transform:"translateY(-2px)"}:{},...!l&&!K?{opacity:.55}:{}},children:[t.jsx("span",{style:it.moodEmoji,children:y.emoji}),t.jsx("span",{style:{...it.moodLabel,color:K?"#fff":"#6B675E"},children:y.label})]},y.id)})})]}),ed.map(y=>{var oe;const K=y.icon,q=((oe=a.bullets)==null?void 0:oe[y.id])||[];return t.jsxs("div",{style:it.card,children:[t.jsxs("div",{style:it.sectionHead,children:[t.jsx("span",{style:{...it.sectionIcon,background:`${y.color}1A`,color:y.color},children:t.jsx(K,{size:15})}),t.jsxs("div",{children:[t.jsx("div",{style:it.cardTitle,children:y.label}),t.jsx("div",{style:it.sectionHint,children:y.hint})]})]}),t.jsxs("ul",{style:it.bulletList,children:[q.map(L=>t.jsxs("li",{style:it.bullet,children:[t.jsx("span",{style:{...it.bulletDot,background:y.color}}),t.jsx("span",{style:it.bulletText,children:L.text}),l&&t.jsx("button",{onClick:()=>p(L.id),style:it.bulletDel,children:t.jsx(De,{size:13})})]},L.id)),!l&&q.length===0&&t.jsx("li",{style:it.sectionHint,children:"Nothing written."})]}),l&&t.jsxs("div",{style:it.addRow,children:[t.jsx("input",{placeholder:"Add a point…",value:f[y.id],onChange:L=>m(he=>({...he,[y.id]:L.target.value})),onKeyDown:L=>L.key==="Enter"&&w(y.id),style:it.input}),t.jsx("button",{onClick:()=>w(y.id),style:{...it.addBtn,background:y.color},children:t.jsx(lt,{size:16})})]})]},y.id)}),t.jsxs("div",{style:it.card,children:[t.jsxs("div",{style:it.cardTitle,children:[new Date(r,n-1).toLocaleDateString("en-US",{month:"long",year:"numeric"})," · Mood history",t.jsx("span",{style:{fontSize:11,color:"var(--text-3)",fontWeight:400,marginLeft:8},children:"tap a day to view"})]}),t.jsx("div",{style:it.calDow,children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(y=>t.jsx("div",{style:it.calDowCell,children:y},y))}),t.jsxs("div",{style:it.calGrid,children:[Array.from({length:k}).map((y,K)=>t.jsx("div",{},`p${K}`)),Array.from({length:T},(y,K)=>K+1).map(y=>{const K=`${r}-${String(n).padStart(2,"0")}-${String(y).padStart(2,"0")}`,q=K===e&&a.mood?a.mood:c[K],oe=q?av(q):null,L=K>e,he=K===s;return t.jsx("button",{onClick:()=>!L&&b(K),disabled:L,style:{...it.calDay,background:oe?oe.color:L?"var(--surface-2)":"var(--surface)",borderColor:he?"var(--accent-strong)":"var(--border)",borderWidth:he?2:1,color:oe?"#fff":"var(--text-3)",opacity:L?.5:1,cursor:L?"not-allowed":"pointer",outline:he?"2px solid var(--accent-strong)":"none",outlineOffset:1},title:oe?oe.label:K,children:oe?oe.emoji:y},y)})]}),t.jsx("div",{style:it.legend,children:yc.map(y=>t.jsxs("span",{style:it.legendItem,children:[t.jsx("span",{style:{...it.legendDot,background:y.color}})," ",y.label]},y.id))})]}),t.jsx("div",{style:it.footer,children:l?u?`Mood set · ${x} point${x===1?"":"s"} written today`:"Tap a mood to log today and keep your streak":`Viewing ${td(s)} · past entries are read-only`})]})}const it={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},backBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",background:"none",color:"#3A7CA5",fontSize:12.5,fontWeight:600,cursor:"pointer",padding:"0 0 6px",fontFamily:"inherit"},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},date:{fontSize:13,color:"var(--text-3)",marginTop:4},streakBox:{display:"flex",alignItems:"center",gap:6,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"8px 14px"},streakNum:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"#C2773B"},streakLabel:{fontSize:11,color:"var(--text-3)",fontWeight:500},card:{background:"var(--surface)",borderRadius:12,padding:"18px 20px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},cardTitle:{fontSize:14,fontWeight:700,marginBottom:12,color:"var(--text)"},moodRow:{display:"flex",gap:8,flexWrap:"wrap"},moodBtn:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,border:"2px solid var(--border)",background:"var(--surface)",borderRadius:10,padding:"10px 12px",cursor:"pointer",flex:"1 1 60px",transition:"transform 0.1s"},moodEmoji:{fontSize:22},moodLabel:{fontSize:11,fontWeight:600},sectionHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:10},sectionIcon:{width:32,height:32,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},sectionHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},bulletList:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6,marginBottom:10},bullet:{display:"flex",alignItems:"center",gap:8,fontSize:13.5,lineHeight:1.4},bulletDot:{width:6,height:6,borderRadius:"50%",flexShrink:0},bulletText:{flex:1},bulletDel:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},addRow:{display:"flex",gap:8},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",outline:"none"},addBtn:{width:36,height:36,border:"none",borderRadius:8,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:12},calDay:{aspectRatio:"1",border:"1px solid var(--border)",borderRadius:7,fontSize:13,display:"grid",placeItems:"center",fontWeight:500,fontFamily:"inherit"},legend:{display:"flex",gap:10,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)"},legendDot:{width:8,height:8,borderRadius:"50%",display:"inline-block"},footer:{fontSize:12.5,color:"var(--text-3)",textAlign:"center",marginTop:8,fontStyle:"italic"}};function gv(e=760){const[r,n]=g.useState(()=>window.innerWidth<e);return g.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const _r=[{id:"D",label:"Data",color:"#3A7CA5",soft:"rgba(58,124,165,0.10)",prompt:"What did you read/watch? Log the raw source and a quick note.",hint:"e.g. 'Atomic Habits ch.1 — habits are systems not goals'"},{id:"I",label:"Information",color:"#8268B0",soft:"rgba(130,104,176,0.10)",prompt:"What did you actually understand from it? In your own words.",hint:"e.g. 'Small 1% improvements compound into massive change over time'"},{id:"K",label:"Knowledge",color:"#C9A227",soft:"rgba(201,162,39,0.10)",prompt:"How will this specifically improve your life? Connect it to your goals.",hint:"e.g. 'I will improve my morning workout habit by 1% each week'"},{id:"W",label:"Wisdom",color:"#4C9A6B",soft:"rgba(76,154,107,0.10)",prompt:"How have you implemented it? What changed?",hint:"e.g. 'I've not missed a workout in 3 weeks using the 1% rule'"}],sp=e=>_r.findIndex(r=>r.id===e),vc=[{id:"book",label:"Book",icon:ya},{id:"video",label:"Video",icon:z0},{id:"article",label:"Article",icon:wg}],Zs=e=>vc.find(r=>r.id===e)||vc[0],rd={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"};function uv(){var re;const[e,r]=g.useState([]),[n,o]=g.useState(null),[i,s]=g.useState("ALL"),[l,a]=g.useState(!1),[d,c]=g.useState(null),[h,f]=g.useState({title:"",type:"book",pillar:"Academic",note:"",link:""}),[m,I]=g.useState(null),[B,z]=g.useState({}),[w,p]=g.useState(null),[b,u]=g.useState(null),[j,x]=g.useState({}),[T,R]=g.useState({}),[k,y]=g.useState(null),K=gv(),q=g.useCallback(async()=>{try{const F=await E.getSkills();r(F);const ce={};F.forEach(ye=>{ce[ye.id]=Object.fromEntries(_r.map(We=>[We.id,""]))}),z(ye=>{const We={...ce};return F.forEach(qe=>{ye[qe.id]&&(We[qe.id]={...ce[qe.id],...ye[qe.id]})}),We})}catch(F){console.error(F)}},[]);g.useEffect(()=>{q()},[q]);const oe=e.find(F=>F.id===n),L=oe?sp(oe.stage):-1,he=async(F,ce)=>{var We;const ye=(((We=B[F])==null?void 0:We[ce])??"").trim();ye&&(await E.addSkillNote(F,ce,ye),z(qe=>({...qe,[F]:{...qe[F],[ce]:""}})),q())},Se=async F=>{await E.deleteSkillNote(F),q()},ue=F=>(F==null?void 0:F.source_type)==="book"?"Chapter":"Learning",ke=()=>`g${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,se=async F=>{const ce=[...F.data_groups||[]];ce.push({id:ke(),label:`${ue(F)} ${ce.length+1}`}),await E.setSkillGroups(F.id,ce),R(ye=>({...ye,[ce[ce.length-1].id]:!0})),q()},U=async(F,ce,ye)=>{const We=(F.data_groups||[]).map(qe=>qe.id===ce?{...qe,label:ye}:qe);await E.setSkillGroups(F.id,We),q()},de=async(F,ce)=>{const ye=(F.data_groups||[]).filter(We=>We.id!==ce);await E.setSkillGroups(F.id,ye),q()},X=async(F,ce)=>{const ye=(j[ce]??"").trim();ye&&(await E.addSkillNote(F.id,"D",ye,ce),x(We=>({...We,[ce]:""})),q())},S=async()=>{!oe||!(b!=null&&b.trim())||(await E.updateSkill(oe.id,{title:b.trim()}),u(null),q())},W=async()=>{!w||!w.text.trim()||(await E.updateSkillNote(w.id,w.text.trim()),p(null),q())},O=async F=>{await E.toggleSkillNote(F),q()},N=async(F,ce)=>{e.find(We=>We.id===F)&&(ce==="W"&&c(F),await E.completeSkillStage(F,ce),q())},le=async()=>{if(!h.title.trim())return;const F=await E.createSkill({pillar:h.pillar,title:h.title.trim(),source_type:h.type,link:h.link.trim(),note_d:h.note.trim()});a(!1),f({title:"",type:"book",pillar:"Academic",note:"",link:""}),o(F.id),q()},ge=async()=>{oe&&(await E.updateSkill(oe.id,{link:(m||"").trim()}),I(null),q())},{deleteItem:Ae,toasts:Y,handleUndo:ae,handleDismiss:_}=pr(E.deleteSkill,E.restoreSkill,q),ne=(F,ce="Skill")=>{n===F&&o(null),Ae(F,ce)},xe=i==="ALL"?e:e.filter(F=>F.stage===i),D=e.filter(F=>F.stage==="W").length,v=!!oe;return t.jsxs("div",{style:me.page,children:[d&&t.jsx("div",{style:me.celebOverlay,children:t.jsxs("div",{style:me.celebBox,children:[t.jsx("div",{style:me.celebEmoji,children:"🏆"}),t.jsx("div",{style:me.celebTitle,children:"Wisdom unlocked!"}),t.jsx("div",{style:me.celebSub,children:"You've implemented this knowledge — that's rare and real."}),t.jsx("button",{onClick:()=>c(null),style:me.celebBtn,children:"Continue"})]})}),t.jsxs("div",{style:me.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:me.eyebrow,children:"Anvil · Skills"}),t.jsx("h1",{style:me.h1,children:"DIKW Skills"}),t.jsx("div",{style:me.subhead,children:"Data → Information → Knowledge → Wisdom"})]}),t.jsxs("div",{style:me.headRight,children:[t.jsxs("div",{style:me.wisdomBadge,children:[t.jsx(Yr,{size:14,color:"#C9A227"})," ",D," Wisdom",D!==1?"s":""]}),t.jsxs("button",{onClick:()=>{a(!0),o(null)},style:me.addSkillBtn,children:[t.jsx(lt,{size:15})," Add skill"]})]})]}),t.jsx("div",{style:me.filterBar,children:["ALL",..._r.map(F=>F.id)].map(F=>{const ce=_r.find(We=>We.id===F),ye=i===F;return t.jsx("button",{onClick:()=>s(F),style:{...me.filterBtn,...ye?{background:ce?ce.color:"var(--accent-strong)",color:"#fff",borderColor:"transparent"}:{}},children:ce?`${F} · ${ce.label}`:"All"},F)})}),t.jsxs("div",{style:{...me.layout,gridTemplateColumns:!K&&v?"minmax(0,1fr) minmax(0,1fr)":"1fr"},children:[(!K||!oe)&&t.jsxs("div",{style:{...me.cardList,gridTemplateColumns:K||v?"1fr":"repeat(3, minmax(0, 1fr))"},children:[l&&t.jsxs("div",{style:{...me.skillCard,border:"2px dashed #3A7CA5",gridColumn:"1 / -1"},children:[t.jsx("div",{style:me.cardTitle,children:"New skill"}),t.jsx("input",{placeholder:"Title (book / video / article name)",value:h.title,onChange:F=>f(ce=>({...ce,title:F.target.value})),onKeyDown:F=>F.key==="Enter"&&le(),style:me.input,autoFocus:!0}),t.jsxs("div",{style:me.addRow,children:[t.jsx("select",{value:h.type,onChange:F=>f(ce=>({...ce,type:F.target.value})),style:me.select,children:vc.map(F=>t.jsx("option",{value:F.id,children:F.label},F.id))}),t.jsx("select",{value:h.pillar,onChange:F=>f(ce=>({...ce,pillar:F.target.value})),style:me.select,children:Object.keys(rd).map(F=>t.jsx("option",{children:F},F))})]}),t.jsx("input",{placeholder:h.type==="book"?"Link (optional)":`${Zs(h.type).label} link (optional) — paste URL to route here`,value:h.link,onChange:F=>f(ce=>({...ce,link:F.target.value})),onKeyDown:F=>F.key==="Enter"&&le(),style:me.input}),t.jsxs("div",{style:me.addRow,children:[t.jsxs("button",{onClick:le,style:me.saveBtn,children:[t.jsx(He,{size:14})," Save"]}),t.jsxs("button",{onClick:()=>a(!1),style:me.cancelBtn,children:[t.jsx(De,{size:14})," Cancel"]})]})]}),xe.map(F=>{const ce=sp(F.stage),ye=_r[ce],We=Zs(F.source_type),qe=F.stage==="W",dt=n===F.id;return t.jsxs("div",{onClick:()=>o(dt?null:F.id),style:{...me.skillCard,...dt?{borderColor:ye.color,borderWidth:2}:{},...qe?{background:"rgba(76,154,107,0.05)"}:{}},children:[t.jsxs("div",{style:me.skillCardTop,children:[t.jsxs("div",{style:me.skillMeta,children:[t.jsx("span",{style:{color:rd[F.pillar]},children:t.jsx(We.icon,{size:13})}),t.jsx("span",{style:{...me.pillarDot,background:rd[F.pillar]}}),t.jsxs("span",{style:me.srcLabel,children:[We.label," · ",F.pillar]})]}),t.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[qe&&t.jsx(Co,{size:14,color:"#4C9A6B"}),F.link&&t.jsx("a",{href:F.link,target:"_blank",rel:"noreferrer",onClick:$e=>$e.stopPropagation(),style:me.ghostBtn,title:"Open source",children:t.jsx(cc,{size:13})}),t.jsx("button",{onClick:$e=>{$e.stopPropagation(),ne(F.id,F.title)},style:me.ghostBtn,children:t.jsx(De,{size:13})})]})]}),t.jsx("div",{style:me.skillTitle,children:F.title}),t.jsxs("div",{style:me.track,children:[_r.map(($e,nt)=>{var Me;const Ke=nt<ce,gt=nt===ce,ie=(Me=F.completed_stages)==null?void 0:Me[$e.id];return t.jsxs("div",{style:{...me.trackItem,...nt<_r.length-1?{flex:1}:{}},children:[t.jsxs("div",{style:{...me.trackDot,background:Ke||ie||gt?$e.color:"var(--border)",boxShadow:gt?`0 0 0 3px ${$e.color}33`:"none"},children:[(Ke||gt&&ie)&&t.jsx(He,{size:9,color:"#fff",strokeWidth:3}),gt&&!ie&&t.jsx("span",{style:me.trackCurrent,children:$e.id}),!Ke&&!gt&&t.jsx(Hu,{size:8,color:"#B5B1A7"})]}),nt<_r.length-1&&t.jsx("div",{style:{...me.trackLine,background:Ke?_r[nt+1].color:"var(--border)"}})]},$e.id)}),t.jsx("span",{style:{...me.stageTag,background:ye.soft,color:ye.color},children:ye.label})]})]},F.id)}),xe.length===0&&!l&&t.jsx("div",{style:{...me.empty,gridColumn:"1 / -1"},children:"No skills at this stage yet."})]}),oe&&t.jsxs("div",{style:me.detail,children:[t.jsxs("div",{style:me.detailHead,children:[K&&t.jsx("button",{onClick:()=>{o(null),u(null)},style:me.backBtn,title:"Back to skills",children:t.jsx(Sn,{size:18})}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsxs("div",{style:me.eyebrow,children:[Zs(oe.source_type).label," · ",oe.pillar]}),b!==null?t.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginTop:4},children:[t.jsx("input",{autoFocus:!0,value:b,onChange:F=>u(F.target.value),onKeyDown:F=>{F.key==="Enter"&&S(),F.key==="Escape"&&u(null)},style:{...me.input,fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:0,flex:1}}),t.jsx("button",{onClick:S,style:{...me.noteAddBtn,background:"#4C9A6B",width:30,height:30},children:t.jsx(He,{size:13})}),t.jsx("button",{onClick:()=>u(null),style:{...me.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:30,height:30},children:t.jsx(De,{size:13})})]}):t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[t.jsx("div",{style:me.detailTitle,children:oe.title}),t.jsx("button",{onClick:()=>u(oe.title),style:me.ghostBtn,title:"Edit name",children:t.jsx(vt,{size:13})})]}),m!==null?t.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginTop:6},children:[t.jsx("input",{autoFocus:!0,value:m,placeholder:"Paste the video / article URL",onChange:F=>I(F.target.value),onKeyDown:F=>{F.key==="Enter"&&ge(),F.key==="Escape"&&I(null)},style:{...me.input,marginBottom:0,flex:1}}),t.jsx("button",{onClick:ge,style:{...me.noteAddBtn,background:"#4C9A6B",width:30,height:30},children:t.jsx(He,{size:13})}),t.jsx("button",{onClick:()=>I(null),style:{...me.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:30,height:30},children:t.jsx(De,{size:13})})]}):t.jsx("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:6,flexWrap:"wrap"},children:oe.link?t.jsxs(t.Fragment,{children:[t.jsxs("a",{href:oe.link,target:"_blank",rel:"noreferrer",style:me.openLinkBtn,children:[t.jsx(cc,{size:13})," Open ",Zs(oe.source_type).label.toLowerCase()]}),t.jsx("button",{onClick:()=>I(oe.link),style:me.ghostBtn,title:"Edit link",children:t.jsx(vt,{size:12})})]}):t.jsxs("button",{onClick:()=>I(""),style:me.addLinkBtn,children:[t.jsx(vs,{size:12})," Add link"]})})]}),t.jsx("button",{onClick:()=>{o(null),u(null)},style:me.closeBtn,children:t.jsx(De,{size:16})})]}),_r.map((F,ce)=>{var Ke,gt,ie;const ye=ce<=L,We=ce===L,qe=ce<L||((Ke=oe.completed_stages)==null?void 0:Ke[F.id]),dt=ce>L,$e=((gt=oe.notes)==null?void 0:gt[F.id])||[],nt=((ie=B[oe.id])==null?void 0:ie[F.id])??"";return t.jsxs("div",{style:{...me.stageBlock,...ye?{borderColor:F.color}:{},opacity:dt?.45:1},children:[t.jsxs("div",{style:me.stageBlockHead,children:[t.jsx("div",{style:{...me.stageLetter,background:ye?F.color:"var(--border)",color:ye?"#fff":"#9A968C"},children:qe&&!We?t.jsx(He,{size:12,color:"#fff",strokeWidth:3}):dt?t.jsx(Hu,{size:11,color:"#9A968C"}):F.id}),t.jsxs("div",{style:{flex:1},children:[t.jsx("div",{style:{...me.stageName,color:ye?F.color:"#9A968C"},children:F.label}),ye&&t.jsx("div",{style:me.stagePrompt,children:F.prompt})]}),qe&&!We&&t.jsx("span",{style:{...me.doneBadge,color:F.color,background:F.soft},children:"Done"})]}),ye&&(()=>{var Rt,M;const Me=F.id==="W",Xe=F.id==="D",tt=$e.length>0&&$e.every(ee=>ee.done),bt=Me?tt:$e.length>0,It=oe.data_groups||[],Bt=$e.filter(ee=>!ee.grp),mt=ue(oe),ft=ee=>t.jsxs("li",{style:me.noteItem,children:[t.jsx("span",{style:{...me.noteDot,background:F.color}}),(w==null?void 0:w.id)===ee.id?t.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[t.jsx("input",{autoFocus:!0,value:w.text,onChange:Le=>p(Pe=>({...Pe,text:Le.target.value})),onKeyDown:Le=>{Le.key==="Enter"&&W(),Le.key==="Escape"&&p(null)},style:{...me.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),t.jsx("button",{onClick:W,style:{...me.noteAddBtn,background:F.color,width:28,height:28},children:t.jsx(He,{size:12})}),t.jsx("button",{onClick:()=>p(null),style:{...me.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:t.jsx(De,{size:12})})]}):t.jsx("span",{style:me.noteText,children:ee.text}),(w==null?void 0:w.id)!==ee.id&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>p({id:ee.id,text:ee.text}),style:me.ghostBtn,children:t.jsx(vt,{size:12})}),t.jsx("button",{onClick:()=>Se(ee.id),style:me.ghostBtn,children:t.jsx(De,{size:12})})]})]},ee.id);return t.jsxs(t.Fragment,{children:[Xe?t.jsxs(t.Fragment,{children:[Bt.length>0&&t.jsx("ul",{style:me.noteList,children:Bt.map(ft)}),It.map(ee=>{const Le=$e.filter(st=>st.grp===ee.id),Pe=T[ee.id]!==!1;return t.jsxs("div",{style:{...me.groupBox,borderColor:`${F.color}55`},children:[t.jsxs("div",{style:me.groupHead,children:[t.jsx("button",{onClick:()=>R(st=>({...st,[ee.id]:!Pe})),style:me.groupCaret,children:Pe?t.jsx(So,{size:15}):t.jsx(nn,{size:15})}),oe.source_type==="book"?t.jsx(ya,{size:13,color:F.color}):t.jsx(t0,{size:13,color:F.color}),(k==null?void 0:k.id)===ee.id?t.jsx("input",{autoFocus:!0,value:k.label,onChange:st=>y(ct=>({...ct,label:st.target.value})),onKeyDown:st=>{st.key==="Enter"&&(U(oe,ee.id,k.label.trim()||ee.label),y(null)),st.key==="Escape"&&y(null)},onBlur:()=>{U(oe,ee.id,k.label.trim()||ee.label),y(null)},style:{...me.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}):t.jsx("span",{style:me.groupTitle,onClick:()=>y({id:ee.id,label:ee.label}),title:"Click to rename",children:ee.label}),t.jsx("span",{style:me.groupCount,children:Le.length}),t.jsx("button",{onClick:()=>de(oe,ee.id),style:me.ghostBtn,title:`Delete ${mt.toLowerCase()}`,children:t.jsx(De,{size:13})})]}),Pe&&t.jsxs("div",{style:me.groupBody,children:[Le.length>0&&t.jsx("ul",{style:me.noteList,children:Le.map(ft)}),t.jsxs("div",{style:me.noteAddRow,children:[t.jsx("input",{placeholder:"Add a point…",value:j[ee.id]??"",onChange:st=>x(ct=>({...ct,[ee.id]:st.target.value})),onKeyDown:st=>st.key==="Enter"&&X(oe,ee.id),style:me.noteInput}),t.jsx("button",{onClick:()=>X(oe,ee.id),style:{...me.noteAddBtn,background:F.color},children:t.jsx(lt,{size:14})})]})]})]},ee.id)}),It.length===0&&Bt.length===0&&t.jsxs("div",{style:me.noNotes,children:["No ",mt.toLowerCase(),"s yet — add one to start logging points."]}),t.jsxs("button",{onClick:()=>se(oe),style:{...me.addGroupBtn,color:F.color,borderColor:`${F.color}80`},children:[t.jsx(lt,{size:14})," Add ",mt.toLowerCase()]})]}):t.jsxs(t.Fragment,{children:[$e.length>0&&t.jsx("ul",{style:me.noteList,children:$e.map(ee=>t.jsxs("li",{style:me.noteItem,children:[Me?t.jsx("button",{onClick:()=>O(ee.id),style:{...me.checkBox,...ee.done?{background:F.color,borderColor:F.color}:{}},children:ee.done&&t.jsx(He,{size:11,color:"#fff",strokeWidth:3})}):t.jsx("span",{style:{...me.noteDot,background:F.color}}),(w==null?void 0:w.id)===ee.id?t.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[t.jsx("input",{autoFocus:!0,value:w.text,onChange:Le=>p(Pe=>({...Pe,text:Le.target.value})),onKeyDown:Le=>{Le.key==="Enter"&&W(),Le.key==="Escape"&&p(null)},style:{...me.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),t.jsx("button",{onClick:W,style:{...me.noteAddBtn,background:F.color,width:28,height:28},children:t.jsx(He,{size:12})}),t.jsx("button",{onClick:()=>p(null),style:{...me.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:t.jsx(De,{size:12})})]}):t.jsx("span",{style:{...me.noteText,...Me&&ee.done?{textDecoration:"line-through",color:"var(--text-3)"}:{}},children:ee.text}),(w==null?void 0:w.id)!==ee.id&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>p({id:ee.id,text:ee.text}),style:me.ghostBtn,children:t.jsx(vt,{size:12})}),t.jsx("button",{onClick:()=>Se(ee.id),style:me.ghostBtn,children:t.jsx(De,{size:12})})]})]},ee.id))}),$e.length===0&&t.jsx("div",{style:me.noNotes,children:Me?"Add the steps to implement this — check each off as you do it.":`No notes yet — ${F.hint}`}),t.jsxs("div",{style:me.noteAddRow,children:[t.jsx("input",{placeholder:Me?"Add a step to implement…":`Add a ${F.label} note…`,value:nt,onChange:ee=>z(Le=>({...Le,[oe.id]:{...Le[oe.id],[F.id]:ee.target.value}})),onKeyDown:ee=>ee.key==="Enter"&&he(oe.id,F.id),style:me.noteInput}),t.jsx("button",{onClick:()=>he(oe.id,F.id),style:{...me.noteAddBtn,background:F.color},children:t.jsx(lt,{size:14})})]})]}),We&&!((Rt=oe.completed_stages)!=null&&Rt[F.id])&&t.jsxs(t.Fragment,{children:[Me&&$e.length>0&&!tt&&t.jsxs("div",{style:me.checklistHint,children:[$e.filter(ee=>ee.done).length,"/",$e.length," done — check all steps to complete Wisdom"]}),t.jsxs("button",{onClick:()=>N(oe.id,F.id),disabled:!bt,style:{...me.advanceBtn,background:bt?F.color:"#C3BFB5",marginTop:10,cursor:bt?"pointer":"not-allowed"},children:[t.jsx(He,{size:14}),Me?"Mark Wisdom complete":`Complete ${F.label} → ${(M=_r[ce+1])==null?void 0:M.label}`]})]})]})})()]},F.id)}),oe.stage==="W"&&((re=oe.completed_stages)==null?void 0:re.W)&&t.jsxs("div",{style:me.wisdomDone,children:[t.jsx(Yr,{size:16,color:"#4C9A6B"})," Wisdom achieved — implemented in your life"]})]})]}),t.jsx(br,{toasts:Y,onUndo:ae,onDismiss:_})]})}const me={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box",position:"relative"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},wisdomBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addSkillBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},filterBar:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16},filterBtn:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},layout:{display:"grid",gap:12,alignItems:"start"},cardList:{display:"grid",gap:10,alignContent:"start"},skillCard:{background:"var(--surface)",borderRadius:12,padding:"16px",border:"1.5px solid var(--border)",cursor:"pointer",boxShadow:"0 1px 2px rgba(0,0,0,0.04)",minWidth:0,overflow:"hidden",boxSizing:"border-box"},skillCardTop:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8,marginBottom:6},skillMeta:{display:"flex",alignItems:"center",gap:6,minWidth:0},pillarDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},srcLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},skillTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",marginBottom:12,lineHeight:1.3,wordBreak:"break-word"},cardTitle:{fontSize:13,fontWeight:700,marginBottom:10},track:{display:"flex",alignItems:"center",minWidth:0},trackItem:{display:"flex",alignItems:"center",minWidth:0},trackDot:{width:22,height:22,borderRadius:"50%",display:"grid",placeItems:"center",flexShrink:0},trackCurrent:{fontSize:9,fontWeight:800,color:"#fff"},trackLine:{flex:1,minWidth:8,height:3,borderRadius:2,margin:"0 2px"},stageTag:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,marginLeft:8,flexShrink:0,whiteSpace:"nowrap"},detail:{background:"var(--surface)",borderRadius:14,padding:"18px 16px",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",border:"1.5px solid var(--border)",alignSelf:"start"},detailHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16},detailTitle:{fontSize:18,fontWeight:700,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},backBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginRight:4},groupBox:{border:"1.5px solid var(--border)",borderRadius:9,marginBottom:8,overflow:"hidden",background:"var(--bg)"},groupHead:{display:"flex",alignItems:"center",gap:7,padding:"8px 10px"},groupCaret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},groupTitle:{flex:1,minWidth:0,fontSize:13,fontWeight:700,color:"var(--text)",cursor:"text",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},groupCount:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 7px",flexShrink:0},groupBody:{padding:"0 10px 10px 10px"},addGroupBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1.5px dashed",background:"none",padding:"9px 12px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:2},stageBlock:{border:"1.5px solid var(--border)",borderRadius:10,padding:"12px 13px",marginBottom:10},stageBlockHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:8},stageLetter:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",fontSize:13,fontWeight:800,flexShrink:0},stageName:{fontSize:13,fontWeight:700},stagePrompt:{fontSize:11.5,color:"var(--text-2)",marginTop:2,lineHeight:1.4},doneBadge:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10,marginLeft:"auto",flexShrink:0},noteList:{margin:"0 0 8px 0",padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6},noteItem:{display:"flex",alignItems:"flex-start",gap:8,fontSize:13,lineHeight:1.4},noteDot:{width:6,height:6,borderRadius:"50%",flexShrink:0,marginTop:5},checkBox:{width:18,height:18,borderRadius:5,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginTop:1,padding:0},checklistHint:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,marginTop:10,textAlign:"center"},noteText:{flex:1,color:"var(--text)"},noNotes:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",marginBottom:8},noteAddRow:{display:"flex",gap:6},noteInput:{flex:1,border:"1px solid var(--border)",borderRadius:7,padding:"7px 10px",fontSize:13,fontFamily:"inherit",outline:"none"},noteAddBtn:{width:32,height:32,border:"none",borderRadius:7,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},advanceBtn:{display:"flex",alignItems:"center",gap:8,border:"none",color:"#fff",padding:"10px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},wisdomDone:{display:"flex",alignItems:"center",gap:8,justifyContent:"center",fontSize:13.5,fontWeight:700,color:"#4C9A6B",padding:12,background:"rgba(76,154,107,0.08)",borderRadius:10,marginTop:4},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},openLinkBtn:{display:"inline-flex",alignItems:"center",gap:5,textDecoration:"none",border:"1px solid #3A7CA5",background:"rgba(58,124,165,0.10)",color:"#3A7CA5",fontSize:12,fontWeight:700,padding:"5px 11px",borderRadius:8,fontFamily:"inherit",cursor:"pointer"},addLinkBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"1px dashed var(--border)",background:"none",color:"var(--text-3)",fontSize:12,fontWeight:600,padding:"5px 11px",borderRadius:8,fontFamily:"inherit",cursor:"pointer"},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box",marginBottom:8},select:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:12.5,fontFamily:"inherit",flex:1},addRow:{display:"flex",gap:8,marginBottom:8},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{fontSize:13,color:"var(--text-3)",padding:"32px 12px",textAlign:"center"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.55)",zIndex:50,display:"grid",placeItems:"center"},celebBox:{background:"var(--surface)",borderRadius:20,padding:"40px 32px",textAlign:"center",maxWidth:320,boxShadow:"0 8px 40px rgba(0,0,0,0.18)"},celebEmoji:{fontSize:52,marginBottom:12},celebTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:8},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:"#4C9A6B",color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Js=[{id:"aarti",title:"Aarti",html:`<h1>॥ गणपतीची आरती ॥</h1><br/>
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
      </div>`}];function pv(){const[e,r]=g.useState(()=>window.innerWidth<720);return g.useEffect(()=>{const n=()=>r(window.innerWidth<720);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}const bv=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>1400?(a=a*1400/l,l=1400):a>1400&&(l=l*1400/a,a=1400);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),r(d.toDataURL("image/jpeg",.85))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)});function lp({base:e,count:r,images:n}){const o=n&&n.length?n:null,i=o?o.length:r,[s,l]=g.useState(0);if(!i)return null;const a=s%i,d=o?o[a]:`${e}${a+1}.jpg`;return t.jsxs("div",{style:{maxWidth:560,margin:"0 auto"},children:[t.jsx("div",{style:Ue.carouselFrame,children:t.jsx("img",{src:d,alt:`Page ${a+1}`,style:Ue.carouselImg})}),t.jsxs("div",{style:Ue.carouselNav,children:[t.jsxs("button",{onClick:()=>l(c=>(c-1+i)%i),style:Ue.carouselBtn,children:[t.jsx(Sn,{size:16})," Prev"]}),t.jsxs("span",{style:Ue.carouselCount,children:[o?"":"Adhyay ",a+1," / ",i]}),t.jsxs("button",{onClick:()=>l(c=>(c+1)%i),style:Ue.carouselBtn,children:["Next ",t.jsx(nn,{size:16})]})]})]})}function hv(){const e=pv(),[r,n]=g.useState(!1),[o,i]=g.useState([]),[s,l]=g.useState("dss"),[a,d]=g.useState(!1),[c,h]=g.useState({title:"",type:"text",content:"",images:[]}),[f,m]=g.useState([]),[I,B]=g.useState(null),[z,w]=g.useState(!1),p=g.useRef(!1),b=g.useCallback(async()=>{try{const[U,de,X]=await Promise.all([E.getDecks(),E.getSetting("spiritual_order"),E.getSetting("spiritual_default")]);if(i(U),Array.isArray(de==null?void 0:de.value)&&m(de.value),X!=null&&X.value&&B(X.value),!p.current){p.current=!0;const S=new Set([...Js.map(W=>W.id),...U.map(W=>`deck-${W.id}`)]);X!=null&&X.value&&S.has(X.value)&&l(X.value)}}catch{}},[]);g.useEffect(()=>{b()},[b]);const u=[...Js.map(U=>({id:U.id,title:U.title})),...o.map(U=>({id:`deck-${U.id}`,title:U.title}))],j=(()=>{if(!f.length)return u;const U=new Map(u.map(X=>[X.id,X])),de=[];return f.forEach(X=>{U.has(X)&&(de.push(U.get(X)),U.delete(X))}),U.forEach(X=>de.push(X)),de})(),x=(U,de)=>{const X=j.map(W=>W.id),S=U+de;S<0||S>=X.length||([X[U],X[S]]=[X[S],X[U]],m(X),E.setSetting("spiritual_order",X).catch(()=>{}))},T=U=>{B(U),E.setSetting("spiritual_default",U).catch(()=>{})},R=s.startsWith("deck-")?Number(s.slice(5)):null,k=R!=null?o.find(U=>U.id===R):null,y=k?null:Js.find(U=>U.id===s)||(R==null?Js[0]:null),K=a?"New deck":k?k.title:(y==null?void 0:y.title)||"",q=U=>{l(U),d(!1),e&&n(!1)},oe=()=>{d(!0),h({title:"",type:"text",content:"",images:[]}),e&&n(!1)},L=async U=>{const de=Array.from(U.target.files||[]),X=[];for(const S of de)try{X.push(await bv(S))}catch{}h(S=>({...S,images:[...S.images,...X]})),U.target.value=""},he=U=>h(de=>({...de,images:de.images.filter((X,S)=>S!==U)})),Se=c.title.trim()&&(c.type==="text"?c.content.trim():c.images.length>0),ue=async()=>{if(!Se)return;const U=await E.createDeck({title:c.title.trim(),type:c.type,content:c.type==="text"?c.content:"",images:c.type==="images"?c.images:[]});d(!1),await b(),l(`deck-${U.id}`)},ke=async U=>{await E.deleteDeck(U),s===`deck-${U}`&&l("dss"),b()},se={...Ue.sidebar,...e?Ue.sidebarOverlay:{},...e&&!r?Ue.sidebarHidden:{}};return t.jsxs("div",{style:Ue.shell,children:[t.jsx("style",{children:mv}),e&&r&&t.jsx("div",{style:Ue.backdrop,onClick:()=>n(!1)}),t.jsxs("aside",{style:se,children:[t.jsxs("div",{style:Ue.sideHead,children:[t.jsx("div",{style:Ue.brand,children:"Anvil · Spiritual"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:2},children:[t.jsx("button",{onClick:()=>w(U=>!U),style:Ue.iconBtn,title:"Rearrange & set default",children:z?t.jsx(He,{size:16}):t.jsx(vt,{size:15})}),e&&t.jsx("button",{onClick:()=>n(!1),style:Ue.iconBtn,children:t.jsx(De,{size:17})})]})]}),z&&t.jsxs("div",{style:Ue.editHint,children:["Arrows reorder · ",t.jsx(ys,{size:11,style:{verticalAlign:"-1px"}})," sets what opens by default"]}),t.jsxs("div",{style:Ue.sideScroll,children:[j.map((U,de)=>{const X=U.id===s&&!a,S=I===U.id;return t.jsxs("div",{style:Ue.sideRow,children:[t.jsxs("button",{onClick:()=>q(U.id),style:{...Ue.sideItem,flex:1,...X?Ue.sideItemOn:{}},children:[U.title,S&&t.jsx("span",{style:Ue.defStar,title:"Opens by default",children:" ★"})]}),z&&t.jsxs("div",{style:Ue.editControls,children:[t.jsx("button",{onClick:()=>T(U.id),title:"Set as default",style:{...Ue.miniBtn,...S?{color:"#8268B0"}:{}},children:t.jsx(ys,{size:13})}),t.jsx("button",{onClick:()=>x(de,-1),disabled:de===0,style:{...Ue.miniBtn,opacity:de===0?.3:1},children:t.jsx(va,{size:13})}),t.jsx("button",{onClick:()=>x(de,1),disabled:de===j.length-1,style:{...Ue.miniBtn,opacity:de===j.length-1?.3:1},children:t.jsx(So,{size:13})})]})]},U.id)}),t.jsxs("button",{onClick:oe,style:{...Ue.newDeckBtn,...a?Ue.sideItemOn:{}},children:[t.jsx(lt,{size:14})," New deck"]})]})]}),t.jsxs("main",{style:Ue.main,children:[e&&t.jsxs("button",{onClick:()=>n(!0),style:Ue.hamburger,children:[t.jsx(Cg,{size:17}),t.jsx("span",{style:Ue.hamburgerLabel,children:K})]}),a?t.jsxs("div",{style:Ue.contentWrap,children:[t.jsx("div",{style:Ue.formTitle,children:"Create a deck"}),t.jsx("input",{placeholder:"Deck title (e.g. Vishnu Sahasranamam)",value:c.title,onChange:U=>h({...c,title:U.target.value}),style:Ue.input}),t.jsxs("div",{style:Ue.typeRow,children:[t.jsxs("button",{onClick:()=>h({...c,type:"text"}),style:{...Ue.typeBtn,...c.type==="text"?Ue.typeOn:{}},children:[t.jsx(wg,{size:15})," Text"]}),t.jsxs("button",{onClick:()=>h({...c,type:"images"}),style:{...Ue.typeBtn,...c.type==="images"?Ue.typeOn:{}},children:[t.jsx(qy,{size:15})," Images"]})]}),c.type==="text"?t.jsx("textarea",{placeholder:"Paste or write the text (verses, chant, reflection)…",value:c.content,onChange:U=>h({...c,content:U.target.value}),style:Ue.textarea}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:Ue.imgGrid,children:[c.images.map((U,de)=>t.jsxs("div",{style:Ue.imgThumbWrap,children:[t.jsx("img",{src:U,alt:"",style:Ue.imgThumb}),t.jsx("button",{onClick:()=>he(de),style:Ue.imgDel,children:t.jsx(De,{size:12})})]},de)),t.jsxs("label",{style:Ue.imgAdd,children:[t.jsx(ja,{size:20}),t.jsx("span",{style:{fontSize:11},children:"Add images"}),t.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:L,style:{display:"none"}})]})]}),t.jsx("div",{style:Ue.hint,children:"Images show as a swipeable carousel, in the order added."})]}),t.jsxs("div",{style:Ue.formActions,children:[t.jsxs("button",{onClick:()=>d(!1),style:Ue.cancelBtn,children:[t.jsx(De,{size:14})," Cancel"]}),t.jsxs("button",{onClick:ue,disabled:!Se,style:{...Ue.saveBtn,...Se?{}:Ue.saveDisabled},children:[t.jsx(He,{size:15})," Create deck"]})]})]}):k?t.jsxs("div",{style:Ue.contentWrap,children:[t.jsxs("div",{style:Ue.deckHead,children:[t.jsx("h2",{style:Ue.deckTitle,children:k.title}),t.jsx("button",{onClick:()=>ke(k.id),style:Ue.deckDel,title:"Delete deck",children:t.jsx(ai,{size:15})})]}),k.type==="images"?t.jsx(lp,{images:k.images}):t.jsx("div",{style:Ue.deckText,children:k.content})]}):t.jsxs("div",{style:Ue.contentWrap,children:[(y==null?void 0:y.youtube)&&t.jsx("div",{style:Ue.videoFrame,children:t.jsx("iframe",{src:`https://www.youtube.com/embed/${y.youtube}`,title:y.title,style:Ue.video,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},y.youtube)}),y!=null&&y.carousel?t.jsx(lp,{base:y.imageBase,count:y.carousel}):t.jsx("div",{className:"spiritual-content",dangerouslySetInnerHTML:{__html:(y==null?void 0:y.html)||""}})]})]})]})}const mv=`
.spiritual-content { font-family: 'Inter', system-ui, sans-serif; color: var(--text); line-height: 1.9; font-size: 16px; text-align: center; }
.spiritual-content h1 { font-family: 'Fraunces', Georgia, serif; font-size: 24px; color: #8268B0; margin: 8px 0 18px; letter-spacing: -0.01em; }
.spiritual-content h2 { font-family: 'Fraunces', Georgia, serif; font-size: 18px; color: #7A5EA8; margin: 20px 0 8px; }
.spiritual-content h3 { font-size: 15px; color: var(--text-3); text-transform: uppercase; letter-spacing: 0.06em; margin: 18px 0 6px; }
.spiritual-content b { color: #8268B0; }
.spiritual-content div { text-align: center; }
`,Ue={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:240,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.15)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.35)",zIndex:20},sideHead:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 14px 12px"},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700},sideScroll:{flex:1,overflowY:"auto",padding:"0 8px 16px"},sideItem:{display:"block",width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text-2)",textAlign:"left",marginBottom:2},sideItemOn:{background:"rgba(130,104,176,0.12)",color:"#8268B0",fontWeight:700},sideRow:{display:"flex",alignItems:"center",gap:2},editControls:{display:"flex",alignItems:"center",gap:1,flexShrink:0},miniBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:5},defStar:{color:"#C9A227",fontWeight:700},editHint:{fontSize:10.5,color:"var(--text-3)",padding:"0 14px 8px",lineHeight:1.4},newDeckBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",padding:"9px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,color:"var(--text-2)",marginTop:6},main:{flex:1,padding:"26px 22px",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:220},contentWrap:{background:"var(--surface)",borderRadius:14,padding:"26px 28px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",maxWidth:760,margin:"0 auto"},videoFrame:{position:"relative",width:"100%",maxWidth:600,margin:"0 auto 22px",aspectRatio:"16 / 9",borderRadius:12,overflow:"hidden",background:"#000"},video:{position:"absolute",inset:0,width:"100%",height:"100%",border:"none"},carouselFrame:{background:"var(--surface-2)",borderRadius:12,padding:8,border:"1px solid var(--border)"},carouselImg:{width:"100%",borderRadius:8,display:"block"},carouselNav:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:14},carouselBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},carouselCount:{fontSize:13,fontWeight:700,color:"#8268B0",fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"none",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,color:"var(--text-2)"},deckHead:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,marginBottom:16,borderBottom:"1px solid var(--border)",paddingBottom:12},deckTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",margin:0,color:"#8268B0"},deckDel:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",cursor:"pointer",display:"grid",placeItems:"center",padding:7,borderRadius:8,flexShrink:0},deckText:{fontSize:16,lineHeight:1.9,whiteSpace:"pre-wrap",color:"var(--text)",textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},formTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},typeRow:{display:"flex",gap:8,marginTop:12},typeBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},typeOn:{background:"#8268B0",color:"#fff",borderColor:"#8268B0"},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:200,resize:"vertical",lineHeight:1.7,marginTop:12},imgGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(90px, 1fr))",gap:8,marginTop:12},imgThumbWrap:{position:"relative",aspectRatio:"1",borderRadius:8,overflow:"hidden",border:"1px solid var(--border)"},imgThumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},imgDel:{position:"absolute",top:3,right:3,border:"none",background:"rgba(0,0,0,0.6)",color:"#fff",borderRadius:"50%",width:18,height:18,cursor:"pointer",display:"grid",placeItems:"center",padding:0},imgAdd:{aspectRatio:"1",border:"1px dashed var(--border)",borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4,cursor:"pointer",color:"var(--text-3)"},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:8},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"#8268B0",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"}},ln={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},ap=Object.keys(ln),fv=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],xv=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],yv=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},vv=(e,r)=>`${xv[r-1]} ${e}`,jv=(e,r)=>{const n=new Date(e,r,0).getDate();return Array.from({length:n},(o,i)=>`${e}-${String(r).padStart(2,"0")}-${String(i+1).padStart(2,"0")}`)},kv=(e,r)=>{const n=new Date(e,r-1,1).getDay();return n===0?6:n-1};function wv(){const e=yv(),[r,n]=g.useState(new Date().getFullYear()),[o,i]=g.useState(new Date().getMonth()+1),[s,l]=g.useState([]),[a,d]=g.useState([]),[c,h]=g.useState({}),[f,m]=g.useState(null),[I,B]=g.useState(!1),[z,w]=g.useState(!1),[p,b]=g.useState({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:e}),[u,j]=g.useState(null),x=g.useCallback(async()=>{const[W,O,N]=await Promise.all([E.getTopics(),E.getDueToday(),E.getCalendar(r,o)]);l(W),d(O),h(N)},[r,o]);g.useEffect(()=>{x()},[x]);const T=async W=>{await E.toggleReviewDone(W),x()},R=async()=>{const W=p.intervals.split(",").map(O=>parseInt(O.trim(),10)).filter(O=>!isNaN(O));!p.topic.trim()||W.length===0||(await E.createTopic({pillar:p.pillar,topic:p.topic.trim(),intervals:W,learned_date:p.learned_date||e}),b({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:e}),w(!1),x())},{deleteItem:k,toasts:y,handleUndo:K,handleDismiss:q}=pr(E.deleteTopic,E.restoreTopic,x),oe=(W,O)=>k(W,O),L=W=>j({id:W.id,topic:W.topic,pillar:W.pillar,intervals:(W.intervals||[]).join(", "),learned_date:W.learned_date}),he=async()=>{if(!u)return;const W=u.intervals.split(",").map(O=>parseInt(O.trim(),10)).filter(O=>!isNaN(O)&&O>=0);!u.topic.trim()||W.length===0||(await E.updateTopic(u.id,{topic:u.topic.trim(),pillar:u.pillar,learned_date:u.learned_date,intervals:W}),j(null),x())},Se=()=>{o===1?(n(W=>W-1),i(12)):i(W=>W-1),m(null)},ue=()=>{o===12?(n(W=>W+1),i(1)):i(W=>W+1),m(null)},ke=s.filter(W=>!W.cemented),se=s.filter(W=>W.cemented),U=jv(r,o),de=kv(r,o),X=g.useMemo(()=>{const W={};return s.forEach(O=>O.reviews.forEach(N=>{N.done||(W[N.due_date]=W[N.due_date]||[]).push({topic:O.topic,pillar:O.pillar,stage:N.stage})})),W},[s]),S=f?s.flatMap(W=>W.reviews.filter(O=>O.due_date===f).map(O=>({...O,topic:W.topic,pillar:W.pillar,total:W.reviews.length}))):[];return t.jsxs("div",{style:Fe.page,children:[t.jsxs("div",{style:Fe.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:Fe.eyebrow,children:"Anvil · Revision"}),t.jsx("h1",{style:Fe.h1,children:"Spaced Repetition"})]}),t.jsxs("button",{onClick:()=>w(!0),style:Fe.addBtn,children:[t.jsx(lt,{size:15})," Add topic"]})]}),z&&t.jsxs("div",{style:Fe.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"What did you learn?",value:p.topic,onChange:W=>b(O=>({...O,topic:W.target.value})),onKeyDown:W=>W.key==="Enter"&&R(),style:Fe.input}),t.jsxs("div",{style:Fe.addRow,children:[t.jsx("select",{value:p.pillar,onChange:W=>b(O=>({...O,pillar:W.target.value})),style:Fe.select,children:ap.map(W=>t.jsx("option",{children:W},W))}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[t.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),t.jsx("input",{type:"date",value:p.learned_date,onChange:W=>b(O=>({...O,learned_date:W.target.value})),style:{...Fe.select,fontSize:13}})]}),t.jsx("div",{style:{flex:1,minWidth:0},children:t.jsx("input",{value:p.intervals,onChange:W=>b(O=>({...O,intervals:W.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:Fe.input})})]}),t.jsxs("div",{style:Fe.addRow,children:[t.jsxs("button",{onClick:R,style:Fe.saveBtn,children:[t.jsx(He,{size:14})," Save"]}),t.jsxs("button",{onClick:()=>w(!1),style:Fe.cancelBtn,children:[t.jsx(De,{size:14})," Cancel"]})]})]}),a.length>0&&t.jsxs("div",{style:Fe.section,children:[t.jsxs("div",{style:Fe.sectionTitle,children:[t.jsx(xm,{size:15,color:"#C2536B"}),"Due Today",t.jsx("span",{style:Fe.badge,children:a.length})]}),a.map(W=>{var N,le;const O=((N=ln[W.pillar])==null?void 0:N.dot)||"#9A968C";return t.jsxs("div",{style:{...Fe.reviewCard,borderLeft:`3px solid ${O}`,...W.is_missed?{opacity:.85}:{}},children:[t.jsx("button",{onClick:()=>T(W.review_id),style:{...Fe.checkbox,...W.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:W.done&&t.jsx(He,{size:12,color:"#fff",strokeWidth:3})}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:Fe.reviewTopic,children:W.topic}),t.jsxs("div",{style:Fe.reviewMeta,children:[t.jsxs("span",{style:{...Fe.stageTag,background:((le=ln[W.pillar])==null?void 0:le.soft)||"rgba(0,0,0,0.05)",color:O},children:["Review ",W.stage,"/",W.total_stages]}),W.is_missed&&t.jsxs("span",{style:Fe.missedTag,children:["missed · ",W.due_date]})]})]})]},W.review_id)})]}),t.jsxs("div",{style:Fe.section,children:[t.jsxs("div",{style:Fe.sectionTitle,children:["Active Topics ",t.jsx("span",{style:Fe.badge,children:ke.length})]}),ke.length===0&&t.jsx("div",{style:Fe.empty,children:"No active topics. Add something you learned today."}),ke.map(W=>{var ge,Ae;const O=((ge=ln[W.pillar])==null?void 0:ge.dot)||"#9A968C",N=((Ae=ln[W.pillar])==null?void 0:Ae.soft)||"rgba(0,0,0,0.05)",le=W.reviews.filter(Y=>Y.done).length;return(u==null?void 0:u.id)===W.id?t.jsxs("div",{style:Fe.addBox,children:[t.jsx("input",{autoFocus:!0,value:u.topic,onChange:Y=>j(ae=>({...ae,topic:Y.target.value})),onKeyDown:Y=>Y.key==="Enter"&&he(),placeholder:"Topic",style:Fe.input}),t.jsxs("div",{style:Fe.addRow,children:[t.jsx("select",{value:u.pillar,onChange:Y=>j(ae=>({...ae,pillar:Y.target.value})),style:Fe.select,children:ap.map(Y=>t.jsx("option",{children:Y},Y))}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[t.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),t.jsx("input",{type:"date",value:u.learned_date,onChange:Y=>j(ae=>({...ae,learned_date:Y.target.value})),style:{...Fe.select,fontSize:13}})]}),t.jsx("div",{style:{flex:1,minWidth:0},children:t.jsx("input",{value:u.intervals,onChange:Y=>j(ae=>({...ae,intervals:Y.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:Fe.input})})]}),t.jsx("div",{style:Fe.editHint,children:"Changing the date or intervals reschedules the reviews (completed steps are kept where they still apply)."}),t.jsxs("div",{style:Fe.addRow,children:[t.jsxs("button",{onClick:he,style:Fe.saveBtn,children:[t.jsx(He,{size:14})," Save plan"]}),t.jsxs("button",{onClick:()=>j(null),style:Fe.cancelBtn,children:[t.jsx(De,{size:14})," Cancel"]})]})]},W.id):t.jsxs("div",{style:Fe.topicCard,children:[t.jsxs("div",{style:Fe.topicHead,children:[t.jsx("span",{style:{...Fe.dot,background:O}}),t.jsx("span",{style:Fe.topicName,children:W.topic}),t.jsx("span",{style:Fe.topicPillar,children:W.pillar}),t.jsxs("span",{style:Fe.topicProgress,children:[le,"/",W.reviews.length," done"]}),t.jsx("button",{onClick:()=>L(W),style:Fe.ghostBtn,title:"Edit plan",children:t.jsx(vt,{size:12})}),t.jsx("button",{onClick:()=>oe(W.id,W.topic),style:Fe.ghostBtn,title:"Delete",children:t.jsx(De,{size:13})})]}),t.jsxs("div",{style:Fe.reviewDots,children:[W.reviews.map(Y=>{Y.due_date<e;const ae=Y.due_date===e;return t.jsx("button",{onClick:()=>T(Y.id),title:`Review ${Y.stage} · ${Y.due_date}${Y.done?" · Done":""}`,style:{...Fe.reviewDot,background:Y.done?O:ae?N:"var(--hover)",border:`2px solid ${Y.done||ae?O:"var(--border)"}`,color:Y.done?"#fff":O},children:Y.stage},Y.id)}),t.jsxs("span",{style:Fe.learnedDate,children:["Learned ",W.learned_date]})]})]},W.id)})]}),se.length>0&&t.jsxs("div",{style:Fe.section,children:[t.jsxs("button",{onClick:()=>B(W=>!W),style:Fe.cementedToggle,children:[I?t.jsx(So,{size:15}):t.jsx(nn,{size:15}),t.jsx(Yr,{size:14,color:"#C9A227"}),"Cemented",t.jsx("span",{style:{...Fe.badge,background:"rgba(201,162,39,0.12)",color:"#8A6E1A"},children:se.length})]}),I&&se.map(W=>{var N;const O=((N=ln[W.pillar])==null?void 0:N.dot)||"#9A968C";return t.jsx("div",{style:{...Fe.topicCard,opacity:.75},children:t.jsxs("div",{style:Fe.topicHead,children:[t.jsx("span",{style:{...Fe.dot,background:O}}),t.jsx("span",{style:Fe.topicName,children:W.topic}),t.jsx("span",{style:Fe.topicPillar,children:W.pillar}),t.jsx(Yr,{size:13,color:"#C9A227",style:{marginLeft:"auto"}})]})},W.id)})]}),t.jsxs("div",{style:Fe.calCard,children:[t.jsxs("div",{style:Fe.calHead,children:[t.jsx("button",{onClick:Se,style:Fe.calNav,children:"‹"}),t.jsxs("div",{style:Fe.calTitle,children:[vv(r,o)," · Review Calendar"]}),t.jsx("button",{onClick:ue,style:Fe.calNav,children:"›"})]}),t.jsx("div",{style:Fe.calDow,children:fv.map(W=>t.jsx("div",{style:Fe.calDowCell,children:W},W))}),t.jsxs("div",{style:Fe.calGrid,children:[Array.from({length:de}).map((W,O)=>t.jsx("div",{},`p${O}`)),U.map((W,O)=>{const N=X[W]||[],le=W===e,ge=W===f,Ae=W<e,Y=ge?"#fff":le?"var(--text)":Ae?"var(--text-2)":"var(--text-3)";return t.jsxs("button",{onClick:()=>m(ge?null:W),style:{...Fe.calDay,background:ge?"var(--accent-strong)":le?"var(--hover)":"var(--surface)",borderColor:le||ge?"var(--accent-strong)":"var(--border)"},children:[t.jsx("span",{style:{...Fe.calDayNum,color:Y,fontWeight:le||ge?700:600},children:O+1}),N.slice(0,2).map((ae,_)=>{var ne;return t.jsxs("span",{title:ae.topic,style:{...Fe.calItem,color:ge?"#fff":((ne=ln[ae.pillar])==null?void 0:ne.dot)||"var(--text-2)"},children:[_+1,". ",ae.topic]},_)}),N.length>2&&t.jsxs("span",{style:{...Fe.calMore,color:ge?"#fff":"var(--text-3)"},children:["+",N.length-2," more"]})]},W)})]}),f&&t.jsxs("div",{style:Fe.dayDetail,children:[t.jsxs("div",{style:Fe.dayDetailTitle,children:["Reviews for ",f]}),S.length===0?t.jsx("div",{style:Fe.empty,children:"No reviews scheduled for this day."}):S.map((W,O)=>{var le,ge;const N=((le=ln[W.pillar])==null?void 0:le.dot)||"#9A968C";return t.jsxs("div",{style:{...Fe.reviewCard,borderLeft:`3px solid ${N}`},children:[t.jsx("button",{onClick:()=>T(W.id),style:{...Fe.checkbox,...W.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:W.done&&t.jsx(He,{size:12,color:"#fff",strokeWidth:3})}),t.jsxs("div",{children:[t.jsxs("div",{style:Fe.reviewTopic,children:[O+1,". ",W.topic]}),t.jsxs("span",{style:{...Fe.stageTag,background:((ge=ln[W.pillar])==null?void 0:ge.soft)||"rgba(0,0,0,0.05)",color:N},children:["Review ",W.stage,"/",W.total]})]})]},W.id)})]})]}),t.jsx(br,{toasts:y,onUndo:K,onDismiss:q})]})}const Fe={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},addBox:{background:"var(--surface)",borderRadius:12,padding:16,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},addRow:{display:"flex",gap:8,alignItems:"center"},editHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",minWidth:0},select:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 10px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},section:{marginBottom:20},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},reviewCard:{display:"flex",alignItems:"center",gap:12,background:"var(--surface)",borderRadius:10,padding:"12px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},checkbox:{width:22,height:22,borderRadius:6,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,padding:0},reviewTopic:{fontSize:13.5,fontWeight:600,marginBottom:4},reviewMeta:{display:"flex",alignItems:"center",gap:8},stageTag:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10},missedTag:{fontSize:11,color:"#C2536B",fontWeight:600},topicCard:{background:"var(--surface)",borderRadius:12,padding:"13px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},topicHead:{display:"flex",alignItems:"center",gap:8,marginBottom:10},dot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},topicName:{fontSize:14,fontWeight:600,flex:1},topicPillar:{fontSize:11,color:"var(--text-3)",fontWeight:500},topicProgress:{fontSize:11,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:10},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},reviewDots:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},reviewDot:{width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",fontSize:11,fontWeight:700,padding:0},learnedDate:{fontSize:11,color:"var(--text-3)",marginLeft:"auto"},cementedToggle:{display:"flex",alignItems:"center",gap:8,border:"none",background:"none",cursor:"pointer",fontSize:13,fontWeight:700,color:"var(--text-2)",padding:"4px 0",fontFamily:"inherit",marginBottom:8},empty:{fontSize:13,color:"var(--text-3)",padding:"16px 0",textAlign:"center"},calCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{border:"none",background:"none",fontSize:20,cursor:"pointer",color:"var(--text-2)",padding:"0 6px",lineHeight:1},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4},calDay:{minHeight:62,border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,cursor:"pointer",fontFamily:"inherit",display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"flex-start",gap:1,position:"relative",padding:"3px 4px",overflow:"hidden",textAlign:"left"},calDayNum:{fontSize:11,lineHeight:1.1,marginBottom:1},calItem:{fontSize:8.5,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",lineHeight:1.3,textAlign:"left"},calMore:{fontSize:8,fontWeight:700,opacity:.85,lineHeight:1.2},dayDetail:{marginTop:16,paddingTop:16,borderTop:"1px solid var(--border)"},dayDetailTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10}},el=[{id:1,title:"Regular Habits",cards:[{id:1,text:"1. I always do everything I need to do, when I need to do it. "},{id:2,text:"2. I never argue or let my emotions work against me. "},{id:3,text:"3. I have a good memory. I easily and automatically remember any name or anything that is important to me. "},{id:4,text:"4. I eat only what I should. "},{id:5,text:"5. I am a good listener. I hear everything that is said. I am attentive, interested, and aware of everything that is going on around me. "},{id:6,text:"6. I have the courage to state my opinions. I take responsibility for myself and everything I say and do."},{id:7,text:"7. I never spend more than I earn. I am financially responsible, both for my present and for my future."},{id:8,text:"8. I set goals and I follow them. I set my sights, take the appropriate action, and achieve my goals."},{id:9,text:"9. I spend time with my family and my loved ones. I enjoy sharing their lives with mine and my life with theirs."}]},{id:2,title:"Motivational",cards:[{id:1,text:"1. I can do anything I believe I can do. I’ve got it and every day I get more of it. I have talent, skills, and ability"},{id:2,text:"2. I set goals and I reach them. I know what I want out of life. I go after it and I get it. "},{id:3,text:"3. People like me, and I feel good about myself. I have a sense of pride in whoa am and I believe in myself. Nothing seems to stop me. I have a lot of determination. "},{id:4,text:"4. I turn problems into advantages. I find possibilities in things that other people never give a chance."},{id:5,text:"5. I have a lot of energy––I am very alive. I enjoy life and I can tell it and so can others"},{id:6,text:"6. I keep myself up, looking ahead, and liking it. I know that I can accomplish anything I choose, and I refuse to let anything negative hold me back or stand in my way. I am not afraid of anything or anyone. I have strength, power, conviction, and confidence. "},{id:7,text:"7. I like challenges and I meet them head on, face to face––today especially. I am on top of the world and I’m going for it. "},{id:8,text:"8. I have a clear picture in my mind of what I want. I can see it in front of me. "},{id:9,text:"9. I know what I want and I know how to get it. I know that it’s all up to me and I know I can do it. Roadblocks don’t bother me. They just mean that I am alive and running, and I’m not going to stand still for anything. "},{id:10,text:"10. I trust myself I’ve got what it takes––plenty of it––and I know how to use it. "},{id:11,text:"11. Today, more than ever. Today I am unstoppable. I’ve got myself together and I’m getting more together every day. And today––look out world, here I come. "},{id:12,text:"12. Limitations? I don’t even recognize them as limitations. There is no challenge I can’t conquer; there is no wall I can’t climb over. "},{id:13,text:"13. There is no problem I can’t defeat or turn around and make it work for me. I stand tall. I am honest and sincere. I like to deal with people and they like me. "},{id:14,text:"14. I think well; I think clearly. I am organized; I am in control of myself, and everything about me. I call my shots and no one has to call them for me. I never blame anyone else for the circumstances of my life. "},{id:15,text:"15. I accept my failings and move past them as easily as I accept the rewards for my victories. I never demand perfection of myself, but I expect the very best of what I have to give––and that’s what I get. I never give myself excuses. "},{id:16,text:"16. I get things done on time and in the right way. Today I have the inner strength to do more than ever. I am an exceptional human being. "},{id:17,text:"17. My goals and my incredible belief in myself turn my goals into reality. I have the power to live my dreams."},{id:18,text:"18.  I believe in them like I believe in myself. And that belief is so strong that there is nothing that diminishes my undefeatable spirit. "}]},{id:3,title:"Organized planning",cards:[{id:1,text:"1. I am organized and in control of my life. I am in control of myself, my thoughts, my time, my actions, and my future. "},{id:2,text:"2. I know what to do and when to do it, and I do everything I need to do, when I need to do it. "},{id:3,text:"3. I program my mind to make the maximum use of my time. I am in control of my time and how to use it. I like being organized, efficient, and on top of things."},{id:4,text:"4. Controlling my time keeps me that way. "},{id:5,text:"5. I never waste time––I always “plan” time. And because I plan my time, I always have time to do the things I choose to do. "},{id:6,text:"6. Each day I become more organized and in control of all areas of my life––at home, at work, in my mind and in my thoughts, in everything that I do. "},{id:7,text:"7. I am very well organized. Each night I make a list of things I need to do the next day. I set my priorities and I follow them. "},{id:8,text:"8. I am always on time. I am always right where I need to be, exactly when I need to be there. "},{id:9,text:"9. Being on time is easy for me and the more I control my time and the more organized I become, the easier it is. "},{id:10,text:"10. I am in control of my feelings, my emotions, my attitudes, and my needs. I control them; they do not control me. "},{id:11,text:"11. I have the winning vote in the outcome of my own actions. And I choose to live my life by choice, not chance. Therefore, I take the time to take control."},{id:12,text:"12. I have an organized and orderly mind. Because I think in an organized way, I conduct my life in an organized manner. "},{id:13,text:"13. I think in the most positive and productive way at all times and in all things. The way I think is the way I live––and I think “right.” "},{id:14,text:"14. I am the director of my destiny. I know where I am going and I know why I am going there. My earthly life is in my hands and in my control. "},{id:15,text:"15. I control my goals and the achievement of my goals. I organize my goals by writing each of them down, along with the steps I need to reach them. One of the reasons for my success is that my goals are clearly defined and organized."},{id:16,text:"16. I am in complete control of what I think and how I think. Therefore, I choose to think only those thoughts which help me and which are of genuine benefit to me."}]},{id:4,title:"Solving Problems",cards:[{id:1,text:"1. I’m good at solving problems. I like challenges and I meet them head on. "},{id:2,text:"2. Problems are my teachers. They help me to learn and grow. Without them, I would be going nowhere. With them, I am moving forward in the direction of my own goals. "},{id:3,text:"3. There is no problem which I cannot conquer. I am strong in mind, body, and spirit. My will, my strength, and my determination are always greater than any problem I face."},{id:4,text:"4. When I meet a new problem, I do not see the problem as my enemy. I know that finding the solution to the problem will move me forward in my own personal growth."},{id:5,text:"5. Because I know that problems are a key ingredient in my spiritual and mental education and preparation, I recognize that all problems are important to me. "},{id:6,text:"6. I do not fear problems, I solve them. I do not ignore problems, I confront them. I do not avoid problems, I conquer them. "},{id:7,text:"7. I know that every problem holds within itself the keys to its own solution. Therefore, the better I understand the problem, the clearer I am able to see its solution. "},{id:8,text:"8. Having problems is not a problem for me. I am confident, self-assured, positive, and determined. I always know that I am going to overcome any problem I encounter––and I always do. "},{id:9,text:"9. I am good at breaking large obstacles down into smaller pieces that are easier to handle. And I never make any problem appear to be larger than it actually is. "},{id:10,text:"10. I never worry. I turn “worry time” into positive, constructive, “solution time.” I keep my mind alert and open to all solutions—and solutions come quickly and easily to me. "},{id:11,text:"11. I have learned to recognize that many problems carry with them benefits and potential opportunities which would not have presented themselves had the problem not occurred in the first place. "},{id:12,text:"12. I do not seek to live a life which is free from all problems. Instead, I choose to live a life of finding solutions and enjoying the benefits which those solutions create."},{id:13,text:"13. Challenge, conquer, solution, and win are words which I live by daily. Challenges are opportunities. Conquering them is the inevitable outcome. "},{id:14,text:"14. “Solutions” are the stepping stones to my success, and “Winning” is my way of life."}]},{id:5,title:"Self Esteem",cards:[{id:1,text:"1. I really am very special. I like who I am and I feel good about myself. "},{id:2,text:"2. Although I always work to improve myself and I get better every day, I like who I am today. And tomorrow, when I’m even better, I’ll like myself then, too. "},{id:3,text:"3. It’s true that there really is no one else like me in the entire world. There never was another me before, and there will never be another me again. "},{id:4,text:"4. I am unique––from the top of my head to the bottom of my feet. In some ways I may look and act and sound like some others––but I am not them. I am me."},{id:5,text:"5. I wanted to be somebody––and now I know I am I would rather be me than anyone else in the world. "},{id:6,text:"6. I like how I feel and I like how I think and I like how I do things. I approve of me and I approve of who I am."},{id:7,text:"7. I have many beautiful qualities about me. I have talents and skills and abilities. I even have talents that I don’t even know about yet. And I am discovering new talents inside myself all the time. "},{id:8,text:"8. I am positive. I am confident. I radiate good things. If you look closely, you can even see a glow around me."},{id:9,text:"9. I am full of life. I like life and I’m glad to be alive. I am a very special person, living at a very special time. "},{id:10,text:"10. I am intelligent. My mind is quick and alert and clever and fun. I think good thoughts, and my mind makes things work right for me. "},{id:11,text:"11. I have a lot of energy and enthusiasm and vitality. I am exciting and I really enjoy being me. "},{id:12,text:"12. I like to be around other people and other people like to be around me. People like to hear what I have to say and know what I have to think. "},{id:13,text:"13. I smile a lot. I am happy on the inside and I am happy on the outside. "},{id:14,text:"14. I am interested in many things. I appreciate all the blessings I have, and the things that I learn, and all the things I will learn today and tomorrow and forever––just as long as I am. "},{id:15,text:"15. I am warm, sincere, honest, and genuine. I am all of these things and more. And all of these things are me. I like who I am, and I’m glad to be me."}]},{id:6,title:"Self-Responsibility",cards:[{id:1,text:"1. I take full responsibility for everything about me––even the thoughts that I think. I am in control of the vast resources of my own mind."},{id:2,text:"2. I alone am responsible for what I do and what I tell myself about me. No one can share this responsibility with me. "},{id:3,text:"3. I also allow others to accept their responsibilities far themselves and I do not try to accept their responsibilities for them. "},{id:4,text:"4. I enjoy being responsible. It puts me in charge of being me––and that’s a challenge I enjoy. "},{id:5,text:"5. I allow no one else, at any time, to assume control or responsibility over my life or over anything that I do. My responsibility to others is an extension of my own responsibility to myself. "},{id:6,text:"6. I choose to leave nothing about me up to chance. When it comes to me––and anything in my life––I choose to CHOOSE. "},{id:7,text:"7. My choices are mine alone to make for myself. I do not, at any time, allow anyone else to make my choices for me. And I accept full responsibility for every choice and decision I make. "},{id:8,text:"8. I always meet all of the obligations which I accept. And I accept no obligations which I will not meet. "},{id:9,text:"9. I am trustworthy. I can be counted on. I have accepted winning responsibility for myself––and I always live up to the responsibilities I accept. "},{id:10,text:"10. There is no they on whom I lay the blame, or with whom I share my own personal responsibilities. I have learned the great secret of mastering my own destiny. I have learned that “they” is “me.” "},{id:11,text:"11. I have no need to make excuses and no one needs to carry my responsibility for me. I gladly carry my own weight––and I carry it well. "},{id:12,text:"12. Each day I acknowledge and accept the responsibility––not only for my own actions––but also for my emotions, my thoughts, and my attitude. "},{id:13,text:"13. I accept the responsibility for living my life in a way which creates my strengths, my happiness, my positive, healthy beliefs, and for my past, my present, and my future."}]},{id:7,title:"Freedom from worry",cards:[{id:1,text:"1. I never worry. Instead of worrying, I find solutions and I act on them. "},{id:2,text:"2. My mind is constantly in tune with the positive. It is bright, cheerful, enthusiastic, and full of good, positive thoughts and ideas. "},{id:3,text:"3. I am able to relax easily and comfortably in my body and in my mind. I am calm, confident, and self-assured. "},{id:4,text:"4. My mind is orderly and well-organized. I consciously choose what I think and I always choose those thoughts which are the most positive and beneficial for me. "},{id:5,text:"5. All of my thoughts create healthiness within me. My mind dwells only on those thoughts which create more harmony, balance, and well-being within me and in the world around me. "},{id:6,text:"6. I automatically, and always, think in a decisive and determined way. "},{id:7,text:"7. I am full of resolution and the absolute assurance of the best possible outcome in everything that I do. "},{id:8,text:"8. I choose to look at the world around me in the bright, healthy light of optimism and self-assurance. "},{id:9,text:"9. I do only those things which are best for me. I create the best within myself, I attract the best in others, and I find the best in the world around me. "},{id:10,text:"10. I willingly, and without fail, take care of the duties and obligations which I have accepted for myself."},{id:11,text:"11. I commit only to those responsibilities which I know I can fulfill. "},{id:12,text:"12. I focus the attention of my mind only on those things that I can do something about. If I cannot affect it or direct it––I accept it. "},{id:13,text:"13. I keep my mind too busy thinking good, healthy, positive, constructive, and productive thoughts to ever have any time for worry. "},{id:14,text:"14. I control the thoughts I choose. No thought, at any time, can dwell in my mind without my approval or permission. I never worry."}]},{id:8,title:"Eating Habits",cards:[{id:1,text:"1. I am in control of myself in every way––at all times and in all situations. "},{id:2,text:"2. Each time I sit down to eat I reaffirm my determination to achieve my goal. By eating right, and never giving in, I am reaching the weight I want. "},{id:3,text:"3. Whether eating in or eating out, I really enjoy eating less. "},{id:4,text:"4. I never feel the need to finish the food in front of me. I eat only what I should––and never one bite more. "},{id:5,text:"5. One way to weight-loss that’s easy and works, is less food on my plate, and less on my fork. "},{id:6,text:'6. By ordering less when I eat out, and by serving myself smaller portions at home, I keep myself aware of the importance of staying with my goal––each and every day. “Less on my plate means less on my waist."'},{id:7,text:"7. When I sit down to eat, at no time do I allow anyone else to influence, tempt, or discourage me in any negative way."},{id:8,text:"8. What I eat, and the goals I reach, are up to me. And I give no one the right to hinder or control my success."},{id:9,text:"9. Although others may benefit from my success, I. am achieving my weight-loss goals for my own personal reasons––for myself, my life, my future, and my own personal well-being."},{id:10,text:"10. I am never, at any time, tempted to take one bite more than I should. I am strong, I am capable of reaching my goal, and I am doing it."},{id:11,text:"11. Being in situations which put a lot of food in front of me is not a problem to me now. I simply say “No” to the food and “Yes” to my success."},{id:12,text:"12. I enjoy sitting down to eat. Each time I do I conquer my past, and I create a trimmer, happier, more self-confident future in front of me. "},{id:13,text:"13. When I sit down to eat, I do not need someone else to remind me of my goal, or to keep me from eating something I should not. I take full responsibility for myself, and no one else has to do it for me. "},{id:14,text:"14. Controlling my weight, and my appetite, is easy for me now. I enjoy smaller portions, smaller bites, and a slower, healthier, more relaxed way of eating. "},{id:15,text:"15. I have set my goal and I am staying with it. I have turned mealtime into “achievement time.”"}]}],dp=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#3A7CA5","#4C9A6B"],nd=e=>dp[e%dp.length],Sv=e=>e+"1A",Ai="affirmation_favs",Cv="anvil_affirmation_favs",cp=()=>{try{return JSON.parse(localStorage.getItem(Ai)||localStorage.getItem(Cv)||"[]")}catch{return[]}};function zv(){const[e,r]=g.useState(0),[n,o]=g.useState(0),[i,s]=g.useState(()=>new Set(cp())),l=g.useRef(!1);g.useEffect(()=>{let p=!1;return E.getSetting(Ai).then(b=>{if(!p){if(Array.isArray(b==null?void 0:b.value))s(new Set(b.value));else{const u=cp();u.length&&E.setSetting(Ai,u).catch(()=>{}),s(new Set(u))}l.current=!0}}).catch(()=>{l.current=!0}),()=>{p=!0}},[]),g.useEffect(()=>{localStorage.setItem(Ai,JSON.stringify([...i])),l.current&&E.setSetting(Ai,[...i]).catch(()=>{})},[i]);const a=(p,b)=>`${p}#${b.id}`,d=e==="FAV"?el.flatMap((p,b)=>p.cards.filter(u=>i.has(a(p.title,u))).map(u=>({...u,color:nd(b),title:p.title}))):el[e].cards.map(p=>({...p,color:nd(e),title:el[e].title})),c=d.length,h=Math.min(n,Math.max(0,c-1)),f=d[h],m=p=>{r(p),o(0)},I=g.useCallback(()=>o(p=>Math.max(0,p-1)),[]),B=g.useCallback(()=>o(p=>Math.min(c-1,p+1)),[c]);g.useEffect(()=>{const p=b=>{b.key==="ArrowLeft"&&I(),b.key==="ArrowRight"&&B()};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[I,B]);const z=p=>s(b=>{const u=new Set(b);return u.has(p)?u.delete(p):u.add(p),u}),w=f?f.color:"#8268B0";return t.jsxs("div",{style:kt.page,children:[t.jsxs("div",{style:kt.head,children:[t.jsx("div",{style:kt.eyebrow,children:"Anvil · Affirmations"}),t.jsx("h1",{style:kt.h1,children:"Affirmations"}),t.jsx("div",{style:kt.subhead,children:"One at a time — read it, mean it."})]}),t.jsxs("div",{style:kt.filterBar,children:[el.map((p,b)=>{const u=e===b,j=nd(b);return t.jsxs("button",{onClick:()=>m(b),style:{...kt.chip,...u?{background:j,color:"#fff",borderColor:j}:{}},children:[t.jsx("span",{style:{...kt.catDot,background:u?"#fff":j}})," ",p.title," ",t.jsx("span",{style:kt.chipCount,children:p.cards.length})]},p.title)}),t.jsxs("button",{onClick:()=>m("FAV"),style:{...kt.chip,...e==="FAV"?{background:"#C9A227",color:"#fff",borderColor:"#C9A227"}:{}},children:[t.jsx(Ki,{size:12,fill:e==="FAV"?"#fff":"none"})," Favorites ",t.jsx("span",{style:kt.chipCount,children:i.size})]})]}),c===0?t.jsxs("div",{style:kt.empty,children:[t.jsx(Ki,{size:22,color:"#C3BFB5"}),t.jsx("div",{children:"No favorites yet — tap the star on a card to save it here."})]}):t.jsxs("div",{style:kt.viewer,children:[t.jsxs("div",{style:{...kt.card,borderTop:`4px solid ${w}`},children:[t.jsx("div",{style:{...kt.cardCat,color:w,background:Sv(w)},children:f.title}),t.jsx("button",{onClick:()=>z(a(f.title,f)),style:{...kt.favBtn,color:i.has(a(f.title,f))?"#C9A227":"#C3BFB5"},title:"Favorite",children:t.jsx(Ki,{size:20,fill:i.has(a(f.title,f))?"#C9A227":"none"})}),t.jsx(gc,{size:30,color:w,style:{opacity:.25}}),t.jsx("p",{style:kt.cardText,children:f.text.trim()})]}),t.jsxs("div",{style:kt.navRow,children:[t.jsxs("button",{onClick:I,disabled:h===0,style:{...kt.navBtn,...h===0?kt.navBtnDisabled:{}},children:[t.jsx(Sn,{size:18})," Back"]}),t.jsxs("span",{style:{...kt.counter,color:w},children:[h+1," ",t.jsxs("span",{style:kt.counterTotal,children:["/ ",c]})]}),t.jsxs("button",{onClick:B,disabled:h===c-1,style:{...kt.navBtn,...h===c-1?kt.navBtnDisabled:{}},children:["Next ",t.jsx(nn,{size:18})]})]}),t.jsx("div",{style:kt.dots,children:d.map((p,b)=>t.jsx("button",{onClick:()=>o(b),style:{...kt.dot,...b===h?{background:w,transform:"scale(1.5)"}:{}},title:`${b+1}`},b))})]})]})}const kt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:22},chip:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipCount:{fontSize:11,fontWeight:700,opacity:.7},catDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},empty:{display:"flex",flexDirection:"column",alignItems:"center",gap:10,fontSize:13.5,color:"var(--text-3)",padding:"56px 12px",textAlign:"center",background:"var(--surface)",borderRadius:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},viewer:{display:"flex",flexDirection:"column",alignItems:"center"},card:{position:"relative",background:"var(--surface)",borderRadius:16,padding:"40px 32px 44px",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",width:"100%",minHeight:240,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",boxSizing:"border-box"},cardCat:{position:"absolute",top:16,left:16,fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:12,textTransform:"uppercase",letterSpacing:"0.04em"},favBtn:{position:"absolute",top:14,right:14,border:"none",background:"none",cursor:"pointer",padding:4,display:"grid",placeItems:"center"},cardText:{fontSize:21,lineHeight:1.55,margin:"14px 0 0",fontWeight:500,color:"var(--text)",fontFamily:"'Fraunces',Georgia,serif",maxWidth:560},navRow:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",maxWidth:420,marginTop:22},navBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},counter:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},counterTotal:{fontSize:13,fontWeight:600,color:"var(--text-3)"},dots:{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center",marginTop:20,maxWidth:480},dot:{width:7,height:7,borderRadius:"50%",border:"none",background:"var(--border)",cursor:"pointer",padding:0,transition:"transform 0.12s"}},Tv=[{id:"day",label:"Day"},{id:"week",label:"Week"},{id:"month",label:"Month"},{id:"year",label:"Year"}],cn=e=>e>=60?`${Math.floor(e/60)}h ${e%60}m`:`${e}m`,Iv=e=>{const r=e<12?"am":"pm",n=e%12===0?12:e%12;return`${String(n).padStart(2,"0")} ${r}`};function Bv(e){const r=e<=60?10:e<=120?20:e<=300?60:120,n=Math.max(60,Math.ceil((e||1)/r)*r),o=[];for(let i=0;i<=n;i+=r)o.push(i);return{max:n,ticks:o}}const Dm=e=>{const r=new Date(e);return r.setHours(0,0,0,0),r},Rv=e=>{const r=Dm(e),n=(r.getDay()+6)%7;return r.setDate(r.getDate()-n),r},Ev=e=>new Date(e.getFullYear(),e.getMonth(),1),Dv=e=>new Date(e.getFullYear(),0,1);function Fv(e,r){if(e==="day"){const i=Dm(r);return{start:i,end:new Date(+i+864e5),prev:new Date(+i-864e5),prev2:new Date(+i-2*864e5)}}if(e==="week"){const i=Rv(r);return{start:i,end:new Date(+i+7*864e5),prev:new Date(+i-7*864e5),prev2:new Date(+i-14*864e5)}}if(e==="month"){const i=Ev(r),s=r.getFullYear(),l=r.getMonth();return{start:i,end:new Date(s,l+1,1),prev:new Date(s,l-1,1),prev2:new Date(s,l-2,1)}}const n=r.getFullYear();return{start:Dv(r),end:new Date(n+1,0,1),prev:new Date(n-1,0,1),prev2:new Date(n-2,0,1)}}function Av({sessions:e=[],onBack:r}){const[n,o]=g.useState("day"),i=new Date,{start:s,end:l,prev:a,prev2:d}=Fv(n,i),c=ue=>new Date(ue.started_at||ue.created_at),h=e.filter(ue=>ue.completed),f=(ue,ke,se)=>{const U=c(ue);return U>=ke&&U<se},m=(ue,ke)=>h.filter(se=>f(se,ue,ke)).reduce((se,U)=>se+(U.actual_min||0),0),I=h.filter(ue=>f(ue,s,l)),B=I.reduce((ue,ke)=>ue+(ke.actual_min||0),0),z=m(a,s),w=m(d,a),p=I.length,b=Array(24).fill(0);I.forEach(ue=>{b[c(ue).getHours()]+=ue.actual_min||0});const u=Math.max(...b,0),j=Bv(u),x={};I.forEach(ue=>{const ke=Yt[ue.tree]?ue.tree:rn;x[ke]=(x[ke]||0)+(ue.actual_min||0)});const T=Object.entries(x).map(([ue,ke])=>({name:Yt[ue].label,min:ke,color:Yt[ue].leaf})).sort((ue,ke)=>ke.min-ue.min),R=z>0?Math.round((B-z)/z*100):B>0?100:0,k=R>0?Qi:R<0?Yn:pm,y=R>0?"#4C9A6B":R<0?"#C2536B":"#9A968C",K={day:"yesterday",week:"last week",month:"last month",year:"last year"}[n],q={day:"2 days ago",week:"2 weeks ago",month:"2 months ago",year:"2 years ago"}[n],oe=54,L=22,he=2*Math.PI*oe;let Se=0;return t.jsxs("div",{style:Oe.page,children:[t.jsxs("div",{style:Oe.topbar,children:[t.jsxs("button",{onClick:r,style:Oe.back,children:[t.jsx(im,{size:18})," Grove"]}),t.jsx("h1",{style:Oe.h1,children:"Insights"}),t.jsx("div",{style:{width:76}})]}),t.jsx("div",{style:Oe.rangeBar,children:Tv.map(ue=>t.jsx("button",{onClick:()=>o(ue.id),style:{...Oe.rangeBtn,...n===ue.id?Oe.rangeOn:{}},children:ue.label},ue.id))}),t.jsxs("div",{style:Oe.headline,children:[t.jsxs("div",{style:Oe.bigStat,children:[t.jsx("div",{style:Oe.bigVal,children:cn(B)}),t.jsxs("div",{style:Oe.bigLbl,children:["Focused this ",n]})]}),t.jsxs("div",{style:Oe.bigStat,children:[t.jsx("div",{style:Oe.bigVal,children:p}),t.jsx("div",{style:Oe.bigLbl,children:"Trees"})]})]}),t.jsxs("div",{style:Oe.card,children:[t.jsxs("div",{style:Oe.cardHead,children:[t.jsxs("div",{style:Oe.cardTitle,children:["Your forest this ",n]}),t.jsx("div",{style:Oe.cardHint,children:"Each tree is a completed session — bigger means longer focus"})]}),t.jsx(Lv,{sessions:I}),t.jsxs("div",{style:Oe.forestNumber,children:[p," ",p===1?"tree":"trees"," · ",cn(B)," focused"]})]}),t.jsx(od,{title:"Focus distribution",hint:"Minutes focused at each time of day",children:u===0?t.jsx(gp,{}):t.jsx(Mv,{hours:b,axis:j})}),t.jsx(od,{title:"Pillar distribution",hint:"How your focus splits across the five trees",children:T.length===0?t.jsx(gp,{}):t.jsxs("div",{style:Oe.donutWrap,children:[t.jsxs("svg",{viewBox:"0 0 140 140",width:"150",height:"150",style:{flexShrink:0},children:[T.map(ue=>{const ke=ue.min/(B||1)*he,se=t.jsx("circle",{cx:"70",cy:"70",r:oe,fill:"none",stroke:ue.color,strokeWidth:L,strokeDasharray:`${ke} ${he-ke}`,strokeDashoffset:-Se,transform:"rotate(-90 70 70)"},ue.name);return Se+=ke,se}),t.jsx("text",{x:"70",y:"66",textAnchor:"middle",style:Oe.donutCenterTop,children:cn(B)}),t.jsx("text",{x:"70",y:"82",textAnchor:"middle",style:Oe.donutCenterSub,children:"total"})]}),t.jsx("div",{style:Oe.legend,children:T.map(ue=>t.jsxs("div",{style:Oe.legendRow,children:[t.jsx("span",{style:{...Oe.legendDot,background:ue.color}}),t.jsx("span",{style:Oe.legendName,children:ue.name}),t.jsxs("span",{style:Oe.legendVal,children:[cn(ue.min)," · ",Math.round(ue.min/(B||1)*100),"%"]})]},ue.name))})]})}),t.jsxs(od,{title:"Focus trend",hint:`This ${n} vs the previous two`,children:[t.jsxs("div",{style:Oe.trend3,children:[t.jsxs("div",{style:Oe.trendCol,children:[t.jsx("div",{style:Oe.trendVal,children:cn(B)}),t.jsxs("div",{style:Oe.trendLbl,children:["This ",n]})]}),t.jsxs("div",{style:Oe.trendCol,children:[t.jsx("div",{style:{...Oe.trendVal,color:"var(--text-2)"},children:cn(z)}),t.jsx("div",{style:Oe.trendLbl,children:K})]}),t.jsxs("div",{style:Oe.trendCol,children:[t.jsx("div",{style:{...Oe.trendVal,color:"var(--text-3)"},children:cn(w)}),t.jsx("div",{style:Oe.trendLbl,children:q})]})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:t.jsxs("div",{style:{...Oe.trendBadge,color:y,background:y+"1A"},children:[t.jsx(k,{size:15})," ",R>0?"+":"",R,"% vs ",K]})}),t.jsx(_v,{items:[{label:`This ${n}`,value:B,color:"#4C9A6B"},{label:K,value:z,color:"var(--text-3)"},{label:q,value:w,color:"var(--text-3)"}]})]})]})}const Wv=e=>e===0?"12a":e<12?`${e}a`:e===12?"12p":`${e-12}p`;function Mv({hours:e,axis:r}){return t.jsxs("div",{children:[t.jsxs("div",{style:Oe.vcPlot,children:[r.ticks.map(n=>t.jsxs("div",{style:{...Oe.vcGridRow,bottom:`${n/r.max*100}%`},children:[t.jsx("span",{style:Oe.vcYLabel,children:n}),t.jsx("div",{style:Oe.vcGridLine})]},n)),t.jsx("div",{style:Oe.vcBars,children:e.map((n,o)=>t.jsx("div",{style:Oe.vcCell,title:`${Iv(o)} · ${n} min`,children:t.jsx("div",{style:{...Oe.vcBar,height:n>0?`max(3px, ${n/r.max*100}%)`:0}})},o))})]}),t.jsx("div",{style:Oe.vcXAxis,children:e.map((n,o)=>t.jsx("div",{style:Oe.vcXCell,children:o%3===0?Wv(o):""},o))}),t.jsx("div",{style:Oe.vcYTitle,children:"minutes focused, by hour of day"})]})}function Lv({sessions:e}){if(!e.length)return t.jsx("div",{style:Oe.sceneEmpty,children:"No trees yet this period. 🌱"});const n=e.slice(0,80),o=e.length-n.length,i=s=>Math.round(Math.max(40,Math.min(88,40+(s||0)*.6)));return t.jsxs("div",{children:[t.jsx("div",{style:Oe.scene,children:n.map(s=>t.jsx("div",{style:Oe.sceneTree,title:`${s.label||"Focus"} · ${cn(s.actual_min||s.duration_min)}`,children:t.jsx(Eg,{species:s.tree,progress:1,size:i(s.actual_min||s.duration_min)})},s.id))}),o>0&&t.jsxs("div",{style:Oe.overflow,children:["+",o," more trees"]})]})}function od({title:e,hint:r,children:n}){return t.jsxs("div",{style:Oe.card,children:[t.jsxs("div",{style:Oe.cardHead,children:[t.jsx("div",{style:Oe.cardTitle,children:e}),r&&t.jsx("div",{style:Oe.cardHint,children:r})]}),n]})}function gp(){return t.jsx("div",{style:Oe.empty,children:"No focus sessions in this period yet. 🌱"})}function _v({items:e}){const r=Math.max(1,...e.map(n=>n.value));return t.jsx("div",{style:Oe.tbWrap,children:e.map(n=>t.jsxs("div",{style:Oe.tbRow,children:[t.jsx("div",{style:Oe.tbLbl,children:n.label}),t.jsx("div",{style:Oe.tbTrack,children:t.jsx("div",{style:{...Oe.tbBar,width:`${n.value/r*100}%`,background:n.color}})}),t.jsx("div",{style:Oe.tbVal,children:cn(n.value)})]},n.label))})}const Oe={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"20px 16px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:720,margin:"0 auto"},topbar:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},back:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},h1:{fontSize:20,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},rangeBar:{display:"flex",gap:6,background:"var(--surface)",padding:5,borderRadius:12,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},rangeBtn:{flex:1,border:"none",background:"none",padding:"9px 0",borderRadius:8,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},rangeOn:{background:"var(--accent-strong)",color:"#fff"},headline:{display:"flex",gap:12,marginBottom:16},bigStat:{flex:1,background:"var(--surface)",borderRadius:14,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},bigVal:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em"},bigLbl:{fontSize:12,color:"var(--text-3)",marginTop:3,fontWeight:500},card:{background:"var(--surface)",borderRadius:16,padding:"18px 18px 20px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},cardHead:{marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardHint:{fontSize:12,color:"var(--text-3)",marginTop:2},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"24px 0"},scene:{display:"flex",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"center",gap:"0 2px",padding:"14px 8px 6px",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,minHeight:110,border:"1px solid var(--border)"},sceneTree:{lineHeight:0},sceneEmpty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"34px 0",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,border:"1px solid var(--border)"},overflow:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",marginTop:6,fontWeight:600},forestNumber:{textAlign:"center",marginTop:12,fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},vcPlot:{position:"relative",height:180,paddingLeft:30},vcGridRow:{position:"absolute",left:0,right:0,display:"flex",alignItems:"center",height:0},vcYLabel:{width:26,marginRight:4,textAlign:"right",fontSize:9,color:"var(--text-3)",fontWeight:600,flexShrink:0},vcGridLine:{flex:1,height:1,background:"#EEEBE4"},vcBars:{position:"absolute",left:30,right:0,top:0,bottom:0,display:"flex",alignItems:"flex-end",gap:1},vcCell:{flex:1,height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"center"},vcBar:{width:"72%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",transition:"height 0.3s"},vcXAxis:{display:"flex",marginLeft:30,marginTop:4},vcXCell:{flex:1,textAlign:"center",fontSize:8.5,color:"var(--text-3)",fontWeight:600,overflow:"hidden"},vcYTitle:{textAlign:"center",fontSize:9.5,color:"var(--text-3)",marginTop:6,letterSpacing:"0.06em",textTransform:"uppercase",fontWeight:600},donutWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap",justifyContent:"center"},donutCenterTop:{fontSize:16,fontWeight:800,fill:"var(--text)",fontFamily:"'Fraunces',Georgia,serif"},donutCenterSub:{fontSize:9,fill:"#9A968C",textTransform:"uppercase",letterSpacing:"0.08em"},legend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:11,height:11,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},legendVal:{fontSize:12,color:"var(--text-3)",fontWeight:600,flexShrink:0},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:56,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},$v=[15,30,45,60,90],id="anvil_grove_active",up=e=>`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`,ea=e=>e>=60?`${Math.floor(e/60)}h ${e%60}m`:`${e}m`;function Pv(){const[e,r]=g.useState("timer"),[n,o]=g.useState("idle"),[i,s]=g.useState(15),[l,a]=g.useState(!1),[d,c]=g.useState(""),[h,f]=g.useState(rn),[m,I]=g.useState(()=>localStorage.getItem("anvil_grove_deepfocus")!=="0"),[B,z]=g.useState(15*60),[w,p]=g.useState({sessions:[],stats:null}),b=g.useRef(null),u=g.useRef(null),j=g.useRef(!1),x=g.useCallback(async()=>{try{p(await E.getFocus())}catch{}},[]),T=g.useCallback(async(X,S)=>{if(!j.current){j.current=!0,localStorage.removeItem(id);try{await E.createFocus({label:d.trim()||null,tree:h,duration_min:i,actual_min:S,completed:X,started_at:u.current,ended_at:new Date().toISOString()})}catch{}x()}},[d,h,i,x]),R=g.useCallback(()=>{if(n!=="running")return;const X=u.current?Math.round((Date.now()-new Date(u.current).getTime())/6e4):0;o("failed"),T(!1,Math.max(0,Math.min(i,X)))},[n,i,T]),k=g.useCallback(()=>{o("done"),z(0),T(!0,i)},[i,T]);g.useEffect(()=>{x();const X=JSON.parse(localStorage.getItem(id)||"null");if(X&&X.endTime){const S=Math.round((X.endTime-Date.now())/1e3);s(X.duration),c(X.label||""),f(X.tree||"oak"),b.current=X.endTime,u.current=X.startedAt,S>0?(z(S),o("running")):(o("done"),j.current=!1,T(!0,X.duration))}},[]),g.useEffect(()=>{if(n!=="running")return;const X=()=>{const W=Math.round((b.current-Date.now())/1e3);if(W<=0){k();return}z(W)};X();const S=setInterval(X,250);return()=>clearInterval(S)},[n,k]),g.useEffect(()=>{if(n!=="running"||!m)return;const X=()=>{document.hidden&&R()};return document.addEventListener("visibilitychange",X),()=>document.removeEventListener("visibilitychange",X)},[n,m,R]),g.useEffect(()=>{const X=()=>{!document.hidden&&n!=="running"&&x()};window.addEventListener("focus",X),document.addEventListener("visibilitychange",X);const S=setInterval(X,6e4);return()=>{window.removeEventListener("focus",X),document.removeEventListener("visibilitychange",X),clearInterval(S)}},[x,n]);const y=()=>I(X=>{const S=!X;return localStorage.setItem("anvil_grove_deepfocus",S?"1":"0"),S}),K=()=>{j.current=!1,u.current=new Date().toISOString(),b.current=Date.now()+i*60*1e3,localStorage.setItem(id,JSON.stringify({endTime:b.current,duration:i,label:d,tree:h,startedAt:u.current})),z(i*60),o("running")},q=()=>{o("idle"),z(i*60)},oe=X=>{a(!1),s(X),z(X*60)},L=()=>{l||(a(!0),s(5),z(5*60))},he=X=>{if(a(!0),X===""){s(0),z(0);return}const S=Math.max(1,Math.min(600,parseInt(X,10)||0));s(S),z(S*60)},Se=i*60,ue=n==="running"?1-B/Se:n==="done"?1:0,ke=130,se=2*Math.PI*ke,U=se*(1-(n==="running"?ue:n==="done"?1:0)),de=w.stats;return e==="stats"?t.jsx(Av,{sessions:w.sessions,onBack:()=>r("timer")}):t.jsxs("div",{style:Ye.page,children:[t.jsxs("div",{style:Ye.head,children:[t.jsx("div",{style:Ye.eyebrow,children:"Anvil · Grove"}),t.jsx("h1",{style:Ye.h1,children:"Grove"}),t.jsx("div",{style:Ye.subhead,children:"Plant a tree, stay focused, grow your grove."}),t.jsxs("button",{onClick:()=>r("stats"),style:Ye.insightsBtn,disabled:n==="running",children:[t.jsx(Ly,{size:15})," Insights"]})]}),de&&t.jsxs("div",{style:Ye.statRow,children:[t.jsx(tl,{label:"Today",value:ea(de.today_minutes)}),t.jsx(tl,{label:"Trees",value:de.trees}),t.jsx(tl,{label:"Streak",value:`${de.streak}d`}),t.jsx(tl,{label:"Success",value:`${de.success_rate}%`})]}),t.jsxs("div",{style:Ye.stage,children:[t.jsxs("div",{style:Ye.ringWrap,children:[t.jsxs("svg",{width:"300",height:"300",viewBox:"0 0 300 300",style:{position:"absolute",inset:0},children:[t.jsx("circle",{cx:"150",cy:"150",r:ke,fill:"none",stroke:"var(--border)",strokeWidth:"10"}),t.jsx("circle",{cx:"150",cy:"150",r:ke,fill:"none",stroke:n==="failed"?"#C2536B":"#4C9A6B",strokeWidth:"10",strokeLinecap:"round",strokeDasharray:se,strokeDashoffset:U,transform:"rotate(-90 150 150)",style:{transition:"stroke-dashoffset 0.4s linear"}})]}),t.jsx("div",{style:Ye.ringInner,children:t.jsx(Eg,{species:h,progress:n==="idle"?0:ue,withered:n==="failed",size:170})})]}),n==="idle"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:Ye.timeBig,children:up(i*60)}),t.jsxs("div",{style:Ye.controls,children:[t.jsxs("div",{style:Ye.chips,children:[$v.map(X=>t.jsxs("button",{onClick:()=>oe(X),style:{...Ye.chip,...!l&&i===X?Ye.chipOn:{}},children:[X,"m"]},X)),t.jsx("button",{onClick:L,style:{...Ye.chip,...l?Ye.chipOn:{}},children:"Custom"})]}),l&&t.jsxs("div",{style:Ye.customRow,children:[t.jsx("input",{type:"number",min:"1",max:"600",inputMode:"numeric",autoFocus:!0,value:i||"",onChange:X=>he(X.target.value),placeholder:"e.g. 50",style:Ye.customInput}),t.jsx("span",{style:Ye.customUnit,children:"minutes"})]}),t.jsx("input",{value:d,onChange:X=>c(X.target.value),placeholder:"What are you focusing on? (optional)",style:Ye.input,maxLength:60}),t.jsx("div",{style:Ye.treePick,children:Object.entries(Yt).map(([X,S])=>t.jsxs("button",{onClick:()=>f(X),title:S.label,style:{...Ye.treeBtn,...h===X?{borderColor:S.leaf,background:S.leaf+"1A"}:{}},children:[t.jsx("span",{style:{...Ye.treeDot,background:S.leaf}}),S.label]},X))}),t.jsxs("button",{onClick:y,style:Ye.toggleRow,children:[t.jsxs("div",{style:{textAlign:"left"},children:[t.jsx("div",{style:Ye.toggleTitle,children:"Deep Focus"}),t.jsx("div",{style:Ye.toggleHint,children:m?"Leaving the app kills the tree":"Tree survives until you give up"})]}),t.jsx("div",{style:{...Ye.switch,...m?Ye.switchOn:{}},children:t.jsx("div",{style:{...Ye.knob,...m?Ye.knobOn:{}}})})]}),t.jsx("button",{onClick:K,disabled:i<1,style:{...Ye.plantBtn,...i<1?{opacity:.5,cursor:"not-allowed"}:{}},children:"Plant tree"})]})]}),n==="running"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:Ye.timeBig,children:up(B)}),t.jsx("div",{style:Ye.focusLabel,children:d.trim()||"Focusing…"}),t.jsx("div",{style:m?Ye.warn:Ye.warnSoft,children:m?"⚠ Deep Focus on — leaving this app will kill your tree.":"🌿 Relaxed mode — only Give up ends this session."}),t.jsx("button",{onClick:R,style:Ye.giveUp,children:"Give up"})]}),n==="done"&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:Ye.resultTitle,children:["🌳 You grew a ",Yt[h].label," tree!"]}),t.jsxs("div",{style:Ye.resultSub,children:[ea(i)," of focus added to your grove."]}),t.jsx("button",{onClick:q,style:Ye.plantBtn,children:"Plant another"})]}),n==="failed"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{...Ye.resultTitle,color:"#C2536B"},children:"Your tree withered."}),t.jsx("div",{style:Ye.resultSub,children:"You left before the timer finished. Try again?"}),t.jsx("button",{onClick:q,style:Ye.plantBtn,children:"Try again"})]})]}),t.jsx(Nv,{sessions:w.sessions,onDelete:async X=>{await E.deleteFocus(X),x()}})]})}function tl({label:e,value:r}){return t.jsxs("div",{style:Ye.stat,children:[t.jsx("div",{style:Ye.statValue,children:r}),t.jsx("div",{style:Ye.statLabel,children:e})]})}function Nv({sessions:e,onDelete:r}){const n=e.filter(l=>l.completed);if(n.length===0)return t.jsx("div",{style:Ye.forestEmpty,children:"Your grove is empty. Plant your first tree above. 🌱"});const o={};for(const l of n){const a=(l.started_at||l.created_at||"").slice(0,10);(o[a]||(o[a]=[])).push(l)}const i=Object.keys(o).sort().reverse(),s=l=>{const a=new Date().toISOString().slice(0,10);return l===a?"Today":new Date(l+"T00:00").toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})};return t.jsxs("div",{style:Ye.forest,children:[t.jsxs("div",{style:Ye.forestHead,children:["Your Grove · ",n.length," trees"]}),i.map(l=>t.jsxs("div",{style:Ye.daySection,children:[t.jsxs("div",{style:Ye.dayLabel,children:[s(l)," · ",o[l].length]}),t.jsx("div",{style:Ye.treeGrid,children:o[l].map(a=>t.jsxs("div",{style:Ye.treeCard,title:`${a.label||"Focus"} · ${ea(a.actual_min)}`,onDoubleClick:()=>r(a.id),children:[t.jsx(I0,{species:a.tree}),t.jsx("div",{style:Ye.treeCardMin,children:ea(a.actual_min||a.duration_min)}),a.label&&t.jsx("div",{style:Ye.treeCardLabel,children:a.label})]},a.id))})]},l)),t.jsx("div",{style:Ye.forestHint,children:"Double-tap a tree to remove it."})]})}const Ye={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:820,margin:"0 auto"},head:{marginBottom:16,textAlign:"center"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},insightsBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginTop:12},statRow:{display:"flex",gap:10,justifyContent:"center",marginBottom:18,flexWrap:"wrap"},stat:{background:"var(--surface)",borderRadius:12,padding:"10px 18px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",minWidth:78},statValue:{fontSize:19,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},statLabel:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},stage:{background:"var(--surface)",borderRadius:18,padding:"28px 24px 32px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",display:"flex",flexDirection:"column",alignItems:"center",marginBottom:26},ringWrap:{position:"relative",width:300,height:300,display:"grid",placeItems:"center"},ringInner:{position:"relative",zIndex:1,display:"grid",placeItems:"center"},timeBig:{fontSize:40,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:6},focusLabel:{fontSize:14,color:"var(--text-2)",marginTop:2,fontWeight:500},warn:{fontSize:12,color:"#C2773B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},warnSoft:{fontSize:12,color:"#4C9A6B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},toggleRow:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:12,padding:"10px 14px",cursor:"pointer",fontFamily:"inherit",width:"100%"},toggleTitle:{fontSize:14,fontWeight:700,color:"var(--text)"},toggleHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},switch:{width:42,height:24,borderRadius:12,background:"var(--border)",flexShrink:0,padding:2,transition:"background 0.18s",boxSizing:"border-box"},switchOn:{background:"#4C9A6B"},knob:{width:20,height:20,borderRadius:"50%",background:"var(--surface)",boxShadow:"0 1px 2px rgba(0,0,0,0.2)",transform:"translateX(0)",transition:"transform 0.18s"},knobOn:{transform:"translateX(18px)"},controls:{width:"100%",maxWidth:380,display:"flex",flexDirection:"column",gap:14,marginTop:8},chips:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},chip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},customRow:{display:"flex",alignItems:"center",justifyContent:"center",gap:8},customInput:{border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:15,fontWeight:700,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center",width:100},customUnit:{fontSize:13,color:"var(--text-3)",fontWeight:600},input:{border:"1px solid var(--border)",borderRadius:10,padding:"11px 13px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center"},treePick:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},treeBtn:{display:"flex",alignItems:"center",gap:6,border:"1.5px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},treeDot:{width:10,height:10,borderRadius:"50%"},plantBtn:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},giveUp:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",padding:"11px 26px",borderRadius:11,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:18},resultTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginTop:14,textAlign:"center"},resultSub:{fontSize:13.5,color:"var(--text-3)",marginTop:6,marginBottom:18,textAlign:"center"},forest:{background:"var(--surface)",borderRadius:16,padding:"20px 22px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},forestHead:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},forestEmpty:{background:"var(--surface)",borderRadius:16,padding:"40px 20px",textAlign:"center",color:"var(--text-3)",fontSize:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},daySection:{marginBottom:16},dayLabel:{fontSize:12,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:8},treeGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(80px,1fr))",gap:8},treeCard:{display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 4px",borderRadius:10,cursor:"pointer",background:"var(--surface-2)"},treeCardMin:{fontSize:12,fontWeight:700,color:"#4C9A6B",marginTop:-4},treeCardLabel:{fontSize:10.5,color:"var(--text-3)",marginTop:2,textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:76},forestHint:{fontSize:11,color:"var(--text-3)",textAlign:"center",marginTop:6}},Ov="grove_rates",Hv="reward_rates",rl=Object.keys(Yt),pp=[{id:"kickstart",label:"Kickstart"},{id:"golden",label:"Golden Book"},{id:"habits",label:"Habits"},{id:"quadrant",label:"Quadrant"},{id:"goals",label:"Goals"},{id:"grove",label:"Grove"},{id:"journal",label:"Journal"},{id:"revision",label:"Revision"},{id:"affirmations",label:"Affirmations"},{id:"skills",label:"Skills"},{id:"spiritual",label:"Spiritual"},{id:"mindscape",label:"Mindscape"},{id:"vault",label:"Wallet"},{id:"expenses",label:"Expenses"},{id:"trading",label:"Trading Journal"},{id:"delight",label:"Delights"},{id:"achievements",label:"Achievements"},{id:"challenges",label:"Challenges"},{id:"bucket",label:"Bucket List"}],sd=new Set(["worth"]),bp="reward_toggles",hp="bucket_take_enabled",In="#C9A227",Ro="#3A7CA5",oo="#C2536B",io="#4C9A6B",mp=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#5B9B9B","#B0654E","#6E7FC2","#A23E57","#3E9E6B","#9A7BB0","#C99B2E","#4E86B0","#B04E86","#6BA34C","#8A6D3B"],Gv=e=>{const r=Math.floor(e/60),n=Math.round(e%60);return r&&n?`${r}h ${n}m`:r?`${r}h`:`${n}m`},ld=e=>{let r=Math.round((e||0)*60);const n=Math.floor(r/3600);r%=3600;const o=Math.floor(r/60);return r%=60,[n?`${n}h`:null,n||o?`${o}m`:null,`${r}s`].filter(Boolean).join(" ")},Uv=()=>{const e=new Date,r=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${r(e.getMonth()+1)}-${r(e.getDate())}T${r(e.getHours())}:${r(e.getMinutes())}`},fp=e=>{if(!e)return"";const r=new Date(e.includes("T")?e:e+"T00:00:00");return isNaN(r)?e:r.toLocaleDateString("en-US",e.includes("T")?{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}:{month:"short",day:"numeric",year:"numeric"})},xr=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,xp=e=>{const r=new Date(e);return r.setHours(0,0,0,0),r.setDate(r.getDate()-(r.getDay()+6)%7),r},Eo=[{id:"today",label:"Today"},{id:"all",label:"All time"},{id:"tweek",label:"This week"},{id:"tmonth",label:"This month"},{id:"pweek",label:"Last week"},{id:"pmonth",label:"Last month"},{id:"tyear",label:"This year"}];function Vv(e){const r=new Date;if(e==="today")return[xr(r),xr(r)];if(e==="tweek"){const n=xp(r),o=new Date(n);return o.setDate(n.getDate()+6),[xr(n),xr(o)]}if(e==="pweek"){const n=xp(r);n.setDate(n.getDate()-7);const o=new Date(n);return o.setDate(n.getDate()+6),[xr(n),xr(o)]}return e==="tmonth"?[xr(new Date(r.getFullYear(),r.getMonth(),1)),xr(new Date(r.getFullYear(),r.getMonth()+1,0))]:e==="pmonth"?[xr(new Date(r.getFullYear(),r.getMonth()-1,1)),xr(new Date(r.getFullYear(),r.getMonth(),0))]:e==="tyear"?[xr(new Date(r.getFullYear(),0,1)),xr(new Date(r.getFullYear(),11,31))]:["0000-01-01","9999-12-31"]}function Yv(){const e=Jn(),r=$=>Or($,e.code),[n,o]=g.useState([]),[i,s]=g.useState([]),[l,a]=g.useState([]),[d,c]=g.useState([]),[h,f]=g.useState([]),[m,I]=g.useState([]),[B,z]=g.useState({}),[w,p]=g.useState({}),[b,u]=g.useState({focus:!0,usage:!0,achievement:!0,challenge:!0}),[j,x]=g.useState(!1),[T,R]=g.useState({}),[k,y]=g.useState({}),[K,q]=g.useState(!1),[oe,L]=g.useState(!1),[he,Se]=g.useState(null),[ue,ke]=g.useState(""),[se,U]=g.useState(""),[de,X]=g.useState(!1),[S,W]=g.useState("today"),[O,N]=g.useState([]),[le,ge]=g.useState(!1),[Ae,Y]=g.useState(null),ae=()=>E.getPayouts().then(c).catch(()=>{}),_=()=>E.getBucket().then($=>N(Array.isArray($)?$:[])).catch(()=>{}),ne=()=>E.getRewardRates().then(a).catch(()=>{});g.useEffect(()=>{(async()=>{try{const[$,Ee,ot,A,Z,Te,Ne,rt,Ze,et,ht]=await Promise.all([E.getFocus(),E.getScreenTime(),E.getRewardRates(),E.getPayouts(),E.getAchievements(),E.getChallenges(),E.getBucket(),E.getSetting(Ov),E.getSetting(Hv),E.getSetting(bp),E.getSetting(hp)]);o($.sessions||[]),s(Array.isArray(Ee)?Ee:[]),a(ot||[]),c(A||[]),f(Array.isArray(Z)?Z:[]),I(Array.isArray(Te)?Te:[]),N(Array.isArray(Ne)?Ne:[]),z((rt==null?void 0:rt.value)||{}),p((Ze==null?void 0:Ze.value)||{}),et!=null&&et.value&&u(Ie=>({...Ie,...et.value})),ge(!!(ht!=null&&ht.value))}catch{}x(!0)})()},[]);const xe={};l.forEach($=>{var Ee;(xe[Ee=`${$.kind}:${$.rkey}`]||(xe[Ee]=[])).push({eff:$.eff_date,rate:$.rate})}),Object.values(xe).forEach($=>$.sort((Ee,ot)=>Ee.eff.localeCompare(ot.eff)));const D=($,Ee,ot)=>{const A=xe[`${$}:${Ee}`];if(A){let Z=null;for(const Te of A)if(Te.eff<=ot)Z=Te.rate;else break;if(Z!==null)return Z}return($==="focus"?B[Ee]:w[Ee])||0},v=($,Ee)=>{const ot=xe[`${$}:${Ee}`];return ot&&ot.length?ot[ot.length-1].rate:($==="focus"?B[Ee]:w[Ee])??""},[re,F]=Vv(S);let ce=0,ye=0;n.filter($=>$.completed).forEach($=>{const Ee=($.started_at||$.created_at||"").slice(0,10),ot=Yt[$.tree]?$.tree:rn;ce+=($.actual_min||0)/60*D("focus",ot,Ee)}),i.forEach($=>{sd.has($.screen)||(ye+=$.seconds/60*D("usage",$.screen,$.date))});const We=h.reduce(($,Ee)=>$+(Ee.reward||0),0),qe=m.filter($=>$.status==="done"),dt=qe.reduce(($,Ee)=>$+(Ee.reward_earned||0),0),$e=(b.focus?ce:0)+(b.usage?ye:0)+(b.achievement?We:0)+(b.challenge?dt:0),nt=d.reduce(($,Ee)=>$+Ee.amount,0),Ke=Math.max(0,$e-nt),gt=$=>{let Ee=0,ot=0;return b.focus&&n.filter(A=>A.completed).forEach(A=>{const Z=(A.started_at||A.created_at||"").slice(0,10);if(Z!==$)return;const Te=Yt[A.tree]?A.tree:rn;Ee+=(A.actual_min||0)/60*D("focus",Te,Z)}),b.usage&&i.forEach(A=>{sd.has(A.screen)||A.date!==$||(ot+=A.seconds/60*D("usage",A.screen,A.date))}),Ee+ot},ie=$=>{const Ee=new Date;return Ee.setDate(Ee.getDate()+$),xr(Ee)},Me=[{label:"Today",value:gt(ie(0)),color:In},{label:"Yesterday",value:gt(ie(-1)),color:"var(--text-3)"},{label:"Day before",value:gt(ie(-2)),color:"var(--text-3)"}],Xe={};rl.forEach($=>Xe[$]={minutes:0,earned:0}),n.filter($=>$.completed).forEach($=>{const Ee=($.started_at||$.created_at||"").slice(0,10);if(Ee<re||Ee>F)return;const ot=Yt[$.tree]?$.tree:rn,A=$.actual_min||0;Xe[ot].minutes+=A,Xe[ot].earned+=A/60*D("focus",ot,Ee)});const tt=b.focus?rl.reduce(($,Ee)=>$+Xe[Ee].earned,0):0,bt={};i.forEach($=>{var ot;if(sd.has($.screen)||$.date<re||$.date>F)return;const Ee=bt[ot=$.screen]||(bt[ot]={seconds:0,earned:0});Ee.seconds+=$.seconds,Ee.earned+=$.seconds/60*D("usage",$.screen,$.date)});const It=b.usage?Object.values(bt).reduce(($,Ee)=>$+Ee.earned,0):0,Bt=h.filter($=>$.date>=re&&$.date<=F&&($.reward||0)>0),mt=[...Bt].sort(($,Ee)=>Ee.date.localeCompare($.date)||Ee.reward-$.reward),ft=b.achievement?Bt.reduce(($,Ee)=>$+(Ee.reward||0),0):0,Rt=qe.filter($=>!$.end_date||$.end_date>=re&&$.end_date<=F),M=[...Rt].sort(($,Ee)=>(Ee.reward_earned||0)-($.reward_earned||0)),ee=b.challenge?Rt.reduce(($,Ee)=>$+(Ee.reward_earned||0),0):0,Le=tt+It+ft+ee,Pe=Le>0?tt/Le*100:0,st=Le>0?It/Le*100:0,ct=Le>0?ft/Le*100:0,hr=Le>0?ee/Le*100:0,Je=rl.map($=>({p:$,...Xe[$],...Yt[$]})).filter($=>$.minutes>0).sort(($,Ee)=>Ee.earned-$.earned),G=pp.map($=>({...$,...bt[$.id]||{seconds:0,earned:0}})).filter($=>$.seconds>0).sort(($,Ee)=>Ee.earned-$.earned),ve=G.reduce(($,Ee)=>$+Ee.seconds,0);let Lt=0;const Nt=G.map(($,Ee)=>{const ot=ve>0?Lt/ve*100:0;Lt+=$.seconds;const A=ve>0?Lt/ve*100:0;return{...$,color:mp[Ee%mp.length],start:ot,end:A,pct:ve>0?$.seconds/ve*100:0}}),sr=Nt.length?`conic-gradient(${Nt.map($=>`${$.color} ${$.start}% ${$.end}%`).join(", ")})`:"var(--surface-2)",Cr=async()=>{const $=Object.entries(T);for(const[Ee,ot]of $)await E.setRewardRate({kind:"focus",rkey:Ee,rate:Math.max(0,parseFloat(ot)||0)}).catch(()=>{});R({}),q(!1),ne()},Cn=()=>{R({}),q(!1)},zr=async()=>{const $=Object.entries(k);for(const[Ee,ot]of $)await E.setRewardRate({kind:"usage",rkey:Ee,rate:Math.max(0,parseFloat(ot)||0)}).catch(()=>{});y({}),L(!1),ne()},on=()=>{y({}),L(!1)},lr=$=>{u(Ee=>{const ot={...Ee,[$]:!Ee[$]};return E.setSetting(bp,ot).catch(()=>{}),ot})},eo=$=>{Ke<=0||(Se($),ke($==="all"?Ke.toFixed(2):""),U(""),Y(null))},zn=async()=>{const $=Math.min(parseFloat(ue)||0,Ke);$<=0||!se.trim()||(await E.createPayout({amount:$,note:se.trim(),date:Uv()}),Se(null),ke(""),U(""),await ae(),X(!0))},bi=async()=>{!Ae||(Ae.cost||0)>Ke||(await E.fulfillBucketWish(Ae.id).catch(()=>{}),Se(null),Y(null),await Promise.all([ae(),_()]),X(!0))},hi=()=>{ge($=>{const Ee=!$;return E.setSetting(hp,Ee).catch(()=>{}),Ee})},Sa=async $=>{await E.deletePayout($),ae()};return t.jsxs("div",{style:P.page,children:[t.jsxs("div",{style:P.head,children:[t.jsx("div",{style:P.eyebrow,children:"Anvil · Rewards"}),t.jsx("h1",{style:P.h1,children:"Rewards"}),t.jsx("div",{style:P.subhead,children:"Your earned rewards from focus and app usage."})]}),t.jsxs("div",{style:P.hero,children:[t.jsx("button",{onClick:()=>X($=>!$),style:P.logIcon,title:"View reward log",children:t.jsx(b0,{size:16})}),t.jsx("div",{style:P.heroLabel,children:"Final reward · pending"}),t.jsx("div",{style:P.heroVal,children:r(Ke)}),t.jsxs("div",{style:P.heroSub,children:["Earned ",r($e)," · Taken ",r(nt),We>0?` · incl. ${r(We)} achievement`:"",dt>0?` · incl. ${r(dt)} challenge`:""]}),t.jsxs("div",{style:P.heroBtns,children:[t.jsx("button",{onClick:()=>eo("partial"),disabled:Ke<=0,style:{...P.heroBtnGhost,...Ke<=0?P.btnDisabled:{}},children:"Take partial"}),t.jsx("button",{onClick:()=>eo("all"),disabled:Ke<=0,style:{...P.heroBtnSolid,...Ke<=0?P.btnDisabled:{}},children:"Take all pending"})]}),t.jsxs("button",{onClick:hi,style:P.bucketToggleRow,title:le?"Taking will pick a bucket-list wish":"Taking uses a free amount",children:[t.jsx("span",{style:{...P.miniToggle,background:le?"#fff":"rgba(255,255,255,0.3)",justifyContent:le?"flex-end":"flex-start"},children:t.jsx("span",{style:{...P.miniKnob,background:le?"var(--accent-strong)":"#fff"}})}),t.jsxs("span",{children:["Fulfil from bucket list",le?" · on":" · off"]})]})]}),t.jsxs("div",{style:P.statRow,children:[t.jsxs("div",{style:P.statCard,children:[t.jsx("div",{style:P.statVal,children:r(nt)}),t.jsx("div",{style:P.statLbl,children:"Total taken"})]}),t.jsxs("div",{style:P.statCard,children:[t.jsx("div",{style:{...P.statVal,color:In},children:r(Ke)}),t.jsx("div",{style:P.statLbl,children:"Total pending"})]})]}),t.jsxs("div",{style:P.card,children:[t.jsx("div",{style:P.threeDayTitle,children:"Earned · last 3 days"}),t.jsx(Kv,{items:Me,reward:r})]}),t.jsx("div",{style:P.periodRow,children:Eo.map($=>t.jsx("button",{onClick:()=>W($.id),style:{...P.periodChip,...S===$.id?P.periodChipOn:{}},children:$.label},$.id))}),Le>0?t.jsxs("div",{style:P.card,children:[t.jsxs("div",{style:P.cardTitleRow,children:[t.jsx("span",{style:P.cardTitle,children:"Reward split"}),t.jsxs("span",{style:P.periodTotal,children:[r(Le)," · ",Eo.find($=>$.id===S).label]})]}),t.jsxs("div",{style:P.splitTrack,children:[t.jsx("div",{style:{width:`${Pe}%`,background:In,height:"100%"}}),t.jsx("div",{style:{width:`${st}%`,background:Ro,height:"100%"}}),t.jsx("div",{style:{width:`${ct}%`,background:oo,height:"100%"}}),t.jsx("div",{style:{width:`${hr}%`,background:io,height:"100%"}})]}),t.jsxs("div",{style:P.legendRow,children:[t.jsxs("span",{style:P.legendItem,children:[t.jsx("span",{style:{...P.legendDot,background:In}})," Focus ",Math.round(Pe),"% · ",r(tt)]}),t.jsxs("span",{style:P.legendItem,children:[t.jsx("span",{style:{...P.legendDot,background:Ro}})," Usage ",Math.round(st),"% · ",r(It)]}),t.jsxs("span",{style:P.legendItem,children:[t.jsx("span",{style:{...P.legendDot,background:oo}})," Achievement ",Math.round(ct),"% · ",r(ft)]}),t.jsxs("span",{style:P.legendItem,children:[t.jsx("span",{style:{...P.legendDot,background:io}})," Challenges ",Math.round(hr),"% · ",r(ee)]})]})]}):t.jsxs("div",{style:{...P.card,...P.muted},children:["No rewards earned in ",Eo.find($=>$.id===S).label.toLowerCase(),"."]}),t.jsxs("div",{style:{...P.card,...b.focus?{}:P.cardOff},children:[t.jsxs("div",{style:P.sectionHead,children:[t.jsxs("span",{style:{...P.cardTitle,color:In},children:["Focus Rewards · ",r(tt)]}),t.jsxs("div",{style:P.sectionHeadRight,children:[b.focus&&t.jsx("button",{onClick:()=>K?Cn():q(!0),style:P.collapseLink,children:K?"Hide rates":"Set rates"}),t.jsx(nl,{on:b.focus,onClick:()=>lr("focus"),color:In})]})]}),b.focus&&K&&t.jsxs("div",{style:{marginTop:12},children:[t.jsx("div",{style:P.rateGrid,children:rl.map($=>t.jsxs("div",{style:P.rateRow,children:[t.jsx("span",{style:{...P.dot,background:Yt[$].leaf}}),t.jsx("span",{style:P.rateName,children:Yt[$].label}),t.jsxs("div",{style:P.rateInputWrap,children:[t.jsx("span",{style:P.unitSign,children:e.symbol}),t.jsx("input",{type:"number",min:"0",step:"0.5",inputMode:"decimal",placeholder:"0",value:T[$]!==void 0?T[$]:v("focus",$),onChange:Ee=>R(ot=>({...ot,[$]:Ee.target.value})),style:P.rateInput}),t.jsx("span",{style:P.unit,children:"/hr"})]})]},$))}),t.jsxs("div",{style:P.rateActions,children:[t.jsx("button",{onClick:Cn,style:P.rateCancel,children:"Cancel"}),t.jsx("button",{onClick:Cr,style:P.rateSave,children:"Save"})]})]}),b.focus?Je.length>0?t.jsx("div",{style:{...P.rows,marginTop:14},children:Je.map($=>t.jsxs("div",{style:P.row,children:[t.jsx("span",{style:{...P.dot,background:$.leaf}}),t.jsx("span",{style:P.rowName,children:$.label}),t.jsx("span",{style:P.rowMeta,children:Gv(Math.round($.minutes))}),t.jsx("span",{style:P.rowAmt,children:r($.earned)})]},$.p))}):t.jsx("div",{style:P.muted,children:"No focus sessions yet."}):t.jsx("div",{style:P.muted,children:"Focus rewards are disabled — no reward is being calculated."})]}),t.jsxs("div",{style:{...P.card,...b.usage?{}:P.cardOff},children:[t.jsxs("div",{style:P.sectionHead,children:[t.jsxs("span",{style:{...P.cardTitle,color:Ro},children:["Usage Rewards · ",r(It)]}),t.jsxs("div",{style:P.sectionHeadRight,children:[b.usage&&t.jsx("button",{onClick:()=>oe?on():L(!0),style:P.collapseLink,children:oe?"Hide rates":"Set rates"}),t.jsx(nl,{on:b.usage,onClick:()=>lr("usage"),color:Ro})]})]}),b.usage&&oe&&t.jsxs("div",{style:{marginTop:12},children:[t.jsx("div",{style:P.rateGrid,children:pp.map($=>t.jsxs("div",{style:P.rateRow,children:[t.jsx("span",{style:P.rateName,children:$.label}),t.jsxs("div",{style:P.rateInputWrap,children:[t.jsx("span",{style:P.unitSign,children:e.symbol}),t.jsx("input",{type:"number",min:"0",step:"0.1",inputMode:"decimal",placeholder:"0",value:k[$.id]!==void 0?k[$.id]:v("usage",$.id),onChange:Ee=>y(ot=>({...ot,[$.id]:Ee.target.value})),style:P.rateInput}),t.jsx("span",{style:P.unit,children:"/min"})]})]},$.id))}),t.jsxs("div",{style:P.rateActions,children:[t.jsx("button",{onClick:on,style:P.rateCancel,children:"Cancel"}),t.jsx("button",{onClick:zr,style:P.rateSave,children:"Save"})]})]}),b.usage?G.length>0?t.jsx("div",{style:{...P.rows,marginTop:14},children:G.map($=>t.jsxs("div",{style:P.row,children:[t.jsx("span",{style:P.rowName,children:$.label}),t.jsx("span",{style:P.rowMeta,children:ld($.seconds/60)}),t.jsx("span",{style:P.rowAmt,children:r($.earned)})]},$.id))}):t.jsx("div",{style:P.muted,children:j?"No usage tracked yet.":"Loading…"}):t.jsx("div",{style:P.muted,children:"Usage rewards are disabled — no reward is being calculated."}),b.usage&&ve>0&&t.jsxs("div",{style:P.usagePieBlock,children:[t.jsxs("div",{style:P.usagePieTitle,children:["Most-used screens · ",Eo.find($=>$.id===S).label]}),t.jsxs("div",{style:P.pieWrap,children:[t.jsxs("div",{style:P.pieChart,children:[t.jsx("div",{style:{...P.pieDisc,background:sr}}),t.jsxs("div",{style:P.pieHole,children:[t.jsx("span",{style:P.pieHoleVal,children:ld(ve/60)}),t.jsx("span",{style:P.pieHoleLbl,children:"total time"})]})]}),t.jsx("div",{style:P.pieLegend,children:Nt.map($=>t.jsxs("div",{style:P.pieLegRow,children:[t.jsx("span",{style:{...P.legendDot,background:$.color}}),t.jsx("span",{style:P.pieLegName,children:$.label}),t.jsxs("span",{style:P.pieLegPct,children:[Math.round($.pct),"%"]}),t.jsx("span",{style:P.pieLegMin,children:ld($.seconds/60)})]},$.id))})]})]})]}),t.jsxs("div",{style:{...P.card,...b.achievement?{}:P.cardOff},children:[t.jsxs("div",{style:P.sectionHead,children:[t.jsxs("span",{style:{...P.cardTitle,color:oo},children:["Achievement Rewards · ",r(ft)]}),t.jsxs("div",{style:P.sectionHeadRight,children:[b.achievement&&t.jsx("span",{style:P.collapseHint,children:"Set in Achievements"}),t.jsx(nl,{on:b.achievement,onClick:()=>lr("achievement"),color:oo})]})]}),b.achievement?mt.length>0?t.jsx("div",{style:{...P.rows,marginTop:14},children:mt.map($=>t.jsxs("div",{style:P.row,children:[t.jsx("span",{style:{...P.dot,background:oo}}),t.jsx("span",{style:P.rowName,children:$.title}),t.jsx("span",{style:P.rowMeta,children:fp($.date)}),t.jsx("span",{style:P.rowAmt,children:r($.reward)})]},$.id))}):t.jsxs("div",{style:{...P.muted,marginTop:10},children:["No achievement rewards in ",Eo.find($=>$.id===S).label.toLowerCase(),". Add a reward to a win in the Achievements section."]}):t.jsx("div",{style:{...P.muted,marginTop:10},children:"Achievement rewards are disabled — no reward is being calculated."})]}),t.jsxs("div",{style:{...P.card,...b.challenge?{}:P.cardOff},children:[t.jsxs("div",{style:P.sectionHead,children:[t.jsxs("span",{style:{...P.cardTitle,color:io},children:["Challenge Rewards · ",r(ee)]}),t.jsxs("div",{style:P.sectionHeadRight,children:[b.challenge&&t.jsx("span",{style:P.collapseHint,children:"Set in Challenges"}),t.jsx(nl,{on:b.challenge,onClick:()=>lr("challenge"),color:io})]})]}),b.challenge?M.length>0?t.jsx("div",{style:{...P.rows,marginTop:14},children:M.map($=>t.jsxs("div",{style:P.row,children:[t.jsx("span",{style:{...P.dot,background:io}}),t.jsx("span",{style:P.rowName,children:$.name}),t.jsx("span",{style:P.rowMeta,children:$.reward||"Completed"}),t.jsx("span",{style:P.rowAmt,children:r($.reward_earned)})]},$.id))}):t.jsxs("div",{style:{...P.muted,marginTop:10},children:["No completed challenges in ",Eo.find($=>$.id===S).label.toLowerCase(),". Finish a challenge in the Challenges section to bank its reward."]}):t.jsx("div",{style:{...P.muted,marginTop:10},children:"Challenge rewards are disabled — no reward is being calculated."})]}),de&&t.jsx("div",{style:P.modalOverlay,onClick:()=>X(!1),children:t.jsxs("div",{style:P.logModal,onClick:$=>$.stopPropagation(),children:[t.jsxs("div",{style:P.logModalHead,children:[t.jsx("span",{style:P.modalTitle,children:"Reward log"}),t.jsx("button",{onClick:()=>X(!1),style:P.logClose,title:"Close",children:t.jsx(De,{size:16})})]}),d.length===0?t.jsx("div",{style:{...P.muted,padding:"24px 0",textAlign:"center"},children:"No rewards taken yet."}):t.jsxs(t.Fragment,{children:[t.jsx("div",{style:P.logScroll,children:d.map($=>t.jsxs("div",{style:P.row,children:[t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:P.logNote,children:$.note||"Reward taken"}),t.jsx("div",{style:P.rowMeta,children:fp($.date)})]}),t.jsx("span",{style:P.rowAmt,children:r($.amount)}),t.jsx("button",{onClick:()=>Sa($.id),style:P.del,children:"×"})]},$.id))}),t.jsxs("div",{style:P.totalRow,children:[t.jsx("span",{children:"Total taken"}),t.jsx("span",{style:P.totalVal,children:r(nt)})]})]})]})}),Le>0&&t.jsxs("div",{style:P.card,children:[t.jsx("div",{style:P.cardTitle,children:"Reward breakdown"}),t.jsxs("div",{style:P.pieWrap,children:[t.jsxs("div",{style:P.pieChart,children:[t.jsx("div",{style:{...P.pieDisc,background:`conic-gradient(${In} 0 ${Pe}%, ${Ro} ${Pe}% ${Pe+st}%, ${oo} ${Pe+st}% ${Pe+st+ct}%, ${io} ${Pe+st+ct}% 100%)`}}),t.jsxs("div",{style:P.pieHole,children:[t.jsx("span",{style:P.pieHoleVal,children:r(Le)}),t.jsx("span",{style:P.pieHoleLbl,children:"total"})]})]}),t.jsxs("div",{style:P.pieLegend,children:[t.jsxs("div",{style:P.pieLegRow,children:[t.jsx("span",{style:{...P.legendDot,background:In}}),t.jsx("span",{style:P.pieLegName,children:"Focus"}),t.jsxs("span",{style:P.pieLegPct,children:[Math.round(Pe),"%"]}),t.jsx("span",{style:P.pieLegMin,children:r(tt)})]}),t.jsxs("div",{style:P.pieLegRow,children:[t.jsx("span",{style:{...P.legendDot,background:Ro}}),t.jsx("span",{style:P.pieLegName,children:"Usage"}),t.jsxs("span",{style:P.pieLegPct,children:[Math.round(st),"%"]}),t.jsx("span",{style:P.pieLegMin,children:r(It)})]}),t.jsxs("div",{style:P.pieLegRow,children:[t.jsx("span",{style:{...P.legendDot,background:oo}}),t.jsx("span",{style:P.pieLegName,children:"Achievement"}),t.jsxs("span",{style:P.pieLegPct,children:[Math.round(ct),"%"]}),t.jsx("span",{style:P.pieLegMin,children:r(ft)})]}),t.jsxs("div",{style:P.pieLegRow,children:[t.jsx("span",{style:{...P.legendDot,background:io}}),t.jsx("span",{style:P.pieLegName,children:"Challenges"}),t.jsxs("span",{style:P.pieLegPct,children:[Math.round(hr),"%"]}),t.jsx("span",{style:P.pieLegMin,children:r(ee)})]})]})]})]}),he&&t.jsx("div",{style:P.modalOverlay,onClick:()=>Se(null),children:t.jsxs("div",{style:P.modalCard,onClick:$=>$.stopPropagation(),children:[t.jsx("div",{style:P.modalTitle,children:he==="all"?"Take all pending reward?":"Take partial reward"}),t.jsxs("div",{style:P.modalSub,children:["Pending: ",r(Ke)]}),le?(()=>{const $=O.filter(A=>!A.fulfilled),Ee=Ae&&(Ae.cost||0)>Ke,ot=Ae&&!Ee;return t.jsxs(t.Fragment,{children:[$.length===0?t.jsx("div",{style:P.wishEmpty,children:"No unfulfilled wishes. Add some in the Bucket List section."}):t.jsx("div",{style:P.wishList,children:$.map((A,Z)=>{const Te=(A.cost||0)>Ke,Ne=(Ae==null?void 0:Ae.id)===A.id;return t.jsxs("button",{onClick:()=>!Te&&Y(A),disabled:Te,style:{...P.wishRow,...Ne?P.wishRowOn:{},...Te?P.wishRowOver:{}},children:[t.jsx("span",{style:P.wishRank,children:Z+1}),t.jsx("span",{style:P.wishName,children:A.wish}),t.jsxs("span",{style:P.wishCost,children:[r(A.cost),Te?" · too costly":""]})]},A.id)})}),t.jsxs("div",{style:P.modalActions,children:[t.jsx("button",{onClick:()=>Se(null),style:P.modalCancel,children:"Cancel"}),t.jsx("button",{onClick:bi,disabled:!ot,style:{...P.modalConfirm,...ot?{}:{opacity:.5,cursor:"not-allowed"}},children:Ae?`Fulfil · ${r(Ae.cost)}`:"Pick a wish"})]})]})})():t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:P.modalInputWrap,children:[t.jsx("span",{style:P.modalSign,children:e.symbol}),t.jsx("input",{type:"number",min:"0",step:"0.01",autoFocus:!0,placeholder:Ke.toFixed(2),value:ue,onChange:$=>ke($.target.value),style:P.modalAmt})]}),t.jsx("input",{placeholder:"What is this reward for? (required)",value:se,onChange:$=>U($.target.value),onKeyDown:$=>$.key==="Enter"&&zn(),style:P.modalReason}),(()=>{const $=parseFloat(ue)>0&&!!se.trim();return t.jsxs("div",{style:P.modalActions,children:[t.jsx("button",{onClick:()=>Se(null),style:P.modalCancel,children:"Cancel"}),t.jsxs("button",{onClick:zn,disabled:!$,style:{...P.modalConfirm,...$?{}:{opacity:.5,cursor:"not-allowed"}},children:["Confirm · ",r(Math.min(parseFloat(ue)||0,Ke))]})]})})()]})]})}),t.jsx("div",{style:P.note,children:"Set rates only affect time from today onward — past time keeps the rate it was earned at."})]})}function nl({on:e,onClick:r,color:n}){return t.jsx("button",{onClick:r,title:e?"Disable — stop calculating this reward":"Enable this reward",style:{...P.toggle,background:e?n:"var(--border)",justifyContent:e?"flex-end":"flex-start"},children:t.jsx("span",{style:P.toggleKnob})})}function Kv({items:e,reward:r}){const n=Math.max(1,...e.map(o=>o.value));return t.jsx("div",{style:P.tbWrap,children:e.map((o,i)=>t.jsxs("div",{style:P.tbRow,children:[t.jsx("div",{style:P.tbLbl,children:o.label}),t.jsx("div",{style:P.tbTrack,children:t.jsx("div",{style:{...P.tbBar,width:`${o.value/n*100}%`,background:o.color}})}),t.jsx("div",{style:P.tbVal,children:r(o.value)})]},i))})}const P={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},hero:{position:"relative",background:"linear-gradient(135deg,var(--accent-strong),var(--accent-2))",borderRadius:16,padding:"22px 24px",color:"#fff",marginBottom:14,textAlign:"center"},logIcon:{position:"absolute",top:12,right:12,border:"1px solid rgba(255,255,255,0.5)",background:"rgba(255,255,255,0.12)",color:"#fff",width:32,height:32,borderRadius:9,cursor:"pointer",display:"grid",placeItems:"center"},logClose:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:28,height:28,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},logNote:{fontSize:13.5,fontWeight:600,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modalCard:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"22px 22px 18px",width:360,maxWidth:"100%",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)"},logModal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"18px 18px 14px",width:440,maxWidth:"100%",maxHeight:"82vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",boxSizing:"border-box"},logModalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8,flexShrink:0},logScroll:{overflowY:"auto",display:"flex",flexDirection:"column",gap:2,paddingRight:2,minHeight:0},modalTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:4},modalSub:{fontSize:12.5,color:"var(--text-3)",fontWeight:600,marginBottom:14},modalInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:10,padding:"8px 12px",background:"var(--surface-2)",marginBottom:8},modalSign:{fontSize:16,color:"var(--text-2)",fontWeight:700},modalAmt:{border:"none",background:"none",outline:"none",flex:1,fontSize:18,fontWeight:700,fontFamily:"inherit",color:"var(--text)"},modalReason:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:14},modalActions:{display:"flex",gap:8},modalCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalConfirm:{flex:1,border:"none",background:"#C9A227",color:"#fff",padding:"10px 14px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},bucketToggleRow:{display:"inline-flex",alignItems:"center",gap:8,margin:"12px auto 0",border:"none",background:"rgba(255,255,255,0.12)",color:"#fff",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},miniToggle:{display:"flex",alignItems:"center",width:32,height:18,borderRadius:10,padding:2,flexShrink:0,transition:"background 0.15s"},miniKnob:{width:14,height:14,borderRadius:"50%",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},wishList:{display:"flex",flexDirection:"column",gap:6,maxHeight:300,overflowY:"auto",margin:"4px 0 4px"},wishRow:{display:"flex",alignItems:"center",gap:10,width:"100%",textAlign:"left",border:"1px solid var(--border)",background:"var(--surface)",borderRadius:10,padding:"10px 12px",cursor:"pointer",fontFamily:"inherit"},wishRowOn:{borderColor:"var(--accent-strong)",background:"var(--hover)",boxShadow:"0 0 0 1px var(--accent-strong)"},wishRowOver:{opacity:.5,cursor:"not-allowed"},wishRank:{fontSize:12,fontWeight:800,color:"var(--text-3)",fontFamily:"'Fraunces',Georgia,serif",flexShrink:0},wishName:{flex:1,fontSize:13.5,fontWeight:700,color:"var(--text)",minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},wishCost:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--accent-strong)",flexShrink:0},wishEmpty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"20px 0"},heroLabel:{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",opacity:.85},heroVal:{fontSize:44,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,lineHeight:1.05},heroSub:{fontSize:12.5,opacity:.9,marginTop:6},heroBtns:{display:"flex",gap:10,marginTop:16,justifyContent:"center"},heroBtnSolid:{border:"none",background:"#fff",color:"var(--accent-strong)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},heroBtnGhost:{border:"1px solid rgba(255,255,255,0.6)",background:"transparent",color:"#fff",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},btnDisabled:{opacity:.45,cursor:"not-allowed"},statRow:{display:"flex",gap:10,marginBottom:14},statCard:{flex:1,background:"var(--surface)",borderRadius:12,padding:"12px 14px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},threeDayTitle:{fontSize:13,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:84,fontSize:11.5,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap"},tbTrack:{flex:1,height:14,background:"var(--surface-2)",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:76,fontSize:11.5,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"},statVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},card:{background:"var(--surface)",borderRadius:16,padding:"18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:10,flexWrap:"wrap"},periodTotal:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text-2)"},periodRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},periodChip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},periodChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},collapseHint:{fontSize:12,fontWeight:700,color:"var(--accent)"},sectionHead:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,flexWrap:"wrap"},sectionHeadRight:{display:"flex",alignItems:"center",gap:12},collapseLink:{border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"inherit",fontSize:12,fontWeight:700,color:"var(--accent)"},cardOff:{opacity:.62},toggle:{border:"none",cursor:"pointer",width:40,height:22,borderRadius:11,padding:2,display:"flex",alignItems:"center",transition:"background 0.15s",flexShrink:0},toggleKnob:{width:18,height:18,borderRadius:"50%",background:"#fff",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"12px 0"},splitTrack:{display:"flex",height:16,borderRadius:8,overflow:"hidden",marginTop:12,marginBottom:12,border:"1px solid var(--border)"},legendRow:{display:"flex",gap:16,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:600,color:"var(--text-2)"},legendDot:{width:10,height:10,borderRadius:3,flexShrink:0},usagePieBlock:{marginTop:16,paddingTop:14,borderTop:"1px solid var(--border)"},usagePieTitle:{fontSize:12.5,fontWeight:700,color:"var(--text-2)",marginBottom:6},pieWrap:{display:"flex",alignItems:"center",gap:20,flexWrap:"wrap",marginTop:6},pieChart:{position:"relative",width:130,height:130,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:78,height:78,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:10},pieLegRow:{display:"flex",alignItems:"center",gap:8},pieLegName:{flex:1,fontSize:13.5,fontWeight:600},pieLegPct:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",width:46,textAlign:"right"},pieLegMin:{fontSize:12,color:"var(--text-3)",fontWeight:600,minWidth:64,textAlign:"right"},rows:{display:"flex",flexDirection:"column",gap:2},row:{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:"1px solid var(--border)"},dot:{width:10,height:10,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:13.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},rowMeta:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,flexShrink:0},rowAmt:{fontSize:13.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",flexShrink:0,minWidth:64,textAlign:"right"},del:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",fontSize:16,lineHeight:1,padding:"0 2px",flexShrink:0},totalRow:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:10,marginTop:4,fontSize:14,fontWeight:700},totalVal:{fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},rateActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:14},rateCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},rateSave:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},rateGrid:{display:"flex",flexDirection:"column",gap:10},rateRow:{display:"flex",alignItems:"center",gap:8},rateName:{flex:1,fontSize:14,fontWeight:600},rateInputWrap:{display:"flex",alignItems:"center",gap:3,border:"1px solid var(--border)",borderRadius:9,padding:"4px 10px",background:"var(--surface-2)"},unitSign:{fontSize:14,color:"var(--text-2)",fontWeight:600},rateInput:{border:"none",background:"none",outline:"none",width:64,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},unit:{fontSize:12,color:"var(--text-3)",fontWeight:600},note:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",fontStyle:"italic",marginTop:4}};function Qv(){return t.jsx("div",{style:Bn.page,children:t.jsxs("div",{style:Bn.card,children:[t.jsxs("div",{style:Bn.brand,children:[t.jsx("div",{style:Bn.logo,children:"B"}),t.jsx("span",{style:Bn.brandName,children:"Anvil"})]}),t.jsx("h1",{style:Bn.title,children:"Welcome to Anvil"}),t.jsx("p",{style:Bn.sub,children:"Sign in with Google to continue."}),t.jsxs("button",{onClick:()=>E.signInWithGoogle(),style:Bn.googleBtn,children:[t.jsx(qv,{}),"Sign in with Google"]})]})})}function qv(){return t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[t.jsx("path",{fill:"#4285F4",d:"M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84c-.21 1.13-.85 2.09-1.81 2.73v2.27h2.92c1.71-1.57 2.69-3.88 2.69-6.64z"}),t.jsx("path",{fill:"#34A853",d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.27c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.71H.96v2.34C2.44 15.98 5.48 18 9 18z"}),t.jsx("path",{fill:"#FBBC05",d:"M3.97 10.7c-.18-.54-.28-1.11-.28-1.7s.1-1.16.28-1.7V4.96H.96A8.997 8.997 0 0 0 0 9c0 1.45.35 2.83.96 4.04l3.01-2.34z"}),t.jsx("path",{fill:"#EA4335",d:"M9 3.58c1.32 0 2.51.45 3.44 1.35l2.59-2.59C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l3.01 2.34C4.68 5.16 6.66 3.58 9 3.58z"})]})}const Bn={page:{minHeight:"100vh",display:"grid",placeItems:"center",background:"var(--bg)",fontFamily:"'Inter',system-ui,sans-serif",padding:20},card:{width:"100%",maxWidth:380,background:"var(--surface)",borderRadius:16,padding:"32px 28px",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",display:"flex",flexDirection:"column",textAlign:"center"},brand:{display:"flex",alignItems:"center",justifyContent:"center",gap:9,marginBottom:20},logo:{width:32,height:32,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},brandName:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},title:{fontSize:22,fontWeight:700,margin:"0 0 4px",fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},sub:{fontSize:13.5,color:"var(--text-3)",margin:"0 0 24px"},googleBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,border:"1px solid var(--border)",background:"#fff",color:"#26241F",padding:"12px",borderRadius:10,fontSize:14.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},jc=1,Fm="anvil_month_start_day";function kc(){try{return Number(localStorage.getItem(Fm))||jc}catch{return jc}}function yp(e){const r=Math.min(28,Math.max(1,Number(e)||jc));try{localStorage.setItem(Fm,String(r))}catch{}return window.dispatchEvent(new CustomEvent("anvil-month-start",{detail:r})),r}function Am(){const[e,r]=g.useState(kc());return g.useEffect(()=>{const n=o=>r(o.detail||kc());return window.addEventListener("anvil-month-start",n),()=>window.removeEventListener("anvil-month-start",n)},[]),e}const vp=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;function Ir(e,r,n=0){const o=e.getFullYear(),i=e.getMonth(),l=e.getDate()>=r?i:i-1,a=new Date(o,l+n,r),d=new Date(o,l+n+1,r-1);return[vp(a),vp(d)]}function Xv(e=600){const[r,n]=g.useState(()=>window.innerWidth<e);return g.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const jp=["Salary","Stocks","Business","Interest","Rent","Gift","Other"],Zv=["Bills","EMI","Rent","Food","Shopping","Transport","Health","Entertainment","Education","Other"],kp=["Stocks","Mutual Fund","SIP","Fixed Deposit","Gold","Real Estate","PPF/EPF","Crypto","Other"],Jv={Salary:"#4C9A6B",Stocks:"#3A7CA5",Business:"#C9A227",Interest:"#8268B0",Gift:"#C2773B",Bills:"#C2536B",EMI:"#A23E57",Food:"#E08E45",Shopping:"#8268B0",Transport:"#3A7CA5",Health:"#4C9A6B",Entertainment:"#C9A227",Education:"#5B7C99",Rent:"#5B8C5A",Other:"#9A968C"},Fg=e=>Jv[e]||"#9A968C",e1={Stocks:"#2F6B4F","Mutual Fund":"#3E9E6B",SIP:"#4FAE7E","Fixed Deposit":"#6BBE92",Gold:"#8ECDA8","Real Estate":"#1F5C3F","PPF/EPF":"#5BAE83",Crypto:"#7FC79E",Other:"#9AD4B3"},t1=e=>e1[e]||"#4C9A6B",pn="#3E9E6B",Br="#D1556E",Zr="#3A7CA5",ad="#8268B0",Wm=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Wo=Wm(new Date),r1=[{id:"month",label:"This month"},{id:"last",label:"Last month"},{id:"year",label:"This year"},{id:"all",label:"All time"}];function n1(e,r){const n=new Date;return e==="month"?Ir(n,r):e==="last"?Ir(n,r,-1):e==="year"?[Wm(new Date(n.getFullYear(),0,1)),Wo]:["0000-01-01","9999-12-31"]}function o1(){const e=Jn(),[r,n]=g.useState("overview"),[o,i]=g.useState([]),[s,l]=g.useState([]),[a,d]=g.useState([]),[c,h]=g.useState([]),[f,m]=g.useState([]),[I,B]=g.useState(!1),z=g.useCallback(()=>Promise.all([E.getTxns(),E.getExpenses(),E.getInvestments()]).then(([T,R,k])=>(i(T),l(R.categories),d(R.logs),h(k),E.getFixedItems())).then(m).then(()=>B(!0)).catch(()=>B(!0)),[]);g.useEffect(()=>{z()},[z]);const w=g.useMemo(()=>{const T={};return s.forEach(R=>T[R.id]=R),T},[s]),p=g.useMemo(()=>a.map(T=>{var R;return{id:`exp-${T.id}`,rawId:T.id,source:"expense",kind:"expense",category:((R=w[T.category_id])==null?void 0:R.name)||"Other",amount:T.amount,note:T.note,date:T.date}}),[a,w]),b=g.useMemo(()=>o.filter(T=>T.kind==="expense").map(T=>({...T,source:"legacy"})),[o]),u=g.useMemo(()=>o.filter(T=>T.kind==="income").map(T=>({...T,source:"legacy"})),[o]),j=g.useMemo(()=>[...u,...b,...p].sort((T,R)=>R.date.localeCompare(T.date)),[u,b,p]),x=T=>js(T,e.code);return t.jsxs("div",{style:C.page,children:[t.jsxs("div",{style:C.head,children:[t.jsx("div",{style:C.eyebrow,children:"Anvil · Wallet"}),t.jsx("h1",{style:C.h1,children:"Wallet"}),t.jsx("div",{style:C.subhead,children:"Your money — what comes in, what goes out, and where it's headed."})]}),t.jsx("div",{style:C.tabs,children:[["overview","Overview",lm],["money","Money",ka],["calc","Calculators",Ry]].map(([T,R,k])=>t.jsxs("button",{onClick:()=>n(T),style:{...C.tab,...r===T?C.tabOn:{}},children:[t.jsx(k,{size:15})," ",R]},T))}),r==="overview"&&t.jsx(i1,{txns:j,investments:c,loaded:I,money:x,cur:e}),r==="money"&&t.jsx(a1,{txns:j,expCats:s,investments:c,fixedItems:f,reload:z,money:x,cur:e}),r==="calc"&&t.jsx(d1,{money:x,cur:e})]})}function i1({txns:e,investments:r,loaded:n,money:o,cur:i}){const s=Am(),l=Xv(),[a,d]=g.useState("month"),[c,h]=n1(a,s),f=g.useMemo(()=>e.filter(q=>q.date>=c&&q.date<=h),[e,c,h]),m=f.filter(q=>q.kind==="income"),I=f.filter(q=>q.kind==="expense"),B=m.reduce((q,oe)=>q+oe.amount,0),z=I.reduce((q,oe)=>q+oe.amount,0),w=g.useMemo(()=>r.filter(q=>q.date>=c&&q.date<=h),[r,c,h]),p=w.reduce((q,oe)=>q+oe.invested,0),b=z+p,u=B-b,j=r.reduce((q,oe)=>q+oe.invested,0),x=r.reduce((q,oe)=>q+oe.current_value,0),T=x-j,R=q=>{const oe={};return q.forEach(L=>{oe[L.category]=(oe[L.category]||0)+L.amount}),Object.entries(oe).map(([L,he])=>({category:L,amount:he,color:Fg(L)})).sort((L,he)=>he.amount-L.amount)},k=R(I),y=g.useMemo(()=>{const q={};return w.forEach(oe=>{q[oe.kind]=(q[oe.kind]||0)+oe.invested}),Object.entries(q).map(([oe,L])=>({category:oe,amount:L,color:t1(oe)})).sort((oe,L)=>L.amount-oe.amount)},[w]),K=[...k,...y];return t.jsxs(t.Fragment,{children:[t.jsx("div",{style:C.presetRow,children:r1.map(q=>t.jsx("button",{onClick:()=>d(q.id),style:{...C.preset,...a===q.id?C.presetOn:{}},children:q.label},q.id))}),t.jsxs("div",{style:{...C.sumGrid,gridTemplateColumns:l?"repeat(2,1fr)":"repeat(4,1fr)"},children:[t.jsx(ol,{icon:t.jsx(jy,{size:16}),label:"Income",value:o(B),color:pn}),t.jsx(ol,{icon:t.jsx(sm,{size:16}),label:"Expenses",value:o(z),color:Br}),t.jsx(ol,{icon:t.jsx(Yi,{size:16}),label:"Invested",value:o(p),color:Zr}),t.jsx(ol,{icon:u>=0?t.jsx(mm,{size:16}):t.jsx(Yn,{size:16}),label:"Remaining",value:o(u),color:u>=0?pn:Br})]}),p>0&&t.jsxs("div",{style:C.investNote,children:[t.jsx(Yi,{size:13,color:Zr})," ",o(p)," invested this period — counted as outgoing and deducted from what remains."]}),r.length>0&&t.jsxs("div",{style:C.card,children:[t.jsxs("div",{style:C.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(Yi,{size:18,color:Zr}),t.jsxs("div",{children:[t.jsx("div",{style:C.cardTitle,children:"Assets & investments"}),t.jsx("div",{style:C.cardSub,children:"Across all your holdings, all time"})]})]}),t.jsx("div",{style:{...C.cardTotal,color:Zr},children:o(x)})]}),t.jsxs("div",{style:C.healthStats,children:[t.jsxs("div",{style:C.healthStat,children:[t.jsx("span",{style:C.healthStatV,children:o(j)}),t.jsx("span",{style:C.healthStatL,children:"Total invested"})]}),t.jsxs("div",{style:C.healthStat,children:[t.jsxs("span",{style:{...C.healthStatV,color:T>=0?pn:Br},children:[T>=0?"+":"",o(T)]}),t.jsx("span",{style:C.healthStatL,children:"Unrealized gain"})]})]})]}),n?f.length===0&&w.length===0?t.jsx("div",{style:C.card,children:t.jsxs("div",{style:C.muted,children:["No transactions in this period. Add some under the ",t.jsx("b",{children:"Money"})," tab."]})}):t.jsxs(t.Fragment,{children:[t.jsx(l1,{totalIn:B,totalOut:b}),t.jsxs("div",{style:C.twoCol,children:[t.jsx(wp,{title:"Incoming",subtitle:"Where your money comes from",total:B,data:R(m),accent:pn,cur:i}),t.jsx(wp,{title:"Outgoing",subtitle:"Spending + money set aside in investments",total:b,data:K,accent:Br,cur:i})]})]}):t.jsx("div",{style:C.muted,children:"Loading…"})]})}function ol({icon:e,wideIcon:r,label:n,value:o,color:i,style:s,wide:l}){return l?t.jsxs("div",{style:{...C.sumCard,...C.sumCardWide,...s},children:[t.jsx("div",{style:{...C.sumIconWide,color:i,background:i+"1A"},children:r||e}),t.jsxs("div",{style:C.sumWideText,children:[t.jsx("div",{style:C.sumLabel,children:n}),t.jsx("div",{style:{...C.sumVal,color:i,marginTop:0},children:o})]})]}):t.jsxs("div",{style:{...C.sumCard,...s},children:[t.jsx("div",{style:{...C.sumIcon,color:i,background:i+"1A"},children:e}),t.jsx("div",{style:C.sumLabel,children:n}),t.jsx("div",{style:{...C.sumVal,color:i},children:o})]})}function wp({title:e,subtitle:r,total:n,data:o,accent:i,cur:s}){const[l,a]=g.useState(null);let d=0;const c=o.map(m=>{const I=n>0?d/n*100:0;d+=m.amount;const B=n>0?d/n*100:0;return{...m,start:I,end:B,color:m.color||Fg(m.category),pct:n>0?m.amount/n*100:0}}),h=l!=null?c[l]:null,f=c.length===1;return t.jsxs("div",{style:C.card,children:[t.jsxs("div",{style:C.cardTitleRow,children:[t.jsxs("div",{children:[t.jsx("div",{style:{...C.cardTitle,color:i},children:e}),t.jsx("div",{style:C.cardSub,children:r})]}),t.jsx("div",{style:{...C.cardTotal,color:i},children:js(n,s.code)})]}),o.length===0?t.jsx("div",{style:C.muted,children:"Nothing logged."}):t.jsxs("div",{style:C.pieWrap,children:[t.jsxs("div",{style:C.pieChart,onMouseLeave:()=>a(null),children:[t.jsx("svg",{viewBox:"0 0 120 120",style:C.pieSvg,children:c.map((m,I)=>t.jsx("path",{d:s1(m.start,m.end,I===l,f),fill:m.color,onMouseEnter:()=>a(I),style:{cursor:"pointer",transition:"transform 0.15s, filter 0.15s",filter:I===l?"brightness(1.08)":"none"}},m.category))}),t.jsx("div",{style:{...C.pieHole,...h?{transform:"translate(-50%,-50%) scale(1.06)",boxShadow:`0 0 0 4px ${h.color}33`}:{}},children:h?t.jsxs(t.Fragment,{children:[t.jsx("span",{style:{...C.pieHoleVal,color:h.color,fontSize:13},children:Vu(h.amount,s.code)}),t.jsxs("span",{style:C.pieHoleLbl,children:[Math.round(h.pct),"% · ",h.category]})]}):t.jsxs(t.Fragment,{children:[t.jsx("span",{style:C.pieHoleVal,children:Vu(n,s.code)}),t.jsx("span",{style:C.pieHoleLbl,children:"total"})]})})]}),t.jsx("div",{style:C.pieLegend,children:c.map((m,I)=>t.jsxs("div",{style:{...C.legendRow,...I===l?C.legendRowOn:{}},onMouseEnter:()=>a(I),onMouseLeave:()=>a(null),children:[t.jsx("span",{style:{...C.dot,background:m.color}}),t.jsx("span",{style:C.legendName,children:m.category}),t.jsxs("span",{style:C.legendPct,children:[Math.round(m.pct),"%"]}),t.jsx("span",{style:C.legendAmt,children:js(m.amount,s.code)})]},m.category))})]})]})}function s1(e,r,n,o){const d=n?6:0,c=(T,R,k=0,y=0)=>{const K=T/100*2*Math.PI-Math.PI/2;return[60+k+R*Math.cos(K),60+y+R*Math.sin(K)]},h=(e+r)/2/100*2*Math.PI-Math.PI/2,f=o?0:Math.cos(h)*d,m=o?0:Math.sin(h)*d;if(r-e>=99.999)return`M ${60+f} ${60+m-58} A 58 58 0 1 1 ${60+f-.01} ${60+m-58} L ${60+f-.01} ${60+m-35} A 35 35 0 1 0 ${60+f} ${60+m-35} Z`;const[I,B]=c(e,58,f,m),[z,w]=c(r,58,f,m),[p,b]=c(r,35,f,m),[u,j]=c(e,35,f,m),x=r-e>50?1:0;return`M ${I} ${B} A 58 58 0 ${x} 1 ${z} ${w} L ${p} ${b} A 35 35 0 ${x} 0 ${u} ${j} Z`}function l1({totalIn:e,totalOut:r}){const n=e-r,o=e>0?n/e:0,i=e===0?0:Math.max(0,Math.min(100,Math.round(50+o*100)));let s,l,a;e===0?(s="No income logged",l="#9A968C",a="Add your income to see your financial health."):o>=.3?(s="Excellent",l="#3E9E6B",a="You're saving 30%+ of income — keep investing the surplus."):o>=.2?(s="Healthy",l="#4C9A6B",a="Solid savings rate. Consider automating a SIP with the surplus."):o>=.1?(s="Okay",l="#C9A227",a="Decent, but aim for 20%+. Trim your biggest expense category."):o>=0?(s="Tight",l="#C2773B",a="You're saving very little. Review recurring bills and EMIs."):(s="Overspending",l="#D1556E",a="You're spending more than you earn. Cut back to avoid debt.");const d=e>0?Math.min(100,Math.round(r/e*100)):0;return t.jsxs("div",{style:C.card,children:[t.jsxs("div",{style:C.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(Ky,{size:18,color:l}),t.jsxs("div",{children:[t.jsx("div",{style:C.cardTitle,children:"Financial health"}),t.jsx("div",{style:C.cardSub,children:"Based on your savings rate this period"})]})]}),t.jsxs("div",{style:{textAlign:"right"},children:[t.jsx("div",{style:{...C.healthScore,color:l},children:e===0?"—":i}),t.jsx("div",{style:{...C.healthStatus,color:l},children:s})]})]}),t.jsx("div",{style:C.gaugeTrack,children:t.jsx("div",{style:{...C.gaugeFill,width:`${e===0?0:i}%`,background:l}})}),t.jsxs("div",{style:C.healthStats,children:[t.jsxs("div",{style:C.healthStat,children:[t.jsxs("span",{style:C.healthStatV,children:[e>0?Math.round(o*100):0,"%"]}),t.jsx("span",{style:C.healthStatL,children:"Savings rate"})]}),t.jsxs("div",{style:C.healthStat,children:[t.jsxs("span",{style:C.healthStatV,children:[d,"%"]}),t.jsx("span",{style:C.healthStatL,children:"of income spent"})]})]}),t.jsx("div",{style:{...C.tip,borderColor:l+"55",background:l+"12",color:l},children:a})]})}function a1({txns:e,expCats:r,investments:n,fixedItems:o,reload:i,money:s,cur:l}){const[a,d]=g.useState(""),[c,h]=g.useState("Salary"),[f,m]=g.useState(Wo),[I,B]=g.useState(""),[z,w]=g.useState(null),[p,b]=g.useState(null),[u,j]=g.useState(null),{deleteItem:x,toasts:T,handleUndo:R,handleDismiss:k}=pr(E.deleteTxn,E.restoreTxn,i),{deleteItem:y,toasts:K,handleUndo:q,handleDismiss:oe}=pr(E.deleteExpenseLog,E.restoreExpenseLog,i),{deleteItem:L,toasts:he,handleUndo:Se,handleDismiss:ue}=pr(E.deleteInvestment,E.restoreInvestment,i),ke=()=>{var v;return j({id:null,kind:"expense",name:"",amount:"",category_id:((v=r[0])==null?void 0:v.id)||"",invest_kind:"Stocks",note:""})},se=v=>{var re;return j({id:v.id,kind:v.kind,name:v.name,amount:String(v.amount),category_id:v.category_id||((re=r[0])==null?void 0:re.id)||"",invest_kind:v.invest_kind||"Stocks",note:v.note||""})},U=async()=>{const v=u.name.trim(),re=parseFloat(u.amount)||0;if(!v||re<=0)return;const F={kind:u.kind,name:v,amount:re,note:u.note.trim(),...u.kind==="expense"?{category_id:Number(u.category_id)}:{invest_kind:u.invest_kind}};u.id?await E.updateFixedItem(u.id,F):await E.createFixedItem(F),j(null),i()},de=async v=>{window.confirm(`Stop "${v.name}" from auto-posting each month? Past entries it already created will stay.`)&&(await E.deleteFixedItem(v.id),i())},X=async v=>{await E.updateFixedItem(v.id,{active:!v.active}),i()},S=()=>b({id:null,name:"",kind:"Stocks",invested:"",current_value:"",date:Wo,note:""}),W=v=>b({id:v.id,name:v.name,kind:v.kind,invested:String(v.invested),current_value:String(v.current_value),date:v.date,note:v.note||""}),O=async()=>{const v=p.name.trim(),re=parseFloat(p.invested)||0,F=parseFloat(p.current_value)||0;if(!v)return;const ce={name:v,kind:p.kind,invested:re,current_value:F,note:p.note.trim(),date:p.date};p.id?await E.updateInvestment(p.id,ce):await E.createInvestment(ce),b(null),i()},N=n.reduce((v,re)=>v+re.invested,0),le=n.reduce((v,re)=>v+re.current_value,0),ge=le-N,Ae=async()=>{const v=parseFloat(a);!v||v<=0||(await E.createTxn({kind:"income",category:c,amount:v,note:I.trim(),date:f}),d(""),B(""),i())},Y=v=>w({id:v.id,rawId:v.rawId,source:v.source,kind:v.kind,amount:String(v.amount),category:v.category,date:v.date,note:v.note||""}),ae=(z==null?void 0:z.source)==="expense"?r.map(v=>v.name):(z==null?void 0:z.kind)==="income"?jp:Zv,_=async()=>{const v=parseFloat(z.amount);if(!(!v||v<=0)){if(z.source==="expense"){const re=r.find(F=>F.name===z.category);await E.updateExpenseLog(z.rawId,{amount:v,note:z.note.trim(),date:z.date,...re?{category_id:re.id}:{}})}else await E.updateTxn(z.id,{kind:z.kind,category:z.category,amount:v,note:z.note.trim(),date:z.date});w(null),i()}},ne=v=>{v.source==="expense"?y(v.rawId,v.category):x(v.id,v.category)},xe=g.useMemo(()=>{const v={};return e.forEach(re=>{(v[re.date]=v[re.date]||[]).push(re)}),Object.entries(v).sort((re,F)=>F[0].localeCompare(re[0]))},[e]),D=v=>new Date(v+"T00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:C.card,children:[t.jsx("div",{style:C.cardTitle,children:"Add income"}),t.jsxs("div",{style:C.cardSub,children:["Expenses are added from the ",t.jsx("b",{children:"Expenses"})," section and show up here automatically."]}),t.jsxs("div",{style:C.formGrid,children:[t.jsx("input",{type:"number",inputMode:"decimal",placeholder:"Amount",value:a,onChange:v=>d(v.target.value),onKeyDown:v=>v.key==="Enter"&&Ae(),style:C.input,autoFocus:!0}),t.jsx("select",{value:c,onChange:v=>h(v.target.value),style:C.input,children:jp.map(v=>t.jsx("option",{children:v},v))}),t.jsx("input",{type:"date",value:f,max:Wo,onChange:v=>m(v.target.value),style:C.input})]}),t.jsx("input",{placeholder:"Note (optional)",value:I,onChange:v=>B(v.target.value),onKeyDown:v=>v.key==="Enter"&&Ae(),style:{...C.input,marginTop:8}}),t.jsxs("button",{onClick:Ae,style:{...C.addBtn,background:pn},children:[t.jsx(lt,{size:15})," Add income"]})]}),t.jsxs("div",{style:C.card,children:[t.jsxs("div",{style:C.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(p0,{size:18,color:ad}),t.jsxs("div",{children:[t.jsx("div",{style:C.cardTitle,children:"Fixed items"}),t.jsx("div",{style:C.cardSub,children:"EMI, rent, SIP… auto-posted at the start of every billing cycle"})]})]}),t.jsxs("button",{onClick:ke,style:{...C.invAddBtn,background:ad},children:[t.jsx(lt,{size:14})," Add"]})]}),o.length===0?t.jsx("div",{style:C.muted,children:"No fixed items yet — add an EMI or rent to auto-post it every cycle."}):t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:o.map(v=>{var F;const re=v.kind==="expense"?((F=r.find(ce=>ce.id===v.category_id))==null?void 0:F.name)||"Other":v.invest_kind||"Other";return t.jsxs("div",{style:{...C.invRow,opacity:v.active?1:.5},children:[t.jsx("span",{style:{...C.txnDot,background:v.kind==="expense"?Br:Zr}}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:C.txnCat,children:v.name}),t.jsxs("div",{style:C.txnNote,children:[v.kind==="expense"?"Fixed expense":"Fixed investment"," · ",re]})]}),t.jsxs("span",{style:{...C.txnAmt,color:v.kind==="expense"?Br:Zr},children:[s(v.amount),"/mo"]}),t.jsx("button",{onClick:()=>X(v),style:C.delBtn,title:v.active?"Pause":"Resume",children:v.active?t.jsx(hm,{size:13}):t.jsx(Tg,{size:13})}),t.jsx("button",{onClick:()=>se(v),style:C.delBtn,children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:()=>de(v),style:C.delBtn,children:t.jsx(De,{size:14})})]},v.id)})})]}),t.jsxs("div",{style:C.card,children:[t.jsxs("div",{style:C.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(Yi,{size:18,color:Zr}),t.jsxs("div",{children:[t.jsx("div",{style:C.cardTitle,children:"Investments"}),t.jsx("div",{style:C.cardSub,children:"Asset generation — what you've put in vs. what it's worth now"})]})]}),t.jsxs("button",{onClick:S,style:C.invAddBtn,children:[t.jsx(lt,{size:14})," Add"]})]}),n.length===0?t.jsx("div",{style:C.muted,children:"No investments tracked yet."}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:C.healthStats,children:[t.jsxs("div",{style:C.healthStat,children:[t.jsx("span",{style:C.healthStatV,children:s(N)}),t.jsx("span",{style:C.healthStatL,children:"Invested"})]}),t.jsxs("div",{style:C.healthStat,children:[t.jsx("span",{style:C.healthStatV,children:s(le)}),t.jsx("span",{style:C.healthStatL,children:"Current value"})]}),t.jsxs("div",{style:C.healthStat,children:[t.jsxs("span",{style:{...C.healthStatV,color:ge>=0?pn:Br},children:[ge>=0?"+":"",s(ge)]}),t.jsx("span",{style:C.healthStatL,children:"Gain / loss"})]})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginTop:4},children:n.map(v=>{const re=v.current_value-v.invested,F=v.invested>0?re/v.invested*100:0;return t.jsxs("div",{style:C.invRow,children:[t.jsx("span",{style:{...C.txnDot,background:Zr}}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:C.txnCat,children:v.name}),t.jsxs("div",{style:C.txnNote,children:[v.kind," · invested ",s(v.invested)]})]}),t.jsxs("div",{style:{textAlign:"right"},children:[t.jsx("div",{style:C.txnAmt,children:s(v.current_value)}),t.jsxs("div",{style:{...C.invPct,color:re>=0?pn:Br},children:[re>=0?"+":"",Math.round(F),"%"]})]}),t.jsx("button",{onClick:()=>W(v),style:C.delBtn,children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:()=>L(v.id,v.name),style:C.delBtn,children:t.jsx(De,{size:14})})]},v.id)})})]})]}),t.jsxs("div",{style:C.card,children:[t.jsx("div",{style:C.cardTitle,children:"History"}),xe.length===0?t.jsx("div",{style:C.muted,children:"No transactions yet."}):t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:xe.map(([v,re])=>t.jsxs("div",{children:[t.jsx("div",{style:C.dateHead,children:D(v)}),re.map(F=>(z==null?void 0:z.id)===F.id?t.jsxs("div",{style:C.editTxn,children:[t.jsxs("div",{style:C.formGrid,children:[t.jsx("input",{type:"number",inputMode:"decimal",value:z.amount,onChange:ce=>w({...z,amount:ce.target.value}),style:C.input}),t.jsx("select",{value:z.category,onChange:ce=>w({...z,category:ce.target.value}),style:C.input,children:ae.map(ce=>t.jsx("option",{children:ce},ce))}),t.jsx("input",{type:"date",value:z.date,max:Wo,onChange:ce=>w({...z,date:ce.target.value}),style:C.input})]}),t.jsx("input",{placeholder:"Note (optional)",value:z.note,onChange:ce=>w({...z,note:ce.target.value}),onKeyDown:ce=>ce.key==="Enter"&&_(),style:{...C.input,marginTop:8}}),t.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[t.jsxs("button",{onClick:()=>w(null),style:C.editCancel,children:[t.jsx(De,{size:14})," Cancel"]}),t.jsxs("button",{onClick:_,style:{...C.addBtn,marginTop:0,flex:1,background:z.kind==="income"?pn:Br},children:[t.jsx(He,{size:15})," Save"]})]})]},F.id):t.jsxs("div",{style:C.txnRow,children:[t.jsx("span",{style:{...C.txnDot,background:Fg(F.category)}}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:C.txnCat,children:F.category}),F.note&&t.jsx("div",{style:C.txnNote,children:F.note})]}),t.jsxs("span",{style:{...C.txnAmt,color:F.kind==="income"?pn:Br},children:[F.kind==="income"?"+":"−",s(F.amount)]}),t.jsx("button",{onClick:()=>Y(F),style:C.delBtn,children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:()=>ne(F),style:C.delBtn,children:t.jsx(De,{size:14})})]},F.id))]},v))})]}),p&&t.jsx("div",{style:C.overlay,onClick:()=>b(null),children:t.jsxs("div",{style:C.modal,onClick:v=>v.stopPropagation(),children:[t.jsxs("div",{style:C.modalHead,children:[t.jsx("span",{style:C.modalTitle,children:p.id?"Edit investment":"New investment"}),t.jsx("button",{onClick:()=>b(null),style:C.iconBtnPlain,children:t.jsx(De,{size:16})})]}),t.jsx("label",{style:C.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:p.name,onChange:v=>b(re=>({...re,name:v.target.value})),placeholder:"e.g. Nifty Index Fund, HDFC FD…",style:C.input}),t.jsx("label",{style:C.label,children:"Type"}),t.jsx("select",{value:p.kind,onChange:v=>b(re=>({...re,kind:v.target.value})),style:C.input,children:kp.map(v=>t.jsx("option",{children:v},v))}),t.jsxs("div",{style:C.formGrid,children:[t.jsxs("div",{children:[t.jsx("label",{style:C.label,children:"Invested"}),t.jsx("input",{type:"number",inputMode:"decimal",value:p.invested,onChange:v=>b(re=>({...re,invested:v.target.value})),placeholder:"0",style:C.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:C.label,children:"Current value"}),t.jsx("input",{type:"number",inputMode:"decimal",value:p.current_value,onChange:v=>b(re=>({...re,current_value:v.target.value})),placeholder:"0",style:C.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:C.label,children:"Date"}),t.jsx("input",{type:"date",value:p.date,max:Wo,onChange:v=>b(re=>({...re,date:v.target.value})),style:C.input})]})]}),t.jsx("label",{style:C.label,children:"Note (optional)"}),t.jsx("input",{value:p.note,onChange:v=>b(re=>({...re,note:v.target.value})),placeholder:"Folio no., broker, etc.",style:C.input}),t.jsxs("div",{style:C.modalActions,children:[t.jsx("button",{onClick:()=>b(null),style:C.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:O,disabled:!p.name.trim(),style:{...C.saveBtn,...p.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",p.id?"Save":"Add"]})]})]})}),u&&t.jsx("div",{style:C.overlay,onClick:()=>j(null),children:t.jsxs("div",{style:C.modal,onClick:v=>v.stopPropagation(),children:[t.jsxs("div",{style:C.modalHead,children:[t.jsx("span",{style:C.modalTitle,children:u.id?"Edit fixed item":"New fixed item"}),t.jsx("button",{onClick:()=>j(null),style:C.iconBtnPlain,children:t.jsx(De,{size:16})})]}),t.jsxs("div",{style:C.kindToggle,children:[t.jsxs("button",{onClick:()=>j(v=>({...v,kind:"expense"})),style:{...C.kindBtn,...u.kind==="expense"?{background:Br,color:"#fff",borderColor:Br}:{}},children:[t.jsx(sm,{size:15})," Expense"]}),t.jsxs("button",{onClick:()=>j(v=>({...v,kind:"investment"})),style:{...C.kindBtn,...u.kind==="investment"?{background:Zr,color:"#fff",borderColor:Zr}:{}},children:[t.jsx(Yi,{size:15})," Investment"]})]}),t.jsx("label",{style:C.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:u.name,onChange:v=>j(re=>({...re,name:v.target.value})),placeholder:u.kind==="expense"?"e.g. Home loan EMI, Rent…":"e.g. Monthly SIP — Nifty Index",style:C.input}),t.jsxs("div",{style:C.formGrid,children:[t.jsxs("div",{children:[t.jsx("label",{style:C.label,children:"Amount / month"}),t.jsx("input",{type:"number",inputMode:"decimal",value:u.amount,onChange:v=>j(re=>({...re,amount:v.target.value})),placeholder:"0",style:C.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:C.label,children:u.kind==="expense"?"Category":"Type"}),u.kind==="expense"?t.jsx("select",{value:u.category_id,onChange:v=>j(re=>({...re,category_id:v.target.value})),style:C.input,children:r.map(v=>t.jsx("option",{value:v.id,children:v.name},v.id))}):t.jsx("select",{value:u.invest_kind,onChange:v=>j(re=>({...re,invest_kind:v.target.value})),style:C.input,children:kp.map(v=>t.jsx("option",{children:v},v))})]})]}),t.jsx("label",{style:C.label,children:"Note (optional)"}),t.jsx("input",{value:u.note,onChange:v=>j(re=>({...re,note:v.target.value})),placeholder:"Loan account no., etc.",style:C.input}),t.jsx("p",{style:C.fixedHint,children:"Posts automatically at the start of every billing cycle (set in Settings → Currency). This one posts immediately for the current cycle when you save."}),t.jsxs("div",{style:C.modalActions,children:[t.jsx("button",{onClick:()=>j(null),style:C.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:U,disabled:!u.name.trim()||!(parseFloat(u.amount)>0),style:{...C.saveBtn,background:ad,...!u.name.trim()||!(parseFloat(u.amount)>0)?{opacity:.5,cursor:"not-allowed"}:{}},children:[t.jsx(He,{size:15})," ",u.id?"Save":"Add"]})]})]})}),t.jsx(br,{toasts:T,onUndo:R,onDismiss:k}),t.jsx(br,{toasts:K,onUndo:q,onDismiss:oe}),t.jsx(br,{toasts:he,onUndo:Se,onDismiss:ue})]})}function d1({money:e,cur:r}){return t.jsxs(t.Fragment,{children:[t.jsx(c1,{money:e,cur:r}),t.jsx(u1,{money:e,cur:r})]})}function bo({label:e,value:r,set:n,min:o,max:i,step:s,suffix:l}){return t.jsxs("div",{style:C.field,children:[t.jsxs("div",{style:C.fieldTop,children:[t.jsx("span",{style:C.fieldLabel,children:e}),t.jsxs("div",{style:C.fieldInputWrap,children:[t.jsx("input",{type:"number",value:r,onChange:a=>n(a.target.value),style:C.fieldInput}),l&&t.jsx("span",{style:C.fieldSuffix,children:l})]})]}),t.jsx("input",{type:"range",min:o,max:i,step:s,value:r,onChange:a=>n(a.target.value),style:C.range})]})}function c1({money:e,cur:r}){const[n,o]=g.useState(3e4),[i,s]=g.useState(12),[l,a]=g.useState(15),{invested:d,futureValue:c,gains:h,yearly:f}=g.useMemo(()=>{const I=Math.max(0,parseFloat(n)||0),B=Math.max(0,parseFloat(i)||0),z=Math.max(0,Math.min(60,parseInt(l)||0)),w=B/12/100,p=x=>x<=0?0:w===0?I*x:I*((Math.pow(1+w,x)-1)/w)*(1+w),b=[];for(let x=1;x<=z;x++)b.push({year:x,invested:I*12*x,value:p(x*12)});const u=p(z*12),j=I*12*z;return{invested:j,futureValue:u,gains:u-j,yearly:b}},[n,i,l]),m=Math.max(1,...f.map(I=>I.value));return t.jsxs("div",{style:C.card,children:[t.jsx("div",{style:C.cardTitleRow,children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(mm,{size:18,color:"#3A7CA5"}),t.jsxs("div",{children:[t.jsx("div",{style:C.cardTitle,children:"SIP projection"}),t.jsx("div",{style:C.cardSub,children:"Mutual fund / SIP future value"})]})]})}),t.jsx(bo,{label:"Monthly investment",value:n,set:o,min:500,max:5e5,step:500,suffix:r.symbol}),t.jsx(bo,{label:"Expected return (p.a.)",value:i,set:s,min:1,max:30,step:.5,suffix:"%"}),t.jsx(bo,{label:"Time period",value:l,set:a,min:1,max:40,step:1,suffix:"yrs"}),t.jsxs("div",{style:C.resultHero,children:[t.jsx("div",{style:C.resultLabel,children:"Projected wealth"}),t.jsx("div",{style:{...C.resultVal,color:"#3A7CA5"},children:e(c)})]}),t.jsxs("div",{style:C.splitRow,children:[t.jsxs("div",{style:C.splitItem,children:[t.jsx("span",{style:C.splitV,children:e(d)}),t.jsx("span",{style:C.splitL,children:"Invested"})]}),t.jsxs("div",{style:C.splitItem,children:[t.jsx("span",{style:{...C.splitV,color:"#3E9E6B"},children:e(h)}),t.jsx("span",{style:C.splitL,children:"Est. returns"})]})]}),f.length>0&&t.jsxs("div",{style:C.chartWrap,children:[t.jsx("div",{style:C.chartBars,children:f.map(I=>t.jsx("div",{style:C.chartCol,title:`Year ${I.year}: ${e(I.value)}`,children:t.jsx("div",{style:{...C.chartStack,height:`${I.value/m*100}%`},children:t.jsx("div",{style:{...C.chartGain,height:`${(1-I.invested/I.value)*100}%`}})})},I.year))}),t.jsxs("div",{style:C.chartAxis,children:[t.jsx("span",{children:"Yr 1"}),t.jsxs("span",{style:{marginLeft:"auto"},children:["Yr ",f.length]})]}),t.jsxs("div",{style:C.legend,children:[t.jsxs("span",{style:C.legendItem,children:[t.jsx("span",{style:{...C.legendDot,background:"#9DBFD6"}})," Invested"]}),t.jsxs("span",{style:C.legendItem,children:[t.jsx("span",{style:{...C.legendDot,background:"#3E9E6B"}})," Returns"]})]})]})]})}function Sp(e,r,n,o=0,i=0){let s=Math.max(0,e-i),l=0,a=0,d=i;const c=1200;for(;s>.01&&a<c;){const h=s*r;let f=n+o,m=f-h;if(m<=0)return{months:1/0,totalInterest:1/0,totalPaid:1/0};m>s&&(m=s,f=s+h),s-=m,l+=h,d+=f,a++}return{months:a,totalInterest:l,totalPaid:d}}const Cp=e=>{if(!isFinite(e))return"—";const r=Math.floor(e/12),n=e%12;return(r?`${r}y `:"")+`${n}m`},g1=e=>{if(!isFinite(e))return"—";const r=new Date;return r.setMonth(r.getMonth()+e),r.toLocaleDateString("en-US",{month:"short",year:"numeric"})};function u1({money:e,cur:r}){const[n,o]=g.useState(2e6),[i,s]=g.useState(9),[l,a]=g.useState(20),[d,c]=g.useState(5e5),[h,f]=g.useState("once"),[m,I]=g.useState("tenure"),B=g.useMemo(()=>{const u=Math.max(0,parseFloat(n)||0),j=Math.max(0,parseFloat(i)||0)/12/100,x=Math.max(1,Math.round((parseFloat(l)||0)*12)),T=j===0?u/x:u*j*Math.pow(1+j,x)/(Math.pow(1+j,x)-1);return{P:u,i:j,n:x,emi:T,totalPay:T*x,totalInterest:T*x-u}},[n,i,l]),z=h==="monthly"?"tenure":m,w=g.useMemo(()=>{const{P:u,i:j,n:x,emi:T,totalInterest:R}=B,k=Math.max(0,parseFloat(d)||0);if(k<=0)return null;let y=T,K=x,q=R,oe=B.totalPay;if(h==="once"&&z==="emi"){const L=Math.max(0,u-k);y=j===0?L/x:L*j*Math.pow(1+j,x)/(Math.pow(1+j,x)-1),K=x,q=y*x-L,oe=k+y*x}else if(h==="once"){const L=Sp(u,j,T,0,k);K=L.months,q=L.totalInterest,oe=L.totalPaid}else{const L=Sp(u,j,T,k,0);K=L.months,q=L.totalInterest,oe=L.totalPaid}return{newEMI:y,newMonths:K,newInterest:q,totalPaid:oe,interestSaved:Math.max(0,R-q),monthsSaved:Math.max(0,x-(isFinite(K)?K:x))}},[B,d,h,z]),p=B.totalPay>0?B.P/B.totalPay*100:0,b=h==="once"?Math.max(1e5,Math.round(B.P)):Math.max(5e4,Math.round(B.emi*3));return t.jsxs("div",{style:C.card,children:[t.jsx("div",{style:C.cardTitleRow,children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(Zy,{size:18,color:"#C2536B"}),t.jsxs("div",{children:[t.jsx("div",{style:C.cardTitle,children:"EMI calculator"}),t.jsx("div",{style:C.cardSub,children:"Loan / mortgage monthly payment"})]})]})}),t.jsx(bo,{label:"Loan amount",value:n,set:o,min:5e4,max:5e7,step:5e4,suffix:r.symbol}),t.jsx(bo,{label:"Interest rate (p.a.)",value:i,set:s,min:1,max:24,step:.1,suffix:"%"}),t.jsx(bo,{label:"Tenure",value:l,set:a,min:1,max:30,step:1,suffix:"yrs"}),t.jsxs("div",{style:C.resultHero,children:[t.jsx("div",{style:C.resultLabel,children:"Monthly EMI"}),t.jsx("div",{style:{...C.resultVal,color:"#C2536B"},children:e(B.emi)})]}),t.jsxs("div",{style:C.emiSplitTrack,children:[t.jsx("div",{style:{width:`${p}%`,background:"#5B7C99",height:"100%"}}),t.jsx("div",{style:{width:`${100-p}%`,background:"#C2536B",height:"100%"}})]}),t.jsxs("div",{style:C.splitRow,children:[t.jsxs("div",{style:C.splitItem,children:[t.jsx("span",{style:{...C.splitV,color:"#5B7C99"},children:e(B.P)}),t.jsx("span",{style:C.splitL,children:"Principal"})]}),t.jsxs("div",{style:C.splitItem,children:[t.jsx("span",{style:{...C.splitV,color:"#C2536B"},children:e(B.totalInterest)}),t.jsx("span",{style:C.splitL,children:"Total interest"})]}),t.jsxs("div",{style:C.splitItem,children:[t.jsx("span",{style:C.splitV,children:e(B.totalPay)}),t.jsx("span",{style:C.splitL,children:"Total payable"})]})]}),t.jsx("div",{style:C.subDivider}),t.jsx("div",{style:C.subTitle,children:"Prepayment planner"}),t.jsx("div",{style:C.cardSub,children:"See what an extra payment does to your loan."}),t.jsx("div",{style:{marginTop:14},children:t.jsx(bo,{label:"Prepayment amount",value:d,set:c,min:0,max:b,step:h==="once"?25e3:1e3,suffix:r.symbol})}),t.jsxs("div",{style:C.segGroup,children:[t.jsx("span",{style:C.segLbl,children:"Type"}),t.jsxs("div",{style:C.segRow,children:[t.jsx(il,{label:"One-time",on:h==="once",onClick:()=>f("once")}),t.jsx(il,{label:"Every month",on:h==="monthly",onClick:()=>f("monthly")})]})]}),t.jsxs("div",{style:C.segGroup,children:[t.jsx("span",{style:C.segLbl,children:"Strategy"}),t.jsxs("div",{style:C.segRow,children:[t.jsx(il,{label:"Reduce tenure",on:z==="tenure",onClick:()=>I("tenure")}),t.jsx(il,{label:"Reduce EMI",on:z==="emi",disabled:h==="monthly",onClick:()=>I("emi")})]})]}),h==="monthly"&&t.jsx("div",{style:C.note,children:"An extra monthly payment always shortens the tenure. Switch to a one-time prepayment to reduce your EMI instead."}),w?t.jsxs("div",{style:C.cmpCard,children:[t.jsxs("div",{style:C.cmpRow,children:[t.jsx("span",{style:C.cmpLbl,children:"New EMI"}),t.jsxs("span",{style:C.cmpVal,children:[e(w.newEMI),w.newEMI<B.emi-1&&t.jsxs("span",{style:C.cmpWas,children:[" was ",e(B.emi)]})]})]}),t.jsxs("div",{style:C.cmpRow,children:[t.jsx("span",{style:C.cmpLbl,children:"New tenure"}),t.jsxs("span",{style:C.cmpVal,children:[Cp(w.newMonths)," ",t.jsxs("span",{style:C.cmpWas,children:["· paid off ",g1(w.newMonths)]})]})]}),t.jsxs("div",{style:C.cmpRow,children:[t.jsx("span",{style:C.cmpLbl,children:"Total interest"}),t.jsx("span",{style:C.cmpVal,children:e(w.newInterest)})]}),t.jsxs("div",{style:C.cmpRow,children:[t.jsx("span",{style:C.cmpLbl,children:"Total payable"}),t.jsx("span",{style:C.cmpVal,children:e(w.totalPaid)})]}),t.jsxs("div",{style:C.saveRow,children:["You save ",e(w.interestSaved)," in interest",w.monthsSaved>0?` · ${Cp(w.monthsSaved)} sooner`:""]})]}):t.jsx("div",{style:C.muted,children:"Enter a prepayment amount to see the impact."})]})}function il({label:e,on:r,onClick:n,disabled:o}){return t.jsx("button",{onClick:o?void 0:n,disabled:o,style:{...C.seg,...r?C.segOn:{},...o?C.segDisabled:{}},children:e})}const C={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},tabs:{display:"flex",gap:7,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},presetRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},preset:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},presetOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},sumGrid:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:16},sumCard:{background:"var(--surface)",borderRadius:14,padding:"14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},sumCardWide:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,padding:"16px 14px"},sumIcon:{width:30,height:30,borderRadius:9,display:"grid",placeItems:"center",marginBottom:8},sumIconWide:{width:48,height:48,borderRadius:12,display:"grid",placeItems:"center",flexShrink:0},sumWideText:{textAlign:"center"},sumLabel:{fontSize:11.5,color:"var(--text-3)",fontWeight:600},sumVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2,letterSpacing:"-0.01em",wordBreak:"break-word"},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},cardTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},twoCol:{display:"grid",gridTemplateColumns:"1fr",gap:0},dot:{width:10,height:10,borderRadius:3,flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieSvg:{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"visible"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",transition:"transform 0.15s, box-shadow 0.15s",pointerEvents:"none",textAlign:"center",padding:4,boxSizing:"border-box"},pieHoleVal:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:160,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8,borderRadius:8,padding:"3px 5px",margin:"-3px -5px",cursor:"default",transition:"background 0.15s"},legendRowOn:{background:"var(--surface-2)"},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},investNote:{display:"flex",alignItems:"center",gap:6,fontSize:11.5,color:"var(--text-3)",marginBottom:14,marginTop:-4},healthScore:{fontSize:32,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1},healthStatus:{fontSize:12.5,fontWeight:700,marginTop:2},gaugeTrack:{height:10,background:"var(--surface-2)",borderRadius:6,overflow:"hidden",marginBottom:14},gaugeFill:{height:"100%",borderRadius:6,transition:"width 0.4s"},healthStats:{display:"flex",gap:24,marginBottom:12},healthStat:{display:"flex",flexDirection:"column"},healthStatV:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},healthStatL:{fontSize:11,color:"var(--text-3)",fontWeight:600},tip:{fontSize:12.5,lineHeight:1.5,padding:"10px 12px",borderRadius:10,border:"1px solid",fontWeight:500},kindToggle:{display:"flex",gap:8,marginBottom:12},kindBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},formGrid:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},input:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},addBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},invAddBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"7px 13px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",flexShrink:0},invRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},invPct:{fontSize:11,fontWeight:700,marginTop:1},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},fixedHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.5,marginTop:10,marginBottom:0},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},dateHead:{fontSize:11,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8},txnRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},txnDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},txnCat:{fontSize:13.5,fontWeight:600},txnNote:{fontSize:11.5,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},txnAmt:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},editTxn:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:12,margin:"6px 0"},editCancel:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},field:{marginBottom:16},fieldTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},fieldLabel:{fontSize:13,fontWeight:600,color:"var(--text-2)"},fieldInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:8,padding:"5px 10px",background:"var(--surface-2)"},fieldInput:{border:"none",background:"none",outline:"none",width:90,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},fieldSuffix:{fontSize:12,color:"var(--text-3)",fontWeight:600},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},resultHero:{textAlign:"center",padding:"14px 0 6px"},resultLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},resultVal:{fontSize:34,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,wordBreak:"break-word"},splitRow:{display:"flex",gap:10,marginTop:10},splitItem:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",background:"var(--surface-2)",borderRadius:10,padding:"10px 6px"},splitV:{fontSize:14.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",wordBreak:"break-word"},splitL:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:2},chartWrap:{marginTop:18},chartBars:{display:"flex",alignItems:"flex-end",gap:3,height:90},chartCol:{flex:1,height:"100%",display:"flex",alignItems:"flex-end"},chartStack:{width:"100%",background:"#9DBFD6",borderRadius:"3px 3px 0 0",minHeight:2,position:"relative",display:"flex",flexDirection:"column",justifyContent:"flex-start"},chartGain:{width:"100%",background:"#3E9E6B",borderRadius:"3px 3px 0 0"},chartAxis:{display:"flex",fontSize:10,color:"var(--text-3)",fontWeight:600,marginTop:6},legend:{display:"flex",gap:16,justifyContent:"center",marginTop:10},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)",fontWeight:600},legendDot:{width:10,height:10,borderRadius:3},emiSplitTrack:{display:"flex",height:12,borderRadius:6,overflow:"hidden",marginTop:16,border:"1px solid var(--border)"},subDivider:{height:1,background:"var(--border)",margin:"20px 0 14px"},subTitle:{fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},segGroup:{marginBottom:12},segLbl:{fontSize:12,fontWeight:600,color:"var(--text-3)",display:"block",marginBottom:6},segRow:{display:"flex",gap:8},seg:{flex:1,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},segOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},segDisabled:{opacity:.4,cursor:"not-allowed"},note:{fontSize:12,lineHeight:1.5,color:"var(--text-3)",background:"var(--surface-2)",borderRadius:9,padding:"9px 11px",marginBottom:12},cmpCard:{background:"var(--surface-2)",borderRadius:12,padding:"12px 14px",marginTop:4},cmpRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"6px 0",borderBottom:"1px solid var(--border)",gap:10},cmpLbl:{fontSize:12.5,color:"var(--text-2)",fontWeight:600},cmpVal:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",textAlign:"right"},cmpWas:{fontSize:11,color:"var(--text-3)",fontWeight:500,fontFamily:"'Inter',system-ui,sans-serif"},saveRow:{marginTop:12,background:"rgba(62,158,107,0.12)",color:"#3E9E6B",borderRadius:9,padding:"10px 12px",fontSize:13,fontWeight:700,textAlign:"center"}},wc=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],dd={Monday:"Mon",Tuesday:"Tue",Wednesday:"Wed",Thursday:"Thu",Friday:"Fri",Saturday:"Sat",Sunday:"Sun"},Wi=()=>wc[(new Date().getDay()+6)%7],an={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},zp=Object.keys(an),cd=21,Tp="kickstart_tags",gd=e=>{if(!e)return"";const r=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(r))return r;const n=r.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},Ip=e=>{if(!e||!String(e).trim())return null;const r=String(e).split(":").map(n=>parseInt(n.trim(),10));return r.some(n=>isNaN(n)||n<0)?null:r.reduce((n,o)=>n*60+o,0)},sl=e=>{if(e==null)return"";const r=Math.max(0,e|0);return`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`},p1=e=>`https://www.youtube.com/embed/${e.youtube_id}?start=${e.start_sec||0}`+(e.end_sec?`&end=${e.end_sec}`:"")+"&autoplay=1&rel=0",b1=()=>({id:null,url:"",title:"",start:"",end:"",days:[Wi()],pillars:[],customs:[]});function h1(){const[e,r]=g.useState([]),[n,o]=g.useState([]),[i,s]=g.useState(!1),[l,a]=g.useState({type:"day",value:Wi()}),[d,c]=g.useState(null),[h,f]=g.useState(null),[m,I]=g.useState(""),B=g.useCallback(async()=>{try{const[L,he]=await Promise.all([E.getKickstart(),E.getSetting(Tp)]);r(L),o(Array.isArray(he==null?void 0:he.value)?he.value:[])}catch{}s(!0)},[]);g.useEffect(()=>{B()},[B]);const{deleteItem:z,toasts:w,handleUndo:p,handleDismiss:b}=pr(E.deleteKickstart,E.restoreKickstart,B);g.useEffect(()=>{if(!h)return;const L=e.find(se=>se.id===h);if(!L)return;const he=L.end_sec?Math.max(1,L.end_sec-(L.start_sec||0)):1/0;let Se=0;const ue=10,ke=setInterval(()=>{if(document.hidden)return;const se=he-Se;if(se<=0){clearInterval(ke);return}const U=Math.min(ue,se);Se+=U,E.addScreenTime("kickstart",Math.round(U)).catch(()=>{})},ue*1e3);return()=>clearInterval(ke)},[h,e]);const u=L=>{o(L),E.setSetting(Tp,L).catch(()=>{})},j=()=>{const L=m.trim();!L||n.length>=cd||n.includes(L)||(u([...n,L]),c(he=>he&&!he.customs.includes(L)?{...he,customs:[...he.customs,L]}:he),I(""))},x=L=>u(n.filter(he=>he!==L)),T=(L,he)=>c(Se=>({...Se,[L]:Se[L].includes(he)?Se[L].filter(ue=>ue!==he):[...Se[L],he]})),R=L=>c({id:L.id,url:`https://youtu.be/${L.youtube_id}`,title:L.title,start:sl(L.start_sec),end:L.end_sec?sl(L.end_sec):"",days:[...L.days],pillars:[...L.pillars],customs:[...L.customs]}),k=async()=>{const L=gd(d.url);if(!L||d.days.length===0||!d.title.trim())return;const he={youtube_id:L,title:d.title.trim(),start_sec:Ip(d.start)||0,end_sec:Ip(d.end),days:d.days,pillars:d.pillars,customs:d.customs};d.id?await E.updateKickstart(d.id,he):await E.createKickstart(he),c(null),B()},y=g.useMemo(()=>e.filter(L=>l.type==="all"?!0:l.type==="day"?L.days.includes(l.value):l.type==="pillar"?L.pillars.includes(l.value):l.type==="custom"?L.customs.includes(l.value):!0),[e,l]),K=(L,he)=>l.type===L&&l.value===he,q=d?[!gd(d.url)&&"a valid YouTube link",!d.title.trim()&&"a title",d.days.length===0&&"at least one day"].filter(Boolean):[],oe=!!d&&q.length===0;return t.jsxs("div",{style:Be.page,children:[t.jsxs("div",{style:Be.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:Be.eyebrow,children:"Anvil · Kickstart"}),t.jsx("h1",{style:Be.h1,children:"Kickstart"}),t.jsxs("div",{style:Be.subhead,children:["Your motivation hub — the right push for ",Wi(),"."]})]}),!d&&t.jsxs("button",{onClick:()=>c(b1()),style:Be.addBtn,children:[t.jsx(lt,{size:15})," Add video"]})]}),d&&t.jsxs("div",{style:Be.card,children:[t.jsx("div",{style:Be.cardTitle,children:d.id?"Edit video":"Add video"}),t.jsx("input",{placeholder:"YouTube link (or video ID)",value:d.url,onChange:L=>c({...d,url:L.target.value}),style:Be.input,autoFocus:!0}),d.url&&!gd(d.url)&&t.jsx("div",{style:Be.warn,children:"Couldn't find a YouTube video ID in that link."}),t.jsx("input",{placeholder:"Title (required)",value:d.title,onChange:L=>c({...d,title:L.target.value}),style:{...Be.input,marginTop:8}}),t.jsxs("div",{style:Be.trimRow,children:[t.jsx(ym,{size:15,color:"var(--text-3)"}),t.jsxs("label",{style:Be.trimField,children:[t.jsx("span",{style:Be.trimLbl,children:"Start"}),t.jsx("input",{placeholder:"0:30",value:d.start,onChange:L=>c({...d,start:L.target.value}),style:Be.trimInput})]}),t.jsx("span",{style:Be.trimArrow,children:"→"}),t.jsxs("label",{style:Be.trimField,children:[t.jsx("span",{style:Be.trimLbl,children:"End"}),t.jsx("input",{placeholder:"end (optional)",value:d.end,onChange:L=>c({...d,end:L.target.value}),style:Be.trimInput})]})]}),t.jsx("div",{style:Be.hint,children:"Only this trimmed part plays. Use m:ss (e.g. 1:30). Leave End blank to play to the end."}),t.jsxs("div",{style:Be.tagBlock,children:[t.jsxs("div",{style:Be.tagLabel,children:["Days ",t.jsx("span",{style:Be.req,children:"required"})]}),t.jsx("div",{style:Be.chipRow,children:wc.map(L=>t.jsx("button",{onClick:()=>T("days",L),style:{...Be.chip,...d.days.includes(L)?Be.chipOnDark:{}},children:dd[L]},L))})]}),t.jsxs("div",{style:Be.tagBlock,children:[t.jsxs("div",{style:Be.tagLabel,children:["Pillars ",t.jsx("span",{style:Be.opt,children:"optional"})]}),t.jsx("div",{style:Be.chipRow,children:zp.map(L=>{const he=d.pillars.includes(L);return t.jsxs("button",{onClick:()=>T("pillars",L),style:{...Be.chip,...he?{background:an[L],color:"#fff",borderColor:an[L]}:{}},children:[t.jsx("span",{style:{...Be.dot,background:he?"#fff":an[L]}}),L]},L)})})]}),t.jsxs("div",{style:Be.tagBlock,children:[t.jsxs("div",{style:Be.tagLabel,children:["Custom tags ",t.jsxs("span",{style:Be.opt,children:["optional · ",n.length,"/",cd]})]}),t.jsxs("div",{style:Be.chipRow,children:[n.map(L=>t.jsxs("span",{style:{...Be.chip,...d.customs.includes(L)?Be.chipOnAccent:{},paddingRight:4},children:[t.jsx("button",{onClick:()=>T("customs",L),style:Be.chipInner,children:L}),t.jsx("button",{onClick:()=>x(L),style:Be.chipX,title:"Delete tag",children:t.jsx(De,{size:11})})]},L)),n.length===0&&t.jsx("span",{style:Be.muted,children:"No custom tags yet."})]}),n.length<cd&&t.jsxs("div",{style:Be.newTagRow,children:[t.jsx("input",{placeholder:"New custom tag…",value:m,onChange:L=>I(L.target.value),onKeyDown:L=>L.key==="Enter"&&j(),style:{...Be.input,padding:"7px 10px"}}),t.jsx("button",{onClick:j,style:Be.smallBtn,children:t.jsx(lt,{size:14})})]})]}),!oe&&t.jsxs("div",{style:Be.warn,children:["Add ",q.join(", ")," to save."]}),t.jsxs("div",{style:Be.formActions,children:[t.jsxs("button",{onClick:()=>c(null),style:Be.cancelBtn,children:[t.jsx(De,{size:14})," Cancel"]}),t.jsxs("button",{onClick:k,disabled:!oe,style:{...Be.saveBtn,...oe?{}:Be.saveDisabled},children:[t.jsx(He,{size:15})," ",d.id?"Save":"Add video"]})]})]}),t.jsxs("div",{style:Be.filterCard,children:[t.jsx("button",{onClick:()=>a({type:"all"}),style:{...Be.fChip,...l.type==="all"?Be.fChipOnDark:{}},children:"All"}),t.jsx("span",{style:Be.fDivider}),wc.map(L=>t.jsxs("button",{onClick:()=>a({type:"day",value:L}),style:{...Be.fChip,...K("day",L)?Be.fChipOnDark:{},...L===Wi()?Be.fToday:{}},children:[dd[L],L===Wi()?" ·":""]},L)),t.jsx("span",{style:Be.fDivider}),zp.map(L=>t.jsxs("button",{onClick:()=>a({type:"pillar",value:L}),style:{...Be.fChip,...K("pillar",L)?{background:an[L],color:"#fff",borderColor:an[L]}:{}},children:[t.jsx("span",{style:{...Be.dot,background:K("pillar",L)?"#fff":an[L]}}),L]},L)),n.length>0&&t.jsx("span",{style:Be.fDivider}),n.map(L=>t.jsxs("button",{onClick:()=>a({type:"custom",value:L}),style:{...Be.fChip,...K("custom",L)?Be.fChipOnAccent:{}},children:[t.jsx(pc,{size:11})," ",L]},L))]}),i?y.length===0?t.jsx("div",{style:Be.empty,children:e.length===0?"No videos yet — add your first motivation clip.":"No videos for this tag."}):t.jsx("div",{style:Be.grid,children:y.map(L=>t.jsxs("div",{style:Be.videoCard,children:[t.jsx("div",{style:Be.thumbWrap,children:h===L.id?t.jsx("iframe",{src:p1(L),title:L.title||L.youtube_id,style:Be.iframe,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):t.jsxs("button",{onClick:()=>f(L.id),style:Be.thumbBtn,children:[t.jsx("img",{src:`https://img.youtube.com/vi/${L.youtube_id}/hqdefault.jpg`,alt:"",style:Be.thumb}),t.jsx("span",{style:Be.playOverlay,children:t.jsx(Tg,{size:22,color:"#fff",fill:"#fff"})}),t.jsxs("span",{style:Be.trimBadge,children:[sl(L.start_sec),L.end_sec?` – ${sl(L.end_sec)}`:"+"]})]})}),t.jsxs("div",{style:Be.videoBody,children:[t.jsx("div",{style:Be.videoTitle,children:L.title||"Untitled clip"}),t.jsxs("div",{style:Be.tagWrap,children:[L.days.map(he=>t.jsx("span",{style:Be.dayTag,children:dd[he]},he)),L.pillars.map(he=>t.jsx("span",{style:{...Be.pillTag,color:an[he]||"var(--text-2)",borderColor:an[he]||"var(--border)"},children:he},he)),L.customs.map(he=>t.jsx("span",{style:Be.customTag,children:he},he))]}),t.jsxs("div",{style:Be.cardActions,children:[t.jsx("button",{onClick:()=>R(L),style:Be.iconBtn,title:"Edit",children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:()=>z(L.id,L.title||"video"),style:Be.iconBtn,title:"Delete",children:t.jsx(De,{size:14})})]})]})]},L.id))}):t.jsx("div",{style:Be.muted,children:"Loading…"}),t.jsx(br,{toasts:w,onUndo:p,onDismiss:b})]})}const Be={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:1e3,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},warn:{fontSize:11.5,color:"#C2773B",marginTop:5,fontWeight:600},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:6,lineHeight:1.4},trimRow:{display:"flex",alignItems:"flex-end",gap:10,marginTop:10},trimField:{display:"flex",flexDirection:"column",gap:4,flex:1},trimLbl:{fontSize:11,color:"var(--text-2)",fontWeight:600},trimInput:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},trimArrow:{color:"var(--text-3)",paddingBottom:9},tagBlock:{marginTop:14},tagLabel:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},req:{fontSize:10,fontWeight:700,color:"#C2536B",textTransform:"uppercase",marginLeft:6},opt:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",marginLeft:6},chipRow:{display:"flex",gap:6,flexWrap:"wrap"},chip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},chipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},chipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},chipInner:{border:"none",background:"none",color:"inherit",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,padding:0},chipX:{border:"none",background:"rgba(0,0,0,0.12)",color:"inherit",cursor:"pointer",display:"grid",placeItems:"center",borderRadius:"50%",width:16,height:16,padding:0},newTagRow:{display:"flex",gap:6,marginTop:8,maxWidth:280},smallBtn:{border:"none",background:"var(--accent)",color:"#fff",width:34,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},dot:{width:8,height:8,borderRadius:"50%",flexShrink:0,display:"inline-block"},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"var(--accent)",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},filterCard:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:12,marginBottom:18},fChip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},fChipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},fChipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},fToday:{borderColor:"var(--accent)",borderWidth:2},fDivider:{width:1,alignSelf:"stretch",background:"var(--border)",margin:"0 2px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:14},videoCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 9",background:"#000"},thumbBtn:{border:"none",padding:0,margin:0,cursor:"pointer",width:"100%",height:"100%",position:"relative",display:"block",background:"#000"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center",background:"rgba(0,0,0,0.28)"},trimBadge:{position:"absolute",bottom:8,right:8,background:"rgba(0,0,0,0.75)",color:"#fff",fontSize:11,fontWeight:700,padding:"2px 7px",borderRadius:6,fontFamily:"'Fraunces',Georgia,serif"},iframe:{width:"100%",height:"100%",border:"none",display:"block"},videoBody:{padding:"12px 13px",display:"flex",flexDirection:"column",gap:8},videoTitle:{fontSize:14,fontWeight:700},tagWrap:{display:"flex",gap:5,flexWrap:"wrap"},dayTag:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:8},pillTag:{fontSize:10,fontWeight:700,border:"1px solid",borderRadius:8,padding:"2px 7px"},customTag:{fontSize:10,fontWeight:700,color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"2px 7px",borderRadius:8},cardActions:{display:"flex",gap:4,justifyContent:"flex-end"},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},Mm=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Bp=()=>Mm(new Date),Rp=(e,r)=>{const n=new Date(e+"T00:00:00");return n.setDate(n.getDate()+r),Mm(n)},Ep=e=>new Date(e+"T00:00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"}),Lm=e=>{if(!e)return"";const r=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(r))return r;const n=r.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},m1=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>900?(a=a*900/l,l=900):a>900&&(l=l*900/a,a=900);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),r(d.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)});function f1(){const[e,r]=g.useState([]),[n,o]=g.useState(!1),[i,s]=g.useState(null),[l,a]=g.useState(!1),[d,c]=g.useState({title:"",image:""}),[h,f]=g.useState(""),[m,I]=g.useState(!0),[B,z]=g.useState(null),w=g.useCallback(async()=>{try{r(await E.getGoldenGoals())}catch{}o(!0)},[]);g.useEffect(()=>{w()},[w]);const{deleteItem:p,toasts:b,handleUndo:u,handleDismiss:j}=pr(E.deleteGolden,E.restoreGolden,w);g.useEffect(()=>{E.getSetting("golden_music").then(y=>f(Lm((y==null?void 0:y.value)||""))).catch(()=>{})},[]);const x=async()=>{if(!d.title.trim())return;const y=await E.createGolden({title:d.title.trim(),image:d.image});c({title:"",image:""}),a(!1),await w(),s(y.id)},T=async(y,K)=>{var oe;const q=(oe=y.target.files)==null?void 0:oe[0];if(q)try{K(await m1(q))}catch{}},R=e.filter(y=>!y.achieved),k=e.filter(y=>y.achieved);return i?t.jsxs("div",{style:te.page,children:[t.jsx(w1,{musicId:h,on:m}),t.jsx(j1,{goalId:i,onBack:()=>s(null),onReload:w,onCelebrate:(y,K)=>z({title:y,days:K}),pickImage:T,musicId:h,setMusicId:f,musicOn:m,setMusicOn:I}),B&&t.jsx(k1,{data:B,onClose:()=>z(null)})]}):t.jsxs("div",{style:te.page,children:[t.jsxs("div",{style:te.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:te.eyebrow,children:"Anvil · Golden Book"}),t.jsx("h1",{style:te.h1,children:"Golden Book"}),t.jsx("div",{style:te.subhead,children:"Write your dreams into being — a little every day."})]}),!l&&t.jsxs("button",{onClick:()=>a(!0),style:te.addBtn,children:[t.jsx(lt,{size:15})," New dream"]})]}),l&&t.jsxs("div",{style:te.card,children:[t.jsx("div",{style:te.cardTitle,children:"Manifest a new dream"}),t.jsx("textarea",{autoFocus:!0,placeholder:"Write your dream as if it's already true…",value:d.title,onChange:y=>c({...d,title:y.target.value}),style:te.textarea}),t.jsxs("label",{style:te.photoPick,children:[d.image?t.jsx("img",{src:d.image,alt:"",style:te.photoPreview}):t.jsxs("span",{style:te.photoEmpty,children:[t.jsx(ja,{size:18})," Add a photo"]}),t.jsx("input",{type:"file",accept:"image/*",onChange:y=>T(y,K=>c({...d,image:K})),style:{display:"none"}})]}),t.jsxs("div",{style:te.formActions,children:[t.jsxs("button",{onClick:()=>{a(!1),c({title:"",image:""})},style:te.cancelBtn,children:[t.jsx(De,{size:14})," Cancel"]}),t.jsxs("button",{onClick:x,disabled:!d.title.trim(),style:{...te.saveBtn,...d.title.trim()?{}:te.saveDisabled},children:[t.jsx(He,{size:15})," Create"]})]})]}),n?t.jsxs(t.Fragment,{children:[R.length===0&&k.length===0&&!l&&t.jsx("div",{style:te.empty,children:"No dreams yet. Add your first one and revisit it daily."}),R.length>0&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:te.sectionTitle,children:[t.jsx(Co,{size:15,color:"#C9A227"})," Manifesting ",t.jsx("span",{style:te.badge,children:R.length})]}),t.jsx("div",{style:te.grid,children:R.map(y=>t.jsx(Ap,{g:y,onOpen:()=>s(y.id),onDelete:()=>p(y.id,y.title)},y.id))})]}),k.length>0&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{...te.sectionTitle,marginTop:22},children:[t.jsx(Yr,{size:15,color:"#4C9A6B"})," Manifested ",t.jsx("span",{style:te.badge,children:k.length})]}),t.jsx("div",{style:te.grid,children:k.map(y=>t.jsx(Ap,{g:y,onOpen:()=>s(y.id),onDelete:()=>p(y.id,y.title),achieved:!0},y.id))})]})]}):t.jsx("div",{style:te.muted,children:"Loading…"}),t.jsx(br,{toasts:b,onUndo:u,onDismiss:j})]})}const Sc=[{key:"morning",label:"Morning",time:"6 AM – 12 PM",Icon:km,color:"#E0883B"},{key:"noon",label:"Noon",time:"12 – 6 PM",Icon:f0,color:"#C9A227"},{key:"night",label:"Night",time:"6 PM – 2 AM",Icon:o0,color:"#6B6FB0"}],Dp=e=>{if(e<31)return`${e} day${e===1?"":"s"}`;const r=Math.floor(e/365),n=Math.floor(e%365/30),o=e%365%30,i=[];return r&&i.push(`${r}y`),n&&i.push(`${n}mo`),o&&i.push(`${o}d`),i.join(" ")},Fp="tesla369_reminders";function x1({g:e,onChanged:r,musicId:n,setMusicId:o,musicOn:i,setMusicOn:s}){const[l,a]=g.useState(""),[d,c]=g.useState(!1),[h,f]=g.useState(!1),[m,I]=g.useState(()=>localStorage.getItem(Fp)==="1"),B=e.t369,z=(e.t369_affirmation||"").trim();if(v1(m&&!!z,B,e.title),!B)return null;const{window:w,targets:p,counts:b,current_streak:u,best_streak:j,min_streak:x,min_reached:T,day_complete:R}=B,k=(b.morning||0)+(b.noon||0)+(b.night||0),y=p.morning+p.noon+p.night,K=async()=>{if(z&&l.trim()===z&&w){f(!0);try{r(await E.logTesla369(e.id)),a("")}catch(Se){alert(Se.message||"Could not log this write.")}finally{f(!1)}}},q=async()=>{f(!0);try{r(await E.undoTesla369(e.id))}catch{}finally{f(!1)}},oe=async()=>{if(!m&&!await y1()){alert("Enable notifications in your browser to get 369 reminders.");return}const Se=!m;I(Se),localStorage.setItem(Fp,Se?"1":"0")},L=l.trim()===z&&z!=="",he=w&&(b[w]||0)>=p[w];return t.jsxs("div",{style:te.tCard,children:[t.jsxs("div",{style:te.tHead,children:[t.jsxs("div",{style:te.tTitleWrap,children:[t.jsxs("span",{style:te.tBadge,children:[t.jsx(Bg,{size:14})," 369"]}),t.jsxs("div",{children:[t.jsx("div",{style:te.tTitle,children:"369 Method"}),t.jsx("div",{style:te.tSub,children:"Write it 3× morning · 6× noon · 9× night."})]})]}),t.jsxs("div",{style:te.tHeadBtns,children:[t.jsx(_m,{musicId:n,setMusicId:o,musicOn:i,setMusicOn:s}),t.jsxs("button",{onClick:oe,style:{...te.tRemBtn,...m?te.tRemOn:{}},title:m?"Reminders on":"Turn on reminders",children:[m?t.jsx(kg,{size:14}):t.jsx(Sy,{size:14})," ",m?"Reminders on":"Remind me"]})]})]}),t.jsxs("div",{style:te.tStreakRow,children:[t.jsxs("div",{style:te.tStreakBox,children:[t.jsxs("div",{style:te.tStreakLabel,children:[t.jsx(jn,{size:13,color:"#C2773B"})," Current streak"]}),t.jsx("div",{style:te.tStreakVal,children:Dp(u)}),T?t.jsxs("div",{style:{...te.tStreakHint,color:"#4C9A6B"},children:["✓ ",x,"-day minimum met — keep going until it manifests"]}):t.jsxs("div",{style:te.tStreakHint,children:["Day ",u," of ",x," minimum"]}),!T&&t.jsx("div",{style:te.tProgTrack,children:t.jsx("div",{style:{...te.tProgFill,width:`${Math.min(100,u/x*100)}%`}})})]}),t.jsxs("div",{style:te.tStreakBox,children:[t.jsxs("div",{style:te.tStreakLabel,children:[t.jsx(Yr,{size:13,color:"#C9A227"})," All-time best"]}),t.jsx("div",{style:te.tStreakVal,children:Dp(j)}),t.jsxs("div",{style:te.tStreakHint,children:["Today: ",k,"/",y," written ",R?"✓":""]})]})]}),z?t.jsxs(t.Fragment,{children:[t.jsx("div",{style:te.tWindows,children:Sc.map(({key:Se,label:ue,time:ke,Icon:se,color:U})=>{const de=b[Se]||0,X=p[Se],S=w===Se,W=de>=X;return t.jsxs("div",{style:{...te.tWindow,...S?{border:`1px solid ${U}`,boxShadow:`0 0 0 2px ${U}22`}:{}},children:[t.jsxs("div",{style:te.tWindowHead,children:[t.jsx(se,{size:15,color:U}),t.jsx("span",{style:te.tWindowLabel,children:ue}),S&&t.jsx("span",{style:{...te.tNow,color:U},children:"now"})]}),t.jsx("div",{style:te.tWindowTime,children:ke}),t.jsx("div",{style:te.tDots,children:Array.from({length:X}).map((O,N)=>t.jsx("span",{style:{...te.tDot,...N<de?{background:U,borderColor:U}:{}}},N))}),t.jsxs("div",{style:{...te.tCount,...W?{color:U}:{}},children:[de,"/",X,W?" ✓":""]})]},Se)})}),t.jsx("div",{style:te.tWriteBox,children:w?he?t.jsxs("div",{style:te.tDoneMsg,children:["✓ ",Sc.find(Se=>Se.key===w).label," complete. ",R?"All 18 done today! 🔥":"Next window unlocks ahead."]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{style:te.tNote,children:"✍️ Type it out by hand — no copy-pasting. The act of writing is the point."}),t.jsx("textarea",{value:l,onChange:Se=>a(Se.target.value),onPaste:Se=>{Se.preventDefault(),c(!0),setTimeout(()=>c(!1),2500)},onDrop:Se=>Se.preventDefault(),placeholder:"Type your affirmation here…",style:{...te.writeArea,...L?{border:"1px solid #4C9A6B"}:{}}}),d&&t.jsx("div",{style:te.tPasteWarn,children:"Pasting is disabled — please type it."}),t.jsxs("div",{style:te.tWriteActions,children:[t.jsxs("button",{onClick:q,disabled:h||(b[w]||0)===0,style:te.tUndoBtn,title:"Undo last write",children:[t.jsx(wm,{size:14})," Undo"]}),t.jsxs("button",{onClick:K,disabled:h||!L,style:{...te.writeSave,flex:1,...L?{}:te.saveDisabled},children:[t.jsx(He,{size:15})," ",L?"Log this write":"Type it to log"]})]})]}):t.jsx("div",{style:te.tClosed,children:"Writing windows: 6 AM–12 PM, 12–6 PM, 6 PM–2 AM. Come back during a window."})})]}):t.jsx("div",{style:te.tClosed,children:"Set a 369 affirmation above to start writing."})]})}async function y1(){return"Notification"in window?Notification.permission==="granted"?!0:Notification.permission==="denied"?!1:await Notification.requestPermission()==="granted":!1}function v1(e,r,n){const o=g.useRef({});g.useEffect(()=>{if(!e||!r)return;const i=()=>{var I;if(Notification.permission!=="granted")return;const l=r.window;if(!l)return;const a=r.counts||{},d=r.targets||{};if((a[l]||0)>=(d[l]||0))return;const c=r.today,h=`369-${n||""}-${c}-${l}`;if(o.current[h])return;o.current[h]=!0;const f=((I=Sc.find(B=>B.key===l))==null?void 0:I.label)||"",m=(d[l]||0)-(a[l]||0);try{new Notification("369 — time to write ✍️",{body:`${n?`"${n}" · `:""}${f} window: ${m} more to go. Type your affirmation.`,tag:h})}catch{}};i();const s=setInterval(i,60*1e3);return()=>clearInterval(s)},[e,r,n])}function Ap({g:e,onOpen:r,onDelete:n,achieved:o}){return t.jsxs("div",{style:{...te.goalCard,...o?{opacity:.96}:{},position:"relative"},children:[t.jsxs("button",{onClick:r,style:te.goalCardBtn,children:[t.jsxs("div",{style:te.thumbWrap,children:[e.image?t.jsx("img",{src:e.image,alt:"",style:te.thumb}):t.jsx("div",{style:te.thumbEmpty,children:t.jsx(Co,{size:26,color:"var(--text-3)"})}),o&&t.jsx("span",{style:te.stamp,children:"✦ Manifested"})]}),t.jsxs("div",{style:te.goalBody,children:[t.jsx("div",{style:te.goalTitle,children:e.title}),t.jsxs("div",{style:te.goalMeta,children:[o?t.jsxs("span",{style:{...te.metaPill,color:"#4C9A6B",background:"rgba(76,154,107,0.12)"},children:[t.jsx(Yr,{size:12})," ",e.days_to_manifest!=null?`in ${e.days_to_manifest} day${e.days_to_manifest===1?"":"s"}`:"done"]}):t.jsxs("span",{style:{...te.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[t.jsx(jn,{size:12})," ",e.streak," day streak"]}),t.jsxs("span",{style:te.metaDim,children:[e.total_days," entr",e.total_days===1?"y":"ies"]})]})]})]}),t.jsx("button",{onClick:i=>{i.stopPropagation(),window.confirm(`Delete "${e.title}"?`)&&n()},style:te.cardDelBtn,title:"Delete dream",children:t.jsx(ai,{size:14})})]})}function j1({goalId:e,onBack:r,onReload:n,onCelebrate:o,pickImage:i,musicId:s,setMusicId:l,musicOn:a,setMusicOn:d}){const[c,h]=g.useState(null),[f,m]=g.useState({}),[I,B]=g.useState(Bp()),[z,w]=g.useState(""),[p,b]=g.useState(null),[u,j]=g.useState(null),x=Bp(),T=g.useCallback(U=>{h(U);const de={};(U.entries||[]).forEach(X=>{de[X.date]=X.text}),m(de),w(de[x]||"")},[x]),R=g.useCallback(async()=>{T(await E.getGoldenGoal(e))},[e,T]);if(g.useEffect(()=>{R()},[R]),g.useEffect(()=>{if(!(c!=null&&c.t369_enabled))return;const U=setInterval(()=>{E.getGoldenGoal(e).then(T).catch(()=>{})},60*1e3);return()=>clearInterval(U)},[c==null?void 0:c.t369_enabled,e,T]),!c)return t.jsx("div",{style:te.muted,children:"Loading…"});const k=I===x,y=I>c.created_date,K=I<x,q=async()=>{await E.upsertGoldenEntry(e,{date:x,text:z}),await R(),n()},oe=async()=>{const U=await E.achieveGolden(e);o(c.title,U.days_to_manifest),await R(),n()},L=async()=>{await E.unachieveGolden(e),await R(),n()},he=async()=>{p.trim()&&(await E.updateGolden(e,{title:p.trim()}),b(null),await R(),n())},Se=U=>E.updateGolden(e,{image:U}).then(()=>{R(),n()}),ue=async()=>{await E.updateGolden(e,{t369_enabled:!c.t369_enabled}),await R(),n()},ke=async()=>{await E.updateGolden(e,{t369_affirmation:(u||"").trim()}),j(null),await R()},se=async()=>{window.confirm(`Delete "${c.title}"? This cannot be undone from here.`)&&(await E.deleteGolden(e),n(),r())};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:te.detailTopRow,children:[t.jsxs("button",{onClick:r,style:te.backBtn,children:[t.jsx(im,{size:16})," All dreams"]}),t.jsxs("button",{onClick:se,style:te.deleteBtn,title:"Delete dream",children:[t.jsx(ai,{size:14})," Delete"]})]}),t.jsxs("div",{style:te.detailHero,children:[t.jsxs("label",{style:te.heroPhoto,children:[c.image?t.jsx("img",{src:c.image,alt:"",style:te.heroImg}):t.jsxs("span",{style:te.photoEmpty,children:[t.jsx(ja,{size:20})," Add a photo"]}),t.jsxs("span",{style:te.photoEdit,children:[t.jsx(vt,{size:12})," Edit photo"]}),t.jsx("input",{type:"file",accept:"image/*",onChange:U=>i(U,Se),style:{display:"none"}})]}),t.jsxs("div",{style:te.heroInfo,children:[c.achieved&&t.jsxs("span",{style:te.heroStamp,children:["✦ Manifested",c.days_to_manifest!=null?` in ${c.days_to_manifest} day${c.days_to_manifest===1?"":"s"}`:""]}),p!==null?t.jsxs("div",{style:{display:"flex",gap:6,width:"100%"},children:[t.jsx("textarea",{autoFocus:!0,value:p,onChange:U=>b(U.target.value),style:{...te.textarea,minHeight:60}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[t.jsx("button",{onClick:he,style:te.iconSave,children:t.jsx(He,{size:14})}),t.jsx("button",{onClick:()=>b(null),style:te.iconCancel,children:t.jsx(De,{size:14})})]})]}):t.jsxs("div",{style:te.heroTitleRow,children:[t.jsx("div",{style:te.heroTitle,children:c.title}),t.jsx("button",{onClick:()=>b(c.title),style:te.ghostBtn,title:"Edit",children:t.jsx(vt,{size:13})})]}),t.jsxs("div",{style:te.heroStats,children:[t.jsxs("span",{style:{...te.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[t.jsx(jn,{size:13})," ",c.streak," day streak"]}),t.jsxs("span",{style:te.metaDim,children:[c.total_days," entr",c.total_days===1?"y":"ies"]}),t.jsxs("span",{style:te.metaDim,children:["since ",Ep(c.created_date)]})]})]})]}),!c.achieved&&t.jsxs("div",{style:te.t369Row,children:[t.jsxs("div",{style:te.t369RowLeft,children:[t.jsxs("span",{style:{...te.tBadge,...c.t369_enabled?{}:te.tBadgeOff},children:[t.jsx(Bg,{size:13})," 369"]}),t.jsxs("div",{children:[t.jsx("div",{style:te.t369RowTitle,children:"Tesla's 369 Method"}),t.jsx("div",{style:te.t369RowSub,children:c.t369_enabled?"On — write this dream 3×/6×/9× across the day.":"Off — using the simple daily entry."})]})]}),t.jsx("button",{onClick:ue,style:{...te.switch,...c.t369_enabled?te.switchOn:{}},role:"switch","aria-checked":c.t369_enabled,title:"Toggle 369 method",children:t.jsx("span",{style:{...te.switchKnob,...c.t369_enabled?te.switchKnobOn:{}}})})]}),c.t369_enabled&&!c.achieved&&t.jsxs(t.Fragment,{children:[u!==null||!c.t369_affirmation?t.jsxs("div",{style:te.card,children:[t.jsx("div",{style:te.cardTitle,children:"Your 369 affirmation"}),t.jsx("textarea",{autoFocus:!0,value:u??c.t369_affirmation??"",onChange:U=>j(U.target.value),placeholder:"The exact line you'll write 18× a day, e.g. 'I am grateful for my dream home.'",style:te.textarea}),t.jsxs("div",{style:te.formActions,children:[c.t369_affirmation&&t.jsxs("button",{onClick:()=>j(null),style:te.cancelBtn,children:[t.jsx(De,{size:14})," Cancel"]}),t.jsxs("button",{onClick:ke,disabled:!(u??"").trim()&&!c.t369_affirmation,style:{...te.saveBtn,...(u??c.t369_affirmation??"").trim()?{}:te.saveDisabled},children:[t.jsx(He,{size:15})," Save affirmation"]})]})]}):t.jsxs("div",{style:te.tAffShow,children:[t.jsx(gc,{size:15,color:$r}),t.jsx("p",{style:te.tAffText,children:c.t369_affirmation}),t.jsx("button",{onClick:()=>j(c.t369_affirmation),style:te.ghostBtn,title:"Edit affirmation",children:t.jsx(vt,{size:13})})]}),t.jsx(x1,{g:c,onChanged:T,musicId:s,setMusicId:l,musicOn:a,setMusicOn:d})]}),!c.t369_enabled&&t.jsxs("div",{style:te.writeCard,children:[t.jsx("div",{style:te.tuneRow,children:t.jsx(_m,{musicId:s,setMusicId:l,musicOn:a,setMusicOn:d})}),t.jsxs("div",{style:te.writeNav,children:[t.jsx("button",{onClick:()=>B(U=>Rp(U,-1)),disabled:!y,style:{...te.navBtn,...y?{}:te.navDisabled},children:t.jsx(Sn,{size:16})}),t.jsx("div",{style:te.writeDate,children:k?"Today":Ep(I)}),t.jsx("button",{onClick:()=>B(U=>Rp(U,1)),disabled:!K,style:{...te.navBtn,...K?{}:te.navDisabled},children:t.jsx(nn,{size:16})})]}),k&&!c.achieved?t.jsxs(t.Fragment,{children:[t.jsx("textarea",{value:z,onChange:U=>w(U.target.value),placeholder:"Write it again today, as if it's already yours…",style:te.writeArea}),t.jsxs("button",{onClick:q,style:te.writeSave,children:[t.jsx(He,{size:15})," Save today's entry"]})]}):t.jsx("div",{style:te.readEntry,children:f[I]?t.jsxs(t.Fragment,{children:[t.jsx(gc,{size:16,color:"var(--text-3)"}),t.jsx("p",{style:te.readText,children:f[I]})]}):t.jsx("div",{style:te.muted,children:"Nothing written on this day."})})]}),c.achieved?t.jsx("button",{onClick:L,style:te.unmanifestBtn,children:"Undo manifested"}):t.jsxs("button",{onClick:oe,style:te.manifestBtn,children:[t.jsx(Co,{size:16})," Mark as manifested"]})]})}function k1({data:e,onClose:r}){return t.jsx("div",{style:te.celebOverlay,onClick:r,children:t.jsxs("div",{style:te.celebBox,onClick:n=>n.stopPropagation(),children:[t.jsx("div",{style:te.celebEmoji,children:"✨🌟✨"}),t.jsx("div",{style:te.celebTitle,children:"It's happening!"}),t.jsxs("div",{style:te.celebDream,children:['"',e.title,'"']}),t.jsxs("div",{style:te.celebSub,children:[e.days!=null?`Manifested in ${e.days} day${e.days===1?"":"s"}.`:"Manifested."," The universe delivered. 🙏"]}),t.jsx("button",{onClick:r,style:te.celebBtn,children:"Wonderful"})]})})}function w1({musicId:e,on:r}){return!e||!r?null:t.jsx("iframe",{title:"golden-music",src:`https://www.youtube.com/embed/${e}?autoplay=1&loop=1&playlist=${e}&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}})}function _m({musicId:e,setMusicId:r,musicOn:n,setMusicOn:o}){const[i,s]=g.useState(!1),[l,a]=g.useState(""),d=()=>{a(e?`https://youtu.be/${e}`:""),s(!0)},c=async()=>{const f=Lm(l);await E.setSetting("golden_music",l.trim()).catch(()=>{}),r(f),f&&o(!0),s(!1)},h=async()=>{await E.setSetting("golden_music","").catch(()=>{}),r(""),s(!1)};return i?t.jsxs("div",{style:te.musicEditRow,children:[t.jsx("input",{autoFocus:!0,value:l,onChange:f=>a(f.target.value),onKeyDown:f=>{f.key==="Enter"&&c(),f.key==="Escape"&&s(!1)},placeholder:"Paste a YouTube link…",style:te.musicInput}),t.jsx("button",{onClick:c,style:{...te.tRemBtn,...te.tuneOn},title:"Save track",children:t.jsx(He,{size:14})}),e&&t.jsx("button",{onClick:h,style:te.tRemBtn,title:"Remove track",children:t.jsx(ai,{size:14})}),t.jsx("button",{onClick:()=>s(!1),style:te.tRemBtn,title:"Cancel",children:t.jsx(De,{size:14})})]}):t.jsxs("div",{style:te.musicCtrlRow,children:[e?t.jsxs("button",{onClick:()=>o(f=>!f),style:{...te.tRemBtn,...n?te.tuneOn:{}},title:n?"Soft tunes on":"Play soft tunes",children:[n?t.jsx(bm,{size:14}):t.jsx(Xl,{size:14})," Soft tunes"]}):t.jsxs("button",{onClick:d,style:te.tRemBtn,title:"Add a track",children:[t.jsx(Xl,{size:14})," Add music"]}),e&&t.jsx("button",{onClick:d,style:te.musicSetBtn,title:"Change / reset track",children:t.jsx(vt,{size:12})})]})}const $r="#C9A227",te={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:860,margin:"0 auto",position:"relative"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:$r,color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"11px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:70,resize:"vertical",lineHeight:1.5},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:$r,color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:12},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:14},goalCard:{textAlign:"left",border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},goalCardBtn:{textAlign:"left",border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"inherit",display:"flex",flexDirection:"column",width:"100%"},cardDelBtn:{position:"absolute",top:8,left:8,border:"none",background:"rgba(0,0,0,0.55)",color:"#fff",width:26,height:26,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",zIndex:2},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 10",background:"var(--surface-2)"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},thumbEmpty:{width:"100%",height:"100%",display:"grid",placeItems:"center"},stamp:{position:"absolute",top:8,right:8,transform:"rotate(6deg)",background:"rgba(76,154,107,0.95)",color:"#fff",fontSize:11,fontWeight:800,letterSpacing:"0.04em",padding:"3px 9px",borderRadius:6,border:"1.5px solid #fff",textTransform:"uppercase"},goalBody:{padding:"11px 13px",display:"flex",flexDirection:"column",gap:8},goalTitle:{fontSize:14,fontWeight:600,lineHeight:1.35,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},goalMeta:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},metaPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:700,padding:"2px 8px",borderRadius:10},metaDim:{fontSize:11,color:"var(--text-3)",fontWeight:500},detailTopRow:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16,gap:10},backBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},deleteBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid rgba(194,83,107,0.4)",background:"rgba(194,83,107,0.08)",color:"#C2536B",padding:"7px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},detailHero:{display:"flex",flexDirection:"column",gap:14,marginBottom:16},heroPhoto:{position:"relative",width:"100%",borderRadius:14,overflow:"hidden",border:"1px solid var(--border)",cursor:"pointer",background:"var(--surface-2)",display:"flex",alignItems:"center",justifyContent:"center",minHeight:120},heroImg:{width:"100%",maxHeight:"62vh",objectFit:"contain",display:"block"},photoEdit:{position:"absolute",bottom:8,right:8,display:"flex",alignItems:"center",gap:5,background:"rgba(0,0,0,0.6)",color:"#fff",fontSize:11,fontWeight:600,padding:"4px 8px",borderRadius:7},heroInfo:{display:"flex",flexDirection:"column",gap:10,alignItems:"center",textAlign:"center"},heroStamp:{alignSelf:"center",background:"rgba(76,154,107,0.14)",color:"#4C9A6B",fontSize:12,fontWeight:800,padding:"4px 10px",borderRadius:8,letterSpacing:"0.03em"},heroTitleRow:{display:"flex",alignItems:"flex-start",gap:8,justifyContent:"center"},heroTitle:{fontSize:23,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.35},heroStats:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",justifyContent:"center"},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",flexShrink:0},iconSave:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},iconCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},writeCard:{background:"var(--surface)",borderRadius:14,padding:16,border:"1px solid var(--border)",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},tuneRow:{display:"flex",justifyContent:"flex-end",marginBottom:10},tuneOn:{background:$r,color:"#fff",borderColor:$r},musicCtrlRow:{display:"inline-flex",alignItems:"center",gap:6},musicSetBtn:{display:"inline-grid",placeItems:"center",border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-3)",width:28,height:28,borderRadius:14,cursor:"pointer",fontFamily:"inherit"},musicEditRow:{display:"inline-flex",alignItems:"center",gap:6,flexWrap:"wrap"},musicInput:{border:"1px solid var(--border)",borderRadius:8,padding:"6px 10px",fontSize:12.5,fontFamily:"inherit",outline:"none",background:"var(--bg)",color:"var(--text)",minWidth:180},writeNav:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,marginBottom:12},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center"},navDisabled:{opacity:.35,cursor:"not-allowed"},writeDate:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:150,textAlign:"center"},writeArea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:120,resize:"vertical",lineHeight:1.6},writeSave:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",background:$r,color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},readEntry:{display:"flex",gap:8,padding:"6px 2px"},readText:{fontSize:15,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.6,margin:0,whiteSpace:"pre-wrap"},manifestBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,width:"100%",border:"none",background:"linear-gradient(135deg,#C9A227,#E0BD45)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:800,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 2px 10px rgba(201,162,39,0.35)"},unmanifestBtn:{display:"block",margin:"0 auto",border:"none",background:"none",color:"var(--text-3)",fontSize:12,fontWeight:600,cursor:"pointer",textDecoration:"underline",fontFamily:"inherit"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.6)",zIndex:200,display:"grid",placeItems:"center",padding:16},celebBox:{background:"var(--surface)",color:"var(--text)",borderRadius:20,padding:"36px 30px",textAlign:"center",maxWidth:360,boxShadow:"0 12px 48px rgba(0,0,0,0.3)"},celebEmoji:{fontSize:40,marginBottom:10},celebTitle:{fontSize:24,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginBottom:10,color:$r},celebDream:{fontSize:15,fontStyle:"italic",fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.5,marginBottom:10},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:$r,color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},t369Row:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:"12px 16px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},t369RowLeft:{display:"flex",alignItems:"center",gap:11},t369RowTitle:{fontSize:14,fontWeight:700},t369RowSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},tBadgeOff:{background:"var(--border)",color:"var(--text-3)"},switch:{position:"relative",width:46,height:26,borderRadius:14,border:"none",background:"var(--border)",cursor:"pointer",flexShrink:0,transition:"background 0.2s",padding:0},switchOn:{background:$r},switchKnob:{position:"absolute",top:3,left:3,width:20,height:20,borderRadius:"50%",background:"#fff",transition:"left 0.2s",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},switchKnobOn:{left:23},tCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:16,padding:18,marginBottom:20,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},tHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12,flexWrap:"wrap",marginBottom:14},tTitleWrap:{display:"flex",alignItems:"center",gap:11},tBadge:{display:"inline-flex",alignItems:"center",gap:4,background:"linear-gradient(135deg,#C9A227,#E0BD45)",color:"#fff",fontSize:14,fontWeight:800,padding:"6px 10px",borderRadius:10,letterSpacing:"0.02em",flexShrink:0},tTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},tSub:{fontSize:12,color:"var(--text-3)",marginTop:2},tHeadBtns:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",justifyContent:"flex-end"},tRemBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 12px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tRemOn:{background:$r,color:"#fff",borderColor:$r},tStreakRow:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:14},tStreakBox:{background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px"},tStreakLabel:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,fontWeight:600,color:"var(--text-2)"},tStreakVal:{fontSize:21,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.1},tStreakHint:{fontSize:11,color:"var(--text-3)",marginTop:4,fontWeight:500},tProgTrack:{height:5,borderRadius:4,background:"var(--border)",marginTop:8,overflow:"hidden"},tProgFill:{height:"100%",background:"linear-gradient(90deg,#C2773B,#C9A227)",borderRadius:4,transition:"width 0.4s"},tAffShow:{display:"flex",alignItems:"flex-start",gap:9,background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px",marginBottom:14},tAffText:{flex:1,fontSize:15,fontFamily:"'Fraunces',Georgia,serif",fontStyle:"italic",lineHeight:1.5,margin:0,whiteSpace:"pre-wrap"},tWindows:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:10,marginBottom:14},tWindow:{background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:"11px 12px",transition:"box-shadow 0.2s, border-color 0.2s"},tWindowHead:{display:"flex",alignItems:"center",gap:6},tWindowLabel:{fontSize:13,fontWeight:700},tNow:{fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",marginLeft:"auto"},tWindowTime:{fontSize:10.5,color:"var(--text-3)",marginTop:2,marginBottom:8,fontWeight:500},tDots:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:7},tDot:{width:11,height:11,borderRadius:"50%",border:"1.5px solid var(--border)",background:"transparent",transition:"background 0.2s"},tCount:{fontSize:12,fontWeight:700,color:"var(--text-2)"},tWriteBox:{borderTop:"1px solid var(--border)",paddingTop:14},tNote:{fontSize:12,fontWeight:600,color:"#C2773B",background:"rgba(194,119,59,0.10)",borderRadius:8,padding:"8px 11px",marginBottom:9},tPasteWarn:{fontSize:11.5,color:"#C2536B",fontWeight:600,marginTop:6},tWriteActions:{display:"flex",gap:8,marginTop:10},tUndoBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"11px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tClosed:{fontSize:12.5,color:"var(--text-3)",textAlign:"center",padding:"10px 4px",lineHeight:1.5},tDoneMsg:{fontSize:13,fontWeight:700,color:"#4C9A6B",textAlign:"center",padding:"10px 4px"}},ud=[{id:"meditation",label:"Meditation Hub",icon:Ty,color:"#8268B0"},{id:"visualization",label:"Visualization",icon:fs,color:"#3A7CA5"}],Wp=e=>{if(!e)return"";const r=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(r))return r;const n=r.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},S1=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>1e3?(a=a*1e3/l,l=1e3):a>1e3&&(l=l*1e3/a,a=1e3);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),r(d.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)}),C1=e=>({id:null,kind:e,title:"",url:"",image:""});function z1(){const[e,r]=g.useState("meditation"),[n,o]=g.useState([]),[i,s]=g.useState(!1),[l,a]=g.useState(null),[d,c]=g.useState(null),h=g.useCallback(async()=>{try{o(await E.getMedia())}catch{}s(!0)},[]);g.useEffect(()=>{h()},[h]);const{deleteItem:f,toasts:m,handleUndo:I,handleDismiss:B}=pr(E.deleteMedia,E.restoreMedia,h);g.useEffect(()=>{if(!d)return;const T=10,R=setInterval(()=>{document.hidden||E.addScreenTime("mindscape",T).catch(()=>{})},T*1e3);return()=>clearInterval(R)},[d]);const z=ud.find(T=>T.id===e),w=n.filter(T=>T.kind===e),p=T=>a({id:T.id,kind:T.kind,title:T.title,url:`https://youtu.be/${T.youtube_id}`,image:T.image}),b=async T=>{var k;const R=(k=T.target.files)==null?void 0:k[0];if(R){try{const y=await S1(R);a(K=>({...K,image:y}))}catch{}T.target.value=""}},u=l?[!l.title.trim()&&"a title",!l.image&&"an image",!Wp(l.url)&&"a valid YouTube link"].filter(Boolean):[],j=!!l&&u.length===0,x=async()=>{if(!j)return;const T={kind:l.kind,title:l.title.trim(),image:l.image,youtube_id:Wp(l.url)};l.id?await E.updateMedia(l.id,T):await E.createMedia(T),a(null),h()};return t.jsxs("div",{style:ut.page,children:[d&&t.jsx("iframe",{title:"mindscape-audio",src:`https://www.youtube.com/embed/${d.youtube_id}?autoplay=1&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}}),t.jsxs("div",{style:ut.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:ut.eyebrow,children:"Anvil · Mindscape"}),t.jsx("h1",{style:ut.h1,children:"Mindscape"}),t.jsx("div",{style:ut.subhead,children:"Close your eyes and listen — guided meditation and visualization."})]}),!l&&t.jsxs("button",{onClick:()=>a(C1(e)),style:{...ut.addBtn,background:z.color},children:[t.jsx(lt,{size:15})," Add"]})]}),t.jsx("div",{style:ut.tabs,children:ud.map(T=>{const R=T.icon,k=e===T.id;return t.jsxs("button",{onClick:()=>{r(T.id),a(null)},style:{...ut.tab,...k?{background:T.color,color:"#fff",borderColor:T.color}:{}},children:[t.jsx(R,{size:15})," ",T.label]},T.id)})}),l&&t.jsxs("div",{style:ut.card,children:[t.jsx("div",{style:ut.cardTitle,children:l.id?"Edit":`New ${ud.find(T=>T.id===l.kind).label}`}),t.jsx("input",{placeholder:"YouTube link (plays as audio only)",value:l.url,onChange:T=>a({...l,url:T.target.value}),style:ut.input,autoFocus:!0}),t.jsx("input",{placeholder:"Title (required)",value:l.title,onChange:T=>a({...l,title:T.target.value}),style:{...ut.input,marginTop:8}}),t.jsxs("label",{style:ut.photoPick,children:[l.image?t.jsx("img",{src:l.image,alt:"",style:ut.photoPreview}):t.jsxs("span",{style:ut.photoEmpty,children:[t.jsx(ja,{size:18})," Add cover image (required)"]}),t.jsx("input",{type:"file",accept:"image/*",onChange:b,style:{display:"none"}})]}),!j&&t.jsxs("div",{style:ut.warn,children:["Add ",u.join(", ")," to save."]}),t.jsxs("div",{style:ut.formActions,children:[t.jsxs("button",{onClick:()=>a(null),style:ut.cancelBtn,children:[t.jsx(De,{size:14})," Cancel"]}),t.jsxs("button",{onClick:x,disabled:!j,style:{...ut.saveBtn,background:j?z.color:"var(--border)",color:j?"#fff":"var(--text-3)",cursor:j?"pointer":"not-allowed"},children:[t.jsx(He,{size:15})," ",l.id?"Save":"Add"]})]})]}),i?w.length===0?t.jsxs("div",{style:ut.empty,children:["Nothing here yet — add a ",z.label.toLowerCase()," track."]}):t.jsx("div",{style:ut.grid,children:w.map(T=>{const R=(d==null?void 0:d.id)===T.id;return t.jsxs("div",{style:ut.mediaCard,children:[t.jsxs("button",{onClick:()=>c(R?null:T),style:ut.coverBtn,title:R?"Pause":"Play",children:[t.jsx("img",{src:T.image,alt:"",style:ut.cover}),t.jsx("span",{style:{...ut.playOverlay,background:R?"rgba(0,0,0,0.45)":"rgba(0,0,0,0.28)"},children:t.jsx("span",{style:{...ut.playCircle,background:z.color},children:R?t.jsx(hm,{size:20,color:"#fff",fill:"#fff"}):t.jsx(Tg,{size:20,color:"#fff",fill:"#fff"})})}),R&&t.jsxs("span",{style:ut.nowPlaying,children:[t.jsx(bm,{size:11})," Playing"]})]}),t.jsxs("div",{style:ut.mediaBody,children:[t.jsx("div",{style:ut.mediaTitle,children:T.title}),t.jsxs("div",{style:ut.cardActions,children:[t.jsx("button",{onClick:()=>p(T),style:ut.iconBtn,title:"Edit",children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:()=>{(d==null?void 0:d.id)===T.id&&c(null),f(T.id,T.title)},style:ut.iconBtn,title:"Delete",children:t.jsx(De,{size:14})})]})]})]},T.id)})}):t.jsx("div",{style:ut.muted,children:"Loading…"}),t.jsx(br,{toasts:m,onUndo:I,onDismiss:B})]})}const ut={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:900,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},tabs:{display:"flex",gap:8,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:200,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},warn:{fontSize:12,color:"#C2773B",marginTop:8,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,fontFamily:"inherit"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:16},mediaCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},coverBtn:{position:"relative",border:"none",padding:0,cursor:"pointer",display:"block",width:"100%",aspectRatio:"1",background:"var(--surface-2)"},cover:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center"},playCircle:{width:46,height:46,borderRadius:"50%",display:"grid",placeItems:"center",boxShadow:"0 2px 10px rgba(0,0,0,0.3)"},nowPlaying:{position:"absolute",bottom:8,left:8,display:"flex",alignItems:"center",gap:4,background:"rgba(0,0,0,0.65)",color:"#fff",fontSize:11,fontWeight:700,padding:"3px 8px",borderRadius:7},mediaBody:{padding:"12px 14px",display:"flex",alignItems:"flex-start",gap:8},mediaTitle:{flex:1,fontSize:14.5,fontWeight:600,lineHeight:1.4,minWidth:0,wordBreak:"break-word"},cardActions:{display:"flex",gap:2,flexShrink:0,marginTop:1},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},$m={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},T1=Object.keys($m),I1="#9A7B4F";function B1(e=760){const[r,n]=g.useState(()=>window.innerWidth<e);return g.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const R1=()=>{const e=new Date,r=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${r(e.getMonth()+1)}-${r(e.getDate())}`},E1=e=>{if(!e)return"";const r=new Date(e+"T00:00:00");return isNaN(r)?e:r.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},pd=e=>(e||"").slice(0,4),D1=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>r(o.result),o.onerror=n,o.readAsDataURL(e)}),F1=(e,r=1e3)=>new Promise((n,o)=>{const i=new Image;i.onload=()=>{let{width:s,height:l}=i;s>l&&s>r?(l=l*r/s,s=r):l>r&&(s=s*r/l,l=r);const a=document.createElement("canvas");a.width=s,a.height=l,a.getContext("2d").drawImage(i,0,0,s,l),n(a.toDataURL("image/jpeg",.82))},i.onerror=o,i.src=e});function A1({src:e,onCancel:r,onCrop:n,onKeepOriginal:o}){const[l,a]=g.useState(null),[d,c]=g.useState(1),[h,f]=g.useState({x:0,y:0}),m=g.useRef(null);g.useEffect(()=>{const x=new Image;x.onload=()=>{a(x);const T=Math.max(300/x.width,300/x.height);c(1),x._base=T;const R=x.width*T,k=x.height*T;f({x:(300-R)/2,y:(300-k)/2})},x.src=e},[e]);const I=l?l._base*d:1,B=l?l.width*I:0,z=l?l.height*I:0,w=(x,T,R)=>({x:Math.min(0,Math.max(300-T,x.x)),y:Math.min(0,Math.max(300-R,x.y))});g.useEffect(()=>{l&&f(x=>w(x,B,z))},[d,l]);const p=x=>{const T=x.touches?x.touches[0]:x;m.current={sx:T.clientX,sy:T.clientY,ox:h.x,oy:h.y}},b=x=>{if(!m.current)return;const T=x.touches?x.touches[0]:x,R=m.current.ox+(T.clientX-m.current.sx),k=m.current.oy+(T.clientY-m.current.sy);f(w({x:R,y:k},B,z))},u=()=>{m.current=null},j=()=>{if(!l)return;const x=document.createElement("canvas");x.width=700,x.height=700;const T=x.getContext("2d"),R=700/300;T.drawImage(l,h.x*R,h.y*R,B*R,z*R),n(x.toDataURL("image/jpeg",.85))};return t.jsx("div",{style:fr.overlay,onClick:r,children:t.jsxs("div",{style:fr.box,onClick:x=>x.stopPropagation(),children:[t.jsxs("div",{style:fr.head,children:["Crop to square",t.jsx("button",{onClick:r,style:fr.close,children:t.jsx(De,{size:16})})]}),t.jsxs("div",{style:{...fr.frame,width:300,height:300},onMouseDown:p,onMouseMove:b,onMouseUp:u,onMouseLeave:u,onTouchStart:p,onTouchMove:b,onTouchEnd:u,children:[l&&t.jsx("img",{src:e,alt:"",draggable:!1,style:{position:"absolute",left:h.x,top:h.y,width:B,height:z,userSelect:"none",pointerEvents:"none"}}),t.jsx("div",{style:fr.grid})]}),t.jsxs("div",{style:fr.zoomRow,children:[t.jsx("span",{style:fr.zoomLbl,children:"Zoom"}),t.jsx("input",{type:"range",min:"1",max:"3",step:"0.01",value:d,onChange:x=>c(parseFloat(x.target.value)),style:{flex:1}})]}),t.jsx("div",{style:fr.hint,children:"Drag to reposition · slide to zoom"}),t.jsxs("div",{style:fr.actions,children:[t.jsx("button",{onClick:r,style:fr.cancel,children:"Cancel"}),t.jsx("button",{onClick:o,style:fr.keep,children:"Keep original"}),t.jsxs("button",{onClick:j,style:fr.apply,children:[t.jsx(He,{size:15})," Square crop"]})]})]})})}const W1={id:null,title:"",date:R1(),pillar:"",reward:"",image:"",note:""};function M1(){const e=Jn(),r=k=>Or(k,e.code),n=B1(),[o,i]=g.useState([]),[s,l]=g.useState(null),[a,d]=g.useState(!1),[c,h]=g.useState(null),f=g.useRef(null),m=g.useCallback(()=>{E.getAchievements().then(i).catch(()=>{})},[]);g.useEffect(()=>{m()},[m]);const{deleteItem:I,toasts:B,handleUndo:z,handleDismiss:w}=pr(E.deleteAchievement,E.restoreAchievement,m),p=()=>l({...W1}),b=k=>l({id:k.id,title:k.title,date:k.date,pillar:k.pillar||"",reward:k.reward?String(k.reward):"",image:k.image||"",note:k.note||""}),u=async k=>{var K;const y=(K=k.target.files)==null?void 0:K[0];if(y){try{const q=await D1(y);h(q)}catch{}f.current&&(f.current.value="")}},j=async()=>{let k=c;try{c&&(k=await F1(c))}catch{}l(y=>({...y,image:k})),h(null)},x=s&&s.title.trim()&&s.date,T=async()=>{if(!x||a)return;d(!0);const k={title:s.title.trim(),date:s.date,pillar:s.pillar||null,reward:parseFloat(s.reward)||0,image:s.image||null,note:s.note.trim()};try{s.id?await E.updateAchievement(s.id,k):await E.createAchievement(k),l(null),m()}catch{}finally{d(!1)}},R=o.reduce((k,y)=>k+(y.reward||0),0);return t.jsxs("div",{style:Qe.page,children:[t.jsxs("div",{style:Qe.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:Qe.eyebrow,children:"Anvil · Achievements"}),t.jsx("h1",{style:Qe.h1,children:"Achievements"}),t.jsx("div",{style:Qe.subhead,children:"Your tree of wins — newest at the top, scroll down through the past."})]}),t.jsxs("div",{style:Qe.headRight,children:[R>0&&t.jsxs("div",{style:Qe.totalBadge,children:[t.jsx(xs,{size:14,color:"#C9A227"})," ",r(R)," earned"]}),t.jsxs("button",{onClick:p,style:Qe.addBtn,children:[t.jsx(lt,{size:15})," Add achievement"]})]})]}),o.length===0?t.jsxs("div",{style:Qe.empty,children:[t.jsx(Yr,{size:30,color:"var(--text-3)"}),t.jsx("div",{style:{marginTop:10},children:"No achievements yet."}),t.jsx("div",{style:Qe.emptySub,children:"Plant your first win — it'll grow into a timeline you can look back on."})]}):t.jsxs("div",{style:{...Qe.timeline,paddingLeft:0},children:[t.jsx("div",{style:{...Qe.trunk,left:n?13:"50%"}}),o.map((k,y)=>{const K=$m[k.pillar]||I1,q=!n&&y%2===1,oe=o[y-1],L=!oe||pd(oe.date)!==pd(k.date);return t.jsxs("div",{children:[L&&t.jsx("div",{style:{...Qe.yearRow,justifyContent:n?"flex-start":"center",paddingLeft:n?36:0},children:t.jsx("span",{style:Qe.yearChip,children:pd(k.date)})}),t.jsxs("div",{style:{...Qe.row,gridTemplateColumns:n?"28px 1fr":"1fr 44px 1fr"},children:[!n&&t.jsx("div",{style:{gridColumn:1,display:"flex",justifyContent:"flex-end"},children:q&&t.jsx(Mp,{a:k,color:K,side:"left",money:r,onEdit:()=>b(k),onDelete:()=>I(k.id,k.title)})}),t.jsx("div",{style:{gridColumn:n?1:2,display:"flex",justifyContent:"center",position:"relative"},children:t.jsx("div",{style:{...Qe.node,borderColor:K,background:"var(--surface)"},children:t.jsx("div",{style:{...Qe.nodeDot,background:K}})})}),t.jsx("div",{style:{gridColumn:n?2:3,display:"flex",justifyContent:"flex-start"},children:(n||!q)&&t.jsx(Mp,{a:k,color:K,side:n?"mobile":"right",money:r,onEdit:()=>b(k),onDelete:()=>I(k.id,k.title)})})]})]},k.id)})]}),s&&t.jsx("div",{style:Qe.overlay,onClick:()=>l(null),children:t.jsxs("div",{style:Qe.modal,onClick:k=>k.stopPropagation(),children:[t.jsxs("div",{style:Qe.modalHead,children:[t.jsx("div",{style:Qe.modalTitle,children:s.id?"Edit achievement":"New achievement"}),t.jsx("button",{onClick:()=>l(null),style:Qe.iconBtn,children:t.jsx(De,{size:16})})]}),t.jsx("label",{style:Qe.label,children:"Title *"}),t.jsx("input",{autoFocus:!0,value:s.title,onChange:k=>l(y=>({...y,title:k.target.value})),placeholder:"What did you achieve?",style:Qe.input}),t.jsxs("div",{style:Qe.formRow,children:[t.jsxs("div",{style:{flex:1},children:[t.jsxs("label",{style:Qe.label,children:[t.jsx(Fy,{size:12})," Date *"]}),t.jsx("input",{type:"date",value:s.date,onChange:k=>l(y=>({...y,date:k.target.value})),style:Qe.input})]}),t.jsxs("div",{style:{flex:1},children:[t.jsx("label",{style:Qe.label,children:"Pillar (optional)"}),t.jsxs("select",{value:s.pillar,onChange:k=>l(y=>({...y,pillar:k.target.value})),style:Qe.input,children:[t.jsx("option",{value:"",children:"— None —"}),T1.map(k=>t.jsx("option",{value:k,children:k},k))]})]})]}),t.jsxs("label",{style:Qe.label,children:[t.jsx(xs,{size:12})," Reward (",e.code,") — optional gesture of appreciation"]}),t.jsx("input",{type:"number",min:"0",step:"any",value:s.reward,onChange:k=>l(y=>({...y,reward:k.target.value})),placeholder:"0",style:Qe.input}),t.jsx("label",{style:Qe.label,children:"Photo (optional)"}),s.image?t.jsxs("div",{style:Qe.imgWrap,children:[t.jsx("img",{src:s.image,alt:"",style:Qe.imgPreview}),t.jsx("button",{onClick:()=>l(k=>({...k,image:""})),style:Qe.imgRemove,children:t.jsx(De,{size:14})})]}):t.jsxs("button",{onClick:()=>{var k;return(k=f.current)==null?void 0:k.click()},style:Qe.uploadBtn,children:[t.jsx(Qy,{size:15})," Add a photo"]}),t.jsx("input",{ref:f,type:"file",accept:"image/*",onChange:u,style:{display:"none"}}),t.jsx("label",{style:Qe.label,children:"Note (optional)"}),t.jsx("textarea",{value:s.note,onChange:k=>l(y=>({...y,note:k.target.value})),placeholder:"The story behind it…",rows:3,style:{...Qe.input,resize:"vertical",fontFamily:"inherit"}}),t.jsxs("div",{style:Qe.modalActions,children:[t.jsx("button",{onClick:()=>l(null),style:Qe.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:T,disabled:!x||a,style:{...Qe.saveBtn,...!x||a?{opacity:.5,cursor:"not-allowed"}:{}},children:[t.jsx(He,{size:15})," ",s.id?"Save":"Add"]})]})]})}),c&&t.jsx(A1,{src:c,onCancel:()=>h(null),onKeepOriginal:j,onCrop:k=>{l(y=>({...y,image:k})),h(null)}}),t.jsx(br,{toasts:B,onUndo:z,onDismiss:w})]})}function Mp({a:e,color:r,side:n,money:o,onEdit:i,onDelete:s}){return t.jsxs("div",{style:{...Qe.card,borderTop:`3px solid ${r}`,textAlign:n==="left"?"right":"left"},children:[t.jsxs("div",{style:{...Qe.cardTop,flexDirection:n==="left"?"row-reverse":"row"},children:[t.jsx("span",{style:{...Qe.dateChip,background:`${r}1A`,color:r},children:E1(e.date)}),t.jsxs("div",{style:{display:"flex",gap:2},children:[t.jsx("button",{onClick:i,style:Qe.ghostBtn,title:"Edit",children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:s,style:Qe.ghostBtn,title:"Delete",children:t.jsx(De,{size:14})})]})]}),t.jsx("div",{style:Qe.cardTitle,children:e.title}),e.image&&t.jsx("img",{src:e.image,alt:"",style:Qe.cardImg}),e.note&&t.jsx("div",{style:Qe.cardNote,children:e.note}),e.reward>0&&t.jsxs("div",{style:{...Qe.rewardBadge,marginLeft:n==="left"?"auto":0},children:[t.jsx(xs,{size:13})," ",o(e.reward)]})]})}const Qe={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},totalBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{textAlign:"center",color:"var(--text-3)",padding:"60px 16px",fontSize:14,fontWeight:600},emptySub:{fontSize:12.5,fontWeight:400,marginTop:6,maxWidth:320,marginInline:"auto",lineHeight:1.5},timeline:{position:"relative",maxWidth:1e3,margin:"0 auto",paddingBottom:30},trunk:{position:"absolute",top:8,bottom:8,width:3,background:"linear-gradient(to bottom, var(--border), var(--border))",transform:"translateX(-1.5px)",borderRadius:2},yearRow:{display:"flex",margin:"6px 0 12px"},yearChip:{fontSize:11.5,fontWeight:800,letterSpacing:"0.06em",color:"var(--text-2)",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:"4px 12px",position:"relative",zIndex:2},row:{display:"grid",alignItems:"center",gap:8,marginBottom:16},node:{width:20,height:20,borderRadius:"50%",border:"3px solid",display:"grid",placeItems:"center",zIndex:2,boxShadow:"0 0 0 4px var(--bg)"},nodeDot:{width:7,height:7,borderRadius:"50%"},card:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.06)",maxWidth:420,width:"100%",boxSizing:"border-box"},cardTop:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,marginBottom:7},dateChip:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,whiteSpace:"nowrap"},cardTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",lineHeight:1.3,wordBreak:"break-word"},cardImg:{width:"100%",maxHeight:220,objectFit:"cover",borderRadius:9,marginTop:9,display:"block"},cardNote:{fontSize:12.5,color:"var(--text-2)",marginTop:7,lineHeight:1.5,whiteSpace:"pre-wrap",wordBreak:"break-word"},rewardBadge:{display:"inline-flex",alignItems:"center",gap:5,marginTop:9,background:"rgba(201,162,39,0.12)",color:"#8A6E1A",border:"1px solid rgba(201,162,39,0.3)",padding:"3px 10px",borderRadius:14,fontSize:12,fontWeight:700},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:6},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:60,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:460,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},label:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)"},formRow:{display:"flex",gap:10},uploadBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",border:"1.5px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"11px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},imgWrap:{position:"relative",borderRadius:10,overflow:"hidden"},imgPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block",borderRadius:10},imgRemove:{position:"absolute",top:8,right:8,border:"none",background:"rgba(0,0,0,0.55)",color:"#fff",width:28,height:28,borderRadius:"50%",cursor:"pointer",display:"grid",placeItems:"center"},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},fr={overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.62)",zIndex:300,display:"grid",placeItems:"center",padding:16},box:{background:"var(--surface)",borderRadius:16,padding:"18px",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",maxWidth:"92vw"},head:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},close:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},frame:{position:"relative",overflow:"hidden",borderRadius:12,background:"#000",cursor:"grab",touchAction:"none",margin:"0 auto",maxWidth:"84vw"},grid:{position:"absolute",inset:0,pointerEvents:"none",boxShadow:"inset 0 0 0 1px rgba(255,255,255,0.5)",backgroundImage:"linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",backgroundSize:"33.33% 33.33%"},zoomRow:{display:"flex",alignItems:"center",gap:10,marginTop:14},zoomLbl:{fontSize:12,fontWeight:700,color:"var(--text-2)"},hint:{fontSize:11,color:"var(--text-3)",textAlign:"center",marginTop:8},actions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:14,flexWrap:"wrap"},cancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},keep:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},apply:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}};function L1(e=760){const[r,n]=g.useState(()=>window.innerWidth<e);return g.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const ll=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},_1=e=>e?new Date(e+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"",Qr="#C9772E",Ii=[{id:"todo",label:"Want to",color:"#3A7CA5"},{id:"doing",label:"Enjoying",color:"#C9772E"},{id:"done",label:"Satisfied",color:"#4C9A6B"}],$1=[{id:"text",label:"Text"},{id:"number",label:"Number"},{id:"link",label:"Link"}],bd=e=>(e&&typeof e=="object"?e.type:"text")||"text",Rn=e=>(e&&typeof e=="object"?e.name:e)||"";function P1(){const e=L1(),[r,n]=g.useState([]),[o,i]=g.useState(null),[s,l]=g.useState(!1),[a,d]=g.useState(null),[c,h]=g.useState(null),[f,m]=g.useState(null),[I,B]=g.useState(null),[z,w]=g.useState(null),[p,b]=g.useState([]),u=g.useRef({}),j=g.useCallback(()=>{E.getDelight().then(_=>{n(_),i(ne=>{var xe;return ne&&_.some(D=>D.id===ne)?ne:((xe=_[0])==null?void 0:xe.id)??null}),l(!0)}).catch(()=>l(!0))},[]);g.useEffect(()=>{j()},[j]),g.useEffect(()=>{b([])},[o]);const{deleteItem:x,toasts:T,handleUndo:R,handleDismiss:k}=pr(E.deleteDelightItem,E.restoreDelightItem,j),y=r.find(_=>_.id===o)||null,K=g.useMemo(()=>{const _={todo:[],doing:[],done:[]};return((y==null?void 0:y.items)||[]).forEach(ne=>{(_[ne.status]||_.todo).push(ne)}),Object.values(_).forEach(ne=>ne.sort((xe,D)=>xe.position-D.position||xe.id-D.id)),_},[y]),q=_=>/^tags?$/i.test(Rn(_).trim()),oe=_=>((y==null?void 0:y.columns)||[]).filter(q).flatMap(ne=>(_.fields[Rn(ne)]||"").split(",").map(xe=>xe.trim()).filter(Boolean)),L=g.useMemo(()=>{const _=new Set;return((y==null?void 0:y.items)||[]).forEach(ne=>(y.columns||[]).filter(q).forEach(xe=>(ne.fields[Rn(xe)]||"").split(",").map(D=>D.trim()).filter(Boolean).forEach(D=>_.add(D)))),[..._].sort((ne,xe)=>ne.localeCompare(xe))},[y]),he=g.useMemo(()=>{const _={};return((y==null?void 0:y.columns)||[]).forEach(ne=>{const xe=Rn(ne);if(q(ne))return;const D=new Set;((y==null?void 0:y.items)||[]).forEach(v=>{const re=(v.fields[xe]||"").trim();re&&D.add(re)}),_[xe]=[...D].sort((v,re)=>v.localeCompare(re))}),_},[y]),Se=_=>p.length===0||oe(_).some(ne=>p.includes(ne)),ue=_=>b(ne=>ne.includes(_)?ne.filter(xe=>xe!==_):[...ne,_]),ke=(_,ne,xe)=>{for(const D of Ii){const v=u.current[D.id];if(!v)continue;const re=v.getBoundingClientRect();if(_>=re.left&&_<=re.right&&ne>=re.top&&ne<=re.bottom){const F=[...v.querySelectorAll("[data-card]")].filter(ye=>ye.dataset.id!==String(xe));let ce=F.length;for(let ye=0;ye<F.length;ye++){const We=F[ye].getBoundingClientRect();if(ne<We.top+We.height/2){ce=ye;break}}return{status:D.id,index:ce}}}return null},se=(_,ne)=>{if(_.target.closest("button"))return;const xe=_.clientX,D=_.clientY,v=_.currentTarget;let re=!1,F=null,ce=null;const ye=qe=>{if(!re){if(Math.hypot(qe.clientX-xe,qe.clientY-D)<6)return;re=!0;const dt=v.getBoundingClientRect();ce={id:ne.id,item:ne,w:dt.width,offX:xe-dt.left,offY:D-dt.top}}ce={...ce,x:qe.clientX,y:qe.clientY},B(ce),F=ke(qe.clientX,qe.clientY,ne.id)||F,w(F)},We=()=>{window.removeEventListener("pointermove",ye),window.removeEventListener("pointerup",We),re&&F&&U(ne,F),B(null),w(null)};window.addEventListener("pointermove",ye),window.addEventListener("pointerup",We)},U=(_,ne)=>{const xe={};Ii.forEach(F=>{xe[F.id]=(K[F.id]||[]).filter(ce=>ce.id!==_.id)});const D=xe[ne.status]||[];let v;if(p.length){const F=D.filter(Se);v=ne.index<F.length?D.indexOf(F[ne.index]):D.length}else v=Math.max(0,Math.min(ne.index,D.length));xe[ne.status]=[...D.slice(0,v),{..._,status:ne.status},...D.slice(v)];const re=[];Ii.forEach(F=>(xe[F.id]||[]).forEach((ce,ye)=>re.push({id:ce.id,status:F.id,position:ye}))),n(F=>F.map(ce=>ce.id===o?{...ce,items:re.map(ye=>({...ce.items.find(We=>We.id===ye.id),status:ye.status,position:ye.position}))}:ce)),E.arrangeDelight(o,re).then(j).catch(j),ne.status==="done"&&_.status!=="done"&&m({item:_,date:ll(),note:""})},de=async _=>{window.confirm(`Delete "${_.name}" and all its items?`)&&(await E.deleteCollection(_.id),j())},X=()=>({name:"",type:"text"}),S=()=>d({id:null,name:"",columns:[X(),X()]}),W=_=>d({id:_.id,name:_.name,columns:_.columns.length?_.columns.map(ne=>({name:Rn(ne),type:bd(ne)})):[X()]}),O=async()=>{const _=a.name.trim();if(!_)return;const ne=a.columns.map(xe=>({name:xe.name.trim(),type:xe.type||"text"})).filter(xe=>xe.name);a.id?await E.updateCollection(a.id,{name:_,columns:ne}):await E.createCollection({name:_,columns:ne}),d(null),j()},N=(_="todo")=>h({id:null,name:"",fields:{},status:_}),le=_=>h({id:_.id,name:_.name,fields:{..._.fields},status:_.status}),ge=async()=>{const _=c.name.trim();if(!_||!y)return;const ne=c.id?(y.items||[]).find(re=>re.id===c.id):null,xe=(ne==null?void 0:ne.status)==="done",D={name:_,fields:c.fields,status:c.status};let v;if(c.id?v=await E.updateDelightItem(c.id,D):v=await E.createDelightItem(y.id,D),h(null),await j(),c.status==="done"&&!xe){const re=Ae(v,y.id,_);m({item:re||{id:c.id,name:_},date:ll(),note:""})}},Ae=(_,ne,xe)=>{const D=Array.isArray(_)?_.find(re=>re.id===ne):null;if(!D)return null;const v=(D.items||[]).filter(re=>re.name===xe&&re.status==="done");return v.length?v[v.length-1]:null},Y=async()=>{var _;if(!((_=f==null?void 0:f.item)!=null&&_.id)){m(null);return}await E.updateDelightItem(f.item.id,{completed_date:f.date||ll(),completion_note:f.note||""}),m(null),j()},ae=({it:_})=>{const ne=y.columns.filter(D=>_.fields[Rn(D)]&&!q(D)),xe=oe(_);return t.jsxs("div",{"data-card":!0,"data-id":_.id,onPointerDown:D=>se(D,_),style:je.itemCard,children:[t.jsxs("div",{style:je.itemCardTop,children:[t.jsx(ql,{size:13,style:{color:"var(--text-3)",flexShrink:0}}),t.jsx("span",{style:je.itemName,children:_.name}),t.jsx("button",{onClick:()=>le(_),style:je.ghostBtn,children:t.jsx(vt,{size:12})}),t.jsx("button",{onClick:()=>x(_.id,_.name),style:je.ghostBtn,children:t.jsx(De,{size:13})})]}),ne.map(D=>{const v=Rn(D),re=_.fields[v];return t.jsxs("div",{style:je.itemField,children:[t.jsx("span",{style:je.fieldLabel,children:v}),bd(D)==="link"?t.jsx("a",{href:/^https?:\/\//i.test(re)?re:`https://${re}`,target:"_blank",rel:"noreferrer",style:{minWidth:0,wordBreak:"break-word",color:Qr},onClick:F=>F.stopPropagation(),children:re}):t.jsx("span",{style:{minWidth:0,wordBreak:"break-word"},children:re})]},v)}),xe.length>0&&t.jsx("div",{style:je.tagWrap,children:xe.map((D,v)=>t.jsx("span",{style:je.tag,children:D},v))}),_.status==="done"&&_.completed_date&&t.jsxs("div",{style:je.doneMeta,children:[t.jsxs("span",{style:je.doneDate,children:["✓ ",_1(_.completed_date)]}),_.completion_note&&t.jsx("span",{style:je.doneNote,children:_.completion_note})]})]})};return t.jsxs("div",{style:je.page,children:[t.jsxs("div",{style:je.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:je.eyebrow,children:"Anvil · Delights"}),t.jsx("h1",{style:je.h1,children:"Delights"}),t.jsx("div",{style:je.subhead,children:"Books, films, places, food — track what you want to enjoy and how you felt."})]}),t.jsxs("button",{onClick:S,style:je.addColBtn,children:[t.jsx(lt,{size:15})," New list"]})]}),t.jsxs("div",{style:je.tabs,children:[r.map(_=>t.jsxs("button",{onClick:()=>i(_.id),style:{...je.tab,..._.id===o?je.tabOn:{}},children:[_.name,t.jsx("span",{style:je.tabCount,children:_.items.length})]},_.id)),t.jsx("button",{onClick:S,style:je.tabAdd,title:"New list",children:t.jsx(lt,{size:15})})]}),s?y?t.jsxs("div",{children:[t.jsxs("div",{style:je.colHead,children:[t.jsx("h2",{style:je.colTitle,children:y.name}),t.jsxs("div",{style:je.colActions,children:[t.jsxs("button",{onClick:()=>N(),style:je.primaryBtn,children:[t.jsx(lt,{size:14})," Add"]}),t.jsx("button",{onClick:()=>W(y),style:je.ghostBtn,title:"Edit list & columns",children:t.jsx(Ny,{size:15})}),t.jsx("button",{onClick:()=>de(y),style:je.ghostBtn,title:"Delete list",children:t.jsx(De,{size:16})})]})]}),L.length>0&&t.jsxs("div",{style:je.filterBar,children:[t.jsx("span",{style:je.filterLabel,children:"Tags"}),t.jsx("button",{onClick:()=>b([]),style:{...je.filterChip,...p.length===0?je.filterChipOn:{}},children:"All"}),L.map(_=>t.jsx("button",{onClick:()=>ue(_),style:{...je.filterChip,...p.includes(_)?je.filterChipOn:{}},children:_},_))]}),t.jsx("div",{style:{...je.board,gridTemplateColumns:e?"1fr":"repeat(3, 1fr)"},children:Ii.map(_=>{const ne=(K[_.id]||[]).filter(Se),xe=I?ne.filter(v=>v.id!==I.id):ne,D=z&&z.status===_.id;return t.jsxs("div",{ref:v=>u.current[_.id]=v,style:{...je.lane,...D?{outline:`2px dashed ${_.color}`,outlineOffset:-2}:{}},children:[t.jsxs("div",{style:je.laneHead,children:[t.jsx("span",{style:{...je.laneDot,background:_.color}}),t.jsx("span",{style:je.laneLabel,children:_.label}),t.jsx("span",{style:je.laneCount,children:ne.length}),t.jsx("button",{onClick:()=>N(_.id),style:je.laneAdd,title:`Add to ${_.label}`,children:t.jsx(lt,{size:13})})]}),t.jsxs("div",{style:je.laneBody,children:[xe.map((v,re)=>t.jsxs("div",{children:[D&&z.index===re&&t.jsx("div",{style:{...je.insertLine,background:_.color}}),t.jsx(ae,{it:v})]},v.id)),D&&z.index>=xe.length&&t.jsx("div",{style:{...je.insertLine,background:_.color}}),xe.length===0&&!D&&t.jsx("div",{style:je.laneEmpty,children:"Drop here"})]})]},_.id)})})]}):t.jsxs("div",{style:je.empty,children:[t.jsx(zg,{size:28,color:"var(--text-3)"}),t.jsx("div",{style:{marginTop:10},children:"No lists yet."}),t.jsxs("button",{onClick:S,style:{...je.addColBtn,marginTop:14},children:[t.jsx(lt,{size:15})," Create your first list"]})]}):t.jsx("div",{style:je.muted,children:"Loading…"}),I&&t.jsx("div",{style:{...je.ghost,width:I.w,left:I.x-I.offX,top:I.y-I.offY},children:t.jsxs("div",{style:je.itemCardTop,children:[t.jsx(ql,{size:13,style:{color:"var(--text-3)",flexShrink:0}}),t.jsx("span",{style:je.itemName,children:I.item.name})]})}),a&&t.jsx("div",{style:je.overlay,onClick:()=>d(null),children:t.jsxs("div",{style:je.modal,onClick:_=>_.stopPropagation(),children:[t.jsxs("div",{style:je.modalHead,children:[t.jsx("span",{style:je.modalTitle,children:a.id?"Edit list":"New list"}),t.jsx("button",{onClick:()=>d(null),style:je.iconBtn,children:t.jsx(De,{size:16})})]}),t.jsx("label",{style:je.label,children:"List name *"}),t.jsx("input",{autoFocus:!0,value:a.name,onChange:_=>d(ne=>({...ne,name:_.target.value})),placeholder:"e.g. Gardens, Cafés, Trips…",style:je.input}),t.jsx("label",{style:je.label,children:"Columns"}),t.jsx("div",{style:je.muted2,children:"Name the details you want to track (e.g. Author, Distance, Tag)."}),a.columns.map((_,ne)=>t.jsxs("div",{style:je.colRow,children:[t.jsx("input",{value:_.name,placeholder:`Column ${ne+1}`,onChange:xe=>d(D=>{const v=[...D.columns];return v[ne]={...v[ne],name:xe.target.value},{...D,columns:v}}),style:{...je.input,marginBottom:0,flex:1}}),t.jsx("select",{value:_.type,onChange:xe=>d(D=>{const v=[...D.columns];return v[ne]={...v[ne],type:xe.target.value},{...D,columns:v}}),style:je.colTypeSelect,children:$1.map(xe=>t.jsx("option",{value:xe.id,children:xe.label},xe.id))}),t.jsx("button",{onClick:()=>d(xe=>({...xe,columns:xe.columns.filter((D,v)=>v!==ne)})),style:je.iconBtn,children:t.jsx(De,{size:14})})]},ne)),a.columns.length<6&&t.jsxs("button",{onClick:()=>d(_=>({..._,columns:[..._.columns,X()]})),style:je.addColInline,children:[t.jsx(lt,{size:13})," Add column"]}),t.jsxs("div",{style:je.modalActions,children:[t.jsx("button",{onClick:()=>d(null),style:je.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:O,disabled:!a.name.trim(),style:{...je.saveBtn,...a.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",a.id?"Save":"Create"]})]})]})}),c&&y&&t.jsx("div",{style:je.overlay,onClick:()=>h(null),children:t.jsxs("div",{style:je.modal,onClick:_=>_.stopPropagation(),children:[t.jsxs("div",{style:je.modalHead,children:[t.jsx("span",{style:je.modalTitle,children:c.id?"Edit":`Add to ${y.name}`}),t.jsx("button",{onClick:()=>h(null),style:je.iconBtn,children:t.jsx(De,{size:16})})]}),t.jsx("label",{style:je.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:c.name,onChange:_=>h(ne=>({...ne,name:_.target.value})),onKeyDown:_=>_.key==="Enter"&&ge(),placeholder:"Title / name",style:je.input}),y.columns.map(_=>{const ne=Rn(_),xe=bd(_),D=`dl-${y.id}-${ne}`,v=he[ne]||[];return t.jsxs("div",{children:[t.jsx("label",{style:je.label,children:ne}),t.jsx("input",{value:c.fields[ne]||"",type:xe==="number"?"number":xe==="link"?"url":"text",list:v.length?D:void 0,onChange:re=>h(F=>({...F,fields:{...F.fields,[ne]:re.target.value}})),placeholder:xe==="link"?"https://…":ne,style:je.input}),v.length>0&&t.jsx("datalist",{id:D,children:v.map(re=>t.jsx("option",{value:re},re))})]},ne)}),t.jsx("label",{style:je.label,children:"Status"}),t.jsx("div",{style:je.statusPick,children:Ii.map(_=>t.jsx("button",{type:"button",onClick:()=>h(ne=>({...ne,status:_.id})),style:{...je.statusChip,...c.status===_.id?{background:_.color,color:"#fff",border:`1px solid ${_.color}`}:{}},children:_.label},_.id))}),t.jsxs("div",{style:je.modalActions,children:[t.jsx("button",{onClick:()=>h(null),style:je.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:ge,disabled:!c.name.trim(),style:{...je.saveBtn,...c.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",c.id?"Save":"Add"]})]})]})}),f&&t.jsx("div",{style:je.overlay,onClick:()=>m(null),children:t.jsxs("div",{style:{...je.modal,maxWidth:380},onClick:_=>_.stopPropagation(),children:[t.jsxs("div",{style:je.modalHead,children:[t.jsx("span",{style:je.modalTitle,children:"Satisfied! 🎉"}),t.jsx("button",{onClick:()=>m(null),style:je.iconBtn,children:t.jsx(De,{size:16})})]}),t.jsxs("div",{style:je.muted2,children:['"',f.item.name,'" — when did you complete it?']}),t.jsx("label",{style:je.label,children:"Completed on"}),t.jsx("input",{type:"date",value:f.date,max:ll(),onChange:_=>m(ne=>({...ne,date:_.target.value})),style:je.input}),t.jsx("label",{style:je.label,children:"Comment (optional)"}),t.jsx("textarea",{value:f.note,onChange:_=>m(ne=>({...ne,note:_.target.value})),placeholder:"How was it?",style:{...je.input,minHeight:64,resize:"vertical"}}),t.jsxs("div",{style:je.modalActions,children:[t.jsx("button",{onClick:()=>m(null),style:je.cancelBtn,children:"Skip"}),t.jsxs("button",{onClick:Y,style:je.saveBtn,children:[t.jsx(He,{size:15})," Save"]})]})]})}),t.jsx(br,{toasts:T,onUndo:R,onDismiss:k})]})}const je={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},addColBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"none",background:Qr,color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabs:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16,alignItems:"center"},tab:{display:"inline-flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},tabOn:{background:Qr,color:"#fff",borderColor:Qr},tabCount:{fontSize:10.5,fontWeight:700,background:"rgba(0,0,0,0.12)",borderRadius:9,padding:"1px 6px"},tabAdd:{border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",width:32,height:32,borderRadius:"50%",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},colHead:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,marginBottom:12,flexWrap:"wrap"},colTitle:{fontSize:18,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},colActions:{display:"flex",gap:6,alignItems:"center"},primaryBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"none",background:Qr,color:"#fff",padding:"7px 13px",borderRadius:8,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:6,flexShrink:0},filterBar:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",marginBottom:14},filterLabel:{fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--text-3)",marginRight:2},filterChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 11px",borderRadius:16,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},filterChipOn:{background:Qr,color:"#fff",borderColor:Qr},board:{display:"grid",gap:12,alignItems:"start"},lane:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:"10px 10px 12px",minHeight:120,display:"flex",flexDirection:"column"},laneHead:{display:"flex",alignItems:"center",gap:7,padding:"2px 4px 10px"},laneDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},laneLabel:{fontSize:12.5,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--text-2)"},laneCount:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},laneAdd:{marginLeft:"auto",border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:2,borderRadius:6},laneBody:{display:"flex",flexDirection:"column",gap:8,minHeight:40,flex:1},laneEmpty:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",textAlign:"center",padding:"16px 0",border:"1px dashed var(--border)",borderRadius:8},insertLine:{height:3,borderRadius:2,margin:"1px 0"},itemCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"9px 10px",boxShadow:"0 1px 2px rgba(0,0,0,0.05)",cursor:"grab",touchAction:"none",userSelect:"none"},itemCardTop:{display:"flex",alignItems:"center",gap:6},itemName:{flex:1,minWidth:0,fontSize:13.5,fontWeight:700,wordBreak:"break-word"},itemField:{display:"flex",gap:8,fontSize:12,color:"var(--text-2)",marginTop:5,paddingLeft:19},fieldLabel:{fontWeight:700,color:"var(--text-3)",minWidth:64,flexShrink:0},tagWrap:{display:"flex",flexWrap:"wrap",gap:5,marginTop:8,paddingLeft:19},tag:{fontSize:10.5,fontWeight:700,color:Qr,background:"color-mix(in srgb, "+Qr+" 14%, transparent)",border:"1px solid color-mix(in srgb, "+Qr+" 30%, transparent)",borderRadius:12,padding:"2px 8px",whiteSpace:"nowrap"},doneMeta:{marginTop:8,paddingLeft:19,display:"flex",flexDirection:"column",gap:3},doneDate:{fontSize:11,fontWeight:700,color:"#4C9A6B"},doneNote:{fontSize:11.5,color:"var(--text-2)",fontStyle:"italic",wordBreak:"break-word"},ghost:{position:"fixed",zIndex:300,pointerEvents:"none",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"9px 10px",boxShadow:"0 8px 28px rgba(0,0,0,0.28)",opacity:.95,transform:"rotate(1.5deg)"},muted:{fontSize:13,color:"var(--text-3)"},muted2:{fontSize:11.5,color:"var(--text-3)",marginBottom:8},empty:{textAlign:"center",color:"var(--text-3)",padding:"50px 16px",fontSize:14,fontWeight:600,display:"flex",flexDirection:"column",alignItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:8},colRow:{display:"flex",gap:6,alignItems:"center",marginBottom:8},colTypeSelect:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",background:"var(--bg)",color:"var(--text)",flexShrink:0},addColInline:{display:"inline-flex",alignItems:"center",gap:5,border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"7px 12px",borderRadius:8,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},statusPick:{display:"flex",gap:6,flexWrap:"wrap"},statusChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 13px",borderRadius:18,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Rr="#C9772E",Pm={Carrot:Wy,ShoppingCart:m0,Clapperboard:_y,ShoppingBag:jm,Fuel:Vy,Sparkles:Co,Shirt:h0,WashingMachine:w0,Zap:Bg,Tv:j0,Droplet:Hy,Coffee:$y,Utensils:k0,Bus:By,Train:y0,Plane:g0,Home:ys,Heart:gm,Gift:xs,Book:zy,Dumbbell:Gy,Pill:c0,Phone:d0,Wifi:S0,Gamepad2:Yy,Music:Xl,Scissors:ym,PawPrint:a0,Baby:wy,GraduationCap:dm,Briefcase:Iy,Car:Ay,Bike:Cy},En=({name:e,...r})=>{const n=Pm[e]||jm;return t.jsx(n,{...r})},hd=["#C9772E","#4C9A6B","#3A7CA5","#8268B0","#C2536B","#C9A227","#D1556E","#5B7C99","#A23E57","#3E9E6B"],Cc=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Lp=Cc(new Date),Do=120;function N1(e=760){const[r,n]=g.useState(()=>window.innerWidth<e);return g.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}function O1(){const e=N1(),r=Jn(),n=Am(),[o,i]=g.useState([]),[s,l]=g.useState([]),[a,d]=g.useState(!1),[c,h]=g.useState(Lp),[f,m]=g.useState(()=>new Date),[I,B]=g.useState(null),[z,w]=g.useState(null),[p,b]=g.useState(null),[u,j]=g.useState(!1),[x,T]=g.useState("day"),[R,k]=g.useState(()=>Ir(new Date,n)[0]),[y,K]=g.useState("all"),q=g.useCallback(()=>{E.getExpenses().then(M=>{i(M.categories),l(M.logs),d(!0)}).catch(()=>d(!0))},[]);g.useEffect(()=>{q()},[q]);const{deleteItem:oe,toasts:L,handleUndo:he,handleDismiss:Se}=pr(E.deleteExpenseLog,E.restoreExpenseLog,q),ue=g.useMemo(()=>{const M={};return o.forEach(ee=>M[ee.id]=ee),M},[o]),ke=M=>js(M,r.code),se=g.useMemo(()=>s.filter(M=>M.date===c),[s,c]),U=se.reduce((M,ee)=>M+ee.amount,0),de=g.useMemo(()=>{const M=Le=>{const Pe=new Date;return Pe.setDate(Pe.getDate()+Le),Cc(Pe)},ee=Le=>s.filter(Pe=>Pe.date===Le).reduce((Pe,st)=>Pe+st.amount,0);return[{label:"Today",value:ee(M(0)),color:Rr},{label:"Yesterday",value:ee(M(-1)),color:"var(--text-3)"},{label:"Day before",value:ee(M(-2)),color:"var(--text-3)"}]},[s]),X=g.useMemo(()=>{if(x==="day")return se;if(x==="month"){const[M,ee]=Ir(new Date(c+"T00:00"),n);return s.filter(Le=>Le.date>=M&&Le.date<=ee)}if(x==="year"){const M=c.slice(0,4);return s.filter(ee=>ee.date.slice(0,4)===M)}return s},[s,se,x,c,n]),S=X.reduce((M,ee)=>M+ee.amount,0),W=g.useMemo(()=>{const M={};return X.forEach(ee=>{M[ee.category_id]=(M[ee.category_id]||0)+ee.amount}),Object.entries(M).map(([ee,Le])=>({cat:ue[ee],amount:Le})).filter(ee=>ee.cat).sort((ee,Le)=>Le.amount-ee.amount)},[X,ue]),O=M=>Ir(new Date(M+"T00:00"),n)[0],N=g.useMemo(()=>{const M=new Set(s.map(ee=>O(ee.date)));return M.add(Ir(new Date,n)[0]),Array.from(M).sort().reverse().slice(0,12)},[s,n]),le=M=>new Date(M+"T00:00").toLocaleDateString("en-US",{month:"short",year:"numeric"}),ge=(M,ee)=>Ir(new Date(M+"T00:00"),n,-ee)[0],Ae=M=>y==="all"||M.category_id===Number(y),Y=[R,ge(R,1),ge(R,2)],ae=Y.map(M=>{const[ee,Le]=Ir(new Date(M+"T00:00"),n);return s.filter(Pe=>Pe.date>=ee&&Pe.date<=Le&&Ae(Pe)).reduce((Pe,st)=>Pe+st.amount,0)}),[_,ne,xe]=ae,D=ne>0?Math.round((_-ne)/ne*100):_>0?100:0,v=D>0?Qi:D<0?Yn:pm,re=D>0?"#C2536B":D<0?"#4C9A6B":"#9A968C",F=g.useMemo(()=>{const[M,ee]=Ir(new Date(R+"T00:00"),n),Le={};return s.filter(Pe=>Pe.date>=M&&Pe.date<=ee&&Ae(Pe)).forEach(Pe=>{Le[Pe.category_id]=(Le[Pe.category_id]||0)+Pe.amount}),Object.entries(Le).map(([Pe,st])=>({cat:ue[Pe],amount:st})).filter(Pe=>Pe.cat).sort((Pe,st)=>st.amount-Pe.amount)},[s,R,y,ue,n]);let ce=0;const ye=F.map(M=>{const ee=_>0?ce/_*100:0;ce+=M.amount;const Le=_>0?ce/_*100:0;return{...M,start:ee,end:Le,pct:_>0?M.amount/_*100:0}}),We=ye.length?`conic-gradient(${ye.map(M=>`${M.cat.color} ${M.start}% ${M.end}%`).join(", ")})`:"var(--surface-2)",qe=g.useMemo(()=>{const[M,ee]=Ir(f,n),Le=new Date(M+"T00:00"),Pe=new Date(ee+"T00:00"),st=(Le.getDay()+6)%7,ct={};s.forEach(Je=>{Je.date>=M&&Je.date<=ee&&(ct[Je.date]=(ct[Je.date]||0)+Je.amount)});const hr=[];for(let Je=0;Je<st;Je++)hr.push(null);for(let Je=new Date(Le);Je<=Pe;Je.setDate(Je.getDate()+1)){const G=Cc(Je);hr.push({date:G,day:Je.getDate(),total:ct[G]||0})}return hr},[f,s,n]),dt=M=>m(ee=>{const[Le]=Ir(ee,n,M);return new Date(Le+"T00:00")}),$e=g.useMemo(()=>{const[M,ee]=Ir(f,n);if(n===1)return new Date(M+"T00:00").toLocaleDateString("en-US",{month:"long",year:"numeric"});const Le=Pe=>new Date(Pe+"T00:00").toLocaleDateString("en-US",{day:"numeric",month:"short"});return`${Le(M)} – ${Le(ee)}`},[f,n]),nt=M=>B({cat:M,amount:"",note:""}),Ke=async()=>{const M=parseFloat(I.amount);!M||M<=0||(await E.createExpenseLog({category_id:I.cat.id,amount:M,note:I.note.trim().slice(0,Do),date:c}),B(null),q())},gt=M=>w({id:M.id,category_id:M.category_id,amount:String(M.amount),note:M.note||"",date:M.date}),ie=async()=>{const M=parseFloat(z.amount);!M||M<=0||(await E.updateExpenseLog(z.id,{category_id:z.category_id,amount:M,note:z.note.trim().slice(0,Do),date:z.date}),w(null),q())},Me=()=>b({id:null,name:"",icon:"ShoppingBag",color:hd[o.length%hd.length]}),Xe=M=>b({id:M.id,name:M.name,icon:M.icon,color:M.color}),tt=async()=>{const M=p.name.trim();M&&(p.id?await E.updateExpenseCategory(p.id,{name:M,icon:p.icon,color:p.color}):await E.createExpenseCategory({name:M,icon:p.icon,color:p.color}),b(null),q())},bt=async M=>{const ee=s.filter(Pe=>Pe.category_id===M.id).length,Le=ee>0?`Delete "${M.name}"? Its ${ee} transaction${ee===1?"":"s"} will be moved to "Other".`:`Delete "${M.name}"?`;window.confirm(Le)&&(await E.deleteExpenseCategory(M.id),q())},It=async(M,ee)=>{const Le=M+ee;if(Le<0||Le>=o.length)return;const Pe=[...o];[Pe[M],Pe[Le]]=[Pe[Le],Pe[M]],i(Pe),await E.arrangeExpenseCategories(Pe.map(st=>st.id)).catch(()=>{}),q()},Bt=new Date(c+"T00:00").toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});let mt=0;const ft=W.map(M=>{const ee=S>0?mt/S*100:0;mt+=M.amount;const Le=S>0?mt/S*100:0;return{...M,start:ee,end:Le,pct:S>0?M.amount/S*100:0}}),Rt=ft.length?`conic-gradient(${ft.map(M=>`${M.cat.color} ${M.start}% ${M.end}%`).join(", ")})`:"var(--surface-2)";return t.jsxs("div",{style:{...V.page,...e?{padding:"20px 14px"}:{}},children:[t.jsx("div",{style:V.head,children:t.jsxs("div",{children:[t.jsx("div",{style:V.eyebrow,children:"Anvil · Expenses"}),t.jsx("h1",{style:V.h1,children:"Expenses"}),t.jsx("div",{style:V.subhead,children:"Log day-to-day spending by category and see where it goes."})]})}),t.jsxs("div",{style:V.totalCard,children:[t.jsxs("div",{style:V.totalLeft,children:[t.jsx(Zl,{size:20,color:Rr}),t.jsxs("div",{children:[t.jsxs("div",{style:V.totalLabel,children:["Total spent ",x==="day"?"today":x==="month"?"this month":x==="year"?"this year":"all time"]}),t.jsx("div",{style:V.totalVal,children:ke(S)})]})]}),t.jsx("div",{style:V.scopeRow,children:[["day","Day"],["month","Month"],["year","Year"],["all","All"]].map(([M,ee])=>t.jsx("button",{onClick:()=>T(M),style:{...V.scopeBtn,...x===M?V.scopeBtnOn:{}},children:ee},M))})]}),t.jsxs("div",{style:{...V.card,marginBottom:16},children:[t.jsx("div",{style:V.threeDayTitle,children:"Last 3 days"}),t.jsx(_p,{items:de,money:ke})]}),t.jsxs("div",{style:{...V.cols,gridTemplateColumns:e?"minmax(0,1fr)":"320px minmax(0,1fr)"},children:[t.jsxs("div",{style:{...V.card,minWidth:0,...e?{padding:12}:{}},children:[t.jsxs("div",{style:V.calHead,children:[t.jsx("button",{onClick:()=>dt(-1),style:V.calNav,children:t.jsx(Sn,{size:16})}),t.jsx("span",{style:V.calTitle,children:$e}),t.jsx("button",{onClick:()=>dt(1),style:V.calNav,children:t.jsx(nn,{size:16})})]}),t.jsxs("div",{style:V.calGrid,children:[["M","T","W","T","F","S","S"].map((M,ee)=>t.jsx("div",{style:V.calDow,children:M},ee)),qe.map((M,ee)=>M===null?t.jsx("div",{},ee):t.jsxs("button",{onClick:()=>h(M.date),style:{...V.calCell,...M.date===c?V.calCellOn:{},...M.date===Lp&&M.date!==c?V.calCellToday:{}},children:[t.jsx("span",{children:M.day}),M.total>0&&t.jsx("span",{style:{...V.calDot,background:M.date===c?"#fff":Rr}})]},M.date))]})]}),t.jsxs("div",{children:[t.jsxs("div",{style:V.card,children:[t.jsxs("div",{style:V.cardTitleRow,children:[t.jsxs("div",{children:[t.jsx("div",{style:V.cardTitle,children:Bt}),t.jsx("div",{style:V.cardSub,children:"Tap a category to log an expense for this day."})]}),t.jsx("div",{style:V.dayTotal,children:ke(U)})]}),t.jsxs("div",{style:V.iconGrid,children:[o.map(M=>t.jsxs("div",{style:V.iconCell,children:[t.jsx("button",{onClick:()=>nt(M),style:{...V.iconBtn,background:M.color+"1A",color:M.color,borderColor:M.color+"44"},children:t.jsx(En,{name:M.icon,size:22})}),t.jsx("span",{style:V.iconLabel,children:M.name})]},M.id)),t.jsxs("div",{style:V.iconCell,children:[t.jsx("button",{onClick:Me,style:V.iconBtnAdd,children:t.jsx(lt,{size:20})}),t.jsx("span",{style:V.iconLabel,children:"Add"})]})]}),t.jsxs("button",{onClick:()=>j(!0),style:V.manageLink,children:[t.jsx(vt,{size:11})," Customize categories"]}),se.length>0&&t.jsx("div",{style:V.logList,children:se.map(M=>{const ee=ue[M.category_id];return t.jsxs("div",{style:V.logRow,children:[t.jsx("span",{style:{...V.logIcon,background:((ee==null?void 0:ee.color)||"#9A968C")+"1A",color:(ee==null?void 0:ee.color)||"#9A968C"},children:t.jsx(En,{name:ee==null?void 0:ee.icon,size:14})}),t.jsxs("button",{onClick:()=>gt(M),style:V.logInfoBtn,title:"Edit this expense",children:[t.jsx("div",{style:V.logCat,children:(ee==null?void 0:ee.name)||"Deleted category"}),M.note&&t.jsx("div",{style:V.logNote,children:M.note})]}),t.jsx("span",{style:V.logAmt,children:ke(M.amount)}),t.jsx("button",{onClick:()=>gt(M),style:V.editBtn,title:"Edit",children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:()=>oe(M.id,(ee==null?void 0:ee.name)||"Expense"),style:V.delBtn,children:t.jsx(De,{size:14})})]},M.id)})})]}),t.jsxs("div",{style:V.card,children:[t.jsx("div",{style:V.cardTitleRow,children:t.jsxs("div",{children:[t.jsx("div",{style:V.cardTitle,children:"Spending by category"}),t.jsxs("div",{style:V.cardSub,children:[x==="day"?"Today":x==="month"?"This month":x==="year"?"This year":"All time"," — percentage & amount"]})]})}),W.length===0?t.jsx("div",{style:V.muted,children:"No expenses logged for this period yet."}):t.jsxs("div",{style:V.pieWrap,children:[t.jsxs("div",{style:V.pieChart,children:[t.jsx("div",{style:{...V.pieDisc,background:Rt}}),t.jsxs("div",{style:V.pieHole,children:[t.jsx("span",{style:V.pieHoleVal,children:ke(S)}),t.jsx("span",{style:V.pieHoleLbl,children:"total"})]})]}),t.jsx("div",{style:V.pieLegend,children:ft.map(M=>t.jsxs("div",{style:V.legendRow,children:[t.jsx("span",{style:{...V.dot,background:M.cat.color}}),t.jsx(En,{name:M.cat.icon,size:13,style:{color:M.cat.color,flexShrink:0}}),t.jsx("span",{style:V.legendName,children:M.cat.name}),t.jsxs("span",{style:V.legendPct,children:[Math.round(M.pct),"%"]}),t.jsx("span",{style:V.legendAmt,children:ke(M.amount)})]},M.cat.id))})]})]}),t.jsxs("div",{style:V.card,children:[t.jsx("div",{style:V.cardTitleRow,children:t.jsxs("div",{children:[t.jsx("div",{style:V.cardTitle,children:"Monthly trend"}),t.jsx("div",{style:V.cardSub,children:"Compare a month against the previous two"})]})}),t.jsx("div",{style:V.tagRow,children:N.map(M=>t.jsxs("button",{onClick:()=>k(M),style:{...V.tagChip,...R===M?V.tagChipOn:{}},children:[t.jsx(pc,{size:11})," ",le(M)]},M))}),t.jsxs("div",{style:{...V.tagRow,marginTop:8},children:[t.jsxs("button",{onClick:()=>K("all"),style:{...V.tagChip,...y==="all"?V.tagChipOn:{}},children:[t.jsx(pc,{size:11})," All categories"]}),o.map(M=>t.jsxs("button",{onClick:()=>K(String(M.id)),style:{...V.tagChip,...y===String(M.id)?V.tagChipOn:{}},children:[t.jsx(En,{name:M.icon,size:11})," ",M.name]},M.id))]}),t.jsxs("div",{style:{...V.trend3,marginTop:16},children:[t.jsxs("div",{style:V.trendCol,children:[t.jsx("div",{style:V.trendVal,children:ke(_)}),t.jsx("div",{style:V.trendLbl,children:le(Y[0])})]}),t.jsxs("div",{style:V.trendCol,children:[t.jsx("div",{style:{...V.trendVal,color:"var(--text-2)"},children:ke(ne)}),t.jsx("div",{style:V.trendLbl,children:le(Y[1])})]}),t.jsxs("div",{style:V.trendCol,children:[t.jsx("div",{style:{...V.trendVal,color:"var(--text-3)"},children:ke(xe)}),t.jsx("div",{style:V.trendLbl,children:le(Y[2])})]})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:t.jsxs("div",{style:{...V.trendBadge,color:re,background:re+"1A"},children:[t.jsx(v,{size:15})," ",D>0?"+":"",D,"% vs ",le(Y[1])]})}),t.jsx(_p,{items:[{label:le(Y[0]),value:_,color:Rr},{label:le(Y[1]),value:ne,color:"var(--text-3)"},{label:le(Y[2]),value:xe,color:"var(--text-3)"}],money:ke}),t.jsx("div",{style:V.trendDivider}),t.jsxs("div",{style:V.cardSub,children:["Category split for ",le(R)]}),F.length===0?t.jsx("div",{style:V.muted,children:"No expenses logged for this month yet."}):t.jsxs("div",{style:{...V.pieWrap,marginTop:10},children:[t.jsxs("div",{style:V.pieChart,children:[t.jsx("div",{style:{...V.pieDisc,background:We}}),t.jsxs("div",{style:V.pieHole,children:[t.jsx("span",{style:V.pieHoleVal,children:ke(_)}),t.jsx("span",{style:V.pieHoleLbl,children:"total"})]})]}),t.jsx("div",{style:V.pieLegend,children:ye.map(M=>t.jsxs("div",{style:V.legendRow,children:[t.jsx("span",{style:{...V.dot,background:M.cat.color}}),t.jsx(En,{name:M.cat.icon,size:13,style:{color:M.cat.color,flexShrink:0}}),t.jsx("span",{style:V.legendName,children:M.cat.name}),t.jsxs("span",{style:V.legendPct,children:[Math.round(M.pct),"%"]}),t.jsx("span",{style:V.legendAmt,children:ke(M.amount)})]},M.cat.id))})]})]})]})]}),I&&t.jsx("div",{style:V.overlay,onClick:()=>B(null),children:t.jsxs("div",{style:V.modal,onClick:M=>M.stopPropagation(),children:[t.jsxs("div",{style:V.modalHead,children:[t.jsxs("span",{style:{...V.modalTitle,display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{...V.iconBadge,background:I.cat.color+"1A",color:I.cat.color},children:t.jsx(En,{name:I.cat.icon,size:16})}),I.cat.name]}),t.jsx("button",{onClick:()=>B(null),style:V.iconBtnPlain,children:t.jsx(De,{size:16})})]}),t.jsx("label",{style:V.label,children:"Amount *"}),t.jsx("input",{autoFocus:!0,type:"number",inputMode:"decimal",value:I.amount,onChange:M=>B(ee=>({...ee,amount:M.target.value})),onKeyDown:M=>M.key==="Enter"&&Ke(),placeholder:"0",style:V.input}),t.jsx("label",{style:V.label,children:"Note (optional)"}),t.jsx("input",{value:I.note,maxLength:Do,onChange:M=>B(ee=>({...ee,note:M.target.value})),onKeyDown:M=>M.key==="Enter"&&Ke(),placeholder:"What was it for?",style:V.input}),t.jsxs("div",{style:V.noteCount,children:[I.note.length,"/",Do]}),t.jsxs("div",{style:V.modalActions,children:[t.jsx("button",{onClick:()=>B(null),style:V.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:Ke,disabled:!I.amount,style:{...V.saveBtn,...I.amount?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," Add"]})]})]})}),z&&(ue[z.category_id],t.jsx("div",{style:V.overlay,onClick:()=>w(null),children:t.jsxs("div",{style:V.modal,onClick:M=>M.stopPropagation(),children:[t.jsxs("div",{style:V.modalHead,children:[t.jsx("span",{style:V.modalTitle,children:"Edit expense"}),t.jsx("button",{onClick:()=>w(null),style:V.iconBtnPlain,children:t.jsx(De,{size:16})})]}),t.jsx("label",{style:V.label,children:"Category"}),t.jsx("select",{value:z.category_id,onChange:M=>w(ee=>({...ee,category_id:Number(M.target.value)})),style:V.input,children:o.map(M=>t.jsx("option",{value:M.id,children:M.name},M.id))}),t.jsx("label",{style:V.label,children:"Amount *"}),t.jsx("input",{autoFocus:!0,type:"number",inputMode:"decimal",value:z.amount,onChange:M=>w(ee=>({...ee,amount:M.target.value})),onKeyDown:M=>M.key==="Enter"&&ie(),placeholder:"0",style:V.input}),t.jsx("label",{style:V.label,children:"Date"}),t.jsx("input",{type:"date",value:z.date,onChange:M=>w(ee=>({...ee,date:M.target.value})),style:V.input}),t.jsx("label",{style:V.label,children:"Note (optional)"}),t.jsx("input",{value:z.note,maxLength:Do,onChange:M=>w(ee=>({...ee,note:M.target.value})),onKeyDown:M=>M.key==="Enter"&&ie(),placeholder:"What was it for?",style:V.input}),t.jsxs("div",{style:V.noteCount,children:[z.note.length,"/",Do]}),t.jsxs("div",{style:V.modalActions,children:[t.jsx("button",{onClick:()=>w(null),style:V.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:ie,disabled:!z.amount,style:{...V.saveBtn,...z.amount?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," Save"]})]})]})})),u&&t.jsx("div",{style:V.overlay,onClick:()=>j(!1),children:t.jsxs("div",{style:V.modal,onClick:M=>M.stopPropagation(),children:[t.jsxs("div",{style:V.modalHead,children:[t.jsx("span",{style:V.modalTitle,children:"Customize categories"}),t.jsx("button",{onClick:()=>j(!1),style:V.iconBtnPlain,children:t.jsx(De,{size:16})})]}),t.jsx("div",{style:V.manageHint,children:"Use the arrows to reorder how categories appear."}),t.jsx("div",{style:V.manageList,children:o.map((M,ee)=>t.jsxs("div",{style:V.manageRow,children:[t.jsxs("div",{style:V.reorderCol,children:[t.jsx("button",{onClick:()=>It(ee,-1),disabled:ee===0,style:{...V.reorderBtn,...ee===0?V.reorderDisabled:{}},title:"Move up",children:t.jsx(va,{size:13})}),t.jsx("button",{onClick:()=>It(ee,1),disabled:ee===o.length-1,style:{...V.reorderBtn,...ee===o.length-1?V.reorderDisabled:{}},title:"Move down",children:t.jsx(So,{size:13})})]}),t.jsx("span",{style:{...V.iconBadge,background:M.color+"1A",color:M.color},children:t.jsx(En,{name:M.icon,size:15})}),t.jsx("span",{style:{flex:1,fontSize:13.5,fontWeight:600},children:M.name}),t.jsx("button",{onClick:()=>Xe(M),style:V.delBtn,children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:()=>bt(M),style:V.delBtn,children:t.jsx(De,{size:14})})]},M.id))}),t.jsxs("button",{onClick:Me,style:V.addColInline,children:[t.jsx(lt,{size:13})," Add category"]})]})}),p&&t.jsx("div",{style:V.overlay,onClick:()=>b(null),children:t.jsxs("div",{style:V.modal,onClick:M=>M.stopPropagation(),children:[t.jsxs("div",{style:V.modalHead,children:[t.jsx("span",{style:V.modalTitle,children:p.id?"Edit category":"New category"}),t.jsx("button",{onClick:()=>b(null),style:V.iconBtnPlain,children:t.jsx(De,{size:16})})]}),t.jsx("label",{style:V.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:p.name,onChange:M=>b(ee=>({...ee,name:M.target.value})),onKeyDown:M=>M.key==="Enter"&&tt(),placeholder:"e.g. Vegetables, Petrol…",style:V.input}),t.jsx("label",{style:V.label,children:"Color"}),t.jsx("div",{style:V.colorRow,children:hd.map(M=>t.jsx("button",{onClick:()=>b(ee=>({...ee,color:M})),style:{...V.colorSwatch,background:M,...p.color===M?V.colorSwatchOn:{}}},M))}),t.jsx("label",{style:V.label,children:"Icon"}),t.jsx("div",{style:V.iconPickGrid,children:Object.keys(Pm).map(M=>t.jsx("button",{onClick:()=>b(ee=>({...ee,icon:M})),style:{...V.iconPick,...p.icon===M?{background:p.color+"22",borderColor:p.color,color:p.color}:{}},children:t.jsx(En,{name:M,size:17})},M))}),t.jsxs("div",{style:V.modalActions,children:[t.jsx("button",{onClick:()=>b(null),style:V.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:tt,disabled:!p.name.trim(),style:{...V.saveBtn,...p.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",p.id?"Save":"Create"]})]})]})}),!a&&t.jsx("div",{style:V.muted,children:"Loading…"}),t.jsx(br,{toasts:L,onUndo:he,onDismiss:Se})]})}function _p({items:e,money:r}){const n=Math.max(1,...e.map(o=>o.value));return t.jsx("div",{style:V.tbWrap,children:e.map((o,i)=>t.jsxs("div",{style:V.tbRow,children:[t.jsx("div",{style:V.tbLbl,children:o.label}),t.jsx("div",{style:V.tbTrack,children:t.jsx("div",{style:{...V.tbBar,width:`${o.value/n*100}%`,background:o.color}})}),t.jsx("div",{style:V.tbVal,children:r(o.value)})]},i))})}const V={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},totalCard:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:14,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:16,padding:"16px 18px",marginBottom:16,flexWrap:"wrap"},totalLeft:{display:"flex",alignItems:"center",gap:12},totalLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600},totalVal:{fontSize:24,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2},scopeRow:{display:"flex",gap:6},scopeBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 13px",borderRadius:8,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},scopeBtnOn:{background:Rr,color:"#fff",borderColor:Rr},cols:{display:"grid",gap:16,alignItems:"start"},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},dayTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap",color:Rr},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},calNav:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,minmax(0,1fr))",gap:4},calDow:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",textAlign:"center",padding:"4px 0"},calCell:{position:"relative",border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:8,aspectRatio:"1",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},calCellOn:{background:Rr,color:"#fff",borderColor:Rr,fontWeight:700},calCellToday:{borderColor:Rr,fontWeight:700},calDot:{position:"absolute",bottom:3,width:4,height:4,borderRadius:"50%"},iconGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(64px, 1fr))",gap:10,marginTop:4},iconCell:{display:"flex",flexDirection:"column",alignItems:"center",gap:5},iconBtn:{width:52,height:52,borderRadius:14,border:"1px solid",display:"grid",placeItems:"center",cursor:"pointer"},iconBtnAdd:{width:52,height:52,borderRadius:14,border:"1px dashed var(--border)",background:"none",color:"var(--text-3)",display:"grid",placeItems:"center",cursor:"pointer"},iconLabel:{fontSize:10.5,fontWeight:600,color:"var(--text-2)",textAlign:"center",maxWidth:66,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},manageLink:{display:"inline-flex",alignItems:"center",gap:5,border:"none",background:"none",color:"var(--text-3)",fontSize:11.5,fontWeight:600,cursor:"pointer",marginTop:12,padding:0,fontFamily:"inherit"},logList:{marginTop:14,paddingTop:14,borderTop:"1px solid var(--border)",display:"flex",flexDirection:"column",gap:8},logRow:{display:"flex",alignItems:"center",gap:10,minWidth:0},logIcon:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},logInfoBtn:{flex:1,minWidth:0,border:"none",background:"none",padding:0,cursor:"pointer",textAlign:"left",fontFamily:"inherit",overflow:"hidden",color:"inherit"},logCat:{fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logNote:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logAmt:{fontSize:13.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap",flexShrink:0},editBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},noteCount:{fontSize:10.5,color:"var(--text-3)",textAlign:"right",marginTop:3},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:7},dot:{width:9,height:9,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},iconBadge:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:8},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},manageHint:{fontSize:11.5,color:"var(--text-3)",marginBottom:8},manageList:{display:"flex",flexDirection:"column",gap:6,marginBottom:10,maxHeight:320,overflowY:"auto"},manageRow:{display:"flex",alignItems:"center",gap:10,padding:"6px 2px"},reorderCol:{display:"flex",flexDirection:"column",gap:1,flexShrink:0},reorderBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:22,height:17,borderRadius:5,cursor:"pointer",display:"grid",placeItems:"center",padding:0},reorderDisabled:{opacity:.35,cursor:"not-allowed"},addColInline:{display:"inline-flex",alignItems:"center",gap:5,border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"9px 12px",borderRadius:8,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},colorRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:4},colorSwatch:{width:26,height:26,borderRadius:"50%",border:"2px solid transparent",cursor:"pointer",padding:0},colorSwatchOn:{border:"2px solid var(--text)",boxShadow:"0 0 0 2px var(--surface)"},iconPickGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:4},iconPick:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:9,height:36,display:"grid",placeItems:"center",cursor:"pointer"},tagRow:{display:"flex",gap:6,flexWrap:"wrap"},tagChip:{display:"inline-flex",alignItems:"center",gap:4,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:20,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tagChipOn:{background:Rr,color:"#fff",borderColor:Rr},trendDivider:{height:1,background:"var(--border)",margin:"16px 0 12px"},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},threeDayTitle:{fontSize:13,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:64,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},gn="#C9A227",ao="#C2536B",ta="#4C9A6B";new Date().toISOString().slice(0,10);const H1=e=>e?new Date(e+"T00:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"—";function G1(e=620){const[r,n]=g.useState(()=>window.innerWidth<e);return g.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const md=e=>(Number(e)||0).toLocaleString(void 0,{maximumFractionDigits:2});function U1(e){const r=e.target||0,n=e.completed||0;return r<=0?{pct:0,negPct:0,negative:!1}:n<0?{pct:0,negPct:Math.min(100,Math.abs(n)/r*100),negative:!0}:{pct:Math.min(100,n/r*100),negPct:0,negative:!1}}const V1=()=>({id:null,name:"",completed:"",target:"",end_date:"",reward:"",reward_cost:"",comment:"",allow_negative:!1});function Y1(){const e=Jn(),r=u=>Or(u,e.code),n=G1(),[o,i]=g.useState([]),[s,l]=g.useState(!1),[a,d]=g.useState(null),[c,h]=g.useState(null),f=g.useCallback(()=>{E.getChallenges().then(u=>{i(Array.isArray(u)?u:[]),l(!0)}).catch(()=>l(!0))},[]);g.useEffect(()=>{f()},[f]);const m=g.useMemo(()=>{const u=o.filter(x=>x.status==="done"),j=u.reduce((x,T)=>x+(T.reward_earned||0),0);return{total:o.length,done:u.length,active:o.filter(x=>x.status==="active").length,failed:o.filter(x=>x.status==="failed").length,earned:j}},[o]),I=()=>d(V1()),B=u=>d({id:u.id,name:u.name,completed:String(u.completed??""),target:String(u.target??""),end_date:u.end_date||"",reward:u.reward||"",reward_cost:String(u.reward_cost??""),comment:u.comment||"",allow_negative:!!u.allow_negative}),z=async()=>{const u=a.name.trim();if(!u)return;const j={name:u,completed:parseFloat(a.completed)||0,target:parseFloat(a.target)||0,end_date:a.end_date||null,reward:a.reward.trim(),reward_cost:parseFloat(a.reward_cost)||0,comment:a.comment.trim(),allow_negative:a.allow_negative};a.id?await E.updateChallenge(a.id,j):await E.createChallenge(j),d(null),f()},w=async u=>{window.confirm(`Delete challenge "${u.name}"?`)&&(await E.deleteChallenge(u.id),f())},p=u=>h({ch:u,amount:"",mode:"add"}),b=async()=>{const u=parseFloat(c.amount);if(isNaN(u))return;const j=c.mode==="set"?u:(c.ch.completed||0)+u;await E.updateChallenge(c.ch.id,{completed:j}),h(null),f()};return t.jsxs("div",{style:Ce.page,children:[t.jsxs("div",{style:Ce.head,children:[t.jsx("div",{style:Ce.eyebrow,children:"Anvil · Challenges"}),t.jsx("h1",{style:Ce.h1,children:"Challenges"}),t.jsx("div",{style:Ce.subhead,children:"Small steps toward success — track each toward its target and bank the reward on completion."})]}),t.jsxs("div",{style:Ce.statRow,children:[t.jsxs("div",{style:Ce.statCard,children:[t.jsx("div",{style:Ce.statVal,children:m.active}),t.jsx("div",{style:Ce.statLbl,children:"Active"})]}),t.jsxs("div",{style:Ce.statCard,children:[t.jsx("div",{style:{...Ce.statVal,color:ta},children:m.done}),t.jsx("div",{style:Ce.statLbl,children:"Completed"})]}),t.jsxs("div",{style:Ce.statCard,children:[t.jsx("div",{style:{...Ce.statVal,color:ao},children:m.failed}),t.jsx("div",{style:Ce.statLbl,children:"Missed"})]}),t.jsxs("div",{style:Ce.statCard,children:[t.jsx("div",{style:{...Ce.statVal,color:gn},children:r(m.earned)}),t.jsx("div",{style:Ce.statLbl,children:"Reward earned"})]})]}),t.jsxs("button",{onClick:I,style:Ce.addBtn,children:[t.jsx(lt,{size:16})," New challenge"]}),o.length===0?t.jsx("div",{style:Ce.empty,children:s?"No challenges yet. Create your first small step toward success.":"Loading…"}):t.jsx("div",{style:Ce.list,children:o.map((u,j)=>{const{pct:x,negPct:T,negative:R}=U1(u),k=R?ao:u.status==="done"?ta:gn;return t.jsxs("div",{style:{...Ce.card,...u.status==="failed"?Ce.cardFailed:{}},children:[t.jsxs("div",{style:{...Ce.cardTop,...n?{alignItems:"flex-start"}:{}},children:[t.jsxs("span",{style:{...Ce.num,...n?{marginTop:2}:{}},children:["#",j+1]}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:{...Ce.name,...n?Ce.nameMobile:{}},children:u.name}),u.comment&&t.jsx("div",{style:Ce.comment,children:u.comment}),n&&t.jsx("div",{style:Ce.badgeRow,children:t.jsx($p,{status:u.status})})]}),!n&&t.jsx($p,{status:u.status}),t.jsx("button",{onClick:()=>B(u),style:Ce.iconBtn,title:"Edit",children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:()=>w(u),style:Ce.iconBtn,title:"Delete",children:t.jsx(De,{size:14})})]}),t.jsxs("div",{style:Ce.barWrap,children:[t.jsx("div",{style:Ce.barTrack,children:R?t.jsx("div",{style:{...Ce.barFill,width:`${T}%`,background:ao,marginLeft:"auto"}}):t.jsx("div",{style:{...Ce.barFill,width:`${x}%`,background:k}})}),t.jsxs("div",{style:Ce.barMetaRow,children:[t.jsxs("span",{style:{...Ce.completed,color:(u.completed||0)<0?ao:"var(--text)"},children:[(u.completed||0)<0&&t.jsx(Yn,{size:12,style:{marginRight:3,verticalAlign:"-1px"}}),md(u.completed)]}),t.jsx("span",{style:Ce.barPct,children:R?`-${Math.round(T)}%`:`${Math.round(x)}%`}),t.jsxs("span",{style:Ce.target,children:["of ",md(u.target)]})]})]}),t.jsxs("div",{style:Ce.chips,children:[t.jsxs("span",{style:Ce.chip,children:[t.jsx(Uy,{size:12})," Remaining ",md(u.remaining)]}),t.jsxs("span",{style:Ce.chip,children:[t.jsx(Ey,{size:12})," ",u.end_date?`Ends ${H1(u.end_date)}`:"No deadline"]}),u.reward&&t.jsxs("span",{style:Ce.chip,children:[t.jsx(xs,{size:12})," ",u.reward]}),u.reward_cost>0&&t.jsxs("span",{style:{...Ce.chip,...Ce.chipReward},children:[t.jsx(Yr,{size:12})," ",r(u.reward_cost),u.status==="done"?" earned":""]}),u.allow_negative&&t.jsx("span",{style:{...Ce.chip,color:ao,borderColor:ao+"55"},children:"± negative allowed"})]}),t.jsx("div",{style:Ce.actions,children:t.jsxs("button",{onClick:()=>p(u),style:Ce.progressBtn,children:[t.jsx(lt,{size:13})," Update progress"]})})]},u.id)})}),a&&t.jsx("div",{style:Ce.overlay,onClick:()=>d(null),children:t.jsxs("div",{style:Ce.modal,onClick:u=>u.stopPropagation(),children:[t.jsxs("div",{style:Ce.modalHead,children:[t.jsx("span",{style:Ce.modalTitle,children:a.id?"Edit challenge":"New challenge"}),t.jsx("button",{onClick:()=>d(null),style:Ce.iconBtnPlain,children:t.jsx(De,{size:16})})]}),t.jsx("label",{style:Ce.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:a.name,onChange:u=>d(j=>({...j,name:u.target.value})),placeholder:"e.g. Earn ₹1,00,000 from trading",style:Ce.input}),t.jsxs("div",{style:Ce.grid2,children:[t.jsxs("div",{children:[t.jsx("label",{style:Ce.label,children:"Completed"}),t.jsx("input",{type:"number",inputMode:"decimal",value:a.completed,onChange:u=>d(j=>({...j,completed:u.target.value})),placeholder:"0",style:Ce.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:Ce.label,children:"Target"}),t.jsx("input",{type:"number",inputMode:"decimal",value:a.target,onChange:u=>d(j=>({...j,target:u.target.value})),placeholder:"0",style:Ce.input})]})]}),t.jsx("label",{style:Ce.label,children:"End date (optional — past & incomplete marks it missed)"}),t.jsx("input",{type:"date",value:a.end_date,onChange:u=>d(j=>({...j,end_date:u.target.value})),style:Ce.input}),t.jsxs("div",{style:Ce.grid2,children:[t.jsxs("div",{children:[t.jsx("label",{style:Ce.label,children:"Reward"}),t.jsx("input",{value:a.reward,onChange:u=>d(j=>({...j,reward:u.target.value})),placeholder:"e.g. New headphones",style:Ce.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:Ce.label,children:"Reward cost"}),t.jsx("input",{type:"number",inputMode:"decimal",value:a.reward_cost,onChange:u=>d(j=>({...j,reward_cost:u.target.value})),placeholder:"0",style:Ce.input})]})]}),t.jsx("label",{style:Ce.label,children:"Comment"}),t.jsx("input",{value:a.comment,onChange:u=>d(j=>({...j,comment:u.target.value})),placeholder:"Notes about this challenge",style:Ce.input}),t.jsxs("label",{style:Ce.toggleRow,children:[t.jsx("input",{type:"checkbox",checked:a.allow_negative,onChange:u=>d(j=>({...j,allow_negative:u.target.checked})),style:Ce.checkbox}),t.jsxs("span",{children:[t.jsx("span",{style:Ce.toggleLabel,children:"Allow negative progress"}),t.jsx("span",{style:Ce.toggleHint,children:"Let progress drop below zero (e.g. a running trading loss shown in red)."})]})]}),t.jsxs("div",{style:Ce.modalActions,children:[t.jsx("button",{onClick:()=>d(null),style:Ce.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:z,disabled:!a.name.trim(),style:{...Ce.saveBtn,...a.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",a.id?"Save":"Create"]})]})]})}),c&&t.jsx("div",{style:Ce.overlay,onClick:()=>h(null),children:t.jsxs("div",{style:Ce.modal,onClick:u=>u.stopPropagation(),children:[t.jsxs("div",{style:Ce.modalHead,children:[t.jsxs("span",{style:Ce.modalTitle,children:["Update · ",c.ch.name]}),t.jsx("button",{onClick:()=>h(null),style:Ce.iconBtnPlain,children:t.jsx(De,{size:16})})]}),t.jsxs("div",{style:Ce.progressCur,children:["Current: ",t.jsx("b",{children:r(c.ch.completed)})," of ",r(c.ch.target)]}),t.jsxs("div",{style:Ce.modeRow,children:[t.jsx("button",{onClick:()=>h(u=>({...u,mode:"add"})),style:{...Ce.modeBtn,...c.mode==="add"?Ce.modeBtnOn:{}},children:"Add / subtract"}),t.jsx("button",{onClick:()=>h(u=>({...u,mode:"set"})),style:{...Ce.modeBtn,...c.mode==="set"?Ce.modeBtnOn:{}},children:"Set total"})]}),t.jsx("label",{style:Ce.label,children:c.mode==="set"?"New completed total":"Amount to add (use a negative number to subtract)"}),t.jsx("input",{autoFocus:!0,type:"number",inputMode:"decimal",value:c.amount,onChange:u=>h(j=>({...j,amount:u.target.value})),onKeyDown:u=>u.key==="Enter"&&b(),placeholder:"0",style:Ce.input}),!c.ch.allow_negative&&t.jsx("div",{style:Ce.progressHint,children:"Negative totals are blocked for this challenge. Enable “Allow negative progress” to permit them."}),t.jsxs("div",{style:Ce.modalActions,children:[t.jsx("button",{onClick:()=>h(null),style:Ce.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:b,disabled:c.amount===""||isNaN(parseFloat(c.amount)),style:{...Ce.saveBtn,...c.amount===""||isNaN(parseFloat(c.amount))?{opacity:.5,cursor:"not-allowed"}:{}},children:[t.jsx(He,{size:15})," Save"]})]})]})})]})}function $p({status:e}){const r={done:{label:"Completed",color:ta},failed:{label:"Missed",color:ao},active:{label:"In progress",color:"#3A7CA5"}},n=r[e]||r.active;return t.jsx("span",{style:{...Ce.badge,color:n.color,background:n.color+"1A",borderColor:n.color+"44"},children:n.label})}const Ce={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:780,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},statRow:{display:"flex",gap:10,marginBottom:14,flexWrap:"wrap"},statCard:{flex:1,minWidth:120,background:"var(--surface)",borderRadius:12,padding:"12px 14px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},statVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},addBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"none",background:gn,color:"#fff",padding:"10px 16px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginBottom:16},empty:{fontSize:13.5,color:"var(--text-3)",textAlign:"center",padding:"40px 0",background:"var(--surface)",borderRadius:16,border:"1px dashed var(--border)"},list:{display:"flex",flexDirection:"column",gap:14},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardFailed:{opacity:.72},cardTop:{display:"flex",alignItems:"center",gap:10},num:{fontSize:12,fontWeight:800,color:"var(--text-3)",fontFamily:"'Fraunces',Georgia,serif",flexShrink:0},name:{fontSize:15.5,fontWeight:700,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},nameMobile:{whiteSpace:"normal",overflow:"visible",textOverflow:"clip",wordBreak:"break-word",lineHeight:1.25},badgeRow:{marginTop:6},comment:{fontSize:12,color:"var(--text-3)",marginTop:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},badge:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:20,border:"1px solid",flexShrink:0,whiteSpace:"nowrap"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},barWrap:{marginTop:14},barTrack:{height:14,background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:8,overflow:"hidden",display:"flex"},barFill:{height:"100%",borderRadius:7,transition:"width 0.3s"},barMetaRow:{display:"flex",alignItems:"baseline",gap:8,marginTop:6},completed:{fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},barPct:{fontSize:12,fontWeight:700,color:"var(--text-2)"},target:{fontSize:12,color:"var(--text-3)",marginLeft:"auto"},chips:{display:"flex",gap:7,flexWrap:"wrap",marginTop:12},chip:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:600,color:"var(--text-2)",border:"1px solid var(--border)",borderRadius:20,padding:"4px 10px"},chipReward:{color:gn,borderColor:gn+"55",background:gn+"12"},actions:{marginTop:12},progressBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 14px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:460,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:4},grid2:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},toggleRow:{display:"flex",alignItems:"flex-start",gap:9,marginTop:14,cursor:"pointer"},checkbox:{width:17,height:17,marginTop:1,accentColor:gn,cursor:"pointer",flexShrink:0},toggleLabel:{display:"block",fontSize:13,fontWeight:700},toggleHint:{display:"block",fontSize:11.5,color:"var(--text-3)",marginTop:2},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:ta,color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},progressCur:{fontSize:13,color:"var(--text-2)",marginBottom:12},progressHint:{fontSize:11.5,color:"var(--text-3)",marginTop:6},modeRow:{display:"flex",gap:6,marginBottom:8},modeBtn:{flex:1,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 10px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modeBtnOn:{background:gn,color:"#fff",borderColor:gn}},Mi="#8268B0",Zi="#4C9A6B",K1=e=>e?new Date(e+"T00:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"",Q1=()=>({id:null,wish:"",cost:"",note:"",link:""});function q1(){const e=Jn(),r=w=>Or(w,e.code),[n,o]=g.useState([]),[i,s]=g.useState(!1),[l,a]=g.useState(null),d=g.useCallback(()=>{E.getBucket().then(w=>{o(Array.isArray(w)?w:[]),s(!0)}).catch(()=>s(!0))},[]);g.useEffect(()=>{d()},[d]);const c=g.useMemo(()=>{const w=n.filter(p=>!p.fulfilled);return{total:n.length,fulfilled:n.filter(p=>p.fulfilled).length,openCost:w.reduce((p,b)=>p+(b.cost||0),0)}},[n]),h=()=>a(Q1()),f=w=>a({id:w.id,wish:w.wish,cost:String(w.cost??""),note:w.note||"",link:w.link||""}),m=async()=>{const w=l.wish.trim();if(!w)return;const p={wish:w,cost:parseFloat(l.cost)||0,note:l.note.trim(),link:l.link.trim()};l.id?await E.updateBucketWish(l.id,p):await E.createBucketWish(p),a(null),d()},I=async w=>{window.confirm(`Delete "${w.wish}" from your bucket list?`)&&(await E.deleteBucketWish(w.id),d())},B=async w=>{await E.updateBucketWish(w.id,{fulfilled:!w.fulfilled}),d()},z=async(w,p)=>{const b=w+p;if(b<0||b>=n.length)return;const u=[...n];[u[w],u[b]]=[u[b],u[w]],o(u),await E.arrangeBucket(u.map(j=>j.id)).catch(()=>{}),d()};return t.jsxs("div",{style:Ve.page,children:[t.jsxs("div",{style:Ve.head,children:[t.jsx("div",{style:Ve.eyebrow,children:"Anvil · Bucket List"}),t.jsx("h1",{style:Ve.h1,children:"Bucket List"}),t.jsx("div",{style:Ve.subhead,children:"The materialistic wishes you want to fulfil, big or small — ordered by what matters most."})]}),t.jsxs("div",{style:Ve.statRow,children:[t.jsxs("div",{style:Ve.statCard,children:[t.jsx("div",{style:Ve.statVal,children:c.total}),t.jsx("div",{style:Ve.statLbl,children:"Wishes"})]}),t.jsxs("div",{style:Ve.statCard,children:[t.jsx("div",{style:{...Ve.statVal,color:Zi},children:c.fulfilled}),t.jsx("div",{style:Ve.statLbl,children:"Fulfilled"})]}),t.jsxs("div",{style:Ve.statCard,children:[t.jsx("div",{style:{...Ve.statVal,color:Mi},children:r(c.openCost)}),t.jsx("div",{style:Ve.statLbl,children:"Still wished"})]})]}),t.jsxs("button",{onClick:h,style:Ve.addBtn,children:[t.jsx(lt,{size:16})," New wish"]}),n.length===0?t.jsx("div",{style:Ve.empty,children:i?"No wishes yet. Add the first thing you'd love to have.":"Loading…"}):t.jsx("div",{style:Ve.list,children:n.map((w,p)=>t.jsxs("div",{style:{...Ve.card,...w.fulfilled?Ve.cardDone:{}},children:[t.jsxs("div",{style:Ve.reorderCol,children:[t.jsx("button",{onClick:()=>z(p,-1),disabled:p===0,style:{...Ve.reorderBtn,...p===0?Ve.reorderOff:{}},title:"Higher priority",children:t.jsx(va,{size:14})}),t.jsx("span",{style:Ve.rank,children:p+1}),t.jsx("button",{onClick:()=>z(p,1),disabled:p===n.length-1,style:{...Ve.reorderBtn,...p===n.length-1?Ve.reorderOff:{}},title:"Lower priority",children:t.jsx(So,{size:14})})]}),t.jsxs("div",{style:Ve.body,children:[t.jsxs("div",{style:Ve.topRow,children:[t.jsx("span",{style:{...Ve.wishName,...w.fulfilled?Ve.wishNameDone:{}},children:w.wish}),t.jsx("span",{style:Ve.cost,children:r(w.cost)})]}),w.note&&t.jsx("div",{style:Ve.note,children:w.note}),t.jsxs("div",{style:Ve.metaRow,children:[w.fulfilled&&t.jsxs("span",{style:Ve.doneBadge,children:[t.jsx(zg,{size:11})," Fulfilled",w.fulfilled_date?` · ${K1(w.fulfilled_date)}`:""]}),w.link&&t.jsxs("a",{href:w.link,target:"_blank",rel:"noreferrer",style:Ve.link,children:[t.jsx(cc,{size:11})," Link"]})]})]}),t.jsxs("div",{style:Ve.actions,children:[t.jsxs("button",{onClick:()=>B(w),style:{...Ve.pill,...w.fulfilled?{}:{color:Zi,borderColor:Zi+"66"}},title:w.fulfilled?"Mark as not fulfilled":"Mark fulfilled",children:[t.jsx(He,{size:13})," ",w.fulfilled?"Undo":"Fulfilled"]}),t.jsx("button",{onClick:()=>f(w),style:Ve.iconBtn,title:"Edit",children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:()=>I(w),style:Ve.iconBtn,title:"Delete",children:t.jsx(De,{size:14})})]})]},w.id))}),t.jsx("div",{style:Ve.footNote,children:"Enable “Fulfil from bucket list” in the Rewards screen to spend your pending reward on these wishes."}),l&&t.jsx("div",{style:Ve.overlay,onClick:()=>a(null),children:t.jsxs("div",{style:Ve.modal,onClick:w=>w.stopPropagation(),children:[t.jsxs("div",{style:Ve.modalHead,children:[t.jsx("span",{style:Ve.modalTitle,children:l.id?"Edit wish":"New wish"}),t.jsx("button",{onClick:()=>a(null),style:Ve.iconBtnPlain,children:t.jsx(De,{size:16})})]}),t.jsx("label",{style:Ve.label,children:"Wish *"}),t.jsx("input",{autoFocus:!0,value:l.wish,onChange:w=>a(p=>({...p,wish:w.target.value})),placeholder:"e.g. PlayStation 5, trip to Japan",style:Ve.input}),t.jsx("label",{style:Ve.label,children:"Cost"}),t.jsx("input",{type:"number",inputMode:"decimal",value:l.cost,onChange:w=>a(p=>({...p,cost:w.target.value})),placeholder:"0",style:Ve.input}),t.jsx("label",{style:Ve.label,children:"Link (optional)"}),t.jsx("input",{value:l.link,onChange:w=>a(p=>({...p,link:w.target.value})),placeholder:"https://…",style:Ve.input}),t.jsx("label",{style:Ve.label,children:"Note (optional)"}),t.jsx("input",{value:l.note,onChange:w=>a(p=>({...p,note:w.target.value})),placeholder:"colour, model, why you want it…",style:Ve.input}),t.jsxs("div",{style:Ve.modalActions,children:[t.jsx("button",{onClick:()=>a(null),style:Ve.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:m,disabled:!l.wish.trim(),style:{...Ve.saveBtn,...l.wish.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",l.id?"Save":"Add wish"]})]})]})})]})}const Ve={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:720,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},statRow:{display:"flex",gap:10,marginBottom:14,flexWrap:"wrap"},statCard:{flex:1,minWidth:110,background:"var(--surface)",borderRadius:12,padding:"12px 14px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},statVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},addBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"none",background:Mi,color:"#fff",padding:"10px 16px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginBottom:16},empty:{fontSize:13.5,color:"var(--text-3)",textAlign:"center",padding:"40px 0",background:"var(--surface)",borderRadius:16,border:"1px dashed var(--border)"},list:{display:"flex",flexDirection:"column",gap:10},card:{display:"flex",gap:12,alignItems:"stretch",background:"var(--surface)",borderRadius:14,padding:"12px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardDone:{opacity:.7},reorderCol:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:2,flexShrink:0},reorderBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:24,height:20,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center",padding:0},reorderOff:{opacity:.3,cursor:"not-allowed"},rank:{fontSize:12,fontWeight:800,color:"var(--text-3)",fontFamily:"'Fraunces',Georgia,serif",padding:"1px 0"},body:{flex:1,minWidth:0},topRow:{display:"flex",justifyContent:"space-between",gap:10,alignItems:"baseline"},wishName:{fontSize:15,fontWeight:700,minWidth:0,wordBreak:"break-word"},wishNameDone:{textDecoration:"line-through",color:"var(--text-3)"},cost:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:Mi,flexShrink:0,whiteSpace:"nowrap"},note:{fontSize:12.5,color:"var(--text-3)",marginTop:3},metaRow:{display:"flex",gap:8,flexWrap:"wrap",marginTop:7,alignItems:"center"},doneBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11,fontWeight:700,color:Zi,background:Zi+"1A",borderRadius:20,padding:"3px 9px"},link:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:700,color:Mi,textDecoration:"none"},actions:{display:"flex",flexDirection:"column",gap:6,alignItems:"flex-end",justifyContent:"center",flexShrink:0},pill:{display:"inline-flex",alignItems:"center",gap:4,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 10px",borderRadius:8,fontSize:11.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",whiteSpace:"nowrap"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:26,height:26,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},footNote:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",marginTop:18,fontStyle:"italic"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:4},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:Mi,color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Ji="#3A7CA5",_t="#4C9A6B",zt="#C2536B",ra=[{id:"swing",label:"Swing",color:"#8268B0"},{id:"fno",label:"FnO",color:"#C9772E"},{id:"intraday",label:"Intraday",color:"#3A7CA5"}],al=e=>ra.find(r=>r.id===e)||ra[0],X1=new Set(["fno","intraday"]),Pp=e=>X1.has(e),Nm=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,dl=Nm(new Date),Z1=e=>new Date(e+"T00:00").toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"}),Np=e=>e?new Date(e+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"—",rr=e=>e===""||e===null||e===void 0||isNaN(parseFloat(e))?0:parseFloat(e),fd=(e,r)=>{const n=rr(e.qty);return r==="profit"?Math.abs(rr(e.tgt_price)-rr(e.entry_price))*n:-Math.abs(rr(e.sl_price)-rr(e.entry_price))*n};function J1(e,r,n,o){const i=rr(e.entry_price),s=rr(e.sl_price),l=rr(e.tgt_price),a=rr(e.qty),d=e.direction==="short";if(!e.instrument.trim())return"Enter the instrument.";if(i<=0||s<=0||l<=0||a<=0)return"Entry, SL, target and quantity must all be greater than zero.";if(d){if(s<=i)return"For a short, stop loss must be greater than the entry price (CMP).";if(l>=i)return"For a short, target must be less than the entry price (CMP)."}else{if(s>=i)return"Stop loss must be less than the entry price (CMP).";if(l<=i)return"Target must be greater than the entry price (CMP)."}const c=Math.abs(i-s),h=Math.abs(l-i),f=r.capital||0;if(r.rr>0&&h<r.rr*c-1e-9){const I=d?i-r.rr*c:i+r.rr*c;return`Risk:reward must be ≥ 1:${r.rr}. Target must be ${d?"at most":"at least"} ${I.toLocaleString()}.`}if(r.risk_pct>0&&f>0){const I=f*r.risk_pct/100,B=c*a;if(B>I+1e-9)return`This risks ${o(B)} — over your ${r.risk_pct}% limit of ${o(I)}. Reduce qty or tighten SL.`}const m=(r.diversification||{})[e.kind]||0;if(m>0){if(f>0){const I=f/m,B=i*a;if(B>I+1e-9)return`Position value ${o(B)} exceeds the diversification cap ${o(I)} (capital ÷ ${m}).`}if(n>=m)return`You already hold ${n} open ${e.kind} trade(s); diversification allows ${m}.`}return""}function e2(e=760){const[r,n]=g.useState(()=>window.innerWidth<e);return g.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const t2=e=>({id:null,kind:"swing",direction:"long",instrument:"",purchase_date:e,entry_price:"",sl_price:"",tgt_price:"",qty:"",note:""});function r2(){const e=e2(),r=Jn(),n=D=>js(D,r.code),[o,i]=g.useState([]),[s,l]=g.useState({}),[a,d]=g.useState(0),[c,h]=g.useState(0),[f,m]=g.useState(0),[I,B]=g.useState({capital:0,risk_pct:0,rr:0,diversification:{swing:0,fno:0,intraday:0}}),[z,w]=g.useState(!1),[p,b]=g.useState(dl),[u,j]=g.useState(()=>{const D=new Date;return new Date(D.getFullYear(),D.getMonth(),1)}),[x,T]=g.useState(null),[R,k]=g.useState(null),[y,K]=g.useState(""),q=g.useCallback(()=>{E.getTrades().then(D=>{i(D.entries),l(D.learnings||{}),d(D.capital||0),h(D.net_pl||0),m(D.current||0),D.rules&&B(D.rules),w(!0)}).catch(()=>w(!0))},[]);g.useEffect(()=>{q()},[q]),g.useEffect(()=>{K(s[p]||"")},[p,s]);const oe=g.useMemo(()=>o.filter(D=>D.status==="open"),[o]),L=g.useMemo(()=>o.filter(D=>D.status!=="open"),[o]),he=g.useMemo(()=>{if(!x)return"";const D=oe.filter(v=>v.kind===x.kind&&v.id!==x.id).length;return J1(x,I,D,n)},[x,I,oe,r.code]),Se=g.useMemo(()=>{const D={};return L.forEach(v=>{D[v.date]=(D[v.date]||0)+(Number(v.pl)||0)}),D},[L]),ue=L.filter(D=>D.date===p),ke=Se[p]||0,se=ke>0?"positive":ke<0?"negative":"neutral",U=g.useMemo(()=>{const D=u,v=(D.getDay()+6)%7,re=new Date(D.getFullYear(),D.getMonth()+1,0).getDate(),F=[];for(let ce=0;ce<v;ce++)F.push(null);for(let ce=1;ce<=re;ce++){const ye=Nm(new Date(D.getFullYear(),D.getMonth(),ce)),We=Se[ye],qe=!!s[ye];F.push({date:ye,day:ce,pl:We,hasLearning:qe,has:We!==void 0||qe})}return F},[u,Se,s]),de=D=>j(v=>new Date(v.getFullYear(),v.getMonth()+D,1)),X=u.toLocaleDateString("en-US",{month:"long",year:"numeric"}),S=(D="swing")=>T({...t2(p),kind:D}),W=D=>T({id:D.id,kind:D.kind,direction:D.direction||"long",instrument:D.instrument,purchase_date:D.purchase_date||D.date,entry_price:D.entry_price??"",sl_price:D.sl_price??"",tgt_price:D.tgt_price??"",qty:D.qty??"",note:D.note||""}),O=D=>T(v=>({...v,kind:D,direction:Pp(D)?v.direction:"long"})),N=async()=>{if(he)return;const D={kind:x.kind,direction:x.direction,instrument:x.instrument.trim(),purchase_date:x.purchase_date,entry_price:rr(x.entry_price),sl_price:rr(x.sl_price),tgt_price:rr(x.tgt_price),qty:rr(x.qty),note:x.note.trim()};try{x.id?await E.updateTradeEntry(x.id,D):await E.createTradeEntry(D),T(null),q()}catch(v){window.alert(v.message||"Could not save this trade.")}},le=async D=>{window.confirm("Delete this trade?")&&(await E.deleteTradeEntry(D.id),q())},ge=(D,v)=>k({trade:D,outcome:v,date:D.kind==="intraday"&&D.purchase_date||dl}),Ae=async()=>{try{await E.bookTradeEntry(R.trade.id,R.outcome,R.date),k(null),q()}catch(D){window.alert(D.message||"Could not book this trade.")}},Y=async D=>{await E.reopenTradeEntry(D.id),q()},ae=async()=>{await E.setTradeLearning(p,y),q()},_=(s[p]||"")!==y,ne=f>=a,xe=c>0?_t:c<0?zt:"var(--text)";return t.jsxs("div",{style:Q.page,children:[t.jsx("div",{style:Q.head,children:t.jsxs("div",{children:[t.jsx("div",{style:Q.eyebrow,children:"Anvil · Trading Journal"}),t.jsx("h1",{style:Q.h1,children:"Trading Journal"}),t.jsx("div",{style:Q.subhead,children:"Open trades with your entry, SL & target — book profit/loss and P/L is calculated for you."})]})}),t.jsxs("div",{style:Q.capStrip,children:[t.jsxs("div",{style:Q.capBox,children:[t.jsxs("div",{style:Q.capLabel,children:[t.jsx(ka,{size:13})," Starting capital"]}),t.jsx("div",{style:Q.capVal,children:n(a)}),t.jsx("div",{style:Q.capHint,children:"Set in Settings → Trading"})]}),t.jsxs("div",{style:Q.capBox,children:[t.jsxs("div",{style:Q.capLabel,children:[t.jsx(lm,{size:13})," Net P/L (booked)"]}),t.jsxs("div",{style:{...Q.capVal,color:xe},children:[c>=0?"+":"",n(c)]}),t.jsxs("div",{style:Q.capHint,children:[L.length," booked · ",oe.length," open"]})]}),t.jsxs("div",{style:{...Q.capBox,...Q.capBoxMain,borderColor:ne?_t:zt},children:[t.jsxs("div",{style:Q.capLabel,children:[ne?t.jsx(Qi,{size:13,color:_t}):t.jsx(Yn,{size:13,color:zt})," Current balance"]}),t.jsx("div",{style:{...Q.capValBig,color:ne?_t:zt},children:n(f)}),t.jsx("div",{style:Q.capHint,children:ne?"Above starting capital":"Below starting capital"})]})]}),t.jsxs("div",{style:Q.card,children:[t.jsxs("div",{style:Q.cardTitleRow,children:[t.jsxs("div",{children:[t.jsxs("div",{style:Q.cardTitle,children:[t.jsx(am,{size:15,color:Ji})," Open trades"]}),t.jsx("div",{style:Q.cardSub,children:"Positions you haven't booked yet — mark profit or loss when you exit."})]}),t.jsx("div",{style:Q.addRow,children:ra.map(D=>t.jsxs("button",{onClick:()=>S(D.id),style:{...Q.addKindBtn,color:D.color,borderColor:D.color+"55",background:D.color+"12"},children:[t.jsx(lt,{size:14})," ",D.label]},D.id))})]}),oe.length>0?t.jsx("div",{style:Q.openScroll,children:oe.map(D=>{const v=al(D.kind);return t.jsxs("div",{style:Q.openRow,children:[t.jsx("span",{style:{...Q.kindTag,background:v.color+"1A",color:v.color},children:v.label}),t.jsxs("div",{style:Q.openBody,children:[t.jsxs("div",{style:Q.openTop,children:[t.jsxs("span",{style:Q.tradeInstr,children:[D.instrument||"—",t.jsx(Op,{direction:D.direction})]}),t.jsx("span",{style:Q.openQty,children:D.qty?`${D.qty} qty`:""})]}),t.jsxs("div",{style:Q.openMeta,children:[t.jsxs("span",{style:Q.metaPill,children:["Bought ",Np(D.purchase_date)]}),D.entry_price?t.jsxs("span",{style:Q.metaPill,children:["Entry ",D.entry_price]}):null,D.sl_price?t.jsxs("span",{style:{...Q.metaPill,color:zt},children:["SL ",D.sl_price]}):null,D.tgt_price?t.jsxs("span",{style:{...Q.metaPill,color:_t},children:["TGT ",D.tgt_price]}):null]})]}),t.jsxs("div",{style:Q.bookBtns,children:[t.jsxs("button",{onClick:()=>ge(D,"profit"),style:{...Q.bookBtn,background:_t},children:[t.jsx(Qi,{size:13})," Profit"]}),t.jsxs("button",{onClick:()=>ge(D,"loss"),style:{...Q.bookBtn,background:zt},children:[t.jsx(Yn,{size:13})," Loss"]}),t.jsx("button",{onClick:()=>W(D),style:Q.iconGhost,title:"Edit",children:t.jsx(vt,{size:13})}),t.jsx("button",{onClick:()=>le(D),style:Q.iconGhost,title:"Delete",children:t.jsx(ai,{size:13})})]})]},D.id)})}):t.jsx("div",{style:Q.noTrades,children:z?"No open trades. Add one with the buttons above.":"Loading…"})]}),t.jsxs("div",{style:{...Q.cols,gridTemplateColumns:e?"1fr":"320px 1fr"},children:[t.jsxs("div",{style:Q.card,children:[t.jsxs("div",{style:Q.calHead,children:[t.jsx("button",{onClick:()=>de(-1),style:Q.calNav,children:t.jsx(Sn,{size:16})}),t.jsx("span",{style:Q.calTitle,children:X}),t.jsx("button",{onClick:()=>de(1),style:Q.calNav,children:t.jsx(nn,{size:16})})]}),t.jsxs("div",{style:Q.calGrid,children:[["M","T","W","T","F","S","S"].map((D,v)=>t.jsx("div",{style:Q.calDow,children:D},v)),U.map((D,v)=>D===null?t.jsx("div",{},v):t.jsxs("button",{onClick:()=>b(D.date),style:{...Q.calCell,...D.date===p?Q.calCellOn:{},...D.date===dl&&D.date!==p?Q.calCellToday:{}},children:[t.jsx("span",{children:D.day}),D.pl!==void 0&&D.pl!==0&&t.jsx("span",{style:{...Q.calDot,background:D.date===p?"#fff":D.pl>0?_t:zt}}),D.pl===void 0&&D.hasLearning&&t.jsx("span",{style:{...Q.calDot,background:D.date===p?"#fff":"var(--text-3)"}})]},D.date))]}),t.jsxs("div",{style:Q.calLegend,children:[t.jsxs("span",{children:[t.jsx("span",{style:{...Q.legDot,background:_t}})," Profit"]}),t.jsxs("span",{children:[t.jsx("span",{style:{...Q.legDot,background:zt}})," Loss"]}),t.jsxs("span",{children:[t.jsx("span",{style:{...Q.legDot,background:"var(--text-3)"}})," Learning only"]})]})]}),t.jsxs("div",{children:[t.jsxs("div",{style:Q.card,children:[t.jsxs("div",{style:Q.cardTitleRow,children:[t.jsxs("div",{children:[t.jsx("div",{style:Q.cardTitle,children:Z1(p)}),t.jsxs("div",{style:Q.cardSub,children:[ue.length," booked trade",ue.length===1?"":"s"," this day"]})]}),t.jsxs("div",{style:Q.dayPLWrap,children:[t.jsx("span",{style:{...Q.sentiment,...se==="positive"?{background:_t+"1A",color:_t}:se==="negative"?{background:zt+"1A",color:zt}:{background:"var(--hover)",color:"var(--text-3)"}},children:se==="positive"?"Positive day":se==="negative"?"Negative day":"No trades"}),t.jsxs("span",{style:{...Q.dayPL,color:ke>0?_t:ke<0?zt:"var(--text-2)"},children:[ke>=0?"+":"",n(ke)]})]})]}),ue.length>0?t.jsx("div",{style:Q.tradeList,children:ue.map(D=>{const v=al(D.kind),re=(Number(D.pl)||0)>=0;return t.jsxs("div",{style:Q.tradeRow,children:[t.jsx("span",{style:{...Q.kindTag,background:v.color+"1A",color:v.color},children:v.label}),t.jsxs("div",{style:Q.tradeBody,children:[t.jsxs("div",{style:Q.tradeTop,children:[t.jsxs("span",{style:Q.tradeInstr,children:[D.instrument||"—",t.jsx(Op,{direction:D.direction})]}),t.jsxs("span",{style:{...Q.tradePL,color:re?_t:zt},children:[re?"+":"",n(Number(D.pl)||0)]})]}),t.jsxs("div",{style:Q.tradeMeta,children:[D.entry_price?t.jsxs("span",{style:Q.metaPill,children:["Entry ",D.entry_price]}):null,D.sl_price?t.jsxs("span",{style:Q.metaPill,children:["SL ",D.sl_price]}):null,D.tgt_price?t.jsxs("span",{style:Q.metaPill,children:["TGT ",D.tgt_price]}):null,D.qty?t.jsxs("span",{style:Q.metaPill,children:[D.qty," qty"]}):null,D.purchase_date&&D.purchase_date!==D.date&&t.jsxs("span",{style:Q.metaPill,children:["Bought ",Np(D.purchase_date)]}),D.note&&t.jsx("span",{style:Q.tradeNote,children:D.note})]})]}),t.jsx("button",{onClick:()=>Y(D),style:Q.iconGhost,title:"Reopen",children:t.jsx(wm,{size:13})}),t.jsx("button",{onClick:()=>le(D),style:Q.iconGhost,title:"Delete",children:t.jsx(ai,{size:13})})]},D.id)})}):t.jsx("div",{style:Q.noTrades,children:"No trades booked on this day — you can still record a learning below."})]}),t.jsxs("div",{style:Q.card,children:[t.jsxs("div",{style:Q.cardTitle,children:[t.jsx(ya,{size:15,color:Ji})," Daily learning"]}),t.jsx("textarea",{value:y,onChange:D=>K(D.target.value),placeholder:"What did you learn today? Mistakes, what worked, discipline notes…",style:Q.learnArea}),t.jsxs("button",{onClick:ae,disabled:!_,style:{...Q.saveBtn,..._?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:14})," Save learning"]})]})]})]}),x&&(()=>{const D=al(x.kind),v=x.direction==="short",re=v?zt:_t,F=fd(x,"profit"),ce=fd(x,"loss");return t.jsx("div",{style:Q.overlay,onClick:()=>T(null),children:t.jsxs("div",{style:Q.sheet,onClick:ye=>ye.stopPropagation(),children:[t.jsxs("div",{style:{...Q.sheetHead,background:`linear-gradient(135deg, ${D.color}, ${re})`},children:[t.jsxs("div",{style:Q.sheetHeadRow,children:[t.jsx("span",{style:Q.sheetKicker,children:x.id?"Edit position":"New position"}),t.jsx("button",{onClick:()=>T(null),style:Q.sheetClose,children:t.jsx(De,{size:16})})]}),t.jsx("div",{style:Q.sheetTitle,children:x.instrument||"Open trade"}),t.jsxs("div",{style:Q.sheetChips,children:[t.jsx("span",{style:Q.sheetChip,children:D.label}),t.jsx("span",{style:Q.sheetChip,children:v?"Short ▼":"Long ▲"}),rr(x.qty)>0&&t.jsxs("span",{style:Q.sheetChip,children:[rr(x.qty)," qty"]})]})]}),t.jsxs("div",{style:Q.sheetBody,children:[t.jsx("label",{style:Q.fLabel,children:"Type"}),t.jsx("div",{style:Q.seg,children:ra.map(ye=>t.jsx("button",{type:"button",onClick:()=>O(ye.id),style:{...Q.segBtn,...x.kind===ye.id?{...Q.segBtnOn,background:ye.color}:{}},children:ye.label},ye.id))}),Pp(x.kind)&&t.jsxs(t.Fragment,{children:[t.jsx("label",{style:Q.fLabel,children:"Direction"}),t.jsxs("div",{style:Q.seg,children:[t.jsxs("button",{type:"button",onClick:()=>T(ye=>({...ye,direction:"long"})),style:{...Q.segBtn,...v?{}:{...Q.segBtnOn,background:_t}},children:[t.jsx(Qi,{size:14})," Long"]}),t.jsxs("button",{type:"button",onClick:()=>T(ye=>({...ye,direction:"short"})),style:{...Q.segBtn,...v?{...Q.segBtnOn,background:zt}:{}},children:[t.jsx(Yn,{size:14})," Short"]})]}),t.jsx("div",{style:Q.dirHint,children:v?"Short — profit when price falls. SL sits above CMP, target below.":"Long — profit when price rises. SL sits below CMP, target above."})]}),t.jsx("label",{style:Q.fLabel,children:"Instrument"}),t.jsx("input",{autoFocus:!0,value:x.instrument,onChange:ye=>T(We=>({...We,instrument:ye.target.value.toUpperCase()})),placeholder:"e.g. NIFTY 22000 CE, RELIANCE",style:{...Q.field,textTransform:"uppercase"}}),t.jsxs("div",{style:Q.grid2,children:[t.jsxs("div",{children:[t.jsx("label",{style:Q.fLabel,children:"Entry (CMP)"}),t.jsx("input",{type:"number",inputMode:"decimal",value:x.entry_price,onChange:ye=>T(We=>({...We,entry_price:ye.target.value})),placeholder:"0",style:Q.field})]}),t.jsxs("div",{children:[t.jsx("label",{style:Q.fLabel,children:"Quantity"}),t.jsx("input",{type:"number",inputMode:"decimal",value:x.qty,onChange:ye=>T(We=>({...We,qty:ye.target.value})),placeholder:"0",style:Q.field})]})]}),t.jsxs("div",{style:Q.grid2,children:[t.jsxs("div",{children:[t.jsxs("label",{style:{...Q.fLabel,color:zt},children:["Stop loss",v?" (above)":" (below)"]}),t.jsx("input",{type:"number",inputMode:"decimal",value:x.sl_price,onChange:ye=>T(We=>({...We,sl_price:ye.target.value})),placeholder:"0",style:{...Q.field,borderColor:zt+"55"}})]}),t.jsxs("div",{children:[t.jsxs("label",{style:{...Q.fLabel,color:_t},children:["Target",v?" (below)":" (above)"]}),t.jsx("input",{type:"number",inputMode:"decimal",value:x.tgt_price,onChange:ye=>T(We=>({...We,tgt_price:ye.target.value})),placeholder:"0",style:{...Q.field,borderColor:_t+"55"}})]})]}),t.jsxs("div",{style:Q.preview2,children:[t.jsxs("div",{style:{...Q.previewCell,background:_t+"12"},children:[t.jsx("span",{style:Q.previewLbl,children:"If target hit"}),t.jsxs("span",{style:{...Q.previewVal,color:_t},children:["+",n(F)]})]}),t.jsxs("div",{style:{...Q.previewCell,background:zt+"12"},children:[t.jsx("span",{style:Q.previewLbl,children:"If SL hit"}),t.jsx("span",{style:{...Q.previewVal,color:zt},children:n(ce)})]})]}),t.jsx("label",{style:Q.fLabel,children:"Purchase date"}),t.jsx("input",{type:"date",value:x.purchase_date,onChange:ye=>T(We=>({...We,purchase_date:ye.target.value})),style:Q.field}),t.jsx("label",{style:Q.fLabel,children:"Note (optional)"}),t.jsx("input",{value:x.note,onChange:ye=>T(We=>({...We,note:ye.target.value})),placeholder:"reason, setup, emotion…",style:Q.field}),he?t.jsx("div",{style:Q.errBanner,children:he}):t.jsx(n2,{rules:I,kind:x.kind,money:n})]}),t.jsxs("div",{style:Q.sheetFoot,children:[t.jsx("button",{onClick:()=>T(null),style:Q.ghostBtn,children:"Cancel"}),t.jsxs("button",{onClick:N,disabled:!!he,style:{...Q.primaryBtn,background:re,...he?{opacity:.45,cursor:"not-allowed"}:{}},children:[t.jsx(He,{size:16})," ",x.id?"Save changes":"Open trade"]})]})]})})})(),R&&(()=>{const D=R.outcome==="profit",v=D?_t:zt,re=R.trade,F=(re.direction||"long")==="short",ce=al(re.kind),ye=D?F?`(Entry ${re.entry_price||0} − TGT ${re.tgt_price||0}) × ${re.qty||0}`:`(TGT ${re.tgt_price||0} − Entry ${re.entry_price||0}) × ${re.qty||0}`:F?`(SL ${re.sl_price||0} − Entry ${re.entry_price||0}) × ${re.qty||0}`:`(Entry ${re.entry_price||0} − SL ${re.sl_price||0}) × ${re.qty||0}`;return t.jsx("div",{style:Q.overlay,onClick:()=>k(null),children:t.jsxs("div",{style:Q.sheet,onClick:We=>We.stopPropagation(),children:[t.jsxs("div",{style:{...Q.sheetHead,background:`linear-gradient(135deg, ${v}, ${v}CC)`},children:[t.jsxs("div",{style:Q.sheetHeadRow,children:[t.jsx("span",{style:Q.sheetKicker,children:D?"Book profit":"Book loss"}),t.jsx("button",{onClick:()=>k(null),style:Q.sheetClose,children:t.jsx(De,{size:16})})]}),t.jsx("div",{style:Q.sheetTitle,children:re.instrument||"—"}),t.jsxs("div",{style:Q.sheetChips,children:[t.jsx("span",{style:Q.sheetChip,children:ce.label}),t.jsx("span",{style:Q.sheetChip,children:F?"Short":"Long"})]})]}),t.jsxs("div",{style:Q.sheetBody,children:[t.jsxs("div",{style:Q.bookHero,children:[t.jsx("span",{style:Q.bookHeroLbl,children:D?"Realized profit":"Realized loss"}),t.jsxs("span",{style:{...Q.bookHeroVal,color:v},children:[D?"+":"",n(fd(re,R.outcome))]}),t.jsx("span",{style:Q.bookHeroMeta,children:ye})]}),re.kind==="intraday"?t.jsxs(t.Fragment,{children:[t.jsx("label",{style:Q.fLabel,children:"Outcome date · locked to purchase day"}),t.jsx("input",{type:"date",value:R.date,min:re.purchase_date,max:re.purchase_date,disabled:!0,style:{...Q.field,opacity:.7,cursor:"not-allowed"}}),t.jsx("div",{style:Q.dirHint,children:"Intraday trades are squared off the same day they're bought."})]}):t.jsxs(t.Fragment,{children:[t.jsx("label",{style:Q.fLabel,children:"Outcome date · colours this day"}),t.jsx("input",{type:"date",value:R.date,onChange:We=>k(qe=>({...qe,date:We.target.value})),style:Q.field})]})]}),t.jsxs("div",{style:Q.sheetFoot,children:[t.jsx("button",{onClick:()=>k(null),style:Q.ghostBtn,children:"Cancel"}),t.jsxs("button",{onClick:Ae,disabled:!R.date,style:{...Q.primaryBtn,background:v,...R.date?{}:{opacity:.45,cursor:"not-allowed"}},children:[t.jsx(He,{size:16})," Book ",R.outcome]})]})]})})})()]})}function Op({direction:e}){return(e||"long")!=="short"?null:t.jsxs("span",{style:Q.dirBadge,children:[t.jsx(Yn,{size:10})," SHORT"]})}function n2({rules:e,kind:r,money:n}){const o=[],i=e.capital||0;e.rr>0&&o.push(`Min risk:reward 1:${e.rr}`),e.risk_pct>0&&i>0&&o.push(`Max risk ${n(i*e.risk_pct/100)} (${e.risk_pct}%)`);const s=(e.diversification||{})[r]||0;return s>0&&(i>0&&o.push(`Max position ${n(i/s)}`),o.push(`Max ${s} open ${r}`)),o.length?t.jsxs("div",{style:Q.rulesHint,children:["Rules · ",o.join(" · ")]}):null}const Q={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:1100,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},capStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:12,marginBottom:18},capBox:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:"13px 16px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},capBoxMain:{borderWidth:2},capLabel:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,fontWeight:600,color:"var(--text-2)"},capVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.1},capValBig:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.1},capHint:{fontSize:10.5,color:"var(--text-3)",marginTop:4},cols:{display:"grid",gap:16,alignItems:"start"},card:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{width:30,height:30,borderRadius:8,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:4},calDow:{fontSize:10,fontWeight:700,color:"var(--text-3)",textAlign:"center",padding:"2px 0"},calCell:{position:"relative",aspectRatio:"1",border:"1px solid transparent",borderRadius:8,background:"var(--bg)",color:"var(--text-2)",fontSize:12.5,fontWeight:600,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},calCellOn:{background:Ji,color:"#fff"},calCellToday:{borderColor:Ji},calDot:{position:"absolute",bottom:4,width:5,height:5,borderRadius:"50%"},calLegend:{display:"flex",gap:12,flexWrap:"wrap",marginTop:12,fontSize:10.5,color:"var(--text-3)",fontWeight:600},legDot:{display:"inline-block",width:7,height:7,borderRadius:"50%",marginRight:4},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:10,marginBottom:12,flexWrap:"wrap"},cardTitle:{display:"flex",alignItems:"center",gap:6,fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:12,color:"var(--text-3)",marginTop:2},dayPLWrap:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:4},sentiment:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:10},dayPL:{fontSize:17,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},addRow:{display:"flex",gap:8,flexWrap:"wrap"},addKindBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid",borderRadius:9,padding:"7px 12px",fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},openScroll:{display:"flex",flexDirection:"column",gap:8,maxHeight:320,overflowY:"auto",paddingRight:2},openRow:{display:"flex",alignItems:"flex-start",gap:9,padding:"10px 11px",background:"var(--bg)",border:"1px solid var(--border)",borderRadius:10,flexWrap:"wrap"},openBody:{flex:1,minWidth:140},openTop:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"baseline"},openQty:{fontSize:11.5,fontWeight:700,color:"var(--text-3)",flexShrink:0},openMeta:{display:"flex",gap:6,flexWrap:"wrap",marginTop:5,alignItems:"center"},bookBtns:{display:"flex",gap:6,alignItems:"center",flexShrink:0},bookBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",color:"#fff",padding:"6px 11px",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},tradeList:{display:"flex",flexDirection:"column",gap:8},tradeRow:{display:"flex",alignItems:"flex-start",gap:9,padding:"9px 10px",background:"var(--bg)",border:"1px solid var(--border)",borderRadius:10},kindTag:{fontSize:10.5,fontWeight:800,padding:"3px 8px",borderRadius:7,flexShrink:0,marginTop:1},tradeBody:{flex:1,minWidth:0},tradeTop:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"baseline"},tradeInstr:{fontSize:13.5,fontWeight:700,wordBreak:"break-word"},tradePL:{fontSize:13.5,fontWeight:800,flexShrink:0},tradeMeta:{display:"flex",gap:6,flexWrap:"wrap",marginTop:5,alignItems:"center"},metaPill:{fontSize:10.5,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",borderRadius:6,padding:"2px 7px"},tradeNote:{fontSize:11.5,color:"var(--text-3)",fontStyle:"italic"},iconGhost:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",flexShrink:0},noTrades:{fontSize:12.5,color:"var(--text-3)",fontStyle:"italic",textAlign:"center",padding:"16px 8px",border:"1px dashed var(--border)",borderRadius:8},learnArea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"11px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--bg)",outline:"none",minHeight:90,resize:"vertical",lineHeight:1.55,marginTop:8},saveBtn:{display:"inline-flex",alignItems:"center",gap:6,marginTop:10,border:"none",background:Ji,color:"#fff",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},dirBadge:{display:"inline-flex",alignItems:"center",gap:2,fontSize:9.5,fontWeight:800,letterSpacing:"0.03em",color:zt,background:zt+"1A",borderRadius:5,padding:"1px 5px",marginLeft:6,verticalAlign:"middle"},overlay:{position:"fixed",inset:0,background:"rgba(20,18,15,0.55)",backdropFilter:"blur(3px)",zIndex:200,display:"grid",placeItems:"center",padding:16},sheet:{background:"var(--surface)",borderRadius:20,width:"100%",maxWidth:460,maxHeight:"92vh",display:"flex",flexDirection:"column",overflow:"hidden",boxShadow:"0 24px 64px rgba(0,0,0,0.34)",boxSizing:"border-box"},sheetHead:{padding:"16px 18px 18px",color:"#fff"},sheetHeadRow:{display:"flex",justifyContent:"space-between",alignItems:"center"},sheetKicker:{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",opacity:.9},sheetClose:{border:"none",background:"rgba(255,255,255,0.2)",color:"#fff",width:30,height:30,borderRadius:9,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},sheetTitle:{fontSize:22,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:8,wordBreak:"break-word",lineHeight:1.15},sheetChips:{display:"flex",gap:6,flexWrap:"wrap",marginTop:10},sheetChip:{fontSize:11,fontWeight:700,background:"rgba(255,255,255,0.22)",color:"#fff",borderRadius:20,padding:"3px 10px"},sheetBody:{padding:"16px 18px 6px",overflowY:"auto"},sheetFoot:{display:"flex",gap:10,padding:"14px 18px 16px",borderTop:"1px solid var(--border)",background:"var(--surface)"},fLabel:{display:"block",fontSize:11,fontWeight:700,color:"var(--text-2)",margin:"12px 0 5px",textTransform:"uppercase",letterSpacing:"0.05em"},field:{width:"100%",border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:14,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)"},grid2:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},seg:{display:"flex",gap:4,background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:4},segBtn:{flex:1,display:"inline-flex",alignItems:"center",justifyContent:"center",gap:5,border:"none",background:"none",color:"var(--text-2)",padding:"9px 0",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",transition:"background 0.12s"},segBtnOn:{color:"#fff",boxShadow:"0 2px 8px rgba(0,0,0,0.18)"},dirHint:{fontSize:11.5,color:"var(--text-3)",marginTop:7,lineHeight:1.4},preview2:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginTop:14},previewCell:{display:"flex",flexDirection:"column",gap:2,borderRadius:12,padding:"11px 13px"},previewLbl:{fontSize:11,fontWeight:600,color:"var(--text-2)"},previewVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},bookHero:{textAlign:"center",padding:"14px 0 6px"},bookHeroLbl:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em"},bookHeroVal:{display:"block",fontSize:34,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.05},bookHeroMeta:{display:"block",fontSize:11.5,color:"var(--text-3)",marginTop:6},errBanner:{marginTop:14,background:zt+"18",border:`1px solid ${zt}55`,color:zt,borderRadius:10,padding:"10px 12px",fontSize:12.5,fontWeight:600,lineHeight:1.4},rulesHint:{marginTop:14,fontSize:11.5,color:"var(--text-3)",fontWeight:600,lineHeight:1.4},ghostBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"11px 18px",borderRadius:11,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},primaryBtn:{flex:1,display:"inline-flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",color:"#fff",padding:"11px 18px",borderRadius:11,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},zc=[{id:"sandstone",name:"Sandstone",description:"Warm editorial light — the original Anvil look.",dark:!1,swatch:["#F7F6F3","#4C9A6B","#26241F"],vars:{"--bg":"#F7F6F3","--surface":"#FFFFFF","--surface-2":"#FAFAF8","--hover":"#F2F1EC","--border":"#ECEAE3","--text":"#26241F","--text-2":"#6B675E","--text-3":"#9A968C","--accent":"#4C9A6B","--accent-strong":"#26241F","--accent-2":"#3A352C"}},{id:"midnight",name:"Midnight",description:"Deep low-glare dark mode for night owls and focus.",dark:!0,swatch:["#161513","#6FB58C","#ECEAE3"],vars:{"--bg":"#161513","--surface":"#211F1C","--surface-2":"#1B1A17","--hover":"#2B2924","--border":"#34312B","--text":"#ECEAE3","--text-2":"#B6B1A6","--text-3":"#8A857A","--accent":"#6FB58C","--accent-strong":"#2E6F4B","--accent-2":"#245C3E"}},{id:"blossom",name:"Blossom",description:"Soft rose & blush — gentle, warm, and feminine.",dark:!1,swatch:["#FFF5F8","#E0608E","#B23A6B"],vars:{"--bg":"#FFF5F8","--surface":"#FFFFFF","--surface-2":"#FFF0F4","--hover":"#FDE7EE","--border":"#F6D9E2","--text":"#3D2230","--text-2":"#7A5466","--text-3":"#B08799","--accent":"#E0608E","--accent-strong":"#B23A6B","--accent-2":"#9C2F5C"}},{id:"tide",name:"Tide",description:"Calm professional blues — clean and focused.",dark:!1,swatch:["#F1F6FA","#2E86C1","#1C4E73"],vars:{"--bg":"#F1F6FA","--surface":"#FFFFFF","--surface-2":"#ECF3F9","--hover":"#E2EEF6","--border":"#D5E3EE","--text":"#13283A","--text-2":"#4A6275","--text-3":"#8AA0B0","--accent":"#2E86C1","--accent-strong":"#1C4E73","--accent-2":"#163E5C"}},{id:"velocity",name:"Velocity",description:"High-energy sport — crisp slate with electric orange.",dark:!1,swatch:["#F4F5F7","#F4511E","#1F2A37"],vars:{"--bg":"#F4F5F7","--surface":"#FFFFFF","--surface-2":"#EEF0F3","--hover":"#E7EAEE","--border":"#DCE0E6","--text":"#18202B","--text-2":"#515B68","--text-3":"#8B95A1","--accent":"#F4511E","--accent-strong":"#1F2A37","--accent-2":"#16202B"}},{id:"evergreen",name:"Evergreen",description:"Earthy forest greens — grounded and natural.",dark:!1,swatch:["#F2F6F1","#3E8E52","#2A4A30"],vars:{"--bg":"#F2F6F1","--surface":"#FFFFFF","--surface-2":"#ECF2EA","--hover":"#E4EEE2","--border":"#D7E4D3","--text":"#1E2B20","--text-2":"#4F6151","--text-3":"#8AA08C","--accent":"#3E8E52","--accent-strong":"#2A4A30","--accent-2":"#213B26"}},{id:"amethyst",name:"Amethyst",description:"Premium purple & plum — elegant and refined.",dark:!1,swatch:["#F6F4FB","#7A4FE0","#3A2D5C"],vars:{"--bg":"#F6F4FB","--surface":"#FFFFFF","--surface-2":"#F1EDF9","--hover":"#EAE3F6","--border":"#DFD6F0","--text":"#241B36","--text-2":"#5A4E72","--text-3":"#9588AE","--accent":"#7A4FE0","--accent-strong":"#3A2D5C","--accent-2":"#2E2349"}}],Hp="sandstone",Om="anvil_theme",o2=e=>zc.find(r=>r.id===e)||zc[0];function Hm(){try{return localStorage.getItem(Om)||Hp}catch{return Hp}}function Li(e,r=!0){const n=o2(e),o=document.documentElement;Object.entries(n.vars).forEach(([s,l])=>o.style.setProperty(s,l)),o.style.colorScheme=n.dark?"dark":"light",o.setAttribute("data-theme",n.id);const i=document.querySelector('meta[name="theme-color"]');if(i&&i.setAttribute("content",n.vars["--surface"]),r)try{localStorage.setItem(Om,n.id)}catch{}return n.id}const i2=e=>e%10===1&&e!==11?"st":e%10===2&&e!==12?"nd":e%10===3&&e!==13?"rd":"th";function s2(e=560){const[r,n]=g.useState(()=>window.innerWidth<=e);return g.useEffect(()=>{const o=()=>n(window.innerWidth<=e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}function l2({screens:e,order:r,hidden:n,themeId:o,currency:i,monthStartDay:s,ticker:l,defaultScreen:a,onSetDefault:d,onSaveSidebar:c,onPreviewTheme:h,onCommitTheme:f,onSelectCurrency:m,onSelectMonthStartDay:I,onSaveTicker:B,onClose:z}){const[w,p]=g.useState("sidebar"),[b,u]=g.useState(()=>r.map(ie=>({id:ie,hidden:n.includes(ie)}))),[j,x]=g.useState(o),[T,R]=g.useState(""),[k,y]=g.useState(!1),[K,q]=g.useState(""),[oe,L]=g.useState(!1),[he,Se]=g.useState(""),[ue,ke]=g.useState(""),[se,U]=g.useState({swing:"",fno:"",intraday:""}),[de,X]=g.useState(!1),S=s2(),[W,O]=g.useState(!!(l!=null&&l.enabled)),[N,le]=g.useState(()=>{const ie=Array.isArray(l==null?void 0:l.statements)?l.statements.slice(0,5):[];return ie.length?ie:[""]}),[ge,Ae]=g.useState((l==null?void 0:l.speed)??60),[Y,ae]=g.useState((l==null?void 0:l.delay)??3),[_,ne]=g.useState(!1),xe=(ie,Me)=>le(Xe=>Xe.map((tt,bt)=>bt===ie?Me:tt)),D=()=>le(ie=>ie.length<5?[...ie,""]:ie),v=ie=>le(Me=>Me.length>1?Me.filter((Xe,tt)=>tt!==ie):Me),re=()=>{const ie=N.map(Me=>Me.trim()).filter(Boolean).slice(0,5);B({enabled:W,statements:ie,speed:Number(ge),delay:Number(Y)}),ne(!0),setTimeout(()=>ne(!1),1500)};g.useEffect(()=>{E.getSetting("golden_music").then(ie=>R((ie==null?void 0:ie.value)||"")).catch(()=>{})},[]);const F=()=>{E.setSetting("golden_music",T.trim()).then(()=>{y(!0),setTimeout(()=>y(!1),1500)}).catch(()=>{})};g.useEffect(()=>{E.getSetting("trading_capital").then(ie=>q((ie==null?void 0:ie.value)||"")).catch(()=>{})},[]);const ce=()=>{E.setSetting("trading_capital",String(parseFloat(K)||0)).then(()=>{L(!0),setTimeout(()=>L(!1),1500)}).catch(()=>{})};g.useEffect(()=>{E.getSetting("trading_risk_pct").then(ie=>Se((ie==null?void 0:ie.value)??"")).catch(()=>{}),E.getSetting("trading_rr").then(ie=>ke((ie==null?void 0:ie.value)??"")).catch(()=>{}),E.getSetting("trading_diversification").then(ie=>{const Me=(ie==null?void 0:ie.value)||{};U({swing:Me.swing??"",fno:Me.fno??"",intraday:Me.intraday??""})}).catch(()=>{})},[]);const ye=()=>{const ie={swing:parseInt(se.swing,10)||0,fno:parseInt(se.fno,10)||0,intraday:parseInt(se.intraday,10)||0};Promise.all([E.setSetting("trading_risk_pct",parseFloat(he)||0),E.setSetting("trading_rr",parseFloat(ue)||0),E.setSetting("trading_diversification",ie)]).then(()=>{X(!0),setTimeout(()=>X(!1),1500)}).catch(()=>{})},We=ie=>{x(ie),h(ie)},qe=b.filter(ie=>!ie.hidden).length,dt=(ie,Me)=>{const Xe=ie+Me;if(Xe<0||Xe>=b.length)return;const tt=[...b];[tt[ie],tt[Xe]]=[tt[Xe],tt[ie]],u(tt)},$e=ie=>{const Me=b[ie];if(!Me.hidden&&qe<=1)return;const Xe=[...b];Xe[ie]={...Me,hidden:!Me.hidden},u(Xe)},nt=()=>{c(b.map(ie=>ie.id),b.filter(ie=>ie.hidden).map(ie=>ie.id))},Ke=S?{...we.overlay,padding:0}:we.overlay,gt=S?{...we.modal,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"100%",borderRadius:0,border:"none"}:we.modal;return t.jsx("div",{style:Ke,onClick:z,children:t.jsxs("div",{style:gt,onClick:ie=>ie.stopPropagation(),children:[t.jsxs("div",{style:we.head,children:[t.jsx("div",{style:we.title,children:"Settings"}),t.jsx("button",{onClick:z,style:we.closeBtn,children:t.jsx(De,{size:18})})]}),t.jsxs("div",{style:we.tabs,children:[t.jsxs("button",{onClick:()=>p("sidebar"),style:{...we.tab,...w==="sidebar"?we.tabOn:{}},children:[t.jsx(e0,{size:15})," Configure sidebar"]}),t.jsxs("button",{onClick:()=>p("themes"),style:{...we.tab,...w==="themes"?we.tabOn:{}},children:[t.jsx(i0,{size:15})," Themes"]}),t.jsxs("button",{onClick:()=>p("currency"),style:{...we.tab,...w==="currency"?we.tabOn:{}},children:[t.jsx(Py,{size:15})," Monetary"]}),t.jsxs("button",{onClick:()=>p("music"),style:{...we.tab,...w==="music"?we.tabOn:{}},children:[t.jsx(Xl,{size:15})," Music"]}),t.jsxs("button",{onClick:()=>p("reminders"),style:{...we.tab,...w==="reminders"?we.tabOn:{}},children:[t.jsx(um,{size:15})," Reminders"]})]}),t.jsx("div",{style:we.body,children:w==="sidebar"?t.jsxs(t.Fragment,{children:[t.jsxs("p",{style:we.hint,children:["Reorder with the arrows, hide ones you don't use, and tap ",t.jsx(ys,{size:11,style:{verticalAlign:"-1px"}})," to set the screen that opens on launch."]}),t.jsx("div",{style:we.list,children:b.map((ie,Me)=>{const Xe=e[ie.id],tt=Xe.icon,bt=a===ie.id;return t.jsxs("div",{style:{...we.row,opacity:ie.hidden?.5:1,...bt?{borderColor:"var(--accent)"}:{}},children:[t.jsx("span",{style:we.rowNum,children:Me+1}),t.jsx(tt,{size:16}),t.jsxs("span",{style:we.rowLabel,children:[Xe.label,bt&&t.jsx("span",{style:we.defaultTag,children:"default"})]}),t.jsx("button",{onClick:()=>d(ie.id),title:bt?"Opens on launch":"Set as default",style:{...we.iconBtn,...bt?{color:"var(--accent)"}:{}},children:t.jsx(ys,{size:15})}),t.jsx("button",{onClick:()=>$e(Me),title:ie.hidden?"Show":"Hide",style:{...we.iconBtn,...ie.hidden?{}:{color:"var(--accent)"}},children:ie.hidden?t.jsx(Ql,{size:15}):t.jsx(fs,{size:15})}),t.jsx("button",{onClick:()=>dt(Me,-1),disabled:Me===0,style:{...we.iconBtn,opacity:Me===0?.3:1},children:t.jsx(va,{size:15})}),t.jsx("button",{onClick:()=>dt(Me,1),disabled:Me===b.length-1,style:{...we.iconBtn,opacity:Me===b.length-1?.3:1},children:t.jsx(So,{size:15})})]},ie.id)})}),t.jsxs("button",{onClick:nt,style:we.saveBtn,children:[t.jsx(He,{size:15})," Save sidebar"]})]}):w==="currency"?t.jsxs(t.Fragment,{children:[t.jsx("p",{style:we.hint,children:"Choose the currency used across Wallet and Worth. Applies instantly."}),t.jsx("div",{style:we.list,children:mc.map(ie=>{const Me=ie.code===i;return t.jsxs("button",{onClick:()=>m(ie.code),style:{...we.row,cursor:"pointer",textAlign:"left",width:"100%",...Me?{borderColor:"var(--accent)"}:{}},children:[t.jsx("span",{style:we.curSymbol,children:ie.symbol}),t.jsxs("span",{style:we.rowLabel,children:[ie.label," ",t.jsx("span",{style:we.curCode,children:ie.code})]}),Me&&t.jsx("span",{style:we.themeCheck,children:t.jsx(He,{size:13})})]},ie.code)})}),t.jsx("div",{style:we.subDivider}),t.jsx("div",{style:we.fieldLbl,children:"Month starts on"}),t.jsx("p",{style:we.hint,children:'If your salary lands on the 25th, set this to 25 — Wallet and Expenses will treat each "month" as running 25th to 24th instead of calendar month.'}),t.jsx("select",{value:s,onChange:ie=>I(Number(ie.target.value)),style:we.musicInput,children:Array.from({length:28},(ie,Me)=>Me+1).map(ie=>t.jsx("option",{value:ie,children:ie===1?"1st (calendar month)":`${ie}${i2(ie)}`},ie))}),t.jsx("div",{style:we.subDivider}),t.jsx("div",{style:we.fieldLbl,children:"Trading capital"}),t.jsxs("p",{style:we.hint,children:["Your starting capital for the ",t.jsx("b",{children:"Trading Journal"}),". The page shows this plus your all-time net P/L — green when in profit, red when below."]}),t.jsx("input",{type:"number",value:K,onChange:ie=>q(ie.target.value),placeholder:"e.g. 100000",style:we.musicInput}),t.jsxs("button",{onClick:ce,style:we.saveBtn,children:[t.jsx(He,{size:15})," ",oe?"Saved":"Save capital"]}),t.jsx("div",{style:we.subDivider}),t.jsx("div",{style:we.fieldLbl,children:"Trading discipline rules"}),t.jsx("p",{style:we.hint,children:"Guardrails enforced when opening a trade. A trade that breaks any rule can't be saved. Leave a field at 0 (or blank) to disable that rule."}),t.jsx("label",{style:we.miniLbl,children:"Risk per trade (%)"}),t.jsx("p",{style:we.hint,children:"Max loss on any single trade as a percent of capital. e.g. 2% of 100000 caps loss at 2000 — quantity or SL that risks more is blocked."}),t.jsx("input",{type:"number",step:"0.1",min:"0",value:he,onChange:ie=>Se(ie.target.value),placeholder:"e.g. 2",style:we.musicInput}),t.jsx("label",{style:we.miniLbl,children:"Risk : Reward (1 : R)"}),t.jsx("p",{style:we.hint,children:"Minimum reward multiple of risk. Enter 3 for 1:3 — if SL is 5 below entry, target must be at least 15 above entry."}),t.jsx("input",{type:"number",step:"0.5",min:"0",value:ue,onChange:ie=>ke(ie.target.value),placeholder:"e.g. 3",style:we.musicInput}),t.jsx("label",{style:we.miniLbl,children:"Diversification (max open trades per section)"}),t.jsx("p",{style:we.hint,children:"Limits how many open trades you may hold per section, and caps each position's value at capital ÷ this number (e.g. 5 → max 20000 per trade on 100000 capital)."}),t.jsx("div",{style:we.divGrid,children:[["swing","Swing"],["fno","FnO"],["intraday","Intraday"]].map(([ie,Me])=>t.jsxs("div",{style:we.divCell,children:[t.jsx("span",{style:we.divLbl,children:Me}),t.jsx("input",{type:"number",min:"0",step:"1",value:se[ie],onChange:Xe=>U(tt=>({...tt,[ie]:Xe.target.value})),placeholder:"0",style:we.divInput})]},ie))}),t.jsxs("button",{onClick:ye,style:we.saveBtn,children:[t.jsx(He,{size:15})," ",de?"Saved":"Save rules"]})]}):w==="music"?t.jsxs(t.Fragment,{children:[t.jsxs("p",{style:we.hint,children:["Paste a YouTube link to play softly while you write in the ",t.jsx("b",{children:"Golden Book"}),". It plays only on that screen (audio only)."]}),t.jsx("input",{value:T,onChange:ie=>R(ie.target.value),placeholder:"https://youtube.com/watch?v=…",style:we.musicInput}),t.jsxs("button",{onClick:F,style:we.saveBtn,children:[t.jsx(He,{size:15})," ",k?"Saved":"Save music"]})]}):w==="reminders"?t.jsxs(t.Fragment,{children:[t.jsx("p",{style:we.hint,children:"Up to 5 reminders scroll across the top of every screen — a gentle nudge toward your goals."}),t.jsxs("button",{onClick:()=>O(ie=>!ie),style:{...we.row,cursor:"pointer",width:"100%",justifyContent:"space-between",...W?{borderColor:"var(--accent)"}:{}},children:[t.jsx("span",{style:we.rowLabel,children:"Show reminder banner"}),t.jsx("span",{style:{...we.switch,...W?we.switchOn:{}},children:W?"On":"Off"})]}),t.jsxs("div",{style:{marginTop:14},children:[t.jsxs("div",{style:we.fieldLbl,children:["Reminders (",N.filter(ie=>ie.trim()).length,"/5)"]}),N.map((ie,Me)=>t.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[t.jsx("input",{value:ie,onChange:Xe=>xe(Me,Xe.target.value),maxLength:120,placeholder:`Reminder ${Me+1}`,style:{...we.musicInput,marginBottom:0}}),t.jsx("button",{onClick:()=>v(Me),style:we.iconBtn,title:"Remove",children:t.jsx(De,{size:15})})]},Me)),N.length<5&&t.jsxs("button",{onClick:D,style:we.addRowBtn,children:[t.jsx(lt,{size:14})," Add reminder"]})]}),t.jsxs("div",{style:{marginTop:16},children:[t.jsxs("div",{style:we.sliderHead,children:[t.jsx("span",{style:we.fieldLbl,children:"Scroll speed"}),t.jsxs("span",{style:we.sliderVal,children:[ge," px/s"]})]}),t.jsx("input",{type:"range",min:20,max:200,step:5,value:ge,onChange:ie=>Ae(ie.target.value),style:we.range})]}),t.jsxs("div",{style:{marginTop:12},children:[t.jsxs("div",{style:we.sliderHead,children:[t.jsx("span",{style:we.fieldLbl,children:"Delay between reminders"}),t.jsxs("span",{style:we.sliderVal,children:[Y,"s"]})]}),t.jsx("input",{type:"range",min:0,max:15,step:1,value:Y,onChange:ie=>ae(ie.target.value),style:we.range})]}),t.jsxs("button",{onClick:re,style:{...we.saveBtn,marginTop:16},children:[t.jsx(He,{size:15})," ",_?"Saved":"Save reminders"]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("p",{style:we.hint,children:["Tap a theme to preview it live, then hit ",t.jsx("b",{children:"Apply theme"})," to keep it."]}),t.jsx("div",{style:we.themeGrid,children:zc.map(ie=>{const Me=ie.id===j;return t.jsxs("button",{onClick:()=>We(ie.id),style:{...we.themeCard,...Me?we.themeCardOn:{}},children:[t.jsxs("div",{style:we.swatchRow,children:[ie.swatch.map((Xe,tt)=>t.jsx("span",{style:{...we.swatch,background:Xe}},tt)),Me&&t.jsx("span",{style:we.themeCheck,children:t.jsx(He,{size:13})})]}),t.jsxs("div",{style:we.themeName,children:[ie.name,ie.dark?t.jsx("span",{style:we.darkTag,children:"Dark"}):null]}),t.jsx("div",{style:we.themeDesc,children:ie.description})]},ie.id)})}),t.jsxs("button",{onClick:()=>f(j),disabled:j===o,style:{...we.saveBtn,...j===o?we.saveBtnDisabled:{}},children:[t.jsx(He,{size:15})," ",j===o?"Theme applied":"Apply theme"]})]})})]})})}const we={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,width:460,maxWidth:"100%",maxHeight:"88vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",overflow:"hidden"},head:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 18px",borderBottom:"1px solid var(--border)",flexShrink:0},title:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},tabs:{display:"flex",flexWrap:"wrap",gap:6,padding:"12px 18px 0",flexShrink:0},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"transparent"},body:{padding:"16px 18px 20px",overflowY:"auto",overflowX:"hidden",flex:1,minHeight:0},hint:{fontSize:12.5,color:"var(--text-3)",lineHeight:1.5,margin:"0 0 14px"},list:{display:"flex",flexDirection:"column",gap:6},row:{display:"flex",alignItems:"center",gap:10,padding:"9px 11px",background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:9},rowNum:{fontSize:11,fontWeight:700,color:"var(--text-3)",width:16,textAlign:"center"},rowLabel:{flex:1,fontSize:13.5,fontWeight:500,display:"flex",alignItems:"center",gap:7},defaultTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"1px 6px",borderRadius:6},curSymbol:{width:22,textAlign:"center",fontSize:15,fontWeight:700,color:"var(--text)"},curCode:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginLeft:4},iconBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},saveBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",marginTop:16,border:"none",background:"var(--accent)",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer"},saveBtnDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"default"},musicInput:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:12},switch:{fontSize:12,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:20,padding:"3px 12px",minWidth:44,textAlign:"center"},switchOn:{background:"var(--accent)",color:"#fff"},fieldLbl:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},miniLbl:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text)",margin:"12px 0 2px"},subDivider:{height:1,background:"var(--border)",margin:"18px 0 14px"},divGrid:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8,marginBottom:12},divCell:{display:"flex",flexDirection:"column",gap:4},divLbl:{fontSize:11,fontWeight:700,color:"var(--text-3)"},divInput:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"8px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},addRowBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},sliderHead:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},sliderVal:{fontSize:12,fontWeight:700,color:"var(--accent)"},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},themeGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},themeCard:{textAlign:"left",border:"2px solid var(--border)",background:"var(--surface-2)",borderRadius:12,padding:12,cursor:"pointer",display:"flex",flexDirection:"column",gap:6,outline:"none",WebkitTapHighlightColor:"transparent",transition:"border-color .15s ease, box-shadow .15s ease"},themeCardOn:{borderColor:"var(--accent)",boxShadow:"0 0 0 3px color-mix(in srgb, var(--accent) 25%, transparent)"},swatchRow:{display:"flex",alignItems:"center",gap:5,position:"relative"},swatch:{width:22,height:22,borderRadius:"50%",border:"1px solid rgba(0,0,0,0.08)"},themeCheck:{marginLeft:"auto",width:20,height:20,borderRadius:"50%",background:"var(--accent)",color:"#fff",display:"grid",placeItems:"center"},themeName:{fontSize:14,fontWeight:700,display:"flex",alignItems:"center",gap:6},darkTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",background:"var(--hover)",color:"var(--text-2)",padding:"1px 6px",borderRadius:6},themeDesc:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4}},a2=`
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
`;function d2({statements:e,speed:r=60,delay:n=3}){const o=g.useMemo(()=>(e||[]).map(d=>(d||"").trim()).filter(Boolean).slice(0,5),[e]),[i,s]=g.useState(0),l=g.useRef(null),a=g.useRef(null);return g.useEffect(()=>{s(0)},[o]),g.useEffect(()=>{if(!o.length)return;const d=l.current,c=a.current;if(!d||!c)return;const h=d.offsetWidth,f=c.offsetWidth,m=Math.max(10,Number(r)||60),I=Math.max(2500,(h+f)/m*1e3),B=c.animate([{transform:`translateX(${h}px)`},{transform:`translateX(${-f}px)`}],{duration:I,easing:"linear",fill:"both"});let z;const w=()=>{z=setTimeout(()=>s(p=>(p+1)%o.length),Math.max(0,Number(n)||0)*1e3)};return B.addEventListener("finish",w),()=>{B.cancel(),B.removeEventListener("finish",w),clearTimeout(z)}},[i,o,r,n]),o.length?t.jsxs("div",{style:Fo.bar,"aria-label":"Reminders",children:[t.jsx("style",{children:a2}),t.jsx("div",{className:"anvil-tick-glow",style:Fo.icon,children:t.jsx("span",{className:"anvil-tick-pulse",style:{display:"grid",placeItems:"center"},children:t.jsx(um,{size:15})})}),t.jsxs("div",{ref:l,style:Fo.viewport,children:[t.jsx("span",{className:"anvil-tick-shimmer",style:Fo.shimmer}),t.jsx("div",{className:"anvil-tick-float",style:Fo.floatWrap,children:t.jsx("div",{ref:a,style:Fo.text,children:o[i%o.length]},i)})]})]}):null}const Fo={bar:{display:"flex",alignItems:"center",height:36,flexShrink:0,overflow:"hidden",borderBottom:"1px solid var(--border)",background:"color-mix(in srgb, var(--accent) 12%, var(--surface))"},icon:{display:"grid",placeItems:"center",width:42,height:"100%",flexShrink:0,color:"#fff",background:"var(--accent)",zIndex:2},viewport:{position:"relative",flex:1,height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},shimmer:{position:"absolute",top:0,bottom:0,left:0,width:"22%",background:"linear-gradient(100deg, transparent, color-mix(in srgb, var(--accent) 22%, transparent), transparent)",pointerEvents:"none",zIndex:1},floatWrap:{display:"inline-flex",alignItems:"center",willChange:"transform"},text:{whiteSpace:"nowrap",fontSize:13.5,fontWeight:700,color:"var(--text)",letterSpacing:"0.01em",willChange:"transform",paddingLeft:4}};Li(Hm(),!1);const Tc="anvil_default_screen",Gp=()=>{try{return localStorage.getItem(Tc)}catch{return null}},co={dashboard:{label:"Dashboard",icon:Jy,component:D0},kickstart:{label:"Kickstart",icon:fm,component:h1},golden:{label:"Golden Book",icon:Oy,component:f1},habits:{label:"Habits",icon:uc,component:X0},quadrant:{label:"Quadrant",icon:Sg,component:L0},goals:{label:"Goals",icon:Ig,component:U0},grove:{label:"Grove",icon:bc,component:Pv},worth:{label:"Rewards",icon:Xy,component:Yv},vault:{label:"Wallet",icon:ka,component:o1},expenses:{label:"Expenses",icon:Zl,component:O1},trading:{label:"Trading Journal",icon:My,component:r2},journal:{label:"Journal",icon:ya,component:cv},revision:{label:"Revision",icon:xm,component:wv},affirmations:{label:"Affirmations",icon:Co,component:zv},skills:{label:"Skills",icon:dm,component:uv},spiritual:{label:"Spiritual",icon:Ki,component:hv},mindscape:{label:"Mindscape",icon:cm,component:z1},achievements:{label:"Achievements",icon:Yr,component:M1},challenges:{label:"Challenges",icon:x0,component:Y1},bucket:{label:"Bucket List",icon:r0,component:q1},delight:{label:"Delights",icon:zg,component:P1}},Gm=["dashboard","kickstart","golden","habits","quadrant","goals","grove","journal","revision","affirmations","skills","spiritual","mindscape","achievements","challenges","bucket","delight","worth","vault","expenses","trading"];function cl(e){const r=Gm.filter(i=>co[i]),o=[...(Array.isArray(e)?e:[]).filter(i=>co[i])];return r.forEach(i=>{o.includes(i)||o.push(i)}),o}function c2(){const[e,r]=g.useState(()=>window.innerWidth<720);return g.useEffect(()=>{const n=()=>r(window.innerWidth<720);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}function g2(){const[e,r]=g.useState(()=>{const N=Gp();return N&&co[N]?N:"habits"}),[n,o]=g.useState(()=>Gp()||"habits"),[i,s]=g.useState(!1),[l,a]=g.useState(null),[d,c]=g.useState(!1),[h,f]=g.useState(!1),[m,I]=g.useState(Hm()),[B,z]=g.useState(di()),[w,p]=g.useState(kc()),[b,u]=g.useState({enabled:!1,statements:[],speed:60,delay:3}),[j,x]=g.useState(()=>cl(Gm)),[T,R]=g.useState([]),k=c2(),y=g.useRef(e);g.useEffect(()=>{y.current=e},[e]),g.useEffect(()=>{if(!l)return;const N=10,le=new Set(["kickstart","mindscape"]),ge=setInterval(()=>{const Ae=y.current;!document.hidden&&Ae&&!le.has(Ae)&&E.addScreenTime(Ae,N).catch(()=>{})},N*1e3);return()=>clearInterval(ge)},[l]),g.useEffect(()=>{let N=!1;const le=()=>{hc(),a(null)};window.addEventListener("anvil-unauthorized",le);const ge=new URLSearchParams(window.location.search).get("login");return ge&&(T0(ge),window.history.replaceState({},"",window.location.pathname)),Sm()?E.me().then(Ae=>{N||a(Ae)}).catch(()=>{}).finally(()=>{N||c(!0)}):c(!0),()=>{N=!0,window.removeEventListener("anvil-unauthorized",le)}},[]),g.useEffect(()=>{l&&(E.getSetting("theme").then(N=>{N!=null&&N.value&&I(Li(N.value))}).catch(()=>{}),E.getSetting("currency").then(N=>{N!=null&&N.value&&z(Uu(N.value))}).catch(()=>{}),E.getSetting("month_start_day").then(N=>{N!=null&&N.value&&p(yp(N.value))}).catch(()=>{}),E.getSetting("ticker").then(N=>{N!=null&&N.value&&u(le=>({...le,...N.value}))}).catch(()=>{}),E.getSetting("default_screen").then(N=>{if(N!=null&&N.value&&co[N.value]){o(N.value);try{localStorage.setItem(Tc,N.value)}catch{}}}).catch(()=>{}),E.getSetting("sidebar_order").then(N=>{Array.isArray(N==null?void 0:N.value)&&x(cl(N.value))}).catch(()=>{}),E.getSetting("sidebar_hidden").then(N=>{Array.isArray(N==null?void 0:N.value)&&R(N.value)}).catch(()=>{}))},[l]);function K(N){r(N),s(!1)}const q=()=>{hc(),a(null)},oe=N=>{Li(N,!1)},L=N=>{I(Li(N)),E.setSetting("theme",N).catch(()=>{}),f(!1)},he=()=>{Li(m,!1),f(!1)},Se=N=>{z(Uu(N)),E.setSetting("currency",N).catch(()=>{})},ue=N=>{p(yp(N)),E.setSetting("month_start_day",Number(N)).catch(()=>{})},ke=N=>{u(N),E.setSetting("ticker",N).catch(()=>{})},se=N=>{o(N);try{localStorage.setItem(Tc,N)}catch{}E.setSetting("default_screen",N).catch(()=>{})},U=(N,le)=>{if(x(cl(N)),R(le),f(!1),E.setSetting("sidebar_order",N).catch(()=>{}),E.setSetting("sidebar_hidden",le).catch(()=>{}),le.includes(e)){const ge=cl(N).find(Ae=>!le.includes(Ae));ge&&r(ge)}},de=j.filter(N=>!T.includes(N));if(!d)return t.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:"'Inter',system-ui,sans-serif",color:"var(--text-3)"},children:"Loading…"});if(!l)return t.jsx(Qv,{});const X=co[e],S=X.component,W=()=>t.jsx("div",{style:yt.navItems,children:de.map(N=>{const le=co[N];if(!le)return null;const ge=le.icon,Ae=e===N;return t.jsxs("button",{onClick:()=>K(N),title:le.label,style:{...yt.navItem,...Ae?yt.navItemOn:{}},children:[t.jsx(ge,{size:18}),t.jsx("span",{style:yt.navLabel,children:le.label})]},N)})}),O=()=>t.jsxs("div",{style:yt.footerWrap,children:[t.jsxs("button",{onClick:()=>f(!0),style:yt.settingsBtn,title:"Settings",children:[t.jsx(vm,{size:17}),t.jsx("span",{children:"Settings"})]}),t.jsxs("div",{style:yt.userFooter,children:[t.jsxs("div",{style:yt.userInfo,children:[t.jsx("div",{style:yt.userAvatar,children:(l.name||l.email||"?").charAt(0).toUpperCase()}),t.jsxs("div",{style:{minWidth:0},children:[t.jsx("div",{style:yt.userName,children:l.name||"You"}),t.jsx("div",{style:yt.userEmail,children:l.email})]})]}),t.jsx("button",{onClick:q,style:yt.logoutBtn,title:"Sign out",children:t.jsx(n0,{size:16})})]})]});return t.jsxs("div",{style:yt.shell,children:[!k&&t.jsxs("nav",{style:yt.nav,children:[t.jsxs("div",{style:yt.brand,children:[t.jsx("div",{style:yt.brandLogo,children:"B"}),t.jsx("span",{style:yt.brandName,children:"Anvil"})]}),t.jsx(W,{}),t.jsx(O,{})]}),k&&i&&t.jsx("div",{style:yt.overlay,onClick:()=>s(!1),children:t.jsxs("nav",{style:yt.drawer,onClick:N=>N.stopPropagation(),children:[t.jsxs("div",{style:yt.drawerHeader,children:[t.jsxs("div",{style:yt.brand,children:[t.jsx("div",{style:yt.brandLogo,children:"B"}),t.jsx("span",{style:yt.brandName,children:"Anvil"})]}),t.jsx("button",{style:yt.closeBtn,onClick:()=>s(!1),children:t.jsx(De,{size:20})})]}),t.jsx("div",{style:yt.drawerNav,children:t.jsx(W,{})}),t.jsx(O,{})]})}),t.jsxs("div",{style:yt.content,children:[k&&t.jsxs("div",{style:yt.topBar,children:[t.jsx("button",{style:yt.menuBtn,onClick:()=>s(!0),children:t.jsx(Cg,{size:22})}),t.jsx("span",{style:yt.topBarTitle,children:X.label}),t.jsx("div",{style:{width:38}})]}),b.enabled&&t.jsx(d2,{statements:b.statements,speed:b.speed,delay:b.delay}),t.jsx("main",{style:yt.main,children:t.jsx(S,{onNavigate:K})})]}),h&&t.jsx(l2,{screens:co,order:j,hidden:T,themeId:m,currency:B,monthStartDay:w,ticker:b,defaultScreen:n,onSetDefault:se,onSaveSidebar:U,onPreviewTheme:oe,onCommitTheme:L,onSelectCurrency:Se,onSelectMonthStartDay:ue,onSaveTicker:ke,onClose:he})]})}const yt={shell:{display:"flex",height:"100vh",overflow:"hidden",fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)"},nav:{width:200,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column",padding:"20px 10px",gap:2,overflowY:"auto",overflowX:"hidden"},brand:{display:"flex",alignItems:"center",gap:9,padding:"6px 10px 20px",borderBottom:"1px solid var(--border)",marginBottom:8},brandLogo:{width:30,height:30,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:14,fontWeight:800,fontFamily:"'Fraunces', Georgia, serif",flexShrink:0},brandName:{fontSize:16,fontWeight:700,letterSpacing:"-0.01em",color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},navItems:{display:"flex",flexDirection:"column",gap:2},navItem:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},navItemOn:{background:"var(--hover)",color:"var(--text)",fontWeight:700},footerWrap:{marginTop:"auto",paddingTop:8,flexShrink:0},settingsBtn:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},userFooter:{marginTop:4,paddingTop:12,borderTop:"1px solid var(--border)",display:"flex",alignItems:"center",gap:8},userInfo:{display:"flex",alignItems:"center",gap:8,flex:1,minWidth:0},userAvatar:{width:30,height:30,borderRadius:"50%",background:"#8268B0",color:"#fff",display:"grid",placeItems:"center",fontSize:13,fontWeight:700,flexShrink:0},userName:{fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},userEmail:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logoutBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",padding:7,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},navLabel:{flex:1},content:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},main:{flex:1,overflowY:"auto",overflowX:"hidden"},topBar:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"var(--surface)",borderBottom:"1px solid var(--border)",flexShrink:0},topBarTitle:{fontSize:16,fontWeight:700,color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},menuBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text)",padding:8,borderRadius:8,display:"grid",placeItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:100,display:"flex"},drawer:{width:220,background:"var(--surface)",height:"100%",display:"flex",flexDirection:"column",padding:"16px 10px",gap:2,boxShadow:"4px 0 24px rgba(0,0,0,0.12)",overflow:"hidden"},drawerNav:{flex:1,minHeight:0,overflowY:"auto",overflowX:"hidden"},drawerHeader:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:4,flexShrink:0},closeBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",padding:6,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0}};nm(document.getElementById("root")).render(t.jsx(g.StrictMode,{children:t.jsx(g2,{})}));
