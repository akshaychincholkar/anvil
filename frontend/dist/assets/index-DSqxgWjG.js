(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();var Ig={exports:{}},Fs={},zg={exports:{}},ut={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var po=Symbol.for("react.element"),ib=Symbol.for("react.portal"),lb=Symbol.for("react.fragment"),ab=Symbol.for("react.strict_mode"),db=Symbol.for("react.profiler"),gb=Symbol.for("react.provider"),cb=Symbol.for("react.context"),ub=Symbol.for("react.forward_ref"),bb=Symbol.for("react.suspense"),pb=Symbol.for("react.memo"),mb=Symbol.for("react.lazy"),Ha=Symbol.iterator;function fb(t){return t===null||typeof t!="object"?null:(t=Ha&&t[Ha]||t["@@iterator"],typeof t=="function"?t:null)}var Tg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Eg=Object.assign,Bg={};function un(t,e,r){this.props=t,this.context=e,this.refs=Bg,this.updater=r||Tg}un.prototype.isReactComponent={};un.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};un.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ag(){}Ag.prototype=un.prototype;function Pl(t,e,r){this.props=t,this.context=e,this.refs=Bg,this.updater=r||Tg}var Ol=Pl.prototype=new Ag;Ol.constructor=Pl;Eg(Ol,un.prototype);Ol.isPureReactComponent=!0;var Ua=Array.isArray,Fg=Object.prototype.hasOwnProperty,$l={current:null},Rg={key:!0,ref:!0,__self:!0,__source:!0};function Dg(t,e,r){var o,s={},i=null,l=null;if(e!=null)for(o in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(i=""+e.key),e)Fg.call(e,o)&&!Rg.hasOwnProperty(o)&&(s[o]=e[o]);var a=arguments.length-2;if(a===1)s.children=r;else if(1<a){for(var d=Array(a),g=0;g<a;g++)d[g]=arguments[g+2];s.children=d}if(t&&t.defaultProps)for(o in a=t.defaultProps,a)s[o]===void 0&&(s[o]=a[o]);return{$$typeof:po,type:t,key:i,ref:l,props:s,_owner:$l.current}}function vb(t,e){return{$$typeof:po,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hl(t){return typeof t=="object"&&t!==null&&t.$$typeof===po}function hb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var Ga=/\/+/g;function Ks(t,e){return typeof t=="object"&&t!==null&&t.key!=null?hb(""+t.key):e.toString(36)}function Vo(t,e,r,o,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case po:case ib:l=!0}}if(l)return l=t,s=s(l),t=o===""?"."+Ks(l,0):o,Ua(s)?(r="",t!=null&&(r=t.replace(Ga,"$&/")+"/"),Vo(s,e,r,"",function(g){return g})):s!=null&&(Hl(s)&&(s=vb(s,r+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(Ga,"$&/")+"/")+t)),e.push(s)),1;if(l=0,o=o===""?".":o+":",Ua(t))for(var a=0;a<t.length;a++){i=t[a];var d=o+Ks(i,a);l+=Vo(i,e,r,d,s)}else if(d=fb(t),typeof d=="function")for(t=d.call(t),a=0;!(i=t.next()).done;)i=i.value,d=o+Ks(i,a++),l+=Vo(i,e,r,d,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function xo(t,e,r){if(t==null)return t;var o=[],s=0;return Vo(t,o,"","",function(i){return e.call(r,i,s++)}),o}function yb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Jt={current:null},Yo={transition:null},xb={ReactCurrentDispatcher:Jt,ReactCurrentBatchConfig:Yo,ReactCurrentOwner:$l};function Wg(){throw Error("act(...) is not supported in production builds of React.")}ut.Children={map:xo,forEach:function(t,e,r){xo(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return xo(t,function(){e++}),e},toArray:function(t){return xo(t,function(e){return e})||[]},only:function(t){if(!Hl(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ut.Component=un;ut.Fragment=lb;ut.Profiler=db;ut.PureComponent=Pl;ut.StrictMode=ab;ut.Suspense=bb;ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xb;ut.act=Wg;ut.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=Eg({},t.props),s=t.key,i=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,l=$l.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(d in e)Fg.call(e,d)&&!Rg.hasOwnProperty(d)&&(o[d]=e[d]===void 0&&a!==void 0?a[d]:e[d])}var d=arguments.length-2;if(d===1)o.children=r;else if(1<d){a=Array(d);for(var g=0;g<d;g++)a[g]=arguments[g+2];o.children=a}return{$$typeof:po,type:t.type,key:s,ref:i,props:o,_owner:l}};ut.createContext=function(t){return t={$$typeof:cb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:gb,_context:t},t.Consumer=t};ut.createElement=Dg;ut.createFactory=function(t){var e=Dg.bind(null,t);return e.type=t,e};ut.createRef=function(){return{current:null}};ut.forwardRef=function(t){return{$$typeof:ub,render:t}};ut.isValidElement=Hl;ut.lazy=function(t){return{$$typeof:mb,_payload:{_status:-1,_result:t},_init:yb}};ut.memo=function(t,e){return{$$typeof:pb,type:t,compare:e===void 0?null:e}};ut.startTransition=function(t){var e=Yo.transition;Yo.transition={};try{t()}finally{Yo.transition=e}};ut.unstable_act=Wg;ut.useCallback=function(t,e){return Jt.current.useCallback(t,e)};ut.useContext=function(t){return Jt.current.useContext(t)};ut.useDebugValue=function(){};ut.useDeferredValue=function(t){return Jt.current.useDeferredValue(t)};ut.useEffect=function(t,e){return Jt.current.useEffect(t,e)};ut.useId=function(){return Jt.current.useId()};ut.useImperativeHandle=function(t,e,r){return Jt.current.useImperativeHandle(t,e,r)};ut.useInsertionEffect=function(t,e){return Jt.current.useInsertionEffect(t,e)};ut.useLayoutEffect=function(t,e){return Jt.current.useLayoutEffect(t,e)};ut.useMemo=function(t,e){return Jt.current.useMemo(t,e)};ut.useReducer=function(t,e,r){return Jt.current.useReducer(t,e,r)};ut.useRef=function(t){return Jt.current.useRef(t)};ut.useState=function(t){return Jt.current.useState(t)};ut.useSyncExternalStore=function(t,e,r){return Jt.current.useSyncExternalStore(t,e,r)};ut.useTransition=function(){return Jt.current.useTransition()};ut.version="18.3.1";zg.exports=ut;var y=zg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kb=y,wb=Symbol.for("react.element"),Sb=Symbol.for("react.fragment"),jb=Object.prototype.hasOwnProperty,Cb=kb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ib={key:!0,ref:!0,__self:!0,__source:!0};function Mg(t,e,r){var o,s={},i=null,l=null;r!==void 0&&(i=""+r),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(l=e.ref);for(o in e)jb.call(e,o)&&!Ib.hasOwnProperty(o)&&(s[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps,e)s[o]===void 0&&(s[o]=e[o]);return{$$typeof:wb,type:t,key:i,ref:l,props:s,_owner:Cb.current}}Fs.Fragment=Sb;Fs.jsx=Mg;Fs.jsxs=Mg;Ig.exports=Fs;var n=Ig.exports,_g={exports:{}},ae={},Lg={exports:{}},Ng={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,$){var Q=B.length;B.push($);t:for(;0<Q;){var P=Q-1>>>1,et=B[P];if(0<s(et,$))B[P]=$,B[Q]=et,Q=P;else break t}}function r(B){return B.length===0?null:B[0]}function o(B){if(B.length===0)return null;var $=B[0],Q=B.pop();if(Q!==$){B[0]=Q;t:for(var P=0,et=B.length,f=et>>>1;P<f;){var M=2*(P+1)-1,it=B[M],st=M+1,bt=B[st];if(0>s(it,Q))st<et&&0>s(bt,it)?(B[P]=bt,B[st]=Q,P=st):(B[P]=it,B[M]=Q,P=M);else if(st<et&&0>s(bt,Q))B[P]=bt,B[st]=Q,P=st;else break t}}return $}function s(B,$){var Q=B.sortIndex-$.sortIndex;return Q!==0?Q:B.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();t.unstable_now=function(){return l.now()-a}}var d=[],g=[],p=1,v=null,m=3,k=!1,x=!1,S=!1,z=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function c(B){for(var $=r(g);$!==null;){if($.callback===null)o(g);else if($.startTime<=B)o(g),$.sortIndex=$.expirationTime,e(d,$);else break;$=r(g)}}function h(B){if(S=!1,c(B),!x)if(r(d)!==null)x=!0,V(w);else{var $=r(g);$!==null&&E(h,$.startTime-B)}}function w(B,$){x=!1,S&&(S=!1,b(C),C=-1),k=!0;var Q=m;try{for(c($),v=r(d);v!==null&&(!(v.expirationTime>$)||B&&!Z());){var P=v.callback;if(typeof P=="function"){v.callback=null,m=v.priorityLevel;var et=P(v.expirationTime<=$);$=t.unstable_now(),typeof et=="function"?v.callback=et:v===r(d)&&o(d),c($)}else o(d);v=r(d)}if(v!==null)var f=!0;else{var M=r(g);M!==null&&E(h,M.startTime-$),f=!1}return f}finally{v=null,m=Q,k=!1}}var D=!1,W=null,C=-1,T=5,R=-1;function Z(){return!(t.unstable_now()-R<T)}function L(){if(W!==null){var B=t.unstable_now();R=B;var $=!0;try{$=W(!0,B)}finally{$?j():(D=!1,W=null)}}else D=!1}var j;if(typeof u=="function")j=function(){u(L)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,H=O.port2;O.port1.onmessage=L,j=function(){H.postMessage(null)}}else j=function(){z(L,0)};function V(B){W=B,D||(D=!0,j())}function E(B,$){C=z(function(){B(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){x||k||(x=!0,V(w))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return r(d)},t.unstable_next=function(B){switch(m){case 1:case 2:case 3:var $=3;break;default:$=m}var Q=m;m=$;try{return B()}finally{m=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,$){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Q=m;m=B;try{return $()}finally{m=Q}},t.unstable_scheduleCallback=function(B,$,Q){var P=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?P+Q:P):Q=P,B){case 1:var et=-1;break;case 2:et=250;break;case 5:et=1073741823;break;case 4:et=1e4;break;default:et=5e3}return et=Q+et,B={id:p++,callback:$,priorityLevel:B,startTime:Q,expirationTime:et,sortIndex:-1},Q>P?(B.sortIndex=Q,e(g,B),r(d)===null&&B===r(g)&&(S?(b(C),C=-1):S=!0,E(h,Q-P))):(B.sortIndex=et,e(d,B),x||k||(x=!0,V(w))),B},t.unstable_shouldYield=Z,t.unstable_wrapCallback=function(B){var $=m;return function(){var Q=m;m=$;try{return B.apply(this,arguments)}finally{m=Q}}}})(Ng);Lg.exports=Ng;var zb=Lg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tb=y,le=zb;function N(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pg=new Set,Yn={};function Mr(t,e){on(t,e),on(t+"Capture",e)}function on(t,e){for(Yn[t]=e,t=0;t<e.length;t++)Pg.add(e[t])}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_i=Object.prototype.hasOwnProperty,Eb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Va={},Ya={};function Bb(t){return _i.call(Ya,t)?!0:_i.call(Va,t)?!1:Eb.test(t)?Ya[t]=!0:(Va[t]=!0,!1)}function Ab(t,e,r,o){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Fb(t,e,r,o){if(e===null||typeof e>"u"||Ab(t,e,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(t,e,r,o,s,i,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=l}var Ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ut[t]=new Zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ut[e]=new Zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ut[t]=new Zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ut[t]=new Zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ut[t]=new Zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ut[t]=new Zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ut[t]=new Zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ut[t]=new Zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ut[t]=new Zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ul=/[\-:]([a-z])/g;function Gl(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ul,Gl);Ut[e]=new Zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ul,Gl);Ut[e]=new Zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ul,Gl);Ut[e]=new Zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ut[t]=new Zt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ut.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ut[t]=new Zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vl(t,e,r,o){var s=Ut.hasOwnProperty(e)?Ut[e]:null;(s!==null?s.type!==0:o||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Fb(e,r,s,o)&&(r=null),o||s===null?Bb(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):s.mustUseProperty?t[s.propertyName]=r===null?s.type===3?!1:"":r:(e=s.attributeName,o=s.attributeNamespace,r===null?t.removeAttribute(e):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,o?t.setAttributeNS(o,e,r):t.setAttribute(e,r))))}var Ze=Tb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ko=Symbol.for("react.element"),Pr=Symbol.for("react.portal"),Or=Symbol.for("react.fragment"),Yl=Symbol.for("react.strict_mode"),Li=Symbol.for("react.profiler"),Og=Symbol.for("react.provider"),$g=Symbol.for("react.context"),Ql=Symbol.for("react.forward_ref"),Ni=Symbol.for("react.suspense"),Pi=Symbol.for("react.suspense_list"),Kl=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),Hg=Symbol.for("react.offscreen"),Qa=Symbol.iterator;function yn(t){return t===null||typeof t!="object"?null:(t=Qa&&t[Qa]||t["@@iterator"],typeof t=="function"?t:null)}var Ft=Object.assign,Xs;function En(t){if(Xs===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);Xs=e&&e[1]||""}return`
`+Xs+t}var Js=!1;function Zs(t,e){if(!t||Js)return"";Js=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(g){var o=g}Reflect.construct(t,[],e)}else{try{e.call()}catch(g){o=g}t.call(e.prototype)}else{try{throw Error()}catch(g){o=g}t()}}catch(g){if(g&&o&&typeof g.stack=="string"){for(var s=g.stack.split(`
`),i=o.stack.split(`
`),l=s.length-1,a=i.length-1;1<=l&&0<=a&&s[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(s[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||s[l]!==i[a]){var d=`
`+s[l].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=l&&0<=a);break}}}finally{Js=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?En(t):""}function Rb(t){switch(t.tag){case 5:return En(t.type);case 16:return En("Lazy");case 13:return En("Suspense");case 19:return En("SuspenseList");case 0:case 2:case 15:return t=Zs(t.type,!1),t;case 11:return t=Zs(t.type.render,!1),t;case 1:return t=Zs(t.type,!0),t;default:return""}}function Oi(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Or:return"Fragment";case Pr:return"Portal";case Li:return"Profiler";case Yl:return"StrictMode";case Ni:return"Suspense";case Pi:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $g:return(t.displayName||"Context")+".Consumer";case Og:return(t._context.displayName||"Context")+".Provider";case Ql:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kl:return e=t.displayName||null,e!==null?e:Oi(t.type)||"Memo";case er:e=t._payload,t=t._init;try{return Oi(t(e))}catch{}}return null}function Db(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oi(e);case 8:return e===Yl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ug(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Wb(t){var e=Ug(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),o=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,i=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(l){o=""+l,i.call(this,l)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function wo(t){t._valueTracker||(t._valueTracker=Wb(t))}function Gg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),o="";return t&&(o=Ug(t)?t.checked?"true":"false":t.value),t=o,t!==r?(e.setValue(t),!0):!1}function is(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $i(t,e){var r=e.checked;return Ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Ka(t,e){var r=e.defaultValue==null?"":e.defaultValue,o=e.checked!=null?e.checked:e.defaultChecked;r=mr(e.value!=null?e.value:r),t._wrapperState={initialChecked:o,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Vg(t,e){e=e.checked,e!=null&&Vl(t,"checked",e,!1)}function Hi(t,e){Vg(t,e);var r=mr(e.value),o=e.type;if(r!=null)o==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(o==="submit"||o==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ui(t,e.type,r):e.hasOwnProperty("defaultValue")&&Ui(t,e.type,mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Xa(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var o=e.type;if(!(o!=="submit"&&o!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function Ui(t,e,r){(e!=="number"||is(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var Bn=Array.isArray;function Zr(t,e,r,o){if(t=t.options,e){e={};for(var s=0;s<r.length;s++)e["$"+r[s]]=!0;for(r=0;r<t.length;r++)s=e.hasOwnProperty("$"+t[r].value),t[r].selected!==s&&(t[r].selected=s),s&&o&&(t[r].defaultSelected=!0)}else{for(r=""+mr(r),e=null,s=0;s<t.length;s++){if(t[s].value===r){t[s].selected=!0,o&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Gi(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(N(91));return Ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ja(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(N(92));if(Bn(r)){if(1<r.length)throw Error(N(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:mr(r)}}function Yg(t,e){var r=mr(e.value),o=mr(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),o!=null&&(t.defaultValue=""+o)}function Za(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Qg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vi(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Qg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var So,Kg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,o,s){MSApp.execUnsafeLocalFunction(function(){return t(e,r,o,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(So=So||document.createElement("div"),So.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=So.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Qn(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Mn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mb=["Webkit","ms","Moz","O"];Object.keys(Mn).forEach(function(t){Mb.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Mn[e]=Mn[t]})});function Xg(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Mn.hasOwnProperty(t)&&Mn[t]?(""+e).trim():e+"px"}function Jg(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var o=r.indexOf("--")===0,s=Xg(r,e[r],o);r==="float"&&(r="cssFloat"),o?t.setProperty(r,s):t[r]=s}}var _b=Ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yi(t,e){if(e){if(_b[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(N(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(N(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(N(61))}if(e.style!=null&&typeof e.style!="object")throw Error(N(62))}}function Qi(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ki=null;function Xl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xi=null,qr=null,tn=null;function qa(t){if(t=vo(t)){if(typeof Xi!="function")throw Error(N(280));var e=t.stateNode;e&&(e=_s(e),Xi(t.stateNode,t.type,e))}}function Zg(t){qr?tn?tn.push(t):tn=[t]:qr=t}function qg(){if(qr){var t=qr,e=tn;if(tn=qr=null,qa(t),e)for(t=0;t<e.length;t++)qa(e[t])}}function tc(t,e){return t(e)}function ec(){}var qs=!1;function rc(t,e,r){if(qs)return t(e,r);qs=!0;try{return tc(t,e,r)}finally{qs=!1,(qr!==null||tn!==null)&&(ec(),qg())}}function Kn(t,e){var r=t.stateNode;if(r===null)return null;var o=_s(r);if(o===null)return null;r=o[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(N(231,e,typeof r));return r}var Ji=!1;if(Ye)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){Ji=!0}}),window.addEventListener("test",xn,xn),window.removeEventListener("test",xn,xn)}catch{Ji=!1}function Lb(t,e,r,o,s,i,l,a,d){var g=Array.prototype.slice.call(arguments,3);try{e.apply(r,g)}catch(p){this.onError(p)}}var _n=!1,ls=null,as=!1,Zi=null,Nb={onError:function(t){_n=!0,ls=t}};function Pb(t,e,r,o,s,i,l,a,d){_n=!1,ls=null,Lb.apply(Nb,arguments)}function Ob(t,e,r,o,s,i,l,a,d){if(Pb.apply(this,arguments),_n){if(_n){var g=ls;_n=!1,ls=null}else throw Error(N(198));as||(as=!0,Zi=g)}}function _r(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function nc(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function td(t){if(_r(t)!==t)throw Error(N(188))}function $b(t){var e=t.alternate;if(!e){if(e=_r(t),e===null)throw Error(N(188));return e!==t?null:t}for(var r=t,o=e;;){var s=r.return;if(s===null)break;var i=s.alternate;if(i===null){if(o=s.return,o!==null){r=o;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===r)return td(s),t;if(i===o)return td(s),e;i=i.sibling}throw Error(N(188))}if(r.return!==o.return)r=s,o=i;else{for(var l=!1,a=s.child;a;){if(a===r){l=!0,r=s,o=i;break}if(a===o){l=!0,o=s,r=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===r){l=!0,r=i,o=s;break}if(a===o){l=!0,o=i,r=s;break}a=a.sibling}if(!l)throw Error(N(189))}}if(r.alternate!==o)throw Error(N(190))}if(r.tag!==3)throw Error(N(188));return r.stateNode.current===r?t:e}function oc(t){return t=$b(t),t!==null?sc(t):null}function sc(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=sc(t);if(e!==null)return e;t=t.sibling}return null}var ic=le.unstable_scheduleCallback,ed=le.unstable_cancelCallback,Hb=le.unstable_shouldYield,Ub=le.unstable_requestPaint,Dt=le.unstable_now,Gb=le.unstable_getCurrentPriorityLevel,Jl=le.unstable_ImmediatePriority,lc=le.unstable_UserBlockingPriority,ds=le.unstable_NormalPriority,Vb=le.unstable_LowPriority,ac=le.unstable_IdlePriority,Rs=null,Me=null;function Yb(t){if(Me&&typeof Me.onCommitFiberRoot=="function")try{Me.onCommitFiberRoot(Rs,t,void 0,(t.current.flags&128)===128)}catch{}}var Se=Math.clz32?Math.clz32:Xb,Qb=Math.log,Kb=Math.LN2;function Xb(t){return t>>>=0,t===0?32:31-(Qb(t)/Kb|0)|0}var jo=64,Co=4194304;function An(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gs(t,e){var r=t.pendingLanes;if(r===0)return 0;var o=0,s=t.suspendedLanes,i=t.pingedLanes,l=r&268435455;if(l!==0){var a=l&~s;a!==0?o=An(a):(i&=l,i!==0&&(o=An(i)))}else l=r&~s,l!==0?o=An(l):i!==0&&(o=An(i));if(o===0)return 0;if(e!==0&&e!==o&&!(e&s)&&(s=o&-o,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(o&4&&(o|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=o;0<e;)r=31-Se(e),s=1<<r,o|=t[r],e&=~s;return o}function Jb(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zb(t,e){for(var r=t.suspendedLanes,o=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var l=31-Se(i),a=1<<l,d=s[l];d===-1?(!(a&r)||a&o)&&(s[l]=Jb(a,e)):d<=e&&(t.expiredLanes|=a),i&=~a}}function qi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function dc(){var t=jo;return jo<<=1,!(jo&4194240)&&(jo=64),t}function ti(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function mo(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Se(e),t[e]=r}function qb(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var o=t.eventTimes;for(t=t.expirationTimes;0<r;){var s=31-Se(r),i=1<<s;e[s]=0,o[s]=-1,t[s]=-1,r&=~i}}function Zl(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var o=31-Se(r),s=1<<o;s&e|t[o]&e&&(t[o]|=e),r&=~s}}var yt=0;function gc(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var cc,ql,uc,bc,pc,tl=!1,Io=[],lr=null,ar=null,dr=null,Xn=new Map,Jn=new Map,nr=[],tp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rd(t,e){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":Xn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jn.delete(e.pointerId)}}function kn(t,e,r,o,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:r,eventSystemFlags:o,nativeEvent:i,targetContainers:[s]},e!==null&&(e=vo(e),e!==null&&ql(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function ep(t,e,r,o,s){switch(e){case"focusin":return lr=kn(lr,t,e,r,o,s),!0;case"dragenter":return ar=kn(ar,t,e,r,o,s),!0;case"mouseover":return dr=kn(dr,t,e,r,o,s),!0;case"pointerover":var i=s.pointerId;return Xn.set(i,kn(Xn.get(i)||null,t,e,r,o,s)),!0;case"gotpointercapture":return i=s.pointerId,Jn.set(i,kn(Jn.get(i)||null,t,e,r,o,s)),!0}return!1}function mc(t){var e=jr(t.target);if(e!==null){var r=_r(e);if(r!==null){if(e=r.tag,e===13){if(e=nc(r),e!==null){t.blockedOn=e,pc(t.priority,function(){uc(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=el(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);Ki=o,r.target.dispatchEvent(o),Ki=null}else return e=vo(r),e!==null&&ql(e),t.blockedOn=r,!1;e.shift()}return!0}function nd(t,e,r){Qo(t)&&r.delete(e)}function rp(){tl=!1,lr!==null&&Qo(lr)&&(lr=null),ar!==null&&Qo(ar)&&(ar=null),dr!==null&&Qo(dr)&&(dr=null),Xn.forEach(nd),Jn.forEach(nd)}function wn(t,e){t.blockedOn===e&&(t.blockedOn=null,tl||(tl=!0,le.unstable_scheduleCallback(le.unstable_NormalPriority,rp)))}function Zn(t){function e(s){return wn(s,t)}if(0<Io.length){wn(Io[0],t);for(var r=1;r<Io.length;r++){var o=Io[r];o.blockedOn===t&&(o.blockedOn=null)}}for(lr!==null&&wn(lr,t),ar!==null&&wn(ar,t),dr!==null&&wn(dr,t),Xn.forEach(e),Jn.forEach(e),r=0;r<nr.length;r++)o=nr[r],o.blockedOn===t&&(o.blockedOn=null);for(;0<nr.length&&(r=nr[0],r.blockedOn===null);)mc(r),r.blockedOn===null&&nr.shift()}var en=Ze.ReactCurrentBatchConfig,cs=!0;function np(t,e,r,o){var s=yt,i=en.transition;en.transition=null;try{yt=1,ta(t,e,r,o)}finally{yt=s,en.transition=i}}function op(t,e,r,o){var s=yt,i=en.transition;en.transition=null;try{yt=4,ta(t,e,r,o)}finally{yt=s,en.transition=i}}function ta(t,e,r,o){if(cs){var s=el(t,e,r,o);if(s===null)gi(t,e,o,us,r),rd(t,o);else if(ep(s,t,e,r,o))o.stopPropagation();else if(rd(t,o),e&4&&-1<tp.indexOf(t)){for(;s!==null;){var i=vo(s);if(i!==null&&cc(i),i=el(t,e,r,o),i===null&&gi(t,e,o,us,r),i===s)break;s=i}s!==null&&o.stopPropagation()}else gi(t,e,o,null,r)}}var us=null;function el(t,e,r,o){if(us=null,t=Xl(o),t=jr(t),t!==null)if(e=_r(t),e===null)t=null;else if(r=e.tag,r===13){if(t=nc(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return us=t,null}function fc(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gb()){case Jl:return 1;case lc:return 4;case ds:case Vb:return 16;case ac:return 536870912;default:return 16}default:return 16}}var sr=null,ea=null,Ko=null;function vc(){if(Ko)return Ko;var t,e=ea,r=e.length,o,s="value"in sr?sr.value:sr.textContent,i=s.length;for(t=0;t<r&&e[t]===s[t];t++);var l=r-t;for(o=1;o<=l&&e[r-o]===s[i-o];o++);return Ko=s.slice(t,1<o?1-o:void 0)}function Xo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function zo(){return!0}function od(){return!1}function de(t){function e(r,o,s,i,l){this._reactName=r,this._targetInst=s,this.type=o,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(r=t[a],this[a]=r?r(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?zo:od,this.isPropagationStopped=od,this}return Ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),e}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ra=de(bn),fo=Ft({},bn,{view:0,detail:0}),sp=de(fo),ei,ri,Sn,Ds=Ft({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:na,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Sn&&(Sn&&t.type==="mousemove"?(ei=t.screenX-Sn.screenX,ri=t.screenY-Sn.screenY):ri=ei=0,Sn=t),ei)},movementY:function(t){return"movementY"in t?t.movementY:ri}}),sd=de(Ds),ip=Ft({},Ds,{dataTransfer:0}),lp=de(ip),ap=Ft({},fo,{relatedTarget:0}),ni=de(ap),dp=Ft({},bn,{animationName:0,elapsedTime:0,pseudoElement:0}),gp=de(dp),cp=Ft({},bn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),up=de(cp),bp=Ft({},bn,{data:0}),id=de(bp),pp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vp(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=fp[t])?!!e[t]:!1}function na(){return vp}var hp=Ft({},fo,{key:function(t){if(t.key){var e=pp[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mp[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:na,charCode:function(t){return t.type==="keypress"?Xo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yp=de(hp),xp=Ft({},Ds,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ld=de(xp),kp=Ft({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:na}),wp=de(kp),Sp=Ft({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),jp=de(Sp),Cp=Ft({},Ds,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ip=de(Cp),zp=[9,13,27,32],oa=Ye&&"CompositionEvent"in window,Ln=null;Ye&&"documentMode"in document&&(Ln=document.documentMode);var Tp=Ye&&"TextEvent"in window&&!Ln,hc=Ye&&(!oa||Ln&&8<Ln&&11>=Ln),ad=" ",dd=!1;function yc(t,e){switch(t){case"keyup":return zp.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xc(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $r=!1;function Ep(t,e){switch(t){case"compositionend":return xc(e);case"keypress":return e.which!==32?null:(dd=!0,ad);case"textInput":return t=e.data,t===ad&&dd?null:t;default:return null}}function Bp(t,e){if($r)return t==="compositionend"||!oa&&yc(t,e)?(t=vc(),Ko=ea=sr=null,$r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hc&&e.locale!=="ko"?null:e.data;default:return null}}var Ap={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ap[t.type]:e==="textarea"}function kc(t,e,r,o){Zg(o),e=bs(e,"onChange"),0<e.length&&(r=new ra("onChange","change",null,r,o),t.push({event:r,listeners:e}))}var Nn=null,qn=null;function Fp(t){Fc(t,0)}function Ws(t){var e=Gr(t);if(Gg(e))return t}function Rp(t,e){if(t==="change")return e}var wc=!1;if(Ye){var oi;if(Ye){var si="oninput"in document;if(!si){var cd=document.createElement("div");cd.setAttribute("oninput","return;"),si=typeof cd.oninput=="function"}oi=si}else oi=!1;wc=oi&&(!document.documentMode||9<document.documentMode)}function ud(){Nn&&(Nn.detachEvent("onpropertychange",Sc),qn=Nn=null)}function Sc(t){if(t.propertyName==="value"&&Ws(qn)){var e=[];kc(e,qn,t,Xl(t)),rc(Fp,e)}}function Dp(t,e,r){t==="focusin"?(ud(),Nn=e,qn=r,Nn.attachEvent("onpropertychange",Sc)):t==="focusout"&&ud()}function Wp(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ws(qn)}function Mp(t,e){if(t==="click")return Ws(e)}function _p(t,e){if(t==="input"||t==="change")return Ws(e)}function Lp(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ce=typeof Object.is=="function"?Object.is:Lp;function to(t,e){if(Ce(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),o=Object.keys(e);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var s=r[o];if(!_i.call(e,s)||!Ce(t[s],e[s]))return!1}return!0}function bd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pd(t,e){var r=bd(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=e&&o>=e)return{node:r,offset:e-t};t=o}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=bd(r)}}function jc(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?jc(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Cc(){for(var t=window,e=is();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=is(t.document)}return e}function sa(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Np(t){var e=Cc(),r=t.focusedElem,o=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&jc(r.ownerDocument.documentElement,r)){if(o!==null&&sa(r)){if(e=o.start,t=o.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=r.textContent.length,i=Math.min(o.start,s);o=o.end===void 0?i:Math.min(o.end,s),!t.extend&&i>o&&(s=o,o=i,i=s),s=pd(r,i);var l=pd(r,o);s&&l&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>o?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Pp=Ye&&"documentMode"in document&&11>=document.documentMode,Hr=null,rl=null,Pn=null,nl=!1;function md(t,e,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;nl||Hr==null||Hr!==is(o)||(o=Hr,"selectionStart"in o&&sa(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Pn&&to(Pn,o)||(Pn=o,o=bs(rl,"onSelect"),0<o.length&&(e=new ra("onSelect","select",null,e,r),t.push({event:e,listeners:o}),e.target=Hr)))}function To(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Ur={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionend:To("Transition","TransitionEnd")},ii={},Ic={};Ye&&(Ic=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function Ms(t){if(ii[t])return ii[t];if(!Ur[t])return t;var e=Ur[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in Ic)return ii[t]=e[r];return t}var zc=Ms("animationend"),Tc=Ms("animationiteration"),Ec=Ms("animationstart"),Bc=Ms("transitionend"),Ac=new Map,fd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,e){Ac.set(t,e),Mr(e,[t])}for(var li=0;li<fd.length;li++){var ai=fd[li],Op=ai.toLowerCase(),$p=ai[0].toUpperCase()+ai.slice(1);vr(Op,"on"+$p)}vr(zc,"onAnimationEnd");vr(Tc,"onAnimationIteration");vr(Ec,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(Bc,"onTransitionEnd");on("onMouseEnter",["mouseout","mouseover"]);on("onMouseLeave",["mouseout","mouseover"]);on("onPointerEnter",["pointerout","pointerover"]);on("onPointerLeave",["pointerout","pointerover"]);Mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));function vd(t,e,r){var o=t.type||"unknown-event";t.currentTarget=r,Ob(o,e,void 0,t),t.currentTarget=null}function Fc(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],s=o.event;o=o.listeners;t:{var i=void 0;if(e)for(var l=o.length-1;0<=l;l--){var a=o[l],d=a.instance,g=a.currentTarget;if(a=a.listener,d!==i&&s.isPropagationStopped())break t;vd(s,a,g),i=d}else for(l=0;l<o.length;l++){if(a=o[l],d=a.instance,g=a.currentTarget,a=a.listener,d!==i&&s.isPropagationStopped())break t;vd(s,a,g),i=d}}}if(as)throw t=Zi,as=!1,Zi=null,t}function Ct(t,e){var r=e[al];r===void 0&&(r=e[al]=new Set);var o=t+"__bubble";r.has(o)||(Rc(e,t,2,!1),r.add(o))}function di(t,e,r){var o=0;e&&(o|=4),Rc(r,t,o,e)}var Eo="_reactListening"+Math.random().toString(36).slice(2);function eo(t){if(!t[Eo]){t[Eo]=!0,Pg.forEach(function(r){r!=="selectionchange"&&(Hp.has(r)||di(r,!1,t),di(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Eo]||(e[Eo]=!0,di("selectionchange",!1,e))}}function Rc(t,e,r,o){switch(fc(e)){case 1:var s=np;break;case 4:s=op;break;default:s=ta}r=s.bind(null,e,r,t),s=void 0,!Ji||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),o?s!==void 0?t.addEventListener(e,r,{capture:!0,passive:s}):t.addEventListener(e,r,!0):s!==void 0?t.addEventListener(e,r,{passive:s}):t.addEventListener(e,r,!1)}function gi(t,e,r,o,s){var i=o;if(!(e&1)&&!(e&2)&&o!==null)t:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var a=o.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(l===4)for(l=o.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===s||d.nodeType===8&&d.parentNode===s))return;l=l.return}for(;a!==null;){if(l=jr(a),l===null)return;if(d=l.tag,d===5||d===6){o=i=l;continue t}a=a.parentNode}}o=o.return}rc(function(){var g=i,p=Xl(r),v=[];t:{var m=Ac.get(t);if(m!==void 0){var k=ra,x=t;switch(t){case"keypress":if(Xo(r)===0)break t;case"keydown":case"keyup":k=yp;break;case"focusin":x="focus",k=ni;break;case"focusout":x="blur",k=ni;break;case"beforeblur":case"afterblur":k=ni;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=sd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=lp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=wp;break;case zc:case Tc:case Ec:k=gp;break;case Bc:k=jp;break;case"scroll":k=sp;break;case"wheel":k=Ip;break;case"copy":case"cut":case"paste":k=up;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=ld}var S=(e&4)!==0,z=!S&&t==="scroll",b=S?m!==null?m+"Capture":null:m;S=[];for(var u=g,c;u!==null;){c=u;var h=c.stateNode;if(c.tag===5&&h!==null&&(c=h,b!==null&&(h=Kn(u,b),h!=null&&S.push(ro(u,h,c)))),z)break;u=u.return}0<S.length&&(m=new k(m,x,null,r,p),v.push({event:m,listeners:S}))}}if(!(e&7)){t:{if(m=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",m&&r!==Ki&&(x=r.relatedTarget||r.fromElement)&&(jr(x)||x[Qe]))break t;if((k||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,k?(x=r.relatedTarget||r.toElement,k=g,x=x?jr(x):null,x!==null&&(z=_r(x),x!==z||x.tag!==5&&x.tag!==6)&&(x=null)):(k=null,x=g),k!==x)){if(S=sd,h="onMouseLeave",b="onMouseEnter",u="mouse",(t==="pointerout"||t==="pointerover")&&(S=ld,h="onPointerLeave",b="onPointerEnter",u="pointer"),z=k==null?m:Gr(k),c=x==null?m:Gr(x),m=new S(h,u+"leave",k,r,p),m.target=z,m.relatedTarget=c,h=null,jr(p)===g&&(S=new S(b,u+"enter",x,r,p),S.target=c,S.relatedTarget=z,h=S),z=h,k&&x)e:{for(S=k,b=x,u=0,c=S;c;c=Lr(c))u++;for(c=0,h=b;h;h=Lr(h))c++;for(;0<u-c;)S=Lr(S),u--;for(;0<c-u;)b=Lr(b),c--;for(;u--;){if(S===b||b!==null&&S===b.alternate)break e;S=Lr(S),b=Lr(b)}S=null}else S=null;k!==null&&hd(v,m,k,S,!1),x!==null&&z!==null&&hd(v,z,x,S,!0)}}t:{if(m=g?Gr(g):window,k=m.nodeName&&m.nodeName.toLowerCase(),k==="select"||k==="input"&&m.type==="file")var w=Rp;else if(gd(m))if(wc)w=_p;else{w=Wp;var D=Dp}else(k=m.nodeName)&&k.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(w=Mp);if(w&&(w=w(t,g))){kc(v,w,r,p);break t}D&&D(t,m,g),t==="focusout"&&(D=m._wrapperState)&&D.controlled&&m.type==="number"&&Ui(m,"number",m.value)}switch(D=g?Gr(g):window,t){case"focusin":(gd(D)||D.contentEditable==="true")&&(Hr=D,rl=g,Pn=null);break;case"focusout":Pn=rl=Hr=null;break;case"mousedown":nl=!0;break;case"contextmenu":case"mouseup":case"dragend":nl=!1,md(v,r,p);break;case"selectionchange":if(Pp)break;case"keydown":case"keyup":md(v,r,p)}var W;if(oa)t:{switch(t){case"compositionstart":var C="onCompositionStart";break t;case"compositionend":C="onCompositionEnd";break t;case"compositionupdate":C="onCompositionUpdate";break t}C=void 0}else $r?yc(t,r)&&(C="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(C="onCompositionStart");C&&(hc&&r.locale!=="ko"&&($r||C!=="onCompositionStart"?C==="onCompositionEnd"&&$r&&(W=vc()):(sr=p,ea="value"in sr?sr.value:sr.textContent,$r=!0)),D=bs(g,C),0<D.length&&(C=new id(C,t,null,r,p),v.push({event:C,listeners:D}),W?C.data=W:(W=xc(r),W!==null&&(C.data=W)))),(W=Tp?Ep(t,r):Bp(t,r))&&(g=bs(g,"onBeforeInput"),0<g.length&&(p=new id("onBeforeInput","beforeinput",null,r,p),v.push({event:p,listeners:g}),p.data=W))}Fc(v,e)})}function ro(t,e,r){return{instance:t,listener:e,currentTarget:r}}function bs(t,e){for(var r=e+"Capture",o=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Kn(t,r),i!=null&&o.unshift(ro(t,i,s)),i=Kn(t,e),i!=null&&o.push(ro(t,i,s))),t=t.return}return o}function Lr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hd(t,e,r,o,s){for(var i=e._reactName,l=[];r!==null&&r!==o;){var a=r,d=a.alternate,g=a.stateNode;if(d!==null&&d===o)break;a.tag===5&&g!==null&&(a=g,s?(d=Kn(r,i),d!=null&&l.unshift(ro(r,d,a))):s||(d=Kn(r,i),d!=null&&l.push(ro(r,d,a)))),r=r.return}l.length!==0&&t.push({event:e,listeners:l})}var Up=/\r\n?/g,Gp=/\u0000|\uFFFD/g;function yd(t){return(typeof t=="string"?t:""+t).replace(Up,`
`).replace(Gp,"")}function Bo(t,e,r){if(e=yd(e),yd(t)!==e&&r)throw Error(N(425))}function ps(){}var ol=null,sl=null;function il(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ll=typeof setTimeout=="function"?setTimeout:void 0,Vp=typeof clearTimeout=="function"?clearTimeout:void 0,xd=typeof Promise=="function"?Promise:void 0,Yp=typeof queueMicrotask=="function"?queueMicrotask:typeof xd<"u"?function(t){return xd.resolve(null).then(t).catch(Qp)}:ll;function Qp(t){setTimeout(function(){throw t})}function ci(t,e){var r=e,o=0;do{var s=r.nextSibling;if(t.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(o===0){t.removeChild(s),Zn(e);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=s}while(r);Zn(e)}function gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function kd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var pn=Math.random().toString(36).slice(2),We="__reactFiber$"+pn,no="__reactProps$"+pn,Qe="__reactContainer$"+pn,al="__reactEvents$"+pn,Kp="__reactListeners$"+pn,Xp="__reactHandles$"+pn;function jr(t){var e=t[We];if(e)return e;for(var r=t.parentNode;r;){if(e=r[Qe]||r[We]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=kd(t);t!==null;){if(r=t[We])return r;t=kd(t)}return e}t=r,r=t.parentNode}return null}function vo(t){return t=t[We]||t[Qe],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(N(33))}function _s(t){return t[no]||null}var dl=[],Vr=-1;function hr(t){return{current:t}}function It(t){0>Vr||(t.current=dl[Vr],dl[Vr]=null,Vr--)}function St(t,e){Vr++,dl[Vr]=t.current,t.current=e}var fr={},Qt=hr(fr),ee=hr(!1),Br=fr;function sn(t,e){var r=t.type.contextTypes;if(!r)return fr;var o=t.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===e)return o.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in r)s[i]=e[i];return o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function re(t){return t=t.childContextTypes,t!=null}function ms(){It(ee),It(Qt)}function wd(t,e,r){if(Qt.current!==fr)throw Error(N(168));St(Qt,e),St(ee,r)}function Dc(t,e,r){var o=t.stateNode;if(e=e.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var s in o)if(!(s in e))throw Error(N(108,Db(t)||"Unknown",s));return Ft({},r,o)}function fs(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fr,Br=Qt.current,St(Qt,t),St(ee,ee.current),!0}function Sd(t,e,r){var o=t.stateNode;if(!o)throw Error(N(169));r?(t=Dc(t,e,Br),o.__reactInternalMemoizedMergedChildContext=t,It(ee),It(Qt),St(Qt,t)):It(ee),St(ee,r)}var He=null,Ls=!1,ui=!1;function Wc(t){He===null?He=[t]:He.push(t)}function Jp(t){Ls=!0,Wc(t)}function yr(){if(!ui&&He!==null){ui=!0;var t=0,e=yt;try{var r=He;for(yt=1;t<r.length;t++){var o=r[t];do o=o(!0);while(o!==null)}He=null,Ls=!1}catch(s){throw He!==null&&(He=He.slice(t+1)),ic(Jl,yr),s}finally{yt=e,ui=!1}}return null}var Yr=[],Qr=0,vs=null,hs=0,ge=[],ce=0,Ar=null,Ue=1,Ge="";function xr(t,e){Yr[Qr++]=hs,Yr[Qr++]=vs,vs=t,hs=e}function Mc(t,e,r){ge[ce++]=Ue,ge[ce++]=Ge,ge[ce++]=Ar,Ar=t;var o=Ue;t=Ge;var s=32-Se(o)-1;o&=~(1<<s),r+=1;var i=32-Se(e)+s;if(30<i){var l=s-s%5;i=(o&(1<<l)-1).toString(32),o>>=l,s-=l,Ue=1<<32-Se(e)+s|r<<s|o,Ge=i+t}else Ue=1<<i|r<<s|o,Ge=t}function ia(t){t.return!==null&&(xr(t,1),Mc(t,1,0))}function la(t){for(;t===vs;)vs=Yr[--Qr],Yr[Qr]=null,hs=Yr[--Qr],Yr[Qr]=null;for(;t===Ar;)Ar=ge[--ce],ge[ce]=null,Ge=ge[--ce],ge[ce]=null,Ue=ge[--ce],ge[ce]=null}var ie=null,se=null,Tt=!1,we=null;function _c(t,e){var r=ue(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function jd(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ie=t,se=gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ie=t,se=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=Ar!==null?{id:Ue,overflow:Ge}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=ue(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,ie=t,se=null,!0):!1;default:return!1}}function gl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cl(t){if(Tt){var e=se;if(e){var r=e;if(!jd(t,e)){if(gl(t))throw Error(N(418));e=gr(r.nextSibling);var o=ie;e&&jd(t,e)?_c(o,r):(t.flags=t.flags&-4097|2,Tt=!1,ie=t)}}else{if(gl(t))throw Error(N(418));t.flags=t.flags&-4097|2,Tt=!1,ie=t}}}function Cd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ie=t}function Ao(t){if(t!==ie)return!1;if(!Tt)return Cd(t),Tt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!il(t.type,t.memoizedProps)),e&&(e=se)){if(gl(t))throw Lc(),Error(N(418));for(;e;)_c(t,e),e=gr(e.nextSibling)}if(Cd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(N(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){se=gr(t.nextSibling);break t}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}se=null}}else se=ie?gr(t.stateNode.nextSibling):null;return!0}function Lc(){for(var t=se;t;)t=gr(t.nextSibling)}function ln(){se=ie=null,Tt=!1}function aa(t){we===null?we=[t]:we.push(t)}var Zp=Ze.ReactCurrentBatchConfig;function jn(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(N(309));var o=r.stateNode}if(!o)throw Error(N(147,t));var s=o,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(l){var a=s.refs;l===null?delete a[i]:a[i]=l},e._stringRef=i,e)}if(typeof t!="string")throw Error(N(284));if(!r._owner)throw Error(N(290,t))}return t}function Fo(t,e){throw t=Object.prototype.toString.call(e),Error(N(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Id(t){var e=t._init;return e(t._payload)}function Nc(t){function e(b,u){if(t){var c=b.deletions;c===null?(b.deletions=[u],b.flags|=16):c.push(u)}}function r(b,u){if(!t)return null;for(;u!==null;)e(b,u),u=u.sibling;return null}function o(b,u){for(b=new Map;u!==null;)u.key!==null?b.set(u.key,u):b.set(u.index,u),u=u.sibling;return b}function s(b,u){return b=pr(b,u),b.index=0,b.sibling=null,b}function i(b,u,c){return b.index=c,t?(c=b.alternate,c!==null?(c=c.index,c<u?(b.flags|=2,u):c):(b.flags|=2,u)):(b.flags|=1048576,u)}function l(b){return t&&b.alternate===null&&(b.flags|=2),b}function a(b,u,c,h){return u===null||u.tag!==6?(u=yi(c,b.mode,h),u.return=b,u):(u=s(u,c),u.return=b,u)}function d(b,u,c,h){var w=c.type;return w===Or?p(b,u,c.props.children,h,c.key):u!==null&&(u.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===er&&Id(w)===u.type)?(h=s(u,c.props),h.ref=jn(b,u,c),h.return=b,h):(h=ns(c.type,c.key,c.props,null,b.mode,h),h.ref=jn(b,u,c),h.return=b,h)}function g(b,u,c,h){return u===null||u.tag!==4||u.stateNode.containerInfo!==c.containerInfo||u.stateNode.implementation!==c.implementation?(u=xi(c,b.mode,h),u.return=b,u):(u=s(u,c.children||[]),u.return=b,u)}function p(b,u,c,h,w){return u===null||u.tag!==7?(u=Er(c,b.mode,h,w),u.return=b,u):(u=s(u,c),u.return=b,u)}function v(b,u,c){if(typeof u=="string"&&u!==""||typeof u=="number")return u=yi(""+u,b.mode,c),u.return=b,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ko:return c=ns(u.type,u.key,u.props,null,b.mode,c),c.ref=jn(b,null,u),c.return=b,c;case Pr:return u=xi(u,b.mode,c),u.return=b,u;case er:var h=u._init;return v(b,h(u._payload),c)}if(Bn(u)||yn(u))return u=Er(u,b.mode,c,null),u.return=b,u;Fo(b,u)}return null}function m(b,u,c,h){var w=u!==null?u.key:null;if(typeof c=="string"&&c!==""||typeof c=="number")return w!==null?null:a(b,u,""+c,h);if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ko:return c.key===w?d(b,u,c,h):null;case Pr:return c.key===w?g(b,u,c,h):null;case er:return w=c._init,m(b,u,w(c._payload),h)}if(Bn(c)||yn(c))return w!==null?null:p(b,u,c,h,null);Fo(b,c)}return null}function k(b,u,c,h,w){if(typeof h=="string"&&h!==""||typeof h=="number")return b=b.get(c)||null,a(u,b,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ko:return b=b.get(h.key===null?c:h.key)||null,d(u,b,h,w);case Pr:return b=b.get(h.key===null?c:h.key)||null,g(u,b,h,w);case er:var D=h._init;return k(b,u,c,D(h._payload),w)}if(Bn(h)||yn(h))return b=b.get(c)||null,p(u,b,h,w,null);Fo(u,h)}return null}function x(b,u,c,h){for(var w=null,D=null,W=u,C=u=0,T=null;W!==null&&C<c.length;C++){W.index>C?(T=W,W=null):T=W.sibling;var R=m(b,W,c[C],h);if(R===null){W===null&&(W=T);break}t&&W&&R.alternate===null&&e(b,W),u=i(R,u,C),D===null?w=R:D.sibling=R,D=R,W=T}if(C===c.length)return r(b,W),Tt&&xr(b,C),w;if(W===null){for(;C<c.length;C++)W=v(b,c[C],h),W!==null&&(u=i(W,u,C),D===null?w=W:D.sibling=W,D=W);return Tt&&xr(b,C),w}for(W=o(b,W);C<c.length;C++)T=k(W,b,C,c[C],h),T!==null&&(t&&T.alternate!==null&&W.delete(T.key===null?C:T.key),u=i(T,u,C),D===null?w=T:D.sibling=T,D=T);return t&&W.forEach(function(Z){return e(b,Z)}),Tt&&xr(b,C),w}function S(b,u,c,h){var w=yn(c);if(typeof w!="function")throw Error(N(150));if(c=w.call(c),c==null)throw Error(N(151));for(var D=w=null,W=u,C=u=0,T=null,R=c.next();W!==null&&!R.done;C++,R=c.next()){W.index>C?(T=W,W=null):T=W.sibling;var Z=m(b,W,R.value,h);if(Z===null){W===null&&(W=T);break}t&&W&&Z.alternate===null&&e(b,W),u=i(Z,u,C),D===null?w=Z:D.sibling=Z,D=Z,W=T}if(R.done)return r(b,W),Tt&&xr(b,C),w;if(W===null){for(;!R.done;C++,R=c.next())R=v(b,R.value,h),R!==null&&(u=i(R,u,C),D===null?w=R:D.sibling=R,D=R);return Tt&&xr(b,C),w}for(W=o(b,W);!R.done;C++,R=c.next())R=k(W,b,C,R.value,h),R!==null&&(t&&R.alternate!==null&&W.delete(R.key===null?C:R.key),u=i(R,u,C),D===null?w=R:D.sibling=R,D=R);return t&&W.forEach(function(L){return e(b,L)}),Tt&&xr(b,C),w}function z(b,u,c,h){if(typeof c=="object"&&c!==null&&c.type===Or&&c.key===null&&(c=c.props.children),typeof c=="object"&&c!==null){switch(c.$$typeof){case ko:t:{for(var w=c.key,D=u;D!==null;){if(D.key===w){if(w=c.type,w===Or){if(D.tag===7){r(b,D.sibling),u=s(D,c.props.children),u.return=b,b=u;break t}}else if(D.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===er&&Id(w)===D.type){r(b,D.sibling),u=s(D,c.props),u.ref=jn(b,D,c),u.return=b,b=u;break t}r(b,D);break}else e(b,D);D=D.sibling}c.type===Or?(u=Er(c.props.children,b.mode,h,c.key),u.return=b,b=u):(h=ns(c.type,c.key,c.props,null,b.mode,h),h.ref=jn(b,u,c),h.return=b,b=h)}return l(b);case Pr:t:{for(D=c.key;u!==null;){if(u.key===D)if(u.tag===4&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){r(b,u.sibling),u=s(u,c.children||[]),u.return=b,b=u;break t}else{r(b,u);break}else e(b,u);u=u.sibling}u=xi(c,b.mode,h),u.return=b,b=u}return l(b);case er:return D=c._init,z(b,u,D(c._payload),h)}if(Bn(c))return x(b,u,c,h);if(yn(c))return S(b,u,c,h);Fo(b,c)}return typeof c=="string"&&c!==""||typeof c=="number"?(c=""+c,u!==null&&u.tag===6?(r(b,u.sibling),u=s(u,c),u.return=b,b=u):(r(b,u),u=yi(c,b.mode,h),u.return=b,b=u),l(b)):r(b,u)}return z}var an=Nc(!0),Pc=Nc(!1),ys=hr(null),xs=null,Kr=null,da=null;function ga(){da=Kr=xs=null}function ca(t){var e=ys.current;It(ys),t._currentValue=e}function ul(t,e,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===r)break;t=t.return}}function rn(t,e){xs=t,da=Kr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(te=!0),t.firstContext=null)}function me(t){var e=t._currentValue;if(da!==t)if(t={context:t,memoizedValue:e,next:null},Kr===null){if(xs===null)throw Error(N(308));Kr=t,xs.dependencies={lanes:0,firstContext:t}}else Kr=Kr.next=t;return e}var Cr=null;function ua(t){Cr===null?Cr=[t]:Cr.push(t)}function Oc(t,e,r,o){var s=e.interleaved;return s===null?(r.next=r,ua(e)):(r.next=s.next,s.next=r),e.interleaved=r,Ke(t,o)}function Ke(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var rr=!1;function ba(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $c(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ve(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(t,e,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,mt&2){var s=o.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),o.pending=e,Ke(t,r)}return s=o.interleaved,s===null?(e.next=e,ua(o)):(e.next=s.next,s.next=e),o.interleaved=e,Ke(t,r)}function Jo(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var o=e.lanes;o&=t.pendingLanes,r|=o,e.lanes=r,Zl(t,r)}}function zd(t,e){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var s=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?s=i=l:i=i.next=l,r=r.next}while(r!==null);i===null?s=i=e:i=i.next=e}else s=i=e;r={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:o.shared,effects:o.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function ks(t,e,r,o){var s=t.updateQueue;rr=!1;var i=s.firstBaseUpdate,l=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var d=a,g=d.next;d.next=null,l===null?i=g:l.next=g,l=d;var p=t.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=g:a.next=g,p.lastBaseUpdate=d))}if(i!==null){var v=s.baseState;l=0,p=g=d=null,a=i;do{var m=a.lane,k=a.eventTime;if((o&m)===m){p!==null&&(p=p.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});t:{var x=t,S=a;switch(m=e,k=r,S.tag){case 1:if(x=S.payload,typeof x=="function"){v=x.call(k,v,m);break t}v=x;break t;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,m=typeof x=="function"?x.call(k,v,m):x,m==null)break t;v=Ft({},v,m);break t;case 2:rr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=s.effects,m===null?s.effects=[a]:m.push(a))}else k={eventTime:k,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(g=p=k,d=v):p=p.next=k,l|=m;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;m=a,a=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(p===null&&(d=v),s.baseState=d,s.firstBaseUpdate=g,s.lastBaseUpdate=p,e=s.shared.interleaved,e!==null){s=e;do l|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Rr|=l,t.lanes=l,t.memoizedState=v}}function Td(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var o=t[e],s=o.callback;if(s!==null){if(o.callback=null,o=r,typeof s!="function")throw Error(N(191,s));s.call(o)}}}var ho={},_e=hr(ho),oo=hr(ho),so=hr(ho);function Ir(t){if(t===ho)throw Error(N(174));return t}function pa(t,e){switch(St(so,e),St(oo,t),St(_e,ho),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vi(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Vi(e,t)}It(_e),St(_e,e)}function dn(){It(_e),It(oo),It(so)}function Hc(t){Ir(so.current);var e=Ir(_e.current),r=Vi(e,t.type);e!==r&&(St(oo,t),St(_e,r))}function ma(t){oo.current===t&&(It(_e),It(oo))}var Bt=hr(0);function ws(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bi=[];function fa(){for(var t=0;t<bi.length;t++)bi[t]._workInProgressVersionPrimary=null;bi.length=0}var Zo=Ze.ReactCurrentDispatcher,pi=Ze.ReactCurrentBatchConfig,Fr=0,At=null,_t=null,Nt=null,Ss=!1,On=!1,io=0,qp=0;function Gt(){throw Error(N(321))}function va(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!Ce(t[r],e[r]))return!1;return!0}function ha(t,e,r,o,s,i){if(Fr=i,At=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zo.current=t===null||t.memoizedState===null?nm:om,t=r(o,s),On){i=0;do{if(On=!1,io=0,25<=i)throw Error(N(301));i+=1,Nt=_t=null,e.updateQueue=null,Zo.current=sm,t=r(o,s)}while(On)}if(Zo.current=js,e=_t!==null&&_t.next!==null,Fr=0,Nt=_t=At=null,Ss=!1,e)throw Error(N(300));return t}function ya(){var t=io!==0;return io=0,t}function Ae(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?At.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function fe(){if(_t===null){var t=At.alternate;t=t!==null?t.memoizedState:null}else t=_t.next;var e=Nt===null?At.memoizedState:Nt.next;if(e!==null)Nt=e,_t=t;else{if(t===null)throw Error(N(310));_t=t,t={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},Nt===null?At.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function lo(t,e){return typeof e=="function"?e(t):e}function mi(t){var e=fe(),r=e.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=t;var o=_t,s=o.baseQueue,i=r.pending;if(i!==null){if(s!==null){var l=s.next;s.next=i.next,i.next=l}o.baseQueue=s=i,r.pending=null}if(s!==null){i=s.next,o=o.baseState;var a=l=null,d=null,g=i;do{var p=g.lane;if((Fr&p)===p)d!==null&&(d=d.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),o=g.hasEagerState?g.eagerState:t(o,g.action);else{var v={lane:p,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};d===null?(a=d=v,l=o):d=d.next=v,At.lanes|=p,Rr|=p}g=g.next}while(g!==null&&g!==i);d===null?l=o:d.next=a,Ce(o,e.memoizedState)||(te=!0),e.memoizedState=o,e.baseState=l,e.baseQueue=d,r.lastRenderedState=o}if(t=r.interleaved,t!==null){s=t;do i=s.lane,At.lanes|=i,Rr|=i,s=s.next;while(s!==t)}else s===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function fi(t){var e=fe(),r=e.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=t;var o=r.dispatch,s=r.pending,i=e.memoizedState;if(s!==null){r.pending=null;var l=s=s.next;do i=t(i,l.action),l=l.next;while(l!==s);Ce(i,e.memoizedState)||(te=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),r.lastRenderedState=i}return[i,o]}function Uc(){}function Gc(t,e){var r=At,o=fe(),s=e(),i=!Ce(o.memoizedState,s);if(i&&(o.memoizedState=s,te=!0),o=o.queue,xa(Qc.bind(null,r,o,t),[t]),o.getSnapshot!==e||i||Nt!==null&&Nt.memoizedState.tag&1){if(r.flags|=2048,ao(9,Yc.bind(null,r,o,s,e),void 0,null),Pt===null)throw Error(N(349));Fr&30||Vc(r,e,s)}return s}function Vc(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function Yc(t,e,r,o){e.value=r,e.getSnapshot=o,Kc(e)&&Xc(t)}function Qc(t,e,r){return r(function(){Kc(e)&&Xc(t)})}function Kc(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!Ce(t,r)}catch{return!0}}function Xc(t){var e=Ke(t,1);e!==null&&je(e,t,1,-1)}function Ed(t){var e=Ae();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lo,lastRenderedState:t},e.queue=t,t=t.dispatch=rm.bind(null,At,t),[e.memoizedState,t]}function ao(t,e,r,o){return t={tag:t,create:e,destroy:r,deps:o,next:null},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,e.lastEffect=t)),t}function Jc(){return fe().memoizedState}function qo(t,e,r,o){var s=Ae();At.flags|=t,s.memoizedState=ao(1|e,r,void 0,o===void 0?null:o)}function Ns(t,e,r,o){var s=fe();o=o===void 0?null:o;var i=void 0;if(_t!==null){var l=_t.memoizedState;if(i=l.destroy,o!==null&&va(o,l.deps)){s.memoizedState=ao(e,r,i,o);return}}At.flags|=t,s.memoizedState=ao(1|e,r,i,o)}function Bd(t,e){return qo(8390656,8,t,e)}function xa(t,e){return Ns(2048,8,t,e)}function Zc(t,e){return Ns(4,2,t,e)}function qc(t,e){return Ns(4,4,t,e)}function tu(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function eu(t,e,r){return r=r!=null?r.concat([t]):null,Ns(4,4,tu.bind(null,e,t),r)}function ka(){}function ru(t,e){var r=fe();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&va(e,o[1])?o[0]:(r.memoizedState=[t,e],t)}function nu(t,e){var r=fe();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&va(e,o[1])?o[0]:(t=t(),r.memoizedState=[t,e],t)}function ou(t,e,r){return Fr&21?(Ce(r,e)||(r=dc(),At.lanes|=r,Rr|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,te=!0),t.memoizedState=r)}function tm(t,e){var r=yt;yt=r!==0&&4>r?r:4,t(!0);var o=pi.transition;pi.transition={};try{t(!1),e()}finally{yt=r,pi.transition=o}}function su(){return fe().memoizedState}function em(t,e,r){var o=br(t);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},iu(t))lu(e,r);else if(r=Oc(t,e,r,o),r!==null){var s=Xt();je(r,t,o,s),au(r,e,o)}}function rm(t,e,r){var o=br(t),s={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(iu(t))lu(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var l=e.lastRenderedState,a=i(l,r);if(s.hasEagerState=!0,s.eagerState=a,Ce(a,l)){var d=e.interleaved;d===null?(s.next=s,ua(e)):(s.next=d.next,d.next=s),e.interleaved=s;return}}catch{}finally{}r=Oc(t,e,s,o),r!==null&&(s=Xt(),je(r,t,o,s),au(r,e,o))}}function iu(t){var e=t.alternate;return t===At||e!==null&&e===At}function lu(t,e){On=Ss=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function au(t,e,r){if(r&4194240){var o=e.lanes;o&=t.pendingLanes,r|=o,e.lanes=r,Zl(t,r)}}var js={readContext:me,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},nm={readContext:me,useCallback:function(t,e){return Ae().memoizedState=[t,e===void 0?null:e],t},useContext:me,useEffect:Bd,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,qo(4194308,4,tu.bind(null,e,t),r)},useLayoutEffect:function(t,e){return qo(4194308,4,t,e)},useInsertionEffect:function(t,e){return qo(4,2,t,e)},useMemo:function(t,e){var r=Ae();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var o=Ae();return e=r!==void 0?r(e):e,o.memoizedState=o.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},o.queue=t,t=t.dispatch=em.bind(null,At,t),[o.memoizedState,t]},useRef:function(t){var e=Ae();return t={current:t},e.memoizedState=t},useState:Ed,useDebugValue:ka,useDeferredValue:function(t){return Ae().memoizedState=t},useTransition:function(){var t=Ed(!1),e=t[0];return t=tm.bind(null,t[1]),Ae().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var o=At,s=Ae();if(Tt){if(r===void 0)throw Error(N(407));r=r()}else{if(r=e(),Pt===null)throw Error(N(349));Fr&30||Vc(o,e,r)}s.memoizedState=r;var i={value:r,getSnapshot:e};return s.queue=i,Bd(Qc.bind(null,o,i,t),[t]),o.flags|=2048,ao(9,Yc.bind(null,o,i,r,e),void 0,null),r},useId:function(){var t=Ae(),e=Pt.identifierPrefix;if(Tt){var r=Ge,o=Ue;r=(o&~(1<<32-Se(o)-1)).toString(32)+r,e=":"+e+"R"+r,r=io++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=qp++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},om={readContext:me,useCallback:ru,useContext:me,useEffect:xa,useImperativeHandle:eu,useInsertionEffect:Zc,useLayoutEffect:qc,useMemo:nu,useReducer:mi,useRef:Jc,useState:function(){return mi(lo)},useDebugValue:ka,useDeferredValue:function(t){var e=fe();return ou(e,_t.memoizedState,t)},useTransition:function(){var t=mi(lo)[0],e=fe().memoizedState;return[t,e]},useMutableSource:Uc,useSyncExternalStore:Gc,useId:su,unstable_isNewReconciler:!1},sm={readContext:me,useCallback:ru,useContext:me,useEffect:xa,useImperativeHandle:eu,useInsertionEffect:Zc,useLayoutEffect:qc,useMemo:nu,useReducer:fi,useRef:Jc,useState:function(){return fi(lo)},useDebugValue:ka,useDeferredValue:function(t){var e=fe();return _t===null?e.memoizedState=t:ou(e,_t.memoizedState,t)},useTransition:function(){var t=fi(lo)[0],e=fe().memoizedState;return[t,e]},useMutableSource:Uc,useSyncExternalStore:Gc,useId:su,unstable_isNewReconciler:!1};function xe(t,e){if(t&&t.defaultProps){e=Ft({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function bl(t,e,r,o){e=t.memoizedState,r=r(o,e),r=r==null?e:Ft({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Ps={isMounted:function(t){return(t=t._reactInternals)?_r(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var o=Xt(),s=br(t),i=Ve(o,s);i.payload=e,r!=null&&(i.callback=r),e=cr(t,i,s),e!==null&&(je(e,t,s,o),Jo(e,t,s))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var o=Xt(),s=br(t),i=Ve(o,s);i.tag=1,i.payload=e,r!=null&&(i.callback=r),e=cr(t,i,s),e!==null&&(je(e,t,s,o),Jo(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=Xt(),o=br(t),s=Ve(r,o);s.tag=2,e!=null&&(s.callback=e),e=cr(t,s,o),e!==null&&(je(e,t,o,r),Jo(e,t,o))}};function Ad(t,e,r,o,s,i,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,i,l):e.prototype&&e.prototype.isPureReactComponent?!to(r,o)||!to(s,i):!0}function du(t,e,r){var o=!1,s=fr,i=e.contextType;return typeof i=="object"&&i!==null?i=me(i):(s=re(e)?Br:Qt.current,o=e.contextTypes,i=(o=o!=null)?sn(t,s):fr),e=new e(r,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ps,t.stateNode=e,e._reactInternals=t,o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Fd(t,e,r,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,o),e.state!==t&&Ps.enqueueReplaceState(e,e.state,null)}function pl(t,e,r,o){var s=t.stateNode;s.props=r,s.state=t.memoizedState,s.refs={},ba(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=me(i):(i=re(e)?Br:Qt.current,s.context=sn(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(bl(t,e,i,r),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Ps.enqueueReplaceState(s,s.state,null),ks(t,r,s,o),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function gn(t,e){try{var r="",o=e;do r+=Rb(o),o=o.return;while(o);var s=r}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function vi(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function ml(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var im=typeof WeakMap=="function"?WeakMap:Map;function gu(t,e,r){r=Ve(-1,r),r.tag=3,r.payload={element:null};var o=e.value;return r.callback=function(){Is||(Is=!0,Cl=o),ml(t,e)},r}function cu(t,e,r){r=Ve(-1,r),r.tag=3;var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var s=e.value;r.payload=function(){return o(s)},r.callback=function(){ml(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){ml(t,e),typeof o!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),r}function Rd(t,e,r){var o=t.pingCache;if(o===null){o=t.pingCache=new im;var s=new Set;o.set(e,s)}else s=o.get(e),s===void 0&&(s=new Set,o.set(e,s));s.has(r)||(s.add(r),t=xm.bind(null,t,e,r),e.then(t,t))}function Dd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Wd(t,e,r,o,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=Ve(-1,1),e.tag=2,cr(r,e,1))),r.lanes|=1),t)}var lm=Ze.ReactCurrentOwner,te=!1;function Kt(t,e,r,o){e.child=t===null?Pc(e,null,r,o):an(e,t.child,r,o)}function Md(t,e,r,o,s){r=r.render;var i=e.ref;return rn(e,s),o=ha(t,e,r,o,i,s),r=ya(),t!==null&&!te?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Xe(t,e,s)):(Tt&&r&&ia(e),e.flags|=1,Kt(t,e,o,s),e.child)}function _d(t,e,r,o,s){if(t===null){var i=r.type;return typeof i=="function"&&!Ea(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=i,uu(t,e,i,o,s)):(t=ns(r.type,null,o,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var l=i.memoizedProps;if(r=r.compare,r=r!==null?r:to,r(l,o)&&t.ref===e.ref)return Xe(t,e,s)}return e.flags|=1,t=pr(i,o),t.ref=e.ref,t.return=e,e.child=t}function uu(t,e,r,o,s){if(t!==null){var i=t.memoizedProps;if(to(i,o)&&t.ref===e.ref)if(te=!1,e.pendingProps=o=i,(t.lanes&s)!==0)t.flags&131072&&(te=!0);else return e.lanes=t.lanes,Xe(t,e,s)}return fl(t,e,r,o,s)}function bu(t,e,r){var o=e.pendingProps,s=o.children,i=t!==null?t.memoizedState:null;if(o.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},St(Jr,oe),oe|=r;else{if(!(r&1073741824))return t=i!==null?i.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,St(Jr,oe),oe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:r,St(Jr,oe),oe|=o}else i!==null?(o=i.baseLanes|r,e.memoizedState=null):o=r,St(Jr,oe),oe|=o;return Kt(t,e,s,r),e.child}function pu(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function fl(t,e,r,o,s){var i=re(r)?Br:Qt.current;return i=sn(e,i),rn(e,s),r=ha(t,e,r,o,i,s),o=ya(),t!==null&&!te?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Xe(t,e,s)):(Tt&&o&&ia(e),e.flags|=1,Kt(t,e,r,s),e.child)}function Ld(t,e,r,o,s){if(re(r)){var i=!0;fs(e)}else i=!1;if(rn(e,s),e.stateNode===null)ts(t,e),du(e,r,o),pl(e,r,o,s),o=!0;else if(t===null){var l=e.stateNode,a=e.memoizedProps;l.props=a;var d=l.context,g=r.contextType;typeof g=="object"&&g!==null?g=me(g):(g=re(r)?Br:Qt.current,g=sn(e,g));var p=r.getDerivedStateFromProps,v=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";v||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==o||d!==g)&&Fd(e,l,o,g),rr=!1;var m=e.memoizedState;l.state=m,ks(e,o,l,s),d=e.memoizedState,a!==o||m!==d||ee.current||rr?(typeof p=="function"&&(bl(e,r,p,o),d=e.memoizedState),(a=rr||Ad(e,r,a,o,m,d,g))?(v||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=d),l.props=o,l.state=d,l.context=g,o=a):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{l=e.stateNode,$c(t,e),a=e.memoizedProps,g=e.type===e.elementType?a:xe(e.type,a),l.props=g,v=e.pendingProps,m=l.context,d=r.contextType,typeof d=="object"&&d!==null?d=me(d):(d=re(r)?Br:Qt.current,d=sn(e,d));var k=r.getDerivedStateFromProps;(p=typeof k=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==v||m!==d)&&Fd(e,l,o,d),rr=!1,m=e.memoizedState,l.state=m,ks(e,o,l,s);var x=e.memoizedState;a!==v||m!==x||ee.current||rr?(typeof k=="function"&&(bl(e,r,k,o),x=e.memoizedState),(g=rr||Ad(e,r,g,o,m,x,d)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,x,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,x,d)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=x),l.props=o,l.state=x,l.context=d,o=g):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),o=!1)}return vl(t,e,r,o,i,s)}function vl(t,e,r,o,s,i){pu(t,e);var l=(e.flags&128)!==0;if(!o&&!l)return s&&Sd(e,r,!1),Xe(t,e,i);o=e.stateNode,lm.current=e;var a=l&&typeof r.getDerivedStateFromError!="function"?null:o.render();return e.flags|=1,t!==null&&l?(e.child=an(e,t.child,null,i),e.child=an(e,null,a,i)):Kt(t,e,a,i),e.memoizedState=o.state,s&&Sd(e,r,!0),e.child}function mu(t){var e=t.stateNode;e.pendingContext?wd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wd(t,e.context,!1),pa(t,e.containerInfo)}function Nd(t,e,r,o,s){return ln(),aa(s),e.flags|=256,Kt(t,e,r,o),e.child}var hl={dehydrated:null,treeContext:null,retryLane:0};function yl(t){return{baseLanes:t,cachePool:null,transitions:null}}function fu(t,e,r){var o=e.pendingProps,s=Bt.current,i=!1,l=(e.flags&128)!==0,a;if((a=l)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),St(Bt,s&1),t===null)return cl(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=o.children,t=o.fallback,i?(o=e.mode,i=e.child,l={mode:"hidden",children:l},!(o&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Hs(l,o,0,null),t=Er(t,o,r,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=yl(r),e.memoizedState=hl,t):wa(e,l));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return am(t,e,l,o,a,s,r);if(i){i=o.fallback,l=e.mode,s=t.child,a=s.sibling;var d={mode:"hidden",children:o.children};return!(l&1)&&e.child!==s?(o=e.child,o.childLanes=0,o.pendingProps=d,e.deletions=null):(o=pr(s,d),o.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=pr(a,i):(i=Er(i,l,r,null),i.flags|=2),i.return=e,o.return=e,o.sibling=i,e.child=o,o=i,i=e.child,l=t.child.memoizedState,l=l===null?yl(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=t.childLanes&~r,e.memoizedState=hl,o}return i=t.child,t=i.sibling,o=pr(i,{mode:"visible",children:o.children}),!(e.mode&1)&&(o.lanes=r),o.return=e,o.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=o,e.memoizedState=null,o}function wa(t,e){return e=Hs({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ro(t,e,r,o){return o!==null&&aa(o),an(e,t.child,null,r),t=wa(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function am(t,e,r,o,s,i,l){if(r)return e.flags&256?(e.flags&=-257,o=vi(Error(N(422))),Ro(t,e,l,o)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=o.fallback,s=e.mode,o=Hs({mode:"visible",children:o.children},s,0,null),i=Er(i,s,l,null),i.flags|=2,o.return=e,i.return=e,o.sibling=i,e.child=o,e.mode&1&&an(e,t.child,null,l),e.child.memoizedState=yl(l),e.memoizedState=hl,i);if(!(e.mode&1))return Ro(t,e,l,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var a=o.dgst;return o=a,i=Error(N(419)),o=vi(i,o,void 0),Ro(t,e,l,o)}if(a=(l&t.childLanes)!==0,te||a){if(o=Pt,o!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(o.suspendedLanes|l)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Ke(t,s),je(o,t,s,-1))}return Ta(),o=vi(Error(N(421))),Ro(t,e,l,o)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=km.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,se=gr(s.nextSibling),ie=e,Tt=!0,we=null,t!==null&&(ge[ce++]=Ue,ge[ce++]=Ge,ge[ce++]=Ar,Ue=t.id,Ge=t.overflow,Ar=e),e=wa(e,o.children),e.flags|=4096,e)}function Pd(t,e,r){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),ul(t.return,e,r)}function hi(t,e,r,o,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=r,i.tailMode=s)}function vu(t,e,r){var o=e.pendingProps,s=o.revealOrder,i=o.tail;if(Kt(t,e,o.children,r),o=Bt.current,o&2)o=o&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pd(t,r,e);else if(t.tag===19)Pd(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}if(St(Bt,o),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(r=e.child,s=null;r!==null;)t=r.alternate,t!==null&&ws(t)===null&&(s=r),r=r.sibling;r=s,r===null?(s=e.child,e.child=null):(s=r.sibling,r.sibling=null),hi(e,!1,s,r,i);break;case"backwards":for(r=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&ws(t)===null){e.child=s;break}t=s.sibling,s.sibling=r,r=s,s=t}hi(e,!0,r,null,i);break;case"together":hi(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ts(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xe(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),Rr|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(N(153));if(e.child!==null){for(t=e.child,r=pr(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=pr(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function dm(t,e,r){switch(e.tag){case 3:mu(e),ln();break;case 5:Hc(e);break;case 1:re(e.type)&&fs(e);break;case 4:pa(e,e.stateNode.containerInfo);break;case 10:var o=e.type._context,s=e.memoizedProps.value;St(ys,o._currentValue),o._currentValue=s;break;case 13:if(o=e.memoizedState,o!==null)return o.dehydrated!==null?(St(Bt,Bt.current&1),e.flags|=128,null):r&e.child.childLanes?fu(t,e,r):(St(Bt,Bt.current&1),t=Xe(t,e,r),t!==null?t.sibling:null);St(Bt,Bt.current&1);break;case 19:if(o=(r&e.childLanes)!==0,t.flags&128){if(o)return vu(t,e,r);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),St(Bt,Bt.current),o)break;return null;case 22:case 23:return e.lanes=0,bu(t,e,r)}return Xe(t,e,r)}var hu,xl,yu,xu;hu=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};xl=function(){};yu=function(t,e,r,o){var s=t.memoizedProps;if(s!==o){t=e.stateNode,Ir(_e.current);var i=null;switch(r){case"input":s=$i(t,s),o=$i(t,o),i=[];break;case"select":s=Ft({},s,{value:void 0}),o=Ft({},o,{value:void 0}),i=[];break;case"textarea":s=Gi(t,s),o=Gi(t,o),i=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(t.onclick=ps)}Yi(r,o);var l;r=null;for(g in s)if(!o.hasOwnProperty(g)&&s.hasOwnProperty(g)&&s[g]!=null)if(g==="style"){var a=s[g];for(l in a)a.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(Yn.hasOwnProperty(g)?i||(i=[]):(i=i||[]).push(g,null));for(g in o){var d=o[g];if(a=s!=null?s[g]:void 0,o.hasOwnProperty(g)&&d!==a&&(d!=null||a!=null))if(g==="style")if(a){for(l in a)!a.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in d)d.hasOwnProperty(l)&&a[l]!==d[l]&&(r||(r={}),r[l]=d[l])}else r||(i||(i=[]),i.push(g,r)),r=d;else g==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(i=i||[]).push(g,d)):g==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(g,""+d):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(Yn.hasOwnProperty(g)?(d!=null&&g==="onScroll"&&Ct("scroll",t),i||a===d||(i=[])):(i=i||[]).push(g,d))}r&&(i=i||[]).push("style",r);var g=i;(e.updateQueue=g)&&(e.flags|=4)}};xu=function(t,e,r,o){r!==o&&(e.flags|=4)};function Cn(t,e){if(!Tt)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(e)for(var s=t.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=o,t.childLanes=r,e}function gm(t,e,r){var o=e.pendingProps;switch(la(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return re(e.type)&&ms(),Vt(e),null;case 3:return o=e.stateNode,dn(),It(ee),It(Qt),fa(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(Ao(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,we!==null&&(Tl(we),we=null))),xl(t,e),Vt(e),null;case 5:ma(e);var s=Ir(so.current);if(r=e.type,t!==null&&e.stateNode!=null)yu(t,e,r,o,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!o){if(e.stateNode===null)throw Error(N(166));return Vt(e),null}if(t=Ir(_e.current),Ao(e)){o=e.stateNode,r=e.type;var i=e.memoizedProps;switch(o[We]=e,o[no]=i,t=(e.mode&1)!==0,r){case"dialog":Ct("cancel",o),Ct("close",o);break;case"iframe":case"object":case"embed":Ct("load",o);break;case"video":case"audio":for(s=0;s<Fn.length;s++)Ct(Fn[s],o);break;case"source":Ct("error",o);break;case"img":case"image":case"link":Ct("error",o),Ct("load",o);break;case"details":Ct("toggle",o);break;case"input":Ka(o,i),Ct("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},Ct("invalid",o);break;case"textarea":Ja(o,i),Ct("invalid",o)}Yi(r,i),s=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?o.textContent!==a&&(i.suppressHydrationWarning!==!0&&Bo(o.textContent,a,t),s=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Bo(o.textContent,a,t),s=["children",""+a]):Yn.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Ct("scroll",o)}switch(r){case"input":wo(o),Xa(o,i,!0);break;case"textarea":wo(o),Za(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=ps)}o=s,e.updateQueue=o,o!==null&&(e.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Qg(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof o.is=="string"?t=l.createElement(r,{is:o.is}):(t=l.createElement(r),r==="select"&&(l=t,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):t=l.createElementNS(t,r),t[We]=e,t[no]=o,hu(t,e,!1,!1),e.stateNode=t;t:{switch(l=Qi(r,o),r){case"dialog":Ct("cancel",t),Ct("close",t),s=o;break;case"iframe":case"object":case"embed":Ct("load",t),s=o;break;case"video":case"audio":for(s=0;s<Fn.length;s++)Ct(Fn[s],t);s=o;break;case"source":Ct("error",t),s=o;break;case"img":case"image":case"link":Ct("error",t),Ct("load",t),s=o;break;case"details":Ct("toggle",t),s=o;break;case"input":Ka(t,o),s=$i(t,o),Ct("invalid",t);break;case"option":s=o;break;case"select":t._wrapperState={wasMultiple:!!o.multiple},s=Ft({},o,{value:void 0}),Ct("invalid",t);break;case"textarea":Ja(t,o),s=Gi(t,o),Ct("invalid",t);break;default:s=o}Yi(r,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var d=a[i];i==="style"?Jg(t,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Kg(t,d)):i==="children"?typeof d=="string"?(r!=="textarea"||d!=="")&&Qn(t,d):typeof d=="number"&&Qn(t,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Yn.hasOwnProperty(i)?d!=null&&i==="onScroll"&&Ct("scroll",t):d!=null&&Vl(t,i,d,l))}switch(r){case"input":wo(t),Xa(t,o,!1);break;case"textarea":wo(t),Za(t);break;case"option":o.value!=null&&t.setAttribute("value",""+mr(o.value));break;case"select":t.multiple=!!o.multiple,i=o.value,i!=null?Zr(t,!!o.multiple,i,!1):o.defaultValue!=null&&Zr(t,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=ps)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}}o&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)xu(t,e,t.memoizedProps,o);else{if(typeof o!="string"&&e.stateNode===null)throw Error(N(166));if(r=Ir(so.current),Ir(_e.current),Ao(e)){if(o=e.stateNode,r=e.memoizedProps,o[We]=e,(i=o.nodeValue!==r)&&(t=ie,t!==null))switch(t.tag){case 3:Bo(o.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Bo(o.nodeValue,r,(t.mode&1)!==0)}i&&(e.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[We]=e,e.stateNode=o}return Vt(e),null;case 13:if(It(Bt),o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Tt&&se!==null&&e.mode&1&&!(e.flags&128))Lc(),ln(),e.flags|=98560,i=!1;else if(i=Ao(e),o!==null&&o.dehydrated!==null){if(t===null){if(!i)throw Error(N(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[We]=e}else ln(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),i=!1}else we!==null&&(Tl(we),we=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(o=o!==null,o!==(t!==null&&t.memoizedState!==null)&&o&&(e.child.flags|=8192,e.mode&1&&(t===null||Bt.current&1?Lt===0&&(Lt=3):Ta())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return dn(),xl(t,e),t===null&&eo(e.stateNode.containerInfo),Vt(e),null;case 10:return ca(e.type._context),Vt(e),null;case 17:return re(e.type)&&ms(),Vt(e),null;case 19:if(It(Bt),i=e.memoizedState,i===null)return Vt(e),null;if(o=(e.flags&128)!==0,l=i.rendering,l===null)if(o)Cn(i,!1);else{if(Lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=ws(t),l!==null){for(e.flags|=128,Cn(i,!1),o=l.updateQueue,o!==null&&(e.updateQueue=o,e.flags|=4),e.subtreeFlags=0,o=r,r=e.child;r!==null;)i=r,t=o,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,t=l.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return St(Bt,Bt.current&1|2),e.child}t=t.sibling}i.tail!==null&&Dt()>cn&&(e.flags|=128,o=!0,Cn(i,!1),e.lanes=4194304)}else{if(!o)if(t=ws(l),t!==null){if(e.flags|=128,o=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),Cn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Tt)return Vt(e),null}else 2*Dt()-i.renderingStartTime>cn&&r!==1073741824&&(e.flags|=128,o=!0,Cn(i,!1),e.lanes=4194304);i.isBackwards?(l.sibling=e.child,e.child=l):(r=i.last,r!==null?r.sibling=l:e.child=l,i.last=l)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Dt(),e.sibling=null,r=Bt.current,St(Bt,o?r&1|2:r&1),e):(Vt(e),null);case 22:case 23:return za(),o=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==o&&(e.flags|=8192),o&&e.mode&1?oe&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(N(156,e.tag))}function cm(t,e){switch(la(e),e.tag){case 1:return re(e.type)&&ms(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return dn(),It(ee),It(Qt),fa(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ma(e),null;case 13:if(It(Bt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(N(340));ln()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return It(Bt),null;case 4:return dn(),null;case 10:return ca(e.type._context),null;case 22:case 23:return za(),null;case 24:return null;default:return null}}var Do=!1,Yt=!1,um=typeof WeakSet=="function"?WeakSet:Set,q=null;function Xr(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){Rt(t,e,o)}else r.current=null}function kl(t,e,r){try{r()}catch(o){Rt(t,e,o)}}var Od=!1;function bm(t,e){if(ol=cs,t=Cc(),sa(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var s=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break t}var l=0,a=-1,d=-1,g=0,p=0,v=t,m=null;e:for(;;){for(var k;v!==r||s!==0&&v.nodeType!==3||(a=l+s),v!==i||o!==0&&v.nodeType!==3||(d=l+o),v.nodeType===3&&(l+=v.nodeValue.length),(k=v.firstChild)!==null;)m=v,v=k;for(;;){if(v===t)break e;if(m===r&&++g===s&&(a=l),m===i&&++p===o&&(d=l),(k=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=k}r=a===-1||d===-1?null:{start:a,end:d}}else r=null}r=r||{start:0,end:0}}else r=null;for(sl={focusedElem:t,selectionRange:r},cs=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var S=x.memoizedProps,z=x.memoizedState,b=e.stateNode,u=b.getSnapshotBeforeUpdate(e.elementType===e.type?S:xe(e.type,S),z);b.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var c=e.stateNode.containerInfo;c.nodeType===1?c.textContent="":c.nodeType===9&&c.documentElement&&c.removeChild(c.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(h){Rt(e,e.return,h)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return x=Od,Od=!1,x}function $n(t,e,r){var o=e.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&kl(e,r,i)}s=s.next}while(s!==o)}}function Os(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var o=r.create;r.destroy=o()}r=r.next}while(r!==e)}}function wl(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function ku(t){var e=t.alternate;e!==null&&(t.alternate=null,ku(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[We],delete e[no],delete e[al],delete e[Kp],delete e[Xp])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function wu(t){return t.tag===5||t.tag===3||t.tag===4}function $d(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||wu(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sl(t,e,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=ps));else if(o!==4&&(t=t.child,t!==null))for(Sl(t,e,r),t=t.sibling;t!==null;)Sl(t,e,r),t=t.sibling}function jl(t,e,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(o!==4&&(t=t.child,t!==null))for(jl(t,e,r),t=t.sibling;t!==null;)jl(t,e,r),t=t.sibling}var $t=null,ke=!1;function tr(t,e,r){for(r=r.child;r!==null;)Su(t,e,r),r=r.sibling}function Su(t,e,r){if(Me&&typeof Me.onCommitFiberUnmount=="function")try{Me.onCommitFiberUnmount(Rs,r)}catch{}switch(r.tag){case 5:Yt||Xr(r,e);case 6:var o=$t,s=ke;$t=null,tr(t,e,r),$t=o,ke=s,$t!==null&&(ke?(t=$t,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):$t.removeChild(r.stateNode));break;case 18:$t!==null&&(ke?(t=$t,r=r.stateNode,t.nodeType===8?ci(t.parentNode,r):t.nodeType===1&&ci(t,r),Zn(t)):ci($t,r.stateNode));break;case 4:o=$t,s=ke,$t=r.stateNode.containerInfo,ke=!0,tr(t,e,r),$t=o,ke=s;break;case 0:case 11:case 14:case 15:if(!Yt&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var i=s,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&kl(r,e,l),s=s.next}while(s!==o)}tr(t,e,r);break;case 1:if(!Yt&&(Xr(r,e),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(a){Rt(r,e,a)}tr(t,e,r);break;case 21:tr(t,e,r);break;case 22:r.mode&1?(Yt=(o=Yt)||r.memoizedState!==null,tr(t,e,r),Yt=o):tr(t,e,r);break;default:tr(t,e,r)}}function Hd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new um),e.forEach(function(o){var s=wm.bind(null,t,o);r.has(o)||(r.add(o),o.then(s,s))})}}function ye(t,e){var r=e.deletions;if(r!==null)for(var o=0;o<r.length;o++){var s=r[o];try{var i=t,l=e,a=l;t:for(;a!==null;){switch(a.tag){case 5:$t=a.stateNode,ke=!1;break t;case 3:$t=a.stateNode.containerInfo,ke=!0;break t;case 4:$t=a.stateNode.containerInfo,ke=!0;break t}a=a.return}if($t===null)throw Error(N(160));Su(i,l,s),$t=null,ke=!1;var d=s.alternate;d!==null&&(d.return=null),s.return=null}catch(g){Rt(s,e,g)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ju(e,t),e=e.sibling}function ju(t,e){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ye(e,t),ze(t),o&4){try{$n(3,t,t.return),Os(3,t)}catch(S){Rt(t,t.return,S)}try{$n(5,t,t.return)}catch(S){Rt(t,t.return,S)}}break;case 1:ye(e,t),ze(t),o&512&&r!==null&&Xr(r,r.return);break;case 5:if(ye(e,t),ze(t),o&512&&r!==null&&Xr(r,r.return),t.flags&32){var s=t.stateNode;try{Qn(s,"")}catch(S){Rt(t,t.return,S)}}if(o&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,l=r!==null?r.memoizedProps:i,a=t.type,d=t.updateQueue;if(t.updateQueue=null,d!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Vg(s,i),Qi(a,l);var g=Qi(a,i);for(l=0;l<d.length;l+=2){var p=d[l],v=d[l+1];p==="style"?Jg(s,v):p==="dangerouslySetInnerHTML"?Kg(s,v):p==="children"?Qn(s,v):Vl(s,p,v,g)}switch(a){case"input":Hi(s,i);break;case"textarea":Yg(s,i);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?Zr(s,!!i.multiple,k,!1):m!==!!i.multiple&&(i.defaultValue!=null?Zr(s,!!i.multiple,i.defaultValue,!0):Zr(s,!!i.multiple,i.multiple?[]:"",!1))}s[no]=i}catch(S){Rt(t,t.return,S)}}break;case 6:if(ye(e,t),ze(t),o&4){if(t.stateNode===null)throw Error(N(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(S){Rt(t,t.return,S)}}break;case 3:if(ye(e,t),ze(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Zn(e.containerInfo)}catch(S){Rt(t,t.return,S)}break;case 4:ye(e,t),ze(t);break;case 13:ye(e,t),ze(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Ca=Dt())),o&4&&Hd(t);break;case 22:if(p=r!==null&&r.memoizedState!==null,t.mode&1?(Yt=(g=Yt)||p,ye(e,t),Yt=g):ye(e,t),ze(t),o&8192){if(g=t.memoizedState!==null,(t.stateNode.isHidden=g)&&!p&&t.mode&1)for(q=t,p=t.child;p!==null;){for(v=q=p;q!==null;){switch(m=q,k=m.child,m.tag){case 0:case 11:case 14:case 15:$n(4,m,m.return);break;case 1:Xr(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){o=m,r=m.return;try{e=o,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(S){Rt(o,r,S)}}break;case 5:Xr(m,m.return);break;case 22:if(m.memoizedState!==null){Gd(v);continue}}k!==null?(k.return=m,q=k):Gd(v)}p=p.sibling}t:for(p=null,v=t;;){if(v.tag===5){if(p===null){p=v;try{s=v.stateNode,g?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=v.stateNode,d=v.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=Xg("display",l))}catch(S){Rt(t,t.return,S)}}}else if(v.tag===6){if(p===null)try{v.stateNode.nodeValue=g?"":v.memoizedProps}catch(S){Rt(t,t.return,S)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===t)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===t)break t;for(;v.sibling===null;){if(v.return===null||v.return===t)break t;p===v&&(p=null),v=v.return}p===v&&(p=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:ye(e,t),ze(t),o&4&&Hd(t);break;case 21:break;default:ye(e,t),ze(t)}}function ze(t){var e=t.flags;if(e&2){try{t:{for(var r=t.return;r!==null;){if(wu(r)){var o=r;break t}r=r.return}throw Error(N(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&(Qn(s,""),o.flags&=-33);var i=$d(t);jl(t,i,s);break;case 3:case 4:var l=o.stateNode.containerInfo,a=$d(t);Sl(t,a,l);break;default:throw Error(N(161))}}catch(d){Rt(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function pm(t,e,r){q=t,Cu(t)}function Cu(t,e,r){for(var o=(t.mode&1)!==0;q!==null;){var s=q,i=s.child;if(s.tag===22&&o){var l=s.memoizedState!==null||Do;if(!l){var a=s.alternate,d=a!==null&&a.memoizedState!==null||Yt;a=Do;var g=Yt;if(Do=l,(Yt=d)&&!g)for(q=s;q!==null;)l=q,d=l.child,l.tag===22&&l.memoizedState!==null?Vd(s):d!==null?(d.return=l,q=d):Vd(s);for(;i!==null;)q=i,Cu(i),i=i.sibling;q=s,Do=a,Yt=g}Ud(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,q=i):Ud(t)}}function Ud(t){for(;q!==null;){var e=q;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Yt||Os(5,e);break;case 1:var o=e.stateNode;if(e.flags&4&&!Yt)if(r===null)o.componentDidMount();else{var s=e.elementType===e.type?r.memoizedProps:xe(e.type,r.memoizedProps);o.componentDidUpdate(s,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Td(e,i,o);break;case 3:var l=e.updateQueue;if(l!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}Td(e,l,r)}break;case 5:var a=e.stateNode;if(r===null&&e.flags&4){r=a;var d=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&r.focus();break;case"img":d.src&&(r.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var g=e.alternate;if(g!==null){var p=g.memoizedState;if(p!==null){var v=p.dehydrated;v!==null&&Zn(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Yt||e.flags&512&&wl(e)}catch(m){Rt(e,e.return,m)}}if(e===t){q=null;break}if(r=e.sibling,r!==null){r.return=e.return,q=r;break}q=e.return}}function Gd(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var r=e.sibling;if(r!==null){r.return=e.return,q=r;break}q=e.return}}function Vd(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{Os(4,e)}catch(d){Rt(e,r,d)}break;case 1:var o=e.stateNode;if(typeof o.componentDidMount=="function"){var s=e.return;try{o.componentDidMount()}catch(d){Rt(e,s,d)}}var i=e.return;try{wl(e)}catch(d){Rt(e,i,d)}break;case 5:var l=e.return;try{wl(e)}catch(d){Rt(e,l,d)}}}catch(d){Rt(e,e.return,d)}if(e===t){q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,q=a;break}q=e.return}}var mm=Math.ceil,Cs=Ze.ReactCurrentDispatcher,Sa=Ze.ReactCurrentOwner,pe=Ze.ReactCurrentBatchConfig,mt=0,Pt=null,Mt=null,Ht=0,oe=0,Jr=hr(0),Lt=0,go=null,Rr=0,$s=0,ja=0,Hn=null,qt=null,Ca=0,cn=1/0,Oe=null,Is=!1,Cl=null,ur=null,Wo=!1,ir=null,zs=0,Un=0,Il=null,es=-1,rs=0;function Xt(){return mt&6?Dt():es!==-1?es:es=Dt()}function br(t){return t.mode&1?mt&2&&Ht!==0?Ht&-Ht:Zp.transition!==null?(rs===0&&(rs=dc()),rs):(t=yt,t!==0||(t=window.event,t=t===void 0?16:fc(t.type)),t):1}function je(t,e,r,o){if(50<Un)throw Un=0,Il=null,Error(N(185));mo(t,r,o),(!(mt&2)||t!==Pt)&&(t===Pt&&(!(mt&2)&&($s|=r),Lt===4&&or(t,Ht)),ne(t,o),r===1&&mt===0&&!(e.mode&1)&&(cn=Dt()+500,Ls&&yr()))}function ne(t,e){var r=t.callbackNode;Zb(t,e);var o=gs(t,t===Pt?Ht:0);if(o===0)r!==null&&ed(r),t.callbackNode=null,t.callbackPriority=0;else if(e=o&-o,t.callbackPriority!==e){if(r!=null&&ed(r),e===1)t.tag===0?Jp(Yd.bind(null,t)):Wc(Yd.bind(null,t)),Yp(function(){!(mt&6)&&yr()}),r=null;else{switch(gc(o)){case 1:r=Jl;break;case 4:r=lc;break;case 16:r=ds;break;case 536870912:r=ac;break;default:r=ds}r=Ru(r,Iu.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function Iu(t,e){if(es=-1,rs=0,mt&6)throw Error(N(327));var r=t.callbackNode;if(nn()&&t.callbackNode!==r)return null;var o=gs(t,t===Pt?Ht:0);if(o===0)return null;if(o&30||o&t.expiredLanes||e)e=Ts(t,o);else{e=o;var s=mt;mt|=2;var i=Tu();(Pt!==t||Ht!==e)&&(Oe=null,cn=Dt()+500,Tr(t,e));do try{hm();break}catch(a){zu(t,a)}while(!0);ga(),Cs.current=i,mt=s,Mt!==null?e=0:(Pt=null,Ht=0,e=Lt)}if(e!==0){if(e===2&&(s=qi(t),s!==0&&(o=s,e=zl(t,s))),e===1)throw r=go,Tr(t,0),or(t,o),ne(t,Dt()),r;if(e===6)or(t,o);else{if(s=t.current.alternate,!(o&30)&&!fm(s)&&(e=Ts(t,o),e===2&&(i=qi(t),i!==0&&(o=i,e=zl(t,i))),e===1))throw r=go,Tr(t,0),or(t,o),ne(t,Dt()),r;switch(t.finishedWork=s,t.finishedLanes=o,e){case 0:case 1:throw Error(N(345));case 2:kr(t,qt,Oe);break;case 3:if(or(t,o),(o&130023424)===o&&(e=Ca+500-Dt(),10<e)){if(gs(t,0)!==0)break;if(s=t.suspendedLanes,(s&o)!==o){Xt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=ll(kr.bind(null,t,qt,Oe),e);break}kr(t,qt,Oe);break;case 4:if(or(t,o),(o&4194240)===o)break;for(e=t.eventTimes,s=-1;0<o;){var l=31-Se(o);i=1<<l,l=e[l],l>s&&(s=l),o&=~i}if(o=s,o=Dt()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*mm(o/1960))-o,10<o){t.timeoutHandle=ll(kr.bind(null,t,qt,Oe),o);break}kr(t,qt,Oe);break;case 5:kr(t,qt,Oe);break;default:throw Error(N(329))}}}return ne(t,Dt()),t.callbackNode===r?Iu.bind(null,t):null}function zl(t,e){var r=Hn;return t.current.memoizedState.isDehydrated&&(Tr(t,e).flags|=256),t=Ts(t,e),t!==2&&(e=qt,qt=r,e!==null&&Tl(e)),t}function Tl(t){qt===null?qt=t:qt.push.apply(qt,t)}function fm(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var s=r[o],i=s.getSnapshot;s=s.value;try{if(!Ce(i(),s))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function or(t,e){for(e&=~ja,e&=~$s,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-Se(e),o=1<<r;t[r]=-1,e&=~o}}function Yd(t){if(mt&6)throw Error(N(327));nn();var e=gs(t,0);if(!(e&1))return ne(t,Dt()),null;var r=Ts(t,e);if(t.tag!==0&&r===2){var o=qi(t);o!==0&&(e=o,r=zl(t,o))}if(r===1)throw r=go,Tr(t,0),or(t,e),ne(t,Dt()),r;if(r===6)throw Error(N(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,kr(t,qt,Oe),ne(t,Dt()),null}function Ia(t,e){var r=mt;mt|=1;try{return t(e)}finally{mt=r,mt===0&&(cn=Dt()+500,Ls&&yr())}}function Dr(t){ir!==null&&ir.tag===0&&!(mt&6)&&nn();var e=mt;mt|=1;var r=pe.transition,o=yt;try{if(pe.transition=null,yt=1,t)return t()}finally{yt=o,pe.transition=r,mt=e,!(mt&6)&&yr()}}function za(){oe=Jr.current,It(Jr)}function Tr(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,Vp(r)),Mt!==null)for(r=Mt.return;r!==null;){var o=r;switch(la(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&ms();break;case 3:dn(),It(ee),It(Qt),fa();break;case 5:ma(o);break;case 4:dn();break;case 13:It(Bt);break;case 19:It(Bt);break;case 10:ca(o.type._context);break;case 22:case 23:za()}r=r.return}if(Pt=t,Mt=t=pr(t.current,null),Ht=oe=e,Lt=0,go=null,ja=$s=Rr=0,qt=Hn=null,Cr!==null){for(e=0;e<Cr.length;e++)if(r=Cr[e],o=r.interleaved,o!==null){r.interleaved=null;var s=o.next,i=r.pending;if(i!==null){var l=i.next;i.next=s,o.next=l}r.pending=o}Cr=null}return t}function zu(t,e){do{var r=Mt;try{if(ga(),Zo.current=js,Ss){for(var o=At.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}Ss=!1}if(Fr=0,Nt=_t=At=null,On=!1,io=0,Sa.current=null,r===null||r.return===null){Lt=1,go=e,Mt=null;break}t:{var i=t,l=r.return,a=r,d=e;if(e=Ht,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var g=d,p=a,v=p.tag;if(!(p.mode&1)&&(v===0||v===11||v===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var k=Dd(l);if(k!==null){k.flags&=-257,Wd(k,l,a,i,e),k.mode&1&&Rd(i,g,e),e=k,d=g;var x=e.updateQueue;if(x===null){var S=new Set;S.add(d),e.updateQueue=S}else x.add(d);break t}else{if(!(e&1)){Rd(i,g,e),Ta();break t}d=Error(N(426))}}else if(Tt&&a.mode&1){var z=Dd(l);if(z!==null){!(z.flags&65536)&&(z.flags|=256),Wd(z,l,a,i,e),aa(gn(d,a));break t}}i=d=gn(d,a),Lt!==4&&(Lt=2),Hn===null?Hn=[i]:Hn.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var b=gu(i,d,e);zd(i,b);break t;case 1:a=d;var u=i.type,c=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ur===null||!ur.has(c)))){i.flags|=65536,e&=-e,i.lanes|=e;var h=cu(i,a,e);zd(i,h);break t}}i=i.return}while(i!==null)}Bu(r)}catch(w){e=w,Mt===r&&r!==null&&(Mt=r=r.return);continue}break}while(!0)}function Tu(){var t=Cs.current;return Cs.current=js,t===null?js:t}function Ta(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),Pt===null||!(Rr&268435455)&&!($s&268435455)||or(Pt,Ht)}function Ts(t,e){var r=mt;mt|=2;var o=Tu();(Pt!==t||Ht!==e)&&(Oe=null,Tr(t,e));do try{vm();break}catch(s){zu(t,s)}while(!0);if(ga(),mt=r,Cs.current=o,Mt!==null)throw Error(N(261));return Pt=null,Ht=0,Lt}function vm(){for(;Mt!==null;)Eu(Mt)}function hm(){for(;Mt!==null&&!Hb();)Eu(Mt)}function Eu(t){var e=Fu(t.alternate,t,oe);t.memoizedProps=t.pendingProps,e===null?Bu(t):Mt=e,Sa.current=null}function Bu(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=cm(r,e),r!==null){r.flags&=32767,Mt=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,Mt=null;return}}else if(r=gm(r,e,oe),r!==null){Mt=r;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);Lt===0&&(Lt=5)}function kr(t,e,r){var o=yt,s=pe.transition;try{pe.transition=null,yt=1,ym(t,e,r,o)}finally{pe.transition=s,yt=o}return null}function ym(t,e,r,o){do nn();while(ir!==null);if(mt&6)throw Error(N(327));r=t.finishedWork;var s=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(N(177));t.callbackNode=null,t.callbackPriority=0;var i=r.lanes|r.childLanes;if(qb(t,i),t===Pt&&(Mt=Pt=null,Ht=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Wo||(Wo=!0,Ru(ds,function(){return nn(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=pe.transition,pe.transition=null;var l=yt;yt=1;var a=mt;mt|=4,Sa.current=null,bm(t,r),ju(r,t),Np(sl),cs=!!ol,sl=ol=null,t.current=r,pm(r),Ub(),mt=a,yt=l,pe.transition=i}else t.current=r;if(Wo&&(Wo=!1,ir=t,zs=s),i=t.pendingLanes,i===0&&(ur=null),Yb(r.stateNode),ne(t,Dt()),e!==null)for(o=t.onRecoverableError,r=0;r<e.length;r++)s=e[r],o(s.value,{componentStack:s.stack,digest:s.digest});if(Is)throw Is=!1,t=Cl,Cl=null,t;return zs&1&&t.tag!==0&&nn(),i=t.pendingLanes,i&1?t===Il?Un++:(Un=0,Il=t):Un=0,yr(),null}function nn(){if(ir!==null){var t=gc(zs),e=pe.transition,r=yt;try{if(pe.transition=null,yt=16>t?16:t,ir===null)var o=!1;else{if(t=ir,ir=null,zs=0,mt&6)throw Error(N(331));var s=mt;for(mt|=4,q=t.current;q!==null;){var i=q,l=i.child;if(q.flags&16){var a=i.deletions;if(a!==null){for(var d=0;d<a.length;d++){var g=a[d];for(q=g;q!==null;){var p=q;switch(p.tag){case 0:case 11:case 15:$n(8,p,i)}var v=p.child;if(v!==null)v.return=p,q=v;else for(;q!==null;){p=q;var m=p.sibling,k=p.return;if(ku(p),p===g){q=null;break}if(m!==null){m.return=k,q=m;break}q=k}}}var x=i.alternate;if(x!==null){var S=x.child;if(S!==null){x.child=null;do{var z=S.sibling;S.sibling=null,S=z}while(S!==null)}}q=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,q=l;else t:for(;q!==null;){if(i=q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:$n(9,i,i.return)}var b=i.sibling;if(b!==null){b.return=i.return,q=b;break t}q=i.return}}var u=t.current;for(q=u;q!==null;){l=q;var c=l.child;if(l.subtreeFlags&2064&&c!==null)c.return=l,q=c;else t:for(l=u;q!==null;){if(a=q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Os(9,a)}}catch(w){Rt(a,a.return,w)}if(a===l){q=null;break t}var h=a.sibling;if(h!==null){h.return=a.return,q=h;break t}q=a.return}}if(mt=s,yr(),Me&&typeof Me.onPostCommitFiberRoot=="function")try{Me.onPostCommitFiberRoot(Rs,t)}catch{}o=!0}return o}finally{yt=r,pe.transition=e}}return!1}function Qd(t,e,r){e=gn(r,e),e=gu(t,e,1),t=cr(t,e,1),e=Xt(),t!==null&&(mo(t,1,e),ne(t,e))}function Rt(t,e,r){if(t.tag===3)Qd(t,t,r);else for(;e!==null;){if(e.tag===3){Qd(e,t,r);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ur===null||!ur.has(o))){t=gn(r,t),t=cu(e,t,1),e=cr(e,t,1),t=Xt(),e!==null&&(mo(e,1,t),ne(e,t));break}}e=e.return}}function xm(t,e,r){var o=t.pingCache;o!==null&&o.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&r,Pt===t&&(Ht&r)===r&&(Lt===4||Lt===3&&(Ht&130023424)===Ht&&500>Dt()-Ca?Tr(t,0):ja|=r),ne(t,e)}function Au(t,e){e===0&&(t.mode&1?(e=Co,Co<<=1,!(Co&130023424)&&(Co=4194304)):e=1);var r=Xt();t=Ke(t,e),t!==null&&(mo(t,e,r),ne(t,r))}function km(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),Au(t,r)}function wm(t,e){var r=0;switch(t.tag){case 13:var o=t.stateNode,s=t.memoizedState;s!==null&&(r=s.retryLane);break;case 19:o=t.stateNode;break;default:throw Error(N(314))}o!==null&&o.delete(e),Au(t,r)}var Fu;Fu=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||ee.current)te=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return te=!1,dm(t,e,r);te=!!(t.flags&131072)}else te=!1,Tt&&e.flags&1048576&&Mc(e,hs,e.index);switch(e.lanes=0,e.tag){case 2:var o=e.type;ts(t,e),t=e.pendingProps;var s=sn(e,Qt.current);rn(e,r),s=ha(null,e,o,t,s,r);var i=ya();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,re(o)?(i=!0,fs(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,ba(e),s.updater=Ps,e.stateNode=s,s._reactInternals=e,pl(e,o,t,r),e=vl(null,e,o,!0,i,r)):(e.tag=0,Tt&&i&&ia(e),Kt(null,e,s,r),e=e.child),e;case 16:o=e.elementType;t:{switch(ts(t,e),t=e.pendingProps,s=o._init,o=s(o._payload),e.type=o,s=e.tag=jm(o),t=xe(o,t),s){case 0:e=fl(null,e,o,t,r);break t;case 1:e=Ld(null,e,o,t,r);break t;case 11:e=Md(null,e,o,t,r);break t;case 14:e=_d(null,e,o,xe(o.type,t),r);break t}throw Error(N(306,o,""))}return e;case 0:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:xe(o,s),fl(t,e,o,s,r);case 1:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:xe(o,s),Ld(t,e,o,s,r);case 3:t:{if(mu(e),t===null)throw Error(N(387));o=e.pendingProps,i=e.memoizedState,s=i.element,$c(t,e),ks(e,o,null,r);var l=e.memoizedState;if(o=l.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=gn(Error(N(423)),e),e=Nd(t,e,o,r,s);break t}else if(o!==s){s=gn(Error(N(424)),e),e=Nd(t,e,o,r,s);break t}else for(se=gr(e.stateNode.containerInfo.firstChild),ie=e,Tt=!0,we=null,r=Pc(e,null,o,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ln(),o===s){e=Xe(t,e,r);break t}Kt(t,e,o,r)}e=e.child}return e;case 5:return Hc(e),t===null&&cl(e),o=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,l=s.children,il(o,s)?l=null:i!==null&&il(o,i)&&(e.flags|=32),pu(t,e),Kt(t,e,l,r),e.child;case 6:return t===null&&cl(e),null;case 13:return fu(t,e,r);case 4:return pa(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=an(e,null,o,r):Kt(t,e,o,r),e.child;case 11:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:xe(o,s),Md(t,e,o,s,r);case 7:return Kt(t,e,e.pendingProps,r),e.child;case 8:return Kt(t,e,e.pendingProps.children,r),e.child;case 12:return Kt(t,e,e.pendingProps.children,r),e.child;case 10:t:{if(o=e.type._context,s=e.pendingProps,i=e.memoizedProps,l=s.value,St(ys,o._currentValue),o._currentValue=l,i!==null)if(Ce(i.value,l)){if(i.children===s.children&&!ee.current){e=Xe(t,e,r);break t}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var d=a.firstContext;d!==null;){if(d.context===o){if(i.tag===1){d=Ve(-1,r&-r),d.tag=2;var g=i.updateQueue;if(g!==null){g=g.shared;var p=g.pending;p===null?d.next=d:(d.next=p.next,p.next=d),g.pending=d}}i.lanes|=r,d=i.alternate,d!==null&&(d.lanes|=r),ul(i.return,r,e),a.lanes|=r;break}d=d.next}}else if(i.tag===10)l=i.type===e.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(N(341));l.lanes|=r,a=l.alternate,a!==null&&(a.lanes|=r),ul(l,r,e),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===e){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Kt(t,e,s.children,r),e=e.child}return e;case 9:return s=e.type,o=e.pendingProps.children,rn(e,r),s=me(s),o=o(s),e.flags|=1,Kt(t,e,o,r),e.child;case 14:return o=e.type,s=xe(o,e.pendingProps),s=xe(o.type,s),_d(t,e,o,s,r);case 15:return uu(t,e,e.type,e.pendingProps,r);case 17:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:xe(o,s),ts(t,e),e.tag=1,re(o)?(t=!0,fs(e)):t=!1,rn(e,r),du(e,o,s),pl(e,o,s,r),vl(null,e,o,!0,t,r);case 19:return vu(t,e,r);case 22:return bu(t,e,r)}throw Error(N(156,e.tag))};function Ru(t,e){return ic(t,e)}function Sm(t,e,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ue(t,e,r,o){return new Sm(t,e,r,o)}function Ea(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jm(t){if(typeof t=="function")return Ea(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ql)return 11;if(t===Kl)return 14}return 2}function pr(t,e){var r=t.alternate;return r===null?(r=ue(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function ns(t,e,r,o,s,i){var l=2;if(o=t,typeof t=="function")Ea(t)&&(l=1);else if(typeof t=="string")l=5;else t:switch(t){case Or:return Er(r.children,s,i,e);case Yl:l=8,s|=8;break;case Li:return t=ue(12,r,e,s|2),t.elementType=Li,t.lanes=i,t;case Ni:return t=ue(13,r,e,s),t.elementType=Ni,t.lanes=i,t;case Pi:return t=ue(19,r,e,s),t.elementType=Pi,t.lanes=i,t;case Hg:return Hs(r,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Og:l=10;break t;case $g:l=9;break t;case Ql:l=11;break t;case Kl:l=14;break t;case er:l=16,o=null;break t}throw Error(N(130,t==null?t:typeof t,""))}return e=ue(l,r,e,s),e.elementType=t,e.type=o,e.lanes=i,e}function Er(t,e,r,o){return t=ue(7,t,o,e),t.lanes=r,t}function Hs(t,e,r,o){return t=ue(22,t,o,e),t.elementType=Hg,t.lanes=r,t.stateNode={isHidden:!1},t}function yi(t,e,r){return t=ue(6,t,null,e),t.lanes=r,t}function xi(t,e,r){return e=ue(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Cm(t,e,r,o,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ti(0),this.expirationTimes=ti(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ti(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Ba(t,e,r,o,s,i,l,a,d){return t=new Cm(t,e,r,a,d),e===1?(e=1,i===!0&&(e|=8)):e=0,i=ue(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ba(i),t}function Im(t,e,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pr,key:o==null?null:""+o,children:t,containerInfo:e,implementation:r}}function Du(t){if(!t)return fr;t=t._reactInternals;t:{if(_r(t)!==t||t.tag!==1)throw Error(N(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break t;case 1:if(re(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break t}}e=e.return}while(e!==null);throw Error(N(171))}if(t.tag===1){var r=t.type;if(re(r))return Dc(t,r,e)}return e}function Wu(t,e,r,o,s,i,l,a,d){return t=Ba(r,o,!0,t,s,i,l,a,d),t.context=Du(null),r=t.current,o=Xt(),s=br(r),i=Ve(o,s),i.callback=e??null,cr(r,i,s),t.current.lanes=s,mo(t,s,o),ne(t,o),t}function Us(t,e,r,o){var s=e.current,i=Xt(),l=br(s);return r=Du(r),e.context===null?e.context=r:e.pendingContext=r,e=Ve(i,l),e.payload={element:t},o=o===void 0?null:o,o!==null&&(e.callback=o),t=cr(s,e,l),t!==null&&(je(t,s,l,i),Jo(t,s,l)),l}function Es(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Kd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function Aa(t,e){Kd(t,e),(t=t.alternate)&&Kd(t,e)}function zm(){return null}var Mu=typeof reportError=="function"?reportError:function(t){console.error(t)};function Fa(t){this._internalRoot=t}Gs.prototype.render=Fa.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(N(409));Us(t,e,null,null)};Gs.prototype.unmount=Fa.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Dr(function(){Us(null,t,null,null)}),e[Qe]=null}};function Gs(t){this._internalRoot=t}Gs.prototype.unstable_scheduleHydration=function(t){if(t){var e=bc();t={blockedOn:null,target:t,priority:e};for(var r=0;r<nr.length&&e!==0&&e<nr[r].priority;r++);nr.splice(r,0,t),r===0&&mc(t)}};function Ra(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xd(){}function Tm(t,e,r,o,s){if(s){if(typeof o=="function"){var i=o;o=function(){var g=Es(l);i.call(g)}}var l=Wu(e,o,t,0,null,!1,!1,"",Xd);return t._reactRootContainer=l,t[Qe]=l.current,eo(t.nodeType===8?t.parentNode:t),Dr(),l}for(;s=t.lastChild;)t.removeChild(s);if(typeof o=="function"){var a=o;o=function(){var g=Es(d);a.call(g)}}var d=Ba(t,0,!1,null,null,!1,!1,"",Xd);return t._reactRootContainer=d,t[Qe]=d.current,eo(t.nodeType===8?t.parentNode:t),Dr(function(){Us(e,d,r,o)}),d}function Ys(t,e,r,o,s){var i=r._reactRootContainer;if(i){var l=i;if(typeof s=="function"){var a=s;s=function(){var d=Es(l);a.call(d)}}Us(e,l,t,s)}else l=Tm(r,e,t,s,o);return Es(l)}cc=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=An(e.pendingLanes);r!==0&&(Zl(e,r|1),ne(e,Dt()),!(mt&6)&&(cn=Dt()+500,yr()))}break;case 13:Dr(function(){var o=Ke(t,1);if(o!==null){var s=Xt();je(o,t,1,s)}}),Aa(t,1)}};ql=function(t){if(t.tag===13){var e=Ke(t,134217728);if(e!==null){var r=Xt();je(e,t,134217728,r)}Aa(t,134217728)}};uc=function(t){if(t.tag===13){var e=br(t),r=Ke(t,e);if(r!==null){var o=Xt();je(r,t,e,o)}Aa(t,e)}};bc=function(){return yt};pc=function(t,e){var r=yt;try{return yt=t,e()}finally{yt=r}};Xi=function(t,e,r){switch(e){case"input":if(Hi(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var o=r[e];if(o!==t&&o.form===t.form){var s=_s(o);if(!s)throw Error(N(90));Gg(o),Hi(o,s)}}}break;case"textarea":Yg(t,r);break;case"select":e=r.value,e!=null&&Zr(t,!!r.multiple,e,!1)}};tc=Ia;ec=Dr;var Em={usingClientEntryPoint:!1,Events:[vo,Gr,_s,Zg,qg,Ia]},In={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bm={bundleType:In.bundleType,version:In.version,rendererPackageName:In.rendererPackageName,rendererConfig:In.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=oc(t),t===null?null:t.stateNode},findFiberByHostInstance:In.findFiberByHostInstance||zm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mo.isDisabled&&Mo.supportsFiber)try{Rs=Mo.inject(Bm),Me=Mo}catch{}}ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Em;ae.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ra(e))throw Error(N(200));return Im(t,e,null,r)};ae.createRoot=function(t,e){if(!Ra(t))throw Error(N(299));var r=!1,o="",s=Mu;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Ba(t,1,!1,null,null,r,!1,o,s),t[Qe]=e.current,eo(t.nodeType===8?t.parentNode:t),new Fa(e)};ae.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(N(188)):(t=Object.keys(t).join(","),Error(N(268,t)));return t=oc(e),t=t===null?null:t.stateNode,t};ae.flushSync=function(t){return Dr(t)};ae.hydrate=function(t,e,r){if(!Vs(e))throw Error(N(200));return Ys(null,t,e,!0,r)};ae.hydrateRoot=function(t,e,r){if(!Ra(t))throw Error(N(405));var o=r!=null&&r.hydratedSources||null,s=!1,i="",l=Mu;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),e=Wu(e,null,t,1,r??null,s,!1,i,l),t[Qe]=e.current,eo(t),o)for(t=0;t<o.length;t++)r=o[t],s=r._getVersion,s=s(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,s]:e.mutableSourceEagerHydrationData.push(r,s);return new Gs(e)};ae.render=function(t,e,r){if(!Vs(e))throw Error(N(200));return Ys(null,t,e,!1,r)};ae.unmountComponentAtNode=function(t){if(!Vs(t))throw Error(N(40));return t._reactRootContainer?(Dr(function(){Ys(null,null,t,!1,function(){t._reactRootContainer=null,t[Qe]=null})}),!0):!1};ae.unstable_batchedUpdates=Ia;ae.unstable_renderSubtreeIntoContainer=function(t,e,r,o){if(!Vs(r))throw Error(N(200));if(t==null||t._reactInternals===void 0)throw Error(N(38));return Ys(t,e,r,!1,o)};ae.version="18.3.1-next-f1338f8080-20240426";function _u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_u)}catch(t){console.error(t)}}_u(),_g.exports=ae;var Am=_g.exports,Lu,Jd=Am;Lu=Jd.createRoot,Jd.hydrateRoot;/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Nu=(...t)=>t.filter((e,r,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===r).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Rm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=y.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:s="",children:i,iconNode:l,...a},d)=>y.createElement("svg",{ref:d,...Rm,width:e,height:e,stroke:t,strokeWidth:o?Number(r)*24/Number(e):r,className:Nu("lucide",s),...a},[...l.map(([g,p])=>y.createElement(g,p)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=(t,e)=>{const r=y.forwardRef(({className:o,...s},i)=>y.createElement(Dm,{ref:i,iconNode:e,className:Nu(`lucide-${Fm(t)}`,o),...s}));return r.displayName=`${t}`,r};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=nt("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=nt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=nt("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=nt("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=nt("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=nt("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=nt("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=nt("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=nt("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=nt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=nt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=nt("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=nt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=nt("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=nt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=nt("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=nt("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=nt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=nt("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=nt("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=nt("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=nt("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=nt("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=nt("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=nt("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=nt("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=nt("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=nt("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=nt("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=nt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=nt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=nt("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=nt("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=nt("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=nt("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=nt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=nt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=nt("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=nt("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=nt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=nt("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=nt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=nt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=nt("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=nt("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=nt("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=nt("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=nt("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=nt("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=nt("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=nt("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=nt("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=nt("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=nt("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=nt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=nt("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),_a="anvil_token",La=()=>localStorage.getItem(_a),gf=t=>localStorage.setItem(_a,t),Rl=()=>localStorage.removeItem(_a),G=async(t,e,r)=>{const o={};r!==void 0&&(o["Content-Type"]="application/json");const s=La();s&&(o.Authorization=`Bearer ${s}`);const i=await fetch(`/api${e}`,{method:t,headers:o,body:r!==void 0?JSON.stringify(r):void 0});if(i.status===401)throw Rl(),window.dispatchEvent(new Event("anvil-unauthorized")),new Error("Not authenticated");if(i.status===204)return null;if(!i.ok){const l=await i.text();let a=l;try{a=JSON.parse(l).detail||l}catch{}throw new Error(a||`HTTP ${i.status}`)}return i.json()},Y={register:t=>G("POST","/auth/register",t),login:t=>G("POST","/auth/login",t),me:()=>G("GET","/auth/me"),getGcalStatus:()=>G("GET","/auth/google/status"),connectGoogle:()=>{window.location.href=`/api/auth/google?token=${encodeURIComponent(La()||"")}`},disconnectGoogle:()=>G("DELETE","/auth/google"),getPillars:()=>G("GET","/pillars"),getFocus:()=>G("GET","/focus"),createFocus:t=>G("POST","/focus",t),deleteFocus:t=>G("DELETE",`/focus/${t}`),getKickstart:()=>G("GET","/kickstart/videos"),createKickstart:t=>G("POST","/kickstart/videos",t),updateKickstart:(t,e)=>G("PUT",`/kickstart/videos/${t}`,e),deleteKickstart:t=>G("DELETE",`/kickstart/videos/${t}`),restoreKickstart:t=>G("POST",`/kickstart/videos/${t}/restore`),getTxns:()=>G("GET","/finance/txns"),createTxn:t=>G("POST","/finance/txns",t),updateTxn:(t,e)=>G("PUT",`/finance/txns/${t}`,e),deleteTxn:t=>G("DELETE",`/finance/txns/${t}`),restoreTxn:t=>G("POST",`/finance/txns/${t}/restore`),getSetting:t=>G("GET",`/settings/${t}`),setSetting:(t,e)=>G("PUT",`/settings/${t}`,{value:e}),getTasks:()=>G("GET","/tasks"),createTask:t=>G("POST","/tasks",t),updateTask:(t,e)=>G("PUT",`/tasks/${t}`,e),deleteTask:t=>G("DELETE",`/tasks/${t}`),restoreTask:t=>G("POST",`/tasks/${t}/restore`),scheduleTask:t=>G("PUT",`/tasks/${t}/schedule`),getGoals:t=>G("GET",`/goals${t?`?pillar=${encodeURIComponent(t)}`:""}`),createGoal:t=>G("POST","/goals",t),updateGoal:(t,e)=>G("PUT",`/goals/${t}`,e),deleteGoal:t=>G("DELETE",`/goals/${t}`),restoreGoal:t=>G("POST",`/goals/${t}/restore`),getHabits:()=>G("GET","/habits"),createHabit:t=>G("POST","/habits",t),updateHabit:(t,e)=>G("PUT",`/habits/${t}`,e),deleteHabit:t=>G("DELETE",`/habits/${t}`),restoreHabit:t=>G("POST",`/habits/${t}/restore`),toggleHabitLog:(t,e)=>G("POST",`/habits/${t}/log/${e}`),setHabitLogNote:(t,e,r)=>G("PUT",`/habits/${t}/log/${e}/note`,{note:r}),setHabitLogCount:(t,e,r,o)=>G("PUT",`/habits/${t}/log/${e}/count`,{count:r,note:o}),clearHabitLog:(t,e)=>G("DELETE",`/habits/${t}/log/${e}`),getHabitsYearly:t=>G("GET",`/habits/yearly/${t}`),getJournalEntry:t=>G("GET",`/journal/${t}`),getJournalHistory:(t,e)=>G("GET",`/journal/history/${t}/${e}`),updateJournalMood:(t,e)=>G("PUT",`/journal/${t}`,{mood:e}),addJournalBullet:(t,e,r)=>G("POST",`/journal/${t}/bullets`,{section:e,text:r}),deleteJournalBullet:t=>G("DELETE",`/journal/bullets/${t}`),getSkills:()=>G("GET","/skills"),createSkill:t=>G("POST","/skills",t),updateSkill:(t,e)=>G("PUT",`/skills/${t}`,e),deleteSkill:t=>G("DELETE",`/skills/${t}`),restoreSkill:t=>G("POST",`/skills/${t}/restore`),addSkillNote:(t,e,r)=>G("POST",`/skills/${t}/notes`,{stage:e,text:r}),deleteSkillNote:t=>G("DELETE",`/skill-notes/${t}`),updateSkillNote:(t,e)=>G("PUT",`/skill-notes/${t}`,{text:e}),toggleSkillNote:t=>G("PUT",`/skill-notes/${t}/toggle`),completeSkillStage:(t,e)=>G("POST",`/skills/${t}/complete-stage`,{stage:e}),getScriptures:()=>G("GET","/scriptures"),createScripture:t=>G("POST","/scriptures",t),deleteScripture:t=>G("DELETE",`/scriptures/${t}`),restoreScripture:t=>G("POST",`/scriptures/${t}/restore`),addChapter:(t,e)=>G("POST",`/scriptures/${t}/chapters`,e),updateChapter:(t,e)=>G("PUT",`/chapters/${t}`,e),deleteChapter:t=>G("DELETE",`/chapters/${t}`),restoreChapter:t=>G("POST",`/chapters/${t}/restore`),addInsight:(t,e)=>G("POST",`/chapters/${t}/insights`,{text:e}),deleteInsight:t=>G("DELETE",`/insights/${t}`),getTopics:()=>G("GET","/revision/topics"),createTopic:t=>G("POST","/revision/topics",t),updateTopic:(t,e)=>G("PUT",`/revision/topics/${t}`,e),deleteTopic:t=>G("DELETE",`/revision/topics/${t}`),restoreTopic:t=>G("POST",`/revision/topics/${t}/restore`),getDueToday:()=>G("GET","/revision/due-today"),getCalendar:(t,e)=>G("GET",`/revision/calendar/${t}/${e}`),toggleReviewDone:t=>G("PUT",`/revision/reviews/${t}/done`),getAffirmations:()=>G("GET","/affirmations"),createAffirmation:t=>G("POST","/affirmations",t),updateAffirmation:(t,e)=>G("PUT",`/affirmations/${t}`,e),deleteAffirmation:t=>G("DELETE",`/affirmations/${t}`),restoreAffirmation:t=>G("POST",`/affirmations/${t}/restore`)},cf=7e3;function fn(t,e,r){const[o,s]=y.useState([]),i=y.useRef({}),l=y.useCallback(async(g,p="Item")=>{await t(g),r();const v=`${g}-${Date.now()}`;s(m=>[...m,{id:v,itemId:g,label:p}]),i.current[v]=setTimeout(()=>{s(m=>m.filter(k=>k.id!==v)),delete i.current[v]},cf)},[t,r]),a=y.useCallback(async g=>{const p=o.find(v=>v.id===g);p&&(clearTimeout(i.current[g]),delete i.current[g],s(v=>v.filter(m=>m.id!==g)),await e(p.itemId),r())},[o,e,r]),d=y.useCallback(g=>{clearTimeout(i.current[g]),delete i.current[g],s(p=>p.filter(v=>v.id!==g))},[]);return{deleteItem:l,toasts:o,handleUndo:a,handleDismiss:d}}function vn({toasts:t,onUndo:e,onDismiss:r}){return n.jsx("div",{style:Nr.container,children:t.map(o=>n.jsx(uf,{toast:o,onUndo:e,onDismiss:r},o.id))})}function uf({toast:t,onUndo:e,onDismiss:r}){const[o,s]=y.useState(100);return y.useEffect(()=>{const i=Date.now(),l=7e3,a=setInterval(()=>{const d=Date.now()-i,g=Math.max(0,100-d/l*100);s(g),g===0&&clearInterval(a)},50);return()=>clearInterval(a)},[]),n.jsxs("div",{style:Nr.toast,children:[n.jsx("div",{style:{...Nr.bar,width:`${o}%`}}),n.jsxs("span",{style:Nr.msg,children:[t.label," deleted"]}),n.jsx("button",{style:Nr.undoBtn,onClick:()=>e(t.id),children:"Undo"}),n.jsx("button",{style:Nr.closeBtn,onClick:()=>r(t.id),children:"×"})]})}const Nr={container:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",gap:8,zIndex:999,pointerEvents:"none"},toast:{position:"relative",display:"flex",alignItems:"center",gap:12,background:"var(--accent-strong)",color:"#fff",borderRadius:10,padding:"12px 16px",fontSize:13.5,fontFamily:"'Inter', system-ui, sans-serif",boxShadow:"0 4px 20px rgba(0,0,0,0.25)",minWidth:260,overflow:"hidden",pointerEvents:"all"},bar:{position:"absolute",bottom:0,left:0,height:3,background:"#4C9A6B",transition:"width 0.05s linear",borderRadius:"0 0 0 10px"},msg:{flex:1,fontWeight:500},undoBtn:{border:"1px solid rgba(255,255,255,0.3)",background:"none",color:"#4C9A6B",fontWeight:700,fontSize:13,padding:"4px 10px",borderRadius:6,cursor:"pointer",fontFamily:"inherit"},closeBtn:{border:"none",background:"none",color:"rgba(255,255,255,0.5)",cursor:"pointer",fontSize:18,lineHeight:1,padding:"0 2px"}},Lo={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},qd=[{id:"Q1",symbol:"™",title:"Do Now",sub:"Important · Urgent",accent:"#C2536B"},{id:"Q2",symbol:"©",title:"Schedule",sub:"Important · Not Urgent",accent:"#3A7CA5"},{id:"Q3",symbol:"®",title:"Delegate",sub:"Not Important · Urgent",accent:"#C9A227"},{id:"Q4",symbol:"•",title:"Drop",sub:"Not Important · Not Urgent",accent:"#8A8780"}];function bf(){return new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Kolkata"})}function pf(){const t=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"})),r=t.getMinutes()<30?30:0,o=r===0?t.getHours()+1:t.getHours();return`${String(o%24).padStart(2,"0")}:${String(r).padStart(2,"0")}`}function mf(t,e){const[r,o]=t.split(":").map(Number),s=r*60+o+e;return`${String(Math.floor(s/60)%24).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`}function ff(t){return t?new Date(t).toLocaleString("en-IN",{timeZone:"Asia/Kolkata",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0}):""}const ki=()=>({title:"",pillar:"Financial",est:30,date:bf(),startTime:pf()});function vf(){const[t,e]=y.useState([]),[r,o]=y.useState(null),[s,i]=y.useState(ki()),[l,a]=y.useState({connected:!1,configured:!1}),d=y.useCallback(()=>Y.getTasks().then(e).catch(console.error),[]);y.useEffect(()=>{d(),Y.getGcalStatus().then(a).catch(()=>{})},[d]);const{deleteItem:g,toasts:p,handleUndo:v,handleDismiss:m}=fn(Y.deleteTask,Y.restoreTask,d),k=c=>t.filter(h=>h.quadrant===c),x=c=>k(c).reduce((h,w)=>h+w.time_estimate_min,0),S=c=>c>=60?`${Math.floor(c/60)}h${c%60?` ${c%60}m`:""}`:`${c}m`,z=c=>{var w;return`${((w=qd.find(D=>D.id===c.quadrant))==null?void 0:w.symbol)??""} ${c.title}`},b=async c=>{if(!s.title.trim())return;const h=s.date&&s.startTime?`${s.date}T${s.startTime}:00`:null;await Y.createTask({pillar:s.pillar,title:s.title,quadrant:c,time_estimate_min:Number(s.est)||30,start_datetime:h}),i(ki()),o(null),d()},u=(c,h)=>g(c,h);return n.jsxs("div",{style:ot.page,children:[n.jsxs("div",{style:ot.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:ot.eyebrow,children:"Anvil · Weekly Routing"}),n.jsx("h1",{style:ot.h1,children:"Weekly Routing"})]}),n.jsxs("div",{style:ot.headRight,children:[n.jsx("div",{style:ot.legend,children:Object.entries(Lo).map(([c,h])=>n.jsxs("span",{style:ot.legendItem,children:[n.jsx("span",{style:{...ot.dot,background:h.dot}}),c]},c))}),l.configured&&(l.connected?n.jsxs("button",{style:ot.gcalBadgeOn,title:"Disconnect Google Calendar",onClick:()=>Y.disconnectGoogle().then(()=>a({...l,connected:!1})),children:[n.jsx(_o,{size:13})," Google Calendar connected"]}):n.jsxs("button",{style:ot.gcalBadgeOff,onClick:()=>Y.connectGoogle(),children:[n.jsx(_o,{size:13})," Connect Google Calendar"]}))]})]}),n.jsx("div",{style:ot.grid,children:qd.map(c=>n.jsxs("section",{style:{...ot.quad,borderTop:`3px solid ${c.accent}`},children:[n.jsxs("header",{style:ot.quadHead,children:[n.jsxs("div",{style:ot.quadTitleRow,children:[n.jsx("span",{style:{...ot.symbol,color:c.accent},children:c.symbol}),n.jsxs("div",{children:[n.jsx("div",{style:ot.quadTitle,children:c.title}),n.jsx("div",{style:ot.quadSub,children:c.sub})]})]}),n.jsx("span",{style:ot.quadTotal,children:S(x(c.id))})]}),n.jsxs("div",{style:ot.list,children:[k(c.id).map(h=>{const w=Lo[h.pillar]||Lo.Financial,D=!!h.gcal_event_id;return n.jsxs("div",{style:{...ot.card,background:w.soft},children:[n.jsx("span",{style:{...ot.cardBar,background:w.dot}}),n.jsxs("div",{style:ot.cardBody,children:[n.jsx("div",{style:ot.cardTitle,children:h.title}),h.start_datetime&&n.jsxs("div",{style:ot.eventTime,children:[n.jsx(_o,{size:10}),ff(h.start_datetime),D&&n.jsx("span",{style:ot.syncedDot,title:"Synced to Google Calendar"})]}),n.jsxs("div",{style:ot.cardMeta,children:[n.jsxs("span",{style:ot.metaPill,children:[n.jsx("span",{style:{...ot.dot,background:w.dot,width:7,height:7}}),h.pillar]}),n.jsxs("span",{style:ot.metaPill,children:[n.jsx(Pm,{size:11})," ",S(h.time_estimate_min)]})]})]}),n.jsxs("div",{style:ot.cardActions,children:[D&&n.jsx("span",{title:`On calendar as "${z(h)}"`,style:ot.calDoneIcon,children:n.jsx(wt,{size:14})}),n.jsx("button",{onClick:()=>u(h.id,h.title),style:ot.delBtn,children:n.jsx(ft,{size:13})})]})]},h.id)}),r===c.id?n.jsxs("div",{style:ot.addBox,children:[n.jsx("input",{autoFocus:!0,placeholder:"Task title",value:s.title,onChange:h=>i({...s,title:h.target.value}),onKeyDown:h=>h.key==="Enter"&&b(c.id),style:ot.input}),n.jsxs("div",{style:ot.dateTimeRow,children:[n.jsxs("div",{style:ot.dateTimeGroup,children:[n.jsx("label",{style:ot.dtLabel,children:"Date"}),n.jsx("input",{type:"date",value:s.date,onChange:h=>i({...s,date:h.target.value}),style:ot.dtInput})]}),n.jsxs("div",{style:ot.dateTimeGroup,children:[n.jsx("label",{style:ot.dtLabel,children:"Start"}),n.jsx("input",{type:"time",value:s.startTime,onChange:h=>i({...s,startTime:h.target.value}),style:ot.dtInput})]}),n.jsxs("div",{style:ot.dateTimeGroup,children:[n.jsx("label",{style:ot.dtLabel,children:"End"}),n.jsx("div",{style:ot.dtEndValue,children:mf(s.startTime,Number(s.est)||30)})]})]}),n.jsxs("div",{style:ot.addRow,children:[n.jsx("select",{value:s.pillar,onChange:h=>i({...s,pillar:h.target.value}),style:ot.select,children:Object.keys(Lo).map(h=>n.jsx("option",{children:h},h))}),n.jsx("input",{type:"number",value:s.est,onChange:h=>i({...s,est:h.target.value}),style:{...ot.input,width:60}}),n.jsx("span",{style:ot.minLabel,children:"min"}),l.connected&&n.jsx("span",{style:ot.gcalHint,title:"Will sync to Google Calendar",children:n.jsx(_o,{size:12})}),n.jsx("button",{onClick:()=>b(c.id),style:ot.saveBtn,children:n.jsx(wt,{size:14})}),n.jsx("button",{onClick:()=>{o(null),i(ki())},style:ot.cancelBtn,children:n.jsx(ft,{size:14})})]})]}):n.jsxs("button",{onClick:()=>o(c.id),style:ot.addTrigger,children:[n.jsx(Ie,{size:13})," Add task"]})]})]},c.id))}),n.jsx(vn,{toasts:p,onUndo:v,onDismiss:m})]})}const ot={page:{fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:16,marginBottom:22},headRight:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:10},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces', Georgia, serif"},legend:{display:"flex",gap:14,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--text-2)",fontWeight:500},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},gcalBadgeOn:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"#4C9A6B",background:"rgba(76,154,107,0.10)",border:"1px solid rgba(76,154,107,0.3)",borderRadius:20,padding:"5px 12px",cursor:"pointer"},gcalBadgeOff:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"var(--text-2)",background:"var(--surface)",border:"1px solid #DCDAD3",borderRadius:20,padding:"5px 12px",cursor:"pointer"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16},quad:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.06)"},quadHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14},quadTitleRow:{display:"flex",gap:10,alignItems:"center"},symbol:{fontSize:20,lineHeight:1},quadTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em"},quadSub:{fontSize:11,color:"var(--text-3)",marginTop:1,letterSpacing:"0.02em"},quadTotal:{fontSize:12,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"3px 9px",borderRadius:20},list:{display:"flex",flexDirection:"column",gap:8},card:{display:"flex",alignItems:"stretch",gap:10,borderRadius:9,padding:"10px 10px 10px 0",overflow:"hidden"},cardBar:{width:3,borderRadius:3,flexShrink:0},cardBody:{flex:1,minWidth:0},cardTitle:{fontSize:13.5,fontWeight:500,lineHeight:1.35,marginBottom:4},eventTime:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#3A7CA5",fontWeight:500,marginBottom:5},syncedDot:{width:6,height:6,borderRadius:"50%",background:"#4C9A6B",display:"inline-block",marginLeft:2},cardMeta:{display:"flex",gap:8,flexWrap:"wrap"},metaPill:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"var(--text-2)",fontWeight:500},cardActions:{display:"flex",flexDirection:"column",gap:4,alignSelf:"center",flexShrink:0},calDoneIcon:{width:30,height:30,borderRadius:8,background:"#4C9A6B",color:"#fff",display:"grid",placeItems:"center"},delBtn:{width:30,height:30,borderRadius:8,border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center"},addTrigger:{display:"flex",alignItems:"center",gap:5,fontSize:12.5,color:"var(--text-3)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"8px 10px",cursor:"pointer",fontWeight:500,marginTop:2},addBox:{border:"1px solid var(--border)",borderRadius:9,padding:10,display:"flex",flexDirection:"column",gap:8},dateTimeRow:{display:"flex",gap:8,alignItems:"flex-end"},dateTimeGroup:{display:"flex",flexDirection:"column",gap:3,flex:1},dtLabel:{fontSize:10,fontWeight:600,color:"var(--text-3)",letterSpacing:"0.08em",textTransform:"uppercase"},dtInput:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},dtEndValue:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,color:"var(--text-2)",background:"var(--bg)"},addRow:{display:"flex",alignItems:"center",gap:6},input:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",flex:1,minWidth:0},select:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 8px",fontSize:12.5,fontFamily:"inherit",flex:1},minLabel:{fontSize:11,color:"var(--text-3)"},gcalHint:{color:"#3A7CA5",display:"grid",placeItems:"center"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"}},Ee={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},tg=Object.keys(Ee),wi=["Yearly","Quarterly","Monthly","Weekly"],wr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],eg=[{label:"Q1 · Jan–Mar",startMonth:0},{label:"Q2 · Apr–Jun",startMonth:3},{label:"Q3 · Jul–Sep",startMonth:6},{label:"Q4 · Oct–Dec",startMonth:9}],Dl=new Date().getFullYear(),No=864e5,Fe=30,ss=190,zn=t=>new Date(t+"T00:00:00"),rg=t=>t.toLocaleDateString("en-US",{month:"short",day:"numeric"}),hf=[{key:"yearly",label:"Yearly",horizons:["Yearly"]},{key:"quarterly",label:"Quarterly",horizons:["Quarterly"]},{key:"mw",label:"Monthly & Weekly",horizons:["Monthly","Weekly"]}],yf={Yearly:"Yr",Quarterly:"Q",Monthly:"Mo",Weekly:"Wk"},ng={Yearly:0,Quarterly:1,Monthly:2,Weekly:3},Si=t=>wi[Math.min(wi.indexOf(t)+1,wi.length-1)],Po=t=>{if(!t||!t.start_date)return Array.from({length:12},(i,l)=>l);const e=new Date(t.start_date+"T00:00:00"),r=new Date(t.end_date+"T00:00:00"),o=e.getFullYear()<Dl?0:e.getMonth(),s=r.getFullYear()>Dl?11:r.getMonth();return Array.from({length:s-o+1},(i,l)=>o+l)},xf=(t,e,r)=>{const o=(r-1)*7+1,s=Math.min(o+6,new Date(t,e+1,0).getDate()),i=String(e+1).padStart(2,"0");return{start_date:`${t}-${i}-${String(o).padStart(2,"0")}`,end_date:`${t}-${i}-${String(s).padStart(2,"0")}`}},og=(t,e,r=1)=>{const o=Dl;switch(t){case"Yearly":return{start_date:`${o}-01-01`,end_date:`${o}-12-31`};case"Quarterly":{const s=Math.floor(e/3)*3,i=s+1,l=s+3,a=new Date(o,l,0).getDate();return{start_date:`${o}-${String(i).padStart(2,"0")}-01`,end_date:`${o}-${String(l).padStart(2,"0")}-${a}`}}case"Monthly":{const s=new Date(o,e+1,0).getDate();return{start_date:`${o}-${String(e+1).padStart(2,"0")}-01`,end_date:`${o}-${String(e+1).padStart(2,"0")}-${s}`}}case"Weekly":return xf(o,e,r);default:return{start_date:`${o}-01-01`,end_date:`${o}-12-31`}}},kf=t=>{if(!t.start_date)return"";const e=new Date(t.start_date+"T00:00:00"),r=e.getMonth();switch(t.horizon){case"Yearly":return`${e.getFullYear()}`;case"Quarterly":return`Q${Math.floor(r/3)+1} ${e.getFullYear()}`;case"Monthly":return`${wr[r]} ${e.getFullYear()}`;case"Weekly":return`${wr[r]} W${Math.ceil(e.getDate()/7)}`;default:return""}};function wf(){const[t,e]=y.useState([]),[r,o]=y.useState("Financial"),[s,i]=y.useState({}),[l,a]=y.useState({}),[d,g]=y.useState(null),[p,v]=y.useState(""),[m,k]=y.useState(0),[x,S]=y.useState(1),[z,b]=y.useState(null),u=y.useCallback(()=>{Y.getGoals().then(e).catch(console.error)},[]);y.useEffect(()=>{u()},[u]);const{deleteItem:c,toasts:h,handleUndo:w,handleDismiss:D}=fn(Y.deleteGoal,Y.restoreGoal,u),W=r==="All",C=Ee[r]||{dot:"var(--text-3)"},T=W?t:t.filter(F=>F.pillar===r),R=T.filter(F=>!F.parent_goal_id),Z=F=>T.filter(_=>_.parent_goal_id===F),L=F=>a(_=>({..._,[F]:!_[F]})),j=F=>F.horizon==="Monthly"||F.horizon==="Weekly",O=F=>s[F.id]!==void 0?s[F.id]:j(F),H=F=>i(_=>({..._,[F.id]:!O(F)})),V=(F,_=null)=>{g(F),v(""),S(1);const at=F==="ROOT"?"Yearly":Si(_==null?void 0:_.horizon),vt=F==="ROOT"?[0]:Po(_);k(at==="Quarterly"?Math.floor(vt[0]/3)*3:vt[0]??0)},E=async(F,_)=>{if(!p.trim())return;const at=(_==null?void 0:_.horizon)??null,vt=F==="ROOT"?"Yearly":Si(at),Ot=F==="ROOT"?r:(_==null?void 0:_.pillar)||r,{start_date:he,end_date:pt}=og(vt,m,x);await Y.createGoal({pillar:Ot,title:p.trim(),horizon:vt,parent_goal_id:F==="ROOT"?null:F,start_date:he,end_date:pt}),F!=="ROOT"&&a(Le=>({...Le,[F]:!0})),g(null),v(""),u()},B=F=>{const _=F.start_date?new Date(F.start_date+"T00:00:00"):new Date,at=_.getMonth(),vt=Math.min(Math.max(Math.ceil(_.getDate()/7),1),4);b({id:F.id,title:F.title,pillar:F.pillar,horizon:F.horizon,parentGoal:t.find(Ot=>Ot.id===F.parent_goal_id)||null,month:F.horizon==="Quarterly"?Math.floor(at/3)*3:at,week:vt})},$=async()=>{if(!z||!z.title.trim())return;let F=z.month;z.horizon==="Weekly"&&(F=Po(z.parentGoal)[0]);const{start_date:_,end_date:at}=og(z.horizon,F,z.week);await Y.updateGoal(z.id,{title:z.title.trim(),pillar:z.pillar,start_date:_,end_date:at}),b(null),u()},Q=({parentId:F,parentGoal:_,depth:at})=>{const vt=F==="ROOT"?"Yearly":Si((_==null?void 0:_.horizon)??null),Ot=F==="ROOT"?Array.from({length:12},(pt,Le)=>Le):Po(_),he=eg.filter(pt=>Ot.includes(pt.startMonth));return n.jsxs("div",{style:{...J.addBox,marginLeft:at*24},children:[n.jsx("input",{autoFocus:!0,placeholder:`New ${vt.toLowerCase()} goal…`,value:p,onChange:pt=>v(pt.target.value),onKeyDown:pt=>{pt.key==="Enter"&&E(F,_),pt.key==="Escape"&&g(null)},style:J.input}),vt==="Quarterly"&&n.jsx("select",{value:m,onChange:pt=>k(Number(pt.target.value)),style:J.monthSelect,children:he.map(pt=>n.jsx("option",{value:pt.startMonth,children:pt.label},pt.startMonth))}),vt==="Monthly"&&n.jsx("select",{value:m,onChange:pt=>k(Number(pt.target.value)),style:J.monthSelect,children:Ot.map(pt=>n.jsx("option",{value:pt,children:wr[pt]},pt))}),vt==="Weekly"&&n.jsxs(n.Fragment,{children:[n.jsx("span",{style:J.inheritTag,children:wr[Ot[0]]}),n.jsx("select",{value:x,onChange:pt=>S(Number(pt.target.value)),style:J.monthSelect,children:[1,2,3,4].map(pt=>n.jsxs("option",{value:pt,children:["Week ",pt]},pt))})]}),n.jsx("button",{onClick:()=>E(F,_),style:J.saveBtn,children:n.jsx(wt,{size:14})}),n.jsx("button",{onClick:()=>g(null),style:J.cancelBtn,children:n.jsx(ft,{size:14})})]})},P=({goal:F,depth:_})=>{var pt,Le,hn,$a;const at=Z(F.id),vt=l[F.id],Ot=F.horizon!=="Weekly";if((z==null?void 0:z.id)===F.id){const qe=Po(z.parentGoal),sb=eg.filter(xt=>qe.includes(xt.startMonth));return n.jsxs("div",{style:{...J.editBox,marginLeft:_*24},children:[n.jsx("input",{autoFocus:!0,value:z.title,onChange:xt=>b({...z,title:xt.target.value}),onKeyDown:xt=>xt.key==="Enter"&&$(),style:{...J.input,flex:1}}),n.jsx("select",{value:z.pillar,onChange:xt=>b({...z,pillar:xt.target.value}),style:J.monthSelect,children:tg.map(xt=>n.jsx("option",{children:xt},xt))}),z.horizon==="Quarterly"&&n.jsx("select",{value:z.month,onChange:xt=>b({...z,month:Number(xt.target.value)}),style:J.monthSelect,children:sb.map(xt=>n.jsx("option",{value:xt.startMonth,children:xt.label},xt.startMonth))}),z.horizon==="Monthly"&&n.jsx("select",{value:z.month,onChange:xt=>b({...z,month:Number(xt.target.value)}),style:J.monthSelect,children:qe.map(xt=>n.jsx("option",{value:xt,children:wr[xt]},xt))}),z.horizon==="Weekly"&&n.jsxs(n.Fragment,{children:[n.jsx("span",{style:J.inheritTag,children:wr[qe[0]]}),n.jsx("select",{value:z.week,onChange:xt=>b({...z,week:Number(xt.target.value)}),style:J.monthSelect,children:[1,2,3,4].map(xt=>n.jsxs("option",{value:xt,children:["Week ",xt]},xt))})]}),n.jsx("button",{onClick:$,style:J.saveBtn,children:n.jsx(wt,{size:14})}),n.jsx("button",{onClick:()=>b(null),style:J.cancelBtn,children:n.jsx(ft,{size:14})})]})}return n.jsxs("div",{children:[n.jsxs("div",{style:{...J.row,marginLeft:_*24,background:_===0&&((pt=Ee[F.pillar])==null?void 0:pt.soft)||"transparent"},children:[at.length>0?n.jsx("button",{onClick:()=>L(F.id),style:J.caret,children:vt?n.jsx(Da,{size:15}):n.jsx(mn,{size:15})}):n.jsx("span",{style:{...J.caret,opacity:.25},children:n.jsx(Ma,{size:12})}),n.jsx("span",{style:{...J.horizonTag,color:((Le=Ee[F.pillar])==null?void 0:Le.dot)||C.dot,borderColor:((hn=Ee[F.pillar])==null?void 0:hn.dot)||C.dot},children:F.horizon}),n.jsx("span",{style:J.title,children:F.title}),n.jsx("span",{style:J.periodTag,children:kf(F)}),n.jsx("button",{onClick:()=>H(F),style:{...J.rowAdd,color:O(F)?(($a=Ee[F.pillar])==null?void 0:$a.dot)||C.dot:"var(--text-3)"},title:O(F)?"Showing on timeline — click to hide":"Hidden from timeline — click to show",children:O(F)?n.jsx(Al,{size:13}):n.jsx($u,{size:13})}),n.jsx("button",{onClick:()=>B(F),style:J.rowAdd,title:"Edit",children:n.jsx(Je,{size:12})}),Ot&&n.jsx("button",{onClick:()=>{a(qe=>({...qe,[F.id]:!0})),V(F.id,F)},style:J.rowAdd,title:"Add sub-goal",children:n.jsx(Ie,{size:13})}),n.jsx("button",{onClick:()=>c(F.id,F.title),style:{...J.rowAdd,color:"var(--text-3)"},title:"Delete",children:n.jsx(ft,{size:13})})]}),vt&&at.map(qe=>n.jsx(P,{goal:qe,depth:_+1},qe.id)),vt&&d===F.id&&n.jsx(Q,{parentId:F.id,parentGoal:F,depth:_+1})]})},et=t.filter(F=>O(F)&&F.start_date&&F.end_date),f=hf.map(F=>({...F,items:et.filter(_=>F.horizons.includes(_.horizon)).sort((_,at)=>_.pillar.localeCompare(at.pillar)||_.start_date.localeCompare(at.start_date)||ng[_.horizon]-ng[at.horizon]||_.end_date.localeCompare(at.end_date))})).filter(F=>F.items.length>0),M=(()=>{if(!et.length)return null;let F=et[0].start_date,_=et[0].end_date;return et.forEach(at=>{at.start_date<F&&(F=at.start_date),at.end_date>_&&(_=at.end_date)}),{start:zn(F),end:zn(_)}})(),it=(()=>{if(!M)return[];const F=[];for(let _=M.start.getTime();_<=M.end.getTime();_+=No)F.push(new Date(_));return F})(),st=it.length,bt=(()=>{const F=[];return it.forEach(_=>{const at=`${_.getFullYear()}-${_.getMonth()}`,vt=F[F.length-1];vt&&vt.key===at?vt.days++:F.push({key:at,label:`${wr[_.getMonth()]} '${String(_.getFullYear()).slice(2)}`,days:1})}),F})(),zt=new Date;zt.setHours(0,0,0,0);const gt=M?Math.round((zt-M.start)/No):-1,jt=gt>=0&&gt<st,ve=F=>Math.round((zn(F.end_date)-zn(F.start_date))/No)+1;return n.jsxs("div",{style:J.page,children:[n.jsxs("div",{style:J.head,children:[n.jsx("div",{style:J.eyebrow,children:"Anvil · Goals"}),n.jsx("h1",{style:J.h1,children:W?"All Goals":`${r} Goals`})]}),n.jsxs("div",{style:J.pillarPicker,children:[n.jsx("button",{onClick:()=>{o("All"),g(null),b(null)},style:{...J.pillarChip,...W?{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:"All Goals"}),tg.map(F=>{const _=F===r;return n.jsxs("button",{onClick:()=>{o(F),g(null),b(null)},style:{...J.pillarChip,..._?{background:Ee[F].dot,color:"#fff",borderColor:Ee[F].dot}:{}},children:[n.jsx("span",{style:{...J.dot,background:_?"#fff":Ee[F].dot}}),F]},F)})]}),n.jsxs("div",{style:J.list,children:[R.map(F=>n.jsx(P,{goal:F,depth:0},F.id)),R.length===0&&n.jsxs("div",{style:J.ganttEmpty,children:["No goals yet",W?"":` for ${r}`,"."]}),!W&&d==="ROOT"&&n.jsx(Q,{parentId:"ROOT",parentGoal:null,depth:0}),!W&&d!=="ROOT"&&n.jsxs("button",{onClick:()=>V("ROOT",null),style:J.rootAdd,children:[n.jsx(Ie,{size:14})," Add top-level goal"]}),W&&n.jsx("div",{style:J.allHint,children:"Pick a pillar above to add new goals."})]}),n.jsxs("div",{style:J.ganttWrap,children:[n.jsxs("div",{style:J.ganttTop,children:[n.jsxs("div",{style:J.ganttTitle,children:["Daily Timeline",M?` · ${rg(M.start)} – ${rg(M.end)}`:""]}),n.jsxs("div",{style:J.ganttHint,children:["Toggle the ",n.jsx(Al,{size:12,style:{verticalAlign:"-2px"}})," on any goal to show or hide it here."]})]}),M?n.jsx("div",{style:J.ganttScroll,children:n.jsxs("div",{style:{minWidth:ss+st*Fe},children:[n.jsxs("div",{style:J.gBandRow,children:[n.jsx("div",{style:{...J.gLabelHead,zIndex:4},children:"Goal"}),n.jsx("div",{style:{display:"flex"},children:bt.map((F,_)=>n.jsx("div",{style:{...J.gMonthCell,width:F.days*Fe},children:F.label},_))})]}),n.jsxs("div",{style:J.gBandRow,children:[n.jsx("div",{style:{...J.gLabelHead,zIndex:4,fontSize:10,color:"var(--text-3)",fontWeight:600},children:"days →"}),n.jsx("div",{style:{display:"flex"},children:it.map((F,_)=>{const at=F.getDay()===0||F.getDay()===6,vt=_===gt;return n.jsx("div",{style:{...J.gDayCell,...at?J.gWeekend:{},...vt?J.gTodayCell:{}},children:F.getDate()},_)})})]}),f.map(F=>n.jsxs("div",{children:[n.jsxs("div",{style:J.gGroupRow,children:[n.jsxs("div",{style:J.gGroupLabel,children:[F.label,n.jsx("span",{style:J.gGroupCount,children:F.items.length})]}),n.jsx("div",{style:{width:st*Fe,flexShrink:0}})]}),F.items.map(_=>{var hn;const at=((hn=Ee[_.pillar])==null?void 0:hn.dot)||"#9A968C",vt=Math.round((zn(_.start_date)-M.start)/No),Ot=ve(_),he=Ot*Fe-4,pt=he>=54,Le=`${_.title} · ${_.start_date} → ${_.end_date} · ${Ot} day${Ot>1?"s":""}`;return n.jsxs("div",{style:J.gRow,children:[n.jsxs("div",{style:{...J.gLabel,paddingLeft:12},children:[n.jsx("span",{style:{...J.ganttRowDot,background:at}}),n.jsx("span",{style:{...J.gHzTag,color:at,borderColor:at},children:yf[_.horizon]}),n.jsx("span",{style:J.gLabelText,title:_.title,children:_.title}),n.jsxs("span",{style:J.gDurChip,children:[Ot,"d"]})]}),n.jsxs("div",{style:{...J.gTrack,width:st*Fe},children:[jt&&n.jsx("div",{style:{...J.gTodayLine,left:gt*Fe}}),n.jsx("div",{style:{...J.gBar,left:vt*Fe+2,width:he,background:at},title:Le,children:pt&&n.jsx("span",{style:J.gBarLabel,children:_.title})}),!pt&&n.jsx("span",{style:{...J.gBarOutside,left:vt*Fe+he+8},title:Le,children:_.title})]})]},_.id)})]},F.key))]})}):n.jsx("div",{style:J.ganttEmpty,children:"No goals on the timeline. Click the eye icon on a goal to show it here."}),M&&n.jsxs("div",{style:J.gLegend,children:[n.jsxs("span",{style:J.gLegendItem,children:[n.jsx("span",{style:{...J.gLegendBar}})," bar length = number of days"]}),n.jsxs("span",{style:J.gLegendItem,children:[n.jsx("span",{style:J.gLegendToday})," today"]})]})]}),n.jsx(vn,{toasts:h,onUndo:w,onDismiss:D})]})}const J={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},pillarPicker:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},pillarChip:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},list:{background:"var(--surface)",borderRadius:12,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"hidden"},row:{display:"flex",alignItems:"center",gap:9,padding:"9px 10px",borderRadius:8,flexWrap:"nowrap"},caret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},horizonTag:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",border:"1px solid",borderRadius:5,padding:"2px 6px",flexShrink:0},title:{fontSize:14,fontWeight:500,lineHeight:1.3,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},periodTag:{fontSize:11,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"3px 8px",borderRadius:12,flexShrink:0},rowAdd:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,flexShrink:0},rootAdd:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"var(--text-2)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"9px 12px",cursor:"pointer",fontWeight:600,fontFamily:"inherit",marginTop:6,width:"100%",justifyContent:"center"},addBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 0 6px 28px",flexWrap:"wrap"},editBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 10px",flexWrap:"wrap",background:"var(--bg)",borderRadius:8,margin:"4px 0"},input:{border:"1px solid var(--border)",borderRadius:7,padding:"8px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",flex:1,minWidth:120},monthSelect:{border:"1px solid var(--border)",borderRadius:7,padding:"8px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},inheritTag:{fontSize:11.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"6px 9px",borderRadius:7,flexShrink:0},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},ganttWrap:{background:"var(--surface)",borderRadius:12,padding:"16px 14px",marginTop:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},ganttTop:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10,marginBottom:14},ganttTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",fontFamily:"'Fraunces',Georgia,serif"},ganttHint:{fontSize:11.5,color:"var(--text-3)",fontWeight:500},allHint:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",padding:"10px 12px"},ganttEmpty:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},ganttScroll:{overflowX:"auto"},ganttRowDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},gBandRow:{display:"flex",alignItems:"stretch",borderBottom:"1px solid var(--border)"},gLabelHead:{width:ss,flexShrink:0,position:"sticky",left:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",padding:"6px 10px",fontSize:12,fontWeight:700,color:"var(--text-2)"},gMonthCell:{flexShrink:0,borderLeft:"1px solid var(--border)",fontSize:10.5,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gDayCell:{width:Fe,flexShrink:0,textAlign:"center",fontSize:10,color:"var(--text-3)",padding:"4px 0",borderLeft:"1px solid var(--border)",fontWeight:600},gWeekend:{background:"var(--surface-2)"},gTodayCell:{background:"var(--hover)",color:"var(--accent)",fontWeight:800},gGroupRow:{display:"flex",alignItems:"stretch",background:"var(--surface-2)",borderBottom:"1px solid var(--border)",borderTop:"1px solid var(--border)"},gGroupLabel:{width:ss,flexShrink:0,position:"sticky",left:0,background:"var(--surface-2)",zIndex:3,padding:"6px 12px",fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",gap:7},gGroupCount:{fontSize:10,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},gHzTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.04em",border:"1px solid",borderRadius:4,padding:"1px 4px",flexShrink:0},gRow:{display:"flex",alignItems:"stretch",minHeight:36,borderBottom:"1px solid var(--border)"},gLabel:{width:ss,flexShrink:0,display:"flex",alignItems:"center",gap:7,position:"sticky",left:0,background:"var(--surface)",zIndex:2,borderRight:"1px solid var(--border)",paddingRight:8,overflow:"hidden"},gLabelText:{flex:1,minWidth:0,fontSize:12,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},gDurChip:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",borderRadius:10,padding:"1px 6px",flexShrink:0,marginRight:6},gTrack:{position:"relative",flexShrink:0,minHeight:36,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent ${Fe}px)`},gBar:{position:"absolute",top:9,height:18,borderRadius:5,display:"flex",alignItems:"center",padding:"0 7px",boxShadow:"0 1px 2px rgba(0,0,0,0.15)",overflow:"hidden",zIndex:1},gBarLabel:{fontSize:11,fontWeight:600,color:"#fff",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},gBarOutside:{position:"absolute",top:9,height:18,display:"flex",alignItems:"center",fontSize:11,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",pointerEvents:"none",zIndex:1},gTodayLine:{position:"absolute",top:0,bottom:0,width:2,background:"#C2536B",zIndex:0,opacity:.6},gLegend:{display:"flex",gap:16,marginTop:12,fontSize:11,color:"var(--text-3)",flexWrap:"wrap"},gLegendItem:{display:"flex",alignItems:"center",gap:6,fontWeight:600},gLegendBar:{width:18,height:8,borderRadius:3,background:"var(--accent)",display:"inline-block"},gLegendToday:{width:2,height:12,background:"#C2536B",display:"inline-block"}},Wr={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.12)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.12)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.12)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.12)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.12)"}},Xu=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Sf=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Na=t=>t.toISOString().slice(0,10),jf=()=>Na(new Date),Cf=(t=0)=>{const e=new Date,r=e.getDay(),o=r===0?-6:1-r,s=new Date(e);return s.setDate(e.getDate()+o+t*7),Array.from({length:7},(i,l)=>{const a=new Date(s);return a.setDate(s.getDate()+l),Na(a)})},If=(t=0)=>{const e=new Date,r=new Date(e.getFullYear(),e.getMonth()+t,1),o=r.getFullYear(),s=r.getMonth(),i=new Date(o,s+1,0).getDate(),l=r.getDay(),a=l===0?6:l-1,d=Array.from({length:i},(p,v)=>`${o}-${String(s+1).padStart(2,"0")}-${String(v+1).padStart(2,"0")}`),g=r.toLocaleDateString("en-US",{month:"long",year:"numeric"});return{dates:d,startOffset:a,label:g,year:o,month:s}},sg=t=>new Date(t+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"}),Sr=jf(),zf=new Date().getFullYear();function Tf(){var P,et;const[t,e]=y.useState([]),[r,o]=y.useState("ALL"),[s,i]=y.useState(!1),[l,a]=y.useState(!1),[d,g]=y.useState(!1),[p,v]=y.useState(null),[m,k]=y.useState(null),[x,S]=y.useState({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week"}),[z,b]=y.useState(!1),[u,c]=y.useState([]),h=y.useCallback(()=>Y.getHabits().then(e).catch(console.error),[]);y.useEffect(()=>{h()},[h]),y.useEffect(()=>{Y.getSetting("habit_order").then(f=>{Array.isArray(f==null?void 0:f.value)&&c(f.value)}).catch(()=>{})},[]);const w=y.useMemo(()=>u.length?[...t].sort((f,M)=>{const it=u.indexOf(f.id),st=u.indexOf(M.id);return it===-1&&st===-1?0:it===-1?1:st===-1?-1:it-st}):t,[t,u]),D=async f=>{c(f),await Y.setSetting("habit_order",f),b(!1)};y.useEffect(()=>{const f=()=>{const M=window.innerWidth<720;i(M),M||a(!1)};return f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[]);const{deleteItem:W,toasts:C,handleUndo:T,handleDismiss:R}=fn(Y.deleteHabit,Y.restoreHabit,h),Z=f=>{o(f),s&&a(!1)},L=(f,M)=>{(f.type==="minimum"||f.type==="maximum")&&f.period==="day"?k({habit:f,date:M}):j(f.id,M)},j=async(f,M)=>{await Y.toggleHabitLog(f,M),h()},O=async(f,M,it,st)=>{await Y.setHabitLogCount(f,M,it,st),k(null),h()},H=async(f,M)=>{await Y.clearHabitLog(f,M),k(null),h()},V=async()=>{if(!x.name.trim())return;const f={name:x.name.trim(),pillar:x.pillar,target_per_week:Number(x.target_per_week)||7,type:x.type,target_count:x.type!=="regular"?Number(x.target_count)||1:null,period:x.type!=="regular"?x.period:null};await Y.createHabit(f),S({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week"}),g(!1),h()},E=async(f,M)=>{r===f&&o("ALL"),W(f,M)},B=t.find(f=>f.id===r),$=f=>new Set(f.logs||[]),Q={...A.sidebar,...s?A.sidebarOverlay:{},...s&&!l?A.sidebarHidden:{}};return n.jsxs("div",{style:A.shell,children:[s&&l&&n.jsx("div",{style:A.backdrop,onClick:()=>a(!1)}),n.jsxs("aside",{style:Q,children:[n.jsxs("div",{style:A.sideTop,children:[n.jsx("div",{style:A.brand,children:"Anvil · Habits"}),s&&n.jsx("button",{onClick:()=>a(!1),style:A.closeBtn,children:n.jsx(ft,{size:18})})]}),n.jsxs("div",{style:{...A.sideItem,...r==="ALL"?A.sideItemOn:{},cursor:"default",padding:"2px 6px 2px 10px"},children:[n.jsxs("button",{onClick:()=>Z("ALL"),style:{display:"flex",alignItems:"center",gap:9,flex:1,border:"none",background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:r==="ALL"?600:500,color:"var(--text-2)",padding:"7px 0"},children:[n.jsx(Gu,{size:15}),n.jsx("span",{style:A.sideLabel,children:"All Habits"}),n.jsx("span",{style:A.sideCount,children:t.length})]}),n.jsx("button",{onClick:f=>{f.stopPropagation(),b(!0)},style:A.tinyBtn,title:"Reorder habits",children:n.jsx(Je,{size:12})})]}),n.jsx("div",{style:A.sideDivider}),w.map(f=>{var st;const M=r===f.id,it=((st=Wr[f.pillar])==null?void 0:st.dot)||"#9A968C";return n.jsxs("button",{onClick:()=>Z(f.id),style:{...A.sideItem,...M?A.sideItemOn:{}},children:[n.jsx("span",{style:{...A.sideDot,background:it}}),n.jsx("span",{style:A.sideLabel,children:f.name}),n.jsxs("span",{style:A.sideStreak,children:[n.jsx(Qs,{size:11})," ",f.streak]})]},f.id)}),d?n.jsx(Ef,{habit:x,onChange:S,onSave:V,onCancel:()=>g(!1)}):n.jsxs("button",{onClick:()=>g(!0),style:A.sideNewBtn,children:[n.jsx(Ie,{size:13})," New habit"]})]}),n.jsxs("main",{style:A.main,children:[s&&n.jsxs("button",{onClick:()=>a(!0),style:A.hamburger,children:[n.jsx(Wa,{size:18}),n.jsx("span",{style:A.hamburgerLabel,children:r==="ALL"?"All Habits":B==null?void 0:B.name})]}),r==="ALL"?n.jsx(Ff,{habits:w,dayAction:L,logSet:$,onDelete:E,onEdit:f=>v(f)}):n.jsx(Rf,{habit:B,dayAction:L,logSet:$,onDelete:()=>E(B.id,B.name),onEdit:()=>v(B),setNote:(f,M)=>Y.setHabitLogNote(B.id,f,M).then(h)}),r==="ALL"&&n.jsx(Mf,{year:zf})]}),z&&n.jsx(Wf,{habits:w,onSave:D,onClose:()=>b(!1)}),p&&n.jsx(Bf,{habit:p,onSave:async f=>{await Y.updateHabit(p.id,f),v(null),h()},onClose:()=>v(null)}),m&&n.jsx(Af,{habit:m.habit,date:m.date,initialCount:((P=m.habit.log_counts)==null?void 0:P[m.date])??0,initialNote:((et=m.habit.log_notes)==null?void 0:et[m.date])??"",onSave:(f,M)=>O(m.habit.id,m.date,f,M),onClear:()=>H(m.habit.id,m.date),onClose:()=>k(null)}),n.jsx(vn,{toasts:C,onUndo:T,onDismiss:R})]})}function Ef({habit:t,onChange:e,onSave:r,onCancel:o}){const s=t.type!=="regular";return n.jsxs("div",{style:A.addBox,children:[n.jsx("input",{autoFocus:!0,placeholder:"Habit name",value:t.name,onChange:i=>e(l=>({...l,name:i.target.value})),onKeyDown:i=>i.key==="Enter"&&r(),style:A.sideInput}),n.jsx("select",{value:t.pillar,onChange:i=>e(l=>({...l,pillar:i.target.value})),style:A.sideInput,children:Object.keys(Wr).map(i=>n.jsx("option",{children:i},i))}),n.jsxs("select",{value:t.type,onChange:i=>e(l=>({...l,type:i.target.value})),style:A.sideInput,children:[n.jsx("option",{value:"regular",children:"Regular (yes/no)"}),n.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),n.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),s&&n.jsxs("div",{style:{display:"flex",gap:6},children:[n.jsx("input",{type:"number",min:1,placeholder:"N",value:t.target_count||"",onChange:i=>e(l=>({...l,target_count:i.target.value})),style:{...A.sideInput,width:60}}),n.jsx("select",{value:t.period,onChange:i=>e(l=>({...l,period:i.target.value})),style:A.sideInput,children:["day","week","month","year"].map(i=>n.jsx("option",{children:i},i))})]}),n.jsxs("div",{style:{display:"flex",gap:6},children:[n.jsx("button",{onClick:r,style:A.sideAddBtn,children:n.jsx(wt,{size:13})}),n.jsx("button",{onClick:o,style:A.sideCancelBtn,children:n.jsx(ft,{size:13})})]})]})}function Bf({habit:t,onSave:e,onClose:r}){const[o,s]=y.useState(t.name),[i,l]=y.useState(t.type||"regular"),[a,d]=y.useState(t.target_count||""),[g,p]=y.useState(t.period||"week"),[v,m]=y.useState(t.reminder_time||""),k=()=>e({name:o.trim(),type:i,target_count:i!=="regular"?Number(a):null,period:i!=="regular"?g:null,reminder_time:v||null});return n.jsx("div",{style:A.modalOverlay,onClick:r,children:n.jsxs("div",{style:A.modal,onClick:x=>x.stopPropagation(),children:[n.jsxs("div",{style:A.modalHead,children:["Edit Habit",n.jsx("button",{onClick:r,style:A.closeBtn,children:n.jsx(ft,{size:16})})]}),n.jsx("label",{style:A.modalLabel,children:"Name"}),n.jsx("input",{value:o,onChange:x=>s(x.target.value),style:A.sideInput}),n.jsx("label",{style:A.modalLabel,children:"Type"}),n.jsxs("select",{value:i,onChange:x=>l(x.target.value),style:A.sideInput,children:[n.jsx("option",{value:"regular",children:"Regular (yes/no)"}),n.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),n.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),i!=="regular"&&n.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[n.jsx("input",{type:"number",min:1,value:a,onChange:x=>d(x.target.value),style:{...A.sideInput,width:70}}),n.jsx("select",{value:g,onChange:x=>p(x.target.value),style:A.sideInput,children:["day","week","month","year"].map(x=>n.jsx("option",{children:x},x))})]}),n.jsx("label",{style:A.modalLabel,children:"Reminder time"}),n.jsx("input",{type:"time",value:v,onChange:x=>m(x.target.value),style:A.sideInput}),n.jsx("button",{onClick:k,style:{...A.sideAddBtn,width:"100%",marginTop:10,height:36},children:"Save"})]})})}function Af({habit:t,date:e,initialCount:r,initialNote:o,onSave:s,onClear:i,onClose:l}){const[a,d]=y.useState(r??0),[g,p]=y.useState(o??""),v=t.target_count,m=t.type==="minimum"?a>=v:a>0&&a<=v,k=t.type==="maximum"&&a>v,x=m?"#4C9A6B":k?"#C2536B":"#C2773B",S=m?"✓ Goal met":k?"Over the limit":"Not met yet";return n.jsx("div",{style:A.modalOverlay,onClick:l,children:n.jsxs("div",{style:A.modal,onClick:z=>z.stopPropagation(),children:[n.jsxs("div",{style:A.modalHead,children:[t.name,n.jsx("button",{onClick:l,style:A.closeBtn,children:n.jsx(ft,{size:16})})]}),n.jsxs("div",{style:{fontSize:12,color:"var(--text-3)",marginBottom:2},children:[e," · ",t.type==="minimum"?`at least ${v}`:`no more than ${v}`," / ",t.period]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:20,margin:"14px 0 6px"},children:[n.jsx("button",{onClick:()=>d(z=>Math.max(0,z-1)),style:A.counterBtn,children:"−"}),n.jsx("span",{style:{fontSize:38,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:52,textAlign:"center",color:x},children:a}),n.jsx("button",{onClick:()=>d(z=>z+1),style:A.counterBtn,children:"+"})]}),n.jsx("div",{style:{textAlign:"center",fontSize:12.5,fontWeight:700,color:x,marginBottom:12},children:S}),n.jsx("textarea",{value:g,onChange:z=>p(z.target.value),placeholder:"Add a comment (optional)…",style:{...A.sideInput,minHeight:56,resize:"vertical"}}),n.jsxs("div",{style:{display:"flex",gap:8,marginTop:10},children:[n.jsxs("button",{onClick:i,style:{...A.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[n.jsx(ft,{size:14})," Delete"]}),n.jsxs("button",{onClick:()=>s(a,g),style:{...A.sideAddBtn,flex:1,justifyContent:"center",height:38},children:[n.jsx(wt,{size:14})," Set"]})]})]})})}function Ff({habits:t,dayAction:e,logSet:r,onDelete:o,onEdit:s}){const[i,l]=y.useState(0),a=Cf(i),d=`${sg(a[0])} – ${sg(a[6])}${i===0?" · This week":""}`;return n.jsxs("div",{children:[n.jsxs("div",{style:A.mainHead,children:[n.jsx("div",{style:A.eyebrow,children:"Weekly view"}),n.jsx("h1",{style:A.h1,children:"All Habits"})]}),n.jsxs("div",{style:A.navBar,children:[n.jsx("button",{onClick:()=>l(g=>g-1),style:A.navBtn,children:n.jsx(yo,{size:16})}),n.jsx("span",{style:A.navLabel,children:d}),n.jsx("button",{onClick:()=>l(g=>Math.min(0,g+1)),disabled:i>=0,style:{...A.navBtn,...i>=0?A.navBtnDisabled:{}},children:n.jsx(mn,{size:16})})]}),n.jsxs("div",{style:A.weekCard,children:[n.jsxs("div",{style:A.weekHeadRow,children:[n.jsx("div",{style:A.weekNameCol}),Xu.map((g,p)=>n.jsxs("div",{style:A.weekDayHead,children:[n.jsx("span",{style:A.weekDayName,children:g}),n.jsx("span",{style:{...A.weekDayNum,...a[p]===Sr?A.weekDayToday:{}},children:new Date(a[p]+"T00:00").getDate()})]},g)),n.jsx("div",{style:A.weekStreakCol,children:"Streak"})]}),t.map(g=>{var D,W;const p=((D=Wr[g.pillar])==null?void 0:D.dot)||"#9A968C",v=((W=Wr[g.pillar])==null?void 0:W.soft)||"rgba(0,0,0,0.05)",m=r(g),k=g.type==="minimum"&&["week","month","year"].includes(g.period),x=g.target_count||0,S=g.logs||[],z=C=>S.filter(T=>T.slice(0,7)===C).length,b=C=>S.filter(T=>T.slice(0,4)===C).length,u=a.filter(C=>m.has(C)).length,c=C=>k?g.period==="week"?u>=x:g.period==="month"?z(C.slice(0,7))>=x:g.period==="year"?b(C.slice(0,4))>=x:!1:!1,h=k&&a.some(c),w=g.period==="week"?u:g.period==="month"?z(a[0].slice(0,7)):g.period==="year"?b(a[0].slice(0,4)):0;return n.jsxs("div",{style:A.weekRow,children:[n.jsxs("div",{style:{...A.weekNameCol,flexDirection:"column",alignItems:"flex-start",gap:2},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx("span",{style:{...A.sideDot,background:p}}),n.jsx("span",{style:A.weekHabitName,children:g.name})]}),g.type!=="regular"&&n.jsx("span",{style:A.typeBadge,children:g.type==="minimum"?`≥${g.target_count}/${g.period}`:`≤${g.target_count}/${g.period}`})]}),a.map((C,T)=>{var Q,P;const R=m.has(C),Z=C>Sr,L=(g.type==="minimum"||g.type==="maximum")&&g.period==="day",j=(Q=g.log_counts)==null?void 0:Q[C],O=j!=null,H=!!((P=g.log_notes)!=null&&P[C]),V=c(C),E=T>0&&c(a[T-1]),B=T<a.length-1&&c(a[T+1]),$=R||V;return n.jsxs("div",{style:{...A.weekCell,position:"relative"},children:[V&&n.jsx("span",{style:{...A.chainLine,background:p,left:E?0:"50%",right:B?0:"50%"}}),n.jsx("button",{disabled:Z,onClick:()=>e(g,C),style:{...A.tick,position:"relative",zIndex:1,...$?{background:p,borderColor:p,color:"#fff"}:{},...L&&O&&!R?{borderColor:p,color:p}:{},...Z&&!$?A.tickFuture:{}},children:L?O?n.jsx("span",{style:{fontSize:12,fontWeight:700},children:j}):null:R&&n.jsx(wt,{size:14,color:"#fff",strokeWidth:3})}),H&&n.jsx("span",{style:A.cellNoteBubble})]},C)}),n.jsx("div",{style:A.weekStreakCol,children:h?n.jsxs("span",{style:{...A.streakPill,background:v,color:p},children:[n.jsx(Fl,{size:12})," ",w,"/",x]}):n.jsxs("span",{style:{...A.streakPill,background:v,color:p},children:[n.jsx(Qs,{size:12})," ",g.streak]})})]},g.id)}),t.length===0&&n.jsx("div",{style:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},children:"No habits yet — add one from the sidebar."})]})]})}function Rf({habit:t,dayAction:e,logSet:r,onDelete:o,onEdit:s,setNote:i}){var P,et;const[l,a]=y.useState(null),[d,g]=y.useState(""),[p,v]=y.useState(null),[m,k]=y.useState(0),x=y.useRef(null);if(!t)return null;const S=((P=Wr[t.pillar])==null?void 0:P.dot)||"#9A968C",z=((et=Wr[t.pillar])==null?void 0:et.soft)||"rgba(0,0,0,0.05)",b=r(t),{dates:u,startOffset:c,label:h,year:w}=If(m),D=u.filter(f=>f<=Sr&&b.has(f)).length,W=u.filter(f=>f<=Sr).length,C=W>0?Math.round(D/W*100):0,T=t.type==="minimum"&&(t.period==="month"||t.period==="year"),R=t.period==="year"?(t.logs||[]).filter(f=>f.startsWith(`${w}-`)).length:u.filter(f=>b.has(f)).length,Z=T&&R>=(t.target_count||0),L=t.type==="minimum"&&t.period==="week",j=t.target_count||0,O=f=>{const M=new Date(f+"T00:00"),it=M.getDay(),st=new Date(M);st.setDate(M.getDate()+(it===0?-6:1-it));let bt=0;for(let zt=0;zt<7;zt++){const gt=new Date(st);gt.setDate(st.getDate()+zt),b.has(Na(gt))&&bt++}return bt},H=f=>T?Z:L?O(f)>=j:!1,V=L?O(Sr):0,E=L&&V>=j,B=f=>{x.current=setTimeout(()=>a(f),500)},$=()=>clearTimeout(x.current),Q=f=>{var M;v(f),g(((M=t.log_notes)==null?void 0:M[f])||""),a(null)};return n.jsxs("div",{children:[n.jsxs("div",{style:A.mainHead,children:[n.jsxs("div",{children:[n.jsxs("div",{style:A.eyebrow,children:[n.jsx("span",{style:{...A.sideDot,background:S,marginRight:6}}),t.pillar," · Monthly view"]}),n.jsx("h1",{style:A.h1,children:t.name})]}),n.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[n.jsxs("button",{onClick:s,style:A.actionBtn,children:[n.jsx(Je,{size:14})," Edit"]}),n.jsxs("button",{onClick:o,style:{...A.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[n.jsx(ft,{size:14})," Delete"]}),t.reminder_time&&n.jsxs("button",{style:A.actionBtn,children:[n.jsx(Pu,{size:14})," ",t.reminder_time]})]})]}),n.jsxs("div",{style:A.statStrip,children:[n.jsx(Tn,{label:"Current streak",value:`${t.streak} days`,c:S,soft:z,flame:!0}),n.jsx(Tn,{label:"Done this month",value:`${D}/${W}`,c:S,soft:z}),n.jsx(Tn,{label:"Completion",value:`${C}%`,c:S,soft:z}),t.type==="regular"?n.jsx(Tn,{label:"Weekly target",value:`${t.target_per_week}×`,c:S,soft:z}):n.jsx(Tn,{label:t.type==="minimum"?"Min target":"Max allowed",value:`${t.target_count}/${t.period}`,c:S,soft:z})]}),n.jsxs("div",{style:A.navBar,children:[n.jsx("button",{onClick:()=>k(f=>f-1),style:A.navBtn,children:n.jsx(yo,{size:16})}),n.jsxs("span",{style:A.navLabel,children:[h,m===0?" · This month":""]}),n.jsx("button",{onClick:()=>k(f=>Math.min(0,f+1)),disabled:m>=0,style:{...A.navBtn,...m>=0?A.navBtnDisabled:{}},children:n.jsx(mn,{size:16})})]}),T&&n.jsxs("div",{style:{...A.chainBanner,background:Z?z:"var(--bg)",color:Z?S:"var(--text-3)"},children:[n.jsx(Fl,{size:15}),Z?`${t.period==="year"?"Yearly":"Monthly"} chain complete — ${R}/${t.target_count} connected`:`${R}/${t.target_count} this ${t.period} · ${(t.target_count||0)-R} more to connect the chain`]}),L&&m===0&&n.jsxs("div",{style:{...A.chainBanner,background:E?z:"var(--bg)",color:E?S:"var(--text-3)"},children:[n.jsx(Fl,{size:15}),E?`This week's chain complete — ${V}/${j} connected`:`${V}/${j} this week · ${Math.max(0,j-V)} more to connect the chain`]}),n.jsxs("div",{style:A.monthCard,children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[n.jsx("div",{style:A.monthTitle,children:h}),n.jsx("span",{style:{fontSize:11,color:"var(--text-3)"},children:"Long-press a day for options"})]}),n.jsx("div",{style:A.monthDow,children:Xu.map(f=>n.jsx("div",{style:A.monthDowCell,children:f},f))}),n.jsxs("div",{style:A.monthGrid,children:[Array.from({length:c}).map((f,M)=>n.jsx("div",{},`pad${M}`)),u.map((f,M)=>{var Ot,he;const it=M+1,st=b.has(f),bt=f>Sr,zt=f===Sr,gt=!!((Ot=t.log_notes)!=null&&Ot[f]),jt=(t.type==="minimum"||t.type==="maximum")&&t.period==="day",ve=(he=t.log_counts)==null?void 0:he[f],F=ve!=null,_=H(f),at=st||_,vt=(c+M)%7;return n.jsxs("div",{style:{position:"relative"},children:[_&&n.jsx("span",{style:{...A.chainLine,background:S,...vt===0?{left:"50%"}:{left:-6},...vt===6?{right:"50%"}:{right:-6}}}),n.jsx("button",{disabled:bt,onClick:()=>e(t,f),onMouseDown:()=>!jt&&B(f),onMouseUp:$,onTouchStart:()=>!jt&&B(f),onTouchEnd:$,style:{...A.monthDay,position:"relative",zIndex:1,...at?{background:S,borderColor:S,color:"#fff"}:{},...jt&&F&&!st?{borderColor:S,color:S}:{},...bt&&!at?A.monthDayFuture:{},...zt&&!at?{borderColor:S,borderWidth:2}:{},width:"100%"},children:it}),jt&&F&&n.jsx("span",{style:{...A.countBadge,background:st?"#4C9A6B":S},children:ve}),gt&&n.jsx("span",{style:A.noteIndicator}),l===f&&n.jsx(Df,{onEdit:s,onDelete:o,onAddNote:()=>Q(f),onRemind:s,onClose:()=>a(null)})]},f)})]})]}),p&&n.jsxs("div",{style:A.noteBox,children:[n.jsxs("div",{style:{fontWeight:600,fontSize:13,marginBottom:6},children:["Note for ",p]}),n.jsx("textarea",{value:d,onChange:f=>g(f.target.value),placeholder:"Add a note for this day…",style:{...A.sideInput,minHeight:60,resize:"vertical"}}),n.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[n.jsxs("button",{onClick:()=>{i(p,d),v(null)},style:A.sideAddBtn,children:[n.jsx(wt,{size:13})," Save"]}),n.jsx("button",{onClick:()=>v(null),style:A.sideCancelBtn,children:n.jsx(ft,{size:13})})]})]})]})}function Df({onEdit:t,onDelete:e,onAddNote:r,onRemind:o,onClose:s}){return n.jsxs("div",{style:A.longPressMenu,children:[n.jsxs("button",{style:A.menuItem,onClick:()=>{t(),s()},children:[n.jsx(Je,{size:13})," Edit"]}),n.jsxs("button",{style:A.menuItem,onClick:()=>{r(),s()},children:[n.jsx(Hu,{size:13})," Add note"]}),n.jsxs("button",{style:A.menuItem,onClick:()=>{o(),s()},children:[n.jsx(Pu,{size:13})," Remind"]}),n.jsxs("button",{style:{...A.menuItem,color:"#C2536B"},onClick:()=>{e(),s()},children:[n.jsx(ft,{size:13})," Delete"]})]})}function Wf({habits:t,onSave:e,onClose:r}){const[o,s]=y.useState([...t]),i=(l,a)=>{const d=[...o],g=l+a;g<0||g>=d.length||([d[l],d[g]]=[d[g],d[l]],s(d))};return n.jsx("div",{style:A.modalOverlay,onClick:r,children:n.jsxs("div",{style:{...A.modal,maxHeight:"80vh",overflowY:"auto"},onClick:l=>l.stopPropagation(),children:[n.jsxs("div",{style:A.modalHead,children:["Reorder Habits",n.jsx("button",{onClick:r,style:A.closeBtn,children:n.jsx(ft,{size:16})})]}),n.jsx("p",{style:{fontSize:12,color:"var(--text-3)",margin:"0 0 10px"},children:"Use arrows to set the display order."}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:o.map((l,a)=>{var g;const d=((g=Wr[l.pillar])==null?void 0:g.dot)||"#9A968C";return n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"9px 10px",background:"var(--bg)",borderRadius:9,border:"1px solid var(--border)"},children:[n.jsx("span",{style:{...A.sideDot,background:d}}),n.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500},children:l.name}),n.jsx("button",{onClick:()=>i(a,-1),disabled:a===0,style:{...A.navBtn,width:28,height:28,opacity:a===0?.3:1,fontSize:14},children:"↑"}),n.jsx("button",{onClick:()=>i(a,1),disabled:a===o.length-1,style:{...A.navBtn,width:28,height:28,opacity:a===o.length-1?.3:1,fontSize:14},children:"↓"})]},l.id)})}),n.jsxs("button",{onClick:()=>e(o.map(l=>l.id)),style:{...A.sideAddBtn,width:"100%",marginTop:14,height:38,justifyContent:"center"},children:[n.jsx(wt,{size:14})," Save Order"]})]})})}function Mf({year:t}){const[e,r]=y.useState([]);if(y.useEffect(()=>{Y.getHabitsYearly(t).then(r).catch(console.error)},[t]),!e.length)return null;const o=Array.from({length:12},(i,l)=>{const a=e.reduce((g,p)=>{var v;return g+(((v=p.monthly[l+1])==null?void 0:v.done)||0)},0),d=e.reduce((g,p)=>{var v;return g+Math.floor((((v=p.monthly[l+1])==null?void 0:v.days)||30)/7*7)},0);return d>0?Math.round(a/d*100):0}),s=Math.max(...o,1);return n.jsxs("div",{style:{...A.monthCard,marginTop:18},children:[n.jsxs("div",{style:A.monthTitle,children:[t," Completion"]}),n.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:6,height:80,marginTop:12},children:o.map((i,l)=>n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[n.jsx("div",{style:{width:"100%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",height:`${i/s*60}px`,minHeight:2,opacity:i>0?1:.15},title:`${i}%`}),n.jsx("span",{style:{fontSize:9,color:"var(--text-3)",fontWeight:600},children:Sf[l]})]},l))})]})}function Tn({label:t,value:e,c:r,soft:o,flame:s}){return n.jsxs("div",{style:{...A.stat,background:o},children:[n.jsx("div",{style:A.statLabel,children:t}),n.jsxs("div",{style:{...A.statValue,color:r},children:[s&&n.jsx(Qs,{size:15})," ",e]})]})}const A={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:230,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",padding:"20px 12px",display:"flex",flexDirection:"column",gap:3,overflowY:"auto"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.18)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)",boxShadow:"none"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.38)",zIndex:20},sideTop:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 4px"},closeBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",marginBottom:8},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700,padding:"0 6px 14px"},sideItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"9px 10px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:500,color:"var(--text-2)",textAlign:"left"},sideItemOn:{background:"var(--hover)",fontWeight:600},sideLabel:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},sideCount:{fontSize:11,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:10,padding:"1px 7px"},sideStreak:{display:"flex",alignItems:"center",gap:3,fontSize:11,fontWeight:600,color:"#C2773B"},sideDot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},sideDivider:{height:1,background:"var(--border)",margin:"8px 6px"},addBox:{padding:"10px 6px",display:"flex",flexDirection:"column",gap:6},sideInput:{border:"1px solid var(--border)",borderRadius:7,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},sideAddBtn:{border:"none",background:"#4C9A6B",color:"#fff",height:30,padding:"0 12px",borderRadius:7,cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontSize:13,fontFamily:"inherit"},sideCancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:30,height:30,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},sideNewBtn:{display:"flex",alignItems:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",borderRadius:8,padding:"8px 10px",fontSize:12.5,color:"var(--text-3)",fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginTop:6,justifyContent:"center"},main:{flex:1,padding:"26px",overflowX:"hidden",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:200},mainHead:{marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:5,display:"flex",alignItems:"center"},h1:{fontSize:27,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},actionBtn:{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:500,color:"var(--text-2)",border:"1px solid var(--border)",background:"var(--surface)",padding:"5px 10px",borderRadius:7,cursor:"pointer",fontFamily:"inherit"},weekCard:{background:"var(--surface)",borderRadius:12,padding:"8px 14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"auto"},weekHeadRow:{display:"flex",alignItems:"flex-end",padding:"10px 0",borderBottom:"1px solid var(--border)",minWidth:480},weekNameCol:{width:160,flexShrink:0,display:"flex",alignItems:"center",gap:8},weekDayHead:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2},weekDayName:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekDayNum:{fontSize:12,fontWeight:600,color:"var(--text-2)",width:22,height:22,display:"grid",placeItems:"center",borderRadius:"50%"},weekDayToday:{background:"var(--accent-strong)",color:"#fff"},weekStreakCol:{width:64,flexShrink:0,textAlign:"center",fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekRow:{display:"flex",alignItems:"center",padding:"9px 0",borderBottom:"1px solid #F4F2EC",minWidth:480},weekHabitName:{fontSize:13,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},weekCell:{flex:1,display:"grid",placeItems:"center"},typeBadge:{fontSize:10,color:"var(--text-3)",background:"var(--hover)",padding:"1px 6px",borderRadius:8,fontWeight:600},tick:{width:26,height:26,borderRadius:7,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",padding:0},tickFuture:{opacity:.4,cursor:"not-allowed",borderStyle:"dashed"},streakPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,fontWeight:700,padding:"3px 9px",borderRadius:12},tinyBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:"2px 3px",display:"grid",placeItems:"center",borderRadius:4},statStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:10,marginBottom:18},stat:{borderRadius:10,padding:"13px 14px"},statLabel:{fontSize:11,fontWeight:600,color:"var(--text-2)",marginBottom:5},statValue:{fontSize:19,fontWeight:700,display:"flex",alignItems:"center",gap:5,fontFamily:"'Fraunces',Georgia,serif"},monthCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},monthTitle:{fontSize:14,fontWeight:700,marginBottom:12,fontFamily:"'Fraunces',Georgia,serif"},monthDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:8},monthDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},monthGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6},monthDay:{aspectRatio:"1",border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",display:"grid",placeItems:"center"},monthDayFuture:{opacity:.4,cursor:"not-allowed",background:"var(--surface-2)"},noteIndicator:{position:"absolute",top:3,right:3,width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},cellNoteBubble:{position:"absolute",top:2,right:"calc(50% - 16px)",width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},countBadge:{position:"absolute",bottom:2,right:2,minWidth:13,height:13,padding:"0 2px",borderRadius:7,color:"#fff",fontSize:9,fontWeight:700,display:"grid",placeItems:"center",lineHeight:1},counterBtn:{width:44,height:44,borderRadius:"50%",border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:24,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1},chainLine:{position:"absolute",top:"calc(50% - 3px)",left:0,right:0,height:6,zIndex:0,opacity:.9},chainBanner:{display:"flex",alignItems:"center",gap:8,borderRadius:10,padding:"10px 14px",marginBottom:14,fontSize:12.5,fontWeight:700,fontFamily:"'Inter',system-ui,sans-serif"},navBar:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:16},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},navLabel:{fontSize:13,fontWeight:700,color:"var(--text)",minWidth:180,textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},noteBox:{background:"var(--surface)",borderRadius:10,padding:14,marginTop:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},longPressMenu:{position:"absolute",top:"100%",left:0,zIndex:50,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 4px 16px rgba(0,0,0,0.12)",padding:"4px 0",minWidth:140},menuItem:{display:"flex",alignItems:"center",gap:8,width:"100%",border:"none",background:"none",padding:"8px 14px",fontSize:13,color:"var(--text)",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:100,display:"grid",placeItems:"center"},modal:{background:"var(--surface)",borderRadius:14,padding:24,width:320,maxWidth:"90vw",display:"flex",flexDirection:"column",gap:8},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:700,fontSize:16,fontFamily:"'Fraunces',Georgia,serif",marginBottom:6},modalLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4}},Wl=[{id:1,label:"Rough",emoji:"😣",color:"#C2536B"},{id:2,label:"Low",emoji:"🙁",color:"#C2773B"},{id:3,label:"Okay",emoji:"😐",color:"#C9A227"},{id:4,label:"Good",emoji:"🙂",color:"#4C9A6B"},{id:5,label:"Great",emoji:"😄",color:"#3A7CA5"}],_f=t=>Wl.find(e=>e.id===t),ji=[{id:"wins",label:"Wins",hint:"What went well today?",icon:co,color:"#C9A227"},{id:"grateful",label:"Grateful for",hint:"1–3 things",icon:Um,color:"#C2536B"},{id:"mattered",label:"What mattered",hint:"The point of today",icon:Ma,color:"#3A7CA5"},{id:"letgo",label:"Letting go of",hint:"Offload what's draining",icon:af,color:"#8268B0"},{id:"tomorrow",label:"Tomorrow's one thing",hint:"A single priority",icon:nf,color:"#4C9A6B"}],Lf=()=>new Date().toISOString().slice(0,10),Ci=t=>new Date(t+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"});function Nf(){const t=Lf(),[e,r]=[new Date().getFullYear(),new Date().getMonth()+1],[o,s]=y.useState(null),i=o||t,l=i===t,[a,d]=y.useState(null),[g,p]=y.useState({}),[v,m]=y.useState(Object.fromEntries(ji.map(T=>[T.id,""]))),k=y.useCallback(async T=>{const R=await Y.getJournalEntry(T);d(R)},[]);y.useCallback(async()=>{const T=await Y.getJournalHistory(e,r);p(T)},[e,r]);const x=y.useCallback(async()=>{const[T,R]=await Promise.all([Y.getJournalEntry(i),Y.getJournalHistory(e,r)]);d(T),p(R)},[i,e,r]);y.useEffect(()=>{x()},[x]);const S=async T=>{await Y.updateJournalMood(i,T),x()},z=async T=>{const R=v[T].trim();R&&(await Y.addJournalBullet(i,T,R),m(Z=>({...Z,[T]:""})),k(i))},b=async T=>{await Y.deleteJournalBullet(T),k(i)},u=T=>{s(T===t?null:T),m(Object.fromEntries(ji.map(R=>[R.id,""])))};if(!a)return n.jsx("div",{style:{padding:28,color:"var(--text-3)"},children:"Loading…"});const c=a.mood!==null,h=(()=>{let T=0;const R=new Date(t);if(g[t]||l&&c)T=1,R.setDate(R.getDate()-1);else return 0;for(;;){const L=R.toISOString().slice(0,10);if(g[L])T++,R.setDate(R.getDate()-1);else break}return T})(),w=Object.values(a.bullets||{}).reduce((T,R)=>T+R.length,0),D=new Date(e,r,0).getDate(),W=new Date(e,r-1,1).getDay(),C=W===0?6:W-1;return n.jsxs("div",{style:ct.page,children:[n.jsxs("div",{style:ct.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:ct.eyebrow,children:"Anvil · Journal"}),!l&&n.jsxs("button",{style:ct.backBtn,onClick:()=>s(null),children:[n.jsx(yo,{size:14})," Back to Today"]}),n.jsx("h1",{style:ct.h1,children:l?"Today":Ci(i)}),l&&n.jsx("div",{style:ct.date,children:Ci(t)})]}),n.jsxs("div",{style:ct.streakBox,children:[n.jsx(Qs,{size:16,color:"#C2773B"}),n.jsx("span",{style:ct.streakNum,children:h}),n.jsx("span",{style:ct.streakLabel,children:"day streak"})]})]}),n.jsxs("div",{style:ct.card,children:[n.jsxs("div",{style:ct.cardTitle,children:["How ",l?"are":"were"," you?"]}),n.jsx("div",{style:ct.moodRow,children:Wl.map(T=>{const R=a.mood===T.id;return n.jsxs("button",{onClick:()=>S(T.id),style:{...ct.moodBtn,...R?{background:T.color,borderColor:T.color,transform:"translateY(-2px)"}:{}},children:[n.jsx("span",{style:ct.moodEmoji,children:T.emoji}),n.jsx("span",{style:{...ct.moodLabel,color:R?"#fff":"#6B675E"},children:T.label})]},T.id)})})]}),ji.map(T=>{var L;const R=T.icon,Z=((L=a.bullets)==null?void 0:L[T.id])||[];return n.jsxs("div",{style:ct.card,children:[n.jsxs("div",{style:ct.sectionHead,children:[n.jsx("span",{style:{...ct.sectionIcon,background:`${T.color}1A`,color:T.color},children:n.jsx(R,{size:15})}),n.jsxs("div",{children:[n.jsx("div",{style:ct.cardTitle,children:T.label}),n.jsx("div",{style:ct.sectionHint,children:T.hint})]})]}),n.jsx("ul",{style:ct.bulletList,children:Z.map(j=>n.jsxs("li",{style:ct.bullet,children:[n.jsx("span",{style:{...ct.bulletDot,background:T.color}}),n.jsx("span",{style:ct.bulletText,children:j.text}),n.jsx("button",{onClick:()=>b(j.id),style:ct.bulletDel,children:n.jsx(ft,{size:13})})]},j.id))}),n.jsxs("div",{style:ct.addRow,children:[n.jsx("input",{placeholder:"Add a point…",value:v[T.id],onChange:j=>m(O=>({...O,[T.id]:j.target.value})),onKeyDown:j=>j.key==="Enter"&&z(T.id),style:ct.input}),n.jsx("button",{onClick:()=>z(T.id),style:{...ct.addBtn,background:T.color},children:n.jsx(Ie,{size:16})})]})]},T.id)}),n.jsxs("div",{style:ct.card,children:[n.jsxs("div",{style:ct.cardTitle,children:[new Date(e,r-1).toLocaleDateString("en-US",{month:"long",year:"numeric"})," · Mood history",n.jsx("span",{style:{fontSize:11,color:"var(--text-3)",fontWeight:400,marginLeft:8},children:"tap a day to view"})]}),n.jsx("div",{style:ct.calDow,children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(T=>n.jsx("div",{style:ct.calDowCell,children:T},T))}),n.jsxs("div",{style:ct.calGrid,children:[Array.from({length:C}).map((T,R)=>n.jsx("div",{},`p${R}`)),Array.from({length:D},(T,R)=>R+1).map(T=>{const R=`${e}-${String(r).padStart(2,"0")}-${String(T).padStart(2,"0")}`,Z=R===t&&a.mood?a.mood:g[R],L=Z?_f(Z):null,j=R>t,O=R===i;return n.jsx("button",{onClick:()=>!j&&u(R),disabled:j,style:{...ct.calDay,background:L?L.color:j?"var(--surface-2)":"var(--surface)",borderColor:O?"var(--accent-strong)":"var(--border)",borderWidth:O?2:1,color:L?"#fff":"var(--text-3)",opacity:j?.5:1,cursor:j?"not-allowed":"pointer",outline:O?"2px solid var(--accent-strong)":"none",outlineOffset:1},title:L?L.label:R,children:L?L.emoji:T},T)})]}),n.jsx("div",{style:ct.legend,children:Wl.map(T=>n.jsxs("span",{style:ct.legendItem,children:[n.jsx("span",{style:{...ct.legendDot,background:T.color}})," ",T.label]},T.id))})]}),n.jsx("div",{style:ct.footer,children:l?c?`Mood set · ${w} point${w===1?"":"s"} written today`:"Tap a mood to log today and keep your streak":`Viewing ${Ci(i)}`})]})}const ct={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},backBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",background:"none",color:"#3A7CA5",fontSize:12.5,fontWeight:600,cursor:"pointer",padding:"0 0 6px",fontFamily:"inherit"},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},date:{fontSize:13,color:"var(--text-3)",marginTop:4},streakBox:{display:"flex",alignItems:"center",gap:6,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"8px 14px"},streakNum:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"#C2773B"},streakLabel:{fontSize:11,color:"var(--text-3)",fontWeight:500},card:{background:"var(--surface)",borderRadius:12,padding:"18px 20px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},cardTitle:{fontSize:14,fontWeight:700,marginBottom:12,color:"var(--text)"},moodRow:{display:"flex",gap:8,flexWrap:"wrap"},moodBtn:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,border:"2px solid var(--border)",background:"var(--surface)",borderRadius:10,padding:"10px 12px",cursor:"pointer",flex:"1 1 60px",transition:"transform 0.1s"},moodEmoji:{fontSize:22},moodLabel:{fontSize:11,fontWeight:600},sectionHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:10},sectionIcon:{width:32,height:32,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},sectionHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},bulletList:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6,marginBottom:10},bullet:{display:"flex",alignItems:"center",gap:8,fontSize:13.5,lineHeight:1.4},bulletDot:{width:6,height:6,borderRadius:"50%",flexShrink:0},bulletText:{flex:1},bulletDel:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},addRow:{display:"flex",gap:8},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",outline:"none"},addBtn:{width:36,height:36,border:"none",borderRadius:8,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:12},calDay:{aspectRatio:"1",border:"1px solid var(--border)",borderRadius:7,fontSize:13,display:"grid",placeItems:"center",fontWeight:500,fontFamily:"inherit"},legend:{display:"flex",gap:10,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)"},legendDot:{width:8,height:8,borderRadius:"50%",display:"inline-block"},footer:{fontSize:12.5,color:"var(--text-3)",textAlign:"center",marginTop:8,fontStyle:"italic"}},Be=[{id:"D",label:"Data",color:"#3A7CA5",soft:"rgba(58,124,165,0.10)",prompt:"What did you read/watch? Log the raw source and a quick note.",hint:"e.g. 'Atomic Habits ch.1 — habits are systems not goals'"},{id:"I",label:"Information",color:"#8268B0",soft:"rgba(130,104,176,0.10)",prompt:"What did you actually understand from it? In your own words.",hint:"e.g. 'Small 1% improvements compound into massive change over time'"},{id:"K",label:"Knowledge",color:"#C9A227",soft:"rgba(201,162,39,0.10)",prompt:"How will this specifically improve your life? Connect it to your goals.",hint:"e.g. 'I will improve my morning workout habit by 1% each week'"},{id:"W",label:"Wisdom",color:"#4C9A6B",soft:"rgba(76,154,107,0.10)",prompt:"How have you implemented it? What changed?",hint:"e.g. 'I've not missed a workout in 3 weeks using the 1% rule'"}],ig=t=>Be.findIndex(e=>e.id===t),Ml=[{id:"book",label:"Book",icon:Ou},{id:"video",label:"Video",icon:df},{id:"article",label:"Article",icon:Hu}],lg=t=>Ml.find(e=>e.id===t)||Ml[0],Ii={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"};function Pf(){var V;const[t,e]=y.useState([]),[r,o]=y.useState(null),[s,i]=y.useState("ALL"),[l,a]=y.useState(!1),[d,g]=y.useState(null),[p,v]=y.useState({title:"",type:"book",pillar:"Academic",note:""}),[m,k]=y.useState({}),[x,S]=y.useState(null),[z,b]=y.useState(null),u=y.useCallback(async()=>{try{const E=await Y.getSkills();e(E);const B={};E.forEach($=>{B[$.id]=Object.fromEntries(Be.map(Q=>[Q.id,""]))}),k($=>{const Q={...B};return E.forEach(P=>{$[P.id]&&(Q[P.id]={...B[P.id],...$[P.id]})}),Q})}catch(E){console.error(E)}},[]);y.useEffect(()=>{u()},[u]);const c=t.find(E=>E.id===r),h=c?ig(c.stage):-1,w=async(E,B)=>{var Q;const $=(((Q=m[E])==null?void 0:Q[B])??"").trim();$&&(await Y.addSkillNote(E,B,$),k(P=>({...P,[E]:{...P[E],[B]:""}})),u())},D=async E=>{await Y.deleteSkillNote(E),u()},W=async()=>{!c||!(z!=null&&z.trim())||(await Y.updateSkill(c.id,{title:z.trim()}),b(null),u())},C=async()=>{!x||!x.text.trim()||(await Y.updateSkillNote(x.id,x.text.trim()),S(null),u())},T=async E=>{await Y.toggleSkillNote(E),u()},R=async(E,B)=>{t.find(Q=>Q.id===E)&&(B==="W"&&g(E),await Y.completeSkillStage(E,B),u())},Z=async()=>{if(!p.title.trim())return;const E=await Y.createSkill({pillar:p.pillar,title:p.title.trim(),source_type:p.type,note_d:p.note.trim()});a(!1),v({title:"",type:"book",pillar:"Academic",note:""}),o(E.id),u()},L=async E=>{await Y.deleteSkill(E),r===E&&o(null),u()},j=s==="ALL"?t:t.filter(E=>E.stage===s),O=t.filter(E=>E.stage==="W").length,H=!!c;return n.jsxs("div",{style:X.page,children:[d&&n.jsx("div",{style:X.celebOverlay,children:n.jsxs("div",{style:X.celebBox,children:[n.jsx("div",{style:X.celebEmoji,children:"🏆"}),n.jsx("div",{style:X.celebTitle,children:"Wisdom unlocked!"}),n.jsx("div",{style:X.celebSub,children:"You've implemented this knowledge — that's rare and real."}),n.jsx("button",{onClick:()=>g(null),style:X.celebBtn,children:"Continue"})]})}),n.jsxs("div",{style:X.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:X.eyebrow,children:"Anvil · Skills"}),n.jsx("h1",{style:X.h1,children:"DIKW Skills"}),n.jsx("div",{style:X.subhead,children:"Data → Information → Knowledge → Wisdom"})]}),n.jsxs("div",{style:X.headRight,children:[n.jsxs("div",{style:X.wisdomBadge,children:[n.jsx(co,{size:14,color:"#C9A227"})," ",O," Wisdom",O!==1?"s":""]}),n.jsxs("button",{onClick:()=>{a(!0),o(null)},style:X.addSkillBtn,children:[n.jsx(Ie,{size:15})," Add skill"]})]})]}),n.jsx("div",{style:X.filterBar,children:["ALL",...Be.map(E=>E.id)].map(E=>{const B=Be.find(Q=>Q.id===E),$=s===E;return n.jsx("button",{onClick:()=>i(E),style:{...X.filterBtn,...$?{background:B?B.color:"var(--accent-strong)",color:"#fff",borderColor:"transparent"}:{}},children:B?`${E} · ${B.label}`:"All"},E)})}),n.jsxs("div",{style:{...X.layout,gridTemplateColumns:H?"1fr 1fr":"1fr"},children:[n.jsxs("div",{style:X.cardList,children:[l&&n.jsxs("div",{style:{...X.skillCard,border:"2px dashed #3A7CA5"},children:[n.jsx("div",{style:X.cardTitle,children:"New skill"}),n.jsx("input",{placeholder:"Title (book / video / article name)",value:p.title,onChange:E=>v(B=>({...B,title:E.target.value})),onKeyDown:E=>E.key==="Enter"&&Z(),style:X.input,autoFocus:!0}),n.jsxs("div",{style:X.addRow,children:[n.jsx("select",{value:p.type,onChange:E=>v(B=>({...B,type:E.target.value})),style:X.select,children:Ml.map(E=>n.jsx("option",{value:E.id,children:E.label},E.id))}),n.jsx("select",{value:p.pillar,onChange:E=>v(B=>({...B,pillar:E.target.value})),style:X.select,children:Object.keys(Ii).map(E=>n.jsx("option",{children:E},E))})]}),n.jsx("input",{placeholder:"First note (what did you read/watch?)",value:p.note,onChange:E=>v(B=>({...B,note:E.target.value})),style:X.input}),n.jsxs("div",{style:X.addRow,children:[n.jsxs("button",{onClick:Z,style:X.saveBtn,children:[n.jsx(wt,{size:14})," Save"]}),n.jsxs("button",{onClick:()=>a(!1),style:X.cancelBtn,children:[n.jsx(ft,{size:14})," Cancel"]})]})]}),j.map(E=>{const B=ig(E.stage),$=Be[B],Q=lg(E.type),P=E.stage==="W",et=r===E.id;return n.jsxs("div",{onClick:()=>o(et?null:E.id),style:{...X.skillCard,...et?{borderColor:$.color,borderWidth:2}:{},...P?{background:"rgba(76,154,107,0.05)"}:{}},children:[n.jsxs("div",{style:X.skillCardTop,children:[n.jsxs("div",{style:X.skillMeta,children:[n.jsx("span",{style:{color:Ii[E.pillar]},children:n.jsx(Q.icon,{size:13})}),n.jsx("span",{style:{...X.pillarDot,background:Ii[E.pillar]}}),n.jsxs("span",{style:X.srcLabel,children:[Q.label," · ",E.pillar]})]}),n.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[P&&n.jsx(Yu,{size:14,color:"#4C9A6B"}),n.jsx("button",{onClick:f=>{f.stopPropagation(),L(E.id)},style:X.ghostBtn,children:n.jsx(ft,{size:13})})]})]}),n.jsx("div",{style:X.skillTitle,children:E.title}),n.jsxs("div",{style:X.track,children:[Be.map((f,M)=>{var zt;const it=M<B,st=M===B,bt=(zt=E.completed_stages)==null?void 0:zt[f.id];return n.jsxs("div",{style:X.trackItem,children:[n.jsxs("div",{style:{...X.trackDot,background:it||bt||st?f.color:"var(--border)",boxShadow:st?`0 0 0 3px ${f.color}33`:"none"},children:[(it||st&&bt)&&n.jsx(wt,{size:9,color:"#fff",strokeWidth:3}),st&&!bt&&n.jsx("span",{style:X.trackCurrent,children:f.id}),!it&&!st&&n.jsx(Zd,{size:8,color:"#B5B1A7"})]}),M<Be.length-1&&n.jsx("div",{style:{...X.trackLine,background:it?Be[M+1].color:"var(--border)"}})]},f.id)}),n.jsx("span",{style:{...X.stageTag,background:$.soft,color:$.color},children:$.label})]})]},E.id)}),j.length===0&&!l&&n.jsx("div",{style:X.empty,children:"No skills at this stage yet."})]}),c&&n.jsxs("div",{style:X.detail,children:[n.jsxs("div",{style:X.detailHead,children:[n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsxs("div",{style:X.eyebrow,children:[lg(c.type).label," · ",c.pillar]}),z!==null?n.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginTop:4},children:[n.jsx("input",{autoFocus:!0,value:z,onChange:E=>b(E.target.value),onKeyDown:E=>{E.key==="Enter"&&W(),E.key==="Escape"&&b(null)},style:{...X.input,fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:0,flex:1}}),n.jsx("button",{onClick:W,style:{...X.noteAddBtn,background:"#4C9A6B",width:30,height:30},children:n.jsx(wt,{size:13})}),n.jsx("button",{onClick:()=>b(null),style:{...X.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:30,height:30},children:n.jsx(ft,{size:13})})]}):n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx("div",{style:X.detailTitle,children:c.title}),n.jsx("button",{onClick:()=>b(c.title),style:X.ghostBtn,title:"Edit name",children:n.jsx(Je,{size:13})})]})]}),n.jsx("button",{onClick:()=>{o(null),b(null)},style:X.closeBtn,children:n.jsx(ft,{size:16})})]}),Be.map((E,B)=>{var it,st,bt;const $=B<=h,Q=B===h,P=B<h||((it=c.completed_stages)==null?void 0:it[E.id]),et=B>h,f=((st=c.notes)==null?void 0:st[E.id])||[],M=((bt=m[c.id])==null?void 0:bt[E.id])??"";return n.jsxs("div",{style:{...X.stageBlock,...$?{borderColor:E.color}:{},opacity:et?.45:1},children:[n.jsxs("div",{style:X.stageBlockHead,children:[n.jsx("div",{style:{...X.stageLetter,background:$?E.color:"var(--border)",color:$?"#fff":"#9A968C"},children:P&&!Q?n.jsx(wt,{size:12,color:"#fff",strokeWidth:3}):et?n.jsx(Zd,{size:11,color:"#9A968C"}):E.id}),n.jsxs("div",{style:{flex:1},children:[n.jsx("div",{style:{...X.stageName,color:$?E.color:"#9A968C"},children:E.label}),$&&n.jsx("div",{style:X.stagePrompt,children:E.prompt})]}),P&&!Q&&n.jsx("span",{style:{...X.doneBadge,color:E.color,background:E.soft},children:"Done"})]}),$&&(()=>{var ve,F;const zt=E.id==="W",gt=f.length>0&&f.every(_=>_.done),jt=zt?gt:f.length>0;return n.jsxs(n.Fragment,{children:[f.length>0&&n.jsx("ul",{style:X.noteList,children:f.map(_=>n.jsxs("li",{style:X.noteItem,children:[zt?n.jsx("button",{onClick:()=>T(_.id),style:{...X.checkBox,..._.done?{background:E.color,borderColor:E.color}:{}},children:_.done&&n.jsx(wt,{size:11,color:"#fff",strokeWidth:3})}):n.jsx("span",{style:{...X.noteDot,background:E.color}}),(x==null?void 0:x.id)===_.id?n.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[n.jsx("input",{autoFocus:!0,value:x.text,onChange:at=>S(vt=>({...vt,text:at.target.value})),onKeyDown:at=>{at.key==="Enter"&&C(),at.key==="Escape"&&S(null)},style:{...X.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),n.jsx("button",{onClick:C,style:{...X.noteAddBtn,background:E.color,width:28,height:28},children:n.jsx(wt,{size:12})}),n.jsx("button",{onClick:()=>S(null),style:{...X.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:n.jsx(ft,{size:12})})]}):n.jsx("span",{style:{...X.noteText,...zt&&_.done?{textDecoration:"line-through",color:"var(--text-3)"}:{}},children:_.text}),(x==null?void 0:x.id)!==_.id&&n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>S({id:_.id,text:_.text}),style:X.ghostBtn,children:n.jsx(Je,{size:12})}),n.jsx("button",{onClick:()=>D(_.id),style:X.ghostBtn,children:n.jsx(ft,{size:12})})]})]},_.id))}),f.length===0&&n.jsx("div",{style:X.noNotes,children:zt?"Add the steps to implement this — check each off as you do it.":`No notes yet — ${E.hint}`}),n.jsxs("div",{style:X.noteAddRow,children:[n.jsx("input",{placeholder:zt?"Add a step to implement…":`Add a ${E.label} note…`,value:M,onChange:_=>k(at=>({...at,[c.id]:{...at[c.id],[E.id]:_.target.value}})),onKeyDown:_=>_.key==="Enter"&&w(c.id,E.id),style:X.noteInput}),n.jsx("button",{onClick:()=>w(c.id,E.id),style:{...X.noteAddBtn,background:E.color},children:n.jsx(Ie,{size:14})})]}),Q&&!((ve=c.completed_stages)!=null&&ve[E.id])&&n.jsxs(n.Fragment,{children:[zt&&f.length>0&&!gt&&n.jsxs("div",{style:X.checklistHint,children:[f.filter(_=>_.done).length,"/",f.length," done — check all steps to complete Wisdom"]}),n.jsxs("button",{onClick:()=>R(c.id,E.id),disabled:!jt,style:{...X.advanceBtn,background:jt?E.color:"#C3BFB5",marginTop:10,cursor:jt?"pointer":"not-allowed"},children:[n.jsx(wt,{size:14}),zt?"Mark Wisdom complete":`Complete ${E.label} → ${(F=Be[B+1])==null?void 0:F.label}`]})]})]})})()]},E.id)}),c.stage==="W"&&((V=c.completed_stages)==null?void 0:V.W)&&n.jsxs("div",{style:X.wisdomDone,children:[n.jsx(co,{size:16,color:"#4C9A6B"})," Wisdom achieved — implemented in your life"]})]})]})]})}const X={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box",position:"relative"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},wisdomBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addSkillBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},filterBar:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16},filterBtn:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},layout:{display:"grid",gap:12},cardList:{display:"flex",flexDirection:"column",gap:10},skillCard:{background:"var(--surface)",borderRadius:12,padding:"14px",border:"1.5px solid var(--border)",cursor:"pointer",boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},skillCardTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},skillMeta:{display:"flex",alignItems:"center",gap:6},pillarDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},srcLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)"},skillTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",marginBottom:12},cardTitle:{fontSize:13,fontWeight:700,marginBottom:10},track:{display:"flex",alignItems:"center"},trackItem:{display:"flex",alignItems:"center"},trackDot:{width:22,height:22,borderRadius:"50%",display:"grid",placeItems:"center",flexShrink:0},trackCurrent:{fontSize:9,fontWeight:800,color:"#fff"},trackLine:{width:24,height:3,borderRadius:2},stageTag:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,marginLeft:10},detail:{background:"var(--surface)",borderRadius:14,padding:"18px 16px",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",border:"1.5px solid var(--border)",alignSelf:"start"},detailHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16},detailTitle:{fontSize:18,fontWeight:700,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},stageBlock:{border:"1.5px solid var(--border)",borderRadius:10,padding:"12px 13px",marginBottom:10},stageBlockHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:8},stageLetter:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",fontSize:13,fontWeight:800,flexShrink:0},stageName:{fontSize:13,fontWeight:700},stagePrompt:{fontSize:11.5,color:"var(--text-2)",marginTop:2,lineHeight:1.4},doneBadge:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10,marginLeft:"auto",flexShrink:0},noteList:{margin:"0 0 8px 0",padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6},noteItem:{display:"flex",alignItems:"flex-start",gap:8,fontSize:13,lineHeight:1.4},noteDot:{width:6,height:6,borderRadius:"50%",flexShrink:0,marginTop:5},checkBox:{width:18,height:18,borderRadius:5,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginTop:1,padding:0},checklistHint:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,marginTop:10,textAlign:"center"},noteText:{flex:1,color:"var(--text)"},noNotes:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",marginBottom:8},noteAddRow:{display:"flex",gap:6},noteInput:{flex:1,border:"1px solid var(--border)",borderRadius:7,padding:"7px 10px",fontSize:13,fontFamily:"inherit",outline:"none"},noteAddBtn:{width:32,height:32,border:"none",borderRadius:7,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},advanceBtn:{display:"flex",alignItems:"center",gap:8,border:"none",color:"#fff",padding:"10px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},wisdomDone:{display:"flex",alignItems:"center",gap:8,justifyContent:"center",fontSize:13.5,fontWeight:700,color:"#4C9A6B",padding:12,background:"rgba(76,154,107,0.08)",borderRadius:10,marginTop:4},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box",marginBottom:8},select:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:12.5,fontFamily:"inherit",flex:1},addRow:{display:"flex",gap:8,marginBottom:8},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{fontSize:13,color:"var(--text-3)",padding:"32px 12px",textAlign:"center"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.55)",zIndex:50,display:"grid",placeItems:"center"},celebBox:{background:"var(--surface)",borderRadius:20,padding:"40px 32px",textAlign:"center",maxWidth:320,boxShadow:"0 8px 40px rgba(0,0,0,0.18)"},celebEmoji:{fontSize:52,marginBottom:12},celebTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:8},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:"#4C9A6B",color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},zi=[{id:"aarti",title:"Aarti",html:`<h1>॥ गणपतीची आरती ॥</h1><br/>
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
      </div>`}];function Of(){const[t,e]=y.useState(()=>window.innerWidth<720);return y.useEffect(()=>{const r=()=>e(window.innerWidth<720);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),t}function $f({base:t,count:e}){const[r,o]=y.useState(0);return n.jsxs("div",{style:{maxWidth:560,margin:"0 auto"},children:[n.jsx("div",{style:Et.carouselFrame,children:n.jsx("img",{src:`${t}${r+1}.jpg`,alt:`Adhyay ${r+1}`,style:Et.carouselImg})}),n.jsxs("div",{style:Et.carouselNav,children:[n.jsxs("button",{onClick:()=>o(s=>(s-1+e)%e),style:Et.carouselBtn,children:[n.jsx(yo,{size:16})," Prev"]}),n.jsxs("span",{style:Et.carouselCount,children:["Adhyay ",r+1," / ",e]}),n.jsxs("button",{onClick:()=>o(s=>(s+1)%e),style:Et.carouselBtn,children:["Next ",n.jsx(mn,{size:16})]})]})]})}function Hf(){const t=Of(),[e,r]=y.useState(!1),[o,s]=y.useState("dss"),i=zi.find(d=>d.id===o)||zi[0],l=d=>{s(d),t&&r(!1)},a={...Et.sidebar,...t?Et.sidebarOverlay:{},...t&&!e?Et.sidebarHidden:{}};return n.jsxs("div",{style:Et.shell,children:[n.jsx("style",{children:Uf}),t&&e&&n.jsx("div",{style:Et.backdrop,onClick:()=>r(!1)}),n.jsxs("aside",{style:a,children:[n.jsxs("div",{style:Et.sideHead,children:[n.jsx("div",{style:Et.brand,children:"Anvil · Spiritual"}),t&&n.jsx("button",{onClick:()=>r(!1),style:Et.iconBtn,children:n.jsx(ft,{size:17})})]}),n.jsx("div",{style:Et.sideScroll,children:zi.map(d=>{const g=d.id===o;return n.jsx("button",{onClick:()=>l(d.id),style:{...Et.sideItem,...g?Et.sideItemOn:{}},children:d.title},d.id)})})]}),n.jsxs("main",{style:Et.main,children:[t&&n.jsxs("button",{onClick:()=>r(!0),style:Et.hamburger,children:[n.jsx(Wa,{size:17}),n.jsx("span",{style:Et.hamburgerLabel,children:i.title})]}),n.jsxs("div",{style:Et.contentWrap,children:[i.youtube&&n.jsx("div",{style:Et.videoFrame,children:n.jsx("iframe",{src:`https://www.youtube.com/embed/${i.youtube}`,title:i.title,style:Et.video,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},i.youtube)}),i.carousel?n.jsx($f,{base:i.imageBase,count:i.carousel}):n.jsx("div",{className:"spiritual-content",dangerouslySetInnerHTML:{__html:i.html}})]})]})]})}const Uf=`
.spiritual-content { font-family: 'Inter', system-ui, sans-serif; color: var(--text); line-height: 1.9; font-size: 16px; text-align: center; }
.spiritual-content h1 { font-family: 'Fraunces', Georgia, serif; font-size: 24px; color: #8268B0; margin: 8px 0 18px; letter-spacing: -0.01em; }
.spiritual-content h2 { font-family: 'Fraunces', Georgia, serif; font-size: 18px; color: #7A5EA8; margin: 20px 0 8px; }
.spiritual-content h3 { font-size: 15px; color: var(--text-3); text-transform: uppercase; letter-spacing: 0.06em; margin: 18px 0 6px; }
.spiritual-content b { color: #8268B0; }
.spiritual-content div { text-align: center; }
`,Et={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:240,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.15)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.35)",zIndex:20},sideHead:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 14px 12px"},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700},sideScroll:{flex:1,overflowY:"auto",padding:"0 8px 16px"},sideItem:{display:"block",width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text-2)",textAlign:"left",marginBottom:2},sideItemOn:{background:"rgba(130,104,176,0.12)",color:"#8268B0",fontWeight:700},main:{flex:1,padding:"26px 22px",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:220},contentWrap:{background:"var(--surface)",borderRadius:14,padding:"26px 28px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",maxWidth:760,margin:"0 auto"},videoFrame:{position:"relative",width:"100%",maxWidth:600,margin:"0 auto 22px",aspectRatio:"16 / 9",borderRadius:12,overflow:"hidden",background:"#000"},video:{position:"absolute",inset:0,width:"100%",height:"100%",border:"none"},carouselFrame:{background:"var(--surface-2)",borderRadius:12,padding:8,border:"1px solid var(--border)"},carouselImg:{width:"100%",borderRadius:8,display:"block"},carouselNav:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:14},carouselBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},carouselCount:{fontSize:13,fontWeight:700,color:"#8268B0",fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"none",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,color:"var(--text-2)"}},Ne={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},ag=Object.keys(Ne),Gf=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Vf=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Yf=()=>new Date().toISOString().slice(0,10),Qf=(t,e)=>`${Vf[e-1]} ${t}`,Kf=(t,e)=>{const r=new Date(t,e,0).getDate();return Array.from({length:r},(o,s)=>`${t}-${String(e).padStart(2,"0")}-${String(s+1).padStart(2,"0")}`)},Xf=(t,e)=>{const r=new Date(t,e-1,1).getDay();return r===0?6:r-1};function Jf(){const t=Yf(),[e,r]=y.useState(new Date().getFullYear()),[o,s]=y.useState(new Date().getMonth()+1),[i,l]=y.useState([]),[a,d]=y.useState([]),[g,p]=y.useState({}),[v,m]=y.useState(null),[k,x]=y.useState(!1),[S,z]=y.useState(!1),[b,u]=y.useState({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:t}),[c,h]=y.useState(null),w=y.useCallback(async()=>{const[f,M,it]=await Promise.all([Y.getTopics(),Y.getDueToday(),Y.getCalendar(e,o)]);l(f),d(M),p(it)},[e,o]);y.useEffect(()=>{w()},[w]);const D=async f=>{await Y.toggleReviewDone(f),w()},W=async()=>{const f=b.intervals.split(",").map(M=>parseInt(M.trim(),10)).filter(M=>!isNaN(M));!b.topic.trim()||f.length===0||(await Y.createTopic({pillar:b.pillar,topic:b.topic.trim(),intervals:f,learned_date:b.learned_date||t}),u({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:t}),z(!1),w())},{deleteItem:C,toasts:T,handleUndo:R,handleDismiss:Z}=fn(Y.deleteTopic,Y.restoreTopic,w),L=(f,M)=>C(f,M),j=f=>h({id:f.id,topic:f.topic,pillar:f.pillar,intervals:(f.intervals||[]).join(", "),learned_date:f.learned_date}),O=async()=>{if(!c)return;const f=c.intervals.split(",").map(M=>parseInt(M.trim(),10)).filter(M=>!isNaN(M)&&M>=0);!c.topic.trim()||f.length===0||(await Y.updateTopic(c.id,{topic:c.topic.trim(),pillar:c.pillar,learned_date:c.learned_date,intervals:f}),h(null),w())},H=()=>{o===1?(r(f=>f-1),s(12)):s(f=>f-1),m(null)},V=()=>{o===12?(r(f=>f+1),s(1)):s(f=>f+1),m(null)},E=i.filter(f=>!f.cemented),B=i.filter(f=>f.cemented),$=Kf(e,o),Q=Xf(e,o),P=y.useMemo(()=>{const f={};return i.forEach(M=>M.reviews.forEach(it=>{it.done||(f[it.due_date]=f[it.due_date]||[]).push({topic:M.topic,pillar:M.pillar,stage:it.stage})})),f},[i]),et=v?i.flatMap(f=>f.reviews.filter(M=>M.due_date===v).map(M=>({...M,topic:f.topic,pillar:f.pillar,total:f.reviews.length}))):[];return n.jsxs("div",{style:K.page,children:[n.jsxs("div",{style:K.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:K.eyebrow,children:"Anvil · Revision"}),n.jsx("h1",{style:K.h1,children:"Spaced Repetition"})]}),n.jsxs("button",{onClick:()=>z(!0),style:K.addBtn,children:[n.jsx(Ie,{size:15})," Add topic"]})]}),S&&n.jsxs("div",{style:K.addBox,children:[n.jsx("input",{autoFocus:!0,placeholder:"What did you learn?",value:b.topic,onChange:f=>u(M=>({...M,topic:f.target.value})),onKeyDown:f=>f.key==="Enter"&&W(),style:K.input}),n.jsxs("div",{style:K.addRow,children:[n.jsx("select",{value:b.pillar,onChange:f=>u(M=>({...M,pillar:f.target.value})),style:K.select,children:ag.map(f=>n.jsx("option",{children:f},f))}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[n.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),n.jsx("input",{type:"date",value:b.learned_date,onChange:f=>u(M=>({...M,learned_date:f.target.value})),style:{...K.select,fontSize:13}})]}),n.jsx("div",{style:{flex:1,minWidth:0},children:n.jsx("input",{value:b.intervals,onChange:f=>u(M=>({...M,intervals:f.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:K.input})})]}),n.jsxs("div",{style:K.addRow,children:[n.jsxs("button",{onClick:W,style:K.saveBtn,children:[n.jsx(wt,{size:14})," Save"]}),n.jsxs("button",{onClick:()=>z(!1),style:K.cancelBtn,children:[n.jsx(ft,{size:14})," Cancel"]})]})]}),a.length>0&&n.jsxs("div",{style:K.section,children:[n.jsxs("div",{style:K.sectionTitle,children:[n.jsx(Vu,{size:15,color:"#C2536B"}),"Due Today",n.jsx("span",{style:K.badge,children:a.length})]}),a.map(f=>{var it,st;const M=((it=Ne[f.pillar])==null?void 0:it.dot)||"#9A968C";return n.jsxs("div",{style:{...K.reviewCard,borderLeft:`3px solid ${M}`,...f.is_missed?{opacity:.85}:{}},children:[n.jsx("button",{onClick:()=>D(f.review_id),style:{...K.checkbox,...f.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:f.done&&n.jsx(wt,{size:12,color:"#fff",strokeWidth:3})}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:K.reviewTopic,children:f.topic}),n.jsxs("div",{style:K.reviewMeta,children:[n.jsxs("span",{style:{...K.stageTag,background:((st=Ne[f.pillar])==null?void 0:st.soft)||"rgba(0,0,0,0.05)",color:M},children:["Review ",f.stage,"/",f.total_stages]}),f.is_missed&&n.jsxs("span",{style:K.missedTag,children:["missed · ",f.due_date]})]})]})]},f.review_id)})]}),n.jsxs("div",{style:K.section,children:[n.jsxs("div",{style:K.sectionTitle,children:["Active Topics ",n.jsx("span",{style:K.badge,children:E.length})]}),E.length===0&&n.jsx("div",{style:K.empty,children:"No active topics. Add something you learned today."}),E.map(f=>{var bt,zt;const M=((bt=Ne[f.pillar])==null?void 0:bt.dot)||"#9A968C",it=((zt=Ne[f.pillar])==null?void 0:zt.soft)||"rgba(0,0,0,0.05)",st=f.reviews.filter(gt=>gt.done).length;return(c==null?void 0:c.id)===f.id?n.jsxs("div",{style:K.addBox,children:[n.jsx("input",{autoFocus:!0,value:c.topic,onChange:gt=>h(jt=>({...jt,topic:gt.target.value})),onKeyDown:gt=>gt.key==="Enter"&&O(),placeholder:"Topic",style:K.input}),n.jsxs("div",{style:K.addRow,children:[n.jsx("select",{value:c.pillar,onChange:gt=>h(jt=>({...jt,pillar:gt.target.value})),style:K.select,children:ag.map(gt=>n.jsx("option",{children:gt},gt))}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[n.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),n.jsx("input",{type:"date",value:c.learned_date,onChange:gt=>h(jt=>({...jt,learned_date:gt.target.value})),style:{...K.select,fontSize:13}})]}),n.jsx("div",{style:{flex:1,minWidth:0},children:n.jsx("input",{value:c.intervals,onChange:gt=>h(jt=>({...jt,intervals:gt.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:K.input})})]}),n.jsx("div",{style:K.editHint,children:"Changing the date or intervals reschedules the reviews (completed steps are kept where they still apply)."}),n.jsxs("div",{style:K.addRow,children:[n.jsxs("button",{onClick:O,style:K.saveBtn,children:[n.jsx(wt,{size:14})," Save plan"]}),n.jsxs("button",{onClick:()=>h(null),style:K.cancelBtn,children:[n.jsx(ft,{size:14})," Cancel"]})]})]},f.id):n.jsxs("div",{style:K.topicCard,children:[n.jsxs("div",{style:K.topicHead,children:[n.jsx("span",{style:{...K.dot,background:M}}),n.jsx("span",{style:K.topicName,children:f.topic}),n.jsx("span",{style:K.topicPillar,children:f.pillar}),n.jsxs("span",{style:K.topicProgress,children:[st,"/",f.reviews.length," done"]}),n.jsx("button",{onClick:()=>j(f),style:K.ghostBtn,title:"Edit plan",children:n.jsx(Je,{size:12})}),n.jsx("button",{onClick:()=>L(f.id,f.topic),style:K.ghostBtn,title:"Delete",children:n.jsx(ft,{size:13})})]}),n.jsxs("div",{style:K.reviewDots,children:[f.reviews.map(gt=>{gt.due_date<t;const jt=gt.due_date===t;return n.jsx("button",{onClick:()=>D(gt.id),title:`Review ${gt.stage} · ${gt.due_date}${gt.done?" · Done":""}`,style:{...K.reviewDot,background:gt.done?M:jt?it:"var(--hover)",border:`2px solid ${gt.done||jt?M:"var(--border)"}`,color:gt.done?"#fff":M},children:gt.stage},gt.id)}),n.jsxs("span",{style:K.learnedDate,children:["Learned ",f.learned_date]})]})]},f.id)})]}),B.length>0&&n.jsxs("div",{style:K.section,children:[n.jsxs("button",{onClick:()=>x(f=>!f),style:K.cementedToggle,children:[k?n.jsx(Da,{size:15}):n.jsx(mn,{size:15}),n.jsx(co,{size:14,color:"#C9A227"}),"Cemented",n.jsx("span",{style:{...K.badge,background:"rgba(201,162,39,0.12)",color:"#8A6E1A"},children:B.length})]}),k&&B.map(f=>{var it;const M=((it=Ne[f.pillar])==null?void 0:it.dot)||"#9A968C";return n.jsx("div",{style:{...K.topicCard,opacity:.75},children:n.jsxs("div",{style:K.topicHead,children:[n.jsx("span",{style:{...K.dot,background:M}}),n.jsx("span",{style:K.topicName,children:f.topic}),n.jsx("span",{style:K.topicPillar,children:f.pillar}),n.jsx(co,{size:13,color:"#C9A227",style:{marginLeft:"auto"}})]})},f.id)})]}),n.jsxs("div",{style:K.calCard,children:[n.jsxs("div",{style:K.calHead,children:[n.jsx("button",{onClick:H,style:K.calNav,children:"‹"}),n.jsxs("div",{style:K.calTitle,children:[Qf(e,o)," · Review Calendar"]}),n.jsx("button",{onClick:V,style:K.calNav,children:"›"})]}),n.jsx("div",{style:K.calDow,children:Gf.map(f=>n.jsx("div",{style:K.calDowCell,children:f},f))}),n.jsxs("div",{style:K.calGrid,children:[Array.from({length:Q}).map((f,M)=>n.jsx("div",{},`p${M}`)),$.map((f,M)=>{const it=P[f]||[],st=f===t,bt=f===v,zt=f<t,gt=bt?"#fff":st?"var(--text)":zt?"var(--text-2)":"var(--text-3)";return n.jsxs("button",{onClick:()=>m(bt?null:f),style:{...K.calDay,background:bt?"var(--accent-strong)":st?"var(--hover)":"var(--surface)",borderColor:st||bt?"var(--accent-strong)":"var(--border)"},children:[n.jsx("span",{style:{...K.calDayNum,color:gt,fontWeight:st||bt?700:600},children:M+1}),it.slice(0,2).map((jt,ve)=>{var F;return n.jsxs("span",{title:jt.topic,style:{...K.calItem,color:bt?"#fff":((F=Ne[jt.pillar])==null?void 0:F.dot)||"var(--text-2)"},children:[ve+1,". ",jt.topic]},ve)}),it.length>2&&n.jsxs("span",{style:{...K.calMore,color:bt?"#fff":"var(--text-3)"},children:["+",it.length-2," more"]})]},f)})]}),v&&n.jsxs("div",{style:K.dayDetail,children:[n.jsxs("div",{style:K.dayDetailTitle,children:["Reviews for ",v]}),et.length===0?n.jsx("div",{style:K.empty,children:"No reviews scheduled for this day."}):et.map((f,M)=>{var st,bt;const it=((st=Ne[f.pillar])==null?void 0:st.dot)||"#9A968C";return n.jsxs("div",{style:{...K.reviewCard,borderLeft:`3px solid ${it}`},children:[n.jsx("button",{onClick:()=>D(f.id),style:{...K.checkbox,...f.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:f.done&&n.jsx(wt,{size:12,color:"#fff",strokeWidth:3})}),n.jsxs("div",{children:[n.jsxs("div",{style:K.reviewTopic,children:[M+1,". ",f.topic]}),n.jsxs("span",{style:{...K.stageTag,background:((bt=Ne[f.pillar])==null?void 0:bt.soft)||"rgba(0,0,0,0.05)",color:it},children:["Review ",f.stage,"/",f.total]})]})]},f.id)})]})]}),n.jsx(vn,{toasts:T,onUndo:R,onDismiss:Z})]})}const K={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},addBox:{background:"var(--surface)",borderRadius:12,padding:16,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},addRow:{display:"flex",gap:8,alignItems:"center"},editHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",minWidth:0},select:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 10px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},section:{marginBottom:20},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},reviewCard:{display:"flex",alignItems:"center",gap:12,background:"var(--surface)",borderRadius:10,padding:"12px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},checkbox:{width:22,height:22,borderRadius:6,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,padding:0},reviewTopic:{fontSize:13.5,fontWeight:600,marginBottom:4},reviewMeta:{display:"flex",alignItems:"center",gap:8},stageTag:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10},missedTag:{fontSize:11,color:"#C2536B",fontWeight:600},topicCard:{background:"var(--surface)",borderRadius:12,padding:"13px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},topicHead:{display:"flex",alignItems:"center",gap:8,marginBottom:10},dot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},topicName:{fontSize:14,fontWeight:600,flex:1},topicPillar:{fontSize:11,color:"var(--text-3)",fontWeight:500},topicProgress:{fontSize:11,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:10},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},reviewDots:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},reviewDot:{width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",fontSize:11,fontWeight:700,padding:0},learnedDate:{fontSize:11,color:"var(--text-3)",marginLeft:"auto"},cementedToggle:{display:"flex",alignItems:"center",gap:8,border:"none",background:"none",cursor:"pointer",fontSize:13,fontWeight:700,color:"var(--text-2)",padding:"4px 0",fontFamily:"inherit",marginBottom:8},empty:{fontSize:13,color:"var(--text-3)",padding:"16px 0",textAlign:"center"},calCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{border:"none",background:"none",fontSize:20,cursor:"pointer",color:"var(--text-2)",padding:"0 6px",lineHeight:1},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4},calDay:{minHeight:62,border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,cursor:"pointer",fontFamily:"inherit",display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"flex-start",gap:1,position:"relative",padding:"3px 4px",overflow:"hidden",textAlign:"left"},calDayNum:{fontSize:11,lineHeight:1.1,marginBottom:1},calItem:{fontSize:8.5,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",lineHeight:1.3,textAlign:"left"},calMore:{fontSize:8,fontWeight:700,opacity:.85,lineHeight:1.2},dayDetail:{marginTop:16,paddingTop:16,borderTop:"1px solid var(--border)"},dayDetailTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10}},Oo=[{id:1,title:"Regular Habits",cards:[{id:1,text:"1. I always do everything I need to do, when I need to do it. "},{id:2,text:"2. I never argue or let my emotions work against me. "},{id:3,text:"3. I have a good memory. I easily and automatically remember any name or anything that is important to me. "},{id:4,text:"4. I eat only what I should. "},{id:5,text:"5. I am a good listener. I hear everything that is said. I am attentive, interested, and aware of everything that is going on around me. "},{id:6,text:"6. I have the courage to state my opinions. I take responsibility for myself and everything I say and do."},{id:7,text:"7. I never spend more than I earn. I am financially responsible, both for my present and for my future."},{id:8,text:"8. I set goals and I follow them. I set my sights, take the appropriate action, and achieve my goals."},{id:9,text:"9. I spend time with my family and my loved ones. I enjoy sharing their lives with mine and my life with theirs."}]},{id:2,title:"Motivational",cards:[{id:1,text:"1. I can do anything I believe I can do. I’ve got it and every day I get more of it. I have talent, skills, and ability"},{id:2,text:"2. I set goals and I reach them. I know what I want out of life. I go after it and I get it. "},{id:3,text:"3. People like me, and I feel good about myself. I have a sense of pride in whoa am and I believe in myself. Nothing seems to stop me. I have a lot of determination. "},{id:4,text:"4. I turn problems into advantages. I find possibilities in things that other people never give a chance."},{id:5,text:"5. I have a lot of energy––I am very alive. I enjoy life and I can tell it and so can others"},{id:6,text:"6. I keep myself up, looking ahead, and liking it. I know that I can accomplish anything I choose, and I refuse to let anything negative hold me back or stand in my way. I am not afraid of anything or anyone. I have strength, power, conviction, and confidence. "},{id:7,text:"7. I like challenges and I meet them head on, face to face––today especially. I am on top of the world and I’m going for it. "},{id:8,text:"8. I have a clear picture in my mind of what I want. I can see it in front of me. "},{id:9,text:"9. I know what I want and I know how to get it. I know that it’s all up to me and I know I can do it. Roadblocks don’t bother me. They just mean that I am alive and running, and I’m not going to stand still for anything. "},{id:10,text:"10. I trust myself I’ve got what it takes––plenty of it––and I know how to use it. "},{id:11,text:"11. Today, more than ever. Today I am unstoppable. I’ve got myself together and I’m getting more together every day. And today––look out world, here I come. "},{id:12,text:"12. Limitations? I don’t even recognize them as limitations. There is no challenge I can’t conquer; there is no wall I can’t climb over. "},{id:13,text:"13. There is no problem I can’t defeat or turn around and make it work for me. I stand tall. I am honest and sincere. I like to deal with people and they like me. "},{id:14,text:"14. I think well; I think clearly. I am organized; I am in control of myself, and everything about me. I call my shots and no one has to call them for me. I never blame anyone else for the circumstances of my life. "},{id:15,text:"15. I accept my failings and move past them as easily as I accept the rewards for my victories. I never demand perfection of myself, but I expect the very best of what I have to give––and that’s what I get. I never give myself excuses. "},{id:16,text:"16. I get things done on time and in the right way. Today I have the inner strength to do more than ever. I am an exceptional human being. "},{id:17,text:"17. My goals and my incredible belief in myself turn my goals into reality. I have the power to live my dreams."},{id:18,text:"18.  I believe in them like I believe in myself. And that belief is so strong that there is nothing that diminishes my undefeatable spirit. "}]},{id:3,title:"Organized planning",cards:[{id:1,text:"1. I am organized and in control of my life. I am in control of myself, my thoughts, my time, my actions, and my future. "},{id:2,text:"2. I know what to do and when to do it, and I do everything I need to do, when I need to do it. "},{id:3,text:"3. I program my mind to make the maximum use of my time. I am in control of my time and how to use it. I like being organized, efficient, and on top of things."},{id:4,text:"4. Controlling my time keeps me that way. "},{id:5,text:"5. I never waste time––I always “plan” time. And because I plan my time, I always have time to do the things I choose to do. "},{id:6,text:"6. Each day I become more organized and in control of all areas of my life––at home, at work, in my mind and in my thoughts, in everything that I do. "},{id:7,text:"7. I am very well organized. Each night I make a list of things I need to do the next day. I set my priorities and I follow them. "},{id:8,text:"8. I am always on time. I am always right where I need to be, exactly when I need to be there. "},{id:9,text:"9. Being on time is easy for me and the more I control my time and the more organized I become, the easier it is. "},{id:10,text:"10. I am in control of my feelings, my emotions, my attitudes, and my needs. I control them; they do not control me. "},{id:11,text:"11. I have the winning vote in the outcome of my own actions. And I choose to live my life by choice, not chance. Therefore, I take the time to take control."},{id:12,text:"12. I have an organized and orderly mind. Because I think in an organized way, I conduct my life in an organized manner. "},{id:13,text:"13. I think in the most positive and productive way at all times and in all things. The way I think is the way I live––and I think “right.” "},{id:14,text:"14. I am the director of my destiny. I know where I am going and I know why I am going there. My earthly life is in my hands and in my control. "},{id:15,text:"15. I control my goals and the achievement of my goals. I organize my goals by writing each of them down, along with the steps I need to reach them. One of the reasons for my success is that my goals are clearly defined and organized."},{id:16,text:"16. I am in complete control of what I think and how I think. Therefore, I choose to think only those thoughts which help me and which are of genuine benefit to me."}]},{id:4,title:"Solving Problems",cards:[{id:1,text:"1. I’m good at solving problems. I like challenges and I meet them head on. "},{id:2,text:"2. Problems are my teachers. They help me to learn and grow. Without them, I would be going nowhere. With them, I am moving forward in the direction of my own goals. "},{id:3,text:"3. There is no problem which I cannot conquer. I am strong in mind, body, and spirit. My will, my strength, and my determination are always greater than any problem I face."},{id:4,text:"4. When I meet a new problem, I do not see the problem as my enemy. I know that finding the solution to the problem will move me forward in my own personal growth."},{id:5,text:"5. Because I know that problems are a key ingredient in my spiritual and mental education and preparation, I recognize that all problems are important to me. "},{id:6,text:"6. I do not fear problems, I solve them. I do not ignore problems, I confront them. I do not avoid problems, I conquer them. "},{id:7,text:"7. I know that every problem holds within itself the keys to its own solution. Therefore, the better I understand the problem, the clearer I am able to see its solution. "},{id:8,text:"8. Having problems is not a problem for me. I am confident, self-assured, positive, and determined. I always know that I am going to overcome any problem I encounter––and I always do. "},{id:9,text:"9. I am good at breaking large obstacles down into smaller pieces that are easier to handle. And I never make any problem appear to be larger than it actually is. "},{id:10,text:"10. I never worry. I turn “worry time” into positive, constructive, “solution time.” I keep my mind alert and open to all solutions—and solutions come quickly and easily to me. "},{id:11,text:"11. I have learned to recognize that many problems carry with them benefits and potential opportunities which would not have presented themselves had the problem not occurred in the first place. "},{id:12,text:"12. I do not seek to live a life which is free from all problems. Instead, I choose to live a life of finding solutions and enjoying the benefits which those solutions create."},{id:13,text:"13. Challenge, conquer, solution, and win are words which I live by daily. Challenges are opportunities. Conquering them is the inevitable outcome. "},{id:14,text:"14. “Solutions” are the stepping stones to my success, and “Winning” is my way of life."}]},{id:5,title:"Self Esteem",cards:[{id:1,text:"1. I really am very special. I like who I am and I feel good about myself. "},{id:2,text:"2. Although I always work to improve myself and I get better every day, I like who I am today. And tomorrow, when I’m even better, I’ll like myself then, too. "},{id:3,text:"3. It’s true that there really is no one else like me in the entire world. There never was another me before, and there will never be another me again. "},{id:4,text:"4. I am unique––from the top of my head to the bottom of my feet. In some ways I may look and act and sound like some others––but I am not them. I am me."},{id:5,text:"5. I wanted to be somebody––and now I know I am I would rather be me than anyone else in the world. "},{id:6,text:"6. I like how I feel and I like how I think and I like how I do things. I approve of me and I approve of who I am."},{id:7,text:"7. I have many beautiful qualities about me. I have talents and skills and abilities. I even have talents that I don’t even know about yet. And I am discovering new talents inside myself all the time. "},{id:8,text:"8. I am positive. I am confident. I radiate good things. If you look closely, you can even see a glow around me."},{id:9,text:"9. I am full of life. I like life and I’m glad to be alive. I am a very special person, living at a very special time. "},{id:10,text:"10. I am intelligent. My mind is quick and alert and clever and fun. I think good thoughts, and my mind makes things work right for me. "},{id:11,text:"11. I have a lot of energy and enthusiasm and vitality. I am exciting and I really enjoy being me. "},{id:12,text:"12. I like to be around other people and other people like to be around me. People like to hear what I have to say and know what I have to think. "},{id:13,text:"13. I smile a lot. I am happy on the inside and I am happy on the outside. "},{id:14,text:"14. I am interested in many things. I appreciate all the blessings I have, and the things that I learn, and all the things I will learn today and tomorrow and forever––just as long as I am. "},{id:15,text:"15. I am warm, sincere, honest, and genuine. I am all of these things and more. And all of these things are me. I like who I am, and I’m glad to be me."}]},{id:6,title:"Self-Responsibility",cards:[{id:1,text:"1. I take full responsibility for everything about me––even the thoughts that I think. I am in control of the vast resources of my own mind."},{id:2,text:"2. I alone am responsible for what I do and what I tell myself about me. No one can share this responsibility with me. "},{id:3,text:"3. I also allow others to accept their responsibilities far themselves and I do not try to accept their responsibilities for them. "},{id:4,text:"4. I enjoy being responsible. It puts me in charge of being me––and that’s a challenge I enjoy. "},{id:5,text:"5. I allow no one else, at any time, to assume control or responsibility over my life or over anything that I do. My responsibility to others is an extension of my own responsibility to myself. "},{id:6,text:"6. I choose to leave nothing about me up to chance. When it comes to me––and anything in my life––I choose to CHOOSE. "},{id:7,text:"7. My choices are mine alone to make for myself. I do not, at any time, allow anyone else to make my choices for me. And I accept full responsibility for every choice and decision I make. "},{id:8,text:"8. I always meet all of the obligations which I accept. And I accept no obligations which I will not meet. "},{id:9,text:"9. I am trustworthy. I can be counted on. I have accepted winning responsibility for myself––and I always live up to the responsibilities I accept. "},{id:10,text:"10. There is no they on whom I lay the blame, or with whom I share my own personal responsibilities. I have learned the great secret of mastering my own destiny. I have learned that “they” is “me.” "},{id:11,text:"11. I have no need to make excuses and no one needs to carry my responsibility for me. I gladly carry my own weight––and I carry it well. "},{id:12,text:"12. Each day I acknowledge and accept the responsibility––not only for my own actions––but also for my emotions, my thoughts, and my attitude. "},{id:13,text:"13. I accept the responsibility for living my life in a way which creates my strengths, my happiness, my positive, healthy beliefs, and for my past, my present, and my future."}]},{id:7,title:"Freedom from worry",cards:[{id:1,text:"1. I never worry. Instead of worrying, I find solutions and I act on them. "},{id:2,text:"2. My mind is constantly in tune with the positive. It is bright, cheerful, enthusiastic, and full of good, positive thoughts and ideas. "},{id:3,text:"3. I am able to relax easily and comfortably in my body and in my mind. I am calm, confident, and self-assured. "},{id:4,text:"4. My mind is orderly and well-organized. I consciously choose what I think and I always choose those thoughts which are the most positive and beneficial for me. "},{id:5,text:"5. All of my thoughts create healthiness within me. My mind dwells only on those thoughts which create more harmony, balance, and well-being within me and in the world around me. "},{id:6,text:"6. I automatically, and always, think in a decisive and determined way. "},{id:7,text:"7. I am full of resolution and the absolute assurance of the best possible outcome in everything that I do. "},{id:8,text:"8. I choose to look at the world around me in the bright, healthy light of optimism and self-assurance. "},{id:9,text:"9. I do only those things which are best for me. I create the best within myself, I attract the best in others, and I find the best in the world around me. "},{id:10,text:"10. I willingly, and without fail, take care of the duties and obligations which I have accepted for myself."},{id:11,text:"11. I commit only to those responsibilities which I know I can fulfill. "},{id:12,text:"12. I focus the attention of my mind only on those things that I can do something about. If I cannot affect it or direct it––I accept it. "},{id:13,text:"13. I keep my mind too busy thinking good, healthy, positive, constructive, and productive thoughts to ever have any time for worry. "},{id:14,text:"14. I control the thoughts I choose. No thought, at any time, can dwell in my mind without my approval or permission. I never worry."}]},{id:8,title:"Eating Habits",cards:[{id:1,text:"1. I am in control of myself in every way––at all times and in all situations. "},{id:2,text:"2. Each time I sit down to eat I reaffirm my determination to achieve my goal. By eating right, and never giving in, I am reaching the weight I want. "},{id:3,text:"3. Whether eating in or eating out, I really enjoy eating less. "},{id:4,text:"4. I never feel the need to finish the food in front of me. I eat only what I should––and never one bite more. "},{id:5,text:"5. One way to weight-loss that’s easy and works, is less food on my plate, and less on my fork. "},{id:6,text:'6. By ordering less when I eat out, and by serving myself smaller portions at home, I keep myself aware of the importance of staying with my goal––each and every day. “Less on my plate means less on my waist."'},{id:7,text:"7. When I sit down to eat, at no time do I allow anyone else to influence, tempt, or discourage me in any negative way."},{id:8,text:"8. What I eat, and the goals I reach, are up to me. And I give no one the right to hinder or control my success."},{id:9,text:"9. Although others may benefit from my success, I. am achieving my weight-loss goals for my own personal reasons––for myself, my life, my future, and my own personal well-being."},{id:10,text:"10. I am never, at any time, tempted to take one bite more than I should. I am strong, I am capable of reaching my goal, and I am doing it."},{id:11,text:"11. Being in situations which put a lot of food in front of me is not a problem to me now. I simply say “No” to the food and “Yes” to my success."},{id:12,text:"12. I enjoy sitting down to eat. Each time I do I conquer my past, and I create a trimmer, happier, more self-confident future in front of me. "},{id:13,text:"13. When I sit down to eat, I do not need someone else to remind me of my goal, or to keep me from eating something I should not. I take full responsibility for myself, and no one else has to do it for me. "},{id:14,text:"14. Controlling my weight, and my appetite, is easy for me now. I enjoy smaller portions, smaller bites, and a slower, healthier, more relaxed way of eating. "},{id:15,text:"15. I have set my goal and I am staying with it. I have turned mealtime into “achievement time.”"}]}],dg=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#3A7CA5","#4C9A6B"],Ti=t=>dg[t%dg.length],Zf=t=>t+"1A",Ju="anvil_affirmation_favs",qf=()=>{try{return new Set(JSON.parse(localStorage.getItem(Ju)||"[]"))}catch{return new Set}};function tv(){const[t,e]=y.useState(0),[r,o]=y.useState(0),[s,i]=y.useState(qf);y.useEffect(()=>{localStorage.setItem(Ju,JSON.stringify([...s]))},[s]);const l=(z,b)=>`${z}#${b.id}`,a=t==="FAV"?Oo.flatMap((z,b)=>z.cards.filter(u=>s.has(l(z.title,u))).map(u=>({...u,color:Ti(b),title:z.title}))):Oo[t].cards.map(z=>({...z,color:Ti(t),title:Oo[t].title})),d=a.length,g=Math.min(r,Math.max(0,d-1)),p=a[g],v=z=>{e(z),o(0)},m=y.useCallback(()=>o(z=>Math.max(0,z-1)),[]),k=y.useCallback(()=>o(z=>Math.min(d-1,z+1)),[d]);y.useEffect(()=>{const z=b=>{b.key==="ArrowLeft"&&m(),b.key==="ArrowRight"&&k()};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[m,k]);const x=z=>i(b=>{const u=new Set(b);return u.has(z)?u.delete(z):u.add(z),u}),S=p?p.color:"#8268B0";return n.jsxs("div",{style:kt.page,children:[n.jsxs("div",{style:kt.head,children:[n.jsx("div",{style:kt.eyebrow,children:"Anvil · Affirmations"}),n.jsx("h1",{style:kt.h1,children:"Affirmations"}),n.jsx("div",{style:kt.subhead,children:"One at a time — read it, mean it."})]}),n.jsxs("div",{style:kt.filterBar,children:[Oo.map((z,b)=>{const u=t===b,c=Ti(b);return n.jsxs("button",{onClick:()=>v(b),style:{...kt.chip,...u?{background:c,color:"#fff",borderColor:c}:{}},children:[n.jsx("span",{style:{...kt.catDot,background:u?"#fff":c}})," ",z.title," ",n.jsx("span",{style:kt.chipCount,children:z.cards.length})]},z.title)}),n.jsxs("button",{onClick:()=>v("FAV"),style:{...kt.chip,...t==="FAV"?{background:"#C9A227",color:"#fff",borderColor:"#C9A227"}:{}},children:[n.jsx(os,{size:12,fill:t==="FAV"?"#fff":"none"})," Favorites ",n.jsx("span",{style:kt.chipCount,children:s.size})]})]}),d===0?n.jsxs("div",{style:kt.empty,children:[n.jsx(os,{size:22,color:"#C3BFB5"}),n.jsx("div",{children:"No favorites yet — tap the star on a card to save it here."})]}):n.jsxs("div",{style:kt.viewer,children:[n.jsxs("div",{style:{...kt.card,borderTop:`4px solid ${S}`},children:[n.jsx("div",{style:{...kt.cardCat,color:S,background:Zf(S)},children:p.title}),n.jsx("button",{onClick:()=>x(l(p.title,p)),style:{...kt.favBtn,color:s.has(l(p.title,p))?"#C9A227":"#C3BFB5"},title:"Favorite",children:n.jsx(os,{size:20,fill:s.has(l(p.title,p))?"#C9A227":"none"})}),n.jsx(Zm,{size:30,color:S,style:{opacity:.25}}),n.jsx("p",{style:kt.cardText,children:p.text.trim()})]}),n.jsxs("div",{style:kt.navRow,children:[n.jsxs("button",{onClick:m,disabled:g===0,style:{...kt.navBtn,...g===0?kt.navBtnDisabled:{}},children:[n.jsx(yo,{size:18})," Back"]}),n.jsxs("span",{style:{...kt.counter,color:S},children:[g+1," ",n.jsxs("span",{style:kt.counterTotal,children:["/ ",d]})]}),n.jsxs("button",{onClick:k,disabled:g===d-1,style:{...kt.navBtn,...g===d-1?kt.navBtnDisabled:{}},children:["Next ",n.jsx(mn,{size:18})]})]}),n.jsx("div",{style:kt.dots,children:a.map((z,b)=>n.jsx("button",{onClick:()=>o(b),style:{...kt.dot,...b===g?{background:S,transform:"scale(1.5)"}:{}},title:`${b+1}`},b))})]})]})}const kt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:22},chip:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipCount:{fontSize:11,fontWeight:700,opacity:.7},catDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},empty:{display:"flex",flexDirection:"column",alignItems:"center",gap:10,fontSize:13.5,color:"var(--text-3)",padding:"56px 12px",textAlign:"center",background:"var(--surface)",borderRadius:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},viewer:{display:"flex",flexDirection:"column",alignItems:"center"},card:{position:"relative",background:"var(--surface)",borderRadius:16,padding:"40px 32px 44px",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",width:"100%",minHeight:240,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",boxSizing:"border-box"},cardCat:{position:"absolute",top:16,left:16,fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:12,textTransform:"uppercase",letterSpacing:"0.04em"},favBtn:{position:"absolute",top:14,right:14,border:"none",background:"none",cursor:"pointer",padding:4,display:"grid",placeItems:"center"},cardText:{fontSize:21,lineHeight:1.55,margin:"14px 0 0",fontWeight:500,color:"var(--text)",fontFamily:"'Fraunces',Georgia,serif",maxWidth:560},navRow:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",maxWidth:420,marginTop:22},navBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},counter:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},counterTotal:{fontSize:13,fontWeight:600,color:"var(--text-3)"},dots:{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center",marginTop:20,maxWidth:480},dot:{width:7,height:7,borderRadius:"50%",border:"none",background:"var(--border)",cursor:"pointer",padding:0,transition:"transform 0.12s"}},be={financial:{label:"Financial",leaf:"#C9A227",shape:"round"},academic:{label:"Academic",leaf:"#3A7CA5",shape:"pine"},relationship:{label:"Relationship",leaf:"#C2536B",shape:"round"},spiritual:{label:"Spiritual",leaf:"#8268B0",shape:"tall"},health:{label:"Health",leaf:"#4C9A6B",shape:"round"}},uo="health";function Pa({species:t=uo,progress:e=1,withered:r=!1,size:o=200}){const s=Math.max(0,Math.min(1,e)),i=be[t]||be[uo],l=r?"#8A7B63":"#7A5A3C",a=r?"#A99C84":i.leaf,d=r?"#8F8268":a,g=14+s*46,p=112-g,v=s>.14,m=v?8+s*30:0;return n.jsxs("svg",{viewBox:"0 0 120 120",width:o,height:o,style:{display:"block"},children:[n.jsx("ellipse",{cx:"60",cy:"114",rx:20+s*14,ry:"5",fill:"rgba(38,36,31,0.08)"}),!v&&n.jsxs("g",{transform:`translate(60 ${112-s*40})`,children:[n.jsx("path",{d:"M0 8 C0 8 0 -2 0 -6",stroke:"#4C9A6B",strokeWidth:"2.5",fill:"none"}),n.jsx("ellipse",{cx:"-5",cy:"-4",rx:"6",ry:"3.5",fill:"#4C9A6B",transform:"rotate(-30 -5 -4)"}),n.jsx("ellipse",{cx:"5",cy:"-4",rx:"6",ry:"3.5",fill:"#5BB07E",transform:"rotate(30 5 -4)"})]}),v&&n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:60-(2+s*2.5),y:p,width:(2+s*2.5)*2,height:g,rx:"2",fill:l}),i.shape==="pine"?n.jsxs(n.Fragment,{children:[n.jsx("polygon",{points:`60,${p-m*2.2} ${60-m},${p+4} ${60+m},${p+4}`,fill:a}),n.jsx("polygon",{points:`60,${p-m*3} ${60-m*.8},${p-m*.7} ${60+m*.8},${p-m*.7}`,fill:d})]}):i.shape==="tall"?n.jsxs(n.Fragment,{children:[n.jsx("ellipse",{cx:"60",cy:p-m*.3,rx:m*.78,ry:m*1.55,fill:a}),n.jsx("ellipse",{cx:"60",cy:p-m*.9,rx:m*.5,ry:m*1,fill:d,opacity:"0.9"})]}):n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"60",cy:p,r:m,fill:a}),n.jsx("circle",{cx:60-m*.7,cy:p+m*.3,r:m*.78,fill:a}),n.jsx("circle",{cx:60+m*.7,cy:p+m*.3,r:m*.78,fill:d}),n.jsx("circle",{cx:"60",cy:p-m*.5,r:m*.8,fill:d,opacity:"0.92"})]})]})]})}function ev({species:t}){return n.jsx(Pa,{species:t,progress:1,size:56})}const rv=[{id:"day",label:"Day"},{id:"week",label:"Week"},{id:"month",label:"Month"},{id:"year",label:"Year"}],$e=t=>t>=60?`${Math.floor(t/60)}h ${t%60}m`:`${t}m`,nv=t=>{const e=t<12?"am":"pm",r=t%12===0?12:t%12;return`${String(r).padStart(2,"0")} ${e}`};function ov(t){const e=t<=60?10:t<=120?20:t<=300?60:120,r=Math.max(60,Math.ceil((t||1)/e)*e),o=[];for(let s=0;s<=r;s+=e)o.push(s);return{max:r,ticks:o}}const Zu=t=>{const e=new Date(t);return e.setHours(0,0,0,0),e},sv=t=>{const e=Zu(t),r=(e.getDay()+6)%7;return e.setDate(e.getDate()-r),e},iv=t=>new Date(t.getFullYear(),t.getMonth(),1),lv=t=>new Date(t.getFullYear(),0,1);function av(t,e){if(t==="day"){const s=Zu(e);return{start:s,end:new Date(+s+864e5),prev:new Date(+s-864e5),prev2:new Date(+s-2*864e5)}}if(t==="week"){const s=sv(e);return{start:s,end:new Date(+s+7*864e5),prev:new Date(+s-7*864e5),prev2:new Date(+s-14*864e5)}}if(t==="month"){const s=iv(e),i=e.getFullYear(),l=e.getMonth();return{start:s,end:new Date(i,l+1,1),prev:new Date(i,l-1,1),prev2:new Date(i,l-2,1)}}const r=e.getFullYear();return{start:lv(e),end:new Date(r+1,0,1),prev:new Date(r-1,0,1),prev2:new Date(r-2,0,1)}}function dv({sessions:t=[],onBack:e}){const[r,o]=y.useState("day"),s=new Date,{start:i,end:l,prev:a,prev2:d}=av(r,s),g=V=>new Date(V.started_at||V.created_at),p=t.filter(V=>V.completed),v=(V,E,B)=>{const $=g(V);return $>=E&&$<B},m=(V,E)=>p.filter(B=>v(B,V,E)).reduce((B,$)=>B+($.actual_min||0),0),k=p.filter(V=>v(V,i,l)),x=k.reduce((V,E)=>V+(E.actual_min||0),0),S=m(a,i),z=m(d,a),b=k.length,u=Array(24).fill(0);k.forEach(V=>{u[g(V).getHours()]+=V.actual_min||0});const c=Math.max(...u,0),h=ov(c),w={};k.forEach(V=>{const E=be[V.tree]?V.tree:uo;w[E]=(w[E]||0)+(V.actual_min||0)});const D=Object.entries(w).map(([V,E])=>({name:be[V].label,min:E,color:be[V].leaf})).sort((V,E)=>E.min-V.min),W=S>0?Math.round((x-S)/S*100):x>0?100:0,C=W>0?Ku:W<0?Qu:Qm,T=W>0?"#4C9A6B":W<0?"#C2536B":"#9A968C",R={day:"yesterday",week:"last week",month:"last month",year:"last year"}[r],Z={day:"2 days ago",week:"2 weeks ago",month:"2 months ago",year:"2 years ago"}[r],L=54,j=22,O=2*Math.PI*L;let H=0;return n.jsxs("div",{style:tt.page,children:[n.jsxs("div",{style:tt.topbar,children:[n.jsxs("button",{onClick:e,style:tt.back,children:[n.jsx(Wm,{size:18})," Grove"]}),n.jsx("h1",{style:tt.h1,children:"Insights"}),n.jsx("div",{style:{width:76}})]}),n.jsx("div",{style:tt.rangeBar,children:rv.map(V=>n.jsx("button",{onClick:()=>o(V.id),style:{...tt.rangeBtn,...r===V.id?tt.rangeOn:{}},children:V.label},V.id))}),n.jsxs("div",{style:tt.headline,children:[n.jsxs("div",{style:tt.bigStat,children:[n.jsx("div",{style:tt.bigVal,children:$e(x)}),n.jsxs("div",{style:tt.bigLbl,children:["Focused this ",r]})]}),n.jsxs("div",{style:tt.bigStat,children:[n.jsx("div",{style:tt.bigVal,children:b}),n.jsx("div",{style:tt.bigLbl,children:"Trees"})]})]}),n.jsxs("div",{style:tt.card,children:[n.jsxs("div",{style:tt.cardHead,children:[n.jsxs("div",{style:tt.cardTitle,children:["Your forest this ",r]}),n.jsx("div",{style:tt.cardHint,children:"Each tree is a completed session — bigger means longer focus"})]}),n.jsx(uv,{sessions:k}),n.jsxs("div",{style:tt.forestNumber,children:[b," ",b===1?"tree":"trees"," · ",$e(x)," focused"]})]}),n.jsx(Ei,{title:"Focus distribution",hint:"Minutes focused at each time of day",children:c===0?n.jsx(gg,{}):n.jsx(cv,{hours:u,axis:h})}),n.jsx(Ei,{title:"Pillar distribution",hint:"How your focus splits across the five trees",children:D.length===0?n.jsx(gg,{}):n.jsxs("div",{style:tt.donutWrap,children:[n.jsxs("svg",{viewBox:"0 0 140 140",width:"150",height:"150",style:{flexShrink:0},children:[D.map(V=>{const E=V.min/(x||1)*O,B=n.jsx("circle",{cx:"70",cy:"70",r:L,fill:"none",stroke:V.color,strokeWidth:j,strokeDasharray:`${E} ${O-E}`,strokeDashoffset:-H,transform:"rotate(-90 70 70)"},V.name);return H+=E,B}),n.jsx("text",{x:"70",y:"66",textAnchor:"middle",style:tt.donutCenterTop,children:$e(x)}),n.jsx("text",{x:"70",y:"82",textAnchor:"middle",style:tt.donutCenterSub,children:"total"})]}),n.jsx("div",{style:tt.legend,children:D.map(V=>n.jsxs("div",{style:tt.legendRow,children:[n.jsx("span",{style:{...tt.legendDot,background:V.color}}),n.jsx("span",{style:tt.legendName,children:V.name}),n.jsxs("span",{style:tt.legendVal,children:[$e(V.min)," · ",Math.round(V.min/(x||1)*100),"%"]})]},V.name))})]})}),n.jsxs(Ei,{title:"Focus trend",hint:`This ${r} vs the previous two`,children:[n.jsxs("div",{style:tt.trend3,children:[n.jsxs("div",{style:tt.trendCol,children:[n.jsx("div",{style:tt.trendVal,children:$e(x)}),n.jsxs("div",{style:tt.trendLbl,children:["This ",r]})]}),n.jsxs("div",{style:tt.trendCol,children:[n.jsx("div",{style:{...tt.trendVal,color:"var(--text-2)"},children:$e(S)}),n.jsx("div",{style:tt.trendLbl,children:R})]}),n.jsxs("div",{style:tt.trendCol,children:[n.jsx("div",{style:{...tt.trendVal,color:"var(--text-3)"},children:$e(z)}),n.jsx("div",{style:tt.trendLbl,children:Z})]})]}),n.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:n.jsxs("div",{style:{...tt.trendBadge,color:T,background:T+"1A"},children:[n.jsx(C,{size:15})," ",W>0?"+":"",W,"% vs ",R]})}),n.jsx(bv,{items:[{label:`This ${r}`,value:x,color:"#4C9A6B"},{label:R,value:S,color:"var(--text-3)"},{label:Z,value:z,color:"var(--text-3)"}]})]})]})}const gv=t=>t===0?"12a":t<12?`${t}a`:t===12?"12p":`${t-12}p`;function cv({hours:t,axis:e}){return n.jsxs("div",{children:[n.jsxs("div",{style:tt.vcPlot,children:[e.ticks.map(r=>n.jsxs("div",{style:{...tt.vcGridRow,bottom:`${r/e.max*100}%`},children:[n.jsx("span",{style:tt.vcYLabel,children:r}),n.jsx("div",{style:tt.vcGridLine})]},r)),n.jsx("div",{style:tt.vcBars,children:t.map((r,o)=>n.jsx("div",{style:tt.vcCell,title:`${nv(o)} · ${r} min`,children:n.jsx("div",{style:{...tt.vcBar,height:r>0?`max(3px, ${r/e.max*100}%)`:0}})},o))})]}),n.jsx("div",{style:tt.vcXAxis,children:t.map((r,o)=>n.jsx("div",{style:tt.vcXCell,children:o%3===0?gv(o):""},o))}),n.jsx("div",{style:tt.vcYTitle,children:"minutes focused, by hour of day"})]})}function uv({sessions:t}){if(!t.length)return n.jsx("div",{style:tt.sceneEmpty,children:"No trees yet this period. 🌱"});const r=t.slice(0,80),o=t.length-r.length,s=i=>Math.round(Math.max(40,Math.min(88,40+(i||0)*.6)));return n.jsxs("div",{children:[n.jsx("div",{style:tt.scene,children:r.map(i=>n.jsx("div",{style:tt.sceneTree,title:`${i.label||"Focus"} · ${$e(i.actual_min||i.duration_min)}`,children:n.jsx(Pa,{species:i.tree,progress:1,size:s(i.actual_min||i.duration_min)})},i.id))}),o>0&&n.jsxs("div",{style:tt.overflow,children:["+",o," more trees"]})]})}function Ei({title:t,hint:e,children:r}){return n.jsxs("div",{style:tt.card,children:[n.jsxs("div",{style:tt.cardHead,children:[n.jsx("div",{style:tt.cardTitle,children:t}),e&&n.jsx("div",{style:tt.cardHint,children:e})]}),r]})}function gg(){return n.jsx("div",{style:tt.empty,children:"No focus sessions in this period yet. 🌱"})}function bv({items:t}){const e=Math.max(1,...t.map(r=>r.value));return n.jsx("div",{style:tt.tbWrap,children:t.map(r=>n.jsxs("div",{style:tt.tbRow,children:[n.jsx("div",{style:tt.tbLbl,children:r.label}),n.jsx("div",{style:tt.tbTrack,children:n.jsx("div",{style:{...tt.tbBar,width:`${r.value/e*100}%`,background:r.color}})}),n.jsx("div",{style:tt.tbVal,children:$e(r.value)})]},r.label))})}const tt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"20px 16px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:720,margin:"0 auto"},topbar:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},back:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},h1:{fontSize:20,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},rangeBar:{display:"flex",gap:6,background:"var(--surface)",padding:5,borderRadius:12,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},rangeBtn:{flex:1,border:"none",background:"none",padding:"9px 0",borderRadius:8,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},rangeOn:{background:"var(--accent-strong)",color:"#fff"},headline:{display:"flex",gap:12,marginBottom:16},bigStat:{flex:1,background:"var(--surface)",borderRadius:14,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},bigVal:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em"},bigLbl:{fontSize:12,color:"var(--text-3)",marginTop:3,fontWeight:500},card:{background:"var(--surface)",borderRadius:16,padding:"18px 18px 20px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},cardHead:{marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardHint:{fontSize:12,color:"var(--text-3)",marginTop:2},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"24px 0"},scene:{display:"flex",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"center",gap:"0 2px",padding:"14px 8px 6px",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,minHeight:110,border:"1px solid var(--border)"},sceneTree:{lineHeight:0},sceneEmpty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"34px 0",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,border:"1px solid var(--border)"},overflow:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",marginTop:6,fontWeight:600},forestNumber:{textAlign:"center",marginTop:12,fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},vcPlot:{position:"relative",height:180,paddingLeft:30},vcGridRow:{position:"absolute",left:0,right:0,display:"flex",alignItems:"center",height:0},vcYLabel:{width:26,marginRight:4,textAlign:"right",fontSize:9,color:"var(--text-3)",fontWeight:600,flexShrink:0},vcGridLine:{flex:1,height:1,background:"#EEEBE4"},vcBars:{position:"absolute",left:30,right:0,top:0,bottom:0,display:"flex",alignItems:"flex-end",gap:1},vcCell:{flex:1,height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"center"},vcBar:{width:"72%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",transition:"height 0.3s"},vcXAxis:{display:"flex",marginLeft:30,marginTop:4},vcXCell:{flex:1,textAlign:"center",fontSize:8.5,color:"var(--text-3)",fontWeight:600,overflow:"hidden"},vcYTitle:{textAlign:"center",fontSize:9.5,color:"var(--text-3)",marginTop:6,letterSpacing:"0.06em",textTransform:"uppercase",fontWeight:600},donutWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap",justifyContent:"center"},donutCenterTop:{fontSize:16,fontWeight:800,fill:"var(--text)",fontFamily:"'Fraunces',Georgia,serif"},donutCenterSub:{fontSize:9,fill:"#9A968C",textTransform:"uppercase",letterSpacing:"0.08em"},legend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:11,height:11,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},legendVal:{fontSize:12,color:"var(--text-3)",fontWeight:600,flexShrink:0},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:56,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},pv=[15,30,45,60,90],Bi="anvil_grove_active",cg=t=>`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`,Bs=t=>t>=60?`${Math.floor(t/60)}h ${t%60}m`:`${t}m`;function mv(){const[t,e]=y.useState("timer"),[r,o]=y.useState("idle"),[s,i]=y.useState(15),[l,a]=y.useState(!1),[d,g]=y.useState(""),[p,v]=y.useState(uo),[m,k]=y.useState(()=>localStorage.getItem("anvil_grove_deepfocus")!=="0"),[x,S]=y.useState(15*60),[z,b]=y.useState({sessions:[],stats:null}),u=y.useRef(null),c=y.useRef(null),h=y.useRef(!1),w=y.useCallback(async()=>{try{b(await Y.getFocus())}catch{}},[]),D=y.useCallback(async(P,et)=>{if(!h.current){h.current=!0,localStorage.removeItem(Bi);try{await Y.createFocus({label:d.trim()||null,tree:p,duration_min:s,actual_min:et,completed:P,started_at:c.current,ended_at:new Date().toISOString()})}catch{}w()}},[d,p,s,w]),W=y.useCallback(()=>{if(r!=="running")return;const P=c.current?Math.round((Date.now()-new Date(c.current).getTime())/6e4):0;o("failed"),D(!1,Math.max(0,Math.min(s,P)))},[r,s,D]),C=y.useCallback(()=>{o("done"),S(0),D(!0,s)},[s,D]);y.useEffect(()=>{w();const P=JSON.parse(localStorage.getItem(Bi)||"null");if(P&&P.endTime){const et=Math.round((P.endTime-Date.now())/1e3);i(P.duration),g(P.label||""),v(P.tree||"oak"),u.current=P.endTime,c.current=P.startedAt,et>0?(S(et),o("running")):(o("done"),h.current=!1,D(!0,P.duration))}},[]),y.useEffect(()=>{if(r!=="running")return;const P=()=>{const f=Math.round((u.current-Date.now())/1e3);if(f<=0){C();return}S(f)};P();const et=setInterval(P,250);return()=>clearInterval(et)},[r,C]),y.useEffect(()=>{if(r!=="running"||!m)return;const P=()=>{document.hidden&&W()};return document.addEventListener("visibilitychange",P),()=>document.removeEventListener("visibilitychange",P)},[r,m,W]);const T=()=>k(P=>{const et=!P;return localStorage.setItem("anvil_grove_deepfocus",et?"1":"0"),et}),R=()=>{h.current=!1,c.current=new Date().toISOString(),u.current=Date.now()+s*60*1e3,localStorage.setItem(Bi,JSON.stringify({endTime:u.current,duration:s,label:d,tree:p,startedAt:c.current})),S(s*60),o("running")},Z=()=>{o("idle"),S(s*60)},L=P=>{a(!1),i(P),S(P*60)},j=()=>{l||(a(!0),i(5),S(5*60))},O=P=>{if(a(!0),P===""){i(0),S(0);return}const et=Math.max(1,Math.min(600,parseInt(P,10)||0));i(et),S(et*60)},H=s*60,V=r==="running"?1-x/H:r==="done"?1:0,E=130,B=2*Math.PI*E,$=B*(1-(r==="running"?V:r==="done"?1:0)),Q=z.stats;return t==="stats"?n.jsx(dv,{sessions:z.sessions,onBack:()=>e("timer")}):n.jsxs("div",{style:rt.page,children:[n.jsxs("div",{style:rt.head,children:[n.jsx("div",{style:rt.eyebrow,children:"Anvil · Grove"}),n.jsx("h1",{style:rt.h1,children:"Grove"}),n.jsx("div",{style:rt.subhead,children:"Plant a tree, stay focused, grow your grove."}),n.jsxs("button",{onClick:()=>e("stats"),style:rt.insightsBtn,disabled:r==="running",children:[n.jsx(_m,{size:15})," Insights"]})]}),Q&&n.jsxs("div",{style:rt.statRow,children:[n.jsx($o,{label:"Today",value:Bs(Q.today_minutes)}),n.jsx($o,{label:"Trees",value:Q.trees}),n.jsx($o,{label:"Streak",value:`${Q.streak}d`}),n.jsx($o,{label:"Success",value:`${Q.success_rate}%`})]}),n.jsxs("div",{style:rt.stage,children:[n.jsxs("div",{style:rt.ringWrap,children:[n.jsxs("svg",{width:"300",height:"300",viewBox:"0 0 300 300",style:{position:"absolute",inset:0},children:[n.jsx("circle",{cx:"150",cy:"150",r:E,fill:"none",stroke:"var(--border)",strokeWidth:"10"}),n.jsx("circle",{cx:"150",cy:"150",r:E,fill:"none",stroke:r==="failed"?"#C2536B":"#4C9A6B",strokeWidth:"10",strokeLinecap:"round",strokeDasharray:B,strokeDashoffset:$,transform:"rotate(-90 150 150)",style:{transition:"stroke-dashoffset 0.4s linear"}})]}),n.jsx("div",{style:rt.ringInner,children:n.jsx(Pa,{species:p,progress:r==="idle"?0:V,withered:r==="failed",size:170})})]}),r==="idle"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:rt.timeBig,children:cg(s*60)}),n.jsxs("div",{style:rt.controls,children:[n.jsxs("div",{style:rt.chips,children:[pv.map(P=>n.jsxs("button",{onClick:()=>L(P),style:{...rt.chip,...!l&&s===P?rt.chipOn:{}},children:[P,"m"]},P)),n.jsx("button",{onClick:j,style:{...rt.chip,...l?rt.chipOn:{}},children:"Custom"})]}),l&&n.jsxs("div",{style:rt.customRow,children:[n.jsx("input",{type:"number",min:"1",max:"600",inputMode:"numeric",autoFocus:!0,value:s||"",onChange:P=>O(P.target.value),placeholder:"e.g. 50",style:rt.customInput}),n.jsx("span",{style:rt.customUnit,children:"minutes"})]}),n.jsx("input",{value:d,onChange:P=>g(P.target.value),placeholder:"What are you focusing on? (optional)",style:rt.input,maxLength:60}),n.jsx("div",{style:rt.treePick,children:Object.entries(be).map(([P,et])=>n.jsxs("button",{onClick:()=>v(P),title:et.label,style:{...rt.treeBtn,...p===P?{borderColor:et.leaf,background:et.leaf+"1A"}:{}},children:[n.jsx("span",{style:{...rt.treeDot,background:et.leaf}}),et.label]},P))}),n.jsxs("button",{onClick:T,style:rt.toggleRow,children:[n.jsxs("div",{style:{textAlign:"left"},children:[n.jsx("div",{style:rt.toggleTitle,children:"Deep Focus"}),n.jsx("div",{style:rt.toggleHint,children:m?"Leaving the app kills the tree":"Tree survives until you give up"})]}),n.jsx("div",{style:{...rt.switch,...m?rt.switchOn:{}},children:n.jsx("div",{style:{...rt.knob,...m?rt.knobOn:{}}})})]}),n.jsx("button",{onClick:R,disabled:s<1,style:{...rt.plantBtn,...s<1?{opacity:.5,cursor:"not-allowed"}:{}},children:"Plant tree"})]})]}),r==="running"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:rt.timeBig,children:cg(x)}),n.jsx("div",{style:rt.focusLabel,children:d.trim()||"Focusing…"}),n.jsx("div",{style:m?rt.warn:rt.warnSoft,children:m?"⚠ Deep Focus on — leaving this app will kill your tree.":"🌿 Relaxed mode — only Give up ends this session."}),n.jsx("button",{onClick:W,style:rt.giveUp,children:"Give up"})]}),r==="done"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:rt.resultTitle,children:["🌳 You grew a ",be[p].label," tree!"]}),n.jsxs("div",{style:rt.resultSub,children:[Bs(s)," of focus added to your grove."]}),n.jsx("button",{onClick:Z,style:rt.plantBtn,children:"Plant another"})]}),r==="failed"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{...rt.resultTitle,color:"#C2536B"},children:"Your tree withered."}),n.jsx("div",{style:rt.resultSub,children:"You left before the timer finished. Try again?"}),n.jsx("button",{onClick:Z,style:rt.plantBtn,children:"Try again"})]})]}),n.jsx(fv,{sessions:z.sessions,onDelete:async P=>{await Y.deleteFocus(P),w()}})]})}function $o({label:t,value:e}){return n.jsxs("div",{style:rt.stat,children:[n.jsx("div",{style:rt.statValue,children:e}),n.jsx("div",{style:rt.statLabel,children:t})]})}function fv({sessions:t,onDelete:e}){const r=t.filter(l=>l.completed);if(r.length===0)return n.jsx("div",{style:rt.forestEmpty,children:"Your grove is empty. Plant your first tree above. 🌱"});const o={};for(const l of r){const a=(l.started_at||l.created_at||"").slice(0,10);(o[a]||(o[a]=[])).push(l)}const s=Object.keys(o).sort().reverse(),i=l=>{const a=new Date().toISOString().slice(0,10);return l===a?"Today":new Date(l+"T00:00").toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})};return n.jsxs("div",{style:rt.forest,children:[n.jsxs("div",{style:rt.forestHead,children:["Your Grove · ",r.length," trees"]}),s.map(l=>n.jsxs("div",{style:rt.daySection,children:[n.jsxs("div",{style:rt.dayLabel,children:[i(l)," · ",o[l].length]}),n.jsx("div",{style:rt.treeGrid,children:o[l].map(a=>n.jsxs("div",{style:rt.treeCard,title:`${a.label||"Focus"} · ${Bs(a.actual_min)}`,onDoubleClick:()=>e(a.id),children:[n.jsx(ev,{species:a.tree}),n.jsx("div",{style:rt.treeCardMin,children:Bs(a.actual_min||a.duration_min)}),a.label&&n.jsx("div",{style:rt.treeCardLabel,children:a.label})]},a.id))})]},l)),n.jsx("div",{style:rt.forestHint,children:"Double-tap a tree to remove it."})]})}const rt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:820,margin:"0 auto"},head:{marginBottom:16,textAlign:"center"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},insightsBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginTop:12},statRow:{display:"flex",gap:10,justifyContent:"center",marginBottom:18,flexWrap:"wrap"},stat:{background:"var(--surface)",borderRadius:12,padding:"10px 18px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",minWidth:78},statValue:{fontSize:19,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},statLabel:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},stage:{background:"var(--surface)",borderRadius:18,padding:"28px 24px 32px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",display:"flex",flexDirection:"column",alignItems:"center",marginBottom:26},ringWrap:{position:"relative",width:300,height:300,display:"grid",placeItems:"center"},ringInner:{position:"relative",zIndex:1,display:"grid",placeItems:"center"},timeBig:{fontSize:40,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:6},focusLabel:{fontSize:14,color:"var(--text-2)",marginTop:2,fontWeight:500},warn:{fontSize:12,color:"#C2773B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},warnSoft:{fontSize:12,color:"#4C9A6B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},toggleRow:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:12,padding:"10px 14px",cursor:"pointer",fontFamily:"inherit",width:"100%"},toggleTitle:{fontSize:14,fontWeight:700,color:"var(--text)"},toggleHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},switch:{width:42,height:24,borderRadius:12,background:"var(--border)",flexShrink:0,padding:2,transition:"background 0.18s",boxSizing:"border-box"},switchOn:{background:"#4C9A6B"},knob:{width:20,height:20,borderRadius:"50%",background:"var(--surface)",boxShadow:"0 1px 2px rgba(0,0,0,0.2)",transform:"translateX(0)",transition:"transform 0.18s"},knobOn:{transform:"translateX(18px)"},controls:{width:"100%",maxWidth:380,display:"flex",flexDirection:"column",gap:14,marginTop:8},chips:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},chip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},customRow:{display:"flex",alignItems:"center",justifyContent:"center",gap:8},customInput:{border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:15,fontWeight:700,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center",width:100},customUnit:{fontSize:13,color:"var(--text-3)",fontWeight:600},input:{border:"1px solid var(--border)",borderRadius:10,padding:"11px 13px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center"},treePick:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},treeBtn:{display:"flex",alignItems:"center",gap:6,border:"1.5px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},treeDot:{width:10,height:10,borderRadius:"50%"},plantBtn:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},giveUp:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",padding:"11px 26px",borderRadius:11,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:18},resultTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginTop:14,textAlign:"center"},resultSub:{fontSize:13.5,color:"var(--text-3)",marginTop:6,marginBottom:18,textAlign:"center"},forest:{background:"var(--surface)",borderRadius:16,padding:"20px 22px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},forestHead:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},forestEmpty:{background:"var(--surface)",borderRadius:16,padding:"40px 20px",textAlign:"center",color:"var(--text-3)",fontSize:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},daySection:{marginBottom:16},dayLabel:{fontSize:12,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:8},treeGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(80px,1fr))",gap:8},treeCard:{display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 4px",borderRadius:10,cursor:"pointer",background:"var(--surface-2)"},treeCardMin:{fontSize:12,fontWeight:700,color:"#4C9A6B",marginTop:-4},treeCardLabel:{fontSize:10.5,color:"var(--text-3)",marginTop:2,textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:76},forestHint:{fontSize:11,color:"var(--text-3)",textAlign:"center",marginTop:6}},_l=[{code:"INR",symbol:"₹",locale:"en-IN",label:"Indian Rupee"},{code:"USD",symbol:"$",locale:"en-US",label:"US Dollar"},{code:"EUR",symbol:"€",locale:"de-DE",label:"Euro"},{code:"GBP",symbol:"£",locale:"en-GB",label:"British Pound"},{code:"JPY",symbol:"¥",locale:"ja-JP",label:"Japanese Yen"},{code:"AED",symbol:"د.إ",locale:"en-AE",label:"UAE Dirham"},{code:"AUD",symbol:"A$",locale:"en-AU",label:"Australian Dollar"},{code:"CAD",symbol:"C$",locale:"en-CA",label:"Canadian Dollar"},{code:"SGD",symbol:"S$",locale:"en-SG",label:"Singapore Dollar"}],ug="INR",qu="anvil_currency",Oa=t=>_l.find(e=>e.code===t)||_l[0];function bo(){try{return localStorage.getItem(qu)||ug}catch{return ug}}function bg(t){try{localStorage.setItem(qu,t)}catch{}return window.dispatchEvent(new CustomEvent("anvil-currency",{detail:t})),t}function As(t,e){const r=Oa(e||bo()),o=Math.round(Number(t)||0);return r.symbol+o.toLocaleString(r.locale)}function vv(t,e){const r=Oa(e||bo()),o=Math.round(Number(t)||0),s=Math.abs(o);return r.code==="INR"?s>=1e7?r.symbol+(o/1e7).toFixed(s>=1e8?0:1)+"Cr":s>=1e5?r.symbol+(o/1e5).toFixed(s>=1e6?0:1)+"L":s>=1e3?r.symbol+(o/1e3).toFixed(s>=1e4?0:1)+"K":r.symbol+o:s>=1e9?r.symbol+(o/1e9).toFixed(1)+"B":s>=1e6?r.symbol+(o/1e6).toFixed(1)+"M":s>=1e3?r.symbol+(o/1e3).toFixed(1)+"K":r.symbol+o}function tb(){const[t,e]=y.useState(bo());return y.useEffect(()=>{const r=o=>e(o.detail||bo());return window.addEventListener("anvil-currency",r),()=>window.removeEventListener("anvil-currency",r)},[]),Oa(t)}const pg="grove_rates",Ai=Object.keys(be),Te=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,mg=t=>{const e=new Date(t);e.setHours(0,0,0,0);const r=(e.getDay()+6)%7;return e.setDate(e.getDate()-r),e},fg=t=>{const e=Math.floor(t/60),r=t%60;return e&&r?`${e}h ${r}m`:e?`${e}h`:`${r}m`},hv=[{id:"week",label:"This week"},{id:"month",label:"This month"},{id:"last7",label:"Last 7 days"},{id:"year",label:"This year"}];function Fi(t){const e=new Date;if(t==="week")return[Te(mg(e)),Te(e)];if(t==="month")return[Te(new Date(e.getFullYear(),e.getMonth(),1)),Te(e)];if(t==="last7"){const r=new Date(e);return r.setDate(r.getDate()-6),[Te(r),Te(e)]}return t==="year"?[Te(new Date(e.getFullYear(),0,1)),Te(e)]:[Te(mg(e)),Te(e)]}function yv(){const t=tb(),e=w=>As(w,t.code),[r,o]=y.useState({}),[s,i]=y.useState([]),[l,a]=y.useState("week"),[d,g]=y.useState(()=>Fi("week")[0]),[p,v]=y.useState(()=>Fi("week")[1]),[m,k]=y.useState(!1);y.useEffect(()=>{(async()=>{try{const[w,D]=await Promise.all([Y.getFocus(),Y.getSetting(pg)]);i(w.sessions||[]),o(D.value||{})}catch{}k(!0)})()},[]);const x=w=>{a(w);const[D,W]=Fi(w);g(D),v(W)},S=(w,D)=>{a(""),w==="from"?g(D):v(D)},z=(w,D)=>{const W=Math.max(0,parseFloat(D)||0),C={...r,[w]:W};o(C),Y.setSetting(pg,C).catch(()=>{})},b=y.useMemo(()=>{const w=d,D=p,W={};return Ai.forEach(C=>W[C]=0),s.filter(C=>C.completed).forEach(C=>{const T=(C.started_at||C.created_at||"").slice(0,10);if(T<w||T>D)return;const R=be[C.tree]?C.tree:uo;W[R]+=C.actual_min||0}),Ai.map(C=>{const T=W[C],R=r[C]||0;return{pillar:C,minutes:T,rate:R,cost:T/60*R,...be[C]}}).sort((C,T)=>T.cost-C.cost||T.minutes-C.minutes)},[s,r,d,p]),u=b.reduce((w,D)=>w+D.cost,0),c=b.reduce((w,D)=>w+D.minutes,0),h=Math.max(1,...b.map(w=>w.cost));return n.jsxs("div",{style:lt.page,children:[n.jsxs("div",{style:lt.head,children:[n.jsx("div",{style:lt.eyebrow,children:"Anvil · Worth"}),n.jsx("h1",{style:lt.h1,children:"Worth"}),n.jsx("div",{style:lt.subhead,children:"What your focused time is worth, by pillar."})]}),n.jsxs("div",{style:lt.hero,children:[n.jsx("div",{style:lt.heroVal,children:e(u)}),n.jsxs("div",{style:lt.heroSub,children:[fg(c)," focused · ",d," → ",p]})]}),n.jsxs("div",{style:lt.card,children:[n.jsx("div",{style:lt.cardTitle,children:"Period"}),n.jsx("div",{style:lt.presetRow,children:hv.map(w=>n.jsx("button",{onClick:()=>x(w.id),style:{...lt.preset,...l===w.id?lt.presetOn:{}},children:w.label},w.id))}),n.jsxs("div",{style:lt.dateRow,children:[n.jsxs("label",{style:lt.dateField,children:[n.jsx("span",{style:lt.dateLbl,children:"From"}),n.jsx("input",{type:"date",value:d,max:p,onChange:w=>S("from",w.target.value),style:lt.dateInput})]}),n.jsx("span",{style:lt.dateArrow,children:"→"}),n.jsxs("label",{style:lt.dateField,children:[n.jsx("span",{style:lt.dateLbl,children:"To"}),n.jsx("input",{type:"date",value:p,min:d,onChange:w=>S("to",w.target.value),style:lt.dateInput})]})]})]}),n.jsxs("div",{style:lt.card,children:[n.jsx("div",{style:lt.cardTitle,children:"Breakdown"}),m?c===0?n.jsx("div",{style:lt.muted,children:"No focus sessions in this period."}):n.jsxs("div",{style:lt.rows,children:[b.map(w=>n.jsxs("div",{style:lt.row,children:[n.jsxs("div",{style:lt.rowTop,children:[n.jsx("span",{style:{...lt.dot,background:w.leaf}}),n.jsx("span",{style:lt.rowName,children:w.label}),n.jsx("span",{style:lt.rowCost,children:e(w.cost)})]}),n.jsx("div",{style:lt.rowBarTrack,children:n.jsx("div",{style:{...lt.rowBar,width:`${w.cost/h*100}%`,background:w.leaf}})}),n.jsxs("div",{style:lt.rowMeta,children:[fg(w.minutes)," × ",e(w.rate),"/hr"]})]},w.pillar)),n.jsxs("div",{style:lt.totalRow,children:[n.jsx("span",{children:"Total"}),n.jsx("span",{style:lt.totalVal,children:e(u)})]})]}):n.jsx("div",{style:lt.muted,children:"Loading…"})]}),n.jsxs("div",{style:lt.card,children:[n.jsx("div",{style:lt.cardTitle,children:"Hourly rates"}),n.jsx("div",{style:lt.cardHint,children:"Set how much an hour of focus is worth for each pillar."}),n.jsx("div",{style:lt.rateGrid,children:Ai.map(w=>n.jsxs("div",{style:lt.rateRow,children:[n.jsx("span",{style:{...lt.dot,background:be[w].leaf}}),n.jsx("span",{style:lt.rateName,children:be[w].label}),n.jsxs("div",{style:lt.rateInputWrap,children:[n.jsx("span",{style:lt.rupeeSign,children:t.symbol}),n.jsx("input",{type:"number",min:"0",inputMode:"numeric",placeholder:"0",value:r[w]??"",onChange:D=>z(w,D.target.value),style:lt.rateInput}),n.jsx("span",{style:lt.perHr,children:"/hr"})]})]},w))})]})]})}const lt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},hero:{background:"linear-gradient(135deg,var(--accent-strong),var(--accent-2))",borderRadius:16,padding:"22px 24px",color:"#fff",marginBottom:16,textAlign:"center"},heroVal:{fontSize:38,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em"},heroSub:{fontSize:12.5,color:"var(--text-3)",marginTop:4},card:{background:"var(--surface)",borderRadius:16,padding:"18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},cardHint:{fontSize:12,color:"var(--text-3)",marginTop:-8,marginBottom:12},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},presetRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},preset:{border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:18,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},presetOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},dateRow:{display:"flex",alignItems:"flex-end",gap:10},dateField:{display:"flex",flexDirection:"column",gap:4,flex:1},dateLbl:{fontSize:11,color:"var(--text-2)",fontWeight:600},dateInput:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",outline:"none",width:"100%",boxSizing:"border-box"},dateArrow:{color:"var(--text-3)",paddingBottom:9},rows:{display:"flex",flexDirection:"column",gap:14},row:{},rowTop:{display:"flex",alignItems:"center",gap:8,marginBottom:6},dot:{width:11,height:11,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:14,fontWeight:600},rowCost:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},rowBarTrack:{height:8,background:"#F2F0EA",borderRadius:4,overflow:"hidden"},rowBar:{height:"100%",borderRadius:4,transition:"width 0.3s"},rowMeta:{fontSize:11.5,color:"var(--text-3)",marginTop:5,fontWeight:500},totalRow:{display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid var(--border)",paddingTop:12,marginTop:2,fontSize:14,fontWeight:700},totalVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},rateGrid:{display:"flex",flexDirection:"column",gap:10},rateRow:{display:"flex",alignItems:"center",gap:8},rateName:{flex:1,fontSize:14,fontWeight:600},rateInputWrap:{display:"flex",alignItems:"center",gap:3,border:"1px solid var(--border)",borderRadius:9,padding:"4px 10px",background:"var(--surface-2)"},rupeeSign:{fontSize:14,color:"var(--text-2)",fontWeight:600},rateInput:{border:"none",background:"none",outline:"none",width:64,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},perHr:{fontSize:12,color:"var(--text-3)",fontWeight:600}};function xv({onAuthed:t}){const[e,r]=y.useState("login"),[o,s]=y.useState(""),[i,l]=y.useState(""),[a,d]=y.useState(""),[g,p]=y.useState(""),[v,m]=y.useState(!1),k=e==="register",x=async S=>{if(S.preventDefault(),p(""),!i.trim()||!a){p("Email and password are required.");return}if(k&&a.length<6){p("Password must be at least 6 characters.");return}m(!0);try{const z=k?await Y.register({name:o,email:i,password:a}):await Y.login({email:i,password:a});gf(z.token),t(z.user)}catch(z){p(z.message||"Something went wrong.")}finally{m(!1)}};return n.jsx("div",{style:Wt.page,children:n.jsxs("form",{style:Wt.card,onSubmit:x,children:[n.jsxs("div",{style:Wt.brand,children:[n.jsx("div",{style:Wt.logo,children:"B"}),n.jsx("span",{style:Wt.brandName,children:"Anvil"})]}),n.jsx("h1",{style:Wt.title,children:k?"Create your account":"Welcome back"}),n.jsx("p",{style:Wt.sub,children:k?"Start forging your days.":"Sign in to continue."}),k&&n.jsxs("label",{style:Wt.field,children:[n.jsx("span",{style:Wt.label,children:"Name"}),n.jsx("input",{value:o,onChange:S=>s(S.target.value),placeholder:"Your name",style:Wt.input,autoFocus:!0})]}),n.jsxs("label",{style:Wt.field,children:[n.jsx("span",{style:Wt.label,children:"Email"}),n.jsx("input",{type:"email",value:i,onChange:S=>l(S.target.value),placeholder:"you@example.com",style:Wt.input,autoFocus:!k})]}),n.jsxs("label",{style:Wt.field,children:[n.jsx("span",{style:Wt.label,children:"Password"}),n.jsx("input",{type:"password",value:a,onChange:S=>d(S.target.value),placeholder:"••••••••",style:Wt.input})]}),g&&n.jsx("div",{style:Wt.error,children:g}),n.jsx("button",{type:"submit",disabled:v,style:{...Wt.submit,...v?{opacity:.6}:{}},children:v?"Please wait…":k?"Create account":"Sign in"}),n.jsxs("div",{style:Wt.switch,children:[k?"Already have an account?":"New here?"," ",n.jsx("button",{type:"button",onClick:()=>{r(k?"login":"register"),p("")},style:Wt.link,children:k?"Sign in":"Create one"})]})]})})}const Wt={page:{minHeight:"100vh",display:"grid",placeItems:"center",background:"var(--bg)",fontFamily:"'Inter',system-ui,sans-serif",padding:20},card:{width:"100%",maxWidth:380,background:"var(--surface)",borderRadius:16,padding:"32px 28px",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",display:"flex",flexDirection:"column"},brand:{display:"flex",alignItems:"center",gap:9,marginBottom:20},logo:{width:32,height:32,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},brandName:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},title:{fontSize:22,fontWeight:700,margin:"0 0 4px",fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},sub:{fontSize:13.5,color:"var(--text-3)",margin:"0 0 22px"},field:{display:"flex",flexDirection:"column",gap:5,marginBottom:14},label:{fontSize:12,fontWeight:600,color:"var(--text-2)"},input:{border:"1px solid var(--border)",borderRadius:9,padding:"11px 12px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)"},error:{background:"rgba(194,83,107,0.10)",color:"#C2536B",fontSize:13,padding:"9px 12px",borderRadius:8,marginBottom:14,fontWeight:500},submit:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"12px",borderRadius:10,fontSize:14.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},switch:{fontSize:13,color:"var(--text-2)",textAlign:"center",marginTop:18},link:{border:"none",background:"none",color:"#3A7CA5",fontWeight:700,cursor:"pointer",fontFamily:"inherit",fontSize:13,padding:0}},vg=["Salary","Stocks","Business","Interest","Rent","Gift","Other"],hg=["Bills","EMI","Rent","Food","Shopping","Transport","Health","Entertainment","Education","Other"],kv={Salary:"#4C9A6B",Stocks:"#3A7CA5",Business:"#C9A227",Interest:"#8268B0",Gift:"#C2773B",Bills:"#C2536B",EMI:"#A23E57",Food:"#E08E45",Shopping:"#8268B0",Transport:"#3A7CA5",Health:"#4C9A6B",Entertainment:"#C9A227",Education:"#5B7C99",Rent:"#5B8C5A",Other:"#9A968C"},eb=t=>kv[t]||"#9A968C",Re="#3E9E6B",De="#D1556E",Rn=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,Gn=Rn(new Date),wv=[{id:"month",label:"This month"},{id:"last",label:"Last month"},{id:"year",label:"This year"},{id:"all",label:"All time"}];function Sv(t){const e=new Date;return t==="month"?[Rn(new Date(e.getFullYear(),e.getMonth(),1)),Gn]:t==="last"?[Rn(new Date(e.getFullYear(),e.getMonth()-1,1)),Rn(new Date(e.getFullYear(),e.getMonth(),0))]:t==="year"?[Rn(new Date(e.getFullYear(),0,1)),Gn]:["0000-01-01","9999-12-31"]}function jv(){const t=tb(),[e,r]=y.useState("overview"),[o,s]=y.useState([]),[i,l]=y.useState(!1),a=y.useCallback(()=>Y.getTxns().then(g=>{s(g),l(!0)}).catch(()=>l(!0)),[]);y.useEffect(()=>{a()},[a]);const d=g=>As(g,t.code);return n.jsxs("div",{style:I.page,children:[n.jsxs("div",{style:I.head,children:[n.jsx("div",{style:I.eyebrow,children:"Anvil · Vault"}),n.jsx("h1",{style:I.h1,children:"Vault"}),n.jsx("div",{style:I.subhead,children:"Your money — what comes in, what goes out, and where it's headed."})]}),n.jsx("div",{style:I.tabs,children:[["overview","Overview",Lm],["money","Money",lf],["calc","Calculators",Mm]].map(([g,p,v])=>n.jsxs("button",{onClick:()=>r(g),style:{...I.tab,...e===g?I.tabOn:{}},children:[n.jsx(v,{size:15})," ",p]},g))}),e==="overview"&&n.jsx(Cv,{txns:o,loaded:i,money:d,cur:t}),e==="money"&&n.jsx(zv,{txns:o,reload:a,money:d}),e==="calc"&&n.jsx(Tv,{money:d,cur:t})]})}function Cv({txns:t,loaded:e,money:r,cur:o}){const[s,i]=y.useState("month"),[l,a]=Sv(s),d=y.useMemo(()=>t.filter(S=>S.date>=l&&S.date<=a),[t,l,a]),g=d.filter(S=>S.kind==="income"),p=d.filter(S=>S.kind==="expense"),v=g.reduce((S,z)=>S+z.amount,0),m=p.reduce((S,z)=>S+z.amount,0),k=v-m,x=S=>{const z={};return S.forEach(b=>{z[b.category]=(z[b.category]||0)+b.amount}),Object.entries(z).map(([b,u])=>({category:b,amount:u})).sort((b,u)=>u.amount-b.amount)};return n.jsxs(n.Fragment,{children:[n.jsx("div",{style:I.presetRow,children:wv.map(S=>n.jsx("button",{onClick:()=>i(S.id),style:{...I.preset,...s===S.id?I.presetOn:{}},children:S.label},S.id))}),n.jsxs("div",{style:I.sumGrid,children:[n.jsx(Ri,{icon:n.jsx(El,{size:16}),label:"Income",value:r(v),color:Re}),n.jsx(Ri,{icon:n.jsx(Bl,{size:16}),label:"Expenses",value:r(m),color:De}),n.jsx(Ri,{icon:k>=0?n.jsx(Ku,{size:16}):n.jsx(Qu,{size:16}),label:"Net savings",value:r(k),color:k>=0?Re:De})]}),e?d.length===0?n.jsx("div",{style:I.card,children:n.jsxs("div",{style:I.muted,children:["No transactions in this period. Add some under the ",n.jsx("b",{children:"Money"})," tab."]})}):n.jsxs(n.Fragment,{children:[n.jsx(Iv,{totalIn:v,totalOut:m}),n.jsxs("div",{style:I.twoCol,children:[n.jsx(yg,{title:"Incoming",subtitle:"Where your money comes from",total:v,data:x(g),accent:Re,cur:o}),n.jsx(yg,{title:"Outgoing",subtitle:"Where your money goes",total:m,data:x(p),accent:De,cur:o})]})]}):n.jsx("div",{style:I.muted,children:"Loading…"})]})}function Ri({icon:t,label:e,value:r,color:o}){return n.jsxs("div",{style:I.sumCard,children:[n.jsx("div",{style:{...I.sumIcon,color:o,background:o+"1A"},children:t}),n.jsx("div",{style:I.sumLabel,children:e}),n.jsx("div",{style:{...I.sumVal,color:o},children:r})]})}function yg({title:t,subtitle:e,total:r,data:o,accent:s,cur:i}){let l=0;const a=o.map(g=>{const p=r>0?l/r*100:0;l+=g.amount;const v=r>0?l/r*100:0;return{...g,start:p,end:v,color:eb(g.category),pct:r>0?g.amount/r*100:0}}),d=a.length?`conic-gradient(${a.map(g=>`${g.color} ${g.start}% ${g.end}%`).join(", ")})`:"var(--surface-2)";return n.jsxs("div",{style:I.card,children:[n.jsxs("div",{style:I.cardTitleRow,children:[n.jsxs("div",{children:[n.jsx("div",{style:{...I.cardTitle,color:s},children:t}),n.jsx("div",{style:I.cardSub,children:e})]}),n.jsx("div",{style:{...I.cardTotal,color:s},children:As(r,i.code)})]}),o.length===0?n.jsx("div",{style:I.muted,children:"Nothing logged."}):n.jsxs("div",{style:I.pieWrap,children:[n.jsxs("div",{style:I.pieChart,children:[n.jsx("div",{style:{...I.pieDisc,background:d}}),n.jsxs("div",{style:I.pieHole,children:[n.jsx("span",{style:I.pieHoleVal,children:vv(r,i.code)}),n.jsx("span",{style:I.pieHoleLbl,children:"total"})]})]}),n.jsx("div",{style:I.pieLegend,children:a.map(g=>n.jsxs("div",{style:I.legendRow,children:[n.jsx("span",{style:{...I.dot,background:g.color}}),n.jsx("span",{style:I.legendName,children:g.category}),n.jsxs("span",{style:I.legendPct,children:[Math.round(g.pct),"%"]}),n.jsx("span",{style:I.legendAmt,children:As(g.amount,i.code)})]},g.category))})]})]})}function Iv({totalIn:t,totalOut:e}){const r=t-e,o=t>0?r/t:0,s=t===0?0:Math.max(0,Math.min(100,Math.round(50+o*100)));let i,l,a;t===0?(i="No income logged",l="#9A968C",a="Add your income to see your financial health."):o>=.3?(i="Excellent",l="#3E9E6B",a="You're saving 30%+ of income — keep investing the surplus."):o>=.2?(i="Healthy",l="#4C9A6B",a="Solid savings rate. Consider automating a SIP with the surplus."):o>=.1?(i="Okay",l="#C9A227",a="Decent, but aim for 20%+. Trim your biggest expense category."):o>=0?(i="Tight",l="#C2773B",a="You're saving very little. Review recurring bills and EMIs."):(i="Overspending",l="#D1556E",a="You're spending more than you earn. Cut back to avoid debt.");const d=t>0?Math.min(100,Math.round(e/t*100)):0;return n.jsxs("div",{style:I.card,children:[n.jsxs("div",{style:I.cardTitleRow,children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx(Hm,{size:18,color:l}),n.jsxs("div",{children:[n.jsx("div",{style:I.cardTitle,children:"Financial health"}),n.jsx("div",{style:I.cardSub,children:"Based on your savings rate this period"})]})]}),n.jsxs("div",{style:{textAlign:"right"},children:[n.jsx("div",{style:{...I.healthScore,color:l},children:t===0?"—":s}),n.jsx("div",{style:{...I.healthStatus,color:l},children:i})]})]}),n.jsx("div",{style:I.gaugeTrack,children:n.jsx("div",{style:{...I.gaugeFill,width:`${t===0?0:s}%`,background:l}})}),n.jsxs("div",{style:I.healthStats,children:[n.jsxs("div",{style:I.healthStat,children:[n.jsxs("span",{style:I.healthStatV,children:[t>0?Math.round(o*100):0,"%"]}),n.jsx("span",{style:I.healthStatL,children:"Savings rate"})]}),n.jsxs("div",{style:I.healthStat,children:[n.jsxs("span",{style:I.healthStatV,children:[d,"%"]}),n.jsx("span",{style:I.healthStatL,children:"of income spent"})]})]}),n.jsx("div",{style:{...I.tip,borderColor:l+"55",background:l+"12",color:l},children:a})]})}function zv({txns:t,reload:e,money:r}){const[o,s]=y.useState("expense"),[i,l]=y.useState(""),[a,d]=y.useState("Bills"),[g,p]=y.useState(Gn),[v,m]=y.useState(""),[k,x]=y.useState(null),{deleteItem:S,toasts:z,handleUndo:b,handleDismiss:u}=fn(Y.deleteTxn,Y.restoreTxn,e),c=o==="income"?vg:hg,h=L=>{s(L),d(L==="income"?"Salary":"Bills")},w=async()=>{const L=parseFloat(i);!L||L<=0||(await Y.createTxn({kind:o,category:a,amount:L,note:v.trim(),date:g}),l(""),m(""),e())},D=L=>x({id:L.id,kind:L.kind,amount:String(L.amount),category:L.category,date:L.date,note:L.note||""}),W=(k==null?void 0:k.kind)==="income"?vg:hg,C=L=>x(j=>({...j,kind:L,category:W.includes(j.category)?j.category:L==="income"?"Salary":"Bills"})),T=async()=>{const L=parseFloat(k.amount);!L||L<=0||(await Y.updateTxn(k.id,{kind:k.kind,category:k.category,amount:L,note:k.note.trim(),date:k.date}),x(null),e())},R=y.useMemo(()=>{const L={};return t.forEach(j=>{(L[j.date]=L[j.date]||[]).push(j)}),Object.entries(L).sort((j,O)=>O[0].localeCompare(j[0]))},[t]),Z=L=>new Date(L+"T00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:I.card,children:[n.jsx("div",{style:I.cardTitle,children:"Add transaction"}),n.jsxs("div",{style:I.kindToggle,children:[n.jsxs("button",{onClick:()=>h("expense"),style:{...I.kindBtn,...o==="expense"?{background:De,color:"#fff",borderColor:De}:{}},children:[n.jsx(Bl,{size:15})," Expense"]}),n.jsxs("button",{onClick:()=>h("income"),style:{...I.kindBtn,...o==="income"?{background:Re,color:"#fff",borderColor:Re}:{}},children:[n.jsx(El,{size:15})," Income"]})]}),n.jsxs("div",{style:I.formGrid,children:[n.jsx("input",{type:"number",inputMode:"decimal",placeholder:"Amount",value:i,onChange:L=>l(L.target.value),onKeyDown:L=>L.key==="Enter"&&w(),style:I.input,autoFocus:!0}),n.jsx("select",{value:a,onChange:L=>d(L.target.value),style:I.input,children:c.map(L=>n.jsx("option",{children:L},L))}),n.jsx("input",{type:"date",value:g,max:Gn,onChange:L=>p(L.target.value),style:I.input})]}),n.jsx("input",{placeholder:"Note (optional)",value:v,onChange:L=>m(L.target.value),onKeyDown:L=>L.key==="Enter"&&w(),style:{...I.input,marginTop:8}}),n.jsxs("button",{onClick:w,style:{...I.addBtn,background:o==="income"?Re:De},children:[n.jsx(Ie,{size:15})," Add ",o]})]}),n.jsxs("div",{style:I.card,children:[n.jsx("div",{style:I.cardTitle,children:"History"}),R.length===0?n.jsx("div",{style:I.muted,children:"No transactions yet."}):n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:R.map(([L,j])=>n.jsxs("div",{children:[n.jsx("div",{style:I.dateHead,children:Z(L)}),j.map(O=>(k==null?void 0:k.id)===O.id?n.jsxs("div",{style:I.editTxn,children:[n.jsxs("div",{style:I.kindToggle,children:[n.jsxs("button",{onClick:()=>C("expense"),style:{...I.kindBtn,...k.kind==="expense"?{background:De,color:"#fff",borderColor:De}:{}},children:[n.jsx(Bl,{size:14})," Expense"]}),n.jsxs("button",{onClick:()=>C("income"),style:{...I.kindBtn,...k.kind==="income"?{background:Re,color:"#fff",borderColor:Re}:{}},children:[n.jsx(El,{size:14})," Income"]})]}),n.jsxs("div",{style:I.formGrid,children:[n.jsx("input",{type:"number",inputMode:"decimal",value:k.amount,onChange:H=>x({...k,amount:H.target.value}),style:I.input}),n.jsx("select",{value:k.category,onChange:H=>x({...k,category:H.target.value}),style:I.input,children:W.map(H=>n.jsx("option",{children:H},H))}),n.jsx("input",{type:"date",value:k.date,max:Gn,onChange:H=>x({...k,date:H.target.value}),style:I.input})]}),n.jsx("input",{placeholder:"Note (optional)",value:k.note,onChange:H=>x({...k,note:H.target.value}),onKeyDown:H=>H.key==="Enter"&&T(),style:{...I.input,marginTop:8}}),n.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[n.jsxs("button",{onClick:()=>x(null),style:I.editCancel,children:[n.jsx(ft,{size:14})," Cancel"]}),n.jsxs("button",{onClick:T,style:{...I.addBtn,marginTop:0,flex:1,background:k.kind==="income"?Re:De},children:[n.jsx(wt,{size:15})," Save"]})]})]},O.id):n.jsxs("div",{style:I.txnRow,children:[n.jsx("span",{style:{...I.txnDot,background:eb(O.category)}}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:I.txnCat,children:O.category}),O.note&&n.jsx("div",{style:I.txnNote,children:O.note})]}),n.jsxs("span",{style:{...I.txnAmt,color:O.kind==="income"?Re:De},children:[O.kind==="income"?"+":"−",r(O.amount)]}),n.jsx("button",{onClick:()=>D(O),style:I.delBtn,children:n.jsx(Je,{size:13})}),n.jsx("button",{onClick:()=>S(O.id,O.category),style:I.delBtn,children:n.jsx(ft,{size:14})})]},O.id))]},L))})]}),n.jsx(vn,{toasts:z,onUndo:b,onDismiss:u})]})}function Tv({money:t,cur:e}){return n.jsxs(n.Fragment,{children:[n.jsx(Ev,{money:t,cur:e}),n.jsx(Av,{money:t,cur:e})]})}function zr({label:t,value:e,set:r,min:o,max:s,step:i,suffix:l}){return n.jsxs("div",{style:I.field,children:[n.jsxs("div",{style:I.fieldTop,children:[n.jsx("span",{style:I.fieldLabel,children:t}),n.jsxs("div",{style:I.fieldInputWrap,children:[n.jsx("input",{type:"number",value:e,onChange:a=>r(a.target.value),style:I.fieldInput}),l&&n.jsx("span",{style:I.fieldSuffix,children:l})]})]}),n.jsx("input",{type:"range",min:o,max:s,step:i,value:e,onChange:a=>r(a.target.value),style:I.range})]})}function Ev({money:t,cur:e}){const[r,o]=y.useState(3e4),[s,i]=y.useState(12),[l,a]=y.useState(15),{invested:d,futureValue:g,gains:p,yearly:v}=y.useMemo(()=>{const k=Math.max(0,parseFloat(r)||0),x=Math.max(0,parseFloat(s)||0),S=Math.max(0,Math.min(60,parseInt(l)||0)),z=x/12/100,b=w=>w<=0?0:z===0?k*w:k*((Math.pow(1+z,w)-1)/z)*(1+z),u=[];for(let w=1;w<=S;w++)u.push({year:w,invested:k*12*w,value:b(w*12)});const c=b(S*12),h=k*12*S;return{invested:h,futureValue:c,gains:c-h,yearly:u}},[r,s,l]),m=Math.max(1,...v.map(k=>k.value));return n.jsxs("div",{style:I.card,children:[n.jsx("div",{style:I.cardTitleRow,children:n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx(Xm,{size:18,color:"#3A7CA5"}),n.jsxs("div",{children:[n.jsx("div",{style:I.cardTitle,children:"SIP projection"}),n.jsx("div",{style:I.cardSub,children:"Mutual fund / SIP future value"})]})]})}),n.jsx(zr,{label:"Monthly investment",value:r,set:o,min:500,max:5e5,step:500,suffix:e.symbol}),n.jsx(zr,{label:"Expected return (p.a.)",value:s,set:i,min:1,max:30,step:.5,suffix:"%"}),n.jsx(zr,{label:"Time period",value:l,set:a,min:1,max:40,step:1,suffix:"yrs"}),n.jsxs("div",{style:I.resultHero,children:[n.jsx("div",{style:I.resultLabel,children:"Projected wealth"}),n.jsx("div",{style:{...I.resultVal,color:"#3A7CA5"},children:t(g)})]}),n.jsxs("div",{style:I.splitRow,children:[n.jsxs("div",{style:I.splitItem,children:[n.jsx("span",{style:I.splitV,children:t(d)}),n.jsx("span",{style:I.splitL,children:"Invested"})]}),n.jsxs("div",{style:I.splitItem,children:[n.jsx("span",{style:{...I.splitV,color:"#3E9E6B"},children:t(p)}),n.jsx("span",{style:I.splitL,children:"Est. returns"})]})]}),v.length>0&&n.jsxs("div",{style:I.chartWrap,children:[n.jsx("div",{style:I.chartBars,children:v.map(k=>n.jsx("div",{style:I.chartCol,title:`Year ${k.year}: ${t(k.value)}`,children:n.jsx("div",{style:{...I.chartStack,height:`${k.value/m*100}%`},children:n.jsx("div",{style:{...I.chartGain,height:`${(1-k.invested/k.value)*100}%`}})})},k.year))}),n.jsxs("div",{style:I.chartAxis,children:[n.jsx("span",{children:"Yr 1"}),n.jsxs("span",{style:{marginLeft:"auto"},children:["Yr ",v.length]})]}),n.jsxs("div",{style:I.legend,children:[n.jsxs("span",{style:I.legendItem,children:[n.jsx("span",{style:{...I.legendDot,background:"#9DBFD6"}})," Invested"]}),n.jsxs("span",{style:I.legendItem,children:[n.jsx("span",{style:{...I.legendDot,background:"#3E9E6B"}})," Returns"]})]})]})]})}function xg(t,e,r,o=0,s=0){let i=Math.max(0,t-s),l=0,a=0,d=s;const g=1200;for(;i>.01&&a<g;){const p=i*e;let v=r+o,m=v-p;if(m<=0)return{months:1/0,totalInterest:1/0,totalPaid:1/0};m>i&&(m=i,v=i+p),i-=m,l+=p,d+=v,a++}return{months:a,totalInterest:l,totalPaid:d}}const kg=t=>{if(!isFinite(t))return"—";const e=Math.floor(t/12),r=t%12;return(e?`${e}y `:"")+`${r}m`},Bv=t=>{if(!isFinite(t))return"—";const e=new Date;return e.setMonth(e.getMonth()+t),e.toLocaleDateString("en-US",{month:"short",year:"numeric"})};function Av({money:t,cur:e}){const[r,o]=y.useState(2e6),[s,i]=y.useState(9),[l,a]=y.useState(20),[d,g]=y.useState(5e5),[p,v]=y.useState("once"),[m,k]=y.useState("tenure"),x=y.useMemo(()=>{const c=Math.max(0,parseFloat(r)||0),h=Math.max(0,parseFloat(s)||0)/12/100,w=Math.max(1,Math.round((parseFloat(l)||0)*12)),D=h===0?c/w:c*h*Math.pow(1+h,w)/(Math.pow(1+h,w)-1);return{P:c,i:h,n:w,emi:D,totalPay:D*w,totalInterest:D*w-c}},[r,s,l]),S=p==="monthly"?"tenure":m,z=y.useMemo(()=>{const{P:c,i:h,n:w,emi:D,totalInterest:W}=x,C=Math.max(0,parseFloat(d)||0);if(C<=0)return null;let T=D,R=w,Z=W,L=x.totalPay;if(p==="once"&&S==="emi"){const j=Math.max(0,c-C);T=h===0?j/w:j*h*Math.pow(1+h,w)/(Math.pow(1+h,w)-1),R=w,Z=T*w-j,L=C+T*w}else if(p==="once"){const j=xg(c,h,D,0,C);R=j.months,Z=j.totalInterest,L=j.totalPaid}else{const j=xg(c,h,D,C,0);R=j.months,Z=j.totalInterest,L=j.totalPaid}return{newEMI:T,newMonths:R,newInterest:Z,totalPaid:L,interestSaved:Math.max(0,W-Z),monthsSaved:Math.max(0,w-(isFinite(R)?R:w))}},[x,d,p,S]),b=x.totalPay>0?x.P/x.totalPay*100:0,u=p==="once"?Math.max(1e5,Math.round(x.P)):Math.max(5e4,Math.round(x.emi*3));return n.jsxs("div",{style:I.card,children:[n.jsx("div",{style:I.cardTitleRow,children:n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx(Uu,{size:18,color:"#C2536B"}),n.jsxs("div",{children:[n.jsx("div",{style:I.cardTitle,children:"EMI calculator"}),n.jsx("div",{style:I.cardSub,children:"Loan / mortgage monthly payment"})]})]})}),n.jsx(zr,{label:"Loan amount",value:r,set:o,min:5e4,max:5e7,step:5e4,suffix:e.symbol}),n.jsx(zr,{label:"Interest rate (p.a.)",value:s,set:i,min:1,max:24,step:.1,suffix:"%"}),n.jsx(zr,{label:"Tenure",value:l,set:a,min:1,max:30,step:1,suffix:"yrs"}),n.jsxs("div",{style:I.resultHero,children:[n.jsx("div",{style:I.resultLabel,children:"Monthly EMI"}),n.jsx("div",{style:{...I.resultVal,color:"#C2536B"},children:t(x.emi)})]}),n.jsxs("div",{style:I.emiSplitTrack,children:[n.jsx("div",{style:{width:`${b}%`,background:"#5B7C99",height:"100%"}}),n.jsx("div",{style:{width:`${100-b}%`,background:"#C2536B",height:"100%"}})]}),n.jsxs("div",{style:I.splitRow,children:[n.jsxs("div",{style:I.splitItem,children:[n.jsx("span",{style:{...I.splitV,color:"#5B7C99"},children:t(x.P)}),n.jsx("span",{style:I.splitL,children:"Principal"})]}),n.jsxs("div",{style:I.splitItem,children:[n.jsx("span",{style:{...I.splitV,color:"#C2536B"},children:t(x.totalInterest)}),n.jsx("span",{style:I.splitL,children:"Total interest"})]}),n.jsxs("div",{style:I.splitItem,children:[n.jsx("span",{style:I.splitV,children:t(x.totalPay)}),n.jsx("span",{style:I.splitL,children:"Total payable"})]})]}),n.jsx("div",{style:I.subDivider}),n.jsx("div",{style:I.subTitle,children:"Prepayment planner"}),n.jsx("div",{style:I.cardSub,children:"See what an extra payment does to your loan."}),n.jsx("div",{style:{marginTop:14},children:n.jsx(zr,{label:"Prepayment amount",value:d,set:g,min:0,max:u,step:p==="once"?25e3:1e3,suffix:e.symbol})}),n.jsxs("div",{style:I.segGroup,children:[n.jsx("span",{style:I.segLbl,children:"Type"}),n.jsxs("div",{style:I.segRow,children:[n.jsx(Ho,{label:"One-time",on:p==="once",onClick:()=>v("once")}),n.jsx(Ho,{label:"Every month",on:p==="monthly",onClick:()=>v("monthly")})]})]}),n.jsxs("div",{style:I.segGroup,children:[n.jsx("span",{style:I.segLbl,children:"Strategy"}),n.jsxs("div",{style:I.segRow,children:[n.jsx(Ho,{label:"Reduce tenure",on:S==="tenure",onClick:()=>k("tenure")}),n.jsx(Ho,{label:"Reduce EMI",on:S==="emi",disabled:p==="monthly",onClick:()=>k("emi")})]})]}),p==="monthly"&&n.jsx("div",{style:I.note,children:"An extra monthly payment always shortens the tenure. Switch to a one-time prepayment to reduce your EMI instead."}),z?n.jsxs("div",{style:I.cmpCard,children:[n.jsxs("div",{style:I.cmpRow,children:[n.jsx("span",{style:I.cmpLbl,children:"New EMI"}),n.jsxs("span",{style:I.cmpVal,children:[t(z.newEMI),z.newEMI<x.emi-1&&n.jsxs("span",{style:I.cmpWas,children:[" was ",t(x.emi)]})]})]}),n.jsxs("div",{style:I.cmpRow,children:[n.jsx("span",{style:I.cmpLbl,children:"New tenure"}),n.jsxs("span",{style:I.cmpVal,children:[kg(z.newMonths)," ",n.jsxs("span",{style:I.cmpWas,children:["· paid off ",Bv(z.newMonths)]})]})]}),n.jsxs("div",{style:I.cmpRow,children:[n.jsx("span",{style:I.cmpLbl,children:"Total interest"}),n.jsx("span",{style:I.cmpVal,children:t(z.newInterest)})]}),n.jsxs("div",{style:I.cmpRow,children:[n.jsx("span",{style:I.cmpLbl,children:"Total payable"}),n.jsx("span",{style:I.cmpVal,children:t(z.totalPaid)})]}),n.jsxs("div",{style:I.saveRow,children:["You save ",t(z.interestSaved)," in interest",z.monthsSaved>0?` · ${kg(z.monthsSaved)} sooner`:""]})]}):n.jsx("div",{style:I.muted,children:"Enter a prepayment amount to see the impact."})]})}function Ho({label:t,on:e,onClick:r,disabled:o}){return n.jsx("button",{onClick:o?void 0:r,disabled:o,style:{...I.seg,...e?I.segOn:{},...o?I.segDisabled:{}},children:t})}const I={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},tabs:{display:"flex",gap:7,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},presetRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},preset:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},presetOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},sumGrid:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:16},sumCard:{background:"var(--surface)",borderRadius:14,padding:"14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},sumIcon:{width:30,height:30,borderRadius:9,display:"grid",placeItems:"center",marginBottom:8},sumLabel:{fontSize:11.5,color:"var(--text-3)",fontWeight:600},sumVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2,letterSpacing:"-0.01em",wordBreak:"break-word"},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},cardTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},twoCol:{display:"grid",gridTemplateColumns:"1fr",gap:0},dot:{width:10,height:10,borderRadius:3,flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:160,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},healthScore:{fontSize:32,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1},healthStatus:{fontSize:12.5,fontWeight:700,marginTop:2},gaugeTrack:{height:10,background:"var(--surface-2)",borderRadius:6,overflow:"hidden",marginBottom:14},gaugeFill:{height:"100%",borderRadius:6,transition:"width 0.4s"},healthStats:{display:"flex",gap:24,marginBottom:12},healthStat:{display:"flex",flexDirection:"column"},healthStatV:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},healthStatL:{fontSize:11,color:"var(--text-3)",fontWeight:600},tip:{fontSize:12.5,lineHeight:1.5,padding:"10px 12px",borderRadius:10,border:"1px solid",fontWeight:500},kindToggle:{display:"flex",gap:8,marginBottom:12},kindBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},formGrid:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},input:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},addBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},dateHead:{fontSize:11,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8},txnRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},txnDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},txnCat:{fontSize:13.5,fontWeight:600},txnNote:{fontSize:11.5,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},txnAmt:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},editTxn:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:12,margin:"6px 0"},editCancel:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},field:{marginBottom:16},fieldTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},fieldLabel:{fontSize:13,fontWeight:600,color:"var(--text-2)"},fieldInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:8,padding:"5px 10px",background:"var(--surface-2)"},fieldInput:{border:"none",background:"none",outline:"none",width:90,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},fieldSuffix:{fontSize:12,color:"var(--text-3)",fontWeight:600},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},resultHero:{textAlign:"center",padding:"14px 0 6px"},resultLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},resultVal:{fontSize:34,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,wordBreak:"break-word"},splitRow:{display:"flex",gap:10,marginTop:10},splitItem:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",background:"var(--surface-2)",borderRadius:10,padding:"10px 6px"},splitV:{fontSize:14.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",wordBreak:"break-word"},splitL:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:2},chartWrap:{marginTop:18},chartBars:{display:"flex",alignItems:"flex-end",gap:3,height:90},chartCol:{flex:1,height:"100%",display:"flex",alignItems:"flex-end"},chartStack:{width:"100%",background:"#9DBFD6",borderRadius:"3px 3px 0 0",minHeight:2,position:"relative",display:"flex",flexDirection:"column",justifyContent:"flex-start"},chartGain:{width:"100%",background:"#3E9E6B",borderRadius:"3px 3px 0 0"},chartAxis:{display:"flex",fontSize:10,color:"var(--text-3)",fontWeight:600,marginTop:6},legend:{display:"flex",gap:16,justifyContent:"center",marginTop:10},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)",fontWeight:600},legendDot:{width:10,height:10,borderRadius:3},emiSplitTrack:{display:"flex",height:12,borderRadius:6,overflow:"hidden",marginTop:16,border:"1px solid var(--border)"},subDivider:{height:1,background:"var(--border)",margin:"20px 0 14px"},subTitle:{fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},segGroup:{marginBottom:12},segLbl:{fontSize:12,fontWeight:600,color:"var(--text-3)",display:"block",marginBottom:6},segRow:{display:"flex",gap:8},seg:{flex:1,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},segOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},segDisabled:{opacity:.4,cursor:"not-allowed"},note:{fontSize:12,lineHeight:1.5,color:"var(--text-3)",background:"var(--surface-2)",borderRadius:9,padding:"9px 11px",marginBottom:12},cmpCard:{background:"var(--surface-2)",borderRadius:12,padding:"12px 14px",marginTop:4},cmpRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"6px 0",borderBottom:"1px solid var(--border)",gap:10},cmpLbl:{fontSize:12.5,color:"var(--text-2)",fontWeight:600},cmpVal:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",textAlign:"right"},cmpWas:{fontSize:11,color:"var(--text-3)",fontWeight:500,fontFamily:"'Inter',system-ui,sans-serif"},saveRow:{marginTop:12,background:"rgba(62,158,107,0.12)",color:"#3E9E6B",borderRadius:9,padding:"10px 12px",fontSize:13,fontWeight:700,textAlign:"center"}},Ll=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Di={Monday:"Mon",Tuesday:"Tue",Wednesday:"Wed",Thursday:"Thu",Friday:"Fri",Saturday:"Sat",Sunday:"Sun"},Dn=()=>Ll[(new Date().getDay()+6)%7],Pe={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},wg=Object.keys(Pe),Wi=21,Sg="kickstart_tags",Mi=t=>{if(!t)return"";const e=t.trim();if(/^[A-Za-z0-9_-]{11}$/.test(e))return e;const r=e.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return r?r[1]:""},jg=t=>{if(!t||!String(t).trim())return null;const e=String(t).split(":").map(r=>parseInt(r.trim(),10));return e.some(r=>isNaN(r)||r<0)?null:e.reduce((r,o)=>r*60+o,0)},Uo=t=>{if(t==null)return"";const e=Math.max(0,t|0);return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`},Fv=t=>`https://www.youtube.com/embed/${t.youtube_id}?start=${t.start_sec||0}`+(t.end_sec?`&end=${t.end_sec}`:"")+"&autoplay=1&rel=0",Rv=()=>({id:null,url:"",title:"",start:"",end:"",days:[Dn()],pillars:[],customs:[]});function Dv(){const[t,e]=y.useState([]),[r,o]=y.useState([]),[s,i]=y.useState(!1),[l,a]=y.useState({type:"day",value:Dn()}),[d,g]=y.useState(null),[p,v]=y.useState(null),[m,k]=y.useState(""),x=y.useCallback(async()=>{try{const[j,O]=await Promise.all([Y.getKickstart(),Y.getSetting(Sg)]);e(j),o(Array.isArray(O==null?void 0:O.value)?O.value:[])}catch{}i(!0)},[]);y.useEffect(()=>{x()},[x]);const{deleteItem:S,toasts:z,handleUndo:b,handleDismiss:u}=fn(Y.deleteKickstart,Y.restoreKickstart,x),c=j=>{o(j),Y.setSetting(Sg,j).catch(()=>{})},h=()=>{const j=m.trim();!j||r.length>=Wi||r.includes(j)||(c([...r,j]),g(O=>O&&!O.customs.includes(j)?{...O,customs:[...O.customs,j]}:O),k(""))},w=j=>c(r.filter(O=>O!==j)),D=(j,O)=>g(H=>({...H,[j]:H[j].includes(O)?H[j].filter(V=>V!==O):[...H[j],O]})),W=j=>g({id:j.id,url:`https://youtu.be/${j.youtube_id}`,title:j.title,start:Uo(j.start_sec),end:j.end_sec?Uo(j.end_sec):"",days:[...j.days],pillars:[...j.pillars],customs:[...j.customs]}),C=async()=>{const j=Mi(d.url);if(!j||d.days.length===0||!d.title.trim())return;const O={youtube_id:j,title:d.title.trim(),start_sec:jg(d.start)||0,end_sec:jg(d.end),days:d.days,pillars:d.pillars,customs:d.customs};d.id?await Y.updateKickstart(d.id,O):await Y.createKickstart(O),g(null),x()},T=y.useMemo(()=>t.filter(j=>l.type==="all"?!0:l.type==="day"?j.days.includes(l.value):l.type==="pillar"?j.pillars.includes(l.value):l.type==="custom"?j.customs.includes(l.value):!0),[t,l]),R=(j,O)=>l.type===j&&l.value===O,Z=d?[!Mi(d.url)&&"a valid YouTube link",!d.title.trim()&&"a title",d.days.length===0&&"at least one day"].filter(Boolean):[],L=!!d&&Z.length===0;return n.jsxs("div",{style:U.page,children:[n.jsxs("div",{style:U.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:U.eyebrow,children:"Anvil · Kickstart"}),n.jsx("h1",{style:U.h1,children:"Kickstart"}),n.jsxs("div",{style:U.subhead,children:["Your motivation hub — the right push for ",Dn(),"."]})]}),!d&&n.jsxs("button",{onClick:()=>g(Rv()),style:U.addBtn,children:[n.jsx(Ie,{size:15})," Add video"]})]}),d&&n.jsxs("div",{style:U.card,children:[n.jsx("div",{style:U.cardTitle,children:d.id?"Edit video":"Add video"}),n.jsx("input",{placeholder:"YouTube link (or video ID)",value:d.url,onChange:j=>g({...d,url:j.target.value}),style:U.input,autoFocus:!0}),d.url&&!Mi(d.url)&&n.jsx("div",{style:U.warn,children:"Couldn't find a YouTube video ID in that link."}),n.jsx("input",{placeholder:"Title (required)",value:d.title,onChange:j=>g({...d,title:j.target.value}),style:{...U.input,marginTop:8}}),n.jsxs("div",{style:U.trimRow,children:[n.jsx(tf,{size:15,color:"var(--text-3)"}),n.jsxs("label",{style:U.trimField,children:[n.jsx("span",{style:U.trimLbl,children:"Start"}),n.jsx("input",{placeholder:"0:30",value:d.start,onChange:j=>g({...d,start:j.target.value}),style:U.trimInput})]}),n.jsx("span",{style:U.trimArrow,children:"→"}),n.jsxs("label",{style:U.trimField,children:[n.jsx("span",{style:U.trimLbl,children:"End"}),n.jsx("input",{placeholder:"end (optional)",value:d.end,onChange:j=>g({...d,end:j.target.value}),style:U.trimInput})]})]}),n.jsx("div",{style:U.hint,children:"Only this trimmed part plays. Use m:ss (e.g. 1:30). Leave End blank to play to the end."}),n.jsxs("div",{style:U.tagBlock,children:[n.jsxs("div",{style:U.tagLabel,children:["Days ",n.jsx("span",{style:U.req,children:"required"})]}),n.jsx("div",{style:U.chipRow,children:Ll.map(j=>n.jsx("button",{onClick:()=>D("days",j),style:{...U.chip,...d.days.includes(j)?U.chipOnDark:{}},children:Di[j]},j))})]}),n.jsxs("div",{style:U.tagBlock,children:[n.jsxs("div",{style:U.tagLabel,children:["Pillars ",n.jsx("span",{style:U.opt,children:"optional"})]}),n.jsx("div",{style:U.chipRow,children:wg.map(j=>{const O=d.pillars.includes(j);return n.jsxs("button",{onClick:()=>D("pillars",j),style:{...U.chip,...O?{background:Pe[j],color:"#fff",borderColor:Pe[j]}:{}},children:[n.jsx("span",{style:{...U.dot,background:O?"#fff":Pe[j]}}),j]},j)})})]}),n.jsxs("div",{style:U.tagBlock,children:[n.jsxs("div",{style:U.tagLabel,children:["Custom tags ",n.jsxs("span",{style:U.opt,children:["optional · ",r.length,"/",Wi]})]}),n.jsxs("div",{style:U.chipRow,children:[r.map(j=>n.jsxs("span",{style:{...U.chip,...d.customs.includes(j)?U.chipOnAccent:{},paddingRight:4},children:[n.jsx("button",{onClick:()=>D("customs",j),style:U.chipInner,children:j}),n.jsx("button",{onClick:()=>w(j),style:U.chipX,title:"Delete tag",children:n.jsx(ft,{size:11})})]},j)),r.length===0&&n.jsx("span",{style:U.muted,children:"No custom tags yet."})]}),r.length<Wi&&n.jsxs("div",{style:U.newTagRow,children:[n.jsx("input",{placeholder:"New custom tag…",value:m,onChange:j=>k(j.target.value),onKeyDown:j=>j.key==="Enter"&&h(),style:{...U.input,padding:"7px 10px"}}),n.jsx("button",{onClick:h,style:U.smallBtn,children:n.jsx(Ie,{size:14})})]})]}),!L&&n.jsxs("div",{style:U.warn,children:["Add ",Z.join(", ")," to save."]}),n.jsxs("div",{style:U.formActions,children:[n.jsxs("button",{onClick:()=>g(null),style:U.cancelBtn,children:[n.jsx(ft,{size:14})," Cancel"]}),n.jsxs("button",{onClick:C,disabled:!L,style:{...U.saveBtn,...L?{}:U.saveDisabled},children:[n.jsx(wt,{size:15})," ",d.id?"Save":"Add video"]})]})]}),n.jsxs("div",{style:U.filterCard,children:[n.jsx("button",{onClick:()=>a({type:"all"}),style:{...U.fChip,...l.type==="all"?U.fChipOnDark:{}},children:"All"}),n.jsx("span",{style:U.fDivider}),Ll.map(j=>n.jsxs("button",{onClick:()=>a({type:"day",value:j}),style:{...U.fChip,...R("day",j)?U.fChipOnDark:{},...j===Dn()?U.fToday:{}},children:[Di[j],j===Dn()?" ·":""]},j)),n.jsx("span",{style:U.fDivider}),wg.map(j=>n.jsxs("button",{onClick:()=>a({type:"pillar",value:j}),style:{...U.fChip,...R("pillar",j)?{background:Pe[j],color:"#fff",borderColor:Pe[j]}:{}},children:[n.jsx("span",{style:{...U.dot,background:R("pillar",j)?"#fff":Pe[j]}}),j]},j)),r.length>0&&n.jsx("span",{style:U.fDivider}),r.map(j=>n.jsxs("button",{onClick:()=>a({type:"custom",value:j}),style:{...U.fChip,...R("custom",j)?U.fChipOnAccent:{}},children:[n.jsx(of,{size:11})," ",j]},j))]}),s?T.length===0?n.jsx("div",{style:U.empty,children:t.length===0?"No videos yet — add your first motivation clip.":"No videos for this tag."}):n.jsx("div",{style:U.grid,children:T.map(j=>n.jsxs("div",{style:U.videoCard,children:[n.jsx("div",{style:U.thumbWrap,children:p===j.id?n.jsx("iframe",{src:Fv(j),title:j.title||j.youtube_id,style:U.iframe,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):n.jsxs("button",{onClick:()=>v(j.id),style:U.thumbBtn,children:[n.jsx("img",{src:`https://img.youtube.com/vi/${j.youtube_id}/hqdefault.jpg`,alt:"",style:U.thumb}),n.jsx("span",{style:U.playOverlay,children:n.jsx(Jm,{size:22,color:"#fff",fill:"#fff"})}),n.jsxs("span",{style:U.trimBadge,children:[Uo(j.start_sec),j.end_sec?` – ${Uo(j.end_sec)}`:"+"]})]})}),n.jsxs("div",{style:U.videoBody,children:[n.jsx("div",{style:U.videoTitle,children:j.title||"Untitled clip"}),n.jsxs("div",{style:U.tagWrap,children:[j.days.map(O=>n.jsx("span",{style:U.dayTag,children:Di[O]},O)),j.pillars.map(O=>n.jsx("span",{style:{...U.pillTag,color:Pe[O]||"var(--text-2)",borderColor:Pe[O]||"var(--border)"},children:O},O)),j.customs.map(O=>n.jsx("span",{style:U.customTag,children:O},O))]}),n.jsxs("div",{style:U.cardActions,children:[n.jsx("button",{onClick:()=>W(j),style:U.iconBtn,title:"Edit",children:n.jsx(Je,{size:13})}),n.jsx("button",{onClick:()=>S(j.id,j.title||"video"),style:U.iconBtn,title:"Delete",children:n.jsx(ft,{size:14})})]})]})]},j.id))}):n.jsx("div",{style:U.muted,children:"Loading…"}),n.jsx(vn,{toasts:z,onUndo:b,onDismiss:u})]})}const U={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:1e3,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},warn:{fontSize:11.5,color:"#C2773B",marginTop:5,fontWeight:600},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:6,lineHeight:1.4},trimRow:{display:"flex",alignItems:"flex-end",gap:10,marginTop:10},trimField:{display:"flex",flexDirection:"column",gap:4,flex:1},trimLbl:{fontSize:11,color:"var(--text-2)",fontWeight:600},trimInput:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},trimArrow:{color:"var(--text-3)",paddingBottom:9},tagBlock:{marginTop:14},tagLabel:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},req:{fontSize:10,fontWeight:700,color:"#C2536B",textTransform:"uppercase",marginLeft:6},opt:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",marginLeft:6},chipRow:{display:"flex",gap:6,flexWrap:"wrap"},chip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},chipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},chipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},chipInner:{border:"none",background:"none",color:"inherit",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,padding:0},chipX:{border:"none",background:"rgba(0,0,0,0.12)",color:"inherit",cursor:"pointer",display:"grid",placeItems:"center",borderRadius:"50%",width:16,height:16,padding:0},newTagRow:{display:"flex",gap:6,marginTop:8,maxWidth:280},smallBtn:{border:"none",background:"var(--accent)",color:"#fff",width:34,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},dot:{width:8,height:8,borderRadius:"50%",flexShrink:0,display:"inline-block"},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"var(--accent)",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},filterCard:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:12,marginBottom:18},fChip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},fChipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},fChipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},fToday:{borderColor:"var(--accent)",borderWidth:2},fDivider:{width:1,alignSelf:"stretch",background:"var(--border)",margin:"0 2px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:14},videoCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 9",background:"#000"},thumbBtn:{border:"none",padding:0,margin:0,cursor:"pointer",width:"100%",height:"100%",position:"relative",display:"block",background:"#000"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center",background:"rgba(0,0,0,0.28)"},trimBadge:{position:"absolute",bottom:8,right:8,background:"rgba(0,0,0,0.75)",color:"#fff",fontSize:11,fontWeight:700,padding:"2px 7px",borderRadius:6,fontFamily:"'Fraunces',Georgia,serif"},iframe:{width:"100%",height:"100%",border:"none",display:"block"},videoBody:{padding:"12px 13px",display:"flex",flexDirection:"column",gap:8},videoTitle:{fontSize:14,fontWeight:700},tagWrap:{display:"flex",gap:5,flexWrap:"wrap"},dayTag:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:8},pillTag:{fontSize:10,fontWeight:700,border:"1px solid",borderRadius:8,padding:"2px 7px"},customTag:{fontSize:10,fontWeight:700,color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"2px 7px",borderRadius:8},cardActions:{display:"flex",gap:4,justifyContent:"flex-end"},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},Nl=[{id:"sandstone",name:"Sandstone",description:"Warm editorial light — the original Anvil look.",dark:!1,swatch:["#F7F6F3","#4C9A6B","#26241F"],vars:{"--bg":"#F7F6F3","--surface":"#FFFFFF","--surface-2":"#FAFAF8","--hover":"#F2F1EC","--border":"#ECEAE3","--text":"#26241F","--text-2":"#6B675E","--text-3":"#9A968C","--accent":"#4C9A6B","--accent-strong":"#26241F","--accent-2":"#3A352C"}},{id:"midnight",name:"Midnight",description:"Deep low-glare dark mode for night owls and focus.",dark:!0,swatch:["#161513","#6FB58C","#ECEAE3"],vars:{"--bg":"#161513","--surface":"#211F1C","--surface-2":"#1B1A17","--hover":"#2B2924","--border":"#34312B","--text":"#ECEAE3","--text-2":"#B6B1A6","--text-3":"#8A857A","--accent":"#6FB58C","--accent-strong":"#2E6F4B","--accent-2":"#245C3E"}},{id:"blossom",name:"Blossom",description:"Soft rose & blush — gentle, warm, and feminine.",dark:!1,swatch:["#FFF5F8","#E0608E","#B23A6B"],vars:{"--bg":"#FFF5F8","--surface":"#FFFFFF","--surface-2":"#FFF0F4","--hover":"#FDE7EE","--border":"#F6D9E2","--text":"#3D2230","--text-2":"#7A5466","--text-3":"#B08799","--accent":"#E0608E","--accent-strong":"#B23A6B","--accent-2":"#9C2F5C"}},{id:"tide",name:"Tide",description:"Calm professional blues — clean and focused.",dark:!1,swatch:["#F1F6FA","#2E86C1","#1C4E73"],vars:{"--bg":"#F1F6FA","--surface":"#FFFFFF","--surface-2":"#ECF3F9","--hover":"#E2EEF6","--border":"#D5E3EE","--text":"#13283A","--text-2":"#4A6275","--text-3":"#8AA0B0","--accent":"#2E86C1","--accent-strong":"#1C4E73","--accent-2":"#163E5C"}},{id:"velocity",name:"Velocity",description:"High-energy sport — crisp slate with electric orange.",dark:!1,swatch:["#F4F5F7","#F4511E","#1F2A37"],vars:{"--bg":"#F4F5F7","--surface":"#FFFFFF","--surface-2":"#EEF0F3","--hover":"#E7EAEE","--border":"#DCE0E6","--text":"#18202B","--text-2":"#515B68","--text-3":"#8B95A1","--accent":"#F4511E","--accent-strong":"#1F2A37","--accent-2":"#16202B"}},{id:"evergreen",name:"Evergreen",description:"Earthy forest greens — grounded and natural.",dark:!1,swatch:["#F2F6F1","#3E8E52","#2A4A30"],vars:{"--bg":"#F2F6F1","--surface":"#FFFFFF","--surface-2":"#ECF2EA","--hover":"#E4EEE2","--border":"#D7E4D3","--text":"#1E2B20","--text-2":"#4F6151","--text-3":"#8AA08C","--accent":"#3E8E52","--accent-strong":"#2A4A30","--accent-2":"#213B26"}},{id:"amethyst",name:"Amethyst",description:"Premium purple & plum — elegant and refined.",dark:!1,swatch:["#F6F4FB","#7A4FE0","#3A2D5C"],vars:{"--bg":"#F6F4FB","--surface":"#FFFFFF","--surface-2":"#F1EDF9","--hover":"#EAE3F6","--border":"#DFD6F0","--text":"#241B36","--text-2":"#5A4E72","--text-3":"#9588AE","--accent":"#7A4FE0","--accent-strong":"#3A2D5C","--accent-2":"#2E2349"}}],Cg="sandstone",rb="anvil_theme",Wv=t=>Nl.find(e=>e.id===t)||Nl[0];function nb(){try{return localStorage.getItem(rb)||Cg}catch{return Cg}}function Wn(t,e=!0){const r=Wv(t),o=document.documentElement;Object.entries(r.vars).forEach(([i,l])=>o.style.setProperty(i,l)),o.style.colorScheme=r.dark?"dark":"light",o.setAttribute("data-theme",r.id);const s=document.querySelector('meta[name="theme-color"]');if(s&&s.setAttribute("content",r.vars["--surface"]),e)try{localStorage.setItem(rb,r.id)}catch{}return r.id}function Mv(t=560){const[e,r]=y.useState(()=>window.innerWidth<=t);return y.useEffect(()=>{const o=()=>r(window.innerWidth<=t);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[t]),e}function _v({screens:t,order:e,hidden:r,themeId:o,currency:s,onSaveSidebar:i,onPreviewTheme:l,onCommitTheme:a,onSelectCurrency:d,onClose:g}){const[p,v]=y.useState("sidebar"),[m,k]=y.useState(()=>e.map(C=>({id:C,hidden:r.includes(C)}))),[x,S]=y.useState(o),z=Mv(),b=C=>{S(C),l(C)},u=m.filter(C=>!C.hidden).length,c=(C,T)=>{const R=C+T;if(R<0||R>=m.length)return;const Z=[...m];[Z[C],Z[R]]=[Z[R],Z[C]],k(Z)},h=C=>{const T=m[C];if(!T.hidden&&u<=1)return;const R=[...m];R[C]={...T,hidden:!T.hidden},k(R)},w=()=>{i(m.map(C=>C.id),m.filter(C=>C.hidden).map(C=>C.id))},D=z?{...dt.overlay,padding:0}:dt.overlay,W=z?{...dt.modal,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"100%",borderRadius:0,border:"none"}:dt.modal;return n.jsx("div",{style:D,onClick:g,children:n.jsxs("div",{style:W,onClick:C=>C.stopPropagation(),children:[n.jsxs("div",{style:dt.head,children:[n.jsx("div",{style:dt.title,children:"Settings"}),n.jsx("button",{onClick:g,style:dt.closeBtn,children:n.jsx(ft,{size:18})})]}),n.jsxs("div",{style:dt.tabs,children:[n.jsxs("button",{onClick:()=>v("sidebar"),style:{...dt.tab,...p==="sidebar"?dt.tabOn:{}},children:[n.jsx(Vm,{size:15})," Configure sidebar"]}),n.jsxs("button",{onClick:()=>v("themes"),style:{...dt.tab,...p==="themes"?dt.tabOn:{}},children:[n.jsx(Km,{size:15})," Themes"]}),n.jsxs("button",{onClick:()=>v("currency"),style:{...dt.tab,...p==="currency"?dt.tabOn:{}},children:[n.jsx(Om,{size:15})," Currency"]})]}),n.jsx("div",{style:dt.body,children:p==="sidebar"?n.jsxs(n.Fragment,{children:[n.jsx("p",{style:dt.hint,children:"Reorder items with the arrows, and hide the ones you don't use. Hidden items disappear from the sidebar but stay accessible here."}),n.jsx("div",{style:dt.list,children:m.map((C,T)=>{const R=t[C.id],Z=R.icon;return n.jsxs("div",{style:{...dt.row,opacity:C.hidden?.5:1},children:[n.jsx("span",{style:dt.rowNum,children:T+1}),n.jsx(Z,{size:16}),n.jsx("span",{style:dt.rowLabel,children:R.label}),n.jsx("button",{onClick:()=>h(T),title:C.hidden?"Show":"Hide",style:{...dt.iconBtn,...C.hidden?{}:{color:"var(--accent)"}},children:C.hidden?n.jsx($u,{size:15}):n.jsx(Al,{size:15})}),n.jsx("button",{onClick:()=>c(T,-1),disabled:T===0,style:{...dt.iconBtn,opacity:T===0?.3:1},children:n.jsx(Nm,{size:15})}),n.jsx("button",{onClick:()=>c(T,1),disabled:T===m.length-1,style:{...dt.iconBtn,opacity:T===m.length-1?.3:1},children:n.jsx(Da,{size:15})})]},C.id)})}),n.jsxs("button",{onClick:w,style:dt.saveBtn,children:[n.jsx(wt,{size:15})," Save sidebar"]})]}):p==="currency"?n.jsxs(n.Fragment,{children:[n.jsx("p",{style:dt.hint,children:"Choose the currency used across Vault and Worth. Applies instantly."}),n.jsx("div",{style:dt.list,children:_l.map(C=>{const T=C.code===s;return n.jsxs("button",{onClick:()=>d(C.code),style:{...dt.row,cursor:"pointer",textAlign:"left",width:"100%",...T?{borderColor:"var(--accent)"}:{}},children:[n.jsx("span",{style:dt.curSymbol,children:C.symbol}),n.jsxs("span",{style:dt.rowLabel,children:[C.label," ",n.jsx("span",{style:dt.curCode,children:C.code})]}),T&&n.jsx("span",{style:dt.themeCheck,children:n.jsx(wt,{size:13})})]},C.code)})})]}):n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:dt.hint,children:["Tap a theme to preview it live, then hit ",n.jsx("b",{children:"Apply theme"})," to keep it."]}),n.jsx("div",{style:dt.themeGrid,children:Nl.map(C=>{const T=C.id===x;return n.jsxs("button",{onClick:()=>b(C.id),style:{...dt.themeCard,...T?dt.themeCardOn:{}},children:[n.jsxs("div",{style:dt.swatchRow,children:[C.swatch.map((R,Z)=>n.jsx("span",{style:{...dt.swatch,background:R}},Z)),T&&n.jsx("span",{style:dt.themeCheck,children:n.jsx(wt,{size:13})})]}),n.jsxs("div",{style:dt.themeName,children:[C.name,C.dark?n.jsx("span",{style:dt.darkTag,children:"Dark"}):null]}),n.jsx("div",{style:dt.themeDesc,children:C.description})]},C.id)})}),n.jsxs("button",{onClick:()=>a(x),disabled:x===o,style:{...dt.saveBtn,...x===o?dt.saveBtnDisabled:{}},children:[n.jsx(wt,{size:15})," ",x===o?"Theme applied":"Apply theme"]})]})})]})})}const dt={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,width:460,maxWidth:"100%",maxHeight:"88vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",overflow:"hidden"},head:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 18px",borderBottom:"1px solid var(--border)",flexShrink:0},title:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},tabs:{display:"flex",flexWrap:"wrap",gap:6,padding:"12px 18px 0",flexShrink:0},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"transparent"},body:{padding:"16px 18px 20px",overflowY:"auto",overflowX:"hidden",flex:1,minHeight:0},hint:{fontSize:12.5,color:"var(--text-3)",lineHeight:1.5,margin:"0 0 14px"},list:{display:"flex",flexDirection:"column",gap:6},row:{display:"flex",alignItems:"center",gap:10,padding:"9px 11px",background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:9},rowNum:{fontSize:11,fontWeight:700,color:"var(--text-3)",width:16,textAlign:"center"},rowLabel:{flex:1,fontSize:13.5,fontWeight:500},curSymbol:{width:22,textAlign:"center",fontSize:15,fontWeight:700,color:"var(--text)"},curCode:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginLeft:4},iconBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},saveBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",marginTop:16,border:"none",background:"var(--accent)",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer"},saveBtnDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"default"},themeGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},themeCard:{textAlign:"left",border:"2px solid var(--border)",background:"var(--surface-2)",borderRadius:12,padding:12,cursor:"pointer",display:"flex",flexDirection:"column",gap:6,outline:"none",WebkitTapHighlightColor:"transparent",transition:"border-color .15s ease, box-shadow .15s ease"},themeCardOn:{borderColor:"var(--accent)",boxShadow:"0 0 0 3px color-mix(in srgb, var(--accent) 25%, transparent)"},swatchRow:{display:"flex",alignItems:"center",gap:5,position:"relative"},swatch:{width:22,height:22,borderRadius:"50%",border:"1px solid rgba(0,0,0,0.08)"},themeCheck:{marginLeft:"auto",width:20,height:20,borderRadius:"50%",background:"var(--accent)",color:"#fff",display:"grid",placeItems:"center"},themeName:{fontSize:14,fontWeight:700,display:"flex",alignItems:"center",gap:6},darkTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",background:"var(--hover)",color:"var(--text-2)",padding:"1px 6px",borderRadius:6},themeDesc:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4}};Wn(nb(),!1);const Vn={kickstart:{label:"Kickstart",icon:qm,component:Dv},habits:{label:"Habits",icon:rf,component:Tf},quadrant:{label:"Quadrant",icon:Gu,component:vf},goals:{label:"Goals",icon:Ma,component:wf},grove:{label:"Grove",icon:sf,component:mv},worth:{label:"Worth",icon:Gm,component:yv},vault:{label:"Vault",icon:Uu,component:jv},journal:{label:"Journal",icon:Ou,component:Nf},revision:{label:"Revision",icon:Vu,component:Jf},affirmations:{label:"Affirmations",icon:Yu,component:tv},skills:{label:"Skills",icon:$m,component:Pf},spiritual:{label:"Spiritual",icon:os,component:Hf}},ob=["kickstart","habits","quadrant","goals","grove","journal","revision","affirmations","skills","spiritual","worth","vault"];function Go(t){const e=ob.filter(s=>Vn[s]),o=[...(Array.isArray(t)?t:[]).filter(s=>Vn[s])];return e.forEach(s=>{o.includes(s)||o.push(s)}),o}function Lv(){const[t,e]=y.useState(()=>window.innerWidth<720);return y.useEffect(()=>{const r=()=>e(window.innerWidth<720);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),t}function Nv(){const[t,e]=y.useState("habits"),[r,o]=y.useState(!1),[s,i]=y.useState(null),[l,a]=y.useState(!1),[d,g]=y.useState(!1),[p,v]=y.useState(nb()),[m,k]=y.useState(bo()),[x,S]=y.useState(()=>Go(ob)),[z,b]=y.useState([]),u=Lv();y.useEffect(()=>{let H=!1;const V=()=>{Rl(),i(null)};return window.addEventListener("anvil-unauthorized",V),La()?Y.me().then(E=>{H||i(E)}).catch(()=>{}).finally(()=>{H||a(!0)}):a(!0),()=>{H=!0,window.removeEventListener("anvil-unauthorized",V)}},[]),y.useEffect(()=>{s&&(Y.getSetting("theme").then(H=>{H!=null&&H.value&&v(Wn(H.value))}).catch(()=>{}),Y.getSetting("currency").then(H=>{H!=null&&H.value&&k(bg(H.value))}).catch(()=>{}),Y.getSetting("sidebar_order").then(H=>{Array.isArray(H==null?void 0:H.value)&&S(Go(H.value))}).catch(()=>{}),Y.getSetting("sidebar_hidden").then(H=>{Array.isArray(H==null?void 0:H.value)&&b(H.value)}).catch(()=>{}))},[s]);function c(H){e(H),o(!1)}const h=()=>{Rl(),i(null)},w=H=>{Wn(H,!1)},D=H=>{v(Wn(H)),Y.setSetting("theme",H).catch(()=>{}),g(!1)},W=()=>{Wn(p,!1),g(!1)},C=H=>{k(bg(H)),Y.setSetting("currency",H).catch(()=>{})},T=(H,V)=>{if(S(Go(H)),b(V),g(!1),Y.setSetting("sidebar_order",H).catch(()=>{}),Y.setSetting("sidebar_hidden",V).catch(()=>{}),V.includes(t)){const E=Go(H).find(B=>!V.includes(B));E&&e(E)}},R=x.filter(H=>!z.includes(H));if(!l)return n.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:"'Inter',system-ui,sans-serif",color:"var(--text-3)"},children:"Loading…"});if(!s)return n.jsx(xv,{onAuthed:i});const Z=Vn[t],L=Z.component,j=()=>n.jsx("div",{style:ht.navItems,children:R.map(H=>{const V=Vn[H];if(!V)return null;const E=V.icon,B=t===H;return n.jsxs("button",{onClick:()=>c(H),title:V.label,style:{...ht.navItem,...B?ht.navItemOn:{}},children:[n.jsx(E,{size:18}),n.jsx("span",{style:ht.navLabel,children:V.label})]},H)})}),O=()=>n.jsxs("div",{style:ht.footerWrap,children:[n.jsxs("button",{onClick:()=>g(!0),style:ht.settingsBtn,title:"Settings",children:[n.jsx(ef,{size:17}),n.jsx("span",{children:"Settings"})]}),n.jsxs("div",{style:ht.userFooter,children:[n.jsxs("div",{style:ht.userInfo,children:[n.jsx("div",{style:ht.userAvatar,children:(s.name||s.email||"?").charAt(0).toUpperCase()}),n.jsxs("div",{style:{minWidth:0},children:[n.jsx("div",{style:ht.userName,children:s.name||"You"}),n.jsx("div",{style:ht.userEmail,children:s.email})]})]}),n.jsx("button",{onClick:h,style:ht.logoutBtn,title:"Sign out",children:n.jsx(Ym,{size:16})})]})]});return n.jsxs("div",{style:ht.shell,children:[!u&&n.jsxs("nav",{style:ht.nav,children:[n.jsxs("div",{style:ht.brand,children:[n.jsx("div",{style:ht.brandLogo,children:"B"}),n.jsx("span",{style:ht.brandName,children:"Anvil"})]}),n.jsx(j,{}),n.jsx(O,{})]}),u&&r&&n.jsx("div",{style:ht.overlay,onClick:()=>o(!1),children:n.jsxs("nav",{style:ht.drawer,onClick:H=>H.stopPropagation(),children:[n.jsxs("div",{style:ht.drawerHeader,children:[n.jsxs("div",{style:ht.brand,children:[n.jsx("div",{style:ht.brandLogo,children:"B"}),n.jsx("span",{style:ht.brandName,children:"Anvil"})]}),n.jsx("button",{style:ht.closeBtn,onClick:()=>o(!1),children:n.jsx(ft,{size:20})})]}),n.jsx(j,{}),n.jsx(O,{})]})}),n.jsxs("div",{style:ht.content,children:[u&&n.jsxs("div",{style:ht.topBar,children:[n.jsx("button",{style:ht.menuBtn,onClick:()=>o(!0),children:n.jsx(Wa,{size:22})}),n.jsx("span",{style:ht.topBarTitle,children:Z.label}),n.jsx("div",{style:{width:38}})]}),n.jsx("main",{style:ht.main,children:n.jsx(L,{})})]}),d&&n.jsx(_v,{screens:Vn,order:x,hidden:z,themeId:p,currency:m,onSaveSidebar:T,onPreviewTheme:w,onCommitTheme:D,onSelectCurrency:C,onClose:W})]})}const ht={shell:{display:"flex",height:"100vh",overflow:"hidden",fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)"},nav:{width:200,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column",padding:"20px 10px",gap:2},brand:{display:"flex",alignItems:"center",gap:9,padding:"6px 10px 20px",borderBottom:"1px solid var(--border)",marginBottom:8},brandLogo:{width:30,height:30,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:14,fontWeight:800,fontFamily:"'Fraunces', Georgia, serif",flexShrink:0},brandName:{fontSize:16,fontWeight:700,letterSpacing:"-0.01em",color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},navItems:{display:"flex",flexDirection:"column",gap:2},navItem:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},navItemOn:{background:"var(--hover)",color:"var(--text)",fontWeight:700},footerWrap:{marginTop:"auto",paddingTop:8},settingsBtn:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},userFooter:{marginTop:4,paddingTop:12,borderTop:"1px solid var(--border)",display:"flex",alignItems:"center",gap:8},userInfo:{display:"flex",alignItems:"center",gap:8,flex:1,minWidth:0},userAvatar:{width:30,height:30,borderRadius:"50%",background:"#8268B0",color:"#fff",display:"grid",placeItems:"center",fontSize:13,fontWeight:700,flexShrink:0},userName:{fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},userEmail:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logoutBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",padding:7,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},navLabel:{flex:1},content:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},main:{flex:1,overflowY:"auto",overflowX:"hidden"},topBar:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"var(--surface)",borderBottom:"1px solid var(--border)",flexShrink:0},topBarTitle:{fontSize:16,fontWeight:700,color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},menuBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text)",padding:8,borderRadius:8,display:"grid",placeItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:100,display:"flex"},drawer:{width:220,background:"var(--surface)",height:"100%",display:"flex",flexDirection:"column",padding:"16px 10px",gap:2,boxShadow:"4px 0 24px rgba(0,0,0,0.12)"},drawerHeader:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:4},closeBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",padding:6,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0}};Lu(document.getElementById("root")).render(n.jsx(y.StrictMode,{children:n.jsx(Nv,{})}));
