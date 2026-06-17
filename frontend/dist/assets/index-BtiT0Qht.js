(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();var Yg={exports:{}},Qs={},Qg={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Co=Symbol.for("react.element"),Db=Symbol.for("react.portal"),Rb=Symbol.for("react.fragment"),Fb=Symbol.for("react.strict_mode"),Ab=Symbol.for("react.profiler"),Wb=Symbol.for("react.provider"),Mb=Symbol.for("react.context"),_b=Symbol.for("react.forward_ref"),Lb=Symbol.for("react.suspense"),Pb=Symbol.for("react.memo"),Nb=Symbol.for("react.lazy"),sd=Symbol.iterator;function Ob(t){return t===null||typeof t!="object"?null:(t=sd&&t[sd]||t["@@iterator"],typeof t=="function"?t:null)}var Kg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xg=Object.assign,Jg={};function Sn(t,e,r){this.props=t,this.context=e,this.refs=Jg,this.updater=r||Kg}Sn.prototype.isReactComponent={};Sn.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Sn.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Zg(){}Zg.prototype=Sn.prototype;function ta(t,e,r){this.props=t,this.context=e,this.refs=Jg,this.updater=r||Kg}var ea=ta.prototype=new Zg;ea.constructor=ta;Xg(ea,Sn.prototype);ea.isPureReactComponent=!0;var id=Array.isArray,qg=Object.prototype.hasOwnProperty,ra={current:null},tc={key:!0,ref:!0,__self:!0,__source:!0};function ec(t,e,r){var o,s={},i=null,l=null;if(e!=null)for(o in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(i=""+e.key),e)qg.call(e,o)&&!tc.hasOwnProperty(o)&&(s[o]=e[o]);var a=arguments.length-2;if(a===1)s.children=r;else if(1<a){for(var d=Array(a),g=0;g<a;g++)d[g]=arguments[g+2];s.children=d}if(t&&t.defaultProps)for(o in a=t.defaultProps,a)s[o]===void 0&&(s[o]=a[o]);return{$$typeof:Co,type:t,key:i,ref:l,props:s,_owner:ra.current}}function $b(t,e){return{$$typeof:Co,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function na(t){return typeof t=="object"&&t!==null&&t.$$typeof===Co}function Hb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var ld=/\/+/g;function gi(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Hb(""+t.key):e.toString(36)}function as(t,e,r,o,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case Co:case Db:l=!0}}if(l)return l=t,s=s(l),t=o===""?"."+gi(l,0):o,id(s)?(r="",t!=null&&(r=t.replace(ld,"$&/")+"/"),as(s,e,r,"",function(g){return g})):s!=null&&(na(s)&&(s=$b(s,r+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(ld,"$&/")+"/")+t)),e.push(s)),1;if(l=0,o=o===""?".":o+":",id(t))for(var a=0;a<t.length;a++){i=t[a];var d=o+gi(i,a);l+=as(i,e,r,d,s)}else if(d=Ob(t),typeof d=="function")for(t=d.call(t),a=0;!(i=t.next()).done;)i=i.value,d=o+gi(i,a++),l+=as(i,e,r,d,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function Ao(t,e,r){if(t==null)return t;var o=[],s=0;return as(t,o,"","",function(i){return e.call(r,i,s++)}),o}function Gb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ee={current:null},ds={transition:null},Ub={ReactCurrentDispatcher:ee,ReactCurrentBatchConfig:ds,ReactCurrentOwner:ra};function rc(){throw Error("act(...) is not supported in production builds of React.")}ht.Children={map:Ao,forEach:function(t,e,r){Ao(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return Ao(t,function(){e++}),e},toArray:function(t){return Ao(t,function(e){return e})||[]},only:function(t){if(!na(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ht.Component=Sn;ht.Fragment=Rb;ht.Profiler=Ab;ht.PureComponent=ta;ht.StrictMode=Fb;ht.Suspense=Lb;ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ub;ht.act=rc;ht.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=Xg({},t.props),s=t.key,i=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,l=ra.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(d in e)qg.call(e,d)&&!tc.hasOwnProperty(d)&&(o[d]=e[d]===void 0&&a!==void 0?a[d]:e[d])}var d=arguments.length-2;if(d===1)o.children=r;else if(1<d){a=Array(d);for(var g=0;g<d;g++)a[g]=arguments[g+2];o.children=a}return{$$typeof:Co,type:t.type,key:s,ref:i,props:o,_owner:l}};ht.createContext=function(t){return t={$$typeof:Mb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Wb,_context:t},t.Consumer=t};ht.createElement=ec;ht.createFactory=function(t){var e=ec.bind(null,t);return e.type=t,e};ht.createRef=function(){return{current:null}};ht.forwardRef=function(t){return{$$typeof:_b,render:t}};ht.isValidElement=na;ht.lazy=function(t){return{$$typeof:Nb,_payload:{_status:-1,_result:t},_init:Gb}};ht.memo=function(t,e){return{$$typeof:Pb,type:t,compare:e===void 0?null:e}};ht.startTransition=function(t){var e=ds.transition;ds.transition={};try{t()}finally{ds.transition=e}};ht.unstable_act=rc;ht.useCallback=function(t,e){return ee.current.useCallback(t,e)};ht.useContext=function(t){return ee.current.useContext(t)};ht.useDebugValue=function(){};ht.useDeferredValue=function(t){return ee.current.useDeferredValue(t)};ht.useEffect=function(t,e){return ee.current.useEffect(t,e)};ht.useId=function(){return ee.current.useId()};ht.useImperativeHandle=function(t,e,r){return ee.current.useImperativeHandle(t,e,r)};ht.useInsertionEffect=function(t,e){return ee.current.useInsertionEffect(t,e)};ht.useLayoutEffect=function(t,e){return ee.current.useLayoutEffect(t,e)};ht.useMemo=function(t,e){return ee.current.useMemo(t,e)};ht.useReducer=function(t,e,r){return ee.current.useReducer(t,e,r)};ht.useRef=function(t){return ee.current.useRef(t)};ht.useState=function(t){return ee.current.useState(t)};ht.useSyncExternalStore=function(t,e,r){return ee.current.useSyncExternalStore(t,e,r)};ht.useTransition=function(){return ee.current.useTransition()};ht.version="18.3.1";Qg.exports=ht;var f=Qg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vb=f,Yb=Symbol.for("react.element"),Qb=Symbol.for("react.fragment"),Kb=Object.prototype.hasOwnProperty,Xb=Vb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jb={key:!0,ref:!0,__self:!0,__source:!0};function nc(t,e,r){var o,s={},i=null,l=null;r!==void 0&&(i=""+r),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(l=e.ref);for(o in e)Kb.call(e,o)&&!Jb.hasOwnProperty(o)&&(s[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps,e)s[o]===void 0&&(s[o]=e[o]);return{$$typeof:Yb,type:t,key:i,ref:l,props:s,_owner:Xb.current}}Qs.Fragment=Qb;Qs.jsx=nc;Qs.jsxs=nc;Yg.exports=Qs;var n=Yg.exports,oc={exports:{}},pe={},sc={exports:{}},ic={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(S,N){var V=S.length;S.push(N);t:for(;0<V;){var L=V-1>>>1,st=S[L];if(0<s(st,N))S[L]=N,S[V]=st,V=L;else break t}}function r(S){return S.length===0?null:S[0]}function o(S){if(S.length===0)return null;var N=S[0],V=S.pop();if(V!==N){S[0]=V;t:for(var L=0,st=S.length,v=st>>>1;L<v;){var P=2*(L+1)-1,gt=S[P],dt=P+1,vt=S[dt];if(0>s(gt,V))dt<st&&0>s(vt,gt)?(S[L]=vt,S[dt]=V,L=dt):(S[L]=gt,S[P]=V,L=P);else if(dt<st&&0>s(vt,V))S[L]=vt,S[dt]=V,L=dt;else break t}}return N}function s(S,N){var V=S.sortIndex-N.sortIndex;return V!==0?V:S.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();t.unstable_now=function(){return l.now()-a}}var d=[],g=[],m=1,h=null,p=3,w=!1,y=!1,j=!1,T=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function u(S){for(var N=r(g);N!==null;){if(N.callback===null)o(g);else if(N.startTime<=S)o(g),N.sortIndex=N.expirationTime,e(d,N);else break;N=r(g)}}function k(S){if(j=!1,u(S),!y)if(r(d)!==null)y=!0,Z(x);else{var N=r(g);N!==null&&E(k,N.startTime-S)}}function x(S,N){y=!1,j&&(j=!1,b(z),z=-1),w=!0;var V=p;try{for(u(N),h=r(d);h!==null&&(!(h.expirationTime>N)||S&&!q());){var L=h.callback;if(typeof L=="function"){h.callback=null,p=h.priorityLevel;var st=L(h.expirationTime<=N);N=t.unstable_now(),typeof st=="function"?h.callback=st:h===r(d)&&o(d),u(N)}else o(d);h=r(d)}if(h!==null)var v=!0;else{var P=r(g);P!==null&&E(k,P.startTime-N),v=!1}return v}finally{h=null,p=V,w=!1}}var D=!1,W=null,z=-1,B=5,F=-1;function q(){return!(t.unstable_now()-F<B)}function M(){if(W!==null){var S=t.unstable_now();F=S;var N=!0;try{N=W(!0,S)}finally{N?C():(D=!1,W=null)}}else D=!1}var C;if(typeof c=="function")C=function(){c(M)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,ut=U.port2;U.port1.onmessage=M,C=function(){ut.postMessage(null)}}else C=function(){T(M,0)};function Z(S){W=S,D||(D=!0,C())}function E(S,N){z=T(function(){S(t.unstable_now())},N)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(S){S.callback=null},t.unstable_continueExecution=function(){y||w||(y=!0,Z(x))},t.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<S?Math.floor(1e3/S):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(d)},t.unstable_next=function(S){switch(p){case 1:case 2:case 3:var N=3;break;default:N=p}var V=p;p=N;try{return S()}finally{p=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(S,N){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var V=p;p=S;try{return N()}finally{p=V}},t.unstable_scheduleCallback=function(S,N,V){var L=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?L+V:L):V=L,S){case 1:var st=-1;break;case 2:st=250;break;case 5:st=1073741823;break;case 4:st=1e4;break;default:st=5e3}return st=V+st,S={id:m++,callback:N,priorityLevel:S,startTime:V,expirationTime:st,sortIndex:-1},V>L?(S.sortIndex=V,e(g,S),r(d)===null&&S===r(g)&&(j?(b(z),z=-1):j=!0,E(k,V-L))):(S.sortIndex=st,e(d,S),y||w||(y=!0,Z(x))),S},t.unstable_shouldYield=q,t.unstable_wrapCallback=function(S){var N=p;return function(){var V=p;p=N;try{return S.apply(this,arguments)}finally{p=V}}}})(ic);sc.exports=ic;var Zb=sc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qb=f,be=Zb;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lc=new Set,so={};function Ur(t,e){hn(t,e),hn(t+"Capture",e)}function hn(t,e){for(so[t]=e,t=0;t<e.length;t++)lc.add(e[t])}var Ze=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zi=Object.prototype.hasOwnProperty,tp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ad={},dd={};function ep(t){return Zi.call(dd,t)?!0:Zi.call(ad,t)?!1:tp.test(t)?dd[t]=!0:(ad[t]=!0,!1)}function rp(t,e,r,o){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function np(t,e,r,o){if(e===null||typeof e>"u"||rp(t,e,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function re(t,e,r,o,s,i,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=l}var Qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qt[t]=new re(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qt[e]=new re(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qt[t]=new re(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qt[t]=new re(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qt[t]=new re(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qt[t]=new re(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qt[t]=new re(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qt[t]=new re(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qt[t]=new re(t,5,!1,t.toLowerCase(),null,!1,!1)});var oa=/[\-:]([a-z])/g;function sa(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(oa,sa);Qt[e]=new re(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(oa,sa);Qt[e]=new re(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(oa,sa);Qt[e]=new re(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qt[t]=new re(t,1,!1,t.toLowerCase(),null,!1,!1)});Qt.xlinkHref=new re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qt[t]=new re(t,1,!1,t.toLowerCase(),null,!0,!0)});function ia(t,e,r,o){var s=Qt.hasOwnProperty(e)?Qt[e]:null;(s!==null?s.type!==0:o||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(np(e,r,s,o)&&(r=null),o||s===null?ep(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):s.mustUseProperty?t[s.propertyName]=r===null?s.type===3?!1:"":r:(e=s.attributeName,o=s.attributeNamespace,r===null?t.removeAttribute(e):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,o?t.setAttributeNS(o,e,r):t.setAttribute(e,r))))}var rr=qb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wo=Symbol.for("react.element"),Jr=Symbol.for("react.portal"),Zr=Symbol.for("react.fragment"),la=Symbol.for("react.strict_mode"),qi=Symbol.for("react.profiler"),ac=Symbol.for("react.provider"),dc=Symbol.for("react.context"),aa=Symbol.for("react.forward_ref"),tl=Symbol.for("react.suspense"),el=Symbol.for("react.suspense_list"),da=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),gc=Symbol.for("react.offscreen"),gd=Symbol.iterator;function Rn(t){return t===null||typeof t!="object"?null:(t=gd&&t[gd]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,ci;function On(t){if(ci===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);ci=e&&e[1]||""}return`
`+ci+t}var ui=!1;function bi(t,e){if(!t||ui)return"";ui=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(g){var o=g}Reflect.construct(t,[],e)}else{try{e.call()}catch(g){o=g}t.call(e.prototype)}else{try{throw Error()}catch(g){o=g}t()}}catch(g){if(g&&o&&typeof g.stack=="string"){for(var s=g.stack.split(`
`),i=o.stack.split(`
`),l=s.length-1,a=i.length-1;1<=l&&0<=a&&s[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(s[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||s[l]!==i[a]){var d=`
`+s[l].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=l&&0<=a);break}}}finally{ui=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?On(t):""}function op(t){switch(t.tag){case 5:return On(t.type);case 16:return On("Lazy");case 13:return On("Suspense");case 19:return On("SuspenseList");case 0:case 2:case 15:return t=bi(t.type,!1),t;case 11:return t=bi(t.type.render,!1),t;case 1:return t=bi(t.type,!0),t;default:return""}}function rl(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Zr:return"Fragment";case Jr:return"Portal";case qi:return"Profiler";case la:return"StrictMode";case tl:return"Suspense";case el:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case dc:return(t.displayName||"Context")+".Consumer";case ac:return(t._context.displayName||"Context")+".Provider";case aa:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case da:return e=t.displayName||null,e!==null?e:rl(t.type)||"Memo";case lr:e=t._payload,t=t._init;try{return rl(t(e))}catch{}}return null}function sp(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rl(e);case 8:return e===la?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function cc(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ip(t){var e=cc(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),o=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,i=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(l){o=""+l,i.call(this,l)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Mo(t){t._valueTracker||(t._valueTracker=ip(t))}function uc(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),o="";return t&&(o=cc(t)?t.checked?"true":"false":t.value),t=o,t!==r?(e.setValue(t),!0):!1}function ws(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nl(t,e){var r=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function cd(t,e){var r=e.defaultValue==null?"":e.defaultValue,o=e.checked!=null?e.checked:e.defaultChecked;r=kr(e.value!=null?e.value:r),t._wrapperState={initialChecked:o,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function bc(t,e){e=e.checked,e!=null&&ia(t,"checked",e,!1)}function ol(t,e){bc(t,e);var r=kr(e.value),o=e.type;if(r!=null)o==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(o==="submit"||o==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?sl(t,e.type,r):e.hasOwnProperty("defaultValue")&&sl(t,e.type,kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ud(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var o=e.type;if(!(o!=="submit"&&o!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function sl(t,e,r){(e!=="number"||ws(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var $n=Array.isArray;function cn(t,e,r,o){if(t=t.options,e){e={};for(var s=0;s<r.length;s++)e["$"+r[s]]=!0;for(r=0;r<t.length;r++)s=e.hasOwnProperty("$"+t[r].value),t[r].selected!==s&&(t[r].selected=s),s&&o&&(t[r].defaultSelected=!0)}else{for(r=""+kr(r),e=null,s=0;s<t.length;s++){if(t[s].value===r){t[s].selected=!0,o&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function il(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bd(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error($(92));if($n(r)){if(1<r.length)throw Error($(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:kr(r)}}function pc(t,e){var r=kr(e.value),o=kr(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),o!=null&&(t.defaultValue=""+o)}function pd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function mc(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ll(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?mc(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var _o,fc=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,o,s){MSApp.execUnsafeLocalFunction(function(){return t(e,r,o,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(_o=_o||document.createElement("div"),_o.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_o.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function io(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Qn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lp=["Webkit","ms","Moz","O"];Object.keys(Qn).forEach(function(t){lp.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Qn[e]=Qn[t]})});function hc(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Qn.hasOwnProperty(t)&&Qn[t]?(""+e).trim():e+"px"}function vc(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var o=r.indexOf("--")===0,s=hc(r,e[r],o);r==="float"&&(r="cssFloat"),o?t.setProperty(r,s):t[r]=s}}var ap=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function al(t,e){if(e){if(ap[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function dl(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gl=null;function ga(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cl=null,un=null,bn=null;function md(t){if(t=To(t)){if(typeof cl!="function")throw Error($(280));var e=t.stateNode;e&&(e=qs(e),cl(t.stateNode,t.type,e))}}function yc(t){un?bn?bn.push(t):bn=[t]:un=t}function xc(){if(un){var t=un,e=bn;if(bn=un=null,md(t),e)for(t=0;t<e.length;t++)md(e[t])}}function kc(t,e){return t(e)}function wc(){}var pi=!1;function jc(t,e,r){if(pi)return t(e,r);pi=!0;try{return kc(t,e,r)}finally{pi=!1,(un!==null||bn!==null)&&(wc(),xc())}}function lo(t,e){var r=t.stateNode;if(r===null)return null;var o=qs(r);if(o===null)return null;r=o[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error($(231,e,typeof r));return r}var ul=!1;if(Ze)try{var Fn={};Object.defineProperty(Fn,"passive",{get:function(){ul=!0}}),window.addEventListener("test",Fn,Fn),window.removeEventListener("test",Fn,Fn)}catch{ul=!1}function dp(t,e,r,o,s,i,l,a,d){var g=Array.prototype.slice.call(arguments,3);try{e.apply(r,g)}catch(m){this.onError(m)}}var Kn=!1,js=null,Ss=!1,bl=null,gp={onError:function(t){Kn=!0,js=t}};function cp(t,e,r,o,s,i,l,a,d){Kn=!1,js=null,dp.apply(gp,arguments)}function up(t,e,r,o,s,i,l,a,d){if(cp.apply(this,arguments),Kn){if(Kn){var g=js;Kn=!1,js=null}else throw Error($(198));Ss||(Ss=!0,bl=g)}}function Vr(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function Sc(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function fd(t){if(Vr(t)!==t)throw Error($(188))}function bp(t){var e=t.alternate;if(!e){if(e=Vr(t),e===null)throw Error($(188));return e!==t?null:t}for(var r=t,o=e;;){var s=r.return;if(s===null)break;var i=s.alternate;if(i===null){if(o=s.return,o!==null){r=o;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===r)return fd(s),t;if(i===o)return fd(s),e;i=i.sibling}throw Error($(188))}if(r.return!==o.return)r=s,o=i;else{for(var l=!1,a=s.child;a;){if(a===r){l=!0,r=s,o=i;break}if(a===o){l=!0,o=s,r=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===r){l=!0,r=i,o=s;break}if(a===o){l=!0,o=i,r=s;break}a=a.sibling}if(!l)throw Error($(189))}}if(r.alternate!==o)throw Error($(190))}if(r.tag!==3)throw Error($(188));return r.stateNode.current===r?t:e}function Cc(t){return t=bp(t),t!==null?Ic(t):null}function Ic(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ic(t);if(e!==null)return e;t=t.sibling}return null}var zc=be.unstable_scheduleCallback,hd=be.unstable_cancelCallback,pp=be.unstable_shouldYield,mp=be.unstable_requestPaint,Pt=be.unstable_now,fp=be.unstable_getCurrentPriorityLevel,ca=be.unstable_ImmediatePriority,Tc=be.unstable_UserBlockingPriority,Cs=be.unstable_NormalPriority,hp=be.unstable_LowPriority,Ec=be.unstable_IdlePriority,Ks=null,$e=null;function vp(t){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(Ks,t,void 0,(t.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:kp,yp=Math.log,xp=Math.LN2;function kp(t){return t>>>=0,t===0?32:31-(yp(t)/xp|0)|0}var Lo=64,Po=4194304;function Hn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Is(t,e){var r=t.pendingLanes;if(r===0)return 0;var o=0,s=t.suspendedLanes,i=t.pingedLanes,l=r&268435455;if(l!==0){var a=l&~s;a!==0?o=Hn(a):(i&=l,i!==0&&(o=Hn(i)))}else l=r&~s,l!==0?o=Hn(l):i!==0&&(o=Hn(i));if(o===0)return 0;if(e!==0&&e!==o&&!(e&s)&&(s=o&-o,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(o&4&&(o|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=o;0<e;)r=31-Be(e),s=1<<r,o|=t[r],e&=~s;return o}function wp(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jp(t,e){for(var r=t.suspendedLanes,o=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var l=31-Be(i),a=1<<l,d=s[l];d===-1?(!(a&r)||a&o)&&(s[l]=wp(a,e)):d<=e&&(t.expiredLanes|=a),i&=~a}}function pl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Bc(){var t=Lo;return Lo<<=1,!(Lo&4194240)&&(Lo=64),t}function mi(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function Io(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Be(e),t[e]=r}function Sp(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var o=t.eventTimes;for(t=t.expirationTimes;0<r;){var s=31-Be(r),i=1<<s;e[s]=0,o[s]=-1,t[s]=-1,r&=~i}}function ua(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var o=31-Be(r),s=1<<o;s&e|t[o]&e&&(t[o]|=e),r&=~s}}var Ct=0;function Dc(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Rc,ba,Fc,Ac,Wc,ml=!1,No=[],br=null,pr=null,mr=null,ao=new Map,go=new Map,dr=[],Cp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vd(t,e){switch(t){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":ao.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(e.pointerId)}}function An(t,e,r,o,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:r,eventSystemFlags:o,nativeEvent:i,targetContainers:[s]},e!==null&&(e=To(e),e!==null&&ba(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function Ip(t,e,r,o,s){switch(e){case"focusin":return br=An(br,t,e,r,o,s),!0;case"dragenter":return pr=An(pr,t,e,r,o,s),!0;case"mouseover":return mr=An(mr,t,e,r,o,s),!0;case"pointerover":var i=s.pointerId;return ao.set(i,An(ao.get(i)||null,t,e,r,o,s)),!0;case"gotpointercapture":return i=s.pointerId,go.set(i,An(go.get(i)||null,t,e,r,o,s)),!0}return!1}function Mc(t){var e=Rr(t.target);if(e!==null){var r=Vr(e);if(r!==null){if(e=r.tag,e===13){if(e=Sc(r),e!==null){t.blockedOn=e,Wc(t.priority,function(){Fc(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=fl(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);gl=o,r.target.dispatchEvent(o),gl=null}else return e=To(r),e!==null&&ba(e),t.blockedOn=r,!1;e.shift()}return!0}function yd(t,e,r){gs(t)&&r.delete(e)}function zp(){ml=!1,br!==null&&gs(br)&&(br=null),pr!==null&&gs(pr)&&(pr=null),mr!==null&&gs(mr)&&(mr=null),ao.forEach(yd),go.forEach(yd)}function Wn(t,e){t.blockedOn===e&&(t.blockedOn=null,ml||(ml=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,zp)))}function co(t){function e(s){return Wn(s,t)}if(0<No.length){Wn(No[0],t);for(var r=1;r<No.length;r++){var o=No[r];o.blockedOn===t&&(o.blockedOn=null)}}for(br!==null&&Wn(br,t),pr!==null&&Wn(pr,t),mr!==null&&Wn(mr,t),ao.forEach(e),go.forEach(e),r=0;r<dr.length;r++)o=dr[r],o.blockedOn===t&&(o.blockedOn=null);for(;0<dr.length&&(r=dr[0],r.blockedOn===null);)Mc(r),r.blockedOn===null&&dr.shift()}var pn=rr.ReactCurrentBatchConfig,zs=!0;function Tp(t,e,r,o){var s=Ct,i=pn.transition;pn.transition=null;try{Ct=1,pa(t,e,r,o)}finally{Ct=s,pn.transition=i}}function Ep(t,e,r,o){var s=Ct,i=pn.transition;pn.transition=null;try{Ct=4,pa(t,e,r,o)}finally{Ct=s,pn.transition=i}}function pa(t,e,r,o){if(zs){var s=fl(t,e,r,o);if(s===null)Ci(t,e,o,Ts,r),vd(t,o);else if(Ip(s,t,e,r,o))o.stopPropagation();else if(vd(t,o),e&4&&-1<Cp.indexOf(t)){for(;s!==null;){var i=To(s);if(i!==null&&Rc(i),i=fl(t,e,r,o),i===null&&Ci(t,e,o,Ts,r),i===s)break;s=i}s!==null&&o.stopPropagation()}else Ci(t,e,o,null,r)}}var Ts=null;function fl(t,e,r,o){if(Ts=null,t=ga(o),t=Rr(t),t!==null)if(e=Vr(t),e===null)t=null;else if(r=e.tag,r===13){if(t=Sc(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ts=t,null}function _c(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fp()){case ca:return 1;case Tc:return 4;case Cs:case hp:return 16;case Ec:return 536870912;default:return 16}default:return 16}}var cr=null,ma=null,cs=null;function Lc(){if(cs)return cs;var t,e=ma,r=e.length,o,s="value"in cr?cr.value:cr.textContent,i=s.length;for(t=0;t<r&&e[t]===s[t];t++);var l=r-t;for(o=1;o<=l&&e[r-o]===s[i-o];o++);return cs=s.slice(t,1<o?1-o:void 0)}function us(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oo(){return!0}function xd(){return!1}function me(t){function e(r,o,s,i,l){this._reactName=r,this._targetInst=s,this.type=o,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(r=t[a],this[a]=r?r(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Oo:xd,this.isPropagationStopped=xd,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Oo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Oo)},persist:function(){},isPersistent:Oo}),e}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fa=me(Cn),zo=_t({},Cn,{view:0,detail:0}),Bp=me(zo),fi,hi,Mn,Xs=_t({},zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ha,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mn&&(Mn&&t.type==="mousemove"?(fi=t.screenX-Mn.screenX,hi=t.screenY-Mn.screenY):hi=fi=0,Mn=t),fi)},movementY:function(t){return"movementY"in t?t.movementY:hi}}),kd=me(Xs),Dp=_t({},Xs,{dataTransfer:0}),Rp=me(Dp),Fp=_t({},zo,{relatedTarget:0}),vi=me(Fp),Ap=_t({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0}),Wp=me(Ap),Mp=_t({},Cn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_p=me(Mp),Lp=_t({},Cn,{data:0}),wd=me(Lp),Pp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Np={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Op={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $p(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Op[t])?!!e[t]:!1}function ha(){return $p}var Hp=_t({},zo,{key:function(t){if(t.key){var e=Pp[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=us(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Np[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ha,charCode:function(t){return t.type==="keypress"?us(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?us(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gp=me(Hp),Up=_t({},Xs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=me(Up),Vp=_t({},zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ha}),Yp=me(Vp),Qp=_t({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kp=me(Qp),Xp=_t({},Xs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Jp=me(Xp),Zp=[9,13,27,32],va=Ze&&"CompositionEvent"in window,Xn=null;Ze&&"documentMode"in document&&(Xn=document.documentMode);var qp=Ze&&"TextEvent"in window&&!Xn,Pc=Ze&&(!va||Xn&&8<Xn&&11>=Xn),Sd=" ",Cd=!1;function Nc(t,e){switch(t){case"keyup":return Zp.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oc(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qr=!1;function tm(t,e){switch(t){case"compositionend":return Oc(e);case"keypress":return e.which!==32?null:(Cd=!0,Sd);case"textInput":return t=e.data,t===Sd&&Cd?null:t;default:return null}}function em(t,e){if(qr)return t==="compositionend"||!va&&Nc(t,e)?(t=Lc(),cs=ma=cr=null,qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Pc&&e.locale!=="ko"?null:e.data;default:return null}}var rm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Id(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!rm[t.type]:e==="textarea"}function $c(t,e,r,o){yc(o),e=Es(e,"onChange"),0<e.length&&(r=new fa("onChange","change",null,r,o),t.push({event:r,listeners:e}))}var Jn=null,uo=null;function nm(t){qc(t,0)}function Js(t){var e=rn(t);if(uc(e))return t}function om(t,e){if(t==="change")return e}var Hc=!1;if(Ze){var yi;if(Ze){var xi="oninput"in document;if(!xi){var zd=document.createElement("div");zd.setAttribute("oninput","return;"),xi=typeof zd.oninput=="function"}yi=xi}else yi=!1;Hc=yi&&(!document.documentMode||9<document.documentMode)}function Td(){Jn&&(Jn.detachEvent("onpropertychange",Gc),uo=Jn=null)}function Gc(t){if(t.propertyName==="value"&&Js(uo)){var e=[];$c(e,uo,t,ga(t)),jc(nm,e)}}function sm(t,e,r){t==="focusin"?(Td(),Jn=e,uo=r,Jn.attachEvent("onpropertychange",Gc)):t==="focusout"&&Td()}function im(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Js(uo)}function lm(t,e){if(t==="click")return Js(e)}function am(t,e){if(t==="input"||t==="change")return Js(e)}function dm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Re=typeof Object.is=="function"?Object.is:dm;function bo(t,e){if(Re(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),o=Object.keys(e);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var s=r[o];if(!Zi.call(e,s)||!Re(t[s],e[s]))return!1}return!0}function Ed(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bd(t,e){var r=Ed(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=e&&o>=e)return{node:r,offset:e-t};t=o}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=Ed(r)}}function Uc(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Uc(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Vc(){for(var t=window,e=ws();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=ws(t.document)}return e}function ya(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function gm(t){var e=Vc(),r=t.focusedElem,o=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&Uc(r.ownerDocument.documentElement,r)){if(o!==null&&ya(r)){if(e=o.start,t=o.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=r.textContent.length,i=Math.min(o.start,s);o=o.end===void 0?i:Math.min(o.end,s),!t.extend&&i>o&&(s=o,o=i,i=s),s=Bd(r,i);var l=Bd(r,o);s&&l&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>o?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cm=Ze&&"documentMode"in document&&11>=document.documentMode,tn=null,hl=null,Zn=null,vl=!1;function Dd(t,e,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;vl||tn==null||tn!==ws(o)||(o=tn,"selectionStart"in o&&ya(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Zn&&bo(Zn,o)||(Zn=o,o=Es(hl,"onSelect"),0<o.length&&(e=new fa("onSelect","select",null,e,r),t.push({event:e,listeners:o}),e.target=tn)))}function $o(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var en={animationend:$o("Animation","AnimationEnd"),animationiteration:$o("Animation","AnimationIteration"),animationstart:$o("Animation","AnimationStart"),transitionend:$o("Transition","TransitionEnd")},ki={},Yc={};Ze&&(Yc=document.createElement("div").style,"AnimationEvent"in window||(delete en.animationend.animation,delete en.animationiteration.animation,delete en.animationstart.animation),"TransitionEvent"in window||delete en.transitionend.transition);function Zs(t){if(ki[t])return ki[t];if(!en[t])return t;var e=en[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in Yc)return ki[t]=e[r];return t}var Qc=Zs("animationend"),Kc=Zs("animationiteration"),Xc=Zs("animationstart"),Jc=Zs("transitionend"),Zc=new Map,Rd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(t,e){Zc.set(t,e),Ur(e,[t])}for(var wi=0;wi<Rd.length;wi++){var ji=Rd[wi],um=ji.toLowerCase(),bm=ji[0].toUpperCase()+ji.slice(1);jr(um,"on"+bm)}jr(Qc,"onAnimationEnd");jr(Kc,"onAnimationIteration");jr(Xc,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr(Jc,"onTransitionEnd");hn("onMouseEnter",["mouseout","mouseover"]);hn("onMouseLeave",["mouseout","mouseover"]);hn("onPointerEnter",["pointerout","pointerover"]);hn("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gn));function Fd(t,e,r){var o=t.type||"unknown-event";t.currentTarget=r,up(o,e,void 0,t),t.currentTarget=null}function qc(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],s=o.event;o=o.listeners;t:{var i=void 0;if(e)for(var l=o.length-1;0<=l;l--){var a=o[l],d=a.instance,g=a.currentTarget;if(a=a.listener,d!==i&&s.isPropagationStopped())break t;Fd(s,a,g),i=d}else for(l=0;l<o.length;l++){if(a=o[l],d=a.instance,g=a.currentTarget,a=a.listener,d!==i&&s.isPropagationStopped())break t;Fd(s,a,g),i=d}}}if(Ss)throw t=bl,Ss=!1,bl=null,t}function Dt(t,e){var r=e[jl];r===void 0&&(r=e[jl]=new Set);var o=t+"__bubble";r.has(o)||(tu(e,t,2,!1),r.add(o))}function Si(t,e,r){var o=0;e&&(o|=4),tu(r,t,o,e)}var Ho="_reactListening"+Math.random().toString(36).slice(2);function po(t){if(!t[Ho]){t[Ho]=!0,lc.forEach(function(r){r!=="selectionchange"&&(pm.has(r)||Si(r,!1,t),Si(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ho]||(e[Ho]=!0,Si("selectionchange",!1,e))}}function tu(t,e,r,o){switch(_c(e)){case 1:var s=Tp;break;case 4:s=Ep;break;default:s=pa}r=s.bind(null,e,r,t),s=void 0,!ul||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),o?s!==void 0?t.addEventListener(e,r,{capture:!0,passive:s}):t.addEventListener(e,r,!0):s!==void 0?t.addEventListener(e,r,{passive:s}):t.addEventListener(e,r,!1)}function Ci(t,e,r,o,s){var i=o;if(!(e&1)&&!(e&2)&&o!==null)t:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var a=o.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(l===4)for(l=o.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===s||d.nodeType===8&&d.parentNode===s))return;l=l.return}for(;a!==null;){if(l=Rr(a),l===null)return;if(d=l.tag,d===5||d===6){o=i=l;continue t}a=a.parentNode}}o=o.return}jc(function(){var g=i,m=ga(r),h=[];t:{var p=Zc.get(t);if(p!==void 0){var w=fa,y=t;switch(t){case"keypress":if(us(r)===0)break t;case"keydown":case"keyup":w=Gp;break;case"focusin":y="focus",w=vi;break;case"focusout":y="blur",w=vi;break;case"beforeblur":case"afterblur":w=vi;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Rp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Yp;break;case Qc:case Kc:case Xc:w=Wp;break;case Jc:w=Kp;break;case"scroll":w=Bp;break;case"wheel":w=Jp;break;case"copy":case"cut":case"paste":w=_p;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=jd}var j=(e&4)!==0,T=!j&&t==="scroll",b=j?p!==null?p+"Capture":null:p;j=[];for(var c=g,u;c!==null;){u=c;var k=u.stateNode;if(u.tag===5&&k!==null&&(u=k,b!==null&&(k=lo(c,b),k!=null&&j.push(mo(c,k,u)))),T)break;c=c.return}0<j.length&&(p=new w(p,y,null,r,m),h.push({event:p,listeners:j}))}}if(!(e&7)){t:{if(p=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",p&&r!==gl&&(y=r.relatedTarget||r.fromElement)&&(Rr(y)||y[qe]))break t;if((w||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,w?(y=r.relatedTarget||r.toElement,w=g,y=y?Rr(y):null,y!==null&&(T=Vr(y),y!==T||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=g),w!==y)){if(j=kd,k="onMouseLeave",b="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(j=jd,k="onPointerLeave",b="onPointerEnter",c="pointer"),T=w==null?p:rn(w),u=y==null?p:rn(y),p=new j(k,c+"leave",w,r,m),p.target=T,p.relatedTarget=u,k=null,Rr(m)===g&&(j=new j(b,c+"enter",y,r,m),j.target=u,j.relatedTarget=T,k=j),T=k,w&&y)e:{for(j=w,b=y,c=0,u=j;u;u=Qr(u))c++;for(u=0,k=b;k;k=Qr(k))u++;for(;0<c-u;)j=Qr(j),c--;for(;0<u-c;)b=Qr(b),u--;for(;c--;){if(j===b||b!==null&&j===b.alternate)break e;j=Qr(j),b=Qr(b)}j=null}else j=null;w!==null&&Ad(h,p,w,j,!1),y!==null&&T!==null&&Ad(h,T,y,j,!0)}}t:{if(p=g?rn(g):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var x=om;else if(Id(p))if(Hc)x=am;else{x=im;var D=sm}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(x=lm);if(x&&(x=x(t,g))){$c(h,x,r,m);break t}D&&D(t,p,g),t==="focusout"&&(D=p._wrapperState)&&D.controlled&&p.type==="number"&&sl(p,"number",p.value)}switch(D=g?rn(g):window,t){case"focusin":(Id(D)||D.contentEditable==="true")&&(tn=D,hl=g,Zn=null);break;case"focusout":Zn=hl=tn=null;break;case"mousedown":vl=!0;break;case"contextmenu":case"mouseup":case"dragend":vl=!1,Dd(h,r,m);break;case"selectionchange":if(cm)break;case"keydown":case"keyup":Dd(h,r,m)}var W;if(va)t:{switch(t){case"compositionstart":var z="onCompositionStart";break t;case"compositionend":z="onCompositionEnd";break t;case"compositionupdate":z="onCompositionUpdate";break t}z=void 0}else qr?Nc(t,r)&&(z="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(z="onCompositionStart");z&&(Pc&&r.locale!=="ko"&&(qr||z!=="onCompositionStart"?z==="onCompositionEnd"&&qr&&(W=Lc()):(cr=m,ma="value"in cr?cr.value:cr.textContent,qr=!0)),D=Es(g,z),0<D.length&&(z=new wd(z,t,null,r,m),h.push({event:z,listeners:D}),W?z.data=W:(W=Oc(r),W!==null&&(z.data=W)))),(W=qp?tm(t,r):em(t,r))&&(g=Es(g,"onBeforeInput"),0<g.length&&(m=new wd("onBeforeInput","beforeinput",null,r,m),h.push({event:m,listeners:g}),m.data=W))}qc(h,e)})}function mo(t,e,r){return{instance:t,listener:e,currentTarget:r}}function Es(t,e){for(var r=e+"Capture",o=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=lo(t,r),i!=null&&o.unshift(mo(t,i,s)),i=lo(t,e),i!=null&&o.push(mo(t,i,s))),t=t.return}return o}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ad(t,e,r,o,s){for(var i=e._reactName,l=[];r!==null&&r!==o;){var a=r,d=a.alternate,g=a.stateNode;if(d!==null&&d===o)break;a.tag===5&&g!==null&&(a=g,s?(d=lo(r,i),d!=null&&l.unshift(mo(r,d,a))):s||(d=lo(r,i),d!=null&&l.push(mo(r,d,a)))),r=r.return}l.length!==0&&t.push({event:e,listeners:l})}var mm=/\r\n?/g,fm=/\u0000|\uFFFD/g;function Wd(t){return(typeof t=="string"?t:""+t).replace(mm,`
`).replace(fm,"")}function Go(t,e,r){if(e=Wd(e),Wd(t)!==e&&r)throw Error($(425))}function Bs(){}var yl=null,xl=null;function kl(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wl=typeof setTimeout=="function"?setTimeout:void 0,hm=typeof clearTimeout=="function"?clearTimeout:void 0,Md=typeof Promise=="function"?Promise:void 0,vm=typeof queueMicrotask=="function"?queueMicrotask:typeof Md<"u"?function(t){return Md.resolve(null).then(t).catch(ym)}:wl;function ym(t){setTimeout(function(){throw t})}function Ii(t,e){var r=e,o=0;do{var s=r.nextSibling;if(t.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(o===0){t.removeChild(s),co(e);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=s}while(r);co(e)}function fr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _d(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var In=Math.random().toString(36).slice(2),Oe="__reactFiber$"+In,fo="__reactProps$"+In,qe="__reactContainer$"+In,jl="__reactEvents$"+In,xm="__reactListeners$"+In,km="__reactHandles$"+In;function Rr(t){var e=t[Oe];if(e)return e;for(var r=t.parentNode;r;){if(e=r[qe]||r[Oe]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=_d(t);t!==null;){if(r=t[Oe])return r;t=_d(t)}return e}t=r,r=t.parentNode}return null}function To(t){return t=t[Oe]||t[qe],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function qs(t){return t[fo]||null}var Sl=[],nn=-1;function Sr(t){return{current:t}}function Rt(t){0>nn||(t.current=Sl[nn],Sl[nn]=null,nn--)}function Et(t,e){nn++,Sl[nn]=t.current,t.current=e}var wr={},Zt=Sr(wr),ie=Sr(!1),Lr=wr;function vn(t,e){var r=t.type.contextTypes;if(!r)return wr;var o=t.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===e)return o.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in r)s[i]=e[i];return o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function le(t){return t=t.childContextTypes,t!=null}function Ds(){Rt(ie),Rt(Zt)}function Ld(t,e,r){if(Zt.current!==wr)throw Error($(168));Et(Zt,e),Et(ie,r)}function eu(t,e,r){var o=t.stateNode;if(e=e.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var s in o)if(!(s in e))throw Error($(108,sp(t)||"Unknown",s));return _t({},r,o)}function Rs(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wr,Lr=Zt.current,Et(Zt,t),Et(ie,ie.current),!0}function Pd(t,e,r){var o=t.stateNode;if(!o)throw Error($(169));r?(t=eu(t,e,Lr),o.__reactInternalMemoizedMergedChildContext=t,Rt(ie),Rt(Zt),Et(Zt,t)):Rt(ie),Et(ie,r)}var Qe=null,ti=!1,zi=!1;function ru(t){Qe===null?Qe=[t]:Qe.push(t)}function wm(t){ti=!0,ru(t)}function Cr(){if(!zi&&Qe!==null){zi=!0;var t=0,e=Ct;try{var r=Qe;for(Ct=1;t<r.length;t++){var o=r[t];do o=o(!0);while(o!==null)}Qe=null,ti=!1}catch(s){throw Qe!==null&&(Qe=Qe.slice(t+1)),zc(ca,Cr),s}finally{Ct=e,zi=!1}}return null}var on=[],sn=0,Fs=null,As=0,fe=[],he=0,Pr=null,Ke=1,Xe="";function Tr(t,e){on[sn++]=As,on[sn++]=Fs,Fs=t,As=e}function nu(t,e,r){fe[he++]=Ke,fe[he++]=Xe,fe[he++]=Pr,Pr=t;var o=Ke;t=Xe;var s=32-Be(o)-1;o&=~(1<<s),r+=1;var i=32-Be(e)+s;if(30<i){var l=s-s%5;i=(o&(1<<l)-1).toString(32),o>>=l,s-=l,Ke=1<<32-Be(e)+s|r<<s|o,Xe=i+t}else Ke=1<<i|r<<s|o,Xe=t}function xa(t){t.return!==null&&(Tr(t,1),nu(t,1,0))}function ka(t){for(;t===Fs;)Fs=on[--sn],on[sn]=null,As=on[--sn],on[sn]=null;for(;t===Pr;)Pr=fe[--he],fe[he]=null,Xe=fe[--he],fe[he]=null,Ke=fe[--he],fe[he]=null}var ue=null,ce=null,Ft=!1,Ee=null;function ou(t,e){var r=ve(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function Nd(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ue=t,ce=fr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ue=t,ce=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=Pr!==null?{id:Ke,overflow:Xe}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=ve(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,ue=t,ce=null,!0):!1;default:return!1}}function Cl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Il(t){if(Ft){var e=ce;if(e){var r=e;if(!Nd(t,e)){if(Cl(t))throw Error($(418));e=fr(r.nextSibling);var o=ue;e&&Nd(t,e)?ou(o,r):(t.flags=t.flags&-4097|2,Ft=!1,ue=t)}}else{if(Cl(t))throw Error($(418));t.flags=t.flags&-4097|2,Ft=!1,ue=t}}}function Od(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ue=t}function Uo(t){if(t!==ue)return!1;if(!Ft)return Od(t),Ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!kl(t.type,t.memoizedProps)),e&&(e=ce)){if(Cl(t))throw su(),Error($(418));for(;e;)ou(t,e),e=fr(e.nextSibling)}if(Od(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){ce=fr(t.nextSibling);break t}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}ce=null}}else ce=ue?fr(t.stateNode.nextSibling):null;return!0}function su(){for(var t=ce;t;)t=fr(t.nextSibling)}function yn(){ce=ue=null,Ft=!1}function wa(t){Ee===null?Ee=[t]:Ee.push(t)}var jm=rr.ReactCurrentBatchConfig;function _n(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error($(309));var o=r.stateNode}if(!o)throw Error($(147,t));var s=o,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(l){var a=s.refs;l===null?delete a[i]:a[i]=l},e._stringRef=i,e)}if(typeof t!="string")throw Error($(284));if(!r._owner)throw Error($(290,t))}return t}function Vo(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $d(t){var e=t._init;return e(t._payload)}function iu(t){function e(b,c){if(t){var u=b.deletions;u===null?(b.deletions=[c],b.flags|=16):u.push(c)}}function r(b,c){if(!t)return null;for(;c!==null;)e(b,c),c=c.sibling;return null}function o(b,c){for(b=new Map;c!==null;)c.key!==null?b.set(c.key,c):b.set(c.index,c),c=c.sibling;return b}function s(b,c){return b=xr(b,c),b.index=0,b.sibling=null,b}function i(b,c,u){return b.index=u,t?(u=b.alternate,u!==null?(u=u.index,u<c?(b.flags|=2,c):u):(b.flags|=2,c)):(b.flags|=1048576,c)}function l(b){return t&&b.alternate===null&&(b.flags|=2),b}function a(b,c,u,k){return c===null||c.tag!==6?(c=Ai(u,b.mode,k),c.return=b,c):(c=s(c,u),c.return=b,c)}function d(b,c,u,k){var x=u.type;return x===Zr?m(b,c,u.props.children,k,u.key):c!==null&&(c.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===lr&&$d(x)===c.type)?(k=s(c,u.props),k.ref=_n(b,c,u),k.return=b,k):(k=ys(u.type,u.key,u.props,null,b.mode,k),k.ref=_n(b,c,u),k.return=b,k)}function g(b,c,u,k){return c===null||c.tag!==4||c.stateNode.containerInfo!==u.containerInfo||c.stateNode.implementation!==u.implementation?(c=Wi(u,b.mode,k),c.return=b,c):(c=s(c,u.children||[]),c.return=b,c)}function m(b,c,u,k,x){return c===null||c.tag!==7?(c=_r(u,b.mode,k,x),c.return=b,c):(c=s(c,u),c.return=b,c)}function h(b,c,u){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ai(""+c,b.mode,u),c.return=b,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Wo:return u=ys(c.type,c.key,c.props,null,b.mode,u),u.ref=_n(b,null,c),u.return=b,u;case Jr:return c=Wi(c,b.mode,u),c.return=b,c;case lr:var k=c._init;return h(b,k(c._payload),u)}if($n(c)||Rn(c))return c=_r(c,b.mode,u,null),c.return=b,c;Vo(b,c)}return null}function p(b,c,u,k){var x=c!==null?c.key:null;if(typeof u=="string"&&u!==""||typeof u=="number")return x!==null?null:a(b,c,""+u,k);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Wo:return u.key===x?d(b,c,u,k):null;case Jr:return u.key===x?g(b,c,u,k):null;case lr:return x=u._init,p(b,c,x(u._payload),k)}if($n(u)||Rn(u))return x!==null?null:m(b,c,u,k,null);Vo(b,u)}return null}function w(b,c,u,k,x){if(typeof k=="string"&&k!==""||typeof k=="number")return b=b.get(u)||null,a(c,b,""+k,x);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Wo:return b=b.get(k.key===null?u:k.key)||null,d(c,b,k,x);case Jr:return b=b.get(k.key===null?u:k.key)||null,g(c,b,k,x);case lr:var D=k._init;return w(b,c,u,D(k._payload),x)}if($n(k)||Rn(k))return b=b.get(u)||null,m(c,b,k,x,null);Vo(c,k)}return null}function y(b,c,u,k){for(var x=null,D=null,W=c,z=c=0,B=null;W!==null&&z<u.length;z++){W.index>z?(B=W,W=null):B=W.sibling;var F=p(b,W,u[z],k);if(F===null){W===null&&(W=B);break}t&&W&&F.alternate===null&&e(b,W),c=i(F,c,z),D===null?x=F:D.sibling=F,D=F,W=B}if(z===u.length)return r(b,W),Ft&&Tr(b,z),x;if(W===null){for(;z<u.length;z++)W=h(b,u[z],k),W!==null&&(c=i(W,c,z),D===null?x=W:D.sibling=W,D=W);return Ft&&Tr(b,z),x}for(W=o(b,W);z<u.length;z++)B=w(W,b,z,u[z],k),B!==null&&(t&&B.alternate!==null&&W.delete(B.key===null?z:B.key),c=i(B,c,z),D===null?x=B:D.sibling=B,D=B);return t&&W.forEach(function(q){return e(b,q)}),Ft&&Tr(b,z),x}function j(b,c,u,k){var x=Rn(u);if(typeof x!="function")throw Error($(150));if(u=x.call(u),u==null)throw Error($(151));for(var D=x=null,W=c,z=c=0,B=null,F=u.next();W!==null&&!F.done;z++,F=u.next()){W.index>z?(B=W,W=null):B=W.sibling;var q=p(b,W,F.value,k);if(q===null){W===null&&(W=B);break}t&&W&&q.alternate===null&&e(b,W),c=i(q,c,z),D===null?x=q:D.sibling=q,D=q,W=B}if(F.done)return r(b,W),Ft&&Tr(b,z),x;if(W===null){for(;!F.done;z++,F=u.next())F=h(b,F.value,k),F!==null&&(c=i(F,c,z),D===null?x=F:D.sibling=F,D=F);return Ft&&Tr(b,z),x}for(W=o(b,W);!F.done;z++,F=u.next())F=w(W,b,z,F.value,k),F!==null&&(t&&F.alternate!==null&&W.delete(F.key===null?z:F.key),c=i(F,c,z),D===null?x=F:D.sibling=F,D=F);return t&&W.forEach(function(M){return e(b,M)}),Ft&&Tr(b,z),x}function T(b,c,u,k){if(typeof u=="object"&&u!==null&&u.type===Zr&&u.key===null&&(u=u.props.children),typeof u=="object"&&u!==null){switch(u.$$typeof){case Wo:t:{for(var x=u.key,D=c;D!==null;){if(D.key===x){if(x=u.type,x===Zr){if(D.tag===7){r(b,D.sibling),c=s(D,u.props.children),c.return=b,b=c;break t}}else if(D.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===lr&&$d(x)===D.type){r(b,D.sibling),c=s(D,u.props),c.ref=_n(b,D,u),c.return=b,b=c;break t}r(b,D);break}else e(b,D);D=D.sibling}u.type===Zr?(c=_r(u.props.children,b.mode,k,u.key),c.return=b,b=c):(k=ys(u.type,u.key,u.props,null,b.mode,k),k.ref=_n(b,c,u),k.return=b,b=k)}return l(b);case Jr:t:{for(D=u.key;c!==null;){if(c.key===D)if(c.tag===4&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){r(b,c.sibling),c=s(c,u.children||[]),c.return=b,b=c;break t}else{r(b,c);break}else e(b,c);c=c.sibling}c=Wi(u,b.mode,k),c.return=b,b=c}return l(b);case lr:return D=u._init,T(b,c,D(u._payload),k)}if($n(u))return y(b,c,u,k);if(Rn(u))return j(b,c,u,k);Vo(b,u)}return typeof u=="string"&&u!==""||typeof u=="number"?(u=""+u,c!==null&&c.tag===6?(r(b,c.sibling),c=s(c,u),c.return=b,b=c):(r(b,c),c=Ai(u,b.mode,k),c.return=b,b=c),l(b)):r(b,c)}return T}var xn=iu(!0),lu=iu(!1),Ws=Sr(null),Ms=null,ln=null,ja=null;function Sa(){ja=ln=Ms=null}function Ca(t){var e=Ws.current;Rt(Ws),t._currentValue=e}function zl(t,e,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===r)break;t=t.return}}function mn(t,e){Ms=t,ja=ln=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(se=!0),t.firstContext=null)}function ke(t){var e=t._currentValue;if(ja!==t)if(t={context:t,memoizedValue:e,next:null},ln===null){if(Ms===null)throw Error($(308));ln=t,Ms.dependencies={lanes:0,firstContext:t}}else ln=ln.next=t;return e}var Fr=null;function Ia(t){Fr===null?Fr=[t]:Fr.push(t)}function au(t,e,r,o){var s=e.interleaved;return s===null?(r.next=r,Ia(e)):(r.next=s.next,s.next=r),e.interleaved=r,tr(t,o)}function tr(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var ar=!1;function za(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function du(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Je(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function hr(t,e,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,kt&2){var s=o.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),o.pending=e,tr(t,r)}return s=o.interleaved,s===null?(e.next=e,Ia(o)):(e.next=s.next,s.next=e),o.interleaved=e,tr(t,r)}function bs(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var o=e.lanes;o&=t.pendingLanes,r|=o,e.lanes=r,ua(t,r)}}function Hd(t,e){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var s=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?s=i=l:i=i.next=l,r=r.next}while(r!==null);i===null?s=i=e:i=i.next=e}else s=i=e;r={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:o.shared,effects:o.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function _s(t,e,r,o){var s=t.updateQueue;ar=!1;var i=s.firstBaseUpdate,l=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var d=a,g=d.next;d.next=null,l===null?i=g:l.next=g,l=d;var m=t.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==l&&(a===null?m.firstBaseUpdate=g:a.next=g,m.lastBaseUpdate=d))}if(i!==null){var h=s.baseState;l=0,m=g=d=null,a=i;do{var p=a.lane,w=a.eventTime;if((o&p)===p){m!==null&&(m=m.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});t:{var y=t,j=a;switch(p=e,w=r,j.tag){case 1:if(y=j.payload,typeof y=="function"){h=y.call(w,h,p);break t}h=y;break t;case 3:y.flags=y.flags&-65537|128;case 0:if(y=j.payload,p=typeof y=="function"?y.call(w,h,p):y,p==null)break t;h=_t({},h,p);break t;case 2:ar=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=s.effects,p===null?s.effects=[a]:p.push(a))}else w={eventTime:w,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(g=m=w,d=h):m=m.next=w,l|=p;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;p=a,a=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);if(m===null&&(d=h),s.baseState=d,s.firstBaseUpdate=g,s.lastBaseUpdate=m,e=s.shared.interleaved,e!==null){s=e;do l|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Or|=l,t.lanes=l,t.memoizedState=h}}function Gd(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var o=t[e],s=o.callback;if(s!==null){if(o.callback=null,o=r,typeof s!="function")throw Error($(191,s));s.call(o)}}}var Eo={},He=Sr(Eo),ho=Sr(Eo),vo=Sr(Eo);function Ar(t){if(t===Eo)throw Error($(174));return t}function Ta(t,e){switch(Et(vo,e),Et(ho,t),Et(He,Eo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ll(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ll(e,t)}Rt(He),Et(He,e)}function kn(){Rt(He),Rt(ho),Rt(vo)}function gu(t){Ar(vo.current);var e=Ar(He.current),r=ll(e,t.type);e!==r&&(Et(ho,t),Et(He,r))}function Ea(t){ho.current===t&&(Rt(He),Rt(ho))}var Wt=Sr(0);function Ls(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ti=[];function Ba(){for(var t=0;t<Ti.length;t++)Ti[t]._workInProgressVersionPrimary=null;Ti.length=0}var ps=rr.ReactCurrentDispatcher,Ei=rr.ReactCurrentBatchConfig,Nr=0,Mt=null,$t=null,Gt=null,Ps=!1,qn=!1,yo=0,Sm=0;function Kt(){throw Error($(321))}function Da(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!Re(t[r],e[r]))return!1;return!0}function Ra(t,e,r,o,s,i){if(Nr=i,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ps.current=t===null||t.memoizedState===null?Tm:Em,t=r(o,s),qn){i=0;do{if(qn=!1,yo=0,25<=i)throw Error($(301));i+=1,Gt=$t=null,e.updateQueue=null,ps.current=Bm,t=r(o,s)}while(qn)}if(ps.current=Ns,e=$t!==null&&$t.next!==null,Nr=0,Gt=$t=Mt=null,Ps=!1,e)throw Error($(300));return t}function Fa(){var t=yo!==0;return yo=0,t}function Le(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?Mt.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function we(){if($t===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var e=Gt===null?Mt.memoizedState:Gt.next;if(e!==null)Gt=e,$t=t;else{if(t===null)throw Error($(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},Gt===null?Mt.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function xo(t,e){return typeof e=="function"?e(t):e}function Bi(t){var e=we(),r=e.queue;if(r===null)throw Error($(311));r.lastRenderedReducer=t;var o=$t,s=o.baseQueue,i=r.pending;if(i!==null){if(s!==null){var l=s.next;s.next=i.next,i.next=l}o.baseQueue=s=i,r.pending=null}if(s!==null){i=s.next,o=o.baseState;var a=l=null,d=null,g=i;do{var m=g.lane;if((Nr&m)===m)d!==null&&(d=d.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),o=g.hasEagerState?g.eagerState:t(o,g.action);else{var h={lane:m,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};d===null?(a=d=h,l=o):d=d.next=h,Mt.lanes|=m,Or|=m}g=g.next}while(g!==null&&g!==i);d===null?l=o:d.next=a,Re(o,e.memoizedState)||(se=!0),e.memoizedState=o,e.baseState=l,e.baseQueue=d,r.lastRenderedState=o}if(t=r.interleaved,t!==null){s=t;do i=s.lane,Mt.lanes|=i,Or|=i,s=s.next;while(s!==t)}else s===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Di(t){var e=we(),r=e.queue;if(r===null)throw Error($(311));r.lastRenderedReducer=t;var o=r.dispatch,s=r.pending,i=e.memoizedState;if(s!==null){r.pending=null;var l=s=s.next;do i=t(i,l.action),l=l.next;while(l!==s);Re(i,e.memoizedState)||(se=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),r.lastRenderedState=i}return[i,o]}function cu(){}function uu(t,e){var r=Mt,o=we(),s=e(),i=!Re(o.memoizedState,s);if(i&&(o.memoizedState=s,se=!0),o=o.queue,Aa(mu.bind(null,r,o,t),[t]),o.getSnapshot!==e||i||Gt!==null&&Gt.memoizedState.tag&1){if(r.flags|=2048,ko(9,pu.bind(null,r,o,s,e),void 0,null),Ut===null)throw Error($(349));Nr&30||bu(r,e,s)}return s}function bu(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function pu(t,e,r,o){e.value=r,e.getSnapshot=o,fu(e)&&hu(t)}function mu(t,e,r){return r(function(){fu(e)&&hu(t)})}function fu(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!Re(t,r)}catch{return!0}}function hu(t){var e=tr(t,1);e!==null&&De(e,t,1,-1)}function Ud(t){var e=Le();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:t},e.queue=t,t=t.dispatch=zm.bind(null,Mt,t),[e.memoizedState,t]}function ko(t,e,r,o){return t={tag:t,create:e,destroy:r,deps:o,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,e.lastEffect=t)),t}function vu(){return we().memoizedState}function ms(t,e,r,o){var s=Le();Mt.flags|=t,s.memoizedState=ko(1|e,r,void 0,o===void 0?null:o)}function ei(t,e,r,o){var s=we();o=o===void 0?null:o;var i=void 0;if($t!==null){var l=$t.memoizedState;if(i=l.destroy,o!==null&&Da(o,l.deps)){s.memoizedState=ko(e,r,i,o);return}}Mt.flags|=t,s.memoizedState=ko(1|e,r,i,o)}function Vd(t,e){return ms(8390656,8,t,e)}function Aa(t,e){return ei(2048,8,t,e)}function yu(t,e){return ei(4,2,t,e)}function xu(t,e){return ei(4,4,t,e)}function ku(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function wu(t,e,r){return r=r!=null?r.concat([t]):null,ei(4,4,ku.bind(null,e,t),r)}function Wa(){}function ju(t,e){var r=we();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&Da(e,o[1])?o[0]:(r.memoizedState=[t,e],t)}function Su(t,e){var r=we();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&Da(e,o[1])?o[0]:(t=t(),r.memoizedState=[t,e],t)}function Cu(t,e,r){return Nr&21?(Re(r,e)||(r=Bc(),Mt.lanes|=r,Or|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,se=!0),t.memoizedState=r)}function Cm(t,e){var r=Ct;Ct=r!==0&&4>r?r:4,t(!0);var o=Ei.transition;Ei.transition={};try{t(!1),e()}finally{Ct=r,Ei.transition=o}}function Iu(){return we().memoizedState}function Im(t,e,r){var o=yr(t);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},zu(t))Tu(e,r);else if(r=au(t,e,r,o),r!==null){var s=te();De(r,t,o,s),Eu(r,e,o)}}function zm(t,e,r){var o=yr(t),s={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(zu(t))Tu(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var l=e.lastRenderedState,a=i(l,r);if(s.hasEagerState=!0,s.eagerState=a,Re(a,l)){var d=e.interleaved;d===null?(s.next=s,Ia(e)):(s.next=d.next,d.next=s),e.interleaved=s;return}}catch{}finally{}r=au(t,e,s,o),r!==null&&(s=te(),De(r,t,o,s),Eu(r,e,o))}}function zu(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function Tu(t,e){qn=Ps=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function Eu(t,e,r){if(r&4194240){var o=e.lanes;o&=t.pendingLanes,r|=o,e.lanes=r,ua(t,r)}}var Ns={readContext:ke,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},Tm={readContext:ke,useCallback:function(t,e){return Le().memoizedState=[t,e===void 0?null:e],t},useContext:ke,useEffect:Vd,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,ms(4194308,4,ku.bind(null,e,t),r)},useLayoutEffect:function(t,e){return ms(4194308,4,t,e)},useInsertionEffect:function(t,e){return ms(4,2,t,e)},useMemo:function(t,e){var r=Le();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var o=Le();return e=r!==void 0?r(e):e,o.memoizedState=o.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},o.queue=t,t=t.dispatch=Im.bind(null,Mt,t),[o.memoizedState,t]},useRef:function(t){var e=Le();return t={current:t},e.memoizedState=t},useState:Ud,useDebugValue:Wa,useDeferredValue:function(t){return Le().memoizedState=t},useTransition:function(){var t=Ud(!1),e=t[0];return t=Cm.bind(null,t[1]),Le().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var o=Mt,s=Le();if(Ft){if(r===void 0)throw Error($(407));r=r()}else{if(r=e(),Ut===null)throw Error($(349));Nr&30||bu(o,e,r)}s.memoizedState=r;var i={value:r,getSnapshot:e};return s.queue=i,Vd(mu.bind(null,o,i,t),[t]),o.flags|=2048,ko(9,pu.bind(null,o,i,r,e),void 0,null),r},useId:function(){var t=Le(),e=Ut.identifierPrefix;if(Ft){var r=Xe,o=Ke;r=(o&~(1<<32-Be(o)-1)).toString(32)+r,e=":"+e+"R"+r,r=yo++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=Sm++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Em={readContext:ke,useCallback:ju,useContext:ke,useEffect:Aa,useImperativeHandle:wu,useInsertionEffect:yu,useLayoutEffect:xu,useMemo:Su,useReducer:Bi,useRef:vu,useState:function(){return Bi(xo)},useDebugValue:Wa,useDeferredValue:function(t){var e=we();return Cu(e,$t.memoizedState,t)},useTransition:function(){var t=Bi(xo)[0],e=we().memoizedState;return[t,e]},useMutableSource:cu,useSyncExternalStore:uu,useId:Iu,unstable_isNewReconciler:!1},Bm={readContext:ke,useCallback:ju,useContext:ke,useEffect:Aa,useImperativeHandle:wu,useInsertionEffect:yu,useLayoutEffect:xu,useMemo:Su,useReducer:Di,useRef:vu,useState:function(){return Di(xo)},useDebugValue:Wa,useDeferredValue:function(t){var e=we();return $t===null?e.memoizedState=t:Cu(e,$t.memoizedState,t)},useTransition:function(){var t=Di(xo)[0],e=we().memoizedState;return[t,e]},useMutableSource:cu,useSyncExternalStore:uu,useId:Iu,unstable_isNewReconciler:!1};function ze(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function Tl(t,e,r,o){e=t.memoizedState,r=r(o,e),r=r==null?e:_t({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var ri={isMounted:function(t){return(t=t._reactInternals)?Vr(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var o=te(),s=yr(t),i=Je(o,s);i.payload=e,r!=null&&(i.callback=r),e=hr(t,i,s),e!==null&&(De(e,t,s,o),bs(e,t,s))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var o=te(),s=yr(t),i=Je(o,s);i.tag=1,i.payload=e,r!=null&&(i.callback=r),e=hr(t,i,s),e!==null&&(De(e,t,s,o),bs(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=te(),o=yr(t),s=Je(r,o);s.tag=2,e!=null&&(s.callback=e),e=hr(t,s,o),e!==null&&(De(e,t,o,r),bs(e,t,o))}};function Yd(t,e,r,o,s,i,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,i,l):e.prototype&&e.prototype.isPureReactComponent?!bo(r,o)||!bo(s,i):!0}function Bu(t,e,r){var o=!1,s=wr,i=e.contextType;return typeof i=="object"&&i!==null?i=ke(i):(s=le(e)?Lr:Zt.current,o=e.contextTypes,i=(o=o!=null)?vn(t,s):wr),e=new e(r,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ri,t.stateNode=e,e._reactInternals=t,o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Qd(t,e,r,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,o),e.state!==t&&ri.enqueueReplaceState(e,e.state,null)}function El(t,e,r,o){var s=t.stateNode;s.props=r,s.state=t.memoizedState,s.refs={},za(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=ke(i):(i=le(e)?Lr:Zt.current,s.context=vn(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Tl(t,e,i,r),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&ri.enqueueReplaceState(s,s.state,null),_s(t,r,s,o),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function wn(t,e){try{var r="",o=e;do r+=op(o),o=o.return;while(o);var s=r}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Ri(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function Bl(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var Dm=typeof WeakMap=="function"?WeakMap:Map;function Du(t,e,r){r=Je(-1,r),r.tag=3,r.payload={element:null};var o=e.value;return r.callback=function(){$s||($s=!0,Nl=o),Bl(t,e)},r}function Ru(t,e,r){r=Je(-1,r),r.tag=3;var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var s=e.value;r.payload=function(){return o(s)},r.callback=function(){Bl(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Bl(t,e),typeof o!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),r}function Kd(t,e,r){var o=t.pingCache;if(o===null){o=t.pingCache=new Dm;var s=new Set;o.set(e,s)}else s=o.get(e),s===void 0&&(s=new Set,o.set(e,s));s.has(r)||(s.add(r),t=Um.bind(null,t,e,r),e.then(t,t))}function Xd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jd(t,e,r,o,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=Je(-1,1),e.tag=2,hr(r,e,1))),r.lanes|=1),t)}var Rm=rr.ReactCurrentOwner,se=!1;function qt(t,e,r,o){e.child=t===null?lu(e,null,r,o):xn(e,t.child,r,o)}function Zd(t,e,r,o,s){r=r.render;var i=e.ref;return mn(e,s),o=Ra(t,e,r,o,i,s),r=Fa(),t!==null&&!se?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,er(t,e,s)):(Ft&&r&&xa(e),e.flags|=1,qt(t,e,o,s),e.child)}function qd(t,e,r,o,s){if(t===null){var i=r.type;return typeof i=="function"&&!Ha(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=i,Fu(t,e,i,o,s)):(t=ys(r.type,null,o,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var l=i.memoizedProps;if(r=r.compare,r=r!==null?r:bo,r(l,o)&&t.ref===e.ref)return er(t,e,s)}return e.flags|=1,t=xr(i,o),t.ref=e.ref,t.return=e,e.child=t}function Fu(t,e,r,o,s){if(t!==null){var i=t.memoizedProps;if(bo(i,o)&&t.ref===e.ref)if(se=!1,e.pendingProps=o=i,(t.lanes&s)!==0)t.flags&131072&&(se=!0);else return e.lanes=t.lanes,er(t,e,s)}return Dl(t,e,r,o,s)}function Au(t,e,r){var o=e.pendingProps,s=o.children,i=t!==null?t.memoizedState:null;if(o.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Et(dn,ge),ge|=r;else{if(!(r&1073741824))return t=i!==null?i.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Et(dn,ge),ge|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:r,Et(dn,ge),ge|=o}else i!==null?(o=i.baseLanes|r,e.memoizedState=null):o=r,Et(dn,ge),ge|=o;return qt(t,e,s,r),e.child}function Wu(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function Dl(t,e,r,o,s){var i=le(r)?Lr:Zt.current;return i=vn(e,i),mn(e,s),r=Ra(t,e,r,o,i,s),o=Fa(),t!==null&&!se?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,er(t,e,s)):(Ft&&o&&xa(e),e.flags|=1,qt(t,e,r,s),e.child)}function tg(t,e,r,o,s){if(le(r)){var i=!0;Rs(e)}else i=!1;if(mn(e,s),e.stateNode===null)fs(t,e),Bu(e,r,o),El(e,r,o,s),o=!0;else if(t===null){var l=e.stateNode,a=e.memoizedProps;l.props=a;var d=l.context,g=r.contextType;typeof g=="object"&&g!==null?g=ke(g):(g=le(r)?Lr:Zt.current,g=vn(e,g));var m=r.getDerivedStateFromProps,h=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==o||d!==g)&&Qd(e,l,o,g),ar=!1;var p=e.memoizedState;l.state=p,_s(e,o,l,s),d=e.memoizedState,a!==o||p!==d||ie.current||ar?(typeof m=="function"&&(Tl(e,r,m,o),d=e.memoizedState),(a=ar||Yd(e,r,a,o,p,d,g))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=d),l.props=o,l.state=d,l.context=g,o=a):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{l=e.stateNode,du(t,e),a=e.memoizedProps,g=e.type===e.elementType?a:ze(e.type,a),l.props=g,h=e.pendingProps,p=l.context,d=r.contextType,typeof d=="object"&&d!==null?d=ke(d):(d=le(r)?Lr:Zt.current,d=vn(e,d));var w=r.getDerivedStateFromProps;(m=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||p!==d)&&Qd(e,l,o,d),ar=!1,p=e.memoizedState,l.state=p,_s(e,o,l,s);var y=e.memoizedState;a!==h||p!==y||ie.current||ar?(typeof w=="function"&&(Tl(e,r,w,o),y=e.memoizedState),(g=ar||Yd(e,r,g,o,p,y,d)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,y,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,y,d)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=y),l.props=o,l.state=y,l.context=d,o=g):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),o=!1)}return Rl(t,e,r,o,i,s)}function Rl(t,e,r,o,s,i){Wu(t,e);var l=(e.flags&128)!==0;if(!o&&!l)return s&&Pd(e,r,!1),er(t,e,i);o=e.stateNode,Rm.current=e;var a=l&&typeof r.getDerivedStateFromError!="function"?null:o.render();return e.flags|=1,t!==null&&l?(e.child=xn(e,t.child,null,i),e.child=xn(e,null,a,i)):qt(t,e,a,i),e.memoizedState=o.state,s&&Pd(e,r,!0),e.child}function Mu(t){var e=t.stateNode;e.pendingContext?Ld(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ld(t,e.context,!1),Ta(t,e.containerInfo)}function eg(t,e,r,o,s){return yn(),wa(s),e.flags|=256,qt(t,e,r,o),e.child}var Fl={dehydrated:null,treeContext:null,retryLane:0};function Al(t){return{baseLanes:t,cachePool:null,transitions:null}}function _u(t,e,r){var o=e.pendingProps,s=Wt.current,i=!1,l=(e.flags&128)!==0,a;if((a=l)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Et(Wt,s&1),t===null)return Il(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=o.children,t=o.fallback,i?(o=e.mode,i=e.child,l={mode:"hidden",children:l},!(o&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=si(l,o,0,null),t=_r(t,o,r,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Al(r),e.memoizedState=Fl,t):Ma(e,l));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return Fm(t,e,l,o,a,s,r);if(i){i=o.fallback,l=e.mode,s=t.child,a=s.sibling;var d={mode:"hidden",children:o.children};return!(l&1)&&e.child!==s?(o=e.child,o.childLanes=0,o.pendingProps=d,e.deletions=null):(o=xr(s,d),o.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=xr(a,i):(i=_r(i,l,r,null),i.flags|=2),i.return=e,o.return=e,o.sibling=i,e.child=o,o=i,i=e.child,l=t.child.memoizedState,l=l===null?Al(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=t.childLanes&~r,e.memoizedState=Fl,o}return i=t.child,t=i.sibling,o=xr(i,{mode:"visible",children:o.children}),!(e.mode&1)&&(o.lanes=r),o.return=e,o.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=o,e.memoizedState=null,o}function Ma(t,e){return e=si({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Yo(t,e,r,o){return o!==null&&wa(o),xn(e,t.child,null,r),t=Ma(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Fm(t,e,r,o,s,i,l){if(r)return e.flags&256?(e.flags&=-257,o=Ri(Error($(422))),Yo(t,e,l,o)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=o.fallback,s=e.mode,o=si({mode:"visible",children:o.children},s,0,null),i=_r(i,s,l,null),i.flags|=2,o.return=e,i.return=e,o.sibling=i,e.child=o,e.mode&1&&xn(e,t.child,null,l),e.child.memoizedState=Al(l),e.memoizedState=Fl,i);if(!(e.mode&1))return Yo(t,e,l,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var a=o.dgst;return o=a,i=Error($(419)),o=Ri(i,o,void 0),Yo(t,e,l,o)}if(a=(l&t.childLanes)!==0,se||a){if(o=Ut,o!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(o.suspendedLanes|l)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,tr(t,s),De(o,t,s,-1))}return $a(),o=Ri(Error($(421))),Yo(t,e,l,o)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=Vm.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,ce=fr(s.nextSibling),ue=e,Ft=!0,Ee=null,t!==null&&(fe[he++]=Ke,fe[he++]=Xe,fe[he++]=Pr,Ke=t.id,Xe=t.overflow,Pr=e),e=Ma(e,o.children),e.flags|=4096,e)}function rg(t,e,r){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),zl(t.return,e,r)}function Fi(t,e,r,o,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=r,i.tailMode=s)}function Lu(t,e,r){var o=e.pendingProps,s=o.revealOrder,i=o.tail;if(qt(t,e,o.children,r),o=Wt.current,o&2)o=o&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rg(t,r,e);else if(t.tag===19)rg(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}if(Et(Wt,o),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(r=e.child,s=null;r!==null;)t=r.alternate,t!==null&&Ls(t)===null&&(s=r),r=r.sibling;r=s,r===null?(s=e.child,e.child=null):(s=r.sibling,r.sibling=null),Fi(e,!1,s,r,i);break;case"backwards":for(r=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Ls(t)===null){e.child=s;break}t=s.sibling,s.sibling=r,r=s,s=t}Fi(e,!0,r,null,i);break;case"together":Fi(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fs(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function er(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),Or|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,r=xr(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=xr(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function Am(t,e,r){switch(e.tag){case 3:Mu(e),yn();break;case 5:gu(e);break;case 1:le(e.type)&&Rs(e);break;case 4:Ta(e,e.stateNode.containerInfo);break;case 10:var o=e.type._context,s=e.memoizedProps.value;Et(Ws,o._currentValue),o._currentValue=s;break;case 13:if(o=e.memoizedState,o!==null)return o.dehydrated!==null?(Et(Wt,Wt.current&1),e.flags|=128,null):r&e.child.childLanes?_u(t,e,r):(Et(Wt,Wt.current&1),t=er(t,e,r),t!==null?t.sibling:null);Et(Wt,Wt.current&1);break;case 19:if(o=(r&e.childLanes)!==0,t.flags&128){if(o)return Lu(t,e,r);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Et(Wt,Wt.current),o)break;return null;case 22:case 23:return e.lanes=0,Au(t,e,r)}return er(t,e,r)}var Pu,Wl,Nu,Ou;Pu=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Wl=function(){};Nu=function(t,e,r,o){var s=t.memoizedProps;if(s!==o){t=e.stateNode,Ar(He.current);var i=null;switch(r){case"input":s=nl(t,s),o=nl(t,o),i=[];break;case"select":s=_t({},s,{value:void 0}),o=_t({},o,{value:void 0}),i=[];break;case"textarea":s=il(t,s),o=il(t,o),i=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(t.onclick=Bs)}al(r,o);var l;r=null;for(g in s)if(!o.hasOwnProperty(g)&&s.hasOwnProperty(g)&&s[g]!=null)if(g==="style"){var a=s[g];for(l in a)a.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(so.hasOwnProperty(g)?i||(i=[]):(i=i||[]).push(g,null));for(g in o){var d=o[g];if(a=s!=null?s[g]:void 0,o.hasOwnProperty(g)&&d!==a&&(d!=null||a!=null))if(g==="style")if(a){for(l in a)!a.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in d)d.hasOwnProperty(l)&&a[l]!==d[l]&&(r||(r={}),r[l]=d[l])}else r||(i||(i=[]),i.push(g,r)),r=d;else g==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(i=i||[]).push(g,d)):g==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(g,""+d):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(so.hasOwnProperty(g)?(d!=null&&g==="onScroll"&&Dt("scroll",t),i||a===d||(i=[])):(i=i||[]).push(g,d))}r&&(i=i||[]).push("style",r);var g=i;(e.updateQueue=g)&&(e.flags|=4)}};Ou=function(t,e,r,o){r!==o&&(e.flags|=4)};function Ln(t,e){if(!Ft)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(e)for(var s=t.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=o,t.childLanes=r,e}function Wm(t,e,r){var o=e.pendingProps;switch(ka(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return le(e.type)&&Ds(),Xt(e),null;case 3:return o=e.stateNode,kn(),Rt(ie),Rt(Zt),Ba(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(Uo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ee!==null&&(Hl(Ee),Ee=null))),Wl(t,e),Xt(e),null;case 5:Ea(e);var s=Ar(vo.current);if(r=e.type,t!==null&&e.stateNode!=null)Nu(t,e,r,o,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!o){if(e.stateNode===null)throw Error($(166));return Xt(e),null}if(t=Ar(He.current),Uo(e)){o=e.stateNode,r=e.type;var i=e.memoizedProps;switch(o[Oe]=e,o[fo]=i,t=(e.mode&1)!==0,r){case"dialog":Dt("cancel",o),Dt("close",o);break;case"iframe":case"object":case"embed":Dt("load",o);break;case"video":case"audio":for(s=0;s<Gn.length;s++)Dt(Gn[s],o);break;case"source":Dt("error",o);break;case"img":case"image":case"link":Dt("error",o),Dt("load",o);break;case"details":Dt("toggle",o);break;case"input":cd(o,i),Dt("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},Dt("invalid",o);break;case"textarea":bd(o,i),Dt("invalid",o)}al(r,i),s=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?o.textContent!==a&&(i.suppressHydrationWarning!==!0&&Go(o.textContent,a,t),s=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Go(o.textContent,a,t),s=["children",""+a]):so.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Dt("scroll",o)}switch(r){case"input":Mo(o),ud(o,i,!0);break;case"textarea":Mo(o),pd(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=Bs)}o=s,e.updateQueue=o,o!==null&&(e.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=mc(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof o.is=="string"?t=l.createElement(r,{is:o.is}):(t=l.createElement(r),r==="select"&&(l=t,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):t=l.createElementNS(t,r),t[Oe]=e,t[fo]=o,Pu(t,e,!1,!1),e.stateNode=t;t:{switch(l=dl(r,o),r){case"dialog":Dt("cancel",t),Dt("close",t),s=o;break;case"iframe":case"object":case"embed":Dt("load",t),s=o;break;case"video":case"audio":for(s=0;s<Gn.length;s++)Dt(Gn[s],t);s=o;break;case"source":Dt("error",t),s=o;break;case"img":case"image":case"link":Dt("error",t),Dt("load",t),s=o;break;case"details":Dt("toggle",t),s=o;break;case"input":cd(t,o),s=nl(t,o),Dt("invalid",t);break;case"option":s=o;break;case"select":t._wrapperState={wasMultiple:!!o.multiple},s=_t({},o,{value:void 0}),Dt("invalid",t);break;case"textarea":bd(t,o),s=il(t,o),Dt("invalid",t);break;default:s=o}al(r,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var d=a[i];i==="style"?vc(t,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&fc(t,d)):i==="children"?typeof d=="string"?(r!=="textarea"||d!=="")&&io(t,d):typeof d=="number"&&io(t,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(so.hasOwnProperty(i)?d!=null&&i==="onScroll"&&Dt("scroll",t):d!=null&&ia(t,i,d,l))}switch(r){case"input":Mo(t),ud(t,o,!1);break;case"textarea":Mo(t),pd(t);break;case"option":o.value!=null&&t.setAttribute("value",""+kr(o.value));break;case"select":t.multiple=!!o.multiple,i=o.value,i!=null?cn(t,!!o.multiple,i,!1):o.defaultValue!=null&&cn(t,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Bs)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}}o&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)Ou(t,e,t.memoizedProps,o);else{if(typeof o!="string"&&e.stateNode===null)throw Error($(166));if(r=Ar(vo.current),Ar(He.current),Uo(e)){if(o=e.stateNode,r=e.memoizedProps,o[Oe]=e,(i=o.nodeValue!==r)&&(t=ue,t!==null))switch(t.tag){case 3:Go(o.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Go(o.nodeValue,r,(t.mode&1)!==0)}i&&(e.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[Oe]=e,e.stateNode=o}return Xt(e),null;case 13:if(Rt(Wt),o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ft&&ce!==null&&e.mode&1&&!(e.flags&128))su(),yn(),e.flags|=98560,i=!1;else if(i=Uo(e),o!==null&&o.dehydrated!==null){if(t===null){if(!i)throw Error($(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error($(317));i[Oe]=e}else yn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),i=!1}else Ee!==null&&(Hl(Ee),Ee=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(o=o!==null,o!==(t!==null&&t.memoizedState!==null)&&o&&(e.child.flags|=8192,e.mode&1&&(t===null||Wt.current&1?Ht===0&&(Ht=3):$a())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return kn(),Wl(t,e),t===null&&po(e.stateNode.containerInfo),Xt(e),null;case 10:return Ca(e.type._context),Xt(e),null;case 17:return le(e.type)&&Ds(),Xt(e),null;case 19:if(Rt(Wt),i=e.memoizedState,i===null)return Xt(e),null;if(o=(e.flags&128)!==0,l=i.rendering,l===null)if(o)Ln(i,!1);else{if(Ht!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=Ls(t),l!==null){for(e.flags|=128,Ln(i,!1),o=l.updateQueue,o!==null&&(e.updateQueue=o,e.flags|=4),e.subtreeFlags=0,o=r,r=e.child;r!==null;)i=r,t=o,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,t=l.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return Et(Wt,Wt.current&1|2),e.child}t=t.sibling}i.tail!==null&&Pt()>jn&&(e.flags|=128,o=!0,Ln(i,!1),e.lanes=4194304)}else{if(!o)if(t=Ls(l),t!==null){if(e.flags|=128,o=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),Ln(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Ft)return Xt(e),null}else 2*Pt()-i.renderingStartTime>jn&&r!==1073741824&&(e.flags|=128,o=!0,Ln(i,!1),e.lanes=4194304);i.isBackwards?(l.sibling=e.child,e.child=l):(r=i.last,r!==null?r.sibling=l:e.child=l,i.last=l)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Pt(),e.sibling=null,r=Wt.current,Et(Wt,o?r&1|2:r&1),e):(Xt(e),null);case 22:case 23:return Oa(),o=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==o&&(e.flags|=8192),o&&e.mode&1?ge&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function Mm(t,e){switch(ka(e),e.tag){case 1:return le(e.type)&&Ds(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return kn(),Rt(ie),Rt(Zt),Ba(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ea(e),null;case 13:if(Rt(Wt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));yn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Rt(Wt),null;case 4:return kn(),null;case 10:return Ca(e.type._context),null;case 22:case 23:return Oa(),null;case 24:return null;default:return null}}var Qo=!1,Jt=!1,_m=typeof WeakSet=="function"?WeakSet:Set,et=null;function an(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){Lt(t,e,o)}else r.current=null}function Ml(t,e,r){try{r()}catch(o){Lt(t,e,o)}}var ng=!1;function Lm(t,e){if(yl=zs,t=Vc(),ya(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var s=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break t}var l=0,a=-1,d=-1,g=0,m=0,h=t,p=null;e:for(;;){for(var w;h!==r||s!==0&&h.nodeType!==3||(a=l+s),h!==i||o!==0&&h.nodeType!==3||(d=l+o),h.nodeType===3&&(l+=h.nodeValue.length),(w=h.firstChild)!==null;)p=h,h=w;for(;;){if(h===t)break e;if(p===r&&++g===s&&(a=l),p===i&&++m===o&&(d=l),(w=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=w}r=a===-1||d===-1?null:{start:a,end:d}}else r=null}r=r||{start:0,end:0}}else r=null;for(xl={focusedElem:t,selectionRange:r},zs=!1,et=e;et!==null;)if(e=et,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,et=t;else for(;et!==null;){e=et;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var j=y.memoizedProps,T=y.memoizedState,b=e.stateNode,c=b.getSnapshotBeforeUpdate(e.elementType===e.type?j:ze(e.type,j),T);b.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var u=e.stateNode.containerInfo;u.nodeType===1?u.textContent="":u.nodeType===9&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(k){Lt(e,e.return,k)}if(t=e.sibling,t!==null){t.return=e.return,et=t;break}et=e.return}return y=ng,ng=!1,y}function to(t,e,r){var o=e.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Ml(e,r,i)}s=s.next}while(s!==o)}}function ni(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var o=r.create;r.destroy=o()}r=r.next}while(r!==e)}}function _l(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function $u(t){var e=t.alternate;e!==null&&(t.alternate=null,$u(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Oe],delete e[fo],delete e[jl],delete e[xm],delete e[km])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Hu(t){return t.tag===5||t.tag===3||t.tag===4}function og(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Hu(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ll(t,e,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=Bs));else if(o!==4&&(t=t.child,t!==null))for(Ll(t,e,r),t=t.sibling;t!==null;)Ll(t,e,r),t=t.sibling}function Pl(t,e,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(o!==4&&(t=t.child,t!==null))for(Pl(t,e,r),t=t.sibling;t!==null;)Pl(t,e,r),t=t.sibling}var Vt=null,Te=!1;function ir(t,e,r){for(r=r.child;r!==null;)Gu(t,e,r),r=r.sibling}function Gu(t,e,r){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(Ks,r)}catch{}switch(r.tag){case 5:Jt||an(r,e);case 6:var o=Vt,s=Te;Vt=null,ir(t,e,r),Vt=o,Te=s,Vt!==null&&(Te?(t=Vt,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Vt.removeChild(r.stateNode));break;case 18:Vt!==null&&(Te?(t=Vt,r=r.stateNode,t.nodeType===8?Ii(t.parentNode,r):t.nodeType===1&&Ii(t,r),co(t)):Ii(Vt,r.stateNode));break;case 4:o=Vt,s=Te,Vt=r.stateNode.containerInfo,Te=!0,ir(t,e,r),Vt=o,Te=s;break;case 0:case 11:case 14:case 15:if(!Jt&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var i=s,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Ml(r,e,l),s=s.next}while(s!==o)}ir(t,e,r);break;case 1:if(!Jt&&(an(r,e),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(a){Lt(r,e,a)}ir(t,e,r);break;case 21:ir(t,e,r);break;case 22:r.mode&1?(Jt=(o=Jt)||r.memoizedState!==null,ir(t,e,r),Jt=o):ir(t,e,r);break;default:ir(t,e,r)}}function sg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new _m),e.forEach(function(o){var s=Ym.bind(null,t,o);r.has(o)||(r.add(o),o.then(s,s))})}}function Ce(t,e){var r=e.deletions;if(r!==null)for(var o=0;o<r.length;o++){var s=r[o];try{var i=t,l=e,a=l;t:for(;a!==null;){switch(a.tag){case 5:Vt=a.stateNode,Te=!1;break t;case 3:Vt=a.stateNode.containerInfo,Te=!0;break t;case 4:Vt=a.stateNode.containerInfo,Te=!0;break t}a=a.return}if(Vt===null)throw Error($(160));Gu(i,l,s),Vt=null,Te=!1;var d=s.alternate;d!==null&&(d.return=null),s.return=null}catch(g){Lt(s,e,g)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Uu(e,t),e=e.sibling}function Uu(t,e){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ce(e,t),Ae(t),o&4){try{to(3,t,t.return),ni(3,t)}catch(j){Lt(t,t.return,j)}try{to(5,t,t.return)}catch(j){Lt(t,t.return,j)}}break;case 1:Ce(e,t),Ae(t),o&512&&r!==null&&an(r,r.return);break;case 5:if(Ce(e,t),Ae(t),o&512&&r!==null&&an(r,r.return),t.flags&32){var s=t.stateNode;try{io(s,"")}catch(j){Lt(t,t.return,j)}}if(o&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,l=r!==null?r.memoizedProps:i,a=t.type,d=t.updateQueue;if(t.updateQueue=null,d!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&bc(s,i),dl(a,l);var g=dl(a,i);for(l=0;l<d.length;l+=2){var m=d[l],h=d[l+1];m==="style"?vc(s,h):m==="dangerouslySetInnerHTML"?fc(s,h):m==="children"?io(s,h):ia(s,m,h,g)}switch(a){case"input":ol(s,i);break;case"textarea":pc(s,i);break;case"select":var p=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?cn(s,!!i.multiple,w,!1):p!==!!i.multiple&&(i.defaultValue!=null?cn(s,!!i.multiple,i.defaultValue,!0):cn(s,!!i.multiple,i.multiple?[]:"",!1))}s[fo]=i}catch(j){Lt(t,t.return,j)}}break;case 6:if(Ce(e,t),Ae(t),o&4){if(t.stateNode===null)throw Error($(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(j){Lt(t,t.return,j)}}break;case 3:if(Ce(e,t),Ae(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{co(e.containerInfo)}catch(j){Lt(t,t.return,j)}break;case 4:Ce(e,t),Ae(t);break;case 13:Ce(e,t),Ae(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Pa=Pt())),o&4&&sg(t);break;case 22:if(m=r!==null&&r.memoizedState!==null,t.mode&1?(Jt=(g=Jt)||m,Ce(e,t),Jt=g):Ce(e,t),Ae(t),o&8192){if(g=t.memoizedState!==null,(t.stateNode.isHidden=g)&&!m&&t.mode&1)for(et=t,m=t.child;m!==null;){for(h=et=m;et!==null;){switch(p=et,w=p.child,p.tag){case 0:case 11:case 14:case 15:to(4,p,p.return);break;case 1:an(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){o=p,r=p.return;try{e=o,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(j){Lt(o,r,j)}}break;case 5:an(p,p.return);break;case 22:if(p.memoizedState!==null){lg(h);continue}}w!==null?(w.return=p,et=w):lg(h)}m=m.sibling}t:for(m=null,h=t;;){if(h.tag===5){if(m===null){m=h;try{s=h.stateNode,g?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,d=h.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=hc("display",l))}catch(j){Lt(t,t.return,j)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=g?"":h.memoizedProps}catch(j){Lt(t,t.return,j)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break t;for(;h.sibling===null;){if(h.return===null||h.return===t)break t;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ce(e,t),Ae(t),o&4&&sg(t);break;case 21:break;default:Ce(e,t),Ae(t)}}function Ae(t){var e=t.flags;if(e&2){try{t:{for(var r=t.return;r!==null;){if(Hu(r)){var o=r;break t}r=r.return}throw Error($(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&(io(s,""),o.flags&=-33);var i=og(t);Pl(t,i,s);break;case 3:case 4:var l=o.stateNode.containerInfo,a=og(t);Ll(t,a,l);break;default:throw Error($(161))}}catch(d){Lt(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Pm(t,e,r){et=t,Vu(t)}function Vu(t,e,r){for(var o=(t.mode&1)!==0;et!==null;){var s=et,i=s.child;if(s.tag===22&&o){var l=s.memoizedState!==null||Qo;if(!l){var a=s.alternate,d=a!==null&&a.memoizedState!==null||Jt;a=Qo;var g=Jt;if(Qo=l,(Jt=d)&&!g)for(et=s;et!==null;)l=et,d=l.child,l.tag===22&&l.memoizedState!==null?ag(s):d!==null?(d.return=l,et=d):ag(s);for(;i!==null;)et=i,Vu(i),i=i.sibling;et=s,Qo=a,Jt=g}ig(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,et=i):ig(t)}}function ig(t){for(;et!==null;){var e=et;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||ni(5,e);break;case 1:var o=e.stateNode;if(e.flags&4&&!Jt)if(r===null)o.componentDidMount();else{var s=e.elementType===e.type?r.memoizedProps:ze(e.type,r.memoizedProps);o.componentDidUpdate(s,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Gd(e,i,o);break;case 3:var l=e.updateQueue;if(l!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}Gd(e,l,r)}break;case 5:var a=e.stateNode;if(r===null&&e.flags&4){r=a;var d=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&r.focus();break;case"img":d.src&&(r.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var g=e.alternate;if(g!==null){var m=g.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&co(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}Jt||e.flags&512&&_l(e)}catch(p){Lt(e,e.return,p)}}if(e===t){et=null;break}if(r=e.sibling,r!==null){r.return=e.return,et=r;break}et=e.return}}function lg(t){for(;et!==null;){var e=et;if(e===t){et=null;break}var r=e.sibling;if(r!==null){r.return=e.return,et=r;break}et=e.return}}function ag(t){for(;et!==null;){var e=et;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{ni(4,e)}catch(d){Lt(e,r,d)}break;case 1:var o=e.stateNode;if(typeof o.componentDidMount=="function"){var s=e.return;try{o.componentDidMount()}catch(d){Lt(e,s,d)}}var i=e.return;try{_l(e)}catch(d){Lt(e,i,d)}break;case 5:var l=e.return;try{_l(e)}catch(d){Lt(e,l,d)}}}catch(d){Lt(e,e.return,d)}if(e===t){et=null;break}var a=e.sibling;if(a!==null){a.return=e.return,et=a;break}et=e.return}}var Nm=Math.ceil,Os=rr.ReactCurrentDispatcher,_a=rr.ReactCurrentOwner,xe=rr.ReactCurrentBatchConfig,kt=0,Ut=null,Ot=null,Yt=0,ge=0,dn=Sr(0),Ht=0,wo=null,Or=0,oi=0,La=0,eo=null,oe=null,Pa=0,jn=1/0,Ve=null,$s=!1,Nl=null,vr=null,Ko=!1,ur=null,Hs=0,ro=0,Ol=null,hs=-1,vs=0;function te(){return kt&6?Pt():hs!==-1?hs:hs=Pt()}function yr(t){return t.mode&1?kt&2&&Yt!==0?Yt&-Yt:jm.transition!==null?(vs===0&&(vs=Bc()),vs):(t=Ct,t!==0||(t=window.event,t=t===void 0?16:_c(t.type)),t):1}function De(t,e,r,o){if(50<ro)throw ro=0,Ol=null,Error($(185));Io(t,r,o),(!(kt&2)||t!==Ut)&&(t===Ut&&(!(kt&2)&&(oi|=r),Ht===4&&gr(t,Yt)),ae(t,o),r===1&&kt===0&&!(e.mode&1)&&(jn=Pt()+500,ti&&Cr()))}function ae(t,e){var r=t.callbackNode;jp(t,e);var o=Is(t,t===Ut?Yt:0);if(o===0)r!==null&&hd(r),t.callbackNode=null,t.callbackPriority=0;else if(e=o&-o,t.callbackPriority!==e){if(r!=null&&hd(r),e===1)t.tag===0?wm(dg.bind(null,t)):ru(dg.bind(null,t)),vm(function(){!(kt&6)&&Cr()}),r=null;else{switch(Dc(o)){case 1:r=ca;break;case 4:r=Tc;break;case 16:r=Cs;break;case 536870912:r=Ec;break;default:r=Cs}r=tb(r,Yu.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function Yu(t,e){if(hs=-1,vs=0,kt&6)throw Error($(327));var r=t.callbackNode;if(fn()&&t.callbackNode!==r)return null;var o=Is(t,t===Ut?Yt:0);if(o===0)return null;if(o&30||o&t.expiredLanes||e)e=Gs(t,o);else{e=o;var s=kt;kt|=2;var i=Ku();(Ut!==t||Yt!==e)&&(Ve=null,jn=Pt()+500,Mr(t,e));do try{Hm();break}catch(a){Qu(t,a)}while(!0);Sa(),Os.current=i,kt=s,Ot!==null?e=0:(Ut=null,Yt=0,e=Ht)}if(e!==0){if(e===2&&(s=pl(t),s!==0&&(o=s,e=$l(t,s))),e===1)throw r=wo,Mr(t,0),gr(t,o),ae(t,Pt()),r;if(e===6)gr(t,o);else{if(s=t.current.alternate,!(o&30)&&!Om(s)&&(e=Gs(t,o),e===2&&(i=pl(t),i!==0&&(o=i,e=$l(t,i))),e===1))throw r=wo,Mr(t,0),gr(t,o),ae(t,Pt()),r;switch(t.finishedWork=s,t.finishedLanes=o,e){case 0:case 1:throw Error($(345));case 2:Er(t,oe,Ve);break;case 3:if(gr(t,o),(o&130023424)===o&&(e=Pa+500-Pt(),10<e)){if(Is(t,0)!==0)break;if(s=t.suspendedLanes,(s&o)!==o){te(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=wl(Er.bind(null,t,oe,Ve),e);break}Er(t,oe,Ve);break;case 4:if(gr(t,o),(o&4194240)===o)break;for(e=t.eventTimes,s=-1;0<o;){var l=31-Be(o);i=1<<l,l=e[l],l>s&&(s=l),o&=~i}if(o=s,o=Pt()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Nm(o/1960))-o,10<o){t.timeoutHandle=wl(Er.bind(null,t,oe,Ve),o);break}Er(t,oe,Ve);break;case 5:Er(t,oe,Ve);break;default:throw Error($(329))}}}return ae(t,Pt()),t.callbackNode===r?Yu.bind(null,t):null}function $l(t,e){var r=eo;return t.current.memoizedState.isDehydrated&&(Mr(t,e).flags|=256),t=Gs(t,e),t!==2&&(e=oe,oe=r,e!==null&&Hl(e)),t}function Hl(t){oe===null?oe=t:oe.push.apply(oe,t)}function Om(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var s=r[o],i=s.getSnapshot;s=s.value;try{if(!Re(i(),s))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gr(t,e){for(e&=~La,e&=~oi,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-Be(e),o=1<<r;t[r]=-1,e&=~o}}function dg(t){if(kt&6)throw Error($(327));fn();var e=Is(t,0);if(!(e&1))return ae(t,Pt()),null;var r=Gs(t,e);if(t.tag!==0&&r===2){var o=pl(t);o!==0&&(e=o,r=$l(t,o))}if(r===1)throw r=wo,Mr(t,0),gr(t,e),ae(t,Pt()),r;if(r===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Er(t,oe,Ve),ae(t,Pt()),null}function Na(t,e){var r=kt;kt|=1;try{return t(e)}finally{kt=r,kt===0&&(jn=Pt()+500,ti&&Cr())}}function $r(t){ur!==null&&ur.tag===0&&!(kt&6)&&fn();var e=kt;kt|=1;var r=xe.transition,o=Ct;try{if(xe.transition=null,Ct=1,t)return t()}finally{Ct=o,xe.transition=r,kt=e,!(kt&6)&&Cr()}}function Oa(){ge=dn.current,Rt(dn)}function Mr(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,hm(r)),Ot!==null)for(r=Ot.return;r!==null;){var o=r;switch(ka(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Ds();break;case 3:kn(),Rt(ie),Rt(Zt),Ba();break;case 5:Ea(o);break;case 4:kn();break;case 13:Rt(Wt);break;case 19:Rt(Wt);break;case 10:Ca(o.type._context);break;case 22:case 23:Oa()}r=r.return}if(Ut=t,Ot=t=xr(t.current,null),Yt=ge=e,Ht=0,wo=null,La=oi=Or=0,oe=eo=null,Fr!==null){for(e=0;e<Fr.length;e++)if(r=Fr[e],o=r.interleaved,o!==null){r.interleaved=null;var s=o.next,i=r.pending;if(i!==null){var l=i.next;i.next=s,o.next=l}r.pending=o}Fr=null}return t}function Qu(t,e){do{var r=Ot;try{if(Sa(),ps.current=Ns,Ps){for(var o=Mt.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}Ps=!1}if(Nr=0,Gt=$t=Mt=null,qn=!1,yo=0,_a.current=null,r===null||r.return===null){Ht=1,wo=e,Ot=null;break}t:{var i=t,l=r.return,a=r,d=e;if(e=Yt,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var g=d,m=a,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var w=Xd(l);if(w!==null){w.flags&=-257,Jd(w,l,a,i,e),w.mode&1&&Kd(i,g,e),e=w,d=g;var y=e.updateQueue;if(y===null){var j=new Set;j.add(d),e.updateQueue=j}else y.add(d);break t}else{if(!(e&1)){Kd(i,g,e),$a();break t}d=Error($(426))}}else if(Ft&&a.mode&1){var T=Xd(l);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Jd(T,l,a,i,e),wa(wn(d,a));break t}}i=d=wn(d,a),Ht!==4&&(Ht=2),eo===null?eo=[i]:eo.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var b=Du(i,d,e);Hd(i,b);break t;case 1:a=d;var c=i.type,u=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(vr===null||!vr.has(u)))){i.flags|=65536,e&=-e,i.lanes|=e;var k=Ru(i,a,e);Hd(i,k);break t}}i=i.return}while(i!==null)}Ju(r)}catch(x){e=x,Ot===r&&r!==null&&(Ot=r=r.return);continue}break}while(!0)}function Ku(){var t=Os.current;return Os.current=Ns,t===null?Ns:t}function $a(){(Ht===0||Ht===3||Ht===2)&&(Ht=4),Ut===null||!(Or&268435455)&&!(oi&268435455)||gr(Ut,Yt)}function Gs(t,e){var r=kt;kt|=2;var o=Ku();(Ut!==t||Yt!==e)&&(Ve=null,Mr(t,e));do try{$m();break}catch(s){Qu(t,s)}while(!0);if(Sa(),kt=r,Os.current=o,Ot!==null)throw Error($(261));return Ut=null,Yt=0,Ht}function $m(){for(;Ot!==null;)Xu(Ot)}function Hm(){for(;Ot!==null&&!pp();)Xu(Ot)}function Xu(t){var e=qu(t.alternate,t,ge);t.memoizedProps=t.pendingProps,e===null?Ju(t):Ot=e,_a.current=null}function Ju(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=Mm(r,e),r!==null){r.flags&=32767,Ot=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ht=6,Ot=null;return}}else if(r=Wm(r,e,ge),r!==null){Ot=r;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=t}while(e!==null);Ht===0&&(Ht=5)}function Er(t,e,r){var o=Ct,s=xe.transition;try{xe.transition=null,Ct=1,Gm(t,e,r,o)}finally{xe.transition=s,Ct=o}return null}function Gm(t,e,r,o){do fn();while(ur!==null);if(kt&6)throw Error($(327));r=t.finishedWork;var s=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var i=r.lanes|r.childLanes;if(Sp(t,i),t===Ut&&(Ot=Ut=null,Yt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Ko||(Ko=!0,tb(Cs,function(){return fn(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=xe.transition,xe.transition=null;var l=Ct;Ct=1;var a=kt;kt|=4,_a.current=null,Lm(t,r),Uu(r,t),gm(xl),zs=!!yl,xl=yl=null,t.current=r,Pm(r),mp(),kt=a,Ct=l,xe.transition=i}else t.current=r;if(Ko&&(Ko=!1,ur=t,Hs=s),i=t.pendingLanes,i===0&&(vr=null),vp(r.stateNode),ae(t,Pt()),e!==null)for(o=t.onRecoverableError,r=0;r<e.length;r++)s=e[r],o(s.value,{componentStack:s.stack,digest:s.digest});if($s)throw $s=!1,t=Nl,Nl=null,t;return Hs&1&&t.tag!==0&&fn(),i=t.pendingLanes,i&1?t===Ol?ro++:(ro=0,Ol=t):ro=0,Cr(),null}function fn(){if(ur!==null){var t=Dc(Hs),e=xe.transition,r=Ct;try{if(xe.transition=null,Ct=16>t?16:t,ur===null)var o=!1;else{if(t=ur,ur=null,Hs=0,kt&6)throw Error($(331));var s=kt;for(kt|=4,et=t.current;et!==null;){var i=et,l=i.child;if(et.flags&16){var a=i.deletions;if(a!==null){for(var d=0;d<a.length;d++){var g=a[d];for(et=g;et!==null;){var m=et;switch(m.tag){case 0:case 11:case 15:to(8,m,i)}var h=m.child;if(h!==null)h.return=m,et=h;else for(;et!==null;){m=et;var p=m.sibling,w=m.return;if($u(m),m===g){et=null;break}if(p!==null){p.return=w,et=p;break}et=w}}}var y=i.alternate;if(y!==null){var j=y.child;if(j!==null){y.child=null;do{var T=j.sibling;j.sibling=null,j=T}while(j!==null)}}et=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,et=l;else t:for(;et!==null;){if(i=et,i.flags&2048)switch(i.tag){case 0:case 11:case 15:to(9,i,i.return)}var b=i.sibling;if(b!==null){b.return=i.return,et=b;break t}et=i.return}}var c=t.current;for(et=c;et!==null;){l=et;var u=l.child;if(l.subtreeFlags&2064&&u!==null)u.return=l,et=u;else t:for(l=c;et!==null;){if(a=et,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ni(9,a)}}catch(x){Lt(a,a.return,x)}if(a===l){et=null;break t}var k=a.sibling;if(k!==null){k.return=a.return,et=k;break t}et=a.return}}if(kt=s,Cr(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(Ks,t)}catch{}o=!0}return o}finally{Ct=r,xe.transition=e}}return!1}function gg(t,e,r){e=wn(r,e),e=Du(t,e,1),t=hr(t,e,1),e=te(),t!==null&&(Io(t,1,e),ae(t,e))}function Lt(t,e,r){if(t.tag===3)gg(t,t,r);else for(;e!==null;){if(e.tag===3){gg(e,t,r);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(vr===null||!vr.has(o))){t=wn(r,t),t=Ru(e,t,1),e=hr(e,t,1),t=te(),e!==null&&(Io(e,1,t),ae(e,t));break}}e=e.return}}function Um(t,e,r){var o=t.pingCache;o!==null&&o.delete(e),e=te(),t.pingedLanes|=t.suspendedLanes&r,Ut===t&&(Yt&r)===r&&(Ht===4||Ht===3&&(Yt&130023424)===Yt&&500>Pt()-Pa?Mr(t,0):La|=r),ae(t,e)}function Zu(t,e){e===0&&(t.mode&1?(e=Po,Po<<=1,!(Po&130023424)&&(Po=4194304)):e=1);var r=te();t=tr(t,e),t!==null&&(Io(t,e,r),ae(t,r))}function Vm(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),Zu(t,r)}function Ym(t,e){var r=0;switch(t.tag){case 13:var o=t.stateNode,s=t.memoizedState;s!==null&&(r=s.retryLane);break;case 19:o=t.stateNode;break;default:throw Error($(314))}o!==null&&o.delete(e),Zu(t,r)}var qu;qu=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||ie.current)se=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return se=!1,Am(t,e,r);se=!!(t.flags&131072)}else se=!1,Ft&&e.flags&1048576&&nu(e,As,e.index);switch(e.lanes=0,e.tag){case 2:var o=e.type;fs(t,e),t=e.pendingProps;var s=vn(e,Zt.current);mn(e,r),s=Ra(null,e,o,t,s,r);var i=Fa();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,le(o)?(i=!0,Rs(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,za(e),s.updater=ri,e.stateNode=s,s._reactInternals=e,El(e,o,t,r),e=Rl(null,e,o,!0,i,r)):(e.tag=0,Ft&&i&&xa(e),qt(null,e,s,r),e=e.child),e;case 16:o=e.elementType;t:{switch(fs(t,e),t=e.pendingProps,s=o._init,o=s(o._payload),e.type=o,s=e.tag=Km(o),t=ze(o,t),s){case 0:e=Dl(null,e,o,t,r);break t;case 1:e=tg(null,e,o,t,r);break t;case 11:e=Zd(null,e,o,t,r);break t;case 14:e=qd(null,e,o,ze(o.type,t),r);break t}throw Error($(306,o,""))}return e;case 0:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:ze(o,s),Dl(t,e,o,s,r);case 1:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:ze(o,s),tg(t,e,o,s,r);case 3:t:{if(Mu(e),t===null)throw Error($(387));o=e.pendingProps,i=e.memoizedState,s=i.element,du(t,e),_s(e,o,null,r);var l=e.memoizedState;if(o=l.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=wn(Error($(423)),e),e=eg(t,e,o,r,s);break t}else if(o!==s){s=wn(Error($(424)),e),e=eg(t,e,o,r,s);break t}else for(ce=fr(e.stateNode.containerInfo.firstChild),ue=e,Ft=!0,Ee=null,r=lu(e,null,o,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(yn(),o===s){e=er(t,e,r);break t}qt(t,e,o,r)}e=e.child}return e;case 5:return gu(e),t===null&&Il(e),o=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,l=s.children,kl(o,s)?l=null:i!==null&&kl(o,i)&&(e.flags|=32),Wu(t,e),qt(t,e,l,r),e.child;case 6:return t===null&&Il(e),null;case 13:return _u(t,e,r);case 4:return Ta(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=xn(e,null,o,r):qt(t,e,o,r),e.child;case 11:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:ze(o,s),Zd(t,e,o,s,r);case 7:return qt(t,e,e.pendingProps,r),e.child;case 8:return qt(t,e,e.pendingProps.children,r),e.child;case 12:return qt(t,e,e.pendingProps.children,r),e.child;case 10:t:{if(o=e.type._context,s=e.pendingProps,i=e.memoizedProps,l=s.value,Et(Ws,o._currentValue),o._currentValue=l,i!==null)if(Re(i.value,l)){if(i.children===s.children&&!ie.current){e=er(t,e,r);break t}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var d=a.firstContext;d!==null;){if(d.context===o){if(i.tag===1){d=Je(-1,r&-r),d.tag=2;var g=i.updateQueue;if(g!==null){g=g.shared;var m=g.pending;m===null?d.next=d:(d.next=m.next,m.next=d),g.pending=d}}i.lanes|=r,d=i.alternate,d!==null&&(d.lanes|=r),zl(i.return,r,e),a.lanes|=r;break}d=d.next}}else if(i.tag===10)l=i.type===e.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error($(341));l.lanes|=r,a=l.alternate,a!==null&&(a.lanes|=r),zl(l,r,e),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===e){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}qt(t,e,s.children,r),e=e.child}return e;case 9:return s=e.type,o=e.pendingProps.children,mn(e,r),s=ke(s),o=o(s),e.flags|=1,qt(t,e,o,r),e.child;case 14:return o=e.type,s=ze(o,e.pendingProps),s=ze(o.type,s),qd(t,e,o,s,r);case 15:return Fu(t,e,e.type,e.pendingProps,r);case 17:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:ze(o,s),fs(t,e),e.tag=1,le(o)?(t=!0,Rs(e)):t=!1,mn(e,r),Bu(e,o,s),El(e,o,s,r),Rl(null,e,o,!0,t,r);case 19:return Lu(t,e,r);case 22:return Au(t,e,r)}throw Error($(156,e.tag))};function tb(t,e){return zc(t,e)}function Qm(t,e,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ve(t,e,r,o){return new Qm(t,e,r,o)}function Ha(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Km(t){if(typeof t=="function")return Ha(t)?1:0;if(t!=null){if(t=t.$$typeof,t===aa)return 11;if(t===da)return 14}return 2}function xr(t,e){var r=t.alternate;return r===null?(r=ve(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function ys(t,e,r,o,s,i){var l=2;if(o=t,typeof t=="function")Ha(t)&&(l=1);else if(typeof t=="string")l=5;else t:switch(t){case Zr:return _r(r.children,s,i,e);case la:l=8,s|=8;break;case qi:return t=ve(12,r,e,s|2),t.elementType=qi,t.lanes=i,t;case tl:return t=ve(13,r,e,s),t.elementType=tl,t.lanes=i,t;case el:return t=ve(19,r,e,s),t.elementType=el,t.lanes=i,t;case gc:return si(r,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ac:l=10;break t;case dc:l=9;break t;case aa:l=11;break t;case da:l=14;break t;case lr:l=16,o=null;break t}throw Error($(130,t==null?t:typeof t,""))}return e=ve(l,r,e,s),e.elementType=t,e.type=o,e.lanes=i,e}function _r(t,e,r,o){return t=ve(7,t,o,e),t.lanes=r,t}function si(t,e,r,o){return t=ve(22,t,o,e),t.elementType=gc,t.lanes=r,t.stateNode={isHidden:!1},t}function Ai(t,e,r){return t=ve(6,t,null,e),t.lanes=r,t}function Wi(t,e,r){return e=ve(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Xm(t,e,r,o,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mi(0),this.expirationTimes=mi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mi(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Ga(t,e,r,o,s,i,l,a,d){return t=new Xm(t,e,r,a,d),e===1?(e=1,i===!0&&(e|=8)):e=0,i=ve(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},za(i),t}function Jm(t,e,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jr,key:o==null?null:""+o,children:t,containerInfo:e,implementation:r}}function eb(t){if(!t)return wr;t=t._reactInternals;t:{if(Vr(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break t;case 1:if(le(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break t}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var r=t.type;if(le(r))return eu(t,r,e)}return e}function rb(t,e,r,o,s,i,l,a,d){return t=Ga(r,o,!0,t,s,i,l,a,d),t.context=eb(null),r=t.current,o=te(),s=yr(r),i=Je(o,s),i.callback=e??null,hr(r,i,s),t.current.lanes=s,Io(t,s,o),ae(t,o),t}function ii(t,e,r,o){var s=e.current,i=te(),l=yr(s);return r=eb(r),e.context===null?e.context=r:e.pendingContext=r,e=Je(i,l),e.payload={element:t},o=o===void 0?null:o,o!==null&&(e.callback=o),t=hr(s,e,l),t!==null&&(De(t,s,l,i),bs(t,s,l)),l}function Us(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function cg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function Ua(t,e){cg(t,e),(t=t.alternate)&&cg(t,e)}function Zm(){return null}var nb=typeof reportError=="function"?reportError:function(t){console.error(t)};function Va(t){this._internalRoot=t}li.prototype.render=Va.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));ii(t,e,null,null)};li.prototype.unmount=Va.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$r(function(){ii(null,t,null,null)}),e[qe]=null}};function li(t){this._internalRoot=t}li.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ac();t={blockedOn:null,target:t,priority:e};for(var r=0;r<dr.length&&e!==0&&e<dr[r].priority;r++);dr.splice(r,0,t),r===0&&Mc(t)}};function Ya(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ai(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ug(){}function qm(t,e,r,o,s){if(s){if(typeof o=="function"){var i=o;o=function(){var g=Us(l);i.call(g)}}var l=rb(e,o,t,0,null,!1,!1,"",ug);return t._reactRootContainer=l,t[qe]=l.current,po(t.nodeType===8?t.parentNode:t),$r(),l}for(;s=t.lastChild;)t.removeChild(s);if(typeof o=="function"){var a=o;o=function(){var g=Us(d);a.call(g)}}var d=Ga(t,0,!1,null,null,!1,!1,"",ug);return t._reactRootContainer=d,t[qe]=d.current,po(t.nodeType===8?t.parentNode:t),$r(function(){ii(e,d,r,o)}),d}function di(t,e,r,o,s){var i=r._reactRootContainer;if(i){var l=i;if(typeof s=="function"){var a=s;s=function(){var d=Us(l);a.call(d)}}ii(e,l,t,s)}else l=qm(r,e,t,s,o);return Us(l)}Rc=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Hn(e.pendingLanes);r!==0&&(ua(e,r|1),ae(e,Pt()),!(kt&6)&&(jn=Pt()+500,Cr()))}break;case 13:$r(function(){var o=tr(t,1);if(o!==null){var s=te();De(o,t,1,s)}}),Ua(t,1)}};ba=function(t){if(t.tag===13){var e=tr(t,134217728);if(e!==null){var r=te();De(e,t,134217728,r)}Ua(t,134217728)}};Fc=function(t){if(t.tag===13){var e=yr(t),r=tr(t,e);if(r!==null){var o=te();De(r,t,e,o)}Ua(t,e)}};Ac=function(){return Ct};Wc=function(t,e){var r=Ct;try{return Ct=t,e()}finally{Ct=r}};cl=function(t,e,r){switch(e){case"input":if(ol(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var o=r[e];if(o!==t&&o.form===t.form){var s=qs(o);if(!s)throw Error($(90));uc(o),ol(o,s)}}}break;case"textarea":pc(t,r);break;case"select":e=r.value,e!=null&&cn(t,!!r.multiple,e,!1)}};kc=Na;wc=$r;var tf={usingClientEntryPoint:!1,Events:[To,rn,qs,yc,xc,Na]},Pn={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ef={bundleType:Pn.bundleType,version:Pn.version,rendererPackageName:Pn.rendererPackageName,rendererConfig:Pn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Cc(t),t===null?null:t.stateNode},findFiberByHostInstance:Pn.findFiberByHostInstance||Zm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xo.isDisabled&&Xo.supportsFiber)try{Ks=Xo.inject(ef),$e=Xo}catch{}}pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tf;pe.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ya(e))throw Error($(200));return Jm(t,e,null,r)};pe.createRoot=function(t,e){if(!Ya(t))throw Error($(299));var r=!1,o="",s=nb;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Ga(t,1,!1,null,null,r,!1,o,s),t[qe]=e.current,po(t.nodeType===8?t.parentNode:t),new Va(e)};pe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=Cc(e),t=t===null?null:t.stateNode,t};pe.flushSync=function(t){return $r(t)};pe.hydrate=function(t,e,r){if(!ai(e))throw Error($(200));return di(null,t,e,!0,r)};pe.hydrateRoot=function(t,e,r){if(!Ya(t))throw Error($(405));var o=r!=null&&r.hydratedSources||null,s=!1,i="",l=nb;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),e=rb(e,null,t,1,r??null,s,!1,i,l),t[qe]=e.current,po(t),o)for(t=0;t<o.length;t++)r=o[t],s=r._getVersion,s=s(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,s]:e.mutableSourceEagerHydrationData.push(r,s);return new li(e)};pe.render=function(t,e,r){if(!ai(e))throw Error($(200));return di(null,t,e,!1,r)};pe.unmountComponentAtNode=function(t){if(!ai(t))throw Error($(40));return t._reactRootContainer?($r(function(){di(null,null,t,!1,function(){t._reactRootContainer=null,t[qe]=null})}),!0):!1};pe.unstable_batchedUpdates=Na;pe.unstable_renderSubtreeIntoContainer=function(t,e,r,o){if(!ai(r))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return di(t,e,r,!1,o)};pe.version="18.3.1-next-f1338f8080-20240426";function ob(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ob)}catch(t){console.error(t)}}ob(),oc.exports=pe;var rf=oc.exports,sb,bg=rf;sb=bg.createRoot,bg.hydrateRoot;/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ib=(...t)=>t.filter((e,r,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===r).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var of={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=f.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:s="",children:i,iconNode:l,...a},d)=>f.createElement("svg",{ref:d,...of,width:e,height:e,stroke:t,strokeWidth:o?Number(r)*24/Number(e):r,className:ib("lucide",s),...a},[...l.map(([g,m])=>f.createElement(g,m)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=(t,e)=>{const r=f.forwardRef(({className:o,...s},i)=>f.createElement(sf,{ref:i,iconNode:e,className:ib(`lucide-${nf(t)}`,o),...s}));return r.displayName=`${t}`,r};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=rt("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=rt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=rt("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=rt("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=rt("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=rt("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=rt("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=rt("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=rt("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=rt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=rt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=rt("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=rt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=rt("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=rt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=rt("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=rt("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=rt("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=rt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=rt("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=rt("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=rt("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=rt("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=rt("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=rt("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=rt("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=rt("Images",[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=rt("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=rt("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=rt("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=rt("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=rt("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=rt("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=rt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=rt("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=rt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=rt("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=rt("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=rt("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=rt("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=rt("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=rt("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=rt("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=rt("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=rt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=rt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=rt("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=rt("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=rt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=rt("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=rt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=rt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=rt("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=rt("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=rt("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=rt("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=rt("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=rt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=rt("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=rt("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=rt("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=rt("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=rt("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=rt("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=rt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=rt("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),qa="anvil_token",td=()=>localStorage.getItem(qa),Nf=t=>localStorage.setItem(qa,t),Yl=()=>localStorage.removeItem(qa),H=async(t,e,r)=>{const o={};r!==void 0&&(o["Content-Type"]="application/json");const s=td();s&&(o.Authorization=`Bearer ${s}`);const i=await fetch(`/api${e}`,{method:t,headers:o,body:r!==void 0?JSON.stringify(r):void 0});if(i.status===401)throw Yl(),window.dispatchEvent(new Event("anvil-unauthorized")),new Error("Not authenticated");if(i.status===204)return null;if(!i.ok){const l=await i.text();let a=l;try{a=JSON.parse(l).detail||l}catch{}throw new Error(a||`HTTP ${i.status}`)}return i.json()},O={register:t=>H("POST","/auth/register",t),login:t=>H("POST","/auth/login",t),me:()=>H("GET","/auth/me"),getGcalStatus:()=>H("GET","/auth/google/status"),connectGoogle:()=>{window.location.href=`/api/auth/google?token=${encodeURIComponent(td()||"")}`},disconnectGoogle:()=>H("DELETE","/auth/google"),getPillars:()=>H("GET","/pillars"),getFocus:()=>H("GET","/focus"),createFocus:t=>H("POST","/focus",t),deleteFocus:t=>H("DELETE",`/focus/${t}`),getDecks:()=>H("GET","/spiritual/decks"),createDeck:t=>H("POST","/spiritual/decks",t),deleteDeck:t=>H("DELETE",`/spiritual/decks/${t}`),getGoldenGoals:()=>H("GET","/golden/goals"),getGoldenGoal:t=>H("GET",`/golden/goals/${t}`),createGolden:t=>H("POST","/golden/goals",t),updateGolden:(t,e)=>H("PUT",`/golden/goals/${t}`,e),achieveGolden:t=>H("POST",`/golden/goals/${t}/achieve`),unachieveGolden:t=>H("POST",`/golden/goals/${t}/unachieve`),upsertGoldenEntry:(t,e)=>H("PUT",`/golden/goals/${t}/entry`,e),deleteGolden:t=>H("DELETE",`/golden/goals/${t}`),restoreGolden:t=>H("POST",`/golden/goals/${t}/restore`),getKickstart:()=>H("GET","/kickstart/videos"),createKickstart:t=>H("POST","/kickstart/videos",t),updateKickstart:(t,e)=>H("PUT",`/kickstart/videos/${t}`,e),deleteKickstart:t=>H("DELETE",`/kickstart/videos/${t}`),restoreKickstart:t=>H("POST",`/kickstart/videos/${t}/restore`),getTxns:()=>H("GET","/finance/txns"),createTxn:t=>H("POST","/finance/txns",t),updateTxn:(t,e)=>H("PUT",`/finance/txns/${t}`,e),deleteTxn:t=>H("DELETE",`/finance/txns/${t}`),restoreTxn:t=>H("POST",`/finance/txns/${t}/restore`),getSetting:t=>H("GET",`/settings/${t}`),setSetting:(t,e)=>H("PUT",`/settings/${t}`,{value:e}),getTasks:()=>H("GET","/tasks"),createTask:t=>H("POST","/tasks",t),updateTask:(t,e)=>H("PUT",`/tasks/${t}`,e),deleteTask:t=>H("DELETE",`/tasks/${t}`),restoreTask:t=>H("POST",`/tasks/${t}/restore`),scheduleTask:t=>H("PUT",`/tasks/${t}/schedule`),getGoals:t=>H("GET",`/goals${t?`?pillar=${encodeURIComponent(t)}`:""}`),createGoal:t=>H("POST","/goals",t),updateGoal:(t,e)=>H("PUT",`/goals/${t}`,e),deleteGoal:t=>H("DELETE",`/goals/${t}`),restoreGoal:t=>H("POST",`/goals/${t}/restore`),getHabits:()=>H("GET","/habits"),createHabit:t=>H("POST","/habits",t),updateHabit:(t,e)=>H("PUT",`/habits/${t}`,e),deleteHabit:t=>H("DELETE",`/habits/${t}`),restoreHabit:t=>H("POST",`/habits/${t}/restore`),toggleHabitLog:(t,e)=>H("POST",`/habits/${t}/log/${e}`),setHabitLogNote:(t,e,r)=>H("PUT",`/habits/${t}/log/${e}/note`,{note:r}),setHabitLogCount:(t,e,r,o)=>H("PUT",`/habits/${t}/log/${e}/count`,{count:r,note:o}),clearHabitLog:(t,e)=>H("DELETE",`/habits/${t}/log/${e}`),getHabitsYearly:t=>H("GET",`/habits/yearly/${t}`),getJournalEntry:t=>H("GET",`/journal/${t}`),getJournalHistory:(t,e)=>H("GET",`/journal/history/${t}/${e}`),updateJournalMood:(t,e)=>H("PUT",`/journal/${t}`,{mood:e}),addJournalBullet:(t,e,r)=>H("POST",`/journal/${t}/bullets`,{section:e,text:r}),deleteJournalBullet:t=>H("DELETE",`/journal/bullets/${t}`),getSkills:()=>H("GET","/skills"),createSkill:t=>H("POST","/skills",t),updateSkill:(t,e)=>H("PUT",`/skills/${t}`,e),deleteSkill:t=>H("DELETE",`/skills/${t}`),restoreSkill:t=>H("POST",`/skills/${t}/restore`),addSkillNote:(t,e,r)=>H("POST",`/skills/${t}/notes`,{stage:e,text:r}),deleteSkillNote:t=>H("DELETE",`/skill-notes/${t}`),updateSkillNote:(t,e)=>H("PUT",`/skill-notes/${t}`,{text:e}),toggleSkillNote:t=>H("PUT",`/skill-notes/${t}/toggle`),completeSkillStage:(t,e)=>H("POST",`/skills/${t}/complete-stage`,{stage:e}),getScriptures:()=>H("GET","/scriptures"),createScripture:t=>H("POST","/scriptures",t),deleteScripture:t=>H("DELETE",`/scriptures/${t}`),restoreScripture:t=>H("POST",`/scriptures/${t}/restore`),addChapter:(t,e)=>H("POST",`/scriptures/${t}/chapters`,e),updateChapter:(t,e)=>H("PUT",`/chapters/${t}`,e),deleteChapter:t=>H("DELETE",`/chapters/${t}`),restoreChapter:t=>H("POST",`/chapters/${t}/restore`),addInsight:(t,e)=>H("POST",`/chapters/${t}/insights`,{text:e}),deleteInsight:t=>H("DELETE",`/insights/${t}`),getTopics:()=>H("GET","/revision/topics"),createTopic:t=>H("POST","/revision/topics",t),updateTopic:(t,e)=>H("PUT",`/revision/topics/${t}`,e),deleteTopic:t=>H("DELETE",`/revision/topics/${t}`),restoreTopic:t=>H("POST",`/revision/topics/${t}/restore`),getDueToday:()=>H("GET","/revision/due-today"),getCalendar:(t,e)=>H("GET",`/revision/calendar/${t}/${e}`),toggleReviewDone:t=>H("PUT",`/revision/reviews/${t}/done`),getAffirmations:()=>H("GET","/affirmations"),createAffirmation:t=>H("POST","/affirmations",t),updateAffirmation:(t,e)=>H("PUT",`/affirmations/${t}`,e),deleteAffirmation:t=>H("DELETE",`/affirmations/${t}`),restoreAffirmation:t=>H("POST",`/affirmations/${t}/restore`)},Of=7e3;function En(t,e,r){const[o,s]=f.useState([]),i=f.useRef({}),l=f.useCallback(async(g,m="Item")=>{await t(g),r();const h=`${g}-${Date.now()}`;s(p=>[...p,{id:h,itemId:g,label:m}]),i.current[h]=setTimeout(()=>{s(p=>p.filter(w=>w.id!==h)),delete i.current[h]},Of)},[t,r]),a=f.useCallback(async g=>{const m=o.find(h=>h.id===g);m&&(clearTimeout(i.current[g]),delete i.current[g],s(h=>h.filter(p=>p.id!==g)),await e(m.itemId),r())},[o,e,r]),d=f.useCallback(g=>{clearTimeout(i.current[g]),delete i.current[g],s(m=>m.filter(h=>h.id!==g))},[]);return{deleteItem:l,toasts:o,handleUndo:a,handleDismiss:d}}function Bn({toasts:t,onUndo:e,onDismiss:r}){return n.jsx("div",{style:Xr.container,children:t.map(o=>n.jsx($f,{toast:o,onUndo:e,onDismiss:r},o.id))})}function $f({toast:t,onUndo:e,onDismiss:r}){const[o,s]=f.useState(100);return f.useEffect(()=>{const i=Date.now(),l=7e3,a=setInterval(()=>{const d=Date.now()-i,g=Math.max(0,100-d/l*100);s(g),g===0&&clearInterval(a)},50);return()=>clearInterval(a)},[]),n.jsxs("div",{style:Xr.toast,children:[n.jsx("div",{style:{...Xr.bar,width:`${o}%`}}),n.jsxs("span",{style:Xr.msg,children:[t.label," deleted"]}),n.jsx("button",{style:Xr.undoBtn,onClick:()=>e(t.id),children:"Undo"}),n.jsx("button",{style:Xr.closeBtn,onClick:()=>r(t.id),children:"×"})]})}const Xr={container:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",gap:8,zIndex:999,pointerEvents:"none"},toast:{position:"relative",display:"flex",alignItems:"center",gap:12,background:"var(--accent-strong)",color:"#fff",borderRadius:10,padding:"12px 16px",fontSize:13.5,fontFamily:"'Inter', system-ui, sans-serif",boxShadow:"0 4px 20px rgba(0,0,0,0.25)",minWidth:260,overflow:"hidden",pointerEvents:"all"},bar:{position:"absolute",bottom:0,left:0,height:3,background:"#4C9A6B",transition:"width 0.05s linear",borderRadius:"0 0 0 10px"},msg:{flex:1,fontWeight:500},undoBtn:{border:"1px solid rgba(255,255,255,0.3)",background:"none",color:"#4C9A6B",fontWeight:700,fontSize:13,padding:"4px 10px",borderRadius:6,cursor:"pointer",fontFamily:"inherit"},closeBtn:{border:"none",background:"none",color:"rgba(255,255,255,0.5)",cursor:"pointer",fontSize:18,lineHeight:1,padding:"0 2px"}},Zo={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},mg=[{id:"Q1",symbol:"™",title:"Do Now",sub:"Important · Urgent",accent:"#C2536B"},{id:"Q2",symbol:"©",title:"Schedule",sub:"Important · Not Urgent",accent:"#3A7CA5"},{id:"Q3",symbol:"®",title:"Delegate",sub:"Not Important · Urgent",accent:"#C9A227"},{id:"Q4",symbol:"•",title:"Drop",sub:"Not Important · Not Urgent",accent:"#8A8780"}];function Hf(){return new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Kolkata"})}function Gf(){const t=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"})),r=t.getMinutes()<30?30:0,o=r===0?t.getHours()+1:t.getHours();return`${String(o%24).padStart(2,"0")}:${String(r).padStart(2,"0")}`}function Uf(t,e){const[r,o]=t.split(":").map(Number),s=r*60+o+e;return`${String(Math.floor(s/60)%24).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`}function Vf(t){return t?new Date(t).toLocaleString("en-IN",{timeZone:"Asia/Kolkata",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0}):""}const Mi=()=>({title:"",pillar:"Financial",est:30,date:Hf(),startTime:Gf()});function Yf(){const[t,e]=f.useState([]),[r,o]=f.useState(null),[s,i]=f.useState(Mi()),[l,a]=f.useState({connected:!1,configured:!1}),d=f.useCallback(()=>O.getTasks().then(e).catch(console.error),[]);f.useEffect(()=>{d(),O.getGcalStatus().then(a).catch(()=>{})},[d]);const{deleteItem:g,toasts:m,handleUndo:h,handleDismiss:p}=En(O.deleteTask,O.restoreTask,d),w=u=>t.filter(k=>k.quadrant===u),y=u=>w(u).reduce((k,x)=>k+x.time_estimate_min,0),j=u=>u>=60?`${Math.floor(u/60)}h${u%60?` ${u%60}m`:""}`:`${u}m`,T=u=>{var x;return`${((x=mg.find(D=>D.id===u.quadrant))==null?void 0:x.symbol)??""} ${u.title}`},b=async u=>{if(!s.title.trim())return;const k=s.date&&s.startTime?`${s.date}T${s.startTime}:00`:null;await O.createTask({pillar:s.pillar,title:s.title,quadrant:u,time_estimate_min:Number(s.est)||30,start_datetime:k}),i(Mi()),o(null),d()},c=(u,k)=>g(u,k);return n.jsxs("div",{style:lt.page,children:[n.jsxs("div",{style:lt.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:lt.eyebrow,children:"Anvil · Weekly Routing"}),n.jsx("h1",{style:lt.h1,children:"Weekly Routing"})]}),n.jsxs("div",{style:lt.headRight,children:[n.jsx("div",{style:lt.legend,children:Object.entries(Zo).map(([u,k])=>n.jsxs("span",{style:lt.legendItem,children:[n.jsx("span",{style:{...lt.dot,background:k.dot}}),u]},u))}),l.configured&&(l.connected?n.jsxs("button",{style:lt.gcalBadgeOn,title:"Disconnect Google Calendar",onClick:()=>O.disconnectGoogle().then(()=>a({...l,connected:!1})),children:[n.jsx(Jo,{size:13})," Google Calendar connected"]}):n.jsxs("button",{style:lt.gcalBadgeOff,onClick:()=>O.connectGoogle(),children:[n.jsx(Jo,{size:13})," Connect Google Calendar"]}))]})]}),n.jsx("div",{style:lt.grid,children:mg.map(u=>n.jsxs("section",{style:{...lt.quad,borderTop:`3px solid ${u.accent}`},children:[n.jsxs("header",{style:lt.quadHead,children:[n.jsxs("div",{style:lt.quadTitleRow,children:[n.jsx("span",{style:{...lt.symbol,color:u.accent},children:u.symbol}),n.jsxs("div",{children:[n.jsx("div",{style:lt.quadTitle,children:u.title}),n.jsx("div",{style:lt.quadSub,children:u.sub})]})]}),n.jsx("span",{style:lt.quadTotal,children:j(y(u.id))})]}),n.jsxs("div",{style:lt.list,children:[w(u.id).map(k=>{const x=Zo[k.pillar]||Zo.Financial,D=!!k.gcal_event_id;return n.jsxs("div",{style:{...lt.card,background:x.soft},children:[n.jsx("span",{style:{...lt.cardBar,background:x.dot}}),n.jsxs("div",{style:lt.cardBody,children:[n.jsx("div",{style:lt.cardTitle,children:k.title}),k.start_datetime&&n.jsxs("div",{style:lt.eventTime,children:[n.jsx(Jo,{size:10}),Vf(k.start_datetime),D&&n.jsx("span",{style:lt.syncedDot,title:"Synced to Google Calendar"})]}),n.jsxs("div",{style:lt.cardMeta,children:[n.jsxs("span",{style:lt.metaPill,children:[n.jsx("span",{style:{...lt.dot,background:x.dot,width:7,height:7}}),k.pillar]}),n.jsxs("span",{style:lt.metaPill,children:[n.jsx(cf,{size:11})," ",j(k.time_estimate_min)]})]})]}),n.jsxs("div",{style:lt.cardActions,children:[D&&n.jsx("span",{title:`On calendar as "${T(k)}"`,style:lt.calDoneIcon,children:n.jsx(wt,{size:14})}),n.jsx("button",{onClick:()=>c(k.id,k.title),style:lt.delBtn,children:n.jsx(ft,{size:13})})]})]},k.id)}),r===u.id?n.jsxs("div",{style:lt.addBox,children:[n.jsx("input",{autoFocus:!0,placeholder:"Task title",value:s.title,onChange:k=>i({...s,title:k.target.value}),onKeyDown:k=>k.key==="Enter"&&b(u.id),style:lt.input}),n.jsxs("div",{style:lt.dateTimeRow,children:[n.jsxs("div",{style:lt.dateTimeGroup,children:[n.jsx("label",{style:lt.dtLabel,children:"Date"}),n.jsx("input",{type:"date",value:s.date,onChange:k=>i({...s,date:k.target.value}),style:lt.dtInput})]}),n.jsxs("div",{style:lt.dateTimeGroup,children:[n.jsx("label",{style:lt.dtLabel,children:"Start"}),n.jsx("input",{type:"time",value:s.startTime,onChange:k=>i({...s,startTime:k.target.value}),style:lt.dtInput})]}),n.jsxs("div",{style:lt.dateTimeGroup,children:[n.jsx("label",{style:lt.dtLabel,children:"End"}),n.jsx("div",{style:lt.dtEndValue,children:Uf(s.startTime,Number(s.est)||30)})]})]}),n.jsxs("div",{style:lt.addRow,children:[n.jsx("select",{value:s.pillar,onChange:k=>i({...s,pillar:k.target.value}),style:lt.select,children:Object.keys(Zo).map(k=>n.jsx("option",{children:k},k))}),n.jsx("input",{type:"number",value:s.est,onChange:k=>i({...s,est:k.target.value}),style:{...lt.input,width:60}}),n.jsx("span",{style:lt.minLabel,children:"min"}),l.connected&&n.jsx("span",{style:lt.gcalHint,title:"Will sync to Google Calendar",children:n.jsx(Jo,{size:12})}),n.jsx("button",{onClick:()=>b(u.id),style:lt.saveBtn,children:n.jsx(wt,{size:14})}),n.jsx("button",{onClick:()=>{o(null),i(Mi())},style:lt.cancelBtn,children:n.jsx(ft,{size:14})})]})]}):n.jsxs("button",{onClick:()=>o(u.id),style:lt.addTrigger,children:[n.jsx(de,{size:13})," Add task"]})]})]},u.id))}),n.jsx(Bn,{toasts:m,onUndo:h,onDismiss:p})]})}const lt={page:{fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:16,marginBottom:22},headRight:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:10},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces', Georgia, serif"},legend:{display:"flex",gap:14,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--text-2)",fontWeight:500},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},gcalBadgeOn:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"#4C9A6B",background:"rgba(76,154,107,0.10)",border:"1px solid rgba(76,154,107,0.3)",borderRadius:20,padding:"5px 12px",cursor:"pointer"},gcalBadgeOff:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"var(--text-2)",background:"var(--surface)",border:"1px solid #DCDAD3",borderRadius:20,padding:"5px 12px",cursor:"pointer"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16},quad:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.06)"},quadHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14},quadTitleRow:{display:"flex",gap:10,alignItems:"center"},symbol:{fontSize:20,lineHeight:1},quadTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em"},quadSub:{fontSize:11,color:"var(--text-3)",marginTop:1,letterSpacing:"0.02em"},quadTotal:{fontSize:12,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"3px 9px",borderRadius:20},list:{display:"flex",flexDirection:"column",gap:8},card:{display:"flex",alignItems:"stretch",gap:10,borderRadius:9,padding:"10px 10px 10px 0",overflow:"hidden"},cardBar:{width:3,borderRadius:3,flexShrink:0},cardBody:{flex:1,minWidth:0},cardTitle:{fontSize:13.5,fontWeight:500,lineHeight:1.35,marginBottom:4},eventTime:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#3A7CA5",fontWeight:500,marginBottom:5},syncedDot:{width:6,height:6,borderRadius:"50%",background:"#4C9A6B",display:"inline-block",marginLeft:2},cardMeta:{display:"flex",gap:8,flexWrap:"wrap"},metaPill:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"var(--text-2)",fontWeight:500},cardActions:{display:"flex",flexDirection:"column",gap:4,alignSelf:"center",flexShrink:0},calDoneIcon:{width:30,height:30,borderRadius:8,background:"#4C9A6B",color:"#fff",display:"grid",placeItems:"center"},delBtn:{width:30,height:30,borderRadius:8,border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center"},addTrigger:{display:"flex",alignItems:"center",gap:5,fontSize:12.5,color:"var(--text-3)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"8px 10px",cursor:"pointer",fontWeight:500,marginTop:2},addBox:{border:"1px solid var(--border)",borderRadius:9,padding:10,display:"flex",flexDirection:"column",gap:8},dateTimeRow:{display:"flex",gap:8,alignItems:"flex-end"},dateTimeGroup:{display:"flex",flexDirection:"column",gap:3,flex:1},dtLabel:{fontSize:10,fontWeight:600,color:"var(--text-3)",letterSpacing:"0.08em",textTransform:"uppercase"},dtInput:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},dtEndValue:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,color:"var(--text-2)",background:"var(--bg)"},addRow:{display:"flex",alignItems:"center",gap:6},input:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",flex:1,minWidth:0},select:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 8px",fontSize:12.5,fontFamily:"inherit",flex:1},minLabel:{fontSize:11,color:"var(--text-3)"},gcalHint:{color:"#3A7CA5",display:"grid",placeItems:"center"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"}},Me={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},fg=Object.keys(Me),_i=["Yearly","Quarterly","Monthly","Weekly"],Br=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],hg=[{label:"Q1 · Jan–Mar",startMonth:0},{label:"Q2 · Apr–Jun",startMonth:3},{label:"Q3 · Jul–Sep",startMonth:6},{label:"Q4 · Oct–Dec",startMonth:9}],Ql=new Date().getFullYear(),vg=Array.from({length:8},(t,e)=>Ql-1+e);function Qf(t=720){const[e,r]=f.useState(()=>window.innerWidth<t);return f.useEffect(()=>{const o=()=>r(window.innerWidth<t);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[t]),e}const qo=864e5,Ie=30,ks=190,Kr=t=>new Date(t+"T00:00:00"),yg=t=>t.toLocaleDateString("en-US",{month:"short",day:"numeric"}),Kf=[{key:"yearly",label:"Yearly",horizons:["Yearly"]},{key:"quarterly",label:"Quarterly",horizons:["Quarterly"]},{key:"mw",label:"Monthly & Weekly",horizons:["Monthly","Weekly"]}],Xf={Yearly:"Yr",Quarterly:"Q",Monthly:"Mo",Weekly:"Wk"},xg={Yearly:0,Quarterly:1,Monthly:2,Weekly:3},Li=t=>_i[Math.min(_i.indexOf(t)+1,_i.length-1)],ts=t=>{if(!t||!t.start_date)return Array.from({length:12},(l,a)=>a);const e=new Date(t.start_date+"T00:00:00"),r=new Date(t.end_date+"T00:00:00"),o=e.getFullYear(),s=e.getMonth(),i=r.getFullYear()>o?11:r.getMonth();return Array.from({length:i-s+1},(l,a)=>s+a)},es=t=>new Date(t+"T00:00:00").getFullYear(),Jf=(t,e,r)=>{const o=(r-1)*7+1,s=Math.min(o+6,new Date(t,e+1,0).getDate()),i=String(e+1).padStart(2,"0");return{start_date:`${t}-${i}-${String(o).padStart(2,"0")}`,end_date:`${t}-${i}-${String(s).padStart(2,"0")}`}},gn=(t,e,r,o=1)=>{const s=e;switch(t){case"Yearly":return{start_date:`${s}-01-01`,end_date:`${s}-12-31`};case"Quarterly":{const i=Math.floor(r/3)*3,l=i+1,a=i+3,d=new Date(s,a,0).getDate();return{start_date:`${s}-${String(l).padStart(2,"0")}-01`,end_date:`${s}-${String(a).padStart(2,"0")}-${d}`}}case"Monthly":{const i=new Date(s,r+1,0).getDate();return{start_date:`${s}-${String(r+1).padStart(2,"0")}-01`,end_date:`${s}-${String(r+1).padStart(2,"0")}-${i}`}}case"Weekly":return Jf(s,r,o);default:return{start_date:`${s}-01-01`,end_date:`${s}-12-31`}}},Zf=(t,e)=>{const r=new Date(t+"T00:00:00");return r.setDate(r.getDate()+e),`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`},qf=(t,e)=>{const r=e.getFullYear(),o=e.getMonth();return t==="Quarterly"?gn("Quarterly",r,o):t==="Monthly"?gn("Monthly",r,o):t==="Weekly"?gn("Weekly",r,o,Math.min(Math.max(Math.ceil(e.getDate()/7),1),4)):gn("Yearly",r,0)},th=t=>{if(!t.start_date)return"";const e=new Date(t.start_date+"T00:00:00"),r=e.getMonth();switch(t.horizon){case"Yearly":return`${e.getFullYear()}`;case"Quarterly":return`Q${Math.floor(r/3)+1} ${e.getFullYear()}`;case"Monthly":return`${Br[r]} ${e.getFullYear()}`;case"Weekly":return`${Br[r]} W${Math.ceil(e.getDate()/7)}`;default:return""}};function eh(){const[t,e]=f.useState([]),[r,o]=f.useState("All"),[s,i]=f.useState({}),[l,a]=f.useState({}),[d,g]=f.useState(null),[m,h]=f.useState(""),[p,w]=f.useState(0),[y,j]=f.useState(1),[T,b]=f.useState(Ql),[c,u]=f.useState(null),k=Qf(),[x,D]=f.useState(!k),[W,z]=f.useState(null),B=f.useRef(null);f.useEffect(()=>{B.current=W},[W]);const F=f.useCallback(()=>{O.getGoals().then(e).catch(console.error)},[]);f.useEffect(()=>{F()},[F]);const{deleteItem:q,toasts:M,handleUndo:C,handleDismiss:U}=En(O.deleteGoal,O.restoreGoal,F),ut=f.useCallback(async()=>{const R=B.current;if(z(null),!R)return;const G=Math.round(R.dx/Ie);if(!G)return;const bt=qf(R.g.horizon,Kr(Zf(R.g.start_date,G)));bt.start_date!==R.g.start_date&&(await O.updateGoal(R.g.id,{pillar:R.g.pillar,start_date:bt.start_date,end_date:bt.end_date}),F())},[F]),Z=!!W;f.useEffect(()=>{if(!Z)return;const R=bt=>z(yt=>yt&&{...yt,dx:bt.clientX-yt.startX}),G=()=>ut();return window.addEventListener("pointermove",R),window.addEventListener("pointerup",G),()=>{window.removeEventListener("pointermove",R),window.removeEventListener("pointerup",G)}},[Z,ut]);const E=r==="All",S=Me[r]||{dot:"var(--text-3)"},N=E?t:t.filter(R=>R.pillar===r),V=N.filter(R=>!R.parent_goal_id),L=R=>N.filter(G=>G.parent_goal_id===R),st=R=>a(G=>({...G,[R]:!G[R]})),v=R=>R.horizon==="Monthly"||R.horizon==="Weekly",P=R=>s[R.id]!==void 0?s[R.id]:v(R),gt=R=>i(G=>({...G,[R.id]:!P(R)})),dt=(R,G=null)=>{g(R),h(""),j(1),b(G?es(G.start_date):Ql);const bt=R==="ROOT"?"Yearly":Li(G==null?void 0:G.horizon),yt=R==="ROOT"?[0]:ts(G);w(bt==="Quarterly"?Math.floor(yt[0]/3)*3:yt[0]??0)},vt=async(R,G)=>{if(!m.trim())return;const bt=(G==null?void 0:G.horizon)??null,yt=R==="ROOT"?"Yearly":Li(bt),ne=R==="ROOT"?r:(G==null?void 0:G.pillar)||r,or=yt==="Yearly"?Number(T):G?es(G.start_date):Number(T),{start_date:pt,end_date:je}=gn(yt,or,p,y);await O.createGoal({pillar:ne,title:m.trim(),horizon:yt,parent_goal_id:R==="ROOT"?null:R,start_date:pt,end_date:je}),R!=="ROOT"&&a(sr=>({...sr,[R]:!0})),g(null),h(""),F()},Bt=R=>{const G=R.start_date?new Date(R.start_date+"T00:00:00"):new Date,bt=G.getMonth(),yt=Math.min(Math.max(Math.ceil(G.getDate()/7),1),4);u({id:R.id,title:R.title,pillar:R.pillar,horizon:R.horizon,parentGoal:t.find(ne=>ne.id===R.parent_goal_id)||null,year:es(R.start_date),month:R.horizon==="Quarterly"?Math.floor(bt/3)*3:bt,week:yt})},_=async()=>{if(!c||!c.title.trim())return;let R=c.month;c.horizon==="Weekly"&&(R=ts(c.parentGoal)[0]);const G=c.horizon==="Yearly"?Number(c.year):c.parentGoal?es(c.parentGoal.start_date):Number(c.year),{start_date:bt,end_date:yt}=gn(c.horizon,G,R,c.week);await O.updateGoal(c.id,{title:c.title.trim(),pillar:c.pillar,start_date:bt,end_date:yt}),u(null),F()},ot=({parentId:R,parentGoal:G,depth:bt})=>{const yt=R==="ROOT"?"Yearly":Li((G==null?void 0:G.horizon)??null),ne=R==="ROOT"?Array.from({length:12},(pt,je)=>je):ts(G),or=hg.filter(pt=>ne.includes(pt.startMonth));return n.jsxs("div",{style:{...K.addBox,marginLeft:bt*24},children:[n.jsx("input",{autoFocus:!0,placeholder:`New ${yt.toLowerCase()} goal…`,value:m,onChange:pt=>h(pt.target.value),onKeyDown:pt=>{pt.key==="Enter"&&vt(R,G),pt.key==="Escape"&&g(null)},style:K.input}),yt==="Yearly"&&n.jsx("select",{value:T,onChange:pt=>b(Number(pt.target.value)),style:K.monthSelect,children:vg.map(pt=>n.jsx("option",{value:pt,children:pt},pt))}),yt==="Quarterly"&&n.jsx("select",{value:p,onChange:pt=>w(Number(pt.target.value)),style:K.monthSelect,children:or.map(pt=>n.jsx("option",{value:pt.startMonth,children:pt.label},pt.startMonth))}),yt==="Monthly"&&n.jsx("select",{value:p,onChange:pt=>w(Number(pt.target.value)),style:K.monthSelect,children:ne.map(pt=>n.jsx("option",{value:pt,children:Br[pt]},pt))}),yt==="Weekly"&&n.jsxs(n.Fragment,{children:[n.jsx("span",{style:K.inheritTag,children:Br[ne[0]]}),n.jsx("select",{value:y,onChange:pt=>j(Number(pt.target.value)),style:K.monthSelect,children:[1,2,3,4].map(pt=>n.jsxs("option",{value:pt,children:["Week ",pt]},pt))})]}),n.jsx("button",{onClick:()=>vt(R,G),style:K.saveBtn,children:n.jsx(wt,{size:14})}),n.jsx("button",{onClick:()=>g(null),style:K.cancelBtn,children:n.jsx(ft,{size:14})})]})},jt=({goal:R,depth:G})=>{var pt,je,sr,Dn;const bt=L(R.id),yt=l[R.id],ne=R.horizon!=="Weekly";if((c==null?void 0:c.id)===R.id){const Se=ts(c.parentGoal),Fo=hg.filter(xt=>Se.includes(xt.startMonth));return n.jsxs("div",{style:{...K.editBox,marginLeft:G*24},children:[n.jsx("input",{autoFocus:!0,value:c.title,onChange:xt=>u({...c,title:xt.target.value}),onKeyDown:xt=>xt.key==="Enter"&&_(),style:{...K.input,flex:1}}),n.jsx("select",{value:c.pillar,onChange:xt=>u({...c,pillar:xt.target.value}),style:K.monthSelect,children:fg.map(xt=>n.jsx("option",{children:xt},xt))}),c.horizon==="Yearly"&&n.jsx("select",{value:c.year,onChange:xt=>u({...c,year:Number(xt.target.value)}),style:K.monthSelect,children:vg.map(xt=>n.jsx("option",{value:xt,children:xt},xt))}),c.horizon==="Quarterly"&&n.jsx("select",{value:c.month,onChange:xt=>u({...c,month:Number(xt.target.value)}),style:K.monthSelect,children:Fo.map(xt=>n.jsx("option",{value:xt.startMonth,children:xt.label},xt.startMonth))}),c.horizon==="Monthly"&&n.jsx("select",{value:c.month,onChange:xt=>u({...c,month:Number(xt.target.value)}),style:K.monthSelect,children:Se.map(xt=>n.jsx("option",{value:xt,children:Br[xt]},xt))}),c.horizon==="Weekly"&&n.jsxs(n.Fragment,{children:[n.jsx("span",{style:K.inheritTag,children:Br[Se[0]]}),n.jsx("select",{value:c.week,onChange:xt=>u({...c,week:Number(xt.target.value)}),style:K.monthSelect,children:[1,2,3,4].map(xt=>n.jsxs("option",{value:xt,children:["Week ",xt]},xt))})]}),n.jsx("button",{onClick:_,style:K.saveBtn,children:n.jsx(wt,{size:14})}),n.jsx("button",{onClick:()=>u(null),style:K.cancelBtn,children:n.jsx(ft,{size:14})})]})}return n.jsxs("div",{children:[n.jsxs("div",{style:{...K.row,marginLeft:G*24,background:G===0&&((pt=Me[R.pillar])==null?void 0:pt.soft)||"transparent"},children:[bt.length>0?n.jsx("button",{onClick:()=>st(R.id),style:K.caret,children:yt?n.jsx(Qa,{size:15}):n.jsx(Yr,{size:15})}):n.jsx("span",{style:{...K.caret,opacity:.25},children:n.jsx(Za,{size:12})}),n.jsx("span",{style:{...K.horizonTag,color:((je=Me[R.pillar])==null?void 0:je.dot)||S.dot,borderColor:((sr=Me[R.pillar])==null?void 0:sr.dot)||S.dot},children:R.horizon}),n.jsx("span",{style:K.title,children:R.title}),n.jsx("span",{style:K.periodTag,children:th(R)}),n.jsx("button",{onClick:()=>gt(R),style:{...K.rowAdd,color:P(R)?((Dn=Me[R.pillar])==null?void 0:Dn.dot)||S.dot:"var(--text-3)"},title:P(R)?"Showing on timeline — click to hide":"Hidden from timeline — click to show",children:P(R)?n.jsx(cb,{size:13}):n.jsx(gb,{size:13})}),n.jsx("button",{onClick:()=>Bt(R),style:K.rowAdd,title:"Edit",children:n.jsx(Fe,{size:12})}),ne&&n.jsx("button",{onClick:()=>{a(Se=>({...Se,[R.id]:!0})),dt(R.id,R)},style:K.rowAdd,title:"Add sub-goal",children:n.jsx(de,{size:13})}),n.jsx("button",{onClick:()=>q(R.id,R.title),style:{...K.rowAdd,color:"var(--text-3)"},title:"Delete",children:n.jsx(ft,{size:13})})]}),yt&&bt.map(Se=>n.jsx(jt,{goal:Se,depth:G+1},Se.id)),yt&&d===R.id&&n.jsx(ot,{parentId:R.id,parentGoal:R,depth:G+1})]})},It=t.filter(R=>P(R)&&R.start_date&&R.end_date),zt=Kf.map(R=>({...R,items:It.filter(G=>R.horizons.includes(G.horizon)).sort((G,bt)=>G.pillar.localeCompare(bt.pillar)||G.start_date.localeCompare(bt.start_date)||xg[G.horizon]-xg[bt.horizon]||G.end_date.localeCompare(bt.end_date))})).filter(R=>R.items.length>0),At=(()=>{if(!It.length)return null;let R=It[0].start_date,G=It[0].end_date;return It.forEach(bt=>{bt.start_date<R&&(R=bt.start_date),bt.end_date>G&&(G=bt.end_date)}),{start:Kr(R),end:Kr(G)}})(),nr=(()=>{if(!At)return[];const R=[];for(let G=At.start.getTime();G<=At.end.getTime();G+=qo)R.push(new Date(G));return R})(),Ir=nr.length,Do=(()=>{const R=[];return nr.forEach(G=>{const bt=`${G.getFullYear()}-${G.getMonth()}`,yt=R[R.length-1];yt&&yt.key===bt?yt.days++:R.push({key:bt,label:`${Br[G.getMonth()]} '${String(G.getFullYear()).slice(2)}`,days:1})}),R})(),od=new Date;od.setHours(0,0,0,0);const Ro=At?Math.round((od-At.start)/qo):-1,Eb=Ro>=0&&Ro<Ir,Bb=R=>Math.round((Kr(R.end_date)-Kr(R.start_date))/qo)+1;return n.jsxs("div",{style:K.page,children:[n.jsxs("div",{style:K.head,children:[n.jsx("div",{style:K.eyebrow,children:"Anvil · Goals"}),n.jsx("h1",{style:K.h1,children:E?"All Goals":`${r} Goals`})]}),n.jsxs("div",{style:K.pillarPicker,children:[n.jsx("button",{onClick:()=>{o("All"),g(null),u(null)},style:{...K.pillarChip,...E?{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:"All Goals"}),fg.map(R=>{const G=R===r;return n.jsxs("button",{onClick:()=>{o(R),g(null),u(null)},style:{...K.pillarChip,...G?{background:Me[R].dot,color:"#fff",borderColor:Me[R].dot}:{}},children:[n.jsx("span",{style:{...K.dot,background:G?"#fff":Me[R].dot}}),R]},R)})]}),n.jsxs("div",{style:K.list,children:[V.map(R=>n.jsx(jt,{goal:R,depth:0},R.id)),V.length===0&&n.jsxs("div",{style:K.ganttEmpty,children:["No goals yet",E?"":` for ${r}`,"."]}),!E&&d==="ROOT"&&n.jsx(ot,{parentId:"ROOT",parentGoal:null,depth:0}),!E&&d!=="ROOT"&&n.jsxs("button",{onClick:()=>dt("ROOT",null),style:K.rootAdd,children:[n.jsx(de,{size:14})," Add top-level goal"]}),E&&n.jsx("div",{style:K.allHint,children:"Pick a pillar above to add new goals."})]}),n.jsxs("div",{style:K.ganttWrap,children:[n.jsxs("div",{style:K.ganttTop,children:[n.jsxs("div",{style:K.ganttTitle,children:["Daily Timeline",At?` · ${yg(At.start)} – ${yg(At.end)}`:""]}),n.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[n.jsx("span",{style:K.ganttHint,children:"Drag a bar to reschedule"}),n.jsxs("button",{onClick:()=>D(R=>!R),style:K.labelToggle,children:[x?n.jsx(Cf,{size:14}):n.jsx(If,{size:14}),x?"Hide names":"Show names"]})]})]}),At?n.jsx("div",{style:K.ganttScroll,children:n.jsxs("div",{style:{minWidth:(x?ks:0)+Ir*Ie},children:[n.jsxs("div",{style:K.gBandRow,children:[x&&n.jsx("div",{style:{...K.gLabelHead,zIndex:4},children:"Goal"}),n.jsx("div",{style:{display:"flex"},children:Do.map((R,G)=>n.jsx("div",{style:{...K.gMonthCell,width:R.days*Ie},children:R.label},G))})]}),n.jsxs("div",{style:K.gBandRow,children:[x&&n.jsx("div",{style:{...K.gLabelHead,zIndex:4,fontSize:10,color:"var(--text-3)",fontWeight:600},children:"days →"}),n.jsx("div",{style:{display:"flex"},children:nr.map((R,G)=>{const bt=R.getDay()===0||R.getDay()===6,yt=G===Ro;return n.jsx("div",{style:{...K.gDayCell,...bt?K.gWeekend:{},...yt?K.gTodayCell:{}},children:R.getDate()},G)})})]}),zt.map(R=>n.jsxs("div",{children:[n.jsxs("div",{style:K.gGroupRow,children:[x?n.jsxs("div",{style:K.gGroupLabel,children:[R.label,n.jsx("span",{style:K.gGroupCount,children:R.items.length})]}):n.jsxs("div",{style:K.gGroupChip,children:[R.label," · ",R.items.length]}),n.jsx("div",{style:{width:Ir*Ie,flexShrink:0}})]}),R.items.map(G=>{var Se;const bt=((Se=Me[G.pillar])==null?void 0:Se.dot)||"#9A968C",yt=Math.round((Kr(G.start_date)-At.start)/qo),ne=Bb(G),or=ne*Ie-4,pt=or>=54,je=(W==null?void 0:W.id)===G.id,sr=je?W.dx:0,Dn=`${G.title} · ${G.start_date} → ${G.end_date} · ${ne} day${ne>1?"s":""}`;return n.jsxs("div",{style:K.gRow,children:[x&&n.jsxs("div",{style:{...K.gLabel,paddingLeft:12},children:[n.jsx("span",{style:{...K.ganttRowDot,background:bt}}),n.jsx("span",{style:{...K.gHzTag,color:bt,borderColor:bt},children:Xf[G.horizon]}),n.jsx("span",{style:K.gLabelText,title:G.title,children:G.title}),n.jsxs("span",{style:K.gDurChip,children:[ne,"d"]})]}),n.jsxs("div",{style:{...K.gTrack,width:Ir*Ie},children:[Eb&&n.jsx("div",{style:{...K.gTodayLine,left:Ro*Ie}}),n.jsxs("div",{onPointerDown:Fo=>{Fo.preventDefault(),z({id:G.id,startX:Fo.clientX,dx:0,g:G})},style:{...K.gBar,left:yt*Ie+2,width:or,background:bt,cursor:je?"grabbing":"grab",transform:sr?`translateX(${sr}px)`:"none",zIndex:je?6:1,boxShadow:je?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:Dn,children:[n.jsx(mf,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff"}}),pt&&n.jsx("span",{style:K.gBarLabel,children:G.title})]}),!pt&&n.jsx("span",{style:{...K.gBarOutside,left:yt*Ie+or+8+sr},title:Dn,children:G.title})]})]},G.id)})]},R.key))]})}):n.jsx("div",{style:K.ganttEmpty,children:"No goals on the timeline. Click the eye icon on a goal to show it here."}),At&&n.jsxs("div",{style:K.gLegend,children:[n.jsxs("span",{style:K.gLegendItem,children:[n.jsx("span",{style:{...K.gLegendBar}})," bar length = number of days"]}),n.jsxs("span",{style:K.gLegendItem,children:[n.jsx("span",{style:K.gLegendToday})," today"]})]})]}),n.jsx(Bn,{toasts:M,onUndo:C,onDismiss:U})]})}const K={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},pillarPicker:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},pillarChip:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},list:{background:"var(--surface)",borderRadius:12,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"hidden"},row:{display:"flex",alignItems:"center",gap:9,padding:"9px 10px",borderRadius:8,flexWrap:"nowrap"},caret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},horizonTag:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",border:"1px solid",borderRadius:5,padding:"2px 6px",flexShrink:0},title:{fontSize:14,fontWeight:500,lineHeight:1.3,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},periodTag:{fontSize:11,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"3px 8px",borderRadius:12,flexShrink:0},rowAdd:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,flexShrink:0},rootAdd:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"var(--text-2)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"9px 12px",cursor:"pointer",fontWeight:600,fontFamily:"inherit",marginTop:6,width:"100%",justifyContent:"center"},addBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 0 6px 28px",flexWrap:"wrap"},editBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 10px",flexWrap:"wrap",background:"var(--bg)",borderRadius:8,margin:"4px 0"},input:{border:"1px solid var(--border)",borderRadius:7,padding:"8px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",flex:1,minWidth:120},monthSelect:{border:"1px solid var(--border)",borderRadius:7,padding:"8px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},inheritTag:{fontSize:11.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"6px 9px",borderRadius:7,flexShrink:0},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},ganttWrap:{background:"var(--surface)",borderRadius:12,padding:"16px 14px",marginTop:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},ganttTop:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10,marginBottom:14},ganttTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",fontFamily:"'Fraunces',Georgia,serif"},ganttHint:{fontSize:11.5,color:"var(--text-3)",fontWeight:500},labelToggle:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 10px",borderRadius:8,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},gGroupChip:{position:"sticky",left:0,zIndex:3,background:"var(--surface-2)",padding:"5px 10px",fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",whiteSpace:"nowrap",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center"},allHint:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",padding:"10px 12px"},ganttEmpty:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},ganttScroll:{overflowX:"auto"},ganttRowDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},gBandRow:{display:"flex",alignItems:"stretch",borderBottom:"1px solid var(--border)"},gLabelHead:{width:ks,flexShrink:0,position:"sticky",left:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",padding:"6px 10px",fontSize:12,fontWeight:700,color:"var(--text-2)"},gMonthCell:{flexShrink:0,borderLeft:"1px solid var(--border)",fontSize:10.5,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gDayCell:{width:Ie,flexShrink:0,textAlign:"center",fontSize:10,color:"var(--text-3)",padding:"4px 0",borderLeft:"1px solid var(--border)",fontWeight:600},gWeekend:{background:"var(--surface-2)"},gTodayCell:{background:"var(--hover)",color:"var(--accent)",fontWeight:800},gGroupRow:{display:"flex",alignItems:"stretch",background:"var(--surface-2)",borderBottom:"1px solid var(--border)",borderTop:"1px solid var(--border)"},gGroupLabel:{width:ks,flexShrink:0,position:"sticky",left:0,background:"var(--surface-2)",zIndex:3,padding:"6px 12px",fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",gap:7},gGroupCount:{fontSize:10,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},gHzTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.04em",border:"1px solid",borderRadius:4,padding:"1px 4px",flexShrink:0},gRow:{display:"flex",alignItems:"stretch",minHeight:36,borderBottom:"1px solid var(--border)"},gLabel:{width:ks,flexShrink:0,display:"flex",alignItems:"center",gap:7,position:"sticky",left:0,background:"var(--surface)",zIndex:2,borderRight:"1px solid var(--border)",paddingRight:8,overflow:"hidden"},gLabelText:{flex:1,minWidth:0,fontSize:12,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},gDurChip:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",borderRadius:10,padding:"1px 6px",flexShrink:0,marginRight:6},gTrack:{position:"relative",flexShrink:0,minHeight:36,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent ${Ie}px)`},gBar:{position:"absolute",top:9,height:18,borderRadius:5,display:"flex",alignItems:"center",padding:"0 7px",boxShadow:"0 1px 2px rgba(0,0,0,0.15)",overflow:"hidden",zIndex:1},gBarLabel:{fontSize:11,fontWeight:600,color:"#fff",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},gBarOutside:{position:"absolute",top:9,height:18,display:"flex",alignItems:"center",fontSize:11,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",pointerEvents:"none",zIndex:1},gTodayLine:{position:"absolute",top:0,bottom:0,width:2,background:"#C2536B",zIndex:0,opacity:.6},gLegend:{display:"flex",gap:16,marginTop:12,fontSize:11,color:"var(--text-3)",flexWrap:"wrap"},gLegendItem:{display:"flex",alignItems:"center",gap:6,fontWeight:600},gLegendBar:{width:18,height:8,borderRadius:3,background:"var(--accent)",display:"inline-block"},gLegendToday:{width:2,height:12,background:"#C2536B",display:"inline-block"}},Gr={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.12)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.12)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.12)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.12)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.12)"}},xb=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],rh=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ed=t=>t.toISOString().slice(0,10),nh=()=>ed(new Date),oh=(t=0)=>{const e=new Date,r=e.getDay(),o=r===0?-6:1-r,s=new Date(e);return s.setDate(e.getDate()+o+t*7),Array.from({length:7},(i,l)=>{const a=new Date(s);return a.setDate(s.getDate()+l),ed(a)})},sh=(t=0)=>{const e=new Date,r=new Date(e.getFullYear(),e.getMonth()+t,1),o=r.getFullYear(),s=r.getMonth(),i=new Date(o,s+1,0).getDate(),l=r.getDay(),a=l===0?6:l-1,d=Array.from({length:i},(m,h)=>`${o}-${String(s+1).padStart(2,"0")}-${String(h+1).padStart(2,"0")}`),g=r.toLocaleDateString("en-US",{month:"long",year:"numeric"});return{dates:d,startOffset:a,label:g,year:o,month:s}},kg=t=>new Date(t+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"}),Dr=nh(),ih=new Date().getFullYear();function lh(){var L,st;const[t,e]=f.useState([]),[r,o]=f.useState("ALL"),[s,i]=f.useState(!1),[l,a]=f.useState(!1),[d,g]=f.useState(!1),[m,h]=f.useState(null),[p,w]=f.useState(null),[y,j]=f.useState({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week"}),[T,b]=f.useState(!1),[c,u]=f.useState([]),k=f.useCallback(()=>O.getHabits().then(e).catch(console.error),[]);f.useEffect(()=>{k()},[k]),f.useEffect(()=>{O.getSetting("habit_order").then(v=>{Array.isArray(v==null?void 0:v.value)&&u(v.value)}).catch(()=>{})},[]);const x=f.useMemo(()=>c.length?[...t].sort((v,P)=>{const gt=c.indexOf(v.id),dt=c.indexOf(P.id);return gt===-1&&dt===-1?0:gt===-1?1:dt===-1?-1:gt-dt}):t,[t,c]),D=async v=>{u(v),await O.setSetting("habit_order",v),b(!1)};f.useEffect(()=>{const v=()=>{const P=window.innerWidth<720;i(P),P||a(!1)};return v(),window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[]);const{deleteItem:W,toasts:z,handleUndo:B,handleDismiss:F}=En(O.deleteHabit,O.restoreHabit,k),q=v=>{o(v),s&&a(!1)},M=(v,P)=>{(v.type==="minimum"||v.type==="maximum")&&v.period==="day"?w({habit:v,date:P}):C(v.id,P)},C=async(v,P)=>{await O.toggleHabitLog(v,P),k()},U=async(v,P,gt,dt)=>{await O.setHabitLogCount(v,P,gt,dt),w(null),k()},ut=async(v,P)=>{await O.clearHabitLog(v,P),w(null),k()},Z=async()=>{if(!y.name.trim())return;const v={name:y.name.trim(),pillar:y.pillar,target_per_week:Number(y.target_per_week)||7,type:y.type,target_count:y.type!=="regular"?Number(y.target_count)||1:null,period:y.type!=="regular"?y.period:null};await O.createHabit(v),j({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week"}),g(!1),k()},E=async(v,P)=>{r===v&&o("ALL"),W(v,P)},S=t.find(v=>v.id===r),N=v=>new Set(v.logs||[]),V={...A.sidebar,...s?A.sidebarOverlay:{},...s&&!l?A.sidebarHidden:{}};return n.jsxs("div",{style:A.shell,children:[s&&l&&n.jsx("div",{style:A.backdrop,onClick:()=>a(!1)}),n.jsxs("aside",{style:V,children:[n.jsxs("div",{style:A.sideTop,children:[n.jsx("div",{style:A.brand,children:"Anvil · Habits"}),s&&n.jsx("button",{onClick:()=>a(!1),style:A.closeBtn,children:n.jsx(ft,{size:18})})]}),n.jsxs("div",{style:{...A.sideItem,...r==="ALL"?A.sideItemOn:{},cursor:"default",padding:"2px 6px 2px 10px"},children:[n.jsxs("button",{onClick:()=>q("ALL"),style:{display:"flex",alignItems:"center",gap:9,flex:1,border:"none",background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:r==="ALL"?600:500,color:"var(--text-2)",padding:"7px 0"},children:[n.jsx(bb,{size:15}),n.jsx("span",{style:A.sideLabel,children:"All Habits"}),n.jsx("span",{style:A.sideCount,children:t.length})]}),n.jsx("button",{onClick:v=>{v.stopPropagation(),b(!0)},style:A.tinyBtn,title:"Reorder habits",children:n.jsx(Fe,{size:12})})]}),n.jsx("div",{style:A.sideDivider}),x.map(v=>{var dt;const P=r===v.id,gt=((dt=Gr[v.pillar])==null?void 0:dt.dot)||"#9A968C";return n.jsxs("button",{onClick:()=>q(v.id),style:{...A.sideItem,...P?A.sideItemOn:{}},children:[n.jsx("span",{style:{...A.sideDot,background:gt}}),n.jsx("span",{style:A.sideLabel,children:v.name}),n.jsxs("span",{style:A.sideStreak,children:[n.jsx(Tn,{size:11})," ",v.streak]})]},v.id)}),d?n.jsx(ah,{habit:y,onChange:j,onSave:Z,onCancel:()=>g(!1)}):n.jsxs("button",{onClick:()=>g(!0),style:A.sideNewBtn,children:[n.jsx(de,{size:13})," New habit"]})]}),n.jsxs("main",{style:A.main,children:[s&&n.jsxs("button",{onClick:()=>a(!0),style:A.hamburger,children:[n.jsx(Ja,{size:18}),n.jsx("span",{style:A.hamburgerLabel,children:r==="ALL"?"All Habits":S==null?void 0:S.name})]}),r==="ALL"?n.jsx(ch,{habits:x,dayAction:M,logSet:N,onDelete:E,onEdit:v=>h(v)}):n.jsx(uh,{habit:S,dayAction:M,logSet:N,onDelete:()=>E(S.id,S.name),onEdit:()=>h(S),setNote:(v,P)=>O.setHabitLogNote(S.id,v,P).then(k)}),r==="ALL"&&n.jsx(mh,{year:ih})]}),T&&n.jsx(ph,{habits:x,onSave:D,onClose:()=>b(!1)}),m&&n.jsx(dh,{habit:m,onSave:async v=>{await O.updateHabit(m.id,v),h(null),k()},onClose:()=>h(null)}),p&&n.jsx(gh,{habit:p.habit,date:p.date,initialCount:((L=p.habit.log_counts)==null?void 0:L[p.date])??0,initialNote:((st=p.habit.log_notes)==null?void 0:st[p.date])??"",onSave:(v,P)=>U(p.habit.id,p.date,v,P),onClear:()=>ut(p.habit.id,p.date),onClose:()=>w(null)}),n.jsx(Bn,{toasts:z,onUndo:B,onDismiss:F})]})}function ah({habit:t,onChange:e,onSave:r,onCancel:o}){const s=t.type!=="regular";return n.jsxs("div",{style:A.addBox,children:[n.jsx("input",{autoFocus:!0,placeholder:"Habit name",value:t.name,onChange:i=>e(l=>({...l,name:i.target.value})),onKeyDown:i=>i.key==="Enter"&&r(),style:A.sideInput}),n.jsx("select",{value:t.pillar,onChange:i=>e(l=>({...l,pillar:i.target.value})),style:A.sideInput,children:Object.keys(Gr).map(i=>n.jsx("option",{children:i},i))}),n.jsxs("select",{value:t.type,onChange:i=>e(l=>({...l,type:i.target.value})),style:A.sideInput,children:[n.jsx("option",{value:"regular",children:"Regular (yes/no)"}),n.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),n.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),s&&n.jsxs("div",{style:{display:"flex",gap:6},children:[n.jsx("input",{type:"number",min:1,placeholder:"N",value:t.target_count||"",onChange:i=>e(l=>({...l,target_count:i.target.value})),style:{...A.sideInput,width:60}}),n.jsx("select",{value:t.period,onChange:i=>e(l=>({...l,period:i.target.value})),style:A.sideInput,children:["day","week","month","year"].map(i=>n.jsx("option",{children:i},i))})]}),n.jsxs("div",{style:{display:"flex",gap:6},children:[n.jsx("button",{onClick:r,style:A.sideAddBtn,children:n.jsx(wt,{size:13})}),n.jsx("button",{onClick:o,style:A.sideCancelBtn,children:n.jsx(ft,{size:13})})]})]})}function dh({habit:t,onSave:e,onClose:r}){const[o,s]=f.useState(t.name),[i,l]=f.useState(t.type||"regular"),[a,d]=f.useState(t.target_count||""),[g,m]=f.useState(t.period||"week"),[h,p]=f.useState(t.reminder_time||""),w=()=>e({name:o.trim(),type:i,target_count:i!=="regular"?Number(a):null,period:i!=="regular"?g:null,reminder_time:h||null});return n.jsx("div",{style:A.modalOverlay,onClick:r,children:n.jsxs("div",{style:A.modal,onClick:y=>y.stopPropagation(),children:[n.jsxs("div",{style:A.modalHead,children:["Edit Habit",n.jsx("button",{onClick:r,style:A.closeBtn,children:n.jsx(ft,{size:16})})]}),n.jsx("label",{style:A.modalLabel,children:"Name"}),n.jsx("input",{value:o,onChange:y=>s(y.target.value),style:A.sideInput}),n.jsx("label",{style:A.modalLabel,children:"Type"}),n.jsxs("select",{value:i,onChange:y=>l(y.target.value),style:A.sideInput,children:[n.jsx("option",{value:"regular",children:"Regular (yes/no)"}),n.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),n.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),i!=="regular"&&n.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[n.jsx("input",{type:"number",min:1,value:a,onChange:y=>d(y.target.value),style:{...A.sideInput,width:70}}),n.jsx("select",{value:g,onChange:y=>m(y.target.value),style:A.sideInput,children:["day","week","month","year"].map(y=>n.jsx("option",{children:y},y))})]}),n.jsx("label",{style:A.modalLabel,children:"Reminder time"}),n.jsx("input",{type:"time",value:h,onChange:y=>p(y.target.value),style:A.sideInput}),n.jsx("button",{onClick:w,style:{...A.sideAddBtn,width:"100%",marginTop:10,height:36},children:"Save"})]})})}function gh({habit:t,date:e,initialCount:r,initialNote:o,onSave:s,onClear:i,onClose:l}){const[a,d]=f.useState(r??0),[g,m]=f.useState(o??""),h=t.target_count,p=t.type==="minimum"?a>=h:a>0&&a<=h,w=t.type==="maximum"&&a>h,y=p?"#4C9A6B":w?"#C2536B":"#C2773B",j=p?"✓ Goal met":w?"Over the limit":"Not met yet";return n.jsx("div",{style:A.modalOverlay,onClick:l,children:n.jsxs("div",{style:A.modal,onClick:T=>T.stopPropagation(),children:[n.jsxs("div",{style:A.modalHead,children:[t.name,n.jsx("button",{onClick:l,style:A.closeBtn,children:n.jsx(ft,{size:16})})]}),n.jsxs("div",{style:{fontSize:12,color:"var(--text-3)",marginBottom:2},children:[e," · ",t.type==="minimum"?`at least ${h}`:`no more than ${h}`," / ",t.period]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:20,margin:"14px 0 6px"},children:[n.jsx("button",{onClick:()=>d(T=>Math.max(0,T-1)),style:A.counterBtn,children:"−"}),n.jsx("span",{style:{fontSize:38,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:52,textAlign:"center",color:y},children:a}),n.jsx("button",{onClick:()=>d(T=>T+1),style:A.counterBtn,children:"+"})]}),n.jsx("div",{style:{textAlign:"center",fontSize:12.5,fontWeight:700,color:y,marginBottom:12},children:j}),n.jsx("textarea",{value:g,onChange:T=>m(T.target.value),placeholder:"Add a comment (optional)…",style:{...A.sideInput,minHeight:56,resize:"vertical"}}),n.jsxs("div",{style:{display:"flex",gap:8,marginTop:10},children:[n.jsxs("button",{onClick:i,style:{...A.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[n.jsx(ft,{size:14})," Delete"]}),n.jsxs("button",{onClick:()=>s(a,g),style:{...A.sideAddBtn,flex:1,justifyContent:"center",height:38},children:[n.jsx(wt,{size:14})," Set"]})]})]})})}function ch({habits:t,dayAction:e,logSet:r,onDelete:o,onEdit:s}){const[i,l]=f.useState(0),a=oh(i),d=`${kg(a[0])} – ${kg(a[6])}${i===0?" · This week":""}`;return n.jsxs("div",{children:[n.jsxs("div",{style:A.mainHead,children:[n.jsx("div",{style:A.eyebrow,children:"Weekly view"}),n.jsx("h1",{style:A.h1,children:"All Habits"})]}),n.jsxs("div",{style:A.navBar,children:[n.jsx("button",{onClick:()=>l(g=>g-1),style:A.navBtn,children:n.jsx(zn,{size:16})}),n.jsx("span",{style:A.navLabel,children:d}),n.jsx("button",{onClick:()=>l(g=>Math.min(0,g+1)),disabled:i>=0,style:{...A.navBtn,...i>=0?A.navBtnDisabled:{}},children:n.jsx(Yr,{size:16})})]}),n.jsxs("div",{style:A.weekCard,children:[n.jsxs("div",{style:A.weekHeadRow,children:[n.jsx("div",{style:A.weekNameCol}),xb.map((g,m)=>n.jsxs("div",{style:A.weekDayHead,children:[n.jsx("span",{style:A.weekDayName,children:g}),n.jsx("span",{style:{...A.weekDayNum,...a[m]===Dr?A.weekDayToday:{}},children:new Date(a[m]+"T00:00").getDate()})]},g)),n.jsx("div",{style:A.weekStreakCol,children:"Streak"})]}),t.map(g=>{var D,W;const m=((D=Gr[g.pillar])==null?void 0:D.dot)||"#9A968C",h=((W=Gr[g.pillar])==null?void 0:W.soft)||"rgba(0,0,0,0.05)",p=r(g),w=g.type==="minimum"&&["week","month","year"].includes(g.period),y=g.target_count||0,j=g.logs||[],T=z=>j.filter(B=>B.slice(0,7)===z).length,b=z=>j.filter(B=>B.slice(0,4)===z).length,c=a.filter(z=>p.has(z)).length,u=z=>w?g.period==="week"?c>=y:g.period==="month"?T(z.slice(0,7))>=y:g.period==="year"?b(z.slice(0,4))>=y:!1:!1,k=w&&a.some(u),x=g.period==="week"?c:g.period==="month"?T(a[0].slice(0,7)):g.period==="year"?b(a[0].slice(0,4)):0;return n.jsxs("div",{style:A.weekRow,children:[n.jsxs("div",{style:{...A.weekNameCol,flexDirection:"column",alignItems:"flex-start",gap:2},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx("span",{style:{...A.sideDot,background:m}}),n.jsx("span",{style:A.weekHabitName,children:g.name})]}),g.type!=="regular"&&n.jsx("span",{style:A.typeBadge,children:g.type==="minimum"?`≥${g.target_count}/${g.period}`:`≤${g.target_count}/${g.period}`})]}),a.map((z,B)=>{var V,L;const F=p.has(z),q=z>Dr,M=(g.type==="minimum"||g.type==="maximum")&&g.period==="day",C=(V=g.log_counts)==null?void 0:V[z],U=C!=null,ut=!!((L=g.log_notes)!=null&&L[z]),Z=u(z),E=B>0&&u(a[B-1]),S=B<a.length-1&&u(a[B+1]),N=F||Z;return n.jsxs("div",{style:{...A.weekCell,position:"relative"},children:[Z&&n.jsx("span",{style:{...A.chainLine,background:m,left:E?0:"50%",right:S?0:"50%"}}),n.jsx("button",{disabled:q,onClick:()=>e(g,z),style:{...A.tick,position:"relative",zIndex:1,...N?{background:m,borderColor:m,color:"#fff"}:{},...M&&U&&!F?{borderColor:m,color:m}:{},...q&&!N?A.tickFuture:{}},children:M?U?n.jsx("span",{style:{fontSize:12,fontWeight:700},children:C}):null:F&&n.jsx(wt,{size:14,color:"#fff",strokeWidth:3})}),ut&&n.jsx("span",{style:A.cellNoteBubble})]},z)}),n.jsx("div",{style:A.weekStreakCol,children:k?n.jsxs("span",{style:{...A.streakPill,background:h,color:m},children:[n.jsx(Vl,{size:12})," ",x,"/",y]}):n.jsxs("span",{style:{...A.streakPill,background:h,color:m},children:[n.jsx(Tn,{size:12})," ",g.streak]})})]},g.id)}),t.length===0&&n.jsx("div",{style:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},children:"No habits yet — add one from the sidebar."})]})]})}function uh({habit:t,dayAction:e,logSet:r,onDelete:o,onEdit:s,setNote:i}){var L,st;const[l,a]=f.useState(null),[d,g]=f.useState(""),[m,h]=f.useState(null),[p,w]=f.useState(0),y=f.useRef(null);if(!t)return null;const j=((L=Gr[t.pillar])==null?void 0:L.dot)||"#9A968C",T=((st=Gr[t.pillar])==null?void 0:st.soft)||"rgba(0,0,0,0.05)",b=r(t),{dates:c,startOffset:u,label:k,year:x}=sh(p),D=c.filter(v=>v<=Dr&&b.has(v)).length,W=c.filter(v=>v<=Dr).length,z=W>0?Math.round(D/W*100):0,B=t.type==="minimum"&&(t.period==="month"||t.period==="year"),F=t.period==="year"?(t.logs||[]).filter(v=>v.startsWith(`${x}-`)).length:c.filter(v=>b.has(v)).length,q=B&&F>=(t.target_count||0),M=t.type==="minimum"&&t.period==="week",C=t.target_count||0,U=v=>{const P=new Date(v+"T00:00"),gt=P.getDay(),dt=new Date(P);dt.setDate(P.getDate()+(gt===0?-6:1-gt));let vt=0;for(let Bt=0;Bt<7;Bt++){const _=new Date(dt);_.setDate(dt.getDate()+Bt),b.has(ed(_))&&vt++}return vt},ut=v=>B?q:M?U(v)>=C:!1,Z=M?U(Dr):0,E=M&&Z>=C,S=v=>{y.current=setTimeout(()=>a(v),500)},N=()=>clearTimeout(y.current),V=v=>{var P;h(v),g(((P=t.log_notes)==null?void 0:P[v])||""),a(null)};return n.jsxs("div",{children:[n.jsxs("div",{style:A.mainHead,children:[n.jsxs("div",{children:[n.jsxs("div",{style:A.eyebrow,children:[n.jsx("span",{style:{...A.sideDot,background:j,marginRight:6}}),t.pillar," · Monthly view"]}),n.jsx("h1",{style:A.h1,children:t.name})]}),n.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[n.jsxs("button",{onClick:s,style:A.actionBtn,children:[n.jsx(Fe,{size:14})," Edit"]}),n.jsxs("button",{onClick:o,style:{...A.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[n.jsx(ft,{size:14})," Delete"]}),t.reminder_time&&n.jsxs("button",{style:A.actionBtn,children:[n.jsx(ab,{size:14})," ",t.reminder_time]})]})]}),n.jsxs("div",{style:A.statStrip,children:[n.jsx(Nn,{label:"Current streak",value:`${t.streak} days`,c:j,soft:T,flame:!0}),n.jsx(Nn,{label:"Done this month",value:`${D}/${W}`,c:j,soft:T}),n.jsx(Nn,{label:"Completion",value:`${z}%`,c:j,soft:T}),t.type==="regular"?n.jsx(Nn,{label:"Weekly target",value:`${t.target_per_week}×`,c:j,soft:T}):n.jsx(Nn,{label:t.type==="minimum"?"Min target":"Max allowed",value:`${t.target_count}/${t.period}`,c:j,soft:T})]}),n.jsxs("div",{style:A.navBar,children:[n.jsx("button",{onClick:()=>w(v=>v-1),style:A.navBtn,children:n.jsx(zn,{size:16})}),n.jsxs("span",{style:A.navLabel,children:[k,p===0?" · This month":""]}),n.jsx("button",{onClick:()=>w(v=>Math.min(0,v+1)),disabled:p>=0,style:{...A.navBtn,...p>=0?A.navBtnDisabled:{}},children:n.jsx(Yr,{size:16})})]}),B&&n.jsxs("div",{style:{...A.chainBanner,background:q?T:"var(--bg)",color:q?j:"var(--text-3)"},children:[n.jsx(Vl,{size:15}),q?`${t.period==="year"?"Yearly":"Monthly"} chain complete — ${F}/${t.target_count} connected`:`${F}/${t.target_count} this ${t.period} · ${(t.target_count||0)-F} more to connect the chain`]}),M&&p===0&&n.jsxs("div",{style:{...A.chainBanner,background:E?T:"var(--bg)",color:E?j:"var(--text-3)"},children:[n.jsx(Vl,{size:15}),E?`This week's chain complete — ${Z}/${C} connected`:`${Z}/${C} this week · ${Math.max(0,C-Z)} more to connect the chain`]}),n.jsxs("div",{style:A.monthCard,children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[n.jsx("div",{style:A.monthTitle,children:k}),n.jsx("span",{style:{fontSize:11,color:"var(--text-3)"},children:"Long-press a day for options"})]}),n.jsx("div",{style:A.monthDow,children:xb.map(v=>n.jsx("div",{style:A.monthDowCell,children:v},v))}),n.jsxs("div",{style:A.monthGrid,children:[Array.from({length:u}).map((v,P)=>n.jsx("div",{},`pad${P}`)),c.map((v,P)=>{var Ir,Do;const gt=P+1,dt=b.has(v),vt=v>Dr,Bt=v===Dr,_=!!((Ir=t.log_notes)!=null&&Ir[v]),ot=(t.type==="minimum"||t.type==="maximum")&&t.period==="day",jt=(Do=t.log_counts)==null?void 0:Do[v],It=jt!=null,zt=ut(v),At=dt||zt,nr=(u+P)%7;return n.jsxs("div",{style:{position:"relative"},children:[zt&&n.jsx("span",{style:{...A.chainLine,background:j,...nr===0?{left:"50%"}:{left:-6},...nr===6?{right:"50%"}:{right:-6}}}),n.jsx("button",{disabled:vt,onClick:()=>e(t,v),onMouseDown:()=>!ot&&S(v),onMouseUp:N,onTouchStart:()=>!ot&&S(v),onTouchEnd:N,style:{...A.monthDay,position:"relative",zIndex:1,...At?{background:j,borderColor:j,color:"#fff"}:{},...ot&&It&&!dt?{borderColor:j,color:j}:{},...vt&&!At?A.monthDayFuture:{},...Bt&&!At?{borderColor:j,borderWidth:2}:{},width:"100%"},children:gt}),ot&&It&&n.jsx("span",{style:{...A.countBadge,background:dt?"#4C9A6B":j},children:jt}),_&&n.jsx("span",{style:A.noteIndicator}),l===v&&n.jsx(bh,{onEdit:s,onDelete:o,onAddNote:()=>V(v),onRemind:s,onClose:()=>a(null)})]},v)})]})]}),m&&n.jsxs("div",{style:A.noteBox,children:[n.jsxs("div",{style:{fontWeight:600,fontSize:13,marginBottom:6},children:["Note for ",m]}),n.jsx("textarea",{value:d,onChange:v=>g(v.target.value),placeholder:"Add a note for this day…",style:{...A.sideInput,minHeight:60,resize:"vertical"}}),n.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[n.jsxs("button",{onClick:()=>{i(m,d),h(null)},style:A.sideAddBtn,children:[n.jsx(wt,{size:13})," Save"]}),n.jsx("button",{onClick:()=>h(null),style:A.sideCancelBtn,children:n.jsx(ft,{size:13})})]})]})]})}function bh({onEdit:t,onDelete:e,onAddNote:r,onRemind:o,onClose:s}){return n.jsxs("div",{style:A.longPressMenu,children:[n.jsxs("button",{style:A.menuItem,onClick:()=>{t(),s()},children:[n.jsx(Fe,{size:13})," Edit"]}),n.jsxs("button",{style:A.menuItem,onClick:()=>{r(),s()},children:[n.jsx(Ka,{size:13})," Add note"]}),n.jsxs("button",{style:A.menuItem,onClick:()=>{o(),s()},children:[n.jsx(ab,{size:13})," Remind"]}),n.jsxs("button",{style:{...A.menuItem,color:"#C2536B"},onClick:()=>{e(),s()},children:[n.jsx(ft,{size:13})," Delete"]})]})}function ph({habits:t,onSave:e,onClose:r}){const[o,s]=f.useState([...t]),i=(l,a)=>{const d=[...o],g=l+a;g<0||g>=d.length||([d[l],d[g]]=[d[g],d[l]],s(d))};return n.jsx("div",{style:A.modalOverlay,onClick:r,children:n.jsxs("div",{style:{...A.modal,maxHeight:"80vh",overflowY:"auto"},onClick:l=>l.stopPropagation(),children:[n.jsxs("div",{style:A.modalHead,children:["Reorder Habits",n.jsx("button",{onClick:r,style:A.closeBtn,children:n.jsx(ft,{size:16})})]}),n.jsx("p",{style:{fontSize:12,color:"var(--text-3)",margin:"0 0 10px"},children:"Use arrows to set the display order."}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:o.map((l,a)=>{var g;const d=((g=Gr[l.pillar])==null?void 0:g.dot)||"#9A968C";return n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"9px 10px",background:"var(--bg)",borderRadius:9,border:"1px solid var(--border)"},children:[n.jsx("span",{style:{...A.sideDot,background:d}}),n.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500},children:l.name}),n.jsx("button",{onClick:()=>i(a,-1),disabled:a===0,style:{...A.navBtn,width:28,height:28,opacity:a===0?.3:1,fontSize:14},children:"↑"}),n.jsx("button",{onClick:()=>i(a,1),disabled:a===o.length-1,style:{...A.navBtn,width:28,height:28,opacity:a===o.length-1?.3:1,fontSize:14},children:"↓"})]},l.id)})}),n.jsxs("button",{onClick:()=>e(o.map(l=>l.id)),style:{...A.sideAddBtn,width:"100%",marginTop:14,height:38,justifyContent:"center"},children:[n.jsx(wt,{size:14})," Save Order"]})]})})}function mh({year:t}){const[e,r]=f.useState([]);if(f.useEffect(()=>{O.getHabitsYearly(t).then(r).catch(console.error)},[t]),!e.length)return null;const o=Array.from({length:12},(i,l)=>{const a=e.reduce((g,m)=>{var h;return g+(((h=m.monthly[l+1])==null?void 0:h.done)||0)},0),d=e.reduce((g,m)=>{var h;return g+Math.floor((((h=m.monthly[l+1])==null?void 0:h.days)||30)/7*7)},0);return d>0?Math.round(a/d*100):0}),s=Math.max(...o,1);return n.jsxs("div",{style:{...A.monthCard,marginTop:18},children:[n.jsxs("div",{style:A.monthTitle,children:[t," Completion"]}),n.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:6,height:80,marginTop:12},children:o.map((i,l)=>n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[n.jsx("div",{style:{width:"100%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",height:`${i/s*60}px`,minHeight:2,opacity:i>0?1:.15},title:`${i}%`}),n.jsx("span",{style:{fontSize:9,color:"var(--text-3)",fontWeight:600},children:rh[l]})]},l))})]})}function Nn({label:t,value:e,c:r,soft:o,flame:s}){return n.jsxs("div",{style:{...A.stat,background:o},children:[n.jsx("div",{style:A.statLabel,children:t}),n.jsxs("div",{style:{...A.statValue,color:r},children:[s&&n.jsx(Tn,{size:15})," ",e]})]})}const A={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:230,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",padding:"20px 12px",display:"flex",flexDirection:"column",gap:3,overflowY:"auto"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.18)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)",boxShadow:"none"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.38)",zIndex:20},sideTop:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 4px"},closeBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",marginBottom:8},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700,padding:"0 6px 14px"},sideItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"9px 10px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:500,color:"var(--text-2)",textAlign:"left"},sideItemOn:{background:"var(--hover)",fontWeight:600},sideLabel:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},sideCount:{fontSize:11,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:10,padding:"1px 7px"},sideStreak:{display:"flex",alignItems:"center",gap:3,fontSize:11,fontWeight:600,color:"#C2773B"},sideDot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},sideDivider:{height:1,background:"var(--border)",margin:"8px 6px"},addBox:{padding:"10px 6px",display:"flex",flexDirection:"column",gap:6},sideInput:{border:"1px solid var(--border)",borderRadius:7,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},sideAddBtn:{border:"none",background:"#4C9A6B",color:"#fff",height:30,padding:"0 12px",borderRadius:7,cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontSize:13,fontFamily:"inherit"},sideCancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:30,height:30,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},sideNewBtn:{display:"flex",alignItems:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",borderRadius:8,padding:"8px 10px",fontSize:12.5,color:"var(--text-3)",fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginTop:6,justifyContent:"center"},main:{flex:1,padding:"26px",overflowX:"hidden",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:200},mainHead:{marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:5,display:"flex",alignItems:"center"},h1:{fontSize:27,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},actionBtn:{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:500,color:"var(--text-2)",border:"1px solid var(--border)",background:"var(--surface)",padding:"5px 10px",borderRadius:7,cursor:"pointer",fontFamily:"inherit"},weekCard:{background:"var(--surface)",borderRadius:12,padding:"8px 14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"auto"},weekHeadRow:{display:"flex",alignItems:"flex-end",padding:"10px 0",borderBottom:"1px solid var(--border)",minWidth:480},weekNameCol:{width:160,flexShrink:0,display:"flex",alignItems:"center",gap:8},weekDayHead:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2},weekDayName:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekDayNum:{fontSize:12,fontWeight:600,color:"var(--text-2)",width:22,height:22,display:"grid",placeItems:"center",borderRadius:"50%"},weekDayToday:{background:"var(--accent-strong)",color:"#fff"},weekStreakCol:{width:64,flexShrink:0,textAlign:"center",fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekRow:{display:"flex",alignItems:"center",padding:"9px 0",borderBottom:"1px solid #F4F2EC",minWidth:480},weekHabitName:{fontSize:13,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},weekCell:{flex:1,display:"grid",placeItems:"center"},typeBadge:{fontSize:10,color:"var(--text-3)",background:"var(--hover)",padding:"1px 6px",borderRadius:8,fontWeight:600},tick:{width:26,height:26,borderRadius:7,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",padding:0},tickFuture:{opacity:.4,cursor:"not-allowed",borderStyle:"dashed"},streakPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,fontWeight:700,padding:"3px 9px",borderRadius:12},tinyBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:"2px 3px",display:"grid",placeItems:"center",borderRadius:4},statStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:10,marginBottom:18},stat:{borderRadius:10,padding:"13px 14px"},statLabel:{fontSize:11,fontWeight:600,color:"var(--text-2)",marginBottom:5},statValue:{fontSize:19,fontWeight:700,display:"flex",alignItems:"center",gap:5,fontFamily:"'Fraunces',Georgia,serif"},monthCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},monthTitle:{fontSize:14,fontWeight:700,marginBottom:12,fontFamily:"'Fraunces',Georgia,serif"},monthDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:8},monthDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},monthGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6},monthDay:{aspectRatio:"1",border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",display:"grid",placeItems:"center"},monthDayFuture:{opacity:.4,cursor:"not-allowed",background:"var(--surface-2)"},noteIndicator:{position:"absolute",top:3,right:3,width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},cellNoteBubble:{position:"absolute",top:2,right:"calc(50% - 16px)",width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},countBadge:{position:"absolute",bottom:2,right:2,minWidth:13,height:13,padding:"0 2px",borderRadius:7,color:"#fff",fontSize:9,fontWeight:700,display:"grid",placeItems:"center",lineHeight:1},counterBtn:{width:44,height:44,borderRadius:"50%",border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:24,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1},chainLine:{position:"absolute",top:"calc(50% - 3px)",left:0,right:0,height:6,zIndex:0,opacity:.9},chainBanner:{display:"flex",alignItems:"center",gap:8,borderRadius:10,padding:"10px 14px",marginBottom:14,fontSize:12.5,fontWeight:700,fontFamily:"'Inter',system-ui,sans-serif"},navBar:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:16},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},navLabel:{fontSize:13,fontWeight:700,color:"var(--text)",minWidth:180,textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},noteBox:{background:"var(--surface)",borderRadius:10,padding:14,marginTop:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},longPressMenu:{position:"absolute",top:"100%",left:0,zIndex:50,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 4px 16px rgba(0,0,0,0.12)",padding:"4px 0",minWidth:140},menuItem:{display:"flex",alignItems:"center",gap:8,width:"100%",border:"none",background:"none",padding:"8px 14px",fontSize:13,color:"var(--text)",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:100,display:"grid",placeItems:"center"},modal:{background:"var(--surface)",borderRadius:14,padding:24,width:320,maxWidth:"90vw",display:"flex",flexDirection:"column",gap:8},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:700,fontSize:16,fontFamily:"'Fraunces',Georgia,serif",marginBottom:6},modalLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4}},Kl=[{id:1,label:"Rough",emoji:"😣",color:"#C2536B"},{id:2,label:"Low",emoji:"🙁",color:"#C2773B"},{id:3,label:"Okay",emoji:"😐",color:"#C9A227"},{id:4,label:"Good",emoji:"🙂",color:"#4C9A6B"},{id:5,label:"Great",emoji:"😄",color:"#3A7CA5"}],fh=t=>Kl.find(e=>e.id===t),Pi=[{id:"wins",label:"Wins",hint:"What went well today?",icon:Hr,color:"#C9A227"},{id:"grateful",label:"Grateful for",hint:"1–3 things",icon:hf,color:"#C2536B"},{id:"mattered",label:"What mattered",hint:"The point of today",icon:Za,color:"#3A7CA5"},{id:"letgo",label:"Letting go of",hint:"Offload what's draining",icon:Lf,color:"#8268B0"},{id:"tomorrow",label:"Tomorrow's one thing",hint:"A single priority",icon:Ff,color:"#4C9A6B"}],hh=()=>new Date().toISOString().slice(0,10),Ni=t=>new Date(t+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"});function vh(){const t=hh(),[e,r]=[new Date().getFullYear(),new Date().getMonth()+1],[o,s]=f.useState(null),i=o||t,l=i===t,[a,d]=f.useState(null),[g,m]=f.useState({}),[h,p]=f.useState(Object.fromEntries(Pi.map(B=>[B.id,""]))),w=f.useCallback(async B=>{const F=await O.getJournalEntry(B);d(F)},[]);f.useCallback(async()=>{const B=await O.getJournalHistory(e,r);m(B)},[e,r]);const y=f.useCallback(async()=>{const[B,F]=await Promise.all([O.getJournalEntry(i),O.getJournalHistory(e,r)]);d(B),m(F)},[i,e,r]);f.useEffect(()=>{y()},[y]);const j=async B=>{l&&(await O.updateJournalMood(i,B),y())},T=async B=>{if(!l)return;const F=h[B].trim();F&&(await O.addJournalBullet(i,B,F),p(q=>({...q,[B]:""})),w(i))},b=async B=>{await O.deleteJournalBullet(B),w(i)},c=B=>{s(B===t?null:B),p(Object.fromEntries(Pi.map(F=>[F.id,""])))};if(!a)return n.jsx("div",{style:{padding:28,color:"var(--text-3)"},children:"Loading…"});const u=a.mood!==null,k=(()=>{let B=0;const F=new Date(t);if(g[t]||l&&u)B=1,F.setDate(F.getDate()-1);else return 0;for(;;){const M=F.toISOString().slice(0,10);if(g[M])B++,F.setDate(F.getDate()-1);else break}return B})(),x=Object.values(a.bullets||{}).reduce((B,F)=>B+F.length,0),D=new Date(e,r,0).getDate(),W=new Date(e,r-1,1).getDay(),z=W===0?6:W-1;return n.jsxs("div",{style:mt.page,children:[n.jsxs("div",{style:mt.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:mt.eyebrow,children:"Anvil · Journal"}),!l&&n.jsxs("button",{style:mt.backBtn,onClick:()=>s(null),children:[n.jsx(zn,{size:14})," Back to Today"]}),n.jsx("h1",{style:mt.h1,children:l?"Today":Ni(i)}),l&&n.jsx("div",{style:mt.date,children:Ni(t)})]}),n.jsxs("div",{style:mt.streakBox,children:[n.jsx(Tn,{size:16,color:"#C2773B"}),n.jsx("span",{style:mt.streakNum,children:k}),n.jsx("span",{style:mt.streakLabel,children:"day streak"})]})]}),n.jsxs("div",{style:mt.card,children:[n.jsxs("div",{style:mt.cardTitle,children:["How ",l?"are":"were"," you?"]}),n.jsx("div",{style:mt.moodRow,children:Kl.map(B=>{const F=a.mood===B.id;return n.jsxs("button",{onClick:()=>j(B.id),disabled:!l,style:{...mt.moodBtn,cursor:l?"pointer":"default",...F?{background:B.color,borderColor:B.color,transform:"translateY(-2px)"}:{},...!l&&!F?{opacity:.55}:{}},children:[n.jsx("span",{style:mt.moodEmoji,children:B.emoji}),n.jsx("span",{style:{...mt.moodLabel,color:F?"#fff":"#6B675E"},children:B.label})]},B.id)})})]}),Pi.map(B=>{var M;const F=B.icon,q=((M=a.bullets)==null?void 0:M[B.id])||[];return n.jsxs("div",{style:mt.card,children:[n.jsxs("div",{style:mt.sectionHead,children:[n.jsx("span",{style:{...mt.sectionIcon,background:`${B.color}1A`,color:B.color},children:n.jsx(F,{size:15})}),n.jsxs("div",{children:[n.jsx("div",{style:mt.cardTitle,children:B.label}),n.jsx("div",{style:mt.sectionHint,children:B.hint})]})]}),n.jsxs("ul",{style:mt.bulletList,children:[q.map(C=>n.jsxs("li",{style:mt.bullet,children:[n.jsx("span",{style:{...mt.bulletDot,background:B.color}}),n.jsx("span",{style:mt.bulletText,children:C.text}),l&&n.jsx("button",{onClick:()=>b(C.id),style:mt.bulletDel,children:n.jsx(ft,{size:13})})]},C.id)),!l&&q.length===0&&n.jsx("li",{style:mt.sectionHint,children:"Nothing written."})]}),l&&n.jsxs("div",{style:mt.addRow,children:[n.jsx("input",{placeholder:"Add a point…",value:h[B.id],onChange:C=>p(U=>({...U,[B.id]:C.target.value})),onKeyDown:C=>C.key==="Enter"&&T(B.id),style:mt.input}),n.jsx("button",{onClick:()=>T(B.id),style:{...mt.addBtn,background:B.color},children:n.jsx(de,{size:16})})]})]},B.id)}),n.jsxs("div",{style:mt.card,children:[n.jsxs("div",{style:mt.cardTitle,children:[new Date(e,r-1).toLocaleDateString("en-US",{month:"long",year:"numeric"})," · Mood history",n.jsx("span",{style:{fontSize:11,color:"var(--text-3)",fontWeight:400,marginLeft:8},children:"tap a day to view"})]}),n.jsx("div",{style:mt.calDow,children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(B=>n.jsx("div",{style:mt.calDowCell,children:B},B))}),n.jsxs("div",{style:mt.calGrid,children:[Array.from({length:z}).map((B,F)=>n.jsx("div",{},`p${F}`)),Array.from({length:D},(B,F)=>F+1).map(B=>{const F=`${e}-${String(r).padStart(2,"0")}-${String(B).padStart(2,"0")}`,q=F===t&&a.mood?a.mood:g[F],M=q?fh(q):null,C=F>t,U=F===i;return n.jsx("button",{onClick:()=>!C&&c(F),disabled:C,style:{...mt.calDay,background:M?M.color:C?"var(--surface-2)":"var(--surface)",borderColor:U?"var(--accent-strong)":"var(--border)",borderWidth:U?2:1,color:M?"#fff":"var(--text-3)",opacity:C?.5:1,cursor:C?"not-allowed":"pointer",outline:U?"2px solid var(--accent-strong)":"none",outlineOffset:1},title:M?M.label:F,children:M?M.emoji:B},B)})]}),n.jsx("div",{style:mt.legend,children:Kl.map(B=>n.jsxs("span",{style:mt.legendItem,children:[n.jsx("span",{style:{...mt.legendDot,background:B.color}})," ",B.label]},B.id))})]}),n.jsx("div",{style:mt.footer,children:l?u?`Mood set · ${x} point${x===1?"":"s"} written today`:"Tap a mood to log today and keep your streak":`Viewing ${Ni(i)} · past entries are read-only`})]})}const mt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},backBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",background:"none",color:"#3A7CA5",fontSize:12.5,fontWeight:600,cursor:"pointer",padding:"0 0 6px",fontFamily:"inherit"},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},date:{fontSize:13,color:"var(--text-3)",marginTop:4},streakBox:{display:"flex",alignItems:"center",gap:6,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"8px 14px"},streakNum:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"#C2773B"},streakLabel:{fontSize:11,color:"var(--text-3)",fontWeight:500},card:{background:"var(--surface)",borderRadius:12,padding:"18px 20px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},cardTitle:{fontSize:14,fontWeight:700,marginBottom:12,color:"var(--text)"},moodRow:{display:"flex",gap:8,flexWrap:"wrap"},moodBtn:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,border:"2px solid var(--border)",background:"var(--surface)",borderRadius:10,padding:"10px 12px",cursor:"pointer",flex:"1 1 60px",transition:"transform 0.1s"},moodEmoji:{fontSize:22},moodLabel:{fontSize:11,fontWeight:600},sectionHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:10},sectionIcon:{width:32,height:32,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},sectionHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},bulletList:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6,marginBottom:10},bullet:{display:"flex",alignItems:"center",gap:8,fontSize:13.5,lineHeight:1.4},bulletDot:{width:6,height:6,borderRadius:"50%",flexShrink:0},bulletText:{flex:1},bulletDel:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},addRow:{display:"flex",gap:8},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",outline:"none"},addBtn:{width:36,height:36,border:"none",borderRadius:8,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:12},calDay:{aspectRatio:"1",border:"1px solid var(--border)",borderRadius:7,fontSize:13,display:"grid",placeItems:"center",fontWeight:500,fontFamily:"inherit"},legend:{display:"flex",gap:10,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)"},legendDot:{width:8,height:8,borderRadius:"50%",display:"inline-block"},footer:{fontSize:12.5,color:"var(--text-3)",textAlign:"center",marginTop:8,fontStyle:"italic"}},_e=[{id:"D",label:"Data",color:"#3A7CA5",soft:"rgba(58,124,165,0.10)",prompt:"What did you read/watch? Log the raw source and a quick note.",hint:"e.g. 'Atomic Habits ch.1 — habits are systems not goals'"},{id:"I",label:"Information",color:"#8268B0",soft:"rgba(130,104,176,0.10)",prompt:"What did you actually understand from it? In your own words.",hint:"e.g. 'Small 1% improvements compound into massive change over time'"},{id:"K",label:"Knowledge",color:"#C9A227",soft:"rgba(201,162,39,0.10)",prompt:"How will this specifically improve your life? Connect it to your goals.",hint:"e.g. 'I will improve my morning workout habit by 1% each week'"},{id:"W",label:"Wisdom",color:"#4C9A6B",soft:"rgba(76,154,107,0.10)",prompt:"How have you implemented it? What changed?",hint:"e.g. 'I've not missed a workout in 3 weeks using the 1% rule'"}],wg=t=>_e.findIndex(e=>e.id===t),Xl=[{id:"book",label:"Book",icon:db},{id:"video",label:"Video",icon:Pf},{id:"article",label:"Article",icon:Ka}],jg=t=>Xl.find(e=>e.id===t)||Xl[0],Oi={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"};function yh(){var Z;const[t,e]=f.useState([]),[r,o]=f.useState(null),[s,i]=f.useState("ALL"),[l,a]=f.useState(!1),[d,g]=f.useState(null),[m,h]=f.useState({title:"",type:"book",pillar:"Academic",note:""}),[p,w]=f.useState({}),[y,j]=f.useState(null),[T,b]=f.useState(null),c=f.useCallback(async()=>{try{const E=await O.getSkills();e(E);const S={};E.forEach(N=>{S[N.id]=Object.fromEntries(_e.map(V=>[V.id,""]))}),w(N=>{const V={...S};return E.forEach(L=>{N[L.id]&&(V[L.id]={...S[L.id],...N[L.id]})}),V})}catch(E){console.error(E)}},[]);f.useEffect(()=>{c()},[c]);const u=t.find(E=>E.id===r),k=u?wg(u.stage):-1,x=async(E,S)=>{var V;const N=(((V=p[E])==null?void 0:V[S])??"").trim();N&&(await O.addSkillNote(E,S,N),w(L=>({...L,[E]:{...L[E],[S]:""}})),c())},D=async E=>{await O.deleteSkillNote(E),c()},W=async()=>{!u||!(T!=null&&T.trim())||(await O.updateSkill(u.id,{title:T.trim()}),b(null),c())},z=async()=>{!y||!y.text.trim()||(await O.updateSkillNote(y.id,y.text.trim()),j(null),c())},B=async E=>{await O.toggleSkillNote(E),c()},F=async(E,S)=>{t.find(V=>V.id===E)&&(S==="W"&&g(E),await O.completeSkillStage(E,S),c())},q=async()=>{if(!m.title.trim())return;const E=await O.createSkill({pillar:m.pillar,title:m.title.trim(),source_type:m.type,note_d:m.note.trim()});a(!1),h({title:"",type:"book",pillar:"Academic",note:""}),o(E.id),c()},M=async E=>{await O.deleteSkill(E),r===E&&o(null),c()},C=s==="ALL"?t:t.filter(E=>E.stage===s),U=t.filter(E=>E.stage==="W").length,ut=!!u;return n.jsxs("div",{style:J.page,children:[d&&n.jsx("div",{style:J.celebOverlay,children:n.jsxs("div",{style:J.celebBox,children:[n.jsx("div",{style:J.celebEmoji,children:"🏆"}),n.jsx("div",{style:J.celebTitle,children:"Wisdom unlocked!"}),n.jsx("div",{style:J.celebSub,children:"You've implemented this knowledge — that's rare and real."}),n.jsx("button",{onClick:()=>g(null),style:J.celebBtn,children:"Continue"})]})}),n.jsxs("div",{style:J.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:J.eyebrow,children:"Anvil · Skills"}),n.jsx("h1",{style:J.h1,children:"DIKW Skills"}),n.jsx("div",{style:J.subhead,children:"Data → Information → Knowledge → Wisdom"})]}),n.jsxs("div",{style:J.headRight,children:[n.jsxs("div",{style:J.wisdomBadge,children:[n.jsx(Hr,{size:14,color:"#C9A227"})," ",U," Wisdom",U!==1?"s":""]}),n.jsxs("button",{onClick:()=>{a(!0),o(null)},style:J.addSkillBtn,children:[n.jsx(de,{size:15})," Add skill"]})]})]}),n.jsx("div",{style:J.filterBar,children:["ALL",..._e.map(E=>E.id)].map(E=>{const S=_e.find(V=>V.id===E),N=s===E;return n.jsx("button",{onClick:()=>i(E),style:{...J.filterBtn,...N?{background:S?S.color:"var(--accent-strong)",color:"#fff",borderColor:"transparent"}:{}},children:S?`${E} · ${S.label}`:"All"},E)})}),n.jsxs("div",{style:{...J.layout,gridTemplateColumns:ut?"1fr 1fr":"1fr"},children:[n.jsxs("div",{style:J.cardList,children:[l&&n.jsxs("div",{style:{...J.skillCard,border:"2px dashed #3A7CA5"},children:[n.jsx("div",{style:J.cardTitle,children:"New skill"}),n.jsx("input",{placeholder:"Title (book / video / article name)",value:m.title,onChange:E=>h(S=>({...S,title:E.target.value})),onKeyDown:E=>E.key==="Enter"&&q(),style:J.input,autoFocus:!0}),n.jsxs("div",{style:J.addRow,children:[n.jsx("select",{value:m.type,onChange:E=>h(S=>({...S,type:E.target.value})),style:J.select,children:Xl.map(E=>n.jsx("option",{value:E.id,children:E.label},E.id))}),n.jsx("select",{value:m.pillar,onChange:E=>h(S=>({...S,pillar:E.target.value})),style:J.select,children:Object.keys(Oi).map(E=>n.jsx("option",{children:E},E))})]}),n.jsx("input",{placeholder:"First note (what did you read/watch?)",value:m.note,onChange:E=>h(S=>({...S,note:E.target.value})),style:J.input}),n.jsxs("div",{style:J.addRow,children:[n.jsxs("button",{onClick:q,style:J.saveBtn,children:[n.jsx(wt,{size:14})," Save"]}),n.jsxs("button",{onClick:()=>a(!1),style:J.cancelBtn,children:[n.jsx(ft,{size:14})," Cancel"]})]})]}),C.map(E=>{const S=wg(E.stage),N=_e[S],V=jg(E.type),L=E.stage==="W",st=r===E.id;return n.jsxs("div",{onClick:()=>o(st?null:E.id),style:{...J.skillCard,...st?{borderColor:N.color,borderWidth:2}:{},...L?{background:"rgba(76,154,107,0.05)"}:{}},children:[n.jsxs("div",{style:J.skillCardTop,children:[n.jsxs("div",{style:J.skillMeta,children:[n.jsx("span",{style:{color:Oi[E.pillar]},children:n.jsx(V.icon,{size:13})}),n.jsx("span",{style:{...J.pillarDot,background:Oi[E.pillar]}}),n.jsxs("span",{style:J.srcLabel,children:[V.label," · ",E.pillar]})]}),n.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[L&&n.jsx(Bo,{size:14,color:"#4C9A6B"}),n.jsx("button",{onClick:v=>{v.stopPropagation(),M(E.id)},style:J.ghostBtn,children:n.jsx(ft,{size:13})})]})]}),n.jsx("div",{style:J.skillTitle,children:E.title}),n.jsxs("div",{style:J.track,children:[_e.map((v,P)=>{var Bt;const gt=P<S,dt=P===S,vt=(Bt=E.completed_stages)==null?void 0:Bt[v.id];return n.jsxs("div",{style:J.trackItem,children:[n.jsxs("div",{style:{...J.trackDot,background:gt||vt||dt?v.color:"var(--border)",boxShadow:dt?`0 0 0 3px ${v.color}33`:"none"},children:[(gt||dt&&vt)&&n.jsx(wt,{size:9,color:"#fff",strokeWidth:3}),dt&&!vt&&n.jsx("span",{style:J.trackCurrent,children:v.id}),!gt&&!dt&&n.jsx(pg,{size:8,color:"#B5B1A7"})]}),P<_e.length-1&&n.jsx("div",{style:{...J.trackLine,background:gt?_e[P+1].color:"var(--border)"}})]},v.id)}),n.jsx("span",{style:{...J.stageTag,background:N.soft,color:N.color},children:N.label})]})]},E.id)}),C.length===0&&!l&&n.jsx("div",{style:J.empty,children:"No skills at this stage yet."})]}),u&&n.jsxs("div",{style:J.detail,children:[n.jsxs("div",{style:J.detailHead,children:[n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsxs("div",{style:J.eyebrow,children:[jg(u.type).label," · ",u.pillar]}),T!==null?n.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginTop:4},children:[n.jsx("input",{autoFocus:!0,value:T,onChange:E=>b(E.target.value),onKeyDown:E=>{E.key==="Enter"&&W(),E.key==="Escape"&&b(null)},style:{...J.input,fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:0,flex:1}}),n.jsx("button",{onClick:W,style:{...J.noteAddBtn,background:"#4C9A6B",width:30,height:30},children:n.jsx(wt,{size:13})}),n.jsx("button",{onClick:()=>b(null),style:{...J.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:30,height:30},children:n.jsx(ft,{size:13})})]}):n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx("div",{style:J.detailTitle,children:u.title}),n.jsx("button",{onClick:()=>b(u.title),style:J.ghostBtn,title:"Edit name",children:n.jsx(Fe,{size:13})})]})]}),n.jsx("button",{onClick:()=>{o(null),b(null)},style:J.closeBtn,children:n.jsx(ft,{size:16})})]}),_e.map((E,S)=>{var gt,dt,vt;const N=S<=k,V=S===k,L=S<k||((gt=u.completed_stages)==null?void 0:gt[E.id]),st=S>k,v=((dt=u.notes)==null?void 0:dt[E.id])||[],P=((vt=p[u.id])==null?void 0:vt[E.id])??"";return n.jsxs("div",{style:{...J.stageBlock,...N?{borderColor:E.color}:{},opacity:st?.45:1},children:[n.jsxs("div",{style:J.stageBlockHead,children:[n.jsx("div",{style:{...J.stageLetter,background:N?E.color:"var(--border)",color:N?"#fff":"#9A968C"},children:L&&!V?n.jsx(wt,{size:12,color:"#fff",strokeWidth:3}):st?n.jsx(pg,{size:11,color:"#9A968C"}):E.id}),n.jsxs("div",{style:{flex:1},children:[n.jsx("div",{style:{...J.stageName,color:N?E.color:"#9A968C"},children:E.label}),N&&n.jsx("div",{style:J.stagePrompt,children:E.prompt})]}),L&&!V&&n.jsx("span",{style:{...J.doneBadge,color:E.color,background:E.soft},children:"Done"})]}),N&&(()=>{var jt,It;const Bt=E.id==="W",_=v.length>0&&v.every(zt=>zt.done),ot=Bt?_:v.length>0;return n.jsxs(n.Fragment,{children:[v.length>0&&n.jsx("ul",{style:J.noteList,children:v.map(zt=>n.jsxs("li",{style:J.noteItem,children:[Bt?n.jsx("button",{onClick:()=>B(zt.id),style:{...J.checkBox,...zt.done?{background:E.color,borderColor:E.color}:{}},children:zt.done&&n.jsx(wt,{size:11,color:"#fff",strokeWidth:3})}):n.jsx("span",{style:{...J.noteDot,background:E.color}}),(y==null?void 0:y.id)===zt.id?n.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[n.jsx("input",{autoFocus:!0,value:y.text,onChange:At=>j(nr=>({...nr,text:At.target.value})),onKeyDown:At=>{At.key==="Enter"&&z(),At.key==="Escape"&&j(null)},style:{...J.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),n.jsx("button",{onClick:z,style:{...J.noteAddBtn,background:E.color,width:28,height:28},children:n.jsx(wt,{size:12})}),n.jsx("button",{onClick:()=>j(null),style:{...J.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:n.jsx(ft,{size:12})})]}):n.jsx("span",{style:{...J.noteText,...Bt&&zt.done?{textDecoration:"line-through",color:"var(--text-3)"}:{}},children:zt.text}),(y==null?void 0:y.id)!==zt.id&&n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>j({id:zt.id,text:zt.text}),style:J.ghostBtn,children:n.jsx(Fe,{size:12})}),n.jsx("button",{onClick:()=>D(zt.id),style:J.ghostBtn,children:n.jsx(ft,{size:12})})]})]},zt.id))}),v.length===0&&n.jsx("div",{style:J.noNotes,children:Bt?"Add the steps to implement this — check each off as you do it.":`No notes yet — ${E.hint}`}),n.jsxs("div",{style:J.noteAddRow,children:[n.jsx("input",{placeholder:Bt?"Add a step to implement…":`Add a ${E.label} note…`,value:P,onChange:zt=>w(At=>({...At,[u.id]:{...At[u.id],[E.id]:zt.target.value}})),onKeyDown:zt=>zt.key==="Enter"&&x(u.id,E.id),style:J.noteInput}),n.jsx("button",{onClick:()=>x(u.id,E.id),style:{...J.noteAddBtn,background:E.color},children:n.jsx(de,{size:14})})]}),V&&!((jt=u.completed_stages)!=null&&jt[E.id])&&n.jsxs(n.Fragment,{children:[Bt&&v.length>0&&!_&&n.jsxs("div",{style:J.checklistHint,children:[v.filter(zt=>zt.done).length,"/",v.length," done — check all steps to complete Wisdom"]}),n.jsxs("button",{onClick:()=>F(u.id,E.id),disabled:!ot,style:{...J.advanceBtn,background:ot?E.color:"#C3BFB5",marginTop:10,cursor:ot?"pointer":"not-allowed"},children:[n.jsx(wt,{size:14}),Bt?"Mark Wisdom complete":`Complete ${E.label} → ${(It=_e[S+1])==null?void 0:It.label}`]})]})]})})()]},E.id)}),u.stage==="W"&&((Z=u.completed_stages)==null?void 0:Z.W)&&n.jsxs("div",{style:J.wisdomDone,children:[n.jsx(Hr,{size:16,color:"#4C9A6B"})," Wisdom achieved — implemented in your life"]})]})]})]})}const J={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box",position:"relative"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},wisdomBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addSkillBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},filterBar:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16},filterBtn:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},layout:{display:"grid",gap:12},cardList:{display:"flex",flexDirection:"column",gap:10},skillCard:{background:"var(--surface)",borderRadius:12,padding:"14px",border:"1.5px solid var(--border)",cursor:"pointer",boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},skillCardTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},skillMeta:{display:"flex",alignItems:"center",gap:6},pillarDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},srcLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)"},skillTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",marginBottom:12},cardTitle:{fontSize:13,fontWeight:700,marginBottom:10},track:{display:"flex",alignItems:"center"},trackItem:{display:"flex",alignItems:"center"},trackDot:{width:22,height:22,borderRadius:"50%",display:"grid",placeItems:"center",flexShrink:0},trackCurrent:{fontSize:9,fontWeight:800,color:"#fff"},trackLine:{width:24,height:3,borderRadius:2},stageTag:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,marginLeft:10},detail:{background:"var(--surface)",borderRadius:14,padding:"18px 16px",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",border:"1.5px solid var(--border)",alignSelf:"start"},detailHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16},detailTitle:{fontSize:18,fontWeight:700,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},stageBlock:{border:"1.5px solid var(--border)",borderRadius:10,padding:"12px 13px",marginBottom:10},stageBlockHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:8},stageLetter:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",fontSize:13,fontWeight:800,flexShrink:0},stageName:{fontSize:13,fontWeight:700},stagePrompt:{fontSize:11.5,color:"var(--text-2)",marginTop:2,lineHeight:1.4},doneBadge:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10,marginLeft:"auto",flexShrink:0},noteList:{margin:"0 0 8px 0",padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6},noteItem:{display:"flex",alignItems:"flex-start",gap:8,fontSize:13,lineHeight:1.4},noteDot:{width:6,height:6,borderRadius:"50%",flexShrink:0,marginTop:5},checkBox:{width:18,height:18,borderRadius:5,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginTop:1,padding:0},checklistHint:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,marginTop:10,textAlign:"center"},noteText:{flex:1,color:"var(--text)"},noNotes:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",marginBottom:8},noteAddRow:{display:"flex",gap:6},noteInput:{flex:1,border:"1px solid var(--border)",borderRadius:7,padding:"7px 10px",fontSize:13,fontFamily:"inherit",outline:"none"},noteAddBtn:{width:32,height:32,border:"none",borderRadius:7,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},advanceBtn:{display:"flex",alignItems:"center",gap:8,border:"none",color:"#fff",padding:"10px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},wisdomDone:{display:"flex",alignItems:"center",gap:8,justifyContent:"center",fontSize:13.5,fontWeight:700,color:"#4C9A6B",padding:12,background:"rgba(76,154,107,0.08)",borderRadius:10,marginTop:4},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box",marginBottom:8},select:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:12.5,fontFamily:"inherit",flex:1},addRow:{display:"flex",gap:8,marginBottom:8},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{fontSize:13,color:"var(--text-3)",padding:"32px 12px",textAlign:"center"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.55)",zIndex:50,display:"grid",placeItems:"center"},celebBox:{background:"var(--surface)",borderRadius:20,padding:"40px 32px",textAlign:"center",maxWidth:320,boxShadow:"0 8px 40px rgba(0,0,0,0.18)"},celebEmoji:{fontSize:52,marginBottom:12},celebTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:8},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:"#4C9A6B",color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},$i=[{id:"aarti",title:"Aarti",html:`<h1>॥ गणपतीची आरती ॥</h1><br/>
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
      </div>`}];function xh(){const[t,e]=f.useState(()=>window.innerWidth<720);return f.useEffect(()=>{const r=()=>e(window.innerWidth<720);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),t}const kh=t=>new Promise((e,r)=>{const o=new FileReader;o.onload=()=>{const s=new Image;s.onload=()=>{let{width:l,height:a}=s;l>a&&l>1400?(a=a*1400/l,l=1400):a>1400&&(l=l*1400/a,a=1400);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(s,0,0,l,a),e(d.toDataURL("image/jpeg",.85))},s.onerror=r,s.src=o.result},o.onerror=r,o.readAsDataURL(t)});function Sg({base:t,count:e,images:r}){const o=r&&r.length?r:null,s=o?o.length:e,[i,l]=f.useState(0);if(!s)return null;const a=i%s,d=o?o[a]:`${t}${a+1}.jpg`;return n.jsxs("div",{style:{maxWidth:560,margin:"0 auto"},children:[n.jsx("div",{style:at.carouselFrame,children:n.jsx("img",{src:d,alt:`Page ${a+1}`,style:at.carouselImg})}),n.jsxs("div",{style:at.carouselNav,children:[n.jsxs("button",{onClick:()=>l(g=>(g-1+s)%s),style:at.carouselBtn,children:[n.jsx(zn,{size:16})," Prev"]}),n.jsxs("span",{style:at.carouselCount,children:[o?"":"Adhyay ",a+1," / ",s]}),n.jsxs("button",{onClick:()=>l(g=>(g+1)%s),style:at.carouselBtn,children:["Next ",n.jsx(Yr,{size:16})]})]})]})}function wh(){const t=xh(),[e,r]=f.useState(!1),[o,s]=f.useState([]),[i,l]=f.useState("dss"),[a,d]=f.useState(!1),[g,m]=f.useState({title:"",type:"text",content:"",images:[]}),h=f.useCallback(()=>O.getDecks().then(s).catch(()=>{}),[]);f.useEffect(()=>{h()},[h]);const p=i.startsWith("deck-")?Number(i.slice(5)):null,w=p!=null?o.find(z=>z.id===p):null,y=w?null:$i.find(z=>z.id===i)||(p==null?$i[0]:null),j=a?"New deck":w?w.title:(y==null?void 0:y.title)||"",T=z=>{l(z),d(!1),t&&r(!1)},b=()=>{d(!0),m({title:"",type:"text",content:"",images:[]}),t&&r(!1)},c=async z=>{const B=Array.from(z.target.files||[]),F=[];for(const q of B)try{F.push(await kh(q))}catch{}m(q=>({...q,images:[...q.images,...F]})),z.target.value=""},u=z=>m(B=>({...B,images:B.images.filter((F,q)=>q!==z)})),k=g.title.trim()&&(g.type==="text"?g.content.trim():g.images.length>0),x=async()=>{if(!k)return;const z=await O.createDeck({title:g.title.trim(),type:g.type,content:g.type==="text"?g.content:"",images:g.type==="images"?g.images:[]});d(!1),await h(),l(`deck-${z.id}`)},D=async z=>{await O.deleteDeck(z),i===`deck-${z}`&&l("dss"),h()},W={...at.sidebar,...t?at.sidebarOverlay:{},...t&&!e?at.sidebarHidden:{}};return n.jsxs("div",{style:at.shell,children:[n.jsx("style",{children:jh}),t&&e&&n.jsx("div",{style:at.backdrop,onClick:()=>r(!1)}),n.jsxs("aside",{style:W,children:[n.jsxs("div",{style:at.sideHead,children:[n.jsx("div",{style:at.brand,children:"Anvil · Spiritual"}),t&&n.jsx("button",{onClick:()=>r(!1),style:at.iconBtn,children:n.jsx(ft,{size:17})})]}),n.jsxs("div",{style:at.sideScroll,children:[$i.map(z=>n.jsx("button",{onClick:()=>T(z.id),style:{...at.sideItem,...z.id===i&&!a?at.sideItemOn:{}},children:z.title},z.id)),n.jsx("div",{style:at.sideDivider,children:"My Decks"}),o.map(z=>n.jsx("button",{onClick:()=>T(`deck-${z.id}`),style:{...at.sideItem,...i===`deck-${z.id}`&&!a?at.sideItemOn:{}},children:z.title},z.id)),n.jsxs("button",{onClick:b,style:{...at.newDeckBtn,...a?at.sideItemOn:{}},children:[n.jsx(de,{size:14})," New deck"]})]})]}),n.jsxs("main",{style:at.main,children:[t&&n.jsxs("button",{onClick:()=>r(!0),style:at.hamburger,children:[n.jsx(Ja,{size:17}),n.jsx("span",{style:at.hamburgerLabel,children:j})]}),a?n.jsxs("div",{style:at.contentWrap,children:[n.jsx("div",{style:at.formTitle,children:"Create a deck"}),n.jsx("input",{placeholder:"Deck title (e.g. Vishnu Sahasranamam)",value:g.title,onChange:z=>m({...g,title:z.target.value}),style:at.input}),n.jsxs("div",{style:at.typeRow,children:[n.jsxs("button",{onClick:()=>m({...g,type:"text"}),style:{...at.typeBtn,...g.type==="text"?at.typeOn:{}},children:[n.jsx(Ka,{size:15})," Text"]}),n.jsxs("button",{onClick:()=>m({...g,type:"images"}),style:{...at.typeBtn,...g.type==="images"?at.typeOn:{}},children:[n.jsx(vf,{size:15})," Images"]})]}),g.type==="text"?n.jsx("textarea",{placeholder:"Paste or write the text (verses, chant, reflection)…",value:g.content,onChange:z=>m({...g,content:z.target.value}),style:at.textarea}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:at.imgGrid,children:[g.images.map((z,B)=>n.jsxs("div",{style:at.imgThumbWrap,children:[n.jsx("img",{src:z,alt:"",style:at.imgThumb}),n.jsx("button",{onClick:()=>u(B),style:at.imgDel,children:n.jsx(ft,{size:12})})]},B)),n.jsxs("label",{style:at.imgAdd,children:[n.jsx(Xa,{size:20}),n.jsx("span",{style:{fontSize:11},children:"Add images"}),n.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:c,style:{display:"none"}})]})]}),n.jsx("div",{style:at.hint,children:"Images show as a swipeable carousel, in the order added."})]}),n.jsxs("div",{style:at.formActions,children:[n.jsxs("button",{onClick:()=>d(!1),style:at.cancelBtn,children:[n.jsx(ft,{size:14})," Cancel"]}),n.jsxs("button",{onClick:x,disabled:!k,style:{...at.saveBtn,...k?{}:at.saveDisabled},children:[n.jsx(wt,{size:15})," Create deck"]})]})]}):w?n.jsxs("div",{style:at.contentWrap,children:[n.jsxs("div",{style:at.deckHead,children:[n.jsx("h2",{style:at.deckTitle,children:w.title}),n.jsx("button",{onClick:()=>D(w.id),style:at.deckDel,title:"Delete deck",children:n.jsx(Wf,{size:15})})]}),w.type==="images"?n.jsx(Sg,{images:w.images}):n.jsx("div",{style:at.deckText,children:w.content})]}):n.jsxs("div",{style:at.contentWrap,children:[(y==null?void 0:y.youtube)&&n.jsx("div",{style:at.videoFrame,children:n.jsx("iframe",{src:`https://www.youtube.com/embed/${y.youtube}`,title:y.title,style:at.video,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},y.youtube)}),y!=null&&y.carousel?n.jsx(Sg,{base:y.imageBase,count:y.carousel}):n.jsx("div",{className:"spiritual-content",dangerouslySetInnerHTML:{__html:(y==null?void 0:y.html)||""}})]})]})]})}const jh=`
.spiritual-content { font-family: 'Inter', system-ui, sans-serif; color: var(--text); line-height: 1.9; font-size: 16px; text-align: center; }
.spiritual-content h1 { font-family: 'Fraunces', Georgia, serif; font-size: 24px; color: #8268B0; margin: 8px 0 18px; letter-spacing: -0.01em; }
.spiritual-content h2 { font-family: 'Fraunces', Georgia, serif; font-size: 18px; color: #7A5EA8; margin: 20px 0 8px; }
.spiritual-content h3 { font-size: 15px; color: var(--text-3); text-transform: uppercase; letter-spacing: 0.06em; margin: 18px 0 6px; }
.spiritual-content b { color: #8268B0; }
.spiritual-content div { text-align: center; }
`,at={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:240,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.15)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.35)",zIndex:20},sideHead:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 14px 12px"},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700},sideScroll:{flex:1,overflowY:"auto",padding:"0 8px 16px"},sideItem:{display:"block",width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text-2)",textAlign:"left",marginBottom:2},sideItemOn:{background:"rgba(130,104,176,0.12)",color:"#8268B0",fontWeight:700},sideDivider:{fontSize:10,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--text-3)",padding:"14px 12px 6px",borderTop:"1px solid var(--border)",marginTop:10},newDeckBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",padding:"9px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,color:"var(--text-2)",marginTop:6},main:{flex:1,padding:"26px 22px",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:220},contentWrap:{background:"var(--surface)",borderRadius:14,padding:"26px 28px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",maxWidth:760,margin:"0 auto"},videoFrame:{position:"relative",width:"100%",maxWidth:600,margin:"0 auto 22px",aspectRatio:"16 / 9",borderRadius:12,overflow:"hidden",background:"#000"},video:{position:"absolute",inset:0,width:"100%",height:"100%",border:"none"},carouselFrame:{background:"var(--surface-2)",borderRadius:12,padding:8,border:"1px solid var(--border)"},carouselImg:{width:"100%",borderRadius:8,display:"block"},carouselNav:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:14},carouselBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},carouselCount:{fontSize:13,fontWeight:700,color:"#8268B0",fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"none",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,color:"var(--text-2)"},deckHead:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,marginBottom:16,borderBottom:"1px solid var(--border)",paddingBottom:12},deckTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",margin:0,color:"#8268B0"},deckDel:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",cursor:"pointer",display:"grid",placeItems:"center",padding:7,borderRadius:8,flexShrink:0},deckText:{fontSize:16,lineHeight:1.9,whiteSpace:"pre-wrap",color:"var(--text)",textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},formTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},typeRow:{display:"flex",gap:8,marginTop:12},typeBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},typeOn:{background:"#8268B0",color:"#fff",borderColor:"#8268B0"},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:200,resize:"vertical",lineHeight:1.7,marginTop:12},imgGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(90px, 1fr))",gap:8,marginTop:12},imgThumbWrap:{position:"relative",aspectRatio:"1",borderRadius:8,overflow:"hidden",border:"1px solid var(--border)"},imgThumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},imgDel:{position:"absolute",top:3,right:3,border:"none",background:"rgba(0,0,0,0.6)",color:"#fff",borderRadius:"50%",width:18,height:18,cursor:"pointer",display:"grid",placeItems:"center",padding:0},imgAdd:{aspectRatio:"1",border:"1px dashed var(--border)",borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4,cursor:"pointer",color:"var(--text-3)"},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:8},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"#8268B0",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"}},Ge={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},Cg=Object.keys(Ge),Sh=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Ch=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ih=()=>new Date().toISOString().slice(0,10),zh=(t,e)=>`${Ch[e-1]} ${t}`,Th=(t,e)=>{const r=new Date(t,e,0).getDate();return Array.from({length:r},(o,s)=>`${t}-${String(e).padStart(2,"0")}-${String(s+1).padStart(2,"0")}`)},Eh=(t,e)=>{const r=new Date(t,e-1,1).getDay();return r===0?6:r-1};function Bh(){const t=Ih(),[e,r]=f.useState(new Date().getFullYear()),[o,s]=f.useState(new Date().getMonth()+1),[i,l]=f.useState([]),[a,d]=f.useState([]),[g,m]=f.useState({}),[h,p]=f.useState(null),[w,y]=f.useState(!1),[j,T]=f.useState(!1),[b,c]=f.useState({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:t}),[u,k]=f.useState(null),x=f.useCallback(async()=>{const[v,P,gt]=await Promise.all([O.getTopics(),O.getDueToday(),O.getCalendar(e,o)]);l(v),d(P),m(gt)},[e,o]);f.useEffect(()=>{x()},[x]);const D=async v=>{await O.toggleReviewDone(v),x()},W=async()=>{const v=b.intervals.split(",").map(P=>parseInt(P.trim(),10)).filter(P=>!isNaN(P));!b.topic.trim()||v.length===0||(await O.createTopic({pillar:b.pillar,topic:b.topic.trim(),intervals:v,learned_date:b.learned_date||t}),c({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:t}),T(!1),x())},{deleteItem:z,toasts:B,handleUndo:F,handleDismiss:q}=En(O.deleteTopic,O.restoreTopic,x),M=(v,P)=>z(v,P),C=v=>k({id:v.id,topic:v.topic,pillar:v.pillar,intervals:(v.intervals||[]).join(", "),learned_date:v.learned_date}),U=async()=>{if(!u)return;const v=u.intervals.split(",").map(P=>parseInt(P.trim(),10)).filter(P=>!isNaN(P)&&P>=0);!u.topic.trim()||v.length===0||(await O.updateTopic(u.id,{topic:u.topic.trim(),pillar:u.pillar,learned_date:u.learned_date,intervals:v}),k(null),x())},ut=()=>{o===1?(r(v=>v-1),s(12)):s(v=>v-1),p(null)},Z=()=>{o===12?(r(v=>v+1),s(1)):s(v=>v+1),p(null)},E=i.filter(v=>!v.cemented),S=i.filter(v=>v.cemented),N=Th(e,o),V=Eh(e,o),L=f.useMemo(()=>{const v={};return i.forEach(P=>P.reviews.forEach(gt=>{gt.done||(v[gt.due_date]=v[gt.due_date]||[]).push({topic:P.topic,pillar:P.pillar,stage:gt.stage})})),v},[i]),st=h?i.flatMap(v=>v.reviews.filter(P=>P.due_date===h).map(P=>({...P,topic:v.topic,pillar:v.pillar,total:v.reviews.length}))):[];return n.jsxs("div",{style:X.page,children:[n.jsxs("div",{style:X.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:X.eyebrow,children:"Anvil · Revision"}),n.jsx("h1",{style:X.h1,children:"Spaced Repetition"})]}),n.jsxs("button",{onClick:()=>T(!0),style:X.addBtn,children:[n.jsx(de,{size:15})," Add topic"]})]}),j&&n.jsxs("div",{style:X.addBox,children:[n.jsx("input",{autoFocus:!0,placeholder:"What did you learn?",value:b.topic,onChange:v=>c(P=>({...P,topic:v.target.value})),onKeyDown:v=>v.key==="Enter"&&W(),style:X.input}),n.jsxs("div",{style:X.addRow,children:[n.jsx("select",{value:b.pillar,onChange:v=>c(P=>({...P,pillar:v.target.value})),style:X.select,children:Cg.map(v=>n.jsx("option",{children:v},v))}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[n.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),n.jsx("input",{type:"date",value:b.learned_date,onChange:v=>c(P=>({...P,learned_date:v.target.value})),style:{...X.select,fontSize:13}})]}),n.jsx("div",{style:{flex:1,minWidth:0},children:n.jsx("input",{value:b.intervals,onChange:v=>c(P=>({...P,intervals:v.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:X.input})})]}),n.jsxs("div",{style:X.addRow,children:[n.jsxs("button",{onClick:W,style:X.saveBtn,children:[n.jsx(wt,{size:14})," Save"]}),n.jsxs("button",{onClick:()=>T(!1),style:X.cancelBtn,children:[n.jsx(ft,{size:14})," Cancel"]})]})]}),a.length>0&&n.jsxs("div",{style:X.section,children:[n.jsxs("div",{style:X.sectionTitle,children:[n.jsx(hb,{size:15,color:"#C2536B"}),"Due Today",n.jsx("span",{style:X.badge,children:a.length})]}),a.map(v=>{var gt,dt;const P=((gt=Ge[v.pillar])==null?void 0:gt.dot)||"#9A968C";return n.jsxs("div",{style:{...X.reviewCard,borderLeft:`3px solid ${P}`,...v.is_missed?{opacity:.85}:{}},children:[n.jsx("button",{onClick:()=>D(v.review_id),style:{...X.checkbox,...v.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:v.done&&n.jsx(wt,{size:12,color:"#fff",strokeWidth:3})}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:X.reviewTopic,children:v.topic}),n.jsxs("div",{style:X.reviewMeta,children:[n.jsxs("span",{style:{...X.stageTag,background:((dt=Ge[v.pillar])==null?void 0:dt.soft)||"rgba(0,0,0,0.05)",color:P},children:["Review ",v.stage,"/",v.total_stages]}),v.is_missed&&n.jsxs("span",{style:X.missedTag,children:["missed · ",v.due_date]})]})]})]},v.review_id)})]}),n.jsxs("div",{style:X.section,children:[n.jsxs("div",{style:X.sectionTitle,children:["Active Topics ",n.jsx("span",{style:X.badge,children:E.length})]}),E.length===0&&n.jsx("div",{style:X.empty,children:"No active topics. Add something you learned today."}),E.map(v=>{var vt,Bt;const P=((vt=Ge[v.pillar])==null?void 0:vt.dot)||"#9A968C",gt=((Bt=Ge[v.pillar])==null?void 0:Bt.soft)||"rgba(0,0,0,0.05)",dt=v.reviews.filter(_=>_.done).length;return(u==null?void 0:u.id)===v.id?n.jsxs("div",{style:X.addBox,children:[n.jsx("input",{autoFocus:!0,value:u.topic,onChange:_=>k(ot=>({...ot,topic:_.target.value})),onKeyDown:_=>_.key==="Enter"&&U(),placeholder:"Topic",style:X.input}),n.jsxs("div",{style:X.addRow,children:[n.jsx("select",{value:u.pillar,onChange:_=>k(ot=>({...ot,pillar:_.target.value})),style:X.select,children:Cg.map(_=>n.jsx("option",{children:_},_))}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[n.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),n.jsx("input",{type:"date",value:u.learned_date,onChange:_=>k(ot=>({...ot,learned_date:_.target.value})),style:{...X.select,fontSize:13}})]}),n.jsx("div",{style:{flex:1,minWidth:0},children:n.jsx("input",{value:u.intervals,onChange:_=>k(ot=>({...ot,intervals:_.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:X.input})})]}),n.jsx("div",{style:X.editHint,children:"Changing the date or intervals reschedules the reviews (completed steps are kept where they still apply)."}),n.jsxs("div",{style:X.addRow,children:[n.jsxs("button",{onClick:U,style:X.saveBtn,children:[n.jsx(wt,{size:14})," Save plan"]}),n.jsxs("button",{onClick:()=>k(null),style:X.cancelBtn,children:[n.jsx(ft,{size:14})," Cancel"]})]})]},v.id):n.jsxs("div",{style:X.topicCard,children:[n.jsxs("div",{style:X.topicHead,children:[n.jsx("span",{style:{...X.dot,background:P}}),n.jsx("span",{style:X.topicName,children:v.topic}),n.jsx("span",{style:X.topicPillar,children:v.pillar}),n.jsxs("span",{style:X.topicProgress,children:[dt,"/",v.reviews.length," done"]}),n.jsx("button",{onClick:()=>C(v),style:X.ghostBtn,title:"Edit plan",children:n.jsx(Fe,{size:12})}),n.jsx("button",{onClick:()=>M(v.id,v.topic),style:X.ghostBtn,title:"Delete",children:n.jsx(ft,{size:13})})]}),n.jsxs("div",{style:X.reviewDots,children:[v.reviews.map(_=>{_.due_date<t;const ot=_.due_date===t;return n.jsx("button",{onClick:()=>D(_.id),title:`Review ${_.stage} · ${_.due_date}${_.done?" · Done":""}`,style:{...X.reviewDot,background:_.done?P:ot?gt:"var(--hover)",border:`2px solid ${_.done||ot?P:"var(--border)"}`,color:_.done?"#fff":P},children:_.stage},_.id)}),n.jsxs("span",{style:X.learnedDate,children:["Learned ",v.learned_date]})]})]},v.id)})]}),S.length>0&&n.jsxs("div",{style:X.section,children:[n.jsxs("button",{onClick:()=>y(v=>!v),style:X.cementedToggle,children:[w?n.jsx(Qa,{size:15}):n.jsx(Yr,{size:15}),n.jsx(Hr,{size:14,color:"#C9A227"}),"Cemented",n.jsx("span",{style:{...X.badge,background:"rgba(201,162,39,0.12)",color:"#8A6E1A"},children:S.length})]}),w&&S.map(v=>{var gt;const P=((gt=Ge[v.pillar])==null?void 0:gt.dot)||"#9A968C";return n.jsx("div",{style:{...X.topicCard,opacity:.75},children:n.jsxs("div",{style:X.topicHead,children:[n.jsx("span",{style:{...X.dot,background:P}}),n.jsx("span",{style:X.topicName,children:v.topic}),n.jsx("span",{style:X.topicPillar,children:v.pillar}),n.jsx(Hr,{size:13,color:"#C9A227",style:{marginLeft:"auto"}})]})},v.id)})]}),n.jsxs("div",{style:X.calCard,children:[n.jsxs("div",{style:X.calHead,children:[n.jsx("button",{onClick:ut,style:X.calNav,children:"‹"}),n.jsxs("div",{style:X.calTitle,children:[zh(e,o)," · Review Calendar"]}),n.jsx("button",{onClick:Z,style:X.calNav,children:"›"})]}),n.jsx("div",{style:X.calDow,children:Sh.map(v=>n.jsx("div",{style:X.calDowCell,children:v},v))}),n.jsxs("div",{style:X.calGrid,children:[Array.from({length:V}).map((v,P)=>n.jsx("div",{},`p${P}`)),N.map((v,P)=>{const gt=L[v]||[],dt=v===t,vt=v===h,Bt=v<t,_=vt?"#fff":dt?"var(--text)":Bt?"var(--text-2)":"var(--text-3)";return n.jsxs("button",{onClick:()=>p(vt?null:v),style:{...X.calDay,background:vt?"var(--accent-strong)":dt?"var(--hover)":"var(--surface)",borderColor:dt||vt?"var(--accent-strong)":"var(--border)"},children:[n.jsx("span",{style:{...X.calDayNum,color:_,fontWeight:dt||vt?700:600},children:P+1}),gt.slice(0,2).map((ot,jt)=>{var It;return n.jsxs("span",{title:ot.topic,style:{...X.calItem,color:vt?"#fff":((It=Ge[ot.pillar])==null?void 0:It.dot)||"var(--text-2)"},children:[jt+1,". ",ot.topic]},jt)}),gt.length>2&&n.jsxs("span",{style:{...X.calMore,color:vt?"#fff":"var(--text-3)"},children:["+",gt.length-2," more"]})]},v)})]}),h&&n.jsxs("div",{style:X.dayDetail,children:[n.jsxs("div",{style:X.dayDetailTitle,children:["Reviews for ",h]}),st.length===0?n.jsx("div",{style:X.empty,children:"No reviews scheduled for this day."}):st.map((v,P)=>{var dt,vt;const gt=((dt=Ge[v.pillar])==null?void 0:dt.dot)||"#9A968C";return n.jsxs("div",{style:{...X.reviewCard,borderLeft:`3px solid ${gt}`},children:[n.jsx("button",{onClick:()=>D(v.id),style:{...X.checkbox,...v.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:v.done&&n.jsx(wt,{size:12,color:"#fff",strokeWidth:3})}),n.jsxs("div",{children:[n.jsxs("div",{style:X.reviewTopic,children:[P+1,". ",v.topic]}),n.jsxs("span",{style:{...X.stageTag,background:((vt=Ge[v.pillar])==null?void 0:vt.soft)||"rgba(0,0,0,0.05)",color:gt},children:["Review ",v.stage,"/",v.total]})]})]},v.id)})]})]}),n.jsx(Bn,{toasts:B,onUndo:F,onDismiss:q})]})}const X={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},addBox:{background:"var(--surface)",borderRadius:12,padding:16,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},addRow:{display:"flex",gap:8,alignItems:"center"},editHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",minWidth:0},select:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 10px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},section:{marginBottom:20},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},reviewCard:{display:"flex",alignItems:"center",gap:12,background:"var(--surface)",borderRadius:10,padding:"12px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},checkbox:{width:22,height:22,borderRadius:6,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,padding:0},reviewTopic:{fontSize:13.5,fontWeight:600,marginBottom:4},reviewMeta:{display:"flex",alignItems:"center",gap:8},stageTag:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10},missedTag:{fontSize:11,color:"#C2536B",fontWeight:600},topicCard:{background:"var(--surface)",borderRadius:12,padding:"13px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},topicHead:{display:"flex",alignItems:"center",gap:8,marginBottom:10},dot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},topicName:{fontSize:14,fontWeight:600,flex:1},topicPillar:{fontSize:11,color:"var(--text-3)",fontWeight:500},topicProgress:{fontSize:11,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:10},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},reviewDots:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},reviewDot:{width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",fontSize:11,fontWeight:700,padding:0},learnedDate:{fontSize:11,color:"var(--text-3)",marginLeft:"auto"},cementedToggle:{display:"flex",alignItems:"center",gap:8,border:"none",background:"none",cursor:"pointer",fontSize:13,fontWeight:700,color:"var(--text-2)",padding:"4px 0",fontFamily:"inherit",marginBottom:8},empty:{fontSize:13,color:"var(--text-3)",padding:"16px 0",textAlign:"center"},calCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{border:"none",background:"none",fontSize:20,cursor:"pointer",color:"var(--text-2)",padding:"0 6px",lineHeight:1},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4},calDay:{minHeight:62,border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,cursor:"pointer",fontFamily:"inherit",display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"flex-start",gap:1,position:"relative",padding:"3px 4px",overflow:"hidden",textAlign:"left"},calDayNum:{fontSize:11,lineHeight:1.1,marginBottom:1},calItem:{fontSize:8.5,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",lineHeight:1.3,textAlign:"left"},calMore:{fontSize:8,fontWeight:700,opacity:.85,lineHeight:1.2},dayDetail:{marginTop:16,paddingTop:16,borderTop:"1px solid var(--border)"},dayDetailTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10}},rs=[{id:1,title:"Regular Habits",cards:[{id:1,text:"1. I always do everything I need to do, when I need to do it. "},{id:2,text:"2. I never argue or let my emotions work against me. "},{id:3,text:"3. I have a good memory. I easily and automatically remember any name or anything that is important to me. "},{id:4,text:"4. I eat only what I should. "},{id:5,text:"5. I am a good listener. I hear everything that is said. I am attentive, interested, and aware of everything that is going on around me. "},{id:6,text:"6. I have the courage to state my opinions. I take responsibility for myself and everything I say and do."},{id:7,text:"7. I never spend more than I earn. I am financially responsible, both for my present and for my future."},{id:8,text:"8. I set goals and I follow them. I set my sights, take the appropriate action, and achieve my goals."},{id:9,text:"9. I spend time with my family and my loved ones. I enjoy sharing their lives with mine and my life with theirs."}]},{id:2,title:"Motivational",cards:[{id:1,text:"1. I can do anything I believe I can do. I’ve got it and every day I get more of it. I have talent, skills, and ability"},{id:2,text:"2. I set goals and I reach them. I know what I want out of life. I go after it and I get it. "},{id:3,text:"3. People like me, and I feel good about myself. I have a sense of pride in whoa am and I believe in myself. Nothing seems to stop me. I have a lot of determination. "},{id:4,text:"4. I turn problems into advantages. I find possibilities in things that other people never give a chance."},{id:5,text:"5. I have a lot of energy––I am very alive. I enjoy life and I can tell it and so can others"},{id:6,text:"6. I keep myself up, looking ahead, and liking it. I know that I can accomplish anything I choose, and I refuse to let anything negative hold me back or stand in my way. I am not afraid of anything or anyone. I have strength, power, conviction, and confidence. "},{id:7,text:"7. I like challenges and I meet them head on, face to face––today especially. I am on top of the world and I’m going for it. "},{id:8,text:"8. I have a clear picture in my mind of what I want. I can see it in front of me. "},{id:9,text:"9. I know what I want and I know how to get it. I know that it’s all up to me and I know I can do it. Roadblocks don’t bother me. They just mean that I am alive and running, and I’m not going to stand still for anything. "},{id:10,text:"10. I trust myself I’ve got what it takes––plenty of it––and I know how to use it. "},{id:11,text:"11. Today, more than ever. Today I am unstoppable. I’ve got myself together and I’m getting more together every day. And today––look out world, here I come. "},{id:12,text:"12. Limitations? I don’t even recognize them as limitations. There is no challenge I can’t conquer; there is no wall I can’t climb over. "},{id:13,text:"13. There is no problem I can’t defeat or turn around and make it work for me. I stand tall. I am honest and sincere. I like to deal with people and they like me. "},{id:14,text:"14. I think well; I think clearly. I am organized; I am in control of myself, and everything about me. I call my shots and no one has to call them for me. I never blame anyone else for the circumstances of my life. "},{id:15,text:"15. I accept my failings and move past them as easily as I accept the rewards for my victories. I never demand perfection of myself, but I expect the very best of what I have to give––and that’s what I get. I never give myself excuses. "},{id:16,text:"16. I get things done on time and in the right way. Today I have the inner strength to do more than ever. I am an exceptional human being. "},{id:17,text:"17. My goals and my incredible belief in myself turn my goals into reality. I have the power to live my dreams."},{id:18,text:"18.  I believe in them like I believe in myself. And that belief is so strong that there is nothing that diminishes my undefeatable spirit. "}]},{id:3,title:"Organized planning",cards:[{id:1,text:"1. I am organized and in control of my life. I am in control of myself, my thoughts, my time, my actions, and my future. "},{id:2,text:"2. I know what to do and when to do it, and I do everything I need to do, when I need to do it. "},{id:3,text:"3. I program my mind to make the maximum use of my time. I am in control of my time and how to use it. I like being organized, efficient, and on top of things."},{id:4,text:"4. Controlling my time keeps me that way. "},{id:5,text:"5. I never waste time––I always “plan” time. And because I plan my time, I always have time to do the things I choose to do. "},{id:6,text:"6. Each day I become more organized and in control of all areas of my life––at home, at work, in my mind and in my thoughts, in everything that I do. "},{id:7,text:"7. I am very well organized. Each night I make a list of things I need to do the next day. I set my priorities and I follow them. "},{id:8,text:"8. I am always on time. I am always right where I need to be, exactly when I need to be there. "},{id:9,text:"9. Being on time is easy for me and the more I control my time and the more organized I become, the easier it is. "},{id:10,text:"10. I am in control of my feelings, my emotions, my attitudes, and my needs. I control them; they do not control me. "},{id:11,text:"11. I have the winning vote in the outcome of my own actions. And I choose to live my life by choice, not chance. Therefore, I take the time to take control."},{id:12,text:"12. I have an organized and orderly mind. Because I think in an organized way, I conduct my life in an organized manner. "},{id:13,text:"13. I think in the most positive and productive way at all times and in all things. The way I think is the way I live––and I think “right.” "},{id:14,text:"14. I am the director of my destiny. I know where I am going and I know why I am going there. My earthly life is in my hands and in my control. "},{id:15,text:"15. I control my goals and the achievement of my goals. I organize my goals by writing each of them down, along with the steps I need to reach them. One of the reasons for my success is that my goals are clearly defined and organized."},{id:16,text:"16. I am in complete control of what I think and how I think. Therefore, I choose to think only those thoughts which help me and which are of genuine benefit to me."}]},{id:4,title:"Solving Problems",cards:[{id:1,text:"1. I’m good at solving problems. I like challenges and I meet them head on. "},{id:2,text:"2. Problems are my teachers. They help me to learn and grow. Without them, I would be going nowhere. With them, I am moving forward in the direction of my own goals. "},{id:3,text:"3. There is no problem which I cannot conquer. I am strong in mind, body, and spirit. My will, my strength, and my determination are always greater than any problem I face."},{id:4,text:"4. When I meet a new problem, I do not see the problem as my enemy. I know that finding the solution to the problem will move me forward in my own personal growth."},{id:5,text:"5. Because I know that problems are a key ingredient in my spiritual and mental education and preparation, I recognize that all problems are important to me. "},{id:6,text:"6. I do not fear problems, I solve them. I do not ignore problems, I confront them. I do not avoid problems, I conquer them. "},{id:7,text:"7. I know that every problem holds within itself the keys to its own solution. Therefore, the better I understand the problem, the clearer I am able to see its solution. "},{id:8,text:"8. Having problems is not a problem for me. I am confident, self-assured, positive, and determined. I always know that I am going to overcome any problem I encounter––and I always do. "},{id:9,text:"9. I am good at breaking large obstacles down into smaller pieces that are easier to handle. And I never make any problem appear to be larger than it actually is. "},{id:10,text:"10. I never worry. I turn “worry time” into positive, constructive, “solution time.” I keep my mind alert and open to all solutions—and solutions come quickly and easily to me. "},{id:11,text:"11. I have learned to recognize that many problems carry with them benefits and potential opportunities which would not have presented themselves had the problem not occurred in the first place. "},{id:12,text:"12. I do not seek to live a life which is free from all problems. Instead, I choose to live a life of finding solutions and enjoying the benefits which those solutions create."},{id:13,text:"13. Challenge, conquer, solution, and win are words which I live by daily. Challenges are opportunities. Conquering them is the inevitable outcome. "},{id:14,text:"14. “Solutions” are the stepping stones to my success, and “Winning” is my way of life."}]},{id:5,title:"Self Esteem",cards:[{id:1,text:"1. I really am very special. I like who I am and I feel good about myself. "},{id:2,text:"2. Although I always work to improve myself and I get better every day, I like who I am today. And tomorrow, when I’m even better, I’ll like myself then, too. "},{id:3,text:"3. It’s true that there really is no one else like me in the entire world. There never was another me before, and there will never be another me again. "},{id:4,text:"4. I am unique––from the top of my head to the bottom of my feet. In some ways I may look and act and sound like some others––but I am not them. I am me."},{id:5,text:"5. I wanted to be somebody––and now I know I am I would rather be me than anyone else in the world. "},{id:6,text:"6. I like how I feel and I like how I think and I like how I do things. I approve of me and I approve of who I am."},{id:7,text:"7. I have many beautiful qualities about me. I have talents and skills and abilities. I even have talents that I don’t even know about yet. And I am discovering new talents inside myself all the time. "},{id:8,text:"8. I am positive. I am confident. I radiate good things. If you look closely, you can even see a glow around me."},{id:9,text:"9. I am full of life. I like life and I’m glad to be alive. I am a very special person, living at a very special time. "},{id:10,text:"10. I am intelligent. My mind is quick and alert and clever and fun. I think good thoughts, and my mind makes things work right for me. "},{id:11,text:"11. I have a lot of energy and enthusiasm and vitality. I am exciting and I really enjoy being me. "},{id:12,text:"12. I like to be around other people and other people like to be around me. People like to hear what I have to say and know what I have to think. "},{id:13,text:"13. I smile a lot. I am happy on the inside and I am happy on the outside. "},{id:14,text:"14. I am interested in many things. I appreciate all the blessings I have, and the things that I learn, and all the things I will learn today and tomorrow and forever––just as long as I am. "},{id:15,text:"15. I am warm, sincere, honest, and genuine. I am all of these things and more. And all of these things are me. I like who I am, and I’m glad to be me."}]},{id:6,title:"Self-Responsibility",cards:[{id:1,text:"1. I take full responsibility for everything about me––even the thoughts that I think. I am in control of the vast resources of my own mind."},{id:2,text:"2. I alone am responsible for what I do and what I tell myself about me. No one can share this responsibility with me. "},{id:3,text:"3. I also allow others to accept their responsibilities far themselves and I do not try to accept their responsibilities for them. "},{id:4,text:"4. I enjoy being responsible. It puts me in charge of being me––and that’s a challenge I enjoy. "},{id:5,text:"5. I allow no one else, at any time, to assume control or responsibility over my life or over anything that I do. My responsibility to others is an extension of my own responsibility to myself. "},{id:6,text:"6. I choose to leave nothing about me up to chance. When it comes to me––and anything in my life––I choose to CHOOSE. "},{id:7,text:"7. My choices are mine alone to make for myself. I do not, at any time, allow anyone else to make my choices for me. And I accept full responsibility for every choice and decision I make. "},{id:8,text:"8. I always meet all of the obligations which I accept. And I accept no obligations which I will not meet. "},{id:9,text:"9. I am trustworthy. I can be counted on. I have accepted winning responsibility for myself––and I always live up to the responsibilities I accept. "},{id:10,text:"10. There is no they on whom I lay the blame, or with whom I share my own personal responsibilities. I have learned the great secret of mastering my own destiny. I have learned that “they” is “me.” "},{id:11,text:"11. I have no need to make excuses and no one needs to carry my responsibility for me. I gladly carry my own weight––and I carry it well. "},{id:12,text:"12. Each day I acknowledge and accept the responsibility––not only for my own actions––but also for my emotions, my thoughts, and my attitude. "},{id:13,text:"13. I accept the responsibility for living my life in a way which creates my strengths, my happiness, my positive, healthy beliefs, and for my past, my present, and my future."}]},{id:7,title:"Freedom from worry",cards:[{id:1,text:"1. I never worry. Instead of worrying, I find solutions and I act on them. "},{id:2,text:"2. My mind is constantly in tune with the positive. It is bright, cheerful, enthusiastic, and full of good, positive thoughts and ideas. "},{id:3,text:"3. I am able to relax easily and comfortably in my body and in my mind. I am calm, confident, and self-assured. "},{id:4,text:"4. My mind is orderly and well-organized. I consciously choose what I think and I always choose those thoughts which are the most positive and beneficial for me. "},{id:5,text:"5. All of my thoughts create healthiness within me. My mind dwells only on those thoughts which create more harmony, balance, and well-being within me and in the world around me. "},{id:6,text:"6. I automatically, and always, think in a decisive and determined way. "},{id:7,text:"7. I am full of resolution and the absolute assurance of the best possible outcome in everything that I do. "},{id:8,text:"8. I choose to look at the world around me in the bright, healthy light of optimism and self-assurance. "},{id:9,text:"9. I do only those things which are best for me. I create the best within myself, I attract the best in others, and I find the best in the world around me. "},{id:10,text:"10. I willingly, and without fail, take care of the duties and obligations which I have accepted for myself."},{id:11,text:"11. I commit only to those responsibilities which I know I can fulfill. "},{id:12,text:"12. I focus the attention of my mind only on those things that I can do something about. If I cannot affect it or direct it––I accept it. "},{id:13,text:"13. I keep my mind too busy thinking good, healthy, positive, constructive, and productive thoughts to ever have any time for worry. "},{id:14,text:"14. I control the thoughts I choose. No thought, at any time, can dwell in my mind without my approval or permission. I never worry."}]},{id:8,title:"Eating Habits",cards:[{id:1,text:"1. I am in control of myself in every way––at all times and in all situations. "},{id:2,text:"2. Each time I sit down to eat I reaffirm my determination to achieve my goal. By eating right, and never giving in, I am reaching the weight I want. "},{id:3,text:"3. Whether eating in or eating out, I really enjoy eating less. "},{id:4,text:"4. I never feel the need to finish the food in front of me. I eat only what I should––and never one bite more. "},{id:5,text:"5. One way to weight-loss that’s easy and works, is less food on my plate, and less on my fork. "},{id:6,text:'6. By ordering less when I eat out, and by serving myself smaller portions at home, I keep myself aware of the importance of staying with my goal––each and every day. “Less on my plate means less on my waist."'},{id:7,text:"7. When I sit down to eat, at no time do I allow anyone else to influence, tempt, or discourage me in any negative way."},{id:8,text:"8. What I eat, and the goals I reach, are up to me. And I give no one the right to hinder or control my success."},{id:9,text:"9. Although others may benefit from my success, I. am achieving my weight-loss goals for my own personal reasons––for myself, my life, my future, and my own personal well-being."},{id:10,text:"10. I am never, at any time, tempted to take one bite more than I should. I am strong, I am capable of reaching my goal, and I am doing it."},{id:11,text:"11. Being in situations which put a lot of food in front of me is not a problem to me now. I simply say “No” to the food and “Yes” to my success."},{id:12,text:"12. I enjoy sitting down to eat. Each time I do I conquer my past, and I create a trimmer, happier, more self-confident future in front of me. "},{id:13,text:"13. When I sit down to eat, I do not need someone else to remind me of my goal, or to keep me from eating something I should not. I take full responsibility for myself, and no one else has to do it for me. "},{id:14,text:"14. Controlling my weight, and my appetite, is easy for me now. I enjoy smaller portions, smaller bites, and a slower, healthier, more relaxed way of eating. "},{id:15,text:"15. I have set my goal and I am staying with it. I have turned mealtime into “achievement time.”"}]}],Ig=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#3A7CA5","#4C9A6B"],Hi=t=>Ig[t%Ig.length],Dh=t=>t+"1A",kb="anvil_affirmation_favs",Rh=()=>{try{return new Set(JSON.parse(localStorage.getItem(kb)||"[]"))}catch{return new Set}};function Fh(){const[t,e]=f.useState(0),[r,o]=f.useState(0),[s,i]=f.useState(Rh);f.useEffect(()=>{localStorage.setItem(kb,JSON.stringify([...s]))},[s]);const l=(T,b)=>`${T}#${b.id}`,a=t==="FAV"?rs.flatMap((T,b)=>T.cards.filter(c=>s.has(l(T.title,c))).map(c=>({...c,color:Hi(b),title:T.title}))):rs[t].cards.map(T=>({...T,color:Hi(t),title:rs[t].title})),d=a.length,g=Math.min(r,Math.max(0,d-1)),m=a[g],h=T=>{e(T),o(0)},p=f.useCallback(()=>o(T=>Math.max(0,T-1)),[]),w=f.useCallback(()=>o(T=>Math.min(d-1,T+1)),[d]);f.useEffect(()=>{const T=b=>{b.key==="ArrowLeft"&&p(),b.key==="ArrowRight"&&w()};return window.addEventListener("keydown",T),()=>window.removeEventListener("keydown",T)},[p,w]);const y=T=>i(b=>{const c=new Set(b);return c.has(T)?c.delete(T):c.add(T),c}),j=m?m.color:"#8268B0";return n.jsxs("div",{style:Tt.page,children:[n.jsxs("div",{style:Tt.head,children:[n.jsx("div",{style:Tt.eyebrow,children:"Anvil · Affirmations"}),n.jsx("h1",{style:Tt.h1,children:"Affirmations"}),n.jsx("div",{style:Tt.subhead,children:"One at a time — read it, mean it."})]}),n.jsxs("div",{style:Tt.filterBar,children:[rs.map((T,b)=>{const c=t===b,u=Hi(b);return n.jsxs("button",{onClick:()=>h(b),style:{...Tt.chip,...c?{background:u,color:"#fff",borderColor:u}:{}},children:[n.jsx("span",{style:{...Tt.catDot,background:c?"#fff":u}})," ",T.title," ",n.jsx("span",{style:Tt.chipCount,children:T.cards.length})]},T.title)}),n.jsxs("button",{onClick:()=>h("FAV"),style:{...Tt.chip,...t==="FAV"?{background:"#C9A227",color:"#fff",borderColor:"#C9A227"}:{}},children:[n.jsx(xs,{size:12,fill:t==="FAV"?"#fff":"none"})," Favorites ",n.jsx("span",{style:Tt.chipCount,children:s.size})]})]}),d===0?n.jsxs("div",{style:Tt.empty,children:[n.jsx(xs,{size:22,color:"#C3BFB5"}),n.jsx("div",{children:"No favorites yet — tap the star on a card to save it here."})]}):n.jsxs("div",{style:Tt.viewer,children:[n.jsxs("div",{style:{...Tt.card,borderTop:`4px solid ${j}`},children:[n.jsx("div",{style:{...Tt.cardCat,color:j,background:Dh(j)},children:m.title}),n.jsx("button",{onClick:()=>y(l(m.title,m)),style:{...Tt.favBtn,color:s.has(l(m.title,m))?"#C9A227":"#C3BFB5"},title:"Favorite",children:n.jsx(xs,{size:20,fill:s.has(l(m.title,m))?"#C9A227":"none"})}),n.jsx(fb,{size:30,color:j,style:{opacity:.25}}),n.jsx("p",{style:Tt.cardText,children:m.text.trim()})]}),n.jsxs("div",{style:Tt.navRow,children:[n.jsxs("button",{onClick:p,disabled:g===0,style:{...Tt.navBtn,...g===0?Tt.navBtnDisabled:{}},children:[n.jsx(zn,{size:18})," Back"]}),n.jsxs("span",{style:{...Tt.counter,color:j},children:[g+1," ",n.jsxs("span",{style:Tt.counterTotal,children:["/ ",d]})]}),n.jsxs("button",{onClick:w,disabled:g===d-1,style:{...Tt.navBtn,...g===d-1?Tt.navBtnDisabled:{}},children:["Next ",n.jsx(Yr,{size:18})]})]}),n.jsx("div",{style:Tt.dots,children:a.map((T,b)=>n.jsx("button",{onClick:()=>o(b),style:{...Tt.dot,...b===g?{background:j,transform:"scale(1.5)"}:{}},title:`${b+1}`},b))})]})]})}const Tt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:22},chip:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipCount:{fontSize:11,fontWeight:700,opacity:.7},catDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},empty:{display:"flex",flexDirection:"column",alignItems:"center",gap:10,fontSize:13.5,color:"var(--text-3)",padding:"56px 12px",textAlign:"center",background:"var(--surface)",borderRadius:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},viewer:{display:"flex",flexDirection:"column",alignItems:"center"},card:{position:"relative",background:"var(--surface)",borderRadius:16,padding:"40px 32px 44px",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",width:"100%",minHeight:240,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",boxSizing:"border-box"},cardCat:{position:"absolute",top:16,left:16,fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:12,textTransform:"uppercase",letterSpacing:"0.04em"},favBtn:{position:"absolute",top:14,right:14,border:"none",background:"none",cursor:"pointer",padding:4,display:"grid",placeItems:"center"},cardText:{fontSize:21,lineHeight:1.55,margin:"14px 0 0",fontWeight:500,color:"var(--text)",fontFamily:"'Fraunces',Georgia,serif",maxWidth:560},navRow:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",maxWidth:420,marginTop:22},navBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},counter:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},counterTotal:{fontSize:13,fontWeight:600,color:"var(--text-3)"},dots:{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center",marginTop:20,maxWidth:480},dot:{width:7,height:7,borderRadius:"50%",border:"none",background:"var(--border)",cursor:"pointer",padding:0,transition:"transform 0.12s"}},ye={financial:{label:"Financial",leaf:"#C9A227",shape:"round"},academic:{label:"Academic",leaf:"#3A7CA5",shape:"pine"},relationship:{label:"Relationship",leaf:"#C2536B",shape:"round"},spiritual:{label:"Spiritual",leaf:"#8268B0",shape:"tall"},health:{label:"Health",leaf:"#4C9A6B",shape:"round"}},jo="health";function rd({species:t=jo,progress:e=1,withered:r=!1,size:o=200}){const s=Math.max(0,Math.min(1,e)),i=ye[t]||ye[jo],l=r?"#8A7B63":"#7A5A3C",a=r?"#A99C84":i.leaf,d=r?"#8F8268":a,g=14+s*46,m=112-g,h=s>.14,p=h?8+s*30:0;return n.jsxs("svg",{viewBox:"0 0 120 120",width:o,height:o,style:{display:"block"},children:[n.jsx("ellipse",{cx:"60",cy:"114",rx:20+s*14,ry:"5",fill:"rgba(38,36,31,0.08)"}),!h&&n.jsxs("g",{transform:`translate(60 ${112-s*40})`,children:[n.jsx("path",{d:"M0 8 C0 8 0 -2 0 -6",stroke:"#4C9A6B",strokeWidth:"2.5",fill:"none"}),n.jsx("ellipse",{cx:"-5",cy:"-4",rx:"6",ry:"3.5",fill:"#4C9A6B",transform:"rotate(-30 -5 -4)"}),n.jsx("ellipse",{cx:"5",cy:"-4",rx:"6",ry:"3.5",fill:"#5BB07E",transform:"rotate(30 5 -4)"})]}),h&&n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:60-(2+s*2.5),y:m,width:(2+s*2.5)*2,height:g,rx:"2",fill:l}),i.shape==="pine"?n.jsxs(n.Fragment,{children:[n.jsx("polygon",{points:`60,${m-p*2.2} ${60-p},${m+4} ${60+p},${m+4}`,fill:a}),n.jsx("polygon",{points:`60,${m-p*3} ${60-p*.8},${m-p*.7} ${60+p*.8},${m-p*.7}`,fill:d})]}):i.shape==="tall"?n.jsxs(n.Fragment,{children:[n.jsx("ellipse",{cx:"60",cy:m-p*.3,rx:p*.78,ry:p*1.55,fill:a}),n.jsx("ellipse",{cx:"60",cy:m-p*.9,rx:p*.5,ry:p*1,fill:d,opacity:"0.9"})]}):n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"60",cy:m,r:p,fill:a}),n.jsx("circle",{cx:60-p*.7,cy:m+p*.3,r:p*.78,fill:a}),n.jsx("circle",{cx:60+p*.7,cy:m+p*.3,r:p*.78,fill:d}),n.jsx("circle",{cx:"60",cy:m-p*.5,r:p*.8,fill:d,opacity:"0.92"})]})]})]})}function Ah({species:t}){return n.jsx(rd,{species:t,progress:1,size:56})}const Wh=[{id:"day",label:"Day"},{id:"week",label:"Week"},{id:"month",label:"Month"},{id:"year",label:"Year"}],Ye=t=>t>=60?`${Math.floor(t/60)}h ${t%60}m`:`${t}m`,Mh=t=>{const e=t<12?"am":"pm",r=t%12===0?12:t%12;return`${String(r).padStart(2,"0")} ${e}`};function _h(t){const e=t<=60?10:t<=120?20:t<=300?60:120,r=Math.max(60,Math.ceil((t||1)/e)*e),o=[];for(let s=0;s<=r;s+=e)o.push(s);return{max:r,ticks:o}}const wb=t=>{const e=new Date(t);return e.setHours(0,0,0,0),e},Lh=t=>{const e=wb(t),r=(e.getDay()+6)%7;return e.setDate(e.getDate()-r),e},Ph=t=>new Date(t.getFullYear(),t.getMonth(),1),Nh=t=>new Date(t.getFullYear(),0,1);function Oh(t,e){if(t==="day"){const s=wb(e);return{start:s,end:new Date(+s+864e5),prev:new Date(+s-864e5),prev2:new Date(+s-2*864e5)}}if(t==="week"){const s=Lh(e);return{start:s,end:new Date(+s+7*864e5),prev:new Date(+s-7*864e5),prev2:new Date(+s-14*864e5)}}if(t==="month"){const s=Ph(e),i=e.getFullYear(),l=e.getMonth();return{start:s,end:new Date(i,l+1,1),prev:new Date(i,l-1,1),prev2:new Date(i,l-2,1)}}const r=e.getFullYear();return{start:Nh(e),end:new Date(r+1,0,1),prev:new Date(r-1,0,1),prev2:new Date(r-2,0,1)}}function $h({sessions:t=[],onBack:e}){const[r,o]=f.useState("day"),s=new Date,{start:i,end:l,prev:a,prev2:d}=Oh(r,s),g=Z=>new Date(Z.started_at||Z.created_at),m=t.filter(Z=>Z.completed),h=(Z,E,S)=>{const N=g(Z);return N>=E&&N<S},p=(Z,E)=>m.filter(S=>h(S,Z,E)).reduce((S,N)=>S+(N.actual_min||0),0),w=m.filter(Z=>h(Z,i,l)),y=w.reduce((Z,E)=>Z+(E.actual_min||0),0),j=p(a,i),T=p(d,a),b=w.length,c=Array(24).fill(0);w.forEach(Z=>{c[g(Z).getHours()]+=Z.actual_min||0});const u=Math.max(...c,0),k=_h(u),x={};w.forEach(Z=>{const E=ye[Z.tree]?Z.tree:jo;x[E]=(x[E]||0)+(Z.actual_min||0)});const D=Object.entries(x).map(([Z,E])=>({name:ye[Z].label,min:E,color:ye[Z].leaf})).sort((Z,E)=>E.min-Z.min),W=j>0?Math.round((y-j)/j*100):y>0?100:0,z=W>0?yb:W<0?vb:wf,B=W>0?"#4C9A6B":W<0?"#C2536B":"#9A968C",F={day:"yesterday",week:"last week",month:"last month",year:"last year"}[r],q={day:"2 days ago",week:"2 weeks ago",month:"2 months ago",year:"2 years ago"}[r],M=54,C=22,U=2*Math.PI*M;let ut=0;return n.jsxs("div",{style:nt.page,children:[n.jsxs("div",{style:nt.topbar,children:[n.jsxs("button",{onClick:e,style:nt.back,children:[n.jsx(lb,{size:18})," Grove"]}),n.jsx("h1",{style:nt.h1,children:"Insights"}),n.jsx("div",{style:{width:76}})]}),n.jsx("div",{style:nt.rangeBar,children:Wh.map(Z=>n.jsx("button",{onClick:()=>o(Z.id),style:{...nt.rangeBtn,...r===Z.id?nt.rangeOn:{}},children:Z.label},Z.id))}),n.jsxs("div",{style:nt.headline,children:[n.jsxs("div",{style:nt.bigStat,children:[n.jsx("div",{style:nt.bigVal,children:Ye(y)}),n.jsxs("div",{style:nt.bigLbl,children:["Focused this ",r]})]}),n.jsxs("div",{style:nt.bigStat,children:[n.jsx("div",{style:nt.bigVal,children:b}),n.jsx("div",{style:nt.bigLbl,children:"Trees"})]})]}),n.jsxs("div",{style:nt.card,children:[n.jsxs("div",{style:nt.cardHead,children:[n.jsxs("div",{style:nt.cardTitle,children:["Your forest this ",r]}),n.jsx("div",{style:nt.cardHint,children:"Each tree is a completed session — bigger means longer focus"})]}),n.jsx(Uh,{sessions:w}),n.jsxs("div",{style:nt.forestNumber,children:[b," ",b===1?"tree":"trees"," · ",Ye(y)," focused"]})]}),n.jsx(Gi,{title:"Focus distribution",hint:"Minutes focused at each time of day",children:u===0?n.jsx(zg,{}):n.jsx(Gh,{hours:c,axis:k})}),n.jsx(Gi,{title:"Pillar distribution",hint:"How your focus splits across the five trees",children:D.length===0?n.jsx(zg,{}):n.jsxs("div",{style:nt.donutWrap,children:[n.jsxs("svg",{viewBox:"0 0 140 140",width:"150",height:"150",style:{flexShrink:0},children:[D.map(Z=>{const E=Z.min/(y||1)*U,S=n.jsx("circle",{cx:"70",cy:"70",r:M,fill:"none",stroke:Z.color,strokeWidth:C,strokeDasharray:`${E} ${U-E}`,strokeDashoffset:-ut,transform:"rotate(-90 70 70)"},Z.name);return ut+=E,S}),n.jsx("text",{x:"70",y:"66",textAnchor:"middle",style:nt.donutCenterTop,children:Ye(y)}),n.jsx("text",{x:"70",y:"82",textAnchor:"middle",style:nt.donutCenterSub,children:"total"})]}),n.jsx("div",{style:nt.legend,children:D.map(Z=>n.jsxs("div",{style:nt.legendRow,children:[n.jsx("span",{style:{...nt.legendDot,background:Z.color}}),n.jsx("span",{style:nt.legendName,children:Z.name}),n.jsxs("span",{style:nt.legendVal,children:[Ye(Z.min)," · ",Math.round(Z.min/(y||1)*100),"%"]})]},Z.name))})]})}),n.jsxs(Gi,{title:"Focus trend",hint:`This ${r} vs the previous two`,children:[n.jsxs("div",{style:nt.trend3,children:[n.jsxs("div",{style:nt.trendCol,children:[n.jsx("div",{style:nt.trendVal,children:Ye(y)}),n.jsxs("div",{style:nt.trendLbl,children:["This ",r]})]}),n.jsxs("div",{style:nt.trendCol,children:[n.jsx("div",{style:{...nt.trendVal,color:"var(--text-2)"},children:Ye(j)}),n.jsx("div",{style:nt.trendLbl,children:F})]}),n.jsxs("div",{style:nt.trendCol,children:[n.jsx("div",{style:{...nt.trendVal,color:"var(--text-3)"},children:Ye(T)}),n.jsx("div",{style:nt.trendLbl,children:q})]})]}),n.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:n.jsxs("div",{style:{...nt.trendBadge,color:B,background:B+"1A"},children:[n.jsx(z,{size:15})," ",W>0?"+":"",W,"% vs ",F]})}),n.jsx(Vh,{items:[{label:`This ${r}`,value:y,color:"#4C9A6B"},{label:F,value:j,color:"var(--text-3)"},{label:q,value:T,color:"var(--text-3)"}]})]})]})}const Hh=t=>t===0?"12a":t<12?`${t}a`:t===12?"12p":`${t-12}p`;function Gh({hours:t,axis:e}){return n.jsxs("div",{children:[n.jsxs("div",{style:nt.vcPlot,children:[e.ticks.map(r=>n.jsxs("div",{style:{...nt.vcGridRow,bottom:`${r/e.max*100}%`},children:[n.jsx("span",{style:nt.vcYLabel,children:r}),n.jsx("div",{style:nt.vcGridLine})]},r)),n.jsx("div",{style:nt.vcBars,children:t.map((r,o)=>n.jsx("div",{style:nt.vcCell,title:`${Mh(o)} · ${r} min`,children:n.jsx("div",{style:{...nt.vcBar,height:r>0?`max(3px, ${r/e.max*100}%)`:0}})},o))})]}),n.jsx("div",{style:nt.vcXAxis,children:t.map((r,o)=>n.jsx("div",{style:nt.vcXCell,children:o%3===0?Hh(o):""},o))}),n.jsx("div",{style:nt.vcYTitle,children:"minutes focused, by hour of day"})]})}function Uh({sessions:t}){if(!t.length)return n.jsx("div",{style:nt.sceneEmpty,children:"No trees yet this period. 🌱"});const r=t.slice(0,80),o=t.length-r.length,s=i=>Math.round(Math.max(40,Math.min(88,40+(i||0)*.6)));return n.jsxs("div",{children:[n.jsx("div",{style:nt.scene,children:r.map(i=>n.jsx("div",{style:nt.sceneTree,title:`${i.label||"Focus"} · ${Ye(i.actual_min||i.duration_min)}`,children:n.jsx(rd,{species:i.tree,progress:1,size:s(i.actual_min||i.duration_min)})},i.id))}),o>0&&n.jsxs("div",{style:nt.overflow,children:["+",o," more trees"]})]})}function Gi({title:t,hint:e,children:r}){return n.jsxs("div",{style:nt.card,children:[n.jsxs("div",{style:nt.cardHead,children:[n.jsx("div",{style:nt.cardTitle,children:t}),e&&n.jsx("div",{style:nt.cardHint,children:e})]}),r]})}function zg(){return n.jsx("div",{style:nt.empty,children:"No focus sessions in this period yet. 🌱"})}function Vh({items:t}){const e=Math.max(1,...t.map(r=>r.value));return n.jsx("div",{style:nt.tbWrap,children:t.map(r=>n.jsxs("div",{style:nt.tbRow,children:[n.jsx("div",{style:nt.tbLbl,children:r.label}),n.jsx("div",{style:nt.tbTrack,children:n.jsx("div",{style:{...nt.tbBar,width:`${r.value/e*100}%`,background:r.color}})}),n.jsx("div",{style:nt.tbVal,children:Ye(r.value)})]},r.label))})}const nt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"20px 16px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:720,margin:"0 auto"},topbar:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},back:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},h1:{fontSize:20,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},rangeBar:{display:"flex",gap:6,background:"var(--surface)",padding:5,borderRadius:12,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},rangeBtn:{flex:1,border:"none",background:"none",padding:"9px 0",borderRadius:8,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},rangeOn:{background:"var(--accent-strong)",color:"#fff"},headline:{display:"flex",gap:12,marginBottom:16},bigStat:{flex:1,background:"var(--surface)",borderRadius:14,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},bigVal:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em"},bigLbl:{fontSize:12,color:"var(--text-3)",marginTop:3,fontWeight:500},card:{background:"var(--surface)",borderRadius:16,padding:"18px 18px 20px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},cardHead:{marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardHint:{fontSize:12,color:"var(--text-3)",marginTop:2},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"24px 0"},scene:{display:"flex",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"center",gap:"0 2px",padding:"14px 8px 6px",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,minHeight:110,border:"1px solid var(--border)"},sceneTree:{lineHeight:0},sceneEmpty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"34px 0",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,border:"1px solid var(--border)"},overflow:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",marginTop:6,fontWeight:600},forestNumber:{textAlign:"center",marginTop:12,fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},vcPlot:{position:"relative",height:180,paddingLeft:30},vcGridRow:{position:"absolute",left:0,right:0,display:"flex",alignItems:"center",height:0},vcYLabel:{width:26,marginRight:4,textAlign:"right",fontSize:9,color:"var(--text-3)",fontWeight:600,flexShrink:0},vcGridLine:{flex:1,height:1,background:"#EEEBE4"},vcBars:{position:"absolute",left:30,right:0,top:0,bottom:0,display:"flex",alignItems:"flex-end",gap:1},vcCell:{flex:1,height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"center"},vcBar:{width:"72%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",transition:"height 0.3s"},vcXAxis:{display:"flex",marginLeft:30,marginTop:4},vcXCell:{flex:1,textAlign:"center",fontSize:8.5,color:"var(--text-3)",fontWeight:600,overflow:"hidden"},vcYTitle:{textAlign:"center",fontSize:9.5,color:"var(--text-3)",marginTop:6,letterSpacing:"0.06em",textTransform:"uppercase",fontWeight:600},donutWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap",justifyContent:"center"},donutCenterTop:{fontSize:16,fontWeight:800,fill:"var(--text)",fontFamily:"'Fraunces',Georgia,serif"},donutCenterSub:{fontSize:9,fill:"#9A968C",textTransform:"uppercase",letterSpacing:"0.08em"},legend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:11,height:11,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},legendVal:{fontSize:12,color:"var(--text-3)",fontWeight:600,flexShrink:0},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:56,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},Yh=[15,30,45,60,90],Ui="anvil_grove_active",Tg=t=>`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`,Vs=t=>t>=60?`${Math.floor(t/60)}h ${t%60}m`:`${t}m`;function Qh(){const[t,e]=f.useState("timer"),[r,o]=f.useState("idle"),[s,i]=f.useState(15),[l,a]=f.useState(!1),[d,g]=f.useState(""),[m,h]=f.useState(jo),[p,w]=f.useState(()=>localStorage.getItem("anvil_grove_deepfocus")!=="0"),[y,j]=f.useState(15*60),[T,b]=f.useState({sessions:[],stats:null}),c=f.useRef(null),u=f.useRef(null),k=f.useRef(!1),x=f.useCallback(async()=>{try{b(await O.getFocus())}catch{}},[]),D=f.useCallback(async(L,st)=>{if(!k.current){k.current=!0,localStorage.removeItem(Ui);try{await O.createFocus({label:d.trim()||null,tree:m,duration_min:s,actual_min:st,completed:L,started_at:u.current,ended_at:new Date().toISOString()})}catch{}x()}},[d,m,s,x]),W=f.useCallback(()=>{if(r!=="running")return;const L=u.current?Math.round((Date.now()-new Date(u.current).getTime())/6e4):0;o("failed"),D(!1,Math.max(0,Math.min(s,L)))},[r,s,D]),z=f.useCallback(()=>{o("done"),j(0),D(!0,s)},[s,D]);f.useEffect(()=>{x();const L=JSON.parse(localStorage.getItem(Ui)||"null");if(L&&L.endTime){const st=Math.round((L.endTime-Date.now())/1e3);i(L.duration),g(L.label||""),h(L.tree||"oak"),c.current=L.endTime,u.current=L.startedAt,st>0?(j(st),o("running")):(o("done"),k.current=!1,D(!0,L.duration))}},[]),f.useEffect(()=>{if(r!=="running")return;const L=()=>{const v=Math.round((c.current-Date.now())/1e3);if(v<=0){z();return}j(v)};L();const st=setInterval(L,250);return()=>clearInterval(st)},[r,z]),f.useEffect(()=>{if(r!=="running"||!p)return;const L=()=>{document.hidden&&W()};return document.addEventListener("visibilitychange",L),()=>document.removeEventListener("visibilitychange",L)},[r,p,W]),f.useEffect(()=>{const L=()=>{!document.hidden&&r!=="running"&&x()};window.addEventListener("focus",L),document.addEventListener("visibilitychange",L);const st=setInterval(L,6e4);return()=>{window.removeEventListener("focus",L),document.removeEventListener("visibilitychange",L),clearInterval(st)}},[x,r]);const B=()=>w(L=>{const st=!L;return localStorage.setItem("anvil_grove_deepfocus",st?"1":"0"),st}),F=()=>{k.current=!1,u.current=new Date().toISOString(),c.current=Date.now()+s*60*1e3,localStorage.setItem(Ui,JSON.stringify({endTime:c.current,duration:s,label:d,tree:m,startedAt:u.current})),j(s*60),o("running")},q=()=>{o("idle"),j(s*60)},M=L=>{a(!1),i(L),j(L*60)},C=()=>{l||(a(!0),i(5),j(5*60))},U=L=>{if(a(!0),L===""){i(0),j(0);return}const st=Math.max(1,Math.min(600,parseInt(L,10)||0));i(st),j(st*60)},ut=s*60,Z=r==="running"?1-y/ut:r==="done"?1:0,E=130,S=2*Math.PI*E,N=S*(1-(r==="running"?Z:r==="done"?1:0)),V=T.stats;return t==="stats"?n.jsx($h,{sessions:T.sessions,onBack:()=>e("timer")}):n.jsxs("div",{style:it.page,children:[n.jsxs("div",{style:it.head,children:[n.jsx("div",{style:it.eyebrow,children:"Anvil · Grove"}),n.jsx("h1",{style:it.h1,children:"Grove"}),n.jsx("div",{style:it.subhead,children:"Plant a tree, stay focused, grow your grove."}),n.jsxs("button",{onClick:()=>e("stats"),style:it.insightsBtn,disabled:r==="running",children:[n.jsx(af,{size:15})," Insights"]})]}),V&&n.jsxs("div",{style:it.statRow,children:[n.jsx(ns,{label:"Today",value:Vs(V.today_minutes)}),n.jsx(ns,{label:"Trees",value:V.trees}),n.jsx(ns,{label:"Streak",value:`${V.streak}d`}),n.jsx(ns,{label:"Success",value:`${V.success_rate}%`})]}),n.jsxs("div",{style:it.stage,children:[n.jsxs("div",{style:it.ringWrap,children:[n.jsxs("svg",{width:"300",height:"300",viewBox:"0 0 300 300",style:{position:"absolute",inset:0},children:[n.jsx("circle",{cx:"150",cy:"150",r:E,fill:"none",stroke:"var(--border)",strokeWidth:"10"}),n.jsx("circle",{cx:"150",cy:"150",r:E,fill:"none",stroke:r==="failed"?"#C2536B":"#4C9A6B",strokeWidth:"10",strokeLinecap:"round",strokeDasharray:S,strokeDashoffset:N,transform:"rotate(-90 150 150)",style:{transition:"stroke-dashoffset 0.4s linear"}})]}),n.jsx("div",{style:it.ringInner,children:n.jsx(rd,{species:m,progress:r==="idle"?0:Z,withered:r==="failed",size:170})})]}),r==="idle"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:it.timeBig,children:Tg(s*60)}),n.jsxs("div",{style:it.controls,children:[n.jsxs("div",{style:it.chips,children:[Yh.map(L=>n.jsxs("button",{onClick:()=>M(L),style:{...it.chip,...!l&&s===L?it.chipOn:{}},children:[L,"m"]},L)),n.jsx("button",{onClick:C,style:{...it.chip,...l?it.chipOn:{}},children:"Custom"})]}),l&&n.jsxs("div",{style:it.customRow,children:[n.jsx("input",{type:"number",min:"1",max:"600",inputMode:"numeric",autoFocus:!0,value:s||"",onChange:L=>U(L.target.value),placeholder:"e.g. 50",style:it.customInput}),n.jsx("span",{style:it.customUnit,children:"minutes"})]}),n.jsx("input",{value:d,onChange:L=>g(L.target.value),placeholder:"What are you focusing on? (optional)",style:it.input,maxLength:60}),n.jsx("div",{style:it.treePick,children:Object.entries(ye).map(([L,st])=>n.jsxs("button",{onClick:()=>h(L),title:st.label,style:{...it.treeBtn,...m===L?{borderColor:st.leaf,background:st.leaf+"1A"}:{}},children:[n.jsx("span",{style:{...it.treeDot,background:st.leaf}}),st.label]},L))}),n.jsxs("button",{onClick:B,style:it.toggleRow,children:[n.jsxs("div",{style:{textAlign:"left"},children:[n.jsx("div",{style:it.toggleTitle,children:"Deep Focus"}),n.jsx("div",{style:it.toggleHint,children:p?"Leaving the app kills the tree":"Tree survives until you give up"})]}),n.jsx("div",{style:{...it.switch,...p?it.switchOn:{}},children:n.jsx("div",{style:{...it.knob,...p?it.knobOn:{}}})})]}),n.jsx("button",{onClick:F,disabled:s<1,style:{...it.plantBtn,...s<1?{opacity:.5,cursor:"not-allowed"}:{}},children:"Plant tree"})]})]}),r==="running"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:it.timeBig,children:Tg(y)}),n.jsx("div",{style:it.focusLabel,children:d.trim()||"Focusing…"}),n.jsx("div",{style:p?it.warn:it.warnSoft,children:p?"⚠ Deep Focus on — leaving this app will kill your tree.":"🌿 Relaxed mode — only Give up ends this session."}),n.jsx("button",{onClick:W,style:it.giveUp,children:"Give up"})]}),r==="done"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:it.resultTitle,children:["🌳 You grew a ",ye[m].label," tree!"]}),n.jsxs("div",{style:it.resultSub,children:[Vs(s)," of focus added to your grove."]}),n.jsx("button",{onClick:q,style:it.plantBtn,children:"Plant another"})]}),r==="failed"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{...it.resultTitle,color:"#C2536B"},children:"Your tree withered."}),n.jsx("div",{style:it.resultSub,children:"You left before the timer finished. Try again?"}),n.jsx("button",{onClick:q,style:it.plantBtn,children:"Try again"})]})]}),n.jsx(Kh,{sessions:T.sessions,onDelete:async L=>{await O.deleteFocus(L),x()}})]})}function ns({label:t,value:e}){return n.jsxs("div",{style:it.stat,children:[n.jsx("div",{style:it.statValue,children:e}),n.jsx("div",{style:it.statLabel,children:t})]})}function Kh({sessions:t,onDelete:e}){const r=t.filter(l=>l.completed);if(r.length===0)return n.jsx("div",{style:it.forestEmpty,children:"Your grove is empty. Plant your first tree above. 🌱"});const o={};for(const l of r){const a=(l.started_at||l.created_at||"").slice(0,10);(o[a]||(o[a]=[])).push(l)}const s=Object.keys(o).sort().reverse(),i=l=>{const a=new Date().toISOString().slice(0,10);return l===a?"Today":new Date(l+"T00:00").toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})};return n.jsxs("div",{style:it.forest,children:[n.jsxs("div",{style:it.forestHead,children:["Your Grove · ",r.length," trees"]}),s.map(l=>n.jsxs("div",{style:it.daySection,children:[n.jsxs("div",{style:it.dayLabel,children:[i(l)," · ",o[l].length]}),n.jsx("div",{style:it.treeGrid,children:o[l].map(a=>n.jsxs("div",{style:it.treeCard,title:`${a.label||"Focus"} · ${Vs(a.actual_min)}`,onDoubleClick:()=>e(a.id),children:[n.jsx(Ah,{species:a.tree}),n.jsx("div",{style:it.treeCardMin,children:Vs(a.actual_min||a.duration_min)}),a.label&&n.jsx("div",{style:it.treeCardLabel,children:a.label})]},a.id))})]},l)),n.jsx("div",{style:it.forestHint,children:"Double-tap a tree to remove it."})]})}const it={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:820,margin:"0 auto"},head:{marginBottom:16,textAlign:"center"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},insightsBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginTop:12},statRow:{display:"flex",gap:10,justifyContent:"center",marginBottom:18,flexWrap:"wrap"},stat:{background:"var(--surface)",borderRadius:12,padding:"10px 18px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",minWidth:78},statValue:{fontSize:19,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},statLabel:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},stage:{background:"var(--surface)",borderRadius:18,padding:"28px 24px 32px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",display:"flex",flexDirection:"column",alignItems:"center",marginBottom:26},ringWrap:{position:"relative",width:300,height:300,display:"grid",placeItems:"center"},ringInner:{position:"relative",zIndex:1,display:"grid",placeItems:"center"},timeBig:{fontSize:40,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:6},focusLabel:{fontSize:14,color:"var(--text-2)",marginTop:2,fontWeight:500},warn:{fontSize:12,color:"#C2773B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},warnSoft:{fontSize:12,color:"#4C9A6B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},toggleRow:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:12,padding:"10px 14px",cursor:"pointer",fontFamily:"inherit",width:"100%"},toggleTitle:{fontSize:14,fontWeight:700,color:"var(--text)"},toggleHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},switch:{width:42,height:24,borderRadius:12,background:"var(--border)",flexShrink:0,padding:2,transition:"background 0.18s",boxSizing:"border-box"},switchOn:{background:"#4C9A6B"},knob:{width:20,height:20,borderRadius:"50%",background:"var(--surface)",boxShadow:"0 1px 2px rgba(0,0,0,0.2)",transform:"translateX(0)",transition:"transform 0.18s"},knobOn:{transform:"translateX(18px)"},controls:{width:"100%",maxWidth:380,display:"flex",flexDirection:"column",gap:14,marginTop:8},chips:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},chip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},customRow:{display:"flex",alignItems:"center",justifyContent:"center",gap:8},customInput:{border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:15,fontWeight:700,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center",width:100},customUnit:{fontSize:13,color:"var(--text-3)",fontWeight:600},input:{border:"1px solid var(--border)",borderRadius:10,padding:"11px 13px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center"},treePick:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},treeBtn:{display:"flex",alignItems:"center",gap:6,border:"1.5px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},treeDot:{width:10,height:10,borderRadius:"50%"},plantBtn:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},giveUp:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",padding:"11px 26px",borderRadius:11,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:18},resultTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginTop:14,textAlign:"center"},resultSub:{fontSize:13.5,color:"var(--text-3)",marginTop:6,marginBottom:18,textAlign:"center"},forest:{background:"var(--surface)",borderRadius:16,padding:"20px 22px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},forestHead:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},forestEmpty:{background:"var(--surface)",borderRadius:16,padding:"40px 20px",textAlign:"center",color:"var(--text-3)",fontSize:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},daySection:{marginBottom:16},dayLabel:{fontSize:12,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:8},treeGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(80px,1fr))",gap:8},treeCard:{display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 4px",borderRadius:10,cursor:"pointer",background:"var(--surface-2)"},treeCardMin:{fontSize:12,fontWeight:700,color:"#4C9A6B",marginTop:-4},treeCardLabel:{fontSize:10.5,color:"var(--text-3)",marginTop:2,textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:76},forestHint:{fontSize:11,color:"var(--text-3)",textAlign:"center",marginTop:6}},Jl=[{code:"INR",symbol:"₹",locale:"en-IN",label:"Indian Rupee"},{code:"USD",symbol:"$",locale:"en-US",label:"US Dollar"},{code:"EUR",symbol:"€",locale:"de-DE",label:"Euro"},{code:"GBP",symbol:"£",locale:"en-GB",label:"British Pound"},{code:"JPY",symbol:"¥",locale:"ja-JP",label:"Japanese Yen"},{code:"AED",symbol:"د.إ",locale:"en-AE",label:"UAE Dirham"},{code:"AUD",symbol:"A$",locale:"en-AU",label:"Australian Dollar"},{code:"CAD",symbol:"C$",locale:"en-CA",label:"Canadian Dollar"},{code:"SGD",symbol:"S$",locale:"en-SG",label:"Singapore Dollar"}],Eg="INR",jb="anvil_currency",nd=t=>Jl.find(e=>e.code===t)||Jl[0];function So(){try{return localStorage.getItem(jb)||Eg}catch{return Eg}}function Bg(t){try{localStorage.setItem(jb,t)}catch{}return window.dispatchEvent(new CustomEvent("anvil-currency",{detail:t})),t}function Ys(t,e){const r=nd(e||So()),o=Math.round(Number(t)||0);return r.symbol+o.toLocaleString(r.locale)}function Xh(t,e){const r=nd(e||So()),o=Math.round(Number(t)||0),s=Math.abs(o);return r.code==="INR"?s>=1e7?r.symbol+(o/1e7).toFixed(s>=1e8?0:1)+"Cr":s>=1e5?r.symbol+(o/1e5).toFixed(s>=1e6?0:1)+"L":s>=1e3?r.symbol+(o/1e3).toFixed(s>=1e4?0:1)+"K":r.symbol+o:s>=1e9?r.symbol+(o/1e9).toFixed(1)+"B":s>=1e6?r.symbol+(o/1e6).toFixed(1)+"M":s>=1e3?r.symbol+(o/1e3).toFixed(1)+"K":r.symbol+o}function Sb(){const[t,e]=f.useState(So());return f.useEffect(()=>{const r=o=>e(o.detail||So());return window.addEventListener("anvil-currency",r),()=>window.removeEventListener("anvil-currency",r)},[]),nd(t)}const Dg="grove_rates",Vi=Object.keys(ye),We=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,Rg=t=>{const e=new Date(t);e.setHours(0,0,0,0);const r=(e.getDay()+6)%7;return e.setDate(e.getDate()-r),e},Fg=t=>{const e=Math.floor(t/60),r=t%60;return e&&r?`${e}h ${r}m`:e?`${e}h`:`${r}m`},Jh=[{id:"week",label:"This week"},{id:"month",label:"This month"},{id:"last7",label:"Last 7 days"},{id:"year",label:"This year"}];function Yi(t){const e=new Date;if(t==="week")return[We(Rg(e)),We(e)];if(t==="month")return[We(new Date(e.getFullYear(),e.getMonth(),1)),We(e)];if(t==="last7"){const r=new Date(e);return r.setDate(r.getDate()-6),[We(r),We(e)]}return t==="year"?[We(new Date(e.getFullYear(),0,1)),We(e)]:[We(Rg(e)),We(e)]}function Zh(){const t=Sb(),e=x=>Ys(x,t.code),[r,o]=f.useState({}),[s,i]=f.useState([]),[l,a]=f.useState("week"),[d,g]=f.useState(()=>Yi("week")[0]),[m,h]=f.useState(()=>Yi("week")[1]),[p,w]=f.useState(!1);f.useEffect(()=>{(async()=>{try{const[x,D]=await Promise.all([O.getFocus(),O.getSetting(Dg)]);i(x.sessions||[]),o(D.value||{})}catch{}w(!0)})()},[]);const y=x=>{a(x);const[D,W]=Yi(x);g(D),h(W)},j=(x,D)=>{a(""),x==="from"?g(D):h(D)},T=(x,D)=>{const W=Math.max(0,parseFloat(D)||0),z={...r,[x]:W};o(z),O.setSetting(Dg,z).catch(()=>{})},b=f.useMemo(()=>{const x=d,D=m,W={};return Vi.forEach(z=>W[z]=0),s.filter(z=>z.completed).forEach(z=>{const B=(z.started_at||z.created_at||"").slice(0,10);if(B<x||B>D)return;const F=ye[z.tree]?z.tree:jo;W[F]+=z.actual_min||0}),Vi.map(z=>{const B=W[z],F=r[z]||0;return{pillar:z,minutes:B,rate:F,cost:B/60*F,...ye[z]}}).sort((z,B)=>B.cost-z.cost||B.minutes-z.minutes)},[s,r,d,m]),c=b.reduce((x,D)=>x+D.cost,0),u=b.reduce((x,D)=>x+D.minutes,0),k=Math.max(1,...b.map(x=>x.cost));return n.jsxs("div",{style:ct.page,children:[n.jsxs("div",{style:ct.head,children:[n.jsx("div",{style:ct.eyebrow,children:"Anvil · Worth"}),n.jsx("h1",{style:ct.h1,children:"Worth"}),n.jsx("div",{style:ct.subhead,children:"What your focused time is worth, by pillar."})]}),n.jsxs("div",{style:ct.hero,children:[n.jsx("div",{style:ct.heroVal,children:e(c)}),n.jsxs("div",{style:ct.heroSub,children:[Fg(u)," focused · ",d," → ",m]})]}),n.jsxs("div",{style:ct.card,children:[n.jsx("div",{style:ct.cardTitle,children:"Period"}),n.jsx("div",{style:ct.presetRow,children:Jh.map(x=>n.jsx("button",{onClick:()=>y(x.id),style:{...ct.preset,...l===x.id?ct.presetOn:{}},children:x.label},x.id))}),n.jsxs("div",{style:ct.dateRow,children:[n.jsxs("label",{style:ct.dateField,children:[n.jsx("span",{style:ct.dateLbl,children:"From"}),n.jsx("input",{type:"date",value:d,max:m,onChange:x=>j("from",x.target.value),style:ct.dateInput})]}),n.jsx("span",{style:ct.dateArrow,children:"→"}),n.jsxs("label",{style:ct.dateField,children:[n.jsx("span",{style:ct.dateLbl,children:"To"}),n.jsx("input",{type:"date",value:m,min:d,onChange:x=>j("to",x.target.value),style:ct.dateInput})]})]})]}),n.jsxs("div",{style:ct.card,children:[n.jsx("div",{style:ct.cardTitle,children:"Breakdown"}),p?u===0?n.jsx("div",{style:ct.muted,children:"No focus sessions in this period."}):n.jsxs("div",{style:ct.rows,children:[b.map(x=>n.jsxs("div",{style:ct.row,children:[n.jsxs("div",{style:ct.rowTop,children:[n.jsx("span",{style:{...ct.dot,background:x.leaf}}),n.jsx("span",{style:ct.rowName,children:x.label}),n.jsx("span",{style:ct.rowCost,children:e(x.cost)})]}),n.jsx("div",{style:ct.rowBarTrack,children:n.jsx("div",{style:{...ct.rowBar,width:`${x.cost/k*100}%`,background:x.leaf}})}),n.jsxs("div",{style:ct.rowMeta,children:[Fg(x.minutes)," × ",e(x.rate),"/hr"]})]},x.pillar)),n.jsxs("div",{style:ct.totalRow,children:[n.jsx("span",{children:"Total"}),n.jsx("span",{style:ct.totalVal,children:e(c)})]})]}):n.jsx("div",{style:ct.muted,children:"Loading…"})]}),n.jsxs("div",{style:ct.card,children:[n.jsx("div",{style:ct.cardTitle,children:"Hourly rates"}),n.jsx("div",{style:ct.cardHint,children:"Set how much an hour of focus is worth for each pillar."}),n.jsx("div",{style:ct.rateGrid,children:Vi.map(x=>n.jsxs("div",{style:ct.rateRow,children:[n.jsx("span",{style:{...ct.dot,background:ye[x].leaf}}),n.jsx("span",{style:ct.rateName,children:ye[x].label}),n.jsxs("div",{style:ct.rateInputWrap,children:[n.jsx("span",{style:ct.rupeeSign,children:t.symbol}),n.jsx("input",{type:"number",min:"0",inputMode:"numeric",placeholder:"0",value:r[x]??"",onChange:D=>T(x,D.target.value),style:ct.rateInput}),n.jsx("span",{style:ct.perHr,children:"/hr"})]})]},x))})]})]})}const ct={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},hero:{background:"linear-gradient(135deg,var(--accent-strong),var(--accent-2))",borderRadius:16,padding:"22px 24px",color:"#fff",marginBottom:16,textAlign:"center"},heroVal:{fontSize:38,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em"},heroSub:{fontSize:12.5,color:"var(--text-3)",marginTop:4},card:{background:"var(--surface)",borderRadius:16,padding:"18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},cardHint:{fontSize:12,color:"var(--text-3)",marginTop:-8,marginBottom:12},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},presetRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},preset:{border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:18,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},presetOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},dateRow:{display:"flex",alignItems:"flex-end",gap:10},dateField:{display:"flex",flexDirection:"column",gap:4,flex:1},dateLbl:{fontSize:11,color:"var(--text-2)",fontWeight:600},dateInput:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",outline:"none",width:"100%",boxSizing:"border-box"},dateArrow:{color:"var(--text-3)",paddingBottom:9},rows:{display:"flex",flexDirection:"column",gap:14},row:{},rowTop:{display:"flex",alignItems:"center",gap:8,marginBottom:6},dot:{width:11,height:11,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:14,fontWeight:600},rowCost:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},rowBarTrack:{height:8,background:"#F2F0EA",borderRadius:4,overflow:"hidden"},rowBar:{height:"100%",borderRadius:4,transition:"width 0.3s"},rowMeta:{fontSize:11.5,color:"var(--text-3)",marginTop:5,fontWeight:500},totalRow:{display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid var(--border)",paddingTop:12,marginTop:2,fontSize:14,fontWeight:700},totalVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},rateGrid:{display:"flex",flexDirection:"column",gap:10},rateRow:{display:"flex",alignItems:"center",gap:8},rateName:{flex:1,fontSize:14,fontWeight:600},rateInputWrap:{display:"flex",alignItems:"center",gap:3,border:"1px solid var(--border)",borderRadius:9,padding:"4px 10px",background:"var(--surface-2)"},rupeeSign:{fontSize:14,color:"var(--text-2)",fontWeight:600},rateInput:{border:"none",background:"none",outline:"none",width:64,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},perHr:{fontSize:12,color:"var(--text-3)",fontWeight:600}};function qh({onAuthed:t}){const[e,r]=f.useState("login"),[o,s]=f.useState(""),[i,l]=f.useState(""),[a,d]=f.useState(""),[g,m]=f.useState(""),[h,p]=f.useState(!1),w=e==="register",y=async j=>{if(j.preventDefault(),m(""),!i.trim()||!a){m("Email and password are required.");return}if(w&&a.length<6){m("Password must be at least 6 characters.");return}p(!0);try{const T=w?await O.register({name:o,email:i,password:a}):await O.login({email:i,password:a});Nf(T.token),t(T.user)}catch(T){m(T.message||"Something went wrong.")}finally{p(!1)}};return n.jsx("div",{style:Nt.page,children:n.jsxs("form",{style:Nt.card,onSubmit:y,children:[n.jsxs("div",{style:Nt.brand,children:[n.jsx("div",{style:Nt.logo,children:"B"}),n.jsx("span",{style:Nt.brandName,children:"Anvil"})]}),n.jsx("h1",{style:Nt.title,children:w?"Create your account":"Welcome back"}),n.jsx("p",{style:Nt.sub,children:w?"Start forging your days.":"Sign in to continue."}),w&&n.jsxs("label",{style:Nt.field,children:[n.jsx("span",{style:Nt.label,children:"Name"}),n.jsx("input",{value:o,onChange:j=>s(j.target.value),placeholder:"Your name",style:Nt.input,autoFocus:!0})]}),n.jsxs("label",{style:Nt.field,children:[n.jsx("span",{style:Nt.label,children:"Email"}),n.jsx("input",{type:"email",value:i,onChange:j=>l(j.target.value),placeholder:"you@example.com",style:Nt.input,autoFocus:!w})]}),n.jsxs("label",{style:Nt.field,children:[n.jsx("span",{style:Nt.label,children:"Password"}),n.jsx("input",{type:"password",value:a,onChange:j=>d(j.target.value),placeholder:"••••••••",style:Nt.input})]}),g&&n.jsx("div",{style:Nt.error,children:g}),n.jsx("button",{type:"submit",disabled:h,style:{...Nt.submit,...h?{opacity:.6}:{}},children:h?"Please wait…":w?"Create account":"Sign in"}),n.jsxs("div",{style:Nt.switch,children:[w?"Already have an account?":"New here?"," ",n.jsx("button",{type:"button",onClick:()=>{r(w?"login":"register"),m("")},style:Nt.link,children:w?"Sign in":"Create one"})]})]})})}const Nt={page:{minHeight:"100vh",display:"grid",placeItems:"center",background:"var(--bg)",fontFamily:"'Inter',system-ui,sans-serif",padding:20},card:{width:"100%",maxWidth:380,background:"var(--surface)",borderRadius:16,padding:"32px 28px",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",display:"flex",flexDirection:"column"},brand:{display:"flex",alignItems:"center",gap:9,marginBottom:20},logo:{width:32,height:32,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},brandName:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},title:{fontSize:22,fontWeight:700,margin:"0 0 4px",fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},sub:{fontSize:13.5,color:"var(--text-3)",margin:"0 0 22px"},field:{display:"flex",flexDirection:"column",gap:5,marginBottom:14},label:{fontSize:12,fontWeight:600,color:"var(--text-2)"},input:{border:"1px solid var(--border)",borderRadius:9,padding:"11px 12px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)"},error:{background:"rgba(194,83,107,0.10)",color:"#C2536B",fontSize:13,padding:"9px 12px",borderRadius:8,marginBottom:14,fontWeight:500},submit:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"12px",borderRadius:10,fontSize:14.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},switch:{fontSize:13,color:"var(--text-2)",textAlign:"center",marginTop:18},link:{border:"none",background:"none",color:"#3A7CA5",fontWeight:700,cursor:"pointer",fontFamily:"inherit",fontSize:13,padding:0}},Ag=["Salary","Stocks","Business","Interest","Rent","Gift","Other"],Wg=["Bills","EMI","Rent","Food","Shopping","Transport","Health","Entertainment","Education","Other"],tv={Salary:"#4C9A6B",Stocks:"#3A7CA5",Business:"#C9A227",Interest:"#8268B0",Gift:"#C2773B",Bills:"#C2536B",EMI:"#A23E57",Food:"#E08E45",Shopping:"#8268B0",Transport:"#3A7CA5",Health:"#4C9A6B",Entertainment:"#C9A227",Education:"#5B7C99",Rent:"#5B8C5A",Other:"#9A968C"},Cb=t=>tv[t]||"#9A968C",Pe="#3E9E6B",Ne="#D1556E",Un=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,no=Un(new Date),ev=[{id:"month",label:"This month"},{id:"last",label:"Last month"},{id:"year",label:"This year"},{id:"all",label:"All time"}];function rv(t){const e=new Date;return t==="month"?[Un(new Date(e.getFullYear(),e.getMonth(),1)),no]:t==="last"?[Un(new Date(e.getFullYear(),e.getMonth()-1,1)),Un(new Date(e.getFullYear(),e.getMonth(),0))]:t==="year"?[Un(new Date(e.getFullYear(),0,1)),no]:["0000-01-01","9999-12-31"]}function nv(){const t=Sb(),[e,r]=f.useState("overview"),[o,s]=f.useState([]),[i,l]=f.useState(!1),a=f.useCallback(()=>O.getTxns().then(g=>{s(g),l(!0)}).catch(()=>l(!0)),[]);f.useEffect(()=>{a()},[a]);const d=g=>Ys(g,t.code);return n.jsxs("div",{style:I.page,children:[n.jsxs("div",{style:I.head,children:[n.jsx("div",{style:I.eyebrow,children:"Anvil · Vault"}),n.jsx("h1",{style:I.h1,children:"Vault"}),n.jsx("div",{style:I.subhead,children:"Your money — what comes in, what goes out, and where it's headed."})]}),n.jsx("div",{style:I.tabs,children:[["overview","Overview",df],["money","Money",_f],["calc","Calculators",lf]].map(([g,m,h])=>n.jsxs("button",{onClick:()=>r(g),style:{...I.tab,...e===g?I.tabOn:{}},children:[n.jsx(h,{size:15})," ",m]},g))}),e==="overview"&&n.jsx(ov,{txns:o,loaded:i,money:d,cur:t}),e==="money"&&n.jsx(iv,{txns:o,reload:a,money:d}),e==="calc"&&n.jsx(lv,{money:d,cur:t})]})}function ov({txns:t,loaded:e,money:r,cur:o}){const[s,i]=f.useState("month"),[l,a]=rv(s),d=f.useMemo(()=>t.filter(j=>j.date>=l&&j.date<=a),[t,l,a]),g=d.filter(j=>j.kind==="income"),m=d.filter(j=>j.kind==="expense"),h=g.reduce((j,T)=>j+T.amount,0),p=m.reduce((j,T)=>j+T.amount,0),w=h-p,y=j=>{const T={};return j.forEach(b=>{T[b.category]=(T[b.category]||0)+b.amount}),Object.entries(T).map(([b,c])=>({category:b,amount:c})).sort((b,c)=>c.amount-b.amount)};return n.jsxs(n.Fragment,{children:[n.jsx("div",{style:I.presetRow,children:ev.map(j=>n.jsx("button",{onClick:()=>i(j.id),style:{...I.preset,...s===j.id?I.presetOn:{}},children:j.label},j.id))}),n.jsxs("div",{style:I.sumGrid,children:[n.jsx(Qi,{icon:n.jsx(Gl,{size:16}),label:"Income",value:r(h),color:Pe}),n.jsx(Qi,{icon:n.jsx(Ul,{size:16}),label:"Expenses",value:r(p),color:Ne}),n.jsx(Qi,{icon:w>=0?n.jsx(yb,{size:16}):n.jsx(vb,{size:16}),label:"Net savings",value:r(w),color:w>=0?Pe:Ne})]}),e?d.length===0?n.jsx("div",{style:I.card,children:n.jsxs("div",{style:I.muted,children:["No transactions in this period. Add some under the ",n.jsx("b",{children:"Money"})," tab."]})}):n.jsxs(n.Fragment,{children:[n.jsx(sv,{totalIn:h,totalOut:p}),n.jsxs("div",{style:I.twoCol,children:[n.jsx(Mg,{title:"Incoming",subtitle:"Where your money comes from",total:h,data:y(g),accent:Pe,cur:o}),n.jsx(Mg,{title:"Outgoing",subtitle:"Where your money goes",total:p,data:y(m),accent:Ne,cur:o})]})]}):n.jsx("div",{style:I.muted,children:"Loading…"})]})}function Qi({icon:t,label:e,value:r,color:o}){return n.jsxs("div",{style:I.sumCard,children:[n.jsx("div",{style:{...I.sumIcon,color:o,background:o+"1A"},children:t}),n.jsx("div",{style:I.sumLabel,children:e}),n.jsx("div",{style:{...I.sumVal,color:o},children:r})]})}function Mg({title:t,subtitle:e,total:r,data:o,accent:s,cur:i}){let l=0;const a=o.map(g=>{const m=r>0?l/r*100:0;l+=g.amount;const h=r>0?l/r*100:0;return{...g,start:m,end:h,color:Cb(g.category),pct:r>0?g.amount/r*100:0}}),d=a.length?`conic-gradient(${a.map(g=>`${g.color} ${g.start}% ${g.end}%`).join(", ")})`:"var(--surface-2)";return n.jsxs("div",{style:I.card,children:[n.jsxs("div",{style:I.cardTitleRow,children:[n.jsxs("div",{children:[n.jsx("div",{style:{...I.cardTitle,color:s},children:t}),n.jsx("div",{style:I.cardSub,children:e})]}),n.jsx("div",{style:{...I.cardTotal,color:s},children:Ys(r,i.code)})]}),o.length===0?n.jsx("div",{style:I.muted,children:"Nothing logged."}):n.jsxs("div",{style:I.pieWrap,children:[n.jsxs("div",{style:I.pieChart,children:[n.jsx("div",{style:{...I.pieDisc,background:d}}),n.jsxs("div",{style:I.pieHole,children:[n.jsx("span",{style:I.pieHoleVal,children:Xh(r,i.code)}),n.jsx("span",{style:I.pieHoleLbl,children:"total"})]})]}),n.jsx("div",{style:I.pieLegend,children:a.map(g=>n.jsxs("div",{style:I.legendRow,children:[n.jsx("span",{style:{...I.dot,background:g.color}}),n.jsx("span",{style:I.legendName,children:g.category}),n.jsxs("span",{style:I.legendPct,children:[Math.round(g.pct),"%"]}),n.jsx("span",{style:I.legendAmt,children:Ys(g.amount,i.code)})]},g.category))})]})]})}function sv({totalIn:t,totalOut:e}){const r=t-e,o=t>0?r/t:0,s=t===0?0:Math.max(0,Math.min(100,Math.round(50+o*100)));let i,l,a;t===0?(i="No income logged",l="#9A968C",a="Add your income to see your financial health."):o>=.3?(i="Excellent",l="#3E9E6B",a="You're saving 30%+ of income — keep investing the surplus."):o>=.2?(i="Healthy",l="#4C9A6B",a="Solid savings rate. Consider automating a SIP with the surplus."):o>=.1?(i="Okay",l="#C9A227",a="Decent, but aim for 20%+. Trim your biggest expense category."):o>=0?(i="Tight",l="#C2773B",a="You're saving very little. Review recurring bills and EMIs."):(i="Overspending",l="#D1556E",a="You're spending more than you earn. Cut back to avoid debt.");const d=t>0?Math.min(100,Math.round(e/t*100)):0;return n.jsxs("div",{style:I.card,children:[n.jsxs("div",{style:I.cardTitleRow,children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx(ff,{size:18,color:l}),n.jsxs("div",{children:[n.jsx("div",{style:I.cardTitle,children:"Financial health"}),n.jsx("div",{style:I.cardSub,children:"Based on your savings rate this period"})]})]}),n.jsxs("div",{style:{textAlign:"right"},children:[n.jsx("div",{style:{...I.healthScore,color:l},children:t===0?"—":s}),n.jsx("div",{style:{...I.healthStatus,color:l},children:i})]})]}),n.jsx("div",{style:I.gaugeTrack,children:n.jsx("div",{style:{...I.gaugeFill,width:`${t===0?0:s}%`,background:l}})}),n.jsxs("div",{style:I.healthStats,children:[n.jsxs("div",{style:I.healthStat,children:[n.jsxs("span",{style:I.healthStatV,children:[t>0?Math.round(o*100):0,"%"]}),n.jsx("span",{style:I.healthStatL,children:"Savings rate"})]}),n.jsxs("div",{style:I.healthStat,children:[n.jsxs("span",{style:I.healthStatV,children:[d,"%"]}),n.jsx("span",{style:I.healthStatL,children:"of income spent"})]})]}),n.jsx("div",{style:{...I.tip,borderColor:l+"55",background:l+"12",color:l},children:a})]})}function iv({txns:t,reload:e,money:r}){const[o,s]=f.useState("expense"),[i,l]=f.useState(""),[a,d]=f.useState("Bills"),[g,m]=f.useState(no),[h,p]=f.useState(""),[w,y]=f.useState(null),{deleteItem:j,toasts:T,handleUndo:b,handleDismiss:c}=En(O.deleteTxn,O.restoreTxn,e),u=o==="income"?Ag:Wg,k=M=>{s(M),d(M==="income"?"Salary":"Bills")},x=async()=>{const M=parseFloat(i);!M||M<=0||(await O.createTxn({kind:o,category:a,amount:M,note:h.trim(),date:g}),l(""),p(""),e())},D=M=>y({id:M.id,kind:M.kind,amount:String(M.amount),category:M.category,date:M.date,note:M.note||""}),W=(w==null?void 0:w.kind)==="income"?Ag:Wg,z=M=>y(C=>({...C,kind:M,category:W.includes(C.category)?C.category:M==="income"?"Salary":"Bills"})),B=async()=>{const M=parseFloat(w.amount);!M||M<=0||(await O.updateTxn(w.id,{kind:w.kind,category:w.category,amount:M,note:w.note.trim(),date:w.date}),y(null),e())},F=f.useMemo(()=>{const M={};return t.forEach(C=>{(M[C.date]=M[C.date]||[]).push(C)}),Object.entries(M).sort((C,U)=>U[0].localeCompare(C[0]))},[t]),q=M=>new Date(M+"T00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:I.card,children:[n.jsx("div",{style:I.cardTitle,children:"Add transaction"}),n.jsxs("div",{style:I.kindToggle,children:[n.jsxs("button",{onClick:()=>k("expense"),style:{...I.kindBtn,...o==="expense"?{background:Ne,color:"#fff",borderColor:Ne}:{}},children:[n.jsx(Ul,{size:15})," Expense"]}),n.jsxs("button",{onClick:()=>k("income"),style:{...I.kindBtn,...o==="income"?{background:Pe,color:"#fff",borderColor:Pe}:{}},children:[n.jsx(Gl,{size:15})," Income"]})]}),n.jsxs("div",{style:I.formGrid,children:[n.jsx("input",{type:"number",inputMode:"decimal",placeholder:"Amount",value:i,onChange:M=>l(M.target.value),onKeyDown:M=>M.key==="Enter"&&x(),style:I.input,autoFocus:!0}),n.jsx("select",{value:a,onChange:M=>d(M.target.value),style:I.input,children:u.map(M=>n.jsx("option",{children:M},M))}),n.jsx("input",{type:"date",value:g,max:no,onChange:M=>m(M.target.value),style:I.input})]}),n.jsx("input",{placeholder:"Note (optional)",value:h,onChange:M=>p(M.target.value),onKeyDown:M=>M.key==="Enter"&&x(),style:{...I.input,marginTop:8}}),n.jsxs("button",{onClick:x,style:{...I.addBtn,background:o==="income"?Pe:Ne},children:[n.jsx(de,{size:15})," Add ",o]})]}),n.jsxs("div",{style:I.card,children:[n.jsx("div",{style:I.cardTitle,children:"History"}),F.length===0?n.jsx("div",{style:I.muted,children:"No transactions yet."}):n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:F.map(([M,C])=>n.jsxs("div",{children:[n.jsx("div",{style:I.dateHead,children:q(M)}),C.map(U=>(w==null?void 0:w.id)===U.id?n.jsxs("div",{style:I.editTxn,children:[n.jsxs("div",{style:I.kindToggle,children:[n.jsxs("button",{onClick:()=>z("expense"),style:{...I.kindBtn,...w.kind==="expense"?{background:Ne,color:"#fff",borderColor:Ne}:{}},children:[n.jsx(Ul,{size:14})," Expense"]}),n.jsxs("button",{onClick:()=>z("income"),style:{...I.kindBtn,...w.kind==="income"?{background:Pe,color:"#fff",borderColor:Pe}:{}},children:[n.jsx(Gl,{size:14})," Income"]})]}),n.jsxs("div",{style:I.formGrid,children:[n.jsx("input",{type:"number",inputMode:"decimal",value:w.amount,onChange:ut=>y({...w,amount:ut.target.value}),style:I.input}),n.jsx("select",{value:w.category,onChange:ut=>y({...w,category:ut.target.value}),style:I.input,children:W.map(ut=>n.jsx("option",{children:ut},ut))}),n.jsx("input",{type:"date",value:w.date,max:no,onChange:ut=>y({...w,date:ut.target.value}),style:I.input})]}),n.jsx("input",{placeholder:"Note (optional)",value:w.note,onChange:ut=>y({...w,note:ut.target.value}),onKeyDown:ut=>ut.key==="Enter"&&B(),style:{...I.input,marginTop:8}}),n.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[n.jsxs("button",{onClick:()=>y(null),style:I.editCancel,children:[n.jsx(ft,{size:14})," Cancel"]}),n.jsxs("button",{onClick:B,style:{...I.addBtn,marginTop:0,flex:1,background:w.kind==="income"?Pe:Ne},children:[n.jsx(wt,{size:15})," Save"]})]})]},U.id):n.jsxs("div",{style:I.txnRow,children:[n.jsx("span",{style:{...I.txnDot,background:Cb(U.category)}}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:I.txnCat,children:U.category}),U.note&&n.jsx("div",{style:I.txnNote,children:U.note})]}),n.jsxs("span",{style:{...I.txnAmt,color:U.kind==="income"?Pe:Ne},children:[U.kind==="income"?"+":"−",r(U.amount)]}),n.jsx("button",{onClick:()=>D(U),style:I.delBtn,children:n.jsx(Fe,{size:13})}),n.jsx("button",{onClick:()=>j(U.id,U.category),style:I.delBtn,children:n.jsx(ft,{size:14})})]},U.id))]},M))})]}),n.jsx(Bn,{toasts:T,onUndo:b,onDismiss:c})]})}function lv({money:t,cur:e}){return n.jsxs(n.Fragment,{children:[n.jsx(av,{money:t,cur:e}),n.jsx(gv,{money:t,cur:e})]})}function Wr({label:t,value:e,set:r,min:o,max:s,step:i,suffix:l}){return n.jsxs("div",{style:I.field,children:[n.jsxs("div",{style:I.fieldTop,children:[n.jsx("span",{style:I.fieldLabel,children:t}),n.jsxs("div",{style:I.fieldInputWrap,children:[n.jsx("input",{type:"number",value:e,onChange:a=>r(a.target.value),style:I.fieldInput}),l&&n.jsx("span",{style:I.fieldSuffix,children:l})]})]}),n.jsx("input",{type:"range",min:o,max:s,step:i,value:e,onChange:a=>r(a.target.value),style:I.range})]})}function av({money:t,cur:e}){const[r,o]=f.useState(3e4),[s,i]=f.useState(12),[l,a]=f.useState(15),{invested:d,futureValue:g,gains:m,yearly:h}=f.useMemo(()=>{const w=Math.max(0,parseFloat(r)||0),y=Math.max(0,parseFloat(s)||0),j=Math.max(0,Math.min(60,parseInt(l)||0)),T=y/12/100,b=x=>x<=0?0:T===0?w*x:w*((Math.pow(1+T,x)-1)/T)*(1+T),c=[];for(let x=1;x<=j;x++)c.push({year:x,invested:w*12*x,value:b(x*12)});const u=b(j*12),k=w*12*j;return{invested:k,futureValue:u,gains:u-k,yearly:c}},[r,s,l]),p=Math.max(1,...h.map(w=>w.value));return n.jsxs("div",{style:I.card,children:[n.jsx("div",{style:I.cardTitleRow,children:n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx(zf,{size:18,color:"#3A7CA5"}),n.jsxs("div",{children:[n.jsx("div",{style:I.cardTitle,children:"SIP projection"}),n.jsx("div",{style:I.cardSub,children:"Mutual fund / SIP future value"})]})]})}),n.jsx(Wr,{label:"Monthly investment",value:r,set:o,min:500,max:5e5,step:500,suffix:e.symbol}),n.jsx(Wr,{label:"Expected return (p.a.)",value:s,set:i,min:1,max:30,step:.5,suffix:"%"}),n.jsx(Wr,{label:"Time period",value:l,set:a,min:1,max:40,step:1,suffix:"yrs"}),n.jsxs("div",{style:I.resultHero,children:[n.jsx("div",{style:I.resultLabel,children:"Projected wealth"}),n.jsx("div",{style:{...I.resultVal,color:"#3A7CA5"},children:t(g)})]}),n.jsxs("div",{style:I.splitRow,children:[n.jsxs("div",{style:I.splitItem,children:[n.jsx("span",{style:I.splitV,children:t(d)}),n.jsx("span",{style:I.splitL,children:"Invested"})]}),n.jsxs("div",{style:I.splitItem,children:[n.jsx("span",{style:{...I.splitV,color:"#3E9E6B"},children:t(m)}),n.jsx("span",{style:I.splitL,children:"Est. returns"})]})]}),h.length>0&&n.jsxs("div",{style:I.chartWrap,children:[n.jsx("div",{style:I.chartBars,children:h.map(w=>n.jsx("div",{style:I.chartCol,title:`Year ${w.year}: ${t(w.value)}`,children:n.jsx("div",{style:{...I.chartStack,height:`${w.value/p*100}%`},children:n.jsx("div",{style:{...I.chartGain,height:`${(1-w.invested/w.value)*100}%`}})})},w.year))}),n.jsxs("div",{style:I.chartAxis,children:[n.jsx("span",{children:"Yr 1"}),n.jsxs("span",{style:{marginLeft:"auto"},children:["Yr ",h.length]})]}),n.jsxs("div",{style:I.legend,children:[n.jsxs("span",{style:I.legendItem,children:[n.jsx("span",{style:{...I.legendDot,background:"#9DBFD6"}})," Invested"]}),n.jsxs("span",{style:I.legendItem,children:[n.jsx("span",{style:{...I.legendDot,background:"#3E9E6B"}})," Returns"]})]})]})]})}function _g(t,e,r,o=0,s=0){let i=Math.max(0,t-s),l=0,a=0,d=s;const g=1200;for(;i>.01&&a<g;){const m=i*e;let h=r+o,p=h-m;if(p<=0)return{months:1/0,totalInterest:1/0,totalPaid:1/0};p>i&&(p=i,h=i+m),i-=p,l+=m,d+=h,a++}return{months:a,totalInterest:l,totalPaid:d}}const Lg=t=>{if(!isFinite(t))return"—";const e=Math.floor(t/12),r=t%12;return(e?`${e}y `:"")+`${r}m`},dv=t=>{if(!isFinite(t))return"—";const e=new Date;return e.setMonth(e.getMonth()+t),e.toLocaleDateString("en-US",{month:"short",year:"numeric"})};function gv({money:t,cur:e}){const[r,o]=f.useState(2e6),[s,i]=f.useState(9),[l,a]=f.useState(20),[d,g]=f.useState(5e5),[m,h]=f.useState("once"),[p,w]=f.useState("tenure"),y=f.useMemo(()=>{const u=Math.max(0,parseFloat(r)||0),k=Math.max(0,parseFloat(s)||0)/12/100,x=Math.max(1,Math.round((parseFloat(l)||0)*12)),D=k===0?u/x:u*k*Math.pow(1+k,x)/(Math.pow(1+k,x)-1);return{P:u,i:k,n:x,emi:D,totalPay:D*x,totalInterest:D*x-u}},[r,s,l]),j=m==="monthly"?"tenure":p,T=f.useMemo(()=>{const{P:u,i:k,n:x,emi:D,totalInterest:W}=y,z=Math.max(0,parseFloat(d)||0);if(z<=0)return null;let B=D,F=x,q=W,M=y.totalPay;if(m==="once"&&j==="emi"){const C=Math.max(0,u-z);B=k===0?C/x:C*k*Math.pow(1+k,x)/(Math.pow(1+k,x)-1),F=x,q=B*x-C,M=z+B*x}else if(m==="once"){const C=_g(u,k,D,0,z);F=C.months,q=C.totalInterest,M=C.totalPaid}else{const C=_g(u,k,D,z,0);F=C.months,q=C.totalInterest,M=C.totalPaid}return{newEMI:B,newMonths:F,newInterest:q,totalPaid:M,interestSaved:Math.max(0,W-q),monthsSaved:Math.max(0,x-(isFinite(F)?F:x))}},[y,d,m,j]),b=y.totalPay>0?y.P/y.totalPay*100:0,c=m==="once"?Math.max(1e5,Math.round(y.P)):Math.max(5e4,Math.round(y.emi*3));return n.jsxs("div",{style:I.card,children:[n.jsx("div",{style:I.cardTitleRow,children:n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx(ub,{size:18,color:"#C2536B"}),n.jsxs("div",{children:[n.jsx("div",{style:I.cardTitle,children:"EMI calculator"}),n.jsx("div",{style:I.cardSub,children:"Loan / mortgage monthly payment"})]})]})}),n.jsx(Wr,{label:"Loan amount",value:r,set:o,min:5e4,max:5e7,step:5e4,suffix:e.symbol}),n.jsx(Wr,{label:"Interest rate (p.a.)",value:s,set:i,min:1,max:24,step:.1,suffix:"%"}),n.jsx(Wr,{label:"Tenure",value:l,set:a,min:1,max:30,step:1,suffix:"yrs"}),n.jsxs("div",{style:I.resultHero,children:[n.jsx("div",{style:I.resultLabel,children:"Monthly EMI"}),n.jsx("div",{style:{...I.resultVal,color:"#C2536B"},children:t(y.emi)})]}),n.jsxs("div",{style:I.emiSplitTrack,children:[n.jsx("div",{style:{width:`${b}%`,background:"#5B7C99",height:"100%"}}),n.jsx("div",{style:{width:`${100-b}%`,background:"#C2536B",height:"100%"}})]}),n.jsxs("div",{style:I.splitRow,children:[n.jsxs("div",{style:I.splitItem,children:[n.jsx("span",{style:{...I.splitV,color:"#5B7C99"},children:t(y.P)}),n.jsx("span",{style:I.splitL,children:"Principal"})]}),n.jsxs("div",{style:I.splitItem,children:[n.jsx("span",{style:{...I.splitV,color:"#C2536B"},children:t(y.totalInterest)}),n.jsx("span",{style:I.splitL,children:"Total interest"})]}),n.jsxs("div",{style:I.splitItem,children:[n.jsx("span",{style:I.splitV,children:t(y.totalPay)}),n.jsx("span",{style:I.splitL,children:"Total payable"})]})]}),n.jsx("div",{style:I.subDivider}),n.jsx("div",{style:I.subTitle,children:"Prepayment planner"}),n.jsx("div",{style:I.cardSub,children:"See what an extra payment does to your loan."}),n.jsx("div",{style:{marginTop:14},children:n.jsx(Wr,{label:"Prepayment amount",value:d,set:g,min:0,max:c,step:m==="once"?25e3:1e3,suffix:e.symbol})}),n.jsxs("div",{style:I.segGroup,children:[n.jsx("span",{style:I.segLbl,children:"Type"}),n.jsxs("div",{style:I.segRow,children:[n.jsx(os,{label:"One-time",on:m==="once",onClick:()=>h("once")}),n.jsx(os,{label:"Every month",on:m==="monthly",onClick:()=>h("monthly")})]})]}),n.jsxs("div",{style:I.segGroup,children:[n.jsx("span",{style:I.segLbl,children:"Strategy"}),n.jsxs("div",{style:I.segRow,children:[n.jsx(os,{label:"Reduce tenure",on:j==="tenure",onClick:()=>w("tenure")}),n.jsx(os,{label:"Reduce EMI",on:j==="emi",disabled:m==="monthly",onClick:()=>w("emi")})]})]}),m==="monthly"&&n.jsx("div",{style:I.note,children:"An extra monthly payment always shortens the tenure. Switch to a one-time prepayment to reduce your EMI instead."}),T?n.jsxs("div",{style:I.cmpCard,children:[n.jsxs("div",{style:I.cmpRow,children:[n.jsx("span",{style:I.cmpLbl,children:"New EMI"}),n.jsxs("span",{style:I.cmpVal,children:[t(T.newEMI),T.newEMI<y.emi-1&&n.jsxs("span",{style:I.cmpWas,children:[" was ",t(y.emi)]})]})]}),n.jsxs("div",{style:I.cmpRow,children:[n.jsx("span",{style:I.cmpLbl,children:"New tenure"}),n.jsxs("span",{style:I.cmpVal,children:[Lg(T.newMonths)," ",n.jsxs("span",{style:I.cmpWas,children:["· paid off ",dv(T.newMonths)]})]})]}),n.jsxs("div",{style:I.cmpRow,children:[n.jsx("span",{style:I.cmpLbl,children:"Total interest"}),n.jsx("span",{style:I.cmpVal,children:t(T.newInterest)})]}),n.jsxs("div",{style:I.cmpRow,children:[n.jsx("span",{style:I.cmpLbl,children:"Total payable"}),n.jsx("span",{style:I.cmpVal,children:t(T.totalPaid)})]}),n.jsxs("div",{style:I.saveRow,children:["You save ",t(T.interestSaved)," in interest",T.monthsSaved>0?` · ${Lg(T.monthsSaved)} sooner`:""]})]}):n.jsx("div",{style:I.muted,children:"Enter a prepayment amount to see the impact."})]})}function os({label:t,on:e,onClick:r,disabled:o}){return n.jsx("button",{onClick:o?void 0:r,disabled:o,style:{...I.seg,...e?I.segOn:{},...o?I.segDisabled:{}},children:t})}const I={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},tabs:{display:"flex",gap:7,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},presetRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},preset:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},presetOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},sumGrid:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:16},sumCard:{background:"var(--surface)",borderRadius:14,padding:"14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},sumIcon:{width:30,height:30,borderRadius:9,display:"grid",placeItems:"center",marginBottom:8},sumLabel:{fontSize:11.5,color:"var(--text-3)",fontWeight:600},sumVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2,letterSpacing:"-0.01em",wordBreak:"break-word"},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},cardTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},twoCol:{display:"grid",gridTemplateColumns:"1fr",gap:0},dot:{width:10,height:10,borderRadius:3,flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:160,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},healthScore:{fontSize:32,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1},healthStatus:{fontSize:12.5,fontWeight:700,marginTop:2},gaugeTrack:{height:10,background:"var(--surface-2)",borderRadius:6,overflow:"hidden",marginBottom:14},gaugeFill:{height:"100%",borderRadius:6,transition:"width 0.4s"},healthStats:{display:"flex",gap:24,marginBottom:12},healthStat:{display:"flex",flexDirection:"column"},healthStatV:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},healthStatL:{fontSize:11,color:"var(--text-3)",fontWeight:600},tip:{fontSize:12.5,lineHeight:1.5,padding:"10px 12px",borderRadius:10,border:"1px solid",fontWeight:500},kindToggle:{display:"flex",gap:8,marginBottom:12},kindBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},formGrid:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},input:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},addBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},dateHead:{fontSize:11,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8},txnRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},txnDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},txnCat:{fontSize:13.5,fontWeight:600},txnNote:{fontSize:11.5,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},txnAmt:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},editTxn:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:12,margin:"6px 0"},editCancel:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},field:{marginBottom:16},fieldTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},fieldLabel:{fontSize:13,fontWeight:600,color:"var(--text-2)"},fieldInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:8,padding:"5px 10px",background:"var(--surface-2)"},fieldInput:{border:"none",background:"none",outline:"none",width:90,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},fieldSuffix:{fontSize:12,color:"var(--text-3)",fontWeight:600},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},resultHero:{textAlign:"center",padding:"14px 0 6px"},resultLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},resultVal:{fontSize:34,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,wordBreak:"break-word"},splitRow:{display:"flex",gap:10,marginTop:10},splitItem:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",background:"var(--surface-2)",borderRadius:10,padding:"10px 6px"},splitV:{fontSize:14.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",wordBreak:"break-word"},splitL:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:2},chartWrap:{marginTop:18},chartBars:{display:"flex",alignItems:"flex-end",gap:3,height:90},chartCol:{flex:1,height:"100%",display:"flex",alignItems:"flex-end"},chartStack:{width:"100%",background:"#9DBFD6",borderRadius:"3px 3px 0 0",minHeight:2,position:"relative",display:"flex",flexDirection:"column",justifyContent:"flex-start"},chartGain:{width:"100%",background:"#3E9E6B",borderRadius:"3px 3px 0 0"},chartAxis:{display:"flex",fontSize:10,color:"var(--text-3)",fontWeight:600,marginTop:6},legend:{display:"flex",gap:16,justifyContent:"center",marginTop:10},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)",fontWeight:600},legendDot:{width:10,height:10,borderRadius:3},emiSplitTrack:{display:"flex",height:12,borderRadius:6,overflow:"hidden",marginTop:16,border:"1px solid var(--border)"},subDivider:{height:1,background:"var(--border)",margin:"20px 0 14px"},subTitle:{fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},segGroup:{marginBottom:12},segLbl:{fontSize:12,fontWeight:600,color:"var(--text-3)",display:"block",marginBottom:6},segRow:{display:"flex",gap:8},seg:{flex:1,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},segOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},segDisabled:{opacity:.4,cursor:"not-allowed"},note:{fontSize:12,lineHeight:1.5,color:"var(--text-3)",background:"var(--surface-2)",borderRadius:9,padding:"9px 11px",marginBottom:12},cmpCard:{background:"var(--surface-2)",borderRadius:12,padding:"12px 14px",marginTop:4},cmpRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"6px 0",borderBottom:"1px solid var(--border)",gap:10},cmpLbl:{fontSize:12.5,color:"var(--text-2)",fontWeight:600},cmpVal:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",textAlign:"right"},cmpWas:{fontSize:11,color:"var(--text-3)",fontWeight:500,fontFamily:"'Inter',system-ui,sans-serif"},saveRow:{marginTop:12,background:"rgba(62,158,107,0.12)",color:"#3E9E6B",borderRadius:9,padding:"10px 12px",fontSize:13,fontWeight:700,textAlign:"center"}},Zl=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Ki={Monday:"Mon",Tuesday:"Tue",Wednesday:"Wed",Thursday:"Thu",Friday:"Fri",Saturday:"Sat",Sunday:"Sun"},Vn=()=>Zl[(new Date().getDay()+6)%7],Ue={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},Pg=Object.keys(Ue),Xi=21,Ng="kickstart_tags",Ji=t=>{if(!t)return"";const e=t.trim();if(/^[A-Za-z0-9_-]{11}$/.test(e))return e;const r=e.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return r?r[1]:""},Og=t=>{if(!t||!String(t).trim())return null;const e=String(t).split(":").map(r=>parseInt(r.trim(),10));return e.some(r=>isNaN(r)||r<0)?null:e.reduce((r,o)=>r*60+o,0)},ss=t=>{if(t==null)return"";const e=Math.max(0,t|0);return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`},cv=t=>`https://www.youtube.com/embed/${t.youtube_id}?start=${t.start_sec||0}`+(t.end_sec?`&end=${t.end_sec}`:"")+"&autoplay=1&rel=0",uv=()=>({id:null,url:"",title:"",start:"",end:"",days:[Vn()],pillars:[],customs:[]});function bv(){const[t,e]=f.useState([]),[r,o]=f.useState([]),[s,i]=f.useState(!1),[l,a]=f.useState({type:"day",value:Vn()}),[d,g]=f.useState(null),[m,h]=f.useState(null),[p,w]=f.useState(""),y=f.useCallback(async()=>{try{const[C,U]=await Promise.all([O.getKickstart(),O.getSetting(Ng)]);e(C),o(Array.isArray(U==null?void 0:U.value)?U.value:[])}catch{}i(!0)},[]);f.useEffect(()=>{y()},[y]);const{deleteItem:j,toasts:T,handleUndo:b,handleDismiss:c}=En(O.deleteKickstart,O.restoreKickstart,y),u=C=>{o(C),O.setSetting(Ng,C).catch(()=>{})},k=()=>{const C=p.trim();!C||r.length>=Xi||r.includes(C)||(u([...r,C]),g(U=>U&&!U.customs.includes(C)?{...U,customs:[...U.customs,C]}:U),w(""))},x=C=>u(r.filter(U=>U!==C)),D=(C,U)=>g(ut=>({...ut,[C]:ut[C].includes(U)?ut[C].filter(Z=>Z!==U):[...ut[C],U]})),W=C=>g({id:C.id,url:`https://youtu.be/${C.youtube_id}`,title:C.title,start:ss(C.start_sec),end:C.end_sec?ss(C.end_sec):"",days:[...C.days],pillars:[...C.pillars],customs:[...C.customs]}),z=async()=>{const C=Ji(d.url);if(!C||d.days.length===0||!d.title.trim())return;const U={youtube_id:C,title:d.title.trim(),start_sec:Og(d.start)||0,end_sec:Og(d.end),days:d.days,pillars:d.pillars,customs:d.customs};d.id?await O.updateKickstart(d.id,U):await O.createKickstart(U),g(null),y()},B=f.useMemo(()=>t.filter(C=>l.type==="all"?!0:l.type==="day"?C.days.includes(l.value):l.type==="pillar"?C.pillars.includes(l.value):l.type==="custom"?C.customs.includes(l.value):!0),[t,l]),F=(C,U)=>l.type===C&&l.value===U,q=d?[!Ji(d.url)&&"a valid YouTube link",!d.title.trim()&&"a title",d.days.length===0&&"at least one day"].filter(Boolean):[],M=!!d&&q.length===0;return n.jsxs("div",{style:Y.page,children:[n.jsxs("div",{style:Y.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:Y.eyebrow,children:"Anvil · Kickstart"}),n.jsx("h1",{style:Y.h1,children:"Kickstart"}),n.jsxs("div",{style:Y.subhead,children:["Your motivation hub — the right push for ",Vn(),"."]})]}),!d&&n.jsxs("button",{onClick:()=>g(uv()),style:Y.addBtn,children:[n.jsx(de,{size:15})," Add video"]})]}),d&&n.jsxs("div",{style:Y.card,children:[n.jsx("div",{style:Y.cardTitle,children:d.id?"Edit video":"Add video"}),n.jsx("input",{placeholder:"YouTube link (or video ID)",value:d.url,onChange:C=>g({...d,url:C.target.value}),style:Y.input,autoFocus:!0}),d.url&&!Ji(d.url)&&n.jsx("div",{style:Y.warn,children:"Couldn't find a YouTube video ID in that link."}),n.jsx("input",{placeholder:"Title (required)",value:d.title,onChange:C=>g({...d,title:C.target.value}),style:{...Y.input,marginTop:8}}),n.jsxs("div",{style:Y.trimRow,children:[n.jsx(Bf,{size:15,color:"var(--text-3)"}),n.jsxs("label",{style:Y.trimField,children:[n.jsx("span",{style:Y.trimLbl,children:"Start"}),n.jsx("input",{placeholder:"0:30",value:d.start,onChange:C=>g({...d,start:C.target.value}),style:Y.trimInput})]}),n.jsx("span",{style:Y.trimArrow,children:"→"}),n.jsxs("label",{style:Y.trimField,children:[n.jsx("span",{style:Y.trimLbl,children:"End"}),n.jsx("input",{placeholder:"end (optional)",value:d.end,onChange:C=>g({...d,end:C.target.value}),style:Y.trimInput})]})]}),n.jsx("div",{style:Y.hint,children:"Only this trimmed part plays. Use m:ss (e.g. 1:30). Leave End blank to play to the end."}),n.jsxs("div",{style:Y.tagBlock,children:[n.jsxs("div",{style:Y.tagLabel,children:["Days ",n.jsx("span",{style:Y.req,children:"required"})]}),n.jsx("div",{style:Y.chipRow,children:Zl.map(C=>n.jsx("button",{onClick:()=>D("days",C),style:{...Y.chip,...d.days.includes(C)?Y.chipOnDark:{}},children:Ki[C]},C))})]}),n.jsxs("div",{style:Y.tagBlock,children:[n.jsxs("div",{style:Y.tagLabel,children:["Pillars ",n.jsx("span",{style:Y.opt,children:"optional"})]}),n.jsx("div",{style:Y.chipRow,children:Pg.map(C=>{const U=d.pillars.includes(C);return n.jsxs("button",{onClick:()=>D("pillars",C),style:{...Y.chip,...U?{background:Ue[C],color:"#fff",borderColor:Ue[C]}:{}},children:[n.jsx("span",{style:{...Y.dot,background:U?"#fff":Ue[C]}}),C]},C)})})]}),n.jsxs("div",{style:Y.tagBlock,children:[n.jsxs("div",{style:Y.tagLabel,children:["Custom tags ",n.jsxs("span",{style:Y.opt,children:["optional · ",r.length,"/",Xi]})]}),n.jsxs("div",{style:Y.chipRow,children:[r.map(C=>n.jsxs("span",{style:{...Y.chip,...d.customs.includes(C)?Y.chipOnAccent:{},paddingRight:4},children:[n.jsx("button",{onClick:()=>D("customs",C),style:Y.chipInner,children:C}),n.jsx("button",{onClick:()=>x(C),style:Y.chipX,title:"Delete tag",children:n.jsx(ft,{size:11})})]},C)),r.length===0&&n.jsx("span",{style:Y.muted,children:"No custom tags yet."})]}),r.length<Xi&&n.jsxs("div",{style:Y.newTagRow,children:[n.jsx("input",{placeholder:"New custom tag…",value:p,onChange:C=>w(C.target.value),onKeyDown:C=>C.key==="Enter"&&k(),style:{...Y.input,padding:"7px 10px"}}),n.jsx("button",{onClick:k,style:Y.smallBtn,children:n.jsx(de,{size:14})})]})]}),!M&&n.jsxs("div",{style:Y.warn,children:["Add ",q.join(", ")," to save."]}),n.jsxs("div",{style:Y.formActions,children:[n.jsxs("button",{onClick:()=>g(null),style:Y.cancelBtn,children:[n.jsx(ft,{size:14})," Cancel"]}),n.jsxs("button",{onClick:z,disabled:!M,style:{...Y.saveBtn,...M?{}:Y.saveDisabled},children:[n.jsx(wt,{size:15})," ",d.id?"Save":"Add video"]})]})]}),n.jsxs("div",{style:Y.filterCard,children:[n.jsx("button",{onClick:()=>a({type:"all"}),style:{...Y.fChip,...l.type==="all"?Y.fChipOnDark:{}},children:"All"}),n.jsx("span",{style:Y.fDivider}),Zl.map(C=>n.jsxs("button",{onClick:()=>a({type:"day",value:C}),style:{...Y.fChip,...F("day",C)?Y.fChipOnDark:{},...C===Vn()?Y.fToday:{}},children:[Ki[C],C===Vn()?" ·":""]},C)),n.jsx("span",{style:Y.fDivider}),Pg.map(C=>n.jsxs("button",{onClick:()=>a({type:"pillar",value:C}),style:{...Y.fChip,...F("pillar",C)?{background:Ue[C],color:"#fff",borderColor:Ue[C]}:{}},children:[n.jsx("span",{style:{...Y.dot,background:F("pillar",C)?"#fff":Ue[C]}}),C]},C)),r.length>0&&n.jsx("span",{style:Y.fDivider}),r.map(C=>n.jsxs("button",{onClick:()=>a({type:"custom",value:C}),style:{...Y.fChip,...F("custom",C)?Y.fChipOnAccent:{}},children:[n.jsx(Af,{size:11})," ",C]},C))]}),s?B.length===0?n.jsx("div",{style:Y.empty,children:t.length===0?"No videos yet — add your first motivation clip.":"No videos for this tag."}):n.jsx("div",{style:Y.grid,children:B.map(C=>n.jsxs("div",{style:Y.videoCard,children:[n.jsx("div",{style:Y.thumbWrap,children:m===C.id?n.jsx("iframe",{src:cv(C),title:C.title||C.youtube_id,style:Y.iframe,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):n.jsxs("button",{onClick:()=>h(C.id),style:Y.thumbBtn,children:[n.jsx("img",{src:`https://img.youtube.com/vi/${C.youtube_id}/hqdefault.jpg`,alt:"",style:Y.thumb}),n.jsx("span",{style:Y.playOverlay,children:n.jsx(Tf,{size:22,color:"#fff",fill:"#fff"})}),n.jsxs("span",{style:Y.trimBadge,children:[ss(C.start_sec),C.end_sec?` – ${ss(C.end_sec)}`:"+"]})]})}),n.jsxs("div",{style:Y.videoBody,children:[n.jsx("div",{style:Y.videoTitle,children:C.title||"Untitled clip"}),n.jsxs("div",{style:Y.tagWrap,children:[C.days.map(U=>n.jsx("span",{style:Y.dayTag,children:Ki[U]},U)),C.pillars.map(U=>n.jsx("span",{style:{...Y.pillTag,color:Ue[U]||"var(--text-2)",borderColor:Ue[U]||"var(--border)"},children:U},U)),C.customs.map(U=>n.jsx("span",{style:Y.customTag,children:U},U))]}),n.jsxs("div",{style:Y.cardActions,children:[n.jsx("button",{onClick:()=>W(C),style:Y.iconBtn,title:"Edit",children:n.jsx(Fe,{size:13})}),n.jsx("button",{onClick:()=>j(C.id,C.title||"video"),style:Y.iconBtn,title:"Delete",children:n.jsx(ft,{size:14})})]})]})]},C.id))}):n.jsx("div",{style:Y.muted,children:"Loading…"}),n.jsx(Bn,{toasts:T,onUndo:b,onDismiss:c})]})}const Y={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:1e3,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},warn:{fontSize:11.5,color:"#C2773B",marginTop:5,fontWeight:600},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:6,lineHeight:1.4},trimRow:{display:"flex",alignItems:"flex-end",gap:10,marginTop:10},trimField:{display:"flex",flexDirection:"column",gap:4,flex:1},trimLbl:{fontSize:11,color:"var(--text-2)",fontWeight:600},trimInput:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},trimArrow:{color:"var(--text-3)",paddingBottom:9},tagBlock:{marginTop:14},tagLabel:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},req:{fontSize:10,fontWeight:700,color:"#C2536B",textTransform:"uppercase",marginLeft:6},opt:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",marginLeft:6},chipRow:{display:"flex",gap:6,flexWrap:"wrap"},chip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},chipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},chipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},chipInner:{border:"none",background:"none",color:"inherit",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,padding:0},chipX:{border:"none",background:"rgba(0,0,0,0.12)",color:"inherit",cursor:"pointer",display:"grid",placeItems:"center",borderRadius:"50%",width:16,height:16,padding:0},newTagRow:{display:"flex",gap:6,marginTop:8,maxWidth:280},smallBtn:{border:"none",background:"var(--accent)",color:"#fff",width:34,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},dot:{width:8,height:8,borderRadius:"50%",flexShrink:0,display:"inline-block"},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"var(--accent)",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},filterCard:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:12,marginBottom:18},fChip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},fChipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},fChipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},fToday:{borderColor:"var(--accent)",borderWidth:2},fDivider:{width:1,alignSelf:"stretch",background:"var(--border)",margin:"0 2px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:14},videoCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 9",background:"#000"},thumbBtn:{border:"none",padding:0,margin:0,cursor:"pointer",width:"100%",height:"100%",position:"relative",display:"block",background:"#000"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center",background:"rgba(0,0,0,0.28)"},trimBadge:{position:"absolute",bottom:8,right:8,background:"rgba(0,0,0,0.75)",color:"#fff",fontSize:11,fontWeight:700,padding:"2px 7px",borderRadius:6,fontFamily:"'Fraunces',Georgia,serif"},iframe:{width:"100%",height:"100%",border:"none",display:"block"},videoBody:{padding:"12px 13px",display:"flex",flexDirection:"column",gap:8},videoTitle:{fontSize:14,fontWeight:700},tagWrap:{display:"flex",gap:5,flexWrap:"wrap"},dayTag:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:8},pillTag:{fontSize:10,fontWeight:700,border:"1px solid",borderRadius:8,padding:"2px 7px"},customTag:{fontSize:10,fontWeight:700,color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"2px 7px",borderRadius:8},cardActions:{display:"flex",gap:4,justifyContent:"flex-end"},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},$g=()=>new Date().toISOString().slice(0,10),Hg=(t,e)=>{const r=new Date(t+"T00:00:00");return r.setDate(r.getDate()+e),r.toISOString().slice(0,10)},Gg=t=>new Date(t+"T00:00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"}),pv=t=>{if(!t)return"";const e=t.trim();if(/^[A-Za-z0-9_-]{11}$/.test(e))return e;const r=e.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return r?r[1]:""},mv=t=>new Promise((e,r)=>{const o=new FileReader;o.onload=()=>{const s=new Image;s.onload=()=>{let{width:l,height:a}=s;l>a&&l>900?(a=a*900/l,l=900):a>900&&(l=l*900/a,a=900);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(s,0,0,l,a),e(d.toDataURL("image/jpeg",.82))},s.onerror=r,s.src=o.result},o.onerror=r,o.readAsDataURL(t)});function fv(){const[t,e]=f.useState([]),[r,o]=f.useState(!1),[s,i]=f.useState(null),[l,a]=f.useState(!1),[d,g]=f.useState({title:"",image:""}),[m,h]=f.useState(""),[p,w]=f.useState(!0),[y,j]=f.useState(null),T=f.useCallback(async()=>{try{e(await O.getGoldenGoals())}catch{}o(!0)},[]);f.useEffect(()=>{T()},[T]),f.useEffect(()=>{O.getSetting("golden_music").then(x=>h(pv((x==null?void 0:x.value)||""))).catch(()=>{})},[]);const b=async()=>{if(!d.title.trim())return;const x=await O.createGolden({title:d.title.trim(),image:d.image});g({title:"",image:""}),a(!1),await T(),i(x.id)},c=async(x,D)=>{var z;const W=(z=x.target.files)==null?void 0:z[0];if(W)try{D(await mv(W))}catch{}},u=t.filter(x=>!x.achieved),k=t.filter(x=>x.achieved);return s?n.jsxs("div",{style:Q.page,children:[n.jsx(yv,{musicId:m,on:p}),n.jsx(hv,{goalId:s,onBack:()=>i(null),onReload:T,onCelebrate:(x,D)=>j({title:x,days:D}),pickImage:c,musicId:m,musicOn:p,setMusicOn:w}),y&&n.jsx(vv,{data:y,onClose:()=>j(null)})]}):n.jsxs("div",{style:Q.page,children:[n.jsxs("div",{style:Q.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:Q.eyebrow,children:"Anvil · Golden Book"}),n.jsx("h1",{style:Q.h1,children:"Golden Book"}),n.jsx("div",{style:Q.subhead,children:"Write your dreams into being — a little every day."})]}),!l&&n.jsxs("button",{onClick:()=>a(!0),style:Q.addBtn,children:[n.jsx(de,{size:15})," New dream"]})]}),l&&n.jsxs("div",{style:Q.card,children:[n.jsx("div",{style:Q.cardTitle,children:"Manifest a new dream"}),n.jsx("textarea",{autoFocus:!0,placeholder:"Write your dream as if it's already true…",value:d.title,onChange:x=>g({...d,title:x.target.value}),style:Q.textarea}),n.jsxs("label",{style:Q.photoPick,children:[d.image?n.jsx("img",{src:d.image,alt:"",style:Q.photoPreview}):n.jsxs("span",{style:Q.photoEmpty,children:[n.jsx(Xa,{size:18})," Add a photo"]}),n.jsx("input",{type:"file",accept:"image/*",onChange:x=>c(x,D=>g({...d,image:D})),style:{display:"none"}})]}),n.jsxs("div",{style:Q.formActions,children:[n.jsxs("button",{onClick:()=>{a(!1),g({title:"",image:""})},style:Q.cancelBtn,children:[n.jsx(ft,{size:14})," Cancel"]}),n.jsxs("button",{onClick:b,disabled:!d.title.trim(),style:{...Q.saveBtn,...d.title.trim()?{}:Q.saveDisabled},children:[n.jsx(wt,{size:15})," Create"]})]})]}),r?n.jsxs(n.Fragment,{children:[u.length===0&&k.length===0&&!l&&n.jsx("div",{style:Q.empty,children:"No dreams yet. Add your first one and revisit it daily."}),u.length>0&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:Q.sectionTitle,children:[n.jsx(Bo,{size:15,color:"#C9A227"})," Manifesting ",n.jsx("span",{style:Q.badge,children:u.length})]}),n.jsx("div",{style:Q.grid,children:u.map(x=>n.jsx(Ug,{g:x,onOpen:()=>i(x.id)},x.id))})]}),k.length>0&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{...Q.sectionTitle,marginTop:22},children:[n.jsx(Hr,{size:15,color:"#4C9A6B"})," Manifested ",n.jsx("span",{style:Q.badge,children:k.length})]}),n.jsx("div",{style:Q.grid,children:k.map(x=>n.jsx(Ug,{g:x,onOpen:()=>i(x.id),achieved:!0},x.id))})]})]}):n.jsx("div",{style:Q.muted,children:"Loading…"})]})}function Ug({g:t,onOpen:e,achieved:r}){return n.jsxs("button",{onClick:e,style:{...Q.goalCard,...r?{opacity:.96}:{}},children:[n.jsxs("div",{style:Q.thumbWrap,children:[t.image?n.jsx("img",{src:t.image,alt:"",style:Q.thumb}):n.jsx("div",{style:Q.thumbEmpty,children:n.jsx(Bo,{size:26,color:"var(--text-3)"})}),r&&n.jsx("span",{style:Q.stamp,children:"✦ Manifested"})]}),n.jsxs("div",{style:Q.goalBody,children:[n.jsx("div",{style:Q.goalTitle,children:t.title}),n.jsxs("div",{style:Q.goalMeta,children:[r?n.jsxs("span",{style:{...Q.metaPill,color:"#4C9A6B",background:"rgba(76,154,107,0.12)"},children:[n.jsx(Hr,{size:12})," ",t.days_to_manifest!=null?`in ${t.days_to_manifest} day${t.days_to_manifest===1?"":"s"}`:"done"]}):n.jsxs("span",{style:{...Q.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[n.jsx(Tn,{size:12})," ",t.streak," day streak"]}),n.jsxs("span",{style:Q.metaDim,children:[t.total_days," entr",t.total_days===1?"y":"ies"]})]})]})]})}function hv({goalId:t,onBack:e,onReload:r,onCelebrate:o,pickImage:s,musicId:i,musicOn:l,setMusicOn:a}){const[d,g]=f.useState(null),[m,h]=f.useState({}),[p,w]=f.useState($g()),[y,j]=f.useState(""),[T,b]=f.useState(null),c=$g(),u=f.useCallback(async()=>{const M=await O.getGoldenGoal(t);g(M);const C={};M.entries.forEach(U=>{C[U.date]=U.text}),h(C),j(C[c]||"")},[t,c]);if(f.useEffect(()=>{u()},[u]),!d)return n.jsx("div",{style:Q.muted,children:"Loading…"});const k=p===c,x=p>d.created_date,D=p<c,W=async()=>{await O.upsertGoldenEntry(t,{date:c,text:y}),await u(),r()},z=async()=>{const M=await O.achieveGolden(t);o(d.title,M.days_to_manifest),await u(),r()},B=async()=>{await O.unachieveGolden(t),await u(),r()},F=async()=>{T.trim()&&(await O.updateGolden(t,{title:T.trim()}),b(null),await u(),r())},q=M=>O.updateGolden(t,{image:M}).then(()=>{u(),r()});return n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:e,style:Q.backBtn,children:[n.jsx(lb,{size:16})," All dreams"]}),n.jsxs("div",{style:Q.detailHero,children:[n.jsxs("label",{style:Q.heroPhoto,children:[d.image?n.jsx("img",{src:d.image,alt:"",style:Q.heroImg}):n.jsxs("span",{style:Q.photoEmpty,children:[n.jsx(Xa,{size:20})," Add a photo"]}),n.jsxs("span",{style:Q.photoEdit,children:[n.jsx(Fe,{size:12})," Edit photo"]}),n.jsx("input",{type:"file",accept:"image/*",onChange:M=>s(M,q),style:{display:"none"}})]}),n.jsxs("div",{style:Q.heroInfo,children:[d.achieved&&n.jsxs("span",{style:Q.heroStamp,children:["✦ Manifested",d.days_to_manifest!=null?` in ${d.days_to_manifest} day${d.days_to_manifest===1?"":"s"}`:""]}),T!==null?n.jsxs("div",{style:{display:"flex",gap:6,width:"100%"},children:[n.jsx("textarea",{autoFocus:!0,value:T,onChange:M=>b(M.target.value),style:{...Q.textarea,minHeight:60}}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[n.jsx("button",{onClick:F,style:Q.iconSave,children:n.jsx(wt,{size:14})}),n.jsx("button",{onClick:()=>b(null),style:Q.iconCancel,children:n.jsx(ft,{size:14})})]})]}):n.jsxs("div",{style:Q.heroTitleRow,children:[n.jsx("div",{style:Q.heroTitle,children:d.title}),n.jsx("button",{onClick:()=>b(d.title),style:Q.ghostBtn,title:"Edit",children:n.jsx(Fe,{size:13})})]}),n.jsxs("div",{style:Q.heroStats,children:[n.jsxs("span",{style:{...Q.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[n.jsx(Tn,{size:13})," ",d.streak," day streak"]}),n.jsxs("span",{style:Q.metaDim,children:[d.total_days," entr",d.total_days===1?"y":"ies"]}),n.jsxs("span",{style:Q.metaDim,children:["since ",Gg(d.created_date)]})]})]})]}),n.jsxs("div",{style:Q.writeCard,children:[n.jsx("div",{style:Q.tuneRow,children:i?n.jsxs("button",{onClick:()=>a(M=>!M),style:{...Q.tuneBtn,...l?Q.tuneOn:{}},children:[l?n.jsx(jf,{size:14}):n.jsx(mb,{size:14})," Soft tunes"]}):n.jsx("span",{style:Q.tuneHint,children:"Add a track in Settings → Music"})}),n.jsxs("div",{style:Q.writeNav,children:[n.jsx("button",{onClick:()=>w(M=>Hg(M,-1)),disabled:!x,style:{...Q.navBtn,...x?{}:Q.navDisabled},children:n.jsx(zn,{size:16})}),n.jsx("div",{style:Q.writeDate,children:k?"Today":Gg(p)}),n.jsx("button",{onClick:()=>w(M=>Hg(M,1)),disabled:!D,style:{...Q.navBtn,...D?{}:Q.navDisabled},children:n.jsx(Yr,{size:16})})]}),k&&!d.achieved?n.jsxs(n.Fragment,{children:[n.jsx("textarea",{value:y,onChange:M=>j(M.target.value),placeholder:"Write it again today, as if it's already yours…",style:Q.writeArea}),n.jsxs("button",{onClick:W,style:Q.writeSave,children:[n.jsx(wt,{size:15})," Save today's entry"]})]}):n.jsx("div",{style:Q.readEntry,children:m[p]?n.jsxs(n.Fragment,{children:[n.jsx(fb,{size:16,color:"var(--text-3)"}),n.jsx("p",{style:Q.readText,children:m[p]})]}):n.jsx("div",{style:Q.muted,children:"Nothing written on this day."})})]}),d.achieved?n.jsx("button",{onClick:B,style:Q.unmanifestBtn,children:"Undo manifested"}):n.jsxs("button",{onClick:z,style:Q.manifestBtn,children:[n.jsx(Bo,{size:16})," Mark as manifested"]})]})}function vv({data:t,onClose:e}){return n.jsx("div",{style:Q.celebOverlay,onClick:e,children:n.jsxs("div",{style:Q.celebBox,onClick:r=>r.stopPropagation(),children:[n.jsx("div",{style:Q.celebEmoji,children:"✨🌟✨"}),n.jsx("div",{style:Q.celebTitle,children:"It's happening!"}),n.jsxs("div",{style:Q.celebDream,children:['"',t.title,'"']}),n.jsxs("div",{style:Q.celebSub,children:[t.days!=null?`Manifested in ${t.days} day${t.days===1?"":"s"}.`:"Manifested."," The universe delivered. 🙏"]}),n.jsx("button",{onClick:e,style:Q.celebBtn,children:"Wonderful"})]})})}function yv({musicId:t,on:e}){return!t||!e?null:n.jsx("iframe",{title:"golden-music",src:`https://www.youtube.com/embed/${t}?autoplay=1&loop=1&playlist=${t}&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}})}const zr="#C9A227",Q={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:860,margin:"0 auto",position:"relative"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:zr,color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"11px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:70,resize:"vertical",lineHeight:1.5},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:zr,color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:12},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:14},goalCard:{textAlign:"left",border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,overflow:"hidden",cursor:"pointer",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",padding:0,fontFamily:"inherit",display:"flex",flexDirection:"column"},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 10",background:"var(--surface-2)"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},thumbEmpty:{width:"100%",height:"100%",display:"grid",placeItems:"center"},stamp:{position:"absolute",top:8,right:8,transform:"rotate(6deg)",background:"rgba(76,154,107,0.95)",color:"#fff",fontSize:11,fontWeight:800,letterSpacing:"0.04em",padding:"3px 9px",borderRadius:6,border:"1.5px solid #fff",textTransform:"uppercase"},goalBody:{padding:"11px 13px",display:"flex",flexDirection:"column",gap:8},goalTitle:{fontSize:14,fontWeight:600,lineHeight:1.35,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},goalMeta:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},metaPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:700,padding:"2px 8px",borderRadius:10},metaDim:{fontSize:11,color:"var(--text-3)",fontWeight:500},backBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginBottom:16},detailHero:{display:"flex",flexDirection:"column",gap:14,marginBottom:16},heroPhoto:{position:"relative",width:"100%",borderRadius:14,overflow:"hidden",border:"1px solid var(--border)",cursor:"pointer",background:"var(--surface-2)",display:"flex",alignItems:"center",justifyContent:"center",minHeight:120},heroImg:{width:"100%",maxHeight:"62vh",objectFit:"contain",display:"block"},photoEdit:{position:"absolute",bottom:8,right:8,display:"flex",alignItems:"center",gap:5,background:"rgba(0,0,0,0.6)",color:"#fff",fontSize:11,fontWeight:600,padding:"4px 8px",borderRadius:7},heroInfo:{display:"flex",flexDirection:"column",gap:10,alignItems:"center",textAlign:"center"},heroStamp:{alignSelf:"center",background:"rgba(76,154,107,0.14)",color:"#4C9A6B",fontSize:12,fontWeight:800,padding:"4px 10px",borderRadius:8,letterSpacing:"0.03em"},heroTitleRow:{display:"flex",alignItems:"flex-start",gap:8,justifyContent:"center"},heroTitle:{fontSize:23,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.35},heroStats:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",justifyContent:"center"},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",flexShrink:0},iconSave:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},iconCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},writeCard:{background:"var(--surface)",borderRadius:14,padding:16,border:"1px solid var(--border)",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},tuneRow:{display:"flex",justifyContent:"flex-end",marginBottom:10},tuneBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tuneOn:{background:zr,color:"#fff",borderColor:zr},tuneHint:{fontSize:11,color:"var(--text-3)",fontWeight:500},writeNav:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,marginBottom:12},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center"},navDisabled:{opacity:.35,cursor:"not-allowed"},writeDate:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:150,textAlign:"center"},writeArea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:120,resize:"vertical",lineHeight:1.6},writeSave:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",background:zr,color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},readEntry:{display:"flex",gap:8,padding:"6px 2px"},readText:{fontSize:15,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.6,margin:0,whiteSpace:"pre-wrap"},manifestBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,width:"100%",border:"none",background:"linear-gradient(135deg,#C9A227,#E0BD45)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:800,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 2px 10px rgba(201,162,39,0.35)"},unmanifestBtn:{display:"block",margin:"0 auto",border:"none",background:"none",color:"var(--text-3)",fontSize:12,fontWeight:600,cursor:"pointer",textDecoration:"underline",fontFamily:"inherit"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.6)",zIndex:200,display:"grid",placeItems:"center",padding:16},celebBox:{background:"var(--surface)",color:"var(--text)",borderRadius:20,padding:"36px 30px",textAlign:"center",maxWidth:360,boxShadow:"0 12px 48px rgba(0,0,0,0.3)"},celebEmoji:{fontSize:40,marginBottom:10},celebTitle:{fontSize:24,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginBottom:10,color:zr},celebDream:{fontSize:15,fontStyle:"italic",fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.5,marginBottom:10},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:zr,color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},ql=[{id:"sandstone",name:"Sandstone",description:"Warm editorial light — the original Anvil look.",dark:!1,swatch:["#F7F6F3","#4C9A6B","#26241F"],vars:{"--bg":"#F7F6F3","--surface":"#FFFFFF","--surface-2":"#FAFAF8","--hover":"#F2F1EC","--border":"#ECEAE3","--text":"#26241F","--text-2":"#6B675E","--text-3":"#9A968C","--accent":"#4C9A6B","--accent-strong":"#26241F","--accent-2":"#3A352C"}},{id:"midnight",name:"Midnight",description:"Deep low-glare dark mode for night owls and focus.",dark:!0,swatch:["#161513","#6FB58C","#ECEAE3"],vars:{"--bg":"#161513","--surface":"#211F1C","--surface-2":"#1B1A17","--hover":"#2B2924","--border":"#34312B","--text":"#ECEAE3","--text-2":"#B6B1A6","--text-3":"#8A857A","--accent":"#6FB58C","--accent-strong":"#2E6F4B","--accent-2":"#245C3E"}},{id:"blossom",name:"Blossom",description:"Soft rose & blush — gentle, warm, and feminine.",dark:!1,swatch:["#FFF5F8","#E0608E","#B23A6B"],vars:{"--bg":"#FFF5F8","--surface":"#FFFFFF","--surface-2":"#FFF0F4","--hover":"#FDE7EE","--border":"#F6D9E2","--text":"#3D2230","--text-2":"#7A5466","--text-3":"#B08799","--accent":"#E0608E","--accent-strong":"#B23A6B","--accent-2":"#9C2F5C"}},{id:"tide",name:"Tide",description:"Calm professional blues — clean and focused.",dark:!1,swatch:["#F1F6FA","#2E86C1","#1C4E73"],vars:{"--bg":"#F1F6FA","--surface":"#FFFFFF","--surface-2":"#ECF3F9","--hover":"#E2EEF6","--border":"#D5E3EE","--text":"#13283A","--text-2":"#4A6275","--text-3":"#8AA0B0","--accent":"#2E86C1","--accent-strong":"#1C4E73","--accent-2":"#163E5C"}},{id:"velocity",name:"Velocity",description:"High-energy sport — crisp slate with electric orange.",dark:!1,swatch:["#F4F5F7","#F4511E","#1F2A37"],vars:{"--bg":"#F4F5F7","--surface":"#FFFFFF","--surface-2":"#EEF0F3","--hover":"#E7EAEE","--border":"#DCE0E6","--text":"#18202B","--text-2":"#515B68","--text-3":"#8B95A1","--accent":"#F4511E","--accent-strong":"#1F2A37","--accent-2":"#16202B"}},{id:"evergreen",name:"Evergreen",description:"Earthy forest greens — grounded and natural.",dark:!1,swatch:["#F2F6F1","#3E8E52","#2A4A30"],vars:{"--bg":"#F2F6F1","--surface":"#FFFFFF","--surface-2":"#ECF2EA","--hover":"#E4EEE2","--border":"#D7E4D3","--text":"#1E2B20","--text-2":"#4F6151","--text-3":"#8AA08C","--accent":"#3E8E52","--accent-strong":"#2A4A30","--accent-2":"#213B26"}},{id:"amethyst",name:"Amethyst",description:"Premium purple & plum — elegant and refined.",dark:!1,swatch:["#F6F4FB","#7A4FE0","#3A2D5C"],vars:{"--bg":"#F6F4FB","--surface":"#FFFFFF","--surface-2":"#F1EDF9","--hover":"#EAE3F6","--border":"#DFD6F0","--text":"#241B36","--text-2":"#5A4E72","--text-3":"#9588AE","--accent":"#7A4FE0","--accent-strong":"#3A2D5C","--accent-2":"#2E2349"}}],Vg="sandstone",Ib="anvil_theme",xv=t=>ql.find(e=>e.id===t)||ql[0];function zb(){try{return localStorage.getItem(Ib)||Vg}catch{return Vg}}function Yn(t,e=!0){const r=xv(t),o=document.documentElement;Object.entries(r.vars).forEach(([i,l])=>o.style.setProperty(i,l)),o.style.colorScheme=r.dark?"dark":"light",o.setAttribute("data-theme",r.id);const s=document.querySelector('meta[name="theme-color"]');if(s&&s.setAttribute("content",r.vars["--surface"]),e)try{localStorage.setItem(Ib,r.id)}catch{}return r.id}function kv(t=560){const[e,r]=f.useState(()=>window.innerWidth<=t);return f.useEffect(()=>{const o=()=>r(window.innerWidth<=t);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[t]),e}function wv({screens:t,order:e,hidden:r,themeId:o,currency:s,ticker:i,onSaveSidebar:l,onPreviewTheme:a,onCommitTheme:d,onSelectCurrency:g,onSaveTicker:m,onClose:h}){const[p,w]=f.useState("sidebar"),[y,j]=f.useState(()=>e.map(_=>({id:_,hidden:r.includes(_)}))),[T,b]=f.useState(o),[c,u]=f.useState(""),[k,x]=f.useState(!1),D=kv(),[W,z]=f.useState(!!(i!=null&&i.enabled)),[B,F]=f.useState(()=>{const _=Array.isArray(i==null?void 0:i.statements)?i.statements.slice(0,5):[];return _.length?_:[""]}),[q,M]=f.useState((i==null?void 0:i.speed)??60),[C,U]=f.useState((i==null?void 0:i.delay)??3),[ut,Z]=f.useState(!1),E=(_,ot)=>F(jt=>jt.map((It,zt)=>zt===_?ot:It)),S=()=>F(_=>_.length<5?[..._,""]:_),N=_=>F(ot=>ot.length>1?ot.filter((jt,It)=>It!==_):ot),V=()=>{const _=B.map(ot=>ot.trim()).filter(Boolean).slice(0,5);m({enabled:W,statements:_,speed:Number(q),delay:Number(C)}),Z(!0),setTimeout(()=>Z(!1),1500)};f.useEffect(()=>{O.getSetting("golden_music").then(_=>u((_==null?void 0:_.value)||"")).catch(()=>{})},[]);const L=()=>{O.setSetting("golden_music",c.trim()).then(()=>{x(!0),setTimeout(()=>x(!1),1500)}).catch(()=>{})},st=_=>{b(_),a(_)},v=y.filter(_=>!_.hidden).length,P=(_,ot)=>{const jt=_+ot;if(jt<0||jt>=y.length)return;const It=[...y];[It[_],It[jt]]=[It[jt],It[_]],j(It)},gt=_=>{const ot=y[_];if(!ot.hidden&&v<=1)return;const jt=[...y];jt[_]={...ot,hidden:!ot.hidden},j(jt)},dt=()=>{l(y.map(_=>_.id),y.filter(_=>_.hidden).map(_=>_.id))},vt=D?{...tt.overlay,padding:0}:tt.overlay,Bt=D?{...tt.modal,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"100%",borderRadius:0,border:"none"}:tt.modal;return n.jsx("div",{style:vt,onClick:h,children:n.jsxs("div",{style:Bt,onClick:_=>_.stopPropagation(),children:[n.jsxs("div",{style:tt.head,children:[n.jsx("div",{style:tt.title,children:"Settings"}),n.jsx("button",{onClick:h,style:tt.closeBtn,children:n.jsx(ft,{size:18})})]}),n.jsxs("div",{style:tt.tabs,children:[n.jsxs("button",{onClick:()=>w("sidebar"),style:{...tt.tab,...p==="sidebar"?tt.tabOn:{}},children:[n.jsx(xf,{size:15})," Configure sidebar"]}),n.jsxs("button",{onClick:()=>w("themes"),style:{...tt.tab,...p==="themes"?tt.tabOn:{}},children:[n.jsx(Sf,{size:15})," Themes"]}),n.jsxs("button",{onClick:()=>w("currency"),style:{...tt.tab,...p==="currency"?tt.tabOn:{}},children:[n.jsx(uf,{size:15})," Currency"]}),n.jsxs("button",{onClick:()=>w("music"),style:{...tt.tab,...p==="music"?tt.tabOn:{}},children:[n.jsx(mb,{size:15})," Music"]}),n.jsxs("button",{onClick:()=>w("reminders"),style:{...tt.tab,...p==="reminders"?tt.tabOn:{}},children:[n.jsx(pb,{size:15})," Reminders"]})]}),n.jsx("div",{style:tt.body,children:p==="sidebar"?n.jsxs(n.Fragment,{children:[n.jsx("p",{style:tt.hint,children:"Reorder items with the arrows, and hide the ones you don't use. Hidden items disappear from the sidebar but stay accessible here."}),n.jsx("div",{style:tt.list,children:y.map((_,ot)=>{const jt=t[_.id],It=jt.icon;return n.jsxs("div",{style:{...tt.row,opacity:_.hidden?.5:1},children:[n.jsx("span",{style:tt.rowNum,children:ot+1}),n.jsx(It,{size:16}),n.jsx("span",{style:tt.rowLabel,children:jt.label}),n.jsx("button",{onClick:()=>gt(ot),title:_.hidden?"Show":"Hide",style:{...tt.iconBtn,..._.hidden?{}:{color:"var(--accent)"}},children:_.hidden?n.jsx(gb,{size:15}):n.jsx(cb,{size:15})}),n.jsx("button",{onClick:()=>P(ot,-1),disabled:ot===0,style:{...tt.iconBtn,opacity:ot===0?.3:1},children:n.jsx(gf,{size:15})}),n.jsx("button",{onClick:()=>P(ot,1),disabled:ot===y.length-1,style:{...tt.iconBtn,opacity:ot===y.length-1?.3:1},children:n.jsx(Qa,{size:15})})]},_.id)})}),n.jsxs("button",{onClick:dt,style:tt.saveBtn,children:[n.jsx(wt,{size:15})," Save sidebar"]})]}):p==="currency"?n.jsxs(n.Fragment,{children:[n.jsx("p",{style:tt.hint,children:"Choose the currency used across Vault and Worth. Applies instantly."}),n.jsx("div",{style:tt.list,children:Jl.map(_=>{const ot=_.code===s;return n.jsxs("button",{onClick:()=>g(_.code),style:{...tt.row,cursor:"pointer",textAlign:"left",width:"100%",...ot?{borderColor:"var(--accent)"}:{}},children:[n.jsx("span",{style:tt.curSymbol,children:_.symbol}),n.jsxs("span",{style:tt.rowLabel,children:[_.label," ",n.jsx("span",{style:tt.curCode,children:_.code})]}),ot&&n.jsx("span",{style:tt.themeCheck,children:n.jsx(wt,{size:13})})]},_.code)})})]}):p==="music"?n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:tt.hint,children:["Paste a YouTube link to play softly while you write in the ",n.jsx("b",{children:"Golden Book"}),". It plays only on that screen (audio only)."]}),n.jsx("input",{value:c,onChange:_=>u(_.target.value),placeholder:"https://youtube.com/watch?v=…",style:tt.musicInput}),n.jsxs("button",{onClick:L,style:tt.saveBtn,children:[n.jsx(wt,{size:15})," ",k?"Saved":"Save music"]})]}):p==="reminders"?n.jsxs(n.Fragment,{children:[n.jsx("p",{style:tt.hint,children:"Up to 5 reminders scroll across the top of every screen — a gentle nudge toward your goals."}),n.jsxs("button",{onClick:()=>z(_=>!_),style:{...tt.row,cursor:"pointer",width:"100%",justifyContent:"space-between",...W?{borderColor:"var(--accent)"}:{}},children:[n.jsx("span",{style:tt.rowLabel,children:"Show reminder banner"}),n.jsx("span",{style:{...tt.switch,...W?tt.switchOn:{}},children:W?"On":"Off"})]}),n.jsxs("div",{style:{marginTop:14},children:[n.jsxs("div",{style:tt.fieldLbl,children:["Reminders (",B.filter(_=>_.trim()).length,"/5)"]}),B.map((_,ot)=>n.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[n.jsx("input",{value:_,onChange:jt=>E(ot,jt.target.value),maxLength:120,placeholder:`Reminder ${ot+1}`,style:{...tt.musicInput,marginBottom:0}}),n.jsx("button",{onClick:()=>N(ot),style:tt.iconBtn,title:"Remove",children:n.jsx(ft,{size:15})})]},ot)),B.length<5&&n.jsxs("button",{onClick:S,style:tt.addRowBtn,children:[n.jsx(de,{size:14})," Add reminder"]})]}),n.jsxs("div",{style:{marginTop:16},children:[n.jsxs("div",{style:tt.sliderHead,children:[n.jsx("span",{style:tt.fieldLbl,children:"Scroll speed"}),n.jsxs("span",{style:tt.sliderVal,children:[q," px/s"]})]}),n.jsx("input",{type:"range",min:20,max:200,step:5,value:q,onChange:_=>M(_.target.value),style:tt.range})]}),n.jsxs("div",{style:{marginTop:12},children:[n.jsxs("div",{style:tt.sliderHead,children:[n.jsx("span",{style:tt.fieldLbl,children:"Delay between reminders"}),n.jsxs("span",{style:tt.sliderVal,children:[C,"s"]})]}),n.jsx("input",{type:"range",min:0,max:15,step:1,value:C,onChange:_=>U(_.target.value),style:tt.range})]}),n.jsxs("button",{onClick:V,style:{...tt.saveBtn,marginTop:16},children:[n.jsx(wt,{size:15})," ",ut?"Saved":"Save reminders"]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:tt.hint,children:["Tap a theme to preview it live, then hit ",n.jsx("b",{children:"Apply theme"})," to keep it."]}),n.jsx("div",{style:tt.themeGrid,children:ql.map(_=>{const ot=_.id===T;return n.jsxs("button",{onClick:()=>st(_.id),style:{...tt.themeCard,...ot?tt.themeCardOn:{}},children:[n.jsxs("div",{style:tt.swatchRow,children:[_.swatch.map((jt,It)=>n.jsx("span",{style:{...tt.swatch,background:jt}},It)),ot&&n.jsx("span",{style:tt.themeCheck,children:n.jsx(wt,{size:13})})]}),n.jsxs("div",{style:tt.themeName,children:[_.name,_.dark?n.jsx("span",{style:tt.darkTag,children:"Dark"}):null]}),n.jsx("div",{style:tt.themeDesc,children:_.description})]},_.id)})}),n.jsxs("button",{onClick:()=>d(T),disabled:T===o,style:{...tt.saveBtn,...T===o?tt.saveBtnDisabled:{}},children:[n.jsx(wt,{size:15})," ",T===o?"Theme applied":"Apply theme"]})]})})]})})}const tt={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,width:460,maxWidth:"100%",maxHeight:"88vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",overflow:"hidden"},head:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 18px",borderBottom:"1px solid var(--border)",flexShrink:0},title:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},tabs:{display:"flex",flexWrap:"wrap",gap:6,padding:"12px 18px 0",flexShrink:0},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"transparent"},body:{padding:"16px 18px 20px",overflowY:"auto",overflowX:"hidden",flex:1,minHeight:0},hint:{fontSize:12.5,color:"var(--text-3)",lineHeight:1.5,margin:"0 0 14px"},list:{display:"flex",flexDirection:"column",gap:6},row:{display:"flex",alignItems:"center",gap:10,padding:"9px 11px",background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:9},rowNum:{fontSize:11,fontWeight:700,color:"var(--text-3)",width:16,textAlign:"center"},rowLabel:{flex:1,fontSize:13.5,fontWeight:500},curSymbol:{width:22,textAlign:"center",fontSize:15,fontWeight:700,color:"var(--text)"},curCode:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginLeft:4},iconBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},saveBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",marginTop:16,border:"none",background:"var(--accent)",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer"},saveBtnDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"default"},musicInput:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:12},switch:{fontSize:12,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:20,padding:"3px 12px",minWidth:44,textAlign:"center"},switchOn:{background:"var(--accent)",color:"#fff"},fieldLbl:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},addRowBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},sliderHead:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},sliderVal:{fontSize:12,fontWeight:700,color:"var(--accent)"},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},themeGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},themeCard:{textAlign:"left",border:"2px solid var(--border)",background:"var(--surface-2)",borderRadius:12,padding:12,cursor:"pointer",display:"flex",flexDirection:"column",gap:6,outline:"none",WebkitTapHighlightColor:"transparent",transition:"border-color .15s ease, box-shadow .15s ease"},themeCardOn:{borderColor:"var(--accent)",boxShadow:"0 0 0 3px color-mix(in srgb, var(--accent) 25%, transparent)"},swatchRow:{display:"flex",alignItems:"center",gap:5,position:"relative"},swatch:{width:22,height:22,borderRadius:"50%",border:"1px solid rgba(0,0,0,0.08)"},themeCheck:{marginLeft:"auto",width:20,height:20,borderRadius:"50%",background:"var(--accent)",color:"#fff",display:"grid",placeItems:"center"},themeName:{fontSize:14,fontWeight:700,display:"flex",alignItems:"center",gap:6},darkTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",background:"var(--hover)",color:"var(--text-2)",padding:"1px 6px",borderRadius:6},themeDesc:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4}};function jv({statements:t,speed:e=60,delay:r=3}){const o=f.useMemo(()=>(t||[]).map(d=>(d||"").trim()).filter(Boolean).slice(0,5),[t]),[s,i]=f.useState(0),l=f.useRef(null),a=f.useRef(null);return f.useEffect(()=>{i(0)},[o]),f.useEffect(()=>{if(!o.length)return;const d=l.current,g=a.current;if(!d||!g)return;const m=d.offsetWidth,h=g.offsetWidth,p=Math.max(10,Number(e)||60),w=Math.max(2500,(m+h)/p*1e3),y=g.animate([{transform:`translateX(${m}px)`},{transform:`translateX(${-h}px)`}],{duration:w,easing:"linear",fill:"both"});let j;const T=()=>{j=setTimeout(()=>i(b=>(b+1)%o.length),Math.max(0,Number(r)||0)*1e3)};return y.addEventListener("finish",T),()=>{y.cancel(),y.removeEventListener("finish",T),clearTimeout(j)}},[s,o,e,r]),o.length?n.jsxs("div",{style:is.bar,"aria-label":"Reminders",children:[n.jsx("div",{style:is.icon,children:n.jsx(pb,{size:15})}),n.jsx("div",{ref:l,style:is.viewport,children:n.jsx("div",{ref:a,style:is.text,children:o[s%o.length]},s)})]}):null}const is={bar:{display:"flex",alignItems:"center",height:36,flexShrink:0,overflow:"hidden",borderBottom:"1px solid var(--border)",background:"color-mix(in srgb, var(--accent) 12%, var(--surface))"},icon:{display:"grid",placeItems:"center",width:42,height:"100%",flexShrink:0,color:"#fff",background:"var(--accent)"},viewport:{position:"relative",flex:1,height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},text:{whiteSpace:"nowrap",fontSize:13.5,fontWeight:700,color:"var(--text)",letterSpacing:"0.01em",willChange:"transform",paddingLeft:4}};Yn(zb(),!1);const oo={kickstart:{label:"Kickstart",icon:Ef,component:bv},golden:{label:"Golden Book",icon:bf,component:fv},habits:{label:"Habits",icon:Rf,component:lh},quadrant:{label:"Quadrant",icon:bb,component:Yf},goals:{label:"Goals",icon:Za,component:eh},grove:{label:"Grove",icon:Mf,component:Qh},worth:{label:"Worth",icon:yf,component:Zh},vault:{label:"Vault",icon:ub,component:nv},journal:{label:"Journal",icon:db,component:vh},revision:{label:"Revision",icon:hb,component:Bh},affirmations:{label:"Affirmations",icon:Bo,component:Fh},skills:{label:"Skills",icon:pf,component:yh},spiritual:{label:"Spiritual",icon:xs,component:wh}},Tb=["kickstart","golden","habits","quadrant","goals","grove","journal","revision","affirmations","skills","spiritual","worth","vault"];function ls(t){const e=Tb.filter(s=>oo[s]),o=[...(Array.isArray(t)?t:[]).filter(s=>oo[s])];return e.forEach(s=>{o.includes(s)||o.push(s)}),o}function Sv(){const[t,e]=f.useState(()=>window.innerWidth<720);return f.useEffect(()=>{const r=()=>e(window.innerWidth<720);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),t}function Cv(){const[t,e]=f.useState("habits"),[r,o]=f.useState(!1),[s,i]=f.useState(null),[l,a]=f.useState(!1),[d,g]=f.useState(!1),[m,h]=f.useState(zb()),[p,w]=f.useState(So()),[y,j]=f.useState({enabled:!1,statements:[],speed:60,delay:3}),[T,b]=f.useState(()=>ls(Tb)),[c,u]=f.useState([]),k=Sv();f.useEffect(()=>{let S=!1;const N=()=>{Yl(),i(null)};return window.addEventListener("anvil-unauthorized",N),td()?O.me().then(V=>{S||i(V)}).catch(()=>{}).finally(()=>{S||a(!0)}):a(!0),()=>{S=!0,window.removeEventListener("anvil-unauthorized",N)}},[]),f.useEffect(()=>{s&&(O.getSetting("theme").then(S=>{S!=null&&S.value&&h(Yn(S.value))}).catch(()=>{}),O.getSetting("currency").then(S=>{S!=null&&S.value&&w(Bg(S.value))}).catch(()=>{}),O.getSetting("ticker").then(S=>{S!=null&&S.value&&j(N=>({...N,...S.value}))}).catch(()=>{}),O.getSetting("sidebar_order").then(S=>{Array.isArray(S==null?void 0:S.value)&&b(ls(S.value))}).catch(()=>{}),O.getSetting("sidebar_hidden").then(S=>{Array.isArray(S==null?void 0:S.value)&&u(S.value)}).catch(()=>{}))},[s]);function x(S){e(S),o(!1)}const D=()=>{Yl(),i(null)},W=S=>{Yn(S,!1)},z=S=>{h(Yn(S)),O.setSetting("theme",S).catch(()=>{}),g(!1)},B=()=>{Yn(m,!1),g(!1)},F=S=>{w(Bg(S)),O.setSetting("currency",S).catch(()=>{})},q=S=>{j(S),O.setSetting("ticker",S).catch(()=>{})},M=(S,N)=>{if(b(ls(S)),u(N),g(!1),O.setSetting("sidebar_order",S).catch(()=>{}),O.setSetting("sidebar_hidden",N).catch(()=>{}),N.includes(t)){const V=ls(S).find(L=>!N.includes(L));V&&e(V)}},C=T.filter(S=>!c.includes(S));if(!l)return n.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:"'Inter',system-ui,sans-serif",color:"var(--text-3)"},children:"Loading…"});if(!s)return n.jsx(qh,{onAuthed:i});const U=oo[t],ut=U.component,Z=()=>n.jsx("div",{style:St.navItems,children:C.map(S=>{const N=oo[S];if(!N)return null;const V=N.icon,L=t===S;return n.jsxs("button",{onClick:()=>x(S),title:N.label,style:{...St.navItem,...L?St.navItemOn:{}},children:[n.jsx(V,{size:18}),n.jsx("span",{style:St.navLabel,children:N.label})]},S)})}),E=()=>n.jsxs("div",{style:St.footerWrap,children:[n.jsxs("button",{onClick:()=>g(!0),style:St.settingsBtn,title:"Settings",children:[n.jsx(Df,{size:17}),n.jsx("span",{children:"Settings"})]}),n.jsxs("div",{style:St.userFooter,children:[n.jsxs("div",{style:St.userInfo,children:[n.jsx("div",{style:St.userAvatar,children:(s.name||s.email||"?").charAt(0).toUpperCase()}),n.jsxs("div",{style:{minWidth:0},children:[n.jsx("div",{style:St.userName,children:s.name||"You"}),n.jsx("div",{style:St.userEmail,children:s.email})]})]}),n.jsx("button",{onClick:D,style:St.logoutBtn,title:"Sign out",children:n.jsx(kf,{size:16})})]})]});return n.jsxs("div",{style:St.shell,children:[!k&&n.jsxs("nav",{style:St.nav,children:[n.jsxs("div",{style:St.brand,children:[n.jsx("div",{style:St.brandLogo,children:"B"}),n.jsx("span",{style:St.brandName,children:"Anvil"})]}),n.jsx(Z,{}),n.jsx(E,{})]}),k&&r&&n.jsx("div",{style:St.overlay,onClick:()=>o(!1),children:n.jsxs("nav",{style:St.drawer,onClick:S=>S.stopPropagation(),children:[n.jsxs("div",{style:St.drawerHeader,children:[n.jsxs("div",{style:St.brand,children:[n.jsx("div",{style:St.brandLogo,children:"B"}),n.jsx("span",{style:St.brandName,children:"Anvil"})]}),n.jsx("button",{style:St.closeBtn,onClick:()=>o(!1),children:n.jsx(ft,{size:20})})]}),n.jsx(Z,{}),n.jsx(E,{})]})}),n.jsxs("div",{style:St.content,children:[k&&n.jsxs("div",{style:St.topBar,children:[n.jsx("button",{style:St.menuBtn,onClick:()=>o(!0),children:n.jsx(Ja,{size:22})}),n.jsx("span",{style:St.topBarTitle,children:U.label}),n.jsx("div",{style:{width:38}})]}),y.enabled&&n.jsx(jv,{statements:y.statements,speed:y.speed,delay:y.delay}),n.jsx("main",{style:St.main,children:n.jsx(ut,{})})]}),d&&n.jsx(wv,{screens:oo,order:T,hidden:c,themeId:m,currency:p,ticker:y,onSaveSidebar:M,onPreviewTheme:W,onCommitTheme:z,onSelectCurrency:F,onSaveTicker:q,onClose:B})]})}const St={shell:{display:"flex",height:"100vh",overflow:"hidden",fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)"},nav:{width:200,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column",padding:"20px 10px",gap:2},brand:{display:"flex",alignItems:"center",gap:9,padding:"6px 10px 20px",borderBottom:"1px solid var(--border)",marginBottom:8},brandLogo:{width:30,height:30,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:14,fontWeight:800,fontFamily:"'Fraunces', Georgia, serif",flexShrink:0},brandName:{fontSize:16,fontWeight:700,letterSpacing:"-0.01em",color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},navItems:{display:"flex",flexDirection:"column",gap:2},navItem:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},navItemOn:{background:"var(--hover)",color:"var(--text)",fontWeight:700},footerWrap:{marginTop:"auto",paddingTop:8},settingsBtn:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},userFooter:{marginTop:4,paddingTop:12,borderTop:"1px solid var(--border)",display:"flex",alignItems:"center",gap:8},userInfo:{display:"flex",alignItems:"center",gap:8,flex:1,minWidth:0},userAvatar:{width:30,height:30,borderRadius:"50%",background:"#8268B0",color:"#fff",display:"grid",placeItems:"center",fontSize:13,fontWeight:700,flexShrink:0},userName:{fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},userEmail:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logoutBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",padding:7,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},navLabel:{flex:1},content:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},main:{flex:1,overflowY:"auto",overflowX:"hidden"},topBar:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"var(--surface)",borderBottom:"1px solid var(--border)",flexShrink:0},topBarTitle:{fontSize:16,fontWeight:700,color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},menuBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text)",padding:8,borderRadius:8,display:"grid",placeItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:100,display:"flex"},drawer:{width:220,background:"var(--surface)",height:"100%",display:"flex",flexDirection:"column",padding:"16px 10px",gap:2,boxShadow:"4px 0 24px rgba(0,0,0,0.12)"},drawerHeader:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:4},closeBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",padding:6,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0}};sb(document.getElementById("root")).render(n.jsx(f.StrictMode,{children:n.jsx(Cv,{})}));
