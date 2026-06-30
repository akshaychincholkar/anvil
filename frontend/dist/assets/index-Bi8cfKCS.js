(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var ap={exports:{}},Cl={},dp={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oi=Symbol.for("react.element"),sh=Symbol.for("react.portal"),lh=Symbol.for("react.fragment"),ah=Symbol.for("react.strict_mode"),dh=Symbol.for("react.profiler"),ch=Symbol.for("react.provider"),gh=Symbol.for("react.context"),uh=Symbol.for("react.forward_ref"),ph=Symbol.for("react.suspense"),bh=Symbol.for("react.memo"),mh=Symbol.for("react.lazy"),og=Symbol.iterator;function hh(e){return e===null||typeof e!="object"?null:(e=og&&e[og]||e["@@iterator"],typeof e=="function"?e:null)}var cp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gp=Object.assign,up={};function Lo(e,t,n){this.props=e,this.context=t,this.refs=up,this.updater=n||cp}Lo.prototype.isReactComponent={};Lo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Lo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function pp(){}pp.prototype=Lo.prototype;function Vd(e,t,n){this.props=e,this.context=t,this.refs=up,this.updater=n||cp}var Yd=Vd.prototype=new pp;Yd.constructor=Vd;gp(Yd,Lo.prototype);Yd.isPureReactComponent=!0;var ig=Array.isArray,bp=Object.prototype.hasOwnProperty,Qd={current:null},mp={key:!0,ref:!0,__self:!0,__source:!0};function hp(e,t,n){var o,i={},s=null,l=null;if(t!=null)for(o in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(s=""+t.key),t)bp.call(t,o)&&!mp.hasOwnProperty(o)&&(i[o]=t[o]);var d=arguments.length-2;if(d===1)i.children=n;else if(1<d){for(var a=Array(d),g=0;g<d;g++)a[g]=arguments[g+2];i.children=a}if(e&&e.defaultProps)for(o in d=e.defaultProps,d)i[o]===void 0&&(i[o]=d[o]);return{$$typeof:Oi,type:e,key:s,ref:l,props:i,_owner:Qd.current}}function fh(e,t){return{$$typeof:Oi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Kd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Oi}function xh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var sg=/\/+/g;function Vl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?xh(""+e.key):t.toString(36)}function As(e,t,n,o,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Oi:case sh:l=!0}}if(l)return l=e,i=i(l),e=o===""?"."+Vl(l,0):o,ig(i)?(n="",e!=null&&(n=e.replace(sg,"$&/")+"/"),As(i,t,n,"",function(g){return g})):i!=null&&(Kd(i)&&(i=fh(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(sg,"$&/")+"/")+e)),t.push(i)),1;if(l=0,o=o===""?".":o+":",ig(e))for(var d=0;d<e.length;d++){s=e[d];var a=o+Vl(s,d);l+=As(s,t,n,a,i)}else if(a=hh(e),typeof a=="function")for(e=a.call(e),d=0;!(s=e.next()).done;)s=s.value,a=o+Vl(s,d++),l+=As(s,t,n,a,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Zi(e,t,n){if(e==null)return e;var o=[],i=0;return As(e,o,"","",function(s){return t.call(n,s,i++)}),o}function yh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ut={current:null},Rs={transition:null},vh={ReactCurrentDispatcher:Ut,ReactCurrentBatchConfig:Rs,ReactCurrentOwner:Qd};function fp(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:Zi,forEach:function(e,t,n){Zi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Zi(e,function(){t++}),t},toArray:function(e){return Zi(e,function(t){return t})||[]},only:function(e){if(!Kd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ye.Component=Lo;Ye.Fragment=lh;Ye.Profiler=dh;Ye.PureComponent=Vd;Ye.StrictMode=ah;Ye.Suspense=ph;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vh;Ye.act=fp;Ye.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=gp({},e.props),i=e.key,s=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,l=Qd.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var d=e.type.defaultProps;for(a in t)bp.call(t,a)&&!mp.hasOwnProperty(a)&&(o[a]=t[a]===void 0&&d!==void 0?d[a]:t[a])}var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){d=Array(a);for(var g=0;g<a;g++)d[g]=arguments[g+2];o.children=d}return{$$typeof:Oi,type:e.type,key:i,ref:s,props:o,_owner:l}};Ye.createContext=function(e){return e={$$typeof:gh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ch,_context:e},e.Consumer=e};Ye.createElement=hp;Ye.createFactory=function(e){var t=hp.bind(null,e);return t.type=e,t};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(e){return{$$typeof:uh,render:e}};Ye.isValidElement=Kd;Ye.lazy=function(e){return{$$typeof:mh,_payload:{_status:-1,_result:e},_init:yh}};Ye.memo=function(e,t){return{$$typeof:bh,type:e,compare:t===void 0?null:t}};Ye.startTransition=function(e){var t=Rs.transition;Rs.transition={};try{e()}finally{Rs.transition=t}};Ye.unstable_act=fp;Ye.useCallback=function(e,t){return Ut.current.useCallback(e,t)};Ye.useContext=function(e){return Ut.current.useContext(e)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(e){return Ut.current.useDeferredValue(e)};Ye.useEffect=function(e,t){return Ut.current.useEffect(e,t)};Ye.useId=function(){return Ut.current.useId()};Ye.useImperativeHandle=function(e,t,n){return Ut.current.useImperativeHandle(e,t,n)};Ye.useInsertionEffect=function(e,t){return Ut.current.useInsertionEffect(e,t)};Ye.useLayoutEffect=function(e,t){return Ut.current.useLayoutEffect(e,t)};Ye.useMemo=function(e,t){return Ut.current.useMemo(e,t)};Ye.useReducer=function(e,t,n){return Ut.current.useReducer(e,t,n)};Ye.useRef=function(e){return Ut.current.useRef(e)};Ye.useState=function(e){return Ut.current.useState(e)};Ye.useSyncExternalStore=function(e,t,n){return Ut.current.useSyncExternalStore(e,t,n)};Ye.useTransition=function(){return Ut.current.useTransition()};Ye.version="18.3.1";dp.exports=Ye;var c=dp.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kh=c,jh=Symbol.for("react.element"),wh=Symbol.for("react.fragment"),Sh=Object.prototype.hasOwnProperty,Ch=kh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zh={key:!0,ref:!0,__self:!0,__source:!0};function xp(e,t,n){var o,i={},s=null,l=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(o in t)Sh.call(t,o)&&!zh.hasOwnProperty(o)&&(i[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)i[o]===void 0&&(i[o]=t[o]);return{$$typeof:jh,type:e,key:s,ref:l,props:i,_owner:Ch.current}}Cl.Fragment=wh;Cl.jsx=xp;Cl.jsxs=xp;ap.exports=Cl;var r=ap.exports,yp={exports:{}},sr={},vp={exports:{}},kp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(G,Y){var oe=G.length;G.push(Y);e:for(;0<oe;){var K=oe-1>>>1,pe=G[K];if(0<i(pe,Y))G[K]=Y,G[oe]=pe,oe=K;else break e}}function n(G){return G.length===0?null:G[0]}function o(G){if(G.length===0)return null;var Y=G[0],oe=G.pop();if(oe!==Y){G[0]=oe;e:for(var K=0,pe=G.length,O=pe>>>1;K<O;){var $=2*(K+1)-1,P=G[$],le=$+1,de=G[le];if(0>i(P,oe))le<pe&&0>i(de,P)?(G[K]=de,G[le]=oe,K=le):(G[K]=P,G[$]=oe,K=$);else if(le<pe&&0>i(de,oe))G[K]=de,G[le]=oe,K=le;else break e}}return Y}function i(G,Y){var oe=G.sortIndex-Y.sortIndex;return oe!==0?oe:G.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,d=l.now();e.unstable_now=function(){return l.now()-d}}var a=[],g=[],m=1,y=null,f=3,E=!1,C=!1,w=!1,D=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(G){for(var Y=n(g);Y!==null;){if(Y.callback===null)o(g);else if(Y.startTime<=G)o(g),Y.sortIndex=Y.expirationTime,t(a,Y);else break;Y=n(g)}}function T(G){if(w=!1,h(G),!C)if(n(a)!==null)C=!0,se(v);else{var Y=n(g);Y!==null&&ye(T,Y.startTime-G)}}function v(G,Y){C=!1,w&&(w=!1,b(F),F=-1),E=!0;var oe=f;try{for(h(Y),y=n(a);y!==null&&(!(y.expirationTime>Y)||G&&!ie());){var K=y.callback;if(typeof K=="function"){y.callback=null,f=y.priorityLevel;var pe=K(y.expirationTime<=Y);Y=e.unstable_now(),typeof pe=="function"?y.callback=pe:y===n(a)&&o(a),h(Y)}else o(a);y=n(a)}if(y!==null)var O=!0;else{var $=n(g);$!==null&&ye(T,$.startTime-Y),O=!1}return O}finally{y=null,f=oe,E=!1}}var S=!1,W=null,F=-1,j=5,A=-1;function ie(){return!(e.unstable_now()-A<j)}function B(){if(W!==null){var G=e.unstable_now();A=G;var Y=!0;try{Y=W(!0,G)}finally{Y?I():(S=!1,W=null)}}else S=!1}var I;if(typeof p=="function")I=function(){p(B)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,be=J.port2;J.port1.onmessage=B,I=function(){be.postMessage(null)}}else I=function(){D(B,0)};function se(G){W=G,S||(S=!0,I())}function ye(G,Y){F=D(function(){G(e.unstable_now())},Y)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(G){G.callback=null},e.unstable_continueExecution=function(){C||E||(C=!0,se(v))},e.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<G?Math.floor(1e3/G):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(G){switch(f){case 1:case 2:case 3:var Y=3;break;default:Y=f}var oe=f;f=Y;try{return G()}finally{f=oe}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(G,Y){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var oe=f;f=G;try{return Y()}finally{f=oe}},e.unstable_scheduleCallback=function(G,Y,oe){var K=e.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?K+oe:K):oe=K,G){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=oe+pe,G={id:m++,callback:Y,priorityLevel:G,startTime:oe,expirationTime:pe,sortIndex:-1},oe>K?(G.sortIndex=oe,t(g,G),n(a)===null&&G===n(g)&&(w?(b(F),F=-1):w=!0,ye(T,oe-K))):(G.sortIndex=pe,t(a,G),C||E||(C=!0,se(v))),G},e.unstable_shouldYield=ie,e.unstable_wrapCallback=function(G){var Y=f;return function(){var oe=f;f=Y;try{return G.apply(this,arguments)}finally{f=oe}}}})(kp);vp.exports=kp;var Ih=vp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Th=c,ir=Ih;function fe(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jp=new Set,ji={};function qn(e,t){Eo(e,t),Eo(e+"Capture",t)}function Eo(e,t){for(ji[e]=t,e=0;e<t.length;e++)jp.add(t[e])}var Jr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wa=Object.prototype.hasOwnProperty,Eh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lg={},ag={};function Bh(e){return Wa.call(ag,e)?!0:Wa.call(lg,e)?!1:Eh.test(e)?ag[e]=!0:(lg[e]=!0,!1)}function Dh(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ah(e,t,n,o){if(t===null||typeof t>"u"||Dh(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Vt(e,t,n,o,i,s,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=l}var Mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Mt[e]=new Vt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Mt[t]=new Vt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Mt[e]=new Vt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Mt[e]=new Vt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Mt[e]=new Vt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Mt[e]=new Vt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Mt[e]=new Vt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Mt[e]=new Vt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Mt[e]=new Vt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xd=/[\-:]([a-z])/g;function qd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xd,qd);Mt[t]=new Vt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xd,qd);Mt[t]=new Vt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xd,qd);Mt[t]=new Vt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Mt[e]=new Vt(e,1,!1,e.toLowerCase(),null,!1,!1)});Mt.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Mt[e]=new Vt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zd(e,t,n,o){var i=Mt.hasOwnProperty(t)?Mt[t]:null;(i!==null?i.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ah(t,n,i,o)&&(n=null),o||i===null?Bh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,o=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var nn=Th.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ji=Symbol.for("react.element"),go=Symbol.for("react.portal"),uo=Symbol.for("react.fragment"),Jd=Symbol.for("react.strict_mode"),La=Symbol.for("react.profiler"),wp=Symbol.for("react.provider"),Sp=Symbol.for("react.context"),ec=Symbol.for("react.forward_ref"),_a=Symbol.for("react.suspense"),$a=Symbol.for("react.suspense_list"),tc=Symbol.for("react.memo"),gn=Symbol.for("react.lazy"),Cp=Symbol.for("react.offscreen"),dg=Symbol.iterator;function Uo(e){return e===null||typeof e!="object"?null:(e=dg&&e[dg]||e["@@iterator"],typeof e=="function"?e:null)}var mt=Object.assign,Yl;function ni(e){if(Yl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yl=t&&t[1]||""}return`
`+Yl+e}var Ql=!1;function Kl(e,t){if(!e||Ql)return"";Ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(g){var o=g}Reflect.construct(e,[],t)}else{try{t.call()}catch(g){o=g}e.call(t.prototype)}else{try{throw Error()}catch(g){o=g}e()}}catch(g){if(g&&o&&typeof g.stack=="string"){for(var i=g.stack.split(`
`),s=o.stack.split(`
`),l=i.length-1,d=s.length-1;1<=l&&0<=d&&i[l]!==s[d];)d--;for(;1<=l&&0<=d;l--,d--)if(i[l]!==s[d]){if(l!==1||d!==1)do if(l--,d--,0>d||i[l]!==s[d]){var a=`
`+i[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=d);break}}}finally{Ql=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ni(e):""}function Rh(e){switch(e.tag){case 5:return ni(e.type);case 16:return ni("Lazy");case 13:return ni("Suspense");case 19:return ni("SuspenseList");case 0:case 2:case 15:return e=Kl(e.type,!1),e;case 11:return e=Kl(e.type.render,!1),e;case 1:return e=Kl(e.type,!0),e;default:return""}}function Pa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case uo:return"Fragment";case go:return"Portal";case La:return"Profiler";case Jd:return"StrictMode";case _a:return"Suspense";case $a:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sp:return(e.displayName||"Context")+".Consumer";case wp:return(e._context.displayName||"Context")+".Provider";case ec:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case tc:return t=e.displayName||null,t!==null?t:Pa(e.type)||"Memo";case gn:t=e._payload,e=e._init;try{return Pa(e(t))}catch{}}return null}function Fh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pa(t);case 8:return t===Jd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Mh(e){var t=zp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){o=""+l,s.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function es(e){e._valueTracker||(e._valueTracker=Mh(e))}function Ip(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=zp(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function Vs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Na(e,t){var n=t.checked;return mt({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function cg(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=zn(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Tp(e,t){t=t.checked,t!=null&&Zd(e,"checked",t,!1)}function Oa(e,t){Tp(e,t);var n=zn(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ha(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ha(e,t.type,zn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gg(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ha(e,t,n){(t!=="number"||Vs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var oi=Array.isArray;function wo(e,t,n,o){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&o&&(e[n].defaultSelected=!0)}else{for(n=""+zn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ga(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(fe(91));return mt({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ug(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(fe(92));if(oi(n)){if(1<n.length)throw Error(fe(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zn(n)}}function Ep(e,t){var n=zn(t.value),o=zn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function pg(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ua(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ts,Dp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ts=ts||document.createElement("div"),ts.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ts.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ci={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wh=["Webkit","ms","Moz","O"];Object.keys(ci).forEach(function(e){Wh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ci[t]=ci[e]})});function Ap(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ci.hasOwnProperty(e)&&ci[e]?(""+t).trim():t+"px"}function Rp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,i=Ap(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,i):e[n]=i}}var Lh=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Va(e,t){if(t){if(Lh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(fe(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(fe(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(fe(61))}if(t.style!=null&&typeof t.style!="object")throw Error(fe(62))}}function Ya(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qa=null;function rc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ka=null,So=null,Co=null;function bg(e){if(e=Ui(e)){if(typeof Ka!="function")throw Error(fe(280));var t=e.stateNode;t&&(t=Bl(t),Ka(e.stateNode,e.type,t))}}function Fp(e){So?Co?Co.push(e):Co=[e]:So=e}function Mp(){if(So){var e=So,t=Co;if(Co=So=null,bg(e),t)for(e=0;e<t.length;e++)bg(t[e])}}function Wp(e,t){return e(t)}function Lp(){}var Xl=!1;function _p(e,t,n){if(Xl)return e(t,n);Xl=!0;try{return Wp(e,t,n)}finally{Xl=!1,(So!==null||Co!==null)&&(Lp(),Mp())}}function Si(e,t){var n=e.stateNode;if(n===null)return null;var o=Bl(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(fe(231,t,typeof n));return n}var Xa=!1;if(Jr)try{var Vo={};Object.defineProperty(Vo,"passive",{get:function(){Xa=!0}}),window.addEventListener("test",Vo,Vo),window.removeEventListener("test",Vo,Vo)}catch{Xa=!1}function _h(e,t,n,o,i,s,l,d,a){var g=Array.prototype.slice.call(arguments,3);try{t.apply(n,g)}catch(m){this.onError(m)}}var gi=!1,Ys=null,Qs=!1,qa=null,$h={onError:function(e){gi=!0,Ys=e}};function Ph(e,t,n,o,i,s,l,d,a){gi=!1,Ys=null,_h.apply($h,arguments)}function Nh(e,t,n,o,i,s,l,d,a){if(Ph.apply(this,arguments),gi){if(gi){var g=Ys;gi=!1,Ys=null}else throw Error(fe(198));Qs||(Qs=!0,qa=g)}}function Zn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function mg(e){if(Zn(e)!==e)throw Error(fe(188))}function Oh(e){var t=e.alternate;if(!t){if(t=Zn(e),t===null)throw Error(fe(188));return t!==e?null:e}for(var n=e,o=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(o=i.return,o!==null){n=o;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return mg(i),e;if(s===o)return mg(i),t;s=s.sibling}throw Error(fe(188))}if(n.return!==o.return)n=i,o=s;else{for(var l=!1,d=i.child;d;){if(d===n){l=!0,n=i,o=s;break}if(d===o){l=!0,o=i,n=s;break}d=d.sibling}if(!l){for(d=s.child;d;){if(d===n){l=!0,n=s,o=i;break}if(d===o){l=!0,o=s,n=i;break}d=d.sibling}if(!l)throw Error(fe(189))}}if(n.alternate!==o)throw Error(fe(190))}if(n.tag!==3)throw Error(fe(188));return n.stateNode.current===n?e:t}function Pp(e){return e=Oh(e),e!==null?Np(e):null}function Np(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Np(e);if(t!==null)return t;e=e.sibling}return null}var Op=ir.unstable_scheduleCallback,hg=ir.unstable_cancelCallback,Hh=ir.unstable_shouldYield,Gh=ir.unstable_requestPaint,xt=ir.unstable_now,Uh=ir.unstable_getCurrentPriorityLevel,nc=ir.unstable_ImmediatePriority,Hp=ir.unstable_UserBlockingPriority,Ks=ir.unstable_NormalPriority,Vh=ir.unstable_LowPriority,Gp=ir.unstable_IdlePriority,zl=null,Mr=null;function Yh(e){if(Mr&&typeof Mr.onCommitFiberRoot=="function")try{Mr.onCommitFiberRoot(zl,e,void 0,(e.current.flags&128)===128)}catch{}}var Cr=Math.clz32?Math.clz32:Xh,Qh=Math.log,Kh=Math.LN2;function Xh(e){return e>>>=0,e===0?32:31-(Qh(e)/Kh|0)|0}var rs=64,ns=4194304;function ii(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xs(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,i=e.suspendedLanes,s=e.pingedLanes,l=n&268435455;if(l!==0){var d=l&~i;d!==0?o=ii(d):(s&=l,s!==0&&(o=ii(s)))}else l=n&~i,l!==0?o=ii(l):s!==0&&(o=ii(s));if(o===0)return 0;if(t!==0&&t!==o&&!(t&i)&&(i=o&-o,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-Cr(t),i=1<<n,o|=e[n],t&=~i;return o}function qh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zh(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-Cr(s),d=1<<l,a=i[l];a===-1?(!(d&n)||d&o)&&(i[l]=qh(d,t)):a<=t&&(e.expiredLanes|=d),s&=~d}}function Za(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Up(){var e=rs;return rs<<=1,!(rs&4194240)&&(rs=64),e}function ql(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Hi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Cr(t),e[t]=n}function Jh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Cr(n),s=1<<i;t[i]=0,o[i]=-1,e[i]=-1,n&=~s}}function oc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-Cr(n),i=1<<o;i&t|e[o]&t&&(e[o]|=t),n&=~i}}var rt=0;function Vp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Yp,ic,Qp,Kp,Xp,Ja=!1,os=[],xn=null,yn=null,vn=null,Ci=new Map,zi=new Map,pn=[],ef="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fg(e,t){switch(e){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":yn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":Ci.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zi.delete(t.pointerId)}}function Yo(e,t,n,o,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Ui(t),t!==null&&ic(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function tf(e,t,n,o,i){switch(t){case"focusin":return xn=Yo(xn,e,t,n,o,i),!0;case"dragenter":return yn=Yo(yn,e,t,n,o,i),!0;case"mouseover":return vn=Yo(vn,e,t,n,o,i),!0;case"pointerover":var s=i.pointerId;return Ci.set(s,Yo(Ci.get(s)||null,e,t,n,o,i)),!0;case"gotpointercapture":return s=i.pointerId,zi.set(s,Yo(zi.get(s)||null,e,t,n,o,i)),!0}return!1}function qp(e){var t=Pn(e.target);if(t!==null){var n=Zn(t);if(n!==null){if(t=n.tag,t===13){if(t=$p(n),t!==null){e.blockedOn=t,Xp(e.priority,function(){Qp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ed(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Qa=o,n.target.dispatchEvent(o),Qa=null}else return t=Ui(n),t!==null&&ic(t),e.blockedOn=n,!1;t.shift()}return!0}function xg(e,t,n){Fs(e)&&n.delete(t)}function rf(){Ja=!1,xn!==null&&Fs(xn)&&(xn=null),yn!==null&&Fs(yn)&&(yn=null),vn!==null&&Fs(vn)&&(vn=null),Ci.forEach(xg),zi.forEach(xg)}function Qo(e,t){e.blockedOn===t&&(e.blockedOn=null,Ja||(Ja=!0,ir.unstable_scheduleCallback(ir.unstable_NormalPriority,rf)))}function Ii(e){function t(i){return Qo(i,e)}if(0<os.length){Qo(os[0],e);for(var n=1;n<os.length;n++){var o=os[n];o.blockedOn===e&&(o.blockedOn=null)}}for(xn!==null&&Qo(xn,e),yn!==null&&Qo(yn,e),vn!==null&&Qo(vn,e),Ci.forEach(t),zi.forEach(t),n=0;n<pn.length;n++)o=pn[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<pn.length&&(n=pn[0],n.blockedOn===null);)qp(n),n.blockedOn===null&&pn.shift()}var zo=nn.ReactCurrentBatchConfig,qs=!0;function nf(e,t,n,o){var i=rt,s=zo.transition;zo.transition=null;try{rt=1,sc(e,t,n,o)}finally{rt=i,zo.transition=s}}function of(e,t,n,o){var i=rt,s=zo.transition;zo.transition=null;try{rt=4,sc(e,t,n,o)}finally{rt=i,zo.transition=s}}function sc(e,t,n,o){if(qs){var i=ed(e,t,n,o);if(i===null)la(e,t,o,Zs,n),fg(e,o);else if(tf(i,e,t,n,o))o.stopPropagation();else if(fg(e,o),t&4&&-1<ef.indexOf(e)){for(;i!==null;){var s=Ui(i);if(s!==null&&Yp(s),s=ed(e,t,n,o),s===null&&la(e,t,o,Zs,n),s===i)break;i=s}i!==null&&o.stopPropagation()}else la(e,t,o,null,n)}}var Zs=null;function ed(e,t,n,o){if(Zs=null,e=rc(o),e=Pn(e),e!==null)if(t=Zn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zs=e,null}function Zp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Uh()){case nc:return 1;case Hp:return 4;case Ks:case Vh:return 16;case Gp:return 536870912;default:return 16}default:return 16}}var hn=null,lc=null,Ms=null;function Jp(){if(Ms)return Ms;var e,t=lc,n=t.length,o,i="value"in hn?hn.value:hn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(o=1;o<=l&&t[n-o]===i[s-o];o++);return Ms=i.slice(e,1<o?1-o:void 0)}function Ws(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function is(){return!0}function yg(){return!1}function lr(e){function t(n,o,i,s,l){this._reactName=n,this._targetInst=i,this.type=o,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(s):s[d]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?is:yg,this.isPropagationStopped=yg,this}return mt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=is)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=is)},persist:function(){},isPersistent:is}),t}var _o={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ac=lr(_o),Gi=mt({},_o,{view:0,detail:0}),sf=lr(Gi),Zl,Jl,Ko,Il=mt({},Gi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ko&&(Ko&&e.type==="mousemove"?(Zl=e.screenX-Ko.screenX,Jl=e.screenY-Ko.screenY):Jl=Zl=0,Ko=e),Zl)},movementY:function(e){return"movementY"in e?e.movementY:Jl}}),vg=lr(Il),lf=mt({},Il,{dataTransfer:0}),af=lr(lf),df=mt({},Gi,{relatedTarget:0}),ea=lr(df),cf=mt({},_o,{animationName:0,elapsedTime:0,pseudoElement:0}),gf=lr(cf),uf=mt({},_o,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pf=lr(uf),bf=mt({},_o,{data:0}),kg=lr(bf),mf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ff={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ff[e])?!!t[e]:!1}function dc(){return xf}var yf=mt({},Gi,{key:function(e){if(e.key){var t=mf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ws(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dc,charCode:function(e){return e.type==="keypress"?Ws(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ws(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vf=lr(yf),kf=mt({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jg=lr(kf),jf=mt({},Gi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dc}),wf=lr(jf),Sf=mt({},_o,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cf=lr(Sf),zf=mt({},Il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),If=lr(zf),Tf=[9,13,27,32],cc=Jr&&"CompositionEvent"in window,ui=null;Jr&&"documentMode"in document&&(ui=document.documentMode);var Ef=Jr&&"TextEvent"in window&&!ui,eb=Jr&&(!cc||ui&&8<ui&&11>=ui),wg=" ",Sg=!1;function tb(e,t){switch(e){case"keyup":return Tf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rb(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var po=!1;function Bf(e,t){switch(e){case"compositionend":return rb(t);case"keypress":return t.which!==32?null:(Sg=!0,wg);case"textInput":return e=t.data,e===wg&&Sg?null:e;default:return null}}function Df(e,t){if(po)return e==="compositionend"||!cc&&tb(e,t)?(e=Jp(),Ms=lc=hn=null,po=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return eb&&t.locale!=="ko"?null:t.data;default:return null}}var Af={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Af[e.type]:t==="textarea"}function nb(e,t,n,o){Fp(o),t=Js(t,"onChange"),0<t.length&&(n=new ac("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var pi=null,Ti=null;function Rf(e){bb(e,0)}function Tl(e){var t=ho(e);if(Ip(t))return e}function Ff(e,t){if(e==="change")return t}var ob=!1;if(Jr){var ta;if(Jr){var ra="oninput"in document;if(!ra){var zg=document.createElement("div");zg.setAttribute("oninput","return;"),ra=typeof zg.oninput=="function"}ta=ra}else ta=!1;ob=ta&&(!document.documentMode||9<document.documentMode)}function Ig(){pi&&(pi.detachEvent("onpropertychange",ib),Ti=pi=null)}function ib(e){if(e.propertyName==="value"&&Tl(Ti)){var t=[];nb(t,Ti,e,rc(e)),_p(Rf,t)}}function Mf(e,t,n){e==="focusin"?(Ig(),pi=t,Ti=n,pi.attachEvent("onpropertychange",ib)):e==="focusout"&&Ig()}function Wf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Tl(Ti)}function Lf(e,t){if(e==="click")return Tl(t)}function _f(e,t){if(e==="input"||e==="change")return Tl(t)}function $f(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ir=typeof Object.is=="function"?Object.is:$f;function Ei(e,t){if(Ir(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var i=n[o];if(!Wa.call(t,i)||!Ir(e[i],t[i]))return!1}return!0}function Tg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Eg(e,t){var n=Tg(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tg(n)}}function sb(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sb(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lb(){for(var e=window,t=Vs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vs(e.document)}return t}function gc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Pf(e){var t=lb(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&sb(n.ownerDocument.documentElement,n)){if(o!==null&&gc(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(o.start,i);o=o.end===void 0?s:Math.min(o.end,i),!e.extend&&s>o&&(i=o,o=s,s=i),i=Eg(n,s);var l=Eg(n,o);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>o?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Nf=Jr&&"documentMode"in document&&11>=document.documentMode,bo=null,td=null,bi=null,rd=!1;function Bg(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rd||bo==null||bo!==Vs(o)||(o=bo,"selectionStart"in o&&gc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),bi&&Ei(bi,o)||(bi=o,o=Js(td,"onSelect"),0<o.length&&(t=new ac("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=bo)))}function ss(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mo={animationend:ss("Animation","AnimationEnd"),animationiteration:ss("Animation","AnimationIteration"),animationstart:ss("Animation","AnimationStart"),transitionend:ss("Transition","TransitionEnd")},na={},ab={};Jr&&(ab=document.createElement("div").style,"AnimationEvent"in window||(delete mo.animationend.animation,delete mo.animationiteration.animation,delete mo.animationstart.animation),"TransitionEvent"in window||delete mo.transitionend.transition);function El(e){if(na[e])return na[e];if(!mo[e])return e;var t=mo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ab)return na[e]=t[n];return e}var db=El("animationend"),cb=El("animationiteration"),gb=El("animationstart"),ub=El("transitionend"),pb=new Map,Dg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function En(e,t){pb.set(e,t),qn(t,[e])}for(var oa=0;oa<Dg.length;oa++){var ia=Dg[oa],Of=ia.toLowerCase(),Hf=ia[0].toUpperCase()+ia.slice(1);En(Of,"on"+Hf)}En(db,"onAnimationEnd");En(cb,"onAnimationIteration");En(gb,"onAnimationStart");En("dblclick","onDoubleClick");En("focusin","onFocus");En("focusout","onBlur");En(ub,"onTransitionEnd");Eo("onMouseEnter",["mouseout","mouseover"]);Eo("onMouseLeave",["mouseout","mouseover"]);Eo("onPointerEnter",["pointerout","pointerover"]);Eo("onPointerLeave",["pointerout","pointerover"]);qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gf=new Set("cancel close invalid load scroll toggle".split(" ").concat(si));function Ag(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,Nh(o,t,void 0,e),e.currentTarget=null}function bb(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],i=o.event;o=o.listeners;e:{var s=void 0;if(t)for(var l=o.length-1;0<=l;l--){var d=o[l],a=d.instance,g=d.currentTarget;if(d=d.listener,a!==s&&i.isPropagationStopped())break e;Ag(i,d,g),s=a}else for(l=0;l<o.length;l++){if(d=o[l],a=d.instance,g=d.currentTarget,d=d.listener,a!==s&&i.isPropagationStopped())break e;Ag(i,d,g),s=a}}}if(Qs)throw e=qa,Qs=!1,qa=null,e}function at(e,t){var n=t[ld];n===void 0&&(n=t[ld]=new Set);var o=e+"__bubble";n.has(o)||(mb(t,e,2,!1),n.add(o))}function sa(e,t,n){var o=0;t&&(o|=4),mb(n,e,o,t)}var ls="_reactListening"+Math.random().toString(36).slice(2);function Bi(e){if(!e[ls]){e[ls]=!0,jp.forEach(function(n){n!=="selectionchange"&&(Gf.has(n)||sa(n,!1,e),sa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ls]||(t[ls]=!0,sa("selectionchange",!1,t))}}function mb(e,t,n,o){switch(Zp(t)){case 1:var i=nf;break;case 4:i=of;break;default:i=sc}n=i.bind(null,t,n,e),i=void 0,!Xa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function la(e,t,n,o,i){var s=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var d=o.stateNode.containerInfo;if(d===i||d.nodeType===8&&d.parentNode===i)break;if(l===4)for(l=o.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;d!==null;){if(l=Pn(d),l===null)return;if(a=l.tag,a===5||a===6){o=s=l;continue e}d=d.parentNode}}o=o.return}_p(function(){var g=s,m=rc(n),y=[];e:{var f=pb.get(e);if(f!==void 0){var E=ac,C=e;switch(e){case"keypress":if(Ws(n)===0)break e;case"keydown":case"keyup":E=vf;break;case"focusin":C="focus",E=ea;break;case"focusout":C="blur",E=ea;break;case"beforeblur":case"afterblur":E=ea;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=vg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=af;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=wf;break;case db:case cb:case gb:E=gf;break;case ub:E=Cf;break;case"scroll":E=sf;break;case"wheel":E=If;break;case"copy":case"cut":case"paste":E=pf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=jg}var w=(t&4)!==0,D=!w&&e==="scroll",b=w?f!==null?f+"Capture":null:f;w=[];for(var p=g,h;p!==null;){h=p;var T=h.stateNode;if(h.tag===5&&T!==null&&(h=T,b!==null&&(T=Si(p,b),T!=null&&w.push(Di(p,T,h)))),D)break;p=p.return}0<w.length&&(f=new E(f,C,null,n,m),y.push({event:f,listeners:w}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",f&&n!==Qa&&(C=n.relatedTarget||n.fromElement)&&(Pn(C)||C[en]))break e;if((E||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,E?(C=n.relatedTarget||n.toElement,E=g,C=C?Pn(C):null,C!==null&&(D=Zn(C),C!==D||C.tag!==5&&C.tag!==6)&&(C=null)):(E=null,C=g),E!==C)){if(w=vg,T="onMouseLeave",b="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=jg,T="onPointerLeave",b="onPointerEnter",p="pointer"),D=E==null?f:ho(E),h=C==null?f:ho(C),f=new w(T,p+"leave",E,n,m),f.target=D,f.relatedTarget=h,T=null,Pn(m)===g&&(w=new w(b,p+"enter",C,n,m),w.target=h,w.relatedTarget=D,T=w),D=T,E&&C)t:{for(w=E,b=C,p=0,h=w;h;h=to(h))p++;for(h=0,T=b;T;T=to(T))h++;for(;0<p-h;)w=to(w),p--;for(;0<h-p;)b=to(b),h--;for(;p--;){if(w===b||b!==null&&w===b.alternate)break t;w=to(w),b=to(b)}w=null}else w=null;E!==null&&Rg(y,f,E,w,!1),C!==null&&D!==null&&Rg(y,D,C,w,!0)}}e:{if(f=g?ho(g):window,E=f.nodeName&&f.nodeName.toLowerCase(),E==="select"||E==="input"&&f.type==="file")var v=Ff;else if(Cg(f))if(ob)v=_f;else{v=Wf;var S=Mf}else(E=f.nodeName)&&E.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(v=Lf);if(v&&(v=v(e,g))){nb(y,v,n,m);break e}S&&S(e,f,g),e==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&Ha(f,"number",f.value)}switch(S=g?ho(g):window,e){case"focusin":(Cg(S)||S.contentEditable==="true")&&(bo=S,td=g,bi=null);break;case"focusout":bi=td=bo=null;break;case"mousedown":rd=!0;break;case"contextmenu":case"mouseup":case"dragend":rd=!1,Bg(y,n,m);break;case"selectionchange":if(Nf)break;case"keydown":case"keyup":Bg(y,n,m)}var W;if(cc)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else po?tb(e,n)&&(F="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(eb&&n.locale!=="ko"&&(po||F!=="onCompositionStart"?F==="onCompositionEnd"&&po&&(W=Jp()):(hn=m,lc="value"in hn?hn.value:hn.textContent,po=!0)),S=Js(g,F),0<S.length&&(F=new kg(F,e,null,n,m),y.push({event:F,listeners:S}),W?F.data=W:(W=rb(n),W!==null&&(F.data=W)))),(W=Ef?Bf(e,n):Df(e,n))&&(g=Js(g,"onBeforeInput"),0<g.length&&(m=new kg("onBeforeInput","beforeinput",null,n,m),y.push({event:m,listeners:g}),m.data=W))}bb(y,t)})}function Di(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Js(e,t){for(var n=t+"Capture",o=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Si(e,n),s!=null&&o.unshift(Di(e,s,i)),s=Si(e,t),s!=null&&o.push(Di(e,s,i))),e=e.return}return o}function to(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Rg(e,t,n,o,i){for(var s=t._reactName,l=[];n!==null&&n!==o;){var d=n,a=d.alternate,g=d.stateNode;if(a!==null&&a===o)break;d.tag===5&&g!==null&&(d=g,i?(a=Si(n,s),a!=null&&l.unshift(Di(n,a,d))):i||(a=Si(n,s),a!=null&&l.push(Di(n,a,d)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Uf=/\r\n?/g,Vf=/\u0000|\uFFFD/g;function Fg(e){return(typeof e=="string"?e:""+e).replace(Uf,`
`).replace(Vf,"")}function as(e,t,n){if(t=Fg(t),Fg(e)!==t&&n)throw Error(fe(425))}function el(){}var nd=null,od=null;function id(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sd=typeof setTimeout=="function"?setTimeout:void 0,Yf=typeof clearTimeout=="function"?clearTimeout:void 0,Mg=typeof Promise=="function"?Promise:void 0,Qf=typeof queueMicrotask=="function"?queueMicrotask:typeof Mg<"u"?function(e){return Mg.resolve(null).then(e).catch(Kf)}:sd;function Kf(e){setTimeout(function(){throw e})}function aa(e,t){var n=t,o=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(o===0){e.removeChild(i),Ii(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=i}while(n);Ii(t)}function kn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var $o=Math.random().toString(36).slice(2),Fr="__reactFiber$"+$o,Ai="__reactProps$"+$o,en="__reactContainer$"+$o,ld="__reactEvents$"+$o,Xf="__reactListeners$"+$o,qf="__reactHandles$"+$o;function Pn(e){var t=e[Fr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[en]||n[Fr]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wg(e);e!==null;){if(n=e[Fr])return n;e=Wg(e)}return t}e=n,n=e.parentNode}return null}function Ui(e){return e=e[Fr]||e[en],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ho(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(fe(33))}function Bl(e){return e[Ai]||null}var ad=[],fo=-1;function Bn(e){return{current:e}}function dt(e){0>fo||(e.current=ad[fo],ad[fo]=null,fo--)}function st(e,t){fo++,ad[fo]=e.current,e.current=t}var In={},Nt=Bn(In),Xt=Bn(!1),Vn=In;function Bo(e,t){var n=e.type.contextTypes;if(!n)return In;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function qt(e){return e=e.childContextTypes,e!=null}function tl(){dt(Xt),dt(Nt)}function Lg(e,t,n){if(Nt.current!==In)throw Error(fe(168));st(Nt,t),st(Xt,n)}function hb(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var i in o)if(!(i in t))throw Error(fe(108,Fh(e)||"Unknown",i));return mt({},n,o)}function rl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||In,Vn=Nt.current,st(Nt,e),st(Xt,Xt.current),!0}function _g(e,t,n){var o=e.stateNode;if(!o)throw Error(fe(169));n?(e=hb(e,t,Vn),o.__reactInternalMemoizedMergedChildContext=e,dt(Xt),dt(Nt),st(Nt,e)):dt(Xt),st(Xt,n)}var Vr=null,Dl=!1,da=!1;function fb(e){Vr===null?Vr=[e]:Vr.push(e)}function Zf(e){Dl=!0,fb(e)}function Dn(){if(!da&&Vr!==null){da=!0;var e=0,t=rt;try{var n=Vr;for(rt=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}Vr=null,Dl=!1}catch(i){throw Vr!==null&&(Vr=Vr.slice(e+1)),Op(nc,Dn),i}finally{rt=t,da=!1}}return null}var xo=[],yo=0,nl=null,ol=0,ur=[],pr=0,Yn=null,Kr=1,Xr="";function Ln(e,t){xo[yo++]=ol,xo[yo++]=nl,nl=e,ol=t}function xb(e,t,n){ur[pr++]=Kr,ur[pr++]=Xr,ur[pr++]=Yn,Yn=e;var o=Kr;e=Xr;var i=32-Cr(o)-1;o&=~(1<<i),n+=1;var s=32-Cr(t)+i;if(30<s){var l=i-i%5;s=(o&(1<<l)-1).toString(32),o>>=l,i-=l,Kr=1<<32-Cr(t)+i|n<<i|o,Xr=s+e}else Kr=1<<s|n<<i|o,Xr=e}function uc(e){e.return!==null&&(Ln(e,1),xb(e,1,0))}function pc(e){for(;e===nl;)nl=xo[--yo],xo[yo]=null,ol=xo[--yo],xo[yo]=null;for(;e===Yn;)Yn=ur[--pr],ur[pr]=null,Xr=ur[--pr],ur[pr]=null,Kr=ur[--pr],ur[pr]=null}var or=null,nr=null,ct=!1,Sr=null;function yb(e,t){var n=br(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $g(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,or=e,nr=kn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,or=e,nr=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Yn!==null?{id:Kr,overflow:Xr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=br(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,or=e,nr=null,!0):!1;default:return!1}}function dd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function cd(e){if(ct){var t=nr;if(t){var n=t;if(!$g(e,t)){if(dd(e))throw Error(fe(418));t=kn(n.nextSibling);var o=or;t&&$g(e,t)?yb(o,n):(e.flags=e.flags&-4097|2,ct=!1,or=e)}}else{if(dd(e))throw Error(fe(418));e.flags=e.flags&-4097|2,ct=!1,or=e}}}function Pg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;or=e}function ds(e){if(e!==or)return!1;if(!ct)return Pg(e),ct=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!id(e.type,e.memoizedProps)),t&&(t=nr)){if(dd(e))throw vb(),Error(fe(418));for(;t;)yb(e,t),t=kn(t.nextSibling)}if(Pg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(fe(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){nr=kn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}nr=null}}else nr=or?kn(e.stateNode.nextSibling):null;return!0}function vb(){for(var e=nr;e;)e=kn(e.nextSibling)}function Do(){nr=or=null,ct=!1}function bc(e){Sr===null?Sr=[e]:Sr.push(e)}var Jf=nn.ReactCurrentBatchConfig;function Xo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(fe(309));var o=n.stateNode}if(!o)throw Error(fe(147,e));var i=o,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(l){var d=i.refs;l===null?delete d[s]:d[s]=l},t._stringRef=s,t)}if(typeof e!="string")throw Error(fe(284));if(!n._owner)throw Error(fe(290,e))}return e}function cs(e,t){throw e=Object.prototype.toString.call(t),Error(fe(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ng(e){var t=e._init;return t(e._payload)}function kb(e){function t(b,p){if(e){var h=b.deletions;h===null?(b.deletions=[p],b.flags|=16):h.push(p)}}function n(b,p){if(!e)return null;for(;p!==null;)t(b,p),p=p.sibling;return null}function o(b,p){for(b=new Map;p!==null;)p.key!==null?b.set(p.key,p):b.set(p.index,p),p=p.sibling;return b}function i(b,p){return b=Cn(b,p),b.index=0,b.sibling=null,b}function s(b,p,h){return b.index=h,e?(h=b.alternate,h!==null?(h=h.index,h<p?(b.flags|=2,p):h):(b.flags|=2,p)):(b.flags|=1048576,p)}function l(b){return e&&b.alternate===null&&(b.flags|=2),b}function d(b,p,h,T){return p===null||p.tag!==6?(p=ha(h,b.mode,T),p.return=b,p):(p=i(p,h),p.return=b,p)}function a(b,p,h,T){var v=h.type;return v===uo?m(b,p,h.props.children,T,h.key):p!==null&&(p.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===gn&&Ng(v)===p.type)?(T=i(p,h.props),T.ref=Xo(b,p,h),T.return=b,T):(T=Hs(h.type,h.key,h.props,null,b.mode,T),T.ref=Xo(b,p,h),T.return=b,T)}function g(b,p,h,T){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=fa(h,b.mode,T),p.return=b,p):(p=i(p,h.children||[]),p.return=b,p)}function m(b,p,h,T,v){return p===null||p.tag!==7?(p=Un(h,b.mode,T,v),p.return=b,p):(p=i(p,h),p.return=b,p)}function y(b,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ha(""+p,b.mode,h),p.return=b,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ji:return h=Hs(p.type,p.key,p.props,null,b.mode,h),h.ref=Xo(b,null,p),h.return=b,h;case go:return p=fa(p,b.mode,h),p.return=b,p;case gn:var T=p._init;return y(b,T(p._payload),h)}if(oi(p)||Uo(p))return p=Un(p,b.mode,h,null),p.return=b,p;cs(b,p)}return null}function f(b,p,h,T){var v=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return v!==null?null:d(b,p,""+h,T);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ji:return h.key===v?a(b,p,h,T):null;case go:return h.key===v?g(b,p,h,T):null;case gn:return v=h._init,f(b,p,v(h._payload),T)}if(oi(h)||Uo(h))return v!==null?null:m(b,p,h,T,null);cs(b,h)}return null}function E(b,p,h,T,v){if(typeof T=="string"&&T!==""||typeof T=="number")return b=b.get(h)||null,d(p,b,""+T,v);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Ji:return b=b.get(T.key===null?h:T.key)||null,a(p,b,T,v);case go:return b=b.get(T.key===null?h:T.key)||null,g(p,b,T,v);case gn:var S=T._init;return E(b,p,h,S(T._payload),v)}if(oi(T)||Uo(T))return b=b.get(h)||null,m(p,b,T,v,null);cs(p,T)}return null}function C(b,p,h,T){for(var v=null,S=null,W=p,F=p=0,j=null;W!==null&&F<h.length;F++){W.index>F?(j=W,W=null):j=W.sibling;var A=f(b,W,h[F],T);if(A===null){W===null&&(W=j);break}e&&W&&A.alternate===null&&t(b,W),p=s(A,p,F),S===null?v=A:S.sibling=A,S=A,W=j}if(F===h.length)return n(b,W),ct&&Ln(b,F),v;if(W===null){for(;F<h.length;F++)W=y(b,h[F],T),W!==null&&(p=s(W,p,F),S===null?v=W:S.sibling=W,S=W);return ct&&Ln(b,F),v}for(W=o(b,W);F<h.length;F++)j=E(W,b,F,h[F],T),j!==null&&(e&&j.alternate!==null&&W.delete(j.key===null?F:j.key),p=s(j,p,F),S===null?v=j:S.sibling=j,S=j);return e&&W.forEach(function(ie){return t(b,ie)}),ct&&Ln(b,F),v}function w(b,p,h,T){var v=Uo(h);if(typeof v!="function")throw Error(fe(150));if(h=v.call(h),h==null)throw Error(fe(151));for(var S=v=null,W=p,F=p=0,j=null,A=h.next();W!==null&&!A.done;F++,A=h.next()){W.index>F?(j=W,W=null):j=W.sibling;var ie=f(b,W,A.value,T);if(ie===null){W===null&&(W=j);break}e&&W&&ie.alternate===null&&t(b,W),p=s(ie,p,F),S===null?v=ie:S.sibling=ie,S=ie,W=j}if(A.done)return n(b,W),ct&&Ln(b,F),v;if(W===null){for(;!A.done;F++,A=h.next())A=y(b,A.value,T),A!==null&&(p=s(A,p,F),S===null?v=A:S.sibling=A,S=A);return ct&&Ln(b,F),v}for(W=o(b,W);!A.done;F++,A=h.next())A=E(W,b,F,A.value,T),A!==null&&(e&&A.alternate!==null&&W.delete(A.key===null?F:A.key),p=s(A,p,F),S===null?v=A:S.sibling=A,S=A);return e&&W.forEach(function(B){return t(b,B)}),ct&&Ln(b,F),v}function D(b,p,h,T){if(typeof h=="object"&&h!==null&&h.type===uo&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ji:e:{for(var v=h.key,S=p;S!==null;){if(S.key===v){if(v=h.type,v===uo){if(S.tag===7){n(b,S.sibling),p=i(S,h.props.children),p.return=b,b=p;break e}}else if(S.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===gn&&Ng(v)===S.type){n(b,S.sibling),p=i(S,h.props),p.ref=Xo(b,S,h),p.return=b,b=p;break e}n(b,S);break}else t(b,S);S=S.sibling}h.type===uo?(p=Un(h.props.children,b.mode,T,h.key),p.return=b,b=p):(T=Hs(h.type,h.key,h.props,null,b.mode,T),T.ref=Xo(b,p,h),T.return=b,b=T)}return l(b);case go:e:{for(S=h.key;p!==null;){if(p.key===S)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){n(b,p.sibling),p=i(p,h.children||[]),p.return=b,b=p;break e}else{n(b,p);break}else t(b,p);p=p.sibling}p=fa(h,b.mode,T),p.return=b,b=p}return l(b);case gn:return S=h._init,D(b,p,S(h._payload),T)}if(oi(h))return C(b,p,h,T);if(Uo(h))return w(b,p,h,T);cs(b,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(n(b,p.sibling),p=i(p,h),p.return=b,b=p):(n(b,p),p=ha(h,b.mode,T),p.return=b,b=p),l(b)):n(b,p)}return D}var Ao=kb(!0),jb=kb(!1),il=Bn(null),sl=null,vo=null,mc=null;function hc(){mc=vo=sl=null}function fc(e){var t=il.current;dt(il),e._currentValue=t}function gd(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Io(e,t){sl=e,mc=vo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Kt=!0),e.firstContext=null)}function hr(e){var t=e._currentValue;if(mc!==e)if(e={context:e,memoizedValue:t,next:null},vo===null){if(sl===null)throw Error(fe(308));vo=e,sl.dependencies={lanes:0,firstContext:e}}else vo=vo.next=e;return t}var Nn=null;function xc(e){Nn===null?Nn=[e]:Nn.push(e)}function wb(e,t,n,o){var i=t.interleaved;return i===null?(n.next=n,xc(t)):(n.next=i.next,i.next=n),t.interleaved=n,tn(e,o)}function tn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var un=!1;function yc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sb(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jn(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,Je&2){var i=o.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),o.pending=t,tn(e,n)}return i=o.interleaved,i===null?(t.next=t,xc(o)):(t.next=i.next,i.next=t),o.interleaved=t,tn(e,n)}function Ls(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,oc(e,n)}}function Og(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ll(e,t,n,o){var i=e.updateQueue;un=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var a=d,g=a.next;a.next=null,l===null?s=g:l.next=g,l=a;var m=e.alternate;m!==null&&(m=m.updateQueue,d=m.lastBaseUpdate,d!==l&&(d===null?m.firstBaseUpdate=g:d.next=g,m.lastBaseUpdate=a))}if(s!==null){var y=i.baseState;l=0,m=g=a=null,d=s;do{var f=d.lane,E=d.eventTime;if((o&f)===f){m!==null&&(m=m.next={eventTime:E,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var C=e,w=d;switch(f=t,E=n,w.tag){case 1:if(C=w.payload,typeof C=="function"){y=C.call(E,y,f);break e}y=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=w.payload,f=typeof C=="function"?C.call(E,y,f):C,f==null)break e;y=mt({},y,f);break e;case 2:un=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[d]:f.push(d))}else E={eventTime:E,lane:f,tag:d.tag,payload:d.payload,callback:d.callback,next:null},m===null?(g=m=E,a=y):m=m.next=E,l|=f;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;f=d,d=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(m===null&&(a=y),i.baseState=a,i.firstBaseUpdate=g,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Kn|=l,e.lanes=l,e.memoizedState=y}}function Hg(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],i=o.callback;if(i!==null){if(o.callback=null,o=n,typeof i!="function")throw Error(fe(191,i));i.call(o)}}}var Vi={},Wr=Bn(Vi),Ri=Bn(Vi),Fi=Bn(Vi);function On(e){if(e===Vi)throw Error(fe(174));return e}function vc(e,t){switch(st(Fi,t),st(Ri,e),st(Wr,Vi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ua(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ua(t,e)}dt(Wr),st(Wr,t)}function Ro(){dt(Wr),dt(Ri),dt(Fi)}function Cb(e){On(Fi.current);var t=On(Wr.current),n=Ua(t,e.type);t!==n&&(st(Ri,e),st(Wr,n))}function kc(e){Ri.current===e&&(dt(Wr),dt(Ri))}var ut=Bn(0);function al(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ca=[];function jc(){for(var e=0;e<ca.length;e++)ca[e]._workInProgressVersionPrimary=null;ca.length=0}var _s=nn.ReactCurrentDispatcher,ga=nn.ReactCurrentBatchConfig,Qn=0,pt=null,St=null,Bt=null,dl=!1,mi=!1,Mi=0,ex=0;function Wt(){throw Error(fe(321))}function wc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ir(e[n],t[n]))return!1;return!0}function Sc(e,t,n,o,i,s){if(Qn=s,pt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_s.current=e===null||e.memoizedState===null?ox:ix,e=n(o,i),mi){s=0;do{if(mi=!1,Mi=0,25<=s)throw Error(fe(301));s+=1,Bt=St=null,t.updateQueue=null,_s.current=sx,e=n(o,i)}while(mi)}if(_s.current=cl,t=St!==null&&St.next!==null,Qn=0,Bt=St=pt=null,dl=!1,t)throw Error(fe(300));return e}function Cc(){var e=Mi!==0;return Mi=0,e}function Ar(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?pt.memoizedState=Bt=e:Bt=Bt.next=e,Bt}function fr(){if(St===null){var e=pt.alternate;e=e!==null?e.memoizedState:null}else e=St.next;var t=Bt===null?pt.memoizedState:Bt.next;if(t!==null)Bt=t,St=e;else{if(e===null)throw Error(fe(310));St=e,e={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Bt===null?pt.memoizedState=Bt=e:Bt=Bt.next=e}return Bt}function Wi(e,t){return typeof t=="function"?t(e):t}function ua(e){var t=fr(),n=t.queue;if(n===null)throw Error(fe(311));n.lastRenderedReducer=e;var o=St,i=o.baseQueue,s=n.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}o.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,o=o.baseState;var d=l=null,a=null,g=s;do{var m=g.lane;if((Qn&m)===m)a!==null&&(a=a.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),o=g.hasEagerState?g.eagerState:e(o,g.action);else{var y={lane:m,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};a===null?(d=a=y,l=o):a=a.next=y,pt.lanes|=m,Kn|=m}g=g.next}while(g!==null&&g!==s);a===null?l=o:a.next=d,Ir(o,t.memoizedState)||(Kt=!0),t.memoizedState=o,t.baseState=l,t.baseQueue=a,n.lastRenderedState=o}if(e=n.interleaved,e!==null){i=e;do s=i.lane,pt.lanes|=s,Kn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function pa(e){var t=fr(),n=t.queue;if(n===null)throw Error(fe(311));n.lastRenderedReducer=e;var o=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do s=e(s,l.action),l=l.next;while(l!==i);Ir(s,t.memoizedState)||(Kt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,o]}function zb(){}function Ib(e,t){var n=pt,o=fr(),i=t(),s=!Ir(o.memoizedState,i);if(s&&(o.memoizedState=i,Kt=!0),o=o.queue,zc(Bb.bind(null,n,o,e),[e]),o.getSnapshot!==t||s||Bt!==null&&Bt.memoizedState.tag&1){if(n.flags|=2048,Li(9,Eb.bind(null,n,o,i,t),void 0,null),Dt===null)throw Error(fe(349));Qn&30||Tb(n,t,i)}return i}function Tb(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pt.updateQueue,t===null?(t={lastEffect:null,stores:null},pt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Eb(e,t,n,o){t.value=n,t.getSnapshot=o,Db(t)&&Ab(e)}function Bb(e,t,n){return n(function(){Db(t)&&Ab(e)})}function Db(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ir(e,n)}catch{return!0}}function Ab(e){var t=tn(e,1);t!==null&&zr(t,e,1,-1)}function Gg(e){var t=Ar();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},t.queue=e,e=e.dispatch=nx.bind(null,pt,e),[t.memoizedState,e]}function Li(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=pt.updateQueue,t===null?(t={lastEffect:null,stores:null},pt.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function Rb(){return fr().memoizedState}function $s(e,t,n,o){var i=Ar();pt.flags|=e,i.memoizedState=Li(1|t,n,void 0,o===void 0?null:o)}function Al(e,t,n,o){var i=fr();o=o===void 0?null:o;var s=void 0;if(St!==null){var l=St.memoizedState;if(s=l.destroy,o!==null&&wc(o,l.deps)){i.memoizedState=Li(t,n,s,o);return}}pt.flags|=e,i.memoizedState=Li(1|t,n,s,o)}function Ug(e,t){return $s(8390656,8,e,t)}function zc(e,t){return Al(2048,8,e,t)}function Fb(e,t){return Al(4,2,e,t)}function Mb(e,t){return Al(4,4,e,t)}function Wb(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lb(e,t,n){return n=n!=null?n.concat([e]):null,Al(4,4,Wb.bind(null,t,e),n)}function Ic(){}function _b(e,t){var n=fr();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&wc(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function $b(e,t){var n=fr();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&wc(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function Pb(e,t,n){return Qn&21?(Ir(n,t)||(n=Up(),pt.lanes|=n,Kn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Kt=!0),e.memoizedState=n)}function tx(e,t){var n=rt;rt=n!==0&&4>n?n:4,e(!0);var o=ga.transition;ga.transition={};try{e(!1),t()}finally{rt=n,ga.transition=o}}function Nb(){return fr().memoizedState}function rx(e,t,n){var o=Sn(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Ob(e))Hb(t,n);else if(n=wb(e,t,n,o),n!==null){var i=Gt();zr(n,e,o,i),Gb(n,t,o)}}function nx(e,t,n){var o=Sn(e),i={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ob(e))Hb(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,d=s(l,n);if(i.hasEagerState=!0,i.eagerState=d,Ir(d,l)){var a=t.interleaved;a===null?(i.next=i,xc(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=wb(e,t,i,o),n!==null&&(i=Gt(),zr(n,e,o,i),Gb(n,t,o))}}function Ob(e){var t=e.alternate;return e===pt||t!==null&&t===pt}function Hb(e,t){mi=dl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gb(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,oc(e,n)}}var cl={readContext:hr,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},ox={readContext:hr,useCallback:function(e,t){return Ar().memoizedState=[e,t===void 0?null:t],e},useContext:hr,useEffect:Ug,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$s(4194308,4,Wb.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $s(4194308,4,e,t)},useInsertionEffect:function(e,t){return $s(4,2,e,t)},useMemo:function(e,t){var n=Ar();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=Ar();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=rx.bind(null,pt,e),[o.memoizedState,e]},useRef:function(e){var t=Ar();return e={current:e},t.memoizedState=e},useState:Gg,useDebugValue:Ic,useDeferredValue:function(e){return Ar().memoizedState=e},useTransition:function(){var e=Gg(!1),t=e[0];return e=tx.bind(null,e[1]),Ar().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=pt,i=Ar();if(ct){if(n===void 0)throw Error(fe(407));n=n()}else{if(n=t(),Dt===null)throw Error(fe(349));Qn&30||Tb(o,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Ug(Bb.bind(null,o,s,e),[e]),o.flags|=2048,Li(9,Eb.bind(null,o,s,n,t),void 0,null),n},useId:function(){var e=Ar(),t=Dt.identifierPrefix;if(ct){var n=Xr,o=Kr;n=(o&~(1<<32-Cr(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=Mi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ex++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ix={readContext:hr,useCallback:_b,useContext:hr,useEffect:zc,useImperativeHandle:Lb,useInsertionEffect:Fb,useLayoutEffect:Mb,useMemo:$b,useReducer:ua,useRef:Rb,useState:function(){return ua(Wi)},useDebugValue:Ic,useDeferredValue:function(e){var t=fr();return Pb(t,St.memoizedState,e)},useTransition:function(){var e=ua(Wi)[0],t=fr().memoizedState;return[e,t]},useMutableSource:zb,useSyncExternalStore:Ib,useId:Nb,unstable_isNewReconciler:!1},sx={readContext:hr,useCallback:_b,useContext:hr,useEffect:zc,useImperativeHandle:Lb,useInsertionEffect:Fb,useLayoutEffect:Mb,useMemo:$b,useReducer:pa,useRef:Rb,useState:function(){return pa(Wi)},useDebugValue:Ic,useDeferredValue:function(e){var t=fr();return St===null?t.memoizedState=e:Pb(t,St.memoizedState,e)},useTransition:function(){var e=pa(Wi)[0],t=fr().memoizedState;return[e,t]},useMutableSource:zb,useSyncExternalStore:Ib,useId:Nb,unstable_isNewReconciler:!1};function kr(e,t){if(e&&e.defaultProps){t=mt({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ud(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:mt({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Rl={isMounted:function(e){return(e=e._reactInternals)?Zn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=Gt(),i=Sn(e),s=qr(o,i);s.payload=t,n!=null&&(s.callback=n),t=jn(e,s,i),t!==null&&(zr(t,e,i,o),Ls(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=Gt(),i=Sn(e),s=qr(o,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=jn(e,s,i),t!==null&&(zr(t,e,i,o),Ls(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Gt(),o=Sn(e),i=qr(n,o);i.tag=2,t!=null&&(i.callback=t),t=jn(e,i,o),t!==null&&(zr(t,e,o,n),Ls(t,e,o))}};function Vg(e,t,n,o,i,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,l):t.prototype&&t.prototype.isPureReactComponent?!Ei(n,o)||!Ei(i,s):!0}function Ub(e,t,n){var o=!1,i=In,s=t.contextType;return typeof s=="object"&&s!==null?s=hr(s):(i=qt(t)?Vn:Nt.current,o=t.contextTypes,s=(o=o!=null)?Bo(e,i):In),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Rl,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Yg(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&Rl.enqueueReplaceState(t,t.state,null)}function pd(e,t,n,o){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},yc(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=hr(s):(s=qt(t)?Vn:Nt.current,i.context=Bo(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ud(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Rl.enqueueReplaceState(i,i.state,null),ll(e,n,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Fo(e,t){try{var n="",o=t;do n+=Rh(o),o=o.return;while(o);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function ba(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function bd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var lx=typeof WeakMap=="function"?WeakMap:Map;function Vb(e,t,n){n=qr(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){ul||(ul=!0,Sd=o),bd(e,t)},n}function Yb(e,t,n){n=qr(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=t.value;n.payload=function(){return o(i)},n.callback=function(){bd(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bd(e,t),typeof o!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Qg(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new lx;var i=new Set;o.set(t,i)}else i=o.get(t),i===void 0&&(i=new Set,o.set(t,i));i.has(n)||(i.add(n),e=kx.bind(null,e,t,n),t.then(e,e))}function Kg(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xg(e,t,n,o,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qr(-1,1),t.tag=2,jn(n,t,1))),n.lanes|=1),e)}var ax=nn.ReactCurrentOwner,Kt=!1;function Ht(e,t,n,o){t.child=e===null?jb(t,null,n,o):Ao(t,e.child,n,o)}function qg(e,t,n,o,i){n=n.render;var s=t.ref;return Io(t,i),o=Sc(e,t,n,o,s,i),n=Cc(),e!==null&&!Kt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rn(e,t,i)):(ct&&n&&uc(t),t.flags|=1,Ht(e,t,o,i),t.child)}function Zg(e,t,n,o,i){if(e===null){var s=n.type;return typeof s=="function"&&!Mc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Qb(e,t,s,o,i)):(e=Hs(n.type,null,o,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ei,n(l,o)&&e.ref===t.ref)return rn(e,t,i)}return t.flags|=1,e=Cn(s,o),e.ref=t.ref,e.return=t,t.child=e}function Qb(e,t,n,o,i){if(e!==null){var s=e.memoizedProps;if(Ei(s,o)&&e.ref===t.ref)if(Kt=!1,t.pendingProps=o=s,(e.lanes&i)!==0)e.flags&131072&&(Kt=!0);else return t.lanes=e.lanes,rn(e,t,i)}return md(e,t,n,o,i)}function Kb(e,t,n){var o=t.pendingProps,i=o.children,s=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(jo,rr),rr|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,st(jo,rr),rr|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:n,st(jo,rr),rr|=o}else s!==null?(o=s.baseLanes|n,t.memoizedState=null):o=n,st(jo,rr),rr|=o;return Ht(e,t,i,n),t.child}function Xb(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function md(e,t,n,o,i){var s=qt(n)?Vn:Nt.current;return s=Bo(t,s),Io(t,i),n=Sc(e,t,n,o,s,i),o=Cc(),e!==null&&!Kt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rn(e,t,i)):(ct&&o&&uc(t),t.flags|=1,Ht(e,t,n,i),t.child)}function Jg(e,t,n,o,i){if(qt(n)){var s=!0;rl(t)}else s=!1;if(Io(t,i),t.stateNode===null)Ps(e,t),Ub(t,n,o),pd(t,n,o,i),o=!0;else if(e===null){var l=t.stateNode,d=t.memoizedProps;l.props=d;var a=l.context,g=n.contextType;typeof g=="object"&&g!==null?g=hr(g):(g=qt(n)?Vn:Nt.current,g=Bo(t,g));var m=n.getDerivedStateFromProps,y=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";y||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(d!==o||a!==g)&&Yg(t,l,o,g),un=!1;var f=t.memoizedState;l.state=f,ll(t,o,l,i),a=t.memoizedState,d!==o||f!==a||Xt.current||un?(typeof m=="function"&&(ud(t,n,m,o),a=t.memoizedState),(d=un||Vg(t,n,d,o,f,a,g))?(y||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=a),l.props=o,l.state=a,l.context=g,o=d):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{l=t.stateNode,Sb(e,t),d=t.memoizedProps,g=t.type===t.elementType?d:kr(t.type,d),l.props=g,y=t.pendingProps,f=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=hr(a):(a=qt(n)?Vn:Nt.current,a=Bo(t,a));var E=n.getDerivedStateFromProps;(m=typeof E=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(d!==y||f!==a)&&Yg(t,l,o,a),un=!1,f=t.memoizedState,l.state=f,ll(t,o,l,i);var C=t.memoizedState;d!==y||f!==C||Xt.current||un?(typeof E=="function"&&(ud(t,n,E,o),C=t.memoizedState),(g=un||Vg(t,n,g,o,f,C,a)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,C,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,C,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||d===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=C),l.props=o,l.state=C,l.context=a,o=g):(typeof l.componentDidUpdate!="function"||d===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),o=!1)}return hd(e,t,n,o,s,i)}function hd(e,t,n,o,i,s){Xb(e,t);var l=(t.flags&128)!==0;if(!o&&!l)return i&&_g(t,n,!1),rn(e,t,s);o=t.stateNode,ax.current=t;var d=l&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&l?(t.child=Ao(t,e.child,null,s),t.child=Ao(t,null,d,s)):Ht(e,t,d,s),t.memoizedState=o.state,i&&_g(t,n,!0),t.child}function qb(e){var t=e.stateNode;t.pendingContext?Lg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Lg(e,t.context,!1),vc(e,t.containerInfo)}function eu(e,t,n,o,i){return Do(),bc(i),t.flags|=256,Ht(e,t,n,o),t.child}var fd={dehydrated:null,treeContext:null,retryLane:0};function xd(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zb(e,t,n){var o=t.pendingProps,i=ut.current,s=!1,l=(t.flags&128)!==0,d;if((d=l)||(d=e!==null&&e.memoizedState===null?!1:(i&2)!==0),d?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),st(ut,i&1),e===null)return cd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=o.children,e=o.fallback,s?(o=t.mode,s=t.child,l={mode:"hidden",children:l},!(o&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=Wl(l,o,0,null),e=Un(e,o,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=xd(n),t.memoizedState=fd,e):Tc(t,l));if(i=e.memoizedState,i!==null&&(d=i.dehydrated,d!==null))return dx(e,t,l,o,d,i,n);if(s){s=o.fallback,l=t.mode,i=e.child,d=i.sibling;var a={mode:"hidden",children:o.children};return!(l&1)&&t.child!==i?(o=t.child,o.childLanes=0,o.pendingProps=a,t.deletions=null):(o=Cn(i,a),o.subtreeFlags=i.subtreeFlags&14680064),d!==null?s=Cn(d,s):(s=Un(s,l,n,null),s.flags|=2),s.return=t,o.return=t,o.sibling=s,t.child=o,o=s,s=t.child,l=e.child.memoizedState,l=l===null?xd(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=fd,o}return s=e.child,e=s.sibling,o=Cn(s,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Tc(e,t){return t=Wl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gs(e,t,n,o){return o!==null&&bc(o),Ao(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dx(e,t,n,o,i,s,l){if(n)return t.flags&256?(t.flags&=-257,o=ba(Error(fe(422))),gs(e,t,l,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=o.fallback,i=t.mode,o=Wl({mode:"visible",children:o.children},i,0,null),s=Un(s,i,l,null),s.flags|=2,o.return=t,s.return=t,o.sibling=s,t.child=o,t.mode&1&&Ao(t,e.child,null,l),t.child.memoizedState=xd(l),t.memoizedState=fd,s);if(!(t.mode&1))return gs(e,t,l,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var d=o.dgst;return o=d,s=Error(fe(419)),o=ba(s,o,void 0),gs(e,t,l,o)}if(d=(l&e.childLanes)!==0,Kt||d){if(o=Dt,o!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(o.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,tn(e,i),zr(o,e,i,-1))}return Fc(),o=ba(Error(fe(421))),gs(e,t,l,o)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=jx.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,nr=kn(i.nextSibling),or=t,ct=!0,Sr=null,e!==null&&(ur[pr++]=Kr,ur[pr++]=Xr,ur[pr++]=Yn,Kr=e.id,Xr=e.overflow,Yn=t),t=Tc(t,o.children),t.flags|=4096,t)}function tu(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),gd(e.return,t,n)}function ma(e,t,n,o,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=n,s.tailMode=i)}function Jb(e,t,n){var o=t.pendingProps,i=o.revealOrder,s=o.tail;if(Ht(e,t,o.children,n),o=ut.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tu(e,n,t);else if(e.tag===19)tu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(st(ut,o),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&al(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ma(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&al(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ma(t,!0,n,null,s);break;case"together":ma(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ps(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(fe(153));if(t.child!==null){for(e=t.child,n=Cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cx(e,t,n){switch(t.tag){case 3:qb(t),Do();break;case 5:Cb(t);break;case 1:qt(t.type)&&rl(t);break;case 4:vc(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,i=t.memoizedProps.value;st(il,o._currentValue),o._currentValue=i;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(st(ut,ut.current&1),t.flags|=128,null):n&t.child.childLanes?Zb(e,t,n):(st(ut,ut.current&1),e=rn(e,t,n),e!==null?e.sibling:null);st(ut,ut.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return Jb(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),st(ut,ut.current),o)break;return null;case 22:case 23:return t.lanes=0,Kb(e,t,n)}return rn(e,t,n)}var em,yd,tm,rm;em=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yd=function(){};tm=function(e,t,n,o){var i=e.memoizedProps;if(i!==o){e=t.stateNode,On(Wr.current);var s=null;switch(n){case"input":i=Na(e,i),o=Na(e,o),s=[];break;case"select":i=mt({},i,{value:void 0}),o=mt({},o,{value:void 0}),s=[];break;case"textarea":i=Ga(e,i),o=Ga(e,o),s=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=el)}Va(n,o);var l;n=null;for(g in i)if(!o.hasOwnProperty(g)&&i.hasOwnProperty(g)&&i[g]!=null)if(g==="style"){var d=i[g];for(l in d)d.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(ji.hasOwnProperty(g)?s||(s=[]):(s=s||[]).push(g,null));for(g in o){var a=o[g];if(d=i!=null?i[g]:void 0,o.hasOwnProperty(g)&&a!==d&&(a!=null||d!=null))if(g==="style")if(d){for(l in d)!d.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&d[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(s||(s=[]),s.push(g,n)),n=a;else g==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,d=d?d.__html:void 0,a!=null&&d!==a&&(s=s||[]).push(g,a)):g==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(g,""+a):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(ji.hasOwnProperty(g)?(a!=null&&g==="onScroll"&&at("scroll",e),s||d===a||(s=[])):(s=s||[]).push(g,a))}n&&(s=s||[]).push("style",n);var g=s;(t.updateQueue=g)&&(t.flags|=4)}};rm=function(e,t,n,o){n!==o&&(t.flags|=4)};function qo(e,t){if(!ct)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function gx(e,t,n){var o=t.pendingProps;switch(pc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(t),null;case 1:return qt(t.type)&&tl(),Lt(t),null;case 3:return o=t.stateNode,Ro(),dt(Xt),dt(Nt),jc(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(ds(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Sr!==null&&(Id(Sr),Sr=null))),yd(e,t),Lt(t),null;case 5:kc(t);var i=On(Fi.current);if(n=t.type,e!==null&&t.stateNode!=null)tm(e,t,n,o,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(fe(166));return Lt(t),null}if(e=On(Wr.current),ds(t)){o=t.stateNode,n=t.type;var s=t.memoizedProps;switch(o[Fr]=t,o[Ai]=s,e=(t.mode&1)!==0,n){case"dialog":at("cancel",o),at("close",o);break;case"iframe":case"object":case"embed":at("load",o);break;case"video":case"audio":for(i=0;i<si.length;i++)at(si[i],o);break;case"source":at("error",o);break;case"img":case"image":case"link":at("error",o),at("load",o);break;case"details":at("toggle",o);break;case"input":cg(o,s),at("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},at("invalid",o);break;case"textarea":ug(o,s),at("invalid",o)}Va(n,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var d=s[l];l==="children"?typeof d=="string"?o.textContent!==d&&(s.suppressHydrationWarning!==!0&&as(o.textContent,d,e),i=["children",d]):typeof d=="number"&&o.textContent!==""+d&&(s.suppressHydrationWarning!==!0&&as(o.textContent,d,e),i=["children",""+d]):ji.hasOwnProperty(l)&&d!=null&&l==="onScroll"&&at("scroll",o)}switch(n){case"input":es(o),gg(o,s,!0);break;case"textarea":es(o),pg(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=el)}o=i,t.updateQueue=o,o!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=l.createElement(n,{is:o.is}):(e=l.createElement(n),n==="select"&&(l=e,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):e=l.createElementNS(e,n),e[Fr]=t,e[Ai]=o,em(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ya(n,o),n){case"dialog":at("cancel",e),at("close",e),i=o;break;case"iframe":case"object":case"embed":at("load",e),i=o;break;case"video":case"audio":for(i=0;i<si.length;i++)at(si[i],e);i=o;break;case"source":at("error",e),i=o;break;case"img":case"image":case"link":at("error",e),at("load",e),i=o;break;case"details":at("toggle",e),i=o;break;case"input":cg(e,o),i=Na(e,o),at("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=mt({},o,{value:void 0}),at("invalid",e);break;case"textarea":ug(e,o),i=Ga(e,o),at("invalid",e);break;default:i=o}Va(n,i),d=i;for(s in d)if(d.hasOwnProperty(s)){var a=d[s];s==="style"?Rp(e,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Dp(e,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&wi(e,a):typeof a=="number"&&wi(e,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ji.hasOwnProperty(s)?a!=null&&s==="onScroll"&&at("scroll",e):a!=null&&Zd(e,s,a,l))}switch(n){case"input":es(e),gg(e,o,!1);break;case"textarea":es(e),pg(e);break;case"option":o.value!=null&&e.setAttribute("value",""+zn(o.value));break;case"select":e.multiple=!!o.multiple,s=o.value,s!=null?wo(e,!!o.multiple,s,!1):o.defaultValue!=null&&wo(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=el)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Lt(t),null;case 6:if(e&&t.stateNode!=null)rm(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(fe(166));if(n=On(Fi.current),On(Wr.current),ds(t)){if(o=t.stateNode,n=t.memoizedProps,o[Fr]=t,(s=o.nodeValue!==n)&&(e=or,e!==null))switch(e.tag){case 3:as(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&as(o.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Fr]=t,t.stateNode=o}return Lt(t),null;case 13:if(dt(ut),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ct&&nr!==null&&t.mode&1&&!(t.flags&128))vb(),Do(),t.flags|=98560,s=!1;else if(s=ds(t),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(fe(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(fe(317));s[Fr]=t}else Do(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Lt(t),s=!1}else Sr!==null&&(Id(Sr),Sr=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||ut.current&1?Ct===0&&(Ct=3):Fc())),t.updateQueue!==null&&(t.flags|=4),Lt(t),null);case 4:return Ro(),yd(e,t),e===null&&Bi(t.stateNode.containerInfo),Lt(t),null;case 10:return fc(t.type._context),Lt(t),null;case 17:return qt(t.type)&&tl(),Lt(t),null;case 19:if(dt(ut),s=t.memoizedState,s===null)return Lt(t),null;if(o=(t.flags&128)!==0,l=s.rendering,l===null)if(o)qo(s,!1);else{if(Ct!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=al(e),l!==null){for(t.flags|=128,qo(s,!1),o=l.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)s=n,e=o,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return st(ut,ut.current&1|2),t.child}e=e.sibling}s.tail!==null&&xt()>Mo&&(t.flags|=128,o=!0,qo(s,!1),t.lanes=4194304)}else{if(!o)if(e=al(l),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),qo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!ct)return Lt(t),null}else 2*xt()-s.renderingStartTime>Mo&&n!==1073741824&&(t.flags|=128,o=!0,qo(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(n=s.last,n!==null?n.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=xt(),t.sibling=null,n=ut.current,st(ut,o?n&1|2:n&1),t):(Lt(t),null);case 22:case 23:return Rc(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?rr&1073741824&&(Lt(t),t.subtreeFlags&6&&(t.flags|=8192)):Lt(t),null;case 24:return null;case 25:return null}throw Error(fe(156,t.tag))}function ux(e,t){switch(pc(t),t.tag){case 1:return qt(t.type)&&tl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ro(),dt(Xt),dt(Nt),jc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return kc(t),null;case 13:if(dt(ut),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(fe(340));Do()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return dt(ut),null;case 4:return Ro(),null;case 10:return fc(t.type._context),null;case 22:case 23:return Rc(),null;case 24:return null;default:return null}}var us=!1,$t=!1,px=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function ko(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){ft(e,t,o)}else n.current=null}function vd(e,t,n){try{n()}catch(o){ft(e,t,o)}}var ru=!1;function bx(e,t){if(nd=qs,e=lb(),gc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var i=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,d=-1,a=-1,g=0,m=0,y=e,f=null;t:for(;;){for(var E;y!==n||i!==0&&y.nodeType!==3||(d=l+i),y!==s||o!==0&&y.nodeType!==3||(a=l+o),y.nodeType===3&&(l+=y.nodeValue.length),(E=y.firstChild)!==null;)f=y,y=E;for(;;){if(y===e)break t;if(f===n&&++g===i&&(d=l),f===s&&++m===o&&(a=l),(E=y.nextSibling)!==null)break;y=f,f=y.parentNode}y=E}n=d===-1||a===-1?null:{start:d,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(od={focusedElem:e,selectionRange:n},qs=!1,Ee=t;Ee!==null;)if(t=Ee,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ee=e;else for(;Ee!==null;){t=Ee;try{var C=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var w=C.memoizedProps,D=C.memoizedState,b=t.stateNode,p=b.getSnapshotBeforeUpdate(t.elementType===t.type?w:kr(t.type,w),D);b.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(fe(163))}}catch(T){ft(t,t.return,T)}if(e=t.sibling,e!==null){e.return=t.return,Ee=e;break}Ee=t.return}return C=ru,ru=!1,C}function hi(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&vd(t,n,s)}i=i.next}while(i!==o)}}function Fl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function kd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function nm(e){var t=e.alternate;t!==null&&(e.alternate=null,nm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Fr],delete t[Ai],delete t[ld],delete t[Xf],delete t[qf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function om(e){return e.tag===5||e.tag===3||e.tag===4}function nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||om(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jd(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=el));else if(o!==4&&(e=e.child,e!==null))for(jd(e,t,n),e=e.sibling;e!==null;)jd(e,t,n),e=e.sibling}function wd(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(wd(e,t,n),e=e.sibling;e!==null;)wd(e,t,n),e=e.sibling}var Rt=null,wr=!1;function ln(e,t,n){for(n=n.child;n!==null;)im(e,t,n),n=n.sibling}function im(e,t,n){if(Mr&&typeof Mr.onCommitFiberUnmount=="function")try{Mr.onCommitFiberUnmount(zl,n)}catch{}switch(n.tag){case 5:$t||ko(n,t);case 6:var o=Rt,i=wr;Rt=null,ln(e,t,n),Rt=o,wr=i,Rt!==null&&(wr?(e=Rt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Rt.removeChild(n.stateNode));break;case 18:Rt!==null&&(wr?(e=Rt,n=n.stateNode,e.nodeType===8?aa(e.parentNode,n):e.nodeType===1&&aa(e,n),Ii(e)):aa(Rt,n.stateNode));break;case 4:o=Rt,i=wr,Rt=n.stateNode.containerInfo,wr=!0,ln(e,t,n),Rt=o,wr=i;break;case 0:case 11:case 14:case 15:if(!$t&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&vd(n,t,l),i=i.next}while(i!==o)}ln(e,t,n);break;case 1:if(!$t&&(ko(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(d){ft(n,t,d)}ln(e,t,n);break;case 21:ln(e,t,n);break;case 22:n.mode&1?($t=(o=$t)||n.memoizedState!==null,ln(e,t,n),$t=o):ln(e,t,n);break;default:ln(e,t,n)}}function ou(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new px),t.forEach(function(o){var i=wx.bind(null,e,o);n.has(o)||(n.add(o),o.then(i,i))})}}function xr(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var i=n[o];try{var s=e,l=t,d=l;e:for(;d!==null;){switch(d.tag){case 5:Rt=d.stateNode,wr=!1;break e;case 3:Rt=d.stateNode.containerInfo,wr=!0;break e;case 4:Rt=d.stateNode.containerInfo,wr=!0;break e}d=d.return}if(Rt===null)throw Error(fe(160));im(s,l,i),Rt=null,wr=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(g){ft(i,t,g)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)sm(t,e),t=t.sibling}function sm(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xr(t,e),Br(e),o&4){try{hi(3,e,e.return),Fl(3,e)}catch(w){ft(e,e.return,w)}try{hi(5,e,e.return)}catch(w){ft(e,e.return,w)}}break;case 1:xr(t,e),Br(e),o&512&&n!==null&&ko(n,n.return);break;case 5:if(xr(t,e),Br(e),o&512&&n!==null&&ko(n,n.return),e.flags&32){var i=e.stateNode;try{wi(i,"")}catch(w){ft(e,e.return,w)}}if(o&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,l=n!==null?n.memoizedProps:s,d=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{d==="input"&&s.type==="radio"&&s.name!=null&&Tp(i,s),Ya(d,l);var g=Ya(d,s);for(l=0;l<a.length;l+=2){var m=a[l],y=a[l+1];m==="style"?Rp(i,y):m==="dangerouslySetInnerHTML"?Dp(i,y):m==="children"?wi(i,y):Zd(i,m,y,g)}switch(d){case"input":Oa(i,s);break;case"textarea":Ep(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?wo(i,!!s.multiple,E,!1):f!==!!s.multiple&&(s.defaultValue!=null?wo(i,!!s.multiple,s.defaultValue,!0):wo(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ai]=s}catch(w){ft(e,e.return,w)}}break;case 6:if(xr(t,e),Br(e),o&4){if(e.stateNode===null)throw Error(fe(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(w){ft(e,e.return,w)}}break;case 3:if(xr(t,e),Br(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Ii(t.containerInfo)}catch(w){ft(e,e.return,w)}break;case 4:xr(t,e),Br(e);break;case 13:xr(t,e),Br(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Dc=xt())),o&4&&ou(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?($t=(g=$t)||m,xr(t,e),$t=g):xr(t,e),Br(e),o&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!m&&e.mode&1)for(Ee=e,m=e.child;m!==null;){for(y=Ee=m;Ee!==null;){switch(f=Ee,E=f.child,f.tag){case 0:case 11:case 14:case 15:hi(4,f,f.return);break;case 1:ko(f,f.return);var C=f.stateNode;if(typeof C.componentWillUnmount=="function"){o=f,n=f.return;try{t=o,C.props=t.memoizedProps,C.state=t.memoizedState,C.componentWillUnmount()}catch(w){ft(o,n,w)}}break;case 5:ko(f,f.return);break;case 22:if(f.memoizedState!==null){su(y);continue}}E!==null?(E.return=f,Ee=E):su(y)}m=m.sibling}e:for(m=null,y=e;;){if(y.tag===5){if(m===null){m=y;try{i=y.stateNode,g?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(d=y.stateNode,a=y.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,d.style.display=Ap("display",l))}catch(w){ft(e,e.return,w)}}}else if(y.tag===6){if(m===null)try{y.stateNode.nodeValue=g?"":y.memoizedProps}catch(w){ft(e,e.return,w)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;m===y&&(m=null),y=y.return}m===y&&(m=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:xr(t,e),Br(e),o&4&&ou(e);break;case 21:break;default:xr(t,e),Br(e)}}function Br(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(om(n)){var o=n;break e}n=n.return}throw Error(fe(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(wi(i,""),o.flags&=-33);var s=nu(e);wd(e,s,i);break;case 3:case 4:var l=o.stateNode.containerInfo,d=nu(e);jd(e,d,l);break;default:throw Error(fe(161))}}catch(a){ft(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function mx(e,t,n){Ee=e,lm(e)}function lm(e,t,n){for(var o=(e.mode&1)!==0;Ee!==null;){var i=Ee,s=i.child;if(i.tag===22&&o){var l=i.memoizedState!==null||us;if(!l){var d=i.alternate,a=d!==null&&d.memoizedState!==null||$t;d=us;var g=$t;if(us=l,($t=a)&&!g)for(Ee=i;Ee!==null;)l=Ee,a=l.child,l.tag===22&&l.memoizedState!==null?lu(i):a!==null?(a.return=l,Ee=a):lu(i);for(;s!==null;)Ee=s,lm(s),s=s.sibling;Ee=i,us=d,$t=g}iu(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Ee=s):iu(e)}}function iu(e){for(;Ee!==null;){var t=Ee;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:$t||Fl(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!$t)if(n===null)o.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:kr(t.type,n.memoizedProps);o.componentDidUpdate(i,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Hg(t,s,o);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Hg(t,l,n)}break;case 5:var d=t.stateNode;if(n===null&&t.flags&4){n=d;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var g=t.alternate;if(g!==null){var m=g.memoizedState;if(m!==null){var y=m.dehydrated;y!==null&&Ii(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(fe(163))}$t||t.flags&512&&kd(t)}catch(f){ft(t,t.return,f)}}if(t===e){Ee=null;break}if(n=t.sibling,n!==null){n.return=t.return,Ee=n;break}Ee=t.return}}function su(e){for(;Ee!==null;){var t=Ee;if(t===e){Ee=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Ee=n;break}Ee=t.return}}function lu(e){for(;Ee!==null;){var t=Ee;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Fl(4,t)}catch(a){ft(t,n,a)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var i=t.return;try{o.componentDidMount()}catch(a){ft(t,i,a)}}var s=t.return;try{kd(t)}catch(a){ft(t,s,a)}break;case 5:var l=t.return;try{kd(t)}catch(a){ft(t,l,a)}}}catch(a){ft(t,t.return,a)}if(t===e){Ee=null;break}var d=t.sibling;if(d!==null){d.return=t.return,Ee=d;break}Ee=t.return}}var hx=Math.ceil,gl=nn.ReactCurrentDispatcher,Ec=nn.ReactCurrentOwner,mr=nn.ReactCurrentBatchConfig,Je=0,Dt=null,vt=null,Ft=0,rr=0,jo=Bn(0),Ct=0,_i=null,Kn=0,Ml=0,Bc=0,fi=null,Qt=null,Dc=0,Mo=1/0,Or=null,ul=!1,Sd=null,wn=null,ps=!1,fn=null,pl=0,xi=0,Cd=null,Ns=-1,Os=0;function Gt(){return Je&6?xt():Ns!==-1?Ns:Ns=xt()}function Sn(e){return e.mode&1?Je&2&&Ft!==0?Ft&-Ft:Jf.transition!==null?(Os===0&&(Os=Up()),Os):(e=rt,e!==0||(e=window.event,e=e===void 0?16:Zp(e.type)),e):1}function zr(e,t,n,o){if(50<xi)throw xi=0,Cd=null,Error(fe(185));Hi(e,n,o),(!(Je&2)||e!==Dt)&&(e===Dt&&(!(Je&2)&&(Ml|=n),Ct===4&&bn(e,Ft)),Zt(e,o),n===1&&Je===0&&!(t.mode&1)&&(Mo=xt()+500,Dl&&Dn()))}function Zt(e,t){var n=e.callbackNode;Zh(e,t);var o=Xs(e,e===Dt?Ft:0);if(o===0)n!==null&&hg(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&hg(n),t===1)e.tag===0?Zf(au.bind(null,e)):fb(au.bind(null,e)),Qf(function(){!(Je&6)&&Dn()}),n=null;else{switch(Vp(o)){case 1:n=nc;break;case 4:n=Hp;break;case 16:n=Ks;break;case 536870912:n=Gp;break;default:n=Ks}n=mm(n,am.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function am(e,t){if(Ns=-1,Os=0,Je&6)throw Error(fe(327));var n=e.callbackNode;if(To()&&e.callbackNode!==n)return null;var o=Xs(e,e===Dt?Ft:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=bl(e,o);else{t=o;var i=Je;Je|=2;var s=cm();(Dt!==e||Ft!==t)&&(Or=null,Mo=xt()+500,Gn(e,t));do try{yx();break}catch(d){dm(e,d)}while(!0);hc(),gl.current=s,Je=i,vt!==null?t=0:(Dt=null,Ft=0,t=Ct)}if(t!==0){if(t===2&&(i=Za(e),i!==0&&(o=i,t=zd(e,i))),t===1)throw n=_i,Gn(e,0),bn(e,o),Zt(e,xt()),n;if(t===6)bn(e,o);else{if(i=e.current.alternate,!(o&30)&&!fx(i)&&(t=bl(e,o),t===2&&(s=Za(e),s!==0&&(o=s,t=zd(e,s))),t===1))throw n=_i,Gn(e,0),bn(e,o),Zt(e,xt()),n;switch(e.finishedWork=i,e.finishedLanes=o,t){case 0:case 1:throw Error(fe(345));case 2:_n(e,Qt,Or);break;case 3:if(bn(e,o),(o&130023424)===o&&(t=Dc+500-xt(),10<t)){if(Xs(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){Gt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=sd(_n.bind(null,e,Qt,Or),t);break}_n(e,Qt,Or);break;case 4:if(bn(e,o),(o&4194240)===o)break;for(t=e.eventTimes,i=-1;0<o;){var l=31-Cr(o);s=1<<l,l=t[l],l>i&&(i=l),o&=~s}if(o=i,o=xt()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*hx(o/1960))-o,10<o){e.timeoutHandle=sd(_n.bind(null,e,Qt,Or),o);break}_n(e,Qt,Or);break;case 5:_n(e,Qt,Or);break;default:throw Error(fe(329))}}}return Zt(e,xt()),e.callbackNode===n?am.bind(null,e):null}function zd(e,t){var n=fi;return e.current.memoizedState.isDehydrated&&(Gn(e,t).flags|=256),e=bl(e,t),e!==2&&(t=Qt,Qt=n,t!==null&&Id(t)),e}function Id(e){Qt===null?Qt=e:Qt.push.apply(Qt,e)}function fx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var i=n[o],s=i.getSnapshot;i=i.value;try{if(!Ir(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bn(e,t){for(t&=~Bc,t&=~Ml,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Cr(t),o=1<<n;e[n]=-1,t&=~o}}function au(e){if(Je&6)throw Error(fe(327));To();var t=Xs(e,0);if(!(t&1))return Zt(e,xt()),null;var n=bl(e,t);if(e.tag!==0&&n===2){var o=Za(e);o!==0&&(t=o,n=zd(e,o))}if(n===1)throw n=_i,Gn(e,0),bn(e,t),Zt(e,xt()),n;if(n===6)throw Error(fe(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_n(e,Qt,Or),Zt(e,xt()),null}function Ac(e,t){var n=Je;Je|=1;try{return e(t)}finally{Je=n,Je===0&&(Mo=xt()+500,Dl&&Dn())}}function Xn(e){fn!==null&&fn.tag===0&&!(Je&6)&&To();var t=Je;Je|=1;var n=mr.transition,o=rt;try{if(mr.transition=null,rt=1,e)return e()}finally{rt=o,mr.transition=n,Je=t,!(Je&6)&&Dn()}}function Rc(){rr=jo.current,dt(jo)}function Gn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yf(n)),vt!==null)for(n=vt.return;n!==null;){var o=n;switch(pc(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&tl();break;case 3:Ro(),dt(Xt),dt(Nt),jc();break;case 5:kc(o);break;case 4:Ro();break;case 13:dt(ut);break;case 19:dt(ut);break;case 10:fc(o.type._context);break;case 22:case 23:Rc()}n=n.return}if(Dt=e,vt=e=Cn(e.current,null),Ft=rr=t,Ct=0,_i=null,Bc=Ml=Kn=0,Qt=fi=null,Nn!==null){for(t=0;t<Nn.length;t++)if(n=Nn[t],o=n.interleaved,o!==null){n.interleaved=null;var i=o.next,s=n.pending;if(s!==null){var l=s.next;s.next=i,o.next=l}n.pending=o}Nn=null}return e}function dm(e,t){do{var n=vt;try{if(hc(),_s.current=cl,dl){for(var o=pt.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}dl=!1}if(Qn=0,Bt=St=pt=null,mi=!1,Mi=0,Ec.current=null,n===null||n.return===null){Ct=1,_i=t,vt=null;break}e:{var s=e,l=n.return,d=n,a=t;if(t=Ft,d.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var g=a,m=d,y=m.tag;if(!(m.mode&1)&&(y===0||y===11||y===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var E=Kg(l);if(E!==null){E.flags&=-257,Xg(E,l,d,s,t),E.mode&1&&Qg(s,g,t),t=E,a=g;var C=t.updateQueue;if(C===null){var w=new Set;w.add(a),t.updateQueue=w}else C.add(a);break e}else{if(!(t&1)){Qg(s,g,t),Fc();break e}a=Error(fe(426))}}else if(ct&&d.mode&1){var D=Kg(l);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Xg(D,l,d,s,t),bc(Fo(a,d));break e}}s=a=Fo(a,d),Ct!==4&&(Ct=2),fi===null?fi=[s]:fi.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var b=Vb(s,a,t);Og(s,b);break e;case 1:d=a;var p=s.type,h=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(wn===null||!wn.has(h)))){s.flags|=65536,t&=-t,s.lanes|=t;var T=Yb(s,d,t);Og(s,T);break e}}s=s.return}while(s!==null)}um(n)}catch(v){t=v,vt===n&&n!==null&&(vt=n=n.return);continue}break}while(!0)}function cm(){var e=gl.current;return gl.current=cl,e===null?cl:e}function Fc(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),Dt===null||!(Kn&268435455)&&!(Ml&268435455)||bn(Dt,Ft)}function bl(e,t){var n=Je;Je|=2;var o=cm();(Dt!==e||Ft!==t)&&(Or=null,Gn(e,t));do try{xx();break}catch(i){dm(e,i)}while(!0);if(hc(),Je=n,gl.current=o,vt!==null)throw Error(fe(261));return Dt=null,Ft=0,Ct}function xx(){for(;vt!==null;)gm(vt)}function yx(){for(;vt!==null&&!Hh();)gm(vt)}function gm(e){var t=bm(e.alternate,e,rr);e.memoizedProps=e.pendingProps,t===null?um(e):vt=t,Ec.current=null}function um(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ux(n,t),n!==null){n.flags&=32767,vt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ct=6,vt=null;return}}else if(n=gx(n,t,rr),n!==null){vt=n;return}if(t=t.sibling,t!==null){vt=t;return}vt=t=e}while(t!==null);Ct===0&&(Ct=5)}function _n(e,t,n){var o=rt,i=mr.transition;try{mr.transition=null,rt=1,vx(e,t,n,o)}finally{mr.transition=i,rt=o}return null}function vx(e,t,n,o){do To();while(fn!==null);if(Je&6)throw Error(fe(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(fe(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Jh(e,s),e===Dt&&(vt=Dt=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ps||(ps=!0,mm(Ks,function(){return To(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=mr.transition,mr.transition=null;var l=rt;rt=1;var d=Je;Je|=4,Ec.current=null,bx(e,n),sm(n,e),Pf(od),qs=!!nd,od=nd=null,e.current=n,mx(n),Gh(),Je=d,rt=l,mr.transition=s}else e.current=n;if(ps&&(ps=!1,fn=e,pl=i),s=e.pendingLanes,s===0&&(wn=null),Yh(n.stateNode),Zt(e,xt()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],o(i.value,{componentStack:i.stack,digest:i.digest});if(ul)throw ul=!1,e=Sd,Sd=null,e;return pl&1&&e.tag!==0&&To(),s=e.pendingLanes,s&1?e===Cd?xi++:(xi=0,Cd=e):xi=0,Dn(),null}function To(){if(fn!==null){var e=Vp(pl),t=mr.transition,n=rt;try{if(mr.transition=null,rt=16>e?16:e,fn===null)var o=!1;else{if(e=fn,fn=null,pl=0,Je&6)throw Error(fe(331));var i=Je;for(Je|=4,Ee=e.current;Ee!==null;){var s=Ee,l=s.child;if(Ee.flags&16){var d=s.deletions;if(d!==null){for(var a=0;a<d.length;a++){var g=d[a];for(Ee=g;Ee!==null;){var m=Ee;switch(m.tag){case 0:case 11:case 15:hi(8,m,s)}var y=m.child;if(y!==null)y.return=m,Ee=y;else for(;Ee!==null;){m=Ee;var f=m.sibling,E=m.return;if(nm(m),m===g){Ee=null;break}if(f!==null){f.return=E,Ee=f;break}Ee=E}}}var C=s.alternate;if(C!==null){var w=C.child;if(w!==null){C.child=null;do{var D=w.sibling;w.sibling=null,w=D}while(w!==null)}}Ee=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,Ee=l;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:hi(9,s,s.return)}var b=s.sibling;if(b!==null){b.return=s.return,Ee=b;break e}Ee=s.return}}var p=e.current;for(Ee=p;Ee!==null;){l=Ee;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,Ee=h;else e:for(l=p;Ee!==null;){if(d=Ee,d.flags&2048)try{switch(d.tag){case 0:case 11:case 15:Fl(9,d)}}catch(v){ft(d,d.return,v)}if(d===l){Ee=null;break e}var T=d.sibling;if(T!==null){T.return=d.return,Ee=T;break e}Ee=d.return}}if(Je=i,Dn(),Mr&&typeof Mr.onPostCommitFiberRoot=="function")try{Mr.onPostCommitFiberRoot(zl,e)}catch{}o=!0}return o}finally{rt=n,mr.transition=t}}return!1}function du(e,t,n){t=Fo(n,t),t=Vb(e,t,1),e=jn(e,t,1),t=Gt(),e!==null&&(Hi(e,1,t),Zt(e,t))}function ft(e,t,n){if(e.tag===3)du(e,e,n);else for(;t!==null;){if(t.tag===3){du(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(wn===null||!wn.has(o))){e=Fo(n,e),e=Yb(t,e,1),t=jn(t,e,1),e=Gt(),t!==null&&(Hi(t,1,e),Zt(t,e));break}}t=t.return}}function kx(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=Gt(),e.pingedLanes|=e.suspendedLanes&n,Dt===e&&(Ft&n)===n&&(Ct===4||Ct===3&&(Ft&130023424)===Ft&&500>xt()-Dc?Gn(e,0):Bc|=n),Zt(e,t)}function pm(e,t){t===0&&(e.mode&1?(t=ns,ns<<=1,!(ns&130023424)&&(ns=4194304)):t=1);var n=Gt();e=tn(e,t),e!==null&&(Hi(e,t,n),Zt(e,n))}function jx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),pm(e,n)}function wx(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(fe(314))}o!==null&&o.delete(t),pm(e,n)}var bm;bm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Xt.current)Kt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Kt=!1,cx(e,t,n);Kt=!!(e.flags&131072)}else Kt=!1,ct&&t.flags&1048576&&xb(t,ol,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Ps(e,t),e=t.pendingProps;var i=Bo(t,Nt.current);Io(t,n),i=Sc(null,t,o,e,i,n);var s=Cc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qt(o)?(s=!0,rl(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,yc(t),i.updater=Rl,t.stateNode=i,i._reactInternals=t,pd(t,o,e,n),t=hd(null,t,o,!0,s,n)):(t.tag=0,ct&&s&&uc(t),Ht(null,t,i,n),t=t.child),t;case 16:o=t.elementType;e:{switch(Ps(e,t),e=t.pendingProps,i=o._init,o=i(o._payload),t.type=o,i=t.tag=Cx(o),e=kr(o,e),i){case 0:t=md(null,t,o,e,n);break e;case 1:t=Jg(null,t,o,e,n);break e;case 11:t=qg(null,t,o,e,n);break e;case 14:t=Zg(null,t,o,kr(o.type,e),n);break e}throw Error(fe(306,o,""))}return t;case 0:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:kr(o,i),md(e,t,o,i,n);case 1:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:kr(o,i),Jg(e,t,o,i,n);case 3:e:{if(qb(t),e===null)throw Error(fe(387));o=t.pendingProps,s=t.memoizedState,i=s.element,Sb(e,t),ll(t,o,null,n);var l=t.memoizedState;if(o=l.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Fo(Error(fe(423)),t),t=eu(e,t,o,n,i);break e}else if(o!==i){i=Fo(Error(fe(424)),t),t=eu(e,t,o,n,i);break e}else for(nr=kn(t.stateNode.containerInfo.firstChild),or=t,ct=!0,Sr=null,n=jb(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Do(),o===i){t=rn(e,t,n);break e}Ht(e,t,o,n)}t=t.child}return t;case 5:return Cb(t),e===null&&cd(t),o=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,id(o,i)?l=null:s!==null&&id(o,s)&&(t.flags|=32),Xb(e,t),Ht(e,t,l,n),t.child;case 6:return e===null&&cd(t),null;case 13:return Zb(e,t,n);case 4:return vc(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Ao(t,null,o,n):Ht(e,t,o,n),t.child;case 11:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:kr(o,i),qg(e,t,o,i,n);case 7:return Ht(e,t,t.pendingProps,n),t.child;case 8:return Ht(e,t,t.pendingProps.children,n),t.child;case 12:return Ht(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,i=t.pendingProps,s=t.memoizedProps,l=i.value,st(il,o._currentValue),o._currentValue=l,s!==null)if(Ir(s.value,l)){if(s.children===i.children&&!Xt.current){t=rn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var d=s.dependencies;if(d!==null){l=s.child;for(var a=d.firstContext;a!==null;){if(a.context===o){if(s.tag===1){a=qr(-1,n&-n),a.tag=2;var g=s.updateQueue;if(g!==null){g=g.shared;var m=g.pending;m===null?a.next=a:(a.next=m.next,m.next=a),g.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),gd(s.return,n,t),d.lanes|=n;break}a=a.next}}else if(s.tag===10)l=s.type===t.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(fe(341));l.lanes|=n,d=l.alternate,d!==null&&(d.lanes|=n),gd(l,n,t),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}Ht(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,o=t.pendingProps.children,Io(t,n),i=hr(i),o=o(i),t.flags|=1,Ht(e,t,o,n),t.child;case 14:return o=t.type,i=kr(o,t.pendingProps),i=kr(o.type,i),Zg(e,t,o,i,n);case 15:return Qb(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:kr(o,i),Ps(e,t),t.tag=1,qt(o)?(e=!0,rl(t)):e=!1,Io(t,n),Ub(t,o,i),pd(t,o,i,n),hd(null,t,o,!0,e,n);case 19:return Jb(e,t,n);case 22:return Kb(e,t,n)}throw Error(fe(156,t.tag))};function mm(e,t){return Op(e,t)}function Sx(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function br(e,t,n,o){return new Sx(e,t,n,o)}function Mc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cx(e){if(typeof e=="function")return Mc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ec)return 11;if(e===tc)return 14}return 2}function Cn(e,t){var n=e.alternate;return n===null?(n=br(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Hs(e,t,n,o,i,s){var l=2;if(o=e,typeof e=="function")Mc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case uo:return Un(n.children,i,s,t);case Jd:l=8,i|=8;break;case La:return e=br(12,n,t,i|2),e.elementType=La,e.lanes=s,e;case _a:return e=br(13,n,t,i),e.elementType=_a,e.lanes=s,e;case $a:return e=br(19,n,t,i),e.elementType=$a,e.lanes=s,e;case Cp:return Wl(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wp:l=10;break e;case Sp:l=9;break e;case ec:l=11;break e;case tc:l=14;break e;case gn:l=16,o=null;break e}throw Error(fe(130,e==null?e:typeof e,""))}return t=br(l,n,t,i),t.elementType=e,t.type=o,t.lanes=s,t}function Un(e,t,n,o){return e=br(7,e,o,t),e.lanes=n,e}function Wl(e,t,n,o){return e=br(22,e,o,t),e.elementType=Cp,e.lanes=n,e.stateNode={isHidden:!1},e}function ha(e,t,n){return e=br(6,e,null,t),e.lanes=n,e}function fa(e,t,n){return t=br(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zx(e,t,n,o,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ql(0),this.expirationTimes=ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ql(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wc(e,t,n,o,i,s,l,d,a){return e=new zx(e,t,n,d,a),t===1?(t=1,s===!0&&(t|=8)):t=0,s=br(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yc(s),e}function Ix(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:go,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function hm(e){if(!e)return In;e=e._reactInternals;e:{if(Zn(e)!==e||e.tag!==1)throw Error(fe(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(fe(171))}if(e.tag===1){var n=e.type;if(qt(n))return hb(e,n,t)}return t}function fm(e,t,n,o,i,s,l,d,a){return e=Wc(n,o,!0,e,i,s,l,d,a),e.context=hm(null),n=e.current,o=Gt(),i=Sn(n),s=qr(o,i),s.callback=t??null,jn(n,s,i),e.current.lanes=i,Hi(e,i,o),Zt(e,o),e}function Ll(e,t,n,o){var i=t.current,s=Gt(),l=Sn(i);return n=hm(n),t.context===null?t.context=n:t.pendingContext=n,t=qr(s,l),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=jn(i,t,l),e!==null&&(zr(e,i,l,s),Ls(e,i,l)),l}function ml(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Lc(e,t){cu(e,t),(e=e.alternate)&&cu(e,t)}function Tx(){return null}var xm=typeof reportError=="function"?reportError:function(e){console.error(e)};function _c(e){this._internalRoot=e}_l.prototype.render=_c.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(fe(409));Ll(e,t,null,null)};_l.prototype.unmount=_c.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xn(function(){Ll(null,e,null,null)}),t[en]=null}};function _l(e){this._internalRoot=e}_l.prototype.unstable_scheduleHydration=function(e){if(e){var t=Kp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<pn.length&&t!==0&&t<pn[n].priority;n++);pn.splice(n,0,e),n===0&&qp(e)}};function $c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gu(){}function Ex(e,t,n,o,i){if(i){if(typeof o=="function"){var s=o;o=function(){var g=ml(l);s.call(g)}}var l=fm(t,o,e,0,null,!1,!1,"",gu);return e._reactRootContainer=l,e[en]=l.current,Bi(e.nodeType===8?e.parentNode:e),Xn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var d=o;o=function(){var g=ml(a);d.call(g)}}var a=Wc(e,0,!1,null,null,!1,!1,"",gu);return e._reactRootContainer=a,e[en]=a.current,Bi(e.nodeType===8?e.parentNode:e),Xn(function(){Ll(t,a,n,o)}),a}function Pl(e,t,n,o,i){var s=n._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var d=i;i=function(){var a=ml(l);d.call(a)}}Ll(t,l,e,i)}else l=Ex(n,t,e,i,o);return ml(l)}Yp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ii(t.pendingLanes);n!==0&&(oc(t,n|1),Zt(t,xt()),!(Je&6)&&(Mo=xt()+500,Dn()))}break;case 13:Xn(function(){var o=tn(e,1);if(o!==null){var i=Gt();zr(o,e,1,i)}}),Lc(e,1)}};ic=function(e){if(e.tag===13){var t=tn(e,134217728);if(t!==null){var n=Gt();zr(t,e,134217728,n)}Lc(e,134217728)}};Qp=function(e){if(e.tag===13){var t=Sn(e),n=tn(e,t);if(n!==null){var o=Gt();zr(n,e,t,o)}Lc(e,t)}};Kp=function(){return rt};Xp=function(e,t){var n=rt;try{return rt=e,t()}finally{rt=n}};Ka=function(e,t,n){switch(t){case"input":if(Oa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var i=Bl(o);if(!i)throw Error(fe(90));Ip(o),Oa(o,i)}}}break;case"textarea":Ep(e,n);break;case"select":t=n.value,t!=null&&wo(e,!!n.multiple,t,!1)}};Wp=Ac;Lp=Xn;var Bx={usingClientEntryPoint:!1,Events:[Ui,ho,Bl,Fp,Mp,Ac]},Zo={findFiberByHostInstance:Pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dx={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pp(e),e===null?null:e.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance||Tx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bs.isDisabled&&bs.supportsFiber)try{zl=bs.inject(Dx),Mr=bs}catch{}}sr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bx;sr.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$c(t))throw Error(fe(200));return Ix(e,t,null,n)};sr.createRoot=function(e,t){if(!$c(e))throw Error(fe(299));var n=!1,o="",i=xm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Wc(e,1,!1,null,null,n,!1,o,i),e[en]=t.current,Bi(e.nodeType===8?e.parentNode:e),new _c(t)};sr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(fe(188)):(e=Object.keys(e).join(","),Error(fe(268,e)));return e=Pp(t),e=e===null?null:e.stateNode,e};sr.flushSync=function(e){return Xn(e)};sr.hydrate=function(e,t,n){if(!$l(t))throw Error(fe(200));return Pl(null,e,t,!0,n)};sr.hydrateRoot=function(e,t,n){if(!$c(e))throw Error(fe(405));var o=n!=null&&n.hydratedSources||null,i=!1,s="",l=xm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=fm(t,null,e,1,n??null,i,!1,s,l),e[en]=t.current,Bi(e),o)for(e=0;e<o.length;e++)n=o[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new _l(t)};sr.render=function(e,t,n){if(!$l(t))throw Error(fe(200));return Pl(null,e,t,!1,n)};sr.unmountComponentAtNode=function(e){if(!$l(e))throw Error(fe(40));return e._reactRootContainer?(Xn(function(){Pl(null,null,e,!1,function(){e._reactRootContainer=null,e[en]=null})}),!0):!1};sr.unstable_batchedUpdates=Ac;sr.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!$l(n))throw Error(fe(200));if(e==null||e._reactInternals===void 0)throw Error(fe(38));return Pl(e,t,n,!1,o)};sr.version="18.3.1-next-f1338f8080-20240426";function ym(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ym)}catch(e){console.error(e)}}ym(),yp.exports=sr;var Ax=yp.exports,vm,uu=Ax;vm=uu.createRoot,uu.hydrateRoot;/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),km=(...e)=>e.filter((t,n,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Fx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=c.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:i="",children:s,iconNode:l,...d},a)=>c.createElement("svg",{ref:a,...Fx,width:t,height:t,stroke:e,strokeWidth:o?Number(n)*24/Number(t):n,className:km("lucide",i),...d},[...l.map(([g,m])=>c.createElement(g,m)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=(e,t)=>{const n=c.forwardRef(({className:o,...i},s)=>c.createElement(Mx,{ref:s,iconNode:t,className:km(`lucide-${Rx(e)}`,o),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=ce("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=ce("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=ce("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=ce("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=ce("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=ce("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=ce("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=ce("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=ce("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=ce("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=ce("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=ce("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=ce("Bus",[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=ce("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=ce("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=ce("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=ce("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=ce("Carrot",[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",key:"rfqxbe"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",key:"6b25w4"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",key:"fn65lo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=ce("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=ce("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=ce("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=ce("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=ce("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=ce("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=ce("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=ce("Clapperboard",[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=ce("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=ce("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=ce("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=ce("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=ce("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=ce("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=ce("Dumbbell",[["path",{d:"M14.4 14.4 9.6 9.6",key:"ic80wn"}],["path",{d:"M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z",key:"nnl7wr"}],["path",{d:"m21.5 21.5-1.4-1.4",key:"1f1ice"}],["path",{d:"M3.9 3.9 2.5 2.5",key:"1evmna"}],["path",{d:"M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z",key:"yhosts"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=ce("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=ce("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=ce("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=ce("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=ce("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"7cu91f"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=ce("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=ce("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=ce("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=ce("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=ce("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=ce("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=ce("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=ce("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=ce("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=ce("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=ce("Images",[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=ce("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=ce("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=ce("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=ce("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=ce("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=ce("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=ce("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=ce("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=ce("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=ce("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=ce("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=ce("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=ce("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=ce("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=ce("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=ce("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=ce("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=ce("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=ce("PartyPopper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"hbicv8"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",key:"1i94pl"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",key:"1cofks"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=ce("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=ce("PawPrint",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=ce("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=ce("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=ce("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=ce("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=ce("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=ce("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=ce("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=ce("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=ce("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=ce("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=ce("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=ce("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=ce("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=ce("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=ce("ScrollText",[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=ce("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=ce("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=ce("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=ce("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=ce("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=ce("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=ce("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=ce("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=ce("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=ce("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=ce("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=ce("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=ce("TramFront",[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=ce("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=ce("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=ce("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=ce("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=ce("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=ce("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=ce("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=ce("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=ce("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=ce("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=ce("WashingMachine",[["path",{d:"M3 6h3",key:"155dbl"}],["path",{d:"M17 6h.01",key:"e2y6kg"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2",key:"od3kk9"}],["circle",{cx:"12",cy:"13",r:"5",key:"nlbqau"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5",key:"17lach"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=ce("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=ce("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=ce("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=ce("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=ce("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Jc="anvil_token",_m=()=>localStorage.getItem(Jc),Ny=e=>localStorage.setItem(Jc,e),Rd=()=>localStorage.removeItem(Jc),te=async(e,t,n)=>{const o={};n!==void 0&&(o["Content-Type"]="application/json");const i=_m();i&&(o.Authorization=`Bearer ${i}`);const s=await fetch(`/api${t}`,{method:e,headers:o,body:n!==void 0?JSON.stringify(n):void 0});if(s.status===401)throw Rd(),window.dispatchEvent(new Event("anvil-unauthorized")),new Error("Not authenticated");if(s.status===204)return null;if(!s.ok){const l=await s.text();let d=l;try{d=JSON.parse(l).detail||l}catch{}throw new Error(d||`HTTP ${s.status}`)}return s.json()},_={me:()=>te("GET","/auth/me"),signInWithGoogle:()=>{window.location.href="/api/auth/google"},getPillars:()=>te("GET","/pillars"),getFocus:()=>te("GET","/focus"),createFocus:e=>te("POST","/focus",e),deleteFocus:e=>te("DELETE",`/focus/${e}`),addScreenTime:(e,t)=>te("POST","/screentime",{screen:e,seconds:t}),getScreenTime:()=>te("GET","/screentime"),getPayouts:()=>te("GET","/rewards/payouts"),createPayout:e=>te("POST","/rewards/payouts",e),deletePayout:e=>te("DELETE",`/rewards/payouts/${e}`),getRewardRates:()=>te("GET","/rewards/rates"),setRewardRate:e=>te("POST","/rewards/rates",e),getMedia:()=>te("GET","/media"),createMedia:e=>te("POST","/media",e),updateMedia:(e,t)=>te("PUT",`/media/${e}`,t),deleteMedia:e=>te("DELETE",`/media/${e}`),restoreMedia:e=>te("POST",`/media/${e}/restore`),getDecks:()=>te("GET","/spiritual/decks"),createDeck:e=>te("POST","/spiritual/decks",e),deleteDeck:e=>te("DELETE",`/spiritual/decks/${e}`),getGoldenGoals:()=>te("GET","/golden/goals"),getGoldenGoal:e=>te("GET",`/golden/goals/${e}`),createGolden:e=>te("POST","/golden/goals",e),updateGolden:(e,t)=>te("PUT",`/golden/goals/${e}`,t),achieveGolden:e=>te("POST",`/golden/goals/${e}/achieve`),unachieveGolden:e=>te("POST",`/golden/goals/${e}/unachieve`),upsertGoldenEntry:(e,t)=>te("PUT",`/golden/goals/${e}/entry`,t),deleteGolden:e=>te("DELETE",`/golden/goals/${e}`),restoreGolden:e=>te("POST",`/golden/goals/${e}/restore`),logTesla369:e=>te("POST",`/golden/goals/${e}/369/log`),undoTesla369:e=>te("DELETE",`/golden/goals/${e}/369/log`),getKickstart:()=>te("GET","/kickstart/videos"),createKickstart:e=>te("POST","/kickstart/videos",e),updateKickstart:(e,t)=>te("PUT",`/kickstart/videos/${e}`,t),deleteKickstart:e=>te("DELETE",`/kickstart/videos/${e}`),restoreKickstart:e=>te("POST",`/kickstart/videos/${e}/restore`),getTxns:()=>te("GET","/finance/txns"),createTxn:e=>te("POST","/finance/txns",e),updateTxn:(e,t)=>te("PUT",`/finance/txns/${e}`,t),deleteTxn:e=>te("DELETE",`/finance/txns/${e}`),restoreTxn:e=>te("POST",`/finance/txns/${e}/restore`),getInvestments:()=>te("GET","/finance/investments"),createInvestment:e=>te("POST","/finance/investments",e),updateInvestment:(e,t)=>te("PUT",`/finance/investments/${e}`,t),deleteInvestment:e=>te("DELETE",`/finance/investments/${e}`),restoreInvestment:e=>te("POST",`/finance/investments/${e}/restore`),getFixedItems:()=>te("GET","/finance/fixed-items"),createFixedItem:e=>te("POST","/finance/fixed-items",e),updateFixedItem:(e,t)=>te("PUT",`/finance/fixed-items/${e}`,t),deleteFixedItem:e=>te("DELETE",`/finance/fixed-items/${e}`),getExpenses:()=>te("GET","/expenses"),createExpenseCategory:e=>te("POST","/expenses/categories",e),updateExpenseCategory:(e,t)=>te("PUT",`/expenses/categories/${e}`,t),deleteExpenseCategory:e=>te("DELETE",`/expenses/categories/${e}`),createExpenseLog:e=>te("POST","/expenses/logs",e),updateExpenseLog:(e,t)=>te("PUT",`/expenses/logs/${e}`,t),deleteExpenseLog:e=>te("DELETE",`/expenses/logs/${e}`),restoreExpenseLog:e=>te("POST",`/expenses/logs/${e}/restore`),getSetting:e=>te("GET",`/settings/${e}`),setSetting:(e,t)=>te("PUT",`/settings/${e}`,{value:t}),getTasks:()=>te("GET","/tasks"),createTask:e=>te("POST","/tasks",e),updateTask:(e,t)=>te("PUT",`/tasks/${e}`,t),deleteTask:e=>te("DELETE",`/tasks/${e}`),restoreTask:e=>te("POST",`/tasks/${e}/restore`),scheduleTask:e=>te("PUT",`/tasks/${e}/schedule`),getGoals:e=>te("GET",`/goals${e?`?pillar=${encodeURIComponent(e)}`:""}`),createGoal:e=>te("POST","/goals",e),updateGoal:(e,t)=>te("PUT",`/goals/${e}`,t),deleteGoal:e=>te("DELETE",`/goals/${e}`),restoreGoal:e=>te("POST",`/goals/${e}/restore`),getHabits:()=>te("GET","/habits"),createHabit:e=>te("POST","/habits",e),updateHabit:(e,t)=>te("PUT",`/habits/${e}`,t),deleteHabit:e=>te("DELETE",`/habits/${e}`),restoreHabit:e=>te("POST",`/habits/${e}/restore`),toggleHabitLog:(e,t)=>te("POST",`/habits/${e}/log/${t}`),setHabitLogNote:(e,t,n)=>te("PUT",`/habits/${e}/log/${t}/note`,{note:n}),setHabitLogCount:(e,t,n,o)=>te("PUT",`/habits/${e}/log/${t}/count`,{count:n,note:o}),incrementHabitLog:(e,t)=>te("POST",`/habits/${e}/log/${t}/increment`),clearHabitLog:(e,t)=>te("DELETE",`/habits/${e}/log/${t}`),getHabitsYearly:e=>te("GET",`/habits/yearly/${e}`),getJournalEntry:e=>te("GET",`/journal/${e}`),getJournalHistory:(e,t)=>te("GET",`/journal/history/${e}/${t}`),updateJournalMood:(e,t)=>te("PUT",`/journal/${e}`,{mood:t}),addJournalBullet:(e,t,n)=>te("POST",`/journal/${e}/bullets`,{section:t,text:n}),deleteJournalBullet:e=>te("DELETE",`/journal/bullets/${e}`),getSkills:()=>te("GET","/skills"),createSkill:e=>te("POST","/skills",e),updateSkill:(e,t)=>te("PUT",`/skills/${e}`,t),deleteSkill:e=>te("DELETE",`/skills/${e}`),restoreSkill:e=>te("POST",`/skills/${e}/restore`),addSkillNote:(e,t,n,o=null)=>te("POST",`/skills/${e}/notes`,{stage:t,text:n,grp:o}),setSkillGroups:(e,t)=>te("PUT",`/skills/${e}/groups`,{groups:t}),deleteSkillNote:e=>te("DELETE",`/skill-notes/${e}`),updateSkillNote:(e,t)=>te("PUT",`/skill-notes/${e}`,{text:t}),toggleSkillNote:e=>te("PUT",`/skill-notes/${e}/toggle`),completeSkillStage:(e,t)=>te("POST",`/skills/${e}/complete-stage`,{stage:t}),getScriptures:()=>te("GET","/scriptures"),createScripture:e=>te("POST","/scriptures",e),deleteScripture:e=>te("DELETE",`/scriptures/${e}`),restoreScripture:e=>te("POST",`/scriptures/${e}/restore`),addChapter:(e,t)=>te("POST",`/scriptures/${e}/chapters`,t),updateChapter:(e,t)=>te("PUT",`/chapters/${e}`,t),deleteChapter:e=>te("DELETE",`/chapters/${e}`),restoreChapter:e=>te("POST",`/chapters/${e}/restore`),addInsight:(e,t)=>te("POST",`/chapters/${e}/insights`,{text:t}),deleteInsight:e=>te("DELETE",`/insights/${e}`),getTopics:()=>te("GET","/revision/topics"),createTopic:e=>te("POST","/revision/topics",e),updateTopic:(e,t)=>te("PUT",`/revision/topics/${e}`,t),deleteTopic:e=>te("DELETE",`/revision/topics/${e}`),restoreTopic:e=>te("POST",`/revision/topics/${e}/restore`),getDueToday:()=>te("GET","/revision/due-today"),getCalendar:(e,t)=>te("GET",`/revision/calendar/${e}/${t}`),toggleReviewDone:e=>te("PUT",`/revision/reviews/${e}/done`),getAffirmations:()=>te("GET","/affirmations"),createAffirmation:e=>te("POST","/affirmations",e),updateAffirmation:(e,t)=>te("PUT",`/affirmations/${e}`,t),deleteAffirmation:e=>te("DELETE",`/affirmations/${e}`),restoreAffirmation:e=>te("POST",`/affirmations/${e}/restore`),getAchievements:()=>te("GET","/achievements"),createAchievement:e=>te("POST","/achievements",e),updateAchievement:(e,t)=>te("PUT",`/achievements/${e}`,t),deleteAchievement:e=>te("DELETE",`/achievements/${e}`),restoreAchievement:e=>te("POST",`/achievements/${e}/restore`),getDelight:()=>te("GET","/delight"),createCollection:e=>te("POST","/delight/collections",e),updateCollection:(e,t)=>te("PUT",`/delight/collections/${e}`,t),deleteCollection:e=>te("DELETE",`/delight/collections/${e}`),restoreCollection:e=>te("POST",`/delight/collections/${e}/restore`),createDelightItem:(e,t)=>te("POST",`/delight/collections/${e}/items`,t),updateDelightItem:(e,t)=>te("PUT",`/delight/items/${e}`,t),deleteDelightItem:e=>te("DELETE",`/delight/items/${e}`),restoreDelightItem:e=>te("POST",`/delight/items/${e}/restore`),arrangeDelight:(e,t)=>te("PUT",`/delight/collections/${e}/arrange`,{order:t})},Fd=[{code:"INR",symbol:"₹",locale:"en-IN",label:"Indian Rupee"},{code:"USD",symbol:"$",locale:"en-US",label:"US Dollar"},{code:"EUR",symbol:"€",locale:"de-DE",label:"Euro"},{code:"GBP",symbol:"£",locale:"en-GB",label:"British Pound"},{code:"JPY",symbol:"¥",locale:"ja-JP",label:"Japanese Yen"},{code:"AED",symbol:"د.إ",locale:"en-AE",label:"UAE Dirham"},{code:"AUD",symbol:"A$",locale:"en-AU",label:"Australian Dollar"},{code:"CAD",symbol:"C$",locale:"en-CA",label:"Canadian Dollar"},{code:"SGD",symbol:"S$",locale:"en-SG",label:"Singapore Dollar"}],bu="INR",$m="anvil_currency",Hl=e=>Fd.find(t=>t.code===e)||Fd[0];function Wo(){try{return localStorage.getItem($m)||bu}catch{return bu}}function mu(e){try{localStorage.setItem($m,e)}catch{}return window.dispatchEvent(new CustomEvent("anvil-currency",{detail:e})),e}function jl(e,t){const n=Hl(t||Wo()),o=Math.round(Number(e)||0);return n.symbol+o.toLocaleString(n.locale)}function Hr(e,t){const n=Hl(t||Wo()),o=Number(e)||0;return n.symbol+o.toLocaleString(n.locale,{minimumFractionDigits:2,maximumFractionDigits:2})}function hu(e,t){const n=Hl(t||Wo()),o=Math.round(Number(e)||0),i=Math.abs(o);return n.code==="INR"?i>=1e7?n.symbol+(o/1e7).toFixed(i>=1e8?0:1)+"Cr":i>=1e5?n.symbol+(o/1e5).toFixed(i>=1e6?0:1)+"L":i>=1e3?n.symbol+(o/1e3).toFixed(i>=1e4?0:1)+"K":n.symbol+o:i>=1e9?n.symbol+(o/1e9).toFixed(1)+"B":i>=1e6?n.symbol+(o/1e6).toFixed(1)+"M":i>=1e3?n.symbol+(o/1e3).toFixed(1)+"K":n.symbol+o}function Qi(){const[e,t]=c.useState(Wo());return c.useEffect(()=>{const n=o=>t(o.detail||Wo());return window.addEventListener("anvil-currency",n),()=>window.removeEventListener("anvil-currency",n)},[]),Hl(e)}const Pt={financial:{label:"Financial",leaf:"#C9A227",shape:"round"},academic:{label:"Academic",leaf:"#3A7CA5",shape:"pine"},relationship:{label:"Relationship",leaf:"#C2536B",shape:"round"},spiritual:{label:"Spiritual",leaf:"#8268B0",shape:"tall"},health:{label:"Health",leaf:"#4C9A6B",shape:"round"}},Zr="health";function eg({species:e=Zr,progress:t=1,withered:n=!1,size:o=200}){const i=Math.max(0,Math.min(1,t)),s=Pt[e]||Pt[Zr],l=n?"#8A7B63":"#7A5A3C",d=n?"#A99C84":s.leaf,a=n?"#8F8268":d,g=14+i*46,m=112-g,y=i>.14,f=y?8+i*30:0;return r.jsxs("svg",{viewBox:"0 0 120 120",width:o,height:o,style:{display:"block"},children:[r.jsx("ellipse",{cx:"60",cy:"114",rx:20+i*14,ry:"5",fill:"rgba(38,36,31,0.08)"}),!y&&r.jsxs("g",{transform:`translate(60 ${112-i*40})`,children:[r.jsx("path",{d:"M0 8 C0 8 0 -2 0 -6",stroke:"#4C9A6B",strokeWidth:"2.5",fill:"none"}),r.jsx("ellipse",{cx:"-5",cy:"-4",rx:"6",ry:"3.5",fill:"#4C9A6B",transform:"rotate(-30 -5 -4)"}),r.jsx("ellipse",{cx:"5",cy:"-4",rx:"6",ry:"3.5",fill:"#5BB07E",transform:"rotate(30 5 -4)"})]}),y&&r.jsxs(r.Fragment,{children:[r.jsx("rect",{x:60-(2+i*2.5),y:m,width:(2+i*2.5)*2,height:g,rx:"2",fill:l}),s.shape==="pine"?r.jsxs(r.Fragment,{children:[r.jsx("polygon",{points:`60,${m-f*2.2} ${60-f},${m+4} ${60+f},${m+4}`,fill:d}),r.jsx("polygon",{points:`60,${m-f*3} ${60-f*.8},${m-f*.7} ${60+f*.8},${m-f*.7}`,fill:a})]}):s.shape==="tall"?r.jsxs(r.Fragment,{children:[r.jsx("ellipse",{cx:"60",cy:m-f*.3,rx:f*.78,ry:f*1.55,fill:d}),r.jsx("ellipse",{cx:"60",cy:m-f*.9,rx:f*.5,ry:f*1,fill:a,opacity:"0.9"})]}):r.jsxs(r.Fragment,{children:[r.jsx("circle",{cx:"60",cy:m,r:f,fill:d}),r.jsx("circle",{cx:60-f*.7,cy:m+f*.3,r:f*.78,fill:d}),r.jsx("circle",{cx:60+f*.7,cy:m+f*.3,r:f*.78,fill:a}),r.jsx("circle",{cx:"60",cy:m-f*.5,r:f*.8,fill:a,opacity:"0.92"})]})]})]})}function Oy({species:e}){return r.jsx(eg,{species:e,progress:1,size:56})}const ms="#C9A227",fu="#3A7CA5",xu="#C2536B",yu=new Set(["worth","achievements"]),Hy=()=>{const e=new Date,t=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`},_t=Hy(),Gy={kickstart:"Kickstart",golden:"Golden Book",habits:"Habits",quadrant:"Quadrant",goals:"Goals",grove:"Grove",worth:"Rewards",vault:"Wallet",expenses:"Expenses",journal:"Journal",revision:"Revision",affirmations:"Affirmations",skills:"Skills",spiritual:"Spiritual",mindscape:"Mindscape",achievements:"Achievements",delight:"Delights"},Md=e=>{const t=Math.round(e||0),n=Math.floor(t/60),o=t%60;return n?`${n}h ${o}m`:`${o}m`},Uy=e=>Md((e||0)/60),vu=[{id:"Q1",label:"Do Now"},{id:"Q2",label:"Schedule"},{id:"Q3",label:"Delegate"},{id:"Q4",label:"Drop"}],ku=["Financial","Academic","Relationship","Health","Spiritual"];function Vy({onNavigate:e}){var Po,lt;const t=Qi(),n=N=>Hr(N,t.code),[o,i]=c.useState(!1),[s,l]=c.useState([]),[d,a]=c.useState([]),[g,m]=c.useState({sessions:[],stats:{}}),[y,f]=c.useState([]),[E,C]=c.useState([]),[w,D]=c.useState([]),[b,p]=c.useState([]),[h,T]=c.useState({}),[v,S]=c.useState({}),[W,F]=c.useState([]),[j,A]=c.useState([]),[ie,B]=c.useState([]),[I,J]=c.useState([]),[be,se]=c.useState([]),ye=c.useCallback(()=>{Promise.all([_.getHabits().catch(()=>[]),_.getTasks().catch(()=>[]),_.getFocus().catch(()=>({sessions:[],stats:{}})),_.getScreenTime().catch(()=>[]),_.getRewardRates().catch(()=>[]),_.getPayouts().catch(()=>[]),_.getAchievements().catch(()=>[]),_.getSetting("grove_rates").catch(()=>null),_.getSetting("reward_rates").catch(()=>null),_.getExpenses().catch(()=>({categories:[],logs:[]})),_.getInvestments().catch(()=>[]),_.getDueToday().catch(()=>[]),_.getSkills().catch(()=>[])]).then(([N,xe,Ot,Yt,ar,Tr,No,Er,eo,_r,qi,Oo,Gl])=>{l(N||[]),a(xe||[]),m(Ot||{sessions:[],stats:{}}),f(Array.isArray(Yt)?Yt:[]),C(ar||[]),D(Tr||[]),p(Array.isArray(No)?No:[]),T((Er==null?void 0:Er.value)||{}),S((eo==null?void 0:eo.value)||{}),F((_r==null?void 0:_r.categories)||[]),A((_r==null?void 0:_r.logs)||[]),B(qi||[]),J(Oo||[]),se(Gl||[]),i(!0)}).catch(()=>i(!0))},[]);c.useEffect(()=>{ye()},[ye]);const G=s.filter(N=>(N.logs||[]).includes(_t)).length;d.filter(N=>(N.start_datetime||"").slice(0,10)===_t);const Y=c.useMemo(()=>{const N={Q1:0,Q2:0,Q3:0,Q4:0};return d.forEach(xe=>{N[xe.quadrant]!==void 0&&N[xe.quadrant]++}),N},[d]),oe=((Po=g.stats)==null?void 0:Po.today_minutes)||0,K=((lt=g.stats)==null?void 0:lt.today_trees)||0,pe={};E.forEach(N=>{var xe;(pe[xe=`${N.kind}:${N.rkey}`]||(pe[xe]=[])).push({eff:N.eff_date,rate:N.rate})}),Object.values(pe).forEach(N=>N.sort((xe,Ot)=>xe.eff.localeCompare(Ot.eff)));const O=(N,xe,Ot)=>{const Yt=pe[`${N}:${xe}`];if(Yt){let ar=null;for(const Tr of Yt)if(Tr.eff<=Ot)ar=Tr.rate;else break;if(ar!==null)return ar}return(N==="focus"?h[xe]:v[xe])||0};let $=0,P=0;(g.sessions||[]).filter(N=>N.completed).forEach(N=>{const xe=(N.started_at||N.created_at||"").slice(0,10);if(xe!==_t)return;const Ot=Pt[N.tree]?N.tree:Zr;$+=(N.actual_min||0)/60*O("focus",Ot,xe)}),y.forEach(N=>{!yu.has(N.screen)&&N.date===_t&&(P+=N.seconds/60*O("usage",N.screen,N.date))});const de=b.filter(N=>N.date===_t&&(N.reward||0)>0).reduce((N,xe)=>N+(xe.reward||0),0),Te=$+P+de,Q=Te>0?$/Te*100:0,ne=Te>0?P/Te*100:0,R=Te>0?de/Te*100:0;let U=0,M=0;(g.sessions||[]).filter(N=>N.completed).forEach(N=>{const xe=(N.started_at||N.created_at||"").slice(0,10),Ot=Pt[N.tree]?N.tree:Zr;U+=(N.actual_min||0)/60*O("focus",Ot,xe)}),y.forEach(N=>{yu.has(N.screen)||(M+=N.seconds/60*O("usage",N.screen,N.date))});const z=b.reduce((N,xe)=>N+(xe.reward||0),0),x=w.reduce((N,xe)=>N+xe.amount,0),V=Math.max(0,U+M+z-x),je=j.filter(N=>N.date===_t).reduce((N,xe)=>N+xe.amount,0);c.useMemo(()=>Object.fromEntries(W.map(N=>[N.id,N])),[W]);const _e=ie.filter(N=>N.date===_t||N.start_date===_t).reduce((N,xe)=>N+(xe.invested||0),0),Xe=c.useMemo(()=>{const N={};return y.forEach(xe=>{xe.date===_t&&(N[xe.screen]=(N[xe.screen]||0)+xe.seconds)}),Object.entries(N).filter(([,xe])=>xe>0).sort((xe,Ot)=>Ot[1]-xe[1])},[y]),Ke=N=>y.some(xe=>xe.screen===N&&xe.date===_t&&xe.seconds>0),ot=Ke("spiritual"),ht=Ke("affirmations"),Qe=c.useMemo(()=>{const N=[];return be.forEach(xe=>Object.values(xe.notes||{}).forEach(Ot=>Ot.forEach(Yt=>{(Yt.created_at||"").slice(0,10)===_t&&N.push({...Yt,skill:xe.title})}))),N},[be]),zt=Ke("kickstart"),It=Ke("mindscape"),kt=b.filter(N=>N.date===_t),[gt,jt]=c.useState(null),[u,ee]=c.useState(null),[Ae,Le]=c.useState(null),[we,Pe]=c.useState(null),wt=N=>_.toggleHabitLog(N.id,_t).then(ye).catch(()=>{}),At=async()=>{const N=gt.title.trim();N&&(await _.createTask({pillar:gt.pillar,title:N,quadrant:gt.quadrant,time_estimate_min:Number(gt.time_estimate_min)||30,start_datetime:null,goal_id:null}),jt(null),ye())},sn=async()=>{await _.createFocus({label:u.label.trim()||null,tree:u.tree,duration_min:Number(u.duration_min)||25}),ee(null),ye()},Ki=async()=>{const N=parseFloat(Ae.amount)||0;N<=0||!Ae.category_id||(await _.createExpenseLog({category_id:Number(Ae.category_id),amount:N,note:Ae.note.trim(),date:_t}),Le(null),ye())},Xi=async()=>{const N=we.name.trim(),xe=parseFloat(we.invested)||0;!N||xe<=0||(await _.createInvestment({name:N,kind:we.kind,invested:xe,current_value:xe,note:we.note.trim(),date:_t}),Pe(null),ye())},yt=N=>e&&e(N);return o?r.jsxs("div",{style:ue.page,children:[r.jsxs("div",{style:ue.head,children:[r.jsx("div",{style:ue.eyebrow,children:"Anvil · Today"}),r.jsx("h1",{style:ue.h1,children:"Dashboard"}),r.jsx("div",{style:ue.subhead,children:new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})})]}),r.jsx(ro,{title:"Used today",onClick:()=>{},children:Xe.length===0?r.jsx(hs,{children:"Nothing opened yet today."}):r.jsx("div",{style:ue.chipWrap,children:Xe.map(([N,xe])=>r.jsxs("button",{onClick:()=>yt(N),style:ue.usedChip,children:[Gy[N]||N," ",r.jsx("span",{style:ue.usedChipTime,children:Uy(xe)})]},N))})}),r.jsxs("div",{style:ue.statGrid,children:[r.jsx(fs,{icon:Bd,color:"#4C9A6B",label:"Habits done",value:`${G}/${s.length}`,onClick:()=>yt("habits")}),r.jsx(fs,{icon:Ad,color:ms,label:K?`Focus · ${K} tree${K===1?"":"s"}`:"Focus time",value:Md(oe),onClick:()=>yt("grove")}),r.jsx(fs,{icon:vl,color:"#C9772E",label:"Spent today",value:Hr(je,t.code),onClick:()=>yt("expenses")}),r.jsx(fs,{icon:qc,color:"#8268B0",label:"Invested today",value:Hr(_e,t.code),onClick:()=>yt("vault")})]}),r.jsx(ro,{title:"Rewards",eyebrow:`Pending ${n(V)}`,onClick:()=>yt("worth"),children:Te>0?r.jsxs("div",{style:ue.pieWrap,children:[r.jsxs("div",{style:ue.pieChart,children:[r.jsx("div",{style:{...ue.pieDisc,background:`conic-gradient(${ms} 0 ${Q}%, ${fu} ${Q}% ${Q+ne}%, ${xu} ${Q+ne}% 100%)`}}),r.jsxs("div",{style:ue.pieHole,children:[r.jsx("span",{style:ue.pieHoleVal,children:n(Te)}),r.jsx("span",{style:ue.pieHoleLbl,children:"today"})]})]}),r.jsxs("div",{style:ue.pieLegend,children:[r.jsx(xa,{color:ms,label:"Focus",pct:Q,val:n($)}),r.jsx(xa,{color:fu,label:"Usage",pct:ne,val:n(P)}),r.jsx(xa,{color:xu,label:"Achievement",pct:R,val:n(de)})]})]}):r.jsx(hs,{children:"No rewards earned yet today."})}),I.length>0&&r.jsx(ro,{title:"Revision due",eyebrow:`${I.length} pending`,onClick:()=>yt("revision"),children:r.jsx("div",{style:ue.rows,children:I.slice(0,5).map(N=>r.jsxs("div",{style:ue.row,children:[r.jsx("span",{style:{...ue.dot,background:N.is_missed?"#C2536B":"#C9A227"}}),r.jsx("span",{style:ue.rowName,children:N.topic}),r.jsxs("span",{style:ue.rowMeta,children:["Stage ",N.stage]})]},N.review_id))})}),r.jsxs("div",{style:ue.cardGrid,children:[r.jsx(xs,{icon:yi,color:"#8268B0",label:"Spiritual",done:ot,doneText:"Read today",idleText:"Not opened yet",onClick:()=>yt("spiritual")}),r.jsx(xs,{icon:Jn,color:"#C9A227",label:"Affirmations",done:ht,doneText:"Read today",idleText:"Not opened yet",onClick:()=>yt("affirmations")}),r.jsx(xs,{icon:Am,color:"#C9772E",label:"Kickstart",done:zt,doneText:"Watched today",idleText:"Not watched yet",onClick:()=>yt("kickstart")}),r.jsx(xs,{icon:zm,color:"#3A7CA5",label:"Mindscape",done:It,doneText:"Listened today",idleText:"Not listened yet",onClick:()=>yt("mindscape")})]}),r.jsx(ro,{title:"Skills enhanced",eyebrow:Qe.length?`${Qe.length} note${Qe.length===1?"":"s"}`:null,onClick:()=>yt("skills"),children:Qe.length===0?r.jsx(hs,{children:"No skill notes added today."}):r.jsx("div",{style:ue.rows,children:Qe.slice(0,5).map(N=>r.jsxs("div",{style:ue.row,children:[r.jsx("span",{style:{...ue.dot,background:"#4C9A6B"}}),r.jsx("span",{style:ue.rowName,children:N.text}),r.jsx("span",{style:ue.rowMeta,children:N.skill})]},N.id))})}),kt.length>0&&r.jsx(ro,{title:"Achievements today",eyebrow:`${kt.length}`,onClick:()=>yt("achievements"),children:r.jsx("div",{style:ue.rows,children:kt.map(N=>r.jsxs("div",{style:ue.row,children:[r.jsx("span",{style:{...ue.dot,background:"#C2536B"}}),r.jsx("span",{style:ue.rowName,children:N.title}),N.reward>0&&r.jsx("span",{style:ue.rowAmt,children:n(N.reward)})]},N.id))})}),r.jsx(ro,{title:"Wallet status",onClick:()=>yt("vault"),children:r.jsxs("div",{style:ue.walletRow,children:[r.jsxs("div",{style:ue.walletStat,children:[r.jsx("div",{style:{...ue.walletVal,color:"#C9772E"},children:Hr(je,t.code)}),r.jsx("div",{style:ue.walletLbl,children:"Spent today"})]}),r.jsxs("div",{style:ue.walletStat,children:[r.jsx("div",{style:{...ue.walletVal,color:"#8268B0"},children:Hr(_e,t.code)}),r.jsx("div",{style:ue.walletLbl,children:"Invested today"})]}),r.jsxs("div",{style:ue.walletStat,children:[r.jsx("div",{style:ue.walletVal,children:Hr(V,t.code)}),r.jsx("div",{style:ue.walletLbl,children:"Rewards pending"})]})]})}),r.jsx("div",{style:ue.quickHead,children:"Quick log"}),r.jsxs("div",{style:ue.cardGrid,children:[r.jsxs("div",{style:ue.quickCard,children:[r.jsxs("div",{style:ue.quickTitle,children:[r.jsx(Bd,{size:15,color:"#4C9A6B"})," Habits"]}),s.length===0?r.jsx(hs,{children:"No habits yet."}):r.jsx("div",{style:ue.habitList,children:s.slice(0,6).map(N=>{const xe=(N.logs||[]).includes(_t);return r.jsxs("button",{onClick:()=>wt(N),style:{...ue.habitChip,...xe?ue.habitChipOn:{}},children:[xe&&r.jsx(Rn,{size:12})," ",N.name]},N.id)})})]}),r.jsxs("div",{style:ue.quickCard,children:[r.jsxs("div",{style:ue.quickTitle,children:[r.jsx(Hc,{size:15,color:"#3A7CA5"})," Quadrant"]}),r.jsx("div",{style:ue.quadGrid,children:vu.map(N=>r.jsxs("div",{style:ue.quadCell,children:[r.jsx("span",{style:ue.quadLabel,children:N.label}),r.jsx("span",{style:ue.quadCount,children:Y[N.id]})]},N.id))}),r.jsxs("button",{onClick:()=>jt({title:"",pillar:ku[0],quadrant:"Q1",time_estimate_min:30}),style:ue.quickAddBtn,children:[r.jsx(Ze,{size:14})," Add task"]})]}),r.jsxs("div",{style:ue.quickCard,children:[r.jsxs("div",{style:ue.quickTitle,children:[r.jsx(Ad,{size:15,color:ms})," Grove focus"]}),r.jsxs("div",{style:ue.quickStat,children:[Md(oe)," today"]}),r.jsxs("button",{onClick:()=>ee({label:"",tree:Zr,duration_min:25}),style:ue.quickAddBtn,children:[r.jsx(Ze,{size:14})," Start session"]})]}),r.jsxs("div",{style:ue.quickCard,children:[r.jsxs("div",{style:ue.quickTitle,children:[r.jsx(vl,{size:15,color:"#C9772E"})," Expense / Investment"]}),r.jsxs("div",{style:ue.quickStat,children:[Hr(je,t.code)," spent today"]}),r.jsxs("div",{style:{display:"flex",gap:8},children:[r.jsxs("button",{onClick:()=>{var N;return Le({category_id:((N=W[0])==null?void 0:N.id)||"",amount:"",note:""})},style:{...ue.quickAddBtn,flex:1},children:[r.jsx(Ze,{size:14})," Expense"]}),r.jsxs("button",{onClick:()=>Pe({name:"",kind:"Stocks",invested:"",note:""}),style:{...ue.quickAddBtn,flex:1},children:[r.jsx(Ze,{size:14})," Invest"]})]})]})]}),gt&&r.jsxs(ys,{title:"Add task",onClose:()=>jt(null),children:[r.jsx("input",{autoFocus:!0,placeholder:"Task title",value:gt.title,onChange:N=>jt(xe=>({...xe,title:N.target.value})),style:ue.input}),r.jsx("select",{value:gt.pillar,onChange:N=>jt(xe=>({...xe,pillar:N.target.value})),style:ue.input,children:ku.map(N=>r.jsx("option",{value:N,children:N},N))}),r.jsx("select",{value:gt.quadrant,onChange:N=>jt(xe=>({...xe,quadrant:N.target.value})),style:ue.input,children:vu.map(N=>r.jsxs("option",{value:N.id,children:[N.id," · ",N.label]},N.id))}),r.jsx("input",{type:"number",min:"1",placeholder:"Estimate (min)",value:gt.time_estimate_min,onChange:N=>jt(xe=>({...xe,time_estimate_min:N.target.value})),style:ue.input}),r.jsx(vs,{onCancel:()=>jt(null),onSave:At,disabled:!gt.title.trim()})]}),u&&r.jsxs(ys,{title:"Start focus session",onClose:()=>ee(null),children:[r.jsx("input",{autoFocus:!0,placeholder:"Label (optional)",value:u.label,onChange:N=>ee(xe=>({...xe,label:N.target.value})),style:ue.input}),r.jsx("select",{value:u.tree,onChange:N=>ee(xe=>({...xe,tree:N.target.value})),style:ue.input,children:Object.entries(Pt).map(([N,xe])=>r.jsx("option",{value:N,children:xe.label},N))}),r.jsx("input",{type:"number",min:"1",placeholder:"Duration (min)",value:u.duration_min,onChange:N=>ee(xe=>({...xe,duration_min:N.target.value})),style:ue.input}),r.jsx(vs,{onCancel:()=>ee(null),onSave:sn,disabled:!Number(u.duration_min)})]}),Ae&&r.jsxs(ys,{title:"Log expense",onClose:()=>Le(null),children:[r.jsx("select",{value:Ae.category_id,onChange:N=>Le(xe=>({...xe,category_id:N.target.value})),style:ue.input,children:W.map(N=>r.jsx("option",{value:N.id,children:N.name},N.id))}),r.jsx("input",{autoFocus:!0,type:"number",min:"0",step:"0.01",placeholder:`Amount (${t.symbol})`,value:Ae.amount,onChange:N=>Le(xe=>({...xe,amount:N.target.value})),style:ue.input}),r.jsx("input",{placeholder:"Note (optional)",value:Ae.note,onChange:N=>Le(xe=>({...xe,note:N.target.value})),style:ue.input}),r.jsx(vs,{onCancel:()=>Le(null),onSave:Ki,disabled:!(parseFloat(Ae.amount)>0&&Ae.category_id)})]}),we&&r.jsxs(ys,{title:"Log investment",onClose:()=>Pe(null),children:[r.jsx("input",{autoFocus:!0,placeholder:"Name",value:we.name,onChange:N=>Pe(xe=>({...xe,name:N.target.value})),style:ue.input}),r.jsx("select",{value:we.kind,onChange:N=>Pe(xe=>({...xe,kind:N.target.value})),style:ue.input,children:["Stocks","Mutual Fund","Gold","Real Estate","Fixed Deposit","Crypto","Other"].map(N=>r.jsx("option",{value:N,children:N},N))}),r.jsx("input",{type:"number",min:"0",step:"0.01",placeholder:`Invested (${t.symbol})`,value:we.invested,onChange:N=>Pe(xe=>({...xe,invested:N.target.value})),style:ue.input}),r.jsx("input",{placeholder:"Note (optional)",value:we.note,onChange:N=>Pe(xe=>({...xe,note:N.target.value})),style:ue.input}),r.jsx(vs,{onCancel:()=>Pe(null),onSave:Xi,disabled:!(we.name.trim()&&parseFloat(we.invested)>0)})]})]}):r.jsx("div",{style:ue.loading,children:"Loading…"})}function ro({title:e,eyebrow:t,onClick:n,children:o}){return r.jsxs("div",{style:ue.card,children:[r.jsxs("div",{style:ue.cardTitleRow,children:[r.jsxs("button",{onClick:n,style:ue.cardTitleBtn,children:[e," ",r.jsx(Lx,{size:13})]}),t&&r.jsx("span",{style:ue.cardEyebrow,children:t})]}),o]})}function hs({children:e}){return r.jsx("div",{style:ue.muted,children:e})}function xa({color:e,label:t,pct:n,val:o}){return r.jsxs("div",{style:ue.pieLegRow,children:[r.jsx("span",{style:{...ue.legendDot,background:e}}),r.jsx("span",{style:ue.pieLegName,children:t}),r.jsxs("span",{style:ue.pieLegPct,children:[Math.round(n),"%"]}),r.jsx("span",{style:ue.pieLegMin,children:o})]})}function fs({icon:e,color:t,label:n,value:o,sub:i,onClick:s}){return r.jsxs("button",{onClick:s,style:ue.statTile,children:[r.jsx("div",{style:{...ue.statIcon,background:`${t}1A`,color:t},children:r.jsx(e,{size:17})}),r.jsxs("div",{style:{minWidth:0},children:[r.jsx("div",{style:ue.statVal,children:o}),r.jsxs("div",{style:ue.statLbl,children:[n,i?` · ${i}`:""]})]})]})}function xs({icon:e,color:t,label:n,done:o,doneText:i,idleText:s,onClick:l}){return r.jsxs("button",{onClick:l,style:ue.miniCard,children:[r.jsx("div",{style:{...ue.statIcon,background:`${t}1A`,color:t},children:r.jsx(e,{size:16})}),r.jsx("div",{style:ue.miniLabel,children:n}),r.jsx("div",{style:{...ue.miniStatus,color:o?"#4C9A6B":"var(--text-3)"},children:o?i:s})]})}function ys({title:e,onClose:t,children:n}){return r.jsx("div",{style:ue.modalOverlay,onClick:t,children:r.jsxs("div",{style:ue.modalCard,onClick:o=>o.stopPropagation(),children:[r.jsx("div",{style:ue.modalTitle,children:e}),r.jsx("div",{style:ue.modalBody,children:n})]})})}function vs({onCancel:e,onSave:t,disabled:n}){return r.jsxs("div",{style:ue.modalActions,children:[r.jsx("button",{onClick:e,style:ue.modalCancel,children:"Cancel"}),r.jsx("button",{onClick:t,disabled:n,style:{...ue.modalConfirm,...n?{opacity:.5,cursor:"not-allowed"}:{}},children:"Save"})]})}const ue={loading:{padding:40,textAlign:"center",color:"var(--text-3)",fontFamily:"'Inter',system-ui,sans-serif"},page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},chipWrap:{display:"flex",gap:8,flexWrap:"wrap"},usedChip:{border:"1px solid var(--border)",background:"var(--surface-2)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",gap:6},usedChipTime:{color:"var(--text-3)",fontWeight:600,fontSize:11.5},statGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:10,marginBottom:14},statTile:{display:"flex",alignItems:"center",gap:10,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,padding:"12px 14px",cursor:"pointer",fontFamily:"inherit",textAlign:"left",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},statIcon:{width:34,height:34,borderRadius:10,display:"grid",placeItems:"center",flexShrink:0},statVal:{fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},card:{background:"var(--surface)",borderRadius:16,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,marginBottom:10},cardTitleBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"'Fraunces',Georgia,serif",fontSize:16,fontWeight:700,color:"var(--text)"},cardEyebrow:{fontSize:12,fontWeight:700,color:"var(--text-3)"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"10px 0"},rows:{display:"flex",flexDirection:"column",gap:2},row:{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:"1px solid var(--border)"},dot:{width:10,height:10,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:13.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},rowMeta:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,flexShrink:0},rowAmt:{fontSize:13.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:20,flexWrap:"wrap"},pieChart:{position:"relative",width:110,height:110,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:66,height:66,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:12.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:9.5,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:160,display:"flex",flexDirection:"column",gap:8},pieLegRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:10,height:10,borderRadius:3,flexShrink:0},pieLegName:{flex:1,fontSize:13,fontWeight:600},pieLegPct:{fontSize:12.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",width:40,textAlign:"right"},pieLegMin:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,minWidth:58,textAlign:"right"},cardGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:10,marginBottom:14},miniCard:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:6,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,padding:"12px 14px",cursor:"pointer",fontFamily:"inherit",textAlign:"left",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},miniLabel:{fontSize:13,fontWeight:700,color:"var(--text)"},miniStatus:{fontSize:11.5,fontWeight:600},walletRow:{display:"flex",gap:10},walletStat:{flex:1,textAlign:"center"},walletVal:{fontSize:17,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},walletLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:2},quickHead:{fontSize:13,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",margin:"6px 0 10px"},quickCard:{border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,padding:"14px 16px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},quickTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13.5,fontWeight:700,color:"var(--text)"},quickStat:{fontSize:13,color:"var(--text-2)",fontWeight:600},quickAddBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface-2)",color:"var(--text)",padding:"8px 10px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},habitList:{display:"flex",flexWrap:"wrap",gap:6},habitChip:{border:"1px solid var(--border)",background:"var(--surface-2)",color:"var(--text-2)",padding:"5px 10px",borderRadius:14,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",gap:4},habitChipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},quadGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6},quadCell:{display:"flex",justifyContent:"space-between",alignItems:"center",border:"1px solid var(--border)",borderRadius:8,padding:"5px 8px",fontSize:11.5},quadLabel:{color:"var(--text-3)",fontWeight:600},quadCount:{fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",fontSize:13},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modalCard:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"20px 20px 16px",width:340,maxWidth:"100%",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)"},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},modalBody:{display:"flex",flexDirection:"column",gap:8},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface-2)",outline:"none"},modalActions:{display:"flex",gap:8,marginTop:6},modalCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalConfirm:{flex:1,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Yy=7e3;function Jt(e,t,n){const[o,i]=c.useState([]),s=c.useRef({}),l=c.useCallback(async(g,m="Item")=>{await e(g),n();const y=`${g}-${Date.now()}`;i(f=>[...f,{id:y,itemId:g,label:m}]),s.current[y]=setTimeout(()=>{i(f=>f.filter(E=>E.id!==y)),delete s.current[y]},Yy)},[e,n]),d=c.useCallback(async g=>{const m=o.find(y=>y.id===g);m&&(clearTimeout(s.current[g]),delete s.current[g],i(y=>y.filter(f=>f.id!==g)),await t(m.itemId),n())},[o,t,n]),a=c.useCallback(g=>{clearTimeout(s.current[g]),delete s.current[g],i(m=>m.filter(y=>y.id!==g))},[]);return{deleteItem:l,toasts:o,handleUndo:d,handleDismiss:a}}function er({toasts:e,onUndo:t,onDismiss:n}){return r.jsx("div",{style:ao.container,children:e.map(o=>r.jsx(Qy,{toast:o,onUndo:t,onDismiss:n},o.id))})}function Qy({toast:e,onUndo:t,onDismiss:n}){const[o,i]=c.useState(100);return c.useEffect(()=>{const s=Date.now(),l=7e3,d=setInterval(()=>{const a=Date.now()-s,g=Math.max(0,100-a/l*100);i(g),g===0&&clearInterval(d)},50);return()=>clearInterval(d)},[]),r.jsxs("div",{style:ao.toast,children:[r.jsx("div",{style:{...ao.bar,width:`${o}%`}}),r.jsxs("span",{style:ao.msg,children:[e.label," deleted"]}),r.jsx("button",{style:ao.undoBtn,onClick:()=>t(e.id),children:"Undo"}),r.jsx("button",{style:ao.closeBtn,onClick:()=>n(e.id),children:"×"})]})}const ao={container:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",gap:8,zIndex:999,pointerEvents:"none"},toast:{position:"relative",display:"flex",alignItems:"center",gap:12,background:"var(--accent-strong)",color:"#fff",borderRadius:10,padding:"12px 16px",fontSize:13.5,fontFamily:"'Inter', system-ui, sans-serif",boxShadow:"0 4px 20px rgba(0,0,0,0.25)",minWidth:260,overflow:"hidden",pointerEvents:"all"},bar:{position:"absolute",bottom:0,left:0,height:3,background:"#4C9A6B",transition:"width 0.05s linear",borderRadius:"0 0 0 10px"},msg:{flex:1,fontWeight:500},undoBtn:{border:"1px solid rgba(255,255,255,0.3)",background:"none",color:"#4C9A6B",fontWeight:700,fontSize:13,padding:"4px 10px",borderRadius:6,cursor:"pointer",fontFamily:"inherit"},closeBtn:{border:"none",background:"none",color:"rgba(255,255,255,0.5)",cursor:"pointer",fontSize:18,lineHeight:1,padding:"0 2px"}},$r={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},Ky=[{id:"Q1",symbol:"™",title:"Do Now",sub:"Important · Urgent",accent:"#C2536B"},{id:"Q2",symbol:"©",title:"Schedule",sub:"Important · Not Urgent",accent:"#3A7CA5"},{id:"Q3",symbol:"®",title:"Delegate",sub:"Not Important · Urgent",accent:"#C9A227"},{id:"Q4",symbol:"•",title:"Drop",sub:"Not Important · Not Urgent",accent:"#8A8780"}];function Pm(){return new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Kolkata"})}function Nm(){const e=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"})),n=e.getMinutes()<30?30:0,o=n===0?e.getHours()+1:e.getHours();return`${String(o%24).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function ju(e,t){const[n,o]=e.split(":").map(Number),i=n*60+o+t;return`${String(Math.floor(i/60)%24).padStart(2,"0")}:${String(i%60).padStart(2,"0")}`}function Xy(e){return e?new Date(e).toLocaleString("en-IN",{timeZone:"Asia/Kolkata",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0}):""}const ks=()=>({title:"",pillar:"Financial",est:30,date:Pm(),startTime:Nm()});function qy(){const[e,t]=c.useState([]),[n,o]=c.useState([]),[i,s]=c.useState("All"),[l,d]=c.useState(null),[a,g]=c.useState(null),[m,y]=c.useState(ks()),[f,E]=c.useState(null),[C,w]=c.useState(ks()),D=c.useCallback(()=>_.getTasks().then(t).catch(console.error),[]);c.useEffect(()=>{D(),_.getGoals().then($=>o($.filter(P=>P.horizon==="Weekly"))).catch(()=>{})},[D]);const b=Object.keys($r),p=n.filter($=>i==="All"||$.pillar===i),h=n.find($=>$.id===l)||null,T=e.filter($=>l!=null?$.goal_id===l:i!=="All"?$.pillar===i:!0),v=$=>{s($),d(null),g(null),y(P=>({...P,pillar:$==="All"?"Financial":$}))},S=$=>{d($),g(null);const P=n.find(le=>le.id===$);P&&y(le=>({...le,pillar:P.pillar}))},{deleteItem:W,toasts:F,handleUndo:j,handleDismiss:A}=Jt(_.deleteTask,_.restoreTask,D),ie=$=>T.filter(P=>P.quadrant===$),B=$=>ie($).reduce((P,le)=>P+le.time_estimate_min,0),I=$=>$>=60?`${Math.floor($/60)}h${$%60?` ${$%60}m`:""}`:`${$}m`,J=async $=>{if(!m.title.trim())return;const P=m.date&&m.startTime?`${m.date}T${m.startTime}:00`:null;await _.createTask({pillar:h?h.pillar:m.pillar,title:m.title,quadrant:$,time_estimate_min:Number(m.est)||30,start_datetime:P,goal_id:l??null}),y(ks()),g(null),D()},be=($,P)=>W($,P),se=$=>{const P=$.start_datetime?$.start_datetime.split("T"):[];E($.id),g(null),w({title:$.title,pillar:$.pillar,est:$.time_estimate_min,date:P[0]||Pm(),startTime:(P[1]||"").slice(0,5)||Nm()})},ye=async $=>{if(!C.title.trim())return;const P=C.date&&C.startTime?`${C.date}T${C.startTime}:00`:null;await _.updateTask($.id,{title:C.title.trim(),pillar:C.pillar,time_estimate_min:Number(C.est)||30,start_datetime:P}),E(null),D()},G=c.useRef(null),Y=c.useRef(null),[oe,K]=c.useState(null),pe=($,P)=>{var de;const le=document.elementFromPoint($,P);return le&&le.closest&&((de=le.closest("[data-quad]"))==null?void 0:de.getAttribute("data-quad"))||null};c.useEffect(()=>{const $=le=>{const de=G.current;if(!de)return;const Te=Math.hypot(le.clientX-de.startX,le.clientY-de.startY);if(!de.active){if(de.pointerType!=="mouse"){Te>12&&(clearTimeout(Y.current),G.current=null);return}if(Te<6)return;de.active=!0,document.body.style.userSelect="none"}le.cancelable&&le.preventDefault(),de.overQ=pe(le.clientX,le.clientY),K({id:de.task.id,title:de.task.title,x:le.clientX,y:le.clientY,overQ:de.overQ})},P=()=>{clearTimeout(Y.current);const le=G.current;G.current=null,document.body.style.userSelect="",document.body.style.touchAction="",K(null),le&&le.active&&le.overQ&&le.overQ!==le.task.quadrant&&_.updateTask(le.task.id,{quadrant:le.overQ}).then(D).catch(()=>{})};return window.addEventListener("pointermove",$,{passive:!1}),window.addEventListener("pointerup",P),window.addEventListener("pointercancel",P),()=>{window.removeEventListener("pointermove",$),window.removeEventListener("pointerup",P),window.removeEventListener("pointercancel",P)}},[D]);const O=($,P)=>{$.pointerType==="mouse"&&$.button!==0||(G.current={task:P,startX:$.clientX,startY:$.clientY,active:!1,pointerType:$.pointerType,overQ:null},$.pointerType!=="mouse"&&(Y.current=setTimeout(()=>{const le=G.current;le&&(le.active=!0,document.body.style.touchAction="none",K({id:le.task.id,title:le.task.title,x:le.startX,y:le.startY,overQ:le.task.quadrant}))},280)))};return r.jsxs("div",{style:Se.page,children:[r.jsxs("div",{style:Se.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:Se.eyebrow,children:"Anvil · Weekly Routing"}),r.jsx("h1",{style:Se.h1,children:"Weekly Routing"})]}),r.jsx("div",{style:Se.headRight,children:r.jsx("div",{style:Se.legend,children:Object.entries($r).map(([$,P])=>r.jsxs("span",{style:Se.legendItem,children:[r.jsx("span",{style:{...Se.dot,background:P.dot}}),$]},$))})})]}),r.jsx("div",{style:Se.filterBar,children:["All",...b].map($=>{const P=i===$,le=$r[$];return r.jsxs("button",{onClick:()=>v($),style:{...Se.pillChip,...P?le?{background:le.dot,color:"#fff",borderColor:le.dot}:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:[le&&r.jsx("span",{style:{...Se.dot,background:P?"#fff":le.dot}}),$==="All"?"All":$]},$)})}),r.jsxs("div",{style:Se.goalBar,children:[r.jsx("button",{onClick:()=>d(null),style:{...Se.goalChip,...l==null?Se.goalChipOn:{}},children:"All goals"}),p.map($=>{var de;const P=((de=$r[$.pillar])==null?void 0:de.dot)||"#9A968C",le=l===$.id;return r.jsxs("button",{onClick:()=>S($.id),style:{...Se.goalChip,...le?{background:P,color:"#fff",borderColor:P}:{}},title:$.title,children:[r.jsx("span",{style:{...Se.dot,background:le?"#fff":P}}),r.jsx("span",{style:Se.goalChipText,children:$.title})]},$.id)}),p.length===0&&r.jsxs("span",{style:Se.goalEmpty,children:["No weekly goals",i!=="All"?` for ${i}`:""," — create them in Goals."]})]}),r.jsx("div",{style:Se.grid,children:Ky.map($=>{var P,le;return r.jsxs("section",{"data-quad":$.id,style:{...Se.quad,borderTop:`3px solid ${$.accent}`,...oe&&oe.overQ===$.id&&oe.overQ!==((P=e.find(de=>de.id===oe.id))==null?void 0:P.quadrant)?{outline:`2px dashed ${$.accent}`,outlineOffset:2,background:"var(--hover)"}:{}},children:[r.jsxs("header",{style:Se.quadHead,children:[r.jsxs("div",{style:Se.quadTitleRow,children:[r.jsx("span",{style:{...Se.symbol,color:$.accent},children:$.symbol}),r.jsxs("div",{children:[r.jsx("div",{style:Se.quadTitle,children:$.title}),r.jsx("div",{style:Se.quadSub,children:$.sub})]})]}),r.jsx("span",{style:Se.quadTotal,children:I(B($.id))})]}),r.jsxs("div",{style:Se.list,children:[ie($.id).map(de=>{const Te=$r[de.pillar]||$r.Financial;return f===de.id?r.jsxs("div",{style:Se.addBox,children:[r.jsx("input",{autoFocus:!0,placeholder:"Task title",value:C.title,onChange:Q=>w({...C,title:Q.target.value}),onKeyDown:Q=>Q.key==="Enter"&&ye(de),style:Se.input}),r.jsxs("div",{style:Se.dateTimeRow,children:[r.jsxs("div",{style:Se.dateTimeGroup,children:[r.jsx("label",{style:Se.dtLabel,children:"Date"}),r.jsx("input",{type:"date",value:C.date,onChange:Q=>w({...C,date:Q.target.value}),style:Se.dtInput})]}),r.jsxs("div",{style:Se.dateTimeGroup,children:[r.jsx("label",{style:Se.dtLabel,children:"Start"}),r.jsx("input",{type:"time",value:C.startTime,onChange:Q=>w({...C,startTime:Q.target.value}),style:Se.dtInput})]}),r.jsxs("div",{style:Se.dateTimeGroup,children:[r.jsx("label",{style:Se.dtLabel,children:"End"}),r.jsx("div",{style:Se.dtEndValue,children:ju(C.startTime,Number(C.est)||30)})]})]}),r.jsxs("div",{style:Se.addRow,children:[r.jsx("select",{value:C.pillar,onChange:Q=>w({...C,pillar:Q.target.value}),style:Se.select,children:Object.keys($r).map(Q=>r.jsx("option",{children:Q},Q))}),r.jsx("input",{type:"number",value:C.est,onChange:Q=>w({...C,est:Q.target.value}),style:{...Se.input,width:60}}),r.jsx("span",{style:Se.minLabel,children:"min"}),r.jsx("button",{onClick:()=>ye(de),style:Se.saveBtn,children:r.jsx(Ne,{size:14})}),r.jsx("button",{onClick:()=>E(null),style:Se.cancelBtn,children:r.jsx(Be,{size:14})})]})]},de.id):r.jsxs("div",{onPointerDown:Q=>O(Q,de),style:{...Se.card,background:Te.soft,cursor:"grab",touchAction:"pan-y",...(oe==null?void 0:oe.id)===de.id?{opacity:.4}:{}},children:[r.jsx("span",{style:{...Se.cardBar,background:Te.dot}}),r.jsxs("div",{style:Se.cardBody,children:[r.jsx("div",{style:Se.cardTitle,children:de.title}),de.start_datetime&&r.jsxs("div",{style:Se.eventTime,children:[r.jsx(Vx,{size:10}),Xy(de.start_datetime)]}),r.jsxs("div",{style:Se.cardMeta,children:[r.jsxs("span",{style:Se.metaPill,children:[r.jsx("span",{style:{...Se.dot,background:Te.dot,width:7,height:7}}),de.pillar]}),r.jsxs("span",{style:Se.metaPill,children:[r.jsx(Jx,{size:11})," ",I(de.time_estimate_min)]})]})]}),r.jsxs("div",{style:Se.cardActions,children:[r.jsx("button",{onClick:()=>se(de),onPointerDown:Q=>Q.stopPropagation(),style:Se.delBtn,title:"Edit",children:r.jsx(bt,{size:12})}),r.jsx("button",{onClick:()=>be(de.id,de.title),onPointerDown:Q=>Q.stopPropagation(),style:Se.delBtn,children:r.jsx(Be,{size:13})})]})]},de.id)}),a===$.id?r.jsxs("div",{style:Se.addBox,children:[r.jsx("input",{autoFocus:!0,placeholder:"Task title",value:m.title,onChange:de=>y({...m,title:de.target.value}),onKeyDown:de=>de.key==="Enter"&&J($.id),style:Se.input}),r.jsxs("div",{style:Se.dateTimeRow,children:[r.jsxs("div",{style:Se.dateTimeGroup,children:[r.jsx("label",{style:Se.dtLabel,children:"Date"}),r.jsx("input",{type:"date",value:m.date,onChange:de=>y({...m,date:de.target.value}),style:Se.dtInput})]}),r.jsxs("div",{style:Se.dateTimeGroup,children:[r.jsx("label",{style:Se.dtLabel,children:"Start"}),r.jsx("input",{type:"time",value:m.startTime,onChange:de=>y({...m,startTime:de.target.value}),style:Se.dtInput})]}),r.jsxs("div",{style:Se.dateTimeGroup,children:[r.jsx("label",{style:Se.dtLabel,children:"End"}),r.jsx("div",{style:Se.dtEndValue,children:ju(m.startTime,Number(m.est)||30)})]})]}),r.jsxs("div",{style:Se.addRow,children:[h?r.jsxs("span",{style:Se.goalPillarTag,children:[r.jsx("span",{style:{...Se.dot,background:(le=$r[h.pillar])==null?void 0:le.dot}})," ",h.pillar]}):r.jsx("select",{value:m.pillar,onChange:de=>y({...m,pillar:de.target.value}),style:Se.select,children:Object.keys($r).map(de=>r.jsx("option",{children:de},de))}),r.jsx("input",{type:"number",value:m.est,onChange:de=>y({...m,est:de.target.value}),style:{...Se.input,width:60}}),r.jsx("span",{style:Se.minLabel,children:"min"}),r.jsx("button",{onClick:()=>J($.id),style:Se.saveBtn,children:r.jsx(Ne,{size:14})}),r.jsx("button",{onClick:()=>{g(null),y(ks())},style:Se.cancelBtn,children:r.jsx(Be,{size:14})})]})]}):r.jsxs("button",{onClick:()=>g($.id),style:Se.addTrigger,children:[r.jsx(Ze,{size:13})," Add task"]})]})]},$.id)})}),oe&&r.jsx("div",{style:{...Se.dragClone,left:oe.x+12,top:oe.y+12},children:oe.title}),r.jsx(er,{toasts:F,onUndo:j,onDismiss:A})]})}const Se={page:{fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:16,marginBottom:22},headRight:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:10},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces', Georgia, serif"},legend:{display:"flex",gap:14,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--text-2)",fontWeight:500},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:10},pillChip:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},goalBar:{display:"flex",gap:7,flexWrap:"wrap",alignItems:"center",marginBottom:18,paddingBottom:14,borderBottom:"1px solid var(--border)"},goalChip:{display:"inline-flex",alignItems:"center",gap:6,maxWidth:220,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},goalChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},goalChipText:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},goalEmpty:{fontSize:12,color:"var(--text-3)",fontStyle:"italic"},goalPillarTag:{display:"inline-flex",alignItems:"center",gap:6,fontSize:12.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"7px 10px",borderRadius:6,flex:1},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16},quad:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.06)"},quadHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14},quadTitleRow:{display:"flex",gap:10,alignItems:"center"},symbol:{fontSize:20,lineHeight:1},quadTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em"},quadSub:{fontSize:11,color:"var(--text-3)",marginTop:1,letterSpacing:"0.02em"},quadTotal:{fontSize:12,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"3px 9px",borderRadius:20},list:{display:"flex",flexDirection:"column",gap:8},card:{display:"flex",alignItems:"stretch",gap:10,borderRadius:9,padding:"10px 10px 10px 0",overflow:"hidden"},cardBar:{width:3,borderRadius:3,flexShrink:0},cardBody:{flex:1,minWidth:0},cardTitle:{fontSize:13.5,fontWeight:500,lineHeight:1.35,marginBottom:4},eventTime:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#3A7CA5",fontWeight:500,marginBottom:5},cardMeta:{display:"flex",gap:8,flexWrap:"wrap"},metaPill:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"var(--text-2)",fontWeight:500},cardActions:{display:"flex",flexDirection:"column",gap:4,alignSelf:"center",flexShrink:0},delBtn:{width:30,height:30,borderRadius:8,border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center"},addTrigger:{display:"flex",alignItems:"center",gap:5,fontSize:12.5,color:"var(--text-3)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"8px 10px",cursor:"pointer",fontWeight:500,marginTop:2},addBox:{border:"1px solid var(--border)",borderRadius:9,padding:10,display:"flex",flexDirection:"column",gap:8},dateTimeRow:{display:"flex",gap:8,alignItems:"flex-end"},dateTimeGroup:{display:"flex",flexDirection:"column",gap:3,flex:1},dtLabel:{fontSize:10,fontWeight:600,color:"var(--text-3)",letterSpacing:"0.08em",textTransform:"uppercase"},dtInput:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},dtEndValue:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,color:"var(--text-2)",background:"var(--bg)"},addRow:{display:"flex",alignItems:"center",gap:6},input:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",flex:1,minWidth:0},select:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 8px",fontSize:12.5,fontFamily:"inherit",flex:1},minLabel:{fontSize:11,color:"var(--text-3)"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},dragClone:{position:"fixed",zIndex:1e3,pointerEvents:"none",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:8,padding:"8px 12px",fontSize:13,fontWeight:600,color:"var(--text)",boxShadow:"0 8px 24px rgba(0,0,0,0.25)",maxWidth:220,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},cr={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},Jo=Object.keys(cr),Gs=["Yearly","Quarterly","Monthly","Weekly"],Rr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wu=[{label:"Q1 · Jan–Mar",startMonth:0},{label:"Q2 · Apr–Jun",startMonth:3},{label:"Q3 · Jul–Sep",startMonth:6},{label:"Q4 · Oct–Dec",startMonth:9}],Us=new Date().getFullYear(),no=Array.from({length:8},(e,t)=>Us-1+t);function Zy(e=720){const[t,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),t}const li=864e5,Et=30,vi=190,oo=e=>new Date(e+"T00:00:00"),Su=e=>e.toLocaleDateString("en-US",{month:"short",day:"numeric"}),Jy=[{key:"yearly",label:"Yearly",horizons:["Yearly"]},{key:"quarterly",label:"Quarterly",horizons:["Quarterly"]},{key:"mw",label:"Monthly & Weekly",horizons:["Monthly","Weekly"]}],Cu={Yearly:"Yr",Quarterly:"Q",Monthly:"Mo",Weekly:"Wk"},e0={Yearly:"Y",Quarterly:"Q",Monthly:"M",Weekly:"W"},zu={Yearly:0,Quarterly:1,Monthly:2,Weekly:3},ya=e=>Gs[Math.min(Gs.indexOf(e)+1,Gs.length-1)],js=e=>{if(!e||!e.start_date)return Array.from({length:12},(l,d)=>d);const t=new Date(e.start_date+"T00:00:00"),n=new Date(e.end_date+"T00:00:00"),o=t.getFullYear(),i=t.getMonth(),s=n.getFullYear()>o?11:n.getMonth();return Array.from({length:s-i+1},(l,d)=>i+d)},ei=e=>new Date(e+"T00:00:00").getFullYear(),Om=(e,t,n)=>{const o=(n-1)*7+1,i=Math.min(o+6,new Date(e,t+1,0).getDate()),s=String(t+1).padStart(2,"0");return{start_date:`${e}-${s}-${String(o).padStart(2,"0")}`,end_date:`${e}-${s}-${String(i).padStart(2,"0")}`}},Iu=(e,t,n,o=1)=>{const i=t;switch(e){case"Yearly":return{start_date:`${i}-01-01`,end_date:`${i}-12-31`};case"Quarterly":{const s=Math.floor(n/3)*3,l=s+1,d=s+3,a=new Date(i,d,0).getDate();return{start_date:`${i}-${String(l).padStart(2,"0")}-01`,end_date:`${i}-${String(d).padStart(2,"0")}-${a}`}}case"Monthly":{const s=new Date(i,n+1,0).getDate();return{start_date:`${i}-${String(n+1).padStart(2,"0")}-01`,end_date:`${i}-${String(n+1).padStart(2,"0")}-${s}`}}case"Weekly":return Om(i,n,o);default:return{start_date:`${i}-01-01`,end_date:`${i}-12-31`}}},ki=(e,t)=>{const n=new Date(e+"T00:00:00");return n.setDate(n.getDate()+t),`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`},wl=(e,t)=>Math.round((new Date(t+"T00:00:00")-new Date(e+"T00:00:00"))/li)+1,t0=(e,t,n)=>{if(!n||!n.start_date||!n.end_date)return{start_date:e,end_date:t,clamped:!1};const o=wl(e,t);let i=e,s=t,l=!1;return i<n.start_date&&(i=n.start_date,s=ki(i,o-1),l=!0),s>n.end_date&&(s=n.end_date,i=ki(s,-(o-1)),l=!0,i<n.start_date&&(i=n.start_date)),{start_date:i,end_date:s,clamped:l}},r0=(e,t)=>new Date(e,t+1,0).getDate(),Wd=e=>{const t=new Date(e.start_date+"T00:00:00");if(e.horizon==="Monthly")return r0(t.getFullYear(),t.getMonth());if(e.horizon==="Weekly"){const n=Math.min(Math.max(Math.ceil(t.getDate()/7),1),4),o=Om(t.getFullYear(),t.getMonth(),n);return wl(o.start_date,o.end_date)}return wl(e.start_date,e.end_date)},Tu=e=>Math.round(Wd(e)*1.5),n0=e=>e.horizon==="Monthly"||e.horizon==="Weekly",o0=e=>{if(!e.start_date)return"";const t=new Date(e.start_date+"T00:00:00"),n=t.getMonth();switch(e.horizon){case"Yearly":{const o=e.end_date?new Date(e.end_date+"T00:00:00").getFullYear():t.getFullYear();return o>t.getFullYear()?`${t.getFullYear()}–${o}`:`${t.getFullYear()}`}case"Quarterly":return`Q${Math.floor(n/3)+1} ${t.getFullYear()}`;case"Monthly":return`${Rr[n]} ${t.getFullYear()}`;case"Weekly":return`${Rr[n]} W${Math.ceil(t.getDate()/7)}`;default:return""}};function i0(){const[e,t]=c.useState([]),[n,o]=c.useState("All"),[i,s]=c.useState({}),[l,d]=c.useState({}),[a,g]=c.useState(null),[m,y]=c.useState(""),[f,E]=c.useState(0),[C,w]=c.useState(1),[D,b]=c.useState(Us),[p,h]=c.useState(Us),[T,v]=c.useState("Yearly"),[S,W]=c.useState(Jo[0]),[F,j]=c.useState(null),A=Zy(),[ie,B]=c.useState(!A),[I,J]=c.useState("day"),[be,se]=c.useState(null),ye=c.useRef(null);c.useEffect(()=>{ye.current=be},[be]);const G=c.useRef(e);c.useEffect(()=>{G.current=e},[e]);const[Y,oe]=c.useState(null),K=c.useRef(null);c.useEffect(()=>{K.current=Y},[Y]);const pe=c.useRef(null),O=c.useRef(0),[$,P]=c.useState(null),le=c.useRef(null),de=c.useCallback(L=>{P(L),clearTimeout(le.current),le.current=setTimeout(()=>P(null),2800)},[]),[Te,Q]=c.useState(null),ne=c.useRef(null),[R,U]=c.useState(null),[M,z]=c.useState(null),x=(L,Z)=>{if(R===Z){U(null);return}const Ie=L.currentTarget.getBoundingClientRect(),Re=Ie.bottom+220<window.innerHeight;z({right:Math.max(8,window.innerWidth-Ie.right),...Re?{top:Ie.bottom+4}:{bottom:window.innerHeight-Ie.top+4}}),U(Z)},V=L=>{clearTimeout(ne.current),ne.current=setTimeout(()=>Q(L),350)},ge=()=>{clearTimeout(ne.current),Q(null)},je=c.useCallback(()=>{_.getGoals().then(t).catch(console.error)},[]);c.useEffect(()=>{je()},[je]);const{deleteItem:Oe,toasts:_e,handleUndo:Xe,handleDismiss:Ke}=Jt(_.deleteGoal,_.restoreGoal,je),ot=c.useCallback(async()=>{const L=ye.current;if(se(null),!L)return;const Z=Math.round(L.dx/(L.pxPerDay||Et));if(!Z)return;let Ie=ki(L.g.start_date,Z),Re=ki(L.g.end_date,Z);if(L.g.parent_goal_id){const Ue=G.current.find(Ve=>Ve.id===L.g.parent_goal_id),He=t0(Ie,Re,Ue);He.clamped&&de(`Can't move past "${(Ue==null?void 0:Ue.title)||"parent goal"}" — kept within its dates.`),Ie=He.start_date,Re=He.end_date}(Ie!==L.g.start_date||Re!==L.g.end_date)&&(await _.updateGoal(L.g.id,{pillar:L.g.pillar,start_date:Ie,end_date:Re}),je())},[je,de]),ht=!!be;c.useEffect(()=>{if(!ht)return;const L=He=>{O.current=He.clientX,se(Ve=>Ve&&{...Ve,dx:He.clientX-Ve.startX})},Z=()=>ot();window.addEventListener("pointermove",L),window.addEventListener("pointerup",Z);const Ie=44,Re=16,Ue=setInterval(()=>{const He=pe.current;if(!He)return;const Ve=He.getBoundingClientRect(),nt=O.current;let ve=0;if(nt<Ve.left+Ie?ve=-1:nt>Ve.right-Ie&&(ve=1),!ve)return;const Tt=He.scrollLeft;He.scrollLeft=Math.max(0,Math.min(Tt+ve*Re,He.scrollWidth-He.clientWidth));const tr=He.scrollLeft-Tt;tr&&se(et=>et&&{...et,startX:et.startX-tr,dx:nt-(et.startX-tr)})},16);return()=>{window.removeEventListener("pointermove",L),window.removeEventListener("pointerup",Z),clearInterval(Ue)}},[ht,ot]);const Qe=c.useCallback(async()=>{const L=K.current;if(oe(null),!L)return;const Z=L.g,Ie=Wd(Z),Re=Tu(Z),Ue=Math.max(Ie,Math.min(Re,wl(Z.start_date,Z.end_date)+Math.round(L.dx/Et)));let He=ki(Z.start_date,Ue-1);if(Z.parent_goal_id){const Ve=G.current.find(nt=>nt.id===Z.parent_goal_id);Ve!=null&&Ve.end_date&&He>Ve.end_date&&(He=Ve.end_date,de(`Can't extend past "${(Ve==null?void 0:Ve.title)||"parent goal"}" — kept within its dates.`))}He!==Z.end_date&&He>=Z.start_date&&(await _.updateGoal(Z.id,{end_date:He}),je())},[je,de]),zt=!!Y;c.useEffect(()=>{if(!zt)return;const L=Ie=>oe(Re=>Re&&{...Re,dx:Ie.clientX-Re.startX}),Z=()=>Qe();return window.addEventListener("pointermove",L),window.addEventListener("pointerup",Z),()=>{window.removeEventListener("pointermove",L),window.removeEventListener("pointerup",Z)}},[zt,Qe]);const It=n==="All",kt=cr[n]||{dot:"var(--text-3)"},gt=It?e:e.filter(L=>L.pillar===n),jt=gt.filter(L=>!L.parent_goal_id),u=L=>gt.filter(Z=>Z.parent_goal_id===L),ee=L=>d(Z=>({...Z,[L]:!Z[L]})),Ae=L=>L.horizon==="Monthly"||L.horizon==="Weekly",Le=L=>i[L.id]!==void 0?i[L.id]:Ae(L),we=L=>s(Z=>({...Z,[L.id]:!Le(L)})),Pe=(L,Z=null)=>{g(L),y(""),w(1);const Ie=Z?ei(Z.start_date):Us;b(Ie),h(Ie),L==="ROOT"&&W(It?Jo[0]:n);const Re=L==="ROOT"?"Yearly":ya(Z==null?void 0:Z.horizon);v(Re);const Ue=L==="ROOT"?Array.from({length:12},(He,Ve)=>Ve):js(Z);E(Re==="Quarterly"?Math.floor(Ue[0]/3)*3:Ue[0]??0)},wt=async(L,Z)=>{if(!m.trim())return;const Ie=(Z==null?void 0:Z.horizon)??null,Re=L==="ROOT"?T:ya(Ie),Ue=L==="ROOT"?S:(Z==null?void 0:Z.pillar)||n;let He,Ve;if(Re==="Yearly"){const nt=Number(D),ve=Math.max(nt,Number(p)||nt);He=`${nt}-01-01`,Ve=`${ve}-12-31`}else{const nt=Z?ei(Z.start_date):Number(D);({start_date:He,end_date:Ve}=Iu(Re,nt,f,C))}await _.createGoal({pillar:Ue,title:m.trim(),horizon:Re,parent_goal_id:L==="ROOT"?null:L,start_date:He,end_date:Ve}),L!=="ROOT"&&d(nt=>({...nt,[L]:!0})),g(null),y(""),je()},At=L=>{const Z=L.start_date?new Date(L.start_date+"T00:00:00"):new Date,Ie=Z.getMonth(),Re=Math.min(Math.max(Math.ceil(Z.getDate()/7),1),4);j({id:L.id,title:L.title,pillar:L.pillar,horizon:L.horizon,parentGoal:e.find(Ue=>Ue.id===L.parent_goal_id)||null,year:ei(L.start_date),endYear:ei(L.end_date),month:L.horizon==="Quarterly"?Math.floor(Ie/3)*3:Ie,week:Re})},sn=async()=>{if(!F||!F.title.trim())return;let L,Z;if(F.horizon==="Yearly"){const Ie=Number(F.year),Re=Math.max(Ie,Number(F.endYear)||Ie);L=`${Ie}-01-01`,Z=`${Re}-12-31`}else{let Ie=F.month;F.horizon==="Weekly"&&F.parentGoal&&(Ie=js(F.parentGoal)[0]);const Re=F.parentGoal?ei(F.parentGoal.start_date):Number(F.year);({start_date:L,end_date:Z}=Iu(F.horizon,Re,Ie,F.week))}await _.updateGoal(F.id,{title:F.title.trim(),pillar:F.pillar,start_date:L,end_date:Z}),j(null),je()},Ki=({parentId:L,parentGoal:Z,depth:Ie})=>{const Re=L==="ROOT",Ue=Re?T:ya((Z==null?void 0:Z.horizon)??null),He=Re?Array.from({length:12},(ve,Tt)=>Tt):js(Z),Ve=wu.filter(ve=>He.includes(ve.startMonth)),nt=ve=>{v(ve),E(0),w(1),h(D)};return r.jsxs("div",{style:{...ae.addBox,marginLeft:Ie*24},children:[r.jsx("input",{autoFocus:!0,placeholder:`New ${Ue.toLowerCase()} goal…`,value:m,onChange:ve=>y(ve.target.value),onKeyDown:ve=>{ve.key==="Enter"&&wt(L,Z),ve.key==="Escape"&&g(null)},style:ae.input}),Re&&It&&r.jsx("select",{value:S,onChange:ve=>W(ve.target.value),style:ae.monthSelect,title:"Pillar",children:Jo.map(ve=>r.jsx("option",{value:ve,children:ve},ve))}),Re&&r.jsx("select",{value:T,onChange:ve=>nt(ve.target.value),style:ae.monthSelect,title:"Goal level",children:Gs.map(ve=>r.jsx("option",{value:ve,children:ve},ve))}),Ue==="Yearly"&&r.jsxs(r.Fragment,{children:[r.jsx("select",{value:D,onChange:ve=>{const Tt=Number(ve.target.value);b(Tt),p<Tt&&h(Tt)},style:ae.monthSelect,title:"Start year",children:no.map(ve=>r.jsx("option",{value:ve,children:ve},ve))}),r.jsx("span",{style:ae.toTag,children:"to"}),r.jsx("select",{value:p,onChange:ve=>h(Number(ve.target.value)),style:ae.monthSelect,title:"End year (spans multiple years)",children:no.filter(ve=>ve>=D).map(ve=>r.jsx("option",{value:ve,children:ve},ve))})]}),Ue!=="Yearly"&&Re&&r.jsx("select",{value:D,onChange:ve=>b(Number(ve.target.value)),style:ae.monthSelect,title:"Year",children:no.map(ve=>r.jsx("option",{value:ve,children:ve},ve))}),Ue==="Quarterly"&&r.jsx("select",{value:f,onChange:ve=>E(Number(ve.target.value)),style:ae.monthSelect,children:Ve.map(ve=>r.jsx("option",{value:ve.startMonth,children:ve.label},ve.startMonth))}),Ue==="Monthly"&&r.jsx("select",{value:f,onChange:ve=>E(Number(ve.target.value)),style:ae.monthSelect,children:He.map(ve=>r.jsx("option",{value:ve,children:Rr[ve]},ve))}),Ue==="Weekly"&&r.jsxs(r.Fragment,{children:[Re?r.jsx("select",{value:f,onChange:ve=>E(Number(ve.target.value)),style:ae.monthSelect,children:He.map(ve=>r.jsx("option",{value:ve,children:Rr[ve]},ve))}):r.jsx("span",{style:ae.inheritTag,children:Rr[He[0]]}),r.jsx("select",{value:C,onChange:ve=>w(Number(ve.target.value)),style:ae.monthSelect,children:[1,2,3,4].map(ve=>r.jsxs("option",{value:ve,children:["Week ",ve]},ve))})]}),r.jsx("button",{onClick:()=>wt(L,Z),style:ae.saveBtn,children:r.jsx(Ne,{size:14})}),r.jsx("button",{onClick:()=>g(null),style:ae.cancelBtn,children:r.jsx(Be,{size:14})})]})},Xi=({goal:L,depth:Z})=>{var Ve,nt,ve,Tt,tr;const Ie=u(L.id),Re=l[L.id],Ue=L.horizon!=="Weekly";if((F==null?void 0:F.id)===L.id){const et=js(F.parentGoal),Fn=wu.filter(Fe=>et.includes(Fe.startMonth)),Ho=!F.parentGoal;return r.jsxs("div",{style:{...ae.editBox,marginLeft:Z*24},children:[r.jsx("input",{autoFocus:!0,value:F.title,onChange:Fe=>j({...F,title:Fe.target.value}),onKeyDown:Fe=>Fe.key==="Enter"&&sn(),style:{...ae.input,flex:1}}),r.jsx("select",{value:F.pillar,onChange:Fe=>j({...F,pillar:Fe.target.value}),style:ae.monthSelect,children:Jo.map(Fe=>r.jsx("option",{children:Fe},Fe))}),F.horizon==="Yearly"&&r.jsxs(r.Fragment,{children:[r.jsx("select",{value:F.year,onChange:Fe=>{const Go=Number(Fe.target.value);j({...F,year:Go,endYear:Math.max(Go,F.endYear)})},style:ae.monthSelect,title:"Start year",children:no.map(Fe=>r.jsx("option",{value:Fe,children:Fe},Fe))}),r.jsx("span",{style:ae.toTag,children:"to"}),r.jsx("select",{value:F.endYear,onChange:Fe=>j({...F,endYear:Number(Fe.target.value)}),style:ae.monthSelect,title:"End year (spans multiple years)",children:no.filter(Fe=>Fe>=F.year).map(Fe=>r.jsx("option",{value:Fe,children:Fe},Fe))})]}),F.horizon!=="Yearly"&&Ho&&r.jsx("select",{value:F.year,onChange:Fe=>j({...F,year:Number(Fe.target.value)}),style:ae.monthSelect,title:"Year",children:no.map(Fe=>r.jsx("option",{value:Fe,children:Fe},Fe))}),F.horizon==="Quarterly"&&r.jsx("select",{value:F.month,onChange:Fe=>j({...F,month:Number(Fe.target.value)}),style:ae.monthSelect,children:Fn.map(Fe=>r.jsx("option",{value:Fe.startMonth,children:Fe.label},Fe.startMonth))}),F.horizon==="Monthly"&&r.jsx("select",{value:F.month,onChange:Fe=>j({...F,month:Number(Fe.target.value)}),style:ae.monthSelect,children:et.map(Fe=>r.jsx("option",{value:Fe,children:Rr[Fe]},Fe))}),F.horizon==="Weekly"&&r.jsxs(r.Fragment,{children:[Ho?r.jsx("select",{value:F.month,onChange:Fe=>j({...F,month:Number(Fe.target.value)}),style:ae.monthSelect,children:et.map(Fe=>r.jsx("option",{value:Fe,children:Rr[Fe]},Fe))}):r.jsx("span",{style:ae.inheritTag,children:Rr[et[0]]}),r.jsx("select",{value:F.week,onChange:Fe=>j({...F,week:Number(Fe.target.value)}),style:ae.monthSelect,children:[1,2,3,4].map(Fe=>r.jsxs("option",{value:Fe,children:["Week ",Fe]},Fe))})]}),r.jsx("button",{onClick:sn,style:ae.saveBtn,children:r.jsx(Ne,{size:14})}),r.jsx("button",{onClick:()=>j(null),style:ae.cancelBtn,children:r.jsx(Be,{size:14})})]})}return r.jsxs("div",{children:[r.jsxs("div",{style:{...ae.row,marginLeft:Z*24,background:Z===0&&((Ve=cr[L.pillar])==null?void 0:Ve.soft)||"transparent"},children:[Ie.length>0?r.jsx("button",{onClick:()=>ee(L.id),style:ae.caret,children:Re?r.jsx(Yi,{size:15}):r.jsx(on,{size:15})}):r.jsx("span",{style:{...ae.caret,opacity:.25},children:r.jsx(Yc,{size:12})}),r.jsx("span",{style:{...ae.horizonTag,color:((nt=cr[L.pillar])==null?void 0:nt.dot)||kt.dot,borderColor:((ve=cr[L.pillar])==null?void 0:ve.dot)||kt.dot},title:L.horizon,children:A?e0[L.horizon]:L.horizon}),r.jsxs("div",{style:ae.nameCol,children:[r.jsx("span",{style:{...ae.title,...Te===L.id?ae.titleFull:{}},title:L.title,onPointerDown:()=>V(L.id),onPointerUp:ge,onPointerLeave:ge,onPointerCancel:ge,children:L.title}),r.jsx("span",{style:ae.whenSub,children:o0(L)})]}),A?r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{position:"relative",flexShrink:0},children:[r.jsx("button",{onClick:et=>x(et,L.id),style:ae.rowAdd,title:"Options",children:r.jsx(Mm,{size:15})}),R===L.id&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:ae.menuBackdrop,onClick:()=>U(null)}),r.jsxs("div",{style:{...ae.goalMenu,...M},children:[r.jsxs("button",{style:ae.menuItem,onClick:()=>{At(L),U(null)},children:[r.jsx(bt,{size:14})," Edit"]}),Ue&&r.jsxs("button",{style:ae.menuItem,onClick:()=>{d(et=>({...et,[L.id]:!0})),Pe(L.id,L),U(null)},children:[r.jsx(Ze,{size:14})," Add sub-goal"]}),r.jsxs("button",{style:{...ae.menuItem,color:"#C2536B"},onClick:()=>{Oe(L.id,L.title),U(null)},children:[r.jsx(Be,{size:14})," Delete"]})]})]})]}),r.jsx("button",{onClick:()=>we(L),style:{...ae.rowAdd,color:Le(L)?((Tt=cr[L.pillar])==null?void 0:Tt.dot)||kt.dot:"var(--text-3)"},title:Le(L)?"Showing on timeline":"Hidden from timeline",children:Le(L)?r.jsx(hl,{size:14}):r.jsx(Td,{size:14})})]}):r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>we(L),style:{...ae.rowAdd,color:Le(L)?((tr=cr[L.pillar])==null?void 0:tr.dot)||kt.dot:"var(--text-3)"},title:Le(L)?"Showing on timeline — click to hide":"Hidden from timeline — click to show",children:Le(L)?r.jsx(hl,{size:13}):r.jsx(Td,{size:13})}),r.jsx("button",{onClick:()=>At(L),style:ae.rowAdd,title:"Edit",children:r.jsx(bt,{size:12})}),Ue&&r.jsx("button",{onClick:()=>{d(et=>({...et,[L.id]:!0})),Pe(L.id,L)},style:ae.rowAdd,title:"Add sub-goal",children:r.jsx(Ze,{size:13})}),r.jsx("button",{onClick:()=>Oe(L.id,L.title),style:{...ae.rowAdd,color:"var(--text-3)"},title:"Delete",children:r.jsx(Be,{size:13})})]})]}),Re&&Ie.map(et=>r.jsx(Xi,{goal:et,depth:Z+1},et.id)),Re&&a===L.id&&r.jsx(Ki,{parentId:L.id,parentGoal:L,depth:Z+1})]})},yt=e.filter(L=>Le(L)&&L.start_date&&L.end_date),Po=Jy.map(L=>({...L,items:yt.filter(Z=>L.horizons.includes(Z.horizon)).sort((Z,Ie)=>Z.pillar.localeCompare(Ie.pillar)||Z.start_date.localeCompare(Ie.start_date)||zu[Z.horizon]-zu[Ie.horizon]||Z.end_date.localeCompare(Ie.end_date))})).filter(L=>L.items.length>0),lt=(()=>{if(!yt.length)return null;let L=yt[0].start_date,Z=yt[0].end_date;return yt.forEach(Ie=>{Ie.start_date<L&&(L=Ie.start_date),Ie.end_date>Z&&(Z=Ie.end_date)}),{start:oo(L),end:oo(Z)}})(),N=(()=>{if(!lt)return[];const L=[];for(let Z=lt.start.getTime();Z<=lt.end.getTime();Z+=li)L.push(new Date(Z));return L})(),xe=N.length,Ot=(()=>{const L=[];return N.forEach(Z=>{const Ie=`${Z.getFullYear()}-${Z.getMonth()}`,Re=L[L.length-1];Re&&Re.key===Ie?Re.days++:L.push({key:Ie,label:`${Rr[Z.getMonth()]} '${String(Z.getFullYear()).slice(2)}`,days:1})}),L})(),Yt=new Date;Yt.setHours(0,0,0,0);const ar=lt?Math.round((Yt-lt.start)/li):-1,Tr=ar>=0&&ar<xe,No=L=>Math.round((oo(L.end_date)-oo(L.start_date))/li)+1,Er=I==="month",eo=lt?lt.start.getFullYear():0,_r=lt?lt.start.getMonth():0,qi=(()=>{if(!lt)return[];const L=[];let Z=eo,Ie=_r;const Re=lt.end.getFullYear(),Ue=lt.end.getMonth();for(;Z<Re||Z===Re&&Ie<=Ue;)L.push({y:Z,m:Ie}),Ie++,Ie>11&&(Ie=0,Z++);return L})(),Oo=qi.length||1,Gl=(L,Z)=>{const Ie=oo(L),Re=(Ie.getFullYear()-eo)*12+Ie.getMonth()-_r,Ue=new Date(Ie.getFullYear(),Ie.getMonth()+1,0).getDate();return Re+(Ie.getDate()-(Z?0:1))/Ue},Ul=(L,Z)=>Gl(L,Z)/Oo*100,nh=`${Yt.getFullYear()}-${String(Yt.getMonth()+1).padStart(2,"0")}-${String(Yt.getDate()).padStart(2,"0")}`,oh=lt?Ul(nh,!1):0,ng=(ie?vi:0)+ar*Et,ih=lt?`${lt.start.getTime()}-${lt.end.getTime()}`:"";return c.useEffect(()=>{if(Er||!Tr)return;const L=pe.current;L&&(L.scrollLeft=Math.max(0,ng-L.clientWidth/2+Et/2))},[ih,ar,ie,Tr,Er]),r.jsxs("div",{style:ae.page,children:[r.jsxs("div",{style:ae.head,children:[r.jsx("div",{style:ae.eyebrow,children:"Anvil · Goals"}),r.jsx("h1",{style:ae.h1,children:It?"All Goals":`${n} Goals`})]}),r.jsxs("div",{style:ae.pillarPicker,children:[r.jsx("button",{onClick:()=>{o("All"),g(null),j(null)},style:{...ae.pillarChip,...It?{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:"All Goals"}),Jo.map(L=>{const Z=L===n;return r.jsxs("button",{onClick:()=>{o(L),g(null),j(null)},style:{...ae.pillarChip,...Z?{background:cr[L].dot,color:"#fff",borderColor:cr[L].dot}:{}},children:[r.jsx("span",{style:{...ae.dot,background:Z?"#fff":cr[L].dot}}),L]},L)})]}),r.jsxs("div",{style:ae.list,children:[jt.map(L=>r.jsx(Xi,{goal:L,depth:0},L.id)),jt.length===0&&r.jsxs("div",{style:ae.ganttEmpty,children:["No goals yet",It?"":` for ${n}`,"."]}),a==="ROOT"&&r.jsx(Ki,{parentId:"ROOT",parentGoal:null,depth:0}),a!=="ROOT"&&r.jsxs("button",{onClick:()=>Pe("ROOT",null),style:ae.rootAdd,children:[r.jsx(Ze,{size:14})," Add new goal"]})]}),r.jsxs("div",{style:ae.ganttWrap,children:[r.jsxs("div",{style:ae.ganttTop,children:[r.jsxs("div",{style:ae.ganttTitle,children:[Er?"Monthly":"Daily"," Timeline",lt?` · ${Su(lt.start)} – ${Su(lt.end)}`:""]}),r.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[r.jsxs("div",{style:ae.zoomToggle,children:[r.jsx("button",{onClick:()=>J("day"),style:{...ae.zoomBtn,...Er?{}:ae.zoomBtnOn},children:"Day"}),r.jsx("button",{onClick:()=>J("month"),style:{...ae.zoomBtn,...Er?ae.zoomBtnOn:{}},children:"Month"})]}),r.jsxs("button",{onClick:()=>B(L=>!L),style:ae.labelToggle,children:[ie?r.jsx(yy,{size:14}):r.jsx(vy,{size:14}),ie?"Hide names":"Show names"]})]})]}),lt?Er?r.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[r.jsxs("div",{style:ae.gBandRow,children:[ie&&r.jsx("div",{style:{...ae.gLabelHead,zIndex:4},children:"Goal"}),r.jsx("div",{style:{flex:1,display:"grid",gridTemplateColumns:`repeat(${Oo}, 1fr)`,minWidth:0},children:qi.map((L,Z)=>r.jsxs("div",{style:ae.gMonthFluid,children:[Rr[L.m],L.m===0||Z===0?` '${String(L.y).slice(2)}`:""]},Z))})]}),Po.map(L=>r.jsxs("div",{children:[r.jsxs("div",{style:ae.gGroupRow,children:[ie?r.jsxs("div",{style:ae.gGroupLabel,children:[L.label,r.jsx("span",{style:ae.gGroupCount,children:L.items.length})]}):r.jsxs("div",{style:ae.gGroupChip,children:[L.label," · ",L.items.length]}),r.jsx("div",{style:{flex:1}})]}),L.items.map(Z=>{var tr;const Ie=((tr=cr[Z.pillar])==null?void 0:tr.dot)||"#9A968C",Re=(be==null?void 0:be.id)===Z.id,Ue=Re?be.dx:0,He=Ul(Z.start_date,!1),Ve=Math.max(2,Ul(Z.end_date,!0)-He),nt=No(Z),ve=Ve>=14,Tt=`${Z.title} · ${Z.start_date} → ${Z.end_date} · ${nt} day${nt>1?"s":""}`;return r.jsxs("div",{style:ae.gRow,children:[ie&&r.jsxs("div",{style:{...ae.gLabel,paddingLeft:12},children:[r.jsx("span",{style:{...ae.ganttRowDot,background:Ie}}),r.jsx("span",{style:{...ae.gHzTag,color:Ie,borderColor:Ie},children:Cu[Z.horizon]}),r.jsx("span",{style:ae.gLabelText,title:Z.title,children:Z.title}),r.jsxs("span",{style:ae.gDurChip,children:[nt,"d"]})]}),r.jsxs("div",{style:{position:"relative",flex:1,minHeight:36,minWidth:0,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent calc(100% / ${Oo}))`},children:[Tr&&r.jsx("div",{style:{...ae.gTodayLine,left:`${oh}%`}}),r.jsxs("div",{onPointerDown:et=>{et.preventDefault(),O.current=et.clientX;const Fn=et.currentTarget.parentNode.offsetWidth;se({id:Z.id,startX:et.clientX,dx:0,g:Z,pxPerDay:Fn/xe})},style:{...ae.gBar,left:`${He}%`,width:`${Ve}%`,background:Ie,cursor:Re?"grabbing":"grab",transform:Ue?`translateX(${Ue}px)`:"none",zIndex:Re?6:1,boxShadow:Re?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:Tt,children:[r.jsx(xl,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff"}}),ve&&r.jsx("span",{style:ae.gBarLabel,children:Z.title})]}),!ve&&r.jsx("span",{style:{...ae.gBarOutside,left:`calc(${He+Ve}% + 6px)`},title:Tt,children:Z.title})]})]},Z.id)})]},L.key))]}):r.jsx("div",{style:ae.ganttScroll,ref:pe,children:r.jsxs("div",{style:{minWidth:(ie?vi:0)+xe*Et,position:"relative"},children:[Tr&&r.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:ng,width:Et,background:"color-mix(in srgb, var(--accent) 14%, transparent)",pointerEvents:"none",zIndex:3}}),r.jsxs("div",{style:ae.gBandRow,children:[ie&&r.jsx("div",{style:{...ae.gLabelHead,zIndex:4},children:"Goal"}),r.jsx("div",{style:{display:"flex"},children:Ot.map((L,Z)=>r.jsx("div",{style:{...ae.gMonthCell,width:L.days*Et},children:L.label},Z))})]}),r.jsxs("div",{style:ae.gBandRow,children:[ie&&r.jsx("div",{style:{...ae.gLabelHead,zIndex:4,fontSize:10,color:"var(--text-3)",fontWeight:600},children:"days →"}),r.jsx("div",{style:{display:"flex"},children:N.map((L,Z)=>{const Ie=L.getDay()===0||L.getDay()===6,Re=Z===ar;return r.jsx("div",{style:{...ae.gDayCell,...Ie?ae.gWeekend:{},...Re?ae.gTodayCell:{}},children:L.getDate()},Z)})})]}),Po.map(L=>r.jsxs("div",{children:[r.jsxs("div",{style:ae.gGroupRow,children:[ie?r.jsxs("div",{style:ae.gGroupLabel,children:[L.label,r.jsx("span",{style:ae.gGroupCount,children:L.items.length})]}):r.jsxs("div",{style:ae.gGroupChip,children:[L.label," · ",L.items.length]}),r.jsx("div",{style:{width:xe*Et,flexShrink:0}})]}),L.items.map(Z=>{var Go;const Ie=((Go=cr[Z.pillar])==null?void 0:Go.dot)||"#9A968C",Re=Math.round((oo(Z.start_date)-lt.start)/li),Ue=No(Z),He=(be==null?void 0:be.id)===Z.id,Ve=He?be.dx:0,nt=n0(Z),ve=(Y==null?void 0:Y.id)===Z.id,Tt=nt?Wd(Z):Ue,tr=nt?Tu(Z):Ue,et=ve?Math.max(Tt,Math.min(tr,Ue+Math.round(Y.dx/Et))):Ue,Fn=et*Et-4,Ho=Fn>=54,Fe=`${Z.title} · ${Z.start_date} → ${Z.end_date} · ${et} day${et>1?"s":""}${nt?` (max ${tr})`:""}`;return r.jsxs("div",{style:ae.gRow,children:[ie&&r.jsxs("div",{style:{...ae.gLabel,paddingLeft:12},children:[r.jsx("span",{style:{...ae.ganttRowDot,background:Ie}}),r.jsx("span",{style:{...ae.gHzTag,color:Ie,borderColor:Ie},children:Cu[Z.horizon]}),r.jsx("span",{style:ae.gLabelText,title:Z.title,children:Z.title}),r.jsxs("span",{style:ae.gDurChip,children:[et,"d"]})]}),r.jsxs("div",{style:{...ae.gTrack,width:xe*Et},children:[Tr&&r.jsx("div",{style:{...ae.gTodayLine,left:ar*Et}}),r.jsxs("div",{onPointerDown:Mn=>{Mn.preventDefault(),O.current=Mn.clientX,se({id:Z.id,startX:Mn.clientX,dx:0,g:Z,pxPerDay:Et})},style:{...ae.gBar,left:Re*Et+2,width:Fn,background:Ie,cursor:He?"grabbing":"grab",transform:Ve?`translateX(${Ve}px)`:"none",zIndex:He||ve?6:1,boxShadow:He||ve?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:Fe,children:[nt&&et>Tt&&r.jsx("div",{style:{position:"absolute",left:Tt*Et,top:0,bottom:0,right:0,background:"#C2536B",borderRadius:"0 5px 5px 0"}}),r.jsx(xl,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff",position:"relative",zIndex:1}}),Ho&&r.jsx("span",{style:{...ae.gBarLabel,position:"relative",zIndex:1},children:Z.title}),nt&&r.jsx("div",{onPointerDown:Mn=>{Mn.preventDefault(),Mn.stopPropagation(),oe({id:Z.id,startX:Mn.clientX,dx:0,g:Z})},style:ae.resizeHandle,title:`Drag to extend up to ${tr} days`,children:r.jsx("div",{style:ae.resizeGrip})})]}),!Ho&&r.jsx("span",{style:{...ae.gBarOutside,left:Re*Et+Fn+8+Ve},title:Fe,children:Z.title})]})]},Z.id)})]},L.key))]})}):r.jsx("div",{style:ae.ganttEmpty,children:"No goals on the timeline. Click the eye icon on a goal to show it here."}),lt&&r.jsxs("div",{style:ae.gLegend,children:[r.jsxs("span",{style:ae.gLegendItem,children:[r.jsx("span",{style:{...ae.gLegendBar}})," bar length = number of days"]}),r.jsxs("span",{style:ae.gLegendItem,children:[r.jsx("span",{style:ae.gLegendToday})," today"]})]})]}),$&&r.jsxs("div",{style:ae.warnToast,children:[r.jsx(Ry,{size:15,style:{flexShrink:0}}),r.jsx("span",{children:$})]}),r.jsx(er,{toasts:_e,onUndo:Xe,onDismiss:Ke})]})}const ae={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},pillarPicker:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},pillarChip:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},list:{background:"var(--surface)",borderRadius:12,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"hidden"},row:{display:"flex",alignItems:"center",gap:9,padding:"9px 10px",borderRadius:8,flexWrap:"nowrap"},caret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},horizonTag:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",border:"1px solid",borderRadius:5,padding:"2px 6px",flexShrink:0},nameCol:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:1},title:{fontSize:14,fontWeight:500,lineHeight:1.3,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",userSelect:"none",WebkitUserSelect:"none",cursor:"default"},titleFull:{whiteSpace:"normal",overflow:"visible",textOverflow:"clip",wordBreak:"break-word"},whenSub:{fontSize:11,fontStyle:"italic",color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},rowAdd:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,flexShrink:0},menuBackdrop:{position:"fixed",inset:0,zIndex:40},goalMenu:{position:"fixed",zIndex:41,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 6px 24px rgba(0,0,0,0.18)",padding:4,minWidth:180,display:"flex",flexDirection:"column"},menuItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:7,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text)",textAlign:"left"},rootAdd:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"var(--text-2)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"9px 12px",cursor:"pointer",fontWeight:600,fontFamily:"inherit",marginTop:6,width:"100%",justifyContent:"center"},addBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 0 6px 28px",flexWrap:"wrap"},editBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 10px",flexWrap:"wrap",background:"var(--bg)",borderRadius:8,margin:"4px 0"},input:{border:"1px solid var(--border)",borderRadius:7,padding:"8px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",flex:1,minWidth:120},monthSelect:{border:"1px solid var(--border)",borderRadius:7,padding:"8px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},inheritTag:{fontSize:11.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"6px 9px",borderRadius:7,flexShrink:0},toTag:{fontSize:11.5,fontWeight:600,color:"var(--text-3)",flexShrink:0},warnToast:{position:"fixed",top:18,left:"50%",transform:"translateX(-50%)",zIndex:300,display:"flex",alignItems:"center",gap:8,maxWidth:"90vw",background:"#C2536B",color:"#fff",padding:"10px 16px",borderRadius:10,fontSize:13,fontWeight:600,boxShadow:"0 6px 24px rgba(0,0,0,0.25)"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},ganttWrap:{background:"var(--surface)",borderRadius:12,padding:"16px 14px",marginTop:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},ganttTop:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10,marginBottom:14},ganttTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",fontFamily:"'Fraunces',Georgia,serif"},labelToggle:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 10px",borderRadius:8,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},zoomToggle:{display:"inline-flex",border:"1px solid var(--border)",borderRadius:8,overflow:"hidden"},zoomBtn:{border:"none",background:"var(--surface)",color:"var(--text-2)",padding:"5px 12px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},zoomBtnOn:{background:"var(--accent-strong)",color:"#fff"},gMonthFluid:{borderLeft:"1px solid var(--border)",fontSize:10,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gGroupChip:{position:"sticky",left:0,zIndex:3,background:"var(--surface-2)",padding:"5px 10px",fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",whiteSpace:"nowrap",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center"},ganttEmpty:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},ganttScroll:{overflowX:"auto"},ganttRowDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},gBandRow:{display:"flex",alignItems:"stretch",borderBottom:"1px solid var(--border)"},gLabelHead:{width:vi,flexShrink:0,position:"sticky",left:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",padding:"6px 10px",fontSize:12,fontWeight:700,color:"var(--text-2)"},gMonthCell:{flexShrink:0,borderLeft:"1px solid var(--border)",fontSize:10.5,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gDayCell:{width:Et,flexShrink:0,textAlign:"center",fontSize:10,color:"var(--text-3)",padding:"4px 0",borderLeft:"1px solid var(--border)",fontWeight:600},gWeekend:{background:"var(--surface-2)"},gTodayCell:{background:"var(--hover)",color:"var(--accent)",fontWeight:800},gGroupRow:{display:"flex",alignItems:"stretch",background:"var(--surface-2)",borderBottom:"1px solid var(--border)",borderTop:"1px solid var(--border)"},gGroupLabel:{width:vi,flexShrink:0,position:"sticky",left:0,background:"var(--surface-2)",zIndex:3,padding:"6px 12px",fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",gap:7},gGroupCount:{fontSize:10,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},gHzTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.04em",border:"1px solid",borderRadius:4,padding:"1px 4px",flexShrink:0},gRow:{display:"flex",alignItems:"stretch",minHeight:36,borderBottom:"1px solid var(--border)"},gLabel:{width:vi,flexShrink:0,display:"flex",alignItems:"center",gap:7,position:"sticky",left:0,background:"var(--surface)",zIndex:2,borderRight:"1px solid var(--border)",paddingRight:8,overflow:"hidden"},gLabelText:{flex:1,minWidth:0,fontSize:12,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},gDurChip:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",borderRadius:10,padding:"1px 6px",flexShrink:0,marginRight:6},gTrack:{position:"relative",flexShrink:0,minHeight:36,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent ${Et}px)`},gBar:{position:"absolute",top:9,height:18,borderRadius:5,display:"flex",alignItems:"center",padding:"0 7px",boxShadow:"0 1px 2px rgba(0,0,0,0.15)",overflow:"hidden",zIndex:1},gBarLabel:{fontSize:11,fontWeight:600,color:"#fff",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},gBarOutside:{position:"absolute",top:9,height:18,display:"flex",alignItems:"center",fontSize:11,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",pointerEvents:"none",zIndex:1},resizeHandle:{position:"absolute",right:0,top:0,bottom:0,width:12,cursor:"ew-resize",display:"grid",placeItems:"center",touchAction:"none",zIndex:2},resizeGrip:{width:2,height:11,background:"rgba(255,255,255,0.9)",borderRadius:1,boxShadow:"3px 0 0 rgba(255,255,255,0.6)"},gTodayLine:{position:"absolute",top:0,bottom:0,width:2,background:"#C2536B",zIndex:0,opacity:.6},gLegend:{display:"flex",gap:16,marginTop:12,fontSize:11,color:"var(--text-3)",flexWrap:"wrap"},gLegendItem:{display:"flex",alignItems:"center",gap:6,fontWeight:600},gLegendBar:{width:18,height:8,borderRadius:3,background:"var(--accent)",display:"inline-block"},gLegendToday:{width:2,height:12,background:"#C2536B",display:"inline-block"}},Tn={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.12)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.12)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.12)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.12)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.12)"}},Pi=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],s0=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ni=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,tg=()=>Ni(new Date),l0=(e=0)=>{const t=new Date,n=t.getDay(),o=n===0?-6:1-n,i=new Date(t);return i.setDate(t.getDate()+o+e*7),Array.from({length:7},(s,l)=>{const d=new Date(i);return d.setDate(i.getDate()+l),Ni(d)})},a0=(e=0)=>{const t=new Date,n=new Date(t.getFullYear(),t.getMonth()+e,1),o=n.getFullYear(),i=n.getMonth(),s=new Date(o,i+1,0).getDate(),l=n.getDay(),d=l===0?6:l-1,a=Array.from({length:s},(m,y)=>`${o}-${String(i+1).padStart(2,"0")}-${String(y+1).padStart(2,"0")}`),g=n.toLocaleDateString("en-US",{month:"long",year:"numeric"});return{dates:a,startOffset:d,label:g,year:o,month:i}},Eu=e=>new Date(e+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"}),d0=(e,t)=>{var i;const n=Number(e==null?void 0:e.min_interval_min)||0;if(n<=0||t!==tg())return 0;const o=(i=e.log_count_times)==null?void 0:i[t];return o?Math.max(0,new Date(o).getTime()+n*6e4-Date.now()):0},Hm=e=>{const t=Math.ceil(e/1e3);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},mn=tg(),c0=new Date().getFullYear();function g0(){var de,Te;const[e,t]=c.useState([]),[n,o]=c.useState("ALL"),[i,s]=c.useState(!1),[l,d]=c.useState(!1),[a,g]=c.useState(!1),[m,y]=c.useState(null),[f,E]=c.useState(null),[C,w]=c.useState(null),[D,b]=c.useState({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week",days:[],min_interval_min:0}),[p,h]=c.useState(!1),[T,v]=c.useState([]),S=c.useCallback(()=>_.getHabits().then(t).catch(console.error),[]);c.useEffect(()=>{S()},[S]);const W=c.useCallback(Q=>{Q&&Q.id!=null&&t(ne=>ne.map(R=>R.id===Q.id?Q:R))},[]);c.useEffect(()=>{_.getSetting("habit_order").then(Q=>{Array.isArray(Q==null?void 0:Q.value)&&v(Q.value)}).catch(()=>{})},[]);const F=c.useMemo(()=>T.length?[...e].sort((Q,ne)=>{const R=T.indexOf(Q.id),U=T.indexOf(ne.id);return R===-1&&U===-1?0:R===-1?1:U===-1?-1:R-U}):e,[e,T]),j=c.useMemo(()=>F.filter(Q=>Q.active!==!1),[F]);c.useEffect(()=>{n!=="ALL"&&e.some(Q=>Q.id===n&&Q.active===!1)&&o("ALL")},[e,n]);const A=async Q=>{v(Q),await _.setSetting("habit_order",Q),h(!1)},ie=async(Q,ne)=>{W(await _.updateHabit(Q,{active:ne}))};c.useEffect(()=>{const Q=()=>{const ne=window.innerWidth<720;s(ne),ne||d(!1)};return Q(),window.addEventListener("resize",Q),()=>window.removeEventListener("resize",Q)},[]);const{deleteItem:B,toasts:I,handleUndo:J,handleDismiss:be}=Jt(_.deleteHabit,_.restoreHabit,S),se=Q=>{o(Q),i&&d(!1)},ye=(Q,ne)=>{(Q.type==="minimum"||Q.type==="maximum")&&Q.period==="day"?d0(Q,ne)>0?w(R=>R&&R.habitId===Q.id&&R.date===ne?null:{habitId:Q.id,date:ne}):E({habit:Q,date:ne}):G(Q.id,ne)},G=async(Q,ne)=>{W(await _.toggleHabitLog(Q,ne))},Y=async(Q,ne,R,U)=>{try{W(await _.setHabitLogCount(Q,ne,R,U)),E(null)}catch(M){alert(M.message||"Could not save.")}},oe=async(Q,ne)=>{W(await _.clearHabitLog(Q,ne)),E(null)},K=Q=>{var ne;return!C||C.habitId!==Q.id?null:r.jsx(b0,{habit:Q,date:C.date,onSave:async R=>{var U;try{await _.setHabitLogCount(Q.id,C.date,R,((U=Q.log_notes)==null?void 0:U[C.date])??"").then(W)}catch(M){alert(M.message||"Could not save.")}},onOpen:()=>{w(null),E({habit:Q,date:C.date})},onClose:()=>w(null)},C.date+":"+(((ne=Q.log_count_times)==null?void 0:ne[C.date])||""))},pe=async()=>{if(!D.name.trim())return;const Q=D.type==="minimum"||D.type==="maximum",ne=D.type==="weekly";if(ne&&D.days.length===0)return;const R={name:D.name.trim(),pillar:D.pillar,target_per_week:Number(D.target_per_week)||7,type:D.type,target_count:Q?Number(D.target_count)||1:null,period:Q?D.period:null,days:ne?D.days:null,min_interval_min:Q&&D.period==="day"&&Number(D.min_interval_min)||0};await _.createHabit(R),b({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week",days:[],min_interval_min:0}),g(!1),S()},O=async(Q,ne)=>{n===Q&&o("ALL"),B(Q,ne)},$=e.find(Q=>Q.id===n),P=Q=>new Set(Q.logs||[]),le={...H.sidebar,...i?H.sidebarOverlay:{},...i&&!l?H.sidebarHidden:{}};return r.jsxs("div",{style:H.shell,children:[i&&l&&r.jsx("div",{style:H.backdrop,onClick:()=>d(!1)}),r.jsxs("aside",{style:le,children:[r.jsxs("div",{style:H.sideTop,children:[r.jsx("div",{style:H.brand,children:"Anvil · Habits"}),i&&r.jsx("button",{onClick:()=>d(!1),style:H.closeBtn,children:r.jsx(Be,{size:18})})]}),r.jsxs("div",{style:{...H.sideItem,...n==="ALL"?H.sideItemOn:{},cursor:"default",padding:"2px 6px 2px 10px"},children:[r.jsxs("button",{onClick:()=>se("ALL"),style:{display:"flex",alignItems:"center",gap:9,flex:1,border:"none",background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:n==="ALL"?600:500,color:"var(--text-2)",padding:"7px 0"},children:[r.jsx(Hc,{size:15}),r.jsx("span",{style:H.sideLabel,children:"All Habits"}),r.jsx("span",{style:H.sideCount,children:e.length})]}),r.jsx("button",{onClick:Q=>{Q.stopPropagation(),h(!0)},style:H.tinyBtn,title:"Reorder habits",children:r.jsx(bt,{size:12})})]}),r.jsx("div",{style:H.sideDivider}),j.map(Q=>{var U;const ne=n===Q.id,R=((U=Tn[Q.pillar])==null?void 0:U.dot)||"#9A968C";return r.jsxs("button",{onClick:()=>se(Q.id),style:{...H.sideItem,...ne?H.sideItemOn:{}},children:[r.jsx("span",{style:{...H.sideDot,background:R}}),r.jsx("span",{style:H.sideLabel,children:Q.name}),r.jsxs("span",{style:H.sideStreak,children:[r.jsx(Rn,{size:11})," ",Q.streak]})]},Q.id)}),a?r.jsx(u0,{habit:D,onChange:b,onSave:pe,onCancel:()=>g(!1)}):r.jsxs("button",{onClick:()=>g(!0),style:H.sideNewBtn,children:[r.jsx(Ze,{size:13})," New habit"]})]}),r.jsxs("main",{style:H.main,children:[i&&r.jsxs("button",{onClick:()=>d(!0),style:H.hamburger,children:[r.jsx(Gc,{size:18}),r.jsx("span",{style:H.hamburgerLabel,children:n==="ALL"?"All Habits":$==null?void 0:$.name})]}),n==="ALL"?r.jsx(h0,{habits:j,dayAction:ye,logSet:P,onDelete:O,onEdit:Q=>y(Q),renderInline:K}):r.jsx(f0,{habit:$,dayAction:ye,logSet:P,onDelete:()=>O($.id,$.name),onEdit:()=>y($),onToggleActive:ie,renderInline:K,setNote:(Q,ne)=>_.setHabitLogNote($.id,Q,ne).then(W)}),n==="ALL"&&r.jsx(v0,{year:c0})]}),p&&r.jsx(y0,{habits:F,onSave:A,onToggleActive:ie,onClose:()=>h(!1)}),m&&r.jsx(p0,{habit:m,onSave:async Q=>{await _.updateHabit(m.id,Q),y(null),S()},onClose:()=>y(null)}),f&&r.jsx(m0,{habit:f.habit,date:f.date,initialCount:((de=f.habit.log_counts)==null?void 0:de[f.date])??0,initialNote:((Te=f.habit.log_notes)==null?void 0:Te[f.date])??"",onSave:(Q,ne)=>Y(f.habit.id,f.date,Q,ne),onClear:()=>oe(f.habit.id,f.date),onClose:()=>E(null)}),r.jsx(er,{toasts:I,onUndo:J,onDismiss:be})]})}function Gm({days:e,onToggle:t}){return r.jsx("div",{style:H.dayPick,children:Pi.map((n,o)=>r.jsx("button",{type:"button",onClick:()=>t(o),style:{...H.dayChip,...e.includes(o)?H.dayChipOn:{}},children:n},n))})}function u0({habit:e,onChange:t,onSave:n,onCancel:o}){const i=e.type==="minimum"||e.type==="maximum",s=e.type==="weekly",l=d=>t(a=>({...a,days:a.days.includes(d)?a.days.filter(g=>g!==d):[...a.days,d].sort((g,m)=>g-m)}));return r.jsxs("div",{style:H.addBox,children:[r.jsx("input",{autoFocus:!0,placeholder:"Habit name",value:e.name,onChange:d=>t(a=>({...a,name:d.target.value})),onKeyDown:d=>d.key==="Enter"&&n(),style:H.sideInput}),r.jsx("select",{value:e.pillar,onChange:d=>t(a=>({...a,pillar:d.target.value})),style:H.sideInput,children:Object.keys(Tn).map(d=>r.jsx("option",{children:d},d))}),r.jsxs("select",{value:e.type,onChange:d=>t(a=>({...a,type:d.target.value})),style:H.sideInput,children:[r.jsx("option",{value:"regular",children:"Regular (yes/no)"}),r.jsx("option",{value:"weekly",children:"Weekly (specific days)"}),r.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),r.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),s&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:H.pickHint,children:"Do this on…"}),r.jsx(Gm,{days:e.days,onToggle:l})]}),i&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{display:"flex",gap:6},children:[r.jsx("input",{type:"number",min:1,placeholder:"N",value:e.target_count||"",onChange:d=>t(a=>({...a,target_count:d.target.value})),style:{...H.sideInput,width:60}}),r.jsx("select",{value:e.period,onChange:d=>t(a=>({...a,period:d.target.value})),style:H.sideInput,children:["day","week","month","year"].map(d=>r.jsx("option",{children:d},d))})]}),e.period==="day"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:H.pickHint,children:"Min gap between entries (minutes)"}),r.jsx("input",{type:"number",min:0,placeholder:"0",value:e.min_interval_min??0,onChange:d=>t(a=>({...a,min_interval_min:d.target.value})),style:H.sideInput})]})]}),r.jsxs("div",{style:{display:"flex",gap:6},children:[r.jsx("button",{onClick:n,style:H.sideAddBtn,children:r.jsx(Ne,{size:13})}),r.jsx("button",{onClick:o,style:H.sideCancelBtn,children:r.jsx(Be,{size:13})})]})]})}function p0({habit:e,onSave:t,onClose:n}){const[o,i]=c.useState(e.name),[s,l]=c.useState(e.type||"regular"),[d,a]=c.useState(e.target_count||""),[g,m]=c.useState(e.period||"week"),[y,f]=c.useState(e.reminder_time||""),[E,C]=c.useState(e.days||[]),[w,D]=c.useState(e.min_interval_min??0),b=s==="minimum"||s==="maximum",p=s==="weekly",h=v=>C(S=>S.includes(v)?S.filter(W=>W!==v):[...S,v].sort((W,F)=>W-F)),T=()=>{p&&E.length===0||t({name:o.trim(),type:s,target_count:b?Number(d):null,period:b?g:null,days:p?E:[],reminder_time:y||null,min_interval_min:b&&g==="day"&&Number(w)||0})};return r.jsx("div",{style:H.modalOverlay,onClick:n,children:r.jsxs("div",{style:H.modal,onClick:v=>v.stopPropagation(),children:[r.jsxs("div",{style:H.modalHead,children:["Edit Habit",r.jsx("button",{onClick:n,style:H.closeBtn,children:r.jsx(Be,{size:16})})]}),r.jsx("label",{style:H.modalLabel,children:"Name"}),r.jsx("input",{value:o,onChange:v=>i(v.target.value),style:H.sideInput}),r.jsx("label",{style:H.modalLabel,children:"Type"}),r.jsxs("select",{value:s,onChange:v=>l(v.target.value),style:H.sideInput,children:[r.jsx("option",{value:"regular",children:"Regular (yes/no)"}),r.jsx("option",{value:"weekly",children:"Weekly (specific days)"}),r.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),r.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),p&&r.jsxs(r.Fragment,{children:[r.jsx("label",{style:H.modalLabel,children:"Days"}),r.jsx(Gm,{days:E,onToggle:h})]}),b&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[r.jsx("input",{type:"number",min:1,value:d,onChange:v=>a(v.target.value),style:{...H.sideInput,width:70}}),r.jsx("select",{value:g,onChange:v=>m(v.target.value),style:H.sideInput,children:["day","week","month","year"].map(v=>r.jsx("option",{children:v},v))})]}),g==="day"&&r.jsxs(r.Fragment,{children:[r.jsx("label",{style:H.modalLabel,children:"Min gap between entries (minutes)"}),r.jsx("input",{type:"number",min:0,value:w,onChange:v=>D(v.target.value),style:H.sideInput})]})]}),r.jsx("label",{style:H.modalLabel,children:"Reminder time"}),r.jsx("input",{type:"time",value:y,onChange:v=>f(v.target.value),style:H.sideInput}),r.jsx("button",{onClick:T,style:{...H.sideAddBtn,width:"100%",marginTop:10,height:36},children:"Save"})]})})}function b0({habit:e,date:t,onSave:n,onOpen:o,onClose:i}){var T,v,S;const[s,l]=c.useState(Date.now()),d=((T=e.log_counts)==null?void 0:T[t])??0,[a,g]=c.useState(d),m=Number(e.min_interval_min)||0,y=e.target_count,f=(v=e.log_count_times)==null?void 0:v[t],E=f?new Date(f).getTime()+m*6e4:0,C=Math.max(0,E-s);c.useEffect(()=>{const W=window.setInterval(()=>l(Date.now()),1e3);return()=>window.clearInterval(W)},[]);const w=a>=d+1||C>0,D=a<=0,b=a!==d,p=((S=Tn[e.pillar])==null?void 0:S.dot)||"#9A968C",h=e.type==="minimum"?a>=y:a>0&&a<=y;return r.jsxs("div",{style:H.inlineCounter,children:[r.jsxs("span",{style:{...H.inlineCount,color:h?"#4C9A6B":p},children:[a,r.jsxs("span",{style:H.inlineTarget,children:["/",y]})]}),r.jsx("button",{onClick:()=>!D&&g(W=>Math.max(0,W-1)),disabled:D,style:{...H.inlinePlus,...D?{opacity:.45,cursor:"not-allowed"}:{}},children:"−"}),r.jsx("button",{onClick:()=>!w&&g(W=>W+1),disabled:w,style:{...H.inlinePlus,...w?{opacity:.45,cursor:"not-allowed"}:{background:p,borderColor:p,color:"#fff"}},title:C>0?"Wait for the interval":a>=d+1?"Press Set to confirm":"Stage an entry",children:"+"}),r.jsx("button",{onClick:()=>n(a),disabled:!b,style:{...H.inlineSet,...b?{background:p,borderColor:p,color:"#fff"}:{opacity:.5,cursor:"not-allowed"}},children:"Set"}),C>0?r.jsxs("span",{style:H.inlineWait,children:["Wait ",Hm(C)]}):r.jsx("span",{style:H.inlineReady,children:b?"Press Set to confirm":"Tap + to add"}),r.jsx("button",{onClick:o,style:H.inlineMore,title:"Open details",children:"⋯"}),r.jsx("button",{onClick:i,style:H.inlineMore,title:"Hide",children:r.jsx(Be,{size:13})})]})}function m0({habit:e,date:t,initialCount:n,initialNote:o,onSave:i,onClear:s,onClose:l}){var be;const d=n??0,[a,g]=c.useState(d),[m,y]=c.useState(o??""),[f,E]=c.useState(Date.now()),C=e.target_count,w=e.type==="minimum"?a>=C:a>0&&a<=C,D=e.type==="maximum"&&a>C,b=w?"#4C9A6B":D?"#C2536B":"#C2773B",p=w?"✓ Goal met":D?"Over the limit":"Not met yet",h=Number(e.min_interval_min)||0,T=t===tg(),v=h>0&&T,S=(be=e.log_count_times)==null?void 0:be[t],W=v&&S?new Date(S).getTime()+h*6e4:0,F=Math.max(0,W-f);c.useEffect(()=>{if(!v||F<=0)return;const se=window.setInterval(()=>E(Date.now()),1e3);return()=>window.clearInterval(se)},[v,F]);const j=a-d,A=v&&(a>=d+1||F>0),ie=a<=0,B=()=>{A||g(se=>se+1)},I=()=>{ie||g(se=>Math.max(0,se-1))},J=a!==d||m!==(o??"");return r.jsx("div",{style:H.modalOverlay,onClick:l,children:r.jsxs("div",{style:H.modal,onClick:se=>se.stopPropagation(),children:[r.jsxs("div",{style:H.modalHead,children:[e.name,r.jsx("button",{onClick:l,style:H.closeBtn,children:r.jsx(Be,{size:16})})]}),r.jsxs("div",{style:{fontSize:12,color:"var(--text-3)",marginBottom:2},children:[t," · ",e.type==="minimum"?`at least ${C}`:`no more than ${C}`," / ",e.period,h>0&&r.jsxs(r.Fragment,{children:[" · ",h,"m between entries"]})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:20,margin:"14px 0 6px"},children:[r.jsx("button",{onClick:I,disabled:ie,style:{...H.counterBtn,...ie?{opacity:.45,cursor:"not-allowed"}:{}},children:"−"}),r.jsx("span",{style:{fontSize:38,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:52,textAlign:"center",color:b},children:a}),r.jsx("button",{onClick:B,disabled:A,style:{...H.counterBtn,...A?{opacity:.45,cursor:"not-allowed"}:{}},title:v&&F>0?"Wait for the interval before the next entry":v&&a>=d+1?"Press Set to confirm this entry":void 0,children:"+"})]}),v&&F>0&&r.jsxs("div",{style:{textAlign:"center",fontSize:12,fontWeight:700,color:"#C2773B",marginBottom:8},children:["Wait ",Hm(F)," before the next entry"]}),v&&F<=0&&r.jsx("div",{style:{textAlign:"center",fontSize:11.5,color:"var(--text-3)",marginBottom:8},children:j>0?"Press Set to confirm this entry":`Tap + to add an entry (each at least ${h}m apart)`}),r.jsx("div",{style:{textAlign:"center",fontSize:12.5,fontWeight:700,color:b,marginBottom:12},children:p}),r.jsx("textarea",{value:m,onChange:se=>y(se.target.value),placeholder:"Add a comment (optional)…",style:{...H.sideInput,minHeight:56,resize:"vertical"}}),r.jsxs("div",{style:{display:"flex",gap:8,marginTop:10},children:[r.jsxs("button",{onClick:s,style:{...H.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[r.jsx(Be,{size:14})," Delete"]}),r.jsxs("button",{onClick:()=>i(a,m),disabled:!J,style:{...H.sideAddBtn,flex:1,justifyContent:"center",height:38,...J?{}:{opacity:.5,cursor:"not-allowed"}},children:[r.jsx(Ne,{size:14})," Set"]})]})]})})}function va({pct:e,label:t,sub:n,color:o}){const s=2*Math.PI*26,l=s*(1-Math.max(0,Math.min(100,e))/100);return r.jsxs("div",{style:H.ringStat,children:[r.jsxs("div",{style:H.ringBox,children:[r.jsxs("svg",{width:"70",height:"70",viewBox:"0 0 70 70",children:[r.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:"var(--border)",strokeWidth:"7"}),r.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:o,strokeWidth:"7",strokeLinecap:"round",strokeDasharray:s,strokeDashoffset:l,transform:"rotate(-90 35 35)",style:{transition:"stroke-dashoffset 0.5s ease"}})]}),r.jsxs("div",{style:{...H.ringPct,color:o},children:[e,"%"]})]}),r.jsxs("div",{children:[r.jsx("div",{style:H.ringLabel,children:t}),r.jsx("div",{style:H.ringSub,children:n})]})]})}function h0({habits:e,dayAction:t,logSet:n,onDelete:o,onEdit:i,renderInline:s}){const[l,d]=c.useState(0),a=l0(l),g=`${Eu(a[0])} – ${Eu(a[6])}${l===0?" · This week":""}`,m=B=>{const I=new Date(B+"T00:00:00"),J=I.getDay(),be=new Date(I);return be.setDate(I.getDate()+(J===0?-6:1-J)),Array.from({length:7},(se,ye)=>{const G=new Date(be);return G.setDate(be.getDate()+ye),Ni(G)})},y=B=>B.logs||[],f=(B,I)=>B.type==="minimum"&&B.period==="week"&&I.filter(J=>n(B).has(J)).length>=(B.target_count||0),E=(B,I)=>B.type==="minimum"&&B.period==="month"&&y(B).filter(J=>J.slice(0,7)===I).length>=(B.target_count||0),C=(B,I)=>B.type==="minimum"&&B.period==="year"&&y(B).filter(J=>J.slice(0,4)===I).length>=(B.target_count||0),w=(B,I)=>{var J;if((B.type==="minimum"||B.type==="maximum")&&B.period==="day"){const be=(J=B.log_counts)==null?void 0:J[I];return be==null?!1:B.type==="minimum"?be>=(B.target_count||0):be>0&&be<=(B.target_count||0)}return n(B).has(I)},D=(B,I)=>B.type!=="minimum"?!1:B.period==="week"?f(B,m(I)):B.period==="month"?E(B,I.slice(0,7)):B.period==="year"?C(B,I.slice(0,4)):!1,b=(B,I)=>w(B,I)||D(B,I),p=e.filter(B=>b(B,mn)).length,h=e.length?Math.round(p/e.length*100):0,T=B=>{if(B.type==="minimum"&&B.period==="month"&&(E(B,a[0].slice(0,7))||E(B,a[6].slice(0,7)))||B.type==="minimum"&&B.period==="year"&&(C(B,a[0].slice(0,4))||C(B,a[6].slice(0,4)))||B.type==="minimum"&&B.period==="week"&&f(B,a))return 1;if((B.type==="minimum"||B.type==="maximum")&&B.period==="day")return Math.min(1,a.filter(se=>w(B,se)).length/7);const I=n(B),J=a.filter(se=>I.has(se)).length,be=B.type==="minimum"&&B.period==="week"?B.target_count||1:B.target_per_week||7;return be>0?Math.min(1,J/be):0},v=e.length?Math.round(e.reduce((B,I)=>B+T(I),0)/e.length*100):0,S=new Date,W=`${S.getFullYear()}-${String(S.getMonth()+1).padStart(2,"0")}`,F=new Date(S.getFullYear(),S.getMonth()+1,0).getDate(),j=F/7,A=B=>{if(B.type==="minimum"&&B.period==="month"&&E(B,W)||B.type==="minimum"&&B.period==="year"&&C(B,W.slice(0,4)))return 1;if((B.type==="minimum"||B.type==="maximum")&&B.period==="day"){let be=0;for(let se=1;se<=F;se++)w(B,`${W}-${String(se).padStart(2,"0")}`)&&be++;return Math.min(1,be/F)}const I=y(B).filter(be=>be.slice(0,7)===W).length;let J;return B.type==="minimum"&&B.period==="week"?J=(B.target_count||1)*j:B.type==="minimum"&&B.period==="month"?J=B.target_count||1:B.type==="minimum"&&B.period==="year"?J=(B.target_count||1)/12:J=(B.target_per_week||7)*j,J>0?Math.min(1,I/J):0},ie=e.length?Math.round(e.reduce((B,I)=>B+A(I),0)/e.length*100):0;return r.jsxs("div",{children:[r.jsxs("div",{style:H.mainHead,children:[r.jsx("div",{style:H.eyebrow,children:"Weekly view"}),r.jsx("h1",{style:H.h1,children:"All Habits"})]}),r.jsxs("div",{style:H.navBar,children:[r.jsx("button",{onClick:()=>d(B=>B-1),style:H.navBtn,children:r.jsx(An,{size:16})}),r.jsx("span",{style:H.navLabel,children:g}),r.jsx("button",{onClick:()=>d(B=>Math.min(0,B+1)),disabled:l>=0,style:{...H.navBtn,...l>=0?H.navBtnDisabled:{}},children:r.jsx(on,{size:16})})]}),r.jsxs("div",{style:H.weekCard,children:[r.jsxs("div",{style:H.weekHeadRow,children:[r.jsx("div",{style:H.weekNameCol}),Pi.map((B,I)=>r.jsxs("div",{style:H.weekDayHead,children:[r.jsx("span",{style:H.weekDayName,children:B}),r.jsx("span",{style:{...H.weekDayNum,...a[I]===mn?H.weekDayToday:{}},children:new Date(a[I]+"T00:00").getDate()})]},B)),r.jsx("div",{style:H.weekStreakCol,children:"Streak"})]}),e.map(B=>{var ne,R;const I=((ne=Tn[B.pillar])==null?void 0:ne.dot)||"#9A968C",J=((R=Tn[B.pillar])==null?void 0:R.soft)||"rgba(0,0,0,0.05)",be=n(B),se=B.type==="weekly",ye=new Set(B.days||[]),G=[0,1,2,3,4,5,6].filter(U=>ye.has(U)),Y=se&&G.length>0&&G.every(U=>be.has(a[U])),oe=se?Array(7).fill(Y):null,K=B.type==="minimum"&&["week","month","year"].includes(B.period),pe=B.target_count||0,O=B.logs||[],$=U=>O.filter(M=>M.slice(0,7)===U).length,P=U=>O.filter(M=>M.slice(0,4)===U).length,le=a.filter(U=>be.has(U)).length,de=U=>K?B.period==="week"?le>=pe:B.period==="month"?$(U.slice(0,7))>=pe:B.period==="year"?P(U.slice(0,4))>=pe:!1:!1,Te=K&&a.some(de),Q=B.period==="week"?le:B.period==="month"?$(a[0].slice(0,7)):B.period==="year"?P(a[0].slice(0,4)):0;return r.jsxs(c.Fragment,{children:[r.jsxs("div",{style:H.weekRow,children:[r.jsxs("div",{style:{...H.weekNameCol,flexDirection:"column",alignItems:"flex-start",gap:2},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("span",{style:{...H.sideDot,background:I}}),r.jsx("span",{style:H.weekHabitName,children:B.name})]}),B.type==="weekly"?r.jsx("span",{style:H.typeBadge,children:(B.days||[]).map(U=>Pi[U]).join("·")||"—"}):B.type!=="regular"?r.jsx("span",{style:H.typeBadge,children:B.type==="minimum"?`≥${B.target_count}/${B.period}`:`≤${B.target_count}/${B.period}`}):null]}),a.map((U,M)=>{var ht,Qe;if(se&&!ye.has(M))return r.jsxs("div",{style:{...H.weekCell,position:"relative",zIndex:0},children:[oe[M]&&r.jsx("span",{style:{...H.chainLine,background:I,left:oe[M-1]?0:"50%",right:oe[M+1]?0:"50%"}}),r.jsx("span",{style:{...H.offDay,position:"relative",zIndex:1},title:"Not scheduled",children:"·"})]},U);const z=be.has(U),x=U>mn,V=(B.type==="minimum"||B.type==="maximum")&&B.period==="day",ge=(ht=B.log_counts)==null?void 0:ht[U],je=ge!=null,Oe=!!((Qe=B.log_notes)!=null&&Qe[U]),_e=de(U),Xe=M>0&&de(a[M-1]),Ke=M<a.length-1&&de(a[M+1]),ot=z||_e;return r.jsxs("div",{style:{...H.weekCell,position:"relative",zIndex:0},children:[_e&&r.jsx("span",{style:{...H.chainLine,background:I,left:Xe?0:"50%",right:Ke?0:"50%"}}),se&&oe[M]&&r.jsx("span",{style:{...H.chainLine,background:I,left:oe[M-1]?0:"50%",right:oe[M+1]?0:"50%"}}),r.jsx("button",{disabled:x,onClick:()=>t(B,U),style:{...H.tick,...ot?{background:I,borderColor:I,color:"#fff"}:{},...V&&je&&!z?{borderColor:I,color:I}:{},...x&&!ot?H.tickFuture:{}},children:V?je?r.jsx("span",{style:{fontSize:12,fontWeight:700},children:ge}):null:z&&r.jsx(Ne,{size:14,color:"#fff",strokeWidth:3})}),Oe&&r.jsx("span",{style:H.cellNoteBubble})]},U)}),r.jsx("div",{style:H.weekStreakCol,children:Y?r.jsxs("span",{style:{...H.streakPill,background:J,color:I},children:[r.jsx(yl,{size:12})," ",G.length,"/",G.length]}):Te?r.jsxs("span",{style:{...H.streakPill,background:J,color:I},children:[r.jsx(yl,{size:12})," ",Q,"/",pe]}):r.jsxs("span",{style:{...H.streakPill,background:J,color:I},children:[r.jsx(Rn,{size:12})," ",B.streak]})})]}),s&&s(B)]},B.id)}),e.length===0&&r.jsx("div",{style:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},children:"No habits yet — add one from the sidebar."})]}),e.length>0&&r.jsxs("div",{style:{...H.progressCard,marginTop:18,marginBottom:0},children:[r.jsx(va,{pct:h,label:"Today",sub:`${p}/${e.length} done`,color:"#4C9A6B"}),r.jsx("div",{style:H.progressDivider}),r.jsx(va,{pct:v,label:"This week",sub:"of weekly targets",color:"#3A7CA5"}),r.jsx("div",{style:H.progressDivider}),r.jsx(va,{pct:ie,label:"This month",sub:"of monthly targets",color:"#8268B0"})]})]})}function f0({habit:e,dayAction:t,logSet:n,onDelete:o,onEdit:i,setNote:s,onToggleActive:l,renderInline:d}){var Te,Q;const[a,g]=c.useState(null),[m,y]=c.useState(""),[f,E]=c.useState(null),[C,w]=c.useState(0),D=c.useRef(null);if(!e)return null;const b=((Te=Tn[e.pillar])==null?void 0:Te.dot)||"#9A968C",p=((Q=Tn[e.pillar])==null?void 0:Q.soft)||"rgba(0,0,0,0.05)",h=n(e),T=e.type==="weekly",v=new Set(e.days||[]),S=ne=>(new Date(ne+"T00:00").getDay()+6)%7,W=ne=>!T||v.has(S(ne)),F=ne=>{const R=new Date(ne+"T00:00"),U=R.getDay(),M=new Date(R);M.setDate(R.getDate()+(U===0?-6:1-U));const z=Array.from({length:7},(ge,je)=>{const Oe=new Date(M);return Oe.setDate(M.getDate()+je),Ni(Oe)}),x=[0,1,2,3,4,5,6].filter(ge=>v.has(ge)),V=x.length>0&&x.every(ge=>h.has(z[ge]));return Array(7).fill(V)},{dates:j,startOffset:A,label:ie,year:B}=a0(C),I=j.filter(ne=>ne<=mn&&W(ne)&&h.has(ne)).length,J=j.filter(ne=>ne<=mn&&W(ne)).length,be=J>0?Math.round(I/J*100):0,se=e.type==="minimum"&&(e.period==="month"||e.period==="year"),ye=e.period==="year"?(e.logs||[]).filter(ne=>ne.startsWith(`${B}-`)).length:j.filter(ne=>h.has(ne)).length,G=se&&ye>=(e.target_count||0),Y=e.type==="minimum"&&e.period==="week",oe=e.target_count||0,K=ne=>{const R=new Date(ne+"T00:00"),U=R.getDay(),M=new Date(R);M.setDate(R.getDate()+(U===0?-6:1-U));let z=0;for(let x=0;x<7;x++){const V=new Date(M);V.setDate(M.getDate()+x),h.has(Ni(V))&&z++}return z},pe=ne=>se?G:Y?K(ne)>=oe:!1,O=Y?K(mn):0,$=Y&&O>=oe,P=ne=>{D.current=setTimeout(()=>g(ne),500)},le=()=>clearTimeout(D.current),de=ne=>{var R;E(ne),y(((R=e.log_notes)==null?void 0:R[ne])||""),g(null)};return r.jsxs("div",{children:[r.jsxs("div",{style:H.mainHead,children:[r.jsxs("div",{children:[r.jsxs("div",{style:H.eyebrow,children:[r.jsx("span",{style:{...H.sideDot,background:b,marginRight:6}}),e.pillar," · Monthly view"]}),r.jsx("h1",{style:H.h1,children:e.name})]}),r.jsxs("div",{style:{display:"flex",gap:8,marginTop:8,flexWrap:"wrap"},children:[r.jsxs("button",{onClick:i,style:H.actionBtn,children:[r.jsx(bt,{size:14})," Edit"]}),r.jsx("button",{onClick:()=>l(e.id,e.active===!1),style:{...H.actionBtn,...e.active===!1?{color:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:e.active===!1?r.jsxs(r.Fragment,{children:[r.jsx(Ne,{size:14})," Enable"]}):r.jsxs(r.Fragment,{children:[r.jsx(zy,{size:14})," Disable"]})}),r.jsxs("button",{onClick:o,style:{...H.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[r.jsx(Be,{size:14})," Delete"]}),e.reminder_time&&r.jsxs("button",{style:H.actionBtn,children:[r.jsx(Pc,{size:14})," ",e.reminder_time]})]})]}),r.jsxs("div",{style:H.statStrip,children:[r.jsx(Wn,{label:"Current streak",value:`${e.streak} days`,c:b,soft:p,flame:!0}),r.jsx(Wn,{label:"Best streak",value:`${e.max_streak??e.streak} days`,c:b,soft:p,flame:!0}),r.jsx(Wn,{label:"Done this month",value:`${I}/${J}`,c:b,soft:p}),r.jsx(Wn,{label:"Completion",value:`${be}%`,c:b,soft:p}),e.type==="regular"?r.jsx(Wn,{label:"Weekly target",value:`${e.target_per_week}×`,c:b,soft:p}):e.type==="weekly"?r.jsx(Wn,{label:"Days",value:(e.days||[]).map(ne=>Pi[ne]).join(", ")||"—",c:b,soft:p}):r.jsx(Wn,{label:e.type==="minimum"?"Min target":"Max allowed",value:`${e.target_count}/${e.period}`,c:b,soft:p})]}),d&&d(e),r.jsxs("div",{style:H.navBar,children:[r.jsx("button",{onClick:()=>w(ne=>ne-1),style:H.navBtn,children:r.jsx(An,{size:16})}),r.jsxs("span",{style:H.navLabel,children:[ie,C===0?" · This month":""]}),r.jsx("button",{onClick:()=>w(ne=>Math.min(0,ne+1)),disabled:C>=0,style:{...H.navBtn,...C>=0?H.navBtnDisabled:{}},children:r.jsx(on,{size:16})})]}),se&&r.jsxs("div",{style:{...H.chainBanner,background:G?p:"var(--bg)",color:G?b:"var(--text-3)"},children:[r.jsx(yl,{size:15}),G?`${e.period==="year"?"Yearly":"Monthly"} chain complete — ${ye}/${e.target_count} connected`:`${ye}/${e.target_count} this ${e.period} · ${(e.target_count||0)-ye} more to connect the chain`]}),Y&&C===0&&r.jsxs("div",{style:{...H.chainBanner,background:$?p:"var(--bg)",color:$?b:"var(--text-3)"},children:[r.jsx(yl,{size:15}),$?`This week's chain complete — ${O}/${oe} connected`:`${O}/${oe} this week · ${Math.max(0,oe-O)} more to connect the chain`]}),r.jsxs("div",{style:H.monthCard,children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[r.jsx("div",{style:H.monthTitle,children:ie}),r.jsx("span",{style:{fontSize:11,color:"var(--text-3)"},children:"Long-press a day for options"})]}),r.jsx("div",{style:H.monthDow,children:Pi.map(ne=>r.jsx("div",{style:H.monthDowCell,children:ne},ne))}),r.jsxs("div",{style:H.monthGrid,children:[Array.from({length:A}).map((ne,R)=>r.jsx("div",{},`pad${R}`)),j.map((ne,R)=>{var ot,ht;const U=R+1;if(T&&!W(ne)){const Qe=S(ne),zt=F(ne),It=(A+R)%7;return r.jsxs("div",{style:{position:"relative"},children:[zt[Qe]&&r.jsx("span",{style:{...H.chainLine,background:b,...It===0?{left:"50%"}:{left:zt[Qe-1]?-6:"50%"},...It===6?{right:"50%"}:{right:zt[Qe+1]?-6:"50%"}}}),r.jsx("div",{style:{...H.monthDay,...H.monthDayOff,width:"100%",position:"relative",zIndex:1},children:U})]},ne)}const M=h.has(ne),z=ne>mn,x=ne===mn,V=!!((ot=e.log_notes)!=null&&ot[ne]),ge=(e.type==="minimum"||e.type==="maximum")&&e.period==="day",je=(ht=e.log_counts)==null?void 0:ht[ne],Oe=je!=null,_e=pe(ne),Xe=_e&&!M,Ke=(A+R)%7;return r.jsxs("div",{style:{position:"relative"},children:[_e&&r.jsx("span",{style:{...H.chainLine,background:b,...Ke===0?{left:"50%"}:{left:-6},...Ke===6?{right:"50%"}:{right:-6}}}),T&&(()=>{const Qe=S(ne),zt=F(ne);return zt[Qe]?r.jsx("span",{style:{...H.chainLine,background:b,...Ke===0?{left:"50%"}:{left:zt[Qe-1]?-6:"50%"},...Ke===6?{right:"50%"}:{right:zt[Qe+1]?-6:"50%"}}}):null})(),r.jsx("button",{disabled:z,onClick:()=>t(e,ne),onMouseDown:()=>!ge&&P(ne),onMouseUp:le,onTouchStart:()=>!ge&&P(ne),onTouchEnd:le,style:{...H.monthDay,position:"relative",zIndex:1,...M?{background:b,borderColor:b,color:"#fff"}:{},...Xe?{background:p,borderColor:b,color:b}:{},...ge&&Oe&&!M?{borderColor:b,color:b}:{},...z&&!M?H.monthDayFuture:{},...x&&!M?{borderColor:b,borderWidth:2}:{},width:"100%"},children:U}),ge&&Oe&&r.jsx("span",{style:{...H.countBadge,background:M?"#4C9A6B":b},children:je}),V&&r.jsx("span",{style:H.noteIndicator}),a===ne&&r.jsx(x0,{onEdit:i,onDelete:o,onAddNote:()=>de(ne),onRemind:i,onClose:()=>g(null)})]},ne)})]})]}),f&&r.jsxs("div",{style:H.noteBox,children:[r.jsxs("div",{style:{fontWeight:600,fontSize:13,marginBottom:6},children:["Note for ",f]}),r.jsx("textarea",{value:m,onChange:ne=>y(ne.target.value),placeholder:"Add a note for this day…",style:{...H.sideInput,minHeight:60,resize:"vertical"}}),r.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[r.jsxs("button",{onClick:()=>{s(f,m),E(null)},style:H.sideAddBtn,children:[r.jsx(Ne,{size:13})," Save"]}),r.jsx("button",{onClick:()=>E(null),style:H.sideCancelBtn,children:r.jsx(Be,{size:13})})]})]})]})}function x0({onEdit:e,onDelete:t,onAddNote:n,onRemind:o,onClose:i}){return r.jsxs("div",{style:H.longPressMenu,children:[r.jsxs("button",{style:H.menuItem,onClick:()=>{e(),i()},children:[r.jsx(bt,{size:13})," Edit"]}),r.jsxs("button",{style:H.menuItem,onClick:()=>{n(),i()},children:[r.jsx(Oc,{size:13})," Add note"]}),r.jsxs("button",{style:H.menuItem,onClick:()=>{o(),i()},children:[r.jsx(Pc,{size:13})," Remind"]}),r.jsxs("button",{style:{...H.menuItem,color:"#C2536B"},onClick:()=>{t(),i()},children:[r.jsx(Be,{size:13})," Delete"]})]})}function y0({habits:e,onSave:t,onToggleActive:n,onClose:o}){const[i,s]=c.useState(()=>e.map(g=>g.id)),l=c.useMemo(()=>{const g={};return e.forEach(m=>g[m.id]=m),g},[e]),d=i.map(g=>l[g]).filter(Boolean),a=(g,m)=>{const y=g+m;if(y<0||y>=i.length)return;const f=[...i];[f[g],f[y]]=[f[y],f[g]],s(f)};return r.jsx("div",{style:H.modalOverlay,onClick:o,children:r.jsxs("div",{style:{...H.modal,maxHeight:"80vh",overflow:"hidden"},onClick:g=>g.stopPropagation(),children:[r.jsxs("div",{style:{...H.modalHead,flexShrink:0},children:["Edit Habits",r.jsx("button",{onClick:o,style:H.closeBtn,children:r.jsx(Be,{size:16})})]}),r.jsx("p",{style:{fontSize:12,color:"var(--text-3)",margin:"0 0 10px",flexShrink:0},children:"Reorder with the arrows. Toggle a habit off to hide it from your views (its history is kept)."}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6,overflowY:"auto",minHeight:0},children:d.map((g,m)=>{var E;const y=((E=Tn[g.pillar])==null?void 0:E.dot)||"#9A968C",f=g.active!==!1;return r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"9px 10px",background:"var(--bg)",borderRadius:9,border:"1px solid var(--border)",opacity:f?1:.5},children:[r.jsx("span",{style:{...H.sideDot,background:y}}),r.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500,textDecoration:f?"none":"line-through"},children:g.name}),r.jsx("button",{onClick:()=>n(g.id,!f),title:f?"Disable (hide) habit":"Enable habit",style:{...H.activeToggle,...f?H.activeToggleOn:{}},role:"switch","aria-checked":f,children:r.jsx("span",{style:{...H.activeKnob,...f?H.activeKnobOn:{}}})}),r.jsx("button",{onClick:()=>a(m,-1),disabled:m===0,style:{...H.navBtn,width:28,height:28,opacity:m===0?.3:1,fontSize:14},children:"↑"}),r.jsx("button",{onClick:()=>a(m,1),disabled:m===d.length-1,style:{...H.navBtn,width:28,height:28,opacity:m===d.length-1?.3:1,fontSize:14},children:"↓"})]},g.id)})}),r.jsxs("button",{onClick:()=>t(i),style:{...H.sideAddBtn,width:"100%",marginTop:14,height:38,justifyContent:"center",flexShrink:0},children:[r.jsx(Ne,{size:14})," Save Order"]})]})})}function v0({year:e}){const[t,n]=c.useState([]);if(c.useEffect(()=>{_.getHabitsYearly(e).then(n).catch(console.error)},[e]),!t.length)return null;const o=Array.from({length:12},(s,l)=>{const d=t.reduce((g,m)=>{var y;return g+(((y=m.monthly[l+1])==null?void 0:y.done)||0)},0),a=t.reduce((g,m)=>{var y;return g+Math.floor((((y=m.monthly[l+1])==null?void 0:y.days)||30)/7*7)},0);return a>0?Math.round(d/a*100):0}),i=Math.max(...o,1);return r.jsxs("div",{style:{...H.monthCard,marginTop:18},children:[r.jsxs("div",{style:H.monthTitle,children:[e," Completion"]}),r.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:6,height:80,marginTop:12},children:o.map((s,l)=>r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[r.jsx("div",{style:{width:"100%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",height:`${s/i*60}px`,minHeight:2,opacity:s>0?1:.15},title:`${s}%`}),r.jsx("span",{style:{fontSize:9,color:"var(--text-3)",fontWeight:600},children:s0[l]})]},l))})]})}function Wn({label:e,value:t,c:n,soft:o,flame:i}){return r.jsxs("div",{style:{...H.stat,background:o},children:[r.jsx("div",{style:H.statLabel,children:e}),r.jsxs("div",{style:{...H.statValue,color:n},children:[i&&r.jsx(Rn,{size:15})," ",t]})]})}const H={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:230,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",padding:"20px 12px",display:"flex",flexDirection:"column",gap:3,overflowY:"auto"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.18)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)",boxShadow:"none"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.38)",zIndex:20},sideTop:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 4px"},closeBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",marginBottom:8},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700,padding:"0 6px 14px"},sideItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"9px 10px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:500,color:"var(--text-2)",textAlign:"left"},sideItemOn:{background:"var(--hover)",fontWeight:600},sideLabel:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},sideCount:{fontSize:11,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:10,padding:"1px 7px"},sideStreak:{display:"flex",alignItems:"center",gap:3,fontSize:11,fontWeight:600,color:"#C2773B"},sideDot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},sideDivider:{height:1,background:"var(--border)",margin:"8px 6px"},addBox:{padding:"10px 6px",display:"flex",flexDirection:"column",gap:6},sideInput:{border:"1px solid var(--border)",borderRadius:7,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},sideAddBtn:{border:"none",background:"#4C9A6B",color:"#fff",height:30,padding:"0 12px",borderRadius:7,cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontSize:13,fontFamily:"inherit"},sideCancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:30,height:30,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},sideNewBtn:{display:"flex",alignItems:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",borderRadius:8,padding:"8px 10px",fontSize:12.5,color:"var(--text-3)",fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginTop:6,justifyContent:"center"},main:{flex:1,padding:"26px",overflowX:"hidden",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:200},mainHead:{marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:5,display:"flex",alignItems:"center"},h1:{fontSize:27,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},actionBtn:{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:500,color:"var(--text-2)",border:"1px solid var(--border)",background:"var(--surface)",padding:"5px 10px",borderRadius:7,cursor:"pointer",fontFamily:"inherit"},progressCard:{background:"var(--surface)",borderRadius:12,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14,display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"},progressDivider:{width:1,alignSelf:"stretch",background:"var(--border)",minHeight:48},ringStat:{display:"flex",alignItems:"center",gap:12,flex:"1 1 160px"},ringBox:{position:"relative",width:70,height:70,display:"grid",placeItems:"center",flexShrink:0},ringPct:{position:"absolute",inset:0,display:"grid",placeItems:"center",fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},ringLabel:{fontSize:14,fontWeight:700,color:"var(--text)"},ringSub:{fontSize:11.5,color:"var(--text-3)",fontWeight:500,marginTop:2},weekCard:{background:"var(--surface)",borderRadius:12,padding:"8px 14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"auto"},weekHeadRow:{display:"flex",alignItems:"flex-end",padding:"10px 0",borderBottom:"1px solid var(--border)",minWidth:480,position:"relative",zIndex:0},weekNameCol:{width:160,flexShrink:0,alignSelf:"stretch",display:"flex",alignItems:"center",gap:8,position:"sticky",left:0,zIndex:5,background:"var(--surface)",boxShadow:"6px 0 6px -6px rgba(0,0,0,0.15)"},weekDayHead:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2},weekDayName:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekDayNum:{fontSize:12,fontWeight:600,color:"var(--text-2)",width:22,height:22,display:"grid",placeItems:"center",borderRadius:"50%"},weekDayToday:{background:"var(--accent-strong)",color:"#fff"},weekStreakCol:{width:64,flexShrink:0,textAlign:"center",fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekRow:{display:"flex",alignItems:"center",padding:"9px 0",borderBottom:"1px solid #F4F2EC",minWidth:480,position:"relative",zIndex:0},weekHabitName:{fontSize:13,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},weekCell:{flex:1,display:"grid",placeItems:"center"},typeBadge:{fontSize:10,color:"var(--text-3)",background:"var(--hover)",padding:"1px 6px",borderRadius:8,fontWeight:600},tick:{width:26,height:26,borderRadius:7,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",padding:0,position:"relative",zIndex:1},tickFuture:{opacity:.4,cursor:"not-allowed",borderStyle:"dashed"},streakPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,fontWeight:700,padding:"3px 9px",borderRadius:12},tinyBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:"2px 3px",display:"grid",placeItems:"center",borderRadius:4},statStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:10,marginBottom:18},stat:{borderRadius:10,padding:"13px 14px"},statLabel:{fontSize:11,fontWeight:600,color:"var(--text-2)",marginBottom:5},statValue:{fontSize:19,fontWeight:700,display:"flex",alignItems:"center",gap:5,fontFamily:"'Fraunces',Georgia,serif"},monthCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},monthTitle:{fontSize:14,fontWeight:700,marginBottom:12,fontFamily:"'Fraunces',Georgia,serif"},monthDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:8},monthDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},monthGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6},monthDay:{aspectRatio:"1",border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",display:"grid",placeItems:"center"},monthDayFuture:{opacity:.4,cursor:"not-allowed",background:"var(--surface-2)"},monthDayOff:{background:"var(--surface-2)",borderStyle:"dashed",color:"var(--text-3)",opacity:.5,cursor:"default"},dayPick:{display:"flex",gap:4,flexWrap:"wrap"},dayChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:7,padding:"5px 7px",fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:"inherit",minWidth:34},dayChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},pickHint:{fontSize:11,color:"var(--text-3)",fontWeight:600},offDay:{color:"var(--text-3)",opacity:.4,fontSize:18,lineHeight:1,userSelect:"none"},noteIndicator:{position:"absolute",top:3,right:3,width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},cellNoteBubble:{position:"absolute",top:2,right:"calc(50% - 16px)",width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},countBadge:{position:"absolute",bottom:2,right:2,minWidth:13,height:13,padding:"0 2px",borderRadius:7,color:"#fff",fontSize:9,fontWeight:700,display:"grid",placeItems:"center",lineHeight:1},counterBtn:{width:44,height:44,borderRadius:"50%",border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:24,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1},inlineCounter:{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",margin:"2px 0 8px",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,flexWrap:"wrap"},inlineCount:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1},inlineTarget:{fontSize:12,fontWeight:600,color:"var(--text-3)",marginLeft:1},inlinePlus:{width:30,height:30,borderRadius:8,border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:18,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1,flexShrink:0},inlineSet:{height:30,padding:"0 12px",borderRadius:8,border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",flexShrink:0},inlineWait:{fontSize:12,fontWeight:700,color:"#C2773B"},inlineReady:{fontSize:12,fontWeight:700,color:"#4C9A6B"},inlineMore:{marginLeft:"auto",border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",fontSize:16,fontWeight:700,lineHeight:1},activeToggle:{position:"relative",width:38,height:22,borderRadius:11,border:"none",background:"var(--border)",cursor:"pointer",flexShrink:0,transition:"background 0.2s",padding:0},activeToggleOn:{background:"#4C9A6B"},activeKnob:{position:"absolute",top:3,left:3,width:16,height:16,borderRadius:"50%",background:"#fff",transition:"left 0.2s",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},activeKnobOn:{left:19},chainLine:{position:"absolute",top:"calc(50% - 3px)",left:0,right:0,height:6,zIndex:0,opacity:.9},chainBanner:{display:"flex",alignItems:"center",gap:8,borderRadius:10,padding:"10px 14px",marginBottom:14,fontSize:12.5,fontWeight:700,fontFamily:"'Inter',system-ui,sans-serif"},navBar:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:16},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},navLabel:{fontSize:13,fontWeight:700,color:"var(--text)",minWidth:180,textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},noteBox:{background:"var(--surface)",borderRadius:10,padding:14,marginTop:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},longPressMenu:{position:"absolute",top:"100%",left:0,zIndex:50,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 4px 16px rgba(0,0,0,0.12)",padding:"4px 0",minWidth:140},menuItem:{display:"flex",alignItems:"center",gap:8,width:"100%",border:"none",background:"none",padding:"8px 14px",fontSize:13,color:"var(--text)",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:100,display:"grid",placeItems:"center"},modal:{background:"var(--surface)",borderRadius:14,padding:24,width:320,maxWidth:"90vw",display:"flex",flexDirection:"column",gap:8},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:700,fontSize:16,fontFamily:"'Fraunces',Georgia,serif",marginBottom:6},modalLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4}},Ld=[{id:1,label:"Rough",emoji:"😣",color:"#C2536B"},{id:2,label:"Low",emoji:"🙁",color:"#C2773B"},{id:3,label:"Okay",emoji:"😐",color:"#C9A227"},{id:4,label:"Good",emoji:"🙂",color:"#4C9A6B"},{id:5,label:"Great",emoji:"😄",color:"#3A7CA5"}],k0=e=>Ld.find(t=>t.id===e),ka=[{id:"wins",label:"Wins",hint:"What went well today?",icon:Lr,color:"#C9A227"},{id:"grateful",label:"Grateful for",hint:"1–3 things",icon:Im,color:"#C2536B"},{id:"mattered",label:"What mattered",hint:"The point of today",icon:Yc,color:"#3A7CA5"},{id:"letgo",label:"Letting go of",hint:"Offload what's draining",icon:$y,color:"#8268B0"},{id:"tomorrow",label:"Tomorrow's one thing",hint:"A single priority",icon:Lm,color:"#4C9A6B"}],Um=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,j0=()=>Um(new Date),ja=e=>new Date(e+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"});function w0(){const e=j0(),[t,n]=[new Date().getFullYear(),new Date().getMonth()+1],[o,i]=c.useState(null),s=o||e,l=s===e,[d,a]=c.useState(null),[g,m]=c.useState({}),[y,f]=c.useState(Object.fromEntries(ka.map(j=>[j.id,""]))),E=c.useCallback(async j=>{const A=await _.getJournalEntry(j);a(A)},[]);c.useCallback(async()=>{const j=await _.getJournalHistory(t,n);m(j)},[t,n]);const C=c.useCallback(async()=>{const[j,A]=await Promise.all([_.getJournalEntry(s),_.getJournalHistory(t,n)]);a(j),m(A)},[s,t,n]);c.useEffect(()=>{C()},[C]);const w=async j=>{l&&(await _.updateJournalMood(s,j),C())},D=async j=>{if(!l)return;const A=y[j].trim();A&&(await _.addJournalBullet(s,j,A),f(ie=>({...ie,[j]:""})),E(s))},b=async j=>{await _.deleteJournalBullet(j),E(s)},p=j=>{i(j===e?null:j),f(Object.fromEntries(ka.map(A=>[A.id,""])))};if(!d)return r.jsx("div",{style:{padding:28,color:"var(--text-3)"},children:"Loading…"});const h=d.mood!==null,T=(()=>{let j=0;const A=new Date(e);if(g[e]||l&&h)j=1,A.setDate(A.getDate()-1);else return 0;for(;;){const B=Um(A);if(g[B])j++,A.setDate(A.getDate()-1);else break}return j})(),v=Object.values(d.bullets||{}).reduce((j,A)=>j+A.length,0),S=new Date(t,n,0).getDate(),W=new Date(t,n-1,1).getDay(),F=W===0?6:W-1;return r.jsxs("div",{style:Ge.page,children:[r.jsxs("div",{style:Ge.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:Ge.eyebrow,children:"Anvil · Journal"}),!l&&r.jsxs("button",{style:Ge.backBtn,onClick:()=>i(null),children:[r.jsx(An,{size:14})," Back to Today"]}),r.jsx("h1",{style:Ge.h1,children:l?"Today":ja(s)}),l&&r.jsx("div",{style:Ge.date,children:ja(e)})]}),r.jsxs("div",{style:Ge.streakBox,children:[r.jsx(Rn,{size:16,color:"#C2773B"}),r.jsx("span",{style:Ge.streakNum,children:T}),r.jsx("span",{style:Ge.streakLabel,children:"day streak"})]})]}),r.jsxs("div",{style:Ge.card,children:[r.jsxs("div",{style:Ge.cardTitle,children:["How ",l?"are":"were"," you?"]}),r.jsx("div",{style:Ge.moodRow,children:Ld.map(j=>{const A=d.mood===j.id;return r.jsxs("button",{onClick:()=>w(j.id),disabled:!l,style:{...Ge.moodBtn,cursor:l?"pointer":"default",...A?{background:j.color,borderColor:j.color,transform:"translateY(-2px)"}:{},...!l&&!A?{opacity:.55}:{}},children:[r.jsx("span",{style:Ge.moodEmoji,children:j.emoji}),r.jsx("span",{style:{...Ge.moodLabel,color:A?"#fff":"#6B675E"},children:j.label})]},j.id)})})]}),ka.map(j=>{var B;const A=j.icon,ie=((B=d.bullets)==null?void 0:B[j.id])||[];return r.jsxs("div",{style:Ge.card,children:[r.jsxs("div",{style:Ge.sectionHead,children:[r.jsx("span",{style:{...Ge.sectionIcon,background:`${j.color}1A`,color:j.color},children:r.jsx(A,{size:15})}),r.jsxs("div",{children:[r.jsx("div",{style:Ge.cardTitle,children:j.label}),r.jsx("div",{style:Ge.sectionHint,children:j.hint})]})]}),r.jsxs("ul",{style:Ge.bulletList,children:[ie.map(I=>r.jsxs("li",{style:Ge.bullet,children:[r.jsx("span",{style:{...Ge.bulletDot,background:j.color}}),r.jsx("span",{style:Ge.bulletText,children:I.text}),l&&r.jsx("button",{onClick:()=>b(I.id),style:Ge.bulletDel,children:r.jsx(Be,{size:13})})]},I.id)),!l&&ie.length===0&&r.jsx("li",{style:Ge.sectionHint,children:"Nothing written."})]}),l&&r.jsxs("div",{style:Ge.addRow,children:[r.jsx("input",{placeholder:"Add a point…",value:y[j.id],onChange:I=>f(J=>({...J,[j.id]:I.target.value})),onKeyDown:I=>I.key==="Enter"&&D(j.id),style:Ge.input}),r.jsx("button",{onClick:()=>D(j.id),style:{...Ge.addBtn,background:j.color},children:r.jsx(Ze,{size:16})})]})]},j.id)}),r.jsxs("div",{style:Ge.card,children:[r.jsxs("div",{style:Ge.cardTitle,children:[new Date(t,n-1).toLocaleDateString("en-US",{month:"long",year:"numeric"})," · Mood history",r.jsx("span",{style:{fontSize:11,color:"var(--text-3)",fontWeight:400,marginLeft:8},children:"tap a day to view"})]}),r.jsx("div",{style:Ge.calDow,children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(j=>r.jsx("div",{style:Ge.calDowCell,children:j},j))}),r.jsxs("div",{style:Ge.calGrid,children:[Array.from({length:F}).map((j,A)=>r.jsx("div",{},`p${A}`)),Array.from({length:S},(j,A)=>A+1).map(j=>{const A=`${t}-${String(n).padStart(2,"0")}-${String(j).padStart(2,"0")}`,ie=A===e&&d.mood?d.mood:g[A],B=ie?k0(ie):null,I=A>e,J=A===s;return r.jsx("button",{onClick:()=>!I&&p(A),disabled:I,style:{...Ge.calDay,background:B?B.color:I?"var(--surface-2)":"var(--surface)",borderColor:J?"var(--accent-strong)":"var(--border)",borderWidth:J?2:1,color:B?"#fff":"var(--text-3)",opacity:I?.5:1,cursor:I?"not-allowed":"pointer",outline:J?"2px solid var(--accent-strong)":"none",outlineOffset:1},title:B?B.label:A,children:B?B.emoji:j},j)})]}),r.jsx("div",{style:Ge.legend,children:Ld.map(j=>r.jsxs("span",{style:Ge.legendItem,children:[r.jsx("span",{style:{...Ge.legendDot,background:j.color}})," ",j.label]},j.id))})]}),r.jsx("div",{style:Ge.footer,children:l?h?`Mood set · ${v} point${v===1?"":"s"} written today`:"Tap a mood to log today and keep your streak":`Viewing ${ja(s)} · past entries are read-only`})]})}const Ge={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},backBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",background:"none",color:"#3A7CA5",fontSize:12.5,fontWeight:600,cursor:"pointer",padding:"0 0 6px",fontFamily:"inherit"},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},date:{fontSize:13,color:"var(--text-3)",marginTop:4},streakBox:{display:"flex",alignItems:"center",gap:6,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"8px 14px"},streakNum:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"#C2773B"},streakLabel:{fontSize:11,color:"var(--text-3)",fontWeight:500},card:{background:"var(--surface)",borderRadius:12,padding:"18px 20px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},cardTitle:{fontSize:14,fontWeight:700,marginBottom:12,color:"var(--text)"},moodRow:{display:"flex",gap:8,flexWrap:"wrap"},moodBtn:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,border:"2px solid var(--border)",background:"var(--surface)",borderRadius:10,padding:"10px 12px",cursor:"pointer",flex:"1 1 60px",transition:"transform 0.1s"},moodEmoji:{fontSize:22},moodLabel:{fontSize:11,fontWeight:600},sectionHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:10},sectionIcon:{width:32,height:32,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},sectionHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},bulletList:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6,marginBottom:10},bullet:{display:"flex",alignItems:"center",gap:8,fontSize:13.5,lineHeight:1.4},bulletDot:{width:6,height:6,borderRadius:"50%",flexShrink:0},bulletText:{flex:1},bulletDel:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},addRow:{display:"flex",gap:8},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",outline:"none"},addBtn:{width:36,height:36,border:"none",borderRadius:8,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:12},calDay:{aspectRatio:"1",border:"1px solid var(--border)",borderRadius:7,fontSize:13,display:"grid",placeItems:"center",fontWeight:500,fontFamily:"inherit"},legend:{display:"flex",gap:10,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)"},legendDot:{width:8,height:8,borderRadius:"50%",display:"inline-block"},footer:{fontSize:12.5,color:"var(--text-3)",textAlign:"center",marginTop:8,fontStyle:"italic"}};function S0(e=760){const[t,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),t}const yr=[{id:"D",label:"Data",color:"#3A7CA5",soft:"rgba(58,124,165,0.10)",prompt:"What did you read/watch? Log the raw source and a quick note.",hint:"e.g. 'Atomic Habits ch.1 — habits are systems not goals'"},{id:"I",label:"Information",color:"#8268B0",soft:"rgba(130,104,176,0.10)",prompt:"What did you actually understand from it? In your own words.",hint:"e.g. 'Small 1% improvements compound into massive change over time'"},{id:"K",label:"Knowledge",color:"#C9A227",soft:"rgba(201,162,39,0.10)",prompt:"How will this specifically improve your life? Connect it to your goals.",hint:"e.g. 'I will improve my morning workout habit by 1% each week'"},{id:"W",label:"Wisdom",color:"#4C9A6B",soft:"rgba(76,154,107,0.10)",prompt:"How have you implemented it? What changed?",hint:"e.g. 'I've not missed a workout in 3 weeks using the 1% rule'"}],Bu=e=>yr.findIndex(t=>t.id===e),_d=[{id:"book",label:"Book",icon:Nc},{id:"video",label:"Video",icon:Py},{id:"article",label:"Article",icon:Oc}],Du=e=>_d.find(t=>t.id===e)||_d[0],wa={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"};function C0(){var M;const[e,t]=c.useState([]),[n,o]=c.useState(null),[i,s]=c.useState("ALL"),[l,d]=c.useState(!1),[a,g]=c.useState(null),[m,y]=c.useState({title:"",type:"book",pillar:"Academic",note:""}),[f,E]=c.useState({}),[C,w]=c.useState(null),[D,b]=c.useState(null),[p,h]=c.useState({}),[T,v]=c.useState({}),[S,W]=c.useState(null),F=S0(),j=c.useCallback(async()=>{try{const z=await _.getSkills();t(z);const x={};z.forEach(V=>{x[V.id]=Object.fromEntries(yr.map(ge=>[ge.id,""]))}),E(V=>{const ge={...x};return z.forEach(je=>{V[je.id]&&(ge[je.id]={...x[je.id],...V[je.id]})}),ge})}catch(z){console.error(z)}},[]);c.useEffect(()=>{j()},[j]);const A=e.find(z=>z.id===n),ie=A?Bu(A.stage):-1,B=async(z,x)=>{var ge;const V=(((ge=f[z])==null?void 0:ge[x])??"").trim();V&&(await _.addSkillNote(z,x,V),E(je=>({...je,[z]:{...je[z],[x]:""}})),j())},I=async z=>{await _.deleteSkillNote(z),j()},J=z=>(z==null?void 0:z.source_type)==="book"?"Chapter":"Learning",be=()=>`g${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,se=async z=>{const x=[...z.data_groups||[]];x.push({id:be(),label:`${J(z)} ${x.length+1}`}),await _.setSkillGroups(z.id,x),v(V=>({...V,[x[x.length-1].id]:!0})),j()},ye=async(z,x,V)=>{const ge=(z.data_groups||[]).map(je=>je.id===x?{...je,label:V}:je);await _.setSkillGroups(z.id,ge),j()},G=async(z,x)=>{const V=(z.data_groups||[]).filter(ge=>ge.id!==x);await _.setSkillGroups(z.id,V),j()},Y=async(z,x)=>{const V=(p[x]??"").trim();V&&(await _.addSkillNote(z.id,"D",V,x),h(ge=>({...ge,[x]:""})),j())},oe=async()=>{!A||!(D!=null&&D.trim())||(await _.updateSkill(A.id,{title:D.trim()}),b(null),j())},K=async()=>{!C||!C.text.trim()||(await _.updateSkillNote(C.id,C.text.trim()),w(null),j())},pe=async z=>{await _.toggleSkillNote(z),j()},O=async(z,x)=>{e.find(ge=>ge.id===z)&&(x==="W"&&g(z),await _.completeSkillStage(z,x),j())},$=async()=>{if(!m.title.trim())return;const z=await _.createSkill({pillar:m.pillar,title:m.title.trim(),source_type:m.type,note_d:m.note.trim()});d(!1),y({title:"",type:"book",pillar:"Academic",note:""}),o(z.id),j()},{deleteItem:P,toasts:le,handleUndo:de,handleDismiss:Te}=Jt(_.deleteSkill,_.restoreSkill,j),Q=(z,x="Skill")=>{n===z&&o(null),P(z,x)},ne=i==="ALL"?e:e.filter(z=>z.stage===i),R=e.filter(z=>z.stage==="W").length,U=!!A;return r.jsxs("div",{style:me.page,children:[a&&r.jsx("div",{style:me.celebOverlay,children:r.jsxs("div",{style:me.celebBox,children:[r.jsx("div",{style:me.celebEmoji,children:"🏆"}),r.jsx("div",{style:me.celebTitle,children:"Wisdom unlocked!"}),r.jsx("div",{style:me.celebSub,children:"You've implemented this knowledge — that's rare and real."}),r.jsx("button",{onClick:()=>g(null),style:me.celebBtn,children:"Continue"})]})}),r.jsxs("div",{style:me.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:me.eyebrow,children:"Anvil · Skills"}),r.jsx("h1",{style:me.h1,children:"DIKW Skills"}),r.jsx("div",{style:me.subhead,children:"Data → Information → Knowledge → Wisdom"})]}),r.jsxs("div",{style:me.headRight,children:[r.jsxs("div",{style:me.wisdomBadge,children:[r.jsx(Lr,{size:14,color:"#C9A227"})," ",R," Wisdom",R!==1?"s":""]}),r.jsxs("button",{onClick:()=>{d(!0),o(null)},style:me.addSkillBtn,children:[r.jsx(Ze,{size:15})," Add skill"]})]})]}),r.jsx("div",{style:me.filterBar,children:["ALL",...yr.map(z=>z.id)].map(z=>{const x=yr.find(ge=>ge.id===z),V=i===z;return r.jsx("button",{onClick:()=>s(z),style:{...me.filterBtn,...V?{background:x?x.color:"var(--accent-strong)",color:"#fff",borderColor:"transparent"}:{}},children:x?`${z} · ${x.label}`:"All"},z)})}),r.jsxs("div",{style:{...me.layout,gridTemplateColumns:!F&&U?"minmax(0,1fr) minmax(0,1fr)":"1fr"},children:[(!F||!A)&&r.jsxs("div",{style:{...me.cardList,gridTemplateColumns:F||U?"1fr":"repeat(3, minmax(0, 1fr))"},children:[l&&r.jsxs("div",{style:{...me.skillCard,border:"2px dashed #3A7CA5",gridColumn:"1 / -1"},children:[r.jsx("div",{style:me.cardTitle,children:"New skill"}),r.jsx("input",{placeholder:"Title (book / video / article name)",value:m.title,onChange:z=>y(x=>({...x,title:z.target.value})),onKeyDown:z=>z.key==="Enter"&&$(),style:me.input,autoFocus:!0}),r.jsxs("div",{style:me.addRow,children:[r.jsx("select",{value:m.type,onChange:z=>y(x=>({...x,type:z.target.value})),style:me.select,children:_d.map(z=>r.jsx("option",{value:z.id,children:z.label},z.id))}),r.jsx("select",{value:m.pillar,onChange:z=>y(x=>({...x,pillar:z.target.value})),style:me.select,children:Object.keys(wa).map(z=>r.jsx("option",{children:z},z))})]}),r.jsxs("div",{style:me.addRow,children:[r.jsxs("button",{onClick:$,style:me.saveBtn,children:[r.jsx(Ne,{size:14})," Save"]}),r.jsxs("button",{onClick:()=>d(!1),style:me.cancelBtn,children:[r.jsx(Be,{size:14})," Cancel"]})]})]}),ne.map(z=>{const x=Bu(z.stage),V=yr[x],ge=Du(z.source_type),je=z.stage==="W",Oe=n===z.id;return r.jsxs("div",{onClick:()=>o(Oe?null:z.id),style:{...me.skillCard,...Oe?{borderColor:V.color,borderWidth:2}:{},...je?{background:"rgba(76,154,107,0.05)"}:{}},children:[r.jsxs("div",{style:me.skillCardTop,children:[r.jsxs("div",{style:me.skillMeta,children:[r.jsx("span",{style:{color:wa[z.pillar]},children:r.jsx(ge.icon,{size:13})}),r.jsx("span",{style:{...me.pillarDot,background:wa[z.pillar]}}),r.jsxs("span",{style:me.srcLabel,children:[ge.label," · ",z.pillar]})]}),r.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[je&&r.jsx(Jn,{size:14,color:"#4C9A6B"}),r.jsx("button",{onClick:_e=>{_e.stopPropagation(),Q(z.id,z.title)},style:me.ghostBtn,children:r.jsx(Be,{size:13})})]})]}),r.jsx("div",{style:me.skillTitle,children:z.title}),r.jsxs("div",{style:me.track,children:[yr.map((_e,Xe)=>{var Qe;const Ke=Xe<x,ot=Xe===x,ht=(Qe=z.completed_stages)==null?void 0:Qe[_e.id];return r.jsxs("div",{style:{...me.trackItem,...Xe<yr.length-1?{flex:1}:{}},children:[r.jsxs("div",{style:{...me.trackDot,background:Ke||ht||ot?_e.color:"var(--border)",boxShadow:ot?`0 0 0 3px ${_e.color}33`:"none"},children:[(Ke||ot&&ht)&&r.jsx(Ne,{size:9,color:"#fff",strokeWidth:3}),ot&&!ht&&r.jsx("span",{style:me.trackCurrent,children:_e.id}),!Ke&&!ot&&r.jsx(pu,{size:8,color:"#B5B1A7"})]}),Xe<yr.length-1&&r.jsx("div",{style:{...me.trackLine,background:Ke?yr[Xe+1].color:"var(--border)"}})]},_e.id)}),r.jsx("span",{style:{...me.stageTag,background:V.soft,color:V.color},children:V.label})]})]},z.id)}),ne.length===0&&!l&&r.jsx("div",{style:{...me.empty,gridColumn:"1 / -1"},children:"No skills at this stage yet."})]}),A&&r.jsxs("div",{style:me.detail,children:[r.jsxs("div",{style:me.detailHead,children:[F&&r.jsx("button",{onClick:()=>{o(null),b(null)},style:me.backBtn,title:"Back to skills",children:r.jsx(An,{size:18})}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsxs("div",{style:me.eyebrow,children:[Du(A.source_type).label," · ",A.pillar]}),D!==null?r.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginTop:4},children:[r.jsx("input",{autoFocus:!0,value:D,onChange:z=>b(z.target.value),onKeyDown:z=>{z.key==="Enter"&&oe(),z.key==="Escape"&&b(null)},style:{...me.input,fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:0,flex:1}}),r.jsx("button",{onClick:oe,style:{...me.noteAddBtn,background:"#4C9A6B",width:30,height:30},children:r.jsx(Ne,{size:13})}),r.jsx("button",{onClick:()=>b(null),style:{...me.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:30,height:30},children:r.jsx(Be,{size:13})})]}):r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("div",{style:me.detailTitle,children:A.title}),r.jsx("button",{onClick:()=>b(A.title),style:me.ghostBtn,title:"Edit name",children:r.jsx(bt,{size:13})})]})]}),r.jsx("button",{onClick:()=>{o(null),b(null)},style:me.closeBtn,children:r.jsx(Be,{size:16})})]}),yr.map((z,x)=>{var Ke,ot,ht;const V=x<=ie,ge=x===ie,je=x<ie||((Ke=A.completed_stages)==null?void 0:Ke[z.id]),Oe=x>ie,_e=((ot=A.notes)==null?void 0:ot[z.id])||[],Xe=((ht=f[A.id])==null?void 0:ht[z.id])??"";return r.jsxs("div",{style:{...me.stageBlock,...V?{borderColor:z.color}:{},opacity:Oe?.45:1},children:[r.jsxs("div",{style:me.stageBlockHead,children:[r.jsx("div",{style:{...me.stageLetter,background:V?z.color:"var(--border)",color:V?"#fff":"#9A968C"},children:je&&!ge?r.jsx(Ne,{size:12,color:"#fff",strokeWidth:3}):Oe?r.jsx(pu,{size:11,color:"#9A968C"}):z.id}),r.jsxs("div",{style:{flex:1},children:[r.jsx("div",{style:{...me.stageName,color:V?z.color:"#9A968C"},children:z.label}),V&&r.jsx("div",{style:me.stagePrompt,children:z.prompt})]}),je&&!ge&&r.jsx("span",{style:{...me.doneBadge,color:z.color,background:z.soft},children:"Done"})]}),V&&(()=>{var Ae,Le;const Qe=z.id==="W",zt=z.id==="D",It=_e.length>0&&_e.every(we=>we.done),kt=Qe?It:_e.length>0,gt=A.data_groups||[],jt=_e.filter(we=>!we.grp),u=J(A),ee=we=>r.jsxs("li",{style:me.noteItem,children:[r.jsx("span",{style:{...me.noteDot,background:z.color}}),(C==null?void 0:C.id)===we.id?r.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[r.jsx("input",{autoFocus:!0,value:C.text,onChange:Pe=>w(wt=>({...wt,text:Pe.target.value})),onKeyDown:Pe=>{Pe.key==="Enter"&&K(),Pe.key==="Escape"&&w(null)},style:{...me.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),r.jsx("button",{onClick:K,style:{...me.noteAddBtn,background:z.color,width:28,height:28},children:r.jsx(Ne,{size:12})}),r.jsx("button",{onClick:()=>w(null),style:{...me.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:r.jsx(Be,{size:12})})]}):r.jsx("span",{style:me.noteText,children:we.text}),(C==null?void 0:C.id)!==we.id&&r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>w({id:we.id,text:we.text}),style:me.ghostBtn,children:r.jsx(bt,{size:12})}),r.jsx("button",{onClick:()=>I(we.id),style:me.ghostBtn,children:r.jsx(Be,{size:12})})]})]},we.id);return r.jsxs(r.Fragment,{children:[zt?r.jsxs(r.Fragment,{children:[jt.length>0&&r.jsx("ul",{style:me.noteList,children:jt.map(ee)}),gt.map(we=>{const Pe=_e.filter(At=>At.grp===we.id),wt=T[we.id]!==!1;return r.jsxs("div",{style:{...me.groupBox,borderColor:`${z.color}55`},children:[r.jsxs("div",{style:me.groupHead,children:[r.jsx("button",{onClick:()=>v(At=>({...At,[we.id]:!wt})),style:me.groupCaret,children:wt?r.jsx(Yi,{size:15}):r.jsx(on,{size:15})}),A.source_type==="book"?r.jsx(Nc,{size:13,color:z.color}):r.jsx(my,{size:13,color:z.color}),(S==null?void 0:S.id)===we.id?r.jsx("input",{autoFocus:!0,value:S.label,onChange:At=>W(sn=>({...sn,label:At.target.value})),onKeyDown:At=>{At.key==="Enter"&&(ye(A,we.id,S.label.trim()||we.label),W(null)),At.key==="Escape"&&W(null)},onBlur:()=>{ye(A,we.id,S.label.trim()||we.label),W(null)},style:{...me.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}):r.jsx("span",{style:me.groupTitle,onClick:()=>W({id:we.id,label:we.label}),title:"Click to rename",children:we.label}),r.jsx("span",{style:me.groupCount,children:Pe.length}),r.jsx("button",{onClick:()=>G(A,we.id),style:me.ghostBtn,title:`Delete ${u.toLowerCase()}`,children:r.jsx(Be,{size:13})})]}),wt&&r.jsxs("div",{style:me.groupBody,children:[Pe.length>0&&r.jsx("ul",{style:me.noteList,children:Pe.map(ee)}),r.jsxs("div",{style:me.noteAddRow,children:[r.jsx("input",{placeholder:"Add a point…",value:p[we.id]??"",onChange:At=>h(sn=>({...sn,[we.id]:At.target.value})),onKeyDown:At=>At.key==="Enter"&&Y(A,we.id),style:me.noteInput}),r.jsx("button",{onClick:()=>Y(A,we.id),style:{...me.noteAddBtn,background:z.color},children:r.jsx(Ze,{size:14})})]})]})]},we.id)}),gt.length===0&&jt.length===0&&r.jsxs("div",{style:me.noNotes,children:["No ",u.toLowerCase(),"s yet — add one to start logging points."]}),r.jsxs("button",{onClick:()=>se(A),style:{...me.addGroupBtn,color:z.color,borderColor:`${z.color}80`},children:[r.jsx(Ze,{size:14})," Add ",u.toLowerCase()]})]}):r.jsxs(r.Fragment,{children:[_e.length>0&&r.jsx("ul",{style:me.noteList,children:_e.map(we=>r.jsxs("li",{style:me.noteItem,children:[Qe?r.jsx("button",{onClick:()=>pe(we.id),style:{...me.checkBox,...we.done?{background:z.color,borderColor:z.color}:{}},children:we.done&&r.jsx(Ne,{size:11,color:"#fff",strokeWidth:3})}):r.jsx("span",{style:{...me.noteDot,background:z.color}}),(C==null?void 0:C.id)===we.id?r.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[r.jsx("input",{autoFocus:!0,value:C.text,onChange:Pe=>w(wt=>({...wt,text:Pe.target.value})),onKeyDown:Pe=>{Pe.key==="Enter"&&K(),Pe.key==="Escape"&&w(null)},style:{...me.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),r.jsx("button",{onClick:K,style:{...me.noteAddBtn,background:z.color,width:28,height:28},children:r.jsx(Ne,{size:12})}),r.jsx("button",{onClick:()=>w(null),style:{...me.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:r.jsx(Be,{size:12})})]}):r.jsx("span",{style:{...me.noteText,...Qe&&we.done?{textDecoration:"line-through",color:"var(--text-3)"}:{}},children:we.text}),(C==null?void 0:C.id)!==we.id&&r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>w({id:we.id,text:we.text}),style:me.ghostBtn,children:r.jsx(bt,{size:12})}),r.jsx("button",{onClick:()=>I(we.id),style:me.ghostBtn,children:r.jsx(Be,{size:12})})]})]},we.id))}),_e.length===0&&r.jsx("div",{style:me.noNotes,children:Qe?"Add the steps to implement this — check each off as you do it.":`No notes yet — ${z.hint}`}),r.jsxs("div",{style:me.noteAddRow,children:[r.jsx("input",{placeholder:Qe?"Add a step to implement…":`Add a ${z.label} note…`,value:Xe,onChange:we=>E(Pe=>({...Pe,[A.id]:{...Pe[A.id],[z.id]:we.target.value}})),onKeyDown:we=>we.key==="Enter"&&B(A.id,z.id),style:me.noteInput}),r.jsx("button",{onClick:()=>B(A.id,z.id),style:{...me.noteAddBtn,background:z.color},children:r.jsx(Ze,{size:14})})]})]}),ge&&!((Ae=A.completed_stages)!=null&&Ae[z.id])&&r.jsxs(r.Fragment,{children:[Qe&&_e.length>0&&!It&&r.jsxs("div",{style:me.checklistHint,children:[_e.filter(we=>we.done).length,"/",_e.length," done — check all steps to complete Wisdom"]}),r.jsxs("button",{onClick:()=>O(A.id,z.id),disabled:!kt,style:{...me.advanceBtn,background:kt?z.color:"#C3BFB5",marginTop:10,cursor:kt?"pointer":"not-allowed"},children:[r.jsx(Ne,{size:14}),Qe?"Mark Wisdom complete":`Complete ${z.label} → ${(Le=yr[x+1])==null?void 0:Le.label}`]})]})]})})()]},z.id)}),A.stage==="W"&&((M=A.completed_stages)==null?void 0:M.W)&&r.jsxs("div",{style:me.wisdomDone,children:[r.jsx(Lr,{size:16,color:"#4C9A6B"})," Wisdom achieved — implemented in your life"]})]})]}),r.jsx(er,{toasts:le,onUndo:de,onDismiss:Te})]})}const me={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box",position:"relative"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},wisdomBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addSkillBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},filterBar:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16},filterBtn:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},layout:{display:"grid",gap:12,alignItems:"start"},cardList:{display:"grid",gap:10,alignContent:"start"},skillCard:{background:"var(--surface)",borderRadius:12,padding:"16px",border:"1.5px solid var(--border)",cursor:"pointer",boxShadow:"0 1px 2px rgba(0,0,0,0.04)",minWidth:0,overflow:"hidden",boxSizing:"border-box"},skillCardTop:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8,marginBottom:6},skillMeta:{display:"flex",alignItems:"center",gap:6,minWidth:0},pillarDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},srcLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},skillTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",marginBottom:12,lineHeight:1.3,wordBreak:"break-word"},cardTitle:{fontSize:13,fontWeight:700,marginBottom:10},track:{display:"flex",alignItems:"center",minWidth:0},trackItem:{display:"flex",alignItems:"center",minWidth:0},trackDot:{width:22,height:22,borderRadius:"50%",display:"grid",placeItems:"center",flexShrink:0},trackCurrent:{fontSize:9,fontWeight:800,color:"#fff"},trackLine:{flex:1,minWidth:8,height:3,borderRadius:2,margin:"0 2px"},stageTag:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,marginLeft:8,flexShrink:0,whiteSpace:"nowrap"},detail:{background:"var(--surface)",borderRadius:14,padding:"18px 16px",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",border:"1.5px solid var(--border)",alignSelf:"start"},detailHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16},detailTitle:{fontSize:18,fontWeight:700,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},backBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginRight:4},groupBox:{border:"1.5px solid var(--border)",borderRadius:9,marginBottom:8,overflow:"hidden",background:"var(--bg)"},groupHead:{display:"flex",alignItems:"center",gap:7,padding:"8px 10px"},groupCaret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},groupTitle:{flex:1,minWidth:0,fontSize:13,fontWeight:700,color:"var(--text)",cursor:"text",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},groupCount:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 7px",flexShrink:0},groupBody:{padding:"0 10px 10px 10px"},addGroupBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1.5px dashed",background:"none",padding:"9px 12px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:2},stageBlock:{border:"1.5px solid var(--border)",borderRadius:10,padding:"12px 13px",marginBottom:10},stageBlockHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:8},stageLetter:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",fontSize:13,fontWeight:800,flexShrink:0},stageName:{fontSize:13,fontWeight:700},stagePrompt:{fontSize:11.5,color:"var(--text-2)",marginTop:2,lineHeight:1.4},doneBadge:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10,marginLeft:"auto",flexShrink:0},noteList:{margin:"0 0 8px 0",padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6},noteItem:{display:"flex",alignItems:"flex-start",gap:8,fontSize:13,lineHeight:1.4},noteDot:{width:6,height:6,borderRadius:"50%",flexShrink:0,marginTop:5},checkBox:{width:18,height:18,borderRadius:5,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginTop:1,padding:0},checklistHint:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,marginTop:10,textAlign:"center"},noteText:{flex:1,color:"var(--text)"},noNotes:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",marginBottom:8},noteAddRow:{display:"flex",gap:6},noteInput:{flex:1,border:"1px solid var(--border)",borderRadius:7,padding:"7px 10px",fontSize:13,fontFamily:"inherit",outline:"none"},noteAddBtn:{width:32,height:32,border:"none",borderRadius:7,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},advanceBtn:{display:"flex",alignItems:"center",gap:8,border:"none",color:"#fff",padding:"10px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},wisdomDone:{display:"flex",alignItems:"center",gap:8,justifyContent:"center",fontSize:13.5,fontWeight:700,color:"#4C9A6B",padding:12,background:"rgba(76,154,107,0.08)",borderRadius:10,marginTop:4},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box",marginBottom:8},select:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:12.5,fontFamily:"inherit",flex:1},addRow:{display:"flex",gap:8,marginBottom:8},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{fontSize:13,color:"var(--text-3)",padding:"32px 12px",textAlign:"center"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.55)",zIndex:50,display:"grid",placeItems:"center"},celebBox:{background:"var(--surface)",borderRadius:20,padding:"40px 32px",textAlign:"center",maxWidth:320,boxShadow:"0 8px 40px rgba(0,0,0,0.18)"},celebEmoji:{fontSize:52,marginBottom:12},celebTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:8},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:"#4C9A6B",color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},ws=[{id:"aarti",title:"Aarti",html:`<h1>॥ गणपतीची आरती ॥</h1><br/>
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
      </div>`}];function z0(){const[e,t]=c.useState(()=>window.innerWidth<720);return c.useEffect(()=>{const n=()=>t(window.innerWidth<720);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}const I0=e=>new Promise((t,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:d}=i;l>d&&l>1400?(d=d*1400/l,l=1400):d>1400&&(l=l*1400/d,d=1400);const a=document.createElement("canvas");a.width=l,a.height=d,a.getContext("2d").drawImage(i,0,0,l,d),t(a.toDataURL("image/jpeg",.85))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)});function Au({base:e,count:t,images:n}){const o=n&&n.length?n:null,i=o?o.length:t,[s,l]=c.useState(0);if(!i)return null;const d=s%i,a=o?o[d]:`${e}${d+1}.jpg`;return r.jsxs("div",{style:{maxWidth:560,margin:"0 auto"},children:[r.jsx("div",{style:Me.carouselFrame,children:r.jsx("img",{src:a,alt:`Page ${d+1}`,style:Me.carouselImg})}),r.jsxs("div",{style:Me.carouselNav,children:[r.jsxs("button",{onClick:()=>l(g=>(g-1+i)%i),style:Me.carouselBtn,children:[r.jsx(An,{size:16})," Prev"]}),r.jsxs("span",{style:Me.carouselCount,children:[o?"":"Adhyay ",d+1," / ",i]}),r.jsxs("button",{onClick:()=>l(g=>(g+1)%i),style:Me.carouselBtn,children:["Next ",r.jsx(on,{size:16})]})]})]})}function T0(){const e=z0(),[t,n]=c.useState(!1),[o,i]=c.useState([]),[s,l]=c.useState("dss"),[d,a]=c.useState(!1),[g,m]=c.useState({title:"",type:"text",content:"",images:[]}),[y,f]=c.useState([]),[E,C]=c.useState(null),[w,D]=c.useState(!1),b=c.useRef(!1),p=c.useCallback(async()=>{try{const[Y,oe,K]=await Promise.all([_.getDecks(),_.getSetting("spiritual_order"),_.getSetting("spiritual_default")]);if(i(Y),Array.isArray(oe==null?void 0:oe.value)&&f(oe.value),K!=null&&K.value&&C(K.value),!b.current){b.current=!0;const pe=new Set([...ws.map(O=>O.id),...Y.map(O=>`deck-${O.id}`)]);K!=null&&K.value&&pe.has(K.value)&&l(K.value)}}catch{}},[]);c.useEffect(()=>{p()},[p]);const h=[...ws.map(Y=>({id:Y.id,title:Y.title})),...o.map(Y=>({id:`deck-${Y.id}`,title:Y.title}))],T=(()=>{if(!y.length)return h;const Y=new Map(h.map(K=>[K.id,K])),oe=[];return y.forEach(K=>{Y.has(K)&&(oe.push(Y.get(K)),Y.delete(K))}),Y.forEach(K=>oe.push(K)),oe})(),v=(Y,oe)=>{const K=T.map(O=>O.id),pe=Y+oe;pe<0||pe>=K.length||([K[Y],K[pe]]=[K[pe],K[Y]],f(K),_.setSetting("spiritual_order",K).catch(()=>{}))},S=Y=>{C(Y),_.setSetting("spiritual_default",Y).catch(()=>{})},W=s.startsWith("deck-")?Number(s.slice(5)):null,F=W!=null?o.find(Y=>Y.id===W):null,j=F?null:ws.find(Y=>Y.id===s)||(W==null?ws[0]:null),A=d?"New deck":F?F.title:(j==null?void 0:j.title)||"",ie=Y=>{l(Y),a(!1),e&&n(!1)},B=()=>{a(!0),m({title:"",type:"text",content:"",images:[]}),e&&n(!1)},I=async Y=>{const oe=Array.from(Y.target.files||[]),K=[];for(const pe of oe)try{K.push(await I0(pe))}catch{}m(pe=>({...pe,images:[...pe.images,...K]})),Y.target.value=""},J=Y=>m(oe=>({...oe,images:oe.images.filter((K,pe)=>pe!==Y)})),be=g.title.trim()&&(g.type==="text"?g.content.trim():g.images.length>0),se=async()=>{if(!be)return;const Y=await _.createDeck({title:g.title.trim(),type:g.type,content:g.type==="text"?g.content:"",images:g.type==="images"?g.images:[]});a(!1),await p(),l(`deck-${Y.id}`)},ye=async Y=>{await _.deleteDeck(Y),s===`deck-${Y}`&&l("dss"),p()},G={...Me.sidebar,...e?Me.sidebarOverlay:{},...e&&!t?Me.sidebarHidden:{}};return r.jsxs("div",{style:Me.shell,children:[r.jsx("style",{children:E0}),e&&t&&r.jsx("div",{style:Me.backdrop,onClick:()=>n(!1)}),r.jsxs("aside",{style:G,children:[r.jsxs("div",{style:Me.sideHead,children:[r.jsx("div",{style:Me.brand,children:"Anvil · Spiritual"}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:2},children:[r.jsx("button",{onClick:()=>D(Y=>!Y),style:Me.iconBtn,title:"Rearrange & set default",children:w?r.jsx(Ne,{size:16}):r.jsx(bt,{size:15})}),e&&r.jsx("button",{onClick:()=>n(!1),style:Me.iconBtn,children:r.jsx(Be,{size:17})})]})]}),w&&r.jsxs("div",{style:Me.editHint,children:["Arrows reorder · ",r.jsx($i,{size:11,style:{verticalAlign:"-1px"}})," sets what opens by default"]}),r.jsxs("div",{style:Me.sideScroll,children:[T.map((Y,oe)=>{const K=Y.id===s&&!d,pe=E===Y.id;return r.jsxs("div",{style:Me.sideRow,children:[r.jsxs("button",{onClick:()=>ie(Y.id),style:{...Me.sideItem,flex:1,...K?Me.sideItemOn:{}},children:[Y.title,pe&&r.jsx("span",{style:Me.defStar,title:"Opens by default",children:" ★"})]}),w&&r.jsxs("div",{style:Me.editControls,children:[r.jsx("button",{onClick:()=>S(Y.id),title:"Set as default",style:{...Me.miniBtn,...pe?{color:"#8268B0"}:{}},children:r.jsx($i,{size:13})}),r.jsx("button",{onClick:()=>v(oe,-1),disabled:oe===0,style:{...Me.miniBtn,opacity:oe===0?.3:1},children:r.jsx(Sm,{size:13})}),r.jsx("button",{onClick:()=>v(oe,1),disabled:oe===T.length-1,style:{...Me.miniBtn,opacity:oe===T.length-1?.3:1},children:r.jsx(Yi,{size:13})})]})]},Y.id)}),r.jsxs("button",{onClick:B,style:{...Me.newDeckBtn,...d?Me.sideItemOn:{}},children:[r.jsx(Ze,{size:14})," New deck"]})]})]}),r.jsxs("main",{style:Me.main,children:[e&&r.jsxs("button",{onClick:()=>n(!0),style:Me.hamburger,children:[r.jsx(Gc,{size:17}),r.jsx("span",{style:Me.hamburgerLabel,children:A})]}),d?r.jsxs("div",{style:Me.contentWrap,children:[r.jsx("div",{style:Me.formTitle,children:"Create a deck"}),r.jsx("input",{placeholder:"Deck title (e.g. Vishnu Sahasranamam)",value:g.title,onChange:Y=>m({...g,title:Y.target.value}),style:Me.input}),r.jsxs("div",{style:Me.typeRow,children:[r.jsxs("button",{onClick:()=>m({...g,type:"text"}),style:{...Me.typeBtn,...g.type==="text"?Me.typeOn:{}},children:[r.jsx(Oc,{size:15})," Text"]}),r.jsxs("button",{onClick:()=>m({...g,type:"images"}),style:{...Me.typeBtn,...g.type==="images"?Me.typeOn:{}},children:[r.jsx(cy,{size:15})," Images"]})]}),g.type==="text"?r.jsx("textarea",{placeholder:"Paste or write the text (verses, chant, reflection)…",value:g.content,onChange:Y=>m({...g,content:Y.target.value}),style:Me.textarea}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:Me.imgGrid,children:[g.images.map((Y,oe)=>r.jsxs("div",{style:Me.imgThumbWrap,children:[r.jsx("img",{src:Y,alt:"",style:Me.imgThumb}),r.jsx("button",{onClick:()=>J(oe),style:Me.imgDel,children:r.jsx(Be,{size:12})})]},oe)),r.jsxs("label",{style:Me.imgAdd,children:[r.jsx(Nl,{size:20}),r.jsx("span",{style:{fontSize:11},children:"Add images"}),r.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:I,style:{display:"none"}})]})]}),r.jsx("div",{style:Me.hint,children:"Images show as a swipeable carousel, in the order added."})]}),r.jsxs("div",{style:Me.formActions,children:[r.jsxs("button",{onClick:()=>a(!1),style:Me.cancelBtn,children:[r.jsx(Be,{size:14})," Cancel"]}),r.jsxs("button",{onClick:se,disabled:!be,style:{...Me.saveBtn,...be?{}:Me.saveDisabled},children:[r.jsx(Ne,{size:15})," Create deck"]})]})]}):F?r.jsxs("div",{style:Me.contentWrap,children:[r.jsxs("div",{style:Me.deckHead,children:[r.jsx("h2",{style:Me.deckTitle,children:F.title}),r.jsx("button",{onClick:()=>ye(F.id),style:Me.deckDel,title:"Delete deck",children:r.jsx(Qc,{size:15})})]}),F.type==="images"?r.jsx(Au,{images:F.images}):r.jsx("div",{style:Me.deckText,children:F.content})]}):r.jsxs("div",{style:Me.contentWrap,children:[(j==null?void 0:j.youtube)&&r.jsx("div",{style:Me.videoFrame,children:r.jsx("iframe",{src:`https://www.youtube.com/embed/${j.youtube}`,title:j.title,style:Me.video,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},j.youtube)}),j!=null&&j.carousel?r.jsx(Au,{base:j.imageBase,count:j.carousel}):r.jsx("div",{className:"spiritual-content",dangerouslySetInnerHTML:{__html:(j==null?void 0:j.html)||""}})]})]})]})}const E0=`
.spiritual-content { font-family: 'Inter', system-ui, sans-serif; color: var(--text); line-height: 1.9; font-size: 16px; text-align: center; }
.spiritual-content h1 { font-family: 'Fraunces', Georgia, serif; font-size: 24px; color: #8268B0; margin: 8px 0 18px; letter-spacing: -0.01em; }
.spiritual-content h2 { font-family: 'Fraunces', Georgia, serif; font-size: 18px; color: #7A5EA8; margin: 20px 0 8px; }
.spiritual-content h3 { font-size: 15px; color: var(--text-3); text-transform: uppercase; letter-spacing: 0.06em; margin: 18px 0 6px; }
.spiritual-content b { color: #8268B0; }
.spiritual-content div { text-align: center; }
`,Me={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:240,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.15)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.35)",zIndex:20},sideHead:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 14px 12px"},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700},sideScroll:{flex:1,overflowY:"auto",padding:"0 8px 16px"},sideItem:{display:"block",width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text-2)",textAlign:"left",marginBottom:2},sideItemOn:{background:"rgba(130,104,176,0.12)",color:"#8268B0",fontWeight:700},sideRow:{display:"flex",alignItems:"center",gap:2},editControls:{display:"flex",alignItems:"center",gap:1,flexShrink:0},miniBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:5},defStar:{color:"#C9A227",fontWeight:700},editHint:{fontSize:10.5,color:"var(--text-3)",padding:"0 14px 8px",lineHeight:1.4},newDeckBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",padding:"9px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,color:"var(--text-2)",marginTop:6},main:{flex:1,padding:"26px 22px",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:220},contentWrap:{background:"var(--surface)",borderRadius:14,padding:"26px 28px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",maxWidth:760,margin:"0 auto"},videoFrame:{position:"relative",width:"100%",maxWidth:600,margin:"0 auto 22px",aspectRatio:"16 / 9",borderRadius:12,overflow:"hidden",background:"#000"},video:{position:"absolute",inset:0,width:"100%",height:"100%",border:"none"},carouselFrame:{background:"var(--surface-2)",borderRadius:12,padding:8,border:"1px solid var(--border)"},carouselImg:{width:"100%",borderRadius:8,display:"block"},carouselNav:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:14},carouselBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},carouselCount:{fontSize:13,fontWeight:700,color:"#8268B0",fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"none",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,color:"var(--text-2)"},deckHead:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,marginBottom:16,borderBottom:"1px solid var(--border)",paddingBottom:12},deckTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",margin:0,color:"#8268B0"},deckDel:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",cursor:"pointer",display:"grid",placeItems:"center",padding:7,borderRadius:8,flexShrink:0},deckText:{fontSize:16,lineHeight:1.9,whiteSpace:"pre-wrap",color:"var(--text)",textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},formTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},typeRow:{display:"flex",gap:8,marginTop:12},typeBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},typeOn:{background:"#8268B0",color:"#fff",borderColor:"#8268B0"},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:200,resize:"vertical",lineHeight:1.7,marginTop:12},imgGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(90px, 1fr))",gap:8,marginTop:12},imgThumbWrap:{position:"relative",aspectRatio:"1",borderRadius:8,overflow:"hidden",border:"1px solid var(--border)"},imgThumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},imgDel:{position:"absolute",top:3,right:3,border:"none",background:"rgba(0,0,0,0.6)",color:"#fff",borderRadius:"50%",width:18,height:18,cursor:"pointer",display:"grid",placeItems:"center",padding:0},imgAdd:{aspectRatio:"1",border:"1px dashed var(--border)",borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4,cursor:"pointer",color:"var(--text-3)"},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:8},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"#8268B0",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"}},Pr={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},Ru=Object.keys(Pr),B0=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],D0=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],A0=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},R0=(e,t)=>`${D0[t-1]} ${e}`,F0=(e,t)=>{const n=new Date(e,t,0).getDate();return Array.from({length:n},(o,i)=>`${e}-${String(t).padStart(2,"0")}-${String(i+1).padStart(2,"0")}`)},M0=(e,t)=>{const n=new Date(e,t-1,1).getDay();return n===0?6:n-1};function W0(){const e=A0(),[t,n]=c.useState(new Date().getFullYear()),[o,i]=c.useState(new Date().getMonth()+1),[s,l]=c.useState([]),[d,a]=c.useState([]),[g,m]=c.useState({}),[y,f]=c.useState(null),[E,C]=c.useState(!1),[w,D]=c.useState(!1),[b,p]=c.useState({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:e}),[h,T]=c.useState(null),v=c.useCallback(async()=>{const[O,$,P]=await Promise.all([_.getTopics(),_.getDueToday(),_.getCalendar(t,o)]);l(O),a($),m(P)},[t,o]);c.useEffect(()=>{v()},[v]);const S=async O=>{await _.toggleReviewDone(O),v()},W=async()=>{const O=b.intervals.split(",").map($=>parseInt($.trim(),10)).filter($=>!isNaN($));!b.topic.trim()||O.length===0||(await _.createTopic({pillar:b.pillar,topic:b.topic.trim(),intervals:O,learned_date:b.learned_date||e}),p({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:e}),D(!1),v())},{deleteItem:F,toasts:j,handleUndo:A,handleDismiss:ie}=Jt(_.deleteTopic,_.restoreTopic,v),B=(O,$)=>F(O,$),I=O=>T({id:O.id,topic:O.topic,pillar:O.pillar,intervals:(O.intervals||[]).join(", "),learned_date:O.learned_date}),J=async()=>{if(!h)return;const O=h.intervals.split(",").map($=>parseInt($.trim(),10)).filter($=>!isNaN($)&&$>=0);!h.topic.trim()||O.length===0||(await _.updateTopic(h.id,{topic:h.topic.trim(),pillar:h.pillar,learned_date:h.learned_date,intervals:O}),T(null),v())},be=()=>{o===1?(n(O=>O-1),i(12)):i(O=>O-1),f(null)},se=()=>{o===12?(n(O=>O+1),i(1)):i(O=>O+1),f(null)},ye=s.filter(O=>!O.cemented),G=s.filter(O=>O.cemented),Y=F0(t,o),oe=M0(t,o),K=c.useMemo(()=>{const O={};return s.forEach($=>$.reviews.forEach(P=>{P.done||(O[P.due_date]=O[P.due_date]||[]).push({topic:$.topic,pillar:$.pillar,stage:P.stage})})),O},[s]),pe=y?s.flatMap(O=>O.reviews.filter($=>$.due_date===y).map($=>({...$,topic:O.topic,pillar:O.pillar,total:O.reviews.length}))):[];return r.jsxs("div",{style:Ce.page,children:[r.jsxs("div",{style:Ce.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:Ce.eyebrow,children:"Anvil · Revision"}),r.jsx("h1",{style:Ce.h1,children:"Spaced Repetition"})]}),r.jsxs("button",{onClick:()=>D(!0),style:Ce.addBtn,children:[r.jsx(Ze,{size:15})," Add topic"]})]}),w&&r.jsxs("div",{style:Ce.addBox,children:[r.jsx("input",{autoFocus:!0,placeholder:"What did you learn?",value:b.topic,onChange:O=>p($=>({...$,topic:O.target.value})),onKeyDown:O=>O.key==="Enter"&&W(),style:Ce.input}),r.jsxs("div",{style:Ce.addRow,children:[r.jsx("select",{value:b.pillar,onChange:O=>p($=>({...$,pillar:O.target.value})),style:Ce.select,children:Ru.map(O=>r.jsx("option",{children:O},O))}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),r.jsx("input",{type:"date",value:b.learned_date,onChange:O=>p($=>({...$,learned_date:O.target.value})),style:{...Ce.select,fontSize:13}})]}),r.jsx("div",{style:{flex:1,minWidth:0},children:r.jsx("input",{value:b.intervals,onChange:O=>p($=>({...$,intervals:O.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:Ce.input})})]}),r.jsxs("div",{style:Ce.addRow,children:[r.jsxs("button",{onClick:W,style:Ce.saveBtn,children:[r.jsx(Ne,{size:14})," Save"]}),r.jsxs("button",{onClick:()=>D(!1),style:Ce.cancelBtn,children:[r.jsx(Be,{size:14})," Cancel"]})]})]}),d.length>0&&r.jsxs("div",{style:Ce.section,children:[r.jsxs("div",{style:Ce.sectionTitle,children:[r.jsx(Rm,{size:15,color:"#C2536B"}),"Due Today",r.jsx("span",{style:Ce.badge,children:d.length})]}),d.map(O=>{var P,le;const $=((P=Pr[O.pillar])==null?void 0:P.dot)||"#9A968C";return r.jsxs("div",{style:{...Ce.reviewCard,borderLeft:`3px solid ${$}`,...O.is_missed?{opacity:.85}:{}},children:[r.jsx("button",{onClick:()=>S(O.review_id),style:{...Ce.checkbox,...O.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:O.done&&r.jsx(Ne,{size:12,color:"#fff",strokeWidth:3})}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{style:Ce.reviewTopic,children:O.topic}),r.jsxs("div",{style:Ce.reviewMeta,children:[r.jsxs("span",{style:{...Ce.stageTag,background:((le=Pr[O.pillar])==null?void 0:le.soft)||"rgba(0,0,0,0.05)",color:$},children:["Review ",O.stage,"/",O.total_stages]}),O.is_missed&&r.jsxs("span",{style:Ce.missedTag,children:["missed · ",O.due_date]})]})]})]},O.review_id)})]}),r.jsxs("div",{style:Ce.section,children:[r.jsxs("div",{style:Ce.sectionTitle,children:["Active Topics ",r.jsx("span",{style:Ce.badge,children:ye.length})]}),ye.length===0&&r.jsx("div",{style:Ce.empty,children:"No active topics. Add something you learned today."}),ye.map(O=>{var de,Te;const $=((de=Pr[O.pillar])==null?void 0:de.dot)||"#9A968C",P=((Te=Pr[O.pillar])==null?void 0:Te.soft)||"rgba(0,0,0,0.05)",le=O.reviews.filter(Q=>Q.done).length;return(h==null?void 0:h.id)===O.id?r.jsxs("div",{style:Ce.addBox,children:[r.jsx("input",{autoFocus:!0,value:h.topic,onChange:Q=>T(ne=>({...ne,topic:Q.target.value})),onKeyDown:Q=>Q.key==="Enter"&&J(),placeholder:"Topic",style:Ce.input}),r.jsxs("div",{style:Ce.addRow,children:[r.jsx("select",{value:h.pillar,onChange:Q=>T(ne=>({...ne,pillar:Q.target.value})),style:Ce.select,children:Ru.map(Q=>r.jsx("option",{children:Q},Q))}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),r.jsx("input",{type:"date",value:h.learned_date,onChange:Q=>T(ne=>({...ne,learned_date:Q.target.value})),style:{...Ce.select,fontSize:13}})]}),r.jsx("div",{style:{flex:1,minWidth:0},children:r.jsx("input",{value:h.intervals,onChange:Q=>T(ne=>({...ne,intervals:Q.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:Ce.input})})]}),r.jsx("div",{style:Ce.editHint,children:"Changing the date or intervals reschedules the reviews (completed steps are kept where they still apply)."}),r.jsxs("div",{style:Ce.addRow,children:[r.jsxs("button",{onClick:J,style:Ce.saveBtn,children:[r.jsx(Ne,{size:14})," Save plan"]}),r.jsxs("button",{onClick:()=>T(null),style:Ce.cancelBtn,children:[r.jsx(Be,{size:14})," Cancel"]})]})]},O.id):r.jsxs("div",{style:Ce.topicCard,children:[r.jsxs("div",{style:Ce.topicHead,children:[r.jsx("span",{style:{...Ce.dot,background:$}}),r.jsx("span",{style:Ce.topicName,children:O.topic}),r.jsx("span",{style:Ce.topicPillar,children:O.pillar}),r.jsxs("span",{style:Ce.topicProgress,children:[le,"/",O.reviews.length," done"]}),r.jsx("button",{onClick:()=>I(O),style:Ce.ghostBtn,title:"Edit plan",children:r.jsx(bt,{size:12})}),r.jsx("button",{onClick:()=>B(O.id,O.topic),style:Ce.ghostBtn,title:"Delete",children:r.jsx(Be,{size:13})})]}),r.jsxs("div",{style:Ce.reviewDots,children:[O.reviews.map(Q=>{Q.due_date<e;const ne=Q.due_date===e;return r.jsx("button",{onClick:()=>S(Q.id),title:`Review ${Q.stage} · ${Q.due_date}${Q.done?" · Done":""}`,style:{...Ce.reviewDot,background:Q.done?$:ne?P:"var(--hover)",border:`2px solid ${Q.done||ne?$:"var(--border)"}`,color:Q.done?"#fff":$},children:Q.stage},Q.id)}),r.jsxs("span",{style:Ce.learnedDate,children:["Learned ",O.learned_date]})]})]},O.id)})]}),G.length>0&&r.jsxs("div",{style:Ce.section,children:[r.jsxs("button",{onClick:()=>C(O=>!O),style:Ce.cementedToggle,children:[E?r.jsx(Yi,{size:15}):r.jsx(on,{size:15}),r.jsx(Lr,{size:14,color:"#C9A227"}),"Cemented",r.jsx("span",{style:{...Ce.badge,background:"rgba(201,162,39,0.12)",color:"#8A6E1A"},children:G.length})]}),E&&G.map(O=>{var P;const $=((P=Pr[O.pillar])==null?void 0:P.dot)||"#9A968C";return r.jsx("div",{style:{...Ce.topicCard,opacity:.75},children:r.jsxs("div",{style:Ce.topicHead,children:[r.jsx("span",{style:{...Ce.dot,background:$}}),r.jsx("span",{style:Ce.topicName,children:O.topic}),r.jsx("span",{style:Ce.topicPillar,children:O.pillar}),r.jsx(Lr,{size:13,color:"#C9A227",style:{marginLeft:"auto"}})]})},O.id)})]}),r.jsxs("div",{style:Ce.calCard,children:[r.jsxs("div",{style:Ce.calHead,children:[r.jsx("button",{onClick:be,style:Ce.calNav,children:"‹"}),r.jsxs("div",{style:Ce.calTitle,children:[R0(t,o)," · Review Calendar"]}),r.jsx("button",{onClick:se,style:Ce.calNav,children:"›"})]}),r.jsx("div",{style:Ce.calDow,children:B0.map(O=>r.jsx("div",{style:Ce.calDowCell,children:O},O))}),r.jsxs("div",{style:Ce.calGrid,children:[Array.from({length:oe}).map((O,$)=>r.jsx("div",{},`p${$}`)),Y.map((O,$)=>{const P=K[O]||[],le=O===e,de=O===y,Te=O<e,Q=de?"#fff":le?"var(--text)":Te?"var(--text-2)":"var(--text-3)";return r.jsxs("button",{onClick:()=>f(de?null:O),style:{...Ce.calDay,background:de?"var(--accent-strong)":le?"var(--hover)":"var(--surface)",borderColor:le||de?"var(--accent-strong)":"var(--border)"},children:[r.jsx("span",{style:{...Ce.calDayNum,color:Q,fontWeight:le||de?700:600},children:$+1}),P.slice(0,2).map((ne,R)=>{var U;return r.jsxs("span",{title:ne.topic,style:{...Ce.calItem,color:de?"#fff":((U=Pr[ne.pillar])==null?void 0:U.dot)||"var(--text-2)"},children:[R+1,". ",ne.topic]},R)}),P.length>2&&r.jsxs("span",{style:{...Ce.calMore,color:de?"#fff":"var(--text-3)"},children:["+",P.length-2," more"]})]},O)})]}),y&&r.jsxs("div",{style:Ce.dayDetail,children:[r.jsxs("div",{style:Ce.dayDetailTitle,children:["Reviews for ",y]}),pe.length===0?r.jsx("div",{style:Ce.empty,children:"No reviews scheduled for this day."}):pe.map((O,$)=>{var le,de;const P=((le=Pr[O.pillar])==null?void 0:le.dot)||"#9A968C";return r.jsxs("div",{style:{...Ce.reviewCard,borderLeft:`3px solid ${P}`},children:[r.jsx("button",{onClick:()=>S(O.id),style:{...Ce.checkbox,...O.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:O.done&&r.jsx(Ne,{size:12,color:"#fff",strokeWidth:3})}),r.jsxs("div",{children:[r.jsxs("div",{style:Ce.reviewTopic,children:[$+1,". ",O.topic]}),r.jsxs("span",{style:{...Ce.stageTag,background:((de=Pr[O.pillar])==null?void 0:de.soft)||"rgba(0,0,0,0.05)",color:P},children:["Review ",O.stage,"/",O.total]})]})]},O.id)})]})]}),r.jsx(er,{toasts:j,onUndo:A,onDismiss:ie})]})}const Ce={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},addBox:{background:"var(--surface)",borderRadius:12,padding:16,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},addRow:{display:"flex",gap:8,alignItems:"center"},editHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",minWidth:0},select:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 10px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},section:{marginBottom:20},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},reviewCard:{display:"flex",alignItems:"center",gap:12,background:"var(--surface)",borderRadius:10,padding:"12px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},checkbox:{width:22,height:22,borderRadius:6,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,padding:0},reviewTopic:{fontSize:13.5,fontWeight:600,marginBottom:4},reviewMeta:{display:"flex",alignItems:"center",gap:8},stageTag:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10},missedTag:{fontSize:11,color:"#C2536B",fontWeight:600},topicCard:{background:"var(--surface)",borderRadius:12,padding:"13px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},topicHead:{display:"flex",alignItems:"center",gap:8,marginBottom:10},dot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},topicName:{fontSize:14,fontWeight:600,flex:1},topicPillar:{fontSize:11,color:"var(--text-3)",fontWeight:500},topicProgress:{fontSize:11,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:10},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},reviewDots:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},reviewDot:{width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",fontSize:11,fontWeight:700,padding:0},learnedDate:{fontSize:11,color:"var(--text-3)",marginLeft:"auto"},cementedToggle:{display:"flex",alignItems:"center",gap:8,border:"none",background:"none",cursor:"pointer",fontSize:13,fontWeight:700,color:"var(--text-2)",padding:"4px 0",fontFamily:"inherit",marginBottom:8},empty:{fontSize:13,color:"var(--text-3)",padding:"16px 0",textAlign:"center"},calCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{border:"none",background:"none",fontSize:20,cursor:"pointer",color:"var(--text-2)",padding:"0 6px",lineHeight:1},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4},calDay:{minHeight:62,border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,cursor:"pointer",fontFamily:"inherit",display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"flex-start",gap:1,position:"relative",padding:"3px 4px",overflow:"hidden",textAlign:"left"},calDayNum:{fontSize:11,lineHeight:1.1,marginBottom:1},calItem:{fontSize:8.5,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",lineHeight:1.3,textAlign:"left"},calMore:{fontSize:8,fontWeight:700,opacity:.85,lineHeight:1.2},dayDetail:{marginTop:16,paddingTop:16,borderTop:"1px solid var(--border)"},dayDetailTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10}},Ss=[{id:1,title:"Regular Habits",cards:[{id:1,text:"1. I always do everything I need to do, when I need to do it. "},{id:2,text:"2. I never argue or let my emotions work against me. "},{id:3,text:"3. I have a good memory. I easily and automatically remember any name or anything that is important to me. "},{id:4,text:"4. I eat only what I should. "},{id:5,text:"5. I am a good listener. I hear everything that is said. I am attentive, interested, and aware of everything that is going on around me. "},{id:6,text:"6. I have the courage to state my opinions. I take responsibility for myself and everything I say and do."},{id:7,text:"7. I never spend more than I earn. I am financially responsible, both for my present and for my future."},{id:8,text:"8. I set goals and I follow them. I set my sights, take the appropriate action, and achieve my goals."},{id:9,text:"9. I spend time with my family and my loved ones. I enjoy sharing their lives with mine and my life with theirs."}]},{id:2,title:"Motivational",cards:[{id:1,text:"1. I can do anything I believe I can do. I’ve got it and every day I get more of it. I have talent, skills, and ability"},{id:2,text:"2. I set goals and I reach them. I know what I want out of life. I go after it and I get it. "},{id:3,text:"3. People like me, and I feel good about myself. I have a sense of pride in whoa am and I believe in myself. Nothing seems to stop me. I have a lot of determination. "},{id:4,text:"4. I turn problems into advantages. I find possibilities in things that other people never give a chance."},{id:5,text:"5. I have a lot of energy––I am very alive. I enjoy life and I can tell it and so can others"},{id:6,text:"6. I keep myself up, looking ahead, and liking it. I know that I can accomplish anything I choose, and I refuse to let anything negative hold me back or stand in my way. I am not afraid of anything or anyone. I have strength, power, conviction, and confidence. "},{id:7,text:"7. I like challenges and I meet them head on, face to face––today especially. I am on top of the world and I’m going for it. "},{id:8,text:"8. I have a clear picture in my mind of what I want. I can see it in front of me. "},{id:9,text:"9. I know what I want and I know how to get it. I know that it’s all up to me and I know I can do it. Roadblocks don’t bother me. They just mean that I am alive and running, and I’m not going to stand still for anything. "},{id:10,text:"10. I trust myself I’ve got what it takes––plenty of it––and I know how to use it. "},{id:11,text:"11. Today, more than ever. Today I am unstoppable. I’ve got myself together and I’m getting more together every day. And today––look out world, here I come. "},{id:12,text:"12. Limitations? I don’t even recognize them as limitations. There is no challenge I can’t conquer; there is no wall I can’t climb over. "},{id:13,text:"13. There is no problem I can’t defeat or turn around and make it work for me. I stand tall. I am honest and sincere. I like to deal with people and they like me. "},{id:14,text:"14. I think well; I think clearly. I am organized; I am in control of myself, and everything about me. I call my shots and no one has to call them for me. I never blame anyone else for the circumstances of my life. "},{id:15,text:"15. I accept my failings and move past them as easily as I accept the rewards for my victories. I never demand perfection of myself, but I expect the very best of what I have to give––and that’s what I get. I never give myself excuses. "},{id:16,text:"16. I get things done on time and in the right way. Today I have the inner strength to do more than ever. I am an exceptional human being. "},{id:17,text:"17. My goals and my incredible belief in myself turn my goals into reality. I have the power to live my dreams."},{id:18,text:"18.  I believe in them like I believe in myself. And that belief is so strong that there is nothing that diminishes my undefeatable spirit. "}]},{id:3,title:"Organized planning",cards:[{id:1,text:"1. I am organized and in control of my life. I am in control of myself, my thoughts, my time, my actions, and my future. "},{id:2,text:"2. I know what to do and when to do it, and I do everything I need to do, when I need to do it. "},{id:3,text:"3. I program my mind to make the maximum use of my time. I am in control of my time and how to use it. I like being organized, efficient, and on top of things."},{id:4,text:"4. Controlling my time keeps me that way. "},{id:5,text:"5. I never waste time––I always “plan” time. And because I plan my time, I always have time to do the things I choose to do. "},{id:6,text:"6. Each day I become more organized and in control of all areas of my life––at home, at work, in my mind and in my thoughts, in everything that I do. "},{id:7,text:"7. I am very well organized. Each night I make a list of things I need to do the next day. I set my priorities and I follow them. "},{id:8,text:"8. I am always on time. I am always right where I need to be, exactly when I need to be there. "},{id:9,text:"9. Being on time is easy for me and the more I control my time and the more organized I become, the easier it is. "},{id:10,text:"10. I am in control of my feelings, my emotions, my attitudes, and my needs. I control them; they do not control me. "},{id:11,text:"11. I have the winning vote in the outcome of my own actions. And I choose to live my life by choice, not chance. Therefore, I take the time to take control."},{id:12,text:"12. I have an organized and orderly mind. Because I think in an organized way, I conduct my life in an organized manner. "},{id:13,text:"13. I think in the most positive and productive way at all times and in all things. The way I think is the way I live––and I think “right.” "},{id:14,text:"14. I am the director of my destiny. I know where I am going and I know why I am going there. My earthly life is in my hands and in my control. "},{id:15,text:"15. I control my goals and the achievement of my goals. I organize my goals by writing each of them down, along with the steps I need to reach them. One of the reasons for my success is that my goals are clearly defined and organized."},{id:16,text:"16. I am in complete control of what I think and how I think. Therefore, I choose to think only those thoughts which help me and which are of genuine benefit to me."}]},{id:4,title:"Solving Problems",cards:[{id:1,text:"1. I’m good at solving problems. I like challenges and I meet them head on. "},{id:2,text:"2. Problems are my teachers. They help me to learn and grow. Without them, I would be going nowhere. With them, I am moving forward in the direction of my own goals. "},{id:3,text:"3. There is no problem which I cannot conquer. I am strong in mind, body, and spirit. My will, my strength, and my determination are always greater than any problem I face."},{id:4,text:"4. When I meet a new problem, I do not see the problem as my enemy. I know that finding the solution to the problem will move me forward in my own personal growth."},{id:5,text:"5. Because I know that problems are a key ingredient in my spiritual and mental education and preparation, I recognize that all problems are important to me. "},{id:6,text:"6. I do not fear problems, I solve them. I do not ignore problems, I confront them. I do not avoid problems, I conquer them. "},{id:7,text:"7. I know that every problem holds within itself the keys to its own solution. Therefore, the better I understand the problem, the clearer I am able to see its solution. "},{id:8,text:"8. Having problems is not a problem for me. I am confident, self-assured, positive, and determined. I always know that I am going to overcome any problem I encounter––and I always do. "},{id:9,text:"9. I am good at breaking large obstacles down into smaller pieces that are easier to handle. And I never make any problem appear to be larger than it actually is. "},{id:10,text:"10. I never worry. I turn “worry time” into positive, constructive, “solution time.” I keep my mind alert and open to all solutions—and solutions come quickly and easily to me. "},{id:11,text:"11. I have learned to recognize that many problems carry with them benefits and potential opportunities which would not have presented themselves had the problem not occurred in the first place. "},{id:12,text:"12. I do not seek to live a life which is free from all problems. Instead, I choose to live a life of finding solutions and enjoying the benefits which those solutions create."},{id:13,text:"13. Challenge, conquer, solution, and win are words which I live by daily. Challenges are opportunities. Conquering them is the inevitable outcome. "},{id:14,text:"14. “Solutions” are the stepping stones to my success, and “Winning” is my way of life."}]},{id:5,title:"Self Esteem",cards:[{id:1,text:"1. I really am very special. I like who I am and I feel good about myself. "},{id:2,text:"2. Although I always work to improve myself and I get better every day, I like who I am today. And tomorrow, when I’m even better, I’ll like myself then, too. "},{id:3,text:"3. It’s true that there really is no one else like me in the entire world. There never was another me before, and there will never be another me again. "},{id:4,text:"4. I am unique––from the top of my head to the bottom of my feet. In some ways I may look and act and sound like some others––but I am not them. I am me."},{id:5,text:"5. I wanted to be somebody––and now I know I am I would rather be me than anyone else in the world. "},{id:6,text:"6. I like how I feel and I like how I think and I like how I do things. I approve of me and I approve of who I am."},{id:7,text:"7. I have many beautiful qualities about me. I have talents and skills and abilities. I even have talents that I don’t even know about yet. And I am discovering new talents inside myself all the time. "},{id:8,text:"8. I am positive. I am confident. I radiate good things. If you look closely, you can even see a glow around me."},{id:9,text:"9. I am full of life. I like life and I’m glad to be alive. I am a very special person, living at a very special time. "},{id:10,text:"10. I am intelligent. My mind is quick and alert and clever and fun. I think good thoughts, and my mind makes things work right for me. "},{id:11,text:"11. I have a lot of energy and enthusiasm and vitality. I am exciting and I really enjoy being me. "},{id:12,text:"12. I like to be around other people and other people like to be around me. People like to hear what I have to say and know what I have to think. "},{id:13,text:"13. I smile a lot. I am happy on the inside and I am happy on the outside. "},{id:14,text:"14. I am interested in many things. I appreciate all the blessings I have, and the things that I learn, and all the things I will learn today and tomorrow and forever––just as long as I am. "},{id:15,text:"15. I am warm, sincere, honest, and genuine. I am all of these things and more. And all of these things are me. I like who I am, and I’m glad to be me."}]},{id:6,title:"Self-Responsibility",cards:[{id:1,text:"1. I take full responsibility for everything about me––even the thoughts that I think. I am in control of the vast resources of my own mind."},{id:2,text:"2. I alone am responsible for what I do and what I tell myself about me. No one can share this responsibility with me. "},{id:3,text:"3. I also allow others to accept their responsibilities far themselves and I do not try to accept their responsibilities for them. "},{id:4,text:"4. I enjoy being responsible. It puts me in charge of being me––and that’s a challenge I enjoy. "},{id:5,text:"5. I allow no one else, at any time, to assume control or responsibility over my life or over anything that I do. My responsibility to others is an extension of my own responsibility to myself. "},{id:6,text:"6. I choose to leave nothing about me up to chance. When it comes to me––and anything in my life––I choose to CHOOSE. "},{id:7,text:"7. My choices are mine alone to make for myself. I do not, at any time, allow anyone else to make my choices for me. And I accept full responsibility for every choice and decision I make. "},{id:8,text:"8. I always meet all of the obligations which I accept. And I accept no obligations which I will not meet. "},{id:9,text:"9. I am trustworthy. I can be counted on. I have accepted winning responsibility for myself––and I always live up to the responsibilities I accept. "},{id:10,text:"10. There is no they on whom I lay the blame, or with whom I share my own personal responsibilities. I have learned the great secret of mastering my own destiny. I have learned that “they” is “me.” "},{id:11,text:"11. I have no need to make excuses and no one needs to carry my responsibility for me. I gladly carry my own weight––and I carry it well. "},{id:12,text:"12. Each day I acknowledge and accept the responsibility––not only for my own actions––but also for my emotions, my thoughts, and my attitude. "},{id:13,text:"13. I accept the responsibility for living my life in a way which creates my strengths, my happiness, my positive, healthy beliefs, and for my past, my present, and my future."}]},{id:7,title:"Freedom from worry",cards:[{id:1,text:"1. I never worry. Instead of worrying, I find solutions and I act on them. "},{id:2,text:"2. My mind is constantly in tune with the positive. It is bright, cheerful, enthusiastic, and full of good, positive thoughts and ideas. "},{id:3,text:"3. I am able to relax easily and comfortably in my body and in my mind. I am calm, confident, and self-assured. "},{id:4,text:"4. My mind is orderly and well-organized. I consciously choose what I think and I always choose those thoughts which are the most positive and beneficial for me. "},{id:5,text:"5. All of my thoughts create healthiness within me. My mind dwells only on those thoughts which create more harmony, balance, and well-being within me and in the world around me. "},{id:6,text:"6. I automatically, and always, think in a decisive and determined way. "},{id:7,text:"7. I am full of resolution and the absolute assurance of the best possible outcome in everything that I do. "},{id:8,text:"8. I choose to look at the world around me in the bright, healthy light of optimism and self-assurance. "},{id:9,text:"9. I do only those things which are best for me. I create the best within myself, I attract the best in others, and I find the best in the world around me. "},{id:10,text:"10. I willingly, and without fail, take care of the duties and obligations which I have accepted for myself."},{id:11,text:"11. I commit only to those responsibilities which I know I can fulfill. "},{id:12,text:"12. I focus the attention of my mind only on those things that I can do something about. If I cannot affect it or direct it––I accept it. "},{id:13,text:"13. I keep my mind too busy thinking good, healthy, positive, constructive, and productive thoughts to ever have any time for worry. "},{id:14,text:"14. I control the thoughts I choose. No thought, at any time, can dwell in my mind without my approval or permission. I never worry."}]},{id:8,title:"Eating Habits",cards:[{id:1,text:"1. I am in control of myself in every way––at all times and in all situations. "},{id:2,text:"2. Each time I sit down to eat I reaffirm my determination to achieve my goal. By eating right, and never giving in, I am reaching the weight I want. "},{id:3,text:"3. Whether eating in or eating out, I really enjoy eating less. "},{id:4,text:"4. I never feel the need to finish the food in front of me. I eat only what I should––and never one bite more. "},{id:5,text:"5. One way to weight-loss that’s easy and works, is less food on my plate, and less on my fork. "},{id:6,text:'6. By ordering less when I eat out, and by serving myself smaller portions at home, I keep myself aware of the importance of staying with my goal––each and every day. “Less on my plate means less on my waist."'},{id:7,text:"7. When I sit down to eat, at no time do I allow anyone else to influence, tempt, or discourage me in any negative way."},{id:8,text:"8. What I eat, and the goals I reach, are up to me. And I give no one the right to hinder or control my success."},{id:9,text:"9. Although others may benefit from my success, I. am achieving my weight-loss goals for my own personal reasons––for myself, my life, my future, and my own personal well-being."},{id:10,text:"10. I am never, at any time, tempted to take one bite more than I should. I am strong, I am capable of reaching my goal, and I am doing it."},{id:11,text:"11. Being in situations which put a lot of food in front of me is not a problem to me now. I simply say “No” to the food and “Yes” to my success."},{id:12,text:"12. I enjoy sitting down to eat. Each time I do I conquer my past, and I create a trimmer, happier, more self-confident future in front of me. "},{id:13,text:"13. When I sit down to eat, I do not need someone else to remind me of my goal, or to keep me from eating something I should not. I take full responsibility for myself, and no one else has to do it for me. "},{id:14,text:"14. Controlling my weight, and my appetite, is easy for me now. I enjoy smaller portions, smaller bites, and a slower, healthier, more relaxed way of eating. "},{id:15,text:"15. I have set my goal and I am staying with it. I have turned mealtime into “achievement time.”"}]}],Fu=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#3A7CA5","#4C9A6B"],Sa=e=>Fu[e%Fu.length],L0=e=>e+"1A",Vm="anvil_affirmation_favs",_0=()=>{try{return new Set(JSON.parse(localStorage.getItem(Vm)||"[]"))}catch{return new Set}};function $0(){const[e,t]=c.useState(0),[n,o]=c.useState(0),[i,s]=c.useState(_0);c.useEffect(()=>{localStorage.setItem(Vm,JSON.stringify([...i]))},[i]);const l=(D,b)=>`${D}#${b.id}`,d=e==="FAV"?Ss.flatMap((D,b)=>D.cards.filter(p=>i.has(l(D.title,p))).map(p=>({...p,color:Sa(b),title:D.title}))):Ss[e].cards.map(D=>({...D,color:Sa(e),title:Ss[e].title})),a=d.length,g=Math.min(n,Math.max(0,a-1)),m=d[g],y=D=>{t(D),o(0)},f=c.useCallback(()=>o(D=>Math.max(0,D-1)),[]),E=c.useCallback(()=>o(D=>Math.min(a-1,D+1)),[a]);c.useEffect(()=>{const D=b=>{b.key==="ArrowLeft"&&f(),b.key==="ArrowRight"&&E()};return window.addEventListener("keydown",D),()=>window.removeEventListener("keydown",D)},[f,E]);const C=D=>s(b=>{const p=new Set(b);return p.has(D)?p.delete(D):p.add(D),p}),w=m?m.color:"#8268B0";return r.jsxs("div",{style:it.page,children:[r.jsxs("div",{style:it.head,children:[r.jsx("div",{style:it.eyebrow,children:"Anvil · Affirmations"}),r.jsx("h1",{style:it.h1,children:"Affirmations"}),r.jsx("div",{style:it.subhead,children:"One at a time — read it, mean it."})]}),r.jsxs("div",{style:it.filterBar,children:[Ss.map((D,b)=>{const p=e===b,h=Sa(b);return r.jsxs("button",{onClick:()=>y(b),style:{...it.chip,...p?{background:h,color:"#fff",borderColor:h}:{}},children:[r.jsx("span",{style:{...it.catDot,background:p?"#fff":h}})," ",D.title," ",r.jsx("span",{style:it.chipCount,children:D.cards.length})]},D.title)}),r.jsxs("button",{onClick:()=>y("FAV"),style:{...it.chip,...e==="FAV"?{background:"#C9A227",color:"#fff",borderColor:"#C9A227"}:{}},children:[r.jsx(yi,{size:12,fill:e==="FAV"?"#fff":"none"})," Favorites ",r.jsx("span",{style:it.chipCount,children:i.size})]})]}),a===0?r.jsxs("div",{style:it.empty,children:[r.jsx(yi,{size:22,color:"#C3BFB5"}),r.jsx("div",{children:"No favorites yet — tap the star on a card to save it here."})]}):r.jsxs("div",{style:it.viewer,children:[r.jsxs("div",{style:{...it.card,borderTop:`4px solid ${w}`},children:[r.jsx("div",{style:{...it.cardCat,color:w,background:L0(w)},children:m.title}),r.jsx("button",{onClick:()=>C(l(m.title,m)),style:{...it.favBtn,color:i.has(l(m.title,m))?"#C9A227":"#C3BFB5"},title:"Favorite",children:r.jsx(yi,{size:20,fill:i.has(l(m.title,m))?"#C9A227":"none"})}),r.jsx(Ed,{size:30,color:w,style:{opacity:.25}}),r.jsx("p",{style:it.cardText,children:m.text.trim()})]}),r.jsxs("div",{style:it.navRow,children:[r.jsxs("button",{onClick:f,disabled:g===0,style:{...it.navBtn,...g===0?it.navBtnDisabled:{}},children:[r.jsx(An,{size:18})," Back"]}),r.jsxs("span",{style:{...it.counter,color:w},children:[g+1," ",r.jsxs("span",{style:it.counterTotal,children:["/ ",a]})]}),r.jsxs("button",{onClick:E,disabled:g===a-1,style:{...it.navBtn,...g===a-1?it.navBtnDisabled:{}},children:["Next ",r.jsx(on,{size:18})]})]}),r.jsx("div",{style:it.dots,children:d.map((D,b)=>r.jsx("button",{onClick:()=>o(b),style:{...it.dot,...b===g?{background:w,transform:"scale(1.5)"}:{}},title:`${b+1}`},b))})]})]})}const it={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:22},chip:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipCount:{fontSize:11,fontWeight:700,opacity:.7},catDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},empty:{display:"flex",flexDirection:"column",alignItems:"center",gap:10,fontSize:13.5,color:"var(--text-3)",padding:"56px 12px",textAlign:"center",background:"var(--surface)",borderRadius:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},viewer:{display:"flex",flexDirection:"column",alignItems:"center"},card:{position:"relative",background:"var(--surface)",borderRadius:16,padding:"40px 32px 44px",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",width:"100%",minHeight:240,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",boxSizing:"border-box"},cardCat:{position:"absolute",top:16,left:16,fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:12,textTransform:"uppercase",letterSpacing:"0.04em"},favBtn:{position:"absolute",top:14,right:14,border:"none",background:"none",cursor:"pointer",padding:4,display:"grid",placeItems:"center"},cardText:{fontSize:21,lineHeight:1.55,margin:"14px 0 0",fontWeight:500,color:"var(--text)",fontFamily:"'Fraunces',Georgia,serif",maxWidth:560},navRow:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",maxWidth:420,marginTop:22},navBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},counter:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},counterTotal:{fontSize:13,fontWeight:600,color:"var(--text-3)"},dots:{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center",marginTop:20,maxWidth:480},dot:{width:7,height:7,borderRadius:"50%",border:"none",background:"var(--border)",cursor:"pointer",padding:0,transition:"transform 0.12s"}},P0=[{id:"day",label:"Day"},{id:"week",label:"Week"},{id:"month",label:"Month"},{id:"year",label:"Year"}],Gr=e=>e>=60?`${Math.floor(e/60)}h ${e%60}m`:`${e}m`,N0=e=>{const t=e<12?"am":"pm",n=e%12===0?12:e%12;return`${String(n).padStart(2,"0")} ${t}`};function O0(e){const t=e<=60?10:e<=120?20:e<=300?60:120,n=Math.max(60,Math.ceil((e||1)/t)*t),o=[];for(let i=0;i<=n;i+=t)o.push(i);return{max:n,ticks:o}}const Ym=e=>{const t=new Date(e);return t.setHours(0,0,0,0),t},H0=e=>{const t=Ym(e),n=(t.getDay()+6)%7;return t.setDate(t.getDate()-n),t},G0=e=>new Date(e.getFullYear(),e.getMonth(),1),U0=e=>new Date(e.getFullYear(),0,1);function V0(e,t){if(e==="day"){const i=Ym(t);return{start:i,end:new Date(+i+864e5),prev:new Date(+i-864e5),prev2:new Date(+i-2*864e5)}}if(e==="week"){const i=H0(t);return{start:i,end:new Date(+i+7*864e5),prev:new Date(+i-7*864e5),prev2:new Date(+i-14*864e5)}}if(e==="month"){const i=G0(t),s=t.getFullYear(),l=t.getMonth();return{start:i,end:new Date(s,l+1,1),prev:new Date(s,l-1,1),prev2:new Date(s,l-2,1)}}const n=t.getFullYear();return{start:U0(t),end:new Date(n+1,0,1),prev:new Date(n-1,0,1),prev2:new Date(n-2,0,1)}}function Y0({sessions:e=[],onBack:t}){const[n,o]=c.useState("day"),i=new Date,{start:s,end:l,prev:d,prev2:a}=V0(n,i),g=se=>new Date(se.started_at||se.created_at),m=e.filter(se=>se.completed),y=(se,ye,G)=>{const Y=g(se);return Y>=ye&&Y<G},f=(se,ye)=>m.filter(G=>y(G,se,ye)).reduce((G,Y)=>G+(Y.actual_min||0),0),E=m.filter(se=>y(se,s,l)),C=E.reduce((se,ye)=>se+(ye.actual_min||0),0),w=f(d,s),D=f(a,d),b=E.length,p=Array(24).fill(0);E.forEach(se=>{p[g(se).getHours()]+=se.actual_min||0});const h=Math.max(...p,0),T=O0(h),v={};E.forEach(se=>{const ye=Pt[se.tree]?se.tree:Zr;v[ye]=(v[ye]||0)+(se.actual_min||0)});const S=Object.entries(v).map(([se,ye])=>({name:Pt[se].label,min:ye,color:Pt[se].leaf})).sort((se,ye)=>ye.min-se.min),W=w>0?Math.round((C-w)/w*100):C>0?100:0,F=W>0?Xc:W<0?Kc:Em,j=W>0?"#4C9A6B":W<0?"#C2536B":"#9A968C",A={day:"yesterday",week:"last week",month:"last month",year:"last year"}[n],ie={day:"2 days ago",week:"2 weeks ago",month:"2 months ago",year:"2 years ago"}[n],B=54,I=22,J=2*Math.PI*B;let be=0;return r.jsxs("div",{style:De.page,children:[r.jsxs("div",{style:De.topbar,children:[r.jsxs("button",{onClick:t,style:De.back,children:[r.jsx(jm,{size:18})," Grove"]}),r.jsx("h1",{style:De.h1,children:"Insights"}),r.jsx("div",{style:{width:76}})]}),r.jsx("div",{style:De.rangeBar,children:P0.map(se=>r.jsx("button",{onClick:()=>o(se.id),style:{...De.rangeBtn,...n===se.id?De.rangeOn:{}},children:se.label},se.id))}),r.jsxs("div",{style:De.headline,children:[r.jsxs("div",{style:De.bigStat,children:[r.jsx("div",{style:De.bigVal,children:Gr(C)}),r.jsxs("div",{style:De.bigLbl,children:["Focused this ",n]})]}),r.jsxs("div",{style:De.bigStat,children:[r.jsx("div",{style:De.bigVal,children:b}),r.jsx("div",{style:De.bigLbl,children:"Trees"})]})]}),r.jsxs("div",{style:De.card,children:[r.jsxs("div",{style:De.cardHead,children:[r.jsxs("div",{style:De.cardTitle,children:["Your forest this ",n]}),r.jsx("div",{style:De.cardHint,children:"Each tree is a completed session — bigger means longer focus"})]}),r.jsx(X0,{sessions:E}),r.jsxs("div",{style:De.forestNumber,children:[b," ",b===1?"tree":"trees"," · ",Gr(C)," focused"]})]}),r.jsx(Ca,{title:"Focus distribution",hint:"Minutes focused at each time of day",children:h===0?r.jsx(Mu,{}):r.jsx(K0,{hours:p,axis:T})}),r.jsx(Ca,{title:"Pillar distribution",hint:"How your focus splits across the five trees",children:S.length===0?r.jsx(Mu,{}):r.jsxs("div",{style:De.donutWrap,children:[r.jsxs("svg",{viewBox:"0 0 140 140",width:"150",height:"150",style:{flexShrink:0},children:[S.map(se=>{const ye=se.min/(C||1)*J,G=r.jsx("circle",{cx:"70",cy:"70",r:B,fill:"none",stroke:se.color,strokeWidth:I,strokeDasharray:`${ye} ${J-ye}`,strokeDashoffset:-be,transform:"rotate(-90 70 70)"},se.name);return be+=ye,G}),r.jsx("text",{x:"70",y:"66",textAnchor:"middle",style:De.donutCenterTop,children:Gr(C)}),r.jsx("text",{x:"70",y:"82",textAnchor:"middle",style:De.donutCenterSub,children:"total"})]}),r.jsx("div",{style:De.legend,children:S.map(se=>r.jsxs("div",{style:De.legendRow,children:[r.jsx("span",{style:{...De.legendDot,background:se.color}}),r.jsx("span",{style:De.legendName,children:se.name}),r.jsxs("span",{style:De.legendVal,children:[Gr(se.min)," · ",Math.round(se.min/(C||1)*100),"%"]})]},se.name))})]})}),r.jsxs(Ca,{title:"Focus trend",hint:`This ${n} vs the previous two`,children:[r.jsxs("div",{style:De.trend3,children:[r.jsxs("div",{style:De.trendCol,children:[r.jsx("div",{style:De.trendVal,children:Gr(C)}),r.jsxs("div",{style:De.trendLbl,children:["This ",n]})]}),r.jsxs("div",{style:De.trendCol,children:[r.jsx("div",{style:{...De.trendVal,color:"var(--text-2)"},children:Gr(w)}),r.jsx("div",{style:De.trendLbl,children:A})]}),r.jsxs("div",{style:De.trendCol,children:[r.jsx("div",{style:{...De.trendVal,color:"var(--text-3)"},children:Gr(D)}),r.jsx("div",{style:De.trendLbl,children:ie})]})]}),r.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:r.jsxs("div",{style:{...De.trendBadge,color:j,background:j+"1A"},children:[r.jsx(F,{size:15})," ",W>0?"+":"",W,"% vs ",A]})}),r.jsx(q0,{items:[{label:`This ${n}`,value:C,color:"#4C9A6B"},{label:A,value:w,color:"var(--text-3)"},{label:ie,value:D,color:"var(--text-3)"}]})]})]})}const Q0=e=>e===0?"12a":e<12?`${e}a`:e===12?"12p":`${e-12}p`;function K0({hours:e,axis:t}){return r.jsxs("div",{children:[r.jsxs("div",{style:De.vcPlot,children:[t.ticks.map(n=>r.jsxs("div",{style:{...De.vcGridRow,bottom:`${n/t.max*100}%`},children:[r.jsx("span",{style:De.vcYLabel,children:n}),r.jsx("div",{style:De.vcGridLine})]},n)),r.jsx("div",{style:De.vcBars,children:e.map((n,o)=>r.jsx("div",{style:De.vcCell,title:`${N0(o)} · ${n} min`,children:r.jsx("div",{style:{...De.vcBar,height:n>0?`max(3px, ${n/t.max*100}%)`:0}})},o))})]}),r.jsx("div",{style:De.vcXAxis,children:e.map((n,o)=>r.jsx("div",{style:De.vcXCell,children:o%3===0?Q0(o):""},o))}),r.jsx("div",{style:De.vcYTitle,children:"minutes focused, by hour of day"})]})}function X0({sessions:e}){if(!e.length)return r.jsx("div",{style:De.sceneEmpty,children:"No trees yet this period. 🌱"});const n=e.slice(0,80),o=e.length-n.length,i=s=>Math.round(Math.max(40,Math.min(88,40+(s||0)*.6)));return r.jsxs("div",{children:[r.jsx("div",{style:De.scene,children:n.map(s=>r.jsx("div",{style:De.sceneTree,title:`${s.label||"Focus"} · ${Gr(s.actual_min||s.duration_min)}`,children:r.jsx(eg,{species:s.tree,progress:1,size:i(s.actual_min||s.duration_min)})},s.id))}),o>0&&r.jsxs("div",{style:De.overflow,children:["+",o," more trees"]})]})}function Ca({title:e,hint:t,children:n}){return r.jsxs("div",{style:De.card,children:[r.jsxs("div",{style:De.cardHead,children:[r.jsx("div",{style:De.cardTitle,children:e}),t&&r.jsx("div",{style:De.cardHint,children:t})]}),n]})}function Mu(){return r.jsx("div",{style:De.empty,children:"No focus sessions in this period yet. 🌱"})}function q0({items:e}){const t=Math.max(1,...e.map(n=>n.value));return r.jsx("div",{style:De.tbWrap,children:e.map(n=>r.jsxs("div",{style:De.tbRow,children:[r.jsx("div",{style:De.tbLbl,children:n.label}),r.jsx("div",{style:De.tbTrack,children:r.jsx("div",{style:{...De.tbBar,width:`${n.value/t*100}%`,background:n.color}})}),r.jsx("div",{style:De.tbVal,children:Gr(n.value)})]},n.label))})}const De={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"20px 16px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:720,margin:"0 auto"},topbar:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},back:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},h1:{fontSize:20,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},rangeBar:{display:"flex",gap:6,background:"var(--surface)",padding:5,borderRadius:12,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},rangeBtn:{flex:1,border:"none",background:"none",padding:"9px 0",borderRadius:8,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},rangeOn:{background:"var(--accent-strong)",color:"#fff"},headline:{display:"flex",gap:12,marginBottom:16},bigStat:{flex:1,background:"var(--surface)",borderRadius:14,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},bigVal:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em"},bigLbl:{fontSize:12,color:"var(--text-3)",marginTop:3,fontWeight:500},card:{background:"var(--surface)",borderRadius:16,padding:"18px 18px 20px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},cardHead:{marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardHint:{fontSize:12,color:"var(--text-3)",marginTop:2},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"24px 0"},scene:{display:"flex",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"center",gap:"0 2px",padding:"14px 8px 6px",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,minHeight:110,border:"1px solid var(--border)"},sceneTree:{lineHeight:0},sceneEmpty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"34px 0",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,border:"1px solid var(--border)"},overflow:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",marginTop:6,fontWeight:600},forestNumber:{textAlign:"center",marginTop:12,fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},vcPlot:{position:"relative",height:180,paddingLeft:30},vcGridRow:{position:"absolute",left:0,right:0,display:"flex",alignItems:"center",height:0},vcYLabel:{width:26,marginRight:4,textAlign:"right",fontSize:9,color:"var(--text-3)",fontWeight:600,flexShrink:0},vcGridLine:{flex:1,height:1,background:"#EEEBE4"},vcBars:{position:"absolute",left:30,right:0,top:0,bottom:0,display:"flex",alignItems:"flex-end",gap:1},vcCell:{flex:1,height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"center"},vcBar:{width:"72%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",transition:"height 0.3s"},vcXAxis:{display:"flex",marginLeft:30,marginTop:4},vcXCell:{flex:1,textAlign:"center",fontSize:8.5,color:"var(--text-3)",fontWeight:600,overflow:"hidden"},vcYTitle:{textAlign:"center",fontSize:9.5,color:"var(--text-3)",marginTop:6,letterSpacing:"0.06em",textTransform:"uppercase",fontWeight:600},donutWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap",justifyContent:"center"},donutCenterTop:{fontSize:16,fontWeight:800,fill:"var(--text)",fontFamily:"'Fraunces',Georgia,serif"},donutCenterSub:{fontSize:9,fill:"#9A968C",textTransform:"uppercase",letterSpacing:"0.08em"},legend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:11,height:11,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},legendVal:{fontSize:12,color:"var(--text-3)",fontWeight:600,flexShrink:0},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:56,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},Z0=[15,30,45,60,90],za="anvil_grove_active",Wu=e=>`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`,Sl=e=>e>=60?`${Math.floor(e/60)}h ${e%60}m`:`${e}m`;function J0(){const[e,t]=c.useState("timer"),[n,o]=c.useState("idle"),[i,s]=c.useState(15),[l,d]=c.useState(!1),[a,g]=c.useState(""),[m,y]=c.useState(Zr),[f,E]=c.useState(()=>localStorage.getItem("anvil_grove_deepfocus")!=="0"),[C,w]=c.useState(15*60),[D,b]=c.useState({sessions:[],stats:null}),p=c.useRef(null),h=c.useRef(null),T=c.useRef(!1),v=c.useCallback(async()=>{try{b(await _.getFocus())}catch{}},[]),S=c.useCallback(async(K,pe)=>{if(!T.current){T.current=!0,localStorage.removeItem(za);try{await _.createFocus({label:a.trim()||null,tree:m,duration_min:i,actual_min:pe,completed:K,started_at:h.current,ended_at:new Date().toISOString()})}catch{}v()}},[a,m,i,v]),W=c.useCallback(()=>{if(n!=="running")return;const K=h.current?Math.round((Date.now()-new Date(h.current).getTime())/6e4):0;o("failed"),S(!1,Math.max(0,Math.min(i,K)))},[n,i,S]),F=c.useCallback(()=>{o("done"),w(0),S(!0,i)},[i,S]);c.useEffect(()=>{v();const K=JSON.parse(localStorage.getItem(za)||"null");if(K&&K.endTime){const pe=Math.round((K.endTime-Date.now())/1e3);s(K.duration),g(K.label||""),y(K.tree||"oak"),p.current=K.endTime,h.current=K.startedAt,pe>0?(w(pe),o("running")):(o("done"),T.current=!1,S(!0,K.duration))}},[]),c.useEffect(()=>{if(n!=="running")return;const K=()=>{const O=Math.round((p.current-Date.now())/1e3);if(O<=0){F();return}w(O)};K();const pe=setInterval(K,250);return()=>clearInterval(pe)},[n,F]),c.useEffect(()=>{if(n!=="running"||!f)return;const K=()=>{document.hidden&&W()};return document.addEventListener("visibilitychange",K),()=>document.removeEventListener("visibilitychange",K)},[n,f,W]),c.useEffect(()=>{const K=()=>{!document.hidden&&n!=="running"&&v()};window.addEventListener("focus",K),document.addEventListener("visibilitychange",K);const pe=setInterval(K,6e4);return()=>{window.removeEventListener("focus",K),document.removeEventListener("visibilitychange",K),clearInterval(pe)}},[v,n]);const j=()=>E(K=>{const pe=!K;return localStorage.setItem("anvil_grove_deepfocus",pe?"1":"0"),pe}),A=()=>{T.current=!1,h.current=new Date().toISOString(),p.current=Date.now()+i*60*1e3,localStorage.setItem(za,JSON.stringify({endTime:p.current,duration:i,label:a,tree:m,startedAt:h.current})),w(i*60),o("running")},ie=()=>{o("idle"),w(i*60)},B=K=>{d(!1),s(K),w(K*60)},I=()=>{l||(d(!0),s(5),w(5*60))},J=K=>{if(d(!0),K===""){s(0),w(0);return}const pe=Math.max(1,Math.min(600,parseInt(K,10)||0));s(pe),w(pe*60)},be=i*60,se=n==="running"?1-C/be:n==="done"?1:0,ye=130,G=2*Math.PI*ye,Y=G*(1-(n==="running"?se:n==="done"?1:0)),oe=D.stats;return e==="stats"?r.jsx(Y0,{sessions:D.sessions,onBack:()=>t("timer")}):r.jsxs("div",{style:We.page,children:[r.jsxs("div",{style:We.head,children:[r.jsx("div",{style:We.eyebrow,children:"Anvil · Grove"}),r.jsx("h1",{style:We.h1,children:"Grove"}),r.jsx("div",{style:We.subhead,children:"Plant a tree, stay focused, grow your grove."}),r.jsxs("button",{onClick:()=>t("stats"),style:We.insightsBtn,disabled:n==="running",children:[r.jsx(Xx,{size:15})," Insights"]})]}),oe&&r.jsxs("div",{style:We.statRow,children:[r.jsx(Cs,{label:"Today",value:Sl(oe.today_minutes)}),r.jsx(Cs,{label:"Trees",value:oe.trees}),r.jsx(Cs,{label:"Streak",value:`${oe.streak}d`}),r.jsx(Cs,{label:"Success",value:`${oe.success_rate}%`})]}),r.jsxs("div",{style:We.stage,children:[r.jsxs("div",{style:We.ringWrap,children:[r.jsxs("svg",{width:"300",height:"300",viewBox:"0 0 300 300",style:{position:"absolute",inset:0},children:[r.jsx("circle",{cx:"150",cy:"150",r:ye,fill:"none",stroke:"var(--border)",strokeWidth:"10"}),r.jsx("circle",{cx:"150",cy:"150",r:ye,fill:"none",stroke:n==="failed"?"#C2536B":"#4C9A6B",strokeWidth:"10",strokeLinecap:"round",strokeDasharray:G,strokeDashoffset:Y,transform:"rotate(-90 150 150)",style:{transition:"stroke-dashoffset 0.4s linear"}})]}),r.jsx("div",{style:We.ringInner,children:r.jsx(eg,{species:m,progress:n==="idle"?0:se,withered:n==="failed",size:170})})]}),n==="idle"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:We.timeBig,children:Wu(i*60)}),r.jsxs("div",{style:We.controls,children:[r.jsxs("div",{style:We.chips,children:[Z0.map(K=>r.jsxs("button",{onClick:()=>B(K),style:{...We.chip,...!l&&i===K?We.chipOn:{}},children:[K,"m"]},K)),r.jsx("button",{onClick:I,style:{...We.chip,...l?We.chipOn:{}},children:"Custom"})]}),l&&r.jsxs("div",{style:We.customRow,children:[r.jsx("input",{type:"number",min:"1",max:"600",inputMode:"numeric",autoFocus:!0,value:i||"",onChange:K=>J(K.target.value),placeholder:"e.g. 50",style:We.customInput}),r.jsx("span",{style:We.customUnit,children:"minutes"})]}),r.jsx("input",{value:a,onChange:K=>g(K.target.value),placeholder:"What are you focusing on? (optional)",style:We.input,maxLength:60}),r.jsx("div",{style:We.treePick,children:Object.entries(Pt).map(([K,pe])=>r.jsxs("button",{onClick:()=>y(K),title:pe.label,style:{...We.treeBtn,...m===K?{borderColor:pe.leaf,background:pe.leaf+"1A"}:{}},children:[r.jsx("span",{style:{...We.treeDot,background:pe.leaf}}),pe.label]},K))}),r.jsxs("button",{onClick:j,style:We.toggleRow,children:[r.jsxs("div",{style:{textAlign:"left"},children:[r.jsx("div",{style:We.toggleTitle,children:"Deep Focus"}),r.jsx("div",{style:We.toggleHint,children:f?"Leaving the app kills the tree":"Tree survives until you give up"})]}),r.jsx("div",{style:{...We.switch,...f?We.switchOn:{}},children:r.jsx("div",{style:{...We.knob,...f?We.knobOn:{}}})})]}),r.jsx("button",{onClick:A,disabled:i<1,style:{...We.plantBtn,...i<1?{opacity:.5,cursor:"not-allowed"}:{}},children:"Plant tree"})]})]}),n==="running"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:We.timeBig,children:Wu(C)}),r.jsx("div",{style:We.focusLabel,children:a.trim()||"Focusing…"}),r.jsx("div",{style:f?We.warn:We.warnSoft,children:f?"⚠ Deep Focus on — leaving this app will kill your tree.":"🌿 Relaxed mode — only Give up ends this session."}),r.jsx("button",{onClick:W,style:We.giveUp,children:"Give up"})]}),n==="done"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:We.resultTitle,children:["🌳 You grew a ",Pt[m].label," tree!"]}),r.jsxs("div",{style:We.resultSub,children:[Sl(i)," of focus added to your grove."]}),r.jsx("button",{onClick:ie,style:We.plantBtn,children:"Plant another"})]}),n==="failed"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{...We.resultTitle,color:"#C2536B"},children:"Your tree withered."}),r.jsx("div",{style:We.resultSub,children:"You left before the timer finished. Try again?"}),r.jsx("button",{onClick:ie,style:We.plantBtn,children:"Try again"})]})]}),r.jsx(ev,{sessions:D.sessions,onDelete:async K=>{await _.deleteFocus(K),v()}})]})}function Cs({label:e,value:t}){return r.jsxs("div",{style:We.stat,children:[r.jsx("div",{style:We.statValue,children:t}),r.jsx("div",{style:We.statLabel,children:e})]})}function ev({sessions:e,onDelete:t}){const n=e.filter(l=>l.completed);if(n.length===0)return r.jsx("div",{style:We.forestEmpty,children:"Your grove is empty. Plant your first tree above. 🌱"});const o={};for(const l of n){const d=(l.started_at||l.created_at||"").slice(0,10);(o[d]||(o[d]=[])).push(l)}const i=Object.keys(o).sort().reverse(),s=l=>{const d=new Date().toISOString().slice(0,10);return l===d?"Today":new Date(l+"T00:00").toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})};return r.jsxs("div",{style:We.forest,children:[r.jsxs("div",{style:We.forestHead,children:["Your Grove · ",n.length," trees"]}),i.map(l=>r.jsxs("div",{style:We.daySection,children:[r.jsxs("div",{style:We.dayLabel,children:[s(l)," · ",o[l].length]}),r.jsx("div",{style:We.treeGrid,children:o[l].map(d=>r.jsxs("div",{style:We.treeCard,title:`${d.label||"Focus"} · ${Sl(d.actual_min)}`,onDoubleClick:()=>t(d.id),children:[r.jsx(Oy,{species:d.tree}),r.jsx("div",{style:We.treeCardMin,children:Sl(d.actual_min||d.duration_min)}),d.label&&r.jsx("div",{style:We.treeCardLabel,children:d.label})]},d.id))})]},l)),r.jsx("div",{style:We.forestHint,children:"Double-tap a tree to remove it."})]})}const We={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:820,margin:"0 auto"},head:{marginBottom:16,textAlign:"center"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},insightsBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginTop:12},statRow:{display:"flex",gap:10,justifyContent:"center",marginBottom:18,flexWrap:"wrap"},stat:{background:"var(--surface)",borderRadius:12,padding:"10px 18px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",minWidth:78},statValue:{fontSize:19,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},statLabel:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},stage:{background:"var(--surface)",borderRadius:18,padding:"28px 24px 32px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",display:"flex",flexDirection:"column",alignItems:"center",marginBottom:26},ringWrap:{position:"relative",width:300,height:300,display:"grid",placeItems:"center"},ringInner:{position:"relative",zIndex:1,display:"grid",placeItems:"center"},timeBig:{fontSize:40,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:6},focusLabel:{fontSize:14,color:"var(--text-2)",marginTop:2,fontWeight:500},warn:{fontSize:12,color:"#C2773B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},warnSoft:{fontSize:12,color:"#4C9A6B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},toggleRow:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:12,padding:"10px 14px",cursor:"pointer",fontFamily:"inherit",width:"100%"},toggleTitle:{fontSize:14,fontWeight:700,color:"var(--text)"},toggleHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},switch:{width:42,height:24,borderRadius:12,background:"var(--border)",flexShrink:0,padding:2,transition:"background 0.18s",boxSizing:"border-box"},switchOn:{background:"#4C9A6B"},knob:{width:20,height:20,borderRadius:"50%",background:"var(--surface)",boxShadow:"0 1px 2px rgba(0,0,0,0.2)",transform:"translateX(0)",transition:"transform 0.18s"},knobOn:{transform:"translateX(18px)"},controls:{width:"100%",maxWidth:380,display:"flex",flexDirection:"column",gap:14,marginTop:8},chips:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},chip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},customRow:{display:"flex",alignItems:"center",justifyContent:"center",gap:8},customInput:{border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:15,fontWeight:700,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center",width:100},customUnit:{fontSize:13,color:"var(--text-3)",fontWeight:600},input:{border:"1px solid var(--border)",borderRadius:10,padding:"11px 13px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center"},treePick:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},treeBtn:{display:"flex",alignItems:"center",gap:6,border:"1.5px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},treeDot:{width:10,height:10,borderRadius:"50%"},plantBtn:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},giveUp:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",padding:"11px 26px",borderRadius:11,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:18},resultTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginTop:14,textAlign:"center"},resultSub:{fontSize:13.5,color:"var(--text-3)",marginTop:6,marginBottom:18,textAlign:"center"},forest:{background:"var(--surface)",borderRadius:16,padding:"20px 22px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},forestHead:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},forestEmpty:{background:"var(--surface)",borderRadius:16,padding:"40px 20px",textAlign:"center",color:"var(--text-3)",fontSize:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},daySection:{marginBottom:16},dayLabel:{fontSize:12,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:8},treeGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(80px,1fr))",gap:8},treeCard:{display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 4px",borderRadius:10,cursor:"pointer",background:"var(--surface-2)"},treeCardMin:{fontSize:12,fontWeight:700,color:"#4C9A6B",marginTop:-4},treeCardLabel:{fontSize:10.5,color:"var(--text-3)",marginTop:2,textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:76},forestHint:{fontSize:11,color:"var(--text-3)",textAlign:"center",marginTop:6}},tv="grove_rates",rv="reward_rates",zs=Object.keys(Pt),Lu=[{id:"kickstart",label:"Kickstart"},{id:"golden",label:"Golden Book"},{id:"habits",label:"Habits"},{id:"quadrant",label:"Quadrant"},{id:"goals",label:"Goals"},{id:"grove",label:"Grove"},{id:"journal",label:"Journal"},{id:"revision",label:"Revision"},{id:"affirmations",label:"Affirmations"},{id:"skills",label:"Skills"},{id:"spiritual",label:"Spiritual"},{id:"mindscape",label:"Mindscape"},{id:"vault",label:"Wallet"},{id:"expenses",label:"Expenses"},{id:"delight",label:"Delights"}],_u=new Set(["worth","achievements"]),io="#C9A227",ti="#3A7CA5",so="#C2536B",nv=e=>{const t=Math.floor(e/60),n=Math.round(e%60);return t&&n?`${t}h ${n}m`:t?`${t}h`:`${n}m`},ov=e=>{let t=Math.round((e||0)*60);const n=Math.floor(t/3600);t%=3600;const o=Math.floor(t/60);return t%=60,[n?`${n}h`:null,n||o?`${o}m`:null,`${t}s`].filter(Boolean).join(" ")},iv=()=>{const e=new Date,t=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}T${t(e.getHours())}:${t(e.getMinutes())}`},$u=e=>{if(!e)return"";const t=new Date(e.includes("T")?e:e+"T00:00:00");return isNaN(t)?e:t.toLocaleDateString("en-US",e.includes("T")?{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}:{month:"short",day:"numeric",year:"numeric"})},dr=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Pu=e=>{const t=new Date(e);return t.setHours(0,0,0,0),t.setDate(t.getDate()-(t.getDay()+6)%7),t},Is=[{id:"today",label:"Today"},{id:"all",label:"All time"},{id:"tweek",label:"This week"},{id:"tmonth",label:"This month"},{id:"pweek",label:"Last week"},{id:"pmonth",label:"Last month"},{id:"tyear",label:"This year"}];function sv(e){const t=new Date;if(e==="today")return[dr(t),dr(t)];if(e==="tweek"){const n=Pu(t),o=new Date(n);return o.setDate(n.getDate()+6),[dr(n),dr(o)]}if(e==="pweek"){const n=Pu(t);n.setDate(n.getDate()-7);const o=new Date(n);return o.setDate(n.getDate()+6),[dr(n),dr(o)]}return e==="tmonth"?[dr(new Date(t.getFullYear(),t.getMonth(),1)),dr(new Date(t.getFullYear(),t.getMonth()+1,0))]:e==="pmonth"?[dr(new Date(t.getFullYear(),t.getMonth()-1,1)),dr(new Date(t.getFullYear(),t.getMonth(),0))]:e==="tyear"?[dr(new Date(t.getFullYear(),0,1)),dr(new Date(t.getFullYear(),11,31))]:["0000-01-01","9999-12-31"]}function lv(){const e=Qi(),t=u=>Hr(u,e.code),[n,o]=c.useState([]),[i,s]=c.useState([]),[l,d]=c.useState([]),[a,g]=c.useState([]),[m,y]=c.useState([]),[f,E]=c.useState({}),[C,w]=c.useState({}),[D,b]=c.useState(!1),[p,h]=c.useState({}),[T,v]=c.useState({}),[S,W]=c.useState(!1),[F,j]=c.useState(!1),[A,ie]=c.useState(null),[B,I]=c.useState(""),[J,be]=c.useState(""),[se,ye]=c.useState(!1),[G,Y]=c.useState("today"),oe=()=>_.getPayouts().then(g).catch(()=>{}),K=()=>_.getRewardRates().then(d).catch(()=>{});c.useEffect(()=>{(async()=>{try{const[u,ee,Ae,Le,we,Pe,wt]=await Promise.all([_.getFocus(),_.getScreenTime(),_.getRewardRates(),_.getPayouts(),_.getAchievements(),_.getSetting(tv),_.getSetting(rv)]);o(u.sessions||[]),s(Array.isArray(ee)?ee:[]),d(Ae||[]),g(Le||[]),y(Array.isArray(we)?we:[]),E((Pe==null?void 0:Pe.value)||{}),w((wt==null?void 0:wt.value)||{})}catch{}b(!0)})()},[]);const pe={};l.forEach(u=>{var ee;(pe[ee=`${u.kind}:${u.rkey}`]||(pe[ee]=[])).push({eff:u.eff_date,rate:u.rate})}),Object.values(pe).forEach(u=>u.sort((ee,Ae)=>ee.eff.localeCompare(Ae.eff)));const O=(u,ee,Ae)=>{const Le=pe[`${u}:${ee}`];if(Le){let we=null;for(const Pe of Le)if(Pe.eff<=Ae)we=Pe.rate;else break;if(we!==null)return we}return(u==="focus"?f[ee]:C[ee])||0},$=(u,ee)=>{const Ae=pe[`${u}:${ee}`];return Ae&&Ae.length?Ae[Ae.length-1].rate:(u==="focus"?f[ee]:C[ee])??""},[P,le]=sv(G);let de=0,Te=0;n.filter(u=>u.completed).forEach(u=>{const ee=(u.started_at||u.created_at||"").slice(0,10),Ae=Pt[u.tree]?u.tree:Zr;de+=(u.actual_min||0)/60*O("focus",Ae,ee)}),i.forEach(u=>{_u.has(u.screen)||(Te+=u.seconds/60*O("usage",u.screen,u.date))});const Q=m.reduce((u,ee)=>u+(ee.reward||0),0),ne=de+Te+Q,R=a.reduce((u,ee)=>u+ee.amount,0),U=Math.max(0,ne-R),M={};zs.forEach(u=>M[u]={minutes:0,earned:0}),n.filter(u=>u.completed).forEach(u=>{const ee=(u.started_at||u.created_at||"").slice(0,10);if(ee<P||ee>le)return;const Ae=Pt[u.tree]?u.tree:Zr,Le=u.actual_min||0;M[Ae].minutes+=Le,M[Ae].earned+=Le/60*O("focus",Ae,ee)});const z=zs.reduce((u,ee)=>u+M[ee].earned,0),x={};i.forEach(u=>{var Ae;if(_u.has(u.screen)||u.date<P||u.date>le)return;const ee=x[Ae=u.screen]||(x[Ae]={seconds:0,earned:0});ee.seconds+=u.seconds,ee.earned+=u.seconds/60*O("usage",u.screen,u.date)});const V=Object.values(x).reduce((u,ee)=>u+ee.earned,0),ge=m.filter(u=>u.date>=P&&u.date<=le&&(u.reward||0)>0),je=[...ge].sort((u,ee)=>ee.date.localeCompare(u.date)||ee.reward-u.reward),Oe=ge.reduce((u,ee)=>u+(ee.reward||0),0),_e=z+V+Oe,Xe=_e>0?z/_e*100:0,Ke=_e>0?V/_e*100:0,ot=_e>0?Oe/_e*100:0,ht=zs.map(u=>({p:u,...M[u],...Pt[u]})).filter(u=>u.minutes>0).sort((u,ee)=>ee.earned-u.earned),Qe=Lu.map(u=>({...u,...x[u.id]||{seconds:0,earned:0}})).filter(u=>u.seconds>0).sort((u,ee)=>ee.earned-u.earned),zt=(u,ee)=>{_.setRewardRate({kind:"focus",rkey:u,rate:Math.max(0,parseFloat(ee)||0)}).then(K).catch(()=>{})},It=(u,ee)=>{_.setRewardRate({kind:"usage",rkey:u,rate:Math.max(0,parseFloat(ee)||0)}).then(K).catch(()=>{})},kt=u=>{U<=0||(ie(u),I(u==="all"?U.toFixed(2):""),be(""))},gt=async()=>{const u=Math.min(parseFloat(B)||0,U);u<=0||!J.trim()||(await _.createPayout({amount:u,note:J.trim(),date:iv()}),ie(null),I(""),be(""),await oe(),ye(!0))},jt=async u=>{await _.deletePayout(u),oe()};return r.jsxs("div",{style:re.page,children:[r.jsxs("div",{style:re.head,children:[r.jsx("div",{style:re.eyebrow,children:"Anvil · Rewards"}),r.jsx("h1",{style:re.h1,children:"Rewards"}),r.jsx("div",{style:re.subhead,children:"Your earned rewards from focus and app usage."})]}),r.jsxs("div",{style:re.hero,children:[r.jsx("button",{onClick:()=>ye(u=>!u),style:re.logIcon,title:"View reward log",children:r.jsx(Ty,{size:16})}),r.jsx("div",{style:re.heroLabel,children:"Final reward · pending"}),r.jsx("div",{style:re.heroVal,children:t(U)}),r.jsxs("div",{style:re.heroSub,children:["Earned ",t(ne)," · Taken ",t(R),Q>0?` · incl. ${t(Q)} achievement`:""]}),r.jsxs("div",{style:re.heroBtns,children:[r.jsx("button",{onClick:()=>kt("partial"),disabled:U<=0,style:{...re.heroBtnGhost,...U<=0?re.btnDisabled:{}},children:"Take partial"}),r.jsx("button",{onClick:()=>kt("all"),disabled:U<=0,style:{...re.heroBtnSolid,...U<=0?re.btnDisabled:{}},children:"Take all pending"})]})]}),r.jsxs("div",{style:re.statRow,children:[r.jsxs("div",{style:re.statCard,children:[r.jsx("div",{style:re.statVal,children:t(R)}),r.jsx("div",{style:re.statLbl,children:"Total taken"})]}),r.jsxs("div",{style:re.statCard,children:[r.jsx("div",{style:{...re.statVal,color:io},children:t(U)}),r.jsx("div",{style:re.statLbl,children:"Total pending"})]})]}),r.jsx("div",{style:re.periodRow,children:Is.map(u=>r.jsx("button",{onClick:()=>Y(u.id),style:{...re.periodChip,...G===u.id?re.periodChipOn:{}},children:u.label},u.id))}),_e>0?r.jsxs("div",{style:re.card,children:[r.jsxs("div",{style:re.cardTitleRow,children:[r.jsx("span",{style:re.cardTitle,children:"Reward split"}),r.jsxs("span",{style:re.periodTotal,children:[t(_e)," · ",Is.find(u=>u.id===G).label]})]}),r.jsxs("div",{style:re.splitTrack,children:[r.jsx("div",{style:{width:`${Xe}%`,background:io,height:"100%"}}),r.jsx("div",{style:{width:`${Ke}%`,background:ti,height:"100%"}}),r.jsx("div",{style:{width:`${ot}%`,background:so,height:"100%"}})]}),r.jsxs("div",{style:re.legendRow,children:[r.jsxs("span",{style:re.legendItem,children:[r.jsx("span",{style:{...re.legendDot,background:io}})," Focus ",Math.round(Xe),"% · ",t(z)]}),r.jsxs("span",{style:re.legendItem,children:[r.jsx("span",{style:{...re.legendDot,background:ti}})," Usage ",Math.round(Ke),"% · ",t(V)]}),r.jsxs("span",{style:re.legendItem,children:[r.jsx("span",{style:{...re.legendDot,background:so}})," Achievement ",Math.round(ot),"% · ",t(Oe)]})]})]}):r.jsxs("div",{style:{...re.card,...re.muted},children:["No rewards earned in ",Is.find(u=>u.id===G).label.toLowerCase(),"."]}),r.jsxs("div",{style:re.card,children:[r.jsxs("button",{onClick:()=>W(u=>!u),style:re.collapseBtn,children:[r.jsxs("span",{style:{...re.cardTitle,color:io},children:["Focus Rewards · ",t(z)]}),r.jsx("span",{style:re.collapseHint,children:S?"Hide rates":"Set rates"})]}),S&&r.jsx("div",{style:{...re.rateGrid,marginTop:12},children:zs.map(u=>r.jsxs("div",{style:re.rateRow,children:[r.jsx("span",{style:{...re.dot,background:Pt[u].leaf}}),r.jsx("span",{style:re.rateName,children:Pt[u].label}),r.jsxs("div",{style:re.rateInputWrap,children:[r.jsx("span",{style:re.unitSign,children:e.symbol}),r.jsx("input",{type:"number",min:"0",step:"0.5",inputMode:"decimal",placeholder:"0",value:p[u]!==void 0?p[u]:$("focus",u),onChange:ee=>h(Ae=>({...Ae,[u]:ee.target.value})),onBlur:ee=>zt(u,ee.target.value),style:re.rateInput}),r.jsx("span",{style:re.unit,children:"/hr"})]})]},u))}),ht.length>0?r.jsx("div",{style:{...re.rows,marginTop:14},children:ht.map(u=>r.jsxs("div",{style:re.row,children:[r.jsx("span",{style:{...re.dot,background:u.leaf}}),r.jsx("span",{style:re.rowName,children:u.label}),r.jsx("span",{style:re.rowMeta,children:nv(Math.round(u.minutes))}),r.jsx("span",{style:re.rowAmt,children:t(u.earned)})]},u.p))}):r.jsx("div",{style:re.muted,children:"No focus sessions yet."})]}),r.jsxs("div",{style:re.card,children:[r.jsxs("button",{onClick:()=>j(u=>!u),style:re.collapseBtn,children:[r.jsxs("span",{style:{...re.cardTitle,color:ti},children:["Usage Rewards · ",t(V)]}),r.jsx("span",{style:re.collapseHint,children:F?"Hide rates":"Set rates"})]}),F&&r.jsx("div",{style:{...re.rateGrid,marginTop:12},children:Lu.map(u=>r.jsxs("div",{style:re.rateRow,children:[r.jsx("span",{style:re.rateName,children:u.label}),r.jsxs("div",{style:re.rateInputWrap,children:[r.jsx("span",{style:re.unitSign,children:e.symbol}),r.jsx("input",{type:"number",min:"0",step:"0.1",inputMode:"decimal",placeholder:"0",value:T[u.id]!==void 0?T[u.id]:$("usage",u.id),onChange:ee=>v(Ae=>({...Ae,[u.id]:ee.target.value})),onBlur:ee=>It(u.id,ee.target.value),style:re.rateInput}),r.jsx("span",{style:re.unit,children:"/min"})]})]},u.id))}),Qe.length>0?r.jsx("div",{style:{...re.rows,marginTop:14},children:Qe.map(u=>r.jsxs("div",{style:re.row,children:[r.jsx("span",{style:re.rowName,children:u.label}),r.jsx("span",{style:re.rowMeta,children:ov(u.seconds/60)}),r.jsx("span",{style:re.rowAmt,children:t(u.earned)})]},u.id))}):r.jsx("div",{style:re.muted,children:D?"No usage tracked yet.":"Loading…"})]}),r.jsxs("div",{style:re.card,children:[r.jsxs("div",{style:re.cardTitleRow,children:[r.jsxs("span",{style:{...re.cardTitle,color:so},children:["Achievement Rewards · ",t(Oe)]}),r.jsx("span",{style:re.collapseHint,children:"Set in Achievements"})]}),je.length>0?r.jsx("div",{style:{...re.rows,marginTop:14},children:je.map(u=>r.jsxs("div",{style:re.row,children:[r.jsx("span",{style:{...re.dot,background:so}}),r.jsx("span",{style:re.rowName,children:u.title}),r.jsx("span",{style:re.rowMeta,children:$u(u.date)}),r.jsx("span",{style:re.rowAmt,children:t(u.reward)})]},u.id))}):r.jsxs("div",{style:{...re.muted,marginTop:10},children:["No achievement rewards in ",Is.find(u=>u.id===G).label.toLowerCase(),". Add a reward to a win in the Achievements section."]})]}),se&&r.jsx("div",{style:re.modalOverlay,onClick:()=>ye(!1),children:r.jsxs("div",{style:re.logModal,onClick:u=>u.stopPropagation(),children:[r.jsxs("div",{style:re.logModalHead,children:[r.jsx("span",{style:re.modalTitle,children:"Reward log"}),r.jsx("button",{onClick:()=>ye(!1),style:re.logClose,title:"Close",children:r.jsx(Be,{size:16})})]}),a.length===0?r.jsx("div",{style:{...re.muted,padding:"24px 0",textAlign:"center"},children:"No rewards taken yet."}):r.jsxs(r.Fragment,{children:[r.jsx("div",{style:re.logScroll,children:a.map(u=>r.jsxs("div",{style:re.row,children:[r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{style:re.logNote,children:u.note||"Reward taken"}),r.jsx("div",{style:re.rowMeta,children:$u(u.date)})]}),r.jsx("span",{style:re.rowAmt,children:t(u.amount)}),r.jsx("button",{onClick:()=>jt(u.id),style:re.del,children:"×"})]},u.id))}),r.jsxs("div",{style:re.totalRow,children:[r.jsx("span",{children:"Total taken"}),r.jsx("span",{style:re.totalVal,children:t(R)})]})]})]})}),_e>0&&r.jsxs("div",{style:re.card,children:[r.jsx("div",{style:re.cardTitle,children:"Reward breakdown"}),r.jsxs("div",{style:re.pieWrap,children:[r.jsxs("div",{style:re.pieChart,children:[r.jsx("div",{style:{...re.pieDisc,background:`conic-gradient(${io} 0 ${Xe}%, ${ti} ${Xe}% ${Xe+Ke}%, ${so} ${Xe+Ke}% 100%)`}}),r.jsxs("div",{style:re.pieHole,children:[r.jsx("span",{style:re.pieHoleVal,children:t(_e)}),r.jsx("span",{style:re.pieHoleLbl,children:"total"})]})]}),r.jsxs("div",{style:re.pieLegend,children:[r.jsxs("div",{style:re.pieLegRow,children:[r.jsx("span",{style:{...re.legendDot,background:io}}),r.jsx("span",{style:re.pieLegName,children:"Focus"}),r.jsxs("span",{style:re.pieLegPct,children:[Math.round(Xe),"%"]}),r.jsx("span",{style:re.pieLegMin,children:t(z)})]}),r.jsxs("div",{style:re.pieLegRow,children:[r.jsx("span",{style:{...re.legendDot,background:ti}}),r.jsx("span",{style:re.pieLegName,children:"Usage"}),r.jsxs("span",{style:re.pieLegPct,children:[Math.round(Ke),"%"]}),r.jsx("span",{style:re.pieLegMin,children:t(V)})]}),r.jsxs("div",{style:re.pieLegRow,children:[r.jsx("span",{style:{...re.legendDot,background:so}}),r.jsx("span",{style:re.pieLegName,children:"Achievement"}),r.jsxs("span",{style:re.pieLegPct,children:[Math.round(ot),"%"]}),r.jsx("span",{style:re.pieLegMin,children:t(Oe)})]})]})]})]}),A&&r.jsx("div",{style:re.modalOverlay,onClick:()=>ie(null),children:r.jsxs("div",{style:re.modalCard,onClick:u=>u.stopPropagation(),children:[r.jsx("div",{style:re.modalTitle,children:A==="all"?"Take all pending reward?":"Take partial reward"}),r.jsxs("div",{style:re.modalSub,children:["Pending: ",t(U)]}),r.jsxs("div",{style:re.modalInputWrap,children:[r.jsx("span",{style:re.modalSign,children:e.symbol}),r.jsx("input",{type:"number",min:"0",step:"0.01",autoFocus:!0,placeholder:U.toFixed(2),value:B,onChange:u=>I(u.target.value),style:re.modalAmt})]}),r.jsx("input",{placeholder:"What is this reward for? (required)",value:J,onChange:u=>be(u.target.value),onKeyDown:u=>u.key==="Enter"&&gt(),style:re.modalReason}),(()=>{const u=parseFloat(B)>0&&!!J.trim();return r.jsxs("div",{style:re.modalActions,children:[r.jsx("button",{onClick:()=>ie(null),style:re.modalCancel,children:"Cancel"}),r.jsxs("button",{onClick:gt,disabled:!u,style:{...re.modalConfirm,...u?{}:{opacity:.5,cursor:"not-allowed"}},children:["Confirm · ",t(Math.min(parseFloat(B)||0,U))]})]})})()]})}),r.jsx("div",{style:re.note,children:"Set rates only affect time from today onward — past time keeps the rate it was earned at."})]})}const re={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},hero:{position:"relative",background:"linear-gradient(135deg,var(--accent-strong),var(--accent-2))",borderRadius:16,padding:"22px 24px",color:"#fff",marginBottom:14,textAlign:"center"},logIcon:{position:"absolute",top:12,right:12,border:"1px solid rgba(255,255,255,0.5)",background:"rgba(255,255,255,0.12)",color:"#fff",width:32,height:32,borderRadius:9,cursor:"pointer",display:"grid",placeItems:"center"},logClose:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:28,height:28,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},logNote:{fontSize:13.5,fontWeight:600,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modalCard:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"22px 22px 18px",width:360,maxWidth:"100%",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)"},logModal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"18px 18px 14px",width:440,maxWidth:"100%",maxHeight:"82vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",boxSizing:"border-box"},logModalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8,flexShrink:0},logScroll:{overflowY:"auto",display:"flex",flexDirection:"column",gap:2,paddingRight:2,minHeight:0},modalTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:4},modalSub:{fontSize:12.5,color:"var(--text-3)",fontWeight:600,marginBottom:14},modalInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:10,padding:"8px 12px",background:"var(--surface-2)",marginBottom:8},modalSign:{fontSize:16,color:"var(--text-2)",fontWeight:700},modalAmt:{border:"none",background:"none",outline:"none",flex:1,fontSize:18,fontWeight:700,fontFamily:"inherit",color:"var(--text)"},modalReason:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:14},modalActions:{display:"flex",gap:8},modalCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalConfirm:{flex:1,border:"none",background:"#C9A227",color:"#fff",padding:"10px 14px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},heroLabel:{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",opacity:.85},heroVal:{fontSize:44,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,lineHeight:1.05},heroSub:{fontSize:12.5,opacity:.9,marginTop:6},heroBtns:{display:"flex",gap:10,marginTop:16,justifyContent:"center"},heroBtnSolid:{border:"none",background:"#fff",color:"var(--accent-strong)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},heroBtnGhost:{border:"1px solid rgba(255,255,255,0.6)",background:"transparent",color:"#fff",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},btnDisabled:{opacity:.45,cursor:"not-allowed"},statRow:{display:"flex",gap:10,marginBottom:14},statCard:{flex:1,background:"var(--surface)",borderRadius:12,padding:"12px 14px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},statVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},card:{background:"var(--surface)",borderRadius:16,padding:"18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:10,flexWrap:"wrap"},periodTotal:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text-2)"},periodRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},periodChip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},periodChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},collapseBtn:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"inherit"},collapseHint:{fontSize:12,fontWeight:700,color:"var(--accent)"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"12px 0"},splitTrack:{display:"flex",height:16,borderRadius:8,overflow:"hidden",marginTop:12,marginBottom:12,border:"1px solid var(--border)"},legendRow:{display:"flex",gap:16,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:600,color:"var(--text-2)"},legendDot:{width:10,height:10,borderRadius:3,flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:20,flexWrap:"wrap",marginTop:6},pieChart:{position:"relative",width:130,height:130,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:78,height:78,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:10},pieLegRow:{display:"flex",alignItems:"center",gap:8},pieLegName:{flex:1,fontSize:13.5,fontWeight:600},pieLegPct:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",width:46,textAlign:"right"},pieLegMin:{fontSize:12,color:"var(--text-3)",fontWeight:600,minWidth:64,textAlign:"right"},rows:{display:"flex",flexDirection:"column",gap:2},row:{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:"1px solid var(--border)"},dot:{width:10,height:10,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:13.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},rowMeta:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,flexShrink:0},rowAmt:{fontSize:13.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",flexShrink:0,minWidth:64,textAlign:"right"},del:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",fontSize:16,lineHeight:1,padding:"0 2px",flexShrink:0},totalRow:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:10,marginTop:4,fontSize:14,fontWeight:700},totalVal:{fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},rateGrid:{display:"flex",flexDirection:"column",gap:10},rateRow:{display:"flex",alignItems:"center",gap:8},rateName:{flex:1,fontSize:14,fontWeight:600},rateInputWrap:{display:"flex",alignItems:"center",gap:3,border:"1px solid var(--border)",borderRadius:9,padding:"4px 10px",background:"var(--surface-2)"},unitSign:{fontSize:14,color:"var(--text-2)",fontWeight:600},rateInput:{border:"none",background:"none",outline:"none",width:64,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},unit:{fontSize:12,color:"var(--text-3)",fontWeight:600},note:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",fontStyle:"italic",marginTop:4}};function av(){return r.jsx("div",{style:an.page,children:r.jsxs("div",{style:an.card,children:[r.jsxs("div",{style:an.brand,children:[r.jsx("div",{style:an.logo,children:"B"}),r.jsx("span",{style:an.brandName,children:"Anvil"})]}),r.jsx("h1",{style:an.title,children:"Welcome to Anvil"}),r.jsx("p",{style:an.sub,children:"Sign in with Google to continue."}),r.jsxs("button",{onClick:()=>_.signInWithGoogle(),style:an.googleBtn,children:[r.jsx(dv,{}),"Sign in with Google"]})]})})}function dv(){return r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[r.jsx("path",{fill:"#4285F4",d:"M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84c-.21 1.13-.85 2.09-1.81 2.73v2.27h2.92c1.71-1.57 2.69-3.88 2.69-6.64z"}),r.jsx("path",{fill:"#34A853",d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.27c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.71H.96v2.34C2.44 15.98 5.48 18 9 18z"}),r.jsx("path",{fill:"#FBBC05",d:"M3.97 10.7c-.18-.54-.28-1.11-.28-1.7s.1-1.16.28-1.7V4.96H.96A8.997 8.997 0 0 0 0 9c0 1.45.35 2.83.96 4.04l3.01-2.34z"}),r.jsx("path",{fill:"#EA4335",d:"M9 3.58c1.32 0 2.51.45 3.44 1.35l2.59-2.59C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l3.01 2.34C4.68 5.16 6.66 3.58 9 3.58z"})]})}const an={page:{minHeight:"100vh",display:"grid",placeItems:"center",background:"var(--bg)",fontFamily:"'Inter',system-ui,sans-serif",padding:20},card:{width:"100%",maxWidth:380,background:"var(--surface)",borderRadius:16,padding:"32px 28px",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",display:"flex",flexDirection:"column",textAlign:"center"},brand:{display:"flex",alignItems:"center",justifyContent:"center",gap:9,marginBottom:20},logo:{width:32,height:32,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},brandName:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},title:{fontSize:22,fontWeight:700,margin:"0 0 4px",fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},sub:{fontSize:13.5,color:"var(--text-3)",margin:"0 0 24px"},googleBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,border:"1px solid var(--border)",background:"#fff",color:"#26241F",padding:"12px",borderRadius:10,fontSize:14.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},$d=1,Qm="anvil_month_start_day";function Pd(){try{return Number(localStorage.getItem(Qm))||$d}catch{return $d}}function Nu(e){const t=Math.min(28,Math.max(1,Number(e)||$d));try{localStorage.setItem(Qm,String(t))}catch{}return window.dispatchEvent(new CustomEvent("anvil-month-start",{detail:t})),t}function Km(){const[e,t]=c.useState(Pd());return c.useEffect(()=>{const n=o=>t(o.detail||Pd());return window.addEventListener("anvil-month-start",n),()=>window.removeEventListener("anvil-month-start",n)},[]),e}const Ou=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;function Ur(e,t,n=0){const o=e.getFullYear(),i=e.getMonth(),l=e.getDate()>=t?i:i-1,d=new Date(o,l+n,t),a=new Date(o,l+n+1,t-1);return[Ou(d),Ou(a)]}const Hu=["Salary","Stocks","Business","Interest","Rent","Gift","Other"],cv=["Bills","EMI","Rent","Food","Shopping","Transport","Health","Entertainment","Education","Other"],Gu=["Stocks","Mutual Fund","SIP","Fixed Deposit","Gold","Real Estate","PPF/EPF","Crypto","Other"],gv={Salary:"#4C9A6B",Stocks:"#3A7CA5",Business:"#C9A227",Interest:"#8268B0",Gift:"#C2773B",Bills:"#C2536B",EMI:"#A23E57",Food:"#E08E45",Shopping:"#8268B0",Transport:"#3A7CA5",Health:"#4C9A6B",Entertainment:"#C9A227",Education:"#5B7C99",Rent:"#5B8C5A",Other:"#9A968C"},rg=e=>gv[e]||"#9A968C",uv={Stocks:"#2F6B4F","Mutual Fund":"#3E9E6B",SIP:"#4FAE7E","Fixed Deposit":"#6BBE92",Gold:"#8ECDA8","Real Estate":"#1F5C3F","PPF/EPF":"#5BAE83",Crypto:"#7FC79E",Other:"#9AD4B3"},pv=e=>uv[e]||"#4C9A6B",Qr="#3E9E6B",gr="#D1556E",Yr="#3A7CA5",Ia="#8268B0",Xm=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,co=Xm(new Date),bv=[{id:"month",label:"This month"},{id:"last",label:"Last month"},{id:"year",label:"This year"},{id:"all",label:"All time"}];function mv(e,t){const n=new Date;return e==="month"?Ur(n,t):e==="last"?Ur(n,t,-1):e==="year"?[Xm(new Date(n.getFullYear(),0,1)),co]:["0000-01-01","9999-12-31"]}function hv(){const e=Qi(),[t,n]=c.useState("overview"),[o,i]=c.useState([]),[s,l]=c.useState([]),[d,a]=c.useState([]),[g,m]=c.useState([]),[y,f]=c.useState([]),[E,C]=c.useState(!1),w=c.useCallback(()=>Promise.all([_.getTxns(),_.getExpenses(),_.getInvestments()]).then(([S,W,F])=>(i(S),l(W.categories),a(W.logs),m(F),_.getFixedItems())).then(f).then(()=>C(!0)).catch(()=>C(!0)),[]);c.useEffect(()=>{w()},[w]);const D=c.useMemo(()=>{const S={};return s.forEach(W=>S[W.id]=W),S},[s]),b=c.useMemo(()=>d.map(S=>{var W;return{id:`exp-${S.id}`,rawId:S.id,source:"expense",kind:"expense",category:((W=D[S.category_id])==null?void 0:W.name)||"Other",amount:S.amount,note:S.note,date:S.date}}),[d,D]),p=c.useMemo(()=>o.filter(S=>S.kind==="expense").map(S=>({...S,source:"legacy"})),[o]),h=c.useMemo(()=>o.filter(S=>S.kind==="income").map(S=>({...S,source:"legacy"})),[o]),T=c.useMemo(()=>[...h,...p,...b].sort((S,W)=>W.date.localeCompare(S.date)),[h,p,b]),v=S=>jl(S,e.code);return r.jsxs("div",{style:k.page,children:[r.jsxs("div",{style:k.head,children:[r.jsx("div",{style:k.eyebrow,children:"Anvil · Wallet"}),r.jsx("h1",{style:k.h1,children:"Wallet"}),r.jsx("div",{style:k.subhead,children:"Your money — what comes in, what goes out, and where it's headed."})]}),r.jsx("div",{style:k.tabs,children:[["overview","Overview",qx],["money","Money",qc],["calc","Calculators",Ux]].map(([S,W,F])=>r.jsxs("button",{onClick:()=>n(S),style:{...k.tab,...t===S?k.tabOn:{}},children:[r.jsx(F,{size:15})," ",W]},S))}),t==="overview"&&r.jsx(fv,{txns:T,investments:g,loaded:E,money:v,cur:e}),t==="money"&&r.jsx(vv,{txns:T,expCats:s,investments:g,fixedItems:y,reload:w,money:v,cur:e}),t==="calc"&&r.jsx(kv,{money:v,cur:e})]})}function fv({txns:e,investments:t,loaded:n,money:o,cur:i}){const s=Km(),[l,d]=c.useState("month"),[a,g]=mv(l,s),m=c.useMemo(()=>e.filter(A=>A.date>=a&&A.date<=g),[e,a,g]),y=m.filter(A=>A.kind==="income"),f=m.filter(A=>A.kind==="expense"),E=y.reduce((A,ie)=>A+ie.amount,0),C=f.reduce((A,ie)=>A+ie.amount,0),w=c.useMemo(()=>t.filter(A=>A.date>=a&&A.date<=g),[t,a,g]),D=w.reduce((A,ie)=>A+ie.invested,0),b=C+D,p=E-b,h=t.reduce((A,ie)=>A+ie.invested,0),T=t.reduce((A,ie)=>A+ie.current_value,0),v=T-h,S=A=>{const ie={};return A.forEach(B=>{ie[B.category]=(ie[B.category]||0)+B.amount}),Object.entries(ie).map(([B,I])=>({category:B,amount:I,color:rg(B)})).sort((B,I)=>I.amount-B.amount)},W=S(f),F=c.useMemo(()=>{const A={};return w.forEach(ie=>{A[ie.kind]=(A[ie.kind]||0)+ie.invested}),Object.entries(A).map(([ie,B])=>({category:ie,amount:B,color:pv(ie)})).sort((ie,B)=>B.amount-ie.amount)},[w]),j=[...W,...F];return r.jsxs(r.Fragment,{children:[r.jsx("div",{style:k.presetRow,children:bv.map(A=>r.jsx("button",{onClick:()=>d(A.id),style:{...k.preset,...l===A.id?k.presetOn:{}},children:A.label},A.id))}),r.jsxs("div",{style:k.sumGrid,children:[r.jsx(Ta,{icon:r.jsx(Wx,{size:16}),label:"Income",value:o(E),color:Qr}),r.jsx(Ta,{icon:r.jsx(wm,{size:16}),label:"Expenses",value:o(b),color:gr}),r.jsx(Ta,{icon:p>=0?r.jsx(Xc,{size:16}):r.jsx(Kc,{size:16}),label:"Net savings",value:o(p),color:p>=0?Qr:gr})]}),D>0&&r.jsxs("div",{style:k.investNote,children:[r.jsx(kl,{size:13,color:Yr})," Includes ",o(D)," invested this period — counted as outgoing and deducted from net savings."]}),t.length>0&&r.jsxs("div",{style:k.card,children:[r.jsxs("div",{style:k.cardTitleRow,children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx(kl,{size:18,color:Yr}),r.jsxs("div",{children:[r.jsx("div",{style:k.cardTitle,children:"Assets & investments"}),r.jsx("div",{style:k.cardSub,children:"Across all your holdings, all time"})]})]}),r.jsx("div",{style:{...k.cardTotal,color:Yr},children:o(T)})]}),r.jsxs("div",{style:k.healthStats,children:[r.jsxs("div",{style:k.healthStat,children:[r.jsx("span",{style:k.healthStatV,children:o(h)}),r.jsx("span",{style:k.healthStatL,children:"Total invested"})]}),r.jsxs("div",{style:k.healthStat,children:[r.jsxs("span",{style:{...k.healthStatV,color:v>=0?Qr:gr},children:[v>=0?"+":"",o(v)]}),r.jsx("span",{style:k.healthStatL,children:"Unrealized gain"})]})]})]}),n?m.length===0&&w.length===0?r.jsx("div",{style:k.card,children:r.jsxs("div",{style:k.muted,children:["No transactions in this period. Add some under the ",r.jsx("b",{children:"Money"})," tab."]})}):r.jsxs(r.Fragment,{children:[r.jsx(yv,{totalIn:E,totalOut:b}),r.jsxs("div",{style:k.twoCol,children:[r.jsx(Uu,{title:"Incoming",subtitle:"Where your money comes from",total:E,data:S(y),accent:Qr,cur:i}),r.jsx(Uu,{title:"Outgoing",subtitle:"Spending + money set aside in investments",total:b,data:j,accent:gr,cur:i})]})]}):r.jsx("div",{style:k.muted,children:"Loading…"})]})}function Ta({icon:e,label:t,value:n,color:o}){return r.jsxs("div",{style:k.sumCard,children:[r.jsx("div",{style:{...k.sumIcon,color:o,background:o+"1A"},children:e}),r.jsx("div",{style:k.sumLabel,children:t}),r.jsx("div",{style:{...k.sumVal,color:o},children:n})]})}function Uu({title:e,subtitle:t,total:n,data:o,accent:i,cur:s}){const[l,d]=c.useState(null);let a=0;const g=o.map(f=>{const E=n>0?a/n*100:0;a+=f.amount;const C=n>0?a/n*100:0;return{...f,start:E,end:C,color:f.color||rg(f.category),pct:n>0?f.amount/n*100:0}}),m=l!=null?g[l]:null,y=g.length===1;return r.jsxs("div",{style:k.card,children:[r.jsxs("div",{style:k.cardTitleRow,children:[r.jsxs("div",{children:[r.jsx("div",{style:{...k.cardTitle,color:i},children:e}),r.jsx("div",{style:k.cardSub,children:t})]}),r.jsx("div",{style:{...k.cardTotal,color:i},children:jl(n,s.code)})]}),o.length===0?r.jsx("div",{style:k.muted,children:"Nothing logged."}):r.jsxs("div",{style:k.pieWrap,children:[r.jsxs("div",{style:k.pieChart,onMouseLeave:()=>d(null),children:[r.jsx("svg",{viewBox:"0 0 120 120",style:k.pieSvg,children:g.map((f,E)=>r.jsx("path",{d:xv(f.start,f.end,E===l,y),fill:f.color,onMouseEnter:()=>d(E),style:{cursor:"pointer",transition:"transform 0.15s, filter 0.15s",filter:E===l?"brightness(1.08)":"none"}},f.category))}),r.jsx("div",{style:{...k.pieHole,...m?{transform:"translate(-50%,-50%) scale(1.06)",boxShadow:`0 0 0 4px ${m.color}33`}:{}},children:m?r.jsxs(r.Fragment,{children:[r.jsx("span",{style:{...k.pieHoleVal,color:m.color,fontSize:13},children:hu(m.amount,s.code)}),r.jsxs("span",{style:k.pieHoleLbl,children:[Math.round(m.pct),"% · ",m.category]})]}):r.jsxs(r.Fragment,{children:[r.jsx("span",{style:k.pieHoleVal,children:hu(n,s.code)}),r.jsx("span",{style:k.pieHoleLbl,children:"total"})]})})]}),r.jsx("div",{style:k.pieLegend,children:g.map((f,E)=>r.jsxs("div",{style:{...k.legendRow,...E===l?k.legendRowOn:{}},onMouseEnter:()=>d(E),onMouseLeave:()=>d(null),children:[r.jsx("span",{style:{...k.dot,background:f.color}}),r.jsx("span",{style:k.legendName,children:f.category}),r.jsxs("span",{style:k.legendPct,children:[Math.round(f.pct),"%"]}),r.jsx("span",{style:k.legendAmt,children:jl(f.amount,s.code)})]},f.category))})]})]})}function xv(e,t,n,o){const a=n?6:0,g=(S,W,F=0,j=0)=>{const A=S/100*2*Math.PI-Math.PI/2;return[60+F+W*Math.cos(A),60+j+W*Math.sin(A)]},m=(e+t)/2/100*2*Math.PI-Math.PI/2,y=o?0:Math.cos(m)*a,f=o?0:Math.sin(m)*a;if(t-e>=99.999)return`M ${60+y} ${60+f-58} A 58 58 0 1 1 ${60+y-.01} ${60+f-58} L ${60+y-.01} ${60+f-35} A 35 35 0 1 0 ${60+y} ${60+f-35} Z`;const[E,C]=g(e,58,y,f),[w,D]=g(t,58,y,f),[b,p]=g(t,35,y,f),[h,T]=g(e,35,y,f),v=t-e>50?1:0;return`M ${E} ${C} A 58 58 0 ${v} 1 ${w} ${D} L ${b} ${p} A 35 35 0 ${v} 0 ${h} ${T} Z`}function yv({totalIn:e,totalOut:t}){const n=e-t,o=e>0?n/e:0,i=e===0?0:Math.max(0,Math.min(100,Math.round(50+o*100)));let s,l,d;e===0?(s="No income logged",l="#9A968C",d="Add your income to see your financial health."):o>=.3?(s="Excellent",l="#3E9E6B",d="You're saving 30%+ of income — keep investing the surplus."):o>=.2?(s="Healthy",l="#4C9A6B",d="Solid savings rate. Consider automating a SIP with the surplus."):o>=.1?(s="Okay",l="#C9A227",d="Decent, but aim for 20%+. Trim your biggest expense category."):o>=0?(s="Tight",l="#C2773B",d="You're saving very little. Review recurring bills and EMIs."):(s="Overspending",l="#D1556E",d="You're spending more than you earn. Cut back to avoid debt.");const a=e>0?Math.min(100,Math.round(t/e*100)):0;return r.jsxs("div",{style:k.card,children:[r.jsxs("div",{style:k.cardTitleRow,children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx(ay,{size:18,color:l}),r.jsxs("div",{children:[r.jsx("div",{style:k.cardTitle,children:"Financial health"}),r.jsx("div",{style:k.cardSub,children:"Based on your savings rate this period"})]})]}),r.jsxs("div",{style:{textAlign:"right"},children:[r.jsx("div",{style:{...k.healthScore,color:l},children:e===0?"—":i}),r.jsx("div",{style:{...k.healthStatus,color:l},children:s})]})]}),r.jsx("div",{style:k.gaugeTrack,children:r.jsx("div",{style:{...k.gaugeFill,width:`${e===0?0:i}%`,background:l}})}),r.jsxs("div",{style:k.healthStats,children:[r.jsxs("div",{style:k.healthStat,children:[r.jsxs("span",{style:k.healthStatV,children:[e>0?Math.round(o*100):0,"%"]}),r.jsx("span",{style:k.healthStatL,children:"Savings rate"})]}),r.jsxs("div",{style:k.healthStat,children:[r.jsxs("span",{style:k.healthStatV,children:[a,"%"]}),r.jsx("span",{style:k.healthStatL,children:"of income spent"})]})]}),r.jsx("div",{style:{...k.tip,borderColor:l+"55",background:l+"12",color:l},children:d})]})}function vv({txns:e,expCats:t,investments:n,fixedItems:o,reload:i,money:s,cur:l}){const[d,a]=c.useState(""),[g,m]=c.useState("Salary"),[y,f]=c.useState(co),[E,C]=c.useState(""),[w,D]=c.useState(null),[b,p]=c.useState(null),[h,T]=c.useState(null),{deleteItem:v,toasts:S,handleUndo:W,handleDismiss:F}=Jt(_.deleteTxn,_.restoreTxn,i),{deleteItem:j,toasts:A,handleUndo:ie,handleDismiss:B}=Jt(_.deleteExpenseLog,_.restoreExpenseLog,i),{deleteItem:I,toasts:J,handleUndo:be,handleDismiss:se}=Jt(_.deleteInvestment,_.restoreInvestment,i),ye=()=>{var x;return T({id:null,kind:"expense",name:"",amount:"",category_id:((x=t[0])==null?void 0:x.id)||"",invest_kind:"Stocks",note:""})},G=x=>{var V;return T({id:x.id,kind:x.kind,name:x.name,amount:String(x.amount),category_id:x.category_id||((V=t[0])==null?void 0:V.id)||"",invest_kind:x.invest_kind||"Stocks",note:x.note||""})},Y=async()=>{const x=h.name.trim(),V=parseFloat(h.amount)||0;if(!x||V<=0)return;const ge={kind:h.kind,name:x,amount:V,note:h.note.trim(),...h.kind==="expense"?{category_id:Number(h.category_id)}:{invest_kind:h.invest_kind}};h.id?await _.updateFixedItem(h.id,ge):await _.createFixedItem(ge),T(null),i()},oe=async x=>{window.confirm(`Stop "${x.name}" from auto-posting each month? Past entries it already created will stay.`)&&(await _.deleteFixedItem(x.id),i())},K=async x=>{await _.updateFixedItem(x.id,{active:!x.active}),i()},pe=()=>p({id:null,name:"",kind:"Stocks",invested:"",current_value:"",date:co,note:""}),O=x=>p({id:x.id,name:x.name,kind:x.kind,invested:String(x.invested),current_value:String(x.current_value),date:x.date,note:x.note||""}),$=async()=>{const x=b.name.trim(),V=parseFloat(b.invested)||0,ge=parseFloat(b.current_value)||0;if(!x)return;const je={name:x,kind:b.kind,invested:V,current_value:ge,note:b.note.trim(),date:b.date};b.id?await _.updateInvestment(b.id,je):await _.createInvestment(je),p(null),i()},P=n.reduce((x,V)=>x+V.invested,0),le=n.reduce((x,V)=>x+V.current_value,0),de=le-P,Te=async()=>{const x=parseFloat(d);!x||x<=0||(await _.createTxn({kind:"income",category:g,amount:x,note:E.trim(),date:y}),a(""),C(""),i())},Q=x=>D({id:x.id,rawId:x.rawId,source:x.source,kind:x.kind,amount:String(x.amount),category:x.category,date:x.date,note:x.note||""}),ne=(w==null?void 0:w.source)==="expense"?t.map(x=>x.name):(w==null?void 0:w.kind)==="income"?Hu:cv,R=async()=>{const x=parseFloat(w.amount);if(!(!x||x<=0)){if(w.source==="expense"){const V=t.find(ge=>ge.name===w.category);await _.updateExpenseLog(w.rawId,{amount:x,note:w.note.trim(),date:w.date,...V?{category_id:V.id}:{}})}else await _.updateTxn(w.id,{kind:w.kind,category:w.category,amount:x,note:w.note.trim(),date:w.date});D(null),i()}},U=x=>{x.source==="expense"?j(x.rawId,x.category):v(x.id,x.category)},M=c.useMemo(()=>{const x={};return e.forEach(V=>{(x[V.date]=x[V.date]||[]).push(V)}),Object.entries(x).sort((V,ge)=>ge[0].localeCompare(V[0]))},[e]),z=x=>new Date(x+"T00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:k.card,children:[r.jsx("div",{style:k.cardTitle,children:"Add income"}),r.jsxs("div",{style:k.cardSub,children:["Expenses are added from the ",r.jsx("b",{children:"Expenses"})," section and show up here automatically."]}),r.jsxs("div",{style:k.formGrid,children:[r.jsx("input",{type:"number",inputMode:"decimal",placeholder:"Amount",value:d,onChange:x=>a(x.target.value),onKeyDown:x=>x.key==="Enter"&&Te(),style:k.input,autoFocus:!0}),r.jsx("select",{value:g,onChange:x=>m(x.target.value),style:k.input,children:Hu.map(x=>r.jsx("option",{children:x},x))}),r.jsx("input",{type:"date",value:y,max:co,onChange:x=>f(x.target.value),style:k.input})]}),r.jsx("input",{placeholder:"Note (optional)",value:E,onChange:x=>C(x.target.value),onKeyDown:x=>x.key==="Enter"&&Te(),style:{...k.input,marginTop:8}}),r.jsxs("button",{onClick:Te,style:{...k.addBtn,background:Qr},children:[r.jsx(Ze,{size:15})," Add income"]})]}),r.jsxs("div",{style:k.card,children:[r.jsxs("div",{style:k.cardTitleRow,children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx(Iy,{size:18,color:Ia}),r.jsxs("div",{children:[r.jsx("div",{style:k.cardTitle,children:"Fixed items"}),r.jsx("div",{style:k.cardSub,children:"EMI, rent, SIP… auto-posted at the start of every billing cycle"})]})]}),r.jsxs("button",{onClick:ye,style:{...k.invAddBtn,background:Ia},children:[r.jsx(Ze,{size:14})," Add"]})]}),o.length===0?r.jsx("div",{style:k.muted,children:"No fixed items yet — add an EMI or rent to auto-post it every cycle."}):r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:o.map(x=>{var ge;const V=x.kind==="expense"?((ge=t.find(je=>je.id===x.category_id))==null?void 0:ge.name)||"Other":x.invest_kind||"Other";return r.jsxs("div",{style:{...k.invRow,opacity:x.active?1:.5},children:[r.jsx("span",{style:{...k.txnDot,background:x.kind==="expense"?gr:Yr}}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{style:k.txnCat,children:x.name}),r.jsxs("div",{style:k.txnNote,children:[x.kind==="expense"?"Fixed expense":"Fixed investment"," · ",V]})]}),r.jsxs("span",{style:{...k.txnAmt,color:x.kind==="expense"?gr:Yr},children:[s(x.amount),"/mo"]}),r.jsx("button",{onClick:()=>K(x),style:k.delBtn,title:x.active?"Pause":"Resume",children:x.active?r.jsx(Dm,{size:13}):r.jsx(Vc,{size:13})}),r.jsx("button",{onClick:()=>G(x),style:k.delBtn,children:r.jsx(bt,{size:13})}),r.jsx("button",{onClick:()=>oe(x),style:k.delBtn,children:r.jsx(Be,{size:14})})]},x.id)})})]}),r.jsxs("div",{style:k.card,children:[r.jsxs("div",{style:k.cardTitleRow,children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx(kl,{size:18,color:Yr}),r.jsxs("div",{children:[r.jsx("div",{style:k.cardTitle,children:"Investments"}),r.jsx("div",{style:k.cardSub,children:"Asset generation — what you've put in vs. what it's worth now"})]})]}),r.jsxs("button",{onClick:pe,style:k.invAddBtn,children:[r.jsx(Ze,{size:14})," Add"]})]}),n.length===0?r.jsx("div",{style:k.muted,children:"No investments tracked yet."}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:k.healthStats,children:[r.jsxs("div",{style:k.healthStat,children:[r.jsx("span",{style:k.healthStatV,children:s(P)}),r.jsx("span",{style:k.healthStatL,children:"Invested"})]}),r.jsxs("div",{style:k.healthStat,children:[r.jsx("span",{style:k.healthStatV,children:s(le)}),r.jsx("span",{style:k.healthStatL,children:"Current value"})]}),r.jsxs("div",{style:k.healthStat,children:[r.jsxs("span",{style:{...k.healthStatV,color:de>=0?Qr:gr},children:[de>=0?"+":"",s(de)]}),r.jsx("span",{style:k.healthStatL,children:"Gain / loss"})]})]}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginTop:4},children:n.map(x=>{const V=x.current_value-x.invested,ge=x.invested>0?V/x.invested*100:0;return r.jsxs("div",{style:k.invRow,children:[r.jsx("span",{style:{...k.txnDot,background:Yr}}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{style:k.txnCat,children:x.name}),r.jsxs("div",{style:k.txnNote,children:[x.kind," · invested ",s(x.invested)]})]}),r.jsxs("div",{style:{textAlign:"right"},children:[r.jsx("div",{style:k.txnAmt,children:s(x.current_value)}),r.jsxs("div",{style:{...k.invPct,color:V>=0?Qr:gr},children:[V>=0?"+":"",Math.round(ge),"%"]})]}),r.jsx("button",{onClick:()=>O(x),style:k.delBtn,children:r.jsx(bt,{size:13})}),r.jsx("button",{onClick:()=>I(x.id,x.name),style:k.delBtn,children:r.jsx(Be,{size:14})})]},x.id)})})]})]}),r.jsxs("div",{style:k.card,children:[r.jsx("div",{style:k.cardTitle,children:"History"}),M.length===0?r.jsx("div",{style:k.muted,children:"No transactions yet."}):r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:M.map(([x,V])=>r.jsxs("div",{children:[r.jsx("div",{style:k.dateHead,children:z(x)}),V.map(ge=>(w==null?void 0:w.id)===ge.id?r.jsxs("div",{style:k.editTxn,children:[r.jsxs("div",{style:k.formGrid,children:[r.jsx("input",{type:"number",inputMode:"decimal",value:w.amount,onChange:je=>D({...w,amount:je.target.value}),style:k.input}),r.jsx("select",{value:w.category,onChange:je=>D({...w,category:je.target.value}),style:k.input,children:ne.map(je=>r.jsx("option",{children:je},je))}),r.jsx("input",{type:"date",value:w.date,max:co,onChange:je=>D({...w,date:je.target.value}),style:k.input})]}),r.jsx("input",{placeholder:"Note (optional)",value:w.note,onChange:je=>D({...w,note:je.target.value}),onKeyDown:je=>je.key==="Enter"&&R(),style:{...k.input,marginTop:8}}),r.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[r.jsxs("button",{onClick:()=>D(null),style:k.editCancel,children:[r.jsx(Be,{size:14})," Cancel"]}),r.jsxs("button",{onClick:R,style:{...k.addBtn,marginTop:0,flex:1,background:w.kind==="income"?Qr:gr},children:[r.jsx(Ne,{size:15})," Save"]})]})]},ge.id):r.jsxs("div",{style:k.txnRow,children:[r.jsx("span",{style:{...k.txnDot,background:rg(ge.category)}}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{style:k.txnCat,children:ge.category}),ge.note&&r.jsx("div",{style:k.txnNote,children:ge.note})]}),r.jsxs("span",{style:{...k.txnAmt,color:ge.kind==="income"?Qr:gr},children:[ge.kind==="income"?"+":"−",s(ge.amount)]}),r.jsx("button",{onClick:()=>Q(ge),style:k.delBtn,children:r.jsx(bt,{size:13})}),r.jsx("button",{onClick:()=>U(ge),style:k.delBtn,children:r.jsx(Be,{size:14})})]},ge.id))]},x))})]}),b&&r.jsx("div",{style:k.overlay,onClick:()=>p(null),children:r.jsxs("div",{style:k.modal,onClick:x=>x.stopPropagation(),children:[r.jsxs("div",{style:k.modalHead,children:[r.jsx("span",{style:k.modalTitle,children:b.id?"Edit investment":"New investment"}),r.jsx("button",{onClick:()=>p(null),style:k.iconBtnPlain,children:r.jsx(Be,{size:16})})]}),r.jsx("label",{style:k.label,children:"Name *"}),r.jsx("input",{autoFocus:!0,value:b.name,onChange:x=>p(V=>({...V,name:x.target.value})),placeholder:"e.g. Nifty Index Fund, HDFC FD…",style:k.input}),r.jsx("label",{style:k.label,children:"Type"}),r.jsx("select",{value:b.kind,onChange:x=>p(V=>({...V,kind:x.target.value})),style:k.input,children:Gu.map(x=>r.jsx("option",{children:x},x))}),r.jsxs("div",{style:k.formGrid,children:[r.jsxs("div",{children:[r.jsx("label",{style:k.label,children:"Invested"}),r.jsx("input",{type:"number",inputMode:"decimal",value:b.invested,onChange:x=>p(V=>({...V,invested:x.target.value})),placeholder:"0",style:k.input})]}),r.jsxs("div",{children:[r.jsx("label",{style:k.label,children:"Current value"}),r.jsx("input",{type:"number",inputMode:"decimal",value:b.current_value,onChange:x=>p(V=>({...V,current_value:x.target.value})),placeholder:"0",style:k.input})]}),r.jsxs("div",{children:[r.jsx("label",{style:k.label,children:"Date"}),r.jsx("input",{type:"date",value:b.date,max:co,onChange:x=>p(V=>({...V,date:x.target.value})),style:k.input})]})]}),r.jsx("label",{style:k.label,children:"Note (optional)"}),r.jsx("input",{value:b.note,onChange:x=>p(V=>({...V,note:x.target.value})),placeholder:"Folio no., broker, etc.",style:k.input}),r.jsxs("div",{style:k.modalActions,children:[r.jsx("button",{onClick:()=>p(null),style:k.cancelBtn,children:"Cancel"}),r.jsxs("button",{onClick:$,disabled:!b.name.trim(),style:{...k.saveBtn,...b.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[r.jsx(Ne,{size:15})," ",b.id?"Save":"Add"]})]})]})}),h&&r.jsx("div",{style:k.overlay,onClick:()=>T(null),children:r.jsxs("div",{style:k.modal,onClick:x=>x.stopPropagation(),children:[r.jsxs("div",{style:k.modalHead,children:[r.jsx("span",{style:k.modalTitle,children:h.id?"Edit fixed item":"New fixed item"}),r.jsx("button",{onClick:()=>T(null),style:k.iconBtnPlain,children:r.jsx(Be,{size:16})})]}),r.jsxs("div",{style:k.kindToggle,children:[r.jsxs("button",{onClick:()=>T(x=>({...x,kind:"expense"})),style:{...k.kindBtn,...h.kind==="expense"?{background:gr,color:"#fff",borderColor:gr}:{}},children:[r.jsx(wm,{size:15})," Expense"]}),r.jsxs("button",{onClick:()=>T(x=>({...x,kind:"investment"})),style:{...k.kindBtn,...h.kind==="investment"?{background:Yr,color:"#fff",borderColor:Yr}:{}},children:[r.jsx(kl,{size:15})," Investment"]})]}),r.jsx("label",{style:k.label,children:"Name *"}),r.jsx("input",{autoFocus:!0,value:h.name,onChange:x=>T(V=>({...V,name:x.target.value})),placeholder:h.kind==="expense"?"e.g. Home loan EMI, Rent…":"e.g. Monthly SIP — Nifty Index",style:k.input}),r.jsxs("div",{style:k.formGrid,children:[r.jsxs("div",{children:[r.jsx("label",{style:k.label,children:"Amount / month"}),r.jsx("input",{type:"number",inputMode:"decimal",value:h.amount,onChange:x=>T(V=>({...V,amount:x.target.value})),placeholder:"0",style:k.input})]}),r.jsxs("div",{children:[r.jsx("label",{style:k.label,children:h.kind==="expense"?"Category":"Type"}),h.kind==="expense"?r.jsx("select",{value:h.category_id,onChange:x=>T(V=>({...V,category_id:x.target.value})),style:k.input,children:t.map(x=>r.jsx("option",{value:x.id,children:x.name},x.id))}):r.jsx("select",{value:h.invest_kind,onChange:x=>T(V=>({...V,invest_kind:x.target.value})),style:k.input,children:Gu.map(x=>r.jsx("option",{children:x},x))})]})]}),r.jsx("label",{style:k.label,children:"Note (optional)"}),r.jsx("input",{value:h.note,onChange:x=>T(V=>({...V,note:x.target.value})),placeholder:"Loan account no., etc.",style:k.input}),r.jsx("p",{style:k.fixedHint,children:"Posts automatically at the start of every billing cycle (set in Settings → Currency). This one posts immediately for the current cycle when you save."}),r.jsxs("div",{style:k.modalActions,children:[r.jsx("button",{onClick:()=>T(null),style:k.cancelBtn,children:"Cancel"}),r.jsxs("button",{onClick:Y,disabled:!h.name.trim()||!(parseFloat(h.amount)>0),style:{...k.saveBtn,background:Ia,...!h.name.trim()||!(parseFloat(h.amount)>0)?{opacity:.5,cursor:"not-allowed"}:{}},children:[r.jsx(Ne,{size:15})," ",h.id?"Save":"Add"]})]})]})}),r.jsx(er,{toasts:S,onUndo:W,onDismiss:F}),r.jsx(er,{toasts:A,onUndo:ie,onDismiss:B}),r.jsx(er,{toasts:J,onUndo:be,onDismiss:se})]})}function kv({money:e,cur:t}){return r.jsxs(r.Fragment,{children:[r.jsx(jv,{money:e,cur:t}),r.jsx(Sv,{money:e,cur:t})]})}function Hn({label:e,value:t,set:n,min:o,max:i,step:s,suffix:l}){return r.jsxs("div",{style:k.field,children:[r.jsxs("div",{style:k.fieldTop,children:[r.jsx("span",{style:k.fieldLabel,children:e}),r.jsxs("div",{style:k.fieldInputWrap,children:[r.jsx("input",{type:"number",value:t,onChange:d=>n(d.target.value),style:k.fieldInput}),l&&r.jsx("span",{style:k.fieldSuffix,children:l})]})]}),r.jsx("input",{type:"range",min:o,max:i,step:s,value:t,onChange:d=>n(d.target.value),style:k.range})]})}function jv({money:e,cur:t}){const[n,o]=c.useState(3e4),[i,s]=c.useState(12),[l,d]=c.useState(15),{invested:a,futureValue:g,gains:m,yearly:y}=c.useMemo(()=>{const E=Math.max(0,parseFloat(n)||0),C=Math.max(0,parseFloat(i)||0),w=Math.max(0,Math.min(60,parseInt(l)||0)),D=C/12/100,b=v=>v<=0?0:D===0?E*v:E*((Math.pow(1+D,v)-1)/D)*(1+D),p=[];for(let v=1;v<=w;v++)p.push({year:v,invested:E*12*v,value:b(v*12)});const h=b(w*12),T=E*12*w;return{invested:T,futureValue:h,gains:h-T,yearly:p}},[n,i,l]),f=Math.max(1,...y.map(E=>E.value));return r.jsxs("div",{style:k.card,children:[r.jsx("div",{style:k.cardTitleRow,children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx(wy,{size:18,color:"#3A7CA5"}),r.jsxs("div",{children:[r.jsx("div",{style:k.cardTitle,children:"SIP projection"}),r.jsx("div",{style:k.cardSub,children:"Mutual fund / SIP future value"})]})]})}),r.jsx(Hn,{label:"Monthly investment",value:n,set:o,min:500,max:5e5,step:500,suffix:t.symbol}),r.jsx(Hn,{label:"Expected return (p.a.)",value:i,set:s,min:1,max:30,step:.5,suffix:"%"}),r.jsx(Hn,{label:"Time period",value:l,set:d,min:1,max:40,step:1,suffix:"yrs"}),r.jsxs("div",{style:k.resultHero,children:[r.jsx("div",{style:k.resultLabel,children:"Projected wealth"}),r.jsx("div",{style:{...k.resultVal,color:"#3A7CA5"},children:e(g)})]}),r.jsxs("div",{style:k.splitRow,children:[r.jsxs("div",{style:k.splitItem,children:[r.jsx("span",{style:k.splitV,children:e(a)}),r.jsx("span",{style:k.splitL,children:"Invested"})]}),r.jsxs("div",{style:k.splitItem,children:[r.jsx("span",{style:{...k.splitV,color:"#3E9E6B"},children:e(m)}),r.jsx("span",{style:k.splitL,children:"Est. returns"})]})]}),y.length>0&&r.jsxs("div",{style:k.chartWrap,children:[r.jsx("div",{style:k.chartBars,children:y.map(E=>r.jsx("div",{style:k.chartCol,title:`Year ${E.year}: ${e(E.value)}`,children:r.jsx("div",{style:{...k.chartStack,height:`${E.value/f*100}%`},children:r.jsx("div",{style:{...k.chartGain,height:`${(1-E.invested/E.value)*100}%`}})})},E.year))}),r.jsxs("div",{style:k.chartAxis,children:[r.jsx("span",{children:"Yr 1"}),r.jsxs("span",{style:{marginLeft:"auto"},children:["Yr ",y.length]})]}),r.jsxs("div",{style:k.legend,children:[r.jsxs("span",{style:k.legendItem,children:[r.jsx("span",{style:{...k.legendDot,background:"#9DBFD6"}})," Invested"]}),r.jsxs("span",{style:k.legendItem,children:[r.jsx("span",{style:{...k.legendDot,background:"#3E9E6B"}})," Returns"]})]})]})]})}function Vu(e,t,n,o=0,i=0){let s=Math.max(0,e-i),l=0,d=0,a=i;const g=1200;for(;s>.01&&d<g;){const m=s*t;let y=n+o,f=y-m;if(f<=0)return{months:1/0,totalInterest:1/0,totalPaid:1/0};f>s&&(f=s,y=s+m),s-=f,l+=m,a+=y,d++}return{months:d,totalInterest:l,totalPaid:a}}const Yu=e=>{if(!isFinite(e))return"—";const t=Math.floor(e/12),n=e%12;return(t?`${t}y `:"")+`${n}m`},wv=e=>{if(!isFinite(e))return"—";const t=new Date;return t.setMonth(t.getMonth()+e),t.toLocaleDateString("en-US",{month:"short",year:"numeric"})};function Sv({money:e,cur:t}){const[n,o]=c.useState(2e6),[i,s]=c.useState(9),[l,d]=c.useState(20),[a,g]=c.useState(5e5),[m,y]=c.useState("once"),[f,E]=c.useState("tenure"),C=c.useMemo(()=>{const h=Math.max(0,parseFloat(n)||0),T=Math.max(0,parseFloat(i)||0)/12/100,v=Math.max(1,Math.round((parseFloat(l)||0)*12)),S=T===0?h/v:h*T*Math.pow(1+T,v)/(Math.pow(1+T,v)-1);return{P:h,i:T,n:v,emi:S,totalPay:S*v,totalInterest:S*v-h}},[n,i,l]),w=m==="monthly"?"tenure":f,D=c.useMemo(()=>{const{P:h,i:T,n:v,emi:S,totalInterest:W}=C,F=Math.max(0,parseFloat(a)||0);if(F<=0)return null;let j=S,A=v,ie=W,B=C.totalPay;if(m==="once"&&w==="emi"){const I=Math.max(0,h-F);j=T===0?I/v:I*T*Math.pow(1+T,v)/(Math.pow(1+T,v)-1),A=v,ie=j*v-I,B=F+j*v}else if(m==="once"){const I=Vu(h,T,S,0,F);A=I.months,ie=I.totalInterest,B=I.totalPaid}else{const I=Vu(h,T,S,F,0);A=I.months,ie=I.totalInterest,B=I.totalPaid}return{newEMI:j,newMonths:A,newInterest:ie,totalPaid:B,interestSaved:Math.max(0,W-ie),monthsSaved:Math.max(0,v-(isFinite(A)?A:v))}},[C,a,m,w]),b=C.totalPay>0?C.P/C.totalPay*100:0,p=m==="once"?Math.max(1e5,Math.round(C.P)):Math.max(5e4,Math.round(C.emi*3));return r.jsxs("div",{style:k.card,children:[r.jsx("div",{style:k.cardTitleRow,children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx(uy,{size:18,color:"#C2536B"}),r.jsxs("div",{children:[r.jsx("div",{style:k.cardTitle,children:"EMI calculator"}),r.jsx("div",{style:k.cardSub,children:"Loan / mortgage monthly payment"})]})]})}),r.jsx(Hn,{label:"Loan amount",value:n,set:o,min:5e4,max:5e7,step:5e4,suffix:t.symbol}),r.jsx(Hn,{label:"Interest rate (p.a.)",value:i,set:s,min:1,max:24,step:.1,suffix:"%"}),r.jsx(Hn,{label:"Tenure",value:l,set:d,min:1,max:30,step:1,suffix:"yrs"}),r.jsxs("div",{style:k.resultHero,children:[r.jsx("div",{style:k.resultLabel,children:"Monthly EMI"}),r.jsx("div",{style:{...k.resultVal,color:"#C2536B"},children:e(C.emi)})]}),r.jsxs("div",{style:k.emiSplitTrack,children:[r.jsx("div",{style:{width:`${b}%`,background:"#5B7C99",height:"100%"}}),r.jsx("div",{style:{width:`${100-b}%`,background:"#C2536B",height:"100%"}})]}),r.jsxs("div",{style:k.splitRow,children:[r.jsxs("div",{style:k.splitItem,children:[r.jsx("span",{style:{...k.splitV,color:"#5B7C99"},children:e(C.P)}),r.jsx("span",{style:k.splitL,children:"Principal"})]}),r.jsxs("div",{style:k.splitItem,children:[r.jsx("span",{style:{...k.splitV,color:"#C2536B"},children:e(C.totalInterest)}),r.jsx("span",{style:k.splitL,children:"Total interest"})]}),r.jsxs("div",{style:k.splitItem,children:[r.jsx("span",{style:k.splitV,children:e(C.totalPay)}),r.jsx("span",{style:k.splitL,children:"Total payable"})]})]}),r.jsx("div",{style:k.subDivider}),r.jsx("div",{style:k.subTitle,children:"Prepayment planner"}),r.jsx("div",{style:k.cardSub,children:"See what an extra payment does to your loan."}),r.jsx("div",{style:{marginTop:14},children:r.jsx(Hn,{label:"Prepayment amount",value:a,set:g,min:0,max:p,step:m==="once"?25e3:1e3,suffix:t.symbol})}),r.jsxs("div",{style:k.segGroup,children:[r.jsx("span",{style:k.segLbl,children:"Type"}),r.jsxs("div",{style:k.segRow,children:[r.jsx(Ts,{label:"One-time",on:m==="once",onClick:()=>y("once")}),r.jsx(Ts,{label:"Every month",on:m==="monthly",onClick:()=>y("monthly")})]})]}),r.jsxs("div",{style:k.segGroup,children:[r.jsx("span",{style:k.segLbl,children:"Strategy"}),r.jsxs("div",{style:k.segRow,children:[r.jsx(Ts,{label:"Reduce tenure",on:w==="tenure",onClick:()=>E("tenure")}),r.jsx(Ts,{label:"Reduce EMI",on:w==="emi",disabled:m==="monthly",onClick:()=>E("emi")})]})]}),m==="monthly"&&r.jsx("div",{style:k.note,children:"An extra monthly payment always shortens the tenure. Switch to a one-time prepayment to reduce your EMI instead."}),D?r.jsxs("div",{style:k.cmpCard,children:[r.jsxs("div",{style:k.cmpRow,children:[r.jsx("span",{style:k.cmpLbl,children:"New EMI"}),r.jsxs("span",{style:k.cmpVal,children:[e(D.newEMI),D.newEMI<C.emi-1&&r.jsxs("span",{style:k.cmpWas,children:[" was ",e(C.emi)]})]})]}),r.jsxs("div",{style:k.cmpRow,children:[r.jsx("span",{style:k.cmpLbl,children:"New tenure"}),r.jsxs("span",{style:k.cmpVal,children:[Yu(D.newMonths)," ",r.jsxs("span",{style:k.cmpWas,children:["· paid off ",wv(D.newMonths)]})]})]}),r.jsxs("div",{style:k.cmpRow,children:[r.jsx("span",{style:k.cmpLbl,children:"Total interest"}),r.jsx("span",{style:k.cmpVal,children:e(D.newInterest)})]}),r.jsxs("div",{style:k.cmpRow,children:[r.jsx("span",{style:k.cmpLbl,children:"Total payable"}),r.jsx("span",{style:k.cmpVal,children:e(D.totalPaid)})]}),r.jsxs("div",{style:k.saveRow,children:["You save ",e(D.interestSaved)," in interest",D.monthsSaved>0?` · ${Yu(D.monthsSaved)} sooner`:""]})]}):r.jsx("div",{style:k.muted,children:"Enter a prepayment amount to see the impact."})]})}function Ts({label:e,on:t,onClick:n,disabled:o}){return r.jsx("button",{onClick:o?void 0:n,disabled:o,style:{...k.seg,...t?k.segOn:{},...o?k.segDisabled:{}},children:e})}const k={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},tabs:{display:"flex",gap:7,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},presetRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},preset:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},presetOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},sumGrid:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:16},sumCard:{background:"var(--surface)",borderRadius:14,padding:"14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},sumIcon:{width:30,height:30,borderRadius:9,display:"grid",placeItems:"center",marginBottom:8},sumLabel:{fontSize:11.5,color:"var(--text-3)",fontWeight:600},sumVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2,letterSpacing:"-0.01em",wordBreak:"break-word"},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},cardTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},twoCol:{display:"grid",gridTemplateColumns:"1fr",gap:0},dot:{width:10,height:10,borderRadius:3,flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieSvg:{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"visible"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",transition:"transform 0.15s, box-shadow 0.15s",pointerEvents:"none",textAlign:"center",padding:4,boxSizing:"border-box"},pieHoleVal:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:160,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8,borderRadius:8,padding:"3px 5px",margin:"-3px -5px",cursor:"default",transition:"background 0.15s"},legendRowOn:{background:"var(--surface-2)"},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},investNote:{display:"flex",alignItems:"center",gap:6,fontSize:11.5,color:"var(--text-3)",marginBottom:14,marginTop:-4},healthScore:{fontSize:32,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1},healthStatus:{fontSize:12.5,fontWeight:700,marginTop:2},gaugeTrack:{height:10,background:"var(--surface-2)",borderRadius:6,overflow:"hidden",marginBottom:14},gaugeFill:{height:"100%",borderRadius:6,transition:"width 0.4s"},healthStats:{display:"flex",gap:24,marginBottom:12},healthStat:{display:"flex",flexDirection:"column"},healthStatV:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},healthStatL:{fontSize:11,color:"var(--text-3)",fontWeight:600},tip:{fontSize:12.5,lineHeight:1.5,padding:"10px 12px",borderRadius:10,border:"1px solid",fontWeight:500},kindToggle:{display:"flex",gap:8,marginBottom:12},kindBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},formGrid:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},input:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},addBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},invAddBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"7px 13px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",flexShrink:0},invRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},invPct:{fontSize:11,fontWeight:700,marginTop:1},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},fixedHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.5,marginTop:10,marginBottom:0},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},dateHead:{fontSize:11,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8},txnRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},txnDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},txnCat:{fontSize:13.5,fontWeight:600},txnNote:{fontSize:11.5,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},txnAmt:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},editTxn:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:12,margin:"6px 0"},editCancel:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},field:{marginBottom:16},fieldTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},fieldLabel:{fontSize:13,fontWeight:600,color:"var(--text-2)"},fieldInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:8,padding:"5px 10px",background:"var(--surface-2)"},fieldInput:{border:"none",background:"none",outline:"none",width:90,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},fieldSuffix:{fontSize:12,color:"var(--text-3)",fontWeight:600},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},resultHero:{textAlign:"center",padding:"14px 0 6px"},resultLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},resultVal:{fontSize:34,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,wordBreak:"break-word"},splitRow:{display:"flex",gap:10,marginTop:10},splitItem:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",background:"var(--surface-2)",borderRadius:10,padding:"10px 6px"},splitV:{fontSize:14.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",wordBreak:"break-word"},splitL:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:2},chartWrap:{marginTop:18},chartBars:{display:"flex",alignItems:"flex-end",gap:3,height:90},chartCol:{flex:1,height:"100%",display:"flex",alignItems:"flex-end"},chartStack:{width:"100%",background:"#9DBFD6",borderRadius:"3px 3px 0 0",minHeight:2,position:"relative",display:"flex",flexDirection:"column",justifyContent:"flex-start"},chartGain:{width:"100%",background:"#3E9E6B",borderRadius:"3px 3px 0 0"},chartAxis:{display:"flex",fontSize:10,color:"var(--text-3)",fontWeight:600,marginTop:6},legend:{display:"flex",gap:16,justifyContent:"center",marginTop:10},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)",fontWeight:600},legendDot:{width:10,height:10,borderRadius:3},emiSplitTrack:{display:"flex",height:12,borderRadius:6,overflow:"hidden",marginTop:16,border:"1px solid var(--border)"},subDivider:{height:1,background:"var(--border)",margin:"20px 0 14px"},subTitle:{fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},segGroup:{marginBottom:12},segLbl:{fontSize:12,fontWeight:600,color:"var(--text-3)",display:"block",marginBottom:6},segRow:{display:"flex",gap:8},seg:{flex:1,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},segOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},segDisabled:{opacity:.4,cursor:"not-allowed"},note:{fontSize:12,lineHeight:1.5,color:"var(--text-3)",background:"var(--surface-2)",borderRadius:9,padding:"9px 11px",marginBottom:12},cmpCard:{background:"var(--surface-2)",borderRadius:12,padding:"12px 14px",marginTop:4},cmpRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"6px 0",borderBottom:"1px solid var(--border)",gap:10},cmpLbl:{fontSize:12.5,color:"var(--text-2)",fontWeight:600},cmpVal:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",textAlign:"right"},cmpWas:{fontSize:11,color:"var(--text-3)",fontWeight:500,fontFamily:"'Inter',system-ui,sans-serif"},saveRow:{marginTop:12,background:"rgba(62,158,107,0.12)",color:"#3E9E6B",borderRadius:9,padding:"10px 12px",fontSize:13,fontWeight:700,textAlign:"center"}},Nd=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Ea={Monday:"Mon",Tuesday:"Tue",Wednesday:"Wed",Thursday:"Thu",Friday:"Fri",Saturday:"Sat",Sunday:"Sun"},ai=()=>Nd[(new Date().getDay()+6)%7],Nr={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},Qu=Object.keys(Nr),Ba=21,Ku="kickstart_tags",Da=e=>{if(!e)return"";const t=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(t))return t;const n=t.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},Xu=e=>{if(!e||!String(e).trim())return null;const t=String(e).split(":").map(n=>parseInt(n.trim(),10));return t.some(n=>isNaN(n)||n<0)?null:t.reduce((n,o)=>n*60+o,0)},Es=e=>{if(e==null)return"";const t=Math.max(0,e|0);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},Cv=e=>`https://www.youtube.com/embed/${e.youtube_id}?start=${e.start_sec||0}`+(e.end_sec?`&end=${e.end_sec}`:"")+"&autoplay=1&rel=0",zv=()=>({id:null,url:"",title:"",start:"",end:"",days:[ai()],pillars:[],customs:[]});function Iv(){const[e,t]=c.useState([]),[n,o]=c.useState([]),[i,s]=c.useState(!1),[l,d]=c.useState({type:"day",value:ai()}),[a,g]=c.useState(null),[m,y]=c.useState(null),[f,E]=c.useState(""),C=c.useCallback(async()=>{try{const[I,J]=await Promise.all([_.getKickstart(),_.getSetting(Ku)]);t(I),o(Array.isArray(J==null?void 0:J.value)?J.value:[])}catch{}s(!0)},[]);c.useEffect(()=>{C()},[C]);const{deleteItem:w,toasts:D,handleUndo:b,handleDismiss:p}=Jt(_.deleteKickstart,_.restoreKickstart,C);c.useEffect(()=>{if(!m)return;const I=e.find(G=>G.id===m);if(!I)return;const J=I.end_sec?Math.max(1,I.end_sec-(I.start_sec||0)):1/0;let be=0;const se=10,ye=setInterval(()=>{if(document.hidden)return;const G=J-be;if(G<=0){clearInterval(ye);return}const Y=Math.min(se,G);be+=Y,_.addScreenTime("kickstart",Math.round(Y)).catch(()=>{})},se*1e3);return()=>clearInterval(ye)},[m,e]);const h=I=>{o(I),_.setSetting(Ku,I).catch(()=>{})},T=()=>{const I=f.trim();!I||n.length>=Ba||n.includes(I)||(h([...n,I]),g(J=>J&&!J.customs.includes(I)?{...J,customs:[...J.customs,I]}:J),E(""))},v=I=>h(n.filter(J=>J!==I)),S=(I,J)=>g(be=>({...be,[I]:be[I].includes(J)?be[I].filter(se=>se!==J):[...be[I],J]})),W=I=>g({id:I.id,url:`https://youtu.be/${I.youtube_id}`,title:I.title,start:Es(I.start_sec),end:I.end_sec?Es(I.end_sec):"",days:[...I.days],pillars:[...I.pillars],customs:[...I.customs]}),F=async()=>{const I=Da(a.url);if(!I||a.days.length===0||!a.title.trim())return;const J={youtube_id:I,title:a.title.trim(),start_sec:Xu(a.start)||0,end_sec:Xu(a.end),days:a.days,pillars:a.pillars,customs:a.customs};a.id?await _.updateKickstart(a.id,J):await _.createKickstart(J),g(null),C()},j=c.useMemo(()=>e.filter(I=>l.type==="all"?!0:l.type==="day"?I.days.includes(l.value):l.type==="pillar"?I.pillars.includes(l.value):l.type==="custom"?I.customs.includes(l.value):!0),[e,l]),A=(I,J)=>l.type===I&&l.value===J,ie=a?[!Da(a.url)&&"a valid YouTube link",!a.title.trim()&&"a title",a.days.length===0&&"at least one day"].filter(Boolean):[],B=!!a&&ie.length===0;return r.jsxs("div",{style:ke.page,children:[r.jsxs("div",{style:ke.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:ke.eyebrow,children:"Anvil · Kickstart"}),r.jsx("h1",{style:ke.h1,children:"Kickstart"}),r.jsxs("div",{style:ke.subhead,children:["Your motivation hub — the right push for ",ai(),"."]})]}),!a&&r.jsxs("button",{onClick:()=>g(zv()),style:ke.addBtn,children:[r.jsx(Ze,{size:15})," Add video"]})]}),a&&r.jsxs("div",{style:ke.card,children:[r.jsx("div",{style:ke.cardTitle,children:a.id?"Edit video":"Add video"}),r.jsx("input",{placeholder:"YouTube link (or video ID)",value:a.url,onChange:I=>g({...a,url:I.target.value}),style:ke.input,autoFocus:!0}),a.url&&!Da(a.url)&&r.jsx("div",{style:ke.warn,children:"Couldn't find a YouTube video ID in that link."}),r.jsx("input",{placeholder:"Title (required)",value:a.title,onChange:I=>g({...a,title:I.target.value}),style:{...ke.input,marginTop:8}}),r.jsxs("div",{style:ke.trimRow,children:[r.jsx(Fm,{size:15,color:"var(--text-3)"}),r.jsxs("label",{style:ke.trimField,children:[r.jsx("span",{style:ke.trimLbl,children:"Start"}),r.jsx("input",{placeholder:"0:30",value:a.start,onChange:I=>g({...a,start:I.target.value}),style:ke.trimInput})]}),r.jsx("span",{style:ke.trimArrow,children:"→"}),r.jsxs("label",{style:ke.trimField,children:[r.jsx("span",{style:ke.trimLbl,children:"End"}),r.jsx("input",{placeholder:"end (optional)",value:a.end,onChange:I=>g({...a,end:I.target.value}),style:ke.trimInput})]})]}),r.jsx("div",{style:ke.hint,children:"Only this trimmed part plays. Use m:ss (e.g. 1:30). Leave End blank to play to the end."}),r.jsxs("div",{style:ke.tagBlock,children:[r.jsxs("div",{style:ke.tagLabel,children:["Days ",r.jsx("span",{style:ke.req,children:"required"})]}),r.jsx("div",{style:ke.chipRow,children:Nd.map(I=>r.jsx("button",{onClick:()=>S("days",I),style:{...ke.chip,...a.days.includes(I)?ke.chipOnDark:{}},children:Ea[I]},I))})]}),r.jsxs("div",{style:ke.tagBlock,children:[r.jsxs("div",{style:ke.tagLabel,children:["Pillars ",r.jsx("span",{style:ke.opt,children:"optional"})]}),r.jsx("div",{style:ke.chipRow,children:Qu.map(I=>{const J=a.pillars.includes(I);return r.jsxs("button",{onClick:()=>S("pillars",I),style:{...ke.chip,...J?{background:Nr[I],color:"#fff",borderColor:Nr[I]}:{}},children:[r.jsx("span",{style:{...ke.dot,background:J?"#fff":Nr[I]}}),I]},I)})})]}),r.jsxs("div",{style:ke.tagBlock,children:[r.jsxs("div",{style:ke.tagLabel,children:["Custom tags ",r.jsxs("span",{style:ke.opt,children:["optional · ",n.length,"/",Ba]})]}),r.jsxs("div",{style:ke.chipRow,children:[n.map(I=>r.jsxs("span",{style:{...ke.chip,...a.customs.includes(I)?ke.chipOnAccent:{},paddingRight:4},children:[r.jsx("button",{onClick:()=>S("customs",I),style:ke.chipInner,children:I}),r.jsx("button",{onClick:()=>v(I),style:ke.chipX,title:"Delete tag",children:r.jsx(Be,{size:11})})]},I)),n.length===0&&r.jsx("span",{style:ke.muted,children:"No custom tags yet."})]}),n.length<Ba&&r.jsxs("div",{style:ke.newTagRow,children:[r.jsx("input",{placeholder:"New custom tag…",value:f,onChange:I=>E(I.target.value),onKeyDown:I=>I.key==="Enter"&&T(),style:{...ke.input,padding:"7px 10px"}}),r.jsx("button",{onClick:T,style:ke.smallBtn,children:r.jsx(Ze,{size:14})})]})]}),!B&&r.jsxs("div",{style:ke.warn,children:["Add ",ie.join(", ")," to save."]}),r.jsxs("div",{style:ke.formActions,children:[r.jsxs("button",{onClick:()=>g(null),style:ke.cancelBtn,children:[r.jsx(Be,{size:14})," Cancel"]}),r.jsxs("button",{onClick:F,disabled:!B,style:{...ke.saveBtn,...B?{}:ke.saveDisabled},children:[r.jsx(Ne,{size:15})," ",a.id?"Save":"Add video"]})]})]}),r.jsxs("div",{style:ke.filterCard,children:[r.jsx("button",{onClick:()=>d({type:"all"}),style:{...ke.fChip,...l.type==="all"?ke.fChipOnDark:{}},children:"All"}),r.jsx("span",{style:ke.fDivider}),Nd.map(I=>r.jsxs("button",{onClick:()=>d({type:"day",value:I}),style:{...ke.fChip,...A("day",I)?ke.fChipOnDark:{},...I===ai()?ke.fToday:{}},children:[Ea[I],I===ai()?" ·":""]},I)),r.jsx("span",{style:ke.fDivider}),Qu.map(I=>r.jsxs("button",{onClick:()=>d({type:"pillar",value:I}),style:{...ke.fChip,...A("pillar",I)?{background:Nr[I],color:"#fff",borderColor:Nr[I]}:{}},children:[r.jsx("span",{style:{...ke.dot,background:A("pillar",I)?"#fff":Nr[I]}}),I]},I)),n.length>0&&r.jsx("span",{style:ke.fDivider}),n.map(I=>r.jsxs("button",{onClick:()=>d({type:"custom",value:I}),style:{...ke.fChip,...A("custom",I)?ke.fChipOnAccent:{}},children:[r.jsx(Dd,{size:11})," ",I]},I))]}),i?j.length===0?r.jsx("div",{style:ke.empty,children:e.length===0?"No videos yet — add your first motivation clip.":"No videos for this tag."}):r.jsx("div",{style:ke.grid,children:j.map(I=>r.jsxs("div",{style:ke.videoCard,children:[r.jsx("div",{style:ke.thumbWrap,children:m===I.id?r.jsx("iframe",{src:Cv(I),title:I.title||I.youtube_id,style:ke.iframe,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):r.jsxs("button",{onClick:()=>y(I.id),style:ke.thumbBtn,children:[r.jsx("img",{src:`https://img.youtube.com/vi/${I.youtube_id}/hqdefault.jpg`,alt:"",style:ke.thumb}),r.jsx("span",{style:ke.playOverlay,children:r.jsx(Vc,{size:22,color:"#fff",fill:"#fff"})}),r.jsxs("span",{style:ke.trimBadge,children:[Es(I.start_sec),I.end_sec?` – ${Es(I.end_sec)}`:"+"]})]})}),r.jsxs("div",{style:ke.videoBody,children:[r.jsx("div",{style:ke.videoTitle,children:I.title||"Untitled clip"}),r.jsxs("div",{style:ke.tagWrap,children:[I.days.map(J=>r.jsx("span",{style:ke.dayTag,children:Ea[J]},J)),I.pillars.map(J=>r.jsx("span",{style:{...ke.pillTag,color:Nr[J]||"var(--text-2)",borderColor:Nr[J]||"var(--border)"},children:J},J)),I.customs.map(J=>r.jsx("span",{style:ke.customTag,children:J},J))]}),r.jsxs("div",{style:ke.cardActions,children:[r.jsx("button",{onClick:()=>W(I),style:ke.iconBtn,title:"Edit",children:r.jsx(bt,{size:13})}),r.jsx("button",{onClick:()=>w(I.id,I.title||"video"),style:ke.iconBtn,title:"Delete",children:r.jsx(Be,{size:14})})]})]})]},I.id))}):r.jsx("div",{style:ke.muted,children:"Loading…"}),r.jsx(er,{toasts:D,onUndo:b,onDismiss:p})]})}const ke={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:1e3,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},warn:{fontSize:11.5,color:"#C2773B",marginTop:5,fontWeight:600},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:6,lineHeight:1.4},trimRow:{display:"flex",alignItems:"flex-end",gap:10,marginTop:10},trimField:{display:"flex",flexDirection:"column",gap:4,flex:1},trimLbl:{fontSize:11,color:"var(--text-2)",fontWeight:600},trimInput:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},trimArrow:{color:"var(--text-3)",paddingBottom:9},tagBlock:{marginTop:14},tagLabel:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},req:{fontSize:10,fontWeight:700,color:"#C2536B",textTransform:"uppercase",marginLeft:6},opt:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",marginLeft:6},chipRow:{display:"flex",gap:6,flexWrap:"wrap"},chip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},chipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},chipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},chipInner:{border:"none",background:"none",color:"inherit",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,padding:0},chipX:{border:"none",background:"rgba(0,0,0,0.12)",color:"inherit",cursor:"pointer",display:"grid",placeItems:"center",borderRadius:"50%",width:16,height:16,padding:0},newTagRow:{display:"flex",gap:6,marginTop:8,maxWidth:280},smallBtn:{border:"none",background:"var(--accent)",color:"#fff",width:34,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},dot:{width:8,height:8,borderRadius:"50%",flexShrink:0,display:"inline-block"},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"var(--accent)",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},filterCard:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:12,marginBottom:18},fChip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},fChipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},fChipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},fToday:{borderColor:"var(--accent)",borderWidth:2},fDivider:{width:1,alignSelf:"stretch",background:"var(--border)",margin:"0 2px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:14},videoCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 9",background:"#000"},thumbBtn:{border:"none",padding:0,margin:0,cursor:"pointer",width:"100%",height:"100%",position:"relative",display:"block",background:"#000"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center",background:"rgba(0,0,0,0.28)"},trimBadge:{position:"absolute",bottom:8,right:8,background:"rgba(0,0,0,0.75)",color:"#fff",fontSize:11,fontWeight:700,padding:"2px 7px",borderRadius:6,fontFamily:"'Fraunces',Georgia,serif"},iframe:{width:"100%",height:"100%",border:"none",display:"block"},videoBody:{padding:"12px 13px",display:"flex",flexDirection:"column",gap:8},videoTitle:{fontSize:14,fontWeight:700},tagWrap:{display:"flex",gap:5,flexWrap:"wrap"},dayTag:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:8},pillTag:{fontSize:10,fontWeight:700,border:"1px solid",borderRadius:8,padding:"2px 7px"},customTag:{fontSize:10,fontWeight:700,color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"2px 7px",borderRadius:8},cardActions:{display:"flex",gap:4,justifyContent:"flex-end"},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},qm=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,qu=()=>qm(new Date),Zu=(e,t)=>{const n=new Date(e+"T00:00:00");return n.setDate(n.getDate()+t),qm(n)},Ju=e=>new Date(e+"T00:00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"}),Tv=e=>{if(!e)return"";const t=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(t))return t;const n=t.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},Ev=e=>new Promise((t,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:d}=i;l>d&&l>900?(d=d*900/l,l=900):d>900&&(l=l*900/d,d=900);const a=document.createElement("canvas");a.width=l,a.height=d,a.getContext("2d").drawImage(i,0,0,l,d),t(a.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)});function Bv(){const[e,t]=c.useState([]),[n,o]=c.useState(!1),[i,s]=c.useState(null),[l,d]=c.useState(!1),[a,g]=c.useState({title:"",image:""}),[m,y]=c.useState(""),[f,E]=c.useState(!0),[C,w]=c.useState(null),D=c.useCallback(async()=>{try{t(await _.getGoldenGoals())}catch{}o(!0)},[]);c.useEffect(()=>{D()},[D]);const{deleteItem:b,toasts:p,handleUndo:h,handleDismiss:T}=Jt(_.deleteGolden,_.restoreGolden,D);c.useEffect(()=>{_.getSetting("golden_music").then(j=>y(Tv((j==null?void 0:j.value)||""))).catch(()=>{})},[]);const v=async()=>{if(!a.title.trim())return;const j=await _.createGolden({title:a.title.trim(),image:a.image});g({title:"",image:""}),d(!1),await D(),s(j.id)},S=async(j,A)=>{var B;const ie=(B=j.target.files)==null?void 0:B[0];if(ie)try{A(await Ev(ie))}catch{}},W=e.filter(j=>!j.achieved),F=e.filter(j=>j.achieved);return i?r.jsxs("div",{style:q.page,children:[r.jsx(Wv,{musicId:m,on:f}),r.jsx(Fv,{goalId:i,onBack:()=>s(null),onReload:D,onCelebrate:(j,A)=>w({title:j,days:A}),pickImage:S,musicId:m,musicOn:f,setMusicOn:E}),C&&r.jsx(Mv,{data:C,onClose:()=>w(null)})]}):r.jsxs("div",{style:q.page,children:[r.jsxs("div",{style:q.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:q.eyebrow,children:"Anvil · Golden Book"}),r.jsx("h1",{style:q.h1,children:"Golden Book"}),r.jsx("div",{style:q.subhead,children:"Write your dreams into being — a little every day."})]}),!l&&r.jsxs("button",{onClick:()=>d(!0),style:q.addBtn,children:[r.jsx(Ze,{size:15})," New dream"]})]}),l&&r.jsxs("div",{style:q.card,children:[r.jsx("div",{style:q.cardTitle,children:"Manifest a new dream"}),r.jsx("textarea",{autoFocus:!0,placeholder:"Write your dream as if it's already true…",value:a.title,onChange:j=>g({...a,title:j.target.value}),style:q.textarea}),r.jsxs("label",{style:q.photoPick,children:[a.image?r.jsx("img",{src:a.image,alt:"",style:q.photoPreview}):r.jsxs("span",{style:q.photoEmpty,children:[r.jsx(Nl,{size:18})," Add a photo"]}),r.jsx("input",{type:"file",accept:"image/*",onChange:j=>S(j,A=>g({...a,image:A})),style:{display:"none"}})]}),r.jsxs("div",{style:q.formActions,children:[r.jsxs("button",{onClick:()=>{d(!1),g({title:"",image:""})},style:q.cancelBtn,children:[r.jsx(Be,{size:14})," Cancel"]}),r.jsxs("button",{onClick:v,disabled:!a.title.trim(),style:{...q.saveBtn,...a.title.trim()?{}:q.saveDisabled},children:[r.jsx(Ne,{size:15})," Create"]})]})]}),n?r.jsxs(r.Fragment,{children:[W.length===0&&F.length===0&&!l&&r.jsx("div",{style:q.empty,children:"No dreams yet. Add your first one and revisit it daily."}),W.length>0&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:q.sectionTitle,children:[r.jsx(Jn,{size:15,color:"#C9A227"})," Manifesting ",r.jsx("span",{style:q.badge,children:W.length})]}),r.jsx("div",{style:q.grid,children:W.map(j=>r.jsx(rp,{g:j,onOpen:()=>s(j.id),onDelete:()=>b(j.id,j.title)},j.id))})]}),F.length>0&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{...q.sectionTitle,marginTop:22},children:[r.jsx(Lr,{size:15,color:"#4C9A6B"})," Manifested ",r.jsx("span",{style:q.badge,children:F.length})]}),r.jsx("div",{style:q.grid,children:F.map(j=>r.jsx(rp,{g:j,onOpen:()=>s(j.id),onDelete:()=>b(j.id,j.title),achieved:!0},j.id))})]})]}):r.jsx("div",{style:q.muted,children:"Loading…"}),r.jsx(er,{toasts:p,onUndo:h,onDismiss:T})]})}const Od=[{key:"morning",label:"Morning",time:"6 AM – 12 PM",Icon:Lm,color:"#E0883B"},{key:"noon",label:"Noon",time:"12 – 6 PM",Icon:Dy,color:"#C9A227"},{key:"night",label:"Night",time:"6 PM – 2 AM",Icon:fy,color:"#6B6FB0"}],ep=e=>{if(e<31)return`${e} day${e===1?"":"s"}`;const t=Math.floor(e/365),n=Math.floor(e%365/30),o=e%365%30,i=[];return t&&i.push(`${t}y`),n&&i.push(`${n}mo`),o&&i.push(`${o}d`),i.join(" ")},tp="tesla369_reminders";function Dv({g:e,onChanged:t,musicId:n,musicOn:o,setMusicOn:i}){const[s,l]=c.useState(""),[d,a]=c.useState(!1),[g,m]=c.useState(!1),[y,f]=c.useState(()=>localStorage.getItem(tp)==="1"),E=e.t369,C=(e.t369_affirmation||"").trim();if(Rv(y&&!!C,E,e.title),!E)return null;const{window:w,targets:D,counts:b,current_streak:p,best_streak:h,min_streak:T,min_reached:v,day_complete:S}=E,W=(b.morning||0)+(b.noon||0)+(b.night||0),F=D.morning+D.noon+D.night,j=async()=>{if(C&&s.trim()===C&&w){m(!0);try{t(await _.logTesla369(e.id)),l("")}catch(J){alert(J.message||"Could not log this write.")}finally{m(!1)}}},A=async()=>{m(!0);try{t(await _.undoTesla369(e.id))}catch{}finally{m(!1)}},ie=async()=>{if(!y&&!await Av()){alert("Enable notifications in your browser to get 369 reminders.");return}const J=!y;f(J),localStorage.setItem(tp,J?"1":"0")},B=s.trim()===C&&C!=="",I=w&&(b[w]||0)>=D[w];return r.jsxs("div",{style:q.tCard,children:[r.jsxs("div",{style:q.tHead,children:[r.jsxs("div",{style:q.tTitleWrap,children:[r.jsxs("span",{style:q.tBadge,children:[r.jsx(Zc,{size:14})," 369"]}),r.jsxs("div",{children:[r.jsx("div",{style:q.tTitle,children:"369 Method"}),r.jsx("div",{style:q.tSub,children:"Write it 3× morning · 6× noon · 9× night."})]})]}),r.jsxs("div",{style:q.tHeadBtns,children:[n&&r.jsxs("button",{onClick:()=>i(J=>!J),style:{...q.tRemBtn,...o?q.tuneOn:{}},title:o?"Soft tunes on":"Play soft tunes",children:[o?r.jsx(Uc,{size:14}):r.jsx(Ol,{size:14})," Soft tunes"]}),r.jsxs("button",{onClick:ie,style:{...q.tRemBtn,...y?q.tRemOn:{}},title:y?"Reminders on":"Turn on reminders",children:[y?r.jsx(Pc,{size:14}):r.jsx($x,{size:14})," ",y?"Reminders on":"Remind me"]})]})]}),r.jsxs("div",{style:q.tStreakRow,children:[r.jsxs("div",{style:q.tStreakBox,children:[r.jsxs("div",{style:q.tStreakLabel,children:[r.jsx(Rn,{size:13,color:"#C2773B"})," Current streak"]}),r.jsx("div",{style:q.tStreakVal,children:ep(p)}),v?r.jsxs("div",{style:{...q.tStreakHint,color:"#4C9A6B"},children:["✓ ",T,"-day minimum met — keep going until it manifests"]}):r.jsxs("div",{style:q.tStreakHint,children:["Day ",p," of ",T," minimum"]}),!v&&r.jsx("div",{style:q.tProgTrack,children:r.jsx("div",{style:{...q.tProgFill,width:`${Math.min(100,p/T*100)}%`}})})]}),r.jsxs("div",{style:q.tStreakBox,children:[r.jsxs("div",{style:q.tStreakLabel,children:[r.jsx(Lr,{size:13,color:"#C9A227"})," All-time best"]}),r.jsx("div",{style:q.tStreakVal,children:ep(h)}),r.jsxs("div",{style:q.tStreakHint,children:["Today: ",W,"/",F," written ",S?"✓":""]})]})]}),C?r.jsxs(r.Fragment,{children:[r.jsx("div",{style:q.tWindows,children:Od.map(({key:J,label:be,time:se,Icon:ye,color:G})=>{const Y=b[J]||0,oe=D[J],K=w===J,pe=Y>=oe;return r.jsxs("div",{style:{...q.tWindow,...K?{border:`1px solid ${G}`,boxShadow:`0 0 0 2px ${G}22`}:{}},children:[r.jsxs("div",{style:q.tWindowHead,children:[r.jsx(ye,{size:15,color:G}),r.jsx("span",{style:q.tWindowLabel,children:be}),K&&r.jsx("span",{style:{...q.tNow,color:G},children:"now"})]}),r.jsx("div",{style:q.tWindowTime,children:se}),r.jsx("div",{style:q.tDots,children:Array.from({length:oe}).map((O,$)=>r.jsx("span",{style:{...q.tDot,...$<Y?{background:G,borderColor:G}:{}}},$))}),r.jsxs("div",{style:{...q.tCount,...pe?{color:G}:{}},children:[Y,"/",oe,pe?" ✓":""]})]},J)})}),r.jsx("div",{style:q.tWriteBox,children:w?I?r.jsxs("div",{style:q.tDoneMsg,children:["✓ ",Od.find(J=>J.key===w).label," complete. ",S?"All 18 done today! 🔥":"Next window unlocks ahead."]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{style:q.tNote,children:"✍️ Type it out by hand — no copy-pasting. The act of writing is the point."}),r.jsx("textarea",{value:s,onChange:J=>l(J.target.value),onPaste:J=>{J.preventDefault(),a(!0),setTimeout(()=>a(!1),2500)},onDrop:J=>J.preventDefault(),placeholder:"Type your affirmation here…",style:{...q.writeArea,...B?{border:"1px solid #4C9A6B"}:{}}}),d&&r.jsx("div",{style:q.tPasteWarn,children:"Pasting is disabled — please type it."}),r.jsxs("div",{style:q.tWriteActions,children:[r.jsxs("button",{onClick:A,disabled:g||(b[w]||0)===0,style:q.tUndoBtn,title:"Undo last write",children:[r.jsx(My,{size:14})," Undo"]}),r.jsxs("button",{onClick:j,disabled:g||!B,style:{...q.writeSave,flex:1,...B?{}:q.saveDisabled},children:[r.jsx(Ne,{size:15})," ",B?"Log this write":"Type it to log"]})]})]}):r.jsx("div",{style:q.tClosed,children:"Writing windows: 6 AM–12 PM, 12–6 PM, 6 PM–2 AM. Come back during a window."})})]}):r.jsx("div",{style:q.tClosed,children:"Set a 369 affirmation above to start writing."})]})}async function Av(){return"Notification"in window?Notification.permission==="granted"?!0:Notification.permission==="denied"?!1:await Notification.requestPermission()==="granted":!1}function Rv(e,t,n){const o=c.useRef({});c.useEffect(()=>{if(!e||!t)return;const i=()=>{var E;if(Notification.permission!=="granted")return;const l=t.window;if(!l)return;const d=t.counts||{},a=t.targets||{};if((d[l]||0)>=(a[l]||0))return;const g=t.today,m=`369-${n||""}-${g}-${l}`;if(o.current[m])return;o.current[m]=!0;const y=((E=Od.find(C=>C.key===l))==null?void 0:E.label)||"",f=(a[l]||0)-(d[l]||0);try{new Notification("369 — time to write ✍️",{body:`${n?`"${n}" · `:""}${y} window: ${f} more to go. Type your affirmation.`,tag:m})}catch{}};i();const s=setInterval(i,60*1e3);return()=>clearInterval(s)},[e,t,n])}function rp({g:e,onOpen:t,onDelete:n,achieved:o}){return r.jsxs("div",{style:{...q.goalCard,...o?{opacity:.96}:{},position:"relative"},children:[r.jsxs("button",{onClick:t,style:q.goalCardBtn,children:[r.jsxs("div",{style:q.thumbWrap,children:[e.image?r.jsx("img",{src:e.image,alt:"",style:q.thumb}):r.jsx("div",{style:q.thumbEmpty,children:r.jsx(Jn,{size:26,color:"var(--text-3)"})}),o&&r.jsx("span",{style:q.stamp,children:"✦ Manifested"})]}),r.jsxs("div",{style:q.goalBody,children:[r.jsx("div",{style:q.goalTitle,children:e.title}),r.jsxs("div",{style:q.goalMeta,children:[o?r.jsxs("span",{style:{...q.metaPill,color:"#4C9A6B",background:"rgba(76,154,107,0.12)"},children:[r.jsx(Lr,{size:12})," ",e.days_to_manifest!=null?`in ${e.days_to_manifest} day${e.days_to_manifest===1?"":"s"}`:"done"]}):r.jsxs("span",{style:{...q.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[r.jsx(Rn,{size:12})," ",e.streak," day streak"]}),r.jsxs("span",{style:q.metaDim,children:[e.total_days," entr",e.total_days===1?"y":"ies"]})]})]})]}),r.jsx("button",{onClick:i=>{i.stopPropagation(),window.confirm(`Delete "${e.title}"?`)&&n()},style:q.cardDelBtn,title:"Delete dream",children:r.jsx(Qc,{size:14})})]})}function Fv({goalId:e,onBack:t,onReload:n,onCelebrate:o,pickImage:i,musicId:s,musicOn:l,setMusicOn:d}){const[a,g]=c.useState(null),[m,y]=c.useState({}),[f,E]=c.useState(qu()),[C,w]=c.useState(""),[D,b]=c.useState(null),[p,h]=c.useState(null),T=qu(),v=c.useCallback(G=>{g(G);const Y={};(G.entries||[]).forEach(oe=>{Y[oe.date]=oe.text}),y(Y),w(Y[T]||"")},[T]),S=c.useCallback(async()=>{v(await _.getGoldenGoal(e))},[e,v]);if(c.useEffect(()=>{S()},[S]),c.useEffect(()=>{if(!(a!=null&&a.t369_enabled))return;const G=setInterval(()=>{_.getGoldenGoal(e).then(v).catch(()=>{})},60*1e3);return()=>clearInterval(G)},[a==null?void 0:a.t369_enabled,e,v]),!a)return r.jsx("div",{style:q.muted,children:"Loading…"});const W=f===T,F=f>a.created_date,j=f<T,A=async()=>{await _.upsertGoldenEntry(e,{date:T,text:C}),await S(),n()},ie=async()=>{const G=await _.achieveGolden(e);o(a.title,G.days_to_manifest),await S(),n()},B=async()=>{await _.unachieveGolden(e),await S(),n()},I=async()=>{D.trim()&&(await _.updateGolden(e,{title:D.trim()}),b(null),await S(),n())},J=G=>_.updateGolden(e,{image:G}).then(()=>{S(),n()}),be=async()=>{await _.updateGolden(e,{t369_enabled:!a.t369_enabled}),await S(),n()},se=async()=>{await _.updateGolden(e,{t369_affirmation:(p||"").trim()}),h(null),await S()},ye=async()=>{window.confirm(`Delete "${a.title}"? This cannot be undone from here.`)&&(await _.deleteGolden(e),n(),t())};return r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:q.detailTopRow,children:[r.jsxs("button",{onClick:t,style:q.backBtn,children:[r.jsx(jm,{size:16})," All dreams"]}),r.jsxs("button",{onClick:ye,style:q.deleteBtn,title:"Delete dream",children:[r.jsx(Qc,{size:14})," Delete"]})]}),r.jsxs("div",{style:q.detailHero,children:[r.jsxs("label",{style:q.heroPhoto,children:[a.image?r.jsx("img",{src:a.image,alt:"",style:q.heroImg}):r.jsxs("span",{style:q.photoEmpty,children:[r.jsx(Nl,{size:20})," Add a photo"]}),r.jsxs("span",{style:q.photoEdit,children:[r.jsx(bt,{size:12})," Edit photo"]}),r.jsx("input",{type:"file",accept:"image/*",onChange:G=>i(G,J),style:{display:"none"}})]}),r.jsxs("div",{style:q.heroInfo,children:[a.achieved&&r.jsxs("span",{style:q.heroStamp,children:["✦ Manifested",a.days_to_manifest!=null?` in ${a.days_to_manifest} day${a.days_to_manifest===1?"":"s"}`:""]}),D!==null?r.jsxs("div",{style:{display:"flex",gap:6,width:"100%"},children:[r.jsx("textarea",{autoFocus:!0,value:D,onChange:G=>b(G.target.value),style:{...q.textarea,minHeight:60}}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[r.jsx("button",{onClick:I,style:q.iconSave,children:r.jsx(Ne,{size:14})}),r.jsx("button",{onClick:()=>b(null),style:q.iconCancel,children:r.jsx(Be,{size:14})})]})]}):r.jsxs("div",{style:q.heroTitleRow,children:[r.jsx("div",{style:q.heroTitle,children:a.title}),r.jsx("button",{onClick:()=>b(a.title),style:q.ghostBtn,title:"Edit",children:r.jsx(bt,{size:13})})]}),r.jsxs("div",{style:q.heroStats,children:[r.jsxs("span",{style:{...q.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[r.jsx(Rn,{size:13})," ",a.streak," day streak"]}),r.jsxs("span",{style:q.metaDim,children:[a.total_days," entr",a.total_days===1?"y":"ies"]}),r.jsxs("span",{style:q.metaDim,children:["since ",Ju(a.created_date)]})]})]})]}),!a.achieved&&r.jsxs("div",{style:q.t369Row,children:[r.jsxs("div",{style:q.t369RowLeft,children:[r.jsxs("span",{style:{...q.tBadge,...a.t369_enabled?{}:q.tBadgeOff},children:[r.jsx(Zc,{size:13})," 369"]}),r.jsxs("div",{children:[r.jsx("div",{style:q.t369RowTitle,children:"Tesla's 369 Method"}),r.jsx("div",{style:q.t369RowSub,children:a.t369_enabled?"On — write this dream 3×/6×/9× across the day.":"Off — using the simple daily entry."})]})]}),r.jsx("button",{onClick:be,style:{...q.switch,...a.t369_enabled?q.switchOn:{}},role:"switch","aria-checked":a.t369_enabled,title:"Toggle 369 method",children:r.jsx("span",{style:{...q.switchKnob,...a.t369_enabled?q.switchKnobOn:{}}})})]}),a.t369_enabled&&!a.achieved&&r.jsxs(r.Fragment,{children:[p!==null||!a.t369_affirmation?r.jsxs("div",{style:q.card,children:[r.jsx("div",{style:q.cardTitle,children:"Your 369 affirmation"}),r.jsx("textarea",{autoFocus:!0,value:p??a.t369_affirmation??"",onChange:G=>h(G.target.value),placeholder:"The exact line you'll write 18× a day, e.g. 'I am grateful for my dream home.'",style:q.textarea}),r.jsxs("div",{style:q.formActions,children:[a.t369_affirmation&&r.jsxs("button",{onClick:()=>h(null),style:q.cancelBtn,children:[r.jsx(Be,{size:14})," Cancel"]}),r.jsxs("button",{onClick:se,disabled:!(p??"").trim()&&!a.t369_affirmation,style:{...q.saveBtn,...(p??a.t369_affirmation??"").trim()?{}:q.saveDisabled},children:[r.jsx(Ne,{size:15})," Save affirmation"]})]})]}):r.jsxs("div",{style:q.tAffShow,children:[r.jsx(Ed,{size:15,color:vr}),r.jsx("p",{style:q.tAffText,children:a.t369_affirmation}),r.jsx("button",{onClick:()=>h(a.t369_affirmation),style:q.ghostBtn,title:"Edit affirmation",children:r.jsx(bt,{size:13})})]}),r.jsx(Dv,{g:a,onChanged:v,musicId:s,musicOn:l,setMusicOn:d})]}),!a.t369_enabled&&r.jsxs("div",{style:q.writeCard,children:[r.jsx("div",{style:q.tuneRow,children:s?r.jsxs("button",{onClick:()=>d(G=>!G),style:{...q.tuneBtn,...l?q.tuneOn:{}},children:[l?r.jsx(Uc,{size:14}):r.jsx(Ol,{size:14})," Soft tunes"]}):r.jsx("span",{style:q.tuneHint,children:"Add a track in Settings → Music"})}),r.jsxs("div",{style:q.writeNav,children:[r.jsx("button",{onClick:()=>E(G=>Zu(G,-1)),disabled:!F,style:{...q.navBtn,...F?{}:q.navDisabled},children:r.jsx(An,{size:16})}),r.jsx("div",{style:q.writeDate,children:W?"Today":Ju(f)}),r.jsx("button",{onClick:()=>E(G=>Zu(G,1)),disabled:!j,style:{...q.navBtn,...j?{}:q.navDisabled},children:r.jsx(on,{size:16})})]}),W&&!a.achieved?r.jsxs(r.Fragment,{children:[r.jsx("textarea",{value:C,onChange:G=>w(G.target.value),placeholder:"Write it again today, as if it's already yours…",style:q.writeArea}),r.jsxs("button",{onClick:A,style:q.writeSave,children:[r.jsx(Ne,{size:15})," Save today's entry"]})]}):r.jsx("div",{style:q.readEntry,children:m[f]?r.jsxs(r.Fragment,{children:[r.jsx(Ed,{size:16,color:"var(--text-3)"}),r.jsx("p",{style:q.readText,children:m[f]})]}):r.jsx("div",{style:q.muted,children:"Nothing written on this day."})})]}),a.achieved?r.jsx("button",{onClick:B,style:q.unmanifestBtn,children:"Undo manifested"}):r.jsxs("button",{onClick:ie,style:q.manifestBtn,children:[r.jsx(Jn,{size:16})," Mark as manifested"]})]})}function Mv({data:e,onClose:t}){return r.jsx("div",{style:q.celebOverlay,onClick:t,children:r.jsxs("div",{style:q.celebBox,onClick:n=>n.stopPropagation(),children:[r.jsx("div",{style:q.celebEmoji,children:"✨🌟✨"}),r.jsx("div",{style:q.celebTitle,children:"It's happening!"}),r.jsxs("div",{style:q.celebDream,children:['"',e.title,'"']}),r.jsxs("div",{style:q.celebSub,children:[e.days!=null?`Manifested in ${e.days} day${e.days===1?"":"s"}.`:"Manifested."," The universe delivered. 🙏"]}),r.jsx("button",{onClick:t,style:q.celebBtn,children:"Wonderful"})]})})}function Wv({musicId:e,on:t}){return!e||!t?null:r.jsx("iframe",{title:"golden-music",src:`https://www.youtube.com/embed/${e}?autoplay=1&loop=1&playlist=${e}&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}})}const vr="#C9A227",q={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:860,margin:"0 auto",position:"relative"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:vr,color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"11px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:70,resize:"vertical",lineHeight:1.5},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:vr,color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:12},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:14},goalCard:{textAlign:"left",border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},goalCardBtn:{textAlign:"left",border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"inherit",display:"flex",flexDirection:"column",width:"100%"},cardDelBtn:{position:"absolute",top:8,left:8,border:"none",background:"rgba(0,0,0,0.55)",color:"#fff",width:26,height:26,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",zIndex:2},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 10",background:"var(--surface-2)"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},thumbEmpty:{width:"100%",height:"100%",display:"grid",placeItems:"center"},stamp:{position:"absolute",top:8,right:8,transform:"rotate(6deg)",background:"rgba(76,154,107,0.95)",color:"#fff",fontSize:11,fontWeight:800,letterSpacing:"0.04em",padding:"3px 9px",borderRadius:6,border:"1.5px solid #fff",textTransform:"uppercase"},goalBody:{padding:"11px 13px",display:"flex",flexDirection:"column",gap:8},goalTitle:{fontSize:14,fontWeight:600,lineHeight:1.35,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},goalMeta:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},metaPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:700,padding:"2px 8px",borderRadius:10},metaDim:{fontSize:11,color:"var(--text-3)",fontWeight:500},detailTopRow:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16,gap:10},backBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},deleteBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid rgba(194,83,107,0.4)",background:"rgba(194,83,107,0.08)",color:"#C2536B",padding:"7px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},detailHero:{display:"flex",flexDirection:"column",gap:14,marginBottom:16},heroPhoto:{position:"relative",width:"100%",borderRadius:14,overflow:"hidden",border:"1px solid var(--border)",cursor:"pointer",background:"var(--surface-2)",display:"flex",alignItems:"center",justifyContent:"center",minHeight:120},heroImg:{width:"100%",maxHeight:"62vh",objectFit:"contain",display:"block"},photoEdit:{position:"absolute",bottom:8,right:8,display:"flex",alignItems:"center",gap:5,background:"rgba(0,0,0,0.6)",color:"#fff",fontSize:11,fontWeight:600,padding:"4px 8px",borderRadius:7},heroInfo:{display:"flex",flexDirection:"column",gap:10,alignItems:"center",textAlign:"center"},heroStamp:{alignSelf:"center",background:"rgba(76,154,107,0.14)",color:"#4C9A6B",fontSize:12,fontWeight:800,padding:"4px 10px",borderRadius:8,letterSpacing:"0.03em"},heroTitleRow:{display:"flex",alignItems:"flex-start",gap:8,justifyContent:"center"},heroTitle:{fontSize:23,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.35},heroStats:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",justifyContent:"center"},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",flexShrink:0},iconSave:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},iconCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},writeCard:{background:"var(--surface)",borderRadius:14,padding:16,border:"1px solid var(--border)",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},tuneRow:{display:"flex",justifyContent:"flex-end",marginBottom:10},tuneBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tuneOn:{background:vr,color:"#fff",borderColor:vr},tuneHint:{fontSize:11,color:"var(--text-3)",fontWeight:500},writeNav:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,marginBottom:12},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center"},navDisabled:{opacity:.35,cursor:"not-allowed"},writeDate:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:150,textAlign:"center"},writeArea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:120,resize:"vertical",lineHeight:1.6},writeSave:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",background:vr,color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},readEntry:{display:"flex",gap:8,padding:"6px 2px"},readText:{fontSize:15,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.6,margin:0,whiteSpace:"pre-wrap"},manifestBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,width:"100%",border:"none",background:"linear-gradient(135deg,#C9A227,#E0BD45)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:800,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 2px 10px rgba(201,162,39,0.35)"},unmanifestBtn:{display:"block",margin:"0 auto",border:"none",background:"none",color:"var(--text-3)",fontSize:12,fontWeight:600,cursor:"pointer",textDecoration:"underline",fontFamily:"inherit"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.6)",zIndex:200,display:"grid",placeItems:"center",padding:16},celebBox:{background:"var(--surface)",color:"var(--text)",borderRadius:20,padding:"36px 30px",textAlign:"center",maxWidth:360,boxShadow:"0 12px 48px rgba(0,0,0,0.3)"},celebEmoji:{fontSize:40,marginBottom:10},celebTitle:{fontSize:24,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginBottom:10,color:vr},celebDream:{fontSize:15,fontStyle:"italic",fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.5,marginBottom:10},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:vr,color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},t369Row:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:"12px 16px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},t369RowLeft:{display:"flex",alignItems:"center",gap:11},t369RowTitle:{fontSize:14,fontWeight:700},t369RowSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},tBadgeOff:{background:"var(--border)",color:"var(--text-3)"},switch:{position:"relative",width:46,height:26,borderRadius:14,border:"none",background:"var(--border)",cursor:"pointer",flexShrink:0,transition:"background 0.2s",padding:0},switchOn:{background:vr},switchKnob:{position:"absolute",top:3,left:3,width:20,height:20,borderRadius:"50%",background:"#fff",transition:"left 0.2s",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},switchKnobOn:{left:23},tCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:16,padding:18,marginBottom:20,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},tHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12,flexWrap:"wrap",marginBottom:14},tTitleWrap:{display:"flex",alignItems:"center",gap:11},tBadge:{display:"inline-flex",alignItems:"center",gap:4,background:"linear-gradient(135deg,#C9A227,#E0BD45)",color:"#fff",fontSize:14,fontWeight:800,padding:"6px 10px",borderRadius:10,letterSpacing:"0.02em",flexShrink:0},tTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},tSub:{fontSize:12,color:"var(--text-3)",marginTop:2},tHeadBtns:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",justifyContent:"flex-end"},tRemBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 12px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tRemOn:{background:vr,color:"#fff",borderColor:vr},tStreakRow:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:14},tStreakBox:{background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px"},tStreakLabel:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,fontWeight:600,color:"var(--text-2)"},tStreakVal:{fontSize:21,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.1},tStreakHint:{fontSize:11,color:"var(--text-3)",marginTop:4,fontWeight:500},tProgTrack:{height:5,borderRadius:4,background:"var(--border)",marginTop:8,overflow:"hidden"},tProgFill:{height:"100%",background:"linear-gradient(90deg,#C2773B,#C9A227)",borderRadius:4,transition:"width 0.4s"},tAffShow:{display:"flex",alignItems:"flex-start",gap:9,background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px",marginBottom:14},tAffText:{flex:1,fontSize:15,fontFamily:"'Fraunces',Georgia,serif",fontStyle:"italic",lineHeight:1.5,margin:0,whiteSpace:"pre-wrap"},tWindows:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:10,marginBottom:14},tWindow:{background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:"11px 12px",transition:"box-shadow 0.2s, border-color 0.2s"},tWindowHead:{display:"flex",alignItems:"center",gap:6},tWindowLabel:{fontSize:13,fontWeight:700},tNow:{fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",marginLeft:"auto"},tWindowTime:{fontSize:10.5,color:"var(--text-3)",marginTop:2,marginBottom:8,fontWeight:500},tDots:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:7},tDot:{width:11,height:11,borderRadius:"50%",border:"1.5px solid var(--border)",background:"transparent",transition:"background 0.2s"},tCount:{fontSize:12,fontWeight:700,color:"var(--text-2)"},tWriteBox:{borderTop:"1px solid var(--border)",paddingTop:14},tNote:{fontSize:12,fontWeight:600,color:"#C2773B",background:"rgba(194,119,59,0.10)",borderRadius:8,padding:"8px 11px",marginBottom:9},tPasteWarn:{fontSize:11.5,color:"#C2536B",fontWeight:600,marginTop:6},tWriteActions:{display:"flex",gap:8,marginTop:10},tUndoBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"11px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tClosed:{fontSize:12.5,color:"var(--text-3)",textAlign:"center",padding:"10px 4px",lineHeight:1.5},tDoneMsg:{fontSize:13,fontWeight:700,color:"#4C9A6B",textAlign:"center",padding:"10px 4px"}},Aa=[{id:"meditation",label:"Meditation Hub",icon:Ox,color:"#8268B0"},{id:"visualization",label:"Visualization",icon:hl,color:"#3A7CA5"}],np=e=>{if(!e)return"";const t=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(t))return t;const n=t.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},Lv=e=>new Promise((t,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:d}=i;l>d&&l>1e3?(d=d*1e3/l,l=1e3):d>1e3&&(l=l*1e3/d,d=1e3);const a=document.createElement("canvas");a.width=l,a.height=d,a.getContext("2d").drawImage(i,0,0,l,d),t(a.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)}),_v=e=>({id:null,kind:e,title:"",url:"",image:""});function $v(){const[e,t]=c.useState("meditation"),[n,o]=c.useState([]),[i,s]=c.useState(!1),[l,d]=c.useState(null),[a,g]=c.useState(null),m=c.useCallback(async()=>{try{o(await _.getMedia())}catch{}s(!0)},[]);c.useEffect(()=>{m()},[m]);const{deleteItem:y,toasts:f,handleUndo:E,handleDismiss:C}=Jt(_.deleteMedia,_.restoreMedia,m);c.useEffect(()=>{if(!a)return;const S=10,W=setInterval(()=>{document.hidden||_.addScreenTime("mindscape",S).catch(()=>{})},S*1e3);return()=>clearInterval(W)},[a]);const w=Aa.find(S=>S.id===e),D=n.filter(S=>S.kind===e),b=S=>d({id:S.id,kind:S.kind,title:S.title,url:`https://youtu.be/${S.youtube_id}`,image:S.image}),p=async S=>{var F;const W=(F=S.target.files)==null?void 0:F[0];if(W){try{const j=await Lv(W);d(A=>({...A,image:j}))}catch{}S.target.value=""}},h=l?[!l.title.trim()&&"a title",!l.image&&"an image",!np(l.url)&&"a valid YouTube link"].filter(Boolean):[],T=!!l&&h.length===0,v=async()=>{if(!T)return;const S={kind:l.kind,title:l.title.trim(),image:l.image,youtube_id:np(l.url)};l.id?await _.updateMedia(l.id,S):await _.createMedia(S),d(null),m()};return r.jsxs("div",{style:qe.page,children:[a&&r.jsx("iframe",{title:"mindscape-audio",src:`https://www.youtube.com/embed/${a.youtube_id}?autoplay=1&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}}),r.jsxs("div",{style:qe.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:qe.eyebrow,children:"Anvil · Mindscape"}),r.jsx("h1",{style:qe.h1,children:"Mindscape"}),r.jsx("div",{style:qe.subhead,children:"Close your eyes and listen — guided meditation and visualization."})]}),!l&&r.jsxs("button",{onClick:()=>d(_v(e)),style:{...qe.addBtn,background:w.color},children:[r.jsx(Ze,{size:15})," Add"]})]}),r.jsx("div",{style:qe.tabs,children:Aa.map(S=>{const W=S.icon,F=e===S.id;return r.jsxs("button",{onClick:()=>{t(S.id),d(null)},style:{...qe.tab,...F?{background:S.color,color:"#fff",borderColor:S.color}:{}},children:[r.jsx(W,{size:15})," ",S.label]},S.id)})}),l&&r.jsxs("div",{style:qe.card,children:[r.jsx("div",{style:qe.cardTitle,children:l.id?"Edit":`New ${Aa.find(S=>S.id===l.kind).label}`}),r.jsx("input",{placeholder:"YouTube link (plays as audio only)",value:l.url,onChange:S=>d({...l,url:S.target.value}),style:qe.input,autoFocus:!0}),r.jsx("input",{placeholder:"Title (required)",value:l.title,onChange:S=>d({...l,title:S.target.value}),style:{...qe.input,marginTop:8}}),r.jsxs("label",{style:qe.photoPick,children:[l.image?r.jsx("img",{src:l.image,alt:"",style:qe.photoPreview}):r.jsxs("span",{style:qe.photoEmpty,children:[r.jsx(Nl,{size:18})," Add cover image (required)"]}),r.jsx("input",{type:"file",accept:"image/*",onChange:p,style:{display:"none"}})]}),!T&&r.jsxs("div",{style:qe.warn,children:["Add ",h.join(", ")," to save."]}),r.jsxs("div",{style:qe.formActions,children:[r.jsxs("button",{onClick:()=>d(null),style:qe.cancelBtn,children:[r.jsx(Be,{size:14})," Cancel"]}),r.jsxs("button",{onClick:v,disabled:!T,style:{...qe.saveBtn,background:T?w.color:"var(--border)",color:T?"#fff":"var(--text-3)",cursor:T?"pointer":"not-allowed"},children:[r.jsx(Ne,{size:15})," ",l.id?"Save":"Add"]})]})]}),i?D.length===0?r.jsxs("div",{style:qe.empty,children:["Nothing here yet — add a ",w.label.toLowerCase()," track."]}):r.jsx("div",{style:qe.grid,children:D.map(S=>{const W=(a==null?void 0:a.id)===S.id;return r.jsxs("div",{style:qe.mediaCard,children:[r.jsxs("button",{onClick:()=>g(W?null:S),style:qe.coverBtn,title:W?"Pause":"Play",children:[r.jsx("img",{src:S.image,alt:"",style:qe.cover}),r.jsx("span",{style:{...qe.playOverlay,background:W?"rgba(0,0,0,0.45)":"rgba(0,0,0,0.28)"},children:r.jsx("span",{style:{...qe.playCircle,background:w.color},children:W?r.jsx(Dm,{size:20,color:"#fff",fill:"#fff"}):r.jsx(Vc,{size:20,color:"#fff",fill:"#fff"})})}),W&&r.jsxs("span",{style:qe.nowPlaying,children:[r.jsx(Uc,{size:11})," Playing"]})]}),r.jsxs("div",{style:qe.mediaBody,children:[r.jsx("div",{style:qe.mediaTitle,children:S.title}),r.jsxs("div",{style:qe.cardActions,children:[r.jsx("button",{onClick:()=>b(S),style:qe.iconBtn,title:"Edit",children:r.jsx(bt,{size:13})}),r.jsx("button",{onClick:()=>{(a==null?void 0:a.id)===S.id&&g(null),y(S.id,S.title)},style:qe.iconBtn,title:"Delete",children:r.jsx(Be,{size:14})})]})]})]},S.id)})}):r.jsx("div",{style:qe.muted,children:"Loading…"}),r.jsx(er,{toasts:f,onUndo:E,onDismiss:C})]})}const qe={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:900,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},tabs:{display:"flex",gap:8,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:200,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},warn:{fontSize:12,color:"#C2773B",marginTop:8,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,fontFamily:"inherit"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:16},mediaCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},coverBtn:{position:"relative",border:"none",padding:0,cursor:"pointer",display:"block",width:"100%",aspectRatio:"1",background:"var(--surface-2)"},cover:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center"},playCircle:{width:46,height:46,borderRadius:"50%",display:"grid",placeItems:"center",boxShadow:"0 2px 10px rgba(0,0,0,0.3)"},nowPlaying:{position:"absolute",bottom:8,left:8,display:"flex",alignItems:"center",gap:4,background:"rgba(0,0,0,0.65)",color:"#fff",fontSize:11,fontWeight:700,padding:"3px 8px",borderRadius:7},mediaBody:{padding:"12px 14px",display:"flex",alignItems:"flex-start",gap:8},mediaTitle:{flex:1,fontSize:14.5,fontWeight:600,lineHeight:1.4,minWidth:0,wordBreak:"break-word"},cardActions:{display:"flex",gap:2,flexShrink:0,marginTop:1},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},Zm={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},Pv=Object.keys(Zm),Nv="#9A7B4F";function Ov(e=760){const[t,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),t}const Hv=()=>{const e=new Date,t=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`},Gv=e=>{if(!e)return"";const t=new Date(e+"T00:00:00");return isNaN(t)?e:t.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},Ra=e=>(e||"").slice(0,4),Uv=e=>new Promise((t,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:d}=i;l>d&&l>1e3?(d=d*1e3/l,l=1e3):d>1e3&&(l=l*1e3/d,d=1e3);const a=document.createElement("canvas");a.width=l,a.height=d,a.getContext("2d").drawImage(i,0,0,l,d),t(a.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)}),Vv={id:null,title:"",date:Hv(),pillar:"",reward:"",image:"",note:""};function Yv(){const e=Qi(),t=v=>Hr(v,e.code),n=Ov(),[o,i]=c.useState([]),[s,l]=c.useState(null),[d,a]=c.useState(!1),g=c.useRef(null),m=c.useCallback(()=>{_.getAchievements().then(i).catch(()=>{})},[]);c.useEffect(()=>{m()},[m]);const{deleteItem:y,toasts:f,handleUndo:E,handleDismiss:C}=Jt(_.deleteAchievement,_.restoreAchievement,m),w=()=>l({...Vv}),D=v=>l({id:v.id,title:v.title,date:v.date,pillar:v.pillar||"",reward:v.reward?String(v.reward):"",image:v.image||"",note:v.note||""}),b=async v=>{var W;const S=(W=v.target.files)==null?void 0:W[0];if(S){try{const F=await Uv(S);l(j=>({...j,image:F}))}catch{}g.current&&(g.current.value="")}},p=s&&s.title.trim()&&s.date,h=async()=>{if(!p||d)return;a(!0);const v={title:s.title.trim(),date:s.date,pillar:s.pillar||null,reward:parseFloat(s.reward)||0,image:s.image||null,note:s.note.trim()};try{s.id?await _.updateAchievement(s.id,v):await _.createAchievement(v),l(null),m()}catch{}finally{a(!1)}},T=o.reduce((v,S)=>v+(S.reward||0),0);return r.jsxs("div",{style:$e.page,children:[r.jsxs("div",{style:$e.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:$e.eyebrow,children:"Anvil · Achievements"}),r.jsx("h1",{style:$e.h1,children:"Achievements"}),r.jsx("div",{style:$e.subhead,children:"Your tree of wins — newest at the top, scroll down through the past."})]}),r.jsxs("div",{style:$e.headRight,children:[T>0&&r.jsxs("div",{style:$e.totalBadge,children:[r.jsx(fl,{size:14,color:"#C9A227"})," ",t(T)," earned"]}),r.jsxs("button",{onClick:w,style:$e.addBtn,children:[r.jsx(Ze,{size:15})," Add achievement"]})]})]}),o.length===0?r.jsxs("div",{style:$e.empty,children:[r.jsx(Lr,{size:30,color:"var(--text-3)"}),r.jsx("div",{style:{marginTop:10},children:"No achievements yet."}),r.jsx("div",{style:$e.emptySub,children:"Plant your first win — it'll grow into a timeline you can look back on."})]}):r.jsxs("div",{style:{...$e.timeline,paddingLeft:0},children:[r.jsx("div",{style:{...$e.trunk,left:n?13:"50%"}}),o.map((v,S)=>{const W=Zm[v.pillar]||Nv,F=!n&&S%2===1,j=o[S-1],A=!j||Ra(j.date)!==Ra(v.date);return r.jsxs("div",{children:[A&&r.jsx("div",{style:{...$e.yearRow,justifyContent:n?"flex-start":"center",paddingLeft:n?36:0},children:r.jsx("span",{style:$e.yearChip,children:Ra(v.date)})}),r.jsxs("div",{style:{...$e.row,gridTemplateColumns:n?"28px 1fr":"1fr 44px 1fr"},children:[!n&&r.jsx("div",{style:{gridColumn:1,display:"flex",justifyContent:"flex-end"},children:F&&r.jsx(op,{a:v,color:W,side:"left",money:t,onEdit:()=>D(v),onDelete:()=>y(v.id,v.title)})}),r.jsx("div",{style:{gridColumn:n?1:2,display:"flex",justifyContent:"center",position:"relative"},children:r.jsx("div",{style:{...$e.node,borderColor:W,background:"var(--surface)"},children:r.jsx("div",{style:{...$e.nodeDot,background:W}})})}),r.jsx("div",{style:{gridColumn:n?2:3,display:"flex",justifyContent:"flex-start"},children:(n||!F)&&r.jsx(op,{a:v,color:W,side:n?"mobile":"right",money:t,onEdit:()=>D(v),onDelete:()=>y(v.id,v.title)})})]})]},v.id)})]}),s&&r.jsx("div",{style:$e.overlay,onClick:()=>l(null),children:r.jsxs("div",{style:$e.modal,onClick:v=>v.stopPropagation(),children:[r.jsxs("div",{style:$e.modalHead,children:[r.jsx("div",{style:$e.modalTitle,children:s.id?"Edit achievement":"New achievement"}),r.jsx("button",{onClick:()=>l(null),style:$e.iconBtn,children:r.jsx(Be,{size:16})})]}),r.jsx("label",{style:$e.label,children:"Title *"}),r.jsx("input",{autoFocus:!0,value:s.title,onChange:v=>l(S=>({...S,title:v.target.value})),placeholder:"What did you achieve?",style:$e.input}),r.jsxs("div",{style:$e.formRow,children:[r.jsxs("div",{style:{flex:1},children:[r.jsxs("label",{style:$e.label,children:[r.jsx(Yx,{size:12})," Date *"]}),r.jsx("input",{type:"date",value:s.date,onChange:v=>l(S=>({...S,date:v.target.value})),style:$e.input})]}),r.jsxs("div",{style:{flex:1},children:[r.jsx("label",{style:$e.label,children:"Pillar (optional)"}),r.jsxs("select",{value:s.pillar,onChange:v=>l(S=>({...S,pillar:v.target.value})),style:$e.input,children:[r.jsx("option",{value:"",children:"— None —"}),Pv.map(v=>r.jsx("option",{value:v,children:v},v))]})]})]}),r.jsxs("label",{style:$e.label,children:[r.jsx(fl,{size:12})," Reward (",e.code,") — optional gesture of appreciation"]}),r.jsx("input",{type:"number",min:"0",step:"any",value:s.reward,onChange:v=>l(S=>({...S,reward:v.target.value})),placeholder:"0",style:$e.input}),r.jsx("label",{style:$e.label,children:"Photo (optional)"}),s.image?r.jsxs("div",{style:$e.imgWrap,children:[r.jsx("img",{src:s.image,alt:"",style:$e.imgPreview}),r.jsx("button",{onClick:()=>l(v=>({...v,image:""})),style:$e.imgRemove,children:r.jsx(Be,{size:14})})]}):r.jsxs("button",{onClick:()=>{var v;return(v=g.current)==null?void 0:v.click()},style:$e.uploadBtn,children:[r.jsx(dy,{size:15})," Add a photo"]}),r.jsx("input",{ref:g,type:"file",accept:"image/*",onChange:b,style:{display:"none"}}),r.jsx("label",{style:$e.label,children:"Note (optional)"}),r.jsx("textarea",{value:s.note,onChange:v=>l(S=>({...S,note:v.target.value})),placeholder:"The story behind it…",rows:3,style:{...$e.input,resize:"vertical",fontFamily:"inherit"}}),r.jsxs("div",{style:$e.modalActions,children:[r.jsx("button",{onClick:()=>l(null),style:$e.cancelBtn,children:"Cancel"}),r.jsxs("button",{onClick:h,disabled:!p||d,style:{...$e.saveBtn,...!p||d?{opacity:.5,cursor:"not-allowed"}:{}},children:[r.jsx(Ne,{size:15})," ",s.id?"Save":"Add"]})]})]})}),r.jsx(er,{toasts:f,onUndo:E,onDismiss:C})]})}function op({a:e,color:t,side:n,money:o,onEdit:i,onDelete:s}){return r.jsxs("div",{style:{...$e.card,borderTop:`3px solid ${t}`,textAlign:n==="left"?"right":"left"},children:[r.jsxs("div",{style:{...$e.cardTop,flexDirection:n==="left"?"row-reverse":"row"},children:[r.jsx("span",{style:{...$e.dateChip,background:`${t}1A`,color:t},children:Gv(e.date)}),r.jsxs("div",{style:{display:"flex",gap:2},children:[r.jsx("button",{onClick:i,style:$e.ghostBtn,title:"Edit",children:r.jsx(bt,{size:13})}),r.jsx("button",{onClick:s,style:$e.ghostBtn,title:"Delete",children:r.jsx(Be,{size:14})})]})]}),r.jsx("div",{style:$e.cardTitle,children:e.title}),e.image&&r.jsx("img",{src:e.image,alt:"",style:$e.cardImg}),e.note&&r.jsx("div",{style:$e.cardNote,children:e.note}),e.reward>0&&r.jsxs("div",{style:{...$e.rewardBadge,marginLeft:n==="left"?"auto":0},children:[r.jsx(fl,{size:13})," ",o(e.reward)]})]})}const $e={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},totalBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{textAlign:"center",color:"var(--text-3)",padding:"60px 16px",fontSize:14,fontWeight:600},emptySub:{fontSize:12.5,fontWeight:400,marginTop:6,maxWidth:320,marginInline:"auto",lineHeight:1.5},timeline:{position:"relative",maxWidth:1e3,margin:"0 auto",paddingBottom:30},trunk:{position:"absolute",top:8,bottom:8,width:3,background:"linear-gradient(to bottom, var(--border), var(--border))",transform:"translateX(-1.5px)",borderRadius:2},yearRow:{display:"flex",margin:"6px 0 12px"},yearChip:{fontSize:11.5,fontWeight:800,letterSpacing:"0.06em",color:"var(--text-2)",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:"4px 12px",position:"relative",zIndex:2},row:{display:"grid",alignItems:"center",gap:8,marginBottom:16},node:{width:20,height:20,borderRadius:"50%",border:"3px solid",display:"grid",placeItems:"center",zIndex:2,boxShadow:"0 0 0 4px var(--bg)"},nodeDot:{width:7,height:7,borderRadius:"50%"},card:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.06)",maxWidth:420,width:"100%",boxSizing:"border-box"},cardTop:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,marginBottom:7},dateChip:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,whiteSpace:"nowrap"},cardTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",lineHeight:1.3,wordBreak:"break-word"},cardImg:{width:"100%",maxHeight:220,objectFit:"cover",borderRadius:9,marginTop:9,display:"block"},cardNote:{fontSize:12.5,color:"var(--text-2)",marginTop:7,lineHeight:1.5,whiteSpace:"pre-wrap",wordBreak:"break-word"},rewardBadge:{display:"inline-flex",alignItems:"center",gap:5,marginTop:9,background:"rgba(201,162,39,0.12)",color:"#8A6E1A",border:"1px solid rgba(201,162,39,0.3)",padding:"3px 10px",borderRadius:14,fontSize:12,fontWeight:700},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:6},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:60,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:460,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},label:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)"},formRow:{display:"flex",gap:10},uploadBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",border:"1.5px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"11px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},imgWrap:{position:"relative",borderRadius:10,overflow:"hidden"},imgPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block",borderRadius:10},imgRemove:{position:"absolute",top:8,right:8,border:"none",background:"rgba(0,0,0,0.55)",color:"#fff",width:28,height:28,borderRadius:"50%",cursor:"pointer",display:"grid",placeItems:"center"},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}};function Qv(e=760){const[t,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),t}const Bs=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},Kv=e=>e?new Date(e+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"",Dr="#C9772E",ri=[{id:"todo",label:"Want to",color:"#3A7CA5"},{id:"doing",label:"Enjoying",color:"#C9772E"},{id:"done",label:"Satisfied",color:"#4C9A6B"}],Xv=[{id:"text",label:"Text"},{id:"number",label:"Number"},{id:"link",label:"Link"}],Fa=e=>(e&&typeof e=="object"?e.type:"text")||"text",dn=e=>(e&&typeof e=="object"?e.name:e)||"";function qv(){const e=Qv(),[t,n]=c.useState([]),[o,i]=c.useState(null),[s,l]=c.useState(!1),[d,a]=c.useState(null),[g,m]=c.useState(null),[y,f]=c.useState(null),[E,C]=c.useState(null),[w,D]=c.useState(null),[b,p]=c.useState([]),h=c.useRef({}),T=c.useCallback(()=>{_.getDelight().then(R=>{n(R),i(U=>{var M;return U&&R.some(z=>z.id===U)?U:((M=R[0])==null?void 0:M.id)??null}),l(!0)}).catch(()=>l(!0))},[]);c.useEffect(()=>{T()},[T]),c.useEffect(()=>{p([])},[o]);const{deleteItem:v,toasts:S,handleUndo:W,handleDismiss:F}=Jt(_.deleteDelightItem,_.restoreDelightItem,T),j=t.find(R=>R.id===o)||null,A=c.useMemo(()=>{const R={todo:[],doing:[],done:[]};return((j==null?void 0:j.items)||[]).forEach(U=>{(R[U.status]||R.todo).push(U)}),Object.values(R).forEach(U=>U.sort((M,z)=>M.position-z.position||M.id-z.id)),R},[j]),ie=R=>/^tags?$/i.test(dn(R).trim()),B=R=>((j==null?void 0:j.columns)||[]).filter(ie).flatMap(U=>(R.fields[dn(U)]||"").split(",").map(M=>M.trim()).filter(Boolean)),I=c.useMemo(()=>{const R=new Set;return((j==null?void 0:j.items)||[]).forEach(U=>(j.columns||[]).filter(ie).forEach(M=>(U.fields[dn(M)]||"").split(",").map(z=>z.trim()).filter(Boolean).forEach(z=>R.add(z)))),[...R].sort((U,M)=>U.localeCompare(M))},[j]),J=c.useMemo(()=>{const R={};return((j==null?void 0:j.columns)||[]).forEach(U=>{const M=dn(U);if(ie(U))return;const z=new Set;((j==null?void 0:j.items)||[]).forEach(x=>{const V=(x.fields[M]||"").trim();V&&z.add(V)}),R[M]=[...z].sort((x,V)=>x.localeCompare(V))}),R},[j]),be=R=>b.length===0||B(R).some(U=>b.includes(U)),se=R=>p(U=>U.includes(R)?U.filter(M=>M!==R):[...U,R]),ye=(R,U,M)=>{for(const z of ri){const x=h.current[z.id];if(!x)continue;const V=x.getBoundingClientRect();if(R>=V.left&&R<=V.right&&U>=V.top&&U<=V.bottom){const ge=[...x.querySelectorAll("[data-card]")].filter(Oe=>Oe.dataset.id!==String(M));let je=ge.length;for(let Oe=0;Oe<ge.length;Oe++){const _e=ge[Oe].getBoundingClientRect();if(U<_e.top+_e.height/2){je=Oe;break}}return{status:z.id,index:je}}}return null},G=(R,U)=>{if(R.target.closest("button"))return;const M=R.clientX,z=R.clientY,x=R.currentTarget;let V=!1,ge=null,je=null;const Oe=Xe=>{if(!V){if(Math.hypot(Xe.clientX-M,Xe.clientY-z)<6)return;V=!0;const Ke=x.getBoundingClientRect();je={id:U.id,item:U,w:Ke.width,offX:M-Ke.left,offY:z-Ke.top}}je={...je,x:Xe.clientX,y:Xe.clientY},C(je),ge=ye(Xe.clientX,Xe.clientY,U.id)||ge,D(ge)},_e=()=>{window.removeEventListener("pointermove",Oe),window.removeEventListener("pointerup",_e),V&&ge&&Y(U,ge),C(null),D(null)};window.addEventListener("pointermove",Oe),window.addEventListener("pointerup",_e)},Y=(R,U)=>{const M={};ri.forEach(ge=>{M[ge.id]=(A[ge.id]||[]).filter(je=>je.id!==R.id)});const z=M[U.status]||[];let x;if(b.length){const ge=z.filter(be);x=U.index<ge.length?z.indexOf(ge[U.index]):z.length}else x=Math.max(0,Math.min(U.index,z.length));M[U.status]=[...z.slice(0,x),{...R,status:U.status},...z.slice(x)];const V=[];ri.forEach(ge=>(M[ge.id]||[]).forEach((je,Oe)=>V.push({id:je.id,status:ge.id,position:Oe}))),n(ge=>ge.map(je=>je.id===o?{...je,items:V.map(Oe=>({...je.items.find(_e=>_e.id===Oe.id),status:Oe.status,position:Oe.position}))}:je)),_.arrangeDelight(o,V).then(T).catch(T),U.status==="done"&&R.status!=="done"&&f({item:R,date:Bs(),note:""})},oe=async R=>{window.confirm(`Delete "${R.name}" and all its items?`)&&(await _.deleteCollection(R.id),T())},K=()=>({name:"",type:"text"}),pe=()=>a({id:null,name:"",columns:[K(),K()]}),O=R=>a({id:R.id,name:R.name,columns:R.columns.length?R.columns.map(U=>({name:dn(U),type:Fa(U)})):[K()]}),$=async()=>{const R=d.name.trim();if(!R)return;const U=d.columns.map(M=>({name:M.name.trim(),type:M.type||"text"})).filter(M=>M.name);d.id?await _.updateCollection(d.id,{name:R,columns:U}):await _.createCollection({name:R,columns:U}),a(null),T()},P=(R="todo")=>m({id:null,name:"",fields:{},status:R}),le=R=>m({id:R.id,name:R.name,fields:{...R.fields},status:R.status}),de=async()=>{const R=g.name.trim();if(!R||!j)return;const U=g.id?(j.items||[]).find(V=>V.id===g.id):null,M=(U==null?void 0:U.status)==="done",z={name:R,fields:g.fields,status:g.status};let x;if(g.id?x=await _.updateDelightItem(g.id,z):x=await _.createDelightItem(j.id,z),m(null),await T(),g.status==="done"&&!M){const V=Te(x,j.id,R);f({item:V||{id:g.id,name:R},date:Bs(),note:""})}},Te=(R,U,M)=>{const z=Array.isArray(R)?R.find(V=>V.id===U):null;if(!z)return null;const x=(z.items||[]).filter(V=>V.name===M&&V.status==="done");return x.length?x[x.length-1]:null},Q=async()=>{var R;if(!((R=y==null?void 0:y.item)!=null&&R.id)){f(null);return}await _.updateDelightItem(y.item.id,{completed_date:y.date||Bs(),completion_note:y.note||""}),f(null),T()},ne=({it:R})=>{const U=j.columns.filter(z=>R.fields[dn(z)]&&!ie(z)),M=B(R);return r.jsxs("div",{"data-card":!0,"data-id":R.id,onPointerDown:z=>G(z,R),style:he.itemCard,children:[r.jsxs("div",{style:he.itemCardTop,children:[r.jsx(xl,{size:13,style:{color:"var(--text-3)",flexShrink:0}}),r.jsx("span",{style:he.itemName,children:R.name}),r.jsx("button",{onClick:()=>le(R),style:he.ghostBtn,children:r.jsx(bt,{size:12})}),r.jsx("button",{onClick:()=>v(R.id,R.name),style:he.ghostBtn,children:r.jsx(Be,{size:13})})]}),U.map(z=>{const x=dn(z),V=R.fields[x];return r.jsxs("div",{style:he.itemField,children:[r.jsx("span",{style:he.fieldLabel,children:x}),Fa(z)==="link"?r.jsx("a",{href:/^https?:\/\//i.test(V)?V:`https://${V}`,target:"_blank",rel:"noreferrer",style:{minWidth:0,wordBreak:"break-word",color:Dr},onClick:ge=>ge.stopPropagation(),children:V}):r.jsx("span",{style:{minWidth:0,wordBreak:"break-word"},children:V})]},x)}),M.length>0&&r.jsx("div",{style:he.tagWrap,children:M.map((z,x)=>r.jsx("span",{style:he.tag,children:z},x))}),R.status==="done"&&R.completed_date&&r.jsxs("div",{style:he.doneMeta,children:[r.jsxs("span",{style:he.doneDate,children:["✓ ",Kv(R.completed_date)]}),R.completion_note&&r.jsx("span",{style:he.doneNote,children:R.completion_note})]})]})};return r.jsxs("div",{style:he.page,children:[r.jsxs("div",{style:he.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:he.eyebrow,children:"Anvil · Delights"}),r.jsx("h1",{style:he.h1,children:"Delights"}),r.jsx("div",{style:he.subhead,children:"Books, films, places, food — track what you want to enjoy and how you felt."})]}),r.jsxs("button",{onClick:pe,style:he.addColBtn,children:[r.jsx(Ze,{size:15})," New list"]})]}),r.jsxs("div",{style:he.tabs,children:[t.map(R=>r.jsxs("button",{onClick:()=>i(R.id),style:{...he.tab,...R.id===o?he.tabOn:{}},children:[R.name,r.jsx("span",{style:he.tabCount,children:R.items.length})]},R.id)),r.jsx("button",{onClick:pe,style:he.tabAdd,title:"New list",children:r.jsx(Ze,{size:15})})]}),s?j?r.jsxs("div",{children:[r.jsxs("div",{style:he.colHead,children:[r.jsx("h2",{style:he.colTitle,children:j.name}),r.jsxs("div",{style:he.colActions,children:[r.jsxs("button",{onClick:()=>P(),style:he.primaryBtn,children:[r.jsx(Ze,{size:14})," Add"]}),r.jsx("button",{onClick:()=>O(j),style:he.ghostBtn,title:"Edit list & columns",children:r.jsx(ry,{size:15})}),r.jsx("button",{onClick:()=>oe(j),style:he.ghostBtn,title:"Delete list",children:r.jsx(Be,{size:16})})]})]}),I.length>0&&r.jsxs("div",{style:he.filterBar,children:[r.jsx("span",{style:he.filterLabel,children:"Tags"}),r.jsx("button",{onClick:()=>p([]),style:{...he.filterChip,...b.length===0?he.filterChipOn:{}},children:"All"}),I.map(R=>r.jsx("button",{onClick:()=>se(R),style:{...he.filterChip,...b.includes(R)?he.filterChipOn:{}},children:R},R))]}),r.jsx("div",{style:{...he.board,gridTemplateColumns:e?"1fr":"repeat(3, 1fr)"},children:ri.map(R=>{const U=(A[R.id]||[]).filter(be),M=E?U.filter(x=>x.id!==E.id):U,z=w&&w.status===R.id;return r.jsxs("div",{ref:x=>h.current[R.id]=x,style:{...he.lane,...z?{outline:`2px dashed ${R.color}`,outlineOffset:-2}:{}},children:[r.jsxs("div",{style:he.laneHead,children:[r.jsx("span",{style:{...he.laneDot,background:R.color}}),r.jsx("span",{style:he.laneLabel,children:R.label}),r.jsx("span",{style:he.laneCount,children:U.length}),r.jsx("button",{onClick:()=>P(R.id),style:he.laneAdd,title:`Add to ${R.label}`,children:r.jsx(Ze,{size:13})})]}),r.jsxs("div",{style:he.laneBody,children:[M.map((x,V)=>r.jsxs("div",{children:[z&&w.index===V&&r.jsx("div",{style:{...he.insertLine,background:R.color}}),r.jsx(ne,{it:x})]},x.id)),z&&w.index>=M.length&&r.jsx("div",{style:{...he.insertLine,background:R.color}}),M.length===0&&!z&&r.jsx("div",{style:he.laneEmpty,children:"Drop here"})]})]},R.id)})})]}):r.jsxs("div",{style:he.empty,children:[r.jsx(Bm,{size:28,color:"var(--text-3)"}),r.jsx("div",{style:{marginTop:10},children:"No lists yet."}),r.jsxs("button",{onClick:pe,style:{...he.addColBtn,marginTop:14},children:[r.jsx(Ze,{size:15})," Create your first list"]})]}):r.jsx("div",{style:he.muted,children:"Loading…"}),E&&r.jsx("div",{style:{...he.ghost,width:E.w,left:E.x-E.offX,top:E.y-E.offY},children:r.jsxs("div",{style:he.itemCardTop,children:[r.jsx(xl,{size:13,style:{color:"var(--text-3)",flexShrink:0}}),r.jsx("span",{style:he.itemName,children:E.item.name})]})}),d&&r.jsx("div",{style:he.overlay,onClick:()=>a(null),children:r.jsxs("div",{style:he.modal,onClick:R=>R.stopPropagation(),children:[r.jsxs("div",{style:he.modalHead,children:[r.jsx("span",{style:he.modalTitle,children:d.id?"Edit list":"New list"}),r.jsx("button",{onClick:()=>a(null),style:he.iconBtn,children:r.jsx(Be,{size:16})})]}),r.jsx("label",{style:he.label,children:"List name *"}),r.jsx("input",{autoFocus:!0,value:d.name,onChange:R=>a(U=>({...U,name:R.target.value})),placeholder:"e.g. Gardens, Cafés, Trips…",style:he.input}),r.jsx("label",{style:he.label,children:"Columns"}),r.jsx("div",{style:he.muted2,children:"Name the details you want to track (e.g. Author, Distance, Tag)."}),d.columns.map((R,U)=>r.jsxs("div",{style:he.colRow,children:[r.jsx("input",{value:R.name,placeholder:`Column ${U+1}`,onChange:M=>a(z=>{const x=[...z.columns];return x[U]={...x[U],name:M.target.value},{...z,columns:x}}),style:{...he.input,marginBottom:0,flex:1}}),r.jsx("select",{value:R.type,onChange:M=>a(z=>{const x=[...z.columns];return x[U]={...x[U],type:M.target.value},{...z,columns:x}}),style:he.colTypeSelect,children:Xv.map(M=>r.jsx("option",{value:M.id,children:M.label},M.id))}),r.jsx("button",{onClick:()=>a(M=>({...M,columns:M.columns.filter((z,x)=>x!==U)})),style:he.iconBtn,children:r.jsx(Be,{size:14})})]},U)),d.columns.length<6&&r.jsxs("button",{onClick:()=>a(R=>({...R,columns:[...R.columns,K()]})),style:he.addColInline,children:[r.jsx(Ze,{size:13})," Add column"]}),r.jsxs("div",{style:he.modalActions,children:[r.jsx("button",{onClick:()=>a(null),style:he.cancelBtn,children:"Cancel"}),r.jsxs("button",{onClick:$,disabled:!d.name.trim(),style:{...he.saveBtn,...d.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[r.jsx(Ne,{size:15})," ",d.id?"Save":"Create"]})]})]})}),g&&j&&r.jsx("div",{style:he.overlay,onClick:()=>m(null),children:r.jsxs("div",{style:he.modal,onClick:R=>R.stopPropagation(),children:[r.jsxs("div",{style:he.modalHead,children:[r.jsx("span",{style:he.modalTitle,children:g.id?"Edit":`Add to ${j.name}`}),r.jsx("button",{onClick:()=>m(null),style:he.iconBtn,children:r.jsx(Be,{size:16})})]}),r.jsx("label",{style:he.label,children:"Name *"}),r.jsx("input",{autoFocus:!0,value:g.name,onChange:R=>m(U=>({...U,name:R.target.value})),onKeyDown:R=>R.key==="Enter"&&de(),placeholder:"Title / name",style:he.input}),j.columns.map(R=>{const U=dn(R),M=Fa(R),z=`dl-${j.id}-${U}`,x=J[U]||[];return r.jsxs("div",{children:[r.jsx("label",{style:he.label,children:U}),r.jsx("input",{value:g.fields[U]||"",type:M==="number"?"number":M==="link"?"url":"text",list:x.length?z:void 0,onChange:V=>m(ge=>({...ge,fields:{...ge.fields,[U]:V.target.value}})),placeholder:M==="link"?"https://…":U,style:he.input}),x.length>0&&r.jsx("datalist",{id:z,children:x.map(V=>r.jsx("option",{value:V},V))})]},U)}),r.jsx("label",{style:he.label,children:"Status"}),r.jsx("div",{style:he.statusPick,children:ri.map(R=>r.jsx("button",{type:"button",onClick:()=>m(U=>({...U,status:R.id})),style:{...he.statusChip,...g.status===R.id?{background:R.color,color:"#fff",border:`1px solid ${R.color}`}:{}},children:R.label},R.id))}),r.jsxs("div",{style:he.modalActions,children:[r.jsx("button",{onClick:()=>m(null),style:he.cancelBtn,children:"Cancel"}),r.jsxs("button",{onClick:de,disabled:!g.name.trim(),style:{...he.saveBtn,...g.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[r.jsx(Ne,{size:15})," ",g.id?"Save":"Add"]})]})]})}),y&&r.jsx("div",{style:he.overlay,onClick:()=>f(null),children:r.jsxs("div",{style:{...he.modal,maxWidth:380},onClick:R=>R.stopPropagation(),children:[r.jsxs("div",{style:he.modalHead,children:[r.jsx("span",{style:he.modalTitle,children:"Satisfied! 🎉"}),r.jsx("button",{onClick:()=>f(null),style:he.iconBtn,children:r.jsx(Be,{size:16})})]}),r.jsxs("div",{style:he.muted2,children:['"',y.item.name,'" — when did you complete it?']}),r.jsx("label",{style:he.label,children:"Completed on"}),r.jsx("input",{type:"date",value:y.date,max:Bs(),onChange:R=>f(U=>({...U,date:R.target.value})),style:he.input}),r.jsx("label",{style:he.label,children:"Comment (optional)"}),r.jsx("textarea",{value:y.note,onChange:R=>f(U=>({...U,note:R.target.value})),placeholder:"How was it?",style:{...he.input,minHeight:64,resize:"vertical"}}),r.jsxs("div",{style:he.modalActions,children:[r.jsx("button",{onClick:()=>f(null),style:he.cancelBtn,children:"Skip"}),r.jsxs("button",{onClick:Q,style:he.saveBtn,children:[r.jsx(Ne,{size:15})," Save"]})]})]})}),r.jsx(er,{toasts:S,onUndo:W,onDismiss:F})]})}const he={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},addColBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"none",background:Dr,color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabs:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16,alignItems:"center"},tab:{display:"inline-flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},tabOn:{background:Dr,color:"#fff",borderColor:Dr},tabCount:{fontSize:10.5,fontWeight:700,background:"rgba(0,0,0,0.12)",borderRadius:9,padding:"1px 6px"},tabAdd:{border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",width:32,height:32,borderRadius:"50%",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},colHead:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,marginBottom:12,flexWrap:"wrap"},colTitle:{fontSize:18,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},colActions:{display:"flex",gap:6,alignItems:"center"},primaryBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"none",background:Dr,color:"#fff",padding:"7px 13px",borderRadius:8,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:6,flexShrink:0},filterBar:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",marginBottom:14},filterLabel:{fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--text-3)",marginRight:2},filterChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 11px",borderRadius:16,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},filterChipOn:{background:Dr,color:"#fff",borderColor:Dr},board:{display:"grid",gap:12,alignItems:"start"},lane:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:"10px 10px 12px",minHeight:120,display:"flex",flexDirection:"column"},laneHead:{display:"flex",alignItems:"center",gap:7,padding:"2px 4px 10px"},laneDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},laneLabel:{fontSize:12.5,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--text-2)"},laneCount:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},laneAdd:{marginLeft:"auto",border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:2,borderRadius:6},laneBody:{display:"flex",flexDirection:"column",gap:8,minHeight:40,flex:1},laneEmpty:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",textAlign:"center",padding:"16px 0",border:"1px dashed var(--border)",borderRadius:8},insertLine:{height:3,borderRadius:2,margin:"1px 0"},itemCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"9px 10px",boxShadow:"0 1px 2px rgba(0,0,0,0.05)",cursor:"grab",touchAction:"none",userSelect:"none"},itemCardTop:{display:"flex",alignItems:"center",gap:6},itemName:{flex:1,minWidth:0,fontSize:13.5,fontWeight:700,wordBreak:"break-word"},itemField:{display:"flex",gap:8,fontSize:12,color:"var(--text-2)",marginTop:5,paddingLeft:19},fieldLabel:{fontWeight:700,color:"var(--text-3)",minWidth:64,flexShrink:0},tagWrap:{display:"flex",flexWrap:"wrap",gap:5,marginTop:8,paddingLeft:19},tag:{fontSize:10.5,fontWeight:700,color:Dr,background:"color-mix(in srgb, "+Dr+" 14%, transparent)",border:"1px solid color-mix(in srgb, "+Dr+" 30%, transparent)",borderRadius:12,padding:"2px 8px",whiteSpace:"nowrap"},doneMeta:{marginTop:8,paddingLeft:19,display:"flex",flexDirection:"column",gap:3},doneDate:{fontSize:11,fontWeight:700,color:"#4C9A6B"},doneNote:{fontSize:11.5,color:"var(--text-2)",fontStyle:"italic",wordBreak:"break-word"},ghost:{position:"fixed",zIndex:300,pointerEvents:"none",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"9px 10px",boxShadow:"0 8px 28px rgba(0,0,0,0.28)",opacity:.95,transform:"rotate(1.5deg)"},muted:{fontSize:13,color:"var(--text-3)"},muted2:{fontSize:11.5,color:"var(--text-3)",marginBottom:8},empty:{textAlign:"center",color:"var(--text-3)",padding:"50px 16px",fontSize:14,fontWeight:600,display:"flex",flexDirection:"column",alignItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:8},colRow:{display:"flex",gap:6,alignItems:"center",marginBottom:8},colTypeSelect:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",background:"var(--bg)",color:"var(--text)",flexShrink:0},addColInline:{display:"inline-flex",alignItems:"center",gap:5,border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"7px 12px",borderRadius:8,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},statusPick:{display:"flex",gap:6,flexWrap:"wrap"},statusChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 13px",borderRadius:18,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},jr="#C9772E",Jm={Carrot:Kx,ShoppingCart:By,Clapperboard:Zx,ShoppingBag:Wm,Fuel:sy,Sparkles:Jn,Shirt:Ey,WashingMachine:Ly,Zap:Zc,Tv:Fy,Droplet:oy,Coffee:ey,Utensils:Wy,Bus:Gx,Train:Ay,Plane:Cy,Home:$i,Heart:Im,Gift:fl,Book:Nx,Dumbbell:iy,Pill:Sy,Phone:jy,Wifi:_y,Gamepad2:ly,Music:Ol,Scissors:Fm,PawPrint:ky,Baby:_x,GraduationCap:Cm,Briefcase:Hx,Car:Qx,Bike:Px},cn=({name:e,...t})=>{const n=Jm[e]||Wm;return r.jsx(n,{...t})},Ma=["#C9772E","#4C9A6B","#3A7CA5","#8268B0","#C2536B","#C9A227","#D1556E","#5B7C99","#A23E57","#3E9E6B"],Hd=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,ip=Hd(new Date);function Zv(e=760){const[t,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),t}function Jv(){const e=Zv(),t=Qi(),n=Km(),[o,i]=c.useState([]),[s,l]=c.useState([]),[d,a]=c.useState(!1),[g,m]=c.useState(ip),[y,f]=c.useState(()=>{const u=new Date;return new Date(u.getFullYear(),u.getMonth(),1)}),[E,C]=c.useState(null),[w,D]=c.useState(null),[b,p]=c.useState(!1),[h,T]=c.useState("day"),[v,S]=c.useState(()=>Ur(new Date,n)[0]),[W,F]=c.useState("all"),j=c.useCallback(()=>{_.getExpenses().then(u=>{i(u.categories),l(u.logs),a(!0)}).catch(()=>a(!0))},[]);c.useEffect(()=>{j()},[j]);const{deleteItem:A,toasts:ie,handleUndo:B,handleDismiss:I}=Jt(_.deleteExpenseLog,_.restoreExpenseLog,j),J=c.useMemo(()=>{const u={};return o.forEach(ee=>u[ee.id]=ee),u},[o]),be=u=>jl(u,t.code),se=c.useMemo(()=>s.filter(u=>u.date===g),[s,g]),ye=se.reduce((u,ee)=>u+ee.amount,0),G=c.useMemo(()=>{if(h==="day")return se;if(h==="month"){const[u,ee]=Ur(new Date(g+"T00:00"),n);return s.filter(Ae=>Ae.date>=u&&Ae.date<=ee)}if(h==="year"){const u=g.slice(0,4);return s.filter(ee=>ee.date.slice(0,4)===u)}return s},[s,se,h,g,n]),Y=G.reduce((u,ee)=>u+ee.amount,0),oe=c.useMemo(()=>{const u={};return G.forEach(ee=>{u[ee.category_id]=(u[ee.category_id]||0)+ee.amount}),Object.entries(u).map(([ee,Ae])=>({cat:J[ee],amount:Ae})).filter(ee=>ee.cat).sort((ee,Ae)=>Ae.amount-ee.amount)},[G,J]),K=u=>Ur(new Date(u+"T00:00"),n)[0],pe=c.useMemo(()=>{const u=new Set(s.map(ee=>K(ee.date)));return u.add(Ur(new Date,n)[0]),Array.from(u).sort().reverse().slice(0,12)},[s,n]),O=u=>new Date(u+"T00:00").toLocaleDateString("en-US",{month:"short",year:"numeric"}),$=(u,ee)=>Ur(new Date(u+"T00:00"),n,-ee)[0],P=u=>W==="all"||u.category_id===Number(W),le=[v,$(v,1),$(v,2)],de=le.map(u=>{const[ee,Ae]=Ur(new Date(u+"T00:00"),n);return s.filter(Le=>Le.date>=ee&&Le.date<=Ae&&P(Le)).reduce((Le,we)=>Le+we.amount,0)}),[Te,Q,ne]=de,R=Q>0?Math.round((Te-Q)/Q*100):Te>0?100:0,U=R>0?Xc:R<0?Kc:Em,M=R>0?"#C2536B":R<0?"#4C9A6B":"#9A968C",z=c.useMemo(()=>{const[u,ee]=Ur(new Date(v+"T00:00"),n),Ae={};return s.filter(Le=>Le.date>=u&&Le.date<=ee&&P(Le)).forEach(Le=>{Ae[Le.category_id]=(Ae[Le.category_id]||0)+Le.amount}),Object.entries(Ae).map(([Le,we])=>({cat:J[Le],amount:we})).filter(Le=>Le.cat).sort((Le,we)=>we.amount-Le.amount)},[s,v,W,J,n]);let x=0;const V=z.map(u=>{const ee=Te>0?x/Te*100:0;x+=u.amount;const Ae=Te>0?x/Te*100:0;return{...u,start:ee,end:Ae,pct:Te>0?u.amount/Te*100:0}}),ge=V.length?`conic-gradient(${V.map(u=>`${u.cat.color} ${u.start}% ${u.end}%`).join(", ")})`:"var(--surface-2)",je=c.useMemo(()=>{const u=y,ee=(u.getDay()+6)%7,Ae=new Date(u.getFullYear(),u.getMonth()+1,0).getDate(),Le={};s.forEach(Pe=>{Pe.date.slice(0,7)===Hd(u).slice(0,7)&&(Le[Pe.date]=(Le[Pe.date]||0)+Pe.amount)});const we=[];for(let Pe=0;Pe<ee;Pe++)we.push(null);for(let Pe=1;Pe<=Ae;Pe++){const wt=Hd(new Date(u.getFullYear(),u.getMonth(),Pe));we.push({date:wt,day:Pe,total:Le[wt]||0})}return we},[y,s]),Oe=u=>f(ee=>new Date(ee.getFullYear(),ee.getMonth()+u,1)),_e=y.toLocaleDateString("en-US",{month:"long",year:"numeric"}),Xe=u=>C({cat:u,amount:"",note:""}),Ke=async()=>{const u=parseFloat(E.amount);!u||u<=0||(await _.createExpenseLog({category_id:E.cat.id,amount:u,note:E.note.trim(),date:g}),C(null),j())},ot=()=>D({id:null,name:"",icon:"ShoppingBag",color:Ma[o.length%Ma.length]}),ht=u=>D({id:u.id,name:u.name,icon:u.icon,color:u.color}),Qe=async()=>{const u=w.name.trim();u&&(w.id?await _.updateExpenseCategory(w.id,{name:u,icon:w.icon,color:w.color}):await _.createExpenseCategory({name:u,icon:w.icon,color:w.color}),D(null),j())},zt=async u=>{const ee=s.filter(Le=>Le.category_id===u.id).length,Ae=ee>0?`Delete "${u.name}"? Its ${ee} transaction${ee===1?"":"s"} will be moved to "Other".`:`Delete "${u.name}"?`;window.confirm(Ae)&&(await _.deleteExpenseCategory(u.id),j())},It=new Date(g+"T00:00").toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});let kt=0;const gt=oe.map(u=>{const ee=Y>0?kt/Y*100:0;kt+=u.amount;const Ae=Y>0?kt/Y*100:0;return{...u,start:ee,end:Ae,pct:Y>0?u.amount/Y*100:0}}),jt=gt.length?`conic-gradient(${gt.map(u=>`${u.cat.color} ${u.start}% ${u.end}%`).join(", ")})`:"var(--surface-2)";return r.jsxs("div",{style:X.page,children:[r.jsx("div",{style:X.head,children:r.jsxs("div",{children:[r.jsx("div",{style:X.eyebrow,children:"Anvil · Expenses"}),r.jsx("h1",{style:X.h1,children:"Expenses"}),r.jsx("div",{style:X.subhead,children:"Log day-to-day spending by category and see where it goes."})]})}),r.jsxs("div",{style:X.totalCard,children:[r.jsxs("div",{style:X.totalLeft,children:[r.jsx(vl,{size:20,color:jr}),r.jsxs("div",{children:[r.jsxs("div",{style:X.totalLabel,children:["Total spent ",h==="day"?"today":h==="month"?"this month":h==="year"?"this year":"all time"]}),r.jsx("div",{style:X.totalVal,children:be(Y)})]})]}),r.jsx("div",{style:X.scopeRow,children:[["day","Day"],["month","Month"],["year","Year"],["all","All"]].map(([u,ee])=>r.jsx("button",{onClick:()=>T(u),style:{...X.scopeBtn,...h===u?X.scopeBtnOn:{}},children:ee},u))})]}),r.jsxs("div",{style:{...X.cols,gridTemplateColumns:e?"1fr":"320px 1fr"},children:[r.jsxs("div",{style:X.card,children:[r.jsxs("div",{style:X.calHead,children:[r.jsx("button",{onClick:()=>Oe(-1),style:X.calNav,children:r.jsx(An,{size:16})}),r.jsx("span",{style:X.calTitle,children:_e}),r.jsx("button",{onClick:()=>Oe(1),style:X.calNav,children:r.jsx(on,{size:16})})]}),r.jsxs("div",{style:X.calGrid,children:[["M","T","W","T","F","S","S"].map((u,ee)=>r.jsx("div",{style:X.calDow,children:u},ee)),je.map((u,ee)=>u===null?r.jsx("div",{},ee):r.jsxs("button",{onClick:()=>m(u.date),style:{...X.calCell,...u.date===g?X.calCellOn:{},...u.date===ip&&u.date!==g?X.calCellToday:{}},children:[r.jsx("span",{children:u.day}),u.total>0&&r.jsx("span",{style:{...X.calDot,background:u.date===g?"#fff":jr}})]},u.date))]})]}),r.jsxs("div",{children:[r.jsxs("div",{style:X.card,children:[r.jsxs("div",{style:X.cardTitleRow,children:[r.jsxs("div",{children:[r.jsx("div",{style:X.cardTitle,children:It}),r.jsx("div",{style:X.cardSub,children:"Tap a category to log an expense for this day."})]}),r.jsx("div",{style:X.dayTotal,children:be(ye)})]}),r.jsxs("div",{style:X.iconGrid,children:[o.map(u=>r.jsxs("div",{style:X.iconCell,children:[r.jsx("button",{onClick:()=>Xe(u),style:{...X.iconBtn,background:u.color+"1A",color:u.color,borderColor:u.color+"44"},children:r.jsx(cn,{name:u.icon,size:22})}),r.jsx("span",{style:X.iconLabel,children:u.name})]},u.id)),r.jsxs("div",{style:X.iconCell,children:[r.jsx("button",{onClick:ot,style:X.iconBtnAdd,children:r.jsx(Ze,{size:20})}),r.jsx("span",{style:X.iconLabel,children:"Add"})]})]}),r.jsxs("button",{onClick:()=>p(!0),style:X.manageLink,children:[r.jsx(bt,{size:11})," Customize categories"]}),se.length>0&&r.jsx("div",{style:X.logList,children:se.map(u=>{const ee=J[u.category_id];return r.jsxs("div",{style:X.logRow,children:[r.jsx("span",{style:{...X.logIcon,background:((ee==null?void 0:ee.color)||"#9A968C")+"1A",color:(ee==null?void 0:ee.color)||"#9A968C"},children:r.jsx(cn,{name:ee==null?void 0:ee.icon,size:14})}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{style:X.logCat,children:(ee==null?void 0:ee.name)||"Deleted category"}),u.note&&r.jsx("div",{style:X.logNote,children:u.note})]}),r.jsx("span",{style:X.logAmt,children:be(u.amount)}),r.jsx("button",{onClick:()=>A(u.id,(ee==null?void 0:ee.name)||"Expense"),style:X.delBtn,children:r.jsx(Be,{size:14})})]},u.id)})})]}),r.jsxs("div",{style:X.card,children:[r.jsx("div",{style:X.cardTitleRow,children:r.jsxs("div",{children:[r.jsx("div",{style:X.cardTitle,children:"Spending by category"}),r.jsxs("div",{style:X.cardSub,children:[h==="day"?"Today":h==="month"?"This month":h==="year"?"This year":"All time"," — percentage & amount"]})]})}),oe.length===0?r.jsx("div",{style:X.muted,children:"No expenses logged for this period yet."}):r.jsxs("div",{style:X.pieWrap,children:[r.jsxs("div",{style:X.pieChart,children:[r.jsx("div",{style:{...X.pieDisc,background:jt}}),r.jsxs("div",{style:X.pieHole,children:[r.jsx("span",{style:X.pieHoleVal,children:be(Y)}),r.jsx("span",{style:X.pieHoleLbl,children:"total"})]})]}),r.jsx("div",{style:X.pieLegend,children:gt.map(u=>r.jsxs("div",{style:X.legendRow,children:[r.jsx("span",{style:{...X.dot,background:u.cat.color}}),r.jsx(cn,{name:u.cat.icon,size:13,style:{color:u.cat.color,flexShrink:0}}),r.jsx("span",{style:X.legendName,children:u.cat.name}),r.jsxs("span",{style:X.legendPct,children:[Math.round(u.pct),"%"]}),r.jsx("span",{style:X.legendAmt,children:be(u.amount)})]},u.cat.id))})]})]}),r.jsxs("div",{style:X.card,children:[r.jsx("div",{style:X.cardTitleRow,children:r.jsxs("div",{children:[r.jsx("div",{style:X.cardTitle,children:"Monthly trend"}),r.jsx("div",{style:X.cardSub,children:"Compare a month against the previous two"})]})}),r.jsx("div",{style:X.tagRow,children:pe.map(u=>r.jsxs("button",{onClick:()=>S(u),style:{...X.tagChip,...v===u?X.tagChipOn:{}},children:[r.jsx(Dd,{size:11})," ",O(u)]},u))}),r.jsxs("div",{style:{...X.tagRow,marginTop:8},children:[r.jsxs("button",{onClick:()=>F("all"),style:{...X.tagChip,...W==="all"?X.tagChipOn:{}},children:[r.jsx(Dd,{size:11})," All categories"]}),o.map(u=>r.jsxs("button",{onClick:()=>F(String(u.id)),style:{...X.tagChip,...W===String(u.id)?X.tagChipOn:{}},children:[r.jsx(cn,{name:u.icon,size:11})," ",u.name]},u.id))]}),r.jsxs("div",{style:{...X.trend3,marginTop:16},children:[r.jsxs("div",{style:X.trendCol,children:[r.jsx("div",{style:X.trendVal,children:be(Te)}),r.jsx("div",{style:X.trendLbl,children:O(le[0])})]}),r.jsxs("div",{style:X.trendCol,children:[r.jsx("div",{style:{...X.trendVal,color:"var(--text-2)"},children:be(Q)}),r.jsx("div",{style:X.trendLbl,children:O(le[1])})]}),r.jsxs("div",{style:X.trendCol,children:[r.jsx("div",{style:{...X.trendVal,color:"var(--text-3)"},children:be(ne)}),r.jsx("div",{style:X.trendLbl,children:O(le[2])})]})]}),r.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:r.jsxs("div",{style:{...X.trendBadge,color:M,background:M+"1A"},children:[r.jsx(U,{size:15})," ",R>0?"+":"",R,"% vs ",O(le[1])]})}),r.jsx(e1,{items:[{label:O(le[0]),value:Te,color:jr},{label:O(le[1]),value:Q,color:"var(--text-3)"},{label:O(le[2]),value:ne,color:"var(--text-3)"}],money:be}),r.jsx("div",{style:X.trendDivider}),r.jsxs("div",{style:X.cardSub,children:["Category split for ",O(v)]}),z.length===0?r.jsx("div",{style:X.muted,children:"No expenses logged for this month yet."}):r.jsxs("div",{style:{...X.pieWrap,marginTop:10},children:[r.jsxs("div",{style:X.pieChart,children:[r.jsx("div",{style:{...X.pieDisc,background:ge}}),r.jsxs("div",{style:X.pieHole,children:[r.jsx("span",{style:X.pieHoleVal,children:be(Te)}),r.jsx("span",{style:X.pieHoleLbl,children:"total"})]})]}),r.jsx("div",{style:X.pieLegend,children:V.map(u=>r.jsxs("div",{style:X.legendRow,children:[r.jsx("span",{style:{...X.dot,background:u.cat.color}}),r.jsx(cn,{name:u.cat.icon,size:13,style:{color:u.cat.color,flexShrink:0}}),r.jsx("span",{style:X.legendName,children:u.cat.name}),r.jsxs("span",{style:X.legendPct,children:[Math.round(u.pct),"%"]}),r.jsx("span",{style:X.legendAmt,children:be(u.amount)})]},u.cat.id))})]})]})]})]}),E&&r.jsx("div",{style:X.overlay,onClick:()=>C(null),children:r.jsxs("div",{style:X.modal,onClick:u=>u.stopPropagation(),children:[r.jsxs("div",{style:X.modalHead,children:[r.jsxs("span",{style:{...X.modalTitle,display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{...X.iconBadge,background:E.cat.color+"1A",color:E.cat.color},children:r.jsx(cn,{name:E.cat.icon,size:16})}),E.cat.name]}),r.jsx("button",{onClick:()=>C(null),style:X.iconBtnPlain,children:r.jsx(Be,{size:16})})]}),r.jsx("label",{style:X.label,children:"Amount *"}),r.jsx("input",{autoFocus:!0,type:"number",inputMode:"decimal",value:E.amount,onChange:u=>C(ee=>({...ee,amount:u.target.value})),onKeyDown:u=>u.key==="Enter"&&Ke(),placeholder:"0",style:X.input}),r.jsx("label",{style:X.label,children:"Note (optional)"}),r.jsx("input",{value:E.note,onChange:u=>C(ee=>({...ee,note:u.target.value})),onKeyDown:u=>u.key==="Enter"&&Ke(),placeholder:"What was it for?",style:X.input}),r.jsxs("div",{style:X.modalActions,children:[r.jsx("button",{onClick:()=>C(null),style:X.cancelBtn,children:"Cancel"}),r.jsxs("button",{onClick:Ke,disabled:!E.amount,style:{...X.saveBtn,...E.amount?{}:{opacity:.5,cursor:"not-allowed"}},children:[r.jsx(Ne,{size:15})," Add"]})]})]})}),b&&r.jsx("div",{style:X.overlay,onClick:()=>p(!1),children:r.jsxs("div",{style:X.modal,onClick:u=>u.stopPropagation(),children:[r.jsxs("div",{style:X.modalHead,children:[r.jsx("span",{style:X.modalTitle,children:"Customize categories"}),r.jsx("button",{onClick:()=>p(!1),style:X.iconBtnPlain,children:r.jsx(Be,{size:16})})]}),r.jsx("div",{style:X.manageList,children:o.map(u=>r.jsxs("div",{style:X.manageRow,children:[r.jsx("span",{style:{...X.iconBadge,background:u.color+"1A",color:u.color},children:r.jsx(cn,{name:u.icon,size:15})}),r.jsx("span",{style:{flex:1,fontSize:13.5,fontWeight:600},children:u.name}),r.jsx("button",{onClick:()=>ht(u),style:X.delBtn,children:r.jsx(bt,{size:13})}),r.jsx("button",{onClick:()=>zt(u),style:X.delBtn,children:r.jsx(Be,{size:14})})]},u.id))}),r.jsxs("button",{onClick:ot,style:X.addColInline,children:[r.jsx(Ze,{size:13})," Add category"]})]})}),w&&r.jsx("div",{style:X.overlay,onClick:()=>D(null),children:r.jsxs("div",{style:X.modal,onClick:u=>u.stopPropagation(),children:[r.jsxs("div",{style:X.modalHead,children:[r.jsx("span",{style:X.modalTitle,children:w.id?"Edit category":"New category"}),r.jsx("button",{onClick:()=>D(null),style:X.iconBtnPlain,children:r.jsx(Be,{size:16})})]}),r.jsx("label",{style:X.label,children:"Name *"}),r.jsx("input",{autoFocus:!0,value:w.name,onChange:u=>D(ee=>({...ee,name:u.target.value})),onKeyDown:u=>u.key==="Enter"&&Qe(),placeholder:"e.g. Vegetables, Petrol…",style:X.input}),r.jsx("label",{style:X.label,children:"Color"}),r.jsx("div",{style:X.colorRow,children:Ma.map(u=>r.jsx("button",{onClick:()=>D(ee=>({...ee,color:u})),style:{...X.colorSwatch,background:u,...w.color===u?X.colorSwatchOn:{}}},u))}),r.jsx("label",{style:X.label,children:"Icon"}),r.jsx("div",{style:X.iconPickGrid,children:Object.keys(Jm).map(u=>r.jsx("button",{onClick:()=>D(ee=>({...ee,icon:u})),style:{...X.iconPick,...w.icon===u?{background:w.color+"22",borderColor:w.color,color:w.color}:{}},children:r.jsx(cn,{name:u,size:17})},u))}),r.jsxs("div",{style:X.modalActions,children:[r.jsx("button",{onClick:()=>D(null),style:X.cancelBtn,children:"Cancel"}),r.jsxs("button",{onClick:Qe,disabled:!w.name.trim(),style:{...X.saveBtn,...w.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[r.jsx(Ne,{size:15})," ",w.id?"Save":"Create"]})]})]})}),!d&&r.jsx("div",{style:X.muted,children:"Loading…"}),r.jsx(er,{toasts:ie,onUndo:B,onDismiss:I})]})}function e1({items:e,money:t}){const n=Math.max(1,...e.map(o=>o.value));return r.jsx("div",{style:X.tbWrap,children:e.map((o,i)=>r.jsxs("div",{style:X.tbRow,children:[r.jsx("div",{style:X.tbLbl,children:o.label}),r.jsx("div",{style:X.tbTrack,children:r.jsx("div",{style:{...X.tbBar,width:`${o.value/n*100}%`,background:o.color}})}),r.jsx("div",{style:X.tbVal,children:t(o.value)})]},i))})}const X={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},totalCard:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:14,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:16,padding:"16px 18px",marginBottom:16,flexWrap:"wrap"},totalLeft:{display:"flex",alignItems:"center",gap:12},totalLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600},totalVal:{fontSize:24,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2},scopeRow:{display:"flex",gap:6},scopeBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 13px",borderRadius:8,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},scopeBtnOn:{background:jr,color:"#fff",borderColor:jr},cols:{display:"grid",gap:16,alignItems:"start"},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},dayTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap",color:jr},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},calNav:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4},calDow:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",textAlign:"center",padding:"4px 0"},calCell:{position:"relative",border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:8,aspectRatio:"1",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},calCellOn:{background:jr,color:"#fff",borderColor:jr,fontWeight:700},calCellToday:{borderColor:jr,fontWeight:700},calDot:{position:"absolute",bottom:3,width:4,height:4,borderRadius:"50%"},iconGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(64px, 1fr))",gap:10,marginTop:4},iconCell:{display:"flex",flexDirection:"column",alignItems:"center",gap:5},iconBtn:{width:52,height:52,borderRadius:14,border:"1px solid",display:"grid",placeItems:"center",cursor:"pointer"},iconBtnAdd:{width:52,height:52,borderRadius:14,border:"1px dashed var(--border)",background:"none",color:"var(--text-3)",display:"grid",placeItems:"center",cursor:"pointer"},iconLabel:{fontSize:10.5,fontWeight:600,color:"var(--text-2)",textAlign:"center",maxWidth:66,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},manageLink:{display:"inline-flex",alignItems:"center",gap:5,border:"none",background:"none",color:"var(--text-3)",fontSize:11.5,fontWeight:600,cursor:"pointer",marginTop:12,padding:0,fontFamily:"inherit"},logList:{marginTop:14,paddingTop:14,borderTop:"1px solid var(--border)",display:"flex",flexDirection:"column",gap:8},logRow:{display:"flex",alignItems:"center",gap:10},logIcon:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},logCat:{fontSize:13,fontWeight:600},logNote:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logAmt:{fontSize:13.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:7},dot:{width:9,height:9,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},iconBadge:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:8},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},manageList:{display:"flex",flexDirection:"column",gap:6,marginBottom:10,maxHeight:320,overflowY:"auto"},manageRow:{display:"flex",alignItems:"center",gap:10,padding:"6px 2px"},addColInline:{display:"inline-flex",alignItems:"center",gap:5,border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"9px 12px",borderRadius:8,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},colorRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:4},colorSwatch:{width:26,height:26,borderRadius:"50%",border:"2px solid transparent",cursor:"pointer",padding:0},colorSwatchOn:{border:"2px solid var(--text)",boxShadow:"0 0 0 2px var(--surface)"},iconPickGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:4},iconPick:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:9,height:36,display:"grid",placeItems:"center",cursor:"pointer"},tagRow:{display:"flex",gap:6,flexWrap:"wrap"},tagChip:{display:"inline-flex",alignItems:"center",gap:4,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:20,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tagChipOn:{background:jr,color:"#fff",borderColor:jr},trendDivider:{height:1,background:"var(--border)",margin:"16px 0 12px"},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:64,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},Gd=[{id:"sandstone",name:"Sandstone",description:"Warm editorial light — the original Anvil look.",dark:!1,swatch:["#F7F6F3","#4C9A6B","#26241F"],vars:{"--bg":"#F7F6F3","--surface":"#FFFFFF","--surface-2":"#FAFAF8","--hover":"#F2F1EC","--border":"#ECEAE3","--text":"#26241F","--text-2":"#6B675E","--text-3":"#9A968C","--accent":"#4C9A6B","--accent-strong":"#26241F","--accent-2":"#3A352C"}},{id:"midnight",name:"Midnight",description:"Deep low-glare dark mode for night owls and focus.",dark:!0,swatch:["#161513","#6FB58C","#ECEAE3"],vars:{"--bg":"#161513","--surface":"#211F1C","--surface-2":"#1B1A17","--hover":"#2B2924","--border":"#34312B","--text":"#ECEAE3","--text-2":"#B6B1A6","--text-3":"#8A857A","--accent":"#6FB58C","--accent-strong":"#2E6F4B","--accent-2":"#245C3E"}},{id:"blossom",name:"Blossom",description:"Soft rose & blush — gentle, warm, and feminine.",dark:!1,swatch:["#FFF5F8","#E0608E","#B23A6B"],vars:{"--bg":"#FFF5F8","--surface":"#FFFFFF","--surface-2":"#FFF0F4","--hover":"#FDE7EE","--border":"#F6D9E2","--text":"#3D2230","--text-2":"#7A5466","--text-3":"#B08799","--accent":"#E0608E","--accent-strong":"#B23A6B","--accent-2":"#9C2F5C"}},{id:"tide",name:"Tide",description:"Calm professional blues — clean and focused.",dark:!1,swatch:["#F1F6FA","#2E86C1","#1C4E73"],vars:{"--bg":"#F1F6FA","--surface":"#FFFFFF","--surface-2":"#ECF3F9","--hover":"#E2EEF6","--border":"#D5E3EE","--text":"#13283A","--text-2":"#4A6275","--text-3":"#8AA0B0","--accent":"#2E86C1","--accent-strong":"#1C4E73","--accent-2":"#163E5C"}},{id:"velocity",name:"Velocity",description:"High-energy sport — crisp slate with electric orange.",dark:!1,swatch:["#F4F5F7","#F4511E","#1F2A37"],vars:{"--bg":"#F4F5F7","--surface":"#FFFFFF","--surface-2":"#EEF0F3","--hover":"#E7EAEE","--border":"#DCE0E6","--text":"#18202B","--text-2":"#515B68","--text-3":"#8B95A1","--accent":"#F4511E","--accent-strong":"#1F2A37","--accent-2":"#16202B"}},{id:"evergreen",name:"Evergreen",description:"Earthy forest greens — grounded and natural.",dark:!1,swatch:["#F2F6F1","#3E8E52","#2A4A30"],vars:{"--bg":"#F2F6F1","--surface":"#FFFFFF","--surface-2":"#ECF2EA","--hover":"#E4EEE2","--border":"#D7E4D3","--text":"#1E2B20","--text-2":"#4F6151","--text-3":"#8AA08C","--accent":"#3E8E52","--accent-strong":"#2A4A30","--accent-2":"#213B26"}},{id:"amethyst",name:"Amethyst",description:"Premium purple & plum — elegant and refined.",dark:!1,swatch:["#F6F4FB","#7A4FE0","#3A2D5C"],vars:{"--bg":"#F6F4FB","--surface":"#FFFFFF","--surface-2":"#F1EDF9","--hover":"#EAE3F6","--border":"#DFD6F0","--text":"#241B36","--text-2":"#5A4E72","--text-3":"#9588AE","--accent":"#7A4FE0","--accent-strong":"#3A2D5C","--accent-2":"#2E2349"}}],sp="sandstone",eh="anvil_theme",t1=e=>Gd.find(t=>t.id===e)||Gd[0];function th(){try{return localStorage.getItem(eh)||sp}catch{return sp}}function di(e,t=!0){const n=t1(e),o=document.documentElement;Object.entries(n.vars).forEach(([s,l])=>o.style.setProperty(s,l)),o.style.colorScheme=n.dark?"dark":"light",o.setAttribute("data-theme",n.id);const i=document.querySelector('meta[name="theme-color"]');if(i&&i.setAttribute("content",n.vars["--surface"]),t)try{localStorage.setItem(eh,n.id)}catch{}return n.id}const r1=e=>e%10===1&&e!==11?"st":e%10===2&&e!==12?"nd":e%10===3&&e!==13?"rd":"th";function n1(e=560){const[t,n]=c.useState(()=>window.innerWidth<=e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<=e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),t}function o1({screens:e,order:t,hidden:n,themeId:o,currency:i,monthStartDay:s,ticker:l,defaultScreen:d,onSetDefault:a,onSaveSidebar:g,onPreviewTheme:m,onCommitTheme:y,onSelectCurrency:f,onSelectMonthStartDay:E,onSaveTicker:C,onClose:w}){const[D,b]=c.useState("sidebar"),[p,h]=c.useState(()=>t.map(M=>({id:M,hidden:n.includes(M)}))),[T,v]=c.useState(o),[S,W]=c.useState(""),[F,j]=c.useState(!1),A=n1(),[ie,B]=c.useState(!!(l!=null&&l.enabled)),[I,J]=c.useState(()=>{const M=Array.isArray(l==null?void 0:l.statements)?l.statements.slice(0,5):[];return M.length?M:[""]}),[be,se]=c.useState((l==null?void 0:l.speed)??60),[ye,G]=c.useState((l==null?void 0:l.delay)??3),[Y,oe]=c.useState(!1),K=(M,z)=>J(x=>x.map((V,ge)=>ge===M?z:V)),pe=()=>J(M=>M.length<5?[...M,""]:M),O=M=>J(z=>z.length>1?z.filter((x,V)=>V!==M):z),$=()=>{const M=I.map(z=>z.trim()).filter(Boolean).slice(0,5);C({enabled:ie,statements:M,speed:Number(be),delay:Number(ye)}),oe(!0),setTimeout(()=>oe(!1),1500)};c.useEffect(()=>{_.getSetting("golden_music").then(M=>W((M==null?void 0:M.value)||"")).catch(()=>{})},[]);const P=()=>{_.setSetting("golden_music",S.trim()).then(()=>{j(!0),setTimeout(()=>j(!1),1500)}).catch(()=>{})},le=M=>{v(M),m(M)},de=p.filter(M=>!M.hidden).length,Te=(M,z)=>{const x=M+z;if(x<0||x>=p.length)return;const V=[...p];[V[M],V[x]]=[V[x],V[M]],h(V)},Q=M=>{const z=p[M];if(!z.hidden&&de<=1)return;const x=[...p];x[M]={...z,hidden:!z.hidden},h(x)},ne=()=>{g(p.map(M=>M.id),p.filter(M=>M.hidden).map(M=>M.id))},R=A?{...ze.overlay,padding:0}:ze.overlay,U=A?{...ze.modal,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"100%",borderRadius:0,border:"none"}:ze.modal;return r.jsx("div",{style:R,onClick:w,children:r.jsxs("div",{style:U,onClick:M=>M.stopPropagation(),children:[r.jsxs("div",{style:ze.head,children:[r.jsx("div",{style:ze.title,children:"Settings"}),r.jsx("button",{onClick:w,style:ze.closeBtn,children:r.jsx(Be,{size:18})})]}),r.jsxs("div",{style:ze.tabs,children:[r.jsxs("button",{onClick:()=>b("sidebar"),style:{...ze.tab,...D==="sidebar"?ze.tabOn:{}},children:[r.jsx(by,{size:15})," Configure sidebar"]}),r.jsxs("button",{onClick:()=>b("themes"),style:{...ze.tab,...D==="themes"?ze.tabOn:{}},children:[r.jsx(xy,{size:15})," Themes"]}),r.jsxs("button",{onClick:()=>b("currency"),style:{...ze.tab,...D==="currency"?ze.tabOn:{}},children:[r.jsx(ty,{size:15})," Currency"]}),r.jsxs("button",{onClick:()=>b("music"),style:{...ze.tab,...D==="music"?ze.tabOn:{}},children:[r.jsx(Ol,{size:15})," Music"]}),r.jsxs("button",{onClick:()=>b("reminders"),style:{...ze.tab,...D==="reminders"?ze.tabOn:{}},children:[r.jsx(Tm,{size:15})," Reminders"]})]}),r.jsx("div",{style:ze.body,children:D==="sidebar"?r.jsxs(r.Fragment,{children:[r.jsxs("p",{style:ze.hint,children:["Reorder with the arrows, hide ones you don't use, and tap ",r.jsx($i,{size:11,style:{verticalAlign:"-1px"}})," to set the screen that opens on launch."]}),r.jsx("div",{style:ze.list,children:p.map((M,z)=>{const x=e[M.id],V=x.icon,ge=d===M.id;return r.jsxs("div",{style:{...ze.row,opacity:M.hidden?.5:1,...ge?{borderColor:"var(--accent)"}:{}},children:[r.jsx("span",{style:ze.rowNum,children:z+1}),r.jsx(V,{size:16}),r.jsxs("span",{style:ze.rowLabel,children:[x.label,ge&&r.jsx("span",{style:ze.defaultTag,children:"default"})]}),r.jsx("button",{onClick:()=>a(M.id),title:ge?"Opens on launch":"Set as default",style:{...ze.iconBtn,...ge?{color:"var(--accent)"}:{}},children:r.jsx($i,{size:15})}),r.jsx("button",{onClick:()=>Q(z),title:M.hidden?"Show":"Hide",style:{...ze.iconBtn,...M.hidden?{}:{color:"var(--accent)"}},children:M.hidden?r.jsx(Td,{size:15}):r.jsx(hl,{size:15})}),r.jsx("button",{onClick:()=>Te(z,-1),disabled:z===0,style:{...ze.iconBtn,opacity:z===0?.3:1},children:r.jsx(Sm,{size:15})}),r.jsx("button",{onClick:()=>Te(z,1),disabled:z===p.length-1,style:{...ze.iconBtn,opacity:z===p.length-1?.3:1},children:r.jsx(Yi,{size:15})})]},M.id)})}),r.jsxs("button",{onClick:ne,style:ze.saveBtn,children:[r.jsx(Ne,{size:15})," Save sidebar"]})]}):D==="currency"?r.jsxs(r.Fragment,{children:[r.jsx("p",{style:ze.hint,children:"Choose the currency used across Wallet and Worth. Applies instantly."}),r.jsx("div",{style:ze.list,children:Fd.map(M=>{const z=M.code===i;return r.jsxs("button",{onClick:()=>f(M.code),style:{...ze.row,cursor:"pointer",textAlign:"left",width:"100%",...z?{borderColor:"var(--accent)"}:{}},children:[r.jsx("span",{style:ze.curSymbol,children:M.symbol}),r.jsxs("span",{style:ze.rowLabel,children:[M.label," ",r.jsx("span",{style:ze.curCode,children:M.code})]}),z&&r.jsx("span",{style:ze.themeCheck,children:r.jsx(Ne,{size:13})})]},M.code)})}),r.jsx("div",{style:ze.subDivider}),r.jsx("div",{style:ze.fieldLbl,children:"Month starts on"}),r.jsx("p",{style:ze.hint,children:'If your salary lands on the 25th, set this to 25 — Wallet and Expenses will treat each "month" as running 25th to 24th instead of calendar month.'}),r.jsx("select",{value:s,onChange:M=>E(Number(M.target.value)),style:ze.musicInput,children:Array.from({length:28},(M,z)=>z+1).map(M=>r.jsx("option",{value:M,children:M===1?"1st (calendar month)":`${M}${r1(M)}`},M))})]}):D==="music"?r.jsxs(r.Fragment,{children:[r.jsxs("p",{style:ze.hint,children:["Paste a YouTube link to play softly while you write in the ",r.jsx("b",{children:"Golden Book"}),". It plays only on that screen (audio only)."]}),r.jsx("input",{value:S,onChange:M=>W(M.target.value),placeholder:"https://youtube.com/watch?v=…",style:ze.musicInput}),r.jsxs("button",{onClick:P,style:ze.saveBtn,children:[r.jsx(Ne,{size:15})," ",F?"Saved":"Save music"]})]}):D==="reminders"?r.jsxs(r.Fragment,{children:[r.jsx("p",{style:ze.hint,children:"Up to 5 reminders scroll across the top of every screen — a gentle nudge toward your goals."}),r.jsxs("button",{onClick:()=>B(M=>!M),style:{...ze.row,cursor:"pointer",width:"100%",justifyContent:"space-between",...ie?{borderColor:"var(--accent)"}:{}},children:[r.jsx("span",{style:ze.rowLabel,children:"Show reminder banner"}),r.jsx("span",{style:{...ze.switch,...ie?ze.switchOn:{}},children:ie?"On":"Off"})]}),r.jsxs("div",{style:{marginTop:14},children:[r.jsxs("div",{style:ze.fieldLbl,children:["Reminders (",I.filter(M=>M.trim()).length,"/5)"]}),I.map((M,z)=>r.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[r.jsx("input",{value:M,onChange:x=>K(z,x.target.value),maxLength:120,placeholder:`Reminder ${z+1}`,style:{...ze.musicInput,marginBottom:0}}),r.jsx("button",{onClick:()=>O(z),style:ze.iconBtn,title:"Remove",children:r.jsx(Be,{size:15})})]},z)),I.length<5&&r.jsxs("button",{onClick:pe,style:ze.addRowBtn,children:[r.jsx(Ze,{size:14})," Add reminder"]})]}),r.jsxs("div",{style:{marginTop:16},children:[r.jsxs("div",{style:ze.sliderHead,children:[r.jsx("span",{style:ze.fieldLbl,children:"Scroll speed"}),r.jsxs("span",{style:ze.sliderVal,children:[be," px/s"]})]}),r.jsx("input",{type:"range",min:20,max:200,step:5,value:be,onChange:M=>se(M.target.value),style:ze.range})]}),r.jsxs("div",{style:{marginTop:12},children:[r.jsxs("div",{style:ze.sliderHead,children:[r.jsx("span",{style:ze.fieldLbl,children:"Delay between reminders"}),r.jsxs("span",{style:ze.sliderVal,children:[ye,"s"]})]}),r.jsx("input",{type:"range",min:0,max:15,step:1,value:ye,onChange:M=>G(M.target.value),style:ze.range})]}),r.jsxs("button",{onClick:$,style:{...ze.saveBtn,marginTop:16},children:[r.jsx(Ne,{size:15})," ",Y?"Saved":"Save reminders"]})]}):r.jsxs(r.Fragment,{children:[r.jsxs("p",{style:ze.hint,children:["Tap a theme to preview it live, then hit ",r.jsx("b",{children:"Apply theme"})," to keep it."]}),r.jsx("div",{style:ze.themeGrid,children:Gd.map(M=>{const z=M.id===T;return r.jsxs("button",{onClick:()=>le(M.id),style:{...ze.themeCard,...z?ze.themeCardOn:{}},children:[r.jsxs("div",{style:ze.swatchRow,children:[M.swatch.map((x,V)=>r.jsx("span",{style:{...ze.swatch,background:x}},V)),z&&r.jsx("span",{style:ze.themeCheck,children:r.jsx(Ne,{size:13})})]}),r.jsxs("div",{style:ze.themeName,children:[M.name,M.dark?r.jsx("span",{style:ze.darkTag,children:"Dark"}):null]}),r.jsx("div",{style:ze.themeDesc,children:M.description})]},M.id)})}),r.jsxs("button",{onClick:()=>y(T),disabled:T===o,style:{...ze.saveBtn,...T===o?ze.saveBtnDisabled:{}},children:[r.jsx(Ne,{size:15})," ",T===o?"Theme applied":"Apply theme"]})]})})]})})}const ze={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,width:460,maxWidth:"100%",maxHeight:"88vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",overflow:"hidden"},head:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 18px",borderBottom:"1px solid var(--border)",flexShrink:0},title:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},tabs:{display:"flex",flexWrap:"wrap",gap:6,padding:"12px 18px 0",flexShrink:0},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"transparent"},body:{padding:"16px 18px 20px",overflowY:"auto",overflowX:"hidden",flex:1,minHeight:0},hint:{fontSize:12.5,color:"var(--text-3)",lineHeight:1.5,margin:"0 0 14px"},list:{display:"flex",flexDirection:"column",gap:6},row:{display:"flex",alignItems:"center",gap:10,padding:"9px 11px",background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:9},rowNum:{fontSize:11,fontWeight:700,color:"var(--text-3)",width:16,textAlign:"center"},rowLabel:{flex:1,fontSize:13.5,fontWeight:500,display:"flex",alignItems:"center",gap:7},defaultTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"1px 6px",borderRadius:6},curSymbol:{width:22,textAlign:"center",fontSize:15,fontWeight:700,color:"var(--text)"},curCode:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginLeft:4},iconBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},saveBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",marginTop:16,border:"none",background:"var(--accent)",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer"},saveBtnDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"default"},musicInput:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:12},switch:{fontSize:12,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:20,padding:"3px 12px",minWidth:44,textAlign:"center"},switchOn:{background:"var(--accent)",color:"#fff"},fieldLbl:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},subDivider:{height:1,background:"var(--border)",margin:"18px 0 14px"},addRowBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},sliderHead:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},sliderVal:{fontSize:12,fontWeight:700,color:"var(--accent)"},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},themeGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},themeCard:{textAlign:"left",border:"2px solid var(--border)",background:"var(--surface-2)",borderRadius:12,padding:12,cursor:"pointer",display:"flex",flexDirection:"column",gap:6,outline:"none",WebkitTapHighlightColor:"transparent",transition:"border-color .15s ease, box-shadow .15s ease"},themeCardOn:{borderColor:"var(--accent)",boxShadow:"0 0 0 3px color-mix(in srgb, var(--accent) 25%, transparent)"},swatchRow:{display:"flex",alignItems:"center",gap:5,position:"relative"},swatch:{width:22,height:22,borderRadius:"50%",border:"1px solid rgba(0,0,0,0.08)"},themeCheck:{marginLeft:"auto",width:20,height:20,borderRadius:"50%",background:"var(--accent)",color:"#fff",display:"grid",placeItems:"center"},themeName:{fontSize:14,fontWeight:700,display:"flex",alignItems:"center",gap:6},darkTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",background:"var(--hover)",color:"var(--text-2)",padding:"1px 6px",borderRadius:6},themeDesc:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4}},i1=`
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
`;function s1({statements:e,speed:t=60,delay:n=3}){const o=c.useMemo(()=>(e||[]).map(a=>(a||"").trim()).filter(Boolean).slice(0,5),[e]),[i,s]=c.useState(0),l=c.useRef(null),d=c.useRef(null);return c.useEffect(()=>{s(0)},[o]),c.useEffect(()=>{if(!o.length)return;const a=l.current,g=d.current;if(!a||!g)return;const m=a.offsetWidth,y=g.offsetWidth,f=Math.max(10,Number(t)||60),E=Math.max(2500,(m+y)/f*1e3),C=g.animate([{transform:`translateX(${m}px)`},{transform:`translateX(${-y}px)`}],{duration:E,easing:"linear",fill:"both"});let w;const D=()=>{w=setTimeout(()=>s(b=>(b+1)%o.length),Math.max(0,Number(n)||0)*1e3)};return C.addEventListener("finish",D),()=>{C.cancel(),C.removeEventListener("finish",D),clearTimeout(w)}},[i,o,t,n]),o.length?r.jsxs("div",{style:lo.bar,"aria-label":"Reminders",children:[r.jsx("style",{children:i1}),r.jsx("div",{className:"anvil-tick-glow",style:lo.icon,children:r.jsx("span",{className:"anvil-tick-pulse",style:{display:"grid",placeItems:"center"},children:r.jsx(Tm,{size:15})})}),r.jsxs("div",{ref:l,style:lo.viewport,children:[r.jsx("span",{className:"anvil-tick-shimmer",style:lo.shimmer}),r.jsx("div",{className:"anvil-tick-float",style:lo.floatWrap,children:r.jsx("div",{ref:d,style:lo.text,children:o[i%o.length]},i)})]})]}):null}const lo={bar:{display:"flex",alignItems:"center",height:36,flexShrink:0,overflow:"hidden",borderBottom:"1px solid var(--border)",background:"color-mix(in srgb, var(--accent) 12%, var(--surface))"},icon:{display:"grid",placeItems:"center",width:42,height:"100%",flexShrink:0,color:"#fff",background:"var(--accent)",zIndex:2},viewport:{position:"relative",flex:1,height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},shimmer:{position:"absolute",top:0,bottom:0,left:0,width:"22%",background:"linear-gradient(100deg, transparent, color-mix(in srgb, var(--accent) 22%, transparent), transparent)",pointerEvents:"none",zIndex:1},floatWrap:{display:"inline-flex",alignItems:"center",willChange:"transform"},text:{whiteSpace:"nowrap",fontSize:13.5,fontWeight:700,color:"var(--text)",letterSpacing:"0.01em",willChange:"transform",paddingLeft:4}};di(th(),!1);const Ud="anvil_default_screen",lp=()=>{try{return localStorage.getItem(Ud)}catch{return null}},$n={dashboard:{label:"Dashboard",icon:py,component:Vy},kickstart:{label:"Kickstart",icon:Am,component:Iv},golden:{label:"Golden Book",icon:ny,component:Bv},habits:{label:"Habits",icon:Bd,component:g0},quadrant:{label:"Quadrant",icon:Hc,component:qy},goals:{label:"Goals",icon:Yc,component:i0},grove:{label:"Grove",icon:Ad,component:J0},worth:{label:"Rewards",icon:gy,component:lv},vault:{label:"Wallet",icon:qc,component:hv},expenses:{label:"Expenses",icon:vl,component:Jv},journal:{label:"Journal",icon:Nc,component:w0},revision:{label:"Revision",icon:Rm,component:W0},affirmations:{label:"Affirmations",icon:Jn,component:$0},skills:{label:"Skills",icon:Cm,component:C0},spiritual:{label:"Spiritual",icon:yi,component:T0},mindscape:{label:"Mindscape",icon:zm,component:$v},achievements:{label:"Achievements",icon:Lr,component:Yv},delight:{label:"Delights",icon:Bm,component:qv}},rh=["dashboard","kickstart","golden","habits","quadrant","goals","grove","journal","revision","affirmations","skills","spiritual","mindscape","achievements","delight","worth","vault","expenses"];function Ds(e){const t=rh.filter(i=>$n[i]),o=[...(Array.isArray(e)?e:[]).filter(i=>$n[i])];return t.forEach(i=>{o.includes(i)||o.push(i)}),o}function l1(){const[e,t]=c.useState(()=>window.innerWidth<720);return c.useEffect(()=>{const n=()=>t(window.innerWidth<720);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}function a1(){const[e,t]=c.useState(()=>{const P=lp();return P&&$n[P]?P:"habits"}),[n,o]=c.useState(()=>lp()||"habits"),[i,s]=c.useState(!1),[l,d]=c.useState(null),[a,g]=c.useState(!1),[m,y]=c.useState(!1),[f,E]=c.useState(th()),[C,w]=c.useState(Wo()),[D,b]=c.useState(Pd()),[p,h]=c.useState({enabled:!1,statements:[],speed:60,delay:3}),[T,v]=c.useState(()=>Ds(rh)),[S,W]=c.useState([]),F=l1(),j=c.useRef(e);c.useEffect(()=>{j.current=e},[e]),c.useEffect(()=>{if(!l)return;const P=10,le=new Set(["kickstart","mindscape"]),de=setInterval(()=>{const Te=j.current;!document.hidden&&Te&&!le.has(Te)&&_.addScreenTime(Te,P).catch(()=>{})},P*1e3);return()=>clearInterval(de)},[l]),c.useEffect(()=>{let P=!1;const le=()=>{Rd(),d(null)};window.addEventListener("anvil-unauthorized",le);const de=new URLSearchParams(window.location.search).get("login");return de&&(Ny(de),window.history.replaceState({},"",window.location.pathname)),_m()?_.me().then(Te=>{P||d(Te)}).catch(()=>{}).finally(()=>{P||g(!0)}):g(!0),()=>{P=!0,window.removeEventListener("anvil-unauthorized",le)}},[]),c.useEffect(()=>{l&&(_.getSetting("theme").then(P=>{P!=null&&P.value&&E(di(P.value))}).catch(()=>{}),_.getSetting("currency").then(P=>{P!=null&&P.value&&w(mu(P.value))}).catch(()=>{}),_.getSetting("month_start_day").then(P=>{P!=null&&P.value&&b(Nu(P.value))}).catch(()=>{}),_.getSetting("ticker").then(P=>{P!=null&&P.value&&h(le=>({...le,...P.value}))}).catch(()=>{}),_.getSetting("default_screen").then(P=>{if(P!=null&&P.value&&$n[P.value]){o(P.value);try{localStorage.setItem(Ud,P.value)}catch{}}}).catch(()=>{}),_.getSetting("sidebar_order").then(P=>{Array.isArray(P==null?void 0:P.value)&&v(Ds(P.value))}).catch(()=>{}),_.getSetting("sidebar_hidden").then(P=>{Array.isArray(P==null?void 0:P.value)&&W(P.value)}).catch(()=>{}))},[l]);function A(P){t(P),s(!1)}const ie=()=>{Rd(),d(null)},B=P=>{di(P,!1)},I=P=>{E(di(P)),_.setSetting("theme",P).catch(()=>{}),y(!1)},J=()=>{di(f,!1),y(!1)},be=P=>{w(mu(P)),_.setSetting("currency",P).catch(()=>{})},se=P=>{b(Nu(P)),_.setSetting("month_start_day",Number(P)).catch(()=>{})},ye=P=>{h(P),_.setSetting("ticker",P).catch(()=>{})},G=P=>{o(P);try{localStorage.setItem(Ud,P)}catch{}_.setSetting("default_screen",P).catch(()=>{})},Y=(P,le)=>{if(v(Ds(P)),W(le),y(!1),_.setSetting("sidebar_order",P).catch(()=>{}),_.setSetting("sidebar_hidden",le).catch(()=>{}),le.includes(e)){const de=Ds(P).find(Te=>!le.includes(Te));de&&t(de)}},oe=T.filter(P=>!S.includes(P));if(!a)return r.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:"'Inter',system-ui,sans-serif",color:"var(--text-3)"},children:"Loading…"});if(!l)return r.jsx(av,{});const K=$n[e],pe=K.component,O=()=>r.jsx("div",{style:tt.navItems,children:oe.map(P=>{const le=$n[P];if(!le)return null;const de=le.icon,Te=e===P;return r.jsxs("button",{onClick:()=>A(P),title:le.label,style:{...tt.navItem,...Te?tt.navItemOn:{}},children:[r.jsx(de,{size:18}),r.jsx("span",{style:tt.navLabel,children:le.label})]},P)})}),$=()=>r.jsxs("div",{style:tt.footerWrap,children:[r.jsxs("button",{onClick:()=>y(!0),style:tt.settingsBtn,title:"Settings",children:[r.jsx(Mm,{size:17}),r.jsx("span",{children:"Settings"})]}),r.jsxs("div",{style:tt.userFooter,children:[r.jsxs("div",{style:tt.userInfo,children:[r.jsx("div",{style:tt.userAvatar,children:(l.name||l.email||"?").charAt(0).toUpperCase()}),r.jsxs("div",{style:{minWidth:0},children:[r.jsx("div",{style:tt.userName,children:l.name||"You"}),r.jsx("div",{style:tt.userEmail,children:l.email})]})]}),r.jsx("button",{onClick:ie,style:tt.logoutBtn,title:"Sign out",children:r.jsx(hy,{size:16})})]})]});return r.jsxs("div",{style:tt.shell,children:[!F&&r.jsxs("nav",{style:tt.nav,children:[r.jsxs("div",{style:tt.brand,children:[r.jsx("div",{style:tt.brandLogo,children:"B"}),r.jsx("span",{style:tt.brandName,children:"Anvil"})]}),r.jsx(O,{}),r.jsx($,{})]}),F&&i&&r.jsx("div",{style:tt.overlay,onClick:()=>s(!1),children:r.jsxs("nav",{style:tt.drawer,onClick:P=>P.stopPropagation(),children:[r.jsxs("div",{style:tt.drawerHeader,children:[r.jsxs("div",{style:tt.brand,children:[r.jsx("div",{style:tt.brandLogo,children:"B"}),r.jsx("span",{style:tt.brandName,children:"Anvil"})]}),r.jsx("button",{style:tt.closeBtn,onClick:()=>s(!1),children:r.jsx(Be,{size:20})})]}),r.jsx("div",{style:tt.drawerNav,children:r.jsx(O,{})}),r.jsx($,{})]})}),r.jsxs("div",{style:tt.content,children:[F&&r.jsxs("div",{style:tt.topBar,children:[r.jsx("button",{style:tt.menuBtn,onClick:()=>s(!0),children:r.jsx(Gc,{size:22})}),r.jsx("span",{style:tt.topBarTitle,children:K.label}),r.jsx("div",{style:{width:38}})]}),p.enabled&&r.jsx(s1,{statements:p.statements,speed:p.speed,delay:p.delay}),r.jsx("main",{style:tt.main,children:r.jsx(pe,{onNavigate:A})})]}),m&&r.jsx(o1,{screens:$n,order:T,hidden:S,themeId:f,currency:C,monthStartDay:D,ticker:p,defaultScreen:n,onSetDefault:G,onSaveSidebar:Y,onPreviewTheme:B,onCommitTheme:I,onSelectCurrency:be,onSelectMonthStartDay:se,onSaveTicker:ye,onClose:J})]})}const tt={shell:{display:"flex",height:"100vh",overflow:"hidden",fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)"},nav:{width:200,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column",padding:"20px 10px",gap:2,overflowY:"auto",overflowX:"hidden"},brand:{display:"flex",alignItems:"center",gap:9,padding:"6px 10px 20px",borderBottom:"1px solid var(--border)",marginBottom:8},brandLogo:{width:30,height:30,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:14,fontWeight:800,fontFamily:"'Fraunces', Georgia, serif",flexShrink:0},brandName:{fontSize:16,fontWeight:700,letterSpacing:"-0.01em",color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},navItems:{display:"flex",flexDirection:"column",gap:2},navItem:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},navItemOn:{background:"var(--hover)",color:"var(--text)",fontWeight:700},footerWrap:{marginTop:"auto",paddingTop:8,flexShrink:0},settingsBtn:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},userFooter:{marginTop:4,paddingTop:12,borderTop:"1px solid var(--border)",display:"flex",alignItems:"center",gap:8},userInfo:{display:"flex",alignItems:"center",gap:8,flex:1,minWidth:0},userAvatar:{width:30,height:30,borderRadius:"50%",background:"#8268B0",color:"#fff",display:"grid",placeItems:"center",fontSize:13,fontWeight:700,flexShrink:0},userName:{fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},userEmail:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logoutBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",padding:7,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},navLabel:{flex:1},content:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},main:{flex:1,overflowY:"auto",overflowX:"hidden"},topBar:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"var(--surface)",borderBottom:"1px solid var(--border)",flexShrink:0},topBarTitle:{fontSize:16,fontWeight:700,color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},menuBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text)",padding:8,borderRadius:8,display:"grid",placeItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:100,display:"flex"},drawer:{width:220,background:"var(--surface)",height:"100%",display:"flex",flexDirection:"column",padding:"16px 10px",gap:2,boxShadow:"4px 0 24px rgba(0,0,0,0.12)",overflow:"hidden"},drawerNav:{flex:1,minHeight:0,overflowY:"auto",overflowX:"hidden"},drawerHeader:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:4,flexShrink:0},closeBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",padding:6,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0}};vm(document.getElementById("root")).render(r.jsx(c.StrictMode,{children:r.jsx(a1,{})}));
