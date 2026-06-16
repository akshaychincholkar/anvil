(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();var Xd={exports:{}},hs={},Jd={exports:{}},lt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zn=Symbol.for("react.element"),Bu=Symbol.for("react.portal"),Au=Symbol.for("react.fragment"),Fu=Symbol.for("react.strict_mode"),Du=Symbol.for("react.profiler"),Ru=Symbol.for("react.provider"),Mu=Symbol.for("react.context"),_u=Symbol.for("react.forward_ref"),Wu=Symbol.for("react.suspense"),Lu=Symbol.for("react.memo"),Nu=Symbol.for("react.lazy"),wa=Symbol.iterator;function Pu(t){return t===null||typeof t!="object"?null:(t=wa&&t[wa]||t["@@iterator"],typeof t=="function"?t:null)}var Zd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qd=Object.assign,tg={};function en(t,e,r){this.props=t,this.context=e,this.refs=tg,this.updater=r||Zd}en.prototype.isReactComponent={};en.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};en.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function eg(){}eg.prototype=en.prototype;function yl(t,e,r){this.props=t,this.context=e,this.refs=tg,this.updater=r||Zd}var xl=yl.prototype=new eg;xl.constructor=yl;qd(xl,en.prototype);xl.isPureReactComponent=!0;var Sa=Array.isArray,rg=Object.prototype.hasOwnProperty,kl={current:null},ng={key:!0,ref:!0,__self:!0,__source:!0};function og(t,e,r){var n,s={},i=null,l=null;if(e!=null)for(n in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(i=""+e.key),e)rg.call(e,n)&&!ng.hasOwnProperty(n)&&(s[n]=e[n]);var a=arguments.length-2;if(a===1)s.children=r;else if(1<a){for(var d=Array(a),g=0;g<a;g++)d[g]=arguments[g+2];s.children=d}if(t&&t.defaultProps)for(n in a=t.defaultProps,a)s[n]===void 0&&(s[n]=a[n]);return{$$typeof:Zn,type:t,key:i,ref:l,props:s,_owner:kl.current}}function Ou(t,e){return{$$typeof:Zn,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function wl(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zn}function $u(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var ja=/\/+/g;function Ms(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$u(""+t.key):e.toString(36)}function Ao(t,e,r,n,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case Zn:case Bu:l=!0}}if(l)return l=t,s=s(l),t=n===""?"."+Ms(l,0):n,Sa(s)?(r="",t!=null&&(r=t.replace(ja,"$&/")+"/"),Ao(s,e,r,"",function(g){return g})):s!=null&&(wl(s)&&(s=Ou(s,r+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(ja,"$&/")+"/")+t)),e.push(s)),1;if(l=0,n=n===""?".":n+":",Sa(t))for(var a=0;a<t.length;a++){i=t[a];var d=n+Ms(i,a);l+=Ao(i,e,r,d,s)}else if(d=Pu(t),typeof d=="function")for(t=d.call(t),a=0;!(i=t.next()).done;)i=i.value,d=n+Ms(i,a++),l+=Ao(i,e,r,d,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function lo(t,e,r){if(t==null)return t;var n=[],s=0;return Ao(t,n,"","",function(i){return e.call(r,i,s++)}),n}function Hu(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ht={current:null},Fo={transition:null},Uu={ReactCurrentDispatcher:Ht,ReactCurrentBatchConfig:Fo,ReactCurrentOwner:kl};function sg(){throw Error("act(...) is not supported in production builds of React.")}lt.Children={map:lo,forEach:function(t,e,r){lo(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return lo(t,function(){e++}),e},toArray:function(t){return lo(t,function(e){return e})||[]},only:function(t){if(!wl(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};lt.Component=en;lt.Fragment=Au;lt.Profiler=Du;lt.PureComponent=yl;lt.StrictMode=Fu;lt.Suspense=Wu;lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uu;lt.act=sg;lt.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=qd({},t.props),s=t.key,i=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,l=kl.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(d in e)rg.call(e,d)&&!ng.hasOwnProperty(d)&&(n[d]=e[d]===void 0&&a!==void 0?a[d]:e[d])}var d=arguments.length-2;if(d===1)n.children=r;else if(1<d){a=Array(d);for(var g=0;g<d;g++)a[g]=arguments[g+2];n.children=a}return{$$typeof:Zn,type:t.type,key:s,ref:i,props:n,_owner:l}};lt.createContext=function(t){return t={$$typeof:Mu,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ru,_context:t},t.Consumer=t};lt.createElement=og;lt.createFactory=function(t){var e=og.bind(null,t);return e.type=t,e};lt.createRef=function(){return{current:null}};lt.forwardRef=function(t){return{$$typeof:_u,render:t}};lt.isValidElement=wl;lt.lazy=function(t){return{$$typeof:Nu,_payload:{_status:-1,_result:t},_init:Hu}};lt.memo=function(t,e){return{$$typeof:Lu,type:t,compare:e===void 0?null:e}};lt.startTransition=function(t){var e=Fo.transition;Fo.transition={};try{t()}finally{Fo.transition=e}};lt.unstable_act=sg;lt.useCallback=function(t,e){return Ht.current.useCallback(t,e)};lt.useContext=function(t){return Ht.current.useContext(t)};lt.useDebugValue=function(){};lt.useDeferredValue=function(t){return Ht.current.useDeferredValue(t)};lt.useEffect=function(t,e){return Ht.current.useEffect(t,e)};lt.useId=function(){return Ht.current.useId()};lt.useImperativeHandle=function(t,e,r){return Ht.current.useImperativeHandle(t,e,r)};lt.useInsertionEffect=function(t,e){return Ht.current.useInsertionEffect(t,e)};lt.useLayoutEffect=function(t,e){return Ht.current.useLayoutEffect(t,e)};lt.useMemo=function(t,e){return Ht.current.useMemo(t,e)};lt.useReducer=function(t,e,r){return Ht.current.useReducer(t,e,r)};lt.useRef=function(t){return Ht.current.useRef(t)};lt.useState=function(t){return Ht.current.useState(t)};lt.useSyncExternalStore=function(t,e,r){return Ht.current.useSyncExternalStore(t,e,r)};lt.useTransition=function(){return Ht.current.useTransition()};lt.version="18.3.1";Jd.exports=lt;var k=Jd.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gu=k,Vu=Symbol.for("react.element"),Yu=Symbol.for("react.fragment"),Qu=Object.prototype.hasOwnProperty,Ku=Gu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xu={key:!0,ref:!0,__self:!0,__source:!0};function ig(t,e,r){var n,s={},i=null,l=null;r!==void 0&&(i=""+r),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(l=e.ref);for(n in e)Qu.call(e,n)&&!Xu.hasOwnProperty(n)&&(s[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)s[n]===void 0&&(s[n]=e[n]);return{$$typeof:Vu,type:t,key:i,ref:l,props:s,_owner:Ku.current}}hs.Fragment=Yu;hs.jsx=ig;hs.jsxs=ig;Xd.exports=hs;var o=Xd.exports,lg={exports:{}},te={},ag={exports:{}},dg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(f,F){var y=f.length;f.push(F);t:for(;0<y;){var T=y-1>>>1,L=f[T];if(0<s(L,F))f[T]=F,f[y]=L,y=T;else break t}}function r(f){return f.length===0?null:f[0]}function n(f){if(f.length===0)return null;var F=f[0],y=f.pop();if(y!==F){f[0]=y;t:for(var T=0,L=f.length,E=L>>>1;T<E;){var P=2*(T+1)-1,at=f[P],ot=P+1,q=f[ot];if(0>s(at,y))ot<L&&0>s(q,at)?(f[T]=q,f[ot]=y,T=ot):(f[T]=at,f[P]=y,T=P);else if(ot<L&&0>s(q,y))f[T]=q,f[ot]=y,T=ot;else break t}}return F}function s(f,F){var y=f.sortIndex-F.sortIndex;return y!==0?y:f.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();t.unstable_now=function(){return l.now()-a}}var d=[],g=[],m=1,v=null,p=3,j=!1,S=!1,w=!1,I=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function u(f){for(var F=r(g);F!==null;){if(F.callback===null)n(g);else if(F.startTime<=f)n(g),F.sortIndex=F.expirationTime,e(d,F);else break;F=r(g)}}function x(f){if(w=!1,u(f),!S)if(r(d)!==null)S=!0,N(h);else{var F=r(g);F!==null&&z(x,F.startTime-f)}}function h(f,F){S=!1,w&&(w=!1,b(B),B=-1),j=!0;var y=p;try{for(u(F),v=r(d);v!==null&&(!(v.expirationTime>F)||f&&!et());){var T=v.callback;if(typeof T=="function"){v.callback=null,p=v.priorityLevel;var L=T(v.expirationTime<=F);F=t.unstable_now(),typeof L=="function"?v.callback=L:v===r(d)&&n(d),u(F)}else n(d);v=r(d)}if(v!==null)var E=!0;else{var P=r(g);P!==null&&z(x,P.startTime-F),E=!1}return E}finally{v=null,p=y,j=!1}}var C=!1,R=null,B=-1,M=5,_=-1;function et(){return!(t.unstable_now()-_<M)}function rt(){if(R!==null){var f=t.unstable_now();_=f;var F=!0;try{F=R(!0,f)}finally{F?Z():(C=!1,R=null)}}else C=!1}var Z;if(typeof c=="function")Z=function(){c(rt)};else if(typeof MessageChannel<"u"){var dt=new MessageChannel,G=dt.port2;dt.port1.onmessage=rt,Z=function(){G.postMessage(null)}}else Z=function(){I(rt,0)};function N(f){R=f,C||(C=!0,Z())}function z(f,F){B=I(function(){f(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(f){f.callback=null},t.unstable_continueExecution=function(){S||j||(S=!0,N(h))},t.unstable_forceFrameRate=function(f){0>f||125<f?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<f?Math.floor(1e3/f):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(d)},t.unstable_next=function(f){switch(p){case 1:case 2:case 3:var F=3;break;default:F=p}var y=p;p=F;try{return f()}finally{p=y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(f,F){switch(f){case 1:case 2:case 3:case 4:case 5:break;default:f=3}var y=p;p=f;try{return F()}finally{p=y}},t.unstable_scheduleCallback=function(f,F,y){var T=t.unstable_now();switch(typeof y=="object"&&y!==null?(y=y.delay,y=typeof y=="number"&&0<y?T+y:T):y=T,f){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=y+L,f={id:m++,callback:F,priorityLevel:f,startTime:y,expirationTime:L,sortIndex:-1},y>T?(f.sortIndex=y,e(g,f),r(d)===null&&f===r(g)&&(w?(b(B),B=-1):w=!0,z(x,y-T))):(f.sortIndex=L,e(d,f),S||j||(S=!0,N(h))),f},t.unstable_shouldYield=et,t.unstable_wrapCallback=function(f){var F=p;return function(){var y=p;p=F;try{return f.apply(this,arguments)}finally{p=y}}}})(dg);ag.exports=dg;var Ju=ag.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zu=k,qt=Ju;function W(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gg=new Set,Dn={};function jr(t,e){Qr(t,e),Qr(t+"Capture",e)}function Qr(t,e){for(Dn[t]=e,t=0;t<e.length;t++)gg.add(e[t])}var Fe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xi=Object.prototype.hasOwnProperty,qu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ca={},Ia={};function tb(t){return xi.call(Ia,t)?!0:xi.call(Ca,t)?!1:qu.test(t)?Ia[t]=!0:(Ca[t]=!0,!1)}function eb(t,e,r,n){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function rb(t,e,r,n){if(e===null||typeof e>"u"||eb(t,e,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ut(t,e,r,n,s,i,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=l}var _t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_t[t]=new Ut(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];_t[e]=new Ut(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){_t[t]=new Ut(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_t[t]=new Ut(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_t[t]=new Ut(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){_t[t]=new Ut(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){_t[t]=new Ut(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){_t[t]=new Ut(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){_t[t]=new Ut(t,5,!1,t.toLowerCase(),null,!1,!1)});var Sl=/[\-:]([a-z])/g;function jl(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Sl,jl);_t[e]=new Ut(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Sl,jl);_t[e]=new Ut(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Sl,jl);_t[e]=new Ut(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){_t[t]=new Ut(t,1,!1,t.toLowerCase(),null,!1,!1)});_t.xlinkHref=new Ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){_t[t]=new Ut(t,1,!1,t.toLowerCase(),null,!0,!0)});function Cl(t,e,r,n){var s=_t.hasOwnProperty(e)?_t[e]:null;(s!==null?s.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(rb(e,r,s,n)&&(r=null),n||s===null?tb(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):s.mustUseProperty?t[s.propertyName]=r===null?s.type===3?!1:"":r:(e=s.attributeName,n=s.attributeNamespace,r===null?t.removeAttribute(e):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,n?t.setAttributeNS(n,e,r):t.setAttribute(e,r))))}var We=Zu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ao=Symbol.for("react.element"),Er=Symbol.for("react.portal"),Br=Symbol.for("react.fragment"),Il=Symbol.for("react.strict_mode"),ki=Symbol.for("react.profiler"),cg=Symbol.for("react.provider"),ug=Symbol.for("react.context"),zl=Symbol.for("react.forward_ref"),wi=Symbol.for("react.suspense"),Si=Symbol.for("react.suspense_list"),Tl=Symbol.for("react.memo"),Pe=Symbol.for("react.lazy"),bg=Symbol.for("react.offscreen"),za=Symbol.iterator;function ln(t){return t===null||typeof t!="object"?null:(t=za&&t[za]||t["@@iterator"],typeof t=="function"?t:null)}var jt=Object.assign,_s;function vn(t){if(_s===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);_s=e&&e[1]||""}return`
`+_s+t}var Ws=!1;function Ls(t,e){if(!t||Ws)return"";Ws=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(g){var n=g}Reflect.construct(t,[],e)}else{try{e.call()}catch(g){n=g}t.call(e.prototype)}else{try{throw Error()}catch(g){n=g}t()}}catch(g){if(g&&n&&typeof g.stack=="string"){for(var s=g.stack.split(`
`),i=n.stack.split(`
`),l=s.length-1,a=i.length-1;1<=l&&0<=a&&s[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(s[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||s[l]!==i[a]){var d=`
`+s[l].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=l&&0<=a);break}}}finally{Ws=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?vn(t):""}function nb(t){switch(t.tag){case 5:return vn(t.type);case 16:return vn("Lazy");case 13:return vn("Suspense");case 19:return vn("SuspenseList");case 0:case 2:case 15:return t=Ls(t.type,!1),t;case 11:return t=Ls(t.type.render,!1),t;case 1:return t=Ls(t.type,!0),t;default:return""}}function ji(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Br:return"Fragment";case Er:return"Portal";case ki:return"Profiler";case Il:return"StrictMode";case wi:return"Suspense";case Si:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ug:return(t.displayName||"Context")+".Consumer";case cg:return(t._context.displayName||"Context")+".Provider";case zl:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tl:return e=t.displayName||null,e!==null?e:ji(t.type)||"Memo";case Pe:e=t._payload,t=t._init;try{return ji(t(e))}catch{}}return null}function ob(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ji(e);case 8:return e===Il?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sb(t){var e=pg(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,i=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(l){n=""+l,i.call(this,l)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function go(t){t._valueTracker||(t._valueTracker=sb(t))}function mg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),n="";return t&&(n=pg(t)?t.checked?"true":"false":t.value),t=n,t!==r?(e.setValue(t),!0):!1}function Uo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ci(t,e){var r=e.checked;return jt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Ta(t,e){var r=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;r=er(e.value!=null?e.value:r),t._wrapperState={initialChecked:n,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function fg(t,e){e=e.checked,e!=null&&Cl(t,"checked",e,!1)}function Ii(t,e){fg(t,e);var r=er(e.value),n=e.type;if(r!=null)n==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zi(t,e.type,r):e.hasOwnProperty("defaultValue")&&zi(t,e.type,er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ea(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function zi(t,e,r){(e!=="number"||Uo(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var hn=Array.isArray;function Or(t,e,r,n){if(t=t.options,e){e={};for(var s=0;s<r.length;s++)e["$"+r[s]]=!0;for(r=0;r<t.length;r++)s=e.hasOwnProperty("$"+t[r].value),t[r].selected!==s&&(t[r].selected=s),s&&n&&(t[r].defaultSelected=!0)}else{for(r=""+er(r),e=null,s=0;s<t.length;s++){if(t[s].value===r){t[s].selected=!0,n&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Ti(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(W(91));return jt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ba(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(W(92));if(hn(r)){if(1<r.length)throw Error(W(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:er(r)}}function vg(t,e){var r=er(e.value),n=er(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),n!=null&&(t.defaultValue=""+n)}function Aa(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ei(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var co,yg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,n,s){MSApp.execUnsafeLocalFunction(function(){return t(e,r,n,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(co=co||document.createElement("div"),co.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=co.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Rn(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Sn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ib=["Webkit","ms","Moz","O"];Object.keys(Sn).forEach(function(t){ib.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Sn[e]=Sn[t]})});function xg(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Sn.hasOwnProperty(t)&&Sn[t]?(""+e).trim():e+"px"}function kg(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var n=r.indexOf("--")===0,s=xg(r,e[r],n);r==="float"&&(r="cssFloat"),n?t.setProperty(r,s):t[r]=s}}var lb=jt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bi(t,e){if(e){if(lb[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(W(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(W(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(W(61))}if(e.style!=null&&typeof e.style!="object")throw Error(W(62))}}function Ai(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fi=null;function El(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Di=null,$r=null,Hr=null;function Fa(t){if(t=eo(t)){if(typeof Di!="function")throw Error(W(280));var e=t.stateNode;e&&(e=Ss(e),Di(t.stateNode,t.type,e))}}function wg(t){$r?Hr?Hr.push(t):Hr=[t]:$r=t}function Sg(){if($r){var t=$r,e=Hr;if(Hr=$r=null,Fa(t),e)for(t=0;t<e.length;t++)Fa(e[t])}}function jg(t,e){return t(e)}function Cg(){}var Ns=!1;function Ig(t,e,r){if(Ns)return t(e,r);Ns=!0;try{return jg(t,e,r)}finally{Ns=!1,($r!==null||Hr!==null)&&(Cg(),Sg())}}function Mn(t,e){var r=t.stateNode;if(r===null)return null;var n=Ss(r);if(n===null)return null;r=n[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(W(231,e,typeof r));return r}var Ri=!1;if(Fe)try{var an={};Object.defineProperty(an,"passive",{get:function(){Ri=!0}}),window.addEventListener("test",an,an),window.removeEventListener("test",an,an)}catch{Ri=!1}function ab(t,e,r,n,s,i,l,a,d){var g=Array.prototype.slice.call(arguments,3);try{e.apply(r,g)}catch(m){this.onError(m)}}var jn=!1,Go=null,Vo=!1,Mi=null,db={onError:function(t){jn=!0,Go=t}};function gb(t,e,r,n,s,i,l,a,d){jn=!1,Go=null,ab.apply(db,arguments)}function cb(t,e,r,n,s,i,l,a,d){if(gb.apply(this,arguments),jn){if(jn){var g=Go;jn=!1,Go=null}else throw Error(W(198));Vo||(Vo=!0,Mi=g)}}function Cr(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function zg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Da(t){if(Cr(t)!==t)throw Error(W(188))}function ub(t){var e=t.alternate;if(!e){if(e=Cr(t),e===null)throw Error(W(188));return e!==t?null:t}for(var r=t,n=e;;){var s=r.return;if(s===null)break;var i=s.alternate;if(i===null){if(n=s.return,n!==null){r=n;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===r)return Da(s),t;if(i===n)return Da(s),e;i=i.sibling}throw Error(W(188))}if(r.return!==n.return)r=s,n=i;else{for(var l=!1,a=s.child;a;){if(a===r){l=!0,r=s,n=i;break}if(a===n){l=!0,n=s,r=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===r){l=!0,r=i,n=s;break}if(a===n){l=!0,n=i,r=s;break}a=a.sibling}if(!l)throw Error(W(189))}}if(r.alternate!==n)throw Error(W(190))}if(r.tag!==3)throw Error(W(188));return r.stateNode.current===r?t:e}function Tg(t){return t=ub(t),t!==null?Eg(t):null}function Eg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Eg(t);if(e!==null)return e;t=t.sibling}return null}var Bg=qt.unstable_scheduleCallback,Ra=qt.unstable_cancelCallback,bb=qt.unstable_shouldYield,pb=qt.unstable_requestPaint,zt=qt.unstable_now,mb=qt.unstable_getCurrentPriorityLevel,Bl=qt.unstable_ImmediatePriority,Ag=qt.unstable_UserBlockingPriority,Yo=qt.unstable_NormalPriority,fb=qt.unstable_LowPriority,Fg=qt.unstable_IdlePriority,ys=null,Se=null;function vb(t){if(Se&&typeof Se.onCommitFiberRoot=="function")try{Se.onCommitFiberRoot(ys,t,void 0,(t.current.flags&128)===128)}catch{}}var me=Math.clz32?Math.clz32:xb,hb=Math.log,yb=Math.LN2;function xb(t){return t>>>=0,t===0?32:31-(hb(t)/yb|0)|0}var uo=64,bo=4194304;function yn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qo(t,e){var r=t.pendingLanes;if(r===0)return 0;var n=0,s=t.suspendedLanes,i=t.pingedLanes,l=r&268435455;if(l!==0){var a=l&~s;a!==0?n=yn(a):(i&=l,i!==0&&(n=yn(i)))}else l=r&~s,l!==0?n=yn(l):i!==0&&(n=yn(i));if(n===0)return 0;if(e!==0&&e!==n&&!(e&s)&&(s=n&-n,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(n&4&&(n|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)r=31-me(e),s=1<<r,n|=t[r],e&=~s;return n}function kb(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wb(t,e){for(var r=t.suspendedLanes,n=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var l=31-me(i),a=1<<l,d=s[l];d===-1?(!(a&r)||a&n)&&(s[l]=kb(a,e)):d<=e&&(t.expiredLanes|=a),i&=~a}}function _i(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Dg(){var t=uo;return uo<<=1,!(uo&4194240)&&(uo=64),t}function Ps(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function qn(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-me(e),t[e]=r}function Sb(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<r;){var s=31-me(r),i=1<<s;e[s]=0,n[s]=-1,t[s]=-1,r&=~i}}function Al(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var n=31-me(r),s=1<<n;s&e|t[n]&e&&(t[n]|=e),r&=~s}}var ut=0;function Rg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Mg,Fl,_g,Wg,Lg,Wi=!1,po=[],Ye=null,Qe=null,Ke=null,_n=new Map,Wn=new Map,He=[],jb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ma(t,e){switch(t){case"focusin":case"focusout":Ye=null;break;case"dragenter":case"dragleave":Qe=null;break;case"mouseover":case"mouseout":Ke=null;break;case"pointerover":case"pointerout":_n.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(e.pointerId)}}function dn(t,e,r,n,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[s]},e!==null&&(e=eo(e),e!==null&&Fl(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function Cb(t,e,r,n,s){switch(e){case"focusin":return Ye=dn(Ye,t,e,r,n,s),!0;case"dragenter":return Qe=dn(Qe,t,e,r,n,s),!0;case"mouseover":return Ke=dn(Ke,t,e,r,n,s),!0;case"pointerover":var i=s.pointerId;return _n.set(i,dn(_n.get(i)||null,t,e,r,n,s)),!0;case"gotpointercapture":return i=s.pointerId,Wn.set(i,dn(Wn.get(i)||null,t,e,r,n,s)),!0}return!1}function Ng(t){var e=dr(t.target);if(e!==null){var r=Cr(e);if(r!==null){if(e=r.tag,e===13){if(e=zg(r),e!==null){t.blockedOn=e,Lg(t.priority,function(){_g(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Do(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=Li(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var n=new r.constructor(r.type,r);Fi=n,r.target.dispatchEvent(n),Fi=null}else return e=eo(r),e!==null&&Fl(e),t.blockedOn=r,!1;e.shift()}return!0}function _a(t,e,r){Do(t)&&r.delete(e)}function Ib(){Wi=!1,Ye!==null&&Do(Ye)&&(Ye=null),Qe!==null&&Do(Qe)&&(Qe=null),Ke!==null&&Do(Ke)&&(Ke=null),_n.forEach(_a),Wn.forEach(_a)}function gn(t,e){t.blockedOn===e&&(t.blockedOn=null,Wi||(Wi=!0,qt.unstable_scheduleCallback(qt.unstable_NormalPriority,Ib)))}function Ln(t){function e(s){return gn(s,t)}if(0<po.length){gn(po[0],t);for(var r=1;r<po.length;r++){var n=po[r];n.blockedOn===t&&(n.blockedOn=null)}}for(Ye!==null&&gn(Ye,t),Qe!==null&&gn(Qe,t),Ke!==null&&gn(Ke,t),_n.forEach(e),Wn.forEach(e),r=0;r<He.length;r++)n=He[r],n.blockedOn===t&&(n.blockedOn=null);for(;0<He.length&&(r=He[0],r.blockedOn===null);)Ng(r),r.blockedOn===null&&He.shift()}var Ur=We.ReactCurrentBatchConfig,Ko=!0;function zb(t,e,r,n){var s=ut,i=Ur.transition;Ur.transition=null;try{ut=1,Dl(t,e,r,n)}finally{ut=s,Ur.transition=i}}function Tb(t,e,r,n){var s=ut,i=Ur.transition;Ur.transition=null;try{ut=4,Dl(t,e,r,n)}finally{ut=s,Ur.transition=i}}function Dl(t,e,r,n){if(Ko){var s=Li(t,e,r,n);if(s===null)Xs(t,e,n,Xo,r),Ma(t,n);else if(Cb(s,t,e,r,n))n.stopPropagation();else if(Ma(t,n),e&4&&-1<jb.indexOf(t)){for(;s!==null;){var i=eo(s);if(i!==null&&Mg(i),i=Li(t,e,r,n),i===null&&Xs(t,e,n,Xo,r),i===s)break;s=i}s!==null&&n.stopPropagation()}else Xs(t,e,n,null,r)}}var Xo=null;function Li(t,e,r,n){if(Xo=null,t=El(n),t=dr(t),t!==null)if(e=Cr(t),e===null)t=null;else if(r=e.tag,r===13){if(t=zg(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xo=t,null}function Pg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mb()){case Bl:return 1;case Ag:return 4;case Yo:case fb:return 16;case Fg:return 536870912;default:return 16}default:return 16}}var Ge=null,Rl=null,Ro=null;function Og(){if(Ro)return Ro;var t,e=Rl,r=e.length,n,s="value"in Ge?Ge.value:Ge.textContent,i=s.length;for(t=0;t<r&&e[t]===s[t];t++);var l=r-t;for(n=1;n<=l&&e[r-n]===s[i-n];n++);return Ro=s.slice(t,1<n?1-n:void 0)}function Mo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function mo(){return!0}function Wa(){return!1}function ee(t){function e(r,n,s,i,l){this._reactName=r,this._targetInst=s,this.type=n,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(r=t[a],this[a]=r?r(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?mo:Wa,this.isPropagationStopped=Wa,this}return jt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=mo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=mo)},persist:function(){},isPersistent:mo}),e}var rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ml=ee(rn),to=jt({},rn,{view:0,detail:0}),Eb=ee(to),Os,$s,cn,xs=jt({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_l,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==cn&&(cn&&t.type==="mousemove"?(Os=t.screenX-cn.screenX,$s=t.screenY-cn.screenY):$s=Os=0,cn=t),Os)},movementY:function(t){return"movementY"in t?t.movementY:$s}}),La=ee(xs),Bb=jt({},xs,{dataTransfer:0}),Ab=ee(Bb),Fb=jt({},to,{relatedTarget:0}),Hs=ee(Fb),Db=jt({},rn,{animationName:0,elapsedTime:0,pseudoElement:0}),Rb=ee(Db),Mb=jt({},rn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_b=ee(Mb),Wb=jt({},rn,{data:0}),Na=ee(Wb),Lb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ob(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Pb[t])?!!e[t]:!1}function _l(){return Ob}var $b=jt({},to,{key:function(t){if(t.key){var e=Lb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Mo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Nb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_l,charCode:function(t){return t.type==="keypress"?Mo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Mo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Hb=ee($b),Ub=jt({},xs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pa=ee(Ub),Gb=jt({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_l}),Vb=ee(Gb),Yb=jt({},rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qb=ee(Yb),Kb=jt({},xs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xb=ee(Kb),Jb=[9,13,27,32],Wl=Fe&&"CompositionEvent"in window,Cn=null;Fe&&"documentMode"in document&&(Cn=document.documentMode);var Zb=Fe&&"TextEvent"in window&&!Cn,$g=Fe&&(!Wl||Cn&&8<Cn&&11>=Cn),Oa=" ",$a=!1;function Hg(t,e){switch(t){case"keyup":return Jb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ug(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ar=!1;function qb(t,e){switch(t){case"compositionend":return Ug(e);case"keypress":return e.which!==32?null:($a=!0,Oa);case"textInput":return t=e.data,t===Oa&&$a?null:t;default:return null}}function tp(t,e){if(Ar)return t==="compositionend"||!Wl&&Hg(t,e)?(t=Og(),Ro=Rl=Ge=null,Ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return $g&&e.locale!=="ko"?null:e.data;default:return null}}var ep={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ha(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ep[t.type]:e==="textarea"}function Gg(t,e,r,n){wg(n),e=Jo(e,"onChange"),0<e.length&&(r=new Ml("onChange","change",null,r,n),t.push({event:r,listeners:e}))}var In=null,Nn=null;function rp(t){rc(t,0)}function ks(t){var e=Rr(t);if(mg(e))return t}function np(t,e){if(t==="change")return e}var Vg=!1;if(Fe){var Us;if(Fe){var Gs="oninput"in document;if(!Gs){var Ua=document.createElement("div");Ua.setAttribute("oninput","return;"),Gs=typeof Ua.oninput=="function"}Us=Gs}else Us=!1;Vg=Us&&(!document.documentMode||9<document.documentMode)}function Ga(){In&&(In.detachEvent("onpropertychange",Yg),Nn=In=null)}function Yg(t){if(t.propertyName==="value"&&ks(Nn)){var e=[];Gg(e,Nn,t,El(t)),Ig(rp,e)}}function op(t,e,r){t==="focusin"?(Ga(),In=e,Nn=r,In.attachEvent("onpropertychange",Yg)):t==="focusout"&&Ga()}function sp(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ks(Nn)}function ip(t,e){if(t==="click")return ks(e)}function lp(t,e){if(t==="input"||t==="change")return ks(e)}function ap(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ve=typeof Object.is=="function"?Object.is:ap;function Pn(t,e){if(ve(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var s=r[n];if(!xi.call(e,s)||!ve(t[s],e[s]))return!1}return!0}function Va(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ya(t,e){var r=Va(t);t=0;for(var n;r;){if(r.nodeType===3){if(n=t+r.textContent.length,t<=e&&n>=e)return{node:r,offset:e-t};t=n}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=Va(r)}}function Qg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Qg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Kg(){for(var t=window,e=Uo();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=Uo(t.document)}return e}function Ll(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function dp(t){var e=Kg(),r=t.focusedElem,n=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&Qg(r.ownerDocument.documentElement,r)){if(n!==null&&Ll(r)){if(e=n.start,t=n.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=r.textContent.length,i=Math.min(n.start,s);n=n.end===void 0?i:Math.min(n.end,s),!t.extend&&i>n&&(s=n,n=i,i=s),s=Ya(r,i);var l=Ya(r,n);s&&l&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>n?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gp=Fe&&"documentMode"in document&&11>=document.documentMode,Fr=null,Ni=null,zn=null,Pi=!1;function Qa(t,e,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Pi||Fr==null||Fr!==Uo(n)||(n=Fr,"selectionStart"in n&&Ll(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),zn&&Pn(zn,n)||(zn=n,n=Jo(Ni,"onSelect"),0<n.length&&(e=new Ml("onSelect","select",null,e,r),t.push({event:e,listeners:n}),e.target=Fr)))}function fo(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Dr={animationend:fo("Animation","AnimationEnd"),animationiteration:fo("Animation","AnimationIteration"),animationstart:fo("Animation","AnimationStart"),transitionend:fo("Transition","TransitionEnd")},Vs={},Xg={};Fe&&(Xg=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function ws(t){if(Vs[t])return Vs[t];if(!Dr[t])return t;var e=Dr[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in Xg)return Vs[t]=e[r];return t}var Jg=ws("animationend"),Zg=ws("animationiteration"),qg=ws("animationstart"),tc=ws("transitionend"),ec=new Map,Ka="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(t,e){ec.set(t,e),jr(e,[t])}for(var Ys=0;Ys<Ka.length;Ys++){var Qs=Ka[Ys],cp=Qs.toLowerCase(),up=Qs[0].toUpperCase()+Qs.slice(1);nr(cp,"on"+up)}nr(Jg,"onAnimationEnd");nr(Zg,"onAnimationIteration");nr(qg,"onAnimationStart");nr("dblclick","onDoubleClick");nr("focusin","onFocus");nr("focusout","onBlur");nr(tc,"onTransitionEnd");Qr("onMouseEnter",["mouseout","mouseover"]);Qr("onMouseLeave",["mouseout","mouseover"]);Qr("onPointerEnter",["pointerout","pointerover"]);Qr("onPointerLeave",["pointerout","pointerover"]);jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bp=new Set("cancel close invalid load scroll toggle".split(" ").concat(xn));function Xa(t,e,r){var n=t.type||"unknown-event";t.currentTarget=r,cb(n,e,void 0,t),t.currentTarget=null}function rc(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var n=t[r],s=n.event;n=n.listeners;t:{var i=void 0;if(e)for(var l=n.length-1;0<=l;l--){var a=n[l],d=a.instance,g=a.currentTarget;if(a=a.listener,d!==i&&s.isPropagationStopped())break t;Xa(s,a,g),i=d}else for(l=0;l<n.length;l++){if(a=n[l],d=a.instance,g=a.currentTarget,a=a.listener,d!==i&&s.isPropagationStopped())break t;Xa(s,a,g),i=d}}}if(Vo)throw t=Mi,Vo=!1,Mi=null,t}function vt(t,e){var r=e[Gi];r===void 0&&(r=e[Gi]=new Set);var n=t+"__bubble";r.has(n)||(nc(e,t,2,!1),r.add(n))}function Ks(t,e,r){var n=0;e&&(n|=4),nc(r,t,n,e)}var vo="_reactListening"+Math.random().toString(36).slice(2);function On(t){if(!t[vo]){t[vo]=!0,gg.forEach(function(r){r!=="selectionchange"&&(bp.has(r)||Ks(r,!1,t),Ks(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[vo]||(e[vo]=!0,Ks("selectionchange",!1,e))}}function nc(t,e,r,n){switch(Pg(e)){case 1:var s=zb;break;case 4:s=Tb;break;default:s=Dl}r=s.bind(null,e,r,t),s=void 0,!Ri||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),n?s!==void 0?t.addEventListener(e,r,{capture:!0,passive:s}):t.addEventListener(e,r,!0):s!==void 0?t.addEventListener(e,r,{passive:s}):t.addEventListener(e,r,!1)}function Xs(t,e,r,n,s){var i=n;if(!(e&1)&&!(e&2)&&n!==null)t:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var a=n.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(l===4)for(l=n.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===s||d.nodeType===8&&d.parentNode===s))return;l=l.return}for(;a!==null;){if(l=dr(a),l===null)return;if(d=l.tag,d===5||d===6){n=i=l;continue t}a=a.parentNode}}n=n.return}Ig(function(){var g=i,m=El(r),v=[];t:{var p=ec.get(t);if(p!==void 0){var j=Ml,S=t;switch(t){case"keypress":if(Mo(r)===0)break t;case"keydown":case"keyup":j=Hb;break;case"focusin":S="focus",j=Hs;break;case"focusout":S="blur",j=Hs;break;case"beforeblur":case"afterblur":j=Hs;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=La;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Ab;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Vb;break;case Jg:case Zg:case qg:j=Rb;break;case tc:j=Qb;break;case"scroll":j=Eb;break;case"wheel":j=Xb;break;case"copy":case"cut":case"paste":j=_b;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Pa}var w=(e&4)!==0,I=!w&&t==="scroll",b=w?p!==null?p+"Capture":null:p;w=[];for(var c=g,u;c!==null;){u=c;var x=u.stateNode;if(u.tag===5&&x!==null&&(u=x,b!==null&&(x=Mn(c,b),x!=null&&w.push($n(c,x,u)))),I)break;c=c.return}0<w.length&&(p=new j(p,S,null,r,m),v.push({event:p,listeners:w}))}}if(!(e&7)){t:{if(p=t==="mouseover"||t==="pointerover",j=t==="mouseout"||t==="pointerout",p&&r!==Fi&&(S=r.relatedTarget||r.fromElement)&&(dr(S)||S[De]))break t;if((j||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,j?(S=r.relatedTarget||r.toElement,j=g,S=S?dr(S):null,S!==null&&(I=Cr(S),S!==I||S.tag!==5&&S.tag!==6)&&(S=null)):(j=null,S=g),j!==S)){if(w=La,x="onMouseLeave",b="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(w=Pa,x="onPointerLeave",b="onPointerEnter",c="pointer"),I=j==null?p:Rr(j),u=S==null?p:Rr(S),p=new w(x,c+"leave",j,r,m),p.target=I,p.relatedTarget=u,x=null,dr(m)===g&&(w=new w(b,c+"enter",S,r,m),w.target=u,w.relatedTarget=I,x=w),I=x,j&&S)e:{for(w=j,b=S,c=0,u=w;u;u=zr(u))c++;for(u=0,x=b;x;x=zr(x))u++;for(;0<c-u;)w=zr(w),c--;for(;0<u-c;)b=zr(b),u--;for(;c--;){if(w===b||b!==null&&w===b.alternate)break e;w=zr(w),b=zr(b)}w=null}else w=null;j!==null&&Ja(v,p,j,w,!1),S!==null&&I!==null&&Ja(v,I,S,w,!0)}}t:{if(p=g?Rr(g):window,j=p.nodeName&&p.nodeName.toLowerCase(),j==="select"||j==="input"&&p.type==="file")var h=np;else if(Ha(p))if(Vg)h=lp;else{h=sp;var C=op}else(j=p.nodeName)&&j.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(h=ip);if(h&&(h=h(t,g))){Gg(v,h,r,m);break t}C&&C(t,p,g),t==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&zi(p,"number",p.value)}switch(C=g?Rr(g):window,t){case"focusin":(Ha(C)||C.contentEditable==="true")&&(Fr=C,Ni=g,zn=null);break;case"focusout":zn=Ni=Fr=null;break;case"mousedown":Pi=!0;break;case"contextmenu":case"mouseup":case"dragend":Pi=!1,Qa(v,r,m);break;case"selectionchange":if(gp)break;case"keydown":case"keyup":Qa(v,r,m)}var R;if(Wl)t:{switch(t){case"compositionstart":var B="onCompositionStart";break t;case"compositionend":B="onCompositionEnd";break t;case"compositionupdate":B="onCompositionUpdate";break t}B=void 0}else Ar?Hg(t,r)&&(B="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(B="onCompositionStart");B&&($g&&r.locale!=="ko"&&(Ar||B!=="onCompositionStart"?B==="onCompositionEnd"&&Ar&&(R=Og()):(Ge=m,Rl="value"in Ge?Ge.value:Ge.textContent,Ar=!0)),C=Jo(g,B),0<C.length&&(B=new Na(B,t,null,r,m),v.push({event:B,listeners:C}),R?B.data=R:(R=Ug(r),R!==null&&(B.data=R)))),(R=Zb?qb(t,r):tp(t,r))&&(g=Jo(g,"onBeforeInput"),0<g.length&&(m=new Na("onBeforeInput","beforeinput",null,r,m),v.push({event:m,listeners:g}),m.data=R))}rc(v,e)})}function $n(t,e,r){return{instance:t,listener:e,currentTarget:r}}function Jo(t,e){for(var r=e+"Capture",n=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Mn(t,r),i!=null&&n.unshift($n(t,i,s)),i=Mn(t,e),i!=null&&n.push($n(t,i,s))),t=t.return}return n}function zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ja(t,e,r,n,s){for(var i=e._reactName,l=[];r!==null&&r!==n;){var a=r,d=a.alternate,g=a.stateNode;if(d!==null&&d===n)break;a.tag===5&&g!==null&&(a=g,s?(d=Mn(r,i),d!=null&&l.unshift($n(r,d,a))):s||(d=Mn(r,i),d!=null&&l.push($n(r,d,a)))),r=r.return}l.length!==0&&t.push({event:e,listeners:l})}var pp=/\r\n?/g,mp=/\u0000|\uFFFD/g;function Za(t){return(typeof t=="string"?t:""+t).replace(pp,`
`).replace(mp,"")}function ho(t,e,r){if(e=Za(e),Za(t)!==e&&r)throw Error(W(425))}function Zo(){}var Oi=null,$i=null;function Hi(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ui=typeof setTimeout=="function"?setTimeout:void 0,fp=typeof clearTimeout=="function"?clearTimeout:void 0,qa=typeof Promise=="function"?Promise:void 0,vp=typeof queueMicrotask=="function"?queueMicrotask:typeof qa<"u"?function(t){return qa.resolve(null).then(t).catch(hp)}:Ui;function hp(t){setTimeout(function(){throw t})}function Js(t,e){var r=e,n=0;do{var s=r.nextSibling;if(t.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(n===0){t.removeChild(s),Ln(e);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=s}while(r);Ln(e)}function Xe(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function td(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var nn=Math.random().toString(36).slice(2),we="__reactFiber$"+nn,Hn="__reactProps$"+nn,De="__reactContainer$"+nn,Gi="__reactEvents$"+nn,yp="__reactListeners$"+nn,xp="__reactHandles$"+nn;function dr(t){var e=t[we];if(e)return e;for(var r=t.parentNode;r;){if(e=r[De]||r[we]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=td(t);t!==null;){if(r=t[we])return r;t=td(t)}return e}t=r,r=t.parentNode}return null}function eo(t){return t=t[we]||t[De],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Rr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(W(33))}function Ss(t){return t[Hn]||null}var Vi=[],Mr=-1;function or(t){return{current:t}}function ht(t){0>Mr||(t.current=Vi[Mr],Vi[Mr]=null,Mr--)}function ft(t,e){Mr++,Vi[Mr]=t.current,t.current=e}var rr={},Pt=or(rr),Yt=or(!1),vr=rr;function Kr(t,e){var r=t.type.contextTypes;if(!r)return rr;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in r)s[i]=e[i];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Qt(t){return t=t.childContextTypes,t!=null}function qo(){ht(Yt),ht(Pt)}function ed(t,e,r){if(Pt.current!==rr)throw Error(W(168));ft(Pt,e),ft(Yt,r)}function oc(t,e,r){var n=t.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var s in n)if(!(s in e))throw Error(W(108,ob(t)||"Unknown",s));return jt({},r,n)}function ts(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rr,vr=Pt.current,ft(Pt,t),ft(Yt,Yt.current),!0}function rd(t,e,r){var n=t.stateNode;if(!n)throw Error(W(169));r?(t=oc(t,e,vr),n.__reactInternalMemoizedMergedChildContext=t,ht(Yt),ht(Pt),ft(Pt,t)):ht(Yt),ft(Yt,r)}var Te=null,js=!1,Zs=!1;function sc(t){Te===null?Te=[t]:Te.push(t)}function kp(t){js=!0,sc(t)}function sr(){if(!Zs&&Te!==null){Zs=!0;var t=0,e=ut;try{var r=Te;for(ut=1;t<r.length;t++){var n=r[t];do n=n(!0);while(n!==null)}Te=null,js=!1}catch(s){throw Te!==null&&(Te=Te.slice(t+1)),Bg(Bl,sr),s}finally{ut=e,Zs=!1}}return null}var _r=[],Wr=0,es=null,rs=0,re=[],ne=0,hr=null,Ee=1,Be="";function ir(t,e){_r[Wr++]=rs,_r[Wr++]=es,es=t,rs=e}function ic(t,e,r){re[ne++]=Ee,re[ne++]=Be,re[ne++]=hr,hr=t;var n=Ee;t=Be;var s=32-me(n)-1;n&=~(1<<s),r+=1;var i=32-me(e)+s;if(30<i){var l=s-s%5;i=(n&(1<<l)-1).toString(32),n>>=l,s-=l,Ee=1<<32-me(e)+s|r<<s|n,Be=i+t}else Ee=1<<i|r<<s|n,Be=t}function Nl(t){t.return!==null&&(ir(t,1),ic(t,1,0))}function Pl(t){for(;t===es;)es=_r[--Wr],_r[Wr]=null,rs=_r[--Wr],_r[Wr]=null;for(;t===hr;)hr=re[--ne],re[ne]=null,Be=re[--ne],re[ne]=null,Ee=re[--ne],re[ne]=null}var Zt=null,Jt=null,yt=!1,pe=null;function lc(t,e){var r=oe(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function nd(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Zt=t,Jt=Xe(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Zt=t,Jt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=hr!==null?{id:Ee,overflow:Be}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=oe(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,Zt=t,Jt=null,!0):!1;default:return!1}}function Yi(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qi(t){if(yt){var e=Jt;if(e){var r=e;if(!nd(t,e)){if(Yi(t))throw Error(W(418));e=Xe(r.nextSibling);var n=Zt;e&&nd(t,e)?lc(n,r):(t.flags=t.flags&-4097|2,yt=!1,Zt=t)}}else{if(Yi(t))throw Error(W(418));t.flags=t.flags&-4097|2,yt=!1,Zt=t}}}function od(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Zt=t}function yo(t){if(t!==Zt)return!1;if(!yt)return od(t),yt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hi(t.type,t.memoizedProps)),e&&(e=Jt)){if(Yi(t))throw ac(),Error(W(418));for(;e;)lc(t,e),e=Xe(e.nextSibling)}if(od(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(W(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){Jt=Xe(t.nextSibling);break t}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}Jt=null}}else Jt=Zt?Xe(t.stateNode.nextSibling):null;return!0}function ac(){for(var t=Jt;t;)t=Xe(t.nextSibling)}function Xr(){Jt=Zt=null,yt=!1}function Ol(t){pe===null?pe=[t]:pe.push(t)}var wp=We.ReactCurrentBatchConfig;function un(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(W(309));var n=r.stateNode}if(!n)throw Error(W(147,t));var s=n,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(l){var a=s.refs;l===null?delete a[i]:a[i]=l},e._stringRef=i,e)}if(typeof t!="string")throw Error(W(284));if(!r._owner)throw Error(W(290,t))}return t}function xo(t,e){throw t=Object.prototype.toString.call(e),Error(W(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sd(t){var e=t._init;return e(t._payload)}function dc(t){function e(b,c){if(t){var u=b.deletions;u===null?(b.deletions=[c],b.flags|=16):u.push(c)}}function r(b,c){if(!t)return null;for(;c!==null;)e(b,c),c=c.sibling;return null}function n(b,c){for(b=new Map;c!==null;)c.key!==null?b.set(c.key,c):b.set(c.index,c),c=c.sibling;return b}function s(b,c){return b=tr(b,c),b.index=0,b.sibling=null,b}function i(b,c,u){return b.index=u,t?(u=b.alternate,u!==null?(u=u.index,u<c?(b.flags|=2,c):u):(b.flags|=2,c)):(b.flags|=1048576,c)}function l(b){return t&&b.alternate===null&&(b.flags|=2),b}function a(b,c,u,x){return c===null||c.tag!==6?(c=si(u,b.mode,x),c.return=b,c):(c=s(c,u),c.return=b,c)}function d(b,c,u,x){var h=u.type;return h===Br?m(b,c,u.props.children,x,u.key):c!==null&&(c.elementType===h||typeof h=="object"&&h!==null&&h.$$typeof===Pe&&sd(h)===c.type)?(x=s(c,u.props),x.ref=un(b,c,u),x.return=b,x):(x=$o(u.type,u.key,u.props,null,b.mode,x),x.ref=un(b,c,u),x.return=b,x)}function g(b,c,u,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==u.containerInfo||c.stateNode.implementation!==u.implementation?(c=ii(u,b.mode,x),c.return=b,c):(c=s(c,u.children||[]),c.return=b,c)}function m(b,c,u,x,h){return c===null||c.tag!==7?(c=mr(u,b.mode,x,h),c.return=b,c):(c=s(c,u),c.return=b,c)}function v(b,c,u){if(typeof c=="string"&&c!==""||typeof c=="number")return c=si(""+c,b.mode,u),c.return=b,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ao:return u=$o(c.type,c.key,c.props,null,b.mode,u),u.ref=un(b,null,c),u.return=b,u;case Er:return c=ii(c,b.mode,u),c.return=b,c;case Pe:var x=c._init;return v(b,x(c._payload),u)}if(hn(c)||ln(c))return c=mr(c,b.mode,u,null),c.return=b,c;xo(b,c)}return null}function p(b,c,u,x){var h=c!==null?c.key:null;if(typeof u=="string"&&u!==""||typeof u=="number")return h!==null?null:a(b,c,""+u,x);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ao:return u.key===h?d(b,c,u,x):null;case Er:return u.key===h?g(b,c,u,x):null;case Pe:return h=u._init,p(b,c,h(u._payload),x)}if(hn(u)||ln(u))return h!==null?null:m(b,c,u,x,null);xo(b,u)}return null}function j(b,c,u,x,h){if(typeof x=="string"&&x!==""||typeof x=="number")return b=b.get(u)||null,a(c,b,""+x,h);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ao:return b=b.get(x.key===null?u:x.key)||null,d(c,b,x,h);case Er:return b=b.get(x.key===null?u:x.key)||null,g(c,b,x,h);case Pe:var C=x._init;return j(b,c,u,C(x._payload),h)}if(hn(x)||ln(x))return b=b.get(u)||null,m(c,b,x,h,null);xo(c,x)}return null}function S(b,c,u,x){for(var h=null,C=null,R=c,B=c=0,M=null;R!==null&&B<u.length;B++){R.index>B?(M=R,R=null):M=R.sibling;var _=p(b,R,u[B],x);if(_===null){R===null&&(R=M);break}t&&R&&_.alternate===null&&e(b,R),c=i(_,c,B),C===null?h=_:C.sibling=_,C=_,R=M}if(B===u.length)return r(b,R),yt&&ir(b,B),h;if(R===null){for(;B<u.length;B++)R=v(b,u[B],x),R!==null&&(c=i(R,c,B),C===null?h=R:C.sibling=R,C=R);return yt&&ir(b,B),h}for(R=n(b,R);B<u.length;B++)M=j(R,b,B,u[B],x),M!==null&&(t&&M.alternate!==null&&R.delete(M.key===null?B:M.key),c=i(M,c,B),C===null?h=M:C.sibling=M,C=M);return t&&R.forEach(function(et){return e(b,et)}),yt&&ir(b,B),h}function w(b,c,u,x){var h=ln(u);if(typeof h!="function")throw Error(W(150));if(u=h.call(u),u==null)throw Error(W(151));for(var C=h=null,R=c,B=c=0,M=null,_=u.next();R!==null&&!_.done;B++,_=u.next()){R.index>B?(M=R,R=null):M=R.sibling;var et=p(b,R,_.value,x);if(et===null){R===null&&(R=M);break}t&&R&&et.alternate===null&&e(b,R),c=i(et,c,B),C===null?h=et:C.sibling=et,C=et,R=M}if(_.done)return r(b,R),yt&&ir(b,B),h;if(R===null){for(;!_.done;B++,_=u.next())_=v(b,_.value,x),_!==null&&(c=i(_,c,B),C===null?h=_:C.sibling=_,C=_);return yt&&ir(b,B),h}for(R=n(b,R);!_.done;B++,_=u.next())_=j(R,b,B,_.value,x),_!==null&&(t&&_.alternate!==null&&R.delete(_.key===null?B:_.key),c=i(_,c,B),C===null?h=_:C.sibling=_,C=_);return t&&R.forEach(function(rt){return e(b,rt)}),yt&&ir(b,B),h}function I(b,c,u,x){if(typeof u=="object"&&u!==null&&u.type===Br&&u.key===null&&(u=u.props.children),typeof u=="object"&&u!==null){switch(u.$$typeof){case ao:t:{for(var h=u.key,C=c;C!==null;){if(C.key===h){if(h=u.type,h===Br){if(C.tag===7){r(b,C.sibling),c=s(C,u.props.children),c.return=b,b=c;break t}}else if(C.elementType===h||typeof h=="object"&&h!==null&&h.$$typeof===Pe&&sd(h)===C.type){r(b,C.sibling),c=s(C,u.props),c.ref=un(b,C,u),c.return=b,b=c;break t}r(b,C);break}else e(b,C);C=C.sibling}u.type===Br?(c=mr(u.props.children,b.mode,x,u.key),c.return=b,b=c):(x=$o(u.type,u.key,u.props,null,b.mode,x),x.ref=un(b,c,u),x.return=b,b=x)}return l(b);case Er:t:{for(C=u.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){r(b,c.sibling),c=s(c,u.children||[]),c.return=b,b=c;break t}else{r(b,c);break}else e(b,c);c=c.sibling}c=ii(u,b.mode,x),c.return=b,b=c}return l(b);case Pe:return C=u._init,I(b,c,C(u._payload),x)}if(hn(u))return S(b,c,u,x);if(ln(u))return w(b,c,u,x);xo(b,u)}return typeof u=="string"&&u!==""||typeof u=="number"?(u=""+u,c!==null&&c.tag===6?(r(b,c.sibling),c=s(c,u),c.return=b,b=c):(r(b,c),c=si(u,b.mode,x),c.return=b,b=c),l(b)):r(b,c)}return I}var Jr=dc(!0),gc=dc(!1),ns=or(null),os=null,Lr=null,$l=null;function Hl(){$l=Lr=os=null}function Ul(t){var e=ns.current;ht(ns),t._currentValue=e}function Ki(t,e,r){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===r)break;t=t.return}}function Gr(t,e){os=t,$l=Lr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Vt=!0),t.firstContext=null)}function le(t){var e=t._currentValue;if($l!==t)if(t={context:t,memoizedValue:e,next:null},Lr===null){if(os===null)throw Error(W(308));Lr=t,os.dependencies={lanes:0,firstContext:t}}else Lr=Lr.next=t;return e}var gr=null;function Gl(t){gr===null?gr=[t]:gr.push(t)}function cc(t,e,r,n){var s=e.interleaved;return s===null?(r.next=r,Gl(e)):(r.next=s.next,s.next=r),e.interleaved=r,Re(t,n)}function Re(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var Oe=!1;function Vl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ae(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Je(t,e,r){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,gt&2){var s=n.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),n.pending=e,Re(t,r)}return s=n.interleaved,s===null?(e.next=e,Gl(n)):(e.next=s.next,s.next=e),n.interleaved=e,Re(t,r)}function _o(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,Al(t,r)}}function id(t,e){var r=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var s=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?s=i=l:i=i.next=l,r=r.next}while(r!==null);i===null?s=i=e:i=i.next=e}else s=i=e;r={baseState:n.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:n.shared,effects:n.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function ss(t,e,r,n){var s=t.updateQueue;Oe=!1;var i=s.firstBaseUpdate,l=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var d=a,g=d.next;d.next=null,l===null?i=g:l.next=g,l=d;var m=t.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==l&&(a===null?m.firstBaseUpdate=g:a.next=g,m.lastBaseUpdate=d))}if(i!==null){var v=s.baseState;l=0,m=g=d=null,a=i;do{var p=a.lane,j=a.eventTime;if((n&p)===p){m!==null&&(m=m.next={eventTime:j,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});t:{var S=t,w=a;switch(p=e,j=r,w.tag){case 1:if(S=w.payload,typeof S=="function"){v=S.call(j,v,p);break t}v=S;break t;case 3:S.flags=S.flags&-65537|128;case 0:if(S=w.payload,p=typeof S=="function"?S.call(j,v,p):S,p==null)break t;v=jt({},v,p);break t;case 2:Oe=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=s.effects,p===null?s.effects=[a]:p.push(a))}else j={eventTime:j,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(g=m=j,d=v):m=m.next=j,l|=p;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;p=a,a=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);if(m===null&&(d=v),s.baseState=d,s.firstBaseUpdate=g,s.lastBaseUpdate=m,e=s.shared.interleaved,e!==null){s=e;do l|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);xr|=l,t.lanes=l,t.memoizedState=v}}function ld(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],s=n.callback;if(s!==null){if(n.callback=null,n=r,typeof s!="function")throw Error(W(191,s));s.call(n)}}}var ro={},je=or(ro),Un=or(ro),Gn=or(ro);function cr(t){if(t===ro)throw Error(W(174));return t}function Yl(t,e){switch(ft(Gn,e),ft(Un,t),ft(je,ro),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ei(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ei(e,t)}ht(je),ft(je,e)}function Zr(){ht(je),ht(Un),ht(Gn)}function bc(t){cr(Gn.current);var e=cr(je.current),r=Ei(e,t.type);e!==r&&(ft(Un,t),ft(je,r))}function Ql(t){Un.current===t&&(ht(je),ht(Un))}var kt=or(0);function is(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qs=[];function Kl(){for(var t=0;t<qs.length;t++)qs[t]._workInProgressVersionPrimary=null;qs.length=0}var Wo=We.ReactCurrentDispatcher,ti=We.ReactCurrentBatchConfig,yr=0,St=null,Bt=null,Ft=null,ls=!1,Tn=!1,Vn=0,Sp=0;function Wt(){throw Error(W(321))}function Xl(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!ve(t[r],e[r]))return!1;return!0}function Jl(t,e,r,n,s,i){if(yr=i,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wo.current=t===null||t.memoizedState===null?zp:Tp,t=r(n,s),Tn){i=0;do{if(Tn=!1,Vn=0,25<=i)throw Error(W(301));i+=1,Ft=Bt=null,e.updateQueue=null,Wo.current=Ep,t=r(n,s)}while(Tn)}if(Wo.current=as,e=Bt!==null&&Bt.next!==null,yr=0,Ft=Bt=St=null,ls=!1,e)throw Error(W(300));return t}function Zl(){var t=Vn!==0;return Vn=0,t}function ke(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?St.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function ae(){if(Bt===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var e=Ft===null?St.memoizedState:Ft.next;if(e!==null)Ft=e,Bt=t;else{if(t===null)throw Error(W(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},Ft===null?St.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function Yn(t,e){return typeof e=="function"?e(t):e}function ei(t){var e=ae(),r=e.queue;if(r===null)throw Error(W(311));r.lastRenderedReducer=t;var n=Bt,s=n.baseQueue,i=r.pending;if(i!==null){if(s!==null){var l=s.next;s.next=i.next,i.next=l}n.baseQueue=s=i,r.pending=null}if(s!==null){i=s.next,n=n.baseState;var a=l=null,d=null,g=i;do{var m=g.lane;if((yr&m)===m)d!==null&&(d=d.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),n=g.hasEagerState?g.eagerState:t(n,g.action);else{var v={lane:m,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};d===null?(a=d=v,l=n):d=d.next=v,St.lanes|=m,xr|=m}g=g.next}while(g!==null&&g!==i);d===null?l=n:d.next=a,ve(n,e.memoizedState)||(Vt=!0),e.memoizedState=n,e.baseState=l,e.baseQueue=d,r.lastRenderedState=n}if(t=r.interleaved,t!==null){s=t;do i=s.lane,St.lanes|=i,xr|=i,s=s.next;while(s!==t)}else s===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function ri(t){var e=ae(),r=e.queue;if(r===null)throw Error(W(311));r.lastRenderedReducer=t;var n=r.dispatch,s=r.pending,i=e.memoizedState;if(s!==null){r.pending=null;var l=s=s.next;do i=t(i,l.action),l=l.next;while(l!==s);ve(i,e.memoizedState)||(Vt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),r.lastRenderedState=i}return[i,n]}function pc(){}function mc(t,e){var r=St,n=ae(),s=e(),i=!ve(n.memoizedState,s);if(i&&(n.memoizedState=s,Vt=!0),n=n.queue,ql(hc.bind(null,r,n,t),[t]),n.getSnapshot!==e||i||Ft!==null&&Ft.memoizedState.tag&1){if(r.flags|=2048,Qn(9,vc.bind(null,r,n,s,e),void 0,null),Dt===null)throw Error(W(349));yr&30||fc(r,e,s)}return s}function fc(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function vc(t,e,r,n){e.value=r,e.getSnapshot=n,yc(e)&&xc(t)}function hc(t,e,r){return r(function(){yc(e)&&xc(t)})}function yc(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!ve(t,r)}catch{return!0}}function xc(t){var e=Re(t,1);e!==null&&fe(e,t,1,-1)}function ad(t){var e=ke();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:t},e.queue=t,t=t.dispatch=Ip.bind(null,St,t),[e.memoizedState,t]}function Qn(t,e,r,n){return t={tag:t,create:e,destroy:r,deps:n,next:null},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(n=r.next,r.next=t,t.next=n,e.lastEffect=t)),t}function kc(){return ae().memoizedState}function Lo(t,e,r,n){var s=ke();St.flags|=t,s.memoizedState=Qn(1|e,r,void 0,n===void 0?null:n)}function Cs(t,e,r,n){var s=ae();n=n===void 0?null:n;var i=void 0;if(Bt!==null){var l=Bt.memoizedState;if(i=l.destroy,n!==null&&Xl(n,l.deps)){s.memoizedState=Qn(e,r,i,n);return}}St.flags|=t,s.memoizedState=Qn(1|e,r,i,n)}function dd(t,e){return Lo(8390656,8,t,e)}function ql(t,e){return Cs(2048,8,t,e)}function wc(t,e){return Cs(4,2,t,e)}function Sc(t,e){return Cs(4,4,t,e)}function jc(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Cc(t,e,r){return r=r!=null?r.concat([t]):null,Cs(4,4,jc.bind(null,e,t),r)}function ta(){}function Ic(t,e){var r=ae();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&Xl(e,n[1])?n[0]:(r.memoizedState=[t,e],t)}function zc(t,e){var r=ae();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&Xl(e,n[1])?n[0]:(t=t(),r.memoizedState=[t,e],t)}function Tc(t,e,r){return yr&21?(ve(r,e)||(r=Dg(),St.lanes|=r,xr|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Vt=!0),t.memoizedState=r)}function jp(t,e){var r=ut;ut=r!==0&&4>r?r:4,t(!0);var n=ti.transition;ti.transition={};try{t(!1),e()}finally{ut=r,ti.transition=n}}function Ec(){return ae().memoizedState}function Cp(t,e,r){var n=qe(t);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Bc(t))Ac(e,r);else if(r=cc(t,e,r,n),r!==null){var s=$t();fe(r,t,n,s),Fc(r,e,n)}}function Ip(t,e,r){var n=qe(t),s={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Bc(t))Ac(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var l=e.lastRenderedState,a=i(l,r);if(s.hasEagerState=!0,s.eagerState=a,ve(a,l)){var d=e.interleaved;d===null?(s.next=s,Gl(e)):(s.next=d.next,d.next=s),e.interleaved=s;return}}catch{}finally{}r=cc(t,e,s,n),r!==null&&(s=$t(),fe(r,t,n,s),Fc(r,e,n))}}function Bc(t){var e=t.alternate;return t===St||e!==null&&e===St}function Ac(t,e){Tn=ls=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function Fc(t,e,r){if(r&4194240){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,Al(t,r)}}var as={readContext:le,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},zp={readContext:le,useCallback:function(t,e){return ke().memoizedState=[t,e===void 0?null:e],t},useContext:le,useEffect:dd,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,Lo(4194308,4,jc.bind(null,e,t),r)},useLayoutEffect:function(t,e){return Lo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Lo(4,2,t,e)},useMemo:function(t,e){var r=ke();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var n=ke();return e=r!==void 0?r(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=Cp.bind(null,St,t),[n.memoizedState,t]},useRef:function(t){var e=ke();return t={current:t},e.memoizedState=t},useState:ad,useDebugValue:ta,useDeferredValue:function(t){return ke().memoizedState=t},useTransition:function(){var t=ad(!1),e=t[0];return t=jp.bind(null,t[1]),ke().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var n=St,s=ke();if(yt){if(r===void 0)throw Error(W(407));r=r()}else{if(r=e(),Dt===null)throw Error(W(349));yr&30||fc(n,e,r)}s.memoizedState=r;var i={value:r,getSnapshot:e};return s.queue=i,dd(hc.bind(null,n,i,t),[t]),n.flags|=2048,Qn(9,vc.bind(null,n,i,r,e),void 0,null),r},useId:function(){var t=ke(),e=Dt.identifierPrefix;if(yt){var r=Be,n=Ee;r=(n&~(1<<32-me(n)-1)).toString(32)+r,e=":"+e+"R"+r,r=Vn++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=Sp++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Tp={readContext:le,useCallback:Ic,useContext:le,useEffect:ql,useImperativeHandle:Cc,useInsertionEffect:wc,useLayoutEffect:Sc,useMemo:zc,useReducer:ei,useRef:kc,useState:function(){return ei(Yn)},useDebugValue:ta,useDeferredValue:function(t){var e=ae();return Tc(e,Bt.memoizedState,t)},useTransition:function(){var t=ei(Yn)[0],e=ae().memoizedState;return[t,e]},useMutableSource:pc,useSyncExternalStore:mc,useId:Ec,unstable_isNewReconciler:!1},Ep={readContext:le,useCallback:Ic,useContext:le,useEffect:ql,useImperativeHandle:Cc,useInsertionEffect:wc,useLayoutEffect:Sc,useMemo:zc,useReducer:ri,useRef:kc,useState:function(){return ri(Yn)},useDebugValue:ta,useDeferredValue:function(t){var e=ae();return Bt===null?e.memoizedState=t:Tc(e,Bt.memoizedState,t)},useTransition:function(){var t=ri(Yn)[0],e=ae().memoizedState;return[t,e]},useMutableSource:pc,useSyncExternalStore:mc,useId:Ec,unstable_isNewReconciler:!1};function ue(t,e){if(t&&t.defaultProps){e=jt({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function Xi(t,e,r,n){e=t.memoizedState,r=r(n,e),r=r==null?e:jt({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Is={isMounted:function(t){return(t=t._reactInternals)?Cr(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var n=$t(),s=qe(t),i=Ae(n,s);i.payload=e,r!=null&&(i.callback=r),e=Je(t,i,s),e!==null&&(fe(e,t,s,n),_o(e,t,s))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var n=$t(),s=qe(t),i=Ae(n,s);i.tag=1,i.payload=e,r!=null&&(i.callback=r),e=Je(t,i,s),e!==null&&(fe(e,t,s,n),_o(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=$t(),n=qe(t),s=Ae(r,n);s.tag=2,e!=null&&(s.callback=e),e=Je(t,s,n),e!==null&&(fe(e,t,n,r),_o(e,t,n))}};function gd(t,e,r,n,s,i,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,i,l):e.prototype&&e.prototype.isPureReactComponent?!Pn(r,n)||!Pn(s,i):!0}function Dc(t,e,r){var n=!1,s=rr,i=e.contextType;return typeof i=="object"&&i!==null?i=le(i):(s=Qt(e)?vr:Pt.current,n=e.contextTypes,i=(n=n!=null)?Kr(t,s):rr),e=new e(r,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Is,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function cd(t,e,r,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,n),e.state!==t&&Is.enqueueReplaceState(e,e.state,null)}function Ji(t,e,r,n){var s=t.stateNode;s.props=r,s.state=t.memoizedState,s.refs={},Vl(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=le(i):(i=Qt(e)?vr:Pt.current,s.context=Kr(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Xi(t,e,i,r),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Is.enqueueReplaceState(s,s.state,null),ss(t,r,s,n),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function qr(t,e){try{var r="",n=e;do r+=nb(n),n=n.return;while(n);var s=r}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function ni(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function Zi(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var Bp=typeof WeakMap=="function"?WeakMap:Map;function Rc(t,e,r){r=Ae(-1,r),r.tag=3,r.payload={element:null};var n=e.value;return r.callback=function(){gs||(gs=!0,al=n),Zi(t,e)},r}function Mc(t,e,r){r=Ae(-1,r),r.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var s=e.value;r.payload=function(){return n(s)},r.callback=function(){Zi(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Zi(t,e),typeof n!="function"&&(Ze===null?Ze=new Set([this]):Ze.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),r}function ud(t,e,r){var n=t.pingCache;if(n===null){n=t.pingCache=new Bp;var s=new Set;n.set(e,s)}else s=n.get(e),s===void 0&&(s=new Set,n.set(e,s));s.has(r)||(s.add(r),t=Up.bind(null,t,e,r),e.then(t,t))}function bd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function pd(t,e,r,n,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=Ae(-1,1),e.tag=2,Je(r,e,1))),r.lanes|=1),t)}var Ap=We.ReactCurrentOwner,Vt=!1;function Ot(t,e,r,n){e.child=t===null?gc(e,null,r,n):Jr(e,t.child,r,n)}function md(t,e,r,n,s){r=r.render;var i=e.ref;return Gr(e,s),n=Jl(t,e,r,n,i,s),r=Zl(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Me(t,e,s)):(yt&&r&&Nl(e),e.flags|=1,Ot(t,e,n,s),e.child)}function fd(t,e,r,n,s){if(t===null){var i=r.type;return typeof i=="function"&&!aa(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=i,_c(t,e,i,n,s)):(t=$o(r.type,null,n,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var l=i.memoizedProps;if(r=r.compare,r=r!==null?r:Pn,r(l,n)&&t.ref===e.ref)return Me(t,e,s)}return e.flags|=1,t=tr(i,n),t.ref=e.ref,t.return=e,e.child=t}function _c(t,e,r,n,s){if(t!==null){var i=t.memoizedProps;if(Pn(i,n)&&t.ref===e.ref)if(Vt=!1,e.pendingProps=n=i,(t.lanes&s)!==0)t.flags&131072&&(Vt=!0);else return e.lanes=t.lanes,Me(t,e,s)}return qi(t,e,r,n,s)}function Wc(t,e,r){var n=e.pendingProps,s=n.children,i=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(Pr,Xt),Xt|=r;else{if(!(r&1073741824))return t=i!==null?i.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(Pr,Xt),Xt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,ft(Pr,Xt),Xt|=n}else i!==null?(n=i.baseLanes|r,e.memoizedState=null):n=r,ft(Pr,Xt),Xt|=n;return Ot(t,e,s,r),e.child}function Lc(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function qi(t,e,r,n,s){var i=Qt(r)?vr:Pt.current;return i=Kr(e,i),Gr(e,s),r=Jl(t,e,r,n,i,s),n=Zl(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Me(t,e,s)):(yt&&n&&Nl(e),e.flags|=1,Ot(t,e,r,s),e.child)}function vd(t,e,r,n,s){if(Qt(r)){var i=!0;ts(e)}else i=!1;if(Gr(e,s),e.stateNode===null)No(t,e),Dc(e,r,n),Ji(e,r,n,s),n=!0;else if(t===null){var l=e.stateNode,a=e.memoizedProps;l.props=a;var d=l.context,g=r.contextType;typeof g=="object"&&g!==null?g=le(g):(g=Qt(r)?vr:Pt.current,g=Kr(e,g));var m=r.getDerivedStateFromProps,v=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";v||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==n||d!==g)&&cd(e,l,n,g),Oe=!1;var p=e.memoizedState;l.state=p,ss(e,n,l,s),d=e.memoizedState,a!==n||p!==d||Yt.current||Oe?(typeof m=="function"&&(Xi(e,r,m,n),d=e.memoizedState),(a=Oe||gd(e,r,a,n,p,d,g))?(v||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=d),l.props=n,l.state=d,l.context=g,n=a):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{l=e.stateNode,uc(t,e),a=e.memoizedProps,g=e.type===e.elementType?a:ue(e.type,a),l.props=g,v=e.pendingProps,p=l.context,d=r.contextType,typeof d=="object"&&d!==null?d=le(d):(d=Qt(r)?vr:Pt.current,d=Kr(e,d));var j=r.getDerivedStateFromProps;(m=typeof j=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==v||p!==d)&&cd(e,l,n,d),Oe=!1,p=e.memoizedState,l.state=p,ss(e,n,l,s);var S=e.memoizedState;a!==v||p!==S||Yt.current||Oe?(typeof j=="function"&&(Xi(e,r,j,n),S=e.memoizedState),(g=Oe||gd(e,r,g,n,p,S,d)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,S,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,S,d)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=S),l.props=n,l.state=S,l.context=d,n=g):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),n=!1)}return tl(t,e,r,n,i,s)}function tl(t,e,r,n,s,i){Lc(t,e);var l=(e.flags&128)!==0;if(!n&&!l)return s&&rd(e,r,!1),Me(t,e,i);n=e.stateNode,Ap.current=e;var a=l&&typeof r.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&l?(e.child=Jr(e,t.child,null,i),e.child=Jr(e,null,a,i)):Ot(t,e,a,i),e.memoizedState=n.state,s&&rd(e,r,!0),e.child}function Nc(t){var e=t.stateNode;e.pendingContext?ed(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ed(t,e.context,!1),Yl(t,e.containerInfo)}function hd(t,e,r,n,s){return Xr(),Ol(s),e.flags|=256,Ot(t,e,r,n),e.child}var el={dehydrated:null,treeContext:null,retryLane:0};function rl(t){return{baseLanes:t,cachePool:null,transitions:null}}function Pc(t,e,r){var n=e.pendingProps,s=kt.current,i=!1,l=(e.flags&128)!==0,a;if((a=l)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ft(kt,s&1),t===null)return Qi(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=n.children,t=n.fallback,i?(n=e.mode,i=e.child,l={mode:"hidden",children:l},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Es(l,n,0,null),t=mr(t,n,r,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=rl(r),e.memoizedState=el,t):ea(e,l));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return Fp(t,e,l,n,a,s,r);if(i){i=n.fallback,l=e.mode,s=t.child,a=s.sibling;var d={mode:"hidden",children:n.children};return!(l&1)&&e.child!==s?(n=e.child,n.childLanes=0,n.pendingProps=d,e.deletions=null):(n=tr(s,d),n.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=tr(a,i):(i=mr(i,l,r,null),i.flags|=2),i.return=e,n.return=e,n.sibling=i,e.child=n,n=i,i=e.child,l=t.child.memoizedState,l=l===null?rl(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=t.childLanes&~r,e.memoizedState=el,n}return i=t.child,t=i.sibling,n=tr(i,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n}function ea(t,e){return e=Es({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ko(t,e,r,n){return n!==null&&Ol(n),Jr(e,t.child,null,r),t=ea(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Fp(t,e,r,n,s,i,l){if(r)return e.flags&256?(e.flags&=-257,n=ni(Error(W(422))),ko(t,e,l,n)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=n.fallback,s=e.mode,n=Es({mode:"visible",children:n.children},s,0,null),i=mr(i,s,l,null),i.flags|=2,n.return=e,i.return=e,n.sibling=i,e.child=n,e.mode&1&&Jr(e,t.child,null,l),e.child.memoizedState=rl(l),e.memoizedState=el,i);if(!(e.mode&1))return ko(t,e,l,null);if(s.data==="$!"){if(n=s.nextSibling&&s.nextSibling.dataset,n)var a=n.dgst;return n=a,i=Error(W(419)),n=ni(i,n,void 0),ko(t,e,l,n)}if(a=(l&t.childLanes)!==0,Vt||a){if(n=Dt,n!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(n.suspendedLanes|l)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Re(t,s),fe(n,t,s,-1))}return la(),n=ni(Error(W(421))),ko(t,e,l,n)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=Gp.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Jt=Xe(s.nextSibling),Zt=e,yt=!0,pe=null,t!==null&&(re[ne++]=Ee,re[ne++]=Be,re[ne++]=hr,Ee=t.id,Be=t.overflow,hr=e),e=ea(e,n.children),e.flags|=4096,e)}function yd(t,e,r){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Ki(t.return,e,r)}function oi(t,e,r,n,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=s)}function Oc(t,e,r){var n=e.pendingProps,s=n.revealOrder,i=n.tail;if(Ot(t,e,n.children,r),n=kt.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yd(t,r,e);else if(t.tag===19)yd(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(ft(kt,n),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(r=e.child,s=null;r!==null;)t=r.alternate,t!==null&&is(t)===null&&(s=r),r=r.sibling;r=s,r===null?(s=e.child,e.child=null):(s=r.sibling,r.sibling=null),oi(e,!1,s,r,i);break;case"backwards":for(r=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&is(t)===null){e.child=s;break}t=s.sibling,s.sibling=r,r=s,s=t}oi(e,!0,r,null,i);break;case"together":oi(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function No(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Me(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),xr|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(W(153));if(e.child!==null){for(t=e.child,r=tr(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=tr(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function Dp(t,e,r){switch(e.tag){case 3:Nc(e),Xr();break;case 5:bc(e);break;case 1:Qt(e.type)&&ts(e);break;case 4:Yl(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,s=e.memoizedProps.value;ft(ns,n._currentValue),n._currentValue=s;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(ft(kt,kt.current&1),e.flags|=128,null):r&e.child.childLanes?Pc(t,e,r):(ft(kt,kt.current&1),t=Me(t,e,r),t!==null?t.sibling:null);ft(kt,kt.current&1);break;case 19:if(n=(r&e.childLanes)!==0,t.flags&128){if(n)return Oc(t,e,r);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ft(kt,kt.current),n)break;return null;case 22:case 23:return e.lanes=0,Wc(t,e,r)}return Me(t,e,r)}var $c,nl,Hc,Uc;$c=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};nl=function(){};Hc=function(t,e,r,n){var s=t.memoizedProps;if(s!==n){t=e.stateNode,cr(je.current);var i=null;switch(r){case"input":s=Ci(t,s),n=Ci(t,n),i=[];break;case"select":s=jt({},s,{value:void 0}),n=jt({},n,{value:void 0}),i=[];break;case"textarea":s=Ti(t,s),n=Ti(t,n),i=[];break;default:typeof s.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=Zo)}Bi(r,n);var l;r=null;for(g in s)if(!n.hasOwnProperty(g)&&s.hasOwnProperty(g)&&s[g]!=null)if(g==="style"){var a=s[g];for(l in a)a.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(Dn.hasOwnProperty(g)?i||(i=[]):(i=i||[]).push(g,null));for(g in n){var d=n[g];if(a=s!=null?s[g]:void 0,n.hasOwnProperty(g)&&d!==a&&(d!=null||a!=null))if(g==="style")if(a){for(l in a)!a.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in d)d.hasOwnProperty(l)&&a[l]!==d[l]&&(r||(r={}),r[l]=d[l])}else r||(i||(i=[]),i.push(g,r)),r=d;else g==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(i=i||[]).push(g,d)):g==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(g,""+d):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(Dn.hasOwnProperty(g)?(d!=null&&g==="onScroll"&&vt("scroll",t),i||a===d||(i=[])):(i=i||[]).push(g,d))}r&&(i=i||[]).push("style",r);var g=i;(e.updateQueue=g)&&(e.flags|=4)}};Uc=function(t,e,r,n){r!==n&&(e.flags|=4)};function bn(t,e){if(!yt)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Lt(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,n=0;if(e)for(var s=t.child;s!==null;)r|=s.lanes|s.childLanes,n|=s.subtreeFlags&14680064,n|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)r|=s.lanes|s.childLanes,n|=s.subtreeFlags,n|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=n,t.childLanes=r,e}function Rp(t,e,r){var n=e.pendingProps;switch(Pl(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(e),null;case 1:return Qt(e.type)&&qo(),Lt(e),null;case 3:return n=e.stateNode,Zr(),ht(Yt),ht(Pt),Kl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(yo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,pe!==null&&(cl(pe),pe=null))),nl(t,e),Lt(e),null;case 5:Ql(e);var s=cr(Gn.current);if(r=e.type,t!==null&&e.stateNode!=null)Hc(t,e,r,n,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(W(166));return Lt(e),null}if(t=cr(je.current),yo(e)){n=e.stateNode,r=e.type;var i=e.memoizedProps;switch(n[we]=e,n[Hn]=i,t=(e.mode&1)!==0,r){case"dialog":vt("cancel",n),vt("close",n);break;case"iframe":case"object":case"embed":vt("load",n);break;case"video":case"audio":for(s=0;s<xn.length;s++)vt(xn[s],n);break;case"source":vt("error",n);break;case"img":case"image":case"link":vt("error",n),vt("load",n);break;case"details":vt("toggle",n);break;case"input":Ta(n,i),vt("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},vt("invalid",n);break;case"textarea":Ba(n,i),vt("invalid",n)}Bi(r,i),s=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?n.textContent!==a&&(i.suppressHydrationWarning!==!0&&ho(n.textContent,a,t),s=["children",a]):typeof a=="number"&&n.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&ho(n.textContent,a,t),s=["children",""+a]):Dn.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&vt("scroll",n)}switch(r){case"input":go(n),Ea(n,i,!0);break;case"textarea":go(n),Aa(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=Zo)}n=s,e.updateQueue=n,n!==null&&(e.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hg(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=l.createElement(r,{is:n.is}):(t=l.createElement(r),r==="select"&&(l=t,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):t=l.createElementNS(t,r),t[we]=e,t[Hn]=n,$c(t,e,!1,!1),e.stateNode=t;t:{switch(l=Ai(r,n),r){case"dialog":vt("cancel",t),vt("close",t),s=n;break;case"iframe":case"object":case"embed":vt("load",t),s=n;break;case"video":case"audio":for(s=0;s<xn.length;s++)vt(xn[s],t);s=n;break;case"source":vt("error",t),s=n;break;case"img":case"image":case"link":vt("error",t),vt("load",t),s=n;break;case"details":vt("toggle",t),s=n;break;case"input":Ta(t,n),s=Ci(t,n),vt("invalid",t);break;case"option":s=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},s=jt({},n,{value:void 0}),vt("invalid",t);break;case"textarea":Ba(t,n),s=Ti(t,n),vt("invalid",t);break;default:s=n}Bi(r,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var d=a[i];i==="style"?kg(t,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&yg(t,d)):i==="children"?typeof d=="string"?(r!=="textarea"||d!=="")&&Rn(t,d):typeof d=="number"&&Rn(t,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Dn.hasOwnProperty(i)?d!=null&&i==="onScroll"&&vt("scroll",t):d!=null&&Cl(t,i,d,l))}switch(r){case"input":go(t),Ea(t,n,!1);break;case"textarea":go(t),Aa(t);break;case"option":n.value!=null&&t.setAttribute("value",""+er(n.value));break;case"select":t.multiple=!!n.multiple,i=n.value,i!=null?Or(t,!!n.multiple,i,!1):n.defaultValue!=null&&Or(t,!!n.multiple,n.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Zo)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break t;case"img":n=!0;break t;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Lt(e),null;case 6:if(t&&e.stateNode!=null)Uc(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(W(166));if(r=cr(Gn.current),cr(je.current),yo(e)){if(n=e.stateNode,r=e.memoizedProps,n[we]=e,(i=n.nodeValue!==r)&&(t=Zt,t!==null))switch(t.tag){case 3:ho(n.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ho(n.nodeValue,r,(t.mode&1)!==0)}i&&(e.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[we]=e,e.stateNode=n}return Lt(e),null;case 13:if(ht(kt),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(yt&&Jt!==null&&e.mode&1&&!(e.flags&128))ac(),Xr(),e.flags|=98560,i=!1;else if(i=yo(e),n!==null&&n.dehydrated!==null){if(t===null){if(!i)throw Error(W(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(W(317));i[we]=e}else Xr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Lt(e),i=!1}else pe!==null&&(cl(pe),pe=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(t===null||kt.current&1?At===0&&(At=3):la())),e.updateQueue!==null&&(e.flags|=4),Lt(e),null);case 4:return Zr(),nl(t,e),t===null&&On(e.stateNode.containerInfo),Lt(e),null;case 10:return Ul(e.type._context),Lt(e),null;case 17:return Qt(e.type)&&qo(),Lt(e),null;case 19:if(ht(kt),i=e.memoizedState,i===null)return Lt(e),null;if(n=(e.flags&128)!==0,l=i.rendering,l===null)if(n)bn(i,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=is(t),l!==null){for(e.flags|=128,bn(i,!1),n=l.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=r,r=e.child;r!==null;)i=r,t=n,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,t=l.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return ft(kt,kt.current&1|2),e.child}t=t.sibling}i.tail!==null&&zt()>tn&&(e.flags|=128,n=!0,bn(i,!1),e.lanes=4194304)}else{if(!n)if(t=is(l),t!==null){if(e.flags|=128,n=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),bn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!yt)return Lt(e),null}else 2*zt()-i.renderingStartTime>tn&&r!==1073741824&&(e.flags|=128,n=!0,bn(i,!1),e.lanes=4194304);i.isBackwards?(l.sibling=e.child,e.child=l):(r=i.last,r!==null?r.sibling=l:e.child=l,i.last=l)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=zt(),e.sibling=null,r=kt.current,ft(kt,n?r&1|2:r&1),e):(Lt(e),null);case 22:case 23:return ia(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?Xt&1073741824&&(Lt(e),e.subtreeFlags&6&&(e.flags|=8192)):Lt(e),null;case 24:return null;case 25:return null}throw Error(W(156,e.tag))}function Mp(t,e){switch(Pl(e),e.tag){case 1:return Qt(e.type)&&qo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zr(),ht(Yt),ht(Pt),Kl(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ql(e),null;case 13:if(ht(kt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(W(340));Xr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(kt),null;case 4:return Zr(),null;case 10:return Ul(e.type._context),null;case 22:case 23:return ia(),null;case 24:return null;default:return null}}var wo=!1,Nt=!1,_p=typeof WeakSet=="function"?WeakSet:Set,U=null;function Nr(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){It(t,e,n)}else r.current=null}function ol(t,e,r){try{r()}catch(n){It(t,e,n)}}var xd=!1;function Wp(t,e){if(Oi=Ko,t=Kg(),Ll(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var s=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break t}var l=0,a=-1,d=-1,g=0,m=0,v=t,p=null;e:for(;;){for(var j;v!==r||s!==0&&v.nodeType!==3||(a=l+s),v!==i||n!==0&&v.nodeType!==3||(d=l+n),v.nodeType===3&&(l+=v.nodeValue.length),(j=v.firstChild)!==null;)p=v,v=j;for(;;){if(v===t)break e;if(p===r&&++g===s&&(a=l),p===i&&++m===n&&(d=l),(j=v.nextSibling)!==null)break;v=p,p=v.parentNode}v=j}r=a===-1||d===-1?null:{start:a,end:d}}else r=null}r=r||{start:0,end:0}}else r=null;for($i={focusedElem:t,selectionRange:r},Ko=!1,U=e;U!==null;)if(e=U,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,U=t;else for(;U!==null;){e=U;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var w=S.memoizedProps,I=S.memoizedState,b=e.stateNode,c=b.getSnapshotBeforeUpdate(e.elementType===e.type?w:ue(e.type,w),I);b.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var u=e.stateNode.containerInfo;u.nodeType===1?u.textContent="":u.nodeType===9&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(W(163))}}catch(x){It(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,U=t;break}U=e.return}return S=xd,xd=!1,S}function En(t,e,r){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&ol(e,r,i)}s=s.next}while(s!==n)}}function zs(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var n=r.create;r.destroy=n()}r=r.next}while(r!==e)}}function sl(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function Gc(t){var e=t.alternate;e!==null&&(t.alternate=null,Gc(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[we],delete e[Hn],delete e[Gi],delete e[yp],delete e[xp])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Vc(t){return t.tag===5||t.tag===3||t.tag===4}function kd(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Vc(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function il(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=Zo));else if(n!==4&&(t=t.child,t!==null))for(il(t,e,r),t=t.sibling;t!==null;)il(t,e,r),t=t.sibling}function ll(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(ll(t,e,r),t=t.sibling;t!==null;)ll(t,e,r),t=t.sibling}var Rt=null,be=!1;function Le(t,e,r){for(r=r.child;r!==null;)Yc(t,e,r),r=r.sibling}function Yc(t,e,r){if(Se&&typeof Se.onCommitFiberUnmount=="function")try{Se.onCommitFiberUnmount(ys,r)}catch{}switch(r.tag){case 5:Nt||Nr(r,e);case 6:var n=Rt,s=be;Rt=null,Le(t,e,r),Rt=n,be=s,Rt!==null&&(be?(t=Rt,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Rt.removeChild(r.stateNode));break;case 18:Rt!==null&&(be?(t=Rt,r=r.stateNode,t.nodeType===8?Js(t.parentNode,r):t.nodeType===1&&Js(t,r),Ln(t)):Js(Rt,r.stateNode));break;case 4:n=Rt,s=be,Rt=r.stateNode.containerInfo,be=!0,Le(t,e,r),Rt=n,be=s;break;case 0:case 11:case 14:case 15:if(!Nt&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){s=n=n.next;do{var i=s,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&ol(r,e,l),s=s.next}while(s!==n)}Le(t,e,r);break;case 1:if(!Nt&&(Nr(r,e),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(a){It(r,e,a)}Le(t,e,r);break;case 21:Le(t,e,r);break;case 22:r.mode&1?(Nt=(n=Nt)||r.memoizedState!==null,Le(t,e,r),Nt=n):Le(t,e,r);break;default:Le(t,e,r)}}function wd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new _p),e.forEach(function(n){var s=Vp.bind(null,t,n);r.has(n)||(r.add(n),n.then(s,s))})}}function ge(t,e){var r=e.deletions;if(r!==null)for(var n=0;n<r.length;n++){var s=r[n];try{var i=t,l=e,a=l;t:for(;a!==null;){switch(a.tag){case 5:Rt=a.stateNode,be=!1;break t;case 3:Rt=a.stateNode.containerInfo,be=!0;break t;case 4:Rt=a.stateNode.containerInfo,be=!0;break t}a=a.return}if(Rt===null)throw Error(W(160));Yc(i,l,s),Rt=null,be=!1;var d=s.alternate;d!==null&&(d.return=null),s.return=null}catch(g){It(s,e,g)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Qc(e,t),e=e.sibling}function Qc(t,e){var r=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ge(e,t),he(t),n&4){try{En(3,t,t.return),zs(3,t)}catch(w){It(t,t.return,w)}try{En(5,t,t.return)}catch(w){It(t,t.return,w)}}break;case 1:ge(e,t),he(t),n&512&&r!==null&&Nr(r,r.return);break;case 5:if(ge(e,t),he(t),n&512&&r!==null&&Nr(r,r.return),t.flags&32){var s=t.stateNode;try{Rn(s,"")}catch(w){It(t,t.return,w)}}if(n&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,l=r!==null?r.memoizedProps:i,a=t.type,d=t.updateQueue;if(t.updateQueue=null,d!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&fg(s,i),Ai(a,l);var g=Ai(a,i);for(l=0;l<d.length;l+=2){var m=d[l],v=d[l+1];m==="style"?kg(s,v):m==="dangerouslySetInnerHTML"?yg(s,v):m==="children"?Rn(s,v):Cl(s,m,v,g)}switch(a){case"input":Ii(s,i);break;case"textarea":vg(s,i);break;case"select":var p=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var j=i.value;j!=null?Or(s,!!i.multiple,j,!1):p!==!!i.multiple&&(i.defaultValue!=null?Or(s,!!i.multiple,i.defaultValue,!0):Or(s,!!i.multiple,i.multiple?[]:"",!1))}s[Hn]=i}catch(w){It(t,t.return,w)}}break;case 6:if(ge(e,t),he(t),n&4){if(t.stateNode===null)throw Error(W(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(w){It(t,t.return,w)}}break;case 3:if(ge(e,t),he(t),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Ln(e.containerInfo)}catch(w){It(t,t.return,w)}break;case 4:ge(e,t),he(t);break;case 13:ge(e,t),he(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(oa=zt())),n&4&&wd(t);break;case 22:if(m=r!==null&&r.memoizedState!==null,t.mode&1?(Nt=(g=Nt)||m,ge(e,t),Nt=g):ge(e,t),he(t),n&8192){if(g=t.memoizedState!==null,(t.stateNode.isHidden=g)&&!m&&t.mode&1)for(U=t,m=t.child;m!==null;){for(v=U=m;U!==null;){switch(p=U,j=p.child,p.tag){case 0:case 11:case 14:case 15:En(4,p,p.return);break;case 1:Nr(p,p.return);var S=p.stateNode;if(typeof S.componentWillUnmount=="function"){n=p,r=p.return;try{e=n,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(w){It(n,r,w)}}break;case 5:Nr(p,p.return);break;case 22:if(p.memoizedState!==null){jd(v);continue}}j!==null?(j.return=p,U=j):jd(v)}m=m.sibling}t:for(m=null,v=t;;){if(v.tag===5){if(m===null){m=v;try{s=v.stateNode,g?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=v.stateNode,d=v.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=xg("display",l))}catch(w){It(t,t.return,w)}}}else if(v.tag===6){if(m===null)try{v.stateNode.nodeValue=g?"":v.memoizedProps}catch(w){It(t,t.return,w)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===t)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===t)break t;for(;v.sibling===null;){if(v.return===null||v.return===t)break t;m===v&&(m=null),v=v.return}m===v&&(m=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:ge(e,t),he(t),n&4&&wd(t);break;case 21:break;default:ge(e,t),he(t)}}function he(t){var e=t.flags;if(e&2){try{t:{for(var r=t.return;r!==null;){if(Vc(r)){var n=r;break t}r=r.return}throw Error(W(160))}switch(n.tag){case 5:var s=n.stateNode;n.flags&32&&(Rn(s,""),n.flags&=-33);var i=kd(t);ll(t,i,s);break;case 3:case 4:var l=n.stateNode.containerInfo,a=kd(t);il(t,a,l);break;default:throw Error(W(161))}}catch(d){It(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Lp(t,e,r){U=t,Kc(t)}function Kc(t,e,r){for(var n=(t.mode&1)!==0;U!==null;){var s=U,i=s.child;if(s.tag===22&&n){var l=s.memoizedState!==null||wo;if(!l){var a=s.alternate,d=a!==null&&a.memoizedState!==null||Nt;a=wo;var g=Nt;if(wo=l,(Nt=d)&&!g)for(U=s;U!==null;)l=U,d=l.child,l.tag===22&&l.memoizedState!==null?Cd(s):d!==null?(d.return=l,U=d):Cd(s);for(;i!==null;)U=i,Kc(i),i=i.sibling;U=s,wo=a,Nt=g}Sd(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,U=i):Sd(t)}}function Sd(t){for(;U!==null;){var e=U;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Nt||zs(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!Nt)if(r===null)n.componentDidMount();else{var s=e.elementType===e.type?r.memoizedProps:ue(e.type,r.memoizedProps);n.componentDidUpdate(s,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&ld(e,i,n);break;case 3:var l=e.updateQueue;if(l!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}ld(e,l,r)}break;case 5:var a=e.stateNode;if(r===null&&e.flags&4){r=a;var d=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&r.focus();break;case"img":d.src&&(r.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var g=e.alternate;if(g!==null){var m=g.memoizedState;if(m!==null){var v=m.dehydrated;v!==null&&Ln(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(W(163))}Nt||e.flags&512&&sl(e)}catch(p){It(e,e.return,p)}}if(e===t){U=null;break}if(r=e.sibling,r!==null){r.return=e.return,U=r;break}U=e.return}}function jd(t){for(;U!==null;){var e=U;if(e===t){U=null;break}var r=e.sibling;if(r!==null){r.return=e.return,U=r;break}U=e.return}}function Cd(t){for(;U!==null;){var e=U;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{zs(4,e)}catch(d){It(e,r,d)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var s=e.return;try{n.componentDidMount()}catch(d){It(e,s,d)}}var i=e.return;try{sl(e)}catch(d){It(e,i,d)}break;case 5:var l=e.return;try{sl(e)}catch(d){It(e,l,d)}}}catch(d){It(e,e.return,d)}if(e===t){U=null;break}var a=e.sibling;if(a!==null){a.return=e.return,U=a;break}U=e.return}}var Np=Math.ceil,ds=We.ReactCurrentDispatcher,ra=We.ReactCurrentOwner,ie=We.ReactCurrentBatchConfig,gt=0,Dt=null,Et=null,Mt=0,Xt=0,Pr=or(0),At=0,Kn=null,xr=0,Ts=0,na=0,Bn=null,Gt=null,oa=0,tn=1/0,Ie=null,gs=!1,al=null,Ze=null,So=!1,Ve=null,cs=0,An=0,dl=null,Po=-1,Oo=0;function $t(){return gt&6?zt():Po!==-1?Po:Po=zt()}function qe(t){return t.mode&1?gt&2&&Mt!==0?Mt&-Mt:wp.transition!==null?(Oo===0&&(Oo=Dg()),Oo):(t=ut,t!==0||(t=window.event,t=t===void 0?16:Pg(t.type)),t):1}function fe(t,e,r,n){if(50<An)throw An=0,dl=null,Error(W(185));qn(t,r,n),(!(gt&2)||t!==Dt)&&(t===Dt&&(!(gt&2)&&(Ts|=r),At===4&&Ue(t,Mt)),Kt(t,n),r===1&&gt===0&&!(e.mode&1)&&(tn=zt()+500,js&&sr()))}function Kt(t,e){var r=t.callbackNode;wb(t,e);var n=Qo(t,t===Dt?Mt:0);if(n===0)r!==null&&Ra(r),t.callbackNode=null,t.callbackPriority=0;else if(e=n&-n,t.callbackPriority!==e){if(r!=null&&Ra(r),e===1)t.tag===0?kp(Id.bind(null,t)):sc(Id.bind(null,t)),vp(function(){!(gt&6)&&sr()}),r=null;else{switch(Rg(n)){case 1:r=Bl;break;case 4:r=Ag;break;case 16:r=Yo;break;case 536870912:r=Fg;break;default:r=Yo}r=nu(r,Xc.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function Xc(t,e){if(Po=-1,Oo=0,gt&6)throw Error(W(327));var r=t.callbackNode;if(Vr()&&t.callbackNode!==r)return null;var n=Qo(t,t===Dt?Mt:0);if(n===0)return null;if(n&30||n&t.expiredLanes||e)e=us(t,n);else{e=n;var s=gt;gt|=2;var i=Zc();(Dt!==t||Mt!==e)&&(Ie=null,tn=zt()+500,pr(t,e));do try{$p();break}catch(a){Jc(t,a)}while(!0);Hl(),ds.current=i,gt=s,Et!==null?e=0:(Dt=null,Mt=0,e=At)}if(e!==0){if(e===2&&(s=_i(t),s!==0&&(n=s,e=gl(t,s))),e===1)throw r=Kn,pr(t,0),Ue(t,n),Kt(t,zt()),r;if(e===6)Ue(t,n);else{if(s=t.current.alternate,!(n&30)&&!Pp(s)&&(e=us(t,n),e===2&&(i=_i(t),i!==0&&(n=i,e=gl(t,i))),e===1))throw r=Kn,pr(t,0),Ue(t,n),Kt(t,zt()),r;switch(t.finishedWork=s,t.finishedLanes=n,e){case 0:case 1:throw Error(W(345));case 2:lr(t,Gt,Ie);break;case 3:if(Ue(t,n),(n&130023424)===n&&(e=oa+500-zt(),10<e)){if(Qo(t,0)!==0)break;if(s=t.suspendedLanes,(s&n)!==n){$t(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Ui(lr.bind(null,t,Gt,Ie),e);break}lr(t,Gt,Ie);break;case 4:if(Ue(t,n),(n&4194240)===n)break;for(e=t.eventTimes,s=-1;0<n;){var l=31-me(n);i=1<<l,l=e[l],l>s&&(s=l),n&=~i}if(n=s,n=zt()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Np(n/1960))-n,10<n){t.timeoutHandle=Ui(lr.bind(null,t,Gt,Ie),n);break}lr(t,Gt,Ie);break;case 5:lr(t,Gt,Ie);break;default:throw Error(W(329))}}}return Kt(t,zt()),t.callbackNode===r?Xc.bind(null,t):null}function gl(t,e){var r=Bn;return t.current.memoizedState.isDehydrated&&(pr(t,e).flags|=256),t=us(t,e),t!==2&&(e=Gt,Gt=r,e!==null&&cl(e)),t}function cl(t){Gt===null?Gt=t:Gt.push.apply(Gt,t)}function Pp(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var s=r[n],i=s.getSnapshot;s=s.value;try{if(!ve(i(),s))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ue(t,e){for(e&=~na,e&=~Ts,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-me(e),n=1<<r;t[r]=-1,e&=~n}}function Id(t){if(gt&6)throw Error(W(327));Vr();var e=Qo(t,0);if(!(e&1))return Kt(t,zt()),null;var r=us(t,e);if(t.tag!==0&&r===2){var n=_i(t);n!==0&&(e=n,r=gl(t,n))}if(r===1)throw r=Kn,pr(t,0),Ue(t,e),Kt(t,zt()),r;if(r===6)throw Error(W(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,lr(t,Gt,Ie),Kt(t,zt()),null}function sa(t,e){var r=gt;gt|=1;try{return t(e)}finally{gt=r,gt===0&&(tn=zt()+500,js&&sr())}}function kr(t){Ve!==null&&Ve.tag===0&&!(gt&6)&&Vr();var e=gt;gt|=1;var r=ie.transition,n=ut;try{if(ie.transition=null,ut=1,t)return t()}finally{ut=n,ie.transition=r,gt=e,!(gt&6)&&sr()}}function ia(){Xt=Pr.current,ht(Pr)}function pr(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,fp(r)),Et!==null)for(r=Et.return;r!==null;){var n=r;switch(Pl(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&qo();break;case 3:Zr(),ht(Yt),ht(Pt),Kl();break;case 5:Ql(n);break;case 4:Zr();break;case 13:ht(kt);break;case 19:ht(kt);break;case 10:Ul(n.type._context);break;case 22:case 23:ia()}r=r.return}if(Dt=t,Et=t=tr(t.current,null),Mt=Xt=e,At=0,Kn=null,na=Ts=xr=0,Gt=Bn=null,gr!==null){for(e=0;e<gr.length;e++)if(r=gr[e],n=r.interleaved,n!==null){r.interleaved=null;var s=n.next,i=r.pending;if(i!==null){var l=i.next;i.next=s,n.next=l}r.pending=n}gr=null}return t}function Jc(t,e){do{var r=Et;try{if(Hl(),Wo.current=as,ls){for(var n=St.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}ls=!1}if(yr=0,Ft=Bt=St=null,Tn=!1,Vn=0,ra.current=null,r===null||r.return===null){At=1,Kn=e,Et=null;break}t:{var i=t,l=r.return,a=r,d=e;if(e=Mt,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var g=d,m=a,v=m.tag;if(!(m.mode&1)&&(v===0||v===11||v===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var j=bd(l);if(j!==null){j.flags&=-257,pd(j,l,a,i,e),j.mode&1&&ud(i,g,e),e=j,d=g;var S=e.updateQueue;if(S===null){var w=new Set;w.add(d),e.updateQueue=w}else S.add(d);break t}else{if(!(e&1)){ud(i,g,e),la();break t}d=Error(W(426))}}else if(yt&&a.mode&1){var I=bd(l);if(I!==null){!(I.flags&65536)&&(I.flags|=256),pd(I,l,a,i,e),Ol(qr(d,a));break t}}i=d=qr(d,a),At!==4&&(At=2),Bn===null?Bn=[i]:Bn.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var b=Rc(i,d,e);id(i,b);break t;case 1:a=d;var c=i.type,u=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Ze===null||!Ze.has(u)))){i.flags|=65536,e&=-e,i.lanes|=e;var x=Mc(i,a,e);id(i,x);break t}}i=i.return}while(i!==null)}tu(r)}catch(h){e=h,Et===r&&r!==null&&(Et=r=r.return);continue}break}while(!0)}function Zc(){var t=ds.current;return ds.current=as,t===null?as:t}function la(){(At===0||At===3||At===2)&&(At=4),Dt===null||!(xr&268435455)&&!(Ts&268435455)||Ue(Dt,Mt)}function us(t,e){var r=gt;gt|=2;var n=Zc();(Dt!==t||Mt!==e)&&(Ie=null,pr(t,e));do try{Op();break}catch(s){Jc(t,s)}while(!0);if(Hl(),gt=r,ds.current=n,Et!==null)throw Error(W(261));return Dt=null,Mt=0,At}function Op(){for(;Et!==null;)qc(Et)}function $p(){for(;Et!==null&&!bb();)qc(Et)}function qc(t){var e=ru(t.alternate,t,Xt);t.memoizedProps=t.pendingProps,e===null?tu(t):Et=e,ra.current=null}function tu(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=Mp(r,e),r!==null){r.flags&=32767,Et=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,Et=null;return}}else if(r=Rp(r,e,Xt),r!==null){Et=r;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);At===0&&(At=5)}function lr(t,e,r){var n=ut,s=ie.transition;try{ie.transition=null,ut=1,Hp(t,e,r,n)}finally{ie.transition=s,ut=n}return null}function Hp(t,e,r,n){do Vr();while(Ve!==null);if(gt&6)throw Error(W(327));r=t.finishedWork;var s=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(W(177));t.callbackNode=null,t.callbackPriority=0;var i=r.lanes|r.childLanes;if(Sb(t,i),t===Dt&&(Et=Dt=null,Mt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||So||(So=!0,nu(Yo,function(){return Vr(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=ie.transition,ie.transition=null;var l=ut;ut=1;var a=gt;gt|=4,ra.current=null,Wp(t,r),Qc(r,t),dp($i),Ko=!!Oi,$i=Oi=null,t.current=r,Lp(r),pb(),gt=a,ut=l,ie.transition=i}else t.current=r;if(So&&(So=!1,Ve=t,cs=s),i=t.pendingLanes,i===0&&(Ze=null),vb(r.stateNode),Kt(t,zt()),e!==null)for(n=t.onRecoverableError,r=0;r<e.length;r++)s=e[r],n(s.value,{componentStack:s.stack,digest:s.digest});if(gs)throw gs=!1,t=al,al=null,t;return cs&1&&t.tag!==0&&Vr(),i=t.pendingLanes,i&1?t===dl?An++:(An=0,dl=t):An=0,sr(),null}function Vr(){if(Ve!==null){var t=Rg(cs),e=ie.transition,r=ut;try{if(ie.transition=null,ut=16>t?16:t,Ve===null)var n=!1;else{if(t=Ve,Ve=null,cs=0,gt&6)throw Error(W(331));var s=gt;for(gt|=4,U=t.current;U!==null;){var i=U,l=i.child;if(U.flags&16){var a=i.deletions;if(a!==null){for(var d=0;d<a.length;d++){var g=a[d];for(U=g;U!==null;){var m=U;switch(m.tag){case 0:case 11:case 15:En(8,m,i)}var v=m.child;if(v!==null)v.return=m,U=v;else for(;U!==null;){m=U;var p=m.sibling,j=m.return;if(Gc(m),m===g){U=null;break}if(p!==null){p.return=j,U=p;break}U=j}}}var S=i.alternate;if(S!==null){var w=S.child;if(w!==null){S.child=null;do{var I=w.sibling;w.sibling=null,w=I}while(w!==null)}}U=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,U=l;else t:for(;U!==null;){if(i=U,i.flags&2048)switch(i.tag){case 0:case 11:case 15:En(9,i,i.return)}var b=i.sibling;if(b!==null){b.return=i.return,U=b;break t}U=i.return}}var c=t.current;for(U=c;U!==null;){l=U;var u=l.child;if(l.subtreeFlags&2064&&u!==null)u.return=l,U=u;else t:for(l=c;U!==null;){if(a=U,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:zs(9,a)}}catch(h){It(a,a.return,h)}if(a===l){U=null;break t}var x=a.sibling;if(x!==null){x.return=a.return,U=x;break t}U=a.return}}if(gt=s,sr(),Se&&typeof Se.onPostCommitFiberRoot=="function")try{Se.onPostCommitFiberRoot(ys,t)}catch{}n=!0}return n}finally{ut=r,ie.transition=e}}return!1}function zd(t,e,r){e=qr(r,e),e=Rc(t,e,1),t=Je(t,e,1),e=$t(),t!==null&&(qn(t,1,e),Kt(t,e))}function It(t,e,r){if(t.tag===3)zd(t,t,r);else for(;e!==null;){if(e.tag===3){zd(e,t,r);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ze===null||!Ze.has(n))){t=qr(r,t),t=Mc(e,t,1),e=Je(e,t,1),t=$t(),e!==null&&(qn(e,1,t),Kt(e,t));break}}e=e.return}}function Up(t,e,r){var n=t.pingCache;n!==null&&n.delete(e),e=$t(),t.pingedLanes|=t.suspendedLanes&r,Dt===t&&(Mt&r)===r&&(At===4||At===3&&(Mt&130023424)===Mt&&500>zt()-oa?pr(t,0):na|=r),Kt(t,e)}function eu(t,e){e===0&&(t.mode&1?(e=bo,bo<<=1,!(bo&130023424)&&(bo=4194304)):e=1);var r=$t();t=Re(t,e),t!==null&&(qn(t,e,r),Kt(t,r))}function Gp(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),eu(t,r)}function Vp(t,e){var r=0;switch(t.tag){case 13:var n=t.stateNode,s=t.memoizedState;s!==null&&(r=s.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(W(314))}n!==null&&n.delete(e),eu(t,r)}var ru;ru=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||Yt.current)Vt=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return Vt=!1,Dp(t,e,r);Vt=!!(t.flags&131072)}else Vt=!1,yt&&e.flags&1048576&&ic(e,rs,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;No(t,e),t=e.pendingProps;var s=Kr(e,Pt.current);Gr(e,r),s=Jl(null,e,n,t,s,r);var i=Zl();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qt(n)?(i=!0,ts(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Vl(e),s.updater=Is,e.stateNode=s,s._reactInternals=e,Ji(e,n,t,r),e=tl(null,e,n,!0,i,r)):(e.tag=0,yt&&i&&Nl(e),Ot(null,e,s,r),e=e.child),e;case 16:n=e.elementType;t:{switch(No(t,e),t=e.pendingProps,s=n._init,n=s(n._payload),e.type=n,s=e.tag=Qp(n),t=ue(n,t),s){case 0:e=qi(null,e,n,t,r);break t;case 1:e=vd(null,e,n,t,r);break t;case 11:e=md(null,e,n,t,r);break t;case 14:e=fd(null,e,n,ue(n.type,t),r);break t}throw Error(W(306,n,""))}return e;case 0:return n=e.type,s=e.pendingProps,s=e.elementType===n?s:ue(n,s),qi(t,e,n,s,r);case 1:return n=e.type,s=e.pendingProps,s=e.elementType===n?s:ue(n,s),vd(t,e,n,s,r);case 3:t:{if(Nc(e),t===null)throw Error(W(387));n=e.pendingProps,i=e.memoizedState,s=i.element,uc(t,e),ss(e,n,null,r);var l=e.memoizedState;if(n=l.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=qr(Error(W(423)),e),e=hd(t,e,n,r,s);break t}else if(n!==s){s=qr(Error(W(424)),e),e=hd(t,e,n,r,s);break t}else for(Jt=Xe(e.stateNode.containerInfo.firstChild),Zt=e,yt=!0,pe=null,r=gc(e,null,n,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Xr(),n===s){e=Me(t,e,r);break t}Ot(t,e,n,r)}e=e.child}return e;case 5:return bc(e),t===null&&Qi(e),n=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,l=s.children,Hi(n,s)?l=null:i!==null&&Hi(n,i)&&(e.flags|=32),Lc(t,e),Ot(t,e,l,r),e.child;case 6:return t===null&&Qi(e),null;case 13:return Pc(t,e,r);case 4:return Yl(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Jr(e,null,n,r):Ot(t,e,n,r),e.child;case 11:return n=e.type,s=e.pendingProps,s=e.elementType===n?s:ue(n,s),md(t,e,n,s,r);case 7:return Ot(t,e,e.pendingProps,r),e.child;case 8:return Ot(t,e,e.pendingProps.children,r),e.child;case 12:return Ot(t,e,e.pendingProps.children,r),e.child;case 10:t:{if(n=e.type._context,s=e.pendingProps,i=e.memoizedProps,l=s.value,ft(ns,n._currentValue),n._currentValue=l,i!==null)if(ve(i.value,l)){if(i.children===s.children&&!Yt.current){e=Me(t,e,r);break t}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var d=a.firstContext;d!==null;){if(d.context===n){if(i.tag===1){d=Ae(-1,r&-r),d.tag=2;var g=i.updateQueue;if(g!==null){g=g.shared;var m=g.pending;m===null?d.next=d:(d.next=m.next,m.next=d),g.pending=d}}i.lanes|=r,d=i.alternate,d!==null&&(d.lanes|=r),Ki(i.return,r,e),a.lanes|=r;break}d=d.next}}else if(i.tag===10)l=i.type===e.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(W(341));l.lanes|=r,a=l.alternate,a!==null&&(a.lanes|=r),Ki(l,r,e),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===e){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ot(t,e,s.children,r),e=e.child}return e;case 9:return s=e.type,n=e.pendingProps.children,Gr(e,r),s=le(s),n=n(s),e.flags|=1,Ot(t,e,n,r),e.child;case 14:return n=e.type,s=ue(n,e.pendingProps),s=ue(n.type,s),fd(t,e,n,s,r);case 15:return _c(t,e,e.type,e.pendingProps,r);case 17:return n=e.type,s=e.pendingProps,s=e.elementType===n?s:ue(n,s),No(t,e),e.tag=1,Qt(n)?(t=!0,ts(e)):t=!1,Gr(e,r),Dc(e,n,s),Ji(e,n,s,r),tl(null,e,n,!0,t,r);case 19:return Oc(t,e,r);case 22:return Wc(t,e,r)}throw Error(W(156,e.tag))};function nu(t,e){return Bg(t,e)}function Yp(t,e,r,n){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oe(t,e,r,n){return new Yp(t,e,r,n)}function aa(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qp(t){if(typeof t=="function")return aa(t)?1:0;if(t!=null){if(t=t.$$typeof,t===zl)return 11;if(t===Tl)return 14}return 2}function tr(t,e){var r=t.alternate;return r===null?(r=oe(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function $o(t,e,r,n,s,i){var l=2;if(n=t,typeof t=="function")aa(t)&&(l=1);else if(typeof t=="string")l=5;else t:switch(t){case Br:return mr(r.children,s,i,e);case Il:l=8,s|=8;break;case ki:return t=oe(12,r,e,s|2),t.elementType=ki,t.lanes=i,t;case wi:return t=oe(13,r,e,s),t.elementType=wi,t.lanes=i,t;case Si:return t=oe(19,r,e,s),t.elementType=Si,t.lanes=i,t;case bg:return Es(r,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case cg:l=10;break t;case ug:l=9;break t;case zl:l=11;break t;case Tl:l=14;break t;case Pe:l=16,n=null;break t}throw Error(W(130,t==null?t:typeof t,""))}return e=oe(l,r,e,s),e.elementType=t,e.type=n,e.lanes=i,e}function mr(t,e,r,n){return t=oe(7,t,n,e),t.lanes=r,t}function Es(t,e,r,n){return t=oe(22,t,n,e),t.elementType=bg,t.lanes=r,t.stateNode={isHidden:!1},t}function si(t,e,r){return t=oe(6,t,null,e),t.lanes=r,t}function ii(t,e,r){return e=oe(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Kp(t,e,r,n,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ps(0),this.expirationTimes=Ps(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ps(0),this.identifierPrefix=n,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function da(t,e,r,n,s,i,l,a,d){return t=new Kp(t,e,r,a,d),e===1?(e=1,i===!0&&(e|=8)):e=0,i=oe(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vl(i),t}function Xp(t,e,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Er,key:n==null?null:""+n,children:t,containerInfo:e,implementation:r}}function ou(t){if(!t)return rr;t=t._reactInternals;t:{if(Cr(t)!==t||t.tag!==1)throw Error(W(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break t;case 1:if(Qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break t}}e=e.return}while(e!==null);throw Error(W(171))}if(t.tag===1){var r=t.type;if(Qt(r))return oc(t,r,e)}return e}function su(t,e,r,n,s,i,l,a,d){return t=da(r,n,!0,t,s,i,l,a,d),t.context=ou(null),r=t.current,n=$t(),s=qe(r),i=Ae(n,s),i.callback=e??null,Je(r,i,s),t.current.lanes=s,qn(t,s,n),Kt(t,n),t}function Bs(t,e,r,n){var s=e.current,i=$t(),l=qe(s);return r=ou(r),e.context===null?e.context=r:e.pendingContext=r,e=Ae(i,l),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=Je(s,e,l),t!==null&&(fe(t,s,l,i),_o(t,s,l)),l}function bs(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Td(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function ga(t,e){Td(t,e),(t=t.alternate)&&Td(t,e)}function Jp(){return null}var iu=typeof reportError=="function"?reportError:function(t){console.error(t)};function ca(t){this._internalRoot=t}As.prototype.render=ca.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(W(409));Bs(t,e,null,null)};As.prototype.unmount=ca.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;kr(function(){Bs(null,t,null,null)}),e[De]=null}};function As(t){this._internalRoot=t}As.prototype.unstable_scheduleHydration=function(t){if(t){var e=Wg();t={blockedOn:null,target:t,priority:e};for(var r=0;r<He.length&&e!==0&&e<He[r].priority;r++);He.splice(r,0,t),r===0&&Ng(t)}};function ua(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ed(){}function Zp(t,e,r,n,s){if(s){if(typeof n=="function"){var i=n;n=function(){var g=bs(l);i.call(g)}}var l=su(e,n,t,0,null,!1,!1,"",Ed);return t._reactRootContainer=l,t[De]=l.current,On(t.nodeType===8?t.parentNode:t),kr(),l}for(;s=t.lastChild;)t.removeChild(s);if(typeof n=="function"){var a=n;n=function(){var g=bs(d);a.call(g)}}var d=da(t,0,!1,null,null,!1,!1,"",Ed);return t._reactRootContainer=d,t[De]=d.current,On(t.nodeType===8?t.parentNode:t),kr(function(){Bs(e,d,r,n)}),d}function Ds(t,e,r,n,s){var i=r._reactRootContainer;if(i){var l=i;if(typeof s=="function"){var a=s;s=function(){var d=bs(l);a.call(d)}}Bs(e,l,t,s)}else l=Zp(r,e,t,s,n);return bs(l)}Mg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=yn(e.pendingLanes);r!==0&&(Al(e,r|1),Kt(e,zt()),!(gt&6)&&(tn=zt()+500,sr()))}break;case 13:kr(function(){var n=Re(t,1);if(n!==null){var s=$t();fe(n,t,1,s)}}),ga(t,1)}};Fl=function(t){if(t.tag===13){var e=Re(t,134217728);if(e!==null){var r=$t();fe(e,t,134217728,r)}ga(t,134217728)}};_g=function(t){if(t.tag===13){var e=qe(t),r=Re(t,e);if(r!==null){var n=$t();fe(r,t,e,n)}ga(t,e)}};Wg=function(){return ut};Lg=function(t,e){var r=ut;try{return ut=t,e()}finally{ut=r}};Di=function(t,e,r){switch(e){case"input":if(Ii(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var n=r[e];if(n!==t&&n.form===t.form){var s=Ss(n);if(!s)throw Error(W(90));mg(n),Ii(n,s)}}}break;case"textarea":vg(t,r);break;case"select":e=r.value,e!=null&&Or(t,!!r.multiple,e,!1)}};jg=sa;Cg=kr;var qp={usingClientEntryPoint:!1,Events:[eo,Rr,Ss,wg,Sg,sa]},pn={findFiberByHostInstance:dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tm={bundleType:pn.bundleType,version:pn.version,rendererPackageName:pn.rendererPackageName,rendererConfig:pn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:We.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Tg(t),t===null?null:t.stateNode},findFiberByHostInstance:pn.findFiberByHostInstance||Jp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jo.isDisabled&&jo.supportsFiber)try{ys=jo.inject(tm),Se=jo}catch{}}te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qp;te.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ua(e))throw Error(W(200));return Xp(t,e,null,r)};te.createRoot=function(t,e){if(!ua(t))throw Error(W(299));var r=!1,n="",s=iu;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=da(t,1,!1,null,null,r,!1,n,s),t[De]=e.current,On(t.nodeType===8?t.parentNode:t),new ca(e)};te.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(W(188)):(t=Object.keys(t).join(","),Error(W(268,t)));return t=Tg(e),t=t===null?null:t.stateNode,t};te.flushSync=function(t){return kr(t)};te.hydrate=function(t,e,r){if(!Fs(e))throw Error(W(200));return Ds(null,t,e,!0,r)};te.hydrateRoot=function(t,e,r){if(!ua(t))throw Error(W(405));var n=r!=null&&r.hydratedSources||null,s=!1,i="",l=iu;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),e=su(e,null,t,1,r??null,s,!1,i,l),t[De]=e.current,On(t),n)for(t=0;t<n.length;t++)r=n[t],s=r._getVersion,s=s(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,s]:e.mutableSourceEagerHydrationData.push(r,s);return new As(e)};te.render=function(t,e,r){if(!Fs(e))throw Error(W(200));return Ds(null,t,e,!1,r)};te.unmountComponentAtNode=function(t){if(!Fs(t))throw Error(W(40));return t._reactRootContainer?(kr(function(){Ds(null,null,t,!1,function(){t._reactRootContainer=null,t[De]=null})}),!0):!1};te.unstable_batchedUpdates=sa;te.unstable_renderSubtreeIntoContainer=function(t,e,r,n){if(!Fs(r))throw Error(W(200));if(t==null||t._reactInternals===void 0)throw Error(W(38));return Ds(t,e,r,!1,n)};te.version="18.3.1-next-f1338f8080-20240426";function lu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lu)}catch(t){console.error(t)}}lu(),lg.exports=te;var em=lg.exports,au,Bd=em;au=Bd.createRoot,Bd.hydrateRoot;/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),du=(...t)=>t.filter((e,r,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===r).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var nm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=k.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:s="",children:i,iconNode:l,...a},d)=>k.createElement("svg",{ref:d,...nm,width:e,height:e,stroke:t,strokeWidth:n?Number(r)*24/Number(e):r,className:du("lucide",s),...a},[...l.map(([g,m])=>k.createElement(g,m)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=(t,e)=>{const r=k.forwardRef(({className:n,...s},i)=>k.createElement(om,{ref:i,iconNode:e,className:du(`lucide-${rm(t)}`,n),...s}));return r.displayName=`${t}`,r};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=J("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=J("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=J("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=J("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=J("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=J("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=J("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=J("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=J("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=J("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=J("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=J("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=J("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=J("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=J("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=J("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=J("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=J("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=J("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=J("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=J("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=J("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=J("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=J("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=J("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=J("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=J("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=J("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=J("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=J("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=J("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=J("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=J("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=J("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=J("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=J("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=J("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=J("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=J("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=J("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=J("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=J("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=J("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=J("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=J("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=J("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=J("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=J("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=J("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=J("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=J("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=J("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),fa="anvil_token",va=()=>localStorage.getItem(fa),Am=t=>localStorage.setItem(fa,t),bl=()=>localStorage.removeItem(fa),O=async(t,e,r)=>{const n={};r!==void 0&&(n["Content-Type"]="application/json");const s=va();s&&(n.Authorization=`Bearer ${s}`);const i=await fetch(`/api${e}`,{method:t,headers:n,body:r!==void 0?JSON.stringify(r):void 0});if(i.status===401)throw bl(),window.dispatchEvent(new Event("anvil-unauthorized")),new Error("Not authenticated");if(i.status===204)return null;if(!i.ok){const l=await i.text();let a=l;try{a=JSON.parse(l).detail||l}catch{}throw new Error(a||`HTTP ${i.status}`)}return i.json()},H={register:t=>O("POST","/auth/register",t),login:t=>O("POST","/auth/login",t),me:()=>O("GET","/auth/me"),getGcalStatus:()=>O("GET","/auth/google/status"),connectGoogle:()=>{window.location.href=`/api/auth/google?token=${encodeURIComponent(va()||"")}`},disconnectGoogle:()=>O("DELETE","/auth/google"),getPillars:()=>O("GET","/pillars"),getFocus:()=>O("GET","/focus"),createFocus:t=>O("POST","/focus",t),deleteFocus:t=>O("DELETE",`/focus/${t}`),getTxns:()=>O("GET","/finance/txns"),createTxn:t=>O("POST","/finance/txns",t),updateTxn:(t,e)=>O("PUT",`/finance/txns/${t}`,e),deleteTxn:t=>O("DELETE",`/finance/txns/${t}`),restoreTxn:t=>O("POST",`/finance/txns/${t}/restore`),getSetting:t=>O("GET",`/settings/${t}`),setSetting:(t,e)=>O("PUT",`/settings/${t}`,{value:e}),getTasks:()=>O("GET","/tasks"),createTask:t=>O("POST","/tasks",t),updateTask:(t,e)=>O("PUT",`/tasks/${t}`,e),deleteTask:t=>O("DELETE",`/tasks/${t}`),restoreTask:t=>O("POST",`/tasks/${t}/restore`),scheduleTask:t=>O("PUT",`/tasks/${t}/schedule`),getGoals:t=>O("GET",`/goals${t?`?pillar=${encodeURIComponent(t)}`:""}`),createGoal:t=>O("POST","/goals",t),updateGoal:(t,e)=>O("PUT",`/goals/${t}`,e),deleteGoal:t=>O("DELETE",`/goals/${t}`),restoreGoal:t=>O("POST",`/goals/${t}/restore`),getHabits:()=>O("GET","/habits"),createHabit:t=>O("POST","/habits",t),updateHabit:(t,e)=>O("PUT",`/habits/${t}`,e),deleteHabit:t=>O("DELETE",`/habits/${t}`),restoreHabit:t=>O("POST",`/habits/${t}/restore`),toggleHabitLog:(t,e)=>O("POST",`/habits/${t}/log/${e}`),setHabitLogNote:(t,e,r)=>O("PUT",`/habits/${t}/log/${e}/note`,{note:r}),setHabitLogCount:(t,e,r,n)=>O("PUT",`/habits/${t}/log/${e}/count`,{count:r,note:n}),clearHabitLog:(t,e)=>O("DELETE",`/habits/${t}/log/${e}`),getHabitsYearly:t=>O("GET",`/habits/yearly/${t}`),getJournalEntry:t=>O("GET",`/journal/${t}`),getJournalHistory:(t,e)=>O("GET",`/journal/history/${t}/${e}`),updateJournalMood:(t,e)=>O("PUT",`/journal/${t}`,{mood:e}),addJournalBullet:(t,e,r)=>O("POST",`/journal/${t}/bullets`,{section:e,text:r}),deleteJournalBullet:t=>O("DELETE",`/journal/bullets/${t}`),getSkills:()=>O("GET","/skills"),createSkill:t=>O("POST","/skills",t),updateSkill:(t,e)=>O("PUT",`/skills/${t}`,e),deleteSkill:t=>O("DELETE",`/skills/${t}`),restoreSkill:t=>O("POST",`/skills/${t}/restore`),addSkillNote:(t,e,r)=>O("POST",`/skills/${t}/notes`,{stage:e,text:r}),deleteSkillNote:t=>O("DELETE",`/skill-notes/${t}`),updateSkillNote:(t,e)=>O("PUT",`/skill-notes/${t}`,{text:e}),toggleSkillNote:t=>O("PUT",`/skill-notes/${t}/toggle`),completeSkillStage:(t,e)=>O("POST",`/skills/${t}/complete-stage`,{stage:e}),getScriptures:()=>O("GET","/scriptures"),createScripture:t=>O("POST","/scriptures",t),deleteScripture:t=>O("DELETE",`/scriptures/${t}`),restoreScripture:t=>O("POST",`/scriptures/${t}/restore`),addChapter:(t,e)=>O("POST",`/scriptures/${t}/chapters`,e),updateChapter:(t,e)=>O("PUT",`/chapters/${t}`,e),deleteChapter:t=>O("DELETE",`/chapters/${t}`),restoreChapter:t=>O("POST",`/chapters/${t}/restore`),addInsight:(t,e)=>O("POST",`/chapters/${t}/insights`,{text:e}),deleteInsight:t=>O("DELETE",`/insights/${t}`),getTopics:()=>O("GET","/revision/topics"),createTopic:t=>O("POST","/revision/topics",t),deleteTopic:t=>O("DELETE",`/revision/topics/${t}`),restoreTopic:t=>O("POST",`/revision/topics/${t}/restore`),getDueToday:()=>O("GET","/revision/due-today"),getCalendar:(t,e)=>O("GET",`/revision/calendar/${t}/${e}`),toggleReviewDone:t=>O("PUT",`/revision/reviews/${t}/done`),getAffirmations:()=>O("GET","/affirmations"),createAffirmation:t=>O("POST","/affirmations",t),updateAffirmation:(t,e)=>O("PUT",`/affirmations/${t}`,e),deleteAffirmation:t=>O("DELETE",`/affirmations/${t}`),restoreAffirmation:t=>O("POST",`/affirmations/${t}/restore`)},Fm=7e3;function oo(t,e,r){const[n,s]=k.useState([]),i=k.useRef({}),l=k.useCallback(async(g,m="Item")=>{await t(g),r();const v=`${g}-${Date.now()}`;s(p=>[...p,{id:v,itemId:g,label:m}]),i.current[v]=setTimeout(()=>{s(p=>p.filter(j=>j.id!==v)),delete i.current[v]},Fm)},[t,r]),a=k.useCallback(async g=>{const m=n.find(v=>v.id===g);m&&(clearTimeout(i.current[g]),delete i.current[g],s(v=>v.filter(p=>p.id!==g)),await e(m.itemId),r())},[n,e,r]),d=k.useCallback(g=>{clearTimeout(i.current[g]),delete i.current[g],s(m=>m.filter(v=>v.id!==g))},[]);return{deleteItem:l,toasts:n,handleUndo:a,handleDismiss:d}}function so({toasts:t,onUndo:e,onDismiss:r}){return o.jsx("div",{style:Tr.container,children:t.map(n=>o.jsx(Dm,{toast:n,onUndo:e,onDismiss:r},n.id))})}function Dm({toast:t,onUndo:e,onDismiss:r}){const[n,s]=k.useState(100);return k.useEffect(()=>{const i=Date.now(),l=7e3,a=setInterval(()=>{const d=Date.now()-i,g=Math.max(0,100-d/l*100);s(g),g===0&&clearInterval(a)},50);return()=>clearInterval(a)},[]),o.jsxs("div",{style:Tr.toast,children:[o.jsx("div",{style:{...Tr.bar,width:`${n}%`}}),o.jsxs("span",{style:Tr.msg,children:[t.label," deleted"]}),o.jsx("button",{style:Tr.undoBtn,onClick:()=>e(t.id),children:"Undo"}),o.jsx("button",{style:Tr.closeBtn,onClick:()=>r(t.id),children:"×"})]})}const Tr={container:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",gap:8,zIndex:999,pointerEvents:"none"},toast:{position:"relative",display:"flex",alignItems:"center",gap:12,background:"var(--accent-strong)",color:"#fff",borderRadius:10,padding:"12px 16px",fontSize:13.5,fontFamily:"'Inter', system-ui, sans-serif",boxShadow:"0 4px 20px rgba(0,0,0,0.25)",minWidth:260,overflow:"hidden",pointerEvents:"all"},bar:{position:"absolute",bottom:0,left:0,height:3,background:"#4C9A6B",transition:"width 0.05s linear",borderRadius:"0 0 0 10px"},msg:{flex:1,fontWeight:500},undoBtn:{border:"1px solid rgba(255,255,255,0.3)",background:"none",color:"#4C9A6B",fontWeight:700,fontSize:13,padding:"4px 10px",borderRadius:6,cursor:"pointer",fontFamily:"inherit"},closeBtn:{border:"none",background:"none",color:"rgba(255,255,255,0.5)",cursor:"pointer",fontSize:18,lineHeight:1,padding:"0 2px"}},Io={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},Fd=[{id:"Q1",symbol:"™",title:"Do Now",sub:"Important · Urgent",accent:"#C2536B"},{id:"Q2",symbol:"©",title:"Schedule",sub:"Important · Not Urgent",accent:"#3A7CA5"},{id:"Q3",symbol:"®",title:"Delegate",sub:"Not Important · Urgent",accent:"#C9A227"},{id:"Q4",symbol:"•",title:"Drop",sub:"Not Important · Not Urgent",accent:"#8A8780"}];function Rm(){return new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Kolkata"})}function Mm(){const t=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"})),r=t.getMinutes()<30?30:0,n=r===0?t.getHours()+1:t.getHours();return`${String(n%24).padStart(2,"0")}:${String(r).padStart(2,"0")}`}function _m(t,e){const[r,n]=t.split(":").map(Number),s=r*60+n+e;return`${String(Math.floor(s/60)%24).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`}function Wm(t){return t?new Date(t).toLocaleString("en-IN",{timeZone:"Asia/Kolkata",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0}):""}const li=()=>({title:"",pillar:"Financial",est:30,date:Rm(),startTime:Mm()});function Lm(){const[t,e]=k.useState([]),[r,n]=k.useState(null),[s,i]=k.useState(li()),[l,a]=k.useState({connected:!1,configured:!1}),d=k.useCallback(()=>H.getTasks().then(e).catch(console.error),[]);k.useEffect(()=>{d(),H.getGcalStatus().then(a).catch(()=>{})},[d]);const{deleteItem:g,toasts:m,handleUndo:v,handleDismiss:p}=oo(H.deleteTask,H.restoreTask,d),j=u=>t.filter(x=>x.quadrant===u),S=u=>j(u).reduce((x,h)=>x+h.time_estimate_min,0),w=u=>u>=60?`${Math.floor(u/60)}h${u%60?` ${u%60}m`:""}`:`${u}m`,I=u=>{var h;return`${((h=Fd.find(C=>C.id===u.quadrant))==null?void 0:h.symbol)??""} ${u.title}`},b=async u=>{if(!s.title.trim())return;const x=s.date&&s.startTime?`${s.date}T${s.startTime}:00`:null;await H.createTask({pillar:s.pillar,title:s.title,quadrant:u,time_estimate_min:Number(s.est)||30,start_datetime:x}),i(li()),n(null),d()},c=(u,x)=>g(u,x);return o.jsxs("div",{style:X.page,children:[o.jsxs("div",{style:X.head,children:[o.jsxs("div",{children:[o.jsx("div",{style:X.eyebrow,children:"Anvil · Weekly Routing"}),o.jsx("h1",{style:X.h1,children:"Weekly Routing"})]}),o.jsxs("div",{style:X.headRight,children:[o.jsx("div",{style:X.legend,children:Object.entries(Io).map(([u,x])=>o.jsxs("span",{style:X.legendItem,children:[o.jsx("span",{style:{...X.dot,background:x.dot}}),u]},u))}),l.configured&&(l.connected?o.jsxs("button",{style:X.gcalBadgeOn,title:"Disconnect Google Calendar",onClick:()=>H.disconnectGoogle().then(()=>a({...l,connected:!1})),children:[o.jsx(Co,{size:13})," Google Calendar connected"]}):o.jsxs("button",{style:X.gcalBadgeOff,onClick:()=>H.connectGoogle(),children:[o.jsx(Co,{size:13})," Connect Google Calendar"]}))]})]}),o.jsx("div",{style:X.grid,children:Fd.map(u=>o.jsxs("section",{style:{...X.quad,borderTop:`3px solid ${u.accent}`},children:[o.jsxs("header",{style:X.quadHead,children:[o.jsxs("div",{style:X.quadTitleRow,children:[o.jsx("span",{style:{...X.symbol,color:u.accent},children:u.symbol}),o.jsxs("div",{children:[o.jsx("div",{style:X.quadTitle,children:u.title}),o.jsx("div",{style:X.quadSub,children:u.sub})]})]}),o.jsx("span",{style:X.quadTotal,children:w(S(u.id))})]}),o.jsxs("div",{style:X.list,children:[j(u.id).map(x=>{const h=Io[x.pillar]||Io.Financial,C=!!x.gcal_event_id;return o.jsxs("div",{style:{...X.card,background:h.soft},children:[o.jsx("span",{style:{...X.cardBar,background:h.dot}}),o.jsxs("div",{style:X.cardBody,children:[o.jsx("div",{style:X.cardTitle,children:x.title}),x.start_datetime&&o.jsxs("div",{style:X.eventTime,children:[o.jsx(Co,{size:10}),Wm(x.start_datetime),C&&o.jsx("span",{style:X.syncedDot,title:"Synced to Google Calendar"})]}),o.jsxs("div",{style:X.cardMeta,children:[o.jsxs("span",{style:X.metaPill,children:[o.jsx("span",{style:{...X.dot,background:h.dot,width:7,height:7}}),x.pillar]}),o.jsxs("span",{style:X.metaPill,children:[o.jsx(gm,{size:11})," ",w(x.time_estimate_min)]})]})]}),o.jsxs("div",{style:X.cardActions,children:[C&&o.jsx("span",{title:`On calendar as "${I(x)}"`,style:X.calDoneIcon,children:o.jsx(wt,{size:14})}),o.jsx("button",{onClick:()=>c(x.id,x.title),style:X.delBtn,children:o.jsx(bt,{size:13})})]})]},x.id)}),r===u.id?o.jsxs("div",{style:X.addBox,children:[o.jsx("input",{autoFocus:!0,placeholder:"Task title",value:s.title,onChange:x=>i({...s,title:x.target.value}),onKeyDown:x=>x.key==="Enter"&&b(u.id),style:X.input}),o.jsxs("div",{style:X.dateTimeRow,children:[o.jsxs("div",{style:X.dateTimeGroup,children:[o.jsx("label",{style:X.dtLabel,children:"Date"}),o.jsx("input",{type:"date",value:s.date,onChange:x=>i({...s,date:x.target.value}),style:X.dtInput})]}),o.jsxs("div",{style:X.dateTimeGroup,children:[o.jsx("label",{style:X.dtLabel,children:"Start"}),o.jsx("input",{type:"time",value:s.startTime,onChange:x=>i({...s,startTime:x.target.value}),style:X.dtInput})]}),o.jsxs("div",{style:X.dateTimeGroup,children:[o.jsx("label",{style:X.dtLabel,children:"End"}),o.jsx("div",{style:X.dtEndValue,children:_m(s.startTime,Number(s.est)||30)})]})]}),o.jsxs("div",{style:X.addRow,children:[o.jsx("select",{value:s.pillar,onChange:x=>i({...s,pillar:x.target.value}),style:X.select,children:Object.keys(Io).map(x=>o.jsx("option",{children:x},x))}),o.jsx("input",{type:"number",value:s.est,onChange:x=>i({...s,est:x.target.value}),style:{...X.input,width:60}}),o.jsx("span",{style:X.minLabel,children:"min"}),l.connected&&o.jsx("span",{style:X.gcalHint,title:"Will sync to Google Calendar",children:o.jsx(Co,{size:12})}),o.jsx("button",{onClick:()=>b(u.id),style:X.saveBtn,children:o.jsx(wt,{size:14})}),o.jsx("button",{onClick:()=>{n(null),i(li())},style:X.cancelBtn,children:o.jsx(bt,{size:14})})]})]}):o.jsxs("button",{onClick:()=>n(u.id),style:X.addTrigger,children:[o.jsx(_e,{size:13})," Add task"]})]})]},u.id))}),o.jsx(so,{toasts:m,onUndo:v,onDismiss:p})]})}const X={page:{fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:16,marginBottom:22},headRight:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:10},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces', Georgia, serif"},legend:{display:"flex",gap:14,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--text-2)",fontWeight:500},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},gcalBadgeOn:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"#4C9A6B",background:"rgba(76,154,107,0.10)",border:"1px solid rgba(76,154,107,0.3)",borderRadius:20,padding:"5px 12px",cursor:"pointer"},gcalBadgeOff:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"var(--text-2)",background:"var(--surface)",border:"1px solid #DCDAD3",borderRadius:20,padding:"5px 12px",cursor:"pointer"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16},quad:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.06)"},quadHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14},quadTitleRow:{display:"flex",gap:10,alignItems:"center"},symbol:{fontSize:20,lineHeight:1},quadTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em"},quadSub:{fontSize:11,color:"var(--text-3)",marginTop:1,letterSpacing:"0.02em"},quadTotal:{fontSize:12,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"3px 9px",borderRadius:20},list:{display:"flex",flexDirection:"column",gap:8},card:{display:"flex",alignItems:"stretch",gap:10,borderRadius:9,padding:"10px 10px 10px 0",overflow:"hidden"},cardBar:{width:3,borderRadius:3,flexShrink:0},cardBody:{flex:1,minWidth:0},cardTitle:{fontSize:13.5,fontWeight:500,lineHeight:1.35,marginBottom:4},eventTime:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#3A7CA5",fontWeight:500,marginBottom:5},syncedDot:{width:6,height:6,borderRadius:"50%",background:"#4C9A6B",display:"inline-block",marginLeft:2},cardMeta:{display:"flex",gap:8,flexWrap:"wrap"},metaPill:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"var(--text-2)",fontWeight:500},cardActions:{display:"flex",flexDirection:"column",gap:4,alignSelf:"center",flexShrink:0},calDoneIcon:{width:30,height:30,borderRadius:8,background:"#4C9A6B",color:"#fff",display:"grid",placeItems:"center"},delBtn:{width:30,height:30,borderRadius:8,border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center"},addTrigger:{display:"flex",alignItems:"center",gap:5,fontSize:12.5,color:"var(--text-3)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"8px 10px",cursor:"pointer",fontWeight:500,marginTop:2},addBox:{border:"1px solid var(--border)",borderRadius:9,padding:10,display:"flex",flexDirection:"column",gap:8},dateTimeRow:{display:"flex",gap:8,alignItems:"flex-end"},dateTimeGroup:{display:"flex",flexDirection:"column",gap:3,flex:1},dtLabel:{fontSize:10,fontWeight:600,color:"var(--text-3)",letterSpacing:"0.08em",textTransform:"uppercase"},dtInput:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},dtEndValue:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,color:"var(--text-2)",background:"var(--bg)"},addRow:{display:"flex",alignItems:"center",gap:6},input:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",flex:1,minWidth:0},select:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 8px",fontSize:12.5,fontFamily:"inherit",flex:1},minLabel:{fontSize:11,color:"var(--text-3)"},gcalHint:{color:"#3A7CA5",display:"grid",placeItems:"center"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"}},ce={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},mn=Object.keys(ce),ai=["Yearly","Quarterly","Monthly","Weekly"],$e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Dd=[{label:"Q1 · Jan–Mar",startMonth:0},{label:"Q2 · Apr–Jun",startMonth:3},{label:"Q3 · Jul–Sep",startMonth:6},{label:"Q4 · Oct–Dec",startMonth:9}],fr=new Date().getFullYear(),di=t=>ai[Math.min(ai.indexOf(t)+1,ai.length-1)],zo=t=>{if(!t||!t.start_date)return Array.from({length:12},(i,l)=>l);const e=new Date(t.start_date+"T00:00:00"),r=new Date(t.end_date+"T00:00:00"),n=e.getFullYear()<fr?0:e.getMonth(),s=r.getFullYear()>fr?11:r.getMonth();return Array.from({length:s-n+1},(i,l)=>n+l)},Nm=(t,e,r)=>{const n=(r-1)*7+1,s=Math.min(n+6,new Date(t,e+1,0).getDate()),i=String(e+1).padStart(2,"0");return{start_date:`${t}-${i}-${String(n).padStart(2,"0")}`,end_date:`${t}-${i}-${String(s).padStart(2,"0")}`}},Rd=(t,e,r=1)=>{const n=fr;switch(t){case"Yearly":return{start_date:`${n}-01-01`,end_date:`${n}-12-31`};case"Quarterly":{const s=Math.floor(e/3)*3,i=s+1,l=s+3,a=new Date(n,l,0).getDate();return{start_date:`${n}-${String(i).padStart(2,"0")}-01`,end_date:`${n}-${String(l).padStart(2,"0")}-${a}`}}case"Monthly":{const s=new Date(n,e+1,0).getDate();return{start_date:`${n}-${String(e+1).padStart(2,"0")}-01`,end_date:`${n}-${String(e+1).padStart(2,"0")}-${s}`}}case"Weekly":return Nm(n,e,r);default:return{start_date:`${n}-01-01`,end_date:`${n}-12-31`}}},Md=(t,e=!1)=>{if(!t)return 0;const r=new Date(t+"T00:00:00");if(r.getFullYear()>fr)return 12;if(r.getFullYear()<fr)return 0;const n=new Date(fr,r.getMonth()+1,0).getDate(),s=r.getDate()-(e?0:1);return r.getMonth()+s/n},_d=t=>{if(!t.start_date)return"";const e=new Date(t.start_date+"T00:00:00"),r=e.getMonth();switch(t.horizon){case"Yearly":return`${e.getFullYear()}`;case"Quarterly":return`Q${Math.floor(r/3)+1} ${e.getFullYear()}`;case"Monthly":return`${$e[r]} ${e.getFullYear()}`;case"Weekly":return`${$e[r]} W${Math.ceil(e.getDate()/7)}`;default:return""}};function Pm(){const[t,e]=k.useState([]),[r,n]=k.useState("Financial"),[s,i]=k.useState(["Academic"]),[l,a]=k.useState({}),[d,g]=k.useState(null),[m,v]=k.useState(""),[p,j]=k.useState(0),[S,w]=k.useState(1),[I,b]=k.useState(null),c=k.useCallback(()=>{H.getGoals().then(e).catch(console.error)},[]);k.useEffect(()=>{c()},[c]);const{deleteItem:u,toasts:x,handleUndo:h,handleDismiss:C}=oo(H.deleteGoal,H.restoreGoal,c),R=ce[r],B=t.filter(y=>y.pillar===r),M=B.filter(y=>!y.parent_goal_id),_=y=>B.filter(T=>T.parent_goal_id===y),et=y=>a(T=>({...T,[y]:!T[y]})),rt=y=>i(T=>T.includes(y)?T.filter(L=>L!==y):[...T,y]),Z=(y,T=null)=>{g(y),v(""),w(1);const L=y==="ROOT"?"Yearly":di(T==null?void 0:T.horizon),E=y==="ROOT"?[0]:zo(T);j(L==="Quarterly"?Math.floor(E[0]/3)*3:E[0]??0)},dt=async(y,T)=>{if(!m.trim())return;const L=y==="ROOT"?"Yearly":di(T),{start_date:E,end_date:P}=Rd(L,p,S);await H.createGoal({pillar:r,title:m.trim(),horizon:L,parent_goal_id:y==="ROOT"?null:y,start_date:E,end_date:P}),y!=="ROOT"&&a(at=>({...at,[y]:!0})),g(null),v(""),c()},G=y=>{const T=y.start_date?new Date(y.start_date+"T00:00:00"):new Date,L=T.getMonth(),E=Math.min(Math.max(Math.ceil(T.getDate()/7),1),4);b({id:y.id,title:y.title,pillar:y.pillar,horizon:y.horizon,parentGoal:t.find(P=>P.id===y.parent_goal_id)||null,month:y.horizon==="Quarterly"?Math.floor(L/3)*3:L,week:E})},N=async()=>{if(!I||!I.title.trim())return;let y=I.month;I.horizon==="Weekly"&&(y=zo(I.parentGoal)[0]);const{start_date:T,end_date:L}=Rd(I.horizon,y,I.week);await H.updateGoal(I.id,{title:I.title.trim(),pillar:I.pillar,start_date:T,end_date:L}),b(null),c()},z=({parentId:y,parentGoal:T,depth:L})=>{const E=(T==null?void 0:T.horizon)??null,P=y==="ROOT"?"Yearly":di(E),at=y==="ROOT"?Array.from({length:12},(q,pt)=>pt):zo(T),ot=Dd.filter(q=>at.includes(q.startMonth));return o.jsxs("div",{style:{...Q.addBox,marginLeft:L*24},children:[o.jsx("input",{autoFocus:!0,placeholder:`New ${P.toLowerCase()} goal…`,value:m,onChange:q=>v(q.target.value),onKeyDown:q=>{q.key==="Enter"&&dt(y,E),q.key==="Escape"&&g(null)},style:Q.input}),P==="Quarterly"&&o.jsx("select",{value:p,onChange:q=>j(Number(q.target.value)),style:Q.monthSelect,children:ot.map(q=>o.jsx("option",{value:q.startMonth,children:q.label},q.startMonth))}),P==="Monthly"&&o.jsx("select",{value:p,onChange:q=>j(Number(q.target.value)),style:Q.monthSelect,children:at.map(q=>o.jsx("option",{value:q,children:$e[q]},q))}),P==="Weekly"&&o.jsxs(o.Fragment,{children:[o.jsx("span",{style:Q.inheritTag,children:$e[at[0]]}),o.jsx("select",{value:S,onChange:q=>w(Number(q.target.value)),style:Q.monthSelect,children:[1,2,3,4].map(q=>o.jsxs("option",{value:q,children:["Week ",q]},q))})]}),o.jsx("button",{onClick:()=>dt(y,E),style:Q.saveBtn,children:o.jsx(wt,{size:14})}),o.jsx("button",{onClick:()=>g(null),style:Q.cancelBtn,children:o.jsx(bt,{size:14})})]})},f=({goal:y,depth:T})=>{var ot,q;const L=_(y.id),E=l[y.id],P=y.horizon!=="Weekly";if((I==null?void 0:I.id)===y.id){const pt=zo(I.parentGoal),Ce=Dd.filter(it=>pt.includes(it.startMonth));return o.jsxs("div",{style:{...Q.editBox,marginLeft:T*24},children:[o.jsx("input",{autoFocus:!0,value:I.title,onChange:it=>b({...I,title:it.target.value}),onKeyDown:it=>it.key==="Enter"&&N(),style:{...Q.input,flex:1}}),o.jsx("select",{value:I.pillar,onChange:it=>b({...I,pillar:it.target.value}),style:Q.monthSelect,children:mn.map(it=>o.jsx("option",{children:it},it))}),I.horizon==="Quarterly"&&o.jsx("select",{value:I.month,onChange:it=>b({...I,month:Number(it.target.value)}),style:Q.monthSelect,children:Ce.map(it=>o.jsx("option",{value:it.startMonth,children:it.label},it.startMonth))}),I.horizon==="Monthly"&&o.jsx("select",{value:I.month,onChange:it=>b({...I,month:Number(it.target.value)}),style:Q.monthSelect,children:pt.map(it=>o.jsx("option",{value:it,children:$e[it]},it))}),I.horizon==="Weekly"&&o.jsxs(o.Fragment,{children:[o.jsx("span",{style:Q.inheritTag,children:$e[pt[0]]}),o.jsx("select",{value:I.week,onChange:it=>b({...I,week:Number(it.target.value)}),style:Q.monthSelect,children:[1,2,3,4].map(it=>o.jsxs("option",{value:it,children:["Week ",it]},it))})]}),o.jsx("button",{onClick:N,style:Q.saveBtn,children:o.jsx(wt,{size:14})}),o.jsx("button",{onClick:()=>b(null),style:Q.cancelBtn,children:o.jsx(bt,{size:14})})]})}return o.jsxs("div",{children:[o.jsxs("div",{style:{...Q.row,marginLeft:T*24,background:T===0?R.soft:"transparent"},children:[L.length>0?o.jsx("button",{onClick:()=>et(y.id),style:Q.caret,children:E?o.jsx(ba,{size:15}):o.jsx(on,{size:15})}):o.jsx("span",{style:{...Q.caret,opacity:.25},children:o.jsx(ma,{size:12})}),o.jsx("span",{style:{...Q.horizonTag,color:((ot=ce[y.pillar])==null?void 0:ot.dot)||R.dot,borderColor:((q=ce[y.pillar])==null?void 0:q.dot)||R.dot},children:y.horizon}),o.jsx("span",{style:Q.title,children:y.title}),o.jsx("span",{style:Q.periodTag,children:_d(y)}),o.jsx("button",{onClick:()=>G(y),style:Q.rowAdd,title:"Edit",children:o.jsx(wr,{size:12})}),P&&o.jsx("button",{onClick:()=>{a(pt=>({...pt,[y.id]:!0})),Z(y.id,y)},style:Q.rowAdd,title:"Add sub-goal",children:o.jsx(_e,{size:13})}),o.jsx("button",{onClick:()=>u(y.id,y.title),style:{...Q.rowAdd,color:"var(--text-3)"},title:"Delete",children:o.jsx(bt,{size:13})})]}),E&&L.map(pt=>o.jsx(f,{goal:pt,depth:T+1},pt.id)),E&&d===y.id&&o.jsx(z,{parentId:y.id,parentGoal:y,depth:T+1})]})},F=t.filter(y=>y.horizon==="Weekly"&&s.includes(y.pillar)).sort((y,T)=>y.pillar.localeCompare(T.pillar)||y.start_date.localeCompare(T.start_date));return o.jsxs("div",{style:Q.page,children:[o.jsxs("div",{style:Q.head,children:[o.jsx("div",{style:Q.eyebrow,children:"Anvil · Goals"}),o.jsxs("h1",{style:Q.h1,children:[r," Goals"]})]}),o.jsx("div",{style:Q.pillarPicker,children:mn.map(y=>{const T=y===r;return o.jsxs("button",{onClick:()=>{n(y),g(null),b(null)},style:{...Q.pillarChip,...T?{background:ce[y].dot,color:"#fff",borderColor:ce[y].dot}:{}},children:[o.jsx("span",{style:{...Q.dot,background:T?"#fff":ce[y].dot}}),y]},y)})}),o.jsxs("div",{style:Q.list,children:[M.map(y=>o.jsx(f,{goal:y,depth:0},y.id)),d==="ROOT"&&o.jsx(z,{parentId:"ROOT",parentGoal:null,depth:0}),d!=="ROOT"&&o.jsxs("button",{onClick:()=>Z("ROOT",null),style:Q.rootAdd,children:[o.jsx(_e,{size:14})," Add top-level goal"]})]}),o.jsxs("div",{style:Q.ganttWrap,children:[o.jsxs("div",{style:Q.ganttTop,children:[o.jsxs("div",{style:Q.ganttTitle,children:[fr," · Weekly Timeline"]}),o.jsxs("div",{style:Q.ganttMultiSelect,children:[(()=>{const y=mn.every(T=>s.includes(T));return o.jsx("button",{onClick:()=>i(y?[]:[...mn]),style:{...Q.msChip,...y?{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:"All"})})(),mn.map(y=>{const T=s.includes(y);return o.jsxs("button",{onClick:()=>rt(y),style:{...Q.msChip,...T?{background:ce[y].dot,color:"#fff",borderColor:ce[y].dot}:{}},children:[o.jsx("span",{style:{...Q.dot,width:7,height:7,background:T?"#fff":ce[y].dot}}),y]},y)})]})]}),F.length===0?o.jsx("div",{style:Q.ganttEmpty,children:"Select pillars above to see their weekly goals on the timeline."}):o.jsx("div",{style:Q.ganttScroll,children:o.jsxs("div",{style:Q.ganttInner,children:[o.jsxs("div",{style:Q.ganttHeader,children:[o.jsx("div",{style:Q.ganttLabelCol}),o.jsx("div",{style:Q.ganttGrid,children:$e.map(y=>o.jsx("div",{style:Q.ganttMonth,children:y},y))})]}),F.map(y=>{const T=ce[y.pillar].dot,L=Md(y.start_date,!1),E=Md(y.end_date,!0),P=L/12*100,at=Math.max((E-L)/12*100,1.5);return o.jsxs("div",{style:Q.ganttRow,children:[o.jsxs("div",{style:{...Q.ganttLabelCol,paddingLeft:8},children:[o.jsx("span",{style:{...Q.ganttRowDot,background:T}}),o.jsx("span",{style:Q.ganttRowLabel,children:y.title})]}),o.jsxs("div",{style:Q.ganttGrid,children:[$e.map((ot,q)=>o.jsx("div",{style:Q.ganttCell},q)),o.jsx("div",{style:{...Q.ganttBar,left:`${P}%`,width:`${at}%`,background:T},title:`${y.pillar} · ${_d(y)}`})]})]},y.id)})]})})]}),o.jsx(so,{toasts:x,onUndo:h,onDismiss:C})]})}const Q={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},pillarPicker:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},pillarChip:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},list:{background:"var(--surface)",borderRadius:12,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"hidden"},row:{display:"flex",alignItems:"center",gap:9,padding:"9px 10px",borderRadius:8,flexWrap:"nowrap"},caret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},horizonTag:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",border:"1px solid",borderRadius:5,padding:"2px 6px",flexShrink:0},title:{fontSize:14,fontWeight:500,lineHeight:1.3,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},periodTag:{fontSize:11,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"3px 8px",borderRadius:12,flexShrink:0},rowAdd:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,flexShrink:0},rootAdd:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"var(--text-2)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"9px 12px",cursor:"pointer",fontWeight:600,fontFamily:"inherit",marginTop:6,width:"100%",justifyContent:"center"},addBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 0 6px 28px",flexWrap:"wrap"},editBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 10px",flexWrap:"wrap",background:"var(--bg)",borderRadius:8,margin:"4px 0"},input:{border:"1px solid var(--border)",borderRadius:7,padding:"8px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",flex:1,minWidth:120},monthSelect:{border:"1px solid var(--border)",borderRadius:7,padding:"8px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},inheritTag:{fontSize:11.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"6px 9px",borderRadius:7,flexShrink:0},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},ganttWrap:{background:"var(--surface)",borderRadius:12,padding:"16px 14px",marginTop:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},ganttTop:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10,marginBottom:14},ganttTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",fontFamily:"'Fraunces',Georgia,serif"},ganttMultiSelect:{display:"flex",gap:6,flexWrap:"wrap"},msChip:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"5px 10px",borderRadius:16,fontSize:11.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},ganttEmpty:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},ganttScroll:{overflowX:"auto"},ganttInner:{minWidth:500},ganttHeader:{display:"flex",marginBottom:6},ganttLabelCol:{width:160,flexShrink:0,display:"flex",alignItems:"center",gap:7,minWidth:0},ganttGrid:{position:"relative",flex:1,display:"grid",gridTemplateColumns:"repeat(12,1fr)"},ganttMonth:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase",letterSpacing:"0.04em"},ganttRow:{display:"flex",alignItems:"center",height:30},ganttRowDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},ganttRowLabel:{fontSize:12,fontWeight:500,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},ganttCell:{borderLeft:"1px solid #F0EEE8",height:30},ganttBar:{position:"absolute",top:7,height:16,borderRadius:5,boxShadow:"0 1px 2px rgba(0,0,0,0.12)"}},Sr={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.12)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.12)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.12)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.12)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.12)"}},ku=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Om=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ha=t=>t.toISOString().slice(0,10),$m=()=>ha(new Date),Hm=(t=0)=>{const e=new Date,r=e.getDay(),n=r===0?-6:1-r,s=new Date(e);return s.setDate(e.getDate()+n+t*7),Array.from({length:7},(i,l)=>{const a=new Date(s);return a.setDate(s.getDate()+l),ha(a)})},Um=(t=0)=>{const e=new Date,r=new Date(e.getFullYear(),e.getMonth()+t,1),n=r.getFullYear(),s=r.getMonth(),i=new Date(n,s+1,0).getDate(),l=r.getDay(),a=l===0?6:l-1,d=Array.from({length:i},(m,v)=>`${n}-${String(s+1).padStart(2,"0")}-${String(v+1).padStart(2,"0")}`),g=r.toLocaleDateString("en-US",{month:"long",year:"numeric"});return{dates:d,startOffset:a,label:g,year:n,month:s}},Wd=t=>new Date(t+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"}),ar=$m(),Gm=new Date().getFullYear();function Vm(){var T,L;const[t,e]=k.useState([]),[r,n]=k.useState("ALL"),[s,i]=k.useState(!1),[l,a]=k.useState(!1),[d,g]=k.useState(!1),[m,v]=k.useState(null),[p,j]=k.useState(null),[S,w]=k.useState({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week"}),[I,b]=k.useState(!1),[c,u]=k.useState([]),x=k.useCallback(()=>H.getHabits().then(e).catch(console.error),[]);k.useEffect(()=>{x()},[x]),k.useEffect(()=>{H.getSetting("habit_order").then(E=>{Array.isArray(E==null?void 0:E.value)&&u(E.value)}).catch(()=>{})},[]);const h=k.useMemo(()=>c.length?[...t].sort((E,P)=>{const at=c.indexOf(E.id),ot=c.indexOf(P.id);return at===-1&&ot===-1?0:at===-1?1:ot===-1?-1:at-ot}):t,[t,c]),C=async E=>{u(E),await H.setSetting("habit_order",E),b(!1)};k.useEffect(()=>{const E=()=>{const P=window.innerWidth<720;i(P),P||a(!1)};return E(),window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)},[]);const{deleteItem:R,toasts:B,handleUndo:M,handleDismiss:_}=oo(H.deleteHabit,H.restoreHabit,x),et=E=>{n(E),s&&a(!1)},rt=(E,P)=>{(E.type==="minimum"||E.type==="maximum")&&E.period==="day"?j({habit:E,date:P}):Z(E.id,P)},Z=async(E,P)=>{await H.toggleHabitLog(E,P),x()},dt=async(E,P,at,ot)=>{await H.setHabitLogCount(E,P,at,ot),j(null),x()},G=async(E,P)=>{await H.clearHabitLog(E,P),j(null),x()},N=async()=>{if(!S.name.trim())return;const E={name:S.name.trim(),pillar:S.pillar,target_per_week:Number(S.target_per_week)||7,type:S.type,target_count:S.type!=="regular"?Number(S.target_count)||1:null,period:S.type!=="regular"?S.period:null};await H.createHabit(E),w({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week"}),g(!1),x()},z=async(E,P)=>{r===E&&n("ALL"),R(E,P)},f=t.find(E=>E.id===r),F=E=>new Set(E.logs||[]),y={...A.sidebar,...s?A.sidebarOverlay:{},...s&&!l?A.sidebarHidden:{}};return o.jsxs("div",{style:A.shell,children:[s&&l&&o.jsx("div",{style:A.backdrop,onClick:()=>a(!1)}),o.jsxs("aside",{style:y,children:[o.jsxs("div",{style:A.sideTop,children:[o.jsx("div",{style:A.brand,children:"Anvil · Habits"}),s&&o.jsx("button",{onClick:()=>a(!1),style:A.closeBtn,children:o.jsx(bt,{size:18})})]}),o.jsxs("div",{style:{...A.sideItem,...r==="ALL"?A.sideItemOn:{},cursor:"default",padding:"2px 6px 2px 10px"},children:[o.jsxs("button",{onClick:()=>et("ALL"),style:{display:"flex",alignItems:"center",gap:9,flex:1,border:"none",background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:r==="ALL"?600:500,color:"var(--text-2)",padding:"7px 0"},children:[o.jsx(fu,{size:15}),o.jsx("span",{style:A.sideLabel,children:"All Habits"}),o.jsx("span",{style:A.sideCount,children:t.length})]}),o.jsx("button",{onClick:E=>{E.stopPropagation(),b(!0)},style:A.tinyBtn,title:"Reorder habits",children:o.jsx(wr,{size:12})})]}),o.jsx("div",{style:A.sideDivider}),h.map(E=>{var ot;const P=r===E.id,at=((ot=Sr[E.pillar])==null?void 0:ot.dot)||"#9A968C";return o.jsxs("button",{onClick:()=>et(E.id),style:{...A.sideItem,...P?A.sideItemOn:{}},children:[o.jsx("span",{style:{...A.sideDot,background:at}}),o.jsx("span",{style:A.sideLabel,children:E.name}),o.jsxs("span",{style:A.sideStreak,children:[o.jsx(Rs,{size:11})," ",E.streak]})]},E.id)}),d?o.jsx(Ym,{habit:S,onChange:w,onSave:N,onCancel:()=>g(!1)}):o.jsxs("button",{onClick:()=>g(!0),style:A.sideNewBtn,children:[o.jsx(_e,{size:13})," New habit"]})]}),o.jsxs("main",{style:A.main,children:[s&&o.jsxs("button",{onClick:()=>a(!0),style:A.hamburger,children:[o.jsx(pa,{size:18}),o.jsx("span",{style:A.hamburgerLabel,children:r==="ALL"?"All Habits":f==null?void 0:f.name})]}),r==="ALL"?o.jsx(Xm,{habits:h,dayAction:rt,logSet:F,onDelete:z,onEdit:E=>v(E)}):o.jsx(Jm,{habit:f,dayAction:rt,logSet:F,onDelete:()=>z(f.id,f.name),onEdit:()=>v(f),setNote:(E,P)=>H.setHabitLogNote(f.id,E,P).then(x)}),r==="ALL"&&o.jsx(tf,{year:Gm})]}),I&&o.jsx(qm,{habits:h,onSave:C,onClose:()=>b(!1)}),m&&o.jsx(Qm,{habit:m,onSave:async E=>{await H.updateHabit(m.id,E),v(null),x()},onClose:()=>v(null)}),p&&o.jsx(Km,{habit:p.habit,date:p.date,initialCount:((T=p.habit.log_counts)==null?void 0:T[p.date])??0,initialNote:((L=p.habit.log_notes)==null?void 0:L[p.date])??"",onSave:(E,P)=>dt(p.habit.id,p.date,E,P),onClear:()=>G(p.habit.id,p.date),onClose:()=>j(null)}),o.jsx(so,{toasts:B,onUndo:M,onDismiss:_})]})}function Ym({habit:t,onChange:e,onSave:r,onCancel:n}){const s=t.type!=="regular";return o.jsxs("div",{style:A.addBox,children:[o.jsx("input",{autoFocus:!0,placeholder:"Habit name",value:t.name,onChange:i=>e(l=>({...l,name:i.target.value})),onKeyDown:i=>i.key==="Enter"&&r(),style:A.sideInput}),o.jsx("select",{value:t.pillar,onChange:i=>e(l=>({...l,pillar:i.target.value})),style:A.sideInput,children:Object.keys(Sr).map(i=>o.jsx("option",{children:i},i))}),o.jsxs("select",{value:t.type,onChange:i=>e(l=>({...l,type:i.target.value})),style:A.sideInput,children:[o.jsx("option",{value:"regular",children:"Regular (yes/no)"}),o.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),o.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),s&&o.jsxs("div",{style:{display:"flex",gap:6},children:[o.jsx("input",{type:"number",min:1,placeholder:"N",value:t.target_count||"",onChange:i=>e(l=>({...l,target_count:i.target.value})),style:{...A.sideInput,width:60}}),o.jsx("select",{value:t.period,onChange:i=>e(l=>({...l,period:i.target.value})),style:A.sideInput,children:["day","week","month","year"].map(i=>o.jsx("option",{children:i},i))})]}),o.jsxs("div",{style:{display:"flex",gap:6},children:[o.jsx("button",{onClick:r,style:A.sideAddBtn,children:o.jsx(wt,{size:13})}),o.jsx("button",{onClick:n,style:A.sideCancelBtn,children:o.jsx(bt,{size:13})})]})]})}function Qm({habit:t,onSave:e,onClose:r}){const[n,s]=k.useState(t.name),[i,l]=k.useState(t.type||"regular"),[a,d]=k.useState(t.target_count||""),[g,m]=k.useState(t.period||"week"),[v,p]=k.useState(t.reminder_time||""),j=()=>e({name:n.trim(),type:i,target_count:i!=="regular"?Number(a):null,period:i!=="regular"?g:null,reminder_time:v||null});return o.jsx("div",{style:A.modalOverlay,onClick:r,children:o.jsxs("div",{style:A.modal,onClick:S=>S.stopPropagation(),children:[o.jsxs("div",{style:A.modalHead,children:["Edit Habit",o.jsx("button",{onClick:r,style:A.closeBtn,children:o.jsx(bt,{size:16})})]}),o.jsx("label",{style:A.modalLabel,children:"Name"}),o.jsx("input",{value:n,onChange:S=>s(S.target.value),style:A.sideInput}),o.jsx("label",{style:A.modalLabel,children:"Type"}),o.jsxs("select",{value:i,onChange:S=>l(S.target.value),style:A.sideInput,children:[o.jsx("option",{value:"regular",children:"Regular (yes/no)"}),o.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),o.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),i!=="regular"&&o.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[o.jsx("input",{type:"number",min:1,value:a,onChange:S=>d(S.target.value),style:{...A.sideInput,width:70}}),o.jsx("select",{value:g,onChange:S=>m(S.target.value),style:A.sideInput,children:["day","week","month","year"].map(S=>o.jsx("option",{children:S},S))})]}),o.jsx("label",{style:A.modalLabel,children:"Reminder time"}),o.jsx("input",{type:"time",value:v,onChange:S=>p(S.target.value),style:A.sideInput}),o.jsx("button",{onClick:j,style:{...A.sideAddBtn,width:"100%",marginTop:10,height:36},children:"Save"})]})})}function Km({habit:t,date:e,initialCount:r,initialNote:n,onSave:s,onClear:i,onClose:l}){const[a,d]=k.useState(r??0),[g,m]=k.useState(n??""),v=t.target_count,p=t.type==="minimum"?a>=v:a>0&&a<=v,j=t.type==="maximum"&&a>v,S=p?"#4C9A6B":j?"#C2536B":"#C2773B",w=p?"✓ Goal met":j?"Over the limit":"Not met yet";return o.jsx("div",{style:A.modalOverlay,onClick:l,children:o.jsxs("div",{style:A.modal,onClick:I=>I.stopPropagation(),children:[o.jsxs("div",{style:A.modalHead,children:[t.name,o.jsx("button",{onClick:l,style:A.closeBtn,children:o.jsx(bt,{size:16})})]}),o.jsxs("div",{style:{fontSize:12,color:"var(--text-3)",marginBottom:2},children:[e," · ",t.type==="minimum"?`at least ${v}`:`no more than ${v}`," / ",t.period]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:20,margin:"14px 0 6px"},children:[o.jsx("button",{onClick:()=>d(I=>Math.max(0,I-1)),style:A.counterBtn,children:"−"}),o.jsx("span",{style:{fontSize:38,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:52,textAlign:"center",color:S},children:a}),o.jsx("button",{onClick:()=>d(I=>I+1),style:A.counterBtn,children:"+"})]}),o.jsx("div",{style:{textAlign:"center",fontSize:12.5,fontWeight:700,color:S,marginBottom:12},children:w}),o.jsx("textarea",{value:g,onChange:I=>m(I.target.value),placeholder:"Add a comment (optional)…",style:{...A.sideInput,minHeight:56,resize:"vertical"}}),o.jsxs("div",{style:{display:"flex",gap:8,marginTop:10},children:[o.jsxs("button",{onClick:i,style:{...A.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[o.jsx(bt,{size:14})," Delete"]}),o.jsxs("button",{onClick:()=>s(a,g),style:{...A.sideAddBtn,flex:1,justifyContent:"center",height:38},children:[o.jsx(wt,{size:14})," Set"]})]})]})})}function Xm({habits:t,dayAction:e,logSet:r,onDelete:n,onEdit:s}){const[i,l]=k.useState(0),a=Hm(i),d=`${Wd(a[0])} – ${Wd(a[6])}${i===0?" · This week":""}`;return o.jsxs("div",{children:[o.jsxs("div",{style:A.mainHead,children:[o.jsx("div",{style:A.eyebrow,children:"Weekly view"}),o.jsx("h1",{style:A.h1,children:"All Habits"})]}),o.jsxs("div",{style:A.navBar,children:[o.jsx("button",{onClick:()=>l(g=>g-1),style:A.navBtn,children:o.jsx(no,{size:16})}),o.jsx("span",{style:A.navLabel,children:d}),o.jsx("button",{onClick:()=>l(g=>Math.min(0,g+1)),disabled:i>=0,style:{...A.navBtn,...i>=0?A.navBtnDisabled:{}},children:o.jsx(on,{size:16})})]}),o.jsxs("div",{style:A.weekCard,children:[o.jsxs("div",{style:A.weekHeadRow,children:[o.jsx("div",{style:A.weekNameCol}),ku.map((g,m)=>o.jsxs("div",{style:A.weekDayHead,children:[o.jsx("span",{style:A.weekDayName,children:g}),o.jsx("span",{style:{...A.weekDayNum,...a[m]===ar?A.weekDayToday:{}},children:new Date(a[m]+"T00:00").getDate()})]},g)),o.jsx("div",{style:A.weekStreakCol,children:"Streak"})]}),t.map(g=>{var C,R;const m=((C=Sr[g.pillar])==null?void 0:C.dot)||"#9A968C",v=((R=Sr[g.pillar])==null?void 0:R.soft)||"rgba(0,0,0,0.05)",p=r(g),j=g.type==="minimum"&&["week","month","year"].includes(g.period),S=g.target_count||0,w=g.logs||[],I=B=>w.filter(M=>M.slice(0,7)===B).length,b=B=>w.filter(M=>M.slice(0,4)===B).length,c=a.filter(B=>p.has(B)).length,u=B=>j?g.period==="week"?c>=S:g.period==="month"?I(B.slice(0,7))>=S:g.period==="year"?b(B.slice(0,4))>=S:!1:!1,x=j&&a.some(u),h=g.period==="week"?c:g.period==="month"?I(a[0].slice(0,7)):g.period==="year"?b(a[0].slice(0,4)):0;return o.jsxs("div",{style:A.weekRow,children:[o.jsxs("div",{style:{...A.weekNameCol,flexDirection:"column",alignItems:"flex-start",gap:2},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[o.jsx("span",{style:{...A.sideDot,background:m}}),o.jsx("span",{style:A.weekHabitName,children:g.name})]}),o.jsxs("div",{style:{display:"flex",gap:4,paddingLeft:15},children:[o.jsx("button",{onClick:()=>s(g),style:A.tinyBtn,title:"Edit",children:o.jsx(wr,{size:10})}),o.jsx("button",{onClick:()=>n(g.id,g.name),style:A.tinyBtn,title:"Delete",children:o.jsx(bt,{size:10})})]}),g.type!=="regular"&&o.jsx("span",{style:A.typeBadge,children:g.type==="minimum"?`≥${g.target_count}/${g.period}`:`≤${g.target_count}/${g.period}`})]}),a.map((B,M)=>{var y,T;const _=p.has(B),et=B>ar,rt=(g.type==="minimum"||g.type==="maximum")&&g.period==="day",Z=(y=g.log_counts)==null?void 0:y[B],dt=Z!=null,G=!!((T=g.log_notes)!=null&&T[B]),N=u(B),z=M>0&&u(a[M-1]),f=M<a.length-1&&u(a[M+1]),F=_||N;return o.jsxs("div",{style:{...A.weekCell,position:"relative"},children:[N&&o.jsx("span",{style:{...A.chainLine,background:m,left:z?0:"50%",right:f?0:"50%"}}),o.jsx("button",{disabled:et,onClick:()=>e(g,B),style:{...A.tick,position:"relative",zIndex:1,...F?{background:m,borderColor:m,color:"#fff"}:{},...rt&&dt&&!_?{borderColor:m,color:m}:{},...et&&!F?A.tickFuture:{}},children:rt?dt?o.jsx("span",{style:{fontSize:12,fontWeight:700},children:Z}):null:_&&o.jsx(wt,{size:14,color:"#fff",strokeWidth:3})}),G&&o.jsx("span",{style:A.cellNoteBubble})]},B)}),o.jsx("div",{style:A.weekStreakCol,children:x?o.jsxs("span",{style:{...A.streakPill,background:v,color:m},children:[o.jsx(ul,{size:12})," ",h,"/",S]}):o.jsxs("span",{style:{...A.streakPill,background:v,color:m},children:[o.jsx(Rs,{size:12})," ",g.streak]})})]},g.id)}),t.length===0&&o.jsx("div",{style:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},children:"No habits yet — add one from the sidebar."})]})]})}function Jm({habit:t,dayAction:e,logSet:r,onDelete:n,onEdit:s,setNote:i}){var T,L;const[l,a]=k.useState(null),[d,g]=k.useState(""),[m,v]=k.useState(null),[p,j]=k.useState(0),S=k.useRef(null);if(!t)return null;const w=((T=Sr[t.pillar])==null?void 0:T.dot)||"#9A968C",I=((L=Sr[t.pillar])==null?void 0:L.soft)||"rgba(0,0,0,0.05)",b=r(t),{dates:c,startOffset:u,label:x,year:h}=Um(p),C=c.filter(E=>E<=ar&&b.has(E)).length,R=c.filter(E=>E<=ar).length,B=R>0?Math.round(C/R*100):0,M=t.type==="minimum"&&(t.period==="month"||t.period==="year"),_=t.period==="year"?(t.logs||[]).filter(E=>E.startsWith(`${h}-`)).length:c.filter(E=>b.has(E)).length,et=M&&_>=(t.target_count||0),rt=t.type==="minimum"&&t.period==="week",Z=t.target_count||0,dt=E=>{const P=new Date(E+"T00:00"),at=P.getDay(),ot=new Date(P);ot.setDate(P.getDate()+(at===0?-6:1-at));let q=0;for(let pt=0;pt<7;pt++){const Ce=new Date(ot);Ce.setDate(ot.getDate()+pt),b.has(ha(Ce))&&q++}return q},G=E=>M?et:rt?dt(E)>=Z:!1,N=rt?dt(ar):0,z=rt&&N>=Z,f=E=>{S.current=setTimeout(()=>a(E),500)},F=()=>clearTimeout(S.current),y=E=>{var P;v(E),g(((P=t.log_notes)==null?void 0:P[E])||""),a(null)};return o.jsxs("div",{children:[o.jsxs("div",{style:A.mainHead,children:[o.jsxs("div",{children:[o.jsxs("div",{style:A.eyebrow,children:[o.jsx("span",{style:{...A.sideDot,background:w,marginRight:6}}),t.pillar," · Monthly view"]}),o.jsx("h1",{style:A.h1,children:t.name})]}),o.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[o.jsxs("button",{onClick:s,style:A.actionBtn,children:[o.jsx(wr,{size:14})," Edit"]}),o.jsxs("button",{onClick:n,style:{...A.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[o.jsx(bt,{size:14})," Delete"]}),t.reminder_time&&o.jsxs("button",{style:A.actionBtn,children:[o.jsx(uu,{size:14})," ",t.reminder_time]})]})]}),o.jsxs("div",{style:A.statStrip,children:[o.jsx(fn,{label:"Current streak",value:`${t.streak} days`,c:w,soft:I,flame:!0}),o.jsx(fn,{label:"Done this month",value:`${C}/${R}`,c:w,soft:I}),o.jsx(fn,{label:"Completion",value:`${B}%`,c:w,soft:I}),t.type==="regular"?o.jsx(fn,{label:"Weekly target",value:`${t.target_per_week}×`,c:w,soft:I}):o.jsx(fn,{label:t.type==="minimum"?"Min target":"Max allowed",value:`${t.target_count}/${t.period}`,c:w,soft:I})]}),o.jsxs("div",{style:A.navBar,children:[o.jsx("button",{onClick:()=>j(E=>E-1),style:A.navBtn,children:o.jsx(no,{size:16})}),o.jsxs("span",{style:A.navLabel,children:[x,p===0?" · This month":""]}),o.jsx("button",{onClick:()=>j(E=>Math.min(0,E+1)),disabled:p>=0,style:{...A.navBtn,...p>=0?A.navBtnDisabled:{}},children:o.jsx(on,{size:16})})]}),M&&o.jsxs("div",{style:{...A.chainBanner,background:et?I:"var(--bg)",color:et?w:"var(--text-3)"},children:[o.jsx(ul,{size:15}),et?`${t.period==="year"?"Yearly":"Monthly"} chain complete — ${_}/${t.target_count} connected`:`${_}/${t.target_count} this ${t.period} · ${(t.target_count||0)-_} more to connect the chain`]}),rt&&p===0&&o.jsxs("div",{style:{...A.chainBanner,background:z?I:"var(--bg)",color:z?w:"var(--text-3)"},children:[o.jsx(ul,{size:15}),z?`This week's chain complete — ${N}/${Z} connected`:`${N}/${Z} this week · ${Math.max(0,Z-N)} more to connect the chain`]}),o.jsxs("div",{style:A.monthCard,children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[o.jsx("div",{style:A.monthTitle,children:x}),o.jsx("span",{style:{fontSize:11,color:"var(--text-3)"},children:"Long-press a day for options"})]}),o.jsx("div",{style:A.monthDow,children:ku.map(E=>o.jsx("div",{style:A.monthDowCell,children:E},E))}),o.jsxs("div",{style:A.monthGrid,children:[Array.from({length:u}).map((E,P)=>o.jsx("div",{},`pad${P}`)),c.map((E,P)=>{var xa,ka;const at=P+1,ot=b.has(E),q=E>ar,pt=E===ar,Ce=!!((xa=t.log_notes)!=null&&xa[E]),it=(t.type==="minimum"||t.type==="maximum")&&t.period==="day",Ir=(ka=t.log_counts)==null?void 0:ka[E],sn=Ir!=null,Ct=G(E),de=ot||Ct,io=(u+P)%7;return o.jsxs("div",{style:{position:"relative"},children:[Ct&&o.jsx("span",{style:{...A.chainLine,background:w,...io===0?{left:"50%"}:{left:-6},...io===6?{right:"50%"}:{right:-6}}}),o.jsx("button",{disabled:q,onClick:()=>e(t,E),onMouseDown:()=>!it&&f(E),onMouseUp:F,onTouchStart:()=>!it&&f(E),onTouchEnd:F,style:{...A.monthDay,position:"relative",zIndex:1,...de?{background:w,borderColor:w,color:"#fff"}:{},...it&&sn&&!ot?{borderColor:w,color:w}:{},...q&&!de?A.monthDayFuture:{},...pt&&!de?{borderColor:w,borderWidth:2}:{},width:"100%"},children:at}),it&&sn&&o.jsx("span",{style:{...A.countBadge,background:ot?"#4C9A6B":w},children:Ir}),Ce&&o.jsx("span",{style:A.noteIndicator}),l===E&&o.jsx(Zm,{onEdit:s,onDelete:n,onAddNote:()=>y(E),onRemind:s,onClose:()=>a(null)})]},E)})]})]}),m&&o.jsxs("div",{style:A.noteBox,children:[o.jsxs("div",{style:{fontWeight:600,fontSize:13,marginBottom:6},children:["Note for ",m]}),o.jsx("textarea",{value:d,onChange:E=>g(E.target.value),placeholder:"Add a note for this day…",style:{...A.sideInput,minHeight:60,resize:"vertical"}}),o.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[o.jsxs("button",{onClick:()=>{i(m,d),v(null)},style:A.sideAddBtn,children:[o.jsx(wt,{size:13})," Save"]}),o.jsx("button",{onClick:()=>v(null),style:A.sideCancelBtn,children:o.jsx(bt,{size:13})})]})]})]})}function Zm({onEdit:t,onDelete:e,onAddNote:r,onRemind:n,onClose:s}){return o.jsxs("div",{style:A.longPressMenu,children:[o.jsxs("button",{style:A.menuItem,onClick:()=>{t(),s()},children:[o.jsx(wr,{size:13})," Edit"]}),o.jsxs("button",{style:A.menuItem,onClick:()=>{r(),s()},children:[o.jsx(pu,{size:13})," Add note"]}),o.jsxs("button",{style:A.menuItem,onClick:()=>{n(),s()},children:[o.jsx(uu,{size:13})," Remind"]}),o.jsxs("button",{style:{...A.menuItem,color:"#C2536B"},onClick:()=>{e(),s()},children:[o.jsx(bt,{size:13})," Delete"]})]})}function qm({habits:t,onSave:e,onClose:r}){const[n,s]=k.useState([...t]),i=(l,a)=>{const d=[...n],g=l+a;g<0||g>=d.length||([d[l],d[g]]=[d[g],d[l]],s(d))};return o.jsx("div",{style:A.modalOverlay,onClick:r,children:o.jsxs("div",{style:{...A.modal,maxHeight:"80vh",overflowY:"auto"},onClick:l=>l.stopPropagation(),children:[o.jsxs("div",{style:A.modalHead,children:["Reorder Habits",o.jsx("button",{onClick:r,style:A.closeBtn,children:o.jsx(bt,{size:16})})]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-3)",margin:"0 0 10px"},children:"Use arrows to set the display order."}),o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:n.map((l,a)=>{var g;const d=((g=Sr[l.pillar])==null?void 0:g.dot)||"#9A968C";return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"9px 10px",background:"var(--bg)",borderRadius:9,border:"1px solid var(--border)"},children:[o.jsx("span",{style:{...A.sideDot,background:d}}),o.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500},children:l.name}),o.jsx("button",{onClick:()=>i(a,-1),disabled:a===0,style:{...A.navBtn,width:28,height:28,opacity:a===0?.3:1,fontSize:14},children:"↑"}),o.jsx("button",{onClick:()=>i(a,1),disabled:a===n.length-1,style:{...A.navBtn,width:28,height:28,opacity:a===n.length-1?.3:1,fontSize:14},children:"↓"})]},l.id)})}),o.jsxs("button",{onClick:()=>e(n.map(l=>l.id)),style:{...A.sideAddBtn,width:"100%",marginTop:14,height:38,justifyContent:"center"},children:[o.jsx(wt,{size:14})," Save Order"]})]})})}function tf({year:t}){const[e,r]=k.useState([]);if(k.useEffect(()=>{H.getHabitsYearly(t).then(r).catch(console.error)},[t]),!e.length)return null;const n=Array.from({length:12},(i,l)=>{const a=e.reduce((g,m)=>{var v;return g+(((v=m.monthly[l+1])==null?void 0:v.done)||0)},0),d=e.reduce((g,m)=>{var v;return g+Math.floor((((v=m.monthly[l+1])==null?void 0:v.days)||30)/7*7)},0);return d>0?Math.round(a/d*100):0}),s=Math.max(...n,1);return o.jsxs("div",{style:{...A.monthCard,marginTop:18},children:[o.jsxs("div",{style:A.monthTitle,children:[t," Completion"]}),o.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:6,height:80,marginTop:12},children:n.map((i,l)=>o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[o.jsx("div",{style:{width:"100%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",height:`${i/s*60}px`,minHeight:2,opacity:i>0?1:.15},title:`${i}%`}),o.jsx("span",{style:{fontSize:9,color:"var(--text-3)",fontWeight:600},children:Om[l]})]},l))})]})}function fn({label:t,value:e,c:r,soft:n,flame:s}){return o.jsxs("div",{style:{...A.stat,background:n},children:[o.jsx("div",{style:A.statLabel,children:t}),o.jsxs("div",{style:{...A.statValue,color:r},children:[s&&o.jsx(Rs,{size:15})," ",e]})]})}const A={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:230,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",padding:"20px 12px",display:"flex",flexDirection:"column",gap:3,overflowY:"auto"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.18)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)",boxShadow:"none"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.38)",zIndex:20},sideTop:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 4px"},closeBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",marginBottom:8},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700,padding:"0 6px 14px"},sideItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"9px 10px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:500,color:"var(--text-2)",textAlign:"left"},sideItemOn:{background:"var(--hover)",fontWeight:600},sideLabel:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},sideCount:{fontSize:11,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:10,padding:"1px 7px"},sideStreak:{display:"flex",alignItems:"center",gap:3,fontSize:11,fontWeight:600,color:"#C2773B"},sideDot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},sideDivider:{height:1,background:"var(--border)",margin:"8px 6px"},addBox:{padding:"10px 6px",display:"flex",flexDirection:"column",gap:6},sideInput:{border:"1px solid var(--border)",borderRadius:7,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},sideAddBtn:{border:"none",background:"#4C9A6B",color:"#fff",height:30,padding:"0 12px",borderRadius:7,cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontSize:13,fontFamily:"inherit"},sideCancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:30,height:30,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},sideNewBtn:{display:"flex",alignItems:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",borderRadius:8,padding:"8px 10px",fontSize:12.5,color:"var(--text-3)",fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginTop:6,justifyContent:"center"},main:{flex:1,padding:"26px",overflowX:"hidden",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:200},mainHead:{marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:5,display:"flex",alignItems:"center"},h1:{fontSize:27,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},actionBtn:{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:500,color:"var(--text-2)",border:"1px solid var(--border)",background:"var(--surface)",padding:"5px 10px",borderRadius:7,cursor:"pointer",fontFamily:"inherit"},weekCard:{background:"var(--surface)",borderRadius:12,padding:"8px 14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"auto"},weekHeadRow:{display:"flex",alignItems:"flex-end",padding:"10px 0",borderBottom:"1px solid var(--border)",minWidth:480},weekNameCol:{width:160,flexShrink:0,display:"flex",alignItems:"center",gap:8},weekDayHead:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2},weekDayName:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekDayNum:{fontSize:12,fontWeight:600,color:"var(--text-2)",width:22,height:22,display:"grid",placeItems:"center",borderRadius:"50%"},weekDayToday:{background:"var(--accent-strong)",color:"#fff"},weekStreakCol:{width:64,flexShrink:0,textAlign:"center",fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekRow:{display:"flex",alignItems:"center",padding:"9px 0",borderBottom:"1px solid #F4F2EC",minWidth:480},weekHabitName:{fontSize:13,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},weekCell:{flex:1,display:"grid",placeItems:"center"},typeBadge:{fontSize:10,color:"var(--text-3)",background:"var(--hover)",padding:"1px 6px",borderRadius:8,fontWeight:600},tick:{width:26,height:26,borderRadius:7,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",padding:0},tickFuture:{opacity:.4,cursor:"not-allowed",borderStyle:"dashed"},streakPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,fontWeight:700,padding:"3px 9px",borderRadius:12},tinyBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:"2px 3px",display:"grid",placeItems:"center",borderRadius:4},statStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:10,marginBottom:18},stat:{borderRadius:10,padding:"13px 14px"},statLabel:{fontSize:11,fontWeight:600,color:"var(--text-2)",marginBottom:5},statValue:{fontSize:19,fontWeight:700,display:"flex",alignItems:"center",gap:5,fontFamily:"'Fraunces',Georgia,serif"},monthCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},monthTitle:{fontSize:14,fontWeight:700,marginBottom:12,fontFamily:"'Fraunces',Georgia,serif"},monthDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:8},monthDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},monthGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6},monthDay:{aspectRatio:"1",border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",display:"grid",placeItems:"center"},monthDayFuture:{opacity:.4,cursor:"not-allowed",background:"var(--surface-2)"},noteIndicator:{position:"absolute",top:3,right:3,width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},cellNoteBubble:{position:"absolute",top:2,right:"calc(50% - 16px)",width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},countBadge:{position:"absolute",bottom:2,right:2,minWidth:13,height:13,padding:"0 2px",borderRadius:7,color:"#fff",fontSize:9,fontWeight:700,display:"grid",placeItems:"center",lineHeight:1},counterBtn:{width:44,height:44,borderRadius:"50%",border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:24,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1},chainLine:{position:"absolute",top:"calc(50% - 3px)",left:0,right:0,height:6,zIndex:0,opacity:.9},chainBanner:{display:"flex",alignItems:"center",gap:8,borderRadius:10,padding:"10px 14px",marginBottom:14,fontSize:12.5,fontWeight:700,fontFamily:"'Inter',system-ui,sans-serif"},navBar:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:16},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},navLabel:{fontSize:13,fontWeight:700,color:"var(--text)",minWidth:180,textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},noteBox:{background:"var(--surface)",borderRadius:10,padding:14,marginTop:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},longPressMenu:{position:"absolute",top:"100%",left:0,zIndex:50,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 4px 16px rgba(0,0,0,0.12)",padding:"4px 0",minWidth:140},menuItem:{display:"flex",alignItems:"center",gap:8,width:"100%",border:"none",background:"none",padding:"8px 14px",fontSize:13,color:"var(--text)",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:100,display:"grid",placeItems:"center"},modal:{background:"var(--surface)",borderRadius:14,padding:24,width:320,maxWidth:"90vw",display:"flex",flexDirection:"column",gap:8},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:700,fontSize:16,fontFamily:"'Fraunces',Georgia,serif",marginBottom:6},modalLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4}},pl=[{id:1,label:"Rough",emoji:"😣",color:"#C2536B"},{id:2,label:"Low",emoji:"🙁",color:"#C2773B"},{id:3,label:"Okay",emoji:"😐",color:"#C9A227"},{id:4,label:"Good",emoji:"🙂",color:"#4C9A6B"},{id:5,label:"Great",emoji:"😄",color:"#3A7CA5"}],ef=t=>pl.find(e=>e.id===t),gi=[{id:"wins",label:"Wins",hint:"What went well today?",icon:Xn,color:"#C9A227"},{id:"grateful",label:"Grateful for",hint:"1–3 things",icon:fm,color:"#C2536B"},{id:"mattered",label:"What mattered",hint:"The point of today",icon:ma,color:"#3A7CA5"},{id:"letgo",label:"Letting go of",hint:"Offload what's draining",icon:Em,color:"#8268B0"},{id:"tomorrow",label:"Tomorrow's one thing",hint:"A single priority",icon:Im,color:"#4C9A6B"}],rf=()=>new Date().toISOString().slice(0,10),ci=t=>new Date(t+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"});function nf(){const t=rf(),[e,r]=[new Date().getFullYear(),new Date().getMonth()+1],[n,s]=k.useState(null),i=n||t,l=i===t,[a,d]=k.useState(null),[g,m]=k.useState({}),[v,p]=k.useState(Object.fromEntries(gi.map(M=>[M.id,""]))),j=k.useCallback(async M=>{const _=await H.getJournalEntry(M);d(_)},[]);k.useCallback(async()=>{const M=await H.getJournalHistory(e,r);m(M)},[e,r]);const S=k.useCallback(async()=>{const[M,_]=await Promise.all([H.getJournalEntry(i),H.getJournalHistory(e,r)]);d(M),m(_)},[i,e,r]);k.useEffect(()=>{S()},[S]);const w=async M=>{await H.updateJournalMood(i,M),S()},I=async M=>{const _=v[M].trim();_&&(await H.addJournalBullet(i,M,_),p(et=>({...et,[M]:""})),j(i))},b=async M=>{await H.deleteJournalBullet(M),j(i)},c=M=>{s(M===t?null:M),p(Object.fromEntries(gi.map(_=>[_.id,""])))};if(!a)return o.jsx("div",{style:{padding:28,color:"var(--text-3)"},children:"Loading…"});const u=a.mood!==null,x=(()=>{let M=0;const _=new Date(t);if(g[t]||l&&u)M=1,_.setDate(_.getDate()-1);else return 0;for(;;){const rt=_.toISOString().slice(0,10);if(g[rt])M++,_.setDate(_.getDate()-1);else break}return M})(),h=Object.values(a.bullets||{}).reduce((M,_)=>M+_.length,0),C=new Date(e,r,0).getDate(),R=new Date(e,r-1,1).getDay(),B=R===0?6:R-1;return o.jsxs("div",{style:st.page,children:[o.jsxs("div",{style:st.head,children:[o.jsxs("div",{children:[o.jsx("div",{style:st.eyebrow,children:"Anvil · Journal"}),!l&&o.jsxs("button",{style:st.backBtn,onClick:()=>s(null),children:[o.jsx(no,{size:14})," Back to Today"]}),o.jsx("h1",{style:st.h1,children:l?"Today":ci(i)}),l&&o.jsx("div",{style:st.date,children:ci(t)})]}),o.jsxs("div",{style:st.streakBox,children:[o.jsx(Rs,{size:16,color:"#C2773B"}),o.jsx("span",{style:st.streakNum,children:x}),o.jsx("span",{style:st.streakLabel,children:"day streak"})]})]}),o.jsxs("div",{style:st.card,children:[o.jsxs("div",{style:st.cardTitle,children:["How ",l?"are":"were"," you?"]}),o.jsx("div",{style:st.moodRow,children:pl.map(M=>{const _=a.mood===M.id;return o.jsxs("button",{onClick:()=>w(M.id),style:{...st.moodBtn,..._?{background:M.color,borderColor:M.color,transform:"translateY(-2px)"}:{}},children:[o.jsx("span",{style:st.moodEmoji,children:M.emoji}),o.jsx("span",{style:{...st.moodLabel,color:_?"#fff":"#6B675E"},children:M.label})]},M.id)})})]}),gi.map(M=>{var rt;const _=M.icon,et=((rt=a.bullets)==null?void 0:rt[M.id])||[];return o.jsxs("div",{style:st.card,children:[o.jsxs("div",{style:st.sectionHead,children:[o.jsx("span",{style:{...st.sectionIcon,background:`${M.color}1A`,color:M.color},children:o.jsx(_,{size:15})}),o.jsxs("div",{children:[o.jsx("div",{style:st.cardTitle,children:M.label}),o.jsx("div",{style:st.sectionHint,children:M.hint})]})]}),o.jsx("ul",{style:st.bulletList,children:et.map(Z=>o.jsxs("li",{style:st.bullet,children:[o.jsx("span",{style:{...st.bulletDot,background:M.color}}),o.jsx("span",{style:st.bulletText,children:Z.text}),o.jsx("button",{onClick:()=>b(Z.id),style:st.bulletDel,children:o.jsx(bt,{size:13})})]},Z.id))}),o.jsxs("div",{style:st.addRow,children:[o.jsx("input",{placeholder:"Add a point…",value:v[M.id],onChange:Z=>p(dt=>({...dt,[M.id]:Z.target.value})),onKeyDown:Z=>Z.key==="Enter"&&I(M.id),style:st.input}),o.jsx("button",{onClick:()=>I(M.id),style:{...st.addBtn,background:M.color},children:o.jsx(_e,{size:16})})]})]},M.id)}),o.jsxs("div",{style:st.card,children:[o.jsxs("div",{style:st.cardTitle,children:[new Date(e,r-1).toLocaleDateString("en-US",{month:"long",year:"numeric"})," · Mood history",o.jsx("span",{style:{fontSize:11,color:"var(--text-3)",fontWeight:400,marginLeft:8},children:"tap a day to view"})]}),o.jsx("div",{style:st.calDow,children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(M=>o.jsx("div",{style:st.calDowCell,children:M},M))}),o.jsxs("div",{style:st.calGrid,children:[Array.from({length:B}).map((M,_)=>o.jsx("div",{},`p${_}`)),Array.from({length:C},(M,_)=>_+1).map(M=>{const _=`${e}-${String(r).padStart(2,"0")}-${String(M).padStart(2,"0")}`,et=_===t&&a.mood?a.mood:g[_],rt=et?ef(et):null,Z=_>t,dt=_===i;return o.jsx("button",{onClick:()=>!Z&&c(_),disabled:Z,style:{...st.calDay,background:rt?rt.color:Z?"var(--surface-2)":"var(--surface)",borderColor:dt?"var(--accent-strong)":"var(--border)",borderWidth:dt?2:1,color:rt?"#fff":"var(--text-3)",opacity:Z?.5:1,cursor:Z?"not-allowed":"pointer",outline:dt?"2px solid var(--accent-strong)":"none",outlineOffset:1},title:rt?rt.label:_,children:rt?rt.emoji:M},M)})]}),o.jsx("div",{style:st.legend,children:pl.map(M=>o.jsxs("span",{style:st.legendItem,children:[o.jsx("span",{style:{...st.legendDot,background:M.color}})," ",M.label]},M.id))})]}),o.jsx("div",{style:st.footer,children:l?u?`Mood set · ${h} point${h===1?"":"s"} written today`:"Tap a mood to log today and keep your streak":`Viewing ${ci(i)}`})]})}const st={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},backBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",background:"none",color:"#3A7CA5",fontSize:12.5,fontWeight:600,cursor:"pointer",padding:"0 0 6px",fontFamily:"inherit"},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},date:{fontSize:13,color:"var(--text-3)",marginTop:4},streakBox:{display:"flex",alignItems:"center",gap:6,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"8px 14px"},streakNum:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"#C2773B"},streakLabel:{fontSize:11,color:"var(--text-3)",fontWeight:500},card:{background:"var(--surface)",borderRadius:12,padding:"18px 20px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},cardTitle:{fontSize:14,fontWeight:700,marginBottom:12,color:"var(--text)"},moodRow:{display:"flex",gap:8,flexWrap:"wrap"},moodBtn:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,border:"2px solid var(--border)",background:"var(--surface)",borderRadius:10,padding:"10px 12px",cursor:"pointer",flex:"1 1 60px",transition:"transform 0.1s"},moodEmoji:{fontSize:22},moodLabel:{fontSize:11,fontWeight:600},sectionHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:10},sectionIcon:{width:32,height:32,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},sectionHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},bulletList:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6,marginBottom:10},bullet:{display:"flex",alignItems:"center",gap:8,fontSize:13.5,lineHeight:1.4},bulletDot:{width:6,height:6,borderRadius:"50%",flexShrink:0},bulletText:{flex:1},bulletDel:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},addRow:{display:"flex",gap:8},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",outline:"none"},addBtn:{width:36,height:36,border:"none",borderRadius:8,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:12},calDay:{aspectRatio:"1",border:"1px solid var(--border)",borderRadius:7,fontSize:13,display:"grid",placeItems:"center",fontWeight:500,fontFamily:"inherit"},legend:{display:"flex",gap:10,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)"},legendDot:{width:8,height:8,borderRadius:"50%",display:"inline-block"},footer:{fontSize:12.5,color:"var(--text-3)",textAlign:"center",marginTop:8,fontStyle:"italic"}},xe=[{id:"D",label:"Data",color:"#3A7CA5",soft:"rgba(58,124,165,0.10)",prompt:"What did you read/watch? Log the raw source and a quick note.",hint:"e.g. 'Atomic Habits ch.1 — habits are systems not goals'"},{id:"I",label:"Information",color:"#8268B0",soft:"rgba(130,104,176,0.10)",prompt:"What did you actually understand from it? In your own words.",hint:"e.g. 'Small 1% improvements compound into massive change over time'"},{id:"K",label:"Knowledge",color:"#C9A227",soft:"rgba(201,162,39,0.10)",prompt:"How will this specifically improve your life? Connect it to your goals.",hint:"e.g. 'I will improve my morning workout habit by 1% each week'"},{id:"W",label:"Wisdom",color:"#4C9A6B",soft:"rgba(76,154,107,0.10)",prompt:"How have you implemented it? What changed?",hint:"e.g. 'I've not missed a workout in 3 weeks using the 1% rule'"}],Ld=t=>xe.findIndex(e=>e.id===t),ml=[{id:"book",label:"Book",icon:bu},{id:"video",label:"Video",icon:Bm},{id:"article",label:"Article",icon:pu}],Nd=t=>ml.find(e=>e.id===t)||ml[0],ui={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"};function of(){var N;const[t,e]=k.useState([]),[r,n]=k.useState(null),[s,i]=k.useState("ALL"),[l,a]=k.useState(!1),[d,g]=k.useState(null),[m,v]=k.useState({title:"",type:"book",pillar:"Academic",note:""}),[p,j]=k.useState({}),[S,w]=k.useState(null),[I,b]=k.useState(null),c=k.useCallback(async()=>{try{const z=await H.getSkills();e(z);const f={};z.forEach(F=>{f[F.id]=Object.fromEntries(xe.map(y=>[y.id,""]))}),j(F=>{const y={...f};return z.forEach(T=>{F[T.id]&&(y[T.id]={...f[T.id],...F[T.id]})}),y})}catch(z){console.error(z)}},[]);k.useEffect(()=>{c()},[c]);const u=t.find(z=>z.id===r),x=u?Ld(u.stage):-1,h=async(z,f)=>{var y;const F=(((y=p[z])==null?void 0:y[f])??"").trim();F&&(await H.addSkillNote(z,f,F),j(T=>({...T,[z]:{...T[z],[f]:""}})),c())},C=async z=>{await H.deleteSkillNote(z),c()},R=async()=>{!u||!(I!=null&&I.trim())||(await H.updateSkill(u.id,{title:I.trim()}),b(null),c())},B=async()=>{!S||!S.text.trim()||(await H.updateSkillNote(S.id,S.text.trim()),w(null),c())},M=async z=>{await H.toggleSkillNote(z),c()},_=async(z,f)=>{t.find(y=>y.id===z)&&(f==="W"&&g(z),await H.completeSkillStage(z,f),c())},et=async()=>{if(!m.title.trim())return;const z=await H.createSkill({pillar:m.pillar,title:m.title.trim(),source_type:m.type,note_d:m.note.trim()});a(!1),v({title:"",type:"book",pillar:"Academic",note:""}),n(z.id),c()},rt=async z=>{await H.deleteSkill(z),r===z&&n(null),c()},Z=s==="ALL"?t:t.filter(z=>z.stage===s),dt=t.filter(z=>z.stage==="W").length,G=!!u;return o.jsxs("div",{style:$.page,children:[d&&o.jsx("div",{style:$.celebOverlay,children:o.jsxs("div",{style:$.celebBox,children:[o.jsx("div",{style:$.celebEmoji,children:"🏆"}),o.jsx("div",{style:$.celebTitle,children:"Wisdom unlocked!"}),o.jsx("div",{style:$.celebSub,children:"You've implemented this knowledge — that's rare and real."}),o.jsx("button",{onClick:()=>g(null),style:$.celebBtn,children:"Continue"})]})}),o.jsxs("div",{style:$.head,children:[o.jsxs("div",{children:[o.jsx("div",{style:$.eyebrow,children:"Anvil · Skills"}),o.jsx("h1",{style:$.h1,children:"DIKW Skills"}),o.jsx("div",{style:$.subhead,children:"Data → Information → Knowledge → Wisdom"})]}),o.jsxs("div",{style:$.headRight,children:[o.jsxs("div",{style:$.wisdomBadge,children:[o.jsx(Xn,{size:14,color:"#C9A227"})," ",dt," Wisdom",dt!==1?"s":""]}),o.jsxs("button",{onClick:()=>{a(!0),n(null)},style:$.addSkillBtn,children:[o.jsx(_e,{size:15})," Add skill"]})]})]}),o.jsx("div",{style:$.filterBar,children:["ALL",...xe.map(z=>z.id)].map(z=>{const f=xe.find(y=>y.id===z),F=s===z;return o.jsx("button",{onClick:()=>i(z),style:{...$.filterBtn,...F?{background:f?f.color:"var(--accent-strong)",color:"#fff",borderColor:"transparent"}:{}},children:f?`${z} · ${f.label}`:"All"},z)})}),o.jsxs("div",{style:{...$.layout,gridTemplateColumns:G?"1fr 1fr":"1fr"},children:[o.jsxs("div",{style:$.cardList,children:[l&&o.jsxs("div",{style:{...$.skillCard,border:"2px dashed #3A7CA5"},children:[o.jsx("div",{style:$.cardTitle,children:"New skill"}),o.jsx("input",{placeholder:"Title (book / video / article name)",value:m.title,onChange:z=>v(f=>({...f,title:z.target.value})),onKeyDown:z=>z.key==="Enter"&&et(),style:$.input,autoFocus:!0}),o.jsxs("div",{style:$.addRow,children:[o.jsx("select",{value:m.type,onChange:z=>v(f=>({...f,type:z.target.value})),style:$.select,children:ml.map(z=>o.jsx("option",{value:z.id,children:z.label},z.id))}),o.jsx("select",{value:m.pillar,onChange:z=>v(f=>({...f,pillar:z.target.value})),style:$.select,children:Object.keys(ui).map(z=>o.jsx("option",{children:z},z))})]}),o.jsx("input",{placeholder:"First note (what did you read/watch?)",value:m.note,onChange:z=>v(f=>({...f,note:z.target.value})),style:$.input}),o.jsxs("div",{style:$.addRow,children:[o.jsxs("button",{onClick:et,style:$.saveBtn,children:[o.jsx(wt,{size:14})," Save"]}),o.jsxs("button",{onClick:()=>a(!1),style:$.cancelBtn,children:[o.jsx(bt,{size:14})," Cancel"]})]})]}),Z.map(z=>{const f=Ld(z.stage),F=xe[f],y=Nd(z.type),T=z.stage==="W",L=r===z.id;return o.jsxs("div",{onClick:()=>n(L?null:z.id),style:{...$.skillCard,...L?{borderColor:F.color,borderWidth:2}:{},...T?{background:"rgba(76,154,107,0.05)"}:{}},children:[o.jsxs("div",{style:$.skillCardTop,children:[o.jsxs("div",{style:$.skillMeta,children:[o.jsx("span",{style:{color:ui[z.pillar]},children:o.jsx(y.icon,{size:13})}),o.jsx("span",{style:{...$.pillarDot,background:ui[z.pillar]}}),o.jsxs("span",{style:$.srcLabel,children:[y.label," · ",z.pillar]})]}),o.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[T&&o.jsx(hu,{size:14,color:"#4C9A6B"}),o.jsx("button",{onClick:E=>{E.stopPropagation(),rt(z.id)},style:$.ghostBtn,children:o.jsx(bt,{size:13})})]})]}),o.jsx("div",{style:$.skillTitle,children:z.title}),o.jsxs("div",{style:$.track,children:[xe.map((E,P)=>{var pt;const at=P<f,ot=P===f,q=(pt=z.completed_stages)==null?void 0:pt[E.id];return o.jsxs("div",{style:$.trackItem,children:[o.jsxs("div",{style:{...$.trackDot,background:at||q||ot?E.color:"var(--border)",boxShadow:ot?`0 0 0 3px ${E.color}33`:"none"},children:[(at||ot&&q)&&o.jsx(wt,{size:9,color:"#fff",strokeWidth:3}),ot&&!q&&o.jsx("span",{style:$.trackCurrent,children:E.id}),!at&&!ot&&o.jsx(Ad,{size:8,color:"#B5B1A7"})]}),P<xe.length-1&&o.jsx("div",{style:{...$.trackLine,background:at?xe[P+1].color:"var(--border)"}})]},E.id)}),o.jsx("span",{style:{...$.stageTag,background:F.soft,color:F.color},children:F.label})]})]},z.id)}),Z.length===0&&!l&&o.jsx("div",{style:$.empty,children:"No skills at this stage yet."})]}),u&&o.jsxs("div",{style:$.detail,children:[o.jsxs("div",{style:$.detailHead,children:[o.jsxs("div",{style:{flex:1,minWidth:0},children:[o.jsxs("div",{style:$.eyebrow,children:[Nd(u.type).label," · ",u.pillar]}),I!==null?o.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginTop:4},children:[o.jsx("input",{autoFocus:!0,value:I,onChange:z=>b(z.target.value),onKeyDown:z=>{z.key==="Enter"&&R(),z.key==="Escape"&&b(null)},style:{...$.input,fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:0,flex:1}}),o.jsx("button",{onClick:R,style:{...$.noteAddBtn,background:"#4C9A6B",width:30,height:30},children:o.jsx(wt,{size:13})}),o.jsx("button",{onClick:()=>b(null),style:{...$.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:30,height:30},children:o.jsx(bt,{size:13})})]}):o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[o.jsx("div",{style:$.detailTitle,children:u.title}),o.jsx("button",{onClick:()=>b(u.title),style:$.ghostBtn,title:"Edit name",children:o.jsx(wr,{size:13})})]})]}),o.jsx("button",{onClick:()=>{n(null),b(null)},style:$.closeBtn,children:o.jsx(bt,{size:16})})]}),xe.map((z,f)=>{var at,ot,q;const F=f<=x,y=f===x,T=f<x||((at=u.completed_stages)==null?void 0:at[z.id]),L=f>x,E=((ot=u.notes)==null?void 0:ot[z.id])||[],P=((q=p[u.id])==null?void 0:q[z.id])??"";return o.jsxs("div",{style:{...$.stageBlock,...F?{borderColor:z.color}:{},opacity:L?.45:1},children:[o.jsxs("div",{style:$.stageBlockHead,children:[o.jsx("div",{style:{...$.stageLetter,background:F?z.color:"var(--border)",color:F?"#fff":"#9A968C"},children:T&&!y?o.jsx(wt,{size:12,color:"#fff",strokeWidth:3}):L?o.jsx(Ad,{size:11,color:"#9A968C"}):z.id}),o.jsxs("div",{style:{flex:1},children:[o.jsx("div",{style:{...$.stageName,color:F?z.color:"#9A968C"},children:z.label}),F&&o.jsx("div",{style:$.stagePrompt,children:z.prompt})]}),T&&!y&&o.jsx("span",{style:{...$.doneBadge,color:z.color,background:z.soft},children:"Done"})]}),F&&(()=>{var Ir,sn;const pt=z.id==="W",Ce=E.length>0&&E.every(Ct=>Ct.done),it=pt?Ce:E.length>0;return o.jsxs(o.Fragment,{children:[E.length>0&&o.jsx("ul",{style:$.noteList,children:E.map(Ct=>o.jsxs("li",{style:$.noteItem,children:[pt?o.jsx("button",{onClick:()=>M(Ct.id),style:{...$.checkBox,...Ct.done?{background:z.color,borderColor:z.color}:{}},children:Ct.done&&o.jsx(wt,{size:11,color:"#fff",strokeWidth:3})}):o.jsx("span",{style:{...$.noteDot,background:z.color}}),(S==null?void 0:S.id)===Ct.id?o.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[o.jsx("input",{autoFocus:!0,value:S.text,onChange:de=>w(io=>({...io,text:de.target.value})),onKeyDown:de=>{de.key==="Enter"&&B(),de.key==="Escape"&&w(null)},style:{...$.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),o.jsx("button",{onClick:B,style:{...$.noteAddBtn,background:z.color,width:28,height:28},children:o.jsx(wt,{size:12})}),o.jsx("button",{onClick:()=>w(null),style:{...$.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:o.jsx(bt,{size:12})})]}):o.jsx("span",{style:{...$.noteText,...pt&&Ct.done?{textDecoration:"line-through",color:"var(--text-3)"}:{}},children:Ct.text}),(S==null?void 0:S.id)!==Ct.id&&o.jsxs(o.Fragment,{children:[o.jsx("button",{onClick:()=>w({id:Ct.id,text:Ct.text}),style:$.ghostBtn,children:o.jsx(wr,{size:12})}),o.jsx("button",{onClick:()=>C(Ct.id),style:$.ghostBtn,children:o.jsx(bt,{size:12})})]})]},Ct.id))}),E.length===0&&o.jsx("div",{style:$.noNotes,children:pt?"Add the steps to implement this — check each off as you do it.":`No notes yet — ${z.hint}`}),o.jsxs("div",{style:$.noteAddRow,children:[o.jsx("input",{placeholder:pt?"Add a step to implement…":`Add a ${z.label} note…`,value:P,onChange:Ct=>j(de=>({...de,[u.id]:{...de[u.id],[z.id]:Ct.target.value}})),onKeyDown:Ct=>Ct.key==="Enter"&&h(u.id,z.id),style:$.noteInput}),o.jsx("button",{onClick:()=>h(u.id,z.id),style:{...$.noteAddBtn,background:z.color},children:o.jsx(_e,{size:14})})]}),y&&!((Ir=u.completed_stages)!=null&&Ir[z.id])&&o.jsxs(o.Fragment,{children:[pt&&E.length>0&&!Ce&&o.jsxs("div",{style:$.checklistHint,children:[E.filter(Ct=>Ct.done).length,"/",E.length," done — check all steps to complete Wisdom"]}),o.jsxs("button",{onClick:()=>_(u.id,z.id),disabled:!it,style:{...$.advanceBtn,background:it?z.color:"#C3BFB5",marginTop:10,cursor:it?"pointer":"not-allowed"},children:[o.jsx(wt,{size:14}),pt?"Mark Wisdom complete":`Complete ${z.label} → ${(sn=xe[f+1])==null?void 0:sn.label}`]})]})]})})()]},z.id)}),u.stage==="W"&&((N=u.completed_stages)==null?void 0:N.W)&&o.jsxs("div",{style:$.wisdomDone,children:[o.jsx(Xn,{size:16,color:"#4C9A6B"})," Wisdom achieved — implemented in your life"]})]})]})]})}const $={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box",position:"relative"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},wisdomBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addSkillBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},filterBar:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16},filterBtn:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},layout:{display:"grid",gap:12},cardList:{display:"flex",flexDirection:"column",gap:10},skillCard:{background:"var(--surface)",borderRadius:12,padding:"14px",border:"1.5px solid var(--border)",cursor:"pointer",boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},skillCardTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},skillMeta:{display:"flex",alignItems:"center",gap:6},pillarDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},srcLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)"},skillTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",marginBottom:12},cardTitle:{fontSize:13,fontWeight:700,marginBottom:10},track:{display:"flex",alignItems:"center"},trackItem:{display:"flex",alignItems:"center"},trackDot:{width:22,height:22,borderRadius:"50%",display:"grid",placeItems:"center",flexShrink:0},trackCurrent:{fontSize:9,fontWeight:800,color:"#fff"},trackLine:{width:24,height:3,borderRadius:2},stageTag:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,marginLeft:10},detail:{background:"var(--surface)",borderRadius:14,padding:"18px 16px",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",border:"1.5px solid var(--border)",alignSelf:"start"},detailHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16},detailTitle:{fontSize:18,fontWeight:700,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},stageBlock:{border:"1.5px solid var(--border)",borderRadius:10,padding:"12px 13px",marginBottom:10},stageBlockHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:8},stageLetter:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",fontSize:13,fontWeight:800,flexShrink:0},stageName:{fontSize:13,fontWeight:700},stagePrompt:{fontSize:11.5,color:"var(--text-2)",marginTop:2,lineHeight:1.4},doneBadge:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10,marginLeft:"auto",flexShrink:0},noteList:{margin:"0 0 8px 0",padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6},noteItem:{display:"flex",alignItems:"flex-start",gap:8,fontSize:13,lineHeight:1.4},noteDot:{width:6,height:6,borderRadius:"50%",flexShrink:0,marginTop:5},checkBox:{width:18,height:18,borderRadius:5,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginTop:1,padding:0},checklistHint:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,marginTop:10,textAlign:"center"},noteText:{flex:1,color:"var(--text)"},noNotes:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",marginBottom:8},noteAddRow:{display:"flex",gap:6},noteInput:{flex:1,border:"1px solid var(--border)",borderRadius:7,padding:"7px 10px",fontSize:13,fontFamily:"inherit",outline:"none"},noteAddBtn:{width:32,height:32,border:"none",borderRadius:7,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},advanceBtn:{display:"flex",alignItems:"center",gap:8,border:"none",color:"#fff",padding:"10px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},wisdomDone:{display:"flex",alignItems:"center",gap:8,justifyContent:"center",fontSize:13.5,fontWeight:700,color:"#4C9A6B",padding:12,background:"rgba(76,154,107,0.08)",borderRadius:10,marginTop:4},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box",marginBottom:8},select:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:12.5,fontFamily:"inherit",flex:1},addRow:{display:"flex",gap:8,marginBottom:8},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{fontSize:13,color:"var(--text-3)",padding:"32px 12px",textAlign:"center"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.55)",zIndex:50,display:"grid",placeItems:"center"},celebBox:{background:"var(--surface)",borderRadius:20,padding:"40px 32px",textAlign:"center",maxWidth:320,boxShadow:"0 8px 40px rgba(0,0,0,0.18)"},celebEmoji:{fontSize:52,marginBottom:12},celebTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:8},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:"#4C9A6B",color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},bi=[{id:"aarti",title:"Aarti",html:`<h1>॥ गणपतीची आरती ॥</h1><br/>
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
      </div>`}];function sf(){const[t,e]=k.useState(()=>window.innerWidth<720);return k.useEffect(()=>{const r=()=>e(window.innerWidth<720);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),t}function lf({base:t,count:e}){const[r,n]=k.useState(0);return o.jsxs("div",{style:{maxWidth:560,margin:"0 auto"},children:[o.jsx("div",{style:xt.carouselFrame,children:o.jsx("img",{src:`${t}${r+1}.jpg`,alt:`Adhyay ${r+1}`,style:xt.carouselImg})}),o.jsxs("div",{style:xt.carouselNav,children:[o.jsxs("button",{onClick:()=>n(s=>(s-1+e)%e),style:xt.carouselBtn,children:[o.jsx(no,{size:16})," Prev"]}),o.jsxs("span",{style:xt.carouselCount,children:["Adhyay ",r+1," / ",e]}),o.jsxs("button",{onClick:()=>n(s=>(s+1)%e),style:xt.carouselBtn,children:["Next ",o.jsx(on,{size:16})]})]})]})}function af(){const t=sf(),[e,r]=k.useState(!1),[n,s]=k.useState("dss"),i=bi.find(d=>d.id===n)||bi[0],l=d=>{s(d),t&&r(!1)},a={...xt.sidebar,...t?xt.sidebarOverlay:{},...t&&!e?xt.sidebarHidden:{}};return o.jsxs("div",{style:xt.shell,children:[o.jsx("style",{children:df}),t&&e&&o.jsx("div",{style:xt.backdrop,onClick:()=>r(!1)}),o.jsxs("aside",{style:a,children:[o.jsxs("div",{style:xt.sideHead,children:[o.jsx("div",{style:xt.brand,children:"Anvil · Spiritual"}),t&&o.jsx("button",{onClick:()=>r(!1),style:xt.iconBtn,children:o.jsx(bt,{size:17})})]}),o.jsx("div",{style:xt.sideScroll,children:bi.map(d=>{const g=d.id===n;return o.jsx("button",{onClick:()=>l(d.id),style:{...xt.sideItem,...g?xt.sideItemOn:{}},children:d.title},d.id)})})]}),o.jsxs("main",{style:xt.main,children:[t&&o.jsxs("button",{onClick:()=>r(!0),style:xt.hamburger,children:[o.jsx(pa,{size:17}),o.jsx("span",{style:xt.hamburgerLabel,children:i.title})]}),o.jsxs("div",{style:xt.contentWrap,children:[i.youtube&&o.jsx("div",{style:xt.videoFrame,children:o.jsx("iframe",{src:`https://www.youtube.com/embed/${i.youtube}`,title:i.title,style:xt.video,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},i.youtube)}),i.carousel?o.jsx(lf,{base:i.imageBase,count:i.carousel}):o.jsx("div",{className:"spiritual-content",dangerouslySetInnerHTML:{__html:i.html}})]})]})]})}const df=`
.spiritual-content { font-family: 'Inter', system-ui, sans-serif; color: var(--text); line-height: 1.9; font-size: 16px; text-align: center; }
.spiritual-content h1 { font-family: 'Fraunces', Georgia, serif; font-size: 24px; color: #8268B0; margin: 8px 0 18px; letter-spacing: -0.01em; }
.spiritual-content h2 { font-family: 'Fraunces', Georgia, serif; font-size: 18px; color: #7A5EA8; margin: 20px 0 8px; }
.spiritual-content h3 { font-size: 15px; color: var(--text-3); text-transform: uppercase; letter-spacing: 0.06em; margin: 18px 0 6px; }
.spiritual-content b { color: #8268B0; }
.spiritual-content div { text-align: center; }
`,xt={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:240,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.15)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.35)",zIndex:20},sideHead:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 14px 12px"},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700},sideScroll:{flex:1,overflowY:"auto",padding:"0 8px 16px"},sideItem:{display:"block",width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text-2)",textAlign:"left",marginBottom:2},sideItemOn:{background:"rgba(130,104,176,0.12)",color:"#8268B0",fontWeight:700},main:{flex:1,padding:"26px 22px",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:220},contentWrap:{background:"var(--surface)",borderRadius:14,padding:"26px 28px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",maxWidth:760,margin:"0 auto"},videoFrame:{position:"relative",width:"100%",maxWidth:600,margin:"0 auto 22px",aspectRatio:"16 / 9",borderRadius:12,overflow:"hidden",background:"#000"},video:{position:"absolute",inset:0,width:"100%",height:"100%",border:"none"},carouselFrame:{background:"var(--surface-2)",borderRadius:12,padding:8,border:"1px solid var(--border)"},carouselImg:{width:"100%",borderRadius:8,display:"block"},carouselNav:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:14},carouselBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},carouselCount:{fontSize:13,fontWeight:700,color:"#8268B0",fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"none",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,color:"var(--text-2)"}},Ne={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},gf=Object.keys(Ne),cf=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],uf=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],bf=()=>new Date().toISOString().slice(0,10),pf=(t,e)=>`${uf[e-1]} ${t}`,mf=(t,e)=>{const r=new Date(t,e,0).getDate();return Array.from({length:r},(n,s)=>`${t}-${String(e).padStart(2,"0")}-${String(s+1).padStart(2,"0")}`)},ff=(t,e)=>{const r=new Date(t,e-1,1).getDay();return r===0?6:r-1};function vf(){const t=bf(),[e,r]=k.useState(new Date().getFullYear()),[n,s]=k.useState(new Date().getMonth()+1),[i,l]=k.useState([]),[a,d]=k.useState([]),[g,m]=k.useState({}),[v,p]=k.useState(null),[j,S]=k.useState(!1),[w,I]=k.useState(!1),[b,c]=k.useState({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:t}),u=k.useCallback(async()=>{const[f,F,y]=await Promise.all([H.getTopics(),H.getDueToday(),H.getCalendar(e,n)]);l(f),d(F),m(y)},[e,n]);k.useEffect(()=>{u()},[u]);const x=async f=>{await H.toggleReviewDone(f),u()},h=async()=>{const f=b.intervals.split(",").map(F=>parseInt(F.trim(),10)).filter(F=>!isNaN(F));!b.topic.trim()||f.length===0||(await H.createTopic({pillar:b.pillar,topic:b.topic.trim(),intervals:f,learned_date:b.learned_date||t}),c({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:t}),I(!1),u())},{deleteItem:C,toasts:R,handleUndo:B,handleDismiss:M}=oo(H.deleteTopic,H.restoreTopic,u),_=(f,F)=>C(f,F),et=()=>{n===1?(r(f=>f-1),s(12)):s(f=>f-1),p(null)},rt=()=>{n===12?(r(f=>f+1),s(1)):s(f=>f+1),p(null)},Z=i.filter(f=>!f.cemented),dt=i.filter(f=>f.cemented),G=mf(e,n),N=ff(e,n),z=v?i.flatMap(f=>f.reviews.filter(F=>F.due_date===v).map(F=>({...F,topic:f.topic,pillar:f.pillar,total:f.reviews.length}))):[];return o.jsxs("div",{style:Y.page,children:[o.jsxs("div",{style:Y.head,children:[o.jsxs("div",{children:[o.jsx("div",{style:Y.eyebrow,children:"Anvil · Revision"}),o.jsx("h1",{style:Y.h1,children:"Spaced Repetition"})]}),o.jsxs("button",{onClick:()=>I(!0),style:Y.addBtn,children:[o.jsx(_e,{size:15})," Add topic"]})]}),w&&o.jsxs("div",{style:Y.addBox,children:[o.jsx("input",{autoFocus:!0,placeholder:"What did you learn?",value:b.topic,onChange:f=>c(F=>({...F,topic:f.target.value})),onKeyDown:f=>f.key==="Enter"&&h(),style:Y.input}),o.jsxs("div",{style:Y.addRow,children:[o.jsx("select",{value:b.pillar,onChange:f=>c(F=>({...F,pillar:f.target.value})),style:Y.select,children:gf.map(f=>o.jsx("option",{children:f},f))}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[o.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),o.jsx("input",{type:"date",value:b.learned_date,onChange:f=>c(F=>({...F,learned_date:f.target.value})),style:{...Y.select,fontSize:13}})]}),o.jsx("div",{style:{flex:1,minWidth:0},children:o.jsx("input",{value:b.intervals,onChange:f=>c(F=>({...F,intervals:f.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:Y.input})})]}),o.jsxs("div",{style:Y.addRow,children:[o.jsxs("button",{onClick:h,style:Y.saveBtn,children:[o.jsx(wt,{size:14})," Save"]}),o.jsxs("button",{onClick:()=>I(!1),style:Y.cancelBtn,children:[o.jsx(bt,{size:14})," Cancel"]})]})]}),a.length>0&&o.jsxs("div",{style:Y.section,children:[o.jsxs("div",{style:Y.sectionTitle,children:[o.jsx(vu,{size:15,color:"#C2536B"}),"Due Today",o.jsx("span",{style:Y.badge,children:a.length})]}),a.map(f=>{var y,T;const F=((y=Ne[f.pillar])==null?void 0:y.dot)||"#9A968C";return o.jsxs("div",{style:{...Y.reviewCard,borderLeft:`3px solid ${F}`,...f.is_missed?{opacity:.85}:{}},children:[o.jsx("button",{onClick:()=>x(f.review_id),style:{...Y.checkbox,...f.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:f.done&&o.jsx(wt,{size:12,color:"#fff",strokeWidth:3})}),o.jsxs("div",{style:{flex:1,minWidth:0},children:[o.jsx("div",{style:Y.reviewTopic,children:f.topic}),o.jsxs("div",{style:Y.reviewMeta,children:[o.jsxs("span",{style:{...Y.stageTag,background:((T=Ne[f.pillar])==null?void 0:T.soft)||"rgba(0,0,0,0.05)",color:F},children:["Review ",f.stage,"/",f.total_stages]}),f.is_missed&&o.jsxs("span",{style:Y.missedTag,children:["missed · ",f.due_date]})]})]})]},f.review_id)})]}),o.jsxs("div",{style:Y.section,children:[o.jsxs("div",{style:Y.sectionTitle,children:["Active Topics ",o.jsx("span",{style:Y.badge,children:Z.length})]}),Z.length===0&&o.jsx("div",{style:Y.empty,children:"No active topics. Add something you learned today."}),Z.map(f=>{var L,E;const F=((L=Ne[f.pillar])==null?void 0:L.dot)||"#9A968C",y=((E=Ne[f.pillar])==null?void 0:E.soft)||"rgba(0,0,0,0.05)",T=f.reviews.filter(P=>P.done).length;return o.jsxs("div",{style:Y.topicCard,children:[o.jsxs("div",{style:Y.topicHead,children:[o.jsx("span",{style:{...Y.dot,background:F}}),o.jsx("span",{style:Y.topicName,children:f.topic}),o.jsx("span",{style:Y.topicPillar,children:f.pillar}),o.jsxs("span",{style:Y.topicProgress,children:[T,"/",f.reviews.length," done"]}),o.jsx("button",{onClick:()=>_(f.id,f.topic),style:Y.ghostBtn,children:o.jsx(bt,{size:13})})]}),o.jsxs("div",{style:Y.reviewDots,children:[f.reviews.map(P=>{P.due_date<t;const at=P.due_date===t;return o.jsx("button",{onClick:()=>x(P.id),title:`Review ${P.stage} · ${P.due_date}${P.done?" · Done":""}`,style:{...Y.reviewDot,background:P.done?F:at?y:"var(--hover)",border:`2px solid ${P.done||at?F:"var(--border)"}`,color:P.done?"#fff":F},children:P.stage},P.id)}),o.jsxs("span",{style:Y.learnedDate,children:["Learned ",f.learned_date]})]})]},f.id)})]}),dt.length>0&&o.jsxs("div",{style:Y.section,children:[o.jsxs("button",{onClick:()=>S(f=>!f),style:Y.cementedToggle,children:[j?o.jsx(ba,{size:15}):o.jsx(on,{size:15}),o.jsx(Xn,{size:14,color:"#C9A227"}),"Cemented",o.jsx("span",{style:{...Y.badge,background:"rgba(201,162,39,0.12)",color:"#8A6E1A"},children:dt.length})]}),j&&dt.map(f=>{var y;const F=((y=Ne[f.pillar])==null?void 0:y.dot)||"#9A968C";return o.jsx("div",{style:{...Y.topicCard,opacity:.75},children:o.jsxs("div",{style:Y.topicHead,children:[o.jsx("span",{style:{...Y.dot,background:F}}),o.jsx("span",{style:Y.topicName,children:f.topic}),o.jsx("span",{style:Y.topicPillar,children:f.pillar}),o.jsx(Xn,{size:13,color:"#C9A227",style:{marginLeft:"auto"}})]})},f.id)})]}),o.jsxs("div",{style:Y.calCard,children:[o.jsxs("div",{style:Y.calHead,children:[o.jsx("button",{onClick:et,style:Y.calNav,children:"‹"}),o.jsxs("div",{style:Y.calTitle,children:[pf(e,n)," · Review Calendar"]}),o.jsx("button",{onClick:rt,style:Y.calNav,children:"›"})]}),o.jsx("div",{style:Y.calDow,children:cf.map(f=>o.jsx("div",{style:Y.calDowCell,children:f},f))}),o.jsxs("div",{style:Y.calGrid,children:[Array.from({length:N}).map((f,F)=>o.jsx("div",{},`p${F}`)),G.map((f,F)=>{const y=g[f]||0,T=f===t,L=f===v,E=f<t;return o.jsxs("button",{onClick:()=>p(L?null:f),style:{...Y.calDay,background:L?"var(--accent-strong)":T?"var(--hover)":"var(--surface)",color:L?"#fff":T?"var(--text)":E?"var(--text-2)":"var(--text-3)",borderColor:T||L?"var(--accent-strong)":"var(--border)",fontWeight:T||L?700:500},children:[F+1,y>0&&o.jsx("span",{style:{...Y.calBadge,background:L?"var(--surface)":"#C2536B",color:L?"var(--text)":"#fff"},children:y})]},f)})]}),v&&o.jsxs("div",{style:Y.dayDetail,children:[o.jsxs("div",{style:Y.dayDetailTitle,children:["Reviews for ",v]}),z.length===0?o.jsx("div",{style:Y.empty,children:"No reviews scheduled for this day."}):z.map(f=>{var y,T;const F=((y=Ne[f.pillar])==null?void 0:y.dot)||"#9A968C";return o.jsxs("div",{style:{...Y.reviewCard,borderLeft:`3px solid ${F}`},children:[o.jsx("button",{onClick:()=>x(f.id),style:{...Y.checkbox,...f.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:f.done&&o.jsx(wt,{size:12,color:"#fff",strokeWidth:3})}),o.jsxs("div",{children:[o.jsx("div",{style:Y.reviewTopic,children:f.topic}),o.jsxs("span",{style:{...Y.stageTag,background:((T=Ne[f.pillar])==null?void 0:T.soft)||"rgba(0,0,0,0.05)",color:F},children:["Review ",f.stage,"/",f.total]})]})]},f.id)})]})]}),o.jsx(so,{toasts:R,onUndo:B,onDismiss:M})]})}const Y={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},addBox:{background:"var(--surface)",borderRadius:12,padding:16,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},addRow:{display:"flex",gap:8,alignItems:"center"},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",minWidth:0},select:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 10px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},section:{marginBottom:20},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},reviewCard:{display:"flex",alignItems:"center",gap:12,background:"var(--surface)",borderRadius:10,padding:"12px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},checkbox:{width:22,height:22,borderRadius:6,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,padding:0},reviewTopic:{fontSize:13.5,fontWeight:600,marginBottom:4},reviewMeta:{display:"flex",alignItems:"center",gap:8},stageTag:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10},missedTag:{fontSize:11,color:"#C2536B",fontWeight:600},topicCard:{background:"var(--surface)",borderRadius:12,padding:"13px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},topicHead:{display:"flex",alignItems:"center",gap:8,marginBottom:10},dot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},topicName:{fontSize:14,fontWeight:600,flex:1},topicPillar:{fontSize:11,color:"var(--text-3)",fontWeight:500},topicProgress:{fontSize:11,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:10},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},reviewDots:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},reviewDot:{width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",fontSize:11,fontWeight:700,padding:0},learnedDate:{fontSize:11,color:"var(--text-3)",marginLeft:"auto"},cementedToggle:{display:"flex",alignItems:"center",gap:8,border:"none",background:"none",cursor:"pointer",fontSize:13,fontWeight:700,color:"var(--text-2)",padding:"4px 0",fontFamily:"inherit",marginBottom:8},empty:{fontSize:13,color:"var(--text-3)",padding:"16px 0",textAlign:"center"},calCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{border:"none",background:"none",fontSize:20,cursor:"pointer",color:"var(--text-2)",padding:"0 6px",lineHeight:1},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4},calDay:{aspectRatio:"1",border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,fontSize:12,cursor:"pointer",fontFamily:"inherit",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:1,position:"relative",padding:2},calBadge:{fontSize:9,fontWeight:800,borderRadius:6,padding:"0 4px",lineHeight:"14px",minWidth:14,textAlign:"center"},dayDetail:{marginTop:16,paddingTop:16,borderTop:"1px solid var(--border)"},dayDetailTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10}},To=[{id:1,title:"Regular Habits",cards:[{id:1,text:"1. I always do everything I need to do, when I need to do it. "},{id:2,text:"2. I never argue or let my emotions work against me. "},{id:3,text:"3. I have a good memory. I easily and automatically remember any name or anything that is important to me. "},{id:4,text:"4. I eat only what I should. "},{id:5,text:"5. I am a good listener. I hear everything that is said. I am attentive, interested, and aware of everything that is going on around me. "},{id:6,text:"6. I have the courage to state my opinions. I take responsibility for myself and everything I say and do."},{id:7,text:"7. I never spend more than I earn. I am financially responsible, both for my present and for my future."},{id:8,text:"8. I set goals and I follow them. I set my sights, take the appropriate action, and achieve my goals."},{id:9,text:"9. I spend time with my family and my loved ones. I enjoy sharing their lives with mine and my life with theirs."}]},{id:2,title:"Motivational",cards:[{id:1,text:"1. I can do anything I believe I can do. I’ve got it and every day I get more of it. I have talent, skills, and ability"},{id:2,text:"2. I set goals and I reach them. I know what I want out of life. I go after it and I get it. "},{id:3,text:"3. People like me, and I feel good about myself. I have a sense of pride in whoa am and I believe in myself. Nothing seems to stop me. I have a lot of determination. "},{id:4,text:"4. I turn problems into advantages. I find possibilities in things that other people never give a chance."},{id:5,text:"5. I have a lot of energy––I am very alive. I enjoy life and I can tell it and so can others"},{id:6,text:"6. I keep myself up, looking ahead, and liking it. I know that I can accomplish anything I choose, and I refuse to let anything negative hold me back or stand in my way. I am not afraid of anything or anyone. I have strength, power, conviction, and confidence. "},{id:7,text:"7. I like challenges and I meet them head on, face to face––today especially. I am on top of the world and I’m going for it. "},{id:8,text:"8. I have a clear picture in my mind of what I want. I can see it in front of me. "},{id:9,text:"9. I know what I want and I know how to get it. I know that it’s all up to me and I know I can do it. Roadblocks don’t bother me. They just mean that I am alive and running, and I’m not going to stand still for anything. "},{id:10,text:"10. I trust myself I’ve got what it takes––plenty of it––and I know how to use it. "},{id:11,text:"11. Today, more than ever. Today I am unstoppable. I’ve got myself together and I’m getting more together every day. And today––look out world, here I come. "},{id:12,text:"12. Limitations? I don’t even recognize them as limitations. There is no challenge I can’t conquer; there is no wall I can’t climb over. "},{id:13,text:"13. There is no problem I can’t defeat or turn around and make it work for me. I stand tall. I am honest and sincere. I like to deal with people and they like me. "},{id:14,text:"14. I think well; I think clearly. I am organized; I am in control of myself, and everything about me. I call my shots and no one has to call them for me. I never blame anyone else for the circumstances of my life. "},{id:15,text:"15. I accept my failings and move past them as easily as I accept the rewards for my victories. I never demand perfection of myself, but I expect the very best of what I have to give––and that’s what I get. I never give myself excuses. "},{id:16,text:"16. I get things done on time and in the right way. Today I have the inner strength to do more than ever. I am an exceptional human being. "},{id:17,text:"17. My goals and my incredible belief in myself turn my goals into reality. I have the power to live my dreams."},{id:18,text:"18.  I believe in them like I believe in myself. And that belief is so strong that there is nothing that diminishes my undefeatable spirit. "}]},{id:3,title:"Organized planning",cards:[{id:1,text:"1. I am organized and in control of my life. I am in control of myself, my thoughts, my time, my actions, and my future. "},{id:2,text:"2. I know what to do and when to do it, and I do everything I need to do, when I need to do it. "},{id:3,text:"3. I program my mind to make the maximum use of my time. I am in control of my time and how to use it. I like being organized, efficient, and on top of things."},{id:4,text:"4. Controlling my time keeps me that way. "},{id:5,text:"5. I never waste time––I always “plan” time. And because I plan my time, I always have time to do the things I choose to do. "},{id:6,text:"6. Each day I become more organized and in control of all areas of my life––at home, at work, in my mind and in my thoughts, in everything that I do. "},{id:7,text:"7. I am very well organized. Each night I make a list of things I need to do the next day. I set my priorities and I follow them. "},{id:8,text:"8. I am always on time. I am always right where I need to be, exactly when I need to be there. "},{id:9,text:"9. Being on time is easy for me and the more I control my time and the more organized I become, the easier it is. "},{id:10,text:"10. I am in control of my feelings, my emotions, my attitudes, and my needs. I control them; they do not control me. "},{id:11,text:"11. I have the winning vote in the outcome of my own actions. And I choose to live my life by choice, not chance. Therefore, I take the time to take control."},{id:12,text:"12. I have an organized and orderly mind. Because I think in an organized way, I conduct my life in an organized manner. "},{id:13,text:"13. I think in the most positive and productive way at all times and in all things. The way I think is the way I live––and I think “right.” "},{id:14,text:"14. I am the director of my destiny. I know where I am going and I know why I am going there. My earthly life is in my hands and in my control. "},{id:15,text:"15. I control my goals and the achievement of my goals. I organize my goals by writing each of them down, along with the steps I need to reach them. One of the reasons for my success is that my goals are clearly defined and organized."},{id:16,text:"16. I am in complete control of what I think and how I think. Therefore, I choose to think only those thoughts which help me and which are of genuine benefit to me."}]},{id:4,title:"Solving Problems",cards:[{id:1,text:"1. I’m good at solving problems. I like challenges and I meet them head on. "},{id:2,text:"2. Problems are my teachers. They help me to learn and grow. Without them, I would be going nowhere. With them, I am moving forward in the direction of my own goals. "},{id:3,text:"3. There is no problem which I cannot conquer. I am strong in mind, body, and spirit. My will, my strength, and my determination are always greater than any problem I face."},{id:4,text:"4. When I meet a new problem, I do not see the problem as my enemy. I know that finding the solution to the problem will move me forward in my own personal growth."},{id:5,text:"5. Because I know that problems are a key ingredient in my spiritual and mental education and preparation, I recognize that all problems are important to me. "},{id:6,text:"6. I do not fear problems, I solve them. I do not ignore problems, I confront them. I do not avoid problems, I conquer them. "},{id:7,text:"7. I know that every problem holds within itself the keys to its own solution. Therefore, the better I understand the problem, the clearer I am able to see its solution. "},{id:8,text:"8. Having problems is not a problem for me. I am confident, self-assured, positive, and determined. I always know that I am going to overcome any problem I encounter––and I always do. "},{id:9,text:"9. I am good at breaking large obstacles down into smaller pieces that are easier to handle. And I never make any problem appear to be larger than it actually is. "},{id:10,text:"10. I never worry. I turn “worry time” into positive, constructive, “solution time.” I keep my mind alert and open to all solutions—and solutions come quickly and easily to me. "},{id:11,text:"11. I have learned to recognize that many problems carry with them benefits and potential opportunities which would not have presented themselves had the problem not occurred in the first place. "},{id:12,text:"12. I do not seek to live a life which is free from all problems. Instead, I choose to live a life of finding solutions and enjoying the benefits which those solutions create."},{id:13,text:"13. Challenge, conquer, solution, and win are words which I live by daily. Challenges are opportunities. Conquering them is the inevitable outcome. "},{id:14,text:"14. “Solutions” are the stepping stones to my success, and “Winning” is my way of life."}]},{id:5,title:"Self Esteem",cards:[{id:1,text:"1. I really am very special. I like who I am and I feel good about myself. "},{id:2,text:"2. Although I always work to improve myself and I get better every day, I like who I am today. And tomorrow, when I’m even better, I’ll like myself then, too. "},{id:3,text:"3. It’s true that there really is no one else like me in the entire world. There never was another me before, and there will never be another me again. "},{id:4,text:"4. I am unique––from the top of my head to the bottom of my feet. In some ways I may look and act and sound like some others––but I am not them. I am me."},{id:5,text:"5. I wanted to be somebody––and now I know I am I would rather be me than anyone else in the world. "},{id:6,text:"6. I like how I feel and I like how I think and I like how I do things. I approve of me and I approve of who I am."},{id:7,text:"7. I have many beautiful qualities about me. I have talents and skills and abilities. I even have talents that I don’t even know about yet. And I am discovering new talents inside myself all the time. "},{id:8,text:"8. I am positive. I am confident. I radiate good things. If you look closely, you can even see a glow around me."},{id:9,text:"9. I am full of life. I like life and I’m glad to be alive. I am a very special person, living at a very special time. "},{id:10,text:"10. I am intelligent. My mind is quick and alert and clever and fun. I think good thoughts, and my mind makes things work right for me. "},{id:11,text:"11. I have a lot of energy and enthusiasm and vitality. I am exciting and I really enjoy being me. "},{id:12,text:"12. I like to be around other people and other people like to be around me. People like to hear what I have to say and know what I have to think. "},{id:13,text:"13. I smile a lot. I am happy on the inside and I am happy on the outside. "},{id:14,text:"14. I am interested in many things. I appreciate all the blessings I have, and the things that I learn, and all the things I will learn today and tomorrow and forever––just as long as I am. "},{id:15,text:"15. I am warm, sincere, honest, and genuine. I am all of these things and more. And all of these things are me. I like who I am, and I’m glad to be me."}]},{id:6,title:"Self-Responsibility",cards:[{id:1,text:"1. I take full responsibility for everything about me––even the thoughts that I think. I am in control of the vast resources of my own mind."},{id:2,text:"2. I alone am responsible for what I do and what I tell myself about me. No one can share this responsibility with me. "},{id:3,text:"3. I also allow others to accept their responsibilities far themselves and I do not try to accept their responsibilities for them. "},{id:4,text:"4. I enjoy being responsible. It puts me in charge of being me––and that’s a challenge I enjoy. "},{id:5,text:"5. I allow no one else, at any time, to assume control or responsibility over my life or over anything that I do. My responsibility to others is an extension of my own responsibility to myself. "},{id:6,text:"6. I choose to leave nothing about me up to chance. When it comes to me––and anything in my life––I choose to CHOOSE. "},{id:7,text:"7. My choices are mine alone to make for myself. I do not, at any time, allow anyone else to make my choices for me. And I accept full responsibility for every choice and decision I make. "},{id:8,text:"8. I always meet all of the obligations which I accept. And I accept no obligations which I will not meet. "},{id:9,text:"9. I am trustworthy. I can be counted on. I have accepted winning responsibility for myself––and I always live up to the responsibilities I accept. "},{id:10,text:"10. There is no they on whom I lay the blame, or with whom I share my own personal responsibilities. I have learned the great secret of mastering my own destiny. I have learned that “they” is “me.” "},{id:11,text:"11. I have no need to make excuses and no one needs to carry my responsibility for me. I gladly carry my own weight––and I carry it well. "},{id:12,text:"12. Each day I acknowledge and accept the responsibility––not only for my own actions––but also for my emotions, my thoughts, and my attitude. "},{id:13,text:"13. I accept the responsibility for living my life in a way which creates my strengths, my happiness, my positive, healthy beliefs, and for my past, my present, and my future."}]},{id:7,title:"Freedom from worry",cards:[{id:1,text:"1. I never worry. Instead of worrying, I find solutions and I act on them. "},{id:2,text:"2. My mind is constantly in tune with the positive. It is bright, cheerful, enthusiastic, and full of good, positive thoughts and ideas. "},{id:3,text:"3. I am able to relax easily and comfortably in my body and in my mind. I am calm, confident, and self-assured. "},{id:4,text:"4. My mind is orderly and well-organized. I consciously choose what I think and I always choose those thoughts which are the most positive and beneficial for me. "},{id:5,text:"5. All of my thoughts create healthiness within me. My mind dwells only on those thoughts which create more harmony, balance, and well-being within me and in the world around me. "},{id:6,text:"6. I automatically, and always, think in a decisive and determined way. "},{id:7,text:"7. I am full of resolution and the absolute assurance of the best possible outcome in everything that I do. "},{id:8,text:"8. I choose to look at the world around me in the bright, healthy light of optimism and self-assurance. "},{id:9,text:"9. I do only those things which are best for me. I create the best within myself, I attract the best in others, and I find the best in the world around me. "},{id:10,text:"10. I willingly, and without fail, take care of the duties and obligations which I have accepted for myself."},{id:11,text:"11. I commit only to those responsibilities which I know I can fulfill. "},{id:12,text:"12. I focus the attention of my mind only on those things that I can do something about. If I cannot affect it or direct it––I accept it. "},{id:13,text:"13. I keep my mind too busy thinking good, healthy, positive, constructive, and productive thoughts to ever have any time for worry. "},{id:14,text:"14. I control the thoughts I choose. No thought, at any time, can dwell in my mind without my approval or permission. I never worry."}]},{id:8,title:"Eating Habits",cards:[{id:1,text:"1. I am in control of myself in every way––at all times and in all situations. "},{id:2,text:"2. Each time I sit down to eat I reaffirm my determination to achieve my goal. By eating right, and never giving in, I am reaching the weight I want. "},{id:3,text:"3. Whether eating in or eating out, I really enjoy eating less. "},{id:4,text:"4. I never feel the need to finish the food in front of me. I eat only what I should––and never one bite more. "},{id:5,text:"5. One way to weight-loss that’s easy and works, is less food on my plate, and less on my fork. "},{id:6,text:'6. By ordering less when I eat out, and by serving myself smaller portions at home, I keep myself aware of the importance of staying with my goal––each and every day. “Less on my plate means less on my waist."'},{id:7,text:"7. When I sit down to eat, at no time do I allow anyone else to influence, tempt, or discourage me in any negative way."},{id:8,text:"8. What I eat, and the goals I reach, are up to me. And I give no one the right to hinder or control my success."},{id:9,text:"9. Although others may benefit from my success, I. am achieving my weight-loss goals for my own personal reasons––for myself, my life, my future, and my own personal well-being."},{id:10,text:"10. I am never, at any time, tempted to take one bite more than I should. I am strong, I am capable of reaching my goal, and I am doing it."},{id:11,text:"11. Being in situations which put a lot of food in front of me is not a problem to me now. I simply say “No” to the food and “Yes” to my success."},{id:12,text:"12. I enjoy sitting down to eat. Each time I do I conquer my past, and I create a trimmer, happier, more self-confident future in front of me. "},{id:13,text:"13. When I sit down to eat, I do not need someone else to remind me of my goal, or to keep me from eating something I should not. I take full responsibility for myself, and no one else has to do it for me. "},{id:14,text:"14. Controlling my weight, and my appetite, is easy for me now. I enjoy smaller portions, smaller bites, and a slower, healthier, more relaxed way of eating. "},{id:15,text:"15. I have set my goal and I am staying with it. I have turned mealtime into “achievement time.”"}]}],Pd=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#3A7CA5","#4C9A6B"],pi=t=>Pd[t%Pd.length],hf=t=>t+"1A",wu="anvil_affirmation_favs",yf=()=>{try{return new Set(JSON.parse(localStorage.getItem(wu)||"[]"))}catch{return new Set}};function xf(){const[t,e]=k.useState(0),[r,n]=k.useState(0),[s,i]=k.useState(yf);k.useEffect(()=>{localStorage.setItem(wu,JSON.stringify([...s]))},[s]);const l=(I,b)=>`${I}#${b.id}`,a=t==="FAV"?To.flatMap((I,b)=>I.cards.filter(c=>s.has(l(I.title,c))).map(c=>({...c,color:pi(b),title:I.title}))):To[t].cards.map(I=>({...I,color:pi(t),title:To[t].title})),d=a.length,g=Math.min(r,Math.max(0,d-1)),m=a[g],v=I=>{e(I),n(0)},p=k.useCallback(()=>n(I=>Math.max(0,I-1)),[]),j=k.useCallback(()=>n(I=>Math.min(d-1,I+1)),[d]);k.useEffect(()=>{const I=b=>{b.key==="ArrowLeft"&&p(),b.key==="ArrowRight"&&j()};return window.addEventListener("keydown",I),()=>window.removeEventListener("keydown",I)},[p,j]);const S=I=>i(b=>{const c=new Set(b);return c.has(I)?c.delete(I):c.add(I),c}),w=m?m.color:"#8268B0";return o.jsxs("div",{style:mt.page,children:[o.jsxs("div",{style:mt.head,children:[o.jsx("div",{style:mt.eyebrow,children:"Anvil · Affirmations"}),o.jsx("h1",{style:mt.h1,children:"Affirmations"}),o.jsx("div",{style:mt.subhead,children:"One at a time — read it, mean it."})]}),o.jsxs("div",{style:mt.filterBar,children:[To.map((I,b)=>{const c=t===b,u=pi(b);return o.jsxs("button",{onClick:()=>v(b),style:{...mt.chip,...c?{background:u,color:"#fff",borderColor:u}:{}},children:[o.jsx("span",{style:{...mt.catDot,background:c?"#fff":u}})," ",I.title," ",o.jsx("span",{style:mt.chipCount,children:I.cards.length})]},I.title)}),o.jsxs("button",{onClick:()=>v("FAV"),style:{...mt.chip,...t==="FAV"?{background:"#C9A227",color:"#fff",borderColor:"#C9A227"}:{}},children:[o.jsx(Ho,{size:12,fill:t==="FAV"?"#fff":"none"})," Favorites ",o.jsx("span",{style:mt.chipCount,children:s.size})]})]}),d===0?o.jsxs("div",{style:mt.empty,children:[o.jsx(Ho,{size:22,color:"#C3BFB5"}),o.jsx("div",{children:"No favorites yet — tap the star on a card to save it here."})]}):o.jsxs("div",{style:mt.viewer,children:[o.jsxs("div",{style:{...mt.card,borderTop:`4px solid ${w}`},children:[o.jsx("div",{style:{...mt.cardCat,color:w,background:hf(w)},children:m.title}),o.jsx("button",{onClick:()=>S(l(m.title,m)),style:{...mt.favBtn,color:s.has(l(m.title,m))?"#C9A227":"#C3BFB5"},title:"Favorite",children:o.jsx(Ho,{size:20,fill:s.has(l(m.title,m))?"#C9A227":"none"})}),o.jsx(Sm,{size:30,color:w,style:{opacity:.25}}),o.jsx("p",{style:mt.cardText,children:m.text.trim()})]}),o.jsxs("div",{style:mt.navRow,children:[o.jsxs("button",{onClick:p,disabled:g===0,style:{...mt.navBtn,...g===0?mt.navBtnDisabled:{}},children:[o.jsx(no,{size:18})," Back"]}),o.jsxs("span",{style:{...mt.counter,color:w},children:[g+1," ",o.jsxs("span",{style:mt.counterTotal,children:["/ ",d]})]}),o.jsxs("button",{onClick:j,disabled:g===d-1,style:{...mt.navBtn,...g===d-1?mt.navBtnDisabled:{}},children:["Next ",o.jsx(on,{size:18})]})]}),o.jsx("div",{style:mt.dots,children:a.map((I,b)=>o.jsx("button",{onClick:()=>n(b),style:{...mt.dot,...b===g?{background:w,transform:"scale(1.5)"}:{}},title:`${b+1}`},b))})]})]})}const mt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:22},chip:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipCount:{fontSize:11,fontWeight:700,opacity:.7},catDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},empty:{display:"flex",flexDirection:"column",alignItems:"center",gap:10,fontSize:13.5,color:"var(--text-3)",padding:"56px 12px",textAlign:"center",background:"var(--surface)",borderRadius:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},viewer:{display:"flex",flexDirection:"column",alignItems:"center"},card:{position:"relative",background:"var(--surface)",borderRadius:16,padding:"40px 32px 44px",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",width:"100%",minHeight:240,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",boxSizing:"border-box"},cardCat:{position:"absolute",top:16,left:16,fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:12,textTransform:"uppercase",letterSpacing:"0.04em"},favBtn:{position:"absolute",top:14,right:14,border:"none",background:"none",cursor:"pointer",padding:4,display:"grid",placeItems:"center"},cardText:{fontSize:21,lineHeight:1.55,margin:"14px 0 0",fontWeight:500,color:"var(--text)",fontFamily:"'Fraunces',Georgia,serif",maxWidth:560},navRow:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",maxWidth:420,marginTop:22},navBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},counter:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},counterTotal:{fontSize:13,fontWeight:600,color:"var(--text-3)"},dots:{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center",marginTop:20,maxWidth:480},dot:{width:7,height:7,borderRadius:"50%",border:"none",background:"var(--border)",cursor:"pointer",padding:0,transition:"transform 0.12s"}},se={financial:{label:"Financial",leaf:"#C9A227",shape:"round"},academic:{label:"Academic",leaf:"#3A7CA5",shape:"pine"},relationship:{label:"Relationship",leaf:"#C2536B",shape:"round"},spiritual:{label:"Spiritual",leaf:"#8268B0",shape:"tall"},health:{label:"Health",leaf:"#4C9A6B",shape:"round"}},Jn="health";function ya({species:t=Jn,progress:e=1,withered:r=!1,size:n=200}){const s=Math.max(0,Math.min(1,e)),i=se[t]||se[Jn],l=r?"#8A7B63":"#7A5A3C",a=r?"#A99C84":i.leaf,d=r?"#8F8268":a,g=14+s*46,m=112-g,v=s>.14,p=v?8+s*30:0;return o.jsxs("svg",{viewBox:"0 0 120 120",width:n,height:n,style:{display:"block"},children:[o.jsx("ellipse",{cx:"60",cy:"114",rx:20+s*14,ry:"5",fill:"rgba(38,36,31,0.08)"}),!v&&o.jsxs("g",{transform:`translate(60 ${112-s*40})`,children:[o.jsx("path",{d:"M0 8 C0 8 0 -2 0 -6",stroke:"#4C9A6B",strokeWidth:"2.5",fill:"none"}),o.jsx("ellipse",{cx:"-5",cy:"-4",rx:"6",ry:"3.5",fill:"#4C9A6B",transform:"rotate(-30 -5 -4)"}),o.jsx("ellipse",{cx:"5",cy:"-4",rx:"6",ry:"3.5",fill:"#5BB07E",transform:"rotate(30 5 -4)"})]}),v&&o.jsxs(o.Fragment,{children:[o.jsx("rect",{x:60-(2+s*2.5),y:m,width:(2+s*2.5)*2,height:g,rx:"2",fill:l}),i.shape==="pine"?o.jsxs(o.Fragment,{children:[o.jsx("polygon",{points:`60,${m-p*2.2} ${60-p},${m+4} ${60+p},${m+4}`,fill:a}),o.jsx("polygon",{points:`60,${m-p*3} ${60-p*.8},${m-p*.7} ${60+p*.8},${m-p*.7}`,fill:d})]}):i.shape==="tall"?o.jsxs(o.Fragment,{children:[o.jsx("ellipse",{cx:"60",cy:m-p*.3,rx:p*.78,ry:p*1.55,fill:a}),o.jsx("ellipse",{cx:"60",cy:m-p*.9,rx:p*.5,ry:p*1,fill:d,opacity:"0.9"})]}):o.jsxs(o.Fragment,{children:[o.jsx("circle",{cx:"60",cy:m,r:p,fill:a}),o.jsx("circle",{cx:60-p*.7,cy:m+p*.3,r:p*.78,fill:a}),o.jsx("circle",{cx:60+p*.7,cy:m+p*.3,r:p*.78,fill:d}),o.jsx("circle",{cx:"60",cy:m-p*.5,r:p*.8,fill:d,opacity:"0.92"})]})]})]})}function kf({species:t}){return o.jsx(ya,{species:t,progress:1,size:56})}const wf=[{id:"day",label:"Day"},{id:"week",label:"Week"},{id:"month",label:"Month"},{id:"year",label:"Year"}],ze=t=>t>=60?`${Math.floor(t/60)}h ${t%60}m`:`${t}m`,Sf=t=>{const e=t<12?"am":"pm",r=t%12===0?12:t%12;return`${String(r).padStart(2,"0")} ${e}`};function jf(t){const e=t<=60?10:t<=120?20:t<=300?60:120,r=Math.max(60,Math.ceil((t||1)/e)*e),n=[];for(let s=0;s<=r;s+=e)n.push(s);return{max:r,ticks:n}}const Su=t=>{const e=new Date(t);return e.setHours(0,0,0,0),e},Cf=t=>{const e=Su(t),r=(e.getDay()+6)%7;return e.setDate(e.getDate()-r),e},If=t=>new Date(t.getFullYear(),t.getMonth(),1),zf=t=>new Date(t.getFullYear(),0,1);function Tf(t,e){if(t==="day"){const s=Su(e);return{start:s,end:new Date(+s+864e5),prev:new Date(+s-864e5),prev2:new Date(+s-2*864e5)}}if(t==="week"){const s=Cf(e);return{start:s,end:new Date(+s+7*864e5),prev:new Date(+s-7*864e5),prev2:new Date(+s-14*864e5)}}if(t==="month"){const s=If(e),i=e.getFullYear(),l=e.getMonth();return{start:s,end:new Date(i,l+1,1),prev:new Date(i,l-1,1),prev2:new Date(i,l-2,1)}}const r=e.getFullYear();return{start:zf(e),end:new Date(r+1,0,1),prev:new Date(r-1,0,1),prev2:new Date(r-2,0,1)}}function Ef({sessions:t=[],onBack:e}){const[r,n]=k.useState("day"),s=new Date,{start:i,end:l,prev:a,prev2:d}=Tf(r,s),g=N=>new Date(N.started_at||N.created_at),m=t.filter(N=>N.completed),v=(N,z,f)=>{const F=g(N);return F>=z&&F<f},p=(N,z)=>m.filter(f=>v(f,N,z)).reduce((f,F)=>f+(F.actual_min||0),0),j=m.filter(N=>v(N,i,l)),S=j.reduce((N,z)=>N+(z.actual_min||0),0),w=p(a,i),I=p(d,a),b=j.length,c=Array(24).fill(0);j.forEach(N=>{c[g(N).getHours()]+=N.actual_min||0});const u=Math.max(...c,0),x=jf(u),h={};j.forEach(N=>{const z=se[N.tree]?N.tree:Jn;h[z]=(h[z]||0)+(N.actual_min||0)});const C=Object.entries(h).map(([N,z])=>({name:se[N].label,min:z,color:se[N].leaf})).sort((N,z)=>z.min-N.min),R=w>0?Math.round((S-w)/w*100):S>0?100:0,B=R>0?xu:R<0?yu:xm,M=R>0?"#4C9A6B":R<0?"#C2536B":"#9A968C",_={day:"yesterday",week:"last week",month:"last month",year:"last year"}[r],et={day:"2 days ago",week:"2 weeks ago",month:"2 months ago",year:"2 years ago"}[r],rt=54,Z=22,dt=2*Math.PI*rt;let G=0;return o.jsxs("div",{style:V.page,children:[o.jsxs("div",{style:V.topbar,children:[o.jsxs("button",{onClick:e,style:V.back,children:[o.jsx(sm,{size:18})," Grove"]}),o.jsx("h1",{style:V.h1,children:"Insights"}),o.jsx("div",{style:{width:76}})]}),o.jsx("div",{style:V.rangeBar,children:wf.map(N=>o.jsx("button",{onClick:()=>n(N.id),style:{...V.rangeBtn,...r===N.id?V.rangeOn:{}},children:N.label},N.id))}),o.jsxs("div",{style:V.headline,children:[o.jsxs("div",{style:V.bigStat,children:[o.jsx("div",{style:V.bigVal,children:ze(S)}),o.jsxs("div",{style:V.bigLbl,children:["Focused this ",r]})]}),o.jsxs("div",{style:V.bigStat,children:[o.jsx("div",{style:V.bigVal,children:b}),o.jsx("div",{style:V.bigLbl,children:"Trees"})]})]}),o.jsxs("div",{style:V.card,children:[o.jsxs("div",{style:V.cardHead,children:[o.jsxs("div",{style:V.cardTitle,children:["Your forest this ",r]}),o.jsx("div",{style:V.cardHint,children:"Each tree is a completed session — bigger means longer focus"})]}),o.jsx(Ff,{sessions:j}),o.jsxs("div",{style:V.forestNumber,children:[b," ",b===1?"tree":"trees"," · ",ze(S)," focused"]})]}),o.jsx(mi,{title:"Focus distribution",hint:"Minutes focused at each time of day",children:u===0?o.jsx(Od,{}):o.jsx(Af,{hours:c,axis:x})}),o.jsx(mi,{title:"Pillar distribution",hint:"How your focus splits across the five trees",children:C.length===0?o.jsx(Od,{}):o.jsxs("div",{style:V.donutWrap,children:[o.jsxs("svg",{viewBox:"0 0 140 140",width:"150",height:"150",style:{flexShrink:0},children:[C.map(N=>{const z=N.min/(S||1)*dt,f=o.jsx("circle",{cx:"70",cy:"70",r:rt,fill:"none",stroke:N.color,strokeWidth:Z,strokeDasharray:`${z} ${dt-z}`,strokeDashoffset:-G,transform:"rotate(-90 70 70)"},N.name);return G+=z,f}),o.jsx("text",{x:"70",y:"66",textAnchor:"middle",style:V.donutCenterTop,children:ze(S)}),o.jsx("text",{x:"70",y:"82",textAnchor:"middle",style:V.donutCenterSub,children:"total"})]}),o.jsx("div",{style:V.legend,children:C.map(N=>o.jsxs("div",{style:V.legendRow,children:[o.jsx("span",{style:{...V.legendDot,background:N.color}}),o.jsx("span",{style:V.legendName,children:N.name}),o.jsxs("span",{style:V.legendVal,children:[ze(N.min)," · ",Math.round(N.min/(S||1)*100),"%"]})]},N.name))})]})}),o.jsxs(mi,{title:"Focus trend",hint:`This ${r} vs the previous two`,children:[o.jsxs("div",{style:V.trend3,children:[o.jsxs("div",{style:V.trendCol,children:[o.jsx("div",{style:V.trendVal,children:ze(S)}),o.jsxs("div",{style:V.trendLbl,children:["This ",r]})]}),o.jsxs("div",{style:V.trendCol,children:[o.jsx("div",{style:{...V.trendVal,color:"var(--text-2)"},children:ze(w)}),o.jsx("div",{style:V.trendLbl,children:_})]}),o.jsxs("div",{style:V.trendCol,children:[o.jsx("div",{style:{...V.trendVal,color:"var(--text-3)"},children:ze(I)}),o.jsx("div",{style:V.trendLbl,children:et})]})]}),o.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:o.jsxs("div",{style:{...V.trendBadge,color:M,background:M+"1A"},children:[o.jsx(B,{size:15})," ",R>0?"+":"",R,"% vs ",_]})}),o.jsx(Df,{items:[{label:`This ${r}`,value:S,color:"#4C9A6B"},{label:_,value:w,color:"var(--text-3)"},{label:et,value:I,color:"var(--text-3)"}]})]})]})}const Bf=t=>t===0?"12a":t<12?`${t}a`:t===12?"12p":`${t-12}p`;function Af({hours:t,axis:e}){return o.jsxs("div",{children:[o.jsxs("div",{style:V.vcPlot,children:[e.ticks.map(r=>o.jsxs("div",{style:{...V.vcGridRow,bottom:`${r/e.max*100}%`},children:[o.jsx("span",{style:V.vcYLabel,children:r}),o.jsx("div",{style:V.vcGridLine})]},r)),o.jsx("div",{style:V.vcBars,children:t.map((r,n)=>o.jsx("div",{style:V.vcCell,title:`${Sf(n)} · ${r} min`,children:o.jsx("div",{style:{...V.vcBar,height:r>0?`max(3px, ${r/e.max*100}%)`:0}})},n))})]}),o.jsx("div",{style:V.vcXAxis,children:t.map((r,n)=>o.jsx("div",{style:V.vcXCell,children:n%3===0?Bf(n):""},n))}),o.jsx("div",{style:V.vcYTitle,children:"minutes focused, by hour of day"})]})}function Ff({sessions:t}){if(!t.length)return o.jsx("div",{style:V.sceneEmpty,children:"No trees yet this period. 🌱"});const r=t.slice(0,80),n=t.length-r.length,s=i=>Math.round(Math.max(40,Math.min(88,40+(i||0)*.6)));return o.jsxs("div",{children:[o.jsx("div",{style:V.scene,children:r.map(i=>o.jsx("div",{style:V.sceneTree,title:`${i.label||"Focus"} · ${ze(i.actual_min||i.duration_min)}`,children:o.jsx(ya,{species:i.tree,progress:1,size:s(i.actual_min||i.duration_min)})},i.id))}),n>0&&o.jsxs("div",{style:V.overflow,children:["+",n," more trees"]})]})}function mi({title:t,hint:e,children:r}){return o.jsxs("div",{style:V.card,children:[o.jsxs("div",{style:V.cardHead,children:[o.jsx("div",{style:V.cardTitle,children:t}),e&&o.jsx("div",{style:V.cardHint,children:e})]}),r]})}function Od(){return o.jsx("div",{style:V.empty,children:"No focus sessions in this period yet. 🌱"})}function Df({items:t}){const e=Math.max(1,...t.map(r=>r.value));return o.jsx("div",{style:V.tbWrap,children:t.map(r=>o.jsxs("div",{style:V.tbRow,children:[o.jsx("div",{style:V.tbLbl,children:r.label}),o.jsx("div",{style:V.tbTrack,children:o.jsx("div",{style:{...V.tbBar,width:`${r.value/e*100}%`,background:r.color}})}),o.jsx("div",{style:V.tbVal,children:ze(r.value)})]},r.label))})}const V={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"20px 16px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:720,margin:"0 auto"},topbar:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},back:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},h1:{fontSize:20,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},rangeBar:{display:"flex",gap:6,background:"var(--surface)",padding:5,borderRadius:12,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},rangeBtn:{flex:1,border:"none",background:"none",padding:"9px 0",borderRadius:8,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},rangeOn:{background:"var(--accent-strong)",color:"#fff"},headline:{display:"flex",gap:12,marginBottom:16},bigStat:{flex:1,background:"var(--surface)",borderRadius:14,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},bigVal:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em"},bigLbl:{fontSize:12,color:"var(--text-3)",marginTop:3,fontWeight:500},card:{background:"var(--surface)",borderRadius:16,padding:"18px 18px 20px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},cardHead:{marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardHint:{fontSize:12,color:"var(--text-3)",marginTop:2},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"24px 0"},scene:{display:"flex",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"center",gap:"0 2px",padding:"14px 8px 6px",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,minHeight:110,border:"1px solid var(--border)"},sceneTree:{lineHeight:0},sceneEmpty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"34px 0",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,border:"1px solid var(--border)"},overflow:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",marginTop:6,fontWeight:600},forestNumber:{textAlign:"center",marginTop:12,fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},vcPlot:{position:"relative",height:180,paddingLeft:30},vcGridRow:{position:"absolute",left:0,right:0,display:"flex",alignItems:"center",height:0},vcYLabel:{width:26,marginRight:4,textAlign:"right",fontSize:9,color:"var(--text-3)",fontWeight:600,flexShrink:0},vcGridLine:{flex:1,height:1,background:"#EEEBE4"},vcBars:{position:"absolute",left:30,right:0,top:0,bottom:0,display:"flex",alignItems:"flex-end",gap:1},vcCell:{flex:1,height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"center"},vcBar:{width:"72%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",transition:"height 0.3s"},vcXAxis:{display:"flex",marginLeft:30,marginTop:4},vcXCell:{flex:1,textAlign:"center",fontSize:8.5,color:"var(--text-3)",fontWeight:600,overflow:"hidden"},vcYTitle:{textAlign:"center",fontSize:9.5,color:"var(--text-3)",marginTop:6,letterSpacing:"0.06em",textTransform:"uppercase",fontWeight:600},donutWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap",justifyContent:"center"},donutCenterTop:{fontSize:16,fontWeight:800,fill:"var(--text)",fontFamily:"'Fraunces',Georgia,serif"},donutCenterSub:{fontSize:9,fill:"#9A968C",textTransform:"uppercase",letterSpacing:"0.08em"},legend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:11,height:11,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},legendVal:{fontSize:12,color:"var(--text-3)",fontWeight:600,flexShrink:0},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:56,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},Rf=[15,30,45,60,90],fi="anvil_grove_active",$d=t=>`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`,ps=t=>t>=60?`${Math.floor(t/60)}h ${t%60}m`:`${t}m`;function Mf(){const[t,e]=k.useState("timer"),[r,n]=k.useState("idle"),[s,i]=k.useState(15),[l,a]=k.useState(!1),[d,g]=k.useState(""),[m,v]=k.useState(Jn),[p,j]=k.useState(()=>localStorage.getItem("anvil_grove_deepfocus")!=="0"),[S,w]=k.useState(15*60),[I,b]=k.useState({sessions:[],stats:null}),c=k.useRef(null),u=k.useRef(null),x=k.useRef(!1),h=k.useCallback(async()=>{try{b(await H.getFocus())}catch{}},[]),C=k.useCallback(async(T,L)=>{if(!x.current){x.current=!0,localStorage.removeItem(fi);try{await H.createFocus({label:d.trim()||null,tree:m,duration_min:s,actual_min:L,completed:T,started_at:u.current,ended_at:new Date().toISOString()})}catch{}h()}},[d,m,s,h]),R=k.useCallback(()=>{if(r!=="running")return;const T=u.current?Math.round((Date.now()-new Date(u.current).getTime())/6e4):0;n("failed"),C(!1,Math.max(0,Math.min(s,T)))},[r,s,C]),B=k.useCallback(()=>{n("done"),w(0),C(!0,s)},[s,C]);k.useEffect(()=>{h();const T=JSON.parse(localStorage.getItem(fi)||"null");if(T&&T.endTime){const L=Math.round((T.endTime-Date.now())/1e3);i(T.duration),g(T.label||""),v(T.tree||"oak"),c.current=T.endTime,u.current=T.startedAt,L>0?(w(L),n("running")):(n("done"),x.current=!1,C(!0,T.duration))}},[]),k.useEffect(()=>{if(r!=="running")return;const T=()=>{const E=Math.round((c.current-Date.now())/1e3);if(E<=0){B();return}w(E)};T();const L=setInterval(T,250);return()=>clearInterval(L)},[r,B]),k.useEffect(()=>{if(r!=="running"||!p)return;const T=()=>{document.hidden&&R()};return document.addEventListener("visibilitychange",T),()=>document.removeEventListener("visibilitychange",T)},[r,p,R]);const M=()=>j(T=>{const L=!T;return localStorage.setItem("anvil_grove_deepfocus",L?"1":"0"),L}),_=()=>{x.current=!1,u.current=new Date().toISOString(),c.current=Date.now()+s*60*1e3,localStorage.setItem(fi,JSON.stringify({endTime:c.current,duration:s,label:d,tree:m,startedAt:u.current})),w(s*60),n("running")},et=()=>{n("idle"),w(s*60)},rt=T=>{a(!1),i(T),w(T*60)},Z=()=>{l||(a(!0),i(5),w(5*60))},dt=T=>{if(a(!0),T===""){i(0),w(0);return}const L=Math.max(1,Math.min(600,parseInt(T,10)||0));i(L),w(L*60)},G=s*60,N=r==="running"?1-S/G:r==="done"?1:0,z=130,f=2*Math.PI*z,F=f*(1-(r==="running"?N:r==="done"?1:0)),y=I.stats;return t==="stats"?o.jsx(Ef,{sessions:I.sessions,onBack:()=>e("timer")}):o.jsxs("div",{style:K.page,children:[o.jsxs("div",{style:K.head,children:[o.jsx("div",{style:K.eyebrow,children:"Anvil · Grove"}),o.jsx("h1",{style:K.h1,children:"Grove"}),o.jsx("div",{style:K.subhead,children:"Plant a tree, stay focused, grow your grove."}),o.jsxs("button",{onClick:()=>e("stats"),style:K.insightsBtn,disabled:r==="running",children:[o.jsx(lm,{size:15})," Insights"]})]}),y&&o.jsxs("div",{style:K.statRow,children:[o.jsx(Eo,{label:"Today",value:ps(y.today_minutes)}),o.jsx(Eo,{label:"Trees",value:y.trees}),o.jsx(Eo,{label:"Streak",value:`${y.streak}d`}),o.jsx(Eo,{label:"Success",value:`${y.success_rate}%`})]}),o.jsxs("div",{style:K.stage,children:[o.jsxs("div",{style:K.ringWrap,children:[o.jsxs("svg",{width:"300",height:"300",viewBox:"0 0 300 300",style:{position:"absolute",inset:0},children:[o.jsx("circle",{cx:"150",cy:"150",r:z,fill:"none",stroke:"var(--border)",strokeWidth:"10"}),o.jsx("circle",{cx:"150",cy:"150",r:z,fill:"none",stroke:r==="failed"?"#C2536B":"#4C9A6B",strokeWidth:"10",strokeLinecap:"round",strokeDasharray:f,strokeDashoffset:F,transform:"rotate(-90 150 150)",style:{transition:"stroke-dashoffset 0.4s linear"}})]}),o.jsx("div",{style:K.ringInner,children:o.jsx(ya,{species:m,progress:r==="idle"?0:N,withered:r==="failed",size:170})})]}),r==="idle"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{style:K.timeBig,children:$d(s*60)}),o.jsxs("div",{style:K.controls,children:[o.jsxs("div",{style:K.chips,children:[Rf.map(T=>o.jsxs("button",{onClick:()=>rt(T),style:{...K.chip,...!l&&s===T?K.chipOn:{}},children:[T,"m"]},T)),o.jsx("button",{onClick:Z,style:{...K.chip,...l?K.chipOn:{}},children:"Custom"})]}),l&&o.jsxs("div",{style:K.customRow,children:[o.jsx("input",{type:"number",min:"1",max:"600",inputMode:"numeric",autoFocus:!0,value:s||"",onChange:T=>dt(T.target.value),placeholder:"e.g. 50",style:K.customInput}),o.jsx("span",{style:K.customUnit,children:"minutes"})]}),o.jsx("input",{value:d,onChange:T=>g(T.target.value),placeholder:"What are you focusing on? (optional)",style:K.input,maxLength:60}),o.jsx("div",{style:K.treePick,children:Object.entries(se).map(([T,L])=>o.jsxs("button",{onClick:()=>v(T),title:L.label,style:{...K.treeBtn,...m===T?{borderColor:L.leaf,background:L.leaf+"1A"}:{}},children:[o.jsx("span",{style:{...K.treeDot,background:L.leaf}}),L.label]},T))}),o.jsxs("button",{onClick:M,style:K.toggleRow,children:[o.jsxs("div",{style:{textAlign:"left"},children:[o.jsx("div",{style:K.toggleTitle,children:"Deep Focus"}),o.jsx("div",{style:K.toggleHint,children:p?"Leaving the app kills the tree":"Tree survives until you give up"})]}),o.jsx("div",{style:{...K.switch,...p?K.switchOn:{}},children:o.jsx("div",{style:{...K.knob,...p?K.knobOn:{}}})})]}),o.jsx("button",{onClick:_,disabled:s<1,style:{...K.plantBtn,...s<1?{opacity:.5,cursor:"not-allowed"}:{}},children:"Plant tree"})]})]}),r==="running"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{style:K.timeBig,children:$d(S)}),o.jsx("div",{style:K.focusLabel,children:d.trim()||"Focusing…"}),o.jsx("div",{style:p?K.warn:K.warnSoft,children:p?"⚠ Deep Focus on — leaving this app will kill your tree.":"🌿 Relaxed mode — only Give up ends this session."}),o.jsx("button",{onClick:R,style:K.giveUp,children:"Give up"})]}),r==="done"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:K.resultTitle,children:["🌳 You grew a ",se[m].label," tree!"]}),o.jsxs("div",{style:K.resultSub,children:[ps(s)," of focus added to your grove."]}),o.jsx("button",{onClick:et,style:K.plantBtn,children:"Plant another"})]}),r==="failed"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{style:{...K.resultTitle,color:"#C2536B"},children:"Your tree withered."}),o.jsx("div",{style:K.resultSub,children:"You left before the timer finished. Try again?"}),o.jsx("button",{onClick:et,style:K.plantBtn,children:"Try again"})]})]}),o.jsx(_f,{sessions:I.sessions,onDelete:async T=>{await H.deleteFocus(T),h()}})]})}function Eo({label:t,value:e}){return o.jsxs("div",{style:K.stat,children:[o.jsx("div",{style:K.statValue,children:e}),o.jsx("div",{style:K.statLabel,children:t})]})}function _f({sessions:t,onDelete:e}){const r=t.filter(l=>l.completed);if(r.length===0)return o.jsx("div",{style:K.forestEmpty,children:"Your grove is empty. Plant your first tree above. 🌱"});const n={};for(const l of r){const a=(l.started_at||l.created_at||"").slice(0,10);(n[a]||(n[a]=[])).push(l)}const s=Object.keys(n).sort().reverse(),i=l=>{const a=new Date().toISOString().slice(0,10);return l===a?"Today":new Date(l+"T00:00").toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})};return o.jsxs("div",{style:K.forest,children:[o.jsxs("div",{style:K.forestHead,children:["Your Grove · ",r.length," trees"]}),s.map(l=>o.jsxs("div",{style:K.daySection,children:[o.jsxs("div",{style:K.dayLabel,children:[i(l)," · ",n[l].length]}),o.jsx("div",{style:K.treeGrid,children:n[l].map(a=>o.jsxs("div",{style:K.treeCard,title:`${a.label||"Focus"} · ${ps(a.actual_min)}`,onDoubleClick:()=>e(a.id),children:[o.jsx(kf,{species:a.tree}),o.jsx("div",{style:K.treeCardMin,children:ps(a.actual_min||a.duration_min)}),a.label&&o.jsx("div",{style:K.treeCardLabel,children:a.label})]},a.id))})]},l)),o.jsx("div",{style:K.forestHint,children:"Double-tap a tree to remove it."})]})}const K={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:820,margin:"0 auto"},head:{marginBottom:16,textAlign:"center"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},insightsBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginTop:12},statRow:{display:"flex",gap:10,justifyContent:"center",marginBottom:18,flexWrap:"wrap"},stat:{background:"var(--surface)",borderRadius:12,padding:"10px 18px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",minWidth:78},statValue:{fontSize:19,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},statLabel:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},stage:{background:"var(--surface)",borderRadius:18,padding:"28px 24px 32px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",display:"flex",flexDirection:"column",alignItems:"center",marginBottom:26},ringWrap:{position:"relative",width:300,height:300,display:"grid",placeItems:"center"},ringInner:{position:"relative",zIndex:1,display:"grid",placeItems:"center"},timeBig:{fontSize:40,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:6},focusLabel:{fontSize:14,color:"var(--text-2)",marginTop:2,fontWeight:500},warn:{fontSize:12,color:"#C2773B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},warnSoft:{fontSize:12,color:"#4C9A6B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},toggleRow:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:12,padding:"10px 14px",cursor:"pointer",fontFamily:"inherit",width:"100%"},toggleTitle:{fontSize:14,fontWeight:700,color:"var(--text)"},toggleHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},switch:{width:42,height:24,borderRadius:12,background:"var(--border)",flexShrink:0,padding:2,transition:"background 0.18s",boxSizing:"border-box"},switchOn:{background:"#4C9A6B"},knob:{width:20,height:20,borderRadius:"50%",background:"var(--surface)",boxShadow:"0 1px 2px rgba(0,0,0,0.2)",transform:"translateX(0)",transition:"transform 0.18s"},knobOn:{transform:"translateX(18px)"},controls:{width:"100%",maxWidth:380,display:"flex",flexDirection:"column",gap:14,marginTop:8},chips:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},chip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},customRow:{display:"flex",alignItems:"center",justifyContent:"center",gap:8},customInput:{border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:15,fontWeight:700,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center",width:100},customUnit:{fontSize:13,color:"var(--text-3)",fontWeight:600},input:{border:"1px solid var(--border)",borderRadius:10,padding:"11px 13px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center"},treePick:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},treeBtn:{display:"flex",alignItems:"center",gap:6,border:"1.5px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},treeDot:{width:10,height:10,borderRadius:"50%"},plantBtn:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},giveUp:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",padding:"11px 26px",borderRadius:11,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:18},resultTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginTop:14,textAlign:"center"},resultSub:{fontSize:13.5,color:"var(--text-3)",marginTop:6,marginBottom:18,textAlign:"center"},forest:{background:"var(--surface)",borderRadius:16,padding:"20px 22px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},forestHead:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},forestEmpty:{background:"var(--surface)",borderRadius:16,padding:"40px 20px",textAlign:"center",color:"var(--text-3)",fontSize:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},daySection:{marginBottom:16},dayLabel:{fontSize:12,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:8},treeGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(80px,1fr))",gap:8},treeCard:{display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 4px",borderRadius:10,cursor:"pointer",background:"var(--surface-2)"},treeCardMin:{fontSize:12,fontWeight:700,color:"#4C9A6B",marginTop:-4},treeCardLabel:{fontSize:10.5,color:"var(--text-3)",marginTop:2,textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:76},forestHint:{fontSize:11,color:"var(--text-3)",textAlign:"center",marginTop:6}},fl=[{code:"INR",symbol:"₹",locale:"en-IN",label:"Indian Rupee"},{code:"USD",symbol:"$",locale:"en-US",label:"US Dollar"},{code:"EUR",symbol:"€",locale:"de-DE",label:"Euro"},{code:"GBP",symbol:"£",locale:"en-GB",label:"British Pound"},{code:"JPY",symbol:"¥",locale:"ja-JP",label:"Japanese Yen"},{code:"AED",symbol:"د.إ",locale:"en-AE",label:"UAE Dirham"},{code:"AUD",symbol:"A$",locale:"en-AU",label:"Australian Dollar"},{code:"CAD",symbol:"C$",locale:"en-CA",label:"Canadian Dollar"},{code:"SGD",symbol:"S$",locale:"en-SG",label:"Singapore Dollar"}],Hd="INR",ju="anvil_currency",Cu=t=>fl.find(e=>e.code===t)||fl[0];function ms(){try{return localStorage.getItem(ju)||Hd}catch{return Hd}}function Ud(t){try{localStorage.setItem(ju,t)}catch{}return window.dispatchEvent(new CustomEvent("anvil-currency",{detail:t})),t}function fs(t,e){const r=Cu(e||ms()),n=Math.round(Number(t)||0);return r.symbol+n.toLocaleString(r.locale)}function Iu(){const[t,e]=k.useState(ms());return k.useEffect(()=>{const r=n=>e(n.detail||ms());return window.addEventListener("anvil-currency",r),()=>window.removeEventListener("anvil-currency",r)},[]),Cu(t)}const Gd="grove_rates",vi=Object.keys(se),ye=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,Vd=t=>{const e=new Date(t);e.setHours(0,0,0,0);const r=(e.getDay()+6)%7;return e.setDate(e.getDate()-r),e},Yd=t=>{const e=Math.floor(t/60),r=t%60;return e&&r?`${e}h ${r}m`:e?`${e}h`:`${r}m`},Wf=[{id:"week",label:"This week"},{id:"month",label:"This month"},{id:"last7",label:"Last 7 days"},{id:"year",label:"This year"}];function hi(t){const e=new Date;if(t==="week")return[ye(Vd(e)),ye(e)];if(t==="month")return[ye(new Date(e.getFullYear(),e.getMonth(),1)),ye(e)];if(t==="last7"){const r=new Date(e);return r.setDate(r.getDate()-6),[ye(r),ye(e)]}return t==="year"?[ye(new Date(e.getFullYear(),0,1)),ye(e)]:[ye(Vd(e)),ye(e)]}function Lf(){const t=Iu(),e=h=>fs(h,t.code),[r,n]=k.useState({}),[s,i]=k.useState([]),[l,a]=k.useState("week"),[d,g]=k.useState(()=>hi("week")[0]),[m,v]=k.useState(()=>hi("week")[1]),[p,j]=k.useState(!1);k.useEffect(()=>{(async()=>{try{const[h,C]=await Promise.all([H.getFocus(),H.getSetting(Gd)]);i(h.sessions||[]),n(C.value||{})}catch{}j(!0)})()},[]);const S=h=>{a(h);const[C,R]=hi(h);g(C),v(R)},w=(h,C)=>{a(""),h==="from"?g(C):v(C)},I=(h,C)=>{const R=Math.max(0,parseFloat(C)||0),B={...r,[h]:R};n(B),H.setSetting(Gd,B).catch(()=>{})},b=k.useMemo(()=>{const h=d,C=m,R={};return vi.forEach(B=>R[B]=0),s.filter(B=>B.completed).forEach(B=>{const M=(B.started_at||B.created_at||"").slice(0,10);if(M<h||M>C)return;const _=se[B.tree]?B.tree:Jn;R[_]+=B.actual_min||0}),vi.map(B=>{const M=R[B],_=r[B]||0;return{pillar:B,minutes:M,rate:_,cost:M/60*_,...se[B]}}).sort((B,M)=>M.cost-B.cost||M.minutes-B.minutes)},[s,r,d,m]),c=b.reduce((h,C)=>h+C.cost,0),u=b.reduce((h,C)=>h+C.minutes,0),x=Math.max(1,...b.map(h=>h.cost));return o.jsxs("div",{style:tt.page,children:[o.jsxs("div",{style:tt.head,children:[o.jsx("div",{style:tt.eyebrow,children:"Anvil · Worth"}),o.jsx("h1",{style:tt.h1,children:"Worth"}),o.jsx("div",{style:tt.subhead,children:"What your focused time is worth, by pillar."})]}),o.jsxs("div",{style:tt.hero,children:[o.jsx("div",{style:tt.heroVal,children:e(c)}),o.jsxs("div",{style:tt.heroSub,children:[Yd(u)," focused · ",d," → ",m]})]}),o.jsxs("div",{style:tt.card,children:[o.jsx("div",{style:tt.cardTitle,children:"Period"}),o.jsx("div",{style:tt.presetRow,children:Wf.map(h=>o.jsx("button",{onClick:()=>S(h.id),style:{...tt.preset,...l===h.id?tt.presetOn:{}},children:h.label},h.id))}),o.jsxs("div",{style:tt.dateRow,children:[o.jsxs("label",{style:tt.dateField,children:[o.jsx("span",{style:tt.dateLbl,children:"From"}),o.jsx("input",{type:"date",value:d,max:m,onChange:h=>w("from",h.target.value),style:tt.dateInput})]}),o.jsx("span",{style:tt.dateArrow,children:"→"}),o.jsxs("label",{style:tt.dateField,children:[o.jsx("span",{style:tt.dateLbl,children:"To"}),o.jsx("input",{type:"date",value:m,min:d,onChange:h=>w("to",h.target.value),style:tt.dateInput})]})]})]}),o.jsxs("div",{style:tt.card,children:[o.jsx("div",{style:tt.cardTitle,children:"Breakdown"}),p?u===0?o.jsx("div",{style:tt.muted,children:"No focus sessions in this period."}):o.jsxs("div",{style:tt.rows,children:[b.map(h=>o.jsxs("div",{style:tt.row,children:[o.jsxs("div",{style:tt.rowTop,children:[o.jsx("span",{style:{...tt.dot,background:h.leaf}}),o.jsx("span",{style:tt.rowName,children:h.label}),o.jsx("span",{style:tt.rowCost,children:e(h.cost)})]}),o.jsx("div",{style:tt.rowBarTrack,children:o.jsx("div",{style:{...tt.rowBar,width:`${h.cost/x*100}%`,background:h.leaf}})}),o.jsxs("div",{style:tt.rowMeta,children:[Yd(h.minutes)," × ",e(h.rate),"/hr"]})]},h.pillar)),o.jsxs("div",{style:tt.totalRow,children:[o.jsx("span",{children:"Total"}),o.jsx("span",{style:tt.totalVal,children:e(c)})]})]}):o.jsx("div",{style:tt.muted,children:"Loading…"})]}),o.jsxs("div",{style:tt.card,children:[o.jsx("div",{style:tt.cardTitle,children:"Hourly rates"}),o.jsx("div",{style:tt.cardHint,children:"Set how much an hour of focus is worth for each pillar."}),o.jsx("div",{style:tt.rateGrid,children:vi.map(h=>o.jsxs("div",{style:tt.rateRow,children:[o.jsx("span",{style:{...tt.dot,background:se[h].leaf}}),o.jsx("span",{style:tt.rateName,children:se[h].label}),o.jsxs("div",{style:tt.rateInputWrap,children:[o.jsx("span",{style:tt.rupeeSign,children:t.symbol}),o.jsx("input",{type:"number",min:"0",inputMode:"numeric",placeholder:"0",value:r[h]??"",onChange:C=>I(h,C.target.value),style:tt.rateInput}),o.jsx("span",{style:tt.perHr,children:"/hr"})]})]},h))})]})]})}const tt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},hero:{background:"linear-gradient(135deg,var(--accent-strong),var(--accent-2))",borderRadius:16,padding:"22px 24px",color:"#fff",marginBottom:16,textAlign:"center"},heroVal:{fontSize:38,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em"},heroSub:{fontSize:12.5,color:"var(--text-3)",marginTop:4},card:{background:"var(--surface)",borderRadius:16,padding:"18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},cardHint:{fontSize:12,color:"var(--text-3)",marginTop:-8,marginBottom:12},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},presetRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},preset:{border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:18,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},presetOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},dateRow:{display:"flex",alignItems:"flex-end",gap:10},dateField:{display:"flex",flexDirection:"column",gap:4,flex:1},dateLbl:{fontSize:11,color:"var(--text-2)",fontWeight:600},dateInput:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",outline:"none",width:"100%",boxSizing:"border-box"},dateArrow:{color:"var(--text-3)",paddingBottom:9},rows:{display:"flex",flexDirection:"column",gap:14},row:{},rowTop:{display:"flex",alignItems:"center",gap:8,marginBottom:6},dot:{width:11,height:11,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:14,fontWeight:600},rowCost:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},rowBarTrack:{height:8,background:"#F2F0EA",borderRadius:4,overflow:"hidden"},rowBar:{height:"100%",borderRadius:4,transition:"width 0.3s"},rowMeta:{fontSize:11.5,color:"var(--text-3)",marginTop:5,fontWeight:500},totalRow:{display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid var(--border)",paddingTop:12,marginTop:2,fontSize:14,fontWeight:700},totalVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},rateGrid:{display:"flex",flexDirection:"column",gap:10},rateRow:{display:"flex",alignItems:"center",gap:8},rateName:{flex:1,fontSize:14,fontWeight:600},rateInputWrap:{display:"flex",alignItems:"center",gap:3,border:"1px solid var(--border)",borderRadius:9,padding:"4px 10px",background:"var(--surface-2)"},rupeeSign:{fontSize:14,color:"var(--text-2)",fontWeight:600},rateInput:{border:"none",background:"none",outline:"none",width:64,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},perHr:{fontSize:12,color:"var(--text-3)",fontWeight:600}};function Nf({onAuthed:t}){const[e,r]=k.useState("login"),[n,s]=k.useState(""),[i,l]=k.useState(""),[a,d]=k.useState(""),[g,m]=k.useState(""),[v,p]=k.useState(!1),j=e==="register",S=async w=>{if(w.preventDefault(),m(""),!i.trim()||!a){m("Email and password are required.");return}if(j&&a.length<6){m("Password must be at least 6 characters.");return}p(!0);try{const I=j?await H.register({name:n,email:i,password:a}):await H.login({email:i,password:a});Am(I.token),t(I.user)}catch(I){m(I.message||"Something went wrong.")}finally{p(!1)}};return o.jsx("div",{style:Tt.page,children:o.jsxs("form",{style:Tt.card,onSubmit:S,children:[o.jsxs("div",{style:Tt.brand,children:[o.jsx("div",{style:Tt.logo,children:"B"}),o.jsx("span",{style:Tt.brandName,children:"Anvil"})]}),o.jsx("h1",{style:Tt.title,children:j?"Create your account":"Welcome back"}),o.jsx("p",{style:Tt.sub,children:j?"Start forging your days.":"Sign in to continue."}),j&&o.jsxs("label",{style:Tt.field,children:[o.jsx("span",{style:Tt.label,children:"Name"}),o.jsx("input",{value:n,onChange:w=>s(w.target.value),placeholder:"Your name",style:Tt.input,autoFocus:!0})]}),o.jsxs("label",{style:Tt.field,children:[o.jsx("span",{style:Tt.label,children:"Email"}),o.jsx("input",{type:"email",value:i,onChange:w=>l(w.target.value),placeholder:"you@example.com",style:Tt.input,autoFocus:!j})]}),o.jsxs("label",{style:Tt.field,children:[o.jsx("span",{style:Tt.label,children:"Password"}),o.jsx("input",{type:"password",value:a,onChange:w=>d(w.target.value),placeholder:"••••••••",style:Tt.input})]}),g&&o.jsx("div",{style:Tt.error,children:g}),o.jsx("button",{type:"submit",disabled:v,style:{...Tt.submit,...v?{opacity:.6}:{}},children:v?"Please wait…":j?"Create account":"Sign in"}),o.jsxs("div",{style:Tt.switch,children:[j?"Already have an account?":"New here?"," ",o.jsx("button",{type:"button",onClick:()=>{r(j?"login":"register"),m("")},style:Tt.link,children:j?"Sign in":"Create one"})]})]})})}const Tt={page:{minHeight:"100vh",display:"grid",placeItems:"center",background:"var(--bg)",fontFamily:"'Inter',system-ui,sans-serif",padding:20},card:{width:"100%",maxWidth:380,background:"var(--surface)",borderRadius:16,padding:"32px 28px",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",display:"flex",flexDirection:"column"},brand:{display:"flex",alignItems:"center",gap:9,marginBottom:20},logo:{width:32,height:32,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},brandName:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},title:{fontSize:22,fontWeight:700,margin:"0 0 4px",fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},sub:{fontSize:13.5,color:"var(--text-3)",margin:"0 0 22px"},field:{display:"flex",flexDirection:"column",gap:5,marginBottom:14},label:{fontSize:12,fontWeight:600,color:"var(--text-2)"},input:{border:"1px solid var(--border)",borderRadius:9,padding:"11px 12px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)"},error:{background:"rgba(194,83,107,0.10)",color:"#C2536B",fontSize:13,padding:"9px 12px",borderRadius:8,marginBottom:14,fontWeight:500},submit:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"12px",borderRadius:10,fontSize:14.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},switch:{fontSize:13,color:"var(--text-2)",textAlign:"center",marginTop:18},link:{border:"none",background:"none",color:"#3A7CA5",fontWeight:700,cursor:"pointer",fontFamily:"inherit",fontSize:13,padding:0}},Pf=["Salary","Stocks","Business","Interest","Rent","Gift","Other"],Of=["Bills","EMI","Rent","Food","Shopping","Transport","Health","Entertainment","Education","Other"],$f={Salary:"#4C9A6B",Stocks:"#3A7CA5",Business:"#C9A227",Interest:"#8268B0",Gift:"#C2773B",Bills:"#C2536B",EMI:"#A23E57",Food:"#E08E45",Shopping:"#8268B0",Transport:"#3A7CA5",Health:"#4C9A6B",Entertainment:"#C9A227",Education:"#5B7C99",Rent:"#5B8C5A",Other:"#9A968C"},vl=t=>$f[t]||"#9A968C",ur="#3E9E6B",br="#D1556E",kn=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,vs=kn(new Date),Hf=[{id:"month",label:"This month"},{id:"last",label:"Last month"},{id:"year",label:"This year"},{id:"all",label:"All time"}];function Uf(t){const e=new Date;return t==="month"?[kn(new Date(e.getFullYear(),e.getMonth(),1)),vs]:t==="last"?[kn(new Date(e.getFullYear(),e.getMonth()-1,1)),kn(new Date(e.getFullYear(),e.getMonth(),0))]:t==="year"?[kn(new Date(e.getFullYear(),0,1)),vs]:["0000-01-01","9999-12-31"]}function Gf(){const t=Iu(),[e,r]=k.useState("overview"),[n,s]=k.useState([]),[i,l]=k.useState(!1),a=k.useCallback(()=>H.getTxns().then(g=>{s(g),l(!0)}).catch(()=>l(!0)),[]);k.useEffect(()=>{a()},[a]);const d=g=>fs(g,t.code);return o.jsxs("div",{style:D.page,children:[o.jsxs("div",{style:D.head,children:[o.jsx("div",{style:D.eyebrow,children:"Anvil · Vault"}),o.jsx("h1",{style:D.h1,children:"Vault"}),o.jsx("div",{style:D.subhead,children:"Your money — what comes in, what goes out, and where it's headed."})]}),o.jsx("div",{style:D.tabs,children:[["overview","Overview",am],["money","Money",Tm],["calc","Calculators",im]].map(([g,m,v])=>o.jsxs("button",{onClick:()=>r(g),style:{...D.tab,...e===g?D.tabOn:{}},children:[o.jsx(v,{size:15})," ",m]},g))}),e==="overview"&&o.jsx(Vf,{txns:n,loaded:i,money:d,cur:t}),e==="money"&&o.jsx(Qf,{txns:n,reload:a,money:d}),e==="calc"&&o.jsx(Kf,{money:d,cur:t})]})}function Vf({txns:t,loaded:e,money:r,cur:n}){const[s,i]=k.useState("month"),[l,a]=Uf(s),d=k.useMemo(()=>t.filter(w=>w.date>=l&&w.date<=a),[t,l,a]),g=d.filter(w=>w.kind==="income"),m=d.filter(w=>w.kind==="expense"),v=g.reduce((w,I)=>w+I.amount,0),p=m.reduce((w,I)=>w+I.amount,0),j=v-p,S=w=>{const I={};return w.forEach(b=>{I[b.category]=(I[b.category]||0)+b.amount}),Object.entries(I).map(([b,c])=>({category:b,amount:c})).sort((b,c)=>c.amount-b.amount)};return o.jsxs(o.Fragment,{children:[o.jsx("div",{style:D.presetRow,children:Hf.map(w=>o.jsx("button",{onClick:()=>i(w.id),style:{...D.preset,...s===w.id?D.presetOn:{}},children:w.label},w.id))}),o.jsxs("div",{style:D.sumGrid,children:[o.jsx(yi,{icon:o.jsx(gu,{size:16}),label:"Income",value:r(v),color:ur}),o.jsx(yi,{icon:o.jsx(cu,{size:16}),label:"Expenses",value:r(p),color:br}),o.jsx(yi,{icon:j>=0?o.jsx(xu,{size:16}):o.jsx(yu,{size:16}),label:"Net savings",value:r(j),color:j>=0?ur:br})]}),e?d.length===0?o.jsx("div",{style:D.card,children:o.jsxs("div",{style:D.muted,children:["No transactions in this period. Add some under the ",o.jsx("b",{children:"Money"})," tab."]})}):o.jsxs(o.Fragment,{children:[o.jsx(Yf,{totalIn:v,totalOut:p}),o.jsxs("div",{style:D.twoCol,children:[o.jsx(Qd,{title:"Incoming",subtitle:"Where your money comes from",total:v,data:S(g),accent:ur,cur:n}),o.jsx(Qd,{title:"Outgoing",subtitle:"Where your money goes",total:p,data:S(m),accent:br,cur:n})]})]}):o.jsx("div",{style:D.muted,children:"Loading…"})]})}function yi({icon:t,label:e,value:r,color:n}){return o.jsxs("div",{style:D.sumCard,children:[o.jsx("div",{style:{...D.sumIcon,color:n,background:n+"1A"},children:t}),o.jsx("div",{style:D.sumLabel,children:e}),o.jsx("div",{style:{...D.sumVal,color:n},children:r})]})}function Qd({title:t,subtitle:e,total:r,data:n,accent:s,cur:i}){const l=Math.max(1,...n.map(a=>a.amount));return o.jsxs("div",{style:D.card,children:[o.jsxs("div",{style:D.cardTitleRow,children:[o.jsxs("div",{children:[o.jsx("div",{style:{...D.cardTitle,color:s},children:t}),o.jsx("div",{style:D.cardSub,children:e})]}),o.jsx("div",{style:{...D.cardTotal,color:s},children:fs(r,i.code)})]}),n.length===0?o.jsx("div",{style:D.muted,children:"Nothing logged."}):o.jsx("div",{style:D.barList,children:n.map(a=>o.jsxs("div",{children:[o.jsxs("div",{style:D.barTop,children:[o.jsx("span",{style:{...D.dot,background:vl(a.category)}}),o.jsx("span",{style:D.barName,children:a.category}),o.jsxs("span",{style:D.barPct,children:[r>0?Math.round(a.amount/r*100):0,"%"]}),o.jsx("span",{style:D.barAmt,children:fs(a.amount,i.code)})]}),o.jsx("div",{style:D.barTrack,children:o.jsx("div",{style:{...D.bar,width:`${a.amount/l*100}%`,background:vl(a.category)}})})]},a.category))})]})}function Yf({totalIn:t,totalOut:e}){const r=t-e,n=t>0?r/t:0,s=t===0?0:Math.max(0,Math.min(100,Math.round(50+n*100)));let i,l,a;t===0?(i="No income logged",l="#9A968C",a="Add your income to see your financial health."):n>=.3?(i="Excellent",l="#3E9E6B",a="You're saving 30%+ of income — keep investing the surplus."):n>=.2?(i="Healthy",l="#4C9A6B",a="Solid savings rate. Consider automating a SIP with the surplus."):n>=.1?(i="Okay",l="#C9A227",a="Decent, but aim for 20%+. Trim your biggest expense category."):n>=0?(i="Tight",l="#C2773B",a="You're saving very little. Review recurring bills and EMIs."):(i="Overspending",l="#D1556E",a="You're spending more than you earn. Cut back to avoid debt.");const d=t>0?Math.min(100,Math.round(e/t*100)):0;return o.jsxs("div",{style:D.card,children:[o.jsxs("div",{style:D.cardTitleRow,children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx(mm,{size:18,color:l}),o.jsxs("div",{children:[o.jsx("div",{style:D.cardTitle,children:"Financial health"}),o.jsx("div",{style:D.cardSub,children:"Based on your savings rate this period"})]})]}),o.jsxs("div",{style:{textAlign:"right"},children:[o.jsx("div",{style:{...D.healthScore,color:l},children:t===0?"—":s}),o.jsx("div",{style:{...D.healthStatus,color:l},children:i})]})]}),o.jsx("div",{style:D.gaugeTrack,children:o.jsx("div",{style:{...D.gaugeFill,width:`${t===0?0:s}%`,background:l}})}),o.jsxs("div",{style:D.healthStats,children:[o.jsxs("div",{style:D.healthStat,children:[o.jsxs("span",{style:D.healthStatV,children:[t>0?Math.round(n*100):0,"%"]}),o.jsx("span",{style:D.healthStatL,children:"Savings rate"})]}),o.jsxs("div",{style:D.healthStat,children:[o.jsxs("span",{style:D.healthStatV,children:[d,"%"]}),o.jsx("span",{style:D.healthStatL,children:"of income spent"})]})]}),o.jsx("div",{style:{...D.tip,borderColor:l+"55",background:l+"12",color:l},children:a})]})}function Qf({txns:t,reload:e,money:r}){const[n,s]=k.useState("expense"),[i,l]=k.useState(""),[a,d]=k.useState("Bills"),[g,m]=k.useState(vs),[v,p]=k.useState(""),{deleteItem:j,toasts:S,handleUndo:w,handleDismiss:I}=oo(H.deleteTxn,H.restoreTxn,e),b=n==="income"?Pf:Of,c=C=>{s(C),d(C==="income"?"Salary":"Bills")},u=async()=>{const C=parseFloat(i);!C||C<=0||(await H.createTxn({kind:n,category:a,amount:C,note:v.trim(),date:g}),l(""),p(""),e())},x=k.useMemo(()=>{const C={};return t.forEach(R=>{(C[R.date]=C[R.date]||[]).push(R)}),Object.entries(C).sort((R,B)=>B[0].localeCompare(R[0]))},[t]),h=C=>new Date(C+"T00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:D.card,children:[o.jsx("div",{style:D.cardTitle,children:"Add transaction"}),o.jsxs("div",{style:D.kindToggle,children:[o.jsxs("button",{onClick:()=>c("expense"),style:{...D.kindBtn,...n==="expense"?{background:br,color:"#fff",borderColor:br}:{}},children:[o.jsx(cu,{size:15})," Expense"]}),o.jsxs("button",{onClick:()=>c("income"),style:{...D.kindBtn,...n==="income"?{background:ur,color:"#fff",borderColor:ur}:{}},children:[o.jsx(gu,{size:15})," Income"]})]}),o.jsxs("div",{style:D.formGrid,children:[o.jsx("input",{type:"number",inputMode:"decimal",placeholder:"Amount",value:i,onChange:C=>l(C.target.value),onKeyDown:C=>C.key==="Enter"&&u(),style:D.input,autoFocus:!0}),o.jsx("select",{value:a,onChange:C=>d(C.target.value),style:D.input,children:b.map(C=>o.jsx("option",{children:C},C))}),o.jsx("input",{type:"date",value:g,max:vs,onChange:C=>m(C.target.value),style:D.input})]}),o.jsx("input",{placeholder:"Note (optional)",value:v,onChange:C=>p(C.target.value),onKeyDown:C=>C.key==="Enter"&&u(),style:{...D.input,marginTop:8}}),o.jsxs("button",{onClick:u,style:{...D.addBtn,background:n==="income"?ur:br},children:[o.jsx(_e,{size:15})," Add ",n]})]}),o.jsxs("div",{style:D.card,children:[o.jsx("div",{style:D.cardTitle,children:"History"}),x.length===0?o.jsx("div",{style:D.muted,children:"No transactions yet."}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:x.map(([C,R])=>o.jsxs("div",{children:[o.jsx("div",{style:D.dateHead,children:h(C)}),R.map(B=>o.jsxs("div",{style:D.txnRow,children:[o.jsx("span",{style:{...D.txnDot,background:vl(B.category)}}),o.jsxs("div",{style:{flex:1,minWidth:0},children:[o.jsx("div",{style:D.txnCat,children:B.category}),B.note&&o.jsx("div",{style:D.txnNote,children:B.note})]}),o.jsxs("span",{style:{...D.txnAmt,color:B.kind==="income"?ur:br},children:[B.kind==="income"?"+":"−",r(B.amount)]}),o.jsx("button",{onClick:()=>j(B.id,B.category),style:D.delBtn,children:o.jsx(bt,{size:14})})]},B.id))]},C))})]}),o.jsx(so,{toasts:S,onUndo:w,onDismiss:I})]})}function Kf({money:t,cur:e}){return o.jsxs(o.Fragment,{children:[o.jsx(Xf,{money:t,cur:e}),o.jsx(Jf,{money:t,cur:e})]})}function Yr({label:t,value:e,set:r,min:n,max:s,step:i,suffix:l}){return o.jsxs("div",{style:D.field,children:[o.jsxs("div",{style:D.fieldTop,children:[o.jsx("span",{style:D.fieldLabel,children:t}),o.jsxs("div",{style:D.fieldInputWrap,children:[o.jsx("input",{type:"number",value:e,onChange:a=>r(a.target.value),style:D.fieldInput}),l&&o.jsx("span",{style:D.fieldSuffix,children:l})]})]}),o.jsx("input",{type:"range",min:n,max:s,step:i,value:e,onChange:a=>r(a.target.value),style:D.range})]})}function Xf({money:t,cur:e}){const[r,n]=k.useState(3e4),[s,i]=k.useState(12),[l,a]=k.useState(15),{invested:d,futureValue:g,gains:m,yearly:v}=k.useMemo(()=>{const j=Math.max(0,parseFloat(r)||0),S=Math.max(0,parseFloat(s)||0),w=Math.max(0,Math.min(60,parseInt(l)||0)),I=S/12/100,b=h=>h<=0?0:I===0?j*h:j*((Math.pow(1+I,h)-1)/I)*(1+I),c=[];for(let h=1;h<=w;h++)c.push({year:h,invested:j*12*h,value:b(h*12)});const u=b(w*12),x=j*12*w;return{invested:x,futureValue:u,gains:u-x,yearly:c}},[r,s,l]),p=Math.max(1,...v.map(j=>j.value));return o.jsxs("div",{style:D.card,children:[o.jsx("div",{style:D.cardTitleRow,children:o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx(wm,{size:18,color:"#3A7CA5"}),o.jsxs("div",{children:[o.jsx("div",{style:D.cardTitle,children:"SIP projection"}),o.jsx("div",{style:D.cardSub,children:"Mutual fund / SIP future value"})]})]})}),o.jsx(Yr,{label:"Monthly investment",value:r,set:n,min:500,max:5e5,step:500,suffix:e.symbol}),o.jsx(Yr,{label:"Expected return (p.a.)",value:s,set:i,min:1,max:30,step:.5,suffix:"%"}),o.jsx(Yr,{label:"Time period",value:l,set:a,min:1,max:40,step:1,suffix:"yrs"}),o.jsxs("div",{style:D.resultHero,children:[o.jsx("div",{style:D.resultLabel,children:"Projected wealth"}),o.jsx("div",{style:{...D.resultVal,color:"#3A7CA5"},children:t(g)})]}),o.jsxs("div",{style:D.splitRow,children:[o.jsxs("div",{style:D.splitItem,children:[o.jsx("span",{style:D.splitV,children:t(d)}),o.jsx("span",{style:D.splitL,children:"Invested"})]}),o.jsxs("div",{style:D.splitItem,children:[o.jsx("span",{style:{...D.splitV,color:"#3E9E6B"},children:t(m)}),o.jsx("span",{style:D.splitL,children:"Est. returns"})]})]}),v.length>0&&o.jsxs("div",{style:D.chartWrap,children:[o.jsx("div",{style:D.chartBars,children:v.map(j=>o.jsx("div",{style:D.chartCol,title:`Year ${j.year}: ${t(j.value)}`,children:o.jsx("div",{style:{...D.chartStack,height:`${j.value/p*100}%`},children:o.jsx("div",{style:{...D.chartGain,height:`${(1-j.invested/j.value)*100}%`}})})},j.year))}),o.jsxs("div",{style:D.chartAxis,children:[o.jsx("span",{children:"Yr 1"}),o.jsxs("span",{style:{marginLeft:"auto"},children:["Yr ",v.length]})]}),o.jsxs("div",{style:D.legend,children:[o.jsxs("span",{style:D.legendItem,children:[o.jsx("span",{style:{...D.legendDot,background:"#9DBFD6"}})," Invested"]}),o.jsxs("span",{style:D.legendItem,children:[o.jsx("span",{style:{...D.legendDot,background:"#3E9E6B"}})," Returns"]})]})]})]})}function Jf({money:t,cur:e}){const[r,n]=k.useState(2e6),[s,i]=k.useState(9),[l,a]=k.useState(20),{emi:d,totalPay:g,totalInterest:m}=k.useMemo(()=>{const p=Math.max(0,parseFloat(r)||0),j=Math.max(0,parseFloat(s)||0),S=Math.max(1,Math.round((parseFloat(l)||0)*12)),w=j/12/100;let I;w===0?I=p/S:I=p*w*Math.pow(1+w,S)/(Math.pow(1+w,S)-1);const b=I*S;return{emi:I,totalPay:b,totalInterest:b-p}},[r,s,l]),v=g>0?r/g*100:0;return o.jsxs("div",{style:D.card,children:[o.jsx("div",{style:D.cardTitleRow,children:o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx(mu,{size:18,color:"#C2536B"}),o.jsxs("div",{children:[o.jsx("div",{style:D.cardTitle,children:"EMI calculator"}),o.jsx("div",{style:D.cardSub,children:"Loan / mortgage monthly payment"})]})]})}),o.jsx(Yr,{label:"Loan amount",value:r,set:n,min:5e4,max:5e7,step:5e4,suffix:e.symbol}),o.jsx(Yr,{label:"Interest rate (p.a.)",value:s,set:i,min:1,max:24,step:.1,suffix:"%"}),o.jsx(Yr,{label:"Tenure",value:l,set:a,min:1,max:30,step:1,suffix:"yrs"}),o.jsxs("div",{style:D.resultHero,children:[o.jsx("div",{style:D.resultLabel,children:"Monthly EMI"}),o.jsx("div",{style:{...D.resultVal,color:"#C2536B"},children:t(d)})]}),o.jsxs("div",{style:D.emiSplitTrack,children:[o.jsx("div",{style:{width:`${v}%`,background:"#5B7C99",height:"100%"}}),o.jsx("div",{style:{width:`${100-v}%`,background:"#C2536B",height:"100%"}})]}),o.jsxs("div",{style:D.splitRow,children:[o.jsxs("div",{style:D.splitItem,children:[o.jsx("span",{style:{...D.splitV,color:"#5B7C99"},children:t(r)}),o.jsx("span",{style:D.splitL,children:"Principal"})]}),o.jsxs("div",{style:D.splitItem,children:[o.jsx("span",{style:{...D.splitV,color:"#C2536B"},children:t(m)}),o.jsx("span",{style:D.splitL,children:"Total interest"})]}),o.jsxs("div",{style:D.splitItem,children:[o.jsx("span",{style:D.splitV,children:t(g)}),o.jsx("span",{style:D.splitL,children:"Total payable"})]})]})]})}const D={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},tabs:{display:"flex",gap:7,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},presetRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},preset:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},presetOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},sumGrid:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:16},sumCard:{background:"var(--surface)",borderRadius:14,padding:"14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},sumIcon:{width:30,height:30,borderRadius:9,display:"grid",placeItems:"center",marginBottom:8},sumLabel:{fontSize:11.5,color:"var(--text-3)",fontWeight:600},sumVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2,letterSpacing:"-0.01em",wordBreak:"break-word"},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},cardTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},twoCol:{display:"grid",gridTemplateColumns:"1fr",gap:0},barList:{display:"flex",flexDirection:"column",gap:12},barTop:{display:"flex",alignItems:"center",gap:8,marginBottom:5},dot:{width:10,height:10,borderRadius:3,flexShrink:0},barName:{fontSize:13,fontWeight:600,flex:1},barPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600},barAmt:{fontSize:13,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:70,textAlign:"right"},barTrack:{height:8,background:"var(--surface-2)",borderRadius:4,overflow:"hidden"},bar:{height:"100%",borderRadius:4,transition:"width 0.3s",minWidth:3},healthScore:{fontSize:32,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1},healthStatus:{fontSize:12.5,fontWeight:700,marginTop:2},gaugeTrack:{height:10,background:"var(--surface-2)",borderRadius:6,overflow:"hidden",marginBottom:14},gaugeFill:{height:"100%",borderRadius:6,transition:"width 0.4s"},healthStats:{display:"flex",gap:24,marginBottom:12},healthStat:{display:"flex",flexDirection:"column"},healthStatV:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},healthStatL:{fontSize:11,color:"var(--text-3)",fontWeight:600},tip:{fontSize:12.5,lineHeight:1.5,padding:"10px 12px",borderRadius:10,border:"1px solid",fontWeight:500},kindToggle:{display:"flex",gap:8,marginBottom:12},kindBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},formGrid:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},input:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},addBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},dateHead:{fontSize:11,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8},txnRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},txnDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},txnCat:{fontSize:13.5,fontWeight:600},txnNote:{fontSize:11.5,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},txnAmt:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},field:{marginBottom:16},fieldTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},fieldLabel:{fontSize:13,fontWeight:600,color:"var(--text-2)"},fieldInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:8,padding:"5px 10px",background:"var(--surface-2)"},fieldInput:{border:"none",background:"none",outline:"none",width:90,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},fieldSuffix:{fontSize:12,color:"var(--text-3)",fontWeight:600},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},resultHero:{textAlign:"center",padding:"14px 0 6px"},resultLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},resultVal:{fontSize:34,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,wordBreak:"break-word"},splitRow:{display:"flex",gap:10,marginTop:10},splitItem:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",background:"var(--surface-2)",borderRadius:10,padding:"10px 6px"},splitV:{fontSize:14.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",wordBreak:"break-word"},splitL:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:2},chartWrap:{marginTop:18},chartBars:{display:"flex",alignItems:"flex-end",gap:3,height:90},chartCol:{flex:1,height:"100%",display:"flex",alignItems:"flex-end"},chartStack:{width:"100%",background:"#9DBFD6",borderRadius:"3px 3px 0 0",minHeight:2,position:"relative",display:"flex",flexDirection:"column",justifyContent:"flex-start"},chartGain:{width:"100%",background:"#3E9E6B",borderRadius:"3px 3px 0 0"},chartAxis:{display:"flex",fontSize:10,color:"var(--text-3)",fontWeight:600,marginTop:6},legend:{display:"flex",gap:16,justifyContent:"center",marginTop:10},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)",fontWeight:600},legendDot:{width:10,height:10,borderRadius:3},emiSplitTrack:{display:"flex",height:12,borderRadius:6,overflow:"hidden",marginTop:16,border:"1px solid var(--border)"}},hl=[{id:"sandstone",name:"Sandstone",description:"Warm editorial light — the original Anvil look.",dark:!1,swatch:["#F7F6F3","#4C9A6B","#26241F"],vars:{"--bg":"#F7F6F3","--surface":"#FFFFFF","--surface-2":"#FAFAF8","--hover":"#F2F1EC","--border":"#ECEAE3","--text":"#26241F","--text-2":"#6B675E","--text-3":"#9A968C","--accent":"#4C9A6B","--accent-strong":"#26241F","--accent-2":"#3A352C"}},{id:"midnight",name:"Midnight",description:"Deep low-glare dark mode for night owls and focus.",dark:!0,swatch:["#161513","#6FB58C","#ECEAE3"],vars:{"--bg":"#161513","--surface":"#211F1C","--surface-2":"#1B1A17","--hover":"#2B2924","--border":"#34312B","--text":"#ECEAE3","--text-2":"#B6B1A6","--text-3":"#8A857A","--accent":"#6FB58C","--accent-strong":"#2E6F4B","--accent-2":"#245C3E"}},{id:"blossom",name:"Blossom",description:"Soft rose & blush — gentle, warm, and feminine.",dark:!1,swatch:["#FFF5F8","#E0608E","#B23A6B"],vars:{"--bg":"#FFF5F8","--surface":"#FFFFFF","--surface-2":"#FFF0F4","--hover":"#FDE7EE","--border":"#F6D9E2","--text":"#3D2230","--text-2":"#7A5466","--text-3":"#B08799","--accent":"#E0608E","--accent-strong":"#B23A6B","--accent-2":"#9C2F5C"}},{id:"tide",name:"Tide",description:"Calm professional blues — clean and focused.",dark:!1,swatch:["#F1F6FA","#2E86C1","#1C4E73"],vars:{"--bg":"#F1F6FA","--surface":"#FFFFFF","--surface-2":"#ECF3F9","--hover":"#E2EEF6","--border":"#D5E3EE","--text":"#13283A","--text-2":"#4A6275","--text-3":"#8AA0B0","--accent":"#2E86C1","--accent-strong":"#1C4E73","--accent-2":"#163E5C"}},{id:"velocity",name:"Velocity",description:"High-energy sport — crisp slate with electric orange.",dark:!1,swatch:["#F4F5F7","#F4511E","#1F2A37"],vars:{"--bg":"#F4F5F7","--surface":"#FFFFFF","--surface-2":"#EEF0F3","--hover":"#E7EAEE","--border":"#DCE0E6","--text":"#18202B","--text-2":"#515B68","--text-3":"#8B95A1","--accent":"#F4511E","--accent-strong":"#1F2A37","--accent-2":"#16202B"}},{id:"evergreen",name:"Evergreen",description:"Earthy forest greens — grounded and natural.",dark:!1,swatch:["#F2F6F1","#3E8E52","#2A4A30"],vars:{"--bg":"#F2F6F1","--surface":"#FFFFFF","--surface-2":"#ECF2EA","--hover":"#E4EEE2","--border":"#D7E4D3","--text":"#1E2B20","--text-2":"#4F6151","--text-3":"#8AA08C","--accent":"#3E8E52","--accent-strong":"#2A4A30","--accent-2":"#213B26"}},{id:"amethyst",name:"Amethyst",description:"Premium purple & plum — elegant and refined.",dark:!1,swatch:["#F6F4FB","#7A4FE0","#3A2D5C"],vars:{"--bg":"#F6F4FB","--surface":"#FFFFFF","--surface-2":"#F1EDF9","--hover":"#EAE3F6","--border":"#DFD6F0","--text":"#241B36","--text-2":"#5A4E72","--text-3":"#9588AE","--accent":"#7A4FE0","--accent-strong":"#3A2D5C","--accent-2":"#2E2349"}}],Kd="sandstone",zu="anvil_theme",Zf=t=>hl.find(e=>e.id===t)||hl[0];function Tu(){try{return localStorage.getItem(zu)||Kd}catch{return Kd}}function wn(t,e=!0){const r=Zf(t),n=document.documentElement;Object.entries(r.vars).forEach(([i,l])=>n.style.setProperty(i,l)),n.style.colorScheme=r.dark?"dark":"light",n.setAttribute("data-theme",r.id);const s=document.querySelector('meta[name="theme-color"]');if(s&&s.setAttribute("content",r.vars["--surface"]),e)try{localStorage.setItem(zu,r.id)}catch{}return r.id}function qf({screens:t,order:e,hidden:r,themeId:n,currency:s,onSaveSidebar:i,onPreviewTheme:l,onCommitTheme:a,onSelectCurrency:d,onClose:g}){const[m,v]=k.useState("sidebar"),[p,j]=k.useState(()=>e.map(h=>({id:h,hidden:r.includes(h)}))),[S,w]=k.useState(n),I=h=>{w(h),l(h)},b=p.filter(h=>!h.hidden).length,c=(h,C)=>{const R=h+C;if(R<0||R>=p.length)return;const B=[...p];[B[h],B[R]]=[B[R],B[h]],j(B)},u=h=>{const C=p[h];if(!C.hidden&&b<=1)return;const R=[...p];R[h]={...C,hidden:!C.hidden},j(R)},x=()=>{i(p.map(h=>h.id),p.filter(h=>h.hidden).map(h=>h.id))};return o.jsx("div",{style:nt.overlay,onClick:g,children:o.jsxs("div",{style:nt.modal,onClick:h=>h.stopPropagation(),children:[o.jsxs("div",{style:nt.head,children:[o.jsx("div",{style:nt.title,children:"Settings"}),o.jsx("button",{onClick:g,style:nt.closeBtn,children:o.jsx(bt,{size:18})})]}),o.jsxs("div",{style:nt.tabs,children:[o.jsxs("button",{onClick:()=>v("sidebar"),style:{...nt.tab,...m==="sidebar"?nt.tabOn:{}},children:[o.jsx(hm,{size:15})," Configure sidebar"]}),o.jsxs("button",{onClick:()=>v("themes"),style:{...nt.tab,...m==="themes"?nt.tabOn:{}},children:[o.jsx(km,{size:15})," Themes"]}),o.jsxs("button",{onClick:()=>v("currency"),style:{...nt.tab,...m==="currency"?nt.tabOn:{}},children:[o.jsx(cm,{size:15})," Currency"]})]}),o.jsx("div",{style:nt.body,children:m==="sidebar"?o.jsxs(o.Fragment,{children:[o.jsx("p",{style:nt.hint,children:"Reorder items with the arrows, and hide the ones you don't use. Hidden items disappear from the sidebar but stay accessible here."}),o.jsx("div",{style:nt.list,children:p.map((h,C)=>{const R=t[h.id],B=R.icon;return o.jsxs("div",{style:{...nt.row,opacity:h.hidden?.5:1},children:[o.jsx("span",{style:nt.rowNum,children:C+1}),o.jsx(B,{size:16}),o.jsx("span",{style:nt.rowLabel,children:R.label}),o.jsx("button",{onClick:()=>u(C),title:h.hidden?"Show":"Hide",style:{...nt.iconBtn,...h.hidden?{}:{color:"var(--accent)"}},children:h.hidden?o.jsx(um,{size:15}):o.jsx(bm,{size:15})}),o.jsx("button",{onClick:()=>c(C,-1),disabled:C===0,style:{...nt.iconBtn,opacity:C===0?.3:1},children:o.jsx(dm,{size:15})}),o.jsx("button",{onClick:()=>c(C,1),disabled:C===p.length-1,style:{...nt.iconBtn,opacity:C===p.length-1?.3:1},children:o.jsx(ba,{size:15})})]},h.id)})}),o.jsxs("button",{onClick:x,style:nt.saveBtn,children:[o.jsx(wt,{size:15})," Save sidebar"]})]}):m==="currency"?o.jsxs(o.Fragment,{children:[o.jsx("p",{style:nt.hint,children:"Choose the currency used across Vault and Worth. Applies instantly."}),o.jsx("div",{style:nt.list,children:fl.map(h=>{const C=h.code===s;return o.jsxs("button",{onClick:()=>d(h.code),style:{...nt.row,cursor:"pointer",textAlign:"left",width:"100%",...C?{borderColor:"var(--accent)"}:{}},children:[o.jsx("span",{style:nt.curSymbol,children:h.symbol}),o.jsxs("span",{style:nt.rowLabel,children:[h.label," ",o.jsx("span",{style:nt.curCode,children:h.code})]}),C&&o.jsx("span",{style:nt.themeCheck,children:o.jsx(wt,{size:13})})]},h.code)})})]}):o.jsxs(o.Fragment,{children:[o.jsxs("p",{style:nt.hint,children:["Tap a theme to preview it live, then hit ",o.jsx("b",{children:"Apply theme"})," to keep it."]}),o.jsx("div",{style:nt.themeGrid,children:hl.map(h=>{const C=h.id===S;return o.jsxs("button",{onClick:()=>I(h.id),style:{...nt.themeCard,...C?nt.themeCardOn:{}},children:[o.jsxs("div",{style:nt.swatchRow,children:[h.swatch.map((R,B)=>o.jsx("span",{style:{...nt.swatch,background:R}},B)),C&&o.jsx("span",{style:nt.themeCheck,children:o.jsx(wt,{size:13})})]}),o.jsxs("div",{style:nt.themeName,children:[h.name,h.dark?o.jsx("span",{style:nt.darkTag,children:"Dark"}):null]}),o.jsx("div",{style:nt.themeDesc,children:h.description})]},h.id)})}),o.jsxs("button",{onClick:()=>a(S),disabled:S===n,style:{...nt.saveBtn,...S===n?nt.saveBtnDisabled:{}},children:[o.jsx(wt,{size:15})," ",S===n?"Theme applied":"Apply theme"]})]})})]})})}const nt={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,width:460,maxWidth:"100%",maxHeight:"88vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",overflow:"hidden"},head:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 18px",borderBottom:"1px solid var(--border)"},title:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},tabs:{display:"flex",gap:6,padding:"12px 18px 0"},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"transparent"},body:{padding:"16px 18px 20px",overflowY:"auto"},hint:{fontSize:12.5,color:"var(--text-3)",lineHeight:1.5,margin:"0 0 14px"},list:{display:"flex",flexDirection:"column",gap:6},row:{display:"flex",alignItems:"center",gap:10,padding:"9px 11px",background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:9},rowNum:{fontSize:11,fontWeight:700,color:"var(--text-3)",width:16,textAlign:"center"},rowLabel:{flex:1,fontSize:13.5,fontWeight:500},curSymbol:{width:22,textAlign:"center",fontSize:15,fontWeight:700,color:"var(--text)"},curCode:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginLeft:4},iconBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},saveBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",marginTop:16,border:"none",background:"var(--accent)",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer"},saveBtnDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"default"},themeGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},themeCard:{textAlign:"left",border:"2px solid var(--border)",background:"var(--surface-2)",borderRadius:12,padding:12,cursor:"pointer",display:"flex",flexDirection:"column",gap:6,outline:"none",WebkitTapHighlightColor:"transparent",transition:"border-color .15s ease, box-shadow .15s ease"},themeCardOn:{borderColor:"var(--accent)",boxShadow:"0 0 0 3px color-mix(in srgb, var(--accent) 25%, transparent)"},swatchRow:{display:"flex",alignItems:"center",gap:5,position:"relative"},swatch:{width:22,height:22,borderRadius:"50%",border:"1px solid rgba(0,0,0,0.08)"},themeCheck:{marginLeft:"auto",width:20,height:20,borderRadius:"50%",background:"var(--accent)",color:"#fff",display:"grid",placeItems:"center"},themeName:{fontSize:14,fontWeight:700,display:"flex",alignItems:"center",gap:6},darkTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",background:"var(--hover)",color:"var(--text-2)",padding:"1px 6px",borderRadius:6},themeDesc:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4}};wn(Tu(),!1);const Fn={habits:{label:"Habits",icon:Cm,component:Vm},quadrant:{label:"Quadrant",icon:fu,component:Lm},goals:{label:"Goals",icon:ma,component:Pm},grove:{label:"Grove",icon:zm,component:Mf},worth:{label:"Worth",icon:vm,component:Lf},vault:{label:"Vault",icon:mu,component:Gf},journal:{label:"Journal",icon:bu,component:nf},revision:{label:"Revision",icon:vu,component:vf},affirmations:{label:"Affirmations",icon:hu,component:xf},skills:{label:"Skills",icon:pm,component:of},spiritual:{label:"Spiritual",icon:Ho,component:af}},Eu=["habits","quadrant","goals","grove","journal","revision","affirmations","skills","spiritual","worth","vault"];function Bo(t){const e=Eu.filter(s=>Fn[s]),n=[...(Array.isArray(t)?t:[]).filter(s=>Fn[s])];return e.forEach(s=>{n.includes(s)||n.push(s)}),n}function tv(){const[t,e]=k.useState(()=>window.innerWidth<720);return k.useEffect(()=>{const r=()=>e(window.innerWidth<720);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),t}function ev(){const[t,e]=k.useState("habits"),[r,n]=k.useState(!1),[s,i]=k.useState(null),[l,a]=k.useState(!1),[d,g]=k.useState(!1),[m,v]=k.useState(Tu()),[p,j]=k.useState(ms()),[S,w]=k.useState(()=>Bo(Eu)),[I,b]=k.useState([]),c=tv();k.useEffect(()=>{let G=!1;const N=()=>{bl(),i(null)};return window.addEventListener("anvil-unauthorized",N),va()?H.me().then(z=>{G||i(z)}).catch(()=>{}).finally(()=>{G||a(!0)}):a(!0),()=>{G=!0,window.removeEventListener("anvil-unauthorized",N)}},[]),k.useEffect(()=>{s&&(H.getSetting("theme").then(G=>{G!=null&&G.value&&v(wn(G.value))}).catch(()=>{}),H.getSetting("currency").then(G=>{G!=null&&G.value&&j(Ud(G.value))}).catch(()=>{}),H.getSetting("sidebar_order").then(G=>{Array.isArray(G==null?void 0:G.value)&&w(Bo(G.value))}).catch(()=>{}),H.getSetting("sidebar_hidden").then(G=>{Array.isArray(G==null?void 0:G.value)&&b(G.value)}).catch(()=>{}))},[s]);function u(G){e(G),n(!1)}const x=()=>{bl(),i(null)},h=G=>{wn(G,!1)},C=G=>{v(wn(G)),H.setSetting("theme",G).catch(()=>{}),g(!1)},R=()=>{wn(m,!1),g(!1)},B=G=>{j(Ud(G)),H.setSetting("currency",G).catch(()=>{})},M=(G,N)=>{if(w(Bo(G)),b(N),g(!1),H.setSetting("sidebar_order",G).catch(()=>{}),H.setSetting("sidebar_hidden",N).catch(()=>{}),N.includes(t)){const z=Bo(G).find(f=>!N.includes(f));z&&e(z)}},_=S.filter(G=>!I.includes(G));if(!l)return o.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:"'Inter',system-ui,sans-serif",color:"var(--text-3)"},children:"Loading…"});if(!s)return o.jsx(Nf,{onAuthed:i});const et=Fn[t],rt=et.component,Z=()=>o.jsx("div",{style:ct.navItems,children:_.map(G=>{const N=Fn[G];if(!N)return null;const z=N.icon,f=t===G;return o.jsxs("button",{onClick:()=>u(G),title:N.label,style:{...ct.navItem,...f?ct.navItemOn:{}},children:[o.jsx(z,{size:18}),o.jsx("span",{style:ct.navLabel,children:N.label})]},G)})}),dt=()=>o.jsxs("div",{style:ct.footerWrap,children:[o.jsxs("button",{onClick:()=>g(!0),style:ct.settingsBtn,title:"Settings",children:[o.jsx(jm,{size:17}),o.jsx("span",{children:"Settings"})]}),o.jsxs("div",{style:ct.userFooter,children:[o.jsxs("div",{style:ct.userInfo,children:[o.jsx("div",{style:ct.userAvatar,children:(s.name||s.email||"?").charAt(0).toUpperCase()}),o.jsxs("div",{style:{minWidth:0},children:[o.jsx("div",{style:ct.userName,children:s.name||"You"}),o.jsx("div",{style:ct.userEmail,children:s.email})]})]}),o.jsx("button",{onClick:x,style:ct.logoutBtn,title:"Sign out",children:o.jsx(ym,{size:16})})]})]});return o.jsxs("div",{style:ct.shell,children:[!c&&o.jsxs("nav",{style:ct.nav,children:[o.jsxs("div",{style:ct.brand,children:[o.jsx("div",{style:ct.brandLogo,children:"B"}),o.jsx("span",{style:ct.brandName,children:"Anvil"})]}),o.jsx(Z,{}),o.jsx(dt,{})]}),c&&r&&o.jsx("div",{style:ct.overlay,onClick:()=>n(!1),children:o.jsxs("nav",{style:ct.drawer,onClick:G=>G.stopPropagation(),children:[o.jsxs("div",{style:ct.drawerHeader,children:[o.jsxs("div",{style:ct.brand,children:[o.jsx("div",{style:ct.brandLogo,children:"B"}),o.jsx("span",{style:ct.brandName,children:"Anvil"})]}),o.jsx("button",{style:ct.closeBtn,onClick:()=>n(!1),children:o.jsx(bt,{size:20})})]}),o.jsx(Z,{}),o.jsx(dt,{})]})}),o.jsxs("div",{style:ct.content,children:[c&&o.jsxs("div",{style:ct.topBar,children:[o.jsx("button",{style:ct.menuBtn,onClick:()=>n(!0),children:o.jsx(pa,{size:22})}),o.jsx("span",{style:ct.topBarTitle,children:et.label}),o.jsx("div",{style:{width:38}})]}),o.jsx("main",{style:ct.main,children:o.jsx(rt,{})})]}),d&&o.jsx(qf,{screens:Fn,order:S,hidden:I,themeId:m,currency:p,onSaveSidebar:M,onPreviewTheme:h,onCommitTheme:C,onSelectCurrency:B,onClose:R})]})}const ct={shell:{display:"flex",height:"100vh",overflow:"hidden",fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)"},nav:{width:200,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column",padding:"20px 10px",gap:2},brand:{display:"flex",alignItems:"center",gap:9,padding:"6px 10px 20px",borderBottom:"1px solid var(--border)",marginBottom:8},brandLogo:{width:30,height:30,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:14,fontWeight:800,fontFamily:"'Fraunces', Georgia, serif",flexShrink:0},brandName:{fontSize:16,fontWeight:700,letterSpacing:"-0.01em",color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},navItems:{display:"flex",flexDirection:"column",gap:2},navItem:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},navItemOn:{background:"var(--hover)",color:"var(--text)",fontWeight:700},footerWrap:{marginTop:"auto",paddingTop:8},settingsBtn:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},userFooter:{marginTop:4,paddingTop:12,borderTop:"1px solid var(--border)",display:"flex",alignItems:"center",gap:8},userInfo:{display:"flex",alignItems:"center",gap:8,flex:1,minWidth:0},userAvatar:{width:30,height:30,borderRadius:"50%",background:"#8268B0",color:"#fff",display:"grid",placeItems:"center",fontSize:13,fontWeight:700,flexShrink:0},userName:{fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},userEmail:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logoutBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",padding:7,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},navLabel:{flex:1},content:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},main:{flex:1,overflowY:"auto",overflowX:"hidden"},topBar:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"var(--surface)",borderBottom:"1px solid var(--border)",flexShrink:0},topBarTitle:{fontSize:16,fontWeight:700,color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},menuBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text)",padding:8,borderRadius:8,display:"grid",placeItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:100,display:"flex"},drawer:{width:220,background:"var(--surface)",height:"100%",display:"flex",flexDirection:"column",padding:"16px 10px",gap:2,boxShadow:"4px 0 24px rgba(0,0,0,0.12)"},drawerHeader:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:4},closeBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",padding:6,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0}};au(document.getElementById("root")).render(o.jsx(k.StrictMode,{children:o.jsx(ev,{})}));
