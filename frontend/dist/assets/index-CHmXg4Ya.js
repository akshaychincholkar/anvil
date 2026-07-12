(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Qp={exports:{}},sl={},qp={exports:{}},lt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cs=Symbol.for("react.element"),Zh=Symbol.for("react.portal"),Jh=Symbol.for("react.fragment"),ef=Symbol.for("react.strict_mode"),tf=Symbol.for("react.profiler"),rf=Symbol.for("react.provider"),nf=Symbol.for("react.context"),of=Symbol.for("react.forward_ref"),sf=Symbol.for("react.suspense"),af=Symbol.for("react.memo"),lf=Symbol.for("react.lazy"),Lg=Symbol.iterator;function df(e){return e===null||typeof e!="object"?null:(e=Lg&&e[Lg]||e["@@iterator"],typeof e=="function"?e:null)}var Xp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zp=Object.assign,Jp={};function pi(e,r,n){this.props=e,this.context=r,this.refs=Jp,this.updater=n||Xp}pi.prototype.isReactComponent={};pi.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")};pi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function eb(){}eb.prototype=pi.prototype;function Ec(e,r,n){this.props=e,this.context=r,this.refs=Jp,this.updater=n||Xp}var Ac=Ec.prototype=new eb;Ac.constructor=Ec;Zp(Ac,pi.prototype);Ac.isPureReactComponent=!0;var _g=Array.isArray,tb=Object.prototype.hasOwnProperty,Fc={current:null},rb={key:!0,ref:!0,__self:!0,__source:!0};function nb(e,r,n){var o,i={},s=null,a=null;if(r!=null)for(o in r.ref!==void 0&&(a=r.ref),r.key!==void 0&&(s=""+r.key),r)tb.call(r,o)&&!rb.hasOwnProperty(o)&&(i[o]=r[o]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var d=Array(l),g=0;g<l;g++)d[g]=arguments[g+2];i.children=d}if(e&&e.defaultProps)for(o in l=e.defaultProps,l)i[o]===void 0&&(i[o]=l[o]);return{$$typeof:Cs,type:e,key:s,ref:a,props:i,_owner:Fc.current}}function cf(e,r){return{$$typeof:Cs,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function Dc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Cs}function gf(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return r[n]})}var $g=/\/+/g;function Il(e,r){return typeof e=="object"&&e!==null&&e.key!=null?gf(""+e.key):r.toString(36)}function ba(e,r,n,o,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Cs:case Zh:a=!0}}if(a)return a=e,i=i(a),e=o===""?"."+Il(a,0):o,_g(i)?(n="",e!=null&&(n=e.replace($g,"$&/")+"/"),ba(i,r,n,"",function(g){return g})):i!=null&&(Dc(i)&&(i=cf(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace($g,"$&/")+"/")+e)),r.push(i)),1;if(a=0,o=o===""?".":o+":",_g(e))for(var l=0;l<e.length;l++){s=e[l];var d=o+Il(s,l);a+=ba(s,r,n,d,i)}else if(d=df(e),typeof d=="function")for(e=d.call(e),l=0;!(s=e.next()).done;)s=s.value,d=o+Il(s,l++),a+=ba(s,r,n,d,i);else if(s==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return a}function Rs(e,r,n){if(e==null)return e;var o=[],i=0;return ba(e,o,"","",function(s){return r.call(n,s,i++)}),o}function uf(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var cr={current:null},ma={transition:null},pf={ReactCurrentDispatcher:cr,ReactCurrentBatchConfig:ma,ReactCurrentOwner:Fc};function ob(){throw Error("act(...) is not supported in production builds of React.")}lt.Children={map:Rs,forEach:function(e,r,n){Rs(e,function(){r.apply(this,arguments)},n)},count:function(e){var r=0;return Rs(e,function(){r++}),r},toArray:function(e){return Rs(e,function(r){return r})||[]},only:function(e){if(!Dc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};lt.Component=pi;lt.Fragment=Jh;lt.Profiler=tf;lt.PureComponent=Ec;lt.StrictMode=ef;lt.Suspense=sf;lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pf;lt.act=ob;lt.cloneElement=function(e,r,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=Zp({},e.props),i=e.key,s=e.ref,a=e._owner;if(r!=null){if(r.ref!==void 0&&(s=r.ref,a=Fc.current),r.key!==void 0&&(i=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in r)tb.call(r,d)&&!rb.hasOwnProperty(d)&&(o[d]=r[d]===void 0&&l!==void 0?l[d]:r[d])}var d=arguments.length-2;if(d===1)o.children=n;else if(1<d){l=Array(d);for(var g=0;g<d;g++)l[g]=arguments[g+2];o.children=l}return{$$typeof:Cs,type:e.type,key:i,ref:s,props:o,_owner:a}};lt.createContext=function(e){return e={$$typeof:nf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:rf,_context:e},e.Consumer=e};lt.createElement=nb;lt.createFactory=function(e){var r=nb.bind(null,e);return r.type=e,r};lt.createRef=function(){return{current:null}};lt.forwardRef=function(e){return{$$typeof:of,render:e}};lt.isValidElement=Dc;lt.lazy=function(e){return{$$typeof:lf,_payload:{_status:-1,_result:e},_init:uf}};lt.memo=function(e,r){return{$$typeof:af,type:e,compare:r===void 0?null:r}};lt.startTransition=function(e){var r=ma.transition;ma.transition={};try{e()}finally{ma.transition=r}};lt.unstable_act=ob;lt.useCallback=function(e,r){return cr.current.useCallback(e,r)};lt.useContext=function(e){return cr.current.useContext(e)};lt.useDebugValue=function(){};lt.useDeferredValue=function(e){return cr.current.useDeferredValue(e)};lt.useEffect=function(e,r){return cr.current.useEffect(e,r)};lt.useId=function(){return cr.current.useId()};lt.useImperativeHandle=function(e,r,n){return cr.current.useImperativeHandle(e,r,n)};lt.useInsertionEffect=function(e,r){return cr.current.useInsertionEffect(e,r)};lt.useLayoutEffect=function(e,r){return cr.current.useLayoutEffect(e,r)};lt.useMemo=function(e,r){return cr.current.useMemo(e,r)};lt.useReducer=function(e,r,n){return cr.current.useReducer(e,r,n)};lt.useRef=function(e){return cr.current.useRef(e)};lt.useState=function(e){return cr.current.useState(e)};lt.useSyncExternalStore=function(e,r,n){return cr.current.useSyncExternalStore(e,r,n)};lt.useTransition=function(){return cr.current.useTransition()};lt.version="18.3.1";qp.exports=lt;var c=qp.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bf=c,mf=Symbol.for("react.element"),hf=Symbol.for("react.fragment"),ff=Object.prototype.hasOwnProperty,xf=bf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yf={key:!0,ref:!0,__self:!0,__source:!0};function ib(e,r,n){var o,i={},s=null,a=null;n!==void 0&&(s=""+n),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(a=r.ref);for(o in r)ff.call(r,o)&&!yf.hasOwnProperty(o)&&(i[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps,r)i[o]===void 0&&(i[o]=r[o]);return{$$typeof:mf,type:e,key:s,ref:a,props:i,_owner:xf.current}}sl.Fragment=hf;sl.jsx=ib;sl.jsxs=ib;Qp.exports=sl;var t=Qp.exports,sb={exports:{}},Br={},ab={exports:{}},lb={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function r(Z,Y){var ce=Z.length;Z.push(Y);e:for(;0<ce;){var J=ce-1>>>1,I=Z[J];if(0<i(I,Y))Z[J]=Y,Z[ce]=I,ce=J;else break e}}function n(Z){return Z.length===0?null:Z[0]}function o(Z){if(Z.length===0)return null;var Y=Z[0],ce=Z.pop();if(ce!==Y){Z[0]=ce;e:for(var J=0,I=Z.length,W=I>>>1;J<W;){var _=2*(J+1)-1,P=Z[_],de=_+1,ge=Z[de];if(0>i(P,ce))de<I&&0>i(ge,P)?(Z[J]=ge,Z[de]=ce,J=de):(Z[J]=P,Z[_]=ce,J=_);else if(de<I&&0>i(ge,ce))Z[J]=ge,Z[de]=ce,J=de;else break e}}return Y}function i(Z,Y){var ce=Z.sortIndex-Y.sortIndex;return ce!==0?ce:Z.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var d=[],g=[],h=1,y=null,f=3,E=!1,R=!1,T=!1,z=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function u(Z){for(var Y=n(g);Y!==null;){if(Y.callback===null)o(g);else if(Y.startTime<=Z)o(g),Y.sortIndex=Y.expirationTime,r(d,Y);else break;Y=n(g)}}function k(Z){if(T=!1,u(Z),!R)if(n(d)!==null)R=!0,re(j);else{var Y=n(g);Y!==null&&ve(k,Y.startTime-Z)}}function j(Z,Y){R=!1,T&&(T=!1,m(x),x=-1),E=!0;var ce=f;try{for(u(Y),y=n(d);y!==null&&(!(y.expirationTime>Y)||Z&&!Q());){var J=y.callback;if(typeof J=="function"){y.callback=null,f=y.priorityLevel;var I=J(y.expirationTime<=Y);Y=e.unstable_now(),typeof I=="function"?y.callback=I:y===n(d)&&o(d),u(Y)}else o(d);y=n(d)}if(y!==null)var W=!0;else{var _=n(g);_!==null&&ve(k,_.startTime-Y),W=!1}return W}finally{y=null,f=ce,E=!1}}var C=!1,B=null,x=-1,v=5,$=-1;function Q(){return!(e.unstable_now()-$<v)}function ne(){if(B!==null){var Z=e.unstable_now();$=Z;var Y=!0;try{Y=B(!0,Z)}finally{Y?be():(C=!1,B=null)}}else C=!1}var be;if(typeof b=="function")be=function(){b(ne)};else if(typeof MessageChannel<"u"){var A=new MessageChannel,K=A.port2;A.port1.onmessage=ne,be=function(){K.postMessage(null)}}else be=function(){z(ne,0)};function re(Z){B=Z,C||(C=!0,be())}function ve(Z,Y){x=z(function(){Z(e.unstable_now())},Y)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(Z){Z.callback=null},e.unstable_continueExecution=function(){R||E||(R=!0,re(j))},e.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<Z?Math.floor(1e3/Z):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(Z){switch(f){case 1:case 2:case 3:var Y=3;break;default:Y=f}var ce=f;f=Y;try{return Z()}finally{f=ce}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(Z,Y){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var ce=f;f=Z;try{return Y()}finally{f=ce}},e.unstable_scheduleCallback=function(Z,Y,ce){var J=e.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?J+ce:J):ce=J,Z){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=ce+I,Z={id:h++,callback:Y,priorityLevel:Z,startTime:ce,expirationTime:I,sortIndex:-1},ce>J?(Z.sortIndex=ce,r(g,Z),n(d)===null&&Z===n(g)&&(T?(m(x),x=-1):T=!0,ve(k,ce-J))):(Z.sortIndex=I,r(d,Z),R||E||(R=!0,re(j))),Z},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(Z){var Y=f;return function(){var ce=f;f=Y;try{return Z.apply(this,arguments)}finally{f=ce}}}})(lb);ab.exports=lb;var vf=ab.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jf=c,Ir=vf;function Se(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var db=new Set,ns={};function Co(e,r){ni(e,r),ni(e+"Capture",r)}function ni(e,r){for(ns[e]=r,e=0;e<r.length;e++)db.add(r[e])}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jd=Object.prototype.hasOwnProperty,kf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pg={},Ng={};function wf(e){return jd.call(Ng,e)?!0:jd.call(Pg,e)?!1:kf.test(e)?Ng[e]=!0:(Pg[e]=!0,!1)}function Sf(e,r,n,o){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Cf(e,r,n,o){if(r===null||typeof r>"u"||Sf(e,r,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function gr(e,r,n,o,i,s,a){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=s,this.removeEmptyString=a}var Zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Zt[e]=new gr(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];Zt[r]=new gr(r,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Zt[e]=new gr(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Zt[e]=new gr(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Zt[e]=new gr(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Zt[e]=new gr(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Zt[e]=new gr(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Zt[e]=new gr(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Zt[e]=new gr(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wc=/[\-:]([a-z])/g;function Mc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(Wc,Mc);Zt[r]=new gr(r,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(Wc,Mc);Zt[r]=new gr(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(Wc,Mc);Zt[r]=new gr(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Zt[e]=new gr(e,1,!1,e.toLowerCase(),null,!1,!1)});Zt.xlinkHref=new gr("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Zt[e]=new gr(e,1,!1,e.toLowerCase(),null,!0,!0)});function Lc(e,r,n,o){var i=Zt.hasOwnProperty(r)?Zt[r]:null;(i!==null?i.type!==0:o||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Cf(r,n,i,o)&&(n=null),o||i===null?wf(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(r=i.attributeName,o=i.attributeNamespace,n===null?e.removeAttribute(r):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,o?e.setAttributeNS(o,r,n):e.setAttribute(r,n))))}var Tn=jf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Es=Symbol.for("react.element"),Lo=Symbol.for("react.portal"),_o=Symbol.for("react.fragment"),_c=Symbol.for("react.strict_mode"),kd=Symbol.for("react.profiler"),cb=Symbol.for("react.provider"),gb=Symbol.for("react.context"),$c=Symbol.for("react.forward_ref"),wd=Symbol.for("react.suspense"),Sd=Symbol.for("react.suspense_list"),Pc=Symbol.for("react.memo"),Dn=Symbol.for("react.lazy"),ub=Symbol.for("react.offscreen"),Og=Symbol.iterator;function vi(e){return e===null||typeof e!="object"?null:(e=Og&&e[Og]||e["@@iterator"],typeof e=="function"?e:null)}var Lt=Object.assign,Bl;function Ei(e){if(Bl===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);Bl=r&&r[1]||""}return`
`+Bl+e}var Rl=!1;function El(e,r){if(!e||Rl)return"";Rl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(g){var o=g}Reflect.construct(e,[],r)}else{try{r.call()}catch(g){o=g}e.call(r.prototype)}else{try{throw Error()}catch(g){o=g}e()}}catch(g){if(g&&o&&typeof g.stack=="string"){for(var i=g.stack.split(`
`),s=o.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var d=`
`+i[a].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=a&&0<=l);break}}}finally{Rl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ei(e):""}function zf(e){switch(e.tag){case 5:return Ei(e.type);case 16:return Ei("Lazy");case 13:return Ei("Suspense");case 19:return Ei("SuspenseList");case 0:case 2:case 15:return e=El(e.type,!1),e;case 11:return e=El(e.type.render,!1),e;case 1:return e=El(e.type,!0),e;default:return""}}function Cd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _o:return"Fragment";case Lo:return"Portal";case kd:return"Profiler";case _c:return"StrictMode";case wd:return"Suspense";case Sd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case gb:return(e.displayName||"Context")+".Consumer";case cb:return(e._context.displayName||"Context")+".Provider";case $c:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Pc:return r=e.displayName||null,r!==null?r:Cd(e.type)||"Memo";case Dn:r=e._payload,e=e._init;try{return Cd(e(r))}catch{}}return null}function Tf(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cd(r);case 8:return r===_c?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Xn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pb(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function If(e){var r=pb(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),o=""+e[r];if(!e.hasOwnProperty(r)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return i.call(this)},set:function(a){o=""+a,s.call(this,a)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(a){o=""+a},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function As(e){e._valueTracker||(e._valueTracker=If(e))}function bb(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),o="";return e&&(o=pb(e)?e.checked?"true":"false":e.value),e=o,e!==n?(r.setValue(e),!0):!1}function Ia(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zd(e,r){var n=r.checked;return Lt({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Hg(e,r){var n=r.defaultValue==null?"":r.defaultValue,o=r.checked!=null?r.checked:r.defaultChecked;n=Xn(r.value!=null?r.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function mb(e,r){r=r.checked,r!=null&&Lc(e,"checked",r,!1)}function Td(e,r){mb(e,r);var n=Xn(r.value),o=r.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Id(e,r.type,n):r.hasOwnProperty("defaultValue")&&Id(e,r.type,Xn(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function Gg(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var o=r.type;if(!(o!=="submit"&&o!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Id(e,r,n){(r!=="number"||Ia(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ai=Array.isArray;function Qo(e,r,n,o){if(e=e.options,r){r={};for(var i=0;i<n.length;i++)r["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=r.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Xn(n),r=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}r!==null||e[i].disabled||(r=e[i])}r!==null&&(r.selected=!0)}}function Bd(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(Se(91));return Lt({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ug(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(Se(92));if(Ai(n)){if(1<n.length)throw Error(Se(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:Xn(n)}}function hb(e,r){var n=Xn(r.value),o=Xn(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function Vg(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function fb(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rd(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?fb(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fs,xb=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,n,o,i){MSApp.execUnsafeLocalFunction(function(){return e(r,n,o,i)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(Fs=Fs||document.createElement("div"),Fs.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Fs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function os(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var Ni={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bf=["Webkit","ms","Moz","O"];Object.keys(Ni).forEach(function(e){Bf.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),Ni[r]=Ni[e]})});function yb(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||Ni.hasOwnProperty(e)&&Ni[e]?(""+r).trim():r+"px"}function vb(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var o=n.indexOf("--")===0,i=yb(n,r[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,i):e[n]=i}}var Rf=Lt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ed(e,r){if(r){if(Rf[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(Se(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(Se(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(Se(61))}if(r.style!=null&&typeof r.style!="object")throw Error(Se(62))}}function Ad(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fd=null;function Nc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dd=null,qo=null,Xo=null;function Yg(e){if(e=Is(e)){if(typeof Dd!="function")throw Error(Se(280));var r=e.stateNode;r&&(r=gl(r),Dd(e.stateNode,e.type,r))}}function jb(e){qo?Xo?Xo.push(e):Xo=[e]:qo=e}function kb(){if(qo){var e=qo,r=Xo;if(Xo=qo=null,Yg(e),r)for(e=0;e<r.length;e++)Yg(r[e])}}function wb(e,r){return e(r)}function Sb(){}var Al=!1;function Cb(e,r,n){if(Al)return e(r,n);Al=!0;try{return wb(e,r,n)}finally{Al=!1,(qo!==null||Xo!==null)&&(Sb(),kb())}}function is(e,r){var n=e.stateNode;if(n===null)return null;var o=gl(n);if(o===null)return null;n=o[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Se(231,r,typeof n));return n}var Wd=!1;if(jn)try{var ji={};Object.defineProperty(ji,"passive",{get:function(){Wd=!0}}),window.addEventListener("test",ji,ji),window.removeEventListener("test",ji,ji)}catch{Wd=!1}function Ef(e,r,n,o,i,s,a,l,d){var g=Array.prototype.slice.call(arguments,3);try{r.apply(n,g)}catch(h){this.onError(h)}}var Oi=!1,Ba=null,Ra=!1,Md=null,Af={onError:function(e){Oi=!0,Ba=e}};function Ff(e,r,n,o,i,s,a,l,d){Oi=!1,Ba=null,Ef.apply(Af,arguments)}function Df(e,r,n,o,i,s,a,l,d){if(Ff.apply(this,arguments),Oi){if(Oi){var g=Ba;Oi=!1,Ba=null}else throw Error(Se(198));Ra||(Ra=!0,Md=g)}}function zo(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,r.flags&4098&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function zb(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function Kg(e){if(zo(e)!==e)throw Error(Se(188))}function Wf(e){var r=e.alternate;if(!r){if(r=zo(e),r===null)throw Error(Se(188));return r!==e?null:e}for(var n=e,o=r;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(o=i.return,o!==null){n=o;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Kg(i),e;if(s===o)return Kg(i),r;s=s.sibling}throw Error(Se(188))}if(n.return!==o.return)n=i,o=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,o=s;break}if(l===o){a=!0,o=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,o=i;break}if(l===o){a=!0,o=s,n=i;break}l=l.sibling}if(!a)throw Error(Se(189))}}if(n.alternate!==o)throw Error(Se(190))}if(n.tag!==3)throw Error(Se(188));return n.stateNode.current===n?e:r}function Tb(e){return e=Wf(e),e!==null?Ib(e):null}function Ib(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=Ib(e);if(r!==null)return r;e=e.sibling}return null}var Bb=Ir.unstable_scheduleCallback,Qg=Ir.unstable_cancelCallback,Mf=Ir.unstable_shouldYield,Lf=Ir.unstable_requestPaint,Pt=Ir.unstable_now,_f=Ir.unstable_getCurrentPriorityLevel,Oc=Ir.unstable_ImmediatePriority,Rb=Ir.unstable_UserBlockingPriority,Ea=Ir.unstable_NormalPriority,$f=Ir.unstable_LowPriority,Eb=Ir.unstable_IdlePriority,al=null,on=null;function Pf(e){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(al,e,void 0,(e.current.flags&128)===128)}catch{}}var Yr=Math.clz32?Math.clz32:Hf,Nf=Math.log,Of=Math.LN2;function Hf(e){return e>>>=0,e===0?32:31-(Nf(e)/Of|0)|0}var Ds=64,Ws=4194304;function Fi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Aa(e,r){var n=e.pendingLanes;if(n===0)return 0;var o=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?o=Fi(l):(s&=a,s!==0&&(o=Fi(s)))}else a=n&~i,a!==0?o=Fi(a):s!==0&&(o=Fi(s));if(o===0)return 0;if(r!==0&&r!==o&&!(r&i)&&(i=o&-o,s=r&-r,i>=s||i===16&&(s&4194240)!==0))return r;if(o&4&&(o|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=o;0<r;)n=31-Yr(r),i=1<<n,o|=e[n],r&=~i;return o}function Gf(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uf(e,r){for(var n=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-Yr(s),l=1<<a,d=i[a];d===-1?(!(l&n)||l&o)&&(i[a]=Gf(l,r)):d<=r&&(e.expiredLanes|=l),s&=~l}}function Ld(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ab(){var e=Ds;return Ds<<=1,!(Ds&4194240)&&(Ds=64),e}function Fl(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function zs(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Yr(r),e[r]=n}function Vf(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Yr(n),s=1<<i;r[i]=0,o[i]=-1,e[i]=-1,n&=~s}}function Hc(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var o=31-Yr(n),i=1<<o;i&r|e[o]&r&&(e[o]|=r),n&=~i}}var Ct=0;function Fb(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Db,Gc,Wb,Mb,Lb,_d=!1,Ms=[],On=null,Hn=null,Gn=null,ss=new Map,as=new Map,Ln=[],Yf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qg(e,r){switch(e){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":ss.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":as.delete(r.pointerId)}}function ki(e,r,n,o,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:r,domEventName:n,eventSystemFlags:o,nativeEvent:s,targetContainers:[i]},r!==null&&(r=Is(r),r!==null&&Gc(r)),e):(e.eventSystemFlags|=o,r=e.targetContainers,i!==null&&r.indexOf(i)===-1&&r.push(i),e)}function Kf(e,r,n,o,i){switch(r){case"focusin":return On=ki(On,e,r,n,o,i),!0;case"dragenter":return Hn=ki(Hn,e,r,n,o,i),!0;case"mouseover":return Gn=ki(Gn,e,r,n,o,i),!0;case"pointerover":var s=i.pointerId;return ss.set(s,ki(ss.get(s)||null,e,r,n,o,i)),!0;case"gotpointercapture":return s=i.pointerId,as.set(s,ki(as.get(s)||null,e,r,n,o,i)),!0}return!1}function _b(e){var r=bo(e.target);if(r!==null){var n=zo(r);if(n!==null){if(r=n.tag,r===13){if(r=zb(n),r!==null){e.blockedOn=r,Lb(e.priority,function(){Wb(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ha(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=$d(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Fd=o,n.target.dispatchEvent(o),Fd=null}else return r=Is(n),r!==null&&Gc(r),e.blockedOn=n,!1;r.shift()}return!0}function Xg(e,r,n){ha(e)&&n.delete(r)}function Qf(){_d=!1,On!==null&&ha(On)&&(On=null),Hn!==null&&ha(Hn)&&(Hn=null),Gn!==null&&ha(Gn)&&(Gn=null),ss.forEach(Xg),as.forEach(Xg)}function wi(e,r){e.blockedOn===r&&(e.blockedOn=null,_d||(_d=!0,Ir.unstable_scheduleCallback(Ir.unstable_NormalPriority,Qf)))}function ls(e){function r(i){return wi(i,e)}if(0<Ms.length){wi(Ms[0],e);for(var n=1;n<Ms.length;n++){var o=Ms[n];o.blockedOn===e&&(o.blockedOn=null)}}for(On!==null&&wi(On,e),Hn!==null&&wi(Hn,e),Gn!==null&&wi(Gn,e),ss.forEach(r),as.forEach(r),n=0;n<Ln.length;n++)o=Ln[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Ln.length&&(n=Ln[0],n.blockedOn===null);)_b(n),n.blockedOn===null&&Ln.shift()}var Zo=Tn.ReactCurrentBatchConfig,Fa=!0;function qf(e,r,n,o){var i=Ct,s=Zo.transition;Zo.transition=null;try{Ct=1,Uc(e,r,n,o)}finally{Ct=i,Zo.transition=s}}function Xf(e,r,n,o){var i=Ct,s=Zo.transition;Zo.transition=null;try{Ct=4,Uc(e,r,n,o)}finally{Ct=i,Zo.transition=s}}function Uc(e,r,n,o){if(Fa){var i=$d(e,r,n,o);if(i===null)Hl(e,r,o,Da,n),qg(e,o);else if(Kf(i,e,r,n,o))o.stopPropagation();else if(qg(e,o),r&4&&-1<Yf.indexOf(e)){for(;i!==null;){var s=Is(i);if(s!==null&&Db(s),s=$d(e,r,n,o),s===null&&Hl(e,r,o,Da,n),s===i)break;i=s}i!==null&&o.stopPropagation()}else Hl(e,r,o,null,n)}}var Da=null;function $d(e,r,n,o){if(Da=null,e=Nc(o),e=bo(e),e!==null)if(r=zo(e),r===null)e=null;else if(n=r.tag,n===13){if(e=zb(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Da=e,null}function $b(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_f()){case Oc:return 1;case Rb:return 4;case Ea:case $f:return 16;case Eb:return 536870912;default:return 16}default:return 16}}var Pn=null,Vc=null,fa=null;function Pb(){if(fa)return fa;var e,r=Vc,n=r.length,o,i="value"in Pn?Pn.value:Pn.textContent,s=i.length;for(e=0;e<n&&r[e]===i[e];e++);var a=n-e;for(o=1;o<=a&&r[n-o]===i[s-o];o++);return fa=i.slice(e,1<o?1-o:void 0)}function xa(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Ls(){return!0}function Zg(){return!1}function Rr(e){function r(n,o,i,s,a){this._reactName=n,this._targetInst=i,this.type=o,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ls:Zg,this.isPropagationStopped=Zg,this}return Lt(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ls)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ls)},persist:function(){},isPersistent:Ls}),r}var bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yc=Rr(bi),Ts=Lt({},bi,{view:0,detail:0}),Zf=Rr(Ts),Dl,Wl,Si,ll=Lt({},Ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Si&&(Si&&e.type==="mousemove"?(Dl=e.screenX-Si.screenX,Wl=e.screenY-Si.screenY):Wl=Dl=0,Si=e),Dl)},movementY:function(e){return"movementY"in e?e.movementY:Wl}}),Jg=Rr(ll),Jf=Lt({},ll,{dataTransfer:0}),ex=Rr(Jf),tx=Lt({},Ts,{relatedTarget:0}),Ml=Rr(tx),rx=Lt({},bi,{animationName:0,elapsedTime:0,pseudoElement:0}),nx=Rr(rx),ox=Lt({},bi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ix=Rr(ox),sx=Lt({},bi,{data:0}),eu=Rr(sx),ax={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cx(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=dx[e])?!!r[e]:!1}function Kc(){return cx}var gx=Lt({},Ts,{key:function(e){if(e.key){var r=ax[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=xa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kc,charCode:function(e){return e.type==="keypress"?xa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ux=Rr(gx),px=Lt({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tu=Rr(px),bx=Lt({},Ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kc}),mx=Rr(bx),hx=Lt({},bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),fx=Rr(hx),xx=Lt({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yx=Rr(xx),vx=[9,13,27,32],Qc=jn&&"CompositionEvent"in window,Hi=null;jn&&"documentMode"in document&&(Hi=document.documentMode);var jx=jn&&"TextEvent"in window&&!Hi,Nb=jn&&(!Qc||Hi&&8<Hi&&11>=Hi),ru=" ",nu=!1;function Ob(e,r){switch(e){case"keyup":return vx.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hb(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $o=!1;function kx(e,r){switch(e){case"compositionend":return Hb(r);case"keypress":return r.which!==32?null:(nu=!0,ru);case"textInput":return e=r.data,e===ru&&nu?null:e;default:return null}}function wx(e,r){if($o)return e==="compositionend"||!Qc&&Ob(e,r)?(e=Pb(),fa=Vc=Pn=null,$o=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Nb&&r.locale!=="ko"?null:r.data;default:return null}}var Sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ou(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Sx[e.type]:r==="textarea"}function Gb(e,r,n,o){jb(o),r=Wa(r,"onChange"),0<r.length&&(n=new Yc("onChange","change",null,n,o),e.push({event:n,listeners:r}))}var Gi=null,ds=null;function Cx(e){tm(e,0)}function dl(e){var r=Oo(e);if(bb(r))return e}function zx(e,r){if(e==="change")return r}var Ub=!1;if(jn){var Ll;if(jn){var _l="oninput"in document;if(!_l){var iu=document.createElement("div");iu.setAttribute("oninput","return;"),_l=typeof iu.oninput=="function"}Ll=_l}else Ll=!1;Ub=Ll&&(!document.documentMode||9<document.documentMode)}function su(){Gi&&(Gi.detachEvent("onpropertychange",Vb),ds=Gi=null)}function Vb(e){if(e.propertyName==="value"&&dl(ds)){var r=[];Gb(r,ds,e,Nc(e)),Cb(Cx,r)}}function Tx(e,r,n){e==="focusin"?(su(),Gi=r,ds=n,Gi.attachEvent("onpropertychange",Vb)):e==="focusout"&&su()}function Ix(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dl(ds)}function Bx(e,r){if(e==="click")return dl(r)}function Rx(e,r){if(e==="input"||e==="change")return dl(r)}function Ex(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Qr=typeof Object.is=="function"?Object.is:Ex;function cs(e,r){if(Qr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),o=Object.keys(r);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var i=n[o];if(!jd.call(r,i)||!Qr(e[i],r[i]))return!1}return!0}function au(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lu(e,r){var n=au(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=r&&o>=r)return{node:n,offset:r-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=au(n)}}function Yb(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Yb(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function Kb(){for(var e=window,r=Ia();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=Ia(e.document)}return r}function qc(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Ax(e){var r=Kb(),n=e.focusedElem,o=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&Yb(n.ownerDocument.documentElement,n)){if(o!==null&&qc(n)){if(r=o.start,e=o.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(o.start,i);o=o.end===void 0?s:Math.min(o.end,i),!e.extend&&s>o&&(i=o,o=s,s=i),i=lu(n,s);var a=lu(n,o);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(r=r.createRange(),r.setStart(i.node,i.offset),e.removeAllRanges(),s>o?(e.addRange(r),e.extend(a.node,a.offset)):(r.setEnd(a.node,a.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fx=jn&&"documentMode"in document&&11>=document.documentMode,Po=null,Pd=null,Ui=null,Nd=!1;function du(e,r,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nd||Po==null||Po!==Ia(o)||(o=Po,"selectionStart"in o&&qc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ui&&cs(Ui,o)||(Ui=o,o=Wa(Pd,"onSelect"),0<o.length&&(r=new Yc("onSelect","select",null,r,n),e.push({event:r,listeners:o}),r.target=Po)))}function _s(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var No={animationend:_s("Animation","AnimationEnd"),animationiteration:_s("Animation","AnimationIteration"),animationstart:_s("Animation","AnimationStart"),transitionend:_s("Transition","TransitionEnd")},$l={},Qb={};jn&&(Qb=document.createElement("div").style,"AnimationEvent"in window||(delete No.animationend.animation,delete No.animationiteration.animation,delete No.animationstart.animation),"TransitionEvent"in window||delete No.transitionend.transition);function cl(e){if($l[e])return $l[e];if(!No[e])return e;var r=No[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in Qb)return $l[e]=r[n];return e}var qb=cl("animationend"),Xb=cl("animationiteration"),Zb=cl("animationstart"),Jb=cl("transitionend"),em=new Map,cu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jn(e,r){em.set(e,r),Co(r,[e])}for(var Pl=0;Pl<cu.length;Pl++){var Nl=cu[Pl],Dx=Nl.toLowerCase(),Wx=Nl[0].toUpperCase()+Nl.slice(1);Jn(Dx,"on"+Wx)}Jn(qb,"onAnimationEnd");Jn(Xb,"onAnimationIteration");Jn(Zb,"onAnimationStart");Jn("dblclick","onDoubleClick");Jn("focusin","onFocus");Jn("focusout","onBlur");Jn(Jb,"onTransitionEnd");ni("onMouseEnter",["mouseout","mouseover"]);ni("onMouseLeave",["mouseout","mouseover"]);ni("onPointerEnter",["pointerout","pointerover"]);ni("onPointerLeave",["pointerout","pointerover"]);Co("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Co("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Co("onBeforeInput",["compositionend","keypress","textInput","paste"]);Co("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Co("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Co("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Di));function gu(e,r,n){var o=e.type||"unknown-event";e.currentTarget=n,Df(o,r,void 0,e),e.currentTarget=null}function tm(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],i=o.event;o=o.listeners;e:{var s=void 0;if(r)for(var a=o.length-1;0<=a;a--){var l=o[a],d=l.instance,g=l.currentTarget;if(l=l.listener,d!==s&&i.isPropagationStopped())break e;gu(i,l,g),s=d}else for(a=0;a<o.length;a++){if(l=o[a],d=l.instance,g=l.currentTarget,l=l.listener,d!==s&&i.isPropagationStopped())break e;gu(i,l,g),s=d}}}if(Ra)throw e=Md,Ra=!1,Md=null,e}function Rt(e,r){var n=r[Vd];n===void 0&&(n=r[Vd]=new Set);var o=e+"__bubble";n.has(o)||(rm(r,e,2,!1),n.add(o))}function Ol(e,r,n){var o=0;r&&(o|=4),rm(n,e,o,r)}var $s="_reactListening"+Math.random().toString(36).slice(2);function gs(e){if(!e[$s]){e[$s]=!0,db.forEach(function(n){n!=="selectionchange"&&(Mx.has(n)||Ol(n,!1,e),Ol(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[$s]||(r[$s]=!0,Ol("selectionchange",!1,r))}}function rm(e,r,n,o){switch($b(r)){case 1:var i=qf;break;case 4:i=Xf;break;default:i=Uc}n=i.bind(null,r,n,e),i=void 0,!Wd||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(r,n,{capture:!0,passive:i}):e.addEventListener(r,n,!0):i!==void 0?e.addEventListener(r,n,{passive:i}):e.addEventListener(r,n,!1)}function Hl(e,r,n,o,i){var s=o;if(!(r&1)&&!(r&2)&&o!==null)e:for(;;){if(o===null)return;var a=o.tag;if(a===3||a===4){var l=o.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=o.return;a!==null;){var d=a.tag;if((d===3||d===4)&&(d=a.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;a=a.return}for(;l!==null;){if(a=bo(l),a===null)return;if(d=a.tag,d===5||d===6){o=s=a;continue e}l=l.parentNode}}o=o.return}Cb(function(){var g=s,h=Nc(n),y=[];e:{var f=em.get(e);if(f!==void 0){var E=Yc,R=e;switch(e){case"keypress":if(xa(n)===0)break e;case"keydown":case"keyup":E=ux;break;case"focusin":R="focus",E=Ml;break;case"focusout":R="blur",E=Ml;break;case"beforeblur":case"afterblur":E=Ml;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Jg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=ex;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=mx;break;case qb:case Xb:case Zb:E=nx;break;case Jb:E=fx;break;case"scroll":E=Zf;break;case"wheel":E=yx;break;case"copy":case"cut":case"paste":E=ix;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=tu}var T=(r&4)!==0,z=!T&&e==="scroll",m=T?f!==null?f+"Capture":null:f;T=[];for(var b=g,u;b!==null;){u=b;var k=u.stateNode;if(u.tag===5&&k!==null&&(u=k,m!==null&&(k=is(b,m),k!=null&&T.push(us(b,k,u)))),z)break;b=b.return}0<T.length&&(f=new E(f,R,null,n,h),y.push({event:f,listeners:T}))}}if(!(r&7)){e:{if(f=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",f&&n!==Fd&&(R=n.relatedTarget||n.fromElement)&&(bo(R)||R[kn]))break e;if((E||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,E?(R=n.relatedTarget||n.toElement,E=g,R=R?bo(R):null,R!==null&&(z=zo(R),R!==z||R.tag!==5&&R.tag!==6)&&(R=null)):(E=null,R=g),E!==R)){if(T=Jg,k="onMouseLeave",m="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(T=tu,k="onPointerLeave",m="onPointerEnter",b="pointer"),z=E==null?f:Oo(E),u=R==null?f:Oo(R),f=new T(k,b+"leave",E,n,h),f.target=z,f.relatedTarget=u,k=null,bo(h)===g&&(T=new T(m,b+"enter",R,n,h),T.target=u,T.relatedTarget=z,k=T),z=k,E&&R)t:{for(T=E,m=R,b=0,u=T;u;u=Io(u))b++;for(u=0,k=m;k;k=Io(k))u++;for(;0<b-u;)T=Io(T),b--;for(;0<u-b;)m=Io(m),u--;for(;b--;){if(T===m||m!==null&&T===m.alternate)break t;T=Io(T),m=Io(m)}T=null}else T=null;E!==null&&uu(y,f,E,T,!1),R!==null&&z!==null&&uu(y,z,R,T,!0)}}e:{if(f=g?Oo(g):window,E=f.nodeName&&f.nodeName.toLowerCase(),E==="select"||E==="input"&&f.type==="file")var j=zx;else if(ou(f))if(Ub)j=Rx;else{j=Ix;var C=Tx}else(E=f.nodeName)&&E.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(j=Bx);if(j&&(j=j(e,g))){Gb(y,j,n,h);break e}C&&C(e,f,g),e==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Id(f,"number",f.value)}switch(C=g?Oo(g):window,e){case"focusin":(ou(C)||C.contentEditable==="true")&&(Po=C,Pd=g,Ui=null);break;case"focusout":Ui=Pd=Po=null;break;case"mousedown":Nd=!0;break;case"contextmenu":case"mouseup":case"dragend":Nd=!1,du(y,n,h);break;case"selectionchange":if(Fx)break;case"keydown":case"keyup":du(y,n,h)}var B;if(Qc)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else $o?Ob(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Nb&&n.locale!=="ko"&&($o||x!=="onCompositionStart"?x==="onCompositionEnd"&&$o&&(B=Pb()):(Pn=h,Vc="value"in Pn?Pn.value:Pn.textContent,$o=!0)),C=Wa(g,x),0<C.length&&(x=new eu(x,e,null,n,h),y.push({event:x,listeners:C}),B?x.data=B:(B=Hb(n),B!==null&&(x.data=B)))),(B=jx?kx(e,n):wx(e,n))&&(g=Wa(g,"onBeforeInput"),0<g.length&&(h=new eu("onBeforeInput","beforeinput",null,n,h),y.push({event:h,listeners:g}),h.data=B))}tm(y,r)})}function us(e,r,n){return{instance:e,listener:r,currentTarget:n}}function Wa(e,r){for(var n=r+"Capture",o=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=is(e,n),s!=null&&o.unshift(us(e,s,i)),s=is(e,r),s!=null&&o.push(us(e,s,i))),e=e.return}return o}function Io(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function uu(e,r,n,o,i){for(var s=r._reactName,a=[];n!==null&&n!==o;){var l=n,d=l.alternate,g=l.stateNode;if(d!==null&&d===o)break;l.tag===5&&g!==null&&(l=g,i?(d=is(n,s),d!=null&&a.unshift(us(n,d,l))):i||(d=is(n,s),d!=null&&a.push(us(n,d,l)))),n=n.return}a.length!==0&&e.push({event:r,listeners:a})}var Lx=/\r\n?/g,_x=/\u0000|\uFFFD/g;function pu(e){return(typeof e=="string"?e:""+e).replace(Lx,`
`).replace(_x,"")}function Ps(e,r,n){if(r=pu(r),pu(e)!==r&&n)throw Error(Se(425))}function Ma(){}var Od=null,Hd=null;function Gd(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Ud=typeof setTimeout=="function"?setTimeout:void 0,$x=typeof clearTimeout=="function"?clearTimeout:void 0,bu=typeof Promise=="function"?Promise:void 0,Px=typeof queueMicrotask=="function"?queueMicrotask:typeof bu<"u"?function(e){return bu.resolve(null).then(e).catch(Nx)}:Ud;function Nx(e){setTimeout(function(){throw e})}function Gl(e,r){var n=r,o=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(o===0){e.removeChild(i),ls(r);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=i}while(n);ls(r)}function Un(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function mu(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var mi=Math.random().toString(36).slice(2),nn="__reactFiber$"+mi,ps="__reactProps$"+mi,kn="__reactContainer$"+mi,Vd="__reactEvents$"+mi,Ox="__reactListeners$"+mi,Hx="__reactHandles$"+mi;function bo(e){var r=e[nn];if(r)return r;for(var n=e.parentNode;n;){if(r=n[kn]||n[nn]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=mu(e);e!==null;){if(n=e[nn])return n;e=mu(e)}return r}e=n,n=e.parentNode}return null}function Is(e){return e=e[nn]||e[kn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Oo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Se(33))}function gl(e){return e[ps]||null}var Yd=[],Ho=-1;function eo(e){return{current:e}}function Et(e){0>Ho||(e.current=Yd[Ho],Yd[Ho]=null,Ho--)}function Tt(e,r){Ho++,Yd[Ho]=e.current,e.current=r}var Zn={},or=eo(Zn),hr=eo(!1),vo=Zn;function oi(e,r){var n=e.type.contextTypes;if(!n)return Zn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===r)return o.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=r[s];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),i}function fr(e){return e=e.childContextTypes,e!=null}function La(){Et(hr),Et(or)}function hu(e,r,n){if(or.current!==Zn)throw Error(Se(168));Tt(or,r),Tt(hr,n)}function nm(e,r,n){var o=e.stateNode;if(r=r.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var i in o)if(!(i in r))throw Error(Se(108,Tf(e)||"Unknown",i));return Lt({},n,o)}function _a(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zn,vo=or.current,Tt(or,e),Tt(hr,hr.current),!0}function fu(e,r,n){var o=e.stateNode;if(!o)throw Error(Se(169));n?(e=nm(e,r,vo),o.__reactInternalMemoizedMergedChildContext=e,Et(hr),Et(or),Tt(or,e)):Et(hr),Tt(hr,n)}var hn=null,ul=!1,Ul=!1;function om(e){hn===null?hn=[e]:hn.push(e)}function Gx(e){ul=!0,om(e)}function to(){if(!Ul&&hn!==null){Ul=!0;var e=0,r=Ct;try{var n=hn;for(Ct=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}hn=null,ul=!1}catch(i){throw hn!==null&&(hn=hn.slice(e+1)),Bb(Oc,to),i}finally{Ct=r,Ul=!1}}return null}var Go=[],Uo=0,$a=null,Pa=0,Dr=[],Wr=0,jo=null,xn=1,yn="";function co(e,r){Go[Uo++]=Pa,Go[Uo++]=$a,$a=e,Pa=r}function im(e,r,n){Dr[Wr++]=xn,Dr[Wr++]=yn,Dr[Wr++]=jo,jo=e;var o=xn;e=yn;var i=32-Yr(o)-1;o&=~(1<<i),n+=1;var s=32-Yr(r)+i;if(30<s){var a=i-i%5;s=(o&(1<<a)-1).toString(32),o>>=a,i-=a,xn=1<<32-Yr(r)+i|n<<i|o,yn=s+e}else xn=1<<s|n<<i|o,yn=e}function Xc(e){e.return!==null&&(co(e,1),im(e,1,0))}function Zc(e){for(;e===$a;)$a=Go[--Uo],Go[Uo]=null,Pa=Go[--Uo],Go[Uo]=null;for(;e===jo;)jo=Dr[--Wr],Dr[Wr]=null,yn=Dr[--Wr],Dr[Wr]=null,xn=Dr[--Wr],Dr[Wr]=null}var Tr=null,zr=null,Dt=!1,Vr=null;function sm(e,r){var n=Mr(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function xu(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,Tr=e,zr=Un(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,Tr=e,zr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=jo!==null?{id:xn,overflow:yn}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=Mr(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,Tr=e,zr=null,!0):!1;default:return!1}}function Kd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qd(e){if(Dt){var r=zr;if(r){var n=r;if(!xu(e,r)){if(Kd(e))throw Error(Se(418));r=Un(n.nextSibling);var o=Tr;r&&xu(e,r)?sm(o,n):(e.flags=e.flags&-4097|2,Dt=!1,Tr=e)}}else{if(Kd(e))throw Error(Se(418));e.flags=e.flags&-4097|2,Dt=!1,Tr=e}}}function yu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Tr=e}function Ns(e){if(e!==Tr)return!1;if(!Dt)return yu(e),Dt=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Gd(e.type,e.memoizedProps)),r&&(r=zr)){if(Kd(e))throw am(),Error(Se(418));for(;r;)sm(e,r),r=Un(r.nextSibling)}if(yu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Se(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){zr=Un(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}zr=null}}else zr=Tr?Un(e.stateNode.nextSibling):null;return!0}function am(){for(var e=zr;e;)e=Un(e.nextSibling)}function ii(){zr=Tr=null,Dt=!1}function Jc(e){Vr===null?Vr=[e]:Vr.push(e)}var Ux=Tn.ReactCurrentBatchConfig;function Ci(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Se(309));var o=n.stateNode}if(!o)throw Error(Se(147,e));var i=o,s=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===s?r.ref:(r=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},r._stringRef=s,r)}if(typeof e!="string")throw Error(Se(284));if(!n._owner)throw Error(Se(290,e))}return e}function Os(e,r){throw e=Object.prototype.toString.call(r),Error(Se(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function vu(e){var r=e._init;return r(e._payload)}function lm(e){function r(m,b){if(e){var u=m.deletions;u===null?(m.deletions=[b],m.flags|=16):u.push(b)}}function n(m,b){if(!e)return null;for(;b!==null;)r(m,b),b=b.sibling;return null}function o(m,b){for(m=new Map;b!==null;)b.key!==null?m.set(b.key,b):m.set(b.index,b),b=b.sibling;return m}function i(m,b){return m=Qn(m,b),m.index=0,m.sibling=null,m}function s(m,b,u){return m.index=u,e?(u=m.alternate,u!==null?(u=u.index,u<b?(m.flags|=2,b):u):(m.flags|=2,b)):(m.flags|=1048576,b)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,b,u,k){return b===null||b.tag!==6?(b=Zl(u,m.mode,k),b.return=m,b):(b=i(b,u),b.return=m,b)}function d(m,b,u,k){var j=u.type;return j===_o?h(m,b,u.props.children,k,u.key):b!==null&&(b.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Dn&&vu(j)===b.type)?(k=i(b,u.props),k.ref=Ci(m,b,u),k.return=m,k):(k=Ca(u.type,u.key,u.props,null,m.mode,k),k.ref=Ci(m,b,u),k.return=m,k)}function g(m,b,u,k){return b===null||b.tag!==4||b.stateNode.containerInfo!==u.containerInfo||b.stateNode.implementation!==u.implementation?(b=Jl(u,m.mode,k),b.return=m,b):(b=i(b,u.children||[]),b.return=m,b)}function h(m,b,u,k,j){return b===null||b.tag!==7?(b=yo(u,m.mode,k,j),b.return=m,b):(b=i(b,u),b.return=m,b)}function y(m,b,u){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Zl(""+b,m.mode,u),b.return=m,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Es:return u=Ca(b.type,b.key,b.props,null,m.mode,u),u.ref=Ci(m,null,b),u.return=m,u;case Lo:return b=Jl(b,m.mode,u),b.return=m,b;case Dn:var k=b._init;return y(m,k(b._payload),u)}if(Ai(b)||vi(b))return b=yo(b,m.mode,u,null),b.return=m,b;Os(m,b)}return null}function f(m,b,u,k){var j=b!==null?b.key:null;if(typeof u=="string"&&u!==""||typeof u=="number")return j!==null?null:l(m,b,""+u,k);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Es:return u.key===j?d(m,b,u,k):null;case Lo:return u.key===j?g(m,b,u,k):null;case Dn:return j=u._init,f(m,b,j(u._payload),k)}if(Ai(u)||vi(u))return j!==null?null:h(m,b,u,k,null);Os(m,u)}return null}function E(m,b,u,k,j){if(typeof k=="string"&&k!==""||typeof k=="number")return m=m.get(u)||null,l(b,m,""+k,j);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Es:return m=m.get(k.key===null?u:k.key)||null,d(b,m,k,j);case Lo:return m=m.get(k.key===null?u:k.key)||null,g(b,m,k,j);case Dn:var C=k._init;return E(m,b,u,C(k._payload),j)}if(Ai(k)||vi(k))return m=m.get(u)||null,h(b,m,k,j,null);Os(b,k)}return null}function R(m,b,u,k){for(var j=null,C=null,B=b,x=b=0,v=null;B!==null&&x<u.length;x++){B.index>x?(v=B,B=null):v=B.sibling;var $=f(m,B,u[x],k);if($===null){B===null&&(B=v);break}e&&B&&$.alternate===null&&r(m,B),b=s($,b,x),C===null?j=$:C.sibling=$,C=$,B=v}if(x===u.length)return n(m,B),Dt&&co(m,x),j;if(B===null){for(;x<u.length;x++)B=y(m,u[x],k),B!==null&&(b=s(B,b,x),C===null?j=B:C.sibling=B,C=B);return Dt&&co(m,x),j}for(B=o(m,B);x<u.length;x++)v=E(B,m,x,u[x],k),v!==null&&(e&&v.alternate!==null&&B.delete(v.key===null?x:v.key),b=s(v,b,x),C===null?j=v:C.sibling=v,C=v);return e&&B.forEach(function(Q){return r(m,Q)}),Dt&&co(m,x),j}function T(m,b,u,k){var j=vi(u);if(typeof j!="function")throw Error(Se(150));if(u=j.call(u),u==null)throw Error(Se(151));for(var C=j=null,B=b,x=b=0,v=null,$=u.next();B!==null&&!$.done;x++,$=u.next()){B.index>x?(v=B,B=null):v=B.sibling;var Q=f(m,B,$.value,k);if(Q===null){B===null&&(B=v);break}e&&B&&Q.alternate===null&&r(m,B),b=s(Q,b,x),C===null?j=Q:C.sibling=Q,C=Q,B=v}if($.done)return n(m,B),Dt&&co(m,x),j;if(B===null){for(;!$.done;x++,$=u.next())$=y(m,$.value,k),$!==null&&(b=s($,b,x),C===null?j=$:C.sibling=$,C=$);return Dt&&co(m,x),j}for(B=o(m,B);!$.done;x++,$=u.next())$=E(B,m,x,$.value,k),$!==null&&(e&&$.alternate!==null&&B.delete($.key===null?x:$.key),b=s($,b,x),C===null?j=$:C.sibling=$,C=$);return e&&B.forEach(function(ne){return r(m,ne)}),Dt&&co(m,x),j}function z(m,b,u,k){if(typeof u=="object"&&u!==null&&u.type===_o&&u.key===null&&(u=u.props.children),typeof u=="object"&&u!==null){switch(u.$$typeof){case Es:e:{for(var j=u.key,C=b;C!==null;){if(C.key===j){if(j=u.type,j===_o){if(C.tag===7){n(m,C.sibling),b=i(C,u.props.children),b.return=m,m=b;break e}}else if(C.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Dn&&vu(j)===C.type){n(m,C.sibling),b=i(C,u.props),b.ref=Ci(m,C,u),b.return=m,m=b;break e}n(m,C);break}else r(m,C);C=C.sibling}u.type===_o?(b=yo(u.props.children,m.mode,k,u.key),b.return=m,m=b):(k=Ca(u.type,u.key,u.props,null,m.mode,k),k.ref=Ci(m,b,u),k.return=m,m=k)}return a(m);case Lo:e:{for(C=u.key;b!==null;){if(b.key===C)if(b.tag===4&&b.stateNode.containerInfo===u.containerInfo&&b.stateNode.implementation===u.implementation){n(m,b.sibling),b=i(b,u.children||[]),b.return=m,m=b;break e}else{n(m,b);break}else r(m,b);b=b.sibling}b=Jl(u,m.mode,k),b.return=m,m=b}return a(m);case Dn:return C=u._init,z(m,b,C(u._payload),k)}if(Ai(u))return R(m,b,u,k);if(vi(u))return T(m,b,u,k);Os(m,u)}return typeof u=="string"&&u!==""||typeof u=="number"?(u=""+u,b!==null&&b.tag===6?(n(m,b.sibling),b=i(b,u),b.return=m,m=b):(n(m,b),b=Zl(u,m.mode,k),b.return=m,m=b),a(m)):n(m,b)}return z}var si=lm(!0),dm=lm(!1),Na=eo(null),Oa=null,Vo=null,eg=null;function tg(){eg=Vo=Oa=null}function rg(e){var r=Na.current;Et(Na),e._currentValue=r}function qd(e,r,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,o!==null&&(o.childLanes|=r)):o!==null&&(o.childLanes&r)!==r&&(o.childLanes|=r),e===n)break;e=e.return}}function Jo(e,r){Oa=e,eg=Vo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&r&&(mr=!0),e.firstContext=null)}function _r(e){var r=e._currentValue;if(eg!==e)if(e={context:e,memoizedValue:r,next:null},Vo===null){if(Oa===null)throw Error(Se(308));Vo=e,Oa.dependencies={lanes:0,firstContext:e}}else Vo=Vo.next=e;return r}var mo=null;function ng(e){mo===null?mo=[e]:mo.push(e)}function cm(e,r,n,o){var i=r.interleaved;return i===null?(n.next=n,ng(r)):(n.next=i.next,i.next=n),r.interleaved=n,wn(e,o)}function wn(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wn=!1;function og(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gm(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vn(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function Vn(e,r,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,mt&2){var i=o.pending;return i===null?r.next=r:(r.next=i.next,i.next=r),o.pending=r,wn(e,n)}return i=o.interleaved,i===null?(r.next=r,ng(o)):(r.next=i.next,i.next=r),o.interleaved=r,wn(e,n)}function ya(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var o=r.lanes;o&=e.pendingLanes,n|=o,r.lanes=n,Hc(e,n)}}function ju(e,r){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=r:s=s.next=r}else i=s=r;n={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function Ha(e,r,n,o){var i=e.updateQueue;Wn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var d=l,g=d.next;d.next=null,a===null?s=g:a.next=g,a=d;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==a&&(l===null?h.firstBaseUpdate=g:l.next=g,h.lastBaseUpdate=d))}if(s!==null){var y=i.baseState;a=0,h=g=d=null,l=s;do{var f=l.lane,E=l.eventTime;if((o&f)===f){h!==null&&(h=h.next={eventTime:E,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=e,T=l;switch(f=r,E=n,T.tag){case 1:if(R=T.payload,typeof R=="function"){y=R.call(E,y,f);break e}y=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=T.payload,f=typeof R=="function"?R.call(E,y,f):R,f==null)break e;y=Lt({},y,f);break e;case 2:Wn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else E={eventTime:E,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(g=h=E,d=y):h=h.next=E,a|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(h===null&&(d=y),i.baseState=d,i.firstBaseUpdate=g,i.lastBaseUpdate=h,r=i.shared.interleaved,r!==null){i=r;do a|=i.lane,i=i.next;while(i!==r)}else s===null&&(i.shared.lanes=0);wo|=a,e.lanes=a,e.memoizedState=y}}function ku(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var o=e[r],i=o.callback;if(i!==null){if(o.callback=null,o=n,typeof i!="function")throw Error(Se(191,i));i.call(o)}}}var Bs={},sn=eo(Bs),bs=eo(Bs),ms=eo(Bs);function ho(e){if(e===Bs)throw Error(Se(174));return e}function ig(e,r){switch(Tt(ms,r),Tt(bs,e),Tt(sn,Bs),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Rd(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Rd(r,e)}Et(sn),Tt(sn,r)}function ai(){Et(sn),Et(bs),Et(ms)}function um(e){ho(ms.current);var r=ho(sn.current),n=Rd(r,e.type);r!==n&&(Tt(bs,e),Tt(sn,n))}function sg(e){bs.current===e&&(Et(sn),Et(bs))}var Wt=eo(0);function Ga(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Vl=[];function ag(){for(var e=0;e<Vl.length;e++)Vl[e]._workInProgressVersionPrimary=null;Vl.length=0}var va=Tn.ReactCurrentDispatcher,Yl=Tn.ReactCurrentBatchConfig,ko=0,Mt=null,Ht=null,Yt=null,Ua=!1,Vi=!1,hs=0,Vx=0;function Jt(){throw Error(Se(321))}function lg(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!Qr(e[n],r[n]))return!1;return!0}function dg(e,r,n,o,i,s){if(ko=s,Mt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,va.current=e===null||e.memoizedState===null?qx:Xx,e=n(o,i),Vi){s=0;do{if(Vi=!1,hs=0,25<=s)throw Error(Se(301));s+=1,Yt=Ht=null,r.updateQueue=null,va.current=Zx,e=n(o,i)}while(Vi)}if(va.current=Va,r=Ht!==null&&Ht.next!==null,ko=0,Yt=Ht=Mt=null,Ua=!1,r)throw Error(Se(300));return e}function cg(){var e=hs!==0;return hs=0,e}function en(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Yt===null?Mt.memoizedState=Yt=e:Yt=Yt.next=e,Yt}function $r(){if(Ht===null){var e=Mt.alternate;e=e!==null?e.memoizedState:null}else e=Ht.next;var r=Yt===null?Mt.memoizedState:Yt.next;if(r!==null)Yt=r,Ht=e;else{if(e===null)throw Error(Se(310));Ht=e,e={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},Yt===null?Mt.memoizedState=Yt=e:Yt=Yt.next=e}return Yt}function fs(e,r){return typeof r=="function"?r(e):r}function Kl(e){var r=$r(),n=r.queue;if(n===null)throw Error(Se(311));n.lastRenderedReducer=e;var o=Ht,i=o.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}o.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,o=o.baseState;var l=a=null,d=null,g=s;do{var h=g.lane;if((ko&h)===h)d!==null&&(d=d.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),o=g.hasEagerState?g.eagerState:e(o,g.action);else{var y={lane:h,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};d===null?(l=d=y,a=o):d=d.next=y,Mt.lanes|=h,wo|=h}g=g.next}while(g!==null&&g!==s);d===null?a=o:d.next=l,Qr(o,r.memoizedState)||(mr=!0),r.memoizedState=o,r.baseState=a,r.baseQueue=d,n.lastRenderedState=o}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Mt.lanes|=s,wo|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function Ql(e){var r=$r(),n=r.queue;if(n===null)throw Error(Se(311));n.lastRenderedReducer=e;var o=n.dispatch,i=n.pending,s=r.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);Qr(s,r.memoizedState)||(mr=!0),r.memoizedState=s,r.baseQueue===null&&(r.baseState=s),n.lastRenderedState=s}return[s,o]}function pm(){}function bm(e,r){var n=Mt,o=$r(),i=r(),s=!Qr(o.memoizedState,i);if(s&&(o.memoizedState=i,mr=!0),o=o.queue,gg(fm.bind(null,n,o,e),[e]),o.getSnapshot!==r||s||Yt!==null&&Yt.memoizedState.tag&1){if(n.flags|=2048,xs(9,hm.bind(null,n,o,i,r),void 0,null),Kt===null)throw Error(Se(349));ko&30||mm(n,r,i)}return i}function mm(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=Mt.updateQueue,r===null?(r={lastEffect:null,stores:null},Mt.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function hm(e,r,n,o){r.value=n,r.getSnapshot=o,xm(r)&&ym(e)}function fm(e,r,n){return n(function(){xm(r)&&ym(e)})}function xm(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!Qr(e,n)}catch{return!0}}function ym(e){var r=wn(e,1);r!==null&&Kr(r,e,1,-1)}function wu(e){var r=en();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:e},r.queue=e,e=e.dispatch=Qx.bind(null,Mt,e),[r.memoizedState,e]}function xs(e,r,n,o){return e={tag:e,create:r,destroy:n,deps:o,next:null},r=Mt.updateQueue,r===null?(r={lastEffect:null,stores:null},Mt.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,r.lastEffect=e)),e}function vm(){return $r().memoizedState}function ja(e,r,n,o){var i=en();Mt.flags|=e,i.memoizedState=xs(1|r,n,void 0,o===void 0?null:o)}function pl(e,r,n,o){var i=$r();o=o===void 0?null:o;var s=void 0;if(Ht!==null){var a=Ht.memoizedState;if(s=a.destroy,o!==null&&lg(o,a.deps)){i.memoizedState=xs(r,n,s,o);return}}Mt.flags|=e,i.memoizedState=xs(1|r,n,s,o)}function Su(e,r){return ja(8390656,8,e,r)}function gg(e,r){return pl(2048,8,e,r)}function jm(e,r){return pl(4,2,e,r)}function km(e,r){return pl(4,4,e,r)}function wm(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Sm(e,r,n){return n=n!=null?n.concat([e]):null,pl(4,4,wm.bind(null,r,e),n)}function ug(){}function Cm(e,r){var n=$r();r=r===void 0?null:r;var o=n.memoizedState;return o!==null&&r!==null&&lg(r,o[1])?o[0]:(n.memoizedState=[e,r],e)}function zm(e,r){var n=$r();r=r===void 0?null:r;var o=n.memoizedState;return o!==null&&r!==null&&lg(r,o[1])?o[0]:(e=e(),n.memoizedState=[e,r],e)}function Tm(e,r,n){return ko&21?(Qr(n,r)||(n=Ab(),Mt.lanes|=n,wo|=n,e.baseState=!0),r):(e.baseState&&(e.baseState=!1,mr=!0),e.memoizedState=n)}function Yx(e,r){var n=Ct;Ct=n!==0&&4>n?n:4,e(!0);var o=Yl.transition;Yl.transition={};try{e(!1),r()}finally{Ct=n,Yl.transition=o}}function Im(){return $r().memoizedState}function Kx(e,r,n){var o=Kn(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Bm(e))Rm(r,n);else if(n=cm(e,r,n,o),n!==null){var i=dr();Kr(n,e,o,i),Em(n,r,o)}}function Qx(e,r,n){var o=Kn(e),i={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bm(e))Rm(r,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=r.lastRenderedReducer,s!==null))try{var a=r.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,Qr(l,a)){var d=r.interleaved;d===null?(i.next=i,ng(r)):(i.next=d.next,d.next=i),r.interleaved=i;return}}catch{}finally{}n=cm(e,r,i,o),n!==null&&(i=dr(),Kr(n,e,o,i),Em(n,r,o))}}function Bm(e){var r=e.alternate;return e===Mt||r!==null&&r===Mt}function Rm(e,r){Vi=Ua=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function Em(e,r,n){if(n&4194240){var o=r.lanes;o&=e.pendingLanes,n|=o,r.lanes=n,Hc(e,n)}}var Va={readContext:_r,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},qx={readContext:_r,useCallback:function(e,r){return en().memoizedState=[e,r===void 0?null:r],e},useContext:_r,useEffect:Su,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,ja(4194308,4,wm.bind(null,r,e),n)},useLayoutEffect:function(e,r){return ja(4194308,4,e,r)},useInsertionEffect:function(e,r){return ja(4,2,e,r)},useMemo:function(e,r){var n=en();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var o=en();return r=n!==void 0?n(r):r,o.memoizedState=o.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},o.queue=e,e=e.dispatch=Kx.bind(null,Mt,e),[o.memoizedState,e]},useRef:function(e){var r=en();return e={current:e},r.memoizedState=e},useState:wu,useDebugValue:ug,useDeferredValue:function(e){return en().memoizedState=e},useTransition:function(){var e=wu(!1),r=e[0];return e=Yx.bind(null,e[1]),en().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var o=Mt,i=en();if(Dt){if(n===void 0)throw Error(Se(407));n=n()}else{if(n=r(),Kt===null)throw Error(Se(349));ko&30||mm(o,r,n)}i.memoizedState=n;var s={value:n,getSnapshot:r};return i.queue=s,Su(fm.bind(null,o,s,e),[e]),o.flags|=2048,xs(9,hm.bind(null,o,s,n,r),void 0,null),n},useId:function(){var e=en(),r=Kt.identifierPrefix;if(Dt){var n=yn,o=xn;n=(o&~(1<<32-Yr(o)-1)).toString(32)+n,r=":"+r+"R"+n,n=hs++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=Vx++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Xx={readContext:_r,useCallback:Cm,useContext:_r,useEffect:gg,useImperativeHandle:Sm,useInsertionEffect:jm,useLayoutEffect:km,useMemo:zm,useReducer:Kl,useRef:vm,useState:function(){return Kl(fs)},useDebugValue:ug,useDeferredValue:function(e){var r=$r();return Tm(r,Ht.memoizedState,e)},useTransition:function(){var e=Kl(fs)[0],r=$r().memoizedState;return[e,r]},useMutableSource:pm,useSyncExternalStore:bm,useId:Im,unstable_isNewReconciler:!1},Zx={readContext:_r,useCallback:Cm,useContext:_r,useEffect:gg,useImperativeHandle:Sm,useInsertionEffect:jm,useLayoutEffect:km,useMemo:zm,useReducer:Ql,useRef:vm,useState:function(){return Ql(fs)},useDebugValue:ug,useDeferredValue:function(e){var r=$r();return Ht===null?r.memoizedState=e:Tm(r,Ht.memoizedState,e)},useTransition:function(){var e=Ql(fs)[0],r=$r().memoizedState;return[e,r]},useMutableSource:pm,useSyncExternalStore:bm,useId:Im,unstable_isNewReconciler:!1};function Hr(e,r){if(e&&e.defaultProps){r=Lt({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function Xd(e,r,n,o){r=e.memoizedState,n=n(o,r),n=n==null?r:Lt({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bl={isMounted:function(e){return(e=e._reactInternals)?zo(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var o=dr(),i=Kn(e),s=vn(o,i);s.payload=r,n!=null&&(s.callback=n),r=Vn(e,s,i),r!==null&&(Kr(r,e,i,o),ya(r,e,i))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var o=dr(),i=Kn(e),s=vn(o,i);s.tag=1,s.payload=r,n!=null&&(s.callback=n),r=Vn(e,s,i),r!==null&&(Kr(r,e,i,o),ya(r,e,i))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=dr(),o=Kn(e),i=vn(n,o);i.tag=2,r!=null&&(i.callback=r),r=Vn(e,i,o),r!==null&&(Kr(r,e,o,n),ya(r,e,o))}};function Cu(e,r,n,o,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,a):r.prototype&&r.prototype.isPureReactComponent?!cs(n,o)||!cs(i,s):!0}function Am(e,r,n){var o=!1,i=Zn,s=r.contextType;return typeof s=="object"&&s!==null?s=_r(s):(i=fr(r)?vo:or.current,o=r.contextTypes,s=(o=o!=null)?oi(e,i):Zn),r=new r(n,s),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=bl,e.stateNode=r,r._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),r}function zu(e,r,n,o){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,o),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,o),r.state!==e&&bl.enqueueReplaceState(r,r.state,null)}function Zd(e,r,n,o){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},og(e);var s=r.contextType;typeof s=="object"&&s!==null?i.context=_r(s):(s=fr(r)?vo:or.current,i.context=oi(e,s)),i.state=e.memoizedState,s=r.getDerivedStateFromProps,typeof s=="function"&&(Xd(e,r,s,n),i.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&bl.enqueueReplaceState(i,i.state,null),Ha(e,n,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function li(e,r){try{var n="",o=r;do n+=zf(o),o=o.return;while(o);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:r,stack:i,digest:null}}function ql(e,r,n){return{value:e,source:null,stack:n??null,digest:r??null}}function Jd(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var Jx=typeof WeakMap=="function"?WeakMap:Map;function Fm(e,r,n){n=vn(-1,n),n.tag=3,n.payload={element:null};var o=r.value;return n.callback=function(){Ka||(Ka=!0,dc=o),Jd(e,r)},n}function Dm(e,r,n){n=vn(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=r.value;n.payload=function(){return o(i)},n.callback=function(){Jd(e,r)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Jd(e,r),typeof o!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var a=r.stack;this.componentDidCatch(r.value,{componentStack:a!==null?a:""})}),n}function Tu(e,r,n){var o=e.pingCache;if(o===null){o=e.pingCache=new Jx;var i=new Set;o.set(r,i)}else i=o.get(r),i===void 0&&(i=new Set,o.set(r,i));i.has(n)||(i.add(n),e=py.bind(null,e,r,n),r.then(e,e))}function Iu(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function Bu(e,r,n,o,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=vn(-1,1),r.tag=2,Vn(n,r,1))),n.lanes|=1),e)}var ey=Tn.ReactCurrentOwner,mr=!1;function ar(e,r,n,o){r.child=e===null?dm(r,null,n,o):si(r,e.child,n,o)}function Ru(e,r,n,o,i){n=n.render;var s=r.ref;return Jo(r,i),o=dg(e,r,n,o,s,i),n=cg(),e!==null&&!mr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,Sn(e,r,i)):(Dt&&n&&Xc(r),r.flags|=1,ar(e,r,o,i),r.child)}function Eu(e,r,n,o,i){if(e===null){var s=n.type;return typeof s=="function"&&!vg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=s,Wm(e,r,s,o,i)):(e=Ca(n.type,null,o,r,r.mode,i),e.ref=r.ref,e.return=r,r.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:cs,n(a,o)&&e.ref===r.ref)return Sn(e,r,i)}return r.flags|=1,e=Qn(s,o),e.ref=r.ref,e.return=r,r.child=e}function Wm(e,r,n,o,i){if(e!==null){var s=e.memoizedProps;if(cs(s,o)&&e.ref===r.ref)if(mr=!1,r.pendingProps=o=s,(e.lanes&i)!==0)e.flags&131072&&(mr=!0);else return r.lanes=e.lanes,Sn(e,r,i)}return ec(e,r,n,o,i)}function Mm(e,r,n){var o=r.pendingProps,i=o.children,s=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Tt(Ko,Cr),Cr|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,Tt(Ko,Cr),Cr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:n,Tt(Ko,Cr),Cr|=o}else s!==null?(o=s.baseLanes|n,r.memoizedState=null):o=n,Tt(Ko,Cr),Cr|=o;return ar(e,r,i,n),r.child}function Lm(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function ec(e,r,n,o,i){var s=fr(n)?vo:or.current;return s=oi(r,s),Jo(r,i),n=dg(e,r,n,o,s,i),o=cg(),e!==null&&!mr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,Sn(e,r,i)):(Dt&&o&&Xc(r),r.flags|=1,ar(e,r,n,i),r.child)}function Au(e,r,n,o,i){if(fr(n)){var s=!0;_a(r)}else s=!1;if(Jo(r,i),r.stateNode===null)ka(e,r),Am(r,n,o),Zd(r,n,o,i),o=!0;else if(e===null){var a=r.stateNode,l=r.memoizedProps;a.props=l;var d=a.context,g=n.contextType;typeof g=="object"&&g!==null?g=_r(g):(g=fr(n)?vo:or.current,g=oi(r,g));var h=n.getDerivedStateFromProps,y=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";y||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==o||d!==g)&&zu(r,a,o,g),Wn=!1;var f=r.memoizedState;a.state=f,Ha(r,o,a,i),d=r.memoizedState,l!==o||f!==d||hr.current||Wn?(typeof h=="function"&&(Xd(r,n,h,o),d=r.memoizedState),(l=Wn||Cu(r,n,l,o,f,d,g))?(y||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(r.flags|=4194308)):(typeof a.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=o,r.memoizedState=d),a.props=o,a.state=d,a.context=g,o=l):(typeof a.componentDidMount=="function"&&(r.flags|=4194308),o=!1)}else{a=r.stateNode,gm(e,r),l=r.memoizedProps,g=r.type===r.elementType?l:Hr(r.type,l),a.props=g,y=r.pendingProps,f=a.context,d=n.contextType,typeof d=="object"&&d!==null?d=_r(d):(d=fr(n)?vo:or.current,d=oi(r,d));var E=n.getDerivedStateFromProps;(h=typeof E=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==y||f!==d)&&zu(r,a,o,d),Wn=!1,f=r.memoizedState,a.state=f,Ha(r,o,a,i);var R=r.memoizedState;l!==y||f!==R||hr.current||Wn?(typeof E=="function"&&(Xd(r,n,E,o),R=r.memoizedState),(g=Wn||Cu(r,n,g,o,f,R,d)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(o,R,d),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(o,R,d)),typeof a.componentDidUpdate=="function"&&(r.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(r.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(r.flags|=1024),r.memoizedProps=o,r.memoizedState=R),a.props=o,a.state=R,a.context=d,o=g):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(r.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(r.flags|=1024),o=!1)}return tc(e,r,n,o,s,i)}function tc(e,r,n,o,i,s){Lm(e,r);var a=(r.flags&128)!==0;if(!o&&!a)return i&&fu(r,n,!1),Sn(e,r,s);o=r.stateNode,ey.current=r;var l=a&&typeof n.getDerivedStateFromError!="function"?null:o.render();return r.flags|=1,e!==null&&a?(r.child=si(r,e.child,null,s),r.child=si(r,null,l,s)):ar(e,r,l,s),r.memoizedState=o.state,i&&fu(r,n,!0),r.child}function _m(e){var r=e.stateNode;r.pendingContext?hu(e,r.pendingContext,r.pendingContext!==r.context):r.context&&hu(e,r.context,!1),ig(e,r.containerInfo)}function Fu(e,r,n,o,i){return ii(),Jc(i),r.flags|=256,ar(e,r,n,o),r.child}var rc={dehydrated:null,treeContext:null,retryLane:0};function nc(e){return{baseLanes:e,cachePool:null,transitions:null}}function $m(e,r,n){var o=r.pendingProps,i=Wt.current,s=!1,a=(r.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Tt(Wt,i&1),e===null)return Qd(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(r.mode&1?e.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(a=o.children,e=o.fallback,s?(o=r.mode,s=r.child,a={mode:"hidden",children:a},!(o&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=fl(a,o,0,null),e=yo(e,o,n,null),s.return=r,e.return=r,s.sibling=e,r.child=s,r.child.memoizedState=nc(n),r.memoizedState=rc,e):pg(r,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ty(e,r,a,o,l,i,n);if(s){s=o.fallback,a=r.mode,i=e.child,l=i.sibling;var d={mode:"hidden",children:o.children};return!(a&1)&&r.child!==i?(o=r.child,o.childLanes=0,o.pendingProps=d,r.deletions=null):(o=Qn(i,d),o.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Qn(l,s):(s=yo(s,a,n,null),s.flags|=2),s.return=r,o.return=r,o.sibling=s,r.child=o,o=s,s=r.child,a=e.child.memoizedState,a=a===null?nc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,r.memoizedState=rc,o}return s=e.child,e=s.sibling,o=Qn(s,{mode:"visible",children:o.children}),!(r.mode&1)&&(o.lanes=n),o.return=r,o.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=o,r.memoizedState=null,o}function pg(e,r){return r=fl({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Hs(e,r,n,o){return o!==null&&Jc(o),si(r,e.child,null,n),e=pg(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function ty(e,r,n,o,i,s,a){if(n)return r.flags&256?(r.flags&=-257,o=ql(Error(Se(422))),Hs(e,r,a,o)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(s=o.fallback,i=r.mode,o=fl({mode:"visible",children:o.children},i,0,null),s=yo(s,i,a,null),s.flags|=2,o.return=r,s.return=r,o.sibling=s,r.child=o,r.mode&1&&si(r,e.child,null,a),r.child.memoizedState=nc(a),r.memoizedState=rc,s);if(!(r.mode&1))return Hs(e,r,a,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var l=o.dgst;return o=l,s=Error(Se(419)),o=ql(s,o,void 0),Hs(e,r,a,o)}if(l=(a&e.childLanes)!==0,mr||l){if(o=Kt,o!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(o.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,wn(e,i),Kr(o,e,i,-1))}return yg(),o=ql(Error(Se(421))),Hs(e,r,a,o)}return i.data==="$?"?(r.flags|=128,r.child=e.child,r=by.bind(null,e),i._reactRetry=r,null):(e=s.treeContext,zr=Un(i.nextSibling),Tr=r,Dt=!0,Vr=null,e!==null&&(Dr[Wr++]=xn,Dr[Wr++]=yn,Dr[Wr++]=jo,xn=e.id,yn=e.overflow,jo=r),r=pg(r,o.children),r.flags|=4096,r)}function Du(e,r,n){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r),qd(e.return,r,n)}function Xl(e,r,n,o,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:i}:(s.isBackwards=r,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=n,s.tailMode=i)}function Pm(e,r,n){var o=r.pendingProps,i=o.revealOrder,s=o.tail;if(ar(e,r,o.children,n),o=Wt.current,o&2)o=o&1|2,r.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Du(e,n,r);else if(e.tag===19)Du(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Tt(Wt,o),!(r.mode&1))r.memoizedState=null;else switch(i){case"forwards":for(n=r.child,i=null;n!==null;)e=n.alternate,e!==null&&Ga(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=r.child,r.child=null):(i=n.sibling,n.sibling=null),Xl(r,!1,i,n,s);break;case"backwards":for(n=null,i=r.child,r.child=null;i!==null;){if(e=i.alternate,e!==null&&Ga(e)===null){r.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Xl(r,!0,n,null,s);break;case"together":Xl(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ka(e,r){!(r.mode&1)&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Sn(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),wo|=r.lanes,!(n&r.childLanes))return null;if(e!==null&&r.child!==e.child)throw Error(Se(153));if(r.child!==null){for(e=r.child,n=Qn(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=Qn(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function ry(e,r,n){switch(r.tag){case 3:_m(r),ii();break;case 5:um(r);break;case 1:fr(r.type)&&_a(r);break;case 4:ig(r,r.stateNode.containerInfo);break;case 10:var o=r.type._context,i=r.memoizedProps.value;Tt(Na,o._currentValue),o._currentValue=i;break;case 13:if(o=r.memoizedState,o!==null)return o.dehydrated!==null?(Tt(Wt,Wt.current&1),r.flags|=128,null):n&r.child.childLanes?$m(e,r,n):(Tt(Wt,Wt.current&1),e=Sn(e,r,n),e!==null?e.sibling:null);Tt(Wt,Wt.current&1);break;case 19:if(o=(n&r.childLanes)!==0,e.flags&128){if(o)return Pm(e,r,n);r.flags|=128}if(i=r.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Tt(Wt,Wt.current),o)break;return null;case 22:case 23:return r.lanes=0,Mm(e,r,n)}return Sn(e,r,n)}var Nm,oc,Om,Hm;Nm=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};oc=function(){};Om=function(e,r,n,o){var i=e.memoizedProps;if(i!==o){e=r.stateNode,ho(sn.current);var s=null;switch(n){case"input":i=zd(e,i),o=zd(e,o),s=[];break;case"select":i=Lt({},i,{value:void 0}),o=Lt({},o,{value:void 0}),s=[];break;case"textarea":i=Bd(e,i),o=Bd(e,o),s=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Ma)}Ed(n,o);var a;n=null;for(g in i)if(!o.hasOwnProperty(g)&&i.hasOwnProperty(g)&&i[g]!=null)if(g==="style"){var l=i[g];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(ns.hasOwnProperty(g)?s||(s=[]):(s=s||[]).push(g,null));for(g in o){var d=o[g];if(l=i!=null?i[g]:void 0,o.hasOwnProperty(g)&&d!==l&&(d!=null||l!=null))if(g==="style")if(l){for(a in l)!l.hasOwnProperty(a)||d&&d.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in d)d.hasOwnProperty(a)&&l[a]!==d[a]&&(n||(n={}),n[a]=d[a])}else n||(s||(s=[]),s.push(g,n)),n=d;else g==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,l=l?l.__html:void 0,d!=null&&l!==d&&(s=s||[]).push(g,d)):g==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(g,""+d):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(ns.hasOwnProperty(g)?(d!=null&&g==="onScroll"&&Rt("scroll",e),s||l===d||(s=[])):(s=s||[]).push(g,d))}n&&(s=s||[]).push("style",n);var g=s;(r.updateQueue=g)&&(r.flags|=4)}};Hm=function(e,r,n,o){n!==o&&(r.flags|=4)};function zi(e,r){if(!Dt)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function er(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(r)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=n,r}function ny(e,r,n){var o=r.pendingProps;switch(Zc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return er(r),null;case 1:return fr(r.type)&&La(),er(r),null;case 3:return o=r.stateNode,ai(),Et(hr),Et(or),ag(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Ns(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Vr!==null&&(uc(Vr),Vr=null))),oc(e,r),er(r),null;case 5:sg(r);var i=ho(ms.current);if(n=r.type,e!==null&&r.stateNode!=null)Om(e,r,n,o,i),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!o){if(r.stateNode===null)throw Error(Se(166));return er(r),null}if(e=ho(sn.current),Ns(r)){o=r.stateNode,n=r.type;var s=r.memoizedProps;switch(o[nn]=r,o[ps]=s,e=(r.mode&1)!==0,n){case"dialog":Rt("cancel",o),Rt("close",o);break;case"iframe":case"object":case"embed":Rt("load",o);break;case"video":case"audio":for(i=0;i<Di.length;i++)Rt(Di[i],o);break;case"source":Rt("error",o);break;case"img":case"image":case"link":Rt("error",o),Rt("load",o);break;case"details":Rt("toggle",o);break;case"input":Hg(o,s),Rt("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},Rt("invalid",o);break;case"textarea":Ug(o,s),Rt("invalid",o)}Ed(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?o.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ps(o.textContent,l,e),i=["children",l]):typeof l=="number"&&o.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ps(o.textContent,l,e),i=["children",""+l]):ns.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Rt("scroll",o)}switch(n){case"input":As(o),Gg(o,s,!0);break;case"textarea":As(o),Vg(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=Ma)}o=i,r.updateQueue=o,o!==null&&(r.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fb(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=a.createElement(n,{is:o.is}):(e=a.createElement(n),n==="select"&&(a=e,o.multiple?a.multiple=!0:o.size&&(a.size=o.size))):e=a.createElementNS(e,n),e[nn]=r,e[ps]=o,Nm(e,r,!1,!1),r.stateNode=e;e:{switch(a=Ad(n,o),n){case"dialog":Rt("cancel",e),Rt("close",e),i=o;break;case"iframe":case"object":case"embed":Rt("load",e),i=o;break;case"video":case"audio":for(i=0;i<Di.length;i++)Rt(Di[i],e);i=o;break;case"source":Rt("error",e),i=o;break;case"img":case"image":case"link":Rt("error",e),Rt("load",e),i=o;break;case"details":Rt("toggle",e),i=o;break;case"input":Hg(e,o),i=zd(e,o),Rt("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=Lt({},o,{value:void 0}),Rt("invalid",e);break;case"textarea":Ug(e,o),i=Bd(e,o),Rt("invalid",e);break;default:i=o}Ed(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var d=l[s];s==="style"?vb(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&xb(e,d)):s==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&os(e,d):typeof d=="number"&&os(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ns.hasOwnProperty(s)?d!=null&&s==="onScroll"&&Rt("scroll",e):d!=null&&Lc(e,s,d,a))}switch(n){case"input":As(e),Gg(e,o,!1);break;case"textarea":As(e),Vg(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Xn(o.value));break;case"select":e.multiple=!!o.multiple,s=o.value,s!=null?Qo(e,!!o.multiple,s,!1):o.defaultValue!=null&&Qo(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ma)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return er(r),null;case 6:if(e&&r.stateNode!=null)Hm(e,r,e.memoizedProps,o);else{if(typeof o!="string"&&r.stateNode===null)throw Error(Se(166));if(n=ho(ms.current),ho(sn.current),Ns(r)){if(o=r.stateNode,n=r.memoizedProps,o[nn]=r,(s=o.nodeValue!==n)&&(e=Tr,e!==null))switch(e.tag){case 3:Ps(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ps(o.nodeValue,n,(e.mode&1)!==0)}s&&(r.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[nn]=r,r.stateNode=o}return er(r),null;case 13:if(Et(Wt),o=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Dt&&zr!==null&&r.mode&1&&!(r.flags&128))am(),ii(),r.flags|=98560,s=!1;else if(s=Ns(r),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(Se(318));if(s=r.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Se(317));s[nn]=r}else ii(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;er(r),s=!1}else Vr!==null&&(uc(Vr),Vr=null),s=!0;if(!s)return r.flags&65536?r:null}return r.flags&128?(r.lanes=n,r):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(r.child.flags|=8192,r.mode&1&&(e===null||Wt.current&1?Gt===0&&(Gt=3):yg())),r.updateQueue!==null&&(r.flags|=4),er(r),null);case 4:return ai(),oc(e,r),e===null&&gs(r.stateNode.containerInfo),er(r),null;case 10:return rg(r.type._context),er(r),null;case 17:return fr(r.type)&&La(),er(r),null;case 19:if(Et(Wt),s=r.memoizedState,s===null)return er(r),null;if(o=(r.flags&128)!==0,a=s.rendering,a===null)if(o)zi(s,!1);else{if(Gt!==0||e!==null&&e.flags&128)for(e=r.child;e!==null;){if(a=Ga(e),a!==null){for(r.flags|=128,zi(s,!1),o=a.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),r.subtreeFlags=0,o=n,n=r.child;n!==null;)s=n,e=o,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Tt(Wt,Wt.current&1|2),r.child}e=e.sibling}s.tail!==null&&Pt()>di&&(r.flags|=128,o=!0,zi(s,!1),r.lanes=4194304)}else{if(!o)if(e=Ga(a),e!==null){if(r.flags|=128,o=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),zi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Dt)return er(r),null}else 2*Pt()-s.renderingStartTime>di&&n!==1073741824&&(r.flags|=128,o=!0,zi(s,!1),r.lanes=4194304);s.isBackwards?(a.sibling=r.child,r.child=a):(n=s.last,n!==null?n.sibling=a:r.child=a,s.last=a)}return s.tail!==null?(r=s.tail,s.rendering=r,s.tail=r.sibling,s.renderingStartTime=Pt(),r.sibling=null,n=Wt.current,Tt(Wt,o?n&1|2:n&1),r):(er(r),null);case 22:case 23:return xg(),o=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(r.flags|=8192),o&&r.mode&1?Cr&1073741824&&(er(r),r.subtreeFlags&6&&(r.flags|=8192)):er(r),null;case 24:return null;case 25:return null}throw Error(Se(156,r.tag))}function oy(e,r){switch(Zc(r),r.tag){case 1:return fr(r.type)&&La(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return ai(),Et(hr),Et(or),ag(),e=r.flags,e&65536&&!(e&128)?(r.flags=e&-65537|128,r):null;case 5:return sg(r),null;case 13:if(Et(Wt),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(Se(340));ii()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return Et(Wt),null;case 4:return ai(),null;case 10:return rg(r.type._context),null;case 22:case 23:return xg(),null;case 24:return null;default:return null}}var Gs=!1,rr=!1,iy=typeof WeakSet=="function"?WeakSet:Set,Me=null;function Yo(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){$t(e,r,o)}else n.current=null}function ic(e,r,n){try{n()}catch(o){$t(e,r,o)}}var Wu=!1;function sy(e,r){if(Od=Fa,e=Kb(),qc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var i=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,d=-1,g=0,h=0,y=e,f=null;t:for(;;){for(var E;y!==n||i!==0&&y.nodeType!==3||(l=a+i),y!==s||o!==0&&y.nodeType!==3||(d=a+o),y.nodeType===3&&(a+=y.nodeValue.length),(E=y.firstChild)!==null;)f=y,y=E;for(;;){if(y===e)break t;if(f===n&&++g===i&&(l=a),f===s&&++h===o&&(d=a),(E=y.nextSibling)!==null)break;y=f,f=y.parentNode}y=E}n=l===-1||d===-1?null:{start:l,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hd={focusedElem:e,selectionRange:n},Fa=!1,Me=r;Me!==null;)if(r=Me,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,Me=e;else for(;Me!==null;){r=Me;try{var R=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var T=R.memoizedProps,z=R.memoizedState,m=r.stateNode,b=m.getSnapshotBeforeUpdate(r.elementType===r.type?T:Hr(r.type,T),z);m.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var u=r.stateNode.containerInfo;u.nodeType===1?u.textContent="":u.nodeType===9&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Se(163))}}catch(k){$t(r,r.return,k)}if(e=r.sibling,e!==null){e.return=r.return,Me=e;break}Me=r.return}return R=Wu,Wu=!1,R}function Yi(e,r,n){var o=r.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&ic(r,n,s)}i=i.next}while(i!==o)}}function ml(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==r)}}function sc(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function Gm(e){var r=e.alternate;r!==null&&(e.alternate=null,Gm(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[nn],delete r[ps],delete r[Vd],delete r[Ox],delete r[Hx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Um(e){return e.tag===5||e.tag===3||e.tag===4}function Mu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Um(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ac(e,r,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=Ma));else if(o!==4&&(e=e.child,e!==null))for(ac(e,r,n),e=e.sibling;e!==null;)ac(e,r,n),e=e.sibling}function lc(e,r,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(lc(e,r,n),e=e.sibling;e!==null;)lc(e,r,n),e=e.sibling}var Qt=null,Gr=!1;function Rn(e,r,n){for(n=n.child;n!==null;)Vm(e,r,n),n=n.sibling}function Vm(e,r,n){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(al,n)}catch{}switch(n.tag){case 5:rr||Yo(n,r);case 6:var o=Qt,i=Gr;Qt=null,Rn(e,r,n),Qt=o,Gr=i,Qt!==null&&(Gr?(e=Qt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Qt.removeChild(n.stateNode));break;case 18:Qt!==null&&(Gr?(e=Qt,n=n.stateNode,e.nodeType===8?Gl(e.parentNode,n):e.nodeType===1&&Gl(e,n),ls(e)):Gl(Qt,n.stateNode));break;case 4:o=Qt,i=Gr,Qt=n.stateNode.containerInfo,Gr=!0,Rn(e,r,n),Qt=o,Gr=i;break;case 0:case 11:case 14:case 15:if(!rr&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&ic(n,r,a),i=i.next}while(i!==o)}Rn(e,r,n);break;case 1:if(!rr&&(Yo(n,r),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(l){$t(n,r,l)}Rn(e,r,n);break;case 21:Rn(e,r,n);break;case 22:n.mode&1?(rr=(o=rr)||n.memoizedState!==null,Rn(e,r,n),rr=o):Rn(e,r,n);break;default:Rn(e,r,n)}}function Lu(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new iy),r.forEach(function(o){var i=my.bind(null,e,o);n.has(o)||(n.add(o),o.then(i,i))})}}function Pr(e,r){var n=r.deletions;if(n!==null)for(var o=0;o<n.length;o++){var i=n[o];try{var s=e,a=r,l=a;e:for(;l!==null;){switch(l.tag){case 5:Qt=l.stateNode,Gr=!1;break e;case 3:Qt=l.stateNode.containerInfo,Gr=!0;break e;case 4:Qt=l.stateNode.containerInfo,Gr=!0;break e}l=l.return}if(Qt===null)throw Error(Se(160));Vm(s,a,i),Qt=null,Gr=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(g){$t(i,r,g)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Ym(r,e),r=r.sibling}function Ym(e,r){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pr(r,e),Xr(e),o&4){try{Yi(3,e,e.return),ml(3,e)}catch(T){$t(e,e.return,T)}try{Yi(5,e,e.return)}catch(T){$t(e,e.return,T)}}break;case 1:Pr(r,e),Xr(e),o&512&&n!==null&&Yo(n,n.return);break;case 5:if(Pr(r,e),Xr(e),o&512&&n!==null&&Yo(n,n.return),e.flags&32){var i=e.stateNode;try{os(i,"")}catch(T){$t(e,e.return,T)}}if(o&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,l=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&mb(i,s),Ad(l,a);var g=Ad(l,s);for(a=0;a<d.length;a+=2){var h=d[a],y=d[a+1];h==="style"?vb(i,y):h==="dangerouslySetInnerHTML"?xb(i,y):h==="children"?os(i,y):Lc(i,h,y,g)}switch(l){case"input":Td(i,s);break;case"textarea":hb(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?Qo(i,!!s.multiple,E,!1):f!==!!s.multiple&&(s.defaultValue!=null?Qo(i,!!s.multiple,s.defaultValue,!0):Qo(i,!!s.multiple,s.multiple?[]:"",!1))}i[ps]=s}catch(T){$t(e,e.return,T)}}break;case 6:if(Pr(r,e),Xr(e),o&4){if(e.stateNode===null)throw Error(Se(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(T){$t(e,e.return,T)}}break;case 3:if(Pr(r,e),Xr(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{ls(r.containerInfo)}catch(T){$t(e,e.return,T)}break;case 4:Pr(r,e),Xr(e);break;case 13:Pr(r,e),Xr(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(hg=Pt())),o&4&&Lu(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(rr=(g=rr)||h,Pr(r,e),rr=g):Pr(r,e),Xr(e),o&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!h&&e.mode&1)for(Me=e,h=e.child;h!==null;){for(y=Me=h;Me!==null;){switch(f=Me,E=f.child,f.tag){case 0:case 11:case 14:case 15:Yi(4,f,f.return);break;case 1:Yo(f,f.return);var R=f.stateNode;if(typeof R.componentWillUnmount=="function"){o=f,n=f.return;try{r=o,R.props=r.memoizedProps,R.state=r.memoizedState,R.componentWillUnmount()}catch(T){$t(o,n,T)}}break;case 5:Yo(f,f.return);break;case 22:if(f.memoizedState!==null){$u(y);continue}}E!==null?(E.return=f,Me=E):$u(y)}h=h.sibling}e:for(h=null,y=e;;){if(y.tag===5){if(h===null){h=y;try{i=y.stateNode,g?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=y.stateNode,d=y.memoizedProps.style,a=d!=null&&d.hasOwnProperty("display")?d.display:null,l.style.display=yb("display",a))}catch(T){$t(e,e.return,T)}}}else if(y.tag===6){if(h===null)try{y.stateNode.nodeValue=g?"":y.memoizedProps}catch(T){$t(e,e.return,T)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;h===y&&(h=null),y=y.return}h===y&&(h=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Pr(r,e),Xr(e),o&4&&Lu(e);break;case 21:break;default:Pr(r,e),Xr(e)}}function Xr(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(Um(n)){var o=n;break e}n=n.return}throw Error(Se(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(os(i,""),o.flags&=-33);var s=Mu(e);lc(e,s,i);break;case 3:case 4:var a=o.stateNode.containerInfo,l=Mu(e);ac(e,l,a);break;default:throw Error(Se(161))}}catch(d){$t(e,e.return,d)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function ay(e,r,n){Me=e,Km(e)}function Km(e,r,n){for(var o=(e.mode&1)!==0;Me!==null;){var i=Me,s=i.child;if(i.tag===22&&o){var a=i.memoizedState!==null||Gs;if(!a){var l=i.alternate,d=l!==null&&l.memoizedState!==null||rr;l=Gs;var g=rr;if(Gs=a,(rr=d)&&!g)for(Me=i;Me!==null;)a=Me,d=a.child,a.tag===22&&a.memoizedState!==null?Pu(i):d!==null?(d.return=a,Me=d):Pu(i);for(;s!==null;)Me=s,Km(s),s=s.sibling;Me=i,Gs=l,rr=g}_u(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Me=s):_u(e)}}function _u(e){for(;Me!==null;){var r=Me;if(r.flags&8772){var n=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:rr||ml(5,r);break;case 1:var o=r.stateNode;if(r.flags&4&&!rr)if(n===null)o.componentDidMount();else{var i=r.elementType===r.type?n.memoizedProps:Hr(r.type,n.memoizedProps);o.componentDidUpdate(i,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=r.updateQueue;s!==null&&ku(r,s,o);break;case 3:var a=r.updateQueue;if(a!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}ku(r,a,n)}break;case 5:var l=r.stateNode;if(n===null&&r.flags&4){n=l;var d=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var g=r.alternate;if(g!==null){var h=g.memoizedState;if(h!==null){var y=h.dehydrated;y!==null&&ls(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Se(163))}rr||r.flags&512&&sc(r)}catch(f){$t(r,r.return,f)}}if(r===e){Me=null;break}if(n=r.sibling,n!==null){n.return=r.return,Me=n;break}Me=r.return}}function $u(e){for(;Me!==null;){var r=Me;if(r===e){Me=null;break}var n=r.sibling;if(n!==null){n.return=r.return,Me=n;break}Me=r.return}}function Pu(e){for(;Me!==null;){var r=Me;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{ml(4,r)}catch(d){$t(r,n,d)}break;case 1:var o=r.stateNode;if(typeof o.componentDidMount=="function"){var i=r.return;try{o.componentDidMount()}catch(d){$t(r,i,d)}}var s=r.return;try{sc(r)}catch(d){$t(r,s,d)}break;case 5:var a=r.return;try{sc(r)}catch(d){$t(r,a,d)}}}catch(d){$t(r,r.return,d)}if(r===e){Me=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Me=l;break}Me=r.return}}var ly=Math.ceil,Ya=Tn.ReactCurrentDispatcher,bg=Tn.ReactCurrentOwner,Lr=Tn.ReactCurrentBatchConfig,mt=0,Kt=null,Nt=null,Xt=0,Cr=0,Ko=eo(0),Gt=0,ys=null,wo=0,hl=0,mg=0,Ki=null,br=null,hg=0,di=1/0,pn=null,Ka=!1,dc=null,Yn=null,Us=!1,Nn=null,Qa=0,Qi=0,cc=null,wa=-1,Sa=0;function dr(){return mt&6?Pt():wa!==-1?wa:wa=Pt()}function Kn(e){return e.mode&1?mt&2&&Xt!==0?Xt&-Xt:Ux.transition!==null?(Sa===0&&(Sa=Ab()),Sa):(e=Ct,e!==0||(e=window.event,e=e===void 0?16:$b(e.type)),e):1}function Kr(e,r,n,o){if(50<Qi)throw Qi=0,cc=null,Error(Se(185));zs(e,n,o),(!(mt&2)||e!==Kt)&&(e===Kt&&(!(mt&2)&&(hl|=n),Gt===4&&_n(e,Xt)),xr(e,o),n===1&&mt===0&&!(r.mode&1)&&(di=Pt()+500,ul&&to()))}function xr(e,r){var n=e.callbackNode;Uf(e,r);var o=Aa(e,e===Kt?Xt:0);if(o===0)n!==null&&Qg(n),e.callbackNode=null,e.callbackPriority=0;else if(r=o&-o,e.callbackPriority!==r){if(n!=null&&Qg(n),r===1)e.tag===0?Gx(Nu.bind(null,e)):om(Nu.bind(null,e)),Px(function(){!(mt&6)&&to()}),n=null;else{switch(Fb(o)){case 1:n=Oc;break;case 4:n=Rb;break;case 16:n=Ea;break;case 536870912:n=Eb;break;default:n=Ea}n=rh(n,Qm.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function Qm(e,r){if(wa=-1,Sa=0,mt&6)throw Error(Se(327));var n=e.callbackNode;if(ei()&&e.callbackNode!==n)return null;var o=Aa(e,e===Kt?Xt:0);if(o===0)return null;if(o&30||o&e.expiredLanes||r)r=qa(e,o);else{r=o;var i=mt;mt|=2;var s=Xm();(Kt!==e||Xt!==r)&&(pn=null,di=Pt()+500,xo(e,r));do try{gy();break}catch(l){qm(e,l)}while(!0);tg(),Ya.current=s,mt=i,Nt!==null?r=0:(Kt=null,Xt=0,r=Gt)}if(r!==0){if(r===2&&(i=Ld(e),i!==0&&(o=i,r=gc(e,i))),r===1)throw n=ys,xo(e,0),_n(e,o),xr(e,Pt()),n;if(r===6)_n(e,o);else{if(i=e.current.alternate,!(o&30)&&!dy(i)&&(r=qa(e,o),r===2&&(s=Ld(e),s!==0&&(o=s,r=gc(e,s))),r===1))throw n=ys,xo(e,0),_n(e,o),xr(e,Pt()),n;switch(e.finishedWork=i,e.finishedLanes=o,r){case 0:case 1:throw Error(Se(345));case 2:go(e,br,pn);break;case 3:if(_n(e,o),(o&130023424)===o&&(r=hg+500-Pt(),10<r)){if(Aa(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){dr(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ud(go.bind(null,e,br,pn),r);break}go(e,br,pn);break;case 4:if(_n(e,o),(o&4194240)===o)break;for(r=e.eventTimes,i=-1;0<o;){var a=31-Yr(o);s=1<<a,a=r[a],a>i&&(i=a),o&=~s}if(o=i,o=Pt()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*ly(o/1960))-o,10<o){e.timeoutHandle=Ud(go.bind(null,e,br,pn),o);break}go(e,br,pn);break;case 5:go(e,br,pn);break;default:throw Error(Se(329))}}}return xr(e,Pt()),e.callbackNode===n?Qm.bind(null,e):null}function gc(e,r){var n=Ki;return e.current.memoizedState.isDehydrated&&(xo(e,r).flags|=256),e=qa(e,r),e!==2&&(r=br,br=n,r!==null&&uc(r)),e}function uc(e){br===null?br=e:br.push.apply(br,e)}function dy(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var i=n[o],s=i.getSnapshot;i=i.value;try{if(!Qr(s(),i))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function _n(e,r){for(r&=~mg,r&=~hl,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-Yr(r),o=1<<n;e[n]=-1,r&=~o}}function Nu(e){if(mt&6)throw Error(Se(327));ei();var r=Aa(e,0);if(!(r&1))return xr(e,Pt()),null;var n=qa(e,r);if(e.tag!==0&&n===2){var o=Ld(e);o!==0&&(r=o,n=gc(e,o))}if(n===1)throw n=ys,xo(e,0),_n(e,r),xr(e,Pt()),n;if(n===6)throw Error(Se(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,go(e,br,pn),xr(e,Pt()),null}function fg(e,r){var n=mt;mt|=1;try{return e(r)}finally{mt=n,mt===0&&(di=Pt()+500,ul&&to())}}function So(e){Nn!==null&&Nn.tag===0&&!(mt&6)&&ei();var r=mt;mt|=1;var n=Lr.transition,o=Ct;try{if(Lr.transition=null,Ct=1,e)return e()}finally{Ct=o,Lr.transition=n,mt=r,!(mt&6)&&to()}}function xg(){Cr=Ko.current,Et(Ko)}function xo(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$x(n)),Nt!==null)for(n=Nt.return;n!==null;){var o=n;switch(Zc(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&La();break;case 3:ai(),Et(hr),Et(or),ag();break;case 5:sg(o);break;case 4:ai();break;case 13:Et(Wt);break;case 19:Et(Wt);break;case 10:rg(o.type._context);break;case 22:case 23:xg()}n=n.return}if(Kt=e,Nt=e=Qn(e.current,null),Xt=Cr=r,Gt=0,ys=null,mg=hl=wo=0,br=Ki=null,mo!==null){for(r=0;r<mo.length;r++)if(n=mo[r],o=n.interleaved,o!==null){n.interleaved=null;var i=o.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,o.next=a}n.pending=o}mo=null}return e}function qm(e,r){do{var n=Nt;try{if(tg(),va.current=Va,Ua){for(var o=Mt.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}Ua=!1}if(ko=0,Yt=Ht=Mt=null,Vi=!1,hs=0,bg.current=null,n===null||n.return===null){Gt=1,ys=r,Nt=null;break}e:{var s=e,a=n.return,l=n,d=r;if(r=Xt,l.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var g=d,h=l,y=h.tag;if(!(h.mode&1)&&(y===0||y===11||y===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var E=Iu(a);if(E!==null){E.flags&=-257,Bu(E,a,l,s,r),E.mode&1&&Tu(s,g,r),r=E,d=g;var R=r.updateQueue;if(R===null){var T=new Set;T.add(d),r.updateQueue=T}else R.add(d);break e}else{if(!(r&1)){Tu(s,g,r),yg();break e}d=Error(Se(426))}}else if(Dt&&l.mode&1){var z=Iu(a);if(z!==null){!(z.flags&65536)&&(z.flags|=256),Bu(z,a,l,s,r),Jc(li(d,l));break e}}s=d=li(d,l),Gt!==4&&(Gt=2),Ki===null?Ki=[s]:Ki.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,r&=-r,s.lanes|=r;var m=Fm(s,d,r);ju(s,m);break e;case 1:l=d;var b=s.type,u=s.stateNode;if(!(s.flags&128)&&(typeof b.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Yn===null||!Yn.has(u)))){s.flags|=65536,r&=-r,s.lanes|=r;var k=Dm(s,l,r);ju(s,k);break e}}s=s.return}while(s!==null)}Jm(n)}catch(j){r=j,Nt===n&&n!==null&&(Nt=n=n.return);continue}break}while(!0)}function Xm(){var e=Ya.current;return Ya.current=Va,e===null?Va:e}function yg(){(Gt===0||Gt===3||Gt===2)&&(Gt=4),Kt===null||!(wo&268435455)&&!(hl&268435455)||_n(Kt,Xt)}function qa(e,r){var n=mt;mt|=2;var o=Xm();(Kt!==e||Xt!==r)&&(pn=null,xo(e,r));do try{cy();break}catch(i){qm(e,i)}while(!0);if(tg(),mt=n,Ya.current=o,Nt!==null)throw Error(Se(261));return Kt=null,Xt=0,Gt}function cy(){for(;Nt!==null;)Zm(Nt)}function gy(){for(;Nt!==null&&!Mf();)Zm(Nt)}function Zm(e){var r=th(e.alternate,e,Cr);e.memoizedProps=e.pendingProps,r===null?Jm(e):Nt=r,bg.current=null}function Jm(e){var r=e;do{var n=r.alternate;if(e=r.return,r.flags&32768){if(n=oy(n,r),n!==null){n.flags&=32767,Nt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Gt=6,Nt=null;return}}else if(n=ny(n,r,Cr),n!==null){Nt=n;return}if(r=r.sibling,r!==null){Nt=r;return}Nt=r=e}while(r!==null);Gt===0&&(Gt=5)}function go(e,r,n){var o=Ct,i=Lr.transition;try{Lr.transition=null,Ct=1,uy(e,r,n,o)}finally{Lr.transition=i,Ct=o}return null}function uy(e,r,n,o){do ei();while(Nn!==null);if(mt&6)throw Error(Se(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(Se(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Vf(e,s),e===Kt&&(Nt=Kt=null,Xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Us||(Us=!0,rh(Ea,function(){return ei(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Lr.transition,Lr.transition=null;var a=Ct;Ct=1;var l=mt;mt|=4,bg.current=null,sy(e,n),Ym(n,e),Ax(Hd),Fa=!!Od,Hd=Od=null,e.current=n,ay(n),Lf(),mt=l,Ct=a,Lr.transition=s}else e.current=n;if(Us&&(Us=!1,Nn=e,Qa=i),s=e.pendingLanes,s===0&&(Yn=null),Pf(n.stateNode),xr(e,Pt()),r!==null)for(o=e.onRecoverableError,n=0;n<r.length;n++)i=r[n],o(i.value,{componentStack:i.stack,digest:i.digest});if(Ka)throw Ka=!1,e=dc,dc=null,e;return Qa&1&&e.tag!==0&&ei(),s=e.pendingLanes,s&1?e===cc?Qi++:(Qi=0,cc=e):Qi=0,to(),null}function ei(){if(Nn!==null){var e=Fb(Qa),r=Lr.transition,n=Ct;try{if(Lr.transition=null,Ct=16>e?16:e,Nn===null)var o=!1;else{if(e=Nn,Nn=null,Qa=0,mt&6)throw Error(Se(331));var i=mt;for(mt|=4,Me=e.current;Me!==null;){var s=Me,a=s.child;if(Me.flags&16){var l=s.deletions;if(l!==null){for(var d=0;d<l.length;d++){var g=l[d];for(Me=g;Me!==null;){var h=Me;switch(h.tag){case 0:case 11:case 15:Yi(8,h,s)}var y=h.child;if(y!==null)y.return=h,Me=y;else for(;Me!==null;){h=Me;var f=h.sibling,E=h.return;if(Gm(h),h===g){Me=null;break}if(f!==null){f.return=E,Me=f;break}Me=E}}}var R=s.alternate;if(R!==null){var T=R.child;if(T!==null){R.child=null;do{var z=T.sibling;T.sibling=null,T=z}while(T!==null)}}Me=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Me=a;else e:for(;Me!==null;){if(s=Me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Yi(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,Me=m;break e}Me=s.return}}var b=e.current;for(Me=b;Me!==null;){a=Me;var u=a.child;if(a.subtreeFlags&2064&&u!==null)u.return=a,Me=u;else e:for(a=b;Me!==null;){if(l=Me,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ml(9,l)}}catch(j){$t(l,l.return,j)}if(l===a){Me=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,Me=k;break e}Me=l.return}}if(mt=i,to(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(al,e)}catch{}o=!0}return o}finally{Ct=n,Lr.transition=r}}return!1}function Ou(e,r,n){r=li(n,r),r=Fm(e,r,1),e=Vn(e,r,1),r=dr(),e!==null&&(zs(e,1,r),xr(e,r))}function $t(e,r,n){if(e.tag===3)Ou(e,e,n);else for(;r!==null;){if(r.tag===3){Ou(r,e,n);break}else if(r.tag===1){var o=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Yn===null||!Yn.has(o))){e=li(n,e),e=Dm(r,e,1),r=Vn(r,e,1),e=dr(),r!==null&&(zs(r,1,e),xr(r,e));break}}r=r.return}}function py(e,r,n){var o=e.pingCache;o!==null&&o.delete(r),r=dr(),e.pingedLanes|=e.suspendedLanes&n,Kt===e&&(Xt&n)===n&&(Gt===4||Gt===3&&(Xt&130023424)===Xt&&500>Pt()-hg?xo(e,0):mg|=n),xr(e,r)}function eh(e,r){r===0&&(e.mode&1?(r=Ws,Ws<<=1,!(Ws&130023424)&&(Ws=4194304)):r=1);var n=dr();e=wn(e,r),e!==null&&(zs(e,r,n),xr(e,n))}function by(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),eh(e,n)}function my(e,r){var n=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(Se(314))}o!==null&&o.delete(r),eh(e,n)}var th;th=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||hr.current)mr=!0;else{if(!(e.lanes&n)&&!(r.flags&128))return mr=!1,ry(e,r,n);mr=!!(e.flags&131072)}else mr=!1,Dt&&r.flags&1048576&&im(r,Pa,r.index);switch(r.lanes=0,r.tag){case 2:var o=r.type;ka(e,r),e=r.pendingProps;var i=oi(r,or.current);Jo(r,n),i=dg(null,r,o,e,i,n);var s=cg();return r.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,fr(o)?(s=!0,_a(r)):s=!1,r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,og(r),i.updater=bl,r.stateNode=i,i._reactInternals=r,Zd(r,o,e,n),r=tc(null,r,o,!0,s,n)):(r.tag=0,Dt&&s&&Xc(r),ar(null,r,i,n),r=r.child),r;case 16:o=r.elementType;e:{switch(ka(e,r),e=r.pendingProps,i=o._init,o=i(o._payload),r.type=o,i=r.tag=fy(o),e=Hr(o,e),i){case 0:r=ec(null,r,o,e,n);break e;case 1:r=Au(null,r,o,e,n);break e;case 11:r=Ru(null,r,o,e,n);break e;case 14:r=Eu(null,r,o,Hr(o.type,e),n);break e}throw Error(Se(306,o,""))}return r;case 0:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Hr(o,i),ec(e,r,o,i,n);case 1:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Hr(o,i),Au(e,r,o,i,n);case 3:e:{if(_m(r),e===null)throw Error(Se(387));o=r.pendingProps,s=r.memoizedState,i=s.element,gm(e,r),Ha(r,o,null,n);var a=r.memoizedState;if(o=a.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},r.updateQueue.baseState=s,r.memoizedState=s,r.flags&256){i=li(Error(Se(423)),r),r=Fu(e,r,o,n,i);break e}else if(o!==i){i=li(Error(Se(424)),r),r=Fu(e,r,o,n,i);break e}else for(zr=Un(r.stateNode.containerInfo.firstChild),Tr=r,Dt=!0,Vr=null,n=dm(r,null,o,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ii(),o===i){r=Sn(e,r,n);break e}ar(e,r,o,n)}r=r.child}return r;case 5:return um(r),e===null&&Qd(r),o=r.type,i=r.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,Gd(o,i)?a=null:s!==null&&Gd(o,s)&&(r.flags|=32),Lm(e,r),ar(e,r,a,n),r.child;case 6:return e===null&&Qd(r),null;case 13:return $m(e,r,n);case 4:return ig(r,r.stateNode.containerInfo),o=r.pendingProps,e===null?r.child=si(r,null,o,n):ar(e,r,o,n),r.child;case 11:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Hr(o,i),Ru(e,r,o,i,n);case 7:return ar(e,r,r.pendingProps,n),r.child;case 8:return ar(e,r,r.pendingProps.children,n),r.child;case 12:return ar(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(o=r.type._context,i=r.pendingProps,s=r.memoizedProps,a=i.value,Tt(Na,o._currentValue),o._currentValue=a,s!==null)if(Qr(s.value,a)){if(s.children===i.children&&!hr.current){r=Sn(e,r,n);break e}}else for(s=r.child,s!==null&&(s.return=r);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var d=l.firstContext;d!==null;){if(d.context===o){if(s.tag===1){d=vn(-1,n&-n),d.tag=2;var g=s.updateQueue;if(g!==null){g=g.shared;var h=g.pending;h===null?d.next=d:(d.next=h.next,h.next=d),g.pending=d}}s.lanes|=n,d=s.alternate,d!==null&&(d.lanes|=n),qd(s.return,n,r),l.lanes|=n;break}d=d.next}}else if(s.tag===10)a=s.type===r.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(Se(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),qd(a,n,r),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===r){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}ar(e,r,i.children,n),r=r.child}return r;case 9:return i=r.type,o=r.pendingProps.children,Jo(r,n),i=_r(i),o=o(i),r.flags|=1,ar(e,r,o,n),r.child;case 14:return o=r.type,i=Hr(o,r.pendingProps),i=Hr(o.type,i),Eu(e,r,o,i,n);case 15:return Wm(e,r,r.type,r.pendingProps,n);case 17:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Hr(o,i),ka(e,r),r.tag=1,fr(o)?(e=!0,_a(r)):e=!1,Jo(r,n),Am(r,o,i),Zd(r,o,i,n),tc(null,r,o,!0,e,n);case 19:return Pm(e,r,n);case 22:return Mm(e,r,n)}throw Error(Se(156,r.tag))};function rh(e,r){return Bb(e,r)}function hy(e,r,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mr(e,r,n,o){return new hy(e,r,n,o)}function vg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fy(e){if(typeof e=="function")return vg(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$c)return 11;if(e===Pc)return 14}return 2}function Qn(e,r){var n=e.alternate;return n===null?(n=Mr(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ca(e,r,n,o,i,s){var a=2;if(o=e,typeof e=="function")vg(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case _o:return yo(n.children,i,s,r);case _c:a=8,i|=8;break;case kd:return e=Mr(12,n,r,i|2),e.elementType=kd,e.lanes=s,e;case wd:return e=Mr(13,n,r,i),e.elementType=wd,e.lanes=s,e;case Sd:return e=Mr(19,n,r,i),e.elementType=Sd,e.lanes=s,e;case ub:return fl(n,i,s,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cb:a=10;break e;case gb:a=9;break e;case $c:a=11;break e;case Pc:a=14;break e;case Dn:a=16,o=null;break e}throw Error(Se(130,e==null?e:typeof e,""))}return r=Mr(a,n,r,i),r.elementType=e,r.type=o,r.lanes=s,r}function yo(e,r,n,o){return e=Mr(7,e,o,r),e.lanes=n,e}function fl(e,r,n,o){return e=Mr(22,e,o,r),e.elementType=ub,e.lanes=n,e.stateNode={isHidden:!1},e}function Zl(e,r,n){return e=Mr(6,e,null,r),e.lanes=n,e}function Jl(e,r,n){return r=Mr(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function xy(e,r,n,o,i){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fl(0),this.expirationTimes=Fl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fl(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function jg(e,r,n,o,i,s,a,l,d){return e=new xy(e,r,n,l,d),r===1?(r=1,s===!0&&(r|=8)):r=0,s=Mr(3,null,null,r),e.current=s,s.stateNode=e,s.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},og(s),e}function yy(e,r,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Lo,key:o==null?null:""+o,children:e,containerInfo:r,implementation:n}}function nh(e){if(!e)return Zn;e=e._reactInternals;e:{if(zo(e)!==e||e.tag!==1)throw Error(Se(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(fr(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(Se(171))}if(e.tag===1){var n=e.type;if(fr(n))return nm(e,n,r)}return r}function oh(e,r,n,o,i,s,a,l,d){return e=jg(n,o,!0,e,i,s,a,l,d),e.context=nh(null),n=e.current,o=dr(),i=Kn(n),s=vn(o,i),s.callback=r??null,Vn(n,s,i),e.current.lanes=i,zs(e,i,o),xr(e,o),e}function xl(e,r,n,o){var i=r.current,s=dr(),a=Kn(i);return n=nh(n),r.context===null?r.context=n:r.pendingContext=n,r=vn(s,a),r.payload={element:e},o=o===void 0?null:o,o!==null&&(r.callback=o),e=Vn(i,r,a),e!==null&&(Kr(e,i,a,s),ya(e,i,a)),a}function Xa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hu(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function kg(e,r){Hu(e,r),(e=e.alternate)&&Hu(e,r)}function vy(){return null}var ih=typeof reportError=="function"?reportError:function(e){console.error(e)};function wg(e){this._internalRoot=e}yl.prototype.render=wg.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(Se(409));xl(e,r,null,null)};yl.prototype.unmount=wg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;So(function(){xl(null,e,null,null)}),r[kn]=null}};function yl(e){this._internalRoot=e}yl.prototype.unstable_scheduleHydration=function(e){if(e){var r=Mb();e={blockedOn:null,target:e,priority:r};for(var n=0;n<Ln.length&&r!==0&&r<Ln[n].priority;n++);Ln.splice(n,0,e),n===0&&_b(e)}};function Sg(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gu(){}function jy(e,r,n,o,i){if(i){if(typeof o=="function"){var s=o;o=function(){var g=Xa(a);s.call(g)}}var a=oh(r,o,e,0,null,!1,!1,"",Gu);return e._reactRootContainer=a,e[kn]=a.current,gs(e.nodeType===8?e.parentNode:e),So(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var l=o;o=function(){var g=Xa(d);l.call(g)}}var d=jg(e,0,!1,null,null,!1,!1,"",Gu);return e._reactRootContainer=d,e[kn]=d.current,gs(e.nodeType===8?e.parentNode:e),So(function(){xl(r,d,n,o)}),d}function jl(e,r,n,o,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var d=Xa(a);l.call(d)}}xl(r,a,e,i)}else a=jy(n,r,e,i,o);return Xa(a)}Db=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=Fi(r.pendingLanes);n!==0&&(Hc(r,n|1),xr(r,Pt()),!(mt&6)&&(di=Pt()+500,to()))}break;case 13:So(function(){var o=wn(e,1);if(o!==null){var i=dr();Kr(o,e,1,i)}}),kg(e,1)}};Gc=function(e){if(e.tag===13){var r=wn(e,134217728);if(r!==null){var n=dr();Kr(r,e,134217728,n)}kg(e,134217728)}};Wb=function(e){if(e.tag===13){var r=Kn(e),n=wn(e,r);if(n!==null){var o=dr();Kr(n,e,r,o)}kg(e,r)}};Mb=function(){return Ct};Lb=function(e,r){var n=Ct;try{return Ct=e,r()}finally{Ct=n}};Dd=function(e,r,n){switch(r){case"input":if(Td(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var o=n[r];if(o!==e&&o.form===e.form){var i=gl(o);if(!i)throw Error(Se(90));bb(o),Td(o,i)}}}break;case"textarea":hb(e,n);break;case"select":r=n.value,r!=null&&Qo(e,!!n.multiple,r,!1)}};wb=fg;Sb=So;var ky={usingClientEntryPoint:!1,Events:[Is,Oo,gl,jb,kb,fg]},Ti={findFiberByHostInstance:bo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wy={bundleType:Ti.bundleType,version:Ti.version,rendererPackageName:Ti.rendererPackageName,rendererConfig:Ti.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tb(e),e===null?null:e.stateNode},findFiberByHostInstance:Ti.findFiberByHostInstance||vy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vs.isDisabled&&Vs.supportsFiber)try{al=Vs.inject(wy),on=Vs}catch{}}Br.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ky;Br.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sg(r))throw Error(Se(200));return yy(e,r,null,n)};Br.createRoot=function(e,r){if(!Sg(e))throw Error(Se(299));var n=!1,o="",i=ih;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),r=jg(e,1,!1,null,null,n,!1,o,i),e[kn]=r.current,gs(e.nodeType===8?e.parentNode:e),new wg(r)};Br.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(Se(188)):(e=Object.keys(e).join(","),Error(Se(268,e)));return e=Tb(r),e=e===null?null:e.stateNode,e};Br.flushSync=function(e){return So(e)};Br.hydrate=function(e,r,n){if(!vl(r))throw Error(Se(200));return jl(null,e,r,!0,n)};Br.hydrateRoot=function(e,r,n){if(!Sg(e))throw Error(Se(405));var o=n!=null&&n.hydratedSources||null,i=!1,s="",a=ih;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),r=oh(r,null,e,1,n??null,i,!1,s,a),e[kn]=r.current,gs(e),o)for(e=0;e<o.length;e++)n=o[e],i=n._getVersion,i=i(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,i]:r.mutableSourceEagerHydrationData.push(n,i);return new yl(r)};Br.render=function(e,r,n){if(!vl(r))throw Error(Se(200));return jl(null,e,r,!1,n)};Br.unmountComponentAtNode=function(e){if(!vl(e))throw Error(Se(40));return e._reactRootContainer?(So(function(){jl(null,null,e,!1,function(){e._reactRootContainer=null,e[kn]=null})}),!0):!1};Br.unstable_batchedUpdates=fg;Br.unstable_renderSubtreeIntoContainer=function(e,r,n,o){if(!vl(n))throw Error(Se(200));if(e==null||e._reactInternals===void 0)throw Error(Se(38));return jl(e,r,n,!1,o)};Br.version="18.3.1-next-f1338f8080-20240426";function sh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sh)}catch(e){console.error(e)}}sh(),sb.exports=Br;var Sy=sb.exports,ah,Uu=Sy;ah=Uu.createRoot,Uu.hydrateRoot;/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),lh=(...e)=>e.filter((r,n,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===n).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var zy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=c.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:i="",children:s,iconNode:a,...l},d)=>c.createElement("svg",{ref:d,...zy,width:r,height:r,stroke:e,strokeWidth:o?Number(n)*24/Number(r):n,className:lh("lucide",i),...l},[...a.map(([g,h])=>c.createElement(g,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=(e,r)=>{const n=c.forwardRef(({className:o,...i},s)=>c.createElement(Ty,{ref:s,iconNode:r,className:lh(`lucide-${Cy(e)}`,o),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=ue("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=ue("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=ue("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=ue("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=ue("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=ue("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=ue("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=ue("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=ue("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=ue("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=ue("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=ue("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=ue("Bus",[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=ue("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=ue("CalendarClock",[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=ue("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=ue("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=ue("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=ue("Carrot",[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",key:"rfqxbe"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",key:"6b25w4"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",key:"fn65lo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=ue("ChartCandlestick",[["path",{d:"M9 5v4",key:"14uxtq"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1",key:"f4fvz0"}],["path",{d:"M9 15v2",key:"r5rk32"}],["path",{d:"M17 3v2",key:"1l2re6"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1",key:"z38je5"}],["path",{d:"M17 13v3",key:"5l0wba"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=ue("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=ue("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=ue("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=ue("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=ue("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=ue("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=ue("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=ue("Clapperboard",[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=ue("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=ue("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=ue("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=ue("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=ue("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=ue("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=ue("Dumbbell",[["path",{d:"M14.4 14.4 9.6 9.6",key:"ic80wn"}],["path",{d:"M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z",key:"nnl7wr"}],["path",{d:"m21.5 21.5-1.4-1.4",key:"1f1ice"}],["path",{d:"M3.9 3.9 2.5 2.5",key:"1evmna"}],["path",{d:"M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z",key:"yhosts"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=ue("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=ue("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=ue("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=ue("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=ue("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=ue("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=ue("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"7cu91f"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=ue("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=ue("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=ue("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=ue("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=ue("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=ue("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=ue("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=ue("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=ue("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=ue("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=ue("Images",[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=ue("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=ue("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=ue("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=ue("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=ue("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=ue("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=ue("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=ue("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=ue("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=ue("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=ue("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=ue("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=ue("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=ue("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=ue("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=ue("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=ue("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=ue("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=ue("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=ue("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=ue("PartyPopper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"hbicv8"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",key:"1i94pl"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",key:"1cofks"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=ue("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=ue("PawPrint",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=ue("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=ue("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=ue("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=ue("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=ue("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=ue("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=ue("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=ue("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=ue("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=ue("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=ue("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=ue("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=ue("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=ue("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=ue("ScrollText",[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=ue("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=ue("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=ue("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=ue("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=ue("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=ue("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=ue("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=ue("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=ue("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=ue("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=ue("Swords",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=ue("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=ue("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=ue("TramFront",[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=ue("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=ue("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=ue("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=ue("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=ue("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=ue("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=ue("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=ue("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=ue("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=ue("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=ue("WashingMachine",[["path",{d:"M3 6h3",key:"155dbl"}],["path",{d:"M17 6h.01",key:"e2y6kg"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2",key:"od3kk9"}],["circle",{cx:"12",cy:"13",r:"5",key:"nlbqau"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5",key:"17lach"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=ue("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=ue("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=ue("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=ue("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=ue("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Fg="anvil_token",Bh=()=>localStorage.getItem(Fg),F0=e=>localStorage.setItem(Fg,e),fc=()=>localStorage.removeItem(Fg),te=async(e,r,n)=>{const o={};n!==void 0&&(o["Content-Type"]="application/json");const i=Bh();i&&(o.Authorization=`Bearer ${i}`);const s=await fetch(`/api${r}`,{method:e,headers:o,body:n!==void 0?JSON.stringify(n):void 0});if(s.status===401)throw fc(),window.dispatchEvent(new Event("anvil-unauthorized")),new Error("Not authenticated");if(s.status===204)return null;if(!s.ok){const a=await s.text();let l=a;try{l=JSON.parse(a).detail||a}catch{}throw new Error(l||`HTTP ${s.status}`)}return s.json()},F={me:()=>te("GET","/auth/me"),signInWithGoogle:()=>{window.location.href="/api/auth/google"},getPillars:()=>te("GET","/pillars"),getFocus:()=>te("GET","/focus"),createFocus:e=>te("POST","/focus",e),deleteFocus:e=>te("DELETE",`/focus/${e}`),addScreenTime:(e,r)=>te("POST","/screentime",{screen:e,seconds:r}),getScreenTime:()=>te("GET","/screentime"),getPayouts:()=>te("GET","/rewards/payouts"),createPayout:e=>te("POST","/rewards/payouts",e),deletePayout:e=>te("DELETE",`/rewards/payouts/${e}`),getRewardRates:()=>te("GET","/rewards/rates"),setRewardRate:e=>te("POST","/rewards/rates",e),getMedia:()=>te("GET","/media"),createMedia:e=>te("POST","/media",e),updateMedia:(e,r)=>te("PUT",`/media/${e}`,r),deleteMedia:e=>te("DELETE",`/media/${e}`),restoreMedia:e=>te("POST",`/media/${e}/restore`),getDecks:()=>te("GET","/spiritual/decks"),createDeck:e=>te("POST","/spiritual/decks",e),deleteDeck:e=>te("DELETE",`/spiritual/decks/${e}`),getGoldenGoals:()=>te("GET","/golden/goals"),getGoldenGoal:e=>te("GET",`/golden/goals/${e}`),createGolden:e=>te("POST","/golden/goals",e),updateGolden:(e,r)=>te("PUT",`/golden/goals/${e}`,r),achieveGolden:e=>te("POST",`/golden/goals/${e}/achieve`),unachieveGolden:e=>te("POST",`/golden/goals/${e}/unachieve`),upsertGoldenEntry:(e,r)=>te("PUT",`/golden/goals/${e}/entry`,r),deleteGolden:e=>te("DELETE",`/golden/goals/${e}`),restoreGolden:e=>te("POST",`/golden/goals/${e}/restore`),logTesla369:e=>te("POST",`/golden/goals/${e}/369/log`),undoTesla369:e=>te("DELETE",`/golden/goals/${e}/369/log`),getKickstart:()=>te("GET","/kickstart/videos"),createKickstart:e=>te("POST","/kickstart/videos",e),updateKickstart:(e,r)=>te("PUT",`/kickstart/videos/${e}`,r),deleteKickstart:e=>te("DELETE",`/kickstart/videos/${e}`),restoreKickstart:e=>te("POST",`/kickstart/videos/${e}/restore`),getTxns:()=>te("GET","/finance/txns"),createTxn:e=>te("POST","/finance/txns",e),updateTxn:(e,r)=>te("PUT",`/finance/txns/${e}`,r),deleteTxn:e=>te("DELETE",`/finance/txns/${e}`),restoreTxn:e=>te("POST",`/finance/txns/${e}/restore`),getInvestments:()=>te("GET","/finance/investments"),createInvestment:e=>te("POST","/finance/investments",e),updateInvestment:(e,r)=>te("PUT",`/finance/investments/${e}`,r),deleteInvestment:e=>te("DELETE",`/finance/investments/${e}`),restoreInvestment:e=>te("POST",`/finance/investments/${e}/restore`),getFixedItems:()=>te("GET","/finance/fixed-items"),createFixedItem:e=>te("POST","/finance/fixed-items",e),updateFixedItem:(e,r)=>te("PUT",`/finance/fixed-items/${e}`,r),deleteFixedItem:e=>te("DELETE",`/finance/fixed-items/${e}`),getExpenses:()=>te("GET","/expenses"),createExpenseCategory:e=>te("POST","/expenses/categories",e),updateExpenseCategory:(e,r)=>te("PUT",`/expenses/categories/${e}`,r),arrangeExpenseCategories:e=>te("PUT","/expenses/categories/arrange",{order:e}),deleteExpenseCategory:e=>te("DELETE",`/expenses/categories/${e}`),createExpenseLog:e=>te("POST","/expenses/logs",e),updateExpenseLog:(e,r)=>te("PUT",`/expenses/logs/${e}`,r),deleteExpenseLog:e=>te("DELETE",`/expenses/logs/${e}`),restoreExpenseLog:e=>te("POST",`/expenses/logs/${e}/restore`),getTrades:()=>te("GET","/trades"),createTradeEntry:e=>te("POST","/trades/entries",e),updateTradeEntry:(e,r)=>te("PUT",`/trades/entries/${e}`,r),bookTradeEntry:(e,r,n)=>te("POST",`/trades/entries/${e}/book`,{outcome:r,date:n}),reopenTradeEntry:e=>te("POST",`/trades/entries/${e}/reopen`),deleteTradeEntry:e=>te("DELETE",`/trades/entries/${e}`),setTradeLearning:(e,r)=>te("PUT","/trades/learning",{date:e,learning:r}),getSetting:e=>te("GET",`/settings/${e}`),setSetting:(e,r)=>te("PUT",`/settings/${e}`,{value:r}),getTasks:()=>te("GET","/tasks"),createTask:e=>te("POST","/tasks",e),updateTask:(e,r)=>te("PUT",`/tasks/${e}`,r),deleteTask:e=>te("DELETE",`/tasks/${e}`),restoreTask:e=>te("POST",`/tasks/${e}/restore`),scheduleTask:e=>te("PUT",`/tasks/${e}/schedule`),getGoals:e=>te("GET",`/goals${e?`?pillar=${encodeURIComponent(e)}`:""}`),createGoal:e=>te("POST","/goals",e),updateGoal:(e,r)=>te("PUT",`/goals/${e}`,r),deleteGoal:e=>te("DELETE",`/goals/${e}`),restoreGoal:e=>te("POST",`/goals/${e}/restore`),getHabits:()=>te("GET","/habits"),createHabit:e=>te("POST","/habits",e),updateHabit:(e,r)=>te("PUT",`/habits/${e}`,r),deleteHabit:e=>te("DELETE",`/habits/${e}`),restoreHabit:e=>te("POST",`/habits/${e}/restore`),toggleHabitLog:(e,r)=>te("POST",`/habits/${e}/log/${r}`),setHabitLogNote:(e,r,n)=>te("PUT",`/habits/${e}/log/${r}/note`,{note:n}),setHabitLogCount:(e,r,n,o)=>te("PUT",`/habits/${e}/log/${r}/count`,{count:n,note:o}),incrementHabitLog:(e,r)=>te("POST",`/habits/${e}/log/${r}/increment`),clearHabitLog:(e,r)=>te("DELETE",`/habits/${e}/log/${r}`),getHabitsYearly:e=>te("GET",`/habits/yearly/${e}`),getJournalEntry:e=>te("GET",`/journal/${e}`),getJournalHistory:(e,r)=>te("GET",`/journal/history/${e}/${r}`),updateJournalMood:(e,r)=>te("PUT",`/journal/${e}`,{mood:r}),addJournalBullet:(e,r,n)=>te("POST",`/journal/${e}/bullets`,{section:r,text:n}),deleteJournalBullet:e=>te("DELETE",`/journal/bullets/${e}`),getSkills:()=>te("GET","/skills"),createSkill:e=>te("POST","/skills",e),updateSkill:(e,r)=>te("PUT",`/skills/${e}`,r),deleteSkill:e=>te("DELETE",`/skills/${e}`),restoreSkill:e=>te("POST",`/skills/${e}/restore`),addSkillNote:(e,r,n,o=null)=>te("POST",`/skills/${e}/notes`,{stage:r,text:n,grp:o}),setSkillGroups:(e,r)=>te("PUT",`/skills/${e}/groups`,{groups:r}),deleteSkillNote:e=>te("DELETE",`/skill-notes/${e}`),updateSkillNote:(e,r)=>te("PUT",`/skill-notes/${e}`,{text:r}),toggleSkillNote:e=>te("PUT",`/skill-notes/${e}/toggle`),completeSkillStage:(e,r)=>te("POST",`/skills/${e}/complete-stage`,{stage:r}),getScriptures:()=>te("GET","/scriptures"),createScripture:e=>te("POST","/scriptures",e),deleteScripture:e=>te("DELETE",`/scriptures/${e}`),restoreScripture:e=>te("POST",`/scriptures/${e}/restore`),addChapter:(e,r)=>te("POST",`/scriptures/${e}/chapters`,r),updateChapter:(e,r)=>te("PUT",`/chapters/${e}`,r),deleteChapter:e=>te("DELETE",`/chapters/${e}`),restoreChapter:e=>te("POST",`/chapters/${e}/restore`),addInsight:(e,r)=>te("POST",`/chapters/${e}/insights`,{text:r}),deleteInsight:e=>te("DELETE",`/insights/${e}`),getTopics:()=>te("GET","/revision/topics"),createTopic:e=>te("POST","/revision/topics",e),updateTopic:(e,r)=>te("PUT",`/revision/topics/${e}`,r),deleteTopic:e=>te("DELETE",`/revision/topics/${e}`),restoreTopic:e=>te("POST",`/revision/topics/${e}/restore`),getDueToday:()=>te("GET","/revision/due-today"),getCalendar:(e,r)=>te("GET",`/revision/calendar/${e}/${r}`),toggleReviewDone:e=>te("PUT",`/revision/reviews/${e}/done`),getAffirmations:()=>te("GET","/affirmations"),createAffirmation:e=>te("POST","/affirmations",e),updateAffirmation:(e,r)=>te("PUT",`/affirmations/${e}`,r),deleteAffirmation:e=>te("DELETE",`/affirmations/${e}`),restoreAffirmation:e=>te("POST",`/affirmations/${e}/restore`),getBucket:()=>te("GET","/bucket"),createBucketWish:e=>te("POST","/bucket",e),updateBucketWish:(e,r)=>te("PUT",`/bucket/${e}`,r),fulfillBucketWish:e=>te("POST",`/bucket/${e}/fulfill`),arrangeBucket:e=>te("PUT","/bucket/arrange",{order:e}),deleteBucketWish:e=>te("DELETE",`/bucket/${e}`),restoreBucketWish:e=>te("POST",`/bucket/${e}/restore`),getChallenges:()=>te("GET","/challenges"),createChallenge:e=>te("POST","/challenges",e),updateChallenge:(e,r)=>te("PUT",`/challenges/${e}`,r),deleteChallenge:e=>te("DELETE",`/challenges/${e}`),restoreChallenge:e=>te("POST",`/challenges/${e}/restore`),getAchievements:()=>te("GET","/achievements"),createAchievement:e=>te("POST","/achievements",e),updateAchievement:(e,r)=>te("PUT",`/achievements/${e}`,r),deleteAchievement:e=>te("DELETE",`/achievements/${e}`),restoreAchievement:e=>te("POST",`/achievements/${e}/restore`),getDelight:()=>te("GET","/delight"),createCollection:e=>te("POST","/delight/collections",e),updateCollection:(e,r)=>te("PUT",`/delight/collections/${e}`,r),deleteCollection:e=>te("DELETE",`/delight/collections/${e}`),restoreCollection:e=>te("POST",`/delight/collections/${e}/restore`),createDelightItem:(e,r)=>te("POST",`/delight/collections/${e}/items`,r),updateDelightItem:(e,r)=>te("PUT",`/delight/items/${e}`,r),deleteDelightItem:e=>te("DELETE",`/delight/items/${e}`),restoreDelightItem:e=>te("POST",`/delight/items/${e}/restore`),arrangeDelight:(e,r)=>te("PUT",`/delight/collections/${e}/arrange`,{order:r})},xc=[{code:"INR",symbol:"₹",locale:"en-IN",label:"Indian Rupee"},{code:"USD",symbol:"$",locale:"en-US",label:"US Dollar"},{code:"EUR",symbol:"€",locale:"de-DE",label:"Euro"},{code:"GBP",symbol:"£",locale:"en-GB",label:"British Pound"},{code:"JPY",symbol:"¥",locale:"ja-JP",label:"Japanese Yen"},{code:"AED",symbol:"د.إ",locale:"en-AE",label:"UAE Dirham"},{code:"AUD",symbol:"A$",locale:"en-AU",label:"Australian Dollar"},{code:"CAD",symbol:"C$",locale:"en-CA",label:"Canadian Dollar"},{code:"SGD",symbol:"S$",locale:"en-SG",label:"Singapore Dollar"}],Ku="INR",Rh="anvil_currency",zl=e=>xc.find(r=>r.code===e)||xc[0];function gi(){try{return localStorage.getItem(Rh)||Ku}catch{return Ku}}function Qu(e){try{localStorage.setItem(Rh,e)}catch{}return window.dispatchEvent(new CustomEvent("anvil-currency",{detail:e})),e}function Ss(e,r){const n=zl(r||gi()),o=Math.round(Number(e)||0);return n.symbol+o.toLocaleString(n.locale)}function Ur(e,r){const n=zl(r||gi()),o=Number(e)||0;return n.symbol+o.toLocaleString(n.locale,{minimumFractionDigits:2,maximumFractionDigits:2})}function yc(e,r){const n=zl(r||gi()),o=Math.round(Number(e)||0),i=Math.abs(o);return n.code==="INR"?i>=1e7?n.symbol+(o/1e7).toFixed(i>=1e8?0:1)+"Cr":i>=1e5?n.symbol+(o/1e5).toFixed(i>=1e6?0:1)+"L":i>=1e3?n.symbol+(o/1e3).toFixed(i>=1e4?0:1)+"K":n.symbol+o:i>=1e9?n.symbol+(o/1e9).toFixed(1)+"B":i>=1e6?n.symbol+(o/1e6).toFixed(1)+"M":i>=1e3?n.symbol+(o/1e3).toFixed(1)+"K":n.symbol+o}function no(){const[e,r]=c.useState(gi());return c.useEffect(()=>{const n=o=>r(o.detail||gi());return window.addEventListener("anvil-currency",n),()=>window.removeEventListener("anvil-currency",n)},[]),zl(e)}const qt={financial:{label:"Financial",leaf:"#C9A227",shape:"round"},academic:{label:"Academic",leaf:"#3A7CA5",shape:"pine"},relationship:{label:"Relationship",leaf:"#C2536B",shape:"round"},spiritual:{label:"Spiritual",leaf:"#8268B0",shape:"tall"},health:{label:"Health",leaf:"#4C9A6B",shape:"round"}},an="health";function Dg({species:e=an,progress:r=1,withered:n=!1,size:o=200}){const i=Math.max(0,Math.min(1,r)),s=qt[e]||qt[an],a=n?"#8A7B63":"#7A5A3C",l=n?"#A99C84":s.leaf,d=n?"#8F8268":l,g=14+i*46,h=112-g,y=i>.14,f=y?8+i*30:0;return t.jsxs("svg",{viewBox:"0 0 120 120",width:o,height:o,style:{display:"block"},children:[t.jsx("ellipse",{cx:"60",cy:"114",rx:20+i*14,ry:"5",fill:"rgba(38,36,31,0.08)"}),!y&&t.jsxs("g",{transform:`translate(60 ${112-i*40})`,children:[t.jsx("path",{d:"M0 8 C0 8 0 -2 0 -6",stroke:"#4C9A6B",strokeWidth:"2.5",fill:"none"}),t.jsx("ellipse",{cx:"-5",cy:"-4",rx:"6",ry:"3.5",fill:"#4C9A6B",transform:"rotate(-30 -5 -4)"}),t.jsx("ellipse",{cx:"5",cy:"-4",rx:"6",ry:"3.5",fill:"#5BB07E",transform:"rotate(30 5 -4)"})]}),y&&t.jsxs(t.Fragment,{children:[t.jsx("rect",{x:60-(2+i*2.5),y:h,width:(2+i*2.5)*2,height:g,rx:"2",fill:a}),s.shape==="pine"?t.jsxs(t.Fragment,{children:[t.jsx("polygon",{points:`60,${h-f*2.2} ${60-f},${h+4} ${60+f},${h+4}`,fill:l}),t.jsx("polygon",{points:`60,${h-f*3} ${60-f*.8},${h-f*.7} ${60+f*.8},${h-f*.7}`,fill:d})]}):s.shape==="tall"?t.jsxs(t.Fragment,{children:[t.jsx("ellipse",{cx:"60",cy:h-f*.3,rx:f*.78,ry:f*1.55,fill:l}),t.jsx("ellipse",{cx:"60",cy:h-f*.9,rx:f*.5,ry:f*1,fill:d,opacity:"0.9"})]}):t.jsxs(t.Fragment,{children:[t.jsx("circle",{cx:"60",cy:h,r:f,fill:l}),t.jsx("circle",{cx:60-f*.7,cy:h+f*.3,r:f*.78,fill:l}),t.jsx("circle",{cx:60+f*.7,cy:h+f*.3,r:f*.78,fill:d}),t.jsx("circle",{cx:"60",cy:h-f*.5,r:f*.8,fill:d,opacity:"0.92"})]})]})]})}function D0({species:e}){return t.jsx(Dg,{species:e,progress:1,size:56})}const Ys="#C9A227",qu="#3A7CA5",Xu="#C2536B",Zu=new Set(["worth","achievements"]),W0=()=>{const e=new Date,r=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${r(e.getMonth()+1)}-${r(e.getDate())}`},tr=W0(),M0={kickstart:"Kickstart",golden:"Golden Book",habits:"Habits",quadrant:"Quadrant",goals:"Goals",grove:"Grove",worth:"Rewards",vault:"Wallet",expenses:"Expenses",journal:"Journal",revision:"Revision",affirmations:"Affirmations",skills:"Skills",spiritual:"Spiritual",mindscape:"Mindscape",achievements:"Achievements",delight:"Delights"},vc=e=>{const r=Math.round(e||0),n=Math.floor(r/60),o=r%60;return n?`${n}h ${o}m`:`${o}m`},L0=e=>vc((e||0)/60),Ju=[{id:"Q1",label:"Do Now"},{id:"Q2",label:"Schedule"},{id:"Q3",label:"Delegate"},{id:"Q4",label:"Drop"}],ep=["Financial","Academic","Relationship","Health","Spiritual"];function _0({onNavigate:e}){var jr,vt;const r=no(),n=p=>Ur(p,r.code),[o,i]=c.useState(!1),[s,a]=c.useState([]),[l,d]=c.useState([]),[g,h]=c.useState({sessions:[],stats:{}}),[y,f]=c.useState([]),[E,R]=c.useState([]),[T,z]=c.useState([]),[m,b]=c.useState([]),[u,k]=c.useState({}),[j,C]=c.useState({}),[B,x]=c.useState([]),[v,$]=c.useState([]),[Q,ne]=c.useState([]),[be,A]=c.useState([]),[K,re]=c.useState([]),ve=c.useCallback(()=>{Promise.all([F.getHabits().catch(()=>[]),F.getTasks().catch(()=>[]),F.getFocus().catch(()=>({sessions:[],stats:{}})),F.getScreenTime().catch(()=>[]),F.getRewardRates().catch(()=>[]),F.getPayouts().catch(()=>[]),F.getAchievements().catch(()=>[]),F.getSetting("grove_rates").catch(()=>null),F.getSetting("reward_rates").catch(()=>null),F.getExpenses().catch(()=>({categories:[],logs:[]})),F.getInvestments().catch(()=>[]),F.getDueToday().catch(()=>[]),F.getSkills().catch(()=>[])]).then(([p,L,Fe,_e,Xe,ot,ur,jt,ir,gt,sr,Bn,hi])=>{a(p||[]),d(L||[]),h(Fe||{sessions:[],stats:{}}),f(Array.isArray(_e)?_e:[]),R(Xe||[]),z(ot||[]),b(Array.isArray(ur)?ur:[]),k((jt==null?void 0:jt.value)||{}),C((ir==null?void 0:ir.value)||{}),x((gt==null?void 0:gt.categories)||[]),$((gt==null?void 0:gt.logs)||[]),ne(sr||[]),A(Bn||[]),re(hi||[]),i(!0)}).catch(()=>i(!0))},[]);c.useEffect(()=>{ve()},[ve]);const Z=s.filter(p=>(p.logs||[]).includes(tr)).length;l.filter(p=>(p.start_datetime||"").slice(0,10)===tr);const Y=c.useMemo(()=>{const p={Q1:0,Q2:0,Q3:0,Q4:0};return l.forEach(L=>{p[L.quadrant]!==void 0&&p[L.quadrant]++}),p},[l]),ce=((jr=g.stats)==null?void 0:jr.today_minutes)||0,J=((vt=g.stats)==null?void 0:vt.today_trees)||0,I={};E.forEach(p=>{var L;(I[L=`${p.kind}:${p.rkey}`]||(I[L]=[])).push({eff:p.eff_date,rate:p.rate})}),Object.values(I).forEach(p=>p.sort((L,Fe)=>L.eff.localeCompare(Fe.eff)));const W=(p,L,Fe)=>{const _e=I[`${p}:${L}`];if(_e){let Xe=null;for(const ot of _e)if(ot.eff<=Fe)Xe=ot.rate;else break;if(Xe!==null)return Xe}return(p==="focus"?u[L]:j[L])||0};let _=0,P=0;(g.sessions||[]).filter(p=>p.completed).forEach(p=>{const L=(p.started_at||p.created_at||"").slice(0,10);if(L!==tr)return;const Fe=qt[p.tree]?p.tree:an;_+=(p.actual_min||0)/60*W("focus",Fe,L)}),y.forEach(p=>{!Zu.has(p.screen)&&p.date===tr&&(P+=p.seconds/60*W("usage",p.screen,p.date))});const ge=m.filter(p=>p.date===tr&&(p.reward||0)>0).reduce((p,L)=>p+(L.reward||0),0),De=_+P+ge,q=De>0?_/De*100:0,oe=De>0?P/De*100:0,G=De>0?ge/De*100:0;let le=0,D=0;(g.sessions||[]).filter(p=>p.completed).forEach(p=>{const L=(p.started_at||p.created_at||"").slice(0,10),Fe=qt[p.tree]?p.tree:an;le+=(p.actual_min||0)/60*W("focus",Fe,L)}),y.forEach(p=>{Zu.has(p.screen)||(D+=p.seconds/60*W("usage",p.screen,p.date))});const w=m.reduce((p,L)=>p+(L.reward||0),0),ie=T.reduce((p,L)=>p+L.amount,0),me=Math.max(0,le+D+w-ie),fe=v.filter(p=>p.date===tr).reduce((p,L)=>p+L.amount,0);c.useMemo(()=>Object.fromEntries(B.map(p=>[p.id,p])),[B]);const Ee=Q.filter(p=>p.date===tr||p.start_date===tr).reduce((p,L)=>p+(L.invested||0),0),Qe=c.useMemo(()=>{const p={};return y.forEach(L=>{L.date===tr&&(p[L.screen]=(p[L.screen]||0)+L.seconds)}),Object.entries(p).filter(([,L])=>L>0).sort((L,Fe)=>Fe[1]-L[1])},[y]),st=p=>y.some(L=>L.screen===p&&L.date===tr&&L.seconds>0),Le=st("spiritual"),et=st("affirmations"),Ke=c.useMemo(()=>{const p=[];return K.forEach(L=>Object.values(L.notes||{}).forEach(Fe=>Fe.forEach(_e=>{(_e.created_at||"").slice(0,10)===tr&&p.push({..._e,skill:L.title})}))),p},[K]),ut=st("kickstart"),ae=st("mindscape"),We=m.filter(p=>p.date===tr),[qe,tt]=c.useState(null),[ht,_t]=c.useState(null),[It,xt]=c.useState(null),[yt,At]=c.useState(null),Er=p=>F.toggleHabitLog(p.id,tr).then(ve).catch(()=>{}),Ne=async()=>{const p=qe.title.trim();p&&(await F.createTask({pillar:qe.pillar,title:p,quadrant:qe.quadrant,time_estimate_min:Number(qe.time_estimate_min)||30,start_datetime:null,goal_id:null}),tt(null),ve())},dt=async()=>{await F.createFocus({label:ht.label.trim()||null,tree:ht.tree,duration_min:Number(ht.duration_min)||25}),_t(null),ve()},Bt=async()=>{const p=parseFloat(It.amount)||0;p<=0||!It.category_id||(await F.createExpenseLog({category_id:Number(It.category_id),amount:p,note:It.note.trim(),date:tr}),xt(null),ve())},zt=async()=>{const p=yt.name.trim(),L=parseFloat(yt.invested)||0;!p||L<=0||(await F.createInvestment({name:p,kind:yt.kind,invested:L,current_value:L,note:yt.note.trim(),date:tr}),At(null),ve())},pt=p=>e&&e(p);return o?t.jsxs("div",{style:xe.page,children:[t.jsxs("div",{style:xe.head,children:[t.jsx("div",{style:xe.eyebrow,children:"Anvil · Today"}),t.jsx("h1",{style:xe.h1,children:"Dashboard"}),t.jsx("div",{style:xe.subhead,children:new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})})]}),t.jsx(Bo,{title:"Used today",onClick:()=>{},children:Qe.length===0?t.jsx(Ks,{children:"Nothing opened yet today."}):t.jsx("div",{style:xe.chipWrap,children:Qe.map(([p,L])=>t.jsxs("button",{onClick:()=>pt(p),style:xe.usedChip,children:[M0[p]||p," ",t.jsx("span",{style:xe.usedChipTime,children:L0(L)})]},p))})}),t.jsxs("div",{style:xe.statGrid,children:[t.jsx(Qs,{icon:mc,color:"#4C9A6B",label:"Habits done",value:`${Z}/${s.length}`,onClick:()=>pt("habits")}),t.jsx(Qs,{icon:hc,color:Ys,label:J?`Focus · ${J} tree${J===1?"":"s"}`:"Focus time",value:vc(ce),onClick:()=>pt("grove")}),t.jsx(Qs,{icon:tl,color:"#C9772E",label:"Spent today",value:Ur(fe,r.code),onClick:()=>pt("expenses")}),t.jsx(Qs,{icon:Cl,color:"#8268B0",label:"Invested today",value:Ur(Ee,r.code),onClick:()=>pt("vault")})]}),t.jsx(Bo,{title:"Rewards",eyebrow:`Pending ${n(me)}`,onClick:()=>pt("worth"),children:De>0?t.jsxs("div",{style:xe.pieWrap,children:[t.jsxs("div",{style:xe.pieChart,children:[t.jsx("div",{style:{...xe.pieDisc,background:`conic-gradient(${Ys} 0 ${q}%, ${qu} ${q}% ${q+oe}%, ${Xu} ${q+oe}% 100%)`}}),t.jsxs("div",{style:xe.pieHole,children:[t.jsx("span",{style:xe.pieHoleVal,children:n(De)}),t.jsx("span",{style:xe.pieHoleLbl,children:"today"})]})]}),t.jsxs("div",{style:xe.pieLegend,children:[t.jsx(ed,{color:Ys,label:"Focus",pct:q,val:n(_)}),t.jsx(ed,{color:qu,label:"Usage",pct:oe,val:n(P)}),t.jsx(ed,{color:Xu,label:"Achievement",pct:G,val:n(ge)})]})]}):t.jsx(Ks,{children:"No rewards earned yet today."})}),be.length>0&&t.jsx(Bo,{title:"Revision due",eyebrow:`${be.length} pending`,onClick:()=>pt("revision"),children:t.jsx("div",{style:xe.rows,children:be.slice(0,5).map(p=>t.jsxs("div",{style:xe.row,children:[t.jsx("span",{style:{...xe.dot,background:p.is_missed?"#C2536B":"#C9A227"}}),t.jsx("span",{style:xe.rowName,children:p.topic}),t.jsxs("span",{style:xe.rowMeta,children:["Stage ",p.stage]})]},p.review_id))})}),t.jsxs("div",{style:xe.cardGrid,children:[t.jsx(qs,{icon:Xi,color:"#8268B0",label:"Spiritual",done:Le,doneText:"Read today",idleText:"Not opened yet",onClick:()=>pt("spiritual")}),t.jsx(qs,{icon:To,color:"#C9A227",label:"Affirmations",done:et,doneText:"Read today",idleText:"Not opened yet",onClick:()=>pt("affirmations")}),t.jsx(qs,{icon:jh,color:"#C9772E",label:"Kickstart",done:ut,doneText:"Watched today",idleText:"Not watched yet",onClick:()=>pt("kickstart")}),t.jsx(qs,{icon:bh,color:"#3A7CA5",label:"Mindscape",done:ae,doneText:"Listened today",idleText:"Not listened yet",onClick:()=>pt("mindscape")})]}),t.jsx(Bo,{title:"Skills enhanced",eyebrow:Ke.length?`${Ke.length} note${Ke.length===1?"":"s"}`:null,onClick:()=>pt("skills"),children:Ke.length===0?t.jsx(Ks,{children:"No skill notes added today."}):t.jsx("div",{style:xe.rows,children:Ke.slice(0,5).map(p=>t.jsxs("div",{style:xe.row,children:[t.jsx("span",{style:{...xe.dot,background:"#4C9A6B"}}),t.jsx("span",{style:xe.rowName,children:p.text}),t.jsx("span",{style:xe.rowMeta,children:p.skill})]},p.id))})}),We.length>0&&t.jsx(Bo,{title:"Achievements today",eyebrow:`${We.length}`,onClick:()=>pt("achievements"),children:t.jsx("div",{style:xe.rows,children:We.map(p=>t.jsxs("div",{style:xe.row,children:[t.jsx("span",{style:{...xe.dot,background:"#C2536B"}}),t.jsx("span",{style:xe.rowName,children:p.title}),p.reward>0&&t.jsx("span",{style:xe.rowAmt,children:n(p.reward)})]},p.id))})}),t.jsx(Bo,{title:"Wallet status",onClick:()=>pt("vault"),children:t.jsxs("div",{style:xe.walletRow,children:[t.jsxs("div",{style:xe.walletStat,children:[t.jsx("div",{style:{...xe.walletVal,color:"#C9772E"},children:Ur(fe,r.code)}),t.jsx("div",{style:xe.walletLbl,children:"Spent today"})]}),t.jsxs("div",{style:xe.walletStat,children:[t.jsx("div",{style:{...xe.walletVal,color:"#8268B0"},children:Ur(Ee,r.code)}),t.jsx("div",{style:xe.walletLbl,children:"Invested today"})]}),t.jsxs("div",{style:xe.walletStat,children:[t.jsx("div",{style:xe.walletVal,children:Ur(me,r.code)}),t.jsx("div",{style:xe.walletLbl,children:"Rewards pending"})]})]})}),t.jsx("div",{style:xe.quickHead,children:"Quick log"}),t.jsxs("div",{style:xe.cardGrid,children:[t.jsxs("div",{style:xe.quickCard,children:[t.jsxs("div",{style:xe.quickTitle,children:[t.jsx(mc,{size:15,color:"#4C9A6B"})," Habits"]}),s.length===0?t.jsx(Ks,{children:"No habits yet."}):t.jsx("div",{style:xe.habitList,children:s.slice(0,6).map(p=>{const L=(p.logs||[]).includes(tr);return t.jsxs("button",{onClick:()=>Er(p),style:{...xe.habitChip,...L?xe.habitChipOn:{}},children:[L&&t.jsx(Cn,{size:12})," ",p.name]},p.id)})})]}),t.jsxs("div",{style:xe.quickCard,children:[t.jsxs("div",{style:xe.quickTitle,children:[t.jsx(Tg,{size:15,color:"#3A7CA5"})," Quadrant"]}),t.jsx("div",{style:xe.quadGrid,children:Ju.map(p=>t.jsxs("div",{style:xe.quadCell,children:[t.jsx("span",{style:xe.quadLabel,children:p.label}),t.jsx("span",{style:xe.quadCount,children:Y[p.id]})]},p.id))}),t.jsxs("button",{onClick:()=>tt({title:"",pillar:ep[0],quadrant:"Q1",time_estimate_min:30}),style:xe.quickAddBtn,children:[t.jsx(at,{size:14})," Add task"]})]}),t.jsxs("div",{style:xe.quickCard,children:[t.jsxs("div",{style:xe.quickTitle,children:[t.jsx(hc,{size:15,color:Ys})," Grove focus"]}),t.jsxs("div",{style:xe.quickStat,children:[vc(ce)," today"]}),t.jsxs("button",{onClick:()=>_t({label:"",tree:an,duration_min:25}),style:xe.quickAddBtn,children:[t.jsx(at,{size:14})," Start session"]})]}),t.jsxs("div",{style:xe.quickCard,children:[t.jsxs("div",{style:xe.quickTitle,children:[t.jsx(tl,{size:15,color:"#C9772E"})," Expense / Investment"]}),t.jsxs("div",{style:xe.quickStat,children:[Ur(fe,r.code)," spent today"]}),t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsxs("button",{onClick:()=>{var p;return xt({category_id:((p=B[0])==null?void 0:p.id)||"",amount:"",note:""})},style:{...xe.quickAddBtn,flex:1},children:[t.jsx(at,{size:14})," Expense"]}),t.jsxs("button",{onClick:()=>At({name:"",kind:"Stocks",invested:"",note:""}),style:{...xe.quickAddBtn,flex:1},children:[t.jsx(at,{size:14})," Invest"]})]})]})]}),qe&&t.jsxs(Xs,{title:"Add task",onClose:()=>tt(null),children:[t.jsx("input",{autoFocus:!0,placeholder:"Task title",value:qe.title,onChange:p=>tt(L=>({...L,title:p.target.value})),style:xe.input}),t.jsx("select",{value:qe.pillar,onChange:p=>tt(L=>({...L,pillar:p.target.value})),style:xe.input,children:ep.map(p=>t.jsx("option",{value:p,children:p},p))}),t.jsx("select",{value:qe.quadrant,onChange:p=>tt(L=>({...L,quadrant:p.target.value})),style:xe.input,children:Ju.map(p=>t.jsxs("option",{value:p.id,children:[p.id," · ",p.label]},p.id))}),t.jsx("input",{type:"number",min:"1",placeholder:"Estimate (min)",value:qe.time_estimate_min,onChange:p=>tt(L=>({...L,time_estimate_min:p.target.value})),style:xe.input}),t.jsx(Zs,{onCancel:()=>tt(null),onSave:Ne,disabled:!qe.title.trim()})]}),ht&&t.jsxs(Xs,{title:"Start focus session",onClose:()=>_t(null),children:[t.jsx("input",{autoFocus:!0,placeholder:"Label (optional)",value:ht.label,onChange:p=>_t(L=>({...L,label:p.target.value})),style:xe.input}),t.jsx("select",{value:ht.tree,onChange:p=>_t(L=>({...L,tree:p.target.value})),style:xe.input,children:Object.entries(qt).map(([p,L])=>t.jsx("option",{value:p,children:L.label},p))}),t.jsx("input",{type:"number",min:"1",placeholder:"Duration (min)",value:ht.duration_min,onChange:p=>_t(L=>({...L,duration_min:p.target.value})),style:xe.input}),t.jsx(Zs,{onCancel:()=>_t(null),onSave:dt,disabled:!Number(ht.duration_min)})]}),It&&t.jsxs(Xs,{title:"Log expense",onClose:()=>xt(null),children:[t.jsx("select",{value:It.category_id,onChange:p=>xt(L=>({...L,category_id:p.target.value})),style:xe.input,children:B.map(p=>t.jsx("option",{value:p.id,children:p.name},p.id))}),t.jsx("input",{autoFocus:!0,type:"number",min:"0",step:"0.01",placeholder:`Amount (${r.symbol})`,value:It.amount,onChange:p=>xt(L=>({...L,amount:p.target.value})),style:xe.input}),t.jsx("input",{placeholder:"Note (optional)",value:It.note,onChange:p=>xt(L=>({...L,note:p.target.value})),style:xe.input}),t.jsx(Zs,{onCancel:()=>xt(null),onSave:Bt,disabled:!(parseFloat(It.amount)>0&&It.category_id)})]}),yt&&t.jsxs(Xs,{title:"Log investment",onClose:()=>At(null),children:[t.jsx("input",{autoFocus:!0,placeholder:"Name",value:yt.name,onChange:p=>At(L=>({...L,name:p.target.value})),style:xe.input}),t.jsx("select",{value:yt.kind,onChange:p=>At(L=>({...L,kind:p.target.value})),style:xe.input,children:["Stocks","Mutual Fund","Gold","Real Estate","Fixed Deposit","Crypto","Other"].map(p=>t.jsx("option",{value:p,children:p},p))}),t.jsx("input",{type:"number",min:"0",step:"0.01",placeholder:`Invested (${r.symbol})`,value:yt.invested,onChange:p=>At(L=>({...L,invested:p.target.value})),style:xe.input}),t.jsx("input",{placeholder:"Note (optional)",value:yt.note,onChange:p=>At(L=>({...L,note:p.target.value})),style:xe.input}),t.jsx(Zs,{onCancel:()=>At(null),onSave:zt,disabled:!(yt.name.trim()&&parseFloat(yt.invested)>0)})]})]}):t.jsx("div",{style:xe.loading,children:"Loading…"})}function Bo({title:e,eyebrow:r,onClick:n,children:o}){return t.jsxs("div",{style:xe.card,children:[t.jsxs("div",{style:xe.cardTitleRow,children:[t.jsxs("button",{onClick:n,style:xe.cardTitleBtn,children:[e," ",t.jsx(By,{size:13})]}),r&&t.jsx("span",{style:xe.cardEyebrow,children:r})]}),o]})}function Ks({children:e}){return t.jsx("div",{style:xe.muted,children:e})}function ed({color:e,label:r,pct:n,val:o}){return t.jsxs("div",{style:xe.pieLegRow,children:[t.jsx("span",{style:{...xe.legendDot,background:e}}),t.jsx("span",{style:xe.pieLegName,children:r}),t.jsxs("span",{style:xe.pieLegPct,children:[Math.round(n),"%"]}),t.jsx("span",{style:xe.pieLegMin,children:o})]})}function Qs({icon:e,color:r,label:n,value:o,sub:i,onClick:s}){return t.jsxs("button",{onClick:s,style:xe.statTile,children:[t.jsx("div",{style:{...xe.statIcon,background:`${r}1A`,color:r},children:t.jsx(e,{size:17})}),t.jsxs("div",{style:{minWidth:0},children:[t.jsx("div",{style:xe.statVal,children:o}),t.jsxs("div",{style:xe.statLbl,children:[n,i?` · ${i}`:""]})]})]})}function qs({icon:e,color:r,label:n,done:o,doneText:i,idleText:s,onClick:a}){return t.jsxs("button",{onClick:a,style:xe.miniCard,children:[t.jsx("div",{style:{...xe.statIcon,background:`${r}1A`,color:r},children:t.jsx(e,{size:16})}),t.jsx("div",{style:xe.miniLabel,children:n}),t.jsx("div",{style:{...xe.miniStatus,color:o?"#4C9A6B":"var(--text-3)"},children:o?i:s})]})}function Xs({title:e,onClose:r,children:n}){return t.jsx("div",{style:xe.modalOverlay,onClick:r,children:t.jsxs("div",{style:xe.modalCard,onClick:o=>o.stopPropagation(),children:[t.jsx("div",{style:xe.modalTitle,children:e}),t.jsx("div",{style:xe.modalBody,children:n})]})})}function Zs({onCancel:e,onSave:r,disabled:n}){return t.jsxs("div",{style:xe.modalActions,children:[t.jsx("button",{onClick:e,style:xe.modalCancel,children:"Cancel"}),t.jsx("button",{onClick:r,disabled:n,style:{...xe.modalConfirm,...n?{opacity:.5,cursor:"not-allowed"}:{}},children:"Save"})]})}const xe={loading:{padding:40,textAlign:"center",color:"var(--text-3)",fontFamily:"'Inter',system-ui,sans-serif"},page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},chipWrap:{display:"flex",gap:8,flexWrap:"wrap"},usedChip:{border:"1px solid var(--border)",background:"var(--surface-2)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",gap:6},usedChipTime:{color:"var(--text-3)",fontWeight:600,fontSize:11.5},statGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:10,marginBottom:14},statTile:{display:"flex",alignItems:"center",gap:10,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,padding:"12px 14px",cursor:"pointer",fontFamily:"inherit",textAlign:"left",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},statIcon:{width:34,height:34,borderRadius:10,display:"grid",placeItems:"center",flexShrink:0},statVal:{fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},card:{background:"var(--surface)",borderRadius:16,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,marginBottom:10},cardTitleBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"'Fraunces',Georgia,serif",fontSize:16,fontWeight:700,color:"var(--text)"},cardEyebrow:{fontSize:12,fontWeight:700,color:"var(--text-3)"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"10px 0"},rows:{display:"flex",flexDirection:"column",gap:2},row:{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:"1px solid var(--border)"},dot:{width:10,height:10,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:13.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},rowMeta:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,flexShrink:0},rowAmt:{fontSize:13.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:20,flexWrap:"wrap"},pieChart:{position:"relative",width:110,height:110,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:66,height:66,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:12.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:9.5,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:160,display:"flex",flexDirection:"column",gap:8},pieLegRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:10,height:10,borderRadius:3,flexShrink:0},pieLegName:{flex:1,fontSize:13,fontWeight:600},pieLegPct:{fontSize:12.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",width:40,textAlign:"right"},pieLegMin:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,minWidth:58,textAlign:"right"},cardGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:10,marginBottom:14},miniCard:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:6,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,padding:"12px 14px",cursor:"pointer",fontFamily:"inherit",textAlign:"left",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},miniLabel:{fontSize:13,fontWeight:700,color:"var(--text)"},miniStatus:{fontSize:11.5,fontWeight:600},walletRow:{display:"flex",gap:10},walletStat:{flex:1,textAlign:"center"},walletVal:{fontSize:17,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},walletLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:2},quickHead:{fontSize:13,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",margin:"6px 0 10px"},quickCard:{border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,padding:"14px 16px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},quickTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13.5,fontWeight:700,color:"var(--text)"},quickStat:{fontSize:13,color:"var(--text-2)",fontWeight:600},quickAddBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface-2)",color:"var(--text)",padding:"8px 10px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},habitList:{display:"flex",flexWrap:"wrap",gap:6},habitChip:{border:"1px solid var(--border)",background:"var(--surface-2)",color:"var(--text-2)",padding:"5px 10px",borderRadius:14,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",gap:4},habitChipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},quadGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6},quadCell:{display:"flex",justifyContent:"space-between",alignItems:"center",border:"1px solid var(--border)",borderRadius:8,padding:"5px 8px",fontSize:11.5},quadLabel:{color:"var(--text-3)",fontWeight:600},quadCount:{fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",fontSize:13},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modalCard:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"20px 20px 16px",width:340,maxWidth:"100%",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)"},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},modalBody:{display:"flex",flexDirection:"column",gap:8},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface-2)",outline:"none"},modalActions:{display:"flex",gap:8,marginTop:6},modalCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalConfirm:{flex:1,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},$0=7e3;function yr(e,r,n){const[o,i]=c.useState([]),s=c.useRef({}),a=c.useCallback(async(g,h="Item")=>{await e(g),n();const y=`${g}-${Date.now()}`;i(f=>[...f,{id:y,itemId:g,label:h}]),s.current[y]=setTimeout(()=>{i(f=>f.filter(E=>E.id!==y)),delete s.current[y]},$0)},[e,n]),l=c.useCallback(async g=>{const h=o.find(y=>y.id===g);h&&(clearTimeout(s.current[g]),delete s.current[g],i(y=>y.filter(f=>f.id!==g)),await r(h.itemId),n())},[o,r,n]),d=c.useCallback(g=>{clearTimeout(s.current[g]),delete s.current[g],i(h=>h.filter(y=>y.id!==g))},[]);return{deleteItem:a,toasts:o,handleUndo:l,handleDismiss:d}}function vr({toasts:e,onUndo:r,onDismiss:n}){return t.jsx("div",{style:Mo.container,children:e.map(o=>t.jsx(P0,{toast:o,onUndo:r,onDismiss:n},o.id))})}function P0({toast:e,onUndo:r,onDismiss:n}){const[o,i]=c.useState(100);return c.useEffect(()=>{const s=Date.now(),a=7e3,l=setInterval(()=>{const d=Date.now()-s,g=Math.max(0,100-d/a*100);i(g),g===0&&clearInterval(l)},50);return()=>clearInterval(l)},[]),t.jsxs("div",{style:Mo.toast,children:[t.jsx("div",{style:{...Mo.bar,width:`${o}%`}}),t.jsxs("span",{style:Mo.msg,children:[e.label," deleted"]}),t.jsx("button",{style:Mo.undoBtn,onClick:()=>r(e.id),children:"Undo"}),t.jsx("button",{style:Mo.closeBtn,onClick:()=>n(e.id),children:"×"})]})}const Mo={container:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",gap:8,zIndex:999,pointerEvents:"none"},toast:{position:"relative",display:"flex",alignItems:"center",gap:12,background:"var(--accent-strong)",color:"#fff",borderRadius:10,padding:"12px 16px",fontSize:13.5,fontFamily:"'Inter', system-ui, sans-serif",boxShadow:"0 4px 20px rgba(0,0,0,0.25)",minWidth:260,overflow:"hidden",pointerEvents:"all"},bar:{position:"absolute",bottom:0,left:0,height:3,background:"#4C9A6B",transition:"width 0.05s linear",borderRadius:"0 0 0 10px"},msg:{flex:1,fontWeight:500},undoBtn:{border:"1px solid rgba(255,255,255,0.3)",background:"none",color:"#4C9A6B",fontWeight:700,fontSize:13,padding:"4px 10px",borderRadius:6,cursor:"pointer",fontFamily:"inherit"},closeBtn:{border:"none",background:"none",color:"rgba(255,255,255,0.5)",cursor:"pointer",fontSize:18,lineHeight:1,padding:"0 2px"}},dn={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},N0=[{id:"Q1",symbol:"™",title:"Do Now",sub:"Important · Urgent",accent:"#C2536B"},{id:"Q2",symbol:"©",title:"Schedule",sub:"Important · Not Urgent",accent:"#3A7CA5"},{id:"Q3",symbol:"®",title:"Delegate",sub:"Not Important · Urgent",accent:"#C9A227"},{id:"Q4",symbol:"•",title:"Drop",sub:"Not Important · Not Urgent",accent:"#8A8780"}];function Eh(){return new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Kolkata"})}function Ah(){const e=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"})),n=e.getMinutes()<30?30:0,o=n===0?e.getHours()+1:e.getHours();return`${String(o%24).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function tp(e,r){const[n,o]=e.split(":").map(Number),i=n*60+o+r;return`${String(Math.floor(i/60)%24).padStart(2,"0")}:${String(i%60).padStart(2,"0")}`}function O0(e){return e?new Date(e).toLocaleString("en-IN",{timeZone:"Asia/Kolkata",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0}):""}const Js=()=>({title:"",pillar:"Financial",est:30,date:Eh(),startTime:Ah()});function H0(){const[e,r]=c.useState([]),[n,o]=c.useState([]),[i,s]=c.useState("All"),[a,l]=c.useState(null),[d,g]=c.useState(null),[h,y]=c.useState(Js()),[f,E]=c.useState(null),[R,T]=c.useState(Js()),z=c.useCallback(()=>F.getTasks().then(r).catch(console.error),[]);c.useEffect(()=>{z(),F.getGoals().then(_=>o(_.filter(P=>P.horizon==="Weekly"))).catch(()=>{})},[z]);const m=Object.keys(dn),b=n.filter(_=>i==="All"||_.pillar===i),u=n.find(_=>_.id===a)||null,k=e.filter(_=>a!=null?_.goal_id===a:i!=="All"?_.pillar===i:!0),j=_=>{s(_),l(null),g(null),y(P=>({...P,pillar:_==="All"?"Financial":_}))},C=_=>{l(_),g(null);const P=n.find(de=>de.id===_);P&&y(de=>({...de,pillar:P.pillar}))},{deleteItem:B,toasts:x,handleUndo:v,handleDismiss:$}=yr(F.deleteTask,F.restoreTask,z),Q=_=>k.filter(P=>P.quadrant===_),ne=_=>Q(_).reduce((P,de)=>P+de.time_estimate_min,0),be=_=>_>=60?`${Math.floor(_/60)}h${_%60?` ${_%60}m`:""}`:`${_}m`,A=async _=>{if(!h.title.trim())return;const P=h.date&&h.startTime?`${h.date}T${h.startTime}:00`:null;await F.createTask({pillar:u?u.pillar:h.pillar,title:h.title,quadrant:_,time_estimate_min:Number(h.est)||30,start_datetime:P,goal_id:a??null}),y(Js()),g(null),z()},K=(_,P)=>B(_,P),re=_=>{const P=_.start_datetime?_.start_datetime.split("T"):[];E(_.id),g(null),T({title:_.title,pillar:_.pillar,est:_.time_estimate_min,date:P[0]||Eh(),startTime:(P[1]||"").slice(0,5)||Ah()})},ve=async _=>{if(!R.title.trim())return;const P=R.date&&R.startTime?`${R.date}T${R.startTime}:00`:null;await F.updateTask(_.id,{title:R.title.trim(),pillar:R.pillar,time_estimate_min:Number(R.est)||30,start_datetime:P}),E(null),z()},Z=c.useRef(null),Y=c.useRef(null),[ce,J]=c.useState(null),I=(_,P)=>{var ge;const de=document.elementFromPoint(_,P);return de&&de.closest&&((ge=de.closest("[data-quad]"))==null?void 0:ge.getAttribute("data-quad"))||null};c.useEffect(()=>{const _=de=>{const ge=Z.current;if(!ge)return;const De=Math.hypot(de.clientX-ge.startX,de.clientY-ge.startY);if(!ge.active){if(ge.pointerType!=="mouse"){De>12&&(clearTimeout(Y.current),Z.current=null);return}if(De<6)return;ge.active=!0,document.body.style.userSelect="none"}de.cancelable&&de.preventDefault(),ge.overQ=I(de.clientX,de.clientY),J({id:ge.task.id,title:ge.task.title,x:de.clientX,y:de.clientY,overQ:ge.overQ})},P=()=>{clearTimeout(Y.current);const de=Z.current;Z.current=null,document.body.style.userSelect="",document.body.style.touchAction="",J(null),de&&de.active&&de.overQ&&de.overQ!==de.task.quadrant&&F.updateTask(de.task.id,{quadrant:de.overQ}).then(z).catch(()=>{})};return window.addEventListener("pointermove",_,{passive:!1}),window.addEventListener("pointerup",P),window.addEventListener("pointercancel",P),()=>{window.removeEventListener("pointermove",_),window.removeEventListener("pointerup",P),window.removeEventListener("pointercancel",P)}},[z]);const W=(_,P)=>{_.pointerType==="mouse"&&_.button!==0||(Z.current={task:P,startX:_.clientX,startY:_.clientY,active:!1,pointerType:_.pointerType,overQ:null},_.pointerType!=="mouse"&&(Y.current=setTimeout(()=>{const de=Z.current;de&&(de.active=!0,document.body.style.touchAction="none",J({id:de.task.id,title:de.task.title,x:de.startX,y:de.startY,overQ:de.task.quadrant}))},280)))};return t.jsxs("div",{style:Ie.page,children:[t.jsxs("div",{style:Ie.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:Ie.eyebrow,children:"Anvil · Weekly Routing"}),t.jsx("h1",{style:Ie.h1,children:"Weekly Routing"})]}),t.jsx("div",{style:Ie.headRight,children:t.jsx("div",{style:Ie.legend,children:Object.entries(dn).map(([_,P])=>t.jsxs("span",{style:Ie.legendItem,children:[t.jsx("span",{style:{...Ie.dot,background:P.dot}}),_]},_))})})]}),t.jsx("div",{style:Ie.filterBar,children:["All",...m].map(_=>{const P=i===_,de=dn[_];return t.jsxs("button",{onClick:()=>j(_),style:{...Ie.pillChip,...P?de?{background:de.dot,color:"#fff",borderColor:de.dot}:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:[de&&t.jsx("span",{style:{...Ie.dot,background:P?"#fff":de.dot}}),_==="All"?"All":_]},_)})}),t.jsxs("div",{style:Ie.goalBar,children:[t.jsx("button",{onClick:()=>l(null),style:{...Ie.goalChip,...a==null?Ie.goalChipOn:{}},children:"All goals"}),b.map(_=>{var ge;const P=((ge=dn[_.pillar])==null?void 0:ge.dot)||"#9A968C",de=a===_.id;return t.jsxs("button",{onClick:()=>C(_.id),style:{...Ie.goalChip,...de?{background:P,color:"#fff",borderColor:P}:{}},title:_.title,children:[t.jsx("span",{style:{...Ie.dot,background:de?"#fff":P}}),t.jsx("span",{style:Ie.goalChipText,children:_.title})]},_.id)}),b.length===0&&t.jsxs("span",{style:Ie.goalEmpty,children:["No weekly goals",i!=="All"?` for ${i}`:""," — create them in Goals."]})]}),t.jsx("div",{style:Ie.grid,children:N0.map(_=>{var P,de;return t.jsxs("section",{"data-quad":_.id,style:{...Ie.quad,borderTop:`3px solid ${_.accent}`,...ce&&ce.overQ===_.id&&ce.overQ!==((P=e.find(ge=>ge.id===ce.id))==null?void 0:P.quadrant)?{outline:`2px dashed ${_.accent}`,outlineOffset:2,background:"var(--hover)"}:{}},children:[t.jsxs("header",{style:Ie.quadHead,children:[t.jsxs("div",{style:Ie.quadTitleRow,children:[t.jsx("span",{style:{...Ie.symbol,color:_.accent},children:_.symbol}),t.jsxs("div",{children:[t.jsx("div",{style:Ie.quadTitle,children:_.title}),t.jsx("div",{style:Ie.quadSub,children:_.sub})]})]}),t.jsx("span",{style:Ie.quadTotal,children:be(ne(_.id))})]}),t.jsxs("div",{style:Ie.list,children:[Q(_.id).map(ge=>{const De=dn[ge.pillar]||dn.Financial;return f===ge.id?t.jsxs("div",{style:Ie.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"Task title",value:R.title,onChange:q=>T({...R,title:q.target.value}),onKeyDown:q=>q.key==="Enter"&&ve(ge),style:Ie.input}),t.jsxs("div",{style:Ie.dateTimeRow,children:[t.jsxs("div",{style:Ie.dateTimeGroup,children:[t.jsx("label",{style:Ie.dtLabel,children:"Date"}),t.jsx("input",{type:"date",value:R.date,onChange:q=>T({...R,date:q.target.value}),style:Ie.dtInput})]}),t.jsxs("div",{style:Ie.dateTimeGroup,children:[t.jsx("label",{style:Ie.dtLabel,children:"Start"}),t.jsx("input",{type:"time",value:R.startTime,onChange:q=>T({...R,startTime:q.target.value}),style:Ie.dtInput})]}),t.jsxs("div",{style:Ie.dateTimeGroup,children:[t.jsx("label",{style:Ie.dtLabel,children:"End"}),t.jsx("div",{style:Ie.dtEndValue,children:tp(R.startTime,Number(R.est)||30)})]})]}),t.jsxs("div",{style:Ie.addRow,children:[t.jsx("select",{value:R.pillar,onChange:q=>T({...R,pillar:q.target.value}),style:Ie.select,children:Object.keys(dn).map(q=>t.jsx("option",{children:q},q))}),t.jsx("input",{type:"number",value:R.est,onChange:q=>T({...R,est:q.target.value}),style:{...Ie.input,width:60}}),t.jsx("span",{style:Ie.minLabel,children:"min"}),t.jsx("button",{onClick:()=>ve(ge),style:Ie.saveBtn,children:t.jsx(Oe,{size:14})}),t.jsx("button",{onClick:()=>E(null),style:Ie.cancelBtn,children:t.jsx(Be,{size:14})})]})]},ge.id):t.jsxs("div",{onPointerDown:q=>W(q,ge),style:{...Ie.card,background:De.soft,cursor:"grab",touchAction:"pan-y",...(ce==null?void 0:ce.id)===ge.id?{opacity:.4}:{}},children:[t.jsx("span",{style:{...Ie.cardBar,background:De.dot}}),t.jsxs("div",{style:Ie.cardBody,children:[t.jsx("div",{style:Ie.cardTitle,children:ge.title}),ge.start_datetime&&t.jsxs("div",{style:Ie.eventTime,children:[t.jsx($y,{size:10}),O0(ge.start_datetime)]}),t.jsxs("div",{style:Ie.cardMeta,children:[t.jsxs("span",{style:Ie.metaPill,children:[t.jsx("span",{style:{...Ie.dot,background:De.dot,width:7,height:7}}),ge.pillar]}),t.jsxs("span",{style:Ie.metaPill,children:[t.jsx(uh,{size:11})," ",be(ge.time_estimate_min)]})]})]}),t.jsxs("div",{style:Ie.cardActions,children:[t.jsx("button",{onClick:()=>re(ge),onPointerDown:q=>q.stopPropagation(),style:Ie.delBtn,title:"Edit",children:t.jsx(St,{size:12})}),t.jsx("button",{onClick:()=>K(ge.id,ge.title),onPointerDown:q=>q.stopPropagation(),style:Ie.delBtn,children:t.jsx(Be,{size:13})})]})]},ge.id)}),d===_.id?t.jsxs("div",{style:Ie.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"Task title",value:h.title,onChange:ge=>y({...h,title:ge.target.value}),onKeyDown:ge=>ge.key==="Enter"&&A(_.id),style:Ie.input}),t.jsxs("div",{style:Ie.dateTimeRow,children:[t.jsxs("div",{style:Ie.dateTimeGroup,children:[t.jsx("label",{style:Ie.dtLabel,children:"Date"}),t.jsx("input",{type:"date",value:h.date,onChange:ge=>y({...h,date:ge.target.value}),style:Ie.dtInput})]}),t.jsxs("div",{style:Ie.dateTimeGroup,children:[t.jsx("label",{style:Ie.dtLabel,children:"Start"}),t.jsx("input",{type:"time",value:h.startTime,onChange:ge=>y({...h,startTime:ge.target.value}),style:Ie.dtInput})]}),t.jsxs("div",{style:Ie.dateTimeGroup,children:[t.jsx("label",{style:Ie.dtLabel,children:"End"}),t.jsx("div",{style:Ie.dtEndValue,children:tp(h.startTime,Number(h.est)||30)})]})]}),t.jsxs("div",{style:Ie.addRow,children:[u?t.jsxs("span",{style:Ie.goalPillarTag,children:[t.jsx("span",{style:{...Ie.dot,background:(de=dn[u.pillar])==null?void 0:de.dot}})," ",u.pillar]}):t.jsx("select",{value:h.pillar,onChange:ge=>y({...h,pillar:ge.target.value}),style:Ie.select,children:Object.keys(dn).map(ge=>t.jsx("option",{children:ge},ge))}),t.jsx("input",{type:"number",value:h.est,onChange:ge=>y({...h,est:ge.target.value}),style:{...Ie.input,width:60}}),t.jsx("span",{style:Ie.minLabel,children:"min"}),t.jsx("button",{onClick:()=>A(_.id),style:Ie.saveBtn,children:t.jsx(Oe,{size:14})}),t.jsx("button",{onClick:()=>{g(null),y(Js())},style:Ie.cancelBtn,children:t.jsx(Be,{size:14})})]})]}):t.jsxs("button",{onClick:()=>g(_.id),style:Ie.addTrigger,children:[t.jsx(at,{size:13})," Add task"]})]})]},_.id)})}),ce&&t.jsx("div",{style:{...Ie.dragClone,left:ce.x+12,top:ce.y+12},children:ce.title}),t.jsx(vr,{toasts:x,onUndo:v,onDismiss:$})]})}const Ie={page:{fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:16,marginBottom:22},headRight:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:10},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces', Georgia, serif"},legend:{display:"flex",gap:14,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--text-2)",fontWeight:500},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:10},pillChip:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},goalBar:{display:"flex",gap:7,flexWrap:"wrap",alignItems:"center",marginBottom:18,paddingBottom:14,borderBottom:"1px solid var(--border)"},goalChip:{display:"inline-flex",alignItems:"center",gap:6,maxWidth:220,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},goalChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},goalChipText:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},goalEmpty:{fontSize:12,color:"var(--text-3)",fontStyle:"italic"},goalPillarTag:{display:"inline-flex",alignItems:"center",gap:6,fontSize:12.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"7px 10px",borderRadius:6,flex:1},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16},quad:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.06)"},quadHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14},quadTitleRow:{display:"flex",gap:10,alignItems:"center"},symbol:{fontSize:20,lineHeight:1},quadTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em"},quadSub:{fontSize:11,color:"var(--text-3)",marginTop:1,letterSpacing:"0.02em"},quadTotal:{fontSize:12,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"3px 9px",borderRadius:20},list:{display:"flex",flexDirection:"column",gap:8},card:{display:"flex",alignItems:"stretch",gap:10,borderRadius:9,padding:"10px 10px 10px 0",overflow:"hidden"},cardBar:{width:3,borderRadius:3,flexShrink:0},cardBody:{flex:1,minWidth:0},cardTitle:{fontSize:13.5,fontWeight:500,lineHeight:1.35,marginBottom:4},eventTime:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#3A7CA5",fontWeight:500,marginBottom:5},cardMeta:{display:"flex",gap:8,flexWrap:"wrap"},metaPill:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"var(--text-2)",fontWeight:500},cardActions:{display:"flex",flexDirection:"column",gap:4,alignSelf:"center",flexShrink:0},delBtn:{width:30,height:30,borderRadius:8,border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center"},addTrigger:{display:"flex",alignItems:"center",gap:5,fontSize:12.5,color:"var(--text-3)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"8px 10px",cursor:"pointer",fontWeight:500,marginTop:2},addBox:{border:"1px solid var(--border)",borderRadius:9,padding:10,display:"flex",flexDirection:"column",gap:8},dateTimeRow:{display:"flex",gap:8,alignItems:"flex-end"},dateTimeGroup:{display:"flex",flexDirection:"column",gap:3,flex:1},dtLabel:{fontSize:10,fontWeight:600,color:"var(--text-3)",letterSpacing:"0.08em",textTransform:"uppercase"},dtInput:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},dtEndValue:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,color:"var(--text-2)",background:"var(--bg)"},addRow:{display:"flex",alignItems:"center",gap:6},input:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",flex:1,minWidth:0},select:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 8px",fontSize:12.5,fontFamily:"inherit",flex:1},minLabel:{fontSize:11,color:"var(--text-3)"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},dragClone:{position:"fixed",zIndex:1e3,pointerEvents:"none",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:8,padding:"8px 12px",fontSize:13,fontWeight:600,color:"var(--text)",boxShadow:"0 8px 24px rgba(0,0,0,0.25)",maxWidth:220,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},Ar={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},Ii=Object.keys(Ar),za=["Yearly","Quarterly","Monthly","Weekly"],tn=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],rp=[{label:"Q1 · Jan–Mar",startMonth:0},{label:"Q2 · Apr–Jun",startMonth:3},{label:"Q3 · Jul–Sep",startMonth:6},{label:"Q4 · Oct–Dec",startMonth:9}],Ta=new Date().getFullYear(),Ro=Array.from({length:8},(e,r)=>Ta-1+r);function G0(e=720){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const Mi=864e5,Vt=30,Ji=190,Eo=e=>new Date(e+"T00:00:00"),np=e=>e.toLocaleDateString("en-US",{month:"short",day:"numeric"}),U0=[{key:"yearly",label:"Yearly",horizons:["Yearly"]},{key:"quarterly",label:"Quarterly",horizons:["Quarterly"]},{key:"mw",label:"Monthly & Weekly",horizons:["Monthly","Weekly"]}],op={Yearly:"Yr",Quarterly:"Q",Monthly:"Mo",Weekly:"Wk"},V0={Yearly:"Y",Quarterly:"Q",Monthly:"M",Weekly:"W"},ip={Yearly:0,Quarterly:1,Monthly:2,Weekly:3},td=e=>za[Math.min(za.indexOf(e)+1,za.length-1)],ea=e=>{if(!e||!e.start_date)return Array.from({length:12},(a,l)=>l);const r=new Date(e.start_date+"T00:00:00"),n=new Date(e.end_date+"T00:00:00"),o=r.getFullYear(),i=r.getMonth(),s=n.getFullYear()>o?11:n.getMonth();return Array.from({length:s-i+1},(a,l)=>i+l)},Bi=e=>new Date(e+"T00:00:00").getFullYear(),Fh=(e,r,n)=>{const o=(n-1)*7+1,i=Math.min(o+6,new Date(e,r+1,0).getDate()),s=String(r+1).padStart(2,"0");return{start_date:`${e}-${s}-${String(o).padStart(2,"0")}`,end_date:`${e}-${s}-${String(i).padStart(2,"0")}`}},sp=(e,r,n,o=1)=>{const i=r;switch(e){case"Yearly":return{start_date:`${i}-01-01`,end_date:`${i}-12-31`};case"Quarterly":{const s=Math.floor(n/3)*3,a=s+1,l=s+3,d=new Date(i,l,0).getDate();return{start_date:`${i}-${String(a).padStart(2,"0")}-01`,end_date:`${i}-${String(l).padStart(2,"0")}-${d}`}}case"Monthly":{const s=new Date(i,n+1,0).getDate();return{start_date:`${i}-${String(n+1).padStart(2,"0")}-01`,end_date:`${i}-${String(n+1).padStart(2,"0")}-${s}`}}case"Weekly":return Fh(i,n,o);default:return{start_date:`${i}-01-01`,end_date:`${i}-12-31`}}},es=(e,r)=>{const n=new Date(e+"T00:00:00");return n.setDate(n.getDate()+r),`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`},rl=(e,r)=>Math.round((new Date(r+"T00:00:00")-new Date(e+"T00:00:00"))/Mi)+1,Y0=(e,r,n)=>{if(!n||!n.start_date||!n.end_date)return{start_date:e,end_date:r,clamped:!1};const o=rl(e,r);let i=e,s=r,a=!1;return i<n.start_date&&(i=n.start_date,s=es(i,o-1),a=!0),s>n.end_date&&(s=n.end_date,i=es(s,-(o-1)),a=!0,i<n.start_date&&(i=n.start_date)),{start_date:i,end_date:s,clamped:a}},K0=(e,r)=>new Date(e,r+1,0).getDate(),jc=e=>{const r=new Date(e.start_date+"T00:00:00");if(e.horizon==="Monthly")return K0(r.getFullYear(),r.getMonth());if(e.horizon==="Weekly"){const n=Math.min(Math.max(Math.ceil(r.getDate()/7),1),4),o=Fh(r.getFullYear(),r.getMonth(),n);return rl(o.start_date,o.end_date)}return rl(e.start_date,e.end_date)},ap=e=>Math.round(jc(e)*1.5),Q0=e=>e.horizon==="Monthly"||e.horizon==="Weekly",q0=e=>{if(!e.start_date)return"";const r=new Date(e.start_date+"T00:00:00"),n=r.getMonth();switch(e.horizon){case"Yearly":{const o=e.end_date?new Date(e.end_date+"T00:00:00").getFullYear():r.getFullYear();return o>r.getFullYear()?`${r.getFullYear()}–${o}`:`${r.getFullYear()}`}case"Quarterly":return`Q${Math.floor(n/3)+1} ${r.getFullYear()}`;case"Monthly":return`${tn[n]} ${r.getFullYear()}`;case"Weekly":return`${tn[n]} W${Math.ceil(r.getDate()/7)}`;default:return""}};function X0(){const[e,r]=c.useState([]),[n,o]=c.useState("All"),[i,s]=c.useState({}),[a,l]=c.useState({}),[d,g]=c.useState(null),[h,y]=c.useState(""),[f,E]=c.useState(0),[R,T]=c.useState(1),[z,m]=c.useState(Ta),[b,u]=c.useState(Ta),[k,j]=c.useState("Yearly"),[C,B]=c.useState(Ii[0]),[x,v]=c.useState(null),$=G0(),[Q,ne]=c.useState(!$),[be,A]=c.useState("day"),[K,re]=c.useState(null),ve=c.useRef(null);c.useEffect(()=>{ve.current=K},[K]);const Z=c.useRef(e);c.useEffect(()=>{Z.current=e},[e]);const[Y,ce]=c.useState(null),J=c.useRef(null);c.useEffect(()=>{J.current=Y},[Y]);const I=c.useRef(null),W=c.useRef(0),[_,P]=c.useState(null),de=c.useRef(null),ge=c.useCallback(M=>{P(M),clearTimeout(de.current),de.current=setTimeout(()=>P(null),2800)},[]),[De,q]=c.useState(null),oe=c.useRef(null),[G,le]=c.useState(null),[D,w]=c.useState(null),ie=(M,ee)=>{if(G===ee){le(null);return}const ze=M.currentTarget.getBoundingClientRect(),$e=ze.bottom+220<window.innerHeight;w({right:Math.max(8,window.innerWidth-ze.right),...$e?{top:ze.bottom+4}:{bottom:window.innerHeight-ze.top+4}}),le(ee)},me=M=>{clearTimeout(oe.current),oe.current=setTimeout(()=>q(M),350)},H=()=>{clearTimeout(oe.current),q(null)},fe=c.useCallback(()=>{F.getGoals().then(r).catch(console.error)},[]);c.useEffect(()=>{fe()},[fe]);const{deleteItem:he,toasts:Ee,handleUndo:Qe,handleDismiss:st}=yr(F.deleteGoal,F.restoreGoal,fe),Le=c.useCallback(async()=>{const M=ve.current;if(re(null),!M)return;const ee=Math.round(M.dx/(M.pxPerDay||Vt));if(!ee)return;let ze=es(M.g.start_date,ee),$e=es(M.g.end_date,ee);if(M.g.parent_goal_id){const rt=Z.current.find(Je=>Je.id===M.g.parent_goal_id),Ze=Y0(ze,$e,rt);Ze.clamped&&ge(`Can't move past "${(rt==null?void 0:rt.title)||"parent goal"}" — kept within its dates.`),ze=Ze.start_date,$e=Ze.end_date}(ze!==M.g.start_date||$e!==M.g.end_date)&&(await F.updateGoal(M.g.id,{pillar:M.g.pillar,start_date:ze,end_date:$e}),fe())},[fe,ge]),et=!!K;c.useEffect(()=>{if(!et)return;const M=Ze=>{W.current=Ze.clientX,re(Je=>Je&&{...Je,dx:Ze.clientX-Je.startX})},ee=()=>Le();window.addEventListener("pointermove",M),window.addEventListener("pointerup",ee);const ze=44,$e=16,rt=setInterval(()=>{const Ze=I.current;if(!Ze)return;const Je=Ze.getBoundingClientRect(),ft=W.current;let Te=0;if(ft<Je.left+ze?Te=-1:ft>Je.right-ze&&(Te=1),!Te)return;const Ut=Ze.scrollLeft;Ze.scrollLeft=Math.max(0,Math.min(Ut+Te*$e,Ze.scrollWidth-Ze.clientWidth));const kr=Ze.scrollLeft-Ut;kr&&re(kt=>kt&&{...kt,startX:kt.startX-kr,dx:ft-(kt.startX-kr)})},16);return()=>{window.removeEventListener("pointermove",M),window.removeEventListener("pointerup",ee),clearInterval(rt)}},[et,Le]);const Ke=c.useCallback(async()=>{const M=J.current;if(ce(null),!M)return;const ee=M.g,ze=jc(ee),$e=ap(ee),rt=Math.max(ze,Math.min($e,rl(ee.start_date,ee.end_date)+Math.round(M.dx/Vt)));let Ze=es(ee.start_date,rt-1);if(ee.parent_goal_id){const Je=Z.current.find(ft=>ft.id===ee.parent_goal_id);Je!=null&&Je.end_date&&Ze>Je.end_date&&(Ze=Je.end_date,ge(`Can't extend past "${(Je==null?void 0:Je.title)||"parent goal"}" — kept within its dates.`))}Ze!==ee.end_date&&Ze>=ee.start_date&&(await F.updateGoal(ee.id,{end_date:Ze}),fe())},[fe,ge]),ut=!!Y;c.useEffect(()=>{if(!ut)return;const M=ze=>ce($e=>$e&&{...$e,dx:ze.clientX-$e.startX}),ee=()=>Ke();return window.addEventListener("pointermove",M),window.addEventListener("pointerup",ee),()=>{window.removeEventListener("pointermove",M),window.removeEventListener("pointerup",ee)}},[ut,Ke]);const ae=n==="All",We=Ar[n]||{dot:"var(--text-3)"},qe=ae?e:e.filter(M=>M.pillar===n),tt=qe.filter(M=>!M.parent_goal_id),ht=M=>qe.filter(ee=>ee.parent_goal_id===M),_t=M=>l(ee=>({...ee,[M]:!ee[M]})),It=M=>M.horizon==="Monthly"||M.horizon==="Weekly",xt=M=>i[M.id]!==void 0?i[M.id]:It(M),yt=M=>s(ee=>({...ee,[M.id]:!xt(M)})),At=(M,ee=null)=>{g(M),y(""),T(1);const ze=ee?Bi(ee.start_date):Ta;m(ze),u(ze),M==="ROOT"&&B(ae?Ii[0]:n);const $e=M==="ROOT"?"Yearly":td(ee==null?void 0:ee.horizon);j($e);const rt=M==="ROOT"?Array.from({length:12},(Ze,Je)=>Je):ea(ee);E($e==="Quarterly"?Math.floor(rt[0]/3)*3:rt[0]??0)},Er=async(M,ee)=>{if(!h.trim())return;const ze=(ee==null?void 0:ee.horizon)??null,$e=M==="ROOT"?k:td(ze),rt=M==="ROOT"?C:(ee==null?void 0:ee.pillar)||n;let Ze,Je;if($e==="Yearly"){const ft=Number(z),Te=Math.max(ft,Number(b)||ft);Ze=`${ft}-01-01`,Je=`${Te}-12-31`}else{const ft=ee?Bi(ee.start_date):Number(z);({start_date:Ze,end_date:Je}=sp($e,ft,f,R))}await F.createGoal({pillar:rt,title:h.trim(),horizon:$e,parent_goal_id:M==="ROOT"?null:M,start_date:Ze,end_date:Je}),M!=="ROOT"&&l(ft=>({...ft,[M]:!0})),g(null),y(""),fe()},Ne=M=>{const ee=M.start_date?new Date(M.start_date+"T00:00:00"):new Date,ze=ee.getMonth(),$e=Math.min(Math.max(Math.ceil(ee.getDate()/7),1),4);v({id:M.id,title:M.title,pillar:M.pillar,horizon:M.horizon,parentGoal:e.find(rt=>rt.id===M.parent_goal_id)||null,year:Bi(M.start_date),endYear:Bi(M.end_date),month:M.horizon==="Quarterly"?Math.floor(ze/3)*3:ze,week:$e})},dt=async()=>{if(!x||!x.title.trim())return;let M,ee;if(x.horizon==="Yearly"){const ze=Number(x.year),$e=Math.max(ze,Number(x.endYear)||ze);M=`${ze}-01-01`,ee=`${$e}-12-31`}else{let ze=x.month;x.horizon==="Weekly"&&x.parentGoal&&(ze=ea(x.parentGoal)[0]);const $e=x.parentGoal?Bi(x.parentGoal.start_date):Number(x.year);({start_date:M,end_date:ee}=sp(x.horizon,$e,ze,x.week))}await F.updateGoal(x.id,{title:x.title.trim(),pillar:x.pillar,start_date:M,end_date:ee}),v(null),fe()},Bt=({parentId:M,parentGoal:ee,depth:ze})=>{const $e=M==="ROOT",rt=$e?k:td((ee==null?void 0:ee.horizon)??null),Ze=$e?Array.from({length:12},(Te,Ut)=>Ut):ea(ee),Je=rp.filter(Te=>Ze.includes(Te.startMonth)),ft=Te=>{j(Te),E(0),T(1),u(z)};return t.jsxs("div",{style:{...pe.addBox,marginLeft:ze*24},children:[t.jsx("input",{autoFocus:!0,placeholder:`New ${rt.toLowerCase()} goal…`,value:h,onChange:Te=>y(Te.target.value),onKeyDown:Te=>{Te.key==="Enter"&&Er(M,ee),Te.key==="Escape"&&g(null)},style:pe.input}),$e&&ae&&t.jsx("select",{value:C,onChange:Te=>B(Te.target.value),style:pe.monthSelect,title:"Pillar",children:Ii.map(Te=>t.jsx("option",{value:Te,children:Te},Te))}),$e&&t.jsx("select",{value:k,onChange:Te=>ft(Te.target.value),style:pe.monthSelect,title:"Goal level",children:za.map(Te=>t.jsx("option",{value:Te,children:Te},Te))}),rt==="Yearly"&&t.jsxs(t.Fragment,{children:[t.jsx("select",{value:z,onChange:Te=>{const Ut=Number(Te.target.value);m(Ut),b<Ut&&u(Ut)},style:pe.monthSelect,title:"Start year",children:Ro.map(Te=>t.jsx("option",{value:Te,children:Te},Te))}),t.jsx("span",{style:pe.toTag,children:"to"}),t.jsx("select",{value:b,onChange:Te=>u(Number(Te.target.value)),style:pe.monthSelect,title:"End year (spans multiple years)",children:Ro.filter(Te=>Te>=z).map(Te=>t.jsx("option",{value:Te,children:Te},Te))})]}),rt!=="Yearly"&&$e&&t.jsx("select",{value:z,onChange:Te=>m(Number(Te.target.value)),style:pe.monthSelect,title:"Year",children:Ro.map(Te=>t.jsx("option",{value:Te,children:Te},Te))}),rt==="Quarterly"&&t.jsx("select",{value:f,onChange:Te=>E(Number(Te.target.value)),style:pe.monthSelect,children:Je.map(Te=>t.jsx("option",{value:Te.startMonth,children:Te.label},Te.startMonth))}),rt==="Monthly"&&t.jsx("select",{value:f,onChange:Te=>E(Number(Te.target.value)),style:pe.monthSelect,children:Ze.map(Te=>t.jsx("option",{value:Te,children:tn[Te]},Te))}),rt==="Weekly"&&t.jsxs(t.Fragment,{children:[$e?t.jsx("select",{value:f,onChange:Te=>E(Number(Te.target.value)),style:pe.monthSelect,children:Ze.map(Te=>t.jsx("option",{value:Te,children:tn[Te]},Te))}):t.jsx("span",{style:pe.inheritTag,children:tn[Ze[0]]}),t.jsx("select",{value:R,onChange:Te=>T(Number(Te.target.value)),style:pe.monthSelect,children:[1,2,3,4].map(Te=>t.jsxs("option",{value:Te,children:["Week ",Te]},Te))})]}),t.jsx("button",{onClick:()=>Er(M,ee),style:pe.saveBtn,children:t.jsx(Oe,{size:14})}),t.jsx("button",{onClick:()=>g(null),style:pe.cancelBtn,children:t.jsx(Be,{size:14})})]})},zt=({goal:M,depth:ee})=>{var Je,ft,Te,Ut,kr;const ze=ht(M.id),$e=a[M.id],rt=M.horizon!=="Weekly";if((x==null?void 0:x.id)===M.id){const kt=ea(x.parentGoal),oo=rp.filter(He=>kt.includes(He.startMonth)),xi=!x.parentGoal;return t.jsxs("div",{style:{...pe.editBox,marginLeft:ee*24},children:[t.jsx("input",{autoFocus:!0,value:x.title,onChange:He=>v({...x,title:He.target.value}),onKeyDown:He=>He.key==="Enter"&&dt(),style:{...pe.input,flex:1}}),t.jsx("select",{value:x.pillar,onChange:He=>v({...x,pillar:He.target.value}),style:pe.monthSelect,children:Ii.map(He=>t.jsx("option",{children:He},He))}),x.horizon==="Yearly"&&t.jsxs(t.Fragment,{children:[t.jsx("select",{value:x.year,onChange:He=>{const yi=Number(He.target.value);v({...x,year:yi,endYear:Math.max(yi,x.endYear)})},style:pe.monthSelect,title:"Start year",children:Ro.map(He=>t.jsx("option",{value:He,children:He},He))}),t.jsx("span",{style:pe.toTag,children:"to"}),t.jsx("select",{value:x.endYear,onChange:He=>v({...x,endYear:Number(He.target.value)}),style:pe.monthSelect,title:"End year (spans multiple years)",children:Ro.filter(He=>He>=x.year).map(He=>t.jsx("option",{value:He,children:He},He))})]}),x.horizon!=="Yearly"&&xi&&t.jsx("select",{value:x.year,onChange:He=>v({...x,year:Number(He.target.value)}),style:pe.monthSelect,title:"Year",children:Ro.map(He=>t.jsx("option",{value:He,children:He},He))}),x.horizon==="Quarterly"&&t.jsx("select",{value:x.month,onChange:He=>v({...x,month:Number(He.target.value)}),style:pe.monthSelect,children:oo.map(He=>t.jsx("option",{value:He.startMonth,children:He.label},He.startMonth))}),x.horizon==="Monthly"&&t.jsx("select",{value:x.month,onChange:He=>v({...x,month:Number(He.target.value)}),style:pe.monthSelect,children:kt.map(He=>t.jsx("option",{value:He,children:tn[He]},He))}),x.horizon==="Weekly"&&t.jsxs(t.Fragment,{children:[xi?t.jsx("select",{value:x.month,onChange:He=>v({...x,month:Number(He.target.value)}),style:pe.monthSelect,children:kt.map(He=>t.jsx("option",{value:He,children:tn[He]},He))}):t.jsx("span",{style:pe.inheritTag,children:tn[kt[0]]}),t.jsx("select",{value:x.week,onChange:He=>v({...x,week:Number(He.target.value)}),style:pe.monthSelect,children:[1,2,3,4].map(He=>t.jsxs("option",{value:He,children:["Week ",He]},He))})]}),t.jsx("button",{onClick:dt,style:pe.saveBtn,children:t.jsx(Oe,{size:14})}),t.jsx("button",{onClick:()=>v(null),style:pe.cancelBtn,children:t.jsx(Be,{size:14})})]})}return t.jsxs("div",{children:[t.jsxs("div",{style:{...pe.row,marginLeft:ee*24,background:ee===0&&((Je=Ar[M.pillar])==null?void 0:Je.soft)||"transparent"},children:[ze.length>0?t.jsx("button",{onClick:()=>_t(M.id),style:pe.caret,children:$e?t.jsx(ro,{size:15}):t.jsx(ln,{size:15})}):t.jsx("span",{style:{...pe.caret,opacity:.25},children:t.jsx(Eg,{size:12})}),t.jsx("span",{style:{...pe.horizonTag,color:((ft=Ar[M.pillar])==null?void 0:ft.dot)||We.dot,borderColor:((Te=Ar[M.pillar])==null?void 0:Te.dot)||We.dot},title:M.horizon,children:$?V0[M.horizon]:M.horizon}),t.jsxs("div",{style:pe.nameCol,children:[t.jsx("span",{style:{...pe.title,...De===M.id?pe.titleFull:{}},title:M.title,onPointerDown:()=>me(M.id),onPointerUp:H,onPointerLeave:H,onPointerCancel:H,children:M.title}),t.jsx("span",{style:pe.whenSub,children:q0(M)})]}),$?t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{position:"relative",flexShrink:0},children:[t.jsx("button",{onClick:kt=>ie(kt,M.id),style:pe.rowAdd,title:"Options",children:t.jsx(Sh,{size:15})}),G===M.id&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:pe.menuBackdrop,onClick:()=>le(null)}),t.jsxs("div",{style:{...pe.goalMenu,...D},children:[t.jsxs("button",{style:pe.menuItem,onClick:()=>{Ne(M),le(null)},children:[t.jsx(St,{size:14})," Edit"]}),rt&&t.jsxs("button",{style:pe.menuItem,onClick:()=>{l(kt=>({...kt,[M.id]:!0})),At(M.id,M),le(null)},children:[t.jsx(at,{size:14})," Add sub-goal"]}),t.jsxs("button",{style:{...pe.menuItem,color:"#C2536B"},onClick:()=>{he(M.id,M.title),le(null)},children:[t.jsx(Be,{size:14})," Delete"]})]})]})]}),t.jsx("button",{onClick:()=>yt(M),style:{...pe.rowAdd,color:xt(M)?((Ut=Ar[M.pillar])==null?void 0:Ut.dot)||We.dot:"var(--text-3)"},title:xt(M)?"Showing on timeline":"Hidden from timeline",children:xt(M)?t.jsx(vs,{size:14}):t.jsx(Za,{size:14})})]}):t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>yt(M),style:{...pe.rowAdd,color:xt(M)?((kr=Ar[M.pillar])==null?void 0:kr.dot)||We.dot:"var(--text-3)"},title:xt(M)?"Showing on timeline — click to hide":"Hidden from timeline — click to show",children:xt(M)?t.jsx(vs,{size:13}):t.jsx(Za,{size:13})}),t.jsx("button",{onClick:()=>Ne(M),style:pe.rowAdd,title:"Edit",children:t.jsx(St,{size:12})}),rt&&t.jsx("button",{onClick:()=>{l(kt=>({...kt,[M.id]:!0})),At(M.id,M)},style:pe.rowAdd,title:"Add sub-goal",children:t.jsx(at,{size:13})}),t.jsx("button",{onClick:()=>he(M.id,M.title),style:{...pe.rowAdd,color:"var(--text-3)"},title:"Delete",children:t.jsx(Be,{size:13})})]})]}),$e&&ze.map(kt=>t.jsx(zt,{goal:kt,depth:ee+1},kt.id)),$e&&d===M.id&&t.jsx(Bt,{parentId:M.id,parentGoal:M,depth:ee+1})]})},pt=e.filter(M=>xt(M)&&M.start_date&&M.end_date),jr=U0.map(M=>({...M,items:pt.filter(ee=>M.horizons.includes(ee.horizon)).sort((ee,ze)=>ee.pillar.localeCompare(ze.pillar)||ee.start_date.localeCompare(ze.start_date)||ip[ee.horizon]-ip[ze.horizon]||ee.end_date.localeCompare(ze.end_date))})).filter(M=>M.items.length>0),vt=(()=>{if(!pt.length)return null;let M=pt[0].start_date,ee=pt[0].end_date;return pt.forEach(ze=>{ze.start_date<M&&(M=ze.start_date),ze.end_date>ee&&(ee=ze.end_date)}),{start:Eo(M),end:Eo(ee)}})(),p=(()=>{if(!vt)return[];const M=[];for(let ee=vt.start.getTime();ee<=vt.end.getTime();ee+=Mi)M.push(new Date(ee));return M})(),L=p.length,Fe=(()=>{const M=[];return p.forEach(ee=>{const ze=`${ee.getFullYear()}-${ee.getMonth()}`,$e=M[M.length-1];$e&&$e.key===ze?$e.days++:M.push({key:ze,label:`${tn[ee.getMonth()]} '${String(ee.getFullYear()).slice(2)}`,days:1})}),M})(),_e=new Date;_e.setHours(0,0,0,0);const Xe=vt?Math.round((_e-vt.start)/Mi):-1,ot=Xe>=0&&Xe<L,ur=M=>Math.round((Eo(M.end_date)-Eo(M.start_date))/Mi)+1,jt=be==="month",ir=vt?vt.start.getFullYear():0,gt=vt?vt.start.getMonth():0,sr=(()=>{if(!vt)return[];const M=[];let ee=ir,ze=gt;const $e=vt.end.getFullYear(),rt=vt.end.getMonth();for(;ee<$e||ee===$e&&ze<=rt;)M.push({y:ee,m:ze}),ze++,ze>11&&(ze=0,ee++);return M})(),Bn=sr.length||1,hi=(M,ee)=>{const ze=Eo(M),$e=(ze.getFullYear()-ir)*12+ze.getMonth()-gt,rt=new Date(ze.getFullYear(),ze.getMonth()+1,0).getDate();return $e+(ze.getDate()-(ee?0:1))/rt},fi=(M,ee)=>hi(M,ee)/Bn*100,Tl=`${_e.getFullYear()}-${String(_e.getMonth()+1).padStart(2,"0")}-${String(_e.getDate()).padStart(2,"0")}`,N=vt?fi(Tl,!1):0,Re=(Q?Ji:0)+Xe*Vt,nt=vt?`${vt.start.getTime()}-${vt.end.getTime()}`:"";return c.useEffect(()=>{if(jt||!ot)return;const M=I.current;M&&(M.scrollLeft=Math.max(0,Re-M.clientWidth/2+Vt/2))},[nt,Xe,Q,ot,jt]),t.jsxs("div",{style:pe.page,children:[t.jsxs("div",{style:pe.head,children:[t.jsx("div",{style:pe.eyebrow,children:"Anvil · Goals"}),t.jsx("h1",{style:pe.h1,children:ae?"All Goals":`${n} Goals`})]}),t.jsxs("div",{style:pe.pillarPicker,children:[t.jsx("button",{onClick:()=>{o("All"),g(null),v(null)},style:{...pe.pillarChip,...ae?{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:"All Goals"}),Ii.map(M=>{const ee=M===n;return t.jsxs("button",{onClick:()=>{o(M),g(null),v(null)},style:{...pe.pillarChip,...ee?{background:Ar[M].dot,color:"#fff",borderColor:Ar[M].dot}:{}},children:[t.jsx("span",{style:{...pe.dot,background:ee?"#fff":Ar[M].dot}}),M]},M)})]}),t.jsxs("div",{style:pe.list,children:[tt.map(M=>t.jsx(zt,{goal:M,depth:0},M.id)),tt.length===0&&t.jsxs("div",{style:pe.ganttEmpty,children:["No goals yet",ae?"":` for ${n}`,"."]}),d==="ROOT"&&t.jsx(Bt,{parentId:"ROOT",parentGoal:null,depth:0}),d!=="ROOT"&&t.jsxs("button",{onClick:()=>At("ROOT",null),style:pe.rootAdd,children:[t.jsx(at,{size:14})," Add new goal"]})]}),t.jsxs("div",{style:pe.ganttWrap,children:[t.jsxs("div",{style:pe.ganttTop,children:[t.jsxs("div",{style:pe.ganttTitle,children:[jt?"Monthly":"Daily"," Timeline",vt?` · ${np(vt.start)} – ${np(vt.end)}`:""]}),t.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[t.jsxs("div",{style:pe.zoomToggle,children:[t.jsx("button",{onClick:()=>A("day"),style:{...pe.zoomBtn,...jt?{}:pe.zoomBtnOn},children:"Day"}),t.jsx("button",{onClick:()=>A("month"),style:{...pe.zoomBtn,...jt?pe.zoomBtnOn:{}},children:"Month"})]}),t.jsxs("button",{onClick:()=>ne(M=>!M),style:pe.labelToggle,children:[Q?t.jsx(p0,{size:14}):t.jsx(b0,{size:14}),Q?"Hide names":"Show names"]})]})]}),vt?jt?t.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[t.jsxs("div",{style:pe.gBandRow,children:[Q&&t.jsx("div",{style:{...pe.gLabelHead,zIndex:4},children:"Goal"}),t.jsx("div",{style:{flex:1,display:"grid",gridTemplateColumns:`repeat(${Bn}, 1fr)`,minWidth:0},children:sr.map((M,ee)=>t.jsxs("div",{style:pe.gMonthFluid,children:[tn[M.m],M.m===0||ee===0?` '${String(M.y).slice(2)}`:""]},ee))})]}),jr.map(M=>t.jsxs("div",{children:[t.jsxs("div",{style:pe.gGroupRow,children:[Q?t.jsxs("div",{style:pe.gGroupLabel,children:[M.label,t.jsx("span",{style:pe.gGroupCount,children:M.items.length})]}):t.jsxs("div",{style:pe.gGroupChip,children:[M.label," · ",M.items.length]}),t.jsx("div",{style:{flex:1}})]}),M.items.map(ee=>{var kr;const ze=((kr=Ar[ee.pillar])==null?void 0:kr.dot)||"#9A968C",$e=(K==null?void 0:K.id)===ee.id,rt=$e?K.dx:0,Ze=fi(ee.start_date,!1),Je=Math.max(2,fi(ee.end_date,!0)-Ze),ft=ur(ee),Te=Je>=14,Ut=`${ee.title} · ${ee.start_date} → ${ee.end_date} · ${ft} day${ft>1?"s":""}`;return t.jsxs("div",{style:pe.gRow,children:[Q&&t.jsxs("div",{style:{...pe.gLabel,paddingLeft:12},children:[t.jsx("span",{style:{...pe.ganttRowDot,background:ze}}),t.jsx("span",{style:{...pe.gHzTag,color:ze,borderColor:ze},children:op[ee.horizon]}),t.jsx("span",{style:pe.gLabelText,title:ee.title,children:ee.title}),t.jsxs("span",{style:pe.gDurChip,children:[ft,"d"]})]}),t.jsxs("div",{style:{position:"relative",flex:1,minHeight:36,minWidth:0,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent calc(100% / ${Bn}))`},children:[ot&&t.jsx("div",{style:{...pe.gTodayLine,left:`${N}%`}}),t.jsxs("div",{onPointerDown:kt=>{kt.preventDefault(),W.current=kt.clientX;const oo=kt.currentTarget.parentNode.offsetWidth;re({id:ee.id,startX:kt.clientX,dx:0,g:ee,pxPerDay:oo/L})},style:{...pe.gBar,left:`${Ze}%`,width:`${Je}%`,background:ze,cursor:$e?"grabbing":"grab",transform:rt?`translateX(${rt}px)`:"none",zIndex:$e?6:1,boxShadow:$e?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:Ut,children:[t.jsx(Ja,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff"}}),Te&&t.jsx("span",{style:pe.gBarLabel,children:ee.title})]}),!Te&&t.jsx("span",{style:{...pe.gBarOutside,left:`calc(${Ze+Je}% + 6px)`},title:Ut,children:ee.title})]})]},ee.id)})]},M.key))]}):t.jsx("div",{style:pe.ganttScroll,ref:I,children:t.jsxs("div",{style:{minWidth:(Q?Ji:0)+L*Vt,position:"relative"},children:[ot&&t.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:Re,width:Vt,background:"color-mix(in srgb, var(--accent) 14%, transparent)",pointerEvents:"none",zIndex:3}}),t.jsxs("div",{style:pe.gBandRow,children:[Q&&t.jsx("div",{style:{...pe.gLabelHead,zIndex:4},children:"Goal"}),t.jsx("div",{style:{display:"flex"},children:Fe.map((M,ee)=>t.jsx("div",{style:{...pe.gMonthCell,width:M.days*Vt},children:M.label},ee))})]}),t.jsxs("div",{style:pe.gBandRow,children:[Q&&t.jsx("div",{style:{...pe.gLabelHead,zIndex:4,fontSize:10,color:"var(--text-3)",fontWeight:600},children:"days →"}),t.jsx("div",{style:{display:"flex"},children:p.map((M,ee)=>{const ze=M.getDay()===0||M.getDay()===6,$e=ee===Xe;return t.jsx("div",{style:{...pe.gDayCell,...ze?pe.gWeekend:{},...$e?pe.gTodayCell:{}},children:M.getDate()},ee)})})]}),jr.map(M=>t.jsxs("div",{children:[t.jsxs("div",{style:pe.gGroupRow,children:[Q?t.jsxs("div",{style:pe.gGroupLabel,children:[M.label,t.jsx("span",{style:pe.gGroupCount,children:M.items.length})]}):t.jsxs("div",{style:pe.gGroupChip,children:[M.label," · ",M.items.length]}),t.jsx("div",{style:{width:L*Vt,flexShrink:0}})]}),M.items.map(ee=>{var yi;const ze=((yi=Ar[ee.pillar])==null?void 0:yi.dot)||"#9A968C",$e=Math.round((Eo(ee.start_date)-vt.start)/Mi),rt=ur(ee),Ze=(K==null?void 0:K.id)===ee.id,Je=Ze?K.dx:0,ft=Q0(ee),Te=(Y==null?void 0:Y.id)===ee.id,Ut=ft?jc(ee):rt,kr=ft?ap(ee):rt,kt=Te?Math.max(Ut,Math.min(kr,rt+Math.round(Y.dx/Vt))):rt,oo=kt*Vt-4,xi=oo>=54,He=`${ee.title} · ${ee.start_date} → ${ee.end_date} · ${kt} day${kt>1?"s":""}${ft?` (max ${kr})`:""}`;return t.jsxs("div",{style:pe.gRow,children:[Q&&t.jsxs("div",{style:{...pe.gLabel,paddingLeft:12},children:[t.jsx("span",{style:{...pe.ganttRowDot,background:ze}}),t.jsx("span",{style:{...pe.gHzTag,color:ze,borderColor:ze},children:op[ee.horizon]}),t.jsx("span",{style:pe.gLabelText,title:ee.title,children:ee.title}),t.jsxs("span",{style:pe.gDurChip,children:[kt,"d"]})]}),t.jsxs("div",{style:{...pe.gTrack,width:L*Vt},children:[ot&&t.jsx("div",{style:{...pe.gTodayLine,left:Xe*Vt}}),t.jsxs("div",{onPointerDown:io=>{io.preventDefault(),W.current=io.clientX,re({id:ee.id,startX:io.clientX,dx:0,g:ee,pxPerDay:Vt})},style:{...pe.gBar,left:$e*Vt+2,width:oo,background:ze,cursor:Ze?"grabbing":"grab",transform:Je?`translateX(${Je}px)`:"none",zIndex:Ze||Te?6:1,boxShadow:Ze||Te?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:He,children:[ft&&kt>Ut&&t.jsx("div",{style:{position:"absolute",left:Ut*Vt,top:0,bottom:0,right:0,background:"#C2536B",borderRadius:"0 5px 5px 0"}}),t.jsx(Ja,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff",position:"relative",zIndex:1}}),xi&&t.jsx("span",{style:{...pe.gBarLabel,position:"relative",zIndex:1},children:ee.title}),ft&&t.jsx("div",{onPointerDown:io=>{io.preventDefault(),io.stopPropagation(),ce({id:ee.id,startX:io.clientX,dx:0,g:ee})},style:pe.resizeHandle,title:`Drag to extend up to ${kr} days`,children:t.jsx("div",{style:pe.resizeGrip})})]}),!xi&&t.jsx("span",{style:{...pe.gBarOutside,left:$e*Vt+oo+8+Je},title:He,children:ee.title})]})]},ee.id)})]},M.key))]})}):t.jsx("div",{style:pe.ganttEmpty,children:"No goals on the timeline. Click the eye icon on a goal to show it here."}),vt&&t.jsxs("div",{style:pe.gLegend,children:[t.jsxs("span",{style:pe.gLegendItem,children:[t.jsx("span",{style:{...pe.gLegendBar}})," bar length = number of days"]}),t.jsxs("span",{style:pe.gLegendItem,children:[t.jsx("span",{style:pe.gLegendToday})," today"]})]})]}),_&&t.jsxs("div",{style:pe.warnToast,children:[t.jsx(T0,{size:15,style:{flexShrink:0}}),t.jsx("span",{children:_})]}),t.jsx(vr,{toasts:Ee,onUndo:Qe,onDismiss:st})]})}const pe={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},pillarPicker:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},pillarChip:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},list:{background:"var(--surface)",borderRadius:12,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"hidden"},row:{display:"flex",alignItems:"center",gap:9,padding:"9px 10px",borderRadius:8,flexWrap:"nowrap"},caret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},horizonTag:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",border:"1px solid",borderRadius:5,padding:"2px 6px",flexShrink:0},nameCol:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:1},title:{fontSize:14,fontWeight:500,lineHeight:1.3,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",userSelect:"none",WebkitUserSelect:"none",cursor:"default"},titleFull:{whiteSpace:"normal",overflow:"visible",textOverflow:"clip",wordBreak:"break-word"},whenSub:{fontSize:11,fontStyle:"italic",color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},rowAdd:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,flexShrink:0},menuBackdrop:{position:"fixed",inset:0,zIndex:40},goalMenu:{position:"fixed",zIndex:41,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 6px 24px rgba(0,0,0,0.18)",padding:4,minWidth:180,display:"flex",flexDirection:"column"},menuItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:7,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text)",textAlign:"left"},rootAdd:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"var(--text-2)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"9px 12px",cursor:"pointer",fontWeight:600,fontFamily:"inherit",marginTop:6,width:"100%",justifyContent:"center"},addBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 0 6px 28px",flexWrap:"wrap"},editBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 10px",flexWrap:"wrap",background:"var(--bg)",borderRadius:8,margin:"4px 0"},input:{border:"1px solid var(--border)",borderRadius:7,padding:"8px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",flex:1,minWidth:120},monthSelect:{border:"1px solid var(--border)",borderRadius:7,padding:"8px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},inheritTag:{fontSize:11.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"6px 9px",borderRadius:7,flexShrink:0},toTag:{fontSize:11.5,fontWeight:600,color:"var(--text-3)",flexShrink:0},warnToast:{position:"fixed",top:18,left:"50%",transform:"translateX(-50%)",zIndex:300,display:"flex",alignItems:"center",gap:8,maxWidth:"90vw",background:"#C2536B",color:"#fff",padding:"10px 16px",borderRadius:10,fontSize:13,fontWeight:600,boxShadow:"0 6px 24px rgba(0,0,0,0.25)"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},ganttWrap:{background:"var(--surface)",borderRadius:12,padding:"16px 14px",marginTop:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},ganttTop:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10,marginBottom:14},ganttTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",fontFamily:"'Fraunces',Georgia,serif"},labelToggle:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 10px",borderRadius:8,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},zoomToggle:{display:"inline-flex",border:"1px solid var(--border)",borderRadius:8,overflow:"hidden"},zoomBtn:{border:"none",background:"var(--surface)",color:"var(--text-2)",padding:"5px 12px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},zoomBtnOn:{background:"var(--accent-strong)",color:"#fff"},gMonthFluid:{borderLeft:"1px solid var(--border)",fontSize:10,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gGroupChip:{position:"sticky",left:0,zIndex:3,background:"var(--surface-2)",padding:"5px 10px",fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",whiteSpace:"nowrap",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center"},ganttEmpty:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},ganttScroll:{overflowX:"auto"},ganttRowDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},gBandRow:{display:"flex",alignItems:"stretch",borderBottom:"1px solid var(--border)"},gLabelHead:{width:Ji,flexShrink:0,position:"sticky",left:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",padding:"6px 10px",fontSize:12,fontWeight:700,color:"var(--text-2)"},gMonthCell:{flexShrink:0,borderLeft:"1px solid var(--border)",fontSize:10.5,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gDayCell:{width:Vt,flexShrink:0,textAlign:"center",fontSize:10,color:"var(--text-3)",padding:"4px 0",borderLeft:"1px solid var(--border)",fontWeight:600},gWeekend:{background:"var(--surface-2)"},gTodayCell:{background:"var(--hover)",color:"var(--accent)",fontWeight:800},gGroupRow:{display:"flex",alignItems:"stretch",background:"var(--surface-2)",borderBottom:"1px solid var(--border)",borderTop:"1px solid var(--border)"},gGroupLabel:{width:Ji,flexShrink:0,position:"sticky",left:0,background:"var(--surface-2)",zIndex:3,padding:"6px 12px",fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",gap:7},gGroupCount:{fontSize:10,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},gHzTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.04em",border:"1px solid",borderRadius:4,padding:"1px 4px",flexShrink:0},gRow:{display:"flex",alignItems:"stretch",minHeight:36,borderBottom:"1px solid var(--border)"},gLabel:{width:Ji,flexShrink:0,display:"flex",alignItems:"center",gap:7,position:"sticky",left:0,background:"var(--surface)",zIndex:2,borderRight:"1px solid var(--border)",paddingRight:8,overflow:"hidden"},gLabelText:{flex:1,minWidth:0,fontSize:12,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},gDurChip:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",borderRadius:10,padding:"1px 6px",flexShrink:0,marginRight:6},gTrack:{position:"relative",flexShrink:0,minHeight:36,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent ${Vt}px)`},gBar:{position:"absolute",top:9,height:18,borderRadius:5,display:"flex",alignItems:"center",padding:"0 7px",boxShadow:"0 1px 2px rgba(0,0,0,0.15)",overflow:"hidden",zIndex:1},gBarLabel:{fontSize:11,fontWeight:600,color:"#fff",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},gBarOutside:{position:"absolute",top:9,height:18,display:"flex",alignItems:"center",fontSize:11,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",pointerEvents:"none",zIndex:1},resizeHandle:{position:"absolute",right:0,top:0,bottom:0,width:12,cursor:"ew-resize",display:"grid",placeItems:"center",touchAction:"none",zIndex:2},resizeGrip:{width:2,height:11,background:"rgba(255,255,255,0.9)",borderRadius:1,boxShadow:"3px 0 0 rgba(255,255,255,0.6)"},gTodayLine:{position:"absolute",top:0,bottom:0,width:2,background:"#C2536B",zIndex:0,opacity:.6},gLegend:{display:"flex",gap:16,marginTop:12,fontSize:11,color:"var(--text-3)",flexWrap:"wrap"},gLegendItem:{display:"flex",alignItems:"center",gap:6,fontWeight:600},gLegendBar:{width:18,height:8,borderRadius:3,background:"var(--accent)",display:"inline-block"},gLegendToday:{width:2,height:12,background:"#C2536B",display:"inline-block"}},Z0=`
@keyframes anvilDdPop { 0% { opacity: 0; transform: translateY(-4px) scale(0.98); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
.anvil-dd-item:hover { background: var(--hover); }
`;function nr({value:e,options:r,onChange:n,style:o,placeholder:i="Select…"}){const[s,a]=c.useState(!1),l=c.useRef(null),d=(r||[]).map(h=>h!==null&&typeof h=="object"?h:{value:h,label:String(h)}),g=d.find(h=>String(h.value)===String(e));return c.useEffect(()=>{if(!s)return;const h=f=>{l.current&&!l.current.contains(f.target)&&a(!1)},y=f=>{f.key==="Escape"&&a(!1)};return document.addEventListener("mousedown",h),document.addEventListener("keydown",y),()=>{document.removeEventListener("mousedown",h),document.removeEventListener("keydown",y)}},[s]),t.jsxs("div",{ref:l,style:{...cn.wrap,...o},children:[t.jsxs("button",{type:"button",onClick:()=>a(h=>!h),style:{...cn.trigger,...s?cn.triggerOpen:{}},children:[t.jsx("span",{style:{...cn.triggerLbl,...g?{}:{color:"var(--text-3)"}},children:g?g.label:i}),t.jsx(ro,{size:14,style:{...cn.chev,...s?{transform:"rotate(180deg)"}:{}}})]}),s&&t.jsxs("div",{style:cn.menu,children:[t.jsx("style",{children:Z0}),d.map(h=>{const y=String(h.value)===String(e);return t.jsxs("button",{type:"button",className:"anvil-dd-item",onClick:()=>{n(h.value),a(!1)},style:{...cn.item,...y?cn.itemSel:{}},children:[t.jsx("span",{style:cn.itemLbl,children:h.label}),y&&t.jsx(Oe,{size:13,style:{flexShrink:0}})]},String(h.value))})]})]})}const cn={wrap:{position:"relative",minWidth:0},trigger:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,width:"100%",border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text)",borderRadius:9,padding:"8px 11px",fontSize:13,fontWeight:500,cursor:"pointer",fontFamily:"inherit",textAlign:"left",transition:"border-color 0.15s ease, box-shadow 0.15s ease"},triggerOpen:{borderColor:"var(--accent)",boxShadow:"0 0 0 3px color-mix(in srgb, var(--accent) 20%, transparent)"},triggerLbl:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},chev:{color:"var(--text-3)",flexShrink:0,transition:"transform 0.15s ease"},menu:{position:"absolute",top:"calc(100% + 4px)",left:0,right:0,zIndex:400,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 10px 32px rgba(0,0,0,0.16)",padding:4,maxHeight:240,overflowY:"auto",animation:"anvilDdPop 0.14s ease"},item:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,width:"100%",border:"none",background:"none",color:"var(--text)",borderRadius:7,padding:"8px 10px",fontSize:13,fontWeight:500,cursor:"pointer",fontFamily:"inherit",textAlign:"left"},itemSel:{background:"color-mix(in srgb, var(--accent) 12%, transparent)",color:"var(--accent)",fontWeight:700},itemLbl:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},Dh=[{value:"regular",label:"Regular (yes/no)"},{value:"weekly",label:"Weekly (specific days)"},{value:"minimum",label:"Minimum (at least N)"},{value:"maximum",label:"Maximum (no more than N)"}],Wh=["day","week","month","year"],zn={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.12)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.12)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.12)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.12)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.12)"}},ti=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],J0=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ui=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Wg=()=>ui(new Date),ev=(e=0)=>{const r=new Date,n=r.getDay(),o=n===0?-6:1-n,i=new Date(r);return i.setDate(r.getDate()+o+e*7),Array.from({length:7},(s,a)=>{const l=new Date(i);return l.setDate(i.getDate()+a),ui(l)})},tv=(e=0)=>{const r=new Date,n=new Date(r.getFullYear(),r.getMonth()+e,1),o=n.getFullYear(),i=n.getMonth(),s=new Date(o,i+1,0).getDate(),a=n.getDay(),l=a===0?6:a-1,d=Array.from({length:s},(h,y)=>`${o}-${String(i+1).padStart(2,"0")}-${String(y+1).padStart(2,"0")}`),g=n.toLocaleDateString("en-US",{month:"long",year:"numeric"});return{dates:d,startOffset:l,label:g,year:o,month:i}},lp=e=>new Date(e+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"}),rv=(e,r)=>{var i;const n=Number(e==null?void 0:e.min_interval_min)||0;if(n<=0||r!==Wg())return 0;const o=(i=e.log_count_times)==null?void 0:i[r];return o?Math.max(0,new Date(o).getTime()+n*6e4-Date.now()):0},Mh=e=>{const r=Math.ceil(e/1e3);return`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`},$n=Wg(),nv=new Date().getFullYear();function ov(){var ge,De;const[e,r]=c.useState([]),[n,o]=c.useState("ALL"),[i,s]=c.useState(!1),[a,l]=c.useState(!1),[d,g]=c.useState(!1),[h,y]=c.useState(null),[f,E]=c.useState(null),[R,T]=c.useState(null),[z,m]=c.useState({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week",days:[],min_interval_min:0}),[b,u]=c.useState(!1),[k,j]=c.useState([]),C=c.useCallback(()=>F.getHabits().then(r).catch(console.error),[]);c.useEffect(()=>{C()},[C]);const B=c.useCallback(q=>{q&&q.id!=null&&r(oe=>oe.map(G=>G.id===q.id?q:G))},[]);c.useEffect(()=>{F.getSetting("habit_order").then(q=>{Array.isArray(q==null?void 0:q.value)&&j(q.value)}).catch(()=>{})},[]);const x=c.useMemo(()=>k.length?[...e].sort((q,oe)=>{const G=k.indexOf(q.id),le=k.indexOf(oe.id);return G===-1&&le===-1?0:G===-1?1:le===-1?-1:G-le}):e,[e,k]),v=c.useMemo(()=>x.filter(q=>q.active!==!1),[x]);c.useEffect(()=>{n!=="ALL"&&e.some(q=>q.id===n&&q.active===!1)&&o("ALL")},[e,n]);const $=async q=>{j(q),await F.setSetting("habit_order",q),u(!1)},Q=async(q,oe)=>{B(await F.updateHabit(q,{active:oe}))};c.useEffect(()=>{const q=()=>{const oe=window.innerWidth<720;s(oe),oe||l(!1)};return q(),window.addEventListener("resize",q),()=>window.removeEventListener("resize",q)},[]);const{deleteItem:ne,toasts:be,handleUndo:A,handleDismiss:K}=yr(F.deleteHabit,F.restoreHabit,C),re=q=>{o(q),i&&l(!1)},ve=(q,oe)=>{(q.type==="minimum"||q.type==="maximum")&&q.period==="day"?!i&&rv(q,oe)>0?T(G=>G&&G.habitId===q.id&&G.date===oe?null:{habitId:q.id,date:oe}):E({habit:q,date:oe}):Z(q.id,oe)},Z=async(q,oe)=>{B(await F.toggleHabitLog(q,oe))},Y=async(q,oe,G,le)=>{try{B(await F.setHabitLogCount(q,oe,G,le)),E(null)}catch(D){alert(D.message||"Could not save.")}},ce=async(q,oe)=>{B(await F.clearHabitLog(q,oe)),E(null)},J=q=>{var oe;return!R||R.habitId!==q.id?null:t.jsx(av,{habit:q,date:R.date,onSave:async G=>{var le;try{await F.setHabitLogCount(q.id,R.date,G,((le=q.log_notes)==null?void 0:le[R.date])??"").then(B)}catch(D){alert(D.message||"Could not save.")}},onOpen:()=>{T(null),E({habit:q,date:R.date})},onClose:()=>T(null)},R.date+":"+(((oe=q.log_count_times)==null?void 0:oe[R.date])||""))},I=async()=>{if(!z.name.trim())return;const q=z.type==="minimum"||z.type==="maximum",oe=z.type==="weekly";if(oe&&z.days.length===0)return;const G={name:z.name.trim(),pillar:z.pillar,target_per_week:Number(z.target_per_week)||7,type:z.type,target_count:q?Number(z.target_count)||1:null,period:q?z.period:null,days:oe?z.days:null,min_interval_min:q&&z.period==="day"&&Number(z.min_interval_min)||0};await F.createHabit(G),m({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week",days:[],min_interval_min:0}),g(!1),C()},W=async(q,oe)=>{n===q&&o("ALL"),ne(q,oe)},_=e.find(q=>q.id===n),P=q=>new Set(q.logs||[]),de={...V.sidebar,...i?V.sidebarOverlay:{},...i&&!a?V.sidebarHidden:{}};return t.jsxs("div",{style:V.shell,children:[i&&a&&t.jsx("div",{style:V.backdrop,onClick:()=>l(!1)}),t.jsxs("aside",{style:de,children:[t.jsxs("div",{style:V.sideTop,children:[t.jsx("div",{style:V.brand,children:"Anvil · Habits"}),i&&t.jsx("button",{onClick:()=>l(!1),style:V.closeBtn,children:t.jsx(Be,{size:18})})]}),t.jsxs("div",{style:{...V.sideItem,...n==="ALL"?V.sideItemOn:{},cursor:"default",padding:"2px 6px 2px 10px"},children:[t.jsxs("button",{onClick:()=>re("ALL"),style:{display:"flex",alignItems:"center",gap:9,flex:1,border:"none",background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:n==="ALL"?600:500,color:"var(--text-2)",padding:"7px 0"},children:[t.jsx(Tg,{size:15}),t.jsx("span",{style:V.sideLabel,children:"All Habits"}),t.jsx("span",{style:V.sideCount,children:e.length})]}),t.jsx("button",{onClick:q=>{q.stopPropagation(),u(!0)},style:V.tinyBtn,title:"Reorder habits",children:t.jsx(St,{size:12})})]}),t.jsx("div",{style:V.sideDivider}),v.map(q=>{var le;const oe=n===q.id,G=((le=zn[q.pillar])==null?void 0:le.dot)||"#9A968C";return t.jsxs("button",{onClick:()=>re(q.id),style:{...V.sideItem,...oe?V.sideItemOn:{}},children:[t.jsx("span",{style:{...V.sideDot,background:G}}),t.jsx("span",{style:V.sideLabel,children:q.name}),t.jsxs("span",{style:V.sideStreak,children:[t.jsx(Cn,{size:11})," ",q.streak]})]},q.id)}),d?t.jsx(iv,{habit:z,onChange:m,onSave:I,onCancel:()=>g(!1)}):t.jsxs("button",{onClick:()=>g(!0),style:V.sideNewBtn,children:[t.jsx(at,{size:13})," New habit"]})]}),t.jsxs("main",{style:V.main,children:[i&&t.jsxs("button",{onClick:()=>l(!0),style:V.hamburger,children:[t.jsx(Ig,{size:18}),t.jsx("span",{style:V.hamburgerLabel,children:n==="ALL"?"All Habits":_==null?void 0:_.name})]}),n==="ALL"?t.jsx(dv,{habits:v,dayAction:ve,logSet:P,onDelete:W,onEdit:q=>y(q),isMobile:i,onOpenHabit:re,renderInline:J}):t.jsx(gv,{habit:_,dayAction:ve,logSet:P,onDelete:()=>W(_.id,_.name),onEdit:()=>y(_),onToggleActive:Q,renderInline:J,setNote:(q,oe)=>F.setHabitLogNote(_.id,q,oe).then(B)}),n==="ALL"&&t.jsx(bv,{year:nv})]}),b&&t.jsx(pv,{habits:x,onSave:$,onToggleActive:Q,onClose:()=>u(!1)}),h&&t.jsx(sv,{habit:h,onSave:async q=>{await F.updateHabit(h.id,q),y(null),C()},onClose:()=>y(null)}),f&&t.jsx(lv,{habit:f.habit,date:f.date,initialCount:((ge=f.habit.log_counts)==null?void 0:ge[f.date])??0,initialNote:((De=f.habit.log_notes)==null?void 0:De[f.date])??"",onSave:(q,oe)=>Y(f.habit.id,f.date,q,oe),onClear:()=>ce(f.habit.id,f.date),onClose:()=>E(null)}),t.jsx(vr,{toasts:be,onUndo:A,onDismiss:K})]})}function Lh({days:e,onToggle:r}){return t.jsx("div",{style:V.dayPick,children:ti.map((n,o)=>t.jsx("button",{type:"button",onClick:()=>r(o),style:{...V.dayChip,...e.includes(o)?V.dayChipOn:{}},children:n},n))})}function iv({habit:e,onChange:r,onSave:n,onCancel:o}){const i=e.type==="minimum"||e.type==="maximum",s=e.type==="weekly",a=l=>r(d=>({...d,days:d.days.includes(l)?d.days.filter(g=>g!==l):[...d.days,l].sort((g,h)=>g-h)}));return t.jsxs("div",{style:V.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"Habit name",value:e.name,onChange:l=>r(d=>({...d,name:l.target.value})),onKeyDown:l=>l.key==="Enter"&&n(),style:V.sideInput}),t.jsx(nr,{value:e.pillar,options:Object.keys(zn),onChange:l=>r(d=>({...d,pillar:l}))}),t.jsx(nr,{value:e.type,options:Dh,onChange:l=>r(d=>({...d,type:l}))}),s&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:V.pickHint,children:"Do this on…"}),t.jsx(Lh,{days:e.days,onToggle:a})]}),i&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{display:"flex",gap:6},children:[t.jsx("input",{type:"number",min:1,placeholder:"N",value:e.target_count||"",onChange:l=>r(d=>({...d,target_count:l.target.value})),style:{...V.sideInput,width:60}}),t.jsx(nr,{value:e.period,options:Wh,style:{flex:1},onChange:l=>r(d=>({...d,period:l}))})]}),e.period==="day"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:V.pickHint,children:"Min gap between entries (minutes)"}),t.jsx("input",{type:"number",min:0,placeholder:"0",value:e.min_interval_min??0,onChange:l=>r(d=>({...d,min_interval_min:l.target.value})),style:V.sideInput})]})]}),t.jsxs("div",{style:{display:"flex",gap:6},children:[t.jsx("button",{onClick:n,style:V.sideAddBtn,children:t.jsx(Oe,{size:13})}),t.jsx("button",{onClick:o,style:V.sideCancelBtn,children:t.jsx(Be,{size:13})})]})]})}function sv({habit:e,onSave:r,onClose:n}){const[o,i]=c.useState(e.name),[s,a]=c.useState(e.pillar||"Health"),[l,d]=c.useState(e.type||"regular"),[g,h]=c.useState(e.target_count||""),[y,f]=c.useState(e.period||"week"),[E,R]=c.useState(e.reminder_time||""),[T,z]=c.useState(e.days||[]),[m,b]=c.useState(e.min_interval_min??0),u=l==="minimum"||l==="maximum",k=l==="weekly",j=B=>z(x=>x.includes(B)?x.filter(v=>v!==B):[...x,B].sort((v,$)=>v-$)),C=()=>{k&&T.length===0||r({name:o.trim(),pillar:s,type:l,target_count:u?Number(g):null,period:u?y:null,days:k?T:[],reminder_time:E||null,min_interval_min:u&&y==="day"&&Number(m)||0})};return t.jsx("div",{style:V.modalOverlay,onClick:n,children:t.jsxs("div",{style:V.modal,onClick:B=>B.stopPropagation(),children:[t.jsxs("div",{style:V.modalHead,children:["Edit Habit",t.jsx("button",{onClick:n,style:V.closeBtn,children:t.jsx(Be,{size:16})})]}),t.jsx("label",{style:V.modalLabel,children:"Name"}),t.jsx("input",{value:o,onChange:B=>i(B.target.value),style:V.sideInput}),t.jsx("label",{style:V.modalLabel,children:"Pillar"}),t.jsx(nr,{value:s,options:Object.keys(zn),onChange:a}),t.jsx("label",{style:V.modalLabel,children:"Type"}),t.jsx(nr,{value:l,options:Dh,onChange:d}),k&&t.jsxs(t.Fragment,{children:[t.jsx("label",{style:V.modalLabel,children:"Days"}),t.jsx(Lh,{days:T,onToggle:j})]}),u&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[t.jsx("input",{type:"number",min:1,value:g,onChange:B=>h(B.target.value),style:{...V.sideInput,width:70}}),t.jsx(nr,{value:y,options:Wh,onChange:f,style:{flex:1}})]}),y==="day"&&t.jsxs(t.Fragment,{children:[t.jsx("label",{style:V.modalLabel,children:"Min gap between entries (minutes)"}),t.jsx("input",{type:"number",min:0,value:m,onChange:B=>b(B.target.value),style:V.sideInput})]})]}),t.jsx("label",{style:V.modalLabel,children:"Reminder time"}),t.jsx("input",{type:"time",value:E,onChange:B=>R(B.target.value),style:V.sideInput}),t.jsx("button",{onClick:C,style:{...V.sideAddBtn,width:"100%",marginTop:10,height:36},children:"Save"})]})})}function av({habit:e,date:r,onSave:n,onOpen:o,onClose:i}){var k,j,C;const[s,a]=c.useState(Date.now()),l=((k=e.log_counts)==null?void 0:k[r])??0,[d,g]=c.useState(l),h=Number(e.min_interval_min)||0,y=e.target_count,f=(j=e.log_count_times)==null?void 0:j[r],E=f?new Date(f).getTime()+h*6e4:0,R=Math.max(0,E-s);c.useEffect(()=>{const B=window.setInterval(()=>a(Date.now()),1e3);return()=>window.clearInterval(B)},[]);const T=d>=l+1||R>0,z=d<=0,m=d!==l,b=((C=zn[e.pillar])==null?void 0:C.dot)||"#9A968C",u=e.type==="minimum"?d>=y:d>0&&d<=y;return t.jsxs("div",{style:V.inlineCounter,children:[t.jsxs("span",{style:{...V.inlineCount,color:u?"#4C9A6B":b},children:[d,t.jsxs("span",{style:V.inlineTarget,children:["/",y]})]}),t.jsx("button",{onClick:()=>!z&&g(B=>Math.max(0,B-1)),disabled:z,style:{...V.inlinePlus,...z?{opacity:.45,cursor:"not-allowed"}:{}},children:"−"}),t.jsx("button",{onClick:()=>!T&&g(B=>B+1),disabled:T,style:{...V.inlinePlus,...T?{opacity:.45,cursor:"not-allowed"}:{background:b,borderColor:b,color:"#fff"}},title:R>0?"Wait for the interval":d>=l+1?"Press Set to confirm":"Stage an entry",children:"+"}),t.jsx("button",{onClick:()=>n(d),disabled:!m,style:{...V.inlineSet,...m?{background:b,borderColor:b,color:"#fff"}:{opacity:.5,cursor:"not-allowed"}},children:"Set"}),R>0?t.jsxs("span",{style:V.inlineWait,children:["Wait ",Mh(R)]}):t.jsx("span",{style:V.inlineReady,children:m?"Press Set to confirm":"Tap + to add"}),t.jsx("button",{onClick:o,style:V.inlineMore,title:"Open details",children:"⋯"}),t.jsx("button",{onClick:i,style:V.inlineMore,title:"Hide",children:t.jsx(Be,{size:13})})]})}function lv({habit:e,date:r,initialCount:n,initialNote:o,onSave:i,onClear:s,onClose:a}){var K;const l=n??0,[d,g]=c.useState(l),[h,y]=c.useState(o??""),[f,E]=c.useState(Date.now()),R=e.target_count,T=e.type==="minimum"?d>=R:d>0&&d<=R,z=e.type==="maximum"&&d>R,m=T?"#4C9A6B":z?"#C2536B":"#C2773B",b=T?"✓ Goal met":z?"Over the limit":"Not met yet",u=Number(e.min_interval_min)||0,k=r===Wg(),j=u>0&&k,C=(K=e.log_count_times)==null?void 0:K[r],B=j&&C?new Date(C).getTime()+u*6e4:0,x=Math.max(0,B-f);c.useEffect(()=>{if(!j||x<=0)return;const re=window.setInterval(()=>E(Date.now()),1e3);return()=>window.clearInterval(re)},[j,x]);const v=d-l,$=j&&(d>=l+1||x>0),Q=d<=0,ne=()=>{$||g(re=>re+1)},be=()=>{Q||g(re=>Math.max(0,re-1))},A=d!==l||h!==(o??"");return t.jsx("div",{style:V.modalOverlay,onClick:a,children:t.jsxs("div",{style:V.modal,onClick:re=>re.stopPropagation(),children:[t.jsxs("div",{style:V.modalHead,children:[e.name,t.jsx("button",{onClick:a,style:V.closeBtn,children:t.jsx(Be,{size:16})})]}),t.jsxs("div",{style:{fontSize:12,color:"var(--text-3)",marginBottom:2},children:[r," · ",e.type==="minimum"?`at least ${R}`:`no more than ${R}`," / ",e.period,u>0&&t.jsxs(t.Fragment,{children:[" · ",u,"m between entries"]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:20,margin:"14px 0 6px"},children:[t.jsx("button",{onClick:be,disabled:Q,style:{...V.counterBtn,...Q?{opacity:.45,cursor:"not-allowed"}:{}},children:"−"}),t.jsx("span",{style:{fontSize:38,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:52,textAlign:"center",color:m},children:d}),t.jsx("button",{onClick:ne,disabled:$,style:{...V.counterBtn,...$?{opacity:.45,cursor:"not-allowed"}:{}},title:j&&x>0?"Wait for the interval before the next entry":j&&d>=l+1?"Press Set to confirm this entry":void 0,children:"+"})]}),j&&x>0&&t.jsxs("div",{style:{textAlign:"center",fontSize:12,fontWeight:700,color:"#C2773B",marginBottom:8},children:["Wait ",Mh(x)," before the next entry"]}),j&&x<=0&&t.jsx("div",{style:{textAlign:"center",fontSize:11.5,color:"var(--text-3)",marginBottom:8},children:v>0?"Press Set to confirm this entry":`Tap + to add an entry (each at least ${u}m apart)`}),u>0&&!k&&t.jsxs("div",{style:V.pastEditNote,children:["Editing a past day — the ",u,"-minute gap between entries applies only to today's logging, so you can adjust this freely."]}),t.jsx("div",{style:{textAlign:"center",fontSize:12.5,fontWeight:700,color:m,marginBottom:12},children:b}),t.jsx("textarea",{value:h,onChange:re=>y(re.target.value),placeholder:"Add a comment (optional)…",style:{...V.sideInput,minHeight:56,resize:"vertical"}}),t.jsxs("div",{style:{display:"flex",gap:8,marginTop:10},children:[t.jsxs("button",{onClick:s,style:{...V.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[t.jsx(Be,{size:14})," Delete"]}),t.jsxs("button",{onClick:()=>i(d,h),disabled:!A,style:{...V.sideAddBtn,flex:1,justifyContent:"center",height:38,...A?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(Oe,{size:14})," Set"]})]})]})})}function rd({pct:e,label:r,sub:n,color:o}){const s=2*Math.PI*26,a=s*(1-Math.max(0,Math.min(100,e))/100);return t.jsxs("div",{style:V.ringStat,children:[t.jsxs("div",{style:V.ringBox,children:[t.jsxs("svg",{width:"70",height:"70",viewBox:"0 0 70 70",children:[t.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:"var(--border)",strokeWidth:"7"}),t.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:o,strokeWidth:"7",strokeLinecap:"round",strokeDasharray:s,strokeDashoffset:a,transform:"rotate(-90 35 35)",style:{transition:"stroke-dashoffset 0.5s ease"}})]}),t.jsxs("div",{style:{...V.ringPct,color:o},children:[e,"%"]})]}),t.jsxs("div",{children:[t.jsx("div",{style:V.ringLabel,children:r}),t.jsx("div",{style:V.ringSub,children:n})]})]})}function dv({habits:e,dayAction:r,logSet:n,onDelete:o,onEdit:i,renderInline:s,isMobile:a,onOpenHabit:l}){const[d,g]=c.useState(0),[h,y]=c.useState(null),[f,E]=c.useState(!1);c.useEffect(()=>{F.getSetting("habit_show_names").then(I=>{typeof(I==null?void 0:I.value)=="boolean"&&E(I.value)}).catch(()=>{})},[]);const R=()=>E(I=>{const W=!I;return F.setSetting("habit_show_names",W).catch(()=>{}),W&&y(null),W}),T=ev(d),z=`${lp(T[0])} – ${lp(T[6])}${d===0?" · This week":""}`,m=I=>{const W=new Date(I+"T00:00:00"),_=W.getDay(),P=new Date(W);return P.setDate(W.getDate()+(_===0?-6:1-_)),Array.from({length:7},(de,ge)=>{const De=new Date(P);return De.setDate(P.getDate()+ge),ui(De)})},b=I=>I.logs||[],u=(I,W)=>I.type==="minimum"&&I.period==="week"&&W.filter(_=>n(I).has(_)).length>=(I.target_count||0),k=(I,W)=>I.type==="minimum"&&I.period==="month"&&b(I).filter(_=>_.slice(0,7)===W).length>=(I.target_count||0),j=(I,W)=>I.type==="minimum"&&I.period==="year"&&b(I).filter(_=>_.slice(0,4)===W).length>=(I.target_count||0),C=(I,W)=>{var _;if((I.type==="minimum"||I.type==="maximum")&&I.period==="day"){const P=(_=I.log_counts)==null?void 0:_[W];return P==null?!1:I.type==="minimum"?P>=(I.target_count||0):P>0&&P<=(I.target_count||0)}return n(I).has(W)},B=(I,W)=>I.type!=="minimum"?!1:I.period==="week"?u(I,m(W)):I.period==="month"?k(I,W.slice(0,7)):I.period==="year"?j(I,W.slice(0,4)):!1,x=(I,W)=>C(I,W)||B(I,W),v=e.filter(I=>x(I,$n)).length,$=e.length?Math.round(v/e.length*100):0,Q=I=>{if(I.type==="minimum"&&I.period==="month"&&(k(I,T[0].slice(0,7))||k(I,T[6].slice(0,7)))||I.type==="minimum"&&I.period==="year"&&(j(I,T[0].slice(0,4))||j(I,T[6].slice(0,4)))||I.type==="minimum"&&I.period==="week"&&u(I,T))return 1;if((I.type==="minimum"||I.type==="maximum")&&I.period==="day")return Math.min(1,T.filter(de=>C(I,de)).length/7);const W=n(I),_=T.filter(de=>W.has(de)).length,P=I.type==="minimum"&&I.period==="week"?I.target_count||1:I.target_per_week||7;return P>0?Math.min(1,_/P):0},ne=e.length?Math.round(e.reduce((I,W)=>I+Q(W),0)/e.length*100):0,be=new Date,A=`${be.getFullYear()}-${String(be.getMonth()+1).padStart(2,"0")}`,K=new Date(be.getFullYear(),be.getMonth()+1,0).getDate(),re=K/7,ve=I=>{if(I.type==="minimum"&&I.period==="month"&&k(I,A)||I.type==="minimum"&&I.period==="year"&&j(I,A.slice(0,4)))return 1;if((I.type==="minimum"||I.type==="maximum")&&I.period==="day"){let P=0;for(let de=1;de<=K;de++)C(I,`${A}-${String(de).padStart(2,"0")}`)&&P++;return Math.min(1,P/K)}const W=b(I).filter(P=>P.slice(0,7)===A).length;let _;return I.type==="minimum"&&I.period==="week"?_=(I.target_count||1)*re:I.type==="minimum"&&I.period==="month"?_=I.target_count||1:I.type==="minimum"&&I.period==="year"?_=(I.target_count||1)/12:_=(I.target_per_week||7)*re,_>0?Math.min(1,W/_):0},Z=e.length?Math.round(e.reduce((I,W)=>I+ve(W),0)/e.length*100):0,Y=I=>{const W=new Date;return W.setDate(W.getDate()+I),ui(W)},ce=I=>e.filter(W=>x(W,I)).length,J=[{label:"Today",value:ce(Y(0)),color:"#4C9A6B"},{label:"Yesterday",value:ce(Y(-1)),color:"var(--text-3)"},{label:"Day before",value:ce(Y(-2)),color:"var(--text-3)"}];return t.jsxs("div",{children:[t.jsxs("div",{style:V.mainHead,children:[t.jsx("div",{style:V.eyebrow,children:"Weekly view"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,flexWrap:"wrap"},children:[t.jsx("h1",{style:V.h1,children:"All Habits"}),a&&e.length>0&&t.jsxs("button",{onClick:R,style:V.nameToggle,title:f?"Hide habit names — tap a circle to reveal one":"Show all habit names",children:[t.jsx("span",{style:{...V.nameToggleTrack,background:f?"#4C9A6B":"var(--border)"},children:t.jsx("span",{style:{...V.nameToggleKnob,left:f?19:3}})}),f?t.jsx(vs,{size:13}):t.jsx(Za,{size:13}),t.jsx("span",{children:"Names"})]})]})]}),t.jsxs("div",{style:V.navBar,children:[t.jsx("button",{onClick:()=>g(I=>I-1),style:V.navBtn,children:t.jsx(In,{size:16})}),t.jsx("span",{style:V.navLabel,children:z}),t.jsx("button",{onClick:()=>g(I=>Math.min(0,I+1)),disabled:d>=0,style:{...V.navBtn,...d>=0?V.navBtnDisabled:{}},children:t.jsx(ln,{size:16})})]}),t.jsxs("div",{style:{...V.weekCard,...a?V.weekCardMobile:{}},children:[t.jsxs("div",{style:{...V.weekHeadRow,...a?V.weekRowMobile:{}},children:[t.jsx("div",{style:{...V.weekNameCol,...a?V.weekNameColMobile:{}}}),ti.map((I,W)=>t.jsxs("div",{style:V.weekDayHead,children:[t.jsx("span",{style:V.weekDayName,children:I}),t.jsx("span",{style:{...V.weekDayNum,...T[W]===$n?V.weekDayToday:{}},children:new Date(T[W]+"T00:00").getDate()})]},I)),t.jsx("div",{style:{...V.weekStreakCol,...a?V.weekStreakColMobile:{}},children:a?t.jsx(Cn,{size:12}):"Streak"})]}),e.map(I=>{var Qe,st;const W=((Qe=zn[I.pillar])==null?void 0:Qe.dot)||"#9A968C",_=((st=zn[I.pillar])==null?void 0:st.soft)||"rgba(0,0,0,0.05)",P=n(I),de=I.type==="weekly",ge=new Set(I.days||[]),De=[0,1,2,3,4,5,6].filter(Le=>ge.has(Le)),q=de&&De.length>0&&De.every(Le=>P.has(T[Le])),oe=de?Array(7).fill(q):null,G=I.type==="minimum"&&["week","month","year"].includes(I.period),le=I.target_count||0,D=I.logs||[],w=Le=>D.filter(et=>et.slice(0,7)===Le).length,ie=Le=>D.filter(et=>et.slice(0,4)===Le).length,me=T.filter(Le=>P.has(Le)).length,H=Le=>G?I.period==="week"?me>=le:I.period==="month"?w(Le.slice(0,7))>=le:I.period==="year"?ie(Le.slice(0,4))>=le:!1:!1,fe=G&&T.some(H),he=I.period==="week"?me:I.period==="month"?w(T[0].slice(0,7)):I.period==="year"?ie(T[0].slice(0,4)):0,Ee=h===I.id;return t.jsxs(c.Fragment,{children:[a&&(Ee||f)&&t.jsxs("button",{onClick:()=>l&&l(I.id),style:{...V.mobileNameBanner,color:W},children:[t.jsx("span",{style:{...V.sideDot,background:W}}),t.jsx("span",{style:V.mobileNameText,children:I.name}),I.type==="weekly"?t.jsx("span",{style:V.typeBadge,children:(I.days||[]).map(Le=>ti[Le]).join("·")||"—"}):I.type!=="regular"?t.jsx("span",{style:V.typeBadge,children:I.type==="minimum"?`≥${I.target_count}/${I.period}`:`≤${I.target_count}/${I.period}`}):null]}),t.jsxs("div",{style:{...V.weekRow,...a?V.weekRowMobile:{}},children:[a?t.jsx("div",{style:{...V.weekNameCol,...V.weekNameColMobile},children:t.jsx("button",{onClick:()=>y(Ee?null:I.id),style:{...V.habitAvatar,background:W},title:I.name,children:(I.name||"?").trim().charAt(0).toUpperCase()})}):t.jsxs("div",{style:{...V.weekNameCol,flexDirection:"column",alignItems:"flex-start",gap:2},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[t.jsx("span",{style:{...V.sideDot,background:W}}),t.jsx("span",{style:V.weekHabitName,children:I.name})]}),I.type==="weekly"?t.jsx("span",{style:V.typeBadge,children:(I.days||[]).map(Le=>ti[Le]).join("·")||"—"}):I.type!=="regular"?t.jsx("span",{style:V.typeBadge,children:I.type==="minimum"?`≥${I.target_count}/${I.period}`:`≤${I.target_count}/${I.period}`}):null]}),T.map((Le,et)=>{var yt,At;if(de&&!ge.has(et))return t.jsxs("div",{style:{...V.weekCell,position:"relative",zIndex:0},children:[oe[et]&&t.jsx("span",{style:{...V.chainLine,background:W,left:oe[et-1]?0:"50%",right:oe[et+1]?0:"50%"}}),t.jsx("span",{style:{...V.offDay,position:"relative",zIndex:1},title:"Not scheduled",children:"·"})]},Le);const Ke=P.has(Le),ut=Le>$n,ae=(I.type==="minimum"||I.type==="maximum")&&I.period==="day",We=(yt=I.log_counts)==null?void 0:yt[Le],qe=We!=null,tt=!!((At=I.log_notes)!=null&&At[Le]),ht=H(Le),_t=et>0&&H(T[et-1]),It=et<T.length-1&&H(T[et+1]),xt=Ke||ht;return t.jsxs("div",{style:{...V.weekCell,position:"relative",zIndex:0},children:[ht&&t.jsx("span",{style:{...V.chainLine,background:W,left:_t?0:"50%",right:It?0:"50%"}}),de&&oe[et]&&t.jsx("span",{style:{...V.chainLine,background:W,left:oe[et-1]?0:"50%",right:oe[et+1]?0:"50%"}}),t.jsx("button",{disabled:ut,onClick:()=>r(I,Le),style:{...V.tick,...xt?{background:W,borderColor:W,color:"#fff"}:{},...ae&&qe&&!Ke?{borderColor:W,color:W}:{},...ut&&!xt?V.tickFuture:{}},children:ae?qe?t.jsx("span",{style:{fontSize:12,fontWeight:700},children:We}):null:Ke&&t.jsx(Oe,{size:14,color:"#fff",strokeWidth:3})}),tt&&t.jsx("span",{style:V.cellNoteBubble})]},Le)}),t.jsx("div",{style:{...V.weekStreakCol,...a?V.weekStreakColMobile:{}},children:q?t.jsxs("span",{style:{...V.streakPill,...a?V.streakPillMobile:{},background:_,color:W},children:[t.jsx(ws,{size:12})," ",a?De.length:`${De.length}/${De.length}`]}):fe?t.jsxs("span",{style:{...V.streakPill,...a?V.streakPillMobile:{},background:_,color:W},children:[t.jsx(ws,{size:12})," ",a?he:`${he}/${le}`]}):t.jsxs("span",{style:{...V.streakPill,...a?V.streakPillMobile:{},background:_,color:W},children:[t.jsx(Cn,{size:12})," ",I.streak]})})]}),s&&s(I)]},I.id)}),e.length===0&&t.jsx("div",{style:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},children:"No habits yet — add one from the sidebar."})]}),e.length>0&&t.jsxs("div",{style:{...V.progressCard,marginTop:18,marginBottom:0},children:[t.jsx(rd,{pct:$,label:"Today",sub:`${v}/${e.length} done`,color:"#4C9A6B"}),t.jsx("div",{style:V.progressDivider}),t.jsx(rd,{pct:ne,label:"This week",sub:"of weekly targets",color:"#3A7CA5"}),t.jsx("div",{style:V.progressDivider}),t.jsx(rd,{pct:Z,label:"This month",sub:"of monthly targets",color:"#8268B0"})]}),e.length>0&&t.jsxs("div",{style:{...V.progressCard,marginTop:14,marginBottom:0,flexDirection:"column",alignItems:"stretch",gap:12},children:[t.jsx("div",{style:V.threeDayTitle,children:"Last 3 days · habits completed"}),t.jsx(cv,{items:J,total:e.length})]})]})}function cv({items:e,total:r}){const n=Math.max(1,r,...e.map(o=>o.value));return t.jsx("div",{style:V.tbWrap,children:e.map((o,i)=>t.jsxs("div",{style:V.tbRow,children:[t.jsx("div",{style:V.tbLbl,children:o.label}),t.jsx("div",{style:V.tbTrack,children:t.jsx("div",{style:{...V.tbBar,width:`${o.value/n*100}%`,background:o.color}})}),t.jsxs("div",{style:V.tbVal,children:[o.value,"/",r]})]},i))})}function gv({habit:e,dayAction:r,logSet:n,onDelete:o,onEdit:i,setNote:s,onToggleActive:a,renderInline:l}){var De,q;const[d,g]=c.useState(null),[h,y]=c.useState(""),[f,E]=c.useState(null),[R,T]=c.useState(0),z=c.useRef(null);if(!e)return null;const m=((De=zn[e.pillar])==null?void 0:De.dot)||"#9A968C",b=((q=zn[e.pillar])==null?void 0:q.soft)||"rgba(0,0,0,0.05)",u=n(e),k=e.type==="weekly",j=new Set(e.days||[]),C=oe=>(new Date(oe+"T00:00").getDay()+6)%7,B=oe=>!k||j.has(C(oe)),x=oe=>{const G=new Date(oe+"T00:00"),le=G.getDay(),D=new Date(G);D.setDate(G.getDate()+(le===0?-6:1-le));const w=Array.from({length:7},(H,fe)=>{const he=new Date(D);return he.setDate(D.getDate()+fe),ui(he)}),ie=[0,1,2,3,4,5,6].filter(H=>j.has(H)),me=ie.length>0&&ie.every(H=>u.has(w[H]));return Array(7).fill(me)},{dates:v,startOffset:$,label:Q,year:ne}=tv(R),be=v.filter(oe=>oe<=$n&&B(oe)&&u.has(oe)).length,A=v.filter(oe=>oe<=$n&&B(oe)).length,K=A>0?Math.round(be/A*100):0,re=e.type==="minimum"&&(e.period==="month"||e.period==="year"),ve=e.period==="year"?(e.logs||[]).filter(oe=>oe.startsWith(`${ne}-`)).length:v.filter(oe=>u.has(oe)).length,Z=re&&ve>=(e.target_count||0),Y=e.type==="minimum"&&e.period==="week",ce=e.target_count||0,J=oe=>{const G=new Date(oe+"T00:00"),le=G.getDay(),D=new Date(G);D.setDate(G.getDate()+(le===0?-6:1-le));let w=0;for(let ie=0;ie<7;ie++){const me=new Date(D);me.setDate(D.getDate()+ie),u.has(ui(me))&&w++}return w},I=oe=>re?Z:Y?J(oe)>=ce:!1,W=Y?J($n):0,_=Y&&W>=ce,P=oe=>{z.current=setTimeout(()=>g(oe),500)},de=()=>clearTimeout(z.current),ge=oe=>{var G;E(oe),y(((G=e.log_notes)==null?void 0:G[oe])||""),g(null)};return t.jsxs("div",{children:[t.jsxs("div",{style:V.mainHead,children:[t.jsxs("div",{children:[t.jsxs("div",{style:V.eyebrow,children:[t.jsx("span",{style:{...V.sideDot,background:m,marginRight:6}}),e.pillar," · Monthly view"]}),t.jsx("h1",{style:V.h1,children:e.name})]}),t.jsxs("div",{style:{display:"flex",gap:8,marginTop:8,flexWrap:"wrap"},children:[t.jsxs("button",{onClick:i,style:V.actionBtn,children:[t.jsx(St,{size:14})," Edit"]}),t.jsx("button",{onClick:()=>a(e.id,e.active===!1),style:{...V.actionBtn,...e.active===!1?{color:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:e.active===!1?t.jsxs(t.Fragment,{children:[t.jsx(Oe,{size:14})," Enable"]}):t.jsxs(t.Fragment,{children:[t.jsx(y0,{size:14})," Disable"]})}),t.jsxs("button",{onClick:o,style:{...V.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[t.jsx(Be,{size:14})," Delete"]}),e.reminder_time&&t.jsxs("button",{style:V.actionBtn,children:[t.jsx(Cg,{size:14})," ",e.reminder_time]})]})]}),t.jsxs("div",{style:V.statStrip,children:[t.jsx(so,{label:"Current streak",value:`${e.streak} days`,c:m,soft:b,flame:!0}),t.jsx(so,{label:"Best streak",value:`${e.max_streak??e.streak} days`,c:m,soft:b,flame:!0}),t.jsx(so,{label:"Done this month",value:`${be}/${A}`,c:m,soft:b}),t.jsx(so,{label:"Completion",value:`${K}%`,c:m,soft:b}),e.type==="regular"?t.jsx(so,{label:"Weekly target",value:`${e.target_per_week}×`,c:m,soft:b}):e.type==="weekly"?t.jsx(so,{label:"Days",value:(e.days||[]).map(oe=>ti[oe]).join(", ")||"—",c:m,soft:b}):t.jsx(so,{label:e.type==="minimum"?"Min target":"Max allowed",value:`${e.target_count}/${e.period}`,c:m,soft:b})]}),l&&l(e),t.jsxs("div",{style:V.navBar,children:[t.jsx("button",{onClick:()=>T(oe=>oe-1),style:V.navBtn,children:t.jsx(In,{size:16})}),t.jsxs("span",{style:V.navLabel,children:[Q,R===0?" · This month":""]}),t.jsx("button",{onClick:()=>T(oe=>Math.min(0,oe+1)),disabled:R>=0,style:{...V.navBtn,...R>=0?V.navBtnDisabled:{}},children:t.jsx(ln,{size:16})})]}),re&&t.jsxs("div",{style:{...V.chainBanner,background:Z?b:"var(--bg)",color:Z?m:"var(--text-3)"},children:[t.jsx(ws,{size:15}),Z?`${e.period==="year"?"Yearly":"Monthly"} chain complete — ${ve}/${e.target_count} connected`:`${ve}/${e.target_count} this ${e.period} · ${(e.target_count||0)-ve} more to connect the chain`]}),Y&&R===0&&t.jsxs("div",{style:{...V.chainBanner,background:_?b:"var(--bg)",color:_?m:"var(--text-3)"},children:[t.jsx(ws,{size:15}),_?`This week's chain complete — ${W}/${ce} connected`:`${W}/${ce} this week · ${Math.max(0,ce-W)} more to connect the chain`]}),t.jsxs("div",{style:V.monthCard,children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[t.jsx("div",{style:V.monthTitle,children:Q}),t.jsx("span",{style:{fontSize:11,color:"var(--text-3)"},children:"Long-press a day for options"})]}),t.jsx("div",{style:V.monthDow,children:ti.map(oe=>t.jsx("div",{style:V.monthDowCell,children:oe},oe))}),t.jsxs("div",{style:V.monthGrid,children:[Array.from({length:$}).map((oe,G)=>t.jsx("div",{},`pad${G}`)),v.map((oe,G)=>{var Le,et;const le=G+1;if(k&&!B(oe)){const Ke=C(oe),ut=x(oe),ae=($+G)%7;return t.jsxs("div",{style:{position:"relative"},children:[ut[Ke]&&t.jsx("span",{style:{...V.chainLine,background:m,...ae===0?{left:"50%"}:{left:ut[Ke-1]?-6:"50%"},...ae===6?{right:"50%"}:{right:ut[Ke+1]?-6:"50%"}}}),t.jsx("div",{style:{...V.monthDay,...V.monthDayOff,width:"100%",position:"relative",zIndex:1},children:le})]},oe)}const D=u.has(oe),w=oe>$n,ie=oe===$n,me=!!((Le=e.log_notes)!=null&&Le[oe]),H=(e.type==="minimum"||e.type==="maximum")&&e.period==="day",fe=(et=e.log_counts)==null?void 0:et[oe],he=fe!=null,Ee=I(oe),Qe=Ee&&!D,st=($+G)%7;return t.jsxs("div",{style:{position:"relative"},children:[Ee&&t.jsx("span",{style:{...V.chainLine,background:m,...st===0?{left:"50%"}:{left:-6},...st===6?{right:"50%"}:{right:-6}}}),k&&(()=>{const Ke=C(oe),ut=x(oe);return ut[Ke]?t.jsx("span",{style:{...V.chainLine,background:m,...st===0?{left:"50%"}:{left:ut[Ke-1]?-6:"50%"},...st===6?{right:"50%"}:{right:ut[Ke+1]?-6:"50%"}}}):null})(),t.jsx("button",{disabled:w,onClick:()=>r(e,oe),onMouseDown:()=>!H&&P(oe),onMouseUp:de,onTouchStart:()=>!H&&P(oe),onTouchEnd:de,style:{...V.monthDay,position:"relative",zIndex:1,...D?{background:m,borderColor:m,color:"#fff"}:{},...Qe?{background:b,borderColor:m,color:m}:{},...H&&he&&!D?{borderColor:m,color:m}:{},...w&&!D?V.monthDayFuture:{},...ie&&!D?{borderColor:m,borderWidth:2}:{},width:"100%"},children:le}),H&&he&&t.jsx("span",{style:{...V.countBadge,background:D?"#4C9A6B":m},children:fe}),me&&t.jsx("span",{style:V.noteIndicator}),d===oe&&t.jsx(uv,{onEdit:i,onDelete:o,onAddNote:()=>ge(oe),onRemind:i,onClose:()=>g(null)})]},oe)})]})]}),f&&t.jsxs("div",{style:V.noteBox,children:[t.jsxs("div",{style:{fontWeight:600,fontSize:13,marginBottom:6},children:["Note for ",f]}),t.jsx("textarea",{value:h,onChange:oe=>y(oe.target.value),placeholder:"Add a note for this day…",style:{...V.sideInput,minHeight:60,resize:"vertical"}}),t.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[t.jsxs("button",{onClick:()=>{s(f,h),E(null)},style:V.sideAddBtn,children:[t.jsx(Oe,{size:13})," Save"]}),t.jsx("button",{onClick:()=>E(null),style:V.sideCancelBtn,children:t.jsx(Be,{size:13})})]})]})]})}function uv({onEdit:e,onDelete:r,onAddNote:n,onRemind:o,onClose:i}){return t.jsxs("div",{style:V.longPressMenu,children:[t.jsxs("button",{style:V.menuItem,onClick:()=>{e(),i()},children:[t.jsx(St,{size:13})," Edit"]}),t.jsxs("button",{style:V.menuItem,onClick:()=>{n(),i()},children:[t.jsx(zg,{size:13})," Add note"]}),t.jsxs("button",{style:V.menuItem,onClick:()=>{o(),i()},children:[t.jsx(Cg,{size:13})," Remind"]}),t.jsxs("button",{style:{...V.menuItem,color:"#C2536B"},onClick:()=>{r(),i()},children:[t.jsx(Be,{size:13})," Delete"]})]})}function pv({habits:e,onSave:r,onToggleActive:n,onClose:o}){const[i,s]=c.useState(()=>e.map(g=>g.id)),a=c.useMemo(()=>{const g={};return e.forEach(h=>g[h.id]=h),g},[e]),l=i.map(g=>a[g]).filter(Boolean),d=(g,h)=>{const y=g+h;if(y<0||y>=i.length)return;const f=[...i];[f[g],f[y]]=[f[y],f[g]],s(f)};return t.jsx("div",{style:V.modalOverlay,onClick:o,children:t.jsxs("div",{style:{...V.modal,maxHeight:"80vh",overflow:"hidden"},onClick:g=>g.stopPropagation(),children:[t.jsxs("div",{style:{...V.modalHead,flexShrink:0},children:["Edit Habits",t.jsx("button",{onClick:o,style:V.closeBtn,children:t.jsx(Be,{size:16})})]}),t.jsx("p",{style:{fontSize:12,color:"var(--text-3)",margin:"0 0 10px",flexShrink:0},children:"Reorder with the arrows. Toggle a habit off to hide it from your views (its history is kept)."}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6,overflowY:"auto",minHeight:0},children:l.map((g,h)=>{var E;const y=((E=zn[g.pillar])==null?void 0:E.dot)||"#9A968C",f=g.active!==!1;return t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"9px 10px",background:"var(--bg)",borderRadius:9,border:"1px solid var(--border)",opacity:f?1:.5},children:[t.jsx("span",{style:{...V.sideDot,background:y}}),t.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500,textDecoration:f?"none":"line-through"},children:g.name}),t.jsx("button",{onClick:()=>n(g.id,!f),title:f?"Disable (hide) habit":"Enable habit",style:{...V.activeToggle,...f?V.activeToggleOn:{}},role:"switch","aria-checked":f,children:t.jsx("span",{style:{...V.activeKnob,...f?V.activeKnobOn:{}}})}),t.jsx("button",{onClick:()=>d(h,-1),disabled:h===0,style:{...V.navBtn,width:28,height:28,opacity:h===0?.3:1,fontSize:14},children:"↑"}),t.jsx("button",{onClick:()=>d(h,1),disabled:h===l.length-1,style:{...V.navBtn,width:28,height:28,opacity:h===l.length-1?.3:1,fontSize:14},children:"↓"})]},g.id)})}),t.jsxs("button",{onClick:()=>r(i),style:{...V.sideAddBtn,width:"100%",marginTop:14,height:38,justifyContent:"center",flexShrink:0},children:[t.jsx(Oe,{size:14})," Save Order"]})]})})}function bv({year:e}){const[r,n]=c.useState([]);if(c.useEffect(()=>{F.getHabitsYearly(e).then(n).catch(console.error)},[e]),!r.length)return null;const o=Array.from({length:12},(s,a)=>{const l=r.reduce((g,h)=>{var y;return g+(((y=h.monthly[a+1])==null?void 0:y.done)||0)},0),d=r.reduce((g,h)=>{var y;return g+Math.floor((((y=h.monthly[a+1])==null?void 0:y.days)||30)/7*7)},0);return d>0?Math.round(l/d*100):0}),i=Math.max(...o,1);return t.jsxs("div",{style:{...V.monthCard,marginTop:18},children:[t.jsxs("div",{style:V.monthTitle,children:[e," Completion"]}),t.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:6,height:80,marginTop:12},children:o.map((s,a)=>t.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[t.jsx("div",{style:{width:"100%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",height:`${s/i*60}px`,minHeight:2,opacity:s>0?1:.15},title:`${s}%`}),t.jsx("span",{style:{fontSize:9,color:"var(--text-3)",fontWeight:600},children:J0[a]})]},a))})]})}function so({label:e,value:r,c:n,soft:o,flame:i}){return t.jsxs("div",{style:{...V.stat,background:o},children:[t.jsx("div",{style:V.statLabel,children:e}),t.jsxs("div",{style:{...V.statValue,color:n},children:[i&&t.jsx(Cn,{size:15})," ",r]})]})}const V={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:230,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",padding:"20px 12px",display:"flex",flexDirection:"column",gap:3,overflowY:"auto"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.18)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)",boxShadow:"none"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.38)",zIndex:20},sideTop:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 4px"},closeBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",marginBottom:8},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700,padding:"0 6px 14px"},sideItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"9px 10px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:500,color:"var(--text-2)",textAlign:"left"},sideItemOn:{background:"var(--hover)",fontWeight:600},sideLabel:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},sideCount:{fontSize:11,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:10,padding:"1px 7px"},sideStreak:{display:"flex",alignItems:"center",gap:3,fontSize:11,fontWeight:600,color:"#C2773B"},sideDot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},sideDivider:{height:1,background:"var(--border)",margin:"8px 6px"},addBox:{padding:"10px 6px",display:"flex",flexDirection:"column",gap:6},sideInput:{border:"1px solid var(--border)",borderRadius:7,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},sideAddBtn:{border:"none",background:"#4C9A6B",color:"#fff",height:30,padding:"0 12px",borderRadius:7,cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontSize:13,fontFamily:"inherit"},sideCancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:30,height:30,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},sideNewBtn:{display:"flex",alignItems:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",borderRadius:8,padding:"8px 10px",fontSize:12.5,color:"var(--text-3)",fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginTop:6,justifyContent:"center"},main:{flex:1,padding:"26px",overflowX:"hidden",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:200},mainHead:{marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:5,display:"flex",alignItems:"center"},h1:{fontSize:27,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},actionBtn:{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:500,color:"var(--text-2)",border:"1px solid var(--border)",background:"var(--surface)",padding:"5px 10px",borderRadius:7,cursor:"pointer",fontFamily:"inherit"},progressCard:{background:"var(--surface)",borderRadius:12,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14,display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"},progressDivider:{width:1,alignSelf:"stretch",background:"var(--border)",minHeight:48},threeDayTitle:{fontSize:13,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:84,fontSize:11.5,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap"},tbTrack:{flex:1,height:14,background:"var(--surface-2)",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:52,fontSize:11.5,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"},ringStat:{display:"flex",alignItems:"center",gap:12,flex:"1 1 160px"},ringBox:{position:"relative",width:70,height:70,display:"grid",placeItems:"center",flexShrink:0},ringPct:{position:"absolute",inset:0,display:"grid",placeItems:"center",fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},ringLabel:{fontSize:14,fontWeight:700,color:"var(--text)"},ringSub:{fontSize:11.5,color:"var(--text-3)",fontWeight:500,marginTop:2},weekCard:{background:"var(--surface)",borderRadius:12,padding:"8px 14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"auto"},weekCardMobile:{padding:"8px 8px 12px",overflowX:"hidden"},weekHeadRow:{display:"flex",alignItems:"flex-end",padding:"10px 0",borderBottom:"1px solid var(--border)",minWidth:480,position:"relative",zIndex:0},weekRowMobile:{minWidth:0},weekNameCol:{width:160,flexShrink:0,alignSelf:"stretch",display:"flex",alignItems:"center",gap:8,position:"sticky",left:0,zIndex:5,background:"var(--surface)",boxShadow:"6px 0 6px -6px rgba(0,0,0,0.15)"},weekNameColMobile:{width:34,gap:0,boxShadow:"none",justifyContent:"center",position:"static"},weekStreakColMobile:{width:30},streakPillMobile:{padding:"3px 6px",gap:2},habitAvatar:{width:26,height:26,borderRadius:"50%",border:"none",color:"#fff",fontSize:12,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,lineHeight:1},mobileNameBanner:{display:"flex",alignItems:"center",gap:7,width:"100%",border:"none",background:"var(--hover)",borderRadius:8,padding:"6px 10px",margin:"4px 0 2px",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},mobileNameText:{fontSize:13,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},nameToggle:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:20,padding:"5px 11px 5px 5px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit",flexShrink:0},nameToggleTrack:{position:"relative",width:34,height:20,borderRadius:10,flexShrink:0,transition:"background 0.2s",display:"inline-block"},nameToggleKnob:{position:"absolute",top:3,width:14,height:14,borderRadius:"50%",background:"#fff",transition:"left 0.2s",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},weekDayHead:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2},weekDayName:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekDayNum:{fontSize:12,fontWeight:600,color:"var(--text-2)",width:22,height:22,display:"grid",placeItems:"center",borderRadius:"50%"},weekDayToday:{background:"var(--accent-strong)",color:"#fff"},weekStreakCol:{width:64,flexShrink:0,textAlign:"center",fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekRow:{display:"flex",alignItems:"center",padding:"9px 0",borderBottom:"1px solid #F4F2EC",minWidth:480,position:"relative",zIndex:0},weekHabitName:{fontSize:13,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},weekCell:{flex:1,display:"grid",placeItems:"center"},typeBadge:{fontSize:10,color:"var(--text-3)",background:"var(--hover)",padding:"1px 6px",borderRadius:8,fontWeight:600},tick:{width:26,height:26,borderRadius:7,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",padding:0,position:"relative",zIndex:1},tickFuture:{opacity:.4,cursor:"not-allowed",borderStyle:"dashed"},streakPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,fontWeight:700,padding:"3px 9px",borderRadius:12},tinyBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:"2px 3px",display:"grid",placeItems:"center",borderRadius:4},statStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:10,marginBottom:18},stat:{borderRadius:10,padding:"13px 14px"},statLabel:{fontSize:11,fontWeight:600,color:"var(--text-2)",marginBottom:5},statValue:{fontSize:19,fontWeight:700,display:"flex",alignItems:"center",gap:5,fontFamily:"'Fraunces',Georgia,serif"},monthCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},monthTitle:{fontSize:14,fontWeight:700,marginBottom:12,fontFamily:"'Fraunces',Georgia,serif"},monthDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:8},monthDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},monthGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6},monthDay:{aspectRatio:"1",border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",display:"grid",placeItems:"center"},monthDayFuture:{opacity:.4,cursor:"not-allowed",background:"var(--surface-2)"},monthDayOff:{background:"var(--surface-2)",borderStyle:"dashed",color:"var(--text-3)",opacity:.5,cursor:"default"},dayPick:{display:"flex",gap:4,flexWrap:"wrap"},dayChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:7,padding:"5px 7px",fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:"inherit",minWidth:34},dayChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},pickHint:{fontSize:11,color:"var(--text-3)",fontWeight:600},offDay:{color:"var(--text-3)",opacity:.4,fontSize:18,lineHeight:1,userSelect:"none"},noteIndicator:{position:"absolute",top:3,right:3,width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},cellNoteBubble:{position:"absolute",top:2,right:"calc(50% - 16px)",width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},countBadge:{position:"absolute",bottom:2,right:2,minWidth:13,height:13,padding:"0 2px",borderRadius:7,color:"#fff",fontSize:9,fontWeight:700,display:"grid",placeItems:"center",lineHeight:1},counterBtn:{width:44,height:44,borderRadius:"50%",border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:24,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1},pastEditNote:{textAlign:"center",fontSize:11.5,fontWeight:600,color:"#C2773B",background:"rgba(194,119,59,0.10)",borderRadius:8,padding:"7px 10px",marginBottom:8,lineHeight:1.4},inlineCounter:{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",margin:"2px 0 8px",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,flexWrap:"wrap"},inlineCount:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1},inlineTarget:{fontSize:12,fontWeight:600,color:"var(--text-3)",marginLeft:1},inlinePlus:{width:30,height:30,borderRadius:8,border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:18,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1,flexShrink:0},inlineSet:{height:30,padding:"0 12px",borderRadius:8,border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",flexShrink:0},inlineWait:{fontSize:12,fontWeight:700,color:"#C2773B"},inlineReady:{fontSize:12,fontWeight:700,color:"#4C9A6B"},inlineMore:{marginLeft:"auto",border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",fontSize:16,fontWeight:700,lineHeight:1},activeToggle:{position:"relative",width:38,height:22,borderRadius:11,border:"none",background:"var(--border)",cursor:"pointer",flexShrink:0,transition:"background 0.2s",padding:0},activeToggleOn:{background:"#4C9A6B"},activeKnob:{position:"absolute",top:3,left:3,width:16,height:16,borderRadius:"50%",background:"#fff",transition:"left 0.2s",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},activeKnobOn:{left:19},chainLine:{position:"absolute",top:"calc(50% - 3px)",left:0,right:0,height:6,zIndex:0,opacity:.9},chainBanner:{display:"flex",alignItems:"center",gap:8,borderRadius:10,padding:"10px 14px",marginBottom:14,fontSize:12.5,fontWeight:700,fontFamily:"'Inter',system-ui,sans-serif"},navBar:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:16},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},navLabel:{fontSize:13,fontWeight:700,color:"var(--text)",minWidth:180,textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},noteBox:{background:"var(--surface)",borderRadius:10,padding:14,marginTop:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},longPressMenu:{position:"absolute",top:"100%",left:0,zIndex:50,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 4px 16px rgba(0,0,0,0.12)",padding:"4px 0",minWidth:140},menuItem:{display:"flex",alignItems:"center",gap:8,width:"100%",border:"none",background:"none",padding:"8px 14px",fontSize:13,color:"var(--text)",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:100,display:"grid",placeItems:"center"},modal:{background:"var(--surface)",borderRadius:14,padding:24,width:320,maxWidth:"90vw",display:"flex",flexDirection:"column",gap:8},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:700,fontSize:16,fontFamily:"'Fraunces',Georgia,serif",marginBottom:6},modalLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4}},kc=[{id:1,label:"Rough",emoji:"😣",color:"#C2536B"},{id:2,label:"Low",emoji:"🙁",color:"#C2773B"},{id:3,label:"Okay",emoji:"😐",color:"#C9A227"},{id:4,label:"Good",emoji:"🙂",color:"#4C9A6B"},{id:5,label:"Great",emoji:"😄",color:"#3A7CA5"}],mv=e=>kc.find(r=>r.id===e),nd=[{id:"wins",label:"Wins",hint:"What went well today?",icon:qr,color:"#C9A227"},{id:"grateful",label:"Grateful for",hint:"1–3 things",icon:mh,color:"#C2536B"},{id:"mattered",label:"What mattered",hint:"The point of today",icon:Eg,color:"#3A7CA5"},{id:"letgo",label:"Letting go of",hint:"Offload what's draining",icon:A0,color:"#8268B0"},{id:"tomorrow",label:"Tomorrow's one thing",hint:"A single priority",icon:zh,color:"#4C9A6B"}],_h=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,hv=()=>_h(new Date),od=e=>new Date(e+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"});function fv(){const e=hv(),[r,n]=[new Date().getFullYear(),new Date().getMonth()+1],[o,i]=c.useState(null),s=o||e,a=s===e,[l,d]=c.useState(null),[g,h]=c.useState({}),[y,f]=c.useState(Object.fromEntries(nd.map(v=>[v.id,""]))),E=c.useCallback(async v=>{const $=await F.getJournalEntry(v);d($)},[]);c.useCallback(async()=>{const v=await F.getJournalHistory(r,n);h(v)},[r,n]);const R=c.useCallback(async()=>{const[v,$]=await Promise.all([F.getJournalEntry(s),F.getJournalHistory(r,n)]);d(v),h($)},[s,r,n]);c.useEffect(()=>{R()},[R]);const T=async v=>{a&&(await F.updateJournalMood(s,v),R())},z=async v=>{if(!a)return;const $=y[v].trim();$&&(await F.addJournalBullet(s,v,$),f(Q=>({...Q,[v]:""})),E(s))},m=async v=>{await F.deleteJournalBullet(v),E(s)},b=v=>{i(v===e?null:v),f(Object.fromEntries(nd.map($=>[$.id,""])))};if(!l)return t.jsx("div",{style:{padding:28,color:"var(--text-3)"},children:"Loading…"});const u=l.mood!==null,k=(()=>{let v=0;const $=new Date(e);if(g[e]||a&&u)v=1,$.setDate($.getDate()-1);else return 0;for(;;){const ne=_h($);if(g[ne])v++,$.setDate($.getDate()-1);else break}return v})(),j=Object.values(l.bullets||{}).reduce((v,$)=>v+$.length,0),C=new Date(r,n,0).getDate(),B=new Date(r,n-1,1).getDay(),x=B===0?6:B-1;return t.jsxs("div",{style:it.page,children:[t.jsxs("div",{style:it.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:it.eyebrow,children:"Anvil · Journal"}),!a&&t.jsxs("button",{style:it.backBtn,onClick:()=>i(null),children:[t.jsx(In,{size:14})," Back to Today"]}),t.jsx("h1",{style:it.h1,children:a?"Today":od(s)}),a&&t.jsx("div",{style:it.date,children:od(e)})]}),t.jsxs("div",{style:it.streakBox,children:[t.jsx(Cn,{size:16,color:"#C2773B"}),t.jsx("span",{style:it.streakNum,children:k}),t.jsx("span",{style:it.streakLabel,children:"day streak"})]})]}),t.jsxs("div",{style:it.card,children:[t.jsxs("div",{style:it.cardTitle,children:["How ",a?"are":"were"," you?"]}),t.jsx("div",{style:it.moodRow,children:kc.map(v=>{const $=l.mood===v.id;return t.jsxs("button",{onClick:()=>T(v.id),disabled:!a,style:{...it.moodBtn,cursor:a?"pointer":"default",...$?{background:v.color,borderColor:v.color,transform:"translateY(-2px)"}:{},...!a&&!$?{opacity:.55}:{}},children:[t.jsx("span",{style:it.moodEmoji,children:v.emoji}),t.jsx("span",{style:{...it.moodLabel,color:$?"#fff":"#6B675E"},children:v.label})]},v.id)})})]}),nd.map(v=>{var ne;const $=v.icon,Q=((ne=l.bullets)==null?void 0:ne[v.id])||[];return t.jsxs("div",{style:it.card,children:[t.jsxs("div",{style:it.sectionHead,children:[t.jsx("span",{style:{...it.sectionIcon,background:`${v.color}1A`,color:v.color},children:t.jsx($,{size:15})}),t.jsxs("div",{children:[t.jsx("div",{style:it.cardTitle,children:v.label}),t.jsx("div",{style:it.sectionHint,children:v.hint})]})]}),t.jsxs("ul",{style:it.bulletList,children:[Q.map(be=>t.jsxs("li",{style:it.bullet,children:[t.jsx("span",{style:{...it.bulletDot,background:v.color}}),t.jsx("span",{style:it.bulletText,children:be.text}),a&&t.jsx("button",{onClick:()=>m(be.id),style:it.bulletDel,children:t.jsx(Be,{size:13})})]},be.id)),!a&&Q.length===0&&t.jsx("li",{style:it.sectionHint,children:"Nothing written."})]}),a&&t.jsxs("div",{style:it.addRow,children:[t.jsx("input",{placeholder:"Add a point…",value:y[v.id],onChange:be=>f(A=>({...A,[v.id]:be.target.value})),onKeyDown:be=>be.key==="Enter"&&z(v.id),style:it.input}),t.jsx("button",{onClick:()=>z(v.id),style:{...it.addBtn,background:v.color},children:t.jsx(at,{size:16})})]})]},v.id)}),t.jsxs("div",{style:it.card,children:[t.jsxs("div",{style:it.cardTitle,children:[new Date(r,n-1).toLocaleDateString("en-US",{month:"long",year:"numeric"})," · Mood history",t.jsx("span",{style:{fontSize:11,color:"var(--text-3)",fontWeight:400,marginLeft:8},children:"tap a day to view"})]}),t.jsx("div",{style:it.calDow,children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(v=>t.jsx("div",{style:it.calDowCell,children:v},v))}),t.jsxs("div",{style:it.calGrid,children:[Array.from({length:x}).map((v,$)=>t.jsx("div",{},`p${$}`)),Array.from({length:C},(v,$)=>$+1).map(v=>{const $=`${r}-${String(n).padStart(2,"0")}-${String(v).padStart(2,"0")}`,Q=$===e&&l.mood?l.mood:g[$],ne=Q?mv(Q):null,be=$>e,A=$===s;return t.jsx("button",{onClick:()=>!be&&b($),disabled:be,style:{...it.calDay,background:ne?ne.color:be?"var(--surface-2)":"var(--surface)",borderColor:A?"var(--accent-strong)":"var(--border)",borderWidth:A?2:1,color:ne?"#fff":"var(--text-3)",opacity:be?.5:1,cursor:be?"not-allowed":"pointer",outline:A?"2px solid var(--accent-strong)":"none",outlineOffset:1},title:ne?ne.label:$,children:ne?ne.emoji:v},v)})]}),t.jsx("div",{style:it.legend,children:kc.map(v=>t.jsxs("span",{style:it.legendItem,children:[t.jsx("span",{style:{...it.legendDot,background:v.color}})," ",v.label]},v.id))})]}),t.jsx("div",{style:it.footer,children:a?u?`Mood set · ${j} point${j===1?"":"s"} written today`:"Tap a mood to log today and keep your streak":`Viewing ${od(s)} · past entries are read-only`})]})}const it={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},backBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",background:"none",color:"#3A7CA5",fontSize:12.5,fontWeight:600,cursor:"pointer",padding:"0 0 6px",fontFamily:"inherit"},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},date:{fontSize:13,color:"var(--text-3)",marginTop:4},streakBox:{display:"flex",alignItems:"center",gap:6,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"8px 14px"},streakNum:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"#C2773B"},streakLabel:{fontSize:11,color:"var(--text-3)",fontWeight:500},card:{background:"var(--surface)",borderRadius:12,padding:"18px 20px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},cardTitle:{fontSize:14,fontWeight:700,marginBottom:12,color:"var(--text)"},moodRow:{display:"flex",gap:8,flexWrap:"wrap"},moodBtn:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,border:"2px solid var(--border)",background:"var(--surface)",borderRadius:10,padding:"10px 12px",cursor:"pointer",flex:"1 1 60px",transition:"transform 0.1s"},moodEmoji:{fontSize:22},moodLabel:{fontSize:11,fontWeight:600},sectionHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:10},sectionIcon:{width:32,height:32,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},sectionHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},bulletList:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6,marginBottom:10},bullet:{display:"flex",alignItems:"center",gap:8,fontSize:13.5,lineHeight:1.4},bulletDot:{width:6,height:6,borderRadius:"50%",flexShrink:0},bulletText:{flex:1},bulletDel:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},addRow:{display:"flex",gap:8},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",outline:"none"},addBtn:{width:36,height:36,border:"none",borderRadius:8,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:12},calDay:{aspectRatio:"1",border:"1px solid var(--border)",borderRadius:7,fontSize:13,display:"grid",placeItems:"center",fontWeight:500,fontFamily:"inherit"},legend:{display:"flex",gap:10,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)"},legendDot:{width:8,height:8,borderRadius:"50%",display:"inline-block"},footer:{fontSize:12.5,color:"var(--text-3)",textAlign:"center",marginTop:8,fontStyle:"italic"}};function xv(e=760){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const Nr=[{id:"D",label:"Data",color:"#3A7CA5",soft:"rgba(58,124,165,0.10)",prompt:"What did you read/watch? Log the raw source and a quick note.",hint:"e.g. 'Atomic Habits ch.1 — habits are systems not goals'"},{id:"I",label:"Information",color:"#8268B0",soft:"rgba(130,104,176,0.10)",prompt:"What did you actually understand from it? In your own words.",hint:"e.g. 'Small 1% improvements compound into massive change over time'"},{id:"K",label:"Knowledge",color:"#C9A227",soft:"rgba(201,162,39,0.10)",prompt:"How will this specifically improve your life? Connect it to your goals.",hint:"e.g. 'I will improve my morning workout habit by 1% each week'"},{id:"W",label:"Wisdom",color:"#4C9A6B",soft:"rgba(76,154,107,0.10)",prompt:"How have you implemented it? What changed?",hint:"e.g. 'I've not missed a workout in 3 weeks using the 1% rule'"}],dp=e=>Nr.findIndex(r=>r.id===e),wc=[{id:"book",label:"Book",icon:kl},{id:"video",label:"Video",icon:Ih},{id:"article",label:"Article",icon:zg}],ta=e=>wc.find(r=>r.id===e)||wc[0],id={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"};function yv(){var me;const[e,r]=c.useState([]),[n,o]=c.useState(null),[i,s]=c.useState("ALL"),[a,l]=c.useState(!1),[d,g]=c.useState(null),[h,y]=c.useState({title:"",type:"book",pillar:"Academic",note:"",link:""}),[f,E]=c.useState(null),[R,T]=c.useState({}),[z,m]=c.useState(null),[b,u]=c.useState(null),[k,j]=c.useState({}),[C,B]=c.useState({}),[x,v]=c.useState(null),$=xv(),Q=c.useCallback(async()=>{try{const H=await F.getSkills();r(H);const fe={};H.forEach(he=>{fe[he.id]=Object.fromEntries(Nr.map(Ee=>[Ee.id,""]))}),T(he=>{const Ee={...fe};return H.forEach(Qe=>{he[Qe.id]&&(Ee[Qe.id]={...fe[Qe.id],...he[Qe.id]})}),Ee})}catch(H){console.error(H)}},[]);c.useEffect(()=>{Q()},[Q]);const ne=e.find(H=>H.id===n),be=ne?dp(ne.stage):-1,A=async(H,fe)=>{var Ee;const he=(((Ee=R[H])==null?void 0:Ee[fe])??"").trim();he&&(await F.addSkillNote(H,fe,he),T(Qe=>({...Qe,[H]:{...Qe[H],[fe]:""}})),Q())},K=async H=>{await F.deleteSkillNote(H),Q()},re=H=>(H==null?void 0:H.source_type)==="book"?"Chapter":"Learning",ve=()=>`g${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,Z=async H=>{const fe=[...H.data_groups||[]];fe.push({id:ve(),label:`${re(H)} ${fe.length+1}`}),await F.setSkillGroups(H.id,fe),B(he=>({...he,[fe[fe.length-1].id]:!0})),Q()},Y=async(H,fe,he)=>{const Ee=(H.data_groups||[]).map(Qe=>Qe.id===fe?{...Qe,label:he}:Qe);await F.setSkillGroups(H.id,Ee),Q()},ce=async(H,fe)=>{const he=(H.data_groups||[]).filter(Ee=>Ee.id!==fe);await F.setSkillGroups(H.id,he),Q()},J=async(H,fe)=>{const he=(k[fe]??"").trim();he&&(await F.addSkillNote(H.id,"D",he,fe),j(Ee=>({...Ee,[fe]:""})),Q())},I=async()=>{!ne||!(b!=null&&b.trim())||(await F.updateSkill(ne.id,{title:b.trim()}),u(null),Q())},W=async()=>{!z||!z.text.trim()||(await F.updateSkillNote(z.id,z.text.trim()),m(null),Q())},_=async H=>{await F.toggleSkillNote(H),Q()},P=async(H,fe)=>{e.find(Ee=>Ee.id===H)&&(fe==="W"&&g(H),await F.completeSkillStage(H,fe),Q())},de=async()=>{if(!h.title.trim())return;const H=await F.createSkill({pillar:h.pillar,title:h.title.trim(),source_type:h.type,link:h.link.trim(),note_d:h.note.trim()});l(!1),y({title:"",type:"book",pillar:"Academic",note:"",link:""}),o(H.id),Q()},ge=async()=>{ne&&(await F.updateSkill(ne.id,{link:(f||"").trim()}),E(null),Q())},{deleteItem:De,toasts:q,handleUndo:oe,handleDismiss:G}=yr(F.deleteSkill,F.restoreSkill,Q),le=(H,fe="Skill")=>{n===H&&o(null),De(H,fe)},D=i==="ALL"?e:e.filter(H=>H.stage===i),w=e.filter(H=>H.stage==="W").length,ie=!!ne;return t.jsxs("div",{style:ye.page,children:[d&&t.jsx("div",{style:ye.celebOverlay,children:t.jsxs("div",{style:ye.celebBox,children:[t.jsx("div",{style:ye.celebEmoji,children:"🏆"}),t.jsx("div",{style:ye.celebTitle,children:"Wisdom unlocked!"}),t.jsx("div",{style:ye.celebSub,children:"You've implemented this knowledge — that's rare and real."}),t.jsx("button",{onClick:()=>g(null),style:ye.celebBtn,children:"Continue"})]})}),t.jsxs("div",{style:ye.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:ye.eyebrow,children:"Anvil · Skills"}),t.jsx("h1",{style:ye.h1,children:"Skills"}),t.jsx("div",{style:ye.subhead,children:"Data → Information → Knowledge → Wisdom"})]}),t.jsxs("div",{style:ye.headRight,children:[t.jsxs("div",{style:ye.wisdomBadge,children:[t.jsx(qr,{size:14,color:"#C9A227"})," ",w," Wisdom",w!==1?"s":""]}),t.jsxs("button",{onClick:()=>{l(!0),o(null)},style:ye.addSkillBtn,children:[t.jsx(at,{size:15})," Add skill"]})]})]}),t.jsx("div",{style:ye.filterBar,children:["ALL",...Nr.map(H=>H.id)].map(H=>{const fe=Nr.find(Ee=>Ee.id===H),he=i===H;return t.jsx("button",{onClick:()=>s(H),style:{...ye.filterBtn,...he?{background:fe?fe.color:"var(--accent-strong)",color:"#fff",borderColor:"transparent"}:{}},children:fe?`${H} · ${fe.label}`:"All"},H)})}),t.jsxs("div",{style:{...ye.layout,gridTemplateColumns:!$&&ie?"minmax(0,1fr) minmax(0,1fr)":"1fr"},children:[(!$||!ne)&&t.jsxs("div",{style:{...ye.cardList,gridTemplateColumns:$||ie?"1fr":"repeat(3, minmax(0, 1fr))"},children:[a&&t.jsxs("div",{style:{...ye.skillCard,border:"2px dashed #3A7CA5",gridColumn:"1 / -1"},children:[t.jsx("div",{style:ye.cardTitle,children:"New skill"}),t.jsx("input",{placeholder:"Title (book / video / article name)",value:h.title,onChange:H=>y(fe=>({...fe,title:H.target.value})),onKeyDown:H=>H.key==="Enter"&&de(),style:ye.input,autoFocus:!0}),t.jsxs("div",{style:ye.addRow,children:[t.jsx(nr,{value:h.type,options:wc.map(H=>({value:H.id,label:H.label})),onChange:H=>y(fe=>({...fe,type:H})),style:{flex:1}}),t.jsx(nr,{value:h.pillar,options:Object.keys(id),onChange:H=>y(fe=>({...fe,pillar:H})),style:{flex:1}})]}),t.jsx("input",{placeholder:h.type==="book"?"Link (optional)":`${ta(h.type).label} link (optional) — paste URL to route here`,value:h.link,onChange:H=>y(fe=>({...fe,link:H.target.value})),onKeyDown:H=>H.key==="Enter"&&de(),style:ye.input}),t.jsxs("div",{style:ye.addRow,children:[t.jsxs("button",{onClick:de,style:ye.saveBtn,children:[t.jsx(Oe,{size:14})," Save"]}),t.jsxs("button",{onClick:()=>l(!1),style:ye.cancelBtn,children:[t.jsx(Be,{size:14})," Cancel"]})]})]}),D.map(H=>{const fe=dp(H.stage),he=Nr[fe],Ee=ta(H.source_type),Qe=H.stage==="W",st=n===H.id;return t.jsxs("div",{onClick:()=>o(st?null:H.id),style:{...ye.skillCard,...st?{borderColor:he.color,borderWidth:2}:{},...Qe?{background:"rgba(76,154,107,0.05)"}:{}},children:[t.jsxs("div",{style:ye.skillCardTop,children:[t.jsxs("div",{style:ye.skillMeta,children:[t.jsx("span",{style:{color:id[H.pillar]},children:t.jsx(Ee.icon,{size:13})}),t.jsx("span",{style:{...ye.pillarDot,background:id[H.pillar]}}),t.jsxs("span",{style:ye.srcLabel,children:[Ee.label," · ",H.pillar]})]}),t.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[Qe&&t.jsx(To,{size:14,color:"#4C9A6B"}),H.link&&t.jsx("a",{href:H.link,target:"_blank",rel:"noreferrer",onClick:Le=>Le.stopPropagation(),style:ye.ghostBtn,title:"Open source",children:t.jsx(pc,{size:13})}),t.jsx("button",{onClick:Le=>{Le.stopPropagation(),le(H.id,H.title)},style:ye.ghostBtn,children:t.jsx(Be,{size:13})})]})]}),t.jsx("div",{style:ye.skillTitle,children:H.title}),t.jsxs("div",{style:ye.track,children:[Nr.map((Le,et)=>{var We;const Ke=et<fe,ut=et===fe,ae=(We=H.completed_stages)==null?void 0:We[Le.id];return t.jsxs("div",{style:{...ye.trackItem,...et<Nr.length-1?{flex:1}:{}},children:[t.jsxs("div",{style:{...ye.trackDot,background:Ke||ae||ut?Le.color:"var(--border)",boxShadow:ut?`0 0 0 3px ${Le.color}33`:"none"},children:[(Ke||ut&&ae)&&t.jsx(Oe,{size:9,color:"#fff",strokeWidth:3}),ut&&!ae&&t.jsx("span",{style:ye.trackCurrent,children:Le.id}),!Ke&&!ut&&t.jsx(Yu,{size:8,color:"#B5B1A7"})]}),et<Nr.length-1&&t.jsx("div",{style:{...ye.trackLine,background:Ke?Nr[et+1].color:"var(--border)"}})]},Le.id)}),t.jsx("span",{style:{...ye.stageTag,background:he.soft,color:he.color},children:he.label})]})]},H.id)}),D.length===0&&!a&&t.jsx("div",{style:{...ye.empty,gridColumn:"1 / -1"},children:"No skills at this stage yet."})]}),ne&&t.jsxs("div",{style:ye.detail,children:[t.jsxs("div",{style:ye.detailHead,children:[$&&t.jsx("button",{onClick:()=>{o(null),u(null)},style:ye.backBtn,title:"Back to skills",children:t.jsx(In,{size:18})}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsxs("div",{style:ye.eyebrow,children:[ta(ne.source_type).label," · ",ne.pillar]}),b!==null?t.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginTop:4},children:[t.jsx("input",{autoFocus:!0,value:b,onChange:H=>u(H.target.value),onKeyDown:H=>{H.key==="Enter"&&I(),H.key==="Escape"&&u(null)},style:{...ye.input,fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:0,flex:1}}),t.jsx("button",{onClick:I,style:{...ye.noteAddBtn,background:"#4C9A6B",width:30,height:30},children:t.jsx(Oe,{size:13})}),t.jsx("button",{onClick:()=>u(null),style:{...ye.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:30,height:30},children:t.jsx(Be,{size:13})})]}):t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[t.jsx("div",{style:ye.detailTitle,children:ne.title}),t.jsx("button",{onClick:()=>u(ne.title),style:ye.ghostBtn,title:"Edit name",children:t.jsx(St,{size:13})})]}),f!==null?t.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginTop:6},children:[t.jsx("input",{autoFocus:!0,value:f,placeholder:"Paste the video / article URL",onChange:H=>E(H.target.value),onKeyDown:H=>{H.key==="Enter"&&ge(),H.key==="Escape"&&E(null)},style:{...ye.input,marginBottom:0,flex:1}}),t.jsx("button",{onClick:ge,style:{...ye.noteAddBtn,background:"#4C9A6B",width:30,height:30},children:t.jsx(Oe,{size:13})}),t.jsx("button",{onClick:()=>E(null),style:{...ye.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:30,height:30},children:t.jsx(Be,{size:13})})]}):t.jsx("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:6,flexWrap:"wrap"},children:ne.link?t.jsxs(t.Fragment,{children:[t.jsxs("a",{href:ne.link,target:"_blank",rel:"noreferrer",style:ye.openLinkBtn,children:[t.jsx(pc,{size:13})," Open ",ta(ne.source_type).label.toLowerCase()]}),t.jsx("button",{onClick:()=>E(ne.link),style:ye.ghostBtn,title:"Edit link",children:t.jsx(St,{size:12})})]}):t.jsxs("button",{onClick:()=>E(""),style:ye.addLinkBtn,children:[t.jsx(ws,{size:12})," Add link"]})})]}),t.jsx("button",{onClick:()=>{o(null),u(null)},style:ye.closeBtn,children:t.jsx(Be,{size:16})})]}),Nr.map((H,fe)=>{var Ke,ut,ae;const he=fe<=be,Ee=fe===be,Qe=fe<be||((Ke=ne.completed_stages)==null?void 0:Ke[H.id]),st=fe>be,Le=((ut=ne.notes)==null?void 0:ut[H.id])||[],et=((ae=R[ne.id])==null?void 0:ae[H.id])??"";return t.jsxs("div",{style:{...ye.stageBlock,...he?{borderColor:H.color}:{},opacity:st?.45:1},children:[t.jsxs("div",{style:ye.stageBlockHead,children:[t.jsx("div",{style:{...ye.stageLetter,background:he?H.color:"var(--border)",color:he?"#fff":"#9A968C"},children:Qe&&!Ee?t.jsx(Oe,{size:12,color:"#fff",strokeWidth:3}):st?t.jsx(Yu,{size:11,color:"#9A968C"}):H.id}),t.jsxs("div",{style:{flex:1},children:[t.jsx("div",{style:{...ye.stageName,color:he?H.color:"#9A968C"},children:H.label}),he&&t.jsx("div",{style:ye.stagePrompt,children:H.prompt})]}),Qe&&!Ee&&t.jsx("span",{style:{...ye.doneBadge,color:H.color,background:H.soft},children:"Done"})]}),he&&(()=>{var At,Er;const We=H.id==="W",qe=H.id==="D",tt=Le.length>0&&Le.every(Ne=>Ne.done),ht=We?tt:Le.length>0,_t=ne.data_groups||[],It=Le.filter(Ne=>!Ne.grp),xt=re(ne),yt=Ne=>t.jsxs("li",{style:ye.noteItem,children:[t.jsx("span",{style:{...ye.noteDot,background:H.color}}),(z==null?void 0:z.id)===Ne.id?t.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[t.jsx("input",{autoFocus:!0,value:z.text,onChange:dt=>m(Bt=>({...Bt,text:dt.target.value})),onKeyDown:dt=>{dt.key==="Enter"&&W(),dt.key==="Escape"&&m(null)},style:{...ye.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),t.jsx("button",{onClick:W,style:{...ye.noteAddBtn,background:H.color,width:28,height:28},children:t.jsx(Oe,{size:12})}),t.jsx("button",{onClick:()=>m(null),style:{...ye.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:t.jsx(Be,{size:12})})]}):t.jsx("span",{style:ye.noteText,children:Ne.text}),(z==null?void 0:z.id)!==Ne.id&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>m({id:Ne.id,text:Ne.text}),style:ye.ghostBtn,children:t.jsx(St,{size:12})}),t.jsx("button",{onClick:()=>K(Ne.id),style:ye.ghostBtn,children:t.jsx(Be,{size:12})})]})]},Ne.id);return t.jsxs(t.Fragment,{children:[qe?t.jsxs(t.Fragment,{children:[It.length>0&&t.jsx("ul",{style:ye.noteList,children:It.map(yt)}),_t.map(Ne=>{const dt=Le.filter(zt=>zt.grp===Ne.id),Bt=C[Ne.id]!==!1;return t.jsxs("div",{style:{...ye.groupBox,borderColor:`${H.color}55`},children:[t.jsxs("div",{style:ye.groupHead,children:[t.jsx("button",{onClick:()=>B(zt=>({...zt,[Ne.id]:!Bt})),style:ye.groupCaret,children:Bt?t.jsx(ro,{size:15}):t.jsx(ln,{size:15})}),ne.source_type==="book"?t.jsx(kl,{size:13,color:H.color}):t.jsx(l0,{size:13,color:H.color}),(x==null?void 0:x.id)===Ne.id?t.jsx("input",{autoFocus:!0,value:x.label,onChange:zt=>v(pt=>({...pt,label:zt.target.value})),onKeyDown:zt=>{zt.key==="Enter"&&(Y(ne,Ne.id,x.label.trim()||Ne.label),v(null)),zt.key==="Escape"&&v(null)},onBlur:()=>{Y(ne,Ne.id,x.label.trim()||Ne.label),v(null)},style:{...ye.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}):t.jsx("span",{style:ye.groupTitle,onClick:()=>v({id:Ne.id,label:Ne.label}),title:"Click to rename",children:Ne.label}),t.jsx("span",{style:ye.groupCount,children:dt.length}),t.jsx("button",{onClick:()=>ce(ne,Ne.id),style:ye.ghostBtn,title:`Delete ${xt.toLowerCase()}`,children:t.jsx(Be,{size:13})})]}),Bt&&t.jsxs("div",{style:ye.groupBody,children:[dt.length>0&&t.jsx("ul",{style:ye.noteList,children:dt.map(yt)}),t.jsxs("div",{style:ye.noteAddRow,children:[t.jsx("input",{placeholder:"Add a point…",value:k[Ne.id]??"",onChange:zt=>j(pt=>({...pt,[Ne.id]:zt.target.value})),onKeyDown:zt=>zt.key==="Enter"&&J(ne,Ne.id),style:ye.noteInput}),t.jsx("button",{onClick:()=>J(ne,Ne.id),style:{...ye.noteAddBtn,background:H.color},children:t.jsx(at,{size:14})})]})]})]},Ne.id)}),_t.length===0&&It.length===0&&t.jsxs("div",{style:ye.noNotes,children:["No ",xt.toLowerCase(),"s yet — add one to start logging points."]}),t.jsxs("button",{onClick:()=>Z(ne),style:{...ye.addGroupBtn,color:H.color,borderColor:`${H.color}80`},children:[t.jsx(at,{size:14})," Add ",xt.toLowerCase()]})]}):t.jsxs(t.Fragment,{children:[Le.length>0&&t.jsx("ul",{style:ye.noteList,children:Le.map(Ne=>t.jsxs("li",{style:ye.noteItem,children:[We?t.jsx("button",{onClick:()=>_(Ne.id),style:{...ye.checkBox,...Ne.done?{background:H.color,borderColor:H.color}:{}},children:Ne.done&&t.jsx(Oe,{size:11,color:"#fff",strokeWidth:3})}):t.jsx("span",{style:{...ye.noteDot,background:H.color}}),(z==null?void 0:z.id)===Ne.id?t.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[t.jsx("input",{autoFocus:!0,value:z.text,onChange:dt=>m(Bt=>({...Bt,text:dt.target.value})),onKeyDown:dt=>{dt.key==="Enter"&&W(),dt.key==="Escape"&&m(null)},style:{...ye.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),t.jsx("button",{onClick:W,style:{...ye.noteAddBtn,background:H.color,width:28,height:28},children:t.jsx(Oe,{size:12})}),t.jsx("button",{onClick:()=>m(null),style:{...ye.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:t.jsx(Be,{size:12})})]}):t.jsx("span",{style:{...ye.noteText,...We&&Ne.done?{textDecoration:"line-through",color:"var(--text-3)"}:{}},children:Ne.text}),(z==null?void 0:z.id)!==Ne.id&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>m({id:Ne.id,text:Ne.text}),style:ye.ghostBtn,children:t.jsx(St,{size:12})}),t.jsx("button",{onClick:()=>K(Ne.id),style:ye.ghostBtn,children:t.jsx(Be,{size:12})})]})]},Ne.id))}),Le.length===0&&t.jsx("div",{style:ye.noNotes,children:We?"Add the steps to implement this — check each off as you do it.":`No notes yet — ${H.hint}`}),t.jsxs("div",{style:ye.noteAddRow,children:[t.jsx("input",{placeholder:We?"Add a step to implement…":`Add a ${H.label} note…`,value:et,onChange:Ne=>T(dt=>({...dt,[ne.id]:{...dt[ne.id],[H.id]:Ne.target.value}})),onKeyDown:Ne=>Ne.key==="Enter"&&A(ne.id,H.id),style:ye.noteInput}),t.jsx("button",{onClick:()=>A(ne.id,H.id),style:{...ye.noteAddBtn,background:H.color},children:t.jsx(at,{size:14})})]})]}),Ee&&!((At=ne.completed_stages)!=null&&At[H.id])&&t.jsxs(t.Fragment,{children:[We&&Le.length>0&&!tt&&t.jsxs("div",{style:ye.checklistHint,children:[Le.filter(Ne=>Ne.done).length,"/",Le.length," done — check all steps to complete Wisdom"]}),t.jsxs("button",{onClick:()=>P(ne.id,H.id),disabled:!ht,style:{...ye.advanceBtn,background:ht?H.color:"#C3BFB5",marginTop:10,cursor:ht?"pointer":"not-allowed"},children:[t.jsx(Oe,{size:14}),We?"Mark Wisdom complete":`Complete ${H.label} → ${(Er=Nr[fe+1])==null?void 0:Er.label}`]})]})]})})()]},H.id)}),ne.stage==="W"&&((me=ne.completed_stages)==null?void 0:me.W)&&t.jsxs("div",{style:ye.wisdomDone,children:[t.jsx(qr,{size:16,color:"#4C9A6B"})," Wisdom achieved — implemented in your life"]})]})]}),t.jsx(vr,{toasts:q,onUndo:oe,onDismiss:G})]})}const ye={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box",position:"relative"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},wisdomBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addSkillBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},filterBar:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16},filterBtn:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},layout:{display:"grid",gap:12,alignItems:"start"},cardList:{display:"grid",gap:10,alignContent:"start"},skillCard:{background:"var(--surface)",borderRadius:12,padding:"16px",border:"1.5px solid var(--border)",cursor:"pointer",boxShadow:"0 1px 2px rgba(0,0,0,0.04)",minWidth:0,overflow:"hidden",boxSizing:"border-box"},skillCardTop:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8,marginBottom:6},skillMeta:{display:"flex",alignItems:"center",gap:6,minWidth:0},pillarDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},srcLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},skillTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",marginBottom:12,lineHeight:1.3,wordBreak:"break-word"},cardTitle:{fontSize:13,fontWeight:700,marginBottom:10},track:{display:"flex",alignItems:"center",minWidth:0},trackItem:{display:"flex",alignItems:"center",minWidth:0},trackDot:{width:22,height:22,borderRadius:"50%",display:"grid",placeItems:"center",flexShrink:0},trackCurrent:{fontSize:9,fontWeight:800,color:"#fff"},trackLine:{flex:1,minWidth:8,height:3,borderRadius:2,margin:"0 2px"},stageTag:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,marginLeft:8,flexShrink:0,whiteSpace:"nowrap"},detail:{background:"var(--surface)",borderRadius:14,padding:"18px 16px",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",border:"1.5px solid var(--border)",alignSelf:"start"},detailHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16},detailTitle:{fontSize:18,fontWeight:700,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},backBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginRight:4},groupBox:{border:"1.5px solid var(--border)",borderRadius:9,marginBottom:8,overflow:"hidden",background:"var(--bg)"},groupHead:{display:"flex",alignItems:"center",gap:7,padding:"8px 10px"},groupCaret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},groupTitle:{flex:1,minWidth:0,fontSize:13,fontWeight:700,color:"var(--text)",cursor:"text",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},groupCount:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 7px",flexShrink:0},groupBody:{padding:"0 10px 10px 10px"},addGroupBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1.5px dashed",background:"none",padding:"9px 12px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:2},stageBlock:{border:"1.5px solid var(--border)",borderRadius:10,padding:"12px 13px",marginBottom:10},stageBlockHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:8},stageLetter:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",fontSize:13,fontWeight:800,flexShrink:0},stageName:{fontSize:13,fontWeight:700},stagePrompt:{fontSize:11.5,color:"var(--text-2)",marginTop:2,lineHeight:1.4},doneBadge:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10,marginLeft:"auto",flexShrink:0},noteList:{margin:"0 0 8px 0",padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6},noteItem:{display:"flex",alignItems:"flex-start",gap:8,fontSize:13,lineHeight:1.4},noteDot:{width:6,height:6,borderRadius:"50%",flexShrink:0,marginTop:5},checkBox:{width:18,height:18,borderRadius:5,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginTop:1,padding:0},checklistHint:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,marginTop:10,textAlign:"center"},noteText:{flex:1,color:"var(--text)"},noNotes:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",marginBottom:8},noteAddRow:{display:"flex",gap:6},noteInput:{flex:1,border:"1px solid var(--border)",borderRadius:7,padding:"7px 10px",fontSize:13,fontFamily:"inherit",outline:"none"},noteAddBtn:{width:32,height:32,border:"none",borderRadius:7,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},advanceBtn:{display:"flex",alignItems:"center",gap:8,border:"none",color:"#fff",padding:"10px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},wisdomDone:{display:"flex",alignItems:"center",gap:8,justifyContent:"center",fontSize:13.5,fontWeight:700,color:"#4C9A6B",padding:12,background:"rgba(76,154,107,0.08)",borderRadius:10,marginTop:4},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},openLinkBtn:{display:"inline-flex",alignItems:"center",gap:5,textDecoration:"none",border:"1px solid #3A7CA5",background:"rgba(58,124,165,0.10)",color:"#3A7CA5",fontSize:12,fontWeight:700,padding:"5px 11px",borderRadius:8,fontFamily:"inherit",cursor:"pointer"},addLinkBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"1px dashed var(--border)",background:"none",color:"var(--text-3)",fontSize:12,fontWeight:600,padding:"5px 11px",borderRadius:8,fontFamily:"inherit",cursor:"pointer"},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box",marginBottom:8},addRow:{display:"flex",gap:8,marginBottom:8},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{fontSize:13,color:"var(--text-3)",padding:"32px 12px",textAlign:"center"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.55)",zIndex:50,display:"grid",placeItems:"center"},celebBox:{background:"var(--surface)",borderRadius:20,padding:"40px 32px",textAlign:"center",maxWidth:320,boxShadow:"0 8px 40px rgba(0,0,0,0.18)"},celebEmoji:{fontSize:52,marginBottom:12},celebTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:8},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:"#4C9A6B",color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},ra=[{id:"aarti",title:"Aarti",html:`<h1>॥ गणपतीची आरती ॥</h1><br/>
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
      </div>`}];function vv(){const[e,r]=c.useState(()=>window.innerWidth<720);return c.useEffect(()=>{const n=()=>r(window.innerWidth<720);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}const jv=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:a,height:l}=i;a>l&&a>1400?(l=l*1400/a,a=1400):l>1400&&(a=a*1400/l,l=1400);const d=document.createElement("canvas");d.width=a,d.height=l,d.getContext("2d").drawImage(i,0,0,a,l),r(d.toDataURL("image/jpeg",.85))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)});function cp({base:e,count:r,images:n}){const o=n&&n.length?n:null,i=o?o.length:r,[s,a]=c.useState(0);if(!i)return null;const l=s%i,d=o?o[l]:`${e}${l+1}.jpg`;return t.jsxs("div",{style:{maxWidth:560,margin:"0 auto"},children:[t.jsx("div",{style:Ge.carouselFrame,children:t.jsx("img",{src:d,alt:`Page ${l+1}`,style:Ge.carouselImg})}),t.jsxs("div",{style:Ge.carouselNav,children:[t.jsxs("button",{onClick:()=>a(g=>(g-1+i)%i),style:Ge.carouselBtn,children:[t.jsx(In,{size:16})," Prev"]}),t.jsxs("span",{style:Ge.carouselCount,children:[o?"":"Adhyay ",l+1," / ",i]}),t.jsxs("button",{onClick:()=>a(g=>(g+1)%i),style:Ge.carouselBtn,children:["Next ",t.jsx(ln,{size:16})]})]})]})}function kv(){const e=vv(),[r,n]=c.useState(!1),[o,i]=c.useState([]),[s,a]=c.useState("dss"),[l,d]=c.useState(!1),[g,h]=c.useState({title:"",type:"text",content:"",images:[]}),[y,f]=c.useState([]),[E,R]=c.useState(null),[T,z]=c.useState(!1),m=c.useRef(!1),b=c.useCallback(async()=>{try{const[Y,ce,J]=await Promise.all([F.getDecks(),F.getSetting("spiritual_order"),F.getSetting("spiritual_default")]);if(i(Y),Array.isArray(ce==null?void 0:ce.value)&&f(ce.value),J!=null&&J.value&&R(J.value),!m.current){m.current=!0;const I=new Set([...ra.map(W=>W.id),...Y.map(W=>`deck-${W.id}`)]);J!=null&&J.value&&I.has(J.value)&&a(J.value)}}catch{}},[]);c.useEffect(()=>{b()},[b]);const u=[...ra.map(Y=>({id:Y.id,title:Y.title})),...o.map(Y=>({id:`deck-${Y.id}`,title:Y.title}))],k=(()=>{if(!y.length)return u;const Y=new Map(u.map(J=>[J.id,J])),ce=[];return y.forEach(J=>{Y.has(J)&&(ce.push(Y.get(J)),Y.delete(J))}),Y.forEach(J=>ce.push(J)),ce})(),j=(Y,ce)=>{const J=k.map(W=>W.id),I=Y+ce;I<0||I>=J.length||([J[Y],J[I]]=[J[I],J[Y]],f(J),F.setSetting("spiritual_order",J).catch(()=>{}))},C=Y=>{R(Y),F.setSetting("spiritual_default",Y).catch(()=>{})},B=s.startsWith("deck-")?Number(s.slice(5)):null,x=B!=null?o.find(Y=>Y.id===B):null,v=x?null:ra.find(Y=>Y.id===s)||(B==null?ra[0]:null),$=l?"New deck":x?x.title:(v==null?void 0:v.title)||"",Q=Y=>{a(Y),d(!1),e&&n(!1)},ne=()=>{d(!0),h({title:"",type:"text",content:"",images:[]}),e&&n(!1)},be=async Y=>{const ce=Array.from(Y.target.files||[]),J=[];for(const I of ce)try{J.push(await jv(I))}catch{}h(I=>({...I,images:[...I.images,...J]})),Y.target.value=""},A=Y=>h(ce=>({...ce,images:ce.images.filter((J,I)=>I!==Y)})),K=g.title.trim()&&(g.type==="text"?g.content.trim():g.images.length>0),re=async()=>{if(!K)return;const Y=await F.createDeck({title:g.title.trim(),type:g.type,content:g.type==="text"?g.content:"",images:g.type==="images"?g.images:[]});d(!1),await b(),a(`deck-${Y.id}`)},ve=async Y=>{await F.deleteDeck(Y),s===`deck-${Y}`&&a("dss"),b()},Z={...Ge.sidebar,...e?Ge.sidebarOverlay:{},...e&&!r?Ge.sidebarHidden:{}};return t.jsxs("div",{style:Ge.shell,children:[t.jsx("style",{children:wv}),e&&r&&t.jsx("div",{style:Ge.backdrop,onClick:()=>n(!1)}),t.jsxs("aside",{style:Z,children:[t.jsxs("div",{style:Ge.sideHead,children:[t.jsx("div",{style:Ge.brand,children:"Anvil · Spiritual"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:2},children:[t.jsx("button",{onClick:()=>z(Y=>!Y),style:Ge.iconBtn,title:"Rearrange & set default",children:T?t.jsx(Oe,{size:16}):t.jsx(St,{size:15})}),e&&t.jsx("button",{onClick:()=>n(!1),style:Ge.iconBtn,children:t.jsx(Be,{size:17})})]})]}),T&&t.jsxs("div",{style:Ge.editHint,children:["Arrows reorder · ",t.jsx(ks,{size:11,style:{verticalAlign:"-1px"}})," sets what opens by default"]}),t.jsxs("div",{style:Ge.sideScroll,children:[k.map((Y,ce)=>{const J=Y.id===s&&!l,I=E===Y.id;return t.jsxs("div",{style:Ge.sideRow,children:[t.jsxs("button",{onClick:()=>Q(Y.id),style:{...Ge.sideItem,flex:1,...J?Ge.sideItemOn:{}},children:[Y.title,I&&t.jsx("span",{style:Ge.defStar,title:"Opens by default",children:" ★"})]}),T&&t.jsxs("div",{style:Ge.editControls,children:[t.jsx("button",{onClick:()=>C(Y.id),title:"Set as default",style:{...Ge.miniBtn,...I?{color:"#8268B0"}:{}},children:t.jsx(ks,{size:13})}),t.jsx("button",{onClick:()=>j(ce,-1),disabled:ce===0,style:{...Ge.miniBtn,opacity:ce===0?.3:1},children:t.jsx(wl,{size:13})}),t.jsx("button",{onClick:()=>j(ce,1),disabled:ce===k.length-1,style:{...Ge.miniBtn,opacity:ce===k.length-1?.3:1},children:t.jsx(ro,{size:13})})]})]},Y.id)}),t.jsxs("button",{onClick:ne,style:{...Ge.newDeckBtn,...l?Ge.sideItemOn:{}},children:[t.jsx(at,{size:14})," New deck"]})]})]}),t.jsxs("main",{style:Ge.main,children:[e&&t.jsxs("button",{onClick:()=>n(!0),style:Ge.hamburger,children:[t.jsx(Ig,{size:17}),t.jsx("span",{style:Ge.hamburgerLabel,children:$})]}),l?t.jsxs("div",{style:Ge.contentWrap,children:[t.jsx("div",{style:Ge.formTitle,children:"Create a deck"}),t.jsx("input",{placeholder:"Deck title (e.g. Vishnu Sahasranamam)",value:g.title,onChange:Y=>h({...g,title:Y.target.value}),style:Ge.input}),t.jsxs("div",{style:Ge.typeRow,children:[t.jsxs("button",{onClick:()=>h({...g,type:"text"}),style:{...Ge.typeBtn,...g.type==="text"?Ge.typeOn:{}},children:[t.jsx(zg,{size:15})," Text"]}),t.jsxs("button",{onClick:()=>h({...g,type:"images"}),style:{...Ge.typeBtn,...g.type==="images"?Ge.typeOn:{}},children:[t.jsx(n0,{size:15})," Images"]})]}),g.type==="text"?t.jsx("textarea",{placeholder:"Paste or write the text (verses, chant, reflection)…",value:g.content,onChange:Y=>h({...g,content:Y.target.value}),style:Ge.textarea}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:Ge.imgGrid,children:[g.images.map((Y,ce)=>t.jsxs("div",{style:Ge.imgThumbWrap,children:[t.jsx("img",{src:Y,alt:"",style:Ge.imgThumb}),t.jsx("button",{onClick:()=>A(ce),style:Ge.imgDel,children:t.jsx(Be,{size:12})})]},ce)),t.jsxs("label",{style:Ge.imgAdd,children:[t.jsx(Sl,{size:20}),t.jsx("span",{style:{fontSize:11},children:"Add images"}),t.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:be,style:{display:"none"}})]})]}),t.jsx("div",{style:Ge.hint,children:"Images show as a swipeable carousel, in the order added."})]}),t.jsxs("div",{style:Ge.formActions,children:[t.jsxs("button",{onClick:()=>d(!1),style:Ge.cancelBtn,children:[t.jsx(Be,{size:14})," Cancel"]}),t.jsxs("button",{onClick:re,disabled:!K,style:{...Ge.saveBtn,...K?{}:Ge.saveDisabled},children:[t.jsx(Oe,{size:15})," Create deck"]})]})]}):x?t.jsxs("div",{style:Ge.contentWrap,children:[t.jsxs("div",{style:Ge.deckHead,children:[t.jsx("h2",{style:Ge.deckTitle,children:x.title}),t.jsx("button",{onClick:()=>ve(x.id),style:Ge.deckDel,title:"Delete deck",children:t.jsx(ci,{size:15})})]}),x.type==="images"?t.jsx(cp,{images:x.images}):t.jsx("div",{style:Ge.deckText,children:x.content})]}):t.jsxs("div",{style:Ge.contentWrap,children:[(v==null?void 0:v.youtube)&&t.jsx("div",{style:Ge.videoFrame,children:t.jsx("iframe",{src:`https://www.youtube.com/embed/${v.youtube}`,title:v.title,style:Ge.video,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},v.youtube)}),v!=null&&v.carousel?t.jsx(cp,{base:v.imageBase,count:v.carousel}):t.jsx("div",{className:"spiritual-content",dangerouslySetInnerHTML:{__html:(v==null?void 0:v.html)||""}})]})]})]})}const wv=`
.spiritual-content { font-family: 'Inter', system-ui, sans-serif; color: var(--text); line-height: 1.9; font-size: 16px; text-align: center; }
.spiritual-content h1 { font-family: 'Fraunces', Georgia, serif; font-size: 24px; color: #8268B0; margin: 8px 0 18px; letter-spacing: -0.01em; }
.spiritual-content h2 { font-family: 'Fraunces', Georgia, serif; font-size: 18px; color: #7A5EA8; margin: 20px 0 8px; }
.spiritual-content h3 { font-size: 15px; color: var(--text-3); text-transform: uppercase; letter-spacing: 0.06em; margin: 18px 0 6px; }
.spiritual-content b { color: #8268B0; }
.spiritual-content div { text-align: center; }
`,Ge={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:240,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.15)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.35)",zIndex:20},sideHead:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 14px 12px"},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700},sideScroll:{flex:1,overflowY:"auto",padding:"0 8px 16px"},sideItem:{display:"block",width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text-2)",textAlign:"left",marginBottom:2},sideItemOn:{background:"rgba(130,104,176,0.12)",color:"#8268B0",fontWeight:700},sideRow:{display:"flex",alignItems:"center",gap:2},editControls:{display:"flex",alignItems:"center",gap:1,flexShrink:0},miniBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:5},defStar:{color:"#C9A227",fontWeight:700},editHint:{fontSize:10.5,color:"var(--text-3)",padding:"0 14px 8px",lineHeight:1.4},newDeckBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",padding:"9px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,color:"var(--text-2)",marginTop:6},main:{flex:1,padding:"26px 22px",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:220},contentWrap:{background:"var(--surface)",borderRadius:14,padding:"26px 28px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",maxWidth:760,margin:"0 auto"},videoFrame:{position:"relative",width:"100%",maxWidth:600,margin:"0 auto 22px",aspectRatio:"16 / 9",borderRadius:12,overflow:"hidden",background:"#000"},video:{position:"absolute",inset:0,width:"100%",height:"100%",border:"none"},carouselFrame:{background:"var(--surface-2)",borderRadius:12,padding:8,border:"1px solid var(--border)"},carouselImg:{width:"100%",borderRadius:8,display:"block"},carouselNav:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:14},carouselBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},carouselCount:{fontSize:13,fontWeight:700,color:"#8268B0",fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"none",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,color:"var(--text-2)"},deckHead:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,marginBottom:16,borderBottom:"1px solid var(--border)",paddingBottom:12},deckTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",margin:0,color:"#8268B0"},deckDel:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",cursor:"pointer",display:"grid",placeItems:"center",padding:7,borderRadius:8,flexShrink:0},deckText:{fontSize:16,lineHeight:1.9,whiteSpace:"pre-wrap",color:"var(--text)",textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},formTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},typeRow:{display:"flex",gap:8,marginTop:12},typeBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},typeOn:{background:"#8268B0",color:"#fff",borderColor:"#8268B0"},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:200,resize:"vertical",lineHeight:1.7,marginTop:12},imgGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(90px, 1fr))",gap:8,marginTop:12},imgThumbWrap:{position:"relative",aspectRatio:"1",borderRadius:8,overflow:"hidden",border:"1px solid var(--border)"},imgThumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},imgDel:{position:"absolute",top:3,right:3,border:"none",background:"rgba(0,0,0,0.6)",color:"#fff",borderRadius:"50%",width:18,height:18,cursor:"pointer",display:"grid",placeItems:"center",padding:0},imgAdd:{aspectRatio:"1",border:"1px dashed var(--border)",borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4,cursor:"pointer",color:"var(--text-3)"},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:8},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"#8268B0",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"}},gn={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},gp=Object.keys(gn),Sv=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Cv=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],zv=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},Tv=(e,r)=>`${Cv[r-1]} ${e}`,Iv=(e,r)=>{const n=new Date(e,r,0).getDate();return Array.from({length:n},(o,i)=>`${e}-${String(r).padStart(2,"0")}-${String(i+1).padStart(2,"0")}`)},Bv=(e,r)=>{const n=new Date(e,r-1,1).getDay();return n===0?6:n-1};function Rv(){const e=zv(),[r,n]=c.useState(new Date().getFullYear()),[o,i]=c.useState(new Date().getMonth()+1),[s,a]=c.useState([]),[l,d]=c.useState([]),[g,h]=c.useState({}),[y,f]=c.useState(null),[E,R]=c.useState(!1),[T,z]=c.useState(!1),[m,b]=c.useState({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:e}),[u,k]=c.useState(null),j=c.useCallback(async()=>{const[W,_,P]=await Promise.all([F.getTopics(),F.getDueToday(),F.getCalendar(r,o)]);a(W),d(_),h(P)},[r,o]);c.useEffect(()=>{j()},[j]);const C=async W=>{await F.toggleReviewDone(W),j()},B=async()=>{const W=m.intervals.split(",").map(_=>parseInt(_.trim(),10)).filter(_=>!isNaN(_));!m.topic.trim()||W.length===0||(await F.createTopic({pillar:m.pillar,topic:m.topic.trim(),intervals:W,learned_date:m.learned_date||e}),b({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:e}),z(!1),j())},{deleteItem:x,toasts:v,handleUndo:$,handleDismiss:Q}=yr(F.deleteTopic,F.restoreTopic,j),ne=(W,_)=>x(W,_),be=W=>k({id:W.id,topic:W.topic,pillar:W.pillar,intervals:(W.intervals||[]).join(", "),learned_date:W.learned_date}),A=async()=>{if(!u)return;const W=u.intervals.split(",").map(_=>parseInt(_.trim(),10)).filter(_=>!isNaN(_)&&_>=0);!u.topic.trim()||W.length===0||(await F.updateTopic(u.id,{topic:u.topic.trim(),pillar:u.pillar,learned_date:u.learned_date,intervals:W}),k(null),j())},K=()=>{o===1?(n(W=>W-1),i(12)):i(W=>W-1),f(null)},re=()=>{o===12?(n(W=>W+1),i(1)):i(W=>W+1),f(null)},ve=s.filter(W=>!W.cemented),Z=s.filter(W=>W.cemented),Y=Iv(r,o),ce=Bv(r,o),J=c.useMemo(()=>{const W={};return s.forEach(_=>_.reviews.forEach(P=>{P.done||(W[P.due_date]=W[P.due_date]||[]).push({topic:_.topic,pillar:_.pillar,stage:P.stage})})),W},[s]),I=y?s.flatMap(W=>W.reviews.filter(_=>_.due_date===y).map(_=>({..._,topic:W.topic,pillar:W.pillar,total:W.reviews.length}))):[];return t.jsxs("div",{style:Ae.page,children:[t.jsxs("div",{style:Ae.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:Ae.eyebrow,children:"Anvil · Revision"}),t.jsx("h1",{style:Ae.h1,children:"Spaced Repetition"})]}),t.jsxs("button",{onClick:()=>z(!0),style:Ae.addBtn,children:[t.jsx(at,{size:15})," Add topic"]})]}),T&&t.jsxs("div",{style:Ae.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"What did you learn?",value:m.topic,onChange:W=>b(_=>({..._,topic:W.target.value})),onKeyDown:W=>W.key==="Enter"&&B(),style:Ae.input}),t.jsxs("div",{style:Ae.addRow,children:[t.jsx("select",{value:m.pillar,onChange:W=>b(_=>({..._,pillar:W.target.value})),style:Ae.select,children:gp.map(W=>t.jsx("option",{children:W},W))}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[t.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),t.jsx("input",{type:"date",value:m.learned_date,onChange:W=>b(_=>({..._,learned_date:W.target.value})),style:{...Ae.select,fontSize:13}})]}),t.jsx("div",{style:{flex:1,minWidth:0},children:t.jsx("input",{value:m.intervals,onChange:W=>b(_=>({..._,intervals:W.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:Ae.input})})]}),t.jsxs("div",{style:Ae.addRow,children:[t.jsxs("button",{onClick:B,style:Ae.saveBtn,children:[t.jsx(Oe,{size:14})," Save"]}),t.jsxs("button",{onClick:()=>z(!1),style:Ae.cancelBtn,children:[t.jsx(Be,{size:14})," Cancel"]})]})]}),l.length>0&&t.jsxs("div",{style:Ae.section,children:[t.jsxs("div",{style:Ae.sectionTitle,children:[t.jsx(kh,{size:15,color:"#C2536B"}),"Due Today",t.jsx("span",{style:Ae.badge,children:l.length})]}),l.map(W=>{var P,de;const _=((P=gn[W.pillar])==null?void 0:P.dot)||"#9A968C";return t.jsxs("div",{style:{...Ae.reviewCard,borderLeft:`3px solid ${_}`,...W.is_missed?{opacity:.85}:{}},children:[t.jsx("button",{onClick:()=>C(W.review_id),style:{...Ae.checkbox,...W.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:W.done&&t.jsx(Oe,{size:12,color:"#fff",strokeWidth:3})}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:Ae.reviewTopic,children:W.topic}),t.jsxs("div",{style:Ae.reviewMeta,children:[t.jsxs("span",{style:{...Ae.stageTag,background:((de=gn[W.pillar])==null?void 0:de.soft)||"rgba(0,0,0,0.05)",color:_},children:["Review ",W.stage,"/",W.total_stages]}),W.is_missed&&t.jsxs("span",{style:Ae.missedTag,children:["missed · ",W.due_date]})]})]})]},W.review_id)})]}),t.jsxs("div",{style:Ae.section,children:[t.jsxs("div",{style:Ae.sectionTitle,children:["Active Topics ",t.jsx("span",{style:Ae.badge,children:ve.length})]}),ve.length===0&&t.jsx("div",{style:Ae.empty,children:"No active topics. Add something you learned today."}),ve.map(W=>{var ge,De;const _=((ge=gn[W.pillar])==null?void 0:ge.dot)||"#9A968C",P=((De=gn[W.pillar])==null?void 0:De.soft)||"rgba(0,0,0,0.05)",de=W.reviews.filter(q=>q.done).length;return(u==null?void 0:u.id)===W.id?t.jsxs("div",{style:Ae.addBox,children:[t.jsx("input",{autoFocus:!0,value:u.topic,onChange:q=>k(oe=>({...oe,topic:q.target.value})),onKeyDown:q=>q.key==="Enter"&&A(),placeholder:"Topic",style:Ae.input}),t.jsxs("div",{style:Ae.addRow,children:[t.jsx("select",{value:u.pillar,onChange:q=>k(oe=>({...oe,pillar:q.target.value})),style:Ae.select,children:gp.map(q=>t.jsx("option",{children:q},q))}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[t.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),t.jsx("input",{type:"date",value:u.learned_date,onChange:q=>k(oe=>({...oe,learned_date:q.target.value})),style:{...Ae.select,fontSize:13}})]}),t.jsx("div",{style:{flex:1,minWidth:0},children:t.jsx("input",{value:u.intervals,onChange:q=>k(oe=>({...oe,intervals:q.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:Ae.input})})]}),t.jsx("div",{style:Ae.editHint,children:"Changing the date or intervals reschedules the reviews (completed steps are kept where they still apply)."}),t.jsxs("div",{style:Ae.addRow,children:[t.jsxs("button",{onClick:A,style:Ae.saveBtn,children:[t.jsx(Oe,{size:14})," Save plan"]}),t.jsxs("button",{onClick:()=>k(null),style:Ae.cancelBtn,children:[t.jsx(Be,{size:14})," Cancel"]})]})]},W.id):t.jsxs("div",{style:Ae.topicCard,children:[t.jsxs("div",{style:Ae.topicHead,children:[t.jsx("span",{style:{...Ae.dot,background:_}}),t.jsx("span",{style:Ae.topicName,children:W.topic}),t.jsx("span",{style:Ae.topicPillar,children:W.pillar}),t.jsxs("span",{style:Ae.topicProgress,children:[de,"/",W.reviews.length," done"]}),t.jsx("button",{onClick:()=>be(W),style:Ae.ghostBtn,title:"Edit plan",children:t.jsx(St,{size:12})}),t.jsx("button",{onClick:()=>ne(W.id,W.topic),style:Ae.ghostBtn,title:"Delete",children:t.jsx(Be,{size:13})})]}),t.jsxs("div",{style:Ae.reviewDots,children:[W.reviews.map(q=>{q.due_date<e;const oe=q.due_date===e;return t.jsx("button",{onClick:()=>C(q.id),title:`Review ${q.stage} · ${q.due_date}${q.done?" · Done":""}`,style:{...Ae.reviewDot,background:q.done?_:oe?P:"var(--hover)",border:`2px solid ${q.done||oe?_:"var(--border)"}`,color:q.done?"#fff":_},children:q.stage},q.id)}),t.jsxs("span",{style:Ae.learnedDate,children:["Learned ",W.learned_date]})]})]},W.id)})]}),Z.length>0&&t.jsxs("div",{style:Ae.section,children:[t.jsxs("button",{onClick:()=>R(W=>!W),style:Ae.cementedToggle,children:[E?t.jsx(ro,{size:15}):t.jsx(ln,{size:15}),t.jsx(qr,{size:14,color:"#C9A227"}),"Cemented",t.jsx("span",{style:{...Ae.badge,background:"rgba(201,162,39,0.12)",color:"#8A6E1A"},children:Z.length})]}),E&&Z.map(W=>{var P;const _=((P=gn[W.pillar])==null?void 0:P.dot)||"#9A968C";return t.jsx("div",{style:{...Ae.topicCard,opacity:.75},children:t.jsxs("div",{style:Ae.topicHead,children:[t.jsx("span",{style:{...Ae.dot,background:_}}),t.jsx("span",{style:Ae.topicName,children:W.topic}),t.jsx("span",{style:Ae.topicPillar,children:W.pillar}),t.jsx(qr,{size:13,color:"#C9A227",style:{marginLeft:"auto"}})]})},W.id)})]}),t.jsxs("div",{style:Ae.calCard,children:[t.jsxs("div",{style:Ae.calHead,children:[t.jsx("button",{onClick:K,style:Ae.calNav,children:"‹"}),t.jsxs("div",{style:Ae.calTitle,children:[Tv(r,o)," · Review Calendar"]}),t.jsx("button",{onClick:re,style:Ae.calNav,children:"›"})]}),t.jsx("div",{style:Ae.calDow,children:Sv.map(W=>t.jsx("div",{style:Ae.calDowCell,children:W},W))}),t.jsxs("div",{style:Ae.calGrid,children:[Array.from({length:ce}).map((W,_)=>t.jsx("div",{},`p${_}`)),Y.map((W,_)=>{const P=J[W]||[],de=W===e,ge=W===y,De=W<e,q=ge?"#fff":de?"var(--text)":De?"var(--text-2)":"var(--text-3)";return t.jsxs("button",{onClick:()=>f(ge?null:W),style:{...Ae.calDay,background:ge?"var(--accent-strong)":de?"var(--hover)":"var(--surface)",borderColor:de||ge?"var(--accent-strong)":"var(--border)"},children:[t.jsx("span",{style:{...Ae.calDayNum,color:q,fontWeight:de||ge?700:600},children:_+1}),P.slice(0,2).map((oe,G)=>{var le;return t.jsxs("span",{title:oe.topic,style:{...Ae.calItem,color:ge?"#fff":((le=gn[oe.pillar])==null?void 0:le.dot)||"var(--text-2)"},children:[G+1,". ",oe.topic]},G)}),P.length>2&&t.jsxs("span",{style:{...Ae.calMore,color:ge?"#fff":"var(--text-3)"},children:["+",P.length-2," more"]})]},W)})]}),y&&t.jsxs("div",{style:Ae.dayDetail,children:[t.jsxs("div",{style:Ae.dayDetailTitle,children:["Reviews for ",y]}),I.length===0?t.jsx("div",{style:Ae.empty,children:"No reviews scheduled for this day."}):I.map((W,_)=>{var de,ge;const P=((de=gn[W.pillar])==null?void 0:de.dot)||"#9A968C";return t.jsxs("div",{style:{...Ae.reviewCard,borderLeft:`3px solid ${P}`},children:[t.jsx("button",{onClick:()=>C(W.id),style:{...Ae.checkbox,...W.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:W.done&&t.jsx(Oe,{size:12,color:"#fff",strokeWidth:3})}),t.jsxs("div",{children:[t.jsxs("div",{style:Ae.reviewTopic,children:[_+1,". ",W.topic]}),t.jsxs("span",{style:{...Ae.stageTag,background:((ge=gn[W.pillar])==null?void 0:ge.soft)||"rgba(0,0,0,0.05)",color:P},children:["Review ",W.stage,"/",W.total]})]})]},W.id)})]})]}),t.jsx(vr,{toasts:v,onUndo:$,onDismiss:Q})]})}const Ae={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},addBox:{background:"var(--surface)",borderRadius:12,padding:16,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},addRow:{display:"flex",gap:8,alignItems:"center"},editHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",minWidth:0},select:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 10px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},section:{marginBottom:20},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},reviewCard:{display:"flex",alignItems:"center",gap:12,background:"var(--surface)",borderRadius:10,padding:"12px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},checkbox:{width:22,height:22,borderRadius:6,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,padding:0},reviewTopic:{fontSize:13.5,fontWeight:600,marginBottom:4},reviewMeta:{display:"flex",alignItems:"center",gap:8},stageTag:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10},missedTag:{fontSize:11,color:"#C2536B",fontWeight:600},topicCard:{background:"var(--surface)",borderRadius:12,padding:"13px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},topicHead:{display:"flex",alignItems:"center",gap:8,marginBottom:10},dot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},topicName:{fontSize:14,fontWeight:600,flex:1},topicPillar:{fontSize:11,color:"var(--text-3)",fontWeight:500},topicProgress:{fontSize:11,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:10},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},reviewDots:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},reviewDot:{width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",fontSize:11,fontWeight:700,padding:0},learnedDate:{fontSize:11,color:"var(--text-3)",marginLeft:"auto"},cementedToggle:{display:"flex",alignItems:"center",gap:8,border:"none",background:"none",cursor:"pointer",fontSize:13,fontWeight:700,color:"var(--text-2)",padding:"4px 0",fontFamily:"inherit",marginBottom:8},empty:{fontSize:13,color:"var(--text-3)",padding:"16px 0",textAlign:"center"},calCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{border:"none",background:"none",fontSize:20,cursor:"pointer",color:"var(--text-2)",padding:"0 6px",lineHeight:1},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4},calDay:{minHeight:62,border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,cursor:"pointer",fontFamily:"inherit",display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"flex-start",gap:1,position:"relative",padding:"3px 4px",overflow:"hidden",textAlign:"left"},calDayNum:{fontSize:11,lineHeight:1.1,marginBottom:1},calItem:{fontSize:8.5,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",lineHeight:1.3,textAlign:"left"},calMore:{fontSize:8,fontWeight:700,opacity:.85,lineHeight:1.2},dayDetail:{marginTop:16,paddingTop:16,borderTop:"1px solid var(--border)"},dayDetailTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10}},up=[{id:1,title:"Regular Habits",cards:[{id:1,text:"1. I always do everything I need to do, when I need to do it. "},{id:2,text:"2. I never argue or let my emotions work against me. "},{id:3,text:"3. I have a good memory. I easily and automatically remember any name or anything that is important to me. "},{id:4,text:"4. I eat only what I should. "},{id:5,text:"5. I am a good listener. I hear everything that is said. I am attentive, interested, and aware of everything that is going on around me. "},{id:6,text:"6. I have the courage to state my opinions. I take responsibility for myself and everything I say and do."},{id:7,text:"7. I never spend more than I earn. I am financially responsible, both for my present and for my future."},{id:8,text:"8. I set goals and I follow them. I set my sights, take the appropriate action, and achieve my goals."},{id:9,text:"9. I spend time with my family and my loved ones. I enjoy sharing their lives with mine and my life with theirs."}]},{id:2,title:"Motivational",cards:[{id:1,text:"1. I can do anything I believe I can do. I’ve got it and every day I get more of it. I have talent, skills, and ability"},{id:2,text:"2. I set goals and I reach them. I know what I want out of life. I go after it and I get it. "},{id:3,text:"3. People like me, and I feel good about myself. I have a sense of pride in whoa am and I believe in myself. Nothing seems to stop me. I have a lot of determination. "},{id:4,text:"4. I turn problems into advantages. I find possibilities in things that other people never give a chance."},{id:5,text:"5. I have a lot of energy––I am very alive. I enjoy life and I can tell it and so can others"},{id:6,text:"6. I keep myself up, looking ahead, and liking it. I know that I can accomplish anything I choose, and I refuse to let anything negative hold me back or stand in my way. I am not afraid of anything or anyone. I have strength, power, conviction, and confidence. "},{id:7,text:"7. I like challenges and I meet them head on, face to face––today especially. I am on top of the world and I’m going for it. "},{id:8,text:"8. I have a clear picture in my mind of what I want. I can see it in front of me. "},{id:9,text:"9. I know what I want and I know how to get it. I know that it’s all up to me and I know I can do it. Roadblocks don’t bother me. They just mean that I am alive and running, and I’m not going to stand still for anything. "},{id:10,text:"10. I trust myself I’ve got what it takes––plenty of it––and I know how to use it. "},{id:11,text:"11. Today, more than ever. Today I am unstoppable. I’ve got myself together and I’m getting more together every day. And today––look out world, here I come. "},{id:12,text:"12. Limitations? I don’t even recognize them as limitations. There is no challenge I can’t conquer; there is no wall I can’t climb over. "},{id:13,text:"13. There is no problem I can’t defeat or turn around and make it work for me. I stand tall. I am honest and sincere. I like to deal with people and they like me. "},{id:14,text:"14. I think well; I think clearly. I am organized; I am in control of myself, and everything about me. I call my shots and no one has to call them for me. I never blame anyone else for the circumstances of my life. "},{id:15,text:"15. I accept my failings and move past them as easily as I accept the rewards for my victories. I never demand perfection of myself, but I expect the very best of what I have to give––and that’s what I get. I never give myself excuses. "},{id:16,text:"16. I get things done on time and in the right way. Today I have the inner strength to do more than ever. I am an exceptional human being. "},{id:17,text:"17. My goals and my incredible belief in myself turn my goals into reality. I have the power to live my dreams."},{id:18,text:"18.  I believe in them like I believe in myself. And that belief is so strong that there is nothing that diminishes my undefeatable spirit. "}]},{id:3,title:"Organized planning",cards:[{id:1,text:"1. I am organized and in control of my life. I am in control of myself, my thoughts, my time, my actions, and my future. "},{id:2,text:"2. I know what to do and when to do it, and I do everything I need to do, when I need to do it. "},{id:3,text:"3. I program my mind to make the maximum use of my time. I am in control of my time and how to use it. I like being organized, efficient, and on top of things."},{id:4,text:"4. Controlling my time keeps me that way. "},{id:5,text:"5. I never waste time––I always “plan” time. And because I plan my time, I always have time to do the things I choose to do. "},{id:6,text:"6. Each day I become more organized and in control of all areas of my life––at home, at work, in my mind and in my thoughts, in everything that I do. "},{id:7,text:"7. I am very well organized. Each night I make a list of things I need to do the next day. I set my priorities and I follow them. "},{id:8,text:"8. I am always on time. I am always right where I need to be, exactly when I need to be there. "},{id:9,text:"9. Being on time is easy for me and the more I control my time and the more organized I become, the easier it is. "},{id:10,text:"10. I am in control of my feelings, my emotions, my attitudes, and my needs. I control them; they do not control me. "},{id:11,text:"11. I have the winning vote in the outcome of my own actions. And I choose to live my life by choice, not chance. Therefore, I take the time to take control."},{id:12,text:"12. I have an organized and orderly mind. Because I think in an organized way, I conduct my life in an organized manner. "},{id:13,text:"13. I think in the most positive and productive way at all times and in all things. The way I think is the way I live––and I think “right.” "},{id:14,text:"14. I am the director of my destiny. I know where I am going and I know why I am going there. My earthly life is in my hands and in my control. "},{id:15,text:"15. I control my goals and the achievement of my goals. I organize my goals by writing each of them down, along with the steps I need to reach them. One of the reasons for my success is that my goals are clearly defined and organized."},{id:16,text:"16. I am in complete control of what I think and how I think. Therefore, I choose to think only those thoughts which help me and which are of genuine benefit to me."}]},{id:4,title:"Solving Problems",cards:[{id:1,text:"1. I’m good at solving problems. I like challenges and I meet them head on. "},{id:2,text:"2. Problems are my teachers. They help me to learn and grow. Without them, I would be going nowhere. With them, I am moving forward in the direction of my own goals. "},{id:3,text:"3. There is no problem which I cannot conquer. I am strong in mind, body, and spirit. My will, my strength, and my determination are always greater than any problem I face."},{id:4,text:"4. When I meet a new problem, I do not see the problem as my enemy. I know that finding the solution to the problem will move me forward in my own personal growth."},{id:5,text:"5. Because I know that problems are a key ingredient in my spiritual and mental education and preparation, I recognize that all problems are important to me. "},{id:6,text:"6. I do not fear problems, I solve them. I do not ignore problems, I confront them. I do not avoid problems, I conquer them. "},{id:7,text:"7. I know that every problem holds within itself the keys to its own solution. Therefore, the better I understand the problem, the clearer I am able to see its solution. "},{id:8,text:"8. Having problems is not a problem for me. I am confident, self-assured, positive, and determined. I always know that I am going to overcome any problem I encounter––and I always do. "},{id:9,text:"9. I am good at breaking large obstacles down into smaller pieces that are easier to handle. And I never make any problem appear to be larger than it actually is. "},{id:10,text:"10. I never worry. I turn “worry time” into positive, constructive, “solution time.” I keep my mind alert and open to all solutions—and solutions come quickly and easily to me. "},{id:11,text:"11. I have learned to recognize that many problems carry with them benefits and potential opportunities which would not have presented themselves had the problem not occurred in the first place. "},{id:12,text:"12. I do not seek to live a life which is free from all problems. Instead, I choose to live a life of finding solutions and enjoying the benefits which those solutions create."},{id:13,text:"13. Challenge, conquer, solution, and win are words which I live by daily. Challenges are opportunities. Conquering them is the inevitable outcome. "},{id:14,text:"14. “Solutions” are the stepping stones to my success, and “Winning” is my way of life."}]},{id:5,title:"Self Esteem",cards:[{id:1,text:"1. I really am very special. I like who I am and I feel good about myself. "},{id:2,text:"2. Although I always work to improve myself and I get better every day, I like who I am today. And tomorrow, when I’m even better, I’ll like myself then, too. "},{id:3,text:"3. It’s true that there really is no one else like me in the entire world. There never was another me before, and there will never be another me again. "},{id:4,text:"4. I am unique––from the top of my head to the bottom of my feet. In some ways I may look and act and sound like some others––but I am not them. I am me."},{id:5,text:"5. I wanted to be somebody––and now I know I am I would rather be me than anyone else in the world. "},{id:6,text:"6. I like how I feel and I like how I think and I like how I do things. I approve of me and I approve of who I am."},{id:7,text:"7. I have many beautiful qualities about me. I have talents and skills and abilities. I even have talents that I don’t even know about yet. And I am discovering new talents inside myself all the time. "},{id:8,text:"8. I am positive. I am confident. I radiate good things. If you look closely, you can even see a glow around me."},{id:9,text:"9. I am full of life. I like life and I’m glad to be alive. I am a very special person, living at a very special time. "},{id:10,text:"10. I am intelligent. My mind is quick and alert and clever and fun. I think good thoughts, and my mind makes things work right for me. "},{id:11,text:"11. I have a lot of energy and enthusiasm and vitality. I am exciting and I really enjoy being me. "},{id:12,text:"12. I like to be around other people and other people like to be around me. People like to hear what I have to say and know what I have to think. "},{id:13,text:"13. I smile a lot. I am happy on the inside and I am happy on the outside. "},{id:14,text:"14. I am interested in many things. I appreciate all the blessings I have, and the things that I learn, and all the things I will learn today and tomorrow and forever––just as long as I am. "},{id:15,text:"15. I am warm, sincere, honest, and genuine. I am all of these things and more. And all of these things are me. I like who I am, and I’m glad to be me."}]},{id:6,title:"Self-Responsibility",cards:[{id:1,text:"1. I take full responsibility for everything about me––even the thoughts that I think. I am in control of the vast resources of my own mind."},{id:2,text:"2. I alone am responsible for what I do and what I tell myself about me. No one can share this responsibility with me. "},{id:3,text:"3. I also allow others to accept their responsibilities far themselves and I do not try to accept their responsibilities for them. "},{id:4,text:"4. I enjoy being responsible. It puts me in charge of being me––and that’s a challenge I enjoy. "},{id:5,text:"5. I allow no one else, at any time, to assume control or responsibility over my life or over anything that I do. My responsibility to others is an extension of my own responsibility to myself. "},{id:6,text:"6. I choose to leave nothing about me up to chance. When it comes to me––and anything in my life––I choose to CHOOSE. "},{id:7,text:"7. My choices are mine alone to make for myself. I do not, at any time, allow anyone else to make my choices for me. And I accept full responsibility for every choice and decision I make. "},{id:8,text:"8. I always meet all of the obligations which I accept. And I accept no obligations which I will not meet. "},{id:9,text:"9. I am trustworthy. I can be counted on. I have accepted winning responsibility for myself––and I always live up to the responsibilities I accept. "},{id:10,text:"10. There is no they on whom I lay the blame, or with whom I share my own personal responsibilities. I have learned the great secret of mastering my own destiny. I have learned that “they” is “me.” "},{id:11,text:"11. I have no need to make excuses and no one needs to carry my responsibility for me. I gladly carry my own weight––and I carry it well. "},{id:12,text:"12. Each day I acknowledge and accept the responsibility––not only for my own actions––but also for my emotions, my thoughts, and my attitude. "},{id:13,text:"13. I accept the responsibility for living my life in a way which creates my strengths, my happiness, my positive, healthy beliefs, and for my past, my present, and my future."}]},{id:7,title:"Freedom from worry",cards:[{id:1,text:"1. I never worry. Instead of worrying, I find solutions and I act on them. "},{id:2,text:"2. My mind is constantly in tune with the positive. It is bright, cheerful, enthusiastic, and full of good, positive thoughts and ideas. "},{id:3,text:"3. I am able to relax easily and comfortably in my body and in my mind. I am calm, confident, and self-assured. "},{id:4,text:"4. My mind is orderly and well-organized. I consciously choose what I think and I always choose those thoughts which are the most positive and beneficial for me. "},{id:5,text:"5. All of my thoughts create healthiness within me. My mind dwells only on those thoughts which create more harmony, balance, and well-being within me and in the world around me. "},{id:6,text:"6. I automatically, and always, think in a decisive and determined way. "},{id:7,text:"7. I am full of resolution and the absolute assurance of the best possible outcome in everything that I do. "},{id:8,text:"8. I choose to look at the world around me in the bright, healthy light of optimism and self-assurance. "},{id:9,text:"9. I do only those things which are best for me. I create the best within myself, I attract the best in others, and I find the best in the world around me. "},{id:10,text:"10. I willingly, and without fail, take care of the duties and obligations which I have accepted for myself."},{id:11,text:"11. I commit only to those responsibilities which I know I can fulfill. "},{id:12,text:"12. I focus the attention of my mind only on those things that I can do something about. If I cannot affect it or direct it––I accept it. "},{id:13,text:"13. I keep my mind too busy thinking good, healthy, positive, constructive, and productive thoughts to ever have any time for worry. "},{id:14,text:"14. I control the thoughts I choose. No thought, at any time, can dwell in my mind without my approval or permission. I never worry."}]},{id:8,title:"Eating Habits",cards:[{id:1,text:"1. I am in control of myself in every way––at all times and in all situations. "},{id:2,text:"2. Each time I sit down to eat I reaffirm my determination to achieve my goal. By eating right, and never giving in, I am reaching the weight I want. "},{id:3,text:"3. Whether eating in or eating out, I really enjoy eating less. "},{id:4,text:"4. I never feel the need to finish the food in front of me. I eat only what I should––and never one bite more. "},{id:5,text:"5. One way to weight-loss that’s easy and works, is less food on my plate, and less on my fork. "},{id:6,text:'6. By ordering less when I eat out, and by serving myself smaller portions at home, I keep myself aware of the importance of staying with my goal––each and every day. “Less on my plate means less on my waist."'},{id:7,text:"7. When I sit down to eat, at no time do I allow anyone else to influence, tempt, or discourage me in any negative way."},{id:8,text:"8. What I eat, and the goals I reach, are up to me. And I give no one the right to hinder or control my success."},{id:9,text:"9. Although others may benefit from my success, I. am achieving my weight-loss goals for my own personal reasons––for myself, my life, my future, and my own personal well-being."},{id:10,text:"10. I am never, at any time, tempted to take one bite more than I should. I am strong, I am capable of reaching my goal, and I am doing it."},{id:11,text:"11. Being in situations which put a lot of food in front of me is not a problem to me now. I simply say “No” to the food and “Yes” to my success."},{id:12,text:"12. I enjoy sitting down to eat. Each time I do I conquer my past, and I create a trimmer, happier, more self-confident future in front of me. "},{id:13,text:"13. When I sit down to eat, I do not need someone else to remind me of my goal, or to keep me from eating something I should not. I take full responsibility for myself, and no one else has to do it for me. "},{id:14,text:"14. Controlling my weight, and my appetite, is easy for me now. I enjoy smaller portions, smaller bites, and a slower, healthier, more relaxed way of eating. "},{id:15,text:"15. I have set my goal and I am staying with it. I have turned mealtime into “achievement time.”"}]}],pp=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#3A7CA5","#4C9A6B"],sd=e=>pp[e%pp.length],Ev=e=>e+"1A",Li="affirmation_favs",Av="anvil_affirmation_favs",bp=()=>{try{return JSON.parse(localStorage.getItem(Li)||localStorage.getItem(Av)||"[]")}catch{return[]}},na="__new__";function Fv(){var be;const[e,r]=c.useState(0),[n,o]=c.useState(0),[i,s]=c.useState(()=>new Set(bp())),[a,l]=c.useState([]),[d,g]=c.useState(!1),[h,y]=c.useState({text:"",category:((be=up[0])==null?void 0:be.title)||"",newCat:""}),f=c.useRef(!1),E=c.useCallback(()=>{F.getAffirmations().then(A=>l(Array.isArray(A)?A:[])).catch(()=>{})},[]);c.useEffect(()=>{E()},[E]);const R=c.useMemo(()=>{const A=up.map(K=>({title:K.title,cards:[...K.cards]}));return a.forEach(K=>{const re={id:`u${K.id}`,text:K.text,user:!0,dbId:K.id},ve=A.find(Z=>Z.title.toLowerCase()===(K.category||"").toLowerCase());ve?ve.cards.push(re):A.push({title:K.category||"My affirmations",cards:[re]})}),A},[a]);c.useEffect(()=>{let A=!1;return F.getSetting(Li).then(K=>{if(!A){if(Array.isArray(K==null?void 0:K.value))s(new Set(K.value));else{const re=bp();re.length&&F.setSetting(Li,re).catch(()=>{}),s(new Set(re))}f.current=!0}}).catch(()=>{f.current=!0}),()=>{A=!0}},[]),c.useEffect(()=>{localStorage.setItem(Li,JSON.stringify([...i])),f.current&&F.setSetting(Li,[...i]).catch(()=>{})},[i]);const T=(A,K)=>`${A}#${K.id}`,z=e==="FAV"?"FAV":Math.min(e,R.length-1),m=z==="FAV"?R.flatMap((A,K)=>A.cards.filter(re=>i.has(T(A.title,re))).map(re=>({...re,color:sd(K),title:A.title}))):R[z].cards.map(A=>({...A,color:sd(z),title:R[z].title})),b=m.length,u=Math.min(n,Math.max(0,b-1)),k=m[u],j=A=>{r(A),o(0)},C=c.useCallback(()=>o(A=>Math.max(0,A-1)),[]),B=c.useCallback(()=>o(A=>Math.min(b-1,A+1)),[b]);c.useEffect(()=>{const A=K=>{K.key==="ArrowLeft"&&C(),K.key==="ArrowRight"&&B()};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[C,B]);const x=A=>s(K=>{const re=new Set(K);return re.has(A)?re.delete(A):re.add(A),re}),v=async()=>{const A=h.text.trim(),K=(h.category===na?h.newCat:h.category).trim();if(!A||!K)return;await F.createAffirmation({text:A,category:K}),g(!1),y({text:"",category:K,newCat:""}),E();const re=R.findIndex(ve=>ve.title.toLowerCase()===K.toLowerCase());j(re>=0?re:R.length)},$=async A=>{window.confirm("Delete this affirmation?")&&(await F.deleteAffirmation(A.dbId),s(K=>{const re=new Set(K);return re.delete(T(A.title,A)),re}),E())},Q=h.text.trim()&&(h.category===na?h.newCat.trim():h.category),ne=k?k.color:"#8268B0";return t.jsxs("div",{style:ct.page,children:[t.jsxs("div",{style:{...ct.head,display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12,flexWrap:"wrap"},children:[t.jsxs("div",{children:[t.jsx("div",{style:ct.eyebrow,children:"Anvil · Affirmations"}),t.jsx("h1",{style:ct.h1,children:"Affirmations"}),t.jsx("div",{style:ct.subhead,children:"One at a time — read it, mean it."})]}),!d&&t.jsxs("button",{onClick:()=>g(!0),style:ct.addBtn,children:[t.jsx(at,{size:15})," Add affirmation"]})]}),d&&t.jsxs("div",{style:ct.addCard,children:[t.jsx("div",{style:ct.addTitle,children:"New affirmation"}),t.jsx("textarea",{autoFocus:!0,value:h.text,onChange:A=>y(K=>({...K,text:A.target.value})),placeholder:"Write it in the present tense — e.g. 'I attract abundance effortlessly.'",style:ct.addArea}),t.jsxs("div",{style:ct.addRow,children:[t.jsx(nr,{value:h.category,options:[...R.map(A=>A.title),{value:na,label:"+ New category…"}],onChange:A=>y(K=>({...K,category:A})),style:{minWidth:180}}),h.category===na&&t.jsx("input",{value:h.newCat,onChange:A=>y(K=>({...K,newCat:A.target.value})),placeholder:"Category name",style:ct.addInput})]}),t.jsxs("div",{style:ct.addActions,children:[t.jsxs("button",{onClick:()=>g(!1),style:ct.cancelBtn,children:[t.jsx(Be,{size:14})," Cancel"]}),t.jsxs("button",{onClick:v,disabled:!Q,style:{...ct.saveBtn,...Q?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(Oe,{size:15})," Save"]})]})]}),t.jsxs("div",{style:ct.filterBar,children:[R.map((A,K)=>{const re=z===K,ve=sd(K);return t.jsxs("button",{onClick:()=>j(K),style:{...ct.chip,...re?{background:ve,color:"#fff",borderColor:ve}:{}},children:[t.jsx("span",{style:{...ct.catDot,background:re?"#fff":ve}})," ",A.title," ",t.jsx("span",{style:ct.chipCount,children:A.cards.length})]},A.title)}),t.jsxs("button",{onClick:()=>j("FAV"),style:{...ct.chip,...e==="FAV"?{background:"#C9A227",color:"#fff",borderColor:"#C9A227"}:{}},children:[t.jsx(Xi,{size:12,fill:e==="FAV"?"#fff":"none"})," Favorites ",t.jsx("span",{style:ct.chipCount,children:i.size})]})]}),b===0?t.jsxs("div",{style:ct.empty,children:[t.jsx(Xi,{size:22,color:"#C3BFB5"}),t.jsx("div",{children:"No favorites yet — tap the star on a card to save it here."})]}):t.jsxs("div",{style:ct.viewer,children:[t.jsxs("div",{style:{...ct.card,borderTop:`4px solid ${ne}`},children:[t.jsx("div",{style:{...ct.cardCat,color:ne,background:Ev(ne)},children:k.title}),t.jsx("button",{onClick:()=>x(T(k.title,k)),style:{...ct.favBtn,color:i.has(T(k.title,k))?"#C9A227":"#C3BFB5"},title:"Favorite",children:t.jsx(Xi,{size:20,fill:i.has(T(k.title,k))?"#C9A227":"none"})}),k.user&&t.jsx("button",{onClick:()=>$(k),style:ct.trashBtn,title:"Delete your affirmation",children:t.jsx(ci,{size:16})}),t.jsx(bc,{size:30,color:ne,style:{opacity:.25}}),t.jsx("p",{style:ct.cardText,children:k.text.trim()})]}),t.jsxs("div",{style:ct.navRow,children:[t.jsxs("button",{onClick:C,disabled:u===0,style:{...ct.navBtn,...u===0?ct.navBtnDisabled:{}},children:[t.jsx(In,{size:18})," Back"]}),t.jsxs("span",{style:{...ct.counter,color:ne},children:[u+1," ",t.jsxs("span",{style:ct.counterTotal,children:["/ ",b]})]}),t.jsxs("button",{onClick:B,disabled:u===b-1,style:{...ct.navBtn,...u===b-1?ct.navBtnDisabled:{}},children:["Next ",t.jsx(ln,{size:18})]})]}),t.jsx("div",{style:ct.dots,children:m.map((A,K)=>t.jsx("button",{onClick:()=>o(K),style:{...ct.dot,...K===u?{background:ne,transform:"scale(1.5)"}:{}},title:`${K+1}`},K))})]})]})}const ct={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},addCard:{background:"var(--surface)",borderRadius:14,padding:16,marginBottom:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},addTitle:{fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:10},addArea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--bg)",outline:"none",minHeight:64,resize:"vertical",lineHeight:1.5},addRow:{display:"flex",gap:8,marginTop:10,flexWrap:"wrap"},addInput:{flex:1,minWidth:140,border:"1px solid var(--border)",borderRadius:9,padding:"8px 10px",fontSize:13,fontFamily:"inherit",color:"var(--text)",background:"var(--bg)",outline:"none"},addActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},trashBtn:{position:"absolute",top:14,right:46,border:"none",background:"none",cursor:"pointer",padding:4,display:"grid",placeItems:"center",color:"#C3BFB5"},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:22},chip:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipCount:{fontSize:11,fontWeight:700,opacity:.7},catDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},empty:{display:"flex",flexDirection:"column",alignItems:"center",gap:10,fontSize:13.5,color:"var(--text-3)",padding:"56px 12px",textAlign:"center",background:"var(--surface)",borderRadius:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},viewer:{display:"flex",flexDirection:"column",alignItems:"center"},card:{position:"relative",background:"var(--surface)",borderRadius:16,padding:"40px 32px 44px",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",width:"100%",minHeight:240,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",boxSizing:"border-box"},cardCat:{position:"absolute",top:16,left:16,fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:12,textTransform:"uppercase",letterSpacing:"0.04em"},favBtn:{position:"absolute",top:14,right:14,border:"none",background:"none",cursor:"pointer",padding:4,display:"grid",placeItems:"center"},cardText:{fontSize:21,lineHeight:1.55,margin:"14px 0 0",fontWeight:500,color:"var(--text)",fontFamily:"'Fraunces',Georgia,serif",maxWidth:560},navRow:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",maxWidth:420,marginTop:22},navBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},counter:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},counterTotal:{fontSize:13,fontWeight:600,color:"var(--text-3)"},dots:{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center",marginTop:20,maxWidth:480},dot:{width:7,height:7,borderRadius:"50%",border:"none",background:"var(--border)",cursor:"pointer",padding:0,transition:"transform 0.12s"}},Dv=[{id:"day",label:"Day"},{id:"week",label:"Week"},{id:"month",label:"Month"},{id:"year",label:"Year"}],bn=e=>e>=60?`${Math.floor(e/60)}h ${e%60}m`:`${e}m`,Wv=e=>{const r=e<12?"am":"pm",n=e%12===0?12:e%12;return`${String(n).padStart(2,"0")} ${r}`};function Mv(e){const r=e<=60?10:e<=120?20:e<=300?60:120,n=Math.max(60,Math.ceil((e||1)/r)*r),o=[];for(let i=0;i<=n;i+=r)o.push(i);return{max:n,ticks:o}}const $h=e=>{const r=new Date(e);return r.setHours(0,0,0,0),r},Lv=e=>{const r=$h(e),n=(r.getDay()+6)%7;return r.setDate(r.getDate()-n),r},_v=e=>new Date(e.getFullYear(),e.getMonth(),1),$v=e=>new Date(e.getFullYear(),0,1);function Pv(e,r){if(e==="day"){const i=$h(r);return{start:i,end:new Date(+i+864e5),prev:new Date(+i-864e5),prev2:new Date(+i-2*864e5)}}if(e==="week"){const i=Lv(r);return{start:i,end:new Date(+i+7*864e5),prev:new Date(+i-7*864e5),prev2:new Date(+i-14*864e5)}}if(e==="month"){const i=_v(r),s=r.getFullYear(),a=r.getMonth();return{start:i,end:new Date(s,a+1,1),prev:new Date(s,a-1,1),prev2:new Date(s,a-2,1)}}const n=r.getFullYear();return{start:$v(r),end:new Date(n+1,0,1),prev:new Date(n-1,0,1),prev2:new Date(n-2,0,1)}}function Nv({sessions:e=[],onBack:r}){const[n,o]=c.useState("day"),i=new Date,{start:s,end:a,prev:l,prev2:d}=Pv(n,i),g=re=>new Date(re.started_at||re.created_at),h=e.filter(re=>re.completed),y=(re,ve,Z)=>{const Y=g(re);return Y>=ve&&Y<Z},f=(re,ve)=>h.filter(Z=>y(Z,re,ve)).reduce((Z,Y)=>Z+(Y.actual_min||0),0),E=h.filter(re=>y(re,s,a)),R=E.reduce((re,ve)=>re+(ve.actual_min||0),0),T=f(l,s),z=f(d,l),m=E.length,b=Array(24).fill(0);E.forEach(re=>{b[g(re).getHours()]+=re.actual_min||0});const u=Math.max(...b,0),k=Mv(u),j={};E.forEach(re=>{const ve=qt[re.tree]?re.tree:an;j[ve]=(j[ve]||0)+(re.actual_min||0)});const C=Object.entries(j).map(([re,ve])=>({name:qt[re].label,min:ve,color:qt[re].leaf})).sort((re,ve)=>ve.min-re.min),B=T>0?Math.round((R-T)/T*100):R>0?100:0,x=B>0?Zi:B<0?qn:fh,v=B>0?"#4C9A6B":B<0?"#C2536B":"#9A968C",$={day:"yesterday",week:"last week",month:"last month",year:"last year"}[n],Q={day:"2 days ago",week:"2 weeks ago",month:"2 months ago",year:"2 years ago"}[n],ne=54,be=22,A=2*Math.PI*ne;let K=0;return t.jsxs("div",{style:Pe.page,children:[t.jsxs("div",{style:Pe.topbar,children:[t.jsxs("button",{onClick:r,style:Pe.back,children:[t.jsx(dh,{size:18})," Grove"]}),t.jsx("h1",{style:Pe.h1,children:"Insights"}),t.jsx("div",{style:{width:76}})]}),t.jsx("div",{style:Pe.rangeBar,children:Dv.map(re=>t.jsx("button",{onClick:()=>o(re.id),style:{...Pe.rangeBtn,...n===re.id?Pe.rangeOn:{}},children:re.label},re.id))}),t.jsxs("div",{style:Pe.headline,children:[t.jsxs("div",{style:Pe.bigStat,children:[t.jsx("div",{style:Pe.bigVal,children:bn(R)}),t.jsxs("div",{style:Pe.bigLbl,children:["Focused this ",n]})]}),t.jsxs("div",{style:Pe.bigStat,children:[t.jsx("div",{style:Pe.bigVal,children:m}),t.jsx("div",{style:Pe.bigLbl,children:"Trees"})]})]}),t.jsxs("div",{style:Pe.card,children:[t.jsxs("div",{style:Pe.cardHead,children:[t.jsxs("div",{style:Pe.cardTitle,children:["Your forest this ",n]}),t.jsx("div",{style:Pe.cardHint,children:"Each tree is a completed session — bigger means longer focus"})]}),t.jsx(Gv,{sessions:E}),t.jsxs("div",{style:Pe.forestNumber,children:[m," ",m===1?"tree":"trees"," · ",bn(R)," focused"]})]}),t.jsx(ad,{title:"Focus distribution",hint:"Minutes focused at each time of day",children:u===0?t.jsx(mp,{}):t.jsx(Hv,{hours:b,axis:k})}),t.jsx(ad,{title:"Pillar distribution",hint:"How your focus splits across the five trees",children:C.length===0?t.jsx(mp,{}):t.jsxs("div",{style:Pe.donutWrap,children:[t.jsxs("svg",{viewBox:"0 0 140 140",width:"150",height:"150",style:{flexShrink:0},children:[C.map(re=>{const ve=re.min/(R||1)*A,Z=t.jsx("circle",{cx:"70",cy:"70",r:ne,fill:"none",stroke:re.color,strokeWidth:be,strokeDasharray:`${ve} ${A-ve}`,strokeDashoffset:-K,transform:"rotate(-90 70 70)"},re.name);return K+=ve,Z}),t.jsx("text",{x:"70",y:"66",textAnchor:"middle",style:Pe.donutCenterTop,children:bn(R)}),t.jsx("text",{x:"70",y:"82",textAnchor:"middle",style:Pe.donutCenterSub,children:"total"})]}),t.jsx("div",{style:Pe.legend,children:C.map(re=>t.jsxs("div",{style:Pe.legendRow,children:[t.jsx("span",{style:{...Pe.legendDot,background:re.color}}),t.jsx("span",{style:Pe.legendName,children:re.name}),t.jsxs("span",{style:Pe.legendVal,children:[bn(re.min)," · ",Math.round(re.min/(R||1)*100),"%"]})]},re.name))})]})}),t.jsxs(ad,{title:"Focus trend",hint:`This ${n} vs the previous two`,children:[t.jsxs("div",{style:Pe.trend3,children:[t.jsxs("div",{style:Pe.trendCol,children:[t.jsx("div",{style:Pe.trendVal,children:bn(R)}),t.jsxs("div",{style:Pe.trendLbl,children:["This ",n]})]}),t.jsxs("div",{style:Pe.trendCol,children:[t.jsx("div",{style:{...Pe.trendVal,color:"var(--text-2)"},children:bn(T)}),t.jsx("div",{style:Pe.trendLbl,children:$})]}),t.jsxs("div",{style:Pe.trendCol,children:[t.jsx("div",{style:{...Pe.trendVal,color:"var(--text-3)"},children:bn(z)}),t.jsx("div",{style:Pe.trendLbl,children:Q})]})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:t.jsxs("div",{style:{...Pe.trendBadge,color:v,background:v+"1A"},children:[t.jsx(x,{size:15})," ",B>0?"+":"",B,"% vs ",$]})}),t.jsx(Uv,{items:[{label:`This ${n}`,value:R,color:"#4C9A6B"},{label:$,value:T,color:"var(--text-3)"},{label:Q,value:z,color:"var(--text-3)"}]})]})]})}const Ov=e=>e===0?"12a":e<12?`${e}a`:e===12?"12p":`${e-12}p`;function Hv({hours:e,axis:r}){return t.jsxs("div",{children:[t.jsxs("div",{style:Pe.vcPlot,children:[r.ticks.map(n=>t.jsxs("div",{style:{...Pe.vcGridRow,bottom:`${n/r.max*100}%`},children:[t.jsx("span",{style:Pe.vcYLabel,children:n}),t.jsx("div",{style:Pe.vcGridLine})]},n)),t.jsx("div",{style:Pe.vcBars,children:e.map((n,o)=>t.jsx("div",{style:Pe.vcCell,title:`${Wv(o)} · ${n} min`,children:t.jsx("div",{style:{...Pe.vcBar,height:n>0?`max(3px, ${n/r.max*100}%)`:0}})},o))})]}),t.jsx("div",{style:Pe.vcXAxis,children:e.map((n,o)=>t.jsx("div",{style:Pe.vcXCell,children:o%3===0?Ov(o):""},o))}),t.jsx("div",{style:Pe.vcYTitle,children:"minutes focused, by hour of day"})]})}function Gv({sessions:e}){if(!e.length)return t.jsx("div",{style:Pe.sceneEmpty,children:"No trees yet this period. 🌱"});const n=e.slice(0,80),o=e.length-n.length,i=s=>Math.round(Math.max(40,Math.min(88,40+(s||0)*.6)));return t.jsxs("div",{children:[t.jsx("div",{style:Pe.scene,children:n.map(s=>t.jsx("div",{style:Pe.sceneTree,title:`${s.label||"Focus"} · ${bn(s.actual_min||s.duration_min)}`,children:t.jsx(Dg,{species:s.tree,progress:1,size:i(s.actual_min||s.duration_min)})},s.id))}),o>0&&t.jsxs("div",{style:Pe.overflow,children:["+",o," more trees"]})]})}function ad({title:e,hint:r,children:n}){return t.jsxs("div",{style:Pe.card,children:[t.jsxs("div",{style:Pe.cardHead,children:[t.jsx("div",{style:Pe.cardTitle,children:e}),r&&t.jsx("div",{style:Pe.cardHint,children:r})]}),n]})}function mp(){return t.jsx("div",{style:Pe.empty,children:"No focus sessions in this period yet. 🌱"})}function Uv({items:e}){const r=Math.max(1,...e.map(n=>n.value));return t.jsx("div",{style:Pe.tbWrap,children:e.map(n=>t.jsxs("div",{style:Pe.tbRow,children:[t.jsx("div",{style:Pe.tbLbl,children:n.label}),t.jsx("div",{style:Pe.tbTrack,children:t.jsx("div",{style:{...Pe.tbBar,width:`${n.value/r*100}%`,background:n.color}})}),t.jsx("div",{style:Pe.tbVal,children:bn(n.value)})]},n.label))})}const Pe={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"20px 16px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:720,margin:"0 auto"},topbar:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},back:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},h1:{fontSize:20,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},rangeBar:{display:"flex",gap:6,background:"var(--surface)",padding:5,borderRadius:12,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},rangeBtn:{flex:1,border:"none",background:"none",padding:"9px 0",borderRadius:8,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},rangeOn:{background:"var(--accent-strong)",color:"#fff"},headline:{display:"flex",gap:12,marginBottom:16},bigStat:{flex:1,background:"var(--surface)",borderRadius:14,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},bigVal:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em"},bigLbl:{fontSize:12,color:"var(--text-3)",marginTop:3,fontWeight:500},card:{background:"var(--surface)",borderRadius:16,padding:"18px 18px 20px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},cardHead:{marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardHint:{fontSize:12,color:"var(--text-3)",marginTop:2},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"24px 0"},scene:{display:"flex",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"center",gap:"0 2px",padding:"14px 8px 6px",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,minHeight:110,border:"1px solid var(--border)"},sceneTree:{lineHeight:0},sceneEmpty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"34px 0",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,border:"1px solid var(--border)"},overflow:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",marginTop:6,fontWeight:600},forestNumber:{textAlign:"center",marginTop:12,fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},vcPlot:{position:"relative",height:180,paddingLeft:30},vcGridRow:{position:"absolute",left:0,right:0,display:"flex",alignItems:"center",height:0},vcYLabel:{width:26,marginRight:4,textAlign:"right",fontSize:9,color:"var(--text-3)",fontWeight:600,flexShrink:0},vcGridLine:{flex:1,height:1,background:"#EEEBE4"},vcBars:{position:"absolute",left:30,right:0,top:0,bottom:0,display:"flex",alignItems:"flex-end",gap:1},vcCell:{flex:1,height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"center"},vcBar:{width:"72%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",transition:"height 0.3s"},vcXAxis:{display:"flex",marginLeft:30,marginTop:4},vcXCell:{flex:1,textAlign:"center",fontSize:8.5,color:"var(--text-3)",fontWeight:600,overflow:"hidden"},vcYTitle:{textAlign:"center",fontSize:9.5,color:"var(--text-3)",marginTop:6,letterSpacing:"0.06em",textTransform:"uppercase",fontWeight:600},donutWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap",justifyContent:"center"},donutCenterTop:{fontSize:16,fontWeight:800,fill:"var(--text)",fontFamily:"'Fraunces',Georgia,serif"},donutCenterSub:{fontSize:9,fill:"#9A968C",textTransform:"uppercase",letterSpacing:"0.08em"},legend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:11,height:11,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},legendVal:{fontSize:12,color:"var(--text-3)",fontWeight:600,flexShrink:0},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:56,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},Vv=[15,30,45,60,90],ld="anvil_grove_active",hp=e=>`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`,nl=e=>e>=60?`${Math.floor(e/60)}h ${e%60}m`:`${e}m`;function Yv(){const[e,r]=c.useState("timer"),[n,o]=c.useState("idle"),[i,s]=c.useState(15),[a,l]=c.useState(!1),[d,g]=c.useState(""),[h,y]=c.useState(an),[f,E]=c.useState(()=>localStorage.getItem("anvil_grove_deepfocus")!=="0"),[R,T]=c.useState(15*60),[z,m]=c.useState({sessions:[],stats:null}),b=c.useRef(null),u=c.useRef(null),k=c.useRef(!1),j=c.useCallback(async()=>{try{m(await F.getFocus())}catch{}},[]),C=c.useCallback(async(J,I)=>{if(!k.current){k.current=!0,localStorage.removeItem(ld);try{await F.createFocus({label:d.trim()||null,tree:h,duration_min:i,actual_min:I,completed:J,started_at:u.current,ended_at:new Date().toISOString()})}catch{}j()}},[d,h,i,j]),B=c.useCallback(()=>{if(n!=="running")return;const J=u.current?Math.round((Date.now()-new Date(u.current).getTime())/6e4):0;o("failed"),C(!1,Math.max(0,Math.min(i,J)))},[n,i,C]),x=c.useCallback(()=>{o("done"),T(0),C(!0,i)},[i,C]);c.useEffect(()=>{j();const J=JSON.parse(localStorage.getItem(ld)||"null");if(J&&J.endTime){const I=Math.round((J.endTime-Date.now())/1e3);s(J.duration),g(J.label||""),y(J.tree||"oak"),b.current=J.endTime,u.current=J.startedAt,I>0?(T(I),o("running")):(o("done"),k.current=!1,C(!0,J.duration))}},[]),c.useEffect(()=>{if(n!=="running")return;const J=()=>{const W=Math.round((b.current-Date.now())/1e3);if(W<=0){x();return}T(W)};J();const I=setInterval(J,250);return()=>clearInterval(I)},[n,x]),c.useEffect(()=>{if(n!=="running"||!f)return;const J=()=>{document.hidden&&B()};return document.addEventListener("visibilitychange",J),()=>document.removeEventListener("visibilitychange",J)},[n,f,B]),c.useEffect(()=>{const J=()=>{!document.hidden&&n!=="running"&&j()};window.addEventListener("focus",J),document.addEventListener("visibilitychange",J);const I=setInterval(J,6e4);return()=>{window.removeEventListener("focus",J),document.removeEventListener("visibilitychange",J),clearInterval(I)}},[j,n]);const v=()=>E(J=>{const I=!J;return localStorage.setItem("anvil_grove_deepfocus",I?"1":"0"),I}),$=()=>{k.current=!1,u.current=new Date().toISOString(),b.current=Date.now()+i*60*1e3,localStorage.setItem(ld,JSON.stringify({endTime:b.current,duration:i,label:d,tree:h,startedAt:u.current})),T(i*60),o("running")},Q=()=>{o("idle"),T(i*60)},ne=J=>{l(!1),s(J),T(J*60)},be=()=>{a||(l(!0),s(5),T(5*60))},A=J=>{if(l(!0),J===""){s(0),T(0);return}const I=Math.max(1,Math.min(600,parseInt(J,10)||0));s(I),T(I*60)},K=i*60,re=n==="running"?1-R/K:n==="done"?1:0,ve=130,Z=2*Math.PI*ve,Y=Z*(1-(n==="running"?re:n==="done"?1:0)),ce=z.stats;return e==="stats"?t.jsx(Nv,{sessions:z.sessions,onBack:()=>r("timer")}):t.jsxs("div",{style:Ve.page,children:[t.jsxs("div",{style:Ve.head,children:[t.jsx("div",{style:Ve.eyebrow,children:"Anvil · Grove"}),t.jsx("h1",{style:Ve.h1,children:"Grove"}),t.jsx("div",{style:Ve.subhead,children:"Plant a tree, stay focused, grow your grove."}),t.jsxs("button",{onClick:()=>r("stats"),style:Ve.insightsBtn,disabled:n==="running",children:[t.jsx(Gy,{size:15})," Insights"]})]}),ce&&t.jsxs("div",{style:Ve.statRow,children:[t.jsx(oa,{label:"Today",value:nl(ce.today_minutes)}),t.jsx(oa,{label:"Trees",value:ce.trees}),t.jsx(oa,{label:"Streak",value:`${ce.streak}d`}),t.jsx(oa,{label:"Success",value:`${ce.success_rate}%`})]}),t.jsxs("div",{style:Ve.stage,children:[t.jsxs("div",{style:Ve.ringWrap,children:[t.jsxs("svg",{width:"300",height:"300",viewBox:"0 0 300 300",style:{position:"absolute",inset:0},children:[t.jsx("circle",{cx:"150",cy:"150",r:ve,fill:"none",stroke:"var(--border)",strokeWidth:"10"}),t.jsx("circle",{cx:"150",cy:"150",r:ve,fill:"none",stroke:n==="failed"?"#C2536B":"#4C9A6B",strokeWidth:"10",strokeLinecap:"round",strokeDasharray:Z,strokeDashoffset:Y,transform:"rotate(-90 150 150)",style:{transition:"stroke-dashoffset 0.4s linear"}})]}),t.jsx("div",{style:Ve.ringInner,children:t.jsx(Dg,{species:h,progress:n==="idle"?0:re,withered:n==="failed",size:170})})]}),n==="idle"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:Ve.timeBig,children:hp(i*60)}),t.jsxs("div",{style:Ve.controls,children:[t.jsxs("div",{style:Ve.chips,children:[Vv.map(J=>t.jsxs("button",{onClick:()=>ne(J),style:{...Ve.chip,...!a&&i===J?Ve.chipOn:{}},children:[J,"m"]},J)),t.jsx("button",{onClick:be,style:{...Ve.chip,...a?Ve.chipOn:{}},children:"Custom"})]}),a&&t.jsxs("div",{style:Ve.customRow,children:[t.jsx("input",{type:"number",min:"1",max:"600",inputMode:"numeric",autoFocus:!0,value:i||"",onChange:J=>A(J.target.value),placeholder:"e.g. 50",style:Ve.customInput}),t.jsx("span",{style:Ve.customUnit,children:"minutes"})]}),t.jsx("input",{value:d,onChange:J=>g(J.target.value),placeholder:"What are you focusing on? (optional)",style:Ve.input,maxLength:60}),t.jsx("div",{style:Ve.treePick,children:Object.entries(qt).map(([J,I])=>t.jsxs("button",{onClick:()=>y(J),title:I.label,style:{...Ve.treeBtn,...h===J?{borderColor:I.leaf,background:I.leaf+"1A"}:{}},children:[t.jsx("span",{style:{...Ve.treeDot,background:I.leaf}}),I.label]},J))}),t.jsxs("button",{onClick:v,style:Ve.toggleRow,children:[t.jsxs("div",{style:{textAlign:"left"},children:[t.jsx("div",{style:Ve.toggleTitle,children:"Deep Focus"}),t.jsx("div",{style:Ve.toggleHint,children:f?"Leaving the app kills the tree":"Tree survives until you give up"})]}),t.jsx("div",{style:{...Ve.switch,...f?Ve.switchOn:{}},children:t.jsx("div",{style:{...Ve.knob,...f?Ve.knobOn:{}}})})]}),t.jsx("button",{onClick:$,disabled:i<1,style:{...Ve.plantBtn,...i<1?{opacity:.5,cursor:"not-allowed"}:{}},children:"Plant tree"})]})]}),n==="running"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:Ve.timeBig,children:hp(R)}),t.jsx("div",{style:Ve.focusLabel,children:d.trim()||"Focusing…"}),t.jsx("div",{style:f?Ve.warn:Ve.warnSoft,children:f?"⚠ Deep Focus on — leaving this app will kill your tree.":"🌿 Relaxed mode — only Give up ends this session."}),t.jsx("button",{onClick:B,style:Ve.giveUp,children:"Give up"})]}),n==="done"&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:Ve.resultTitle,children:["🌳 You grew a ",qt[h].label," tree!"]}),t.jsxs("div",{style:Ve.resultSub,children:[nl(i)," of focus added to your grove."]}),t.jsx("button",{onClick:Q,style:Ve.plantBtn,children:"Plant another"})]}),n==="failed"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{...Ve.resultTitle,color:"#C2536B"},children:"Your tree withered."}),t.jsx("div",{style:Ve.resultSub,children:"You left before the timer finished. Try again?"}),t.jsx("button",{onClick:Q,style:Ve.plantBtn,children:"Try again"})]})]}),t.jsx(Kv,{sessions:z.sessions,onDelete:async J=>{await F.deleteFocus(J),j()}})]})}function oa({label:e,value:r}){return t.jsxs("div",{style:Ve.stat,children:[t.jsx("div",{style:Ve.statValue,children:r}),t.jsx("div",{style:Ve.statLabel,children:e})]})}function Kv({sessions:e,onDelete:r}){const n=e.filter(a=>a.completed);if(n.length===0)return t.jsx("div",{style:Ve.forestEmpty,children:"Your grove is empty. Plant your first tree above. 🌱"});const o={};for(const a of n){const l=(a.started_at||a.created_at||"").slice(0,10);(o[l]||(o[l]=[])).push(a)}const i=Object.keys(o).sort().reverse(),s=a=>{const l=new Date().toISOString().slice(0,10);return a===l?"Today":new Date(a+"T00:00").toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})};return t.jsxs("div",{style:Ve.forest,children:[t.jsxs("div",{style:Ve.forestHead,children:["Your Grove · ",n.length," trees"]}),i.map(a=>t.jsxs("div",{style:Ve.daySection,children:[t.jsxs("div",{style:Ve.dayLabel,children:[s(a)," · ",o[a].length]}),t.jsx("div",{style:Ve.treeGrid,children:o[a].map(l=>t.jsxs("div",{style:Ve.treeCard,title:`${l.label||"Focus"} · ${nl(l.actual_min)}`,onDoubleClick:()=>r(l.id),children:[t.jsx(D0,{species:l.tree}),t.jsx("div",{style:Ve.treeCardMin,children:nl(l.actual_min||l.duration_min)}),l.label&&t.jsx("div",{style:Ve.treeCardLabel,children:l.label})]},l.id))})]},a)),t.jsx("div",{style:Ve.forestHint,children:"Double-tap a tree to remove it."})]})}const Ve={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:820,margin:"0 auto"},head:{marginBottom:16,textAlign:"center"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},insightsBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginTop:12},statRow:{display:"flex",gap:10,justifyContent:"center",marginBottom:18,flexWrap:"wrap"},stat:{background:"var(--surface)",borderRadius:12,padding:"10px 18px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",minWidth:78},statValue:{fontSize:19,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},statLabel:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},stage:{background:"var(--surface)",borderRadius:18,padding:"28px 24px 32px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",display:"flex",flexDirection:"column",alignItems:"center",marginBottom:26},ringWrap:{position:"relative",width:300,height:300,display:"grid",placeItems:"center"},ringInner:{position:"relative",zIndex:1,display:"grid",placeItems:"center"},timeBig:{fontSize:40,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:6},focusLabel:{fontSize:14,color:"var(--text-2)",marginTop:2,fontWeight:500},warn:{fontSize:12,color:"#C2773B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},warnSoft:{fontSize:12,color:"#4C9A6B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},toggleRow:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:12,padding:"10px 14px",cursor:"pointer",fontFamily:"inherit",width:"100%"},toggleTitle:{fontSize:14,fontWeight:700,color:"var(--text)"},toggleHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},switch:{width:42,height:24,borderRadius:12,background:"var(--border)",flexShrink:0,padding:2,transition:"background 0.18s",boxSizing:"border-box"},switchOn:{background:"#4C9A6B"},knob:{width:20,height:20,borderRadius:"50%",background:"var(--surface)",boxShadow:"0 1px 2px rgba(0,0,0,0.2)",transform:"translateX(0)",transition:"transform 0.18s"},knobOn:{transform:"translateX(18px)"},controls:{width:"100%",maxWidth:380,display:"flex",flexDirection:"column",gap:14,marginTop:8},chips:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},chip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},customRow:{display:"flex",alignItems:"center",justifyContent:"center",gap:8},customInput:{border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:15,fontWeight:700,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center",width:100},customUnit:{fontSize:13,color:"var(--text-3)",fontWeight:600},input:{border:"1px solid var(--border)",borderRadius:10,padding:"11px 13px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center"},treePick:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},treeBtn:{display:"flex",alignItems:"center",gap:6,border:"1.5px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},treeDot:{width:10,height:10,borderRadius:"50%"},plantBtn:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},giveUp:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",padding:"11px 26px",borderRadius:11,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:18},resultTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginTop:14,textAlign:"center"},resultSub:{fontSize:13.5,color:"var(--text-3)",marginTop:6,marginBottom:18,textAlign:"center"},forest:{background:"var(--surface)",borderRadius:16,padding:"20px 22px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},forestHead:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},forestEmpty:{background:"var(--surface)",borderRadius:16,padding:"40px 20px",textAlign:"center",color:"var(--text-3)",fontSize:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},daySection:{marginBottom:16},dayLabel:{fontSize:12,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:8},treeGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(80px,1fr))",gap:8},treeCard:{display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 4px",borderRadius:10,cursor:"pointer",background:"var(--surface-2)"},treeCardMin:{fontSize:12,fontWeight:700,color:"#4C9A6B",marginTop:-4},treeCardLabel:{fontSize:10.5,color:"var(--text-3)",marginTop:2,textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:76},forestHint:{fontSize:11,color:"var(--text-3)",textAlign:"center",marginTop:6}},Qv="grove_rates",qv="reward_rates",ia=Object.keys(qt),fp=[{id:"kickstart",label:"Kickstart"},{id:"golden",label:"Golden Book"},{id:"habits",label:"Habits"},{id:"quadrant",label:"Quadrant"},{id:"goals",label:"Goals"},{id:"grove",label:"Grove"},{id:"journal",label:"Journal"},{id:"revision",label:"Revision"},{id:"affirmations",label:"Affirmations"},{id:"skills",label:"Skills"},{id:"spiritual",label:"Spiritual"},{id:"mindscape",label:"Mindscape"},{id:"vault",label:"Wallet"},{id:"expenses",label:"Expenses"},{id:"trading",label:"Trading Journal"},{id:"delight",label:"Delights"},{id:"achievements",label:"Achievements"},{id:"challenges",label:"Challenges"},{id:"bucket",label:"Bucket List"}],dd=new Set(["worth"]),xp="reward_toggles",yp="bucket_take_enabled",En="#C9A227",Ao="#3A7CA5",ao="#C2536B",lo="#4C9A6B",vp=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#5B9B9B","#B0654E","#6E7FC2","#A23E57","#3E9E6B","#9A7BB0","#C99B2E","#4E86B0","#B04E86","#6BA34C","#8A6D3B"],Xv=e=>{const r=Math.floor(e/60),n=Math.round(e%60);return r&&n?`${r}h ${n}m`:r?`${r}h`:`${n}m`},cd=e=>{let r=Math.round((e||0)*60);const n=Math.floor(r/3600);r%=3600;const o=Math.floor(r/60);return r%=60,[n?`${n}h`:null,n||o?`${o}m`:null,`${r}s`].filter(Boolean).join(" ")},Zv=()=>{const e=new Date,r=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${r(e.getMonth()+1)}-${r(e.getDate())}T${r(e.getHours())}:${r(e.getMinutes())}`},jp=e=>{if(!e)return"";const r=new Date(e.includes("T")?e:e+"T00:00:00");return isNaN(r)?e:r.toLocaleDateString("en-US",e.includes("T")?{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}:{month:"short",day:"numeric",year:"numeric"})},Sr=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,kp=e=>{const r=new Date(e);return r.setHours(0,0,0,0),r.setDate(r.getDate()-(r.getDay()+6)%7),r},Fo=[{id:"today",label:"Today"},{id:"all",label:"All time"},{id:"tweek",label:"This week"},{id:"tmonth",label:"This month"},{id:"pweek",label:"Last week"},{id:"pmonth",label:"Last month"},{id:"tyear",label:"This year"}];function Jv(e){const r=new Date;if(e==="today")return[Sr(r),Sr(r)];if(e==="tweek"){const n=kp(r),o=new Date(n);return o.setDate(n.getDate()+6),[Sr(n),Sr(o)]}if(e==="pweek"){const n=kp(r);n.setDate(n.getDate()-7);const o=new Date(n);return o.setDate(n.getDate()+6),[Sr(n),Sr(o)]}return e==="tmonth"?[Sr(new Date(r.getFullYear(),r.getMonth(),1)),Sr(new Date(r.getFullYear(),r.getMonth()+1,0))]:e==="pmonth"?[Sr(new Date(r.getFullYear(),r.getMonth()-1,1)),Sr(new Date(r.getFullYear(),r.getMonth(),0))]:e==="tyear"?[Sr(new Date(r.getFullYear(),0,1)),Sr(new Date(r.getFullYear(),11,31))]:["0000-01-01","9999-12-31"]}function e1(){const e=no(),r=N=>Ur(N,e.code),[n,o]=c.useState([]),[i,s]=c.useState([]),[a,l]=c.useState([]),[d,g]=c.useState([]),[h,y]=c.useState([]),[f,E]=c.useState([]),[R,T]=c.useState({}),[z,m]=c.useState({}),[b,u]=c.useState({focus:!0,usage:!0,achievement:!0,challenge:!0}),[k,j]=c.useState(!1),[C,B]=c.useState({}),[x,v]=c.useState({}),[$,Q]=c.useState(!1),[ne,be]=c.useState(!1),[A,K]=c.useState(null),[re,ve]=c.useState(""),[Z,Y]=c.useState(""),[ce,J]=c.useState(!1),[I,W]=c.useState("today"),[_,P]=c.useState([]),[de,ge]=c.useState(!1),[De,q]=c.useState(null),oe=()=>F.getPayouts().then(g).catch(()=>{}),G=()=>F.getBucket().then(N=>P(Array.isArray(N)?N:[])).catch(()=>{}),le=()=>F.getRewardRates().then(l).catch(()=>{});c.useEffect(()=>{(async()=>{try{const[N,Re,nt,M,ee,ze,$e,rt,Ze,Je,ft]=await Promise.all([F.getFocus(),F.getScreenTime(),F.getRewardRates(),F.getPayouts(),F.getAchievements(),F.getChallenges(),F.getBucket(),F.getSetting(Qv),F.getSetting(qv),F.getSetting(xp),F.getSetting(yp)]);o(N.sessions||[]),s(Array.isArray(Re)?Re:[]),l(nt||[]),g(M||[]),y(Array.isArray(ee)?ee:[]),E(Array.isArray(ze)?ze:[]),P(Array.isArray($e)?$e:[]),T((rt==null?void 0:rt.value)||{}),m((Ze==null?void 0:Ze.value)||{}),Je!=null&&Je.value&&u(Te=>({...Te,...Je.value})),ge(!!(ft!=null&&ft.value))}catch{}j(!0)})()},[]);const D={};a.forEach(N=>{var Re;(D[Re=`${N.kind}:${N.rkey}`]||(D[Re]=[])).push({eff:N.eff_date,rate:N.rate})}),Object.values(D).forEach(N=>N.sort((Re,nt)=>Re.eff.localeCompare(nt.eff)));const w=(N,Re,nt)=>{const M=D[`${N}:${Re}`];if(M){let ee=null;for(const ze of M)if(ze.eff<=nt)ee=ze.rate;else break;if(ee!==null)return ee}return(N==="focus"?R[Re]:z[Re])||0},ie=(N,Re)=>{const nt=D[`${N}:${Re}`];return nt&&nt.length?nt[nt.length-1].rate:(N==="focus"?R[Re]:z[Re])??""},[me,H]=Jv(I);let fe=0,he=0;n.filter(N=>N.completed).forEach(N=>{const Re=(N.started_at||N.created_at||"").slice(0,10),nt=qt[N.tree]?N.tree:an;fe+=(N.actual_min||0)/60*w("focus",nt,Re)}),i.forEach(N=>{dd.has(N.screen)||(he+=N.seconds/60*w("usage",N.screen,N.date))});const Ee=h.reduce((N,Re)=>N+(Re.reward||0),0),Qe=f.filter(N=>N.status==="done"),st=Qe.reduce((N,Re)=>N+(Re.reward_earned||0),0),Le=(b.focus?fe:0)+(b.usage?he:0)+(b.achievement?Ee:0)+(b.challenge?st:0),et=d.reduce((N,Re)=>N+Re.amount,0),Ke=Math.max(0,Le-et),ut=N=>{let Re=0,nt=0;return b.focus&&n.filter(M=>M.completed).forEach(M=>{const ee=(M.started_at||M.created_at||"").slice(0,10);if(ee!==N)return;const ze=qt[M.tree]?M.tree:an;Re+=(M.actual_min||0)/60*w("focus",ze,ee)}),b.usage&&i.forEach(M=>{dd.has(M.screen)||M.date!==N||(nt+=M.seconds/60*w("usage",M.screen,M.date))}),Re+nt},ae=N=>{const Re=new Date;return Re.setDate(Re.getDate()+N),Sr(Re)},We=[{label:"Today",value:ut(ae(0)),color:En},{label:"Yesterday",value:ut(ae(-1)),color:"var(--text-3)"},{label:"Day before",value:ut(ae(-2)),color:"var(--text-3)"}],qe={};ia.forEach(N=>qe[N]={minutes:0,earned:0}),n.filter(N=>N.completed).forEach(N=>{const Re=(N.started_at||N.created_at||"").slice(0,10);if(Re<me||Re>H)return;const nt=qt[N.tree]?N.tree:an,M=N.actual_min||0;qe[nt].minutes+=M,qe[nt].earned+=M/60*w("focus",nt,Re)});const tt=b.focus?ia.reduce((N,Re)=>N+qe[Re].earned,0):0,ht={};i.forEach(N=>{var nt;if(dd.has(N.screen)||N.date<me||N.date>H)return;const Re=ht[nt=N.screen]||(ht[nt]={seconds:0,earned:0});Re.seconds+=N.seconds,Re.earned+=N.seconds/60*w("usage",N.screen,N.date)});const _t=b.usage?Object.values(ht).reduce((N,Re)=>N+Re.earned,0):0,It=h.filter(N=>N.date>=me&&N.date<=H&&(N.reward||0)>0),xt=[...It].sort((N,Re)=>Re.date.localeCompare(N.date)||Re.reward-N.reward),yt=b.achievement?It.reduce((N,Re)=>N+(Re.reward||0),0):0,At=Qe.filter(N=>!N.end_date||N.end_date>=me&&N.end_date<=H),Er=[...At].sort((N,Re)=>(Re.reward_earned||0)-(N.reward_earned||0)),Ne=b.challenge?At.reduce((N,Re)=>N+(Re.reward_earned||0),0):0,dt=tt+_t+yt+Ne,Bt=dt>0?tt/dt*100:0,zt=dt>0?_t/dt*100:0,pt=dt>0?yt/dt*100:0,jr=dt>0?Ne/dt*100:0,vt=ia.map(N=>({p:N,...qe[N],...qt[N]})).filter(N=>N.minutes>0).sort((N,Re)=>Re.earned-N.earned),p=fp.map(N=>({...N,...ht[N.id]||{seconds:0,earned:0}})).filter(N=>N.seconds>0).sort((N,Re)=>Re.earned-N.earned),L=p.reduce((N,Re)=>N+Re.seconds,0);let Fe=0;const _e=p.map((N,Re)=>{const nt=L>0?Fe/L*100:0;Fe+=N.seconds;const M=L>0?Fe/L*100:0;return{...N,color:vp[Re%vp.length],start:nt,end:M,pct:L>0?N.seconds/L*100:0}}),Xe=_e.length?`conic-gradient(${_e.map(N=>`${N.color} ${N.start}% ${N.end}%`).join(", ")})`:"var(--surface-2)",ot=async()=>{const N=Object.entries(C);for(const[Re,nt]of N)await F.setRewardRate({kind:"focus",rkey:Re,rate:Math.max(0,parseFloat(nt)||0)}).catch(()=>{});B({}),Q(!1),le()},ur=()=>{B({}),Q(!1)},jt=async()=>{const N=Object.entries(x);for(const[Re,nt]of N)await F.setRewardRate({kind:"usage",rkey:Re,rate:Math.max(0,parseFloat(nt)||0)}).catch(()=>{});v({}),be(!1),le()},ir=()=>{v({}),be(!1)},gt=N=>{u(Re=>{const nt={...Re,[N]:!Re[N]};return F.setSetting(xp,nt).catch(()=>{}),nt})},sr=N=>{Ke<=0||(K(N),ve(N==="all"?Ke.toFixed(2):""),Y(""),q(null))},Bn=async()=>{const N=Math.min(parseFloat(re)||0,Ke);N<=0||!Z.trim()||(await F.createPayout({amount:N,note:Z.trim(),date:Zv()}),K(null),ve(""),Y(""),await oe(),J(!0))},hi=async()=>{!De||(De.cost||0)>Ke||(await F.fulfillBucketWish(De.id).catch(()=>{}),K(null),q(null),await Promise.all([oe(),G()]),J(!0))},fi=()=>{ge(N=>{const Re=!N;return F.setSetting(yp,Re).catch(()=>{}),Re})},Tl=async N=>{await F.deletePayout(N),oe()};return t.jsxs("div",{style:O.page,children:[t.jsxs("div",{style:O.head,children:[t.jsx("div",{style:O.eyebrow,children:"Anvil · Rewards"}),t.jsx("h1",{style:O.h1,children:"Rewards"}),t.jsx("div",{style:O.subhead,children:"Your earned rewards from focus and app usage."})]}),t.jsxs("div",{style:O.hero,children:[t.jsx("button",{onClick:()=>J(N=>!N),style:O.logIcon,title:"View reward log",children:t.jsx(j0,{size:16})}),t.jsx("div",{style:O.heroLabel,children:"Final reward · pending"}),t.jsx("div",{style:O.heroVal,children:r(Ke)}),t.jsxs("div",{style:O.heroSub,children:["Earned ",r(Le)," · Taken ",r(et),Ee>0?` · incl. ${r(Ee)} achievement`:"",st>0?` · incl. ${r(st)} challenge`:""]}),t.jsxs("div",{style:O.heroBtns,children:[t.jsx("button",{onClick:()=>sr("partial"),disabled:Ke<=0,style:{...O.heroBtnGhost,...Ke<=0?O.btnDisabled:{}},children:"Take partial"}),t.jsx("button",{onClick:()=>sr("all"),disabled:Ke<=0,style:{...O.heroBtnSolid,...Ke<=0?O.btnDisabled:{}},children:"Take all pending"})]}),t.jsxs("button",{onClick:fi,style:O.bucketToggleRow,title:de?"Taking will pick a bucket-list wish":"Taking uses a free amount",children:[t.jsx("span",{style:{...O.miniToggle,background:de?"#fff":"rgba(255,255,255,0.3)",justifyContent:de?"flex-end":"flex-start"},children:t.jsx("span",{style:{...O.miniKnob,background:de?"var(--accent-strong)":"#fff"}})}),t.jsxs("span",{children:["Fulfil from bucket list",de?" · on":" · off"]})]})]}),t.jsxs("div",{style:O.statRow,children:[t.jsxs("div",{style:O.statCard,children:[t.jsx("div",{style:O.statVal,children:r(et)}),t.jsx("div",{style:O.statLbl,children:"Total taken"})]}),t.jsxs("div",{style:O.statCard,children:[t.jsx("div",{style:{...O.statVal,color:En},children:r(Ke)}),t.jsx("div",{style:O.statLbl,children:"Total pending"})]})]}),t.jsxs("div",{style:O.card,children:[t.jsx("div",{style:O.threeDayTitle,children:"Earned · last 3 days"}),t.jsx(t1,{items:We,reward:r})]}),t.jsx("div",{style:O.periodRow,children:Fo.map(N=>t.jsx("button",{onClick:()=>W(N.id),style:{...O.periodChip,...I===N.id?O.periodChipOn:{}},children:N.label},N.id))}),dt>0?t.jsxs("div",{style:O.card,children:[t.jsxs("div",{style:O.cardTitleRow,children:[t.jsx("span",{style:O.cardTitle,children:"Reward split"}),t.jsxs("span",{style:O.periodTotal,children:[r(dt)," · ",Fo.find(N=>N.id===I).label]})]}),t.jsxs("div",{style:O.splitTrack,children:[t.jsx("div",{style:{width:`${Bt}%`,background:En,height:"100%"}}),t.jsx("div",{style:{width:`${zt}%`,background:Ao,height:"100%"}}),t.jsx("div",{style:{width:`${pt}%`,background:ao,height:"100%"}}),t.jsx("div",{style:{width:`${jr}%`,background:lo,height:"100%"}})]}),t.jsxs("div",{style:O.legendRow,children:[t.jsxs("span",{style:O.legendItem,children:[t.jsx("span",{style:{...O.legendDot,background:En}})," Focus ",Math.round(Bt),"% · ",r(tt)]}),t.jsxs("span",{style:O.legendItem,children:[t.jsx("span",{style:{...O.legendDot,background:Ao}})," Usage ",Math.round(zt),"% · ",r(_t)]}),t.jsxs("span",{style:O.legendItem,children:[t.jsx("span",{style:{...O.legendDot,background:ao}})," Achievement ",Math.round(pt),"% · ",r(yt)]}),t.jsxs("span",{style:O.legendItem,children:[t.jsx("span",{style:{...O.legendDot,background:lo}})," Challenges ",Math.round(jr),"% · ",r(Ne)]})]})]}):t.jsxs("div",{style:{...O.card,...O.muted},children:["No rewards earned in ",Fo.find(N=>N.id===I).label.toLowerCase(),"."]}),t.jsxs("div",{style:{...O.card,...b.focus?{}:O.cardOff},children:[t.jsxs("div",{style:O.sectionHead,children:[t.jsxs("span",{style:{...O.cardTitle,color:En},children:["Focus Rewards · ",r(tt)]}),t.jsxs("div",{style:O.sectionHeadRight,children:[b.focus&&t.jsx("button",{onClick:()=>$?ur():Q(!0),style:O.collapseLink,children:$?"Hide rates":"Set rates"}),t.jsx(sa,{on:b.focus,onClick:()=>gt("focus"),color:En})]})]}),b.focus&&$&&t.jsxs("div",{style:{marginTop:12},children:[t.jsx("div",{style:O.rateGrid,children:ia.map(N=>t.jsxs("div",{style:O.rateRow,children:[t.jsx("span",{style:{...O.dot,background:qt[N].leaf}}),t.jsx("span",{style:O.rateName,children:qt[N].label}),t.jsxs("div",{style:O.rateInputWrap,children:[t.jsx("span",{style:O.unitSign,children:e.symbol}),t.jsx("input",{type:"number",min:"0",step:"0.5",inputMode:"decimal",placeholder:"0",value:C[N]!==void 0?C[N]:ie("focus",N),onChange:Re=>B(nt=>({...nt,[N]:Re.target.value})),style:O.rateInput}),t.jsx("span",{style:O.unit,children:"/hr"})]})]},N))}),t.jsxs("div",{style:O.rateActions,children:[t.jsx("button",{onClick:ur,style:O.rateCancel,children:"Cancel"}),t.jsx("button",{onClick:ot,style:O.rateSave,children:"Save"})]})]}),b.focus?vt.length>0?t.jsx("div",{style:{...O.rows,marginTop:14},children:vt.map(N=>t.jsxs("div",{style:O.row,children:[t.jsx("span",{style:{...O.dot,background:N.leaf}}),t.jsx("span",{style:O.rowName,children:N.label}),t.jsx("span",{style:O.rowMeta,children:Xv(Math.round(N.minutes))}),t.jsx("span",{style:O.rowAmt,children:r(N.earned)})]},N.p))}):t.jsx("div",{style:O.muted,children:"No focus sessions yet."}):t.jsx("div",{style:O.muted,children:"Focus rewards are disabled — no reward is being calculated."})]}),t.jsxs("div",{style:{...O.card,...b.usage?{}:O.cardOff},children:[t.jsxs("div",{style:O.sectionHead,children:[t.jsxs("span",{style:{...O.cardTitle,color:Ao},children:["Usage Rewards · ",r(_t)]}),t.jsxs("div",{style:O.sectionHeadRight,children:[b.usage&&t.jsx("button",{onClick:()=>ne?ir():be(!0),style:O.collapseLink,children:ne?"Hide rates":"Set rates"}),t.jsx(sa,{on:b.usage,onClick:()=>gt("usage"),color:Ao})]})]}),b.usage&&ne&&t.jsxs("div",{style:{marginTop:12},children:[t.jsx("div",{style:O.rateGrid,children:fp.map(N=>t.jsxs("div",{style:O.rateRow,children:[t.jsx("span",{style:O.rateName,children:N.label}),t.jsxs("div",{style:O.rateInputWrap,children:[t.jsx("span",{style:O.unitSign,children:e.symbol}),t.jsx("input",{type:"number",min:"0",step:"0.1",inputMode:"decimal",placeholder:"0",value:x[N.id]!==void 0?x[N.id]:ie("usage",N.id),onChange:Re=>v(nt=>({...nt,[N.id]:Re.target.value})),style:O.rateInput}),t.jsx("span",{style:O.unit,children:"/min"})]})]},N.id))}),t.jsxs("div",{style:O.rateActions,children:[t.jsx("button",{onClick:ir,style:O.rateCancel,children:"Cancel"}),t.jsx("button",{onClick:jt,style:O.rateSave,children:"Save"})]})]}),b.usage?p.length>0?t.jsx("div",{style:{...O.rows,marginTop:14},children:p.map(N=>t.jsxs("div",{style:O.row,children:[t.jsx("span",{style:O.rowName,children:N.label}),t.jsx("span",{style:O.rowMeta,children:cd(N.seconds/60)}),t.jsx("span",{style:O.rowAmt,children:r(N.earned)})]},N.id))}):t.jsx("div",{style:O.muted,children:k?"No usage tracked yet.":"Loading…"}):t.jsx("div",{style:O.muted,children:"Usage rewards are disabled — no reward is being calculated."}),b.usage&&L>0&&t.jsxs("div",{style:O.usagePieBlock,children:[t.jsxs("div",{style:O.usagePieTitle,children:["Most-used screens · ",Fo.find(N=>N.id===I).label]}),t.jsxs("div",{style:O.pieWrap,children:[t.jsxs("div",{style:O.pieChart,children:[t.jsx("div",{style:{...O.pieDisc,background:Xe}}),t.jsxs("div",{style:O.pieHole,children:[t.jsx("span",{style:O.pieHoleVal,children:cd(L/60)}),t.jsx("span",{style:O.pieHoleLbl,children:"total time"})]})]}),t.jsx("div",{style:O.pieLegend,children:_e.map(N=>t.jsxs("div",{style:O.pieLegRow,children:[t.jsx("span",{style:{...O.legendDot,background:N.color}}),t.jsx("span",{style:O.pieLegName,children:N.label}),t.jsxs("span",{style:O.pieLegPct,children:[Math.round(N.pct),"%"]}),t.jsx("span",{style:O.pieLegMin,children:cd(N.seconds/60)})]},N.id))})]})]})]}),t.jsxs("div",{style:{...O.card,...b.achievement?{}:O.cardOff},children:[t.jsxs("div",{style:O.sectionHead,children:[t.jsxs("span",{style:{...O.cardTitle,color:ao},children:["Achievement Rewards · ",r(yt)]}),t.jsxs("div",{style:O.sectionHeadRight,children:[b.achievement&&t.jsx("span",{style:O.collapseHint,children:"Set in Achievements"}),t.jsx(sa,{on:b.achievement,onClick:()=>gt("achievement"),color:ao})]})]}),b.achievement?xt.length>0?t.jsx("div",{style:{...O.rows,marginTop:14},children:xt.map(N=>t.jsxs("div",{style:O.row,children:[t.jsx("span",{style:{...O.dot,background:ao}}),t.jsx("span",{style:O.rowName,children:N.title}),t.jsx("span",{style:O.rowMeta,children:jp(N.date)}),t.jsx("span",{style:O.rowAmt,children:r(N.reward)})]},N.id))}):t.jsxs("div",{style:{...O.muted,marginTop:10},children:["No achievement rewards in ",Fo.find(N=>N.id===I).label.toLowerCase(),". Add a reward to a win in the Achievements section."]}):t.jsx("div",{style:{...O.muted,marginTop:10},children:"Achievement rewards are disabled — no reward is being calculated."})]}),t.jsxs("div",{style:{...O.card,...b.challenge?{}:O.cardOff},children:[t.jsxs("div",{style:O.sectionHead,children:[t.jsxs("span",{style:{...O.cardTitle,color:lo},children:["Challenge Rewards · ",r(Ne)]}),t.jsxs("div",{style:O.sectionHeadRight,children:[b.challenge&&t.jsx("span",{style:O.collapseHint,children:"Set in Challenges"}),t.jsx(sa,{on:b.challenge,onClick:()=>gt("challenge"),color:lo})]})]}),b.challenge?Er.length>0?t.jsx("div",{style:{...O.rows,marginTop:14},children:Er.map(N=>t.jsxs("div",{style:O.row,children:[t.jsx("span",{style:{...O.dot,background:lo}}),t.jsx("span",{style:O.rowName,children:N.name}),t.jsx("span",{style:O.rowMeta,children:N.reward||"Completed"}),t.jsx("span",{style:O.rowAmt,children:r(N.reward_earned)})]},N.id))}):t.jsxs("div",{style:{...O.muted,marginTop:10},children:["No completed challenges in ",Fo.find(N=>N.id===I).label.toLowerCase(),". Finish a challenge in the Challenges section to bank its reward."]}):t.jsx("div",{style:{...O.muted,marginTop:10},children:"Challenge rewards are disabled — no reward is being calculated."})]}),ce&&t.jsx("div",{style:O.modalOverlay,onClick:()=>J(!1),children:t.jsxs("div",{style:O.logModal,onClick:N=>N.stopPropagation(),children:[t.jsxs("div",{style:O.logModalHead,children:[t.jsx("span",{style:O.modalTitle,children:"Reward log"}),t.jsx("button",{onClick:()=>J(!1),style:O.logClose,title:"Close",children:t.jsx(Be,{size:16})})]}),d.length===0?t.jsx("div",{style:{...O.muted,padding:"24px 0",textAlign:"center"},children:"No rewards taken yet."}):t.jsxs(t.Fragment,{children:[t.jsx("div",{style:O.logScroll,children:d.map(N=>t.jsxs("div",{style:O.row,children:[t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:O.logNote,children:N.note||"Reward taken"}),t.jsx("div",{style:O.rowMeta,children:jp(N.date)})]}),t.jsx("span",{style:O.rowAmt,children:r(N.amount)}),t.jsx("button",{onClick:()=>Tl(N.id),style:O.del,children:"×"})]},N.id))}),t.jsxs("div",{style:O.totalRow,children:[t.jsx("span",{children:"Total taken"}),t.jsx("span",{style:O.totalVal,children:r(et)})]})]})]})}),dt>0&&t.jsxs("div",{style:O.card,children:[t.jsx("div",{style:O.cardTitle,children:"Reward breakdown"}),t.jsxs("div",{style:O.pieWrap,children:[t.jsxs("div",{style:O.pieChart,children:[t.jsx("div",{style:{...O.pieDisc,background:`conic-gradient(${En} 0 ${Bt}%, ${Ao} ${Bt}% ${Bt+zt}%, ${ao} ${Bt+zt}% ${Bt+zt+pt}%, ${lo} ${Bt+zt+pt}% 100%)`}}),t.jsxs("div",{style:O.pieHole,children:[t.jsx("span",{style:O.pieHoleVal,children:r(dt)}),t.jsx("span",{style:O.pieHoleLbl,children:"total"})]})]}),t.jsxs("div",{style:O.pieLegend,children:[t.jsxs("div",{style:O.pieLegRow,children:[t.jsx("span",{style:{...O.legendDot,background:En}}),t.jsx("span",{style:O.pieLegName,children:"Focus"}),t.jsxs("span",{style:O.pieLegPct,children:[Math.round(Bt),"%"]}),t.jsx("span",{style:O.pieLegMin,children:r(tt)})]}),t.jsxs("div",{style:O.pieLegRow,children:[t.jsx("span",{style:{...O.legendDot,background:Ao}}),t.jsx("span",{style:O.pieLegName,children:"Usage"}),t.jsxs("span",{style:O.pieLegPct,children:[Math.round(zt),"%"]}),t.jsx("span",{style:O.pieLegMin,children:r(_t)})]}),t.jsxs("div",{style:O.pieLegRow,children:[t.jsx("span",{style:{...O.legendDot,background:ao}}),t.jsx("span",{style:O.pieLegName,children:"Achievement"}),t.jsxs("span",{style:O.pieLegPct,children:[Math.round(pt),"%"]}),t.jsx("span",{style:O.pieLegMin,children:r(yt)})]}),t.jsxs("div",{style:O.pieLegRow,children:[t.jsx("span",{style:{...O.legendDot,background:lo}}),t.jsx("span",{style:O.pieLegName,children:"Challenges"}),t.jsxs("span",{style:O.pieLegPct,children:[Math.round(jr),"%"]}),t.jsx("span",{style:O.pieLegMin,children:r(Ne)})]})]})]})]}),A&&t.jsx("div",{style:O.modalOverlay,onClick:()=>K(null),children:t.jsxs("div",{style:O.modalCard,onClick:N=>N.stopPropagation(),children:[t.jsx("div",{style:O.modalTitle,children:A==="all"?"Take all pending reward?":"Take partial reward"}),t.jsxs("div",{style:O.modalSub,children:["Pending: ",r(Ke)]}),de?(()=>{const N=_.filter(M=>!M.fulfilled),Re=De&&(De.cost||0)>Ke,nt=De&&!Re;return t.jsxs(t.Fragment,{children:[N.length===0?t.jsx("div",{style:O.wishEmpty,children:"No unfulfilled wishes. Add some in the Bucket List section."}):t.jsx("div",{style:O.wishList,children:N.map((M,ee)=>{const ze=(M.cost||0)>Ke,$e=(De==null?void 0:De.id)===M.id;return t.jsxs("button",{onClick:()=>!ze&&q(M),disabled:ze,style:{...O.wishRow,...$e?O.wishRowOn:{},...ze?O.wishRowOver:{}},children:[t.jsx("span",{style:O.wishRank,children:ee+1}),t.jsx("span",{style:O.wishName,children:M.wish}),t.jsxs("span",{style:O.wishCost,children:[r(M.cost),ze?" · too costly":""]})]},M.id)})}),t.jsxs("div",{style:O.modalActions,children:[t.jsx("button",{onClick:()=>K(null),style:O.modalCancel,children:"Cancel"}),t.jsx("button",{onClick:hi,disabled:!nt,style:{...O.modalConfirm,...nt?{}:{opacity:.5,cursor:"not-allowed"}},children:De?`Fulfil · ${r(De.cost)}`:"Pick a wish"})]})]})})():t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:O.modalInputWrap,children:[t.jsx("span",{style:O.modalSign,children:e.symbol}),t.jsx("input",{type:"number",min:"0",step:"0.01",autoFocus:!0,placeholder:Ke.toFixed(2),value:re,onChange:N=>ve(N.target.value),style:O.modalAmt})]}),t.jsx("input",{placeholder:"What is this reward for? (required)",value:Z,onChange:N=>Y(N.target.value),onKeyDown:N=>N.key==="Enter"&&Bn(),style:O.modalReason}),(()=>{const N=parseFloat(re)>0&&!!Z.trim();return t.jsxs("div",{style:O.modalActions,children:[t.jsx("button",{onClick:()=>K(null),style:O.modalCancel,children:"Cancel"}),t.jsxs("button",{onClick:Bn,disabled:!N,style:{...O.modalConfirm,...N?{}:{opacity:.5,cursor:"not-allowed"}},children:["Confirm · ",r(Math.min(parseFloat(re)||0,Ke))]})]})})()]})]})}),t.jsx("div",{style:O.note,children:"Set rates only affect time from today onward — past time keeps the rate it was earned at."})]})}function sa({on:e,onClick:r,color:n}){return t.jsx("button",{onClick:r,title:e?"Disable — stop calculating this reward":"Enable this reward",style:{...O.toggle,background:e?n:"var(--border)",justifyContent:e?"flex-end":"flex-start"},children:t.jsx("span",{style:O.toggleKnob})})}function t1({items:e,reward:r}){const n=Math.max(1,...e.map(o=>o.value));return t.jsx("div",{style:O.tbWrap,children:e.map((o,i)=>t.jsxs("div",{style:O.tbRow,children:[t.jsx("div",{style:O.tbLbl,children:o.label}),t.jsx("div",{style:O.tbTrack,children:t.jsx("div",{style:{...O.tbBar,width:`${o.value/n*100}%`,background:o.color}})}),t.jsx("div",{style:O.tbVal,children:r(o.value)})]},i))})}const O={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},hero:{position:"relative",background:"linear-gradient(135deg,var(--accent-strong),var(--accent-2))",borderRadius:16,padding:"22px 24px",color:"#fff",marginBottom:14,textAlign:"center"},logIcon:{position:"absolute",top:12,right:12,border:"1px solid rgba(255,255,255,0.5)",background:"rgba(255,255,255,0.12)",color:"#fff",width:32,height:32,borderRadius:9,cursor:"pointer",display:"grid",placeItems:"center"},logClose:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:28,height:28,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},logNote:{fontSize:13.5,fontWeight:600,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modalCard:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"22px 22px 18px",width:360,maxWidth:"100%",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)"},logModal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"18px 18px 14px",width:440,maxWidth:"100%",maxHeight:"82vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",boxSizing:"border-box"},logModalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8,flexShrink:0},logScroll:{overflowY:"auto",display:"flex",flexDirection:"column",gap:2,paddingRight:2,minHeight:0},modalTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:4},modalSub:{fontSize:12.5,color:"var(--text-3)",fontWeight:600,marginBottom:14},modalInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:10,padding:"8px 12px",background:"var(--surface-2)",marginBottom:8},modalSign:{fontSize:16,color:"var(--text-2)",fontWeight:700},modalAmt:{border:"none",background:"none",outline:"none",flex:1,fontSize:18,fontWeight:700,fontFamily:"inherit",color:"var(--text)"},modalReason:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:14},modalActions:{display:"flex",gap:8},modalCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalConfirm:{flex:1,border:"none",background:"#C9A227",color:"#fff",padding:"10px 14px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},bucketToggleRow:{display:"inline-flex",alignItems:"center",gap:8,margin:"12px auto 0",border:"none",background:"rgba(255,255,255,0.12)",color:"#fff",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},miniToggle:{display:"flex",alignItems:"center",width:32,height:18,borderRadius:10,padding:2,flexShrink:0,transition:"background 0.15s"},miniKnob:{width:14,height:14,borderRadius:"50%",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},wishList:{display:"flex",flexDirection:"column",gap:6,maxHeight:300,overflowY:"auto",margin:"4px 0 4px"},wishRow:{display:"flex",alignItems:"center",gap:10,width:"100%",textAlign:"left",border:"1px solid var(--border)",background:"var(--surface)",borderRadius:10,padding:"10px 12px",cursor:"pointer",fontFamily:"inherit"},wishRowOn:{borderColor:"var(--accent-strong)",background:"var(--hover)",boxShadow:"0 0 0 1px var(--accent-strong)"},wishRowOver:{opacity:.5,cursor:"not-allowed"},wishRank:{fontSize:12,fontWeight:800,color:"var(--text-3)",fontFamily:"'Fraunces',Georgia,serif",flexShrink:0},wishName:{flex:1,fontSize:13.5,fontWeight:700,color:"var(--text)",minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},wishCost:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--accent-strong)",flexShrink:0},wishEmpty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"20px 0"},heroLabel:{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",opacity:.85},heroVal:{fontSize:44,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,lineHeight:1.05},heroSub:{fontSize:12.5,opacity:.9,marginTop:6},heroBtns:{display:"flex",gap:10,marginTop:16,justifyContent:"center"},heroBtnSolid:{border:"none",background:"#fff",color:"var(--accent-strong)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},heroBtnGhost:{border:"1px solid rgba(255,255,255,0.6)",background:"transparent",color:"#fff",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},btnDisabled:{opacity:.45,cursor:"not-allowed"},statRow:{display:"flex",gap:10,marginBottom:14},statCard:{flex:1,background:"var(--surface)",borderRadius:12,padding:"12px 14px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},threeDayTitle:{fontSize:13,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:84,fontSize:11.5,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap"},tbTrack:{flex:1,height:14,background:"var(--surface-2)",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:76,fontSize:11.5,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"},statVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},card:{background:"var(--surface)",borderRadius:16,padding:"18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:10,flexWrap:"wrap"},periodTotal:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text-2)"},periodRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},periodChip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},periodChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},collapseHint:{fontSize:12,fontWeight:700,color:"var(--accent)"},sectionHead:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,flexWrap:"wrap"},sectionHeadRight:{display:"flex",alignItems:"center",gap:12},collapseLink:{border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"inherit",fontSize:12,fontWeight:700,color:"var(--accent)"},cardOff:{opacity:.62},toggle:{border:"none",cursor:"pointer",width:40,height:22,borderRadius:11,padding:2,display:"flex",alignItems:"center",transition:"background 0.15s",flexShrink:0},toggleKnob:{width:18,height:18,borderRadius:"50%",background:"#fff",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"12px 0"},splitTrack:{display:"flex",height:16,borderRadius:8,overflow:"hidden",marginTop:12,marginBottom:12,border:"1px solid var(--border)"},legendRow:{display:"flex",gap:16,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:600,color:"var(--text-2)"},legendDot:{width:10,height:10,borderRadius:3,flexShrink:0},usagePieBlock:{marginTop:16,paddingTop:14,borderTop:"1px solid var(--border)"},usagePieTitle:{fontSize:12.5,fontWeight:700,color:"var(--text-2)",marginBottom:6},pieWrap:{display:"flex",alignItems:"center",gap:20,flexWrap:"wrap",marginTop:6},pieChart:{position:"relative",width:130,height:130,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:78,height:78,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:10},pieLegRow:{display:"flex",alignItems:"center",gap:8},pieLegName:{flex:1,fontSize:13.5,fontWeight:600},pieLegPct:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",width:46,textAlign:"right"},pieLegMin:{fontSize:12,color:"var(--text-3)",fontWeight:600,minWidth:64,textAlign:"right"},rows:{display:"flex",flexDirection:"column",gap:2},row:{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:"1px solid var(--border)"},dot:{width:10,height:10,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:13.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},rowMeta:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,flexShrink:0},rowAmt:{fontSize:13.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",flexShrink:0,minWidth:64,textAlign:"right"},del:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",fontSize:16,lineHeight:1,padding:"0 2px",flexShrink:0},totalRow:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:10,marginTop:4,fontSize:14,fontWeight:700},totalVal:{fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},rateActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:14},rateCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},rateSave:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},rateGrid:{display:"flex",flexDirection:"column",gap:10},rateRow:{display:"flex",alignItems:"center",gap:8},rateName:{flex:1,fontSize:14,fontWeight:600},rateInputWrap:{display:"flex",alignItems:"center",gap:3,border:"1px solid var(--border)",borderRadius:9,padding:"4px 10px",background:"var(--surface-2)"},unitSign:{fontSize:14,color:"var(--text-2)",fontWeight:600},rateInput:{border:"none",background:"none",outline:"none",width:64,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},unit:{fontSize:12,color:"var(--text-3)",fontWeight:600},note:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",fontStyle:"italic",marginTop:4}};function r1(){return t.jsx("div",{style:An.page,children:t.jsxs("div",{style:An.card,children:[t.jsxs("div",{style:An.brand,children:[t.jsx("div",{style:An.logo,children:"B"}),t.jsx("span",{style:An.brandName,children:"Anvil"})]}),t.jsx("h1",{style:An.title,children:"Welcome to Anvil"}),t.jsx("p",{style:An.sub,children:"Sign in with Google to continue."}),t.jsxs("button",{onClick:()=>F.signInWithGoogle(),style:An.googleBtn,children:[t.jsx(n1,{}),"Sign in with Google"]})]})})}function n1(){return t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[t.jsx("path",{fill:"#4285F4",d:"M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84c-.21 1.13-.85 2.09-1.81 2.73v2.27h2.92c1.71-1.57 2.69-3.88 2.69-6.64z"}),t.jsx("path",{fill:"#34A853",d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.27c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.71H.96v2.34C2.44 15.98 5.48 18 9 18z"}),t.jsx("path",{fill:"#FBBC05",d:"M3.97 10.7c-.18-.54-.28-1.11-.28-1.7s.1-1.16.28-1.7V4.96H.96A8.997 8.997 0 0 0 0 9c0 1.45.35 2.83.96 4.04l3.01-2.34z"}),t.jsx("path",{fill:"#EA4335",d:"M9 3.58c1.32 0 2.51.45 3.44 1.35l2.59-2.59C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l3.01 2.34C4.68 5.16 6.66 3.58 9 3.58z"})]})}const An={page:{minHeight:"100vh",display:"grid",placeItems:"center",background:"var(--bg)",fontFamily:"'Inter',system-ui,sans-serif",padding:20},card:{width:"100%",maxWidth:380,background:"var(--surface)",borderRadius:16,padding:"32px 28px",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",display:"flex",flexDirection:"column",textAlign:"center"},brand:{display:"flex",alignItems:"center",justifyContent:"center",gap:9,marginBottom:20},logo:{width:32,height:32,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},brandName:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},title:{fontSize:22,fontWeight:700,margin:"0 0 4px",fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},sub:{fontSize:13.5,color:"var(--text-3)",margin:"0 0 24px"},googleBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,border:"1px solid var(--border)",background:"#fff",color:"#26241F",padding:"12px",borderRadius:10,fontSize:14.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Sc=1,Ph="anvil_month_start_day";function Cc(){try{return Number(localStorage.getItem(Ph))||Sc}catch{return Sc}}function wp(e){const r=Math.min(28,Math.max(1,Number(e)||Sc));try{localStorage.setItem(Ph,String(r))}catch{}return window.dispatchEvent(new CustomEvent("anvil-month-start",{detail:r})),r}function Nh(){const[e,r]=c.useState(Cc());return c.useEffect(()=>{const n=o=>r(o.detail||Cc());return window.addEventListener("anvil-month-start",n),()=>window.removeEventListener("anvil-month-start",n)},[]),e}const Sp=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;function pr(e,r,n=0){const o=e.getFullYear(),i=e.getMonth(),a=e.getDate()>=r?i:i-1,l=new Date(o,a+n,r),d=new Date(o,a+n+1,r-1);return[Sp(l),Sp(d)]}function o1(e=600){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const Cp=["Salary","Stocks","Business","Interest","Rent","Gift","Other"],i1=["Bills","EMI","Rent","Food","Shopping","Transport","Health","Entertainment","Education","Other"],zp=["Stocks","Mutual Fund","SIP","Fixed Deposit","Gold","Real Estate","PPF/EPF","Crypto","Other"],s1={Salary:"#4C9A6B",Stocks:"#3A7CA5",Business:"#C9A227",Interest:"#8268B0",Gift:"#C2773B",Bills:"#C2536B",EMI:"#A23E57",Food:"#E08E45",Shopping:"#8268B0",Transport:"#3A7CA5",Health:"#4C9A6B",Entertainment:"#C9A227",Education:"#5B7C99",Rent:"#5B8C5A",Other:"#9A968C"},Mg=e=>s1[e]||"#9A968C",a1={Stocks:"#2F6B4F","Mutual Fund":"#3E9E6B",SIP:"#4FAE7E","Fixed Deposit":"#6BBE92",Gold:"#8ECDA8","Real Estate":"#1F5C3F","PPF/EPF":"#5BAE83",Crypto:"#7FC79E",Other:"#9AD4B3"},l1=e=>a1[e]||"#4C9A6B",ri="#3E9E6B",fn="#D1556E",rn="#3A7CA5",gd="#8268B0",Oh=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,po=Oh(new Date),d1=[{id:"month",label:"This month"},{id:"last",label:"Last month"},{id:"year",label:"This year"},{id:"all",label:"All time"}];function c1(e,r){const n=new Date;return e==="month"?pr(n,r):e==="last"?pr(n,r,-1):e==="year"?[Oh(new Date(n.getFullYear(),0,1)),po]:["0000-01-01","9999-12-31"]}function g1(){const e=no(),[r,n]=c.useState("overview"),[o,i]=c.useState([]),[s,a]=c.useState([]),[l,d]=c.useState([]),[g,h]=c.useState([]),[y,f]=c.useState([]),[E,R]=c.useState(!1),T=c.useCallback(()=>Promise.all([F.getTxns(),F.getExpenses(),F.getInvestments()]).then(([C,B,x])=>(i(C),a(B.categories),d(B.logs),h(x),F.getFixedItems())).then(f).then(()=>R(!0)).catch(()=>R(!0)),[]);c.useEffect(()=>{T()},[T]);const z=c.useMemo(()=>{const C={};return s.forEach(B=>C[B.id]=B),C},[s]),m=c.useMemo(()=>l.map(C=>{var B;return{id:`exp-${C.id}`,rawId:C.id,source:"expense",kind:"expense",category:((B=z[C.category_id])==null?void 0:B.name)||"Other",amount:C.amount,note:C.note,date:C.date}}),[l,z]),b=c.useMemo(()=>o.filter(C=>C.kind==="expense").map(C=>({...C,source:"legacy"})),[o]),u=c.useMemo(()=>o.filter(C=>C.kind==="income").map(C=>({...C,source:"legacy"})),[o]),k=c.useMemo(()=>[...u,...b,...m].sort((C,B)=>B.date.localeCompare(C.date)),[u,b,m]),j=C=>Ss(C,e.code);return t.jsxs("div",{style:S.page,children:[t.jsxs("div",{style:S.head,children:[t.jsx("div",{style:S.eyebrow,children:"Anvil · Wallet"}),t.jsx("h1",{style:S.h1,children:"Wallet"}),t.jsx("div",{style:S.subhead,children:"Your money — what comes in, what goes out, and where it's headed."})]}),t.jsx("div",{style:S.tabs,children:[["overview","Overview",gh],["money","Money",Cl],["calc","Calculators",Ly]].map(([C,B,x])=>t.jsxs("button",{onClick:()=>n(C),style:{...S.tab,...r===C?S.tabOn:{}},children:[t.jsx(x,{size:15})," ",B]},C))}),r==="overview"&&t.jsx(u1,{txns:k,investments:g,loaded:E,money:j,cur:e}),r==="money"&&t.jsx(h1,{txns:k,expCats:s,investments:g,fixedItems:y,reload:T,money:j,cur:e}),r==="calc"&&t.jsx(f1,{money:j,cur:e})]})}function u1({txns:e,investments:r,loaded:n,money:o,cur:i}){const s=Nh(),a=o1(),[l,d]=c.useState("month"),[g,h]=c1(l,s),y=c.useMemo(()=>e.filter($=>$.date>=g&&$.date<=h),[e,g,h]),f=y.filter($=>$.kind==="income"),E=y.filter($=>$.kind==="expense"),R=f.reduce(($,Q)=>$+Q.amount,0),T=E.reduce(($,Q)=>$+Q.amount,0),z=c.useMemo(()=>r.filter($=>$.date>=g&&$.date<=h),[r,g,h]),m=z.reduce(($,Q)=>$+Q.invested,0),b=T+m,u=R-b,k=r.reduce(($,Q)=>$+Q.invested,0),j=c.useMemo(()=>{const[$,Q]=pr(new Date,s),ne=Z=>Z.date>=$&&Z.date<=Q,be=e.filter(Z=>Z.kind==="income"&&ne(Z)).reduce((Z,Y)=>Z+Y.amount,0),A=e.filter(Z=>Z.kind==="expense"&&ne(Z)).reduce((Z,Y)=>Z+Y.amount,0),K=r.filter(Z=>ne(Z)).reduce((Z,Y)=>Z+Y.invested,0),re=be-A-K,ve=Math.max(1,Math.round((new Date(Q+"T00:00")-new Date(po+"T00:00"))/864e5)+1);return{remaining:re,daysLeft:ve,perDay:re/ve}},[e,r,s]),C=$=>{const Q={};return $.forEach(ne=>{Q[ne.category]=(Q[ne.category]||0)+ne.amount}),Object.entries(Q).map(([ne,be])=>({category:ne,amount:be,color:Mg(ne)})).sort((ne,be)=>be.amount-ne.amount)},B=C(E),x=c.useMemo(()=>{const $={};return z.forEach(Q=>{$[Q.kind]=($[Q.kind]||0)+Q.invested}),Object.entries($).map(([Q,ne])=>({category:Q,amount:ne,color:l1(Q)})).sort((Q,ne)=>ne.amount-Q.amount)},[z]),v=[...B,...x];return t.jsxs(t.Fragment,{children:[t.jsx("div",{style:S.presetRow,children:d1.map($=>t.jsx("button",{onClick:()=>d($.id),style:{...S.preset,...l===$.id?S.presetOn:{}},children:$.label},$.id))}),t.jsxs("div",{style:{...S.sumGrid,gridTemplateColumns:a?"repeat(2,1fr)":"repeat(4,1fr)"},children:[t.jsx(aa,{icon:t.jsx(Iy,{size:16}),label:"Income",value:o(R),color:ri}),t.jsx(aa,{icon:t.jsx(ch,{size:16}),label:"Expenses",value:o(T),color:fn}),t.jsx(aa,{icon:t.jsx(qi,{size:16}),label:"Invested",value:o(m),color:rn}),t.jsx(aa,{icon:u>=0?t.jsx(vh,{size:16}):t.jsx(qn,{size:16}),label:"Remaining",value:o(u),color:u>=0?ri:fn,sub:j.perDay>=0?`≈ ${o(j.perDay)}/day · ${j.daysLeft}d left`:`overspent · ${j.daysLeft}d left`})]}),m>0&&t.jsxs("div",{style:S.investNote,children:[t.jsx(qi,{size:13,color:rn})," ",o(m)," invested this period — counted as outgoing and deducted from what remains."]}),r.length>0&&t.jsxs("div",{style:S.card,children:[t.jsxs("div",{style:S.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(qi,{size:18,color:rn}),t.jsxs("div",{children:[t.jsx("div",{style:S.cardTitle,children:"Assets & investments"}),t.jsx("div",{style:S.cardSub,children:"Total invested across all your holdings, all time"})]})]}),t.jsx("div",{style:{...S.cardTotal,color:rn},children:o(k)})]}),t.jsx(p1,{invested:k,investments:r,money:o,cur:i})]}),n?y.length===0&&z.length===0?t.jsx("div",{style:S.card,children:t.jsxs("div",{style:S.muted,children:["No transactions in this period. Add some under the ",t.jsx("b",{children:"Money"})," tab."]})}):t.jsxs(t.Fragment,{children:[t.jsx(m1,{totalIn:R,totalOut:b}),t.jsxs("div",{style:S.twoCol,children:[t.jsx(Tp,{title:"Incoming",subtitle:"Where your money comes from",total:R,data:C(f),accent:ri,cur:i}),t.jsx(Tp,{title:"Outgoing",subtitle:"Spending + money set aside in investments",total:b,data:v,accent:fn,cur:i})]})]}):t.jsx("div",{style:S.muted,children:"Loading…"})]})}function p1({invested:e,investments:r,money:n,cur:o}){const[i,s]=c.useState(10),[a,l]=c.useState(""),[d,g]=c.useState(5);c.useEffect(()=>{F.getSetting("invest_forecast_rate").then(x=>{const v=parseFloat(x==null?void 0:x.value);!isNaN(v)&&v>0&&s(v)}).catch(()=>{}),F.getSetting("invest_forecast_stepup").then(x=>{const v=parseFloat(x==null?void 0:x.value);!isNaN(v)&&v>=0&&g(v)}).catch(()=>{}),F.getSetting("invest_forecast_monthly").then(x=>{const v=parseFloat(x==null?void 0:x.value);if(!isNaN(v)&&v>=0){l(v);return}const $=new Set((r||[]).map(Q=>(Q.date||"").slice(0,7)).filter(Boolean));$.size>0&&l(Math.round(e/$.size/100)*100)}).catch(()=>{})},[]);const h=(x,v,$=0)=>{const Q=parseFloat(v);!isNaN(Q)&&Q>=$&&F.setSetting(x,Q).catch(()=>{})},y=x=>{s(x),h("invest_forecast_rate",x,.01)},f=x=>{l(x),h("invest_forecast_monthly",x)},E=x=>{g(x),h("invest_forecast_stepup",x)},R=parseFloat(i),T=!isNaN(R)&&R>0?R:10,z=Math.max(0,parseFloat(a)||0),m=Math.max(0,parseFloat(d)||0),b=T/100/12,u=x=>{let v=e,$=z,Q=e;for(let ne=1;ne<=x;ne++)v=(v+$)*(1+b),Q+=$,ne%12===0&&($*=1+m/100);return{value:v,putIn:Q}},j=Array.from({length:10},(x,v)=>(v+1)*24).map(x=>({mo:x,...u(x)})),C=Math.max(...j.map(x=>x.value),1),B=j[j.length-1];return t.jsxs("div",{style:S.forecastWrap,children:[t.jsxs("div",{style:S.forecastHead,children:[t.jsxs("div",{children:[t.jsx("div",{style:S.forecastTitle,children:"Growth forecast"}),t.jsxs("div",{style:S.cardSub,children:[n(z),"/month",m>0?`, stepping up ${m}% yearly (${n(z*(1+m/100))}/mo from year 2)`:""]})]}),t.jsxs("div",{style:S.forecastInputs,children:[t.jsxs("label",{style:S.rateWrap,title:"How much you invest every month",children:[t.jsx("span",{style:S.rateUnit,children:o.symbol}),t.jsx("input",{type:"number",min:"0",step:"500",value:a,placeholder:"15000",onChange:x=>f(x.target.value),style:{...S.rateInput,width:76,textAlign:"left"}}),t.jsx("span",{style:S.rateUnit,children:"/ mo"})]}),t.jsxs("label",{style:S.rateWrap,title:"Yearly increase of the monthly amount",children:[t.jsx("span",{style:S.rateUnit,children:"+"}),t.jsx("input",{type:"number",min:"0",max:"100",step:"1",value:d,onChange:x=>E(x.target.value),style:{...S.rateInput,width:40}}),t.jsx("span",{style:S.rateUnit,children:"% / yr"})]}),t.jsxs("label",{style:S.rateWrap,title:"Expected annual return",children:[t.jsx("input",{type:"number",min:"1",max:"100",step:"0.5",value:i,onChange:x=>y(x.target.value),style:S.rateInput}),t.jsx("span",{style:S.rateUnit,children:"% / yr"})]})]})]}),t.jsx("div",{style:S.forecastBars,children:j.map((x,v)=>t.jsxs("div",{style:S.fBarCol,children:[t.jsx("div",{style:S.fBarVal,children:yc(x.value,o.code)}),t.jsx("div",{style:S.fBarTrack,children:t.jsx("div",{style:{...S.fBar,height:`${Math.max(6,x.value/C*100)}%`,opacity:.45+.55*(v/(j.length-1))}})}),t.jsxs("div",{style:S.fBarLbl,children:[x.mo/12,"y"]})]},x.mo))}),t.jsxs("div",{style:S.forecastNote,children:["In 20 years at ",T,"% p.a. → ",t.jsx("b",{children:n(B.value)})," (you'd put in ",n(B.putIn),", growth adds ",n(Math.max(0,B.value-B.putIn)),")"]})]})}function aa({icon:e,wideIcon:r,label:n,value:o,color:i,style:s,wide:a,sub:l}){return a?t.jsxs("div",{style:{...S.sumCard,...S.sumCardWide,...s},children:[t.jsx("div",{style:{...S.sumIconWide,color:i,background:i+"1A"},children:r||e}),t.jsxs("div",{style:S.sumWideText,children:[t.jsx("div",{style:S.sumLabel,children:n}),t.jsx("div",{style:{...S.sumVal,color:i,marginTop:0},children:o}),l&&t.jsx("div",{style:S.sumSub,children:l})]})]}):t.jsxs("div",{style:{...S.sumCard,...s},children:[t.jsx("div",{style:{...S.sumIcon,color:i,background:i+"1A"},children:e}),t.jsx("div",{style:S.sumLabel,children:n}),t.jsx("div",{style:{...S.sumVal,color:i},children:o}),l&&t.jsx("div",{style:S.sumSub,children:l})]})}function Tp({title:e,subtitle:r,total:n,data:o,accent:i,cur:s}){const[a,l]=c.useState(null);let d=0;const g=o.map(f=>{const E=n>0?d/n*100:0;d+=f.amount;const R=n>0?d/n*100:0;return{...f,start:E,end:R,color:f.color||Mg(f.category),pct:n>0?f.amount/n*100:0}}),h=a!=null?g[a]:null,y=g.length===1;return t.jsxs("div",{style:S.card,children:[t.jsxs("div",{style:S.cardTitleRow,children:[t.jsxs("div",{children:[t.jsx("div",{style:{...S.cardTitle,color:i},children:e}),t.jsx("div",{style:S.cardSub,children:r})]}),t.jsx("div",{style:{...S.cardTotal,color:i},children:Ss(n,s.code)})]}),o.length===0?t.jsx("div",{style:S.muted,children:"Nothing logged."}):t.jsxs("div",{style:S.pieWrap,children:[t.jsxs("div",{style:S.pieChart,onMouseLeave:()=>l(null),children:[t.jsx("svg",{viewBox:"0 0 120 120",style:S.pieSvg,children:g.map((f,E)=>t.jsx("path",{d:b1(f.start,f.end,E===a,y),fill:f.color,onMouseEnter:()=>l(E),style:{cursor:"pointer",transition:"transform 0.15s, filter 0.15s",filter:E===a?"brightness(1.08)":"none"}},f.category))}),t.jsx("div",{style:{...S.pieHole,...h?{transform:"translate(-50%,-50%) scale(1.06)",boxShadow:`0 0 0 4px ${h.color}33`}:{}},children:h?t.jsxs(t.Fragment,{children:[t.jsx("span",{style:{...S.pieHoleVal,color:h.color,fontSize:13},children:yc(h.amount,s.code)}),t.jsxs("span",{style:S.pieHoleLbl,children:[Math.round(h.pct),"% · ",h.category]})]}):t.jsxs(t.Fragment,{children:[t.jsx("span",{style:S.pieHoleVal,children:yc(n,s.code)}),t.jsx("span",{style:S.pieHoleLbl,children:"total"})]})})]}),t.jsx("div",{style:S.pieLegend,children:g.map((f,E)=>t.jsxs("div",{style:{...S.legendRow,...E===a?S.legendRowOn:{}},onMouseEnter:()=>l(E),onMouseLeave:()=>l(null),children:[t.jsx("span",{style:{...S.dot,background:f.color}}),t.jsx("span",{style:S.legendName,children:f.category}),t.jsxs("span",{style:S.legendPct,children:[Math.round(f.pct),"%"]}),t.jsx("span",{style:S.legendAmt,children:Ss(f.amount,s.code)})]},f.category))})]})]})}function b1(e,r,n,o){const d=n?6:0,g=(C,B,x=0,v=0)=>{const $=C/100*2*Math.PI-Math.PI/2;return[60+x+B*Math.cos($),60+v+B*Math.sin($)]},h=(e+r)/2/100*2*Math.PI-Math.PI/2,y=o?0:Math.cos(h)*d,f=o?0:Math.sin(h)*d;if(r-e>=99.999)return`M ${60+y} ${60+f-58} A 58 58 0 1 1 ${60+y-.01} ${60+f-58} L ${60+y-.01} ${60+f-35} A 35 35 0 1 0 ${60+y} ${60+f-35} Z`;const[E,R]=g(e,58,y,f),[T,z]=g(r,58,y,f),[m,b]=g(r,35,y,f),[u,k]=g(e,35,y,f),j=r-e>50?1:0;return`M ${E} ${R} A 58 58 0 ${j} 1 ${T} ${z} L ${m} ${b} A 35 35 0 ${j} 0 ${u} ${k} Z`}function m1({totalIn:e,totalOut:r}){const n=e-r,o=e>0?n/e:0,i=e===0?0:Math.max(0,Math.min(100,Math.round(50+o*100)));let s,a,l;e===0?(s="No income logged",a="#9A968C",l="Add your income to see your financial health."):o>=.3?(s="Excellent",a="#3E9E6B",l="You're saving 30%+ of income — keep investing the surplus."):o>=.2?(s="Healthy",a="#4C9A6B",l="Solid savings rate. Consider automating a SIP with the surplus."):o>=.1?(s="Okay",a="#C9A227",l="Decent, but aim for 20%+. Trim your biggest expense category."):o>=0?(s="Tight",a="#C2773B",l="You're saving very little. Review recurring bills and EMIs."):(s="Overspending",a="#D1556E",l="You're spending more than you earn. Cut back to avoid debt.");const d=e>0?Math.min(100,Math.round(r/e*100)):0;return t.jsxs("div",{style:S.card,children:[t.jsxs("div",{style:S.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(t0,{size:18,color:a}),t.jsxs("div",{children:[t.jsx("div",{style:S.cardTitle,children:"Financial health"}),t.jsx("div",{style:S.cardSub,children:"Based on your savings rate this period"})]})]}),t.jsxs("div",{style:{textAlign:"right"},children:[t.jsx("div",{style:{...S.healthScore,color:a},children:e===0?"—":i}),t.jsx("div",{style:{...S.healthStatus,color:a},children:s})]})]}),t.jsx("div",{style:S.gaugeTrack,children:t.jsx("div",{style:{...S.gaugeFill,width:`${e===0?0:i}%`,background:a}})}),t.jsxs("div",{style:S.healthStats,children:[t.jsxs("div",{style:S.healthStat,children:[t.jsxs("span",{style:S.healthStatV,children:[e>0?Math.round(o*100):0,"%"]}),t.jsx("span",{style:S.healthStatL,children:"Savings rate"})]}),t.jsxs("div",{style:S.healthStat,children:[t.jsxs("span",{style:S.healthStatV,children:[d,"%"]}),t.jsx("span",{style:S.healthStatL,children:"of income spent"})]})]}),t.jsx("div",{style:{...S.tip,borderColor:a+"55",background:a+"12",color:a},children:l})]})}function h1({txns:e,expCats:r,investments:n,fixedItems:o,reload:i,money:s,cur:a}){const[l,d]=c.useState(""),[g,h]=c.useState("Salary"),[y,f]=c.useState(po),[E,R]=c.useState(""),[T,z]=c.useState(null),[m,b]=c.useState(null),[u,k]=c.useState(null),{deleteItem:j,toasts:C,handleUndo:B,handleDismiss:x}=yr(F.deleteTxn,F.restoreTxn,i),{deleteItem:v,toasts:$,handleUndo:Q,handleDismiss:ne}=yr(F.deleteExpenseLog,F.restoreExpenseLog,i),{deleteItem:be,toasts:A,handleUndo:K,handleDismiss:re}=yr(F.deleteInvestment,F.restoreInvestment,i),ve=()=>{var D;return k({id:null,kind:"expense",name:"",amount:"",category_id:((D=r[0])==null?void 0:D.id)||"",invest_kind:"Stocks",note:""})},Z=D=>{var w;return k({id:D.id,kind:D.kind,name:D.name,amount:String(D.amount),category_id:D.category_id||((w=r[0])==null?void 0:w.id)||"",invest_kind:D.invest_kind||"Stocks",note:D.note||""})},Y=async()=>{const D=u.name.trim(),w=parseFloat(u.amount)||0;if(!D||w<=0)return;const ie={kind:u.kind,name:D,amount:w,note:u.note.trim(),...u.kind==="expense"?{category_id:Number(u.category_id)}:{invest_kind:u.invest_kind}};u.id?await F.updateFixedItem(u.id,ie):await F.createFixedItem(ie),k(null),i()},ce=async D=>{window.confirm(`Stop "${D.name}" from auto-posting each month? Past entries it already created will stay.`)&&(await F.deleteFixedItem(D.id),i())},J=async D=>{await F.updateFixedItem(D.id,{active:!D.active}),i()},I=()=>b({id:null,name:"",kind:"Stocks",invested:"",current_value:"",date:po,note:""}),W=D=>b({id:D.id,name:D.name,kind:D.kind,invested:String(D.invested),current_value:String(D.current_value),date:D.date,note:D.note||""}),_=async()=>{const D=m.name.trim(),w=parseFloat(m.invested)||0,ie=parseFloat(m.current_value)||0;if(!D)return;const me={name:D,kind:m.kind,invested:w,current_value:ie,note:m.note.trim(),date:m.date};m.id?await F.updateInvestment(m.id,me):await F.createInvestment(me),b(null),i()},P=n.reduce((D,w)=>D+w.invested,0),de=async()=>{const D=parseFloat(l);!D||D<=0||(await F.createTxn({kind:"income",category:g,amount:D,note:E.trim(),date:y}),d(""),R(""),i())},ge=D=>z({id:D.id,rawId:D.rawId,source:D.source,kind:D.kind,amount:String(D.amount),category:D.category,date:D.date,note:D.note||""}),De=(T==null?void 0:T.source)==="expense"?r.map(D=>D.name):(T==null?void 0:T.kind)==="income"?Cp:i1,q=async()=>{const D=parseFloat(T.amount);if(!(!D||D<=0)){if(T.source==="expense"){const w=r.find(ie=>ie.name===T.category);await F.updateExpenseLog(T.rawId,{amount:D,note:T.note.trim(),date:T.date,...w?{category_id:w.id}:{}})}else await F.updateTxn(T.id,{kind:T.kind,category:T.category,amount:D,note:T.note.trim(),date:T.date});z(null),i()}},oe=D=>{D.source==="expense"?v(D.rawId,D.category):j(D.id,D.category)},G=c.useMemo(()=>{const D={};return e.forEach(w=>{(D[w.date]=D[w.date]||[]).push(w)}),Object.entries(D).sort((w,ie)=>ie[0].localeCompare(w[0]))},[e]),le=D=>new Date(D+"T00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:S.card,children:[t.jsx("div",{style:S.cardTitle,children:"Add income"}),t.jsxs("div",{style:S.cardSub,children:["Expenses are added from the ",t.jsx("b",{children:"Expenses"})," section and show up here automatically."]}),t.jsxs("div",{style:S.formGrid,children:[t.jsx("input",{type:"number",inputMode:"decimal",placeholder:"Amount",value:l,onChange:D=>d(D.target.value),onKeyDown:D=>D.key==="Enter"&&de(),style:S.input,autoFocus:!0}),t.jsx(nr,{value:g,options:Cp,onChange:h}),t.jsx("input",{type:"date",value:y,max:po,onChange:D=>f(D.target.value),style:S.input})]}),t.jsx("input",{placeholder:"Note (optional)",value:E,onChange:D=>R(D.target.value),onKeyDown:D=>D.key==="Enter"&&de(),style:{...S.input,marginTop:8}}),t.jsxs("button",{onClick:de,style:{...S.addBtn,background:ri},children:[t.jsx(at,{size:15})," Add income"]})]}),t.jsxs("div",{style:S.card,children:[t.jsxs("div",{style:S.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(v0,{size:18,color:gd}),t.jsxs("div",{children:[t.jsx("div",{style:S.cardTitle,children:"Fixed items"}),t.jsx("div",{style:S.cardSub,children:"EMI, rent, SIP… auto-posted at the start of every billing cycle"})]})]}),t.jsxs("button",{onClick:ve,style:{...S.invAddBtn,background:gd},children:[t.jsx(at,{size:14})," Add"]})]}),o.length===0?t.jsx("div",{style:S.muted,children:"No fixed items yet — add an EMI or rent to auto-post it every cycle."}):t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:o.map(D=>{var ie;const w=D.kind==="expense"?((ie=r.find(me=>me.id===D.category_id))==null?void 0:ie.name)||"Other":D.invest_kind||"Other";return t.jsxs("div",{style:{...S.invRow,opacity:D.active?1:.5},children:[t.jsx("span",{style:{...S.txnDot,background:D.kind==="expense"?fn:rn}}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:S.txnCat,children:D.name}),t.jsxs("div",{style:S.txnNote,children:[D.kind==="expense"?"Fixed expense":"Fixed investment"," · ",w]})]}),t.jsxs("span",{style:{...S.txnAmt,color:D.kind==="expense"?fn:rn},children:[s(D.amount),"/mo"]}),t.jsx("button",{onClick:()=>J(D),style:S.delBtn,title:D.active?"Pause":"Resume",children:D.active?t.jsx(yh,{size:13}):t.jsx(el,{size:13})}),t.jsx("button",{onClick:()=>Z(D),style:S.delBtn,children:t.jsx(St,{size:13})}),t.jsx("button",{onClick:()=>ce(D),style:S.delBtn,children:t.jsx(Be,{size:14})})]},D.id)})})]}),t.jsxs("div",{style:S.card,children:[t.jsxs("div",{style:S.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(qi,{size:18,color:rn}),t.jsxs("div",{children:[t.jsx("div",{style:S.cardTitle,children:"Investments"}),t.jsx("div",{style:S.cardSub,children:"Asset generation — money you've set aside"})]})]}),t.jsxs("button",{onClick:I,style:S.invAddBtn,children:[t.jsx(at,{size:14})," Add"]})]}),n.length===0?t.jsx("div",{style:S.muted,children:"No investments tracked yet."}):t.jsxs(t.Fragment,{children:[t.jsx("div",{style:S.healthStats,children:t.jsxs("div",{style:S.healthStat,children:[t.jsx("span",{style:S.healthStatV,children:s(P)}),t.jsx("span",{style:S.healthStatL,children:"Total invested"})]})}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginTop:4},children:n.map(D=>t.jsxs("div",{style:S.invRow,children:[t.jsx("span",{style:{...S.txnDot,background:rn}}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:S.txnCat,children:D.name}),t.jsxs("div",{style:S.txnNote,children:[D.kind," · ",D.date]})]}),t.jsx("div",{style:S.txnAmt,children:s(D.invested)}),t.jsx("button",{onClick:()=>W(D),style:S.delBtn,children:t.jsx(St,{size:13})}),t.jsx("button",{onClick:()=>be(D.id,D.name),style:S.delBtn,children:t.jsx(Be,{size:14})})]},D.id))})]})]}),t.jsxs("div",{style:S.card,children:[t.jsx("div",{style:S.cardTitle,children:"History"}),G.length===0?t.jsx("div",{style:S.muted,children:"No transactions yet."}):t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:G.map(([D,w])=>t.jsxs("div",{children:[t.jsx("div",{style:S.dateHead,children:le(D)}),w.map(ie=>(T==null?void 0:T.id)===ie.id?t.jsxs("div",{style:S.editTxn,children:[t.jsxs("div",{style:S.formGrid,children:[t.jsx("input",{type:"number",inputMode:"decimal",value:T.amount,onChange:me=>z({...T,amount:me.target.value}),style:S.input}),t.jsx(nr,{value:T.category,options:De,onChange:me=>z({...T,category:me})}),t.jsx("input",{type:"date",value:T.date,max:po,onChange:me=>z({...T,date:me.target.value}),style:S.input})]}),t.jsx("input",{placeholder:"Note (optional)",value:T.note,onChange:me=>z({...T,note:me.target.value}),onKeyDown:me=>me.key==="Enter"&&q(),style:{...S.input,marginTop:8}}),t.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[t.jsxs("button",{onClick:()=>z(null),style:S.editCancel,children:[t.jsx(Be,{size:14})," Cancel"]}),t.jsxs("button",{onClick:q,style:{...S.addBtn,marginTop:0,flex:1,background:T.kind==="income"?ri:fn},children:[t.jsx(Oe,{size:15})," Save"]})]})]},ie.id):t.jsxs("div",{style:S.txnRow,children:[t.jsx("span",{style:{...S.txnDot,background:Mg(ie.category)}}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:S.txnCat,children:ie.category}),ie.note&&t.jsx("div",{style:S.txnNote,children:ie.note})]}),t.jsxs("span",{style:{...S.txnAmt,color:ie.kind==="income"?ri:fn},children:[ie.kind==="income"?"+":"−",s(ie.amount)]}),t.jsx("button",{onClick:()=>ge(ie),style:S.delBtn,children:t.jsx(St,{size:13})}),t.jsx("button",{onClick:()=>oe(ie),style:S.delBtn,children:t.jsx(Be,{size:14})})]},ie.id))]},D))})]}),m&&t.jsx("div",{style:S.overlay,onClick:()=>b(null),children:t.jsxs("div",{style:S.modal,onClick:D=>D.stopPropagation(),children:[t.jsxs("div",{style:S.modalHead,children:[t.jsx("span",{style:S.modalTitle,children:m.id?"Edit investment":"New investment"}),t.jsx("button",{onClick:()=>b(null),style:S.iconBtnPlain,children:t.jsx(Be,{size:16})})]}),t.jsx("label",{style:S.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:m.name,onChange:D=>b(w=>({...w,name:D.target.value})),placeholder:"e.g. Nifty Index Fund, HDFC FD…",style:S.input}),t.jsx("label",{style:S.label,children:"Type"}),t.jsx(nr,{value:m.kind,options:zp,onChange:D=>b(w=>({...w,kind:D}))}),t.jsxs("div",{style:S.formGrid,children:[t.jsxs("div",{children:[t.jsx("label",{style:S.label,children:"Invested"}),t.jsx("input",{type:"number",inputMode:"decimal",value:m.invested,onChange:D=>b(w=>({...w,invested:D.target.value})),placeholder:"0",style:S.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:S.label,children:"Current value"}),t.jsx("input",{type:"number",inputMode:"decimal",value:m.current_value,onChange:D=>b(w=>({...w,current_value:D.target.value})),placeholder:"0",style:S.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:S.label,children:"Date"}),t.jsx("input",{type:"date",value:m.date,max:po,onChange:D=>b(w=>({...w,date:D.target.value})),style:S.input})]})]}),t.jsx("label",{style:S.label,children:"Note (optional)"}),t.jsx("input",{value:m.note,onChange:D=>b(w=>({...w,note:D.target.value})),placeholder:"Folio no., broker, etc.",style:S.input}),t.jsxs("div",{style:S.modalActions,children:[t.jsx("button",{onClick:()=>b(null),style:S.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:_,disabled:!m.name.trim(),style:{...S.saveBtn,...m.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(Oe,{size:15})," ",m.id?"Save":"Add"]})]})]})}),u&&t.jsx("div",{style:S.overlay,onClick:()=>k(null),children:t.jsxs("div",{style:S.modal,onClick:D=>D.stopPropagation(),children:[t.jsxs("div",{style:S.modalHead,children:[t.jsx("span",{style:S.modalTitle,children:u.id?"Edit fixed item":"New fixed item"}),t.jsx("button",{onClick:()=>k(null),style:S.iconBtnPlain,children:t.jsx(Be,{size:16})})]}),t.jsxs("div",{style:S.kindToggle,children:[t.jsxs("button",{onClick:()=>k(D=>({...D,kind:"expense"})),style:{...S.kindBtn,...u.kind==="expense"?{background:fn,color:"#fff",borderColor:fn}:{}},children:[t.jsx(ch,{size:15})," Expense"]}),t.jsxs("button",{onClick:()=>k(D=>({...D,kind:"investment"})),style:{...S.kindBtn,...u.kind==="investment"?{background:rn,color:"#fff",borderColor:rn}:{}},children:[t.jsx(qi,{size:15})," Investment"]})]}),t.jsx("label",{style:S.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:u.name,onChange:D=>k(w=>({...w,name:D.target.value})),placeholder:u.kind==="expense"?"e.g. Home loan EMI, Rent…":"e.g. Monthly SIP — Nifty Index",style:S.input}),t.jsxs("div",{style:S.formGrid,children:[t.jsxs("div",{children:[t.jsx("label",{style:S.label,children:"Amount / month"}),t.jsx("input",{type:"number",inputMode:"decimal",value:u.amount,onChange:D=>k(w=>({...w,amount:D.target.value})),placeholder:"0",style:S.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:S.label,children:u.kind==="expense"?"Category":"Type"}),u.kind==="expense"?t.jsx(nr,{value:u.category_id,options:r.map(D=>({value:D.id,label:D.name})),onChange:D=>k(w=>({...w,category_id:D}))}):t.jsx(nr,{value:u.invest_kind,options:zp,onChange:D=>k(w=>({...w,invest_kind:D}))})]})]}),t.jsx("label",{style:S.label,children:"Note (optional)"}),t.jsx("input",{value:u.note,onChange:D=>k(w=>({...w,note:D.target.value})),placeholder:"Loan account no., etc.",style:S.input}),t.jsx("p",{style:S.fixedHint,children:"Posts automatically at the start of every billing cycle (set in Settings → Currency). This one posts immediately for the current cycle when you save."}),t.jsxs("div",{style:S.modalActions,children:[t.jsx("button",{onClick:()=>k(null),style:S.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:Y,disabled:!u.name.trim()||!(parseFloat(u.amount)>0),style:{...S.saveBtn,background:gd,...!u.name.trim()||!(parseFloat(u.amount)>0)?{opacity:.5,cursor:"not-allowed"}:{}},children:[t.jsx(Oe,{size:15})," ",u.id?"Save":"Add"]})]})]})}),t.jsx(vr,{toasts:C,onUndo:B,onDismiss:x}),t.jsx(vr,{toasts:$,onUndo:Q,onDismiss:ne}),t.jsx(vr,{toasts:A,onUndo:K,onDismiss:re})]})}function f1({money:e,cur:r}){return t.jsxs(t.Fragment,{children:[t.jsx(x1,{money:e,cur:r}),t.jsx(v1,{money:e,cur:r})]})}function fo({label:e,value:r,set:n,min:o,max:i,step:s,suffix:a}){return t.jsxs("div",{style:S.field,children:[t.jsxs("div",{style:S.fieldTop,children:[t.jsx("span",{style:S.fieldLabel,children:e}),t.jsxs("div",{style:S.fieldInputWrap,children:[t.jsx("input",{type:"number",value:r,onChange:l=>n(l.target.value),style:S.fieldInput}),a&&t.jsx("span",{style:S.fieldSuffix,children:a})]})]}),t.jsx("input",{type:"range",min:o,max:i,step:s,value:r,onChange:l=>n(l.target.value),style:S.range})]})}function x1({money:e,cur:r}){const[n,o]=c.useState(3e4),[i,s]=c.useState(12),[a,l]=c.useState(15),{invested:d,futureValue:g,gains:h,yearly:y}=c.useMemo(()=>{const E=Math.max(0,parseFloat(n)||0),R=Math.max(0,parseFloat(i)||0),T=Math.max(0,Math.min(60,parseInt(a)||0)),z=R/12/100,m=j=>j<=0?0:z===0?E*j:E*((Math.pow(1+z,j)-1)/z)*(1+z),b=[];for(let j=1;j<=T;j++)b.push({year:j,invested:E*12*j,value:m(j*12)});const u=m(T*12),k=E*12*T;return{invested:k,futureValue:u,gains:u-k,yearly:b}},[n,i,a]),f=Math.max(1,...y.map(E=>E.value));return t.jsxs("div",{style:S.card,children:[t.jsx("div",{style:S.cardTitleRow,children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(vh,{size:18,color:"#3A7CA5"}),t.jsxs("div",{children:[t.jsx("div",{style:S.cardTitle,children:"SIP projection"}),t.jsx("div",{style:S.cardSub,children:"Mutual fund / SIP future value"})]})]})}),t.jsx(fo,{label:"Monthly investment",value:n,set:o,min:500,max:5e5,step:500,suffix:r.symbol}),t.jsx(fo,{label:"Expected return (p.a.)",value:i,set:s,min:1,max:30,step:.5,suffix:"%"}),t.jsx(fo,{label:"Time period",value:a,set:l,min:1,max:40,step:1,suffix:"yrs"}),t.jsxs("div",{style:S.resultHero,children:[t.jsx("div",{style:S.resultLabel,children:"Projected wealth"}),t.jsx("div",{style:{...S.resultVal,color:"#3A7CA5"},children:e(g)})]}),t.jsxs("div",{style:S.splitRow,children:[t.jsxs("div",{style:S.splitItem,children:[t.jsx("span",{style:S.splitV,children:e(d)}),t.jsx("span",{style:S.splitL,children:"Invested"})]}),t.jsxs("div",{style:S.splitItem,children:[t.jsx("span",{style:{...S.splitV,color:"#3E9E6B"},children:e(h)}),t.jsx("span",{style:S.splitL,children:"Est. returns"})]})]}),y.length>0&&t.jsxs("div",{style:S.chartWrap,children:[t.jsx("div",{style:S.chartBars,children:y.map(E=>t.jsx("div",{style:S.chartCol,title:`Year ${E.year}: ${e(E.value)}`,children:t.jsx("div",{style:{...S.chartStack,height:`${E.value/f*100}%`},children:t.jsx("div",{style:{...S.chartGain,height:`${(1-E.invested/E.value)*100}%`}})})},E.year))}),t.jsxs("div",{style:S.chartAxis,children:[t.jsx("span",{children:"Yr 1"}),t.jsxs("span",{style:{marginLeft:"auto"},children:["Yr ",y.length]})]}),t.jsxs("div",{style:S.legend,children:[t.jsxs("span",{style:S.legendItem,children:[t.jsx("span",{style:{...S.legendDot,background:"#9DBFD6"}})," Invested"]}),t.jsxs("span",{style:S.legendItem,children:[t.jsx("span",{style:{...S.legendDot,background:"#3E9E6B"}})," Returns"]})]})]})]})}function Ip(e,r,n,o=0,i=0){let s=Math.max(0,e-i),a=0,l=0,d=i;const g=1200;for(;s>.01&&l<g;){const h=s*r;let y=n+o,f=y-h;if(f<=0)return{months:1/0,totalInterest:1/0,totalPaid:1/0};f>s&&(f=s,y=s+h),s-=f,a+=h,d+=y,l++}return{months:l,totalInterest:a,totalPaid:d}}const Bp=e=>{if(!isFinite(e))return"—";const r=Math.floor(e/12),n=e%12;return(r?`${r}y `:"")+`${n}m`},y1=e=>{if(!isFinite(e))return"—";const r=new Date;return r.setMonth(r.getMonth()+e),r.toLocaleDateString("en-US",{month:"short",year:"numeric"})};function v1({money:e,cur:r}){const[n,o]=c.useState(2e6),[i,s]=c.useState(9),[a,l]=c.useState(20),[d,g]=c.useState(5e5),[h,y]=c.useState("once"),[f,E]=c.useState("tenure"),R=c.useMemo(()=>{const u=Math.max(0,parseFloat(n)||0),k=Math.max(0,parseFloat(i)||0)/12/100,j=Math.max(1,Math.round((parseFloat(a)||0)*12)),C=k===0?u/j:u*k*Math.pow(1+k,j)/(Math.pow(1+k,j)-1);return{P:u,i:k,n:j,emi:C,totalPay:C*j,totalInterest:C*j-u}},[n,i,a]),T=h==="monthly"?"tenure":f,z=c.useMemo(()=>{const{P:u,i:k,n:j,emi:C,totalInterest:B}=R,x=Math.max(0,parseFloat(d)||0);if(x<=0)return null;let v=C,$=j,Q=B,ne=R.totalPay;if(h==="once"&&T==="emi"){const be=Math.max(0,u-x);v=k===0?be/j:be*k*Math.pow(1+k,j)/(Math.pow(1+k,j)-1),$=j,Q=v*j-be,ne=x+v*j}else if(h==="once"){const be=Ip(u,k,C,0,x);$=be.months,Q=be.totalInterest,ne=be.totalPaid}else{const be=Ip(u,k,C,x,0);$=be.months,Q=be.totalInterest,ne=be.totalPaid}return{newEMI:v,newMonths:$,newInterest:Q,totalPaid:ne,interestSaved:Math.max(0,B-Q),monthsSaved:Math.max(0,j-(isFinite($)?$:j))}},[R,d,h,T]),m=R.totalPay>0?R.P/R.totalPay*100:0,b=h==="once"?Math.max(1e5,Math.round(R.P)):Math.max(5e4,Math.round(R.emi*3));return t.jsxs("div",{style:S.card,children:[t.jsx("div",{style:S.cardTitleRow,children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(i0,{size:18,color:"#C2536B"}),t.jsxs("div",{children:[t.jsx("div",{style:S.cardTitle,children:"EMI calculator"}),t.jsx("div",{style:S.cardSub,children:"Loan / mortgage monthly payment"})]})]})}),t.jsx(fo,{label:"Loan amount",value:n,set:o,min:5e4,max:5e7,step:5e4,suffix:r.symbol}),t.jsx(fo,{label:"Interest rate (p.a.)",value:i,set:s,min:1,max:24,step:.1,suffix:"%"}),t.jsx(fo,{label:"Tenure",value:a,set:l,min:1,max:30,step:1,suffix:"yrs"}),t.jsxs("div",{style:S.resultHero,children:[t.jsx("div",{style:S.resultLabel,children:"Monthly EMI"}),t.jsx("div",{style:{...S.resultVal,color:"#C2536B"},children:e(R.emi)})]}),t.jsxs("div",{style:S.emiSplitTrack,children:[t.jsx("div",{style:{width:`${m}%`,background:"#5B7C99",height:"100%"}}),t.jsx("div",{style:{width:`${100-m}%`,background:"#C2536B",height:"100%"}})]}),t.jsxs("div",{style:S.splitRow,children:[t.jsxs("div",{style:S.splitItem,children:[t.jsx("span",{style:{...S.splitV,color:"#5B7C99"},children:e(R.P)}),t.jsx("span",{style:S.splitL,children:"Principal"})]}),t.jsxs("div",{style:S.splitItem,children:[t.jsx("span",{style:{...S.splitV,color:"#C2536B"},children:e(R.totalInterest)}),t.jsx("span",{style:S.splitL,children:"Total interest"})]}),t.jsxs("div",{style:S.splitItem,children:[t.jsx("span",{style:S.splitV,children:e(R.totalPay)}),t.jsx("span",{style:S.splitL,children:"Total payable"})]})]}),t.jsx("div",{style:S.subDivider}),t.jsx("div",{style:S.subTitle,children:"Prepayment planner"}),t.jsx("div",{style:S.cardSub,children:"See what an extra payment does to your loan."}),t.jsx("div",{style:{marginTop:14},children:t.jsx(fo,{label:"Prepayment amount",value:d,set:g,min:0,max:b,step:h==="once"?25e3:1e3,suffix:r.symbol})}),t.jsxs("div",{style:S.segGroup,children:[t.jsx("span",{style:S.segLbl,children:"Type"}),t.jsxs("div",{style:S.segRow,children:[t.jsx(la,{label:"One-time",on:h==="once",onClick:()=>y("once")}),t.jsx(la,{label:"Every month",on:h==="monthly",onClick:()=>y("monthly")})]})]}),t.jsxs("div",{style:S.segGroup,children:[t.jsx("span",{style:S.segLbl,children:"Strategy"}),t.jsxs("div",{style:S.segRow,children:[t.jsx(la,{label:"Reduce tenure",on:T==="tenure",onClick:()=>E("tenure")}),t.jsx(la,{label:"Reduce EMI",on:T==="emi",disabled:h==="monthly",onClick:()=>E("emi")})]})]}),h==="monthly"&&t.jsx("div",{style:S.note,children:"An extra monthly payment always shortens the tenure. Switch to a one-time prepayment to reduce your EMI instead."}),z?t.jsxs("div",{style:S.cmpCard,children:[t.jsxs("div",{style:S.cmpRow,children:[t.jsx("span",{style:S.cmpLbl,children:"New EMI"}),t.jsxs("span",{style:S.cmpVal,children:[e(z.newEMI),z.newEMI<R.emi-1&&t.jsxs("span",{style:S.cmpWas,children:[" was ",e(R.emi)]})]})]}),t.jsxs("div",{style:S.cmpRow,children:[t.jsx("span",{style:S.cmpLbl,children:"New tenure"}),t.jsxs("span",{style:S.cmpVal,children:[Bp(z.newMonths)," ",t.jsxs("span",{style:S.cmpWas,children:["· paid off ",y1(z.newMonths)]})]})]}),t.jsxs("div",{style:S.cmpRow,children:[t.jsx("span",{style:S.cmpLbl,children:"Total interest"}),t.jsx("span",{style:S.cmpVal,children:e(z.newInterest)})]}),t.jsxs("div",{style:S.cmpRow,children:[t.jsx("span",{style:S.cmpLbl,children:"Total payable"}),t.jsx("span",{style:S.cmpVal,children:e(z.totalPaid)})]}),t.jsxs("div",{style:S.saveRow,children:["You save ",e(z.interestSaved)," in interest",z.monthsSaved>0?` · ${Bp(z.monthsSaved)} sooner`:""]})]}):t.jsx("div",{style:S.muted,children:"Enter a prepayment amount to see the impact."})]})}function la({label:e,on:r,onClick:n,disabled:o}){return t.jsx("button",{onClick:o?void 0:n,disabled:o,style:{...S.seg,...r?S.segOn:{},...o?S.segDisabled:{}},children:e})}const S={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},tabs:{display:"flex",gap:7,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},presetRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},preset:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},presetOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},sumGrid:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:16},sumCard:{background:"var(--surface)",borderRadius:14,padding:"14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},sumCardWide:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,padding:"16px 14px"},sumIcon:{width:30,height:30,borderRadius:9,display:"grid",placeItems:"center",marginBottom:8},sumIconWide:{width:48,height:48,borderRadius:12,display:"grid",placeItems:"center",flexShrink:0},sumWideText:{textAlign:"center"},sumLabel:{fontSize:11.5,color:"var(--text-3)",fontWeight:600},sumVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2,letterSpacing:"-0.01em",wordBreak:"break-word"},sumSub:{fontSize:10.5,color:"var(--text-3)",fontWeight:600,marginTop:3},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},cardTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},twoCol:{display:"grid",gridTemplateColumns:"1fr",gap:0},dot:{width:10,height:10,borderRadius:3,flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieSvg:{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"visible"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",transition:"transform 0.15s, box-shadow 0.15s",pointerEvents:"none",textAlign:"center",padding:4,boxSizing:"border-box"},pieHoleVal:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:160,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8,borderRadius:8,padding:"3px 5px",margin:"-3px -5px",cursor:"default",transition:"background 0.15s"},legendRowOn:{background:"var(--surface-2)"},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},investNote:{display:"flex",alignItems:"center",gap:6,fontSize:11.5,color:"var(--text-3)",marginBottom:14,marginTop:-4},healthScore:{fontSize:32,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1},healthStatus:{fontSize:12.5,fontWeight:700,marginTop:2},gaugeTrack:{height:10,background:"var(--surface-2)",borderRadius:6,overflow:"hidden",marginBottom:14},gaugeFill:{height:"100%",borderRadius:6,transition:"width 0.4s"},healthStats:{display:"flex",gap:24,marginBottom:12},healthStat:{display:"flex",flexDirection:"column"},healthStatV:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},healthStatL:{fontSize:11,color:"var(--text-3)",fontWeight:600},forecastWrap:{marginTop:4,paddingTop:14,borderTop:"1px solid var(--border)"},forecastHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:10,flexWrap:"wrap",marginBottom:14},forecastInputs:{display:"flex",gap:8,flexWrap:"wrap"},forecastTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},rateWrap:{display:"inline-flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:9,padding:"5px 10px",background:"var(--surface-2)"},rateInput:{border:"none",background:"none",outline:"none",width:52,fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",textAlign:"right"},rateUnit:{fontSize:11.5,color:"var(--text-3)",fontWeight:600},forecastBars:{display:"flex",alignItems:"stretch",gap:8},fBarCol:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4,minWidth:0},fBarVal:{fontSize:10.5,fontWeight:700,color:"var(--text-2)",whiteSpace:"nowrap"},fBarTrack:{width:"100%",maxWidth:44,height:110,display:"flex",alignItems:"flex-end"},fBar:{width:"100%",background:"#3A7CA5",borderRadius:"6px 6px 2px 2px",transition:"height 0.35s ease"},fBarLbl:{fontSize:10.5,fontWeight:700,color:"var(--text-3)"},forecastNote:{fontSize:11.5,color:"var(--text-3)",marginTop:12,textAlign:"center"},tip:{fontSize:12.5,lineHeight:1.5,padding:"10px 12px",borderRadius:10,border:"1px solid",fontWeight:500},kindToggle:{display:"flex",gap:8,marginBottom:12},kindBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},formGrid:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},input:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},addBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},invAddBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"7px 13px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",flexShrink:0},invRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},fixedHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.5,marginTop:10,marginBottom:0},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},dateHead:{fontSize:11,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8},txnRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},txnDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},txnCat:{fontSize:13.5,fontWeight:600},txnNote:{fontSize:11.5,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},txnAmt:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},editTxn:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:12,margin:"6px 0"},editCancel:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},field:{marginBottom:16},fieldTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},fieldLabel:{fontSize:13,fontWeight:600,color:"var(--text-2)"},fieldInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:8,padding:"5px 10px",background:"var(--surface-2)"},fieldInput:{border:"none",background:"none",outline:"none",width:90,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},fieldSuffix:{fontSize:12,color:"var(--text-3)",fontWeight:600},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},resultHero:{textAlign:"center",padding:"14px 0 6px"},resultLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},resultVal:{fontSize:34,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,wordBreak:"break-word"},splitRow:{display:"flex",gap:10,marginTop:10},splitItem:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",background:"var(--surface-2)",borderRadius:10,padding:"10px 6px"},splitV:{fontSize:14.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",wordBreak:"break-word"},splitL:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:2},chartWrap:{marginTop:18},chartBars:{display:"flex",alignItems:"flex-end",gap:3,height:90},chartCol:{flex:1,height:"100%",display:"flex",alignItems:"flex-end"},chartStack:{width:"100%",background:"#9DBFD6",borderRadius:"3px 3px 0 0",minHeight:2,position:"relative",display:"flex",flexDirection:"column",justifyContent:"flex-start"},chartGain:{width:"100%",background:"#3E9E6B",borderRadius:"3px 3px 0 0"},chartAxis:{display:"flex",fontSize:10,color:"var(--text-3)",fontWeight:600,marginTop:6},legend:{display:"flex",gap:16,justifyContent:"center",marginTop:10},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)",fontWeight:600},legendDot:{width:10,height:10,borderRadius:3},emiSplitTrack:{display:"flex",height:12,borderRadius:6,overflow:"hidden",marginTop:16,border:"1px solid var(--border)"},subDivider:{height:1,background:"var(--border)",margin:"20px 0 14px"},subTitle:{fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},segGroup:{marginBottom:12},segLbl:{fontSize:12,fontWeight:600,color:"var(--text-3)",display:"block",marginBottom:6},segRow:{display:"flex",gap:8},seg:{flex:1,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},segOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},segDisabled:{opacity:.4,cursor:"not-allowed"},note:{fontSize:12,lineHeight:1.5,color:"var(--text-3)",background:"var(--surface-2)",borderRadius:9,padding:"9px 11px",marginBottom:12},cmpCard:{background:"var(--surface-2)",borderRadius:12,padding:"12px 14px",marginTop:4},cmpRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"6px 0",borderBottom:"1px solid var(--border)",gap:10},cmpLbl:{fontSize:12.5,color:"var(--text-2)",fontWeight:600},cmpVal:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",textAlign:"right"},cmpWas:{fontSize:11,color:"var(--text-3)",fontWeight:500,fontFamily:"'Inter',system-ui,sans-serif"},saveRow:{marginTop:12,background:"rgba(62,158,107,0.12)",color:"#3E9E6B",borderRadius:9,padding:"10px 12px",fontSize:13,fontWeight:700,textAlign:"center"}},zc=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],ud={Monday:"Mon",Tuesday:"Tue",Wednesday:"Wed",Thursday:"Thu",Friday:"Fri",Saturday:"Sat",Sunday:"Sun"},_i=()=>zc[(new Date().getDay()+6)%7],un={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},Rp=Object.keys(un),pd=21,Ep="kickstart_tags",j1=e=>{if(!e)return"";const r=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(r))return r;const n=r.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},k1=e=>{if(!e)return"";const r=e.trim().match(/instagram\.com\/(?:reels?|p|tv)\/([A-Za-z0-9_-]+)/);return r?r[1]:""},Ap=e=>{const r=k1(e);if(r)return{platform:"instagram",id:r};const n=j1(e);return n?{platform:"youtube",id:n}:null},Fp=e=>{if(!e||!String(e).trim())return null;const r=String(e).split(":").map(n=>parseInt(n.trim(),10));return r.some(n=>isNaN(n)||n<0)?null:r.reduce((n,o)=>n*60+o,0)},da=e=>{if(e==null)return"";const r=Math.max(0,e|0);return`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`},w1=e=>e.platform==="instagram"?`https://www.instagram.com/p/${e.youtube_id}/embed/`:`https://www.youtube.com/embed/${e.youtube_id}?start=${e.start_sec||0}`+(e.end_sec?`&end=${e.end_sec}`:"")+"&autoplay=1&rel=0",S1=()=>({id:null,url:"",title:"",start:"",end:"",days:[_i()],pillars:[],customs:[]});function C1(){const[e,r]=c.useState([]),[n,o]=c.useState([]),[i,s]=c.useState(!1),[a,l]=c.useState({type:"day",value:_i()}),[d,g]=c.useState(null),[h,y]=c.useState(null),[f,E]=c.useState(""),R=c.useCallback(async()=>{try{const[A,K]=await Promise.all([F.getKickstart(),F.getSetting(Ep)]);r(A),o(Array.isArray(K==null?void 0:K.value)?K.value:[])}catch{}s(!0)},[]);c.useEffect(()=>{R()},[R]);const{deleteItem:T,toasts:z,handleUndo:m,handleDismiss:b}=yr(F.deleteKickstart,F.restoreKickstart,R);c.useEffect(()=>{if(!h)return;const A=e.find(Y=>Y.id===h);if(!A)return;const K=A.end_sec?Math.max(1,A.end_sec-(A.start_sec||0)):1/0;let re=0;const ve=10,Z=setInterval(()=>{if(document.hidden)return;const Y=K-re;if(Y<=0){clearInterval(Z);return}const ce=Math.min(ve,Y);re+=ce,F.addScreenTime("kickstart",Math.round(ce)).catch(()=>{})},ve*1e3);return()=>clearInterval(Z)},[h,e]);const u=A=>{o(A),F.setSetting(Ep,A).catch(()=>{})},k=()=>{const A=f.trim();!A||n.length>=pd||n.includes(A)||(u([...n,A]),g(K=>K&&!K.customs.includes(A)?{...K,customs:[...K.customs,A]}:K),E(""))},j=A=>u(n.filter(K=>K!==A)),C=(A,K)=>g(re=>({...re,[A]:re[A].includes(K)?re[A].filter(ve=>ve!==K):[...re[A],K]})),B=A=>g({id:A.id,url:A.platform==="instagram"?`https://www.instagram.com/reel/${A.youtube_id}/`:`https://youtu.be/${A.youtube_id}`,title:A.title,start:da(A.start_sec),end:A.end_sec?da(A.end_sec):"",days:[...A.days],pillars:[...A.pillars],customs:[...A.customs]}),x=async()=>{const A=Ap(d.url);if(!A||d.days.length===0||!d.title.trim())return;const K=A.platform==="instagram",re={youtube_id:A.id,platform:A.platform,title:d.title.trim(),start_sec:K?0:Fp(d.start)||0,end_sec:K?null:Fp(d.end),days:d.days,pillars:d.pillars,customs:d.customs};d.id?await F.updateKickstart(d.id,re):await F.createKickstart(re),g(null),R()},v=c.useMemo(()=>e.filter(A=>a.type==="all"?!0:a.type==="day"?A.days.includes(a.value):a.type==="pillar"?A.pillars.includes(a.value):a.type==="custom"?A.customs.includes(a.value):!0),[e,a]),$=(A,K)=>a.type===A&&a.value===K,Q=d?Ap(d.url):null,ne=d?[!Q&&"a valid YouTube or Instagram link",!d.title.trim()&&"a title",d.days.length===0&&"at least one day"].filter(Boolean):[],be=!!d&&ne.length===0;return t.jsxs("div",{style:Ce.page,children:[t.jsxs("div",{style:Ce.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:Ce.eyebrow,children:"Anvil · Kickstart"}),t.jsx("h1",{style:Ce.h1,children:"Kickstart"}),t.jsxs("div",{style:Ce.subhead,children:["Your motivation hub — the right push for ",_i(),"."]})]}),!d&&t.jsxs("button",{onClick:()=>g(S1()),style:Ce.addBtn,children:[t.jsx(at,{size:15})," Add video"]})]}),d&&t.jsxs("div",{style:Ce.card,children:[t.jsx("div",{style:Ce.cardTitle,children:d.id?"Edit video":"Add video"}),t.jsx("input",{placeholder:"YouTube or Instagram link",value:d.url,onChange:A=>g({...d,url:A.target.value}),style:Ce.input,autoFocus:!0}),d.url&&!Q&&t.jsx("div",{style:Ce.warn,children:"Couldn't find a YouTube or Instagram video in that link."}),Q&&t.jsx("div",{style:Ce.platformRow,children:Q.platform==="instagram"?t.jsxs(t.Fragment,{children:[t.jsx(Vu,{size:13,color:"#C2536B"})," Instagram reel detected"]}):t.jsxs(t.Fragment,{children:[t.jsx(Ih,{size:13,color:"#C2536B"})," YouTube video detected"]})}),t.jsx("input",{placeholder:"Title (required)",value:d.title,onChange:A=>g({...d,title:A.target.value}),style:{...Ce.input,marginTop:8}}),(Q==null?void 0:Q.platform)==="instagram"?t.jsx("div",{style:Ce.hint,children:"Instagram clips always play in full — trimming isn't supported by Instagram embeds."}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:Ce.trimRow,children:[t.jsx(wh,{size:15,color:"var(--text-3)"}),t.jsxs("label",{style:Ce.trimField,children:[t.jsx("span",{style:Ce.trimLbl,children:"Start"}),t.jsx("input",{placeholder:"0:30",value:d.start,onChange:A=>g({...d,start:A.target.value}),style:Ce.trimInput})]}),t.jsx("span",{style:Ce.trimArrow,children:"→"}),t.jsxs("label",{style:Ce.trimField,children:[t.jsx("span",{style:Ce.trimLbl,children:"End"}),t.jsx("input",{placeholder:"end (optional)",value:d.end,onChange:A=>g({...d,end:A.target.value}),style:Ce.trimInput})]})]}),t.jsx("div",{style:Ce.hint,children:"Only this trimmed part plays. Use m:ss (e.g. 1:30). Leave End blank to play to the end."})]}),t.jsxs("div",{style:Ce.tagBlock,children:[t.jsxs("div",{style:Ce.tagLabel,children:["Days ",t.jsx("span",{style:Ce.req,children:"required"})]}),t.jsx("div",{style:Ce.chipRow,children:zc.map(A=>t.jsx("button",{onClick:()=>C("days",A),style:{...Ce.chip,...d.days.includes(A)?Ce.chipOnDark:{}},children:ud[A]},A))})]}),t.jsxs("div",{style:Ce.tagBlock,children:[t.jsxs("div",{style:Ce.tagLabel,children:["Pillars ",t.jsx("span",{style:Ce.opt,children:"optional"})]}),t.jsx("div",{style:Ce.chipRow,children:Rp.map(A=>{const K=d.pillars.includes(A);return t.jsxs("button",{onClick:()=>C("pillars",A),style:{...Ce.chip,...K?{background:un[A],color:"#fff",borderColor:un[A]}:{}},children:[t.jsx("span",{style:{...Ce.dot,background:K?"#fff":un[A]}}),A]},A)})})]}),t.jsxs("div",{style:Ce.tagBlock,children:[t.jsxs("div",{style:Ce.tagLabel,children:["Custom tags ",t.jsxs("span",{style:Ce.opt,children:["optional · ",n.length,"/",pd]})]}),t.jsxs("div",{style:Ce.chipRow,children:[n.map(A=>t.jsxs("span",{style:{...Ce.chip,...d.customs.includes(A)?Ce.chipOnAccent:{},paddingRight:4},children:[t.jsx("button",{onClick:()=>C("customs",A),style:Ce.chipInner,children:A}),t.jsx("button",{onClick:()=>j(A),style:Ce.chipX,title:"Delete tag",children:t.jsx(Be,{size:11})})]},A)),n.length===0&&t.jsx("span",{style:Ce.muted,children:"No custom tags yet."})]}),n.length<pd&&t.jsxs("div",{style:Ce.newTagRow,children:[t.jsx("input",{placeholder:"New custom tag…",value:f,onChange:A=>E(A.target.value),onKeyDown:A=>A.key==="Enter"&&k(),style:{...Ce.input,padding:"7px 10px"}}),t.jsx("button",{onClick:k,style:Ce.smallBtn,children:t.jsx(at,{size:14})})]})]}),!be&&t.jsxs("div",{style:Ce.warn,children:["Add ",ne.join(", ")," to save."]}),t.jsxs("div",{style:Ce.formActions,children:[t.jsxs("button",{onClick:()=>g(null),style:Ce.cancelBtn,children:[t.jsx(Be,{size:14})," Cancel"]}),t.jsxs("button",{onClick:x,disabled:!be,style:{...Ce.saveBtn,...be?{}:Ce.saveDisabled},children:[t.jsx(Oe,{size:15})," ",d.id?"Save":"Add video"]})]})]}),t.jsxs("div",{style:Ce.filterCard,children:[t.jsx("button",{onClick:()=>l({type:"all"}),style:{...Ce.fChip,...a.type==="all"?Ce.fChipOnDark:{}},children:"All"}),t.jsx("span",{style:Ce.fDivider}),zc.map(A=>t.jsxs("button",{onClick:()=>l({type:"day",value:A}),style:{...Ce.fChip,...$("day",A)?Ce.fChipOnDark:{},...A===_i()?Ce.fToday:{}},children:[ud[A],A===_i()?" ·":""]},A)),t.jsx("span",{style:Ce.fDivider}),Rp.map(A=>t.jsxs("button",{onClick:()=>l({type:"pillar",value:A}),style:{...Ce.fChip,...$("pillar",A)?{background:un[A],color:"#fff",borderColor:un[A]}:{}},children:[t.jsx("span",{style:{...Ce.dot,background:$("pillar",A)?"#fff":un[A]}}),A]},A)),n.length>0&&t.jsx("span",{style:Ce.fDivider}),n.map(A=>t.jsxs("button",{onClick:()=>l({type:"custom",value:A}),style:{...Ce.fChip,...$("custom",A)?Ce.fChipOnAccent:{}},children:[t.jsx(Wi,{size:11})," ",A]},A))]}),i?v.length===0?t.jsx("div",{style:Ce.empty,children:e.length===0?"No videos yet — add your first motivation clip.":"No videos for this tag."}):t.jsx("div",{style:Ce.grid,children:v.map(A=>t.jsxs("div",{style:Ce.videoCard,children:[t.jsx("div",{style:{...Ce.thumbWrap,...A.platform==="instagram"&&h===A.id?Ce.thumbWrapInsta:{}},children:h===A.id?t.jsx("iframe",{src:w1(A),title:A.title||A.youtube_id,style:Ce.iframe,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):A.platform==="instagram"?t.jsxs("button",{onClick:()=>y(A.id),style:{...Ce.thumbBtn,...Ce.instaThumb},children:[t.jsx(Vu,{size:34,color:"#fff"}),t.jsx("span",{style:Ce.instaLabel,children:"Instagram reel"}),t.jsx("span",{style:Ce.playOverlay,children:t.jsx(el,{size:22,color:"#fff",fill:"#fff"})})]}):t.jsxs("button",{onClick:()=>y(A.id),style:Ce.thumbBtn,children:[t.jsx("img",{src:`https://img.youtube.com/vi/${A.youtube_id}/hqdefault.jpg`,alt:"",style:Ce.thumb}),t.jsx("span",{style:Ce.playOverlay,children:t.jsx(el,{size:22,color:"#fff",fill:"#fff"})}),t.jsxs("span",{style:Ce.trimBadge,children:[da(A.start_sec),A.end_sec?` – ${da(A.end_sec)}`:"+"]})]})}),t.jsxs("div",{style:Ce.videoBody,children:[t.jsx("div",{style:Ce.videoTitle,children:A.title||"Untitled clip"}),t.jsxs("div",{style:Ce.tagWrap,children:[A.days.map(K=>t.jsx("span",{style:Ce.dayTag,children:ud[K]},K)),A.pillars.map(K=>t.jsx("span",{style:{...Ce.pillTag,color:un[K]||"var(--text-2)",borderColor:un[K]||"var(--border)"},children:K},K)),A.customs.map(K=>t.jsx("span",{style:Ce.customTag,children:K},K))]}),t.jsxs("div",{style:Ce.cardActions,children:[t.jsx("button",{onClick:()=>B(A),style:Ce.iconBtn,title:"Edit",children:t.jsx(St,{size:13})}),t.jsx("button",{onClick:()=>T(A.id,A.title||"video"),style:Ce.iconBtn,title:"Delete",children:t.jsx(Be,{size:14})})]})]})]},A.id))}):t.jsx("div",{style:Ce.muted,children:"Loading…"}),t.jsx(vr,{toasts:z,onUndo:m,onDismiss:b})]})}const Ce={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:1e3,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},warn:{fontSize:11.5,color:"#C2773B",marginTop:5,fontWeight:600},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:6,lineHeight:1.4},platformRow:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)",fontWeight:600,marginTop:5},trimRow:{display:"flex",alignItems:"flex-end",gap:10,marginTop:10},trimField:{display:"flex",flexDirection:"column",gap:4,flex:1},trimLbl:{fontSize:11,color:"var(--text-2)",fontWeight:600},trimInput:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},trimArrow:{color:"var(--text-3)",paddingBottom:9},tagBlock:{marginTop:14},tagLabel:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},req:{fontSize:10,fontWeight:700,color:"#C2536B",textTransform:"uppercase",marginLeft:6},opt:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",marginLeft:6},chipRow:{display:"flex",gap:6,flexWrap:"wrap"},chip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},chipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},chipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},chipInner:{border:"none",background:"none",color:"inherit",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,padding:0},chipX:{border:"none",background:"rgba(0,0,0,0.12)",color:"inherit",cursor:"pointer",display:"grid",placeItems:"center",borderRadius:"50%",width:16,height:16,padding:0},newTagRow:{display:"flex",gap:6,marginTop:8,maxWidth:280},smallBtn:{border:"none",background:"var(--accent)",color:"#fff",width:34,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},dot:{width:8,height:8,borderRadius:"50%",flexShrink:0,display:"inline-block"},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"var(--accent)",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},filterCard:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:12,marginBottom:18},fChip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},fChipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},fChipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},fToday:{borderColor:"var(--accent)",borderWidth:2},fDivider:{width:1,alignSelf:"stretch",background:"var(--border)",margin:"0 2px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:14},videoCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 9",background:"#000"},thumbWrapInsta:{aspectRatio:"9 / 14"},thumbBtn:{border:"none",padding:0,margin:0,cursor:"pointer",width:"100%",height:"100%",position:"relative",display:"block",background:"#000"},instaThumb:{background:"linear-gradient(135deg, #833AB4, #E1306C 55%, #F77737)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:6},instaLabel:{color:"rgba(255,255,255,0.9)",fontSize:12,fontWeight:700,letterSpacing:"0.04em"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center",background:"rgba(0,0,0,0.28)"},trimBadge:{position:"absolute",bottom:8,right:8,background:"rgba(0,0,0,0.75)",color:"#fff",fontSize:11,fontWeight:700,padding:"2px 7px",borderRadius:6,fontFamily:"'Fraunces',Georgia,serif"},iframe:{width:"100%",height:"100%",border:"none",display:"block"},videoBody:{padding:"12px 13px",display:"flex",flexDirection:"column",gap:8},videoTitle:{fontSize:14,fontWeight:700},tagWrap:{display:"flex",gap:5,flexWrap:"wrap"},dayTag:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:8},pillTag:{fontSize:10,fontWeight:700,border:"1px solid",borderRadius:8,padding:"2px 7px"},customTag:{fontSize:10,fontWeight:700,color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"2px 7px",borderRadius:8},cardActions:{display:"flex",gap:4,justifyContent:"flex-end"},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},Hh=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Dp=()=>Hh(new Date),Wp=(e,r)=>{const n=new Date(e+"T00:00:00");return n.setDate(n.getDate()+r),Hh(n)},Mp=e=>new Date(e+"T00:00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"}),z1=e=>{if(!e)return"";const r=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(r))return r;const n=r.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},T1=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:a,height:l}=i;a>l&&a>900?(l=l*900/a,a=900):l>900&&(a=a*900/l,l=900);const d=document.createElement("canvas");d.width=a,d.height=l,d.getContext("2d").drawImage(i,0,0,a,l),r(d.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)});function I1(){const[e,r]=c.useState([]),[n,o]=c.useState(!1),[i,s]=c.useState(null),[a,l]=c.useState(!1),[d,g]=c.useState({title:"",image:""}),[h,y]=c.useState(""),[f,E]=c.useState(!1),[R,T]=c.useState(null),z=c.useCallback(async()=>{try{r(await F.getGoldenGoals())}catch{}o(!0)},[]);c.useEffect(()=>{z()},[z]);const{deleteItem:m,toasts:b,handleUndo:u,handleDismiss:k}=yr(F.deleteGolden,F.restoreGolden,z);c.useEffect(()=>{const v=()=>F.getSetting("golden_music").then($=>y(z1(($==null?void 0:$.value)||""))).catch(()=>{});return v(),window.addEventListener("focus",v),()=>window.removeEventListener("focus",v)},[]);const j=async()=>{if(!d.title.trim())return;const v=await F.createGolden({title:d.title.trim(),image:d.image});g({title:"",image:""}),l(!1),await z(),s(v.id)},C=async(v,$)=>{var ne;const Q=(ne=v.target.files)==null?void 0:ne[0];if(Q)try{$(await T1(Q))}catch{}},B=e.filter(v=>!v.achieved),x=e.filter(v=>v.achieved);return i?t.jsxs("div",{style:se.page,children:[t.jsx(D1,{musicId:h,on:f}),t.jsx(A1,{goalId:i,onBack:()=>s(null),onReload:z,onCelebrate:(v,$)=>T({title:v,days:$}),pickImage:C,musicId:h,setMusicId:y,musicOn:f,setMusicOn:E}),R&&t.jsx(F1,{data:R,onClose:()=>T(null)})]}):t.jsxs("div",{style:se.page,children:[t.jsxs("div",{style:se.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:se.eyebrow,children:"Anvil · Golden Book"}),t.jsx("h1",{style:se.h1,children:"Golden Book"}),t.jsx("div",{style:se.subhead,children:"Write your dreams into being — a little every day."})]}),!a&&t.jsxs("button",{onClick:()=>l(!0),style:se.addBtn,children:[t.jsx(at,{size:15})," New dream"]})]}),a&&t.jsxs("div",{style:se.card,children:[t.jsx("div",{style:se.cardTitle,children:"Manifest a new dream"}),t.jsx("textarea",{autoFocus:!0,placeholder:"Write your dream as if it's already true…",value:d.title,onChange:v=>g({...d,title:v.target.value}),style:se.textarea}),t.jsxs("label",{style:se.photoPick,children:[d.image?t.jsx("img",{src:d.image,alt:"",style:se.photoPreview}):t.jsxs("span",{style:se.photoEmpty,children:[t.jsx(Sl,{size:18})," Add a photo"]}),t.jsx("input",{type:"file",accept:"image/*",onChange:v=>C(v,$=>g({...d,image:$})),style:{display:"none"}})]}),t.jsxs("div",{style:se.formActions,children:[t.jsxs("button",{onClick:()=>{l(!1),g({title:"",image:""})},style:se.cancelBtn,children:[t.jsx(Be,{size:14})," Cancel"]}),t.jsxs("button",{onClick:j,disabled:!d.title.trim(),style:{...se.saveBtn,...d.title.trim()?{}:se.saveDisabled},children:[t.jsx(Oe,{size:15})," Create"]})]})]}),n?t.jsxs(t.Fragment,{children:[B.length===0&&x.length===0&&!a&&t.jsx("div",{style:se.empty,children:"No dreams yet. Add your first one and revisit it daily."}),B.length>0&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:se.sectionTitle,children:[t.jsx(To,{size:15,color:"#C9A227"})," Manifesting ",t.jsx("span",{style:se.badge,children:B.length})]}),t.jsx("div",{style:se.grid,children:B.map(v=>t.jsx($p,{g:v,onOpen:()=>s(v.id),onDelete:()=>m(v.id,v.title)},v.id))})]}),x.length>0&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{...se.sectionTitle,marginTop:22},children:[t.jsx(qr,{size:15,color:"#4C9A6B"})," Manifested ",t.jsx("span",{style:se.badge,children:x.length})]}),t.jsx("div",{style:se.grid,children:x.map(v=>t.jsx($p,{g:v,onOpen:()=>s(v.id),onDelete:()=>m(v.id,v.title),achieved:!0},v.id))})]})]}):t.jsx("div",{style:se.muted,children:"Loading…"}),t.jsx(vr,{toasts:b,onUndo:u,onDismiss:k})]})}const Tc=[{key:"morning",label:"Morning",time:"6 AM – 12 PM",Icon:zh,color:"#E0883B"},{key:"noon",label:"Noon",time:"12 – 6 PM",Icon:S0,color:"#C9A227"},{key:"night",label:"Night",time:"6 PM – 2 AM",Icon:g0,color:"#6B6FB0"}],Lp=e=>{if(e<31)return`${e} day${e===1?"":"s"}`;const r=Math.floor(e/365),n=Math.floor(e%365/30),o=e%365%30,i=[];return r&&i.push(`${r}y`),n&&i.push(`${n}mo`),o&&i.push(`${o}d`),i.join(" ")},_p="tesla369_reminders";function B1({g:e,onChanged:r,musicId:n,setMusicId:o,musicOn:i,setMusicOn:s}){const[a,l]=c.useState(""),[d,g]=c.useState(!1),[h,y]=c.useState(!1),[f,E]=c.useState(()=>localStorage.getItem(_p)==="1"),R=e.t369,T=(e.t369_affirmation||"").trim();if(E1(f&&!!T,R,e.title),!R)return null;const{window:z,targets:m,counts:b,current_streak:u,best_streak:k,min_streak:j,min_reached:C,day_complete:B}=R,x=(b.morning||0)+(b.noon||0)+(b.night||0),v=m.morning+m.noon+m.night,$=async()=>{if(T&&a.trim()===T&&z){y(!0);try{r(await F.logTesla369(e.id)),l("")}catch(K){alert(K.message||"Could not log this write.")}finally{y(!1)}}},Q=async()=>{y(!0);try{r(await F.undoTesla369(e.id))}catch{}finally{y(!1)}},ne=async()=>{if(!f&&!await R1()){alert("Enable notifications in your browser to get 369 reminders.");return}const K=!f;E(K),localStorage.setItem(_p,K?"1":"0")},be=a.trim()===T&&T!=="",A=z&&(b[z]||0)>=m[z];return t.jsxs("div",{style:se.tCard,children:[t.jsxs("div",{style:se.tHead,children:[t.jsxs("div",{style:se.tTitleWrap,children:[t.jsxs("span",{style:se.tBadge,children:[t.jsx(Ag,{size:14})," 369"]}),t.jsxs("div",{children:[t.jsx("div",{style:se.tTitle,children:"369 Method"}),t.jsx("div",{style:se.tSub,children:"Write it 3× morning · 6× noon · 9× night."})]})]}),t.jsxs("div",{style:se.tHeadBtns,children:[t.jsx(Gh,{musicId:n,musicOn:i,setMusicOn:s}),t.jsxs("button",{onClick:ne,style:{...se.tRemBtn,...f?se.tRemOn:{}},title:f?"Reminders on":"Turn on reminders",children:[f?t.jsx(Cg,{size:14}):t.jsx(Ey,{size:14})," ",f?"Reminders on":"Remind me"]})]})]}),t.jsxs("div",{style:se.tStreakRow,children:[t.jsxs("div",{style:se.tStreakBox,children:[t.jsxs("div",{style:se.tStreakLabel,children:[t.jsx(Cn,{size:13,color:"#C2773B"})," Current streak"]}),t.jsx("div",{style:se.tStreakVal,children:Lp(u)}),C?t.jsxs("div",{style:{...se.tStreakHint,color:"#4C9A6B"},children:["✓ ",j,"-day minimum met — keep going until it manifests"]}):t.jsxs("div",{style:se.tStreakHint,children:["Day ",u," of ",j," minimum"]}),!C&&t.jsx("div",{style:se.tProgTrack,children:t.jsx("div",{style:{...se.tProgFill,width:`${Math.min(100,u/j*100)}%`}})})]}),t.jsxs("div",{style:se.tStreakBox,children:[t.jsxs("div",{style:se.tStreakLabel,children:[t.jsx(qr,{size:13,color:"#C9A227"})," All-time best"]}),t.jsx("div",{style:se.tStreakVal,children:Lp(k)}),t.jsxs("div",{style:se.tStreakHint,children:["Today: ",x,"/",v," written ",B?"✓":""]})]})]}),T?t.jsxs(t.Fragment,{children:[t.jsx("div",{style:se.tWindows,children:Tc.map(({key:K,label:re,time:ve,Icon:Z,color:Y})=>{const ce=b[K]||0,J=m[K],I=z===K,W=ce>=J;return t.jsxs("div",{style:{...se.tWindow,...I?{border:`1px solid ${Y}`,boxShadow:`0 0 0 2px ${Y}22`}:{}},children:[t.jsxs("div",{style:se.tWindowHead,children:[t.jsx(Z,{size:15,color:Y}),t.jsx("span",{style:se.tWindowLabel,children:re}),I&&t.jsx("span",{style:{...se.tNow,color:Y},children:"now"})]}),t.jsx("div",{style:se.tWindowTime,children:ve}),t.jsx("div",{style:se.tDots,children:Array.from({length:J}).map((_,P)=>t.jsx("span",{style:{...se.tDot,...P<ce?{background:Y,borderColor:Y}:{}}},P))}),t.jsxs("div",{style:{...se.tCount,...W?{color:Y}:{}},children:[ce,"/",J,W?" ✓":""]})]},K)})}),t.jsx("div",{style:se.tWriteBox,children:z?A?t.jsxs("div",{style:se.tDoneMsg,children:["✓ ",Tc.find(K=>K.key===z).label," complete. ",B?"All 18 done today! 🔥":"Next window unlocks ahead."]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{style:se.tNote,children:"✍️ Type it out by hand — no copy-pasting. The act of writing is the point."}),t.jsx("textarea",{value:a,onChange:K=>l(K.target.value),onPaste:K=>{K.preventDefault(),g(!0),setTimeout(()=>g(!1),2500)},onDrop:K=>K.preventDefault(),placeholder:"Type your affirmation here…",style:{...se.writeArea,...be?{border:"1px solid #4C9A6B"}:{}}}),d&&t.jsx("div",{style:se.tPasteWarn,children:"Pasting is disabled — please type it."}),t.jsxs("div",{style:se.tWriteActions,children:[t.jsxs("button",{onClick:Q,disabled:h||(b[z]||0)===0,style:se.tUndoBtn,title:"Undo last write",children:[t.jsx(Th,{size:14})," Undo"]}),t.jsxs("button",{onClick:$,disabled:h||!be,style:{...se.writeSave,flex:1,...be?{}:se.saveDisabled},children:[t.jsx(Oe,{size:15})," ",be?"Log this write":"Type it to log"]})]})]}):t.jsx("div",{style:se.tClosed,children:"Writing windows: 6 AM–12 PM, 12–6 PM, 6 PM–2 AM. Come back during a window."})})]}):t.jsx("div",{style:se.tClosed,children:"Set a 369 affirmation above to start writing."})]})}async function R1(){return"Notification"in window?Notification.permission==="granted"?!0:Notification.permission==="denied"?!1:await Notification.requestPermission()==="granted":!1}function E1(e,r,n){const o=c.useRef({});c.useEffect(()=>{if(!e||!r)return;const i=()=>{var E;if(Notification.permission!=="granted")return;const a=r.window;if(!a)return;const l=r.counts||{},d=r.targets||{};if((l[a]||0)>=(d[a]||0))return;const g=r.today,h=`369-${n||""}-${g}-${a}`;if(o.current[h])return;o.current[h]=!0;const y=((E=Tc.find(R=>R.key===a))==null?void 0:E.label)||"",f=(d[a]||0)-(l[a]||0);try{new Notification("369 — time to write ✍️",{body:`${n?`"${n}" · `:""}${y} window: ${f} more to go. Type your affirmation.`,tag:h})}catch{}};i();const s=setInterval(i,60*1e3);return()=>clearInterval(s)},[e,r,n])}function $p({g:e,onOpen:r,onDelete:n,achieved:o}){return t.jsxs("div",{style:{...se.goalCard,...o?{opacity:.96}:{},position:"relative"},children:[t.jsxs("button",{onClick:r,style:se.goalCardBtn,children:[t.jsxs("div",{style:se.thumbWrap,children:[e.image?t.jsx("img",{src:e.image,alt:"",style:se.thumb}):t.jsx("div",{style:se.thumbEmpty,children:t.jsx(To,{size:26,color:"var(--text-3)"})}),o&&t.jsx("span",{style:se.stamp,children:"✦ Manifested"})]}),t.jsxs("div",{style:se.goalBody,children:[t.jsx("div",{style:se.goalTitle,children:e.title}),t.jsxs("div",{style:se.goalMeta,children:[o?t.jsxs("span",{style:{...se.metaPill,color:"#4C9A6B",background:"rgba(76,154,107,0.12)"},children:[t.jsx(qr,{size:12})," ",e.days_to_manifest!=null?`in ${e.days_to_manifest} day${e.days_to_manifest===1?"":"s"}`:"done"]}):t.jsxs("span",{style:{...se.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[t.jsx(Cn,{size:12})," ",e.streak," day streak"]}),t.jsxs("span",{style:se.metaDim,children:[e.total_days," entr",e.total_days===1?"y":"ies"]})]})]})]}),t.jsx("button",{onClick:i=>{i.stopPropagation(),window.confirm(`Delete "${e.title}"?`)&&n()},style:se.cardDelBtn,title:"Delete dream",children:t.jsx(ci,{size:14})})]})}function A1({goalId:e,onBack:r,onReload:n,onCelebrate:o,pickImage:i,musicId:s,setMusicId:a,musicOn:l,setMusicOn:d}){const[g,h]=c.useState(null),[y,f]=c.useState({}),[E,R]=c.useState(Dp()),[T,z]=c.useState(""),[m,b]=c.useState(null),[u,k]=c.useState(null),j=Dp(),C=c.useCallback(Y=>{h(Y);const ce={};(Y.entries||[]).forEach(J=>{ce[J.date]=J.text}),f(ce),z(ce[j]||"")},[j]),B=c.useCallback(async()=>{C(await F.getGoldenGoal(e))},[e,C]);if(c.useEffect(()=>{B()},[B]),c.useEffect(()=>{if(!(g!=null&&g.t369_enabled))return;const Y=setInterval(()=>{F.getGoldenGoal(e).then(C).catch(()=>{})},60*1e3);return()=>clearInterval(Y)},[g==null?void 0:g.t369_enabled,e,C]),!g)return t.jsx("div",{style:se.muted,children:"Loading…"});const x=E===j,v=E>g.created_date,$=E<j,Q=async()=>{await F.upsertGoldenEntry(e,{date:j,text:T}),await B(),n()},ne=async()=>{const Y=await F.achieveGolden(e);o(g.title,Y.days_to_manifest),await B(),n()},be=async()=>{await F.unachieveGolden(e),await B(),n()},A=async()=>{m.trim()&&(await F.updateGolden(e,{title:m.trim()}),b(null),await B(),n())},K=Y=>F.updateGolden(e,{image:Y}).then(()=>{B(),n()}),re=async()=>{await F.updateGolden(e,{t369_enabled:!g.t369_enabled}),await B(),n()},ve=async()=>{await F.updateGolden(e,{t369_affirmation:(u||"").trim()}),k(null),await B()},Z=async()=>{window.confirm(`Delete "${g.title}"? This cannot be undone from here.`)&&(await F.deleteGolden(e),n(),r())};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:se.detailTopRow,children:[t.jsxs("button",{onClick:r,style:se.backBtn,children:[t.jsx(dh,{size:16})," All dreams"]}),t.jsxs("button",{onClick:Z,style:se.deleteBtn,title:"Delete dream",children:[t.jsx(ci,{size:14})," Delete"]})]}),t.jsxs("div",{style:se.detailHero,children:[t.jsxs("label",{style:se.heroPhoto,children:[g.image?t.jsx("img",{src:g.image,alt:"",style:se.heroImg}):t.jsxs("span",{style:se.photoEmpty,children:[t.jsx(Sl,{size:20})," Add a photo"]}),t.jsxs("span",{style:se.photoEdit,children:[t.jsx(St,{size:12})," Edit photo"]}),t.jsx("input",{type:"file",accept:"image/*",onChange:Y=>i(Y,K),style:{display:"none"}})]}),t.jsxs("div",{style:se.heroInfo,children:[g.achieved&&t.jsxs("span",{style:se.heroStamp,children:["✦ Manifested",g.days_to_manifest!=null?` in ${g.days_to_manifest} day${g.days_to_manifest===1?"":"s"}`:""]}),m!==null?t.jsxs("div",{style:{display:"flex",gap:6,width:"100%"},children:[t.jsx("textarea",{autoFocus:!0,value:m,onChange:Y=>b(Y.target.value),style:{...se.textarea,minHeight:60}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[t.jsx("button",{onClick:A,style:se.iconSave,children:t.jsx(Oe,{size:14})}),t.jsx("button",{onClick:()=>b(null),style:se.iconCancel,children:t.jsx(Be,{size:14})})]})]}):t.jsxs("div",{style:se.heroTitleRow,children:[t.jsx("div",{style:se.heroTitle,children:g.title}),t.jsx("button",{onClick:()=>b(g.title),style:se.ghostBtn,title:"Edit",children:t.jsx(St,{size:13})})]}),t.jsxs("div",{style:se.heroStats,children:[t.jsxs("span",{style:{...se.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[t.jsx(Cn,{size:13})," ",g.streak," day streak"]}),t.jsxs("span",{style:se.metaDim,children:[g.total_days," entr",g.total_days===1?"y":"ies"]}),t.jsxs("span",{style:se.metaDim,children:["since ",Mp(g.created_date)]})]})]})]}),!g.achieved&&t.jsxs("div",{style:se.t369Row,children:[t.jsxs("div",{style:se.t369RowLeft,children:[t.jsxs("span",{style:{...se.tBadge,...g.t369_enabled?{}:se.tBadgeOff},children:[t.jsx(Ag,{size:13})," 369"]}),t.jsxs("div",{children:[t.jsx("div",{style:se.t369RowTitle,children:"Tesla's 369 Method"}),t.jsx("div",{style:se.t369RowSub,children:g.t369_enabled?"On — write this dream 3×/6×/9× across the day.":"Off — using the simple daily entry."})]})]}),t.jsx("button",{onClick:re,style:{...se.switch,...g.t369_enabled?se.switchOn:{}},role:"switch","aria-checked":g.t369_enabled,title:"Toggle 369 method",children:t.jsx("span",{style:{...se.switchKnob,...g.t369_enabled?se.switchKnobOn:{}}})})]}),g.t369_enabled&&!g.achieved&&t.jsxs(t.Fragment,{children:[u!==null||!g.t369_affirmation?t.jsxs("div",{style:se.card,children:[t.jsx("div",{style:se.cardTitle,children:"Your 369 affirmation"}),t.jsx("textarea",{autoFocus:!0,value:u??g.t369_affirmation??"",onChange:Y=>k(Y.target.value),placeholder:"The exact line you'll write 18× a day, e.g. 'I am grateful for my dream home.'",style:se.textarea}),t.jsxs("div",{style:se.formActions,children:[g.t369_affirmation&&t.jsxs("button",{onClick:()=>k(null),style:se.cancelBtn,children:[t.jsx(Be,{size:14})," Cancel"]}),t.jsxs("button",{onClick:ve,disabled:!(u??"").trim()&&!g.t369_affirmation,style:{...se.saveBtn,...(u??g.t369_affirmation??"").trim()?{}:se.saveDisabled},children:[t.jsx(Oe,{size:15})," Save affirmation"]})]})]}):t.jsxs("div",{style:se.tAffShow,children:[t.jsx(bc,{size:15,color:Or}),t.jsx("p",{style:se.tAffText,children:g.t369_affirmation}),t.jsx("button",{onClick:()=>k(g.t369_affirmation),style:se.ghostBtn,title:"Edit affirmation",children:t.jsx(St,{size:13})})]}),t.jsx(B1,{g,onChanged:C,musicId:s,setMusicId:a,musicOn:l,setMusicOn:d})]}),!g.t369_enabled&&t.jsxs("div",{style:se.writeCard,children:[t.jsx("div",{style:se.tuneRow,children:t.jsx(Gh,{musicId:s,musicOn:l,setMusicOn:d})}),t.jsxs("div",{style:se.writeNav,children:[t.jsx("button",{onClick:()=>R(Y=>Wp(Y,-1)),disabled:!v,style:{...se.navBtn,...v?{}:se.navDisabled},children:t.jsx(In,{size:16})}),t.jsx("div",{style:se.writeDate,children:x?"Today":Mp(E)}),t.jsx("button",{onClick:()=>R(Y=>Wp(Y,1)),disabled:!$,style:{...se.navBtn,...$?{}:se.navDisabled},children:t.jsx(ln,{size:16})})]}),x&&!g.achieved?t.jsxs(t.Fragment,{children:[t.jsx("textarea",{value:T,onChange:Y=>z(Y.target.value),placeholder:"Write it again today, as if it's already yours…",style:se.writeArea}),t.jsxs("button",{onClick:Q,style:se.writeSave,children:[t.jsx(Oe,{size:15})," Save today's entry"]})]}):t.jsx("div",{style:se.readEntry,children:y[E]?t.jsxs(t.Fragment,{children:[t.jsx(bc,{size:16,color:"var(--text-3)"}),t.jsx("p",{style:se.readText,children:y[E]})]}):t.jsx("div",{style:se.muted,children:"Nothing written on this day."})})]}),g.achieved?t.jsx("button",{onClick:be,style:se.unmanifestBtn,children:"Undo manifested"}):t.jsxs("button",{onClick:ne,style:se.manifestBtn,children:[t.jsx(To,{size:16})," Mark as manifested"]})]})}function F1({data:e,onClose:r}){return t.jsx("div",{style:se.celebOverlay,onClick:r,children:t.jsxs("div",{style:se.celebBox,onClick:n=>n.stopPropagation(),children:[t.jsx("div",{style:se.celebEmoji,children:"✨🌟✨"}),t.jsx("div",{style:se.celebTitle,children:"It's happening!"}),t.jsxs("div",{style:se.celebDream,children:['"',e.title,'"']}),t.jsxs("div",{style:se.celebSub,children:[e.days!=null?`Manifested in ${e.days} day${e.days===1?"":"s"}.`:"Manifested."," The universe delivered. 🙏"]}),t.jsx("button",{onClick:r,style:se.celebBtn,children:"Wonderful"})]})})}function D1({musicId:e,on:r}){return!e||!r?null:t.jsx("iframe",{title:"golden-music",src:`https://www.youtube.com/embed/${e}?autoplay=1&loop=1&playlist=${e}&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}})}function Gh({musicId:e,musicOn:r,setMusicOn:n}){return e?t.jsxs("button",{onClick:()=>n(o=>!o),style:{...se.tRemBtn,...r?se.tuneOn:{}},title:r?"Soft tunes on":"Play soft tunes",children:[r?t.jsx(xh,{size:14}):t.jsx(Bg,{size:14})," Soft tunes"]}):t.jsx("span",{style:se.tuneHint,children:"Add a track in Settings → Music"})}const Or="#C9A227",se={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:860,margin:"0 auto",position:"relative"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:Or,color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"11px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:70,resize:"vertical",lineHeight:1.5},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:Or,color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:12},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:14},goalCard:{textAlign:"left",border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},goalCardBtn:{textAlign:"left",border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"inherit",display:"flex",flexDirection:"column",width:"100%"},cardDelBtn:{position:"absolute",top:8,left:8,border:"none",background:"rgba(0,0,0,0.55)",color:"#fff",width:26,height:26,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",zIndex:2},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 10",background:"var(--surface-2)"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},thumbEmpty:{width:"100%",height:"100%",display:"grid",placeItems:"center"},stamp:{position:"absolute",top:8,right:8,transform:"rotate(6deg)",background:"rgba(76,154,107,0.95)",color:"#fff",fontSize:11,fontWeight:800,letterSpacing:"0.04em",padding:"3px 9px",borderRadius:6,border:"1.5px solid #fff",textTransform:"uppercase"},goalBody:{padding:"11px 13px",display:"flex",flexDirection:"column",gap:8},goalTitle:{fontSize:14,fontWeight:600,lineHeight:1.35,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},goalMeta:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},metaPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:700,padding:"2px 8px",borderRadius:10},metaDim:{fontSize:11,color:"var(--text-3)",fontWeight:500},detailTopRow:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16,gap:10},backBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},deleteBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid rgba(194,83,107,0.4)",background:"rgba(194,83,107,0.08)",color:"#C2536B",padding:"7px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},detailHero:{display:"flex",flexDirection:"column",gap:14,marginBottom:16},heroPhoto:{position:"relative",width:"100%",borderRadius:14,overflow:"hidden",border:"1px solid var(--border)",cursor:"pointer",background:"var(--surface-2)",display:"flex",alignItems:"center",justifyContent:"center",minHeight:120},heroImg:{width:"100%",maxHeight:"62vh",objectFit:"contain",display:"block"},photoEdit:{position:"absolute",bottom:8,right:8,display:"flex",alignItems:"center",gap:5,background:"rgba(0,0,0,0.6)",color:"#fff",fontSize:11,fontWeight:600,padding:"4px 8px",borderRadius:7},heroInfo:{display:"flex",flexDirection:"column",gap:10,alignItems:"center",textAlign:"center"},heroStamp:{alignSelf:"center",background:"rgba(76,154,107,0.14)",color:"#4C9A6B",fontSize:12,fontWeight:800,padding:"4px 10px",borderRadius:8,letterSpacing:"0.03em"},heroTitleRow:{display:"flex",alignItems:"flex-start",gap:8,justifyContent:"center"},heroTitle:{fontSize:23,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.35},heroStats:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",justifyContent:"center"},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",flexShrink:0},iconSave:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},iconCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},writeCard:{background:"var(--surface)",borderRadius:14,padding:16,border:"1px solid var(--border)",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},tuneRow:{display:"flex",justifyContent:"flex-end",marginBottom:10},tuneOn:{background:Or,color:"#fff",borderColor:Or},tuneHint:{fontSize:11,color:"var(--text-3)",fontWeight:500},writeNav:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,marginBottom:12},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center"},navDisabled:{opacity:.35,cursor:"not-allowed"},writeDate:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:150,textAlign:"center"},writeArea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:120,resize:"vertical",lineHeight:1.6},writeSave:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",background:Or,color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},readEntry:{display:"flex",gap:8,padding:"6px 2px"},readText:{fontSize:15,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.6,margin:0,whiteSpace:"pre-wrap"},manifestBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,width:"100%",border:"none",background:"linear-gradient(135deg,#C9A227,#E0BD45)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:800,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 2px 10px rgba(201,162,39,0.35)"},unmanifestBtn:{display:"block",margin:"0 auto",border:"none",background:"none",color:"var(--text-3)",fontSize:12,fontWeight:600,cursor:"pointer",textDecoration:"underline",fontFamily:"inherit"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.6)",zIndex:200,display:"grid",placeItems:"center",padding:16},celebBox:{background:"var(--surface)",color:"var(--text)",borderRadius:20,padding:"36px 30px",textAlign:"center",maxWidth:360,boxShadow:"0 12px 48px rgba(0,0,0,0.3)"},celebEmoji:{fontSize:40,marginBottom:10},celebTitle:{fontSize:24,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginBottom:10,color:Or},celebDream:{fontSize:15,fontStyle:"italic",fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.5,marginBottom:10},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:Or,color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},t369Row:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:"12px 16px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},t369RowLeft:{display:"flex",alignItems:"center",gap:11},t369RowTitle:{fontSize:14,fontWeight:700},t369RowSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},tBadgeOff:{background:"var(--border)",color:"var(--text-3)"},switch:{position:"relative",width:46,height:26,borderRadius:14,border:"none",background:"var(--border)",cursor:"pointer",flexShrink:0,transition:"background 0.2s",padding:0},switchOn:{background:Or},switchKnob:{position:"absolute",top:3,left:3,width:20,height:20,borderRadius:"50%",background:"#fff",transition:"left 0.2s",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},switchKnobOn:{left:23},tCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:16,padding:18,marginBottom:20,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},tHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12,flexWrap:"wrap",marginBottom:14},tTitleWrap:{display:"flex",alignItems:"center",gap:11},tBadge:{display:"inline-flex",alignItems:"center",gap:4,background:"linear-gradient(135deg,#C9A227,#E0BD45)",color:"#fff",fontSize:14,fontWeight:800,padding:"6px 10px",borderRadius:10,letterSpacing:"0.02em",flexShrink:0},tTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},tSub:{fontSize:12,color:"var(--text-3)",marginTop:2},tHeadBtns:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",justifyContent:"flex-end"},tRemBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 12px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tRemOn:{background:Or,color:"#fff",borderColor:Or},tStreakRow:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:14},tStreakBox:{background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px"},tStreakLabel:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,fontWeight:600,color:"var(--text-2)"},tStreakVal:{fontSize:21,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.1},tStreakHint:{fontSize:11,color:"var(--text-3)",marginTop:4,fontWeight:500},tProgTrack:{height:5,borderRadius:4,background:"var(--border)",marginTop:8,overflow:"hidden"},tProgFill:{height:"100%",background:"linear-gradient(90deg,#C2773B,#C9A227)",borderRadius:4,transition:"width 0.4s"},tAffShow:{display:"flex",alignItems:"flex-start",gap:9,background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px",marginBottom:14},tAffText:{flex:1,fontSize:15,fontFamily:"'Fraunces',Georgia,serif",fontStyle:"italic",lineHeight:1.5,margin:0,whiteSpace:"pre-wrap"},tWindows:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:10,marginBottom:14},tWindow:{background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:"11px 12px",transition:"box-shadow 0.2s, border-color 0.2s"},tWindowHead:{display:"flex",alignItems:"center",gap:6},tWindowLabel:{fontSize:13,fontWeight:700},tNow:{fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",marginLeft:"auto"},tWindowTime:{fontSize:10.5,color:"var(--text-3)",marginTop:2,marginBottom:8,fontWeight:500},tDots:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:7},tDot:{width:11,height:11,borderRadius:"50%",border:"1.5px solid var(--border)",background:"transparent",transition:"background 0.2s"},tCount:{fontSize:12,fontWeight:700,color:"var(--text-2)"},tWriteBox:{borderTop:"1px solid var(--border)",paddingTop:14},tNote:{fontSize:12,fontWeight:600,color:"#C2773B",background:"rgba(194,119,59,0.10)",borderRadius:8,padding:"8px 11px",marginBottom:9},tPasteWarn:{fontSize:11.5,color:"#C2536B",fontWeight:600,marginTop:6},tWriteActions:{display:"flex",gap:8,marginTop:10},tUndoBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"11px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tClosed:{fontSize:12.5,color:"var(--text-3)",textAlign:"center",padding:"10px 4px",lineHeight:1.5},tDoneMsg:{fontSize:13,fontWeight:700,color:"#4C9A6B",textAlign:"center",padding:"10px 4px"}},bd=[{id:"meditation",label:"Meditation Hub",icon:Dy,color:"#8268B0"},{id:"visualization",label:"Visualization",icon:vs,color:"#3A7CA5"}],Pp=e=>{if(!e)return"";const r=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(r))return r;const n=r.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},W1=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:a,height:l}=i;a>l&&a>1e3?(l=l*1e3/a,a=1e3):l>1e3&&(a=a*1e3/l,l=1e3);const d=document.createElement("canvas");d.width=a,d.height=l,d.getContext("2d").drawImage(i,0,0,a,l),r(d.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)}),M1=e=>({id:null,kind:e,title:"",url:"",image:""});function L1(){const[e,r]=c.useState("meditation"),[n,o]=c.useState([]),[i,s]=c.useState(!1),[a,l]=c.useState(null),[d,g]=c.useState(null),h=c.useCallback(async()=>{try{o(await F.getMedia())}catch{}s(!0)},[]);c.useEffect(()=>{h()},[h]);const{deleteItem:y,toasts:f,handleUndo:E,handleDismiss:R}=yr(F.deleteMedia,F.restoreMedia,h);c.useEffect(()=>{if(!d)return;const C=10,B=setInterval(()=>{document.hidden||F.addScreenTime("mindscape",C).catch(()=>{})},C*1e3);return()=>clearInterval(B)},[d]);const T=bd.find(C=>C.id===e),z=n.filter(C=>C.kind===e),m=C=>l({id:C.id,kind:C.kind,title:C.title,url:`https://youtu.be/${C.youtube_id}`,image:C.image}),b=async C=>{var x;const B=(x=C.target.files)==null?void 0:x[0];if(B){try{const v=await W1(B);l($=>({...$,image:v}))}catch{}C.target.value=""}},u=a?[!a.title.trim()&&"a title",!a.image&&"an image",!Pp(a.url)&&"a valid YouTube link"].filter(Boolean):[],k=!!a&&u.length===0,j=async()=>{if(!k)return;const C={kind:a.kind,title:a.title.trim(),image:a.image,youtube_id:Pp(a.url)};a.id?await F.updateMedia(a.id,C):await F.createMedia(C),l(null),h()};return t.jsxs("div",{style:bt.page,children:[d&&t.jsx("iframe",{title:"mindscape-audio",src:`https://www.youtube.com/embed/${d.youtube_id}?autoplay=1&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}}),t.jsxs("div",{style:bt.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:bt.eyebrow,children:"Anvil · Mindscape"}),t.jsx("h1",{style:bt.h1,children:"Mindscape"}),t.jsx("div",{style:bt.subhead,children:"Close your eyes and listen — guided meditation and visualization."})]}),!a&&t.jsxs("button",{onClick:()=>l(M1(e)),style:{...bt.addBtn,background:T.color},children:[t.jsx(at,{size:15})," Add"]})]}),t.jsx("div",{style:bt.tabs,children:bd.map(C=>{const B=C.icon,x=e===C.id;return t.jsxs("button",{onClick:()=>{r(C.id),l(null)},style:{...bt.tab,...x?{background:C.color,color:"#fff",borderColor:C.color}:{}},children:[t.jsx(B,{size:15})," ",C.label]},C.id)})}),a&&t.jsxs("div",{style:bt.card,children:[t.jsx("div",{style:bt.cardTitle,children:a.id?"Edit":`New ${bd.find(C=>C.id===a.kind).label}`}),t.jsx("input",{placeholder:"YouTube link (plays as audio only)",value:a.url,onChange:C=>l({...a,url:C.target.value}),style:bt.input,autoFocus:!0}),t.jsx("input",{placeholder:"Title (required)",value:a.title,onChange:C=>l({...a,title:C.target.value}),style:{...bt.input,marginTop:8}}),t.jsxs("label",{style:bt.photoPick,children:[a.image?t.jsx("img",{src:a.image,alt:"",style:bt.photoPreview}):t.jsxs("span",{style:bt.photoEmpty,children:[t.jsx(Sl,{size:18})," Add cover image (required)"]}),t.jsx("input",{type:"file",accept:"image/*",onChange:b,style:{display:"none"}})]}),!k&&t.jsxs("div",{style:bt.warn,children:["Add ",u.join(", ")," to save."]}),t.jsxs("div",{style:bt.formActions,children:[t.jsxs("button",{onClick:()=>l(null),style:bt.cancelBtn,children:[t.jsx(Be,{size:14})," Cancel"]}),t.jsxs("button",{onClick:j,disabled:!k,style:{...bt.saveBtn,background:k?T.color:"var(--border)",color:k?"#fff":"var(--text-3)",cursor:k?"pointer":"not-allowed"},children:[t.jsx(Oe,{size:15})," ",a.id?"Save":"Add"]})]})]}),i?z.length===0?t.jsxs("div",{style:bt.empty,children:["Nothing here yet — add a ",T.label.toLowerCase()," track."]}):t.jsx("div",{style:bt.grid,children:z.map(C=>{const B=(d==null?void 0:d.id)===C.id;return t.jsxs("div",{style:bt.mediaCard,children:[t.jsxs("button",{onClick:()=>g(B?null:C),style:bt.coverBtn,title:B?"Pause":"Play",children:[t.jsx("img",{src:C.image,alt:"",style:bt.cover}),t.jsx("span",{style:{...bt.playOverlay,background:B?"rgba(0,0,0,0.45)":"rgba(0,0,0,0.28)"},children:t.jsx("span",{style:{...bt.playCircle,background:T.color},children:B?t.jsx(yh,{size:20,color:"#fff",fill:"#fff"}):t.jsx(el,{size:20,color:"#fff",fill:"#fff"})})}),B&&t.jsxs("span",{style:bt.nowPlaying,children:[t.jsx(xh,{size:11})," Playing"]})]}),t.jsxs("div",{style:bt.mediaBody,children:[t.jsx("div",{style:bt.mediaTitle,children:C.title}),t.jsxs("div",{style:bt.cardActions,children:[t.jsx("button",{onClick:()=>m(C),style:bt.iconBtn,title:"Edit",children:t.jsx(St,{size:13})}),t.jsx("button",{onClick:()=>{(d==null?void 0:d.id)===C.id&&g(null),y(C.id,C.title)},style:bt.iconBtn,title:"Delete",children:t.jsx(Be,{size:14})})]})]})]},C.id)})}):t.jsx("div",{style:bt.muted,children:"Loading…"}),t.jsx(vr,{toasts:f,onUndo:E,onDismiss:R})]})}const bt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:900,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},tabs:{display:"flex",gap:8,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:200,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},warn:{fontSize:12,color:"#C2773B",marginTop:8,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,fontFamily:"inherit"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:16},mediaCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},coverBtn:{position:"relative",border:"none",padding:0,cursor:"pointer",display:"block",width:"100%",aspectRatio:"1",background:"var(--surface-2)"},cover:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center"},playCircle:{width:46,height:46,borderRadius:"50%",display:"grid",placeItems:"center",boxShadow:"0 2px 10px rgba(0,0,0,0.3)"},nowPlaying:{position:"absolute",bottom:8,left:8,display:"flex",alignItems:"center",gap:4,background:"rgba(0,0,0,0.65)",color:"#fff",fontSize:11,fontWeight:700,padding:"3px 8px",borderRadius:7},mediaBody:{padding:"12px 14px",display:"flex",alignItems:"flex-start",gap:8},mediaTitle:{flex:1,fontSize:14.5,fontWeight:600,lineHeight:1.4,minWidth:0,wordBreak:"break-word"},cardActions:{display:"flex",gap:2,flexShrink:0,marginTop:1},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},Uh={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},_1=Object.keys(Uh),$1="#9A7B4F";function P1(e=760){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const N1=()=>{const e=new Date,r=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${r(e.getMonth()+1)}-${r(e.getDate())}`},O1=e=>{if(!e)return"";const r=new Date(e+"T00:00:00");return isNaN(r)?e:r.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},md=e=>(e||"").slice(0,4),H1=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>r(o.result),o.onerror=n,o.readAsDataURL(e)}),G1=(e,r=1e3)=>new Promise((n,o)=>{const i=new Image;i.onload=()=>{let{width:s,height:a}=i;s>a&&s>r?(a=a*r/s,s=r):a>r&&(s=s*r/a,a=r);const l=document.createElement("canvas");l.width=s,l.height=a,l.getContext("2d").drawImage(i,0,0,s,a),n(l.toDataURL("image/jpeg",.82))},i.onerror=o,i.src=e});function U1({src:e,onCancel:r,onCrop:n,onKeepOriginal:o}){const[a,l]=c.useState(null),[d,g]=c.useState(1),[h,y]=c.useState({x:0,y:0}),f=c.useRef(null);c.useEffect(()=>{const j=new Image;j.onload=()=>{l(j);const C=Math.max(300/j.width,300/j.height);g(1),j._base=C;const B=j.width*C,x=j.height*C;y({x:(300-B)/2,y:(300-x)/2})},j.src=e},[e]);const E=a?a._base*d:1,R=a?a.width*E:0,T=a?a.height*E:0,z=(j,C,B)=>({x:Math.min(0,Math.max(300-C,j.x)),y:Math.min(0,Math.max(300-B,j.y))});c.useEffect(()=>{a&&y(j=>z(j,R,T))},[d,a]);const m=j=>{const C=j.touches?j.touches[0]:j;f.current={sx:C.clientX,sy:C.clientY,ox:h.x,oy:h.y}},b=j=>{if(!f.current)return;const C=j.touches?j.touches[0]:j,B=f.current.ox+(C.clientX-f.current.sx),x=f.current.oy+(C.clientY-f.current.sy);y(z({x:B,y:x},R,T))},u=()=>{f.current=null},k=()=>{if(!a)return;const j=document.createElement("canvas");j.width=700,j.height=700;const C=j.getContext("2d"),B=700/300;C.drawImage(a,h.x*B,h.y*B,R*B,T*B),n(j.toDataURL("image/jpeg",.85))};return t.jsx("div",{style:wr.overlay,onClick:r,children:t.jsxs("div",{style:wr.box,onClick:j=>j.stopPropagation(),children:[t.jsxs("div",{style:wr.head,children:["Crop to square",t.jsx("button",{onClick:r,style:wr.close,children:t.jsx(Be,{size:16})})]}),t.jsxs("div",{style:{...wr.frame,width:300,height:300},onMouseDown:m,onMouseMove:b,onMouseUp:u,onMouseLeave:u,onTouchStart:m,onTouchMove:b,onTouchEnd:u,children:[a&&t.jsx("img",{src:e,alt:"",draggable:!1,style:{position:"absolute",left:h.x,top:h.y,width:R,height:T,userSelect:"none",pointerEvents:"none"}}),t.jsx("div",{style:wr.grid})]}),t.jsxs("div",{style:wr.zoomRow,children:[t.jsx("span",{style:wr.zoomLbl,children:"Zoom"}),t.jsx("input",{type:"range",min:"1",max:"3",step:"0.01",value:d,onChange:j=>g(parseFloat(j.target.value)),style:{flex:1}})]}),t.jsx("div",{style:wr.hint,children:"Drag to reposition · slide to zoom"}),t.jsxs("div",{style:wr.actions,children:[t.jsx("button",{onClick:r,style:wr.cancel,children:"Cancel"}),t.jsx("button",{onClick:o,style:wr.keep,children:"Keep original"}),t.jsxs("button",{onClick:k,style:wr.apply,children:[t.jsx(Oe,{size:15})," Square crop"]})]})]})})}const V1={id:null,title:"",date:N1(),pillar:"",reward:"",image:"",note:""};function Y1(){const e=no(),r=x=>Ur(x,e.code),n=P1(),[o,i]=c.useState([]),[s,a]=c.useState(null),[l,d]=c.useState(!1),[g,h]=c.useState(null),y=c.useRef(null),f=c.useCallback(()=>{F.getAchievements().then(i).catch(()=>{})},[]);c.useEffect(()=>{f()},[f]);const{deleteItem:E,toasts:R,handleUndo:T,handleDismiss:z}=yr(F.deleteAchievement,F.restoreAchievement,f),m=()=>a({...V1}),b=x=>a({id:x.id,title:x.title,date:x.date,pillar:x.pillar||"",reward:x.reward?String(x.reward):"",image:x.image||"",note:x.note||""}),u=async x=>{var $;const v=($=x.target.files)==null?void 0:$[0];if(v){try{const Q=await H1(v);h(Q)}catch{}y.current&&(y.current.value="")}},k=async()=>{let x=g;try{g&&(x=await G1(g))}catch{}a(v=>({...v,image:x})),h(null)},j=s&&s.title.trim()&&s.date,C=async()=>{if(!j||l)return;d(!0);const x={title:s.title.trim(),date:s.date,pillar:s.pillar||null,reward:parseFloat(s.reward)||0,image:s.image||null,note:s.note.trim()};try{s.id?await F.updateAchievement(s.id,x):await F.createAchievement(x),a(null),f()}catch{}finally{d(!1)}},B=o.reduce((x,v)=>x+(v.reward||0),0);return t.jsxs("div",{style:Ye.page,children:[t.jsxs("div",{style:Ye.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:Ye.eyebrow,children:"Anvil · Achievements"}),t.jsx("h1",{style:Ye.h1,children:"Achievements"}),t.jsx("div",{style:Ye.subhead,children:"Your tree of wins — newest at the top, scroll down through the past."})]}),t.jsxs("div",{style:Ye.headRight,children:[B>0&&t.jsxs("div",{style:Ye.totalBadge,children:[t.jsx(js,{size:14,color:"#C9A227"})," ",r(B)," earned"]}),t.jsxs("button",{onClick:m,style:Ye.addBtn,children:[t.jsx(at,{size:15})," Add achievement"]})]})]}),o.length===0?t.jsxs("div",{style:Ye.empty,children:[t.jsx(qr,{size:30,color:"var(--text-3)"}),t.jsx("div",{style:{marginTop:10},children:"No achievements yet."}),t.jsx("div",{style:Ye.emptySub,children:"Plant your first win — it'll grow into a timeline you can look back on."})]}):t.jsxs("div",{style:{...Ye.timeline,paddingLeft:0},children:[t.jsx("div",{style:{...Ye.trunk,left:n?13:"50%"}}),o.map((x,v)=>{const $=Uh[x.pillar]||$1,Q=!n&&v%2===1,ne=o[v-1],be=!ne||md(ne.date)!==md(x.date);return t.jsxs("div",{children:[be&&t.jsx("div",{style:{...Ye.yearRow,justifyContent:n?"flex-start":"center",paddingLeft:n?36:0},children:t.jsx("span",{style:Ye.yearChip,children:md(x.date)})}),t.jsxs("div",{style:{...Ye.row,gridTemplateColumns:n?"28px 1fr":"1fr 44px 1fr"},children:[!n&&t.jsx("div",{style:{gridColumn:1,display:"flex",justifyContent:"flex-end"},children:Q&&t.jsx(Np,{a:x,color:$,side:"left",money:r,onEdit:()=>b(x),onDelete:()=>E(x.id,x.title)})}),t.jsx("div",{style:{gridColumn:n?1:2,display:"flex",justifyContent:"center",position:"relative"},children:t.jsx("div",{style:{...Ye.node,borderColor:$,background:"var(--surface)"},children:t.jsx("div",{style:{...Ye.nodeDot,background:$}})})}),t.jsx("div",{style:{gridColumn:n?2:3,display:"flex",justifyContent:"flex-start"},children:(n||!Q)&&t.jsx(Np,{a:x,color:$,side:n?"mobile":"right",money:r,onEdit:()=>b(x),onDelete:()=>E(x.id,x.title)})})]})]},x.id)})]}),s&&t.jsx("div",{style:Ye.overlay,onClick:()=>a(null),children:t.jsxs("div",{style:Ye.modal,onClick:x=>x.stopPropagation(),children:[t.jsxs("div",{style:Ye.modalHead,children:[t.jsx("div",{style:Ye.modalTitle,children:s.id?"Edit achievement":"New achievement"}),t.jsx("button",{onClick:()=>a(null),style:Ye.iconBtn,children:t.jsx(Be,{size:16})})]}),t.jsx("label",{style:Ye.label,children:"Title *"}),t.jsx("input",{autoFocus:!0,value:s.title,onChange:x=>a(v=>({...v,title:x.target.value})),placeholder:"What did you achieve?",style:Ye.input}),t.jsxs("div",{style:Ye.formRow,children:[t.jsxs("div",{style:{flex:1},children:[t.jsxs("label",{style:Ye.label,children:[t.jsx(Py,{size:12})," Date *"]}),t.jsx("input",{type:"date",value:s.date,onChange:x=>a(v=>({...v,date:x.target.value})),style:Ye.input})]}),t.jsxs("div",{style:{flex:1},children:[t.jsx("label",{style:Ye.label,children:"Pillar (optional)"}),t.jsxs("select",{value:s.pillar,onChange:x=>a(v=>({...v,pillar:x.target.value})),style:Ye.input,children:[t.jsx("option",{value:"",children:"— None —"}),_1.map(x=>t.jsx("option",{value:x,children:x},x))]})]})]}),t.jsxs("label",{style:Ye.label,children:[t.jsx(js,{size:12})," Reward (",e.code,") — optional gesture of appreciation"]}),t.jsx("input",{type:"number",min:"0",step:"any",value:s.reward,onChange:x=>a(v=>({...v,reward:x.target.value})),placeholder:"0",style:Ye.input}),t.jsx("label",{style:Ye.label,children:"Photo (optional)"}),s.image?t.jsxs("div",{style:Ye.imgWrap,children:[t.jsx("img",{src:s.image,alt:"",style:Ye.imgPreview}),t.jsx("button",{onClick:()=>a(x=>({...x,image:""})),style:Ye.imgRemove,children:t.jsx(Be,{size:14})})]}):t.jsxs("button",{onClick:()=>{var x;return(x=y.current)==null?void 0:x.click()},style:Ye.uploadBtn,children:[t.jsx(r0,{size:15})," Add a photo"]}),t.jsx("input",{ref:y,type:"file",accept:"image/*",onChange:u,style:{display:"none"}}),t.jsx("label",{style:Ye.label,children:"Note (optional)"}),t.jsx("textarea",{value:s.note,onChange:x=>a(v=>({...v,note:x.target.value})),placeholder:"The story behind it…",rows:3,style:{...Ye.input,resize:"vertical",fontFamily:"inherit"}}),t.jsxs("div",{style:Ye.modalActions,children:[t.jsx("button",{onClick:()=>a(null),style:Ye.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:C,disabled:!j||l,style:{...Ye.saveBtn,...!j||l?{opacity:.5,cursor:"not-allowed"}:{}},children:[t.jsx(Oe,{size:15})," ",s.id?"Save":"Add"]})]})]})}),g&&t.jsx(U1,{src:g,onCancel:()=>h(null),onKeepOriginal:k,onCrop:x=>{a(v=>({...v,image:x})),h(null)}}),t.jsx(vr,{toasts:R,onUndo:T,onDismiss:z})]})}function Np({a:e,color:r,side:n,money:o,onEdit:i,onDelete:s}){return t.jsxs("div",{style:{...Ye.card,borderTop:`3px solid ${r}`,textAlign:n==="left"?"right":"left"},children:[t.jsxs("div",{style:{...Ye.cardTop,flexDirection:n==="left"?"row-reverse":"row"},children:[t.jsx("span",{style:{...Ye.dateChip,background:`${r}1A`,color:r},children:O1(e.date)}),t.jsxs("div",{style:{display:"flex",gap:2},children:[t.jsx("button",{onClick:i,style:Ye.ghostBtn,title:"Edit",children:t.jsx(St,{size:13})}),t.jsx("button",{onClick:s,style:Ye.ghostBtn,title:"Delete",children:t.jsx(Be,{size:14})})]})]}),t.jsx("div",{style:Ye.cardTitle,children:e.title}),e.image&&t.jsx("img",{src:e.image,alt:"",style:Ye.cardImg}),e.note&&t.jsx("div",{style:Ye.cardNote,children:e.note}),e.reward>0&&t.jsxs("div",{style:{...Ye.rewardBadge,marginLeft:n==="left"?"auto":0},children:[t.jsx(js,{size:13})," ",o(e.reward)]})]})}const Ye={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},totalBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{textAlign:"center",color:"var(--text-3)",padding:"60px 16px",fontSize:14,fontWeight:600},emptySub:{fontSize:12.5,fontWeight:400,marginTop:6,maxWidth:320,marginInline:"auto",lineHeight:1.5},timeline:{position:"relative",maxWidth:1e3,margin:"0 auto",paddingBottom:30},trunk:{position:"absolute",top:8,bottom:8,width:3,background:"linear-gradient(to bottom, var(--border), var(--border))",transform:"translateX(-1.5px)",borderRadius:2},yearRow:{display:"flex",margin:"6px 0 12px"},yearChip:{fontSize:11.5,fontWeight:800,letterSpacing:"0.06em",color:"var(--text-2)",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:"4px 12px",position:"relative",zIndex:2},row:{display:"grid",alignItems:"center",gap:8,marginBottom:16},node:{width:20,height:20,borderRadius:"50%",border:"3px solid",display:"grid",placeItems:"center",zIndex:2,boxShadow:"0 0 0 4px var(--bg)"},nodeDot:{width:7,height:7,borderRadius:"50%"},card:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.06)",maxWidth:420,width:"100%",boxSizing:"border-box"},cardTop:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,marginBottom:7},dateChip:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,whiteSpace:"nowrap"},cardTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",lineHeight:1.3,wordBreak:"break-word"},cardImg:{width:"100%",maxHeight:220,objectFit:"cover",borderRadius:9,marginTop:9,display:"block"},cardNote:{fontSize:12.5,color:"var(--text-2)",marginTop:7,lineHeight:1.5,whiteSpace:"pre-wrap",wordBreak:"break-word"},rewardBadge:{display:"inline-flex",alignItems:"center",gap:5,marginTop:9,background:"rgba(201,162,39,0.12)",color:"#8A6E1A",border:"1px solid rgba(201,162,39,0.3)",padding:"3px 10px",borderRadius:14,fontSize:12,fontWeight:700},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:6},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:60,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:460,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},label:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)"},formRow:{display:"flex",gap:10},uploadBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",border:"1.5px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"11px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},imgWrap:{position:"relative",borderRadius:10,overflow:"hidden"},imgPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block",borderRadius:10},imgRemove:{position:"absolute",top:8,right:8,border:"none",background:"rgba(0,0,0,0.55)",color:"#fff",width:28,height:28,borderRadius:"50%",cursor:"pointer",display:"grid",placeItems:"center"},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},wr={overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.62)",zIndex:300,display:"grid",placeItems:"center",padding:16},box:{background:"var(--surface)",borderRadius:16,padding:"18px",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",maxWidth:"92vw"},head:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},close:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},frame:{position:"relative",overflow:"hidden",borderRadius:12,background:"#000",cursor:"grab",touchAction:"none",margin:"0 auto",maxWidth:"84vw"},grid:{position:"absolute",inset:0,pointerEvents:"none",boxShadow:"inset 0 0 0 1px rgba(255,255,255,0.5)",backgroundImage:"linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",backgroundSize:"33.33% 33.33%"},zoomRow:{display:"flex",alignItems:"center",gap:10,marginTop:14},zoomLbl:{fontSize:12,fontWeight:700,color:"var(--text-2)"},hint:{fontSize:11,color:"var(--text-3)",textAlign:"center",marginTop:8},actions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:14,flexWrap:"wrap"},cancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},keep:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},apply:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}};function K1(e=760){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const ca=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},Q1=e=>e?new Date(e+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"",Jr="#C9772E",Ri=[{id:"todo",label:"Want to",color:"#3A7CA5"},{id:"doing",label:"Enjoying",color:"#C9772E"},{id:"done",label:"Satisfied",color:"#4C9A6B"}],q1=[{id:"text",label:"Text"},{id:"number",label:"Number"},{id:"link",label:"Link"}],hd=e=>(e&&typeof e=="object"?e.type:"text")||"text",Fn=e=>(e&&typeof e=="object"?e.name:e)||"";function X1(){const e=K1(),[r,n]=c.useState([]),[o,i]=c.useState(null),[s,a]=c.useState(!1),[l,d]=c.useState(null),[g,h]=c.useState(null),[y,f]=c.useState(null),[E,R]=c.useState(null),[T,z]=c.useState(null),[m,b]=c.useState([]),u=c.useRef({}),k=c.useCallback(()=>{F.getDelight().then(G=>{n(G),i(le=>{var D;return le&&G.some(w=>w.id===le)?le:((D=G[0])==null?void 0:D.id)??null}),a(!0)}).catch(()=>a(!0))},[]);c.useEffect(()=>{k()},[k]),c.useEffect(()=>{b([])},[o]);const{deleteItem:j,toasts:C,handleUndo:B,handleDismiss:x}=yr(F.deleteDelightItem,F.restoreDelightItem,k),v=r.find(G=>G.id===o)||null,$=c.useMemo(()=>{const G={todo:[],doing:[],done:[]};return((v==null?void 0:v.items)||[]).forEach(le=>{(G[le.status]||G.todo).push(le)}),Object.values(G).forEach(le=>le.sort((D,w)=>D.position-w.position||D.id-w.id)),G},[v]),Q=G=>/^tags?$/i.test(Fn(G).trim()),ne=G=>((v==null?void 0:v.columns)||[]).filter(Q).flatMap(le=>(G.fields[Fn(le)]||"").split(",").map(D=>D.trim()).filter(Boolean)),be=c.useMemo(()=>{const G=new Set;return((v==null?void 0:v.items)||[]).forEach(le=>(v.columns||[]).filter(Q).forEach(D=>(le.fields[Fn(D)]||"").split(",").map(w=>w.trim()).filter(Boolean).forEach(w=>G.add(w)))),[...G].sort((le,D)=>le.localeCompare(D))},[v]),A=c.useMemo(()=>{const G={};return((v==null?void 0:v.columns)||[]).forEach(le=>{const D=Fn(le);if(Q(le))return;const w=new Set;((v==null?void 0:v.items)||[]).forEach(ie=>{const me=(ie.fields[D]||"").trim();me&&w.add(me)}),G[D]=[...w].sort((ie,me)=>ie.localeCompare(me))}),G},[v]),K=G=>m.length===0||ne(G).some(le=>m.includes(le)),re=G=>b(le=>le.includes(G)?le.filter(D=>D!==G):[...le,G]),ve=(G,le,D)=>{for(const w of Ri){const ie=u.current[w.id];if(!ie)continue;const me=ie.getBoundingClientRect();if(G>=me.left&&G<=me.right&&le>=me.top&&le<=me.bottom){const H=[...ie.querySelectorAll("[data-card]")].filter(he=>he.dataset.id!==String(D));let fe=H.length;for(let he=0;he<H.length;he++){const Ee=H[he].getBoundingClientRect();if(le<Ee.top+Ee.height/2){fe=he;break}}return{status:w.id,index:fe}}}return null},Z=(G,le)=>{if(G.target.closest("button"))return;const D=G.clientX,w=G.clientY,ie=G.currentTarget;let me=!1,H=null,fe=null;const he=Qe=>{if(!me){if(Math.hypot(Qe.clientX-D,Qe.clientY-w)<6)return;me=!0;const st=ie.getBoundingClientRect();fe={id:le.id,item:le,w:st.width,offX:D-st.left,offY:w-st.top}}fe={...fe,x:Qe.clientX,y:Qe.clientY},R(fe),H=ve(Qe.clientX,Qe.clientY,le.id)||H,z(H)},Ee=()=>{window.removeEventListener("pointermove",he),window.removeEventListener("pointerup",Ee),me&&H&&Y(le,H),R(null),z(null)};window.addEventListener("pointermove",he),window.addEventListener("pointerup",Ee)},Y=(G,le)=>{const D={};Ri.forEach(H=>{D[H.id]=($[H.id]||[]).filter(fe=>fe.id!==G.id)});const w=D[le.status]||[];let ie;if(m.length){const H=w.filter(K);ie=le.index<H.length?w.indexOf(H[le.index]):w.length}else ie=Math.max(0,Math.min(le.index,w.length));D[le.status]=[...w.slice(0,ie),{...G,status:le.status},...w.slice(ie)];const me=[];Ri.forEach(H=>(D[H.id]||[]).forEach((fe,he)=>me.push({id:fe.id,status:H.id,position:he}))),n(H=>H.map(fe=>fe.id===o?{...fe,items:me.map(he=>({...fe.items.find(Ee=>Ee.id===he.id),status:he.status,position:he.position}))}:fe)),F.arrangeDelight(o,me).then(k).catch(k),le.status==="done"&&G.status!=="done"&&f({item:G,date:ca(),note:""})},ce=async G=>{window.confirm(`Delete "${G.name}" and all its items?`)&&(await F.deleteCollection(G.id),k())},J=()=>({name:"",type:"text"}),I=()=>d({id:null,name:"",columns:[J(),J()]}),W=G=>d({id:G.id,name:G.name,columns:G.columns.length?G.columns.map(le=>({name:Fn(le),type:hd(le)})):[J()]}),_=async()=>{const G=l.name.trim();if(!G)return;const le=l.columns.map(D=>({name:D.name.trim(),type:D.type||"text"})).filter(D=>D.name);l.id?await F.updateCollection(l.id,{name:G,columns:le}):await F.createCollection({name:G,columns:le}),d(null),k()},P=(G="todo")=>h({id:null,name:"",fields:{},status:G}),de=G=>h({id:G.id,name:G.name,fields:{...G.fields},status:G.status}),ge=async()=>{const G=g.name.trim();if(!G||!v)return;const le=g.id?(v.items||[]).find(me=>me.id===g.id):null,D=(le==null?void 0:le.status)==="done",w={name:G,fields:g.fields,status:g.status};let ie;if(g.id?ie=await F.updateDelightItem(g.id,w):ie=await F.createDelightItem(v.id,w),h(null),await k(),g.status==="done"&&!D){const me=De(ie,v.id,G);f({item:me||{id:g.id,name:G},date:ca(),note:""})}},De=(G,le,D)=>{const w=Array.isArray(G)?G.find(me=>me.id===le):null;if(!w)return null;const ie=(w.items||[]).filter(me=>me.name===D&&me.status==="done");return ie.length?ie[ie.length-1]:null},q=async()=>{var G;if(!((G=y==null?void 0:y.item)!=null&&G.id)){f(null);return}await F.updateDelightItem(y.item.id,{completed_date:y.date||ca(),completion_note:y.note||""}),f(null),k()},oe=({it:G})=>{const le=v.columns.filter(w=>G.fields[Fn(w)]&&!Q(w)),D=ne(G);return t.jsxs("div",{"data-card":!0,"data-id":G.id,onPointerDown:w=>Z(w,G),style:je.itemCard,children:[t.jsxs("div",{style:je.itemCardTop,children:[t.jsx(Ja,{size:13,style:{color:"var(--text-3)",flexShrink:0}}),t.jsx("span",{style:je.itemName,children:G.name}),t.jsx("button",{onClick:()=>de(G),style:je.ghostBtn,children:t.jsx(St,{size:12})}),t.jsx("button",{onClick:()=>j(G.id,G.name),style:je.ghostBtn,children:t.jsx(Be,{size:13})})]}),le.map(w=>{const ie=Fn(w),me=G.fields[ie];return t.jsxs("div",{style:je.itemField,children:[t.jsx("span",{style:je.fieldLabel,children:ie}),hd(w)==="link"?t.jsx("a",{href:/^https?:\/\//i.test(me)?me:`https://${me}`,target:"_blank",rel:"noreferrer",style:{minWidth:0,wordBreak:"break-word",color:Jr},onClick:H=>H.stopPropagation(),children:me}):t.jsx("span",{style:{minWidth:0,wordBreak:"break-word"},children:me})]},ie)}),D.length>0&&t.jsx("div",{style:je.tagWrap,children:D.map((w,ie)=>t.jsx("span",{style:je.tag,children:w},ie))}),G.status==="done"&&G.completed_date&&t.jsxs("div",{style:je.doneMeta,children:[t.jsxs("span",{style:je.doneDate,children:["✓ ",Q1(G.completed_date)]}),G.completion_note&&t.jsx("span",{style:je.doneNote,children:G.completion_note})]})]})};return t.jsxs("div",{style:je.page,children:[t.jsxs("div",{style:je.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:je.eyebrow,children:"Anvil · Delights"}),t.jsx("h1",{style:je.h1,children:"Delights"}),t.jsx("div",{style:je.subhead,children:"Books, films, places, food — track what you want to enjoy and how you felt."})]}),t.jsxs("button",{onClick:I,style:je.addColBtn,children:[t.jsx(at,{size:15})," New list"]})]}),t.jsxs("div",{style:je.tabs,children:[r.map(G=>t.jsxs("button",{onClick:()=>i(G.id),style:{...je.tab,...G.id===o?je.tabOn:{}},children:[G.name,t.jsx("span",{style:je.tabCount,children:G.items.length})]},G.id)),t.jsx("button",{onClick:I,style:je.tabAdd,title:"New list",children:t.jsx(at,{size:15})})]}),s?v?t.jsxs("div",{children:[t.jsxs("div",{style:je.colHead,children:[t.jsx("h2",{style:je.colTitle,children:v.name}),t.jsxs("div",{style:je.colActions,children:[t.jsxs("button",{onClick:()=>P(),style:je.primaryBtn,children:[t.jsx(at,{size:14})," Add"]}),t.jsx("button",{onClick:()=>W(v),style:je.ghostBtn,title:"Edit list & columns",children:t.jsx(Ky,{size:15})}),t.jsx("button",{onClick:()=>ce(v),style:je.ghostBtn,title:"Delete list",children:t.jsx(Be,{size:16})})]})]}),be.length>0&&t.jsxs("div",{style:je.filterBar,children:[t.jsx("span",{style:je.filterLabel,children:"Tags"}),t.jsx("button",{onClick:()=>b([]),style:{...je.filterChip,...m.length===0?je.filterChipOn:{}},children:"All"}),be.map(G=>t.jsx("button",{onClick:()=>re(G),style:{...je.filterChip,...m.includes(G)?je.filterChipOn:{}},children:G},G))]}),t.jsx("div",{style:{...je.board,gridTemplateColumns:e?"1fr":"repeat(3, 1fr)"},children:Ri.map(G=>{const le=($[G.id]||[]).filter(K),D=E?le.filter(ie=>ie.id!==E.id):le,w=T&&T.status===G.id;return t.jsxs("div",{ref:ie=>u.current[G.id]=ie,style:{...je.lane,...w?{outline:`2px dashed ${G.color}`,outlineOffset:-2}:{}},children:[t.jsxs("div",{style:je.laneHead,children:[t.jsx("span",{style:{...je.laneDot,background:G.color}}),t.jsx("span",{style:je.laneLabel,children:G.label}),t.jsx("span",{style:je.laneCount,children:le.length}),t.jsx("button",{onClick:()=>P(G.id),style:je.laneAdd,title:`Add to ${G.label}`,children:t.jsx(at,{size:13})})]}),t.jsxs("div",{style:je.laneBody,children:[D.map((ie,me)=>t.jsxs("div",{children:[w&&T.index===me&&t.jsx("div",{style:{...je.insertLine,background:G.color}}),t.jsx(oe,{it:ie})]},ie.id)),w&&T.index>=D.length&&t.jsx("div",{style:{...je.insertLine,background:G.color}}),D.length===0&&!w&&t.jsx("div",{style:je.laneEmpty,children:"Drop here"})]})]},G.id)})})]}):t.jsxs("div",{style:je.empty,children:[t.jsx(Rg,{size:28,color:"var(--text-3)"}),t.jsx("div",{style:{marginTop:10},children:"No lists yet."}),t.jsxs("button",{onClick:I,style:{...je.addColBtn,marginTop:14},children:[t.jsx(at,{size:15})," Create your first list"]})]}):t.jsx("div",{style:je.muted,children:"Loading…"}),E&&t.jsx("div",{style:{...je.ghost,width:E.w,left:E.x-E.offX,top:E.y-E.offY},children:t.jsxs("div",{style:je.itemCardTop,children:[t.jsx(Ja,{size:13,style:{color:"var(--text-3)",flexShrink:0}}),t.jsx("span",{style:je.itemName,children:E.item.name})]})}),l&&t.jsx("div",{style:je.overlay,onClick:()=>d(null),children:t.jsxs("div",{style:je.modal,onClick:G=>G.stopPropagation(),children:[t.jsxs("div",{style:je.modalHead,children:[t.jsx("span",{style:je.modalTitle,children:l.id?"Edit list":"New list"}),t.jsx("button",{onClick:()=>d(null),style:je.iconBtn,children:t.jsx(Be,{size:16})})]}),t.jsx("label",{style:je.label,children:"List name *"}),t.jsx("input",{autoFocus:!0,value:l.name,onChange:G=>d(le=>({...le,name:G.target.value})),placeholder:"e.g. Gardens, Cafés, Trips…",style:je.input}),t.jsx("label",{style:je.label,children:"Columns"}),t.jsx("div",{style:je.muted2,children:"Name the details you want to track (e.g. Author, Distance, Tag)."}),l.columns.map((G,le)=>t.jsxs("div",{style:je.colRow,children:[t.jsx("input",{value:G.name,placeholder:`Column ${le+1}`,onChange:D=>d(w=>{const ie=[...w.columns];return ie[le]={...ie[le],name:D.target.value},{...w,columns:ie}}),style:{...je.input,marginBottom:0,flex:1}}),t.jsx("select",{value:G.type,onChange:D=>d(w=>{const ie=[...w.columns];return ie[le]={...ie[le],type:D.target.value},{...w,columns:ie}}),style:je.colTypeSelect,children:q1.map(D=>t.jsx("option",{value:D.id,children:D.label},D.id))}),t.jsx("button",{onClick:()=>d(D=>({...D,columns:D.columns.filter((w,ie)=>ie!==le)})),style:je.iconBtn,children:t.jsx(Be,{size:14})})]},le)),l.columns.length<6&&t.jsxs("button",{onClick:()=>d(G=>({...G,columns:[...G.columns,J()]})),style:je.addColInline,children:[t.jsx(at,{size:13})," Add column"]}),t.jsxs("div",{style:je.modalActions,children:[t.jsx("button",{onClick:()=>d(null),style:je.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:_,disabled:!l.name.trim(),style:{...je.saveBtn,...l.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(Oe,{size:15})," ",l.id?"Save":"Create"]})]})]})}),g&&v&&t.jsx("div",{style:je.overlay,onClick:()=>h(null),children:t.jsxs("div",{style:je.modal,onClick:G=>G.stopPropagation(),children:[t.jsxs("div",{style:je.modalHead,children:[t.jsx("span",{style:je.modalTitle,children:g.id?"Edit":`Add to ${v.name}`}),t.jsx("button",{onClick:()=>h(null),style:je.iconBtn,children:t.jsx(Be,{size:16})})]}),t.jsx("label",{style:je.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:g.name,onChange:G=>h(le=>({...le,name:G.target.value})),onKeyDown:G=>G.key==="Enter"&&ge(),placeholder:"Title / name",style:je.input}),v.columns.map(G=>{const le=Fn(G),D=hd(G),w=`dl-${v.id}-${le}`,ie=A[le]||[];return t.jsxs("div",{children:[t.jsx("label",{style:je.label,children:le}),t.jsx("input",{value:g.fields[le]||"",type:D==="number"?"number":D==="link"?"url":"text",list:ie.length?w:void 0,onChange:me=>h(H=>({...H,fields:{...H.fields,[le]:me.target.value}})),placeholder:D==="link"?"https://…":le,style:je.input}),ie.length>0&&t.jsx("datalist",{id:w,children:ie.map(me=>t.jsx("option",{value:me},me))})]},le)}),t.jsx("label",{style:je.label,children:"Status"}),t.jsx("div",{style:je.statusPick,children:Ri.map(G=>t.jsx("button",{type:"button",onClick:()=>h(le=>({...le,status:G.id})),style:{...je.statusChip,...g.status===G.id?{background:G.color,color:"#fff",border:`1px solid ${G.color}`}:{}},children:G.label},G.id))}),t.jsxs("div",{style:je.modalActions,children:[t.jsx("button",{onClick:()=>h(null),style:je.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:ge,disabled:!g.name.trim(),style:{...je.saveBtn,...g.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(Oe,{size:15})," ",g.id?"Save":"Add"]})]})]})}),y&&t.jsx("div",{style:je.overlay,onClick:()=>f(null),children:t.jsxs("div",{style:{...je.modal,maxWidth:380},onClick:G=>G.stopPropagation(),children:[t.jsxs("div",{style:je.modalHead,children:[t.jsx("span",{style:je.modalTitle,children:"Satisfied! 🎉"}),t.jsx("button",{onClick:()=>f(null),style:je.iconBtn,children:t.jsx(Be,{size:16})})]}),t.jsxs("div",{style:je.muted2,children:['"',y.item.name,'" — when did you complete it?']}),t.jsx("label",{style:je.label,children:"Completed on"}),t.jsx("input",{type:"date",value:y.date,max:ca(),onChange:G=>f(le=>({...le,date:G.target.value})),style:je.input}),t.jsx("label",{style:je.label,children:"Comment (optional)"}),t.jsx("textarea",{value:y.note,onChange:G=>f(le=>({...le,note:G.target.value})),placeholder:"How was it?",style:{...je.input,minHeight:64,resize:"vertical"}}),t.jsxs("div",{style:je.modalActions,children:[t.jsx("button",{onClick:()=>f(null),style:je.cancelBtn,children:"Skip"}),t.jsxs("button",{onClick:q,style:je.saveBtn,children:[t.jsx(Oe,{size:15})," Save"]})]})]})}),t.jsx(vr,{toasts:C,onUndo:B,onDismiss:x})]})}const je={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},addColBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"none",background:Jr,color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabs:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16,alignItems:"center"},tab:{display:"inline-flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},tabOn:{background:Jr,color:"#fff",borderColor:Jr},tabCount:{fontSize:10.5,fontWeight:700,background:"rgba(0,0,0,0.12)",borderRadius:9,padding:"1px 6px"},tabAdd:{border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",width:32,height:32,borderRadius:"50%",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},colHead:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,marginBottom:12,flexWrap:"wrap"},colTitle:{fontSize:18,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},colActions:{display:"flex",gap:6,alignItems:"center"},primaryBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"none",background:Jr,color:"#fff",padding:"7px 13px",borderRadius:8,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:6,flexShrink:0},filterBar:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",marginBottom:14},filterLabel:{fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--text-3)",marginRight:2},filterChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 11px",borderRadius:16,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},filterChipOn:{background:Jr,color:"#fff",borderColor:Jr},board:{display:"grid",gap:12,alignItems:"start"},lane:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:"10px 10px 12px",minHeight:120,display:"flex",flexDirection:"column"},laneHead:{display:"flex",alignItems:"center",gap:7,padding:"2px 4px 10px"},laneDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},laneLabel:{fontSize:12.5,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--text-2)"},laneCount:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},laneAdd:{marginLeft:"auto",border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:2,borderRadius:6},laneBody:{display:"flex",flexDirection:"column",gap:8,minHeight:40,flex:1},laneEmpty:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",textAlign:"center",padding:"16px 0",border:"1px dashed var(--border)",borderRadius:8},insertLine:{height:3,borderRadius:2,margin:"1px 0"},itemCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"9px 10px",boxShadow:"0 1px 2px rgba(0,0,0,0.05)",cursor:"grab",touchAction:"none",userSelect:"none"},itemCardTop:{display:"flex",alignItems:"center",gap:6},itemName:{flex:1,minWidth:0,fontSize:13.5,fontWeight:700,wordBreak:"break-word"},itemField:{display:"flex",gap:8,fontSize:12,color:"var(--text-2)",marginTop:5,paddingLeft:19},fieldLabel:{fontWeight:700,color:"var(--text-3)",minWidth:64,flexShrink:0},tagWrap:{display:"flex",flexWrap:"wrap",gap:5,marginTop:8,paddingLeft:19},tag:{fontSize:10.5,fontWeight:700,color:Jr,background:"color-mix(in srgb, "+Jr+" 14%, transparent)",border:"1px solid color-mix(in srgb, "+Jr+" 30%, transparent)",borderRadius:12,padding:"2px 8px",whiteSpace:"nowrap"},doneMeta:{marginTop:8,paddingLeft:19,display:"flex",flexDirection:"column",gap:3},doneDate:{fontSize:11,fontWeight:700,color:"#4C9A6B"},doneNote:{fontSize:11.5,color:"var(--text-2)",fontStyle:"italic",wordBreak:"break-word"},ghost:{position:"fixed",zIndex:300,pointerEvents:"none",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"9px 10px",boxShadow:"0 8px 28px rgba(0,0,0,0.28)",opacity:.95,transform:"rotate(1.5deg)"},muted:{fontSize:13,color:"var(--text-3)"},muted2:{fontSize:11.5,color:"var(--text-3)",marginBottom:8},empty:{textAlign:"center",color:"var(--text-3)",padding:"50px 16px",fontSize:14,fontWeight:600,display:"flex",flexDirection:"column",alignItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:8},colRow:{display:"flex",gap:6,alignItems:"center",marginBottom:8},colTypeSelect:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",background:"var(--bg)",color:"var(--text)",flexShrink:0},addColInline:{display:"inline-flex",alignItems:"center",gap:5,border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"7px 12px",borderRadius:8,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},statusPick:{display:"flex",gap:6,flexWrap:"wrap"},statusChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 13px",borderRadius:18,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Fr="#C9772E",Vh={Carrot:Oy,ShoppingCart:w0,Clapperboard:Uy,ShoppingBag:Ch,Fuel:Jy,Sparkles:To,Shirt:k0,WashingMachine:R0,Zap:Ag,Tv:I0,Droplet:qy,Coffee:Vy,Utensils:B0,Bus:My,Train:z0,Plane:x0,Home:ks,Heart:mh,Gift:js,Book:Fy,Dumbbell:Xy,Pill:f0,Phone:h0,Wifi:E0,Gamepad2:e0,Music:Bg,Scissors:wh,PawPrint:m0,Baby:Ry,GraduationCap:ph,Briefcase:Wy,Car:Ny,Bike:Ay},Zr=({name:e,...r})=>{const n=Vh[e]||Ch;return t.jsx(n,{...r})},fd=["#C9772E","#4C9A6B","#3A7CA5","#8268B0","#C2536B","#C9A227","#D1556E","#5B7C99","#A23E57","#3E9E6B"],Ic=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,xd=Ic(new Date),Do=120;function Z1(e=760){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}function J1(){const e=Z1(),r=no(),n=Nh(),[o,i]=c.useState([]),[s,a]=c.useState([]),[l,d]=c.useState([]),[g,h]=c.useState([]),[y,f]=c.useState(!1),[E,R]=c.useState(xd),[T,z]=c.useState(()=>new Date),[m,b]=c.useState(null),[u,k]=c.useState(null),[j,C]=c.useState(null),[B,x]=c.useState(null),[v,$]=c.useState(!1),[Q,ne]=c.useState("day"),[be,A]=c.useState(()=>pr(new Date,n)[0]),[K,re]=c.useState(new Set),ve=p=>re(L=>{const Fe=new Set(L);return Fe.has(p)?Fe.delete(p):Fe.add(p),Fe}),Z=c.useCallback(()=>{Promise.all([F.getExpenses(),F.getTxns(),F.getInvestments()]).then(([p,L,Fe])=>{i(p.categories),a(p.logs),d(Array.isArray(L)?L:[]),h(Array.isArray(Fe)?Fe:[]),f(!0)}).catch(()=>f(!0))},[]);c.useEffect(()=>{Z()},[Z]);const{deleteItem:Y,toasts:ce,handleUndo:J,handleDismiss:I}=yr(F.deleteExpenseLog,F.restoreExpenseLog,Z),W=c.useMemo(()=>{const p={};return o.forEach(L=>p[L.id]=L),p},[o]),_=p=>Ss(p,r.code),P=c.useMemo(()=>s.filter(p=>p.date===E),[s,E]),de=P.reduce((p,L)=>p+L.amount,0),ge=c.useMemo(()=>{const[p,L]=pr(new Date,n),Fe=gt=>gt>=p&&gt<=L,_e=l.filter(gt=>gt.kind==="income"&&Fe(gt.date)).reduce((gt,sr)=>gt+sr.amount,0),Xe=l.filter(gt=>gt.kind==="expense"&&Fe(gt.date)).reduce((gt,sr)=>gt+sr.amount,0),ot=s.filter(gt=>Fe(gt.date)).reduce((gt,sr)=>gt+sr.amount,0),ur=g.filter(gt=>Fe(gt.date)).reduce((gt,sr)=>gt+sr.invested,0),jt=_e-Xe-ot-ur,ir=Math.max(1,Math.round((new Date(L+"T00:00")-new Date(xd+"T00:00"))/864e5)+1);return{remaining:jt,daysLeft:ir,perDay:jt/ir}},[l,s,g,n]),De=c.useMemo(()=>{const p=Fe=>{const _e=new Date;return _e.setDate(_e.getDate()+Fe),Ic(_e)},L=Fe=>s.filter(_e=>_e.date===Fe).reduce((_e,Xe)=>_e+Xe.amount,0);return[{label:"Today",value:L(p(0)),color:Fr},{label:"Yesterday",value:L(p(-1)),color:"var(--text-3)"},{label:"Day before",value:L(p(-2)),color:"var(--text-3)"}]},[s]),q=c.useMemo(()=>{if(Q==="day")return P;if(Q==="month"){const[p,L]=pr(new Date(E+"T00:00"),n);return s.filter(Fe=>Fe.date>=p&&Fe.date<=L)}if(Q==="year"){const p=E.slice(0,4);return s.filter(L=>L.date.slice(0,4)===p)}return s},[s,P,Q,E,n]),oe=q.reduce((p,L)=>p+L.amount,0),G=c.useMemo(()=>{const p={};return q.forEach(L=>{p[L.category_id]=(p[L.category_id]||0)+L.amount}),Object.entries(p).map(([L,Fe])=>({cat:W[L],amount:Fe})).filter(L=>L.cat).sort((L,Fe)=>Fe.amount-L.amount)},[q,W]),le=p=>pr(new Date(p+"T00:00"),n)[0],D=c.useMemo(()=>{const p=new Set(s.map(L=>le(L.date)));return p.add(pr(new Date,n)[0]),Array.from(p).sort().reverse().slice(0,12)},[s,n]),w=p=>new Date(p+"T00:00").toLocaleDateString("en-US",{month:"short",year:"numeric"}),ie=(p,L)=>pr(new Date(p+"T00:00"),n,-L)[0],me=p=>K.size===0||K.has(p.category_id),H=[be,ie(be,1),ie(be,2)],fe=H.map(p=>{const[L,Fe]=pr(new Date(p+"T00:00"),n);return s.filter(_e=>_e.date>=L&&_e.date<=Fe&&me(_e)).reduce((_e,Xe)=>_e+Xe.amount,0)}),[he,Ee,Qe]=fe,st=Ee>0?Math.round((he-Ee)/Ee*100):he>0?100:0,Le=st>0?Zi:st<0?qn:fh,et=st>0?"#C2536B":st<0?"#4C9A6B":"#9A968C",Ke=c.useMemo(()=>{const[p,L]=pr(new Date(be+"T00:00"),n),Fe={};return s.filter(_e=>_e.date>=p&&_e.date<=L&&me(_e)).forEach(_e=>{Fe[_e.category_id]=(Fe[_e.category_id]||0)+_e.amount}),Object.entries(Fe).map(([_e,Xe])=>({cat:W[_e],amount:Xe})).filter(_e=>_e.cat).sort((_e,Xe)=>Xe.amount-_e.amount)},[s,be,K,W,n]);let ut=0;const ae=Ke.map(p=>{const L=he>0?ut/he*100:0;ut+=p.amount;const Fe=he>0?ut/he*100:0;return{...p,start:L,end:Fe,pct:he>0?p.amount/he*100:0}}),We=ae.length?`conic-gradient(${ae.map(p=>`${p.cat.color} ${p.start}% ${p.end}%`).join(", ")})`:"var(--surface-2)",qe=c.useMemo(()=>{const[p,L]=pr(T,n),Fe=new Date(p+"T00:00"),_e=new Date(L+"T00:00"),Xe=(Fe.getDay()+6)%7,ot={};s.forEach(jt=>{jt.date>=p&&jt.date<=L&&(ot[jt.date]=(ot[jt.date]||0)+jt.amount)});const ur=[];for(let jt=0;jt<Xe;jt++)ur.push(null);for(let jt=new Date(Fe);jt<=_e;jt.setDate(jt.getDate()+1)){const ir=Ic(jt);ur.push({date:ir,day:jt.getDate(),total:ot[ir]||0})}return ur},[T,s,n]),tt=p=>z(L=>{const[Fe]=pr(L,n,p);return new Date(Fe+"T00:00")}),ht=c.useMemo(()=>{const[p,L]=pr(T,n);if(n===1)return new Date(p+"T00:00").toLocaleDateString("en-US",{month:"long",year:"numeric"});const Fe=_e=>new Date(_e+"T00:00").toLocaleDateString("en-US",{day:"numeric",month:"short"});return`${Fe(p)} – ${Fe(L)}`},[T,n]),_t=p=>b({cat:p,amount:"",note:""}),It=async()=>{const p=parseFloat(m.amount);!p||p<=0||(await F.createExpenseLog({category_id:m.cat.id,amount:p,note:m.note.trim().slice(0,Do),date:E}),b(null),Z())},xt=p=>k({id:p.id,category_id:p.category_id,amount:String(p.amount),note:p.note||"",date:p.date}),yt=async()=>{const p=parseFloat(u.amount);!p||p<=0||(await F.updateExpenseLog(u.id,{category_id:u.category_id,amount:p,note:u.note.trim().slice(0,Do),date:u.date}),k(null),Z())},At=()=>x({id:null,name:"",icon:"ShoppingBag",color:fd[o.length%fd.length]}),Er=p=>x({id:p.id,name:p.name,icon:p.icon,color:p.color}),Ne=async()=>{const p=B.name.trim();p&&(B.id?await F.updateExpenseCategory(B.id,{name:p,icon:B.icon,color:B.color}):await F.createExpenseCategory({name:p,icon:B.icon,color:B.color}),x(null),Z())},dt=async p=>{const L=s.filter(_e=>_e.category_id===p.id).length,Fe=L>0?`Delete "${p.name}"? Its ${L} transaction${L===1?"":"s"} will be moved to "Other".`:`Delete "${p.name}"?`;window.confirm(Fe)&&(await F.deleteExpenseCategory(p.id),Z())},Bt=async(p,L)=>{const Fe=p+L;if(Fe<0||Fe>=o.length)return;const _e=[...o];[_e[p],_e[Fe]]=[_e[Fe],_e[p]],i(_e),await F.arrangeExpenseCategories(_e.map(Xe=>Xe.id)).catch(()=>{}),Z()},zt=new Date(E+"T00:00").toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});let pt=0;const jr=G.map(p=>{const L=oe>0?pt/oe*100:0;pt+=p.amount;const Fe=oe>0?pt/oe*100:0;return{...p,start:L,end:Fe,pct:oe>0?p.amount/oe*100:0}}),vt=jr.length?`conic-gradient(${jr.map(p=>`${p.cat.color} ${p.start}% ${p.end}%`).join(", ")})`:"var(--surface-2)";return t.jsxs("div",{style:{...U.page,...e?{padding:"20px 14px"}:{}},children:[t.jsx("div",{style:U.head,children:t.jsxs("div",{children:[t.jsx("div",{style:U.eyebrow,children:"Anvil · Expenses"}),t.jsx("h1",{style:U.h1,children:"Expenses"}),t.jsx("div",{style:U.subhead,children:"Log day-to-day spending by category and see where it goes."})]})}),t.jsxs("div",{style:U.totalCard,children:[t.jsxs("div",{style:U.totalLeft,children:[t.jsx(tl,{size:20,color:Fr}),t.jsxs("div",{children:[t.jsxs("div",{style:U.totalLabel,children:["Total spent ",Q==="day"?"today":Q==="month"?"this month":Q==="year"?"this year":"all time"]}),t.jsx("div",{style:U.totalVal,children:_(oe)}),t.jsx("div",{style:{...U.budgetLine,color:ge.perDay>=0?"#4C9A6B":"#C2536B"},children:ge.perDay>=0?t.jsxs(t.Fragment,{children:["You can spend ≈ ",t.jsxs("b",{children:[_(ge.perDay),"/day"]})," · ",ge.daysLeft," day",ge.daysLeft===1?"":"s"," till next cycle"]}):t.jsxs(t.Fragment,{children:["Overspent this cycle by ",_(Math.abs(ge.remaining))," · ",ge.daysLeft," day",ge.daysLeft===1?"":"s"," left"]})})]})]}),t.jsx("div",{style:U.scopeRow,children:[["day","Day"],["month","Month"],["year","Year"],["all","All"]].map(([p,L])=>t.jsx("button",{onClick:()=>ne(p),style:{...U.scopeBtn,...Q===p?U.scopeBtnOn:{}},children:L},p))})]}),t.jsxs("div",{style:{...U.card,marginBottom:16},children:[t.jsx("div",{style:U.threeDayTitle,children:"Last 3 days"}),t.jsx(Op,{items:De,money:_})]}),t.jsxs("div",{style:{...U.cols,gridTemplateColumns:e?"minmax(0,1fr)":"320px minmax(0,1fr)"},children:[t.jsxs("div",{style:{...U.card,minWidth:0,...e?{padding:12}:{}},children:[t.jsxs("div",{style:U.calHead,children:[t.jsx("button",{onClick:()=>tt(-1),style:U.calNav,children:t.jsx(In,{size:16})}),t.jsx("span",{style:U.calTitle,children:ht}),t.jsx("button",{onClick:()=>tt(1),style:U.calNav,children:t.jsx(ln,{size:16})})]}),t.jsxs("div",{style:U.calGrid,children:[["M","T","W","T","F","S","S"].map((p,L)=>t.jsx("div",{style:U.calDow,children:p},L)),qe.map((p,L)=>p===null?t.jsx("div",{},L):t.jsxs("button",{onClick:()=>R(p.date),style:{...U.calCell,...p.date===E?U.calCellOn:{},...p.date===xd&&p.date!==E?U.calCellToday:{}},children:[t.jsx("span",{children:p.day}),p.total>0&&t.jsx("span",{style:{...U.calDot,background:p.date===E?"#fff":Fr}})]},p.date))]})]}),t.jsxs("div",{children:[t.jsxs("div",{style:U.card,children:[t.jsxs("div",{style:U.cardTitleRow,children:[t.jsxs("div",{children:[t.jsx("div",{style:U.cardTitle,children:zt}),t.jsx("div",{style:U.cardSub,children:"Tap a category to log an expense for this day."})]}),t.jsx("div",{style:U.dayTotal,children:_(de)})]}),t.jsxs("div",{style:U.iconGrid,children:[o.map(p=>t.jsxs("div",{style:U.iconCell,children:[t.jsx("button",{onClick:()=>_t(p),style:{...U.iconBtn,background:p.color+"1A",color:p.color,borderColor:p.color+"44"},children:t.jsx(Zr,{name:p.icon,size:22})}),t.jsx("span",{style:U.iconLabel,children:p.name})]},p.id)),t.jsxs("div",{style:U.iconCell,children:[t.jsx("button",{onClick:At,style:U.iconBtnAdd,children:t.jsx(at,{size:20})}),t.jsx("span",{style:U.iconLabel,children:"Add"})]})]}),t.jsxs("button",{onClick:()=>$(!0),style:U.manageLink,children:[t.jsx(St,{size:11})," Customize categories"]}),P.length>0&&t.jsx("div",{style:U.logList,children:P.map(p=>{const L=W[p.category_id];return t.jsxs("div",{style:U.logRow,children:[t.jsx("span",{style:{...U.logIcon,background:((L==null?void 0:L.color)||"#9A968C")+"1A",color:(L==null?void 0:L.color)||"#9A968C"},children:t.jsx(Zr,{name:L==null?void 0:L.icon,size:14})}),t.jsxs("button",{onClick:()=>xt(p),style:U.logInfoBtn,title:"Edit this expense",children:[t.jsx("div",{style:U.logCat,children:(L==null?void 0:L.name)||"Deleted category"}),p.note&&t.jsx("div",{style:U.logNote,children:p.note})]}),t.jsx("span",{style:U.logAmt,children:_(p.amount)}),t.jsx("button",{onClick:()=>xt(p),style:U.editBtn,title:"Edit",children:t.jsx(St,{size:13})}),t.jsx("button",{onClick:()=>Y(p.id,(L==null?void 0:L.name)||"Expense"),style:U.delBtn,children:t.jsx(Be,{size:14})})]},p.id)})})]}),t.jsxs("div",{style:U.card,children:[t.jsx("div",{style:U.cardTitleRow,children:t.jsxs("div",{children:[t.jsx("div",{style:U.cardTitle,children:"Spending by category"}),t.jsxs("div",{style:U.cardSub,children:[Q==="day"?"Today":Q==="month"?"This month":Q==="year"?"This year":"All time"," — percentage & amount"]})]})}),G.length===0?t.jsx("div",{style:U.muted,children:"No expenses logged for this period yet."}):t.jsxs("div",{style:U.pieWrap,children:[t.jsxs("div",{style:U.pieChart,children:[t.jsx("div",{style:{...U.pieDisc,background:vt}}),t.jsxs("div",{style:U.pieHole,children:[t.jsx("span",{style:U.pieHoleVal,children:_(oe)}),t.jsx("span",{style:U.pieHoleLbl,children:"total"})]})]}),t.jsxs("div",{style:U.pieLegend,children:[jr.map(p=>t.jsxs("button",{onClick:()=>C(L=>L===p.cat.id?null:p.cat.id),title:"Show these expenses",style:{...U.legendRow,...U.legendRowBtn,...j===p.cat.id?{background:p.cat.color+"1A"}:{}},children:[t.jsx("span",{style:{...U.dot,background:p.cat.color}}),t.jsx(Zr,{name:p.cat.icon,size:13,style:{color:p.cat.color,flexShrink:0}}),t.jsx("span",{style:U.legendName,children:p.cat.name}),t.jsxs("span",{style:U.legendPct,children:[Math.round(p.pct),"%"]}),t.jsx("span",{style:U.legendAmt,children:_(p.amount)})]},p.cat.id)),t.jsxs("button",{onClick:()=>C(p=>p==="ALL"?null:"ALL"),title:"Show every transaction in this period",style:{...U.legendRow,...U.legendRowBtn,...j==="ALL"?{background:"var(--hover)"}:{}},children:[t.jsx(Wi,{size:13,style:{color:"var(--text-2)",flexShrink:0}}),t.jsx("span",{style:{...U.legendName,fontWeight:700},children:"All categories"}),t.jsx("span",{style:U.legendAmt,children:_(oe)})]})]})]}),j&&(()=>{const p=j==="ALL",L=p?null:W[j],Fe=q.filter(Xe=>p||Xe.category_id===j).slice().sort((Xe,ot)=>ot.date.localeCompare(Xe.date)||ot.id-Xe.id),_e=Fe.reduce((Xe,ot)=>Xe+ot.amount,0);return t.jsxs("div",{style:U.drillBox,children:[t.jsxs("div",{style:U.drillHead,children:[t.jsx("span",{style:{...U.iconBadge,background:((L==null?void 0:L.color)||"#9A968C")+"1A",color:(L==null?void 0:L.color)||"#9A968C"},children:p?t.jsx(Wi,{size:15}):t.jsx(Zr,{name:L==null?void 0:L.icon,size:15})}),t.jsxs("span",{style:U.drillTitle,children:[p?"All categories":(L==null?void 0:L.name)||"Category"," · ",Fe.length," transaction",Fe.length===1?"":"s"," · ",_(_e)]}),t.jsx("button",{onClick:()=>C(null),style:U.delBtn,title:"Close",children:t.jsx(Be,{size:15})})]}),Fe.length===0?t.jsx("div",{style:U.muted,children:"No expenses in this period."}):t.jsx("div",{style:{...U.logList,...U.drillList},children:Fe.map(Xe=>{const ot=W[Xe.category_id];return t.jsxs("div",{style:U.logRow,children:[p&&t.jsx("span",{style:{...U.logIcon,background:((ot==null?void 0:ot.color)||"#9A968C")+"1A",color:(ot==null?void 0:ot.color)||"#9A968C"},children:t.jsx(Zr,{name:ot==null?void 0:ot.icon,size:14})}),t.jsxs("button",{onClick:()=>xt(Xe),style:U.logInfoBtn,title:"Edit this expense",children:[t.jsxs("div",{style:U.logCat,children:[p?`${(ot==null?void 0:ot.name)||"Other"} · `:"",new Date(Xe.date+"T00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"})]}),Xe.note&&t.jsx("div",{style:U.logNote,children:Xe.note})]}),t.jsx("span",{style:U.logAmt,children:_(Xe.amount)}),t.jsx("button",{onClick:()=>xt(Xe),style:U.editBtn,title:"Edit",children:t.jsx(St,{size:13})}),t.jsx("button",{onClick:()=>Y(Xe.id,(ot==null?void 0:ot.name)||"Expense"),style:U.delBtn,children:t.jsx(Be,{size:14})})]},Xe.id)})})]})})()]}),t.jsxs("div",{style:U.card,children:[t.jsx("div",{style:U.cardTitleRow,children:t.jsxs("div",{children:[t.jsx("div",{style:U.cardTitle,children:"Monthly trend"}),t.jsx("div",{style:U.cardSub,children:"Compare a month against the previous two"})]})}),t.jsx("div",{style:U.tagRow,children:D.map(p=>t.jsxs("button",{onClick:()=>A(p),style:{...U.tagChip,...be===p?U.tagChipOn:{}},children:[t.jsx(Wi,{size:11})," ",w(p)]},p))}),t.jsxs("div",{style:{...U.tagRow,marginTop:8},children:[t.jsxs("button",{onClick:()=>re(new Set),style:{...U.tagChip,...K.size===0?U.tagChipOn:{}},children:[t.jsx(Wi,{size:11})," All categories"]}),o.map(p=>{const L=K.has(p.id);return t.jsxs("button",{onClick:()=>ve(p.id),style:{...U.tagChip,...L?U.tagChipOn:{}},children:[t.jsx(Zr,{name:p.icon,size:11})," ",p.name,L&&t.jsx(Oe,{size:11,style:{marginLeft:2}})]},p.id)})]}),t.jsxs("div",{style:{...U.trend3,marginTop:16},children:[t.jsxs("div",{style:U.trendCol,children:[t.jsx("div",{style:U.trendVal,children:_(he)}),t.jsx("div",{style:U.trendLbl,children:w(H[0])})]}),t.jsxs("div",{style:U.trendCol,children:[t.jsx("div",{style:{...U.trendVal,color:"var(--text-2)"},children:_(Ee)}),t.jsx("div",{style:U.trendLbl,children:w(H[1])})]}),t.jsxs("div",{style:U.trendCol,children:[t.jsx("div",{style:{...U.trendVal,color:"var(--text-3)"},children:_(Qe)}),t.jsx("div",{style:U.trendLbl,children:w(H[2])})]})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:t.jsxs("div",{style:{...U.trendBadge,color:et,background:et+"1A"},children:[t.jsx(Le,{size:15})," ",st>0?"+":"",st,"% vs ",w(H[1])]})}),t.jsx(Op,{items:[{label:w(H[0]),value:he,color:Fr},{label:w(H[1]),value:Ee,color:"var(--text-3)"},{label:w(H[2]),value:Qe,color:"var(--text-3)"}],money:_}),t.jsx("div",{style:U.trendDivider}),t.jsxs("div",{style:U.cardSub,children:["Category split for ",w(be)]}),Ke.length===0?t.jsx("div",{style:U.muted,children:"No expenses logged for this month yet."}):t.jsxs("div",{style:{...U.pieWrap,marginTop:10},children:[t.jsxs("div",{style:U.pieChart,children:[t.jsx("div",{style:{...U.pieDisc,background:We}}),t.jsxs("div",{style:U.pieHole,children:[t.jsx("span",{style:U.pieHoleVal,children:_(he)}),t.jsx("span",{style:U.pieHoleLbl,children:"total"})]})]}),t.jsx("div",{style:U.pieLegend,children:ae.map(p=>t.jsxs("div",{style:U.legendRow,children:[t.jsx("span",{style:{...U.dot,background:p.cat.color}}),t.jsx(Zr,{name:p.cat.icon,size:13,style:{color:p.cat.color,flexShrink:0}}),t.jsx("span",{style:U.legendName,children:p.cat.name}),t.jsxs("span",{style:U.legendPct,children:[Math.round(p.pct),"%"]}),t.jsx("span",{style:U.legendAmt,children:_(p.amount)})]},p.cat.id))})]})]})]})]}),m&&t.jsx("div",{style:U.overlay,onClick:()=>b(null),children:t.jsxs("div",{style:U.modal,onClick:p=>p.stopPropagation(),children:[t.jsxs("div",{style:U.modalHead,children:[t.jsxs("span",{style:{...U.modalTitle,display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{...U.iconBadge,background:m.cat.color+"1A",color:m.cat.color},children:t.jsx(Zr,{name:m.cat.icon,size:16})}),m.cat.name]}),t.jsx("button",{onClick:()=>b(null),style:U.iconBtnPlain,children:t.jsx(Be,{size:16})})]}),t.jsx("label",{style:U.label,children:"Amount *"}),t.jsx("input",{autoFocus:!0,type:"number",inputMode:"decimal",value:m.amount,onChange:p=>b(L=>({...L,amount:p.target.value})),onKeyDown:p=>p.key==="Enter"&&It(),placeholder:"0",style:U.input}),t.jsx("label",{style:U.label,children:"Note (optional)"}),t.jsx("input",{value:m.note,maxLength:Do,onChange:p=>b(L=>({...L,note:p.target.value})),onKeyDown:p=>p.key==="Enter"&&It(),placeholder:"What was it for?",style:U.input}),t.jsxs("div",{style:U.noteCount,children:[m.note.length,"/",Do]}),t.jsxs("div",{style:U.modalActions,children:[t.jsx("button",{onClick:()=>b(null),style:U.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:It,disabled:!m.amount,style:{...U.saveBtn,...m.amount?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(Oe,{size:15})," Add"]})]})]})}),u&&(W[u.category_id],t.jsx("div",{style:U.overlay,onClick:()=>k(null),children:t.jsxs("div",{style:U.modal,onClick:p=>p.stopPropagation(),children:[t.jsxs("div",{style:U.modalHead,children:[t.jsx("span",{style:U.modalTitle,children:"Edit expense"}),t.jsx("button",{onClick:()=>k(null),style:U.iconBtnPlain,children:t.jsx(Be,{size:16})})]}),t.jsx("label",{style:U.label,children:"Category"}),t.jsx(nr,{value:u.category_id,options:o.map(p=>({value:p.id,label:p.name})),onChange:p=>k(L=>({...L,category_id:Number(p)})),style:{marginBottom:8}}),t.jsx("label",{style:U.label,children:"Amount *"}),t.jsx("input",{autoFocus:!0,type:"number",inputMode:"decimal",value:u.amount,onChange:p=>k(L=>({...L,amount:p.target.value})),onKeyDown:p=>p.key==="Enter"&&yt(),placeholder:"0",style:U.input}),t.jsx("label",{style:U.label,children:"Date"}),t.jsx("input",{type:"date",value:u.date,onChange:p=>k(L=>({...L,date:p.target.value})),style:U.input}),t.jsx("label",{style:U.label,children:"Note (optional)"}),t.jsx("input",{value:u.note,maxLength:Do,onChange:p=>k(L=>({...L,note:p.target.value})),onKeyDown:p=>p.key==="Enter"&&yt(),placeholder:"What was it for?",style:U.input}),t.jsxs("div",{style:U.noteCount,children:[u.note.length,"/",Do]}),t.jsxs("div",{style:U.modalActions,children:[t.jsx("button",{onClick:()=>k(null),style:U.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:yt,disabled:!u.amount,style:{...U.saveBtn,...u.amount?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(Oe,{size:15})," Save"]})]})]})})),v&&t.jsx("div",{style:U.overlay,onClick:()=>$(!1),children:t.jsxs("div",{style:U.modal,onClick:p=>p.stopPropagation(),children:[t.jsxs("div",{style:U.modalHead,children:[t.jsx("span",{style:U.modalTitle,children:"Customize categories"}),t.jsx("button",{onClick:()=>$(!1),style:U.iconBtnPlain,children:t.jsx(Be,{size:16})})]}),t.jsx("div",{style:U.manageHint,children:"Use the arrows to reorder how categories appear."}),t.jsx("div",{style:U.manageList,children:o.map((p,L)=>t.jsxs("div",{style:U.manageRow,children:[t.jsxs("div",{style:U.reorderCol,children:[t.jsx("button",{onClick:()=>Bt(L,-1),disabled:L===0,style:{...U.reorderBtn,...L===0?U.reorderDisabled:{}},title:"Move up",children:t.jsx(wl,{size:13})}),t.jsx("button",{onClick:()=>Bt(L,1),disabled:L===o.length-1,style:{...U.reorderBtn,...L===o.length-1?U.reorderDisabled:{}},title:"Move down",children:t.jsx(ro,{size:13})})]}),t.jsx("span",{style:{...U.iconBadge,background:p.color+"1A",color:p.color},children:t.jsx(Zr,{name:p.icon,size:15})}),t.jsx("span",{style:{flex:1,fontSize:13.5,fontWeight:600},children:p.name}),t.jsx("button",{onClick:()=>Er(p),style:U.delBtn,children:t.jsx(St,{size:13})}),t.jsx("button",{onClick:()=>dt(p),style:U.delBtn,children:t.jsx(Be,{size:14})})]},p.id))}),t.jsxs("button",{onClick:At,style:U.addColInline,children:[t.jsx(at,{size:13})," Add category"]})]})}),B&&t.jsx("div",{style:U.overlay,onClick:()=>x(null),children:t.jsxs("div",{style:U.modal,onClick:p=>p.stopPropagation(),children:[t.jsxs("div",{style:U.modalHead,children:[t.jsx("span",{style:U.modalTitle,children:B.id?"Edit category":"New category"}),t.jsx("button",{onClick:()=>x(null),style:U.iconBtnPlain,children:t.jsx(Be,{size:16})})]}),t.jsx("label",{style:U.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:B.name,onChange:p=>x(L=>({...L,name:p.target.value})),onKeyDown:p=>p.key==="Enter"&&Ne(),placeholder:"e.g. Vegetables, Petrol…",style:U.input}),t.jsx("label",{style:U.label,children:"Color"}),t.jsx("div",{style:U.colorRow,children:fd.map(p=>t.jsx("button",{onClick:()=>x(L=>({...L,color:p})),style:{...U.colorSwatch,background:p,...B.color===p?U.colorSwatchOn:{}}},p))}),t.jsx("label",{style:U.label,children:"Icon"}),t.jsx("div",{style:U.iconPickGrid,children:Object.keys(Vh).map(p=>t.jsx("button",{onClick:()=>x(L=>({...L,icon:p})),style:{...U.iconPick,...B.icon===p?{background:B.color+"22",borderColor:B.color,color:B.color}:{}},children:t.jsx(Zr,{name:p,size:17})},p))}),t.jsxs("div",{style:U.modalActions,children:[t.jsx("button",{onClick:()=>x(null),style:U.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:Ne,disabled:!B.name.trim(),style:{...U.saveBtn,...B.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(Oe,{size:15})," ",B.id?"Save":"Create"]})]})]})}),!y&&t.jsx("div",{style:U.muted,children:"Loading…"}),t.jsx(vr,{toasts:ce,onUndo:J,onDismiss:I})]})}function Op({items:e,money:r}){const n=Math.max(1,...e.map(o=>o.value));return t.jsx("div",{style:U.tbWrap,children:e.map((o,i)=>t.jsxs("div",{style:U.tbRow,children:[t.jsx("div",{style:U.tbLbl,children:o.label}),t.jsx("div",{style:U.tbTrack,children:t.jsx("div",{style:{...U.tbBar,width:`${o.value/n*100}%`,background:o.color}})}),t.jsx("div",{style:U.tbVal,children:r(o.value)})]},i))})}const U={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},totalCard:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:14,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:16,padding:"16px 18px",marginBottom:16,flexWrap:"wrap"},totalLeft:{display:"flex",alignItems:"center",gap:12},totalLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600},totalVal:{fontSize:24,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2},budgetLine:{fontSize:11.5,fontWeight:600,marginTop:4},scopeRow:{display:"flex",gap:6},scopeBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 13px",borderRadius:8,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},scopeBtnOn:{background:Fr,color:"#fff",borderColor:Fr},cols:{display:"grid",gap:16,alignItems:"start"},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},dayTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap",color:Fr},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},calNav:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,minmax(0,1fr))",gap:4},calDow:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",textAlign:"center",padding:"4px 0"},calCell:{position:"relative",border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:8,aspectRatio:"1",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},calCellOn:{background:Fr,color:"#fff",borderColor:Fr,fontWeight:700},calCellToday:{borderColor:Fr,fontWeight:700},calDot:{position:"absolute",bottom:3,width:4,height:4,borderRadius:"50%"},iconGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(64px, 1fr))",gap:10,marginTop:4},iconCell:{display:"flex",flexDirection:"column",alignItems:"center",gap:5},iconBtn:{width:52,height:52,borderRadius:14,border:"1px solid",display:"grid",placeItems:"center",cursor:"pointer"},iconBtnAdd:{width:52,height:52,borderRadius:14,border:"1px dashed var(--border)",background:"none",color:"var(--text-3)",display:"grid",placeItems:"center",cursor:"pointer"},iconLabel:{fontSize:10.5,fontWeight:600,color:"var(--text-2)",textAlign:"center",maxWidth:66,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},manageLink:{display:"inline-flex",alignItems:"center",gap:5,border:"none",background:"none",color:"var(--text-3)",fontSize:11.5,fontWeight:600,cursor:"pointer",marginTop:12,padding:0,fontFamily:"inherit"},logList:{marginTop:14,paddingTop:14,borderTop:"1px solid var(--border)",display:"flex",flexDirection:"column",gap:8},logRow:{display:"flex",alignItems:"center",gap:10,minWidth:0},logIcon:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},logInfoBtn:{flex:1,minWidth:0,border:"none",background:"none",padding:0,cursor:"pointer",textAlign:"left",fontFamily:"inherit",overflow:"hidden",color:"inherit"},logCat:{fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logNote:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logAmt:{fontSize:13.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap",flexShrink:0},editBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},noteCount:{fontSize:10.5,color:"var(--text-3)",textAlign:"right",marginTop:3},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:7},legendRowBtn:{width:"100%",border:"none",background:"none",cursor:"pointer",fontFamily:"inherit",padding:"5px 7px",borderRadius:8,textAlign:"left",color:"var(--text)"},drillBox:{marginTop:14,paddingTop:12,borderTop:"1px solid var(--border)"},drillList:{maxHeight:320,overflowY:"auto",paddingRight:4},drillHead:{display:"flex",alignItems:"center",gap:9,marginBottom:4},drillTitle:{flex:1,fontSize:13,fontWeight:700,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},dot:{width:9,height:9,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},iconBadge:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:8},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},manageHint:{fontSize:11.5,color:"var(--text-3)",marginBottom:8},manageList:{display:"flex",flexDirection:"column",gap:6,marginBottom:10,maxHeight:320,overflowY:"auto"},manageRow:{display:"flex",alignItems:"center",gap:10,padding:"6px 2px"},reorderCol:{display:"flex",flexDirection:"column",gap:1,flexShrink:0},reorderBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:22,height:17,borderRadius:5,cursor:"pointer",display:"grid",placeItems:"center",padding:0},reorderDisabled:{opacity:.35,cursor:"not-allowed"},addColInline:{display:"inline-flex",alignItems:"center",gap:5,border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"9px 12px",borderRadius:8,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},colorRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:4},colorSwatch:{width:26,height:26,borderRadius:"50%",border:"2px solid transparent",cursor:"pointer",padding:0},colorSwatchOn:{border:"2px solid var(--text)",boxShadow:"0 0 0 2px var(--surface)"},iconPickGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:4},iconPick:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:9,height:36,display:"grid",placeItems:"center",cursor:"pointer"},tagRow:{display:"flex",gap:6,flexWrap:"wrap"},tagChip:{display:"inline-flex",alignItems:"center",gap:4,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:20,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tagChipOn:{background:Fr,color:"#fff",borderColor:Fr},trendDivider:{height:1,background:"var(--border)",margin:"16px 0 12px"},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},threeDayTitle:{fontSize:13,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:64,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},mn="#C9A227",uo="#C2536B",ol="#4C9A6B";new Date().toISOString().slice(0,10);const e2=e=>e?new Date(e+"T00:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"—";function t2(e=620){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const yd=e=>(Number(e)||0).toLocaleString(void 0,{maximumFractionDigits:2});function r2(e){const r=e.target||0,n=e.completed||0;return r<=0?{pct:0,negPct:0,negative:!1}:n<0?{pct:0,negPct:Math.min(100,Math.abs(n)/r*100),negative:!0}:{pct:Math.min(100,n/r*100),negPct:0,negative:!1}}const n2=()=>({id:null,name:"",completed:"",target:"",end_date:"",reward:"",reward_cost:"",comment:"",allow_negative:!1});function o2(){const e=no(),r=u=>Ur(u,e.code),n=t2(),[o,i]=c.useState([]),[s,a]=c.useState(!1),[l,d]=c.useState(null),[g,h]=c.useState(null),y=c.useCallback(()=>{F.getChallenges().then(u=>{i(Array.isArray(u)?u:[]),a(!0)}).catch(()=>a(!0))},[]);c.useEffect(()=>{y()},[y]);const f=c.useMemo(()=>{const u=o.filter(j=>j.status==="done"),k=u.reduce((j,C)=>j+(C.reward_earned||0),0);return{total:o.length,done:u.length,active:o.filter(j=>j.status==="active").length,failed:o.filter(j=>j.status==="failed").length,earned:k}},[o]),E=()=>d(n2()),R=u=>d({id:u.id,name:u.name,completed:String(u.completed??""),target:String(u.target??""),end_date:u.end_date||"",reward:u.reward||"",reward_cost:String(u.reward_cost??""),comment:u.comment||"",allow_negative:!!u.allow_negative}),T=async()=>{const u=l.name.trim();if(!u)return;const k={name:u,completed:parseFloat(l.completed)||0,target:parseFloat(l.target)||0,end_date:l.end_date||null,reward:l.reward.trim(),reward_cost:parseFloat(l.reward_cost)||0,comment:l.comment.trim(),allow_negative:l.allow_negative};l.id?await F.updateChallenge(l.id,k):await F.createChallenge(k),d(null),y()},z=async u=>{window.confirm(`Delete challenge "${u.name}"?`)&&(await F.deleteChallenge(u.id),y())},m=u=>h({ch:u,amount:"",mode:"add"}),b=async()=>{const u=parseFloat(g.amount);if(isNaN(u))return;const k=g.mode==="set"?u:(g.ch.completed||0)+u;await F.updateChallenge(g.ch.id,{completed:k}),h(null),y()};return t.jsxs("div",{style:we.page,children:[t.jsxs("div",{style:we.head,children:[t.jsx("div",{style:we.eyebrow,children:"Anvil · Challenges"}),t.jsx("h1",{style:we.h1,children:"Challenges"}),t.jsx("div",{style:we.subhead,children:"Small steps toward success — track each toward its target and bank the reward on completion."})]}),t.jsxs("div",{style:we.statRow,children:[t.jsxs("div",{style:we.statCard,children:[t.jsx("div",{style:we.statVal,children:f.active}),t.jsx("div",{style:we.statLbl,children:"Active"})]}),t.jsxs("div",{style:we.statCard,children:[t.jsx("div",{style:{...we.statVal,color:ol},children:f.done}),t.jsx("div",{style:we.statLbl,children:"Completed"})]}),t.jsxs("div",{style:we.statCard,children:[t.jsx("div",{style:{...we.statVal,color:uo},children:f.failed}),t.jsx("div",{style:we.statLbl,children:"Missed"})]}),t.jsxs("div",{style:we.statCard,children:[t.jsx("div",{style:{...we.statVal,color:mn},children:r(f.earned)}),t.jsx("div",{style:we.statLbl,children:"Reward earned"})]})]}),t.jsxs("button",{onClick:E,style:we.addBtn,children:[t.jsx(at,{size:16})," New challenge"]}),o.length===0?t.jsx("div",{style:we.empty,children:s?"No challenges yet. Create your first small step toward success.":"Loading…"}):t.jsx("div",{style:we.list,children:o.map((u,k)=>{const{pct:j,negPct:C,negative:B}=r2(u),x=B?uo:u.status==="done"?ol:mn;return t.jsxs("div",{style:{...we.card,...u.status==="failed"?we.cardFailed:{}},children:[t.jsxs("div",{style:{...we.cardTop,...n?{alignItems:"flex-start"}:{}},children:[t.jsxs("span",{style:{...we.num,...n?{marginTop:2}:{}},children:["#",k+1]}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:{...we.name,...n?we.nameMobile:{}},children:u.name}),u.comment&&t.jsx("div",{style:we.comment,children:u.comment}),n&&t.jsx("div",{style:we.badgeRow,children:t.jsx(Hp,{status:u.status})})]}),!n&&t.jsx(Hp,{status:u.status}),t.jsx("button",{onClick:()=>R(u),style:we.iconBtn,title:"Edit",children:t.jsx(St,{size:13})}),t.jsx("button",{onClick:()=>z(u),style:we.iconBtn,title:"Delete",children:t.jsx(Be,{size:14})})]}),t.jsxs("div",{style:we.barWrap,children:[t.jsx("div",{style:we.barTrack,children:B?t.jsx("div",{style:{...we.barFill,width:`${C}%`,background:uo,marginLeft:"auto"}}):t.jsx("div",{style:{...we.barFill,width:`${j}%`,background:x}})}),t.jsxs("div",{style:we.barMetaRow,children:[t.jsxs("span",{style:{...we.completed,color:(u.completed||0)<0?uo:"var(--text)"},children:[(u.completed||0)<0&&t.jsx(qn,{size:12,style:{marginRight:3,verticalAlign:"-1px"}}),yd(u.completed)]}),t.jsx("span",{style:we.barPct,children:B?`-${Math.round(C)}%`:`${Math.round(j)}%`}),t.jsxs("span",{style:we.target,children:["of ",yd(u.target)]})]})]}),t.jsxs("div",{style:we.chips,children:[t.jsxs("span",{style:we.chip,children:[t.jsx(Zy,{size:12})," Remaining ",yd(u.remaining)]}),t.jsxs("span",{style:we.chip,children:[t.jsx(_y,{size:12})," ",u.end_date?`Ends ${e2(u.end_date)}`:"No deadline"]}),u.reward&&t.jsxs("span",{style:we.chip,children:[t.jsx(js,{size:12})," ",u.reward]}),u.reward_cost>0&&t.jsxs("span",{style:{...we.chip,...we.chipReward},children:[t.jsx(qr,{size:12})," ",r(u.reward_cost),u.status==="done"?" earned":""]}),u.allow_negative&&t.jsx("span",{style:{...we.chip,color:uo,borderColor:uo+"55"},children:"± negative allowed"})]}),t.jsx("div",{style:we.actions,children:t.jsxs("button",{onClick:()=>m(u),style:we.progressBtn,children:[t.jsx(at,{size:13})," Update progress"]})})]},u.id)})}),l&&t.jsx("div",{style:we.overlay,onClick:()=>d(null),children:t.jsxs("div",{style:we.modal,onClick:u=>u.stopPropagation(),children:[t.jsxs("div",{style:we.modalHead,children:[t.jsx("span",{style:we.modalTitle,children:l.id?"Edit challenge":"New challenge"}),t.jsx("button",{onClick:()=>d(null),style:we.iconBtnPlain,children:t.jsx(Be,{size:16})})]}),t.jsx("label",{style:we.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:l.name,onChange:u=>d(k=>({...k,name:u.target.value})),placeholder:"e.g. Earn ₹1,00,000 from trading",style:we.input}),t.jsxs("div",{style:we.grid2,children:[t.jsxs("div",{children:[t.jsx("label",{style:we.label,children:"Completed"}),t.jsx("input",{type:"number",inputMode:"decimal",value:l.completed,onChange:u=>d(k=>({...k,completed:u.target.value})),placeholder:"0",style:we.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:we.label,children:"Target"}),t.jsx("input",{type:"number",inputMode:"decimal",value:l.target,onChange:u=>d(k=>({...k,target:u.target.value})),placeholder:"0",style:we.input})]})]}),t.jsx("label",{style:we.label,children:"End date (optional — past & incomplete marks it missed)"}),t.jsx("input",{type:"date",value:l.end_date,onChange:u=>d(k=>({...k,end_date:u.target.value})),style:we.input}),t.jsxs("div",{style:we.grid2,children:[t.jsxs("div",{children:[t.jsx("label",{style:we.label,children:"Reward"}),t.jsx("input",{value:l.reward,onChange:u=>d(k=>({...k,reward:u.target.value})),placeholder:"e.g. New headphones",style:we.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:we.label,children:"Reward cost"}),t.jsx("input",{type:"number",inputMode:"decimal",value:l.reward_cost,onChange:u=>d(k=>({...k,reward_cost:u.target.value})),placeholder:"0",style:we.input})]})]}),t.jsx("label",{style:we.label,children:"Comment"}),t.jsx("input",{value:l.comment,onChange:u=>d(k=>({...k,comment:u.target.value})),placeholder:"Notes about this challenge",style:we.input}),t.jsxs("label",{style:we.toggleRow,children:[t.jsx("input",{type:"checkbox",checked:l.allow_negative,onChange:u=>d(k=>({...k,allow_negative:u.target.checked})),style:we.checkbox}),t.jsxs("span",{children:[t.jsx("span",{style:we.toggleLabel,children:"Allow negative progress"}),t.jsx("span",{style:we.toggleHint,children:"Let progress drop below zero (e.g. a running trading loss shown in red)."})]})]}),t.jsxs("div",{style:we.modalActions,children:[t.jsx("button",{onClick:()=>d(null),style:we.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:T,disabled:!l.name.trim(),style:{...we.saveBtn,...l.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(Oe,{size:15})," ",l.id?"Save":"Create"]})]})]})}),g&&t.jsx("div",{style:we.overlay,onClick:()=>h(null),children:t.jsxs("div",{style:we.modal,onClick:u=>u.stopPropagation(),children:[t.jsxs("div",{style:we.modalHead,children:[t.jsxs("span",{style:we.modalTitle,children:["Update · ",g.ch.name]}),t.jsx("button",{onClick:()=>h(null),style:we.iconBtnPlain,children:t.jsx(Be,{size:16})})]}),t.jsxs("div",{style:we.progressCur,children:["Current: ",t.jsx("b",{children:r(g.ch.completed)})," of ",r(g.ch.target)]}),t.jsxs("div",{style:we.modeRow,children:[t.jsx("button",{onClick:()=>h(u=>({...u,mode:"add"})),style:{...we.modeBtn,...g.mode==="add"?we.modeBtnOn:{}},children:"Add / subtract"}),t.jsx("button",{onClick:()=>h(u=>({...u,mode:"set"})),style:{...we.modeBtn,...g.mode==="set"?we.modeBtnOn:{}},children:"Set total"})]}),t.jsx("label",{style:we.label,children:g.mode==="set"?"New completed total":"Amount to add (use a negative number to subtract)"}),t.jsx("input",{autoFocus:!0,type:"number",inputMode:"decimal",value:g.amount,onChange:u=>h(k=>({...k,amount:u.target.value})),onKeyDown:u=>u.key==="Enter"&&b(),placeholder:"0",style:we.input}),!g.ch.allow_negative&&t.jsx("div",{style:we.progressHint,children:"Negative totals are blocked for this challenge. Enable “Allow negative progress” to permit them."}),t.jsxs("div",{style:we.modalActions,children:[t.jsx("button",{onClick:()=>h(null),style:we.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:b,disabled:g.amount===""||isNaN(parseFloat(g.amount)),style:{...we.saveBtn,...g.amount===""||isNaN(parseFloat(g.amount))?{opacity:.5,cursor:"not-allowed"}:{}},children:[t.jsx(Oe,{size:15})," Save"]})]})]})})]})}function Hp({status:e}){const r={done:{label:"Completed",color:ol},failed:{label:"Missed",color:uo},active:{label:"In progress",color:"#3A7CA5"}},n=r[e]||r.active;return t.jsx("span",{style:{...we.badge,color:n.color,background:n.color+"1A",borderColor:n.color+"44"},children:n.label})}const we={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:780,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},statRow:{display:"flex",gap:10,marginBottom:14,flexWrap:"wrap"},statCard:{flex:1,minWidth:120,background:"var(--surface)",borderRadius:12,padding:"12px 14px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},statVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},addBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"none",background:mn,color:"#fff",padding:"10px 16px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginBottom:16},empty:{fontSize:13.5,color:"var(--text-3)",textAlign:"center",padding:"40px 0",background:"var(--surface)",borderRadius:16,border:"1px dashed var(--border)"},list:{display:"flex",flexDirection:"column",gap:14},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardFailed:{opacity:.72},cardTop:{display:"flex",alignItems:"center",gap:10},num:{fontSize:12,fontWeight:800,color:"var(--text-3)",fontFamily:"'Fraunces',Georgia,serif",flexShrink:0},name:{fontSize:15.5,fontWeight:700,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},nameMobile:{whiteSpace:"normal",overflow:"visible",textOverflow:"clip",wordBreak:"break-word",lineHeight:1.25},badgeRow:{marginTop:6},comment:{fontSize:12,color:"var(--text-3)",marginTop:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},badge:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:20,border:"1px solid",flexShrink:0,whiteSpace:"nowrap"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},barWrap:{marginTop:14},barTrack:{height:14,background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:8,overflow:"hidden",display:"flex"},barFill:{height:"100%",borderRadius:7,transition:"width 0.3s"},barMetaRow:{display:"flex",alignItems:"baseline",gap:8,marginTop:6},completed:{fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},barPct:{fontSize:12,fontWeight:700,color:"var(--text-2)"},target:{fontSize:12,color:"var(--text-3)",marginLeft:"auto"},chips:{display:"flex",gap:7,flexWrap:"wrap",marginTop:12},chip:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:600,color:"var(--text-2)",border:"1px solid var(--border)",borderRadius:20,padding:"4px 10px"},chipReward:{color:mn,borderColor:mn+"55",background:mn+"12"},actions:{marginTop:12},progressBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 14px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:460,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:4},grid2:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},toggleRow:{display:"flex",alignItems:"flex-start",gap:9,marginTop:14,cursor:"pointer"},checkbox:{width:17,height:17,marginTop:1,accentColor:mn,cursor:"pointer",flexShrink:0},toggleLabel:{display:"block",fontSize:13,fontWeight:700},toggleHint:{display:"block",fontSize:11.5,color:"var(--text-3)",marginTop:2},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:ol,color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},progressCur:{fontSize:13,color:"var(--text-2)",marginBottom:12},progressHint:{fontSize:11.5,color:"var(--text-3)",marginTop:6},modeRow:{display:"flex",gap:6,marginBottom:8},modeBtn:{flex:1,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 10px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modeBtnOn:{background:mn,color:"#fff",borderColor:mn}},$i="#8268B0",ts="#4C9A6B",i2=e=>e?new Date(e+"T00:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"",s2=()=>({id:null,wish:"",cost:"",note:"",link:""});function a2(){const e=no(),r=z=>Ur(z,e.code),[n,o]=c.useState([]),[i,s]=c.useState(!1),[a,l]=c.useState(null),d=c.useCallback(()=>{F.getBucket().then(z=>{o(Array.isArray(z)?z:[]),s(!0)}).catch(()=>s(!0))},[]);c.useEffect(()=>{d()},[d]);const g=c.useMemo(()=>{const z=n.filter(m=>!m.fulfilled);return{total:n.length,fulfilled:n.filter(m=>m.fulfilled).length,openCost:z.reduce((m,b)=>m+(b.cost||0),0)}},[n]),h=()=>l(s2()),y=z=>l({id:z.id,wish:z.wish,cost:String(z.cost??""),note:z.note||"",link:z.link||""}),f=async()=>{const z=a.wish.trim();if(!z)return;const m={wish:z,cost:parseFloat(a.cost)||0,note:a.note.trim(),link:a.link.trim()};a.id?await F.updateBucketWish(a.id,m):await F.createBucketWish(m),l(null),d()},E=async z=>{window.confirm(`Delete "${z.wish}" from your bucket list?`)&&(await F.deleteBucketWish(z.id),d())},R=async z=>{await F.updateBucketWish(z.id,{fulfilled:!z.fulfilled}),d()},T=async(z,m)=>{const b=z+m;if(b<0||b>=n.length)return;const u=[...n];[u[z],u[b]]=[u[b],u[z]],o(u),await F.arrangeBucket(u.map(k=>k.id)).catch(()=>{}),d()};return t.jsxs("div",{style:Ue.page,children:[t.jsxs("div",{style:Ue.head,children:[t.jsx("div",{style:Ue.eyebrow,children:"Anvil · Bucket List"}),t.jsx("h1",{style:Ue.h1,children:"Bucket List"}),t.jsx("div",{style:Ue.subhead,children:"The materialistic wishes you want to fulfil, big or small — ordered by what matters most."})]}),t.jsxs("div",{style:Ue.statRow,children:[t.jsxs("div",{style:Ue.statCard,children:[t.jsx("div",{style:Ue.statVal,children:g.total}),t.jsx("div",{style:Ue.statLbl,children:"Wishes"})]}),t.jsxs("div",{style:Ue.statCard,children:[t.jsx("div",{style:{...Ue.statVal,color:ts},children:g.fulfilled}),t.jsx("div",{style:Ue.statLbl,children:"Fulfilled"})]}),t.jsxs("div",{style:Ue.statCard,children:[t.jsx("div",{style:{...Ue.statVal,color:$i},children:r(g.openCost)}),t.jsx("div",{style:Ue.statLbl,children:"Still wished"})]})]}),t.jsxs("button",{onClick:h,style:Ue.addBtn,children:[t.jsx(at,{size:16})," New wish"]}),n.length===0?t.jsx("div",{style:Ue.empty,children:i?"No wishes yet. Add the first thing you'd love to have.":"Loading…"}):t.jsx("div",{style:Ue.list,children:n.map((z,m)=>t.jsxs("div",{style:{...Ue.card,...z.fulfilled?Ue.cardDone:{}},children:[t.jsxs("div",{style:Ue.reorderCol,children:[t.jsx("button",{onClick:()=>T(m,-1),disabled:m===0,style:{...Ue.reorderBtn,...m===0?Ue.reorderOff:{}},title:"Higher priority",children:t.jsx(wl,{size:14})}),t.jsx("span",{style:Ue.rank,children:m+1}),t.jsx("button",{onClick:()=>T(m,1),disabled:m===n.length-1,style:{...Ue.reorderBtn,...m===n.length-1?Ue.reorderOff:{}},title:"Lower priority",children:t.jsx(ro,{size:14})})]}),t.jsxs("div",{style:Ue.body,children:[t.jsxs("div",{style:Ue.topRow,children:[t.jsx("span",{style:{...Ue.wishName,...z.fulfilled?Ue.wishNameDone:{}},children:z.wish}),t.jsx("span",{style:Ue.cost,children:r(z.cost)})]}),z.note&&t.jsx("div",{style:Ue.note,children:z.note}),t.jsxs("div",{style:Ue.metaRow,children:[z.fulfilled&&t.jsxs("span",{style:Ue.doneBadge,children:[t.jsx(Rg,{size:11})," Fulfilled",z.fulfilled_date?` · ${i2(z.fulfilled_date)}`:""]}),z.link&&t.jsxs("a",{href:z.link,target:"_blank",rel:"noreferrer",style:Ue.link,children:[t.jsx(pc,{size:11})," Link"]})]})]}),t.jsxs("div",{style:Ue.actions,children:[t.jsxs("button",{onClick:()=>R(z),style:{...Ue.pill,...z.fulfilled?{}:{color:ts,borderColor:ts+"66"}},title:z.fulfilled?"Mark as not fulfilled":"Mark fulfilled",children:[t.jsx(Oe,{size:13})," ",z.fulfilled?"Undo":"Fulfilled"]}),t.jsx("button",{onClick:()=>y(z),style:Ue.iconBtn,title:"Edit",children:t.jsx(St,{size:13})}),t.jsx("button",{onClick:()=>E(z),style:Ue.iconBtn,title:"Delete",children:t.jsx(Be,{size:14})})]})]},z.id))}),t.jsx("div",{style:Ue.footNote,children:"Enable “Fulfil from bucket list” in the Rewards screen to spend your pending reward on these wishes."}),a&&t.jsx("div",{style:Ue.overlay,onClick:()=>l(null),children:t.jsxs("div",{style:Ue.modal,onClick:z=>z.stopPropagation(),children:[t.jsxs("div",{style:Ue.modalHead,children:[t.jsx("span",{style:Ue.modalTitle,children:a.id?"Edit wish":"New wish"}),t.jsx("button",{onClick:()=>l(null),style:Ue.iconBtnPlain,children:t.jsx(Be,{size:16})})]}),t.jsx("label",{style:Ue.label,children:"Wish *"}),t.jsx("input",{autoFocus:!0,value:a.wish,onChange:z=>l(m=>({...m,wish:z.target.value})),placeholder:"e.g. PlayStation 5, trip to Japan",style:Ue.input}),t.jsx("label",{style:Ue.label,children:"Cost"}),t.jsx("input",{type:"number",inputMode:"decimal",value:a.cost,onChange:z=>l(m=>({...m,cost:z.target.value})),placeholder:"0",style:Ue.input}),t.jsx("label",{style:Ue.label,children:"Link (optional)"}),t.jsx("input",{value:a.link,onChange:z=>l(m=>({...m,link:z.target.value})),placeholder:"https://…",style:Ue.input}),t.jsx("label",{style:Ue.label,children:"Note (optional)"}),t.jsx("input",{value:a.note,onChange:z=>l(m=>({...m,note:z.target.value})),placeholder:"colour, model, why you want it…",style:Ue.input}),t.jsxs("div",{style:Ue.modalActions,children:[t.jsx("button",{onClick:()=>l(null),style:Ue.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:f,disabled:!a.wish.trim(),style:{...Ue.saveBtn,...a.wish.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(Oe,{size:15})," ",a.id?"Save":"Add wish"]})]})]})})]})}const Ue={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:720,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},statRow:{display:"flex",gap:10,marginBottom:14,flexWrap:"wrap"},statCard:{flex:1,minWidth:110,background:"var(--surface)",borderRadius:12,padding:"12px 14px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},statVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},addBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"none",background:$i,color:"#fff",padding:"10px 16px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginBottom:16},empty:{fontSize:13.5,color:"var(--text-3)",textAlign:"center",padding:"40px 0",background:"var(--surface)",borderRadius:16,border:"1px dashed var(--border)"},list:{display:"flex",flexDirection:"column",gap:10},card:{display:"flex",gap:12,alignItems:"stretch",background:"var(--surface)",borderRadius:14,padding:"12px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardDone:{opacity:.7},reorderCol:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:2,flexShrink:0},reorderBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:24,height:20,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center",padding:0},reorderOff:{opacity:.3,cursor:"not-allowed"},rank:{fontSize:12,fontWeight:800,color:"var(--text-3)",fontFamily:"'Fraunces',Georgia,serif",padding:"1px 0"},body:{flex:1,minWidth:0},topRow:{display:"flex",justifyContent:"space-between",gap:10,alignItems:"baseline"},wishName:{fontSize:15,fontWeight:700,minWidth:0,wordBreak:"break-word"},wishNameDone:{textDecoration:"line-through",color:"var(--text-3)"},cost:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:$i,flexShrink:0,whiteSpace:"nowrap"},note:{fontSize:12.5,color:"var(--text-3)",marginTop:3},metaRow:{display:"flex",gap:8,flexWrap:"wrap",marginTop:7,alignItems:"center"},doneBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11,fontWeight:700,color:ts,background:ts+"1A",borderRadius:20,padding:"3px 9px"},link:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:700,color:$i,textDecoration:"none"},actions:{display:"flex",flexDirection:"column",gap:6,alignItems:"flex-end",justifyContent:"center",flexShrink:0},pill:{display:"inline-flex",alignItems:"center",gap:4,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 10px",borderRadius:8,fontSize:11.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",whiteSpace:"nowrap"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:26,height:26,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},footNote:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",marginTop:18,fontStyle:"italic"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:4},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:$i,color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},rs="#3A7CA5",Ot="#4C9A6B",Ft="#C2536B",il=[{id:"swing",label:"Swing",color:"#8268B0"},{id:"fno",label:"FnO",color:"#C9772E"},{id:"intraday",label:"Intraday",color:"#3A7CA5"}],ga=e=>il.find(r=>r.id===e)||il[0],l2=new Set(["fno","intraday"]),Gp=e=>l2.has(e),Yh=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,ua=Yh(new Date),d2=e=>new Date(e+"T00:00").toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"}),Up=e=>e?new Date(e+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"—",lr=e=>e===""||e===null||e===void 0||isNaN(parseFloat(e))?0:parseFloat(e),vd=(e,r)=>{const n=lr(e.qty);return r==="profit"?Math.abs(lr(e.tgt_price)-lr(e.entry_price))*n:-Math.abs(lr(e.sl_price)-lr(e.entry_price))*n};function c2(e,r,n,o){const i=lr(e.entry_price),s=lr(e.sl_price),a=lr(e.tgt_price),l=lr(e.qty),d=e.direction==="short";if(!e.instrument.trim())return"Enter the instrument.";if(i<=0||s<=0||a<=0||l<=0)return"Entry, SL, target and quantity must all be greater than zero.";if(d){if(s<=i)return"For a short, stop loss must be greater than the entry price (CMP).";if(a>=i)return"For a short, target must be less than the entry price (CMP)."}else{if(s>=i)return"Stop loss must be less than the entry price (CMP).";if(a<=i)return"Target must be greater than the entry price (CMP)."}const g=Math.abs(i-s),h=Math.abs(a-i),y=r.capital||0;if(r.rr>0&&h<r.rr*g-1e-9){const E=d?i-r.rr*g:i+r.rr*g;return`Risk:reward must be ≥ 1:${r.rr}. Target must be ${d?"at most":"at least"} ${E.toLocaleString()}.`}if(r.risk_pct>0&&y>0){const E=y*r.risk_pct/100,R=g*l;if(R>E+1e-9)return`This risks ${o(R)} — over your ${r.risk_pct}% limit of ${o(E)}. Reduce qty or tighten SL.`}const f=(r.diversification||{})[e.kind]||0;if(f>0){if(y>0){const E=y/f,R=i*l;if(R>E+1e-9)return`Position value ${o(R)} exceeds the diversification cap ${o(E)} (capital ÷ ${f}).`}if(n>=f)return`You already hold ${n} open ${e.kind} trade(s); diversification allows ${f}.`}return""}function g2(e=760){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const u2=e=>({id:null,kind:"swing",direction:"long",instrument:"",purchase_date:e,entry_price:"",sl_price:"",tgt_price:"",qty:"",note:""});function p2(){const e=g2(),r=no(),n=w=>Ss(w,r.code),[o,i]=c.useState([]),[s,a]=c.useState({}),[l,d]=c.useState(0),[g,h]=c.useState(0),[y,f]=c.useState(0),[E,R]=c.useState({capital:0,risk_pct:0,rr:0,diversification:{swing:0,fno:0,intraday:0}}),[T,z]=c.useState(!1),[m,b]=c.useState(ua),[u,k]=c.useState(()=>{const w=new Date;return new Date(w.getFullYear(),w.getMonth(),1)}),[j,C]=c.useState(null),[B,x]=c.useState(null),[v,$]=c.useState(""),Q=c.useCallback(()=>{F.getTrades().then(w=>{i(w.entries),a(w.learnings||{}),d(w.capital||0),h(w.net_pl||0),f(w.current||0),w.rules&&R(w.rules),z(!0)}).catch(()=>z(!0))},[]);c.useEffect(()=>{Q()},[Q]),c.useEffect(()=>{$(s[m]||"")},[m,s]);const ne=c.useMemo(()=>o.filter(w=>w.status==="open"),[o]),be=c.useMemo(()=>o.filter(w=>w.status!=="open"),[o]),A=c.useMemo(()=>{if(!j)return"";const w=ne.filter(ie=>ie.kind===j.kind&&ie.id!==j.id).length;return c2(j,E,w,n)},[j,E,ne,r.code]),K=c.useMemo(()=>{const w={};return be.forEach(ie=>{w[ie.date]=(w[ie.date]||0)+(Number(ie.pl)||0)}),w},[be]),re=be.filter(w=>w.date===m),ve=K[m]||0,Z=ve>0?"positive":ve<0?"negative":"neutral",Y=c.useMemo(()=>{const w=u,ie=(w.getDay()+6)%7,me=new Date(w.getFullYear(),w.getMonth()+1,0).getDate(),H=[];for(let fe=0;fe<ie;fe++)H.push(null);for(let fe=1;fe<=me;fe++){const he=Yh(new Date(w.getFullYear(),w.getMonth(),fe)),Ee=K[he],Qe=!!s[he];H.push({date:he,day:fe,pl:Ee,hasLearning:Qe,has:Ee!==void 0||Qe})}return H},[u,K,s]),ce=w=>k(ie=>new Date(ie.getFullYear(),ie.getMonth()+w,1)),J=u.toLocaleDateString("en-US",{month:"long",year:"numeric"}),I=(w="swing")=>C({...u2(m),kind:w}),W=w=>C({id:w.id,kind:w.kind,direction:w.direction||"long",instrument:w.instrument,purchase_date:w.purchase_date||w.date,entry_price:w.entry_price??"",sl_price:w.sl_price??"",tgt_price:w.tgt_price??"",qty:w.qty??"",note:w.note||""}),_=w=>C(ie=>({...ie,kind:w,direction:Gp(w)?ie.direction:"long"})),P=async()=>{if(A)return;const w={kind:j.kind,direction:j.direction,instrument:j.instrument.trim(),purchase_date:j.purchase_date,entry_price:lr(j.entry_price),sl_price:lr(j.sl_price),tgt_price:lr(j.tgt_price),qty:lr(j.qty),note:j.note.trim()};try{j.id?await F.updateTradeEntry(j.id,w):await F.createTradeEntry(w),C(null),Q()}catch(ie){window.alert(ie.message||"Could not save this trade.")}},de=async w=>{window.confirm("Delete this trade?")&&(await F.deleteTradeEntry(w.id),Q())},ge=(w,ie)=>x({trade:w,outcome:ie,date:w.kind==="intraday"&&w.purchase_date||ua}),De=async()=>{try{await F.bookTradeEntry(B.trade.id,B.outcome,B.date),x(null),Q()}catch(w){window.alert(w.message||"Could not book this trade.")}},q=async w=>{await F.reopenTradeEntry(w.id),Q()},oe=async()=>{await F.setTradeLearning(m,v),Q()},G=(s[m]||"")!==v,le=y>=l,D=g>0?Ot:g<0?Ft:"var(--text)";return t.jsxs("div",{style:X.page,children:[t.jsx("div",{style:X.head,children:t.jsxs("div",{children:[t.jsx("div",{style:X.eyebrow,children:"Anvil · Trading Journal"}),t.jsx("h1",{style:X.h1,children:"Trading Journal"}),t.jsx("div",{style:X.subhead,children:"Open trades with your entry, SL & target — book profit/loss and P/L is calculated for you."})]})}),t.jsxs("div",{style:X.capStrip,children:[t.jsxs("div",{style:X.capBox,children:[t.jsxs("div",{style:X.capLabel,children:[t.jsx(Cl,{size:13})," Starting capital"]}),t.jsx("div",{style:X.capVal,children:n(l)}),t.jsx("div",{style:X.capHint,children:"Set in Settings → Trading"})]}),t.jsxs("div",{style:X.capBox,children:[t.jsxs("div",{style:X.capLabel,children:[t.jsx(gh,{size:13})," Net P/L (booked)"]}),t.jsxs("div",{style:{...X.capVal,color:D},children:[g>=0?"+":"",n(g)]}),t.jsxs("div",{style:X.capHint,children:[be.length," booked · ",ne.length," open"]})]}),t.jsxs("div",{style:{...X.capBox,...X.capBoxMain,borderColor:le?Ot:Ft},children:[t.jsxs("div",{style:X.capLabel,children:[le?t.jsx(Zi,{size:13,color:Ot}):t.jsx(qn,{size:13,color:Ft})," Current balance"]}),t.jsx("div",{style:{...X.capValBig,color:le?Ot:Ft},children:n(y)}),t.jsx("div",{style:X.capHint,children:le?"Above starting capital":"Below starting capital"})]})]}),t.jsxs("div",{style:X.card,children:[t.jsxs("div",{style:X.cardTitleRow,children:[t.jsxs("div",{children:[t.jsxs("div",{style:X.cardTitle,children:[t.jsx(uh,{size:15,color:rs})," Open trades"]}),t.jsx("div",{style:X.cardSub,children:"Positions you haven't booked yet — mark profit or loss when you exit."})]}),t.jsx("div",{style:X.addRow,children:il.map(w=>t.jsxs("button",{onClick:()=>I(w.id),style:{...X.addKindBtn,color:w.color,borderColor:w.color+"55",background:w.color+"12"},children:[t.jsx(at,{size:14})," ",w.label]},w.id))})]}),ne.length>0?t.jsx("div",{style:X.openScroll,children:ne.map(w=>{const ie=ga(w.kind);return t.jsxs("div",{style:X.openRow,children:[t.jsx("span",{style:{...X.kindTag,background:ie.color+"1A",color:ie.color},children:ie.label}),t.jsxs("div",{style:X.openBody,children:[t.jsxs("div",{style:X.openTop,children:[t.jsxs("span",{style:X.tradeInstr,children:[w.instrument||"—",t.jsx(Vp,{direction:w.direction})]}),t.jsx("span",{style:X.openQty,children:w.qty?`${w.qty} qty`:""})]}),t.jsxs("div",{style:X.openMeta,children:[t.jsxs("span",{style:X.metaPill,children:["Bought ",Up(w.purchase_date)]}),w.entry_price?t.jsxs("span",{style:X.metaPill,children:["Entry ",w.entry_price]}):null,w.sl_price?t.jsxs("span",{style:{...X.metaPill,color:Ft},children:["SL ",w.sl_price]}):null,w.tgt_price?t.jsxs("span",{style:{...X.metaPill,color:Ot},children:["TGT ",w.tgt_price]}):null]})]}),t.jsxs("div",{style:X.bookBtns,children:[t.jsxs("button",{onClick:()=>ge(w,"profit"),style:{...X.bookBtn,background:Ot},children:[t.jsx(Zi,{size:13})," Profit"]}),t.jsxs("button",{onClick:()=>ge(w,"loss"),style:{...X.bookBtn,background:Ft},children:[t.jsx(qn,{size:13})," Loss"]}),t.jsx("button",{onClick:()=>W(w),style:X.iconGhost,title:"Edit",children:t.jsx(St,{size:13})}),t.jsx("button",{onClick:()=>de(w),style:X.iconGhost,title:"Delete",children:t.jsx(ci,{size:13})})]})]},w.id)})}):t.jsx("div",{style:X.noTrades,children:T?"No open trades. Add one with the buttons above.":"Loading…"})]}),t.jsxs("div",{style:{...X.cols,gridTemplateColumns:e?"1fr":"320px 1fr"},children:[t.jsxs("div",{style:X.card,children:[t.jsxs("div",{style:X.calHead,children:[t.jsx("button",{onClick:()=>ce(-1),style:X.calNav,children:t.jsx(In,{size:16})}),t.jsx("span",{style:X.calTitle,children:J}),t.jsx("button",{onClick:()=>ce(1),style:X.calNav,children:t.jsx(ln,{size:16})})]}),t.jsxs("div",{style:X.calGrid,children:[["M","T","W","T","F","S","S"].map((w,ie)=>t.jsx("div",{style:X.calDow,children:w},ie)),Y.map((w,ie)=>w===null?t.jsx("div",{},ie):t.jsxs("button",{onClick:()=>b(w.date),style:{...X.calCell,...w.date===m?X.calCellOn:{},...w.date===ua&&w.date!==m?X.calCellToday:{}},children:[t.jsx("span",{children:w.day}),w.pl!==void 0&&w.pl!==0&&t.jsx("span",{style:{...X.calDot,background:w.date===m?"#fff":w.pl>0?Ot:Ft}}),w.pl===void 0&&w.hasLearning&&t.jsx("span",{style:{...X.calDot,background:w.date===m?"#fff":"var(--text-3)"}})]},w.date))]}),t.jsxs("div",{style:X.calLegend,children:[t.jsxs("span",{children:[t.jsx("span",{style:{...X.legDot,background:Ot}})," Profit"]}),t.jsxs("span",{children:[t.jsx("span",{style:{...X.legDot,background:Ft}})," Loss"]}),t.jsxs("span",{children:[t.jsx("span",{style:{...X.legDot,background:"var(--text-3)"}})," Learning only"]})]})]}),t.jsxs("div",{children:[t.jsxs("div",{style:X.card,children:[t.jsxs("div",{style:X.cardTitleRow,children:[t.jsxs("div",{children:[t.jsx("div",{style:X.cardTitle,children:d2(m)}),t.jsxs("div",{style:X.cardSub,children:[re.length," booked trade",re.length===1?"":"s"," this day"]})]}),t.jsxs("div",{style:X.dayPLWrap,children:[t.jsx("span",{style:{...X.sentiment,...Z==="positive"?{background:Ot+"1A",color:Ot}:Z==="negative"?{background:Ft+"1A",color:Ft}:{background:"var(--hover)",color:"var(--text-3)"}},children:Z==="positive"?"Positive day":Z==="negative"?"Negative day":"No trades"}),t.jsxs("span",{style:{...X.dayPL,color:ve>0?Ot:ve<0?Ft:"var(--text-2)"},children:[ve>=0?"+":"",n(ve)]})]})]}),re.length>0?t.jsx("div",{style:X.tradeList,children:re.map(w=>{const ie=ga(w.kind),me=(Number(w.pl)||0)>=0;return t.jsxs("div",{style:X.tradeRow,children:[t.jsx("span",{style:{...X.kindTag,background:ie.color+"1A",color:ie.color},children:ie.label}),t.jsxs("div",{style:X.tradeBody,children:[t.jsxs("div",{style:X.tradeTop,children:[t.jsxs("span",{style:X.tradeInstr,children:[w.instrument||"—",t.jsx(Vp,{direction:w.direction})]}),t.jsxs("span",{style:{...X.tradePL,color:me?Ot:Ft},children:[me?"+":"",n(Number(w.pl)||0)]})]}),t.jsxs("div",{style:X.tradeMeta,children:[w.entry_price?t.jsxs("span",{style:X.metaPill,children:["Entry ",w.entry_price]}):null,w.sl_price?t.jsxs("span",{style:X.metaPill,children:["SL ",w.sl_price]}):null,w.tgt_price?t.jsxs("span",{style:X.metaPill,children:["TGT ",w.tgt_price]}):null,w.qty?t.jsxs("span",{style:X.metaPill,children:[w.qty," qty"]}):null,w.purchase_date&&w.purchase_date!==w.date&&t.jsxs("span",{style:X.metaPill,children:["Bought ",Up(w.purchase_date)]}),w.note&&t.jsx("span",{style:X.tradeNote,children:w.note})]})]}),t.jsx("button",{onClick:()=>q(w),style:X.iconGhost,title:"Reopen",children:t.jsx(Th,{size:13})}),t.jsx("button",{onClick:()=>de(w),style:X.iconGhost,title:"Delete",children:t.jsx(ci,{size:13})})]},w.id)})}):t.jsx("div",{style:X.noTrades,children:"No trades booked on this day — you can still record a learning below."})]}),t.jsxs("div",{style:X.card,children:[t.jsxs("div",{style:X.cardTitle,children:[t.jsx(kl,{size:15,color:rs})," Daily learning"]}),t.jsx("textarea",{value:v,onChange:w=>$(w.target.value),placeholder:"What did you learn today? Mistakes, what worked, discipline notes…",style:X.learnArea}),t.jsxs("button",{onClick:oe,disabled:!G,style:{...X.saveBtn,...G?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(Oe,{size:14})," Save learning"]})]})]})]}),j&&(()=>{const w=ga(j.kind),ie=j.direction==="short",me=ie?Ft:Ot,H=vd(j,"profit"),fe=vd(j,"loss");return t.jsx("div",{style:X.overlay,onClick:()=>C(null),children:t.jsxs("div",{style:X.sheet,onClick:he=>he.stopPropagation(),children:[t.jsxs("div",{style:{...X.sheetHead,background:`linear-gradient(135deg, ${w.color}, ${me})`},children:[t.jsxs("div",{style:X.sheetHeadRow,children:[t.jsx("span",{style:X.sheetKicker,children:j.id?"Edit position":"New position"}),t.jsx("button",{onClick:()=>C(null),style:X.sheetClose,children:t.jsx(Be,{size:16})})]}),t.jsx("div",{style:X.sheetTitle,children:j.instrument||"Open trade"}),t.jsxs("div",{style:X.sheetChips,children:[t.jsx("span",{style:X.sheetChip,children:w.label}),t.jsx("span",{style:X.sheetChip,children:ie?"Short ▼":"Long ▲"}),lr(j.qty)>0&&t.jsxs("span",{style:X.sheetChip,children:[lr(j.qty)," qty"]})]})]}),t.jsxs("div",{style:X.sheetBody,children:[t.jsx("label",{style:X.fLabel,children:"Type"}),t.jsx("div",{style:X.seg,children:il.map(he=>t.jsx("button",{type:"button",onClick:()=>_(he.id),style:{...X.segBtn,...j.kind===he.id?{...X.segBtnOn,background:he.color}:{}},children:he.label},he.id))}),Gp(j.kind)&&t.jsxs(t.Fragment,{children:[t.jsx("label",{style:X.fLabel,children:"Direction"}),t.jsxs("div",{style:X.seg,children:[t.jsxs("button",{type:"button",onClick:()=>C(he=>({...he,direction:"long"})),style:{...X.segBtn,...ie?{}:{...X.segBtnOn,background:Ot}},children:[t.jsx(Zi,{size:14})," Long"]}),t.jsxs("button",{type:"button",onClick:()=>C(he=>({...he,direction:"short"})),style:{...X.segBtn,...ie?{...X.segBtnOn,background:Ft}:{}},children:[t.jsx(qn,{size:14})," Short"]})]}),t.jsx("div",{style:X.dirHint,children:ie?"Short — profit when price falls. SL sits above CMP, target below.":"Long — profit when price rises. SL sits below CMP, target above."})]}),t.jsx("label",{style:X.fLabel,children:"Instrument"}),t.jsx("input",{autoFocus:!0,value:j.instrument,onChange:he=>C(Ee=>({...Ee,instrument:he.target.value.toUpperCase()})),placeholder:"e.g. NIFTY 22000 CE, RELIANCE",style:{...X.field,textTransform:"uppercase"}}),t.jsxs("div",{style:X.grid2,children:[t.jsxs("div",{children:[t.jsx("label",{style:X.fLabel,children:"Entry (CMP)"}),t.jsx("input",{type:"number",inputMode:"decimal",value:j.entry_price,onChange:he=>C(Ee=>({...Ee,entry_price:he.target.value})),placeholder:"0",style:X.field})]}),t.jsxs("div",{children:[t.jsx("label",{style:X.fLabel,children:"Quantity"}),t.jsx("input",{type:"number",inputMode:"decimal",value:j.qty,onChange:he=>C(Ee=>({...Ee,qty:he.target.value})),placeholder:"0",style:X.field})]})]}),t.jsxs("div",{style:X.grid2,children:[t.jsxs("div",{children:[t.jsxs("label",{style:{...X.fLabel,color:Ft},children:["Stop loss",ie?" (above)":" (below)"]}),t.jsx("input",{type:"number",inputMode:"decimal",value:j.sl_price,onChange:he=>C(Ee=>({...Ee,sl_price:he.target.value})),placeholder:"0",style:{...X.field,borderColor:Ft+"55"}})]}),t.jsxs("div",{children:[t.jsxs("label",{style:{...X.fLabel,color:Ot},children:["Target",ie?" (below)":" (above)"]}),t.jsx("input",{type:"number",inputMode:"decimal",value:j.tgt_price,onChange:he=>C(Ee=>({...Ee,tgt_price:he.target.value})),placeholder:"0",style:{...X.field,borderColor:Ot+"55"}})]})]}),t.jsxs("div",{style:X.preview2,children:[t.jsxs("div",{style:{...X.previewCell,background:Ot+"12"},children:[t.jsx("span",{style:X.previewLbl,children:"If target hit"}),t.jsxs("span",{style:{...X.previewVal,color:Ot},children:["+",n(H)]})]}),t.jsxs("div",{style:{...X.previewCell,background:Ft+"12"},children:[t.jsx("span",{style:X.previewLbl,children:"If SL hit"}),t.jsx("span",{style:{...X.previewVal,color:Ft},children:n(fe)})]})]}),t.jsx("label",{style:X.fLabel,children:"Purchase date"}),t.jsx("input",{type:"date",value:j.purchase_date,onChange:he=>C(Ee=>({...Ee,purchase_date:he.target.value})),style:X.field}),t.jsx("label",{style:X.fLabel,children:"Note (optional)"}),t.jsx("input",{value:j.note,onChange:he=>C(Ee=>({...Ee,note:he.target.value})),placeholder:"reason, setup, emotion…",style:X.field}),A?t.jsx("div",{style:X.errBanner,children:A}):t.jsx(b2,{rules:E,kind:j.kind,money:n})]}),t.jsxs("div",{style:X.sheetFoot,children:[t.jsx("button",{onClick:()=>C(null),style:X.ghostBtn,children:"Cancel"}),t.jsxs("button",{onClick:P,disabled:!!A,style:{...X.primaryBtn,background:me,...A?{opacity:.45,cursor:"not-allowed"}:{}},children:[t.jsx(Oe,{size:16})," ",j.id?"Save changes":"Open trade"]})]})]})})})(),B&&(()=>{const w=B.outcome==="profit",ie=w?Ot:Ft,me=B.trade,H=(me.direction||"long")==="short",fe=ga(me.kind),he=w?H?`(Entry ${me.entry_price||0} − TGT ${me.tgt_price||0}) × ${me.qty||0}`:`(TGT ${me.tgt_price||0} − Entry ${me.entry_price||0}) × ${me.qty||0}`:H?`(SL ${me.sl_price||0} − Entry ${me.entry_price||0}) × ${me.qty||0}`:`(Entry ${me.entry_price||0} − SL ${me.sl_price||0}) × ${me.qty||0}`;return t.jsx("div",{style:X.overlay,onClick:()=>x(null),children:t.jsxs("div",{style:X.sheet,onClick:Ee=>Ee.stopPropagation(),children:[t.jsxs("div",{style:{...X.sheetHead,background:`linear-gradient(135deg, ${ie}, ${ie}CC)`},children:[t.jsxs("div",{style:X.sheetHeadRow,children:[t.jsx("span",{style:X.sheetKicker,children:w?"Book profit":"Book loss"}),t.jsx("button",{onClick:()=>x(null),style:X.sheetClose,children:t.jsx(Be,{size:16})})]}),t.jsx("div",{style:X.sheetTitle,children:me.instrument||"—"}),t.jsxs("div",{style:X.sheetChips,children:[t.jsx("span",{style:X.sheetChip,children:fe.label}),t.jsx("span",{style:X.sheetChip,children:H?"Short":"Long"})]})]}),t.jsxs("div",{style:X.sheetBody,children:[t.jsxs("div",{style:X.bookHero,children:[t.jsx("span",{style:X.bookHeroLbl,children:w?"Realized profit":"Realized loss"}),t.jsxs("span",{style:{...X.bookHeroVal,color:ie},children:[w?"+":"",n(vd(me,B.outcome))]}),t.jsx("span",{style:X.bookHeroMeta,children:he})]}),me.kind==="intraday"?t.jsxs(t.Fragment,{children:[t.jsx("label",{style:X.fLabel,children:"Outcome date · locked to purchase day"}),t.jsx("input",{type:"date",value:B.date,min:me.purchase_date,max:me.purchase_date,disabled:!0,style:{...X.field,opacity:.7,cursor:"not-allowed"}}),t.jsx("div",{style:X.dirHint,children:"Intraday trades are squared off the same day they're bought."})]}):t.jsxs(t.Fragment,{children:[t.jsx("label",{style:X.fLabel,children:"Outcome date · colours this day"}),t.jsx("input",{type:"date",value:B.date,onChange:Ee=>x(Qe=>({...Qe,date:Ee.target.value})),style:X.field})]})]}),t.jsxs("div",{style:X.sheetFoot,children:[t.jsx("button",{onClick:()=>x(null),style:X.ghostBtn,children:"Cancel"}),t.jsxs("button",{onClick:De,disabled:!B.date,style:{...X.primaryBtn,background:ie,...B.date?{}:{opacity:.45,cursor:"not-allowed"}},children:[t.jsx(Oe,{size:16})," Book ",B.outcome]})]})]})})})()]})}function Vp({direction:e}){return(e||"long")!=="short"?null:t.jsxs("span",{style:X.dirBadge,children:[t.jsx(qn,{size:10})," SHORT"]})}function b2({rules:e,kind:r,money:n}){const o=[],i=e.capital||0;e.rr>0&&o.push(`Min risk:reward 1:${e.rr}`),e.risk_pct>0&&i>0&&o.push(`Max risk ${n(i*e.risk_pct/100)} (${e.risk_pct}%)`);const s=(e.diversification||{})[r]||0;return s>0&&(i>0&&o.push(`Max position ${n(i/s)}`),o.push(`Max ${s} open ${r}`)),o.length?t.jsxs("div",{style:X.rulesHint,children:["Rules · ",o.join(" · ")]}):null}const X={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:1100,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},capStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:12,marginBottom:18},capBox:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:"13px 16px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},capBoxMain:{borderWidth:2},capLabel:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,fontWeight:600,color:"var(--text-2)"},capVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.1},capValBig:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.1},capHint:{fontSize:10.5,color:"var(--text-3)",marginTop:4},cols:{display:"grid",gap:16,alignItems:"start"},card:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{width:30,height:30,borderRadius:8,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:4},calDow:{fontSize:10,fontWeight:700,color:"var(--text-3)",textAlign:"center",padding:"2px 0"},calCell:{position:"relative",aspectRatio:"1",border:"1px solid transparent",borderRadius:8,background:"var(--bg)",color:"var(--text-2)",fontSize:12.5,fontWeight:600,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},calCellOn:{background:rs,color:"#fff"},calCellToday:{borderColor:rs},calDot:{position:"absolute",bottom:4,width:5,height:5,borderRadius:"50%"},calLegend:{display:"flex",gap:12,flexWrap:"wrap",marginTop:12,fontSize:10.5,color:"var(--text-3)",fontWeight:600},legDot:{display:"inline-block",width:7,height:7,borderRadius:"50%",marginRight:4},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:10,marginBottom:12,flexWrap:"wrap"},cardTitle:{display:"flex",alignItems:"center",gap:6,fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:12,color:"var(--text-3)",marginTop:2},dayPLWrap:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:4},sentiment:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:10},dayPL:{fontSize:17,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},addRow:{display:"flex",gap:8,flexWrap:"wrap"},addKindBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid",borderRadius:9,padding:"7px 12px",fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},openScroll:{display:"flex",flexDirection:"column",gap:8,maxHeight:320,overflowY:"auto",paddingRight:2},openRow:{display:"flex",alignItems:"flex-start",gap:9,padding:"10px 11px",background:"var(--bg)",border:"1px solid var(--border)",borderRadius:10,flexWrap:"wrap"},openBody:{flex:1,minWidth:140},openTop:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"baseline"},openQty:{fontSize:11.5,fontWeight:700,color:"var(--text-3)",flexShrink:0},openMeta:{display:"flex",gap:6,flexWrap:"wrap",marginTop:5,alignItems:"center"},bookBtns:{display:"flex",gap:6,alignItems:"center",flexShrink:0},bookBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",color:"#fff",padding:"6px 11px",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},tradeList:{display:"flex",flexDirection:"column",gap:8},tradeRow:{display:"flex",alignItems:"flex-start",gap:9,padding:"9px 10px",background:"var(--bg)",border:"1px solid var(--border)",borderRadius:10},kindTag:{fontSize:10.5,fontWeight:800,padding:"3px 8px",borderRadius:7,flexShrink:0,marginTop:1},tradeBody:{flex:1,minWidth:0},tradeTop:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"baseline"},tradeInstr:{fontSize:13.5,fontWeight:700,wordBreak:"break-word"},tradePL:{fontSize:13.5,fontWeight:800,flexShrink:0},tradeMeta:{display:"flex",gap:6,flexWrap:"wrap",marginTop:5,alignItems:"center"},metaPill:{fontSize:10.5,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",borderRadius:6,padding:"2px 7px"},tradeNote:{fontSize:11.5,color:"var(--text-3)",fontStyle:"italic"},iconGhost:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",flexShrink:0},noTrades:{fontSize:12.5,color:"var(--text-3)",fontStyle:"italic",textAlign:"center",padding:"16px 8px",border:"1px dashed var(--border)",borderRadius:8},learnArea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"11px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--bg)",outline:"none",minHeight:90,resize:"vertical",lineHeight:1.55,marginTop:8},saveBtn:{display:"inline-flex",alignItems:"center",gap:6,marginTop:10,border:"none",background:rs,color:"#fff",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},dirBadge:{display:"inline-flex",alignItems:"center",gap:2,fontSize:9.5,fontWeight:800,letterSpacing:"0.03em",color:Ft,background:Ft+"1A",borderRadius:5,padding:"1px 5px",marginLeft:6,verticalAlign:"middle"},overlay:{position:"fixed",inset:0,background:"rgba(20,18,15,0.55)",backdropFilter:"blur(3px)",zIndex:200,display:"grid",placeItems:"center",padding:16},sheet:{background:"var(--surface)",borderRadius:20,width:"100%",maxWidth:460,maxHeight:"92vh",display:"flex",flexDirection:"column",overflow:"hidden",boxShadow:"0 24px 64px rgba(0,0,0,0.34)",boxSizing:"border-box"},sheetHead:{padding:"16px 18px 18px",color:"#fff"},sheetHeadRow:{display:"flex",justifyContent:"space-between",alignItems:"center"},sheetKicker:{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",opacity:.9},sheetClose:{border:"none",background:"rgba(255,255,255,0.2)",color:"#fff",width:30,height:30,borderRadius:9,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},sheetTitle:{fontSize:22,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:8,wordBreak:"break-word",lineHeight:1.15},sheetChips:{display:"flex",gap:6,flexWrap:"wrap",marginTop:10},sheetChip:{fontSize:11,fontWeight:700,background:"rgba(255,255,255,0.22)",color:"#fff",borderRadius:20,padding:"3px 10px"},sheetBody:{padding:"16px 18px 6px",overflowY:"auto"},sheetFoot:{display:"flex",gap:10,padding:"14px 18px 16px",borderTop:"1px solid var(--border)",background:"var(--surface)"},fLabel:{display:"block",fontSize:11,fontWeight:700,color:"var(--text-2)",margin:"12px 0 5px",textTransform:"uppercase",letterSpacing:"0.05em"},field:{width:"100%",border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:14,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)"},grid2:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},seg:{display:"flex",gap:4,background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:4},segBtn:{flex:1,display:"inline-flex",alignItems:"center",justifyContent:"center",gap:5,border:"none",background:"none",color:"var(--text-2)",padding:"9px 0",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",transition:"background 0.12s"},segBtnOn:{color:"#fff",boxShadow:"0 2px 8px rgba(0,0,0,0.18)"},dirHint:{fontSize:11.5,color:"var(--text-3)",marginTop:7,lineHeight:1.4},preview2:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginTop:14},previewCell:{display:"flex",flexDirection:"column",gap:2,borderRadius:12,padding:"11px 13px"},previewLbl:{fontSize:11,fontWeight:600,color:"var(--text-2)"},previewVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},bookHero:{textAlign:"center",padding:"14px 0 6px"},bookHeroLbl:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em"},bookHeroVal:{display:"block",fontSize:34,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.05},bookHeroMeta:{display:"block",fontSize:11.5,color:"var(--text-3)",marginTop:6},errBanner:{marginTop:14,background:Ft+"18",border:`1px solid ${Ft}55`,color:Ft,borderRadius:10,padding:"10px 12px",fontSize:12.5,fontWeight:600,lineHeight:1.4},rulesHint:{marginTop:14,fontSize:11.5,color:"var(--text-3)",fontWeight:600,lineHeight:1.4},ghostBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"11px 18px",borderRadius:11,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},primaryBtn:{flex:1,display:"inline-flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",color:"#fff",padding:"11px 18px",borderRadius:11,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Bc=[{id:"sandstone",name:"Sandstone",description:"Warm editorial light — the original Anvil look.",dark:!1,swatch:["#F7F6F3","#4C9A6B","#26241F"],vars:{"--bg":"#F7F6F3","--surface":"#FFFFFF","--surface-2":"#FAFAF8","--hover":"#F2F1EC","--border":"#ECEAE3","--text":"#26241F","--text-2":"#6B675E","--text-3":"#9A968C","--accent":"#4C9A6B","--accent-strong":"#26241F","--accent-2":"#3A352C"}},{id:"midnight",name:"Midnight",description:"Deep low-glare dark mode for night owls and focus.",dark:!0,swatch:["#161513","#6FB58C","#ECEAE3"],vars:{"--bg":"#161513","--surface":"#211F1C","--surface-2":"#1B1A17","--hover":"#2B2924","--border":"#34312B","--text":"#ECEAE3","--text-2":"#B6B1A6","--text-3":"#8A857A","--accent":"#6FB58C","--accent-strong":"#2E6F4B","--accent-2":"#245C3E"}},{id:"blossom",name:"Blossom",description:"Soft rose & blush — gentle, warm, and feminine.",dark:!1,swatch:["#FFF5F8","#E0608E","#B23A6B"],vars:{"--bg":"#FFF5F8","--surface":"#FFFFFF","--surface-2":"#FFF0F4","--hover":"#FDE7EE","--border":"#F6D9E2","--text":"#3D2230","--text-2":"#7A5466","--text-3":"#B08799","--accent":"#E0608E","--accent-strong":"#B23A6B","--accent-2":"#9C2F5C"}},{id:"tide",name:"Tide",description:"Calm professional blues — clean and focused.",dark:!1,swatch:["#F1F6FA","#2E86C1","#1C4E73"],vars:{"--bg":"#F1F6FA","--surface":"#FFFFFF","--surface-2":"#ECF3F9","--hover":"#E2EEF6","--border":"#D5E3EE","--text":"#13283A","--text-2":"#4A6275","--text-3":"#8AA0B0","--accent":"#2E86C1","--accent-strong":"#1C4E73","--accent-2":"#163E5C"}},{id:"velocity",name:"Velocity",description:"High-energy sport — crisp slate with electric orange.",dark:!1,swatch:["#F4F5F7","#F4511E","#1F2A37"],vars:{"--bg":"#F4F5F7","--surface":"#FFFFFF","--surface-2":"#EEF0F3","--hover":"#E7EAEE","--border":"#DCE0E6","--text":"#18202B","--text-2":"#515B68","--text-3":"#8B95A1","--accent":"#F4511E","--accent-strong":"#1F2A37","--accent-2":"#16202B"}},{id:"evergreen",name:"Evergreen",description:"Earthy forest greens — grounded and natural.",dark:!1,swatch:["#F2F6F1","#3E8E52","#2A4A30"],vars:{"--bg":"#F2F6F1","--surface":"#FFFFFF","--surface-2":"#ECF2EA","--hover":"#E4EEE2","--border":"#D7E4D3","--text":"#1E2B20","--text-2":"#4F6151","--text-3":"#8AA08C","--accent":"#3E8E52","--accent-strong":"#2A4A30","--accent-2":"#213B26"}},{id:"amethyst",name:"Amethyst",description:"Premium purple & plum — elegant and refined.",dark:!1,swatch:["#F6F4FB","#7A4FE0","#3A2D5C"],vars:{"--bg":"#F6F4FB","--surface":"#FFFFFF","--surface-2":"#F1EDF9","--hover":"#EAE3F6","--border":"#DFD6F0","--text":"#241B36","--text-2":"#5A4E72","--text-3":"#9588AE","--accent":"#7A4FE0","--accent-strong":"#3A2D5C","--accent-2":"#2E2349"}}],Yp="sandstone",Kh="anvil_theme",m2=e=>Bc.find(r=>r.id===e)||Bc[0];function Qh(){try{return localStorage.getItem(Kh)||Yp}catch{return Yp}}function Pi(e,r=!0){const n=m2(e),o=document.documentElement;Object.entries(n.vars).forEach(([s,a])=>o.style.setProperty(s,a)),o.style.colorScheme=n.dark?"dark":"light",o.setAttribute("data-theme",n.id);const i=document.querySelector('meta[name="theme-color"]');if(i&&i.setAttribute("content",n.vars["--surface"]),r)try{localStorage.setItem(Kh,n.id)}catch{}return n.id}const h2=e=>e%10===1&&e!==11?"st":e%10===2&&e!==12?"nd":e%10===3&&e!==13?"rd":"th";function f2(e=560){const[r,n]=c.useState(()=>window.innerWidth<=e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<=e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}function x2({screens:e,order:r,hidden:n,themeId:o,currency:i,monthStartDay:s,ticker:a,defaultScreen:l,onSetDefault:d,onSaveSidebar:g,onPreviewTheme:h,onCommitTheme:y,onSelectCurrency:f,onSelectMonthStartDay:E,onSaveTicker:R,onClose:T}){const[z,m]=c.useState("sidebar"),[b,u]=c.useState(()=>r.map(ae=>({id:ae,hidden:n.includes(ae)}))),[k,j]=c.useState(o),[C,B]=c.useState(""),[x,v]=c.useState(!1),[$,Q]=c.useState(""),[ne,be]=c.useState(!1),[A,K]=c.useState(""),[re,ve]=c.useState(""),[Z,Y]=c.useState({swing:"",fno:"",intraday:""}),[ce,J]=c.useState(!1),I=f2(),[W,_]=c.useState(!!(a!=null&&a.enabled)),[P,de]=c.useState(()=>{const ae=Array.isArray(a==null?void 0:a.statements)?a.statements.slice(0,5):[];return ae.length?ae:[""]}),[ge,De]=c.useState((a==null?void 0:a.speed)??60),[q,oe]=c.useState((a==null?void 0:a.delay)??3),[G,le]=c.useState(!1),D=(ae,We)=>de(qe=>qe.map((tt,ht)=>ht===ae?We:tt)),w=()=>de(ae=>ae.length<5?[...ae,""]:ae),ie=ae=>de(We=>We.length>1?We.filter((qe,tt)=>tt!==ae):We),me=()=>{const ae=P.map(We=>We.trim()).filter(Boolean).slice(0,5);R({enabled:W,statements:ae,speed:Number(ge),delay:Number(q)}),le(!0),setTimeout(()=>le(!1),1500)};c.useEffect(()=>{F.getSetting("golden_music").then(ae=>B((ae==null?void 0:ae.value)||"")).catch(()=>{})},[]);const H=()=>{F.setSetting("golden_music",C.trim()).then(()=>{v(!0),setTimeout(()=>v(!1),1500)}).catch(()=>{})};c.useEffect(()=>{F.getSetting("trading_capital").then(ae=>Q((ae==null?void 0:ae.value)||"")).catch(()=>{})},[]);const fe=()=>{F.setSetting("trading_capital",String(parseFloat($)||0)).then(()=>{be(!0),setTimeout(()=>be(!1),1500)}).catch(()=>{})};c.useEffect(()=>{F.getSetting("trading_risk_pct").then(ae=>K((ae==null?void 0:ae.value)??"")).catch(()=>{}),F.getSetting("trading_rr").then(ae=>ve((ae==null?void 0:ae.value)??"")).catch(()=>{}),F.getSetting("trading_diversification").then(ae=>{const We=(ae==null?void 0:ae.value)||{};Y({swing:We.swing??"",fno:We.fno??"",intraday:We.intraday??""})}).catch(()=>{})},[]);const he=()=>{const ae={swing:parseInt(Z.swing,10)||0,fno:parseInt(Z.fno,10)||0,intraday:parseInt(Z.intraday,10)||0};Promise.all([F.setSetting("trading_risk_pct",parseFloat(A)||0),F.setSetting("trading_rr",parseFloat(re)||0),F.setSetting("trading_diversification",ae)]).then(()=>{J(!0),setTimeout(()=>J(!1),1500)}).catch(()=>{})},Ee=ae=>{j(ae),h(ae)},Qe=b.filter(ae=>!ae.hidden).length,st=(ae,We)=>{const qe=ae+We;if(qe<0||qe>=b.length)return;const tt=[...b];[tt[ae],tt[qe]]=[tt[qe],tt[ae]],u(tt)},Le=ae=>{const We=b[ae];if(!We.hidden&&Qe<=1)return;const qe=[...b];qe[ae]={...We,hidden:!We.hidden},u(qe)},et=()=>{g(b.map(ae=>ae.id),b.filter(ae=>ae.hidden).map(ae=>ae.id))},Ke=I?{...ke.overlay,padding:0}:ke.overlay,ut=I?{...ke.modal,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"100%",borderRadius:0,border:"none"}:ke.modal;return t.jsx("div",{style:Ke,onClick:T,children:t.jsxs("div",{style:ut,onClick:ae=>ae.stopPropagation(),children:[t.jsxs("div",{style:ke.head,children:[t.jsx("div",{style:ke.title,children:"Settings"}),t.jsx("button",{onClick:T,style:ke.closeBtn,children:t.jsx(Be,{size:18})})]}),t.jsxs("div",{style:ke.tabs,children:[t.jsxs("button",{onClick:()=>m("sidebar"),style:{...ke.tab,...z==="sidebar"?ke.tabOn:{}},children:[t.jsx(a0,{size:15})," Configure sidebar"]}),t.jsxs("button",{onClick:()=>m("themes"),style:{...ke.tab,...z==="themes"?ke.tabOn:{}},children:[t.jsx(u0,{size:15})," Themes"]}),t.jsxs("button",{onClick:()=>m("currency"),style:{...ke.tab,...z==="currency"?ke.tabOn:{}},children:[t.jsx(Yy,{size:15})," Monetary"]}),t.jsxs("button",{onClick:()=>m("music"),style:{...ke.tab,...z==="music"?ke.tabOn:{}},children:[t.jsx(Bg,{size:15})," Music"]}),t.jsxs("button",{onClick:()=>m("reminders"),style:{...ke.tab,...z==="reminders"?ke.tabOn:{}},children:[t.jsx(hh,{size:15})," Reminders"]})]}),t.jsx("div",{style:ke.body,children:z==="sidebar"?t.jsxs(t.Fragment,{children:[t.jsxs("p",{style:ke.hint,children:["Reorder with the arrows, hide ones you don't use, and tap ",t.jsx(ks,{size:11,style:{verticalAlign:"-1px"}})," to set the screen that opens on launch."]}),t.jsx("div",{style:ke.list,children:b.map((ae,We)=>{const qe=e[ae.id],tt=qe.icon,ht=l===ae.id;return t.jsxs("div",{style:{...ke.row,opacity:ae.hidden?.5:1,...ht?{borderColor:"var(--accent)"}:{}},children:[t.jsx("span",{style:ke.rowNum,children:We+1}),t.jsx(tt,{size:16}),t.jsxs("span",{style:ke.rowLabel,children:[qe.label,ht&&t.jsx("span",{style:ke.defaultTag,children:"default"})]}),t.jsx("button",{onClick:()=>d(ae.id),title:ht?"Opens on launch":"Set as default",style:{...ke.iconBtn,...ht?{color:"var(--accent)"}:{}},children:t.jsx(ks,{size:15})}),t.jsx("button",{onClick:()=>Le(We),title:ae.hidden?"Show":"Hide",style:{...ke.iconBtn,...ae.hidden?{}:{color:"var(--accent)"}},children:ae.hidden?t.jsx(Za,{size:15}):t.jsx(vs,{size:15})}),t.jsx("button",{onClick:()=>st(We,-1),disabled:We===0,style:{...ke.iconBtn,opacity:We===0?.3:1},children:t.jsx(wl,{size:15})}),t.jsx("button",{onClick:()=>st(We,1),disabled:We===b.length-1,style:{...ke.iconBtn,opacity:We===b.length-1?.3:1},children:t.jsx(ro,{size:15})})]},ae.id)})}),t.jsxs("button",{onClick:et,style:ke.saveBtn,children:[t.jsx(Oe,{size:15})," Save sidebar"]})]}):z==="currency"?t.jsxs(t.Fragment,{children:[t.jsx("p",{style:ke.hint,children:"Choose the currency used across Wallet and Worth. Applies instantly."}),t.jsx("div",{style:ke.list,children:xc.map(ae=>{const We=ae.code===i;return t.jsxs("button",{onClick:()=>f(ae.code),style:{...ke.row,cursor:"pointer",textAlign:"left",width:"100%",...We?{borderColor:"var(--accent)"}:{}},children:[t.jsx("span",{style:ke.curSymbol,children:ae.symbol}),t.jsxs("span",{style:ke.rowLabel,children:[ae.label," ",t.jsx("span",{style:ke.curCode,children:ae.code})]}),We&&t.jsx("span",{style:ke.themeCheck,children:t.jsx(Oe,{size:13})})]},ae.code)})}),t.jsx("div",{style:ke.subDivider}),t.jsx("div",{style:ke.fieldLbl,children:"Month starts on"}),t.jsx("p",{style:ke.hint,children:'If your salary lands on the 25th, set this to 25 — Wallet and Expenses will treat each "month" as running 25th to 24th instead of calendar month.'}),t.jsx(nr,{value:s,options:Array.from({length:28},(ae,We)=>We+1).map(ae=>({value:ae,label:ae===1?"1st (calendar month)":`${ae}${h2(ae)}`})),onChange:ae=>E(Number(ae)),style:{marginBottom:12}}),t.jsx("div",{style:ke.subDivider}),t.jsx("div",{style:ke.fieldLbl,children:"Trading capital"}),t.jsxs("p",{style:ke.hint,children:["Your starting capital for the ",t.jsx("b",{children:"Trading Journal"}),". The page shows this plus your all-time net P/L — green when in profit, red when below."]}),t.jsx("input",{type:"number",value:$,onChange:ae=>Q(ae.target.value),placeholder:"e.g. 100000",style:ke.musicInput}),t.jsxs("button",{onClick:fe,style:ke.saveBtn,children:[t.jsx(Oe,{size:15})," ",ne?"Saved":"Save capital"]}),t.jsx("div",{style:ke.subDivider}),t.jsx("div",{style:ke.fieldLbl,children:"Trading discipline rules"}),t.jsx("p",{style:ke.hint,children:"Guardrails enforced when opening a trade. A trade that breaks any rule can't be saved. Leave a field at 0 (or blank) to disable that rule."}),t.jsx("label",{style:ke.miniLbl,children:"Risk per trade (%)"}),t.jsx("p",{style:ke.hint,children:"Max loss on any single trade as a percent of capital. e.g. 2% of 100000 caps loss at 2000 — quantity or SL that risks more is blocked."}),t.jsx("input",{type:"number",step:"0.1",min:"0",value:A,onChange:ae=>K(ae.target.value),placeholder:"e.g. 2",style:ke.musicInput}),t.jsx("label",{style:ke.miniLbl,children:"Risk : Reward (1 : R)"}),t.jsx("p",{style:ke.hint,children:"Minimum reward multiple of risk. Enter 3 for 1:3 — if SL is 5 below entry, target must be at least 15 above entry."}),t.jsx("input",{type:"number",step:"0.5",min:"0",value:re,onChange:ae=>ve(ae.target.value),placeholder:"e.g. 3",style:ke.musicInput}),t.jsx("label",{style:ke.miniLbl,children:"Diversification (max open trades per section)"}),t.jsx("p",{style:ke.hint,children:"Limits how many open trades you may hold per section, and caps each position's value at capital ÷ this number (e.g. 5 → max 20000 per trade on 100000 capital)."}),t.jsx("div",{style:ke.divGrid,children:[["swing","Swing"],["fno","FnO"],["intraday","Intraday"]].map(([ae,We])=>t.jsxs("div",{style:ke.divCell,children:[t.jsx("span",{style:ke.divLbl,children:We}),t.jsx("input",{type:"number",min:"0",step:"1",value:Z[ae],onChange:qe=>Y(tt=>({...tt,[ae]:qe.target.value})),placeholder:"0",style:ke.divInput})]},ae))}),t.jsxs("button",{onClick:he,style:ke.saveBtn,children:[t.jsx(Oe,{size:15})," ",ce?"Saved":"Save rules"]})]}):z==="music"?t.jsxs(t.Fragment,{children:[t.jsxs("p",{style:ke.hint,children:["Paste a YouTube link to play softly while you write in the ",t.jsx("b",{children:"Golden Book"}),". It plays only on that screen (audio only)."]}),t.jsx("input",{value:C,onChange:ae=>B(ae.target.value),placeholder:"https://youtube.com/watch?v=…",style:ke.musicInput}),t.jsxs("button",{onClick:H,style:ke.saveBtn,children:[t.jsx(Oe,{size:15})," ",x?"Saved":"Save music"]})]}):z==="reminders"?t.jsxs(t.Fragment,{children:[t.jsx("p",{style:ke.hint,children:"Up to 5 reminders scroll across the top of every screen — a gentle nudge toward your goals."}),t.jsxs("button",{onClick:()=>_(ae=>!ae),style:{...ke.row,cursor:"pointer",width:"100%",justifyContent:"space-between",...W?{borderColor:"var(--accent)"}:{}},children:[t.jsx("span",{style:ke.rowLabel,children:"Show reminder banner"}),t.jsx("span",{style:{...ke.switch,...W?ke.switchOn:{}},children:W?"On":"Off"})]}),t.jsxs("div",{style:{marginTop:14},children:[t.jsxs("div",{style:ke.fieldLbl,children:["Reminders (",P.filter(ae=>ae.trim()).length,"/5)"]}),P.map((ae,We)=>t.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[t.jsx("input",{value:ae,onChange:qe=>D(We,qe.target.value),maxLength:120,placeholder:`Reminder ${We+1}`,style:{...ke.musicInput,marginBottom:0}}),t.jsx("button",{onClick:()=>ie(We),style:ke.iconBtn,title:"Remove",children:t.jsx(Be,{size:15})})]},We)),P.length<5&&t.jsxs("button",{onClick:w,style:ke.addRowBtn,children:[t.jsx(at,{size:14})," Add reminder"]})]}),t.jsxs("div",{style:{marginTop:16},children:[t.jsxs("div",{style:ke.sliderHead,children:[t.jsx("span",{style:ke.fieldLbl,children:"Scroll speed"}),t.jsxs("span",{style:ke.sliderVal,children:[ge," px/s"]})]}),t.jsx("input",{type:"range",min:20,max:200,step:5,value:ge,onChange:ae=>De(ae.target.value),style:ke.range})]}),t.jsxs("div",{style:{marginTop:12},children:[t.jsxs("div",{style:ke.sliderHead,children:[t.jsx("span",{style:ke.fieldLbl,children:"Delay between reminders"}),t.jsxs("span",{style:ke.sliderVal,children:[q,"s"]})]}),t.jsx("input",{type:"range",min:0,max:15,step:1,value:q,onChange:ae=>oe(ae.target.value),style:ke.range})]}),t.jsxs("button",{onClick:me,style:{...ke.saveBtn,marginTop:16},children:[t.jsx(Oe,{size:15})," ",G?"Saved":"Save reminders"]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("p",{style:ke.hint,children:["Tap a theme to preview it live, then hit ",t.jsx("b",{children:"Apply theme"})," to keep it."]}),t.jsx("div",{style:ke.themeGrid,children:Bc.map(ae=>{const We=ae.id===k;return t.jsxs("button",{onClick:()=>Ee(ae.id),style:{...ke.themeCard,...We?ke.themeCardOn:{}},children:[t.jsxs("div",{style:ke.swatchRow,children:[ae.swatch.map((qe,tt)=>t.jsx("span",{style:{...ke.swatch,background:qe}},tt)),We&&t.jsx("span",{style:ke.themeCheck,children:t.jsx(Oe,{size:13})})]}),t.jsxs("div",{style:ke.themeName,children:[ae.name,ae.dark?t.jsx("span",{style:ke.darkTag,children:"Dark"}):null]}),t.jsx("div",{style:ke.themeDesc,children:ae.description})]},ae.id)})}),t.jsxs("button",{onClick:()=>y(k),disabled:k===o,style:{...ke.saveBtn,...k===o?ke.saveBtnDisabled:{}},children:[t.jsx(Oe,{size:15})," ",k===o?"Theme applied":"Apply theme"]})]})})]})})}const ke={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,width:460,maxWidth:"100%",maxHeight:"88vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",overflow:"hidden"},head:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 18px",borderBottom:"1px solid var(--border)",flexShrink:0},title:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},tabs:{display:"flex",flexWrap:"wrap",gap:6,padding:"12px 18px 0",flexShrink:0},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"transparent"},body:{padding:"16px 18px 20px",overflowY:"auto",overflowX:"hidden",flex:1,minHeight:0},hint:{fontSize:12.5,color:"var(--text-3)",lineHeight:1.5,margin:"0 0 14px"},list:{display:"flex",flexDirection:"column",gap:6},row:{display:"flex",alignItems:"center",gap:10,padding:"9px 11px",background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:9},rowNum:{fontSize:11,fontWeight:700,color:"var(--text-3)",width:16,textAlign:"center"},rowLabel:{flex:1,fontSize:13.5,fontWeight:500,display:"flex",alignItems:"center",gap:7},defaultTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"1px 6px",borderRadius:6},curSymbol:{width:22,textAlign:"center",fontSize:15,fontWeight:700,color:"var(--text)"},curCode:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginLeft:4},iconBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},saveBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",marginTop:16,border:"none",background:"var(--accent)",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer"},saveBtnDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"default"},musicInput:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:12},switch:{fontSize:12,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:20,padding:"3px 12px",minWidth:44,textAlign:"center"},switchOn:{background:"var(--accent)",color:"#fff"},fieldLbl:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},miniLbl:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text)",margin:"12px 0 2px"},subDivider:{height:1,background:"var(--border)",margin:"18px 0 14px"},divGrid:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8,marginBottom:12},divCell:{display:"flex",flexDirection:"column",gap:4},divLbl:{fontSize:11,fontWeight:700,color:"var(--text-3)"},divInput:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"8px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},addRowBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},sliderHead:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},sliderVal:{fontSize:12,fontWeight:700,color:"var(--accent)"},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},themeGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},themeCard:{textAlign:"left",border:"2px solid var(--border)",background:"var(--surface-2)",borderRadius:12,padding:12,cursor:"pointer",display:"flex",flexDirection:"column",gap:6,outline:"none",WebkitTapHighlightColor:"transparent",transition:"border-color .15s ease, box-shadow .15s ease"},themeCardOn:{borderColor:"var(--accent)",boxShadow:"0 0 0 3px color-mix(in srgb, var(--accent) 25%, transparent)"},swatchRow:{display:"flex",alignItems:"center",gap:5,position:"relative"},swatch:{width:22,height:22,borderRadius:"50%",border:"1px solid rgba(0,0,0,0.08)"},themeCheck:{marginLeft:"auto",width:20,height:20,borderRadius:"50%",background:"var(--accent)",color:"#fff",display:"grid",placeItems:"center"},themeName:{fontSize:14,fontWeight:700,display:"flex",alignItems:"center",gap:6},darkTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",background:"var(--hover)",color:"var(--text-2)",padding:"1px 6px",borderRadius:6},themeDesc:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4}},y2=`
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
`;function v2({statements:e,speed:r=60,delay:n=3}){const o=c.useMemo(()=>(e||[]).map(d=>(d||"").trim()).filter(Boolean).slice(0,5),[e]),[i,s]=c.useState(0),a=c.useRef(null),l=c.useRef(null);return c.useEffect(()=>{s(0)},[o]),c.useEffect(()=>{if(!o.length)return;const d=a.current,g=l.current;if(!d||!g)return;const h=d.offsetWidth,y=g.offsetWidth,f=Math.max(10,Number(r)||60),E=Math.max(2500,(h+y)/f*1e3),R=g.animate([{transform:`translateX(${h}px)`},{transform:`translateX(${-y}px)`}],{duration:E,easing:"linear",fill:"both"});let T;const z=()=>{T=setTimeout(()=>s(m=>(m+1)%o.length),Math.max(0,Number(n)||0)*1e3)};return R.addEventListener("finish",z),()=>{R.cancel(),R.removeEventListener("finish",z),clearTimeout(T)}},[i,o,r,n]),o.length?t.jsxs("div",{style:Wo.bar,"aria-label":"Reminders",children:[t.jsx("style",{children:y2}),t.jsx("div",{className:"anvil-tick-glow",style:Wo.icon,children:t.jsx("span",{className:"anvil-tick-pulse",style:{display:"grid",placeItems:"center"},children:t.jsx(hh,{size:15})})}),t.jsxs("div",{ref:a,style:Wo.viewport,children:[t.jsx("span",{className:"anvil-tick-shimmer",style:Wo.shimmer}),t.jsx("div",{className:"anvil-tick-float",style:Wo.floatWrap,children:t.jsx("div",{ref:l,style:Wo.text,children:o[i%o.length]},i)})]})]}):null}const Wo={bar:{display:"flex",alignItems:"center",height:36,flexShrink:0,overflow:"hidden",borderBottom:"1px solid var(--border)",background:"color-mix(in srgb, var(--accent) 12%, var(--surface))"},icon:{display:"grid",placeItems:"center",width:42,height:"100%",flexShrink:0,color:"#fff",background:"var(--accent)",zIndex:2},viewport:{position:"relative",flex:1,height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},shimmer:{position:"absolute",top:0,bottom:0,left:0,width:"22%",background:"linear-gradient(100deg, transparent, color-mix(in srgb, var(--accent) 22%, transparent), transparent)",pointerEvents:"none",zIndex:1},floatWrap:{display:"inline-flex",alignItems:"center",willChange:"transform"},text:{whiteSpace:"nowrap",fontSize:13.5,fontWeight:700,color:"var(--text)",letterSpacing:"0.01em",willChange:"transform",paddingLeft:4}};Pi(Qh(),!1);const Rc="anvil_default_screen",Kp=()=>{try{return localStorage.getItem(Rc)}catch{return null}},qh="anvil_last_screen",j2=()=>{try{return localStorage.getItem(qh)}catch{return null}},Mn={dashboard:{label:"Dashboard",icon:s0,component:_0},kickstart:{label:"Kickstart",icon:jh,component:C1},golden:{label:"Golden Book",icon:Qy,component:I1},habits:{label:"Habits",icon:mc,component:ov},quadrant:{label:"Quadrant",icon:Tg,component:H0},goals:{label:"Goals",icon:Eg,component:X0},grove:{label:"Grove",icon:hc,component:Yv},worth:{label:"Rewards",icon:o0,component:e1},vault:{label:"Wallet",icon:Cl,component:g1},expenses:{label:"Expenses",icon:tl,component:J1},trading:{label:"Trading Journal",icon:Hy,component:p2},journal:{label:"Journal",icon:kl,component:fv},revision:{label:"Revision",icon:kh,component:Rv},affirmations:{label:"Affirmations",icon:To,component:Fv},skills:{label:"Skills",icon:ph,component:yv},spiritual:{label:"Spiritual",icon:Xi,component:kv},mindscape:{label:"Mindscape",icon:bh,component:L1},achievements:{label:"Achievements",icon:qr,component:Y1},challenges:{label:"Challenges",icon:C0,component:o2},bucket:{label:"Bucket List",icon:d0,component:a2},delight:{label:"Delights",icon:Rg,component:X1}},Xh=["dashboard","kickstart","golden","habits","quadrant","goals","grove","journal","revision","affirmations","skills","spiritual","mindscape","achievements","challenges","bucket","delight","worth","vault","expenses","trading"];function pa(e){const r=Xh.filter(i=>Mn[i]),o=[...(Array.isArray(e)?e:[]).filter(i=>Mn[i])];return r.forEach(i=>{o.includes(i)||o.push(i)}),o}function k2(){const[e,r]=c.useState(()=>window.innerWidth<720);return c.useEffect(()=>{const n=()=>r(window.innerWidth<720);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}function w2(){const[e,r]=c.useState(()=>{const P=j2();if(P&&Mn[P])return P;const de=Kp();return de&&Mn[de]?de:"habits"}),[n,o]=c.useState(()=>Kp()||"habits"),[i,s]=c.useState(!1),[a,l]=c.useState(null),[d,g]=c.useState(!1),[h,y]=c.useState(!1),[f,E]=c.useState(Qh()),[R,T]=c.useState(gi()),[z,m]=c.useState(Cc()),[b,u]=c.useState({enabled:!1,statements:[],speed:60,delay:3}),[k,j]=c.useState(()=>pa(Xh)),[C,B]=c.useState([]),x=k2(),v=c.useRef(e);c.useEffect(()=>{v.current=e},[e]),c.useEffect(()=>{if(!a)return;const P=10,de=new Set(["kickstart","mindscape"]),ge=setInterval(()=>{const De=v.current;!document.hidden&&De&&!de.has(De)&&F.addScreenTime(De,P).catch(()=>{})},P*1e3);return()=>clearInterval(ge)},[a]),c.useEffect(()=>{let P=!1;const de=()=>{fc(),l(null)};window.addEventListener("anvil-unauthorized",de);const ge=new URLSearchParams(window.location.search).get("login");return ge&&(F0(ge),window.history.replaceState({},"",window.location.pathname)),Bh()?F.me().then(De=>{P||l(De)}).catch(()=>{}).finally(()=>{P||g(!0)}):g(!0),()=>{P=!0,window.removeEventListener("anvil-unauthorized",de)}},[]),c.useEffect(()=>{a&&(F.getSetting("theme").then(P=>{P!=null&&P.value&&E(Pi(P.value))}).catch(()=>{}),F.getSetting("currency").then(P=>{P!=null&&P.value&&T(Qu(P.value))}).catch(()=>{}),F.getSetting("month_start_day").then(P=>{P!=null&&P.value&&m(wp(P.value))}).catch(()=>{}),F.getSetting("ticker").then(P=>{P!=null&&P.value&&u(de=>({...de,...P.value}))}).catch(()=>{}),F.getSetting("default_screen").then(P=>{if(P!=null&&P.value&&Mn[P.value]){o(P.value);try{localStorage.setItem(Rc,P.value)}catch{}}}).catch(()=>{}),F.getSetting("sidebar_order").then(P=>{Array.isArray(P==null?void 0:P.value)&&j(pa(P.value))}).catch(()=>{}),F.getSetting("sidebar_hidden").then(P=>{Array.isArray(P==null?void 0:P.value)&&B(P.value)}).catch(()=>{}))},[a]);function $(P){r(P),s(!1);try{localStorage.setItem(qh,P)}catch{}}const Q=()=>{fc(),l(null)},ne=P=>{Pi(P,!1)},be=P=>{E(Pi(P)),F.setSetting("theme",P).catch(()=>{}),y(!1)},A=()=>{Pi(f,!1),y(!1)},K=P=>{T(Qu(P)),F.setSetting("currency",P).catch(()=>{})},re=P=>{m(wp(P)),F.setSetting("month_start_day",Number(P)).catch(()=>{})},ve=P=>{u(P),F.setSetting("ticker",P).catch(()=>{})},Z=P=>{o(P);try{localStorage.setItem(Rc,P)}catch{}F.setSetting("default_screen",P).catch(()=>{})},Y=(P,de)=>{if(j(pa(P)),B(de),y(!1),F.setSetting("sidebar_order",P).catch(()=>{}),F.setSetting("sidebar_hidden",de).catch(()=>{}),de.includes(e)){const ge=pa(P).find(De=>!de.includes(De));ge&&r(ge)}},ce=k.filter(P=>!C.includes(P));if(!d)return t.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:"'Inter',system-ui,sans-serif",color:"var(--text-3)"},children:"Loading…"});if(!a)return t.jsx(r1,{});const J=Mn[e],I=J.component,W=()=>t.jsx("div",{style:wt.navItems,children:ce.map(P=>{const de=Mn[P];if(!de)return null;const ge=de.icon,De=e===P;return t.jsxs("button",{onClick:()=>$(P),title:de.label,style:{...wt.navItem,...De?wt.navItemOn:{}},children:[t.jsx(ge,{size:18}),t.jsx("span",{style:wt.navLabel,children:de.label})]},P)})}),_=()=>t.jsxs("div",{style:wt.footerWrap,children:[t.jsxs("button",{onClick:()=>y(!0),style:wt.settingsBtn,title:"Settings",children:[t.jsx(Sh,{size:17}),t.jsx("span",{children:"Settings"})]}),t.jsxs("div",{style:wt.userFooter,children:[t.jsxs("div",{style:wt.userInfo,children:[t.jsx("div",{style:wt.userAvatar,children:(a.name||a.email||"?").charAt(0).toUpperCase()}),t.jsxs("div",{style:{minWidth:0},children:[t.jsx("div",{style:wt.userName,children:a.name||"You"}),t.jsx("div",{style:wt.userEmail,children:a.email})]})]}),t.jsx("button",{onClick:Q,style:wt.logoutBtn,title:"Sign out",children:t.jsx(c0,{size:16})})]})]});return t.jsxs("div",{style:wt.shell,children:[!x&&t.jsxs("nav",{style:wt.nav,children:[t.jsxs("div",{style:wt.brand,children:[t.jsx("div",{style:wt.brandLogo,children:"B"}),t.jsx("span",{style:wt.brandName,children:"Anvil"})]}),t.jsx(W,{}),t.jsx(_,{})]}),x&&i&&t.jsx("div",{style:wt.overlay,onClick:()=>s(!1),children:t.jsxs("nav",{style:wt.drawer,onClick:P=>P.stopPropagation(),children:[t.jsxs("div",{style:wt.drawerHeader,children:[t.jsxs("div",{style:wt.brand,children:[t.jsx("div",{style:wt.brandLogo,children:"B"}),t.jsx("span",{style:wt.brandName,children:"Anvil"})]}),t.jsx("button",{style:wt.closeBtn,onClick:()=>s(!1),children:t.jsx(Be,{size:20})})]}),t.jsx("div",{style:wt.drawerNav,children:t.jsx(W,{})}),t.jsx(_,{})]})}),t.jsxs("div",{style:wt.content,children:[x&&t.jsxs("div",{style:wt.topBar,children:[t.jsx("button",{style:wt.menuBtn,onClick:()=>s(!0),children:t.jsx(Ig,{size:22})}),t.jsx("span",{style:wt.topBarTitle,children:J.label}),t.jsx("div",{style:{width:38}})]}),b.enabled&&t.jsx(v2,{statements:b.statements,speed:b.speed,delay:b.delay}),t.jsx("main",{style:wt.main,children:t.jsx(I,{onNavigate:$})})]}),h&&t.jsx(x2,{screens:Mn,order:k,hidden:C,themeId:f,currency:R,monthStartDay:z,ticker:b,defaultScreen:n,onSetDefault:Z,onSaveSidebar:Y,onPreviewTheme:ne,onCommitTheme:be,onSelectCurrency:K,onSelectMonthStartDay:re,onSaveTicker:ve,onClose:A})]})}const wt={shell:{display:"flex",height:"100vh",overflow:"hidden",fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)"},nav:{width:200,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column",padding:"20px 10px",gap:2,overflowY:"auto",overflowX:"hidden"},brand:{display:"flex",alignItems:"center",gap:9,padding:"6px 10px 20px",borderBottom:"1px solid var(--border)",marginBottom:8},brandLogo:{width:30,height:30,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:14,fontWeight:800,fontFamily:"'Fraunces', Georgia, serif",flexShrink:0},brandName:{fontSize:16,fontWeight:700,letterSpacing:"-0.01em",color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},navItems:{display:"flex",flexDirection:"column",gap:2},navItem:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},navItemOn:{background:"var(--hover)",color:"var(--text)",fontWeight:700},footerWrap:{marginTop:"auto",paddingTop:8,flexShrink:0},settingsBtn:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},userFooter:{marginTop:4,paddingTop:12,borderTop:"1px solid var(--border)",display:"flex",alignItems:"center",gap:8},userInfo:{display:"flex",alignItems:"center",gap:8,flex:1,minWidth:0},userAvatar:{width:30,height:30,borderRadius:"50%",background:"#8268B0",color:"#fff",display:"grid",placeItems:"center",fontSize:13,fontWeight:700,flexShrink:0},userName:{fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},userEmail:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logoutBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",padding:7,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},navLabel:{flex:1},content:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},main:{flex:1,overflowY:"auto",overflowX:"hidden"},topBar:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"var(--surface)",borderBottom:"1px solid var(--border)",flexShrink:0},topBarTitle:{fontSize:16,fontWeight:700,color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},menuBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text)",padding:8,borderRadius:8,display:"grid",placeItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:100,display:"flex"},drawer:{width:220,background:"var(--surface)",height:"100%",display:"flex",flexDirection:"column",padding:"16px 10px",gap:2,boxShadow:"4px 0 24px rgba(0,0,0,0.12)",overflow:"hidden"},drawerNav:{flex:1,minHeight:0,overflowY:"auto",overflowX:"hidden"},drawerHeader:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:4,flexShrink:0},closeBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",padding:6,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0}};ah(document.getElementById("root")).render(t.jsx(c.StrictMode,{children:t.jsx(w2,{})}));
