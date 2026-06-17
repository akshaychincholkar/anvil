(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();var Dg={exports:{}},Ms={},Rg={exports:{}},bt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vo=Symbol.for("react.element"),fb=Symbol.for("react.portal"),hb=Symbol.for("react.fragment"),vb=Symbol.for("react.strict_mode"),yb=Symbol.for("react.profiler"),xb=Symbol.for("react.provider"),kb=Symbol.for("react.context"),wb=Symbol.for("react.forward_ref"),Sb=Symbol.for("react.suspense"),jb=Symbol.for("react.memo"),Cb=Symbol.for("react.lazy"),Va=Symbol.iterator;function Ib(t){return t===null||typeof t!="object"?null:(t=Va&&t[Va]||t["@@iterator"],typeof t=="function"?t:null)}var Wg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mg=Object.assign,_g={};function fn(t,e,r){this.props=t,this.context=e,this.refs=_g,this.updater=r||Wg}fn.prototype.isReactComponent={};fn.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fn.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Lg(){}Lg.prototype=fn.prototype;function Hl(t,e,r){this.props=t,this.context=e,this.refs=_g,this.updater=r||Wg}var Gl=Hl.prototype=new Lg;Gl.constructor=Hl;Mg(Gl,fn.prototype);Gl.isPureReactComponent=!0;var Ya=Array.isArray,Pg=Object.prototype.hasOwnProperty,Ul={current:null},Ng={key:!0,ref:!0,__self:!0,__source:!0};function Og(t,e,r){var o,s={},i=null,l=null;if(e!=null)for(o in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(i=""+e.key),e)Pg.call(e,o)&&!Ng.hasOwnProperty(o)&&(s[o]=e[o]);var a=arguments.length-2;if(a===1)s.children=r;else if(1<a){for(var d=Array(a),g=0;g<a;g++)d[g]=arguments[g+2];s.children=d}if(t&&t.defaultProps)for(o in a=t.defaultProps,a)s[o]===void 0&&(s[o]=a[o]);return{$$typeof:vo,type:t,key:i,ref:l,props:s,_owner:Ul.current}}function zb(t,e){return{$$typeof:vo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vl(t){return typeof t=="object"&&t!==null&&t.$$typeof===vo}function Tb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var Qa=/\/+/g;function Zs(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Tb(""+t.key):e.toString(36)}function Xo(t,e,r,o,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case vo:case fb:l=!0}}if(l)return l=t,s=s(l),t=o===""?"."+Zs(l,0):o,Ya(s)?(r="",t!=null&&(r=t.replace(Qa,"$&/")+"/"),Xo(s,e,r,"",function(g){return g})):s!=null&&(Vl(s)&&(s=zb(s,r+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(Qa,"$&/")+"/")+t)),e.push(s)),1;if(l=0,o=o===""?".":o+":",Ya(t))for(var a=0;a<t.length;a++){i=t[a];var d=o+Zs(i,a);l+=Xo(i,e,r,d,s)}else if(d=Ib(t),typeof d=="function")for(t=d.call(t),a=0;!(i=t.next()).done;)i=i.value,d=o+Zs(i,a++),l+=Xo(i,e,r,d,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function jo(t,e,r){if(t==null)return t;var o=[],s=0;return Xo(t,o,"","",function(i){return e.call(r,i,s++)}),o}function Eb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zt={current:null},Jo={transition:null},Bb={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:Jo,ReactCurrentOwner:Ul};function $g(){throw Error("act(...) is not supported in production builds of React.")}bt.Children={map:jo,forEach:function(t,e,r){jo(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return jo(t,function(){e++}),e},toArray:function(t){return jo(t,function(e){return e})||[]},only:function(t){if(!Vl(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};bt.Component=fn;bt.Fragment=hb;bt.Profiler=yb;bt.PureComponent=Hl;bt.StrictMode=vb;bt.Suspense=Sb;bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bb;bt.act=$g;bt.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=Mg({},t.props),s=t.key,i=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,l=Ul.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(d in e)Pg.call(e,d)&&!Ng.hasOwnProperty(d)&&(o[d]=e[d]===void 0&&a!==void 0?a[d]:e[d])}var d=arguments.length-2;if(d===1)o.children=r;else if(1<d){a=Array(d);for(var g=0;g<d;g++)a[g]=arguments[g+2];o.children=a}return{$$typeof:vo,type:t.type,key:s,ref:i,props:o,_owner:l}};bt.createContext=function(t){return t={$$typeof:kb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:xb,_context:t},t.Consumer=t};bt.createElement=Og;bt.createFactory=function(t){var e=Og.bind(null,t);return e.type=t,e};bt.createRef=function(){return{current:null}};bt.forwardRef=function(t){return{$$typeof:wb,render:t}};bt.isValidElement=Vl;bt.lazy=function(t){return{$$typeof:Cb,_payload:{_status:-1,_result:t},_init:Eb}};bt.memo=function(t,e){return{$$typeof:jb,type:t,compare:e===void 0?null:e}};bt.startTransition=function(t){var e=Jo.transition;Jo.transition={};try{t()}finally{Jo.transition=e}};bt.unstable_act=$g;bt.useCallback=function(t,e){return Zt.current.useCallback(t,e)};bt.useContext=function(t){return Zt.current.useContext(t)};bt.useDebugValue=function(){};bt.useDeferredValue=function(t){return Zt.current.useDeferredValue(t)};bt.useEffect=function(t,e){return Zt.current.useEffect(t,e)};bt.useId=function(){return Zt.current.useId()};bt.useImperativeHandle=function(t,e,r){return Zt.current.useImperativeHandle(t,e,r)};bt.useInsertionEffect=function(t,e){return Zt.current.useInsertionEffect(t,e)};bt.useLayoutEffect=function(t,e){return Zt.current.useLayoutEffect(t,e)};bt.useMemo=function(t,e){return Zt.current.useMemo(t,e)};bt.useReducer=function(t,e,r){return Zt.current.useReducer(t,e,r)};bt.useRef=function(t){return Zt.current.useRef(t)};bt.useState=function(t){return Zt.current.useState(t)};bt.useSyncExternalStore=function(t,e,r){return Zt.current.useSyncExternalStore(t,e,r)};bt.useTransition=function(){return Zt.current.useTransition()};bt.version="18.3.1";Rg.exports=bt;var y=Rg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fb=y,Ab=Symbol.for("react.element"),Db=Symbol.for("react.fragment"),Rb=Object.prototype.hasOwnProperty,Wb=Fb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mb={key:!0,ref:!0,__self:!0,__source:!0};function Hg(t,e,r){var o,s={},i=null,l=null;r!==void 0&&(i=""+r),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(l=e.ref);for(o in e)Rb.call(e,o)&&!Mb.hasOwnProperty(o)&&(s[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps,e)s[o]===void 0&&(s[o]=e[o]);return{$$typeof:Ab,type:t,key:i,ref:l,props:s,_owner:Wb.current}}Ms.Fragment=Db;Ms.jsx=Hg;Ms.jsxs=Hg;Dg.exports=Ms;var n=Dg.exports,Gg={exports:{}},de={},Ug={exports:{}},Vg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,V){var K=B.length;B.push(V);t:for(;0<K;){var $=K-1>>>1,nt=B[$];if(0<s(nt,V))B[$]=V,B[K]=nt,K=$;else break t}}function r(B){return B.length===0?null:B[0]}function o(B){if(B.length===0)return null;var V=B[0],K=B.pop();if(K!==V){B[0]=K;t:for(var $=0,nt=B.length,h=nt>>>1;$<h;){var L=2*($+1)-1,lt=B[L],it=L+1,mt=B[it];if(0>s(lt,K))it<nt&&0>s(mt,lt)?(B[$]=mt,B[it]=K,$=it):(B[$]=lt,B[L]=K,$=L);else if(it<nt&&0>s(mt,K))B[$]=mt,B[it]=K,$=it;else break t}}return V}function s(B,V){var K=B.sortIndex-V.sortIndex;return K!==0?K:B.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();t.unstable_now=function(){return l.now()-a}}var d=[],g=[],m=1,v=null,p=3,S=!1,w=!1,j=!1,C=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function c(B){for(var V=r(g);V!==null;){if(V.callback===null)o(g);else if(V.startTime<=B)o(g),V.sortIndex=V.expirationTime,e(d,V);else break;V=r(g)}}function k(B){if(j=!1,c(B),!w)if(r(d)!==null)w=!0,H(x);else{var V=r(g);V!==null&&z(k,V.startTime-B)}}function x(B,V){w=!1,j&&(j=!1,b(F),F=-1),S=!0;var K=p;try{for(c(V),v=r(d);v!==null&&(!(v.expirationTime>V)||B&&!et());){var $=v.callback;if(typeof $=="function"){v.callback=null,p=v.priorityLevel;var nt=$(v.expirationTime<=V);V=t.unstable_now(),typeof nt=="function"?v.callback=nt:v===r(d)&&o(d),c(V)}else o(d);v=r(d)}if(v!==null)var h=!0;else{var L=r(g);L!==null&&z(k,L.startTime-V),h=!1}return h}finally{v=null,p=K,S=!1}}var T=!1,R=null,F=-1,E=5,W=-1;function et(){return!(t.unstable_now()-W<E)}function M(){if(R!==null){var B=t.unstable_now();W=B;var V=!0;try{V=R(!0,B)}finally{V?f():(T=!1,R=null)}}else T=!1}var f;if(typeof u=="function")f=function(){u(M)};else if(typeof MessageChannel<"u"){var _=new MessageChannel,N=_.port2;_.port1.onmessage=M,f=function(){N.postMessage(null)}}else f=function(){C(M,0)};function H(B){R=B,T||(T=!0,f())}function z(B,V){F=C(function(){B(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){w||S||(w=!0,H(x))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(d)},t.unstable_next=function(B){switch(p){case 1:case 2:case 3:var V=3;break;default:V=p}var K=p;p=V;try{return B()}finally{p=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,V){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var K=p;p=B;try{return V()}finally{p=K}},t.unstable_scheduleCallback=function(B,V,K){var $=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?$+K:$):K=$,B){case 1:var nt=-1;break;case 2:nt=250;break;case 5:nt=1073741823;break;case 4:nt=1e4;break;default:nt=5e3}return nt=K+nt,B={id:m++,callback:V,priorityLevel:B,startTime:K,expirationTime:nt,sortIndex:-1},K>$?(B.sortIndex=K,e(g,B),r(d)===null&&B===r(g)&&(j?(b(F),F=-1):j=!0,z(k,K-$))):(B.sortIndex=nt,e(d,B),w||S||(w=!0,H(x))),B},t.unstable_shouldYield=et,t.unstable_wrapCallback=function(B){var V=p;return function(){var K=p;p=V;try{return B.apply(this,arguments)}finally{p=K}}}})(Vg);Ug.exports=Vg;var _b=Ug.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lb=y,ae=_b;function O(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yg=new Set,Zn={};function Pr(t,e){dn(t,e),dn(t+"Capture",e)}function dn(t,e){for(Zn[t]=e,t=0;t<e.length;t++)Yg.add(e[t])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ni=Object.prototype.hasOwnProperty,Pb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ka={},Xa={};function Nb(t){return Ni.call(Xa,t)?!0:Ni.call(Ka,t)?!1:Pb.test(t)?Xa[t]=!0:(Ka[t]=!0,!1)}function Ob(t,e,r,o){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $b(t,e,r,o){if(e===null||typeof e>"u"||Ob(t,e,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,r,o,s,i,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=l}var Ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ut[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ut[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ut[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ut[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ut[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ut[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ut[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ut[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ut[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Yl=/[\-:]([a-z])/g;function Ql(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Yl,Ql);Ut[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Yl,Ql);Ut[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Yl,Ql);Ut[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ut[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ut.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ut[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kl(t,e,r,o){var s=Ut.hasOwnProperty(e)?Ut[e]:null;(s!==null?s.type!==0:o||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($b(e,r,s,o)&&(r=null),o||s===null?Nb(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):s.mustUseProperty?t[s.propertyName]=r===null?s.type===3?!1:"":r:(e=s.attributeName,o=s.attributeNamespace,r===null?t.removeAttribute(e):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,o?t.setAttributeNS(o,e,r):t.setAttribute(e,r))))}var qe=Lb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Co=Symbol.for("react.element"),Gr=Symbol.for("react.portal"),Ur=Symbol.for("react.fragment"),Xl=Symbol.for("react.strict_mode"),Oi=Symbol.for("react.profiler"),Qg=Symbol.for("react.provider"),Kg=Symbol.for("react.context"),Jl=Symbol.for("react.forward_ref"),$i=Symbol.for("react.suspense"),Hi=Symbol.for("react.suspense_list"),Zl=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),Xg=Symbol.for("react.offscreen"),Ja=Symbol.iterator;function jn(t){return t===null||typeof t!="object"?null:(t=Ja&&t[Ja]||t["@@iterator"],typeof t=="function"?t:null)}var Dt=Object.assign,qs;function Rn(t){if(qs===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);qs=e&&e[1]||""}return`
`+qs+t}var ti=!1;function ei(t,e){if(!t||ti)return"";ti=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(g){var o=g}Reflect.construct(t,[],e)}else{try{e.call()}catch(g){o=g}t.call(e.prototype)}else{try{throw Error()}catch(g){o=g}t()}}catch(g){if(g&&o&&typeof g.stack=="string"){for(var s=g.stack.split(`
`),i=o.stack.split(`
`),l=s.length-1,a=i.length-1;1<=l&&0<=a&&s[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(s[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||s[l]!==i[a]){var d=`
`+s[l].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=l&&0<=a);break}}}finally{ti=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?Rn(t):""}function Hb(t){switch(t.tag){case 5:return Rn(t.type);case 16:return Rn("Lazy");case 13:return Rn("Suspense");case 19:return Rn("SuspenseList");case 0:case 2:case 15:return t=ei(t.type,!1),t;case 11:return t=ei(t.type.render,!1),t;case 1:return t=ei(t.type,!0),t;default:return""}}function Gi(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ur:return"Fragment";case Gr:return"Portal";case Oi:return"Profiler";case Xl:return"StrictMode";case $i:return"Suspense";case Hi:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Kg:return(t.displayName||"Context")+".Consumer";case Qg:return(t._context.displayName||"Context")+".Provider";case Jl:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zl:return e=t.displayName||null,e!==null?e:Gi(t.type)||"Memo";case rr:e=t._payload,t=t._init;try{return Gi(t(e))}catch{}}return null}function Gb(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gi(e);case 8:return e===Xl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ub(t){var e=Jg(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),o=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,i=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(l){o=""+l,i.call(this,l)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Io(t){t._valueTracker||(t._valueTracker=Ub(t))}function Zg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),o="";return t&&(o=Jg(t)?t.checked?"true":"false":t.value),t=o,t!==r?(e.setValue(t),!0):!1}function gs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ui(t,e){var r=e.checked;return Dt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Za(t,e){var r=e.defaultValue==null?"":e.defaultValue,o=e.checked!=null?e.checked:e.defaultChecked;r=fr(e.value!=null?e.value:r),t._wrapperState={initialChecked:o,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function qg(t,e){e=e.checked,e!=null&&Kl(t,"checked",e,!1)}function Vi(t,e){qg(t,e);var r=fr(e.value),o=e.type;if(r!=null)o==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(o==="submit"||o==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yi(t,e.type,r):e.hasOwnProperty("defaultValue")&&Yi(t,e.type,fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function qa(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var o=e.type;if(!(o!=="submit"&&o!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function Yi(t,e,r){(e!=="number"||gs(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var Wn=Array.isArray;function rn(t,e,r,o){if(t=t.options,e){e={};for(var s=0;s<r.length;s++)e["$"+r[s]]=!0;for(r=0;r<t.length;r++)s=e.hasOwnProperty("$"+t[r].value),t[r].selected!==s&&(t[r].selected=s),s&&o&&(t[r].defaultSelected=!0)}else{for(r=""+fr(r),e=null,s=0;s<t.length;s++){if(t[s].value===r){t[s].selected=!0,o&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Qi(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(O(91));return Dt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function td(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(O(92));if(Wn(r)){if(1<r.length)throw Error(O(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:fr(r)}}function tc(t,e){var r=fr(e.value),o=fr(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),o!=null&&(t.defaultValue=""+o)}function ed(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ec(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ki(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ec(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var zo,rc=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,o,s){MSApp.execUnsafeLocalFunction(function(){return t(e,r,o,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(zo=zo||document.createElement("div"),zo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=zo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qn(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var On={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vb=["Webkit","ms","Moz","O"];Object.keys(On).forEach(function(t){Vb.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),On[e]=On[t]})});function nc(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||On.hasOwnProperty(t)&&On[t]?(""+e).trim():e+"px"}function oc(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var o=r.indexOf("--")===0,s=nc(r,e[r],o);r==="float"&&(r="cssFloat"),o?t.setProperty(r,s):t[r]=s}}var Yb=Dt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xi(t,e){if(e){if(Yb[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(O(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(O(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(O(61))}if(e.style!=null&&typeof e.style!="object")throw Error(O(62))}}function Ji(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zi=null;function ql(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qi=null,nn=null,on=null;function rd(t){if(t=ko(t)){if(typeof qi!="function")throw Error(O(280));var e=t.stateNode;e&&(e=Os(e),qi(t.stateNode,t.type,e))}}function sc(t){nn?on?on.push(t):on=[t]:nn=t}function ic(){if(nn){var t=nn,e=on;if(on=nn=null,rd(t),e)for(t=0;t<e.length;t++)rd(e[t])}}function lc(t,e){return t(e)}function ac(){}var ri=!1;function dc(t,e,r){if(ri)return t(e,r);ri=!0;try{return lc(t,e,r)}finally{ri=!1,(nn!==null||on!==null)&&(ac(),ic())}}function to(t,e){var r=t.stateNode;if(r===null)return null;var o=Os(r);if(o===null)return null;r=o[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(O(231,e,typeof r));return r}var tl=!1;if(Ke)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){tl=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{tl=!1}function Qb(t,e,r,o,s,i,l,a,d){var g=Array.prototype.slice.call(arguments,3);try{e.apply(r,g)}catch(m){this.onError(m)}}var $n=!1,cs=null,us=!1,el=null,Kb={onError:function(t){$n=!0,cs=t}};function Xb(t,e,r,o,s,i,l,a,d){$n=!1,cs=null,Qb.apply(Kb,arguments)}function Jb(t,e,r,o,s,i,l,a,d){if(Xb.apply(this,arguments),$n){if($n){var g=cs;$n=!1,cs=null}else throw Error(O(198));us||(us=!0,el=g)}}function Nr(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function gc(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function nd(t){if(Nr(t)!==t)throw Error(O(188))}function Zb(t){var e=t.alternate;if(!e){if(e=Nr(t),e===null)throw Error(O(188));return e!==t?null:t}for(var r=t,o=e;;){var s=r.return;if(s===null)break;var i=s.alternate;if(i===null){if(o=s.return,o!==null){r=o;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===r)return nd(s),t;if(i===o)return nd(s),e;i=i.sibling}throw Error(O(188))}if(r.return!==o.return)r=s,o=i;else{for(var l=!1,a=s.child;a;){if(a===r){l=!0,r=s,o=i;break}if(a===o){l=!0,o=s,r=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===r){l=!0,r=i,o=s;break}if(a===o){l=!0,o=i,r=s;break}a=a.sibling}if(!l)throw Error(O(189))}}if(r.alternate!==o)throw Error(O(190))}if(r.tag!==3)throw Error(O(188));return r.stateNode.current===r?t:e}function cc(t){return t=Zb(t),t!==null?uc(t):null}function uc(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=uc(t);if(e!==null)return e;t=t.sibling}return null}var bc=ae.unstable_scheduleCallback,od=ae.unstable_cancelCallback,qb=ae.unstable_shouldYield,tp=ae.unstable_requestPaint,Wt=ae.unstable_now,ep=ae.unstable_getCurrentPriorityLevel,ta=ae.unstable_ImmediatePriority,pc=ae.unstable_UserBlockingPriority,bs=ae.unstable_NormalPriority,rp=ae.unstable_LowPriority,mc=ae.unstable_IdlePriority,_s=null,Le=null;function np(t){if(Le&&typeof Le.onCommitFiberRoot=="function")try{Le.onCommitFiberRoot(_s,t,void 0,(t.current.flags&128)===128)}catch{}}var Ce=Math.clz32?Math.clz32:ip,op=Math.log,sp=Math.LN2;function ip(t){return t>>>=0,t===0?32:31-(op(t)/sp|0)|0}var To=64,Eo=4194304;function Mn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ps(t,e){var r=t.pendingLanes;if(r===0)return 0;var o=0,s=t.suspendedLanes,i=t.pingedLanes,l=r&268435455;if(l!==0){var a=l&~s;a!==0?o=Mn(a):(i&=l,i!==0&&(o=Mn(i)))}else l=r&~s,l!==0?o=Mn(l):i!==0&&(o=Mn(i));if(o===0)return 0;if(e!==0&&e!==o&&!(e&s)&&(s=o&-o,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(o&4&&(o|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=o;0<e;)r=31-Ce(e),s=1<<r,o|=t[r],e&=~s;return o}function lp(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ap(t,e){for(var r=t.suspendedLanes,o=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var l=31-Ce(i),a=1<<l,d=s[l];d===-1?(!(a&r)||a&o)&&(s[l]=lp(a,e)):d<=e&&(t.expiredLanes|=a),i&=~a}}function rl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fc(){var t=To;return To<<=1,!(To&4194240)&&(To=64),t}function ni(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function yo(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ce(e),t[e]=r}function dp(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var o=t.eventTimes;for(t=t.expirationTimes;0<r;){var s=31-Ce(r),i=1<<s;e[s]=0,o[s]=-1,t[s]=-1,r&=~i}}function ea(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var o=31-Ce(r),s=1<<o;s&e|t[o]&e&&(t[o]|=e),r&=~s}}var kt=0;function hc(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var vc,ra,yc,xc,kc,nl=!1,Bo=[],ar=null,dr=null,gr=null,eo=new Map,ro=new Map,or=[],gp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sd(t,e){switch(t){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":eo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ro.delete(e.pointerId)}}function In(t,e,r,o,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:r,eventSystemFlags:o,nativeEvent:i,targetContainers:[s]},e!==null&&(e=ko(e),e!==null&&ra(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function cp(t,e,r,o,s){switch(e){case"focusin":return ar=In(ar,t,e,r,o,s),!0;case"dragenter":return dr=In(dr,t,e,r,o,s),!0;case"mouseover":return gr=In(gr,t,e,r,o,s),!0;case"pointerover":var i=s.pointerId;return eo.set(i,In(eo.get(i)||null,t,e,r,o,s)),!0;case"gotpointercapture":return i=s.pointerId,ro.set(i,In(ro.get(i)||null,t,e,r,o,s)),!0}return!1}function wc(t){var e=Ir(t.target);if(e!==null){var r=Nr(e);if(r!==null){if(e=r.tag,e===13){if(e=gc(r),e!==null){t.blockedOn=e,kc(t.priority,function(){yc(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=ol(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);Zi=o,r.target.dispatchEvent(o),Zi=null}else return e=ko(r),e!==null&&ra(e),t.blockedOn=r,!1;e.shift()}return!0}function id(t,e,r){Zo(t)&&r.delete(e)}function up(){nl=!1,ar!==null&&Zo(ar)&&(ar=null),dr!==null&&Zo(dr)&&(dr=null),gr!==null&&Zo(gr)&&(gr=null),eo.forEach(id),ro.forEach(id)}function zn(t,e){t.blockedOn===e&&(t.blockedOn=null,nl||(nl=!0,ae.unstable_scheduleCallback(ae.unstable_NormalPriority,up)))}function no(t){function e(s){return zn(s,t)}if(0<Bo.length){zn(Bo[0],t);for(var r=1;r<Bo.length;r++){var o=Bo[r];o.blockedOn===t&&(o.blockedOn=null)}}for(ar!==null&&zn(ar,t),dr!==null&&zn(dr,t),gr!==null&&zn(gr,t),eo.forEach(e),ro.forEach(e),r=0;r<or.length;r++)o=or[r],o.blockedOn===t&&(o.blockedOn=null);for(;0<or.length&&(r=or[0],r.blockedOn===null);)wc(r),r.blockedOn===null&&or.shift()}var sn=qe.ReactCurrentBatchConfig,ms=!0;function bp(t,e,r,o){var s=kt,i=sn.transition;sn.transition=null;try{kt=1,na(t,e,r,o)}finally{kt=s,sn.transition=i}}function pp(t,e,r,o){var s=kt,i=sn.transition;sn.transition=null;try{kt=4,na(t,e,r,o)}finally{kt=s,sn.transition=i}}function na(t,e,r,o){if(ms){var s=ol(t,e,r,o);if(s===null)bi(t,e,o,fs,r),sd(t,o);else if(cp(s,t,e,r,o))o.stopPropagation();else if(sd(t,o),e&4&&-1<gp.indexOf(t)){for(;s!==null;){var i=ko(s);if(i!==null&&vc(i),i=ol(t,e,r,o),i===null&&bi(t,e,o,fs,r),i===s)break;s=i}s!==null&&o.stopPropagation()}else bi(t,e,o,null,r)}}var fs=null;function ol(t,e,r,o){if(fs=null,t=ql(o),t=Ir(t),t!==null)if(e=Nr(t),e===null)t=null;else if(r=e.tag,r===13){if(t=gc(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return fs=t,null}function Sc(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ep()){case ta:return 1;case pc:return 4;case bs:case rp:return 16;case mc:return 536870912;default:return 16}default:return 16}}var ir=null,oa=null,qo=null;function jc(){if(qo)return qo;var t,e=oa,r=e.length,o,s="value"in ir?ir.value:ir.textContent,i=s.length;for(t=0;t<r&&e[t]===s[t];t++);var l=r-t;for(o=1;o<=l&&e[r-o]===s[i-o];o++);return qo=s.slice(t,1<o?1-o:void 0)}function ts(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fo(){return!0}function ld(){return!1}function ge(t){function e(r,o,s,i,l){this._reactName=r,this._targetInst=s,this.type=o,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(r=t[a],this[a]=r?r(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Fo:ld,this.isPropagationStopped=ld,this}return Dt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Fo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Fo)},persist:function(){},isPersistent:Fo}),e}var hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sa=ge(hn),xo=Dt({},hn,{view:0,detail:0}),mp=ge(xo),oi,si,Tn,Ls=Dt({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ia,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Tn&&(Tn&&t.type==="mousemove"?(oi=t.screenX-Tn.screenX,si=t.screenY-Tn.screenY):si=oi=0,Tn=t),oi)},movementY:function(t){return"movementY"in t?t.movementY:si}}),ad=ge(Ls),fp=Dt({},Ls,{dataTransfer:0}),hp=ge(fp),vp=Dt({},xo,{relatedTarget:0}),ii=ge(vp),yp=Dt({},hn,{animationName:0,elapsedTime:0,pseudoElement:0}),xp=ge(yp),kp=Dt({},hn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wp=ge(kp),Sp=Dt({},hn,{data:0}),dd=ge(Sp),jp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ip={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zp(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ip[t])?!!e[t]:!1}function ia(){return zp}var Tp=Dt({},xo,{key:function(t){if(t.key){var e=jp[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ts(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Cp[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ia,charCode:function(t){return t.type==="keypress"?ts(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ts(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ep=ge(Tp),Bp=Dt({},Ls,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gd=ge(Bp),Fp=Dt({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ia}),Ap=ge(Fp),Dp=Dt({},hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rp=ge(Dp),Wp=Dt({},Ls,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Mp=ge(Wp),_p=[9,13,27,32],la=Ke&&"CompositionEvent"in window,Hn=null;Ke&&"documentMode"in document&&(Hn=document.documentMode);var Lp=Ke&&"TextEvent"in window&&!Hn,Cc=Ke&&(!la||Hn&&8<Hn&&11>=Hn),cd=" ",ud=!1;function Ic(t,e){switch(t){case"keyup":return _p.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zc(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vr=!1;function Pp(t,e){switch(t){case"compositionend":return zc(e);case"keypress":return e.which!==32?null:(ud=!0,cd);case"textInput":return t=e.data,t===cd&&ud?null:t;default:return null}}function Np(t,e){if(Vr)return t==="compositionend"||!la&&Ic(t,e)?(t=jc(),qo=oa=ir=null,Vr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Cc&&e.locale!=="ko"?null:e.data;default:return null}}var Op={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Op[t.type]:e==="textarea"}function Tc(t,e,r,o){sc(o),e=hs(e,"onChange"),0<e.length&&(r=new sa("onChange","change",null,r,o),t.push({event:r,listeners:e}))}var Gn=null,oo=null;function $p(t){Pc(t,0)}function Ps(t){var e=Kr(t);if(Zg(e))return t}function Hp(t,e){if(t==="change")return e}var Ec=!1;if(Ke){var li;if(Ke){var ai="oninput"in document;if(!ai){var pd=document.createElement("div");pd.setAttribute("oninput","return;"),ai=typeof pd.oninput=="function"}li=ai}else li=!1;Ec=li&&(!document.documentMode||9<document.documentMode)}function md(){Gn&&(Gn.detachEvent("onpropertychange",Bc),oo=Gn=null)}function Bc(t){if(t.propertyName==="value"&&Ps(oo)){var e=[];Tc(e,oo,t,ql(t)),dc($p,e)}}function Gp(t,e,r){t==="focusin"?(md(),Gn=e,oo=r,Gn.attachEvent("onpropertychange",Bc)):t==="focusout"&&md()}function Up(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ps(oo)}function Vp(t,e){if(t==="click")return Ps(e)}function Yp(t,e){if(t==="input"||t==="change")return Ps(e)}function Qp(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ze=typeof Object.is=="function"?Object.is:Qp;function so(t,e){if(ze(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),o=Object.keys(e);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var s=r[o];if(!Ni.call(e,s)||!ze(t[s],e[s]))return!1}return!0}function fd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hd(t,e){var r=fd(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=e&&o>=e)return{node:r,offset:e-t};t=o}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=fd(r)}}function Fc(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Fc(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ac(){for(var t=window,e=gs();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=gs(t.document)}return e}function aa(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Kp(t){var e=Ac(),r=t.focusedElem,o=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&Fc(r.ownerDocument.documentElement,r)){if(o!==null&&aa(r)){if(e=o.start,t=o.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=r.textContent.length,i=Math.min(o.start,s);o=o.end===void 0?i:Math.min(o.end,s),!t.extend&&i>o&&(s=o,o=i,i=s),s=hd(r,i);var l=hd(r,o);s&&l&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>o?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Xp=Ke&&"documentMode"in document&&11>=document.documentMode,Yr=null,sl=null,Un=null,il=!1;function vd(t,e,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;il||Yr==null||Yr!==gs(o)||(o=Yr,"selectionStart"in o&&aa(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Un&&so(Un,o)||(Un=o,o=hs(sl,"onSelect"),0<o.length&&(e=new sa("onSelect","select",null,e,r),t.push({event:e,listeners:o}),e.target=Yr)))}function Ao(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Qr={animationend:Ao("Animation","AnimationEnd"),animationiteration:Ao("Animation","AnimationIteration"),animationstart:Ao("Animation","AnimationStart"),transitionend:Ao("Transition","TransitionEnd")},di={},Dc={};Ke&&(Dc=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function Ns(t){if(di[t])return di[t];if(!Qr[t])return t;var e=Qr[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in Dc)return di[t]=e[r];return t}var Rc=Ns("animationend"),Wc=Ns("animationiteration"),Mc=Ns("animationstart"),_c=Ns("transitionend"),Lc=new Map,yd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,e){Lc.set(t,e),Pr(e,[t])}for(var gi=0;gi<yd.length;gi++){var ci=yd[gi],Jp=ci.toLowerCase(),Zp=ci[0].toUpperCase()+ci.slice(1);vr(Jp,"on"+Zp)}vr(Rc,"onAnimationEnd");vr(Wc,"onAnimationIteration");vr(Mc,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(_c,"onTransitionEnd");dn("onMouseEnter",["mouseout","mouseover"]);dn("onMouseLeave",["mouseout","mouseover"]);dn("onPointerEnter",["pointerout","pointerover"]);dn("onPointerLeave",["pointerout","pointerover"]);Pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qp=new Set("cancel close invalid load scroll toggle".split(" ").concat(_n));function xd(t,e,r){var o=t.type||"unknown-event";t.currentTarget=r,Jb(o,e,void 0,t),t.currentTarget=null}function Pc(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],s=o.event;o=o.listeners;t:{var i=void 0;if(e)for(var l=o.length-1;0<=l;l--){var a=o[l],d=a.instance,g=a.currentTarget;if(a=a.listener,d!==i&&s.isPropagationStopped())break t;xd(s,a,g),i=d}else for(l=0;l<o.length;l++){if(a=o[l],d=a.instance,g=a.currentTarget,a=a.listener,d!==i&&s.isPropagationStopped())break t;xd(s,a,g),i=d}}}if(us)throw t=el,us=!1,el=null,t}function It(t,e){var r=e[cl];r===void 0&&(r=e[cl]=new Set);var o=t+"__bubble";r.has(o)||(Nc(e,t,2,!1),r.add(o))}function ui(t,e,r){var o=0;e&&(o|=4),Nc(r,t,o,e)}var Do="_reactListening"+Math.random().toString(36).slice(2);function io(t){if(!t[Do]){t[Do]=!0,Yg.forEach(function(r){r!=="selectionchange"&&(qp.has(r)||ui(r,!1,t),ui(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Do]||(e[Do]=!0,ui("selectionchange",!1,e))}}function Nc(t,e,r,o){switch(Sc(e)){case 1:var s=bp;break;case 4:s=pp;break;default:s=na}r=s.bind(null,e,r,t),s=void 0,!tl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),o?s!==void 0?t.addEventListener(e,r,{capture:!0,passive:s}):t.addEventListener(e,r,!0):s!==void 0?t.addEventListener(e,r,{passive:s}):t.addEventListener(e,r,!1)}function bi(t,e,r,o,s){var i=o;if(!(e&1)&&!(e&2)&&o!==null)t:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var a=o.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(l===4)for(l=o.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===s||d.nodeType===8&&d.parentNode===s))return;l=l.return}for(;a!==null;){if(l=Ir(a),l===null)return;if(d=l.tag,d===5||d===6){o=i=l;continue t}a=a.parentNode}}o=o.return}dc(function(){var g=i,m=ql(r),v=[];t:{var p=Lc.get(t);if(p!==void 0){var S=sa,w=t;switch(t){case"keypress":if(ts(r)===0)break t;case"keydown":case"keyup":S=Ep;break;case"focusin":w="focus",S=ii;break;case"focusout":w="blur",S=ii;break;case"beforeblur":case"afterblur":S=ii;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=hp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Ap;break;case Rc:case Wc:case Mc:S=xp;break;case _c:S=Rp;break;case"scroll":S=mp;break;case"wheel":S=Mp;break;case"copy":case"cut":case"paste":S=wp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=gd}var j=(e&4)!==0,C=!j&&t==="scroll",b=j?p!==null?p+"Capture":null:p;j=[];for(var u=g,c;u!==null;){c=u;var k=c.stateNode;if(c.tag===5&&k!==null&&(c=k,b!==null&&(k=to(u,b),k!=null&&j.push(lo(u,k,c)))),C)break;u=u.return}0<j.length&&(p=new S(p,w,null,r,m),v.push({event:p,listeners:j}))}}if(!(e&7)){t:{if(p=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",p&&r!==Zi&&(w=r.relatedTarget||r.fromElement)&&(Ir(w)||w[Xe]))break t;if((S||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,S?(w=r.relatedTarget||r.toElement,S=g,w=w?Ir(w):null,w!==null&&(C=Nr(w),w!==C||w.tag!==5&&w.tag!==6)&&(w=null)):(S=null,w=g),S!==w)){if(j=ad,k="onMouseLeave",b="onMouseEnter",u="mouse",(t==="pointerout"||t==="pointerover")&&(j=gd,k="onPointerLeave",b="onPointerEnter",u="pointer"),C=S==null?p:Kr(S),c=w==null?p:Kr(w),p=new j(k,u+"leave",S,r,m),p.target=C,p.relatedTarget=c,k=null,Ir(m)===g&&(j=new j(b,u+"enter",w,r,m),j.target=c,j.relatedTarget=C,k=j),C=k,S&&w)e:{for(j=S,b=w,u=0,c=j;c;c=$r(c))u++;for(c=0,k=b;k;k=$r(k))c++;for(;0<u-c;)j=$r(j),u--;for(;0<c-u;)b=$r(b),c--;for(;u--;){if(j===b||b!==null&&j===b.alternate)break e;j=$r(j),b=$r(b)}j=null}else j=null;S!==null&&kd(v,p,S,j,!1),w!==null&&C!==null&&kd(v,C,w,j,!0)}}t:{if(p=g?Kr(g):window,S=p.nodeName&&p.nodeName.toLowerCase(),S==="select"||S==="input"&&p.type==="file")var x=Hp;else if(bd(p))if(Ec)x=Yp;else{x=Up;var T=Gp}else(S=p.nodeName)&&S.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(x=Vp);if(x&&(x=x(t,g))){Tc(v,x,r,m);break t}T&&T(t,p,g),t==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&Yi(p,"number",p.value)}switch(T=g?Kr(g):window,t){case"focusin":(bd(T)||T.contentEditable==="true")&&(Yr=T,sl=g,Un=null);break;case"focusout":Un=sl=Yr=null;break;case"mousedown":il=!0;break;case"contextmenu":case"mouseup":case"dragend":il=!1,vd(v,r,m);break;case"selectionchange":if(Xp)break;case"keydown":case"keyup":vd(v,r,m)}var R;if(la)t:{switch(t){case"compositionstart":var F="onCompositionStart";break t;case"compositionend":F="onCompositionEnd";break t;case"compositionupdate":F="onCompositionUpdate";break t}F=void 0}else Vr?Ic(t,r)&&(F="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(F="onCompositionStart");F&&(Cc&&r.locale!=="ko"&&(Vr||F!=="onCompositionStart"?F==="onCompositionEnd"&&Vr&&(R=jc()):(ir=m,oa="value"in ir?ir.value:ir.textContent,Vr=!0)),T=hs(g,F),0<T.length&&(F=new dd(F,t,null,r,m),v.push({event:F,listeners:T}),R?F.data=R:(R=zc(r),R!==null&&(F.data=R)))),(R=Lp?Pp(t,r):Np(t,r))&&(g=hs(g,"onBeforeInput"),0<g.length&&(m=new dd("onBeforeInput","beforeinput",null,r,m),v.push({event:m,listeners:g}),m.data=R))}Pc(v,e)})}function lo(t,e,r){return{instance:t,listener:e,currentTarget:r}}function hs(t,e){for(var r=e+"Capture",o=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=to(t,r),i!=null&&o.unshift(lo(t,i,s)),i=to(t,e),i!=null&&o.push(lo(t,i,s))),t=t.return}return o}function $r(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kd(t,e,r,o,s){for(var i=e._reactName,l=[];r!==null&&r!==o;){var a=r,d=a.alternate,g=a.stateNode;if(d!==null&&d===o)break;a.tag===5&&g!==null&&(a=g,s?(d=to(r,i),d!=null&&l.unshift(lo(r,d,a))):s||(d=to(r,i),d!=null&&l.push(lo(r,d,a)))),r=r.return}l.length!==0&&t.push({event:e,listeners:l})}var tm=/\r\n?/g,em=/\u0000|\uFFFD/g;function wd(t){return(typeof t=="string"?t:""+t).replace(tm,`
`).replace(em,"")}function Ro(t,e,r){if(e=wd(e),wd(t)!==e&&r)throw Error(O(425))}function vs(){}var ll=null,al=null;function dl(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gl=typeof setTimeout=="function"?setTimeout:void 0,rm=typeof clearTimeout=="function"?clearTimeout:void 0,Sd=typeof Promise=="function"?Promise:void 0,nm=typeof queueMicrotask=="function"?queueMicrotask:typeof Sd<"u"?function(t){return Sd.resolve(null).then(t).catch(om)}:gl;function om(t){setTimeout(function(){throw t})}function pi(t,e){var r=e,o=0;do{var s=r.nextSibling;if(t.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(o===0){t.removeChild(s),no(e);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=s}while(r);no(e)}function cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function jd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var vn=Math.random().toString(36).slice(2),_e="__reactFiber$"+vn,ao="__reactProps$"+vn,Xe="__reactContainer$"+vn,cl="__reactEvents$"+vn,sm="__reactListeners$"+vn,im="__reactHandles$"+vn;function Ir(t){var e=t[_e];if(e)return e;for(var r=t.parentNode;r;){if(e=r[Xe]||r[_e]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=jd(t);t!==null;){if(r=t[_e])return r;t=jd(t)}return e}t=r,r=t.parentNode}return null}function ko(t){return t=t[_e]||t[Xe],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Kr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(O(33))}function Os(t){return t[ao]||null}var ul=[],Xr=-1;function yr(t){return{current:t}}function zt(t){0>Xr||(t.current=ul[Xr],ul[Xr]=null,Xr--)}function jt(t,e){Xr++,ul[Xr]=t.current,t.current=e}var hr={},Kt=yr(hr),re=yr(!1),Ar=hr;function gn(t,e){var r=t.type.contextTypes;if(!r)return hr;var o=t.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===e)return o.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in r)s[i]=e[i];return o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function ne(t){return t=t.childContextTypes,t!=null}function ys(){zt(re),zt(Kt)}function Cd(t,e,r){if(Kt.current!==hr)throw Error(O(168));jt(Kt,e),jt(re,r)}function Oc(t,e,r){var o=t.stateNode;if(e=e.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var s in o)if(!(s in e))throw Error(O(108,Gb(t)||"Unknown",s));return Dt({},r,o)}function xs(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hr,Ar=Kt.current,jt(Kt,t),jt(re,re.current),!0}function Id(t,e,r){var o=t.stateNode;if(!o)throw Error(O(169));r?(t=Oc(t,e,Ar),o.__reactInternalMemoizedMergedChildContext=t,zt(re),zt(Kt),jt(Kt,t)):zt(re),jt(re,r)}var Ue=null,$s=!1,mi=!1;function $c(t){Ue===null?Ue=[t]:Ue.push(t)}function lm(t){$s=!0,$c(t)}function xr(){if(!mi&&Ue!==null){mi=!0;var t=0,e=kt;try{var r=Ue;for(kt=1;t<r.length;t++){var o=r[t];do o=o(!0);while(o!==null)}Ue=null,$s=!1}catch(s){throw Ue!==null&&(Ue=Ue.slice(t+1)),bc(ta,xr),s}finally{kt=e,mi=!1}}return null}var Jr=[],Zr=0,ks=null,ws=0,ce=[],ue=0,Dr=null,Ve=1,Ye="";function wr(t,e){Jr[Zr++]=ws,Jr[Zr++]=ks,ks=t,ws=e}function Hc(t,e,r){ce[ue++]=Ve,ce[ue++]=Ye,ce[ue++]=Dr,Dr=t;var o=Ve;t=Ye;var s=32-Ce(o)-1;o&=~(1<<s),r+=1;var i=32-Ce(e)+s;if(30<i){var l=s-s%5;i=(o&(1<<l)-1).toString(32),o>>=l,s-=l,Ve=1<<32-Ce(e)+s|r<<s|o,Ye=i+t}else Ve=1<<i|r<<s|o,Ye=t}function da(t){t.return!==null&&(wr(t,1),Hc(t,1,0))}function ga(t){for(;t===ks;)ks=Jr[--Zr],Jr[Zr]=null,ws=Jr[--Zr],Jr[Zr]=null;for(;t===Dr;)Dr=ce[--ue],ce[ue]=null,Ye=ce[--ue],ce[ue]=null,Ve=ce[--ue],ce[ue]=null}var le=null,ie=null,Et=!1,je=null;function Gc(t,e){var r=be(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function zd(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,le=t,ie=cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,le=t,ie=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=Dr!==null?{id:Ve,overflow:Ye}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=be(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,le=t,ie=null,!0):!1;default:return!1}}function bl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pl(t){if(Et){var e=ie;if(e){var r=e;if(!zd(t,e)){if(bl(t))throw Error(O(418));e=cr(r.nextSibling);var o=le;e&&zd(t,e)?Gc(o,r):(t.flags=t.flags&-4097|2,Et=!1,le=t)}}else{if(bl(t))throw Error(O(418));t.flags=t.flags&-4097|2,Et=!1,le=t}}}function Td(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;le=t}function Wo(t){if(t!==le)return!1;if(!Et)return Td(t),Et=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!dl(t.type,t.memoizedProps)),e&&(e=ie)){if(bl(t))throw Uc(),Error(O(418));for(;e;)Gc(t,e),e=cr(e.nextSibling)}if(Td(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(O(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){ie=cr(t.nextSibling);break t}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}ie=null}}else ie=le?cr(t.stateNode.nextSibling):null;return!0}function Uc(){for(var t=ie;t;)t=cr(t.nextSibling)}function cn(){ie=le=null,Et=!1}function ca(t){je===null?je=[t]:je.push(t)}var am=qe.ReactCurrentBatchConfig;function En(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(O(309));var o=r.stateNode}if(!o)throw Error(O(147,t));var s=o,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(l){var a=s.refs;l===null?delete a[i]:a[i]=l},e._stringRef=i,e)}if(typeof t!="string")throw Error(O(284));if(!r._owner)throw Error(O(290,t))}return t}function Mo(t,e){throw t=Object.prototype.toString.call(e),Error(O(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ed(t){var e=t._init;return e(t._payload)}function Vc(t){function e(b,u){if(t){var c=b.deletions;c===null?(b.deletions=[u],b.flags|=16):c.push(u)}}function r(b,u){if(!t)return null;for(;u!==null;)e(b,u),u=u.sibling;return null}function o(b,u){for(b=new Map;u!==null;)u.key!==null?b.set(u.key,u):b.set(u.index,u),u=u.sibling;return b}function s(b,u){return b=mr(b,u),b.index=0,b.sibling=null,b}function i(b,u,c){return b.index=c,t?(c=b.alternate,c!==null?(c=c.index,c<u?(b.flags|=2,u):c):(b.flags|=2,u)):(b.flags|=1048576,u)}function l(b){return t&&b.alternate===null&&(b.flags|=2),b}function a(b,u,c,k){return u===null||u.tag!==6?(u=wi(c,b.mode,k),u.return=b,u):(u=s(u,c),u.return=b,u)}function d(b,u,c,k){var x=c.type;return x===Ur?m(b,u,c.props.children,k,c.key):u!==null&&(u.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===rr&&Ed(x)===u.type)?(k=s(u,c.props),k.ref=En(b,u,c),k.return=b,k):(k=ls(c.type,c.key,c.props,null,b.mode,k),k.ref=En(b,u,c),k.return=b,k)}function g(b,u,c,k){return u===null||u.tag!==4||u.stateNode.containerInfo!==c.containerInfo||u.stateNode.implementation!==c.implementation?(u=Si(c,b.mode,k),u.return=b,u):(u=s(u,c.children||[]),u.return=b,u)}function m(b,u,c,k,x){return u===null||u.tag!==7?(u=Fr(c,b.mode,k,x),u.return=b,u):(u=s(u,c),u.return=b,u)}function v(b,u,c){if(typeof u=="string"&&u!==""||typeof u=="number")return u=wi(""+u,b.mode,c),u.return=b,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Co:return c=ls(u.type,u.key,u.props,null,b.mode,c),c.ref=En(b,null,u),c.return=b,c;case Gr:return u=Si(u,b.mode,c),u.return=b,u;case rr:var k=u._init;return v(b,k(u._payload),c)}if(Wn(u)||jn(u))return u=Fr(u,b.mode,c,null),u.return=b,u;Mo(b,u)}return null}function p(b,u,c,k){var x=u!==null?u.key:null;if(typeof c=="string"&&c!==""||typeof c=="number")return x!==null?null:a(b,u,""+c,k);if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Co:return c.key===x?d(b,u,c,k):null;case Gr:return c.key===x?g(b,u,c,k):null;case rr:return x=c._init,p(b,u,x(c._payload),k)}if(Wn(c)||jn(c))return x!==null?null:m(b,u,c,k,null);Mo(b,c)}return null}function S(b,u,c,k,x){if(typeof k=="string"&&k!==""||typeof k=="number")return b=b.get(c)||null,a(u,b,""+k,x);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Co:return b=b.get(k.key===null?c:k.key)||null,d(u,b,k,x);case Gr:return b=b.get(k.key===null?c:k.key)||null,g(u,b,k,x);case rr:var T=k._init;return S(b,u,c,T(k._payload),x)}if(Wn(k)||jn(k))return b=b.get(c)||null,m(u,b,k,x,null);Mo(u,k)}return null}function w(b,u,c,k){for(var x=null,T=null,R=u,F=u=0,E=null;R!==null&&F<c.length;F++){R.index>F?(E=R,R=null):E=R.sibling;var W=p(b,R,c[F],k);if(W===null){R===null&&(R=E);break}t&&R&&W.alternate===null&&e(b,R),u=i(W,u,F),T===null?x=W:T.sibling=W,T=W,R=E}if(F===c.length)return r(b,R),Et&&wr(b,F),x;if(R===null){for(;F<c.length;F++)R=v(b,c[F],k),R!==null&&(u=i(R,u,F),T===null?x=R:T.sibling=R,T=R);return Et&&wr(b,F),x}for(R=o(b,R);F<c.length;F++)E=S(R,b,F,c[F],k),E!==null&&(t&&E.alternate!==null&&R.delete(E.key===null?F:E.key),u=i(E,u,F),T===null?x=E:T.sibling=E,T=E);return t&&R.forEach(function(et){return e(b,et)}),Et&&wr(b,F),x}function j(b,u,c,k){var x=jn(c);if(typeof x!="function")throw Error(O(150));if(c=x.call(c),c==null)throw Error(O(151));for(var T=x=null,R=u,F=u=0,E=null,W=c.next();R!==null&&!W.done;F++,W=c.next()){R.index>F?(E=R,R=null):E=R.sibling;var et=p(b,R,W.value,k);if(et===null){R===null&&(R=E);break}t&&R&&et.alternate===null&&e(b,R),u=i(et,u,F),T===null?x=et:T.sibling=et,T=et,R=E}if(W.done)return r(b,R),Et&&wr(b,F),x;if(R===null){for(;!W.done;F++,W=c.next())W=v(b,W.value,k),W!==null&&(u=i(W,u,F),T===null?x=W:T.sibling=W,T=W);return Et&&wr(b,F),x}for(R=o(b,R);!W.done;F++,W=c.next())W=S(R,b,F,W.value,k),W!==null&&(t&&W.alternate!==null&&R.delete(W.key===null?F:W.key),u=i(W,u,F),T===null?x=W:T.sibling=W,T=W);return t&&R.forEach(function(M){return e(b,M)}),Et&&wr(b,F),x}function C(b,u,c,k){if(typeof c=="object"&&c!==null&&c.type===Ur&&c.key===null&&(c=c.props.children),typeof c=="object"&&c!==null){switch(c.$$typeof){case Co:t:{for(var x=c.key,T=u;T!==null;){if(T.key===x){if(x=c.type,x===Ur){if(T.tag===7){r(b,T.sibling),u=s(T,c.props.children),u.return=b,b=u;break t}}else if(T.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===rr&&Ed(x)===T.type){r(b,T.sibling),u=s(T,c.props),u.ref=En(b,T,c),u.return=b,b=u;break t}r(b,T);break}else e(b,T);T=T.sibling}c.type===Ur?(u=Fr(c.props.children,b.mode,k,c.key),u.return=b,b=u):(k=ls(c.type,c.key,c.props,null,b.mode,k),k.ref=En(b,u,c),k.return=b,b=k)}return l(b);case Gr:t:{for(T=c.key;u!==null;){if(u.key===T)if(u.tag===4&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){r(b,u.sibling),u=s(u,c.children||[]),u.return=b,b=u;break t}else{r(b,u);break}else e(b,u);u=u.sibling}u=Si(c,b.mode,k),u.return=b,b=u}return l(b);case rr:return T=c._init,C(b,u,T(c._payload),k)}if(Wn(c))return w(b,u,c,k);if(jn(c))return j(b,u,c,k);Mo(b,c)}return typeof c=="string"&&c!==""||typeof c=="number"?(c=""+c,u!==null&&u.tag===6?(r(b,u.sibling),u=s(u,c),u.return=b,b=u):(r(b,u),u=wi(c,b.mode,k),u.return=b,b=u),l(b)):r(b,u)}return C}var un=Vc(!0),Yc=Vc(!1),Ss=yr(null),js=null,qr=null,ua=null;function ba(){ua=qr=js=null}function pa(t){var e=Ss.current;zt(Ss),t._currentValue=e}function ml(t,e,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===r)break;t=t.return}}function ln(t,e){js=t,ua=qr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ee=!0),t.firstContext=null)}function fe(t){var e=t._currentValue;if(ua!==t)if(t={context:t,memoizedValue:e,next:null},qr===null){if(js===null)throw Error(O(308));qr=t,js.dependencies={lanes:0,firstContext:t}}else qr=qr.next=t;return e}var zr=null;function ma(t){zr===null?zr=[t]:zr.push(t)}function Qc(t,e,r,o){var s=e.interleaved;return s===null?(r.next=r,ma(e)):(r.next=s.next,s.next=r),e.interleaved=r,Je(t,o)}function Je(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var nr=!1;function fa(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qe(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ur(t,e,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,ht&2){var s=o.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),o.pending=e,Je(t,r)}return s=o.interleaved,s===null?(e.next=e,ma(o)):(e.next=s.next,s.next=e),o.interleaved=e,Je(t,r)}function es(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var o=e.lanes;o&=t.pendingLanes,r|=o,e.lanes=r,ea(t,r)}}function Bd(t,e){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var s=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?s=i=l:i=i.next=l,r=r.next}while(r!==null);i===null?s=i=e:i=i.next=e}else s=i=e;r={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:o.shared,effects:o.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function Cs(t,e,r,o){var s=t.updateQueue;nr=!1;var i=s.firstBaseUpdate,l=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var d=a,g=d.next;d.next=null,l===null?i=g:l.next=g,l=d;var m=t.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==l&&(a===null?m.firstBaseUpdate=g:a.next=g,m.lastBaseUpdate=d))}if(i!==null){var v=s.baseState;l=0,m=g=d=null,a=i;do{var p=a.lane,S=a.eventTime;if((o&p)===p){m!==null&&(m=m.next={eventTime:S,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});t:{var w=t,j=a;switch(p=e,S=r,j.tag){case 1:if(w=j.payload,typeof w=="function"){v=w.call(S,v,p);break t}v=w;break t;case 3:w.flags=w.flags&-65537|128;case 0:if(w=j.payload,p=typeof w=="function"?w.call(S,v,p):w,p==null)break t;v=Dt({},v,p);break t;case 2:nr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=s.effects,p===null?s.effects=[a]:p.push(a))}else S={eventTime:S,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(g=m=S,d=v):m=m.next=S,l|=p;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;p=a,a=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);if(m===null&&(d=v),s.baseState=d,s.firstBaseUpdate=g,s.lastBaseUpdate=m,e=s.shared.interleaved,e!==null){s=e;do l|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Wr|=l,t.lanes=l,t.memoizedState=v}}function Fd(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var o=t[e],s=o.callback;if(s!==null){if(o.callback=null,o=r,typeof s!="function")throw Error(O(191,s));s.call(o)}}}var wo={},Pe=yr(wo),go=yr(wo),co=yr(wo);function Tr(t){if(t===wo)throw Error(O(174));return t}function ha(t,e){switch(jt(co,e),jt(go,t),jt(Pe,wo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ki(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ki(e,t)}zt(Pe),jt(Pe,e)}function bn(){zt(Pe),zt(go),zt(co)}function Xc(t){Tr(co.current);var e=Tr(Pe.current),r=Ki(e,t.type);e!==r&&(jt(go,t),jt(Pe,r))}function va(t){go.current===t&&(zt(Pe),zt(go))}var Ft=yr(0);function Is(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fi=[];function ya(){for(var t=0;t<fi.length;t++)fi[t]._workInProgressVersionPrimary=null;fi.length=0}var rs=qe.ReactCurrentDispatcher,hi=qe.ReactCurrentBatchConfig,Rr=0,At=null,Lt=null,Nt=null,zs=!1,Vn=!1,uo=0,dm=0;function Vt(){throw Error(O(321))}function xa(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!ze(t[r],e[r]))return!1;return!0}function ka(t,e,r,o,s,i){if(Rr=i,At=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,rs.current=t===null||t.memoizedState===null?bm:pm,t=r(o,s),Vn){i=0;do{if(Vn=!1,uo=0,25<=i)throw Error(O(301));i+=1,Nt=Lt=null,e.updateQueue=null,rs.current=mm,t=r(o,s)}while(Vn)}if(rs.current=Ts,e=Lt!==null&&Lt.next!==null,Rr=0,Nt=Lt=At=null,zs=!1,e)throw Error(O(300));return t}function wa(){var t=uo!==0;return uo=0,t}function De(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?At.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function he(){if(Lt===null){var t=At.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var e=Nt===null?At.memoizedState:Nt.next;if(e!==null)Nt=e,Lt=t;else{if(t===null)throw Error(O(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},Nt===null?At.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function bo(t,e){return typeof e=="function"?e(t):e}function vi(t){var e=he(),r=e.queue;if(r===null)throw Error(O(311));r.lastRenderedReducer=t;var o=Lt,s=o.baseQueue,i=r.pending;if(i!==null){if(s!==null){var l=s.next;s.next=i.next,i.next=l}o.baseQueue=s=i,r.pending=null}if(s!==null){i=s.next,o=o.baseState;var a=l=null,d=null,g=i;do{var m=g.lane;if((Rr&m)===m)d!==null&&(d=d.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),o=g.hasEagerState?g.eagerState:t(o,g.action);else{var v={lane:m,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};d===null?(a=d=v,l=o):d=d.next=v,At.lanes|=m,Wr|=m}g=g.next}while(g!==null&&g!==i);d===null?l=o:d.next=a,ze(o,e.memoizedState)||(ee=!0),e.memoizedState=o,e.baseState=l,e.baseQueue=d,r.lastRenderedState=o}if(t=r.interleaved,t!==null){s=t;do i=s.lane,At.lanes|=i,Wr|=i,s=s.next;while(s!==t)}else s===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function yi(t){var e=he(),r=e.queue;if(r===null)throw Error(O(311));r.lastRenderedReducer=t;var o=r.dispatch,s=r.pending,i=e.memoizedState;if(s!==null){r.pending=null;var l=s=s.next;do i=t(i,l.action),l=l.next;while(l!==s);ze(i,e.memoizedState)||(ee=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),r.lastRenderedState=i}return[i,o]}function Jc(){}function Zc(t,e){var r=At,o=he(),s=e(),i=!ze(o.memoizedState,s);if(i&&(o.memoizedState=s,ee=!0),o=o.queue,Sa(eu.bind(null,r,o,t),[t]),o.getSnapshot!==e||i||Nt!==null&&Nt.memoizedState.tag&1){if(r.flags|=2048,po(9,tu.bind(null,r,o,s,e),void 0,null),Ot===null)throw Error(O(349));Rr&30||qc(r,e,s)}return s}function qc(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function tu(t,e,r,o){e.value=r,e.getSnapshot=o,ru(e)&&nu(t)}function eu(t,e,r){return r(function(){ru(e)&&nu(t)})}function ru(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!ze(t,r)}catch{return!0}}function nu(t){var e=Je(t,1);e!==null&&Ie(e,t,1,-1)}function Ad(t){var e=De();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:t},e.queue=t,t=t.dispatch=um.bind(null,At,t),[e.memoizedState,t]}function po(t,e,r,o){return t={tag:t,create:e,destroy:r,deps:o,next:null},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,e.lastEffect=t)),t}function ou(){return he().memoizedState}function ns(t,e,r,o){var s=De();At.flags|=t,s.memoizedState=po(1|e,r,void 0,o===void 0?null:o)}function Hs(t,e,r,o){var s=he();o=o===void 0?null:o;var i=void 0;if(Lt!==null){var l=Lt.memoizedState;if(i=l.destroy,o!==null&&xa(o,l.deps)){s.memoizedState=po(e,r,i,o);return}}At.flags|=t,s.memoizedState=po(1|e,r,i,o)}function Dd(t,e){return ns(8390656,8,t,e)}function Sa(t,e){return Hs(2048,8,t,e)}function su(t,e){return Hs(4,2,t,e)}function iu(t,e){return Hs(4,4,t,e)}function lu(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function au(t,e,r){return r=r!=null?r.concat([t]):null,Hs(4,4,lu.bind(null,e,t),r)}function ja(){}function du(t,e){var r=he();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&xa(e,o[1])?o[0]:(r.memoizedState=[t,e],t)}function gu(t,e){var r=he();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&xa(e,o[1])?o[0]:(t=t(),r.memoizedState=[t,e],t)}function cu(t,e,r){return Rr&21?(ze(r,e)||(r=fc(),At.lanes|=r,Wr|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ee=!0),t.memoizedState=r)}function gm(t,e){var r=kt;kt=r!==0&&4>r?r:4,t(!0);var o=hi.transition;hi.transition={};try{t(!1),e()}finally{kt=r,hi.transition=o}}function uu(){return he().memoizedState}function cm(t,e,r){var o=pr(t);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},bu(t))pu(e,r);else if(r=Qc(t,e,r,o),r!==null){var s=Jt();Ie(r,t,o,s),mu(r,e,o)}}function um(t,e,r){var o=pr(t),s={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(bu(t))pu(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var l=e.lastRenderedState,a=i(l,r);if(s.hasEagerState=!0,s.eagerState=a,ze(a,l)){var d=e.interleaved;d===null?(s.next=s,ma(e)):(s.next=d.next,d.next=s),e.interleaved=s;return}}catch{}finally{}r=Qc(t,e,s,o),r!==null&&(s=Jt(),Ie(r,t,o,s),mu(r,e,o))}}function bu(t){var e=t.alternate;return t===At||e!==null&&e===At}function pu(t,e){Vn=zs=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function mu(t,e,r){if(r&4194240){var o=e.lanes;o&=t.pendingLanes,r|=o,e.lanes=r,ea(t,r)}}var Ts={readContext:fe,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},bm={readContext:fe,useCallback:function(t,e){return De().memoizedState=[t,e===void 0?null:e],t},useContext:fe,useEffect:Dd,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,ns(4194308,4,lu.bind(null,e,t),r)},useLayoutEffect:function(t,e){return ns(4194308,4,t,e)},useInsertionEffect:function(t,e){return ns(4,2,t,e)},useMemo:function(t,e){var r=De();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var o=De();return e=r!==void 0?r(e):e,o.memoizedState=o.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},o.queue=t,t=t.dispatch=cm.bind(null,At,t),[o.memoizedState,t]},useRef:function(t){var e=De();return t={current:t},e.memoizedState=t},useState:Ad,useDebugValue:ja,useDeferredValue:function(t){return De().memoizedState=t},useTransition:function(){var t=Ad(!1),e=t[0];return t=gm.bind(null,t[1]),De().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var o=At,s=De();if(Et){if(r===void 0)throw Error(O(407));r=r()}else{if(r=e(),Ot===null)throw Error(O(349));Rr&30||qc(o,e,r)}s.memoizedState=r;var i={value:r,getSnapshot:e};return s.queue=i,Dd(eu.bind(null,o,i,t),[t]),o.flags|=2048,po(9,tu.bind(null,o,i,r,e),void 0,null),r},useId:function(){var t=De(),e=Ot.identifierPrefix;if(Et){var r=Ye,o=Ve;r=(o&~(1<<32-Ce(o)-1)).toString(32)+r,e=":"+e+"R"+r,r=uo++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=dm++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},pm={readContext:fe,useCallback:du,useContext:fe,useEffect:Sa,useImperativeHandle:au,useInsertionEffect:su,useLayoutEffect:iu,useMemo:gu,useReducer:vi,useRef:ou,useState:function(){return vi(bo)},useDebugValue:ja,useDeferredValue:function(t){var e=he();return cu(e,Lt.memoizedState,t)},useTransition:function(){var t=vi(bo)[0],e=he().memoizedState;return[t,e]},useMutableSource:Jc,useSyncExternalStore:Zc,useId:uu,unstable_isNewReconciler:!1},mm={readContext:fe,useCallback:du,useContext:fe,useEffect:Sa,useImperativeHandle:au,useInsertionEffect:su,useLayoutEffect:iu,useMemo:gu,useReducer:yi,useRef:ou,useState:function(){return yi(bo)},useDebugValue:ja,useDeferredValue:function(t){var e=he();return Lt===null?e.memoizedState=t:cu(e,Lt.memoizedState,t)},useTransition:function(){var t=yi(bo)[0],e=he().memoizedState;return[t,e]},useMutableSource:Jc,useSyncExternalStore:Zc,useId:uu,unstable_isNewReconciler:!1};function we(t,e){if(t&&t.defaultProps){e=Dt({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function fl(t,e,r,o){e=t.memoizedState,r=r(o,e),r=r==null?e:Dt({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Gs={isMounted:function(t){return(t=t._reactInternals)?Nr(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var o=Jt(),s=pr(t),i=Qe(o,s);i.payload=e,r!=null&&(i.callback=r),e=ur(t,i,s),e!==null&&(Ie(e,t,s,o),es(e,t,s))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var o=Jt(),s=pr(t),i=Qe(o,s);i.tag=1,i.payload=e,r!=null&&(i.callback=r),e=ur(t,i,s),e!==null&&(Ie(e,t,s,o),es(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=Jt(),o=pr(t),s=Qe(r,o);s.tag=2,e!=null&&(s.callback=e),e=ur(t,s,o),e!==null&&(Ie(e,t,o,r),es(e,t,o))}};function Rd(t,e,r,o,s,i,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,i,l):e.prototype&&e.prototype.isPureReactComponent?!so(r,o)||!so(s,i):!0}function fu(t,e,r){var o=!1,s=hr,i=e.contextType;return typeof i=="object"&&i!==null?i=fe(i):(s=ne(e)?Ar:Kt.current,o=e.contextTypes,i=(o=o!=null)?gn(t,s):hr),e=new e(r,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gs,t.stateNode=e,e._reactInternals=t,o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Wd(t,e,r,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,o),e.state!==t&&Gs.enqueueReplaceState(e,e.state,null)}function hl(t,e,r,o){var s=t.stateNode;s.props=r,s.state=t.memoizedState,s.refs={},fa(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=fe(i):(i=ne(e)?Ar:Kt.current,s.context=gn(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(fl(t,e,i,r),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Gs.enqueueReplaceState(s,s.state,null),Cs(t,r,s,o),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function pn(t,e){try{var r="",o=e;do r+=Hb(o),o=o.return;while(o);var s=r}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function xi(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function vl(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var fm=typeof WeakMap=="function"?WeakMap:Map;function hu(t,e,r){r=Qe(-1,r),r.tag=3,r.payload={element:null};var o=e.value;return r.callback=function(){Bs||(Bs=!0,Tl=o),vl(t,e)},r}function vu(t,e,r){r=Qe(-1,r),r.tag=3;var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var s=e.value;r.payload=function(){return o(s)},r.callback=function(){vl(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){vl(t,e),typeof o!="function"&&(br===null?br=new Set([this]):br.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),r}function Md(t,e,r){var o=t.pingCache;if(o===null){o=t.pingCache=new fm;var s=new Set;o.set(e,s)}else s=o.get(e),s===void 0&&(s=new Set,o.set(e,s));s.has(r)||(s.add(r),t=Bm.bind(null,t,e,r),e.then(t,t))}function _d(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ld(t,e,r,o,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=Qe(-1,1),e.tag=2,ur(r,e,1))),r.lanes|=1),t)}var hm=qe.ReactCurrentOwner,ee=!1;function Xt(t,e,r,o){e.child=t===null?Yc(e,null,r,o):un(e,t.child,r,o)}function Pd(t,e,r,o,s){r=r.render;var i=e.ref;return ln(e,s),o=ka(t,e,r,o,i,s),r=wa(),t!==null&&!ee?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Ze(t,e,s)):(Et&&r&&da(e),e.flags|=1,Xt(t,e,o,s),e.child)}function Nd(t,e,r,o,s){if(t===null){var i=r.type;return typeof i=="function"&&!Aa(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=i,yu(t,e,i,o,s)):(t=ls(r.type,null,o,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var l=i.memoizedProps;if(r=r.compare,r=r!==null?r:so,r(l,o)&&t.ref===e.ref)return Ze(t,e,s)}return e.flags|=1,t=mr(i,o),t.ref=e.ref,t.return=e,e.child=t}function yu(t,e,r,o,s){if(t!==null){var i=t.memoizedProps;if(so(i,o)&&t.ref===e.ref)if(ee=!1,e.pendingProps=o=i,(t.lanes&s)!==0)t.flags&131072&&(ee=!0);else return e.lanes=t.lanes,Ze(t,e,s)}return yl(t,e,r,o,s)}function xu(t,e,r){var o=e.pendingProps,s=o.children,i=t!==null?t.memoizedState:null;if(o.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},jt(en,se),se|=r;else{if(!(r&1073741824))return t=i!==null?i.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,jt(en,se),se|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:r,jt(en,se),se|=o}else i!==null?(o=i.baseLanes|r,e.memoizedState=null):o=r,jt(en,se),se|=o;return Xt(t,e,s,r),e.child}function ku(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function yl(t,e,r,o,s){var i=ne(r)?Ar:Kt.current;return i=gn(e,i),ln(e,s),r=ka(t,e,r,o,i,s),o=wa(),t!==null&&!ee?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Ze(t,e,s)):(Et&&o&&da(e),e.flags|=1,Xt(t,e,r,s),e.child)}function Od(t,e,r,o,s){if(ne(r)){var i=!0;xs(e)}else i=!1;if(ln(e,s),e.stateNode===null)os(t,e),fu(e,r,o),hl(e,r,o,s),o=!0;else if(t===null){var l=e.stateNode,a=e.memoizedProps;l.props=a;var d=l.context,g=r.contextType;typeof g=="object"&&g!==null?g=fe(g):(g=ne(r)?Ar:Kt.current,g=gn(e,g));var m=r.getDerivedStateFromProps,v=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";v||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==o||d!==g)&&Wd(e,l,o,g),nr=!1;var p=e.memoizedState;l.state=p,Cs(e,o,l,s),d=e.memoizedState,a!==o||p!==d||re.current||nr?(typeof m=="function"&&(fl(e,r,m,o),d=e.memoizedState),(a=nr||Rd(e,r,a,o,p,d,g))?(v||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=d),l.props=o,l.state=d,l.context=g,o=a):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{l=e.stateNode,Kc(t,e),a=e.memoizedProps,g=e.type===e.elementType?a:we(e.type,a),l.props=g,v=e.pendingProps,p=l.context,d=r.contextType,typeof d=="object"&&d!==null?d=fe(d):(d=ne(r)?Ar:Kt.current,d=gn(e,d));var S=r.getDerivedStateFromProps;(m=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==v||p!==d)&&Wd(e,l,o,d),nr=!1,p=e.memoizedState,l.state=p,Cs(e,o,l,s);var w=e.memoizedState;a!==v||p!==w||re.current||nr?(typeof S=="function"&&(fl(e,r,S,o),w=e.memoizedState),(g=nr||Rd(e,r,g,o,p,w,d)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,w,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,w,d)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=w),l.props=o,l.state=w,l.context=d,o=g):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),o=!1)}return xl(t,e,r,o,i,s)}function xl(t,e,r,o,s,i){ku(t,e);var l=(e.flags&128)!==0;if(!o&&!l)return s&&Id(e,r,!1),Ze(t,e,i);o=e.stateNode,hm.current=e;var a=l&&typeof r.getDerivedStateFromError!="function"?null:o.render();return e.flags|=1,t!==null&&l?(e.child=un(e,t.child,null,i),e.child=un(e,null,a,i)):Xt(t,e,a,i),e.memoizedState=o.state,s&&Id(e,r,!0),e.child}function wu(t){var e=t.stateNode;e.pendingContext?Cd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Cd(t,e.context,!1),ha(t,e.containerInfo)}function $d(t,e,r,o,s){return cn(),ca(s),e.flags|=256,Xt(t,e,r,o),e.child}var kl={dehydrated:null,treeContext:null,retryLane:0};function wl(t){return{baseLanes:t,cachePool:null,transitions:null}}function Su(t,e,r){var o=e.pendingProps,s=Ft.current,i=!1,l=(e.flags&128)!==0,a;if((a=l)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),jt(Ft,s&1),t===null)return pl(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=o.children,t=o.fallback,i?(o=e.mode,i=e.child,l={mode:"hidden",children:l},!(o&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ys(l,o,0,null),t=Fr(t,o,r,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=wl(r),e.memoizedState=kl,t):Ca(e,l));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return vm(t,e,l,o,a,s,r);if(i){i=o.fallback,l=e.mode,s=t.child,a=s.sibling;var d={mode:"hidden",children:o.children};return!(l&1)&&e.child!==s?(o=e.child,o.childLanes=0,o.pendingProps=d,e.deletions=null):(o=mr(s,d),o.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=mr(a,i):(i=Fr(i,l,r,null),i.flags|=2),i.return=e,o.return=e,o.sibling=i,e.child=o,o=i,i=e.child,l=t.child.memoizedState,l=l===null?wl(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=t.childLanes&~r,e.memoizedState=kl,o}return i=t.child,t=i.sibling,o=mr(i,{mode:"visible",children:o.children}),!(e.mode&1)&&(o.lanes=r),o.return=e,o.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=o,e.memoizedState=null,o}function Ca(t,e){return e=Ys({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _o(t,e,r,o){return o!==null&&ca(o),un(e,t.child,null,r),t=Ca(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function vm(t,e,r,o,s,i,l){if(r)return e.flags&256?(e.flags&=-257,o=xi(Error(O(422))),_o(t,e,l,o)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=o.fallback,s=e.mode,o=Ys({mode:"visible",children:o.children},s,0,null),i=Fr(i,s,l,null),i.flags|=2,o.return=e,i.return=e,o.sibling=i,e.child=o,e.mode&1&&un(e,t.child,null,l),e.child.memoizedState=wl(l),e.memoizedState=kl,i);if(!(e.mode&1))return _o(t,e,l,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var a=o.dgst;return o=a,i=Error(O(419)),o=xi(i,o,void 0),_o(t,e,l,o)}if(a=(l&t.childLanes)!==0,ee||a){if(o=Ot,o!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(o.suspendedLanes|l)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Je(t,s),Ie(o,t,s,-1))}return Fa(),o=xi(Error(O(421))),_o(t,e,l,o)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=Fm.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,ie=cr(s.nextSibling),le=e,Et=!0,je=null,t!==null&&(ce[ue++]=Ve,ce[ue++]=Ye,ce[ue++]=Dr,Ve=t.id,Ye=t.overflow,Dr=e),e=Ca(e,o.children),e.flags|=4096,e)}function Hd(t,e,r){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),ml(t.return,e,r)}function ki(t,e,r,o,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=r,i.tailMode=s)}function ju(t,e,r){var o=e.pendingProps,s=o.revealOrder,i=o.tail;if(Xt(t,e,o.children,r),o=Ft.current,o&2)o=o&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hd(t,r,e);else if(t.tag===19)Hd(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}if(jt(Ft,o),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(r=e.child,s=null;r!==null;)t=r.alternate,t!==null&&Is(t)===null&&(s=r),r=r.sibling;r=s,r===null?(s=e.child,e.child=null):(s=r.sibling,r.sibling=null),ki(e,!1,s,r,i);break;case"backwards":for(r=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Is(t)===null){e.child=s;break}t=s.sibling,s.sibling=r,r=s,s=t}ki(e,!0,r,null,i);break;case"together":ki(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function os(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ze(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),Wr|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(O(153));if(e.child!==null){for(t=e.child,r=mr(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=mr(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function ym(t,e,r){switch(e.tag){case 3:wu(e),cn();break;case 5:Xc(e);break;case 1:ne(e.type)&&xs(e);break;case 4:ha(e,e.stateNode.containerInfo);break;case 10:var o=e.type._context,s=e.memoizedProps.value;jt(Ss,o._currentValue),o._currentValue=s;break;case 13:if(o=e.memoizedState,o!==null)return o.dehydrated!==null?(jt(Ft,Ft.current&1),e.flags|=128,null):r&e.child.childLanes?Su(t,e,r):(jt(Ft,Ft.current&1),t=Ze(t,e,r),t!==null?t.sibling:null);jt(Ft,Ft.current&1);break;case 19:if(o=(r&e.childLanes)!==0,t.flags&128){if(o)return ju(t,e,r);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),jt(Ft,Ft.current),o)break;return null;case 22:case 23:return e.lanes=0,xu(t,e,r)}return Ze(t,e,r)}var Cu,Sl,Iu,zu;Cu=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Sl=function(){};Iu=function(t,e,r,o){var s=t.memoizedProps;if(s!==o){t=e.stateNode,Tr(Pe.current);var i=null;switch(r){case"input":s=Ui(t,s),o=Ui(t,o),i=[];break;case"select":s=Dt({},s,{value:void 0}),o=Dt({},o,{value:void 0}),i=[];break;case"textarea":s=Qi(t,s),o=Qi(t,o),i=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(t.onclick=vs)}Xi(r,o);var l;r=null;for(g in s)if(!o.hasOwnProperty(g)&&s.hasOwnProperty(g)&&s[g]!=null)if(g==="style"){var a=s[g];for(l in a)a.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(Zn.hasOwnProperty(g)?i||(i=[]):(i=i||[]).push(g,null));for(g in o){var d=o[g];if(a=s!=null?s[g]:void 0,o.hasOwnProperty(g)&&d!==a&&(d!=null||a!=null))if(g==="style")if(a){for(l in a)!a.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in d)d.hasOwnProperty(l)&&a[l]!==d[l]&&(r||(r={}),r[l]=d[l])}else r||(i||(i=[]),i.push(g,r)),r=d;else g==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(i=i||[]).push(g,d)):g==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(g,""+d):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(Zn.hasOwnProperty(g)?(d!=null&&g==="onScroll"&&It("scroll",t),i||a===d||(i=[])):(i=i||[]).push(g,d))}r&&(i=i||[]).push("style",r);var g=i;(e.updateQueue=g)&&(e.flags|=4)}};zu=function(t,e,r,o){r!==o&&(e.flags|=4)};function Bn(t,e){if(!Et)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(e)for(var s=t.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=o,t.childLanes=r,e}function xm(t,e,r){var o=e.pendingProps;switch(ga(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return ne(e.type)&&ys(),Yt(e),null;case 3:return o=e.stateNode,bn(),zt(re),zt(Kt),ya(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(Wo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,je!==null&&(Fl(je),je=null))),Sl(t,e),Yt(e),null;case 5:va(e);var s=Tr(co.current);if(r=e.type,t!==null&&e.stateNode!=null)Iu(t,e,r,o,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!o){if(e.stateNode===null)throw Error(O(166));return Yt(e),null}if(t=Tr(Pe.current),Wo(e)){o=e.stateNode,r=e.type;var i=e.memoizedProps;switch(o[_e]=e,o[ao]=i,t=(e.mode&1)!==0,r){case"dialog":It("cancel",o),It("close",o);break;case"iframe":case"object":case"embed":It("load",o);break;case"video":case"audio":for(s=0;s<_n.length;s++)It(_n[s],o);break;case"source":It("error",o);break;case"img":case"image":case"link":It("error",o),It("load",o);break;case"details":It("toggle",o);break;case"input":Za(o,i),It("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},It("invalid",o);break;case"textarea":td(o,i),It("invalid",o)}Xi(r,i),s=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?o.textContent!==a&&(i.suppressHydrationWarning!==!0&&Ro(o.textContent,a,t),s=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Ro(o.textContent,a,t),s=["children",""+a]):Zn.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&It("scroll",o)}switch(r){case"input":Io(o),qa(o,i,!0);break;case"textarea":Io(o),ed(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=vs)}o=s,e.updateQueue=o,o!==null&&(e.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ec(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof o.is=="string"?t=l.createElement(r,{is:o.is}):(t=l.createElement(r),r==="select"&&(l=t,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):t=l.createElementNS(t,r),t[_e]=e,t[ao]=o,Cu(t,e,!1,!1),e.stateNode=t;t:{switch(l=Ji(r,o),r){case"dialog":It("cancel",t),It("close",t),s=o;break;case"iframe":case"object":case"embed":It("load",t),s=o;break;case"video":case"audio":for(s=0;s<_n.length;s++)It(_n[s],t);s=o;break;case"source":It("error",t),s=o;break;case"img":case"image":case"link":It("error",t),It("load",t),s=o;break;case"details":It("toggle",t),s=o;break;case"input":Za(t,o),s=Ui(t,o),It("invalid",t);break;case"option":s=o;break;case"select":t._wrapperState={wasMultiple:!!o.multiple},s=Dt({},o,{value:void 0}),It("invalid",t);break;case"textarea":td(t,o),s=Qi(t,o),It("invalid",t);break;default:s=o}Xi(r,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var d=a[i];i==="style"?oc(t,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&rc(t,d)):i==="children"?typeof d=="string"?(r!=="textarea"||d!=="")&&qn(t,d):typeof d=="number"&&qn(t,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Zn.hasOwnProperty(i)?d!=null&&i==="onScroll"&&It("scroll",t):d!=null&&Kl(t,i,d,l))}switch(r){case"input":Io(t),qa(t,o,!1);break;case"textarea":Io(t),ed(t);break;case"option":o.value!=null&&t.setAttribute("value",""+fr(o.value));break;case"select":t.multiple=!!o.multiple,i=o.value,i!=null?rn(t,!!o.multiple,i,!1):o.defaultValue!=null&&rn(t,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=vs)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}}o&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(t&&e.stateNode!=null)zu(t,e,t.memoizedProps,o);else{if(typeof o!="string"&&e.stateNode===null)throw Error(O(166));if(r=Tr(co.current),Tr(Pe.current),Wo(e)){if(o=e.stateNode,r=e.memoizedProps,o[_e]=e,(i=o.nodeValue!==r)&&(t=le,t!==null))switch(t.tag){case 3:Ro(o.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ro(o.nodeValue,r,(t.mode&1)!==0)}i&&(e.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[_e]=e,e.stateNode=o}return Yt(e),null;case 13:if(zt(Ft),o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Et&&ie!==null&&e.mode&1&&!(e.flags&128))Uc(),cn(),e.flags|=98560,i=!1;else if(i=Wo(e),o!==null&&o.dehydrated!==null){if(t===null){if(!i)throw Error(O(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(O(317));i[_e]=e}else cn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),i=!1}else je!==null&&(Fl(je),je=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(o=o!==null,o!==(t!==null&&t.memoizedState!==null)&&o&&(e.child.flags|=8192,e.mode&1&&(t===null||Ft.current&1?Pt===0&&(Pt=3):Fa())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return bn(),Sl(t,e),t===null&&io(e.stateNode.containerInfo),Yt(e),null;case 10:return pa(e.type._context),Yt(e),null;case 17:return ne(e.type)&&ys(),Yt(e),null;case 19:if(zt(Ft),i=e.memoizedState,i===null)return Yt(e),null;if(o=(e.flags&128)!==0,l=i.rendering,l===null)if(o)Bn(i,!1);else{if(Pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=Is(t),l!==null){for(e.flags|=128,Bn(i,!1),o=l.updateQueue,o!==null&&(e.updateQueue=o,e.flags|=4),e.subtreeFlags=0,o=r,r=e.child;r!==null;)i=r,t=o,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,t=l.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return jt(Ft,Ft.current&1|2),e.child}t=t.sibling}i.tail!==null&&Wt()>mn&&(e.flags|=128,o=!0,Bn(i,!1),e.lanes=4194304)}else{if(!o)if(t=Is(l),t!==null){if(e.flags|=128,o=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),Bn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Et)return Yt(e),null}else 2*Wt()-i.renderingStartTime>mn&&r!==1073741824&&(e.flags|=128,o=!0,Bn(i,!1),e.lanes=4194304);i.isBackwards?(l.sibling=e.child,e.child=l):(r=i.last,r!==null?r.sibling=l:e.child=l,i.last=l)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Wt(),e.sibling=null,r=Ft.current,jt(Ft,o?r&1|2:r&1),e):(Yt(e),null);case 22:case 23:return Ba(),o=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==o&&(e.flags|=8192),o&&e.mode&1?se&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(O(156,e.tag))}function km(t,e){switch(ga(e),e.tag){case 1:return ne(e.type)&&ys(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return bn(),zt(re),zt(Kt),ya(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return va(e),null;case 13:if(zt(Ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(O(340));cn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return zt(Ft),null;case 4:return bn(),null;case 10:return pa(e.type._context),null;case 22:case 23:return Ba(),null;case 24:return null;default:return null}}var Lo=!1,Qt=!1,wm=typeof WeakSet=="function"?WeakSet:Set,q=null;function tn(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){Rt(t,e,o)}else r.current=null}function jl(t,e,r){try{r()}catch(o){Rt(t,e,o)}}var Gd=!1;function Sm(t,e){if(ll=ms,t=Ac(),aa(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var s=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break t}var l=0,a=-1,d=-1,g=0,m=0,v=t,p=null;e:for(;;){for(var S;v!==r||s!==0&&v.nodeType!==3||(a=l+s),v!==i||o!==0&&v.nodeType!==3||(d=l+o),v.nodeType===3&&(l+=v.nodeValue.length),(S=v.firstChild)!==null;)p=v,v=S;for(;;){if(v===t)break e;if(p===r&&++g===s&&(a=l),p===i&&++m===o&&(d=l),(S=v.nextSibling)!==null)break;v=p,p=v.parentNode}v=S}r=a===-1||d===-1?null:{start:a,end:d}}else r=null}r=r||{start:0,end:0}}else r=null;for(al={focusedElem:t,selectionRange:r},ms=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var j=w.memoizedProps,C=w.memoizedState,b=e.stateNode,u=b.getSnapshotBeforeUpdate(e.elementType===e.type?j:we(e.type,j),C);b.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var c=e.stateNode.containerInfo;c.nodeType===1?c.textContent="":c.nodeType===9&&c.documentElement&&c.removeChild(c.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(k){Rt(e,e.return,k)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return w=Gd,Gd=!1,w}function Yn(t,e,r){var o=e.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&jl(e,r,i)}s=s.next}while(s!==o)}}function Us(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var o=r.create;r.destroy=o()}r=r.next}while(r!==e)}}function Cl(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function Tu(t){var e=t.alternate;e!==null&&(t.alternate=null,Tu(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_e],delete e[ao],delete e[cl],delete e[sm],delete e[im])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Eu(t){return t.tag===5||t.tag===3||t.tag===4}function Ud(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Eu(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Il(t,e,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=vs));else if(o!==4&&(t=t.child,t!==null))for(Il(t,e,r),t=t.sibling;t!==null;)Il(t,e,r),t=t.sibling}function zl(t,e,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(o!==4&&(t=t.child,t!==null))for(zl(t,e,r),t=t.sibling;t!==null;)zl(t,e,r),t=t.sibling}var Ht=null,Se=!1;function er(t,e,r){for(r=r.child;r!==null;)Bu(t,e,r),r=r.sibling}function Bu(t,e,r){if(Le&&typeof Le.onCommitFiberUnmount=="function")try{Le.onCommitFiberUnmount(_s,r)}catch{}switch(r.tag){case 5:Qt||tn(r,e);case 6:var o=Ht,s=Se;Ht=null,er(t,e,r),Ht=o,Se=s,Ht!==null&&(Se?(t=Ht,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Ht.removeChild(r.stateNode));break;case 18:Ht!==null&&(Se?(t=Ht,r=r.stateNode,t.nodeType===8?pi(t.parentNode,r):t.nodeType===1&&pi(t,r),no(t)):pi(Ht,r.stateNode));break;case 4:o=Ht,s=Se,Ht=r.stateNode.containerInfo,Se=!0,er(t,e,r),Ht=o,Se=s;break;case 0:case 11:case 14:case 15:if(!Qt&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var i=s,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&jl(r,e,l),s=s.next}while(s!==o)}er(t,e,r);break;case 1:if(!Qt&&(tn(r,e),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(a){Rt(r,e,a)}er(t,e,r);break;case 21:er(t,e,r);break;case 22:r.mode&1?(Qt=(o=Qt)||r.memoizedState!==null,er(t,e,r),Qt=o):er(t,e,r);break;default:er(t,e,r)}}function Vd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new wm),e.forEach(function(o){var s=Am.bind(null,t,o);r.has(o)||(r.add(o),o.then(s,s))})}}function ke(t,e){var r=e.deletions;if(r!==null)for(var o=0;o<r.length;o++){var s=r[o];try{var i=t,l=e,a=l;t:for(;a!==null;){switch(a.tag){case 5:Ht=a.stateNode,Se=!1;break t;case 3:Ht=a.stateNode.containerInfo,Se=!0;break t;case 4:Ht=a.stateNode.containerInfo,Se=!0;break t}a=a.return}if(Ht===null)throw Error(O(160));Bu(i,l,s),Ht=null,Se=!1;var d=s.alternate;d!==null&&(d.return=null),s.return=null}catch(g){Rt(s,e,g)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Fu(e,t),e=e.sibling}function Fu(t,e){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ke(e,t),Ee(t),o&4){try{Yn(3,t,t.return),Us(3,t)}catch(j){Rt(t,t.return,j)}try{Yn(5,t,t.return)}catch(j){Rt(t,t.return,j)}}break;case 1:ke(e,t),Ee(t),o&512&&r!==null&&tn(r,r.return);break;case 5:if(ke(e,t),Ee(t),o&512&&r!==null&&tn(r,r.return),t.flags&32){var s=t.stateNode;try{qn(s,"")}catch(j){Rt(t,t.return,j)}}if(o&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,l=r!==null?r.memoizedProps:i,a=t.type,d=t.updateQueue;if(t.updateQueue=null,d!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&qg(s,i),Ji(a,l);var g=Ji(a,i);for(l=0;l<d.length;l+=2){var m=d[l],v=d[l+1];m==="style"?oc(s,v):m==="dangerouslySetInnerHTML"?rc(s,v):m==="children"?qn(s,v):Kl(s,m,v,g)}switch(a){case"input":Vi(s,i);break;case"textarea":tc(s,i);break;case"select":var p=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?rn(s,!!i.multiple,S,!1):p!==!!i.multiple&&(i.defaultValue!=null?rn(s,!!i.multiple,i.defaultValue,!0):rn(s,!!i.multiple,i.multiple?[]:"",!1))}s[ao]=i}catch(j){Rt(t,t.return,j)}}break;case 6:if(ke(e,t),Ee(t),o&4){if(t.stateNode===null)throw Error(O(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(j){Rt(t,t.return,j)}}break;case 3:if(ke(e,t),Ee(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{no(e.containerInfo)}catch(j){Rt(t,t.return,j)}break;case 4:ke(e,t),Ee(t);break;case 13:ke(e,t),Ee(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Ta=Wt())),o&4&&Vd(t);break;case 22:if(m=r!==null&&r.memoizedState!==null,t.mode&1?(Qt=(g=Qt)||m,ke(e,t),Qt=g):ke(e,t),Ee(t),o&8192){if(g=t.memoizedState!==null,(t.stateNode.isHidden=g)&&!m&&t.mode&1)for(q=t,m=t.child;m!==null;){for(v=q=m;q!==null;){switch(p=q,S=p.child,p.tag){case 0:case 11:case 14:case 15:Yn(4,p,p.return);break;case 1:tn(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){o=p,r=p.return;try{e=o,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(j){Rt(o,r,j)}}break;case 5:tn(p,p.return);break;case 22:if(p.memoizedState!==null){Qd(v);continue}}S!==null?(S.return=p,q=S):Qd(v)}m=m.sibling}t:for(m=null,v=t;;){if(v.tag===5){if(m===null){m=v;try{s=v.stateNode,g?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=v.stateNode,d=v.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=nc("display",l))}catch(j){Rt(t,t.return,j)}}}else if(v.tag===6){if(m===null)try{v.stateNode.nodeValue=g?"":v.memoizedProps}catch(j){Rt(t,t.return,j)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===t)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===t)break t;for(;v.sibling===null;){if(v.return===null||v.return===t)break t;m===v&&(m=null),v=v.return}m===v&&(m=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:ke(e,t),Ee(t),o&4&&Vd(t);break;case 21:break;default:ke(e,t),Ee(t)}}function Ee(t){var e=t.flags;if(e&2){try{t:{for(var r=t.return;r!==null;){if(Eu(r)){var o=r;break t}r=r.return}throw Error(O(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&(qn(s,""),o.flags&=-33);var i=Ud(t);zl(t,i,s);break;case 3:case 4:var l=o.stateNode.containerInfo,a=Ud(t);Il(t,a,l);break;default:throw Error(O(161))}}catch(d){Rt(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jm(t,e,r){q=t,Au(t)}function Au(t,e,r){for(var o=(t.mode&1)!==0;q!==null;){var s=q,i=s.child;if(s.tag===22&&o){var l=s.memoizedState!==null||Lo;if(!l){var a=s.alternate,d=a!==null&&a.memoizedState!==null||Qt;a=Lo;var g=Qt;if(Lo=l,(Qt=d)&&!g)for(q=s;q!==null;)l=q,d=l.child,l.tag===22&&l.memoizedState!==null?Kd(s):d!==null?(d.return=l,q=d):Kd(s);for(;i!==null;)q=i,Au(i),i=i.sibling;q=s,Lo=a,Qt=g}Yd(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,q=i):Yd(t)}}function Yd(t){for(;q!==null;){var e=q;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Qt||Us(5,e);break;case 1:var o=e.stateNode;if(e.flags&4&&!Qt)if(r===null)o.componentDidMount();else{var s=e.elementType===e.type?r.memoizedProps:we(e.type,r.memoizedProps);o.componentDidUpdate(s,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Fd(e,i,o);break;case 3:var l=e.updateQueue;if(l!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}Fd(e,l,r)}break;case 5:var a=e.stateNode;if(r===null&&e.flags&4){r=a;var d=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&r.focus();break;case"img":d.src&&(r.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var g=e.alternate;if(g!==null){var m=g.memoizedState;if(m!==null){var v=m.dehydrated;v!==null&&no(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}Qt||e.flags&512&&Cl(e)}catch(p){Rt(e,e.return,p)}}if(e===t){q=null;break}if(r=e.sibling,r!==null){r.return=e.return,q=r;break}q=e.return}}function Qd(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var r=e.sibling;if(r!==null){r.return=e.return,q=r;break}q=e.return}}function Kd(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{Us(4,e)}catch(d){Rt(e,r,d)}break;case 1:var o=e.stateNode;if(typeof o.componentDidMount=="function"){var s=e.return;try{o.componentDidMount()}catch(d){Rt(e,s,d)}}var i=e.return;try{Cl(e)}catch(d){Rt(e,i,d)}break;case 5:var l=e.return;try{Cl(e)}catch(d){Rt(e,l,d)}}}catch(d){Rt(e,e.return,d)}if(e===t){q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,q=a;break}q=e.return}}var Cm=Math.ceil,Es=qe.ReactCurrentDispatcher,Ia=qe.ReactCurrentOwner,me=qe.ReactCurrentBatchConfig,ht=0,Ot=null,_t=null,Gt=0,se=0,en=yr(0),Pt=0,mo=null,Wr=0,Vs=0,za=0,Qn=null,te=null,Ta=0,mn=1/0,He=null,Bs=!1,Tl=null,br=null,Po=!1,lr=null,Fs=0,Kn=0,El=null,ss=-1,is=0;function Jt(){return ht&6?Wt():ss!==-1?ss:ss=Wt()}function pr(t){return t.mode&1?ht&2&&Gt!==0?Gt&-Gt:am.transition!==null?(is===0&&(is=fc()),is):(t=kt,t!==0||(t=window.event,t=t===void 0?16:Sc(t.type)),t):1}function Ie(t,e,r,o){if(50<Kn)throw Kn=0,El=null,Error(O(185));yo(t,r,o),(!(ht&2)||t!==Ot)&&(t===Ot&&(!(ht&2)&&(Vs|=r),Pt===4&&sr(t,Gt)),oe(t,o),r===1&&ht===0&&!(e.mode&1)&&(mn=Wt()+500,$s&&xr()))}function oe(t,e){var r=t.callbackNode;ap(t,e);var o=ps(t,t===Ot?Gt:0);if(o===0)r!==null&&od(r),t.callbackNode=null,t.callbackPriority=0;else if(e=o&-o,t.callbackPriority!==e){if(r!=null&&od(r),e===1)t.tag===0?lm(Xd.bind(null,t)):$c(Xd.bind(null,t)),nm(function(){!(ht&6)&&xr()}),r=null;else{switch(hc(o)){case 1:r=ta;break;case 4:r=pc;break;case 16:r=bs;break;case 536870912:r=mc;break;default:r=bs}r=Nu(r,Du.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function Du(t,e){if(ss=-1,is=0,ht&6)throw Error(O(327));var r=t.callbackNode;if(an()&&t.callbackNode!==r)return null;var o=ps(t,t===Ot?Gt:0);if(o===0)return null;if(o&30||o&t.expiredLanes||e)e=As(t,o);else{e=o;var s=ht;ht|=2;var i=Wu();(Ot!==t||Gt!==e)&&(He=null,mn=Wt()+500,Br(t,e));do try{Tm();break}catch(a){Ru(t,a)}while(!0);ba(),Es.current=i,ht=s,_t!==null?e=0:(Ot=null,Gt=0,e=Pt)}if(e!==0){if(e===2&&(s=rl(t),s!==0&&(o=s,e=Bl(t,s))),e===1)throw r=mo,Br(t,0),sr(t,o),oe(t,Wt()),r;if(e===6)sr(t,o);else{if(s=t.current.alternate,!(o&30)&&!Im(s)&&(e=As(t,o),e===2&&(i=rl(t),i!==0&&(o=i,e=Bl(t,i))),e===1))throw r=mo,Br(t,0),sr(t,o),oe(t,Wt()),r;switch(t.finishedWork=s,t.finishedLanes=o,e){case 0:case 1:throw Error(O(345));case 2:Sr(t,te,He);break;case 3:if(sr(t,o),(o&130023424)===o&&(e=Ta+500-Wt(),10<e)){if(ps(t,0)!==0)break;if(s=t.suspendedLanes,(s&o)!==o){Jt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=gl(Sr.bind(null,t,te,He),e);break}Sr(t,te,He);break;case 4:if(sr(t,o),(o&4194240)===o)break;for(e=t.eventTimes,s=-1;0<o;){var l=31-Ce(o);i=1<<l,l=e[l],l>s&&(s=l),o&=~i}if(o=s,o=Wt()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Cm(o/1960))-o,10<o){t.timeoutHandle=gl(Sr.bind(null,t,te,He),o);break}Sr(t,te,He);break;case 5:Sr(t,te,He);break;default:throw Error(O(329))}}}return oe(t,Wt()),t.callbackNode===r?Du.bind(null,t):null}function Bl(t,e){var r=Qn;return t.current.memoizedState.isDehydrated&&(Br(t,e).flags|=256),t=As(t,e),t!==2&&(e=te,te=r,e!==null&&Fl(e)),t}function Fl(t){te===null?te=t:te.push.apply(te,t)}function Im(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var s=r[o],i=s.getSnapshot;s=s.value;try{if(!ze(i(),s))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function sr(t,e){for(e&=~za,e&=~Vs,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-Ce(e),o=1<<r;t[r]=-1,e&=~o}}function Xd(t){if(ht&6)throw Error(O(327));an();var e=ps(t,0);if(!(e&1))return oe(t,Wt()),null;var r=As(t,e);if(t.tag!==0&&r===2){var o=rl(t);o!==0&&(e=o,r=Bl(t,o))}if(r===1)throw r=mo,Br(t,0),sr(t,e),oe(t,Wt()),r;if(r===6)throw Error(O(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Sr(t,te,He),oe(t,Wt()),null}function Ea(t,e){var r=ht;ht|=1;try{return t(e)}finally{ht=r,ht===0&&(mn=Wt()+500,$s&&xr())}}function Mr(t){lr!==null&&lr.tag===0&&!(ht&6)&&an();var e=ht;ht|=1;var r=me.transition,o=kt;try{if(me.transition=null,kt=1,t)return t()}finally{kt=o,me.transition=r,ht=e,!(ht&6)&&xr()}}function Ba(){se=en.current,zt(en)}function Br(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,rm(r)),_t!==null)for(r=_t.return;r!==null;){var o=r;switch(ga(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&ys();break;case 3:bn(),zt(re),zt(Kt),ya();break;case 5:va(o);break;case 4:bn();break;case 13:zt(Ft);break;case 19:zt(Ft);break;case 10:pa(o.type._context);break;case 22:case 23:Ba()}r=r.return}if(Ot=t,_t=t=mr(t.current,null),Gt=se=e,Pt=0,mo=null,za=Vs=Wr=0,te=Qn=null,zr!==null){for(e=0;e<zr.length;e++)if(r=zr[e],o=r.interleaved,o!==null){r.interleaved=null;var s=o.next,i=r.pending;if(i!==null){var l=i.next;i.next=s,o.next=l}r.pending=o}zr=null}return t}function Ru(t,e){do{var r=_t;try{if(ba(),rs.current=Ts,zs){for(var o=At.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}zs=!1}if(Rr=0,Nt=Lt=At=null,Vn=!1,uo=0,Ia.current=null,r===null||r.return===null){Pt=1,mo=e,_t=null;break}t:{var i=t,l=r.return,a=r,d=e;if(e=Gt,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var g=d,m=a,v=m.tag;if(!(m.mode&1)&&(v===0||v===11||v===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var S=_d(l);if(S!==null){S.flags&=-257,Ld(S,l,a,i,e),S.mode&1&&Md(i,g,e),e=S,d=g;var w=e.updateQueue;if(w===null){var j=new Set;j.add(d),e.updateQueue=j}else w.add(d);break t}else{if(!(e&1)){Md(i,g,e),Fa();break t}d=Error(O(426))}}else if(Et&&a.mode&1){var C=_d(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Ld(C,l,a,i,e),ca(pn(d,a));break t}}i=d=pn(d,a),Pt!==4&&(Pt=2),Qn===null?Qn=[i]:Qn.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var b=hu(i,d,e);Bd(i,b);break t;case 1:a=d;var u=i.type,c=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(br===null||!br.has(c)))){i.flags|=65536,e&=-e,i.lanes|=e;var k=vu(i,a,e);Bd(i,k);break t}}i=i.return}while(i!==null)}_u(r)}catch(x){e=x,_t===r&&r!==null&&(_t=r=r.return);continue}break}while(!0)}function Wu(){var t=Es.current;return Es.current=Ts,t===null?Ts:t}function Fa(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Ot===null||!(Wr&268435455)&&!(Vs&268435455)||sr(Ot,Gt)}function As(t,e){var r=ht;ht|=2;var o=Wu();(Ot!==t||Gt!==e)&&(He=null,Br(t,e));do try{zm();break}catch(s){Ru(t,s)}while(!0);if(ba(),ht=r,Es.current=o,_t!==null)throw Error(O(261));return Ot=null,Gt=0,Pt}function zm(){for(;_t!==null;)Mu(_t)}function Tm(){for(;_t!==null&&!qb();)Mu(_t)}function Mu(t){var e=Pu(t.alternate,t,se);t.memoizedProps=t.pendingProps,e===null?_u(t):_t=e,Ia.current=null}function _u(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=km(r,e),r!==null){r.flags&=32767,_t=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pt=6,_t=null;return}}else if(r=xm(r,e,se),r!==null){_t=r;return}if(e=e.sibling,e!==null){_t=e;return}_t=e=t}while(e!==null);Pt===0&&(Pt=5)}function Sr(t,e,r){var o=kt,s=me.transition;try{me.transition=null,kt=1,Em(t,e,r,o)}finally{me.transition=s,kt=o}return null}function Em(t,e,r,o){do an();while(lr!==null);if(ht&6)throw Error(O(327));r=t.finishedWork;var s=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(O(177));t.callbackNode=null,t.callbackPriority=0;var i=r.lanes|r.childLanes;if(dp(t,i),t===Ot&&(_t=Ot=null,Gt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Po||(Po=!0,Nu(bs,function(){return an(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=me.transition,me.transition=null;var l=kt;kt=1;var a=ht;ht|=4,Ia.current=null,Sm(t,r),Fu(r,t),Kp(al),ms=!!ll,al=ll=null,t.current=r,jm(r),tp(),ht=a,kt=l,me.transition=i}else t.current=r;if(Po&&(Po=!1,lr=t,Fs=s),i=t.pendingLanes,i===0&&(br=null),np(r.stateNode),oe(t,Wt()),e!==null)for(o=t.onRecoverableError,r=0;r<e.length;r++)s=e[r],o(s.value,{componentStack:s.stack,digest:s.digest});if(Bs)throw Bs=!1,t=Tl,Tl=null,t;return Fs&1&&t.tag!==0&&an(),i=t.pendingLanes,i&1?t===El?Kn++:(Kn=0,El=t):Kn=0,xr(),null}function an(){if(lr!==null){var t=hc(Fs),e=me.transition,r=kt;try{if(me.transition=null,kt=16>t?16:t,lr===null)var o=!1;else{if(t=lr,lr=null,Fs=0,ht&6)throw Error(O(331));var s=ht;for(ht|=4,q=t.current;q!==null;){var i=q,l=i.child;if(q.flags&16){var a=i.deletions;if(a!==null){for(var d=0;d<a.length;d++){var g=a[d];for(q=g;q!==null;){var m=q;switch(m.tag){case 0:case 11:case 15:Yn(8,m,i)}var v=m.child;if(v!==null)v.return=m,q=v;else for(;q!==null;){m=q;var p=m.sibling,S=m.return;if(Tu(m),m===g){q=null;break}if(p!==null){p.return=S,q=p;break}q=S}}}var w=i.alternate;if(w!==null){var j=w.child;if(j!==null){w.child=null;do{var C=j.sibling;j.sibling=null,j=C}while(j!==null)}}q=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,q=l;else t:for(;q!==null;){if(i=q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Yn(9,i,i.return)}var b=i.sibling;if(b!==null){b.return=i.return,q=b;break t}q=i.return}}var u=t.current;for(q=u;q!==null;){l=q;var c=l.child;if(l.subtreeFlags&2064&&c!==null)c.return=l,q=c;else t:for(l=u;q!==null;){if(a=q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Us(9,a)}}catch(x){Rt(a,a.return,x)}if(a===l){q=null;break t}var k=a.sibling;if(k!==null){k.return=a.return,q=k;break t}q=a.return}}if(ht=s,xr(),Le&&typeof Le.onPostCommitFiberRoot=="function")try{Le.onPostCommitFiberRoot(_s,t)}catch{}o=!0}return o}finally{kt=r,me.transition=e}}return!1}function Jd(t,e,r){e=pn(r,e),e=hu(t,e,1),t=ur(t,e,1),e=Jt(),t!==null&&(yo(t,1,e),oe(t,e))}function Rt(t,e,r){if(t.tag===3)Jd(t,t,r);else for(;e!==null;){if(e.tag===3){Jd(e,t,r);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(br===null||!br.has(o))){t=pn(r,t),t=vu(e,t,1),e=ur(e,t,1),t=Jt(),e!==null&&(yo(e,1,t),oe(e,t));break}}e=e.return}}function Bm(t,e,r){var o=t.pingCache;o!==null&&o.delete(e),e=Jt(),t.pingedLanes|=t.suspendedLanes&r,Ot===t&&(Gt&r)===r&&(Pt===4||Pt===3&&(Gt&130023424)===Gt&&500>Wt()-Ta?Br(t,0):za|=r),oe(t,e)}function Lu(t,e){e===0&&(t.mode&1?(e=Eo,Eo<<=1,!(Eo&130023424)&&(Eo=4194304)):e=1);var r=Jt();t=Je(t,e),t!==null&&(yo(t,e,r),oe(t,r))}function Fm(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),Lu(t,r)}function Am(t,e){var r=0;switch(t.tag){case 13:var o=t.stateNode,s=t.memoizedState;s!==null&&(r=s.retryLane);break;case 19:o=t.stateNode;break;default:throw Error(O(314))}o!==null&&o.delete(e),Lu(t,r)}var Pu;Pu=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||re.current)ee=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return ee=!1,ym(t,e,r);ee=!!(t.flags&131072)}else ee=!1,Et&&e.flags&1048576&&Hc(e,ws,e.index);switch(e.lanes=0,e.tag){case 2:var o=e.type;os(t,e),t=e.pendingProps;var s=gn(e,Kt.current);ln(e,r),s=ka(null,e,o,t,s,r);var i=wa();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ne(o)?(i=!0,xs(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,fa(e),s.updater=Gs,e.stateNode=s,s._reactInternals=e,hl(e,o,t,r),e=xl(null,e,o,!0,i,r)):(e.tag=0,Et&&i&&da(e),Xt(null,e,s,r),e=e.child),e;case 16:o=e.elementType;t:{switch(os(t,e),t=e.pendingProps,s=o._init,o=s(o._payload),e.type=o,s=e.tag=Rm(o),t=we(o,t),s){case 0:e=yl(null,e,o,t,r);break t;case 1:e=Od(null,e,o,t,r);break t;case 11:e=Pd(null,e,o,t,r);break t;case 14:e=Nd(null,e,o,we(o.type,t),r);break t}throw Error(O(306,o,""))}return e;case 0:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:we(o,s),yl(t,e,o,s,r);case 1:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:we(o,s),Od(t,e,o,s,r);case 3:t:{if(wu(e),t===null)throw Error(O(387));o=e.pendingProps,i=e.memoizedState,s=i.element,Kc(t,e),Cs(e,o,null,r);var l=e.memoizedState;if(o=l.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=pn(Error(O(423)),e),e=$d(t,e,o,r,s);break t}else if(o!==s){s=pn(Error(O(424)),e),e=$d(t,e,o,r,s);break t}else for(ie=cr(e.stateNode.containerInfo.firstChild),le=e,Et=!0,je=null,r=Yc(e,null,o,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(cn(),o===s){e=Ze(t,e,r);break t}Xt(t,e,o,r)}e=e.child}return e;case 5:return Xc(e),t===null&&pl(e),o=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,l=s.children,dl(o,s)?l=null:i!==null&&dl(o,i)&&(e.flags|=32),ku(t,e),Xt(t,e,l,r),e.child;case 6:return t===null&&pl(e),null;case 13:return Su(t,e,r);case 4:return ha(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=un(e,null,o,r):Xt(t,e,o,r),e.child;case 11:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:we(o,s),Pd(t,e,o,s,r);case 7:return Xt(t,e,e.pendingProps,r),e.child;case 8:return Xt(t,e,e.pendingProps.children,r),e.child;case 12:return Xt(t,e,e.pendingProps.children,r),e.child;case 10:t:{if(o=e.type._context,s=e.pendingProps,i=e.memoizedProps,l=s.value,jt(Ss,o._currentValue),o._currentValue=l,i!==null)if(ze(i.value,l)){if(i.children===s.children&&!re.current){e=Ze(t,e,r);break t}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var d=a.firstContext;d!==null;){if(d.context===o){if(i.tag===1){d=Qe(-1,r&-r),d.tag=2;var g=i.updateQueue;if(g!==null){g=g.shared;var m=g.pending;m===null?d.next=d:(d.next=m.next,m.next=d),g.pending=d}}i.lanes|=r,d=i.alternate,d!==null&&(d.lanes|=r),ml(i.return,r,e),a.lanes|=r;break}d=d.next}}else if(i.tag===10)l=i.type===e.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(O(341));l.lanes|=r,a=l.alternate,a!==null&&(a.lanes|=r),ml(l,r,e),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===e){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Xt(t,e,s.children,r),e=e.child}return e;case 9:return s=e.type,o=e.pendingProps.children,ln(e,r),s=fe(s),o=o(s),e.flags|=1,Xt(t,e,o,r),e.child;case 14:return o=e.type,s=we(o,e.pendingProps),s=we(o.type,s),Nd(t,e,o,s,r);case 15:return yu(t,e,e.type,e.pendingProps,r);case 17:return o=e.type,s=e.pendingProps,s=e.elementType===o?s:we(o,s),os(t,e),e.tag=1,ne(o)?(t=!0,xs(e)):t=!1,ln(e,r),fu(e,o,s),hl(e,o,s,r),xl(null,e,o,!0,t,r);case 19:return ju(t,e,r);case 22:return xu(t,e,r)}throw Error(O(156,e.tag))};function Nu(t,e){return bc(t,e)}function Dm(t,e,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(t,e,r,o){return new Dm(t,e,r,o)}function Aa(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Rm(t){if(typeof t=="function")return Aa(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jl)return 11;if(t===Zl)return 14}return 2}function mr(t,e){var r=t.alternate;return r===null?(r=be(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function ls(t,e,r,o,s,i){var l=2;if(o=t,typeof t=="function")Aa(t)&&(l=1);else if(typeof t=="string")l=5;else t:switch(t){case Ur:return Fr(r.children,s,i,e);case Xl:l=8,s|=8;break;case Oi:return t=be(12,r,e,s|2),t.elementType=Oi,t.lanes=i,t;case $i:return t=be(13,r,e,s),t.elementType=$i,t.lanes=i,t;case Hi:return t=be(19,r,e,s),t.elementType=Hi,t.lanes=i,t;case Xg:return Ys(r,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Qg:l=10;break t;case Kg:l=9;break t;case Jl:l=11;break t;case Zl:l=14;break t;case rr:l=16,o=null;break t}throw Error(O(130,t==null?t:typeof t,""))}return e=be(l,r,e,s),e.elementType=t,e.type=o,e.lanes=i,e}function Fr(t,e,r,o){return t=be(7,t,o,e),t.lanes=r,t}function Ys(t,e,r,o){return t=be(22,t,o,e),t.elementType=Xg,t.lanes=r,t.stateNode={isHidden:!1},t}function wi(t,e,r){return t=be(6,t,null,e),t.lanes=r,t}function Si(t,e,r){return e=be(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Wm(t,e,r,o,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ni(0),this.expirationTimes=ni(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ni(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Da(t,e,r,o,s,i,l,a,d){return t=new Wm(t,e,r,a,d),e===1?(e=1,i===!0&&(e|=8)):e=0,i=be(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},fa(i),t}function Mm(t,e,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gr,key:o==null?null:""+o,children:t,containerInfo:e,implementation:r}}function Ou(t){if(!t)return hr;t=t._reactInternals;t:{if(Nr(t)!==t||t.tag!==1)throw Error(O(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break t;case 1:if(ne(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break t}}e=e.return}while(e!==null);throw Error(O(171))}if(t.tag===1){var r=t.type;if(ne(r))return Oc(t,r,e)}return e}function $u(t,e,r,o,s,i,l,a,d){return t=Da(r,o,!0,t,s,i,l,a,d),t.context=Ou(null),r=t.current,o=Jt(),s=pr(r),i=Qe(o,s),i.callback=e??null,ur(r,i,s),t.current.lanes=s,yo(t,s,o),oe(t,o),t}function Qs(t,e,r,o){var s=e.current,i=Jt(),l=pr(s);return r=Ou(r),e.context===null?e.context=r:e.pendingContext=r,e=Qe(i,l),e.payload={element:t},o=o===void 0?null:o,o!==null&&(e.callback=o),t=ur(s,e,l),t!==null&&(Ie(t,s,l,i),es(t,s,l)),l}function Ds(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Zd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function Ra(t,e){Zd(t,e),(t=t.alternate)&&Zd(t,e)}function _m(){return null}var Hu=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wa(t){this._internalRoot=t}Ks.prototype.render=Wa.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(O(409));Qs(t,e,null,null)};Ks.prototype.unmount=Wa.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Mr(function(){Qs(null,t,null,null)}),e[Xe]=null}};function Ks(t){this._internalRoot=t}Ks.prototype.unstable_scheduleHydration=function(t){if(t){var e=xc();t={blockedOn:null,target:t,priority:e};for(var r=0;r<or.length&&e!==0&&e<or[r].priority;r++);or.splice(r,0,t),r===0&&wc(t)}};function Ma(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qd(){}function Lm(t,e,r,o,s){if(s){if(typeof o=="function"){var i=o;o=function(){var g=Ds(l);i.call(g)}}var l=$u(e,o,t,0,null,!1,!1,"",qd);return t._reactRootContainer=l,t[Xe]=l.current,io(t.nodeType===8?t.parentNode:t),Mr(),l}for(;s=t.lastChild;)t.removeChild(s);if(typeof o=="function"){var a=o;o=function(){var g=Ds(d);a.call(g)}}var d=Da(t,0,!1,null,null,!1,!1,"",qd);return t._reactRootContainer=d,t[Xe]=d.current,io(t.nodeType===8?t.parentNode:t),Mr(function(){Qs(e,d,r,o)}),d}function Js(t,e,r,o,s){var i=r._reactRootContainer;if(i){var l=i;if(typeof s=="function"){var a=s;s=function(){var d=Ds(l);a.call(d)}}Qs(e,l,t,s)}else l=Lm(r,e,t,s,o);return Ds(l)}vc=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Mn(e.pendingLanes);r!==0&&(ea(e,r|1),oe(e,Wt()),!(ht&6)&&(mn=Wt()+500,xr()))}break;case 13:Mr(function(){var o=Je(t,1);if(o!==null){var s=Jt();Ie(o,t,1,s)}}),Ra(t,1)}};ra=function(t){if(t.tag===13){var e=Je(t,134217728);if(e!==null){var r=Jt();Ie(e,t,134217728,r)}Ra(t,134217728)}};yc=function(t){if(t.tag===13){var e=pr(t),r=Je(t,e);if(r!==null){var o=Jt();Ie(r,t,e,o)}Ra(t,e)}};xc=function(){return kt};kc=function(t,e){var r=kt;try{return kt=t,e()}finally{kt=r}};qi=function(t,e,r){switch(e){case"input":if(Vi(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var o=r[e];if(o!==t&&o.form===t.form){var s=Os(o);if(!s)throw Error(O(90));Zg(o),Vi(o,s)}}}break;case"textarea":tc(t,r);break;case"select":e=r.value,e!=null&&rn(t,!!r.multiple,e,!1)}};lc=Ea;ac=Mr;var Pm={usingClientEntryPoint:!1,Events:[ko,Kr,Os,sc,ic,Ea]},Fn={findFiberByHostInstance:Ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nm={bundleType:Fn.bundleType,version:Fn.version,rendererPackageName:Fn.rendererPackageName,rendererConfig:Fn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qe.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cc(t),t===null?null:t.stateNode},findFiberByHostInstance:Fn.findFiberByHostInstance||_m,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var No=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!No.isDisabled&&No.supportsFiber)try{_s=No.inject(Nm),Le=No}catch{}}de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pm;de.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ma(e))throw Error(O(200));return Mm(t,e,null,r)};de.createRoot=function(t,e){if(!Ma(t))throw Error(O(299));var r=!1,o="",s=Hu;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Da(t,1,!1,null,null,r,!1,o,s),t[Xe]=e.current,io(t.nodeType===8?t.parentNode:t),new Wa(e)};de.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(O(188)):(t=Object.keys(t).join(","),Error(O(268,t)));return t=cc(e),t=t===null?null:t.stateNode,t};de.flushSync=function(t){return Mr(t)};de.hydrate=function(t,e,r){if(!Xs(e))throw Error(O(200));return Js(null,t,e,!0,r)};de.hydrateRoot=function(t,e,r){if(!Ma(t))throw Error(O(405));var o=r!=null&&r.hydratedSources||null,s=!1,i="",l=Hu;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),e=$u(e,null,t,1,r??null,s,!1,i,l),t[Xe]=e.current,io(t),o)for(t=0;t<o.length;t++)r=o[t],s=r._getVersion,s=s(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,s]:e.mutableSourceEagerHydrationData.push(r,s);return new Ks(e)};de.render=function(t,e,r){if(!Xs(e))throw Error(O(200));return Js(null,t,e,!1,r)};de.unmountComponentAtNode=function(t){if(!Xs(t))throw Error(O(40));return t._reactRootContainer?(Mr(function(){Js(null,null,t,!1,function(){t._reactRootContainer=null,t[Xe]=null})}),!0):!1};de.unstable_batchedUpdates=Ea;de.unstable_renderSubtreeIntoContainer=function(t,e,r,o){if(!Xs(r))throw Error(O(200));if(t==null||t._reactInternals===void 0)throw Error(O(38));return Js(t,e,r,!1,o)};de.version="18.3.1-next-f1338f8080-20240426";function Gu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gu)}catch(t){console.error(t)}}Gu(),Gg.exports=de;var Om=Gg.exports,Uu,tg=Om;Uu=tg.createRoot,tg.hydrateRoot;/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Vu=(...t)=>t.filter((e,r,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===r).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Hm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=y.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:s="",children:i,iconNode:l,...a},d)=>y.createElement("svg",{ref:d,...Hm,width:e,height:e,stroke:t,strokeWidth:o?Number(r)*24/Number(e):r,className:Vu("lucide",s),...a},[...l.map(([g,m])=>y.createElement(g,m)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=(t,e)=>{const r=y.forwardRef(({className:o,...s},i)=>y.createElement(Gm,{ref:i,iconNode:e,className:Vu(`lucide-${$m(t)}`,o),...s}));return r.displayName=`${t}`,r};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=rt("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=rt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=rt("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=rt("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=rt("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=rt("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=rt("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=rt("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=rt("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=rt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=rt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=rt("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=rt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=rt("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=rt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=rt("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=rt("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=rt("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=rt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=rt("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=rt("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=rt("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=rt("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=rt("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=rt("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=rt("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=rt("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=rt("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=rt("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=rt("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=rt("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=rt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=rt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=rt("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=rt("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=rt("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=rt("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=rt("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=rt("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=rt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=rt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=rt("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=rt("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=rt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=rt("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=rt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=rt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=rt("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=rt("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=rt("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=rt("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=rt("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=rt("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=rt("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=rt("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=rt("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=rt("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=rt("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=rt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=rt("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),Na="anvil_token",Oa=()=>localStorage.getItem(Na),xf=t=>localStorage.setItem(Na,t),Ml=()=>localStorage.removeItem(Na),G=async(t,e,r)=>{const o={};r!==void 0&&(o["Content-Type"]="application/json");const s=Oa();s&&(o.Authorization=`Bearer ${s}`);const i=await fetch(`/api${e}`,{method:t,headers:o,body:r!==void 0?JSON.stringify(r):void 0});if(i.status===401)throw Ml(),window.dispatchEvent(new Event("anvil-unauthorized")),new Error("Not authenticated");if(i.status===204)return null;if(!i.ok){const l=await i.text();let a=l;try{a=JSON.parse(l).detail||l}catch{}throw new Error(a||`HTTP ${i.status}`)}return i.json()},U={register:t=>G("POST","/auth/register",t),login:t=>G("POST","/auth/login",t),me:()=>G("GET","/auth/me"),getGcalStatus:()=>G("GET","/auth/google/status"),connectGoogle:()=>{window.location.href=`/api/auth/google?token=${encodeURIComponent(Oa()||"")}`},disconnectGoogle:()=>G("DELETE","/auth/google"),getPillars:()=>G("GET","/pillars"),getFocus:()=>G("GET","/focus"),createFocus:t=>G("POST","/focus",t),deleteFocus:t=>G("DELETE",`/focus/${t}`),getGoldenGoals:()=>G("GET","/golden/goals"),getGoldenGoal:t=>G("GET",`/golden/goals/${t}`),createGolden:t=>G("POST","/golden/goals",t),updateGolden:(t,e)=>G("PUT",`/golden/goals/${t}`,e),achieveGolden:t=>G("POST",`/golden/goals/${t}/achieve`),unachieveGolden:t=>G("POST",`/golden/goals/${t}/unachieve`),upsertGoldenEntry:(t,e)=>G("PUT",`/golden/goals/${t}/entry`,e),deleteGolden:t=>G("DELETE",`/golden/goals/${t}`),restoreGolden:t=>G("POST",`/golden/goals/${t}/restore`),getKickstart:()=>G("GET","/kickstart/videos"),createKickstart:t=>G("POST","/kickstart/videos",t),updateKickstart:(t,e)=>G("PUT",`/kickstart/videos/${t}`,e),deleteKickstart:t=>G("DELETE",`/kickstart/videos/${t}`),restoreKickstart:t=>G("POST",`/kickstart/videos/${t}/restore`),getTxns:()=>G("GET","/finance/txns"),createTxn:t=>G("POST","/finance/txns",t),updateTxn:(t,e)=>G("PUT",`/finance/txns/${t}`,e),deleteTxn:t=>G("DELETE",`/finance/txns/${t}`),restoreTxn:t=>G("POST",`/finance/txns/${t}/restore`),getSetting:t=>G("GET",`/settings/${t}`),setSetting:(t,e)=>G("PUT",`/settings/${t}`,{value:e}),getTasks:()=>G("GET","/tasks"),createTask:t=>G("POST","/tasks",t),updateTask:(t,e)=>G("PUT",`/tasks/${t}`,e),deleteTask:t=>G("DELETE",`/tasks/${t}`),restoreTask:t=>G("POST",`/tasks/${t}/restore`),scheduleTask:t=>G("PUT",`/tasks/${t}/schedule`),getGoals:t=>G("GET",`/goals${t?`?pillar=${encodeURIComponent(t)}`:""}`),createGoal:t=>G("POST","/goals",t),updateGoal:(t,e)=>G("PUT",`/goals/${t}`,e),deleteGoal:t=>G("DELETE",`/goals/${t}`),restoreGoal:t=>G("POST",`/goals/${t}/restore`),getHabits:()=>G("GET","/habits"),createHabit:t=>G("POST","/habits",t),updateHabit:(t,e)=>G("PUT",`/habits/${t}`,e),deleteHabit:t=>G("DELETE",`/habits/${t}`),restoreHabit:t=>G("POST",`/habits/${t}/restore`),toggleHabitLog:(t,e)=>G("POST",`/habits/${t}/log/${e}`),setHabitLogNote:(t,e,r)=>G("PUT",`/habits/${t}/log/${e}/note`,{note:r}),setHabitLogCount:(t,e,r,o)=>G("PUT",`/habits/${t}/log/${e}/count`,{count:r,note:o}),clearHabitLog:(t,e)=>G("DELETE",`/habits/${t}/log/${e}`),getHabitsYearly:t=>G("GET",`/habits/yearly/${t}`),getJournalEntry:t=>G("GET",`/journal/${t}`),getJournalHistory:(t,e)=>G("GET",`/journal/history/${t}/${e}`),updateJournalMood:(t,e)=>G("PUT",`/journal/${t}`,{mood:e}),addJournalBullet:(t,e,r)=>G("POST",`/journal/${t}/bullets`,{section:e,text:r}),deleteJournalBullet:t=>G("DELETE",`/journal/bullets/${t}`),getSkills:()=>G("GET","/skills"),createSkill:t=>G("POST","/skills",t),updateSkill:(t,e)=>G("PUT",`/skills/${t}`,e),deleteSkill:t=>G("DELETE",`/skills/${t}`),restoreSkill:t=>G("POST",`/skills/${t}/restore`),addSkillNote:(t,e,r)=>G("POST",`/skills/${t}/notes`,{stage:e,text:r}),deleteSkillNote:t=>G("DELETE",`/skill-notes/${t}`),updateSkillNote:(t,e)=>G("PUT",`/skill-notes/${t}`,{text:e}),toggleSkillNote:t=>G("PUT",`/skill-notes/${t}/toggle`),completeSkillStage:(t,e)=>G("POST",`/skills/${t}/complete-stage`,{stage:e}),getScriptures:()=>G("GET","/scriptures"),createScripture:t=>G("POST","/scriptures",t),deleteScripture:t=>G("DELETE",`/scriptures/${t}`),restoreScripture:t=>G("POST",`/scriptures/${t}/restore`),addChapter:(t,e)=>G("POST",`/scriptures/${t}/chapters`,e),updateChapter:(t,e)=>G("PUT",`/chapters/${t}`,e),deleteChapter:t=>G("DELETE",`/chapters/${t}`),restoreChapter:t=>G("POST",`/chapters/${t}/restore`),addInsight:(t,e)=>G("POST",`/chapters/${t}/insights`,{text:e}),deleteInsight:t=>G("DELETE",`/insights/${t}`),getTopics:()=>G("GET","/revision/topics"),createTopic:t=>G("POST","/revision/topics",t),updateTopic:(t,e)=>G("PUT",`/revision/topics/${t}`,e),deleteTopic:t=>G("DELETE",`/revision/topics/${t}`),restoreTopic:t=>G("POST",`/revision/topics/${t}/restore`),getDueToday:()=>G("GET","/revision/due-today"),getCalendar:(t,e)=>G("GET",`/revision/calendar/${t}/${e}`),toggleReviewDone:t=>G("PUT",`/revision/reviews/${t}/done`),getAffirmations:()=>G("GET","/affirmations"),createAffirmation:t=>G("POST","/affirmations",t),updateAffirmation:(t,e)=>G("PUT",`/affirmations/${t}`,e),deleteAffirmation:t=>G("DELETE",`/affirmations/${t}`),restoreAffirmation:t=>G("POST",`/affirmations/${t}/restore`)},kf=7e3;function kn(t,e,r){const[o,s]=y.useState([]),i=y.useRef({}),l=y.useCallback(async(g,m="Item")=>{await t(g),r();const v=`${g}-${Date.now()}`;s(p=>[...p,{id:v,itemId:g,label:m}]),i.current[v]=setTimeout(()=>{s(p=>p.filter(S=>S.id!==v)),delete i.current[v]},kf)},[t,r]),a=y.useCallback(async g=>{const m=o.find(v=>v.id===g);m&&(clearTimeout(i.current[g]),delete i.current[g],s(v=>v.filter(p=>p.id!==g)),await e(m.itemId),r())},[o,e,r]),d=y.useCallback(g=>{clearTimeout(i.current[g]),delete i.current[g],s(m=>m.filter(v=>v.id!==g))},[]);return{deleteItem:l,toasts:o,handleUndo:a,handleDismiss:d}}function wn({toasts:t,onUndo:e,onDismiss:r}){return n.jsx("div",{style:Hr.container,children:t.map(o=>n.jsx(wf,{toast:o,onUndo:e,onDismiss:r},o.id))})}function wf({toast:t,onUndo:e,onDismiss:r}){const[o,s]=y.useState(100);return y.useEffect(()=>{const i=Date.now(),l=7e3,a=setInterval(()=>{const d=Date.now()-i,g=Math.max(0,100-d/l*100);s(g),g===0&&clearInterval(a)},50);return()=>clearInterval(a)},[]),n.jsxs("div",{style:Hr.toast,children:[n.jsx("div",{style:{...Hr.bar,width:`${o}%`}}),n.jsxs("span",{style:Hr.msg,children:[t.label," deleted"]}),n.jsx("button",{style:Hr.undoBtn,onClick:()=>e(t.id),children:"Undo"}),n.jsx("button",{style:Hr.closeBtn,onClick:()=>r(t.id),children:"×"})]})}const Hr={container:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",gap:8,zIndex:999,pointerEvents:"none"},toast:{position:"relative",display:"flex",alignItems:"center",gap:12,background:"var(--accent-strong)",color:"#fff",borderRadius:10,padding:"12px 16px",fontSize:13.5,fontFamily:"'Inter', system-ui, sans-serif",boxShadow:"0 4px 20px rgba(0,0,0,0.25)",minWidth:260,overflow:"hidden",pointerEvents:"all"},bar:{position:"absolute",bottom:0,left:0,height:3,background:"#4C9A6B",transition:"width 0.05s linear",borderRadius:"0 0 0 10px"},msg:{flex:1,fontWeight:500},undoBtn:{border:"1px solid rgba(255,255,255,0.3)",background:"none",color:"#4C9A6B",fontWeight:700,fontSize:13,padding:"4px 10px",borderRadius:6,cursor:"pointer",fontFamily:"inherit"},closeBtn:{border:"none",background:"none",color:"rgba(255,255,255,0.5)",cursor:"pointer",fontSize:18,lineHeight:1,padding:"0 2px"}},$o={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},rg=[{id:"Q1",symbol:"™",title:"Do Now",sub:"Important · Urgent",accent:"#C2536B"},{id:"Q2",symbol:"©",title:"Schedule",sub:"Important · Not Urgent",accent:"#3A7CA5"},{id:"Q3",symbol:"®",title:"Delegate",sub:"Not Important · Urgent",accent:"#C9A227"},{id:"Q4",symbol:"•",title:"Drop",sub:"Not Important · Not Urgent",accent:"#8A8780"}];function Sf(){return new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Kolkata"})}function jf(){const t=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"})),r=t.getMinutes()<30?30:0,o=r===0?t.getHours()+1:t.getHours();return`${String(o%24).padStart(2,"0")}:${String(r).padStart(2,"0")}`}function Cf(t,e){const[r,o]=t.split(":").map(Number),s=r*60+o+e;return`${String(Math.floor(s/60)%24).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`}function If(t){return t?new Date(t).toLocaleString("en-IN",{timeZone:"Asia/Kolkata",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0}):""}const ji=()=>({title:"",pillar:"Financial",est:30,date:Sf(),startTime:jf()});function zf(){const[t,e]=y.useState([]),[r,o]=y.useState(null),[s,i]=y.useState(ji()),[l,a]=y.useState({connected:!1,configured:!1}),d=y.useCallback(()=>U.getTasks().then(e).catch(console.error),[]);y.useEffect(()=>{d(),U.getGcalStatus().then(a).catch(()=>{})},[d]);const{deleteItem:g,toasts:m,handleUndo:v,handleDismiss:p}=kn(U.deleteTask,U.restoreTask,d),S=c=>t.filter(k=>k.quadrant===c),w=c=>S(c).reduce((k,x)=>k+x.time_estimate_min,0),j=c=>c>=60?`${Math.floor(c/60)}h${c%60?` ${c%60}m`:""}`:`${c}m`,C=c=>{var x;return`${((x=rg.find(T=>T.id===c.quadrant))==null?void 0:x.symbol)??""} ${c.title}`},b=async c=>{if(!s.title.trim())return;const k=s.date&&s.startTime?`${s.date}T${s.startTime}:00`:null;await U.createTask({pillar:s.pillar,title:s.title,quadrant:c,time_estimate_min:Number(s.est)||30,start_datetime:k}),i(ji()),o(null),d()},u=(c,k)=>g(c,k);return n.jsxs("div",{style:st.page,children:[n.jsxs("div",{style:st.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:st.eyebrow,children:"Anvil · Weekly Routing"}),n.jsx("h1",{style:st.h1,children:"Weekly Routing"})]}),n.jsxs("div",{style:st.headRight,children:[n.jsx("div",{style:st.legend,children:Object.entries($o).map(([c,k])=>n.jsxs("span",{style:st.legendItem,children:[n.jsx("span",{style:{...st.dot,background:k.dot}}),c]},c))}),l.configured&&(l.connected?n.jsxs("button",{style:st.gcalBadgeOn,title:"Disconnect Google Calendar",onClick:()=>U.disconnectGoogle().then(()=>a({...l,connected:!1})),children:[n.jsx(Oo,{size:13})," Google Calendar connected"]}):n.jsxs("button",{style:st.gcalBadgeOff,onClick:()=>U.connectGoogle(),children:[n.jsx(Oo,{size:13})," Connect Google Calendar"]}))]})]}),n.jsx("div",{style:st.grid,children:rg.map(c=>n.jsxs("section",{style:{...st.quad,borderTop:`3px solid ${c.accent}`},children:[n.jsxs("header",{style:st.quadHead,children:[n.jsxs("div",{style:st.quadTitleRow,children:[n.jsx("span",{style:{...st.symbol,color:c.accent},children:c.symbol}),n.jsxs("div",{children:[n.jsx("div",{style:st.quadTitle,children:c.title}),n.jsx("div",{style:st.quadSub,children:c.sub})]})]}),n.jsx("span",{style:st.quadTotal,children:j(w(c.id))})]}),n.jsxs("div",{style:st.list,children:[S(c.id).map(k=>{const x=$o[k.pillar]||$o.Financial,T=!!k.gcal_event_id;return n.jsxs("div",{style:{...st.card,background:x.soft},children:[n.jsx("span",{style:{...st.cardBar,background:x.dot}}),n.jsxs("div",{style:st.cardBody,children:[n.jsx("div",{style:st.cardTitle,children:k.title}),k.start_datetime&&n.jsxs("div",{style:st.eventTime,children:[n.jsx(Oo,{size:10}),If(k.start_datetime),T&&n.jsx("span",{style:st.syncedDot,title:"Synced to Google Calendar"})]}),n.jsxs("div",{style:st.cardMeta,children:[n.jsxs("span",{style:st.metaPill,children:[n.jsx("span",{style:{...st.dot,background:x.dot,width:7,height:7}}),k.pillar]}),n.jsxs("span",{style:st.metaPill,children:[n.jsx(Km,{size:11})," ",j(k.time_estimate_min)]})]})]}),n.jsxs("div",{style:st.cardActions,children:[T&&n.jsx("span",{title:`On calendar as "${C(k)}"`,style:st.calDoneIcon,children:n.jsx(yt,{size:14})}),n.jsx("button",{onClick:()=>u(k.id,k.title),style:st.delBtn,children:n.jsx(pt,{size:13})})]})]},k.id)}),r===c.id?n.jsxs("div",{style:st.addBox,children:[n.jsx("input",{autoFocus:!0,placeholder:"Task title",value:s.title,onChange:k=>i({...s,title:k.target.value}),onKeyDown:k=>k.key==="Enter"&&b(c.id),style:st.input}),n.jsxs("div",{style:st.dateTimeRow,children:[n.jsxs("div",{style:st.dateTimeGroup,children:[n.jsx("label",{style:st.dtLabel,children:"Date"}),n.jsx("input",{type:"date",value:s.date,onChange:k=>i({...s,date:k.target.value}),style:st.dtInput})]}),n.jsxs("div",{style:st.dateTimeGroup,children:[n.jsx("label",{style:st.dtLabel,children:"Start"}),n.jsx("input",{type:"time",value:s.startTime,onChange:k=>i({...s,startTime:k.target.value}),style:st.dtInput})]}),n.jsxs("div",{style:st.dateTimeGroup,children:[n.jsx("label",{style:st.dtLabel,children:"End"}),n.jsx("div",{style:st.dtEndValue,children:Cf(s.startTime,Number(s.est)||30)})]})]}),n.jsxs("div",{style:st.addRow,children:[n.jsx("select",{value:s.pillar,onChange:k=>i({...s,pillar:k.target.value}),style:st.select,children:Object.keys($o).map(k=>n.jsx("option",{children:k},k))}),n.jsx("input",{type:"number",value:s.est,onChange:k=>i({...s,est:k.target.value}),style:{...st.input,width:60}}),n.jsx("span",{style:st.minLabel,children:"min"}),l.connected&&n.jsx("span",{style:st.gcalHint,title:"Will sync to Google Calendar",children:n.jsx(Oo,{size:12})}),n.jsx("button",{onClick:()=>b(c.id),style:st.saveBtn,children:n.jsx(yt,{size:14})}),n.jsx("button",{onClick:()=>{o(null),i(ji())},style:st.cancelBtn,children:n.jsx(pt,{size:14})})]})]}):n.jsxs("button",{onClick:()=>o(c.id),style:st.addTrigger,children:[n.jsx(ve,{size:13})," Add task"]})]})]},c.id))}),n.jsx(wn,{toasts:m,onUndo:v,onDismiss:p})]})}const st={page:{fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:16,marginBottom:22},headRight:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:10},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces', Georgia, serif"},legend:{display:"flex",gap:14,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--text-2)",fontWeight:500},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},gcalBadgeOn:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"#4C9A6B",background:"rgba(76,154,107,0.10)",border:"1px solid rgba(76,154,107,0.3)",borderRadius:20,padding:"5px 12px",cursor:"pointer"},gcalBadgeOff:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"var(--text-2)",background:"var(--surface)",border:"1px solid #DCDAD3",borderRadius:20,padding:"5px 12px",cursor:"pointer"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16},quad:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.06)"},quadHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14},quadTitleRow:{display:"flex",gap:10,alignItems:"center"},symbol:{fontSize:20,lineHeight:1},quadTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em"},quadSub:{fontSize:11,color:"var(--text-3)",marginTop:1,letterSpacing:"0.02em"},quadTotal:{fontSize:12,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"3px 9px",borderRadius:20},list:{display:"flex",flexDirection:"column",gap:8},card:{display:"flex",alignItems:"stretch",gap:10,borderRadius:9,padding:"10px 10px 10px 0",overflow:"hidden"},cardBar:{width:3,borderRadius:3,flexShrink:0},cardBody:{flex:1,minWidth:0},cardTitle:{fontSize:13.5,fontWeight:500,lineHeight:1.35,marginBottom:4},eventTime:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#3A7CA5",fontWeight:500,marginBottom:5},syncedDot:{width:6,height:6,borderRadius:"50%",background:"#4C9A6B",display:"inline-block",marginLeft:2},cardMeta:{display:"flex",gap:8,flexWrap:"wrap"},metaPill:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"var(--text-2)",fontWeight:500},cardActions:{display:"flex",flexDirection:"column",gap:4,alignSelf:"center",flexShrink:0},calDoneIcon:{width:30,height:30,borderRadius:8,background:"#4C9A6B",color:"#fff",display:"grid",placeItems:"center"},delBtn:{width:30,height:30,borderRadius:8,border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center"},addTrigger:{display:"flex",alignItems:"center",gap:5,fontSize:12.5,color:"var(--text-3)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"8px 10px",cursor:"pointer",fontWeight:500,marginTop:2},addBox:{border:"1px solid var(--border)",borderRadius:9,padding:10,display:"flex",flexDirection:"column",gap:8},dateTimeRow:{display:"flex",gap:8,alignItems:"flex-end"},dateTimeGroup:{display:"flex",flexDirection:"column",gap:3,flex:1},dtLabel:{fontSize:10,fontWeight:600,color:"var(--text-3)",letterSpacing:"0.08em",textTransform:"uppercase"},dtInput:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},dtEndValue:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,color:"var(--text-2)",background:"var(--bg)"},addRow:{display:"flex",alignItems:"center",gap:6},input:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",flex:1,minWidth:0},select:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 8px",fontSize:12.5,fontFamily:"inherit",flex:1},minLabel:{fontSize:11,color:"var(--text-3)"},gcalHint:{color:"#3A7CA5",display:"grid",placeItems:"center"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"}},Fe={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},ng=Object.keys(Fe),Ci=["Yearly","Quarterly","Monthly","Weekly"],jr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],og=[{label:"Q1 · Jan–Mar",startMonth:0},{label:"Q2 · Apr–Jun",startMonth:3},{label:"Q3 · Jul–Sep",startMonth:6},{label:"Q4 · Oct–Dec",startMonth:9}],_l=new Date().getFullYear(),Ho=864e5,Re=30,ds=190,An=t=>new Date(t+"T00:00:00"),sg=t=>t.toLocaleDateString("en-US",{month:"short",day:"numeric"}),Tf=[{key:"yearly",label:"Yearly",horizons:["Yearly"]},{key:"quarterly",label:"Quarterly",horizons:["Quarterly"]},{key:"mw",label:"Monthly & Weekly",horizons:["Monthly","Weekly"]}],Ef={Yearly:"Yr",Quarterly:"Q",Monthly:"Mo",Weekly:"Wk"},ig={Yearly:0,Quarterly:1,Monthly:2,Weekly:3},Ii=t=>Ci[Math.min(Ci.indexOf(t)+1,Ci.length-1)],Go=t=>{if(!t||!t.start_date)return Array.from({length:12},(i,l)=>l);const e=new Date(t.start_date+"T00:00:00"),r=new Date(t.end_date+"T00:00:00"),o=e.getFullYear()<_l?0:e.getMonth(),s=r.getFullYear()>_l?11:r.getMonth();return Array.from({length:s-o+1},(i,l)=>o+l)},Bf=(t,e,r)=>{const o=(r-1)*7+1,s=Math.min(o+6,new Date(t,e+1,0).getDate()),i=String(e+1).padStart(2,"0");return{start_date:`${t}-${i}-${String(o).padStart(2,"0")}`,end_date:`${t}-${i}-${String(s).padStart(2,"0")}`}},lg=(t,e,r=1)=>{const o=_l;switch(t){case"Yearly":return{start_date:`${o}-01-01`,end_date:`${o}-12-31`};case"Quarterly":{const s=Math.floor(e/3)*3,i=s+1,l=s+3,a=new Date(o,l,0).getDate();return{start_date:`${o}-${String(i).padStart(2,"0")}-01`,end_date:`${o}-${String(l).padStart(2,"0")}-${a}`}}case"Monthly":{const s=new Date(o,e+1,0).getDate();return{start_date:`${o}-${String(e+1).padStart(2,"0")}-01`,end_date:`${o}-${String(e+1).padStart(2,"0")}-${s}`}}case"Weekly":return Bf(o,e,r);default:return{start_date:`${o}-01-01`,end_date:`${o}-12-31`}}},Ff=t=>{if(!t.start_date)return"";const e=new Date(t.start_date+"T00:00:00"),r=e.getMonth();switch(t.horizon){case"Yearly":return`${e.getFullYear()}`;case"Quarterly":return`Q${Math.floor(r/3)+1} ${e.getFullYear()}`;case"Monthly":return`${jr[r]} ${e.getFullYear()}`;case"Weekly":return`${jr[r]} W${Math.ceil(e.getDate()/7)}`;default:return""}};function Af(){const[t,e]=y.useState([]),[r,o]=y.useState("Financial"),[s,i]=y.useState({}),[l,a]=y.useState({}),[d,g]=y.useState(null),[m,v]=y.useState(""),[p,S]=y.useState(0),[w,j]=y.useState(1),[C,b]=y.useState(null),u=y.useCallback(()=>{U.getGoals().then(e).catch(console.error)},[]);y.useEffect(()=>{u()},[u]);const{deleteItem:c,toasts:k,handleUndo:x,handleDismiss:T}=kn(U.deleteGoal,U.restoreGoal,u),R=r==="All",F=Fe[r]||{dot:"var(--text-3)"},E=R?t:t.filter(D=>D.pillar===r),W=E.filter(D=>!D.parent_goal_id),et=D=>E.filter(P=>P.parent_goal_id===D),M=D=>a(P=>({...P,[D]:!P[D]})),f=D=>D.horizon==="Monthly"||D.horizon==="Weekly",_=D=>s[D.id]!==void 0?s[D.id]:f(D),N=D=>i(P=>({...P,[D.id]:!_(D)})),H=(D,P=null)=>{g(D),v(""),j(1);const gt=D==="ROOT"?"Yearly":Ii(P==null?void 0:P.horizon),vt=D==="ROOT"?[0]:Go(P);S(gt==="Quarterly"?Math.floor(vt[0]/3)*3:vt[0]??0)},z=async(D,P)=>{if(!m.trim())return;const gt=(P==null?void 0:P.horizon)??null,vt=D==="ROOT"?"Yearly":Ii(gt),$t=D==="ROOT"?r:(P==null?void 0:P.pillar)||r,{start_date:xe,end_date:ft}=lg(vt,p,w);await U.createGoal({pillar:$t,title:m.trim(),horizon:vt,parent_goal_id:D==="ROOT"?null:D,start_date:xe,end_date:ft}),D!=="ROOT"&&a(Ne=>({...Ne,[D]:!0})),g(null),v(""),u()},B=D=>{const P=D.start_date?new Date(D.start_date+"T00:00:00"):new Date,gt=P.getMonth(),vt=Math.min(Math.max(Math.ceil(P.getDate()/7),1),4);b({id:D.id,title:D.title,pillar:D.pillar,horizon:D.horizon,parentGoal:t.find($t=>$t.id===D.parent_goal_id)||null,month:D.horizon==="Quarterly"?Math.floor(gt/3)*3:gt,week:vt})},V=async()=>{if(!C||!C.title.trim())return;let D=C.month;C.horizon==="Weekly"&&(D=Go(C.parentGoal)[0]);const{start_date:P,end_date:gt}=lg(C.horizon,D,C.week);await U.updateGoal(C.id,{title:C.title.trim(),pillar:C.pillar,start_date:P,end_date:gt}),b(null),u()},K=({parentId:D,parentGoal:P,depth:gt})=>{const vt=D==="ROOT"?"Yearly":Ii((P==null?void 0:P.horizon)??null),$t=D==="ROOT"?Array.from({length:12},(ft,Ne)=>Ne):Go(P),xe=og.filter(ft=>$t.includes(ft.startMonth));return n.jsxs("div",{style:{...Z.addBox,marginLeft:gt*24},children:[n.jsx("input",{autoFocus:!0,placeholder:`New ${vt.toLowerCase()} goal…`,value:m,onChange:ft=>v(ft.target.value),onKeyDown:ft=>{ft.key==="Enter"&&z(D,P),ft.key==="Escape"&&g(null)},style:Z.input}),vt==="Quarterly"&&n.jsx("select",{value:p,onChange:ft=>S(Number(ft.target.value)),style:Z.monthSelect,children:xe.map(ft=>n.jsx("option",{value:ft.startMonth,children:ft.label},ft.startMonth))}),vt==="Monthly"&&n.jsx("select",{value:p,onChange:ft=>S(Number(ft.target.value)),style:Z.monthSelect,children:$t.map(ft=>n.jsx("option",{value:ft,children:jr[ft]},ft))}),vt==="Weekly"&&n.jsxs(n.Fragment,{children:[n.jsx("span",{style:Z.inheritTag,children:jr[$t[0]]}),n.jsx("select",{value:w,onChange:ft=>j(Number(ft.target.value)),style:Z.monthSelect,children:[1,2,3,4].map(ft=>n.jsxs("option",{value:ft,children:["Week ",ft]},ft))})]}),n.jsx("button",{onClick:()=>z(D,P),style:Z.saveBtn,children:n.jsx(yt,{size:14})}),n.jsx("button",{onClick:()=>g(null),style:Z.cancelBtn,children:n.jsx(pt,{size:14})})]})},$=({goal:D,depth:P})=>{var ft,Ne,Sn,Ua;const gt=et(D.id),vt=l[D.id],$t=D.horizon!=="Weekly";if((C==null?void 0:C.id)===D.id){const tr=Go(C.parentGoal),mb=og.filter(wt=>tr.includes(wt.startMonth));return n.jsxs("div",{style:{...Z.editBox,marginLeft:P*24},children:[n.jsx("input",{autoFocus:!0,value:C.title,onChange:wt=>b({...C,title:wt.target.value}),onKeyDown:wt=>wt.key==="Enter"&&V(),style:{...Z.input,flex:1}}),n.jsx("select",{value:C.pillar,onChange:wt=>b({...C,pillar:wt.target.value}),style:Z.monthSelect,children:ng.map(wt=>n.jsx("option",{children:wt},wt))}),C.horizon==="Quarterly"&&n.jsx("select",{value:C.month,onChange:wt=>b({...C,month:Number(wt.target.value)}),style:Z.monthSelect,children:mb.map(wt=>n.jsx("option",{value:wt.startMonth,children:wt.label},wt.startMonth))}),C.horizon==="Monthly"&&n.jsx("select",{value:C.month,onChange:wt=>b({...C,month:Number(wt.target.value)}),style:Z.monthSelect,children:tr.map(wt=>n.jsx("option",{value:wt,children:jr[wt]},wt))}),C.horizon==="Weekly"&&n.jsxs(n.Fragment,{children:[n.jsx("span",{style:Z.inheritTag,children:jr[tr[0]]}),n.jsx("select",{value:C.week,onChange:wt=>b({...C,week:Number(wt.target.value)}),style:Z.monthSelect,children:[1,2,3,4].map(wt=>n.jsxs("option",{value:wt,children:["Week ",wt]},wt))})]}),n.jsx("button",{onClick:V,style:Z.saveBtn,children:n.jsx(yt,{size:14})}),n.jsx("button",{onClick:()=>b(null),style:Z.cancelBtn,children:n.jsx(pt,{size:14})})]})}return n.jsxs("div",{children:[n.jsxs("div",{style:{...Z.row,marginLeft:P*24,background:P===0&&((ft=Fe[D.pillar])==null?void 0:ft.soft)||"transparent"},children:[gt.length>0?n.jsx("button",{onClick:()=>M(D.id),style:Z.caret,children:vt?n.jsx(_a,{size:15}):n.jsx(Or,{size:15})}):n.jsx("span",{style:{...Z.caret,opacity:.25},children:n.jsx(Pa,{size:12})}),n.jsx("span",{style:{...Z.horizonTag,color:((Ne=Fe[D.pillar])==null?void 0:Ne.dot)||F.dot,borderColor:((Sn=Fe[D.pillar])==null?void 0:Sn.dot)||F.dot},children:D.horizon}),n.jsx("span",{style:Z.title,children:D.title}),n.jsx("span",{style:Z.periodTag,children:Ff(D)}),n.jsx("button",{onClick:()=>N(D),style:{...Z.rowAdd,color:_(D)?((Ua=Fe[D.pillar])==null?void 0:Ua.dot)||F.dot:"var(--text-3)"},title:_(D)?"Showing on timeline — click to hide":"Hidden from timeline — click to show",children:_(D)?n.jsx(Rl,{size:13}):n.jsx(Xu,{size:13})}),n.jsx("button",{onClick:()=>B(D),style:Z.rowAdd,title:"Edit",children:n.jsx(Te,{size:12})}),$t&&n.jsx("button",{onClick:()=>{a(tr=>({...tr,[D.id]:!0})),H(D.id,D)},style:Z.rowAdd,title:"Add sub-goal",children:n.jsx(ve,{size:13})}),n.jsx("button",{onClick:()=>c(D.id,D.title),style:{...Z.rowAdd,color:"var(--text-3)"},title:"Delete",children:n.jsx(pt,{size:13})})]}),vt&&gt.map(tr=>n.jsx($,{goal:tr,depth:P+1},tr.id)),vt&&d===D.id&&n.jsx(K,{parentId:D.id,parentGoal:D,depth:P+1})]})},nt=t.filter(D=>_(D)&&D.start_date&&D.end_date),h=Tf.map(D=>({...D,items:nt.filter(P=>D.horizons.includes(P.horizon)).sort((P,gt)=>P.pillar.localeCompare(gt.pillar)||P.start_date.localeCompare(gt.start_date)||ig[P.horizon]-ig[gt.horizon]||P.end_date.localeCompare(gt.end_date))})).filter(D=>D.items.length>0),L=(()=>{if(!nt.length)return null;let D=nt[0].start_date,P=nt[0].end_date;return nt.forEach(gt=>{gt.start_date<D&&(D=gt.start_date),gt.end_date>P&&(P=gt.end_date)}),{start:An(D),end:An(P)}})(),lt=(()=>{if(!L)return[];const D=[];for(let P=L.start.getTime();P<=L.end.getTime();P+=Ho)D.push(new Date(P));return D})(),it=lt.length,mt=(()=>{const D=[];return lt.forEach(P=>{const gt=`${P.getFullYear()}-${P.getMonth()}`,vt=D[D.length-1];vt&&vt.key===gt?vt.days++:D.push({key:gt,label:`${jr[P.getMonth()]} '${String(P.getFullYear()).slice(2)}`,days:1})}),D})(),Tt=new Date;Tt.setHours(0,0,0,0);const ct=L?Math.round((Tt-L.start)/Ho):-1,Ct=ct>=0&&ct<it,ye=D=>Math.round((An(D.end_date)-An(D.start_date))/Ho)+1;return n.jsxs("div",{style:Z.page,children:[n.jsxs("div",{style:Z.head,children:[n.jsx("div",{style:Z.eyebrow,children:"Anvil · Goals"}),n.jsx("h1",{style:Z.h1,children:R?"All Goals":`${r} Goals`})]}),n.jsxs("div",{style:Z.pillarPicker,children:[n.jsx("button",{onClick:()=>{o("All"),g(null),b(null)},style:{...Z.pillarChip,...R?{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:"All Goals"}),ng.map(D=>{const P=D===r;return n.jsxs("button",{onClick:()=>{o(D),g(null),b(null)},style:{...Z.pillarChip,...P?{background:Fe[D].dot,color:"#fff",borderColor:Fe[D].dot}:{}},children:[n.jsx("span",{style:{...Z.dot,background:P?"#fff":Fe[D].dot}}),D]},D)})]}),n.jsxs("div",{style:Z.list,children:[W.map(D=>n.jsx($,{goal:D,depth:0},D.id)),W.length===0&&n.jsxs("div",{style:Z.ganttEmpty,children:["No goals yet",R?"":` for ${r}`,"."]}),!R&&d==="ROOT"&&n.jsx(K,{parentId:"ROOT",parentGoal:null,depth:0}),!R&&d!=="ROOT"&&n.jsxs("button",{onClick:()=>H("ROOT",null),style:Z.rootAdd,children:[n.jsx(ve,{size:14})," Add top-level goal"]}),R&&n.jsx("div",{style:Z.allHint,children:"Pick a pillar above to add new goals."})]}),n.jsxs("div",{style:Z.ganttWrap,children:[n.jsxs("div",{style:Z.ganttTop,children:[n.jsxs("div",{style:Z.ganttTitle,children:["Daily Timeline",L?` · ${sg(L.start)} – ${sg(L.end)}`:""]}),n.jsxs("div",{style:Z.ganttHint,children:["Toggle the ",n.jsx(Rl,{size:12,style:{verticalAlign:"-2px"}})," on any goal to show or hide it here."]})]}),L?n.jsx("div",{style:Z.ganttScroll,children:n.jsxs("div",{style:{minWidth:ds+it*Re},children:[n.jsxs("div",{style:Z.gBandRow,children:[n.jsx("div",{style:{...Z.gLabelHead,zIndex:4},children:"Goal"}),n.jsx("div",{style:{display:"flex"},children:mt.map((D,P)=>n.jsx("div",{style:{...Z.gMonthCell,width:D.days*Re},children:D.label},P))})]}),n.jsxs("div",{style:Z.gBandRow,children:[n.jsx("div",{style:{...Z.gLabelHead,zIndex:4,fontSize:10,color:"var(--text-3)",fontWeight:600},children:"days →"}),n.jsx("div",{style:{display:"flex"},children:lt.map((D,P)=>{const gt=D.getDay()===0||D.getDay()===6,vt=P===ct;return n.jsx("div",{style:{...Z.gDayCell,...gt?Z.gWeekend:{},...vt?Z.gTodayCell:{}},children:D.getDate()},P)})})]}),h.map(D=>n.jsxs("div",{children:[n.jsxs("div",{style:Z.gGroupRow,children:[n.jsxs("div",{style:Z.gGroupLabel,children:[D.label,n.jsx("span",{style:Z.gGroupCount,children:D.items.length})]}),n.jsx("div",{style:{width:it*Re,flexShrink:0}})]}),D.items.map(P=>{var Sn;const gt=((Sn=Fe[P.pillar])==null?void 0:Sn.dot)||"#9A968C",vt=Math.round((An(P.start_date)-L.start)/Ho),$t=ye(P),xe=$t*Re-4,ft=xe>=54,Ne=`${P.title} · ${P.start_date} → ${P.end_date} · ${$t} day${$t>1?"s":""}`;return n.jsxs("div",{style:Z.gRow,children:[n.jsxs("div",{style:{...Z.gLabel,paddingLeft:12},children:[n.jsx("span",{style:{...Z.ganttRowDot,background:gt}}),n.jsx("span",{style:{...Z.gHzTag,color:gt,borderColor:gt},children:Ef[P.horizon]}),n.jsx("span",{style:Z.gLabelText,title:P.title,children:P.title}),n.jsxs("span",{style:Z.gDurChip,children:[$t,"d"]})]}),n.jsxs("div",{style:{...Z.gTrack,width:it*Re},children:[Ct&&n.jsx("div",{style:{...Z.gTodayLine,left:ct*Re}}),n.jsx("div",{style:{...Z.gBar,left:vt*Re+2,width:xe,background:gt},title:Ne,children:ft&&n.jsx("span",{style:Z.gBarLabel,children:P.title})}),!ft&&n.jsx("span",{style:{...Z.gBarOutside,left:vt*Re+xe+8},title:Ne,children:P.title})]})]},P.id)})]},D.key))]})}):n.jsx("div",{style:Z.ganttEmpty,children:"No goals on the timeline. Click the eye icon on a goal to show it here."}),L&&n.jsxs("div",{style:Z.gLegend,children:[n.jsxs("span",{style:Z.gLegendItem,children:[n.jsx("span",{style:{...Z.gLegendBar}})," bar length = number of days"]}),n.jsxs("span",{style:Z.gLegendItem,children:[n.jsx("span",{style:Z.gLegendToday})," today"]})]})]}),n.jsx(wn,{toasts:k,onUndo:x,onDismiss:T})]})}const Z={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},pillarPicker:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},pillarChip:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},list:{background:"var(--surface)",borderRadius:12,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"hidden"},row:{display:"flex",alignItems:"center",gap:9,padding:"9px 10px",borderRadius:8,flexWrap:"nowrap"},caret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},horizonTag:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",border:"1px solid",borderRadius:5,padding:"2px 6px",flexShrink:0},title:{fontSize:14,fontWeight:500,lineHeight:1.3,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},periodTag:{fontSize:11,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"3px 8px",borderRadius:12,flexShrink:0},rowAdd:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,flexShrink:0},rootAdd:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"var(--text-2)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"9px 12px",cursor:"pointer",fontWeight:600,fontFamily:"inherit",marginTop:6,width:"100%",justifyContent:"center"},addBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 0 6px 28px",flexWrap:"wrap"},editBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 10px",flexWrap:"wrap",background:"var(--bg)",borderRadius:8,margin:"4px 0"},input:{border:"1px solid var(--border)",borderRadius:7,padding:"8px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",flex:1,minWidth:120},monthSelect:{border:"1px solid var(--border)",borderRadius:7,padding:"8px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},inheritTag:{fontSize:11.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"6px 9px",borderRadius:7,flexShrink:0},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},ganttWrap:{background:"var(--surface)",borderRadius:12,padding:"16px 14px",marginTop:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},ganttTop:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10,marginBottom:14},ganttTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",fontFamily:"'Fraunces',Georgia,serif"},ganttHint:{fontSize:11.5,color:"var(--text-3)",fontWeight:500},allHint:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",padding:"10px 12px"},ganttEmpty:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},ganttScroll:{overflowX:"auto"},ganttRowDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},gBandRow:{display:"flex",alignItems:"stretch",borderBottom:"1px solid var(--border)"},gLabelHead:{width:ds,flexShrink:0,position:"sticky",left:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",padding:"6px 10px",fontSize:12,fontWeight:700,color:"var(--text-2)"},gMonthCell:{flexShrink:0,borderLeft:"1px solid var(--border)",fontSize:10.5,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gDayCell:{width:Re,flexShrink:0,textAlign:"center",fontSize:10,color:"var(--text-3)",padding:"4px 0",borderLeft:"1px solid var(--border)",fontWeight:600},gWeekend:{background:"var(--surface-2)"},gTodayCell:{background:"var(--hover)",color:"var(--accent)",fontWeight:800},gGroupRow:{display:"flex",alignItems:"stretch",background:"var(--surface-2)",borderBottom:"1px solid var(--border)",borderTop:"1px solid var(--border)"},gGroupLabel:{width:ds,flexShrink:0,position:"sticky",left:0,background:"var(--surface-2)",zIndex:3,padding:"6px 12px",fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",gap:7},gGroupCount:{fontSize:10,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},gHzTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.04em",border:"1px solid",borderRadius:4,padding:"1px 4px",flexShrink:0},gRow:{display:"flex",alignItems:"stretch",minHeight:36,borderBottom:"1px solid var(--border)"},gLabel:{width:ds,flexShrink:0,display:"flex",alignItems:"center",gap:7,position:"sticky",left:0,background:"var(--surface)",zIndex:2,borderRight:"1px solid var(--border)",paddingRight:8,overflow:"hidden"},gLabelText:{flex:1,minWidth:0,fontSize:12,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},gDurChip:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",borderRadius:10,padding:"1px 6px",flexShrink:0,marginRight:6},gTrack:{position:"relative",flexShrink:0,minHeight:36,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent ${Re}px)`},gBar:{position:"absolute",top:9,height:18,borderRadius:5,display:"flex",alignItems:"center",padding:"0 7px",boxShadow:"0 1px 2px rgba(0,0,0,0.15)",overflow:"hidden",zIndex:1},gBarLabel:{fontSize:11,fontWeight:600,color:"#fff",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},gBarOutside:{position:"absolute",top:9,height:18,display:"flex",alignItems:"center",fontSize:11,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",pointerEvents:"none",zIndex:1},gTodayLine:{position:"absolute",top:0,bottom:0,width:2,background:"#C2536B",zIndex:0,opacity:.6},gLegend:{display:"flex",gap:16,marginTop:12,fontSize:11,color:"var(--text-3)",flexWrap:"wrap"},gLegendItem:{display:"flex",alignItems:"center",gap:6,fontWeight:600},gLegendBar:{width:18,height:8,borderRadius:3,background:"var(--accent)",display:"inline-block"},gLegendToday:{width:2,height:12,background:"#C2536B",display:"inline-block"}},Lr={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.12)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.12)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.12)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.12)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.12)"}},ib=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Df=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],$a=t=>t.toISOString().slice(0,10),Rf=()=>$a(new Date),Wf=(t=0)=>{const e=new Date,r=e.getDay(),o=r===0?-6:1-r,s=new Date(e);return s.setDate(e.getDate()+o+t*7),Array.from({length:7},(i,l)=>{const a=new Date(s);return a.setDate(s.getDate()+l),$a(a)})},Mf=(t=0)=>{const e=new Date,r=new Date(e.getFullYear(),e.getMonth()+t,1),o=r.getFullYear(),s=r.getMonth(),i=new Date(o,s+1,0).getDate(),l=r.getDay(),a=l===0?6:l-1,d=Array.from({length:i},(m,v)=>`${o}-${String(s+1).padStart(2,"0")}-${String(v+1).padStart(2,"0")}`),g=r.toLocaleDateString("en-US",{month:"long",year:"numeric"});return{dates:d,startOffset:a,label:g,year:o,month:s}},ag=t=>new Date(t+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"}),Cr=Rf(),_f=new Date().getFullYear();function Lf(){var $,nt;const[t,e]=y.useState([]),[r,o]=y.useState("ALL"),[s,i]=y.useState(!1),[l,a]=y.useState(!1),[d,g]=y.useState(!1),[m,v]=y.useState(null),[p,S]=y.useState(null),[w,j]=y.useState({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week"}),[C,b]=y.useState(!1),[u,c]=y.useState([]),k=y.useCallback(()=>U.getHabits().then(e).catch(console.error),[]);y.useEffect(()=>{k()},[k]),y.useEffect(()=>{U.getSetting("habit_order").then(h=>{Array.isArray(h==null?void 0:h.value)&&c(h.value)}).catch(()=>{})},[]);const x=y.useMemo(()=>u.length?[...t].sort((h,L)=>{const lt=u.indexOf(h.id),it=u.indexOf(L.id);return lt===-1&&it===-1?0:lt===-1?1:it===-1?-1:lt-it}):t,[t,u]),T=async h=>{c(h),await U.setSetting("habit_order",h),b(!1)};y.useEffect(()=>{const h=()=>{const L=window.innerWidth<720;i(L),L||a(!1)};return h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]);const{deleteItem:R,toasts:F,handleUndo:E,handleDismiss:W}=kn(U.deleteHabit,U.restoreHabit,k),et=h=>{o(h),s&&a(!1)},M=(h,L)=>{(h.type==="minimum"||h.type==="maximum")&&h.period==="day"?S({habit:h,date:L}):f(h.id,L)},f=async(h,L)=>{await U.toggleHabitLog(h,L),k()},_=async(h,L,lt,it)=>{await U.setHabitLogCount(h,L,lt,it),S(null),k()},N=async(h,L)=>{await U.clearHabitLog(h,L),S(null),k()},H=async()=>{if(!w.name.trim())return;const h={name:w.name.trim(),pillar:w.pillar,target_per_week:Number(w.target_per_week)||7,type:w.type,target_count:w.type!=="regular"?Number(w.target_count)||1:null,period:w.type!=="regular"?w.period:null};await U.createHabit(h),j({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week"}),g(!1),k()},z=async(h,L)=>{r===h&&o("ALL"),R(h,L)},B=t.find(h=>h.id===r),V=h=>new Set(h.logs||[]),K={...A.sidebar,...s?A.sidebarOverlay:{},...s&&!l?A.sidebarHidden:{}};return n.jsxs("div",{style:A.shell,children:[s&&l&&n.jsx("div",{style:A.backdrop,onClick:()=>a(!1)}),n.jsxs("aside",{style:K,children:[n.jsxs("div",{style:A.sideTop,children:[n.jsx("div",{style:A.brand,children:"Anvil · Habits"}),s&&n.jsx("button",{onClick:()=>a(!1),style:A.closeBtn,children:n.jsx(pt,{size:18})})]}),n.jsxs("div",{style:{...A.sideItem,...r==="ALL"?A.sideItemOn:{},cursor:"default",padding:"2px 6px 2px 10px"},children:[n.jsxs("button",{onClick:()=>et("ALL"),style:{display:"flex",alignItems:"center",gap:9,flex:1,border:"none",background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:r==="ALL"?600:500,color:"var(--text-2)",padding:"7px 0"},children:[n.jsx(tb,{size:15}),n.jsx("span",{style:A.sideLabel,children:"All Habits"}),n.jsx("span",{style:A.sideCount,children:t.length})]}),n.jsx("button",{onClick:h=>{h.stopPropagation(),b(!0)},style:A.tinyBtn,title:"Reorder habits",children:n.jsx(Te,{size:12})})]}),n.jsx("div",{style:A.sideDivider}),x.map(h=>{var it;const L=r===h.id,lt=((it=Lr[h.pillar])==null?void 0:it.dot)||"#9A968C";return n.jsxs("button",{onClick:()=>et(h.id),style:{...A.sideItem,...L?A.sideItemOn:{}},children:[n.jsx("span",{style:{...A.sideDot,background:lt}}),n.jsx("span",{style:A.sideLabel,children:h.name}),n.jsxs("span",{style:A.sideStreak,children:[n.jsx(xn,{size:11})," ",h.streak]})]},h.id)}),d?n.jsx(Pf,{habit:w,onChange:j,onSave:H,onCancel:()=>g(!1)}):n.jsxs("button",{onClick:()=>g(!0),style:A.sideNewBtn,children:[n.jsx(ve,{size:13})," New habit"]})]}),n.jsxs("main",{style:A.main,children:[s&&n.jsxs("button",{onClick:()=>a(!0),style:A.hamburger,children:[n.jsx(La,{size:18}),n.jsx("span",{style:A.hamburgerLabel,children:r==="ALL"?"All Habits":B==null?void 0:B.name})]}),r==="ALL"?n.jsx($f,{habits:x,dayAction:M,logSet:V,onDelete:z,onEdit:h=>v(h)}):n.jsx(Hf,{habit:B,dayAction:M,logSet:V,onDelete:()=>z(B.id,B.name),onEdit:()=>v(B),setNote:(h,L)=>U.setHabitLogNote(B.id,h,L).then(k)}),r==="ALL"&&n.jsx(Vf,{year:_f})]}),C&&n.jsx(Uf,{habits:x,onSave:T,onClose:()=>b(!1)}),m&&n.jsx(Nf,{habit:m,onSave:async h=>{await U.updateHabit(m.id,h),v(null),k()},onClose:()=>v(null)}),p&&n.jsx(Of,{habit:p.habit,date:p.date,initialCount:(($=p.habit.log_counts)==null?void 0:$[p.date])??0,initialNote:((nt=p.habit.log_notes)==null?void 0:nt[p.date])??"",onSave:(h,L)=>_(p.habit.id,p.date,h,L),onClear:()=>N(p.habit.id,p.date),onClose:()=>S(null)}),n.jsx(wn,{toasts:F,onUndo:E,onDismiss:W})]})}function Pf({habit:t,onChange:e,onSave:r,onCancel:o}){const s=t.type!=="regular";return n.jsxs("div",{style:A.addBox,children:[n.jsx("input",{autoFocus:!0,placeholder:"Habit name",value:t.name,onChange:i=>e(l=>({...l,name:i.target.value})),onKeyDown:i=>i.key==="Enter"&&r(),style:A.sideInput}),n.jsx("select",{value:t.pillar,onChange:i=>e(l=>({...l,pillar:i.target.value})),style:A.sideInput,children:Object.keys(Lr).map(i=>n.jsx("option",{children:i},i))}),n.jsxs("select",{value:t.type,onChange:i=>e(l=>({...l,type:i.target.value})),style:A.sideInput,children:[n.jsx("option",{value:"regular",children:"Regular (yes/no)"}),n.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),n.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),s&&n.jsxs("div",{style:{display:"flex",gap:6},children:[n.jsx("input",{type:"number",min:1,placeholder:"N",value:t.target_count||"",onChange:i=>e(l=>({...l,target_count:i.target.value})),style:{...A.sideInput,width:60}}),n.jsx("select",{value:t.period,onChange:i=>e(l=>({...l,period:i.target.value})),style:A.sideInput,children:["day","week","month","year"].map(i=>n.jsx("option",{children:i},i))})]}),n.jsxs("div",{style:{display:"flex",gap:6},children:[n.jsx("button",{onClick:r,style:A.sideAddBtn,children:n.jsx(yt,{size:13})}),n.jsx("button",{onClick:o,style:A.sideCancelBtn,children:n.jsx(pt,{size:13})})]})]})}function Nf({habit:t,onSave:e,onClose:r}){const[o,s]=y.useState(t.name),[i,l]=y.useState(t.type||"regular"),[a,d]=y.useState(t.target_count||""),[g,m]=y.useState(t.period||"week"),[v,p]=y.useState(t.reminder_time||""),S=()=>e({name:o.trim(),type:i,target_count:i!=="regular"?Number(a):null,period:i!=="regular"?g:null,reminder_time:v||null});return n.jsx("div",{style:A.modalOverlay,onClick:r,children:n.jsxs("div",{style:A.modal,onClick:w=>w.stopPropagation(),children:[n.jsxs("div",{style:A.modalHead,children:["Edit Habit",n.jsx("button",{onClick:r,style:A.closeBtn,children:n.jsx(pt,{size:16})})]}),n.jsx("label",{style:A.modalLabel,children:"Name"}),n.jsx("input",{value:o,onChange:w=>s(w.target.value),style:A.sideInput}),n.jsx("label",{style:A.modalLabel,children:"Type"}),n.jsxs("select",{value:i,onChange:w=>l(w.target.value),style:A.sideInput,children:[n.jsx("option",{value:"regular",children:"Regular (yes/no)"}),n.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),n.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),i!=="regular"&&n.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[n.jsx("input",{type:"number",min:1,value:a,onChange:w=>d(w.target.value),style:{...A.sideInput,width:70}}),n.jsx("select",{value:g,onChange:w=>m(w.target.value),style:A.sideInput,children:["day","week","month","year"].map(w=>n.jsx("option",{children:w},w))})]}),n.jsx("label",{style:A.modalLabel,children:"Reminder time"}),n.jsx("input",{type:"time",value:v,onChange:w=>p(w.target.value),style:A.sideInput}),n.jsx("button",{onClick:S,style:{...A.sideAddBtn,width:"100%",marginTop:10,height:36},children:"Save"})]})})}function Of({habit:t,date:e,initialCount:r,initialNote:o,onSave:s,onClear:i,onClose:l}){const[a,d]=y.useState(r??0),[g,m]=y.useState(o??""),v=t.target_count,p=t.type==="minimum"?a>=v:a>0&&a<=v,S=t.type==="maximum"&&a>v,w=p?"#4C9A6B":S?"#C2536B":"#C2773B",j=p?"✓ Goal met":S?"Over the limit":"Not met yet";return n.jsx("div",{style:A.modalOverlay,onClick:l,children:n.jsxs("div",{style:A.modal,onClick:C=>C.stopPropagation(),children:[n.jsxs("div",{style:A.modalHead,children:[t.name,n.jsx("button",{onClick:l,style:A.closeBtn,children:n.jsx(pt,{size:16})})]}),n.jsxs("div",{style:{fontSize:12,color:"var(--text-3)",marginBottom:2},children:[e," · ",t.type==="minimum"?`at least ${v}`:`no more than ${v}`," / ",t.period]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:20,margin:"14px 0 6px"},children:[n.jsx("button",{onClick:()=>d(C=>Math.max(0,C-1)),style:A.counterBtn,children:"−"}),n.jsx("span",{style:{fontSize:38,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:52,textAlign:"center",color:w},children:a}),n.jsx("button",{onClick:()=>d(C=>C+1),style:A.counterBtn,children:"+"})]}),n.jsx("div",{style:{textAlign:"center",fontSize:12.5,fontWeight:700,color:w,marginBottom:12},children:j}),n.jsx("textarea",{value:g,onChange:C=>m(C.target.value),placeholder:"Add a comment (optional)…",style:{...A.sideInput,minHeight:56,resize:"vertical"}}),n.jsxs("div",{style:{display:"flex",gap:8,marginTop:10},children:[n.jsxs("button",{onClick:i,style:{...A.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[n.jsx(pt,{size:14})," Delete"]}),n.jsxs("button",{onClick:()=>s(a,g),style:{...A.sideAddBtn,flex:1,justifyContent:"center",height:38},children:[n.jsx(yt,{size:14})," Set"]})]})]})})}function $f({habits:t,dayAction:e,logSet:r,onDelete:o,onEdit:s}){const[i,l]=y.useState(0),a=Wf(i),d=`${ag(a[0])} – ${ag(a[6])}${i===0?" · This week":""}`;return n.jsxs("div",{children:[n.jsxs("div",{style:A.mainHead,children:[n.jsx("div",{style:A.eyebrow,children:"Weekly view"}),n.jsx("h1",{style:A.h1,children:"All Habits"})]}),n.jsxs("div",{style:A.navBar,children:[n.jsx("button",{onClick:()=>l(g=>g-1),style:A.navBtn,children:n.jsx(yn,{size:16})}),n.jsx("span",{style:A.navLabel,children:d}),n.jsx("button",{onClick:()=>l(g=>Math.min(0,g+1)),disabled:i>=0,style:{...A.navBtn,...i>=0?A.navBtnDisabled:{}},children:n.jsx(Or,{size:16})})]}),n.jsxs("div",{style:A.weekCard,children:[n.jsxs("div",{style:A.weekHeadRow,children:[n.jsx("div",{style:A.weekNameCol}),ib.map((g,m)=>n.jsxs("div",{style:A.weekDayHead,children:[n.jsx("span",{style:A.weekDayName,children:g}),n.jsx("span",{style:{...A.weekDayNum,...a[m]===Cr?A.weekDayToday:{}},children:new Date(a[m]+"T00:00").getDate()})]},g)),n.jsx("div",{style:A.weekStreakCol,children:"Streak"})]}),t.map(g=>{var T,R;const m=((T=Lr[g.pillar])==null?void 0:T.dot)||"#9A968C",v=((R=Lr[g.pillar])==null?void 0:R.soft)||"rgba(0,0,0,0.05)",p=r(g),S=g.type==="minimum"&&["week","month","year"].includes(g.period),w=g.target_count||0,j=g.logs||[],C=F=>j.filter(E=>E.slice(0,7)===F).length,b=F=>j.filter(E=>E.slice(0,4)===F).length,u=a.filter(F=>p.has(F)).length,c=F=>S?g.period==="week"?u>=w:g.period==="month"?C(F.slice(0,7))>=w:g.period==="year"?b(F.slice(0,4))>=w:!1:!1,k=S&&a.some(c),x=g.period==="week"?u:g.period==="month"?C(a[0].slice(0,7)):g.period==="year"?b(a[0].slice(0,4)):0;return n.jsxs("div",{style:A.weekRow,children:[n.jsxs("div",{style:{...A.weekNameCol,flexDirection:"column",alignItems:"flex-start",gap:2},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx("span",{style:{...A.sideDot,background:m}}),n.jsx("span",{style:A.weekHabitName,children:g.name})]}),g.type!=="regular"&&n.jsx("span",{style:A.typeBadge,children:g.type==="minimum"?`≥${g.target_count}/${g.period}`:`≤${g.target_count}/${g.period}`})]}),a.map((F,E)=>{var K,$;const W=p.has(F),et=F>Cr,M=(g.type==="minimum"||g.type==="maximum")&&g.period==="day",f=(K=g.log_counts)==null?void 0:K[F],_=f!=null,N=!!(($=g.log_notes)!=null&&$[F]),H=c(F),z=E>0&&c(a[E-1]),B=E<a.length-1&&c(a[E+1]),V=W||H;return n.jsxs("div",{style:{...A.weekCell,position:"relative"},children:[H&&n.jsx("span",{style:{...A.chainLine,background:m,left:z?0:"50%",right:B?0:"50%"}}),n.jsx("button",{disabled:et,onClick:()=>e(g,F),style:{...A.tick,position:"relative",zIndex:1,...V?{background:m,borderColor:m,color:"#fff"}:{},...M&&_&&!W?{borderColor:m,color:m}:{},...et&&!V?A.tickFuture:{}},children:M?_?n.jsx("span",{style:{fontSize:12,fontWeight:700},children:f}):null:W&&n.jsx(yt,{size:14,color:"#fff",strokeWidth:3})}),N&&n.jsx("span",{style:A.cellNoteBubble})]},F)}),n.jsx("div",{style:A.weekStreakCol,children:k?n.jsxs("span",{style:{...A.streakPill,background:v,color:m},children:[n.jsx(Wl,{size:12})," ",x,"/",w]}):n.jsxs("span",{style:{...A.streakPill,background:v,color:m},children:[n.jsx(xn,{size:12})," ",g.streak]})})]},g.id)}),t.length===0&&n.jsx("div",{style:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},children:"No habits yet — add one from the sidebar."})]})]})}function Hf({habit:t,dayAction:e,logSet:r,onDelete:o,onEdit:s,setNote:i}){var $,nt;const[l,a]=y.useState(null),[d,g]=y.useState(""),[m,v]=y.useState(null),[p,S]=y.useState(0),w=y.useRef(null);if(!t)return null;const j=(($=Lr[t.pillar])==null?void 0:$.dot)||"#9A968C",C=((nt=Lr[t.pillar])==null?void 0:nt.soft)||"rgba(0,0,0,0.05)",b=r(t),{dates:u,startOffset:c,label:k,year:x}=Mf(p),T=u.filter(h=>h<=Cr&&b.has(h)).length,R=u.filter(h=>h<=Cr).length,F=R>0?Math.round(T/R*100):0,E=t.type==="minimum"&&(t.period==="month"||t.period==="year"),W=t.period==="year"?(t.logs||[]).filter(h=>h.startsWith(`${x}-`)).length:u.filter(h=>b.has(h)).length,et=E&&W>=(t.target_count||0),M=t.type==="minimum"&&t.period==="week",f=t.target_count||0,_=h=>{const L=new Date(h+"T00:00"),lt=L.getDay(),it=new Date(L);it.setDate(L.getDate()+(lt===0?-6:1-lt));let mt=0;for(let Tt=0;Tt<7;Tt++){const ct=new Date(it);ct.setDate(it.getDate()+Tt),b.has($a(ct))&&mt++}return mt},N=h=>E?et:M?_(h)>=f:!1,H=M?_(Cr):0,z=M&&H>=f,B=h=>{w.current=setTimeout(()=>a(h),500)},V=()=>clearTimeout(w.current),K=h=>{var L;v(h),g(((L=t.log_notes)==null?void 0:L[h])||""),a(null)};return n.jsxs("div",{children:[n.jsxs("div",{style:A.mainHead,children:[n.jsxs("div",{children:[n.jsxs("div",{style:A.eyebrow,children:[n.jsx("span",{style:{...A.sideDot,background:j,marginRight:6}}),t.pillar," · Monthly view"]}),n.jsx("h1",{style:A.h1,children:t.name})]}),n.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[n.jsxs("button",{onClick:s,style:A.actionBtn,children:[n.jsx(Te,{size:14})," Edit"]}),n.jsxs("button",{onClick:o,style:{...A.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[n.jsx(pt,{size:14})," Delete"]}),t.reminder_time&&n.jsxs("button",{style:A.actionBtn,children:[n.jsx(Qu,{size:14})," ",t.reminder_time]})]})]}),n.jsxs("div",{style:A.statStrip,children:[n.jsx(Dn,{label:"Current streak",value:`${t.streak} days`,c:j,soft:C,flame:!0}),n.jsx(Dn,{label:"Done this month",value:`${T}/${R}`,c:j,soft:C}),n.jsx(Dn,{label:"Completion",value:`${F}%`,c:j,soft:C}),t.type==="regular"?n.jsx(Dn,{label:"Weekly target",value:`${t.target_per_week}×`,c:j,soft:C}):n.jsx(Dn,{label:t.type==="minimum"?"Min target":"Max allowed",value:`${t.target_count}/${t.period}`,c:j,soft:C})]}),n.jsxs("div",{style:A.navBar,children:[n.jsx("button",{onClick:()=>S(h=>h-1),style:A.navBtn,children:n.jsx(yn,{size:16})}),n.jsxs("span",{style:A.navLabel,children:[k,p===0?" · This month":""]}),n.jsx("button",{onClick:()=>S(h=>Math.min(0,h+1)),disabled:p>=0,style:{...A.navBtn,...p>=0?A.navBtnDisabled:{}},children:n.jsx(Or,{size:16})})]}),E&&n.jsxs("div",{style:{...A.chainBanner,background:et?C:"var(--bg)",color:et?j:"var(--text-3)"},children:[n.jsx(Wl,{size:15}),et?`${t.period==="year"?"Yearly":"Monthly"} chain complete — ${W}/${t.target_count} connected`:`${W}/${t.target_count} this ${t.period} · ${(t.target_count||0)-W} more to connect the chain`]}),M&&p===0&&n.jsxs("div",{style:{...A.chainBanner,background:z?C:"var(--bg)",color:z?j:"var(--text-3)"},children:[n.jsx(Wl,{size:15}),z?`This week's chain complete — ${H}/${f} connected`:`${H}/${f} this week · ${Math.max(0,f-H)} more to connect the chain`]}),n.jsxs("div",{style:A.monthCard,children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[n.jsx("div",{style:A.monthTitle,children:k}),n.jsx("span",{style:{fontSize:11,color:"var(--text-3)"},children:"Long-press a day for options"})]}),n.jsx("div",{style:A.monthDow,children:ib.map(h=>n.jsx("div",{style:A.monthDowCell,children:h},h))}),n.jsxs("div",{style:A.monthGrid,children:[Array.from({length:c}).map((h,L)=>n.jsx("div",{},`pad${L}`)),u.map((h,L)=>{var $t,xe;const lt=L+1,it=b.has(h),mt=h>Cr,Tt=h===Cr,ct=!!(($t=t.log_notes)!=null&&$t[h]),Ct=(t.type==="minimum"||t.type==="maximum")&&t.period==="day",ye=(xe=t.log_counts)==null?void 0:xe[h],D=ye!=null,P=N(h),gt=it||P,vt=(c+L)%7;return n.jsxs("div",{style:{position:"relative"},children:[P&&n.jsx("span",{style:{...A.chainLine,background:j,...vt===0?{left:"50%"}:{left:-6},...vt===6?{right:"50%"}:{right:-6}}}),n.jsx("button",{disabled:mt,onClick:()=>e(t,h),onMouseDown:()=>!Ct&&B(h),onMouseUp:V,onTouchStart:()=>!Ct&&B(h),onTouchEnd:V,style:{...A.monthDay,position:"relative",zIndex:1,...gt?{background:j,borderColor:j,color:"#fff"}:{},...Ct&&D&&!it?{borderColor:j,color:j}:{},...mt&&!gt?A.monthDayFuture:{},...Tt&&!gt?{borderColor:j,borderWidth:2}:{},width:"100%"},children:lt}),Ct&&D&&n.jsx("span",{style:{...A.countBadge,background:it?"#4C9A6B":j},children:ye}),ct&&n.jsx("span",{style:A.noteIndicator}),l===h&&n.jsx(Gf,{onEdit:s,onDelete:o,onAddNote:()=>K(h),onRemind:s,onClose:()=>a(null)})]},h)})]})]}),m&&n.jsxs("div",{style:A.noteBox,children:[n.jsxs("div",{style:{fontWeight:600,fontSize:13,marginBottom:6},children:["Note for ",m]}),n.jsx("textarea",{value:d,onChange:h=>g(h.target.value),placeholder:"Add a note for this day…",style:{...A.sideInput,minHeight:60,resize:"vertical"}}),n.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[n.jsxs("button",{onClick:()=>{i(m,d),v(null)},style:A.sideAddBtn,children:[n.jsx(yt,{size:13})," Save"]}),n.jsx("button",{onClick:()=>v(null),style:A.sideCancelBtn,children:n.jsx(pt,{size:13})})]})]})]})}function Gf({onEdit:t,onDelete:e,onAddNote:r,onRemind:o,onClose:s}){return n.jsxs("div",{style:A.longPressMenu,children:[n.jsxs("button",{style:A.menuItem,onClick:()=>{t(),s()},children:[n.jsx(Te,{size:13})," Edit"]}),n.jsxs("button",{style:A.menuItem,onClick:()=>{r(),s()},children:[n.jsx(Ju,{size:13})," Add note"]}),n.jsxs("button",{style:A.menuItem,onClick:()=>{o(),s()},children:[n.jsx(Qu,{size:13})," Remind"]}),n.jsxs("button",{style:{...A.menuItem,color:"#C2536B"},onClick:()=>{e(),s()},children:[n.jsx(pt,{size:13})," Delete"]})]})}function Uf({habits:t,onSave:e,onClose:r}){const[o,s]=y.useState([...t]),i=(l,a)=>{const d=[...o],g=l+a;g<0||g>=d.length||([d[l],d[g]]=[d[g],d[l]],s(d))};return n.jsx("div",{style:A.modalOverlay,onClick:r,children:n.jsxs("div",{style:{...A.modal,maxHeight:"80vh",overflowY:"auto"},onClick:l=>l.stopPropagation(),children:[n.jsxs("div",{style:A.modalHead,children:["Reorder Habits",n.jsx("button",{onClick:r,style:A.closeBtn,children:n.jsx(pt,{size:16})})]}),n.jsx("p",{style:{fontSize:12,color:"var(--text-3)",margin:"0 0 10px"},children:"Use arrows to set the display order."}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:o.map((l,a)=>{var g;const d=((g=Lr[l.pillar])==null?void 0:g.dot)||"#9A968C";return n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"9px 10px",background:"var(--bg)",borderRadius:9,border:"1px solid var(--border)"},children:[n.jsx("span",{style:{...A.sideDot,background:d}}),n.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500},children:l.name}),n.jsx("button",{onClick:()=>i(a,-1),disabled:a===0,style:{...A.navBtn,width:28,height:28,opacity:a===0?.3:1,fontSize:14},children:"↑"}),n.jsx("button",{onClick:()=>i(a,1),disabled:a===o.length-1,style:{...A.navBtn,width:28,height:28,opacity:a===o.length-1?.3:1,fontSize:14},children:"↓"})]},l.id)})}),n.jsxs("button",{onClick:()=>e(o.map(l=>l.id)),style:{...A.sideAddBtn,width:"100%",marginTop:14,height:38,justifyContent:"center"},children:[n.jsx(yt,{size:14})," Save Order"]})]})})}function Vf({year:t}){const[e,r]=y.useState([]);if(y.useEffect(()=>{U.getHabitsYearly(t).then(r).catch(console.error)},[t]),!e.length)return null;const o=Array.from({length:12},(i,l)=>{const a=e.reduce((g,m)=>{var v;return g+(((v=m.monthly[l+1])==null?void 0:v.done)||0)},0),d=e.reduce((g,m)=>{var v;return g+Math.floor((((v=m.monthly[l+1])==null?void 0:v.days)||30)/7*7)},0);return d>0?Math.round(a/d*100):0}),s=Math.max(...o,1);return n.jsxs("div",{style:{...A.monthCard,marginTop:18},children:[n.jsxs("div",{style:A.monthTitle,children:[t," Completion"]}),n.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:6,height:80,marginTop:12},children:o.map((i,l)=>n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[n.jsx("div",{style:{width:"100%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",height:`${i/s*60}px`,minHeight:2,opacity:i>0?1:.15},title:`${i}%`}),n.jsx("span",{style:{fontSize:9,color:"var(--text-3)",fontWeight:600},children:Df[l]})]},l))})]})}function Dn({label:t,value:e,c:r,soft:o,flame:s}){return n.jsxs("div",{style:{...A.stat,background:o},children:[n.jsx("div",{style:A.statLabel,children:t}),n.jsxs("div",{style:{...A.statValue,color:r},children:[s&&n.jsx(xn,{size:15})," ",e]})]})}const A={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:230,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",padding:"20px 12px",display:"flex",flexDirection:"column",gap:3,overflowY:"auto"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.18)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)",boxShadow:"none"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.38)",zIndex:20},sideTop:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 4px"},closeBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",marginBottom:8},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700,padding:"0 6px 14px"},sideItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"9px 10px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:500,color:"var(--text-2)",textAlign:"left"},sideItemOn:{background:"var(--hover)",fontWeight:600},sideLabel:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},sideCount:{fontSize:11,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:10,padding:"1px 7px"},sideStreak:{display:"flex",alignItems:"center",gap:3,fontSize:11,fontWeight:600,color:"#C2773B"},sideDot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},sideDivider:{height:1,background:"var(--border)",margin:"8px 6px"},addBox:{padding:"10px 6px",display:"flex",flexDirection:"column",gap:6},sideInput:{border:"1px solid var(--border)",borderRadius:7,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},sideAddBtn:{border:"none",background:"#4C9A6B",color:"#fff",height:30,padding:"0 12px",borderRadius:7,cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontSize:13,fontFamily:"inherit"},sideCancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:30,height:30,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},sideNewBtn:{display:"flex",alignItems:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",borderRadius:8,padding:"8px 10px",fontSize:12.5,color:"var(--text-3)",fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginTop:6,justifyContent:"center"},main:{flex:1,padding:"26px",overflowX:"hidden",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:200},mainHead:{marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:5,display:"flex",alignItems:"center"},h1:{fontSize:27,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},actionBtn:{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:500,color:"var(--text-2)",border:"1px solid var(--border)",background:"var(--surface)",padding:"5px 10px",borderRadius:7,cursor:"pointer",fontFamily:"inherit"},weekCard:{background:"var(--surface)",borderRadius:12,padding:"8px 14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"auto"},weekHeadRow:{display:"flex",alignItems:"flex-end",padding:"10px 0",borderBottom:"1px solid var(--border)",minWidth:480},weekNameCol:{width:160,flexShrink:0,display:"flex",alignItems:"center",gap:8},weekDayHead:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2},weekDayName:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekDayNum:{fontSize:12,fontWeight:600,color:"var(--text-2)",width:22,height:22,display:"grid",placeItems:"center",borderRadius:"50%"},weekDayToday:{background:"var(--accent-strong)",color:"#fff"},weekStreakCol:{width:64,flexShrink:0,textAlign:"center",fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekRow:{display:"flex",alignItems:"center",padding:"9px 0",borderBottom:"1px solid #F4F2EC",minWidth:480},weekHabitName:{fontSize:13,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},weekCell:{flex:1,display:"grid",placeItems:"center"},typeBadge:{fontSize:10,color:"var(--text-3)",background:"var(--hover)",padding:"1px 6px",borderRadius:8,fontWeight:600},tick:{width:26,height:26,borderRadius:7,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",padding:0},tickFuture:{opacity:.4,cursor:"not-allowed",borderStyle:"dashed"},streakPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,fontWeight:700,padding:"3px 9px",borderRadius:12},tinyBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:"2px 3px",display:"grid",placeItems:"center",borderRadius:4},statStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:10,marginBottom:18},stat:{borderRadius:10,padding:"13px 14px"},statLabel:{fontSize:11,fontWeight:600,color:"var(--text-2)",marginBottom:5},statValue:{fontSize:19,fontWeight:700,display:"flex",alignItems:"center",gap:5,fontFamily:"'Fraunces',Georgia,serif"},monthCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},monthTitle:{fontSize:14,fontWeight:700,marginBottom:12,fontFamily:"'Fraunces',Georgia,serif"},monthDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:8},monthDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},monthGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6},monthDay:{aspectRatio:"1",border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",display:"grid",placeItems:"center"},monthDayFuture:{opacity:.4,cursor:"not-allowed",background:"var(--surface-2)"},noteIndicator:{position:"absolute",top:3,right:3,width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},cellNoteBubble:{position:"absolute",top:2,right:"calc(50% - 16px)",width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},countBadge:{position:"absolute",bottom:2,right:2,minWidth:13,height:13,padding:"0 2px",borderRadius:7,color:"#fff",fontSize:9,fontWeight:700,display:"grid",placeItems:"center",lineHeight:1},counterBtn:{width:44,height:44,borderRadius:"50%",border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:24,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1},chainLine:{position:"absolute",top:"calc(50% - 3px)",left:0,right:0,height:6,zIndex:0,opacity:.9},chainBanner:{display:"flex",alignItems:"center",gap:8,borderRadius:10,padding:"10px 14px",marginBottom:14,fontSize:12.5,fontWeight:700,fontFamily:"'Inter',system-ui,sans-serif"},navBar:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:16},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},navLabel:{fontSize:13,fontWeight:700,color:"var(--text)",minWidth:180,textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},noteBox:{background:"var(--surface)",borderRadius:10,padding:14,marginTop:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},longPressMenu:{position:"absolute",top:"100%",left:0,zIndex:50,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 4px 16px rgba(0,0,0,0.12)",padding:"4px 0",minWidth:140},menuItem:{display:"flex",alignItems:"center",gap:8,width:"100%",border:"none",background:"none",padding:"8px 14px",fontSize:13,color:"var(--text)",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:100,display:"grid",placeItems:"center"},modal:{background:"var(--surface)",borderRadius:14,padding:24,width:320,maxWidth:"90vw",display:"flex",flexDirection:"column",gap:8},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:700,fontSize:16,fontFamily:"'Fraunces',Georgia,serif",marginBottom:6},modalLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4}},Ll=[{id:1,label:"Rough",emoji:"😣",color:"#C2536B"},{id:2,label:"Low",emoji:"🙁",color:"#C2773B"},{id:3,label:"Okay",emoji:"😐",color:"#C9A227"},{id:4,label:"Good",emoji:"🙂",color:"#4C9A6B"},{id:5,label:"Great",emoji:"😄",color:"#3A7CA5"}],Yf=t=>Ll.find(e=>e.id===t),zi=[{id:"wins",label:"Wins",hint:"What went well today?",icon:_r,color:"#C9A227"},{id:"grateful",label:"Grateful for",hint:"1–3 things",icon:tf,color:"#C2536B"},{id:"mattered",label:"What mattered",hint:"The point of today",icon:Pa,color:"#3A7CA5"},{id:"letgo",label:"Letting go of",hint:"Offload what's draining",icon:vf,color:"#8268B0"},{id:"tomorrow",label:"Tomorrow's one thing",hint:"A single priority",icon:pf,color:"#4C9A6B"}],Qf=()=>new Date().toISOString().slice(0,10),Ti=t=>new Date(t+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"});function Kf(){const t=Qf(),[e,r]=[new Date().getFullYear(),new Date().getMonth()+1],[o,s]=y.useState(null),i=o||t,l=i===t,[a,d]=y.useState(null),[g,m]=y.useState({}),[v,p]=y.useState(Object.fromEntries(zi.map(E=>[E.id,""]))),S=y.useCallback(async E=>{const W=await U.getJournalEntry(E);d(W)},[]);y.useCallback(async()=>{const E=await U.getJournalHistory(e,r);m(E)},[e,r]);const w=y.useCallback(async()=>{const[E,W]=await Promise.all([U.getJournalEntry(i),U.getJournalHistory(e,r)]);d(E),m(W)},[i,e,r]);y.useEffect(()=>{w()},[w]);const j=async E=>{await U.updateJournalMood(i,E),w()},C=async E=>{const W=v[E].trim();W&&(await U.addJournalBullet(i,E,W),p(et=>({...et,[E]:""})),S(i))},b=async E=>{await U.deleteJournalBullet(E),S(i)},u=E=>{s(E===t?null:E),p(Object.fromEntries(zi.map(W=>[W.id,""])))};if(!a)return n.jsx("div",{style:{padding:28,color:"var(--text-3)"},children:"Loading…"});const c=a.mood!==null,k=(()=>{let E=0;const W=new Date(t);if(g[t]||l&&c)E=1,W.setDate(W.getDate()-1);else return 0;for(;;){const M=W.toISOString().slice(0,10);if(g[M])E++,W.setDate(W.getDate()-1);else break}return E})(),x=Object.values(a.bullets||{}).reduce((E,W)=>E+W.length,0),T=new Date(e,r,0).getDate(),R=new Date(e,r-1,1).getDay(),F=R===0?6:R-1;return n.jsxs("div",{style:ut.page,children:[n.jsxs("div",{style:ut.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:ut.eyebrow,children:"Anvil · Journal"}),!l&&n.jsxs("button",{style:ut.backBtn,onClick:()=>s(null),children:[n.jsx(yn,{size:14})," Back to Today"]}),n.jsx("h1",{style:ut.h1,children:l?"Today":Ti(i)}),l&&n.jsx("div",{style:ut.date,children:Ti(t)})]}),n.jsxs("div",{style:ut.streakBox,children:[n.jsx(xn,{size:16,color:"#C2773B"}),n.jsx("span",{style:ut.streakNum,children:k}),n.jsx("span",{style:ut.streakLabel,children:"day streak"})]})]}),n.jsxs("div",{style:ut.card,children:[n.jsxs("div",{style:ut.cardTitle,children:["How ",l?"are":"were"," you?"]}),n.jsx("div",{style:ut.moodRow,children:Ll.map(E=>{const W=a.mood===E.id;return n.jsxs("button",{onClick:()=>j(E.id),style:{...ut.moodBtn,...W?{background:E.color,borderColor:E.color,transform:"translateY(-2px)"}:{}},children:[n.jsx("span",{style:ut.moodEmoji,children:E.emoji}),n.jsx("span",{style:{...ut.moodLabel,color:W?"#fff":"#6B675E"},children:E.label})]},E.id)})})]}),zi.map(E=>{var M;const W=E.icon,et=((M=a.bullets)==null?void 0:M[E.id])||[];return n.jsxs("div",{style:ut.card,children:[n.jsxs("div",{style:ut.sectionHead,children:[n.jsx("span",{style:{...ut.sectionIcon,background:`${E.color}1A`,color:E.color},children:n.jsx(W,{size:15})}),n.jsxs("div",{children:[n.jsx("div",{style:ut.cardTitle,children:E.label}),n.jsx("div",{style:ut.sectionHint,children:E.hint})]})]}),n.jsx("ul",{style:ut.bulletList,children:et.map(f=>n.jsxs("li",{style:ut.bullet,children:[n.jsx("span",{style:{...ut.bulletDot,background:E.color}}),n.jsx("span",{style:ut.bulletText,children:f.text}),n.jsx("button",{onClick:()=>b(f.id),style:ut.bulletDel,children:n.jsx(pt,{size:13})})]},f.id))}),n.jsxs("div",{style:ut.addRow,children:[n.jsx("input",{placeholder:"Add a point…",value:v[E.id],onChange:f=>p(_=>({..._,[E.id]:f.target.value})),onKeyDown:f=>f.key==="Enter"&&C(E.id),style:ut.input}),n.jsx("button",{onClick:()=>C(E.id),style:{...ut.addBtn,background:E.color},children:n.jsx(ve,{size:16})})]})]},E.id)}),n.jsxs("div",{style:ut.card,children:[n.jsxs("div",{style:ut.cardTitle,children:[new Date(e,r-1).toLocaleDateString("en-US",{month:"long",year:"numeric"})," · Mood history",n.jsx("span",{style:{fontSize:11,color:"var(--text-3)",fontWeight:400,marginLeft:8},children:"tap a day to view"})]}),n.jsx("div",{style:ut.calDow,children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(E=>n.jsx("div",{style:ut.calDowCell,children:E},E))}),n.jsxs("div",{style:ut.calGrid,children:[Array.from({length:F}).map((E,W)=>n.jsx("div",{},`p${W}`)),Array.from({length:T},(E,W)=>W+1).map(E=>{const W=`${e}-${String(r).padStart(2,"0")}-${String(E).padStart(2,"0")}`,et=W===t&&a.mood?a.mood:g[W],M=et?Yf(et):null,f=W>t,_=W===i;return n.jsx("button",{onClick:()=>!f&&u(W),disabled:f,style:{...ut.calDay,background:M?M.color:f?"var(--surface-2)":"var(--surface)",borderColor:_?"var(--accent-strong)":"var(--border)",borderWidth:_?2:1,color:M?"#fff":"var(--text-3)",opacity:f?.5:1,cursor:f?"not-allowed":"pointer",outline:_?"2px solid var(--accent-strong)":"none",outlineOffset:1},title:M?M.label:W,children:M?M.emoji:E},E)})]}),n.jsx("div",{style:ut.legend,children:Ll.map(E=>n.jsxs("span",{style:ut.legendItem,children:[n.jsx("span",{style:{...ut.legendDot,background:E.color}})," ",E.label]},E.id))})]}),n.jsx("div",{style:ut.footer,children:l?c?`Mood set · ${x} point${x===1?"":"s"} written today`:"Tap a mood to log today and keep your streak":`Viewing ${Ti(i)}`})]})}const ut={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},backBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",background:"none",color:"#3A7CA5",fontSize:12.5,fontWeight:600,cursor:"pointer",padding:"0 0 6px",fontFamily:"inherit"},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},date:{fontSize:13,color:"var(--text-3)",marginTop:4},streakBox:{display:"flex",alignItems:"center",gap:6,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"8px 14px"},streakNum:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"#C2773B"},streakLabel:{fontSize:11,color:"var(--text-3)",fontWeight:500},card:{background:"var(--surface)",borderRadius:12,padding:"18px 20px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},cardTitle:{fontSize:14,fontWeight:700,marginBottom:12,color:"var(--text)"},moodRow:{display:"flex",gap:8,flexWrap:"wrap"},moodBtn:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,border:"2px solid var(--border)",background:"var(--surface)",borderRadius:10,padding:"10px 12px",cursor:"pointer",flex:"1 1 60px",transition:"transform 0.1s"},moodEmoji:{fontSize:22},moodLabel:{fontSize:11,fontWeight:600},sectionHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:10},sectionIcon:{width:32,height:32,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},sectionHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},bulletList:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6,marginBottom:10},bullet:{display:"flex",alignItems:"center",gap:8,fontSize:13.5,lineHeight:1.4},bulletDot:{width:6,height:6,borderRadius:"50%",flexShrink:0},bulletText:{flex:1},bulletDel:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},addRow:{display:"flex",gap:8},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",outline:"none"},addBtn:{width:36,height:36,border:"none",borderRadius:8,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:12},calDay:{aspectRatio:"1",border:"1px solid var(--border)",borderRadius:7,fontSize:13,display:"grid",placeItems:"center",fontWeight:500,fontFamily:"inherit"},legend:{display:"flex",gap:10,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)"},legendDot:{width:8,height:8,borderRadius:"50%",display:"inline-block"},footer:{fontSize:12.5,color:"var(--text-3)",textAlign:"center",marginTop:8,fontStyle:"italic"}},Ae=[{id:"D",label:"Data",color:"#3A7CA5",soft:"rgba(58,124,165,0.10)",prompt:"What did you read/watch? Log the raw source and a quick note.",hint:"e.g. 'Atomic Habits ch.1 — habits are systems not goals'"},{id:"I",label:"Information",color:"#8268B0",soft:"rgba(130,104,176,0.10)",prompt:"What did you actually understand from it? In your own words.",hint:"e.g. 'Small 1% improvements compound into massive change over time'"},{id:"K",label:"Knowledge",color:"#C9A227",soft:"rgba(201,162,39,0.10)",prompt:"How will this specifically improve your life? Connect it to your goals.",hint:"e.g. 'I will improve my morning workout habit by 1% each week'"},{id:"W",label:"Wisdom",color:"#4C9A6B",soft:"rgba(76,154,107,0.10)",prompt:"How have you implemented it? What changed?",hint:"e.g. 'I've not missed a workout in 3 weeks using the 1% rule'"}],dg=t=>Ae.findIndex(e=>e.id===t),Pl=[{id:"book",label:"Book",icon:Ku},{id:"video",label:"Video",icon:yf},{id:"article",label:"Article",icon:Ju}],gg=t=>Pl.find(e=>e.id===t)||Pl[0],Ei={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"};function Xf(){var H;const[t,e]=y.useState([]),[r,o]=y.useState(null),[s,i]=y.useState("ALL"),[l,a]=y.useState(!1),[d,g]=y.useState(null),[m,v]=y.useState({title:"",type:"book",pillar:"Academic",note:""}),[p,S]=y.useState({}),[w,j]=y.useState(null),[C,b]=y.useState(null),u=y.useCallback(async()=>{try{const z=await U.getSkills();e(z);const B={};z.forEach(V=>{B[V.id]=Object.fromEntries(Ae.map(K=>[K.id,""]))}),S(V=>{const K={...B};return z.forEach($=>{V[$.id]&&(K[$.id]={...B[$.id],...V[$.id]})}),K})}catch(z){console.error(z)}},[]);y.useEffect(()=>{u()},[u]);const c=t.find(z=>z.id===r),k=c?dg(c.stage):-1,x=async(z,B)=>{var K;const V=(((K=p[z])==null?void 0:K[B])??"").trim();V&&(await U.addSkillNote(z,B,V),S($=>({...$,[z]:{...$[z],[B]:""}})),u())},T=async z=>{await U.deleteSkillNote(z),u()},R=async()=>{!c||!(C!=null&&C.trim())||(await U.updateSkill(c.id,{title:C.trim()}),b(null),u())},F=async()=>{!w||!w.text.trim()||(await U.updateSkillNote(w.id,w.text.trim()),j(null),u())},E=async z=>{await U.toggleSkillNote(z),u()},W=async(z,B)=>{t.find(K=>K.id===z)&&(B==="W"&&g(z),await U.completeSkillStage(z,B),u())},et=async()=>{if(!m.title.trim())return;const z=await U.createSkill({pillar:m.pillar,title:m.title.trim(),source_type:m.type,note_d:m.note.trim()});a(!1),v({title:"",type:"book",pillar:"Academic",note:""}),o(z.id),u()},M=async z=>{await U.deleteSkill(z),r===z&&o(null),u()},f=s==="ALL"?t:t.filter(z=>z.stage===s),_=t.filter(z=>z.stage==="W").length,N=!!c;return n.jsxs("div",{style:J.page,children:[d&&n.jsx("div",{style:J.celebOverlay,children:n.jsxs("div",{style:J.celebBox,children:[n.jsx("div",{style:J.celebEmoji,children:"🏆"}),n.jsx("div",{style:J.celebTitle,children:"Wisdom unlocked!"}),n.jsx("div",{style:J.celebSub,children:"You've implemented this knowledge — that's rare and real."}),n.jsx("button",{onClick:()=>g(null),style:J.celebBtn,children:"Continue"})]})}),n.jsxs("div",{style:J.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:J.eyebrow,children:"Anvil · Skills"}),n.jsx("h1",{style:J.h1,children:"DIKW Skills"}),n.jsx("div",{style:J.subhead,children:"Data → Information → Knowledge → Wisdom"})]}),n.jsxs("div",{style:J.headRight,children:[n.jsxs("div",{style:J.wisdomBadge,children:[n.jsx(_r,{size:14,color:"#C9A227"})," ",_," Wisdom",_!==1?"s":""]}),n.jsxs("button",{onClick:()=>{a(!0),o(null)},style:J.addSkillBtn,children:[n.jsx(ve,{size:15})," Add skill"]})]})]}),n.jsx("div",{style:J.filterBar,children:["ALL",...Ae.map(z=>z.id)].map(z=>{const B=Ae.find(K=>K.id===z),V=s===z;return n.jsx("button",{onClick:()=>i(z),style:{...J.filterBtn,...V?{background:B?B.color:"var(--accent-strong)",color:"#fff",borderColor:"transparent"}:{}},children:B?`${z} · ${B.label}`:"All"},z)})}),n.jsxs("div",{style:{...J.layout,gridTemplateColumns:N?"1fr 1fr":"1fr"},children:[n.jsxs("div",{style:J.cardList,children:[l&&n.jsxs("div",{style:{...J.skillCard,border:"2px dashed #3A7CA5"},children:[n.jsx("div",{style:J.cardTitle,children:"New skill"}),n.jsx("input",{placeholder:"Title (book / video / article name)",value:m.title,onChange:z=>v(B=>({...B,title:z.target.value})),onKeyDown:z=>z.key==="Enter"&&et(),style:J.input,autoFocus:!0}),n.jsxs("div",{style:J.addRow,children:[n.jsx("select",{value:m.type,onChange:z=>v(B=>({...B,type:z.target.value})),style:J.select,children:Pl.map(z=>n.jsx("option",{value:z.id,children:z.label},z.id))}),n.jsx("select",{value:m.pillar,onChange:z=>v(B=>({...B,pillar:z.target.value})),style:J.select,children:Object.keys(Ei).map(z=>n.jsx("option",{children:z},z))})]}),n.jsx("input",{placeholder:"First note (what did you read/watch?)",value:m.note,onChange:z=>v(B=>({...B,note:z.target.value})),style:J.input}),n.jsxs("div",{style:J.addRow,children:[n.jsxs("button",{onClick:et,style:J.saveBtn,children:[n.jsx(yt,{size:14})," Save"]}),n.jsxs("button",{onClick:()=>a(!1),style:J.cancelBtn,children:[n.jsx(pt,{size:14})," Cancel"]})]})]}),f.map(z=>{const B=dg(z.stage),V=Ae[B],K=gg(z.type),$=z.stage==="W",nt=r===z.id;return n.jsxs("div",{onClick:()=>o(nt?null:z.id),style:{...J.skillCard,...nt?{borderColor:V.color,borderWidth:2}:{},...$?{background:"rgba(76,154,107,0.05)"}:{}},children:[n.jsxs("div",{style:J.skillCardTop,children:[n.jsxs("div",{style:J.skillMeta,children:[n.jsx("span",{style:{color:Ei[z.pillar]},children:n.jsx(K.icon,{size:13})}),n.jsx("span",{style:{...J.pillarDot,background:Ei[z.pillar]}}),n.jsxs("span",{style:J.srcLabel,children:[K.label," · ",z.pillar]})]}),n.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[$&&n.jsx(So,{size:14,color:"#4C9A6B"}),n.jsx("button",{onClick:h=>{h.stopPropagation(),M(z.id)},style:J.ghostBtn,children:n.jsx(pt,{size:13})})]})]}),n.jsx("div",{style:J.skillTitle,children:z.title}),n.jsxs("div",{style:J.track,children:[Ae.map((h,L)=>{var Tt;const lt=L<B,it=L===B,mt=(Tt=z.completed_stages)==null?void 0:Tt[h.id];return n.jsxs("div",{style:J.trackItem,children:[n.jsxs("div",{style:{...J.trackDot,background:lt||mt||it?h.color:"var(--border)",boxShadow:it?`0 0 0 3px ${h.color}33`:"none"},children:[(lt||it&&mt)&&n.jsx(yt,{size:9,color:"#fff",strokeWidth:3}),it&&!mt&&n.jsx("span",{style:J.trackCurrent,children:h.id}),!lt&&!it&&n.jsx(eg,{size:8,color:"#B5B1A7"})]}),L<Ae.length-1&&n.jsx("div",{style:{...J.trackLine,background:lt?Ae[L+1].color:"var(--border)"}})]},h.id)}),n.jsx("span",{style:{...J.stageTag,background:V.soft,color:V.color},children:V.label})]})]},z.id)}),f.length===0&&!l&&n.jsx("div",{style:J.empty,children:"No skills at this stage yet."})]}),c&&n.jsxs("div",{style:J.detail,children:[n.jsxs("div",{style:J.detailHead,children:[n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsxs("div",{style:J.eyebrow,children:[gg(c.type).label," · ",c.pillar]}),C!==null?n.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginTop:4},children:[n.jsx("input",{autoFocus:!0,value:C,onChange:z=>b(z.target.value),onKeyDown:z=>{z.key==="Enter"&&R(),z.key==="Escape"&&b(null)},style:{...J.input,fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:0,flex:1}}),n.jsx("button",{onClick:R,style:{...J.noteAddBtn,background:"#4C9A6B",width:30,height:30},children:n.jsx(yt,{size:13})}),n.jsx("button",{onClick:()=>b(null),style:{...J.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:30,height:30},children:n.jsx(pt,{size:13})})]}):n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx("div",{style:J.detailTitle,children:c.title}),n.jsx("button",{onClick:()=>b(c.title),style:J.ghostBtn,title:"Edit name",children:n.jsx(Te,{size:13})})]})]}),n.jsx("button",{onClick:()=>{o(null),b(null)},style:J.closeBtn,children:n.jsx(pt,{size:16})})]}),Ae.map((z,B)=>{var lt,it,mt;const V=B<=k,K=B===k,$=B<k||((lt=c.completed_stages)==null?void 0:lt[z.id]),nt=B>k,h=((it=c.notes)==null?void 0:it[z.id])||[],L=((mt=p[c.id])==null?void 0:mt[z.id])??"";return n.jsxs("div",{style:{...J.stageBlock,...V?{borderColor:z.color}:{},opacity:nt?.45:1},children:[n.jsxs("div",{style:J.stageBlockHead,children:[n.jsx("div",{style:{...J.stageLetter,background:V?z.color:"var(--border)",color:V?"#fff":"#9A968C"},children:$&&!K?n.jsx(yt,{size:12,color:"#fff",strokeWidth:3}):nt?n.jsx(eg,{size:11,color:"#9A968C"}):z.id}),n.jsxs("div",{style:{flex:1},children:[n.jsx("div",{style:{...J.stageName,color:V?z.color:"#9A968C"},children:z.label}),V&&n.jsx("div",{style:J.stagePrompt,children:z.prompt})]}),$&&!K&&n.jsx("span",{style:{...J.doneBadge,color:z.color,background:z.soft},children:"Done"})]}),V&&(()=>{var ye,D;const Tt=z.id==="W",ct=h.length>0&&h.every(P=>P.done),Ct=Tt?ct:h.length>0;return n.jsxs(n.Fragment,{children:[h.length>0&&n.jsx("ul",{style:J.noteList,children:h.map(P=>n.jsxs("li",{style:J.noteItem,children:[Tt?n.jsx("button",{onClick:()=>E(P.id),style:{...J.checkBox,...P.done?{background:z.color,borderColor:z.color}:{}},children:P.done&&n.jsx(yt,{size:11,color:"#fff",strokeWidth:3})}):n.jsx("span",{style:{...J.noteDot,background:z.color}}),(w==null?void 0:w.id)===P.id?n.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[n.jsx("input",{autoFocus:!0,value:w.text,onChange:gt=>j(vt=>({...vt,text:gt.target.value})),onKeyDown:gt=>{gt.key==="Enter"&&F(),gt.key==="Escape"&&j(null)},style:{...J.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),n.jsx("button",{onClick:F,style:{...J.noteAddBtn,background:z.color,width:28,height:28},children:n.jsx(yt,{size:12})}),n.jsx("button",{onClick:()=>j(null),style:{...J.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:n.jsx(pt,{size:12})})]}):n.jsx("span",{style:{...J.noteText,...Tt&&P.done?{textDecoration:"line-through",color:"var(--text-3)"}:{}},children:P.text}),(w==null?void 0:w.id)!==P.id&&n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>j({id:P.id,text:P.text}),style:J.ghostBtn,children:n.jsx(Te,{size:12})}),n.jsx("button",{onClick:()=>T(P.id),style:J.ghostBtn,children:n.jsx(pt,{size:12})})]})]},P.id))}),h.length===0&&n.jsx("div",{style:J.noNotes,children:Tt?"Add the steps to implement this — check each off as you do it.":`No notes yet — ${z.hint}`}),n.jsxs("div",{style:J.noteAddRow,children:[n.jsx("input",{placeholder:Tt?"Add a step to implement…":`Add a ${z.label} note…`,value:L,onChange:P=>S(gt=>({...gt,[c.id]:{...gt[c.id],[z.id]:P.target.value}})),onKeyDown:P=>P.key==="Enter"&&x(c.id,z.id),style:J.noteInput}),n.jsx("button",{onClick:()=>x(c.id,z.id),style:{...J.noteAddBtn,background:z.color},children:n.jsx(ve,{size:14})})]}),K&&!((ye=c.completed_stages)!=null&&ye[z.id])&&n.jsxs(n.Fragment,{children:[Tt&&h.length>0&&!ct&&n.jsxs("div",{style:J.checklistHint,children:[h.filter(P=>P.done).length,"/",h.length," done — check all steps to complete Wisdom"]}),n.jsxs("button",{onClick:()=>W(c.id,z.id),disabled:!Ct,style:{...J.advanceBtn,background:Ct?z.color:"#C3BFB5",marginTop:10,cursor:Ct?"pointer":"not-allowed"},children:[n.jsx(yt,{size:14}),Tt?"Mark Wisdom complete":`Complete ${z.label} → ${(D=Ae[B+1])==null?void 0:D.label}`]})]})]})})()]},z.id)}),c.stage==="W"&&((H=c.completed_stages)==null?void 0:H.W)&&n.jsxs("div",{style:J.wisdomDone,children:[n.jsx(_r,{size:16,color:"#4C9A6B"})," Wisdom achieved — implemented in your life"]})]})]})]})}const J={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box",position:"relative"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},wisdomBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addSkillBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},filterBar:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16},filterBtn:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},layout:{display:"grid",gap:12},cardList:{display:"flex",flexDirection:"column",gap:10},skillCard:{background:"var(--surface)",borderRadius:12,padding:"14px",border:"1.5px solid var(--border)",cursor:"pointer",boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},skillCardTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},skillMeta:{display:"flex",alignItems:"center",gap:6},pillarDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},srcLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)"},skillTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",marginBottom:12},cardTitle:{fontSize:13,fontWeight:700,marginBottom:10},track:{display:"flex",alignItems:"center"},trackItem:{display:"flex",alignItems:"center"},trackDot:{width:22,height:22,borderRadius:"50%",display:"grid",placeItems:"center",flexShrink:0},trackCurrent:{fontSize:9,fontWeight:800,color:"#fff"},trackLine:{width:24,height:3,borderRadius:2},stageTag:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,marginLeft:10},detail:{background:"var(--surface)",borderRadius:14,padding:"18px 16px",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",border:"1.5px solid var(--border)",alignSelf:"start"},detailHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16},detailTitle:{fontSize:18,fontWeight:700,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},stageBlock:{border:"1.5px solid var(--border)",borderRadius:10,padding:"12px 13px",marginBottom:10},stageBlockHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:8},stageLetter:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",fontSize:13,fontWeight:800,flexShrink:0},stageName:{fontSize:13,fontWeight:700},stagePrompt:{fontSize:11.5,color:"var(--text-2)",marginTop:2,lineHeight:1.4},doneBadge:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10,marginLeft:"auto",flexShrink:0},noteList:{margin:"0 0 8px 0",padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6},noteItem:{display:"flex",alignItems:"flex-start",gap:8,fontSize:13,lineHeight:1.4},noteDot:{width:6,height:6,borderRadius:"50%",flexShrink:0,marginTop:5},checkBox:{width:18,height:18,borderRadius:5,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginTop:1,padding:0},checklistHint:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,marginTop:10,textAlign:"center"},noteText:{flex:1,color:"var(--text)"},noNotes:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",marginBottom:8},noteAddRow:{display:"flex",gap:6},noteInput:{flex:1,border:"1px solid var(--border)",borderRadius:7,padding:"7px 10px",fontSize:13,fontFamily:"inherit",outline:"none"},noteAddBtn:{width:32,height:32,border:"none",borderRadius:7,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},advanceBtn:{display:"flex",alignItems:"center",gap:8,border:"none",color:"#fff",padding:"10px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},wisdomDone:{display:"flex",alignItems:"center",gap:8,justifyContent:"center",fontSize:13.5,fontWeight:700,color:"#4C9A6B",padding:12,background:"rgba(76,154,107,0.08)",borderRadius:10,marginTop:4},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box",marginBottom:8},select:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:12.5,fontFamily:"inherit",flex:1},addRow:{display:"flex",gap:8,marginBottom:8},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{fontSize:13,color:"var(--text-3)",padding:"32px 12px",textAlign:"center"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.55)",zIndex:50,display:"grid",placeItems:"center"},celebBox:{background:"var(--surface)",borderRadius:20,padding:"40px 32px",textAlign:"center",maxWidth:320,boxShadow:"0 8px 40px rgba(0,0,0,0.18)"},celebEmoji:{fontSize:52,marginBottom:12},celebTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:8},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:"#4C9A6B",color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Bi=[{id:"aarti",title:"Aarti",html:`<h1>॥ गणपतीची आरती ॥</h1><br/>
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
      </div>`}];function Jf(){const[t,e]=y.useState(()=>window.innerWidth<720);return y.useEffect(()=>{const r=()=>e(window.innerWidth<720);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),t}function Zf({base:t,count:e}){const[r,o]=y.useState(0);return n.jsxs("div",{style:{maxWidth:560,margin:"0 auto"},children:[n.jsx("div",{style:Bt.carouselFrame,children:n.jsx("img",{src:`${t}${r+1}.jpg`,alt:`Adhyay ${r+1}`,style:Bt.carouselImg})}),n.jsxs("div",{style:Bt.carouselNav,children:[n.jsxs("button",{onClick:()=>o(s=>(s-1+e)%e),style:Bt.carouselBtn,children:[n.jsx(yn,{size:16})," Prev"]}),n.jsxs("span",{style:Bt.carouselCount,children:["Adhyay ",r+1," / ",e]}),n.jsxs("button",{onClick:()=>o(s=>(s+1)%e),style:Bt.carouselBtn,children:["Next ",n.jsx(Or,{size:16})]})]})]})}function qf(){const t=Jf(),[e,r]=y.useState(!1),[o,s]=y.useState("dss"),i=Bi.find(d=>d.id===o)||Bi[0],l=d=>{s(d),t&&r(!1)},a={...Bt.sidebar,...t?Bt.sidebarOverlay:{},...t&&!e?Bt.sidebarHidden:{}};return n.jsxs("div",{style:Bt.shell,children:[n.jsx("style",{children:th}),t&&e&&n.jsx("div",{style:Bt.backdrop,onClick:()=>r(!1)}),n.jsxs("aside",{style:a,children:[n.jsxs("div",{style:Bt.sideHead,children:[n.jsx("div",{style:Bt.brand,children:"Anvil · Spiritual"}),t&&n.jsx("button",{onClick:()=>r(!1),style:Bt.iconBtn,children:n.jsx(pt,{size:17})})]}),n.jsx("div",{style:Bt.sideScroll,children:Bi.map(d=>{const g=d.id===o;return n.jsx("button",{onClick:()=>l(d.id),style:{...Bt.sideItem,...g?Bt.sideItemOn:{}},children:d.title},d.id)})})]}),n.jsxs("main",{style:Bt.main,children:[t&&n.jsxs("button",{onClick:()=>r(!0),style:Bt.hamburger,children:[n.jsx(La,{size:17}),n.jsx("span",{style:Bt.hamburgerLabel,children:i.title})]}),n.jsxs("div",{style:Bt.contentWrap,children:[i.youtube&&n.jsx("div",{style:Bt.videoFrame,children:n.jsx("iframe",{src:`https://www.youtube.com/embed/${i.youtube}`,title:i.title,style:Bt.video,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},i.youtube)}),i.carousel?n.jsx(Zf,{base:i.imageBase,count:i.carousel}):n.jsx("div",{className:"spiritual-content",dangerouslySetInnerHTML:{__html:i.html}})]})]})]})}const th=`
.spiritual-content { font-family: 'Inter', system-ui, sans-serif; color: var(--text); line-height: 1.9; font-size: 16px; text-align: center; }
.spiritual-content h1 { font-family: 'Fraunces', Georgia, serif; font-size: 24px; color: #8268B0; margin: 8px 0 18px; letter-spacing: -0.01em; }
.spiritual-content h2 { font-family: 'Fraunces', Georgia, serif; font-size: 18px; color: #7A5EA8; margin: 20px 0 8px; }
.spiritual-content h3 { font-size: 15px; color: var(--text-3); text-transform: uppercase; letter-spacing: 0.06em; margin: 18px 0 6px; }
.spiritual-content b { color: #8268B0; }
.spiritual-content div { text-align: center; }
`,Bt={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:240,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.15)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.35)",zIndex:20},sideHead:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 14px 12px"},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700},sideScroll:{flex:1,overflowY:"auto",padding:"0 8px 16px"},sideItem:{display:"block",width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text-2)",textAlign:"left",marginBottom:2},sideItemOn:{background:"rgba(130,104,176,0.12)",color:"#8268B0",fontWeight:700},main:{flex:1,padding:"26px 22px",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:220},contentWrap:{background:"var(--surface)",borderRadius:14,padding:"26px 28px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",maxWidth:760,margin:"0 auto"},videoFrame:{position:"relative",width:"100%",maxWidth:600,margin:"0 auto 22px",aspectRatio:"16 / 9",borderRadius:12,overflow:"hidden",background:"#000"},video:{position:"absolute",inset:0,width:"100%",height:"100%",border:"none"},carouselFrame:{background:"var(--surface-2)",borderRadius:12,padding:8,border:"1px solid var(--border)"},carouselImg:{width:"100%",borderRadius:8,display:"block"},carouselNav:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:14},carouselBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},carouselCount:{fontSize:13,fontWeight:700,color:"#8268B0",fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"none",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,color:"var(--text-2)"}},Oe={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},cg=Object.keys(Oe),eh=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],rh=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],nh=()=>new Date().toISOString().slice(0,10),oh=(t,e)=>`${rh[e-1]} ${t}`,sh=(t,e)=>{const r=new Date(t,e,0).getDate();return Array.from({length:r},(o,s)=>`${t}-${String(e).padStart(2,"0")}-${String(s+1).padStart(2,"0")}`)},ih=(t,e)=>{const r=new Date(t,e-1,1).getDay();return r===0?6:r-1};function lh(){const t=nh(),[e,r]=y.useState(new Date().getFullYear()),[o,s]=y.useState(new Date().getMonth()+1),[i,l]=y.useState([]),[a,d]=y.useState([]),[g,m]=y.useState({}),[v,p]=y.useState(null),[S,w]=y.useState(!1),[j,C]=y.useState(!1),[b,u]=y.useState({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:t}),[c,k]=y.useState(null),x=y.useCallback(async()=>{const[h,L,lt]=await Promise.all([U.getTopics(),U.getDueToday(),U.getCalendar(e,o)]);l(h),d(L),m(lt)},[e,o]);y.useEffect(()=>{x()},[x]);const T=async h=>{await U.toggleReviewDone(h),x()},R=async()=>{const h=b.intervals.split(",").map(L=>parseInt(L.trim(),10)).filter(L=>!isNaN(L));!b.topic.trim()||h.length===0||(await U.createTopic({pillar:b.pillar,topic:b.topic.trim(),intervals:h,learned_date:b.learned_date||t}),u({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:t}),C(!1),x())},{deleteItem:F,toasts:E,handleUndo:W,handleDismiss:et}=kn(U.deleteTopic,U.restoreTopic,x),M=(h,L)=>F(h,L),f=h=>k({id:h.id,topic:h.topic,pillar:h.pillar,intervals:(h.intervals||[]).join(", "),learned_date:h.learned_date}),_=async()=>{if(!c)return;const h=c.intervals.split(",").map(L=>parseInt(L.trim(),10)).filter(L=>!isNaN(L)&&L>=0);!c.topic.trim()||h.length===0||(await U.updateTopic(c.id,{topic:c.topic.trim(),pillar:c.pillar,learned_date:c.learned_date,intervals:h}),k(null),x())},N=()=>{o===1?(r(h=>h-1),s(12)):s(h=>h-1),p(null)},H=()=>{o===12?(r(h=>h+1),s(1)):s(h=>h+1),p(null)},z=i.filter(h=>!h.cemented),B=i.filter(h=>h.cemented),V=sh(e,o),K=ih(e,o),$=y.useMemo(()=>{const h={};return i.forEach(L=>L.reviews.forEach(lt=>{lt.done||(h[lt.due_date]=h[lt.due_date]||[]).push({topic:L.topic,pillar:L.pillar,stage:lt.stage})})),h},[i]),nt=v?i.flatMap(h=>h.reviews.filter(L=>L.due_date===v).map(L=>({...L,topic:h.topic,pillar:h.pillar,total:h.reviews.length}))):[];return n.jsxs("div",{style:X.page,children:[n.jsxs("div",{style:X.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:X.eyebrow,children:"Anvil · Revision"}),n.jsx("h1",{style:X.h1,children:"Spaced Repetition"})]}),n.jsxs("button",{onClick:()=>C(!0),style:X.addBtn,children:[n.jsx(ve,{size:15})," Add topic"]})]}),j&&n.jsxs("div",{style:X.addBox,children:[n.jsx("input",{autoFocus:!0,placeholder:"What did you learn?",value:b.topic,onChange:h=>u(L=>({...L,topic:h.target.value})),onKeyDown:h=>h.key==="Enter"&&R(),style:X.input}),n.jsxs("div",{style:X.addRow,children:[n.jsx("select",{value:b.pillar,onChange:h=>u(L=>({...L,pillar:h.target.value})),style:X.select,children:cg.map(h=>n.jsx("option",{children:h},h))}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[n.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),n.jsx("input",{type:"date",value:b.learned_date,onChange:h=>u(L=>({...L,learned_date:h.target.value})),style:{...X.select,fontSize:13}})]}),n.jsx("div",{style:{flex:1,minWidth:0},children:n.jsx("input",{value:b.intervals,onChange:h=>u(L=>({...L,intervals:h.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:X.input})})]}),n.jsxs("div",{style:X.addRow,children:[n.jsxs("button",{onClick:R,style:X.saveBtn,children:[n.jsx(yt,{size:14})," Save"]}),n.jsxs("button",{onClick:()=>C(!1),style:X.cancelBtn,children:[n.jsx(pt,{size:14})," Cancel"]})]})]}),a.length>0&&n.jsxs("div",{style:X.section,children:[n.jsxs("div",{style:X.sectionTitle,children:[n.jsx(nb,{size:15,color:"#C2536B"}),"Due Today",n.jsx("span",{style:X.badge,children:a.length})]}),a.map(h=>{var lt,it;const L=((lt=Oe[h.pillar])==null?void 0:lt.dot)||"#9A968C";return n.jsxs("div",{style:{...X.reviewCard,borderLeft:`3px solid ${L}`,...h.is_missed?{opacity:.85}:{}},children:[n.jsx("button",{onClick:()=>T(h.review_id),style:{...X.checkbox,...h.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:h.done&&n.jsx(yt,{size:12,color:"#fff",strokeWidth:3})}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:X.reviewTopic,children:h.topic}),n.jsxs("div",{style:X.reviewMeta,children:[n.jsxs("span",{style:{...X.stageTag,background:((it=Oe[h.pillar])==null?void 0:it.soft)||"rgba(0,0,0,0.05)",color:L},children:["Review ",h.stage,"/",h.total_stages]}),h.is_missed&&n.jsxs("span",{style:X.missedTag,children:["missed · ",h.due_date]})]})]})]},h.review_id)})]}),n.jsxs("div",{style:X.section,children:[n.jsxs("div",{style:X.sectionTitle,children:["Active Topics ",n.jsx("span",{style:X.badge,children:z.length})]}),z.length===0&&n.jsx("div",{style:X.empty,children:"No active topics. Add something you learned today."}),z.map(h=>{var mt,Tt;const L=((mt=Oe[h.pillar])==null?void 0:mt.dot)||"#9A968C",lt=((Tt=Oe[h.pillar])==null?void 0:Tt.soft)||"rgba(0,0,0,0.05)",it=h.reviews.filter(ct=>ct.done).length;return(c==null?void 0:c.id)===h.id?n.jsxs("div",{style:X.addBox,children:[n.jsx("input",{autoFocus:!0,value:c.topic,onChange:ct=>k(Ct=>({...Ct,topic:ct.target.value})),onKeyDown:ct=>ct.key==="Enter"&&_(),placeholder:"Topic",style:X.input}),n.jsxs("div",{style:X.addRow,children:[n.jsx("select",{value:c.pillar,onChange:ct=>k(Ct=>({...Ct,pillar:ct.target.value})),style:X.select,children:cg.map(ct=>n.jsx("option",{children:ct},ct))}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[n.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),n.jsx("input",{type:"date",value:c.learned_date,onChange:ct=>k(Ct=>({...Ct,learned_date:ct.target.value})),style:{...X.select,fontSize:13}})]}),n.jsx("div",{style:{flex:1,minWidth:0},children:n.jsx("input",{value:c.intervals,onChange:ct=>k(Ct=>({...Ct,intervals:ct.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:X.input})})]}),n.jsx("div",{style:X.editHint,children:"Changing the date or intervals reschedules the reviews (completed steps are kept where they still apply)."}),n.jsxs("div",{style:X.addRow,children:[n.jsxs("button",{onClick:_,style:X.saveBtn,children:[n.jsx(yt,{size:14})," Save plan"]}),n.jsxs("button",{onClick:()=>k(null),style:X.cancelBtn,children:[n.jsx(pt,{size:14})," Cancel"]})]})]},h.id):n.jsxs("div",{style:X.topicCard,children:[n.jsxs("div",{style:X.topicHead,children:[n.jsx("span",{style:{...X.dot,background:L}}),n.jsx("span",{style:X.topicName,children:h.topic}),n.jsx("span",{style:X.topicPillar,children:h.pillar}),n.jsxs("span",{style:X.topicProgress,children:[it,"/",h.reviews.length," done"]}),n.jsx("button",{onClick:()=>f(h),style:X.ghostBtn,title:"Edit plan",children:n.jsx(Te,{size:12})}),n.jsx("button",{onClick:()=>M(h.id,h.topic),style:X.ghostBtn,title:"Delete",children:n.jsx(pt,{size:13})})]}),n.jsxs("div",{style:X.reviewDots,children:[h.reviews.map(ct=>{ct.due_date<t;const Ct=ct.due_date===t;return n.jsx("button",{onClick:()=>T(ct.id),title:`Review ${ct.stage} · ${ct.due_date}${ct.done?" · Done":""}`,style:{...X.reviewDot,background:ct.done?L:Ct?lt:"var(--hover)",border:`2px solid ${ct.done||Ct?L:"var(--border)"}`,color:ct.done?"#fff":L},children:ct.stage},ct.id)}),n.jsxs("span",{style:X.learnedDate,children:["Learned ",h.learned_date]})]})]},h.id)})]}),B.length>0&&n.jsxs("div",{style:X.section,children:[n.jsxs("button",{onClick:()=>w(h=>!h),style:X.cementedToggle,children:[S?n.jsx(_a,{size:15}):n.jsx(Or,{size:15}),n.jsx(_r,{size:14,color:"#C9A227"}),"Cemented",n.jsx("span",{style:{...X.badge,background:"rgba(201,162,39,0.12)",color:"#8A6E1A"},children:B.length})]}),S&&B.map(h=>{var lt;const L=((lt=Oe[h.pillar])==null?void 0:lt.dot)||"#9A968C";return n.jsx("div",{style:{...X.topicCard,opacity:.75},children:n.jsxs("div",{style:X.topicHead,children:[n.jsx("span",{style:{...X.dot,background:L}}),n.jsx("span",{style:X.topicName,children:h.topic}),n.jsx("span",{style:X.topicPillar,children:h.pillar}),n.jsx(_r,{size:13,color:"#C9A227",style:{marginLeft:"auto"}})]})},h.id)})]}),n.jsxs("div",{style:X.calCard,children:[n.jsxs("div",{style:X.calHead,children:[n.jsx("button",{onClick:N,style:X.calNav,children:"‹"}),n.jsxs("div",{style:X.calTitle,children:[oh(e,o)," · Review Calendar"]}),n.jsx("button",{onClick:H,style:X.calNav,children:"›"})]}),n.jsx("div",{style:X.calDow,children:eh.map(h=>n.jsx("div",{style:X.calDowCell,children:h},h))}),n.jsxs("div",{style:X.calGrid,children:[Array.from({length:K}).map((h,L)=>n.jsx("div",{},`p${L}`)),V.map((h,L)=>{const lt=$[h]||[],it=h===t,mt=h===v,Tt=h<t,ct=mt?"#fff":it?"var(--text)":Tt?"var(--text-2)":"var(--text-3)";return n.jsxs("button",{onClick:()=>p(mt?null:h),style:{...X.calDay,background:mt?"var(--accent-strong)":it?"var(--hover)":"var(--surface)",borderColor:it||mt?"var(--accent-strong)":"var(--border)"},children:[n.jsx("span",{style:{...X.calDayNum,color:ct,fontWeight:it||mt?700:600},children:L+1}),lt.slice(0,2).map((Ct,ye)=>{var D;return n.jsxs("span",{title:Ct.topic,style:{...X.calItem,color:mt?"#fff":((D=Oe[Ct.pillar])==null?void 0:D.dot)||"var(--text-2)"},children:[ye+1,". ",Ct.topic]},ye)}),lt.length>2&&n.jsxs("span",{style:{...X.calMore,color:mt?"#fff":"var(--text-3)"},children:["+",lt.length-2," more"]})]},h)})]}),v&&n.jsxs("div",{style:X.dayDetail,children:[n.jsxs("div",{style:X.dayDetailTitle,children:["Reviews for ",v]}),nt.length===0?n.jsx("div",{style:X.empty,children:"No reviews scheduled for this day."}):nt.map((h,L)=>{var it,mt;const lt=((it=Oe[h.pillar])==null?void 0:it.dot)||"#9A968C";return n.jsxs("div",{style:{...X.reviewCard,borderLeft:`3px solid ${lt}`},children:[n.jsx("button",{onClick:()=>T(h.id),style:{...X.checkbox,...h.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:h.done&&n.jsx(yt,{size:12,color:"#fff",strokeWidth:3})}),n.jsxs("div",{children:[n.jsxs("div",{style:X.reviewTopic,children:[L+1,". ",h.topic]}),n.jsxs("span",{style:{...X.stageTag,background:((mt=Oe[h.pillar])==null?void 0:mt.soft)||"rgba(0,0,0,0.05)",color:lt},children:["Review ",h.stage,"/",h.total]})]})]},h.id)})]})]}),n.jsx(wn,{toasts:E,onUndo:W,onDismiss:et})]})}const X={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},addBox:{background:"var(--surface)",borderRadius:12,padding:16,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},addRow:{display:"flex",gap:8,alignItems:"center"},editHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",minWidth:0},select:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 10px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},section:{marginBottom:20},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},reviewCard:{display:"flex",alignItems:"center",gap:12,background:"var(--surface)",borderRadius:10,padding:"12px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},checkbox:{width:22,height:22,borderRadius:6,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,padding:0},reviewTopic:{fontSize:13.5,fontWeight:600,marginBottom:4},reviewMeta:{display:"flex",alignItems:"center",gap:8},stageTag:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10},missedTag:{fontSize:11,color:"#C2536B",fontWeight:600},topicCard:{background:"var(--surface)",borderRadius:12,padding:"13px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},topicHead:{display:"flex",alignItems:"center",gap:8,marginBottom:10},dot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},topicName:{fontSize:14,fontWeight:600,flex:1},topicPillar:{fontSize:11,color:"var(--text-3)",fontWeight:500},topicProgress:{fontSize:11,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:10},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},reviewDots:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},reviewDot:{width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",fontSize:11,fontWeight:700,padding:0},learnedDate:{fontSize:11,color:"var(--text-3)",marginLeft:"auto"},cementedToggle:{display:"flex",alignItems:"center",gap:8,border:"none",background:"none",cursor:"pointer",fontSize:13,fontWeight:700,color:"var(--text-2)",padding:"4px 0",fontFamily:"inherit",marginBottom:8},empty:{fontSize:13,color:"var(--text-3)",padding:"16px 0",textAlign:"center"},calCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{border:"none",background:"none",fontSize:20,cursor:"pointer",color:"var(--text-2)",padding:"0 6px",lineHeight:1},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4},calDay:{minHeight:62,border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,cursor:"pointer",fontFamily:"inherit",display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"flex-start",gap:1,position:"relative",padding:"3px 4px",overflow:"hidden",textAlign:"left"},calDayNum:{fontSize:11,lineHeight:1.1,marginBottom:1},calItem:{fontSize:8.5,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",lineHeight:1.3,textAlign:"left"},calMore:{fontSize:8,fontWeight:700,opacity:.85,lineHeight:1.2},dayDetail:{marginTop:16,paddingTop:16,borderTop:"1px solid var(--border)"},dayDetailTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10}},Uo=[{id:1,title:"Regular Habits",cards:[{id:1,text:"1. I always do everything I need to do, when I need to do it. "},{id:2,text:"2. I never argue or let my emotions work against me. "},{id:3,text:"3. I have a good memory. I easily and automatically remember any name or anything that is important to me. "},{id:4,text:"4. I eat only what I should. "},{id:5,text:"5. I am a good listener. I hear everything that is said. I am attentive, interested, and aware of everything that is going on around me. "},{id:6,text:"6. I have the courage to state my opinions. I take responsibility for myself and everything I say and do."},{id:7,text:"7. I never spend more than I earn. I am financially responsible, both for my present and for my future."},{id:8,text:"8. I set goals and I follow them. I set my sights, take the appropriate action, and achieve my goals."},{id:9,text:"9. I spend time with my family and my loved ones. I enjoy sharing their lives with mine and my life with theirs."}]},{id:2,title:"Motivational",cards:[{id:1,text:"1. I can do anything I believe I can do. I’ve got it and every day I get more of it. I have talent, skills, and ability"},{id:2,text:"2. I set goals and I reach them. I know what I want out of life. I go after it and I get it. "},{id:3,text:"3. People like me, and I feel good about myself. I have a sense of pride in whoa am and I believe in myself. Nothing seems to stop me. I have a lot of determination. "},{id:4,text:"4. I turn problems into advantages. I find possibilities in things that other people never give a chance."},{id:5,text:"5. I have a lot of energy––I am very alive. I enjoy life and I can tell it and so can others"},{id:6,text:"6. I keep myself up, looking ahead, and liking it. I know that I can accomplish anything I choose, and I refuse to let anything negative hold me back or stand in my way. I am not afraid of anything or anyone. I have strength, power, conviction, and confidence. "},{id:7,text:"7. I like challenges and I meet them head on, face to face––today especially. I am on top of the world and I’m going for it. "},{id:8,text:"8. I have a clear picture in my mind of what I want. I can see it in front of me. "},{id:9,text:"9. I know what I want and I know how to get it. I know that it’s all up to me and I know I can do it. Roadblocks don’t bother me. They just mean that I am alive and running, and I’m not going to stand still for anything. "},{id:10,text:"10. I trust myself I’ve got what it takes––plenty of it––and I know how to use it. "},{id:11,text:"11. Today, more than ever. Today I am unstoppable. I’ve got myself together and I’m getting more together every day. And today––look out world, here I come. "},{id:12,text:"12. Limitations? I don’t even recognize them as limitations. There is no challenge I can’t conquer; there is no wall I can’t climb over. "},{id:13,text:"13. There is no problem I can’t defeat or turn around and make it work for me. I stand tall. I am honest and sincere. I like to deal with people and they like me. "},{id:14,text:"14. I think well; I think clearly. I am organized; I am in control of myself, and everything about me. I call my shots and no one has to call them for me. I never blame anyone else for the circumstances of my life. "},{id:15,text:"15. I accept my failings and move past them as easily as I accept the rewards for my victories. I never demand perfection of myself, but I expect the very best of what I have to give––and that’s what I get. I never give myself excuses. "},{id:16,text:"16. I get things done on time and in the right way. Today I have the inner strength to do more than ever. I am an exceptional human being. "},{id:17,text:"17. My goals and my incredible belief in myself turn my goals into reality. I have the power to live my dreams."},{id:18,text:"18.  I believe in them like I believe in myself. And that belief is so strong that there is nothing that diminishes my undefeatable spirit. "}]},{id:3,title:"Organized planning",cards:[{id:1,text:"1. I am organized and in control of my life. I am in control of myself, my thoughts, my time, my actions, and my future. "},{id:2,text:"2. I know what to do and when to do it, and I do everything I need to do, when I need to do it. "},{id:3,text:"3. I program my mind to make the maximum use of my time. I am in control of my time and how to use it. I like being organized, efficient, and on top of things."},{id:4,text:"4. Controlling my time keeps me that way. "},{id:5,text:"5. I never waste time––I always “plan” time. And because I plan my time, I always have time to do the things I choose to do. "},{id:6,text:"6. Each day I become more organized and in control of all areas of my life––at home, at work, in my mind and in my thoughts, in everything that I do. "},{id:7,text:"7. I am very well organized. Each night I make a list of things I need to do the next day. I set my priorities and I follow them. "},{id:8,text:"8. I am always on time. I am always right where I need to be, exactly when I need to be there. "},{id:9,text:"9. Being on time is easy for me and the more I control my time and the more organized I become, the easier it is. "},{id:10,text:"10. I am in control of my feelings, my emotions, my attitudes, and my needs. I control them; they do not control me. "},{id:11,text:"11. I have the winning vote in the outcome of my own actions. And I choose to live my life by choice, not chance. Therefore, I take the time to take control."},{id:12,text:"12. I have an organized and orderly mind. Because I think in an organized way, I conduct my life in an organized manner. "},{id:13,text:"13. I think in the most positive and productive way at all times and in all things. The way I think is the way I live––and I think “right.” "},{id:14,text:"14. I am the director of my destiny. I know where I am going and I know why I am going there. My earthly life is in my hands and in my control. "},{id:15,text:"15. I control my goals and the achievement of my goals. I organize my goals by writing each of them down, along with the steps I need to reach them. One of the reasons for my success is that my goals are clearly defined and organized."},{id:16,text:"16. I am in complete control of what I think and how I think. Therefore, I choose to think only those thoughts which help me and which are of genuine benefit to me."}]},{id:4,title:"Solving Problems",cards:[{id:1,text:"1. I’m good at solving problems. I like challenges and I meet them head on. "},{id:2,text:"2. Problems are my teachers. They help me to learn and grow. Without them, I would be going nowhere. With them, I am moving forward in the direction of my own goals. "},{id:3,text:"3. There is no problem which I cannot conquer. I am strong in mind, body, and spirit. My will, my strength, and my determination are always greater than any problem I face."},{id:4,text:"4. When I meet a new problem, I do not see the problem as my enemy. I know that finding the solution to the problem will move me forward in my own personal growth."},{id:5,text:"5. Because I know that problems are a key ingredient in my spiritual and mental education and preparation, I recognize that all problems are important to me. "},{id:6,text:"6. I do not fear problems, I solve them. I do not ignore problems, I confront them. I do not avoid problems, I conquer them. "},{id:7,text:"7. I know that every problem holds within itself the keys to its own solution. Therefore, the better I understand the problem, the clearer I am able to see its solution. "},{id:8,text:"8. Having problems is not a problem for me. I am confident, self-assured, positive, and determined. I always know that I am going to overcome any problem I encounter––and I always do. "},{id:9,text:"9. I am good at breaking large obstacles down into smaller pieces that are easier to handle. And I never make any problem appear to be larger than it actually is. "},{id:10,text:"10. I never worry. I turn “worry time” into positive, constructive, “solution time.” I keep my mind alert and open to all solutions—and solutions come quickly and easily to me. "},{id:11,text:"11. I have learned to recognize that many problems carry with them benefits and potential opportunities which would not have presented themselves had the problem not occurred in the first place. "},{id:12,text:"12. I do not seek to live a life which is free from all problems. Instead, I choose to live a life of finding solutions and enjoying the benefits which those solutions create."},{id:13,text:"13. Challenge, conquer, solution, and win are words which I live by daily. Challenges are opportunities. Conquering them is the inevitable outcome. "},{id:14,text:"14. “Solutions” are the stepping stones to my success, and “Winning” is my way of life."}]},{id:5,title:"Self Esteem",cards:[{id:1,text:"1. I really am very special. I like who I am and I feel good about myself. "},{id:2,text:"2. Although I always work to improve myself and I get better every day, I like who I am today. And tomorrow, when I’m even better, I’ll like myself then, too. "},{id:3,text:"3. It’s true that there really is no one else like me in the entire world. There never was another me before, and there will never be another me again. "},{id:4,text:"4. I am unique––from the top of my head to the bottom of my feet. In some ways I may look and act and sound like some others––but I am not them. I am me."},{id:5,text:"5. I wanted to be somebody––and now I know I am I would rather be me than anyone else in the world. "},{id:6,text:"6. I like how I feel and I like how I think and I like how I do things. I approve of me and I approve of who I am."},{id:7,text:"7. I have many beautiful qualities about me. I have talents and skills and abilities. I even have talents that I don’t even know about yet. And I am discovering new talents inside myself all the time. "},{id:8,text:"8. I am positive. I am confident. I radiate good things. If you look closely, you can even see a glow around me."},{id:9,text:"9. I am full of life. I like life and I’m glad to be alive. I am a very special person, living at a very special time. "},{id:10,text:"10. I am intelligent. My mind is quick and alert and clever and fun. I think good thoughts, and my mind makes things work right for me. "},{id:11,text:"11. I have a lot of energy and enthusiasm and vitality. I am exciting and I really enjoy being me. "},{id:12,text:"12. I like to be around other people and other people like to be around me. People like to hear what I have to say and know what I have to think. "},{id:13,text:"13. I smile a lot. I am happy on the inside and I am happy on the outside. "},{id:14,text:"14. I am interested in many things. I appreciate all the blessings I have, and the things that I learn, and all the things I will learn today and tomorrow and forever––just as long as I am. "},{id:15,text:"15. I am warm, sincere, honest, and genuine. I am all of these things and more. And all of these things are me. I like who I am, and I’m glad to be me."}]},{id:6,title:"Self-Responsibility",cards:[{id:1,text:"1. I take full responsibility for everything about me––even the thoughts that I think. I am in control of the vast resources of my own mind."},{id:2,text:"2. I alone am responsible for what I do and what I tell myself about me. No one can share this responsibility with me. "},{id:3,text:"3. I also allow others to accept their responsibilities far themselves and I do not try to accept their responsibilities for them. "},{id:4,text:"4. I enjoy being responsible. It puts me in charge of being me––and that’s a challenge I enjoy. "},{id:5,text:"5. I allow no one else, at any time, to assume control or responsibility over my life or over anything that I do. My responsibility to others is an extension of my own responsibility to myself. "},{id:6,text:"6. I choose to leave nothing about me up to chance. When it comes to me––and anything in my life––I choose to CHOOSE. "},{id:7,text:"7. My choices are mine alone to make for myself. I do not, at any time, allow anyone else to make my choices for me. And I accept full responsibility for every choice and decision I make. "},{id:8,text:"8. I always meet all of the obligations which I accept. And I accept no obligations which I will not meet. "},{id:9,text:"9. I am trustworthy. I can be counted on. I have accepted winning responsibility for myself––and I always live up to the responsibilities I accept. "},{id:10,text:"10. There is no they on whom I lay the blame, or with whom I share my own personal responsibilities. I have learned the great secret of mastering my own destiny. I have learned that “they” is “me.” "},{id:11,text:"11. I have no need to make excuses and no one needs to carry my responsibility for me. I gladly carry my own weight––and I carry it well. "},{id:12,text:"12. Each day I acknowledge and accept the responsibility––not only for my own actions––but also for my emotions, my thoughts, and my attitude. "},{id:13,text:"13. I accept the responsibility for living my life in a way which creates my strengths, my happiness, my positive, healthy beliefs, and for my past, my present, and my future."}]},{id:7,title:"Freedom from worry",cards:[{id:1,text:"1. I never worry. Instead of worrying, I find solutions and I act on them. "},{id:2,text:"2. My mind is constantly in tune with the positive. It is bright, cheerful, enthusiastic, and full of good, positive thoughts and ideas. "},{id:3,text:"3. I am able to relax easily and comfortably in my body and in my mind. I am calm, confident, and self-assured. "},{id:4,text:"4. My mind is orderly and well-organized. I consciously choose what I think and I always choose those thoughts which are the most positive and beneficial for me. "},{id:5,text:"5. All of my thoughts create healthiness within me. My mind dwells only on those thoughts which create more harmony, balance, and well-being within me and in the world around me. "},{id:6,text:"6. I automatically, and always, think in a decisive and determined way. "},{id:7,text:"7. I am full of resolution and the absolute assurance of the best possible outcome in everything that I do. "},{id:8,text:"8. I choose to look at the world around me in the bright, healthy light of optimism and self-assurance. "},{id:9,text:"9. I do only those things which are best for me. I create the best within myself, I attract the best in others, and I find the best in the world around me. "},{id:10,text:"10. I willingly, and without fail, take care of the duties and obligations which I have accepted for myself."},{id:11,text:"11. I commit only to those responsibilities which I know I can fulfill. "},{id:12,text:"12. I focus the attention of my mind only on those things that I can do something about. If I cannot affect it or direct it––I accept it. "},{id:13,text:"13. I keep my mind too busy thinking good, healthy, positive, constructive, and productive thoughts to ever have any time for worry. "},{id:14,text:"14. I control the thoughts I choose. No thought, at any time, can dwell in my mind without my approval or permission. I never worry."}]},{id:8,title:"Eating Habits",cards:[{id:1,text:"1. I am in control of myself in every way––at all times and in all situations. "},{id:2,text:"2. Each time I sit down to eat I reaffirm my determination to achieve my goal. By eating right, and never giving in, I am reaching the weight I want. "},{id:3,text:"3. Whether eating in or eating out, I really enjoy eating less. "},{id:4,text:"4. I never feel the need to finish the food in front of me. I eat only what I should––and never one bite more. "},{id:5,text:"5. One way to weight-loss that’s easy and works, is less food on my plate, and less on my fork. "},{id:6,text:'6. By ordering less when I eat out, and by serving myself smaller portions at home, I keep myself aware of the importance of staying with my goal––each and every day. “Less on my plate means less on my waist."'},{id:7,text:"7. When I sit down to eat, at no time do I allow anyone else to influence, tempt, or discourage me in any negative way."},{id:8,text:"8. What I eat, and the goals I reach, are up to me. And I give no one the right to hinder or control my success."},{id:9,text:"9. Although others may benefit from my success, I. am achieving my weight-loss goals for my own personal reasons––for myself, my life, my future, and my own personal well-being."},{id:10,text:"10. I am never, at any time, tempted to take one bite more than I should. I am strong, I am capable of reaching my goal, and I am doing it."},{id:11,text:"11. Being in situations which put a lot of food in front of me is not a problem to me now. I simply say “No” to the food and “Yes” to my success."},{id:12,text:"12. I enjoy sitting down to eat. Each time I do I conquer my past, and I create a trimmer, happier, more self-confident future in front of me. "},{id:13,text:"13. When I sit down to eat, I do not need someone else to remind me of my goal, or to keep me from eating something I should not. I take full responsibility for myself, and no one else has to do it for me. "},{id:14,text:"14. Controlling my weight, and my appetite, is easy for me now. I enjoy smaller portions, smaller bites, and a slower, healthier, more relaxed way of eating. "},{id:15,text:"15. I have set my goal and I am staying with it. I have turned mealtime into “achievement time.”"}]}],ug=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#3A7CA5","#4C9A6B"],Fi=t=>ug[t%ug.length],ah=t=>t+"1A",lb="anvil_affirmation_favs",dh=()=>{try{return new Set(JSON.parse(localStorage.getItem(lb)||"[]"))}catch{return new Set}};function gh(){const[t,e]=y.useState(0),[r,o]=y.useState(0),[s,i]=y.useState(dh);y.useEffect(()=>{localStorage.setItem(lb,JSON.stringify([...s]))},[s]);const l=(C,b)=>`${C}#${b.id}`,a=t==="FAV"?Uo.flatMap((C,b)=>C.cards.filter(u=>s.has(l(C.title,u))).map(u=>({...u,color:Fi(b),title:C.title}))):Uo[t].cards.map(C=>({...C,color:Fi(t),title:Uo[t].title})),d=a.length,g=Math.min(r,Math.max(0,d-1)),m=a[g],v=C=>{e(C),o(0)},p=y.useCallback(()=>o(C=>Math.max(0,C-1)),[]),S=y.useCallback(()=>o(C=>Math.min(d-1,C+1)),[d]);y.useEffect(()=>{const C=b=>{b.key==="ArrowLeft"&&p(),b.key==="ArrowRight"&&S()};return window.addEventListener("keydown",C),()=>window.removeEventListener("keydown",C)},[p,S]);const w=C=>i(b=>{const u=new Set(b);return u.has(C)?u.delete(C):u.add(C),u}),j=m?m.color:"#8268B0";return n.jsxs("div",{style:St.page,children:[n.jsxs("div",{style:St.head,children:[n.jsx("div",{style:St.eyebrow,children:"Anvil · Affirmations"}),n.jsx("h1",{style:St.h1,children:"Affirmations"}),n.jsx("div",{style:St.subhead,children:"One at a time — read it, mean it."})]}),n.jsxs("div",{style:St.filterBar,children:[Uo.map((C,b)=>{const u=t===b,c=Fi(b);return n.jsxs("button",{onClick:()=>v(b),style:{...St.chip,...u?{background:c,color:"#fff",borderColor:c}:{}},children:[n.jsx("span",{style:{...St.catDot,background:u?"#fff":c}})," ",C.title," ",n.jsx("span",{style:St.chipCount,children:C.cards.length})]},C.title)}),n.jsxs("button",{onClick:()=>v("FAV"),style:{...St.chip,...t==="FAV"?{background:"#C9A227",color:"#fff",borderColor:"#C9A227"}:{}},children:[n.jsx(as,{size:12,fill:t==="FAV"?"#fff":"none"})," Favorites ",n.jsx("span",{style:St.chipCount,children:s.size})]})]}),d===0?n.jsxs("div",{style:St.empty,children:[n.jsx(as,{size:22,color:"#C3BFB5"}),n.jsx("div",{children:"No favorites yet — tap the star on a card to save it here."})]}):n.jsxs("div",{style:St.viewer,children:[n.jsxs("div",{style:{...St.card,borderTop:`4px solid ${j}`},children:[n.jsx("div",{style:{...St.cardCat,color:j,background:ah(j)},children:m.title}),n.jsx("button",{onClick:()=>w(l(m.title,m)),style:{...St.favBtn,color:s.has(l(m.title,m))?"#C9A227":"#C3BFB5"},title:"Favorite",children:n.jsx(as,{size:20,fill:s.has(l(m.title,m))?"#C9A227":"none"})}),n.jsx(rb,{size:30,color:j,style:{opacity:.25}}),n.jsx("p",{style:St.cardText,children:m.text.trim()})]}),n.jsxs("div",{style:St.navRow,children:[n.jsxs("button",{onClick:p,disabled:g===0,style:{...St.navBtn,...g===0?St.navBtnDisabled:{}},children:[n.jsx(yn,{size:18})," Back"]}),n.jsxs("span",{style:{...St.counter,color:j},children:[g+1," ",n.jsxs("span",{style:St.counterTotal,children:["/ ",d]})]}),n.jsxs("button",{onClick:S,disabled:g===d-1,style:{...St.navBtn,...g===d-1?St.navBtnDisabled:{}},children:["Next ",n.jsx(Or,{size:18})]})]}),n.jsx("div",{style:St.dots,children:a.map((C,b)=>n.jsx("button",{onClick:()=>o(b),style:{...St.dot,...b===g?{background:j,transform:"scale(1.5)"}:{}},title:`${b+1}`},b))})]})]})}const St={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:22},chip:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipCount:{fontSize:11,fontWeight:700,opacity:.7},catDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},empty:{display:"flex",flexDirection:"column",alignItems:"center",gap:10,fontSize:13.5,color:"var(--text-3)",padding:"56px 12px",textAlign:"center",background:"var(--surface)",borderRadius:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},viewer:{display:"flex",flexDirection:"column",alignItems:"center"},card:{position:"relative",background:"var(--surface)",borderRadius:16,padding:"40px 32px 44px",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",width:"100%",minHeight:240,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",boxSizing:"border-box"},cardCat:{position:"absolute",top:16,left:16,fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:12,textTransform:"uppercase",letterSpacing:"0.04em"},favBtn:{position:"absolute",top:14,right:14,border:"none",background:"none",cursor:"pointer",padding:4,display:"grid",placeItems:"center"},cardText:{fontSize:21,lineHeight:1.55,margin:"14px 0 0",fontWeight:500,color:"var(--text)",fontFamily:"'Fraunces',Georgia,serif",maxWidth:560},navRow:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",maxWidth:420,marginTop:22},navBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},counter:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},counterTotal:{fontSize:13,fontWeight:600,color:"var(--text-3)"},dots:{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center",marginTop:20,maxWidth:480},dot:{width:7,height:7,borderRadius:"50%",border:"none",background:"var(--border)",cursor:"pointer",padding:0,transition:"transform 0.12s"}},pe={financial:{label:"Financial",leaf:"#C9A227",shape:"round"},academic:{label:"Academic",leaf:"#3A7CA5",shape:"pine"},relationship:{label:"Relationship",leaf:"#C2536B",shape:"round"},spiritual:{label:"Spiritual",leaf:"#8268B0",shape:"tall"},health:{label:"Health",leaf:"#4C9A6B",shape:"round"}},fo="health";function Ha({species:t=fo,progress:e=1,withered:r=!1,size:o=200}){const s=Math.max(0,Math.min(1,e)),i=pe[t]||pe[fo],l=r?"#8A7B63":"#7A5A3C",a=r?"#A99C84":i.leaf,d=r?"#8F8268":a,g=14+s*46,m=112-g,v=s>.14,p=v?8+s*30:0;return n.jsxs("svg",{viewBox:"0 0 120 120",width:o,height:o,style:{display:"block"},children:[n.jsx("ellipse",{cx:"60",cy:"114",rx:20+s*14,ry:"5",fill:"rgba(38,36,31,0.08)"}),!v&&n.jsxs("g",{transform:`translate(60 ${112-s*40})`,children:[n.jsx("path",{d:"M0 8 C0 8 0 -2 0 -6",stroke:"#4C9A6B",strokeWidth:"2.5",fill:"none"}),n.jsx("ellipse",{cx:"-5",cy:"-4",rx:"6",ry:"3.5",fill:"#4C9A6B",transform:"rotate(-30 -5 -4)"}),n.jsx("ellipse",{cx:"5",cy:"-4",rx:"6",ry:"3.5",fill:"#5BB07E",transform:"rotate(30 5 -4)"})]}),v&&n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:60-(2+s*2.5),y:m,width:(2+s*2.5)*2,height:g,rx:"2",fill:l}),i.shape==="pine"?n.jsxs(n.Fragment,{children:[n.jsx("polygon",{points:`60,${m-p*2.2} ${60-p},${m+4} ${60+p},${m+4}`,fill:a}),n.jsx("polygon",{points:`60,${m-p*3} ${60-p*.8},${m-p*.7} ${60+p*.8},${m-p*.7}`,fill:d})]}):i.shape==="tall"?n.jsxs(n.Fragment,{children:[n.jsx("ellipse",{cx:"60",cy:m-p*.3,rx:p*.78,ry:p*1.55,fill:a}),n.jsx("ellipse",{cx:"60",cy:m-p*.9,rx:p*.5,ry:p*1,fill:d,opacity:"0.9"})]}):n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"60",cy:m,r:p,fill:a}),n.jsx("circle",{cx:60-p*.7,cy:m+p*.3,r:p*.78,fill:a}),n.jsx("circle",{cx:60+p*.7,cy:m+p*.3,r:p*.78,fill:d}),n.jsx("circle",{cx:"60",cy:m-p*.5,r:p*.8,fill:d,opacity:"0.92"})]})]})]})}function ch({species:t}){return n.jsx(Ha,{species:t,progress:1,size:56})}const uh=[{id:"day",label:"Day"},{id:"week",label:"Week"},{id:"month",label:"Month"},{id:"year",label:"Year"}],Ge=t=>t>=60?`${Math.floor(t/60)}h ${t%60}m`:`${t}m`,bh=t=>{const e=t<12?"am":"pm",r=t%12===0?12:t%12;return`${String(r).padStart(2,"0")} ${e}`};function ph(t){const e=t<=60?10:t<=120?20:t<=300?60:120,r=Math.max(60,Math.ceil((t||1)/e)*e),o=[];for(let s=0;s<=r;s+=e)o.push(s);return{max:r,ticks:o}}const ab=t=>{const e=new Date(t);return e.setHours(0,0,0,0),e},mh=t=>{const e=ab(t),r=(e.getDay()+6)%7;return e.setDate(e.getDate()-r),e},fh=t=>new Date(t.getFullYear(),t.getMonth(),1),hh=t=>new Date(t.getFullYear(),0,1);function vh(t,e){if(t==="day"){const s=ab(e);return{start:s,end:new Date(+s+864e5),prev:new Date(+s-864e5),prev2:new Date(+s-2*864e5)}}if(t==="week"){const s=mh(e);return{start:s,end:new Date(+s+7*864e5),prev:new Date(+s-7*864e5),prev2:new Date(+s-14*864e5)}}if(t==="month"){const s=fh(e),i=e.getFullYear(),l=e.getMonth();return{start:s,end:new Date(i,l+1,1),prev:new Date(i,l-1,1),prev2:new Date(i,l-2,1)}}const r=e.getFullYear();return{start:hh(e),end:new Date(r+1,0,1),prev:new Date(r-1,0,1),prev2:new Date(r-2,0,1)}}function yh({sessions:t=[],onBack:e}){const[r,o]=y.useState("day"),s=new Date,{start:i,end:l,prev:a,prev2:d}=vh(r,s),g=H=>new Date(H.started_at||H.created_at),m=t.filter(H=>H.completed),v=(H,z,B)=>{const V=g(H);return V>=z&&V<B},p=(H,z)=>m.filter(B=>v(B,H,z)).reduce((B,V)=>B+(V.actual_min||0),0),S=m.filter(H=>v(H,i,l)),w=S.reduce((H,z)=>H+(z.actual_min||0),0),j=p(a,i),C=p(d,a),b=S.length,u=Array(24).fill(0);S.forEach(H=>{u[g(H).getHours()]+=H.actual_min||0});const c=Math.max(...u,0),k=ph(c),x={};S.forEach(H=>{const z=pe[H.tree]?H.tree:fo;x[z]=(x[z]||0)+(H.actual_min||0)});const T=Object.entries(x).map(([H,z])=>({name:pe[H].label,min:z,color:pe[H].leaf})).sort((H,z)=>z.min-H.min),R=j>0?Math.round((w-j)/j*100):w>0?100:0,F=R>0?sb:R<0?ob:of,E=R>0?"#4C9A6B":R<0?"#C2536B":"#9A968C",W={day:"yesterday",week:"last week",month:"last month",year:"last year"}[r],et={day:"2 days ago",week:"2 weeks ago",month:"2 months ago",year:"2 years ago"}[r],M=54,f=22,_=2*Math.PI*M;let N=0;return n.jsxs("div",{style:tt.page,children:[n.jsxs("div",{style:tt.topbar,children:[n.jsxs("button",{onClick:e,style:tt.back,children:[n.jsx(Yu,{size:18})," Grove"]}),n.jsx("h1",{style:tt.h1,children:"Insights"}),n.jsx("div",{style:{width:76}})]}),n.jsx("div",{style:tt.rangeBar,children:uh.map(H=>n.jsx("button",{onClick:()=>o(H.id),style:{...tt.rangeBtn,...r===H.id?tt.rangeOn:{}},children:H.label},H.id))}),n.jsxs("div",{style:tt.headline,children:[n.jsxs("div",{style:tt.bigStat,children:[n.jsx("div",{style:tt.bigVal,children:Ge(w)}),n.jsxs("div",{style:tt.bigLbl,children:["Focused this ",r]})]}),n.jsxs("div",{style:tt.bigStat,children:[n.jsx("div",{style:tt.bigVal,children:b}),n.jsx("div",{style:tt.bigLbl,children:"Trees"})]})]}),n.jsxs("div",{style:tt.card,children:[n.jsxs("div",{style:tt.cardHead,children:[n.jsxs("div",{style:tt.cardTitle,children:["Your forest this ",r]}),n.jsx("div",{style:tt.cardHint,children:"Each tree is a completed session — bigger means longer focus"})]}),n.jsx(wh,{sessions:S}),n.jsxs("div",{style:tt.forestNumber,children:[b," ",b===1?"tree":"trees"," · ",Ge(w)," focused"]})]}),n.jsx(Ai,{title:"Focus distribution",hint:"Minutes focused at each time of day",children:c===0?n.jsx(bg,{}):n.jsx(kh,{hours:u,axis:k})}),n.jsx(Ai,{title:"Pillar distribution",hint:"How your focus splits across the five trees",children:T.length===0?n.jsx(bg,{}):n.jsxs("div",{style:tt.donutWrap,children:[n.jsxs("svg",{viewBox:"0 0 140 140",width:"150",height:"150",style:{flexShrink:0},children:[T.map(H=>{const z=H.min/(w||1)*_,B=n.jsx("circle",{cx:"70",cy:"70",r:M,fill:"none",stroke:H.color,strokeWidth:f,strokeDasharray:`${z} ${_-z}`,strokeDashoffset:-N,transform:"rotate(-90 70 70)"},H.name);return N+=z,B}),n.jsx("text",{x:"70",y:"66",textAnchor:"middle",style:tt.donutCenterTop,children:Ge(w)}),n.jsx("text",{x:"70",y:"82",textAnchor:"middle",style:tt.donutCenterSub,children:"total"})]}),n.jsx("div",{style:tt.legend,children:T.map(H=>n.jsxs("div",{style:tt.legendRow,children:[n.jsx("span",{style:{...tt.legendDot,background:H.color}}),n.jsx("span",{style:tt.legendName,children:H.name}),n.jsxs("span",{style:tt.legendVal,children:[Ge(H.min)," · ",Math.round(H.min/(w||1)*100),"%"]})]},H.name))})]})}),n.jsxs(Ai,{title:"Focus trend",hint:`This ${r} vs the previous two`,children:[n.jsxs("div",{style:tt.trend3,children:[n.jsxs("div",{style:tt.trendCol,children:[n.jsx("div",{style:tt.trendVal,children:Ge(w)}),n.jsxs("div",{style:tt.trendLbl,children:["This ",r]})]}),n.jsxs("div",{style:tt.trendCol,children:[n.jsx("div",{style:{...tt.trendVal,color:"var(--text-2)"},children:Ge(j)}),n.jsx("div",{style:tt.trendLbl,children:W})]}),n.jsxs("div",{style:tt.trendCol,children:[n.jsx("div",{style:{...tt.trendVal,color:"var(--text-3)"},children:Ge(C)}),n.jsx("div",{style:tt.trendLbl,children:et})]})]}),n.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:n.jsxs("div",{style:{...tt.trendBadge,color:E,background:E+"1A"},children:[n.jsx(F,{size:15})," ",R>0?"+":"",R,"% vs ",W]})}),n.jsx(Sh,{items:[{label:`This ${r}`,value:w,color:"#4C9A6B"},{label:W,value:j,color:"var(--text-3)"},{label:et,value:C,color:"var(--text-3)"}]})]})]})}const xh=t=>t===0?"12a":t<12?`${t}a`:t===12?"12p":`${t-12}p`;function kh({hours:t,axis:e}){return n.jsxs("div",{children:[n.jsxs("div",{style:tt.vcPlot,children:[e.ticks.map(r=>n.jsxs("div",{style:{...tt.vcGridRow,bottom:`${r/e.max*100}%`},children:[n.jsx("span",{style:tt.vcYLabel,children:r}),n.jsx("div",{style:tt.vcGridLine})]},r)),n.jsx("div",{style:tt.vcBars,children:t.map((r,o)=>n.jsx("div",{style:tt.vcCell,title:`${bh(o)} · ${r} min`,children:n.jsx("div",{style:{...tt.vcBar,height:r>0?`max(3px, ${r/e.max*100}%)`:0}})},o))})]}),n.jsx("div",{style:tt.vcXAxis,children:t.map((r,o)=>n.jsx("div",{style:tt.vcXCell,children:o%3===0?xh(o):""},o))}),n.jsx("div",{style:tt.vcYTitle,children:"minutes focused, by hour of day"})]})}function wh({sessions:t}){if(!t.length)return n.jsx("div",{style:tt.sceneEmpty,children:"No trees yet this period. 🌱"});const r=t.slice(0,80),o=t.length-r.length,s=i=>Math.round(Math.max(40,Math.min(88,40+(i||0)*.6)));return n.jsxs("div",{children:[n.jsx("div",{style:tt.scene,children:r.map(i=>n.jsx("div",{style:tt.sceneTree,title:`${i.label||"Focus"} · ${Ge(i.actual_min||i.duration_min)}`,children:n.jsx(Ha,{species:i.tree,progress:1,size:s(i.actual_min||i.duration_min)})},i.id))}),o>0&&n.jsxs("div",{style:tt.overflow,children:["+",o," more trees"]})]})}function Ai({title:t,hint:e,children:r}){return n.jsxs("div",{style:tt.card,children:[n.jsxs("div",{style:tt.cardHead,children:[n.jsx("div",{style:tt.cardTitle,children:t}),e&&n.jsx("div",{style:tt.cardHint,children:e})]}),r]})}function bg(){return n.jsx("div",{style:tt.empty,children:"No focus sessions in this period yet. 🌱"})}function Sh({items:t}){const e=Math.max(1,...t.map(r=>r.value));return n.jsx("div",{style:tt.tbWrap,children:t.map(r=>n.jsxs("div",{style:tt.tbRow,children:[n.jsx("div",{style:tt.tbLbl,children:r.label}),n.jsx("div",{style:tt.tbTrack,children:n.jsx("div",{style:{...tt.tbBar,width:`${r.value/e*100}%`,background:r.color}})}),n.jsx("div",{style:tt.tbVal,children:Ge(r.value)})]},r.label))})}const tt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"20px 16px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:720,margin:"0 auto"},topbar:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},back:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},h1:{fontSize:20,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},rangeBar:{display:"flex",gap:6,background:"var(--surface)",padding:5,borderRadius:12,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},rangeBtn:{flex:1,border:"none",background:"none",padding:"9px 0",borderRadius:8,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},rangeOn:{background:"var(--accent-strong)",color:"#fff"},headline:{display:"flex",gap:12,marginBottom:16},bigStat:{flex:1,background:"var(--surface)",borderRadius:14,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},bigVal:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em"},bigLbl:{fontSize:12,color:"var(--text-3)",marginTop:3,fontWeight:500},card:{background:"var(--surface)",borderRadius:16,padding:"18px 18px 20px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},cardHead:{marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardHint:{fontSize:12,color:"var(--text-3)",marginTop:2},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"24px 0"},scene:{display:"flex",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"center",gap:"0 2px",padding:"14px 8px 6px",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,minHeight:110,border:"1px solid var(--border)"},sceneTree:{lineHeight:0},sceneEmpty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"34px 0",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,border:"1px solid var(--border)"},overflow:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",marginTop:6,fontWeight:600},forestNumber:{textAlign:"center",marginTop:12,fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},vcPlot:{position:"relative",height:180,paddingLeft:30},vcGridRow:{position:"absolute",left:0,right:0,display:"flex",alignItems:"center",height:0},vcYLabel:{width:26,marginRight:4,textAlign:"right",fontSize:9,color:"var(--text-3)",fontWeight:600,flexShrink:0},vcGridLine:{flex:1,height:1,background:"#EEEBE4"},vcBars:{position:"absolute",left:30,right:0,top:0,bottom:0,display:"flex",alignItems:"flex-end",gap:1},vcCell:{flex:1,height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"center"},vcBar:{width:"72%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",transition:"height 0.3s"},vcXAxis:{display:"flex",marginLeft:30,marginTop:4},vcXCell:{flex:1,textAlign:"center",fontSize:8.5,color:"var(--text-3)",fontWeight:600,overflow:"hidden"},vcYTitle:{textAlign:"center",fontSize:9.5,color:"var(--text-3)",marginTop:6,letterSpacing:"0.06em",textTransform:"uppercase",fontWeight:600},donutWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap",justifyContent:"center"},donutCenterTop:{fontSize:16,fontWeight:800,fill:"var(--text)",fontFamily:"'Fraunces',Georgia,serif"},donutCenterSub:{fontSize:9,fill:"#9A968C",textTransform:"uppercase",letterSpacing:"0.08em"},legend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:11,height:11,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},legendVal:{fontSize:12,color:"var(--text-3)",fontWeight:600,flexShrink:0},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:56,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},jh=[15,30,45,60,90],Di="anvil_grove_active",pg=t=>`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`,Rs=t=>t>=60?`${Math.floor(t/60)}h ${t%60}m`:`${t}m`;function Ch(){const[t,e]=y.useState("timer"),[r,o]=y.useState("idle"),[s,i]=y.useState(15),[l,a]=y.useState(!1),[d,g]=y.useState(""),[m,v]=y.useState(fo),[p,S]=y.useState(()=>localStorage.getItem("anvil_grove_deepfocus")!=="0"),[w,j]=y.useState(15*60),[C,b]=y.useState({sessions:[],stats:null}),u=y.useRef(null),c=y.useRef(null),k=y.useRef(!1),x=y.useCallback(async()=>{try{b(await U.getFocus())}catch{}},[]),T=y.useCallback(async($,nt)=>{if(!k.current){k.current=!0,localStorage.removeItem(Di);try{await U.createFocus({label:d.trim()||null,tree:m,duration_min:s,actual_min:nt,completed:$,started_at:c.current,ended_at:new Date().toISOString()})}catch{}x()}},[d,m,s,x]),R=y.useCallback(()=>{if(r!=="running")return;const $=c.current?Math.round((Date.now()-new Date(c.current).getTime())/6e4):0;o("failed"),T(!1,Math.max(0,Math.min(s,$)))},[r,s,T]),F=y.useCallback(()=>{o("done"),j(0),T(!0,s)},[s,T]);y.useEffect(()=>{x();const $=JSON.parse(localStorage.getItem(Di)||"null");if($&&$.endTime){const nt=Math.round(($.endTime-Date.now())/1e3);i($.duration),g($.label||""),v($.tree||"oak"),u.current=$.endTime,c.current=$.startedAt,nt>0?(j(nt),o("running")):(o("done"),k.current=!1,T(!0,$.duration))}},[]),y.useEffect(()=>{if(r!=="running")return;const $=()=>{const h=Math.round((u.current-Date.now())/1e3);if(h<=0){F();return}j(h)};$();const nt=setInterval($,250);return()=>clearInterval(nt)},[r,F]),y.useEffect(()=>{if(r!=="running"||!p)return;const $=()=>{document.hidden&&R()};return document.addEventListener("visibilitychange",$),()=>document.removeEventListener("visibilitychange",$)},[r,p,R]);const E=()=>S($=>{const nt=!$;return localStorage.setItem("anvil_grove_deepfocus",nt?"1":"0"),nt}),W=()=>{k.current=!1,c.current=new Date().toISOString(),u.current=Date.now()+s*60*1e3,localStorage.setItem(Di,JSON.stringify({endTime:u.current,duration:s,label:d,tree:m,startedAt:c.current})),j(s*60),o("running")},et=()=>{o("idle"),j(s*60)},M=$=>{a(!1),i($),j($*60)},f=()=>{l||(a(!0),i(5),j(5*60))},_=$=>{if(a(!0),$===""){i(0),j(0);return}const nt=Math.max(1,Math.min(600,parseInt($,10)||0));i(nt),j(nt*60)},N=s*60,H=r==="running"?1-w/N:r==="done"?1:0,z=130,B=2*Math.PI*z,V=B*(1-(r==="running"?H:r==="done"?1:0)),K=C.stats;return t==="stats"?n.jsx(yh,{sessions:C.sessions,onBack:()=>e("timer")}):n.jsxs("div",{style:ot.page,children:[n.jsxs("div",{style:ot.head,children:[n.jsx("div",{style:ot.eyebrow,children:"Anvil · Grove"}),n.jsx("h1",{style:ot.h1,children:"Grove"}),n.jsx("div",{style:ot.subhead,children:"Plant a tree, stay focused, grow your grove."}),n.jsxs("button",{onClick:()=>e("stats"),style:ot.insightsBtn,disabled:r==="running",children:[n.jsx(Vm,{size:15})," Insights"]})]}),K&&n.jsxs("div",{style:ot.statRow,children:[n.jsx(Vo,{label:"Today",value:Rs(K.today_minutes)}),n.jsx(Vo,{label:"Trees",value:K.trees}),n.jsx(Vo,{label:"Streak",value:`${K.streak}d`}),n.jsx(Vo,{label:"Success",value:`${K.success_rate}%`})]}),n.jsxs("div",{style:ot.stage,children:[n.jsxs("div",{style:ot.ringWrap,children:[n.jsxs("svg",{width:"300",height:"300",viewBox:"0 0 300 300",style:{position:"absolute",inset:0},children:[n.jsx("circle",{cx:"150",cy:"150",r:z,fill:"none",stroke:"var(--border)",strokeWidth:"10"}),n.jsx("circle",{cx:"150",cy:"150",r:z,fill:"none",stroke:r==="failed"?"#C2536B":"#4C9A6B",strokeWidth:"10",strokeLinecap:"round",strokeDasharray:B,strokeDashoffset:V,transform:"rotate(-90 150 150)",style:{transition:"stroke-dashoffset 0.4s linear"}})]}),n.jsx("div",{style:ot.ringInner,children:n.jsx(Ha,{species:m,progress:r==="idle"?0:H,withered:r==="failed",size:170})})]}),r==="idle"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:ot.timeBig,children:pg(s*60)}),n.jsxs("div",{style:ot.controls,children:[n.jsxs("div",{style:ot.chips,children:[jh.map($=>n.jsxs("button",{onClick:()=>M($),style:{...ot.chip,...!l&&s===$?ot.chipOn:{}},children:[$,"m"]},$)),n.jsx("button",{onClick:f,style:{...ot.chip,...l?ot.chipOn:{}},children:"Custom"})]}),l&&n.jsxs("div",{style:ot.customRow,children:[n.jsx("input",{type:"number",min:"1",max:"600",inputMode:"numeric",autoFocus:!0,value:s||"",onChange:$=>_($.target.value),placeholder:"e.g. 50",style:ot.customInput}),n.jsx("span",{style:ot.customUnit,children:"minutes"})]}),n.jsx("input",{value:d,onChange:$=>g($.target.value),placeholder:"What are you focusing on? (optional)",style:ot.input,maxLength:60}),n.jsx("div",{style:ot.treePick,children:Object.entries(pe).map(([$,nt])=>n.jsxs("button",{onClick:()=>v($),title:nt.label,style:{...ot.treeBtn,...m===$?{borderColor:nt.leaf,background:nt.leaf+"1A"}:{}},children:[n.jsx("span",{style:{...ot.treeDot,background:nt.leaf}}),nt.label]},$))}),n.jsxs("button",{onClick:E,style:ot.toggleRow,children:[n.jsxs("div",{style:{textAlign:"left"},children:[n.jsx("div",{style:ot.toggleTitle,children:"Deep Focus"}),n.jsx("div",{style:ot.toggleHint,children:p?"Leaving the app kills the tree":"Tree survives until you give up"})]}),n.jsx("div",{style:{...ot.switch,...p?ot.switchOn:{}},children:n.jsx("div",{style:{...ot.knob,...p?ot.knobOn:{}}})})]}),n.jsx("button",{onClick:W,disabled:s<1,style:{...ot.plantBtn,...s<1?{opacity:.5,cursor:"not-allowed"}:{}},children:"Plant tree"})]})]}),r==="running"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:ot.timeBig,children:pg(w)}),n.jsx("div",{style:ot.focusLabel,children:d.trim()||"Focusing…"}),n.jsx("div",{style:p?ot.warn:ot.warnSoft,children:p?"⚠ Deep Focus on — leaving this app will kill your tree.":"🌿 Relaxed mode — only Give up ends this session."}),n.jsx("button",{onClick:R,style:ot.giveUp,children:"Give up"})]}),r==="done"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:ot.resultTitle,children:["🌳 You grew a ",pe[m].label," tree!"]}),n.jsxs("div",{style:ot.resultSub,children:[Rs(s)," of focus added to your grove."]}),n.jsx("button",{onClick:et,style:ot.plantBtn,children:"Plant another"})]}),r==="failed"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{...ot.resultTitle,color:"#C2536B"},children:"Your tree withered."}),n.jsx("div",{style:ot.resultSub,children:"You left before the timer finished. Try again?"}),n.jsx("button",{onClick:et,style:ot.plantBtn,children:"Try again"})]})]}),n.jsx(Ih,{sessions:C.sessions,onDelete:async $=>{await U.deleteFocus($),x()}})]})}function Vo({label:t,value:e}){return n.jsxs("div",{style:ot.stat,children:[n.jsx("div",{style:ot.statValue,children:e}),n.jsx("div",{style:ot.statLabel,children:t})]})}function Ih({sessions:t,onDelete:e}){const r=t.filter(l=>l.completed);if(r.length===0)return n.jsx("div",{style:ot.forestEmpty,children:"Your grove is empty. Plant your first tree above. 🌱"});const o={};for(const l of r){const a=(l.started_at||l.created_at||"").slice(0,10);(o[a]||(o[a]=[])).push(l)}const s=Object.keys(o).sort().reverse(),i=l=>{const a=new Date().toISOString().slice(0,10);return l===a?"Today":new Date(l+"T00:00").toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})};return n.jsxs("div",{style:ot.forest,children:[n.jsxs("div",{style:ot.forestHead,children:["Your Grove · ",r.length," trees"]}),s.map(l=>n.jsxs("div",{style:ot.daySection,children:[n.jsxs("div",{style:ot.dayLabel,children:[i(l)," · ",o[l].length]}),n.jsx("div",{style:ot.treeGrid,children:o[l].map(a=>n.jsxs("div",{style:ot.treeCard,title:`${a.label||"Focus"} · ${Rs(a.actual_min)}`,onDoubleClick:()=>e(a.id),children:[n.jsx(ch,{species:a.tree}),n.jsx("div",{style:ot.treeCardMin,children:Rs(a.actual_min||a.duration_min)}),a.label&&n.jsx("div",{style:ot.treeCardLabel,children:a.label})]},a.id))})]},l)),n.jsx("div",{style:ot.forestHint,children:"Double-tap a tree to remove it."})]})}const ot={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:820,margin:"0 auto"},head:{marginBottom:16,textAlign:"center"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},insightsBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginTop:12},statRow:{display:"flex",gap:10,justifyContent:"center",marginBottom:18,flexWrap:"wrap"},stat:{background:"var(--surface)",borderRadius:12,padding:"10px 18px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",minWidth:78},statValue:{fontSize:19,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},statLabel:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},stage:{background:"var(--surface)",borderRadius:18,padding:"28px 24px 32px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",display:"flex",flexDirection:"column",alignItems:"center",marginBottom:26},ringWrap:{position:"relative",width:300,height:300,display:"grid",placeItems:"center"},ringInner:{position:"relative",zIndex:1,display:"grid",placeItems:"center"},timeBig:{fontSize:40,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:6},focusLabel:{fontSize:14,color:"var(--text-2)",marginTop:2,fontWeight:500},warn:{fontSize:12,color:"#C2773B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},warnSoft:{fontSize:12,color:"#4C9A6B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},toggleRow:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:12,padding:"10px 14px",cursor:"pointer",fontFamily:"inherit",width:"100%"},toggleTitle:{fontSize:14,fontWeight:700,color:"var(--text)"},toggleHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},switch:{width:42,height:24,borderRadius:12,background:"var(--border)",flexShrink:0,padding:2,transition:"background 0.18s",boxSizing:"border-box"},switchOn:{background:"#4C9A6B"},knob:{width:20,height:20,borderRadius:"50%",background:"var(--surface)",boxShadow:"0 1px 2px rgba(0,0,0,0.2)",transform:"translateX(0)",transition:"transform 0.18s"},knobOn:{transform:"translateX(18px)"},controls:{width:"100%",maxWidth:380,display:"flex",flexDirection:"column",gap:14,marginTop:8},chips:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},chip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},customRow:{display:"flex",alignItems:"center",justifyContent:"center",gap:8},customInput:{border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:15,fontWeight:700,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center",width:100},customUnit:{fontSize:13,color:"var(--text-3)",fontWeight:600},input:{border:"1px solid var(--border)",borderRadius:10,padding:"11px 13px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center"},treePick:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},treeBtn:{display:"flex",alignItems:"center",gap:6,border:"1.5px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},treeDot:{width:10,height:10,borderRadius:"50%"},plantBtn:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},giveUp:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",padding:"11px 26px",borderRadius:11,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:18},resultTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginTop:14,textAlign:"center"},resultSub:{fontSize:13.5,color:"var(--text-3)",marginTop:6,marginBottom:18,textAlign:"center"},forest:{background:"var(--surface)",borderRadius:16,padding:"20px 22px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},forestHead:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},forestEmpty:{background:"var(--surface)",borderRadius:16,padding:"40px 20px",textAlign:"center",color:"var(--text-3)",fontSize:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},daySection:{marginBottom:16},dayLabel:{fontSize:12,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:8},treeGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(80px,1fr))",gap:8},treeCard:{display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 4px",borderRadius:10,cursor:"pointer",background:"var(--surface-2)"},treeCardMin:{fontSize:12,fontWeight:700,color:"#4C9A6B",marginTop:-4},treeCardLabel:{fontSize:10.5,color:"var(--text-3)",marginTop:2,textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:76},forestHint:{fontSize:11,color:"var(--text-3)",textAlign:"center",marginTop:6}},Nl=[{code:"INR",symbol:"₹",locale:"en-IN",label:"Indian Rupee"},{code:"USD",symbol:"$",locale:"en-US",label:"US Dollar"},{code:"EUR",symbol:"€",locale:"de-DE",label:"Euro"},{code:"GBP",symbol:"£",locale:"en-GB",label:"British Pound"},{code:"JPY",symbol:"¥",locale:"ja-JP",label:"Japanese Yen"},{code:"AED",symbol:"د.إ",locale:"en-AE",label:"UAE Dirham"},{code:"AUD",symbol:"A$",locale:"en-AU",label:"Australian Dollar"},{code:"CAD",symbol:"C$",locale:"en-CA",label:"Canadian Dollar"},{code:"SGD",symbol:"S$",locale:"en-SG",label:"Singapore Dollar"}],mg="INR",db="anvil_currency",Ga=t=>Nl.find(e=>e.code===t)||Nl[0];function ho(){try{return localStorage.getItem(db)||mg}catch{return mg}}function fg(t){try{localStorage.setItem(db,t)}catch{}return window.dispatchEvent(new CustomEvent("anvil-currency",{detail:t})),t}function Ws(t,e){const r=Ga(e||ho()),o=Math.round(Number(t)||0);return r.symbol+o.toLocaleString(r.locale)}function zh(t,e){const r=Ga(e||ho()),o=Math.round(Number(t)||0),s=Math.abs(o);return r.code==="INR"?s>=1e7?r.symbol+(o/1e7).toFixed(s>=1e8?0:1)+"Cr":s>=1e5?r.symbol+(o/1e5).toFixed(s>=1e6?0:1)+"L":s>=1e3?r.symbol+(o/1e3).toFixed(s>=1e4?0:1)+"K":r.symbol+o:s>=1e9?r.symbol+(o/1e9).toFixed(1)+"B":s>=1e6?r.symbol+(o/1e6).toFixed(1)+"M":s>=1e3?r.symbol+(o/1e3).toFixed(1)+"K":r.symbol+o}function gb(){const[t,e]=y.useState(ho());return y.useEffect(()=>{const r=o=>e(o.detail||ho());return window.addEventListener("anvil-currency",r),()=>window.removeEventListener("anvil-currency",r)},[]),Ga(t)}const hg="grove_rates",Ri=Object.keys(pe),Be=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,vg=t=>{const e=new Date(t);e.setHours(0,0,0,0);const r=(e.getDay()+6)%7;return e.setDate(e.getDate()-r),e},yg=t=>{const e=Math.floor(t/60),r=t%60;return e&&r?`${e}h ${r}m`:e?`${e}h`:`${r}m`},Th=[{id:"week",label:"This week"},{id:"month",label:"This month"},{id:"last7",label:"Last 7 days"},{id:"year",label:"This year"}];function Wi(t){const e=new Date;if(t==="week")return[Be(vg(e)),Be(e)];if(t==="month")return[Be(new Date(e.getFullYear(),e.getMonth(),1)),Be(e)];if(t==="last7"){const r=new Date(e);return r.setDate(r.getDate()-6),[Be(r),Be(e)]}return t==="year"?[Be(new Date(e.getFullYear(),0,1)),Be(e)]:[Be(vg(e)),Be(e)]}function Eh(){const t=gb(),e=x=>Ws(x,t.code),[r,o]=y.useState({}),[s,i]=y.useState([]),[l,a]=y.useState("week"),[d,g]=y.useState(()=>Wi("week")[0]),[m,v]=y.useState(()=>Wi("week")[1]),[p,S]=y.useState(!1);y.useEffect(()=>{(async()=>{try{const[x,T]=await Promise.all([U.getFocus(),U.getSetting(hg)]);i(x.sessions||[]),o(T.value||{})}catch{}S(!0)})()},[]);const w=x=>{a(x);const[T,R]=Wi(x);g(T),v(R)},j=(x,T)=>{a(""),x==="from"?g(T):v(T)},C=(x,T)=>{const R=Math.max(0,parseFloat(T)||0),F={...r,[x]:R};o(F),U.setSetting(hg,F).catch(()=>{})},b=y.useMemo(()=>{const x=d,T=m,R={};return Ri.forEach(F=>R[F]=0),s.filter(F=>F.completed).forEach(F=>{const E=(F.started_at||F.created_at||"").slice(0,10);if(E<x||E>T)return;const W=pe[F.tree]?F.tree:fo;R[W]+=F.actual_min||0}),Ri.map(F=>{const E=R[F],W=r[F]||0;return{pillar:F,minutes:E,rate:W,cost:E/60*W,...pe[F]}}).sort((F,E)=>E.cost-F.cost||E.minutes-F.minutes)},[s,r,d,m]),u=b.reduce((x,T)=>x+T.cost,0),c=b.reduce((x,T)=>x+T.minutes,0),k=Math.max(1,...b.map(x=>x.cost));return n.jsxs("div",{style:dt.page,children:[n.jsxs("div",{style:dt.head,children:[n.jsx("div",{style:dt.eyebrow,children:"Anvil · Worth"}),n.jsx("h1",{style:dt.h1,children:"Worth"}),n.jsx("div",{style:dt.subhead,children:"What your focused time is worth, by pillar."})]}),n.jsxs("div",{style:dt.hero,children:[n.jsx("div",{style:dt.heroVal,children:e(u)}),n.jsxs("div",{style:dt.heroSub,children:[yg(c)," focused · ",d," → ",m]})]}),n.jsxs("div",{style:dt.card,children:[n.jsx("div",{style:dt.cardTitle,children:"Period"}),n.jsx("div",{style:dt.presetRow,children:Th.map(x=>n.jsx("button",{onClick:()=>w(x.id),style:{...dt.preset,...l===x.id?dt.presetOn:{}},children:x.label},x.id))}),n.jsxs("div",{style:dt.dateRow,children:[n.jsxs("label",{style:dt.dateField,children:[n.jsx("span",{style:dt.dateLbl,children:"From"}),n.jsx("input",{type:"date",value:d,max:m,onChange:x=>j("from",x.target.value),style:dt.dateInput})]}),n.jsx("span",{style:dt.dateArrow,children:"→"}),n.jsxs("label",{style:dt.dateField,children:[n.jsx("span",{style:dt.dateLbl,children:"To"}),n.jsx("input",{type:"date",value:m,min:d,onChange:x=>j("to",x.target.value),style:dt.dateInput})]})]})]}),n.jsxs("div",{style:dt.card,children:[n.jsx("div",{style:dt.cardTitle,children:"Breakdown"}),p?c===0?n.jsx("div",{style:dt.muted,children:"No focus sessions in this period."}):n.jsxs("div",{style:dt.rows,children:[b.map(x=>n.jsxs("div",{style:dt.row,children:[n.jsxs("div",{style:dt.rowTop,children:[n.jsx("span",{style:{...dt.dot,background:x.leaf}}),n.jsx("span",{style:dt.rowName,children:x.label}),n.jsx("span",{style:dt.rowCost,children:e(x.cost)})]}),n.jsx("div",{style:dt.rowBarTrack,children:n.jsx("div",{style:{...dt.rowBar,width:`${x.cost/k*100}%`,background:x.leaf}})}),n.jsxs("div",{style:dt.rowMeta,children:[yg(x.minutes)," × ",e(x.rate),"/hr"]})]},x.pillar)),n.jsxs("div",{style:dt.totalRow,children:[n.jsx("span",{children:"Total"}),n.jsx("span",{style:dt.totalVal,children:e(u)})]})]}):n.jsx("div",{style:dt.muted,children:"Loading…"})]}),n.jsxs("div",{style:dt.card,children:[n.jsx("div",{style:dt.cardTitle,children:"Hourly rates"}),n.jsx("div",{style:dt.cardHint,children:"Set how much an hour of focus is worth for each pillar."}),n.jsx("div",{style:dt.rateGrid,children:Ri.map(x=>n.jsxs("div",{style:dt.rateRow,children:[n.jsx("span",{style:{...dt.dot,background:pe[x].leaf}}),n.jsx("span",{style:dt.rateName,children:pe[x].label}),n.jsxs("div",{style:dt.rateInputWrap,children:[n.jsx("span",{style:dt.rupeeSign,children:t.symbol}),n.jsx("input",{type:"number",min:"0",inputMode:"numeric",placeholder:"0",value:r[x]??"",onChange:T=>C(x,T.target.value),style:dt.rateInput}),n.jsx("span",{style:dt.perHr,children:"/hr"})]})]},x))})]})]})}const dt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},hero:{background:"linear-gradient(135deg,var(--accent-strong),var(--accent-2))",borderRadius:16,padding:"22px 24px",color:"#fff",marginBottom:16,textAlign:"center"},heroVal:{fontSize:38,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em"},heroSub:{fontSize:12.5,color:"var(--text-3)",marginTop:4},card:{background:"var(--surface)",borderRadius:16,padding:"18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},cardHint:{fontSize:12,color:"var(--text-3)",marginTop:-8,marginBottom:12},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},presetRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},preset:{border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:18,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},presetOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},dateRow:{display:"flex",alignItems:"flex-end",gap:10},dateField:{display:"flex",flexDirection:"column",gap:4,flex:1},dateLbl:{fontSize:11,color:"var(--text-2)",fontWeight:600},dateInput:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",outline:"none",width:"100%",boxSizing:"border-box"},dateArrow:{color:"var(--text-3)",paddingBottom:9},rows:{display:"flex",flexDirection:"column",gap:14},row:{},rowTop:{display:"flex",alignItems:"center",gap:8,marginBottom:6},dot:{width:11,height:11,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:14,fontWeight:600},rowCost:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},rowBarTrack:{height:8,background:"#F2F0EA",borderRadius:4,overflow:"hidden"},rowBar:{height:"100%",borderRadius:4,transition:"width 0.3s"},rowMeta:{fontSize:11.5,color:"var(--text-3)",marginTop:5,fontWeight:500},totalRow:{display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid var(--border)",paddingTop:12,marginTop:2,fontSize:14,fontWeight:700},totalVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},rateGrid:{display:"flex",flexDirection:"column",gap:10},rateRow:{display:"flex",alignItems:"center",gap:8},rateName:{flex:1,fontSize:14,fontWeight:600},rateInputWrap:{display:"flex",alignItems:"center",gap:3,border:"1px solid var(--border)",borderRadius:9,padding:"4px 10px",background:"var(--surface-2)"},rupeeSign:{fontSize:14,color:"var(--text-2)",fontWeight:600},rateInput:{border:"none",background:"none",outline:"none",width:64,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},perHr:{fontSize:12,color:"var(--text-3)",fontWeight:600}};function Bh({onAuthed:t}){const[e,r]=y.useState("login"),[o,s]=y.useState(""),[i,l]=y.useState(""),[a,d]=y.useState(""),[g,m]=y.useState(""),[v,p]=y.useState(!1),S=e==="register",w=async j=>{if(j.preventDefault(),m(""),!i.trim()||!a){m("Email and password are required.");return}if(S&&a.length<6){m("Password must be at least 6 characters.");return}p(!0);try{const C=S?await U.register({name:o,email:i,password:a}):await U.login({email:i,password:a});xf(C.token),t(C.user)}catch(C){m(C.message||"Something went wrong.")}finally{p(!1)}};return n.jsx("div",{style:Mt.page,children:n.jsxs("form",{style:Mt.card,onSubmit:w,children:[n.jsxs("div",{style:Mt.brand,children:[n.jsx("div",{style:Mt.logo,children:"B"}),n.jsx("span",{style:Mt.brandName,children:"Anvil"})]}),n.jsx("h1",{style:Mt.title,children:S?"Create your account":"Welcome back"}),n.jsx("p",{style:Mt.sub,children:S?"Start forging your days.":"Sign in to continue."}),S&&n.jsxs("label",{style:Mt.field,children:[n.jsx("span",{style:Mt.label,children:"Name"}),n.jsx("input",{value:o,onChange:j=>s(j.target.value),placeholder:"Your name",style:Mt.input,autoFocus:!0})]}),n.jsxs("label",{style:Mt.field,children:[n.jsx("span",{style:Mt.label,children:"Email"}),n.jsx("input",{type:"email",value:i,onChange:j=>l(j.target.value),placeholder:"you@example.com",style:Mt.input,autoFocus:!S})]}),n.jsxs("label",{style:Mt.field,children:[n.jsx("span",{style:Mt.label,children:"Password"}),n.jsx("input",{type:"password",value:a,onChange:j=>d(j.target.value),placeholder:"••••••••",style:Mt.input})]}),g&&n.jsx("div",{style:Mt.error,children:g}),n.jsx("button",{type:"submit",disabled:v,style:{...Mt.submit,...v?{opacity:.6}:{}},children:v?"Please wait…":S?"Create account":"Sign in"}),n.jsxs("div",{style:Mt.switch,children:[S?"Already have an account?":"New here?"," ",n.jsx("button",{type:"button",onClick:()=>{r(S?"login":"register"),m("")},style:Mt.link,children:S?"Sign in":"Create one"})]})]})})}const Mt={page:{minHeight:"100vh",display:"grid",placeItems:"center",background:"var(--bg)",fontFamily:"'Inter',system-ui,sans-serif",padding:20},card:{width:"100%",maxWidth:380,background:"var(--surface)",borderRadius:16,padding:"32px 28px",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",display:"flex",flexDirection:"column"},brand:{display:"flex",alignItems:"center",gap:9,marginBottom:20},logo:{width:32,height:32,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},brandName:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},title:{fontSize:22,fontWeight:700,margin:"0 0 4px",fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},sub:{fontSize:13.5,color:"var(--text-3)",margin:"0 0 22px"},field:{display:"flex",flexDirection:"column",gap:5,marginBottom:14},label:{fontSize:12,fontWeight:600,color:"var(--text-2)"},input:{border:"1px solid var(--border)",borderRadius:9,padding:"11px 12px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)"},error:{background:"rgba(194,83,107,0.10)",color:"#C2536B",fontSize:13,padding:"9px 12px",borderRadius:8,marginBottom:14,fontWeight:500},submit:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"12px",borderRadius:10,fontSize:14.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},switch:{fontSize:13,color:"var(--text-2)",textAlign:"center",marginTop:18},link:{border:"none",background:"none",color:"#3A7CA5",fontWeight:700,cursor:"pointer",fontFamily:"inherit",fontSize:13,padding:0}},xg=["Salary","Stocks","Business","Interest","Rent","Gift","Other"],kg=["Bills","EMI","Rent","Food","Shopping","Transport","Health","Entertainment","Education","Other"],Fh={Salary:"#4C9A6B",Stocks:"#3A7CA5",Business:"#C9A227",Interest:"#8268B0",Gift:"#C2773B",Bills:"#C2536B",EMI:"#A23E57",Food:"#E08E45",Shopping:"#8268B0",Transport:"#3A7CA5",Health:"#4C9A6B",Entertainment:"#C9A227",Education:"#5B7C99",Rent:"#5B8C5A",Other:"#9A968C"},cb=t=>Fh[t]||"#9A968C",We="#3E9E6B",Me="#D1556E",Ln=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,Xn=Ln(new Date),Ah=[{id:"month",label:"This month"},{id:"last",label:"Last month"},{id:"year",label:"This year"},{id:"all",label:"All time"}];function Dh(t){const e=new Date;return t==="month"?[Ln(new Date(e.getFullYear(),e.getMonth(),1)),Xn]:t==="last"?[Ln(new Date(e.getFullYear(),e.getMonth()-1,1)),Ln(new Date(e.getFullYear(),e.getMonth(),0))]:t==="year"?[Ln(new Date(e.getFullYear(),0,1)),Xn]:["0000-01-01","9999-12-31"]}function Rh(){const t=gb(),[e,r]=y.useState("overview"),[o,s]=y.useState([]),[i,l]=y.useState(!1),a=y.useCallback(()=>U.getTxns().then(g=>{s(g),l(!0)}).catch(()=>l(!0)),[]);y.useEffect(()=>{a()},[a]);const d=g=>Ws(g,t.code);return n.jsxs("div",{style:I.page,children:[n.jsxs("div",{style:I.head,children:[n.jsx("div",{style:I.eyebrow,children:"Anvil · Vault"}),n.jsx("h1",{style:I.h1,children:"Vault"}),n.jsx("div",{style:I.subhead,children:"Your money — what comes in, what goes out, and where it's headed."})]}),n.jsx("div",{style:I.tabs,children:[["overview","Overview",Ym],["money","Money",hf],["calc","Calculators",Um]].map(([g,m,v])=>n.jsxs("button",{onClick:()=>r(g),style:{...I.tab,...e===g?I.tabOn:{}},children:[n.jsx(v,{size:15})," ",m]},g))}),e==="overview"&&n.jsx(Wh,{txns:o,loaded:i,money:d,cur:t}),e==="money"&&n.jsx(_h,{txns:o,reload:a,money:d}),e==="calc"&&n.jsx(Lh,{money:d,cur:t})]})}function Wh({txns:t,loaded:e,money:r,cur:o}){const[s,i]=y.useState("month"),[l,a]=Dh(s),d=y.useMemo(()=>t.filter(j=>j.date>=l&&j.date<=a),[t,l,a]),g=d.filter(j=>j.kind==="income"),m=d.filter(j=>j.kind==="expense"),v=g.reduce((j,C)=>j+C.amount,0),p=m.reduce((j,C)=>j+C.amount,0),S=v-p,w=j=>{const C={};return j.forEach(b=>{C[b.category]=(C[b.category]||0)+b.amount}),Object.entries(C).map(([b,u])=>({category:b,amount:u})).sort((b,u)=>u.amount-b.amount)};return n.jsxs(n.Fragment,{children:[n.jsx("div",{style:I.presetRow,children:Ah.map(j=>n.jsx("button",{onClick:()=>i(j.id),style:{...I.preset,...s===j.id?I.presetOn:{}},children:j.label},j.id))}),n.jsxs("div",{style:I.sumGrid,children:[n.jsx(Mi,{icon:n.jsx(Al,{size:16}),label:"Income",value:r(v),color:We}),n.jsx(Mi,{icon:n.jsx(Dl,{size:16}),label:"Expenses",value:r(p),color:Me}),n.jsx(Mi,{icon:S>=0?n.jsx(sb,{size:16}):n.jsx(ob,{size:16}),label:"Net savings",value:r(S),color:S>=0?We:Me})]}),e?d.length===0?n.jsx("div",{style:I.card,children:n.jsxs("div",{style:I.muted,children:["No transactions in this period. Add some under the ",n.jsx("b",{children:"Money"})," tab."]})}):n.jsxs(n.Fragment,{children:[n.jsx(Mh,{totalIn:v,totalOut:p}),n.jsxs("div",{style:I.twoCol,children:[n.jsx(wg,{title:"Incoming",subtitle:"Where your money comes from",total:v,data:w(g),accent:We,cur:o}),n.jsx(wg,{title:"Outgoing",subtitle:"Where your money goes",total:p,data:w(m),accent:Me,cur:o})]})]}):n.jsx("div",{style:I.muted,children:"Loading…"})]})}function Mi({icon:t,label:e,value:r,color:o}){return n.jsxs("div",{style:I.sumCard,children:[n.jsx("div",{style:{...I.sumIcon,color:o,background:o+"1A"},children:t}),n.jsx("div",{style:I.sumLabel,children:e}),n.jsx("div",{style:{...I.sumVal,color:o},children:r})]})}function wg({title:t,subtitle:e,total:r,data:o,accent:s,cur:i}){let l=0;const a=o.map(g=>{const m=r>0?l/r*100:0;l+=g.amount;const v=r>0?l/r*100:0;return{...g,start:m,end:v,color:cb(g.category),pct:r>0?g.amount/r*100:0}}),d=a.length?`conic-gradient(${a.map(g=>`${g.color} ${g.start}% ${g.end}%`).join(", ")})`:"var(--surface-2)";return n.jsxs("div",{style:I.card,children:[n.jsxs("div",{style:I.cardTitleRow,children:[n.jsxs("div",{children:[n.jsx("div",{style:{...I.cardTitle,color:s},children:t}),n.jsx("div",{style:I.cardSub,children:e})]}),n.jsx("div",{style:{...I.cardTotal,color:s},children:Ws(r,i.code)})]}),o.length===0?n.jsx("div",{style:I.muted,children:"Nothing logged."}):n.jsxs("div",{style:I.pieWrap,children:[n.jsxs("div",{style:I.pieChart,children:[n.jsx("div",{style:{...I.pieDisc,background:d}}),n.jsxs("div",{style:I.pieHole,children:[n.jsx("span",{style:I.pieHoleVal,children:zh(r,i.code)}),n.jsx("span",{style:I.pieHoleLbl,children:"total"})]})]}),n.jsx("div",{style:I.pieLegend,children:a.map(g=>n.jsxs("div",{style:I.legendRow,children:[n.jsx("span",{style:{...I.dot,background:g.color}}),n.jsx("span",{style:I.legendName,children:g.category}),n.jsxs("span",{style:I.legendPct,children:[Math.round(g.pct),"%"]}),n.jsx("span",{style:I.legendAmt,children:Ws(g.amount,i.code)})]},g.category))})]})]})}function Mh({totalIn:t,totalOut:e}){const r=t-e,o=t>0?r/t:0,s=t===0?0:Math.max(0,Math.min(100,Math.round(50+o*100)));let i,l,a;t===0?(i="No income logged",l="#9A968C",a="Add your income to see your financial health."):o>=.3?(i="Excellent",l="#3E9E6B",a="You're saving 30%+ of income — keep investing the surplus."):o>=.2?(i="Healthy",l="#4C9A6B",a="Solid savings rate. Consider automating a SIP with the surplus."):o>=.1?(i="Okay",l="#C9A227",a="Decent, but aim for 20%+. Trim your biggest expense category."):o>=0?(i="Tight",l="#C2773B",a="You're saving very little. Review recurring bills and EMIs."):(i="Overspending",l="#D1556E",a="You're spending more than you earn. Cut back to avoid debt.");const d=t>0?Math.min(100,Math.round(e/t*100)):0;return n.jsxs("div",{style:I.card,children:[n.jsxs("div",{style:I.cardTitleRow,children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx(qm,{size:18,color:l}),n.jsxs("div",{children:[n.jsx("div",{style:I.cardTitle,children:"Financial health"}),n.jsx("div",{style:I.cardSub,children:"Based on your savings rate this period"})]})]}),n.jsxs("div",{style:{textAlign:"right"},children:[n.jsx("div",{style:{...I.healthScore,color:l},children:t===0?"—":s}),n.jsx("div",{style:{...I.healthStatus,color:l},children:i})]})]}),n.jsx("div",{style:I.gaugeTrack,children:n.jsx("div",{style:{...I.gaugeFill,width:`${t===0?0:s}%`,background:l}})}),n.jsxs("div",{style:I.healthStats,children:[n.jsxs("div",{style:I.healthStat,children:[n.jsxs("span",{style:I.healthStatV,children:[t>0?Math.round(o*100):0,"%"]}),n.jsx("span",{style:I.healthStatL,children:"Savings rate"})]}),n.jsxs("div",{style:I.healthStat,children:[n.jsxs("span",{style:I.healthStatV,children:[d,"%"]}),n.jsx("span",{style:I.healthStatL,children:"of income spent"})]})]}),n.jsx("div",{style:{...I.tip,borderColor:l+"55",background:l+"12",color:l},children:a})]})}function _h({txns:t,reload:e,money:r}){const[o,s]=y.useState("expense"),[i,l]=y.useState(""),[a,d]=y.useState("Bills"),[g,m]=y.useState(Xn),[v,p]=y.useState(""),[S,w]=y.useState(null),{deleteItem:j,toasts:C,handleUndo:b,handleDismiss:u}=kn(U.deleteTxn,U.restoreTxn,e),c=o==="income"?xg:kg,k=M=>{s(M),d(M==="income"?"Salary":"Bills")},x=async()=>{const M=parseFloat(i);!M||M<=0||(await U.createTxn({kind:o,category:a,amount:M,note:v.trim(),date:g}),l(""),p(""),e())},T=M=>w({id:M.id,kind:M.kind,amount:String(M.amount),category:M.category,date:M.date,note:M.note||""}),R=(S==null?void 0:S.kind)==="income"?xg:kg,F=M=>w(f=>({...f,kind:M,category:R.includes(f.category)?f.category:M==="income"?"Salary":"Bills"})),E=async()=>{const M=parseFloat(S.amount);!M||M<=0||(await U.updateTxn(S.id,{kind:S.kind,category:S.category,amount:M,note:S.note.trim(),date:S.date}),w(null),e())},W=y.useMemo(()=>{const M={};return t.forEach(f=>{(M[f.date]=M[f.date]||[]).push(f)}),Object.entries(M).sort((f,_)=>_[0].localeCompare(f[0]))},[t]),et=M=>new Date(M+"T00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:I.card,children:[n.jsx("div",{style:I.cardTitle,children:"Add transaction"}),n.jsxs("div",{style:I.kindToggle,children:[n.jsxs("button",{onClick:()=>k("expense"),style:{...I.kindBtn,...o==="expense"?{background:Me,color:"#fff",borderColor:Me}:{}},children:[n.jsx(Dl,{size:15})," Expense"]}),n.jsxs("button",{onClick:()=>k("income"),style:{...I.kindBtn,...o==="income"?{background:We,color:"#fff",borderColor:We}:{}},children:[n.jsx(Al,{size:15})," Income"]})]}),n.jsxs("div",{style:I.formGrid,children:[n.jsx("input",{type:"number",inputMode:"decimal",placeholder:"Amount",value:i,onChange:M=>l(M.target.value),onKeyDown:M=>M.key==="Enter"&&x(),style:I.input,autoFocus:!0}),n.jsx("select",{value:a,onChange:M=>d(M.target.value),style:I.input,children:c.map(M=>n.jsx("option",{children:M},M))}),n.jsx("input",{type:"date",value:g,max:Xn,onChange:M=>m(M.target.value),style:I.input})]}),n.jsx("input",{placeholder:"Note (optional)",value:v,onChange:M=>p(M.target.value),onKeyDown:M=>M.key==="Enter"&&x(),style:{...I.input,marginTop:8}}),n.jsxs("button",{onClick:x,style:{...I.addBtn,background:o==="income"?We:Me},children:[n.jsx(ve,{size:15})," Add ",o]})]}),n.jsxs("div",{style:I.card,children:[n.jsx("div",{style:I.cardTitle,children:"History"}),W.length===0?n.jsx("div",{style:I.muted,children:"No transactions yet."}):n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:W.map(([M,f])=>n.jsxs("div",{children:[n.jsx("div",{style:I.dateHead,children:et(M)}),f.map(_=>(S==null?void 0:S.id)===_.id?n.jsxs("div",{style:I.editTxn,children:[n.jsxs("div",{style:I.kindToggle,children:[n.jsxs("button",{onClick:()=>F("expense"),style:{...I.kindBtn,...S.kind==="expense"?{background:Me,color:"#fff",borderColor:Me}:{}},children:[n.jsx(Dl,{size:14})," Expense"]}),n.jsxs("button",{onClick:()=>F("income"),style:{...I.kindBtn,...S.kind==="income"?{background:We,color:"#fff",borderColor:We}:{}},children:[n.jsx(Al,{size:14})," Income"]})]}),n.jsxs("div",{style:I.formGrid,children:[n.jsx("input",{type:"number",inputMode:"decimal",value:S.amount,onChange:N=>w({...S,amount:N.target.value}),style:I.input}),n.jsx("select",{value:S.category,onChange:N=>w({...S,category:N.target.value}),style:I.input,children:R.map(N=>n.jsx("option",{children:N},N))}),n.jsx("input",{type:"date",value:S.date,max:Xn,onChange:N=>w({...S,date:N.target.value}),style:I.input})]}),n.jsx("input",{placeholder:"Note (optional)",value:S.note,onChange:N=>w({...S,note:N.target.value}),onKeyDown:N=>N.key==="Enter"&&E(),style:{...I.input,marginTop:8}}),n.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[n.jsxs("button",{onClick:()=>w(null),style:I.editCancel,children:[n.jsx(pt,{size:14})," Cancel"]}),n.jsxs("button",{onClick:E,style:{...I.addBtn,marginTop:0,flex:1,background:S.kind==="income"?We:Me},children:[n.jsx(yt,{size:15})," Save"]})]})]},_.id):n.jsxs("div",{style:I.txnRow,children:[n.jsx("span",{style:{...I.txnDot,background:cb(_.category)}}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:I.txnCat,children:_.category}),_.note&&n.jsx("div",{style:I.txnNote,children:_.note})]}),n.jsxs("span",{style:{...I.txnAmt,color:_.kind==="income"?We:Me},children:[_.kind==="income"?"+":"−",r(_.amount)]}),n.jsx("button",{onClick:()=>T(_),style:I.delBtn,children:n.jsx(Te,{size:13})}),n.jsx("button",{onClick:()=>j(_.id,_.category),style:I.delBtn,children:n.jsx(pt,{size:14})})]},_.id))]},M))})]}),n.jsx(wn,{toasts:C,onUndo:b,onDismiss:u})]})}function Lh({money:t,cur:e}){return n.jsxs(n.Fragment,{children:[n.jsx(Ph,{money:t,cur:e}),n.jsx(Oh,{money:t,cur:e})]})}function Er({label:t,value:e,set:r,min:o,max:s,step:i,suffix:l}){return n.jsxs("div",{style:I.field,children:[n.jsxs("div",{style:I.fieldTop,children:[n.jsx("span",{style:I.fieldLabel,children:t}),n.jsxs("div",{style:I.fieldInputWrap,children:[n.jsx("input",{type:"number",value:e,onChange:a=>r(a.target.value),style:I.fieldInput}),l&&n.jsx("span",{style:I.fieldSuffix,children:l})]})]}),n.jsx("input",{type:"range",min:o,max:s,step:i,value:e,onChange:a=>r(a.target.value),style:I.range})]})}function Ph({money:t,cur:e}){const[r,o]=y.useState(3e4),[s,i]=y.useState(12),[l,a]=y.useState(15),{invested:d,futureValue:g,gains:m,yearly:v}=y.useMemo(()=>{const S=Math.max(0,parseFloat(r)||0),w=Math.max(0,parseFloat(s)||0),j=Math.max(0,Math.min(60,parseInt(l)||0)),C=w/12/100,b=x=>x<=0?0:C===0?S*x:S*((Math.pow(1+C,x)-1)/C)*(1+C),u=[];for(let x=1;x<=j;x++)u.push({year:x,invested:S*12*x,value:b(x*12)});const c=b(j*12),k=S*12*j;return{invested:k,futureValue:c,gains:c-k,yearly:u}},[r,s,l]),p=Math.max(1,...v.map(S=>S.value));return n.jsxs("div",{style:I.card,children:[n.jsx("div",{style:I.cardTitleRow,children:n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx(af,{size:18,color:"#3A7CA5"}),n.jsxs("div",{children:[n.jsx("div",{style:I.cardTitle,children:"SIP projection"}),n.jsx("div",{style:I.cardSub,children:"Mutual fund / SIP future value"})]})]})}),n.jsx(Er,{label:"Monthly investment",value:r,set:o,min:500,max:5e5,step:500,suffix:e.symbol}),n.jsx(Er,{label:"Expected return (p.a.)",value:s,set:i,min:1,max:30,step:.5,suffix:"%"}),n.jsx(Er,{label:"Time period",value:l,set:a,min:1,max:40,step:1,suffix:"yrs"}),n.jsxs("div",{style:I.resultHero,children:[n.jsx("div",{style:I.resultLabel,children:"Projected wealth"}),n.jsx("div",{style:{...I.resultVal,color:"#3A7CA5"},children:t(g)})]}),n.jsxs("div",{style:I.splitRow,children:[n.jsxs("div",{style:I.splitItem,children:[n.jsx("span",{style:I.splitV,children:t(d)}),n.jsx("span",{style:I.splitL,children:"Invested"})]}),n.jsxs("div",{style:I.splitItem,children:[n.jsx("span",{style:{...I.splitV,color:"#3E9E6B"},children:t(m)}),n.jsx("span",{style:I.splitL,children:"Est. returns"})]})]}),v.length>0&&n.jsxs("div",{style:I.chartWrap,children:[n.jsx("div",{style:I.chartBars,children:v.map(S=>n.jsx("div",{style:I.chartCol,title:`Year ${S.year}: ${t(S.value)}`,children:n.jsx("div",{style:{...I.chartStack,height:`${S.value/p*100}%`},children:n.jsx("div",{style:{...I.chartGain,height:`${(1-S.invested/S.value)*100}%`}})})},S.year))}),n.jsxs("div",{style:I.chartAxis,children:[n.jsx("span",{children:"Yr 1"}),n.jsxs("span",{style:{marginLeft:"auto"},children:["Yr ",v.length]})]}),n.jsxs("div",{style:I.legend,children:[n.jsxs("span",{style:I.legendItem,children:[n.jsx("span",{style:{...I.legendDot,background:"#9DBFD6"}})," Invested"]}),n.jsxs("span",{style:I.legendItem,children:[n.jsx("span",{style:{...I.legendDot,background:"#3E9E6B"}})," Returns"]})]})]})]})}function Sg(t,e,r,o=0,s=0){let i=Math.max(0,t-s),l=0,a=0,d=s;const g=1200;for(;i>.01&&a<g;){const m=i*e;let v=r+o,p=v-m;if(p<=0)return{months:1/0,totalInterest:1/0,totalPaid:1/0};p>i&&(p=i,v=i+m),i-=p,l+=m,d+=v,a++}return{months:a,totalInterest:l,totalPaid:d}}const jg=t=>{if(!isFinite(t))return"—";const e=Math.floor(t/12),r=t%12;return(e?`${e}y `:"")+`${r}m`},Nh=t=>{if(!isFinite(t))return"—";const e=new Date;return e.setMonth(e.getMonth()+t),e.toLocaleDateString("en-US",{month:"short",year:"numeric"})};function Oh({money:t,cur:e}){const[r,o]=y.useState(2e6),[s,i]=y.useState(9),[l,a]=y.useState(20),[d,g]=y.useState(5e5),[m,v]=y.useState("once"),[p,S]=y.useState("tenure"),w=y.useMemo(()=>{const c=Math.max(0,parseFloat(r)||0),k=Math.max(0,parseFloat(s)||0)/12/100,x=Math.max(1,Math.round((parseFloat(l)||0)*12)),T=k===0?c/x:c*k*Math.pow(1+k,x)/(Math.pow(1+k,x)-1);return{P:c,i:k,n:x,emi:T,totalPay:T*x,totalInterest:T*x-c}},[r,s,l]),j=m==="monthly"?"tenure":p,C=y.useMemo(()=>{const{P:c,i:k,n:x,emi:T,totalInterest:R}=w,F=Math.max(0,parseFloat(d)||0);if(F<=0)return null;let E=T,W=x,et=R,M=w.totalPay;if(m==="once"&&j==="emi"){const f=Math.max(0,c-F);E=k===0?f/x:f*k*Math.pow(1+k,x)/(Math.pow(1+k,x)-1),W=x,et=E*x-f,M=F+E*x}else if(m==="once"){const f=Sg(c,k,T,0,F);W=f.months,et=f.totalInterest,M=f.totalPaid}else{const f=Sg(c,k,T,F,0);W=f.months,et=f.totalInterest,M=f.totalPaid}return{newEMI:E,newMonths:W,newInterest:et,totalPaid:M,interestSaved:Math.max(0,R-et),monthsSaved:Math.max(0,x-(isFinite(W)?W:x))}},[w,d,m,j]),b=w.totalPay>0?w.P/w.totalPay*100:0,u=m==="once"?Math.max(1e5,Math.round(w.P)):Math.max(5e4,Math.round(w.emi*3));return n.jsxs("div",{style:I.card,children:[n.jsx("div",{style:I.cardTitleRow,children:n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx(qu,{size:18,color:"#C2536B"}),n.jsxs("div",{children:[n.jsx("div",{style:I.cardTitle,children:"EMI calculator"}),n.jsx("div",{style:I.cardSub,children:"Loan / mortgage monthly payment"})]})]})}),n.jsx(Er,{label:"Loan amount",value:r,set:o,min:5e4,max:5e7,step:5e4,suffix:e.symbol}),n.jsx(Er,{label:"Interest rate (p.a.)",value:s,set:i,min:1,max:24,step:.1,suffix:"%"}),n.jsx(Er,{label:"Tenure",value:l,set:a,min:1,max:30,step:1,suffix:"yrs"}),n.jsxs("div",{style:I.resultHero,children:[n.jsx("div",{style:I.resultLabel,children:"Monthly EMI"}),n.jsx("div",{style:{...I.resultVal,color:"#C2536B"},children:t(w.emi)})]}),n.jsxs("div",{style:I.emiSplitTrack,children:[n.jsx("div",{style:{width:`${b}%`,background:"#5B7C99",height:"100%"}}),n.jsx("div",{style:{width:`${100-b}%`,background:"#C2536B",height:"100%"}})]}),n.jsxs("div",{style:I.splitRow,children:[n.jsxs("div",{style:I.splitItem,children:[n.jsx("span",{style:{...I.splitV,color:"#5B7C99"},children:t(w.P)}),n.jsx("span",{style:I.splitL,children:"Principal"})]}),n.jsxs("div",{style:I.splitItem,children:[n.jsx("span",{style:{...I.splitV,color:"#C2536B"},children:t(w.totalInterest)}),n.jsx("span",{style:I.splitL,children:"Total interest"})]}),n.jsxs("div",{style:I.splitItem,children:[n.jsx("span",{style:I.splitV,children:t(w.totalPay)}),n.jsx("span",{style:I.splitL,children:"Total payable"})]})]}),n.jsx("div",{style:I.subDivider}),n.jsx("div",{style:I.subTitle,children:"Prepayment planner"}),n.jsx("div",{style:I.cardSub,children:"See what an extra payment does to your loan."}),n.jsx("div",{style:{marginTop:14},children:n.jsx(Er,{label:"Prepayment amount",value:d,set:g,min:0,max:u,step:m==="once"?25e3:1e3,suffix:e.symbol})}),n.jsxs("div",{style:I.segGroup,children:[n.jsx("span",{style:I.segLbl,children:"Type"}),n.jsxs("div",{style:I.segRow,children:[n.jsx(Yo,{label:"One-time",on:m==="once",onClick:()=>v("once")}),n.jsx(Yo,{label:"Every month",on:m==="monthly",onClick:()=>v("monthly")})]})]}),n.jsxs("div",{style:I.segGroup,children:[n.jsx("span",{style:I.segLbl,children:"Strategy"}),n.jsxs("div",{style:I.segRow,children:[n.jsx(Yo,{label:"Reduce tenure",on:j==="tenure",onClick:()=>S("tenure")}),n.jsx(Yo,{label:"Reduce EMI",on:j==="emi",disabled:m==="monthly",onClick:()=>S("emi")})]})]}),m==="monthly"&&n.jsx("div",{style:I.note,children:"An extra monthly payment always shortens the tenure. Switch to a one-time prepayment to reduce your EMI instead."}),C?n.jsxs("div",{style:I.cmpCard,children:[n.jsxs("div",{style:I.cmpRow,children:[n.jsx("span",{style:I.cmpLbl,children:"New EMI"}),n.jsxs("span",{style:I.cmpVal,children:[t(C.newEMI),C.newEMI<w.emi-1&&n.jsxs("span",{style:I.cmpWas,children:[" was ",t(w.emi)]})]})]}),n.jsxs("div",{style:I.cmpRow,children:[n.jsx("span",{style:I.cmpLbl,children:"New tenure"}),n.jsxs("span",{style:I.cmpVal,children:[jg(C.newMonths)," ",n.jsxs("span",{style:I.cmpWas,children:["· paid off ",Nh(C.newMonths)]})]})]}),n.jsxs("div",{style:I.cmpRow,children:[n.jsx("span",{style:I.cmpLbl,children:"Total interest"}),n.jsx("span",{style:I.cmpVal,children:t(C.newInterest)})]}),n.jsxs("div",{style:I.cmpRow,children:[n.jsx("span",{style:I.cmpLbl,children:"Total payable"}),n.jsx("span",{style:I.cmpVal,children:t(C.totalPaid)})]}),n.jsxs("div",{style:I.saveRow,children:["You save ",t(C.interestSaved)," in interest",C.monthsSaved>0?` · ${jg(C.monthsSaved)} sooner`:""]})]}):n.jsx("div",{style:I.muted,children:"Enter a prepayment amount to see the impact."})]})}function Yo({label:t,on:e,onClick:r,disabled:o}){return n.jsx("button",{onClick:o?void 0:r,disabled:o,style:{...I.seg,...e?I.segOn:{},...o?I.segDisabled:{}},children:t})}const I={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},tabs:{display:"flex",gap:7,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},presetRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},preset:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},presetOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},sumGrid:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:16},sumCard:{background:"var(--surface)",borderRadius:14,padding:"14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},sumIcon:{width:30,height:30,borderRadius:9,display:"grid",placeItems:"center",marginBottom:8},sumLabel:{fontSize:11.5,color:"var(--text-3)",fontWeight:600},sumVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2,letterSpacing:"-0.01em",wordBreak:"break-word"},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},cardTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},twoCol:{display:"grid",gridTemplateColumns:"1fr",gap:0},dot:{width:10,height:10,borderRadius:3,flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:160,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},healthScore:{fontSize:32,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1},healthStatus:{fontSize:12.5,fontWeight:700,marginTop:2},gaugeTrack:{height:10,background:"var(--surface-2)",borderRadius:6,overflow:"hidden",marginBottom:14},gaugeFill:{height:"100%",borderRadius:6,transition:"width 0.4s"},healthStats:{display:"flex",gap:24,marginBottom:12},healthStat:{display:"flex",flexDirection:"column"},healthStatV:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},healthStatL:{fontSize:11,color:"var(--text-3)",fontWeight:600},tip:{fontSize:12.5,lineHeight:1.5,padding:"10px 12px",borderRadius:10,border:"1px solid",fontWeight:500},kindToggle:{display:"flex",gap:8,marginBottom:12},kindBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},formGrid:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},input:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},addBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},dateHead:{fontSize:11,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8},txnRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},txnDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},txnCat:{fontSize:13.5,fontWeight:600},txnNote:{fontSize:11.5,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},txnAmt:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},editTxn:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:12,margin:"6px 0"},editCancel:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},field:{marginBottom:16},fieldTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},fieldLabel:{fontSize:13,fontWeight:600,color:"var(--text-2)"},fieldInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:8,padding:"5px 10px",background:"var(--surface-2)"},fieldInput:{border:"none",background:"none",outline:"none",width:90,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},fieldSuffix:{fontSize:12,color:"var(--text-3)",fontWeight:600},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},resultHero:{textAlign:"center",padding:"14px 0 6px"},resultLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},resultVal:{fontSize:34,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,wordBreak:"break-word"},splitRow:{display:"flex",gap:10,marginTop:10},splitItem:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",background:"var(--surface-2)",borderRadius:10,padding:"10px 6px"},splitV:{fontSize:14.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",wordBreak:"break-word"},splitL:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:2},chartWrap:{marginTop:18},chartBars:{display:"flex",alignItems:"flex-end",gap:3,height:90},chartCol:{flex:1,height:"100%",display:"flex",alignItems:"flex-end"},chartStack:{width:"100%",background:"#9DBFD6",borderRadius:"3px 3px 0 0",minHeight:2,position:"relative",display:"flex",flexDirection:"column",justifyContent:"flex-start"},chartGain:{width:"100%",background:"#3E9E6B",borderRadius:"3px 3px 0 0"},chartAxis:{display:"flex",fontSize:10,color:"var(--text-3)",fontWeight:600,marginTop:6},legend:{display:"flex",gap:16,justifyContent:"center",marginTop:10},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)",fontWeight:600},legendDot:{width:10,height:10,borderRadius:3},emiSplitTrack:{display:"flex",height:12,borderRadius:6,overflow:"hidden",marginTop:16,border:"1px solid var(--border)"},subDivider:{height:1,background:"var(--border)",margin:"20px 0 14px"},subTitle:{fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},segGroup:{marginBottom:12},segLbl:{fontSize:12,fontWeight:600,color:"var(--text-3)",display:"block",marginBottom:6},segRow:{display:"flex",gap:8},seg:{flex:1,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},segOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},segDisabled:{opacity:.4,cursor:"not-allowed"},note:{fontSize:12,lineHeight:1.5,color:"var(--text-3)",background:"var(--surface-2)",borderRadius:9,padding:"9px 11px",marginBottom:12},cmpCard:{background:"var(--surface-2)",borderRadius:12,padding:"12px 14px",marginTop:4},cmpRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"6px 0",borderBottom:"1px solid var(--border)",gap:10},cmpLbl:{fontSize:12.5,color:"var(--text-2)",fontWeight:600},cmpVal:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",textAlign:"right"},cmpWas:{fontSize:11,color:"var(--text-3)",fontWeight:500,fontFamily:"'Inter',system-ui,sans-serif"},saveRow:{marginTop:12,background:"rgba(62,158,107,0.12)",color:"#3E9E6B",borderRadius:9,padding:"10px 12px",fontSize:13,fontWeight:700,textAlign:"center"}},Ol=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],_i={Monday:"Mon",Tuesday:"Tue",Wednesday:"Wed",Thursday:"Thu",Friday:"Fri",Saturday:"Sat",Sunday:"Sun"},Pn=()=>Ol[(new Date().getDay()+6)%7],$e={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},Cg=Object.keys($e),Li=21,Ig="kickstart_tags",Pi=t=>{if(!t)return"";const e=t.trim();if(/^[A-Za-z0-9_-]{11}$/.test(e))return e;const r=e.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return r?r[1]:""},zg=t=>{if(!t||!String(t).trim())return null;const e=String(t).split(":").map(r=>parseInt(r.trim(),10));return e.some(r=>isNaN(r)||r<0)?null:e.reduce((r,o)=>r*60+o,0)},Qo=t=>{if(t==null)return"";const e=Math.max(0,t|0);return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`},$h=t=>`https://www.youtube.com/embed/${t.youtube_id}?start=${t.start_sec||0}`+(t.end_sec?`&end=${t.end_sec}`:"")+"&autoplay=1&rel=0",Hh=()=>({id:null,url:"",title:"",start:"",end:"",days:[Pn()],pillars:[],customs:[]});function Gh(){const[t,e]=y.useState([]),[r,o]=y.useState([]),[s,i]=y.useState(!1),[l,a]=y.useState({type:"day",value:Pn()}),[d,g]=y.useState(null),[m,v]=y.useState(null),[p,S]=y.useState(""),w=y.useCallback(async()=>{try{const[f,_]=await Promise.all([U.getKickstart(),U.getSetting(Ig)]);e(f),o(Array.isArray(_==null?void 0:_.value)?_.value:[])}catch{}i(!0)},[]);y.useEffect(()=>{w()},[w]);const{deleteItem:j,toasts:C,handleUndo:b,handleDismiss:u}=kn(U.deleteKickstart,U.restoreKickstart,w),c=f=>{o(f),U.setSetting(Ig,f).catch(()=>{})},k=()=>{const f=p.trim();!f||r.length>=Li||r.includes(f)||(c([...r,f]),g(_=>_&&!_.customs.includes(f)?{..._,customs:[..._.customs,f]}:_),S(""))},x=f=>c(r.filter(_=>_!==f)),T=(f,_)=>g(N=>({...N,[f]:N[f].includes(_)?N[f].filter(H=>H!==_):[...N[f],_]})),R=f=>g({id:f.id,url:`https://youtu.be/${f.youtube_id}`,title:f.title,start:Qo(f.start_sec),end:f.end_sec?Qo(f.end_sec):"",days:[...f.days],pillars:[...f.pillars],customs:[...f.customs]}),F=async()=>{const f=Pi(d.url);if(!f||d.days.length===0||!d.title.trim())return;const _={youtube_id:f,title:d.title.trim(),start_sec:zg(d.start)||0,end_sec:zg(d.end),days:d.days,pillars:d.pillars,customs:d.customs};d.id?await U.updateKickstart(d.id,_):await U.createKickstart(_),g(null),w()},E=y.useMemo(()=>t.filter(f=>l.type==="all"?!0:l.type==="day"?f.days.includes(l.value):l.type==="pillar"?f.pillars.includes(l.value):l.type==="custom"?f.customs.includes(l.value):!0),[t,l]),W=(f,_)=>l.type===f&&l.value===_,et=d?[!Pi(d.url)&&"a valid YouTube link",!d.title.trim()&&"a title",d.days.length===0&&"at least one day"].filter(Boolean):[],M=!!d&&et.length===0;return n.jsxs("div",{style:Y.page,children:[n.jsxs("div",{style:Y.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:Y.eyebrow,children:"Anvil · Kickstart"}),n.jsx("h1",{style:Y.h1,children:"Kickstart"}),n.jsxs("div",{style:Y.subhead,children:["Your motivation hub — the right push for ",Pn(),"."]})]}),!d&&n.jsxs("button",{onClick:()=>g(Hh()),style:Y.addBtn,children:[n.jsx(ve,{size:15})," Add video"]})]}),d&&n.jsxs("div",{style:Y.card,children:[n.jsx("div",{style:Y.cardTitle,children:d.id?"Edit video":"Add video"}),n.jsx("input",{placeholder:"YouTube link (or video ID)",value:d.url,onChange:f=>g({...d,url:f.target.value}),style:Y.input,autoFocus:!0}),d.url&&!Pi(d.url)&&n.jsx("div",{style:Y.warn,children:"Couldn't find a YouTube video ID in that link."}),n.jsx("input",{placeholder:"Title (required)",value:d.title,onChange:f=>g({...d,title:f.target.value}),style:{...Y.input,marginTop:8}}),n.jsxs("div",{style:Y.trimRow,children:[n.jsx(cf,{size:15,color:"var(--text-3)"}),n.jsxs("label",{style:Y.trimField,children:[n.jsx("span",{style:Y.trimLbl,children:"Start"}),n.jsx("input",{placeholder:"0:30",value:d.start,onChange:f=>g({...d,start:f.target.value}),style:Y.trimInput})]}),n.jsx("span",{style:Y.trimArrow,children:"→"}),n.jsxs("label",{style:Y.trimField,children:[n.jsx("span",{style:Y.trimLbl,children:"End"}),n.jsx("input",{placeholder:"end (optional)",value:d.end,onChange:f=>g({...d,end:f.target.value}),style:Y.trimInput})]})]}),n.jsx("div",{style:Y.hint,children:"Only this trimmed part plays. Use m:ss (e.g. 1:30). Leave End blank to play to the end."}),n.jsxs("div",{style:Y.tagBlock,children:[n.jsxs("div",{style:Y.tagLabel,children:["Days ",n.jsx("span",{style:Y.req,children:"required"})]}),n.jsx("div",{style:Y.chipRow,children:Ol.map(f=>n.jsx("button",{onClick:()=>T("days",f),style:{...Y.chip,...d.days.includes(f)?Y.chipOnDark:{}},children:_i[f]},f))})]}),n.jsxs("div",{style:Y.tagBlock,children:[n.jsxs("div",{style:Y.tagLabel,children:["Pillars ",n.jsx("span",{style:Y.opt,children:"optional"})]}),n.jsx("div",{style:Y.chipRow,children:Cg.map(f=>{const _=d.pillars.includes(f);return n.jsxs("button",{onClick:()=>T("pillars",f),style:{...Y.chip,..._?{background:$e[f],color:"#fff",borderColor:$e[f]}:{}},children:[n.jsx("span",{style:{...Y.dot,background:_?"#fff":$e[f]}}),f]},f)})})]}),n.jsxs("div",{style:Y.tagBlock,children:[n.jsxs("div",{style:Y.tagLabel,children:["Custom tags ",n.jsxs("span",{style:Y.opt,children:["optional · ",r.length,"/",Li]})]}),n.jsxs("div",{style:Y.chipRow,children:[r.map(f=>n.jsxs("span",{style:{...Y.chip,...d.customs.includes(f)?Y.chipOnAccent:{},paddingRight:4},children:[n.jsx("button",{onClick:()=>T("customs",f),style:Y.chipInner,children:f}),n.jsx("button",{onClick:()=>x(f),style:Y.chipX,title:"Delete tag",children:n.jsx(pt,{size:11})})]},f)),r.length===0&&n.jsx("span",{style:Y.muted,children:"No custom tags yet."})]}),r.length<Li&&n.jsxs("div",{style:Y.newTagRow,children:[n.jsx("input",{placeholder:"New custom tag…",value:p,onChange:f=>S(f.target.value),onKeyDown:f=>f.key==="Enter"&&k(),style:{...Y.input,padding:"7px 10px"}}),n.jsx("button",{onClick:k,style:Y.smallBtn,children:n.jsx(ve,{size:14})})]})]}),!M&&n.jsxs("div",{style:Y.warn,children:["Add ",et.join(", ")," to save."]}),n.jsxs("div",{style:Y.formActions,children:[n.jsxs("button",{onClick:()=>g(null),style:Y.cancelBtn,children:[n.jsx(pt,{size:14})," Cancel"]}),n.jsxs("button",{onClick:F,disabled:!M,style:{...Y.saveBtn,...M?{}:Y.saveDisabled},children:[n.jsx(yt,{size:15})," ",d.id?"Save":"Add video"]})]})]}),n.jsxs("div",{style:Y.filterCard,children:[n.jsx("button",{onClick:()=>a({type:"all"}),style:{...Y.fChip,...l.type==="all"?Y.fChipOnDark:{}},children:"All"}),n.jsx("span",{style:Y.fDivider}),Ol.map(f=>n.jsxs("button",{onClick:()=>a({type:"day",value:f}),style:{...Y.fChip,...W("day",f)?Y.fChipOnDark:{},...f===Pn()?Y.fToday:{}},children:[_i[f],f===Pn()?" ·":""]},f)),n.jsx("span",{style:Y.fDivider}),Cg.map(f=>n.jsxs("button",{onClick:()=>a({type:"pillar",value:f}),style:{...Y.fChip,...W("pillar",f)?{background:$e[f],color:"#fff",borderColor:$e[f]}:{}},children:[n.jsx("span",{style:{...Y.dot,background:W("pillar",f)?"#fff":$e[f]}}),f]},f)),r.length>0&&n.jsx("span",{style:Y.fDivider}),r.map(f=>n.jsxs("button",{onClick:()=>a({type:"custom",value:f}),style:{...Y.fChip,...W("custom",f)?Y.fChipOnAccent:{}},children:[n.jsx(mf,{size:11})," ",f]},f))]}),s?E.length===0?n.jsx("div",{style:Y.empty,children:t.length===0?"No videos yet — add your first motivation clip.":"No videos for this tag."}):n.jsx("div",{style:Y.grid,children:E.map(f=>n.jsxs("div",{style:Y.videoCard,children:[n.jsx("div",{style:Y.thumbWrap,children:m===f.id?n.jsx("iframe",{src:$h(f),title:f.title||f.youtube_id,style:Y.iframe,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):n.jsxs("button",{onClick:()=>v(f.id),style:Y.thumbBtn,children:[n.jsx("img",{src:`https://img.youtube.com/vi/${f.youtube_id}/hqdefault.jpg`,alt:"",style:Y.thumb}),n.jsx("span",{style:Y.playOverlay,children:n.jsx(df,{size:22,color:"#fff",fill:"#fff"})}),n.jsxs("span",{style:Y.trimBadge,children:[Qo(f.start_sec),f.end_sec?` – ${Qo(f.end_sec)}`:"+"]})]})}),n.jsxs("div",{style:Y.videoBody,children:[n.jsx("div",{style:Y.videoTitle,children:f.title||"Untitled clip"}),n.jsxs("div",{style:Y.tagWrap,children:[f.days.map(_=>n.jsx("span",{style:Y.dayTag,children:_i[_]},_)),f.pillars.map(_=>n.jsx("span",{style:{...Y.pillTag,color:$e[_]||"var(--text-2)",borderColor:$e[_]||"var(--border)"},children:_},_)),f.customs.map(_=>n.jsx("span",{style:Y.customTag,children:_},_))]}),n.jsxs("div",{style:Y.cardActions,children:[n.jsx("button",{onClick:()=>R(f),style:Y.iconBtn,title:"Edit",children:n.jsx(Te,{size:13})}),n.jsx("button",{onClick:()=>j(f.id,f.title||"video"),style:Y.iconBtn,title:"Delete",children:n.jsx(pt,{size:14})})]})]})]},f.id))}):n.jsx("div",{style:Y.muted,children:"Loading…"}),n.jsx(wn,{toasts:C,onUndo:b,onDismiss:u})]})}const Y={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:1e3,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},warn:{fontSize:11.5,color:"#C2773B",marginTop:5,fontWeight:600},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:6,lineHeight:1.4},trimRow:{display:"flex",alignItems:"flex-end",gap:10,marginTop:10},trimField:{display:"flex",flexDirection:"column",gap:4,flex:1},trimLbl:{fontSize:11,color:"var(--text-2)",fontWeight:600},trimInput:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},trimArrow:{color:"var(--text-3)",paddingBottom:9},tagBlock:{marginTop:14},tagLabel:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},req:{fontSize:10,fontWeight:700,color:"#C2536B",textTransform:"uppercase",marginLeft:6},opt:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",marginLeft:6},chipRow:{display:"flex",gap:6,flexWrap:"wrap"},chip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},chipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},chipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},chipInner:{border:"none",background:"none",color:"inherit",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,padding:0},chipX:{border:"none",background:"rgba(0,0,0,0.12)",color:"inherit",cursor:"pointer",display:"grid",placeItems:"center",borderRadius:"50%",width:16,height:16,padding:0},newTagRow:{display:"flex",gap:6,marginTop:8,maxWidth:280},smallBtn:{border:"none",background:"var(--accent)",color:"#fff",width:34,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},dot:{width:8,height:8,borderRadius:"50%",flexShrink:0,display:"inline-block"},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"var(--accent)",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},filterCard:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:12,marginBottom:18},fChip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},fChipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},fChipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},fToday:{borderColor:"var(--accent)",borderWidth:2},fDivider:{width:1,alignSelf:"stretch",background:"var(--border)",margin:"0 2px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:14},videoCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 9",background:"#000"},thumbBtn:{border:"none",padding:0,margin:0,cursor:"pointer",width:"100%",height:"100%",position:"relative",display:"block",background:"#000"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center",background:"rgba(0,0,0,0.28)"},trimBadge:{position:"absolute",bottom:8,right:8,background:"rgba(0,0,0,0.75)",color:"#fff",fontSize:11,fontWeight:700,padding:"2px 7px",borderRadius:6,fontFamily:"'Fraunces',Georgia,serif"},iframe:{width:"100%",height:"100%",border:"none",display:"block"},videoBody:{padding:"12px 13px",display:"flex",flexDirection:"column",gap:8},videoTitle:{fontSize:14,fontWeight:700},tagWrap:{display:"flex",gap:5,flexWrap:"wrap"},dayTag:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:8},pillTag:{fontSize:10,fontWeight:700,border:"1px solid",borderRadius:8,padding:"2px 7px"},customTag:{fontSize:10,fontWeight:700,color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"2px 7px",borderRadius:8},cardActions:{display:"flex",gap:4,justifyContent:"flex-end"},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},Tg=()=>new Date().toISOString().slice(0,10),Eg=(t,e)=>{const r=new Date(t+"T00:00:00");return r.setDate(r.getDate()+e),r.toISOString().slice(0,10)},Bg=t=>new Date(t+"T00:00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"}),Uh=t=>{if(!t)return"";const e=t.trim();if(/^[A-Za-z0-9_-]{11}$/.test(e))return e;const r=e.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return r?r[1]:""},Vh=t=>new Promise((e,r)=>{const o=new FileReader;o.onload=()=>{const s=new Image;s.onload=()=>{let{width:l,height:a}=s;l>a&&l>900?(a=a*900/l,l=900):a>900&&(l=l*900/a,a=900);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(s,0,0,l,a),e(d.toDataURL("image/jpeg",.82))},s.onerror=r,s.src=o.result},o.onerror=r,o.readAsDataURL(t)});function Yh(){const[t,e]=y.useState([]),[r,o]=y.useState(!1),[s,i]=y.useState(null),[l,a]=y.useState(!1),[d,g]=y.useState({title:"",image:""}),[m,v]=y.useState(""),[p,S]=y.useState(!0),[w,j]=y.useState(null),C=y.useCallback(async()=>{try{e(await U.getGoldenGoals())}catch{}o(!0)},[]);y.useEffect(()=>{C()},[C]),y.useEffect(()=>{U.getSetting("golden_music").then(x=>v(Uh((x==null?void 0:x.value)||""))).catch(()=>{})},[]);const b=async()=>{if(!d.title.trim())return;const x=await U.createGolden({title:d.title.trim(),image:d.image});g({title:"",image:""}),a(!1),await C(),i(x.id)},u=async(x,T)=>{var F;const R=(F=x.target.files)==null?void 0:F[0];if(R)try{T(await Vh(R))}catch{}},c=t.filter(x=>!x.achieved),k=t.filter(x=>x.achieved);return s?n.jsxs("div",{style:Q.page,children:[n.jsx(Xh,{musicId:m,on:p}),n.jsx(Qh,{goalId:s,onBack:()=>i(null),onReload:C,onCelebrate:(x,T)=>j({title:x,days:T}),pickImage:u,musicId:m,musicOn:p,setMusicOn:S}),w&&n.jsx(Kh,{data:w,onClose:()=>j(null)})]}):n.jsxs("div",{style:Q.page,children:[n.jsxs("div",{style:Q.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:Q.eyebrow,children:"Anvil · Golden Book"}),n.jsx("h1",{style:Q.h1,children:"Golden Book"}),n.jsx("div",{style:Q.subhead,children:"Write your dreams into being — a little every day."})]}),!l&&n.jsxs("button",{onClick:()=>a(!0),style:Q.addBtn,children:[n.jsx(ve,{size:15})," New dream"]})]}),l&&n.jsxs("div",{style:Q.card,children:[n.jsx("div",{style:Q.cardTitle,children:"Manifest a new dream"}),n.jsx("textarea",{autoFocus:!0,placeholder:"Write your dream as if it's already true…",value:d.title,onChange:x=>g({...d,title:x.target.value}),style:Q.textarea}),n.jsxs("label",{style:Q.photoPick,children:[d.image?n.jsx("img",{src:d.image,alt:"",style:Q.photoPreview}):n.jsxs("span",{style:Q.photoEmpty,children:[n.jsx(Zu,{size:18})," Add a photo"]}),n.jsx("input",{type:"file",accept:"image/*",onChange:x=>u(x,T=>g({...d,image:T})),style:{display:"none"}})]}),n.jsxs("div",{style:Q.formActions,children:[n.jsxs("button",{onClick:()=>{a(!1),g({title:"",image:""})},style:Q.cancelBtn,children:[n.jsx(pt,{size:14})," Cancel"]}),n.jsxs("button",{onClick:b,disabled:!d.title.trim(),style:{...Q.saveBtn,...d.title.trim()?{}:Q.saveDisabled},children:[n.jsx(yt,{size:15})," Create"]})]})]}),r?n.jsxs(n.Fragment,{children:[c.length===0&&k.length===0&&!l&&n.jsx("div",{style:Q.empty,children:"No dreams yet. Add your first one and revisit it daily."}),c.length>0&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:Q.sectionTitle,children:[n.jsx(So,{size:15,color:"#C9A227"})," Manifesting ",n.jsx("span",{style:Q.badge,children:c.length})]}),n.jsx("div",{style:Q.grid,children:c.map(x=>n.jsx(Fg,{g:x,onOpen:()=>i(x.id)},x.id))})]}),k.length>0&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{...Q.sectionTitle,marginTop:22},children:[n.jsx(_r,{size:15,color:"#4C9A6B"})," Manifested ",n.jsx("span",{style:Q.badge,children:k.length})]}),n.jsx("div",{style:Q.grid,children:k.map(x=>n.jsx(Fg,{g:x,onOpen:()=>i(x.id),achieved:!0},x.id))})]})]}):n.jsx("div",{style:Q.muted,children:"Loading…"})]})}function Fg({g:t,onOpen:e,achieved:r}){return n.jsxs("button",{onClick:e,style:{...Q.goalCard,...r?{opacity:.96}:{}},children:[n.jsxs("div",{style:Q.thumbWrap,children:[t.image?n.jsx("img",{src:t.image,alt:"",style:Q.thumb}):n.jsx("div",{style:Q.thumbEmpty,children:n.jsx(So,{size:26,color:"var(--text-3)"})}),r&&n.jsx("span",{style:Q.stamp,children:"✦ Manifested"})]}),n.jsxs("div",{style:Q.goalBody,children:[n.jsx("div",{style:Q.goalTitle,children:t.title}),n.jsxs("div",{style:Q.goalMeta,children:[r?n.jsxs("span",{style:{...Q.metaPill,color:"#4C9A6B",background:"rgba(76,154,107,0.12)"},children:[n.jsx(_r,{size:12})," ",t.days_to_manifest!=null?`in ${t.days_to_manifest} day${t.days_to_manifest===1?"":"s"}`:"done"]}):n.jsxs("span",{style:{...Q.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[n.jsx(xn,{size:12})," ",t.streak," day streak"]}),n.jsxs("span",{style:Q.metaDim,children:[t.total_days," entr",t.total_days===1?"y":"ies"]})]})]})]})}function Qh({goalId:t,onBack:e,onReload:r,onCelebrate:o,pickImage:s,musicId:i,musicOn:l,setMusicOn:a}){const[d,g]=y.useState(null),[m,v]=y.useState({}),[p,S]=y.useState(Tg()),[w,j]=y.useState(""),[C,b]=y.useState(null),u=Tg(),c=y.useCallback(async()=>{const M=await U.getGoldenGoal(t);g(M);const f={};M.entries.forEach(_=>{f[_.date]=_.text}),v(f),j(f[u]||"")},[t,u]);if(y.useEffect(()=>{c()},[c]),!d)return n.jsx("div",{style:Q.muted,children:"Loading…"});const k=p===u,x=p>d.created_date,T=p<u,R=async()=>{await U.upsertGoldenEntry(t,{date:u,text:w}),await c(),r()},F=async()=>{const M=await U.achieveGolden(t);o(d.title,M.days_to_manifest),await c(),r()},E=async()=>{await U.unachieveGolden(t),await c(),r()},W=async()=>{C.trim()&&(await U.updateGolden(t,{title:C.trim()}),b(null),await c(),r())},et=M=>U.updateGolden(t,{image:M}).then(()=>{c(),r()});return n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:e,style:Q.backBtn,children:[n.jsx(Yu,{size:16})," All dreams"]}),n.jsxs("div",{style:Q.detailHero,children:[n.jsxs("label",{style:Q.heroPhoto,children:[d.image?n.jsx("img",{src:d.image,alt:"",style:Q.heroImg}):n.jsxs("span",{style:Q.photoEmpty,children:[n.jsx(Zu,{size:20})," Add a photo"]}),n.jsxs("span",{style:Q.photoEdit,children:[n.jsx(Te,{size:12})," Edit photo"]}),n.jsx("input",{type:"file",accept:"image/*",onChange:M=>s(M,et),style:{display:"none"}})]}),n.jsxs("div",{style:Q.heroInfo,children:[d.achieved&&n.jsxs("span",{style:Q.heroStamp,children:["✦ Manifested",d.days_to_manifest!=null?` in ${d.days_to_manifest} day${d.days_to_manifest===1?"":"s"}`:""]}),C!==null?n.jsxs("div",{style:{display:"flex",gap:6,width:"100%"},children:[n.jsx("textarea",{autoFocus:!0,value:C,onChange:M=>b(M.target.value),style:{...Q.textarea,minHeight:60}}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[n.jsx("button",{onClick:W,style:Q.iconSave,children:n.jsx(yt,{size:14})}),n.jsx("button",{onClick:()=>b(null),style:Q.iconCancel,children:n.jsx(pt,{size:14})})]})]}):n.jsxs("div",{style:Q.heroTitleRow,children:[n.jsx("div",{style:Q.heroTitle,children:d.title}),n.jsx("button",{onClick:()=>b(d.title),style:Q.ghostBtn,title:"Edit",children:n.jsx(Te,{size:13})})]}),n.jsxs("div",{style:Q.heroStats,children:[n.jsxs("span",{style:{...Q.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[n.jsx(xn,{size:13})," ",d.streak," day streak"]}),n.jsxs("span",{style:Q.metaDim,children:[d.total_days," entr",d.total_days===1?"y":"ies"]}),n.jsxs("span",{style:Q.metaDim,children:["since ",Bg(d.created_date)]})]})]})]}),n.jsxs("div",{style:Q.writeCard,children:[n.jsx("div",{style:Q.tuneRow,children:i?n.jsxs("button",{onClick:()=>a(M=>!M),style:{...Q.tuneBtn,...l?Q.tuneOn:{}},children:[l?n.jsx(sf,{size:14}):n.jsx(eb,{size:14})," Soft tunes"]}):n.jsx("span",{style:Q.tuneHint,children:"Add a track in Settings → Music"})}),n.jsxs("div",{style:Q.writeNav,children:[n.jsx("button",{onClick:()=>S(M=>Eg(M,-1)),disabled:!x,style:{...Q.navBtn,...x?{}:Q.navDisabled},children:n.jsx(yn,{size:16})}),n.jsx("div",{style:Q.writeDate,children:k?"Today":Bg(p)}),n.jsx("button",{onClick:()=>S(M=>Eg(M,1)),disabled:!T,style:{...Q.navBtn,...T?{}:Q.navDisabled},children:n.jsx(Or,{size:16})})]}),k&&!d.achieved?n.jsxs(n.Fragment,{children:[n.jsx("textarea",{value:w,onChange:M=>j(M.target.value),placeholder:"Write it again today, as if it's already yours…",style:Q.writeArea}),n.jsxs("button",{onClick:R,style:Q.writeSave,children:[n.jsx(yt,{size:15})," Save today's entry"]})]}):n.jsx("div",{style:Q.readEntry,children:m[p]?n.jsxs(n.Fragment,{children:[n.jsx(rb,{size:16,color:"var(--text-3)"}),n.jsx("p",{style:Q.readText,children:m[p]})]}):n.jsx("div",{style:Q.muted,children:"Nothing written on this day."})})]}),d.achieved?n.jsx("button",{onClick:E,style:Q.unmanifestBtn,children:"Undo manifested"}):n.jsxs("button",{onClick:F,style:Q.manifestBtn,children:[n.jsx(So,{size:16})," Mark as manifested"]})]})}function Kh({data:t,onClose:e}){return n.jsx("div",{style:Q.celebOverlay,onClick:e,children:n.jsxs("div",{style:Q.celebBox,onClick:r=>r.stopPropagation(),children:[n.jsx("div",{style:Q.celebEmoji,children:"✨🌟✨"}),n.jsx("div",{style:Q.celebTitle,children:"It's happening!"}),n.jsxs("div",{style:Q.celebDream,children:['"',t.title,'"']}),n.jsxs("div",{style:Q.celebSub,children:[t.days!=null?`Manifested in ${t.days} day${t.days===1?"":"s"}.`:"Manifested."," The universe delivered. 🙏"]}),n.jsx("button",{onClick:e,style:Q.celebBtn,children:"Wonderful"})]})})}function Xh({musicId:t,on:e}){return!t||!e?null:n.jsx("iframe",{title:"golden-music",src:`https://www.youtube.com/embed/${t}?autoplay=1&loop=1&playlist=${t}&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}})}const kr="#C9A227",Q={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:860,margin:"0 auto",position:"relative"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:kr,color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"11px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:70,resize:"vertical",lineHeight:1.5},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:kr,color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:12},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:14},goalCard:{textAlign:"left",border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,overflow:"hidden",cursor:"pointer",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",padding:0,fontFamily:"inherit",display:"flex",flexDirection:"column"},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 10",background:"var(--surface-2)"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},thumbEmpty:{width:"100%",height:"100%",display:"grid",placeItems:"center"},stamp:{position:"absolute",top:8,right:8,transform:"rotate(6deg)",background:"rgba(76,154,107,0.95)",color:"#fff",fontSize:11,fontWeight:800,letterSpacing:"0.04em",padding:"3px 9px",borderRadius:6,border:"1.5px solid #fff",textTransform:"uppercase"},goalBody:{padding:"11px 13px",display:"flex",flexDirection:"column",gap:8},goalTitle:{fontSize:14,fontWeight:600,lineHeight:1.35,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},goalMeta:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},metaPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:700,padding:"2px 8px",borderRadius:10},metaDim:{fontSize:11,color:"var(--text-3)",fontWeight:500},backBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginBottom:16},detailHero:{display:"flex",flexDirection:"column",gap:14,marginBottom:16},heroPhoto:{position:"relative",width:"100%",borderRadius:14,overflow:"hidden",border:"1px solid var(--border)",cursor:"pointer",background:"var(--surface-2)",display:"flex",alignItems:"center",justifyContent:"center",minHeight:120},heroImg:{width:"100%",maxHeight:"62vh",objectFit:"contain",display:"block"},photoEdit:{position:"absolute",bottom:8,right:8,display:"flex",alignItems:"center",gap:5,background:"rgba(0,0,0,0.6)",color:"#fff",fontSize:11,fontWeight:600,padding:"4px 8px",borderRadius:7},heroInfo:{display:"flex",flexDirection:"column",gap:10,alignItems:"center",textAlign:"center"},heroStamp:{alignSelf:"center",background:"rgba(76,154,107,0.14)",color:"#4C9A6B",fontSize:12,fontWeight:800,padding:"4px 10px",borderRadius:8,letterSpacing:"0.03em"},heroTitleRow:{display:"flex",alignItems:"flex-start",gap:8,justifyContent:"center"},heroTitle:{fontSize:23,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.35},heroStats:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",justifyContent:"center"},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",flexShrink:0},iconSave:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},iconCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},writeCard:{background:"var(--surface)",borderRadius:14,padding:16,border:"1px solid var(--border)",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},tuneRow:{display:"flex",justifyContent:"flex-end",marginBottom:10},tuneBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tuneOn:{background:kr,color:"#fff",borderColor:kr},tuneHint:{fontSize:11,color:"var(--text-3)",fontWeight:500},writeNav:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,marginBottom:12},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center"},navDisabled:{opacity:.35,cursor:"not-allowed"},writeDate:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:150,textAlign:"center"},writeArea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:120,resize:"vertical",lineHeight:1.6},writeSave:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",background:kr,color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},readEntry:{display:"flex",gap:8,padding:"6px 2px"},readText:{fontSize:15,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.6,margin:0,whiteSpace:"pre-wrap"},manifestBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,width:"100%",border:"none",background:"linear-gradient(135deg,#C9A227,#E0BD45)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:800,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 2px 10px rgba(201,162,39,0.35)"},unmanifestBtn:{display:"block",margin:"0 auto",border:"none",background:"none",color:"var(--text-3)",fontSize:12,fontWeight:600,cursor:"pointer",textDecoration:"underline",fontFamily:"inherit"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.6)",zIndex:200,display:"grid",placeItems:"center",padding:16},celebBox:{background:"var(--surface)",color:"var(--text)",borderRadius:20,padding:"36px 30px",textAlign:"center",maxWidth:360,boxShadow:"0 12px 48px rgba(0,0,0,0.3)"},celebEmoji:{fontSize:40,marginBottom:10},celebTitle:{fontSize:24,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginBottom:10,color:kr},celebDream:{fontSize:15,fontStyle:"italic",fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.5,marginBottom:10},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:kr,color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},$l=[{id:"sandstone",name:"Sandstone",description:"Warm editorial light — the original Anvil look.",dark:!1,swatch:["#F7F6F3","#4C9A6B","#26241F"],vars:{"--bg":"#F7F6F3","--surface":"#FFFFFF","--surface-2":"#FAFAF8","--hover":"#F2F1EC","--border":"#ECEAE3","--text":"#26241F","--text-2":"#6B675E","--text-3":"#9A968C","--accent":"#4C9A6B","--accent-strong":"#26241F","--accent-2":"#3A352C"}},{id:"midnight",name:"Midnight",description:"Deep low-glare dark mode for night owls and focus.",dark:!0,swatch:["#161513","#6FB58C","#ECEAE3"],vars:{"--bg":"#161513","--surface":"#211F1C","--surface-2":"#1B1A17","--hover":"#2B2924","--border":"#34312B","--text":"#ECEAE3","--text-2":"#B6B1A6","--text-3":"#8A857A","--accent":"#6FB58C","--accent-strong":"#2E6F4B","--accent-2":"#245C3E"}},{id:"blossom",name:"Blossom",description:"Soft rose & blush — gentle, warm, and feminine.",dark:!1,swatch:["#FFF5F8","#E0608E","#B23A6B"],vars:{"--bg":"#FFF5F8","--surface":"#FFFFFF","--surface-2":"#FFF0F4","--hover":"#FDE7EE","--border":"#F6D9E2","--text":"#3D2230","--text-2":"#7A5466","--text-3":"#B08799","--accent":"#E0608E","--accent-strong":"#B23A6B","--accent-2":"#9C2F5C"}},{id:"tide",name:"Tide",description:"Calm professional blues — clean and focused.",dark:!1,swatch:["#F1F6FA","#2E86C1","#1C4E73"],vars:{"--bg":"#F1F6FA","--surface":"#FFFFFF","--surface-2":"#ECF3F9","--hover":"#E2EEF6","--border":"#D5E3EE","--text":"#13283A","--text-2":"#4A6275","--text-3":"#8AA0B0","--accent":"#2E86C1","--accent-strong":"#1C4E73","--accent-2":"#163E5C"}},{id:"velocity",name:"Velocity",description:"High-energy sport — crisp slate with electric orange.",dark:!1,swatch:["#F4F5F7","#F4511E","#1F2A37"],vars:{"--bg":"#F4F5F7","--surface":"#FFFFFF","--surface-2":"#EEF0F3","--hover":"#E7EAEE","--border":"#DCE0E6","--text":"#18202B","--text-2":"#515B68","--text-3":"#8B95A1","--accent":"#F4511E","--accent-strong":"#1F2A37","--accent-2":"#16202B"}},{id:"evergreen",name:"Evergreen",description:"Earthy forest greens — grounded and natural.",dark:!1,swatch:["#F2F6F1","#3E8E52","#2A4A30"],vars:{"--bg":"#F2F6F1","--surface":"#FFFFFF","--surface-2":"#ECF2EA","--hover":"#E4EEE2","--border":"#D7E4D3","--text":"#1E2B20","--text-2":"#4F6151","--text-3":"#8AA08C","--accent":"#3E8E52","--accent-strong":"#2A4A30","--accent-2":"#213B26"}},{id:"amethyst",name:"Amethyst",description:"Premium purple & plum — elegant and refined.",dark:!1,swatch:["#F6F4FB","#7A4FE0","#3A2D5C"],vars:{"--bg":"#F6F4FB","--surface":"#FFFFFF","--surface-2":"#F1EDF9","--hover":"#EAE3F6","--border":"#DFD6F0","--text":"#241B36","--text-2":"#5A4E72","--text-3":"#9588AE","--accent":"#7A4FE0","--accent-strong":"#3A2D5C","--accent-2":"#2E2349"}}],Ag="sandstone",ub="anvil_theme",Jh=t=>$l.find(e=>e.id===t)||$l[0];function bb(){try{return localStorage.getItem(ub)||Ag}catch{return Ag}}function Nn(t,e=!0){const r=Jh(t),o=document.documentElement;Object.entries(r.vars).forEach(([i,l])=>o.style.setProperty(i,l)),o.style.colorScheme=r.dark?"dark":"light",o.setAttribute("data-theme",r.id);const s=document.querySelector('meta[name="theme-color"]');if(s&&s.setAttribute("content",r.vars["--surface"]),e)try{localStorage.setItem(ub,r.id)}catch{}return r.id}function Zh(t=560){const[e,r]=y.useState(()=>window.innerWidth<=t);return y.useEffect(()=>{const o=()=>r(window.innerWidth<=t);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[t]),e}function qh({screens:t,order:e,hidden:r,themeId:o,currency:s,onSaveSidebar:i,onPreviewTheme:l,onCommitTheme:a,onSelectCurrency:d,onClose:g}){const[m,v]=y.useState("sidebar"),[p,S]=y.useState(()=>e.map(f=>({id:f,hidden:r.includes(f)}))),[w,j]=y.useState(o),[C,b]=y.useState(""),[u,c]=y.useState(!1),k=Zh();y.useEffect(()=>{U.getSetting("golden_music").then(f=>b((f==null?void 0:f.value)||"")).catch(()=>{})},[]);const x=()=>{U.setSetting("golden_music",C.trim()).then(()=>{c(!0),setTimeout(()=>c(!1),1500)}).catch(()=>{})},T=f=>{j(f),l(f)},R=p.filter(f=>!f.hidden).length,F=(f,_)=>{const N=f+_;if(N<0||N>=p.length)return;const H=[...p];[H[f],H[N]]=[H[N],H[f]],S(H)},E=f=>{const _=p[f];if(!_.hidden&&R<=1)return;const N=[...p];N[f]={..._,hidden:!_.hidden},S(N)},W=()=>{i(p.map(f=>f.id),p.filter(f=>f.hidden).map(f=>f.id))},et=k?{...at.overlay,padding:0}:at.overlay,M=k?{...at.modal,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"100%",borderRadius:0,border:"none"}:at.modal;return n.jsx("div",{style:et,onClick:g,children:n.jsxs("div",{style:M,onClick:f=>f.stopPropagation(),children:[n.jsxs("div",{style:at.head,children:[n.jsx("div",{style:at.title,children:"Settings"}),n.jsx("button",{onClick:g,style:at.closeBtn,children:n.jsx(pt,{size:18})})]}),n.jsxs("div",{style:at.tabs,children:[n.jsxs("button",{onClick:()=>v("sidebar"),style:{...at.tab,...m==="sidebar"?at.tabOn:{}},children:[n.jsx(rf,{size:15})," Configure sidebar"]}),n.jsxs("button",{onClick:()=>v("themes"),style:{...at.tab,...m==="themes"?at.tabOn:{}},children:[n.jsx(lf,{size:15})," Themes"]}),n.jsxs("button",{onClick:()=>v("currency"),style:{...at.tab,...m==="currency"?at.tabOn:{}},children:[n.jsx(Xm,{size:15})," Currency"]}),n.jsxs("button",{onClick:()=>v("music"),style:{...at.tab,...m==="music"?at.tabOn:{}},children:[n.jsx(eb,{size:15})," Music"]})]}),n.jsx("div",{style:at.body,children:m==="sidebar"?n.jsxs(n.Fragment,{children:[n.jsx("p",{style:at.hint,children:"Reorder items with the arrows, and hide the ones you don't use. Hidden items disappear from the sidebar but stay accessible here."}),n.jsx("div",{style:at.list,children:p.map((f,_)=>{const N=t[f.id],H=N.icon;return n.jsxs("div",{style:{...at.row,opacity:f.hidden?.5:1},children:[n.jsx("span",{style:at.rowNum,children:_+1}),n.jsx(H,{size:16}),n.jsx("span",{style:at.rowLabel,children:N.label}),n.jsx("button",{onClick:()=>E(_),title:f.hidden?"Show":"Hide",style:{...at.iconBtn,...f.hidden?{}:{color:"var(--accent)"}},children:f.hidden?n.jsx(Xu,{size:15}):n.jsx(Rl,{size:15})}),n.jsx("button",{onClick:()=>F(_,-1),disabled:_===0,style:{...at.iconBtn,opacity:_===0?.3:1},children:n.jsx(Qm,{size:15})}),n.jsx("button",{onClick:()=>F(_,1),disabled:_===p.length-1,style:{...at.iconBtn,opacity:_===p.length-1?.3:1},children:n.jsx(_a,{size:15})})]},f.id)})}),n.jsxs("button",{onClick:W,style:at.saveBtn,children:[n.jsx(yt,{size:15})," Save sidebar"]})]}):m==="currency"?n.jsxs(n.Fragment,{children:[n.jsx("p",{style:at.hint,children:"Choose the currency used across Vault and Worth. Applies instantly."}),n.jsx("div",{style:at.list,children:Nl.map(f=>{const _=f.code===s;return n.jsxs("button",{onClick:()=>d(f.code),style:{...at.row,cursor:"pointer",textAlign:"left",width:"100%",..._?{borderColor:"var(--accent)"}:{}},children:[n.jsx("span",{style:at.curSymbol,children:f.symbol}),n.jsxs("span",{style:at.rowLabel,children:[f.label," ",n.jsx("span",{style:at.curCode,children:f.code})]}),_&&n.jsx("span",{style:at.themeCheck,children:n.jsx(yt,{size:13})})]},f.code)})})]}):m==="music"?n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:at.hint,children:["Paste a YouTube link to play softly while you write in the ",n.jsx("b",{children:"Golden Book"}),". It plays only on that screen (audio only)."]}),n.jsx("input",{value:C,onChange:f=>b(f.target.value),placeholder:"https://youtube.com/watch?v=…",style:at.musicInput}),n.jsxs("button",{onClick:x,style:at.saveBtn,children:[n.jsx(yt,{size:15})," ",u?"Saved":"Save music"]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:at.hint,children:["Tap a theme to preview it live, then hit ",n.jsx("b",{children:"Apply theme"})," to keep it."]}),n.jsx("div",{style:at.themeGrid,children:$l.map(f=>{const _=f.id===w;return n.jsxs("button",{onClick:()=>T(f.id),style:{...at.themeCard,..._?at.themeCardOn:{}},children:[n.jsxs("div",{style:at.swatchRow,children:[f.swatch.map((N,H)=>n.jsx("span",{style:{...at.swatch,background:N}},H)),_&&n.jsx("span",{style:at.themeCheck,children:n.jsx(yt,{size:13})})]}),n.jsxs("div",{style:at.themeName,children:[f.name,f.dark?n.jsx("span",{style:at.darkTag,children:"Dark"}):null]}),n.jsx("div",{style:at.themeDesc,children:f.description})]},f.id)})}),n.jsxs("button",{onClick:()=>a(w),disabled:w===o,style:{...at.saveBtn,...w===o?at.saveBtnDisabled:{}},children:[n.jsx(yt,{size:15})," ",w===o?"Theme applied":"Apply theme"]})]})})]})})}const at={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,width:460,maxWidth:"100%",maxHeight:"88vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",overflow:"hidden"},head:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 18px",borderBottom:"1px solid var(--border)",flexShrink:0},title:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},tabs:{display:"flex",flexWrap:"wrap",gap:6,padding:"12px 18px 0",flexShrink:0},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"transparent"},body:{padding:"16px 18px 20px",overflowY:"auto",overflowX:"hidden",flex:1,minHeight:0},hint:{fontSize:12.5,color:"var(--text-3)",lineHeight:1.5,margin:"0 0 14px"},list:{display:"flex",flexDirection:"column",gap:6},row:{display:"flex",alignItems:"center",gap:10,padding:"9px 11px",background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:9},rowNum:{fontSize:11,fontWeight:700,color:"var(--text-3)",width:16,textAlign:"center"},rowLabel:{flex:1,fontSize:13.5,fontWeight:500},curSymbol:{width:22,textAlign:"center",fontSize:15,fontWeight:700,color:"var(--text)"},curCode:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginLeft:4},iconBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},saveBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",marginTop:16,border:"none",background:"var(--accent)",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer"},saveBtnDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"default"},musicInput:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:12},themeGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},themeCard:{textAlign:"left",border:"2px solid var(--border)",background:"var(--surface-2)",borderRadius:12,padding:12,cursor:"pointer",display:"flex",flexDirection:"column",gap:6,outline:"none",WebkitTapHighlightColor:"transparent",transition:"border-color .15s ease, box-shadow .15s ease"},themeCardOn:{borderColor:"var(--accent)",boxShadow:"0 0 0 3px color-mix(in srgb, var(--accent) 25%, transparent)"},swatchRow:{display:"flex",alignItems:"center",gap:5,position:"relative"},swatch:{width:22,height:22,borderRadius:"50%",border:"1px solid rgba(0,0,0,0.08)"},themeCheck:{marginLeft:"auto",width:20,height:20,borderRadius:"50%",background:"var(--accent)",color:"#fff",display:"grid",placeItems:"center"},themeName:{fontSize:14,fontWeight:700,display:"flex",alignItems:"center",gap:6},darkTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",background:"var(--hover)",color:"var(--text-2)",padding:"1px 6px",borderRadius:6},themeDesc:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4}};Nn(bb(),!1);const Jn={kickstart:{label:"Kickstart",icon:gf,component:Gh},golden:{label:"Golden Book",icon:Jm,component:Yh},habits:{label:"Habits",icon:bf,component:Lf},quadrant:{label:"Quadrant",icon:tb,component:zf},goals:{label:"Goals",icon:Pa,component:Af},grove:{label:"Grove",icon:ff,component:Ch},worth:{label:"Worth",icon:ef,component:Eh},vault:{label:"Vault",icon:qu,component:Rh},journal:{label:"Journal",icon:Ku,component:Kf},revision:{label:"Revision",icon:nb,component:lh},affirmations:{label:"Affirmations",icon:So,component:gh},skills:{label:"Skills",icon:Zm,component:Xf},spiritual:{label:"Spiritual",icon:as,component:qf}},pb=["kickstart","golden","habits","quadrant","goals","grove","journal","revision","affirmations","skills","spiritual","worth","vault"];function Ko(t){const e=pb.filter(s=>Jn[s]),o=[...(Array.isArray(t)?t:[]).filter(s=>Jn[s])];return e.forEach(s=>{o.includes(s)||o.push(s)}),o}function tv(){const[t,e]=y.useState(()=>window.innerWidth<720);return y.useEffect(()=>{const r=()=>e(window.innerWidth<720);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),t}function ev(){const[t,e]=y.useState("habits"),[r,o]=y.useState(!1),[s,i]=y.useState(null),[l,a]=y.useState(!1),[d,g]=y.useState(!1),[m,v]=y.useState(bb()),[p,S]=y.useState(ho()),[w,j]=y.useState(()=>Ko(pb)),[C,b]=y.useState([]),u=tv();y.useEffect(()=>{let N=!1;const H=()=>{Ml(),i(null)};return window.addEventListener("anvil-unauthorized",H),Oa()?U.me().then(z=>{N||i(z)}).catch(()=>{}).finally(()=>{N||a(!0)}):a(!0),()=>{N=!0,window.removeEventListener("anvil-unauthorized",H)}},[]),y.useEffect(()=>{s&&(U.getSetting("theme").then(N=>{N!=null&&N.value&&v(Nn(N.value))}).catch(()=>{}),U.getSetting("currency").then(N=>{N!=null&&N.value&&S(fg(N.value))}).catch(()=>{}),U.getSetting("sidebar_order").then(N=>{Array.isArray(N==null?void 0:N.value)&&j(Ko(N.value))}).catch(()=>{}),U.getSetting("sidebar_hidden").then(N=>{Array.isArray(N==null?void 0:N.value)&&b(N.value)}).catch(()=>{}))},[s]);function c(N){e(N),o(!1)}const k=()=>{Ml(),i(null)},x=N=>{Nn(N,!1)},T=N=>{v(Nn(N)),U.setSetting("theme",N).catch(()=>{}),g(!1)},R=()=>{Nn(m,!1),g(!1)},F=N=>{S(fg(N)),U.setSetting("currency",N).catch(()=>{})},E=(N,H)=>{if(j(Ko(N)),b(H),g(!1),U.setSetting("sidebar_order",N).catch(()=>{}),U.setSetting("sidebar_hidden",H).catch(()=>{}),H.includes(t)){const z=Ko(N).find(B=>!H.includes(B));z&&e(z)}},W=w.filter(N=>!C.includes(N));if(!l)return n.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:"'Inter',system-ui,sans-serif",color:"var(--text-3)"},children:"Loading…"});if(!s)return n.jsx(Bh,{onAuthed:i});const et=Jn[t],M=et.component,f=()=>n.jsx("div",{style:xt.navItems,children:W.map(N=>{const H=Jn[N];if(!H)return null;const z=H.icon,B=t===N;return n.jsxs("button",{onClick:()=>c(N),title:H.label,style:{...xt.navItem,...B?xt.navItemOn:{}},children:[n.jsx(z,{size:18}),n.jsx("span",{style:xt.navLabel,children:H.label})]},N)})}),_=()=>n.jsxs("div",{style:xt.footerWrap,children:[n.jsxs("button",{onClick:()=>g(!0),style:xt.settingsBtn,title:"Settings",children:[n.jsx(uf,{size:17}),n.jsx("span",{children:"Settings"})]}),n.jsxs("div",{style:xt.userFooter,children:[n.jsxs("div",{style:xt.userInfo,children:[n.jsx("div",{style:xt.userAvatar,children:(s.name||s.email||"?").charAt(0).toUpperCase()}),n.jsxs("div",{style:{minWidth:0},children:[n.jsx("div",{style:xt.userName,children:s.name||"You"}),n.jsx("div",{style:xt.userEmail,children:s.email})]})]}),n.jsx("button",{onClick:k,style:xt.logoutBtn,title:"Sign out",children:n.jsx(nf,{size:16})})]})]});return n.jsxs("div",{style:xt.shell,children:[!u&&n.jsxs("nav",{style:xt.nav,children:[n.jsxs("div",{style:xt.brand,children:[n.jsx("div",{style:xt.brandLogo,children:"B"}),n.jsx("span",{style:xt.brandName,children:"Anvil"})]}),n.jsx(f,{}),n.jsx(_,{})]}),u&&r&&n.jsx("div",{style:xt.overlay,onClick:()=>o(!1),children:n.jsxs("nav",{style:xt.drawer,onClick:N=>N.stopPropagation(),children:[n.jsxs("div",{style:xt.drawerHeader,children:[n.jsxs("div",{style:xt.brand,children:[n.jsx("div",{style:xt.brandLogo,children:"B"}),n.jsx("span",{style:xt.brandName,children:"Anvil"})]}),n.jsx("button",{style:xt.closeBtn,onClick:()=>o(!1),children:n.jsx(pt,{size:20})})]}),n.jsx(f,{}),n.jsx(_,{})]})}),n.jsxs("div",{style:xt.content,children:[u&&n.jsxs("div",{style:xt.topBar,children:[n.jsx("button",{style:xt.menuBtn,onClick:()=>o(!0),children:n.jsx(La,{size:22})}),n.jsx("span",{style:xt.topBarTitle,children:et.label}),n.jsx("div",{style:{width:38}})]}),n.jsx("main",{style:xt.main,children:n.jsx(M,{})})]}),d&&n.jsx(qh,{screens:Jn,order:w,hidden:C,themeId:m,currency:p,onSaveSidebar:E,onPreviewTheme:x,onCommitTheme:T,onSelectCurrency:F,onClose:R})]})}const xt={shell:{display:"flex",height:"100vh",overflow:"hidden",fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)"},nav:{width:200,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column",padding:"20px 10px",gap:2},brand:{display:"flex",alignItems:"center",gap:9,padding:"6px 10px 20px",borderBottom:"1px solid var(--border)",marginBottom:8},brandLogo:{width:30,height:30,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:14,fontWeight:800,fontFamily:"'Fraunces', Georgia, serif",flexShrink:0},brandName:{fontSize:16,fontWeight:700,letterSpacing:"-0.01em",color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},navItems:{display:"flex",flexDirection:"column",gap:2},navItem:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},navItemOn:{background:"var(--hover)",color:"var(--text)",fontWeight:700},footerWrap:{marginTop:"auto",paddingTop:8},settingsBtn:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},userFooter:{marginTop:4,paddingTop:12,borderTop:"1px solid var(--border)",display:"flex",alignItems:"center",gap:8},userInfo:{display:"flex",alignItems:"center",gap:8,flex:1,minWidth:0},userAvatar:{width:30,height:30,borderRadius:"50%",background:"#8268B0",color:"#fff",display:"grid",placeItems:"center",fontSize:13,fontWeight:700,flexShrink:0},userName:{fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},userEmail:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logoutBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",padding:7,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},navLabel:{flex:1},content:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},main:{flex:1,overflowY:"auto",overflowX:"hidden"},topBar:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"var(--surface)",borderBottom:"1px solid var(--border)",flexShrink:0},topBarTitle:{fontSize:16,fontWeight:700,color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},menuBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text)",padding:8,borderRadius:8,display:"grid",placeItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:100,display:"flex"},drawer:{width:220,background:"var(--surface)",height:"100%",display:"flex",flexDirection:"column",padding:"16px 10px",gap:2,boxShadow:"4px 0 24px rgba(0,0,0,0.12)"},drawerHeader:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:4},closeBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",padding:6,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0}};Uu(document.getElementById("root")).render(n.jsx(y.StrictMode,{children:n.jsx(ev,{})}));
